# Philosophy of Physics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course asks what our best physical theories say the world is like: what a measurement is when
the wave function obeys a linear law, what Bell's theorem rules out and whether that can live with
relativity, whether space and spacetime are things or patterns of relations, where time's arrow and
the probabilities of statistical mechanics come from, and what symmetry, gauge freedom and effective
field theories show about what is real. It takes no side between interpretations of quantum
mechanics, between substantivalism and relationalism, or between accounts of statistical
probability. Every position is stated as its defenders state it, with the premise its critics
attack, and no entry records a verdict. The physics it cites is settled and is stated as settled:
the Bell violations, no-signalling, what decoherence does, the counting of microstates. Use the card
mid-problem to find what a word means ([Terms](#terms)), a position and its traps
([Positions and distinctions](#positions-and-distinctions)), a formal statement with every symbol
defined ([Formulas and formal statements](#formulas-and-formal-statements)), an argument's premises
in outline ([Arguments](#arguments)), or who said what and when
([Thinkers and texts](#thinkers-and-texts)). Topics another course owns are listed with their
owners in [Assumed, not taught here](#assumed-not-taught-here), and the recurring traps are in
[Pitfalls](#pitfalls).

## Terms

Technical vocabulary in first-appearance order, glossed as the lessons gloss it. Terms with a full
entry below link to it. *First used* is the first lesson that uses the term in this sense; titles,
forward pointers, solutions and passing uses in another sense don't count, and where a later lesson
defines the term the gloss points to it. Letters get reused, so read a letter with its lesson:
$\lambda$ is GRW's localization rate (written $\lambda_{\rm GRW}$) in 2.2, the complete state in
Module 3, a Lyapunov exponent in 5.2 and a scale factor in 6.1 P3; $\rho$ is a density matrix in
Module 1, a density of configurations in 2.1, a measured radius in 4.4, a charge density in 5.3 and
a probability density on phase space in 5.4–5.6; $a$ is GRW's localization width in 2.2, a
measurement setting in Module 3 and an acceleration in 6.3; (A), (B) and (C) are 1.1's trilemma
claims; and premise labels such as P1 belong to their lesson.

| Term | Means | First used |
|---|---|---|
| [measurement problem](#measurement-problem) | quantum mechanics has two laws for one process (linear evolution, and collapse "on measurement") and no rule for when each applies, though measuring devices are quantum systems too; not "measurement disturbs the system" | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [linear dynamics](#linear-dynamics), process 2 | evolution by the Schrödinger equation, a linear map: the evolution of a sum is the sum of the evolutions; von Neumann's process 2 | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [collapse postulate](#collapse-postulate), process 1 | on measurement the state jumps to the eigenstate matching the result, with Born probability; von Neumann's process 1 | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [Maudlin's trilemma](#maudlins-trilemma), problem of outcomes | three claims of which any two rule out the third: (A) completeness, (B) linearity, (C) determinate outcomes (Maudlin 1995, his first problem) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| (A) completeness | the wave function fixes, directly or indirectly, every physical property of the system | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| (B) linearity | the wave function always evolves by a linear equation such as Schrödinger's, measuring devices included | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| (C) determinate outcomes | measurements always, or at least usually, end with the device indicating one result and not the other | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| exit | a way of restoring consistency by denying one of (A), (B), (C), or the presupposition all three share, that the wave function describes the system | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [eigenvalue-eigenstate link](#eigenvalue-eigenstate-link) | a system has a definite value of an observable if and only if its state is an eigenstate of that observable; a premise, not a result | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [textbook collapse view](#textbook-collapse-view) | the von Neumann–Dirac view: the state is the whole physical state, evolves linearly between measurements and really jumps on measurement, with properties read off by the eigenvalue-eigenstate link (set out in [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| ready state, pointer states | a device's state before measuring, $\lvert r\rangle$, and the orthonormal states that record each result, $\lvert U\rangle$ and $\lvert D\rangle$ | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [ideal measurement](#ideal-measurement) | an interaction that, when the system already has a definite value, makes the pointer record it and leaves the system unchanged | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| chain lemma | with linearity, an ideal measurement of a superposition ends in the superposition of the recorded outcomes: a linear law runs each term through separately and adds the results | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [von Neumann chain](#von-neumann-chain), measurement chain | the links system, apparatus, retina, optic nerve, brain, each a further measurement, along which linearity carries the superposition (von Neumann 1932) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| cut, [Heisenberg cut](#heisenberg-cut) | the boundary between observed and observer at which collapse is applied; movable along the chain without changing the predicted statistics; [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) gives it Heisenberg's name and Bohr's "a question of convenience" | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| abstract ego | von Neumann's term for the observer's end of the chain | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| symmetry step | the trilemma argument's premise that a superposition with equal amplitudes favours neither result, so cannot represent a device showing one; not logic, which is why Maudlin grants the three claims are not strictly inconsistent | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [problems of statistics and effect](#problems-of-statistics-and-effect) | Maudlin's second and third problems: a complete, deterministically evolving wave function gives identical states identical results, against the Born frequencies; an outcome-producing mechanism must change what later measurements predict | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [determinism](#determinism), deterministic | a theory is deterministic if any two histories its laws allow that agree at one time agree at all times: a property of theories (Earman's definition, stated in [5.1](lessons/05-01-determinism-in-physical-theories.md)) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| ["Against 'measurement'"](#against-measurement), "shifty" split | Bell (1990): "measurement" marks where the second law takes over without naming a physical process, so it has no place in an exact theory; "shifty" is his word for the undefined split between the two laws | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [Bohmian mechanics](#bohmian-mechanics) | particles always have positions, guided by a wave function that never collapses: the exit that adds variables and denies (A) (taught in [2.1](lessons/02-01-bohmian-mechanics.md)) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [GRW theory](#grw-theory), collapse theory | a stochastic, nonlinear modification of the Schrödinger equation in which wave functions spontaneously localize: the exit that changes the dynamics and denies (B) (taught in [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [many-worlds interpretation](#many-worlds-interpretation), Everett | the wave function is complete and never collapses; every outcome occurs, each relative to a branch: the exit that denies (C) (taught in [2.3](lessons/02-03-many-worlds-branching.md)) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [consciousness causes collapse](#consciousness-causes-collapse) | linear evolution holds until a conscious mind registers a result, and the registering reduces the state (Wigner 1961); not von Neumann's thesis | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [Schrödinger's cat](#schrodingers-cat) | a cat whose life hangs on one atom's decay ends, under linear evolution, in a superposition of alive and dead; Schrödinger's 1935 argument against the completeness of the wave function, not a picture of collapse | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [Wigner's friend](#wigners-friend) | a friend measures inside a sealed lab and assigns a collapsed state while Wigner outside assigns the lab a superposition; the textbook theory does not say who is right while the door is shut (Wigner 1961; Everett 1956–57) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| [decoherence](#decoherence) | entanglement with a recording environment that suppresses interference in the system's own statistics; derived from linear evolution, it relocates the superposition into system-environment correlations and destroys nothing | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| record states, environment overlap $\eta$ | the environment's normalized records of each result, $\lvert E_\uparrow\rangle$ and $\lvert E_\downarrow\rangle$, with overlap $\eta = \langle E_\uparrow\vert E_\downarrow\rangle$: $\eta = 1$ means no record, $\eta = 0$ a perfect one | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| coherence | an off-diagonal entry of the density matrix, the term that produces interference; decoherence multiplies it by the records' overlap and leaves the diagonal (the Born weights) alone | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [reduced density matrix](#reduced-density-matrix), $\rho_S$ | the subsystem's state, obtained from the global state by the partial trace over the environment; it fixes every statistic of measurements on the subsystem alone | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| partial trace, $\mathrm{Tr}_E$ | the map that discards the environment while keeping every subsystem statistic ([`quantum-computing` 2.2](../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md)) | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| purity | $\mathrm{Tr}\,\rho^2$: 1 for a pure state, less for a mixed one | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [proper mixture](#proper-and-improper-mixtures) | each member of an ensemble is in one definite state and we do not know which (d'Espagnat's term) | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [improper mixture](#proper-and-improper-mixtures) | the state of part of an entangled whole, which still contains both terms: same matrix as a proper mixture, different global state and joint statistics | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| pointer states (Zurek) | the states the system-environment interaction leaves unentangled and pure, so the basis in which the reduced state goes diagonal | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [einselection](#einselection) | environment-induced superselection (Zurek): the interaction, not an observer, picks the basis in which the reduced state goes diagonal | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [preferred-basis problem](#preferred-basis-problem) | why things look definite in one quantity, such as position, rather than in a superposition of positions; decoherence answers it | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [and-or problem](#and-or-problem) | why one outcome rather than all, when the decohered global state still contains all: Bell's "and" against "or"; decoherence leaves it open | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [FAPP](#fapp) | "for all practical purposes" (Bell): true for every feasible experiment, though not exactly | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| recoherence | recovering a lost coherence by undoing the interaction, or by measuring a joint observable on system plus environment | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [branch](#branching), world, branching | in the Everettian sense, a decohered, quasi-classical component of the universal state that no longer interferes with its siblings; branching divides amplitude and creates no matter | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| emergent, [emergent branches](#emergent-branches) | fixed by the fundamental state though not read off it unaided, and only approximately defined, as quasi-particles such as phonons are (Wallace); for branches, no exact fact about how many there are ([2.3](lessons/02-03-many-worlds-branching.md)) | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| [quantum postulate](#quantum-postulate) | Bohr (1927): every atomic process has an essential discontinuity symbolized by Planck's constant, so observation involves an interaction with the instrument that cannot be neglected | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| classical concepts | for Bohr, the everyday and classical-physics terms in which arrangements and results must be reported to others | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [complementarity](#complementarity) | for Bohr, space-time coordination and causality as "complementary but exclusive features of the description", needing arrangements that exclude each other; wave and particle is one illustration, not the definition | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| phenomenon (Bohr) | a whole experimental arrangement together with its result | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [Copenhagen interpretation](#copenhagen-interpretation) | a family name, not one view: Heisenberg's 1955 label, whose observer-induced collapse was Heisenberg's, not Bohr's (Howard 2004) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [ontological model](#ontological-model) | preparing $\psi$ yields an ontic state $\lambda$ with distribution $\mu_\psi(\lambda)$, and $\lambda$ fixes the outcome probabilities $\xi(k\mid\lambda,M)$ (Harrigan and Spekkens 2010) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| ontic state | the complete physical state of a system in an ontological model | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [ψ-ontic, ψ-epistemic](#psi-ontic-and-psi-epistemic) | ψ-ontic: distinct pure states never share an ontic state, so the ontic state fixes $\psi$; ψ-epistemic otherwise, the wave function partly information about the ontic state | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [PBR theorem](#pbr-theorem) | an ontological model that reproduces the quantum predictions and satisfies preparation independence is ψ-ontic (Pusey, Barrett and Rudolph 2012) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [preparation independence](#preparation-independence) | independently prepared systems have independent ontic states: $\mu_{\psi\otimes\phi} = \mu_\psi\,\mu_\phi$ | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [QBism](#qbism) | a quantum state encodes one agent's credences about her own future experiences and describes the system not even partly; the Born rule is a coherence norm, collapse her updating (Caves, Fuchs and Schack from 2002) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| credence, $\mathrm{cr}$ | an agent's degree of belief ([`epistemology` 5.1](../epistemology/lessons/05-01-credences-and-probabilism.md)) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| participatory realism | Fuchs's name (2017) for QBism's stance: quantum theory as a users' manual for acting in a real world | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [Principal Principle](#principal-principle) | known chances fix credence: $\mathrm{cr}(A\mid\Pr(A) = x \wedge E) = x$ for admissible $E$ (Lewis 1980; stated in [5.6](lessons/05-06-probability-in-statistical-mechanics.md)) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| element of reality | EPR's term: a value of a physical quantity fixed by the system's real state; for QBism, probability 1 is an agent's certainty, not one of these | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [relational quantum mechanics](#relational-quantum-mechanics), RQM | a variable takes a value only in an interaction, relative to the system it affects; relative to a third system the pair may still be in superposition, and there is no absolute state (Rovelli 1996) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| relative fact | in RQM, the value a variable takes relative to the system it interacts with | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [cross-perspective link](#cross-perspective-link) | the RQM postulate that measuring a system's pointer reveals what that system registered (Adlam and Rovelli 2023) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [changing the subject](#changing-the-subject) | the charge that Bohr, QBism and RQM answer a different question: the problem asks how the world comes to contain one result, and each answers with a primitive physics leaves undefined | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| [hidden variables](#hidden-variables) | variables beyond $\psi$ that fix outcomes; in Bohm, the positions, which Bell called absurdly named since they are what we see; in [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) one way of making the complete state complete, not a premise of Bell's theorem | [2.1](lessons/02-01-bohmian-mechanics.md) |
| pilot wave | de Broglie's 1927 name for the guiding wavefunction | [2.1](lessons/02-01-bohmian-mechanics.md) |
| configuration $Q$, configuration space | the actual positions of all $N$ particles, one point in the $3N$-dimensional configuration space on which the wavefunction is a function | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [primitive ontology](#primitive-ontology) | what a theory says exists in ordinary space, the matter the wave governs: for Bohm, particles with positions (Dürr, Goldstein and Zanghì 1992; a programme from Allori, Goldstein, Tumulka and Zanghì 2008) | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [guidance equation](#guidance-equation) | each particle's velocity is $\frac{\hbar}{m_k}\mathrm{Im}(\nabla_k\psi/\psi)$ at the actual configuration: the probability current divided by the density; first-order, so the theory is deterministic | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [equivariance](#equivariance) | if positions are distributed as $\lvert\psi\rvert^2$ at one time, the guidance flow keeps them so at every time | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [quantum equilibrium](#quantum-equilibrium) | the hypothesis that configurations are distributed as $\lvert\psi\rvert^2$ of the relevant wavefunction | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [typicality](#typicality), typical | true of all but a small set, by a stated measure; Dürr, Goldstein and Zanghì take the universe's initial configuration to be typical relative to $\lvert\Psi\rvert^2$, as [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) and [5.6](lessons/05-06-probability-in-statistical-mechanics.md) do for phase space | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [absolute uncertainty](#absolute-uncertainty) | Dürr, Goldstein and Zanghì's name for a limit, set by quantum equilibrium, on what anyone inside a Bohmian universe can know about positions | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [quantum non-equilibrium](#quantum-non-equilibrium) | configurations not distributed as $\lvert\psi\rvert^2$; Valentini holds equilibrium is reached by relaxation, so non-equilibrium may have existed in the early universe | [2.1](lessons/02-01-bohmian-mechanics.md) |
| effective collapse | in Bohmian mechanics, the textbook collapse rule recovered as a theorem: once pointer packets separate, only the occupied term guides, and the subsystem's conditional wave function has jumped while the universal one has not | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [conditional wave function](#conditional-wave-function), effective wavefunction | a subsystem's wavefunction got by putting the actual configuration $Y$ of everything else into the universal one, $\psi(x) = \Psi(x,Y)$; effective when it evolves on its own | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [empty wave packets](#empty-wave-packets) | after a measurement, the packets the actual configuration does not occupy: they obey the same law but are idle while they stay apart | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [contextuality](#contextuality), contextual | a measured result depends on the experimental arrangement, not only on a value the system carried in (Albert's reversed magnet); in [3.2](lessons/03-02-what-bell-rules-out.md), a value depending on which compatible observables are measured with it | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [Kochen–Specker theorem](#kochen-specker-theorem) | for one system with three or more levels, no assignment of definite values to all observables can be independent of which compatible observables are measured alongside (Bell 1966; Kochen and Specker 1967; owned by [3.2](lessons/03-02-what-bell-rules-out.md)) | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [preferred foliation](#preferred-foliation), foliation | a foliation slices spacetime into spacelike hypersurfaces, each a candidate "now"; a preferred one privileges a slicing, as Bohm's same-instant guidance needs ([3.3](lessons/03-03-nonlocality-and-relativity.md)) | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [surrealistic trajectories](#surrealistic-trajectories) | Bohmian trajectories macroscopically at odds with the track one-bit which-way detectors record (Englert, Scully, Süssmann and Walther 1992) | [2.1](lessons/02-01-bohmian-mechanics.md) |
| one-bit which-way detector | a device, such as a cavity that keeps a photon, that records which arm a particle took in a degree of freedom that is not a position | [2.1](lessons/02-01-bohmian-mechanics.md) |
| weak measurement | a minimally disturbing measurement; averaged over a post-selected ensemble it reconstructs average trajectories (Mahler and colleagues 2016) | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [Liouville measure](#liouville-measure) | phase-space volume, preserved by Hamiltonian flow (Liouville's theorem); normalized on an energy surface, the microcanonical measure | [2.1](lessons/02-01-bohmian-mechanics.md) |
| quantum potential $Q_{\rm B}$ | in Bohm's second-order form, $Q_{\rm B} = -\frac{\hbar^2}{2m}\frac{\nabla^2 R}{R}$ with $R = \lvert\psi\rvert$, an extra potential in Newton's law; Dürr, Goldstein and Zanghì take the first-order guidance equation as fundamental | [2.1](lessons/02-01-bohmian-mechanics.md) |
| [determinism and predictability](#determinism-and-predictability) | a deterministic theory can defeat every finite predictor: Bohm is deterministic yet no more predictable than the Born probabilities ([5.1](lessons/05-01-determinism-in-physical-theories.md), [5.2](lessons/05-02-chaos-and-predictability.md)) | [2.1](lessons/02-01-bohmian-mechanics.md) |
| nomological wavefunction | the wavefunction read as an object that expresses how the particles move, as the Hamiltonian does, rather than a physical field (Dürr, Goldstein and Zanghì 1997) | [2.1](lessons/02-01-bohmian-mechanics.md) |
| hit, spontaneous localization | GRW's random multiplication of the wavefunction by a Gaussian of width $a$ in one particle's coordinate, then renormalization; the centre lands where the wave is big | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [localization width](#localization-width) $a$ | the width of GRW's Gaussian, chosen as $10^{-7}$ m; GRW's convention puts $2a^2$ in the amplitude's exponent, while Allori and colleagues' amplitude carries $4\sigma^2$ | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [localization rate](#localization-rate) $\lambda_{\rm GRW}$ | hits per second per particle (per nucleon in mass-proportional versions), chosen as $10^{-16}\,\mathrm{s}^{-1}$; subscripted because Module 3's $\lambda$ is the complete state | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [amplification](#amplification) | one hit on any displaced particle of a pointer settles the whole macroscopic superposition, so what counts is the number of particles displaced by more than $a$ | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| mass-proportional collapse | versions whose rate is proportional to each particle's mass, $10^{-16}\,\mathrm{s}^{-1}$ per nucleon, after the original model's energy production clashed with proton-lifetime data (Pearle and Squires 1994) | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [CSL](#csl) | continuous spontaneous localization (Pearle 1989; Ghirardi, Pearle and Rimini 1990): a continuous random drift of the state in place of jumps, respecting identical-particle symmetry | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| white-noise, coloured-noise and dissipative CSL | variants of CSL with separate parameter spaces; XENONnT (2026) excluded white-noise CSL's originally proposed parameters | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| Diósi–Penrose model | gravity-related collapse: a superposition of differently curved spacetimes decays; its parameter-free version was ruled out (2020), and it survives with a free cutoff | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| GRW0, GRWm, GRWf | GRW read with the wavefunction alone, with a mass density, or with flashes (the last two named by Allori, Goldstein, Tumulka and Zanghì 2008) | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [wavefunction realism](#wavefunction-realism) | the wavefunction of $N$ particles is a field on $3N$-dimensional configuration space, and that space is fundamental (Albert 1996; Ney 2021; set out in [2.3](lessons/02-03-many-worlds-branching.md)) | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [flash ontology](#flash-ontology), flash | what exists is the hits themselves, points of spacetime: matter is "a galaxy of such events" (Bell 1987), and space between flashes is empty | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [mass-density ontology](#mass-density-ontology), $m(\mathbf x,t)$ | what exists is a field $m(\mathbf x,t) = \langle\psi_t\vert M(\mathbf x)\vert\psi_t\rangle$, with $M(\mathbf x)$ the mass-density operator; a particle in two packets has half its mass in each (Ghirardi, Grassi and Benatti 1995) | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [tails problem](#tails-problem), tails | a Gaussian is never zero, so after a hit the crushed term survives, tiny: is the other outcome gone? | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| bare tails, structured tails | McQueen's (2015) distinction: a tail as mere nonzero amplitude, against a low-weight copy of the other outcome with all its structure | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| [tests of collapse models](#tests-of-collapse-models) | interferometric tests, and decisive non-interferometric ones: collapse jiggles matter, which heats it, shakes test masses and makes charged particles radiate | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| pure wave mechanics | Everett's name for quantum mechanics with the collapse rule dropped and the Schrödinger equation applied to everything | [2.3](lessons/02-03-many-worlds-branching.md) |
| [relative state](#relative-state) | the state of one subsystem given a stated state of another, $(I\otimes\langle E\vert)\vert\Psi\rangle$ normalized; for Everett an outcome is definite only relative to a record (Everett 1957) | [2.3](lessons/02-03-many-worlds-branching.md) |
| Dennett's criterion | Wallace's name (2003) for the test: a macro-object is a pattern, real if theories that include it explain and predict well | [2.3](lessons/02-03-many-worlds-branching.md) |
| [real patterns](#real-patterns) | Dennett (1991): a pattern in data is real if a description using it is more efficient than listing the data bit by bit | [2.3](lessons/02-03-many-worlds-branching.md) |
| [separability](#separability), separable | the state of a whole is fixed by the states of its parts (2.3); in [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), EPR's assumption that separated systems each have their own real state; in [6.2](lessons/06-02-gauge-as-surplus-structure.md), Healey's: every process in a region supervenes on intrinsic properties at its points | [2.3](lessons/02-03-many-worlds-branching.md) |
| nonseparability, holism | the state of a whole or a region is not fixed by the states of its parts or subregions | [2.3](lessons/02-03-many-worlds-branching.md) |
| [spacetime state realism](#spacetime-state-realism) | spacetime is fundamental and each region has a quantum state, its reduced density operator; the price is nonseparability (Wallace and Timpson 2010) | [2.3](lessons/02-03-many-worlds-branching.md) |
| incredulous stare | Lewis's name for the reaction to his plurality of worlds, which Everett meets too | [2.3](lessons/02-03-many-worlds-branching.md) |
| [fallacy of exactness](#fallacy-of-exactness) | Wallace's name for the demand (Kent 1990) for an explicit, precise rule fixing the branches, when emergent structure is always approximate | [2.3](lessons/02-03-many-worlds-branching.md) |
| [Everettian and cosmological multiverses](#everettian-and-cosmological-multiverses) | two things sharing a word: Everett's branches come from applying the Schrödinger equation to everything, the cosmological multiverse from particular cosmological models, invoked for fine-tuning | [2.3](lessons/02-03-many-worlds-branching.md) |
| local and global branching | branching that spreads out from the interaction (Wallace), against branching of whole worlds at once (Vaidman) | [2.3](lessons/02-03-many-worlds-branching.md) |
| [incoherence problem](#incoherence-problem) | if every outcome occurs, what is there to be uncertain about? (named by Wallace 2003) | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [quantitative problem](#quantitative-problem) | granted some uncertainty, why should it follow squared amplitudes rather than an equal share per branch? (Wallace 2003) | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [evidential problem](#evidential-problem) | how can observed frequencies confirm a theory on which every frequency is observed? (Greaves and Myrvold 2010) | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [branch counting](#branch-counting) | an equal share per branch, $2^{-n}$ after $n$ two-way splits: indifference applied to branches | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [Born weight](#born-weight) | the squared amplitude of a branch, or the total over a set of branches | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [Deutsch–Wallace theorem](#deutsch-wallace-theorem) | a representation theorem: agents whose preferences obey Wallace's axioms act as if maximizing expected utility with Born weights as probabilities | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| act, reward | in Everettian decision theory, a physical operation available at quantum state $\psi$, ending in rewards in its branches | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| richness axioms | reward availability, branching availability, erasure, problem continuity: which acts are available | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| rationality axioms | ordering, diachronic consistency, macrostate indifference, branching indifference, state supervenience, solution continuity: the six that carry the argument | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| erasure | an agent can erase records she does not care about, such as which result was rewarded, leaving only the reward | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [diachronic consistency](#diachronic-consistency) | if each future self will prefer $V_i$ to $V_i'$ in her branch, the agent now prefers the plan containing the $V_i$ | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| macrostate indifference | not caring which microstate realizes an outcome | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [branching indifference](#branching-indifference) | a measurement that splits your future into several macrostates, all with the same reward, leaves an act's value unchanged | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| state supervenience | preferences between acts depend only on the physical state the acts produce | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| solution continuity | tiny changes to acts do not flip preferences | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| caring measure | Greaves's (2004) reading of the Born weights: how much a rational Everettian should care about each successor, with no uncertainty | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| subjective uncertainty | Saunders's (1998) view, from Parfit's fission cases, that one awaiting branching should expect to become one successor or another | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [fatness rule](#fatness-rule) | Albert's (2010) counterexample weighting: each branch weighted by its Born weight times your body mass there, renormalized | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [self-locating uncertainty](#self-locating-uncertainty) | ignorance, after decoherence and before looking, of which branch you are in: of where you are, not of what happens (Vaidman 1998) | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| sleeping-pill case | Vaidman's illustration: carried asleep to room A or B by the outcome, you wake with eyes closed, unsure which room you are in | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| [epistemic separability principle](#epistemic-separability-principle) | changes purely to the environment do not change the credences you should assign to outcomes in a local subsystem (Sebens and Carroll 2018) | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| some-successor likelihood | the likelihood of a record read as the chance that some successor makes it: 1 for every record on every Everettian rival, so no data favour one | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| Born-typical branch | (2.4 P2) a branch whose frequency of up lies within a stated band around the Born probability | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| completeness condition | EPR's necessary condition: a complete theory contains a counterpart for each element of physical reality | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [criterion of reality](#criterion-of-reality) | EPR's sufficient condition: if a quantity's value can be predicted with certainty without disturbing the system, an element of reality corresponds to it | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| separability and locality (EPR) | systems far apart each have their own real state, and a measurement on one makes no real change in the other; assumed without comment | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [EPR argument](#epr-argument) | from the criterion of reality, separability and locality, the conclusion that quantum mechanics is incomplete (Einstein, Podolsky and Rosen 1935); Einstein later recast it as a dilemma, incomplete or nonlocal | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| settings $a, a', b, b'$; outcomes $A, B$ | Alice's and Bob's measurement choices, and their results, each $\pm 1$ | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| complete state $\lambda$, $p(\lambda)$ | whatever a theory says fixes the probabilities of later events at the source, the quantum state alone or the state plus hidden variables; its distribution is $p(\lambda)$, keeping $\rho$ for density matrices | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| correlation $E(a,b)$, CHSH quantity $S$ | $E(a,b) = \sum AB\,P(A,B\mid a,b)$, and $S = E(a,b) - E(a,b') + E(a',b) + E(a',b')$ ([`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md)'s convention) | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [single outcomes](#single-outcomes) | each run ends with exactly one value of $A$ and one of $B$, so each correlation averages one product per run | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| spacelike separation | two events no signal at or below light speed can connect; their time order depends on the frame ([3.3](lessons/03-03-nonlocality-and-relativity.md)) | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [local causality](#local-causality) | Bell: the probability of an event, given a complete specification of its past light cone, is unchanged by information about spacelike-separated events (1976; the 1990 version uses a region that shields the event) | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [factorizability](#factorizability), F | $P(A,B\mid a,b,\lambda) = P(A\mid a,\lambda)\,P(B\mid b,\lambda)$: given the complete state, one side's setting and result tell you nothing more about the other's result | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [measurement independence](#measurement-independence) | $p(\lambda\mid a,b) = p(\lambda)$: the population of complete states is the same whichever settings are chosen; a claim of statistical independence, not of free will | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [CHSH inequality](#chsh-inequality), Bell inequalities | $\lvert S\rvert \le 2$ for theories satisfying single outcomes, local causality and measurement independence; the Bell inequalities are the four versions with the minus sign in each place | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [Fine's theorem](#fines-theorem) | given setting-independent marginals: a deterministic model exists iff a factorizable stochastic one does, iff one joint distribution of all four quantities reproduces the pair statistics, iff all four Bell inequalities hold (Fine 1982) | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [Tsirelson's bound](#tsirelson-bound) | $\lvert S\rvert \le 2\sqrt2$, the most any quantum state allows (Cirel'son 1980); the singlet reaches it | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [outcome determinism](#outcome-determinism), OD | $\lambda$ fixes each outcome with probability 0 or 1: [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md)'s "realism"; used and then discharged in the proof, not a premise | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| Reichenbach's common-cause principle | correlated events not causally linked have a common cause that screens off the correlation | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| singlet, EPRB | Bohm's 1951 spin version of the EPR set-up, using the singlet $\lvert\Psi^-\rangle$, which gives opposite results whenever both sides measure along one axis | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [local beables](#local-beables) | what a theory says physically exists in a region of spacetime (Bell) | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [no-signalling](#no-signalling) | each side's observable statistics, marginals averaged over $\lambda$, do not depend on the other side's setting; a theorem of quantum mechanics for local operations ([3.3](lessons/03-03-nonlocality-and-relativity.md)) | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| [parameter independence](#parameter-independence), PI | given the complete state, the chances at one wing do not depend on the setting chosen at the other | [3.2](lessons/03-02-what-bell-rules-out.md) |
| [outcome independence](#outcome-independence), OI | given the complete state and both settings, learning the far outcome tells you nothing more about the near one | [3.2](lessons/03-02-what-bell-rules-out.md) |
| [Jarrett decomposition](#jarrett-decomposition) | factorizability holds iff parameter and outcome independence both hold (Jarrett 1984, who called them "locality" and "completeness"; the names PI and OI are Shimony's) | [3.2](lessons/03-02-what-bell-rules-out.md) |
| [loopholes](#loopholes) | features of how a Bell test was run that leave local models open: locality, detection, freedom of choice; the first two were closed together in 2015, while measurement independence can only be pushed back | [3.2](lessons/03-02-what-bell-rules-out.md) |
| [superdeterminism](#superdeterminism) | a common past fixes both the settings and $\lambda$, so measurement independence fails | [3.2](lessons/03-02-what-bell-rules-out.md) |
| [conspiracy objection](#conspiracy-objection) | every randomized experiment assumes such independence, so dropping it without a specific mechanism abandons experimental science (Shimony, Horne and Clauser 1976) | [3.2](lessons/03-02-what-bell-rules-out.md) |
| cosmic Bell tests | Bell tests drawing their settings from starlight (2017) and quasar light (2018), placing any setting-source correlation billions of years in the past | [3.2](lessons/03-02-what-bell-rules-out.md) |
| [retrocausality](#retrocausality), retrocausal models | the future settings influence the state at the source (Price 1996; Wharton and Argaman 2020) | [3.2](lessons/03-02-what-bell-rules-out.md) |
| [local realism](#local-realism) | for Clauser and Shimony (1978), factorizability, chancy theories included; for Mermin (1980), parameter independence plus outcome determinism | [3.2](lessons/03-02-what-bell-rules-out.md) |
| operational reading (of locality) | locality defined by what agents can do, on which quantum mechanics keeps locality and gives up determinism (Wiseman 2014) | [3.2](lessons/03-02-what-bell-rules-out.md) |
| worldline | a body's history drawn as a line through spacetime | [3.2](lessons/03-02-what-bell-rules-out.md) |
| locally mediated | Wharton and Argaman's term for models in which every influence runs continuously along timelike paths, Lorentz covariantly | [3.2](lessons/03-02-what-bell-rules-out.md) |
| microcausality | spacelike-separated field observables commute ([`qft` 2.5](../qft/lessons/02-05-causality-microcausality.md)); the field version of no-signalling | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| [frame-dependent order](#frame-dependent-order) | for any two spacelike-separated measurements, some legitimate frame puts either one first | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| [Maudlin's taxonomy](#maudlins-taxonomy) | five things relativity might forbid: superluminal (i) matter or energy transport, (ii) signals, (iii) causal influence, (iv) information transfer, (v) laws needing spacetime structure beyond the light cones (Maudlin 1994) | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| [peaceful coexistence](#peaceful-coexistence) | Shimony's phrase (from 1978): at first resting on outcomes as transitions from potentiality to actuality, later meaning that the correlations cannot be used to signal | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| [relativistic collapse](#relativistic-collapse) | collapse made relativistic: Fleming's hyperplane-dependent states, or relativistic flash GRW | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| hyperplane-dependent state | a quantum state assigned relative to a spacelike hyperplane, collapsed on every hyperplane through the measurement (Fleming, from 1989) | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| relativistic flash GRW | GRW whose ontology is flashes governed by one Lorentz-invariant joint chance law that no foliation enters (Dove 1996; Tumulka 2006); it covers a fixed number of non-interacting particles | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| passion at a distance | Shimony's (1984) name for a nonlocal correlation built into a joint law, involving no controllable action | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| [Bell correlations and causation](#bell-correlations-and-causation) | the open question whether failure of factorizability is superluminal causal dependence (Butterfield 1992; Berkovitz 1998) or a correlation with no intrinsic direction | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| before-before experiment, multisimultaneity | a Bell test with analyzers in relative motion, each measurement first in its own analyzer's rest frame; Suarez's multisimultaneity model predicted the correlations would vanish, and they did not (Stefanov, Gisin, Suarez and Zbinden 2002) | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| [substantivalism](#substantivalism) | space (or spacetime) is a thing in its own right, existing whether or not occupied; a modern label | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [relationalism](#relationalism) | space is only the order of relations among bodies; for Leibniz, "an Order of Coexistences" | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| shift | a world exactly like ours in every relation among bodies, but placed elsewhere or moving uniformly as a whole | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [static shift](#static-shift) | the whole material world placed elsewhere in space, every relation kept | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [kinematic shift](#kinematic-shift) | the whole material world moving uniformly in a straight line, every relation kept; Clarke's (Third Reply §4), turned round by Leibniz (Fourth Paper §13) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [principle of sufficient reason](#principle-of-sufficient-reason), PSR | nothing is without a reason why it is so and not otherwise; at Leibniz's strength, God chooses nothing without a reason that favours the choice | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [identity of indiscernibles](#identity-of-indiscernibles), PII | things indiscernible from each other are one thing | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [absolute space](#absolute-space) | Newton's space, "always similar and immoveable": which point now is the same place as which point then is a fact, so place, velocity and rotation are all absolute ([4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [mere-will reply](#mere-will-reply) | Clarke: among options indifferent in their own nature, God's will alone is a sufficient reason | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [Galileo's ship](#galileos-ship) | Galileo's case of experiments in a ship's cabin that come out alike whether the ship rests or moves uniformly (taken up in [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [observability principle](#observability-principle) | Leibniz, Fifth Paper §52: there is no change where no change can be observed, motion depending on being possible to observe | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [verificationist and metaphysical readings](#verificationist-and-metaphysical-readings) | two readings of the shift arguments: the operative premise is the observability principle, or the PSR and the PII as necessary truths | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [sophisticated substantivalism](#sophisticated-substantivalism) | substantivalism that keeps spacetime points yet stops counting shifted or redistributed worlds as two, as anti-haecceitism and metric essentialism do (Belot and Earman's 2001 name, "somewhat pejorative"; [4.5](lessons/04-05-the-hole-argument.md)) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [symmetry](#symmetry) | a change that leaves something the same, where what stays the same (the laws, spacetime structure) must be said ([6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [Newton's Corollaries V and VI](#newtons-corollaries-v-and-vi) | V: motions of bodies in a given space are the same among themselves whether the space rests or moves uniformly in a straight line without rotating; VI ([4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)): bodies urged by equal accelerative forces along parallel lines move among themselves as if no such forces acted | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [absolute true motion](#absolute-true-motion) | Leibniz's Fifth Paper §53 concession: a body is truly in motion when the immediate cause of the change is in the body | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [Galilean spacetime](#galilean-spacetime), neo-Newtonian | absolute time, distance at each time and a flat connection, with no absolute space: rotation absolute, velocity not; symmetries $\mathbf x \to R\mathbf x + \mathbf u t + \mathbf a$ (Stein 1967; Earman 1989; set out in [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| [active and passive diffeomorphisms](#active-and-passive-diffeomorphisms) | active: the matter or fields move while space or the manifold stays put; passive: only the coordinates are relabelled, which changes no fact on anyone's view (formalized in [4.5](lessons/04-05-the-hole-argument.md)) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| place (Leibniz) | Fifth Paper §47: what is the same for different bodies at different moments when their relations to bodies supposed fixed agree | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| true motion | for Newton, motion with respect to absolute space, which he argued cannot be defined by relations to other bodies | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [affine structure](#affine-structure), connection | the rule saying which worldlines are straight: with it, acceleration and rotation are absolute while velocity is not | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [inertial frame](#inertial-frame) | a frame whose straight coordinate lines are the connection's straight lines, so free particles move uniformly in it | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [Newton's bucket](#newtons-bucket) | Newton's rotating bucket of water in the Scholium to the Definitions, offered as evidence of true, absolute rotation | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [rotating globes](#rotating-globes) | Newton's two globes joined by a cord, revolving in an otherwise empty space: the cord's tension shows their rotation with no reference body (Scholium, pp. 17–18) | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| endeavour to recede from the axis | Motte's phrase ("axe" for axis) for the centrifugal effect of rotation | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [Mach's principle](#machs-principle) | the demand that inertia be fixed by the universe's matter; Einstein's name (1918), not Mach's, and Mach supplied no law | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [Newtonian spacetime](#newtonian-spacetime) | absolute time, Euclidean distance at each time, and absolute space; symmetries $\mathbf x \to R\mathbf x + \mathbf a$ with $R$ and $\mathbf a$ constant | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [Leibnizian spacetime](#leibnizian-spacetime) | time and distance at each time only (Earman's name); symmetries $\mathbf x \to R(t)\mathbf x + \mathbf a(t)$, so neither velocity nor rotation is absolute | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [symmetry matching](#symmetry-matching) | Earman's demand that spacetime symmetries and dynamical symmetries coincide (his principles, [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)) | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [dynamical and spacetime symmetries](#dynamical-and-spacetime-symmetries) | a dynamical symmetry maps solutions of the laws to solutions; a spacetime symmetry preserves spacetime's absolute objects ([6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)) | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [Galilean boost](#galilean-boost) | $\mathbf x_i(t) \mapsto \mathbf x_i(t) + \mathbf v t$, the same constant $\mathbf v$ for every body: separations and accelerations unchanged | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [best matching](#best-matching) | Barbour and Bertotti's (1982) relational dynamics: each configuration is shifted and rotated against its predecessor until their difference is least | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| [regularity relationalism](#regularity-relationalism) | the laws, inertial frames included, are the best system of a world of bodies and their changing distances (Huggett 2006) | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| best system | the true axiom system that best balances simplicity, strength and fit ([`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md)) | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| frame dragging | in general relativity, rotating mass drags nearby inertial frames | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| Newton–Huygens spacetime | Saunders's (2013) name for a spacetime with absolute rotation and no absolute linear acceleration; Earman's name for it is "Maxwellian" | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| fictitious forces | the centrifugal and Coriolis terms that appear when the second law is written in a rotating frame: a frame-relative description of an effect, the surface's shape, that is the same in every frame | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| determination (Motte) | the direction or sense of a motion, as against its quantity | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| round-trip speed of light | distance there and back divided by the time on one clock; measured, it equals $c$ | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [one-way speed of light](#one-way-speed-of-light) | the speed along one leg, which needs distant synchronized clocks to measure; with Reichenbach's ε, $c/2\varepsilon$ out and $c/2(1-\varepsilon)$ back | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [conventionality of simultaneity](#conventionality-of-simultaneity) | no physical fact fixes which event at A is simultaneous with a distant event, so choosing ε is a convention (Reichenbach 1928; Grünbaum 1963); a claim about one frame, not the settled relativity of simultaneity | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [Einstein synchronization](#einstein-synchronization), standard synchrony | Einstein's rule (1905): clocks are synchronous if the trip out and the trip back take equal time; $\varepsilon = \tfrac12$ | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [Reichenbach's ε](#reichenbach-epsilon) | the fraction of the round trip assigned to the outbound leg: the reflection is at $t_1 + \varepsilon(t_3 - t_1)$, with $0 < \varepsilon < 1$ | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| midpoint-flash synchronization | setting two clocks to the same reading when a flash from their midpoint arrives ([`relativity` 1.1](../relativity/lessons/01-01-postulates-simultaneity.md)); it presupposes $\varepsilon = \tfrac12$ | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| slow clock transport | synchronizing by carrying a clock between places in the limit of zero speed (Ellis and Bowman 1967); argued to presuppose an equivalent convention | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| causal connectibility | the symmetric relation between two events that some signal no faster than light could link | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| equivalence relation, universal relation | reflexive, symmetric and transitive; holding between every pair of events | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [Malament's simultaneity theorem](#malaments-simultaneity-theorem) | from symmetric causal connectibility and one inertial worldline, the only non-trivial simultaneity relation definable under his conditions is standard synchrony (1977); not his 1996 particle theorem | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [Rietdijk–Putnam argument](#rietdijk-putnam-argument) | each observer's simultaneity, with the transitivity of "real for", makes every event real (Rietdijk 1966; Putnam 1967) | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| There Are No Privileged Observers | Putnam's principle: if all and only the things bearing a frame-independent relation to me-now are real, and you-now are real, the same holds for you-now; it needs the relation to be transitive | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [block universe](#block-universe) | every event, past, present and future, is equally real | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [point-relative becoming](#point-relative-becoming) | Stein's reply: "has already become for $x$" as lying in or on $x$'s past light cone, so becoming is relative to a here-now, not to a frame's slice (1968, 1991) | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| endurance, perdurance | persisting by being wholly present at each time, or by having temporal parts | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [frame-relative presentism](#frame-relative-presentism) | presentness relativized to frames, on which existence comes out frame-relative | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| fatalism, [determinism and fatalism](#determinism-and-fatalism) | a fated outcome does not depend on what you do, a determined one does ([`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md)); the block argument's conclusion is fatalism (Savitt's term), not determinism, since no law of motion appears in it | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| [Poincaré's heated sphere](#poincares-disk-world), disk world | Poincaré's world (1902, ch. IV), usually drawn as a disk, in which every body shrinks toward the rim by one temperature law, so its inhabitants find their space Lobachevskian while we describe a Euclidean ball | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Lobachevsky geometry | non-Euclidean geometry of constant negative curvature, in which a circle's circumference exceeds $2\pi$ times its radius | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [geometric conventionalism](#geometric-conventionalism) | which geometry space has is a choice guided by experience and settled by convenience, not an experimental fact (Poincaré) | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [dynamical view of relativity](#dynamical-view-of-relativity) | rods and clocks are composite, so Lorentz-covariant forces explain contraction and dilation, and Minkowski geometry codifies their shared symmetry (Brown 2005; Brown and Pooley 2006) | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [geometrical view of relativity](#geometrical-view-of-relativity) | Minkowski spacetime structure explains why every law is Lorentz covariant and how rods and clocks behave (Janssen 2009; Maudlin 2012) | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| (G) + (P) | Einstein's 1921 notation for Poincaré's thesis that only geometry plus physical laws faces experience | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [practical geometry](#practical-geometry) | Einstein's geometry coordinated with practically rigid bodies, and so made empirical, pending a theory of rods and clocks as composite structures (1921) | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| measured radius $\rho$ | in the heated sphere, the number of central rod-lengths an inhabitant lays from the centre to Euclidean radius $r$; it grows without bound toward the rim | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [universal and differential forces](#universal-and-differential-forces) | a differential force acts on different materials differently and can be detected; a universal force acts on all alike and cannot be shielded (Reichenbach 1928) | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| coordinative definition | Reichenbach's stipulation coordinating a concept with a physical object or procedure: here, rigid rods, with universal forces set to zero | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [principle and constructive theories](#principle-and-constructive-theories) | Einstein (1919): theories of principle rest on observed general properties (thermodynamics), constructive ones on hypothetical constituents (the kinetic theory of gases) | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [clock hypothesis](#clock-hypothesis) | an ideal clock measures proper time along its worldline: its rate depends on its speed alone, not on its acceleration | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [equivalence principle](#equivalence-principle) | gravity acts on every body alike, the mark of a universal force ([`relativity` 5.1](../relativity/lessons/05-01-equivalence-principle.md)); in its strong form, local physics takes special-relativistic form | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Bell's spaceships | two identically accelerated rockets joined by a thread, which breaks (Dewan and Beran 1959; Bell 1976); both views predict it and explain it differently | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| [manifold substantivalism](#manifold-substantivalism) | the points of the spacetime manifold exist in their own right, whatever fields sit on them, each the same point in every model | [4.5](lessons/04-05-the-hole-argument.md) |
| [general covariance](#general-covariance), passive and active | passive: the laws keep their form in every coordinate system; active: any diffeomorphic redistribution of a solution's fields over the manifold is again a solution | [4.5](lessons/04-05-the-hole-argument.md) |
| [hole argument](#hole-argument) | Earman and Norton's (1987) argument, from Einstein's of 1913: given manifold substantivalism and active covariance, general relativity is indeterministic about facts no observation could reveal | [4.5](lessons/04-05-the-hole-argument.md) |
| [point-coincidence argument](#point-coincidence-argument) | Einstein (1916; Stachel's name): all our verifications are of space-time coincidences, which survive any smooth redistribution | [4.5](lessons/04-05-the-hole-argument.md) |
| model $\langle M, g, T\rangle$ | a four-dimensional manifold of events $M$, a metric $g$ and matter fields $T$ satisfying Einstein's equations | [4.5](lessons/04-05-the-hole-argument.md) |
| diffeomorphism | a smooth map of the manifold onto itself with a smooth inverse | [4.5](lessons/04-05-the-hole-argument.md) |
| [pushforward](#pushforward-of-a-field), $\varphi_*$ | the field that assigns to $\varphi(p)$ what the original assigned to $p$, carried over by $\varphi$'s derivative; for a scalar, $\varphi_*f = f\circ\varphi^{-1}$ | [4.5](lessons/04-05-the-hole-argument.md) |
| [Cauchy surface](#cauchy-surface) | a slice every inextendible timelike curve crosses once | [4.5](lessons/04-05-the-hole-argument.md) |
| hole, hole diffeomorphism | a region $H$ whose closure lies to the future of a Cauchy surface, and a diffeomorphism that is the identity outside $H$ but not inside; not an empty region, not a black hole | [4.5](lessons/04-05-the-hole-argument.md) |
| Kretschmann objection | any theory can be given generally covariant form, so passive covariance alone constrains nothing (1917) | [4.5](lessons/04-05-the-hole-argument.md) |
| literal representation | the hole argument's premise that every solution, read with each point the same spacetime point in every model, represents a physically possible world | [4.5](lessons/04-05-the-hole-argument.md) |
| invariant | a quantity unchanged when one diffeomorphism is applied to all the fields: lengths, proper times, accelerations, which worldlines meet | [4.5](lessons/04-05-the-hole-argument.md) |
| [Leibniz equivalence](#leibniz-equivalence) | models related by a diffeomorphism represent the same physical situation (Earman and Norton's name) | [4.5](lessons/04-05-the-hole-argument.md) |
| [Earman–Norton dilemma](#earman-norton-dilemma) | keep manifold substantivalism and accept radical indeterminism about unobservable facts, or accept Leibniz equivalence and give manifold substantivalism up | [4.5](lessons/04-05-the-hole-argument.md) |
| [metric essentialism](#metric-essentialism) | each point bears its metrical relations essentially, so the redistributed model, read with the points held fixed, describes no possible world (Maudlin 1989, 1990); one version of sophisticated substantivalism | [4.5](lessons/04-05-the-hole-argument.md) |
| [anti-haecceitism](#anti-haecceitism), anti-haecceitist substantivalism | points exist, but nothing makes a point in one world the same as a point in another beyond its structural role: one possibility, described twice (Hoefer 1996; Pooley 2006) | [4.5](lessons/04-05-the-hole-argument.md) |
| [ontic structural realism](#ontic-structural-realism), OSR | what fundamentally exists is structure, objects' identities deriving from their relations; the hole argument (Ladyman 1998; Stachel; Saunders), gauge (Lyre 2004) and quantum particles are physics' cases for it | [4.5](lessons/04-05-the-hole-argument.md) |
| haecceity, primitive identity | a thing's bare "thisness", not grounded in its qualities or relations | [4.5](lessons/04-05-the-hole-argument.md) |
| trans-world identity | a fact about which point (or thing) in one possible world is the same as one in another | [4.5](lessons/04-05-the-hole-argument.md) |
| [Norton's dome](#nortons-dome) | a frictionless dome of depth $h = \frac{2}{3g}r^{3/2}$ below the apex, on which $\ddot r = \sqrt r$ and a mass at rest at the apex can start to slide at any time, in any direction, unpushed (Norton 2003) | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| [Laplace's intelligence](#laplaces-intelligence) | Laplace's knower who, given for one instant all the forces of nature and the situation of everything, would see future and past alike; "demon" is a later gloss | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| history, complete state | a history assigns to each time $t$ a complete state $H(t)$: everything the laws need at an instant, for Newtonian particles every position and velocity | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| Laplacian determinism; future and past determinism | Earman's definition: any two histories satisfying the laws that agree at one time agree at all times; restricted to later times, future determinism, to earlier times, past determinism | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| [time-reversal invariance](#time-reversal-invariance) | the backward film of any history the laws allow, with an operation $R$ applied to every frame, is also allowed; invariance holds relative to a choice of $R$ ([5.3](lessons/05-03-reversible-laws-irreversible-world.md)) | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| [Lipschitz condition](#lipschitz-condition) | $\lvert f(x) - f(y)\rvert \le K\lvert x - y\rvert$ for some constant $K$: the force's slope is bounded | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| Picard–Lindelöf theorem | if $\dot x = f(x)$ and $f$ is Lipschitz near $x_0$, exactly one solution passes through $x_0$ for a short time | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| escape solution, [space invaders](#space-invaders) | bodies reaching spatial infinity in finite time; a space invader is the time reverse, arriving from infinity with nothing earlier announcing it (Earman 1986) | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| [non-collision singularities](#non-collision-singularities) | finite-time breakdown of an $N$-body solution with no collision (Painlevé's conjecture; Xia's five-body proof, 1992) | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| maximal development | the largest spacetime in which the data on a Cauchy surface fix a solution; for vacuum general relativity, unique up to diffeomorphism (Choquet-Bruhat and Geroch 1969) | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| [Cauchy horizon](#cauchy-horizon) | the boundary of a maximal development, beyond which the data fix nothing, even up to diffeomorphism | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| strong cosmic censorship | Penrose's conjecture that Cauchy horizons are not generic; whether a version holds is open | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| impenetrability | the rule that colliding bodies do not pass through each other; part of what "bead" means, it picks the bounce from the two roots the conservation laws leave | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| [sensitive dependence](#sensitive-dependence) | small differences in the present become large ones later, growing like $e^{\lambda t}$ while small | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [predictability horizon](#predictability-horizon) | how long a forecast stays within a tolerance $\Delta$ from an initial error $\delta_0$: $t_h = \frac1\lambda\ln(\Delta/\delta_0)$, growing only with the logarithm of precision | [5.2](lessons/05-02-chaos-and-predictability.md) |
| fortuitous phenomenon | Poincaré's name (Maitland's translation) for an outcome called chance because unpredictable, though determined | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [Lyapunov exponent](#lyapunov-exponent) $\lambda$ | the average exponential rate at which nearby trajectories separate | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Lyapunov time, doubling time | $1/\lambda$, the time for an error to grow by a factor $e$; $\ln 2/\lambda$, the time for it to double; neither is the horizon | [5.2](lessons/05-02-chaos-and-predictability.md) |
| tolerance, saturation | the largest error a forecast can carry before it is useless, below the size of the attractor; errors stop growing at that size | [5.2](lessons/05-02-chaos-and-predictability.md) |
| critical realism (Polkinghorne's use) | what we can know guides what there is; with chaos, read as openness in nature | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [finite-information quantities](#finite-information-quantities), principle of infinite precision | Gisin's physical quantities with only finitely many determinate digits; the principle of infinite precision is Del Santo and Gisin's name for the classical assumption that every quantity has infinitely many | [5.2](lessons/05-02-chaos-and-predictability.md) |
| singular point (Maxwell) | a state at which an influence too small for a finite being to take into account decides a large outcome (1873) | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [chaos amplification](#chaos-amplification) | chaos stretching a quantum-scale spread $\delta_q$ to macroscopic size after about $\frac1\lambda\ln(\Delta/\delta_q)$ (Hobbs 1991; Kellert 1993); it needs an indeterministic reading of quantum mechanics | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [Ehrenfest time](#ehrenfest-time) | how long a quantum system tracks its chaotic classical limit, of order $\frac1\lambda\ln(S/\hbar)$ for a characteristic action $S$ | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [quantum chaos](#quantum-chaos) | the study of quantum systems whose classical limits are chaotic, though unitary evolution keeps quantum states exactly as far apart as they began | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [faithful model assumption](#faithful-model-assumption) | the premise that the deterministic model represents the world, even beyond the horizon where no data can check it (Bishop's term) | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [observational equivalence of chaos and chance](#observational-equivalence-of-chaos-and-chance) | some processes are equally well described as deterministic or as stochastic however many observations are made, at a chosen coarse-graining (Suppes 1993, from Ornstein's theorems) | [5.2](lessons/05-02-chaos-and-predictability.md) |
| [H-theorem](#h-theorem), $H$ | Boltzmann (1872): under the Boltzmann equation $H = \int f\ln f\,d^3v$ never increases and is constant exactly at Maxwell's distribution, so $-H$ behaves like an entropy | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [Stosszahlansatz](#stosszahlansatz) | the "collision-number assumption": molecules about to collide are uncorrelated; imposed on incoming pairs only, it is the premise that tells past from future | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [reversibility objection](#reversibility-objection) | Loschmidt (1876): reversing every velocity of a relaxing gas gives a lawful history in which $H$ rises | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [recurrence objection](#recurrence-objection) | Zermelo (1896): by Poincaré recurrence, a gas in a box returns near its starting state, so $H$ cannot fall forever | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| three senses of "reversible" | dynamical time-reversal invariance (this course's), a quasi-static thermodynamic process, a retraceable Stokes flow | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| time-reversal operation $R$ | what reversal does to an instantaneous state: flip velocities; flip $\mathbf B$ or not; conjugate the wavefunction | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [Albert–Malament dispute](#albert-malament-dispute) | whether reversal flips the magnetic field: Albert says no, so classical electromagnetism is not time-reversal invariant; Malament says the field tensor is fixed only relative to a time orientation, so $\mathbf B$ flips | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| $T$-violation, $CPT$ | weak interactions violate $CP$, hence by the $CPT$ theorem also $T$ (seen in $B$ mesons, 2012); too small, rare and unitary to make the arrow ([`nuclear-particle-physics` 4.3](../nuclear-particle-physics/lessons/04-03-parity-c-cp.md)) | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| Boltzmann equation | the kinetic equation for a dilute gas's velocity distribution $f(v,t)$, derived with the Stosszahlansatz | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [Poincaré recurrence](#poincare-recurrence) | for a volume-preserving flow on a region of finite volume, almost every state returns arbitrarily close to itself, infinitely often (1890) | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| recurrence time | the time to return; for a cubic centimetre of air, a number of seconds with many trillions of digits (Boltzmann) | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| H-curve | Boltzmann's picture of $H$ over very long times: nearly always at its minimum, with rare summits | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [Lanford's theorem](#lanfords-theorem) | a rigorous derivation of the Boltzmann equation from Hamiltonian dynamics for most initial states, in a dilute limit and for a short time (1975) | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [Kac ring](#kac-ring) | Kac's (1959) reversible, periodic toy model of the H-theorem: balls on a circle change colour on crossing markers | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [Ehrenfest urn](#ehrenfest-urn) | P. and T. Ehrenfest's (1907) random two-urn model: each step one randomly drawn ball changes urn | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [Kac's lemma](#kacs-lemma) | a stationary chain's mean time to return to state $s$ is $1/\pi(s)$ (Kac 1947) | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| [macrostate](#macrostate), microstate | a macrostate is what a coarse description fixes, a region $\Gamma_M$ of phase space; a microstate is the exact state of every particle, one point $x$ | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| [Boltzmann entropy](#boltzmann-entropy), $S_B$ | $k_B\ln\Omega(M(x))$: a single system's entropy, the log of the size of the macrostate its microstate lies in, so it can change as one system evolves | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| [past hypothesis](#past-hypothesis) | the universe's initial macrostate $M_0$ had extremely low Boltzmann entropy (Albert's name, 2000) | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| [statistical postulate](#statistical-postulate) | given a macrostate $M$, probability is spread uniformly, by Liouville volume, over the microstates in $\Gamma_M$ (Albert 2000) | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| [Gibbs entropy](#gibbs-entropy), $S_G$ | $-k_B\int\rho\ln\rho\,d\Gamma$, a property of a probability distribution over microstates, not of one system; constant under Hamiltonian flow | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| phase space $\Gamma$, multiplicity $\Omega(M)$ | $\Gamma$ is all positions and momenta at fixed energy; $\Omega(M) = \mu(\Gamma_M)/h^{3N}$ counts the microstates in macrostate $M$ | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| [coarse-graining](#coarse-graining), grain | the choice of cells or macroscopic variables that defines macrostates; a coarse-grained Gibbs entropy, computed from a density averaged over cells, can rise | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| dominance | the equilibrium macrostate fills almost all of phase space | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| no-conspiracy premise | in each non-equilibrium macrostate, the microstates whose trajectories fail to head into larger regions have tiny measure: a dynamical claim, not a count | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| retrodiction problem | run backward, the same counting says entropy was probably higher in the past as well: the reversibility objection in statistical dress | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| [Mentaculus](#mentaculus) | the dynamics, the past hypothesis and the statistical postulate applied once, to the beginning: a probability map of the universe (Loewer 2012; Albert 2015) | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| sub-extensive | growing more slowly than $N$ (here like $\ln N$), so negligible per particle | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| [subsystem worry](#subsystem-worry) | a rise in the universe's entropy does not imply one in each subsystem (Winsberg 2004) | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| branch systems | Reichenbach's (1956) alternative: apply the statistical postulate afresh to each system when it is isolated | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| spin echo | Hahn's (1950) experiment: spins fan out so the net magnetization decays, then a second pulse regroups them into an echo | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| [fluctuation hypothesis](#fluctuation-hypothesis) | the universe rests in thermal equilibrium for ever, and our world is one rare local deviation (Boltzmann 1895, crediting Schuetz); Boltzmann's "other world" is a distant region of one universe, not an Everettian branch | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| [Boltzmann brains](#boltzmann-brains) | at the limit of a minimal fluctuation, a lone brain with your memories assembled by chance; Albrecht and Sorbo (2004) report the problem is "sometimes called" the Boltzmann's Brain paradox | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| [Penrose's estimate](#penroses-estimate) | a low-entropy start fills about one part in $10^{10^{123}}$ of the observable universe's phase space, the maximum entropy being that of one black hole holding all its matter (1989) | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| [not even false](#not-even-false) | Earman (2006) grants a time-asymmetric boundary condition is needed but denies three things: that the early universe's Boltzmann entropy is well defined in general relativity, that a low value would explain subsystem thermodynamics, and that knowledge of the past rests on it | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| entropy deficit $\Delta S$ | how far a macrostate's Boltzmann entropy lies below equilibrium; a fluctuation of deficit $\Delta S$ has probability proportional to $e^{-\Delta S/k_B}$ | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| observation selection | observers can find themselves only where observers can exist, so their evidence is conditioned on their presence | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| minimal fluctuation | the smallest departure from equilibrium that accounts for a given body of evidence | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| cognitive instability | a theory is cognitively unstable if it cannot be both true and justifiably believed (Carroll 2017) | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| gravitational entropy | for self-gravitating matter clumping raises entropy, so a smooth state is low-entropy: where Penrose locates the special beginning | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| inflation's starting patch | the smooth patch inflation must start from, itself a low-entropy state (Price 1996) | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| law view, [brute-fact view](#brute-fact-view), [demand for explanation](#demand-for-explanation) | the three statuses offered for the past hypothesis: a law of the best system (Loewer, Goldstein, Chen); an initial condition that needs no explanation (Callender 2004); a fact that, like a low-entropy future, would call for one (Price) | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| temporal double standard | Price's charge: treating a boundary condition as calling for explanation at one end of time and not at the other | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| [record asymmetry](#record-asymmetry) | there are records of the past and none of the future; for Albert and Loewer, because the past hypothesis is the world's ultimate ready state | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| ready state (of a record) | the earlier state, such as smooth sand before a footprint, that a record's interpretation assumes | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| microcanonical measure $\mu$ | normalized Liouville volume on the energy surface $\Gamma_E$, which the flow preserves | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| time average $f^*$, phase average | the long-run average of an observable along one trajectory; its average over the energy surface by the microcanonical measure | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [Birkhoff's theorem](#birkhoffs-theorem) | for integrable $f$, the time average exists for $\mu$-almost every start and averages out to the phase average; it equals the phase average orbit by orbit only if the flow is ergodic | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| ergodic, invariant set | a measure-preserving flow is ergodic if every invariant set, one the dynamics maps onto itself, has measure 0 or 1 | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [ergodic hypothesis](#ergodic-hypothesis), ergodic account | statistical probability is the long-run fraction of time in a macrostate, and the system is ergodic, so that fraction is the macrostate's measure for almost every start | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [KAM theorem](#kam-theorem) | small perturbations of integrable systems keep a positive-measure set of invariant tori, so generic Hamiltonian systems are not ergodic | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| measure zero, almost everywhere | a set the measure counts as nothing (the rationals, though dense); true outside such a set | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| ε-ergodic | ergodic except on a set of measure ε (Vranas 1998) | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [measure objection](#measure-objection) | "nearly all" by which measure? Different measures disagree, and stationarity alone does not single out Liouville's | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [maximum entropy](#maximum-entropy), MaxEnt | probabilities as rational credences: maximize $-\int\rho\ln\rho$ subject to what you know (Jaynes 1957); it needs a reference measure | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [objective chance](#objective-chance), $\Pr$ | a worldly probability, indexed to a time, that should guide anyone's credence | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| admissible, inadmissible evidence | admissible evidence bears on $A$ only through its chance (history up to the chance's time); inadmissible evidence does not, such as a reliable report of what happens later | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| incompatibilism (about chance) | Lewis: in a deterministic world every chance is 0 or 1 | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [deterministic chance](#deterministic-chance) | Loewer (2001): the Mentaculus's probabilities are chances under deterministic laws, since they earn a place in the best system | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [method of arbitrary functions](#method-of-arbitrary-functions) | Poincaré's roulette: with many narrow alternating sections, any smooth spread of initial conditions gives each colour about its share | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| circle rotation | $x \mapsto x + \alpha \bmod 1$; ergodic exactly when $\alpha$ is irrational, every orbit then equidistributed (Weyl 1916) | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| [Earman's symmetry principles](#earmans-symmetry-principles), SP1, SP2 | SP1: every dynamical symmetry is a spacetime symmetry; SP2: every spacetime symmetry is a dynamical symmetry; "conditions of adequacy" on theories of motion, not theorems | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| [direct empirical significance](#direct-empirical-significance) | a symmetry applied to a subsystem alone is a dynamical symmetry of it, while an untransformed environment shows the two situations differ (Kosso 2000; Brading and Brown 2004); consequences via the laws, such as conserved quantities, are indirect | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| [surplus structure](#surplus-structure) | model structure with nothing in the world answering to it (Redhead's term, 1975) | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| [absolute and dynamical objects](#absolute-and-dynamical-objects) | structure the same in every model of a theory (the time metric, a standard of rest), against trajectories or fields that vary between models and satisfy the laws (Earman 1989) | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| [Noether's theorem](#noethers-theorem) | each continuous dynamical symmetry of an action yields a conserved quantity (1918) | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| [Noether's second theorem](#noethers-second-theorem) | local symmetries yield identities among the field equations, not further conserved quantities; charge is the Noether charge of the global phase symmetry | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| local and global symmetry | depending on arbitrary functions of space and time, or on constant parameters | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| [symmetry-to-reality inference](#symmetry-to-reality-inference) | Dasgupta's name: from the laws' indifference to a feature, through the feature's undetectability, to some reason to think it unreal | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| variant feature | a quantity that differs between symmetry-related models | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| epistemic lemma | the step from variant to undetectable, through which, Dasgupta argues, the inference must pass | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| three senses of "gauge" | $L \to L + dF/dt$ ([`analytical-mechanics` 1.2](../analytical-mechanics/lessons/01-02-least-action-lagrange.md)), coordinate freedom in general relativity ([`relativity` 5.3](../relativity/lessons/05-03-einstein-field-equations.md)), local $U(1)$ ([`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md)); [6.2](lessons/06-02-gauge-as-surplus-structure.md) means the third | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| scaling map (Newtonian gravity) | $\mathbf x_i(t) \mapsto \lambda\,\mathbf x_i(\lambda^{-3/2}t)$, which 6.1 P3 tests as a candidate symmetry | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| potentials $\phi$, $\mathbf A$ | the scalar and vector potentials: $\mathbf E = -\nabla\phi - \partial_t\mathbf A$, $\mathbf B = \nabla\times\mathbf A$ | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| [gauge transformation](#gauge-transformation) | $\mathbf A \to \mathbf A + \nabla\chi$, $\phi \to \phi - \partial_t\chi$, $\psi \to e^{iq\chi/\hbar}\psi$ for smooth, single-valued $\chi$; it leaves $\mathbf E$, $\mathbf B$ and every prediction unchanged | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| [holonomy](#holonomy), phase factor | $e^{(iq/\hbar)\oint_C\mathbf A\cdot d\mathbf l}$ for a closed loop $C$: gauge-invariant, the loop total of the potential; unrelated to holonomic constraints | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| [Aharonov–Bohm effect](#aharonov-bohm-effect) | electrons passing either side of a shielded solenoid, with $\mathbf B = 0$ on every path, interfere with a phase difference $q\Phi/\hbar$, $\Phi$ the enclosed flux (predicted 1949 and 1959; Tonomura 1986) | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| [gauge invariance](#gauge-invariance), gauge-invariant, gauge-dependent | unchanged by every gauge transformation; changed by some | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| [Healey's three interpretations](#healeys-three-interpretations) | three readings of the Aharonov–Bohm effect: only fields are real; potentials are real at points; loop properties (holonomies) are real (Healey 2007) | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| gauge hole | a gauge transformation with $\chi$ vanishing up to a time $t_0$ and not after: [4.5](lessons/04-05-the-hole-argument.md)'s hole, with $\chi$ in place of the diffeomorphism | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| [Elitzur's theorem](#elitzurs-theorem) | in lattice gauge theory without gauge fixing, every local quantity that is not gauge-invariant has expectation zero, so a local gauge symmetry cannot break spontaneously (1975) | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| descriptive fluff | Earman's (2004) phrase for gauge-dependent description | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| link phase, plaquette | on a lattice, $\theta_{uv}$ on the link from $u$ to $v$, the discrete $(q/\hbar)\int_u^v\mathbf A\cdot d\mathbf l$; a plaquette is an elementary square, whose phase sum is the lattice holonomy | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| spanning tree | a loop-free set of $V-1$ links reaching every vertex of a graph; a gauge transformation can set all its link phases to zero | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| [particle ontology](#particle-ontology), (M1)–(M3) | matter consists of things that are countable independently of who counts (M1), localizable (M2), and individuals (M3) (SEP, Kuhlmann) | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [Fock space](#fock-space) | the space of free-field states labelled by how many quanta occupy each mode | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| number operator $N$ | the operator that counts quanta, summing occupation numbers over modes | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [Unruh effect](#unruh-effect) | a detector with constant proper acceleration $a$ in the Minkowski vacuum responds as if in thermal radiation at $T_U = \frac{\hbar a}{2\pi c k_B}$; it follows from free QFT and has not been observed directly | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Minkowski vacuum $\lvert 0_M\rangle$ | the inertial no-particle state of a free field, with $N = 0$ exactly | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Rindler number | the particle count built from a uniformly accelerated detector's own time; it has no definite value in the Minkowski vacuum | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| proper acceleration | the acceleration an accelerometer carried along would measure | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [Malament's particle theorem](#malaments-particle-theorem) | translation covariance, energy bounded below, localizability and locality together force every localization projection to vanish: no localizable relativistic particles (1996); not his 1977 simultaneity theorem | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [Reeh–Schlieder theorem](#reeh-schlieder-theorem) | operations confined to any open region, acting on the vacuum, approximate every state (1961), so no local measurement can confirm that $N$ quanta are present | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [Haag's theorem](#haags-theorem) | an interacting field cannot live in the free Fock representation, so the interaction picture does not exist as written (1955) | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [permutation invariance](#permutation-invariance) | identical-particle states are symmetric or antisymmetric, so labels are bookkeeping | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| received view (quantum individuality) | identical quantum particles are not individuals (French and Krause 2006) | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [weak discernibility](#weak-discernibility) | distinctness grounded in an irreflexive relation, such as "has spin opposite to" in the singlet (Saunders 2003, 2006) | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [metaphysical underdetermination](#metaphysical-underdetermination) | the physics fits both individuals and non-individuals, so believe only the structure the two share (Ladyman 1998; French and Ladyman 2003) | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| quanta | Teller's (1995) excitations that can be counted but not labelled | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [field ontology](#field-ontology) | QFT is fundamentally about fields; its default form is the wave-functional interpretation | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [wave-functional interpretation](#wave-functional-interpretation) | a state is a superposition of classical field configurations, as a particle's wavefunction superposes positions | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| smeared field $\phi(f)$ | $\int\phi(x)f(x)\,d^4x$: the field averaged against a test function, a genuine operator, which a field at a point is not | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [algebraic QFT](#algebraic-qft), AQFT, local algebra $\mathcal A(\mathcal O)$ | basic is the net assigning each bounded spacetime region $\mathcal O$ the algebra of observables measurable there, with particles and fields derived (Haag and Kastler 1964) | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| coherent state | an eigenstate of an annihilation operator, the state of ideal laser light, with Poisson-distributed counts ([`photonics-quantum-optics` 3.3](../photonics-quantum-optics/lessons/03-03-coherent-states.md)) | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| [effective field theory](#effective-field-theory), EFT | a theory with a scale bar: built to describe physics below an energy $\Lambda$, with what happens above summarized in a few numbers | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| cutoff $\Lambda$ | the energy above which an EFT is not trusted, equivalently distances shorter than about $1/\Lambda$ | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [renormalization](#renormalization) | absorbing divergences into couplings; on Wilson's view, renormalizability is what any theory looks like far below its cutoff, not a certificate | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [non-renormalizable theory](#non-renormalizable-theory) | one with couplings of negative mass dimension, exactly the irrelevant ones (Fermi theory, gravity) | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| power counting, mass dimension $\Delta$ | reading an interaction's low-energy suppression from its operator's mass dimension: with $\hbar = c = 1$ its coupling has dimension $4 - \Delta$, and its effect goes as $(E/\Lambda)^{\Delta - 4}$ | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [relevant and irrelevant operators](#relevant-and-irrelevant-operators), marginal | $\Delta < 4$, $\Delta = 4$, $\Delta > 4$, read toward low energies; irrelevant means suppressed at low energies, not unimportant | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [renormalization group](#renormalization-group) | the flow of couplings as the scale changes: integrating out modes between $\Lambda$ and a lower $\Lambda'$ gives a theory of the same form with changed coefficients (Wilson 1971) | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [universality](#universality) | systems differing only in irrelevant couplings flow to the same fixed point and share critical exponents | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [decoupling](#decoupling) | heavy particles of mass $M$ affect physics at energies $E \ll M$ only through a few couplings and corrections suppressed by powers of $E/M$ (Appelquist and Carazzone 1975) | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [effective realism](#effective-realism) | believe what an EFT says at its own scales and nothing it says beyond $\Lambda$: realism with the scale bar attached (Williams 2019; J. D. Fraser 2018) | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [Fraser–Wallace dispute](#fraser-wallace-dispute) | which formulation philosophers should interpret: algebraic QFT (Doreen Fraser 2009, 2011) or conventional QFT with a cutoff, read through Wilson (Wallace 2006, 2011) | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| conventional QFT | the textbook formulation used in particle physics, in which the Standard Model is formulated and confirmed | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Planck mass $M_{\text{Pl}}$ | about $1.22\times10^{19}$ GeV, where gravity's effective expansion fails; the reduced Planck mass is $M_{\text{Pl}}/\sqrt{8\pi}$ | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [naturalness](#naturalness) | an EFT's expectation of order-one coefficients in units of the cutoff, which the vacuum energy and the Higgs mass violate; unrelated to Lewis's natural properties | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| [asymptotic freedom](#asymptotic-freedom), Landau pole | a coupling that shrinks at high energies, as QCD's does, so the theory may be consistent at all energies on its own; QED's coupling instead grows toward a Landau pole, signalling its own limit | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |

## Positions and distinctions

**Module 1: The measurement problem**

### Measurement problem

**Quantum mechanics has two laws for one process, linear evolution always and collapse "on measurement", and no rule for when the second takes over, though every measuring device is itself a quantum system.** 1.1 states it as [Maudlin's trilemma](#maudlins-trilemma). Its classic statements: von Neumann's two processes (1932, the [von Neumann chain](#von-neumann-chain)), [Schrödinger's cat](#schrodingers-cat) (1935), [Wigner's friend](#wigners-friend) (1961) and Bell's ["Against 'Measurement'"](#against-measurement) (1990).

- **The rulebook picture** (1.1). Rule 1 always, rule 2 "when the referee looks"; but the referee is also a piece on the board, so rule 1 should cover the looking too.
- **Every repair gives something up.** Deny completeness, linearity or determinate outcomes (the three claims of the trilemma), or deny that the wave function describes the system at all (1.3). On Bohmian mechanics, for instance, an outcome is where the pointer's particles are, so pointers always point (2.1).
- **For QBism** the "both" left in the state after a measurement was bookkeeping, since the state never described the world (1.3, [QBism](#qbism)).
- **Trap: it is not that measuring disturbs the system.** Classical measurements disturb too. The problem is two laws with no rule for when each applies.
- **Trap: a big enough device does not end it.** A linear law has no size threshold; the chain lemma holds at every link ([linear dynamics](#linear-dynamics)). Whether the environment changes that is 1.2's question ([decoherence](#decoherence)).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [2.1](lessons/02-01-bohmian-mechanics.md)

### Linear dynamics

**The Schrödinger equation evolves every closed system by a linear map: the evolution of a sum is the sum of the evolutions.** Von Neumann's "process 2"; claim (B) of [Maudlin's trilemma](#maudlins-trilemma). Its key consequence in 1.1 is the chain lemma: if an [ideal measurement](#ideal-measurement) $\hat U$ is linear, then for complex amplitudes $\alpha, \beta$ with $|\alpha|^2 + |\beta|^2 = 1$,

$$\hat U\big((\alpha|\text{up}\rangle + \beta|\text{down}\rangle)|r\rangle\big) = \alpha|\text{up}\rangle|U\rangle + \beta|\text{down}\rangle|D\rangle,$$

with $|r\rangle$ the device's ready state and $|U\rangle, |D\rangle$ its pointer states. *In words:* a linear law runs each branch through separately and adds the results.

- **Collapse is not linear** (1.1's theorem). No linear $\hat U$ that measures ideally sends an input with $\alpha\beta \neq 0$ to $|\text{up}\rangle|U\rangle$ or to $|\text{down}\rangle|D\rangle$, even up to a phase: by the lemma the output overlaps those two states by $\alpha$ and $\beta$, and it is entangled (its coefficient determinant, the $ad - bc$ test of [`quantum-mechanics` 5.2](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md), is $\alpha\beta$). For the state itself to end in one outcome takes a second, nonlinear law ([collapse postulate](#collapse-postulate)).
- **No copying, no picking.** The same linearity proves the no-cloning theorem in [`quantum-computing` 2.3](../quantum-computing/lessons/02-03-the-no-cloning-theorem.md): one premise, two theorems.
- **Decoherence is (B) run on one more system** (1.2 D1): the environment joins the chain, and both terms ride along ([decoherence](#decoherence)).
- **Trap: (B) concerns the wave function.** A theory whose particles move by a law that is not linear keeps (B) if its wave function obeys the Schrödinger equation; Bohmian mechanics is such a theory ([2.1](lessons/02-01-bohmian-mechanics.md); 1.1 P1).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md)

### Collapse postulate

**On measurement the state jumps to the eigenstate that matches the result, with Born-rule probability.** [`quantum-mechanics` 1.5](../quantum-mechanics/lessons/01-05-measurement-expectation-values.md)'s rule: "Immediately after obtaining $a_n$, the state becomes $|a_n\rangle$", where $a_n$ is the eigenvalue obtained and $|a_n\rangle$ its eigenstate. Von Neumann's "process 1" (1932).

- **A second law.** It is not linear ([linear dynamics](#linear-dynamics)), and it overrides the Schrödinger equation "on measurement".
- **"Measurement" is never defined.** Nobody says what counts as obtaining a result; that is Bell's charge ([Against 'measurement'](#against-measurement)) and the gap in the [textbook collapse view](#textbook-collapse-view).
- **Where it is applied makes no statistical difference.** With orthonormal records, applying it at the spin, the counter or the cat gives the same probabilities (1.1 Example 1, [von Neumann chain](#von-neumann-chain)), so the lab never locates it.
- **Made a physical process** (2.2). [GRW](#grw-theory) keeps a collapse but stops it waiting for a measurement: it has a rate and happens to everything, observed or not.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Maudlin's trilemma

**Three claims about quantum mechanics that cannot all be true: the wave function is complete, it always evolves linearly, and measurements have determinate outcomes. Any two rule out the third.** Tim Maudlin, "Three Measurement Problems" (*Topoi*, 1995): his first problem, the problem of outcomes. In paraphrase (1.1):

| | Claim | In words |
|---|---|---|
| (A) | **Completeness.** The wave function fixes, directly or indirectly, every physical property of the system. | Nothing about the system is missing from the wave function $\lvert\psi\rangle$. |
| (B) | **Linearity.** The wave function always evolves by a linear equation, such as Schrödinger's. | No exceptions, measuring devices included. |
| (C) | **Determinate outcomes.** Measurements always, or at least usually, end with the device indicating up and not down, or down and not up. | The pointer points one way. |

- **The argument, in outline** (1.1). By (A) and (B), an ideal measurement of a superposition ends in the chain lemma's superposition ([linear dynamics](#linear-dynamics)), which is then the whole physical state of spin and device; a symmetry step says that such a state represents no single reading. The other two pairings run the same way.
- **Unequal amplitudes.** The symmetry step is then idle, and the [eigenvalue-eigenstate link](#eigenvalue-eigenstate-link) does the work (1.1 Example 1).
- **Where it is weakest: the symmetry step.** Maudlin grants (as quoted by F. A. Muller, 2023) that the three claims are not strictly inconsistent: symmetry is not logic, and one could stipulate that the final superposition represents a device reading up. The reply: a reading rule keyed to the state alone is deterministic and meets the problem of statistics; a chancy rule that leaves the wave function untouched meets the problem of effect ([problems of statistics and effect](#problems-of-statistics-and-effect)). The critic concedes that some rule must connect the wave function to pointer readings; the defender, that the trilemma rests on such a rule and is not a theorem of logic.
- **The exits,** sorted as Maudlin sorts solutions, by the claim abandoned. Deny (A) and add variables: [Bohmian mechanics](#bohmian-mechanics) (2.1). Deny (B) and change the dynamics: [GRW](#grw-theory) (2.2), or Wigner's [consciousness causes collapse](#consciousness-causes-collapse). Deny (C), because every outcome occurs: [many-worlds](#many-worlds-interpretation) (2.3), which keeps (A) and (B). Or deny the presupposition all three share, that the wave function describes the system: Bohr, QBism and relational quantum mechanics (1.3).
- **What the 1.3 views do with it.** (A) is rejected or relativized, (B) becomes a rule for using the symbol, and (C) holds of a phenomenon, an experience or a relative fact ([changing the subject](#changing-the-subject)).
- **The textbook view** keeps (A) and (C) and denies (B) at an undefined word, "measurement": a statement of the problem, not an exit ([textbook collapse view](#textbook-collapse-view)).
- **Trap: the exits are four readings with the same predictions.** Denying (B) changes the physics: collapse models predict small departures that experiments keep bounding (2.2). Denying (A) or (C) leaves the standard predictions intact, and the dispute there is over what exists.
- **Left to you.** Boss 1(b) asks you to run the conflict on a $z$-spin measurement of an $x$-spin eigenstate, and to say which claim decoherence by itself gives up and what follows; the card does neither.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.3](lessons/02-03-many-worlds-branching.md)

### Eigenvalue-eigenstate link

**A system has a definite value of an observable if and only if its state is an eigenstate of that observable.** The [textbook view](#textbook-collapse-view)'s rule for reading properties off a state, stated as fact in [`quantum-mechanics` 1.5](../quantum-mechanics/lessons/01-05-measurement-expectation-values.md): "Determinate states are eigenstates."

- **A premise, not a result** (1.1). Bohmian mechanics denies it for position: particles have positions whatever the state ([2.1](lessons/02-01-bohmian-mechanics.md)).
- **Where it does the work.** With unequal amplitudes the trilemma's symmetry step is idle and this link carries the argument. In 1.1 Example 1 the final state is not an eigenstate of the projector onto "cat alive" (its expectation lies strictly between 0 and 1), so by the link the cat is neither alive nor dead, and (C) fails.
- **Part of T1**, the textbook collapse view's first premise (1.3).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Ideal measurement

**An interaction that, when the system already has a definite value, makes the pointer record that value and leaves the system alone.** 1.1's set-up: a spin-½ particle with $z$-spin basis $|\text{up}\rangle, |\text{down}\rangle$; a device with ready state $|r\rangle$ and pointer states $|U\rangle, |D\rangle$, all orthonormal; and an evolution $\hat U$ with

$$\hat U\big(|\text{up}\rangle|r\rangle\big) = |\text{up}\rangle|U\rangle, \qquad \hat U\big(|\text{down}\rangle|r\rangle\big) = |\text{down}\rangle|D\rangle.$$

*In words:* if the spin already has a value, the pointer reports it and leaves the spin alone.

- **With linearity** it fixes what happens to any superposed input: the chain lemma ([linear dynamics](#linear-dynamics)).
- **Links in a chain.** 1.1 Example 1 strings several ideal links together (spin, counter, flask, cat), each ideal on its definite inputs, and the lemma applies at each ([von Neumann chain](#von-neumann-chain)).
- **Notation.** 1.1 writes $|\text{up}\rangle, |\text{down}\rangle$; 1.2 and 1.3 write $|{\uparrow}\rangle, |{\downarrow}\rangle$. 1.2's recording interaction D1 has the same form, with environment records $|E_\uparrow\rangle, |E_\downarrow\rangle$ in place of pointer states ([decoherence](#decoherence)).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md)

### Von Neumann chain

**Linearity carries a superposition from system to apparatus to eye to brain, and the predicted statistics are the same wherever along the chain collapse is applied.** John von Neumann, *Mathematische Grundlagen der Quantenmechanik* (1932), ch. VI, paraphrased. He wrote the two laws as two kinds of process: collapse on measurement (process 1) and Schrödinger evolution (process 2).

- **The chain.** Add links, such as a thermometer, a retina and an optic nerve; the chain lemma ([linear dynamics](#linear-dynamics)) applies at each, so the superposition rides up the chain toward what he called the "abstract ego".
- **The movable boundary.** He required that the boundary between observed and observer be movable arbitrarily far toward the observer, and argued that the predicted statistics are the same wherever it is drawn. That invariance is why the textbook theory never fails in a lab, and why the lab never tells you where the boundary is. Later writers call it the [Heisenberg cut](#heisenberg-cut).
- **Cut invariance** (1.1 Example 1). With orthonormal records, collapse applied at the spin, at the counter or at the cat gives the same probability for each result. [Wigner's friend](#wigners-friend) is the same point told with a person: the cut moved, the statistics did not.
- **The environment joins it** (1.2 D1): decoherence is one more link ([decoherence](#decoherence)).
- **Trap: von Neumann made consciousness the trigger.** He made the boundary movable and stopped short of explicitly giving consciousness a causal role; the thesis is Wigner's ([consciousness causes collapse](#consciousness-causes-collapse)).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md)

### Problems of statistics and effect

**Maudlin's second and third measurement problems. Statistics: a complete wave function evolving deterministically gives identical states identical results, against the Born frequencies. Effect: an outcome must change what later measurements predict.** Maudlin, "Three Measurement Problems" (1995); the first is the problem of outcomes ([Maudlin's trilemma](#maudlins-trilemma)). 1.1 uses "statistics" and "effect" as names.

- **Why they matter** (1.1, "Where the argument is weakest"). They are why the gap the trilemma's symmetry step leaves is narrow. A reading rule keyed to the state alone is deterministic, so it collides with statistics; a chancy rule that leaves the wave function untouched must still let each outcome shape later results, which is effect.
- **Trap: statistics pairs completeness with linearity.** It pairs it with deterministic evolution of the wave function.
- **Trap: the two are different tests.** Statistics concerns the frequencies of outcomes over identical runs; effect concerns how one outcome bears on later ones. A rule can pass one and fail the other (1.1 P2, 1.3 Flashback).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Against 'measurement'

**Bell's argument that "measurement", and the words that do the same job, have no place in the formulation of a theory that claims to be exact: they mark where the second law takes over without saying what physical process they name.** John Bell, "Against 'Measurement'" (1990). The split between the two laws is, in his word, "shifty".

- **Two charges** (1.3 P3). "Measurement" in the axioms anchors "the shifty split" of the world into system and apparatus; and the word's everyday meaning suggests that a result reveals a pre-existing property.
- **Any precise answer is already an exit** (1.1). Wigner's [consciousness causes collapse](#consciousness-causes-collapse) is one.
- **Against the textbook view** (1.3). It denies (B) at an undefined word, so it states the problem rather than solving it ([textbook collapse view](#textbook-collapse-view)).
- **Against 1.3's views.** Each denies that a result reveals a pre-existing value; whether the shifty split returns between agent and world, or between perspectives, is pressed against each ([changing the subject](#changing-the-subject)).
- **The same paper** grants that dropping off-diagonal terms is harmless [FAPP](#fapp) and gives the "and"/"or" complaint ([and-or problem](#and-or-problem); 1.2).
- **Trap: avoiding the word answers it.** The charge concerns an undefined split, whatever it is called (1.3 P3).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Consciousness causes collapse

**Linear evolution holds until a conscious mind registers a result, and the registering reduces the state to a single outcome.** Eugene Wigner, "Remarks on the Mind-Body Question" (1961); often credited to von Neumann and Wigner together. On the trilemma it denies (B) at minds.

- **Wigner's reasoning** (1.1 Example 2). A conscious observer cannot be in a superposition of distinct perceptions, so the friend's awareness itself reduces the state ([Wigner's friend](#wigners-friend)).
- **A precise answer to Bell** (1.1). It says what "measurement" is, so it is an exit, and it must now say which systems are minds ([Against 'measurement'](#against-measurement)).
- **Trap: it is von Neumann's thesis.** Von Neumann made the boundary movable and stopped short of explicitly giving consciousness a causal role ([von Neumann chain](#von-neumann-chain)). Wigner stated the thesis in 1961.
- **A cousin** ([`philosophy-of-mind` 1.2](../philosophy-of-mind/lessons/01-02-substance-dualism-today.md)). Popper and Eccles have a mind settle what indeterministic laws leave open: there the mind chooses among outcomes, here it causes there to be one.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md)

### Schrodinger's cat

**A cat whose life hangs on one atom's decay ends, under linear evolution, in a superposition of alive and dead.** Erwin Schrödinger, "Die gegenwärtige Situation in der Quantenmechanik" (1935), paraphrased: an animal shut in a chamber with a lethal device that one atom's decay sets off, tuned so that after an hour death and survival are equally likely.

- **Built against completeness.** Schrödinger first sketched it in a September 1935 letter answering Einstein's exploding-gunpowder example, as an argument that the wave function cannot be the whole story: aimed at (A) of [Maudlin's trilemma](#maudlins-trilemma), not a picture of collapse.
- **In 1.1 Example 1** the cat ends a [von Neumann chain](#von-neumann-chain) (spin, counter, flask, cat) run with unequal amplitudes. The probability of "dead" is the same wherever collapse is applied, and by the [eigenvalue-eigenstate link](#eigenvalue-eigenstate-link) the final cat is neither alive nor dead.
- **A thought experiment** in the sense of [`philosophical-method` 3.3](../philosophical-method/lessons/03-03-thought-experiments.md): a test rig built to isolate one premise, not a claim about cats.
- **Left to you.** What decoherence does and does not do to the cat is Boss 1(c)'s diagnosis; [decoherence](#decoherence) gives what 1.2 teaches.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md)

### Wigner's friend

**A friend measures inside a sealed lab and assigns a collapsed state, while Wigner outside assigns the whole lab a superposition until he opens the door; the textbook theory does not say whose description is right while the door is shut.** Eugene Wigner, "Remarks on the Mind-Body Question" (1961); Hugh Everett had told a version in 1956–57.

- **The two descriptions** (1.1 Example 2). The friend applies collapse at her own observation: the lab is in "up, and she saw up" or "down, and she saw down", with the Born odds, and she knows which. Wigner treats the sealed lab as a closed system in superposition until he opens the door and collapses it himself.
- **They agree on every report.** When the door opens both assign the same odds to her saying "up", and she will say she saw her result before he asked: the cut moved, the statistics did not ([von Neumann chain](#von-neumann-chain)).
- **Where it stops.** Collapse "on measurement" needs a measurer, and the textbook theory does not say whether a friend is one.
- **Two morals.** Wigner's: a conscious observer cannot be in a superposition of distinct perceptions, so the friend's awareness reduces the state ([consciousness causes collapse](#consciousness-causes-collapse)); the textbook view can neither refute nor confirm him. Everett drew the opposite moral ([many-worlds](#many-worlds-interpretation)).
- **Recent work.** No-go theorems by Frauchiger and Renner (2018) and Bong and colleagues (2020) sharpen the case; the "friends" in experiments so far are photons or small qubit registers.
- **Left to you.** Running QBism or relational quantum mechanics on the friend is part of Boss 1(d); the card does not.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md)

### Decoherence

**A system becomes entangled with an environment that records it, so interference in the system disappears: the coherence moves out of the system into system-environment correlations, where no experiment on the system alone can find it.** 1.2, mapped by Bacciagaluppi's Stanford Encyclopedia entry on decoherence; Wojciech Zurek (1981, 1982) on pointer states. Nothing is destroyed: to make the two versions interfere again you would have to line up the environment's records too.

- **Scale.** In Joos and Zeh's 1985 model, as the Stanford entry reports it, a dust grain of radius $10^{-5}$ cm in room air loses interference between positions about $10^{-13}$ cm apart within roughly a microsecond.
- **The mechanism** (1.2 D1–D3). The environment, starting in $|E_0\rangle$, copies the spin: $|{\uparrow}\rangle|E_0\rangle \to |{\uparrow}\rangle|E_\uparrow\rangle$ and $|{\downarrow}\rangle|E_0\rangle \to |{\downarrow}\rangle|E_\downarrow\rangle$. By linearity $\alpha|{\uparrow}\rangle + \beta|{\downarrow}\rangle$ ends in $\alpha|{\uparrow}\rangle|E_\uparrow\rangle + \beta|{\downarrow}\rangle|E_\downarrow\rangle$, and the spin's coherence is multiplied by the overlap $\eta = \langle E_\uparrow|E_\downarrow\rangle$ of the two records ([reduced density matrix](#reduced-density-matrix)). Independent fragments multiply their overlaps, so many weak records drive $\eta$ to zero exponentially.
- **What it explains.** Why the readings no longer interfere, and which quantity looks definite: the [preferred-basis problem](#preferred-basis-problem), answered by [einselection](#einselection).
- **What it leaves** (1.2's argument, after the Stanford entry §2.1 and Bell 1990, in outline). Decoherence is derived from linear evolution of system, apparatus and environment together; so afterwards the global state still holds every reading; the system's decohered state is an [improper mixture](#proper-and-improper-mixtures), which does not license "this reading or that one, unknown which"; so decoherence alone, with completeness and linearity, does not deliver a determinate outcome. What remains is the [and-or problem](#and-or-problem).
- **Where that argument is weakest** (1.2). Everettians (Zeh, Saunders, Wallace's *The Emergent Multiverse*, 2012) deny that a determinate outcome needs one reading in the world: each decohered branch contains one, so "and" is the right answer. The objection: branches are defined only [FAPP](#fapp), and a theory on which every outcome occurs owes an account of probability ([2.4](lessons/02-04-many-worlds-the-probability-problem.md)). Wallace's reply ("Everett and Structure", 2003): emergent structure is always approximate, as quasi-particles such as phonons are. The critic concedes that decoherence fixes branches as well as any emergent structure is fixed; the Everettian, that (C) is reinterpreted as determinacy within a branch, not derived as a single outcome.
- **Physics every interpretation uses** (1.2). Bohmians use it to keep empty packets away from the occupied one, so they stop mattering ([2.1](lessons/02-01-bohmian-mechanics.md)); Everettians take the branches it defines as worlds ([2.3](lessons/02-03-many-worlds-branching.md)); collapse theories need it less ([2.2](lessons/02-02-collapse-theories-grw-and-csl.md)); the views of 1.3 deny the trilemma is posed correctly. So it cannot choose among them.
- **Trap: decoherence is collapse.** It suppresses interference in the subsystem while the global superposition survives: collapse removes a term, decoherence relocates the coherence. A GRW hit acts on $\rho$ much as decoherence does, but it changes the individual state with no interaction at all (2.2).
- **Trap: decoherence derives the Born rule.** The diagonal entries are $|\alpha|^2$ and $|\beta|^2$ by construction, and reading $\mathrm{Tr}(\rho A)$ as outcome statistics is the [Born rule](../quantum-mechanics/lessons/01-02-wavefunction-born-rule.md). Derivations from entanglement (Zurek's envariance, 2005) or from decision theory are 2.4's subject.
- **The sibling slogans** (1.2). "They are the same object" ([`quantum-computing` 2.2](../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md)), "only $\rho$ is physical" and "the environment just measures" ([`quantum-mechanics` 5.4](../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md)), and "nothing non-unitary happens" ([`quantum-computing` 5.1](../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md)) are exact as claims about every measurement on the subsystem alone. As claims about the world, the first two would decide the proper-improper question, and the third assumes linearity, which GRW denies.
- **An arrow too** (1.2 Connections). Records spread forward in time from a low-entanglement past (Al-Khalili and Chen, 2024), the quantum cousin of the entropy arrow in [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md).
- **Left to you.** Which claim of the trilemma decoherence by itself gives up, and what follows for its standing, is Boss 1(b); diagnosing a popular claim about decoherence and the cat is Boss 1(c).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [2.1](lessons/02-01-bohmian-mechanics.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.3](lessons/02-03-many-worlds-branching.md)

### Reduced density matrix

**The state of a subsystem got by tracing out the rest; it gives every statistic for measurements on the subsystem alone.** Built by the partial trace of [`quantum-mechanics` 5.4](../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) and [`quantum-computing` 2.2](../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) (its $\mathrm{tr}_B$ is the same map), with the rule $\mathrm{Tr}_E(|a\rangle\langle a'| \otimes |e\rangle\langle e'|) = |a\rangle\langle a'|\,\langle e'|e\rangle$. 1.2's form (D2): for $|\Psi\rangle = \alpha|{\uparrow}\rangle|E_\uparrow\rangle + \beta|{\downarrow}\rangle|E_\downarrow\rangle$, with rows and columns in the order $(\uparrow, \downarrow)$,

$$\rho_S = \mathrm{Tr}_E\,|\Psi\rangle\langle\Psi| = \begin{pmatrix} |\alpha|^2 & \alpha\beta^*\eta^* \\ \alpha^*\beta\,\eta & |\beta|^2 \end{pmatrix}, \qquad \eta = \langle E_\uparrow|E_\downarrow\rangle,$$

where $\mathrm{Tr}_E$ is the partial trace over the environment, $|E_\uparrow\rangle, |E_\downarrow\rangle$ are the environment's normalized records, and the inner product is antilinear in its first slot. *In words:* the diagonal (the Born weights) is untouched; the coherence is multiplied by how alike the two records are.

- **Which entry carries which.** The $(\uparrow,\downarrow)$ entry comes from $|{\uparrow}\rangle\langle{\downarrow}| \otimes |E_\uparrow\rangle\langle E_\downarrow|$, which picks up $\langle E_\downarrow|E_\uparrow\rangle = \eta^*$. This is the course's convention; any lesson using $\eta$ matches it.
- **The two limits.** $\eta = 1$: the records are identical, the environment has learned nothing, and $\rho_S$ is the pure state. $\eta = 0$: perfect records, and $\rho_S = \mathrm{diag}(|\alpha|^2, |\beta|^2)$, the matrix of a proper mixture ([proper and improper mixtures](#proper-and-improper-mixtures)).
- **Purity.** $\mathrm{Tr}\,\rho_S^2 = |\alpha|^4 + |\beta|^4 + 2|\alpha|^2|\beta|^2|\eta|^2$: 1 at $\eta = 1$, and for a superposition it falls as the records sharpen.
- **Records multiply** (D3). If the environment is $N$ fragments, each recording independently, $\eta = \prod_{k=1}^{N}\langle e^{(k)}_\uparrow|e^{(k)}_\downarrow\rangle$, where $|e^{(k)}_\uparrow\rangle$ is fragment $k$'s record of $\uparrow$. A phase-flip channel whose $1 - 2p$ equals a fragment's overlap, with $p$ the flip probability, gives the same reduced state ([`quantum-computing` 5.1](../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md)).
- **Pointer check.** Start the spin in $|{\uparrow}\rangle$ and $\rho_S$ stays pure at every $\eta$: only superpositions of the recorded basis lose purity ([einselection](#einselection)).
- **Trap: the matrix is the whole story.** One $\rho_S$ fits a proper mixture and an entangled whole; they differ in joint statistics (1.2 Example 2).

*Lessons:* [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [2.1](lessons/02-01-bohmian-mechanics.md)

### Proper and improper mixtures

**A proper mixture is an ensemble whose members are each in one definite state, unknown which; an improper mixture is the state of part of an entangled whole, and the whole still contains every term.** Bernard d'Espagnat, *Conceptual Foundations of Quantum Mechanics* (1971; 2nd ed. 1976).

- **Same matrix, same local statistics** (1.2 D4). At $\eta = 0$ the decohered $\rho_S = \mathrm{diag}(|\alpha|^2, |\beta|^2)$ is also the matrix of the proper mixture "$\uparrow$ with probability $|\alpha|^2$, $\downarrow$ with $|\beta|^2$", so $\mathrm{Tr}(\rho_S A)$ agrees for every observable $A$ on the system alone. But the joint state is still pure. *In words:* nothing done to the system alone can tell "one of the two, unknown which" from "part of a whole that contains both".
- **Different joint statistics** (1.2 Example 2). With a one-qubit environment and perfect records, the joint observable $\sigma_y \otimes \sigma_x$ on spin and environment has a nonzero expectation in the entangled state and zero in the proper mixture: the coherence that left the spin sits whole in a correlation. Undoing the interaction returns it to the spin.
- **At scale** (1.2, "Where it strains"). With $10^{23}$ air molecules the joint observable still exists, but measuring it means controlling every molecule. Whether the superposition is "still there" is then not a question decoherence answers: Everett and Bohm say yes (for the Bohmian, carried by an empty packet), GRW says no, and an operationalist says a difference no feasible experiment reveals is no physical difference; realists reply that "feasible" and "possible in principle" are not the same.
- **Trap: the matching matrices make them the same.** Only the proper mixture licenses "one of these, we don't know which". 1.2's gloss: the matrix of a coin flip is not a coin flip.
- **Collapse at a which-path marker** (1.3 Example 2). If a perfect path record collapsed the state, electron and marker would be a proper mixture, and screen hits sorted by a later measurement of the marker would show no fringes; quantum mechanics predicts fringes and anti-fringes. So the textbook view cannot put collapse at the marker ([FAPP](#fapp)).
- **A GRW hit's mixture is proper** (2.2). Averaged over hit centres, hits act on $\rho$ much as an unread environment does, but the mixture over which hit occurred is ignorance of a fact about the individual state.
- **Hyperion** (5.2). Zurek and Paz credit decoherence with keeping Saturn's tumbling moon classical, but decoherence yields an improper mixture of orientations, not one orientation.
- **The and-or complaint** targets exactly the step from improper to proper ([and-or problem](#and-or-problem)).

*Lessons:* [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [2.1](lessons/02-01-bohmian-mechanics.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [5.2](lessons/05-02-chaos-and-predictability.md)

### Preferred-basis problem

**Why do objects look definite in one quantity, position say, rather than in superpositions of its values, when a state can be split into components in many ways?** The problem decoherence answers (1.2): air couples to position, so position states are the ones that survive being recorded ([einselection](#einselection)).

- **For Everett** (2.3). A vector splits into components in infinitely many ways, so what makes "saw up" plus "saw down" the right split? Long the charge against Everett's theory; on Wallace's account decoherence selects the split dynamically, without a postulate ([many-worlds](#many-worlds-interpretation)).
- **Trap: picking the basis picks the outcome.** Einselection says which quantity looks definite, not which value obtains; that second question is the [and-or problem](#and-or-problem), which decoherence does not touch (1.2 Watch out; the conflation 1.2 P1 diagnoses).

*Lessons:* [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [2.1](lessons/02-01-bohmian-mechanics.md), [2.3](lessons/02-03-many-worlds-branching.md)

### And-or problem

**After decoherence the global state still contains every outcome, "and", while experience reports one, "or": why one rather than all?** From Bell's "Against 'Measurement'" (1990), discussing Gottfried's textbook: dropping the off-diagonal terms is harmless [FAPP](#fapp), but, read without hunting for probabilities, the diagonal state describes terms that coexist, not alternatives, and the habit of treating lost coherence as turning "and" into "or" had always puzzled him (paraphrased).

- **The problem decoherence leaves** (1.2). It settles which readings there are and why they no longer interfere, not why one of them occurs ([decoherence](#decoherence)).
- **Answers on offer.** Everettians: "and" is the right answer, each branch containing one reading (2.3). Bohmians: the particles occupy one branch (2.1). Collapse theories: a real collapse removes the other terms (2.2). The views of 1.3: the "both" belonged to a state that never described the world.
- **Trap: an improper mixture read as a proper one** ([proper and improper mixtures](#proper-and-improper-mixtures)).
- **Trap: a basis taken for an outcome** ([preferred-basis problem](#preferred-basis-problem)).

*Lessons:* [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [2.1](lessons/02-01-bohmian-mechanics.md), [2.3](lessons/02-03-many-worlds-branching.md)

### Einselection

**Environment-induced superselection: the way the environment couples picks out pointer states, which stay unentangled while their superpositions decohere.** Wojciech Zurek (1981, 1982; review 2003); 1.2 D5.

- **Pointer states** (D5). Inputs $|{\uparrow}\rangle$ and $|{\downarrow}\rangle$ end in product states and stay pure for every $\eta$; every superposition of them becomes entangled and loses purity. The interaction, not an observer, picks the basis in which $\rho_S$ goes diagonal. *In words:* how the environment couples decides which quantity looks definite.
- **It answers the [preferred-basis problem](#preferred-basis-problem).**
- **Trap: it says which value.** It says which quantity, position or $\uparrow$ versus $\downarrow$, looks definite, not which value obtains ([and-or problem](#and-or-problem)).

*Lessons:* [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [2.1](lessons/02-01-bohmian-mechanics.md)

### FAPP

**"For all practical purposes": Bell's acronym for what is adequate for every feasible experiment but not exact in principle.** John Bell, "Against 'Measurement'" (1990).

- **Bell's use** (1.2). Dropping the off-diagonal terms is harmless FAPP; a theory that claims to be exact owes more ([and-or problem](#and-or-problem)).
- **The textbook view's timing** (1.3 Example 2). It can put collapse only somewhere late enough that nobody will interfere the records: a FAPP criterion, not a time ([textbook collapse view](#textbook-collapse-view)).
- **Everettian branches** are defined only FAPP: $\eta$ never reaches exactly zero and the branch decomposition is approximate, so, the objection runs, the ontology inherits the vagueness Bell charged against "measurement". Wallace's reply: exactness is owed only at the fundamental level, and emergent structure is always approximate ([decoherence](#decoherence)).
- **Trap: FAPP-indistinguishable means the same.** Recoherence with a one-qubit environment is routine; with $10^{23}$ molecules the joint observable exists but is unmeasurable (1.2 Example 2).

*Lessons:* [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Textbook collapse view

**The state is the complete physical state, with definite values only in eigenstates; it evolves linearly, except that on measurement it jumps, with Born probability.** The Dirac–von Neumann formulation: von Neumann (1932); Dirac's *Principles of Quantum Mechanics* from its second edition (1935). 1.3's T1; the view [`quantum-mechanics` 1.5](../quantum-mechanics/lessons/01-05-measurement-expectation-values.md) teaches. *In words:* the wave function is the system, under two laws switched by "measurement".

- **Its parts.** The [eigenvalue-eigenstate link](#eigenvalue-eigenstate-link), [linear dynamics](#linear-dynamics) and the [collapse postulate](#collapse-postulate), with von Neumann's movable boundary between them ([von Neumann chain](#von-neumann-chain)).
- **On the trilemma** (1.3). It keeps (A) and (C) and denies (B) at an undefined word, which Bell charges with anchoring "the shifty split" of system from apparatus: a statement of the [measurement problem](#measurement-problem), not an exit. 1.1 runs the trilemma against it first.
- **When does collapse happen?** (1.3 Example 2). Not at a perfect which-path marker, since sorted screen data would then lose their fringes ([proper and improper mixtures](#proper-and-improper-mixtures)); only somewhere later where nobody will interfere the records, a [FAPP](#fapp) criterion. The view gives no time.
- **ψ-ontic** in Harrigan and Spekkens's sense ([psi-ontic and psi-epistemic](#psi-ontic-and-psi-epistemic)).
- **Trap: this is Bohr's view.** Bohr's complementarity has no physical collapse; the collapse view is von Neumann's and Dirac's ([Copenhagen interpretation](#copenhagen-interpretation)).
- **Trap: Dirac 1930.** The collapse postulate appears in Dirac's *Principles* only from the second edition (1935).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Heisenberg cut

**The movable boundary between the observed system and the observing side.** Later writers' name for it; Heisenberg and von Neumann both stressed that it moves (1.3). In Bohr's Como lecture (*Nature*, 1928, p. 580), where the concept of observation comes in is, for every particular case, "a question of convenience": the describer draws the boundary between observed and observing, case by case.

- **Von Neumann's version** (1.1). The boundary can be moved arbitrarily far toward the observer without changing the predicted statistics ([von Neumann chain](#von-neumann-chain)).
- **Bell's name** for the same undefined boundary in the textbook axioms: "the shifty split" ([Against 'measurement'](#against-measurement)).
- **For Bohr** the cut is in the book, not the world: nothing physically collapses there (1.3 B4, [Copenhagen interpretation](#copenhagen-interpretation)).
- **Trap: a fixed line between small and large.** Von Neumann's boundary moves, and Bohr places it case by case, for convenience.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Quantum postulate

**Every atomic process has a discontinuity symbolized by Planck's constant, so observing involves an interaction with the instrument that cannot be neglected.** Niels Bohr, "The Quantum Postulate and the Recent Development of Atomic Theory", *Nature* 121 (1928), pp. 580–590: the Como lecture of 16 September 1927, revised. Premise B1 of Bohr's view in 1.3. *In words:* no observation without a disturbance too large to subtract.

- **Where it leads.** 1.3's Source passage runs from this physics to description, ending with the boundary between observed and observing drawn case by case, for convenience ([Heisenberg cut](#heisenberg-cut)). Reading the passage closely is 1.3 P2.
- **The rest of Bohr's view:** classical concepts (B2), [complementarity](#complementarity) (B3), the wave function as a symbol (B4); see [Copenhagen interpretation](#copenhagen-interpretation).

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Complementarity

**Some features of the description of atomic objects need experimental arrangements that exclude each other.** Bohr, Como lecture (1927; *Nature*, 1928): space-time coordination and causality, in the sense of conservation of energy and momentum, are "complementary but exclusive features of the description". Premise B3 of Bohr's view in 1.3. *In words:* where-and-when and how-much-energy need arrangements that exclude each other.

- **Trap: complementarity is wave-particle duality.** Wave and particle is one illustration, not the definition; the 1928 pair is space-time coordination and causality.
- **Phenomena** (1.3 Example 2). Bohr's reply to "when did the state collapse?" is that it treats a symbol as a picture, and "which slit?" applies the classical concept *path* outside the arrangement that defines it: reading a which-path marker and erasing it are two arrangements, two phenomena. Critics answer that "phenomenon" is then no physical notion, and the marker is apparatus or system by fiat.
- **Neo-Kantian readings** of Bohr's classical concepts look back to Kant's forms of intuition ([`modern-philosophy` 5.2](../modern-philosophy/lessons/05-02-space-and-time-the-transcendental-aesthetic.md)).

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Copenhagen interpretation

**A family name, not one theory: Bohr's view, Heisenberg's observer-induced collapse and, in later usage, the textbook collapse view, grouped under one label.** Don Howard ("Who Invented the 'Copenhagen Interpretation'? A Study in Mythology", 2004) argues that no unitary Copenhagen view existed before Heisenberg coined the phrase in 1955, and that its observer-induced collapse was Heisenberg's, not Bohr's.

- **Bohr's view** (1.3, from the Como lecture of 1927; later work via the Stanford Encyclopedia). B1, the [quantum postulate](#quantum-postulate). B2, classical concepts: "Our interpretation of the experimental material rests essentially upon the classical concepts" (1928), so what we did and learned must be reportable to others in everyday terms. B3, [complementarity](#complementarity). B4, the wave function is a symbol for predicting phenomena (whole arrangements with their results), not a picture: nothing physically collapses, and the [cut](#heisenberg-cut) is placed for convenience.
- **Against EPR.** Bohr held quantum mechanics complete ([EPR argument](#epr-argument), 3.1).
- **On the trilemma.** With QBism and relational quantum mechanics, Bohr denies the presupposition the three claims share, that the wave function describes the system ([changing the subject](#changing-the-subject)).
- **The 2025 survey.** In *Nature*'s survey of 1,101 quantum researchers, 397 (36 percent, by Nature's published data) chose "Copenhagen", more than any other interpretation; only 56 of them called it correct, and the questionnaire itself footnoted that Copenhagen is not a self-consistent interpretation.
- **Trap: "Copenhagen" means collapse.** Bohr's complementarity has none; the collapse view is von Neumann's and Dirac's ([textbook collapse view](#textbook-collapse-view)), and the single label is Heisenberg's of 1955.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Ontological model

**Preparing a quantum state puts the system in some real (ontic) state, with a probability, and the ontic state fixes the chances of each measurement outcome, so as to reproduce the Born rule.** Nicholas Harrigan and Robert Spekkens (2010); 1.3 D1:

$$\int \xi(k\mid\lambda,M)\,\mu_\psi(\lambda)\,d\lambda = |\langle k|\psi\rangle|^2,$$

where preparing $\psi$ yields ontic state $\lambda$ with distribution $\mu_\psi(\lambda)$, measurement $M$ gives outcome $k$ with probability $\xi(k\mid\lambda,M)$ (the response function), and $|k\rangle$ is the state for outcome $k$. *In words:* a real state underlies the quantum one.

- **Sorted** into [ψ-ontic and ψ-epistemic](#psi-ontic-and-psi-epistemic) models, and constrained by the [PBR theorem](#pbr-theorem).
- **Not every view is one.** QBism posits no ontic state for $\psi$ to be information about, so it is not an ontological model at all ([QBism](#qbism)).
- **Notation.** Here $\lambda$ is the ontic state with distribution $\mu_\psi$; in Module 3 the same letter is the complete state at the source, with distribution $p(\lambda)$ ([hidden variables](#hidden-variables)).
- **In miniature.** 2.2's Flashback builds a toy ψ-epistemic model of one qubit and runs PBR's two-qubit test on it.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### psi-ontic and psi-epistemic

**Is $\psi$ part of reality, or information about it? An [ontological model](#ontological-model) is ψ-ontic if distinct pure states never share an ontic state, so the ontic state fixes the wave function; otherwise it is ψ-epistemic.** Nicholas Harrigan and Robert Spekkens (2010); 1.3 D2.

- **Who is ψ-ontic** (1.3). Bohm, GRW, Everett and the textbook view.
- **What PBR rules out.** ψ-epistemic models, given preparation independence and the quantum predictions ([PBR theorem](#pbr-theorem)).
- **Trap: the words decide.** The test is whether the distributions for distinct pure states overlap, not what the view calls the state.
- **Trap: QBism is ψ-epistemic.** PBR's ψ-epistemic models posit ontic states; QBism posits none ([QBism](#qbism)).

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### PBR theorem

**If a real state lies underneath the quantum state, and independently prepared systems have independent real states, then the wave function is part of that real state.** Matthew Pusey, Jonathan Barrett and Terry Rudolph, "On the Reality of the Quantum State" (2012). 1.3's T: an [ontological model](#ontological-model) that reproduces the quantum predictions and satisfies [preparation independence](#preparation-independence) is [ψ-ontic](#psi-ontic-and-psi-epistemic).

- **Premises.** An ontological model; the exact quantum predictions; preparation independence.
- **Escapes** (1.3). Deny preparation independence, as retrocausal models do ([retrocausality](#retrocausality)); or reject the framework.
- **Its reach.** It constrains only models that posit an ontic state for $\psi$ to be information about (1.3's map).
- **Trap: PBR refutes QBism.** QBism escapes only by rejecting the ontological-models framework. Wayne Myrvold (2020) argues every Born-rule user is bound by it; the Stanford entry reports no direct QBist reply.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Preparation independence

**Systems prepared independently have statistically independent ontic states.** PBR's key premise (1.3):

$$\mu_{\psi\otimes\phi}(\lambda_1,\lambda_2) = \mu_\psi(\lambda_1)\,\mu_\phi(\lambda_2),$$

where $\psi$ and $\phi$ are the two preparations, $\lambda_1, \lambda_2$ the two systems' ontic states, and $\mu$ the distribution of ontic states a preparation yields.

- **Who denies it.** Retrocausal models ([retrocausality](#retrocausality)); that is the ψ-epistemicist's way past [PBR](#pbr-theorem) inside the framework.
- **Trap: a free step.** Multiplying the two systems' ontic-state probabilities is this premise; name it as the licence (2.2 Flashback).

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### QBism

**A quantum state encodes one agent's credences about her own future experiences; the Born rule is a coherence norm on them; an outcome is the experience of the agent who acts, and collapse is her updating.** Carlton Caves, Christopher Fuchs and Rüdiger Schack (from 2002); named by Fuchs, N. David Mermin and Schack (2014). 1.3's Q1–Q2.

- **Q1.** The state is the agent's credences $\mathrm{cr}$ ([`epistemology` 5.1](../epistemology/lessons/05-01-credences-and-probabilism.md)) about her own future experiences, given her actions, and does not describe the system even partially; the Born rule is an empirically motivated coherence norm on them (Fuchs and Schack, 2013). So there is no ontic state, and PBR's framework never starts; and there is no chance $\Pr$ for the [Principal Principle](../epistemology/lessons/05-04-the-problem-of-priors.md) to defer to.
- **Q2.** Collapse is her conditionalizing ([`epistemology` 5.3](../epistemology/lessons/05-03-conditionalization.md)) on experience, and probability 1 is her certainty, not EPR's [element of reality](#criterion-of-reality) (Caves, Fuchs and Schack, 2007).
- **The forecast analogy** (1.3). A 70 percent rain forecast jumps to 100 or 0 when you look, and nobody thinks the jump happened in the clouds. Its price: weather has an atmosphere that meteorology describes. What does quantum mechanics describe?
- **Credence, not frequency** (1.3 Example 1). Born coherence fixes an agent's credences given her state assignment; two agents with different assignments can both be coherent, and neither is wrong about the atom, which neither described. Long-run frequencies are something she expects (de Finetti's exchangeability), where [`quantum-mechanics` 1.5](../quantum-mechanics/lessons/01-05-measurement-expectation-values.md) reads the number as an ensemble frequency.
- **Realism.** Fuchs's "participatory realism" (2017): a users' manual for acting in a real world. QBists deny being instrumentalists in [`philosophy-of-science` 5.4](../philosophy-of-science/lessons/05-04-constructive-empiricism-and-entity-realism.md)'s sense, since state assignments are true or false of beliefs.
- **Objection and reply** (1.3). Christopher Timpson (2008): QBism predicts but cannot explain why sodium conducts. Reply: Bell targeted "measurement" as a physical trigger, and a normative theory may take its users as given (Mermin, 2017). See [changing the subject](#changing-the-subject).
- **Trap: QBism is ψ-epistemic, so PBR refutes it.** PBR's ψ-epistemic models posit ontic states; QBism escapes only by rejecting that framework. Myrvold (2020) argues every Born-rule user is bound by it; the Stanford entry reports no direct QBist reply ([PBR theorem](#pbr-theorem)).
- **On Bell's theorem** (3.2; Fuchs, Mermin and Schack, 2014). Outcomes are personal to the agent who acts: Alice experiences only events where she is, and Bob's report reaches her as one more of those, so there is no pair of objective, spacelike-separated outcomes for an influence to connect. The price: outcomes are no longer agent-independent facts. On why [local causality](#local-causality) has no agreed content here, see [local beables](#local-beables) (3.1).
- **Left to you.** Whether QBism solves, dissolves or leaves the measurement problem, run on Wigner's friend, is Boss 1(d)'s essay; the card takes no side.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Relational quantum mechanics

**A variable of a system takes a value only in an interaction, and only relative to the system it affects; the state is what one system can predict of another, and any system, not only an agent, can play observer.** Carlo Rovelli, "Relational Quantum Mechanics" (1996). 1.3's R1–R2.

- **R1.** Relative to a third system, the interacting pair may still be in superposition. *In words:* observers can give different, equally correct accounts of one event.
- **R2.** There is no absolute state: $\psi$ is a relation, as velocity is. The relative events are real, so, Rovelli holds, this is not instrumentalism.
- **The [cross-perspective link](#cross-perspective-link)** (Emily Adlam and Rovelli, 2023): measuring a system's pointer reveals what it registered.
- **Objection and reply** (1.3). Federico Laudisa (2019): RQM never says how a relative value comes about. Reply: "when" is at every interaction, and "why this value" is any indeterministic theory's brute chance ([changing the subject](#changing-the-subject)).
- **Trap: relational means subjective, or RQM is QBism.** RQM has no agents or minds; any physical system can be the observer.
- **Sideways.** Laura Candiotto (2017) reads RQM as the ontic structural realism of [`philosophy-of-science` 5.3](../philosophy-of-science/lessons/05-03-structural-realism.md); its relative values are the quantum cousin of the relational space of [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md).
- **Left to you.** Whether RQM solves, dissolves or leaves the measurement problem, run on Wigner's friend, is Boss 1(d)'s essay; the card takes no side.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Cross-perspective link

**A postulate added to relational quantum mechanics: measuring a system's pointer reveals the outcome that system registered in an earlier interaction.** Emily Adlam and Carlo Rovelli, "Information is Physical: Cross-Perspective Links in Relational Quantum Mechanics" (2023).

- **Its job,** on its defenders' account, is to secure facts shared across perspectives, answering the worry that what is a fact relative to one system need be no fact for another (1.3 P3; [relational quantum mechanics](#relational-quantum-mechanics)).

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Changing the subject

**The objection that views denying the wave function describes the system answer a question about the state, not the measurement problem's question: how the world comes to contain one result.** 1.3's name for a family of objections, not one author's phrase.

- **The move it targets** (1.3, in outline). P1: claims (A), (B) and (C) of [Maudlin's trilemma](#maudlins-trilemma) concern one absolute physical state. P2: Bohr, QBism and RQM each deny that $\psi$ is such a description (a symbol, a credence, a relation). So for each the trilemma as posed does not arise.
- **The objection.** The question survives without $\psi$, and each view answers it with a primitive that physics leaves undefined. Instances: Bell's shifty split ([Against 'measurement'](#against-measurement)); Timpson (2008) on QBism's explanatory deficit; Laudisa (2019) on RQM's missing account of how a relative value comes about.
- **The replies.** Bohr: unambiguous description of phenomena is all physics ever delivered. QBism: Bell targeted "measurement" as a physical trigger, and a normative theory may take its users as given (Mermin, 2017). RQM: "when" is at every interaction, and "why this value" is any indeterministic theory's brute chance.
- **Where it is weakest: P1** (1.3). The critic: (C) concerns pointers, not states, so a theory must say what the laboratory contains when the pointer points; the shifty split returns between agent and world, or between perspectives. The reply: demanding an absolute fact assumes what these views deny; each says the pointer reads one value, for the agent or relative to the system. The critic concedes that the trilemma as stated needs an absolute state; each defender, a primitive that Module 2's realist repairs try to derive.
- **Left to you.** Whether QBism or RQM solves, dissolves or leaves the problem is Boss 1(d)'s verdict to give, not the card's.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

**Module 2: The realist solutions**

### Bohmian mechanics

**A system is its wavefunction plus the actual positions of its particles: the wavefunction obeys Schrödinger's equation always, never collapses, and guides the particles, so pointers always point.** Louis de Broglie's pilot wave (1927), rediscovered and completed by David Bohm, "A Suggested Interpretation of the Quantum Theory in Terms of 'Hidden' Variables" (1952); also called de Broglie–Bohm or pilot-wave theory. On [Maudlin's trilemma](#maudlins-trilemma) it denies (A), that the wavefunction is complete, and keeps (B), linear evolution, and (C), determinate outcomes.

- **Two laws** (2.1, D2–D3). Schrödinger's equation $i\hbar\,\partial_t\psi = H\psi$ ($\hbar$ the reduced Planck constant, $H$ the Hamiltonian) with no collapse rule, and the [guidance equation](#guidance-equation), which moves each particle along the flow lines of the probability current. 2.1's picture: dust in a stream, steered by the water and never pushing back.
- **Outcomes are positions.** A pointer is made of particles, so it is always somewhere. After a measurement the wavefunction still holds a branch for every result, but the particles occupy one: the textbook collapse returns as a theorem about the [conditional wave function](#conditional-wave-function), and the unoccupied branches are [empty wave packets](#empty-wave-packets), kept apart by [decoherence](#decoherence).
- **Deterministic, not predictable.** The wavefunction and the positions fix all later positions ([determinism](#determinism), [5.1](lessons/05-01-determinism-in-physical-theories.md)). Randomness is ignorance of initial positions; Born statistics rest on [quantum equilibrium](#quantum-equilibrium) and [equivariance](#equivariance), and [absolute uncertainty](#absolute-uncertainty) caps what anyone can know.
- **Only position is possessed.** Spin and momentum results are produced by the measuring set-up, not read off a value the particle carried ([contextuality](#contextuality)). [`quantum-mechanics` 1.5](../quantum-mechanics/lessons/01-05-measurement-expectation-values.md) says that outside an eigenstate an observable has no single value; Bohm denies it for position.
- **Nonlocal.** For an entangled $\psi$, a particle's velocity depends on the other particles' positions at the same instant, however far away, and "the same instant" needs a [preferred foliation](#preferred-foliation) ([3.3](lessons/03-03-nonlocality-and-relativity.md)).
- **The atom at rest** (2.1 Example 2). Hydrogen's ground state is real, so the Bohmian electron's velocity is zero, though momentum measurements return nonzero values; Einstein pressed the point in 1953 with a particle between two walls. Bohm's second-order form adds a quantum potential $Q_{\rm B} = -\frac{\hbar^2}{2m}\frac{\nabla^2 R}{R}$ ($m$ the mass, $R = |\psi|$) that cancels the Coulomb pull; Dürr, Goldstein and Zanghì's first-order reading denies that momentum is something the electron has. Both sides agree on every recorded position: the underdetermination of [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md).
- **What the wavefunction is** (2.1 P3). A physical field on configuration space that steers the particles, or nomological, expressing how they move as a Hamiltonian does (Dürr, Goldstein and Zanghì, 1997; Goldstein and Teufel, 2001).
- **Where it is weakest** (2.1): the quantum equilibrium hypothesis, on which every prediction rides ([quantum equilibrium](#quantum-equilibrium)).
- **Who holds it.** 6.6% of the 1,101 physicists in *Nature*'s 2025 survey; on the 2020 PhilPapers quantum question, "hidden variables", Bohm's family, drew 22% of philosophers, just ahead of many-worlds and collapse.
- **Trap: "Bell's theorem or the Kochen-Specker theorem rules it out."** They rule out *local* and *noncontextual* hidden variables, and Bohmian mechanics is neither ([hidden variables](#hidden-variables), [Kochen-Specker theorem](#kochen-specker-theorem)). The 2022 Nobel press release's line that quantum mechanics cannot be replaced by a hidden-variable theory is loose in exactly this way.
- **Trap: effective collapse is collapse.** The universal wavefunction keeps every branch; only a subsystem's conditional wave function jumps.
- **Left to you.** Where Bohm stands among Bell's premises is mapped in 3.2 and asked by Boss 3(c) (see [parameter independence](#parameter-independence), [outcome independence](#outcome-independence), [measurement independence](#measurement-independence), [single outcomes](#single-outcomes)); how equilibrium, equivariance and typicality combine into Born statistics is Boss 2(c).
- **Neighbours.** [`apologetics-foundations` 4.4](../apologetics-foundations/lessons/04-04-divine-action-miracles-and-quantum-indeterminacy.md) uses Bohm's determinism, with only initial positions open, against quantum accounts of divine action; [`metaphysics` 6.4](../metaphysics/lessons/06-04-libertarianism-and-its-critics.md) notes that quantum indeterminism is interpretation-relative; presentists court the foliation ([`metaphysics` 5.2](../metaphysics/lessons/05-02-presentism-growing-block-eternalism.md)).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.1](lessons/02-01-bohmian-mechanics.md), [3.2](lessons/03-02-what-bell-rules-out.md), [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Primitive ontology

**What a theory says exists in ordinary three-dimensional space and time: the stuff the world and its records are made of, as opposed to the wavefunction.** The term is Dürr, Goldstein and Zanghì's (1992); Valia Allori, Sheldon Goldstein, Roderich Tumulka and Nino Zanghì made it a programme ("On the Common Structure of Bohmian Mechanics and the Ghirardi-Rimini-Weber Theory", 2008).

- **The options.** [Bohmian mechanics](#bohmian-mechanics): particles with positions at all times. GRW ([2.2](lessons/02-02-collapse-theories-grw-and-csl.md)): [flashes](#flash-ontology) (GRWf), a [mass density](#mass-density-ontology) (GRWm), or nothing but the wavefunction (GRW0, which amounts to [wavefunction realism](#wavefunction-realism)). The labels are Allori and colleagues' (2008).
- **Bell's remark** ("Are There Quantum Jumps?", 1987). Calling Bohm's positions "hidden variables" is absurd, since positions are what we see; the most hidden thing is the wavefunction.
- **The demand** (Allori, Goldstein, Tumulka and Zanghì, 2008; Maudlin, 2010). A fundamental theory must say what matter in three-dimensional space it is about: physics must recover the manifest image of objects in space, a demand Husserl's *Crisis* makes in another key ([`phenomenology-and-personalism` 1.4](../phenomenology-and-personalism/lessons/01-04-the-lifeworld-and-the-crisis-of-the-sciences.md)). Maudlin's objection to wavefunction realism comes from it ([2.3](lessons/02-03-many-worlds-branching.md)).
- **The premise it divides.** Whether structure in the wavefunction alone suffices for a world. Bohmians deny it about [empty wave packets](#empty-wave-packets), GRW's defenders about [structured tails](#tails-problem), and the Everettian affirms it ([emergent branches](#emergent-branches)); compare the functionalism of [`philosophy-of-mind` 2.2](../philosophy-of-mind/lessons/02-02-functionalism.md).
- **In field theory** (6.3). An interpretation must choose its primitive ontology again: Bell (1987) and Dürr, Goldstein, Tumulka and Zanghì (2004, 2005) give Bohmian particles created and destroyed stochastically; others choose field configurations, surveyed by Ward Struyve (2010) ([particle ontology](#particle-ontology), [field ontology](#field-ontology)).
- **Trap: Dürr in the 2008 programme.** The 2008 paper is Allori, Goldstein, Tumulka and Zanghì; Dürr is a coauthor of the 1992 paper that coined the term.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.3](lessons/02-03-many-worlds-branching.md), [6.3](lessons/06-03-particles-fields-or-structure.md)

### Guidance equation

**Bohm's law of motion: each particle moves along the gradient of the wavefunction's phase, at the speed of the probability flow, evaluated where all the particles actually are.**

$$\frac{d\mathbf{Q}_k}{dt} = \frac{\hbar}{m_k}\,\mathrm{Im}\,\frac{\nabla_k\psi}{\psi}\bigg|_{(\mathbf{Q}_1,\dots,\mathbf{Q}_N)}$$

Here $\mathbf{Q}_1,\dots,\mathbf{Q}_N$ are the actual positions of $N$ particles (together the configuration $Q$, a point in $3N$-dimensional configuration space), $\psi(\mathbf{q}_1,\dots,\mathbf{q}_N,t)$ is the wavefunction on that space, $m_k$ is particle $k$'s mass, $\nabla_k$ the gradient in its coordinates, and $\hbar$ the reduced Planck constant (2.1, D3; scalar $\psi$).

- **Current over density.** In one dimension, with $\psi = Re^{i\theta}$ ($R, \theta$ real), it reads $v = \frac{\hbar}{m}\theta' = j/|\psi|^2$: the probability current $j$ of [`quantum-mechanics` 1.2](../quantum-mechanics/lessons/01-02-wavefunction-born-rule.md) divided by the density.
- **First-order.** $\psi$ and the positions fix the velocities, with no independent initial velocity, so the theory is deterministic, and since the velocity at each point of configuration space is single-valued, trajectories never cross there.
- **Nodes and existence.** The right side is undefined where $\psi = 0$. That solutions exist for all time, from all initial configurations except a set of $|\psi|^2$-probability zero, is a theorem (Berndl, Dürr, Goldstein, Peruzzi and Zanghì, 1995).
- **Cases.** A plane wave $e^{ikx}$ ($k$ the wavenumber) gives $v = \hbar k/m$ everywhere. A real $\psi$ has constant phase, so $v = 0$: the electron in hydrogen's ground state is at rest ([Bohmian mechanics](#bohmian-mechanics)). For an entangled $\psi$, particle $k$'s velocity depends on every other particle's position at the same instant ([preferred foliation](#preferred-foliation)).
- **Trap: one component at a time.** The velocity comes from the whole $\psi$ at the actual configuration, not from each term of a superposition separately.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [2.3](lessons/02-03-many-worlds-branching.md)

### Equivariance

**If particle positions are distributed as $|\psi|^2$ at one time, the Bohmian flow keeps them distributed as $|\psi|^2$ at every time.**

$$\rho(q,0) = |\psi(q,0)|^2 \;\Longrightarrow\; \rho(q,t) = |\psi(q,t)|^2 \quad \text{for all } t,$$

where $q$ is a configuration and $\rho(q,t)$ the density of an ensemble of configurations (not a density matrix). 2.1's theorem. *In words:* specks that start out spread like $|\psi|^2$ stay spread like $|\psi|^2$.

- **Why** (2.1). Any ensemble carried by a velocity field $v$ obeys $\partial_t\rho + \nabla\cdot(\rho v) = 0$. By the [guidance equation](#guidance-equation), $|\psi|^2 v = j$, so the continuity equation of [`quantum-mechanics` 1.2](../quantum-mechanics/lessons/01-02-wavefunction-born-rule.md) says $|\psi|^2$ obeys the same equation. Same first-order equation, same initial data: assuming uniqueness, same solution.
- **Essentially unique.** $|\psi|^2$ is more or less the only suitably local distribution the flow carries into itself (Goldstein and Struyve, 2007), as the [Liouville measure](#liouville-measure) is for classical mechanics. That is the Bohmian's reply to the measure objection under [quantum equilibrium](#quantum-equilibrium); in [5.6](lessons/05-06-probability-in-statistical-mechanics.md) equivariance plays the role stationarity plays for statistical mechanics.
- **Trap: it is a conditional.** It carries a $|\psi|^2$ distribution forward; it does not say that one ever obtains ([quantum equilibrium](#quantum-equilibrium)).
- **Trap: an incompressible fluid.** The continuity equation says probability is conserved, not that the flow is incompressible: Bohmian velocities bunch and spread, and particles crowd where they slow down (2.1 Watch out).

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md)

### Quantum equilibrium

**The hypothesis that particle configurations are distributed as $|\psi|^2$, the squared modulus of the relevant (effective) wavefunction.** Detlef Dürr, Sheldon Goldstein and Nino Zanghì, "Quantum Equilibrium and the Origin of Absolute Uncertainty" (1992).

- **Not an ensemble postulate.** Dürr, Goldstein and Zanghì do not posit it for ensembles; they justify it by the [typicality](#typicality) of the universe's initial configuration relative to the $|\Psi|^2$ measure ($\Psi$ the universal wavefunction), the move Boltzmann made for thermodynamics ([5.6](lessons/05-06-probability-in-statistical-mechanics.md)).
- **Its payoff** is [absolute uncertainty](#absolute-uncertainty). With [equivariance](#equivariance) it underwrites Born statistics in Bohmian mechanics.
- **The dissent.** Antony Valentini: equilibrium is reached by relaxation, as thermal equilibrium is ([quantum non-equilibrium](#quantum-non-equilibrium)).
- **Where Bohm is weakest** (2.1). *Objection:* typicality relative to $|\Psi|^2$ presupposes the measure it was meant to explain, since under a different measure our universe would be atypical ([measure objection](#measure-objection)); and if equilibrium is contingent (Valentini), Bohm is not strictly empirically equivalent to quantum mechanics. *Reply:* the dynamics picks the measure, since $|\psi|^2$ is essentially the only suitably local equivariant distribution (Goldstein and Struyve, 2007), as the Liouville measure is for classical mechanics. *Concessions:* the Bohmian, that the measure is justified by naturalness, not derived; the critic, that no non-equilibrium has been seen and that Boltzmann faces the same question. The Stanford Encyclopedia (2025 revision) still calls the justification controversial.
- **Beside Everett** (2.4). How Bohm in quantum equilibrium compares observationally with Everett is under [evidential problem](#evidential-problem).
- **Left to you.** What the hypothesis asserts, what equivariance adds, and how the typicality argument runs are asked together by Boss 2(c); the card does not assemble them.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Absolute uncertainty

**Dürr, Goldstein and Zanghì's name for a limit, set by quantum equilibrium, on what anyone inside a Bohmian universe can know about particle positions: a limit no technology can lower.** The term is in the title of their 1992 paper ("Quantum Equilibrium and the Origin of Absolute Uncertainty"), paraphrased.

- **Determinism is not predictability** (2.1 Watch out). Bohmian mechanics is deterministic, yet no one can predict outcomes better than the Born probabilities: no more predictable than the textbook theory ([determinism and predictability](#determinism-and-predictability), [5.1](lessons/05-01-determinism-in-physical-theories.md)).
- **Left to you.** Exactly what an observer could never learn, and why the same limit bears on Bohmian nonlocality, is asked by Boss 2(c) (2.1, "Hypothesis" and "Nonlocality").

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md)

### Quantum non-equilibrium

**Valentini's hypothesis that particle distributions could differ from $|\psi|^2$, with equilibrium reached by relaxation, as thermal equilibrium is.** Antony Valentini; Valentini and Westman, "Dynamical Origin of Quantum Probabilities" (2005).

- **A possible test.** Non-equilibrium may have existed in the early universe and could in principle show in cosmological data (Valentini, 2010). If it did, Bohmian mechanics would be empirically distinguishable from quantum mechanics.
- **Its bearing** ([quantum equilibrium](#quantum-equilibrium)). If equilibrium is a contingent state rather than a typicality fact, Bohm is not strictly empirically equivalent to quantum mechanics. No non-equilibrium has ever been seen.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md)

### Conditional wave function

**A subsystem's wavefunction, got by plugging the actual configuration of everything else into the universal wavefunction: $\psi(x) = \Psi(x, Y)$**, where $x$ is the subsystem's configuration, $Y$ the actual configuration of the rest (say, a pointer), and $\Psi$ the universal wavefunction (scalar case). The subsystem's particles obey the guidance equation with it. When it evolves autonomously by the subsystem's own Schrödinger equation, Dürr, Goldstein and Zanghì call it the effective wavefunction.

- **Effective collapse** (2.1). Let a measurement leave $\Psi(x,y) = \sum_i \psi_i(x)\Phi_i(y)$, with $y$ the pointer's configuration and non-overlapping pointer packets $\Phi_i$. The actual $Y$ lies in one $\Phi_i$, so that term alone guides, and $\Psi(x,Y)$ is $\psi_i$, exactly as the textbook rule says. *In words:* the [collapse postulate](#collapse-postulate) becomes a theorem about which part of the wave steers.
- **Trap: the wavefunction collapsed.** The universal wavefunction keeps every branch; the others become [empty wave packets](#empty-wave-packets). [Decoherence](#decoherence) keeps branches apart; it does not delete them.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md)

### Empty wave packets

**After a measurement, the branches of the wavefunction that the actual configuration does not occupy: idle while they stay apart from the occupied one, since the guidance equation is evaluated only where the particles are.** [Decoherence](#decoherence) makes their recombination practically impossible, so effective collapse holds for all practical purposes ([FAPP](#fapp)).

- **Not idle forever.** A packet that overlaps the occupied one again is no longer empty, and it steers the particles (2.1 Example 1, crossing beams).
- **The "chronic denial" objection.** The unoccupied packets obey the same law as the occupied one: David Deutsch (1996) called pilot-wave theories parallel-universe theories in "chronic denial", and Harvey Brown and David Wallace ("Solving the Measurement Problem: de Broglie-Bohm Loses Out to Everett", 2005) argued that the particles do no work in solving the measurement problem.
- **The reply** (Maudlin, 2010, among others). A world is matter in space; a branch of a field on configuration space, or of a law (Dürr, Goldstein and Zanghì, 1997), is not one ([primitive ontology](#primitive-ontology)).
- **The shared premise.** Whether structure in the wavefunction alone suffices for a world: the same premise as GRW's structured tails ([tails problem](#tails-problem)) and Everett's branches ([2.3](lessons/02-03-many-worlds-branching.md)); [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) P3 sets the dispute, and it turns on the functionalism of [`philosophy-of-mind` 2.2](../philosophy-of-mind/lessons/02-02-functionalism.md).
- **Trap: "many worlds in denial".** "Many Worlds in Denial?" is the title of Valentini's 2010 Bohmian *reply*; Deutsch's phrase is "chronic denial".

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md)

### Contextuality

**A measurement result depends on the whole experimental arrangement, not on a value the measured quantity already had.** 2.1's sense. In Bohmian mechanics only position has a value; spin and momentum results are joint products of particle and apparatus.

- **Albert's example** (*Quantum Mechanics and Experience*, 1992). An atom in an $x$-spin eigenstate enters a $z$-oriented Stern–Gerlach magnet ([`quantum-mechanics` 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md)); in a symmetric set-up an atom starting in the upper half of its packet cannot cross the midplane, so it lands in the upper beam, read "$z$-up". Reverse the polarity, keep the geometry: the same atom still goes up, and up now reads "$z$-down".
- **The Kochen-Specker sense** (3.2). For one system with three or more levels, no assignment of definite values to all observables can be independent of which compatible observables are measured alongside; hidden-variable theories must be contextual, "as Bohm's is" ([Kochen-Specker theorem](#kochen-specker-theorem)).
- **Why it matters.** It is how Bohm escapes the Kochen-Specker theorem, which assumes noncontextual values.
- **Trap: a Bohmian measurement reveals a value.** For anything but position the result is made by the measuring interaction acting on the actual position: averages match the Born rule, individual "values" need not match any velocity the particle had (2.1 P1, 2.3 flashback).

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [2.3](lessons/02-03-many-worlds-branching.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Preferred foliation

**A privileged slicing of spacetime into simultaneity surfaces, global "nows", which a theory's laws use.** Relativity supplies none ([frame-dependent order](#frame-dependent-order)), so a theory that needs one adds structure beyond Minkowski spacetime.

- **Why Bohm needs one** (2.1, 3.3). For an entangled $\psi$, a particle's velocity depends on other particles' positions at the same time, and "the same time" must be fixed by something. Berndl, Dürr, Goldstein and Zanghì (1996) showed that trajectory theories cannot keep Born statistics on arbitrary spacelike hyperplanes.
- **Hidden, not absent.** Lorentz invariance survives at the level of statistics, and the foliation stays hidden: in [Maudlin's taxonomy](#maudlins-taxonomy) Bohm pays in question (v), laws that need spacetime structure beyond the light cones.
- **Where it could come from.** Dürr, Goldstein, Münch-Berndl and Zanghì (1999) got it from an extra field; Dürr, Goldstein, Norsen, Struyve and Zanghì (2014) proposed that the universal wavefunction fixes it covariantly, which is Lorentz invariant, though they leave open whether that is fully relativistic.
- **The alternative.** Tumulka's flash GRW needs none ([relativistic collapse](#relativistic-collapse), [flash ontology](#flash-ontology)). Tumulka's choice, paraphrased: exact quantum mechanics with a preferred slicing, or no slicing and a small deviation from quantum mechanics.
- **Presentism's first exit** (4.3). [`metaphysics` 5.1](../metaphysics/lessons/05-01-the-a-theory-and-the-b-theory.md) names a privileged frame undetectable in principle, a foliation like the one Bohmian mechanics needs; some presentists welcome it ([`metaphysics` 5.2](../metaphysics/lessons/05-02-presentism-growing-block-eternalism.md)). The other exit is [frame-relative presentism](#frame-relative-presentism); the verdict on presentism belongs to metaphysics 5.2.
- **Trap: Lorentz-invariant predictions show the laws need no foliation.** See [Maudlin's taxonomy](#maudlins-taxonomy).

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Surrealistic trajectories

**The charge that a Bohmian trajectory can pass through one arm of an interferometer while a which-way detector records the other.** Berthold-Georg Englert, Marlan Scully, Georg Süssmann and Herbert Walther, "Surrealistic Bohm Trajectories" (1992): with one-bit which-way detectors (cavities that store the arm in a non-positional degree of freedom), Bohmian trajectories can be macroscopically at odds with the track the detectors record.

- **The mechanism** (2.1 Example 1). In a mirror-symmetric set-up the velocity across the symmetry plane vanishes on it, and trajectories cannot cross, so a particle stays on its side of the plane. A record that is a particle position (a pointer) separates the branches in configuration space and lets the particle go straight; a non-positional record does not.
- **Replies.** Dürr, Fusseder, Goldstein and Zanghì (1993): Bohm disagrees only with a naive operationalism, not with quantum mechanics. Jeffrey Barrett ("The Persistence of Memory", 2000): the trajectories are real, and the case shows the special role of position records.
- **Experiment.** Mahler and colleagues (2016) reconstructed such trajectories for entangled photons by weak measurement and concluded that they look surreal only if one ignores their nonlocality.
- **Trap: an empirical refutation.** No prediction differs from quantum mechanics; the dispute is over what the detector record tells you about the path.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md)

### GRW theory

**Collapse made a law of nature: the wavefunction obeys Schrödinger's equation except at rare random instants, when one particle's wavefunction is suddenly localized (a "hit"), with no observer and no "measurement" in the laws.** GianCarlo Ghirardi, Alberto Rimini and Tullio Weber, "Unified Dynamics for Microscopic and Macroscopic Systems" (1986). On [Maudlin's trilemma](#maudlins-trilemma) it denies (B): the individual state jumps, nonlinearly and at random. (C) holds because superposed displaced matter does not last. The textbook [collapse postulate](#collapse-postulate) stays, but it stops waiting for a measurement.

- **Three rules** (2.2, D1–D3). *How:* multiply the wavefunction by a Gaussian about $a$ wide in one particle's coordinate and renormalize ([localization width](#localization-width)). *Where:* the centre is drawn with density equal to the squared norm of the result, so hits land where the wave is big. *When:* each particle's hits form a Poisson process at the [localization rate](#localization-rate) $\lambda_{\rm GRW}$. GRW chose $\lambda_{\rm GRW} = 10^{-16}\,\mathrm{s}^{-1}$ and $a = 10^{-7}$ m.
- **The design.** An isolated particle is essentially never hit, so microscopic experiments come out as quantum mechanics says; in a pointer's superposition all its particles are entangled, so a hit on any one settles the whole ([amplification](#amplification)). One rule, no observer, no cut between micro and macro.
- **Not decoherence** (2.2 Watch out). Averaged over centres, a hit acts on the density matrix $\rho$ as $\rho \mapsto \int G_{\mathbf x}\,\rho\,G_{\mathbf x}\,d^3x$ ($G_{\mathbf x}$ the Gaussian centred at $\mathbf x$), a position-dephasing channel in the Kraus form of [`quantum-computing` 5.1](../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md), as [decoherence](#decoherence) is. But a hit changes the individual state with no interaction at all, and the mixture over which hit occurred is proper: ignorance of a fact ([proper and improper mixtures](#proper-and-improper-mixtures)).
- **No signals.** Linear on $\rho$, it cannot be used to signal ([no-signalling](#no-signalling), [3.3](lessons/03-03-nonlocality-and-relativity.md)).
- **Energy.** A hit adds on average $3\hbar^2/4ma^2$ of kinetic energy to a particle of mass $m$ ($\hbar$ the reduced Planck constant), about 3 neV for a nucleon. The original version's energy production clashed with proton-lifetime data (Pearle and Squires, 1994), one reason later versions make the rate proportional to mass.
- **What exists.** The wavefunction lives on configuration space. Read alone (GRW0) it gives [wavefunction realism](#wavefunction-realism); [flashes](#flash-ontology) or a [mass density](#mass-density-ontology) put matter in ordinary space ([primitive ontology](#primitive-ontology)).
- **Testable.** It alone among the realist repairs predicts heating, noise and radiation that standard quantum mechanics does not ([tests of collapse models](#tests-of-collapse-models)). Its family has a continuous version, [CSL](#csl), and a gravitational one, Diósi–Penrose.
- **Indeterministic** ([5.1](lessons/05-01-determinism-in-physical-theories.md)): GRW and textbook collapse do not evolve deterministically; Bohm and the Everettian state do.
- **Where it is weakest** (2.2): the [amplification](#amplification) premise. The [tails problem](#tails-problem) is the other standing complaint.
- **Trap: the realist interpretations are empirically equivalent.** GRW differs in principle, which is why [`apologetics-foundations` 4.4](../apologetics-foundations/lessons/04-04-divine-action-miracles-and-quantum-indeterminacy.md) sets it apart from Bohm and Everett.
- **Trap: a hit is decoherence under another name** (above).
- **Left to you.** Where GRW stands among Bell's premises is mapped in 3.2 and asked by Boss 3(c) (see [parameter independence](#parameter-independence), [outcome independence](#outcome-independence), [measurement independence](#measurement-independence), [single outcomes](#single-outcomes)).
- **Neighbours.** [`apologetics-foundations` 4.4](../apologetics-foundations/lessons/04-04-divine-action-miracles-and-quantum-indeterminacy.md) uses GRW's open outcomes as a possible causal joint for divine action; Albert (*Time and Chance*, 2000) uses GRW's chances to ground statistical-mechanical probabilities ([5.6](lessons/05-06-probability-in-statistical-mechanics.md)); empirical equivalence and underdetermination are [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md)'s, and the shrinking parameter window is a case for [`philosophy-of-science` 2.5](../philosophy-of-science/lessons/02-05-lakatos-and-feyerabend.md).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [3.2](lessons/03-02-what-bell-rules-out.md), [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Localization width

**The width $a$ of the Gaussian by which a GRW hit multiplies the wavefunction: GRW chose $a = 10^{-7}$ m, about a ten-thousandth of a millimetre, wide enough to leave an atom's internal structure almost untouched.** When particle $i$ is hit with centre $\mathbf x$ (2.2, D1–D2):

$$\psi \;\longmapsto\; \frac{G_{\mathbf x}(\mathbf q_i)\,\psi}{\lVert G_{\mathbf x}(\mathbf q_i)\,\psi\rVert}, \qquad G_{\mathbf x}(\mathbf q) = K\,e^{-(\mathbf q-\mathbf x)^2/2a^2},$$

with $\mathbf q_i$ particle $i$'s coordinate and $K$ fixed so that $\int |G_{\mathbf x}(\mathbf q)|^2\,d^3x = 1$. The centre $\mathbf x$ has probability density $\lVert G_{\mathbf x}(\mathbf q_i)\,\psi\rVert^2$. *In words:* multiply the wave by a bump about $a$ wide, then renormalize; hits land where the wave is big.

- **Trap: the convention.** This is GRW's own, as the Stanford Encyclopedia presents it, with $2a^2$ in the amplitude. Allori, Goldstein, Tumulka and Zanghì (2008) write a Gaussian with $2\sigma^2$ as an operator and apply its square root, so their amplitude carries $4\sigma^2$: a factor 2 in every tail exponent. State which before computing or comparing.
- **One hit, two packets** (2.2 Example 1). Two packets much narrower than $a$, a distance $d = 10a$ apart, hit exactly on the left one: the right amplitude is multiplied by $e^{-d^2/2a^2} = e^{-50} \approx 1.9\times10^{-22}$, its relative weight by $e^{-100}$; in the $4\sigma^2$ convention (with $\sigma = a$) the amplitude factor is $e^{-25}$. The centre is itself random, spreading with standard deviation $a/\sqrt2$ about the packet, and a centre shifted by $s$ toward the other packet raises the tail by $e^{sd/a^2}$.
- **Nothing makes it zero.** Every version leaves the other packet down by many orders of magnitude and nonzero ([tails problem](#tails-problem)).

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Localization rate

**The mean frequency $\lambda_{\rm GRW}$ with which each particle suffers a GRW hit: GRW chose $10^{-16}\,\mathrm{s}^{-1}$ per particle, and each particle's hits form a Poisson process.** The subscript is the course's, because Module 3 uses $\lambda$ for the complete state.

- **Per particle or per nucleon.** The original rate is per particle. Mass-proportional versions, adopted after the energy problem ([GRW theory](#grw-theory)), use $10^{-16}\,\mathrm{s}^{-1}$ per nucleon, about 2,000 times less per electron.
- **For a body, multiply.** What matters for a macroscopic superposition is the number of particles displaced by more than $a$ ([amplification](#amplification)).
- **Adler's proposal** (2003). Raise the rate about $10^9$-fold, so that collapse would happen in the eye's rods, where fewer than $10^5$ molecules are affected. Experiments have since excluded it, at least with white noise (Stanford Encyclopedia, 2025 revision).
- **The window.** The rate is bounded from below by the requirement that pointers collapse fast, and from above by experiment ([tests of collapse models](#tests-of-collapse-models)).
- **Trap: per particle vs per nucleon vs per body.** State which before computing.
- **Left to you.** Boss 2(a) asks for the mean waiting times; the card gives none.

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Amplification

**One hit on any one particle of an entangled macroscopic superposition suppresses the whole superposition, so a body is hit at a rate proportional to the number of its displaced particles.** 2.2's theorem: let a pointer of $N$ particles end in $\alpha|P_L\rangle + \beta|P_R\rangle$ ($\alpha, \beta$ amplitudes, $|P_L\rangle, |P_R\rangle$ the pointer pointing left and right), every particle displaced by $d \gg a$ between the terms ($a$ the [localization width](#localization-width)).

- **The steps.** Independent Poisson processes merge, so the pointer is hit at rate $N\lambda_{\rm GRW}$. A hit on any particle centred near its left position multiplies the right term by about $e^{-d^2/2a^2}$, since that term needs the particle on the right. For narrow packets the centre falls near the left with probability $|\alpha|^2$. *In words:* one hit anywhere settles the whole pointer, with Born's odds.
- **What counts.** The number of particles displaced by more than $a$, not the number present.
- **Where GRW is weakest** (2.2): the premise that every outcome a person can see is first recorded by displacing many particles. *Objection* (Albert and Vaidman, 1989): a particle sent to one of two spots on a fluorescent screen excites a few atoms over less than $a$, a few photons fly out (hits act on matter, not light), and an eye registers them; no hit separates the branches before the observer. *Reply* (Aicardi, Borsellino, Ghirardi and Grassi, 1991): the nerve signal to the visual cortex moves enough ions to trigger collapse within the time of perception; the brain is simply the first macroscopic displacer, and a spark chamber would do the same. *Concessions:* the defender, that in such set-ups the outcome becomes definite inside the observer; the critic, that no consciousness is invoked.
- **Trap: a hit localizes only the particle hit.** Because the pointer's particles are entangled, localizing one crushes the other term for all of them.
- **Left to you.** Boss 2(a) computes the times for one nucleon and for a pointer; the card gives no values.

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### CSL

**Continuous spontaneous localization: a collapse theory in which the state drifts continuously and randomly instead of jumping.** Philip Pearle (1989); Ghirardi, Pearle and Rimini (1990). Unlike GRW's original model, it respects the symmetry of identical particles.

- **Counting** (the Stanford Encyclopedia's simplified form, 2.2). Coherence between two arrangements of matter decays as $\exp[-\lambda_{\rm CSL}\,t\sum_k (n_k - m_k)^2]$, where $t$ is time, $\lambda_{\rm CSL}$ the model's rate parameter, and $n_k, m_k$ the nucleon counts in the $k$-th cell of side $a$ in the two arrangements. Matter moved together within one cell counts quadratically: a molecule of $N$ nucleons smaller than $a$, in two places, decoheres at rate $2N^2\lambda_{\rm CSL}$ (2.2 Example 2).
- **Diósi–Penrose.** Lajos Diósi and Roger Penrose (whose idea goes back to *The Emperor's New Mind*, 1989) tie the rate to gravity, so that a superposition of differently curved spacetimes decays. Penrose's separate argument about minds is [`philosophy-of-mind` 6.1](../philosophy-of-mind/lessons/06-01-computationalism-and-the-turing-test.md).
- **Status.** XENONnT (2026) excluded white-noise CSL's originally proposed strength and correlation length; coloured-noise and dissipative CSL have their own parameter spaces ([tests of collapse models](#tests-of-collapse-models)).
- **Trap: GRW's and CSL's rates are one number.** They are different parameters in differently built models; compare them only inside one model's convention.

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Flash ontology

**GRW read as a theory whose matter is the hits themselves: events at points of spacetime, with space empty between them.** John Bell, "Are There Quantum Jumps?" (1987); relativistic versions Dove (1996) and Tumulka (2006). A piece of matter is, in Bell's phrase, "a galaxy of such events". Allori, Goldstein, Tumulka and Zanghì (2008) named it GRWf.

- **The wavefunction is not matter.** It is not in space; it sets the chances of future flashes. A tail is therefore no matter at all, and a flash there is all but impossible ([tails problem](#tails-problem)).
- **Local beables.** Flashes are what the theory says exists in a region of spacetime, so [local causality](#local-causality) has something to be about ([local beables](#local-beables)).
- **Relativistic** (3.3). Tumulka's flash law is one joint chance law that no foliation enters, and it is Lorentz invariant; it covers a fixed number of non-interacting particles ([relativistic collapse](#relativistic-collapse), [preferred foliation](#preferred-foliation)).
- **Trap: particles between flashes.** Nothing persists between flashes; a body is a pattern of rare events, and before any hit a region may contain no matter at all.

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Mass-density ontology

**GRW read as a theory whose matter is a continuous mass field in ordinary space.** Ghirardi, Grassi and Benatti (1995); Allori, Goldstein, Tumulka and Zanghì (2008) named it GRWm.

$$m(\mathbf x,t) = \langle\psi_t|M(\mathbf x)|\psi_t\rangle,$$

where $\psi_t$ is the state at time $t$ and $M(\mathbf x)$ the mass-density operator at point $\mathbf x$. A particle in two packets has half its mass in each.

- **Where a pointer is.** After hits, a macroscopic body's mass is overwhelmingly in one place; GRW's defenders count it as located where almost all of its mass is.
- **Lewis's complaint** ("Quantum Mechanics, Orthogonality, and Counting", 1997): with "almost all", counting misbehaves.
- **Tails are matter here.** A crushed term is a real but tiny sliver of mass at the other position ([tails problem](#tails-problem)).
- **Trap: a probability.** The mass density is a field that exists, not the probability of finding a particle.

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Tails problem

**A Gaussian is never zero, so after a hit the crushed term survives, tiny: is the other outcome really gone?** Abner Shimony ("Desiderata for Modified Quantum Dynamics", 1990): tails should not be tolerated if the senses could tell their parts apart, however low their amplitude.

- **Albert's version** (*Quantum Mechanics and Experience*, 1992, ch. 5). On the [eigenvalue-eigenstate link](#eigenvalue-eigenstate-link), a pointer with tails is in no position eigenstate, so it points nowhere.
- **The defenders' reply.** The trouble comes from keeping $|\psi|^2$ as a probability of position; on the [mass-density ontology](#mass-density-ontology) a pointer is where almost all of its mass is. Peter Lewis (1997) answered that "almost all" makes counting misbehave.
- **Bare and structured tails** (Kelvin McQueen, "Four Tails Problems for Dynamical Collapse Theories", 2015). *Bare tails* is Albert's eigenvalue–eigenstate formulation: the post-hit state is no eigenstate of a definite outcome. McQueen calls it a pseudo-problem, since the link is optional (neither Bohm nor Everett keeps it) and a relaxed link, such as Albert and Loewer's "fuzzy link" (a particle is in a region if nearly all its squared amplitude is there), disposes of it. *Structured tails*: the crushed term is not featureless but a low-weight copy of the other outcome, pointer, cat and observer, with all their structure, evolving as they would.
- **The premise it turns on.** The structured version bites if structure in the wavefunction suffices for a world, the premise [2.3](lessons/02-03-many-worlds-branching.md) adopts and Bohmians deny about [empty wave packets](#empty-wave-packets). How each [primitive ontology](#primitive-ontology) replies, and what each side concedes, is 2.2 P3.
- **Trap: a sharper collapse function abolishes tails.** Any wave with compact support spreads over all space at once under the Schrödinger equation, so bare tails return immediately whatever the bump. McQueen grants that such a function would stop structured tails forming, and argues it brings new trouble with relativity.
- **Trap: better parameters remove tails.** No finite number of hits makes the crushed term zero (2.2 P2; [localization width](#localization-width)).

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Tests of collapse models

**Experiments that bound collapse parameters through effects collapse predicts and standard quantum mechanics does not: heating, noise and radiation.** GRW-type collapse is the one realist repair experiment can hit.

- **Interferometry is too weak** (2.2 Example 2). Molecules of over 10,000 nucleons have been sent through gratings, but for a flight of milliseconds the expected number of GRW hits is tiny, and such experiments cannot yet test even Adler's rate, let alone GRW's.
- **The decisive tests are non-interferometric** (Carlesso and colleagues' 2022 review): collapse jiggles matter, which heats it, shakes test masses and makes charged particles radiate. LISA Pathfinder bounds the CSL rate at about $3\times10^{-8}\,\mathrm{s}^{-1}$ (Helou and colleagues, 2017); a germanium detector under the Gran Sasso ruled out the parameter-free Diósi–Penrose model (Donadi and colleagues, 2020); XENONnT excluded white-noise CSL's originally proposed strength and correlation length (2026).
- **What a result shows** (2.2, where the account stops). Each result kills a model at a parameter setting, not "collapse": Diósi–Penrose survives with a free cutoff, and coloured-noise and dissipative CSL have their own parameter spaces. The critic sees a theory retreating into unexplored corners, a Lakatosian protective belt ([`philosophy-of-science` 2.5](../philosophy-of-science/lessons/02-05-lakatos-and-feyerabend.md)). The defender answers that the window is closed from below too, since the rate must collapse pointers fast, so the theory can lose outright. A positive signal would not settle things either: extra noise might be decoherence from an unnoticed environment.
- **Trap: "the 2026 exclusion refutes collapse theories".** It excludes one model, white-noise CSL, at its original parameters (it is not a result about original GRW), and the family survives elsewhere in its parameter space.

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Many-worlds interpretation

**Apply the Schrödinger equation to everything and never collapse: every outcome of a measurement occurs, each paired with an observer who saw it.** Hugh Everett III, "'Relative State' Formulation of Quantum Mechanics" (1957); Bryce DeWitt (1970) popularized the name "many worlds"; David Wallace ("Everett and Structure", 2003; *The Emergent Multiverse*, 2012) gives the modern account. On [Maudlin's trilemma](#maudlins-trilemma) it keeps (A), completeness, and (B), linear evolution, and denies (C) as stated: a measurement has no single outcome.

- **Three versions.** Everett's own avoided talk of worlds and named no preferred basis ([relative state](#relative-state)). DeWitt took the components to be physically splitting worlds, which needs a rule saying which components count ([preferred-basis problem](#preferred-basis-problem)). Wallace supplies one without a new postulate: decoherence selects the split, and branches are real but emergent patterns with no exact count ([emergent branches](#emergent-branches), [real patterns](#real-patterns), [branching](#branching)).
- **The and-or problem dissolved.** For the Everettian alone, the [and-or problem](#and-or-problem) that [decoherence](#decoherence) left open is no problem: "and" is the answer, each branch containing one reading.
- **Deterministic.** The universal state never jumps, so "quantum mechanics is indeterministic" is interpretation-relative ([5.1](lessons/05-01-determinism-in-physical-theories.md)).
- **What is fundamental.** One state, but on what space: [wavefunction realism](#wavefunction-realism) (configuration space) or [spacetime state realism](#spacetime-state-realism) (spacetime, at the price of nonseparability).
- **The incredulous stare.** David Lewis's name for the reaction to his plurality of worlds ([`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)). The Everettian reply: Ockham's razor should count laws and postulates, not entities, and many-worlds adds nothing to the Schrödinger equation (Stanford Encyclopedia). Meir Hemmo and Orly Shenker (2022): the economy is idle if the postulates alone cannot explain experience.
- **Its price is probability.** With every outcome occurring, the Born rule must be earned: the [incoherence](#incoherence-problem), [quantitative](#quantitative-problem) and [evidential](#evidential-problem) problems of 2.4.
- **Relativity.** What Everett makes of nonlocality is taken up in 3.3 ([Maudlin's taxonomy](#maudlins-taxonomy)).
- **Trap: the cosmologists' multiverse.** Different origin and role ([Everettian and cosmological multiverses](#everettian-and-cosmological-multiverses)).
- **Trap: Lewis's possible worlds.** Branches are parts of one actual state, share a past and can in principle interfere (2.3 Watch out).
- **Trap: "Everett's many worlds".** The name and the splitting-worlds picture are DeWitt's; Everett spoke of relative states.
- **Left to you.** Where many-worlds stands among Bell's premises is taken up in 3.1–3.2 and asked by Boss 3(c) (see [parameter independence](#parameter-independence), [outcome independence](#outcome-independence), [measurement independence](#measurement-independence), [single outcomes](#single-outcomes)).
- **Neighbours.** [`apologetics-foundations` 4.4](../apologetics-foundations/lessons/04-04-divine-action-miracles-and-quantum-indeterminacy.md): on Everett every outcome occurs and none is left to be selected. [`metaphysics` 6.4](../metaphysics/lessons/06-04-libertarianism-and-its-critics.md) defers to 5.1 on interpretation-relative indeterminism.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.3](lessons/02-03-many-worlds-branching.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md), [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Relative state

**Everett's formulation: drop the collapse rule, and after a measurement there is no absolute fact about what the observer recorded, only what she recorded relative to a state of the system, and what the system is relative to her record.** Everett, "'Relative State' Formulation of Quantum Mechanics" (*Reviews of Modern Physics*, 1957); the longer draft thesis was titled "Wave Mechanics Without Probability". He called the result pure wave mechanics. 2.3's analogy: "it is noon" is true not of the Earth but relative to a longitude.

E1: the universal state is complete and always evolves by the Schrödinger equation. E2: an ideal measurement correlates. If a device records $|{\uparrow}\rangle$ as $|E_\uparrow\rangle$ and $|{\downarrow}\rangle$ as $|E_\downarrow\rangle$, linearity gives

$$(\alpha|{\uparrow}\rangle + \beta|{\downarrow}\rangle)|E_0\rangle \;\longrightarrow\; \alpha|{\uparrow}\rangle|E_\uparrow\rangle + \beta|{\downarrow}\rangle|E_\downarrow\rangle,$$

where $\alpha, \beta$ are amplitudes with $|\alpha|^2 + |\beta|^2 = 1$, $|E_0\rangle$ is the ready state, and each $|E\rangle$ stands for everything that holds the record. E3: with the composite state $|\Psi\rangle$ written spin first, the spin's state relative to a record state $|E\rangle$ is $(I \otimes \langle E|)\,|\Psi\rangle$, normalized, with $I$ the identity on the spin. *Conclusion:* every outcome occurs, each definite relative to a record of it, none absolutely.

- **Measurement is entanglement** ([`quantum-mechanics` 5.2](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md)). With orthogonal records, the spin relative to $|E_\uparrow\rangle$ is $|{\uparrow}\rangle$.
- **What it leaves open.** A relative state exists for every state of the device, and Everett named no preferred basis and avoided talk of worlds (Stanford Encyclopedia), so something must say which components count. Wallace's answer is decoherence ([emergent branches](#emergent-branches), [preferred-basis problem](#preferred-basis-problem)).
- **Trap: Everett as a student in 1957.** He wrote the thesis as a Princeton graduate student, but had left Princeton by the time the paper appeared in 1957.

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md)

### Branching

**In no-collapse quantum mechanics, the process by which a measurement-like interaction turns one quasi-classical component of the universal state into several that no longer interfere.** Entanglement ([relative state](#relative-state), E2) plus [decoherence](#decoherence) (2.3, W1). *In words:* a branch is a component that no longer interferes with its siblings.

- **The test** (2.3 Example 1). Prepare $\frac{\sqrt3}{2}|{\uparrow}\rangle + \frac12|{\downarrow}\rangle$, a spin at 60° from $z$, measure $z$, then $x$. With orthogonal $z$-records the two routes to $x$-up cannot interfere, so squared amplitudes add, $\frac38 + \frac18 = \frac12$; had the $z$-coupling left no record, amplitudes would add first, $\big(\tfrac{\sqrt3}{2} + \tfrac12\big)^2/2 = \frac{2+\sqrt3}{4} \approx 0.93$. The branches exist because of the records. Every interpretation predicts these numbers; the Everettian adds only that nothing beyond them happens.
- **Partial records** (2.3 P2). When the records overlap, interference is partial, and whether there are two branches has no sharp answer ([emergent branches](#emergent-branches)).
- **Local or global.** On Wallace's account branching spreads out from the interaction; some Everettians (Lev Vaidman) prefer global branching.
- **Idealized splits.** 2.4 idealizes each measurement as splitting every branch into exactly two; 2.3 Example 2 shows why that is an idealization ([branch counting](#branch-counting)).
- **Trap: branching creates matter, or decoherence removes the other branches.** There is one state with conserved norm. Branching divides amplitude, and decoherence only stops components interfering; every component remains.
- **Trap: an instantaneous split of the whole world.** On Wallace's account branching is gradual and local.

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Real patterns

**A pattern is real if a description using it is more efficient than listing the data bit by bit, whether or not anyone uses it.** Daniel Dennett, "Real Patterns" (1991), paraphrased: a test of compression. [`philosophy-of-mind` 4.1](../philosophy-of-mind/lessons/04-01-intentionality-and-folk-psychology.md) uses real patterns for beliefs; in 2.3 they carry worlds.

- **"Dennett's criterion"** is Wallace's name ("Everett and Structure", 2003) for his own version: a macro-object is a pattern, and it is real if theories that include it explain and predict well. 2.3's premise W2. *In words:* a tiger is real because tiger-talk predicts what the particles do far more cheaply than particle-talk.
- **Blurred edges.** Patterns can be real without exact borders: quasi-particles fade as their lifetime shortens, and there is no exact border between valley and mountain ([fallacy of exactness](#fallacy-of-exactness)).
- **Where 2.3's argument is weakest:** W2 applied to observers. *Objection:* usefulness is relative to describers, so worlds and their observers would exist only at a level of description someone picks, odd for a theory meant to remove observers from the foundations. *Reply:* whether a compressing description exists does not depend on anyone using it (Dennett's own point), and decoherence makes the quasi-classical description the efficient one, objectively. *Concessions:* the Everettian, that "world" is not a fundamental category and that the view needs something like functionalism about observers ([`philosophy-of-mind` 2.2](../philosophy-of-mind/lessons/02-02-functionalism.md)); the critic, that tigers and quasi-particles are real by the same test, so she must say why outcomes, unlike tigers, need a fundamental ground.
- **Trap: crediting the criterion's wording to Dennett.** The phrase "Dennett's criterion" and its wording are Wallace's; Dennett proposed a very similar view with the compression test.
- **Trap: "useful" means useful to us.** The existence of a compressing description is meant to be objective.

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Emergent branches

**Wallace's account: branches are real, emergent and approximately defined patterns in the universal state, picked out by decoherence, and there is no exact fact about how many there are.** David Wallace, "Everett and Structure" (2003); *The Emergent Multiverse* (2012).

- **The argument** (2.3). W1: decoherence selects the split, making some states robust and suppressing interference between components that differ in them. W2: [Dennett's criterion](#real-patterns). W3: decohered components are such patterns, each evolving to excellent approximation as an independent quasi-classical history. *Conclusion:* branches are real, emergent and approximate, with no exact count, like the number of valleys in a mountain range.
- **Weak emergence.** Every fact about branches follows from the universal state, though nobody would read them off it unaided: weak emergence in Chalmers's sense ([`philosophy-of-science` 4.5](../philosophy-of-science/lessons/04-05-reduction-and-emergence.md)).
- **The continuous pointer** (2.3 Example 2). Gaussian pointer packets $\psi_a(y) = (2\pi s^2)^{-1/4}e^{-(y-a)^2/4s^2}$ ($y$ the pointer coordinate, $a$ the reading, $s$ the spread of $|\psi_a|^2$) overlap by $\langle\psi_a|\psi_{a+d}\rangle = e^{-d^2/8s^2}$ for readings $d$ apart. Nowhere does the overlap jump from one branch to two, so the count is the number of bins you chose. Wallace: there is no fact to miss. Kent's line: "every outcome occurs" then has definite content only once a grain is chosen. Both accept that the state and every prediction are fixed and the number of worlds is not; they divide on whether a fundamental theory owes more.
- **Its use in 2.4.** No well-defined branch number is Wallace's ground for refusing to weight outcomes by count ([branch counting](#branch-counting)) and for [branching indifference](#branching-indifference).
- **Trap: "world" as a fundamental category.** On this view it is not; see [fallacy of exactness](#fallacy-of-exactness) and [real patterns](#real-patterns).

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Fallacy of exactness

**Wallace's name for the demand that branches, worlds or a preferred basis be fixed by an exact rule in the theory's axioms, or else count as illusions.** David Wallace, "Everett and Structure" (2003), a section title, answering Adrian Kent, "Against Many-Worlds Interpretations" (1990), who demanded an explicit, precise rule.

- **The reply** (1.2, 2.3). Emergent structure is always approximate, as tigers and quasi-particles such as phonons are; exactness is owed only at the fundamental level, where the axioms are (A) and (B) and mention no measurement.
- **The critic's rejoinder.** Outcomes, unlike tigers, need a fundamental ground: what exists should not depend on how finely we bin ([emergent branches](#emergent-branches)).
- **Where it was met first.** [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md)'s "Where the argument is weakest" sets the approximate-branch objection and this reply; 2.3 moves on to the pressure on "useful" ([real patterns](#real-patterns)).

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Wavefunction realism

**The wavefunction of $N$ particles is a field on a $3N$-dimensional configuration space, and that space is fundamental; ordinary three-dimensional space must be explained as emergent.** David Albert, "Elementary Quantum Metaphysics" (1996); Alyssa Ney, *The World in the Wave Function* (2021).

- **Its gain.** The fundamental ontology is [separable](#separability): the state of a whole is fixed by the states of its parts.
- **Not only Everettian.** GRW read with no primitive ontology (GRW0, [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)) gives it too; it is a view about the space of the fundamental ontology.
- **Maudlin's objection** (2010). A field on configuration space is the wrong kind of object to compose tables and cats, which need something in spacetime ([primitive ontology](#primitive-ontology)).
- **The rival.** [Spacetime state realism](#spacetime-state-realism) keeps spacetime fundamental and gives up separability. Naming what divides the two, and what should move each side, is 2.3 P3.

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.3](lessons/02-03-many-worlds-branching.md)

### Spacetime state realism

**Spacetime is fundamental, and each region of it has a quantum state, its reduced density operator; the price is nonseparability.** David Wallace and Christopher Timpson, "Quantum Mechanics on Spacetime I: Spacetime State Realism" (2010).

- **Nonseparability.** The state of a region is not fixed by the states of its subregions ([separability](#separability), [6.2](lessons/06-02-gauge-as-surplus-structure.md)). Wallace and Timpson argue the view sits better with relativity.
- **Metaphysics.** The priority monist's appeal to entangled wholes in [`metaphysics` 2.4](../metaphysics/lessons/02-04-essence-and-grounding.md) is this nonseparability read as metaphysics.
- **The rival** is [wavefunction realism](#wavefunction-realism), which keeps separability and gives up the fundamentality of spacetime.

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Everettian and cosmological multiverses

**Two different ideas share a word: Everett's branches of one quantum state, and the cosmologists' many universes.** 2.3 Watch out.

- **Origin.** Everett's branches come from applying the Schrödinger equation to everything, with no added physics; the cosmological multiverse comes from particular cosmological models (inflation, a landscape of vacua).
- **Role.** Branches are invoked to solve the measurement problem; the universes are invoked to explain fine-tuning ([`philosophy-of-religion` 3.2](../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md)).
- **Usage.** Keep "branch" or "world" for Everett and "universe" for the cosmologists.
- **Nor Lewis's worlds.** Lewis's possible worlds ([`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)) are spatiotemporally isolated and include every way things could be; branches are parts of one actual state, share a past, can in principle interfere, and realize only what one Schrödinger evolution produces. Alastair Wilson (*The Nature of Contingency*, 2020) argues that branches can nonetheless do the work possible worlds do.

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Incoherence problem

**When every outcome of a measurement occurs, what is there to be uncertain about, and so what could "the probability of up" mean?** Named by David Wallace ("Everettian Rationality", 2003), together with the quantitative problem.

- **The booth** (2.4). A booth will wake one copy of you in a red room and one in a blue room; asked beforehand for the chance of waking in red, you might say one half, or that the question has no answer because both happen. Many-worlds puts you in that booth whenever a measurement decoheres, with the twist that the copies differ in weight.
- **Three answers.** Hilary Greaves ("Understanding Deutsch's Probability in a Deterministic Multiverse", 2004): no uncertainty is needed; the weights measure how much a rational Everettian should *care* about each successor (a caring measure). Simon Saunders ("Time, Quantum Mechanics, and Probability", 1998): keep uncertainty, arguing from Parfit's fission cases ([`metaphysics` 6.6](../metaphysics/lessons/06-06-personal-identity-over-time.md)) that one awaiting branching should expect to become one successor or another. Lev Vaidman (1998): after decoherence and before you look, you do not know which branch you are in ([self-locating uncertainty](#self-locating-uncertainty)).
- **Albert's objection** to the last: the uncertainty arrives "too late", after the bets it should guide.
- **Trap: who named it.** Wallace (2003), not Greaves (2004); Greaves is cited for the caring-measure answer.
- **Trap: it is about the numbers.** It asks whether probability makes sense at all when everything happens; which numbers is the [quantitative problem](#quantitative-problem).

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Quantitative problem

**Granted some sense of uncertainty on many-worlds, why should it follow the Born weights, squared amplitudes, rather than an equal share per branch?** Named by Wallace (2003). The tempting rival is [branch counting](#branch-counting); what must be justified is the [Born weight](#born-weight).

- **Where the measures part** (2.4). Count and weight agree only when the two outcomes have equal weight. By the law of large numbers the weight piles up near the Born frequency, the count near frequency one half.
- **Answers.** The [Deutsch-Wallace theorem](#deutsch-wallace-theorem), from rational choice; the [epistemic separability principle](#epistemic-separability-principle) of Sebens and Carroll, from self-location. Everett himself (1957) argued that a measure additive under further branching must be squared amplitude, by which almost all branches show quantum statistics; Jeffrey Barrett (Stanford Encyclopedia) notes that counting is just as consistent and that uniqueness needed further assumptions.
- **It presupposes the incoherence problem answered**: it asks for the numbers once uncertainty, or something playing its role, is granted ([incoherence problem](#incoherence-problem)).

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Evidential problem

**How can observed frequencies confirm a theory on which every frequency is observed by some successor?** Pressed by Hilary Greaves and Wayne Myrvold ("Everett and Evidence", 2010), who also answer it. In [`philosophy-of-science` 1.3](../philosophy-of-science/lessons/01-03-confirmation-as-probability-raising.md)'s measures, with credence written $\mathrm{cr}$:

$$d = \mathrm{cr}(H \mid E) - \mathrm{cr}(H), \qquad r = \ln\frac{\mathrm{cr}(H \mid E)}{\mathrm{cr}(H)}, \qquad l = \ln\frac{\mathrm{cr}(E \mid H)}{\mathrm{cr}(E \mid \neg H)},$$

where $H$ is a hypothesis, $\neg H$ its rival and $E$ the evidence. If the likelihood of a record $E$ on an Everettian theory is the chance that *some* successor makes it, it is 1 for every record on every Everettian rival, so $d = r = l = 0$. *In words:* no data could favour one such rival.

- **Greaves and Myrvold's answer.** Build the evidence relation from betting preferences, as Savage builds credence ([`decision-theory` 2.1](../decision-theory/lessons/02-01-savages-framework.md)). An agent unsure whether her world branches then updates with branch weights in the likelihood slot, and frequencies support Everett with Born weights as strongly as a chance theory with the same numbers.
- **A consequence** (2.4). Everett and Bohmian mechanics in [quantum equilibrium](#quantum-equilibrium) then have the same observational consequences: [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md)'s empirically equivalent theories. What follows is Boss 2(d)'s question.
- **Kent's reply** (2010): toy models in which branch weights exist but play no role in decision or confirmation.
- **The measure decides** (2.4 Example 1). Data discriminate between Born-weighted and counting Everett only once a measure fills the likelihood slot, and which measure belongs there is the [quantitative problem](#quantitative-problem).
- **Neighbour.** The some-successor likelihood of 1 has the shape of Sober's observation-selection objection in [`philosophy-of-religion` 3.2](../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md), where a likelihood of 1 on every hypothesis also cancels the inference.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Branch counting

**The rule that gives every branch after a measurement the same share, whatever its amplitude.** Indifference applied to branches. 2.4's idealization: measure a spin with Born weight $p = |\alpha|^2$ for up on $n$ fresh copies, each measurement splitting every branch into two. Then

$$N(k) = \binom{n}{k}, \qquad w(k) = \binom{n}{k}\,p^k(1-p)^{n-k},$$

where $N(k)$ counts the branches with $k$ ups among the $2^n$, and $w(k)$ is their total [Born weight](#born-weight). *In words:* counting gives every branch the share $2^{-n}$; weighting gives it the product of its squared amplitudes.

- **The counter's reason.** Each branch holds one of you, and every branch is equally real, so each gets the same share.
- **Against it: no partition.** Indifference is only as good as its partition ([`epistemology` 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md)), and decoherence fixes no exact number of branches ([emergent branches](#emergent-branches)): Wallace's reason for refusing to weight outcomes by count.
- **Against it: the axioms** (2.4 Example 2). Within an idealized model, counting violates [branching indifference](#branching-indifference) together with [diachronic consistency](#diachronic-consistency): a counter's value for a bet changes when a branch in which she gains nothing splits.
- **Where it concentrates.** By count, branches crowd near frequency one half whatever $p$ is; by weight, near $p$ ([quantitative problem](#quantitative-problem)).
- **Beside statistical mechanics.** Everett's Born weights face the same rival as the statistical-mechanical measure: a count ([5.6](lessons/05-06-probability-in-statistical-mechanics.md)).
- **Trap: the neutral default.** It is indifference over one partition, which is never neutral, and the partition is not physically defined (2.4 Watch out).
- **Left to you.** Boss 2(b) asks for the counts in a three-trial case; the card gives no values.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Born weight

**The squared amplitude of a branch, or the summed squared amplitudes of a set of branches, read as a measure over branches.** Measuring $\alpha|\text{up}\rangle + \beta|\text{down}\rangle$ ($|\alpha|^2 + |\beta|^2 = 1$) leaves two decohered branches with Born weights $w_{\text{up}} = |\alpha|^2$ and $w_{\text{down}} = |\beta|^2$; for repeated trials see the formula under [branch counting](#branch-counting).

- **What it is on many-worlds** (2.4 Watch out). A feature of the state, not by itself a frequency, a chance or a credence. Each answer argues it into one role: a decision weight ([Deutsch-Wallace theorem](#deutsch-wallace-theorem)), a self-locating credence ([self-locating uncertainty](#self-locating-uncertainty), [epistemic separability principle](#epistemic-separability-principle)), or a likelihood ([evidential problem](#evidential-problem)).
- **Frequencies.** Frequencies near the Born value fill most of the weight, not most of the branches.
- **Trap: weight is a fraction of branches.** The Born weight of a set of branches and the fraction of branches in it are different numbers except at equal weights.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Deutsch-Wallace theorem

**A representation theorem: an Everettian agent whose preferences over quantum acts obey certain richness and rationality axioms acts exactly as if maximizing expected utility with Born weights as probabilities.** David Deutsch, "Quantum Theory of Probability and Decisions" (1999), proposed reading probability off rational betting, as [`decision-theory` 2.2](../decision-theory/lessons/02-02-probability-from-preference.md) reads credence off preference; David Wallace (2003, 2007; "How to Prove the Born Rule", 2010; *The Emergent Multiverse*, 2012) made the assumptions explicit. In [`decision-theory` 1.4](../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md)'s schematic form:

$$\succeq_\psi \text{ satisfies the axioms} \iff \exists\, u:\; U \succeq_\psi V \Leftrightarrow \sum_r w_U(r)\,u(r) \ge \sum_r w_V(r)\,u(r),$$

where $\succeq_\psi$ is the agent's preference over acts (physical operations ending in rewards) available at quantum state $\psi$, $U$ and $V$ are acts, $r$ ranges over rewards, $w_U(r)$ is the total Born weight of the branches in which act $U$ yields reward $r$, and $u$ is a utility unique up to $au + c$ with $a > 0$ ([`decision-theory` 1.3](../decision-theory/lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md)).

- **Ten axioms** (Wallace, 2010). Four of richness: reward availability, branching availability, erasure, problem continuity. Six of rationality, which carry the argument: ordering, [diachronic consistency](#diachronic-consistency), macrostate indifference (not caring which microstate realizes an outcome), [branching indifference](#branching-indifference), state supervenience (preferences depend only on the physical state an act produces), solution continuity (tiny changes to acts do not flip preferences).
- **The core move** (2.4 Example 2, outline). Branching availability lets a successor split a branch into branches of equal amplitude, all with the same reward; branching indifference with diachronic consistency makes the agent indifferent to that split now; erasure with state supervenience makes equal-amplitude branches interchangeable, so they get equal weights.
- **Two readings.** Greaves (2004): the weights are a caring measure and no uncertainty is needed. Saunders (1998): one awaiting branching is uncertain which successor she will become ([incoherence problem](#incoherence-problem)).
- **Critics.** Albert's [fatness rule](#fatness-rule) (2010); Huw Price and Adrian Kent (both 2010) deny that the axioms are requirements of rationality; Emily Adlam and Jacob Barandes (preprint, 2026) argue that no route to the Born rule can succeed.
- **Where it is weakest** (2.4): the bridge from decision weight to probability. *Objection* (Price; Kent): the analogy with classical decision under uncertainty fails once every outcome occurs; you receive them all, so caring how goods are spread across successors, as Price's agent does who treats them as a just ruler treats subjects, is no error, and the theorem yields a caring measure, not a probability of anything. *Reply* (Wallace; Greaves; Saunders, "Chance in the Everett Interpretation", 2010): Born weights do everything single-world chance does; they guide action, by the theorem, and are estimated from frequencies, by Greaves and Myrvold; the step from weight to credence is derived, where the single-world [principal principle](#principal-principle) is postulated; and most of Price's concern fits into the utility function. *Concessions:* the Everettian, that "probability" names a role filled, not ignorance of which outcome will happen; the critic, that single-world chance also rests on a postulate linking it to credence.
- **Trap: it derives probability from quantum mechanics alone.** It is a representation theorem: agents who obey ten axioms act as if Born weights were probabilities, so its normative force is the axioms' (2.4 Watch out; [`decision-theory` 1.4](../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md)).

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Diachronic consistency

**If each of the agent's future selves will prefer $V_i$ to $V_i'$ in her own branch $i$, the agent now prefers the plan containing the $V_i$** ($V_i$, $V_i'$ acts available in branch $i$). One of Wallace's six rationality axioms (2010). *In words:* [`decision-theory` 1.4](../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md)'s dynamic consistency, branch by branch.

- **Against counting** (2.4 Example 2). With [branching indifference](#branching-indifference), it rules out caring now about a split your successor would not care about ([branch counting](#branch-counting)).
- **Against the fatness rule.** Wallace argues that Albert's [fatness rule](#fatness-rule) violates diachronic consistency, not branching indifference. The concrete case and what the reply concedes are 2.4 P3.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Branching indifference

**A rational agent does not care about branching as such: a measurement that splits her future into several macrostates, all with the same reward, leaves an act's value unchanged.** One of Wallace's rationality axioms (2010). *In words:* more copies, same payoff, same value.

- **Its work** (2.4 Example 2). With [diachronic consistency](#diachronic-consistency), it convicts the branch counter, whose value for a bet depends on whether a branch where she gains nothing splits ([branch counting](#branch-counting)).
- **Wallace's defence.** Decoherence fixes no branch number, and branching is continuous and uncontrollable, so no strategy sensitive to it can be carried out ([emergent branches](#emergent-branches)).
- **Kent's reply** (2010). In a theory with sharply defined branches, coherent strategies violate the axioms, so the axiom comes from physics, not from reason.
- **Where the account stops** (2.4). The derivation convicts the counter only if branching indifference is a requirement of rationality, and Example 2 cannot settle that, since it idealizes a definite count.
- **Trap: the fatness rule violates it.** The [fatness rule](#fatness-rule) ignores branch number, so it does not.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Fatness rule

**Albert's half-joking rival to the Born rule: weight each branch by its Born weight times your body mass in that branch, renormalize, and maximize expected utility with those weights.** David Albert (2010), as Wallace reports it; offered against the claim that the [Deutsch-Wallace theorem](#deutsch-wallace-theorem) shows the Born rule to be rationally required.

- **Wallace's reply.** It breaks [diachronic consistency](#diachronic-consistency).
- **Trap: it violates branching indifference.** It does not depend on branch number at all, so the vagueness of branching cannot touch it ([branching indifference](#branching-indifference)).
- **Left to you.** The steelman, the concrete violation and the concession are 2.4 P3.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Self-locating uncertainty

**Ignorance of where you are, which branch you are in, as opposed to ignorance of what happens: on many-worlds it exists after decoherence and before you look.** Lev Vaidman, "On Schizophrenic Experiences of the Neutron" (1998).

- **The sleeping pill.** You are carried, asleep, to room A or room B according to the outcome, and asked on waking, eyes closed, which room you are in.
- **The number.** Vaidman postulates it. Charles Sebens and Sean Carroll (2018) derive the Born rule as the unique rational credence from the [epistemic separability principle](#epistemic-separability-principle).
- **Objections.** Albert: the uncertainty arrives "too late", after the bets it should guide. Kent (2015) and Kelvin McQueen with Vaidman (2019): an observer not yet branched herself has no branch to be unsure of.
- **Not Saunders's uncertainty.** Saunders's subjective uncertainty (1998) is uncertainty *before* branching about which successor one will become ([incoherence problem](#incoherence-problem)).
- **Trap: uncertainty about the outcome before the measurement.** It exists only between decoherence and looking (2.4 Watch out).

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Epistemic separability principle

**Changes purely to the environment do not change the credences you should assign to measurement outcomes in a local subsystem.** Charles Sebens and Sean Carroll, "Self-Locating Uncertainty and the Origin of Probability in Everettian Quantum Mechanics" (2018), paraphrased.

- **What it yields.** From it they derive the Born rule as the unique rational credence during [self-locating uncertainty](#self-locating-uncertainty), an answer to the [quantitative problem](#quantitative-problem). Equal credence per branch, they argue, is a temptation to resist.
- **The objection** (Kent, 2015; McQueen and Vaidman, 2019). The question it answers needs an observer who has already branched; before that she has no branch to be unsure of.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

**Module 3: Bell's theorem and nonlocality**

### EPR argument

**Einstein, Podolsky and Rosen argued that quantum mechanics is incomplete: a perfect correlation lets you predict a distant value with certainty without touching it, so the value was there already, and the quantum state does not contain it.** "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?" (*Physical Review*, 1935), paraphrased. Einstein later recast it as a dilemma: quantum mechanics is incomplete or nonlocal.

- **Its ingredients** (3.1). *Completeness*, a necessary condition: a complete theory contains a counterpart for each element of physical reality. The [criterion of reality](#criterion-of-reality), a sufficient condition. *Separability and locality*, assumed without comment on p. 779: systems far apart each have their own real state, and a measurement on one makes no real change in the other. Then the quantum fact that no state assigns definite values to both of two incompatible quantities.
- **Two set-ups.** EPR's own: two particles that have interacted so that their total momentum along $x$ is zero and their $x$-positions are correlated. David Bohm's spin version (*Quantum Theory*, 1951, §§22.15–22.18) uses the singlet of [`quantum-mechanics` 5.2](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md), which gives opposite results whenever both sides measure along one axis; 3.1 Example 1 runs the argument on it with $\sigma_z$ and $\sigma_x$ in place of position and momentum.
- **Trap: the free-choice shortcut.** A popular version, which Fine's SEP entry on the EPR argument traces to Bohr's 1935 summary, infers that both quantities are real because the experimenter may choose to measure either. The criterion yields the reality only of the quantity measured in a given run, and the two cannot be measured together; the step to "both at once" goes through separability and locality.
- **Bohr's reply** (1935, under the same title): the criterion is ambiguous about "without in any way disturbing". On Fine's reading in the SEP entry, Bohr concedes that there is no "mechanical disturbance" of the distant system, but holds that the measurement influences the conditions that define what predictions can be made about it, and counts those conditions as part of physical reality (3.1 P3).
- **What Bell did with it.** Bell (1964) granted EPR their missing values and asked what they predict when the two sides measure *different* quantities. Inside his framework, perfect anticorrelation plus factorizability forces pre-set values ([outcome determinism](#outcome-determinism)). And if orthodox quantum mechanics is taken at its word, with the singlet as the complete state, it already violates [local causality](#local-causality), so EPR's dilemma becomes "nonlocal in Bell's sense either way", given single outcomes and measurement independence (3.1 Example 2).
- **Trap: EPR did not conclude that quantum mechanics is false, or that there is action at a distance.** They concluded incompleteness, and assumed locality.

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md)

### Criterion of reality

**EPR's sufficient condition for something real: if, without in any way disturbing a system, you can predict a quantity's value with certainty, an element of physical reality corresponds to that quantity.** EPR 1935, p. 777, paraphrased; "without in any way disturbing" is their phrase. *In words:* certainty obtained at a distance reveals something already there.

- **Sufficient, not necessary.** It is not a definition of reality. The necessary condition in EPR is the completeness condition, which is about theories: a complete theory has a counterpart for every element of reality.
- **It is applied run by run.** In any one run it certifies only the quantity actually predicted ([the EPR argument](#epr-argument), free-choice trap).
- **Bohr's target.** His 1935 reply calls it ambiguous about "without in any way disturbing" (see [the EPR argument](#epr-argument)).
- **QBism's denial** ([1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)): probability 1 is the agent's certainty, not EPR's element of reality (Caves, Fuchs and Schack, 2007), so a certain prediction about a distant system licenses nothing real there ([QBism](#qbism)).

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md)

### Hidden variables

**Variables added to the quantum state to complete it in EPR's sense. In Bell's framework they are one way, not the only way, of filling in the complete state $\lambda$.** 3.1 lets $\lambda$ be the complete state of the pair at the source: whatever the theory says fixes the probabilities of later events, either the quantum state alone or the state plus hidden variables. Its distribution is $p(\lambda)$; the course keeps $\rho$ for density matrices.

- **Not a premise.** The mature theorem is stated for any complete state. Orthodox quantum mechanics, taking the singlet itself as $\lambda$, already violates local causality, and the theorem shows that no added variables restore it (3.1 Example 2).
- **Trap: "Bell refuted hidden variables."** The 2022 Nobel press release puts it roughly that way. [Bohmian mechanics](#bohmian-mechanics) is a hidden-variable theory that reproduces the quantum statistics ([2.1](lessons/02-01-bohmian-mechanics.md)). Bell's theorem constrains hidden variables that are *locally causal*; the [Kochen-Specker theorem](#kochen-specker-theorem) constrains ones that are *noncontextual*.
- **Where the question came from.** Bohm's nonlocal hidden-variable theory prompted Bell to ask whether locality could be had (3.1 Connections).

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md)

### Single outcomes

**Each run of a Bell experiment ends with exactly one value of Alice's outcome $A$ and one of Bob's outcome $B$** ($A, B \in \{+1, -1\}$). Premise P1 of 3.1's statement of Bell's theorem.

- **A buried premise.** The sibling derivations in [`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md) and [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) never state it. 3.1 makes it explicit: it became visible as a premise once an interpretation denied it.
- **From the measurement problem.** It is claim (C), determinate outcomes, of the measurement problem ([Maudlin's trilemma](#maudlins-trilemma), [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md)), returning as a premise of Bell's theorem.
- **Trap: too obvious to be a premise.** Leaving it in the background hides an exit: a violated inequality refutes the whole conjunction of premises, this one included (3.2's menu, [Jarrett decomposition](#jarrett-decomposition)).
- **Left to you.** Which interpretations deny it, and what they posit instead, is mapped in 3.2 and asked by Boss 3(c); the card does not map it. Where in the derivation it is used is Boss 3(a)'s question.

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Local causality

**Bell's locality condition: once you fully specify what happens in an event's past light cone, further information about events at spacelike separation does not change its probability.** John Bell, "The Theory of Local Beables" (1976) and "La nouvelle cuisine" (1990). In the Bell experiment it yields [factorizability](#factorizability). It is relativistic from the start, since it conditions on the past light cone.

- **Two formulations.** 1976: a full specification of the [local beables](#local-beables) in the *overlap* of the two events' past light cones screens off their correlation. 1990: an event's probability is unaltered by beables at spacelike separation, given a full specification of a region of its own past light cone that *shields* it from the other event's past (3.1 Example 2).
- **What it joins** (SEP's analysis, 3.1). Two ideas: causes lie in the past light cone, and Reichenbach's common-cause principle, that correlated events not causally linked are screened off by a common cause ([`philosophy-of-science` 4.2](../philosophy-of-science/lessons/04-02-causal-explanation.md)).
- **The strongest objection** (Bas van Fraassen, "The Charybdis of Realism", 1982; Arthur Fine, "Do Correlations Need to Be Explained?", 1989). Relativity licenses only the first idea; the second is a demand for explanation, so a violation shows that some correlations lack a common cause, not that anything acts at a distance.
- **Bell's reply** ("Bertlmann's Socks and the Nature of Reality", 1981). Science treats correlations as calling for explanation, and a theory that leaves distant correlations brute has declined the question, not shown itself local. The critic concedes that nothing local explains the correlations; Bell's side concedes that factorizability says more than the light cone, and Bell himself warned that sharpening his intuitive principle into mathematics deserved suspicion.
- **Two theorems.** Howard Wiseman (2014) reads Bell's 1964 theorem as assuming locality and determinism, and the 1976 one as assuming local causality alone ([local realism](#local-realism)).
- **Trap: it needs a complete state.** Conditioned on a description that leaves something out, a perfectly local set-up can fail factorizability (3.1 Example 2's coin; see [factorizability](#factorizability)).

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Local beables

**What a theory says physically exists in a region of spacetime.** Bell's term. [Local causality](#local-causality) is stated in terms of them, so it presupposes that a theory names them (3.1 Example 2).

- **Theories that name them.** Bohm's particle positions ([2.1](lessons/02-01-bohmian-mechanics.md)) and GRW's flashes ([2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [flash ontology](#flash-ontology)) qualify.
- **Theories that may not.** On [QBism](#qbism) ([1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)) the quantum state is an agent's degrees of belief, and the Copenhagen physicist declines to say what happens between preparation and record, so a complete specification of the past light cone has no agreed content.
- **The standoff.** Bell's side: a theory silent about beables cannot claim to be local either. The QBist: the theorem's $\lambda$ is not part of their theory. Until the beables are named, local causality gives no verdict (3.1, "Where it strains").
- **Why completeness matters.** Factorizability tests locality only when conditioned on a full specification of the beables; that is why Bell (1990) demands one.

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md)

### Factorizability

**Given the complete state, the probability of a joint result is the product of two local probabilities, each depending only on its own side's setting.**

$$P(A,B\mid a,b,\lambda) = P(A\mid a,\lambda)\,P(B\mid b,\lambda)$$

Here $A, B \in \{+1, -1\}$ are Alice's and Bob's outcomes, $a$ and $b$ their settings, and $\lambda$ the complete state at the source. *In words:* once $\lambda$ is fixed, Bob's setting and result tell you nothing more about Alice's result, and conversely. It is what [local causality](#local-causality) yields in the Bell experiment (3.1, P2).

- **Screening off.** It is [`philosophy-of-science` 4.2](../philosophy-of-science/lessons/04-02-causal-explanation.md)'s screening off applied to two distant outcomes, with $\lambda$ as the common cause. Bell's theorem says no such cause screens off the quantum correlations.
- **Only for a complete $\lambda$** (3.1 Example 2). A source flips a fair coin and tells both particles to answer $+1$ on heads and $-1$ on tails, whatever the settings: nothing nonlocal happens. Yet conditional on a description that omits the coin, $P(+,+) = \tfrac12$ while the product of the marginals is $\tfrac14$, and factorizability fails.
- **Two halves.** It holds exactly when [parameter independence](#parameter-independence) and [outcome independence](#outcome-independence) both do ([Jarrett decomposition](#jarrett-decomposition), 3.2).
- **Trap: it is not [no-signalling](#no-signalling).** No-signalling constrains what you can observe, marginals averaged over $\lambda$; factorizability constrains probabilities given $\lambda$. Quantum mechanics violates the second and respects the first.
- **It says more than the light cone.** Its content includes the common-cause demand, which is where van Fraassen and Fine press ([local causality](#local-causality)).
- **Starting point of 3.3.** A theory with single outcomes and measurement independence that matches the experiments violates it; 3.3 asks what that does to relativity ([Maudlin's taxonomy](#maudlins-taxonomy)).

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md), [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Measurement independence

**The population of complete states is the same whichever settings get chosen:** $p(\lambda\mid a,b) = p(\lambda)$, where $p(\lambda)$ is the distribution of complete states at the source and $a, b$ are Alice's and Bob's settings. Premise P3 of 3.1. Its experimental face is the freedom-of-choice loophole ([loopholes](#loopholes)).

- **Where it enters** (3.1 Step 2). The four correlations come from four different sets of runs; writing all four with one $p(\lambda)$ *is* measurement independence. With $p(\lambda\mid a,b)$ in its place the sum no longer regroups into a single average over $\lambda$, and the bound is gone. All three sibling proofs take this step silently.
- **History.** Bell made it explicit after Shimony, Horne and Clauser's 1976 comment on his "The Theory of Local Beables"; his reply is "Free Variables and Local Causality" (1977).
- **Trap: it is not free will.** It needs only that whatever fixes the settings (a random-number generator, a keystroke, starlight) be statistically independent of $\lambda$; Bell (1977) held that a deterministic randomizer is free enough. Freedom in the sense of [`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md) is a different question.
- **Who denies it.** [Superdeterminism](#superdeterminism), and [retrocausal models](#retrocausality) on one bookkeeping (3.2).
- **Pushed back, never closed.** No experiment can close it; cosmic and human-choice Bell tests only push any setting-source correlation further into the past. It is the premise under most pressure in 3.2's "Where the argument is weakest", where the case against denying it is methodological.

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md), [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### CHSH inequality

**For any theory with single outcomes, local causality and measurement independence, a fixed combination of four correlations stays between $-2$ and $2$.** Clauser, Horne, Shimony and Holt (1969). The course's convention is [`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md)'s:

$$S = E(a,b) - E(a,b') + E(a',b) + E(a',b'), \qquad |S| \le 2,$$

where Alice chooses setting $a$ or $a'$, Bob $b$ or $b'$, outcomes are $\pm1$, and $E(a,b) = \sum_{A,B} AB\,P(A,B\mid a,b)$ is the correlation at settings $a, b$.

- **Sign convention.** [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) subtracts a different term; reading its inputs $x = 0, 1$ as $a', a$ and $y = 0, 1$ as $b, b'$ turns its $S$ into this one. State the convention before computing.
- **The deterministic step** (3.1 Step 1). If each $\lambda$ fixes all four outcomes, $S_\lambda = A(B - B') + A'(B + B') = \pm 2$, because one bracket is $0$ and the other $\pm 2$. Of the 16 deterministic strategies, 8 give $+2$ and 8 give $-2$ ([`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) Example 1 enumerates them as game strategies). Mixtures with one $p(\lambda)$ stay within the bound ([measurement independence](#measurement-independence)), and chancy outcomes add nothing ([outcome determinism](#outcome-determinism)).
- **Premises and non-premises.** Premises: [single outcomes](#single-outcomes), [local causality](#local-causality), [measurement independence](#measurement-independence). Not premises: outcome determinism ("realism" in `quantum-computing` 2.6's sense) and "hidden variables" (3.1).
- **The whole family.** "The Bell inequalities" of [Fine's theorem](#fines-theorem) put the minus sign in each of the four places in turn; which pair carries it is a labelling choice.
- **Settled physics.** Quantum mechanics reaches $2\sqrt2$ ([Tsirelson bound](#tsirelson-bound)) and experiment agrees. In 2015 a Delft team (Hensen et al.) measured electron spins 1.3 km apart and, over 245 trials, found $S = 2.42 \pm 0.20$.

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Outcome determinism

**The complete state fixes every outcome: given $\lambda$, each result has probability 0 or 1,** $P(A\mid a,b,\lambda) \in \{0,1\}$. It is `quantum-computing` 2.6's "realism", and the "realism" in Mermin's (1980) sense of [local realism](#local-realism).

- **Not a premise of the mature theorem.** 3.1 uses it in Step 1 and discharges it in Step 3: a factorizable model with chancy outcomes has a deterministic twin with the same statistics (Fine 1982, [Fine's theorem](#fines-theorem)).
- **Derived in 1964.** Bell's first paper derived it, EPR-style, from locality plus perfect anticorrelation, and Patrick Suppes and Mario Zanotti (1976) proved in general that factorizability plus perfect correlation forces it (3.1 Example 1).
- **It implies outcome independence** (3.2 T2): if $\lambda$ fixes Alice's result, Bob's result has nothing left to tell her. So a deterministic theory that violates factorizability must violate [parameter independence](#parameter-independence).
- **Trap: "drop realism, keep locality".** Parameter and outcome independence already give the bound without determinism, so an indeterministic theory that keeps parameter independence must drop outcome independence. Giving up determinism does not keep locality in Bell's sense; operationalists keep a different locality, defined by what agents can do (3.2).

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Fine's theorem

**For the two-setting, two-outcome Bell experiment, a deterministic model, a factorizable chancy model, a single joint distribution over all four quantities, and the full set of CHSH inequalities all stand or fall together.** Arthur Fine, "Hidden Variables, Joint Probability, and the Bell Inequalities" (1982). Given setting-independent marginals, these are equivalent (3.1):

1. a deterministic hidden-variable model reproduces the statistics;
2. a factorizable stochastic model does;
3. one joint distribution over Alice's $A, A'$ and Bob's $B, B'$ reproduces the four observed pair distributions;
4. the Bell inequalities hold: the CHSH combination with the minus sign in each of the four places, each at most 2 in absolute value.

- **Trap: one placement is not enough.** The course's single $S$ is one of the four. Data can pass it and fail another placement, so test all four (3.3 Flashback).
- **Presuppositions.** Setting-independent marginals and, in the models, a setting-independent distribution of $\lambda$ ([measurement independence](#measurement-independence)).
- **What it leaves open.** A violation shows that no joint distribution exists, so no deterministic or factorizable model with setting-independent $p(\lambda)$ fits; it does not say which of single outcomes, local causality and measurement independence to give up.
- **The joint-distribution clause** is [`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md)'s "joint distributions that don't exist". It is a fact about probability: no single sample space holds all four quantities.

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Tsirelson bound

**The largest CHSH value any quantum state and measurements can give: $|S| \le 2\sqrt2 \approx 2.83$.** Boris Cirel'son (Tsirelson), 1980. The singlet, with correlation $E = -\cos\theta_{ab}$ where $\theta_{ab}$ is the angle between Alice's and Bob's axes, reaches it at [`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md)'s angles.

- **Settled physics.** Quantum correlations can exceed the local bound $2$ but never $2\sqrt2$, and the experiments agree with quantum mechanics ([CHSH inequality](#chsh-inequality)).
- **A ceiling, not a premise.** Models that break $2\sqrt2$ can be written down; no quantum system reproduces their correlations.

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md)

### Parameter independence

**Given the complete state, the chances at one wing do not depend on the setting chosen at the other.**

$$P(A\mid a,b,\lambda) = P(A\mid a,b',\lambda),$$

and likewise for Bob's outcome $B$ under a change of Alice's setting from $a$ to $a'$; $\lambda$ is the complete state. PI for short: the name is Abner Shimony's; Jon Jarrett (1984) called it "locality". It is one half of [factorizability](#factorizability) ([Jarrett decomposition](#jarrett-decomposition)).

- **Trap: PI is not [no-signalling](#no-signalling).** PI concerns chances at each $\lambda$; no-signalling concerns marginals averaged over $\lambda$, which is all anyone observes. Given [measurement independence](#measurement-independence), PI implies no-signalling, not conversely. A theory can violate PI and still not signal, if nobody can know or control $\lambda$ more finely than the quantum statistics allow (3.2, 3.3 D1).
- **Deterministic theories.** Since [outcome determinism](#outcome-determinism) implies outcome independence (3.2 T2), a deterministic theory that violates factorizability must violate PI.
- **Relative to the complete state.** The same statistics can respect PI on one theory's complete state and violate it on another's, so experiment alone does not say which half of factorizability fails (3.2 Example 1, P2).
- **And relativity** (3.3). A dependence of one wing's chances on the other's *setting* is directed, so a theory with one needs a fact about which event comes first, which is what a [preferred foliation](#preferred-foliation) supplies.
- **Left to you.** Which interpretations violate PI is part of 3.2's "Who drops what", the map Boss 3(c) asks for; the card does not give it.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md), [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Outcome independence

**Given the complete state and both settings, learning the far outcome tells you nothing more about the near one.**

$$P(A,B\mid a,b,\lambda) = P(A\mid a,b,\lambda)\,P(B\mid a,b,\lambda),$$

with $A, B$ the outcomes, $a, b$ the settings and $\lambda$ the complete state. OI for short: Shimony's name; Jarrett (1984) called it "completeness". It is the other half of [factorizability](#factorizability).

- **Deterministic theories satisfy it trivially** (3.2 T2): for the certain value of $A$ the joint equals Bob's marginal, and for the other value both sides are zero.
- **A violation cannot signal.** What shifts one wing's chances is the far *outcome*, which nobody chooses (3.2, 3.3 D1).
- **A violation is symmetric.** Conditioning either way gives the same dependence: a correlation built into a joint law rather than an action, which Shimony called "passion at a distance" ([Bell correlations and causation](#bell-correlations-and-causation)). Such a law can be written without any foliation (3.3).
- **Check it at the complete state.** A correlation that vanishes once $\lambda$ is fully specified is a common cause screening off its effects; only one that survives counts against OI. Averaging over a coarser description can manufacture an apparent OI failure (3.2 P2).
- **Left to you.** Which interpretations violate OI is part of the map Boss 3(c) asks for; 3.2 Example 1 checks PI and OI for orthodox quantum mechanics on the singlet, and Boss 3(b) asks for that check at given angles.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md), [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Jarrett decomposition

**Factorizability is exactly parameter independence plus outcome independence: break it, and you have broken one or both.** Jon Jarrett (*Noûs*, 1984), who called the conditions "locality" and "completeness"; Clauser and Horne had parsed the condition this way in 1974, and the names PI and OI are Abner Shimony's. 3.2's T1.

- **Proof outline.** Summing factorizability over Bob's outcome gives Alice's marginal free of Bob's setting, which is [parameter independence](#parameter-independence); factorizability then says the joint is the product of these marginals, which is [outcome independence](#outcome-independence). Conversely, OI writes the joint as a product of marginals that may mention both settings, and PI deletes the far setting from each.
- **Companion result (T2).** [Outcome determinism](#outcome-determinism) implies OI, so a deterministic theory that violates factorizability violates PI.
- **The menu** (3.2). Splitting factorizability gives four suspects: PI, OI, [measurement independence](#measurement-independence), [single outcomes](#single-outcomes). The observed violation, with the locality and detection [loopholes](#loopholes) closed, shows that at least one is false. An experiment refutes a conjunction, not a particular conjunct: Duhem's point ([`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md)).
- **The split is theory-relative.** Which conjunct fails is fixed by what a theory counts as the complete state, not by the data (3.2 Example 1 and P2).
- **Left to you.** 3.2's "Who drops what" places each interpretation on the menu; Boss 3(c) asks for that map for Bohm, GRW and many-worlds, so the card does not give it.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Loopholes

**Features of how a particular Bell test was run that would leave local models open, as distinct from premises of the theorem.** (3.2)

- **Locality loophole.** Each lab's setting choice and outcome must be spacelike separated from the other's, so that no light-speed signal could carry one lab's setting to the other before its outcome was recorded (3.3).
- **Detection loophole.** If too few pairs are detected, the detected sample may not be representative.
- **Closed together in 2015.** Hensen et al. (Delft), Giustina et al. and Shalm et al. closed both in the same experiments; the 2022 Nobel Prize went to Aspect, Clauser and Zeilinger for the programme. Cited as physics in [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) and [`photonics-quantum-optics` 4.4](../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md).
- **Freedom of choice: pushed back, never closed.** This is [measurement independence](#measurement-independence). Cosmic Bell tests drew settings from Milky Way starlight (2017) and quasar light (2018), placing any setting-source correlation at least 7.8 billion years in the past, and the BIG Bell Test (2018) used choices from about 100,000 people.
- **Trap: exits are not loopholes.** [Superdeterminism](#superdeterminism), [retrocausality](#retrocausality) and many-worlds are not experimental flaws. The first two deny measurement independence, which no experiment can close; many-worlds accepts every prediction and disputes the theorem's framing.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Local realism

**A label for what Bell tests refute, used in different senses by different authors; the quarrel over it is a quarrel over which premise the label points at.** (3.2)

- **Clauser and Shimony (1978).** A local realistic theory is one satisfying [factorizability](#factorizability), chancy theories included.
- **Mermin (1980).** Local realism is [parameter independence](#parameter-independence) plus [outcome determinism](#outcome-determinism).
- **"True but misleading."** The SEP entry "Bell's Theorem" (§3.3) so describes the slogan in Mermin's sense, since by the [Jarrett decomposition](#jarrett-decomposition) PI and OI already yield the bound without determinism.
- **No realism premise.** Tim Maudlin ("What Bell Did", 2014) and Travis Norsen ("Against 'Realism'", 2007) argue that no sense of "realism" is a premise of the theorem beyond what all physics presupposes, so what fails is locality.
- **Two theorems.** Howard Wiseman ("The Two Bell's Theorems of John Bell", 2014): Bell's 1964 theorem assumes locality and determinism, his 1976 one [local causality](#local-causality) alone. Realists give up local causality; operationalists keep a locality defined by what agents can do and give up determinism.
- **In this library.** [`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md) ("nature is genuinely nonlocal") speaks for the first camp; [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) and [`photonics-quantum-optics` 4.4](../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md), which keep locality as no-signalling and drop realism, for the second. The physics in all three is right.
- **Trap: conflating local realism with locality,** or assuming the theorem itself chooses which premise goes. It does not.
- **Left to you.** Which summary of the Bell results is better, and which sense of "realism" a given slogan relies on, is Boss 3(d)'s essay; the card takes no side.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Superdeterminism

**The view that a common past fixes both the measurement settings and the complete state $\lambda$, so [measurement independence](#measurement-independence) fails.** Bell named it in an interview (*The Ghost in the Atom*, Davies and Brown, 1986); Gerard 't Hooft, and Sabine Hossenfelder and Tim Palmer ("Rethinking Superdeterminism", 2020), defend it.

- **The objection.** The [conspiracy objection](#conspiracy-objection) (Shimony, Horne and Clauser, 1976).
- **The reply** (Hossenfelder and Palmer). "Conspiratorial" means fine-tuned relative to some measure, and a theory with a more restricted state space can make the needed correlations typical; on their view the hypothesis may be testable.
- **The weakest-premise exchange** (3.2). The superdeterminist: measurement independence is a contingent claim about initial conditions, learned from classical and linear systems, and nothing guarantees it at the fundamental level. The reply: the same posit licenses every randomized trial, so denying it to escape one result undercuts the evidence for all. Concessions: existing superdeterministic models are still in their infancy; no experiment can close this loophole, so the case against superdeterminism is methodological.
- **Experiments push it back, not out.** Cosmic and human-choice Bell tests ([loopholes](#loopholes)) move any correlation further into the past; superdeterminism places it in the initial conditions, which predicts those results too.
- **Trap: it is not a thesis about free will.** It concerns statistical independence; freedom is [`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md)'s question.
- **Neighbour.** Hossenfelder holds that [retrocausality](#retrocausality) is superdeterminism under another name.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Conspiracy objection

**The charge that positing correlations between settings and the complete state, with no specific mechanism, would abandon experimental science, since every randomized experiment assumes such independence.** Shimony, Horne and Clauser (1976), in their comment on Bell's "The Theory of Local Beables". Their aim was to make the assumption explicit, not to reject Bell's conclusion.

- **Bell's answer** ("Free Variables and Local Causality", 1977): a deterministic randomizer is free enough; the settings need only be statistically independent of $\lambda$.
- **Hossenfelder and Palmer's reconstruction** (2020). The charge is fine-tuning relative to a measure, and a theory whose state space makes the required correlations typical answers it ([superdeterminism](#superdeterminism)).
- **Two versions.** Shimony, Horne and Clauser's charge concerns the evidential standing of experiment itself; Hossenfelder and Palmer's reconstruction concerns fine-tuning relative to a measure. Whether the charge is a scientific or a philosophical objection is 3.2 P3's question.
- **Trap: the cosmic Bell tests did not settle it.** They push the correlation back in time; superdeterminism places it in the initial conditions.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Retrocausality

**Models in which a later measurement setting influences the earlier state of the pair at the source.** Huw Price (*Time's Arrow and Archimedes' Point*, 1996); Ken Wharton and Nathan Argaman (*Reviews of Modern Physics*, 2020), who call such models "locally mediated": every link runs along timelike paths and is Lorentz covariant.

- **Two bookkeepings** (3.2 Example 2). Take $\lambda$ to be the state actually present at the source, the imprint of Bob's later setting included: [measurement independence](#measurement-independence) fails, and PI and OI can hold. Take $\lambda$ to be the state as earlier causes alone fix it: Alice's chances depend on Bob's setting through an influence $\lambda$ leaves out, and [parameter independence](#parameter-independence) fails too. The SEP Bell entry files it both ways (§8.1.1 and §8.1.3).
- **Two senses of "local".** Defenders who read causation in interventionist, perspectival terms (Price's line) call such a model nonlocal only in that spacelike events depend on each other, and local in another sense: continuous action along timelike paths.
- **Hossenfelder's charge.** A cause running backward in time is meaningless, so such a model is [superdeterminism](#superdeterminism) under another name.
- **What is disputed.** Nobody disputes a prediction; the dispute is over what "cause" and "local" mean, the question of [`metaphysics` 4.2](../metaphysics/lessons/04-02-counterfactual-causation.md).

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Kochen-Specker theorem

**For one system with three or more levels, no assignment of definite values to all observables can be independent of which compatible observables are measured alongside.** John Bell (1966); Simon Kochen and Ernst Specker (1967). Hidden-variable theories must therefore be [contextual](#contextuality).

- **Trap: it is not Bell's theorem again.** It concerns one system, needs no locality premise, and rules out only noncontextual value assignments.
- **What it constrains.** Simultaneous definite values, the "realism" of the operational reading ([local realism](#local-realism)).
- **How Bohm escapes it** ([2.1](lessons/02-01-bohmian-mechanics.md)). Only positions have values; a spin result is a joint product of particle and apparatus (David Albert's reversed-polarity Stern–Gerlach example), so the theory is contextual, as the theorem requires.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### No-signalling

**Alice's own outcome statistics do not depend on Bob's choice of setting, and vice versa: the correlation shows only when the two logs are compared.**

$$\sum_B P(A,B\mid a,b) = \sum_B P(A,B\mid a,b') \quad \text{for all } A, a, b, b',$$

and likewise with the roles swapped; $A, B$ are the outcomes and $a, b, b'$ settings. A theorem of quantum mechanics for local operations (Eberhard 1978; Ghirardi, Rimini and Weber 1980; Page 1982), proved in [`quantum-computing` 2.2](../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) (its No-signaling box and P3). Settled physics.

- **Field version.** Microcausality ([`qft` 2.5](../qft/lessons/02-05-causality-microcausality.md)). Sorkin's "impossible measurements" (1993) show that microcausality alone does not secure no-signalling once the textbook update rule is applied to measurements.
- **No-cloning closes the obvious trick** ([`quantum-computing` 2.3](../quantum-computing/lessons/02-03-the-no-cloning-theorem.md)): a copier would let Bob read Alice's basis choice.
- **Weaker than PI.** Given [measurement independence](#measurement-independence), [parameter independence](#parameter-independence) implies no-signalling, not conversely. A theory can violate PI without signalling if nobody can prepare the complete state more finely than the quantum statistics allow, and can violate [outcome independence](#outcome-independence) without signalling because nobody chooses her outcome (3.3 D1).
- **Trap: it is not [factorizability](#factorizability).** No-signalling constrains what you can observe, marginals averaged over $\lambda$; factorizability constrains probabilities given $\lambda$. Quantum mechanics violates the second and respects the first (3.1).
- **Trap: it is not all relativity asks.** It answers question (ii) of [Maudlin's taxonomy](#maudlins-taxonomy). Calling quantum mechanics local because it cannot signal, as [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) does ("respects locality exactly"), equates locality with (ii): Bohmian mechanics forbids signalling and still needs a [preferred foliation](#preferred-foliation) (3.3).
- **Collapse without signals.** GRW is nonlinear on states but linear on the density matrix, which is what no-signalling needs. Gisin (1989) showed that generic nonlinear modifications of quantum mechanics would signal; collapse models sit in the narrow stochastic class that does not (3.3, against a reading of `quantum-computing` 2.3's "linearity protects relativity").
- **Left to you.** What no-signalling does and does not show about compatibility with relativity is a clause of Boss 3(d)'s essay.

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Frame-dependent order

**For two spacelike-separated events, which comes first depends on the inertial frame: some legitimate frame puts either one first.** 3.3's D2, from [`relativity` 1.4](../relativity/lessons/01-04-spacetime-interval-causality.md), whose P3 derives it. Put Alice's measurement at $(t, x) = (0, 0)$ and Bob's at $(\Delta t, \Delta x)$ with $\Delta x > c\,\Delta t > 0$. A boost at speed $v$ along $+x$ gives $\Delta t' = \gamma(\Delta t - v\,\Delta x/c^2)$, with $\gamma = 1/\sqrt{1 - v^2/c^2}$ and $c$ the speed of light, so

$$\Delta t' < 0 \iff v > v_0 = \frac{c^2\,\Delta t}{\Delta x}, \qquad v_0 < c.$$

- **Spacelike pairs only.** Timelike pairs keep their order in every frame.
- **Whose collapse?** (3.3 Example 1). Run the textbook collapse on the singlet in two frames that disagree about order: each story has a different measurement collapse the other's state, and the joint statistics are identical. Nothing measurable records which, so "the state changes instantly" is not yet a relativistic law.
- **The before-before test.** Stefanov, Gisin, Suarez and Zbinden (2002) set the analyzers in relative motion so that each measured first in its own rest frame, against Antoine Suarez's "multisimultaneity" model, which predicted that the correlations would then vanish. They did not (3.3 P1).
- **Where it bites.** A nonlocal dependence that is a process "at a time" needs a [preferred foliation](#preferred-foliation); collapse theories answer with [relativistic collapse](#relativistic-collapse). Whether distant simultaneity is a fact at all is [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)'s question ([conventionality of simultaneity](#conventionality-of-simultaneity)).

*Lessons:* [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Maudlin's taxonomy

**"Is quantum nonlocality compatible with relativity?" is five questions, and a theory can pass some and fail others.** Tim Maudlin, *Quantum Non-Locality and Relativity* (1994; 3rd ed. 2011). Relativity might be read as forbidding:

| | Relativity might forbid |
|---|---|
| (i) | matter or energy carried faster than light |
| (ii) | superluminal signals |
| (iii) | superluminal causal influence |
| (iv) | superluminal information transfer |
| (v) | laws that need spacetime structure beyond the light cones, such as a preferred frame |

(v) is Maudlin's own test (1996) of whether a theory is genuinely relativistic.

- **The argument it frames** (3.3). A theory with single outcomes and measurement independence that matches experiment violates [factorizability](#factorizability); so, given $\lambda$, something at one wing makes a difference at the other; "at a time" would pick out a spacelike hypersurface, and the light cones pick out none ([frame-dependent order](#frame-dependent-order)). So: add a preferred foliation and fail (v), make the dependence no process along any hypersurface, or take an exit from Bell's premises.
- **Where two theories land** (3.3 Example 2). Bohmian mechanics with a background foliation fails (v) and flash GRW passes it; both pass (ii). Whether either's nonlocal dependence counts under (iii) is the open question of [Bell correlations and causation](#bell-correlations-and-causation).
- **Many-worlds** (3.3). Unitary evolution never changes a distant subsystem's reduced state; what remains is that the global state is not fixed by local ones ([separability](#separability), [6.2](lessons/06-02-gauge-as-surplus-structure.md)). Deutsch and Hayden (2000) offered a fully local account of the information flow; Wallace and Timpson (2007) questioned it.
- **Trap: "compatible with relativity" is one question.** It is five, and no-signalling answers only (ii) ([no-signalling](#no-signalling)).
- **Trap: Lorentz-invariant predictions settle (v).** Bohm's equilibrium predictions are exactly quantum mechanics', while its laws need a foliation no experiment can find.

*Lessons:* [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Peaceful coexistence

**Abner Shimony's phrase (from 1978) for the claim that quantum nonlocality and special relativity can live together.** Its meaning shifted. At first it rested on reading outcomes as transitions from potentiality to actuality; in later papers it came to mean simply that the correlations cannot be used to signal.

- **Shimony's own doubts.** He grew dissatisfied once Bell (1990) persuaded him that what agents can manipulate has no place in fundamental physics.
- **Trap: in its later sense it answers only question (ii)** of [Maudlin's taxonomy](#maudlins-taxonomy) ([no-signalling](#no-signalling)).
- **Passion at a distance** is Shimony's (1984) name for the correlation an outcome-independence violation involves ([Bell correlations and causation](#bell-correlations-and-causation)).

*Lessons:* [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Relativistic collapse

**Attempts to square collapse with relativity, which supplies no single hypersurface along which an "instantaneous" collapse could run.** The textbook collapse needs a "now" ([frame-dependent order](#frame-dependent-order)), and 3.3's argument leaves three ways to pay: a preferred foliation, a nonlocal dependence that is no process along any hypersurface, or an exit from Bell's premises.

- **Hyperplane-dependent collapse.** Gordon Fleming (from 1989) collapses the state on every spacelike hyperplane through the measurement, so states are hyperplane-relative.
- **Flash GRW.** Roderich Tumulka's relativistic GRW (2006; Dove had independently built one in 1996) drops states from the ontology: the world is [flashes](#flash-ontology) ([2.2](lessons/02-02-collapse-theories-grw-and-csl.md)), governed by one joint chance law that no foliation enters, and it is Lorentz invariant. Its costs: it covers a fixed number of non-interacting particles, and, being GRW, it departs testably from quantum mechanics.
- **Tumulka's choice,** paraphrased: exact quantum mechanics with a preferred slicing (Bohm), or no slicing and a small deviation from quantum mechanics.
- **No signals despite nonlinearity.** GRW is linear on the density matrix; Gisin (1989) showed generic nonlinear modifications would signal ([no-signalling](#no-signalling)).
- **Where it strains** (3.3). Flash GRW's defenders say a law fixing joint chances for a pattern of events is all a stochastic theory owes; critics ask whether a law that correlates distant flashes with no mechanism explains the correlation or merely records it.

*Lessons:* [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Bell correlations and causation

**Whether the dependence between distant wings that Bell's theorem forces, absent an exit, is causation or only correlation.** The open question 3.3 ends on, and question (iii) of [Maudlin's taxonomy](#maudlins-taxonomy).

- **Passion at a distance** (Shimony, 1984). In a theory that violates [outcome independence](#outcome-independence), one wing's chances depend on nothing the other experimenter controls, and conditioning either way gives the same numbers: a correlation built into the joint law, not an action.
- **The causal reading** (Jeremy Butterfield, 1992; Joseph Berkovitz, 1998). On a counterfactual account of causation, failure of [factorizability](#factorizability) is superluminal causal dependence.
- **The recipe's snag** ([`metaphysics` 4.2](../metaphysics/lessons/04-02-counterfactual-causation.md)). The recipe holds "the actual past fixed" until just before the cause, and for spacelike events "before" is frame-relative. Hold fixed the common past light cone and the two outcomes depend on each other; hold fixed one frame's past and the dependence runs one way, chosen by the frame.
- **Setting or outcome** (3.3, "Where it strains"). A dependence on a distant setting is directed, relative to a foliation, and causal by counterfactual standards; a dependence between outcomes is undirected. The taxonomy sorts theories; it does not decide whether "nonlocal correlation" is causation.
- **Concessions.** The passion side concedes a law-like link between distant events with no local ground; the causal side concedes that the dependence has no intrinsic direction and carries no signal.
- **Trap: no-signalling settles it.** No-signalling answers question (ii), not (iii).
- **Neighbours.** Screening off and the common-cause principle are [`philosophy-of-science` 4.2](../philosophy-of-science/lessons/04-02-causal-explanation.md); the objection to the common-cause demand is under [local causality](#local-causality).

*Lessons:* [3.3](lessons/03-03-nonlocality-and-relativity.md)

**Module 4: Space and spacetime**

### Substantivalism

**Space, or spacetime, is a thing in its own right: its points are there whether or not anything occupies them, and the material world sits somewhere in it.** The canonical defence is Newton's absolute space as Samuel Clarke argued for it against Leibniz (1715–16). The label is modern; neither Newton nor Clarke used it. *In words:* the frame of the picture is real, not just the flock of birds painted in it.

- **What it commits one to** (4.1). Counting a world displaced as a whole, or set coasting as a whole, as a second possible world: see the [static shift](#static-shift) and the [kinematic shift](#kinematic-shift).
- **About space, or about spacetime** (4.2). Substantivalism about space, Newton's places persisting through time, makes velocity absolute as well as rotation. Substantivalism about spacetime can keep points and a connection while denying that a point of space persists through time: that is [Galilean spacetime](#galilean-spacetime). Tim Maudlin ("Buckets of Water and Waves of Space", 1993) argues that spacetime is probably a substance.
- **In general relativity** (4.5). The hole argument's target is [manifold substantivalism](#manifold-substantivalism); the versions that escape it are grouped as [sophisticated substantivalism](#sophisticated-substantivalism).
- **Trap: the bucket proves it.** Newton's [bucket](#newtons-bucket) shows at most that rotation is not relative to nearby bodies; Galilean spacetime has absolute rotation and no absolute place (4.2).
- **Trap: one view.** Substantivalism about Newton's or Clarke's space is not substantivalism about spacetime, and neither is the manifold substantivalism of 4.5.
- **The profession today.** In the 2020 PhilPapers Survey, 27% of 626 respondents accepted or leaned towards substantivalism about spacetime and 45% relationism (4.1).

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Relationalism

**Space is nothing over and above the relations of distance and situation among bodies.** Leibniz, Third Paper §4 (Clarke's translation, 1717): "I hold it to be an Order of Coexistences, as Time is an Order of Successions". *In words:* the picture is just the flock; there is no frame.

- **What it denies** (4.1). That a world shifted or set coasting as a whole is a second possibility. Leibniz's grounds are the [principle of sufficient reason](#principle-of-sufficient-reason), the [identity of indiscernibles](#identity-of-indiscernibles) and the [observability principle](#observability-principle); which of them carries the argument is disputed ([two readings](#verificationist-and-metaphysical-readings)).
- **About space, not about motion.** Leibniz's relationalism about space survives his grant of [absolute true motion](#absolute-true-motion) (Fifth Paper §53); relationalism about motion, on which all motion is change of relations, does not.
- **The bill it must pay** (4.2). Rotation shows itself in forces, so the relationalist must find the standard of rotation somewhere other than space: in the bodies (Leibniz's cause of motion), in a restriction on the laws (Julian Barbour and Bruno Bertotti's [best matching](#best-matching)), or in the laws as a summary of relations (Nick Huggett's [regularity relationalism](#regularity-relationalism)).
- **In general relativity** (4.5). The relationalist reply to the hole argument is to accept [Leibniz equivalence](#leibniz-equivalence), as Einstein's [point-coincidence argument](#point-coincidence-argument) does.
- **Trap: Mach gave relationalism its law.** Mach gave a demand, not a law ([Mach's principle](#machs-principle)); best matching is one later attempt to supply it.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Static shift

**A world exactly like ours in every relation among bodies, but with the whole material content placed elsewhere in space: moved three metres north, say, or turned round, as in Leibniz's swap of East and West.** Leibniz runs his argument from it in two versions, one through the [principle of sufficient reason](#principle-of-sufficient-reason) (Third Paper §5) and one through the [identity of indiscernibles](#identity-of-indiscernibles) (Fourth Paper §§5–6). "Static shift" is the modern label; Maudlin (1993) uses it.

- **The physics** (4.1 Example 1). Every body's position $\mathbf{x}_i(t)$ goes to $\mathbf{x}_i(t) + \mathbf{d}$ for one fixed vector $\mathbf{d}$. Every separation $\mathbf{x}_i - \mathbf{x}_j$ is unchanged, so if forces depend only on separations the shifted history solves Newton's laws whenever the original does. Translation is a symmetry of the laws, the one [`analytical-mechanics` 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md) turns into conservation of momentum.
- **The count.** The substantivalist has one world for each $\mathbf{d}$, a three-dimensional continuum of them; the relationalist has one. The argument is valid, and the dispute sits on its principles, not on the physics (4.1).
- **Maudlin's point** (1993). The static shift leaves us ignorant of nothing: the shifted world can be described only from here, as everything moved from where it is, so we know which world is actual. Shamik Dasgupta ("Inexpressible Ignorance", 2015) replies that ignorance we cannot put into words is still ignorance.
- **In time.** Leibniz runs the same move on the date of creation in the Third Paper §6 (4.3's flashback).
- **Descendant.** The [hole argument](#hole-argument) is the static shift done locally and smoothly in general relativity: the shift moves bodies over fixed places, the hole map moves fields over fixed events, and [Leibniz equivalence](#leibniz-equivalence) is named for Leibniz (4.5).
- **Left to you.** The reconstruction in numbered premises, with each premise marked as drawing on the PSR or on the PII, and Clarke's two replies set against them, is Boss 4(b)'s; the card does not give it.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Kinematic shift

**A world exactly like ours in every relation, but with the whole material content moving uniformly in a straight line: a boost of the entire universe.** It is Clarke's case. He raised it (Third Reply §4) as an objection to Leibniz's relationalism, Leibniz turned it against absolute space (Fourth Paper §13), Clarke pressed it with a ship, a sudden stop and Newton's Scholium (Fourth Reply §13), and Leibniz answered in the Fifth Paper §§52–53.

- **The physics** (4.1 Example 2). Every $\mathbf{x}_i(t)$ goes to $\mathbf{x}_i(t) + \mathbf{v}t$ for one constant velocity $\mathbf{v}$. Separations and accelerations are unchanged, so the laws hold in one world exactly when they hold in the other: a Galilean boost of everything.
- **Unlike the static shift.** Absolute velocity, if it existed, would be a fact we could never learn. Maudlin (1993) separates the two shifts on this ground, and lets the substantivalist drop absolute velocity and keep the rest. This is [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md)'s family $T_v$, there read as underdetermination.
- **What it tells against.** At most, space that persists through time, which makes absolute velocity a fact. [Galilean spacetime](#galilean-spacetime) has no absolute velocity, so it concedes the kinematic shift to Leibniz (4.2).
- **The proviso.** Set the whole world rotating rigidly instead and every separation stays fixed, yet bodies need forces to stay on their circles (4.1 Example 2). There the shift argument gives no verdict, since there is no indiscernible pair ([Newton's bucket](#newtons-bucket), [absolute true motion](#absolute-true-motion)).
- **Elsewhere.** In 4.3, Allen Janis's point puts the same undetectability in a new place: every choice of [Reichenbach's epsilon](#reichenbach-epsilon) in one frame is the standard synchrony of some inertial observer moving past it. In 6.1, a boost of everything leaves the empirical-significance criterion of Kosso and of Brading and Brown silent, since nothing is left untransformed ([direct empirical significance](#direct-empirical-significance)).
- **Trap: Leibniz's argument.** Clarke raised it; Leibniz turned it, in the Fourth Paper, not the Fifth.
- **Trap: it refutes substantivalism.** Not about spacetime: see the third bullet.
- **Left to you.** Why effects of changing motion, like the bucket's or the shock of a sudden stop, cannot tell a world at rest from the same world coasting, and what Newton's own Corollary V says about such worlds, are Boss 4(b)'s questions; 4.1 Example 2 teaches them.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Principle of sufficient reason

**Nothing is or happens without a sufficient reason why it is so and not otherwise (the PSR).** Taught in [`modern-philosophy` 2.3](../modern-philosophy/lessons/02-03-leibniz-sufficient-reason-and-monads.md); the PSR as a live principle in metaphysics is [`metaphysics` 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md).

- **At Leibniz's strength** (4.1). God chooses nothing without a reason that favours the choice, a reason found in the options themselves. Clarke accepts the principle in form and denies this strength ([mere-will reply](#mere-will-reply)).
- **Its partner.** Leibniz pairs it with the [identity of indiscernibles](#identity-of-indiscernibles) as the principles that make metaphysics demonstrative (Fourth Paper §5), and uses both against the kinematic shift (Fourth Paper §13).
- **Beneath observability.** The Fifth Paper §52 states the [observability principle](#observability-principle) and then rests it on "the Principle of the want of a sufficient Reason of things" (4.1 Source), which is why the [two readings](#verificationist-and-metaphysical-readings) of Leibniz are both live.
- **Neighbour.** Clarke's own sufficient-reason argument for God is [`philosophy-of-religion` 2.4](../philosophy-of-religion/lessons/02-04-cosmological-arguments-sufficient-reason.md).
- **Left to you.** Marking which premise of the static-shift reconstruction draws on the PSR is Boss 4(b)'s.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Identity of indiscernibles

**Things that share every quality are one thing (the PII).** Taught in [`modern-philosophy` 2.3](../modern-philosophy/lessons/02-03-leibniz-sufficient-reason-and-monads.md), which quotes Leibniz's Fourth Paper §6. *In words:* there are no exact duplicates.

- **In the shift arguments** (4.1). Leibniz's second version of the static shift runs through it (Fourth Paper §§5–6), and he uses it, with the PSR, against the kinematic shift (Fourth Paper §13).
- **Clarke's denial for places.** Places exactly alike are still two (Fourth Reply §§5–6). 4.5 reads this as a denial of [Leibniz equivalence](#leibniz-equivalence), and Boss 4(e) sets it beside sophisticated substantivalism.
- **Where it is weakest** (4.1). The step from "indiscernible" to "one". For places it seems to beg the question, since if places are things, two alike are two; and the PII faces symmetric counterexamples ([`metaphysics` 2.1](../metaphysics/lessons/02-01-substance-and-accident.md)).
- **Quantum particles** (6.3). Two electrons in the singlet share every property the state assigns either, so they seem to break the PII; Steven French and Michael Redhead (1988) posed the dilemma, and Simon Saunders answers with [weak discernibility](#weak-discernibility).
- **Trap: the PII is Leibniz's law.** Leibniz's law is the converse: identical things share every property.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [6.3](lessons/06-03-particles-fields-or-structure.md)

### Mere-will reply

**Clarke's position that, where the options are indifferent in their own nature, God's will alone is a sufficient reason for choosing one of them.** Clarke, Third Reply §2 (1716); "mere Will" is his phrase. *In words:* when nothing favours either option, choosing is reason enough.

- **What it grants and denies** (4.1). It accepts the [PSR](#principle-of-sufficient-reason) in form and denies Leibniz's strength, on which the reason must lie in the options.
- **What it leaves alone.** Like Clarke's other reply, it disputes a principle, never the physics of the shift.
- **Neighbour.** The PSR as a live principle, which mere will tests, is [`metaphysics` 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md).
- **Left to you.** Setting this reply, and Clarke's reply to the PII version, against the premises of the static-shift reconstruction is Boss 4(b)'s.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Observability principle

**Leibniz's claim that a motion, and indeed any change, is real only if it is possible to observe it.** Fifth Paper §52 (Clarke, 1717, pp. 211–213), answering Clarke's ship: "There is no Motion, when there is no Change that can be Observed." And then: "when there is no Change that can be Observed, there is no Change at all."

- **Possible, not actual, observation.** Leibniz first grants Clarke that motion does not depend on being observed, then moves one word: it depends on being "possible to be Observed" (4.1 Source).
- **Its ground.** The same section rests the claim on sufficient reason, so whether observability or the PSR carries Leibniz's case is open ([two readings](#verificationist-and-metaphysical-readings)).
- **It cuts both ways.** Rotation is detectable, so on this principle Leibniz must grant a difference that no relation among bodies records, and the Fifth Paper §53 does ([absolute true motion](#absolute-true-motion)).
- **Its cost.** A verification principle threatens itself ([`philosophical-method` 4.1](../philosophical-method/lessons/04-01-objections-and-replies.md)).
- **Its echo.** Einstein's step from what is observable to what is objective in the 1916 [point-coincidence argument](#point-coincidence-argument) is Leibniz's step in §52 (4.5).
- **Trap: unobserved motion is no motion.** §52 says unobservable, not unobserved.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Verificationist and metaphysical readings

**Two accounts of what carries Leibniz's shift arguments: an observability premise (worlds no possible observation could tell apart are one world), or the PSR and the PII taken as necessary truths.** The split is grounded in Leibniz's own texts: the Fifth Paper §52 states observability and rests it on sufficient reason, and the Fourth Paper §13 appeals to both the PII and the PSR. "Verificationist" is a twentieth-century label, and fitting it to Leibniz needs arguing (4.1).

- **Verificationist.** "Indiscernible" means that no possible observation tells the states apart; the operative premise is the [observability principle](#observability-principle), and God and the PSR drop out.
- **Metaphysical.** The operative premises are the [PSR](#principle-of-sufficient-reason) and the [PII](#identity-of-indiscernibles) as necessary truths.
- **Their reach differs.** The first condemns any undetectable quantity and spares any detectable one, so it must grant detectable rotation. The second condemns any reasonless choice and any exact duplicate, detectable or not.
- **Applied again.** 4.3's flashback reads Leibniz's year-sooner creation (Third Paper §6) for words that serve each reading.
- **Trap: Maudlin's distinction.** The course cites Maudlin (1993) only for separating the static from the kinematic shift and for his reply to the static shift, not for this split.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Absolute true motion

**Leibniz's concession that a body's true motion differs from a mere change in its relations to other bodies, with his criterion: a body is truly moving when the cause of the change is in it.** Fifth Paper §53 (Clarke, 1717): "I grant there is a difference between an absolute true motion of a Body, and a mere relative Change of its Situation"; a body is truly in motion when "the immediate Cause of the Change is in the Body".

- **Not absolute space.** The same section denies that Newton's Scholium proves "the reality of Space in it self".
- **Why he needs it** (4.1 Example 2). A rigidly rotating world keeps every separation yet shows forces, so on the verificationist reading Leibniz must grant a difference that no relation among bodies records.
- **One reading** (Carl Hoefer, Nick Huggett and James Read, *Stanford Encyclopedia*, 2021). The concession records Leibniz's agreement with Newton, against Descartes, that merely relative motion is not true motion, while Leibniz grounds true motion in force rather than in space.
- **Open in 4.1.** Whether §53 squares with §52 and with relationalism is 4.1 P3.
- **Trap: Leibniz as a purely relational theorist of motion.** §53 gives that up while keeping relationalism about space.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Absolute space

**Newton's space: a persisting, immovable container whose points stay the same places over time, so that position, velocity and rotation relative to it are all facts.** Newton, Scholium to the Definitions (*Principia*; Motte's translation, 1729, vol. 1, p. 9): "Absolute Space, in its own nature, without regard to any thing external, remains always similar and immoveable". That is the 1729 wording; later versions differ.

- **True motion** (4.2). Motion with respect to absolute space. The Scholium argues that true motion cannot be defined by relations to other bodies, with the [bucket](#newtons-bucket) among its arguments and the [globes](#rotating-globes) as its account of how true motion is found.
- **As spacetime structure.** It is what [Newtonian spacetime](#newtonian-spacetime) adds: a fact about which point now is the same place as which point then, drawn as vertical rest lines.
- **Idle in part** (4.2). Its velocity is structure Newton's laws never use ([symmetry matching](#symmetry-matching)); [Galilean spacetime](#galilean-spacetime) deletes it and keeps rotation.
- **Trap: it only makes rotation absolute.** It makes velocity absolute too; Galilean spacetime keeps only rotation and acceleration.
- **Newton's sailor.** 4.4's flashback works the Scholium's own example of absolute motion (pp. 10–11), a sailor walking on a ship on the moving Earth.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Affine structure

**The spacetime structure that says which worldlines are straight, so that acceleration and rotation are absolute while velocity need not be.** Mathematically a connection. Galilean spacetime's is flat, and free bodies follow its geodesics: [`relativity` 4.5](../relativity/lessons/04-05-geodesics.md) writes free motion as a geodesic and finds the centrifugal and Coriolis terms among the Christoffel symbols of rotating coordinates.

- **The picture** (4.2). Draw each body's history as a line through spacetime, time running up the page. Newton's space supplies vertical lines, the histories of places at rest, so every line's tilt, its velocity, is a fact. Erase the verticals and keep the rule for which lines are straight: tilt becomes relative, while bending, which is acceleration or rotation, stays absolute.
- **What it settles.** "Not accelerating" in the first law means not accelerating relative to the connection ([inertial frame](#inertial-frame)).
- **What it leaves open** (4.2). Whether the connection needs a bearer. The substantivalist says straightness at points where no body is must belong to something; Huggett's [regularity relationalism](#regularity-relationalism) makes it a feature of laws over relations.
- **Neighbours.** The Foucault pendulum's turning plane read as holonomy is [`differential-geometry` 4.2](../differential-geometry/lessons/04-02-parallel-transport.md); the Coriolis term on the rotating Earth is [`atmospheric-science` 4.2](../atmospheric-science/lessons/04-02-coriolis-effect.md).

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Inertial frame

**A frame in which a free body moves uniformly in a straight line: its straight, uniformly traversed coordinate lines are the free motions.** 4.2 adopts [`relativity` 1.1](../relativity/lessons/01-01-postulates-simultaneity.md)'s definition.

- **The circle it closes.** [`mechanics-refresher` 1.2](../mechanics-refresher/lessons/01-02-newtons-laws.md) says the first law holds in a frame that is not accelerating, without saying relative to what. In [Galilean spacetime](#galilean-spacetime) the answer is the [affine structure](#affine-structure); for a regularity relationalist, the frames the best system of laws privileges.
- **Fictitious forces** (4.2). In a rotating frame the second law needs centrifugal and Coriolis terms. They are frame-relative bookkeeping, real in their consequences: the shape of the bucket's water is the same in every frame, and what depends on the frame is whether you describe it with a centrifugal force.
- **Trap: inertial means at rest.** In Galilean spacetime nothing is at rest absolutely; inertial frames move uniformly relative to each other.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Newton's bucket

**Newton's experiment with water in a bucket hung by a twisted cord, offered as evidence that true rotation is not rotation relative to the surrounding bodies.** Scholium to the Definitions (Motte, 1729, vol. 1, pp. 15–16). Its target was Descartes, who defined motion as transfer from the immediately surrounding bodies (Howard Stein, "Newtonian Space-Time", 1967).

- **The reconstruction Mach attacked** (4.2, at outline). From the bucket: true circular motion is not rotation relative to the surrounding bodies. From the [globes](#rotating-globes): no reference body is needed at all. So true rotation is rotation with respect to [absolute space](#absolute-space).
- **The weakest step** (4.2). The move to absolute space. Stein's objection: absolute rotation needs only a connection, and a connection carries no absolute place ([Galilean spacetime](#galilean-spacetime)).
- **The physics** (4.2 Example 1). Water turning rigidly at angular velocity $\omega$ has the surface $z(r) = \omega^2 r^2/2g$ above its lowest point, where $r$ is the distance from the axis and $g$ the gravitational acceleration. Galilean spacetime reads the rate as the twist of the water's worldlines relative to the connection, and assigns the bucket no velocity.
- **Mach's reply.** He grants the first conclusion and refuses the second ([Mach's principle](#machs-principle)).
- **Trap: it proves space is a thing.** At most it shows rotation is not relative to nearby bodies, which was Descartes's definition.
- **Trap: it detects uniform velocity.** It never does.
- **Left to you.** What the water's surface does at each stage, what Newton says its concavity reveals, and the words that tie it to true rather than relative motion are Boss 4(a)'s close reading; the card does not give them.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Rotating globes

**Newton's two globes joined by a cord and revolving about their common centre: the cord's tension reveals their rotation even in an otherwise empty universe.** The Scholium's final paragraph (Motte, 1729, vol. 1, pp. 17–18; the 1729 print reads "a cord that connects them"). Newton imagines the globes in an immense vacuum, with nothing outside them to compare them to.

- **What it is for.** On Robert Rynasiewicz's reading in the *Stanford Encyclopedia*, the paragraph answers how true motions can be found, given that absolute space cannot be seen, not whether they exist (4.2).
- **Its role in the reconstruction.** It supplies the premise that no reference body is needed ([Newton's bucket](#newtons-bucket)), the premise Mach calls an untested counterfactual.
- **Worked in 4.2.** P1 close-reads the paragraph; P2 computes the globes in a boosted and in a rotating frame; P3 empties the universe around them.
- **Trap: the globes rotate relative to each other.** Their distance is fixed, and in the empty case there is nothing else to rotate relative to.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Mach's principle

**The demand that inertia, and so which motions count as unaccelerated, be fixed by the matter of the universe.** The name is Einstein's ("Machsches Prinzip", in "Prinzipielles zur allgemeinen Relativitätstheorie", 1918), not Mach's, and Mach supplied no law.

- **Mach's reply to Newton** (*The Science of Mechanics*, tr. McCormack, 1893, p. 232). The bucket shows only that rotation relative to its sides produces no noticeable centrifugal forces, while rotation "with respect to the mass of the earth and the other celestial bodies" does. Of a vessel whose sides grew leagues thick and massive: "No one is competent to say how the experiment would turn out". *In words:* a world nobody has tested decides nothing.
- **Einstein.** His 1916 paper raised Mach's worry (§2; Perrett and Jeffery, 1923, pp. 112–113), calling the privileged space of Newton's mechanics "a merely factitious cause". In 1918 he granted that his 1915 field equations break the principle, since empty flat spacetime solves them, and thought the cosmological term restored it.
- **General relativity's echo** (4.2 Example 2). Rotating mass drags inertial frames ([`relativity` 6.4](../relativity/lessons/06-04-kerr-charged-holes.md)), and Brill and Cohen (1966) showed that inside a rotating shell massive enough for its radius the dragging becomes complete. Newtonian and Galilean mechanics predict no change inside a thickened vessel, since a uniform shell exerts no net force inside.
- **No neutral verdict** (4.2). The Machian says both predictions come from theories that already posit inertial structure matter does not fix; the substantivalist says frame dragging is the metric, a dynamical thing, responding to matter, not inertia reducing to it.
- **A law for it.** [Best matching](#best-matching) is one attempt, at the price of a non-rotating universe.
- **Trap: Mach stated Mach's principle.** The name is Einstein's (1918), and Mach offered a demand without a law.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Newtonian spacetime

**Absolute time, Euclidean distance at each time, and absolute space: a fact about which point now is the same place as which point then.** The richest of the three classical spacetimes in 4.2, each fixed by the transformations that preserve it. With $t$ for time, $\mathbf{x}$ for position, $R$ a rotation matrix and $\mathbf{a}$ a displacement, its symmetries are $\mathbf{x} \to R\mathbf{x} + \mathbf{a}$ with $R$ and $\mathbf{a}$ constant (and $t \to t + t_0$).

- **What is absolute.** Velocity and rotation.
- **Too few symmetries** ([symmetry matching](#symmetry-matching)). Boosts are symmetries of Newton's laws but not of this spacetime, so its absolute velocity is idle: the $v$ that [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md) Example 2 has Stanford delete.
- **In 6.1.** Earman's first symmetry principle fails here under boosts, and Galilean spacetime is the cure ([Earman's symmetry principles](#earmans-symmetry-principles)).
- **More structure, fewer symmetries** (4.2): Newtonian, then [Galilean](#galilean-spacetime), then [Leibnizian](#leibnizian-spacetime).

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Galilean spacetime

**Absolute time, distance at each time, and a flat connection that fixes which motions are straight, with no absolute space: acceleration and rotation are absolute, velocity is not.** Also called neo-Newtonian (Howard Stein, "Newtonian Space-Time", 1967; John Earman, *World Enough and Space-Time*, 1989). With $\mathbf{u}$ a constant velocity, its symmetries are $\mathbf{x} \to R\mathbf{x} + \mathbf{u}t + \mathbf{a}$ (and $t \to t + t_0$).

- **It fits the laws.** Its symmetries are exactly those of Newton's laws with forces depending on relative distances ([symmetry matching](#symmetry-matching); [`analytical-mechanics` 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md) P3 shows the boost is a symmetry).
- **The settlement it offers** (4.2). It concedes the [kinematic shift](#kinematic-shift) to Leibniz and the bucket to Newton; for 4.1 it is the substantivalist's answer to the kinematic shift: drop absolute velocity, keep the rest.
- **Galilean substantivalism.** Belief in spacetime points and a connection, with no point of space persisting through time; Newton's "immoveable" space is exactly what it gives up.
- **What remains disputed.** Whether its connection needs a bearer ([affine structure](#affine-structure)).
- **Perhaps still too much** (4.2). Newton's Corollary VI says that bodies all urged by equal accelerative forces along parallel lines move among themselves as if no such forces acted. Simon Saunders ("Rethinking Newton's Principia", 2013) argues that gravitation therefore needs only what he calls Newton–Huygens spacetime (Earman's "Maxwellian" spacetime): absolute rotation without absolute linear acceleration. James Weatherall (2016) replies that gravity's trajectories restore a standard of acceleration.
- **Used later.** In 6.1 it is the cure for Earman's first symmetry principle failing under the [Galilean boost](#galilean-boost); 6.3 uses it the same way. In 4.2's flashback, its absolute time already supplies the leaves a Bohmian [preferred foliation](#preferred-foliation) needs.
- **Trap: Newton's space renamed.** It has no absolute place or velocity.
- **Trap: rotation relative to the fixed stars.** Rotation is relative to the connection.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.3](lessons/06-03-particles-fields-or-structure.md)

### Leibnizian spacetime

**Absolute time and Euclidean distance at each time, and nothing else: no fact about which motions are straight.** Earman's name. Its symmetries are $\mathbf{x} \to R(t)\mathbf{x} + \mathbf{a}(t)$, any time-dependent rotation $R(t)$ and shift $\mathbf{a}(t)$.

- **Too many symmetries** ([symmetry matching](#symmetry-matching)). A time-dependent rotation preserves its structure but changes Newton's laws, adding centrifugal and Coriolis terms, so this spacetime cannot say that the globes rotate.
- **What is absolute.** Neither velocity nor rotation.
- **Trap: it has absolute rotation.** Only Newtonian and Galilean spacetime do.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Symmetry matching

**The requirement that a theory's spacetime symmetries and its dynamical symmetries coincide.** Earman (1989); 6.1 states his principles ([Earman's symmetry principles](#earmans-symmetry-principles)) and the distinction they rest on ([dynamical and spacetime symmetries](#dynamical-and-spacetime-symmetries)).

- **Too few spacetime symmetries** means idle structure: [Newtonian spacetime](#newtonian-spacetime)'s absolute velocity, which the laws never use. 4.2 cites Newton's Corollary V here.
- **Too many** means missing structure: [Leibnizian spacetime](#leibnizian-spacetime) cannot say what rotates.
- **Just right.** [Galilean spacetime](#galilean-spacetime) for Newton's laws with distance-dependent forces; 4.2 P2 runs the test on the globes, comparing a boost with a rotating frame.
- **Trap: matching settles substantivalism.** It selects structure; it does not say whether that structure belongs to a substance.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Best matching

**Julian Barbour and Bruno Bertotti's way of building dynamics from relative configurations alone: shift and rotate each configuration against its predecessor until their difference is least, and run the dynamics on that fit.** "Mach's Principle and the Structure of Dynamical Theories" (1982).

- **What it recovers** (4.2). Newtonian particle dynamics, but only the solutions in which the universe's total angular momentum is zero.
- **Its price.** A rotating universe is not merely undetectable but impossible: best matching does not make rotation relative within Newton's solutions, it excludes the rotating ones.
- **Its role.** One attempt to supply the law that [Mach's principle](#machs-principle) only demanded.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Regularity relationalism

**Nick Huggett's view that the laws, inertial frames included, are the best system of a world of bodies and their changing distances, so the laws privilege frames with no geometry behind them.** "The Regularity Account of Relational Spacetime" (2006). Best-system accounts of laws are [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md)'s.

- **The connection demoted** (4.2). It summarizes relations rather than housing them.
- **Its price.** Humean laws, with inertia a regularity that has nothing behind it.
- **A partner.** The dynamical view of relativity can adopt it as its metaphysics (4.4 Connections; [dynamical view](#dynamical-view-of-relativity)).
- **Trap: it denies that rotation is a fact.** Rotation is a fact, relative to the frames the best system privileges.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Conventionality of simultaneity

**The thesis that, within one inertial frame of special relativity, which distant event is simultaneous with a given one is fixed by no physical fact and must be chosen.** Hans Reichenbach (*Philosophie der Raum-Zeit-Lehre*, 1928) and Adolf Grünbaum (*Philosophical Problems of Space and Time*, 1963). Poincaré anticipated it ("The Measure of Time", 1898): light's equal speed in all directions is "a postulate without which no measurement of this velocity could be attempted" (Halsted's translation, 1913).

- **The argument** (4.3, at outline). The only non-conventional ground for calling two distant events not simultaneous is that a causal signal could connect them; no causal signal outruns light; every event at A strictly between a signal's departure and its return is spacelike to its reflection at B. So no physical fact picks one of them, and any [epsilon](#reichenbach-epsilon) between 0 and 1 may be chosen.
- **Supporting moves.** Grünbaum: $\varepsilon = \tfrac12$ is simpler only in notation. Proposed one-way measurements, by slowly transported clocks (Ellis and Bowman, 1967) or by momentum conservation, were each argued to presuppose an equivalent convention (Winnie, 1970; Salmon, 1977).
- **The challenge.** [Malament's theorem](#malaments-simultaneity-theorem).
- **Three senses of "conventional"** (4.3). Popper's [conventionalist stratagem](../philosophy-of-science/lessons/02-01-popper-conjectures-and-refutations.md) is a banned rescue of a theory by redefinition; the conventionalist of [`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md) calls a persistence question verbal; the thesis here is that a theory's invariant structure leaves a parameter unfixed.
- **As gauge.** Rynasiewicz (2012) argued that the ε-freedom is gauge freedom of the same kind as the hole argument's (4.3 Connections).
- **Trap: it is the relativity of simultaneity.** That is settled physics: frames that each use standard synchrony disagree about distant simultaneity. Conventionality is a further claim about a single frame.
- **Trap: it is geometric conventionalism.** Different structure: "at the same time" here, the metric of space in [geometric conventionalism](#geometric-conventionalism) (4.4).

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Einstein synchronization

**Einstein's 1905 rule: two clocks are synchronous when a light signal's trip out and its trip back take equal times.** "On the Electrodynamics of Moving Bodies" (1905), §1 (Perrett and Jeffery's translation, 1923). A ray leaves A at A-time $t_A$, is reflected at B at B-time $t_B$, and returns to A at A-time $t'_A$; the clocks are synchronous if

$$t_B - t_A = t'_A - t_B .$$

It is [Reichenbach's](#reichenbach-epsilon) $\varepsilon = \tfrac12$, also called standard synchrony.

- **Symmetry and transitivity.** §1 assumes that the relation is symmetric and transitive. Einstein's popular book calls the transitivity clause "a physical hypothesis about the law of propagation of light" (*Relativity*, ch. VIII, note; Lawson's translation).
- **Do they force one half?** No (4.3 Example 2): a direction-dependent rule, with time coordinate $t' = t + \mathbf{k}\cdot\mathbf{x}/c$ for a constant vector $\mathbf{k}$ with $|\mathbf{k}| < 1$, is symmetric and transitive. What the conditions exclude is one ε in every direction (4.3 P2).
- **The midpoint version.** [`relativity` 1.1](../relativity/lessons/01-01-postulates-simultaneity.md) synchronizes two clocks by a flash from their midpoint, which is $\varepsilon = \tfrac12$ in disguise: with clocks a distance $L$ apart, the flash reaches the outbound-side clock later by $(2\varepsilon - 1)L/c$, which vanishes only at $\varepsilon = \tfrac12$. Einstein's popular book uses the midpoint version and calls the equal travel times a stipulation (4.3 P1).
- **Trap: the midpoint flash assumes nothing about light.** It assumes equal speeds from the middle.
- **Left to you.** The words in the 1905 §1 that mark the rule as a definition are Boss 4(c)'s.

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Reichenbach epsilon

**The parameter that says where, between a signal's departure and its return, the time of its distant reflection is placed.** Reichenbach (1928). In the course's notation, a signal leaves A at $t_1$, reflects at B, and returns to A at $t_3$; the reflection is assigned

$$t_2 = t_1 + \varepsilon\,(t_3 - t_1), \qquad 0 < \varepsilon < 1 .$$

$\varepsilon = \tfrac12$ is [Einstein synchronization](#einstein-synchronization).

- **One-way speeds.** With A and B a distance $d$ apart, so that $t_3 - t_1 = 2d/c$, the outbound and return speeds are $c_{\text{out}} = c/2\varepsilon$ and $c_{\text{back}} = c/2(1-\varepsilon)$. Their harmonic mean is $c$ for every ε, so every ε reproduces the measured round trip ([one-way speed of light](#one-way-speed-of-light)).
- **Janis's correspondence** (4.3 Example 1). The ε-assignment in A's frame is the standard simultaneity of an inertial observer passing A toward B at $v = (1 - 2\varepsilon)c$, and $0 < \varepsilon < 1$ is exactly $-c < v < c$.
- **Direction-dependent synchrony** (4.3 Example 2). A symmetric non-standard synchrony uses ε one way and $1 - \varepsilon$ the other. The general freedom is any time function $t + \varphi(\mathbf{x})/c$ with $|\nabla\varphi| < 1$, the scalar-field freedom of Minguzzi (2002).
- **Worked in the lessons.** 4.3 Example 1 (the lunar echo) and the flashback of 4.5.
- **Left to you.** Boss 4(c)'s values, and its question why Reichenbach allows exactly this range of ε, are not answered on the card.

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [4.5](lessons/04-05-the-hole-argument.md)

### One-way speed of light

**The speed of light in one direction, from one place to another, as against the round-trip speed that a single clock can time.** Timing one leg needs two distant clocks already synchronized, and synchronizing them by light needs the one-way speed; what is measured is the round-trip speed, $c$ (4.3).

- **Lunar ranging.** Since 1969 observatories have timed laser echoes from the reflectors the Apollo astronauts left on the Moon, about two and a half seconds there and back; nobody has timed the trip up.
- **Given an epsilon.** The two one-way speeds are $c/2\varepsilon$ and $c/2(1-\varepsilon)$ ([Reichenbach epsilon](#reichenbach-epsilon)).
- **Settled and disputed.** The round-trip speed and the relativity of simultaneity are settled physics; whether the one-way speed is a fact or a convention is the [conventionality](#conventionality-of-simultaneity) dispute.
- **Trap: a midpoint lamp measures it.** Synchronizing by a flash from the midpoint already assumes equal one-way speeds ([Einstein synchronization](#einstein-synchronization); 4.5's flashback).

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Malament's simultaneity theorem

**Standard synchrony is the only simultaneity relation that can be built from "could be causally connected" plus one inertial worldline.** David Malament, "Causal Theories of Time and the Conventionality of Simultaneity" (*Noûs*, 1977). Let $O$ be an inertial worldline. If a relation $S$ (i) is definable from symmetric causal connectibility and $O$, (ii) is an equivalence relation, (iii) relates some event on $O$ to some event off it, and (iv) is not universal, then $S$ is standard synchrony relative to $O$.

- **"Definable"** (4.3). In the proof it works as invariance under every map that preserves causal connectibility and carries $O$ onto itself. One such map, a time reflection fixing the reflection event, swaps departure and return and so sends ε to $1 - \varepsilon$.
- **Replies.** Allen Janis (1983) and Grünbaum (2010): each inertial worldline gets its own unique synchrony, and choosing the worldline has exactly the latitude of ε. Michael Redhead (1993) and Grünbaum question premise (ii). Sahotra Sarkar and John Stachel (1999) deny that simultaneity must be invariant under time reflection; without that demand, lying on the past light cone of a fixed event also qualifies.
- **Where it is weakest** (4.3). Premise (i). The objection (Janis, Grünbaum): the convention has moved to the choice of worldline, not vanished. The reply on Malament's behalf: the conventionalist asked about A's rest frame, so the question supplies $O$, and relative to it the causal facts fix $\varepsilon = \tfrac12$.
- **Concessions.** The conventionalist grants that, given the worldline, only standard synchrony is causally definable; the anti-conventionalist grants that the theorem bites only if definability, time-reflection invariance included, is the test of the non-conventional, which is a philosophical choice.
- **Trap: Malament refuted conventionalism, or proved nothing.** He proved a uniqueness theorem whose premises are the dispute.

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Rietdijk-Putnam argument

**The argument that if what is simultaneous with an observer is real, and being real-for is transitive, the relativity of simultaneity makes future events already real.** C. W. Rietdijk (1966); Hilary Putnam, "Time and Physical Geometry" (1967).

- **Putnam's assumptions** (4.3). I-now am real; some other observer, perhaps moving relative to me, is real; "There Are No Privileged Observers": if all and only the things bearing a frame-independent relation $R$ to me-now are real, and you-now are real, the same holds for you-now, which he notes requires $R$ to be transitive; and what exists now is real, "now" read with each observer's own simultaneity.
- **The engine.** An observer passing me has events on his simultaneity slice that lie in my future; he is real for me, they are real for him, and transitivity makes them real for me. Enough observers reach every event. 4.3 runs it with an observer passing at $0.6c$.
- **Penrose's version.** The walking (Andromeda) case of *The Emperor's New Mind* (1989) is [`relativity` 1.1](../relativity/lessons/01-01-postulates-simultaneity.md) Example 2.
- **Conclusion and replies.** The [block universe](#block-universe); Stein's [point-relative becoming](#point-relative-becoming); the presentist's exits, a [preferred foliation](#preferred-foliation) or [frame-relative presentism](#frame-relative-presentism).
- **Trap: it proves determinism.** The conclusion is fatalism (Savitt's term): no law of motion appears in it ([determinism](#determinism), 5.1).

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Block universe

**The view that all events, past, present and future, are equally real, laid out in four-dimensional spacetime.** The conclusion of the [Rietdijk–Putnam argument](#rietdijk-putnam-argument). In metaphysics it is eternalism, whose verdict belongs to [`metaphysics` 5.2](../metaphysics/lessons/05-02-presentism-growing-block-eternalism.md).

- **The alternative Stein leaves.** On Callender's pricing, a present must contain some event besides its owner, and Stein's result leaves only the block for that ([point-relative becoming](#point-relative-becoming)).
- **Persistence** (4.3, [`metaphysics` 5.4](../metaphysics/lessons/05-04-endurance-perdurance-and-stages.md)). A thing wholly present at each moment must be wholly present on every slice of its history any frame cuts, so endurance needs frame- or foliation-relative presence. Perdurantists such as Yuri Balashov (*Persistence and Spacetime*, 2010) claim the advantage; Cody Gilmore ("Where in the Relativistic World Are We?", 2006) builds relativistic endurance in reply.
- **God and time.** Whether a timeless God fits a block better than a present is [`philosophy-of-religion` 1.4](../philosophy-of-religion/lessons/01-04-eternity-immutability-and-simplicity.md)'s question.
- **Trap: the block is determinism.** It is fatalism, reached without laws of motion; 5.1 separates the two ([determinism](#determinism)).

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Point-relative becoming

**Howard Stein's reply to Rietdijk and Putnam: becoming in relativity is relative to a spacetime point, not to a frame's slice, and the point's past light cone gives one such relation.** Stein, "On Einstein–Minkowski Space-Time" (1968) and "On Relativity Theory and Openness of the Future" (1991). Seek a relation "$y$ has already become for $x$" that is defined from spacetime's intrinsic structure, reflexive, transitive and not universal. One exists: $y$ lies in or on $x$'s past light cone. And if two distinct events bear such a relation to each other, it is universal.

- *In words:* a present that has not swallowed everything is a single point, so becoming is relative to a here-now, not to a frame's slice.
- **Not unique.** The result is that one such relation exists, not that the past light cone is the only one: its interior alone also qualifies (Clifton and Hogarth, 1995).
- **Callender's price** (2000). A present should contain some event besides its owner, yet the only alternative Stein's result leaves is the [block](#block-universe).
- **Trap: Stein rescues presentism.** On his view no event spacelike to you is present to you; there is no shared now.
- **Trap: Stein's view is frame-relative presentism.** He relativizes becoming to points, not frames.

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Frame-relative presentism

**The presentist reply to relativity that what is present, and so what exists, is relative to an inertial frame.** One of the two exits [`metaphysics` 5.1](../metaphysics/lessons/05-01-the-a-theory-and-the-b-theory.md) names for the presentist. The other is a privileged frame undetectable in principle, a [preferred foliation](#preferred-foliation) like the one Bohmian mechanics needs (3.3).

- **Its cost.** Existence itself would come out frame-relative, as [`metaphysics` 5.2](../metaphysics/lessons/05-02-presentism-growing-block-eternalism.md) states the objection.
- **Where the verdict lives.** The verdict on presentism belongs to metaphysics 5.2; 4.3 supplies the physics.
- **Trap: it is Stein's view.** Stein relativizes becoming to points ([point-relative becoming](#point-relative-becoming)).

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Poincare's disk world

**Poincaré's imagined world in which every body shrinks toward the edge by one temperature law, so that its inhabitants measure a non-Euclidean geometry while an outsider describes a Euclidean ball with a strange temperature.** *Science and Hypothesis* (1902; tr. W. J. Greenstreet, 1905), ch. IV, pp. 65–68. Poincaré describes a heated sphere; "disk world" is the usual name, after the usual drawing, a plane cross-section.

- **Set-up** (4.4, S1–S3). The world fills a sphere of Euclidean radius $R$. At Euclidean distance $r$ from the centre the absolute temperature is proportional to $R^2 - r^2$, so it is absolute zero at the rim. All bodies share one coefficient of expansion and take the local temperature at once, so a rod of central length $\ell_0$ has length $\ell(r) = \ell_0(R^2 - r^2)/R^2$. Light's refractive index is inversely proportional to $R^2 - r^2$, so rays bend, and Poincaré says they become circles.
- **What the inhabitants measure** (4.4, lengths in central rods). Distance from the centre $\rho(r) = \frac{R}{2}\ln\frac{R+r}{R-r}$, which grows without bound as $r \to R$: they "can never reach the boundary" (p. 65). Circumference $C = \pi R\sinh(2\rho/R) > 2\pi\rho$: Lobachevsky's geometry, of constant curvature $K = -4/R^2$, whose straight lines are the light rays.
- **Two descriptions, one world.** Euclid's geometry with the thermal laws, or Lobachevsky's with no thermal effect; every reading agrees ([geometric conventionalism](#geometric-conventionalism)).
- **What would break the tie.** One material with a different coefficient of expansion would make the heat differential and detectable; the set-up forbids it by fiat ([universal and differential forces](#universal-and-differential-forces)).
- **Reused.** 5.1's flashback adds a glass with a different expansion law.
- **Trap: it shows space is non-Euclidean.** Poincaré concluded that the choice is conventional, and expected Euclid to stay the most convenient.
- **Trap: a disk.** Poincaré's world is a sphere.

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Geometric conventionalism

**The thesis that which geometry physical space has is not an experimental fact but a choice, guided by experience and settled by convenience, because experiment tests geometry only together with physics.** Poincaré, *Science and Hypothesis* (1902): "One geometry cannot be more true than another; it can only be more convenient" (ch. III, p. 50, Greenstreet's translation). In Einstein's notation ("Geometry and Experience", 1921), only geometry plus the purport of physical laws, (G) + (P), faces experience.

- **The argument** (4.4, at outline). Experience tests only (G) + (P); in the [heated sphere](#poincares-disk-world) Euclid with the thermal laws and Lobachevsky without them predict every observation alike; the case generalizes, since any observation read in one geometry can be read in another by adjusting the physics (ch. V's challenge to find an experiment interpretable in Euclid's system but not in Lobachevsky's); so geometry is a convention. It is Duhem's holism ([`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md)) applied to space.
- **Background.** Kant made Euclidean geometry synthetic a priori; [`modern-philosophy` 5.2](../modern-philosophy/lessons/05-02-space-and-time-the-transcendental-aesthetic.md) teaches that, and its Example 2 maps the replies of Helmholtz, Reichenbach and Poincaré. Non-Euclidean geometries (Bolyai and Lobachevsky around 1830, Riemann in 1854) showed logic cannot choose.
- **Where it is weakest** (4.4). The generalization. James Weatherall and John Manchak ("The geometry of conventionality", 2014) argue that, with "force" understood in the standard way, a new force field can accommodate a different geometry in Newtonian gravitation but not in relativity, and the *Stanford Encyclopedia*'s Poincaré entry reports a long consensus that metric conventionalism is inconsistent with general relativity. The reply loosens "force": Patrick Duerr and Yemima Ben-Menahem (2022), and Duerr and James Read (2024), argue that current spacetime theories admit conventionalist readings.
- **Concessions.** The critic grants that a non-standard field can always redescribe; the conventionalist grants that this is the price, so the choice is between theory packages, not a free stipulation.
- **Reichenbach's sharpening.** [Universal and differential forces](#universal-and-differential-forces).
- **Popper.** His ban on the [conventionalist stratagem](../philosophy-of-science/lessons/02-01-popper-conjectures-and-refutations.md) targets the rescue move of the third premise.
- **Trap: convention means arbitrary.** Experience guides the choice without forcing it; Einstein's "chosen arbitrarily" compresses Poincaré.
- **Trap: one thesis with the conventionality of simultaneity.** They concern different structures, the metric and "at the same time" ([conventionality of simultaneity](#conventionality-of-simultaneity)); conventionalism about persistence ([`metaphysics` 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md)) is a third.

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Universal and differential forces

**Reichenbach's distinction: a differential force acts on different materials differently, so comparing materials detects it, as with real heat; a universal force acts on all materials alike and cannot be shielded.** *Philosophie der Raum-Zeit-Lehre* (1928).

- **In the heated sphere.** Poincaré's single coefficient of expansion makes his heat universal ([Poincaré's disk world](#poincares-disk-world)).
- **The coordinative definition.** Reichenbach's remedy sets universal forces to zero, which makes geometry empirical (4.4).
- **Gravity.** The [equivalence principle](#equivalence-principle) makes gravity act on every body alike, the mark of a universal force; general relativity absorbs it into a curved metric with its own field equations.
- **Detecting is not correcting** (4.4 P2). Comparing two materials detects a differential force but fixes only the ratio of their responses; corrected rods need a law of expansion for each material, with any remaining universal force set to zero.
- **Trap: differential because it varies from place to place.** What matters is whether it varies from material to material.

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Practical geometry

**Einstein's name for geometry completed by coordinating its concepts with practically rigid bodies, which makes it a natural science that experience can test.** "Geometry and Experience" (Prussian Academy address, 1921), in *Sidelights on Relativity*, tr. G. B. Jeffery and W. Perrett (1922), pp. 35–36.

- **His concession.** "*Sub specie aeterni* Poincare, in my opinion, is right": rods and clocks are "composite structures", not irreducible elements, so what they measure depends on laws physics has yet to supply.
- **His hedge.** Until rods and clocks can be constructed from theory, "in the present stage" of physics, he treats them as given, which makes geometry empirical.
- **What took up the task.** The [dynamical view of relativity](#dynamical-view-of-relativity) takes up the construction the hedge postpones (4.4).
- **Trap: Einstein's summary is Poincaré's view.** His "chosen arbitrarily" compresses Poincaré, for whom experience guides the choice.

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Principle and constructive theories

**Einstein's distinction between theories built from hypothetical constituents (constructive theories, like the kinetic theory of gases) and theories built on observed general properties (theories of principle, like thermodynamics, built on the impossibility of perpetual motion).** "Time, Space, and Gravitation", *The Times* (London), 28 November 1919: "The theory of relativity is a theory of principle."

- **Construction ranks higher.** The same article: "When we say that we understand a group of natural phenomena, we mean that we have found a constructive theory which embraces them."
- **In the relativity debate** (4.4). The question whether rods and clocks need a constructive account is the dispute between the [geometrical](#geometrical-view-of-relativity) and the [dynamical](#dynamical-view-of-relativity) views; John Norton argues that constructive relativity fails (2008).
- **Returns.** Kinetic theory as constructive and thermodynamics as principle come back in [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md).

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Geometrical view of relativity

**The view that spacetime's Minkowski structure is real and explains why every dynamical law is Lorentz covariant, and so why moving rods contract and moving clocks run slow.** Michel Janssen ("Drawing the line between kinematics and dynamics in special relativity", 2009); Tim Maudlin (*Philosophy of Physics: Space and Time*, 2012).

- **Its account** (4.4). Every law governs fields in Minkowski spacetime, hence is Lorentz covariant. An ideal clock measures proper time along its worldline ([clock hypothesis](#clock-hypothesis)). A rod's contraction is how one frame's simultaneity slices the worldtube of a rod at rest in another. One geometry explains at a stroke why all forces agree.
- **Bell's spaceships** (4.4 Example 2). Maudlin's explanation: the ships' worldlines are a distance $D$ apart on the launch frame's simultaneity slices and $\gamma D$ apart on their own, and no thread of natural length $D$ spans $\gamma D$ unstretched, whatever it is made of.
- **The challenge it faces.** Harvey Brown and Oliver Pooley (2006) ask by what mechanism a spacetime structure could constrain how matter behaves; the geometrical view answers that the explanation is structural rather than causal (4.4 P3).
- **A qualified version.** What James Read (2020) calls the qualified geometrical approach: given how a field couples to a structure, that structure explains the field's symmetries.
- **Trap: it predicts something different.** Both views agree on every prediction; the dispute is the direction of explanation.

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Dynamical view of relativity

**The view that relativistic effects such as length contraction are explained by the Lorentz-covariant dynamics of the matter in rods and clocks, and that Minkowski geometry codifies that shared symmetry rather than explaining it.** Harvey Brown, *Physical Relativity* (2005); Brown and Oliver Pooley, "Minkowski space-time: a glorious non-entity" (2006). Its ancestors are FitzGerald, Lorentz and Larmor; John Bell urged teaching relativity this way ("How to teach special relativity", 1976).

- **Its account** (4.4). A moving rod is shorter because the forces holding its parts apart, all Lorentz covariant, settle at a shorter equilibrium. Explanation runs from dynamics to geometry.
- **Bell's spaceships** (4.4 Example 2; Dewan and Beran's puzzle, 1959, made famous by Bell, 1976). Brown's explanation: in the launch frame the moving thread's Lorentz-covariant binding forces settle at an equilibrium length $D/\gamma$, so held at $D$ it is under real tension. Both views give the same breaking speed; no experiment lies between them.
- **Norton's objection** ("Why constructive relativity fails", 2008). Its matter laws already presuppose spatiotemporal structure, so the construction assumes part of what it was to construct.
- **In general relativity** (4.4). Brown (*Physical Relativity*, ch. 9) argues that rods and clocks survey even the curved metric only because of a dynamical fact secured by the strong equivalence principle: local physics takes special-relativistic form. Pooley (2013) and Read (2020) note that every side grants this, so there the views may cease to differ.
- **Its metaphysics.** It can adopt Huggett's [regularity relationalism](#regularity-relationalism) (4.4 Connections).
- **Trap: it revives Lorentz's ether.** Brown accepts every prediction of special relativity, with no ether and no preferred frame; the dispute is over explanation.

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Clock hypothesis

**An ideal clock's rate depends only on its instantaneous speed, not on its acceleration, so it measures the proper time along its worldline.** Stated in 4.4; no sibling course states it. Proper time itself is [`relativity` 1.4](../relativity/lessons/01-04-spacetime-interval-causality.md).

- **The twins** (4.4 Watch out). The travelling twin is younger because the two worldlines have unequal proper lengths. The "acceleration" of [`relativity` 1.3](../relativity/lessons/01-03-dilation-contraction-paradoxes.md) is the change of inertial frame that bends one of them, not something that slows the clock.
- **In the geometrical view.** It is what makes clocks read proper time ([geometrical view](#geometrical-view-of-relativity)).
- **Trap: acceleration slows the travelling twin's clock.** By the clock hypothesis, speed alone sets an ideal clock's rate.

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Equivalence principle

**Free fall is locally indistinguishable from inertial motion: all bodies fall alike, and in a small freely falling laboratory the non-gravitational laws take their special-relativistic form.** The physics, with its weak, Einstein and strong versions, is [`relativity` 5.1](../relativity/lessons/05-01-equivalence-principle.md)'s.

- **In 4.4.** It makes gravity act on every body alike, the mark of a [universal force](#universal-and-differential-forces), which general relativity absorbs into a curved metric. Brown's case that rods and clocks survey that metric rests on the strong version ([dynamical view](#dynamical-view-of-relativity)).
- **In 6.1.** Newton's Corollary VI, on which bodies all urged by equal accelerative forces along parallel lines move among themselves as if unforced, is its Newtonian ancestor; the equivalence principle is Corollary VI made local and universal (6.1 P2 and Connections).
- **Trap: equivalence holds globally.** It is local; a uniformly accelerating frame is flat spacetime in curvilinear coordinates ([`relativity` 5.1](../relativity/lessons/05-01-equivalence-principle.md)).

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Manifold substantivalism

**The points of the spacetime manifold exist in their own right, whatever fields sit on them, and each keeps its identity from model to model.** The target of John Earman and John Norton's hole argument ("What Price Spacetime Substantivalism?", 1987). 4.5 states it as premise P1, with two clauses: the points of the manifold $M$ represent spacetime points that exist independently of the metric $g$ and the matter fields $T$; and each point of $M$ represents the same spacetime point in every model.

- **The picture** (4.5). Paint a temperature pattern on a rubber band whose grains you can tell apart, and slide the pattern along inside one marked stretch. If the grains are real places, a grain that was at 30 degrees is now at 25, though every measurement comes out as before.
- **What it costs.** The [Earman–Norton dilemma](#earman-norton-dilemma).
- **Where it is weakest** (4.5). The second clause, the identity of points across possible worlds. Hoefer locates the whole trouble in that primitive identity ([anti-haecceitism](#anti-haecceitism)).
- **Primitive identity** is the haecceity, or bare particular, of [`metaphysics` 2.1](../metaphysics/lessons/02-01-substance-and-accident.md).
- **Trap: the target is Newton's or Clarke's substantivalism.** It is substantivalism about spacetime in its manifold form. Identifying spacetime with manifold plus metric (Hoefer, 1996) is not hit in the same way.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md)

### Active and passive diffeomorphisms

**A passive transformation relabels the points and leaves the fields where they are: a change of coordinates. An active one moves the fields to new points of the same manifold and keeps the labels.** Separated in 4.5; no earlier course draws the distinction.

- **One formula, two readings** (4.5). Write a diffeomorphism $\varphi$ in a chart as $y = \varphi(x)$. Passive: keep the metric $g$ and adopt $y$ as coordinates, so the components become

$$g'_{\mu\nu}(y) = \frac{\partial x^\alpha}{\partial y^\mu}\frac{\partial x^\beta}{\partial y^\nu}\,g_{\alpha\beta}(x).$$

- **Active**, the same formula read the other way: keep the chart and replace $g$ by the [pushforward](#pushforward-of-a-field) $\varphi_*g$, whose components at the point labelled $y$ are those same numbers. *In words:* new names for the same points, or the same names for a new distribution.
- **The Leibniz shifts are active** (4.1). They move the matter while space stays put, which only a substantivalist can describe; renaming the origin is passive and alters no fact on anyone's view.
- **General covariance as the physics courses state it.** [`relativity` 4.1](../relativity/lessons/04-01-manifolds-tangent-spaces.md) states it passively, and [`relativity` 5.3](../relativity/lessons/05-03-einstein-field-equations.md) calls four metric components "pure gauge" in that sense: fair physics, and harmless. The hole argument runs on the active reading ([general covariance](#general-covariance)).
- **What the mathematics leaves open** (4.5 Example 2). Of two configurations related by a diffeomorphism it says only that they are isomorphic, not whether they are one world in two charts, two worlds, or one world described twice.
- **Trap: a shift is a change of coordinates.** A change of coordinates is passive; the shift is active.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.5](lessons/04-05-the-hole-argument.md)

### General covariance

**The demand that the laws hold in every coordinate system (passive general covariance), or the fact that any diffeomorphic redistribution of a solution's fields is again a solution (active general covariance).** Einstein, "The Foundation of the General Theory of Relativity" (1916), §3, which says the requirement "takes away from space and time the last remnant of physical objectivity" ([point-coincidence argument](#point-coincidence-argument)).

- **Kretschmann's objection** (1917). Any theory can be given generally covariant form, so passive covariance alone constrains nothing.
- **Active covariance** is premise P3 of 4.5's reconstruction, the Lemma: redistribute a solution and you get a solution.
- **The count behind it.** [`relativity` 5.3](../relativity/lessons/05-03-einstein-field-equations.md) P1: of ten equations for ten metric components only six evolve the geometry, leaving four free functions. Read passively they are a choice of coordinates; read actively, they are the hole map's room.
- **Trap: the hole argument attacks relativity 4.1's general covariance.** That is the passive kind; the argument needs the active kind, which moves fields over fixed points.
- **Left to you.** Why the pushed-forward metric again solves Einstein's equations is part of Boss 4(d)'s proof; the card does not give it.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md)

### Pushforward of a field

**Carrying a field along a diffeomorphism $\varphi$: the pushed field assigns to the point $\varphi(p)$ what the original assigned to $p$.** *In words:* whatever held at $p$ now holds at $\varphi(p)$. The convention is [`differential-geometry` 2.4](../differential-geometry/lessons/02-04-vector-fields-pushforward.md)'s: vectors push forward, functions and covectors pull back. Diffeomorphisms are [`differential-geometry` 2.2](../differential-geometry/lessons/02-02-smooth-maps-diffeomorphisms.md).

- **A scalar field $f$:** $\varphi_*f = f\circ\varphi^{-1}$.
- **The metric $g$:** $\varphi_*g = (\varphi^{-1})^*g$, the pullback by the inverse, carried over by $\varphi$'s derivative. Boss 4(d) writes $\varphi_*g$.
- **A short flow.** If $\varphi$ is the flow of a vector field $X$ for a short parameter $s$, then $\varphi_*g = g - s\,\mathcal{L}_X g + O(s^2)$, with $\mathcal{L}_X$ the Lie derivative ([`differential-geometry` 5.3](../differential-geometry/lessons/05-03-lie-derivative-killing-vectors.md)).
- **Worked on a line.** 4.5 Example 1 pushes a temperature field and a metric through a hole map on $\mathbb{R}$, and shows that components change while distances between labelled features do not.
- **Trap: pushing the wrong way.** Computing $f(\varphi(y))$ instead of $f(\varphi^{-1}(y))$.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md)

### Cauchy surface

**A slice of spacetime that every inextendible timelike curve crosses exactly once, on which initial data are set.** 4.5 uses it to state the hole construction: the closure of the hole $H$ lies to the future of a Cauchy surface $\Sigma$.

- **In 5.1.** Vacuum data on a Cauchy surface that satisfy the constraints ([`relativity` 5.3](../relativity/lessons/05-03-einstein-field-equations.md)) have a maximal development that is unique up to diffeomorphism (Choquet-Bruhat and Geroch, 1969). That qualifier is where the [hole argument](#hole-argument) lives.
- **Trap: a Cauchy horizon.** A different thing: a boundary beyond which the data fix nothing, even up to diffeomorphism ([Cauchy horizon](#cauchy-horizon), 5.1).

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md)

### Hole argument

**A diffeomorphism that is the identity outside a region $H$ carries one solution of general relativity to another that agrees with it outside $H$, and so on an earlier Cauchy surface, but differs inside; a substantivalist who counts the two as different worlds must call the theory indeterministic.** Einstein devised it late in 1913 against generally covariant theories (his hole, *Loch*, was free of matter), spent two years on a theory of limited covariance, and came back to covariant equations in November 1915. John Stachel (1980) showed it was no slip; Earman and Norton ("What Price Spacetime Substantivalism?", 1987) turned it on the substantivalist.

- **The construction** (4.5, at outline). A model $\langle M, g, T\rangle$: a four-dimensional manifold $M$ of events, a metric $g$ of signature $(-,+,+,+)$ and matter fields $T$, with $G_{\mu\nu}[g] = \frac{8\pi G}{c^4}T_{\mu\nu}$, where $G_{\mu\nu}[g]$ is the Einstein tensor of $g$ and $G$ in the coupling is Newton's constant. A hole diffeomorphism $\varphi$ is the identity outside $H$ but not inside, with the closure of $H$ to the future of a [Cauchy surface](#cauchy-surface) $\Sigma$. Then $\langle M, \varphi_*g, \varphi_*T\rangle$ is also a solution, agrees with the first outside $H$, and agrees with it on every invariant.
- **The picture.** Same data on $\Sigma$, same coincidences everywhere, different answers to whether a galaxy passes through an event $E$ in $H$: two worlds for the manifold substantivalist, one drawn twice under [Leibniz equivalence](#leibniz-equivalence).
- **Premises and conclusion.** Under the [Earman–Norton dilemma](#earman-norton-dilemma).
- **Its ancestry** (4.5). Leibniz's [static shift](#static-shift) done locally and smoothly: the shift moved every body over fixed places, the hole map moves fields over fixed events.
- **Its descendants.** 5.1 separates its indeterminism, which Leibniz equivalence removes, from a [Cauchy horizon](#cauchy-horizon)'s, which it does not. In 6.1, once a theory is rebuilt in Galilean spacetime, what remains is the hole argument's question: are models differing only in which points the bodies occupy distinct? 6.2 asks it of gauge.
- **Trap: it shows general relativity is indeterministic.** It shows that relativity plus manifold substantivalism is; under Leibniz equivalence the development into $H$ is unique up to diffeomorphism.
- **Trap: the hole is empty, or a black hole.** It is any region outside which the map is the identity; Einstein's 1913 hole was matter-free, the modern one need not be.
- **Left to you.** Why the pushed-forward metric solves the field equations, and why it agrees with $g$ on $\Sigma$ and on every Cauchy surface that misses $H$, are Boss 4(d)'s proof; the card states the results without it.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md), [5.1](lessons/05-01-determinism-in-physical-theories.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Point-coincidence argument

**Einstein's 1916 argument that all physical verification comes down to coincidences of events, which survive any smooth redistribution, so models related by a diffeomorphism say the same thing.** "The Foundation of the General Theory of Relativity" (1916), §3 (Perrett and Jeffery's translation, 1923; Dover reprint, p. 117). The name is John Stachel's.

- **The step it takes** (4.5 Source). From what can be verified (if events were only the motions of material points, "nothing would be observable but" their meetings) to what is physically real: general covariance "takes away from space and time the last remnant of physical objectivity". That is the step Leibniz takes in the Fifth Paper §52 ([observability principle](#observability-principle)).
- **Standard reading.** A defence of what is now called [Leibniz equivalence](#leibniz-equivalence), made without mentioning the hole.
- **Trap: an argument for substantivalism.** It mentions point-events, but its upshot is that redistributed models agree on everything physical.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md), [5.2](lessons/05-02-chaos-and-predictability.md)

### Leibniz equivalence

**Models whose fields are related by a diffeomorphism represent the same physical situation.** Earman and Norton's name (1987), after Leibniz's [static shift](#static-shift).

- **Who must deny it.** The manifold substantivalist, who counts the hole-related models as two worlds (C1 of 4.5's reconstruction).
- **What it buys.** The development into the hole becomes unique up to diffeomorphism, and the hole's indeterminism goes (4.5; 5.1).
- **Its defenders.** Einstein's [point-coincidence argument](#point-coincidence-argument) is standardly read as one. James Weatherall (2018) argues, without ruling on substantivalism, that mathematical practice already treats isomorphic models as one; Oliver Pooley and James Read (2021) reply that practice does not settle what models represent.
- **Clarke.** His reply to the static shift, that things exactly alike are still two, is a denial of Leibniz equivalence (4.5 Connections).
- **In 6.1.** It is the [symmetry-to-reality inference](#symmetry-to-reality-inference) applied to diffeomorphisms.
- **Trap: it is passive general covariance.** Passive covariance is about descriptions of one model; Leibniz equivalence is about what two models represent.
- **Left to you.** What accepting it commits a substantivalist to, and whether that is a cost, is Boss 4(e)'s essay.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md), [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.2](lessons/05-02-chaos-and-predictability.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Earman-Norton dilemma

**Either keep manifold substantivalism and accept that general relativity is radically indeterministic about facts no observation could reach, or accept Leibniz equivalence and give manifold substantivalism up.** Earman and Norton, "What Price Spacetime Substantivalism?" (1987). Their methodological premise: whether a theory is deterministic should be settled by physics, not forced by a metaphysics of points.

- **4.5's reconstruction, at outline.** P1, [manifold substantivalism](#manifold-substantivalism). P2, literal representation: every solution, so read, represents a physically possible world. P3, active [general covariance](#general-covariance). P4: the two hole-related models agree on every invariant (lengths, proper times, accelerations, which worldlines meet), so on every observation. C1: they are two possible worlds, so [Leibniz equivalence](#leibniz-equivalence) is denied. C2: they agree on $\Sigma$ and outside $H$ yet differ inside, so the theory is indeterministic about a difference P4 makes undetectable ([determinism](#determinism) is defined in 5.1).
- **The replies** (4.5). Relationalism: accept Leibniz equivalence. Accept or redefine: the indeterminism concerns only which points bear which properties, or determinism is redefined as agreement up to diffeomorphism (Butterfield, 1989; Brighouse, 1994; Melia, 1999). [Metric essentialism](#metric-essentialism) denies P2. [Anti-haecceitist substantivalism](#anti-haecceitism) denies P1's second clause.
- **Where it is weakest** (4.5). P1's second clause. Hoefer: a substantivalist needs points to exist and bear the metric, not to carry identities across worlds. The reply: stripped of trans-world identity, it is unclear what the substantivalist asserts, and Dasgupta (2011) finds the view metaphysically obscure.
- **Concessions.** The critic grants that a substantivalist without primitive identity escapes this argument and must be met by another (Norton, 1988, offers variants); the defender grants that if points had primitive identity the indeterminism would be real, as most philosophers of physics seem to conclude.
- **Trap: deny P3.** Active covariance is a theorem of the theory, not a premise anyone can drop while keeping general relativity.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md), [5.2](lessons/05-02-chaos-and-predictability.md)

### Sophisticated substantivalism

**Any substantivalism that denies that hole-related models represent distinct possibilities, so keeps spacetime points while escaping the hole argument.** Named by Gordon Belot and John Earman (2001), in what the *Stanford Encyclopedia* calls "a somewhat pejorative sense".

- **Its versions** (4.5). Maudlin's [metric essentialism](#metric-essentialism) is one; the [anti-haecceitist](#anti-haecceitism) substantivalism of Hoefer (1996) and Pooley (2006) is another.
- **Against Leibniz's shifts** (4.1). The substantivalist must accept differences that no quality marks, or stop counting shifted worlds as two, the anti-haecceitist route.
- **Structural realism.** If points' identity derives from their relations, the hole argument joins the identity of quantum particles as physics' case for [ontic structural realism](#ontic-structural-realism) (Ladyman, 1998; Stachel; Saunders; [`philosophy-of-science` 5.3](../philosophy-of-science/lessons/05-03-structural-realism.md)); Pooley (2006) denies that the analogy runs deep.
- **Trap: the rival of metric essentialism.** It is the family; metric essentialism is one member.
- **Left to you.** Whether it escapes the hole argument without collapsing into relationalism, and how the reply compares with Clarke's answer to the static shift, is Boss 4(e)'s essay; the card takes no side.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.5](lessons/04-05-the-hole-argument.md)

### Metric essentialism

**Each spacetime point bears its metrical relations essentially, so a redistributed model that gives the same points different metrical relations describes no possible world.** Tim Maudlin, "The Essence of Spacetime" (1989) and "Substances and Spacetimes: What Aristotle Would Have Said to Einstein" (1990).

- **Against the hole argument** (4.5). It denies P2, literal representation, and keeps the identity of points across worlds: of the hole-related pair, at most one is possible.
- **Its family.** It is one version of [sophisticated substantivalism](#sophisticated-substantivalism), not its rival.
- **Its neighbour.** An essentialism of the kind [`metaphysics` 2.4](../metaphysics/lessons/02-04-essence-and-grounding.md) examines.
- **Open in 4.5.** Its crux with anti-haecceitism, and what each pays, is 4.5 P3.
- **Trap: Maudlin accepts Leibniz equivalence as stated.** He denies that the redistributed model is a possibility at all.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md)

### Anti-haecceitism

**Spacetime points exist, but nothing makes a point in one possible world the same as a point in another beyond its structural role, so hole-related models represent one possibility described twice.** Carl Hoefer ("The Metaphysics of Space-Time Substantivalism", 1996); Oliver Pooley ("Points, Particles, and Structural Realism", 2006).

- **Against the hole argument** (4.5). It denies P1's second clause, the trans-world identity of points. Hoefer locates the whole trouble in ascribing primitive identity to points.
- **The objection.** Without trans-world identity, it is unclear what the substantivalist asserts; Shamik Dasgupta (2011) finds the view metaphysically obscure.
- **In metaphysics.** Counterparts in place of trans-world identity are [`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md); haecceity, or primitive thisness, is [`metaphysics` 2.1](../metaphysics/lessons/02-01-substance-and-accident.md). In 4.1's terms, the haecceitist accepts differences between worlds that no quality marks, and the anti-haecceitist stops counting shifted worlds as two.
- **Its family.** One version of [sophisticated substantivalism](#sophisticated-substantivalism).
- **Left to you.** Whether it collapses into relationalism is Boss 4(e)'s question.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md)

**Module 5: Determinism, time's arrow, and probability**

### Determinism

**A theory is deterministic when any two histories its laws allow that agree in complete state at one instant agree at every instant.** John Earman, *A Primer on Determinism* (1986), stated over possible worlds, and "Aspects of Determinism in Modern Physics" (2007), stated with histories, the form 5.1 uses. *In words:* the laws are an editor accepting or rejecting whole films, and two accepted films that share one frame share every frame.

- **The definition** (5.1). A history $H$ assigns to each time $t$ a complete state $H(t)$: for particles, every position and velocity. The theory is *Laplacian deterministic* iff, for any histories $H_1, H_2$ satisfying its laws, $H_1(t) = H_2(t)$ for some $t$ implies $H_1(t') = H_2(t')$ for all $t'$. Restricting $t'$ to later times gives future determinism, to earlier times past determinism; under [time-reversal invariant](#time-reversal-invariance) laws the two stand or fall together.
- **Of theories.** It is a property of a theory, and of our world only through whichever theory is true. It is two-sided: one frame fixes the past as well as the future.
- **What it presupposes.** A global time (in relativity, a choice of slicing), a line between laws and initial conditions (the best-system account of [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md) draws one), and a fixed notion of state.
- **The consequence argument's version.** [`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md)'s "remote past P0 plus laws L entail every later state" is the future variant, stated of the world.
- **The scorecard** (5.1). Newtonian mechanics as written fails: [Norton's dome](#nortons-dome), [space invaders](#space-invaders), and a simultaneous triple collision with only the conservation laws as a collision rule (SEP, "Causal Determinism"). Special relativity's light cone excludes invaders. In general relativity vacuum data fix the development up to diffeomorphism (Choquet-Bruhat and Geroch, 1969), the qualifier the [hole argument](#hole-argument) lives in, and nothing fixes what lies beyond a [Cauchy horizon](#cauchy-horizon). Quantum theory splits by interpretation: [Bohmian mechanics](#bohmian-mechanics) and the Everettian universal state are deterministic, [GRW](#grw-theory) and textbook collapse are not; quantum mechanics also cures the collision and non-collision singularities of classical point masses (Earman 2007).
- **Chaos passes** (5.2). The logistic map, Lorenz's 1963 equations, Newtonian billiards and Laskar's averaged planets all pass the test, so chaos cannot by itself make a theory indeterministic ([determinism and predictability](#determinism-and-predictability)).
- **In general relativity** (4.5). The hole argument's indeterminism disappears under [Leibniz equivalence](#leibniz-equivalence); the redefinition of determinism as agreement up to diffeomorphism is under the [Earman–Norton dilemma](#earman-norton-dilemma).
- **Not time-reversal invariance** (5.3). The Boltzmann equation is future-deterministic without being invariant; Newton's laws on the dome are invariant without being deterministic.
- **Trap: determinism is predictability.** A puck balanced on a hemisphere is unstable yet determined, and a chaotic model defeats every finite predictor while passing Earman's test.
- **Trap: "quantum mechanics is indeterministic".** A fact about an interpretation, not about the formalism: the [many-worlds](#many-worlds-interpretation) state never jumps, and Bohm's particles never hesitate.
- **Trap: the hole and the dome are one indeterminism.** The hole's alternatives differ in no observable respect and merge under Leibniz equivalence; the dome's differ in where the ball is.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md), [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.2](lessons/05-02-chaos-and-predictability.md), [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### Determinism and fatalism

**Determinism makes an outcome depend on what came before, including what you do; fatalism says the outcome comes whatever you do.** The contrast is stated and owned by [`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md); 5.1 uses it only to locate its own definition, which is about theories.

- **Where the guarantee lives.** For determinism, in laws plus a complete state at a time ([determinism](#determinism)). A fated outcome is guaranteed however you act, so it does not run through your action at all.
- **In 4.3.** The block-universe conclusion of the [Rietdijk–Putnam argument](#rietdijk-putnam-argument) is fatalism (Savitt's term), not determinism: no law of motion appears in it.
- **Trap: determinism makes deliberation idle.** On determinism your choice is among the causes of the outcome; that it was itself fixed earlier is a different claim from the outcome's coming regardless.

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Laplace's intelligence

**Laplace's image of an intellect that, given for one instant all the forces of nature and the situation of every being, would see the future and the past alike.** Laplace, *A Philosophical Essay on Probabilities*, ch. II (tr. F. W. Truscott and F. L. Emory, 1902): for it, "nothing would be uncertain and the future, as the past, would be present to its eyes".

- **How 5.1 reads it.** Laplace says "an intelligence"; "demon" is a later gloss. Staging the thesis through a knower weaves predictability into it, so a definition must take the knower out, as Earman's does ([determinism](#determinism)). "Given for one instant" makes it a thesis about the state at a time; "the future, as the past" makes it two-sided. The data named are forces and "situation", that is, positions: with a second-order law like $F = ma$ the state must include velocities too (5.1's own observation).
- **Its backdrop** (5.2). Laplace and Lagrange showed the planets move quasiperiodically to first order in the masses. Jacques Laskar (*Nature*, 1989) integrated an averaged model and found the planets chaotic, with largest [Lyapunov exponent](#lyapunov-exponent) about one per five million years; the theory still fixes the configuration a billion years out, but stating it would take about 87 correct digits of the present.
- **Poincaré's reply** (5.2 Source). He grants the intelligence's conditional ("we could predict exactly") and puts chance in the gap between "exactly" and "approximately" ([sensitive dependence](#sensitive-dependence)).
- **Trap: it is the definition of determinism.** It is a dramatization that mixes determinism with predictability ([determinism and predictability](#determinism-and-predictability)).

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.2](lessons/05-02-chaos-and-predictability.md)

### Lipschitz condition

**A function $f$ is Lipschitz near $x_0$ if $|f(x) - f(y)| \le K|x - y|$ there, for some constant $K$: its slope is bounded.** With it, the Picard–Lindelöf theorem gives exactly one local solution of $\dot x = f(x)$ through $x_0$; a second-order law is first written as a first-order one in position and velocity. Cited in 5.1; [`dynamical-systems` 1.1](../dynamical-systems/lessons/01-01-flows-on-the-line.md) and [`ode-refresher` 1.1](../ode-refresher/lessons/01-01-odes-solutions-slope-fields.md) state uniqueness under a continuous derivative, a stronger hypothesis. *In words:* a force whose slope is bounded cannot let two motions leave one state.

- **Where the dome fails it.** On [Norton's dome](#nortons-dome) the force is $\sqrt r$, with $\frac{d\sqrt r}{dr} = \frac{1}{2\sqrt r}$ unbounded as $r \to 0$: no $K$ works at the apex. At the one point where the force vanishes it switches on infinitely steeply.
- **Silent, not violated.** Without the condition the theorem says nothing; it is not refuted. Dynamical-systems 1.1's rule that a trajectory never reaches a fixed point in finite time holds under its stated hypothesis, and the dome is a case where the hypothesis fails.
- **Is it part of Newtonian mechanics?** Alexandre Korolev (2007): yes, tacitly, tied to the reversibility of solutions, so the dome's extra solutions are physically impossible artefacts. John Norton (2008): adding it is a fourth law and makes a new theory. David Malament (2008): until the theory's admissible forces and surfaces are specified, the question has no settled answer.
- **Trap: failure guarantees indeterminism.** Bounded slope is sufficient for uniqueness, not necessary; where it fails, uniqueness may fail in one time direction, both, or neither, and each case must be checked.

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### Norton's dome

**A frictionless dome on which a mass at rest at the apex may, by Newton's laws, stay forever or begin to slide at any time, in any direction, with nothing to push it.** John Norton, "Causation as Folk Science" (*Philosophers' Imprint*, 2003), §3; defended in "The Dome: An Unexpectedly Simple Failure of Determinism" (2008).

- **The set-up** (5.1). A unit point mass slides without friction in a gravitational field $g$. At arc length $r$ from the apex the surface lies a depth $h = \frac{2}{3g}r^{3/2}$ below it, so the tangential force is $g\,\frac{dh}{dr} = r^{1/2}$, outward, and $\ddot r = \sqrt r$. Started at rest at the apex at $t = 0$, $r(t) = 0$ for all $t$ solves it; so, for every $T \ge 0$ and every radial direction, does rest until $T$ followed by $r(t) = \frac{(t-T)^4}{144}$ for $t > T$. The force fails the [Lipschitz condition](#lipschitz-condition) at the apex.
- **Norton's two glosses.** The first law holds throughout: until $T$ the mass sits unaccelerated at the force-free apex, and after $T$ it is off the apex and pushed; there is no first instant of motion, only a last instant of rest. And the theory supplies no probabilities: a distribution uniform over departure times cannot be normalized.
- **The reversed film.** A mass launched toward the apex with just the right speed arrives there at rest in finite time (on a hemisphere the final approach takes infinitely long); spontaneous departure is that film run backward, so past and future determinism both fail ([time-reversal invariance](#time-reversal-invariance)).
- **The argument** (5.1, at outline). P1: Newtonian mechanics (three laws, uniform gravity, rigid frictionless surfaces) admits the dome. P2: on it, two lawful histories agree at $t = 0$ and differ afterwards. C: Newtonian mechanics so construed is not deterministic by Earman's definition ([determinism](#determinism)).
- **Where it is weakest: P1.** Korolev (2007): the Lipschitz condition is a tacit part of the theory. Critics add that the apex has infinite curvature, a shape any elastic give would destroy, and that every dome of finite apex curvature is deterministic. Malament ("Norton's Slippery Slope", 2008): until we say which forces and surfaces Newtonian particle mechanics admits, its determinism has no settled answer. Norton replies that each idealization is textbook-standard (a sharp table edge has no tangent at all; the dome has one everywhere), that a Lipschitz requirement is a fourth law, and that discarding idealizations only when they yield indeterminism imposes determinism by fiat.
- **Concessions.** The critic: the three laws as written admit the motion. Norton: no real dome exists, and such indeterminism is exceptional with finitely many degrees of freedom (he suggests it is generic with infinitely many). Neither side takes it as news about our world: quantum mechanics forbids a mass exactly at rest at a point, as Norton grants.
- **Trap: the ball leaves at random.** Newtonian theory assigns no probabilities to the departure at all.
- **Trap: it is the hole argument again.** The dome's histories differ in where the ball is; the hole's differ in no observable respect ([hole argument](#hole-argument)).
- **Left to you.** Checking the solution family (including continuity at $T$) and setting the range of positions it allows at a later time against a chaotic [predictability horizon](#predictability-horizon) are Boss 5(a)'s; the card gives neither.

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.2](lessons/05-02-chaos-and-predictability.md), [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### Space invaders

**Earman's name for Newtonian histories in which bodies arrive from spatial infinity in finite time, with nothing in the earlier state announcing them.** John Earman, *A Primer on Determinism* (1986), ch. III.

- **Where they come from** (5.1). Newtonian mechanics sets no bound on speeds, so a particle can reach spatial infinity in finite time. An escape and the empty world can agree after the escape and differ before it, so escapes defeat past determinism; the time reverse of an escape is an invader, which defeats future determinism. Gravitating point masses supply examples ([non-collision singularities](#non-collision-singularities)).
- **Excluded by relativity.** Special relativity's light cone rules invaders out from inside the dynamics, with no added clause (5.1).
- **Trap: they need a collision.** Xia's five-body escape involves none.

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Non-collision singularities

**Solutions of the Newtonian many-body problem that end in finite time without any collision, the bodies running off to infinity.** Conjectured by Paul Painlevé in the 1890s; proved for five bodies by Zhihong Xia, "The Existence of Noncollision Singularities in Newtonian Systems" (*Annals of Mathematics*, 1992).

- **Why 5.1 needs them.** Newtonian gravity is [time-reversal invariant](#time-reversal-invariance), so the reverse of a Xia escape is a gravitational [space invader](#space-invaders): no special forces or surfaces are required to defeat determinism.
- **The collision cousin** (5.1 Example 1). With conservation of momentum and kinetic energy as the only rule, three equal particles meeting at once at 120 degrees leave the outgoing directions open (SEP, "Causal Determinism"); determinism fails at the triple collision unless a rule is added. For two beads, conservation leaves two roots and impenetrability, part of what "bead" means, picks the bounce.
- **The quantum cure.** Quantum mechanics cures the collision and non-collision singularities of classical point masses (Earman 2007).
- **Trap: a spacetime singularity.** The singularity is of the solution, which stops existing; nothing in space is singular.

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Cauchy horizon

**The boundary of the region that data on a slice fix, beyond which the spacetime can be continued in more than one way, even up to diffeomorphism.** 5.1, following Earman (2007).

- **The theorem behind it.** Vacuum data on a [Cauchy surface](#cauchy-surface) that satisfy the constraints ([`relativity` 5.3](../relativity/lessons/05-03-einstein-field-equations.md)) have a maximal development that is unique up to diffeomorphism (Yvonne Choquet-Bruhat and Robert Geroch, 1969). The qualifier "up to diffeomorphism" is where the [hole argument](#hole-argument) lives, and [Leibniz equivalence](#leibniz-equivalence) removes that indeterminism. Past a Cauchy horizon the data fix nothing, so Leibniz equivalence cannot help.
- **Example.** The inner horizon of the charged and rotating holes of [`relativity` 6.4](../relativity/lessons/06-04-kerr-charged-holes.md).
- **Strong cosmic censorship.** Roger Penrose's conjecture that such horizons are not generic; whether a version holds is open (5.1).
- **Trap: the event horizon.** Outside a black hole's event horizon nothing goes wrong; the failure lies beyond the inner horizon.
- **Trap: a Cauchy surface.** The surface is where data are set; the horizon is where their reach ends.

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Determinism and predictability

**Determinism concerns what the present state and the laws fix; predictability concerns what a finite knower can compute from data good to finite precision.** "Determinism is not predictability" is [`dynamical-systems` 4.2](../dynamical-systems/lessons/04-02-sensitive-dependence.md)'s summary; [`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md) separates the two in words; 5.1 makes determinism a property of theories and 5.2 measures the gap.

- **Chaos separates them** (5.2). An error grows like $\delta_0 e^{\lambda t}$ while small, so at any fixed $t$ it goes to 0 as the initial error $\delta_0$ does: exact data still fix a chaotic model's future, and what fails is any one precision good for all $t$ ([predictability horizon](#predictability-horizon)). This is settled mathematics, whichever reading of the world one takes.
- **Both converses fail.** A deterministic theory can defeat every finite predictor; chancy outcomes can be practically predictable. A puck balanced on a hemisphere is unstable yet determined (5.1). Bohmian mechanics is deterministic, yet no one can predict its outcomes better than the Born probabilities ([Bohmian mechanics](#bohmian-mechanics)).
- **The argument from one to the other** (5.2). Karl Popper argued this way in 1950 and later defined determinism through predictability (*The Open Universe*, 1982); John Polkinghorne (*Science and Creation*, 1988) used critical realism, on which what we can know guides what there is, to read chaotic sensitivity as openness in nature. P1: in a chaotic system no finite precision fixes the outcome beyond a finite horizon. P2: what no possible measurement could fix is not fixed by the present state. C: a chaotic system's future is not fixed by its present.
- **Where it stands.** As a claim about theories C is false, since chaotic models pass Earman's test ([determinism](#determinism)). As a claim about the world, P2 carries all the weight and chaos supplies only P1. Physics-based candidates for P2: [finite-information quantities](#finite-information-quantities); the determinist's reply leans on the [faithful model assumption](#faithful-model-assumption).
- **Trap: the slide.** Passing from "no measurement we could make fixes it" to "nothing fixes it" is this conflation; it needs P2 stated and defended.

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.2](lessons/05-02-chaos-and-predictability.md)

### Sensitive dependence

**In a chaotic system nearby states separate exponentially fast while the separation is small: $\delta(t) \approx \delta_0 e^{\lambda t}$, with $\delta_0$ the initial separation and $\lambda > 0$ the largest [Lyapunov exponent](#lyapunov-exponent).** The physics is [`dynamical-systems` 4.2](../dynamical-systems/lessons/04-02-sensitive-dependence.md); Edward Lorenz found it in a weather model in 1963.

- **Poincaré's statement** (5.2 Source: *Science and Method*, Book I, ch. IV "Chance", tr. Francis Maitland, 1914, pp. 67–68): "it may happen that small differences in the initial conditions produce very great ones in the final phenomena". He calls the outcome "fortuitous" while asserting the determinism beneath it; chaos breaks the standard of "that is all we require", not the laws.
- **The digit picture** ([`dynamical-systems` 5.5](../dynamical-systems/lessons/05-05-symbolic-dynamics-ergodicity.md)). The logistic map at $r = 4$ is, in disguise, a shift that brings one more binary digit of the present state into play at each step. The future is written in the present's far digits: determinism says they are there, prediction needs someone to have read them.
- **Berry's electron** (5.2 Example 2). Michael Berry (1978), reporting a calculation he credits to Boris Chirikov: the gravity of one electron at the edge of the observable universe spoils prediction of an oxygen molecule's path after about 56 collisions, roughly nine nanoseconds. Every input sits inside a logarithm, so any plausible inputs give 45 to 63. Since gravity cannot be screened, the deterministic theory fixes the gas's future only together with everything within ten billion light years; whether a determinism true only of the whole universe matters for local claims is where the two sides part.
- **Maxwell's instability** (1873; *Life of Maxwell*, 1882, p. 440): an infinitely small variation making a finite difference in finite time. Smooth single-scale chaos does not meet it, since at any fixed time the difference shrinks to zero with the cause. It fits [Norton's dome](#nortons-dome), or many-scale flows if Lorenz's 1969 result holds for them.
- **Trap: chaos is randomness in the laws.** Chaotic laws are deterministic; unpredictability is a fact about finite data.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Lyapunov exponent

**The long-run average exponential rate $\lambda$ at which nearby trajectories separate; positive for chaos.** Defined and computed in [`dynamical-systems` 4.4](../dynamical-systems/lessons/04-04-lyapunov-exponents.md).

- **Three times** (5.2). The Lyapunov time $1/\lambda$, in which an error grows by a factor $e$; the doubling time $T_d = \ln 2/\lambda$, [`atmospheric-science` 6.5](../atmospheric-science/lessons/06-05-predictability-two-week-limit.md)'s form; and the [predictability horizon](#predictability-horizon), the Lyapunov time multiplied by $\ln(\Delta/\delta_0)$.
- **Cases.** The logistic map $x_{n+1} = 4x_n(1 - x_n)$ has $\lambda = \ln 2$ per step, one binary digit per step ([`dynamical-systems` 5.5](../dynamical-systems/lessons/05-05-symbolic-dynamics-ergodicity.md)). Laskar's averaged planets: about one per five million years, so a Lyapunov time of five million years (5.2 Example 1).
- **An average.** Local stretching varies and can be negative, so an error injected where it is negative first shrinks; Bishop counts this among the conditions on [chaos amplification](#chaos-amplification).
- **Trap: $1/\lambda$ is the horizon.** It is the Lyapunov time; the horizon multiplies it by the logarithm of tolerance over initial error.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Predictability horizon

**The time $t_h = \frac{1}{\lambda}\ln\frac{\Delta}{\delta_0}$ after which an initial error $\delta_0$ has grown to the tolerance $\Delta$, $\lambda$ being the largest Lyapunov exponent.** Derived in 5.2; the thousandfold-precision example is [`dynamical-systems` 4.2](../dynamical-systems/lessons/04-02-sensitive-dependence.md)'s. *In words:* the horizon counts the factors of $e$ between starting error and tolerance.

- **Its three assumptions** (5.2). A1, linearized growth: $\delta(t) \approx \delta_0 e^{\lambda t}$ while $\delta$ is small. A2, a tolerance $\Delta$ below the size of the attractor, past which the forecast is useless. A3, one scale: one $\lambda$ governs errors of every size.
- **Digits.** Each extra decimal digit of initial precision buys $\ln 10/\lambda$ more time; a forecast to time $t$ needs about $\lambda t/\ln 10$ correct digits beyond the tolerance. For Laskar's planets: about 11.5 million years per digit (5.2 Example 1).
- **A3 is an idealization.** Lorenz (1969) modelled a flow with many scales and found that each scale has its own finite range, about an hour for cumulus-sized motions and a few weeks for the largest, which shrinking the initial error cannot lengthen, because smaller errors live at faster scales ([`atmospheric-science` 6.5](../atmospheric-science/lessons/06-05-predictability-two-week-limit.md)). Lorenz 1969, not 1963, is the source of the finite forecast limit.
- **Settled either way.** For a single-scale model, $\delta_0 e^{\lambda t} \to 0$ as $\delta_0 \to 0$ at each fixed $t$, so the horizon grows without bound as the data sharpen ([determinism and predictability](#determinism-and-predictability)).
- **Trap: precision buys proportional time.** A thousandfold gain in precision buys only $\ln 1000/\lambda$.
- **Left to you.** Setting a chaotic horizon against the spread of positions on Norton's dome is Boss 5(a)'s comparison.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Finite-information quantities

**Nicolas Gisin's proposal that physical quantities carry only finitely many determinate digits, so that classical physics, read this way, is indeterministic.** Gisin, "Indeterminism in Physics, Classical Chaos and Bohmian Mechanics" (*Erkenntnis*, 2021); Flavio Del Santo and Gisin (*Physical Review A*, 2019). Their target is the "principle of infinite precision", the assumption that every quantity has an actual value with infinitely many determinate digits.

- **The argument** (5.2, at outline). G1: classical determinism assumes the principle of infinite precision. G2: a finite region of space holds only finitely much information. G3: almost every real number carries infinite information. C: physical quantities carry finite information, and chaos promotes their not-yet-determinate digits into the macroscopic state at $\lambda/\ln 2$ binary digits per unit time, so classical physics so read is indeterministic yet empirically equivalent to the standard reading.
- **Its place.** It offers the unpredictability argument a P2 drawn from physics ([determinism and predictability](#determinism-and-predictability)).
- **Its costs, as Gisin names them.** Adding real numbers makes classical mechanics deterministic as adding positions makes [Bohmian mechanics](#bohmian-mechanics) deterministic, and most physicists accept the first supplement and reject the second. And something must make undetermined digits determinate: Del Santo and Gisin treat this as a classical measurement problem.
- **Trap: it makes the equations stochastic.** The equation is the same on both readings; the dispute is whether the far digits are unknown or undetermined.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Chaos amplification

**The proposal that chaotic dynamics lifts quantum indeterminacy up to macroscopic scales.** The modern argument is Jeremy Hobbs's (1991) and Stephen Kellert's (1993), as Robert Bishop's Stanford entry "Chaos" reconstructs it. Its precursor is Maxwell's 1873 essay on free will, with singular points where "influences whose physical magnitude is too small to be taken account of by a finite being, may produce results of the greatest importance" (Campbell and Garnett, *Life of Maxwell*, 1882, p. 443).

- **The estimate** (5.2). Quantum mechanics limits how sharply a state is specified, to a spread $\delta_q$; after about $\frac{1}{\lambda}\ln(\Delta/\delta_q)$ chaos has stretched it to the macroscopic tolerance $\Delta$. Berry makes the lift immediate for gases: quantum uncertainty alone spoils an oxygen molecule's first collision.
- **Bishop's three conditions.** An indeterministic reading of quantum mechanics (Bohm and Everett supply none, [2.1](lessons/02-01-bohmian-mechanics.md)–[2.3](lessons/02-03-many-worlds-branching.md)); no damping or negative local stretching to wash the effect out; and, in brains, a way past parallel redundancy.
- **Its uses.** Robert Kane's libertarianism, in [`metaphysics` 6.4](../metaphysics/lessons/06-04-libertarianism-and-its-critics.md), which calls amplification open; divine action in [`apologetics-foundations` 4.4](../apologetics-foundations/lessons/04-04-divine-action-miracles-and-quantum-indeterminacy.md), where the theology stays.
- **Not Polkinghorne's proposal.** His differs in kind: chaos itself as openness, with no quantum event amplified ([determinism and predictability](#determinism-and-predictability)).
- **Trap: Berry shows chance.** His estimate shows that quantum spread leaves a molecule's aim unfixed; whether that is chance depends on the interpretation, and what reaches large scales depends on the dynamics.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Ehrenfest time

**The time, of order $\frac{1}{\lambda}\ln(S/\hbar)$ for a characteristic action $S$, after which a quantum system stops tracking its chaotic classical limit; $\hbar$ is the reduced Planck constant.** 5.2.

- **Hyperion.** Wojciech Zurek and Juan Pablo Paz put it near 20 years for Hyperion, Saturn's tumbling moon, and credit decoherence with keeping the moon classical.
- **The catch.** Decoherence yields an [improper mixture](#proper-and-improper-mixtures) of orientations, not one orientation ([1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md)); the puzzle of [quantum chaos](#quantum-chaos) remains.
- **Only logarithmic.** Because $S/\hbar$ sits inside a logarithm, even an enormous action buys a classical regime of only a modest number of Lyapunov times.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Quantum chaos

**The puzzle that Schrödinger evolution shows no sensitive dependence of states, though many quantum systems have chaotic classical limits.** 5.2.

- **Settled.** Unitary evolution preserves distances: $\lVert U(t)|\psi\rangle - U(t)|\phi\rangle\rVert = \lVert|\psi\rangle - |\phi\rangle\rVert$ for all $t$, with $U(t)$ the evolution operator and $|\psi\rangle, |\phi\rangle$ two states. Quantum states never separate.
- **The bridge.** The classical limit tracks the quantum dynamics only up to the [Ehrenfest time](#ehrenfest-time); after that, the classical-looking behaviour of a body like Hyperion is credited to decoherence, which leaves an improper mixture rather than one outcome.
- **Trap: quantum states diverge exponentially.** Unitary evolution keeps them exactly as far apart as they began.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Faithful model assumption

**The premise that a deterministic model faithfully represents its target system, even beyond the horizon where no data can check it.** The name is from Bishop's Stanford entry "Chaos".

- **Its role** (5.2). The determinist's reply to P2 of the unpredictability argument relies on it ([determinism and predictability](#determinism-and-predictability)); 5.2 makes it the argument's weakest point.
- **The strongest objection.** [Observational equivalence of chaos and chance](#observational-equivalence-of-chaos-and-chance): if deterministic and stochastic descriptions fit every possible data set, no data settle whether the deterministic model is the faithful one.
- **Concessions.** The determinist grants that chaotic models' success is no evidence for the world's determinism; the indeterminist grants that unpredictability is no evidence against it.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Observational equivalence of chaos and chance

**Some processes can be described equally well as deterministic or as stochastic, however many observations are made.** Patrick Suppes, "The Transcendental Character of Determinism" (1993), using Donald Ornstein's theorems; Lorenz (1969) proposed that his many-scale flows are observationally indistinguishable from indeterministic ones.

- **The upshot** (5.2). If so, no data settle the world's determinism: the underdetermination of [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md) in a dynamical key.
- **The reply** (John Winnie, 1997; Carl Hoefer's Stanford entry "Causal Determinism"). The equivalence holds at a chosen coarse-graining; finer observation exposes deterministic structure; and we often know on independent grounds which law governs a system, as with a billiard table.
- **What is at stake.** The [faithful model assumption](#faithful-model-assumption): the equivalence is the strongest objection to it.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Time-reversal invariance

**A theory is time-reversal invariant when the backward film of every history it allows, with each frame suitably reversed, is also a history it allows.** 5.3's definition: let $R$ be an operation on instantaneous states with $R(R(S)) = S$; the theory is invariant under $R$ when $S(t)$ allowed implies $(TS)(t) := R\big(S(-t)\big)$ allowed. *In words:* play any allowed history backward, apply $R$ to every frame, and you get another allowed history.

- **Everything turns on $R$.** For a Newtonian particle at position $x$ with velocity $v$, $R(x, v) = (x, -v)$. For electromagnetism the textbook choice is $R(E, B, \rho, j) = (E, -B, \rho, -j)$, with $E$ and $B$ the electric and magnetic fields and $\rho$ and $j$ the charge and current densities; whether that is right is the [Albert–Malament dispute](#albert-malament-dispute). [`dynamical-systems` 2.1](../dynamical-systems/lessons/02-01-conservative-reversible-systems.md) gives the planar case and shows that systems $\dot x = y$, $\dot y = -V'(x)$, where no force depends on velocity, are reversible.
- **Conserving energy is not enough** (5.3 Example 2). A proton circling in a uniform magnetic field keeps its kinetic energy, yet reversing its velocity alone does not make it retrace its arc; reversing the velocity and flipping $B$ does.
- **The settled exception.** Weak interactions violate $CP$, hence by $CPT$ also $T$, seen directly in $B$ mesons (BaBar, 2012; [`nuclear-particle-physics` 4.3](../nuclear-particle-physics/lessons/04-03-parity-c-cp.md)). It is too small and of the wrong kind to make the thermodynamic arrow: it lives in rare decays, its dynamics is still unitary (so fine-grained entropy stays fixed), and Loschmidt's argument runs with $CPT$ in place of $T$.
- **Not determinism** (5.3). The Boltzmann equation is future-deterministic, fixing a gas's later velocity distributions from its present one, without being invariant; Newton's laws on the dome are invariant without being deterministic. Under invariant laws future and past [determinism](#determinism) stand or fall together (5.1).
- **Its work in Module 5.** 5.1 runs it twice: the dome's departure as the reverse of a ball coasting up to the apex, and [space invaders](#space-invaders) as reversed escapes. 5.3 builds the [reversibility objection](#reversibility-objection) on it; 5.4 uses it to state the retrodiction problem; in 5.5 the [past hypothesis](#past-hypothesis) leaves the equations invariant and puts the asymmetry in a constraint at one end of time.
- **Trap: invariant laws mean a world that looks the same backward.** They only allow the backward film; the actual history can be wildly asymmetric, the asymmetry living in boundary conditions.
- **Trap: weak $T$-violation explains the arrow, or the laws contain none.** It exists, and it is not what makes entropy rise.
- **Trap: three senses of "reversible".** This dynamical sense is neither a quasi-static process ([`thermodynamics-physics` 2.3](../thermodynamics-physics/lessons/02-03-entropy.md)) nor a retraceable Stokes flow ([`fluid-dynamics` 3.3](../fluid-dynamics/lessons/03-03-stokes-flow.md)).

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Albert-Malament dispute

**Whether time reversal should flip the magnetic field, and so whether classical electromagnetism is time-reversal invariant.** David Albert, *Time and Chance* (2000), ch. 1, against David Malament, "On the Time Reversal Invariance of Classical Electromagnetic Theory" (2004).

- **Albert.** An instantaneous state must not depend on other times, so velocities are no part of one, and reversal may flip only the rate of change of something it leaves alone. A magnetic field is the rate of change of nothing, so $B$ stays. Then Faraday's law $\nabla \times E = -\partial B/\partial t$ fails for the reversed history: classical electromagnetism is not time-reversal invariant, and flipping $B$ is ad hoc. He says the same of quantum mechanics, whose reversal conjugates the wavefunction.
- **Malament.** The field tensor $F_{ab}$ codes the force on a charge through its future-pointing four-velocity, so it is defined only relative to a choice of future; reverse that choice and $F_{ab}$ flips. An observer's $E$ survives, and $B$, which also needs a handedness of space, flips, as an angular velocity does in a backward film. On his account Albert's operation is time reversal plus a mirror reflection.
- **The others** (5.3). John Earman (2002) also rejects Albert's conclusion; Bryan Roberts (*Reversing the Arrow of Time*, 2022) reconciles the two.
- **Common ground** (5.3 Example 2). Both accept every prediction, and that the map flipping $B$ (with $t \to -t$) takes solutions to solutions. They disagree whether it deserves the name "time reversal": for Albert the $B$-flipped proton is in a different field, a different world; for Malament the sign of $B$ encodes a time orientation and a handedness that reversal must re-express.
- **Trap: a dispute about physics.** No prediction is at issue; the question is what the operation $R$ should be ([time-reversal invariance](#time-reversal-invariance)).

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### H-theorem

**Boltzmann's 1872 result that, under his kinetic equation, a dilute gas's $H$ falls until its velocities reach Maxwell's distribution.** With $f(v, t)$ the fraction of molecules with velocity near $v$, $H[f] = \int f\ln f\,d^3v$; under the Boltzmann equation $dH/dt \le 0$, with equality exactly at Maxwell's distribution. *In words:* $-H$ behaves like an entropy and climbs to equilibrium.

- **Its assumptions** (5.3). Hard spheres, low density, and the [Stosszahlansatz](#stosszahlansatz), the one premise that tells past from future.
- **The objections.** Loschmidt's [reversibility objection](#reversibility-objection) (1876) and Zermelo's [recurrence objection](#recurrence-objection) (1896).
- **Boltzmann's answer.** The theorem was about probability: $H$ probably decreases when the initial state is "not specially arranged for a certain purpose, but haphazard governs freely" (*Nature*, 1895, where he calls $H$ the "minimum function").
- **Relatives.** In miniature, the [Kac ring](#kac-ring); rigorously, [Lanford's theorem](#lanfords-theorem). Berry's hard-sphere gas of 5.2 is the kind of system the theorem treats.
- **Trap: it derives the second law from mechanics.** It needs the Stosszahlansatz too, and that premise carries the asymmetry. Since the ansatz fails at some states, what survives is Boltzmann's weaker claim: entropy almost always rises, for states not specially arranged.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### Stosszahlansatz

**The assumption that molecules about to collide are uncorrelated, so that collisions per unit time between molecules with velocities $v_1$ and $v_2$ number in proportion to $f(v_1)f(v_2)$.** German, "collision-number assumption"; often glossed "molecular chaos". 5.3 attributes the name to no one. *In words:* molecules about to collide carry no memory of each other.

- **Incoming pairs only** (5.3). A collision correlates its outgoing pair, so the assumption is imposed on incoming pairs alone: the one premise of the [H-theorem](#h-theorem) that tells past from future.
- **Where it fails.** At velocity-reversed states ([reversibility objection](#reversibility-objection)), whose molecules about to collide are correlated by their earlier collisions; and it cannot hold at all times along one history of a bounded gas ([recurrence objection](#recurrence-objection)).
- **The ring's version.** In the [Kac ring](#kac-ring) it says the balls about to cross markers are a fair sample of the colours.
- **Its place in the reduction.** It is where the probabilistic assumption mechanics does not supply enters the derivation ([`philosophy-of-science` 4.5](../philosophy-of-science/lessons/04-05-reduction-and-emergence.md)).
- **Trap: a consequence of the dynamics.** The dynamics is time-reversal invariant; the ansatz is not.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Reversibility objection

**Johann Loschmidt's 1876 objection to the H-theorem, from the time-reversal invariance of the molecular dynamics.** Edward Culverwell pressed a version on Boltzmann in *Nature*, which Boltzmann answered in English in 1895.

- **5.3's reconstruction.** P1: the molecular dynamics is [time-reversal invariant](#time-reversal-invariance), with $R$ reversing every velocity. P2: $H$ is the same at a state and at its reversal, since $f(v) \mapsto f(-v)$ leaves the integral unchanged. P3: some histories have $H$ falling between times $t_1$ and $t_2$. C: reversing such a history at $t_2$ gives a lawful history in which $H$ rises for as long, so no theorem from the dynamics alone gives $dH/dt \le 0$ for every state; the [Stosszahlansatz](#stosszahlansatz) fails at reversed states.
- **Boltzmann's reply** (*Nature*, 1895). He grants that nothing in the dynamics forbids the reversed motion, and moves the arrow out of "the equations of motion alone" into the initial state: the theorem covers states "not specially arranged". The phrase says which states it covers, not why the world is full of them; 5.4 names the missing fact the [past hypothesis](#past-hypothesis).
- **Pressure on "not specially arranged"** (5.3). The objection: $R$ preserves Liouville measure, so reversed microstates are no rarer than the originals. The reply: the phrase concerns how a gas was prepared, and real gases are prepared by a lower-entropy past; [Lanford's theorem](#lanfords-theorem) supports the statistical claim. Boltzmann concedes that the arrow needs a fact about initial conditions; his critics concede that for unarranged states the rise is overwhelmingly probable on any watchable timescale.
- **For typicality** (5.4). The objection returns, restated, as the retrodiction problem: the count that makes a higher-entropy future typical makes a higher-entropy past typical too.
- **In practice** (5.3 Connections; 5.4 flashback). Reversing a real gas fails because any error in the reversed velocities grows exponentially ([sensitive dependence](#sensitive-dependence)): a fact about control, not about the laws.
- **Trap: it shows entropy decrease is likely.** Only that it is lawful. **Trap: weak $T$-violation escapes it.** The argument runs with $CPT$ in place of $T$.
- **Left to you.** Stating the objection in one precise sentence, explaining why the counting predicts higher entropy in the past as well as the future, and saying exactly what the past hypothesis adds are asked together by Boss 5(c); the card does not assemble them.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md)

### Recurrence objection

**Ernst Zermelo's 1896 objection to the H-theorem: by Poincaré recurrence a gas in a rigid box returns near its starting state, so its $H$ cannot fall forever.** Zermelo (*Annalen der Physik*, 1896), citing Poincaré's 1890 three-body memoir.

- **Its premises** (5.3). A gas in a rigid box at fixed energy has volume-preserving dynamics, by Liouville's theorem ([`analytical-mechanics` 3.2](../analytical-mechanics/lessons/03-02-phase-space-liouville.md)), on a region of finite phase volume; so [Poincaré recurrence](#poincare-recurrence) applies.
- **Boltzmann's replies** (*Annalen der Physik*, 1896). Poincaré's theorem "is of course correct, but its application to the theory of heat is not" (lesson's translation). For a cubic centimetre of air the recurrence time in seconds has *viele Trillionen Stellen*, many trillions of digits, a German *Trillion* being $10^{18}$. And why our surroundings are now so improbable is no more a question for natural science than why there are phenomena at all (the [brute-fact view](#brute-fact-view) in embryo).
- **Models.** The exact return of the [Kac ring](#kac-ring); the [Ehrenfest urn](#ehrenfest-urn) with [Kac's lemma](#kacs-lemma).
- **Trap: it is the reversal argument again.** Loschmidt uses time-reversal invariance; Zermelo uses recurrence of one history, with nothing reversed.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Poincare recurrence

**If a flow preserves phase volume on a region of finite volume, almost every state returns arbitrarily close to itself, infinitely often.** Henri Poincaré, in his 1890 memoir on the three-body problem.

- **Where it applies** (5.3). A gas in a rigid box at fixed energy: Liouville supplies the volume preservation, the box and the energy the finite volume. This is Zermelo's [recurrence objection](#recurrence-objection).
- **Discrete cases.** A one-to-one map on finitely many states is periodic, so the [Kac ring](#kac-ring) returns exactly; for a stationary Markov chain, [Kac's lemma](#kacs-lemma) gives the mean return time.
- **Trap: every state comes back exactly.** Almost every state comes back arbitrarily close, and only for a volume-preserving flow on a region of finite volume. Boltzmann doubted the universe is one.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Lanford's theorem

**A rigorous derivation of Boltzmann's equation from Hamiltonian hard-sphere dynamics for a dilute gas, from most initial states.** Oscar Lanford (5.3 dates it 1975; 5.4 places it in the 1970s).

- **Its reach** (5.4). Lanford's result held only for about two fifths of a mean free time. Yu Deng, Zaher Hani and Xiao Ma (2024) extend it to as long as the equation's solution exists.
- **Its role** (5.3). The reply to the pressure on Boltzmann's "not specially arranged": the statistical claim, that the Boltzmann equation holds for most initial states, is a theorem in the dilute limit.
- **Trap: "most" needs no measure.** "Most initial states" is counted by the Liouville (microcanonical) measure, so the result inherits the [measure objection](#measure-objection).
- **Trap: it derives irreversibility from mechanics alone.** It holds for most initial states, not all, so Loschmidt's point stands.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md)

### Kac ring

**A reversible, periodic toy model whose own Stosszahlansatz predicts steady decay to equilibrium: the H-theorem in miniature.** Mark Kac (1959).

- **The rules** (5.3 Picture). $n$ balls, white or black, sit at $n$ sites on a circle, and $m$ of the gaps between sites carry a marker. Each step every ball moves one site on, changing colour when it crosses a marker; $\delta = (\text{white} - \text{black})/n$.
- **The ring's ansatz.** The balls about to cross markers are a fair sample of the colours, a fraction $\mu = m/n$ of each, so $\delta_{t+1} = (1 - 2\mu)\delta_t$ and $\delta_t = (1 - 2\mu)^t\delta_0 \to 0$.
- **The exact dynamics.** Reversible (move every ball back) and periodic: after $n$ steps every ball has crossed every marker once, so for even $m$ the ring is as it began (for odd $m$, at $2n$).
- **5.3's run** ($n = 2000$, $m = 100$). The ansatz fits for a while; reversed at $t = 40$, the ring is all white again at $t = 80$ (Loschmidt); left alone, it stays near $\delta = 0$ for most of the period and is all white again at $t = 2000$ (Zermelo).
- **Trap: the ansatz is false from the start.** It fits for a while; it fails at reversed states and near the end of each period.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Ehrenfest urn

**A two-urn Markov chain: $N$ numbered balls are split between urns A and B, and at each step a ball chosen uniformly at random changes urn.** Paul and Tatiana Ehrenfest (1907), as a model of Boltzmann's H-curve answering the two objections.

- **Its long run** (5.3 P2). The number $k$ of balls in A has the binomial distribution $\pi(k) = \binom{N}{k}2^{-N}$, and [Kac's lemma](#kacs-lemma) turns stationary probabilities into mean return times ([recurrence objection](#recurrence-objection)).
- **Trap: it models Loschmidt's reversal.** It is a random process, so it models recurrence and statistical behaviour, not the reversal of deterministic laws.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### Kac's lemma

**Started in a state $s$, a recurrent stationary chain returns to $s$ after a mean time $1/\pi(s)$, where $\pi(s)$ is the state's stationary probability.** Mark Kac (1947).

- **Use** (5.3). It gives the [Ehrenfest urn](#ehrenfest-urn)'s recurrence times: rare states return rarely, common states almost at once ([recurrence objection](#recurrence-objection)).
- **Trap: a typical return time.** It gives a mean, and it presupposes recurrence.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### Macrostate

**What a coarse description fixes, such as how many molecules sit in each third of a box. The macroscopic variables partition phase space into regions $\Gamma_M$, one for each macrostate $M$, and each microstate $x$ lies in exactly one, written $M(x)$.** 5.4's D1, in [`stat-mech` 1.2](../stat-mech/lessons/01-02-microstates-macrostates-postulate.md)'s notation: $\Omega(M) = \mu(\Gamma_M)/h^{3N}$ counts the microstates in $M$, with $\mu$ the Liouville volume, $h$ Planck's constant and $N$ the number of molecules.

- **5.4's count.** Thirty molecules in a box split into thirds have 496 macrostates $(n_1, n_2, n_3)$ and $3^{30} \approx 2.06 \times 10^{14}$ microstates. Each corner, all thirty in one third, owns one microstate; the centre $(10,10,10)$ owns about $5.55 \times 10^{12}$, only 2.7% of the total; the 83 largest macrostates, 17% of the 496, hold 90% of the microstates.
- **Physical, or ours?** Boltzmannians: macrostates are physical, densities of particle number, energy and momentum over regions much larger than molecules and much smaller than the system. E. T. Jaynes: entropy is a property of the experiments we choose ([coarse-graining](#coarse-graining)).
- **What it fixes downstream.** [Boltzmann entropy](#boltzmann-entropy), and the cells a [coarse-grained](#coarse-graining) density is flattened over.
- **Trap: a macrostate is whatever we happen to measure.** That is Jaynes's view, not the Boltzmannian's.

*Lessons:* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md)

### Boltzmann entropy

**The entropy of a single system: $S_B(x) = k_B\ln\Omega(M(x))$, the logarithm of the size of the [macrostate](#macrostate) region its microstate $x$ lies in, with $k_B$ Boltzmann's constant.** 5.4's D2.

- **One system, changing.** [`stat-mech` 1.3](../stat-mech/lessons/01-03-entropy-microcanonical.md) says entropy belongs to the macrostate, not the configuration. $S_B$ agrees, and gives each configuration its macrostate's entropy, so it can change as one system evolves.
- **What rises.** The Boltzmannian second law: from a non-equilibrium macrostate, $S_B$ at later times is higher with probability close to 1 ([typicality](#typicality)). [Gibbs entropy](#gibbs-entropy) of an isolated ensemble cannot rise.
- **The grain** (5.4 Example 1). Thirty molecules leave one third of a box. With "somewhere in the box" as the final macrostate, $\Delta S = 30\,k_B\ln 3 \approx 32.96\,k_B$; with the most probable macrostate, $S_B \approx 29.34\,k_B$. The gap grows like $\ln N$ while the entropy grows like $N$, so the grain moves $S_B$ sub-extensively and leaves the direction of change alone. For a mole the count gives $R\ln 3 \approx 9.13$ J/K, the value of [`thermodynamics-physics` 2.3](../thermodynamics-physics/lessons/02-03-entropy.md) Example 1.
- **Read as a chance** (5.5, F2 of the [fluctuation hypothesis](#fluctuation-hypothesis)). A fluctuation to a macrostate $\Delta S$ below equilibrium has probability proportional to $e^{-\Delta S/k_B}$, since probability goes as multiplicity $\Omega = e^{S_B/k_B}$.
- **For the universe.** Earman denies that the early universe's $S_B$ is well defined in general-relativistic cosmology ([not even false](#not-even-false)).
- **Trap: entropy is disorder.** $S_B$ counts phase-space volume at fixed macroscopic variables; whether the biggest macrostate looks messy is a separate fact.
- **Trap: Boltzmann and Gibbs entropy are the same.** Only in value, for a density flat on one macrostate.

*Lessons:* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Gibbs entropy

**The entropy of a probability distribution over microstates, not of one system: $S_G[\rho] = -k_B\int_\Gamma \rho\ln\rho\,d\Gamma$ for a density $\rho$ (per cell) on phase space $\Gamma$.** 5.4's D3. It belongs to an ensemble or a state of knowledge.

- **Equal in value only.** If $\rho$ is uniform on $\Gamma_M$, then $S_G = k_B\ln\Omega(M)$, the agreement [`stat-mech` 6.2](../stat-mech/lessons/06-02-entropy-information-arrow.md) records as "the same entropy". Over time they part.
- **Constant** (5.4's theorem T). Under the Hamiltonian flow $\phi_t$ an ensemble evolves as $\rho_t(x) = \rho_0(\phi_{-t}x)$; substituting $y = \phi_{-t}x$, whose Jacobian determinant is 1 by Liouville's theorem ([`analytical-mechanics` 3.2](../analytical-mechanics/lessons/03-02-phase-space-liouville.md)), gives $S_G[\rho_t] = S_G[\rho_0]$. Whatever the second law says rises, it is not this: it is $S_B$, or a Gibbs entropy computed from a [coarse-grained](#coarse-graining) density.
- **In 5.6.** Jaynes's [maximum entropy](#maximum-entropy) maximizes the same functional, and needs a reference measure to do it.
- **Trap: it rises as the gas spreads.** The fine-grained Gibbs entropy of an isolated ensemble never changes; a one-to-one map only relabels probabilities.

*Lessons:* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Coarse-graining

**Replacing an exact description with a cruder one: which macrostate cell a system is in, or a probability density averaged over cells.** A Gibbs entropy computed from a coarse-grained density can rise; the fine-grained one cannot (5.4).

- **The subjectivity charge** (5.4). Maxwell wrote that the second law "is undoubtedly true as long as we can deal with bodies only in mass" (*Theory of Heat*, 1871, p. 308). Jaynes ("Gibbs vs Boltzmann Entropies", 1965) generalized: one crystal is many thermodynamic systems, one for each set of variables an experimenter controls, so entropy is a property of the experiments we choose; he credits Eugene Wigner with calling entropy "anthropomorphic". If what we measure fixes macrostates, it fixes $S_B$ and, it seems, the second law.
- **The Boltzmannian replies.** Macrostates are physical (densities over regions much larger than molecules and much smaller than the system); kettles boil whatever anyone knows (Michael Redhead, Albert and Loewer, against the epistemic reading); and any reasonable grain shifts $S_B$ by amounts that vanish per molecule ([Boltzmann entropy](#boltzmann-entropy)).
- **A hard case** (5.4 P3). The spin echo (Erwin Hahn, 1950), where a magnetization that decays as if relaxing is recovered by a second pulse.
- **Trap: Jaynes coined "anthropomorphic".** He credits the remark to Wigner.
- **Trap: coarse-graining makes the rise unreal.** The Boltzmannian's rise is of $S_B$ under a physical grain; the dispute is whether that grain is objective.

*Lessons:* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Statistical postulate

**Given that a system is in macrostate $M$, the probability that its microstate lies in a set $A \subseteq \Gamma_M$ is $\mu(A)/\mu(\Gamma_M)$.** David Albert's formulation, *Time and Chance* (2000); 5.4's P2, with $\mu$ the Liouville measure. *In words:* spread probability evenly, by phase-space volume, over whatever the macrostate allows.

- **Not supplied by mechanics.** It is the probabilistic assumption [`philosophy-of-science` 4.5](../philosophy-of-science/lessons/04-05-reduction-and-emergence.md) says mechanics does not supply. Liouville's theorem makes the uniform measure stationary, as it does every density of the form $f(H)$ ([`stat-mech` 1.1](../stat-mech/lessons/01-01-mechanics-to-statistics.md) P3), so the dynamics permits the postulate without selecting it ([`analytical-mechanics` 3.2](../analytical-mechanics/lessons/03-02-phase-space-liouville.md)).
- **Where it is applied.** To the present macrostate, it runs into the retrodiction problem of 5.4 ([reversibility objection](#reversibility-objection)); in the [Mentaculus](#mentaculus) it is applied once, at the beginning, to the [past hypothesis](#past-hypothesis)'s macrostate.
- **The weakest premise of 5.4's argument.** The objection: mechanics does not supply it, and applied once to the first macrostate it is a posit testable only through its consequences, chosen for a stationarity every $f(H)$ shares. The reply (Loewer, 2001): it earns a place as a law in the best system of [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md), since one simple measure on one initial region makes thermodynamics probable and no rival measure does that job. The defender concedes the probability is posited and justified by the whole system; the critic concedes every account needs some measure and this one works.
- **What its probabilities are** (5.6). Long-run time fractions ([ergodic hypothesis](#ergodic-hypothesis)), "nearly all" ([typicality](#typicality)), rational credences ([maximum entropy](#maximum-entropy)), or best-system chances ([deterministic chance](#deterministic-chance)).
- **Trap: Liouville derives it.** Liouville shows the uniform measure is stationary; the postulate is consistent with the dynamics, not implied by it.

*Lessons:* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Past hypothesis

**The universe's macrostate at its beginning, $M_0$, had extremely low Boltzmann entropy.** The name is David Albert's (*Time and Chance*, 2000); Albert leaves $M_0$ to be whatever low-entropy, big-bang-like macrocondition cosmology eventually reports. *In words:* the world started in a tiny region of its phase space, as a deck leaves the factory sorted (5.4's image).

- **Where it comes from** (5.3). Boltzmann's 1895 reply to Loschmidt's argument already put the arrow in the initial state, "not specially arranged"; that phrase says which states the H-theorem covers, not why the world is full of them. The past hypothesis is the missing fact.
- **Its job** (5.4). With the [statistical postulate](#statistical-postulate) applied once, as a uniform distribution on $\Gamma_{M_0}$, it completes the [Mentaculus](#mentaculus), the Boltzmannian's answer to the retrodiction problem.
- **Its rival** (5.5). The [fluctuation hypothesis](#fluctuation-hypothesis), which needs no special beginning; 6.1's flashback reads Boltzmann's 1898 statement of it.
- **Its price** (5.5). [Penrose's estimate](#penroses-estimate). Penrose locates the low entropy in gravity: the early matter and radiation were near thermal equilibrium (the microwave background is a near-perfect blackbody, [`cosmology` 3.1](../cosmology/lessons/03-01-recombination-origin-cmb.md)); what was special was smoothness, since for self-gravitating matter clumping raises entropy.
- **Does inflation remove the price?** [`cosmology` 4.2](../cosmology/lessons/04-02-inflationary-mechanism.md) presents inflation as the fix for [4.1](../cosmology/lessons/04-01-horizon-flatness-problems.md)'s horizon and flatness problems. The objection: inflation must start from a patch smooth enough to inflate, itself a low-entropy state, and arbitrary initial conditions do not inflate (Price, *Time's Arrow and Archimedes' Point*, 1996, ch. 2). The reply: a small patch is a far smaller entropy deficit than a smooth universe. Andreas Albrecht and Lorenzo Sorbo (2004) ran the comparison two ways, inflation losing exponentially on one and winning on the other, and left it open.
- **Its status** (5.5). A law of the best system (Barry Loewer, "Determinism and Chance", 2001; Sheldon Goldstein, 2001; Eddy Chen, 2023), a [brute fact](#brute-fact-view) (Craig Callender), or a fact that [demands explanation](#demand-for-explanation) (Huw Price). Earman doubts it can be stated at all ([not even false](#not-even-false)).
- **What else it is meant to ground.** The [record asymmetry](#record-asymmetry), and with it the causal and counterfactual asymmetries (Albert; Loewer).
- **A Bohmian parallel** (5.4 Connections). Bohmian mechanics has the same structure: a measure on the universe's initial configuration that makes the observed statistics typical ([quantum equilibrium](#quantum-equilibrium)).
- **Elsewhere.** [`apologetics-foundations` 4.3](../apologetics-foundations/lessons/04-03-cosmology-what-a-beginning-would-and-would-not-show.md) uses the same low-entropy beginning in a fine-tuning comparison; that use stays there.
- **Trap: it makes the laws time-asymmetric.** The equations stay [time-reversal invariant](#time-reversal-invariance); the asymmetry is a constraint at one end of time: a law on the law view, a boundary condition on the brute-fact view.
- **Trap: the law view is Albert's.** Albert named the hypothesis; the law view is Loewer's, Goldstein's and Chen's.
- **Left to you.** Exactly what the past hypothesis adds that removes the higher-entropy past is a clause of Boss 5(c); whether it is a law, a brute fact or a fact that demands explanation is Boss 5(d)'s essay. The card states neither.

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Mentaculus

**The package of deterministic microdynamics, the past hypothesis, and the statistical postulate applied once, as a uniform distribution over the initial macrostate: a probability map of the universe's history.** So named by Albert and Barry Loewer (Loewer 2012; Albert, *After Physics*, 2015), after a probability map in the Coen brothers' *A Serious Man* (2009).

- **As one position** (5.4). [`stat-mech` 6.2](../stat-mech/lessons/06-02-entropy-information-arrow.md) states it as the resolution of the arrow; here it is one position, and 5.5 sets Price, Callender and Earman against it.
- **Records** (5.5). Because it conditions on $M_0$ at one end of time only, it is meant to ground the [record asymmetry](#record-asymmetry).
- **Chances** (5.6). Loewer reads it as a Lewisian best system, so its probabilities are objective chances under deterministic laws ([deterministic chance](#deterministic-chance)).
- **Its strains.** The [subsystem worry](#subsystem-worry); Earman's three denials ([not even false](#not-even-false)).
- **Trap: the name is from *Time and Chance*.** That book (2000) names the past hypothesis; the Mentaculus is named in Loewer 2012 and Albert 2015, after a 2009 film.

*Lessons:* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Subsystem worry

**A low-entropy beginning, and rising entropy for the universe as a whole, do not by themselves show that each subsystem, a gas in a lab, behaves thermodynamically.** Eric Winsberg (2004).

- **Where it bites** (5.4 Example 2). The Mentaculus's prediction for a gas found crowded into one corner needs the uniform measure on $\Gamma_{M_0}$, carried forward by the dynamics, to be close to uniform on the gas's present macrostate. Nothing proves it.
- **Branch systems.** After Hans Reichenbach (*The Direction of Time*, 1956): apply the statistical postulate afresh to each system when it is isolated. Albert rejects this because nothing says the postulate holds for such freshly prepared states.
- **The standoff.** Defenders treat the near-uniformity as a plausible conjecture, rigorous only in idealized cases; critics reply that a conjecture is not a derivation.
- **In 5.5.** It is Earman's second denial ([not even false](#not-even-false)), and it returns in the footprint case of the [record asymmetry](#record-asymmetry).

*Lessons:* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Fluctuation hypothesis

**Perhaps the universe rests in thermal equilibrium for ever, and our world is one rare local fluctuation away from it; then no special beginning is needed.** Boltzmann, "On Certain Questions of the Theory of Gases" (*Nature*, 1895), in the letter's penultimate paragraph, crediting "an idea of my old assistant, Dr. Schuetz"; expanded in *Vorlesungen über Gastheorie* II (1898), §90.

- **5.5's reconstruction.** F1: the universe is vastly larger and older than the observed world, and in thermal equilibrium almost everywhere and always. F2: a region fluctuates into a macrostate whose [Boltzmann entropy](#boltzmann-entropy) lies $\Delta S$ below equilibrium with probability proportional to $e^{-\Delta S/k_B}$. F3: observers exist only where entropy is far below its maximum. C: observers find themselves in rare low-entropy regions, with no special beginning.
- **F3 is observation selection**, as in [`philosophy-of-religion` 3.2](../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md).
- **Boltzmann's passage** (5.5 Source). It trades an improbability against a size: "One (only one) part" fixes what is estimated, the chance that *some* region deviates, which grows with the universe, and "as great as we please" treats the size as a free parameter. What it computes is the chance that a world like ours exists somewhere.
- **Time's direction** (1898, §90). For the universe the two directions of time are indistinguishable, as in space there is no up or down; a living being calls the direction toward less probable states the past.
- **Its picture.** Eddington's monkeys at typewriters (*The Nature of the Physical World*, 1928, ch. IV): a page of *Hamlet* found among monkey-typed paper. The fluctuation hypothesis is the monkey story, the [past hypothesis](#past-hypothesis) the printer.
- **The objection.** Minimal fluctuations dominate: [Boltzmann brains](#boltzmann-brains).
- **Trap: observation refutes it.** A fluctuation can produce any present state. The objections concern what it predicts next and its cognitive instability, which is epistemic.
- **Trap: "other world" means another universe.** Boltzmann's "other world" is a distant region of one universe in one spacetime, not a branch of [2.3](lessons/02-03-many-worlds-branching.md) or a member of a cosmological multiverse ([Everettian and cosmological multiverses](#everettian-and-cosmological-multiverses)).
- **Left to you.** What Boltzmann brains imply for the fluctuation alternative, and whether that bears on the status of the past hypothesis, is a clause of Boss 5(d).

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Boltzmann brains

**Observers produced by a minimal fluctuation: at the limit, a lone brain with your memories assembled by chance a moment ago. On the [fluctuation hypothesis](#fluctuation-hypothesis) they are far likelier than observers in whole low-entropy worlds.** 5.5.

- **The minimal-fluctuation objection** (5.5, at outline). B1: by F2, a fluctuation that produces less order is exponentially more probable. B2: all your evidence could come from a fluctuation far smaller than a low-entropy universe, at the limit a brain in your present state with false memories. B3: so on F1–F3 your evidence most probably comes from a minimal fluctuation. B4: your belief in F1 and F2 rests on that same evidence. C′: if the fluctuation hypothesis is true, nobody who accepts it on evidence is justified in accepting it.
- **In numbers** (5.5 Example 1). Ten molecules seen on the left of a box of 1,000 molecules: the fluctuation reading predicts the other 990 scattered; a box prepared a moment ago predicts more order.
- **History.** Richard Feynman pressed B3 (*Lectures on Physics*, vol. I, §46-5, 1963): each region not yet examined should then be disordered, and none is. Andreas Albrecht and Lorenzo Sorbo ("Can the Universe Afford Inflation?", 2004) used the name in cosmology, saying the problem is "sometimes called" the Boltzmann's Brain paradox. C′ is Sean Carroll's "cognitively unstable" (2017), cited in [`apologetics-foundations` 4.3](../apologetics-foundations/lessons/04-03-cosmology-what-a-beginning-would-and-would-not-show.md).
- **Where it is weakest: B3**, which treats you as a random sample of all observers with your experiences. The objection (Carlo Rovelli and David Wolpert, 2024): the argument infers the laws from records, then concludes the records are unreliable, so it undermines itself; with Jordan Scharnhorst (2025) they add that the Boltzmann-brain hypothesis and the second law alike condition on one chosen time. Carroll's reply: the self-undermining is the point, since the theory predicts unreliable records, and no probability over observers helps when the fluctuated ones are locally identical to us. Carroll concedes the data do not rule the theory out; Rovelli and Wolpert concede the statistics but deny that conditioning on the present alone is forced.
- **Not the brain in a vat** ([`epistemology` 3.1](../epistemology/lessons/03-01-the-closure-argument.md)). The skeptic needs the scenario only to be possible; here a physical theory makes it probable. The reasoning is self-locating, the kind the Everettian uses in 2.4 ([self-locating uncertainty](#self-locating-uncertainty)).
- **Trap: Boltzmann named or predicted them.** He did neither; and on Albrecht and Sorbo's own account the name was already in use.
- **Left to you.** Boss 5(d) asks what Boltzmann brains imply for the fluctuation alternative and whether that bears on the choice among law, brute fact and explanandum.

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Penrose's estimate

**Roger Penrose's estimate that a low-entropy beginning like ours fills about one part in $10^{10^{123}}$ of the phase space available to the observable universe's matter.** *The Emperor's New Mind* (1989).

- **The method** (5.5). The largest entropy the observable universe's $10^{80}$ or so baryons could have is that of one black hole holding them all, about $10^{123}\,k_B$ by the Bekenstein–Hawking formula of [`relativity` 6.5](../relativity/lessons/06-05-black-hole-thermodynamics.md); a low-entropy start then fills a fraction of phase space of order $e^{-S_{\max}/k_B}$, $S_{\max}$ being that maximum.
- **Where the low entropy sits.** In gravity: the early matter and radiation were near thermal equilibrium, and what was special was smoothness ([past hypothesis](#past-hypothesis)).
- **What it presupposes.** A Boltzmann entropy for gravitational degrees of freedom, which is Earman's first target ([not even false](#not-even-false)). Whether a ratio of phase-space volumes is a probability at all is 5.6's question about measures ([measure objection](#measure-objection)).
- **Elsewhere.** [`apologetics-foundations` 4.3](../apologetics-foundations/lessons/04-03-cosmology-what-a-beginning-would-and-would-not-show.md) states Penrose's figure, with Carroll's case against Boltzmann brains, to weigh theism against naturalism; 5.5 stays inside physics.
- **Trap: $10^{10^{123}}$ is $10^{1230}$.** It is a double exponential: 1 followed by about $10^{123}$ zeros.

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Brute-fact view

**The low-entropy past needs no explanation: it states the initial conditions of the one process there is, and initial conditions are not the kind of thing that needs explaining.** Craig Callender, "There Is No Puzzle about the Low Entropy Past" (2004).

- **Brute facts in general.** [`metaphysics` 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md).
- **A precedent** (5.3). Boltzmann told Zermelo (1896) that why our surroundings are now so improbable is no more a question for natural science than why there are phenomena at all.
- **What it makes of the past hypothesis** (5.5). A boundary condition, not a law; the equations stay time-reversal invariant either way.
- **Its rivals.** The law view (Loewer, Goldstein, Chen) and the [demand for explanation](#demand-for-explanation) (Price), both under [past hypothesis](#past-hypothesis). Whether so improbable a fact needs explaining turns on what explanation is, the question of [`philosophy-of-science` 4.1–4.3](../philosophy-of-science/lessons/04-03-unification-and-the-pragmatics-of-explanation.md).
- **Trap: brute means not yet explained.** It means needing no explanation, not merely lacking one so far.
- **Left to you.** Weighing it against the law view and Price's demand is Boss 5(d)'s essay.

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Demand for explanation

**The puzzle of the arrow is not why entropy rises but why it was ever low, and that low past calls for an explanation.** Huw Price, *Time's Arrow and Archimedes' Point* (1996), and "On the Origins of the Arrow of Time" (2004).

- **The argument** (5.5). A low-entropy *future* would cry out for explanation, so exempting the past is a temporal double standard.
- **On inflation.** Price (1996, ch. 2) objects that inflation needs a low-entropy patch to start from, so it does not remove the puzzle ([past hypothesis](#past-hypothesis)).
- **Its rivals.** The law view and the [brute-fact view](#brute-fact-view); what counts as explaining is [`philosophy-of-science` 4.1–4.3](../philosophy-of-science/lessons/04-03-unification-and-the-pragmatics-of-explanation.md)'s question.
- **Trap: the puzzle is why entropy rises.** Given a low-entropy past, the rise is the part statistics handles; Price's question is the past itself.
- **Left to you.** Stating it at its defenders' strength against the other two is Boss 5(d)'s essay.

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Not even false

**John Earman's charge that the past hypothesis is too ill-defined to be true or false.** "The 'Past Hypothesis': Not Even False" (2006).

- **What he grants** (5.5). A time-asymmetric boundary condition is needed.
- **His three denials.** (1) That the Boltzmann entropy of the early universe is well defined in general-relativistic cosmology, so the past hypothesis cannot be stated in the theory's terms. (2) That a low initial value, even if well defined, would explain why thermodynamics works for the subsystems we care about ([subsystem worry](#subsystem-worry)). (3) That our knowledge of the past rests on Boltzmann entropy, which targets the [record asymmetry](#record-asymmetry).
- **The other side** (5.5 P3). Callender (2010, 2011) and David Wallace (2010) treat the trouble as the task of stating the past hypothesis once self-gravitation is included.
- **Trap: Earman denies the smooth early universe.** Nobody disputes the observations; the question is whether "low Boltzmann entropy" applies to them.
- **Trap: "not even false" means false.** It means not well enough defined to have a truth value.

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Record asymmetry

**We have records of the past and none of the future.** David Albert (*Time and Chance*, 2000) and Barry Loewer (2012) derive it from the [past hypothesis](#past-hypothesis).

- **Albert's account** (5.5 Example 2). A fresh footprint is a record because the inference from it uses an earlier ready state, smooth sand before the step. A record of the future would need a later ready state, and nothing supplies one, because the [Mentaculus](#mentaculus) conditions on $M_0$ at one end of time. Each ready state is known from earlier records; the regress ends at the past hypothesis.
- **More asymmetries.** The same package is meant to ground the causal and counterfactual asymmetries.
- **Where it strains.** Earman's bombed city (1974) records a bomb without having lower entropy than its surroundings, which sinks purely entropic accounts of records; Albert's survives, since reliability is inherited from the beginning, not carried by the record's entropy. But whether one global $M_0$ makes smooth sand yesterday probable on *this* beach is the [subsystem worry](#subsystem-worry), and Earman's third denial says inference about the past does not run through Boltzmann entropy ([not even false](#not-even-false)).
- **The standoff.** Defenders: the derivation exists in outline and has no rival. Critics: an outline nobody can check grounds nothing.

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Birkhoff's theorem

**For a measure-preserving flow, the long-run time average of an integrable observable exists for almost every starting state, and the average of those time averages over starts is the phase average.** 5.6 states the flow version; [`dynamical-systems` 5.5](../dynamical-systems/lessons/05-05-symbolic-dynamics-ergodicity.md) states it for maps.

- **The statement** (5.6). On an energy surface $\Gamma_E$ with flow $\phi_t$ and microcanonical measure $\mu$ (normalized [Liouville](#liouville-measure) volume), for integrable $f$ the time average $f^*(x) = \lim_{T\to\infty}\frac{1}{T}\int_0^T f(\phi_t x)\,dt$ exists for $\mu$-almost every $x$, and $\int f^*\,d\mu = \int f\,d\mu$. The flow is *ergodic* (every invariant set has measure 0 or 1) iff $f^* = \int f\,d\mu$ almost everywhere for every $f$. *In words:* time averages always exist and average out to the phase average; they equal it orbit by orbit only if no fat region traps the motion.
- **Circle rotations** (5.6 Example 1). Rotating the circle $[0, 1)$ by $1/4$, with $g$ the indicator of $[0, 1/3)$: time averages are $1/2$ or $1/4$ depending on the start, never $1/3$, yet they average over starts to $1/3$; the rotation is not ergodic. Rotating by an irrational amount, every orbit is equidistributed (Hermann Weyl, 1916).
- **Trap: it says time averages equal phase averages.** It says they exist almost everywhere; equality for every observable *is* ergodicity, an extra premise ([ergodic hypothesis](#ergodic-hypothesis)).
- **Trap: a non-ergodic system violates it.** Birkhoff holds for every measure-preserving flow; a non-ergodic one only lacks the pointwise equality.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Ergodic hypothesis

**The assumption that an isolated system's dynamics is ergodic on its energy surface, so that long-run time averages equal microcanonical phase averages for almost every start.** It underwrites 5.6's first account of statistical probability. [`dynamical-systems` 5.5](../dynamical-systems/lessons/05-05-symbolic-dynamics-ergodicity.md) calls it "the microscopic license"; [`stat-mech` 1.1](../stat-mech/lessons/01-01-mechanics-to-statistics.md) cautions that ergodicity is unproven.

- **The ergodic account** (5.6). P1: the probability of a macrostate $M$ is the long-run fraction of time spent in $\Gamma_M$. P2: the system is ergodic. C: that fraction is $\mu(\Gamma_M)$ for almost every start, and measurements, long compared with molecular times, return phase averages ([Birkhoff's theorem](#birkhoffs-theorem)). *In words:* dynamics plus a definition yields the measure.
- **Four objections** (John Earman and Miklos Rédei, "Why Ergodic Theory Does Not Explain the Success of Equilibrium Statistical Mechanics", 1996; David Malament and Sandy Zabell, 1980; Lawrence Sklar, 1993). *Timescales:* measurements are finite averages, which can differ widely from infinite ones, and $f^*$ is constant along orbits, so it cannot show an approach to equilibrium. *False of the systems:* by the [KAM theorem](#kam-theorem) small perturbations of integrable systems keep a positive-measure set of invariant tori, and generic Hamiltonian systems are neither integrable nor ergodic (Markus and Meyer, 1974). *Not necessary:* the [Kac ring](#kac-ring) and uncoupled anharmonic oscillators behave thermodynamically without being ergodic (Bricmont, 2001), so ergodicity cannot be what explains that behaviour. *Measure zero:* "almost every" is relative to $\mu$, the measure in question; the rationals have measure zero and are dense.
- **Repairs.** Weaken P2 to ergodicity off a set of measure $\varepsilon$ (Peter Vranas, 1998) or on each piece of a decomposition (Roman Frigg and Charlotte Werndl).
- **The ice cube** (5.6 Example 2). Nearly all the time is spent melted: a long-run fraction silent on whether *this* cube melts in the next ten minutes.
- **Trap: ergodicity is a property of an orbit.** It is a property of the dynamics together with a measure.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### KAM theorem

**Kolmogorov–Arnold–Moser: under small perturbations of an integrable Hamiltonian system, a set of invariant tori of positive measure survives, so the perturbed system is not ergodic on its energy surface.** Cited in 5.6 as standard mathematics.

- **Its use** (5.6). The "false of the systems" objection to the [ergodic hypothesis](#ergodic-hypothesis), with Markus and Meyer (1974): generic Hamiltonian systems are neither integrable nor ergodic.
- **The picture.** Integrable motion winds on tori ([`analytical-mechanics` 4.2](../analytical-mechanics/lessons/04-02-action-angle-integrability.md)); even an irrational orbit fills its torus without leaving it, as the circle rotation of 5.6 Example 1 does in miniature.
- **Its reach into typicality.** The Liouville measure is the unique invariant density on the energy surface only if the flow is ergodic, which KAM denies for the systems at issue ([measure objection](#measure-objection)).
- **Trap: ergodic on the torus is ergodic.** Motion dense on one torus is ergodic on that torus, not on the energy surface.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Typicality

**A behaviour is typical in a region when the states that show it fill all but a tiny fraction of the region's measure; typicality accounts explain thermodynamic behaviour as what nearly every microstate does.** Joel Lebowitz, "Boltzmann's Entropy and Time's Arrow" (1993); Sheldon Goldstein, "Boltzmann's Approach to Statistical Mechanics" (2001).

- **5.6's argument.** P1: equilibrium states fill nearly all of the energy surface $\Gamma_E$ (5.4's counting). P2: nearly all states in a low-entropy macrostate evolve toward equilibrium. C: thermodynamic behaviour is typical, and what nearly every state does needs no further explanation. *In words:* nearly every way of being in this macrostate leads to equilibrium, so expect it.
- **In 5.4.** From a non-equilibrium macrostate, a higher [Boltzmann entropy](#boltzmann-entropy) later is typical, not certain (C1). The counting shows only that equilibrium is big; that other states flow into it is a separate, dynamical "no conspiracy" premise.
- **The objections.** Roman Frigg (2009, 2011) and Jos Uffink (2007): a region's being big does not make atypical states flow into it without dynamical assumptions. The [measure objection](#measure-objection): nearly all by which measure?
- **In Bohmian mechanics** (2.1). Dürr, Goldstein and Zanghì (1992) justify [quantum equilibrium](#quantum-equilibrium) by the typicality of the universe's initial configuration relative to the $|\Psi|^2$ measure, the move Boltzmann made for thermodynamics; [equivariance](#equivariance) plays stationarity's role. Everett's Born weights against [branch counting](#branch-counting) (2.4) ask the same question: what makes a measure the right one?
- **6.2's flashback** applies the typicality defender's reasoning to one Kepler orbit.
- **Trap: typical means certain.** The rise is typical; reversed microstates exist, permitted and of tiny measure.
- **Trap: the counting proves the second law.** It proves only that equilibrium is big.
- **Left to you.** The exact band fractions for large $N$, and what they show about typicality, are Boss 5(b)'s; whether the status of the past hypothesis changes if statistical probabilities are read as typicality rather than chance is a clause of Boss 5(d).

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Measure objection

**Typicality, and any account that spreads probability evenly, needs a privileged measure: "nearly all" by which measure?** 5.6 states it without a single owner; the measure-zero point is Lawrence Sklar's (1993).

- **A worked case** (5.6). For an oscillator $x = A\cos\theta$, uniform in the phase angle $\theta$ gives $P(|x| > A/2) = 2/3$; uniform in position gives $1/2$: the lesson of [`epistemology` 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md)'s cube factory.
- **The defender: the dynamics chooses.** The [Liouville measure](#liouville-measure) is stationary and unchanged by canonical changes of coordinates ([`analytical-mechanics` 3.4](../analytical-mechanics/lessons/03-04-canonical-transformations.md)); for the oscillator it is uniform in $\theta$, matching the time fractions.
- **The rejoinder.** Any density $f(H)$ is stationary ([`stat-mech` 1.1](../stat-mech/lessons/01-01-mechanics-to-statistics.md) P3), and on the energy surface an invariant density must be constant exactly when the flow is ergodic, so typicality's measure leans on the premise it dropped ([ergodic hypothesis](#ergodic-hypothesis), [KAM theorem](#kam-theorem)).
- **The last reply: robustness.** If $\mu(B) \ge 1 - \varepsilon$ and $\nu$ has density at most $K$ relative to $\mu$, then $\nu(B) \ge 1 - K\varepsilon$. The measure is a posit judged by its yield: a law of the best system (Loewer) or the dynamics' natural measure (Goldstein). The critic concedes robustness makes the choice idle in practice; the defender concedes the measure is postulated, not derived.
- **The same question elsewhere.** [Maximum entropy](#maximum-entropy) needs a reference measure; Bohmian typicality uses $|\Psi|^2$ ([quantum equilibrium](#quantum-equilibrium), 2.1); Everett weighs branches by the Born rule, not by count ([branch counting](#branch-counting), 2.4).
- **Trap: it is Frigg's objection.** Frigg and Uffink object that typicality needs dynamical assumptions; the measure objection is a different charge.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Liouville measure

**Phase-space volume, $dq\,dp$; restricted to an energy surface and normalized, the microcanonical measure. Hamiltonian flow preserves it, and so do canonical changes of coordinates.** Liouville's theorem is [`analytical-mechanics` 3.2](../analytical-mechanics/lessons/03-02-phase-space-liouville.md); invariance under canonical transformations is [3.4](../analytical-mechanics/lessons/03-04-canonical-transformations.md).

- **The candidate** (5.6). Every account of statistical probability routes through it: the ergodic account's invariant measure, typicality's "nearly all", and the reference measure maximum entropy needs.
- **Stationary, not unique.** Every density $f(H)$ is stationary too; on the energy surface the invariant density is unique exactly when the flow is ergodic ([measure objection](#measure-objection)).
- **In 5.4.** Its preservation makes the fine-grained [Gibbs entropy](#gibbs-entropy) constant, and the [statistical postulate](#statistical-postulate) spreads probability by it.
- **In Bohmian mechanics.** $|\psi|^2$ plays its role, as more or less the only suitably local equivariant distribution ([equivariance](#equivariance)).
- **In 6.2's flashback** it is asked to choose between two shares of a Kepler orbit.
- **Trap: Liouville derives equal a priori probability.** It makes the uniform measure stationary; it does not single it out.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Maximum entropy

**E. T. Jaynes's epistemic account: statistical-mechanical probabilities are rational credences, chosen by maximizing $-\int\rho\ln\rho$ subject to what is known.** "Information Theory and Statistical Mechanics" (1957). The derivations of the ensembles are [`stat-mech` 6.2](../stat-mech/lessons/06-02-entropy-information-arrow.md) and [`information-theory` 4.4](../information-theory/lessons/04-04-maximum-entropy-stat-mech.md). *In words:* assume nothing the data do not force.

- **On this reading** (5.6), stat-mech 6.2 is right that the Boltzmann factor was "never an extra postulate": the postulate is a rule of inference.
- **The objection** (Michael Redhead, 1995; David Albert, 2000; Barry Loewer, 2001): kettles boil whatever anyone knows, so credences cannot explain why they boil.
- **The reply.** Nobody says ignorance does the boiling. Dynamics does, and maximum entropy says which predictions macroscopic data license.
- **The measure returns.** $-\int\rho\ln\rho$ changes under a change of variables ([`information-theory` 4.1](../information-theory/lessons/04-01-differential-entropy.md)), so the principle needs a reference measure; Jaynes took Liouville's ([Liouville measure](#liouville-measure)).
- **Within one physics course.** [`stat-mech` 1.1](../stat-mech/lessons/01-01-mechanics-to-statistics.md) calls ignorance "the excuse" and multiplicity the reason, while 6.2 says entropy *is* missing information: the count and credence readings, neither adopted in 5.6.
- **Jaynes on entropy itself** (5.4). See [coarse-graining](#coarse-graining).
- **Trap: the ice cube objection is Albert's.** The attested example is boiling kettles (Redhead, Albert, Loewer); the melting ice cube is 5.6's own case.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Objective chance

**A probability that is a feature of the world rather than of anyone's information, and that constrains rational credence through the [Principal Principle](#principal-principle).** 5.6's fourth question: are statistical-mechanical probabilities chances, though the laws are deterministic?

- **Poincaré** (5.6 Source: *Science and Method*, tr. Maitland 1914, pp. 66–67). "Chance, then, must be something more than the name we give to our ignorance." An insurer's dividends do not vanish when a far-sighted doctor tells him his clients' prospects; they are not a result of his ignorance. What they are a result of, the passage leaves open.
- **Two answers.** David Lewis: no, every chance in a deterministic world is 0 or 1. Barry Loewer: yes, best-system chances ([deterministic chance](#deterministic-chance)).
- **Bridges, not rivals.** Frequency, credence and chance each owe the others a bridge: time fractions must guide credence, credences must track frequencies, and chances need the Principal Principle. Frequency against degree of belief is [`philosophy-of-science` 3.1](../philosophy-of-science/lessons/03-01-two-schools-of-statistical-inference.md).
- **The reversed ice cube** (5.6 Example 2). Reverse every velocity and the cube unmelts: a permitted microstate of tiny measure. Why is the actual microstate not one of those? The typicality theorist says nothing more is owed; Loewer says a chance law answers it; the incompatibilist says there is no chance here, only a fact about the initial state.
- **Trap: determinism makes statistical probabilities subjective.** That is Lewis's incompatibilism, a contested thesis; for Loewer they are objective chances under deterministic laws.
- **Left to you.** Whether the status of the past hypothesis changes if its probabilities are typicality rather than chance is a clause of Boss 5(d).

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Principal Principle

**Known chances fix credence: $\mathrm{cr}\big(A \mid \Pr(A) = x \wedge E\big) = x$ for admissible evidence $E$, where $\mathrm{cr}$ is credence and $\Pr$ chance.** David Lewis, "A Subjectivist's Guide to Objective Chance" (1980); owned by [`epistemology` 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md), whose notation 5.6 uses. *In words:* known chances fix credence unless you hold evidence that bears on $A$ other than through its chance.

- **Admissibility** (5.6). For Lewis chance is indexed to a time, and history up to that time is admissible. A reliable report of what happens later is inadmissible, and the principle goes silent.
- **Unsure of the chance.** Apply the principle to each chance hypothesis and combine by total probability: credence is then expected chance.
- **Its role in incompatibilism.** Lewis's first premise, that the complete history to a time has chance 1 at that time, ties chance to admissible history ([deterministic chance](#deterministic-chance)).
- **Trap: inadmissible evidence changes the chance.** The chance stays what it was; only the principle stops applying.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Deterministic chance

**The thesis that a world with deterministic laws can contain non-trivial objective chances, such as the probabilities of statistical mechanics.** Barry Loewer, "Determinism and Chance" (2001).

- **Lewis's incompatibilism, reconstructed** (5.6). P1: at $t$, the complete history to $t$ and the laws have chance 1. P2: under deterministic laws, these entail $A$ or entail not-$A$. P3: whatever a chance-1 proposition entails has chance 1. C: in a deterministic world every chance is 0 or 1 (Lewis, *Philosophical Papers*, vol. II, 1986). *In words:* if the present and the laws settle the future, nothing is left for chance.
- **Loewer's compatibilism.** On the best-system account laws balance simplicity and strength "with a third criterion, *fit*, where the system assigns chances" ([`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md)). Adding the [statistical postulate](#statistical-postulate) to the dynamics and the past hypothesis, the [Mentaculus](#mentaculus), buys all of thermodynamics cheaply, so its probabilities are chances under deterministic dynamics. Loewer denies P1 for them: they attach to initial conditions, and the exact microstate is inadmissible. *In words:* a probability is a chance if it earns its place among the laws.
- **The line-up.** Jonathan Schaffer (2007) defends incompatibilism; Jenann Ismael (2009) and Roman Frigg with Carl Hoefer (2015) are compatibilists.
- **Why such chances are stable.** The [method of arbitrary functions](#method-of-arbitrary-functions).
- **Open in 5.6.** The crux between Lewis and Loewer is 5.6 P3.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Method of arbitrary functions

**For a sensitive mechanism, outcome probabilities come out nearly the same whatever smooth probability distribution is put over the initial conditions.** Poincaré's roulette needle, *Science and Method* (tr. Maitland 1914), Book I, ch. IV "Chance".

- **The roulette** (5.6). On a dial of a hundred alternating red and black sections, any smooth spread of spins gives red about half the time.
- **Its use.** It explains why [deterministic chances](#deterministic-chance) are stable: the outcome frequency hardly depends on which initial distribution nature supplies.
- **Its cousin.** The same chapter of Poincaré gives chance as a small unnoticed cause with a large effect ([sensitive dependence](#sensitive-dependence)).
- **Trap: any distribution will do.** The spread must be smooth on the scale of the sections; a spike on one section defeats it.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

**Module 6: Symmetry, gauge, and quantum fields**

### Symmetry

**A change that leaves something the same, and everything turns on what stays the same: the laws (a dynamical symmetry) or the fixed structure of spacetime (a spacetime symmetry).** 6.1's framing, with Earman's definitions ([dynamical and spacetime symmetries](#dynamical-and-spacetime-symmetries)).

- **One operation, three readings** (6.1). Sliding particles by $\epsilon$ yields momentum conservation ([Noether's theorem](#noethers-theorem)); Leibniz sliding the whole universe yields a verdict on what exists ([static shift](#static-shift), 4.1); a moving carriage is seen from the platform ([direct empirical significance](#direct-empirical-significance)).
- **Two settled jobs.** A symmetry yields conserved quantities, and it constrains which laws are candidates: Eugene Wigner (*Symmetries and Reflections*, 1967) described Einstein's 1905 work as reversing the old order, so that proposed laws are tested against invariance principles rather than the principles read off the laws. What a law is belongs to [`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md), laws in practice to [`philosophy-of-science` 4.4](../philosophy-of-science/lessons/04-04-laws-in-the-sciences.md).
- **The contested job.** From symmetry to what is real: the [symmetry-to-reality inference](#symmetry-to-reality-inference), whose conclusion marks a variant quantity as [surplus structure](#surplus-structure).
- **Global and local.** A global symmetry has constant parameters; a local one depends on arbitrary functions of space and time ([Noether's second theorem](#noethers-second-theorem); gauge in 6.2, [gauge transformation](#gauge-transformation)).
- **Elsewhere in the course.** Diffeomorphisms (4.5, [Leibniz equivalence](#leibniz-equivalence)), gauge (6.2) and the permutation of identical particles (6.3, [permutation invariance](#permutation-invariance)) are the same question, when symmetry-related models are one world.
- **Sideways.** Social choice runs "only invariant quantities are real": in [`decision-theory` 5.2](../decision-theory/lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) a welfare ranking is meaningful only if it survives every admissible rescaling of utilities. Symmetric laws with asymmetric states, the converse puzzle, are the pitchfork of [`dynamical-systems` 3.2](../dynamical-systems/lessons/03-02-pitchfork-symmetry.md) and the magnets of [`condensed-matter` 5.3](../condensed-matter/lessons/05-03-heisenberg-ising.md).
- **Trap: symmetric means unobservable.** A symmetry applied to a subsystem is seen against its environment ([direct empirical significance](#direct-empirical-significance)); what goes unobserved is the variant quantity, and a transformation of everything.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Dynamical and spacetime symmetries

**A dynamical symmetry maps solutions of the laws to solutions; a spacetime symmetry leaves spacetime's fixed structure unchanged.** 6.1, after John Earman, *World Enough and Space-Time* (1989), §3.4. A model of a spacetime theory $T$ is a manifold $M$ carrying [absolute objects](#absolute-and-dynamical-objects) $A$ and dynamical objects $P$; a diffeomorphism $d: M \to M$ carries objects along by pushforward $d_*$ ([pushforward of a field](#pushforward-of-a-field)).

- **D1, spacetime symmetry.** $d_*A = A$. *In words:* the fixed backdrop cannot register the change. For a fixed metric these are its isometries, generated by Killing vectors ([`differential-geometry` 5.3](../differential-geometry/lessons/05-03-lie-derivative-killing-vectors.md)); general relativity has no absolute objects, so every diffeomorphism qualifies.
- **D2, dynamical symmetry.** Whenever $\langle M, A, P\rangle$ is a model, so is $\langle M, A, d_*P\rangle$. *In words:* it maps solutions to solutions.
- **The standard case.** Newton's laws in [Newtonian spacetime](#newtonian-spacetime) have boosts as dynamical symmetries and not as spacetime symmetries, since a boost turns a body at rest into a moving one ([Galilean boost](#galilean-boost)).
- **Linking the lists.** [Earman's symmetry principles](#earmans-symmetry-principles) demand that the two match; 4.2 calls the demand [symmetry matching](#symmetry-matching).
- **Trap: one thing under two names.** They are defined over different objects, the absolute objects and the solutions. That the lists match is a norm, not a theorem.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Absolute and dynamical objects

**Absolute objects are the structure that is the same in every model of a theory; dynamical objects vary from model to model and obey the laws.** Earman (1989, §3.4), as 6.1 uses him to define the two kinds of symmetry.

- **Examples** (6.1). Absolute: Newton's standard of rest, the time metric. Dynamical: the trajectories of bodies, the fields.
- **General relativity** has no absolute objects: its metric is dynamical, so every diffeomorphism is a spacetime symmetry ([dynamical and spacetime symmetries](#dynamical-and-spacetime-symmetries)).
- **Trap: "absolute" means unobservable or substantival.** Here it means only "fixed across models".

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Earman's symmetry principles

**Spacetime should have no structure the laws ignore, and the laws should use no structure spacetime lacks.** John Earman, *World Enough and Space-Time* (1989, p. 46), offered as "conditions of adequacy" on theories of motion.

- **SP1.** Any dynamical symmetry of $T$ is a spacetime symmetry of $T$. *In words:* spacetime has no structure the laws ignore. When it fails, cut the surplus spacetime structure away.
- **SP2.** Any spacetime symmetry of $T$ is a dynamical symmetry of $T$. *In words:* the laws use no structure spacetime lacks. When it fails, the laws need structure spacetime has not supplied.
- **The clean case** (6.1 Example 1). The boost is a dynamical symmetry of Newton's laws and not a spacetime symmetry of [Newtonian spacetime](#newtonian-spacetime), so SP1 fails; the cure is [Galilean spacetime](#galilean-spacetime) (4.2), which keeps absolute acceleration and drops absolute rest. 4.2 runs the same test as [symmetry matching](#symmetry-matching).
- **Going round the shift argument.** Faced with a boost of everything ([kinematic shift](#kinematic-shift)), Earman rebuilds the theory in Galilean spacetime, where there is no absolute velocity for the models to differ in; what remains is the [hole argument](#hole-argument)'s question (6.1 Example 2).
- **Trap: swapping them.** SP1 fails when the laws have more symmetries than spacetime; SP2 fails when spacetime has more than the laws.
- **Trap: they are theorems.** They are norms linking two lists defined over different objects.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.3](lessons/06-03-particles-fields-or-structure.md)

### Noether's theorem

**Each continuous symmetry of an action yields a quantity conserved along solutions.** Emmy Noether (1918). In [`analytical-mechanics` 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md)'s notation the conserved quantity is

$$I = \sum_i \frac{\partial L}{\partial\dot q_i}\,\eta_i - F,$$

with $L$ the Lagrangian, $q_i$ the generalized coordinates, $\eta_i$ the generator of the symmetry (the rate at which it changes $q_i$) and $F$ the boundary function whose time derivative is the change the symmetry makes in $L$. Field forms: [`relativity` 3.2](../relativity/lessons/03-02-noether-fields.md), [`qft` 1.3](../qft/lessons/01-03-symmetries-noether-for-fields.md).

- **In words** (6.1): symmetry of the action gives conservation along solutions.
- **The boost's charge.** $Pt - Mx_{\text{cm}}$, with $P$ the total momentum, $M$ the total mass and $x_{\text{cm}}$ the centre of mass ([`analytical-mechanics` 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md) P3): the centre of mass moves uniformly. 6.1 counts this an *indirect* empirical consequence of the symmetry, routed through the laws ([direct empirical significance](#direct-empirical-significance)).
- **Electric charge** is the Noether charge of the *global* phase symmetry, as [`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md) states; constant $\chi$ in 6.2's [gauge transformation](#gauge-transformation).
- **Trap: charge comes from the local gauge symmetry.** Local symmetries fall under the [second theorem](#noethers-second-theorem), which yields identities, not further charges.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Noether's second theorem

**Symmetries that depend on arbitrary functions of space and time yield identities among the field equations, not further conserved quantities.** Noether (1918); Katherine Brading and Harvey Brown, "Symmetries and Noether's Theorems" (2003), as 6.1 cites them.

- **Where it bites.** The local $U(1)$ gauge symmetry of electromagnetism ([gauge transformation](#gauge-transformation)): its identities tie charge conservation to the electromagnetic field equations (6.1 Watch out).
- **Trap: local gauge symmetry is the Noether symmetry of charge.** Charge belongs to the global phase symmetry ([Noether's theorem](#noethers-theorem)); the local symmetry ties its conservation to the field equations.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Newton's Corollaries V and VI

**Corollary V: bodies in a space move the same among themselves whether the space rests or moves uniformly in a straight line. Corollary VI: bodies all urged by equal accelerative forces along parallel lines move among themselves as if unforced.** Newton, *Principia*, Corollaries to the Laws of Motion (Motte's translation, London, 1729, vol. 1: Corollary V p. 30, Corollary VI p. 31). Corollary V's motions are "the same among themselves, whether that space is at rest, or moves uniformly forwards in a right line without any circular motion".

- **Corollary V's shape** (6.1 Source). A statement, a proof from the second law, and "the experiment of a ship" as confirmation. 4.2 quoted the statement; 6.1 reads it with its proof.
- **What its words fix** (6.1). "Among themselves": only relative motions are claimed unchanged, a symmetry claim, not a claim about where the space is. "Without any circular motion": a boost, with rotation excluded, as the bucket requires ([Newton's bucket](#newtons-bucket)). "A given space": a region and its bodies, a subsystem, checked by experiments made inside one.
- **Derived, not free.** The proof works only by assuming that impulses arise from relative motions, which is why the SEP entry "Symmetry and Symmetry Breaking" calls the principle, demoted to a corollary, still an independent assumption.
- **In modern form** it is the [Galilean boost](#galilean-boost) as a dynamical symmetry (6.1 Example 1). Against Clarke's [kinematic shift](#kinematic-shift), its use is Boss 4(b)'s.
- **Corollary VI.** 6.1 P2 close-reads it; 4.2 cites it for Simon Saunders's argument ("Rethinking Newton's *Principia*", 2013) that gravitation needs only what he calls Newton–Huygens spacetime, less structure than [Galilean spacetime](#galilean-spacetime). Made local and universal, it is the [equivalence principle](#equivalence-principle) (4.4; [`relativity` 5.1](../relativity/lessons/05-01-equivalence-principle.md)).
- **Trap: "equal accelerative forces" as equal pushes.** Newton glosses them "with respect to the quantities of the bodies", so equal per unit of matter: equal accelerations.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Galilean boost

**Give every body the same extra constant velocity: $\mathbf x_i(t) \mapsto \mathbf x_i(t) + \mathbf v t$, one $\mathbf v$ for all bodies $i$.** Corollary V in modern form ([Newton's Corollaries V and VI](#newtons-corollaries-v-and-vi)); the computation is 4.1 Example 2.

- **What it changes.** Velocities shift by $\mathbf v$; separations $\mathbf x_j - \mathbf x_i$, relative velocities and accelerations are unchanged. So whenever forces depend only on separations, it maps solutions of Newton's laws to solutions: a dynamical symmetry ([dynamical and spacetime symmetries](#dynamical-and-spacetime-symmetries)).
- **Spacetime status.** Not a spacetime symmetry of [Newtonian spacetime](#newtonian-spacetime), whose standard of rest it changes, so SP1 fails there ([Earman's symmetry principles](#earmans-symmetry-principles)); a spacetime symmetry of [Galilean spacetime](#galilean-spacetime).
- **Applied to a subsystem,** with the rest of the world left alone, it is seen against the rest: the carriage slides past the platform ([direct empirical significance](#direct-empirical-significance)).
- **Applied to everything,** it is the [kinematic shift](#kinematic-shift) of 4.1, and every record comes out the same (6.1 Example 2).
- **Indirect consequence.** Its Noether charge says the centre of mass moves uniformly ([Noether's theorem](#noethers-theorem)).

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.3](lessons/06-03-particles-fields-or-structure.md)

### Direct empirical significance

**A symmetry has direct empirical significance when, applied to part of the world alone, it changes nothing inside that part yet is observable against the untransformed rest.** Peter Kosso, "The Empirical Status of Symmetries in Physics" (2000); Katherine Brading and Harvey Brown, "Are Gauge Symmetry Transformations Observable?" (2004).

- **The two conditions** (6.1). **(i)** A subsystem on which the transformation, applied to it alone, is a dynamical symmetry. **(ii)** An untransformed environment relative to which the two situations differ observably. *In words:* nothing inside reveals the change, and something outside does.
- **6.1's illustration.** A laboratory sealed in a railway carriage on straight track runs every experiment as at rest; step onto the platform and the carriage slides past.
- **Indirect significance.** Consequences routed through the laws, such as conserved quantities, are indirect ([Noether's theorem](#noethers-theorem)).
- **Silent on the whole universe.** Transform everything and condition (ii) cannot be met, so the criterion gives no verdict: it explains how we come to know a symmetry holds, not whether two whole-universe models differ (6.1 Example 2, [kinematic shift](#kinematic-shift)).
- **Local symmetries** (6.2). Kosso, and Brading and Brown, deny local gauge symmetries direct significance; Hilary Greaves and David Wallace ("Empirical Consequences of Symmetries", 2014) argue that some have it, if the transformation does not die away at the subsystem's edge ([gauge invariance](#gauge-invariance)).
- **Its paradigm** is [Galileo's ship](#galileos-ship).
- **Trap: the symmetry is unobservable.** The transformed subsystem is observed to differ from its environment; what condition (i) says is that no experiment *inside* reveals it.
- **Left to you.** Why Kosso, and Brading and Brown, take Galileo's ship as the paradigm, read from Salviati's own words, is Boss 6(a).

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Galileo's ship

**Galileo's thought experiment below the decks of a ship: no experiment in the cabin tells whether the ship is moving.** Salviati's passage in the Second Day of Galileo's *Dialogue*, which the syllabus's Boss 6(a) reads in Thomas Salusbury's English (*Mathematical Collections and Translations*, Tome I, London, 1661). [`relativity` 1.1](../relativity/lessons/01-01-postulates-simultaneity.md) paraphrases it as the principle of relativity.

- **Newton's confirmation.** Corollary V cites "the experiment of a ship" ([Newton's Corollaries V and VI](#newtons-corollaries-v-and-vi)).
- **A paradigm.** Kosso, and Brading and Brown, model their criterion of [direct empirical significance](#direct-empirical-significance) on this case under this name (6.1 Example 1).
- **Not Clarke's ship.** Clarke's ship in the Fourth Reply §13 belongs to the [kinematic shift](#kinematic-shift) debate (4.1).
- **Left to you.** The close reading (what Salviati sets up, what he says none of it can reveal and on what condition, which words give the cause and say what would reveal the motion) and why the ship is the paradigm are Boss 6(a). This card gives no reading of the passage.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Surplus structure

**Mathematics in a theory's models with nothing in the world answering to it, so that models differing only there describe one world.** Michael Redhead coined the phrase in "Symmetry in Intertheory Relations" (1975) and applied it to gauge in "The Interpretation of Gauge Symmetry" (2002): a theory represents physical structure inside a larger mathematical one, and what the larger adds, answering to nothing physical, is surplus (6.2 D2).

- **The paradigm** (6.1). Absolute velocity in Newtonian mechanics: boost the whole universe and every record comes out the same; calling the boosted model the same world treats absolute velocity as surplus.
- **Two routes to the verdict.** The conclusion of the [symmetry-to-reality inference](#symmetry-to-reality-inference); and Earman's remedy when SP1 fails, cutting surplus spacetime structure away ([Earman's symmetry principles](#earmans-symmetry-principles)).
- **Gauge** (6.2). On the surplus reading gauge-related potentials describe one state. On a lattice the surplus can be counted: in 6.2 Example 1, of a square's four link phases three are gauge-variable and one is invariant ([holonomy](#holonomy)).
- **The rival's price.** A realist about potentials must face the gauge hole ([gauge transformation](#gauge-transformation)), whose third horn is the surplus reading, as [Leibniz equivalence](#leibniz-equivalence) is for diffeomorphisms (4.5).
- **Redhead's puzzle** (2002). Why should a principle about surplus structure, the gauge principle, be so fruitful in building theories? ([ontic structural realism](#ontic-structural-realism)).
- **Where specialists sit.** The SEP reports most philosophers favouring a surplus or scaffolding reading of gauge; the dispute is open (6.2).
- **Trap: "a redundancy" settles it.** [`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md)'s phrase is the surplus reading, one position among several; the potentials realist denies it and pays with the gauge hole (6.2 Watch out).

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Symmetry-to-reality inference

**From "the laws are indifferent to a feature" to "we have some reason to think the feature unreal".** Shamik Dasgupta's name for it, in "Symmetry as an Epistemic Notion (Twice Over)" (2016). 6.1 reconstructs it for a putative feature $F$ and laws $L$:

- **P1** we have reason to think $L$ true and complete; **P2** $F$ is variant: models related by a symmetry of $L$ agree on everything else and differ in $F$; **P3** so $F$ is undetectable, since every measurement is a process governed by $L$; **P4** a feature undetectable in principle is one we have some reason not to believe in; **C** there is some reason to think $F$ unreal, and the symmetry-related models represent one world.
- **"Twice over."** The inference must pass through the epistemic lemma P3, and the symmetries that support it must be defined partly in epistemic terms, as transformations that preserve what can be detected.
- **Belot's case against** ("Symmetry and Equivalence", 2013). As a thesis about the symmetries of differential equations, the claim that symmetry-related solutions are physically equivalent is false, and mixing dynamical with epistemic conditions yields no clean definition; his cases include scaling symmetries. 6.1's own case of the kind: $m\ddot x = -kx$ ($m$ the mass, $k$ the spring constant) is linear, so doubling a solution gives a solution, yet the doubled oscillator carries four times the energy and a ruler shows the difference.
- **Weakest premise: P3** (6.1). Belot: variance does not entail undetectability. Dasgupta's reply: doubling the oscillator alone changes its relation to the ruler, so it is no symmetry in the sense the inference needs. The defender grants that the inference needs an account of what instruments detect; the critic grants that where a theory itself says a quantity is undetectable, as Newtonian mechanics says of absolute velocity, the oscillator leaves the inference untouched.
- **Other exits.** A substantivalist denies P4: things alike in every detectable respect can still be two (4.1, [identity of indiscernibles](#identity-of-indiscernibles)). Earman goes round the argument by rebuilding spacetime ([Earman's symmetry principles](#earmans-symmetry-principles)).
- **Elsewhere.** [Leibniz equivalence](#leibniz-equivalence) (4.5) is this inference for diffeomorphisms; the surplus reading of gauge (6.2) is it for gauge transformations.
- **Trap: "variant, so unreal" is a theorem.** It runs through an epistemic premise and concludes only "some reason"; mapping solutions to solutions is not enough.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.3](lessons/06-03-particles-fields-or-structure.md)

### Gauge transformation

**A change in the electromagnetic potentials, made together with a change in the phase of charged matter, that leaves the electric and magnetic fields and every prediction unchanged.** 6.2's convention: for a particle of charge $q$, potentials $\phi$ (scalar) and $\mathbf A$ (vector) give $\mathbf E = -\nabla\phi - \partial_t\mathbf A$ and $\mathbf B = \nabla\times\mathbf A$, and for any smooth, single-valued function $\chi(\mathbf x, t)$ the gauge transformation is

$$\mathbf A \to \mathbf A + \nabla\chi, \qquad \phi \to \phi - \partial_t\chi, \qquad \psi \to e^{iq\chi/\hbar}\psi,$$

with $\psi$ the particle's wavefunction and $\hbar$ the reduced Planck constant. *In words:* reset the phase everywhere, adjust the potentials, and every prediction stands.

- **6.2's picture.** Towns each set their clocks as they like (the phase at each point); each road carries a correction for crossing it ($\mathbf A$); a resetting changes the corrections on every road into the town and nothing anyone measures; the total round a loop of roads survives every resetting ([holonomy](#holonomy)).
- **Matching the siblings.** It is the SI minimal coupling $\mathbf p \to \mathbf p - q\mathbf A$ of [`analytical-mechanics` 2.1](../analytical-mechanics/lessons/02-01-cyclic-coordinates-momenta.md), and [`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md)'s $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$ with $\alpha = q\chi/\hbar$ and $e = q$, once that lesson's mostly-minus metric lowers the spatial index ($A_i = -A^i$). The Schrödinger equation with $H = (\mathbf p - q\mathbf A)^2/2m + q\phi$ ($\mathbf p$ the momentum operator, $m$ the mass) keeps its form.
- **Global and local.** Constant $\chi$ is the global symmetry whose Noether charge is electric charge ([Noether's theorem](#noethers-theorem)); $\chi$ varying from point to point is the local symmetry, which falls under [Noether's second theorem](#noethers-second-theorem).
- **On a lattice** (6.2 Example 1). A phase $\theta_{uv}$ sits on each link from vertex $u$ to $v$, in the continuum limit $(q/\hbar)\int_u^v \mathbf A\cdot d\mathbf l$; a transformation assigns $\alpha_v$ to each vertex and sends $\theta_{uv} \to \theta_{uv} + \alpha_v - \alpha_u$.
- **The gauge hole** (6.2 Lemma). Let $\chi$ vanish for $t \le t_0$ and not after. Then $(\phi, \mathbf A)$ and its transform solve Maxwell's equations with the same charges and currents, agree up to $t_0$, and differ after. *In words:* if gauge-related potentials are distinct states, their past does not fix their future. It is [4.5](lessons/04-05-the-hole-argument.md)'s [hole argument](#hole-argument) with $\chi$ for the diffeomorphism, and the same dilemma follows: indeterminism no measurement reveals, a privileged gauge, or a gauge version of [Leibniz equivalence](#leibniz-equivalence), which is the [surplus](#surplus-structure) reading.
- **An imperfect analogy.** Healey (2007, as Jonathan Bain's 2008 review reconstructs him): a diffeomorphism moves the base points themselves, a gauge transformation acts only on the internal space, and he sees no gauge analogue of Leibniz equivalence (6.2 Connections). 4.3 reported Rynasiewicz's reading of [Reichenbach's epsilon](#reichenbach-epsilon) as freedom of the same kind.
- **Trap: "gauge" means one thing.** The sibling courses use three senses: $L \to L + dF/dt$ ([`analytical-mechanics` 1.2](../analytical-mechanics/lessons/01-02-least-action-lagrange.md) P3), coordinate freedom in general relativity ([`relativity` 5.3](../relativity/lessons/05-03-einstein-field-equations.md)) and local $U(1)$ ([`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md)). 6.2 means the third (6.1 Connections).

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Gauge invariance

**A quantity is gauge-invariant if every gauge transformation leaves it unchanged: it ignores how the clocks were set.** 6.2 D1.

- **By 6.2's lights.** $\mathbf E$ and $\mathbf B$ are invariant ([`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md) P1), and so is the [holonomy](#holonomy) of a closed loop (D3); $\phi$ and $\mathbf A$ at a point shift by $-\partial_t\chi$ and $\nabla\chi$. 6.2 P1 sorts further candidates.
- **On a lattice** (6.2 Example 1). Link phases change under a resetting; the sum round a loop does not, because each vertex setting enters it once with each sign.
- **Is it observable?** Can gauging one part of the world be seen against the rest, like [Galileo's ship](#galileos-ship)? Kosso, and Brading and Brown, say no; Hilary Greaves and David Wallace (2014) say yes, if the transformation does not die away at the subsystem's edge ([direct empirical significance](#direct-empirical-significance)).
- **What averaging does.** Averaged over every setting, a non-invariant local quantity has expectation zero ([Elitzur's theorem](#elitzurs-theorem)).
- **A working use.** Veltman and 't Hooft used gauge invariance to give each Yang–Mills theory one presentation free of divergences and another with sensible probabilities, a working use of a supposedly surplus symmetry (6.2 Forward; [renormalization](#renormalization)).
- **Trap: invariant means real.** That is the [surplus](#surplus-structure) reading's premise, not a theorem; the potentials realist denies it (6.2 Watch out).
- **Left to you.** How gauge invariance bears on [separability](#separability) is 6.2 P1(b)'s question.

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Holonomy

**The total picked up by going round a closed loop; in electromagnetism, the phase factor that the potential accumulates round the loop.** 6.2 D3: for a closed loop $C$, the phase factor $e^{(iq/\hbar)\oint_C \mathbf A\cdot d\mathbf l}$ is the holonomy of $\mathbf A$ around $C$. *In words:* the loop total of the road corrections ([gauge transformation](#gauge-transformation)).

- **The geometry.** It is [`differential-geometry` 4.2](../differential-geometry/lessons/04-02-parallel-transport.md)'s turn of a vector carried round a loop, here a phase, with $\mathbf A$ the connection and $\mathbf B$ its curvature ([`differential-geometry` 5.4](../differential-geometry/lessons/05-04-fiber-bundles-connections.md)).
- **On a lattice** (6.2 Example 1). The plaquette sum $W$ of a square's link phases survives every resetting of the vertices, and for a small square approaches $q/\hbar$ times the flux through it. Averaged over the vertex settings, $e^{i\theta_{12}}$ goes to 0 while $e^{iW}$ is untouched ([Elitzur's theorem](#elitzurs-theorem) in miniature).
- **In the Aharonov–Bohm effect** the shift depends on $\mathbf A$ only through the loop the two paths enclose ([Aharonov-Bohm effect](#aharonov-bohm-effect)).
- **As an ontology.** That the phase factors of loops are what is real is the third of [Healey's three interpretations](#healeys-three-interpretations), after Tai Tsun Wu and Chen Ning Yang (1975) and Healey's own choice; [ontic structural realism](#ontic-structural-realism) about gauge counts the holonomies among the structure.
- **Trap: holonomic constraints.** Unrelated to those of [`analytical-mechanics` 1.3](../analytical-mechanics/lessons/01-03-generalized-coordinates-constraints.md). And differential geometry's holonomy is a rotation; a $U(1)$ holonomy is a phase factor.
- **Left to you.** How the loop integral $\frac{q}{\hbar}\oint_C\mathbf A\cdot d\mathbf l$ and its exponential each behave under a transformation whose $\chi$ is not single-valued, and which of the two is gauge-invariant without qualification, is Boss 6(b).

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md), [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Separability

**Settle what holds at each point, or in each part, and you have settled everything about the whole.** Two formulations in the course:

- **Healey's, for spacetime regions** (6.2 D4, from the SEP entry "Holism and Nonseparability in Physics"). A theory is spatiotemporally separable if every physical process in a region $R$ supervenes on an assignment of qualitative intrinsic properties to the points of $R$.
- **For quantum states** (2.3, 3.3). The state of a whole is fixed by the states of its parts.
- **Its pedigree** (6.2 Sideways). The spatial core of Lewis's Humean supervenience ([`metaphysics` 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md)), and the premise [EPR](#epr-argument) assumed (3.1): distant systems each have their own real state.
- **Entanglement violates it** for states. [Wavefunction realism](#wavefunction-realism) buys separability by making configuration space fundamental; [spacetime state realism](#spacetime-state-realism) keeps spacetime and gives separability up (2.3). [Many-worlds](#many-worlds-interpretation) removes action at a distance but keeps a nonseparable global state; Deutsch and Hayden (2000) offered a fully local account of the information flow, which Wallace and Timpson (2007) questioned (3.3).
- **In electromagnetism** (6.2). The [Aharonov–Bohm argument](#aharonov-bohm-effect)'s P2 speaks of "the electromagnetic state where they travel", a state built from point states.
- **Trap: separability is locality.** Separability is about whether facts are fixed part by part; locality, about whether anything acts at a distance. EPR assumed both, as separate premises (3.1).
- **Left to you.** Which of [Healey's three interpretations](#healeys-three-interpretations) makes electromagnetism separable is Boss 6(c).

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md), [3.3](lessons/03-03-nonlocality-and-relativity.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Aharonov-Bohm effect

**Electrons passing either side of a shielded solenoid, where the magnetic field is zero on every path, still have their interference fringes shifted by the flux inside.** Settled physics. Predicted by Werner Ehrenberg and Raymond Siday (1949), then Yakir Aharonov and David Bohm (1959): a phase difference $q\Phi/\hbar$, with $\Phi$ the enclosed flux.

- **Observed.** Robert Chambers saw a shift in 1960 with a magnetized iron whisker, though stray fields left doubt. Akira Tonomura's group at Hitachi (1986) sealed a ring magnet six micrometres across in superconducting niobium, which traps flux in quanta $h/2e$ ([`condensed-matter` 5.4](../condensed-matter/lessons/05-04-superconductivity-phenomena.md)); an odd number gives $e(h/2e)/\hbar = \pi$, and waves through the ring's hole came out half a fringe out of step with waves around it.
- **The puzzle** (6.2). Something electromagnetic made a difference where the field was zero, and the only local candidate the equations offer is $\mathbf A$, which [`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md) called a redundancy. 6.2's picture: a loop of roads round a lake, where loops on land total zero and the loop round the lake does not.
- **The argument** (6.2, after the SEP entry "Gauge Theories in Physics", 2025, §3.1). **P1** changing the enclosed flux shifts the fringes; **P2** a difference in what happens to the electrons is due to a difference in the electromagnetic state where they travel; **P3** where they travel, the different fluxes agree on $\mathbf E$ and $\mathbf B$, both zero, and differ only in potentials that no gauge transformation relates; **C** potentials that agree on $\mathbf E$ and $\mathbf B$ can represent different electromagnetic states. *In words:* field strengths at points are not the whole of electromagnetism.
- **Weakest premise: P2** (6.2). The objection: it assumes a state where the electrons travel built from point states ([separability](#separability)). The reply: P2 is why fields displaced action at a distance, and every escape from it has a price. The responses are [Healey's three interpretations](#healeys-three-interpretations).
- **Trap: it proved $\mathbf A$ real.** It shows that $\mathbf E$ and $\mathbf B$ at points underdescribe electromagnetism; the shift depends on $\mathbf A$ only through the loop ([holonomy](#holonomy)), which all three readings accommodate (6.2 Watch out).
- **Trap: a field leaked through.** Tonomura's niobium shielding is what removed that doubt.
- **Left to you.** Why $\mathbf A$ cannot be gauged to zero outside the solenoid, how the phase follows from Stokes's theorem and on what region $\mathbf A$ must be defined for it, and how the phase fares under large gauge transformations, are Boss 6(b); 6.2 points to [`differential-geometry` 3.3](../differential-geometry/lessons/03-03-exterior-derivative.md) for the tools.

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md), [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Healey's three interpretations

**Three readings of electromagnetism that the Aharonov–Bohm effect forces a choice among: only the fields are real; the potentials are real at each point; or the phase factors of loops are real.** Richard Healey, *Gauging What's Real* (2007), ch. 2, and "Nonlocality and the Aharonov–Bohm Effect" (1997).

- **Fields only.** What is real is $\mathbf E$ and $\mathbf B$ at points (with the gauge-invariant features of charged matter); the potentials describe nothing further. Bryce DeWitt's 1962 option, per the SEP.
- **Localized potentials.** The potential $\mathbf A$ itself is real at each point, as Aharonov and Bohm suggested.
- **Holonomies.** The phase factors of closed loops are what is real ([holonomy](#holonomy)), after Wu and Yang (1975); Healey's own choice.
- **Against the argument** (6.2). They are the three responses to the [Aharonov–Bohm argument](#aharonov-bohm-effect): resist it and keep only fields, or accept its conclusion with potentials, or with loops, as the bearers of the difference.
- **Disputed.** Healey's argument about the localized-potentials reading, and the objections of Tim Maudlin (1998) and Ruward Mulder (2021), are in 6.2 Example 2.
- **Related tests.** The [gauge hole](#gauge-transformation) and Redhead's puzzle ([surplus structure](#surplus-structure)) sort the potentials view, the fields-only view and [ontic structural realism](#ontic-structural-realism) in 6.2 P3.
- **Left to you.** For each reading: whether it makes electromagnetism [separable](#separability), whether it counts a gauge-dependent quantity as real, whether it explains the effect without action at a distance, and Healey's argument about the potentials reading. That is Boss 6(c), and this card does not lay it out; work it from 6.2 Example 2.

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Elitzur's theorem

**A local gauge symmetry cannot break spontaneously: averaging over all clock settings erases whatever depends on them.** Elitzur, "Impossibility of Spontaneously Breaking Local Symmetries" (1975): in lattice gauge theory without gauge fixing, every local quantity that is not gauge-invariant has expectation value zero.

- **In miniature** (6.2 Example 1). Averaged over the vertex settings, a single link's phase factor goes to 0, while the plaquette's is untouched ([holonomy](#holonomy)).
- **The Higgs mechanism.** [`nuclear-particle-physics` 5.2](../nuclear-particle-physics/lessons/05-02-electroweak-higgs.md)'s vacuum that breaks the gauge symmetry is textbook shorthand, standardly glossed as the breaking of a global remnant that survives gauge fixing.
- **Earman's worry** (2004). No real mass comes from eating "descriptive fluff". The $W$ and $Z$ do have mass and the Higgs boson was found in 2012, so the mechanism needs a gauge-invariant statement; Simon Friederich (2013) surveys the attempts.
- **Trap: the Higgs vacuum spontaneously breaks the electroweak gauge symmetry.** Read literally, the theorem forbids it; the phrase refers to a global remnant in a fixed gauge (6.2 Watch out).
- **Trap: Elitzur refutes the Higgs mechanism.** It refutes one description of it (6.4 Flashback).

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md), [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Ontic structural realism

**What there is, at bottom, is structure; objects are derivative on relations, or absent.** James Ladyman, "What Is Structural Realism?" (1998); Ladyman and Don Ross, *Every Thing Must Go* (2007). The general thesis and its objections are [`philosophy-of-science` 5.3](../philosophy-of-science/lessons/05-03-structural-realism.md)'s; this course applies it three times.

- **Spacetime** (4.5). If points' identity derives from their relations, the [hole argument](#hole-argument) joins the identity of quantum particles as physics' case for it (Ladyman 1998; Stachel; Saunders); Oliver Pooley (2006) denies the analogy runs deep.
- **Gauge** (6.2). Holger Lyre ("Holism and Structuralism in U(1) Gauge Theory", 2004): what there is, is the gauge-invariant structure, the symmetry group and the [holonomies](#holonomy), with objects only as equivalence classes under the group. Lyre's case, per the SEP: the gauge principle's success in building the Standard Model would be a miracle if it tracked nothing, yet the potentials are underdetermined ([surplus structure](#surplus-structure), Redhead's puzzle).
- **Particles** (6.3). What is real is structure such as permutation symmetry and the symmetry groups whose representations sort the particle kinds ([permutation invariance](#permutation-invariance)). Ladyman (1998) and French and Ladyman (2003) reach it from [metaphysical underdetermination](#metaphysical-underdetermination).
- **The costs.** Relations without relata: what is the structure a structure of? 6.2 P3's key adds that, once stated, it can look like Redhead's surplus reading under a new name; and taking holonomy structure as what there is, it inherits whatever the holonomy reading costs (6.2 Example 2).
- **Sideways.** The Russellian monist's premise that physics gives only structure ([`philosophy-of-mind` 3.5](../philosophy-of-mind/lessons/03-05-panpsychism-and-russellian-monism.md)) is the same question asked from the other side: the ontic structuralist ends with it, the monist starts from it.

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md), [6.3](lessons/06-03-particles-fields-or-structure.md)

### Particle ontology

**The view that matter consists of particles: things that can be counted, found in a place, and named.** 6.3, following the SEP entry "Quantum Field Theory" (Kuhlmann, revised 2026): particles are **(M1)** countable, with a number that does not depend on who counts; **(M2)** localizable, detectable in some bounded region and never in two disjoint regions at once; **(M3)** individuals, each this one and not that.

- **The working ontology of physics.** [`qft` 2.3](../qft/lessons/02-03-particles-as-excitations-energy-momentum.md) says a Fock state "*is* a relativistic particle"; fair as physics, and all particle talk in QFT rests on the count of [Fock space](#fock-space).
- **The four threats** (6.3). The [Unruh effect](#unruh-effect) (against M1); [Malament's theorem](#malaments-particle-theorem) and the [Reeh-Schlieder theorem](#reeh-schlieder-theorem) (against M2); [Haag's theorem](#haags-theorem) (against M1 wherever something happens); [permutation invariance](#permutation-invariance) (against M3).
- **6.3's conclusion.** If a fundamental particle ontology needs M1–M3, relativistic QFT supplies none, and the [field ontology](#field-ontology) inherits the Unruh and Haag troubles and the state half of Reeh–Schlieder.
- **Versions that survive.** Paul Teller's quanta (*An Interpretive Introduction to Quantum Field Theory*, 1995), countable but not labelled; Jonathan Bain (2000), particles in the asymptotic states that scattering data refer to; Bohmian particles created and destroyed stochastically (Bell 1987; Dürr, Goldstein, Tumulka and Zanghì 2004, 2005), a choice of [primitive ontology](#primitive-ontology).
- **Weakest premise: that particles need M1–M3 at the fundamental level.** David Wallace (2006, 2011): particles are emergent and scale-dependent, real at the energies and in the states where the Fock description applies, much as phonons are in a crystal. Reply: "particle" then no longer names the fundamental ontology, and the question moves to what particles emerge from. The emergentist concedes particles are not fundamental; the critic concedes particle talk is no error where Fock space applies. 6.4 takes this up as [effective realism](#effective-realism).
- **Trap: a state with no definite particle number refutes particles.** That is ordinary quantum indefiniteness (6.3 Example 2, a coherent state; [`photonics-quantum-optics` 3.3](../photonics-quantum-optics/lessons/03-03-coherent-states.md) owns the physics). The threats are the count's frame-dependence, non-localizability and Haag.

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Fock space

**The state space of a free quantum field, built mode by mode: each state says how many quanta occupy each mode, and the number operator counts them.** [`qft` 2.2](../qft/lessons/02-02-creation-annihilation-fock-space.md) owns the construction: the free field becomes one harmonic oscillator per momentum mode, and a quantum is one rung up one ladder.

- **Notation** (6.3, in [`qft` 2.2](../qft/lessons/02-02-creation-annihilation-fock-space.md)'s normalization). $[a_{\mathbf p}, a_{\mathbf q}^\dagger] = (2\pi)^3\delta^3(\mathbf p - \mathbf q)$ and $N = \int \frac{d^3p}{(2\pi)^3}\, a_{\mathbf p}^\dagger a_{\mathbf p}$, with $a_{\mathbf p}^\dagger$ and $a_{\mathbf p}$ creating and annihilating a quantum of momentum $\mathbf p$ and $N$ the number operator. For one mode of a box, $[a_{\mathbf k}, a_{\mathbf k}^\dagger] = 1$.
- **Where the trouble enters.** The modes are positive-frequency with respect to inertial time $t$; a counter with a different time builds a different number operator ([Unruh effect](#unruh-effect)).
- **How many, never which.** Its states give occupation numbers, not labels, so Fock space never raises the question of which quantum is which: Teller's quanta can be counted but not labelled ([permutation invariance](#permutation-invariance)).
- **Only for free fields.** An interacting field cannot live in the free Fock representation ([Haag's theorem](#haags-theorem)).
- **Same space, other reading.** The wave-functional space of field configurations is unitarily equivalent to it (Baker 2009; [field ontology](#field-ontology)).

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Unruh effect

**Whether particles are present depends on how the counter moves: a detector accelerating through empty space clicks as if bathed in warm radiation, while an inertial one never clicks.** Stephen Fulling (1973), Paul Davies (1975), William Unruh (1976). A detector with constant proper acceleration $a$ through the Minkowski vacuum $|0_M\rangle$ responds as if immersed in thermal radiation at

$$T_U = \frac{\hbar a}{2\pi c k_B},$$

with $\hbar$ the reduced Planck constant, $c$ the speed of light and $k_B$ Boltzmann's constant.

- **What is going on** (6.3). $|0_M\rangle$ has $N = 0$ exactly, but the number operator built from the detector's own time (the Rindler number) has no definite value in it, and in the region the detector can see the vacuum is thermal.
- **Seen inertially** (Unruh and Wald 1984). The detector's excitation comes with the *emission* of an ordinary quantum, paid for by whatever pushes it.
- **Its size** (6.3 Example 1). $\hbar/(2\pi c k_B) = 4.055\times10^{-21}$ K per m/s$^2$, so at $a = g = 9.81$ m/s$^2$, $T_U = 3.98\times10^{-20}$ K. The smallness changes nothing in principle: at any $a > 0$ the two detectors disagree.
- **Status.** It follows from free QFT but has not been observed directly. A Bose–Einstein condensate reproduced its thermal signature with nothing accelerated (Hu, Feng, Zhang and Chin, 2019), and a reanalysis of positron-channelling data claims an indication (Lynch, Cohen, Hadad and Kaminer, 2021).
- **What it shows is disputed** (6.3 Example 1). Teller (1995): the vacuum has definite Minkowski number zero and only propensities for Rindler quanta, none actual. Rob Clifton and Hans Halvorson (2001): neither description is privileged; both are true, in terms of propensities. Arageorgis, Earman and Ruetsche (2003): the Rindler vacuum is not physically realizable, so the effect is no special threat to the particle interpretation, which they think is losing anyway.
- **Against M1** of [particle ontology](#particle-ontology); and by Baker's equivalence it reaches field configurations too ([field ontology](#field-ontology)).
- **Same form as Hawking's.** [`relativity` 6.5](../relativity/lessons/06-05-black-hole-thermodynamics.md)'s Hawking temperature, with the surface gravity $\kappa$ in place of $a$.
- **Trap: Hawking radiation in flat spacetime.** Nothing loses mass in it: it needs an accelerated detector, while a black hole radiates and shrinks whoever watches. Same formula, different physics.
- **Trap: $h$ for $\hbar$,** a factor $2\pi$ too large, or dropping the $2\pi$ in the denominator.

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Malament's particle theorem

**A relativistic quantum theory of localizable particles finds its particle nowhere.** David Malament, "In Defense of Dogma" (1996). To each bounded region $\Delta$ of a spacelike hyperplane assign a projection $E_\Delta$, "the particle is found in $\Delta$". Assume **(i)** translation covariance: translating a region translates its projection; **(ii)** energy: energy is bounded below in every inertial frame; **(iii)** localizability: $E_{\Delta_1}E_{\Delta_2} = 0$ for disjoint regions of one hyperplane; **(iv)** locality: $E_{\Delta_1}E_{\Delta_2} = E_{\Delta_2}E_{\Delta_1}$ for spacelike-separated regions. Then $E_\Delta = 0$ for every bounded $\Delta$.

- **What carries what** (6.3). (iii) is the particle concept; (iv) is relativity, forbidding statistics in one region to depend on what is done at spacelike separation.
- **The physics behind it.** [`qft` 2.5](../qft/lessons/02-05-causality-microcausality.md) Example 2, where a positive-frequency amplitude leaks outside the light cone.
- **No escape by blurring.** Hans Halvorson and Rob Clifton ("No Place for Particles in Relativistic Quantum Theories?", 2002) showed that unsharp localization does not escape.
- **Malament's moral.** QFT can only be a field theory ([field ontology](#field-ontology)). It is against M2 of [particle ontology](#particle-ontology), and against Hacking's electrons "if you can spray them" ([`philosophy-of-science` 5.4](../philosophy-of-science/lessons/05-04-constructive-empiricism-and-entity-realism.md)): what is sprayed, if not something localizable?
- **Trap: the 1977 theorem.** [Malament's simultaneity theorem](#malaments-simultaneity-theorem) (4.3) derives simultaneity from causal structure; this one (1996) rules out localizable relativistic particles. One author, two results.
- **Trap: the result itself is open to dispute.** It is a theorem; the disputes are over its conditions and what they formalize (6.3 P2).

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Reeh-Schlieder theorem

**The vacuum is so entangled across space that operations in any small region, acting on it, can approximate any state at all, so no local measurement tells an $N$-particle state from the vacuum.** Reeh and Schlieder (1961): operations confined to any open region, however small, acting on the vacuum, approximate every state, including states that differ from the vacuum far away.

- **Redhead's moral** ("More Ado About Nothing", 1995). No local measurement can confirm that $N$ quanta are present: against M2 of [particle ontology](#particle-ontology).
- **It presses fields too.** [`qft` 1.1](../qft/lessons/01-01-why-qm-relativity-forces-fields.md)'s slogan that "the field is what's really localizable" holds for field *operators*, local by microcausality, not for *states* ([field ontology](#field-ontology)).

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Haag's theorem

**An interacting quantum field cannot be written on the free field's Fock space, so the textbook interaction picture does not exist as written.** Rudolf Haag (1955); John Earman and Doreen Fraser, "Haag's Theorem and its Implications for the Foundations of Quantum Field Theory" (2006), for philosophers. The interaction picture is [`qft` 3.1](../qft/lessons/03-01-interaction-picture-s-matrix.md)'s.

- **Against particles** (6.3). Doreen Fraser (2008) concludes that interacting theories admit no particle interpretation; Bain (2000) keeps particles in the asymptotic states that scattering data refer to. Against M1 of [particle ontology](#particle-ontology) wherever something happens.
- **Against fields too.** Baker (2009) carries it over to field configurations ([field ontology](#field-ontology)).
- **Against a formulation** (6.4). Fraser uses it in arguing that the textbook interaction picture is inconsistent, one reason to interpret [algebraic QFT](#algebraic-qft) ([Fraser-Wallace dispute](#fraser-wallace-dispute)).
- **Trap: it refutes the Standard Model's predictions.** It concerns what the interaction picture can literally represent; conventional QFT with a cutoff is where the Standard Model is formulated and confirmed (6.4).

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md), [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Permutation invariance

**Swapping two identical particles changes nothing physical, so their labels are bookkeeping.** Identical-particle states are symmetric (bosons) or antisymmetric (fermions) under exchange ([`quantum-mechanics` 5.1](../quantum-mechanics/lessons/05-01-identical-particles.md)).

- **The puzzle for individuality** (6.3). Two electrons in the singlet share every property the state assigns either, so they seem to break the [identity of indiscernibles](#identity-of-indiscernibles) ([`metaphysics` 2.1](../metaphysics/lessons/02-01-substance-and-accident.md) handed the question here). Against M3 of [particle ontology](#particle-ontology).
- **French and Redhead's dilemma** (1988). Non-individuals, or individuals by a thisness physics never sees.
- **The received view** takes the first horn: quantum particles are not individuals (Steven French and Décio Krause, *Identity in Physics*, 2006).
- **Saunders's answer** (2003, 2006): [weak discernibility](#weak-discernibility).
- **The structuralist turn.** The stalemate becomes [metaphysical underdetermination](#metaphysical-underdetermination), and so a case for [ontic structural realism](#ontic-structural-realism).
- **Fock space never raises it.** Its states say how many quanta occupy each mode, never which ([Fock space](#fock-space)).
- **6.1's question for quanta.** When are symmetry-related descriptions one world? ([symmetry](#symmetry); 6.3 Connections.)

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Weak discernibility

**Two things are weakly discernible if they bear each other a relation that nothing bears to itself.** Simon Saunders (2003, 2006). The two electrons in the singlet bear the relation "has spin opposite to", which nothing bears to itself, so there are two.

- **Its job** (6.3). It answers French and Redhead's dilemma without a thisness physics never sees: a weak form of the [identity of indiscernibles](#identity-of-indiscernibles) holds ([permutation invariance](#permutation-invariance)).
- **Its rival.** The received view: quantum particles are not individuals at all (French and Krause, 2006).

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Metaphysical underdetermination

**When the physics fits two incompatible metaphysical packages equally well, believe only what they share.** James Ladyman (1998), and French and Ladyman (2003), turning the stalemate over quantum individuality into an argument: the physics fits particles as individuals (by a thisness) and as non-individuals, so believe only the structure common to both ([ontic structural realism](#ontic-structural-realism)).

- **Its source.** French and Redhead's dilemma ([permutation invariance](#permutation-invariance)).

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Field ontology

**The view that the quantum field is the thing, and particles are features of its states, like waves on a lake.** Its default version is the [wave-functional interpretation](#wave-functional-interpretation). [`qft` 1.1](../qft/lessons/01-01-why-qm-relativity-forces-fields.md) speaks in this voice ("the field is what's really localizable, not the particle"), and Malament drew it from his theorem ([Malament's particle theorem](#malaments-particle-theorem)).

- **Trouble 1: no field at a point** (6.3). A field at a point is not an operator; only smeared fields $\phi(f) = \int \phi(x) f(x)\, d^4x$ are, with $f$ a test function over spacetime points $x$.
- **Trouble 2: Baker's equivalence.** David Baker ("Against Field Interpretations of Quantum Field Theory", 2009) shows that wave-functional space is unitarily equivalent to [Fock space](#fock-space), so the [Unruh effect](#unruh-effect) and [Haag's theorem](#haags-theorem) carry over.
- **Trouble 3: states are not local.** The [Reeh-Schlieder theorem](#reeh-schlieder-theorem) leaves no local test of what a state contains.
- **6.3's laser beam** (Example 2). In a coherent state the field amplitude is sharp to vacuum size and the count is spread; in a number state the reverse. One Hilbert space serves both readings, Baker's equivalence in miniature, so no state settles which is fundamental.
- **Bohmian versions** choose field configurations as the [primitive ontology](#primitive-ontology), surveyed by Ward Struyve (2010).
- **Trap: "the field is what's really localizable" escapes.** Only smeared field operators are local; Reeh–Schlieder and Baker reach the states (6.3 Watch out).

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Wave-functional interpretation

**A quantum field state read as a superposition of classical field configurations, as a particle's wavefunction superposes positions.** 6.3 calls it the default [field ontology](#field-ontology), after the SEP entry "Quantum Field Theory".

- **Its main objection.** Baker (2009): wave-functional space is unitarily equivalent to [Fock space](#fock-space), so the arguments against particles carry over.

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Algebraic QFT

**A formulation of quantum field theory that starts from what can be measured in each region of spacetime, and derives particles and fields from it.** Rudolf Haag and Daniel Kastler (1964): basic is the net $\mathcal O \mapsto \mathcal A(\mathcal O)$, assigning each bounded spacetime region $\mathcal O$ the algebra $\mathcal A(\mathcal O)$ of observables measurable there.

- **A rival to particles and fields** (6.3). Particles and fields are derived notions, not basic.
- **Its cost.** Interacting models of its axioms have been built in lower dimensions, but none yet for a four-dimensional theory of particle physics.
- **Fraser's choice** (6.4). Doreen Fraser argues that philosophers should interpret it; Wallace, conventional QFT with a cutoff. Fraser grants that the underdetermination between them is so far only potential, since no realistic interacting algebraic model exists ([Fraser-Wallace dispute](#fraser-wallace-dispute)).
- **Trap: a different theory.** It is a rival formulation; the dispute is over which formulation to interpret.

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md), [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Effective field theory

**A theory with a scale bar: built to describe physics below some energy $\Lambda$, with whatever happens above $\Lambda$ summarized in a handful of numbers.** 6.4's street map drawn at 1:10,000 shows no bricks, is not wrong about the streets for that, and its scale bar says how far to trust it. Below $\Lambda$ means at distances longer than about $1/\Lambda$ (with $\hbar = c = 1$). Its form (6.4 D1), every interaction the symmetries allow, ordered by suppression:

$$\mathcal L_{\text{eff}} = \mathcal L_{\Delta\le 4} + \sum_{\Delta>4}\frac{c_\Delta}{\Lambda^{\Delta-4}}\,\mathcal O_\Delta,$$

with $\mathcal L_{\text{eff}}$ the effective Lagrangian, $\mathcal O_\Delta$ an operator of mass dimension $\Delta$ and $c_\Delta$ a pure number; at energy $E$ a term's relative effect is about $c_\Delta(E/\Lambda)^{\Delta-4}$ ([relevant and irrelevant operators](#relevant-and-irrelevant-operators)).

- **Where the rule comes from.** That every interaction the symmetries allow appears is the rule [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) supplied (6.4 Connections).
- **Fermi theory** (6.4 Example 1). The $W$ boson seen from far away ([`nuclear-particle-physics` 5.1](../nuclear-particle-physics/lessons/05-01-weak-interaction.md)): its coupling of dimension $-2$ makes its strength at energy $E$ the pure number $G_F E^2$, which reaches 1 near $G_F^{-1/2} \approx 293$ GeV, so new physics had to appear by a few hundred GeV; the $W$ came at $M_W \approx 80.4$ GeV. It was right about a four-fermion interaction of strength $G_F$ and wrong that it happens at a point, the claim its own power counting placed beyond its reach.
- **Gravity** (6.4 Example 2). General relativity read as an EFT (Einstein's action plus every higher-curvature term the symmetries allow) has quantum corrections in powers of $(E/M_{\text{Pl}})^2$, with the Planck mass $M_{\text{Pl}} \approx 1.22\times10^{19}$ GeV; John Donoghue (1994) computed the leading, parameter-free quantum correction to the attraction of two masses. Near $M_{\text{Pl}}$ the expansion fails, and the theory says which questions it cannot answer.
- **Trap: "effective" means inconsistent above $\Lambda$, or the verdict "only an effective theory".** It claims a domain (6.4 The idea). QED's coupling grows toward a Landau pole and signals its own limit; QCD is [asymptotically free](#asymptotic-freedom) and may be consistent at all energies, and calling it effective says only that it is not the whole story above some scale.
- **Left to you.** Whether the Standard Model's being effective supports realism or hands the pessimistic induction its best case is Boss 6(d) ([effective realism](#effective-realism)).

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Renormalization

**Hiding the dependence of loop corrections on short-distance physics inside a few measured couplings, so predictions come out finite.** The physics is [`qft` 6.4](../qft/lessons/06-04-loops-uv-divergences.md)–[6.6](../qft/lessons/06-06-running-couplings-renormalization-group.md): regularization, counterterms, running couplings. 6.4 asks what it means.

- **The older view.** A theory needing infinitely many counterterms was sick, and renormalizability was required of any acceptable theory; Gerard 't Hooft's 1971 demonstration that massive Yang–Mills theories are renormalizable was widely taken as what made the electroweak theory a serious candidate (6.4 P3).
- **Wilson's view** (6.4 The idea). Averaging over short distances generates every interaction the symmetries allow, but the [non-renormalizable](#non-renormalizable-theory) ones fade at low energies by powers of $E/\Lambda$. So, on this view, any theory looks renormalizable far below its cutoff, whatever lies above, and renormalizability stops being a certificate and becomes a symptom of distance from $\Lambda$ ([renormalization group](#renormalization-group)).
- **Gauge invariance at work.** Veltman and 't Hooft used it to give each Yang–Mills theory one presentation free of divergences and another with sensible probabilities (6.2 Forward; [gauge invariance](#gauge-invariance)).
- **Trap: "renormalizable" means true or fundamental.** On the Wilsonian view it is what any theory looks like far below its cutoff; Fermi theory and gravity are non-renormalizable and accurate where we use them.
- **Left to you.** Whether renormalizability is a mark of truth or an accident of low energies is 6.4 P3's crux.

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Non-renormalizable theory

**A theory with a coupling of negative mass dimension, which by power counting needs infinitely many counterterms; on Wilson's view, a theory whose extra interactions fade at low energies.** [`qft` 6.4](../qft/lessons/06-04-loops-uv-divergences.md) gives the power counting; with $\hbar = c = 1$, an interaction built from an operator of mass dimension $\Delta$ carries a coupling of mass dimension $4 - \Delta$ in four dimensions.

- **Exactly the irrelevant ones** (6.4 D1). Couplings of negative mass dimension are those of the irrelevant operators, suppressed by powers of $E/\Lambda$ ([relevant and irrelevant operators](#relevant-and-irrelevant-operators)).
- **Examples.** Fermi's four-fermion interaction has $\Delta = 6$, so $G_F$ has dimension $-2$; Newton's constant $G$ also has mass dimension $-2$, which is why power counting calls general relativity non-renormalizable ([`qft` 6.5](../qft/lessons/06-05-regularization-renormalization.md) P3). Both are accurate where we use them ([effective field theory](#effective-field-theory)).
- **Predictive below its cutoff.** Both the old view and Wilson's agree that such a theory predicts to any finite order in $E/\Lambda$; they disagree over what renormalizability says about truth ([renormalization](#renormalization)).

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Relevant and irrelevant operators

**Interactions sorted by whether they grow, hold steady or fade as you go to low energies.** 6.4 D1: in four dimensions an operator of mass dimension $\Delta$ is relevant if $\Delta < 4$ (a mass term), marginal if $\Delta = 4$ (a gauge coupling), irrelevant if $\Delta > 4$; written with coupling $c_\Delta/\Lambda^{\Delta-4}$, its relative effect at energy $E$ is about $c_\Delta(E/\Lambda)^{\Delta-4}$.

- **In words.** The higher an interaction's dimension, the more it is suppressed below $\Lambda$.
- **Direction.** Read toward low energies, as in [`stat-mech` 5.5](../stat-mech/lessons/05-05-renormalization-group.md), not in the direction [`qft` 6.6](../qft/lessons/06-06-running-couplings-renormalization-group.md) runs couplings (6.4 The idea).
- **Fermi's tower** (6.4 Example 1). Expanding the $W$ propagator gives Fermi's $\Delta = 6$ interaction first, then a $\Delta = 8$ correction suppressed by $(q/M_W)^2$, with $q$ the momentum transfer.
- **Relevant parameters and [naturalness](#naturalness).** The vacuum energy ($\Delta = 0$) and the Higgs mass term ($\Delta = 2$) are relevant, and an EFT leads one to expect them near the cutoff's scale.
- **Trap: "irrelevant" means unimportant.** It means suppressed at low energies: Fermi's interaction is irrelevant and is the whole of beta decay.

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Renormalization group

**Changing the scale at which you describe a system moves the theory to a new set of couplings: a theory is a point in a space of couplings, and coarse-graining moves the point.** Kenneth Wilson, "Renormalization Group and Critical Phenomena" (1971), building on Leo Kadanoff's block spins (1966): integrating out the modes between $\Lambda$ and a lower $\Lambda'$ yields a theory of the same form with changed coefficients. The physics is [`stat-mech` 5.5](../stat-mech/lessons/05-05-renormalization-group.md) and [`qft` 6.6](../qft/lessons/06-06-running-couplings-renormalization-group.md).

- **History** (6.4). It began in QFT, with Ernst Stueckelberg and André Petermann (1953) and Murray Gell-Mann and Francis Low (1954); Wilson's version came from critical phenomena (Nobel Prize, 1982).
- **Its signature result** is [universality](#universality).
- **Its use in the realism debate.** With [decoupling](#decoupling), it shows that what a theory says well below $\Lambda$ is insensitive to which of a large class of high-energy theories is true: premise P2 of [effective realism](#effective-realism), and the insensitivity both sides of the [Fraser-Wallace dispute](#fraser-wallace-dispute) invoke.
- **Trap: it began in statistical mechanics.** The QFT version came first; Wilson's reformulation came from critical phenomena and returned to QFT.

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Universality

**Physically unlike systems share critical behaviour because they differ only in couplings that fade under coarse-graining.** 6.4 T1: systems differing only in irrelevant couplings flow to the same fixed point and share critical exponents ([`stat-mech` 5.4](../stat-mech/lessons/05-04-critical-exponents-universality.md)).

- **Batterman's reading** ("Multiple Realizability and Universality", 2000). A physical explanation of the multiple realizability of [`philosophy-of-science` 4.5](../philosophy-of-science/lessons/04-05-reduction-and-emergence.md): it shows why unlike microscopic realizers behave alike. 6.4 Sideways: multiple realizability with a mechanism.
- **The engine** is the [renormalization group](#renormalization-group) and the fading of [irrelevant operators](#relevant-and-irrelevant-operators).

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Decoupling

**Heavy particles affect low-energy physics only through the values of a few couplings and through corrections that shrink as the mass grows.** Thomas Appelquist and James Carazzone, "Infrared Singularities and Massive Fields" (1975): if some particles of mass $M$ are much heavier than the energies $E$ probed, their low-energy effects can be absorbed into the couplings of a theory without them, up to corrections suppressed by powers of $E/M$.

- **In words** (6.4). A low-energy experiment sees heavy physics only through a few numbers and faint corrections.
- **Its condition.** The theorem lets heavy masses grow with couplings held fixed; where a mass is large because a coupling is, as for the top quark, heavy effects need not fade.
- **Its use.** With the [renormalization group](#renormalization-group), premise P2 of [effective realism](#effective-realism); non-decoupling is among the cases its critics cite (6.4, weakest premise).
- **Left to you.** Boss 6(d) asks you to explain decoupling as part of an essay on effective realism; the essay is yours.

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Effective realism

**Realism with the scale bar attached: believe what an effective theory says at the scales where it is reliable, and nothing it says beyond its cutoff.** Porter Williams, "Scientific Realism Made Effective" (2019); J. D. Fraser, "Renormalization and the Formulation of Scientific Realism" (2018). 6.4's reconstruction, labelled its own:

- **The skeleton.** **P1** our best quantum field theories are effective: they say of themselves that they are reliable only below some $\Lambda$; **P2** by the [renormalization group](#renormalization-group) and [decoupling](#decoupling), what they say well below $\Lambda$ is insensitive to which of a large class of high-energy theories is true; **P3** a realist should believe what a theory's success depends on and what would survive the replacement of its unknown parts, the divide et impera of [`philosophy-of-science` 5.2](../philosophy-of-science/lessons/05-02-the-pessimistic-induction-and-selective-realism.md); **C** believe what an EFT says about the structures and entities it describes at its own scales, and nothing it says beyond $\Lambda$, such as field values at a point or the bare parameters.
- **Williams's diagnosis.** The standard method interprets a theory as if true at all scales, so it finds the theories physicists use unfit to interpret: a vice of the method, not of the theories.
- **Advertised gain.** Timing: the theory marks its at-risk claims before its successor arrives, as the hindsight objection demanded (Fermi theory, [effective field theory](#effective-field-theory)).
- **The rival.** Laura Ruetsche ("Renormalization Group Realism: The Ascent of Pessimism", 2018): the strategy does not disarm the pessimist's sceptical possibilities but makes them retreat a level, where they still carry force.
- **Weakest premise: P2** (6.4). Robustness holds relative to a space of alternatives, and the pessimist needs only possibilities outside it; non-decoupling and the failures of [naturalness](#naturalness) add cases where low energies feel high ones. The realist concedes that robustness is relative to the alternatives surveyed; the critic, that EFTs say in advance which of their claims are at risk.
- **Not Doreen Fraser.** J. D. Fraser (2018) is a different author from the Doreen Fraser of the [Fraser-Wallace dispute](#fraser-wallace-dispute).
- **Left to you.** Whether effective realism or its rival wins, at each side's strength, and what 6.3's troubles for particles ([particle ontology](#particle-ontology)) do to the realist's claim about what an EFT is realistic about, are Boss 6(d).

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Fraser-Wallace dispute

**Which formulation of quantum field theory should philosophers interpret: the rigorous algebraic one, or the conventional one with a cutoff that physicists use?** Doreen Fraser ("Quantum Field Theory: Underdetermination, Inconsistency, and Idealization", 2009; reply, 2011) against David Wallace ("In Defence of Naiveté", 2006; "Taking Particle Physics Seriously", 2011).

- **Fraser: [algebraic QFT](#algebraic-qft).** QFT is the project of uniting quantum theory with special relativity; a cutoff breaks Poincaré covariance, and the textbook interaction picture is inconsistent by [Haag's theorem](#haags-theorem). Insensitivity to short distances means success underdetermines what happens there, and particle physics has nothing like the atoms that show condensed matter's cutoff is real.
- **Wallace: conventional QFT with a cutoff, read through Wilson.** The Standard Model is formulated and confirmed there, and so far only conventional QFT makes predictions about interacting systems in four spacetime dimensions. A realist should accept its claim that field degrees of freedom freeze out at short distances, at the latest where gravity enters; granted that, the [renormalization group](#renormalization-group) makes the procedure unproblematic.
- **The concessions** (Matthias Egg, Vincent Lam and Andrea Oldofredi, 2017). Wallace grants that conventional QFT does not require a cutoff, only that assuming one suffices; Fraser grants that the underdetermination is so far only potential, since no realistic interacting algebraic model exists.
- **Shared ground.** Neither takes particles to be fundamental; on Egg, Lam and Oldofredi's reading the dispute is over what a quantum field theory is.
- **Gravity** is Wallace's reason to expect a cutoff at all; Fraser replies that it is not evidence of the kind atoms were (6.4 Example 2).

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Naturalness

**The expectation that an effective theory's coefficients are of order one in units of its cutoff, so that relevant parameters sit near the cutoff's scale unless finely tuned.** 6.4 Example 2.

- **Two failed expectations.** The observed vacuum energy ($\Delta = 0$) is far smaller than expected (the $10^{120}$ of [`cosmology` 4.4](../cosmology/lessons/04-04-dark-energy-cosmic-acceleration.md)), and the Higgs mass far below $M_{\text{Pl}}$ (the hierarchy problem of [`nuclear-particle-physics` 5.5](../nuclear-particle-physics/lessons/05-05-beyond-standard-model.md)).
- **Two readings** (6.4). The effective realist: the framework stands, and the values are facts to explain or accept, as the [brute-fact view](#brute-fact-view) treats the [past hypothesis](#past-hypothesis) (5.5). The critic: two failed expectations show the picture of separated scales is incomplete ([effective realism](#effective-realism)).
- **Trap: Lewis's natural properties.** EFT naturalness concerns coefficients; [`metaphysics` 1.3](../metaphysics/lessons/01-03-universals-the-realists-case.md)'s natural properties share only the word.

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Asymptotic freedom

**A coupling that shrinks at high energies, as QCD's does.** The physics is [`qft` 6.6](../qft/lessons/06-06-running-couplings-renormalization-group.md).

- **What it buys** (6.4 Watch out). QCD may be consistent at all energies on its own; calling it effective says only that it is not the whole story above some scale, at the latest where gravity enters.
- **The contrast.** QED's coupling grows toward a Landau pole and signals its own limit ([effective field theory](#effective-field-theory)).
- **Trap: it shows QCD is fundamental.** It shows only that QCD alone has no internal limit (6.4 P3).

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

## Formulas and formal statements

Every formal statement the lessons use, grouped by module, with the symbols defined in each entry and the lesson cited. Three conventions hold throughout. The environment overlap is $\eta = \langle E_\uparrow|E_\downarrow\rangle$, antilinear in the first slot (1.2). The hidden-variable distribution is $p(\lambda)$; $\rho$ is kept for density matrices, and in 2.1 and Module 5 for densities on configuration or phase space. The CHSH expression is $S = E(a,b) - E(a,b') + E(a',b) + E(a',b')$, with the minus sign on $E(a,b')$ (3.1). Where a Boss problem sets a computation, the entry gives the general statement and no Boss values.

**Module 1: The measurement problem**

### Formal: Ideal measurement and the chain lemma

**A measurement that reports a definite value faithfully must, if it is linear, carry a superposition of values into a superposition of readings.** A spin-½ particle has $z$-spin basis $|\text{up}\rangle, |\text{down}\rangle$; a device has ready state $|r\rangle$ and pointer states $|U\rangle, |D\rangle$, all orthonormal. An [ideal measurement](#ideal-measurement) is an evolution $\hat U$ with

$$\hat U\big(|\text{up}\rangle|r\rangle\big) = |\text{up}\rangle|U\rangle, \qquad \hat U\big(|\text{down}\rangle|r\rangle\big) = |\text{down}\rangle|D\rangle.$$

**Lemma (the chain).** If $\hat U$ is linear, then for complex amplitudes $\alpha, \beta$ with $|\alpha|^2 + |\beta|^2 = 1$,

$$\hat U\big((\alpha|\text{up}\rangle + \beta|\text{down}\rangle)|r\rangle\big) = \alpha|\text{up}\rangle|U\rangle + \beta|\text{down}\rangle|D\rangle.$$

**Theorem (collapse is not linear).** No linear $\hat U$ that measures ideally sends an input with $\alpha\beta \neq 0$ to $|\text{up}\rangle|U\rangle$ or to $|\text{down}\rangle|D\rangle$, even up to a phase: the output has overlap $\alpha$ with the first product state and $\beta$ with the second, and its coefficient determinant (the $ad - bc$ product test of [`quantum-mechanics` 5.2](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md)) is $\alpha\beta \neq 0$, so it is entangled.

- *In words:* a linear law runs each branch through separately and adds the results, so for the state itself to end in one outcome takes a second, nonlinear law. The same linearity step proves no-cloning ([`quantum-computing` 2.3](../quantum-computing/lessons/02-03-the-no-cloning-theorem.md)).
- **Up the chain.** Each further link (counter, flask, cat, retina) that is ideal on its definite inputs applies the lemma again: the [von Neumann chain](#von-neumann-chain). With orthonormal records the Born probability is the same wherever collapse is applied (1.1 Example 1), so the statistics never locate the cut.

*From* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md); used in [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [2.3](lessons/02-03-many-worlds-branching.md)

### Formal: The decohered reduced state

**The environment's records leave the Born weights alone and multiply the system's coherence by the overlap of the two records.** Conventions (1.2): spin states $|{\uparrow}\rangle, |{\downarrow}\rangle$, matrix rows and columns in the order $(\uparrow, \downarrow)$; system in $\alpha|{\uparrow}\rangle + \beta|{\downarrow}\rangle$ with $|\alpha|^2 + |\beta|^2 = 1$; environment ready state $|E_0\rangle$ and normalized record states $|E_\uparrow\rangle, |E_\downarrow\rangle$, with

$$\eta = \langle E_\uparrow|E_\downarrow\rangle \quad \text{(antilinear in the first slot)}.$$

$\eta = 1$: the records are identical and the environment has learned nothing. $\eta = 0$: perfect records.

**Recording.** $U|{\uparrow}\rangle|E_0\rangle = |{\uparrow}\rangle|E_\uparrow\rangle$ and $U|{\downarrow}\rangle|E_0\rangle = |{\downarrow}\rangle|E_\downarrow\rangle$, so by linearity $|\Psi\rangle = \alpha|{\uparrow}\rangle|E_\uparrow\rangle + \beta|{\downarrow}\rangle|E_\downarrow\rangle$.

**Reduced state.** With the partial-trace rule $\mathrm{Tr}_E(|a\rangle\langle a'| \otimes |e\rangle\langle e'|) = |a\rangle\langle a'|\,\langle e'|e\rangle$,

$$\rho_S = \mathrm{Tr}_E\,|\Psi\rangle\langle\Psi| = \begin{pmatrix} |\alpha|^2 & \alpha\beta^*\eta^* \\ \alpha^*\beta\,\eta & |\beta|^2 \end{pmatrix}.$$

The $(\uparrow,\downarrow)$ entry carries $\eta^*$, because it comes from $|{\uparrow}\rangle\langle{\downarrow}| \otimes |E_\uparrow\rangle\langle E_\downarrow|$, which picks up $\langle E_\downarrow|E_\uparrow\rangle = \eta^*$; the $(\downarrow,\uparrow)$ entry carries $\eta$.

- **Purity.** $\mathrm{Tr}\,\rho_S^2 = |\alpha|^4 + |\beta|^4 + 2|\alpha|^2|\beta|^2|\eta|^2$: 1 at $\eta = 1$, falling as the records sharpen.
- **Records multiply.** For $N$ independently recording fragments, $\eta = \prod_{k=1}^{N}\langle e^{(k)}_\uparrow|e^{(k)}_\downarrow\rangle$, so many weak records drive the coherence to zero exponentially. One record of overlap $c$ acts on the system as a phase-flip channel with $1 - 2p = c$ ([`quantum-computing` 5.1](../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md)).
- **At $\eta = 0$.** $\rho_S = \mathrm{diag}(|\alpha|^2, |\beta|^2)$, the matrix of the [proper mixture](#proper-and-improper-mixtures) "$\uparrow$ with probability $|\alpha|^2$, $\downarrow$ with $|\beta|^2$", so $\mathrm{Tr}(\rho_S A)$ agrees for every system observable $A$, while $|\Psi\rangle$ is still pure.
- **Pointer states.** Inputs $|{\uparrow}\rangle$ and $|{\downarrow}\rangle$ stay pure for every $\eta$; only their superpositions lose purity ([einselection](#einselection)).
- **Joint statistics tell them apart** (1.2 Example 2, environment one qubit with $|E_\uparrow\rangle = |0\rangle$, $|E_\downarrow\rangle = |1\rangle$): $\langle\Psi|\sigma_y\otimes\sigma_x|\Psi\rangle = 2\,\mathrm{Im}(\alpha^*\beta)$, while the proper mixture of $|{\uparrow}\rangle|0\rangle$ and $|{\downarrow}\rangle|1\rangle$ gives 0. The coherence that left the spin sits whole in a correlation.
- **Convention trap.** The overlap is $\eta$, not $\gamma$ ([`quantum-computing` 5.1](../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md) uses $\gamma$ for amplitude damping). Say which entry carries $\eta$ and which $\eta^*$.
- **Left to you.** Boss 1(a) sets this computation with its own weights and a joint projector; the card gives no values for it.

*From* [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md); the partial trace is [`quantum-mechanics` 5.4](../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) and [`quantum-computing` 2.2](../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md); $\eta$ reappears in [2.3](lessons/02-03-many-worlds-branching.md)

### Formal: Ontological models and PBR

**If a real physical state lies under the quantum state, and independent preparations give independent real states, then the quantum state is part of that reality.** Harrigan and Spekkens (2010); Pusey, Barrett and Rudolph (2012).

- **[Ontological model](#ontological-model).** Preparing $\psi$ yields an ontic (complete physical) state $\lambda$ with distribution $\mu_\psi(\lambda)$; measurement $M$ gives outcome $k$ with probability $\xi(k\mid\lambda,M)$; and
$$\int \xi(k\mid\lambda,M)\,\mu_\psi(\lambda)\,d\lambda = |\langle k|\psi\rangle|^2 .$$
- **[ψ-ontic and ψ-epistemic](#psi-ontic-and-psi-epistemic).** ψ-ontic if distinct pure states never share an ontic state, so $\lambda$ fixes $\psi$; otherwise ψ-epistemic.
- **[Preparation independence](#preparation-independence).** $\mu_{\psi\otimes\phi}(\lambda_1,\lambda_2) = \mu_\psi(\lambda_1)\,\mu_\phi(\lambda_2)$ for independent preparations.
- **[PBR](#pbr-theorem).** An ontological model that reproduces the quantum predictions and satisfies preparation independence is ψ-ontic. Escapes: deny preparation independence (retrocausal models) or reject the framework (QBism; Myrvold, 2020, argues that every Born-rule user is bound by it, and the Stanford entry reports no direct QBist reply).

*From* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Formal: Spin along a tilted axis

**The Born weight for "up" along an axis tilted by $\theta$ from $z$ is $\cos^2\tfrac{\theta}{2}$.** For an axis $\hat n$ in the $x$–$z$ plane at angle $\theta$ to $z$,

$$|{\uparrow}_n\rangle = \cos\tfrac{\theta}{2}\,|{\uparrow}_z\rangle + \sin\tfrac{\theta}{2}\,|{\downarrow}_z\rangle, \qquad P(\text{up}_n \mid {\uparrow}_z) = \cos^2\tfrac{\theta}{2}$$

([`quantum-mechanics` 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md)). 1.3 Example 1 reads the number as a QBist agent's credence $\mathrm{cr}$, where [`quantum-mechanics` 1.5](../quantum-mechanics/lessons/01-05-measurement-expectation-values.md) reads it as an ensemble frequency.

*From* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

**Module 2: The realist solutions**

### Formal: Guidance equation and equivariance

**The wave never collapses; each particle moves at the probability current divided by the density, and a $|\psi|^2$ spread of positions stays a $|\psi|^2$ spread.** $N$ particles have actual positions $\mathbf{Q}_1,\dots,\mathbf{Q}_N$ (together the configuration $Q$, a point of $3N$-dimensional configuration space); the wavefunction $\psi(\mathbf{q}_1,\dots,\mathbf{q}_N,t)$ obeys $i\hbar\,\partial_t\psi = H\psi$ always, with $\hbar$ the reduced Planck constant and $H$ the Hamiltonian.

$$\frac{d\mathbf{Q}_k}{dt} = \frac{\hbar}{m_k}\,\mathrm{Im}\,\frac{\nabla_k\psi}{\psi}\bigg|_{(\mathbf{Q}_1,\dots,\mathbf{Q}_N)}$$

with $m_k$ particle $k$'s mass and $\nabla_k$ the gradient in its coordinates ([guidance equation](#guidance-equation)).

- **One dimension.** With $\psi = Re^{i\theta}$ ($R, \theta$ real), $v = \frac{\hbar}{m}\theta' = j/|\psi|^2$, the current $j$ of [`quantum-mechanics` 1.2](../quantum-mechanics/lessons/01-02-wavefunction-born-rule.md) over the density. A plane wave $e^{ikx}$ gives $v = \hbar k/m$; a real $\psi$ gives $v = 0$.
- **Transport.** Any ensemble of configurations with density $\rho(q,t)$ (a density on configuration space, not a density matrix) carried by $v$ obeys $\partial_t\rho + \nabla\cdot(\rho v) = 0$.
- **[Equivariance](#equivariance).** $\rho(q,0) = |\psi(q,0)|^2 \Rightarrow \rho(q,t) = |\psi(q,t)|^2$ for all $t$: by the guidance equation $|\psi|^2 v = j$, so the quantum continuity equation puts $|\psi|^2$ under the same first-order equation, and uniqueness does the rest.
- **[Conditional wave function](#conditional-wave-function).** After a measurement leaves $\Psi(x,y) = \sum_i \psi_i(x)\Phi_i(y)$ ($x$ the system's configuration, $y$ the pointer's, pointer packets $\Phi_i$ disjoint), the system's conditional wave function is $\psi(x) = \Psi(x,Y)$ at the actual pointer configuration $Y$, which equals the $\psi_i$ whose packet holds $Y$.
- **Quantum potential** (Bohm's second-order form, 2.1 Example 2). $Q_{\rm B} = -\frac{\hbar^2}{2m}\frac{\nabla^2 R}{R}$ with $R = |\psi|$; for hydrogen's real ground state it cancels the Coulomb potential $V$, so the electron rests.
- **Left to you.** What the equilibrium hypothesis asserts, what equivariance guarantees and how typicality justifies the hypothesis are asked together by Boss 2(c).

*From* [2.1](lessons/02-01-bohmian-mechanics.md)

### Formal: GRW hits and amplification

**Each particle is hit, rarely and at random, by a Gaussian that squeezes the wavefunction where it is large; a body of many displaced particles is hit at the summed rate, and one hit settles all of it with Born's odds.** Ghirardi, Rimini and Weber (1986), in the convention the Stanford Encyclopedia uses.

$$\psi \;\longmapsto\; \frac{G_{\mathbf x}(\mathbf q_i)\,\psi}{\lVert G_{\mathbf x}(\mathbf q_i)\,\psi\rVert}, \qquad G_{\mathbf x}(\mathbf q) = K\,e^{-(\mathbf q-\mathbf x)^2/2a^2}, \qquad \int |G_{\mathbf x}(\mathbf q)|^2\,d^3x = 1 .$$

Here $\mathbf q_i$ is particle $i$'s coordinate, $\mathbf x$ the hit's centre, $a$ the [localization width](#localization-width) and $K$ a normalizing constant.

- **Where.** The centre has probability density $\lVert G_{\mathbf x}(\mathbf q_i)\,\psi\rVert^2$.
- **When.** Each particle's hits form a Poisson process with rate $\lambda_{\rm GRW}$ (subscripted because Module 3 uses $\lambda$ for the complete state). GRW's values: $\lambda_{\rm GRW} = 10^{-16}\,\mathrm{s}^{-1}$ per particle (per nucleon in mass-proportional versions) and $a = 10^{-7}$ m ([localization rate](#localization-rate)).
- **[Amplification](#amplification).** A pointer of $N$ particles, each displaced by $d \gg a$ between its two terms, is hit at rate $N\lambda_{\rm GRW}$, since independent Poisson processes merge. A hit centred near one term multiplies the other term's amplitude by about $e^{-d^2/2a^2}$ (its weight by $e^{-d^2/a^2}$), and the centre falls near each term with that term's Born weight. What counts is the number of particles displaced by more than $a$.
- **On $\rho$.** Averaged over centres, a hit sends $\rho \mapsto \int G_{\mathbf x}\,\rho\,G_{\mathbf x}\,d^3x$, a position-dephasing channel in the Kraus form of [`quantum-computing` 5.1](../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md): linear on $\rho$, so it cannot signal (3.3).
- **Energy.** A hit raises a particle's mean kinetic energy by $3\hbar^2/4ma^2$, for mass $m$.
- **Convention.** Allori, Goldstein, Tumulka and Zanghì (2008) apply the square root of a Gaussian with $2\sigma^2$, so their amplitude carries $4\sigma^2$: say which convention before computing a tail.
- **[CSL](#csl)** (encyclopedia's simplified form). Coherence between two arrangements decays as $\exp\big[-\lambda_{\rm CSL}\,t\sum_k (n_k - m_k)^2\big]$, with $n_k, m_k$ the nucleon counts in the $k$-th cell of side $a$.
- **[Mass density](#mass-density-ontology).** $m(\mathbf x,t) = \langle\psi_t|M(\mathbf x)|\psi_t\rangle$, with $M(\mathbf x)$ the mass-density operator.
- **Left to you.** Boss 2(a) asks for the mean times to a hit for one nucleon and for a pointer; the card gives none.

*From* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Formal: Relative states and pointer overlaps

**Measurement is entanglement; fix a record and ask what the system is, given that.** Everett (1957), as 2.3 states it.

$$(\alpha|{\uparrow}\rangle + \beta|{\downarrow}\rangle)|E_0\rangle \;\longrightarrow\; |\Psi\rangle = \alpha|{\uparrow}\rangle|E_\uparrow\rangle + \beta|{\downarrow}\rangle|E_\downarrow\rangle,$$

with $|\alpha|^2 + |\beta|^2 = 1$, $|E_0\rangle$ the ready state and each $|E\rangle$ everything that holds the record.

- **[Relative state](#relative-state).** Relative to a record $|E\rangle$, the spin's state is $(I \otimes \langle E|)\,|\Psi\rangle$, normalized, with $I$ the identity on the spin and $|\Psi\rangle$ written spin first.
- **Interference across branches.** A later $x$-measurement gives $P(x\text{-up}) = \tfrac12 + \mathrm{Re}(\alpha^*\beta\,\eta)$, with $\eta = \langle E_\uparrow|E_\downarrow\rangle$ as in 1.2: with orthogonal records ($\eta = 0$) the routes add as probabilities; with no record ($\eta = 1$) they interfere.
- **Gaussian pointer.** Packets $\psi_a(y) = (2\pi s^2)^{-1/4}e^{-(y-a)^2/4s^2}$ ($y$ the pointer coordinate, $a$ the reading, $s$ the spread of $|\psi_a|^2$) overlap as $\langle\psi_a|\psi_{a+d}\rangle = e^{-d^2/8s^2}$ for readings $d$ apart: no jump from one branch to two, so a count of branches needs a chosen grain ([emergent branches](#emergent-branches)).

*From* [2.3](lessons/02-03-many-worlds-branching.md)

### Formal: Branch counting and Born weight

**Counting gives every branch the same share; weighting gives each the product of its squared amplitudes. They agree only at $p = \tfrac12$.** Measuring $\alpha|\text{up}\rangle + \beta|\text{down}\rangle$ on $n$ fresh copies, with $p = |\alpha|^2$ and each measurement idealized as splitting every branch in two:

$$N(k) = \binom{n}{k}, \qquad w(k) = \binom{n}{k}\,p^k(1-p)^{n-k},$$

where $N(k)$ counts the branches with $k$ ups among the $2^n$ and $w(k)$ is their total [Born weight](#born-weight). By the law of large numbers the weight piles up near frequency $p$, the count near $\tfrac12$ ([branch counting](#branch-counting)).

- **[Deutsch–Wallace theorem](#deutsch-wallace-theorem)**, in [`decision-theory` 1.4](../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md)'s schematic form. For preferences $\succeq_\psi$ over acts available at quantum state $\psi$,
$$\succeq_\psi \text{ satisfies the axioms} \iff \exists\, u:\; U \succeq_\psi V \Leftrightarrow \sum_r w_U(r)\,u(r) \ge \sum_r w_V(r)\,u(r),$$
with $w_U(r)$ the total Born weight of the branches in which act $U$ yields reward $r$, and $u$ unique up to $au + c$, $a > 0$.
- **The evidential problem** in [`philosophy-of-science` 1.3](../philosophy-of-science/lessons/01-03-confirmation-as-probability-raising.md)'s measures, credence written $\mathrm{cr}$: $d = \mathrm{cr}(H \mid E) - \mathrm{cr}(H)$, $r = \ln\frac{\mathrm{cr}(H \mid E)}{\mathrm{cr}(H)}$, $l = \ln\frac{\mathrm{cr}(E \mid H)}{\mathrm{cr}(E \mid \neg H)}$. If the likelihood is "some successor records $E$", it is 1 on every Everettian rival and $d = r = l = 0$; Greaves and Myrvold put branch weights in the likelihood slot ([evidential problem](#evidential-problem)).
- **Left to you.** Boss 2(b) sets the count and the weight for its own three-trial case; the card gives no values for it.

*From* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

**Module 3: Bell's theorem and nonlocality**

### Formal: Bell's set-up and the CHSH expression

**Four correlations, one combination, a ceiling of 2 for any theory with single outcomes, local causality and measurement independence.** Alice chooses setting $a$ or $a'$, Bob $b$ or $b'$; outcomes are $A, B \in \{+1, -1\}$; $\lambda$ is the complete state of the pair at the source (whatever the theory says fixes the probabilities of later events), with distribution $p(\lambda)$. The course writes $p$, not $\rho$, which is kept for density matrices.

$$E(a,b) = \sum_{A,B} AB\,P(A,B\mid a,b), \qquad S = E(a,b) - E(a,b') + E(a',b) + E(a',b').$$

- **Sign convention.** The minus sign sits on $E(a,b')$, as in [`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md). [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) subtracts a different term; reading its inputs $x = 0, 1$ as $a', a$ and $y = 0, 1$ as $b, b'$ turns its $S$ into this one. State the convention before computing; [Fine's theorem](#fines-theorem) needs all four placements of the minus sign.
- **[Single outcomes](#single-outcomes).** Each run ends with exactly one value of $A$ and one of $B$.
- **[Factorizability](#factorizability)** (what [local causality](#local-causality) yields here). $P(A,B\mid a,b,\lambda) = P(A\mid a,\lambda)\,P(B\mid b,\lambda)$.
- **[Measurement independence](#measurement-independence).** $p(\lambda\mid a,b) = p(\lambda)$.
- **The bound.** Given the three, $|S| \le 2$ ([CHSH inequality](#chsh-inequality)). For a deterministic strategy, $S_\lambda = A(B - B') + A'(B + B') = \pm 2$, since one bracket is 0 and the other $\pm 2$; 8 of the 16 strategies give $+2$ and 8 give $-2$ ([`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) Example 1; [`quantum-mechanics` 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md)). Writing all four correlations with one $p(\lambda)$ is where measurement independence enters, and chancy factorizable models add nothing (3.1 Steps 2–3).
- **Quantum value.** The singlet gives $E(a,b) = -\cos\theta_{ab}$, with $\theta_{ab}$ the angle between the axes, and reaches $|S| = 2\sqrt2 \approx 2.83$, the most any quantum state allows ([Tsirelson bound](#tsirelson-bound)). Settled physics.
- **Left to you.** Boss 3(a) asks you to prove the stochastic case marking where each premise is used, to build a settings-dependent model from the sixteen strategies, and to locate the single-outcome assumption; the card does none of it.

*From* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md)

### Formal: Determinism from perfect anticorrelation

**Factorizability plus perfect anticorrelation at equal settings forces pre-set values.** Let $p = P(A{=}{+1}\mid z,\lambda)$ and $q = P(B{=}{+1}\mid z,\lambda)$ for both wings measuring along $z$. Factorizability and perfect anticorrelation require

$$pq = 0 \quad\text{and}\quad (1-p)(1-q) = 0$$

for almost every $\lambda$, whose only solutions are $(p,q) = (1,0)$ and $(0,1)$: each $\lambda$ fixes Alice's result and Bob's opposite one. Bell's 1964 route ([outcome determinism](#outcome-determinism) derived, not assumed); Suppes and Zanotti (1976) proved it in general.

*From* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) Example 1

### Formal: Parameter and outcome independence

**Factorizability splits exactly into two conditions on the complete state: no dependence on the far setting, and no further dependence on the far outcome.** Same set-up as above.

$$\textbf{PI:}\quad P(A\mid a,b,\lambda) = P(A\mid a,b',\lambda) \quad\text{(and likewise for } B\text{)},$$

$$\textbf{OI:}\quad P(A,B\mid a,b,\lambda) = P(A\mid a,b,\lambda)\,P(B\mid a,b,\lambda).$$

- **[Jarrett decomposition](#jarrett-decomposition)** (T1). F holds if and only if PI and OI both hold. Summing F over $B$ gives a marginal for $A$ free of $b$, which is PI, and F is then the product of marginals, which is OI; conversely, OI writes the joint as a product of marginals that may mention both settings, and PI deletes the far setting from each.
- **Outcome determinism implies OI** (T2). If $P(A\mid a,b,\lambda) \in \{0,1\}$, Bob's result has nothing left to tell Alice. So a deterministic theory that violates F violates PI.
- **Both presuppose** the complete state and one outcome per wing per run ([parameter independence](#parameter-independence), [outcome independence](#outcome-independence)).
- **The singlet's joint law,** with $\theta$ the angle between the axes: $P(A,B\mid a,b) = \tfrac14(1 - AB\cos\theta)$. 3.2 Example 1 tests PI and OI on it with $\lambda$ the quantum state.
- **Left to you.** Boss 3(b) asks for the marginal and conditional probabilities at given angles and which condition holds; Boss 3(c) asks which premise Bohm, GRW and many-worlds each give up. The card gives neither.

*From* [3.2](lessons/03-02-what-bell-rules-out.md)

### Formal: No-signalling and frame-dependent order

**What Alice sees alone does not depend on Bob's choice; and for spacelike-separated measurements, which came first depends on the frame.**

$$\sum_B P(A,B\mid a,b) = \sum_B P(A,B\mid a,b') \quad \text{for all } A, a, b, b',$$

and likewise with the roles swapped ([no-signalling](#no-signalling)): a theorem of quantum mechanics for local operations, proved in [`quantum-computing` 2.2](../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md). Given measurement independence it is weaker than PI, which conditions on $\lambda$.

**The frame-ordering condition** ([frame-dependent order](#frame-dependent-order); [`relativity` 1.4](../relativity/lessons/01-04-spacetime-interval-causality.md) P3). A boost at speed $v$ along $+x$ sends $t \mapsto t' = \gamma(t - vx/c^2)$, $\gamma = 1/\sqrt{1 - v^2/c^2}$, $c$ the speed of light. Put Alice's measurement at $(0,0)$ and Bob's at $(\Delta t, \Delta x)$ with $\Delta x > c\,\Delta t > 0$ (spacelike). Then

$$\Delta t' < 0 \iff v > v_0 = \frac{c^2\,\Delta t}{\Delta x}, \qquad v_0 < c,$$

so some legitimate frame puts Bob's measurement first. Timelike pairs keep their order in every frame.

- **On $\rho$.** A dynamics linear on the density matrix cannot signal, which is why GRW, nonlinear on states, does not ([GRW hits and amplification](#formal-grw-hits-and-amplification)); Gisin (1989): generic deterministic nonlinear modifications would.

*From* [3.3](lessons/03-03-nonlocality-and-relativity.md)

**Module 4: Space and spacetime**

### Formal: Shifts, rotation and the classical spacetimes

**Shifting or boosting the whole world keeps every separation and every acceleration; rotating it does not keep the forces. More spacetime structure means fewer symmetries.** Bodies $i$ have positions $\mathbf{x}_i(t)$ and masses $m_i$; $\mathbf{F}_{ij}$ is the force on $i$ from $j$.

- **Static shift** (4.1 Example 1). $\mathbf{x}_i(t) \to \mathbf{x}_i(t) + \mathbf{d}$ for a fixed vector $\mathbf{d}$; separations $(\mathbf{x}_i + \mathbf{d}) - (\mathbf{x}_j + \mathbf{d}) = \mathbf{x}_i - \mathbf{x}_j$. If forces depend only on separations,
$$m_i\,\ddot{\mathbf{x}}_i = \sum_{j \neq i} \mathbf{F}_{ij}(\mathbf{x}_i - \mathbf{x}_j),$$
the shifted history solves the laws whenever the original does ([static shift](#static-shift)).
- **Kinematic shift** (4.1 Example 2). $\mathbf{x}_i(t) \to \mathbf{x}_i(t) + \mathbf{v}t$ for constant $\mathbf{v}$: separations and accelerations unchanged ([kinematic shift](#kinematic-shift)).
- **Rigid rotation.** At angular velocity $\omega$ every separation stays fixed, but a body at distance $r$ from the axis accelerates toward it at $\omega^2 r$ and needs a force $m\omega^2 r$: detectable ([absolute true motion](#absolute-true-motion)).
- **The bucket's surface** (4.2 Example 1). Water turning rigidly at $\omega$ has $z(r) = \omega^2 r^2/2g$ above its lowest point, $g$ the gravitational acceleration; for inner radius $b$ the wall stands $\Delta h = \omega^2 b^2/2g$ above the centre, so $\omega = \sqrt{2g\,\Delta h}/b$ ([Newton's bucket](#newtons-bucket)).
- **Three spacetimes** (4.2), each fixed by the transformations that preserve it, all with $t \to t + t_0$; $R$ a rotation matrix, $\mathbf{a}$ a displacement, $\mathbf{u}$ a constant velocity:

| Spacetime | Structure | Symmetries | Absolute |
|---|---|---|---|
| [Newtonian](#newtonian-spacetime) | absolute time, distance at each time, absolute space | $\mathbf{x} \to R\mathbf{x} + \mathbf{a}$ | velocity and rotation |
| [Galilean](#galilean-spacetime) (neo-Newtonian) | absolute time, distance at each time, flat connection | $\mathbf{x} \to R\mathbf{x} + \mathbf{u}t + \mathbf{a}$ | rotation, not velocity |
| [Leibnizian](#leibnizian-spacetime) | absolute time, distance at each time | $\mathbf{x} \to R(t)\mathbf{x} + \mathbf{a}(t)$ | neither |

- **[Symmetry matching](#symmetry-matching).** Newton's laws with distance-dependent forces are invariant under exactly the Galilean transformations ([`analytical-mechanics` 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md) P3 for the boost).
- **Left to you.** Why the effects of changing motion cannot tell a world at rest from the same world coasting, and what Corollary V says, are Boss 4(b)'s.

*From* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Formal: Einstein's rule and Reichenbach's epsilon

**Round trips fix only an interval for a distant event's time; ε says where in it the reflection goes.**

**Einstein's rule** (1905, §1). A ray leaves A at A-time $t_A$, is reflected at B at B-time $t_B$, and returns to A at $t'_A$; the clocks are synchronous if

$$t_B - t_A = t'_A - t_B .$$

**Reichenbach's rule** (1928). A signal leaves A at $t_1$, reflects at B, returns to A at $t_3$; the reflection is assigned

$$t_2 = t_1 + \varepsilon\,(t_3 - t_1), \qquad 0 < \varepsilon < 1 ,$$

and $\varepsilon = \tfrac12$ is Einstein's rule ([Reichenbach epsilon](#reichenbach-epsilon), [Einstein synchronization](#einstein-synchronization)).

- **One-way speeds.** With A and B a distance $d$ apart, so $t_3 - t_1 = 2d/c$:
$$c_{\text{out}} = \frac{c}{2\varepsilon}, \qquad c_{\text{back}} = \frac{c}{2(1-\varepsilon)},$$
whose harmonic mean is $c$ for every ε ([one-way speed of light](#one-way-speed-of-light)).
- **Midpoint flash.** A flash from the midpoint of clocks P and Q, a distance $L$ apart (Q in the outbound direction), reaches Q later than P by $(2\varepsilon - 1)L/c$: zero only at $\varepsilon = \tfrac12$.
- **Janis's correspondence.** An observer passing A toward B at $v$ has simultaneity lines $t = vx/c^2 + \text{const}$; ε in A's frame matches $v = (1 - 2\varepsilon)c$, and $0 < \varepsilon < 1$ is exactly $-c < v < c$.
- **Direction-dependent synchrony.** With time coordinate $t' = t + \mathbf{k}\cdot\mathbf{x}/c$, $|\mathbf{k}| < 1$, a signal from P to Q gets $\varepsilon_{PQ} = \tfrac12(1 + \mathbf{k}\cdot\hat{\mathbf{n}}_{PQ})$, $\hat{\mathbf{n}}_{PQ}$ the unit vector from P to Q; then $\varepsilon_{QP} = 1 - \varepsilon_{PQ}$, and the relation is symmetric and transitive. Generally, any $t + \varphi(\mathbf{x})/c$ with $|\nabla\varphi| < 1$ (Minguzzi, 2002).
- **[Malament's theorem](#malaments-simultaneity-theorem)** (1977) states the four premises under which only $\varepsilon = \tfrac12$ is definable.
- **Left to you.** Boss 4(c)'s values, the words in Einstein's §1 that mark the rule as a definition, and why Reichenbach allows exactly this range of ε.

*From* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Formal: The heated sphere's geometry

**Rods that shrink by one law toward the rim survey a Euclidean ball as a Lobachevskian space of constant negative curvature.** Poincaré, *Science and Hypothesis*, ch. IV (Greenstreet, 1905), as 4.4 states it. The world fills a sphere of Euclidean radius $R$; at Euclidean distance $r$ from the centre the temperature is proportional to $R^2 - r^2$, and every body has one coefficient of expansion, so a rod of central length $\ell_0$ has length

$$\ell(r) = \ell_0\,\frac{R^2 - r^2}{R^2}.$$

- **Measured radius**, in central rods:
$$\rho(r) = \int_0^r \frac{R^2\,dr'}{R^2 - r'^2} = \frac{R}{2}\ln\frac{R+r}{R-r},$$
unbounded as $r \to R$: the rim is never reached.
- **Measured circumference** of the circle of Euclidean radius $r$: $C = \dfrac{2\pi r R^2}{R^2 - r^2} = \pi R\sinh\dfrac{2\rho}{R} > 2\pi\rho$, Lobachevsky's geometry with curvature $K = -4/R^2$, whose straight lines are the light rays (refractive index $\propto 1/(R^2 - r^2)$).
- **Name.** Usually drawn as a disk; Poincaré's world is a heated sphere ([Poincaré's disk world](#poincares-disk-world)).

*From* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Formal: Pushforward, active covariance and the hole

**One formula, read two ways: new names for the same points (passive), or the same names for a redistributed field (active).** A model of general relativity is $\langle M, g, T\rangle$: a four-dimensional manifold $M$, a metric $g$ of signature $(-,+,+,+)$, matter fields $T$, with $G_{\mu\nu}[g] = \frac{8\pi G}{c^4}T_{\mu\nu}$ ($G_{\mu\nu}[g]$ the Einstein tensor, $G$ Newton's constant).

- **[Pushforward](#pushforward-of-a-field)** by a diffeomorphism $\varphi: M \to M$: for a scalar, $\varphi_*f = f\circ\varphi^{-1}$; for the metric, $\varphi_*g = (\varphi^{-1})^*g$, assigning to $\varphi(p)$ what $g$ assigned to $p$. For a short flow along a vector field $X$, $\varphi_*g = g - s\,\mathcal{L}_X g + O(s^2)$, with $\mathcal{L}_X$ the Lie derivative ([`differential-geometry` 2.4](../differential-geometry/lessons/02-04-vector-fields-pushforward.md), [5.3](../differential-geometry/lessons/05-03-lie-derivative-killing-vectors.md)).
- **[Active and passive](#active-and-passive-diffeomorphisms).** In a chart, $y = \varphi(x)$. Passive: keep $g$ and adopt $y$, so $g'_{\mu\nu}(y) = \frac{\partial x^\alpha}{\partial y^\mu}\frac{\partial x^\beta}{\partial y^\nu}\,g_{\alpha\beta}(x)$. Active: keep the chart and replace $g$ by $\varphi_*g$, whose components at the point labelled $y$ are those same numbers.
- **Hole diffeomorphism.** The identity outside a region $H$ whose closure lies to the future of a [Cauchy surface](#cauchy-surface) $\Sigma$, and not the identity inside.
- **Active covariance** (the lemma of 4.5). If $\langle M, g, T\rangle$ is a solution, so is $\langle M, \varphi_*g, \varphi_*T\rangle$; for a hole diffeomorphism the two agree outside $H$ and differ inside ([general covariance](#general-covariance)).
- **[Leibniz equivalence](#leibniz-equivalence).** Models related by a diffeomorphism, $\langle M, g, T\rangle$ and $\langle M, \varphi_*g, \varphi_*T\rangle$, represent the same physical situation.
- **The count** ([`relativity` 5.3](../relativity/lessons/05-03-einstein-field-equations.md) P1). Ten equations for ten metric components, of which only six evolve the geometry: four free functions, coordinate choice read passively, the hole map's room read actively.
- **Trap.** $(\varphi_*f)(y) = f(\varphi^{-1}(y))$; computing $f(\varphi(y))$ pushes the field the wrong way.
- **Left to you.** Why the pushed-forward metric solves the equations, why it agrees with $g$ on $\Sigma$ and every Cauchy surface missing $H$, and what follows for determinism, are Boss 4(d)'s proof.

*From* [4.5](lessons/04-05-the-hole-argument.md)

**Module 5: Determinism, time's arrow, and probability**

### Formal: Determinism and the dome

**A theory is deterministic when any two histories its laws allow that agree at one instant agree at every instant; on Norton's dome, Newton's laws allow two that do not.**

**Earman's definition** (histories form, "Aspects of Determinism in Modern Physics", 2007; first framed over possible worlds in *A Primer on Determinism*, 1986). A history $H$ assigns to each time $t$ a complete state $H(t)$ (for particles, every position and velocity). A theory is Laplacian deterministic iff, for any two histories $H_1, H_2$ satisfying its laws,

$$H_1(t) = H_2(t) \text{ for some } t \;\Longrightarrow\; H_1(t') = H_2(t') \text{ for all } t'.$$

Restricting $t'$ to later times gives future determinism, to earlier times past determinism; under [time-reversal invariance](#time-reversal-invariance) they stand or fall together ([determinism](#determinism)).

- **[Lipschitz condition](#lipschitz-condition).** $|f(x) - f(y)| \le K|x - y|$ for some constant $K$ near $x_0$. **Picard–Lindelöf** (cited): if $\dot x = f(x)$ and $f$ is Lipschitz near $x_0$, exactly one solution passes through $x_0$ for a short time; second-order laws are written first-order in position and velocity.
- **[Norton's dome](#nortons-dome)** (Norton, 2003). A unit point mass on a frictionless dome in gravity $g$; at arc length $r$ from the apex the surface lies $h = \frac{2}{3g}r^{3/2}$ below it, so the outward tangential force is $g\,dh/dr = r^{1/2}$ and
$$\ddot r = \sqrt r .$$
Starting at rest at the apex at $t = 0$, $r(t) = 0$ solves it, and so, for every $T \ge 0$ and every radial direction, does rest until $T$ followed by $r(t) = (t-T)^4/144$ for $t > T$. The theorem is silent, not violated: $\frac{d\sqrt r}{dr} = \frac{1}{2\sqrt r}$ is unbounded as $r \to 0$, so no $K$ works at the apex.
- **Collision case** (5.1 Example 1). Masses 1 and 2 on a frictionless wire, the first at speed 3 toward the second at rest: $v_1 + 2v_2 = 3$ and $v_1^2 + 2v_2^2 = 9$ have two roots, $(3, 0)$ and $(-1, 2)$; impenetrability, not a conservation law, picks the bounce.
- **Left to you.** Checking the dome's solutions and their continuity, the range of positions exact data allow at a later time, and the comparison with chaos, are Boss 5(a)'s.

*From* [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Formal: The predictability horizon

**Errors grow exponentially, so each extra digit of precision buys only a fixed slice of forecast time.** $\delta(t)$ is the distance between the true state and the estimate, $\delta_0$ the initial error, $\lambda > 0$ the largest [Lyapunov exponent](#lyapunov-exponent), $\Delta$ the tolerance. While $\delta$ is small, $\delta(t) \approx \delta_0 e^{\lambda t}$, so the [predictability horizon](#predictability-horizon) is

$$t_h = \frac{1}{\lambda}\ln\frac{\Delta}{\delta_0}.$$

| Quantity | Expression |
|---|---|
| Lyapunov time | $1/\lambda$ (not the horizon) |
| Doubling time | $T_d = \ln 2/\lambda$ |
| Horizon gained per extra decimal digit | $\ln 10/\lambda$ |
| Decimal digits beyond the tolerance needed to forecast to time $t$ | $\lambda t/\ln 10$ |
| Binary digits of the initial state brought into play per unit time | $\lambda/\ln 2$ |
| Time to amplify a quantum-scale spread $\delta_q$ to $\Delta$ ([chaos amplification](#chaos-amplification)) | $\frac{1}{\lambda}\ln(\Delta/\delta_q)$ |
| [Ehrenfest time](#ehrenfest-time), characteristic action $S$ | of order $\frac{1}{\lambda}\ln(S/\hbar)$ |

- **Settled either way.** At fixed $t$, $\delta_0 e^{\lambda t} \to 0$ as $\delta_0 \to 0$: exact data still fix a chaotic model's future.
- **One scale.** The formula assumes one $\lambda$ for errors of every size; Lorenz (1969) found finite ranges per scale in many-scale flows, not lengthened by shrinking the initial error.
- **Quantum states never separate.** Unitary evolution gives $\lVert U(t)|\psi\rangle - U(t)|\phi\rangle\rVert = \lVert|\psi\rangle - |\phi\rangle\rVert$ ([quantum chaos](#quantum-chaos)).
- **Berry's estimate** (1978, crediting Chirikov). Hard spheres of radius $r$, free path $\ell$, speed $V$, disturbed by a mass $M$ at distance $D$ ($G$ Newton's constant): the rebound tilts by $\Delta\theta \sim GM\ell^3/(D^3V^2 r)$, each collision multiplies an angular error by about $\ell/r$, so aim is lost after $n \sim \ln(1/\Delta\theta)/\ln(\ell/r)$ collisions.
- **Left to you.** Boss 5(a)'s horizon values and its comparison with the dome.

*From* [5.2](lessons/05-02-chaos-and-predictability.md); exponents from [`dynamical-systems` 4.4](../dynamical-systems/lessons/04-04-lyapunov-exponents.md)

### Formal: Time reversal and the H-theorem

**Reversal-invariant laws allow the backward film of every history they allow; the H-theorem's arrow comes from an assumption about collisions.**

- **[Time-reversal invariance](#time-reversal-invariance).** Let $R$ be an operation on instantaneous states with $R(R(S)) = S$. A theory is time-reversal invariant under $R$ when
$$S(t) \text{ allowed} \;\Longrightarrow\; (TS)(t) := R\big(S(-t)\big) \text{ allowed}.$$
Newtonian particle: $R(x, v) = (x, -v)$. Electromagnetism, textbook: $R(E, B, \rho, j) = (E, -B, \rho, -j)$ ($E, B$ the electric and magnetic fields, $\rho, j$ charge and current densities). Albert keeps $B$, and then Faraday's law $\nabla\times E = -\partial B/\partial t$ fails for the reversed history ([Albert–Malament dispute](#albert-malament-dispute)).
- **[H-theorem](#h-theorem)** (Boltzmann, 1872). With $f(v,t)$ the fraction of molecules with velocity near $v$,
$$H[f] = \int f\ln f\,d^3v, \qquad \frac{dH}{dt} \le 0,$$
with equality exactly at Maxwell's distribution, under the Boltzmann equation.
- **[Stosszahlansatz](#stosszahlansatz).** Collisions per unit time between molecules with velocities $v_1$ and $v_2$ number in proportion to $f(v_1)f(v_2)$ (times relative speed and cross-section), imposed on incoming pairs only.
- **[Poincaré recurrence](#poincare-recurrence).** For a flow preserving phase volume on a region of finite volume, almost every state returns arbitrarily close to itself, infinitely often.
- **[Kac ring](#kac-ring).** $n$ sites, $m$ marked gaps, $\mu = m/n$, colour excess $\delta = (\text{white} - \text{black})/n$. The ring's ansatz gives $\delta_{t+1} = (1-2\mu)\delta_t$, so $\delta_t = (1-2\mu)^t\delta_0 \to 0$; the exact dynamics is reversible and has period $n$ ($m$ even) or $2n$ ($m$ odd).
- **Magnetic force.** $F = qv\times B$ is perpendicular to $v$, so kinetic energy is constant, yet reversing $v$ alone does not retrace the path (5.3 Example 2).

*From* [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### Formal: Boltzmann and Gibbs entropy

**Boltzmann entropy belongs to a system and can rise; Gibbs entropy belongs to a distribution and, under Hamiltonian flow, cannot change.** $N$ molecules, phase space $\Gamma$ with Liouville volume $\mu$, counted in cells of size $h^{3N}$ ($h$ Planck's constant); $k_B$ is Boltzmann's constant; the macroscopic variables partition $\Gamma$ into regions $\Gamma_M$, and $M(x)$ is the [macrostate](#macrostate) containing microstate $x$.

$$\Omega(M) = \frac{\mu(\Gamma_M)}{h^{3N}}, \qquad S_B(x) = k_B\ln\Omega(M(x)), \qquad S_G[\rho] = -k_B\int_\Gamma \rho\ln\rho\,d\Gamma,$$

with $\rho$ a probability density on $\Gamma$ (per cell). If $\rho$ is uniform on $\Gamma_M$, $S_G = k_B\ln\Omega(M)$: equal in value, not in behaviour ([Boltzmann entropy](#boltzmann-entropy), [Gibbs entropy](#gibbs-entropy)).

- **Gibbs constancy.** With $\phi_t$ the Hamiltonian flow and $\rho_t(x) = \rho_0(\phi_{-t}x)$, substituting $y = \phi_{-t}x$ and using Liouville's Jacobian 1 ([`analytical-mechanics` 3.2](../analytical-mechanics/lessons/03-02-phase-space-liouville.md)) gives $S_G[\rho_t] = S_G[\rho_0]$. What rises is $S_B$, or a Gibbs entropy of a [coarse-grained](#coarse-graining) density.
- **[Statistical postulate](#statistical-postulate)** (Albert, 2000). $P(x \in A \mid M) = \mu(A)/\mu(\Gamma_M)$ for $A \subseteq \Gamma_M$.
- **The [Mentaculus](#mentaculus)** (Loewer, 2012; Albert, 2015): the package of the dynamics, the [past hypothesis](#past-hypothesis) (an initial macrostate $M_0$ of extremely low $S_B$) and the statistical postulate.
- **Grain** (5.4 Example 1). Changing the grain moves $S_B$ by amounts that grow like $\ln N$ while the entropy grows like $N$.
- **Left to you.** Boss 5(b)'s exact band fractions and the measure they assume, and Boss 5(c)'s account of exactly what the past hypothesis adds against the retrodiction, are not given here.

*From* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md); counting from [`stat-mech` 1.2](../stat-mech/lessons/01-02-microstates-macrostates-postulate.md) and [1.3](../stat-mech/lessons/01-03-entropy-microcanonical.md)

### Formal: Fluctuations and Penrose's estimate

**Each unit of missing entropy costs a factor of $e$ in probability; the low-entropy beginning sits at the far end of that scale.**

- **Fluctuation probability.** A region fluctuates into a macrostate whose Boltzmann entropy lies $\Delta S$ below equilibrium with probability proportional to $e^{-\Delta S/k_B}$; equivalently, probability goes as $\Omega = e^{S_B/k_B}$ ([fluctuation hypothesis](#fluctuation-hypothesis)).
- **Bekenstein–Hawking entropy** ([`relativity` 6.5](../relativity/lessons/06-05-black-hole-thermodynamics.md)). For a black hole of mass $M$, $S_{BH} = k_B A/(4\ell_P^2)$ with horizon area $A = 4\pi r_s^2$, $r_s = 2GM/c^2$ and $\ell_P^2 = \hbar G/c^3$, so $S_{BH}/k_B = 4\pi GM^2/(\hbar c)$.
- **[Penrose's estimate](#penroses-estimate)** (*The Emperor's New Mind*, 1989). The largest entropy the observable universe's $10^{80}$ or so baryons could have, that of one black hole holding them all, is about $10^{123}k_B$; on the uniform measure a low-entropy start fills about one part in $10^{10^{123}}$ of phase space. The figure is robust only in the order of magnitude of its double exponent.

*From* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Formal: Ergodicity, typicality and the Principal Principle

**Time averages exist almost everywhere; they equal phase averages only for ergodic flows; and known chances fix credence.** An isolated Hamiltonian system on its energy surface $\Gamma_E$, flow $\phi_t$, $\mu$ the microcanonical measure (normalized Liouville volume on $\Gamma_E$).

- **[Birkhoff's theorem](#birkhoffs-theorem)** (flow version). For integrable $f$, the time average
$$f^*(x) = \lim_{T\to\infty}\frac1T\int_0^T f(\phi_t x)\,dt$$
exists for $\mu$-almost every $x$, and $\int f^*\,d\mu = \int f\,d\mu$. The flow is **ergodic** (every invariant set has measure 0 or 1) iff $f^* = \int f\,d\mu$ almost everywhere for every $f$ ([ergodic hypothesis](#ergodic-hypothesis)).
- **Which measure?** For an oscillator $x = A\cos\theta$, uniform in the phase angle $\theta$ gives $P(|x| > A/2) = 2/3$, uniform in $x$ gives $1/2$; the Liouville measure is uniform in $\theta$ ([measure objection](#measure-objection), [Liouville measure](#liouville-measure)). Every density of the form $f(H)$ is stationary.
- **Robustness.** If $\mu(B) \ge 1 - \varepsilon$ and $\nu$ has density at most $K$ relative to $\mu$, then $\nu(B) \ge 1 - K\varepsilon$.
- **Maximum entropy** (Jaynes, 1957). Maximize $-\int\rho\ln\rho$ subject to what you know; the functional changes under a change of variables, so it needs a reference measure ([maximum entropy](#maximum-entropy)).
- **[Principal Principle](#principal-principle)** (Lewis, 1980), in [`epistemology` 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md)'s notation, $\mathrm{cr}$ credence and $\Pr$ chance:
$$\mathrm{cr}\big(A \mid \Pr(A) = x \wedge E\big) = x, \qquad E \text{ admissible}.$$
Chance is indexed to a time, and history up to that time is admissible.
- **Rotations** (5.6 Example 1). $x \mapsto x + \alpha \bmod 1$ on $[0,1)$ preserves length; rational $\alpha$ is not ergodic (orbits close), irrational $\alpha$ equidistributes every orbit (Weyl, 1916).

*From* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

**Module 6: Symmetry, gauge, and quantum fields**

### Formal: Galilean boosts and Earman's principles

**A boost of every body keeps separations and accelerations, so it maps Newtonian solutions to solutions; Earman asks that such dynamical symmetries match the symmetries of spacetime.**

- **[Galilean boost](#galilean-boost).** $\mathbf x_i(t) \mapsto \mathbf x_i(t) + \mathbf v t$, the same constant $\mathbf v$ for every body: $\dot{\mathbf x}_i \mapsto \dot{\mathbf x}_i + \mathbf v$, while $\ddot{\mathbf x}_i$ and $\mathbf x_j - \mathbf x_i$ are unchanged. With forces depending only on separations, a dynamical symmetry of Newton's laws.
- **Models** (Earman, *World Enough and Space-Time*, 1989, §3.4). A model is $\langle M, A, P\rangle$: a manifold $M$, absolute objects $A$ (the same in every model) and dynamical objects $P$ (varying, satisfying the laws); a diffeomorphism $d: M \to M$ acts by pushforward $d_*$ ([absolute and dynamical objects](#absolute-and-dynamical-objects)).
- **Spacetime symmetry:** $d_*A = A$. **Dynamical symmetry:** $\langle M, A, P\rangle$ a model $\Rightarrow$ $\langle M, A, d_*P\rangle$ a model ([dynamical and spacetime symmetries](#dynamical-and-spacetime-symmetries)).
- **[Earman's symmetry principles](#earmans-symmetry-principles)** (1989, p. 46). SP1: every dynamical symmetry is a spacetime symmetry. SP2: every spacetime symmetry is a dynamical symmetry. Norms ("conditions of adequacy"), not theorems.
- **[Noether's theorem](#noethers-theorem)** (1918), in [`analytical-mechanics` 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md)'s notation. A continuous symmetry of the action yields the conserved $I = \sum_i (\partial L/\partial\dot q_i)\,\eta_i - F$, with $L$ the Lagrangian, $\eta_i$ the symmetry's generator and $F$ the boundary term. For the boost, $I = Pt - Mx_{\text{cm}}$ ($P$ total momentum, $M$ total mass, $x_{\text{cm}}$ centre of mass): the centre of mass moves uniformly. Local symmetries yield identities among the field equations instead ([Noether's second theorem](#noethers-second-theorem)).
- **The doubled oscillator** (6.1, Belot's kind of case). $m\ddot x = -kx$ is linear, so $x \mapsto 2x$ maps solutions to solutions, yet the energy $\tfrac12 kA^2$ (amplitude $A$) quadruples and a ruler shows the difference.

*From* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Formal: Gauge transformations and loop quantities

**Resetting a charged particle's phase point by point, and the potentials with it, changes no field and no prediction; what a loop adds up survives.** SI units, particle of charge $q$, potentials $\phi$ and $\mathbf A$:

$$\mathbf E = -\nabla\phi - \partial_t\mathbf A, \qquad \mathbf B = \nabla\times\mathbf A.$$

For any smooth, single-valued $\chi(\mathbf x, t)$, the [gauge transformation](#gauge-transformation) is

$$\mathbf A \to \mathbf A + \nabla\chi, \qquad \phi \to \phi - \partial_t\chi, \qquad \psi \to e^{iq\chi/\hbar}\psi.$$

- **Unchanged.** $\mathbf E$ and $\mathbf B$ ([`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md) P1), and the form of the Schrödinger equation with $H = (\mathbf p - q\mathbf A)^2/2m + q\phi$ (minimal coupling, [`analytical-mechanics` 2.1](../analytical-mechanics/lessons/02-01-cyclic-coordinates-momenta.md)). Constant $\chi$ is the global symmetry whose Noether charge is electric charge.
- **[`qft` 5.1](../qft/lessons/05-01-gauge-invariance-photon.md)'s form.** $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$ with $\alpha = q\chi/\hbar$, $e = q$, metric $(+,-,-,-)$, $A_i = -A^i$.
- **[Holonomy](#holonomy).** For a closed loop $C$, the phase factor $e^{(iq/\hbar)\oint_C \mathbf A\cdot d\mathbf l}$: [`differential-geometry` 4.2](../differential-geometry/lessons/04-02-parallel-transport.md)'s turn of a carried vector, here a phase, with $\mathbf A$ the connection and $\mathbf B$ its curvature ([`differential-geometry` 5.4](../differential-geometry/lessons/05-04-fiber-bundles-connections.md)).
- **On a lattice** (6.2 Example 1). A phase $\theta_{uv}$ on each link (continuum limit $(q/\hbar)\int_u^v \mathbf A\cdot d\mathbf l$); a gauge transformation assigns $\alpha_v$ to each vertex and sends $\theta_{uv} \to \theta_{uv} + \alpha_v - \alpha_u$. Round a closed plaquette each $\alpha_v$ enters once with each sign, so the plaquette sum is unchanged; for a small square it approaches $q/\hbar$ times the flux through it.
- **[Aharonov–Bohm effect](#aharonov-bohm-effect)** (settled physics). Electrons passing either side of a long shielded solenoid, with $\mathbf B = 0$ on every path, interfere with phase difference $q\Phi/\hbar$, $\Phi$ the enclosed flux. Tonomura's niobium (1986) trapped flux in quanta $h/2e$, and an odd number gives $e(h/2e)/\hbar = \pi$, half a fringe.
- **The gauge hole.** If $\chi$ vanishes for $t \le t_0$ and not after, $(\phi, \mathbf A)$ and its transform solve Maxwell's equations with the same sources, agree up to $t_0$ and differ after: 4.5's hole with $\chi$ for the diffeomorphism.
- **Left to you.** The topology of the solenoid's potential, the large gauge transformations, and which loop quantity is gauge-invariant without qualification, are Boss 6(b)'s.

*From* [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Formal: Quanta, the Unruh temperature and Malament's theorem

**Particle number is a count of rungs on mode ladders; an accelerated counter finds a thermal bath in the empty vacuum; and no relativistic quantum theory finds a localizable particle anywhere.**

- **[Fock space](#fock-space)** in [`qft` 2.2](../qft/lessons/02-02-creation-annihilation-fock-space.md)'s normalization: $[a_{\mathbf p}, a_{\mathbf q}^\dagger] = (2\pi)^3\delta^3(\mathbf p - \mathbf q)$ and $N = \int \frac{d^3p}{(2\pi)^3}\,a_{\mathbf p}^\dagger a_{\mathbf p}$, modes positive-frequency with respect to inertial time.
- **[Unruh effect](#unruh-effect).** A detector with constant proper acceleration $a$ in the Minkowski vacuum responds as if in thermal radiation at
$$T_U = \frac{\hbar a}{2\pi c k_B},$$
with $\hbar$ the reduced Planck constant, $c$ the speed of light and $k_B$ Boltzmann's constant; $\hbar/(2\pi c k_B) = 4.055\times10^{-21}$ K per m/s². Use $\hbar$, not $h$. Same form as the Hawking temperature $T_H = \hbar\kappa/(2\pi k_B c)$ of [`relativity` 6.5](../relativity/lessons/06-05-black-hole-thermodynamics.md), surface gravity $\kappa$ in place of $a$.
- **[Malament's particle theorem](#malaments-particle-theorem)** (1996). To each bounded region $\Delta$ of a spacelike hyperplane assign a projection $E_\Delta$, "the particle is found in $\Delta$". Assume (i) translation covariance; (ii) energy bounded below in every inertial frame; (iii) localizability, $E_{\Delta_1}E_{\Delta_2} = 0$ for disjoint regions of one hyperplane; (iv) locality, $E_{\Delta_1}E_{\Delta_2} = E_{\Delta_2}E_{\Delta_1}$ for spacelike-separated regions. Then $E_\Delta = 0$ for every bounded $\Delta$.
- **Smeared fields.** A field at a point is not an operator; $\phi(f) = \int\phi(x)f(x)\,d^4x$, with $f$ a test function supported in a bounded region, is.
- **[Algebraic QFT](#algebraic-qft).** The net $\mathcal O \mapsto \mathcal A(\mathcal O)$ assigns each bounded spacetime region the algebra of observables measurable there (Haag and Kastler, 1964).
- **Coherent state** (6.3 Example 2; physics owned by [`photonics-quantum-optics` 3.3](../photonics-quantum-optics/lessons/03-03-coherent-states.md)). One box mode with $[a_{\mathbf k}, a_{\mathbf k}^\dagger] = 1$ and $a_{\mathbf k}|z\rangle = z|z\rangle$: counts are Poisson, $P(n) = e^{-|z|^2}|z|^{2n}/n!$, with $\langle N\rangle = \mathrm{Var}\,N = |z|^2$; the quadrature $X_{\mathbf k} = a_{\mathbf k} + a_{\mathbf k}^\dagger$ has mean $2\,\mathrm{Re}\,z$ and variance 1.

*From* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Formal: Effective field theory and power counting

**Interactions of higher mass dimension are suppressed below the cutoff by powers of $E/\Lambda$, so any theory looks renormalizable far below its cutoff.** With $\hbar = c = 1$, in four dimensions an operator $\mathcal O_\Delta$ of mass dimension $\Delta$ carries a coupling of mass dimension $4 - \Delta$, written $c_\Delta/\Lambda^{\Delta-4}$ with $c_\Delta$ a pure number and $\Lambda$ the cutoff:

$$\mathcal L_{\text{eff}} = \mathcal L_{\Delta\le 4} + \sum_{\Delta>4}\frac{c_\Delta}{\Lambda^{\Delta-4}}\,\mathcal O_\Delta, \qquad \text{relative effect at energy } E \sim c_\Delta\left(\frac{E}{\Lambda}\right)^{\Delta-4}.$$

- **[Relevant and irrelevant](#relevant-and-irrelevant-operators)**, read toward low energies: $\Delta < 4$ relevant (a mass term), $\Delta = 4$ marginal (a gauge coupling), $\Delta > 4$ irrelevant; the [non-renormalizable](#non-renormalizable-theory) couplings, of negative mass dimension, are exactly the irrelevant ones.
- **Fermi theory** (6.4 Example 1). The four-fermion interaction has $\Delta = 6$, so $G_F \approx 1.166\times10^{-5}\ \text{GeV}^{-2}$ has dimension $-2$ and strength $G_F E^2$ at energy $E$, which reaches 1 at $E \sim G_F^{-1/2} \approx 293$ GeV. Matching ([`nuclear-particle-physics` 5.1](../nuclear-particle-physics/lessons/05-01-weak-interaction.md)): $G_F/\sqrt2 = g^2/8M_W^2$, so $M_W = g\,2^{-5/4}G_F^{-1/2}$ with weak coupling $g \approx 0.65$. The expanded propagator, $\frac{1}{q^2 - M_W^2} = -\frac{1}{M_W^2}\big(1 + \frac{q^2}{M_W^2} + \cdots\big)$, shows the tower of irrelevant operators.
- **Gravity as an EFT** (6.4 Example 2). Newton's constant has mass dimension $-2$; quantum corrections come in powers of $(E/M_{\text{Pl}})^2$, with $M_{\text{Pl}} \approx 1.22\times10^{19}$ GeV.
- **[Decoupling](#decoupling)** (Appelquist and Carazzone, 1975). Particles of mass $M \gg E$ can be absorbed into the couplings of a theory without them, up to corrections suppressed by powers of $E/M$, when heavy masses grow with couplings fixed.
- **[Naturalness](#naturalness).** Order-one coefficients in units of the cutoff: relevant parameters such as the vacuum energy ($\Delta = 0$) and the Higgs mass term ($\Delta = 2$) should sit near the cutoff's scale unless finely tuned.

*From* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md); renormalization from [`qft` 6.4](../qft/lessons/06-04-loops-uv-divergences.md)–[6.6](../qft/lessons/06-06-running-couplings-renormalization-group.md)

## Arguments

The canonical arguments as premise skeletons, at outline level and at the strength their defenders would recognize. Labels follow the lessons' numbering where the lessons number premises. A skeleton says what the lesson teaches; where a Boss part asks you to reconstruct an argument, map replies or interpretations onto premises, or give a verdict, the entry stops short and says so.

**Module 1: The measurement problem**

### Argument: The trilemma, in outline

Maudlin, "Three Measurement Problems" (*Topoi*, 1995), his problem of outcomes, as 1.1 paraphrases it. The three claims are (A) completeness, (B) linearity, (C) determinate outcomes ([Maudlin's trilemma](#maudlins-trilemma)).

1. **(A) and (B) rule out (C).** By (A) and (B) an ideal measurement ends in the [chain lemma](#formal-ideal-measurement-and-the-chain-lemma)'s superposition, which is then the whole state; a symmetry step says such a state represents no single reading.
2. **(A) and (C) rule out (B).** A complete state of a device showing one result cannot be the superposition that any linear law delivers.
3. **(B) and (C) rule out (A).** The same superposition underlies either result, so something beyond it settles which.

*Weakest:* the symmetry step. Maudlin grants (as quoted by Muller, 2023) that the claims are not strictly inconsistent; for unequal amplitudes the [eigenvalue-eigenstate link](#eigenvalue-eigenstate-link) does the work, and it is a substantive premise. *Reply:* a reading rule keyed to the state alone meets the problem of statistics, a chancy rule that leaves the wave function alone meets the problem of effect ([problems of statistics and effect](#problems-of-statistics-and-effect)). *Concessions:* the critic, that some rule must link the wave function to pointer readings; the defender, that the trilemma rests on such a rule and is not a theorem of logic. A different dissent rejects the presupposition all three share ([Argument: The shared move of 1.3](#argument-the-shared-move-of-13)).

**Left to you.** Running the conflict on a $z$-spin measurement of an $x$-spin eigenstate, and saying which claim decoherence by itself gives up, are Boss 1(b)'s.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Argument: Von Neumann's movable cut

1. **P1.** Every link of the measuring chain (thermometer, retina, optic nerve) is a physical system, so the chain lemma applies at each ([von Neumann chain](#von-neumann-chain)).
2. **P2.** With orthonormal records, the Born probability of each result is the same whether collapse is applied to the system, the apparatus or the observer.
3. **C.** The boundary between observed and observer may be drawn anywhere up to the observer's "abstract ego", and no experiment locates it.

*Moral:* the invariance is why the textbook theory never fails in a lab, and why the lab never says where collapse happens. Von Neumann (*Mathematische Grundlagen*, 1932, ch. VI) required the boundary to be movable; he stopped short of explicitly giving consciousness a causal role.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md)

### Argument: Bell against "measurement"

1. **P1.** A theory that claims to be exact must state its laws in terms of physical processes.
2. **P2.** "Measurement", and the words that do its job, mark where the second law takes over without naming any physical process.
3. **C.** "Measurement" has no place in the formulation of such a theory, so collapse "on measurement" is not yet a law; the split between the two laws is "shifty".

*Consequence:* any precise answer to "when?" is already an exit from the trilemma (Wigner's is one). Bell, "Against 'Measurement'" (1990), in paraphrase. See [against measurement](#against-measurement).

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Argument: Wigner's friend and consciousness

1. **P1.** On the textbook view, Wigner outside the sealed lab must treat lab and friend as in superposition until he looks, while the friend has already seen a result ([Wigner's friend](#wigners-friend)).
2. **P2.** A conscious observer cannot be in a superposition of distinct perceptions; it is unacceptable that the friend's state of mind is undetermined until Wigner asks.
3. **C.** The friend's awareness itself reduces the state: [consciousness causes collapse](#consciousness-causes-collapse), which denies (B) at minds.

Wigner, "Remarks on the Mind-Body Question" (1961), in paraphrase. Everett told an earlier version (1956–57) and drew the opposite moral. *Where it bites:* the textbook view can neither refute nor confirm P2, because when the door opens both descriptions give the same odds.

*Lessons:* [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md)

### Argument: What decoherence leaves

1.2's argument, after the Stanford entry on decoherence (§2.1) and Bell (1990), in outline.

1. **P1.** Decoherence is derived from linear evolution of system, apparatus and environment together.
2. **P2.** So afterwards the global state still contains every reading.
3. **P3.** If the wave function is complete, that state is the whole truth.
4. **P4.** The decohered system state is an improper mixture ([proper and improper mixtures](#proper-and-improper-mixtures)), so it does not license "this reading or that, unknown which" ([and-or problem](#and-or-problem)).
5. **P5.** A determinate outcome requires that the world contain one reading.
6. **C.** Decoherence alone, with completeness and linearity, does not deliver a determinate outcome; it explains why readings stop interfering and which quantity looks definite ([preferred-basis problem](#preferred-basis-problem)).

*Weakest:* P5. The Everettian (Zeh, Saunders, Wallace) says each decohered branch contains one reading, so "and" is the right answer. *Objection:* branches are defined only [FAPP](#fapp), and a theory on which every outcome occurs owes an account of probability (2.4). *Reply* (Wallace, 2003): emergent structure is always approximate. *Concessions:* the critic, that decoherence fixes branches as well as any emergent structure is fixed; the Everettian, that determinate outcomes are reinterpreted as determinacy within a branch.

**Left to you.** Which claim of the trilemma decoherence by itself gives up, and what follows for its standing, is Boss 1(b); the cat paragraph is Boss 1(c).

*Lessons:* [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md)

### Argument: Bohr from the quantum postulate

Bohr's Como lecture (*Nature* 121, 1928, p. 580), as 1.3's Source reads it.

1. **P1.** The [quantum postulate](#quantum-postulate): any observation of atomic phenomena involves an interaction with the instrument that cannot be neglected.
2. **P2.** So no independent reality "in the ordinary physical sense" can be ascribed to the phenomena or to the instruments.
3. **P3.** What counts as observation depends on which objects are included in the observed system.
4. **C.** Where the concept of observation enters is "a question of convenience": the [Heisenberg cut](#heisenberg-cut) is drawn by the describer, case by case.

With classical concepts and [complementarity](#complementarity) (1.3's B2–B3), the wave function becomes a symbol for predicting phenomena: nothing physically collapses.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Argument: The shared move of 1.3

1. **P1.** Claims (A), (B) and (C) of the trilemma concern one absolute physical state.
2. **P2.** Bohr, [QBism](#qbism) and [relational quantum mechanics](#relational-quantum-mechanics) each deny that the wave function is such a description: a symbol, a credence, a relation.
3. **C.** For each, the trilemma as posed does not arise: (A) is rejected or relativized, (B) becomes a rule for using the symbol, and (C) holds of a phenomenon, an experience or a relative fact.

*Weakest:* P1. *Objection:* (C) concerns pointers, not states, so a theory must say what the laboratory contains when the pointer points; the shifty split returns between agent and world or between perspectives. *Reply:* demanding an absolute fact assumes what these views deny. *Concessions:* the critic, that the trilemma as stated needs an absolute state; each defender, a primitive that Module 2's repairs try to derive. The standing objection is [changing the subject](#changing-the-subject) (Timpson, 2008, on QBism; Laudisa, 2019, on RQM), with each view's reply given there.

**Left to you.** Whether QBism or RQM solves, dissolves or leaves the problem is Boss 1(d)'s essay.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

### Argument: No collapse at the marker

1.3 Example 2: an electron crosses a double slit beside a marker that records the slit perfectly.

1. **P1.** Sorting the screen hits by a later measurement of the marker in the $|m_\pm\rangle$ basis yields fringes and anti-fringes, by the quantum prediction.
2. **P2.** Had the state collapsed when the marker flipped, the result would be a proper mixture, and the sorted data would show no fringes.
3. **C.** The textbook view cannot put collapse at a perfect path record, only somewhere later where nobody will interfere the records: Bell's [FAPP](#fapp).

*Bohr's reply:* "when did the state collapse?" treats a symbol as a picture; reading the marker and erasing it are two arrangements, two phenomena. *Where it strains:* the choice can follow the hit, so which phenomenon a spot belongs to waits on a later act.

*Lessons:* [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md)

**Module 2: The realist solutions**

### Argument: Effective collapse in Bohmian mechanics

1. **P1.** A measurement leaves $\Psi(x,y) = \sum_i \psi_i(x)\Phi_i(y)$ with non-overlapping pointer packets $\Phi_i$.
2. **P2.** The actual pointer configuration $Y$ lies in exactly one packet.
3. **P3.** The [guidance equation](#guidance-equation) is evaluated at the actual configuration, where only that packet's term is non-negligible.
4. **C.** The system's [conditional wave function](#conditional-wave-function) is $\psi_i$, exactly as the textbook collapse rule says, and the other packets are [empty](#empty-wave-packets) and idle while they stay apart.

*Moral:* the collapse rule becomes a theorem about which part of the wave steers; the universal wavefunction never collapses, and decoherence keeps the branches apart without deleting them.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md)

### Argument: Albert's polarity reversal

1. **P1.** In a mirror-symmetric set-up $\psi$ has zero normal derivative on the symmetry plane, so the normal velocity vanishes there, and since trajectories cannot cross, a particle stays on its own side.
2. **P2.** An atom in an $x$-spin eigenstate starting in the upper half of its packet goes up through a $z$-magnet: read "$z$-up".
3. **P3.** Reverse the magnet's polarity, same geometry, same starting point: the atom still goes up, which now reads "$z$-down".
4. **C.** The result is a joint product of particle and apparatus, not a value the atom carried in: spin is [contextual](#contextuality), which is how Bohm escapes the [Kochen–Specker theorem](#kochen-specker-theorem).

David Albert, *Quantum Mechanics and Experience* (1992). The same no-crossing step drives the crossing-beams case behind [surrealistic trajectories](#surrealistic-trajectories) (2.1 Example 1).

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md)

### Argument: Bohmian nonlocality needs a foliation

1. **P1.** For an entangled $\psi$, particle 1's velocity depends on particle 2's position at the same instant, however far away.
2. **P2.** "The same instant" for distant events needs a slicing of spacetime into simultaneity surfaces.
3. **P3.** Relativity supplies no privileged slicing ([frame-dependent order](#frame-dependent-order)).
4. **C.** Bohmian mechanics needs a [preferred foliation](#preferred-foliation), hidden from observation in quantum equilibrium (3.3 takes up the cost).

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Argument: Pilot waves as many worlds in denial

1. **P1.** The unoccupied wave packets obey the same law and have the same structure as the occupied one.
2. **P2.** A world is whatever has that structure (functionalism about worlds).
3. **C.** The empty packets are worlds too, and the particles do no work in solving the measurement problem.

David Deutsch (1996: pilot-wave theories are parallel-universe theories in "chronic denial"); Harvey Brown and David Wallace (2005). *The Bohmian denies P2* (Maudlin, 2010, among others): a world is matter in space, and a branch of a field on configuration space, or of a law (Dürr, Goldstein and Zanghì, 1997), is not one. 2.2 traces the [structured tails](#tails-problem) problem to the same premise.

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Argument: The measure objection to quantum equilibrium

1. **P1.** Every Bohmian prediction rides on [quantum equilibrium](#quantum-equilibrium), justified by the typicality of the universe's initial configuration relative to the $|\Psi|^2$ measure ([typicality](#typicality)).
2. **P2.** Under a different measure our universe would be atypical.
3. **C.** The typicality justification presupposes the measure it was meant to explain. Valentini adds: if equilibrium is a contingent, relaxed state, the theory is not strictly empirically equivalent to quantum mechanics ([quantum non-equilibrium](#quantum-non-equilibrium)).

*Reply:* the dynamics picks the measure; $|\psi|^2$ is essentially the only suitably local distribution the flow carries into itself (Goldstein and Struyve, 2007), as the Liouville measure is for classical mechanics. *Concessions:* the Bohmian, that the measure is justified by naturalness, not derived; the critic, that no non-equilibrium has been seen and that Boltzmann faces the same question ([5.6](lessons/05-06-probability-in-statistical-mechanics.md)).

**Left to you.** How equilibrium, equivariance, typicality and [absolute uncertainty](#absolute-uncertainty) fit together is Boss 2(c).

*Lessons:* [2.1](lessons/02-01-bohmian-mechanics.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Argument: GRW amplification

1. **P1.** Each particle is hit independently at rate $\lambda_{\rm GRW}$.
2. **P2.** Independent Poisson processes merge, so $N$ displaced particles give rate $N\lambda_{\rm GRW}$.
3. **P3.** The pointer state is entangled, so a hit on any one constituent near one term crushes the other term by about $e^{-d^2/2a^2}$.
4. **P4.** The hit's centre falls near each term with that term's Born weight.
5. **C.** Superpositions of macroscopically displaced matter collapse fast, with Born statistics, while isolated microsystems are almost never touched ([amplification](#amplification)).

*Weakest:* the premise behind the scheme, that every visible outcome is first recorded by displacing many particles. *Counterexample* (Albert and Vaidman, 1989): a few photons from a fluorescent screen, excited by displacements smaller than $a$, reach a human eye, and no hit separates the branches before the observer. *Reply* (Aicardi, Borsellino, Ghirardi and Grassi, 1991): the nerve signal moves enough ions to trigger collapse within the time of perception. *Concessions:* the defender, that the outcome then becomes definite inside the observer; the critic, that no consciousness is invoked. Adler's raised rate (2003) answered by collapsing in the eye's rods; experiments have since excluded it, at least with white noise.

**Left to you.** The mean times for one nucleon and for a pointer are Boss 2(a)'s.

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Argument: The tails problem

1. **P1.** A Gaussian hit leaves the suppressed term nonzero, and Schrödinger spreading restores tails at once even after a compactly supported hit.
2. **P2 (bare tails).** On the [eigenvalue-eigenstate link](#eigenvalue-eigenstate-link), a pointer whose state is not a position eigenstate has no position (Albert, 1992); or **P2′ (structured tails).** If wavefunction structure suffices for a world, a low-weight copy of the other outcome with all its structure is a world.
3. **C.** GRW does not deliver single determinate outcomes.

*Replies:* deny P2 by giving up $|\psi|^2$ as a probability of position: on the [mass-density ontology](#mass-density-ontology) a pointer is where almost all its mass is (Lewis, 1997, objects that "almost all" makes counting misbehave), and McQueen (2015) calls the bare version a pseudo-problem once the link is relaxed. P2′ is the premise Bohmians deny about [empty packets](#empty-wave-packets) (2.1), and a [primitive ontology](#primitive-ontology) in space is where GRW's defenders look for a reply (2.2 P3). Shimony (1990) first asked that tails not be tolerated if the senses could tell their parts apart. See [tails problem](#tails-problem).

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Argument: Can collapse be tested?

1. **P1.** Collapse models predict departures from quantum mechanics: interference loss in large bodies, heating, noise, radiation ([tests of collapse models](#tests-of-collapse-models)).
2. **P2.** Null results exclude a model at a parameter setting, not "collapse": the window is bounded above by experiment and below by the need to collapse pointers fast.
3. **C.** The family can lose outright, so it is testable in a way Bohm and many-worlds are not.

*Objection:* the theory retreats into unexplored corners of its parameter space, a Lakatosian protective belt ([`philosophy-of-science` 2.5](../philosophy-of-science/lessons/02-05-lakatos-and-feyerabend.md)). *And:* a positive signal would not settle things, since extra noise might be unnoticed decoherence. Molecular interferometers cannot yet reach GRW's rate; the decisive tests are non-interferometric (2.2 Example 2).

*Lessons:* [2.2](lessons/02-02-collapse-theories-grw-and-csl.md)

### Argument: Everett's relative states

1. **E1.** The universal state is complete and always evolves by the Schrödinger equation.
2. **E2.** An ideal measurement correlates system and record ([relative states and pointer overlaps](#formal-relative-states-and-pointer-overlaps)).
3. **E3.** Relative to a record state, the system's state is the [relative state](#relative-state) that record picks out.
4. **C.** Every outcome occurs, each definite relative to a record of it, none absolutely.

Everett, "'Relative State' Formulation of Quantum Mechanics" (1957). He avoided talk of worlds and named no preferred basis; DeWitt (1970) read the components as splitting worlds, which needs a rule for which components count.

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Argument: Branches as real patterns

1. **W1.** Decoherence selects the split: environmental monitoring suppresses interference between quasi-classical components ([decoherence](#decoherence)).
2. **W2.** Dennett's criterion (Wallace's name for it): a macro-object is a pattern, real if theories that include it explain and predict well ([real patterns](#real-patterns)).
3. **W3.** Decohered components are such patterns: each evolves, to excellent approximation, as an independent quasi-classical history.
4. **C.** Branches are real, emergent and approximately defined, with no exact count ([emergent branches](#emergent-branches)).

Wallace, "Everett and Structure" (2003); *The Emergent Multiverse* (2012). *Weakest:* W2 applied to observers. *Objection:* usefulness is relative to describers, so worlds and observers would exist only at a chosen level of description. *Reply:* whether a compressing description exists does not depend on anyone using it, and decoherence makes the quasi-classical description the efficient one. *Concessions:* the Everettian, that "world" is not fundamental and that functionalism about observers is needed; the critic, that tigers and quasi-particles are real by the same test. Kent's demand for an exact rule is what Wallace calls the [fallacy of exactness](#fallacy-of-exactness).

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Argument: The incredulous stare

1. **P1.** Many-worlds posits an immense number of branches.
2. **P2.** Ockham's razor counts entities.
3. **C.** Many-worlds is extravagant.

*Reply* (SEP, "Many-Worlds Interpretation"): the razor should count laws and postulates, not entities, and many-worlds adds nothing to the Schrödinger equation. *Rejoinder* (Hemmo and Shenker, 2022): that economy is idle if the postulates alone cannot explain experience. The name is Lewis's, for the reaction to his plurality of worlds ([`metaphysics` 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md)).

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Argument: Separability or spacetime

1. **P1.** For an entangled universal state, the state of a spacetime region is not fixed by the states of its subregions.
2. **C.** Separability and the fundamentality of spacetime cannot both hold: [wavefunction realism](#wavefunction-realism) (Albert, 1996; Ney, 2021) keeps [separability](#separability) on a $3N$-dimensional configuration space and must explain three-dimensional space; [spacetime state realism](#spacetime-state-realism) (Wallace and Timpson, 2010) keeps spacetime and accepts nonseparability.

*Objection to the first* (Maudlin, 2010): a field on configuration space is the wrong kind of object to compose tables and cats.

*Lessons:* [2.3](lessons/02-03-many-worlds-branching.md)

### Argument: The Deutsch-Wallace move, in outline

2.4 Example 2 runs it on a bet with unequal Born weights.

1. **Branching availability.** In a branch, a successor can split it further into equal-amplitude sub-branches with the same reward.
2. **[Branching indifference](#branching-indifference) and [diachronic consistency](#diachronic-consistency).** The successor does not care whether the split happens, so the agent is indifferent now.
3. **Erasure and state supervenience.** Equal-amplitude branches are interchangeable, so they get equal decision weight.
4. **Normalization.** Equal weights summing to 1 give each equal branch its Born weight.
5. **Continuity** extends the result from rational to all weights.
6. **C.** Decision weight equals Born weight: the [Deutsch–Wallace theorem](#deutsch-wallace-theorem) ([formal statement](#formal-branch-counting-and-born-weight)).

*Against counting* (Wallace): decoherence fixes no branch number, and within an idealized count a counter's valuation changes with a split she should be indifferent to. *Where it stops* (2.4): the derivation convicts the counter only if branching indifference is a requirement of rationality; Kent replies that with sharply defined branches coherent strategies violate it, so the axiom comes from physics, not reason. Albert's [fatness rule](#fatness-rule) is a steelmanned rival that Wallace argues breaks an axiom (2.4 P3 asks which).

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Argument: From caring measure to probability

1. **P1.** On many-worlds every outcome occurs, so the agent receives them all.
2. **P2.** Then caring how goods are spread across successors is no error (Price's just ruler).
3. **C.** The theorem yields a caring measure, not a probability of anything (Price; Kent).

*Reply* (Wallace; Greaves; Saunders, 2010): Born weights do everything single-world chance does: they guide action (the theorem) and are estimated from frequencies (Greaves and Myrvold); the step from weight to credence is derived, where single-world chance needs the [Principal Principle](#principal-principle) postulated. *Concessions:* the Everettian, that "probability" names a role filled; the critic, that single-world chance also rests on a postulate. Greaves (2004) embraces the caring reading; Saunders (1998) keeps uncertainty, from Parfit's fission cases.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

### Argument: Self-location and evidence

- **Vaidman's self-locating uncertainty** (1998). After decoherence and before you look, there is a fact about which branch you are in and you do not know it (the sleeping-pill case). Vaidman postulates the number; Sebens and Carroll (2018) derive the Born rule as the unique rational credence from the [epistemic separability principle](#epistemic-separability-principle). *Objections:* it arrives "too late" for bets made before (Albert); an observer not yet branched has no branch to be unsure of (Kent, 2015; McQueen and Vaidman, 2019). See [self-locating uncertainty](#self-locating-uncertainty).
- **The [evidential problem](#evidential-problem).** P1: if a record's likelihood on an Everettian theory is the chance that some successor makes it, it is 1 on every Everettian rival. C: no data favour one rival over another. *Greaves and Myrvold* (2010): build the evidence relation from betting preferences, and branch weights fill the likelihood slot, so frequencies confirm Everett as they confirm a chance theory. Kent (2010) replies with toy models in which weights play no role in decision or confirmation.

*Lessons:* [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

**Module 3: Bell's theorem and nonlocality**

### Argument: EPR

Einstein, Podolsky and Rosen, "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?" (1935), paraphrased; on the singlet as Bohm restated it (*Quantum Theory*, 1951).

1. **P1. Completeness** (a necessary condition). A complete theory has a counterpart for each element of physical reality.
2. **P2. [Criterion of reality](#criterion-of-reality)** (a sufficient condition). If a quantity's value can be predicted with certainty without in any way disturbing the system, an element of reality corresponds to it.
3. **P3.** On the singlet, Alice's $z$-result predicts Bob's opposite $z$-result with certainty; had she measured $x$, his $x$-result.
4. **P4. Separability and locality** (assumed without comment). Bob's real state is the same whichever axis Alice chose.
5. **P5.** So Bob's $z$-spin and $x$-spin are both elements of reality at once.
6. **P6.** No spin state is an eigenstate of both $\sigma_z$ and $\sigma_x$.
7. **C.** Quantum mechanics is incomplete. Einstein later recast it as a dilemma: incomplete or nonlocal.

Bohr (1935) replied that the criterion is ambiguous about disturbance. Bell's theorem turns the dilemma: given single outcomes and measurement independence, nonlocal in Bell's sense either way (3.1 Example 2). See [EPR argument](#epr-argument).

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md)

### Argument: Bell's theorem, premises named

1. **P1.** [Single outcomes](#single-outcomes).
2. **P2.** [Local causality](#local-causality), which yields [factorizability](#factorizability) in the Bell experiment.
3. **P3.** [Measurement independence](#measurement-independence).
4. **C1.** $|S| \le 2$ ([formal statement](#formal-bells-set-up-and-the-chsh-expression)).
5. **P4.** Quantum mechanics gives $|S| = 2\sqrt2$ at suitable angles, and loophole-free experiments agree (settled physics).
6. **C2.** At least one of single outcomes, local causality and measurement independence is false of our world.

*Not premises:* [outcome determinism](#outcome-determinism) ("realism" in [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md)'s sense), used in the deterministic step and discharged, and "hidden variables", which names one way of making $\lambda$ complete. *Weakest:* P2's passage from relativity to factorizability, which joins causes-in-the-past-light-cone to Reichenbach's common-cause principle. *Objection* (van Fraassen, 1982; Fine, 1989): relativity licenses only the first, so a violation shows that some correlations lack a common cause. *Reply* (Bell, "Bertlmann's Socks", 1981): science treats correlations as calling for explanation. *Concessions:* the critic, that nothing local explains the correlations; Bell's side, that factorizability says more than the light cone. *Completeness matters* (3.1 Example 2): a local coin source fails factorizability on a description that omits the coin, so the test needs a complete $\lambda$ and named [local beables](#local-beables).

**Left to you.** Boss 3(a).

*Lessons:* [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md)

### Argument: The menu after Bell

1. **P1.** [Parameter independence](#parameter-independence).
2. **P2.** [Outcome independence](#outcome-independence).
3. **P3.** [Measurement independence](#measurement-independence).
4. **P4.** [Single outcomes](#single-outcomes).
5. **P5.** The quantum violation of CHSH, observed with the locality and detection [loopholes](#loopholes) closed together (2015).
6. **C.** At least one of P1–P4 is false.

By the [Jarrett decomposition](#jarrett-decomposition), P1 and P2 together are factorizability. Experiment refutes the conjunction, not a particular conjunct (Duhem's point, [`philosophy-of-science` 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md)), and which of PI and OI fails is relative to what a theory counts as the complete state. 3.2 also files QBism, [superdeterminism](#superdeterminism) and [retrocausal models](#retrocausality) on this menu.

**Left to you.** Which premise Bohm, GRW and many-worlds each give up, and what each posits instead, is Boss 3(c).

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Argument: Conspiracy, and the reply

1. **P1.** Every randomized experiment assumes that whatever fixes the settings is independent of the system studied.
2. **P2.** Superdeterminism denies that independence for Bell experiments, without a specific mechanism.
3. **C.** Superdeterminism abandons the evidential basis of experimental science, this result included.

Shimony, Horne and Clauser (1976), the [conspiracy objection](#conspiracy-objection). *Reply* (Hossenfelder and Palmer, 2020): "conspiratorial" means fine-tuned relative to some measure, and a theory with a more restricted state space can make the correlations typical. *Concessions:* the superdeterminist, that existing models are in their infancy; the critic, that no experiment can close this loophole, so the case against is methodological. Cosmic Bell tests (2017, 2018) and the BIG Bell Test (2018) push the assumption back without closing it.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Argument: Is retrocausality a denial of measurement independence?

1. **P1.** Bob's later setting influences the pair's state at the source, along timelike links (Wharton and Argaman's "locally mediated" models).
2. **P2a.** If $\lambda$ is the state actually present at the source, imprint included, then $p(\lambda\mid a,b) \ne p(\lambda)$: measurement independence fails, and PI and OI can hold.
3. **P2b.** If $\lambda$ is the state as earlier causes alone fix it, Alice's chances depend on $b$ through what $\lambda$ leaves out, and PI fails too.
4. **C.** The classification turns on what counts as the complete state and whether causes must precede effects; the Stanford entry files it both ways ([retrocausality](#retrocausality)).

Hossenfelder answers that backward causation is meaningless, so such a model is superdeterminism renamed; Price reads causation in interventionist, perspectival terms.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Argument: What "local realism" names

- **Clauser and Shimony (1978).** A local realistic theory is one satisfying factorizability, chancy theories included.
- **Mermin (1980).** Local realism is PI plus outcome determinism; the Stanford entry calls the slogan in this sense "true but misleading", since PI and OI already yield the bound.
- **Maudlin (2014), Norsen (2007).** No sense of "realism" beyond what all physics presupposes is a premise, so what fails is locality.
- **Wiseman (2014).** Two theorems: Bell 1964 assumes locality and determinism, Bell 1976 local causality alone; realists give up local causality, operationalists keep an agent-defined locality and give up determinism.
- **The QBist local reading** (Fuchs, Mermin and Schack, 2014). Outcomes are the acting agent's experiences; Alice experiences only events where she is, and Bob's report reaches her as one more; so the correlations hold among one agent's coincident experiences, with no pair of objective distant outcomes for an influence to connect. Its price: outcomes are no longer agent-independent facts.

See [local realism](#local-realism). **Left to you.** Whether "the universe is not locally real" or "nature is nonlocal" is the better summary is Boss 3(d)'s essay.

*Lessons:* [3.2](lessons/03-02-what-bell-rules-out.md)

### Argument: From Bell to the tension with relativity

1. **P1.** A theory with single outcomes and measurement independence that matches experiment violates factorizability.
2. **P2.** So, given $\lambda$, chances at one wing depend on the other wing's setting (PI fails) or outcome (OI fails).
3. **P3.** If that dependence is a process occurring at a time, "at a time" picks out a spacelike hypersurface, and the light cones pick out none ([frame-dependent order](#frame-dependent-order)).
4. **C.** Either the theory adds a [preferred foliation](#preferred-foliation), failing question (v) of [Maudlin's taxonomy](#maudlins-taxonomy), or its dependence is not a process along any hypersurface, or it takes an exit from P1.

*Weakest:* P2's "makes a difference". *Objection:* an OI failure depends on nothing anyone controls and is symmetric, a correlation built into the joint law, Shimony's "passion at a distance" (1984). *Reply* (Butterfield, 1992; Berkovitz, 1998): on a counterfactual account of causation ([`metaphysics` 4.2](../metaphysics/lessons/04-02-counterfactual-causation.md)) failure of factorizability is superluminal causal dependence, though holding a frame's past fixed makes the direction frame-chosen. *Concessions:* the passion side, a law-like link with no local ground; the causal side, a dependence with no intrinsic direction and no signal ([Bell correlations and causation](#bell-correlations-and-causation)). 3.3 sorts the theories by where they pay: [peaceful coexistence](#peaceful-coexistence), Bohm's foliation, [relativistic collapse](#relativistic-collapse), many-worlds' nonseparable state.

**Left to you.** What no-signalling does and does not show about compatibility with relativity is a clause of Boss 3(d).

*Lessons:* [3.3](lessons/03-03-nonlocality-and-relativity.md)

### Argument: Whose collapse?

1. **P1.** For a spacelike pair of measurements on the singlet, one frame puts Alice's first and another Bob's ([formal statement](#formal-no-signalling-and-frame-dependent-order)).
2. **P2.** Told in the first frame, Alice's result collapses Bob's spin; told in the second, Bob's collapses Alice's.
3. **P3.** The joint statistics, and both marginals, are the same in both stories.
4. **C.** Nothing measurable records which measurement changed the other's state, so "the state changes instantly" is not yet a relativistic law.

The before-before experiment (Stefanov, Gisin, Suarez and Zbinden, 2002) set the analyzers moving so that each measured first in its own rest frame; the correlations persisted.

*Lessons:* [3.3](lessons/03-03-nonlocality-and-relativity.md)

**Module 4: Space and spacetime**

### Argument: The shift arguments, in outline

The correspondence (Clarke's edition, 1717), as 4.1 reads it.

- **The static shift** ([static shift](#static-shift)). If space is a substance, the world displaced as a whole, every relation kept, is a second possible world. Leibniz argues that counting two is absurd, in two versions: one through the [principle of sufficient reason](#principle-of-sufficient-reason) (Third Paper §5: God could have no reason to place the world thus rather than with East and West changed), one through the [identity of indiscernibles](#identity-of-indiscernibles) (Fourth Paper §§5–6). Clarke answers each version by denying a principle, not the physics (Third Reply §2; Fourth Reply §§5–6; see [mere-will reply](#mere-will-reply)).
- **The kinematic shift** ([kinematic shift](#kinematic-shift)). Clarke raised it (Third Reply §4) against relationalism: the whole world set moving uniformly would, on that view, not have changed place. Leibniz turned it (Fourth Paper §13): if space is a substance, the world at rest and the world in uniform motion are two states differing in nothing observable, and by the PII and the PSR they are one state, so the supposed motion is no change at all. Clarke pressed back with the ship, the sudden stop and Newton's Scholium (Fourth Reply §13).
- **The valid core.** Either shift is a symmetry of laws whose forces depend on separations ([shifts and spacetimes](#formal-shifts-rotation-and-the-classical-spacetimes)), so the dispute sits on the principles.

**Left to you.** The static shift in numbered premises, with each premise marked as drawing on the PSR or the PII, Clarke's two replies set against them, why effects of changing motion cannot tell rest from uniform motion, and what Corollary V says, are Boss 4(b)'s.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Argument: What makes indiscernibility decisive

1. **Verificationist reading.** "Indiscernible" means no possible observation tells the states apart; the operative premise is the Fifth Paper §52's [observability principle](#observability-principle), and God and the PSR drop out. It condemns any undetectable quantity and spares any detectable one. (The label is twentieth-century; fitting it to Leibniz needs arguing.)
2. **Metaphysical reading.** The operative premises are the PSR and the PII as necessary truths (Fourth Paper §5); §52 itself rests observability on sufficient reason. It condemns any reasonless choice and any exact duplicate, detectable or not. See [verificationist and metaphysical readings](#verificationist-and-metaphysical-readings).

*Weakest step:* from "indiscernible" to "one". *Objection:* the PII begs the question about places, since if places are things two alike are two (Clarke, sharpened); and the static shift leaves us ignorant of nothing, since the shifted world can be described only from here (Maudlin, 1993), so even a verificationist has no complaint. *Reply:* the extra worlds make no difference to anything, and ignorance we cannot put into words is still ignorance (Dasgupta, "Inexpressible Ignorance", 2015). *Costs:* Leibniz rests on a verification principle that threatens itself ([`philosophical-method` 4.1](../philosophical-method/lessons/04-01-objections-and-replies.md)) or a PII that faces symmetric counterexamples ([`metaphysics` 2.1](../metaphysics/lessons/02-01-substance-and-accident.md)); the substantivalist must accept differences no quality marks, or stop counting shifted worlds as two ([sophisticated substantivalism](#sophisticated-substantivalism)). Maudlin's further point: absolute velocity really is unknowable, but a substantivalist can drop it and keep the rest ([Galilean spacetime](#galilean-spacetime)).

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md)

### Argument: The rotating world

1. **P1.** Set the whole world rotating rigidly: every separation stays fixed.
2. **P2.** Yet each body needs a force $m\omega^2 r$ to stay on its circle: cords stretch, water climbs.
3. **C1.** Rotation is detectable, so there is no indiscernible pair, and the shift argument gives no verdict.
4. **C2.** On the verificationist reading Leibniz must grant a difference no relation among bodies records; in the Fifth Paper §53 he grants [absolute true motion](#absolute-true-motion), where "the immediate Cause of the Change is in the Body".

The substantivalist places the rotation relative to space, or to the structure Galilean spacetime keeps; the relationalist places the standard in the bodies (Leibniz's cause) or in the laws ([regularity relationalism](#regularity-relationalism)). Whether §53 squares with §52 is 4.1 P3.

*Lessons:* [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Argument: The bucket and the globes, as Mach read them

1. **P1.** The water's concavity is an endeavour to recede from the axis, an effect of circular motion.
2. **P2.** The concavity does not track the water's rotation relative to the vessel (the stages are the Scholium's, pp. 15–16).
3. **C1.** True circular motion is not rotation relative to the surrounding bodies.
4. **P3.** Two globes joined by a cord and revolving show the endeavour as tension, measurable with nothing else in the universe ([rotating globes](#rotating-globes)).
5. **C2.** True rotation is rotation with respect to [absolute space](#absolute-space).

The target of C1 was Descartes's definition of motion (Stein, 1967); Rynasiewicz reads the globes as answering how true motions are *found*. *Mach's reply* (McCormack, 1893, p. 232): grant C1, refuse C2; rotation relative to the earth and the celestial bodies is what produces the forces, and nobody can say what a vessel "several leagues thick" would do ([Mach's principle](#machs-principle)). *Weakest step:* C1 and P3 to C2. *Stein's objection:* absolute rotation needs only a connection, which carries no absolute place. *Substantivalist's reply:* a connection is structure where no body is, so it must belong to something, and the relationalist pays for the bucket in laws ([best matching](#best-matching), [regularity relationalism](#regularity-relationalism)). *Concessions:* the substantivalist gives up Newton's enduring places; the relationalist, that relative distances alone fix how bodies move.

**Left to you.** The stage-by-stage close reading of the bucket passage is Boss 4(a).

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Argument: Symmetry matching

1. **P1.** The dynamical symmetries of Newton's laws, with distance-dependent forces, are the Galilean transformations.
2. **P2.** Spacetime and dynamical symmetries should coincide (Earman's principles, stated in [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)).
3. **P3.** Newtonian spacetime has too few symmetries: its absolute velocity is structure the laws never use. Leibnizian spacetime has too many: a time-dependent rotation preserves it but changes the laws, adding centrifugal and Coriolis terms.
4. **C.** Galilean spacetime is the structure Newton's laws need: it concedes the kinematic shift to Leibniz and the bucket to Newton ([symmetry matching](#symmetry-matching)).

*Strain:* by Corollary VI, gravitation may need only Newton–Huygens spacetime (Saunders, 2013; Earman's "Maxwellian"), with absolute rotation and no absolute linear acceleration; Weatherall (2016) replies that gravity's trajectories restore a standard of acceleration.

*Lessons:* [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Argument: The conventionality of simultaneity

1. **P1.** The only non-conventional ground for saying two distant events are not simultaneous is that a causal signal could connect them.
2. **P2.** In special relativity no causal signal outruns light.
3. **P3.** Every event at A strictly between a signal's departure and return is spacelike to its reflection at B.
4. **C.** No physical fact fixes which of them is simultaneous with the reflection; any ε in $(0,1)$ may be chosen ([conventionality of simultaneity](#conventionality-of-simultaneity)).

Reichenbach (1928); Grünbaum (1963), who adds that $\varepsilon = \tfrac12$ is simpler only in notation. Proposed one-way measurements were each argued to presuppose an equivalent convention (Winnie, 1970; Salmon, 1977). *The challenge:* [Malament's theorem](#malaments-simultaneity-theorem). *Weakest premise of the theorem:* (i), definability. *Objection* (Janis, Grünbaum): every ε-relation in A's frame is the standard relation of some observer moving past A, so the convention has moved, not vanished. *Reply:* the question supplies the worldline, and relative to it the causal facts fix $\varepsilon = \tfrac12$. *Concessions:* given the worldline, only standard synchrony is causally definable; the theorem bites only if definability, time-reflection invariance included, is the test of the non-conventional.

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Argument: Rietdijk-Putnam and Stein

- **Rietdijk–Putnam** (1966; 1967). P1: I-now am real. P2: some other observer, perhaps moving relative to me, is real. P3 ("There Are No Privileged Observers"): if all and only the things bearing a frame-independent relation $R$ to me-now are real, and you-now are real, the same holds for you-now, which requires $R$ to be transitive. P4: what exists now is real, "now" read with each observer's simultaneity. C: by transitivity events in my future are real, and enough observers reach every event: the [block universe](#block-universe). See [Rietdijk-Putnam argument](#rietdijk-putnam-argument).
- **Stein** (1968, 1991). Seek a relation "$y$ has already become for $x$" defined from spacetime's intrinsic structure, reflexive, transitive and not universal: $y$ in or on $x$'s past light cone qualifies, and if two distinct events bear it to each other it is universal. So becoming is relative to a point ([point-relative becoming](#point-relative-becoming)). Callender (2000) prices it: a present should contain some event besides its owner.
- **The presentist's exits** ([`metaphysics` 5.1](../metaphysics/lessons/05-01-the-a-theory-and-the-b-theory.md)): a [preferred foliation](#preferred-foliation), or [frame-relative presentism](#frame-relative-presentism). The verdict belongs to [`metaphysics` 5.2](../metaphysics/lessons/05-02-presentism-growing-block-eternalism.md).

*Lessons:* [4.3](lessons/04-03-the-conventionality-of-simultaneity.md)

### Argument: Geometric conventionalism

1. **P1.** Experience tests only geometry and physics together, (G) + (P) (Einstein's symbols, "Geometry and Experience", 1921).
2. **P2.** In the heated sphere, Euclid with Poincaré's thermal laws and Lobachevsky with no thermal effect predict every observation alike ([heated sphere](#formal-the-heated-spheres-geometry)).
3. **P3.** The case generalizes: any geometry can be rescued by adjusting the physics.
4. **C.** Which geometry space has is a choice guided by experience and settled by convenience ([geometric conventionalism](#geometric-conventionalism)).

Reichenbach sharpened P2: a differential force is detectable by comparing materials, a universal one is not, so set universal forces to zero by coordinative definition ([universal and differential forces](#universal-and-differential-forces)). *Weakest:* P3. *Objection* (Weatherall and Manchak, 2014): with "force" understood the standard way, a new force field can accommodate a different geometry in Newtonian gravitation but not in relativity theory. *Reply* (Duerr and Ben-Menahem, 2022; Duerr and Read, 2024): loosen "force" and current spacetime theories admit conventionalist readings. *Concessions:* a non-standard field can always redescribe; the choice is between theory packages, not a free stipulation.

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Argument: Geometry or dynamics

- **Geometrical view** (Janssen, 2009; Maudlin, 2012). Spacetime has Minkowski structure; every law governs fields in it, so every law is Lorentz covariant; one geometry explains at a stroke why all forces agree. See [geometrical view of relativity](#geometrical-view-of-relativity).
- **Dynamical view** (Brown, 2005; Brown and Pooley, 2006). Rods and clocks are composite; a moving rod is shorter because Lorentz-covariant forces settle at a shorter equilibrium; Minkowski geometry codifies that shared symmetry and explains nothing the laws do not. See [dynamical view of relativity](#dynamical-view-of-relativity).
- **Norton's objection** (2008): the dynamical view's matter laws already presuppose spatiotemporal structure.
- **Common ground in GR.** Brown (2005, ch. 9): rods and clocks survey the metric because the strong equivalence principle makes local physics special-relativistic; Pooley (2013) and Read (2020) note that every side grants this.

Both views give the same predictions, Bell's spaceships included (4.4 Example 2); the dispute is over the direction of explanation ([principle and constructive theories](#principle-and-constructive-theories)).

*Lessons:* [4.4](lessons/04-04-geometry-convention-or-dynamics.md)

### Argument: The hole argument and its dilemma

Earman and Norton, "What Price Spacetime Substantivalism?" (1987), as 4.5 reconstructs it ([pushforward and the hole](#formal-pushforward-active-covariance-and-the-hole)).

1. **P1. [Manifold substantivalism](#manifold-substantivalism).** The points of $M$ represent spacetime points that exist independently of $g$ and $T$, each the same point in every model.
2. **P2. Literal representation.** Every solution, so read, represents a physically possible world.
3. **P3.** Active general covariance.
4. **P4.** Hole-related models agree on every invariant, so on every observation.
5. **C1.** They are two possible worlds, so [Leibniz equivalence](#leibniz-equivalence) is denied.
6. **C2.** They agree on $\Sigma$ and outside $H$ yet differ inside: indeterminism about an undetectable difference.
7. **C.** The [Earman–Norton dilemma](#earman-norton-dilemma): keep manifold substantivalism and accept that indeterminism, or accept Leibniz equivalence and give it up. Methodological premise: determinism should be settled by physics, not by a metaphysics of points.

*Replies:* relationalism (accept Leibniz equivalence); accept or redefine determinism (Butterfield, 1989); [metric essentialism](#metric-essentialism) denies P2; [anti-haecceitism](#anti-haecceitism) denies P1's second clause. *Weakest:* P1's second clause (Hoefer, 1996). *Reply:* without trans-world identity it is unclear what the substantivalist asserts (Dasgupta, 2011). *Ancestors:* the static shift; Einstein's [point-coincidence argument](#point-coincidence-argument) (1916: all verification is of coincidences, which survive smooth redistribution, so diffeomorphic models say the same thing).

**Left to you.** The proof that the pushed-forward metric solves the equations and agrees on $\Sigma$ is Boss 4(d); whether [sophisticated substantivalism](#sophisticated-substantivalism) escapes without collapsing into relationalism is Boss 4(e).

*Lessons:* [4.5](lessons/04-05-the-hole-argument.md), [5.1](lessons/05-01-determinism-in-physical-theories.md)

**Module 5: Determinism, time's arrow, and probability**

### Argument: Norton's dome against Newtonian determinism

1. **P1.** Newtonian mechanics (three laws, uniform gravity, rigid frictionless surfaces) admits the dome.
2. **P2.** On the dome, two histories satisfying those laws, rest forever and rest-then-slide, agree at $t = 0$ and differ afterward ([determinism and the dome](#formal-determinism-and-the-dome)).
3. **C.** Newtonian mechanics so construed is not deterministic by Earman's definition ([Norton's dome](#nortons-dome)).

Norton's glosses: the first law holds throughout (no first instant of motion, only a last instant of rest), and the theory assigns no probabilities to the departure. *Weakest:* P1. *Objections:* the Lipschitz condition is a tacit part of Newtonian mechanics, tied to the reversibility of its solutions (Korolev, 2007); the apex has infinite curvature; until we say which forces and surfaces the theory admits, its determinism has no settled answer (Malament, "Norton's Slippery Slope", 2008). *Reply* (Norton, 2008): each idealization is textbook-standard, and a Lipschitz requirement is a fourth law that makes a new theory. *Concessions:* the critic, that the three laws as written admit the motion; Norton, that no real dome exists and such indeterminism is exceptional with finitely many degrees of freedom.

**Left to you.** Boss 5(a).

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Argument: Other failures of determinism

- **Space invaders** (Earman, 1986). Unbounded speeds let a particle reach spatial infinity in finite time; its time reverse arrives from infinity with nothing earlier announcing it, so past determinism fails for one history and, by reversal, future determinism for its partner. Xia (1992) proved such [non-collision singularities](#non-collision-singularities) for five gravitating bodies, Painlevé's conjecture ([space invaders](#space-invaders)). Special relativity's light cone rules them out.
- **General relativity.** Constraint-satisfying vacuum data on a Cauchy surface have a maximal development unique up to diffeomorphism (Choquet-Bruhat and Geroch, 1969). The qualifier is the hole argument: determinism under Leibniz equivalence, indeterminism for the manifold substantivalist. Beyond the development a [Cauchy horizon](#cauchy-horizon) can lie, past which the data fix nothing even up to diffeomorphism; strong cosmic censorship (Penrose) says such horizons are not generic, and whether a version holds is open.
- **Quantum theory.** Bohmian mechanics and the Everettian universal state evolve deterministically, GRW and textbook collapse do not, so "quantum mechanics is indeterministic" is interpretation-relative ([`metaphysics` 6.4](../metaphysics/lessons/06-04-libertarianism-and-its-critics.md) defers here).

*Lessons:* [5.1](lessons/05-01-determinism-in-physical-theories.md)

### Argument: From unpredictability to indeterminism

1. **P1.** In a chaotic system no finite precision fixes the outcome beyond a finite horizon ([predictability horizon](#formal-the-predictability-horizon)).
2. **P2.** What no possible measurement could fix is not fixed by the present state.
3. **C.** The future of a chaotic system is not fixed by its present.

Popper (1950; *The Open Universe*, 1982); Polkinghorne (*Science and Creation*, 1988), reading chaos as ontological openness through critical realism. *As a claim about theories* C is false: the logistic map, Lorenz's 1963 equations and Newtonian billiards are chaotic and pass Earman's test. *As a claim about the world* it rests wholly on P2; chaos supplies only P1. See [determinism and predictability](#determinism-and-predictability).

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Argument: Finite information

1. **G1.** Classical determinism assumes every quantity has infinitely many determinate digits (the principle of infinite precision).
2. **G2.** A finite region of space holds only finitely much information.
3. **G3.** Almost every real number carries infinite information.
4. **C.** Physical quantities carry finite information, and chaos promotes their not-yet-determinate digits into the macroscopic state at $\lambda/\ln 2$ binary digits per unit time: classical physics so read is indeterministic, yet empirically equivalent to the standard reading.

Gisin (2021); Del Santo and Gisin (2019) ([finite-information quantities](#finite-information-quantities)). *Costs* (Gisin's own): adding real numbers makes classical mechanics deterministic as adding positions makes Bohmian mechanics deterministic, and something must make undetermined digits determinate, a classical measurement problem.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Argument: Chaos amplifies quantum indeterminacy

1. **P1.** Quantum mechanics limits how sharply a state is specified, to a spread $\delta_q$.
2. **P2.** Chaos stretches that spread exponentially, to macroscopic size after about $\frac1\lambda\ln(\Delta/\delta_q)$.
3. **C.** Macroscopic outcomes are not fixed by the prior state ([chaos amplification](#chaos-amplification)).

Hobbs (1991); Kellert (1993); Maxwell's 1873 singular points as precursor. Bishop's conditions: an indeterministic reading of quantum mechanics (Bohm and Everett supply none), no damping or negative local stretching, and, in brains, a way past parallel redundancy. Its use for free will is [`metaphysics` 6.4](../metaphysics/lessons/06-04-libertarianism-and-its-critics.md)'s, for divine action [`apologetics-foundations` 4.4](../apologetics-foundations/lessons/04-04-divine-action-miracles-and-quantum-indeterminacy.md)'s.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Argument: The faithful model assumption

1. **P1.** The determinist's reply to Popper assumes that the deterministic model represents the world even beyond the horizon where no data check it ([faithful model assumption](#faithful-model-assumption)).
2. **P2.** Some processes are equally well described as deterministic or as stochastic however many observations are made (Suppes, 1993, using Ornstein's theorems; Lorenz on many-scale flows).
3. **C.** No data settle the world's determinism ([observational equivalence of chaos and chance](#observational-equivalence-of-chaos-and-chance)).

*Reply* (Winnie, 1997; Hoefer): the equivalence holds at a chosen coarse-graining; finer observation exposes deterministic structure, and we often know the law on independent grounds. *Concessions:* chaotic models' success is no evidence for the world's determinism, and unpredictability is no evidence against it.

*Lessons:* [5.2](lessons/05-02-chaos-and-predictability.md)

### Argument: Loschmidt and Zermelo against the H-theorem

- **Loschmidt's [reversibility objection](#reversibility-objection)** (1876), in outline. The molecular dynamics is time-reversal invariant under velocity reversal; $H$ takes the same value at a state and at its reversal; gases do relax. So reversing a history in which $H$ falls gives a lawful history in which it rises: no theorem from the dynamics alone makes $H$ fall for every state, and the [Stosszahlansatz](#stosszahlansatz) fails at reversed states.
- **Zermelo's [recurrence objection](#recurrence-objection)** (1896). A gas in a rigid box at fixed energy has volume-preserving dynamics on a region of finite volume; by [Poincaré recurrence](#poincare-recurrence) almost every state returns arbitrarily close to itself; $H$ depends continuously on the state; so $H$ cannot fall forever.
- **Boltzmann's replies.** The theorem holds for most initial states, those "not specially arranged" (*Nature*, 1895); recurrence times for a cubic centimetre of air have many trillions of digits (1896); why our surroundings are now improbable is no question for natural science.
- **Weakest:** Boltzmann's "not specially arranged", since reversal preserves Liouville measure, so reversed microstates are no rarer. 5.3 weighs it, with [Lanford's theorem](#lanfords-theorem) on the defender's side; the retrodiction problem it leads to is 5.4's.

**Left to you.** Loschmidt's objection in one precise sentence, and the retrodiction problem with what the past hypothesis adds, are Boss 5(c).

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md)

### Argument: Albert and Malament on time reversal

- **Albert** (*Time and Chance*, 2000). P1: an instantaneous state must not depend on other times. P2: reversal may flip only the rate of change of something it leaves alone. P3: a magnetic field is the rate of change of nothing. C1: reversal leaves $B$ alone. P4: with $B$ kept and $j$ flipped, Maxwell's equations fail for the reversed history (Faraday's law). C2: classical electromagnetism is not time-reversal invariant (and likewise quantum mechanics).
- **Malament** (2004). The field tensor $F_{ab}$ codes the force on a charge through its future-pointing four-velocity, so it is fixed only relative to a time orientation; reversing that orientation flips it; an observer's $E$ survives while $B$, which also needs a handedness of space, flips. So electromagnetism is time-reversal invariant, and Albert's map is time reversal plus a mirror reflection.

Earman (2002) also rejects Albert's conclusion; Roberts (2022) reconciles them. Both sides accept every prediction and that the $B$-flipping map takes solutions to solutions; they disagree whether it deserves the name ([Albert–Malament dispute](#albert-malament-dispute)).

*Lessons:* [5.3](lessons/05-03-reversible-laws-irreversible-world.md)

### Argument: Typicality, retrodiction and the past hypothesis

1. **P1. Dominance.** For macroscopic $N$ the equilibrium macrostate fills almost all of phase space.
2. **P2. [Statistical postulate](#statistical-postulate).**
3. **P3. No conspiracy.** In each non-equilibrium macrostate, the microstates whose trajectories fail to head into larger regions have tiny measure (a dynamical claim).
4. **C1.** From a non-equilibrium macrostate, Boltzmann entropy at later times is higher with probability close to 1: [typical](#typicality), not certain.

*The retrodiction problem* (5.4): the premises mention no direction of time, so the argument threatens to run backward too; 5.4 answers with the [past hypothesis](#past-hypothesis) and the [Mentaculus](#mentaculus). *Frigg (2009), Uffink (2007):* a region's being big does not make atypical states flow into it. *Subjectivity charge* (Maxwell, 1871; Jaynes, 1965): macrostates are fixed by what we measure. *Reply:* macrostates are physical coarse variables, kettles boil whatever anyone knows, and grain changes are sub-extensive. *Weakest:* P2, posited, not derived. *Reply* (Loewer, 2001): it earns its place as a law in the best system ([`metaphysics` 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md)). *Subsystem worry* (Winsberg, 2004): a rise in the universe's entropy does not imply one in each subsystem ([subsystem worry](#subsystem-worry)).

**Left to you.** Boss 5(b)'s bands and 5(c)'s account of what the past hypothesis adds.

*Lessons:* [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md)

### Argument: Fluctuations and Boltzmann brains

- **The [fluctuation hypothesis](#fluctuation-hypothesis)** (Boltzmann, 1895, crediting Schuetz; *Gastheorie* II §90, 1898). F1: the universe is vastly larger and older than the observed world, in equilibrium almost everywhere and always. F2: a region fluctuates to entropy deficit $\Delta S$ with probability proportional to $e^{-\Delta S/k_B}$. F3: observers exist only far from equilibrium. C: observers find themselves in rare low-entropy regions, with no special beginning.
- **The minimal-fluctuation objection.** B1: smaller fluctuations are exponentially more probable. B2: all your evidence could come from one far smaller than a low-entropy universe, at the limit a brain with false memories ([Boltzmann brains](#boltzmann-brains)). B3: so on F1–F3 your evidence most probably comes from a minimal fluctuation. B4: your belief in F1–F2 rests on that evidence. C′: the hypothesis cannot be both true and justifiably believed (Carroll's "cognitively unstable", 2017).
- **Weakest:** B3's treatment of you as a random sample of observers. *Objection* (Rovelli and Wolpert, 2024; with Scharnhorst, 2025): the argument infers laws from records and then calls the records unreliable, and conditions arbitrarily on one time. *Reply* (Carroll): the self-undermining is the point. Feynman (1963) pressed B3's prediction that unexamined regions should be disordered.

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Argument: The status of the past hypothesis

- **Law** (Loewer, 2001; Goldstein, 2001; Chen, 2023). In the best system, the past hypothesis and statistical postulate buy all of thermodynamics for one short axiom.
- **[Brute fact](#brute-fact-view)** (Callender, 2004). It states initial conditions of the one process there is, and initial conditions are not the kind of thing that needs explaining.
- **[Demands explanation](#demand-for-explanation)** (Price, 1996, 2004). The puzzle is why entropy was ever low; exempting the past is a temporal double standard.
- **[Not even false](#not-even-false)** (Earman, 2006). Grants that an asymmetric boundary condition is needed; denies that the early universe's Boltzmann entropy is well defined in general-relativistic cosmology, that a low value would explain subsystem thermodynamics, and that our knowledge of the past rests on Boltzmann entropy.
- **Its price.** [Penrose's estimate](#penroses-estimate). Inflation does not obviously remove it: inflation must start from a smooth, low-entropy patch (Price, 1996); defenders reply that a small patch is a far smaller deficit, and Albrecht and Sorbo (2004) left the comparison open.
- **What it is meant to ground.** The [record asymmetry](#record-asymmetry) (Albert, 2000; Loewer, 2012): records exist of the past because the past hypothesis is the world's ultimate ready state. Earman's bombed city (1974) sinks entropic accounts of records; Albert's survives, but faces the subsystem worry again.

**Left to you.** Which status is right, and what Boltzmann brains and the typicality-or-chance reading do to the choice, is Boss 5(d)'s essay.

*Lessons:* [5.5](lessons/05-05-is-the-past-hypothesis-enough.md)

### Argument: Three accounts of statistical probability

- **Ergodic.** P1: the probability of a macrostate is the long-run fraction of time spent in it. P2: the system is ergodic. C: that fraction is the macrostate's measure for almost every start ([ergodic hypothesis](#ergodic-hypothesis)). *Against* (Earman and Rédei, 1996; Malament and Zabell, 1980; Sklar, 1993): finite timescales; false of the systems (by the [KAM theorem](#kam-theorem), generic Hamiltonian systems are neither integrable nor ergodic); not necessary (the Kac ring behaves thermodynamically without being ergodic, so ergodicity cannot be what explains that behaviour); measure zero. Weaker variants: ε-ergodicity (Vranas, 1998).
- **[Typicality](#typicality)** (Lebowitz, 1993; Goldstein, 2001). P1: equilibrium fills nearly all of the energy surface. P2: nearly all states in a low-entropy macrostate evolve toward equilibrium. C: thermodynamic behaviour is typical and needs no further explanation. *Against:* P2 needs dynamical assumptions (Frigg, Uffink); the [measure objection](#measure-objection): nearly all by which measure? Stationarity does not single one out, and uniqueness of the invariant density holds only for ergodic flows.
- **[Maximum entropy](#maximum-entropy)** (Jaynes, 1957). Probabilities are rational credences. *Against* (Redhead, 1995; Albert, 2000; Loewer, 2001): kettles boil whatever anyone knows, so credences cannot explain why. *Reply:* the dynamics does the boiling; maximum entropy says which predictions the data license. It too needs a reference measure.
- **Weakest shared premise:** that one measure is privileged. *Reply:* the measure is a posit judged by its yield, and robust. *Concessions:* robustness makes the choice idle in practice; the measure is postulated, not derived.

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md)

### Argument: Can a deterministic world have chances?

1. **P1.** At $t$, the complete history to $t$ and the laws have chance 1.
2. **P2.** Under deterministic laws, these entail $A$ or entail not-$A$.
3. **P3.** Whatever a chance-1 proposition entails has chance 1.
4. **C.** In a deterministic world every chance is 0 or 1: Lewis's incompatibilism (*Philosophical Papers* II, 1986).

*Loewer's [deterministic chance](#deterministic-chance)* (2001): best-system laws balance simplicity, strength and fit; adding the statistical postulate to the dynamics and the past hypothesis buys all of thermodynamics cheaply, so its probabilities are chances. He denies P1 for them: they attach to initial conditions, and the exact microstate is inadmissible for the [Principal Principle](#principal-principle). Schaffer (2007) defends incompatibilism; Ismael (2009) and Frigg and Hoefer (2015) are compatibilists. Poincaré's roulette needle shows why such chances are stable ([method of arbitrary functions](#method-of-arbitrary-functions)).

*Lessons:* [5.6](lessons/05-06-probability-in-statistical-mechanics.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md)

**Module 6: Symmetry, gauge, and quantum fields**

### Argument: Corollary V and Earman's route to Galilean spacetime

- **Newton's proof** (Corollary V, as 6.1's Source reads it). Newton derives the corollary from Law 2, but only by assuming that impulses arise from relative motions, which is why the SEP calls the principle, demoted to a corollary, still an independent assumption ([Newton's corollaries V and VI](#newtons-corollaries-v-and-vi)).
- **Earman's route.** P1: the [Galilean boost](#galilean-boost) is a dynamical symmetry of Newton's laws. P2: in Newtonian spacetime it turns a body at rest into one in motion, so it is no spacetime symmetry. P3: SP1 demands that every dynamical symmetry be a spacetime symmetry ([Earman's symmetry principles](#earmans-symmetry-principles)). C: delete the surplus structure, absolute rest, and move to [Galilean spacetime](#galilean-spacetime).

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md)

### Argument: The symmetry-to-reality inference

Dasgupta's name for it ("Symmetry as an Epistemic Notion (Twice Over)", 2016).

1. **P1.** We have reason to think the laws true and complete.
2. **P2.** A putative feature $F$ is variant: models related by a symmetry of the laws agree on everything else and differ in $F$.
3. **P3.** So $F$ is undetectable: every measurement is governed by the laws, and symmetry-related models agree on its outcome.
4. **P4.** A feature undetectable in principle is one we have some reason not to believe in.
5. **C.** There is some reason to think $F$ unreal, and the symmetry-related models represent one world ([surplus structure](#surplus-structure), [symmetry-to-reality inference](#symmetry-to-reality-inference)).

*Weakest:* P3. *Objection* (Belot, 2013): as physics defines symmetries, variance does not entail undetectability; the doubled oscillator's amplitude is variant yet measurable. *Reply* (Dasgupta's second sense): doubling the oscillator alone changes its relation to the ruler, so it is no symmetry in the sense the inference needs. *Concessions:* the defender, that the inference needs an account of what instruments detect; the critic, that where a theory itself says a quantity is undetectable, as Newtonian mechanics says of absolute velocity, such cases leave it untouched. A substantivalist attacks P4 instead: things alike in every detectable respect can still be two (4.1).

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md)

### Argument: When is a symmetry observable?

[Direct empirical significance](#direct-empirical-significance) (Kosso, 2000; Brading and Brown, 2004) asks for a subsystem on which the transformation, applied alone, is a dynamical symmetry, and an untransformed environment relative to which the two situations differ observably; consequences routed through the laws, such as conserved quantities, are indirect.

- **Boost everything** (6.1 Example 2). The first condition holds and the second cannot be met, since nothing is left untransformed: the criterion gives no verdict on whole-universe models. The symmetry-to-reality inference is then at its strongest; the substantivalist denies P4; Earman goes round the argument by rebuilding the theory in Galilean spacetime. What remains is the [hole argument](#hole-argument)'s question.
- **Local symmetries** (6.2). Kosso, Brading and Brown deny gauge transformations direct significance; Greaves and Wallace (2014) say a local symmetry can have it if it does not die away at the subsystem's edge.

**Left to you.** Reading Salviati's ship, and why Kosso and Brading and Brown take it as the paradigm, is Boss 6(a); [Galileo's ship](#galileos-ship) names the passage.

*Lessons:* [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Argument: The Aharonov-Bohm argument for real potentials

After the SEP entry "Gauge Theories in Physics" (2025, §3.1), as 6.2 states it.

1. **P1.** Changing the enclosed flux shifts the fringes.
2. **P2.** A difference in what happens to the electrons is due to a difference in the electromagnetic state where they travel.
3. **P3.** Where they travel, the different fluxes agree on $\mathbf E$ and $\mathbf B$, both zero, and differ only in potentials no gauge transformation relates.
4. **C.** Potentials that agree on $\mathbf E$ and $\mathbf B$ can represent different electromagnetic states: field strengths at points are not the whole of electromagnetism ([Aharonov–Bohm effect](#aharonov-bohm-effect)).

6.2 names P2 as the premise under most pressure ([separability](#separability)). [Healey's three interpretations](#healeys-three-interpretations) (fields alone; potentials at points; holonomies of loops) are its three responses.

**Left to you.** How each interpretation fares on separability, on gauge-dependent reality and on action at a distance, and Healey's argument about the potentials, are Boss 6(c); the topology behind the effect is Boss 6(b).

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Argument: The gauge hole

1. **P1.** Let $\chi$ vanish for $t \le t_0$ and not after; then a solution and its gauge transform agree up to $t_0$ and differ after ([formal statement](#formal-gauge-transformations-and-loop-quantities)).
2. **P2.** If gauge-related potentials are distinct physical states, the theory's past does not fix its future.
3. **C.** The potentials realist faces 4.5's dilemma again: indeterminism no measurement reveals, a privileged gauge, or a gauge version of Leibniz equivalence, which is the surplus reading ([surplus structure](#surplus-structure); Redhead, 1975, 2002).

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md), [4.5](lessons/04-05-the-hole-argument.md)

### Argument: Gauge symmetry cannot break

1. **P1.** [Elitzur's theorem](#elitzurs-theorem) (1975): in lattice gauge theory without gauge fixing, every local quantity that is not gauge-invariant has expectation value zero.
2. **C1.** A local gauge symmetry cannot break spontaneously; "the vacuum breaks the gauge symmetry" ([`nuclear-particle-physics` 5.2](../nuclear-particle-physics/lessons/05-02-electroweak-higgs.md)) is shorthand for a global remnant in a fixed gauge.
3. **P2.** The W and Z have mass, and the Higgs boson was found (2012).
4. **C2.** The mechanism needs a gauge-invariant statement: no real mass comes from eating "descriptive fluff" (Earman, 2004); Friederich (2013) surveys the attempts.

*And structure:* Lyre (2004) argues for [ontic structural realism](#ontic-structural-realism) about gauge from the gauge principle's success (a miracle if it tracked nothing) and the potentials' underdetermination; Redhead (2002) found that success puzzling on his own surplus reading.

*Lessons:* [6.2](lessons/06-02-gauge-as-surplus-structure.md)

### Argument: No fundamental particles?

6.3's argument, after the SEP entry "Quantum Field Theory". A [particle ontology](#particle-ontology) needs things that are (M1) countable, (M2) localizable, (M3) individuals.

1. **T1. [Unruh effect](#unruh-effect)** against M1: whether quanta are present depends on how the counter moves.
2. **T2. [Malament's particle theorem](#malaments-particle-theorem)** against M2: given translation covariance, energy bounded below, localizability and locality, the particle is found nowhere (Halvorson and Clifton, 2002: unsharp localization does not escape).
3. **T3. [Reeh–Schlieder](#reeh-schlieder-theorem)** against M2: local operations on the vacuum approximate every state, so no local measurement confirms that $N$ quanta are present (Redhead, 1995).
4. **T4. [Haag's theorem](#haags-theorem)** against M1 wherever there is interaction: an interacting field cannot live in the free Fock representation (Fraser, 2008: no particle interpretation; Bain, 2000: keep asymptotic particles).
5. **D. [Permutation invariance](#permutation-invariance)** against M3: Fock states say how many quanta occupy each mode, never which (Teller's quanta).
6. **C.** If a fundamental particle ontology needs M1–M3, relativistic QFT supplies none, and the [field ontology](#field-ontology) inherits T1, T4 and the state half of T3.

*Weakest:* that particles need M1–M3 at the fundamental level. *Objection* (Wallace, 2006, 2011): particles are emergent and scale-dependent, like phonons. *Reply:* then "particle" no longer names the fundamental ontology, and the question moves to what particles emerge from. *Concessions:* the emergentist, that particles are not fundamental; the critic, that particle talk is no error where Fock space applies. *On Unruh* (6.3 Example 1): Teller (propensities for Rindler quanta), Clifton and Halvorson (neither description privileged), Arageorgis, Earman and Ruetsche (the Rindler vacuum is not physically realizable).

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Argument: Fields, individuality and structure

- **Baker against fields** (2009). P1: wave-functional space is unitarily equivalent to Fock space. P2: the Unruh and Haag arguments attack the Fock representation. C: they attack the [wave-functional interpretation](#wave-functional-interpretation) too.
- **The individuality dilemma** (French and Redhead, 1988). Quantum particles share every property the state assigns either, so they are non-individuals (the received view: French and Krause, 2006) or individuals by a thisness physics never sees. Saunders (2003, 2006): [weak discernibility](#weak-discernibility) by an irreflexive relation such as "has spin opposite to".
- **[Metaphysical underdetermination](#metaphysical-underdetermination) to structure** (Ladyman, 1998; French and Ladyman, 2003). P1: physics is compatible with particles as individuals and as non-individuals. P2: a realist should believe only what physics supports. C: believe only the structure the two packages share: [ontic structural realism](#ontic-structural-realism) (Ladyman and Ross, 2007), at the cost of relations without relata ([`philosophy-of-science` 5.3](../philosophy-of-science/lessons/05-03-structural-realism.md)).
- **Local algebras** ([algebraic QFT](#algebraic-qft)): interacting models of its axioms exist in lower dimensions, none yet for a four-dimensional theory of particle physics.

*Lessons:* [6.3](lessons/06-03-particles-fields-or-structure.md)

### Argument: Effective realism

Williams, "Scientific Realism Made Effective" (2019); J. D. Fraser (2018); reconstructed in 6.4.

1. **P1.** Our best quantum field theories are effective: reliable only below some $\Lambda$, by their own account.
2. **P2.** By the [renormalization group](#renormalization-group) and [decoupling](#decoupling), what they say well below $\Lambda$ is insensitive to which of a large class of high-energy theories is true.
3. **P3.** A realist should believe what success depends on and what would survive replacement of the unknown parts (the divide et impera of [`philosophy-of-science` 5.2](../philosophy-of-science/lessons/05-02-the-pessimistic-induction-and-selective-realism.md)).
4. **C.** Believe what an EFT says at its own scales, and nothing it says beyond $\Lambda$ ([effective realism](#effective-realism)).

*Weakest:* P2. *Objection* (Ruetsche, 2018): robustness holds relative to a space of alternatives, and the pessimist needs only possibilities outside it; non-decoupling and the [naturalness](#naturalness) failures add cases where low energies feel high ones. *Reply:* the commitment covers what is robust under every variation the theory flags. *Concessions:* robustness is relative to the alternatives surveyed; EFTs say in advance which claims are at risk. *Fermi theory as a case* (6.4 Example 1): right about a four-fermion interaction of strength $G_F$, wrong that it happens at a point, which its own power counting placed beyond its reach ([power counting](#formal-effective-field-theory-and-power-counting)).

**Left to you.** Whether this supports realism about what the Standard Model says, or hands the pessimistic induction its best modern case, is Boss 6(d)'s essay.

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

### Argument: Which QFT to interpret

- **D. Fraser** (2009, 2011): interpret [algebraic QFT](#algebraic-qft). QFT is the project of uniting quantum theory with special relativity; a cutoff breaks Poincaré covariance; the textbook interaction picture is inconsistent by Haag's theorem; insensitivity to short distances means success underdetermines what happens there; and particle physics has nothing like the atoms that show condensed matter's cutoff is real.
- **Wallace** (2006, 2011): interpret conventional QFT with a cutoff, read through Wilson. The Standard Model is formulated and confirmed there; only conventional QFT so far predicts for interacting systems in four dimensions; a realist should accept its claim that field degrees of freedom freeze out at short distances, at the latest where gravity enters.
- **Concessions** (Egg, Lam and Oldofredi, 2017): Wallace, that conventional QFT does not require a cutoff, only that assuming one suffices; Fraser, that the underdetermination is so far only potential. Neither takes particles to be fundamental; the dispute is over what a quantum field theory is ([Fraser–Wallace dispute](#fraser-wallace-dispute)).

*Lessons:* [6.4](lessons/06-04-renormalization-and-effective-field-theory.md)

## Thinkers and texts

Alphabetical by surname, joint authors under the first named. The thesis column is the lessons' one-line version, not a verdict; dates are those of the works the lessons cite. Modern works are paraphrased here. The public-domain texts the Boss problems read (Galileo's ship, Newton's Scholium, the Leibniz–Clarke correspondence, Einstein's 1905 §1) are named, not quoted.

| Who | When | Key work | One-line thesis as the lessons give it | Lessons |
|---|---|---|---|---|
| Emily Adlam and Carlo Rovelli | 2023 | "Information is Physical: Cross-Perspective Links in RQM" | a cross-perspective link: measuring a system's pointer reveals what it registered | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Emily Adlam and Jacob Barandes | 2026 | "Against Many Worlds" (preprint) | no route to the Born rule on many-worlds can succeed | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| Stephen Adler | 2003 | raised collapse rate | raise GRW's rate so collapse happens in the eye's rods; since excluded, at least with white noise | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| Yakir Aharonov and David Bohm | 1959 | "Significance of Electromagnetic Potentials in the Quantum Theory" | electrons passing a shielded solenoid interfere with phase difference $q\Phi/\hbar$; potentials real at each point | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| David Albert | 1992; 1996; 2000; 2010; 2015 | *Quantum Mechanics and Experience*; "Elementary Quantum Metaphysics"; *Time and Chance*; "Probability in the Everett Picture"; *After Physics* | spin is contextual (polarity reversal); tails on the eigenvalue-eigenstate link point nowhere; wavefunction realism; the past hypothesis and statistical postulate (his names); classical electromagnetism not time-reversal invariant; the fatness rule; self-location arrives "too late"; records rest on the past hypothesis | [2.1](lessons/02-01-bohmian-mechanics.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.3](lessons/02-03-many-worlds-branching.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md), [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| David Albert and Lev Vaidman | 1989 | few-photon counterexample | an outcome can reach an observer with no displacement large enough for a GRW hit | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| Andreas Albrecht and Lorenzo Sorbo | 2004 | "Can the Universe Afford Inflation?" | the problem "sometimes called" the Boltzmann's Brain paradox; inflation's probability is scheme-dependent | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Valia Allori, Sheldon Goldstein, Roderich Tumulka and Nino Zanghì | 2008 | "On the Common Structure of Bohmian Mechanics and the Ghirardi-Rimini-Weber Theory" | primitive ontology as a programme; GRWf and GRWm named; a fundamental theory must say what matter in space it is about | [2.1](lessons/02-01-bohmian-mechanics.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| Thomas Appelquist and James Carazzone | 1975 | "Infrared Singularities and Massive Fields" | decoupling: heavy particles' low-energy effects absorbed into couplings, up to powers of $E/M$ | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Arageorgis, Earman and Ruetsche | 2003 | "Fulling Non-uniqueness and the Unruh Effect" | the Rindler vacuum is not physically realizable, so Unruh is no special threat to particles | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Guido Bacciagaluppi | SEP | "The Role of Decoherence in Quantum Mechanics" | decoherence is physics every interpretation uses, not a solution by itself; maps 1.2's argument (§2.1) | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| Jonathan Bain | 2000 | "Against particle/field duality" | keep particles in the asymptotic states scattering data refer to | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| David Baker | 2009 | "Against Field Interpretations of Quantum Field Theory" | wave-functional space is unitarily equivalent to Fock space, so Unruh and Haag carry over to fields | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Yuri Balashov | 2010 | *Persistence and Spacetime* | relativity favours perdurance | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Julian Barbour and Bruno Bertotti | 1982 | "Mach's Principle and the Structure of Dynamical Theories" | best matching: dynamics from relative configurations, recovering only zero-angular-momentum solutions | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| Jeffrey Barrett | 2000; SEP | "The Persistence of Memory: Surreal Trajectories in Bohm's Theory"; SEP on Everett | surreal trajectories are real and show the special role of position records; counting is as consistent as Everett's measure | [2.1](lessons/02-01-bohmian-mechanics.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| Robert Batterman | 2000 | "Multiple Realizability and Universality" | RG universality physically explains multiple realizability | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| John S. Bell | 1964; 1966; 1976; 1981; 1987; 1990 | "On the Einstein-Podolsky-Rosen Paradox"; "The Theory of Local Beables"; "Bertlmann's Socks"; "Are There Quantum Jumps?"; "Against 'Measurement'"; "La nouvelle cuisine"; "How to teach special relativity" (1976) | the theorem; local causality and local beables; correlations call for explanation; "measurement" has no place in an exact theory (the "shifty split", FAPP, "and" not "or"); positions are what we see; GRW's flashes; named superdeterminism (1986 interview); teach relativity Lorentz's way | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [2.1](lessons/02-01-bohmian-mechanics.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Gordon Belot | 2013 | "Symmetry and Equivalence" | symmetry-related solutions of differential equations are not in general physically equivalent | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| Gordon Belot and John Earman | 2001 | "Pre-Socratic Quantum Gravity" | named "sophisticated substantivalism", somewhat pejoratively | [4.5](lessons/04-05-the-hole-argument.md) |
| Berndl, Dürr, Goldstein, Peruzzi and Zanghì; Berndl, Dürr, Goldstein and Zanghì | 1995; 1996 | global existence of Bohmian motion; trajectory theories and hyperplanes | Bohmian solutions exist for all time except from a $|\psi|^2$-null set of configurations; trajectory theories cannot keep Born statistics on arbitrary hyperplanes | [2.1](lessons/02-01-bohmian-mechanics.md), [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| Michael Berry (after Boris Chirikov) | 1978 | "Regular and Irregular Motion" | an electron at the edge of the universe spoils prediction of a gas molecule after about 56 collisions | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Robert Bishop | SEP | "Chaos" | conditions on chaos amplifying quantum indeterminacy; the faithful model assumption | [5.2](lessons/05-02-chaos-and-predictability.md) |
| David Bohm | 1951; 1952 | *Quantum Theory* §§22.15-22.18; "A Suggested Interpretation of the Quantum Theory in Terms of 'Hidden' Variables" | EPR restated on the singlet; pilot-wave theory completed, with a theory of measurement | [2.1](lessons/02-01-bohmian-mechanics.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md) |
| Niels Bohr | 1928; 1935 | "The Quantum Postulate and the Recent Development of Atomic Theory" (Como lecture); reply to EPR | the quantum postulate; classical concepts; complementarity of space-time coordination and causality; the cut placed for convenience; EPR's criterion is ambiguous about disturbance | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| Ludwig Boltzmann | 1872; 1895; 1896; 1898 | H-theorem; "On Certain Questions of the Theory of Gases" (*Nature*); replies to Zermelo; *Vorlesungen über Gastheorie* II §90 | $H$ falls under the Stosszahlansatz; it falls with high probability for states not specially arranged; recurrence times are astronomically long; the fluctuation hypothesis (crediting Schuetz); for the universe both directions of time are indistinguishable | [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Katherine Brading and Harvey Brown | 2003; 2004 | "Symmetries and Noether's Theorems"; "Are Gauge Symmetry Transformations Observable?" | local symmetries yield identities, not further conservation laws; a symmetry has direct empirical significance on a subsystem against an untransformed environment; gauge transformations lack it | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Harvey Brown | 2005 | *Physical Relativity* | the dynamical view: Lorentz-covariant forces explain contraction and Minkowski geometry codifies them; in GR the strong equivalence principle gives the metric its chronogeometric role (ch. 9) | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Harvey Brown and Oliver Pooley | 2006 | "Minkowski space-time: a glorious non-entity" | the dynamical view | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Harvey Brown and Christopher Timpson | 2016 | Everettian locality | Alice's measurement changes only a relation between her and Bob | [3.2](lessons/03-02-what-bell-rules-out.md) |
| Harvey Brown and David Wallace | 2005 | "Solving the measurement problem: de Broglie-Bohm loses out to Everett" | the Bohmian particles do no work in solving the measurement problem | [2.1](lessons/02-01-bohmian-mechanics.md) |
| Jeremy Butterfield | 1989; 1992 | "The Hole Truth"; Bell's theorem and causation | redefine determinism as agreement up to diffeomorphism; on counterfactual causation, failure of factorizability is superluminal causal dependence | [3.3](lessons/03-03-nonlocality-and-relativity.md), [4.5](lessons/04-05-the-hole-argument.md) |
| Craig Callender | 2000; 2004 | on Stein's becoming; "There Is No Puzzle about the Low Entropy Past" | a present should contain some event besides its owner; the low-entropy past is a brute fact needing no explanation | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Sean Carroll | 2017 | "Why Boltzmann Brains Are Bad" | Boltzmann-brain-dominated theories are cognitively unstable | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Carlton Caves, Christopher Fuchs and Rüdiger Schack | 2002; 2007 | "Quantum Probabilities as Bayesian Probabilities"; on certainty | quantum states as an agent's credences; probability 1 is certainty, not an element of reality | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Robert Chambers | 1960 | Aharonov-Bohm test with an iron whisker | first observed shift, with stray fields leaving doubt | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Eddy Chen | 2023 | the past hypothesis as law | the past hypothesis is a candidate fundamental law | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Yvonne Choquet-Bruhat and Robert Geroch | 1969 | maximal development | constraint-satisfying data have a maximal development unique up to diffeomorphism | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| Samuel Clarke | 1715-16 (pub. 1717) | five Replies to Leibniz, *A Collection of Papers* | mere will suffices among indifferent options; places exactly alike are still two; raised the kinematic shift (Third Reply §4) and pressed the ship (Fourth Reply §13) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| John Clauser, Michael Horne, Abner Shimony and Richard Holt | 1969 | the CHSH inequality | a four-correlation bound testable with real detectors | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| John Clauser and Michael Horne | 1974 | "objective local theories" | first parsed the locality condition into two conjuncts | [3.2](lessons/03-02-what-bell-rules-out.md) |
| John Clauser and Abner Shimony | 1978 | review of Bell's theorem | a local realistic theory is one satisfying factorizability, chancy theories included | [3.2](lessons/03-02-what-bell-rules-out.md) |
| Rob Clifton and Hans Halvorson | 2001 | on Rindler quanta | Minkowski and Rindler descriptions are both true, in terms of propensities; neither privileged | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Shamik Dasgupta | 2011; 2015; 2016 | "The Bare Necessities"; "Inexpressible Ignorance"; "Symmetry as an Epistemic Notion (Twice Over)" | anti-haecceitist substantivalism is obscure; ignorance we cannot put into words is still ignorance; named the symmetry-to-reality inference, which passes through an epistemic lemma | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.5](lessons/04-05-the-hole-argument.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| Paul Davies | 1975 | "Scalar Particle Production in Schwarzschild and Rindler Metrics" | accelerated observers see thermal particles | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Louis de Broglie | 1927 | pilot wave (Solvay) | first pilot-wave theory, rediscovered by Bohm | [2.1](lessons/02-01-bohmian-mechanics.md), [3.2](lessons/03-02-what-bell-rules-out.md) |
| Flavio Del Santo and Nicolas Gisin | 2019 | *Physical Review A* | finite-information quantities make classical physics indeterministic | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Daniel Dennett | 1991 | "Real Patterns" | a pattern is real if a description using it compresses the data | [2.3](lessons/02-03-many-worlds-branching.md) |
| Bernard d'Espagnat | 1971 (2nd ed. 1976) | *Conceptual Foundations of Quantum Mechanics* | proper and improper mixtures | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| David Deutsch | 1996; 1999 | "Comment on Lockwood"; "Quantum Theory of Probability and Decisions" | pilot-wave theories are parallel-universe theories in "chronic denial"; probability read off rational betting | [2.1](lessons/02-01-bohmian-mechanics.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| David Deutsch and Patrick Hayden | 2000 | information flow in entangled systems | a fully local account of quantum information flow (questioned by Wallace and Timpson, 2007) | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| Dewan and Beran | 1959 | "Note on stress effects due to relativistic contraction" | the spaceship-and-thread puzzle Bell made famous | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Bryce DeWitt | 1962; 1970 | field strengths acting at a distance; "Quantum mechanics and reality" | components as physically splitting worlds; popularized "many worlds"; the fields-only option for Aharonov-Bohm | [2.3](lessons/02-03-many-worlds-branching.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Lajos Diósi and Roger Penrose | 1989 on | gravity-related collapse | superpositions of differently curved spacetimes decay (the Diósi-Penrose model) | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| Paul Dirac | 1935 | *The Principles of Quantum Mechanics*, 2nd ed. | collapse as a physical jump (from the second edition) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| John Donoghue | 1994 | "General Relativity as an Effective Field Theory" | the leading parameter-free quantum correction to the attraction of two masses | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Dove; Roderich Tumulka | 1996; 2006 | relativistic GRW with flashes | a Lorentz-invariant, foliation-independent collapse theory with flash ontology | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| Patrick Duerr and Yemima Ben-Menahem; Duerr and James Read | 2022; 2024 | "Why Reichenbach wasn't entirely wrong..."; "An invitation to conventionalism" | current spacetime theories admit conventionalist readings | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Detlef Dürr, Sheldon Goldstein and Nino Zanghì | 1992; 1997 | "Quantum Equilibrium and the Origin of Absolute Uncertainty" | Born statistics from typical initial configurations; absolute uncertainty; primitive ontology; the wavefunction as nomological | [2.1](lessons/02-01-bohmian-mechanics.md) |
| Detlef Dürr, Sheldon Goldstein, Travis Norsen, Ward Struyve and Nino Zanghì | 2014 | "Can Bohmian mechanics be made relativistic?" | the universal wavefunction can fix the foliation covariantly | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| John Earman | 1986; 1989; 2002; 2004; 2006; 2007 | *A Primer on Determinism*; *World Enough and Space-Time*; on time reversal; on gauge and the Higgs; "The 'Past Hypothesis': Not Even False"; "Aspects of Determinism in Modern Physics" | determinism as agreement of histories; space invaders; the hierarchy of classical spacetimes and symmetry principles SP1-SP2; sides against Albert; no real mass from "descriptive fluff"; the past hypothesis cannot be stated in GR cosmology, would not explain subsystems, and does not ground records | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| John Earman and John D. Norton | 1987 | "What Price Spacetime Substantivalism?" | the hole argument turned on manifold substantivalism; named Leibniz equivalence | [4.5](lessons/04-05-the-hole-argument.md) |
| John Earman and Miklós Rédei | 1996 | "Why Ergodic Theory Does Not Explain the Success of Equilibrium Statistical Mechanics" | ergodicity is neither true of the relevant systems nor necessary, so it cannot explain | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| John Earman and Doreen Fraser | 2006 | "Haag's Theorem and its Implications" | Haag's theorem for philosophers | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Arthur Eddington | 1928 | *The Nature of the Physical World*, ch. IV | monkeys on typewriters: improbable order by chance | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Matthias Egg, Vincent Lam and Andrea Oldofredi | 2017 | "Particles, Cutoffs and Inequivalent Representations" | locate the Fraser-Wallace crux in what a QFT is; record both sides' concessions | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Werner Ehrenberg and Raymond Siday | 1949 | electron optics | first prediction of the Aharonov-Bohm effect | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Albert Einstein | 1905; 1913-16; 1918; 1919; 1921; 1953 | "On the Electrodynamics of Moving Bodies" §1; the hole argument; "The Foundation of the General Theory of Relativity" §3; "Prinzipielles..."; *The Times*; "Geometry and Experience"; Born Festschrift | synchrony by definition; the hole argument and its abandonment; the point-coincidence argument; named Mach's principle; principle vs constructive theories; Poincaré right *sub specie aeterni*; a Bohmian particle between walls is at rest | [2.1](lessons/02-01-bohmian-mechanics.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [4.5](lessons/04-05-the-hole-argument.md) |
| Albert Einstein, Boris Podolsky and Nathan Rosen | 1935 | "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?" | the criterion of reality plus locality makes quantum mechanics incomplete | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| Elitzur | 1975 | "Impossibility of Spontaneously Breaking Local Symmetries" | local gauge symmetry cannot break spontaneously | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Brian Ellis and Peter Bowman | 1967 | slow clock transport | slowly transported clocks fix standard synchrony (disputed: Winnie, Salmon) | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Berthold-Georg Englert, Marlan Scully, Georg Süssmann and Herbert Walther | 1992 | "Surrealistic Bohm Trajectories" | Bohmian trajectories can disagree with which-way detector records | [2.1](lessons/02-01-bohmian-mechanics.md) |
| Hugh Everett III | 1957 | "'Relative State' Formulation of Quantum Mechanics" (the long thesis written as a Princeton graduate student) | every outcome occurs, each definite relative to a record; squared amplitude as the branching-additive measure; told a friend story before Wigner | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.3](lessons/02-03-many-worlds-branching.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| Richard Feynman | 1963 | *Lectures on Physics* I §46-5 | a fluctuation view predicts disorder in every unexamined region | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Arthur Fine | 1982; 1989 | "Hidden Variables, Joint Probability, and the Bell Inequalities"; "Do Correlations Need to Be Explained?" | a factorizable model exists iff a joint distribution does iff all Bell inequalities hold (given setting-independent marginals); correlations need not be explained | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| Gordon Fleming | 1989 on | hyperplane-dependent collapse | collapse on every spacelike hyperplane through the measurement | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| Doreen Fraser | 2008; 2009; 2011 | "The fate of 'particles'..."; "Quantum Field Theory: Underdetermination, Inconsistency, and Idealization" | interacting QFT admits no particle interpretation; interpret algebraic QFT | [6.3](lessons/06-03-particles-fields-or-structure.md), [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| J. D. Fraser | 2018 | "Renormalization and the Formulation of Scientific Realism" | renormalization's morals for stating realism (with Williams) | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Daniela Frauchiger and Renato Renner | 2018 | "Quantum theory cannot consistently describe the use of itself" | an extended Wigner's friend no-go theorem | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| Steven French and Michael Redhead | 1988 | "Quantum Physics and the Identity of Indiscernibles" | quantum particles are non-individuals or individuals by an unseen thisness | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Steven French and Décio Krause | 2006 | *Identity in Physics* | the received view: objects that are not individuals | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Simon Friederich | 2013 | gauge symmetry breaking | surveys gauge-invariant statements of the Higgs mechanism | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Roman Frigg | 2009; 2011 | "Typicality and the Approach to Equilibrium"; "Why Typicality Does Not Explain..." | typicality needs dynamical assumptions; a region's size does not make states flow into it | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| Christopher Fuchs, N. David Mermin and Rüdiger Schack | 2014 | "An Introduction to QBism" | QBism named; outcomes are the agent's experiences, which removes quantum nonlocality | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [3.2](lessons/03-02-what-bell-rules-out.md) |
| Christopher Fuchs | 2017 | "On Participatory Realism" | QBism as a users' manual for acting in a real world | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Stephen Fulling | 1973 | "Nonuniqueness of Canonical Field Quantization in Riemannian Space-Time" | canonical quantization picks no unique particle concept | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Galileo Galilei | tr. Salusbury, 1661 | *Dialogue*, Second Day: Salviati's ship | Salviati's ship, which 6.1 names and Boss 6(a) reads | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| GianCarlo Ghirardi, Alberto Rimini and Tullio Weber | 1986 | "Unified Dynamics for Microscopic and Macroscopic Systems" | spontaneous localization: rare random hits, amplified in large bodies | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [3.2](lessons/03-02-what-bell-rules-out.md) |
| GianCarlo Ghirardi, Renata Grassi and Fabio Benatti | 1995 | mass-density ontology | matter is a mass-density field in space | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| Cody Gilmore | 2006 | "Where in the Relativistic World Are We?" | relativistic endurance | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Nicolas Gisin | 1989; 2021 | nonlinearity and signalling; "Indeterminism in Physics, Classical Chaos and Bohmian Mechanics" | generic nonlinear modifications would signal; classical physics with finite information is indeterministic | [3.3](lessons/03-03-nonlocality-and-relativity.md), [5.2](lessons/05-02-chaos-and-predictability.md) |
| Sheldon Goldstein | 2001 | "Boltzmann's Approach to Statistical Mechanics" | typicality; the past hypothesis as a law | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| Sheldon Goldstein and Ward Struyve | 2007 | equivariance and uniqueness | $|\psi|^2$ is essentially the only local distribution the Bohmian flow carries into itself | [2.1](lessons/02-01-bohmian-mechanics.md) |
| Hilary Greaves | 2004 | "Understanding Deutsch's Probability in a Deterministic Multiverse" | the Deutsch-Wallace weights measure how much to care about each successor; no uncertainty needed | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| Hilary Greaves and Wayne Myrvold | 2010 | "Everett and Evidence" | branch weights fill the likelihood slot, so frequencies confirm Everett | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| Hilary Greaves and David Wallace | 2014 | "Empirical Consequences of Symmetries" | local symmetries can have direct empirical significance | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Adolf Grünbaum | 1963; 2010 | *Philosophical Problems of Space and Time*; reply to Malament | simultaneity is conventional; $\varepsilon = \tfrac12$ is simpler only in notation; Malament's theorem relocates the convention | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Rudolf Haag | 1955 | "On quantum field theories" | no interaction picture for interacting fields (Haag's theorem) | [6.3](lessons/06-03-particles-fields-or-structure.md), [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Rudolf Haag and Daniel Kastler | 1964 | "An algebraic approach to quantum field theory" | founding paper of algebraic QFT | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Hans Halvorson and Rob Clifton | 2002 | "No Place for Particles in Relativistic Quantum Theories?" | Malament's result survives unsharp localization | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Nicholas Harrigan and Robert Spekkens | 2010 | "Einstein, Incompleteness, and the Epistemic View of Quantum States" | ontological models; ψ-ontic vs ψ-epistemic | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Richard Healey | 1997; 2007 | "Nonlocality and the Aharonov-Bohm Effect"; *Gauging What's Real* | three interpretations of the Aharonov-Bohm effect; separability defined; holonomies his choice | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Werner Heisenberg | 1955 | "The Development of the Interpretation of the Quantum Theory" | coined "Copenhagen interpretation"; stressed the movable cut | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Meir Hemmo and Orly Shenker | 2022 | on Everettian economy | economy of postulates is idle if they cannot explain experience | [2.3](lessons/02-03-many-worlds-branching.md) |
| Hensen et al. (Delft); Giustina et al.; Shalm et al. | 2015 | loophole-free Bell tests | violation with locality and detection loopholes closed together | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| Jeremy Hobbs; Stephen Kellert | 1991; 1993 | "Chaos and Indeterminism"; *In the Wake of Chaos* | chaos amplifies quantum indeterminacy to macroscopic scales | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Carl Hoefer | 1996 | "The Metaphysics of Space-Time Substantivalism" | anti-haecceitist substantivalism; the trouble is primitive identity | [4.5](lessons/04-05-the-hole-argument.md) |
| Sabine Hossenfelder and Tim Palmer | 2020 | "Rethinking Superdeterminism" | conspiracy is fine-tuning relative to a measure; a restricted state space can make the correlations typical | [3.2](lessons/03-02-what-bell-rules-out.md) |
| Don Howard | 2004 | "Who Invented the 'Copenhagen Interpretation'? A Study in Mythology" | no unitary Copenhagen view before Heisenberg's 1955 coinage; observer-induced collapse was Heisenberg's, not Bohr's | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Hu, Feng, Zhang and Chin | 2019 | "Quantum simulation of Unruh radiation" | an analogue of Unruh radiation in a condensate, nothing accelerated | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Nick Huggett | 2006 | "The Regularity Account of Relational Spacetime" | regularity relationalism: inertial frames from the best system of a world of bodies | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| Allen Janis | 1983 | on Malament's theorem | each observer gets its own standard synchrony, with exactly ε's latitude | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Michel Janssen | 2009 | "Drawing the line between kinematics and dynamics in special relativity" | the geometrical view | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Jon Jarrett | 1984 | "On the Physical Significance of the Locality Conditions in the Bell Arguments" | factorizability splits into "locality" (PI) and "completeness" (OI) | [3.2](lessons/03-02-what-bell-rules-out.md) |
| E. T. Jaynes | 1957; 1965 | "Information Theory and Statistical Mechanics"; "Gibbs vs Boltzmann Entropies" | statistical mechanics as maximum-entropy inference; entropy is a property of the experiments chosen | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| Erich Joos and H. Dieter Zeh | 1985 | "The Emergence of Classical Properties through Interaction with the Environment" | the scattering model behind decoherence estimates (the dust grain); Zeh reads decoherence the Everettian way | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| Mark Kac | 1959 | the ring model | the H-theorem in miniature: an ansatz that fits, reverses and recurs | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| Leo Kadanoff | 1966 | block spins | coarse-graining spins into blocks | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Immanuel Kant | 1781/1787 | *Critique of Pure Reason* | Euclidean geometry is synthetic a priori | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Adrian Kent | 1990; 2010; 2015 | "Against Many-Worlds Interpretations"; "One World Versus Many"; reply to Sebens and Carroll | demands a precise branching rule; weights can play no decision or confirmation role; the axioms come from physics, not rationality | [2.3](lessons/02-03-many-worlds-branching.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| Simon Kochen and Ernst Specker | 1967 | Kochen-Specker theorem | no noncontextual value assignment for systems of three or more levels | [3.2](lessons/03-02-what-bell-rules-out.md) |
| Alexandre Korolev | 2007 | "Indeterminism, Asymptotic Reasoning, and Time Irreversibility in Classical Physics" | the Lipschitz condition is a tacit part of Newtonian mechanics | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| Peter Kosso | 2000 | "The Empirical Status of Symmetries in Physics" | direct vs indirect empirical significance of symmetries | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Erich Kretschmann | 1917 | on general covariance | any theory can be given generally covariant form, so passive covariance constrains nothing | [4.5](lessons/04-05-the-hole-argument.md) |
| James Ladyman | 1998 | "What Is Structural Realism?" | metaphysical underdetermination motivates ontic structural realism; the hole argument as one motivation | [4.5](lessons/04-05-the-hole-argument.md), [6.3](lessons/06-03-particles-fields-or-structure.md) |
| James Ladyman and Don Ross | 2007 | *Every Thing Must Go* | ontic structural realism as naturalized metaphysics | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Oscar Lanford | 1975 | Lanford's theorem | Boltzmann's equation from Hamiltonian dynamics for most initial states of a dilute gas, briefly (extended by Deng, Hani and Ma, 2024) | [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| Pierre-Simon Laplace | tr. 1902 | *A Philosophical Essay on Probabilities*, ch. II | an intelligence knowing all forces and positions at one instant would see past and future | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| Jacques Laskar | 1989 | "A numerical experiment on the chaotic behaviour of the Solar System" | the planets are chaotic, Lyapunov time about 5 million years | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Federico Laudisa | 2019 | "Open Problems in Relational Quantum Mechanics" | RQM never says how a relative value comes about | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Joel Lebowitz | 1993 | "Boltzmann's Entropy and Time's Arrow" | typicality | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| Gottfried Wilhelm Leibniz | 1715-16 (pub. 1717) | five Papers to Clarke | space an order of coexistences; the static shift by the PSR and the PII; turned the kinematic shift (Fourth Paper §13); observability principle (Fifth Paper §52); granted absolute true motion (§53) | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md) |
| David Lewis | 1980; 1986 | "A Subjectivist's Guide to Objective Chance"; *Philosophical Papers* II | the Principal Principle; in a deterministic world every chance is 0 or 1 | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| Peter J. Lewis | 1997 | "Quantum Mechanics, Orthogonality, and Counting" | the mass-density reply's "almost all" makes counting misbehave | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| Barry Loewer | 2001; 2012 | "Determinism and Chance"; "The Emergence of Time's Arrows and Special Science Laws from Physics" | statistical-mechanical probabilities are best-system chances; the past hypothesis as a law; the Mentaculus; records and counterfactuals | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| Edward Lorenz | 1963; 1969 | sensitive dependence; "The predictability of a flow which possesses many scales of motion" | 1963: sensitive dependence; 1969: finite predictability per scale, not lengthened by reducing initial error | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Johann Loschmidt | 1876 | reversibility objection | reversing every velocity makes $H$ rise, so no theorem from the dynamics alone makes it fall | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| Holger Lyre | 2004 | "Holism and Structuralism in U(1) Gauge Theory" | ontic structural realism about gauge fields | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Ernst Mach | tr. McCormack, 1893 | *The Science of Mechanics* | rotation relative to the earth and celestial bodies; nobody knows what a vessel "several leagues thick" would do | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| Dylan Mahler and colleagues | 2016 | "Experimental Nonlocal and Surreal Bohmian Trajectories" | trajectories look surreal only if their nonlocality is ignored | [2.1](lessons/02-01-bohmian-mechanics.md) |
| David Malament | 1977; 1996; 2004; 2008 | "Causal Theories of Time and the Conventionality of Simultaneity"; "In Defense of Dogma"; "On the Time Reversal Invariance of Classical Electromagnetic Theory"; "Norton's Slippery Slope" | only standard synchrony is causally definable; no relativistic quantum theory of localizable particles; $B$ flips under time reversal; which forces count as Newtonian is the prior question | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [6.3](lessons/06-03-particles-fields-or-structure.md) |
| David Malament and Sandy Zabell | 1980 | "Why Gibbs Phase Averages Work" | criticize the time-average justification of phase averages | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| Tim Maudlin | 1989-90; 1993; 1994 (3rd ed. 2011); 1995; 1998; 2010; 2012; 2014 | "The Essence of Spacetime"; "Buckets of Water and Waves of Space"; *Quantum Non-Locality and Relativity*; "Three Measurement Problems"; "Can the World be Only Wavefunction?"; *Philosophy of Physics: Space and Time*; "What Bell Did" | metric essentialism; the shifts differ and spacetime is probably a substance; five questions about relativity; the trilemma; disputes Healey on Aharonov-Bohm; a world is matter in space; the geometrical view; violations at a distance make the world nonlocal | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.1](lessons/02-01-bohmian-mechanics.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.3](lessons/02-03-many-worlds-branching.md), [3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md), [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [4.5](lessons/04-05-the-hole-argument.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| James Clerk Maxwell | 1871; 1873 | *Theory of Heat*; essay on free will | the second law holds while we deal with bodies only in mass; tiny influences at singular points | [5.2](lessons/05-02-chaos-and-predictability.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| Kelvin McQueen | 2015; 2019 | "Four Tails Problems for Dynamical Collapse Theories"; with Vaidman | bare tails are a pseudo-problem once the link is relaxed, structured tails are not; Sebens-Carroll's pre-branching question is meaningless | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| N. David Mermin | 1980; 2017 | local realism; on QBism and Bell | local realism as PI plus outcome determinism; a normative theory may take its users as given | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md), [3.2](lessons/03-02-what-bell-rules-out.md) |
| E. Minguzzi | 2002 | one-way speed freedom | the freedom is a scalar field | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Ruward Mulder | 2021 | on gauge underdetermination | Lorenz-gauge potentials, propagating at finite speed, give a local account | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| F. A. Muller | 2023 | "Six Measurement Problems of Quantum Mechanics" | quotes Maudlin's concession that the three claims are not strictly inconsistent | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| Wayne Myrvold | 2020 | "On the Status of Quantum State Realism" | every Born-rule user is bound by the ontological-models framework | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Isaac Newton | tr. Motte, 1729 | *Principia*: Scholium to the Definitions; Corollaries V and VI | absolute space, time and motion; the bucket and the globes; uniform motion of a given space, and equal parallel acceleration, undetectable from within | [4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| Alyssa Ney | 2021 | *The World in the Wave Function* | wavefunction realism | [2.3](lessons/02-03-many-worlds-branching.md) |
| Emmy Noether | 1918 | "Invariante Variationsprobleme" | continuous symmetry yields conservation; local symmetry yields identities | [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| Travis Norsen | 2007 | "Against 'Realism'" | no realism premise in Bell's theorem | [3.2](lessons/03-02-what-bell-rules-out.md) |
| John D. Norton | 2003; 2008 | "Causation as Folk Science"; "The Dome"; "Why constructive relativity fails" | the dome: Newtonian mechanics is indeterministic; a Lipschitz requirement makes a new theory; the dynamical view presupposes spatiotemporal structure | [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| Philip Pearle | 1989; 1994 | CSL; with Squires | continuous spontaneous localization; mass-proportional rates (energy versus proton lifetimes) | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md) |
| Roger Penrose | 1989 | *The Emperor's New Mind* | the low-entropy start fills one part in $10^{10^{123}}$, located in gravitational smoothness; gravity-induced collapse; strong cosmic censorship; the Andromeda case | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [5.1](lessons/05-01-determinism-in-physical-theories.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Henri Poincaré | 1890; 1898; 1902 (tr. 1905); 1908 (tr. 1914) | three-body memoir; "The Measure of Time"; *Science and Hypothesis*; *Science and Method* | recurrence; light's isotropy a postulate; geometry a convention (the heated sphere); chance as small causes with great effects, more than ignorance | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [5.2](lessons/05-02-chaos-and-predictability.md), [5.3](lessons/05-03-reversible-laws-irreversible-world.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| John Polkinghorne | 1988 | *Science and Creation* | chaos as ontological openness, through critical realism | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Oliver Pooley | 2006; 2013 | "Points, Particles, and Structural Realism"; on substantivalism and relationalism | sophisticated substantivalism; denies a deep analogy with quantum particles; the geometrical-dynamical contrast may be effaced in GR | [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [4.5](lessons/04-05-the-hole-argument.md) |
| Oliver Pooley and James Read | 2021 | reply to Weatherall | mathematical practice does not settle what models represent | [4.5](lessons/04-05-the-hole-argument.md) |
| Karl Popper | 1950; 1982 | "Indeterminism in Quantum Physics and in Classical Physics"; *The Open Universe* | from unpredictability to indeterminism | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Huw Price | 1996; 2004; 2010 | *Time's Arrow and Archimedes' Point*; "On the Origins of the Arrow of Time"; "Decisions, Decisions, Decisions" | retrocausal route to realism; the low-entropy past demands explanation (temporal double standard); inflation needs a low-entropy patch; caring about the distribution across successors is no error | [2.4](lessons/02-04-many-worlds-the-probability-problem.md), [3.2](lessons/03-02-what-bell-rules-out.md), [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Matthew Pusey, Jonathan Barrett and Terry Rudolph | 2012 | "On the Reality of the Quantum State" | PBR: given preparation independence, ontological models are ψ-ontic | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| James Read | 2020 | "Explanation, geometry, and conspiracy in relativity theory" | common ground in GR between the geometrical and dynamical views | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Michael Redhead | 1975; 1993; 1995; 2002 | "Symmetry in Intertheory Relations"; on Malament; "More Ado About Nothing"; "The Interpretation of Gauge Symmetry" | surplus structure; questions the equivalence-relation premise; no local measurement confirms $N$ quanta; processes do not depend on what we know; gauge potentials as surplus, puzzlingly fruitful | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md), [6.3](lessons/06-03-particles-fields-or-structure.md) |
| H. Reeh and S. Schlieder | 1961 | Reeh-Schlieder theorem | local operations on the vacuum approximate any state | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Hans Reichenbach | 1928; 1956 | *Philosophie der Raum-Zeit-Lehre*; *The Direction of Time* | the ε rule; universal forces set to zero by coordinative definition; branch systems | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [4.4](lessons/04-04-geometry-convention-or-dynamics.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| C. W. Rietdijk; Hilary Putnam | 1966; 1967 | "Time and Physical Geometry" | with no privileged observers, relative simultaneity makes future events real | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Bryan W. Roberts | 2022 | *Reversing the Arrow of Time* | reconciles Albert and Malament | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| Carlo Rovelli | 1996 | "Relational Quantum Mechanics" | values and states are relative to systems; any system can be an observer | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Carlo Rovelli and David Wolpert | 2024 (with Scharnhorst, 2025) | on Boltzmann brains | the Boltzmann-brain argument undermines itself and conditions arbitrarily on one time | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Laura Ruetsche | 2018 | "Renormalization Group Realism: The Ascent of Pessimism" | effective realism makes the pessimist's possibilities retreat a level, not vanish | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Robert Rynasiewicz | SEP | "Newton's Views on Space, Time, and Motion" | the globes concern how true motions are found | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md) |
| Wesley Salmon | 1977 | one-way speed of light | each one-way scheme uses a convention | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Sahotra Sarkar and John Stachel | 1999 | on Malament's theorem | simultaneity need not be time-reflection invariant | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Simon Saunders | 1998; 2003, 2006; 2010; 2013 | "Time, Quantum Mechanics, and Probability"; on Leibniz's principles and quantum objects; "Chance in the Everett Interpretation"; "Rethinking Newton's Principia" | subjective uncertainty by fission; weak discernibility of fermions; weights as chance; gravitation needs only Newton-Huygens spacetime | [2.4](lessons/02-04-many-worlds-the-probability-problem.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Jonathan Schaffer | 2007 | "Deterministic Chance?" | incompatibilism defended | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| Erwin Schrödinger | 1935 | "Die gegenwärtige Situation in der Quantenmechanik" | the cat, as an argument that the wave function is not the whole story | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md) |
| Dr. Schuetz | 1895 (credited) | via Boltzmann's *Nature* letter | the fluctuation idea | [5.5](lessons/05-05-is-the-past-hypothesis-enough.md) |
| Charles Sebens and Sean Carroll | 2018 | "Self-Locating Uncertainty and the Origin of Probability in Everettian Quantum Mechanics" | the Born rule as the unique rational self-locating credence, from epistemic separability | [2.4](lessons/02-04-many-worlds-the-probability-problem.md) |
| Abner Shimony | 1976; 1978 on; 1984; 1990 | with Horne and Clauser; "peaceful coexistence"; "Controllable and uncontrollable non-locality"; "Desiderata for Modified Quantum Dynamics" | the conspiracy objection; quantum nonlocality coexists with relativity; "passion at a distance"; named PI and OI; the first tails worry | [2.2](lessons/02-02-collapse-theories-grw-and-csl.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| Lawrence Sklar | 1993 | *Physics and Chance* | the measure-zero problem | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| John Stachel | 1980 | the hole argument | the hole argument was no trivial error; named the point-coincidence argument | [4.5](lessons/04-05-the-hole-argument.md) |
| André Stefanov, Nicolas Gisin, Antoine Suarez and Hugo Zbinden | 2002 | "Quantum correlations versus multisimultaneity" | before-before configuration: correlations persist | [3.3](lessons/03-03-nonlocality-and-relativity.md) |
| Howard Stein | 1967; 1968; 1991 | "Newtonian Space-Time"; "On Einstein-Minkowski Space-Time"; "On Relativity Theory and Openness of the Future" | Newton's dynamics needs affine structure, not absolute space; becoming is point-relative | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.3](lessons/04-03-the-conventionality-of-simultaneity.md) |
| Ernst Stueckelberg and André Petermann; Murray Gell-Mann and Francis Low | 1953; 1954 | the renormalization group in QFT | the RG's QFT origins | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Patrick Suppes | 1993 | "The Transcendental Character of Determinism" | deterministic and stochastic descriptions can be observationally equivalent (via Ornstein) | [5.2](lessons/05-02-chaos-and-predictability.md) |
| Patrick Suppes and Mario Zanotti | 1976 | factorizability and perfect correlation | together they imply determinism | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| Paul Teller | 1995 | *An Interpretive Introduction to Quantum Field Theory* | quanta: countable, not labelled; propensities for Rindler quanta | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Gerard 't Hooft | — | — | defends superdeterminism | [3.2](lessons/03-02-what-bell-rules-out.md) |
| Christopher Timpson | 2008 | "Quantum Bayesianism: A Study" | QBism predicts but cannot explain (why sodium conducts) | [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Akira Tonomura and colleagues (Hitachi) | 1986 | shielded Aharonov-Bohm test | half-fringe shift with the field sealed in superconducting niobium | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Boris Tsirelson (Cirel'son) | 1980 | quantum bound | quantum $|S| \le 2\sqrt2$ | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| Jos Uffink | 2007 | on Boltzmann's approach | typicality needs a dynamical assumption | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| William Unruh | 1976 | "Notes on Black Hole Evaporation" | an accelerated detector in the vacuum responds thermally; with Wald (1984), its excitation is an inertial emission | [6.3](lessons/06-03-particles-fields-or-structure.md) |
| Lev Vaidman | 1998 | "On Schizophrenic Experiences of the Neutron" | self-locating uncertainty (the sleeping pill); global branching | [2.3](lessons/02-03-many-worlds-branching.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md), [3.2](lessons/03-02-what-bell-rules-out.md) |
| Antony Valentini | 2005; 2010 | with Westman; cosmological tests | quantum equilibrium is relaxed, so non-equilibrium may survive in the early universe | [2.1](lessons/02-01-bohmian-mechanics.md) |
| Bas van Fraassen | 1982 | "The Charybdis of Realism" | rejects the common-cause demand in local causality | [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md) |
| John von Neumann | 1932 | *Mathematische Grundlagen der Quantenmechanik*, ch. VI | two processes; the boundary movable toward the "abstract ego"; the statistics the same wherever it is drawn | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md) |
| Peter Vranas | 1998 | "Epsilon-Ergodicity and the Success of Equilibrium Statistical Mechanics" | ergodicity off a set of small measure | [5.6](lessons/05-06-probability-in-statistical-mechanics.md) |
| David Wallace | 2003; 2006; 2010; 2011; 2012 | "Everett and Structure"; "Everettian Rationality"; "In Defence of Naiveté"; "How to Prove the Born Rule"; "Taking Particle Physics Seriously"; *The Emergent Multiverse* | branches as emergent real patterns with no exact count; the fallacy of exactness; named the incoherence and quantitative problems; axiomatized the decision-theoretic Born rule; particles emergent; interpret conventional QFT with a cutoff | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md), [2.3](lessons/02-03-many-worlds-branching.md), [2.4](lessons/02-04-many-worlds-the-probability-problem.md), [6.3](lessons/06-03-particles-fields-or-structure.md), [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| David Wallace and Christopher Timpson | 2010 | "Quantum Mechanics on Spacetime I: Spacetime State Realism" | each spacetime region has a quantum state; the price is nonseparability | [2.3](lessons/02-03-many-worlds-branching.md) |
| James Weatherall | 2016; 2018 | on Newton-Huygens spacetime; "Regarding the 'Hole Argument'" | gravity's trajectories restore a standard of acceleration; mathematical practice treats isomorphic models as one | [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md), [4.5](lessons/04-05-the-hole-argument.md) |
| James Weatherall and John Manchak | 2014 | "The geometry of conventionality" | a new force can accommodate a different geometry in Newtonian gravitation but not in relativity | [4.4](lessons/04-04-geometry-convention-or-dynamics.md) |
| Ken Wharton and Nathan Argaman | 2020 | *Reviews of Modern Physics* | locally mediated (retrocausal) models | [3.2](lessons/03-02-what-bell-rules-out.md) |
| Eugene Wigner | 1961; 1967 | "Remarks on the Mind-Body Question"; *Symmetries and Reflections* | consciousness causes collapse (the friend); Einstein reversed the order of laws and invariance principles; called entropy anthropomorphic (per Jaynes) | [1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [6.1](lessons/06-01-symmetries-and-what-they-tell-us.md) |
| Porter Williams | 2019 | "Scientific Realism Made Effective" | effective realism | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| Alastair Wilson | 2020 | *The Nature of Contingency* | Everett branches can do the work of possible worlds | [2.3](lessons/02-03-many-worlds-branching.md) |
| Kenneth Wilson | 1971 | "Renormalization Group and Critical Phenomena" | Wilsonian RG: integrating out scales moves a theory in coupling space | [6.4](lessons/06-04-renormalization-and-effective-field-theory.md) |
| John Winnie | 1970; 1997 | SR for arbitrary ε; "Deterministic Chaos and the Nature of Chance" | slow transport agrees with any ε; finer observation exposes deterministic structure | [4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [5.2](lessons/05-02-chaos-and-predictability.md) |
| Eric Winsberg | 2004 | on the past hypothesis | the subsystem worry | [5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md) |
| Howard Wiseman | 2014 | "The Two Bell's Theorems of John Bell" | 1964 assumes locality and determinism, 1976 local causality alone | [3.2](lessons/03-02-what-bell-rules-out.md) |
| Tai Tsun Wu and Chen Ning Yang | 1975 | loop phases | the source of the holonomy reading, which Healey adopts | [6.2](lessons/06-02-gauge-as-surplus-structure.md) |
| Zhihong Xia (after Painlevé) | 1992 | "The Existence of Noncollision Singularities in Newtonian Systems" | five gravitating bodies can reach infinity in finite time without colliding | [5.1](lessons/05-01-determinism-in-physical-theories.md) |
| Ernst Zermelo | 1896 | *Annalen der Physik* | by Poincaré recurrence, $H$ cannot fall forever | [5.3](lessons/05-03-reversible-laws-irreversible-world.md) |
| Wojciech Zurek | 1981, 1982; 2003; 2005 | pointer states; review; envariance | einselection: the interaction picks the basis; a Born-rule derivation from entanglement | [1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md) |
| Wojciech Zurek and Juan Pablo Paz | 1996 | "Why We Don't Need Quantum Planetary Dynamics" | Hyperion would go non-classical in about 20 years without decoherence | [5.2](lessons/05-02-chaos-and-predictability.md) |


## Assumed, not taught here

The lessons use these without deriving them, or hand them to the course that owns them. Each row states the fact as this course uses it, with the lessons that use it in parentheses, and links the owning lesson. Rows run by owning course: quantum physics, relativity and geometry, classical, dynamical and statistical physics, then philosophy and theology. Physics cited this way is settled; where a sibling states one interpretation in its own voice (a resolution of the arrow, gauge as redundancy, ergodicity as licence), the row says "stated there", and this course treats it as one position.

| Fact | Where it's taught |
|---|---|
| The Born rule; the probability current $j$ and the continuity equation, whose current over density is the Bohmian velocity (1.2, 2.1, 2.4) | [quantum-mechanics 1.2](../quantum-mechanics/lessons/01-02-wavefunction-born-rule.md) |
| Hilbert space and Dirac notation (Scope table; used throughout Modules 1–3) | [quantum-mechanics 1.3](../quantum-mechanics/lessons/01-03-hilbert-space-dirac-notation.md) |
| The collapse postulate ("immediately after obtaining $a_n$, the state becomes $|a_n\rangle$") and "determinate states are eigenstates", which 1.1 names the eigenvalue-eigenstate link (1.1, 1.3, 2.1, 2.2) | [quantum-mechanics 1.5](../quantum-mechanics/lessons/01-05-measurement-expectation-values.md) |
| Spin-½, the Pauli matrices and the Stern–Gerlach magnet; $|{\uparrow}_n\rangle = \cos\tfrac\theta2|{\uparrow}_z\rangle + \sin\tfrac\theta2|{\downarrow}_z\rangle$ (1.3, 2.1, 2.3) | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) |
| Identical particles: symmetric and antisymmetric states, labels as bookkeeping (6.3) | [quantum-mechanics 5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Tensor products and entanglement; the $ad - bc$ product test; the singlet (1.1, 2.3, 3.1) | [quantum-mechanics 5.2](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md) |
| The singlet's correlation $E = -\cos\theta$, the CHSH convention used here, the quantum value $2\sqrt2$; the deterministic proof of the bound (3.1–3.3) | [quantum-mechanics 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md) |
| The density matrix, mixed states and the partial trace $\mathrm{Tr}_E$ (1.2) | [quantum-mechanics 5.4](../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) |
| Bell states; pre-set tables reproduce every same-axis correlation (3.1 Example 1) | [quantum-computing 2.1](../quantum-computing/lessons/02-01-bell-states-and-generating-entanglement.md) |
| Density matrices and the partial trace; the proof of no-signalling (its No-signaling box and P3) (1.2, 3.3) | [quantum-computing 2.2](../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) |
| The no-cloning theorem, from linearity, and why a copier would allow signalling (1.1, 3.3) | [quantum-computing 2.3](../quantum-computing/lessons/02-03-the-no-cloning-theorem.md) |
| The CHSH game, the 16 deterministic strategies (Example 1), the bound for deterministic strategies and mixtures (P2), loopholes and the 2015 tests (3.1–3.3) | [quantum-computing 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) |
| Quantum channels, Kraus form, the phase-flip channel; decoherence as noise (1.2, 2.2) | [quantum-computing 5.1](../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md) |
| Quantum error correction: the record of an error is relocated, not lost (1.2) | [quantum-computing 5.2](../quantum-computing/lessons/05-02-the-three-qubit-codes.md) |
| Coherent states of light: Poisson counts, $a|z\rangle = z|z\rangle$ (6.3 Example 2) | [photonics-quantum-optics 3.3](../photonics-quantum-optics/lessons/03-03-coherent-states.md) |
| Entangled-photon Bell tests and their loopholes, as experimental physics (3.1, 3.2) | [photonics-quantum-optics 4.4](../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md) |
| Why relativity and quantum mechanics force fields; the Compton bound on localization (6.3) | [qft 1.1](../qft/lessons/01-01-why-qm-relativity-forces-fields.md) |
| Noether's theorem for fields (6.1) | [qft 1.3](../qft/lessons/01-03-symmetries-noether-for-fields.md) |
| Creation and annihilation operators, Fock space, the number operator, in the normalization $[a_{\mathbf p}, a_{\mathbf q}^\dagger] = (2\pi)^3\delta^3(\mathbf p - \mathbf q)$ (6.3) | [qft 2.2](../qft/lessons/02-02-creation-annihilation-fock-space.md) |
| Particles as excitations of the field (6.3) | [qft 2.3](../qft/lessons/02-03-particles-as-excitations-energy-momentum.md) |
| Microcausality, the field version of no-signalling, and the positive-frequency amplitude that leaks outside the light cone (3.3, 6.3) | [qft 2.5](../qft/lessons/02-05-causality-microcausality.md) |
| The interaction picture and the S-matrix, which Haag's theorem undercuts (6.3) | [qft 3.1](../qft/lessons/03-01-interaction-picture-s-matrix.md) |
| Gauge invariance of electromagnetism, $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$; invariance of the field strength (P1); charge as the Noether charge of the global phase symmetry (6.1, 6.2) | [qft 5.1](../qft/lessons/05-01-gauge-invariance-photon.md) |
| Loops, ultraviolet divergences and power counting for non-renormalizable couplings (6.4) | [qft 6.4](../qft/lessons/06-04-loops-uv-divergences.md) |
| Regularization and renormalization; gravity non-renormalizable by power counting (P3) (6.4) | [qft 6.5](../qft/lessons/06-05-regularization-renormalization.md) |
| Running couplings and the renormalization group in QFT; asymptotic freedom (6.4) | [qft 6.6](../qft/lessons/06-06-running-couplings-renormalization-group.md) |
| Parity, $C$, $CP$ and $CPT$; weak $T$-violation, seen directly in $B$ mesons (5.3) | [nuclear-particle-physics 4.3](../nuclear-particle-physics/lessons/04-03-parity-c-cp.md) |
| The weak interaction; Fermi's constant matched to $W$ exchange, $G_F/\sqrt2 = g^2/8M_W^2$ (6.4) | [nuclear-particle-physics 5.1](../nuclear-particle-physics/lessons/05-01-weak-interaction.md) |
| Electroweak theory and the Higgs mechanism, stated there as a vacuum that breaks the gauge symmetry (6.2) | [nuclear-particle-physics 5.2](../nuclear-particle-physics/lessons/05-02-electroweak-higgs.md) |
| The hierarchy problem (6.4) | [nuclear-particle-physics 5.5](../nuclear-particle-physics/lessons/05-05-beyond-standard-model.md) |
| Heisenberg and Ising magnets: symmetric laws with asymmetric states (6.1) | [condensed-matter 5.3](../condensed-matter/lessons/05-03-heisenberg-ising.md) |
| Superconductivity and flux quantization in units $h/2e$ (6.2) | [condensed-matter 5.4](../condensed-matter/lessons/05-04-superconductivity-phenomena.md) |
| The postulates, the relativity of simultaneity, midpoint-flash synchronization, inertial frames; Penrose's walking case (Example 2) (4.2, 4.3, 6.1) | [relativity 1.1](../relativity/lessons/01-01-postulates-simultaneity.md) |
| The Lorentz transformation $t' = \gamma(t - vx/c^2)$ (3.3) | [relativity 1.2](../relativity/lessons/01-02-lorentz-transformations.md) |
| Time dilation, length contraction and the twin paradox (4.4) | [relativity 1.3](../relativity/lessons/01-03-dilation-contraction-paradoxes.md) |
| The interval, light cones and causal structure; frame-dependent order of spacelike events (P3); proper time (3.3, 4.3, 4.4) | [relativity 1.4](../relativity/lessons/01-04-spacetime-interval-causality.md) |
| Noether's theorem for fields (6.1) | [relativity 3.2](../relativity/lessons/03-02-noether-fields.md) |
| Manifolds and tangent spaces; general covariance stated passively (4.5) | [relativity 4.1](../relativity/lessons/04-01-manifolds-tangent-spaces.md) |
| Geodesics and the connection; centrifugal and Coriolis terms among the Christoffel symbols (4.2) | [relativity 4.5](../relativity/lessons/04-05-geodesics.md) |
| The equivalence principle (4.4, 6.1, 6.3) | [relativity 5.1](../relativity/lessons/05-01-equivalence-principle.md) |
| Matter and curved spacetime (Scope table) | [relativity 5.2](../relativity/lessons/05-02-matter-curved-spacetime.md) |
| Einstein's field equations, the constraint count (P1: four free functions), coordinate freedom as passive gauge (4.5, 5.1, 6.1) | [relativity 5.3](../relativity/lessons/05-03-einstein-field-equations.md) |
| Kerr and charged black holes: frame dragging, inner (Cauchy) horizons (4.2, 5.1) | [relativity 6.4](../relativity/lessons/06-04-kerr-charged-holes.md) |
| Black-hole thermodynamics: Bekenstein–Hawking entropy and the Hawking temperature (5.5, 6.3) | [relativity 6.5](../relativity/lessons/06-05-black-hole-thermodynamics.md) |
| Gaussian curvature and the *Theorema Egregium*: curvature measured from inside (4.4) | [differential-geometry 1.4](../differential-geometry/lessons/01-04-gaussian-curvature-theorema-egregium.md) |
| Smooth maps and diffeomorphisms (4.5) | [differential-geometry 2.2](../differential-geometry/lessons/02-02-smooth-maps-diffeomorphisms.md) |
| Vector fields and the pushforward; vectors push forward, functions and covectors pull back (4.5) | [differential-geometry 2.4](../differential-geometry/lessons/02-04-vector-fields-pushforward.md) |
| The exterior derivative; closed and exact forms, $d\theta$ on the punctured plane (6.2) | [differential-geometry 3.3](../differential-geometry/lessons/03-03-exterior-derivative.md) |
| Parallel transport and holonomy; the Foucault pendulum (4.2, 6.2) | [differential-geometry 4.2](../differential-geometry/lessons/04-02-parallel-transport.md) |
| The Lie derivative and Killing vectors (4.5, 6.1) | [differential-geometry 5.3](../differential-geometry/lessons/05-03-lie-derivative-killing-vectors.md) |
| Fibre bundles and connections: the gauge dictionary, potential as connection and field as curvature (6.2) | [differential-geometry 5.4](../differential-geometry/lessons/05-04-fiber-bundles-connections.md) |
| Recombination and the microwave background as a near-perfect blackbody (5.5) | [cosmology 3.1](../cosmology/lessons/03-01-recombination-origin-cmb.md) |
| The horizon and flatness problems (5.5) | [cosmology 4.1](../cosmology/lessons/04-01-horizon-flatness-problems.md) |
| The inflationary mechanism, presented there as the fix (5.5) | [cosmology 4.2](../cosmology/lessons/04-02-inflationary-mechanism.md) |
| Dark energy and the vacuum-energy problem (6.4) | [cosmology 4.4](../cosmology/lessons/04-04-dark-energy-cosmic-acceleration.md) |
| Newton's laws, with the first law "in a reference frame that is itself not accelerating" (4.2) | [mechanics-refresher 1.2](../mechanics-refresher/lessons/01-02-newtons-laws.md) |
| Least action; $L \to L + dF/dt$ as one sense of "gauge" (6.1) | [analytical-mechanics 1.2](../analytical-mechanics/lessons/01-02-least-action-lagrange.md) |
| Generalized coordinates and holonomic constraints, unrelated to holonomy (6.2) | [analytical-mechanics 1.3](../analytical-mechanics/lessons/01-03-generalized-coordinates-constraints.md) |
| Cyclic coordinates and momenta; minimal coupling $\mathbf p \to \mathbf p - q\mathbf A$ (6.2) | [analytical-mechanics 2.1](../analytical-mechanics/lessons/02-01-cyclic-coordinates-momenta.md) |
| Noether's theorem, $I = \sum_i (\partial L/\partial\dot q_i)\eta_i - F$; momentum from translations; the boost as a symmetry and its charge (P3) (4.1, 4.2, 6.1) | [analytical-mechanics 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md) |
| Phase space and Liouville's theorem: volume preservation, Jacobian 1 (5.3, 5.4, 5.6) | [analytical-mechanics 3.2](../analytical-mechanics/lessons/03-02-phase-space-liouville.md) |
| Canonical transformations, which leave the Liouville measure unchanged (5.6) | [analytical-mechanics 3.4](../analytical-mechanics/lessons/03-04-canonical-transformations.md) |
| Action-angle variables and integrable motion on tori (5.6) | [analytical-mechanics 4.2](../analytical-mechanics/lessons/04-02-action-angle-integrability.md) |
| Existence and uniqueness of ODE solutions (stated with a continuous derivative) (5.1) | [ode-refresher 1.1](../ode-refresher/lessons/01-01-odes-solutions-slope-fields.md) |
| Flows on the line; uniqueness forbids reaching a fixed point in finite time (5.1) | [dynamical-systems 1.1](../dynamical-systems/lessons/01-01-flows-on-the-line.md) |
| Conservative and reversible systems; $\dot x = y$, $\dot y = -V'(x)$ is reversible (5.3) | [dynamical-systems 2.1](../dynamical-systems/lessons/02-01-conservative-reversible-systems.md) |
| The pitchfork bifurcation: symmetric laws, asymmetric states (6.1) | [dynamical-systems 3.2](../dynamical-systems/lessons/03-02-pitchfork-symmetry.md) |
| Sensitive dependence; the thousandfold-precision horizon; "determinism is not predictability" (5.2) | [dynamical-systems 4.2](../dynamical-systems/lessons/04-02-sensitive-dependence.md) |
| Lyapunov exponents (5.2) | [dynamical-systems 4.4](../dynamical-systems/lessons/04-04-lyapunov-exponents.md) |
| Symbolic dynamics, the logistic map's digit shift, Birkhoff's theorem for maps, ergodicity (5.2, 5.6) | [dynamical-systems 5.5](../dynamical-systems/lessons/05-05-symbolic-dynamics-ergodicity.md) |
| The Coriolis effect on a rotating Earth (4.2) | [atmospheric-science 4.2](../atmospheric-science/lessons/04-02-coriolis-effect.md) |
| The two-week predictability limit, doubling time, the upscale cascade (5.2) | [atmospheric-science 6.5](../atmospheric-science/lessons/06-05-predictability-two-week-limit.md) |
| Kepler's equation and the eccentric anomaly (6.2's flashback) | [orbital-mechanics 2.4](../orbital-mechanics/lessons/02-04-keplers-equation-eccentric-anomaly.md) |
| The restricted three-body problem, where Poincaré's 1890 work began (5.2) | [orbital-mechanics 4.5](../orbital-mechanics/lessons/04-05-restricted-three-body-lagrange-points.md) |
| Thermodynamic entropy, $\delta Q_{\text{rev}}/T$, and the quasi-static sense of "reversible"; free expansion $\Delta S = R\ln 3$ (Example 1) (5.3, 5.4) | [thermodynamics-physics 2.3](../thermodynamics-physics/lessons/02-03-entropy.md) |
| Stokes flow, the retraceable sense of "reversible" (5.3) | [fluid-dynamics 3.3](../fluid-dynamics/lessons/03-03-stokes-flow.md) |
| From mechanics to statistics; ergodicity unproven; every $f(H)$ stationary (P3); coarse-grained volume almost always grows (5.3, 5.4, 5.6) | [stat-mech 1.1](../stat-mech/lessons/01-01-mechanics-to-statistics.md) |
| Microstates, macrostates and the postulate of equal a priori probability; $2^{-N}$ (5.4, 5.5, 5.6) | [stat-mech 1.2](../stat-mech/lessons/01-02-microstates-macrostates-postulate.md) |
| Microcanonical entropy $S = k_B\ln\Omega$; $\Delta S = Nk\ln 2$ (5.4, 5.5) | [stat-mech 1.3](../stat-mech/lessons/01-03-entropy-microcanonical.md) |
| Critical exponents and universality (6.4) | [stat-mech 5.4](../stat-mech/lessons/05-04-critical-exponents-universality.md) |
| The renormalization group from critical phenomena: block spins, fixed points (6.4) | [stat-mech 5.5](../stat-mech/lessons/05-05-renormalization-group.md) |
| Gibbs entropy and its constancy, maximum entropy, Landauer, and the statistical-plus-boundary-condition account of the arrow, stated there as the resolution (5.3, 5.4, 5.6) | [stat-mech 6.2](../stat-mech/lessons/06-02-entropy-information-arrow.md) |
| Differential entropy, which changes under a change of variables (5.6) | [information-theory 4.1](../information-theory/lessons/04-01-differential-entropy.md) |
| Maximum entropy and statistical mechanics (5.4, 5.6) | [information-theory 4.4](../information-theory/lessons/04-04-maximum-entropy-stat-mech.md) |
| Confirmation as probability raising; the measures $d$, $r$, $l$ (2.4) | [philosophy-of-science 1.3](../philosophy-of-science/lessons/01-03-confirmation-as-probability-raising.md) |
| Popper's falsifiability and the conventionalist stratagem (4.3, 4.4) | [philosophy-of-science 2.1](../philosophy-of-science/lessons/02-01-popper-conjectures-and-refutations.md) |
| Duhem–Quine holism and underdetermination; Newton's $T_0$ against $T_v$ (Example 2) (2.1, 2.2, 2.4, 3.2, 4.1–4.4, 5.2, 6.1) | [philosophy-of-science 2.2](../philosophy-of-science/lessons/02-02-duhem-quine-and-underdetermination.md) |
| Lakatos's research programmes and protective belt (2.2) | [philosophy-of-science 2.5](../philosophy-of-science/lessons/02-05-lakatos-and-feyerabend.md) |
| Frequency against degree of belief (1.3, 5.6) | [philosophy-of-science 3.1](../philosophy-of-science/lessons/03-01-two-schools-of-statistical-inference.md) |
| The deductive-nomological model of explanation (4.4) | [philosophy-of-science 4.1](../philosophy-of-science/lessons/04-01-the-deductive-nomological-model.md) |
| Causal explanation; screening off and Reichenbach's common cause principle (3.1–3.3, 4.4) | [philosophy-of-science 4.2](../philosophy-of-science/lessons/04-02-causal-explanation.md) |
| Unification and non-causal explanation (4.4, 5.5) | [philosophy-of-science 4.3](../philosophy-of-science/lessons/04-03-unification-and-the-pragmatics-of-explanation.md) |
| Laws in the sciences (5.6, 6.1) | [philosophy-of-science 4.4](../philosophy-of-science/lessons/04-04-laws-in-the-sciences.md) |
| Reduction and emergence: weak emergence, multiple realizability, the probabilistic premise thermodynamics needs (1.2, 2.3, 5.3, 5.4, 6.4) | [philosophy-of-science 4.5](../philosophy-of-science/lessons/04-05-reduction-and-emergence.md) |
| Realism and the no-miracles argument (4.5) | [philosophy-of-science 5.1](../philosophy-of-science/lessons/05-01-realism-and-the-no-miracles-argument.md) |
| The pessimistic induction and selective realism, divide et impera (6.4) | [philosophy-of-science 5.2](../philosophy-of-science/lessons/05-02-the-pessimistic-induction-and-selective-realism.md) |
| Structural realism, ontic structural realism in general, the Newman objection, relations without relata (1.3, 4.4, 4.5, 6.2–6.4) | [philosophy-of-science 5.3](../philosophy-of-science/lessons/05-03-structural-realism.md) |
| Constructive empiricism, instrumentalism and Hacking's entity realism (1.3, 6.3) | [philosophy-of-science 5.4](../philosophy-of-science/lessons/05-04-constructive-empiricism-and-entity-realism.md) |
| The closure argument and the brain in a vat (5.5) | [epistemology 3.1](../epistemology/lessons/03-01-the-closure-argument.md) |
| Credences and probabilism (1.3) | [epistemology 5.1](../epistemology/lessons/05-01-credences-and-probabilism.md) |
| Dutch books and accuracy (Scope table) | [epistemology 5.2](../epistemology/lessons/05-02-dutch-books-and-accuracy.md) |
| Conditionalization (1.3) | [epistemology 5.3](../epistemology/lessons/05-03-conditionalization.md) |
| The principle of indifference and its partition dependence (the cube factory); the Principal Principle, in $\mathrm{cr}$, $\Pr$ notation (1.3, 2.4, 5.6) | [epistemology 5.4](../epistemology/lessons/05-04-the-problem-of-priors.md) |
| The vNM theorem; utility unique up to $au + c$, $a > 0$ (2.4) | [decision-theory 1.3](../decision-theory/lessons/01-03-the-vnm-theorem-and-how-utility-is-built.md) |
| What a representation theorem shows; dynamic consistency (2.4) | [decision-theory 1.4](../decision-theory/lessons/01-04-what-a-representation-theorem-shows.md) |
| Savage's framework (2.4) | [decision-theory 2.1](../decision-theory/lessons/02-01-savages-framework.md) |
| Probability from preference (2.4) | [decision-theory 2.2](../decision-theory/lessons/02-02-probability-from-preference.md) |
| Interpersonal comparison: meaningful only if invariant under admissible rescalings (6.1) | [decision-theory 5.2](../decision-theory/lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) |
| Universals and Lewis's natural properties (6.4) | [metaphysics 1.3](../metaphysics/lessons/01-03-universals-the-realists-case.md) |
| Substance, haecceity and bare particulars; the identity of indiscernibles and Black's spheres (4.1, 4.5, 6.3) | [metaphysics 2.1](../metaphysics/lessons/02-01-substance-and-accident.md) |
| Essence and grounding; priority monism (2.3, 4.5) | [metaphysics 2.4](../metaphysics/lessons/02-04-essence-and-grounding.md) |
| Lewis's possible worlds, the incredulous stare, counterpart theory (2.3, 4.5) | [metaphysics 3.2](../metaphysics/lessons/03-02-what-possible-worlds-are.md) |
| Brute facts and the PSR as a live principle; Humean supervenience (4.1, 5.5, 6.2) | [metaphysics 3.3](../metaphysics/lessons/03-03-brute-facts-and-necessary-existence.md) |
| Counterfactual causation and the held-fixed past (3.1–3.3) | [metaphysics 4.2](../metaphysics/lessons/04-02-counterfactual-causation.md) |
| Powers and laws; the best-system account of laws and chance (4.2, 5.1, 5.4–5.6, 6.1) | [metaphysics 4.3](../metaphysics/lessons/04-03-powers-dispositions-and-laws.md) |
| Ordered causal series; "whatever is moved is moved by another" (4.2) | [metaphysics 4.4](../metaphysics/lessons/04-04-ordered-causal-series.md) |
| The A-theory and the B-theory; the presentist's exits from relativity (4.3, 5.3) | [metaphysics 5.1](../metaphysics/lessons/05-01-the-a-theory-and-the-b-theory.md) |
| Presentism, the growing block and eternalism; the relativity objection and its verdict (2.1, 3.3, 4.3) | [metaphysics 5.2](../metaphysics/lessons/05-02-presentism-growing-block-eternalism.md) |
| Coincidence, the ship of Theseus, conventionalism about persistence (4.3, 4.4) | [metaphysics 5.3](../metaphysics/lessons/05-03-coincidence-and-the-ship-of-theseus.md) |
| Endurance, perdurance and stages (4.3) | [metaphysics 5.4](../metaphysics/lessons/05-04-endurance-perdurance-and-stages.md) |
| Determinism and fatalism in words, predictability, the consequence argument, free will (3.1, 3.2, 5.1, 5.2) | [metaphysics 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md) |
| Libertarianism; quantum indeterminism and chaos amplification as the libertarian's opening (Kane) (2.1, 5.1, 5.2) | [metaphysics 6.4](../metaphysics/lessons/06-04-libertarianism-and-its-critics.md) |
| Personal identity and Parfit's fission cases (2.4) | [metaphysics 6.6](../metaphysics/lessons/06-06-personal-identity-over-time.md) |
| Leibniz's system: the PSR, the identity of indiscernibles, the one-sentence static shift (Example 1) (4.1, 4.5, 6.1) | [modern-philosophy 2.3](../modern-philosophy/lessons/02-03-leibniz-sufficient-reason-and-monads.md) |
| Kant on space and time; geometry as synthetic a priori; incongruent counterparts; the map of Helmholtz, Reichenbach and Poincaré (Example 2) (1.3, 4.1, 4.4) | [modern-philosophy 5.2](../modern-philosophy/lessons/05-02-space-and-time-the-transcendental-aesthetic.md) |
| Thought experiments as test rigs (1.1, 5.1) | [philosophical-method 3.3](../philosophical-method/lessons/03-03-thought-experiments.md) |
| Objections and replies; the self-refutation worry for verificationism (4.1) | [philosophical-method 4.1](../philosophical-method/lessons/04-01-objections-and-replies.md) |
| Substance dualism; a mind settling what indeterministic laws leave open (Popper and Eccles) (1.1, 5.1) | [philosophy-of-mind 1.2](../philosophy-of-mind/lessons/01-02-substance-dualism-today.md) |
| Functionalism, which the Everettian needs about observers and worlds (2.1, 2.3) | [philosophy-of-mind 2.2](../philosophy-of-mind/lessons/02-02-functionalism.md) |
| Russellian monism: physics gives only structure (6.3) | [philosophy-of-mind 3.5](../philosophy-of-mind/lessons/03-05-panpsychism-and-russellian-monism.md) |
| Dennett's real patterns, used there for beliefs (1.2, 2.3) | [philosophy-of-mind 4.1](../philosophy-of-mind/lessons/04-01-intentionality-and-folk-psychology.md) |
| Penrose's non-computability argument (2.2) | [philosophy-of-mind 6.1](../philosophy-of-mind/lessons/06-01-computationalism-and-the-turing-test.md) |
| Husserl's lifeworld and *Crisis*: recovering the manifest image (2.2) | [phenomenology-and-personalism 1.4](../phenomenology-and-personalism/lessons/01-04-the-lifeworld-and-the-crisis-of-the-sciences.md) |
| Eternity and divine timelessness (4.3) | [philosophy-of-religion 1.4](../philosophy-of-religion/lessons/01-04-eternity-immutability-and-simplicity.md) |
| Clarke's sufficient-reason argument for God (4.1) | [philosophy-of-religion 2.4](../philosophy-of-religion/lessons/02-04-cosmological-arguments-sufficient-reason.md) |
| The Big Bang in the kalam (Scope table) | [philosophy-of-religion 2.5](../philosophy-of-religion/lessons/02-05-cosmological-arguments-the-kalam.md) |
| Design and fine-tuning (Scope table) | [philosophy-of-religion 3.1](../philosophy-of-religion/lessons/03-01-from-design-to-fine-tuning.md) |
| The cosmological multiverse, observation selection, Sober's objection (2.3, 2.4, 5.5) | [philosophy-of-religion 3.2](../philosophy-of-religion/lessons/03-02-fine-tuning-the-objections.md) |
| Penrose's estimate and Carroll's case against Boltzmann brains, used to weigh theism against naturalism (5.4, 5.5) | [apologetics-foundations 4.3](../apologetics-foundations/lessons/04-03-cosmology-what-a-beginning-would-and-would-not-show.md) |
| Divine action and quantum indeterminacy: which interpretations leave outcomes open (P1), Polkinghorne's chaos proposal (1.1, 2.1–2.3, 5.1, 5.2) | [apologetics-foundations 4.4](../apologetics-foundations/lessons/04-04-divine-action-miracles-and-quantum-indeterminacy.md) |


## Pitfalls

Each is a wrong belief and its correction, one line, grouped by theme. Many are conflations of a settled result with an interpretive claim, or misattributions the lessons correct.

### Trap: The measurement problem

- **"The problem is that measuring disturbs the system."** Classical measurements disturb too; the problem is two laws with no rule for when each applies. *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md))*
- **"A large enough device removes the superposition by itself."** A linear law has no size threshold: the chain lemma holds at every link. *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md))*
- **"The exits are four readings with the same predictions."** Denying linearity (collapse models) changes the physics and is being tested; denying completeness or determinate outcomes leaves the standard predictions intact, and the dispute is over what exists. *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.2](lessons/02-02-collapse-theories-grw-and-csl.md))*
- **"Consciousness causes collapse is von Neumann's thesis."** He made the cut movable and stopped short of explicitly giving consciousness a causal role; Wigner stated the thesis (1961). *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md))*
- **"Schrödinger's cat pictures collapse."** He built it (1935, answering Einstein) as an argument that the wave function is not the whole story, aimed at completeness. *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md))*
- **"The eigenvalue-eigenstate link is a result of quantum mechanics."** It is the textbook view's premise for reading properties off a state; Bohmian mechanics denies it for position. *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md))*
- **"The trilemma is a theorem of logic."** Its symmetry step is not logic; for unequal amplitudes the eigenvalue-eigenstate link does the work. *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md))*

### Trap: Decoherence

- **"Decoherence is collapse."** It suppresses interference in the subsystem while the global superposition survives: collapse removes a term, decoherence relocates the coherence. *([1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md))*
- **"An improper mixture is a proper one, since the matrices match."** They differ in the global state and in joint statistics; only the proper one licenses "one of these, unknown which". *([1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md))*
- **"Picking the basis picks the outcome."** Einselection says which quantity looks definite, not which value obtains. *([1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md))*
- **"Decoherence derives the Born rule."** The diagonal entries are $|\alpha|^2$ and $|\beta|^2$ by construction, and reading $\mathrm{Tr}(\rho A)$ as statistics is the Born rule; derivations are 2.4's subject. *([1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md))*
- **"The overlap is $\gamma$, and it sits in either corner."** It is $\eta = \langle E_\uparrow|E_\downarrow\rangle$; the $(\uparrow,\downarrow)$ entry carries $\eta^*$, the $(\downarrow,\uparrow)$ entry $\eta$. *([1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md))*
- **"Only $\rho$ is real" is a theorem.** The sibling slogans are exact about measurements on the subsystem alone; as claims about the world they decide the proper-improper question, or assume linearity, which GRW denies. *([1.2](lessons/01-02-decoherence-and-what-it-does-not-do.md))*

### Trap: Copenhagen and its heirs

- **"Copenhagen means collapse."** Bohr's complementarity has no physical collapse; the collapse view is von Neumann's and Dirac's, and the single label is Heisenberg's of 1955 (Howard, 2004). *([1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md))*
- **"Complementarity means wave-particle duality."** Bohr's 1928 pair is space-time coordination against causality (conservation of energy and momentum); wave and particle is one illustration. *([1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md))*
- **"The Heisenberg cut is a micro/macro size boundary."** Bohr made its placement a question of convenience, drawn case by case. *([1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md))*
- **"QBism is ψ-epistemic, so PBR refutes it."** PBR's ψ-epistemic models posit ontic states and QBism posits none; it escapes only by rejecting the framework, and Myrvold (2020) argues it cannot. *([1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md))*
- **"Relational quantum mechanics is QBism, or subjective."** RQM has no agents: any system can play observer, and the relative events are real. *([1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md))*
- **"Collapse is in Dirac's 1930 *Principles*."** It appears from the second edition (1935). *([1.3](lessons/01-03-copenhagen-qbism-and-relational-views.md))*

### Trap: Bohmian mechanics

- **"Bell's theorem or Kochen–Specker rules Bohm out."** They rule out local and noncontextual hidden variables, and Bohmian mechanics is neither; the 2022 Nobel press release's line about hidden variables is loose in exactly this way. *([2.1](lessons/02-01-bohmian-mechanics.md), [3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md))*
- **"Deterministic means predictable."** Absolute uncertainty caps what anyone can know at the Born probabilities. *([2.1](lessons/02-01-bohmian-mechanics.md), [5.1](lessons/05-01-determinism-in-physical-theories.md))*
- **"Effective collapse means the wavefunction collapses."** Only a subsystem's conditional wave function jumps; the universal wavefunction keeps every branch, and decoherence keeps branches apart without deleting them. *([2.1](lessons/02-01-bohmian-mechanics.md))*
- **"Probability flows like an incompressible fluid."** The continuity equation says it is conserved; Bohmian velocities bunch and spread, and particles crowd where they slow down. *([2.1](lessons/02-01-bohmian-mechanics.md))*
- **"Bohm denies linearity, since nothing collapses yet pointers point."** The wavefunction always evolves by Schrödinger's equation; Bohm denies completeness, adding positions. *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.1](lessons/02-01-bohmian-mechanics.md))*
- **"A measured momentum is the electron's $mv$."** In hydrogen's real ground state the Bohmian electron is at rest; a momentum measurement produces the velocity it records. *([2.1](lessons/02-01-bohmian-mechanics.md))*

### Trap: Collapse theories

- **"A GRW hit is decoherence under another name."** Both dephase $\rho$, but decoherence leaves the global state a superposition (an improper mixture), while a hit changes the individual state with no interaction; the mixture over which hit occurred is proper. *([2.2](lessons/02-02-collapse-theories-grw-and-csl.md))*
- **"The realist interpretations are empirically equivalent."** GRW alone predicts heating, noise and radiation that standard quantum mechanics does not. *([2.2](lessons/02-02-collapse-theories-grw-and-csl.md))*
- **"A sharper collapse function would abolish tails."** Any compactly supported wave spreads over all space at once under the Schrödinger equation, so bare tails return immediately. *([2.2](lessons/02-02-collapse-theories-grw-and-csl.md))*
- **"The 2026 exclusion refutes collapse theories."** XENONnT excluded white-noise CSL at its originally proposed parameters; the family survives elsewhere in its parameter space. *([2.2](lessons/02-02-collapse-theories-grw-and-csl.md))*
- **"What counts for amplification is how many particles a body has."** It is how many are displaced by more than the localization width between the terms. *([2.2](lessons/02-02-collapse-theories-grw-and-csl.md))*
- **"All presentations use the same Gaussian."** GRW (as the Stanford entry gives it) puts $2a^2$ in the amplitude, Allori and colleagues effectively $4\sigma^2$; the original rate is per particle, mass-proportional versions per nucleon. *([2.2](lessons/02-02-collapse-theories-grw-and-csl.md))*

### Trap: Many-worlds

- **"Many-worlds is the cosmologists' multiverse."** Different origin, role and relation: branches come from applying the Schrödinger equation to everything and answer the measurement problem; keep "universe" for cosmology. *([2.3](lessons/02-03-many-worlds-branching.md))*
- **"Everett branches are Lewis's possible worlds."** Branches are parts of one actual state, share a past, can in principle interfere, and realize only what one evolution produces. *([2.3](lessons/02-03-many-worlds-branching.md))*
- **"Branching creates matter, or decoherence removes the other branches."** One state with conserved norm: branching divides amplitude, and every component remains. *([2.3](lessons/02-03-many-worlds-branching.md))*
- **"A measurement makes a definite number of worlds."** Decoherence fixes no exact count; counting needs a chosen grain. *([2.3](lessons/02-03-many-worlds-branching.md))*
- **"Many-worlds denies completeness."** It keeps completeness and linearity and denies single outcomes. *([1.1](lessons/01-01-the-measurement-problem-as-a-trilemma.md), [2.3](lessons/02-03-many-worlds-branching.md))*
- **"Branch counting is the neutral default."** It is indifference over one partition, which is never neutral, and decoherence does not even fix the partition. *([2.4](lessons/02-04-many-worlds-the-probability-problem.md))*
- **"The Deutsch–Wallace theorem derives probability from quantum mechanics alone."** It is a representation theorem; its normative force is that of its axioms. *([2.4](lessons/02-04-many-worlds-the-probability-problem.md))*
- **"A Born weight is a frequency, a chance or a credence."** It is a feature of the state that each answer argues into one of these; frequencies near it fill most of the weight, not most of the branches. *([2.4](lessons/02-04-many-worlds-the-probability-problem.md))*
- **"Self-locating uncertainty is uncertainty before the measurement."** It exists only between decoherence and looking: "too late", Albert says, for bets made before. *([2.4](lessons/02-04-many-worlds-the-probability-problem.md))*
- **"The incoherence and quantitative problems are Greaves's names."** Wallace named them ("Everettian Rationality", 2003). *([2.4](lessons/02-04-many-worlds-the-probability-problem.md))*

### Trap: Bell's theorem

- **"Bell assumed realism (pre-set values) as a premise, so dropping it saves locality."** Factorizability allows chancy outcomes, and the 1964 paper derived the values from locality and perfect correlation; PI and OI already give the bound, so an indeterministic theory that keeps PI must drop OI. *([3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.2](lessons/03-02-what-bell-rules-out.md))*
- **"Factorizability is no-signalling."** No-signalling constrains marginals averaged over $\lambda$, factorizability probabilities given $\lambda$; quantum mechanics violates the second and respects the first. *([3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md), [3.3](lessons/03-03-nonlocality-and-relativity.md))*
- **"Bell refuted hidden variables."** Bohmian mechanics is a hidden-variable theory that reproduces the quantum statistics; what fails is local causality, given single outcomes and measurement independence. *([3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md))*
- **"Measurement independence is the experimenters' free will."** It needs only that whatever fixes the settings be statistically independent of $\lambda$; freedom is [`metaphysics` 6.1](../metaphysics/lessons/06-01-determinism-and-the-consequence-argument.md)'s question. *([3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md))*
- **"Any failure of factorizability shows nonlocality."** Only relative to a complete $\lambda$: a local coin source fails it on a description that omits the coin. *([3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md))*
- **"The criterion of reality defines reality."** It is a sufficient condition only. *([3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md))*
- **"Every source uses the same $S$."** [`quantum-computing` 2.6](../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) subtracts a different term; state the sign convention before computing. *([3.1](lessons/03-01-epr-and-bells-theorem-the-premises.md))*

### Trap: What the violation rules out

- **"Experiment tells you which of PI and OI fails."** The split is relative to a theory's complete state: the same statistics can respect PI on one theory's $\lambda$ and violate it on another's. *([3.2](lessons/03-02-what-bell-rules-out.md))*
- **"A PI violation means signals."** Not if nobody can know or control $\lambda$ more finely than the quantum statistics allow. *([3.2](lessons/03-02-what-bell-rules-out.md), [3.3](lessons/03-03-nonlocality-and-relativity.md))*
- **"Superdeterminism, retrocausality and many-worlds are loopholes like detection efficiency."** None is an experimental flaw: the locality and detection loopholes were closed together in 2015, measurement independence can be pushed back but never closed, and many-worlds denies a premise of the framing. *([3.2](lessons/03-02-what-bell-rules-out.md))*
- **"Kochen–Specker is Bell's theorem again."** It concerns one system, has no locality premise, and rules out only noncontextual value assignments. *([3.2](lessons/03-02-what-bell-rules-out.md))*
- **"'Local realism' means one thing."** Clauser and Shimony, Mermin, Maudlin and Wiseman each pick out a different conjunct. *([3.2](lessons/03-02-what-bell-rules-out.md))*

### Trap: Nonlocality and relativity

- **"No-signalling shows quantum mechanics is local in relativity's sense."** That equates locality with Maudlin's question (ii); Bohmian mechanics forbids signalling and still needs a preferred foliation. *([3.3](lessons/03-03-nonlocality-and-relativity.md))*
- **"Lorentz-invariant predictions settle question (v)."** Bohm's equilibrium predictions are exactly quantum mechanics' while its laws need a foliation no experiment can find; a setting-dependence needs a direction, an outcome-dependence can live in a symmetric joint law. *([3.3](lessons/03-03-nonlocality-and-relativity.md))*
- **"Measuring A only changes your description of B" is physics.** It is one side's claim: true on QBism and epistemic readings, false on collapse and Bohm. *([3.3](lessons/03-03-nonlocality-and-relativity.md))*
- **"GRW must signal, since linearity protects relativity."** GRW is nonlinear on states and linear on the density matrix, which is what no-signalling needs (Gisin, 1989). *([3.3](lessons/03-03-nonlocality-and-relativity.md))*

### Trap: Leibniz, Clarke and Newton

- **"The kinematic shift is Leibniz's argument."** Clarke raised it (Third Reply §4) and Leibniz turned it, in the Fourth Paper §13, not the Fifth. *([4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md))*
- **"The kinematic shift refutes substantivalism."** At most it tells against space that persists through time, which makes absolute velocity a fact; Galilean spacetime has no absolute velocity and keeps absolute rotation. *([4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md))*
- **"A shift is a change of coordinates."** Renaming the origin is passive and alters no fact on anyone's view; the shift moves the matter while space stays put, an active change only a substantivalist can describe. *([4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md), [4.5](lessons/04-05-the-hole-argument.md))*
- **"The verificationist reading is Leibniz's own label."** It is a twentieth-century label, and fitting it to him is an interpretive claim; §52 itself rests observability on sufficient reason. *([4.1](lessons/04-01-leibniz-and-clarke-the-shift-arguments.md))*
- **"The bucket proves that space is a thing."** It shows at most that rotation is not relative to nearby bodies, Descartes's definition; Galilean spacetime has absolute rotation without absolute place. *([4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md))*
- **"The bucket detects uniform velocity."** It never does: the stages turn on rotation, not on uniform velocity. *([4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md))*
- **"Substantivalism about space and about spacetime are one view."** A Galilean substantivalist believes in spacetime points and a connection while denying that a point of space persists through time. *([4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md))*
- **"Fictitious forces are unreal, so the hollow is a frame artefact."** The surface's shape is the same in every frame; only the centrifugal description depends on the frame. *([4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md))*
- **"Mach stated Mach's principle."** The name is Einstein's (1918); Mach offered a demand without a law. *([4.2](lessons/04-02-newtons-bucket-and-the-structure-inertia-needs.md))*

### Trap: Simultaneity and geometry

- **"Conventionality of simultaneity is the relativity of simultaneity."** The latter is settled physics about frames that each use standard synchrony; conventionality is a further claim about a single frame. *([4.3](lessons/04-03-the-conventionality-of-simultaneity.md))*
- **"A midpoint flash synchronizes without assumptions."** It presupposes $\varepsilon = \tfrac12$. *([4.3](lessons/04-03-the-conventionality-of-simultaneity.md))*
- **"Malament refuted conventionalism, or proved nothing."** He proved a uniqueness theorem whose premises (definability, time-reflection invariance, equivalence relation) are the dispute. *([4.3](lessons/04-03-the-conventionality-of-simultaneity.md))*
- **"Stein's reply rescues presentism."** His becoming is point-relative: no event spacelike to you is present to you. *([4.3](lessons/04-03-the-conventionality-of-simultaneity.md))*
- **"The block universe argument proves determinism."** Its conclusion is fatalism (Savitt's term); no law of motion appears in it. *([4.3](lessons/04-03-the-conventionality-of-simultaneity.md))*
- **"Malament's 1996 particle theorem is his 1977 simultaneity theorem."** Different theorems, different targets. *([4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [6.3](lessons/06-03-particles-fields-or-structure.md))*
- **"Poincaré's sphere shows space is non-Euclidean, and 'convention' means arbitrary."** He expected Euclid to stay the most convenient, and experience guides the choice without forcing it. *([4.4](lessons/04-04-geometry-convention-or-dynamics.md))*
- **"Geometric conventionalism and the conventionality of simultaneity are one thesis."** They concern different structures, the metric and "at the same time"; conventionalism about persistence is a third. *([4.4](lessons/04-04-geometry-convention-or-dynamics.md))*
- **"Poincaré's world is a disk."** It is a heated sphere. *([4.4](lessons/04-04-geometry-convention-or-dynamics.md))*
- **"The dynamical view revives Lorentz's ether."** Brown accepts every prediction of special relativity, with no ether and no preferred frame; the dispute is over explanation. *([4.4](lessons/04-04-geometry-convention-or-dynamics.md))*
- **"Acceleration slows the travelling twin's clock."** By the clock hypothesis a clock's rate depends on speed alone; the twins' worldlines have unequal proper lengths. *([4.4](lessons/04-04-geometry-convention-or-dynamics.md))*

### Trap: The hole argument

- **"The hole argument attacks general covariance as relativity textbooks state it."** That is passive covariance, which any theory can be given (Kretschmann); the argument needs active covariance. *([4.5](lessons/04-05-the-hole-argument.md))*
- **"Its target is Newton's and Clarke's substantivalism about space."** It is substantivalism about spacetime in its manifold form; manifold-plus-metric views are not hit the same way. *([4.5](lessons/04-05-the-hole-argument.md))*
- **"It shows general relativity is indeterministic."** It shows relativity plus manifold substantivalism is; under Leibniz equivalence the development into the hole is unique up to diffeomorphism. Cauchy horizons are another matter. *([4.5](lessons/04-05-the-hole-argument.md), [5.1](lessons/05-01-determinism-in-physical-theories.md))*
- **"The hole is an empty region or a black hole."** It is any region outside which the map is the identity; Einstein's 1913 hole was matter-free, the modern one need not be. *([4.5](lessons/04-05-the-hole-argument.md))*
- **"Metric essentialism is the rival of sophisticated substantivalism."** It is one version of it; the rival framing is metric essentialism against anti-haecceitism. *([4.5](lessons/04-05-the-hole-argument.md))*
- **"Metric essentialism accepts Leibniz equivalence."** It denies literal representation: the redistributed model, read with the points held fixed, is no possible world. *([4.5](lessons/04-05-the-hole-argument.md))*

### Trap: Determinism and chaos

- **"Determinism is predictability."** A deterministic theory can defeat every finite predictor; a puck balanced on a hemisphere is unstable yet determined. *([5.1](lessons/05-01-determinism-in-physical-theories.md), [5.2](lessons/05-02-chaos-and-predictability.md))*
- **"Quantum mechanics is indeterministic" is a fact about the formalism.** It is a fact about an interpretation: the many-worlds state never jumps, Bohm's particles never hesitate. *([5.1](lessons/05-01-determinism-in-physical-theories.md))*
- **"The dome's ball leaves at random, with some unknown chance."** Newtonian theory assigns no probabilities; a uniform rule over departure times cannot be normalized. *([5.1](lessons/05-01-determinism-in-physical-theories.md))*
- **"The dome violates the uniqueness theorem."** The theorem is silent there, since the force is not Lipschitz at the apex; and the first law holds at every instant. *([5.1](lessons/05-01-determinism-in-physical-theories.md))*
- **"The hole and the dome show the same indeterminism."** The hole's alternatives differ in no observable respect and merge under Leibniz equivalence; the dome's differ in where the ball is; a Cauchy horizon's survive Leibniz equivalence. *([5.1](lessons/05-01-determinism-in-physical-theories.md))*
- **"Chaos is randomness in the laws."** Chaotic models pass Earman's test; unpredictability is a fact about finite data, and chancy outcomes can be practically predictable. *([5.2](lessons/05-02-chaos-and-predictability.md))*
- **"Sensitive dependence lets an infinitely small cause make a finite difference in finite time."** In a smooth single-scale system the difference at fixed time shrinks to zero with the cause; Maxwell's 1873 notion fits the dome, or many-scale flows if Lorenz 1969 holds for them. *([5.2](lessons/05-02-chaos-and-predictability.md))*
- **"$1/\lambda$ is the horizon."** It is the Lyapunov time; the horizon multiplies it by $\ln(\Delta/\delta_0)$, and $\lambda$ is an average, so local stretching can be negative. *([5.2](lessons/05-02-chaos-and-predictability.md))*
- **"Quantum chaos means quantum states diverge exponentially."** Unitary evolution keeps them exactly as far apart as they began. *([5.2](lessons/05-02-chaos-and-predictability.md))*

### Trap: Time's arrow

- **"Time-reversal invariant laws mean a world that looks the same backward."** They only allow the backward film; the asymmetry can sit in boundary conditions. *([5.3](lessons/05-03-reversible-laws-irreversible-world.md))*
- **"Weak $T$-violation explains the arrow, or the laws contain none."** It exists ($CP$ violation with $CPT$; seen directly in $B$ mesons, 2012) and is not what makes entropy rise: tiny, rare and unitary. *([5.3](lessons/05-03-reversible-laws-irreversible-world.md))*
- **"The H-theorem derives the second law from mechanics."** It needs the Stosszahlansatz, which carries the asymmetry and fails at some states; what survives is that entropy almost always rises, for states not specially arranged. *([5.3](lessons/05-03-reversible-laws-irreversible-world.md))*
- **"Poincaré recurrence brings every state back exactly."** Almost every state comes back arbitrarily close, and only for volume-preserving flow on a region of finite volume. *([5.3](lessons/05-03-reversible-laws-irreversible-world.md))*
- **"Conserving energy makes a system reversible under velocity reversal."** A charge in a magnetic field conserves kinetic energy and does not retrace its path unless $B$ flips too. *([5.3](lessons/05-03-reversible-laws-irreversible-world.md))*
- **"Reversible means one thing."** Dynamical reversibility is neither a quasi-static process nor a retraceable Stokes flow. *([5.3](lessons/05-03-reversible-laws-irreversible-world.md))*
- **"Gibbs and Boltzmann entropy are the same."** They agree in value only when $\rho$ is flat on one macrostate; $S_G$ of an isolated ensemble never changes while $S_B$ of each member rises. *([5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md))*
- **"Liouville's theorem derives equal a priori probability."** It makes the uniform measure stationary, as every $f(H)$ is: the postulate is consistent with the dynamics, not implied by it. *([5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md))*
- **"The counting proves the second law."** It proves only that equilibrium is big; that other states flow into it is a further dynamical claim, and the rise is typical, not certain. *([5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md))*
- **"Entropy is disorder."** $S_B$ counts phase-space volume at fixed macroscopic variables; whether the biggest macrostate looks messy is a separate fact. *([5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md))*
- **"The Mentaculus is named in *Time and Chance*."** The name comes from Loewer (2012) and Albert (2015), after *A Serious Man* (2009); *Time and Chance* (2000) names the past hypothesis. *([5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md))*
- **"Observation refutes the fluctuation hypothesis."** A fluctuation can produce any present state; the objections concern what it predicts next and its cognitive instability, which is epistemic. *([5.5](lessons/05-05-is-the-past-hypothesis-enough.md))*
- **"Boltzmann's other world is a branch or a multiverse member."** It is a distant region of one universe in one spacetime. *([5.5](lessons/05-05-is-the-past-hypothesis-enough.md))*
- **"The past hypothesis makes the laws of motion time-asymmetric."** The equations stay reversal-invariant; the asymmetry is a constraint at one end of time. *([5.5](lessons/05-05-is-the-past-hypothesis-enough.md))*
- **"Penrose's number is a probability."** It is a ratio of phase-space volumes, odds only on the uniform measure. *([5.5](lessons/05-05-is-the-past-hypothesis-enough.md))*
- **"The early universe was low-entropy because its matter was ordered."** Its matter and radiation were near equilibrium; what was special was gravitational smoothness. *([5.5](lessons/05-05-is-the-past-hypothesis-enough.md))*
- **"Albrecht and Sorbo coined 'Boltzmann brain'."** They say the paradox is "sometimes called" that. *([5.5](lessons/05-05-is-the-past-hypothesis-enough.md))*
- **"The law view of the past hypothesis is Albert's."** 5.5 credits it to Loewer, Goldstein and Chen; Albert named the hypothesis. *([5.5](lessons/05-05-is-the-past-hypothesis-enough.md))*

### Trap: Statistical probability

- **"Birkhoff's theorem says time averages equal phase averages."** It says they exist almost everywhere; equality for every observable is ergodicity, an extra premise. *([5.6](lessons/05-06-probability-in-statistical-mechanics.md))*
- **"Frequency, credence and chance are rival answers, one of them right."** Each owes the others a bridge. *([5.6](lessons/05-06-probability-in-statistical-mechanics.md))*
- **"Determinism makes statistical probabilities subjective."** That is Lewis's incompatibilism, a contested thesis; for Loewer they are objective chances under deterministic laws. *([5.6](lessons/05-06-probability-in-statistical-mechanics.md))*
- **"An irrational rotation on a torus is ergodic on the energy surface."** It fills its torus without leaving it: the KAM objection's point. *([5.6](lessons/05-06-probability-in-statistical-mechanics.md))*
- **"The objection to epistemic readings is about melting ice."** As attested (Redhead, Albert, Loewer) it is boiling kettles; the ice cube is 5.6's own case. *([5.4](lessons/05-04-boltzmann-entropy-and-the-past-hypothesis.md), [5.6](lessons/05-06-probability-in-statistical-mechanics.md))*

### Trap: Symmetry and gauge

- **"A symmetry of the laws and a symmetry of spacetime are one thing."** They are defined over different objects; Newton's laws in Newtonian spacetime have boosts as dynamical, not spacetime, symmetries, and SP1 and SP2 are norms, not theorems. *([6.1](lessons/06-01-symmetries-and-what-they-tell-us.md))*
- **"Charge is the Noether charge of the local gauge symmetry."** It is that of the global phase symmetry; the local symmetry yields identities, by the second theorem, which tie charge conservation to the field equations. *([6.1](lessons/06-01-symmetries-and-what-they-tell-us.md), [6.2](lessons/06-02-gauge-as-surplus-structure.md))*
- **"A symmetry is unobservable."** A boosted subsystem is seen to move against its environment; only a transformation of everything goes unobserved. *([6.1](lessons/06-01-symmetries-and-what-they-tell-us.md))*
- **"Variant, so unreal" is a theorem.** The inference runs through an epistemic premise to "some reason"; mapping solutions to solutions is not enough, as the doubled oscillator shows. *([6.1](lessons/06-01-symmetries-and-what-they-tell-us.md))*
- **"Corollary VI needs constant acceleration."** It asks for equal, parallel accelerative forces, which may vary in time; its symmetry holds only as far as the field is uniform. *([6.1](lessons/06-01-symmetries-and-what-they-tell-us.md))*
- **"The Aharonov–Bohm effect proved $\mathbf A$ real."** It shows that $\mathbf E$ and $\mathbf B$ at points underdescribe electromagnetism; all three of Healey's readings accommodate the shift. *([6.2](lessons/06-02-gauge-as-surplus-structure.md))*
- **"Gauge freedom is simply a redundancy."** That is the surplus reading, one position among several; the potentials realist denies it and pays with the gauge hole. *([6.2](lessons/06-02-gauge-as-surplus-structure.md))*
- **"The Higgs vacuum spontaneously breaks the electroweak gauge symmetry."** Elitzur's theorem forbids a local gauge symmetry to break; the phrase refers to a global remnant in a fixed gauge. *([6.2](lessons/06-02-gauge-as-surplus-structure.md))*
- **"Holonomy has to do with holonomic constraints."** Unrelated; and [`differential-geometry` 4.2](../differential-geometry/lessons/04-02-parallel-transport.md)'s holonomy is a rotation, a $U(1)$ holonomy a phase factor. *([6.2](lessons/06-02-gauge-as-surplus-structure.md))*
- **"Separability and locality are the same condition."** Separability is supervenience on properties at points; locality is the absence of action at a distance. *([6.2](lessons/06-02-gauge-as-surplus-structure.md))*

### Trap: Particles and fields

- **"The Unruh effect is Hawking radiation in flat spacetime."** Nothing loses mass in it: it needs an accelerated detector, while a black hole radiates and shrinks whoever watches. Same formula, different physics. *([6.3](lessons/06-03-particles-fields-or-structure.md))*
- **"The Unruh effect has been observed."** Not directly: a 2019 condensate experiment reproduced its thermal signature as an analogue, and a 2021 reanalysis claims an indication. *([6.3](lessons/06-03-particles-fields-or-structure.md))*
- **"A state with no definite particle number refutes particles."** That is ordinary quantum indefiniteness; the threats are the count's frame-dependence, non-localizability and Haag's theorem. *([6.3](lessons/06-03-particles-fields-or-structure.md))*
- **"The field is what's really localizable, so fields escape."** Only smeared field operators are local; Reeh–Schlieder leaves no local test of what a state contains, and Baker carries Unruh and Haag over to field configurations. *([6.3](lessons/06-03-particles-fields-or-structure.md))*
- **"6.3's Malament theorem is 4.3's."** Different results by one author: 1977 derives simultaneity from causal structure, 1996 rules out localizable relativistic particles. *([4.3](lessons/04-03-the-conventionality-of-simultaneity.md), [6.3](lessons/06-03-particles-fields-or-structure.md))*
- **"$T_U = ha/(c k_B)$."** It is $\hbar a/(2\pi c k_B)$: use $\hbar$, not $h$, and keep the $2\pi$. *([6.3](lessons/06-03-particles-fields-or-structure.md))*

### Trap: Effective field theory

- **"Renormalizable means true or fundamental."** On the Wilsonian view it is what any theory looks like far below its cutoff; Fermi theory and gravity are non-renormalizable and accurate where used. *([6.4](lessons/06-04-renormalization-and-effective-field-theory.md))*
- **"Effective means inconsistent above $\Lambda$."** It claims a domain: QED signals its limit with a Landau pole, while asymptotically free QCD may be consistent at all energies and is effective only in not being the whole story. *([6.4](lessons/06-04-renormalization-and-effective-field-theory.md))*
- **"Irrelevant means unimportant."** It means suppressed at low energies; Fermi's interaction is irrelevant and is the whole of beta decay. Relevance is read toward low energies, opposite to [`qft` 6.6](../qft/lessons/06-06-running-couplings-renormalization-group.md)'s direction of running. *([6.4](lessons/06-04-renormalization-and-effective-field-theory.md))*
- **"Decoupling makes high-energy physics invisible."** Heavy physics shows through a few numbers and faint corrections, and need not fade where a mass is large because a coupling is. *([6.4](lessons/06-04-renormalization-and-effective-field-theory.md))*
- **"EFT naturalness is Lewis's natural properties."** It concerns the size of coefficients in units of the cutoff. *([6.4](lessons/06-04-renormalization-and-effective-field-theory.md))*

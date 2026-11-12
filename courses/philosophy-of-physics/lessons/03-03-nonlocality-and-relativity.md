# Philosophy of Physics · Lesson 3.3: Nonlocality and relativity

> ⏱ ~15 min · Module 3: Bell's theorem and nonlocality · Builds on: [3.2](03-02-what-bell-rules-out.md), [`relativity` 1.4](../../relativity/lessons/01-04-spacetime-interval-causality.md), [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) · Unlocks: [4.3](04-03-the-conventionality-of-simultaneity.md)

## Why this matters

In Delft in 2015, two electron spins 1.3 km apart were measured at spacelike separation: no light-speed signal could carry one lab's setting choice to the other before its outcome was recorded. The Bell inequality still failed ([`quantum-computing` 2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md)). [3.2](03-02-what-bell-rules-out.md) showed that, short of an exit, something at one wing makes a difference at the other. Relativity seems to forbid exactly that. [`quantum-mechanics` 5.3](../../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md) settles it in its Watch out: nothing is sent, whose measurement is "first" is frame-dependent, so read no causal arrow into the correlation. That is one side's answer. This lesson asks what relativity actually forbids, and which interpretations break it.

## The idea

Give Alice and Bob a pair of linked dice that always land on opposite parities. Each die, watched alone, stays fair whatever the far player does with hers. The pattern shows only when the two logs are compared. That is [no-signalling](../reference.md#no-signalling): Alice's statistics do not depend on Bob's choice. [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) proves it (its No-signaling box and P3), and [`qft` 2.5](../../qft/lessons/02-05-causality-microcausality.md) states the field version, microcausality. No-cloning closes the obvious trick: a copier would let Bob read Alice's basis choice ([`quantum-computing` 2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md), worked in its P3).

But no-signalling is about what the statistics let *us* do. It does not say what the theory says happens. On the textbook collapse, Alice's measurement changes the state of Bob's spin instantly. "Instantly" means "at the same time", and for spacelike events relativity gives no frame-independent answer ([`relativity` 1.4](../../relativity/lessons/01-04-spacetime-interval-causality.md), Watch out). So the collapse story owes an answer: along which hypersurface? And even where nobody can use the dependence, one can ask whether it is an influence.

Tim Maudlin split "is quantum nonlocality compatible with relativity?" into several questions. Each interpretation answers them differently, and the pattern of answers is this lesson.

## The argument

**Conventions.** As in [`relativity` 1.2](../../relativity/lessons/01-02-lorentz-transformations.md): a boost at speed $v$ along $+x$ sends $t \mapsto t' = \gamma(t - vx/c^2)$, with $\gamma = 1/\sqrt{1 - v^2/c^2}$. Alice has setting $a$ and outcome $A$, Bob $b$ and $B$; $\lambda$ is the complete state of the common past, as in [3.1](03-01-epr-and-bells-theorem-the-premises.md).

**D1. No-signalling.** For all $A$, $a$, $b$, $b'$: $\sum_B P(A,B\mid a,b) = \sum_B P(A,B\mid a,b')$, and likewise with the roles swapped. *In words:* what Alice sees alone does not depend on what Bob chooses. It is a theorem of quantum mechanics for local operations (Eberhard 1978; Ghirardi, Rimini and Weber 1980; Page 1982). Given measurement independence, it is weaker than [parameter independence](../reference.md#parameter-independence), which conditions on $\lambda$. Bohm violates PI without signalling, because quantum equilibrium keeps anyone from preparing positions more finely than $|\psi|^2$ ([2.1](02-01-bohmian-mechanics.md)); collapse violates [outcome independence](../reference.md#outcome-independence) without signalling, because nobody chooses her outcome. (In field theory, Sorkin's "impossible measurements" (1993) show that microcausality alone does not secure D1 once the textbook update rule is applied to measurements.)

**D2. [Frame-dependent order](../reference.md#frame-dependent-order).** Put Alice's measurement at $(0,0)$ and Bob's at $(\Delta t, \Delta x)$ with $\Delta x > c\,\Delta t > 0$. Then $\Delta t' < 0$ in every frame with $v > v_0 = c^2\Delta t/\Delta x$, and $v_0 < c$ ([`relativity` 1.4](../../relativity/lessons/01-04-spacetime-interval-causality.md) P3). *In words:* for any two spacelike measurements, some legitimate frame puts Bob's first.

**D3. [Maudlin's taxonomy](../reference.md#maudlins-taxonomy)** (*Quantum Non-Locality and Relativity*, 1994; 3rd ed. 2011). Relativity might be read as forbidding (i) matter or energy carried faster than light, (ii) superluminal signals, (iii) superluminal causal influence, (iv) superluminal information transfer, or (v) laws that need spacetime structure beyond the light cones, such as a preferred frame. (v) is Maudlin's own test (1996) of whether a theory is genuinely relativistic. *In words:* "compatible with relativity" is five questions, and a theory can pass some and fail others.

From Bell to the tension:

**P1.** A theory with single outcomes and measurement independence that matches the experiments violates [factorizability](../reference.md#factorizability) ([3.1](03-01-epr-and-bells-theorem-the-premises.md), [3.2](03-02-what-bell-rules-out.md)). *In words:* take no exit, and Bell bites.

**P2.** So, given $\lambda$, Bob's outcome chances depend on something at Alice's wing: her setting (PI fails) or her outcome (OI fails). *In words:* something over there makes a difference here.

**P3.** If that dependence is a process occurring at a time, "at a time" picks out a spacelike hypersurface, and the light cones pick out none (D2). *In words:* "instantly" needs a now, and Minkowski spacetime has no global now.

**∴ C.** Either the theory adds a preferred foliation, failing (v), or its nonlocal dependence is not a process along any hypersurface, or it takes an exit from P1. *In words:* pay in spacetime structure, in the kind of dependence, or in premises.

The positions, by where they pay:

- **[Peaceful coexistence](../reference.md#peaceful-coexistence)** is Abner Shimony's phrase (from 1978). At first it rested on reading outcomes as transitions from potentiality to actuality; in later papers it came to mean simply that the correlations cannot be used to signal. Shimony grew dissatisfied once Bell (1990) persuaded him that what agents can manipulate has no place in fundamental physics.

- **Bohmian mechanics** pays in (v). A particle's velocity depends on the other particles' positions at the same time, so the theory needs a [preferred foliation](../reference.md#preferred-foliation); Berndl, Dürr, Goldstein and Zanghì (1996) showed that trajectory theories cannot keep Born statistics on arbitrary spacelike hyperplanes. Lorentz invariance survives at the level of statistics, and the foliation stays hidden. Dürr, Goldstein, Münch-Berndl and Zanghì (1999) got the foliation from an extra field; Dürr, Goldstein, Norsen, Struyve and Zanghì (2014) proposed that the universal wavefunction fixes it covariantly, which is Lorentz invariant, though they leave open whether that is fully relativistic. Some presentists welcome such a foliation ([`metaphysics` 5.2](../../metaphysics/lessons/05-02-presentism-growing-block-eternalism.md)).

- **[Relativistic collapse](../reference.md#relativistic-collapse).** Gordon Fleming (from 1989) collapses the state on every spacelike hyperplane through the measurement, so states are hyperplane-relative. Roderich Tumulka's relativistic GRW (2006; Dove had independently built one in 1996) drops states from the ontology: the world is [flashes](../reference.md#flash-ontology) ([2.2](02-02-collapse-theories-grw-and-csl.md)), governed by one joint chance law that no foliation enters. It is Lorentz invariant and violates OI. Its costs: it covers a fixed number of non-interacting particles, and, being GRW, it departs testably from quantum mechanics. Tumulka put the choice this way: exact quantum mechanics with a preferred slicing (Bohm), or no slicing and a small deviation from it.

- **Many-worlds** takes the exit: outcomes are not single, so P1 does not bind. Unitary evolution never changes a distant subsystem's reduced state. What remains is nonseparability: the global state is not fixed by local ones ([separability](../reference.md#separability), [6.2](06-02-gauge-as-surplus-structure.md)). Deutsch and Hayden (2000) offered a fully local account of the information flow; Wallace and Timpson (2007) questioned it.

**Where the argument is weakest.** P2's "makes a difference". In an OI-violating theory Bob's chances depend on nothing Alice controls, and the dependence on her outcome is symmetric: conditioning either way gives the same numbers. Shimony called this "passion at a distance" (1984), a correlation built into the joint law rather than an action. The strongest reply: Butterfield (1992) and Berkovitz (1998) argue that on a counterfactual account of causation, failure of factorizability is superluminal causal dependence. The recipe of [`metaphysics` 4.2](../../metaphysics/lessons/04-02-counterfactual-causation.md) adds a snag: it holds "the actual past fixed" until just before the cause, and for spacelike events "before" is frame-relative. Hold fixed the common past light cone and the two outcomes depend on each other; hold fixed one frame's past and the dependence runs one way, chosen by the frame. The passion side concedes a law-like link between distant events with no local ground; the causal side concedes that the dependence has no intrinsic direction and carries no signal. That is the open question of [Bell correlations and causation](../reference.md#bell-correlations-and-causation).

## The picture

![Spacetime diagram with Alice's measurement A at the origin and Bob's B at 1.5 km and 2.0 microseconds; the lab frame's simultaneity line through A passes below B, the line for a frame at 0.4c passes through B, and the line for a frame at 0.8c passes above B](assets/03-03-fig1.svg)

The lab's "now" through A runs below B, so A is first; the frame at $0.4c$ makes them simultaneous; the frame at $0.8c$ tilts its "now" above B, so B is first.

## Worked examples

**Example 1 (clean case: whose collapse?).** Alice measures at $(0,0)$. Bob measures 1.5 km away, 2.0 μs later in the lab. Take $c = 0.300$ km per μs ($3.00 \times 10^8$ m/s). Light covers $c\,\Delta t = 0.60$ km $< 1.5$ km, so the pair is spacelike: $\Delta s^2 = -0.36 + 2.25 = 1.89$ km². By D2, $v_0 = c\,(0.60/1.5) = 0.4c$. In the frame at $0.8c$, $\gamma = 5/3$ and

$$\Delta t' = \tfrac{5}{3}\left(2.0 - 0.8 \times \tfrac{1.5}{0.300}\right)\ \mu\text{s} = \tfrac{5}{3}(2.0 - 4.0)\ \mu\text{s} \approx -3.33\ \mu\text{s}.$$

Bob is first by 3.33 μs. Now run the textbook collapse in both frames on the singlet, with angle $\theta$ between the axes, where $P(s,t) = (1 - st\cos\theta)/4$ for outcomes $s,t = \pm1$ ([3.2](03-02-what-bell-rules-out.md)). Suppose both get $+1$. Lab story: Alice's $+1$ collapses Bob's spin to "down along Alice's axis", so Bob's $+1$ had probability $\sin^2(\theta/2)$. Story at $0.8c$: Bob's $+1$ came first and collapsed Alice's spin, so Alice's $+1$ had probability $\sin^2(\theta/2)$. Both marginals are $1/2$; the joint statistics are identical. The stories disagree only about which measurement changed the other's state, and nothing measurable records which. "The state changes instantly" is not yet a relativistic law.

**Example 2 (hard case: Bohm and flash GRW on the same pair).** In Bohmian mechanics, Bob's particle moves according to where Alice's is "now", with "now" fixed by the foliation. If its leaves are the lab's horizontal lines, Alice's setting shapes Bob's outcome. If they tilt like the red line, the dependence runs the other way. The two foliations give different trajectories and different answers to "whose setting fixed whose outcome", and identical statistics in equilibrium. The fact Bohm needs is real by its own lights and invisible. Flash GRW gives one joint chance law for both flashes; you can condition either way, and the theory never asks which came first. So Bohm with a background foliation fails (v) and flash GRW passes it; both pass (ii).

**Where it strains.** Question (iii). Bohm's dependence is on a setting and directed, so by counterfactual standards it is causal, relative to the foliation. Flash GRW's is on an outcome and undirected. Its defenders say a law fixing joint chances for a pattern of events is all a stochastic theory owes. Critics ask whether a law that correlates distant flashes with no mechanism explains the correlation or merely records it. The taxonomy sorts the theories; it does not decide whether "nonlocal correlation" is causation.

## Watch out

- **You might think** no-signalling shows quantum mechanics is local in relativity's sense, as [`quantum-computing` 2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) puts it ("respects locality exactly"), **but actually** that equates locality with (ii). Bohmian mechanics forbids signalling and still needs a preferred foliation.

- **You might think** Lorentz-invariant predictions settle (v), **but actually** Bohm's equilibrium predictions are exactly quantum mechanics' while its laws need a foliation no experiment can find. What separates it from flash GRW is which half of factorizability fails: Bohm's PI failure needs a direction, while flash GRW's OI failure can live in a symmetric joint law.

- **You might think** [`quantum-mechanics` 5.2](../../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md)'s gloss, that measuring A changes your description of B and nothing at B, is physics, **but actually** it is one side's claim: true on QBism and epistemic readings, false on collapse and Bohm, where Bob's state or particle's velocity changes.

- **You might think** GRW must signal, since [`quantum-computing` 2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md) says linearity protects relativity, **but actually** GRW is nonlinear on states and linear on the density matrix, which is what no-signalling needs. Gisin (1989) showed that generic nonlinear modifications would signal; collapse models sit in the narrow stochastic class that does not.

## One-liner

> Quantum correlations cannot signal, but each realist theory accommodates them differently (Bohm with a hidden foliation, flash GRW with undirected correlations between distant events, many-worlds with a nonseparable state), and whether any of it is superluminal causation is still open.

## Problems

**P1 (🟢)** *(Formal (a)–(b) · Exegetical (c).)* In a "before-before" Bell test, Alice's measurement A is at $(t, x) = (0, 0)$ in the lab and Bob's B is at $(1.0\ \mu\text{s},\ 1.2\ \text{km})$. Take $c = 0.300$ km per μs. Alice's analyzer is at rest in the lab; Bob's moves along $+x$ at $0.5c$.

(a) Show that A and B are spacelike, and find the boost speed $v_0$ above which B precedes A. Show the computation.

(b) Which measurement comes first in the rest frame of Alice's analyzer, and which in the rest frame of Bob's? Show the computation.

(c) Antoine Suarez's "multisimultaneity" model gave the events a real time order fixed by each analyzer's own rest frame, and predicted that in this arrangement the correlations vanish. Stefanov, Gisin, Suarez and Zbinden (2002) found that they did not. What did the result refute, and why does it leave Bohmian mechanics and flash GRW untouched? Two sentences.

**P2 (🟡)** *(Apply to a hard case: Exegetical (a) · Evaluative (b).)* One singlet pair, both spins measured along the same axis at spacelike-separated events.

(a) For Bohmian mechanics, flash GRW and many-worlds, say in one line each whether the theory permits superluminal signalling, whether it needs spacetime structure beyond the light cones, and whether it has a superluminal dependence, and if so of what on what.

(b) Many-worlds answers "no" to every question in Maudlin's taxonomy. Does that make it local? Say what the taxonomy does not ask, and what each side says. 150 words or fewer.

**P3 (🔴)** *(Evaluative.)* Are Bell correlations causal? Take the same-axis singlet with spacelike measurements and the recipe of [`metaphysics` 4.2](../../metaphysics/lessons/04-02-counterfactual-causation.md). Give a verdict for a collapse theory that violates outcome independence, and say whether it changes for Bohmian mechanics. Say which past you hold fixed. 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

(a) Light covers $c\,\Delta t = 0.300 \times 1.0 = 0.30$ km in the time between the events, less than $\Delta x = 1.2$ km, so no light signal links them: $\Delta s^2 = -(0.30)^2 + (1.2)^2 = -0.09 + 1.44 = 1.35$ km² $> 0$, spacelike. Then

$$v_0 = \frac{c^2\Delta t}{\Delta x} = c\,\frac{c\,\Delta t}{\Delta x} = c \times \frac{0.30}{1.2} = 0.25c.$$

(b) Alice's analyzer is at rest in the lab, where $\Delta t = +1.0$ μs: A first. Bob's analyzer moves at $0.5c > v_0$. With $\gamma = 1/\sqrt{1 - 0.25} = 2/\sqrt3 \approx 1.155$,

$$\Delta t' = \gamma\left(\Delta t - \frac{v\,\Delta x}{c^2}\right) = 1.155 \times \left(1.0 - 0.5 \times \frac{1.2}{0.300}\right)\ \mu\text{s} = 1.155 \times (1.0 - 2.0)\ \mu\text{s} \approx -1.15\ \mu\text{s}.$$

So B is first in the rest frame of Bob's analyzer. Each analyzer measures first in its own frame: the before-before arrangement.

**Must hit, strict (a)–(b):** the comparison $c\,\Delta t < \Delta x$ (or $\Delta s^2 > 0$); $v_0 = 0.25c$; $\gamma \approx 1.155$ and a negative $\Delta t'$ in Bob's frame; the reading that each analyzer is first in its own frame.

**Must hit, strict (c):**

- Refuted: the view that the time order that matters for the correlation is fixed separately in each analyzer's rest frame, so that with both "first" neither outcome depends on the other.

- Untouched: Bohmian mechanics and flash GRW both reproduce the quantum predictions, which the experiment confirmed. Bohm's order comes from one foliation that ignores how the analyzers move, and flash GRW's joint law needs no order at all.

**Wrong turns:** putting $v$ on the wrong side of the sign test, so that Bob's frame comes out with A first; reading the result as showing that collapse has no preferred hypersurface, or that Bohm's foliation was ruled out, when every theory that matches quantum mechanics predicted it.

**Model answer (c):** The experiment refuted the claim that each analyzer's rest frame sets the time order relevant to the correlation, since in that arrangement multisimultaneity predicted no correlation and quantum mechanics predicted the usual one, which was observed. Bohm and flash GRW predict exactly the quantum statistics: Bohm's order is set by a single hidden foliation regardless of the analyzers' motion, and flash GRW's joint law never orders the events.

---

**P2** *(Exegetical (a) · Evaluative (b).)*

**Accept (a):** for Bohm, the 2014 proposal that the universal wavefunction fixes the foliation covariantly, if the answer adds that a distinguished foliation is still needed and that its authors leave open whether the theory is fully relativistic.

**Must hit, strict (a):**

- Bohmian mechanics: no signalling in quantum equilibrium; needs a preferred foliation; Bob's particle's motion, hence his outcome, depends on Alice's setting (PI fails), directed by the foliation.

- Flash GRW: no signalling; no extra structure, since its flash law is foliation-independent; Bob's flash is correlated with Alice's outcome (OI fails) with no direction, and nothing depends on her setting.

- Many-worlds: no signalling; no extra structure; no superluminal dependence of anything local, since each wing's reduced state is unaffected by the other.

**Must hit, any verdict (b):**

- Say why the questions get "no": many-worlds denies single outcomes, so P1 does not bind and nothing at Alice's wing settles anything at Bob's.

- Say what the taxonomy does not ask: every question concerns influences, none whether the state of the pair is fixed by the states of its parts. The global state is nonseparable.

- Give each side: the Everettian says relativity constrains dynamics and separability is a different property; the critic says the correlated branches at two places are fixed by a state that is not anywhere, and that Deutsch and Hayden's local account was contested by Wallace and Timpson.

**Wrong turns:** saying many-worlds violates OI or PI, which 3.2 defines only for single-outcome theories; counting nonseparability as signalling; treating "no" on all five questions as settling the verdict without asking about separability.

**Model answer (b), one of several:** Local in the sense the taxonomy measures, and that is a real result: with no single outcomes, nothing at Alice's wing settles anything at Bob's, and unitary dynamics leaves each wing's reduced state alone. But the taxonomy only asks about influences. It never asks whether the pair's state is fixed by the states of its parts, and on many-worlds it is not: the branches that pair Alice's record with Bob's are features of a nonseparable state. The Everettian replies that relativity forbids superluminal action, which this theory lacks, and that separability is a further demand. The critic replies that locality worth having includes separability, and that Deutsch and Hayden's attempt to restore it is contested. Verdict: local in dynamics, holistic in state.

---

**P3** *(Evaluative.)*

**Must hit, any verdict:**

- Say which past is held fixed. Holding fixed the common past light cone (the complete $\lambda$) is the frame-free choice; holding fixed a frame's past makes the direction of any dependence depend on the frame (D2).

- Collapse theory: Bob's outcome does not depend on Alice's setting (PI holds), but the outcomes depend on each other counterfactually: with $\lambda$ fixed, had Alice got $-1$, Bob would have got $+1$, and conversely. The dependence is mutual.

- Bohm: in some runs Bob's outcome depends counterfactually on Alice's setting, one way, relative to the foliation, which is the paradigm of causal dependence on L2.

- What each verdict costs: "causal" means accepting symmetric, undirected causation that carries no signal; "not causal" means accepting a law that correlates distant events with no causal explanation, rejecting Reichenbach's common cause principle ([`philosophy-of-science` 4.2](../../philosophy-of-science/lessons/04-02-causal-explanation.md)).

**Wrong turns:** arguing from no-signalling to "not causal", which answers question (ii), not (iii); running the recipe without saying which past is fixed; treating the Bohm and collapse cases alike.

**Model answer, one of several:** I hold fixed the common past light cone, since a frame's past would let the frame choose the direction. On a collapse theory Alice's setting makes no difference to Bob's chances, but with that past fixed, had Alice got $-1$, Bob would have got $+1$, and the converse holds too. By L2 that is mutual counterfactual dependence. I count it as causation only in a thin, symmetric sense: it has no direction, carries no signal, and is better described as a law correlating two chancy events, Shimony's passion. The cost is giving up the demand that every correlation have a common cause or a causal link. For Bohm the verdict changes. In some runs Bob's outcome depends on Alice's setting, one way, and that is causal dependence by the recipe's own standard, at the price of a foliation nobody can detect.

</details>

## Flashback

**From Lesson [3.1](03-01-epr-and-bells-theorem-the-premises.md) (EPR and Bell's theorem: the premises):** *(Diagnose: Formal (a) · Exegetical (b).)* A lab notebook (invented, written for this problem) records a two-wing test with outcomes $\pm1$, each equally likely at every setting on both sides, and 3.1's convention $S = E(a,b) - E(a,b') + E(a',b) + E(a',b')$:

> $E(a,b) = E(a,b') = E(a',b) = 0.6$ and $E(a',b') = -0.6$, so $S = 0.6 - 0.6 + 0.6 - 0.6 = 0$, well inside $|S| \le 2$. By Fine's theorem, a factorizable model reproduces these data.

(a) Does Fine's theorem license the notebook's last sentence? Settle it by computation. Show the computation.

(b) Name the notebook's error, and say what [Fine's theorem](../reference.md#fines-theorem) concludes from these data and what it leaves open about 3.1's three premises. Two sentences.

<details>
<summary>Solution</summary>

(a) No. The marginals are setting-independent (all $\tfrac12$), so the theorem applies, and its "Bell inequalities" are the whole CHSH family: the minus sign in each of the four places, each combination at most 2 in absolute value.

| minus sign on | combination | value |
|---|---|---|
| $(a,b')$, 3.1's $S$ | $0.6 - 0.6 + 0.6 + (-0.6)$ | $0$ |
| $(a,b)$ | $-0.6 + 0.6 + 0.6 + (-0.6)$ | $0$ |
| $(a',b)$ | $0.6 + 0.6 - 0.6 + (-0.6)$ | $0$ |
| $(a',b')$ | $0.6 + 0.6 + 0.6 - (-0.6)$ | $2.4$ |

Since $2.4 > 2$, the data violate a CHSH inequality.

**Must hit, strict (a):** all four placements; $2.4 > 2$ with the minus on $(a',b')$; the marginals checked as setting-independent.

**Must hit, strict (b):**

- The error: testing one placement, though which pair carries the minus is a labelling choice.

- Concludes: no joint distribution over $A, A', B, B'$ reproduces the pair statistics, so no deterministic or factorizable model with setting-independent $p(\lambda)$ does.

- Leaves open: which of single outcomes, local causality and measurement independence fails.

**Wrong turns:** concluding that the data are local because 3.1's $S$ is 0; concluding that local causality fails, which follows only given the other two premises; reading 2.4 as beyond quantum mechanics (Tsirelson's bound is $2\sqrt2 \approx 2.83$, and a singlet gives these correlations at suitable axes).

**Model answer (b):** The notebook checked one placement of the minus sign, though which pair carries it is a labelling choice (relabel Bob's outcomes at $b'$ and its own $S$ is $2.4$), so Fine's equivalence needs all four, and one fails. Fine's theorem then says that no joint distribution over $A, A', B, B'$ reproduces these pair statistics, so no deterministic or factorizable model with setting-independent $p(\lambda)$ does, but not which of single outcomes, local causality and measurement independence to give up.

</details>

## Connections

- **Backward:** Bell's local causality in [3.1](03-01-epr-and-bells-theorem-the-premises.md) is already relativistic, since it conditions on the past light cone; [3.2](03-02-what-bell-rules-out.md) split its failure into PI and OI, and this lesson asked what each failure does to relativity. The physics is [`relativity` 1.4](../../relativity/lessons/01-04-spacetime-interval-causality.md), [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) and [2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md).

- **Forward:** [4.3](04-03-the-conventionality-of-simultaneity.md) asks whether distant simultaneity is a fact at all, the question Bohm's foliation answers yes; [6.3](06-03-particles-fields-or-structure.md) meets relativity's constraints again in quantum field theory.

- **Sideways:** counterfactual causation and its held-fixed past are [`metaphysics` 4.2](../../metaphysics/lessons/04-02-counterfactual-causation.md); screening off and the common cause principle are [`philosophy-of-science` 4.2](../../philosophy-of-science/lessons/04-02-causal-explanation.md); microcausality is [`qft` 2.5](../../qft/lessons/02-05-causality-microcausality.md); the presentist's interest in a preferred foliation is [`metaphysics` 5.2](../../metaphysics/lessons/05-02-presentism-growing-block-eternalism.md).

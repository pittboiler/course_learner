# Systems Biology — Syllabus

> Life Sciences · Tier 2 · ~18 lessons · Prereqs: [molecular-cell-biology](../molecular-cell-biology/syllabus.md), [dynamical-systems](../dynamical-systems/syllabus.md) · Roadmap id: `systems-biology`

## Goal

Learn to treat the cell as a network of interacting parts and to turn that picture into equations you can analyze: reaction kinetics, gene-regulatory circuits, and metabolic maps written as ODEs and constraints, then read for their dynamics — steady states, switches, oscillations, and noise. You come away able to look at a wiring diagram and predict its behavior, and to build a minimal model that explains a phenotype. We deliberately skip statistical-inference machinery (parameter fitting, network reconstruction) and all wet-lab methods — this is the modeling half of the field.

## Dangerous Checklist

When you finish, you can:

- [ ] Write the mass-action ODEs for a set of biochemical reactions and identify their conserved quantities
- [ ] Derive the Michaelis–Menten rate law from mechanism using the quasi-steady-state approximation, and say when it is valid
- [ ] Explain cooperativity and compute the Hill coefficient that makes a response switch-like (ultrasensitive)
- [ ] Model a gene under regulation as an input function and predict its dynamic response to a signal
- [ ] Identify a network motif (autoregulation, coherent/incoherent feed-forward loop) and state the function it performs
- [ ] Find the steady states of a small circuit, linearize, and classify their stability from the Jacobian
- [ ] Show when a two-gene toggle switch is bistable and explain the hysteresis you would measure
- [ ] Explain how negative feedback with integral action produces exact adaptation, robust to parameter change
- [ ] Predict when a circuit oscillates by locating a Hopf bifurcation (e.g. the repressilator)
- [ ] Set up and solve a small flux-balance analysis problem as a linear program at metabolic steady state
- [ ] Distinguish intrinsic from extrinsic noise and compute the Fano factor for a simple gene-expression model
- [ ] Sketch how a Turing instability turns a uniform tissue into a spatial pattern

## Modules

### Module 1: Reaction kinetics & the systems view

From the list-of-parts biology you already know to the systems stance: reactions become rate equations, and enzymes become the nonlinearities that make circuits interesting.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The systems view of the cell | Say why a network of interactions behaves differently from its parts listed separately | Emergence, wiring diagrams, model as hypothesis, separation of timescales |
| 1.2 | Mass action & reaction-rate ODEs | Convert a set of reactions into ODEs and find what is conserved | Law of mass action, rate constants, stoichiometry, conservation laws, equilibrium |
| 1.3 | Enzyme kinetics: Michaelis–Menten | Derive the MM rate law and know when the approximation holds | Enzyme–substrate complex, quasi-steady-state approximation, $V_{max}$, $K_M$ |
| 1.4 | Cooperativity, Hill functions & ultrasensitivity | Turn cooperative binding into a switch-like input–output curve | Hill function, Hill coefficient, cooperativity, ultrasensitivity, EC50 |

**Boss problem 1:** A repressor binds a promoter that has two identical, strongly cooperative operator sites (binding is effectively all-or-nothing). Using mass-action equilibrium, derive the fraction of promoter that is *free* as a function of repressor concentration $R$, show it is a Hill function, state its Hill coefficient, and find the $R$ that gives half-maximal repression. Then contrast the steepness of the response with the single-site ($n=1$) case.

### Module 2: Gene-regulatory networks & motifs

Genes as regulated input–output devices, and the recurring wiring patterns — motifs — that natural transcription networks use far more often than chance. Each motif is a small circuit with a job.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Modeling transcription: input functions & logic | Write a regulated gene's production rate as an input function and compose AND/OR logic | Activator/repressor input functions, promoter logic, production–degradation balance, response time |
| 2.2 | Negative autoregulation | Explain how a gene repressing itself speeds response and steadies expression | Negative autoregulation, response-time speedup, steady-state robustness, noise reduction |
| 2.3 | Positive autoregulation | Show how self-activation slows response and can create memory | Positive autoregulation, bistability preview, slow response, cell memory |
| 2.4 | The feed-forward loop | Trace how a coherent FFL filters brief inputs via sign-sensitive delay | Coherent FFL, AND/OR gating, sign-sensitive delay, persistence detection |
| 2.5 | Incoherent FFLs & temporal programs | Get pulse generation and speedup from an incoherent FFL; sequence genes with single-input modules | Incoherent FFL, pulse/accelerator, single-input module, temporal ordering |

**Boss problem 2:** Take a coherent type-1 feed-forward loop with AND logic: $X$ activates both $Y$ and $Z$, and $Y$ also activates $Z$; $Z$ fires only when *both* $X$ and $Y$ are present. Assume $Y$ accumulates as $\dot{Y}=\beta - \alpha Y$ once $X$ turns on and activates $Z$ once it crosses threshold $K_Y$. Show that a sudden ON step of $X$ produces $Z$ only after a delay, derive that delay in terms of $\beta,\alpha,K_Y$, and show that a sudden OFF step of $X$ shuts $Z$ off immediately. Explain in one sentence why this makes the circuit a persistence detector.

### Module 3: Dynamics, feedback & bistability

Now the payoff of `dynamical-systems`: steady states, stability, bifurcations. The same math that gave you fixed points and limit cycles now explains switches, adaptation, and biological clocks.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Steady states, stability & phase planes in the cell | Find fixed points of a small circuit, linearize, and read stability from the Jacobian | Nullclines, fixed points, Jacobian, eigenvalues, phase-plane analysis |
| 3.2 | Bistability, hysteresis & cell fate: the toggle switch | Show a mutual-repression circuit is bistable and explain the hysteresis loop | Genetic toggle switch, bistability, saddle-node bifurcation, hysteresis, cell-fate decisions |
| 3.3 | Robustness & feedback: integral control & exact adaptation | Explain how integral feedback makes a circuit's output insensitive to parameters | Negative feedback, integral control, exact adaptation, robustness, bacterial chemotaxis |
| 3.4 | Oscillations: the repressilator & the Hopf bifurcation | Predict when a repression cycle oscillates by locating a Hopf bifurcation | Repressilator, delayed negative feedback, limit cycle, Hopf bifurcation, biological clocks |

**Boss problem 3:** The symmetric genetic toggle switch is $\dot{u}=\dfrac{\alpha}{1+v^{2}}-u$, $\dot{v}=\dfrac{\alpha}{1+u^{2}}-v$, with $\alpha>0$. Show there is always a symmetric fixed point $u=v=s$, find the equation it satisfies, compute the Jacobian there, and derive the critical $\alpha$ above which the symmetric state loses stability and the switch becomes bistable. Sketch the nullclines just below and just above that threshold.

### Module 4: Metabolic networks, noise & spatial pattern

Two more layers of the cell — the metabolic map and the fact that molecule counts are small and random — plus tasters of signal transduction, engineered circuits, and self-organizing patterns.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Metabolic networks & stoichiometric modeling | Encode a metabolic map as a stoichiometric matrix and impose steady state | Stoichiometric matrix, metabolic flux, mass balance, steady-state constraint $Sv=0$ |
| 4.2 | Flux-balance analysis | Set up flux balance as a linear program and solve a small one by hand | Flux-balance analysis, objective function, flux bounds, linear programming, optimal flux |
| 4.3 | Stochastic gene expression & the master equation | Distinguish intrinsic from extrinsic noise and quantify a Poissonian gene | Intrinsic vs extrinsic noise, chemical master equation, birth–death process, Fano factor, bursting |
| 4.4 | Signal transduction: cascades & ultrasensitivity | Model a phosphorylation cascade and explain where switch-like signaling comes from | Kinase/phosphatase cycle, MAPK cascade, zero-order ultrasensitivity, signal amplification |
| 4.5 | A taste: synthetic biology & pattern formation | Read an engineered circuit as a designed motif and see how diffusion breaks symmetry | Synthetic biology, engineered oscillators/switches, morphogen gradients, Turing instability |

**Boss problem 4:** Consider a toy metabolism: uptake $v_1:\varnothing\to A$ with $0\le v_1\le 10$; branch $v_2:A\to B$ and $v_3:A\to C$; and outputs $v_4:B\to \text{(product)}$, $v_5:C\to \text{(biomass)}$, all $v_i\ge 0$. Write the steady-state mass balances $Sv=0$ for metabolites $A,B,C$, and maximize biomass flux $v_5$ as a linear program. Solve it by hand: give the optimal flux vector and explain why the uptake bound, not the branch, sets the answer. Then say what changes if you instead maximize $v_4+v_5$.

## Sources of truth

- Uri Alon, *An Introduction to Systems Biology* (2nd ed.) — network motifs, input functions, robustness; the course's default framing and notation.
- Brian Ingalls, *Mathematical Modeling in Systems Biology* — mass action, MM kinetics, and dynamical analysis conventions.
- Strogatz, *Nonlinear Dynamics and Chaos* — bifurcation and phase-plane language, shared with `dynamical-systems`.
- Palsson, *Systems Biology: Constraint-based Reconstruction and Analysis* — stoichiometric modeling and FBA conventions.

# Systems Biology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One claim, four modules of consequences: **behaviour follows from the wiring, not
from the chemistry** — so a positive loop is what lets a cell decide, a negative
loop with delay is what lets it tick, and neither is a property of any molecule.
Cashing that out costs a small pile of standard machinery: mass action and the
stoichiometric matrix, the Hill function, the response time $\ln 2/\alpha$, the
Jacobian, a linear program, and a master equation. Use this card for the exact
form of those, for the thresholds ($\alpha_c = 2$, $g > 2$, $n > 1$,
$E_T \ll K_M + S_0$), and above all for the **notation**, because this course
recycles $\alpha$, $\beta$, $n$, $K$, $S$, $v$, $\theta$ and $F$ harder than any
other in the library.

## Scope discipline

`systems-biology` owns the **quantitative modelling of networks**: input
functions and promoter logic, motifs and their statistics, the dynamics of
circuits, stoichiometric and constraint-based models, stochastic gene expression,
and pattern formation.

It **cedes**:

- mass action's physical justification, and Michaelis–Menten as *enzymology*
  (plus inhibition), to [`biophysics`](../biophysics/syllabus.md),
  [`biochemistry`](../biochemistry/syllabus.md) and
  [`physical-chemistry`](../physical-chemistry/syllabus.md) — this course owns
  only the **approximation** and its validity condition;
- cooperativity and allostery as *molecular mechanism* to `biophysics` and
  `biochemistry` — this course owns the Hill function as an **engineering
  primitive**;
- phase planes, linearization, saddle-node, pitchfork, Hopf and limit cycles to
  [`dynamical-systems`](../dynamical-systems/syllabus.md) — Module 3 applies that
  machinery in the positive quadrant and re-derives none of it;
- the *qualitative* cell-biology account of feedback, bistability and adaptation,
  and of kinase cascades, to
  [`molecular-cell-biology`](../molecular-cell-biology/syllabus.md) — Modules 2–4
  supply the numbers that account cannot have;
- linear programming and duality to
  [`operations-research`](../operations-research/syllabus.md) /
  [`convex-optimization`](../convex-optimization/syllabus.md), integral control to
  [`control-systems`](../control-systems/syllabus.md), and reaction–diffusion to
  [`pdes`](../pdes/syllabus.md).

**A ceded topic is used freely here; it is just cited to its owner.** The
"Assumed, not taught here" table at the bottom is the complete list.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathbf{x}$, $\dot{\mathbf{x}} = \mathbf f(\mathbf x;\mathbf p)$ | the state vector of concentrations, and the model; $\mathbf p$ is the parameters | [1.1](lessons/01-01-systems-view-of-the-cell.md) |
| $J_{ij} = \partial f_i/\partial x_j$ | the **Jacobian**; its sign pattern *is* the wiring diagram | [1.1](lessons/01-01-systems-view-of-the-cell.md) · [3.1](lessons/03-01-steady-states-stability-phase-planes.md) |
| $\varepsilon$ | ratio of the fast timescale to the slow one; the reduction's error is $O(\varepsilon)$ | [1.1](lessons/01-01-systems-view-of-the-cell.md) |
| $S$ (bold or capital) | the **stoichiometric matrix**, species by reactions | [1.2](lessons/01-02-mass-action-rate-odes.md) · [4.1](lessons/04-01-metabolic-networks-stoichiometry.md) |
| $\mathbf v$, $v_j$ | the **flux vector** — reaction rates treated as unknowns in Module 4 | [1.2](lessons/01-02-mass-action-rate-odes.md) · [4.1](lessons/04-01-metabolic-networks-stoichiometry.md) |
| $a_{ij}$ | reactant coefficient — the **mass-action exponent**, not $S_{ij}$ | [1.2](lessons/01-02-mass-action-rate-odes.md) |
| $\mathbf w$ | a left-null-space vector; $\mathbf w^\top\mathbf x$ is a conserved moiety | [1.2](lessons/01-02-mass-action-rate-odes.md) |
| $S$ (italic, Module 1) | free **substrate** concentration; $E$, $C$, $P$ its enzyme, complex, product | [1.3](lessons/01-03-michaelis-menten-qssa.md) |
| $E_T$, $S_T$, $\bar S$ | total enzyme; total substrate moiety; total substrate $S+C$ in the tQSSA | [1.3](lessons/01-03-michaelis-menten-qssa.md) |
| $K_M$, $K_d$, $V_{max}$ | half-saturation constant; dissociation constant; ceiling rate $k_2E_T$ | [1.3](lessons/01-03-michaelis-menten-qssa.md) |
| $n$ (Module 1–3) | the **Hill coefficient** — a fitted steepness, never a count | [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md) |
| $K$ | the half-maximal input: EC50, repression threshold, activation threshold | [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md) |
| $R_v$, $n_{\text{eff}}$ | the 10-to-90 input fold-span $81^{1/n}$; the steepness inferred from it | [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md) |
| $I_T$, $A_T$ | total inhibitor and total activator in a titration switch | [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md) |
| $\beta$, $\beta_m$, $\beta_0$ | production rate (concentration per time); maximal (unrepressed); basal leak | [2.1](lessons/02-01-input-functions-promoter-logic.md) · [2.2](lessons/02-02-negative-autoregulation.md) |
| $\alpha$ (Module 2) | **removal rate** — degradation plus dilution, $\alpha_{\text{deg}}+\alpha_{\text{dil}}$ | [2.1](lessons/02-01-input-functions-promoter-logic.md) |
| $Y_{st} = \beta/\alpha$, $t_{1/2}$ | steady state; time to close half the gap to it | [2.1](lessons/02-01-input-functions-promoter-logic.md) |
| $h_X$, $D$ | fractional occupancy of $X$'s site; the promoter's dynamic range | [2.1](lessons/02-01-input-functions-promoter-logic.md) |
| $\theta$ (Modules 2–3) | fraction of promoter **repressed** (or occupied) at the operating point | [2.2](lessons/02-02-negative-autoregulation.md) · [3.4](lessons/03-04-oscillations-repressilator-hopf.md) |
| $L = n\theta$, $S = 1/(1+L)$ | loop gain; the **sensitivity function** it produces | [2.2](lessons/02-02-negative-autoregulation.md) |
| $\rho$, $\Sigma$, $Z$ | promoter-strength ratio $\beta_m/\beta$; speedup factor; motif $Z$-score | [2.2](lessons/02-02-negative-autoregulation.md) |
| $\phi = f'(Y_{st})/\alpha$ | signed feedback strength; $\alpha_{\text{eff}} = \alpha(1-\phi)$ | [2.3](lessons/02-03-positive-autoregulation.md) |
| $T_{\text{ON}}$, $T_{\text{OFF}}$ | the FFL's delays after an input step on and off | [2.4](lessons/02-04-feed-forward-loop.md) |
| $K_Y$, $Y_{st}$ | the intermediate's threshold on $Z$'s promoter, and its own plateau | [2.4](lessons/02-04-feed-forward-loop.md) |
| $t_m$, $F$ (Module 2), $P$ | pulse peak time; **repression fold**; adaptation precision | [2.5](lessons/02-05-incoherent-ffl-temporal-programs.md) |
| $K_i$, $t_i$ | the $i$-th target's promoter threshold and its switch-on time | [2.5](lessons/02-05-incoherent-ffl-temporal-programs.md) |
| $u$, $v$ (Module 3) | the two scaled protein concentrations of a two-gene circuit | [3.1](lessons/03-01-steady-states-stability-phase-planes.md) |
| $\alpha$ (Module 3) | the **gain** — maximal production relative to decay, after scaling | [3.1](lessons/03-01-steady-states-stability-phase-planes.md) · [3.2](lessons/03-02-bistability-toggle-switch.md) |
| $s$, $g_s$ | the symmetric fixed point, and the off-diagonal Jacobian entry there | [3.2](lessons/03-02-bistability-toggle-switch.md) |
| $m$ (Module 3) | the **integrator's state** (receptor methylation), not mRNA | [3.3](lessons/03-03-integral-control-exact-adaptation.md) |
| $A$, $M$, $V_R$, $k_B B$ | chemotaxis: kinase-active fraction, methylation, CheR rate, CheB activity | [3.3](lessons/03-03-integral-control-exact-adaptation.md) |
| $\tilde\beta$, $g$, $m$ (ring) | scaled production $\beta/(\alpha K)$; loop gain $n\theta$; number of genes in the ring | [3.4](lessons/03-04-oscillations-repressilator-hopf.md) |
| $n$ (Module 4) | **number of reactions** (and $m$ the number of metabolites) | [4.1](lessons/04-01-metabolic-networks-stoichiometry.md) |
| $\mathbf c$, $\mathbf l$, $\mathbf u$ | the FBA objective vector and the lower/upper flux bounds | [4.2](lessons/04-02-flux-balance-analysis.md) |
| $\mathbf n$, $a_j(\mathbf n)$, $\mathbf s_j$ | copy-number state; reaction propensity; jump vector = column $j$ of $S$ | [4.3](lessons/04-03-stochastic-gene-expression.md) |
| $F = \sigma^2/\mu$, $b$, $a$ | the **Fano factor**; burst size $F-1$; burst frequency | [4.3](lessons/04-03-stochastic-gene-expression.md) |
| $\eta_{\text{int}}$, $\eta_{\text{ext}}$, $\eta_{\text{tot}}$ | intrinsic, extrinsic and total noise (as coefficients of variation) | [4.3](lessons/04-03-stochastic-gene-expression.md) |
| $W$, $W^*$, $W_T$, $w^*$ | unmodified and modified protein, the conserved pool, the modified fraction | [4.4](lessons/04-04-signal-transduction-cascades.md) |
| $J_1 = K_1/W_T$, $J_2$ | normalized Michaelis constants — how far each enzyme is from saturation | [4.4](lessons/04-04-signal-transduction-cascades.md) |
| $\theta$ (4.4) | the **input**: the kinase-to-phosphatase ratio $V_1/V_2$ | [4.4](lessons/04-04-signal-transduction-cascades.md) |
| $R(X)$, $p_T$ | **retroactivity**, and the downstream binding-site pool that causes it | [4.5](lessons/04-05-synthetic-biology-pattern-formation.md) |
| $\lambda$ (4.5), $k_c$, $\lambda_c$ | morphogen decay length $\sqrt{D/k}$; critical wavenumber; pattern wavelength | [4.5](lessons/04-05-synthetic-biology-pattern-formation.md) |

### Notation traps

The course reuses eight symbols hard. When a formula looks wrong, check this
list before checking the algebra.

- **$\alpha$ is three different things.** In Module 2 it is the **removal rate**,
  degradation plus dilution, with units of inverse time
  ([2.1](lessons/02-01-input-functions-promoter-logic.md)). In Module 3 it is the
  toggle's **maximal production rate** after nondimensionalization — a
  dimensionless *gain*, with the critical value 2
  ([3.2](lessons/03-02-bistability-toggle-switch.md),
  [3.1](lessons/03-01-steady-states-stability-phase-planes.md)). In
  [4.5](lessons/04-05-synthetic-biology-pattern-formation.md)'s retroactivity
  derivation it is back to a removal rate.
- **$n$ is the Hill coefficient in Modules 1–3 and a reaction count in Module 4.**
  $n$ meets $m$ in two unrelated pairings: in
  [4.1](lessons/04-01-metabolic-networks-stoichiometry.md) $S$ is
  $m \times n$ (metabolites by reactions), and in
  [3.4](lessons/03-04-oscillations-repressilator-hopf.md) $m$ is the number of
  genes in a repression ring while $n$ is still the Hill coefficient. Both appear
  in the sentence "a ring of $m$ genes with Hill coefficient $n$."
- **$S$ is the stoichiometric matrix and also the substrate.**
  [1.3](lessons/01-03-michaelis-menten-qssa.md) sets $\mathbf S$ in bold precisely
  to keep them apart; [2.2](lessons/02-02-negative-autoregulation.md) then uses a
  third $S$ for the **sensitivity function** $1/(1+L)$.
- **$\theta$ is an occupancy in Modules 2–3 and an input ratio in 4.4.** The loop
  gains $L = n\theta$ ([2.2](lessons/02-02-negative-autoregulation.md)) and
  $g = n\theta$ ([3.4](lessons/03-04-oscillations-repressilator-hopf.md)) are the
  *same* quantity — steepness times depth of repression. The
  Goldbeter–Koshland $\theta = V_1/V_2$
  ([4.4](lessons/04-04-signal-transduction-cascades.md)) is unrelated.
- **$F$ is a repression fold in 2.5 and the Fano factor in 4.3.** They never
  appear together, but $F > 1$ means opposite things: strong repression in the
  first, bursty production in the second.
- **$K$ is always a half-maximal input**, but for a lumped $n$-site reaction
  $K_d$ carries units of concentration to the $n$, and $K = K_d^{1/n}$ is the
  concentration-valued half-point
  ([1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md)). Write input
  functions in the $(x/K)^n$ form and the problem disappears.
- **$v$ is a whole flux vector in Module 4 and a single reaction rate in Module 1**
  — and in [3.1](lessons/03-01-steady-states-stability-phase-planes.md) and
  [3.2](lessons/03-02-bistability-toggle-switch.md), $v$ is the second protein of
  a two-gene circuit.
- **$\tau$ is a response time, a relaxation time, and (in $\tau_{\text{cell}}$) a
  generation time.** $t_{1/2} = \ln 2/\alpha$ and $\tau = 1/\alpha$ differ by
  a factor of $0.693$; say which one you mean
  ([2.1](lessons/02-01-input-functions-promoter-logic.md)).
- **$J$ is the Jacobian, a circulating flux, and a normalized Michaelis constant.**
  [3.1](lessons/03-01-steady-states-stability-phase-planes.md) versus
  [1.2](lessons/01-02-mass-action-rate-odes.md)'s ring flux versus
  [4.4](lessons/04-04-signal-transduction-cascades.md)'s $J_1, J_2$.

## Definitions

### Steady state versus equilibrium

Steady state means concentrations are constant while flux still pours through;
equilibrium means every elementary reaction is individually balanced and all net
flux is zero. A living cell is the first and never the second.

$$\text{steady state: } S\mathbf v(\mathbf x^*) = \mathbf 0 \qquad\text{equilibrium: } \mathbf v^*_{\text{net}} = \mathbf 0$$

*Introduced:* [1.2](lessons/01-02-mass-action-rate-odes.md) · used at scale in [4.1](lessons/04-01-metabolic-networks-stoichiometry.md)

### Separation of timescales

If one process is much faster than another, let the fast one sit at its own
equilibrium and treat that equilibrium as a function of the slow variable — an
ODE becomes an algebraic equation and a dimension disappears.

$$\dot x = f(x,y),\quad \varepsilon\dot y = g(x,y) \;\Longrightarrow\; \dot x = f\big(x,h(x)\big), \quad g(x,h(x)) = 0$$

Legitimate (Tikhonov) when $y = h(x)$ is an asymptotically stable fixed point of
the fast subsystem, with error $O(\varepsilon)$, and flatly wrong inside a
boundary layer of duration $O(\varepsilon)$.

*Introduced:* [1.1](lessons/01-01-systems-view-of-the-cell.md)

### Slow manifold

The curve $f(u,v) = 0$ that a fast variable is slaved to: trajectories crash onto
it in a boundary layer and then crawl along it. Where it folds, the crawl runs
off the end and the state jumps — which is a relaxation oscillator.

*Introduced:* [1.1](lessons/01-01-systems-view-of-the-cell.md) · geometry in [3.1](lessons/03-01-steady-states-stability-phase-planes.md) · exploited in [3.4](lessons/03-04-oscillations-repressilator-hopf.md)

### Stoichiometric matrix

The integer, parameter-free half of a reaction network: $S_{ij}$ is the net
number of molecules of species $i$ produced each time reaction $j$ fires. Rows
are species, columns are reactions.

$$S_{ij} = b_{ij} - a_{ij}, \qquad \dot{\mathbf x} = S\,\mathbf v(\mathbf x)$$

*Introduced:* [1.2](lessons/01-02-mass-action-rate-odes.md)

### Conservation law

Any weighted sum of species that no reaction changes stays constant forever — and
the proof never touches the kinetics, so it holds for mass action, Hill functions
and rate laws nobody has written yet.

$$\mathbf w^\top S = \mathbf 0^\top \;\Longrightarrow\; \mathbf w^\top \mathbf x(t) = \text{constant}$$

*Introduced:* [1.2](lessons/01-02-mass-action-rate-odes.md)

### Moiety

A conserved quantity with non-negative integer weights — a chemical group passed
around but never made or destroyed: total enzyme $E+C$, total receptor,
$\text{ATP}+\text{ADP}+\text{AMP}$, $\text{NAD}^{+}+\text{NADH}$.

*Introduced:* [1.2](lessons/01-02-mass-action-rate-odes.md) · the load-bearing constraint in [4.1](lessons/04-01-metabolic-networks-stoichiometry.md)

### Exchange reaction

A pseudo-reaction with a single nonzero entry, standing for transport across the
model's boundary. **Exchange reactions destroy conservation laws**, so which
metabolites you declare internal is a modelling choice with consequences.

*Introduced:* [1.2](lessons/01-02-mass-action-rate-odes.md) · [4.1](lessons/04-01-metabolic-networks-stoichiometry.md)

### Quasi-steady-state approximation

Setting a fast species' derivative to zero — not because it is constant, but
because it has been **slaved**: it has no dynamics of its own left, only an
instantaneous function of the slow variable.

$$\dot C \approx 0 \;\Longrightarrow\; C^*(S) = \frac{E_T S}{K_M + S}$$

*Introduced:* [1.3](lessons/01-03-michaelis-menten-qssa.md)

### Segel–Slemrod condition

The QSSA is valid exactly when the enzyme cannot sequester an appreciable
fraction of the substrate. Weaker than the textbook $E_T \ll S_0$, and it is the
one that correctly refuses when enzyme and substrate are comparable.

$$\frac{E_T}{K_M + S_0} \ll 1$$

*Introduced:* [1.3](lessons/01-03-michaelis-menten-qssa.md)

### Rapid equilibrium

The *other* route to the same hyperbola: assume binding equilibrates fast
compared with catalysis ($k_{-1} \gg k_2$), so the half-saturation constant is
$K_d$ rather than $K_M$. Identical functional form, different constant — which is
why a good hyperbolic fit identifies nothing.

*Introduced:* [1.3](lessons/01-03-michaelis-menten-qssa.md)

### Hill function

The generic sigmoidal input–output curve, obtained by pretending $n$ ligands bind
all-or-nothing. Half-maximal at $x = K$ whatever $n$ is.

$$f_{\text{act}}(x) = \beta\,\frac{x^n}{K^n+x^n}, \qquad f_{\text{rep}}(x) = \frac{\beta}{1+(x/K)^n}$$

*Introduced:* [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md)

### Ultrasensitivity

A response steeper than a hyperbola, measured as a **fold-change in input**, not
a slope: ultrasensitive means $R_v < 81$, subsensitive means $R_v > 81$.

$$R_v \equiv \frac{x_{90}}{x_{10}} = 81^{1/n}, \qquad n_{\text{eff}} = \frac{\ln 81}{\ln R_v}$$

*Introduced:* [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md)

### Molecular titration

Steepness bought with stoichiometry instead of allostery: a 1:1 inhibitor holds
free activator near zero until its own pool is saturated, then releases it.
**Threshold and sharpness are separately tunable** — the threshold is $I_T$, the
sharpness is $K_d$.

$$A \approx \max(0,\;A_T - I_T), \qquad n_{\text{eff}} \approx \tfrac12\sqrt{I_T/K_d}$$

*Introduced:* [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md)

### Input function

The map from a regulator's concentration to a target gene's production rate.
Writing $f(X(t))$ instead of tracking bound and unbound promoter is licensed by
timescale separation: binding equilibrates in seconds, protein levels move over
tens of minutes.

*Introduced:* [2.1](lessons/02-01-input-functions-promoter-logic.md)

### Response time

The time to close half the gap to the new steady state. Set by the **removal**
rate alone — production sets the destination, never the schedule.

$$t_{1/2} = \frac{\ln 2}{\alpha}$$

*Introduced:* [2.1](lessons/02-01-input-functions-promoter-logic.md)

### Dilution

Growth removes protein first-order, because a growing cell's volume rises
exponentially. For most bacterial proteins it is the *only* removal channel, so
response time is a property of the growth medium as much as of the gene.

$$\alpha_{\text{dil}} = \frac{\ln 2}{\tau_{\text{cell}}}, \qquad \frac{1}{t_{1/2}} = \frac{1}{t_{\text{deg}}} + \frac{1}{t_{\text{dil}}}$$

*Introduced:* [2.1](lessons/02-01-input-functions-promoter-logic.md)

### Promoter logic

AND is a product because two independent events must co-occur; OR is one minus
the probability that neither happened. Both are the $n \to \infty$ corners of a
continuum of graded surfaces, and real promoters interpolate.

*Introduced:* [2.1](lessons/02-01-input-functions-promoter-logic.md)

### Network motif

A subgraph occurring far more often than in randomized networks that preserve
every node's in- and out-degree. Over-representation is evidence of **selection**,
not proof of the function you had in mind.

*Introduced:* [2.2](lessons/02-02-negative-autoregulation.md)

### Loop gain

How strongly production changes when the output rises, measured logarithmically:
steepness times depth of regulation. One number that sets speed, sensitivity,
noise, bistability and oscillation, depending on sign and circuit.

$$L = n\theta, \qquad \theta = \frac{(Y_{st}/K)^n}{1+(Y_{st}/K)^n}$$

*Introduced:* [2.2](lessons/02-02-negative-autoregulation.md) · reappears as $g$ in [3.4](lessons/03-04-oscillations-repressilator-hopf.md)

### Negative autoregulation

A gene repressing its own promoter: run flat out, brake on arrival. Buys a faster
approach and a steady state pinned to a binding constant rather than to a
production rate — the same factor $1+L$ in both places.

*Introduced:* [2.2](lessons/02-02-negative-autoregulation.md)

### Sensitivity function

The fraction of a production disturbance that survives the loop. For the
unregulated gene $L = 0$ and $S = 1$: output tracks production one for one.

$$S \equiv \frac{d\ln Y_{st}}{d\ln \beta_m} = \frac{1}{1+L}$$

*Introduced:* [2.2](lessons/02-02-negative-autoregulation.md)

### Positive autoregulation

Self-activation: slower, larger, noisier, and — if the input function is steep
enough — capable of memory. Requires a basal leak to start at all, since a Hill
function with $n>1$ has $f(0)=0$.

*Introduced:* [2.3](lessons/02-03-positive-autoregulation.md)

### Gain–bandwidth identity

Autoregulation does not change how much a gene can make; it chooses whether to
spend that capacity on amplitude or on speed. The product is fixed by the basal
production rate.

$$Y_{st}\,\alpha_{\text{eff}} = \beta_0, \qquad \alpha_{\text{eff}} = \alpha(1-\phi)$$

*Introduced:* [2.3](lessons/02-03-positive-autoregulation.md)

### Coherence

A feed-forward loop is **coherent** when the direct and indirect paths push the
target the same way, **incoherent** when they fight.

$$\text{coherent} \iff \operatorname{sgn}(X\!\to\!Z) = \operatorname{sgn}(X\!\to\!Y)\cdot\operatorname{sgn}(Y\!\to\!Z)$$

*Introduced:* [2.4](lessons/02-04-feed-forward-loop.md)

### Sign-sensitive delay

The C1-FFL's asymmetry: delayed on the way up (the AND gate waits for the slow
arm), prompt on the way down (the direct arm fails immediately). It is what makes
the circuit a **persistence detector**.

*Introduced:* [2.4](lessons/02-04-feed-forward-loop.md)

### Leaky integrator

What the FFL's slow arm actually is: a first-order low-pass filter feeding a
threshold. So it does not filter on pulse *duration* — a train of sub-threshold
pulses passes if they are close enough together and fails if they are not.

*Introduced:* [2.4](lessons/02-04-feed-forward-loop.md)

### Adaptation precision

The fraction of a pulse that decays away. For an I1-FFL it is a **parameter**, not
a guarantee, with a ceiling of $1 - 1/F$ — which is the whole contrast with
integral control.

$$P = 1 - \frac{Z_{st}}{Z_{\text{peak}}} = 1 - \frac{1}{F\left(1-e^{-\alpha_Z t_m}\right)}$$

*Introduced:* [2.5](lessons/02-05-incoherent-ffl-temporal-programs.md)

### Single-input module

One regulator driving many targets directly, each with its own promoter
threshold. The genes fire in the rank order of their thresholds and shut off in
reverse — **last in, first out** — with no clock anywhere. The schedule is stored
in dissociation constants.

*Introduced:* [2.5](lessons/02-05-incoherent-ffl-temporal-programs.md)

### Nullcline

The curve on which one derivative vanishes. Fixed points are the intersections;
the flow crosses each nullcline in a fixed direction, so the phase portrait is
sketchable without solving anything.

*Introduced:* [3.1](lessons/03-01-steady-states-stability-phase-planes.md)

### Forward invariance of the positive quadrant

Concentrations cannot go negative, and mass-action systems enforce it
automatically: every removal term carries a factor of $x_i$ and vanishes at
$x_i = 0$. A fixed point the algebra reports at a negative concentration is not a
steady state of anything.

$$x_i = 0 \;\Longrightarrow\; f_i(\mathbf x) \ge 0$$

*Introduced:* [3.1](lessons/03-01-steady-states-stability-phase-planes.md)

### Separatrix

The stable manifold of a saddle, dividing the plane into basins of attraction. In
a cell it is a **decision threshold**, and it is written in no molecule — it is a
property of the flow.

*Introduced:* [3.1](lessons/03-01-steady-states-stability-phase-planes.md)

### Cell fate as a basin of attraction

The translation step that Module 3 exists for: a stable node is a committed
state, a saddle is a threshold, a stable spiral is ringing, and a limit cycle is
a clock.

*Introduced:* [3.1](lessons/03-01-steady-states-stability-phase-planes.md)

### Bistability

Two stable steady states separated by an unstable one. Needs **both** enough gain
and enough nonlinearity: with $n = 1$ the nullclines are hyperbolas and the third
crossing does not exist at any parameter value.

*Introduced:* [2.3](lessons/02-03-positive-autoregulation.md) · analysed in [3.2](lessons/03-02-bistability-toggle-switch.md)

### Hysteresis

Two different switching thresholds — one going up, a lower one coming down. **The
only measurement that proves a second stable state exists**; a steep dose–response
curve proves nothing, because ultrasensitivity is single-valued.

*Introduced:* [3.2](lessons/03-02-bistability-toggle-switch.md)

### Pitchfork versus saddle-node

The perfectly symmetric toggle undergoes a **pitchfork** at $\alpha_c = 2$: the
symmetric state survives, loses stability, and emits two branches. Any asymmetry
or any applied input unfolds that into a **pair of saddle-nodes**, where two fixed
points appear from nothing and the pre-existing branch is untouched. Since exact
symmetry is a measure-zero fiction, what you measure is always the saddle-node
pair, and the gap between the two folds is the hysteresis loop.

*Introduced:* [3.2](lessons/03-02-bistability-toggle-switch.md)

### Exact adaptation

The steady-state output returns to precisely its pre-stimulus value, for any
input magnitude and any rate constants. Distinguish from *approximate* adaptation,
where the return is a tuned number.

*Introduced:* [3.3](lessons/03-03-integral-control-exact-adaptation.md)

### Integral feedback

A state variable whose rate of change *is* the error. It can only stop where the
error is zero, so wherever the system settles, it settles on target — and no
property of the plant appears anywhere in that argument.

$$\dot m = -k\,(y - y_0), \quad k \ne 0 \;\Longrightarrow\; y^* = y_0$$

*Introduced:* [3.3](lessons/03-03-integral-control-exact-adaptation.md)

### Robustness is a property of a quantity

Not of a system. In chemotaxis, adaptation **precision** is robust to fifty-fold
changes in protein expression; adaptation **time** and baseline activity are not
and vary severalfold. Always ask "robust in what?"

$$\text{precision lives in } \dot m = 0; \quad \text{time lives in the eigenvalues.}$$

*Introduced:* [3.3](lessons/03-03-integral-control-exact-adaptation.md)

### Integrator windup

The theorem guarantees zero error *if a steady state is reached*. A biological
integrator is bounded — methyl groups on a receptor, molecules in a pool — so a
large enough input drives it to its limit, where it sticks and stops adapting.

*Introduced:* [3.3](lessons/03-03-integral-control-exact-adaptation.md)

### Delay as accumulated first-order lags

An ODE has no explicit delay; the phase lag comes from intermediate steps, each
contributing at most 90 degrees. One lag can never reach the 180 degrees an
oscillation needs — which is why a self-repressing gene settles and a ring of
three does not.

*Introduced:* [3.4](lessons/03-04-oscillations-repressilator-hopf.md)

### Odd ring versus even ring

An odd number of repressions is net negative feedback, destabilizes through a
complex pair, and gives a **clock**. An even number is net positive feedback,
destabilizes through a real eigenvalue, and gives a **switch** — the toggle of
[3.2](lessons/03-02-bistability-toggle-switch.md) is the $m = 2$ member of the
same family.

*Introduced:* [3.4](lessons/03-04-oscillations-repressilator-hopf.md)

### Relaxation oscillator

Biology's other clock design: a bistable switch plus a slow negative-feedback
variable that drives it back and forth across its own hysteresis loop. Sharply
non-sinusoidal, and far more tolerant of parameter sloppiness than a Hopf
oscillator, because the amplitude is set by the two branches rather than by a
balance near a bifurcation. The eukaryotic cell cycle is built this way.

*Introduced:* [3.4](lessons/03-04-oscillations-repressilator-hopf.md)

### Elementary flux mode

The honest definition of "a pathway": an extreme ray of the flux cone
$\{\mathbf v : S\mathbf v = 0,\ \mathbf v \ge 0\}$ — a minimal steady-state route
that cannot be decomposed further. **Pathways live in the cone, not in the
subspace**, so a generic null-space basis vector need not be one.

*Introduced:* [4.1](lessons/04-01-metabolic-networks-stoichiometry.md)

### Biomass reaction

Not a real reaction: a pseudo-reaction draining precursors — amino acids,
nucleotides, lipids, ATP — in the measured proportions of one gram of dry cell
mass, with fractional coefficients. It is the single most consequential empirical
input in a constraint-based model.

*Introduced:* [4.2](lessons/04-02-flux-balance-analysis.md)

### Shadow price

The dual variable of a constraint: how much extra objective one more unit of that
resource would buy. Zero for every slack constraint. **Reading the shadow prices
is usually more informative than reading the fluxes**, because they say what the
cell is limited by.

*Introduced:* [4.2](lessons/04-02-flux-balance-analysis.md)

### Alternate optima

When the objective's gradient is normal to a face of the polytope, the whole face
is optimal and the solver returns one arbitrary vertex of it. **Flux variability
analysis** re-solves for the min and max of each flux at fixed objective; a
reaction with a wide range has not been predicted.

*Introduced:* [4.2](lessons/04-02-flux-balance-analysis.md)

### Chemical master equation

Stop tracking concentrations and track the probability of each integer state.
Exact, and almost never solvable — an infinite coupled linear system, one
equation per lattice point.

$$\frac{\partial P(\mathbf n,t)}{\partial t} = \sum_j\Big[a_j(\mathbf n - \mathbf s_j)P(\mathbf n - \mathbf s_j,t) - a_j(\mathbf n)P(\mathbf n,t)\Big]$$

*Introduced:* [4.3](lessons/04-03-stochastic-gene-expression.md)

### Fano factor

The width of a histogram measured against the Poisson baseline — a **mechanism
report**, not an error bar. $F = 1$ is steady production, $F > 1$ is bursty with
burst size $F-1$, and $F < 1$ requires negative feedback.

$$F \equiv \frac{\sigma^2}{\mu}, \qquad CV = \sqrt{F/\mu}$$

*Introduced:* [4.3](lessons/04-03-stochastic-gene-expression.md) · anticipated as $F = 1/(1-\phi)$ in [2.3](lessons/02-03-positive-autoregulation.md)

### Intrinsic versus extrinsic noise

Intrinsic is the private randomness of this gene in this cell; extrinsic is
everything shared with the rest of the cell — ribosomes, size, cycle phase, free
polymerase. Two identical promoters in two colours separate them geometrically:
**scatter along the diagonal is extrinsic, scatter across it is intrinsic**.

*Introduced:* [4.3](lessons/04-03-stochastic-gene-expression.md)

### Zero-order ultrasensitivity

Saturate both enzymes of a modification cycle and their rates stop depending on
substrate, so there is no self-correction and whichever is faster takes the whole
pool. Monomeric substrate, no cooperativity, and effective Hill coefficients of
10 to 100.

*Introduced:* [4.4](lessons/04-04-signal-transduction-cascades.md)

### Amplification versus ultrasensitivity

Different quantities. Amplification is gain in absolute molecule number;
ultrasensitivity is steepness of the **fractional** response. A cascade can have
one, the other, both or neither.

*Introduced:* [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md) · [4.4](lessons/04-04-signal-transduction-cascades.md)

### Retroactivity

The load a downstream module imposes on the one driving it. It divides the
upstream dynamics by $1+R$ — steady states untouched, every rate scaled — and it
is what makes the electronics abstraction of composable parts leak in a cell.

$$R(X) = \frac{p_T K}{(K+X)^2}, \qquad R_{\max} = \frac{p_T}{4X} \text{ at } K = X$$

*Introduced:* [4.5](lessons/04-05-synthetic-biology-pattern-formation.md)

### French flag

A morphogen gradient read against fixed thresholds, cutting a tissue into
domains. It is [2.5](lessons/02-05-incoherent-ffl-temporal-programs.md)'s
threshold ordering with position in place of time — and the gradient alone
delivers boundaries fuzzy by about a cell, so the sharpening is done downstream.

*Introduced:* [4.5](lessons/04-05-synthetic-biology-pattern-formation.md)

### Turing instability

A uniform steady state that is stable when stirred becomes unstable to a band of
wavenumbers once diffusion is switched on, because the inhibitor outruns the
activator. **Local self-activation plus long-range inhibition**, with the
wavelength set by the molecules and not by the tissue.

*Introduced:* [4.5](lessons/04-05-synthetic-biology-pattern-formation.md)

## Formulas and rules

### Which tool for which question

The course's actual method, stated once. Match the question to the row before
writing anything down.

| Question | Tool | Needs | Gives up | Where |
|---|---|---|---|---|
| What does this small circuit *do* over time? | ODEs, $\dot{\mathbf x} = S\mathbf v(\mathbf x)$ | known parameters, few species | scale | [1.2](lessons/01-02-mass-action-rate-odes.md), Modules 2–3 |
| Is there memory, a clock, a threshold? | phase-plane and bifurcation analysis | two variables after reduction | quantitative transients | [3.1](lessons/03-01-steady-states-stability-phase-planes.md)–[3.4](lessons/03-04-oscillations-repressilator-hopf.md) |
| Which behaviours are *possible* at all? | loop signs in the Jacobian (Thomas's rules) | only the sign pattern | everything quantitative | [1.1](lessons/01-01-systems-view-of-the-cell.md) |
| What can a genome-scale network do? | stoichiometry, $S\mathbf v = 0$ | balanced equations only | dynamics, concentrations | [4.1](lessons/04-01-metabolic-networks-stoichiometry.md) |
| Which flux distribution will it pick? | FBA — bounds plus an objective | a hypothesis about the organism | regulation, time | [4.2](lessons/04-02-flux-balance-analysis.md) |
| Why do identical cells differ? | master equation, Gillespie | copy numbers, propensities | closed-form answers | [4.3](lessons/04-03-stochastic-gene-expression.md) |
| Where does a pattern's length scale come from? | linear stability on a reaction–diffusion PDE | a Jacobian and two diffusivities | what the pattern settles into | [4.5](lessons/04-05-synthetic-biology-pattern-formation.md) |

**The rule of thumb behind the table:** ODEs when parameters are known and the
system is small; stoichiometry plus FBA when parameters are unknown and the
network is large; stochastic simulation when copy numbers are low; phase-plane
analysis when you want qualitative behaviour and are willing to give up numbers.

### Mass action, stoichiometry and conservation

| Object | Form | Note |
|---|---|---|
| Rate law | $v_j(\mathbf x) = k_j \prod_i x_i^{\,a_{ij}}$ | exponent is the **reactant** coefficient $a_{ij}$, never $S_{ij}$ |
| Rate equation | $\dot{\mathbf x} = S\,\mathbf v(\mathbf x)$ | row $i$ is the hand-written ODE for species $i$ |
| Conservation laws | $\#\{\text{independent}\} = m - \operatorname{rank} S$ | left null space $N(S^\top)$; kinetics-free |
| Steady-state fluxes | $\mathbf v^* \in N(S)$ | right null space; the pathways |
| Detailed balance | $\prod k_{\text{fwd}} = \prod k_{\text{rev}}$ around any cycle | an irreversible arrow is a *thermodynamic assumption* |

**Reversible reactions, two conventions:** *split* (two columns, $v \ge 0$) or
*net* (one column, signed $v$). Both give the same ODEs. **Pick one and never mix
them inside one model** — Module 4 needs split, because "irreversible" then
becomes the linear inequality $v_j \ge 0$.

*From* [1.2](lessons/01-02-mass-action-rate-odes.md) · [4.1](lessons/04-01-metabolic-networks-stoichiometry.md)

### Enzyme kinetics and the QSSA

$$v = \frac{V_{max}\,S}{K_M + S}, \qquad V_{max} = k_2 E_T, \qquad K_M = \frac{k_{-1}+k_2}{k_1}$$

| Quantity | Form | Reading |
|---|---|---|
| Fast timescale | $t_C = 1/[k_1(S_0+K_M)]$ | complex relaxation |
| Slow timescale | $t_S = (S_0+K_M)/(k_2E_T)$ | substrate drain |
| Validity | $E_T/(K_M+S_0) \ll 1$ | **sequestration**, not the timescale ratio, is binding |
| $K_M$ versus affinity | $K_M = K_d + k_2/k_1 \ge K_d$ | equality only for an enzyme that never catalyses |
| Total QSSA | $C^* = \dfrac{(E_T{+}K_M{+}\bar S) - \sqrt{(E_T{+}K_M{+}\bar S)^2 - 4E_T\bar S}}{2}$ | accurate over the whole range; costs one square root |

The tQSSA reduces to standard MM when $E_T \ll K_M + \bar S$, and
$\dot{\bar S} = -k_2 C^*$ throughout. **Standard MM applied where it fails
predicts the destruction of its own assumption** — at $E_T = S_0 = 10$ and
$K_M = 2$, it says 83 percent of the substrate sits inside the enzyme while
assuming free substrate is unchanged.

*From* [1.3](lessons/01-03-michaelis-menten-qssa.md)

### Hill functions and where steepness comes from

$$\theta = \frac{x^n}{K^n + x^n}, \qquad K = K_d^{1/n}, \qquad K = \sqrt{x_{10}\,x_{90}}$$

| $n$ | 10-to-90 span $R_v = 81^{1/n}$ | Reading |
|---|---|---|
| 1 | **81** | hyperbolic — Michaelian, the baseline |
| 1.5 | 18.7 | barely better |
| 2 | **9** | genuinely sigmoidal |
| 2.8 | 4.80 | hemoglobin, the textbook cooperative molecule |
| 3 | 4.33 | a usable switch |
| 4 | **3** | a good switch |
| 8 | 1.73 | near step-like |
| 16 | 1.32 | a comparator |

**Local steepness:** the logarithmic gain is $R(x) = d\ln f/d\ln x = n(1-\theta)$
— so the gain is $n$ far below the half-point, $n/2$ at it, and 0 in saturation.
The Hill-plot slope $d\ln[\theta/(1-\theta)]/d\ln x = n$ exactly, at every $x$.

**Four ways to get $n_{\text{eff}} > 1$:** cooperative binding; $m$ independent
required modifications ($n_{\text{eff}} \to m$); molecular titration
($n_{\text{eff}} \approx \frac12\sqrt{I_T/K_d}$); cascade composition (log gains
multiply *exactly*, Hill coefficients only approximately). A fifth,
zero-order ultrasensitivity, is below.

*From* [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md) · [4.4](lessons/04-04-signal-transduction-cascades.md)

### The regulated gene

$$\dot Y = f(X) - \alpha Y \;\Longrightarrow\; Y(t) = \frac{\beta}{\alpha} + \left(Y_0 - \frac{\beta}{\alpha}\right)e^{-\alpha t}$$

$$Y_{st} = \frac{\beta}{\alpha}, \qquad t_{1/2} = \frac{\ln 2}{\alpha}, \qquad t_{90} = \frac{\ln 10}{\alpha} \approx 3.3\,t_{1/2}$$

**$\beta$ and $Y_0$ have both vanished from the timing.** Two corollaries that
look contradictory and are not:

- Approach to *its own* steady state is $\beta$-independent.
- Crossing a **fixed absolute** level $L$ is not: $t = -\frac{1}{\alpha}\ln\!\left(1 - L/Y_{st}\right)$, which is exactly the FFL's $T_{\text{ON}}$.

| Gate | Input function |
|---|---|
| AND | $f = \beta\,h_X h_Y$ |
| OR | $f = \beta\,(h_X + h_Y - h_X h_Y)$ |
| SUM | $f = \beta_X h_X + \beta_Y h_Y$ |

Dynamic range $D = \beta_{\max}/\beta_0$ carries through to protein unchanged,
because $Y_{st} = f/\alpha$ scales both ends by the same $\alpha$. **A measured
dose–response curve is $f(X)/\alpha$, not $f(X)$.**

*From* [2.1](lessons/02-01-input-functions-promoter-logic.md)

### Autoregulation

**Negative (NAR).** Strong-repression limit, with $\rho = \beta_m/(\alpha K)$ the
promoter-strength ratio at matched steady state:

$$t_{1/2}^{\text{NAR}} = -\frac{1}{\alpha}\ln\!\left(1 - \frac{1}{2\rho}\right), \qquad \Sigma \approx 2\rho\ln 2 \;\;(\rho \gg 1)$$

| $\rho$ | $t_{1/2}^{\text{NAR}}$ at $t_{1/2} = 30$ min | speedup $\Sigma$ |
|---|---|---|
| 2 | 12.5 min | 2.4 |
| 5 | 4.6 min | 6.6 |
| 10 | 2.2 min | 13.5 |
| 20 | 1.1 min | 27.4 |

The **local** speedup is bounded: near the steady state the relaxation rate is
$\alpha(1+L)$ with $L = n\theta < n$. Large-signal and small-signal speedups are
different numbers describing different phases of one rise.

Robustness, from the same $L$:

$$S = \frac{1}{1+L}, \qquad Y_{st} = K\,\rho^{1/(n+1)} \text{ in the strong-repression limit}$$

| $n$ | $S = 1/(n+1)$ | output change for a 2-fold change in $\beta_m$ |
|---|---|---|
| 0 | 1 | 100 percent |
| 1 | 0.50 | 41 percent |
| 2 | 0.33 | 26 percent |
| 4 | 0.20 | 15 percent |

**Positive (PAR).** Same algebra, $\phi > 0$:

$$\alpha_{\text{eff}} = \alpha(1-\phi), \qquad t_{1/2} = \frac{\ln 2}{\alpha(1-\phi)}, \qquad Y_{st} = \frac{\beta_0}{\alpha(1-\phi)}, \qquad F = \frac{1}{1-\phi}$$

**Slowdown, size and noise are one number.** NAR has $\phi < 0$ and gets speed,
smallness and sub-Poissonian quiet; PAR has $0 < \phi < 1$ and gets the
opposite; $\phi = 1$ is where the ground gives way. Bistability of a
self-activating gene needs $n > 1$ and enough gain:

$$\beta > \beta_c = \alpha K\,\frac{n}{(n-1)^{(n-1)/n}}: \qquad n{=}2 \to 2.000, \quad n{=}4 \to 1.755, \quad n{=}8 \to 1.457, \quad n \to \infty \to 1$$

*From* [2.2](lessons/02-02-negative-autoregulation.md) · [2.3](lessons/02-03-positive-autoregulation.md)

### Motif statistics

$$Z = \frac{N_{\text{real}} - \langle N_{\text{rand}}\rangle}{\sigma_{\text{rand}}}$$

| Null model | Self-loop probability | Use |
|---|---|---|
| Naive (uniform endpoints) | $1/N$ per edge, so $\langle N\rangle = E/N$ | a first pass only |
| **Degree-preserving** | $\approx k^{\text{out}}k^{\text{in}}/E$ per node | the right one: hubs must stay hubs |

*E. coli*: about 40 self-repressing transcription factors against
$\langle N_{\text{rand}}\rangle = 519/424 = 1.22$, giving $Z \approx 35$; the FFL
appears roughly 40 times against an expectation near 7. **A better null always
shrinks the effect, and a claim that survives only the naive null is not a claim.**

*From* [2.2](lessons/02-02-negative-autoregulation.md) · [2.4](lessons/02-04-feed-forward-loop.md)

### Feed-forward loops

**C1-FFL, AND logic** — the persistence detector:

$$T_{\text{ON}} = -\frac{1}{\alpha_Y}\ln\!\left(1 - \frac{K_Y}{Y_{st}}\right), \qquad T_{\text{OFF}} = 0$$

| $K_Y/Y_{st}$ | $\alpha_Y T_{\text{ON}}$ | in half-lives of $Y$ |
|---|---|---|
| 0.1 | 0.105 | 0.15 |
| 0.5 | 0.693 | 1.00 |
| 0.9 | 2.303 | 3.32 |
| 0.99 | 4.605 | 6.64 |

Requires $K_Y < Y_{st}$ or $Z$ never fires at all, and the delay diverges
logarithmically as the ratio approaches 1 — **long delays sit next to a cliff**.

**C1-FFL, OR logic** — tolerating brief input loss:

$$T_{\text{ON}} = 0, \qquad T_{\text{OFF}} = \frac{1}{\alpha_Y}\ln\!\left(\frac{Y_{st}}{K_Y}\right)$$

**Square-wave input** (ON for $D$, OFF for $G$): peaks obey the affine map
$P_{n+1} = Y_{st}(1-b) + ab\,P_n$ with $b = e^{-\alpha_Y D}$, $a = e^{-\alpha_Y G}$,
so the circuit fires if and only if

$$P^* = \frac{Y_{st}(1-b)}{1-ab} > K_Y$$

**I1-FFL** — pulse, accelerator, approximate adaptation. Peak time $t_m$ is the
*same formula* as $T_{\text{ON}}$; the sign of the $Y \to Z$ edge decides whether
the delay withholds the output or terminates it.

$$Z_{\text{peak}} = Z^{\max}\left(1-e^{-\alpha_Z t_m}\right), \quad Z_{st} = \frac{Z^{\max}}{F}, \quad \text{speedup} = \frac{\ln 2}{-\ln\!\left(1 - \frac{1}{2F}\right)} \approx 2F\ln 2$$

Valid only if $t_{1/2}^{\text{FFL}} < t_m$ — the throttle must close after the
output has passed half its final level.

**Single-input module.** With $X(t) = X_{st}(1-e^{-\alpha_X t})$ and thresholds
$K_1 < \cdots < K_k$:

$$t_i = -\frac{1}{\alpha_X}\ln\!\left(1 - \frac{K_i}{X_{st}}\right), \qquad t_i^{\text{off}} = t_{\text{off}} + \frac{1}{\alpha_X}\ln\frac{X(t_{\text{off}})}{K_i}$$

**Three robustness classes in one circuit:** the *order* is structural (no
parameter change permutes a sorted list); the *timing* degrades smoothly with
$X_{st}$ and $\alpha_X$; the *membership* has a hard cliff at $K_i = X_{st}$.

*From* [2.4](lessons/02-04-feed-forward-loop.md) · [2.5](lessons/02-05-incoherent-ffl-temporal-programs.md)

### Phase-plane analysis in the positive quadrant

The checklist: write the ODEs and use conservation to get to two variables →
nondimensionalize → nullclines → fixed points **inside the positive quadrant
only** → Jacobian → trace–determinant → read the biology.

| Classification | Condition | What the cell is doing |
|---|---|---|
| Stable node | $\operatorname{tr}J<0$, $\det J>0$, $\operatorname{tr}^2 > 4\det$ | a committed state — a cell fate |
| Stable spiral | $\operatorname{tr}J<0$, $\operatorname{tr}^2 < 4\det$ | ringing after a stimulus |
| Saddle | $\det J < 0$ | a **threshold**; its stable manifold is the decision boundary |
| Limit cycle | Hopf: $\operatorname{tr}J = 0$, $\det J > 0$ | a clock |

**Intersection counting:** $n = 1$ gives hyperbolic nullclines and at most one
crossing away from the origin; $n \ge 2$ gives genuine S-shapes and up to three.

**The two-gene theorem.** For $\dot x = f(y)-\alpha_x x$, $\dot y = g(x)-\alpha_y y$
with loop gain $L = f'g'/(\alpha_x\alpha_y)$:

$$\operatorname{tr}J = -(\alpha_x+\alpha_y) < 0 \text{ always}, \qquad \det J = \alpha_x\alpha_y(1-L)$$

- $L < 0$ (negative loop): $\det J > 0$ always — **no saddle, no bistability**.
- $L > 0$ (positive loop): discriminant $(\alpha_x-\alpha_y)^2 + 4f'g' > 0$ — **no spiral**.
- Bistability requires $L > 1$; **a Hopf is impossible**, because the trace never reaches zero.
- Two escapes: add a node (more phase lag), or add self-activation (a positive diagonal entry).

**Slow–fast reduction:** on the slow manifold the reduced eigenvalue is
$\det J / f_u$, valid only where $f_u < 0$; at a fold $f_u = 0$ and the trajectory
jumps.

*From* [3.1](lessons/03-01-steady-states-stability-phase-planes.md)

### The toggle switch

$$\dot u = \frac{\alpha}{1+v^n} - u, \qquad \dot v = \frac{\alpha}{1+u^n} - v$$

Subtracting the two steady-state conditions at $n = 2$ factorizes the whole
problem in one line: $(u-v)(1-uv) = 0$.

| Branch | Condition | Fixed points | Eigenvalues |
|---|---|---|---|
| Symmetric | $s^3 + s = \alpha$ | exactly one, for every $\alpha > 0$ | $-1 \pm g_s$, $g_s = \dfrac{2s^2}{1+s^2}$ |
| Asymmetric | $uv=1$, $u+v=\alpha$ | $u,v = \dfrac{\alpha \pm \sqrt{\alpha^2-4}}{2}$, real for $\alpha \ge 2$ | $-1 \pm 2/\alpha$ |

$$\boxed{\;\alpha_c = 2 \text{ at } n = 2; \qquad \alpha_c = (n-1)^{-1/n}\,\frac{n}{n-1} \text{ in general}\;}$$

At $n = 3$, $\alpha_c = 1.191$ — **steeper repression makes bistability cheaper**.
At $n = 1$ the condition reads $s > 1/0$ and is never met: non-cooperative mutual
repression is never bistable, at any strength.

Eigenvectors are $(1,1)$ and $(1,-1)$: **the symmetric direction is always
stable, and only "one gene starts winning" can go unstable.** By symmetry the
diagonal is invariant, so it is exactly the separatrix. Near onset the branches
separate as $w = \pm\sqrt{\alpha^2-4} \approx \pm 2\sqrt{\alpha-2}$ — and how far
a circuit sits above its bifurcation is how long it remembers.

*From* [3.2](lessons/03-02-bistability-toggle-switch.md)

### Integral control and exact adaptation

$$y - y_0 = \kappa u - \lambda m, \quad \dot m = k(y-y_0) \;\Longrightarrow\; y(t)-y_0 = \kappa u\,e^{-k\lambda t}$$

| Quantity | Value | Robust? |
|---|---|---|
| Peak excursion | $\kappa u$ | no — input size and plant sensitivity |
| Relaxation rate | $k\lambda$ | no — controller and plant gain |
| **Final error** | $\mathbf 0$ | **yes — nothing appears in it** |

**A leak destroys exactness.** With $\dot m = k(y-y_0) - \alpha m$:

$$y^* - y_0 = \kappa u\,\frac{\alpha}{k\lambda+\alpha}$$

— small, but proportional to the input and dependent on every parameter, i.e.
*tuned*. A true integrator therefore needs a species whose production and removal
are independent of its own concentration, which in biochemistry means **enzymes
at saturation** (zero order) — the regime of
[4.4](lessons/04-04-signal-transduction-cascades.md).

**Proportional feedback, for contrast:** $y^* = \kappa u/(1+L)$, zero only as
$L \to \infty$; a 1 percent residual needs $L = 99$, *held* at 99.

**Barkai–Leibler chemotaxis.** CheR works saturated (constant rate $V_R$); CheB
demethylates only active receptors (rate $k_B B A$):

$$\frac{dM}{dt} = V_R - k_B B\,A = -k_B B\left(A - \frac{V_R}{k_B B}\right) \;\Longrightarrow\; \boxed{\;A^* = \frac{V_R}{k_B B}\;}$$

**The ligand concentration does not appear** — nor does receptor number,
affinity, cooperativity or cluster size. The adaptation time does:
$\tau_{\text{adapt}} = 1/(k_B B\,a)$ with $a = \partial A/\partial M$.

*From* [3.3](lessons/03-03-integral-control-exact-adaptation.md)

### Rings of repressors

$$\frac{dx_i}{d\tau} = \frac{\tilde\beta}{1+x_{i-1}^{\,n}} - x_i, \qquad x^*(1+x^{*n}) = \tilde\beta, \qquad J = -I - g\,P$$

$$g = -f'(x^*) = \frac{n\,x^{*n}}{1+x^{*n}} = n\theta, \qquad \lambda_k = -1 - g\,e^{2\pi i k/m}$$

| ring $m$ | critical gain $g_c = \sec(\pi/m)$ | minimum $n$ | frequency $\omega_H = \tan(\pi/m)$ | period at onset |
|---|---|---|---|---|
| 1 | — | **impossible** | — | — |
| 2 | 1.000 | — | 0 (real crossing) | **switch, not clock** |
| 3 | 2.000 | $n > 2$ | 1.732 | $3.63/\alpha$ |
| 5 | 1.236 | $n > 1.236$ | 0.727 | $8.65/\alpha$ |
| 7 | 1.110 | $n > 1.110$ | 0.481 | $13.05/\alpha$ |

**$\theta < 1$ always, so $g < n$ always** — the ceiling that decides everything.
At $n = 2$ and $\tilde\beta = 10^6$ the loop gain is $1.9998$ and a three-gene
ring still will not tick. For a three-ring the production threshold is

$$\tilde\beta_c = \left(\frac{2}{n-2}\right)^{1/n}\frac{n}{n-2}: \qquad n{=}3 \to 3.78, \quad n{=}4 \to 2.00, \quad n{=}6 \to 1.34, \quad n{=}10 \to 1.09$$

**Ring length substitutes for cooperativity** — a five-gene ring works with
ordinary $n = 2$ dimers ($\tilde\beta_c = 3.33$) at 2.4 times the period. So do
mRNA steps, maturation delays and nuclear transport, which is why the real
repressilator oscillated with $n \approx 2$.

**The linear frequency is the period only at the bifurcation.** Well past onset
it can be off by 70 percent, and a relaxation oscillator's period has nothing to
do with its Hopf frequency.

*From* [3.4](lessons/03-04-oscillations-repressilator-hopf.md)

### Stoichiometric networks and flux balance

$$S\mathbf v = 0, \qquad \dim\operatorname{null}(S) = n - \operatorname{rank}(S)$$

with $n$ reactions and $m$ metabolites, and $n \gg m$ at genome scale — hence a
null space of dimension in the hundreds, hence the need for an objective.

$$\max_{\mathbf v}\; \mathbf c^{\mathsf T}\mathbf v \quad\text{s.t.}\quad S\mathbf v = \mathbf 0, \quad \mathbf l \le \mathbf v \le \mathbf u$$

| Structural fact | Consequence |
|---|---|
| Feasible set is a convex polytope | no local optima; any local max is global |
| Optimum attained at a **vertex** | most reactions carry zero flux — the answer reads like a pathway diagram |
| Value set by the **binding** constraints | slack constraints are irrelevant; read the shadow prices |
| Objective is a hypothesis, constraints are knowledge | FBA says what a cell *would* do if it maximized what you told it to |

**Cofactor balances are the load-bearing constraints**, because ATP and NADH
appear in hundreds of reactions and couple parts of metabolism that share no
carbon. They are what turn structure into a gene-essentiality prediction — and
what force $v_{\text{acetate}} = 0$ in anaerobic fermentation, giving exactly 2
ATP per glucose from redox balance alone.

**Extensions:** FVA bounds each flux across the optimal face; gene deletion sets
fluxes to zero and re-solves, predicting essentiality and synthetic lethality;
dynamic FBA runs a sequence of LPs while an ODE updates external concentrations.
Essentiality calls run 80 to 90 percent correct, and **the errors are
asymmetric** — FBA under-predicts essentiality, because it sees only
stoichiometric alternatives and knows nothing about regulation.

**Loop law:** a futile cycle satisfies $S\mathbf v = 0$ with $\mathbf v \ge 0$ and
is excluded only by thermodynamics, not by stoichiometry — which is why loopless
FBA exists.

*From* [4.1](lessons/04-01-metabolic-networks-stoichiometry.md) · [4.2](lessons/04-02-flux-balance-analysis.md)

### Stochastic gene expression

**Birth–death, constant production $k$ and first-order removal $\gamma$:**

$$p_n = \frac{\lambda^n e^{-\lambda}}{n!}, \quad \lambda = \frac{k}{\gamma} \;\Longrightarrow\; \mu = \sigma^2 = \lambda, \quad F = 1, \quad CV = \frac{1}{\sqrt\mu}$$

| mean copies $\mu$ | $CV$ | typical of |
|---|---|---|
| 1 | **100 percent** | a single-copy plasmid, a gene |
| 4 | 50 percent | a bacterial mRNA |
| 10 | **32 percent** | a low-abundance transcription factor |
| 100 | 10 percent | an abundant regulator |
| 1000 | 3.2 percent | a metabolic enzyme |
| $10^4$ | **1 percent** | a ribosomal protein |

**Bursting.** Both sources give the same signature:

$$\text{burst size } b = F - 1, \qquad \text{burst frequency } a = \frac{\gamma\mu}{b}, \qquad \mu = \frac{ab}{\gamma}$$

- *Translational:* $F_p = 1 + k_p/(\gamma_m+\gamma_p) \approx 1 + b_p$ with $b_p = k_p/\gamma_m$.
- *Transcriptional* (random telegraph): $F_m = 1 + \dfrac{k_m k_{\text{off}}}{(k_{\text{on}}+k_{\text{off}})(k_{\text{on}}+k_{\text{off}}+\gamma_m)}$, which tends to 1 for fast switching and to $1 + k_m/k_{\text{off}}$ for slow switching.

**Two-colour decomposition**, from two identical promoters in one cell:

$$\eta_{\text{int}}^2 = \frac{\langle (c-y)^2\rangle}{2\langle c\rangle\langle y\rangle}, \qquad \eta_{\text{ext}}^2 = \frac{\langle cy\rangle - \langle c\rangle\langle y\rangle}{\langle c\rangle\langle y\rangle}, \qquad \eta_{\text{int}}^2 + \eta_{\text{ext}}^2 = \eta_{\text{tot}}^2$$

The identity is algebraic — no model, no fit. **Variances add, standard
deviations do not.** A single colour measures $\eta_{\text{tot}}$ and cannot split
it.

**The noise floor.** Intrinsic noise falls as $F/\mu$; extrinsic noise is roughly
mean-independent, so

$$\eta_{\text{tot}}^2 \approx \frac{F}{\mu} + \eta_{\text{ext}}^2$$

and past a few hundred copies **you cannot express your way out of noise**.

**Gillespie's algorithm** (exact sampling, no time step): with
$a_0 = \sum_j a_j(\mathbf n)$, draw $\tau = -\ln r_1/a_0$ for *when*, pick $j$
with probability $a_j/a_0$ for *which*, then set
$\mathbf n \to \mathbf n + \mathbf s_j$.

**Propensities:** $a = kn$ for first order; $a = (k/\Omega)n_An_B$ for
bimolecular — **the volume appears explicitly**, which it never did in the ODEs.

*From* [4.3](lessons/04-03-stochastic-gene-expression.md)

### Covalent modification cycles and cascades

$$\frac{dW^*}{dt} = \frac{V_1 W}{K_1+W} - \frac{V_2 W^*}{K_2+W^*}, \qquad W + W^* = W_T$$

With $w^* = W^*/W_T$, $J_i = K_i/W_T$ and input $\theta = V_1/V_2$, the steady
state is **linear in $\theta$**, so invert rather than solve:

$$\boxed{\;\theta = \frac{w^*\left(J_1 + 1 - w^*\right)}{\left(1-w^*\right)\left(J_2 + w^*\right)}\;}$$

Forward form (Goldbeter–Koshland):
$w^* = 2\theta J_2\big/\left[B + \sqrt{B^2 - 4(1-\theta)\theta J_2}\right]$ with
$B = 1 - \theta + \theta J_2 + J_1$.

| $J = K_M/W_T$ | $\theta_{10}$ | $\theta_{90}$ | fold-span | $n_H$ |
|---|---|---|---|---|
| 10 | 0.120 | 8.34 | 69.6 | **1.04** |
| 1 | 0.192 | 5.21 | 27.2 | 1.33 |
| 0.1 | 0.556 | 1.80 | 3.24 | 3.74 |
| 0.02 | 0.852 | 1.174 | 1.38 | **13.7** |
| 0.01 | 0.919 | 1.088 | 1.18 | 26.1 |
| 0.001 | 0.9912 | 1.0089 | 1.018 | **249** |

With $J_1 = J_2 = J$: $\theta_{90} = 9(J+0.1)/(J+0.9)$ and
$\theta_{10} = 1/\theta_{90}$, and for small $J$

$$n_H \approx \frac{9\ln 9}{80\,J} = \frac{0.25}{J} = \frac{W_T}{4K_M}, \qquad \boxed{\;n_H\,\lambda \approx \frac{V_1+V_2}{W_T} = \frac{1}{\tau_{\text{turnover}}}\;}$$

**Sharpness times speed is a constant.** There is no ceiling on $n_H$ — cooperative
binding caps at the number of sites, this caps at nothing — but you pay in
relaxation rate, and continuously in ATP.

**Cascades:** logarithmic gains compose *exactly*,
$R = d\ln x_n/d\ln x_0 = \prod_i d\ln x_i/d\ln x_{i-1}$, but only while every layer
sits in its own sensitive range. A layer at 95 percent modified has a local gain
near zero and collapses the whole product. A three-tier MAPK cascade at
$n_H \approx 1.7$ per layer composes to $1.7^3 = 4.9$, i.e. a 2.4-fold input span.

*From* [4.4](lessons/04-04-signal-transduction-cascades.md) · [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md)

### Retroactivity, gradients and patterns

**Retroactivity.** With $p_T$ downstream binding sites of dissociation constant $K$:

$$\dot X = \frac{f(X) - \alpha X}{1+R(X)}, \qquad R(X) = \frac{p_T K}{(K+X)^2}$$

Steady states untouched, every rate divided by $1+R$. $R$ peaks at $K = X$ with
$R_{\max} = p_T/(4X)$ — **the downstream module best matched to its input is the
one that loads it hardest.** Escape by pushing $K \gg X$ (weak, abundant sites) or
by inserting an insulation stage.

**French flag.** Synthesis–diffusion–degradation gives one length scale:

$$M(x) = M_0 e^{-x/\lambda}, \quad \lambda = \sqrt{D/k}, \quad x_i = \lambda\ln\!\left(\frac{M_0}{\theta_i}\right), \quad \delta x = \lambda\,\frac{\delta M}{M}$$

**Positional error is $\lambda$ times relative concentration error**, and it is the
same at every boundary. So a longer, shallower gradient is a *less* precise ruler,
and sharp boundaries must be made downstream — by a toggle, by ultrasensitivity,
or by time-averaging.

**Turing instability.** With Jacobian $\begin{pmatrix} a & b \\ c & d\end{pmatrix}$
and diffusivities $D_u, D_v$:

| # | Condition | Says |
|---|---|---|
| 1 | $\operatorname{tr}A = a+d < 0$ | stable when well-stirred |
| 2 | $\det A = ad-bc > 0$ | stable when well-stirred |
| 3 | $D_v a + D_u d > 0$ | differential diffusion — **necessary** |
| 4 | $(D_v a + D_u d)^2 > 4D_uD_v\det A$ | the one that actually **binds** |

$$k_c^2 = \frac{D_v a + D_u d}{2D_uD_v} = \sqrt{\frac{\det A}{D_uD_v}}, \qquad \boxed{\;\lambda_c = 2\pi\left(\frac{D_uD_v}{\det A}\right)^{1/4}\;}$$

**Nothing in $\lambda_c$ knows how big the tissue is**, so a larger tissue gets
more stripes rather than wider ones — the mechanism's sharpest experimental
signature. Typical critical diffusivity ratios land between 3 and 20, so "the
inhibitor diffuses faster" is a slogan, not a criterion.

*From* [4.5](lessons/04-05-synthetic-biology-pattern-formation.md)

### Numbers worth having

| Quantity | Value | Where |
|---|---|---|
| One molecule in an *E. coli* cell | 1.7 nM ($V \approx 1$ fL) | [1.1](lessons/01-01-systems-view-of-the-cell.md) · [4.3](lessons/04-03-stochastic-gene-expression.md) |
| Protein diffusion in cytoplasm | $D \approx 10\ \mu\text{m}^2\,\text{s}^{-1}$; mixing time $L^2/D$ | [1.1](lessons/01-01-systems-view-of-the-cell.md) |
| Well-mixed check | *E. coli* 0.4 s (yes); yeast 40 s (marginal); axon 28 h (no) | [1.1](lessons/01-01-systems-view-of-the-cell.md) |
| *E. coli* dilution rate at 30 min doubling | $\alpha = \ln 2/30 = 0.0231\ \text{min}^{-1}$ | [2.1](lessons/02-01-input-functions-promoter-logic.md) |
| Stable bacterial protein response time | $t_{1/2} \approx \tau_{\text{cell}}$ — one full generation | [2.1](lessons/02-01-input-functions-promoter-logic.md) |
| Promoter dynamic range | *lac* about $10^3$; many promoters only 10 to 50 | [2.1](lessons/02-01-input-functions-promoter-logic.md) |
| *E. coli* transcription network | about 424 operon nodes, 519 edges, about 40 negative self-loops | [2.2](lessons/02-02-negative-autoregulation.md) |
| Measured NAR speedup | about fivefold (Rosenfeld–Elowitz–Alon) | [2.2](lessons/02-02-negative-autoregulation.md) |
| *ara* system C1-FFL delay | about 20 min | [2.4](lessons/02-04-feed-forward-loop.md) |
| Chemotaxis robustness | precision near 1 over about 50-fold CheR expression | [3.3](lessons/03-03-integral-control-exact-adaptation.md) |
| Repressilator period | about 150 min, i.e. two to three generations | [3.4](lessons/03-04-oscillations-repressilator-hopf.md) |
| *E. coli* metabolic reconstruction | about 2000 reactions over about 1100 metabolites | [4.1](lessons/04-01-metabolic-networks-stoichiometry.md) |
| Metabolite pool turnover | well under 1 s against a 20 to 60 min division time | [4.1](lessons/04-01-metabolic-networks-stoichiometry.md) |
| FBA essentiality accuracy | 80 to 90 percent, on a well-curated network and medium | [4.2](lessons/04-02-flux-balance-analysis.md) |
| Extrinsic noise floor | about 10 to 30 percent, roughly mean-independent | [4.3](lessons/04-03-stochastic-gene-expression.md) |
| Bacterial mRNA half-life | a few minutes, against stable protein over a generation | [4.3](lessons/04-03-stochastic-gene-expression.md) |
| Measured MAPK cascade steepness | $n_H \approx 5$, not the 25 the naive formula offers | [4.4](lessons/04-04-signal-transduction-cascades.md) |
| Turing wavelength, plausible parameters | about 100 $\mu\text{m}$ — roughly eleven cell diameters | [4.5](lessons/04-05-synthetic-biology-pattern-formation.md) |
| Circuit loss in continuous culture | 8 percent burden, $10^{-5}$ mutants: majority in 144 generations (4 days) | [4.5](lessons/04-05-synthetic-biology-pattern-formation.md) |

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| The physical justification of mass action; detailed balance | [biophysics 4.1](../biophysics/lessons/04-01-reaction-kinetics-mass-action.md) |
| Michaelis–Menten as enzymology; catalytic strategy; enzyme inhibition | [biophysics 4.2](../biophysics/lessons/04-02-michaelis-menten.md) · [biochemistry 2.2](../biochemistry/lessons/02-02-michaelis-menten-kinetics.md) · [biochemistry 2.1](../biochemistry/lessons/02-01-enzymes-catalytic-strategy.md) · [biochemistry 2.3](../biochemistry/lessons/02-03-enzyme-inhibition.md) |
| Steady-state versus pre-equilibrium approximations in general kinetics | [physical chemistry 3.3](../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md) · [3.5](../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md) |
| Cooperativity and allostery as molecular mechanism; the hemoglobin instance | [biophysics 2.4](../biophysics/lessons/02-04-cooperativity-allostery.md) · [biochemistry 1.5](../biochemistry/lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md) |
| Equilibrium binding, $K_d$ and fractional occupancy | [biophysics 2.3](../biophysics/lessons/02-03-ligand-binding-occupancy.md) |
| Free energy as the cell's currency; why a cell is never at equilibrium | [biophysics 2.1](../biophysics/lessons/02-01-free-energy-cell-currency.md) · [stat-mech 2.1](../stat-mech/lessons/02-01-laws-of-thermodynamics.md) |
| Fick's laws and the diffusion length | [biophysics 1.3](../biophysics/lessons/01-03-diffusion-ficks-laws.md) |
| Low Reynolds number — why a bacterium cannot steer and must sense temporally | [biophysics 1.5](../biophysics/lessons/01-05-low-reynolds-number.md) |
| Flows on the line and graphical stability | [dynamical-systems 1.1](../dynamical-systems/lessons/01-01-flows-on-the-line.md) |
| Trace–determinant classification; linearization and Hartman–Grobman; phase portraits | [dynamical-systems 1.3](../dynamical-systems/lessons/01-03-trace-determinant-classification.md) · [1.4](../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md) · [1.5](../dynamical-systems/lessons/01-05-phase-portraits.md) |
| Basins, Lyapunov functions, limit cycles and Poincaré–Bendixson | [dynamical-systems 2.2](../dynamical-systems/lessons/02-02-lyapunov-functions.md) · [2.3](../dynamical-systems/lessons/02-03-limit-cycles.md) · [2.4](../dynamical-systems/lessons/02-04-poincare-bendixson.md) |
| Saddle-node, pitchfork, Hopf; why a pitchfork does not survive asymmetry | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) · [3.2](../dynamical-systems/lessons/03-02-pitchfork-symmetry.md) · [3.3](../dynamical-systems/lessons/03-03-hopf-bifurcation.md) · [3.4](../dynamical-systems/lessons/03-04-normal-forms-structural-stability.md) |
| Feedback, bistability, hysteresis and adaptation — the qualitative cell-biology pass | [molecular-cell-biology 2.4](../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) |
| Kinase cascades, scaffolds and second messengers as biology | [molecular-cell-biology 2.3](../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md) · [2.2](../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md) |
| The cell cycle's irreversible transitions; differentiation and reprogramming | [molecular-cell-biology 3.1](../molecular-cell-biology/lessons/03-01-cell-cycle-engine-irreversibility.md) · [4.5](../molecular-cell-biology/lessons/04-05-stem-cells-differentiation-reprogramming.md) |
| The transcription machinery behind an input function; the *lac* operon's genetics | [molecular-cell-biology 4.2](../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md) · [genetics 3.4](../genetics/lessons/03-04-prokaryotic-regulation-operon.md) |
| Null spaces, rank–nullity and the four subspaces; elimination; eigenvectors | [linalg-refresher 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) · [1.3](../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) · [3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| Linear programming: formulation, vertices, simplex, degeneracy, shadow prices | [operations-research 1.1](../operations-research/lessons/01-01-formulating-linear-programs.md) · [1.2](../operations-research/lessons/01-02-vertices-bases-fundamental-theorem.md) · [1.3](../operations-research/lessons/01-03-the-simplex-method.md) · [1.4](../operations-research/lessons/01-04-initialization-degeneracy-cycling.md) · [2.2](../operations-research/lessons/02-02-shadow-prices-sensitivity.md) |
| Convexity, LP as a convex problem, duality and complementary slackness | [convex-optimization 1.1](../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md) · [2.1](../convex-optimization/lessons/02-01-convex-problem-local-global.md) · [2.2](../convex-optimization/lessons/02-02-linear-quadratic-programs.md) · [3.1](../convex-optimization/lessons/03-01-lagrangian-dual-function.md) · [3.3](../convex-optimization/lessons/03-03-kkt-conditions.md) |
| Poisson and geometric distributions; exponential waiting times | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) · [2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Poisson arrivals as a process | [operations-research 4.1](../operations-research/lessons/04-01-poisson-arrivals-littles-law.md) |
| Conditional expectation and the law of total covariance (behind the two-colour identity) | [probability-theory 5.1](../probability-theory/lessons/05-01-conditional-expectation.md) · [5.2](../probability-theory/lessons/05-02-conditional-expectation-properties.md) |
| Null-hypothesis testing, as applied to a randomized-graph ensemble | [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) |
| Degree sequences, and what a degree-preserving randomization preserves | [graph-theory 1.1](../graph-theory/lessons/01-01-degree-and-handshake-lemma.md) |
| Fluctuation–dissipation and the Langevin approximation; fluctuations in a small ensemble | [stat-mech 6.1](../stat-mech/lessons/06-01-brownian-langevin.md) · [3.3](../stat-mech/lessons/03-03-fluctuations-ensemble-equivalence.md) |
| Feedback and the sensitivity function; first-order lag, poles and time constants | [control-systems 1.1](../control-systems/lessons/01-01-feedback-and-the-control-problem.md) · [1.4](../control-systems/lessons/01-04-transfer-functions-poles-zeros.md) · [2.1](../control-systems/lessons/02-01-first-order-response.md) |
| Block-diagram algebra and series gain composition | [control-systems 1.5](../control-systems/lessons/01-05-block-diagram-algebra.md) |
| Integral action, PID, system type and steady-state error | [control-systems 4.1](../control-systems/lessons/04-01-pid-control.md) · [2.3](../control-systems/lessons/02-03-steady-state-error-system-type.md) |
| Gain and phase margins; the Nyquist criterion (the 180-degree reading of a Hopf) | [control-systems 3.4](../control-systems/lessons/03-04-gain-and-phase-margins.md) · [3.5](../control-systems/lessons/03-05-nyquist-criterion.md) |
| Low-pass filtering and the pole–zero reading of a band-pass element | [signals-systems 4.4](../signals-systems/lessons/04-04-filter-design-basics.md) · [2.5](../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md) |
| The diffusion operator; what a diffusion length means | [pdes 2.1](../pdes/lessons/02-01-heat-diffusion-equations.md) · [4.2](../pdes/lessons/04-02-heat-equation-line-heat-kernel.md) |
| Glycolysis, oxidative phosphorylation, and ATP/NADH bookkeeping | [biochemistry 3.2](../biochemistry/lessons/03-02-glycolysis.md) · [3.4](../biochemistry/lessons/03-04-oxidative-phosphorylation.md) · [2.5](../biochemistry/lessons/02-05-bioenergetics-atp-redox.md) |
| Allosteric regulation of metabolic flux — the regulation FBA omits | [biochemistry 2.4](../biochemistry/lessons/02-04-allosteric-regulation-metabolic-control.md) |
| Fitness, selection coefficients and drift; bet-hedging as a fitness argument | [evolution-ecology 1.1](../evolution-ecology/lessons/01-01-fitness-quantitative.md) · [1.4](../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md) · [3.3](../evolution-ecology/lessons/03-03-life-histories-tradeoffs.md) |
| Mutual inhibition and recurrent motifs in other substrates (neurons, species) | [neuroscience 2.6](../neuroscience/lessons/02-06-circuit-motifs-computation.md) · [evolution-ecology 4.1](../evolution-ecology/lessons/04-01-competition-and-the-niche.md) · [4.2](../evolution-ecology/lessons/04-02-predation-lotka-volterra.md) |
| Channel capacity of a noisy signalling channel | [information-theory 1.3](../information-theory/lessons/01-03-mutual-information.md) |

## Pitfalls

### Modelling assumptions

- A complete parts list plus compute does **not** give the phenotype: the
  Jacobian's sign pattern decides what behaviours are possible; parameters only
  choose among them. *([1.1](lessons/01-01-systems-view-of-the-cell.md))*
- But do not over-read it either — **topology constrains the repertoire; logic and
  parameters pick from it.** The same C1-FFL does two different jobs under AND
  versus OR. *([1.1](lessons/01-01-systems-view-of-the-cell.md), [2.4](lessons/02-04-feed-forward-loop.md))*
- Thomas's rules are **necessary, never sufficient**: a positive loop permits
  bistability, a negative loop of length at least two permits oscillation, and
  neither has to happen. *([1.1](lessons/01-01-systems-view-of-the-cell.md))*
- A more detailed model is not a better one. Every parameter you cannot
  independently measure buys fit and sells falsifiability.
  *([1.1](lessons/01-01-systems-view-of-the-cell.md))*
- "Well-stirred" is not free — it is the claim that $L^2/D$ is small against the
  reaction time, and it fails by three orders of magnitude in an axon.
  *([1.1](lessons/01-01-systems-view-of-the-cell.md))*
- Which reactions you call **exchange** is a modelling choice that changes what is
  conserved, and buffering a species converts it from a conserved variable into an
  external parameter. *([1.2](lessons/01-02-mass-action-rate-odes.md), [4.1](lessons/04-01-metabolic-networks-stoichiometry.md))*
- An irreversible arrow is a **thermodynamic assumption**, not a simplification: it
  asserts an infinite free-energy drop and a driving source the model does not
  contain. *([1.2](lessons/01-02-mass-action-rate-odes.md))*

### Kinetics and approximations

- Do not use $S_{ij}$ as the mass-action exponent — that is $a_{ij}$. And a
  zero row entry does not mean the species is irrelevant to that reaction: a
  catalyst has $S_{ij} = 0$ and still appears in the rate law.
  *([1.2](lessons/01-02-mass-action-rate-odes.md))*
- Never mix the split and net conventions for reversible reactions inside one
  model, or every null-space computation afterwards is garbage.
  *([1.2](lessons/01-02-mass-action-rate-odes.md))*
- Not every left-null-space basis vector is a physical moiety — basis vectors can
  carry negative or fractional entries. *([1.2](lessons/01-02-mass-action-rate-odes.md))*
- Steady state is not equilibrium: $S\mathbf v = \mathbf 0$ with $\mathbf v$
  possibly large, versus $\mathbf v = \mathbf 0$. Cells do the first and never the
  second. *([1.2](lessons/01-02-mass-action-rate-odes.md), [4.1](lessons/04-01-metabolic-networks-stoichiometry.md))*
- $\dot C = 0$ does not mean the complex is constant; it means it has been
  **slaved** — a function of the slow variable, not a variable.
  *([1.3](lessons/01-03-michaelis-menten-qssa.md))*
- The QSSA condition is $E_T \ll K_M + S_0$, not $E_T \ll S_0$, and a small
  **timescale ratio is not sufficient** — sequestration is the binding constraint.
  *([1.3](lessons/01-03-michaelis-menten-qssa.md))*
- $K_M$ is an upper bound on affinity, not an estimate of it:
  $K_M = K_d + k_2/k_1 \ge K_d$. *([1.3](lessons/01-03-michaelis-menten-qssa.md))*
- Michaelis–Menten is a reduction to be checked, not a law to be applied; when it
  fails, use the total QSSA or simulate the full mass-action system.
  *([1.3](lessons/01-03-michaelis-menten-qssa.md))*
- The apply-the-reduction-and-ask-what-it-destroyed habit: a reduced model has
  fewer parameters than the mechanism, and no data collected *in the reduced
  regime* can recover the difference.
  *([1.3](lessons/01-03-michaelis-menten-qssa.md))*
- **Curve shape is evidence about form, never about mechanism.** A fitted hyperbola
  does not separate QSSA from rapid equilibrium; a fitted Hill coefficient does not
  separate cooperativity from titration; a Fano factor does not separate
  translational from transcriptional bursting.
  *([1.3](lessons/01-03-michaelis-menten-qssa.md), [1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md), [4.3](lessons/04-03-stochastic-gene-expression.md))*
- $n$ is a fitted steepness, not a count of sites — hemoglobin has 4 sites and
  fits about 2.8, and a measured 2.3 means 2.3 of nothing.
  *([1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md), [4.4](lessons/04-04-signal-transduction-cascades.md))*
- **Cooperativity changes sharpness, not setpoint** — every Hill curve crosses
  half-maximum at $x = K$. Confusing the two is the commonest error in this
  material. *([1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md))*
- Keep $K$ and $K_d$ apart: for a lumped $n$-site reaction $K_d$ has units of
  concentration to the $n$. Write $(x/K)^n$ and the problem disappears.
  *([1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md))*
- Ultrasensitivity is not amplification: one is a fold-change in input, the other
  a size of output, and a cascade trades them.
  *([1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md), [4.4](lessons/04-04-signal-transduction-cascades.md))*
- Ultrasensitivity does **not** require cooperativity, multimers or multiple
  sites — a monomeric substrate and two saturated enzymes beat hemoglobin
  fivefold. *([4.4](lessons/04-04-signal-transduction-cascades.md))*
- A steeper switch is not strictly better: $n_H\lambda$ is fixed, so steepening
  slows the cycle in exact inverse proportion — and every futile turn costs an
  ATP. *([4.4](lessons/04-04-signal-transduction-cascades.md))*
- Do not multiply Hill coefficients across a cascade without checking each layer
  is in its sensitive range; one saturated layer collapses the product.
  *([1.4](lessons/01-04-cooperativity-hill-ultrasensitivity.md), [4.4](lessons/04-04-signal-transduction-cascades.md))*
- Zero-order ultrasensitivity is derived from $W + W^* = W_T$, which the saturated
  regime itself violates through **sequestration** — the main reason measured
  $n_H$ sits near 5 rather than 25.
  *([4.4](lessons/04-04-signal-transduction-cascades.md))*

### Motifs and dynamics

- A cell cannot speed up its approach to its own steady state by transcribing
  harder: $t_{1/2} = \ln 2/\alpha$ contains no $\beta$. But raising $\beta$ *does*
  pull forward the crossing of a **fixed absolute** threshold — a different
  question. *([2.1](lessons/02-01-input-functions-promoter-logic.md))*
- Half-lives combine **reciprocally**, so the shorter channel dominates: a 6-min
  degradation half-life in a cell doubling every 30 min gives 5 min, not 36 or 18.
  *([2.1](lessons/02-01-input-functions-promoter-logic.md))*
- A measured dose–response is $f(X)/\alpha$, so its vertical scale shifts whenever
  growth rate does. *([2.1](lessons/02-01-input-functions-promoter-logic.md))*
- AND and OR are the $n \to \infty$ corners of a continuum; a promoter measured at
  four corners can be labelled "AND" and behave nothing like a gate in between.
  *([2.1](lessons/02-01-input-functions-promoter-logic.md))*
- $K$ is a property of the factor **and its binding site**, not of the factor
  alone — which is exactly what a single-input module's temporal program exploits.
  *([2.1](lessons/02-01-input-functions-promoter-logic.md), [2.5](lessons/02-05-incoherent-ffl-temporal-programs.md))*
- NAR does not make the protein less stable and does not touch $\alpha$. Switch
  production off and a NAR gene decays at exactly the unregulated rate — **the
  speedup is one-sided**. *([2.2](lessons/02-02-negative-autoregulation.md))*
- Compare circuits only at **matched steady state**; a repressed gene settles
  lower and reaches a lower target sooner for trivial reasons.
  *([2.2](lessons/02-02-negative-autoregulation.md))*
- Say which speedup you mean: the local bound is $1+n\theta \le 1+n$, and the
  large table values come from the flat-out phase of the rise.
  *([2.2](lessons/02-02-negative-autoregulation.md))*
- Robustness is not free — $Y_{st} \propto \beta_m^{1/(n+1)}$ means NAR is nearly
  as insensitive to *signals* as to noise.
  *([2.2](lessons/02-02-negative-autoregulation.md))*
- A high $Z$-score is evidence of non-randomness under one null, not proof of
  function. Function is established by building the circuit and timing it.
  *([2.2](lessons/02-02-negative-autoregulation.md), [2.4](lessons/02-04-feed-forward-loop.md))*
- Positive feedback does not imply bistability: you need $n>1$ **and** enough gain.
  Weak or non-cooperative PAR is monostable, just slower, larger and noisier.
  *([2.3](lessons/02-03-positive-autoregulation.md), [3.2](lessons/03-02-bistability-toggle-switch.md))*
- $f'(Y_{st}) > \alpha$ does not mean "strong and fast" — that state is
  **unstable**, and the circuit leaves it.
  *([2.3](lessons/02-03-positive-autoregulation.md))*
- A PAR gene with $n>1$ and no basal leak has $f(0) = 0$ and never starts. The
  leak is a structural requirement, not a defect.
  *([2.3](lessons/02-03-positive-autoregulation.md))*
- The FFL's delay comes from $Y$ being slow to **accumulate**, not slow to decay,
  and nothing about $Z$ enters $T_{\text{ON}}$ at all.
  *([2.4](lessons/02-04-feed-forward-loop.md))*
- $T_{\text{OFF}} = 0$ means $Z$'s **production** stops instantly; its
  concentration still decays with $\ln 2/\alpha_Z$.
  *([2.4](lessons/02-04-feed-forward-loop.md))*
- The FFL is not a duration threshold — it is a leaky integrator, so identical
  pulses pass or fail depending on how far apart they are.
  *([2.4](lessons/02-04-feed-forward-loop.md))*
- The wiring diagram does not fix the function: **AND and OR delay opposite
  transitions on identical arrows**, and the logic gate is invisible in the graph.
  *([2.4](lessons/02-04-feed-forward-loop.md))*
- A generic I1-FFL does **not** adapt exactly; its precision is a parameter with a
  ceiling of $1 - 1/F$. Exactness that survives parameter change needs integral
  feedback. *([2.5](lessons/02-05-incoherent-ffl-temporal-programs.md), [3.3](lessons/03-03-integral-control-exact-adaptation.md))*
- The pulse generator and the accelerator are the same solution with the same
  parameters; if a paper reports one, the other is present.
  *([2.5](lessons/02-05-incoherent-ffl-temporal-programs.md))*
- A temporal program needs no clock and no cascade, and its *order* is robust
  while its *timing* is not — and any target with $K_i > X_{st}$ silently drops
  out of the program entirely.
  *([2.5](lessons/02-05-incoherent-ffl-temporal-programs.md))*
- Discard fixed points at negative concentrations **before** classifying them; the
  positive quadrant is forward-invariant and nothing ever leaves it.
  *([3.1](lessons/03-01-steady-states-stability-phase-planes.md))*
- Three nullcline crossings need a **sigmoid**, hence $n>1$ — no amount of tuning
  rescues a non-cooperative switch.
  *([3.1](lessons/03-01-steady-states-stability-phase-planes.md), [3.2](lessons/03-02-bistability-toggle-switch.md))*
- "Unstable" does not mean "transient": it is a state the cell is never in, and
  what it marks is a measurable **boundary**.
  *([3.1](lessons/03-01-steady-states-stability-phase-planes.md), [3.2](lessons/03-02-bistability-toggle-switch.md))*
- Eigenvalues say nothing about the **size** of a basin, nothing at a
  bifurcation, and nothing about transient amplification.
  *([3.1](lessons/03-01-steady-states-stability-phase-planes.md))*
- Nondimensionalize before the algebra, or "the critical gain is 2" means nothing.
  *([3.1](lessons/03-01-steady-states-stability-phase-planes.md))*
- Name the bifurcation correctly: **pitchfork** for the exactly symmetric toggle,
  a **pair of saddle-nodes** for every real one and every input sweep.
  *([3.2](lessons/03-02-bistability-toggle-switch.md))*
- **Only hysteresis proves a second stable state.** A steep dose–response is
  ultrasensitivity and needs no feedback at all; a one-way sweep reports nothing
  about memory.
  *([3.2](lessons/03-02-bistability-toggle-switch.md), [4.4](lessons/04-04-signal-transduction-cascades.md))*
- Exact adaptation pins the **steady state**, not the output: the transient is
  free, and in chemotaxis the transient *is* the signal.
  *([3.3](lessons/03-03-integral-control-exact-adaptation.md))*
- Proportional negative feedback attenuates error by $1/(1+L)$ and never removes
  it — and the attenuation is tuned. A leaky integrator is not "close enough".
  *([3.3](lessons/03-03-integral-control-exact-adaptation.md))*
- The zero-error theorem holds **if a steady state is reached**; integrators
  saturate, and integral feedback with delay is a classic route to oscillation.
  *([3.3](lessons/03-03-integral-control-exact-adaptation.md), [3.4](lessons/03-04-oscillations-repressilator-hopf.md))*
- Strong repression does not make a ring oscillate: $g = n\theta$ and
  $\theta < 1$, so a million-fold repressor with $n = 2$ gives $g = 1.9998$ and a
  stable steady state. **Steepness is the binding constraint.**
  *([3.4](lessons/03-04-oscillations-repressilator-hopf.md))*
- $n>2$ is a property of the three-variable protein-only model, not a law —
  mRNA steps and transport delays lower the requirement.
  *([3.4](lessons/03-04-oscillations-repressilator-hopf.md))*
- Complex eigenvalues mean spiralling; the **sign of the real part** decides in or
  out. And the linear frequency gives the period only at the bifurcation.
  *([3.4](lessons/03-04-oscillations-repressilator-hopf.md))*
- A **subcritical** Hopf throws off an unstable cycle and the system jumps
  elsewhere — the linear analysis predicts instability and misdescribes the
  outcome. *([3.4](lessons/03-04-oscillations-repressilator-hopf.md))*

### Constraint-based models

- $S\mathbf v = 0$ constrains **rates, not levels**, and says nothing about
  concentrations in either direction.
  *([4.1](lessons/04-01-metabolic-networks-stoichiometry.md), [4.2](lessons/04-02-flux-balance-analysis.md))*
- Pathways live in the **cone**, not the subspace: a generic basis will hand you
  negative flux through an irreversible reaction, and the elementary flux modes
  are canonical but combinatorially many.
  *([4.1](lessons/04-01-metabolic-networks-stoichiometry.md))*
- In an open model the left null space is usually trivial; what survives is the
  cofactor pools, and those are constraints, not simplifications.
  *([4.1](lessons/04-01-metabolic-networks-stoichiometry.md))*
- Structure permits more than regulation allows — a reaction in $S$ is one the
  genome *can* run, not one the cell *does*.
  *([4.1](lessons/04-01-metabolic-networks-stoichiometry.md), [4.2](lessons/04-02-flux-balance-analysis.md))*
- An FBA flux map is the output of an optimization whose objective you chose, not
  a measurement — and the biomass objective is weak for stationary phase, for
  cancer cells, and close to meaningless for tissue.
  *([4.2](lessons/04-02-flux-balance-analysis.md))*
- **Run FVA before believing any individual flux.** Alternate optima are the rule,
  and the solver's choice among them is a pivoting artifact.
  *([4.2](lessons/04-02-flux-balance-analysis.md))*
- A large optimal growth rate means nothing stoichiometrically forbids it.
  Kinetics, regulation and unmodelled costs all live outside the LP.
  *([4.2](lessons/04-02-flux-balance-analysis.md))*
- The uptake bound is usually *the* binding constraint, so an FBA growth
  prediction is frequently a restatement of the uptake measurement.
  *([4.2](lessons/04-02-flux-balance-analysis.md))*
- The value of a nutrient is not a property of the nutrient: shadow prices invert
  when the limiting resource changes. *([4.2](lessons/04-02-flux-balance-analysis.md))*

### Noise, measurement and populations

- The deterministic model gives the stochastic mean **only when every propensity
  is linear**. With a Hill function, Jensen's inequality moves the mean — noise
  does not merely blur the deterministic answer.
  *([4.3](lessons/04-03-stochastic-gene-expression.md))*
- Only the intrinsic part of noise falls with expression. Extrinsic noise is
  mean-independent and sets a floor no overexpression penetrates.
  *([4.3](lessons/04-03-stochastic-gene-expression.md))*
- $F > 1$ is a mechanism report, not bad data — and $F < 1$ requires negative
  feedback. *([4.3](lessons/04-03-stochastic-gene-expression.md), [2.3](lessons/02-03-positive-autoregulation.md))*
- $CV = 1/\sqrt\mu$ counts **molecules**, not concentration: convert before
  computing anything. *([4.3](lessons/04-03-stochastic-gene-expression.md))*
- Gillespie is exact sampling of the master equation, not a discretization; the
  only error is Monte Carlo error.
  *([4.3](lessons/04-03-stochastic-gene-expression.md))*
- **Never average a bimodal population.** The mean sits in the empty valley and
  describes nobody; a histogram beats a mean and a round trip beats a one-way
  sweep. *([2.3](lessons/02-03-positive-autoregulation.md), [3.2](lessons/03-02-bistability-toggle-switch.md), [4.3](lessons/04-03-stochastic-gene-expression.md))*
- A graded population curve is compatible with every cell being a perfect
  switch — cell-to-cell threshold scatter smooths it. Measure single cells before
  quoting an effective Hill coefficient.
  *([4.3](lessons/04-03-stochastic-gene-expression.md), [4.4](lessons/04-04-signal-transduction-cascades.md))*
- A built circuit that works validates the **topology**, not the claim that any
  assembly of that shape works — both founding circuits needed parts hunted down
  to satisfy the model's conditions.
  *([4.5](lessons/04-05-synthetic-biology-pattern-formation.md))*
- Modules do not compose: attaching a load divides the upstream dynamics by
  $1+R$, and **a part characterized alone is not characterized.** Plugging in a
  reporter changes the circuit you are reporting on.
  *([4.5](lessons/04-05-synthetic-biology-pattern-formation.md))*
- "The inhibitor diffuses faster" is condition 3, which is only necessary;
  condition 4 is what bites and typically demands a several-fold ratio.
  *([4.5](lessons/04-05-synthetic-biology-pattern-formation.md))*
- A periodic biological pattern is not evidence of a Turing mechanism — somite
  spacing is a clock-and-wavefront, and many stripes are painted by pre-existing
  gradients. *([4.5](lessons/04-05-synthetic-biology-pattern-formation.md))*
- A longer, shallower gradient is a **less** precise ruler, because positional
  error is $\lambda$ times relative concentration error.
  *([4.5](lessons/04-05-synthetic-biology-pattern-formation.md))*
- Evolution is not neutral about your circuit: an 8 percent burden takes a
  chemostat population circuit-free in four days, and only a **structural** fix
  (coupling loss to lethality) changes the sign.
  *([4.5](lessons/04-05-synthetic-biology-pattern-formation.md))*

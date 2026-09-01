# Systems Biology · Lesson 4.2: Flux-balance analysis

> ⏱ ~15 min · Module 4: Metabolic networks, noise & spatial pattern · Builds on: [4.1](04-01-metabolic-networks-stoichiometry.md), [1.2](01-02-mass-action-rate-odes.md) · Unlocks: [4.3](04-03-stochastic-gene-expression.md) (stochastic gene expression)

## Why this matters

[4.1](04-01-metabolic-networks-stoichiometry.md) ended in an awkward place. Mass balance at steady state, $S\mathbf{v} = 0$, is exactly true and costs no parameters — but for a genome-scale network it leaves a null space of dimension in the hundreds. **A constraint that admits a hundred-dimensional family of answers is not yet a prediction.**

Flux-balance analysis closes that gap with two moves, one uncontroversial and one enormous. The uncontroversial one is to **bound** the fluxes: reactions cannot run backwards if they are irreversible, enzymes have finite capacity, and you can measure how fast glucose actually enters. The enormous one is to **assert an objective** — that the organism arranges its fluxes to maximize growth — and take the optimum as the prediction.

The result is a linear program, and that is why the method scales: genome-scale models with thousands of reactions solve in under a second, which is the only reason quantitative models of whole metabolisms exist at all. You already have the machinery from [operations-research 1.1](../../operations-research/lessons/01-01-formulating-linear-programs.md); what is new is the biology being smuggled into the objective vector, and **that smuggling is where the method's honesty lives.**

## The idea

Picture the feasible fluxes as a shape. $S\mathbf{v}=0$ is a linear subspace — the null space of [4.1](04-01-metabolic-networks-stoichiometry.md). Irreversibility ($v_i \ge 0$) slices it into a **cone**: a wedge with a sharp point at the origin, unbounded outward. Then a measured uptake bound ($v_{\text{glucose}} \le 10$) caps the cone and turns it into a bounded **polytope** — a convex solid with flat faces and sharp corners.

Every point in that polytope is a metabolically possible flux distribution. The cell sits at one of them. Which?

**FBA answers: at the point that maximizes growth.** Draw a linear objective as a direction in flux space and push a hyperplane along it until it is about to leave the polytope. It touches at a **vertex** — a corner — which is why FBA solutions are sparse: most reactions carry zero flux, and the answer looks like a handful of pathways rather than a diffuse haze of activity.

**Two things are worth separating carefully, because people conflate them.** The constraints are *knowledge*: stoichiometry is exact chemistry, irreversibility is thermodynamics, uptake bounds are measurements. The objective is a *hypothesis about the organism*, and nothing in the chemistry implies it. **FBA never tells you what a cell does; it tells you what a cell would do if it were maximizing the thing you told it to maximize, given what it is allowed to do.** Everything sound about the method, and everything dubious, follows from that sentence.

## The formal version

The **flux-balance problem** is the linear program

$$\max_{\mathbf{v}} \; \mathbf{c}^{\mathsf T}\mathbf{v} \quad \text{subject to} \quad S\mathbf{v} = \mathbf{0}, \qquad \mathbf{l} \le \mathbf{v} \le \mathbf{u},$$

where $\mathbf{v} \in \mathbb{R}^{n}$ is the flux vector ($n$ reactions), $S \in \mathbb{R}^{m \times n}$ is the stoichiometric matrix ($m$ internal metabolites), $\mathbf{c}$ is the objective vector — usually a single 1 in the biomass slot — and $\mathbf{l}, \mathbf{u}$ are lower and upper flux bounds.

*In words: among all flux distributions that keep every internal metabolite at steady state and respect every capacity limit, report the one that produces biomass fastest.*

Three structural facts do all the work.

**1. The feasible set is a convex polytope.** It is the intersection of a subspace with a box, both convex ([convex-optimization 1.1](../../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md)). So there are no local optima to get stuck in: any local maximum is global ([convex-optimization 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md)).

**2. The optimum is attained at a vertex.** This is the fundamental theorem of linear programming ([operations-research 1.2](../../operations-research/lessons/01-02-vertices-bases-fundamental-theorem.md)). A vertex of a polytope in $\mathbb{R}^n$ has at least $n$ active constraints, and most of those are the bounds $v_i = 0$. **Hence the biological signature of an FBA solution: a sparse set of active reactions, which reads like a pathway diagram.**

**3. The binding constraints are the answer.** The optimal *value* is set by whichever constraints are tight at the optimum; every slack constraint is irrelevant. Their dual variables — shadow prices ([operations-research 2.2](../../operations-research/lessons/02-02-shadow-prices-sensitivity.md)) — say how much extra biomass one more unit of that resource would buy. **Reading the shadow prices is usually more informative than reading the fluxes**, because it tells you what the cell is actually limited by.

**The biomass reaction** deserves a word. It is not a real reaction. It is a pseudo-reaction that drains precursors — amino acids, nucleotides, lipids, ATP — in the measured proportions found in one gram of dry cell mass, with fractional stoichiometric coefficients:

$$0.5\,\text{ala} + 0.2\,\text{gly} + \cdots + 60\,\text{ATP} \;\longrightarrow\; 1\ \text{g biomass}.$$

Its coefficients come from measured cell composition, so it is empirical input, not derived. **Change the composition and you change the prediction.**

### What the answer is worth

FBA is unusually easy to over-trust, because it produces confident numbers from almost no parameters. Four caveats, in descending order of how often they bite.

**The biomass objective is an assumption, and it is only sometimes a good one.** It is well supported for a microbe that has been evolving under strong selection for growth rate in a constant medium, and laboratory evolution experiments show *E. coli* moving toward the FBA optimum over hundreds of generations when it starts away from it. It is much weaker elsewhere: a cell in stationary phase is maximizing survival, not growth; a cancer cell grows fast but is under nothing like the selection a chemostat imposes; a hepatocyte is not trying to divide at all. **For multicellular tissue the biomass objective is close to meaningless**, and the honest versions of those models substitute a measured objective or abandon optimization for constraint-only analysis.

**FBA predicts fluxes, not concentrations.** There are no concentrations anywhere in the formulation — $S\mathbf{v}=0$ says production balances consumption, and is silent about the level at which that balance sits. Nor is there any regulation: FBA will happily route flux through a pathway whose genes the cell has switched off, because nothing in the LP knows about transcription. And there is no time; the model is a steady state, so it cannot describe a diauxic shift or a transient.

**Alternate optima are the rule, not the exception.** Whenever the objective's gradient is normal to a face of the polytope, the entire face is optimal and the solver returns one arbitrary vertex of it. A reported flux vector may therefore contain reactions that are an artifact of the solver's pivoting rather than a prediction. **Flux variability analysis (FVA)** is the fix: for each reaction, re-solve twice — minimizing and then maximizing that flux subject to holding the objective at its optimum — to get the range the reaction can take across all optima. Reactions with a wide FVA range are not predictions.

**The extensions, one line each.** *FVA* bounds each flux across the optimal face. *Gene deletion* sets the corresponding fluxes to zero and re-solves, predicting essentiality and — for pairs — synthetic lethality. *Dynamic FBA* runs a sequence of LPs while updating external metabolite concentrations with an ODE between solves, recovering the time course FBA alone cannot give.

**And the successes, stated carefully.** For *E. coli* on defined media, FBA predicts growth rate and by-product secretion well enough to be quantitatively useful, and it predicted acetate overflow before it was rationalized ([Worked example 2](#worked-examples)). Single-gene essentiality calls in *E. coli* and yeast come out roughly 80 to 90 percent correct against knockout libraries — genuinely useful for screening, and nowhere near reliable enough to trust an individual call. Both numbers depend on a well-curated network and a well-chosen medium; neither transfers to organisms whose metabolism has been reconstructed automatically.

## Picture

![On the left, a small metabolic network: uptake flux v-one feeds metabolite A, which branches into v-two toward B and v-three toward C, with B leaving as product via v-four and C leaving as biomass via v-five; the three mass balances are written underneath. On the right, the same feasible set projected onto the plane of the two branch fluxes, forming a right triangle whose slanted edge is the uptake bound drawn in red. The optimal vertex for maximizing biomass sits at the top corner, a green arrow shows the biomass gradient pointing straight up, and a dashed blue arrow shows the alternative objective whose gradient is normal to the red edge, making the entire edge optimal.](assets/04-02-fig1.svg)

## Worked examples

### Example 1 (the toy network, solved by hand)

Uptake $v_1: \varnothing \to A$ with $0 \le v_1 \le 10$; branch $v_2: A \to B$ and $v_3: A \to C$; outputs $v_4: B \to \text{product}$ and $v_5: C \to \text{biomass}$. All fluxes non-negative. **Maximize $v_5$.**

**Step 1 — mass balances.** One equation per internal metabolite: production minus consumption equals zero.

$$A:\; v_1 - v_2 - v_3 = 0, \qquad B:\; v_2 - v_4 = 0, \qquad C:\; v_3 - v_5 = 0.$$

In matrix form, with $\mathbf{v} = (v_1,v_2,v_3,v_4,v_5)^{\mathsf T}$ and rows ordered $A, B, C$:

$$S = \begin{pmatrix} 1 & -1 & -1 & 0 & 0 \\ 0 & 1 & 0 & -1 & 0 \\ 0 & 0 & 1 & 0 & -1 \end{pmatrix}.$$

**Step 2 — the null space, i.e. the degrees of freedom.** $S$ has 3 rows, evidently rank 3 (each row has a leading entry the others lack), so $\dim \ker S = 5 - 3 = 2$. Take $v_2$ and $v_3$ as the free variables; the balances then force

$$v_1 = v_2 + v_3, \qquad v_4 = v_2, \qquad v_5 = v_3.$$

**The five-dimensional problem is really two-dimensional.** Everything else is bookkeeping.

**Step 3 — the feasible region.** In the $(v_2, v_3)$ plane the constraints are $v_2 \ge 0$, $v_3 \ge 0$, and $v_1 = v_2 + v_3 \le 10$. That is a right triangle with vertices $(0,0)$, $(10,0)$, $(0,10)$ — the right panel of the figure. Lifted back to $\mathbb{R}^5$ its three vertices are

$$\mathbf{v}^{(0)} = (0,0,0,0,0), \qquad \mathbf{v}^{(B)} = (10,10,0,10,0), \qquad \mathbf{v}^{(C)} = (10,0,10,0,10).$$

**Step 4 — optimize.** The objective is $v_5 = v_3$, so push straight up the $v_3$ axis. The polytope ends at $(v_2,v_3) = (0,10)$:

$$\boxed{\;\mathbf{v}^* = (10,\,0,\,10,\,0,\,10), \qquad v_5^{\max} = 10.\;}$$

**Step 5 — which constraint binds?** Two are tight at the optimum: $v_2 \ge 0$ (the product branch is shut off) and $v_1 \le 10$ (the uptake cap). **The uptake bound is what sets the number 10.** The branch structure decides only *where* the carbon goes, not how much there is: raise the cap to 15 and the optimum becomes $v_5 = 15$ immediately. The shadow price of the uptake bound is therefore exactly 1 unit of biomass per unit of $A$ made available — and every other constraint has shadow price zero, because relaxing it changes nothing.

**This is the general shape of an FBA answer, and it is worth internalizing:** the objective value is set by a resource bound, and the network topology is what routes the resource to it. Beginners read the flux map; the useful reading is "what is binding, and what is it worth."

**Step 6 — change the objective.** Now maximize total output, $v_4 + v_5$. Substituting, $v_4 + v_5 = v_2 + v_3 = v_1$, so the objective is *literally the uptake flux*. Its optimum value is still 10, but the optimal *set* has changed: **every point on the slanted edge $v_2 + v_3 = 10$ achieves it.**

$$(v_2,v_3) = (10,0), \;(7,3),\; (4,6),\; (0,10) \; \text{are all optimal.}$$

Geometrically, the objective's gradient $(1,1)$ is normal to that edge, so the hyperplane leaves the polytope along a whole face instead of at a point (the red edge in the figure). **This is alternate optima in miniature**, and it is exactly what happens at genome scale. A solver would report one of those corners and say nothing about the others; FVA on this problem would return $v_2 \in [0,10]$ and $v_3 \in [0,10]$, correctly announcing that neither branch flux is predicted at all.

### Example 2 (why you'd care — FBA predicts acetate overflow)

A cell can burn glucose two ways. Respiration: $\text{glucose} + 6\,\text{O}_2 \to 30\,\text{ATP}$, at flux $v_r$. Fermentation: $\text{glucose} \to 2\,\text{ATP} + 2\,\text{acetate}$, at flux $v_f$. Glucose uptake is capped at $v_g \le 10$ and oxygen uptake at $v_o \le v_o^{\max}$, both in millimoles per gram dry weight per hour. Take ATP production as the biomass proxy and maximize it.

Balances: glucose, $v_g = v_r + v_f$; oxygen, $v_o = 6 v_r$. So the LP is

$$\max\; 30 v_r + 2 v_f \quad \text{s.t.} \quad v_r + v_f \le 10, \qquad 6 v_r \le v_o^{\max}, \qquad v_r, v_f \ge 0.$$

**Case (a): oxygen plentiful, $v_o^{\max} = 80$.** The oxygen constraint gives $v_r \le 13.3$, looser than the glucose constraint, so glucose alone binds. Since respiration yields 30 ATP per glucose against fermentation's 2, put everything through respiration:

$$v_r = 10, \quad v_f = 0, \quad \text{ATP} = 300, \quad v_o = 60 < 80 \;(\text{slack}).$$

**No acetate.** Shadow price of glucose: 30 ATP per millimole. Shadow price of oxygen: zero.

**Case (b): oxygen limited, $v_o^{\max} = 30$.** Now $v_r \le 5$, tighter than before. Respiration is capped at 5, and the remaining glucose has only one place to go:

$$v_r = 5, \quad v_f = 5, \quad \text{ATP} = 150 + 10 = 160, \quad \text{acetate secreted} = 10.$$

**Both constraints bind, and the model spontaneously secretes a partly oxidized carbon compound into the medium.** Nobody told it to. It looks wasteful — 10 millimoles of acetate per hour walking out the door carrying most of the carbon's free energy — and it is optimal anyway, because ATP per *hour* is what matters and the oxygen ceiling makes the efficient route unavailable at the margin.

**The shadow prices are the interesting part.** Relax glucose by one unit: the extra can only be fermented, so ATP rises by 2. Relax oxygen by one unit: $v_r$ rises by $1/6$ and that much glucose moves from fermentation to respiration, so ATP rises by $(30-2)/6 = 4.67$.

$$\text{glucose: } 30 \to 2, \qquad \text{oxygen: } 0 \to 4.67 .$$

**The value of a nutrient is not a property of the nutrient.** Under aeration, glucose is worth 30 and oxygen is free; under oxygen limitation, glucose collapses to 2 and oxygen becomes the thing worth paying for. A wet-lab intervention that adds glucose in case (b) buys almost nothing, and the LP tells you so before you run it.

Historically this is the method's calling card: Varma and Palsson used an oxygen uptake bound in a genome-scale *E. coli* model and got acetate secretion and growth yields out, matching chemostat data, from stoichiometry and two measured bounds. **The caveat:** *E. coli* also excretes acetate at high growth rates with oxygen to spare, and this toy will never reproduce that. Explaining aerobic overflow needs a further constraint — limited respiratory capacity, or a proteome-allocation budget — which is a live and productive line of work, and a good example of a wrong FBA prediction being informative about the missing constraint.

## Watch out

- **You might read an FBA flux map as a measurement.** It is the output of an optimization whose objective you chose. Two objectives on the same network give different maps (Example 1, step 6), and only one of them can correspond to the organism — possibly neither.
- **You might report a unique optimal flux vector.** Alternate optima are ubiquitous, and the solver's choice among them is an artifact of its pivoting rule, not biology. **Run FVA before you believe any individual flux**; a reaction with a wide feasible range at optimum has not been predicted.
- **You might expect FBA to say something about concentrations or regulation.** It cannot. $S\mathbf{v}=0$ constrains rates, not levels, and there is no transcription in the model — FBA will route flux through a pathway the cell has silenced.
- **You might think a large optimal growth rate means the cell will grow that fast.** It means nothing is *stoichiometrically forbidding* it. Kinetics, regulation, and unmodelled costs all live outside the LP.
- **You might treat the biomass reaction as chemistry.** It is measured composition written as a pseudo-reaction, with fractional coefficients and an ATP maintenance term that is fitted. It is the single most consequential empirical input in the model.
- **You might assume the uptake bound is a modelling detail.** It is usually *the* binding constraint, so the number you type there propagates almost linearly into the growth rate you report (Example 1, step 5). An FBA growth prediction is frequently a restatement of the uptake measurement.

## One-liner

> FBA turns the underdetermined mass balance $S\mathbf{v}=0$ into a number by bounding the fluxes and asserting an objective — so the optimum sits at a vertex, the answer is set by whichever constraint binds, and everything the method knows about the organism is hiding in the objective vector you chose.

## Problems

**P1 (🟢)** A cell takes up $A$ via $v_1: \varnothing \to A$ with $0 \le v_1 \le 8$; converts it via $v_2: A \to B$; loses some to a non-growth maintenance drain $v_3: A \to \varnothing$ which is required to run at $v_3 \ge 2$; and makes biomass via $v_4: B \to \text{biomass}$. All fluxes non-negative. (a) Write the mass balances and find the flux vector maximizing $v_4$. (b) Name every binding constraint. (c) What is the shadow price of the maintenance requirement, and what does its sign mean?

**P2 (🟡)** Biomass now needs both branches of the Example 1 network in fixed proportion. Reactions: $v_1: \varnothing \to A$ with $0 \le v_1 \le 10$; $v_2: A \to B$; $v_3: A \to C$; and $v_4: B + 2C \to \text{biomass}$. (a) Write the mass balances and maximize $v_4$; give the optimal flux vector and the binding constraint. (b) The enzyme catalysing $v_3$ is capacity-limited to $v_3 \le 5$. Re-solve. Which constraint binds now, and what happened to $v_1$? (c) Part (b) has the cell taking up less nutrient than it is offered. Is that biologically sensible, and what would you add to the model?

**P3 (🔴, bridges to `operations-research` duality)** A network has uptake $v_1: \varnothing \to A$ with $0 \le v_1 \le 10$, two alternative routes from $A$ to $C$ — an efficient one $v_2: A \to C$ and a wasteful one $v_3: 2A \to C$ — and biomass $v_4: C \to \text{biomass}$. All fluxes non-negative. (a) Write the balances and maximize $v_4$. (b) Predict the growth phenotype of three knockouts: delete $v_2$; delete $v_3$; delete both. Which pair is *synthetically lethal*? (c) Give the shadow price of the uptake bound for the wild type and for the $v_2$ deletion, and interpret the change. (d) One of your single-deletion predictions is the kind FBA gets wrong in practice. Which, and why?

<details>
<summary>Solutions</summary>

**P1 (a)** Two internal metabolites, so two balances:

$$A:\; v_1 - v_2 - v_3 = 0, \qquad B:\; v_2 - v_4 = 0.$$

Hence $v_4 = v_2 = v_1 - v_3$. To maximize, take $v_1$ as large as allowed and $v_3$ as small as allowed:

$$v_1 = 8, \quad v_3 = 2 \;\Longrightarrow\; v_2 = v_4 = 6.$$

$$\boxed{\;\mathbf{v}^* = (8,\,6,\,2,\,6), \qquad v_4^{\max} = 6.\;}$$

**(b)** Both bounds on the "outside" reactions are tight: the **upper** bound $v_1 \le 8$ and the **lower** bound $v_3 \ge 2$. Nothing else binds.

**(c)** Increase the maintenance requirement to $v_3 \ge 3$ and the optimum becomes $v_4 = 5$: the shadow price is $\mathbf{-1}$ unit of biomass per unit of maintenance flux. **The negative sign is the point** — a lower bound that forces flux away from the objective has a negative dual. Maintenance is a tax on growth, and in real genome-scale models the fitted ATP-maintenance flux is exactly this: a constraint whose only job is to make the predicted growth rate lower, and more correct.

**P2 (a)** Balances, remembering the coefficient 2 on $C$:

$$A:\; v_1 - v_2 - v_3 = 0, \qquad B:\; v_2 - v_4 = 0, \qquad C:\; v_3 - 2v_4 = 0.$$

So $v_2 = v_4$ and $v_3 = 2v_4$, giving $v_1 = v_2 + v_3 = 3v_4$. With $v_1 \le 10$:

$$v_4 \le \tfrac{10}{3} \;\Longrightarrow\; \boxed{\;\mathbf{v}^* = \left(10,\ \tfrac{10}{3},\ \tfrac{20}{3},\ \tfrac{10}{3}\right), \quad v_4^{\max} = 3.33.\;}$$

The **uptake bound** binds. Note that the branch ratio is no longer a choice — the biomass stoichiometry fixes $v_3/v_2 = 2$, so the two-dimensional freedom of Example 1 has collapsed to one dimension. **Demand stoichiometry, not optimization, picked the split.**

**(b)** Now $v_3 = 2v_4 \le 5$ gives $v_4 \le 2.5$, which is tighter than the uptake bound's $3.33$. So

$$v_4 = 2.5, \quad v_3 = 5, \quad v_2 = 2.5, \quad v_1 = 7.5.$$

The **capacity bound $v_3 \le 5$** binds; the uptake bound is now **slack** ($7.5 < 10$) and its shadow price has dropped to zero. The shadow price of the $v_3$ cap is $0.5$ biomass per unit. **Adding nutrient would now buy nothing** — same inversion of value as Example 2's shadow prices.

**(c)** Not sensible as stated. A real cell facing a downstream bottleneck does not politely stop importing; it keeps taking up substrate and disposes of the surplus — secreting overflow products, or burning carbon in futile cycles. The model forces $v_1$ down only because it has **no route for excess $A$**.

**The fix is a boundary choice, not a new mechanism:** add an exchange reaction $v_5: A \to \varnothing$ (secretion) as in [4.1](04-01-metabolic-networks-stoichiometry.md). Then $v_1 = 10$, $v_5 = 2.5$, and $v_4$ is still $2.5$ — the growth prediction is unchanged, but the model now predicts a secreted by-product you could go and measure. **Which reactions you put at the system boundary decides which predictions the model is even capable of making.**

**P3 (a)** Balances:

$$A:\; v_1 - v_2 - 2v_3 = 0, \qquad C:\; v_2 + v_3 - v_4 = 0.$$

So $v_4 = v_2 + v_3$ subject to $v_2 + 2v_3 = v_1 \le 10$. Each unit of $v_2$ costs one $A$ and each unit of $v_3$ costs two $A$ for the same one $C$, so all carbon should go the efficient way:

$$\boxed{\;\mathbf{v}^* = (10,\,10,\,0,\,10), \qquad v_4^{\max} = 10.\;}$$

**(b)**

| Deletion | Constraint added | Optimum | Phenotype |
|---|---|---|---|
| $\Delta v_2$ | $v_2 = 0$ | $2v_3 \le 10 \Rightarrow v_3 = 5$, $v_4 = 5$ | **impaired**, growth halved |
| $\Delta v_3$ | $v_3 = 0$ | $v_2 = 10$, $v_4 = 10$ | **no effect** |
| both | $v_2 = v_3 = 0$ | $v_4 = 0$ | **lethal** |

The pair $(v_2, v_3)$ is **synthetically lethal**: neither deletion alone abolishes growth, and together they do. This is the mechanism behind FBA's most practically valuable output — screening double knockouts *in silico* is cheap, and a synthetic-lethal pair in a pathogen is a candidate drug-target combination.

**(c)** Wild type: one extra unit of $A$ goes through the efficient route and yields one extra biomass, so the shadow price is $\mathbf{1}$. In $\Delta v_2$: one extra unit of $A$ can only go through the wasteful route, which needs two $A$ per $C$, so the shadow price is $\mathbf{0.5}$.

**The dual variable halved without any constraint changing** — it fell because the *network* lost its efficient route. Reading this as [operations-research 2.2](../../operations-research/lessons/02-02-shadow-prices-sensitivity.md) would: the shadow price is the marginal value of the resource *given the current optimal basis*, and a knockout changes the basis. Biologically it is the **yield coefficient** — biomass produced per substrate consumed — which is exactly what a chemostat measures, so this dual variable is directly falsifiable.

**(d)** The $\Delta v_3$ prediction — "no effect" — is the suspect one, and it is the standard failure mode of FBA essentiality calls. The LP declares $v_3$ non-essential because it carries zero flux at the optimum, but a reaction can be dispensable in one medium and essential in another, or maintained as a backup that only carries flux under stress. More generally, FBA sees only stoichiometric essentiality: it will call a gene non-essential whenever *some* alternative route exists, even when regulation would never open that route in a real cell. That asymmetry — **FBA under-predicts essentiality, and its false "non-essential" calls outnumber its false "essential" ones** — is why the 80 to 90 percent accuracy figure needs reading carefully before you trust one gene's call.

</details>

## Flashback

**From Lesson 4.1 (metabolic networks & stoichiometric modeling):** A cell runs the following four reactions, with $\text{NAD}$ and $\text{NADH}$ treated as internal metabolites:

$$v_1:\ \varnothing \to A, \qquad v_2:\ A + \text{NAD} \to B + \text{NADH}, \qquad v_3:\ B \to \varnothing, \qquad v_4:\ \text{NADH} \to \text{NAD}.$$

(a) Write $S$ with rows ordered $A, B, \text{NAD}, \text{NADH}$ and find its rank. (b) Compute the null space of $S$ and interpret a basis vector. (c) Compute the **left** null space and state the conservation law it encodes. (d) What does the null-space dimension tell you about whether this network needs an objective function at all?

<details>
<summary>Solution</summary>

**(a)** One column per reaction, one row per metabolite:

$$S = \begin{pmatrix} 1 & -1 & 0 & 0 \\ 0 & 1 & -1 & 0 \\ 0 & -1 & 0 & 1 \\ 0 & 1 & 0 & -1 \end{pmatrix} \begin{matrix} A \\ B \\ \text{NAD} \\ \text{NADH} \end{matrix}$$

Row 4 is exactly $-1$ times row 3, so the rows are dependent and $\operatorname{rank} S \le 3$. Rows 1, 2, 3 are independent (each has a leading nonzero in a column where the earlier ones vanish), so $\operatorname{rank} S = \mathbf{3}$.

**(b)** Solve $S\mathbf{v} = 0$ row by row:

$$A:\ v_1 = v_2, \qquad B:\ v_2 = v_3, \qquad \text{NAD}:\ v_4 = v_2 .$$

(The NADH row repeats the NAD row — that is the dependence from (a).) So $v_1 = v_2 = v_3 = v_4$ and

$$\ker S = \operatorname{span}\{(1,1,1,1)^{\mathsf T}\}, \qquad \dim \ker S = 4 - 3 = 1 \;\checkmark$$

**Interpretation: there is exactly one pathway.** Substrate in, oxidized to $B$ with reduction of $\text{NAD}$, $B$ secreted, and the cofactor re-oxidized — all four steps carrying equal flux. **The oxidase step is not optional**: it is forced to match the dehydrogenase, because the cofactor cannot accumulate at steady state. That is the general and non-obvious lesson of cofactor balancing — **treating $\text{NAD}$ as internal is what couples two reactions that share no carbon atom.**

**(c)** The left null space solves $\mathbf{w}^{\mathsf T} S = 0$, one equation per column:

$$v_1:\ w_A = 0, \quad v_3:\ -w_B = 0, \quad v_4:\ w_{\text{NAD}} - w_{\text{NADH}} = 0,$$

and the $v_2$ column, $-w_A + w_B - w_{\text{NAD}} + w_{\text{NADH}} = 0$, is then automatically satisfied. So

$$\mathbf{w} = (0,0,1,1)^{\mathsf T}, \qquad \dim = 4 - \operatorname{rank} S = 1 \;\checkmark$$

$$\text{Conservation law:}\quad [\text{NAD}] + [\text{NADH}] = \text{constant}.$$

**The conserved moiety is the cofactor pool**, and it is conserved because no reaction in the list makes or destroys the adenine dinucleotide skeleton — only shuffles its redox state ([linalg-refresher 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) for the four subspaces; the same left-null-space argument as total enzyme in [1.2](01-02-mass-action-rate-odes.md)).

**(d)** $\dim \ker S = 1$, so once you fix the scale — say $v_1 = 10$ from a measured uptake rate — **the entire flux distribution is determined.** There is nothing left to optimize: no objective, no LP, no biomass assumption. Optimization is only needed when the null space has dimension greater than one, which is why the genome-scale case (dimension in the hundreds) is the interesting one and this one is not. Add a single competing reaction — say $v_5: A \to \varnothing$ — and the dimension jumps to 2, a choice appears, and 4.2's machinery becomes necessary.

</details>

## Connections

- **Backward:** [4.1](04-01-metabolic-networks-stoichiometry.md) built $S$ and the constraint $S\mathbf{v}=0$; this lesson supplies the bounds and objective that turn its null space into a single point. The stoichiometric matrix itself, and the left-null-space conservation argument reused in the flashback, came from [1.2](01-02-mass-action-rate-odes.md).
- **Forward:** [4.3](04-03-stochastic-gene-expression.md) attacks the opposite failure of the deterministic picture — not "too many solutions" but "the concentrations are random variables". Note the contrast: FBA is a model with no parameters and no dynamics; 4.3's master equation is all dynamics and no optimization.
- **Sideways (the LP):** this is [operations-research 1.1](../../operations-research/lessons/01-01-formulating-linear-programs.md) verbatim, with the vertex result from [1.2](../../operations-research/lessons/01-02-vertices-bases-fundamental-theorem.md), simplex from [1.3](../../operations-research/lessons/01-03-the-simplex-method.md), the alternate-optima and degeneracy story from [1.4](../../operations-research/lessons/01-04-initialization-degeneracy-cycling.md), and the shadow prices from [2.2](../../operations-research/lessons/02-02-shadow-prices-sensitivity.md). The duality that makes shadow prices meaningful is [convex-optimization 3.1](../../convex-optimization/lessons/03-01-lagrangian-dual-function.md) and [3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md) — complementary slackness is precisely the statement that a slack constraint has zero shadow price, which is why FBA's answer is "read what binds".
- **Sideways (the biology):** the pathways being balanced are [biochemistry 3.2](../../biochemistry/lessons/03-02-glycolysis.md) and [3.4](../../biochemistry/lessons/03-04-oxidative-phosphorylation.md), and the ATP-per-glucose numbers in Example 2 come straight from there. The regulation FBA omits is [biochemistry 2.4](../../biochemistry/lessons/02-04-allosteric-regulation-metabolic-control.md); the growth-rate optimality it assumes is selection in a chemostat, i.e. [evolution-ecology 1.1](../../evolution-ecology/lessons/01-01-fitness-quantitative.md).

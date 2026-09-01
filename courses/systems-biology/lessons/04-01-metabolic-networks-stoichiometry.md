# Systems Biology · Lesson 4.1: Metabolic networks & stoichiometric modeling

> ⏱ ~15 min · Module 4: Metabolic networks, noise & spatial pattern · Builds on: [3.4](03-04-oscillations-repressilator-hopf.md), [1.2](01-02-mass-action-rate-odes.md) · Unlocks: 4.2 (flux-balance analysis)

## Why this matters

Everything in Modules 1–3 was built on rate constants. The repressilator of [3.4](03-04-oscillations-repressilator-hopf.md) needed $\beta$, $\alpha$, $K$ and $n$; the toggle needed a critical $\alpha$. That works because those circuits have five or ten parameters and someone has measured most of them.

**Now try it on metabolism.** *E. coli*'s reconstructed metabolic network has on the order of 2,000 reactions over roughly 1,100 metabolites. Writing $\dot{\mathbf{x}} = S\mathbf{v}(\mathbf{x})$ for that system would require several thousand kinetic parameters — $k_{cat}$, $K_M$, and an allosteric regulation term for every enzyme, most of them measured *in vitro* on purified protein at concentrations nothing like the cytoplasm, and thousands of them never measured at all. **The parameters are not merely unknown; for a genome-scale network they are unmeasurable in practice.**

So the field made a deliberate and rather radical move: **give up the kinetics entirely and keep only the stoichiometry.** Stoichiometry is the one thing known *exactly* — it follows from the balanced chemical equation, and glucose has six carbons no matter what the enzyme is doing. The question this module answers is therefore an epistemic one worth taking seriously:

> **What can you conclude about a network when you have its structure and no parameters at all?**

The answer turns out to be: a surprising amount — including which genes are essential — and this lesson is where the machinery gets built.

## The idea

Two observations, and the whole method falls out.

**First: internal metabolites are at quasi-steady state.** A glycolytic intermediate pool in *E. coli* turns over in well under a second; the ATP pool turns over in about a second. The cell divides every 20 to 60 minutes. That is roughly **three orders of magnitude of timescale separation**, which is exactly the modelling move from [1.1](01-01-systems-view-of-the-cell.md): on the slow (growth) timescale, the fast variables sit at their quasi-steady values. So for every internal metabolite, **production balances consumption**.

**Second: that statement is linear in the fluxes.** Whatever complicated function of concentrations each rate happens to be, at steady state $\dot{\mathbf{x}} = S\mathbf{v} = 0$ — and if you refuse to write $\mathbf{v}$ as a function of $\mathbf{x}$ and instead treat $\mathbf{v}$ as an *unknown vector in its own right*, the parameters disappear. You are left with a homogeneous linear system.

$$\boxed{\;S\mathbf{v} = 0\;}$$

**That is the trade, and it should feel like a real loss as well as a gain.** You give up all dynamics, all concentrations, and all regulation. You get, in exchange, a problem that is exactly solvable at genome scale with linear algebra, from data (reaction chemistry) that is actually reliable.

**And here is the payoff sentence for the lesson:** the set of steady-state flux distributions is the **null space of $S$**. A "pathway" — glycolysis, the pentose phosphate shunt, the sketch on a wall chart with arrows on it — stops being a picture and becomes a *vector in that null space*. Two pathways run simultaneously? Add the vectors. A pathway carrying twice the flux? Scale the vector. **The wall chart was linear algebra all along.**

The catch, which sets up [4.2](04-02-flux-balance-analysis.md): the null space is usually enormous. Mass balance constrains the fluxes but nowhere near determines them.

## The formal version

**The setup, scaled up from [1.2](01-02-mass-action-rate-odes.md).** Let $\mathbf{x} \in \mathbb{R}^{m}$ be the concentrations of the $m$ **internal** metabolites and $\mathbf{v} \in \mathbb{R}^{n}$ the rates (fluxes) of the $n$ reactions. The **stoichiometric matrix** $S \in \mathbb{R}^{m \times n}$ has entry $S_{ij}$ equal to the stoichiometric coefficient of metabolite $i$ in reaction $j$ — negative if consumed, positive if produced, zero if uninvolved. Then

$$\dot{\mathbf{x}} = S\,\mathbf{v}(\mathbf{x}).$$

*In words: exactly the object from 1.2, except that now $m \approx 10^3$ and $n \approx 2\times10^3$, and column $j$ of $S$ is just reaction $j$'s balanced equation written as a vector.*

**The steady-state constraint.**

$$S\mathbf{v} = 0.$$

*In words: for every internal metabolite, total production rate equals total consumption rate.*

Three things to be precise about, because each is a place people go wrong:

1. **This is a statement about fluxes, not concentrations.** It says the *rates* balance. It tells you nothing whatever about how much of any metabolite is present.
2. **It is not equilibrium.** [1.2](01-02-mass-action-rate-odes.md) drew this line and it matters more here than anywhere: at equilibrium every reaction is individually balanced and all net fluxes are zero. At steady state, *material flows through* — glucose in, biomass and acetate out — with every internal pool constant. A living cell is the second thing, never the first.
3. **We have dropped the dependence $\mathbf{v}(\mathbf{x})$.** That is the entire trick, and it is why the parameters vanished.

**The solution space.** By rank–nullity ([linalg-refresher 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md)),

$$\{\mathbf{v} : S\mathbf{v} = 0\} = \operatorname{null}(S), \qquad \dim \operatorname{null}(S) = n - \operatorname{rank}(S).$$

*In words: the number of independent ways the network can run at steady state equals the number of reactions minus the number of independent mass balances.*

**And $n \gg m$ for real networks**, so the null space is large — hundreds to over a thousand dimensions at genome scale. Mass balance alone leaves that many degrees of freedom. **This is precisely why [4.2](04-02-flux-balance-analysis.md) has to add bounds and an objective: without them the model does not predict anything, it merely restricts.**

**Exchange reactions and the system boundary.** A metabolite the cell takes up or secretes cannot be balanced by internal reactions alone. The fix is a **pseudo-reaction** with a single nonzero entry — $\varnothing \to A$ for uptake, $B \to \varnothing$ for secretion — which represents transport across the boundary. Two consequences:

- **Deciding what is internal is a modelling choice with real consequences.** Declare a metabolite external and you have silently granted the cell an infinite source and sink for it; declare it internal and you have imposed a balance the cell must satisfy. Half the sins in constraint-based modelling are boundary sins.
- Biomass production is handled the same way: a single lumped **biomass reaction** drains precursors — amino acids, nucleotides, lipids, ATP — in measured proportions. It is a pseudo-reaction standing in for growth.

**Reversibility as sign constraints.** Each reaction is written in a chosen direction. An irreversible one gets $v_j \ge 0$; a reversible one is either allowed both signs or split into two irreversible halves. Adding $\mathbf{v} \ge 0$ turns the null space (a subspace) into

$$\mathcal{C} = \{\mathbf{v} : S\mathbf{v} = 0,\; \mathbf{v}\ge 0\},$$

a **polyhedral cone** — closed under addition and under scaling by positive numbers, but not under negation. Its extreme rays are the **elementary flux modes**: minimal routes that cannot be decomposed into smaller steady-state routes. **This is the honest definition of "a pathway."**

**Conservation relations, revisited.** [1.2](01-02-mass-action-rate-odes.md) got conserved moieties from the **left** null space: any $\mathbf{w}$ with $\mathbf{w}^{T}S = 0$ gives $\frac{d}{dt}(\mathbf{w}^{T}\mathbf{x}) = 0$. That still holds, but **open systems usually have a trivial left null space** — every exchange reaction contributes a column with one nonzero entry, which forces that metabolite's weight to zero. The relations that survive are the ones among species that never cross the boundary: **cofactor pools** like $\text{ATP}+\text{ADP}+\text{AMP}$ and $\text{NAD}^{+}+\text{NADH}$. Those pools are conserved, they are small, and they couple hundreds of otherwise unrelated reactions — which is why cofactor balance is the sharpest constraint in a genome-scale model. You will see it bite in Example 2 and again in P3.

**What stoichiometry cannot tell you.** Nothing about concentrations. Nothing about regulation — a reaction can be structurally available and transcriptionally silent. Nothing about dynamics, timescales, transients, or stability. The entire content of Modules 1–3 has been deliberately discarded, and knowing exactly what was discarded is part of using the method honestly.

## Picture

![A small metabolic network drawn as a graph — uptake into A, then A to B, B to C, a bypass arrow from A directly to C, secretion out of B, and a biomass drain out of C — shown above its stoichiometric matrix written as a labelled array with three metabolite rows and six reaction columns. The four columns belonging to the main route are shaded, and beneath the array the matrix acting on that flux vector is computed row by row and comes out zero for every metabolite, showing that a pathway is a null-space vector.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — build $S$, find the null space, read off the pathways).** Take the network in the figure: uptake $v_1: \varnothing \to A$; $v_2: A\to B$; $v_3: B \to C$; a bypass $v_4: A \to C$; a biomass drain $v_5: C \to \varnothing$; and an overflow secretion $v_6: B \to \varnothing$. Internal metabolites are $A, B, C$. Find $\operatorname{null}(S)$, its dimension, and interpret a basis.

**Step 1 — write $S$.** Rows $A,B,C$; columns $v_1,\dots,v_6$:

$$S = \begin{pmatrix} +1 & -1 & 0 & -1 & 0 & 0 \\ 0 & +1 & -1 & 0 & 0 & -1 \\ 0 & 0 & +1 & +1 & -1 & 0 \end{pmatrix}$$

**Step 2 — write the balances.** $S\mathbf{v}=0$ is one equation per row:

$$\text{(A)}\;\; v_1 - v_2 - v_4 = 0, \qquad \text{(B)}\;\; v_2 - v_3 - v_6 = 0, \qquad \text{(C)}\;\; v_3 + v_4 - v_5 = 0.$$

**Step 3 — dimension.** Columns $v_1, v_5, v_6$ are $(1,0,0)^T$, $(0,0,-1)^T$, $(0,-1,0)^T$, which are independent, so $\operatorname{rank}(S)=3$ and

$$\dim\operatorname{null}(S) = n - \operatorname{rank}(S) = 6 - 3 = \mathbf{3}.$$

**Step 4 — solve.** Take $v_3, v_4, v_6$ as free and back-substitute: (B) gives $v_2 = v_3+v_6$, then (A) gives $v_1 = v_3+v_4+v_6$, and (C) gives $v_5 = v_3+v_4$. Setting each free variable to 1 in turn:

| basis vector $(v_1,\dots,v_6)$ | route | reads as |
|---|---|---|
| $(1,1,1,0,1,0)$ | $\varnothing \to A \to B \to C \to$ biomass | **the main pathway** |
| $(1,0,0,1,1,0)$ | $\varnothing \to A \to C \to$ biomass | **the bypass** |
| $(1,1,0,0,0,1)$ | $\varnothing \to A \to B \to$ secreted | **overflow** |

**Step 5 — verify one.** For $\mathbf{v}=(1,1,1,0,1,0)$: row A gives $+1-1-0=0$; row B gives $+1-1-0=0$; row C gives $+1+0-1=0$. Balanced.

**Three things to take from this.** (i) Every basis vector came out **non-negative**, so all three are legitimate routes in the flux cone — they are the elementary flux modes. (ii) The general steady state is $c_1(1,1,1,0,1,0)+c_2(1,0,0,1,1,0)+c_3(1,1,0,0,0,1)$ with $c_i\ge 0$: **a mixture of pathways, which is what a real cell runs.** (iii) Six reactions and three degrees of freedom already; scale that ratio to 2,000 reactions and you see why an objective function becomes unavoidable.

**Example 2 (why you'd care — cofactor balance turns structure into a gene-essentiality prediction).** Now add the chemistry that the arrows were hiding. Suppose $v_2$ ($A\to B$) is a substrate-level phosphorylation producing **2 ATP**, $v_3$ ($B \to C$) consumes **1 ATP**, and the cell has a **maintenance demand** $v_7$: a drain of ATP for turning over proteins, pumping ions, and staying alive, with $v_7 \ge v_{\min} > 0$. Treat ATP as a fourth internal metabolite.

**The new row** is $2v_2 - v_3 - v_7 = 0$, i.e. ATP produced equals ATP consumed. We now have $n=7$, $m=4$, and $\operatorname{rank}(S)=4$ (add column $v_7=(0,0,0,-1)^T$ to the three from before), so $\dim\operatorname{null}(S) = 7-4 = 3$ — same three routes, each now carrying its own ATP bookkeeping:

| route | $v_7$ = ATP made per unit uptake | biomass $v_5$ per unit uptake |
|---|---|---|
| main $(1,1,1,0,1,0)$ | $2(1)-1 = \mathbf{1}$ | $1$ |
| bypass $(1,0,0,1,1,0)$ | $2(0)-0 = \mathbf{0}$ | $1$ |
| overflow $(1,1,0,0,0,1)$ | $2(1)-0 = \mathbf{2}$ | $0$ |

**Read the table and two real results fall out.**

**(a) A structural essentiality prediction.** Rearranged, the ATP row says $v_7 = 2v_2 - v_3$. Since $v_3\ge 0$, having $v_7 > 0$ *requires* $v_2 > 0$. So:

$$\boxed{\;\text{if } v_2 = 0 \text{ then } v_7 \le 0, \text{ so } v_7 = 0 \text{ — no maintenance ATP, no viability.}\;}$$

**Knock out the gene encoding the $v_2$ enzyme and the cell dies — and we concluded that from stoichiometry alone, with not a single rate constant anywhere.** This is exactly the logic behind genome-scale gene-essentiality prediction, which [4.2](04-02-flux-balance-analysis.md) does at scale and which is one of the method's genuine successes.

**(b) A trade-off that stoichiometry poses but cannot resolve.** Overflow makes the most ATP per unit uptake and *zero* biomass; the bypass makes biomass and no ATP; the main route does both, moderately. **This is the actual shape of overflow metabolism** — *E. coli* secreting acetate, and cancer cells secreting lactate through the Warburg effect, both "wasting" carbon in exchange for faster ATP production.

Note carefully what has and has not happened. Structure alone **rules out** the pure-bypass solution once $v_{\min}>0$, and **rules out** any $v_2$ knockout. Structure alone cannot tell you *which* mixture of the surviving routes the cell picks: that requires an assumption about what the cell is doing well, and that assumption is the objective function of [4.2](04-02-flux-balance-analysis.md).

## Watch out

- **You might read $S\mathbf{v}=0$ as equilibrium.** It is the opposite: a steady state with flux flowing through. Equilibrium means every reaction individually balanced and every net flux zero, which is death. [1.2](01-02-mass-action-rate-odes.md) made this distinction; here it is the entire premise.
- **You might think a flux vector tells you about concentrations.** It does not, in either direction. Two cells with the same flux distribution can have wildly different metabolite pools, and stoichiometric models are silent about which.
- **You might treat any null-space basis vector as a pathway.** Only vectors that also satisfy the sign constraints $\mathbf{v}\ge 0$ are biologically realizable; a basis computed by generic elimination will happily hand you negative flux through an irreversible reaction. **Pathways live in the cone, not the subspace.**
- **You might expect the null space to name the pathways for you.** It has a basis, not a canonical one — the "pathways" in Example 1 were readable only because the network was small. The elementary flux modes *are* canonical but their number grows combinatorially, which is why nobody enumerates them at genome scale.
- **You might expect conservation laws to reduce the problem as they did in [1.2](01-02-mass-action-rate-odes.md).** In an open model the left null space is usually trivial — exchange reactions destroy the moieties. What survives is the cofactor pools, and they are constraints, not simplifications.
- **You might forget that structure permits more than regulation allows.** A reaction present in $S$ is a reaction the genome *can* run. Whether the gene is transcribed under the conditions you care about is a question Modules 2 and 3 answer and this method cannot even ask.

## One-liner

> When you cannot measure the parameters, throw them away: impose only that every internal metabolite balances, and the steady states become the null space of $S$ — so a pathway is literally a null-space vector, and the null space is far too big, which is why the next lesson needs an objective.

## Problems

**P1 (🟢)** A toy metabolism has $v_1: \varnothing \to X$, $v_2: X \to Y$, $v_3: X \to Z$, $v_4: Y \to \varnothing$, $v_5: Z \to \varnothing$, with internal metabolites $X, Y, Z$. (a) Write $S$. (b) Write the three mass balances and find $\dim\operatorname{null}(S)$. (c) Give a basis and interpret each vector. (d) If uptake is measured to be $v_1 = 10$, how many degrees of freedom remain, and what does the remaining freedom correspond to biologically?

**P2 (🟡)** A network has $v_1: \varnothing \to A$, $v_2: A \to B$, $v_3: B \to A$, $v_4: B \to \varnothing$, all irreversible, with internal metabolites $A, B$. (a) Write $S$ and find $\dim\operatorname{null}(S)$. (b) Find a basis, and identify the basis vector that carries **zero** flux through both exchange reactions. What is it, physically? (c) Explain why $S\mathbf{v}=0$ with $\mathbf{v}\ge 0$ cannot exclude it, what physical law does exclude it, and what problem this creates for anyone reporting "the" optimal flux vector.

**P3 (🔴, bridges to biochemistry and to the LP of 4.2)** Anaerobic fermentation. Lump glycolysis as $v_g:\ \text{glucose} \to 2\,\text{pyruvate} + 2\,\text{NADH} + 2\,\text{ATP}$. Pyruvate has three fates: $v_l:\ \text{pyruvate} + \text{NADH} \to \text{lactate}$; $v_e:\ \text{pyruvate} + \text{NADH} \to \text{ethanol} + \text{CO}_2$; and $v_a:\ \text{pyruvate} \to \text{acetate} + \text{CO}_2 + \text{ATP}$. Lactate, ethanol, acetate and $\text{CO}_2$ are secreted; there is no respiration, so **NADH must be reoxidized inside the network**. All fluxes are non-negative. (a) Write the steady-state balances for pyruvate and for NADH. (b) Show that $v_a = 0$ is forced. (c) Given (b), compute the ATP yield per glucose. (d) The acetate route is the only one that makes extra ATP, and stoichiometry has just forbidden it. What would have to be added to the network for the cell to make acetate at all?

<details>
<summary>Solutions</summary>

**P1 (a)** Rows $X,Y,Z$; columns $v_1,\dots,v_5$:

$$S = \begin{pmatrix} +1 & -1 & -1 & 0 & 0 \\ 0 & +1 & 0 & -1 & 0 \\ 0 & 0 & +1 & 0 & -1 \end{pmatrix}$$

**(b)** The balances are

$$v_1 - v_2 - v_3 = 0, \qquad v_2 - v_4 = 0, \qquad v_3 - v_5 = 0.$$

Columns $v_1, v_4, v_5$ are $(1,0,0)^T, (0,-1,0)^T, (0,0,-1)^T$ — independent — so $\operatorname{rank}(S) = 3$ and

$$\dim\operatorname{null}(S) = 5 - 3 = \mathbf{2}.$$

**(c)** Take $v_2, v_3$ free: $v_4 = v_2$, $v_5 = v_3$, $v_1 = v_2+v_3$. A basis:

$$\mathbf{p}_1 = (1,1,0,1,0), \qquad \mathbf{p}_2 = (1,0,1,0,1).$$

$\mathbf{p}_1$ is "take up $X$, send all of it down the $Y$ branch, secrete"; $\mathbf{p}_2$ is the same through the $Z$ branch. Both are non-negative, so both are elementary flux modes, and the general steady state $c_1\mathbf{p}_1 + c_2\mathbf{p}_2$ with $c_i \ge 0$ is any split of the uptake between the two branches.

**(d)** Fixing $v_1 = 10$ imposes one further independent linear equation, leaving $2 - 1 = \mathbf{1}$ degree of freedom. The solution set is the segment $\mathbf{v} = c_1\mathbf{p}_1 + c_2\mathbf{p}_2$ with $c_1 + c_2 = 10$, $c_i\ge 0$ — a one-parameter family.

**Biologically, the remaining freedom is the branch split at $X$: what fraction of uptake goes to $Y$ versus $Z$.** Measuring uptake pins the *scale* of metabolism and says nothing about its *distribution*. This is the whole predicament of [4.2](04-02-flux-balance-analysis.md) in miniature: measurements shrink the space, they do not collapse it, and you need an optimization principle to pick a point.

**P2 (a)** Rows $A,B$; columns $v_1,\dots,v_4$:

$$S = \begin{pmatrix} +1 & -1 & +1 & 0 \\ 0 & +1 & -1 & -1 \end{pmatrix}$$

Rank is 2 (columns $v_1$ and $v_4$ are $(1,0)^T$ and $(0,-1)^T$), so $\dim\operatorname{null}(S) = 4-2 = \mathbf{2}$.

**(b)** The balances are $v_1 - v_2 + v_3 = 0$ and $v_2 - v_3 - v_4 = 0$. Taking $v_3, v_4$ free: $v_2 = v_3+v_4$ and $v_1 = v_2 - v_3 = v_4$. A basis:

$$\mathbf{t} = (1,1,0,1) \quad (v_4=1), \qquad \mathbf{c} = (0,1,1,0) \quad (v_3=1).$$

Check $\mathbf{c}$: row $A$ gives $-1+1 = 0$; row $B$ gives $+1-1 = 0$. Balanced, with $v_1 = v_4 = 0$.

$\mathbf{t}$ is the through-flux: in, $A\to B$, out. **$\mathbf{c}$ is a futile cycle** — $A$ is converted to $B$ and immediately back, at equal rates, with no net input and no net output. Nothing enters or leaves; the loop just spins.

**(c) Why stoichiometry cannot exclude it.** $\mathbf{c}$ satisfies $S\mathbf{c}=0$ and $\mathbf{c}\ge 0$, so it is a perfectly legal point of the flux cone. Mass balance is blind to it precisely because it *is* balanced — that is the point.

**What excludes it is thermodynamics.** Net flux runs only downhill in Gibbs free energy, so $v_2 > 0$ requires $\Delta G_{A\to B} < 0$ and $v_3 > 0$ requires $\Delta G_{B\to A} < 0$. But $\Delta G_{B\to A} = -\Delta G_{A\to B}$, and both cannot be negative. **Any cycle of reactions carrying net flux around the loop violates this "loop law"** — it is the reaction-network analogue of requiring that potential differences around a circuit loop sum to zero, and it is a constraint stoichiometry simply does not encode.

**The problem this creates:** $\mathbf{c}$ can be added to any feasible flux vector without changing a single exchange flux, and therefore without changing the value of an objective that depends only on exchanges. So a solver reporting "the" optimal flux distribution may be reporting one arbitrary point out of an infinite family differing by internal loops — internal fluxes that look real and are artifacts. This is the **alternate-optima** problem, and it is why practical FBA adds loop-law constraints (loopless FBA) and why flux variability analysis exists at all. [4.2](04-02-flux-balance-analysis.md) takes this up properly.

**P3 (a)** Let $v_g, v_l, v_e, v_a \ge 0$. Pyruvate is made only by glycolysis (2 per glucose) and consumed by the three fates:

$$\textbf{pyruvate:}\quad 2v_g - v_l - v_e - v_a = 0.$$

NADH is made by glycolysis (2 per glucose) and consumed by lactate and ethanol formation only:

$$\textbf{NADH:}\quad 2v_g - v_l - v_e = 0.$$

**(b)** Subtract the NADH balance from the pyruvate balance:

$$(2v_g - v_l - v_e - v_a) - (2v_g - v_l - v_e) = -v_a = 0 \;\;\Longrightarrow\;\; \boxed{v_a = 0.}$$

*In words: the acetate route consumes a pyruvate without consuming an NADH. Glycolysis delivers pyruvate and NADH in a strict 1:1 ratio, so every pyruvate must go to a route that also burns one NADH — and acetate does not.* **Redox balance, not carbon balance, is what kills it.** Note how strong this conclusion is: no rate constant, no enzyme level, no regulation, and the answer is exactly zero rather than "small".

**(c)** With $v_a = 0$, ATP comes only from glycolysis:

$$\text{ATP per glucose} = \frac{2v_g + v_a}{v_g} = \mathbf{2}.$$

Which is the textbook fermentation yield ([biochemistry 3.2](../../biochemistry/lessons/03-02-glycolysis.md)) — recovered here as a **constraint**, not looked up. The NADH balance also forces $v_l + v_e = 2v_g$: every glucose yields exactly two 3-carbon fermentation products, in any mixture. Homolactic fermentation ($v_e=0$) and alcoholic fermentation ($v_l=0$) are the two extreme rays of that little cone.

**(d)** The network needs **another way to reoxidize NADH**, or another way to dispose of pyruvate's carbon without spending NADH. Real options: an external electron acceptor (respiration, or anaerobic nitrate reduction), hydrogen evolution, or a route that splits pyruvate redox-neutrally.

**What *E. coli* actually does is the third**, and it is worth working through. Pyruvate formate-lyase cleaves pyruvate to acetyl-CoA + formate **using no NADH**; acetyl-CoA then either goes to acetate (yielding 1 ATP, no NADH) or to ethanol (consuming **2** NADH, since acetyl-CoA to acetaldehyde to ethanol is two reduction steps). Per glucose, glycolysis supplies 2 NADH and 2 acetyl-CoA. If $x$ acetyl-CoA go to ethanol:

$$2x = 2 \;\;\Longrightarrow\;\; x = 1,$$

so **one ethanol and one acetate per glucose** — and the ATP yield becomes $2 + 1 = \mathbf{3}$ per glucose. That 1:1 ethanol-to-acetate ratio is the classic signature of *E. coli* mixed-acid fermentation, and it is fixed entirely by cofactor stoichiometry. The cell buys its third ATP by pairing the acetate route with a route that burns the leftover reducing power.

**The transferable lesson: cofactor balances are the load-bearing constraints in stoichiometric models.** ATP and NADH each appear in hundreds of reactions, so their balances couple parts of metabolism that share no carbon at all — which is exactly why a constraint-based model of a thousand reactions predicts anything at all. Setting up the "maximize ATP per glucose subject to these balances" version of this question as a linear program is [4.2](04-02-flux-balance-analysis.md); the general form of that program is [operations-research 1.1](../../operations-research/lessons/01-01-formulating-linear-programs.md).

</details>

## Flashback

**From Lesson 1.1 (the systems view of the cell):** A metabolite $A$ is produced at a constant rate $v_{\text{in}} = 10$ (in $\mu\text{M}\,\text{min}^{-1}$) and converted rapidly to $B$, which is diluted away by growth:

$$\dot{A} = v_{\text{in}} - kA, \qquad \dot{B} = kA - \gamma B, \qquad k = 50\ \text{min}^{-1},\; \gamma = 1\ \text{min}^{-1},$$

with $A(0)=B(0)=0$. (a) Apply timescale separation to eliminate $A$ and write the reduced equation for $B$. (b) The exact solution is $B(t) = \frac{v_{\text{in}}}{\gamma}(1-e^{-\gamma t}) - \frac{v_{\text{in}}}{k-\gamma}\left(e^{-\gamma t}-e^{-kt}\right)$. Find the largest absolute error the reduction makes, and express it as a fraction of the steady state. (c) Relate the answer to the rate ratio, and say what it justifies in this lesson.

<details>
<summary>Solution</summary>

**(a)** $A$ is the fast variable ($k \gg \gamma$), so set $\dot A \approx 0$:

$$A^{*} = \frac{v_{\text{in}}}{k} = \frac{10}{50} = 0.2\ \mu\text{M}.$$

Substituting $kA^{*} = v_{\text{in}}$ into $B$'s equation gives the reduced system

$$\dot{B} = v_{\text{in}} - \gamma B \quad\Longrightarrow\quad B_{\text{red}}(t) = \frac{v_{\text{in}}}{\gamma}\left(1 - e^{-\gamma t}\right) = 10\left(1-e^{-t}\right).$$

The two-variable system has become one variable. **The fast reaction's rate constant $k$ has dropped out entirely** — it survives only in $A^{*}$.

**(b)** The reduction's error is exactly the term dropped:

$$E(t) = B_{\text{red}}(t) - B(t) = \frac{v_{\text{in}}}{k-\gamma}\left(e^{-\gamma t}-e^{-kt}\right) = \frac{10}{49}\left(e^{-t}-e^{-50t}\right).$$

Maximize: $E'(t)=0$ gives $\gamma e^{-\gamma t} = k e^{-kt}$, so

$$t^{*} = \frac{\ln(k/\gamma)}{k-\gamma} = \frac{\ln 50}{49} = \frac{3.912}{49} = 0.0798\ \text{min}.$$

At $t^{*}$: $e^{-\gamma t^{*}} = e^{-0.0798} = 0.9233$ and $e^{-k t^{*}} = e^{-3.991} = 0.0185$, so

$$E_{\max} = \frac{10}{49}(0.9233 - 0.0185) = 0.2041 \times 0.9048 = \mathbf{0.185}\ \mu\text{M}.$$

Against the steady state $B_{st} = v_{\text{in}}/\gamma = 10\ \mu\text{M}$, that is

$$\frac{E_{\max}}{B_{st}} = \frac{0.185}{10} = \mathbf{1.85\ \text{percent}}.$$

**(c)** Compare with the rate ratio $\gamma/k = 1/50 = 2$ percent. **The error is of order the ratio of the slow rate to the fast rate** — the general result from 1.1 — and it is confined to a brief transient of duration about $1/k$; afterwards the exact and reduced trajectories are indistinguishable.

**What it justifies here:** $S\mathbf{v}=0$ is exactly this reduction applied to every internal metabolite at once. Metabolite pools turn over in about a second while growth takes tens of minutes, so $\gamma/k \sim 10^{-3}$ and the quasi-steady-state assumption costs roughly a tenth of a percent — utterly negligible on the growth timescale, and false only during the first second after a sudden shift. **Metabolic steady state is not an idealization pulled from nowhere; it is a controlled approximation with a known and tiny error.**

</details>

## Connections

- **Backward:** $S$ and the left null space are straight from [1.2](01-02-mass-action-rate-odes.md), now at scale and now with the flux vector treated as unknown; the quasi-steady-state justification is [1.1](01-01-systems-view-of-the-cell.md)'s timescale separation, the same move [1.3](01-03-michaelis-menten-qssa.md) made on the enzyme–substrate complex.
- **Forward:** [4.2](04-02-flux-balance-analysis.md) closes the underdetermination by adding flux bounds and an objective, making this a linear program; [4.3](04-03-stochastic-gene-expression.md) attacks the other assumption buried here, that molecule numbers are large enough for rates to be deterministic.
- **Sideways:** the null space, rank–nullity and the four subspaces are [linalg-refresher 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md), with the elimination in Example 1 being [linalg-refresher 1.3](../../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md); the polyhedral cone becomes a feasible region for linear programming in [operations-research 1.2](../../operations-research/lessons/01-02-vertices-bases-fundamental-theorem.md) and [convex-optimization 2.2](../../convex-optimization/lessons/02-02-linear-quadratic-programs.md); the reactions being balanced here are the pathways of [biochemistry 3.2](../../biochemistry/lessons/03-02-glycolysis.md) and the cofactor accounting of [biochemistry 2.5](../../biochemistry/lessons/02-05-bioenergetics-atp-redox.md), and the regulation this method deliberately ignores is [biochemistry 2.4](../../biochemistry/lessons/02-04-allosteric-regulation-metabolic-control.md).

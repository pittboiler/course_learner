# Systems Biology · Lesson 1.2: Mass action & reaction-rate ODEs

> ⏱ ~15 min · Module 1: Reaction kinetics & the systems view · Builds on: [1.1](01-01-systems-view-of-the-cell.md), [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) · Unlocks: [1.3](01-03-michaelis-menten-qssa.md)

## Why this matters

[`biophysics` 4.1](../../biophysics/lessons/04-01-reaction-kinetics-mass-action.md) already established *why* a reaction rate goes as the product of reactant concentrations — collisions, encounter frequency, the whole physical story. Take that as given. **This lesson is about bookkeeping**, which sounds like the boring part and is in fact the part that scales.

Here is the problem. A reaction scheme with four species and three arrows is easy to turn into ODEs by hand, and you will get it right. A scheme with forty species and sixty arrows is not, and you will not. What you need is a *procedure* — one that a person can execute mechanically at n = 4 and a computer can execute at n = 4000, and that is exactly the same procedure in both cases.

The procedure produces one object, the **stoichiometric matrix** $S$, and $S$ turns out to carry far more information than the bookkeeping it was invented for:

- Its **left null space** hands you every conservation law in the system — total enzyme, total receptor, the adenylate pool — **and does so without knowing a single rate constant.**
- Its **right null space** is the set of steady-state flux distributions, which is the entire content of [4.1](04-01-metabolic-networks-stoichiometry.md) and [4.2](04-02-flux-balance-analysis.md) at genome scale.

**Meet $S$ now and Module 4 stops being a new subject.** It is this lesson, at four thousand rows.

## The idea

Every reaction network splits cleanly into two pieces that have nothing to do with each other:

1. **What changes.** When reaction $j$ fires once, how many molecules of each species appear or vanish? These are small integers fixed by chemistry. They are known exactly, they never need to be measured, and they do not depend on temperature, pH, enzyme levels, or anything else.
2. **How fast.** At what rate does reaction $j$ fire, given the current concentrations? This is a nonlinear function with parameters that are hard to measure, often unknown, and frequently wrong in the literature.

**Almost all of the difficulty in modelling lives in piece 2, and almost none of it in piece 1.** So write the model in a form that keeps them apart:

$$\dot{\mathbf{x}} = S\,\mathbf{v}(\mathbf{x})$$

The matrix $S$ is piece 1 — exact, integer, parameter-free. The vector $\mathbf{v}$ is piece 2 — messy, uncertain, and the thing you argue about. **The factorization is not cosmetic.** Every result you can prove about $S$ alone is a result that holds *no matter what the kinetics are*, which is why conservation laws are unconditional and why Module 4 can make predictions about metabolic networks whose rate constants nobody has ever measured.

The second idea is the payoff. If you can find a weighting of the species that no reaction ever changes — one enzyme molecule counts the same whether it is free or bound to substrate — then that weighted sum is constant forever. **Finding those weightings is a linear-algebra question, not a biology question**, and its answer is the left null space of $S$. Each one you find removes a variable from the system.

## The formal version

**Set-up.** Let $\mathbf{x} = (x_1,\dots,x_m)^\top$ be the concentrations of $m$ **species**, and let there be $r$ **reactions**. Write reaction $j$ as

$$\sum_{i=1}^{m} a_{ij}\,X_i \;\longrightarrow\; \sum_{i=1}^{m} b_{ij}\,X_i$$

where $a_{ij}$ is how many molecules of species $i$ are consumed and $b_{ij}$ how many are produced.

**Definition (stoichiometric matrix).** $S$ is the $m \times r$ matrix with entries

$$S_{ij} = b_{ij} - a_{ij}$$

*In words: $S_{ij}$ is the net number of molecules of species $i$ produced each time reaction $j$ fires. Rows are species; columns are reactions.*

**Definition (rate vector).** $v_j(\mathbf{x}) \ge 0$ is the rate of reaction $j$. Under mass action,

$$v_j(\mathbf{x}) = k_j \prod_{i=1}^{m} x_i^{\,a_{ij}}$$

*In words: the rate is a constant times each reactant's concentration raised to the number of copies of it the reaction consumes.* Note that the exponent is $a_{ij}$, the **reactant** coefficient — not $S_{ij}$. They are different numbers and confusing them is the single most common error in this material.

**The rate equation.**

$$\boxed{\;\dot{\mathbf{x}} = S\,\mathbf{v}(\mathbf{x})\;}$$

*In words: the rate of change of each species is the sum over all reactions of (how much that reaction changes it) times (how fast it is going).* Row $i$ of this equation is exactly the hand-written ODE for species $i$ — the matrix form just does the sum for you, correctly, every time.

**The recipe, as a procedure.**

1. List the species. That fixes the rows and the state vector.
2. List the reactions, each with explicit stoichiometry. That fixes the columns.
3. Fill in $S$ column by column: for each reaction, write the net change of each species.
4. Write the rate law for each reaction. That gives $\mathbf{v}(\mathbf{x})$.
5. Multiply.

Step 3 is where errors get caught: a column must be filled in by looking at *one* reaction at a time, which is much harder to get wrong than writing a whole ODE at once.

**Warm-up: a reversible isomerization.** $A \rightleftharpoons B$, forward rate $k_1 A$, reverse rate $k_{-1}B$. Two conventions, both correct:

$$\text{split (2 columns, } v \ge 0): \quad S = \begin{pmatrix} -1 & +1 \\ +1 & -1\end{pmatrix}, \quad \mathbf{v} = \begin{pmatrix}k_1 A\\ k_{-1}B\end{pmatrix}$$

$$\text{net (1 column, } v \text{ signed}): \quad S = \begin{pmatrix} -1 \\ +1\end{pmatrix}, \quad \mathbf{v} = \big(k_1A - k_{-1}B\big)$$

Both give $\dot A = -k_1A + k_{-1}B$. **Pick one and never mix them inside one model.** Module 4 wants the split form with sign constraints, because "this reaction is irreversible" then becomes the linear inequality $v_j \ge 0$.

### Conservation laws: the left null space

Suppose a row vector $\mathbf{w}^\top$ satisfies $\mathbf{w}^\top S = \mathbf{0}^\top$. Then

$$\frac{d}{dt}\big(\mathbf{w}^\top\mathbf{x}\big) = \mathbf{w}^\top \dot{\mathbf{x}} = \mathbf{w}^\top S\,\mathbf{v}(\mathbf{x}) = \mathbf{0}^\top\mathbf{v}(\mathbf{x}) = 0$$

$$\boxed{\;\mathbf{w}^\top S = \mathbf{0}^\top \;\Longrightarrow\; \mathbf{w}^\top\mathbf{x}(t) = \text{constant}\;}$$

*In words: any weighted sum of species that every reaction leaves alone is conserved for all time.*

**Read the proof again and notice what is missing: $\mathbf{v}$ dropped out.** The conservation law holds for mass action, for Michaelis–Menten rates, for Hill functions, for rate laws nobody has written down yet. **Conservation is a property of the wiring, not of the kinetics** — which is the same claim [1.1](01-01-systems-view-of-the-cell.md) opened the course with, now provable in one line.

Such a $\mathbf{w}$ lives in the **left null space** $N(S^\top)$ — one of the four subspaces from [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md). By rank–nullity ([`linalg-refresher` 1.3](../../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md)):

$$\#\{\text{independent conservation laws}\} = m - \operatorname{rank} S$$

and each one lets you delete a state variable, replacing an ODE with an algebraic substitution. **This is the second great dimension-reducing move of the course**, after timescale separation in [1.1](01-01-systems-view-of-the-cell.md), and unlike that one it is exact — no approximation, no small parameter, no error term.

When the conserved combination has non-negative integer weights it is a **moiety**: a chemical group that gets passed around but never made or destroyed. Total enzyme $E + C$, total receptor, the adenylate pool $\text{ATP}+\text{ADP}+\text{AMP}$.

### Equilibrium is not steady state

Two conditions that get confused constantly, and the difference is the difference between a cell and a corpse.

**Steady state:** concentrations are constant, so

$$S\,\mathbf{v}(\mathbf{x}^*) = \mathbf{0} \quad\Longleftrightarrow\quad \mathbf{v}^* \in N(S) \;(\text{the right null space}).$$

*In words: production balances consumption for every species — but the individual reaction rates need not be zero.* Flux can pour through the network at a great rate while every concentration sits still.

**Equilibrium:** every elementary reaction is individually balanced, forward rate equal to reverse rate, so the net flux vector is **zero**:

$$v_j^{+} = v_j^{-} \;\text{ for every } j \quad\Longrightarrow\quad \mathbf{v}^{*}_{\text{net}} = \mathbf{0}.$$

Equilibrium implies steady state. **The converse is emphatically false**, and the whole of metabolism lives in the gap.

$$\boxed{\;\text{A living cell is at steady state and never at equilibrium.}\;}$$

Your blood glucose is roughly constant, but not because glucose has stopped moving — it is constant because uptake and consumption happen to match, with a large flux running through. Reaching equilibrium requires the free-energy supply to stop, and the only cells at equilibrium are dead ones ([`biophysics` 2.1](../../biophysics/lessons/02-01-free-energy-cell-currency.md), [`stat-mech` 2.1](../../stat-mech/lessons/02-01-laws-of-thermodynamics.md)). Maintaining a non-equilibrium steady state costs free energy continuously and produces entropy continuously; that is what eating is for.

**Detailed balance** is the thermodynamic statement behind this. At true equilibrium each elementary step balances separately, which constrains the rate constants: around any cycle, the product of the forward constants must equal the product of the reverse ones. A model that writes a cycle with irreversible arrows has therefore *assumed* a driving free-energy source, whether or not it says so. [`biophysics` 4.1](../../biophysics/lessons/04-01-reaction-kinetics-mass-action.md) works this out; P3 below makes you confront it.

**The duality worth memorizing:**

| Subspace of $S$ | Object | Meaning | Where it is used |
|---|---|---|---|
| Left null space $N(S^\top)$ | $\mathbf{w}^\top S = \mathbf{0}$ | conserved moieties | here, [1.3](01-03-michaelis-menten-qssa.md), [4.4](04-04-signal-transduction-cascades.md) |
| Right null space $N(S)$ | $S\mathbf{v} = \mathbf{0}$ | steady-state flux modes = pathways | [4.1](04-01-metabolic-networks-stoichiometry.md), [4.2](04-02-flux-balance-analysis.md) |

## Picture

![A three-reaction enzyme network drawn as a scheme in which E plus S reversibly forms the complex C by reactions R1 and R2, and C turns over to E plus P by reaction R3, with the E and C symbols circled in green. Beside it the four by three stoichiometric matrix is written out as a labelled array with rows E, S, C, P and columns R1, R2, R3. The E and C rows are shaded green next to a green weight vector reading one, zero, one, zero, and the arithmetic beneath shows those two rows summing to the zero row, so the total enzyme E plus C is conserved.](assets/01-02-fig1.svg)

The two representations are the same information. **The green weighting is the only thing you have to find; the conservation law then falls out of arithmetic**, and it would have fallen out identically if R3 had a Hill rate law instead of a mass-action one.

## Worked examples

### Example 1 (mechanical — the enzyme network, and why 1.3 has only two variables)

The scheme drawn above, with rate constants:

$$\text{R1: } E + S \xrightarrow{k_1} C, \qquad \text{R2: } C \xrightarrow{k_{-1}} E + S, \qquad \text{R3: } C \xrightarrow{k_2} E + P$$

**(a) Build $S$.** Species in the order $(E, S, C, P)$, so $m = 4$, $r = 3$:

$$S = \begin{pmatrix} -1 & +1 & +1 \\ -1 & +1 & 0 \\ +1 & -1 & -1 \\ 0 & 0 & +1 \end{pmatrix}, \qquad \mathbf{v} = \begin{pmatrix} k_1 E S \\ k_{-1} C \\ k_2 C\end{pmatrix}$$

Multiplying out $\dot{\mathbf{x}} = S\mathbf{v}$ gives the four ODEs you would have written by hand:

$$\dot E = -k_1ES + k_{-1}C + k_2C, \qquad \dot S = -k_1ES + k_{-1}C$$
$$\dot C = k_1ES - k_{-1}C - k_2C, \qquad \dot P = k_2C$$

**(b) Find the left null space by hand.** Write $\mathbf{w} = (w_E, w_S, w_C, w_P)$ and set $\mathbf{w}^\top S = \mathbf{0}$, one column at a time:

$$\text{col R1:}\quad -w_E - w_S + w_C = 0$$
$$\text{col R2:}\quad +w_E + w_S - w_C = 0 \quad(\text{the same equation, negated})$$
$$\text{col R3:}\quad +w_E - w_C + w_P = 0$$

So $w_C = w_E + w_S$ and $w_P = w_C - w_E = w_S$. Two free parameters, $w_E$ and $w_S$, hence

$$\dim N(S^\top) = 2 \quad\Longrightarrow\quad \operatorname{rank} S = m - 2 = 2 .$$

(Sanity check on the rank: columns R1 and R2 are negatives of each other, so only R1 and R3 can be independent — and they are. Rank 2. ✓)

**(c) Read off the two conservation laws.** Take the natural basis:

$$\mathbf{w}_1 = (1,0,1,0): \quad E + C = E_T \qquad \textbf{(total enzyme)}$$
$$\mathbf{w}_2 = (0,1,1,1): \quad S + C + P = S_T \qquad \textbf{(total substrate moiety)}$$

Verify $\mathbf{w}_2$ against the matrix: row $S$ + row $C$ + row $P$ = $(-1+1+0,\; +1-1+0,\; 0-1+1) = (0,0,0)$. ✓

**(d) Reduce the dimension.** Substitute $E = E_T - C$ and drop $P$ (recover it later as $P = S_T - S - C$):

$$\dot S = -k_1(E_T - C)S + k_{-1}C$$
$$\dot C = k_1(E_T - C)S - (k_{-1}+k_2)C$$

**Four ODEs became two, exactly, with no approximation.** That is the system [1.3](01-03-michaelis-menten-qssa.md) starts from, and it is why the Michaelis–Menten derivation only ever has to reason about $S$ and $C$. Note also that $E_T$ and $S_T$ are set entirely by the initial condition — the conservation laws convert two *dynamical* unknowns into two *experimental* numbers, which is a much better trade than it looks.

### Example 2 (why you'd care — a branch point, open systems, and flux you can compute)

Now a fragment of metabolism. A metabolite $A$ is supplied at a constant rate and splits down two routes:

$$\text{R0: } \varnothing \xrightarrow{\;b\;} A, \quad \text{R1: } A \xrightarrow{k_1} B, \quad \text{R2: } A \xrightarrow{k_2} C, \quad \text{R3: } B \xrightarrow{k_3} \varnothing, \quad \text{R4: } C \xrightarrow{k_4} \varnothing$$

The $\varnothing$ symbols are **exchange reactions**: the boundary of the model, where material enters from and leaves to everything we chose not to track.

**(a) $S$ is $3 \times 5$**, species $(A,B,C)$:

$$S = \begin{pmatrix} +1 & -1 & -1 & 0 & 0 \\ 0 & +1 & 0 & -1 & 0 \\ 0 & 0 & +1 & 0 & -1 \end{pmatrix}, \qquad \mathbf{v} = \begin{pmatrix} b \\ k_1A \\ k_2A \\ k_3B \\ k_4C \end{pmatrix}$$

**(b) Conservation laws: there are none.** Column R0 forces $w_A = 0$; then R1 forces $w_B = w_A = 0$ and R2 forces $w_C = 0$. So $\dim N(S^\top) = 0$ and $\operatorname{rank}S = 3$.

**This is the general rule and it is worth stating loudly: exchange reactions destroy conservation laws.** A closed system conserves moieties; an open one does not, because the boundary is a source and a sink. Which reactions you call "exchange" is a modelling choice — draw the boundary somewhere else and the conserved quantities change. **The system's conservation laws are partly a statement about your model, not only about the cell.**

**(c) Steady state.** Set $S\mathbf{v} = \mathbf{0}$ row by row:

$$A:\; b = (k_1+k_2)A^*, \qquad B:\; k_1A^* = k_3B^*, \qquad C:\; k_2A^* = k_4C^*$$

$$A^* = \frac{b}{k_1+k_2}, \qquad B^* = \frac{k_1 b}{k_3(k_1+k_2)}, \qquad C^* = \frac{k_2 b}{k_4(k_1+k_2)}$$

With $b = 6\,\mu\text{M}\,\text{s}^{-1}$, $k_1 = 2\,\text{s}^{-1}$, $k_2 = 1\,\text{s}^{-1}$, $k_3 = 3\,\text{s}^{-1}$, $k_4 = 0.5\,\text{s}^{-1}$:

$$A^* = \frac{6}{3} = 2\,\mu\text{M}, \qquad B^* = \frac{2\cdot 2}{3} = \frac{4}{3} \approx 1.33\,\mu\text{M}, \qquad C^* = \frac{1 \cdot 2}{0.5} = 4\,\mu\text{M}$$

Fluxes: $v_1 = k_1A^* = 4$, $v_2 = k_2A^* = 2$, and $v_1 + v_2 = 6 = b$. ✓ Outputs: $v_3 = 3(4/3) = 4$ ✓ and $v_4 = 0.5(4) = 2$ ✓.

**(d) Two things to notice.**

**The branch ratio is $v_1/v_2 = k_1/k_2 = 2$, independent of $b$.** Doubling the supply doubles both fluxes and leaves the split untouched. In a linear network the split is a property of the enzymes alone — which is exactly why real cells need *regulation* to change a branch ratio, and why Module 2 exists.

**Nothing here is at equilibrium.** Every reaction carries a strictly positive net flux; the concentrations are pinned only because inflow matches outflow. Set $b = 0$ and the system relaxes to $A = B = C = 0$, which *is* the equilibrium of this (now unfed) network. **The interesting state is the fed one, and it is not an equilibrium state.**

## Watch out

- **You might use $S_{ij}$ as the exponent in the rate law.** $S$ is *net* change; the mass-action exponent is the *reactant* coefficient $a_{ij}$. For $2A \to B$, $S_A = -2$ but the rate is $k A^2$, and the 2 appears for two different reasons. Worse: a catalyst has $S_{ij} = 0$ (it is consumed and regenerated by the same lumped step) yet still appears in the rate law. **A zero row entry does not mean the species is irrelevant to that reaction.**
- **You might think a species with an all-zero row in $S$ is inert.** It means the network as written never changes its total — often because you declared it a buffered external parameter. That is a modelling decision with consequences; see P2.
- **You might think conservation laws depend on the rate constants.** They cannot: $\mathbf{v}$ cancels out of the derivation entirely. A conservation law that only holds for particular parameter values is not a conservation law, it is a coincidence.
- **You might assume every left-null-space basis vector is a physical moiety.** Basis vectors can have negative or fractional entries; those are perfectly valid conserved quantities but correspond to no chemical group. The interpretable ones are the non-negative integer combinations, and finding them is a separate (and genuinely harder) problem.
- **You might read "steady state" as "at equilibrium".** Steady state is $S\mathbf{v} = \mathbf{0}$ with $\mathbf{v}$ possibly large; equilibrium is $\mathbf{v} = \mathbf{0}$. Cells do the first and never the second.
- **You might mix the split and net conventions for reversible reactions in one model.** The column count and the sign constraints then disagree, and every null-space computation afterwards is garbage. Choose once, at the top of the model.

## One-liner

> Split a network into **what changes** (the stoichiometric matrix $S$: integer, exact, parameter-free) and **how fast** ($\mathbf{v}$: nonlinear, uncertain, argued about), write $\dot{\mathbf{x}} = S\mathbf{v}$, and then read the biology off the linear algebra — the left null space gives conserved moieties that hold for *any* kinetics, and the right null space gives the steady-state fluxes that keep a living cell permanently away from equilibrium.

## Problems

**P1 (🟢)** Reversible dimerization: $2A \rightleftharpoons B$, with $v_1 = k_1A^2$ and $v_2 = k_{-1}B$ (split convention). (a) Write $S$. (b) Write the two ODEs. (c) Find the left null space and state the conservation law. (d) Use it to reduce the system to a single ODE in $A$.

**P2 (🟡, bridges to [4.4](04-04-signal-transduction-cascades.md))** A covalent-modification cycle: a kinase phosphorylates $X$ using ATP, and a phosphatase reverses it.

$$\text{R1: } X + \text{ATP} \to X_p + \text{ADP}, \quad v_1 = k_1 X\,[\text{ATP}] \qquad\qquad \text{R2: } X_p \to X, \quad v_2 = k_2X_p$$

(Inorganic phosphate is not tracked.) (a) Write $S$ for species $(X, X_p, \text{ATP}, \text{ADP})$. (b) Find $\dim N(S^\top)$ and state both conservation laws. (c) How many independent ODEs remain? (d) Modellers almost always treat ATP as a fixed constant rather than a state variable. What does that do to the species count, the conservation-law count, and the final dimension — and what has been assumed about the cell to justify it?

**P3 (🔴)** A closed three-species cycle, written with irreversible arrows: $A \xrightarrow{k_1} B \xrightarrow{k_2} C \xrightarrow{k_3} A$, mass action throughout. (a) Write $S$ and find the left null space. (b) Find the right null space $N(S)$ and say what its dimension means. (c) With $k_1 = 1$, $k_2 = 2$, $k_3 = 4\ \text{s}^{-1}$ and total $T = 7\,\mu\text{M}$, compute the steady-state concentrations and the circulating flux $J$. (d) The system is closed and conserves total material, yet at steady state every reaction carries flux $J > 0$. Is it at equilibrium? What has the model quietly assumed?

<details>
<summary>Solutions</summary>

**P1 (a)** Species $(A,B)$, reactions (forward, reverse). R1 consumes two $A$ and makes one $B$; R2 the reverse:

$$S = \begin{pmatrix} -2 & +2 \\ +1 & -1 \end{pmatrix}, \qquad \mathbf{v} = \begin{pmatrix} k_1A^2 \\ k_{-1}B \end{pmatrix}$$

**(b)** $$\dot A = -2k_1A^2 + 2k_{-1}B, \qquad \dot B = k_1A^2 - k_{-1}B$$

**(c)** $\mathbf{w}^\top S = 0$ gives, from column R1, $-2w_A + w_B = 0$, so $w_B = 2w_A$ (column R2 is the same equation negated). Taking $w_A = 1$:

$$\mathbf{w} = (1,2) \quad\Longrightarrow\quad A + 2B = T \ \ \text{constant.}$$

**The factor of 2 is the point.** Conservation counts *monomer units*, and one dimer contains two of them. Writing $A + B$ = constant is the classic error; check it against the ODEs: $\dot A + \dot B = -k_1A^2 + k_{-1}B \ne 0$, whereas $\dot A + 2\dot B = 0$ identically. ✓

Dimension check: $\operatorname{rank}S = 1$ (the columns are proportional), $m = 2$, so exactly $2-1 = 1$ conservation law. ✓

**(d)** $B = (T-A)/2$, so

$$\dot A = -2k_1A^2 + 2k_{-1}\cdot\frac{T-A}{2} = -2k_1A^2 + k_{-1}(T - A).$$

One ODE, one parameter $T$ set by the initial condition. (Its positive root is the equilibrium — this network *is* closed, so steady state and equilibrium coincide here.)

**P2 (a)** Species $(X, X_p, \text{ATP}, \text{ADP})$, reactions (R1, R2):

$$S = \begin{pmatrix} -1 & +1 \\ +1 & -1 \\ -1 & 0 \\ +1 & 0 \end{pmatrix}$$

**(b)** Set $\mathbf{w}^\top S = 0$ with $\mathbf{w} = (w_X, w_{X_p}, w_{\text{ATP}}, w_{\text{ADP}})$:

$$\text{col R2:}\quad w_X - w_{X_p} = 0 \;\Longrightarrow\; w_X = w_{X_p}$$
$$\text{col R1:}\quad -w_X + w_{X_p} - w_{\text{ATP}} + w_{\text{ADP}} = 0 \;\Longrightarrow\; w_{\text{ADP}} = w_{\text{ATP}}$$

Two free parameters, so $\dim N(S^\top) = 2$ and $\operatorname{rank}S = 4 - 2 = 2$ (consistent: the two columns are not proportional).

$$\mathbf{w}_1 = (1,1,0,0):\quad X + X_p = X_T \qquad \textbf{(total substrate protein)}$$
$$\mathbf{w}_2 = (0,0,1,1):\quad \text{ATP} + \text{ADP} = A_T \qquad \textbf{(the adenylate pool)}$$

**(c)** $4 - 2 = \mathbf{2}$ independent ODEs. Convenient choice: track $X_p$ and ADP, then $X = X_T - X_p$ and $\text{ATP} = A_T - \text{ADP}$.

**(d)** Declaring ATP constant removes it from the state vector. Doing so honestly also removes ADP (it is now equally buffered), leaving species $(X, X_p)$, one reaction pair, **one** conservation law $X + X_p = X_T$, and therefore **one** ODE:

$$\dot X_p = k_1'(X_T - X_p) - k_2X_p, \qquad k_1' \equiv k_1[\text{ATP}]$$

Note what happened to the rate constant: the buffered concentration got absorbed into $k_1'$. **This is the standard one-variable modification cycle of [4.4](04-04-signal-transduction-cascades.md), and it arrived by a modelling assumption, not by a derivation.**

The assumption is that **the cycle's throughput is negligible against the cell's ATP turnover**, so the adenylate pool is held fixed by the rest of metabolism (which the model does not contain). That is usually excellent for a signalling protein present at nanomolar concentrations and catastrophic for a glycolytic enzyme carrying millimolar flux — the same reaction, the same equations, and the assumption valid in one case and not the other. It is also exactly the move Example 2 called "drawing the boundary": buffering a species converts it from a conserved internal variable into an external parameter, and the conservation law disappears with it.

**P3 (a)** Species $(A,B,C)$, reactions (R1, R2, R3):

$$S = \begin{pmatrix} -1 & 0 & +1 \\ +1 & -1 & 0 \\ 0 & +1 & -1\end{pmatrix}$$

$\mathbf{w}^\top S = 0$ gives $-w_A + w_B = 0$, $-w_B + w_C = 0$, $w_A - w_C = 0$, i.e. $w_A = w_B = w_C$. So $\dim N(S^\top) = 1$, $\operatorname{rank}S = 2$, and

$$\mathbf{w} = (1,1,1): \quad A + B + C = T .$$

**(b)** $S\mathbf{v} = \mathbf{0}$ gives $-v_1 + v_3 = 0$, $v_1 - v_2 = 0$, $v_2 - v_3 = 0$, so $v_1 = v_2 = v_3$. Then

$$N(S) = \operatorname{span}\{(1,1,1)^\top\}, \qquad \dim N(S) = 1 .$$

*Interpretation:* there is exactly **one** steady-state flux mode, and it is uniform circulation around the ring. That is precisely what [4.1](04-01-metabolic-networks-stoichiometry.md) will call an elementary pathway — a null-space vector of $S$, here a one-dimensional cone of "go around the cycle at speed $c$".

**(c)** At steady state $k_1A = k_2B = k_3C \equiv J$, so $A = J/k_1$, $B = J/k_2$, $C = J/k_3$, and

$$T = J\left(\frac{1}{k_1}+\frac{1}{k_2}+\frac{1}{k_3}\right) \;\Longrightarrow\; J = \frac{T}{\sum_i 1/k_i}.$$

$$\sum_i \frac{1}{k_i} = 1 + 0.5 + 0.25 = 1.75\ \text{s} \qquad\Longrightarrow\qquad J = \frac{7}{1.75} = \mathbf{4\ \mu\text{M}\,\text{s}^{-1}}$$

$$A^* = \frac{4}{1} = 4\,\mu\text{M}, \qquad B^* = \frac{4}{2} = 2\,\mu\text{M}, \qquad C^* = \frac{4}{4} = 1\,\mu\text{M}$$

Check: $4+2+1 = 7 = T$ ✓, and $k_1A^* = 4$, $k_2B^* = 4$, $k_3C^* = 4$ ✓.

**Notice the structure: $J$ is the total $T$ divided by a sum of residence times $1/k_i$** — the slowest step dominates the sum, so it is the bottleneck, and it also holds the largest pool. That relationship between "slow step" and "big pool" is a standing diagnostic in metabolic data.

**(d) It is not at equilibrium, and it never can be.** Equilibrium demands that *every elementary reaction* be individually balanced, which for this ring means $J = 0$ — the only way to get zero net flux on every arrow when they all point the same way. A nonzero $J$ means net circulation $A \to B \to C \to A$ forever, which violates **detailed balance**.

**What was quietly assumed: that each step is irreversible.** Writing $A \xrightarrow{k_1} B$ with no reverse arrow is the statement $k_{-1} = 0$, i.e. an infinite free-energy drop on that step. Three of those in a ring is a perpetual motion machine unless something is paying for it. In a real cell something is: each step is coupled to a driven reaction (ATP hydrolysis, an electrochemical gradient, an irreversible carboxylation), and the free energy consumed per turn is what sustains $J$. Detailed balance would otherwise force the constants around the cycle to satisfy $k_1k_2k_3 = k_{-1}k_{-2}k_{-3}$, and with the reverse constants all zero that equation has no solution with $J \ne 0$.

**The general lesson, and the reason this problem is here: an irreversible arrow is not a simplification, it is a thermodynamic assumption.** It is usually a good one — but it is the assumption that lets a *closed* network sustain a *steady flux*, which is otherwise impossible, and it is the formal reason a cell can hold constant concentrations while burning energy. See [`biophysics` 4.1](../../biophysics/lessons/04-01-reaction-kinetics-mass-action.md) for the detailed-balance argument in full, and [`biophysics` 2.1](../../biophysics/lessons/02-01-free-energy-cell-currency.md) for who pays.

</details>

## Connections

- **Backward:** [1.1](01-01-systems-view-of-the-cell.md) argued that behaviour follows from wiring; the conservation-law proof is the first hard instance — $\mathbf{v}$ cancels, so the result depends on topology alone. The physical justification of the mass-action rate law, and detailed balance, are [`biophysics` 4.1](../../biophysics/lessons/04-01-reaction-kinetics-mass-action.md); the four subspaces are [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md).
- **Forward:** [1.3](01-03-michaelis-menten-qssa.md) starts from Example 1's reduced two-variable system and uses $E + C = E_T$ to eliminate free enzyme; [4.4](04-04-signal-transduction-cascades.md) does the same with $X + X_p = X_T$. [4.1](04-01-metabolic-networks-stoichiometry.md) and [4.2](04-02-flux-balance-analysis.md) take the *other* null space — $S\mathbf{v} = \mathbf{0}$ at genome scale — and build the whole constraint-based method on it, keeping $S$ and throwing $\mathbf{v}$'s kinetics away entirely.
- **Sideways:** the equilibrium-versus-steady-state distinction is thermodynamics ([`stat-mech` 2.1](../../stat-mech/lessons/02-01-laws-of-thermodynamics.md), [`biophysics` 2.1](../../biophysics/lessons/02-01-free-energy-cell-currency.md)); $\dot{\mathbf{x}} = S\mathbf{v}(\mathbf{x})$ is a nonlinear autonomous system whose fixed points and stability are the business of [`dynamical-systems`](../../dynamical-systems/syllabus.md), returned to in [3.1](03-01-steady-states-stability-phase-planes.md); and the conserved quantities are first integrals, which is the same idea that makes a Hamiltonian constant along trajectories.

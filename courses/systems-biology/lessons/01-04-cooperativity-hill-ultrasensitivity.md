# Systems Biology · Lesson 1.4: Cooperativity, Hill functions & ultrasensitivity

> ⏱ ~15 min · Module 1: Reaction kinetics & the systems view · Builds on: [1.3](01-03-michaelis-menten-qssa.md), [1.2](01-02-mass-action-rate-odes.md) · Unlocks: [2.1](02-01-input-functions-promoter-logic.md) (input functions & promoter logic)

## Why this matters

[1.3](01-03-michaelis-menten-qssa.md) handed you the hyperbola — the generic saturating response. It is a perfectly good rate law and a **terrible switch**. To go from 10 percent of maximum output to 90 percent, a hyperbolic system needs its input to change **81-fold**. No cell decides anything that way.

Every circuit in Modules 2 and 3 — the toggle switch, the persistence detector, the repressilator — needs a response function steeper than a hyperbola, and each of them will fail outright below a threshold steepness. So this lesson is where the course buys its raw material. **The Hill function is the primitive; the Hill coefficient $n$ is the knob; and the honest number attached to that knob is the 10-to-90 fold-span $81^{1/n}$.**

The molecular story behind cooperative binding — MWC, KNF, hemoglobin's quaternary switch — is owned by [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md) and [biochemistry 1.5](../../biochemistry/lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md). **This lesson is not about mechanism.** It is about the phenomenological function you write down afterwards, what its parameters do and do not mean, and — the part that matters most for modelling — **the several ways a cell gets a steep response with no cooperative binding anywhere in the system.**

## The idea

**Ultrasensitivity is a statement about fold-changes, not slopes.** Concentrations in a cell span orders of magnitude, so the meaningful question is never "how steep is $df/dx$" but "**how many fold must the input change to swing the output across its useful range**". Answer that with one number and everything else follows.

**Cooperativity buys steepness by making the binding all-or-nothing.** One site filled makes the next easier, so the partly-loaded states are transient and the molecule is effectively either empty or full. Empty-or-full binding of $n$ ligands means the occupancy depends on $x^n$ rather than $x$, and a power law is steep on a log axis in a way a hyperbola is not.

**Three consequences, and the third is the interesting one:**

1. The response function becomes $\dfrac{x^n}{K^n + x^n}$ — the Hill function, sigmoidal on a log-input axis, still half-maximal at $x=K$.
2. The 10-to-90 fold-span collapses from 81 to $81^{1/n}$. At $n=4$ it is 3-fold; at $n=8$ it is 1.7-fold. **This is what "switch" means quantitatively.**
3. **$n$ is a fitted steepness, not a count of anything.** The derivation pretends the intermediate binding states do not exist; real molecules have them, so a real four-site protein fits $n \approx 2.8$, not 4. A measured $n$ of 2.3 does not mean 2.3 sites, and the number is not required to be an integer.

**And then the punchline that makes ultrasensitivity a design concept rather than a binding-chemistry footnote: you do not need cooperative binding to get it.** A stoichiometric inhibitor that binds its target 1:1 with no cooperativity at all produces a **sharp threshold** — nothing happens until the inhibitor pool is filled, then everything happens. Requiring several independent modifications before a protein is active does the same. Stacking layers does it again. **The cell builds switches out of graded parts**, and that is why $n>1$ is available everywhere in Modules 2 and 3 even though allosteric multimers are not.

## The formal version

**The Hill function from all-or-nothing binding.** Let $P$ be a binding protein (or a promoter), $x$ the free ligand concentration, and assume the $n$ sites fill together, so the only species present are $P$ and $PL_n$:

$$P + nL \rightleftharpoons PL_n, \qquad K_d = \frac{[P]\,x^n}{[PL_n]}$$

Binding is fast compared with everything downstream (the timescale-separation move from [1.1](01-01-systems-view-of-the-cell.md)), so treat it as equilibrated. With total protein $P_T = [P] + [PL_n]$ conserved (a left-null-space law from [1.2](01-02-mass-action-rate-odes.md)):

$$\theta \equiv \frac{[PL_n]}{P_T} = \frac{x^n}{K_d + x^n} = \boxed{\;\frac{x^n}{K^n + x^n}\;}, \qquad K \equiv K_d^{1/n}$$

*In words: the fraction of protein loaded rises as a power law and saturates, and $K$ is the input giving half-maximal occupancy — the EC50.*

**Activating and repressing input functions.** Multiply by a maximal rate $\beta$ (units of concentration per time) to get the two forms Module 2 uses constantly:

$$f_{\text{act}}(x) = \beta\,\frac{x^{n}}{K^{n}+x^{n}}, \qquad f_{\text{rep}}(x) = \beta\,\frac{K^{n}}{K^{n}+x^{n}} = \frac{\beta}{1+(x/K)^{n}}$$

*In words: the repressor form is one minus the activator form, so it falls from $\beta$ to 0 with the same half-point and the same steepness.*

**Steepness, measured two ways.** Both matter, and they agree for a true Hill function.

**(i) The response coefficient (Goldbeter–Koshland).** Let $x_{10}$ and $x_{90}$ be the inputs giving 10 percent and 90 percent of maximum. Setting $\theta = 0.1$ gives $x^n = K^n/9$ and $\theta=0.9$ gives $x^n = 9K^n$, so

$$x_{10} = K\,9^{-1/n}, \quad x_{90} = K\,9^{1/n}, \qquad \boxed{\;R_v \equiv \frac{x_{90}}{x_{10}} = 9^{2/n} = 81^{1/n}\;}$$

*In words: the input fold-change needed to cross the response is 81 for a hyperbola and shrinks as the $n$-th root of 81 as you add steepness.*

| $n$ | 10-to-90 span $R_v$ | Reading |
|---|---|---|
| 1 | **81** | hyperbolic — Michaelian, the baseline |
| 1.5 | 18.7 | barely better |
| 2 | **9** | genuinely sigmoidal |
| 3 | 4.33 | a usable switch |
| 4 | **3** | a good switch |
| 8 | 1.73 | near step-like |
| 16 | 1.32 | a comparator |

**Ultrasensitive means $R_v < 81$; subsensitive means $R_v > 81$.** Note the geometric-mean identity $K = \sqrt{x_{10}x_{90}}$, which is how you read an EC50 off a measured curve without fitting anything.

Inverting the boxed relation gives the **effective Hill coefficient of any measured response**, cooperative or not:

$$\boxed{\;n_{\text{eff}} = \frac{\ln 81}{\ln R_v} = \frac{4.394}{\ln R_v}\;}$$

**(ii) The logarithmic gain.** Local steepness in fold-per-fold terms:

$$R(x) \equiv \frac{d\ln f}{d\ln x} = n\bigl(1-\theta\bigr)$$

*In words: a 1 percent rise in input gives an $R$ percent rise in output.* So the gain is $n$ far below the half-point and falls to $n/2$ at the half-point and to 0 in saturation — **a switch is only steep near its threshold, which is exactly where circuits are designed to sit.** The Hill-plot slope is cleaner still:

$$\frac{d}{d\ln x}\ln\!\left(\frac{\theta}{1-\theta}\right) = n \quad \text{exactly, at every } x .$$

**Three ways to get $n_{\text{eff}}>1$ with no cooperative binding.**

**(a) Multisite / multistep requirement.** If a protein needs $m$ independent modifications before it is active, the active fraction goes as the product of $m$ occupancies, and $n_{\text{eff}}$ rises toward $m$ without any site influencing any other.

**(b) Molecular titration — the surprising one.** An activator $A$ (total $A_T$) is sequestered 1:1 by an inhibitor $I$ (total $I_T$) with dissociation constant $K_d$. Conservation gives $A_T = A + C$ and $I_T = I + C$ with $C = AI/K_d$, and eliminating $C$ and $I$ leaves a quadratic in the free activator $A$:

$$A^{2} + (K_d + I_T - A_T)\,A - A_T K_d = 0 \;\Longrightarrow\; A = \frac{-(K_d+I_T-A_T) + \sqrt{(K_d+I_T-A_T)^2 + 4A_TK_d}}{2}$$

In the tight-binding limit $K_d \ll I_T$ this collapses to $A \approx \max(0,\;A_T - I_T)$: **free activator is essentially zero until the inhibitor pool is saturated, then rises with slope 1.** At the threshold $A_T = I_T$ the free activator is $A \approx \sqrt{I_T K_d}$ and the local steepness is

$$\boxed{\;n_{\text{eff}} \approx \tfrac12\sqrt{I_T/K_d}\;}$$

*In words: a tighter inhibitor, or a bigger inhibitor pool, gives a sharper threshold — steepness you buy with affinity and stoichiometry rather than with allostery.*

**(c) Cascade composition.** Logarithmic gains compose by the chain rule, exactly:

$$\frac{d\ln z}{d\ln x} = \frac{d\ln z}{d\ln y}\cdot\frac{d\ln y}{d\ln x}$$

*In words: stack two layers and their fold-per-fold gains multiply.* This is why "effective Hill coefficients multiply across a cascade" is a good rule of thumb — it is exact for the gains and approximate for the Hill coefficients, since the identification $R \approx n$ only holds while each layer sits below its own half-point. Three layers at $n=1.7$ can deliver a composite steeper than any single cooperative protein. [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md) owns the kinase-cascade biology; [4.4](04-04-signal-transduction-cascades.md) will add the fourth and strongest mechanism, **zero-order ultrasensitivity**, which needs the enzyme kinetics of [1.3](01-03-michaelis-menten-qssa.md) and is deliberately deferred to there.

## Picture

![Left panel shows the normalized Hill response plotted against log input for Hill coefficients of 1, 2, 4 and 8. All four curves pass through half-maximum at the same input K, and the curves get dramatically steeper as n rises. Beneath the plot, four horizontal bars on the same log-input axis show the input fold-change needed to move from 10 percent to 90 percent of maximum: 81-fold at n equals 1, then 9-fold, 3-fold and 1.7-fold as n rises to 2, 4 and 8. The right panel plots free activator concentration against total activator in the presence of a tight one-to-one inhibitor. Free activator stays near zero until the inhibitor pool is filled at the threshold, then rises abruptly along the tight-binding asymptote, giving an effective Hill coefficient near 16 with no cooperative binding anywhere.](assets/01-04-fig1.svg)

The four curves are the whole lesson: **they all cross at the same $K$, so cooperativity does not move the threshold — it only sharpens it.** The bars underneath convert that into the number Modules 2 and 3 will keep asking for.

## Worked examples

**Example 1 (mechanical — a two-site cooperative operator).** A repressor $R$ binds a promoter carrying two identical operator sites so cooperatively that the singly-bound state is negligible: $D + 2R \rightleftharpoons DR_2$, with $K_d = [D]R^2/[DR_2]$ (units of concentration squared). Transcription proceeds only from free promoter. (a) Find the fraction of promoter that is free. (b) Identify the Hill coefficient and the half-repression concentration. (c) Compare its steepness with a single-site repressor.

**(a)** Total promoter is conserved, $D_T = [D] + [DR_2]$ — the left-null-space law from [1.2](01-02-mass-action-rate-odes.md). Substituting $[DR_2] = [D]R^2/K_d$:

$$D_T = [D]\left(1 + \frac{R^2}{K_d}\right) \;\Longrightarrow\; \frac{[D]}{D_T} = \frac{1}{1 + R^2/K_d} = \boxed{\;\frac{K^2}{K^2+R^2}\;}, \qquad K = \sqrt{K_d}$$

**(b)** This is $f_{\text{rep}}$ with $n=2$. Half-repression at $R = K = \sqrt{K_d}$. **Notice what $K$ is not:** it is the square root of a constant with units of concentration squared, which is why quoting "the $K_d$" of a cooperative site without saying which convention you mean is a recipe for a factor-of-everything error.

**(c)** From the boxed relation:

$$R_v(n{=}2) = 81^{1/2} = \mathbf{9}, \qquad R_v(n{=}1) = \mathbf{81}$$

**A ninefold reduction in the input range the promoter needs to shut down.** In a cell where the repressor concentration tracks a nutrient that varies threefold over a growth cycle, the $n=1$ promoter barely notices and the $n=2$ promoter goes from mostly on to mostly off. **Same threshold, different decisiveness** — and this is the entire content of Boss Problem 1.

**Example 2 (why you'd care — a switch with no cooperativity in it).** A transcriptional activator is held in check by a stoichiometric inhibitor present at $I_T = 1\ \mu\text{M}$, binding 1:1 with $K_d = 1\ \text{nM} = 0.001\ \mu\text{M}$. There is no allostery, no multimerization, no cooperative site anywhere. Compute the free activator as $A_T$ is raised, and extract the effective steepness.

Using the quadratic solution with $b = K_d + I_T - A_T$:

| $A_T$ ($\mu\text{M}$) | free $A$ ($\mu\text{M}$) | comment |
|---|---|---|
| 0.50 | 0.00100 | inhibitor in excess — activator invisible |
| 0.90 | 0.00824 | still off, ten percent below threshold |
| 1.00 | 0.03113 | threshold; $\sqrt{I_TK_d} = 0.0316$ ✓ |
| 1.10 | 0.10908 | on |
| 1.20 | 0.20486 | fully released |

**A 1.33-fold change in total activator (0.9 to 1.2) produces a 25-fold change in free activator.** The local steepness at the threshold, from $n_{\text{eff}} = (A_T/A)(dA/dA_T)$ with $dA/dA_T \approx 1/2$ there:

$$n_{\text{eff}} \approx \frac{1}{2}\sqrt{\frac{I_T}{K_d}} = \frac{1}{2}\sqrt{1000} = \mathbf{15.8} \quad (\text{exact value } 16.3)$$

**Sixteen. No cooperative protein has ever come close.** Hemoglobin, the textbook cooperative molecule, manages 2.8.

**Why this matters for how you model.** Three things follow, and all three recur:

1. **A steep measured dose-response is not evidence of cooperative binding.** Titration, multisite requirements and cascade composition all mimic it. Fitting a Hill function tells you the steepness and nothing about the mechanism — the same warning [1.3](01-03-michaelis-menten-qssa.md) issued about a fitted hyperbola not distinguishing QSSA from rapid equilibrium.
2. **The threshold is set by a stoichiometry, not by an affinity.** It sits at $A_T = I_T$, so the cell tunes *where* the switch trips by changing how much inhibitor it makes and tunes *how sharp* it is by changing $K_d$. Two independent knobs — a genuinely useful design property, and one no single Hill function offers.
3. Cyclin-dependent kinase inhibitors, sigma-factor anti-sigmas and inhibitor-of-kappa-B all work this way. **Stoichiometric inhibition is not an exotic mechanism; it is one of the commonest wiring patterns in the cell, and its function is to make a threshold.**

## Watch out

- **You might read $n$ as a count of binding sites.** It is a fitted steepness. The derivation assumed the intermediate states have zero occupancy, which is never true, so $n \le$ (number of sites) with equality only in the infinite-cooperativity fiction. Hemoglobin has 4 sites and $n \approx 2.8$; a measured 2.3 does not mean 2.3 of anything.
- **You might think cooperativity shifts the threshold.** It does not — every curve in the figure crosses half-maximum at $x=K$. **Cooperativity changes the sharpness, not the setpoint.** Those are separately tunable, and confusing them is the commonest modelling error in this material.
- **You might equate ultrasensitivity with amplification.** They are unrelated. Ultrasensitivity is about the *fold-change in input* needed to traverse the output range; amplification is about the *size* of the output. A cascade can have one, the other, both, or neither, and [4.4](04-04-signal-transduction-cascades.md) shows they trade against each other.
- **You might mistake a steep sigmoid for a switch with memory.** A Hill function with $n=8$ has exactly one output for every input, and it retracts as smoothly as it advanced. **Bistability and hysteresis require feedback**, and $n>1$ is only the necessary raw material — [2.3](02-03-positive-autoregulation.md) gives the graphical criterion and [3.2](03-02-bistability-toggle-switch.md) does the analysis.
- **You might carry $K$ and $K_d$ around interchangeably.** For the lumped $n$-site reaction $K_d$ has units of concentration$^n$ and $K = K_d^{1/n}$ is the concentration-valued half-point. Write input functions in the $(x/K)^n$ form and the problem disappears.

## One-liner

> Steepness is one number — the 10-to-90 input span $81^{1/n}$, which falls from 81-fold at $n=1$ to 3-fold at $n=4$ — and the cell gets that number from titration, multisite requirements and layered cascades at least as often as from cooperative binding, so a fitted Hill coefficient measures sharpness and never mechanism.

## Problems

**P1 (🟢)** A promoter's measured output rises from 10 percent to 90 percent of maximum as the inducer goes from 3 $\mu\text{M}$ to 18 $\mu\text{M}$. (a) Give the effective Hill coefficient. (b) Give the EC50 without fitting anything. (c) Over what inducer range would a non-cooperative ($n=1$) promoter with the same EC50 make the same transition?

**P2 (🟡)** A kinase is sequestered by a stoichiometric inhibitor at $I_T = 2\ \mu\text{M}$, binding 1:1 with $K_d = 2\ \text{nM}$. (a) Free kinase at $A_T = 2\ \mu\text{M}$? (b) Free kinase at $A_T = 1.8$ and $2.2\ \mu\text{M}$, and the effective Hill coefficient across that interval. (c) The cell wants the same threshold but a *less* sharp release. Name the one parameter it should change and in which direction, and say why the other parameter will not do the job.

**P3 (🔴, bridges to `control-systems` and to [4.4](04-04-signal-transduction-cascades.md))** A three-layer signalling cascade $x \to y \to z \to w$ has each layer a Hill activator with $n = 1.7$, and at the resting input each layer sits at 25 percent of its own maximum output. (a) Logarithmic gain of one layer at that operating point. (b) Overall gain from $x$ to $w$, with the composition rule justified. (c) If the composite behaved like a single Hill function of that steepness, what 10-to-90 span would it show — and what is dishonest about that extrapolation?

<details>
<summary>Solutions</summary>

**P1 (a)** The 10-to-90 span is the ratio of the two inducer concentrations:

$$R_v = \frac{18}{3} = 6 \;\Longrightarrow\; n_{\text{eff}} = \frac{\ln 81}{\ln 6} = \frac{4.394}{1.7918} = \mathbf{2.45}$$

**Ultrasensitive** ($R_v = 6 \ll 81$), and note the value is not an integer — as it should not be.

**(b)** Use the geometric-mean identity, since $x_{10}=K9^{-1/n}$ and $x_{90}=K9^{1/n}$:

$$K = \sqrt{x_{10}x_{90}} = \sqrt{3 \times 18} = \sqrt{54} = \mathbf{7.35\ \mu\text{M}}$$

Check the fit: $(4/7.348)^{2.4526} = 0.2249$, giving $\theta = 0.2249/1.2249 = 0.184$ at $4\ \mu\text{M}$ — a plausible point just above the 10 percent mark at 3. ✓

**(c)** At $n=1$ the span is 81-fold, centred on the same $K$:

$$x_{10} = \frac{7.35}{9} = 0.82\ \mu\text{M}, \qquad x_{90} = 7.35 \times 9 = 66.1\ \mu\text{M}$$

**From 0.82 to 66 $\mu\text{M}$ instead of 3 to 18.** The cooperative promoter completes its whole transition inside a range the hyperbolic one barely starts.

**P2 (a)** With $b = K_d + I_T - A_T = 0.002 + 2 - 2 = 0.002\ \mu\text{M}$:

$$A = \frac{-0.002 + \sqrt{(0.002)^2 + 4(2)(0.002)}}{2} = \frac{-0.002 + \sqrt{0.016004}}{2} = \frac{-0.002+0.12651}{2} = \mathbf{0.0623\ \mu\text{M}}$$

(The approximation $\sqrt{I_TK_d} = \sqrt{0.004} = 0.0632$ is good to 2 percent. ✓)

**(b)** At $A_T = 1.8$: $b = 0.002+2-1.8 = 0.202$, and

$$A = \frac{-0.202+\sqrt{0.040804 + 0.0144}}{2} = \frac{-0.202+0.234955}{2} = 0.01648\ \mu\text{M}$$

At $A_T = 2.2$: $b = -0.198$, and

$$A = \frac{0.198 + \sqrt{0.039204+0.0176}}{2} = \frac{0.198+0.238336}{2} = 0.21817\ \mu\text{M}$$

$$n_{\text{eff}} = \frac{\ln(0.21817/0.01648)}{\ln(2.2/1.8)} = \frac{\ln 13.24}{\ln 1.2222} = \frac{2.5832}{0.20067} = \mathbf{12.9}$$

**A 22 percent change in total kinase gives a 13-fold change in free kinase.** (The instantaneous value at the threshold is 16.3; the finite interval straddles the corner and averages lower.)

**(c)** **Raise $K_d$ — weaken the inhibitor.** Since $n_{\text{eff}} \approx \frac12\sqrt{I_T/K_d}$ and the threshold sits at $A_T = I_T$, $K_d$ controls sharpness alone. Going from 2 nM to 200 nM drops $n_{\text{eff}}$ from 15.8 to $\frac12\sqrt{10} = 1.6$ with the threshold untouched.

**Lowering $I_T$ would also blunt the switch, but it moves the threshold at the same time** — that is the whole point of the two-knob structure. This is the cleanest instance of the lesson's second Watch-out: **setpoint and sharpness are separate parameters, and a circuit that conflates them cannot be tuned.**

**P3 (a)** From $R = n(1-\theta)$ with $\theta = 0.25$:

$$R_{\text{layer}} = 1.7 \times 0.75 = \mathbf{1.275}$$

Barely ultrasensitive on its own — this is a weakly cooperative part, of the kind a cell actually has.

**(b)** By the chain rule in log coordinates, gains multiply:

$$R_{\text{total}} = \frac{d\ln w}{d\ln x} = \frac{d\ln w}{d\ln z}\cdot\frac{d\ln z}{d\ln y}\cdot\frac{d\ln y}{d\ln x} = 1.275^{3} = \mathbf{2.07}$$

The chain rule is **exact** — no approximation enters, because $d\ln w/d\ln x$ is literally a derivative of a composition. **In `control-systems` language this is series composition of gains in [block-diagram algebra](../../control-systems/lessons/01-05-block-diagram-algebra.md), performed in the log domain so that a multiplicative cascade becomes an additive one.** That is also why gains are quoted in decibels there and as fold-per-fold here: both are logarithms.

**(c)** Treating 2.07 as a Hill coefficient:

$$R_v = 81^{1/2.07} = e^{4.394/2.0727} = e^{2.120} = \mathbf{8.3\text{-fold}}$$

**Three barely-cooperative layers turn an 81-fold input requirement into an 8-fold one** — a real switch assembled from parts none of which is one.

**What is dishonest about the extrapolation:** $R = n(1-\theta)$ is a *local* gain that varies along the curve, and it was evaluated at one operating point. The 10-to-90 span is a *global* property requiring the gain across the whole traverse — but as each layer's output climbs toward saturation, $(1-\theta)$ collapses and the gain with it. **The composite is steepest at the operating point and flatter everywhere else, so 8.3-fold is an optimistic figure, not a measurement.** The honest procedure is to compose the three functions numerically and read $x_{10}$ and $x_{90}$ off the result. Worth knowing that real MAPK cascades reach $n_{\text{eff}} \approx 4$–5, and that they get there mainly by a mechanism not in this calculation at all — zero-order ultrasensitivity, in [4.4](04-04-signal-transduction-cascades.md).

</details>

## Flashback

**From Lesson 1.2 (mass action & reaction-rate ODEs):** The two-site operator of Example 1, written *without* the all-or-nothing fiction — the repressor binds sequentially:

$$D + R \underset{k_{-1}}{\overset{k_{1}}{\rightleftharpoons}} DR, \qquad DR + R \underset{k_{-2}}{\overset{k_{2}}{\rightleftharpoons}} DR_2$$

Order the species $(D,\;R,\;DR,\;DR_2)$ and take each reversible step as one net reaction. (a) Write the stoichiometric matrix $S$. (b) Find its left null space and state the conservation laws. (c) The system has four ODEs — how many independent dynamical variables actually remain, and what does that let you do?

<details>
<summary>Solution</summary>

**(a)** Two net reactions, four species, so $S$ is $4\times 2$. Reaction 1 consumes one $D$ and one $R$ and makes one $DR$; reaction 2 consumes one $DR$ and one $R$ and makes one $DR_2$:

$$S = \begin{pmatrix} -1 & 0 \\ -1 & -1 \\ +1 & -1 \\ 0 & +1 \end{pmatrix} \quad \begin{matrix} D \\ R \\ DR \\ DR_2 \end{matrix}$$

**(b)** A left null vector $\mathbf{w} = (w_D, w_R, w_{DR}, w_{DR_2})$ satisfies $\mathbf{w}^{\mathsf{T}}S = \mathbf{0}$, i.e. one equation per column:

$$\text{col 1:} \quad -w_D - w_R + w_{DR} = 0, \qquad \text{col 2:} \quad -w_R - w_{DR} + w_{DR_2} = 0$$

Two equations in four unknowns, so the left null space is 2-dimensional. Taking $(w_D,w_R) = (1,0)$ gives $w_{DR}=1$, $w_{DR_2}=1$; taking $(w_D,w_R)=(0,1)$ gives $w_{DR}=1$, $w_{DR_2}=2$:

$$\mathbf{w}_1 = (1,0,1,1), \qquad \mathbf{w}_2 = (0,1,1,2)$$

$$\boxed{\;[D] + [DR] + [DR_2] = D_T, \qquad [R] + [DR] + 2[DR_2] = R_T\;}$$

**Total operator and total repressor** — and the coefficient 2 on $DR_2$ is the bookkeeping doing its job, since that complex holds two repressor molecules. Sanity check: the two columns of $S$ are linearly independent, so $\operatorname{rank}S = 2$ and $\dim(\text{left null}) = 4-2 = 2$ ✓.

**(c)** $4 - 2 = \mathbf{2}$ independent dynamical variables. Pick $[DR]$ and $[DR_2]$ and recover $[D] = D_T - [DR] - [DR_2]$ and $[R] = R_T - [DR] - 2[DR_2]$ algebraically — the dimension reduction from [1.2](01-02-mass-action-rate-odes.md).

**And this is exactly the machinery Example 1 short-circuited.** Setting both steps to equilibrium and eliminating with $\mathbf{w}_1$ gives the general two-site occupancy

$$\frac{[D]}{D_T} = \frac{1}{1 + R/K_1 + R^2/(K_1K_2)}, \qquad K_1 = \frac{k_{-1}}{k_1},\; K_2 = \frac{k_{-2}}{k_2}$$

**The Hill form is the limit $K_1 \to \infty$ with $K_1K_2$ held fixed** — the singly-bound state driven to zero occupancy, which is precisely "infinite cooperativity". With finite $K_1$ the middle term survives, the curve is shallower, and a fit returns $n_{\text{eff}} < 2$. **That is the whole reason a real four-site protein fits $n \approx 2.8$**, and it is why the Hill coefficient is a steepness rather than a count.

</details>

## Connections

- **Backward:** [1.3](01-03-michaelis-menten-qssa.md) gave the hyperbola as the generic saturating input function; this lesson gives the family it belongs to, with the hyperbola as the flat $n=1$ member. [1.2](01-02-mass-action-rate-odes.md)'s conservation laws eliminate the bound species in every derivation here, and [1.1](01-01-systems-view-of-the-cell.md)'s timescale separation is what licenses treating binding as equilibrated.
- **Forward:** [2.1](02-01-input-functions-promoter-logic.md) makes $f(x)$ the production term of a regulated gene and everything in Modules 2 and 3 is built on it. [2.3](02-03-positive-autoregulation.md) needs $n>1$ for the graphical bistability criterion and [3.2](03-02-bistability-toggle-switch.md) turns that into a bifurcation; [3.4](03-04-oscillations-repressilator-hopf.md) needs $n$ above a threshold or the repressilator will not oscillate at all. [4.4](04-04-signal-transduction-cascades.md) collects the debt on zero-order ultrasensitivity.
- **Sideways:** the binding mechanism behind cooperativity is [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md) and its hemoglobin instance is [biochemistry 1.5](../../biochemistry/lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md); simple occupancy and $K_d$ are [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md); allosteric control of metabolic flux is [biochemistry 2.4](../../biochemistry/lessons/02-04-allosteric-regulation-metabolic-control.md). Kinase cascades and their composed steepness are [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md). The chain rule for logarithmic gains is series gain composition from [control-systems 1.5](../../control-systems/lessons/01-05-block-diagram-algebra.md) — the same algebra, written in fold-per-fold instead of decibels.

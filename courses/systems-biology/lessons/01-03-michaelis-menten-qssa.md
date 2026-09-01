# Systems Biology · Lesson 1.3: Enzyme kinetics — Michaelis–Menten as a reduction

> ⏱ ~15 min · Module 1: Reaction kinetics & the systems view · Builds on: [1.2](01-02-mass-action-rate-odes.md), [1.1](01-01-systems-view-of-the-cell.md) · Unlocks: 1.4 (cooperativity, Hill functions & ultrasensitivity)

## Why this matters

Three courses in this library already derive the Michaelis–Menten rate law as enzymology — [biophysics 4.2](../../biophysics/lessons/04-02-michaelis-menten.md), [biochemistry 2.2](../../biochemistry/lessons/02-02-michaelis-menten-kinetics.md), and [physical chemistry 3.5](../../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md). You know what $K_M$ and $V_{max}$ are. Nothing here repeats that, and inhibition belongs to [biochemistry 2.3](../../biochemistry/lessons/02-03-enzyme-inhibition.md).

**What this lesson owns is the approximation itself**, because a modeller uses Michaelis–Menten differently from a biochemist. A biochemist fits a curve to initial-rate data collected under conditions chosen to make the approximation hold. A modeller drops the MM term into a twenty-species network and simulates for an hour of biological time, in a cell where nobody chose the conditions. **The two uses have completely different failure modes, and only the second one bites you silently.**

So MM is treated here as the worked exemplar of the move [1.1](01-01-systems-view-of-the-cell.md) called the single most useful thing in modelling: **when one process is much faster than another, slave the fast one to the slow one and delete a variable.** Three ODEs become one. Then the three questions the enzymology courses do not answer: when is that legal, what breaks when it is not, and — the one that should genuinely unsettle you — **why fitting a perfect hyperbola tells you almost nothing about the mechanism that produced it.**

The hyperbola itself is the payoff for Module 2: it is the generic saturating input function, and every promoter in the next module is one.

## The idea

Enzyme, substrate, complex, product. Four species, three reaction steps, three rate constants. Write it out as [1.2](01-02-mass-action-rate-odes.md) taught you to and you get a nonlinear system you cannot solve in closed form. Michaelis and Menten replaced it with a single expression in two parameters. **That is a compression from four rate constants and three state variables down to two numbers and one — and compressions that good are always paid for somewhere.**

**The physical picture.** Drop enzyme into a lot of substrate. Two things happen on wildly different clocks:

- **Fast (milliseconds):** enzyme molecules find substrate, bind, and the complex $C$ climbs to whatever level balances binding against unbinding-plus-turnover. Substrate has barely moved.
- **Slow (seconds to minutes):** product accumulates, substrate drains. The complex does not stay put — it slides down as $S$ falls — but at every instant it sits at the level the *current* $S$ would hold it at.

**That second sentence is the whole approximation, and it is not what "$\dot C = 0$" sounds like.** The complex is not constant. It is **slaved**: it has no dynamics of its own left, only an instantaneous function of $S$. Geometrically, all trajectories crash onto a curve in the $(S,C)$ plane within milliseconds and then crawl along it. The reduced model is the crawl.

**What you pay.** The reduction throws away the crash. It is therefore wrong during the first milliseconds — nobody minds — and, more insidiously, it is wrong forever if the crash *itself* consumed a serious fraction of the substrate. **That is the failure mode, and it is entirely about how much substrate the enzyme can hide inside itself.** An enzyme at one-hundredth of the substrate concentration can hide at most one percent. An enzyme at the same concentration as its substrate can hide most of it, and then the model's own bookkeeping stops adding up.

**Inside a cell this is not a corner case.** Metabolic enzymes acting on abundant metabolites are fine. Kinases acting on their targets, or any signalling protein acting on a partner present at comparable copy number, are not — and that is the entire subject of [4.4](04-04-signal-transduction-cascades.md).

## The formal version

**The scheme** ([biophysics 4.1](../../biophysics/lessons/04-01-reaction-kinetics-mass-action.md) justifies mass action physically; we just use it):

$$\text{E} + \text{S} \;\underset{k_{-1}}{\overset{k_{1}}{\rightleftharpoons}}\; \text{C} \;\xrightarrow{\;k_{2}\;}\; \text{E} + \text{P}$$

Here $E$ is free enzyme, $S$ free substrate, $C$ the enzyme–substrate complex and $P$ product, all concentrations; $k_1$ has units of inverse concentration per time, $k_{-1}$ and $k_2$ inverse time.

**Step 1 — write the system (1.2's recipe).** With state $\mathbf x = (S, E, C, P)^{\top}$, rate vector $\mathbf v = (k_1ES,\; k_{-1}C,\; k_2C)^{\top}$ and stoichiometric matrix $\mathbf{S}$ (bold, to keep it apart from the substrate $S$):

$$\mathbf{S} = \begin{pmatrix} -1 & 1 & 0 \\ -1 & 1 & 1 \\ 1 & -1 & -1 \\ 0 & 0 & 1 \end{pmatrix}, \qquad \dot{\mathbf x} = \mathbf{S}\mathbf v$$

$$\dot S = -k_1ES + k_{-1}C, \qquad \dot C = k_1ES - (k_{-1}+k_2)C, \qquad \dot P = k_2 C$$

**Step 2 — the exact reduction, using conservation.** The left null space of $\mathbf{S}$ is two-dimensional, spanned by $\mathbf w_1 = (0,1,1,0)^{\top}$ and $\mathbf w_2 = (1,0,1,1)^{\top}$:

$$E + C = E_T \quad(\text{total enzyme}), \qquad S + C + P = S_T \quad(\text{total substrate})$$

*In words: enzyme is a catalyst, so it is neither made nor destroyed; and every substrate molecule is free, bound, or converted.* Use the first to delete $E$, the second to delete $P$, and four equations become two:

$$\dot S = -k_1(E_T - C)S + k_{-1}C, \qquad \dot C = k_1(E_T-C)S - (k_{-1}+k_2)C$$

**Notice what just happened: that reduction was exact.** Conservation laws cost nothing. The next one will not be free.

**Step 3 — the QSSA.** Impose $\dot C \approx 0$ and solve the resulting algebraic equation for $C$:

$$k_1(E_T-C)S = (k_{-1}+k_2)C \;\Longrightarrow\; C^{*}(S) = \frac{E_T S}{K_M + S}, \qquad \boxed{\,K_M \equiv \frac{k_{-1}+k_2}{k_1}\,}$$

Since $\dot S + \dot C = -k_2C$, setting $\dot C = 0$ gives $\dot S = -k_2C^{*}$, and:

$$\boxed{\;v = \dot P = -\dot S = \frac{V_{max}\,S}{K_M + S}, \qquad V_{max} = k_2E_T\;}$$

*In words: the turnover rate is a hyperbola in substrate, saturating at $V_{max}$, half-saturated at $S = K_M$.*

**Read the boxed step again, because it is the only shaky one.** $\dot C = 0$ is *false* — $C$ demonstrably changes over the reaction. The honest statement is that $|\dot C|$ is small **compared with the individual terms $k_1ES$ and $(k_{-1}+k_2)C$ that make it up**, so that setting their difference to zero costs little. An approximation stated as "this derivative vanishes" is always really a statement about a ratio, and until you write that ratio down you have not stated the approximation.

### When is the QSSA valid?

**The fast timescale.** Freeze $S$ at $S_0$. Then $\dot C = k_1E_TS_0 - [k_1S_0 + k_{-1} + k_2]C$ is linear, and relaxes to $C^{*}(S_0)$ with time constant

$$t_C = \frac{1}{k_1(S_0 + K_M)}$$

**The slow timescale.** Substrate drains at rate at most $V_{max}$, over a range of order $S_0+K_M$:

$$t_S = \frac{S_0 + K_M}{k_2 E_T}$$

**The condition.** Ask how much substrate is consumed *during* the transient, since the reduction assumes $S$ is essentially unchanged while $C$ equilibrates. Initially $|\dot S| \le k_1E_TS_0$, so

$$\frac{|\Delta S|_{\text{transient}}}{S_0} \;\lesssim\; \frac{k_1E_TS_0 \cdot t_C}{S_0} = \boxed{\;\frac{E_T}{K_M + S_0} \ll 1\;}$$

*In words: the QSSA is valid when the enzyme cannot sequester an appreciable fraction of the substrate.* This is the Segel–Slemrod condition, and it is the one to remember.

**It is not the textbook condition $E_T \ll S_0$, and the difference matters.** Segel's version is *weaker*: it also licenses the approximation when substrate is scarce, as long as $K_M$ is large — the regime a signalling model often sits in. It is also the version that correctly refuses when $E_T$ and $S_0$ are comparable.

**And note which criterion does the work.** The timescale ratio alone, $t_C/t_S = k_2E_T/[k_1(K_M+S_0)^2]$, can look reassuringly small in regimes where MM is badly wrong. **Separation of timescales is necessary but not sufficient here; the sequestration condition is the binding one.**

### QSSA versus rapid equilibrium — and why a good fit proves nothing

There is a second, older route to the same hyperbola. Assume binding and unbinding are fast compared with **catalysis** ($k_{-1} \gg k_2$), so $E$, $S$ and $C$ sit at binding equilibrium ([physical chemistry 3.3](../../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md) contrasts the two approximations in general kinetics; $K_d$ is [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md)):

$$\frac{ES}{C} = \frac{k_{-1}}{k_1} \equiv K_d \;\Longrightarrow\; C = \frac{E_TS}{K_d + S} \;\Longrightarrow\; v = \frac{V_{max}S}{K_d + S}$$

**Identical functional form. Different constant.** The two are related exactly:

$$\boxed{\;K_M = K_d + \frac{k_2}{k_1} \;\ge\; K_d\;}$$

*In words: the measured half-saturation constant is the binding constant plus a catalytic correction, so it is always an upper bound on affinity, never an estimate of it.*

**The consequence is a genuine identifiability problem.** Two enzymes with completely different mechanisms — one that binds tightly and turns over slowly, one that binds weakly and turns over fast — can produce **numerically identical** rate curves. You fit a beautiful hyperbola, extract $V_{max}$ and $K_M$, and you still do not know which enzyme you have, nor whether $K_M$ is anywhere near the affinity. Problem 3 constructs the pair explicitly.

**This generalizes past enzymes, and it is why the hyperbola is everywhere.** Any mechanism in which a *conserved pool of machines* binds a ligand and then does something at a fixed rate gives $v = V_{max}x/(K+x)$: transporters, receptor occupancy, polymerase on a promoter. The shape carries exactly two pieces of information — a ceiling and a half-point — and discards the mechanism. **Module 2 exploits this ruthlessly**: [2.1](02-01-input-functions-promoter-logic.md) writes a gene's production rate as such a curve without caring what the promoter is doing molecularly, and [1.4](01-04-cooperativity-hill-ultrasensitivity.md) generalizes it to the Hill function by raising $S$ to a power.

### The fix: total QSSA

When $E_T$ is comparable to $S_0 + K_M$, keep the *total* substrate $\bar S = S + C$ as the slow variable instead of the free substrate. Imposing $\dot C = 0$ with $S = \bar S - C$ gives a quadratic,

$$C^2 - (E_T + K_M + \bar S)\,C + E_T\bar S = 0, \qquad C^{*} = \frac{(E_T{+}K_M{+}\bar S) - \sqrt{(E_T{+}K_M{+}\bar S)^2 - 4E_T\bar S}}{2}$$

with $\dot{\bar S} = -k_2C^{*}$. **This total QSSA is accurate over essentially the whole parameter range, including $E_T \gg S_0$**, and it reduces to standard MM when $E_T \ll K_M + \bar S$. It costs one square root.

**And the option that is always available: simulate the full mass-action system.** MM is a *reduction*, not a law. In 1975 it saved you from an intractable integration; today it saves you three lines of code. **Use it because it makes a network interpretable, not because you have to** — and when the condition fails, stop using it.

## Picture

![Two side-by-side time-course panels. The left panel is the regime where the quasi-steady-state approximation is valid, with a hundredfold excess of substrate over enzyme: the solid full mass-action curves for free substrate, complex and product lie exactly underneath the dashed reduced Michaelis-Menten curves, and the complex jumps to its quasi-steady level within one second of a hundred-and-sixty-second reaction. The right panel is the regime where enzyme and substrate are equal: the dashed reduced curves separate visibly from the solid full ones, the reduced model turns over half the substrate in 0.64 seconds where the full system takes 1.01 seconds, and the complex holds a large fraction of the substrate.](assets/01-03-fig1.svg)

Both panels use $k_1 = 1\ \mu\text{M}^{-1}\text{s}^{-1}$, $k_{-1} = k_2 = 1\ \text{s}^{-1}$, hence $K_M = 2\ \mu\text{M}$, and start from $S_0 = 10\ \mu\text{M}$. **Only the enzyme concentration differs between them.** That is the argument: nothing about the chemistry changed, and the reduction went from exact-to-plotting-accuracy to visibly wrong.

## Worked examples

**Example 1 (mechanical — the approximation earning its keep).** Take $k_1 = 1\ \mu\text{M}^{-1}\text{s}^{-1}$, $k_{-1} = 1\ \text{s}^{-1}$, $k_2 = 1\ \text{s}^{-1}$, $E_T = 0.1\ \mu\text{M}$, $S_0 = 10\ \mu\text{M}$. Get the constants, check validity, and quantify the error.

**Constants.**

$$K_M = \frac{k_{-1}+k_2}{k_1} = \frac{1+1}{1} = 2\ \mu\text{M}, \qquad K_d = \frac{k_{-1}}{k_1} = 1\ \mu\text{M}, \qquad V_{max} = k_2E_T = 0.1\ \mu\text{M}\,\text{s}^{-1}$$

Note already that $K_M = 2K_d$ — **the half-saturation constant overstates the dissociation constant by a factor of two**, because $k_2$ is not small next to $k_{-1}$. Rapid equilibrium is *not* justified here even though the QSSA is.

**Validity.**

$$\frac{E_T}{K_M + S_0} = \frac{0.1}{12} = 8.3\times10^{-3} \ll 1 \quad \checkmark$$

$$t_C = \frac{1}{k_1(S_0+K_M)} = \frac{1}{12} = 0.083\ \text{s}, \qquad t_S = \frac{S_0+K_M}{k_2E_T} = \frac{12}{0.1} = 120\ \text{s}$$

**Three orders of magnitude of separation**, and the enzyme can sequester at most 0.83 percent of the substrate. Both criteria pass comfortably.

**Error.** The QSS complex predicted by standard MM at $S = 10$:

$$C^{*}_{\text{MM}} = \frac{E_TS_0}{K_M+S_0} = \frac{0.1 \times 10}{12} = 0.08333\ \mu\text{M}, \qquad v_0 = k_2C^{*} = 0.08333\ \mu\text{M}\,\text{s}^{-1}$$

The total-QSSA value, which does not assume free substrate equals total substrate, uses $\bar S = 10$, $E_T + K_M + \bar S = 12.1$:

$$C^{*}_{\text{tQSSA}} = \frac{12.1 - \sqrt{12.1^2 - 4(0.1)(10)}}{2} = \frac{12.1 - \sqrt{142.41}}{2} = \frac{12.1 - 11.9336}{2} = 0.08322\ \mu\text{M}$$

$$\text{relative error} = \frac{0.08333}{0.08322} - 1 = \mathbf{0.14\ \text{percent}}$$

Numerically integrating the full three-variable system confirms it at the trajectory level: the full system turns over half the substrate at $t = 64.1$ s against the reduced model's $63.9$ s — **0.35 percent, over 770 fast-timescales of simulated time.** Panel (a) of the figure is this run; the two sets of curves are indistinguishable at plotting resolution.

**Example 2 (why you'd care — the same enzyme at signalling concentrations).** Keep every rate constant and $S_0 = 10\ \mu\text{M}$, and raise the enzyme to $E_T = 10\ \mu\text{M}$ — a kinase at the same concentration as its substrate, which is ordinary in signalling.

**Validity fails, and it fails loudly.**

$$\frac{E_T}{K_M+S_0} = \frac{10}{12} = 0.83 \quad \text{(fails)}$$

**The approximation refutes itself, and this is the cleanest way to see the failure.** Standard MM predicts the complex sits at

$$C^{*}_{\text{MM}} = \frac{10 \times 10}{12} = 8.33\ \mu\text{M}$$

That is **83 percent of all the substrate in the system, locked inside enzyme** — while the derivation assumed free substrate was still $10\ \mu\text{M}$. A model that predicts the destruction of the assumption it was derived under is not making a small error.

**What is actually true.** Solve the QSS condition self-consistently in total substrate:

$$E_T + K_M + \bar S = 22, \qquad C^{*} = \frac{22 - \sqrt{484 - 400}}{2} = \frac{22 - 9.165}{2} = 6.417\ \mu\text{M}$$

So free substrate is only $10 - 6.417 = 3.58\ \mu\text{M}$, and the true initial rate is

$$v_0 = k_2C^{*} = 6.417\ \mu\text{M}\,\text{s}^{-1} \quad\text{versus}\quad v_0^{\text{MM}} = \frac{10 \times 10}{12} = 8.333\ \mu\text{M}\,\text{s}^{-1}$$

$$\textbf{Michaelis–Menten is 30 percent fast, at } t = 0, \textbf{ with every rate constant known exactly.}$$

(Sanity check: feeding the *true* free substrate into the MM formula reproduces it — $10(3.58)/(2+3.58) = 6.42$. The rate law was never the problem; **using total substrate where the law wants free substrate is the problem.**)

**And the error compounds.** The full simulation in panel (b) turns over half the substrate in $1.01$ s where the reduced model claims $0.64$ s — the reduced model runs the reaction **1.6 times too fast**, and the discrepancy grows across the whole time course rather than decaying.

**Why this is the case you will actually meet.** Textbook enzymology is done at nanomolar enzyme and millimolar substrate because the experimentalist *chose* those conditions to make the approximation hold. **A cell chose nothing.** Kinase–phosphatase cycles, transcription-factor–promoter binding, and any signalling step where a protein acts on a partner of similar abundance all violate the condition routinely — and [4.4](04-04-signal-transduction-cascades.md) shows that this is not merely a nuisance but the *source* of a whole class of switch-like behaviour that MM cannot see. There, the substrate-sequestration effect that ruins the approximation here becomes the mechanism.

## Watch out

- **You might read $\dot C = 0$ as "the complex is constant."** It is not; it falls steadily as substrate drains. The claim is that $C$ has been **slaved** to $S$ — its own dynamics are fast enough to be invisible, so it is a function, not a variable. Every timescale-separation argument in this course has this shape.
- **You might use $E_T \ll S_0$ as the validity condition.** The right condition is $E_T \ll K_M + S_0$. It is weaker, and the difference is exactly the low-substrate regime where a signalling model usually lives.
- **You might treat a small timescale ratio as sufficient.** In Example 2 the ratio $t_C/t_S$ is $0.069$ — smallish — and MM is still 30 percent wrong. **The sequestration condition is the binding constraint, not the timescale ratio.**
- **You might read $K_M$ as a binding affinity.** $K_M = K_d + k_2/k_1 \ge K_d$, with equality only when catalysis is infinitely slow. Reporting $K_M$ as "the affinity" is an upper bound quoted as a measurement.
- **You might think a good hyperbolic fit validates the mechanism.** It does not. QSSA and rapid equilibrium give the same functional form with different constants, and so does any binding-then-turnover scheme. **Curve shape is evidence about form, never about mechanism** — a point that will recur in [1.4](01-04-cooperativity-hill-ultrasensitivity.md), where a fitted Hill coefficient turns out not to count binding sites.
- **You might treat MM as a law to be applied.** It is a reduction to be checked. When the condition fails you have two honest options — total QSSA, or simulating the full mass-action system — and the second one is cheap.

## One-liner

> Michaelis–Menten is not a law but a timescale-separation reduction that slaves the complex to the substrate, it is valid precisely when the enzyme cannot sequester an appreciable fraction of the substrate ($E_T \ll K_M + S_0$), and because the same hyperbola falls out of several different mechanisms, fitting one tells you the shape of the response and nothing about what produced it.

## Problems

**P1 (🟢)** An enzyme has $k_1 = 5\ \mu\text{M}^{-1}\text{s}^{-1}$, $k_{-1} = 20\ \text{s}^{-1}$, $k_2 = 5\ \text{s}^{-1}$, and is assayed at $E_T = 0.02\ \mu\text{M}$, $S_0 = 50\ \mu\text{M}$. (a) Compute $K_M$, $K_d$ and $V_{max}$. (b) Check the QSSA validity condition and compute the initial rate. (c) Is the rapid-equilibrium approximation also justified? Quantify.

**P2 (🟡, bridges to [4.4](04-04-signal-transduction-cascades.md))** A kinase is present at $E_T = 2\ \mu\text{M}$ acting on a substrate at $S_0 = 3\ \mu\text{M}$, with $K_M = 1\ \mu\text{M}$ and $k_2 = 2\ \text{s}^{-1}$. (a) Check the validity condition. (b) Compute the initial rate as standard MM predicts it. (c) Compute it by the total QSSA, and report the percentage error MM makes and the fraction of substrate hiding inside the enzyme. (d) In one sentence, say what this implies for a model of a kinase cascade built from MM terms.

**P3 (🔴, optional)** Enzyme A has $k_1 = 10\ \mu\text{M}^{-1}\text{s}^{-1}$, $k_{-1} = 90\ \text{s}^{-1}$, $k_2 = 10\ \text{s}^{-1}$, assayed at $E_T = 9$ nM. Enzyme B has $k_1 = 10\ \mu\text{M}^{-1}\text{s}^{-1}$, $k_{-1} = 10\ \text{s}^{-1}$, $k_2 = 90\ \text{s}^{-1}$, assayed at $E_T = 1$ nM. (a) Compute $K_M$, $V_{max}$ and $K_d$ for each, and state what a rate-versus-substrate experiment would show. (b) Prove $K_M \ge K_d$ in general and say when equality holds. (c) Stopped-flow measurement of the fast transient returns the relaxation rate $\lambda = k_1S + k_{-1} + k_2$ as a function of $S$. Show that this experiment *still* cannot separate the two enzymes, then name the one additional measurement that does, and carry it out on both.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$K_M = \frac{k_{-1}+k_2}{k_1} = \frac{20+5}{5} = \mathbf{5\ \mu\text{M}}, \qquad K_d = \frac{k_{-1}}{k_1} = \frac{20}{5} = \mathbf{4\ \mu\text{M}}$$

$$V_{max} = k_2E_T = 5 \times 0.02 = \mathbf{0.1\ \mu\text{M}\,\text{s}^{-1}}$$

**(b)**

$$\frac{E_T}{K_M+S_0} = \frac{0.02}{5+50} = \frac{0.02}{55} = 3.6\times10^{-4} \ll 1 \quad \checkmark$$

$$v_0 = \frac{V_{max}S_0}{K_M+S_0} = \frac{0.1 \times 50}{55} = \mathbf{0.0909\ \mu\text{M}\,\text{s}^{-1}}$$

— 91 percent of $V_{max}$, since $S_0$ is ten $K_M$.

**(c) No, or at best marginally.** Rapid equilibrium requires $k_2 \ll k_{-1}$; here $k_2/k_{-1} = 5/20 = 0.25$, which is not small. The damage is visible in the constants:

$$\frac{K_M}{K_d} = \frac{5}{4} = 1.25$$

so the rapid-equilibrium model would place half-saturation at $4\ \mu\text{M}$ instead of $5\ \mu\text{M}$ — **a 20 percent error in the half-saturation constant, with no effect at all on the shape of the curve.** This is the identifiability point in miniature: the two approximations are indistinguishable from the fit and disagree about the physics.

**P2 (a)**

$$\frac{E_T}{K_M+S_0} = \frac{2}{1+3} = 0.5 \quad \text{(fails)}$$

Not small — the enzyme can hide up to half the substrate. Standard MM is not licensed.

**(b)** $V_{max} = k_2E_T = 2 \times 2 = 4\ \mu\text{M}\,\text{s}^{-1}$, so

$$v_0^{\text{MM}} = \frac{4 \times 3}{1+3} = \mathbf{3\ \mu\text{M}\,\text{s}^{-1}}$$

**(c)** Total QSSA with $\bar S = 3$, $E_T = 2$, $K_M = 1$:

$$E_T + K_M + \bar S = 6, \qquad (6)^2 - 4E_T\bar S = 36 - 24 = 12$$

$$C^{*} = \frac{6 - \sqrt{12}}{2} = \frac{6 - 3.4641}{2} = 1.2679\ \mu\text{M}, \qquad v_0 = k_2C^{*} = \mathbf{2.536\ \mu\text{M}\,\text{s}^{-1}}$$

$$\text{MM overestimates by } \frac{3}{2.536} - 1 = \mathbf{18.3\ \text{percent}}$$

Free substrate is $3 - 1.268 = 1.732 = \sqrt{3}\ \mu\text{M}$, so **42 percent of the substrate is sequestered in complex**. (Check: $4\sqrt3/(1+\sqrt3) = 6.928/2.732 = 2.536$ ✓ — the rate law is fine once given the true free substrate.)

**(d)** **Every layer of an MM-based cascade model inherits this error, and the errors do not cancel — they compound multiplicatively through the layers**, so a three-layer cascade built from MM terms can be wrong by a large factor in both amplitude and timing. Worse, the sequestration that MM ignores is not just noise: it removes free substrate from downstream availability, which is a real effect ([4.4](04-04-signal-transduction-cascades.md) treats it as *retroactivity*), and it is one of the ingredients that makes covalent-modification cycles behave like switches at all.

**P3 (a)**

| | $K_M$ | $V_{max}$ | $K_d = k_{-1}/k_1$ | $k_2/k_{-1}$ |
|---|---|---|---|---|
| **A** | $(90+10)/10 = 10\ \mu\text{M}$ | $10 \times 9\ \text{nM} = 90$ nM s$^{-1}$ | $90/10 = \mathbf{9\ \mu\text{M}}$ | $0.11$ |
| **B** | $(10+90)/10 = 10\ \mu\text{M}$ | $90 \times 1\ \text{nM} = 90$ nM s$^{-1}$ | $10/10 = \mathbf{1\ \mu\text{M}}$ | $9$ |

**Same $K_M$, same $V_{max}$ — the two rate curves are numerically identical at every substrate concentration.** No amount of steady-state data separates them. Yet their affinities differ ninefold, their turnover numbers differ ninefold, and rapid equilibrium is an excellent approximation for A ($k_2/k_{-1} = 0.11$) and a disaster for B ($k_2/k_{-1} = 9$).

**(b)**

$$K_M = \frac{k_{-1}+k_2}{k_1} = \frac{k_{-1}}{k_1} + \frac{k_2}{k_1} = K_d + \frac{k_2}{k_1}$$

Since $k_1, k_2 > 0$, the correction term is strictly positive, so $K_M > K_d$ always, with equality only in the limit $k_2 \to 0$ — a binding protein that never catalyses anything. **In words: $K_M$ approaches the true affinity only for a bad enzyme.** A fitted $K_M$ is an upper bound on $K_d$; it is a good estimate of it exactly when rapid equilibrium holds, which is the condition you cannot check from the fit.

**(c) Why stopped-flow alone fails.** The relaxation experiment returns a line: slope $k_1$ and intercept $k_{-1}+k_2$. For both enzymes,

$$k_1 = 10\ \mu\text{M}^{-1}\text{s}^{-1}, \qquad k_{-1}+k_2 = 100\ \text{s}^{-1}$$

**Identical again**, and necessarily so — the intercept is $k_1K_M$, so the transient measurement adds only $k_1$ to what the steady-state fit already gave. Two constraints on three unknowns. **The sum $k_{-1}+k_2$ is measurable; the split is not.**

**The missing measurement is the active enzyme concentration** — active-site titration with a stoichiometric inhibitor or a burst-phase amplitude. It converts $V_{max}$ into $k_2$:

$$k_2 = \frac{V_{max}}{E_T}: \qquad \text{A}: \frac{90\ \text{nM s}^{-1}}{9\ \text{nM}} = \mathbf{10\ \text{s}^{-1}}, \qquad \text{B}: \frac{90\ \text{nM s}^{-1}}{1\ \text{nM}} = \mathbf{90\ \text{s}^{-1}}$$

Then $k_{-1} = k_1K_M - k_2$ and $K_d = k_{-1}/k_1$:

$$\text{A}: k_{-1} = 100 - 10 = 90 \Rightarrow K_d = \mathbf{9\ \mu\text{M}}, \qquad \text{B}: k_{-1} = 100 - 90 = 10 \Rightarrow K_d = \mathbf{1\ \mu\text{M}}$$

**The general lesson is about model identifiability, not about enzymes.** The reduced model has two parameters; the mechanism has three. One parameter of information was destroyed by the reduction, and no amount of data collected *in the reduced regime* can recover it — you have to measure a quantity the reduction discarded ($E_T$), or leave the regime where the reduction applies. **Every reduction in this course does something like this, and asking what a reduction made unmeasurable is a habit worth keeping.**

</details>

## Flashback

**From Lesson 1.1 (the systems view of the cell):** Cytosolic calcium is heavily buffered. Free $\text{Ca}^{2+}$ at concentration $c$ binds a mobile buffer present at total concentration $B_T = 100\ \mu\text{M}$ with dissociation constant $K_B = 1\ \mu\text{M}$ and association rate $k_{on} = 100\ \mu\text{M}^{-1}\text{s}^{-1}$; binding is much faster than anything else in the cell, so treat it as instantaneously equilibrated. A channel opens and delivers calcium at $J = 10\ \mu\text{M}\,\text{s}^{-1}$.

(a) Using the same slaving move as this lesson, show that free calcium rises at $\dot c = J/(1+\kappa)$ and derive $\kappa$; evaluate both at resting $c = 0.1\ \mu\text{M}$. (b) Verify the timescale separation that licenses the reduction. (c) Name one situation in which it fails.

<details>
<summary>Solution</summary>

**(a)** Bound calcium is slaved to free calcium by the fast equilibrium — the same structural move as $C^{*}(S)$ above, with buffer playing the enzyme's role:

$$b = \frac{B_T\,c}{K_B + c}$$

Only *total* calcium obeys the influx balance, since buffering moves calcium between pools without creating or destroying it — a conservation law of the sort [1.2](01-02-mass-action-rate-odes.md) reads off the left null space:

$$c_{\text{tot}} = c + b, \qquad \dot c_{\text{tot}} = J$$

Differentiate $b$ through $c$ and collect:

$$\dot c\left(1 + \frac{db}{dc}\right) = J, \qquad \kappa \equiv \frac{db}{dc} = \frac{B_T K_B}{(K_B + c)^2}$$

$$\boxed{\;\dot c = \frac{J}{1+\kappa}\;}$$

*In words: the buffer swallows a fraction $\kappa/(1+\kappa)$ of every calcium ion that enters, so free calcium rises that much more slowly than total calcium.* At $c = 0.1\ \mu\text{M}$:

$$\kappa = \frac{100 \times 1}{(1.1)^2} = \frac{100}{1.21} = 82.6, \qquad \dot c = \frac{10}{83.6} = \mathbf{0.120\ \mu\text{M}\,\text{s}^{-1}}$$

**Free calcium rises about 84 times more slowly than the influx alone would suggest** — a two-variable system collapsed to one, and the entire effect of the deleted variable surviving as a single dimensionless number. **The buffering capacity $\kappa$ is not a constant**: at $c = 0.6\ \mu\text{M}$ it has already fallen to $100/(1.6)^2 = 39$, so a large influx outruns its own brake.

**(b)** The buffer relaxes at rate $\lambda = k_{on}(c + B_{\text{free}}) + k_{off}$, with $k_{off} = k_{on}K_B = 100\ \text{s}^{-1}$ and $B_{\text{free}} = B_TK_B/(K_B+c) = 100/1.1 = 90.9\ \mu\text{M}$:

$$\lambda = 100(0.1 + 90.9) + 100 = 9200\ \text{s}^{-1} \;\Rightarrow\; \tau \approx 0.11\ \text{ms}$$

Against the slow timescale: at $0.120\ \mu\text{M}\,\text{s}^{-1}$, a resting-magnitude change in $c$ takes of order a second. **A separation of roughly $10^{4}$ — far cleaner than the enzyme case**, which is why the rapid-buffer approximation is standard.

**(c) It fails at the mouth of an open channel**, which is [1.1](01-01-systems-view-of-the-cell.md)'s warning that the cell is not a well-stirred beaker, in concrete form. Within tens of nanometres of a conducting channel, local free calcium reaches tens of micromolar. Then $c \gg K_B$, the buffer **saturates**, $\kappa$ collapses toward zero, and free calcium tracks influx essentially unbuffered — the nanodomain that actually triggers exocytosis. **Structurally this is the same failure as Example 2's**: the fast partner is a finite pool, and once you demand more of it than it has, the slaving relation stops holding. Both are diagnosed by asking not "is it fast?" but **"is there enough of it?"**

</details>

## Connections

- **Backward:** [1.2](01-02-mass-action-rate-odes.md) supplied the mass-action system, the stoichiometric matrix, and the conservation law $E+C=E_T$ that does the exact half of the reduction; [1.1](01-01-systems-view-of-the-cell.md) supplied timescale separation, of which this is the first serious application. **Two reductions, two mechanisms: conservation is exact and free, timescale separation is approximate and has terms of validity.**
- **Forward:** [1.4](01-04-cooperativity-hill-ultrasensitivity.md) raises this hyperbola to a power and turns it into the Hill function, the engineering primitive of Module 2; [2.1](02-01-input-functions-promoter-logic.md) uses it as a promoter's input function; [4.4](04-04-signal-transduction-cascades.md) returns to the regime where the QSSA fails and shows that **operating there is how the cell builds ultrasensitive switches** out of non-cooperative parts.
- **Sideways:** the enzymology this lesson deliberately does not repeat is [biophysics 4.2](../../biophysics/lessons/04-02-michaelis-menten.md), [biochemistry 2.2](../../biochemistry/lessons/02-02-michaelis-menten-kinetics.md) and [physical chemistry 3.5](../../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md); inhibition is [biochemistry 2.3](../../biochemistry/lessons/02-03-enzyme-inhibition.md). The steady-state-versus-pre-equilibrium distinction is the general-kinetics version of the QSSA-versus-rapid-equilibrium contrast — [physical chemistry 3.3](../../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md). And the geometric content, trajectories collapsing onto a curve and then crawling along it, is a slow manifold in the language of [dynamical systems 1.5](../../dynamical-systems/lessons/01-05-phase-portraits.md); [3.1](03-01-steady-states-stability-phase-planes.md) makes that picture explicit and [3.4](03-04-oscillations-repressilator-hopf.md) exploits it for relaxation oscillation.

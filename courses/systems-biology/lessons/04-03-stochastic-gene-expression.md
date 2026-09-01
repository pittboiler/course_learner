# Systems Biology · Lesson 4.3: Stochastic gene expression & the master equation

> ⏱ ~15 min · Module 4: Metabolic networks, noise & spatial pattern · Builds on: [4.2](04-02-flux-balance-analysis.md), [2.3](02-03-positive-autoregulation.md) · Unlocks: [4.4](04-04-signal-transduction-cascades.md) (signal transduction & cascades)

## Why this matters

Every equation in Modules 1–3 wrote a concentration as a real number evolving smoothly in time. [1.1](01-01-systems-view-of-the-cell.md) already flagged the arithmetic that makes this uncomfortable: **one molecule in an *E. coli* cell is about 1.7 nM**, and a transcription factor at a perfectly ordinary regulatory concentration is present in **ten copies**. Ten. Not $10^{18}$, which is what "concentration" as a continuum quietly assumes.

So the ODE is not describing a cell. It is describing an average over cells, and the average may describe none of them. Two genetically identical bacteria, in the same flask, at the same moment, differ in the copy number of any given protein by tens of percent — and this is not measurement error, not sloppy biology, and not something better technique will remove. **It is the arithmetic of counting.**

The reason this is interesting rather than merely a caveat is that the noise is *informative*. The width and shape of a population histogram encode kinetic mechanisms that no static measurement can see: whether a promoter fires steadily or in bursts, how many proteins come off each transcript, whether the gene is under feedback. **A histogram is a mechanism report.** And in a handful of cases the cell does not suppress the noise at all — it exploits it, splitting a clonal population into two behaviours as a hedge against an uncertain environment.

## The idea

**Reactions fire at random times, so molecule counts do a random walk.** Production is not a smooth flow at rate $\beta$; it is discrete events arriving at *average* rate $\beta$, and degradation is each existing molecule independently rolling a die. At $10^{18}$ molecules the relative fluctuation is $10^{-9}$ and nobody notices. At 10 molecules it is 32 percent.

**Two questions, and they are genuinely different.** How much does a cell vary — and *which* variation is the gene's own doing?

Because there are two kinds. **Intrinsic noise** is the private randomness of this gene in this cell: which second the polymerase happened to land, whether that transcript happened to be degraded early. **Extrinsic noise** is everything the gene shares with the rest of the cell: how many ribosomes this cell has, how big it is, where it sits in the cell cycle, how much polymerase is free. Extrinsic fluctuations move *every* gene in the cell together; intrinsic fluctuations move each one independently.

**Separating them looks impossible, and the experiment that does it is one of the most elegant designs in the field.** Elowitz, Levine, Siggia and Swain (2002) put **two distinguishable fluorescent proteins — CFP and YFP — under two identical copies of the same promoter, in the same cell.** Now every cell reports two numbers instead of one, and the two kinds of noise become geometrically distinguishable:

- A fluctuation in *shared* machinery raises or lowers **both** colours together. It moves the cell **along the diagonal** $c = y$.
- A fluctuation private to one gene copy moves **one** colour and not the other. It pushes the cell **perpendicular to the diagonal**.

**Scatter along the diagonal is extrinsic; scatter across it is intrinsic.** The decomposition is a rotation of axes, it requires no model, no fitting, and no assumption about mechanism — it needs only that the two reporters are identical and independent given the cell state. That is the whole design, and it settled a question that a decade of single-reporter measurements could not touch.

**Then: what sets the size of the intrinsic part?** Here the answer is exact and short. Constant production plus first-order degradation gives a **Poisson** steady state, hence

$$F \equiv \frac{\sigma^2}{\mu} = 1, \qquad CV \equiv \frac{\sigma}{\mu} = \frac{1}{\sqrt{\mu}}$$

**Noise falls as the square root of copy number, which is why the low-abundance regulators are the noisy ones** — and regulators are low-abundance almost by definition, because a regulator that had to be made in millions of copies would be an absurd way to carry a signal.

**And the finding that made this a field: real genes usually have $F > 1$, often by an order of magnitude.** Something is producing molecules in clumps. Two things are, in fact — each mRNA is translated several times before it dies, and the promoter itself switches between an active and an inactive state so transcripts arrive in episodes. **The excess Fano factor is a burst size**, $b = F - 1$, and reading it off a histogram infers a kinetic mechanism you never observed directly.

## The formal version

### The chemical master equation

Stop tracking concentrations and track the **probability of each integer state**. Let $\mathbf{n} = (n_1,\dots,n_N)$ be the copy-number vector and $P(\mathbf{n},t)$ the probability the cell is in that state.

Each reaction $j$ gets a **propensity** $a_j(\mathbf{n})$, defined so that $a_j(\mathbf{n})\,dt$ is the probability reaction $j$ fires exactly once in $[t,\,t+dt)$, and a **jump vector** $\mathbf{s}_j$ — which is precisely the $j$-th column of the stoichiometric matrix $S$ from [1.2](01-02-mass-action-rate-odes.md), reused without modification. Then

$$\boxed{\;\frac{\partial P(\mathbf{n},t)}{\partial t} = \sum_{j=1}^{R}\Bigl[\,a_j(\mathbf{n}-\mathbf{s}_j)\,P(\mathbf{n}-\mathbf{s}_j,t)\;-\;a_j(\mathbf{n})\,P(\mathbf{n},t)\,\Bigr]\;}$$

*In words: probability flows into state $\mathbf{n}$ from every state one reaction away, and leaks out of $\mathbf{n}$ through every reaction that can fire there.* Gain minus loss, bookkeeping on a lattice.

Two notes on propensities. For a first-order reaction $a = k\,n$: each of the $n$ molecules is independently at risk. For a bimolecular reaction $A+B$, $a = (k/\Omega)\,n_A n_B$ with $\Omega$ the cell volume — **the volume appears explicitly**, which it never did in the ODEs, and that is the formal signature of the fact that noise depends on counts and not on concentrations.

**The CME is exact and almost never solvable.** It is an infinite coupled linear ODE system, one equation per lattice point. Two routes out, taken below: solve the rare tractable case exactly, or sample from it.

### The birth–death process, solved

Constant production at rate $k$ (molecules per unit time), first-order removal at rate $\gamma$ per molecule — where $\gamma$ lumps degradation and dilution by growth, exactly as $\alpha$ did in [2.1](02-01-input-functions-promoter-logic.md). The CME collapses to a one-step chain:

$$\frac{dp_n}{dt} = \underbrace{k\,p_{n-1}}_{\text{birth into }n} + \underbrace{\gamma (n+1)\,p_{n+1}}_{\text{death into }n} - \underbrace{\bigl(k + \gamma n\bigr)p_n}_{\text{out of }n}$$

**The trick that solves it.** Define the net probability current from $n-1$ to $n$:

$$J_n \equiv k\,p_{n-1} - \gamma n\,p_n \qquad\Longrightarrow\qquad \dot p_n = J_n - J_{n+1}$$

At steady state $J_n = J_{n+1}$ for every $n$, so the current is a single constant. But **the chain has a floor**: there is no state $n=-1$, so $J_0 = 0$. Hence $J_n = 0$ everywhere.

*In words: because copy number cannot go negative, the stationary state of a one-step chain is forced into detailed balance — every adjacent pair of states exchanges probability at equal rates.* This is worth a moment, since [1.2](01-02-mass-action-rate-odes.md) insisted a living cell is at steady state and never at equilibrium; here a non-equilibrium system nonetheless has a detailed-balanced *probability* flow, purely because the state space is one-dimensional and bounded below.

Setting $J_n = 0$ gives the recursion $p_n = (\lambda/n)\,p_{n-1}$ with $\lambda \equiv k/\gamma$, so $p_n = (\lambda^n/n!)\,p_0$, and $\sum_n \lambda^n/n! = e^{\lambda}$ fixes $p_0$:

$$\boxed{\;p_n = \frac{\lambda^{n}e^{-\lambda}}{n!}, \qquad \lambda = \frac{k}{\gamma}\;}$$

**Poisson** ([prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)), with the parameter equal to the deterministic steady state of $\dot x = k - \gamma x$. So:

$$\mu = \sigma^2 = \lambda \qquad\Longrightarrow\qquad \boxed{\;F = \frac{\sigma^2}{\mu} = 1, \qquad CV = \frac{1}{\sqrt{\mu}}\;}$$

| mean copies $\mu$ | $CV$ | what it is |
|---|---|---|
| 1 | **100%** | a single-copy plasmid, a gene |
| 4 | 50% | a typical bacterial mRNA |
| 10 | **32%** | a low-abundance transcription factor |
| 100 | 10% | an abundant regulator |
| 1000 | 3.2% | a metabolic enzyme |
| $10^{4}$ | **1%** | a ribosomal protein |

**Regulators sit in the top half of that table and enzymes in the bottom half**, which is not an accident: an enzyme's job is throughput and a regulator's job is to carry one bit, so the cell pays for copies where copies buy something.

### The two-colour decomposition

Let $c$ and $y$ be the two reporter levels measured in one cell, and $\langle\cdot\rangle$ an average over cells. Define

$$\eta_{\text{int}}^{2} \equiv \frac{\bigl\langle (c-y)^{2}\bigr\rangle}{2\,\langle c\rangle\langle y\rangle}, \qquad \eta_{\text{ext}}^{2} \equiv \frac{\langle cy\rangle - \langle c\rangle\langle y\rangle}{\langle c\rangle\langle y\rangle}, \qquad \eta_{\text{tot}}^{2} \equiv \frac{\bigl\langle c^{2}+y^{2}\bigr\rangle - 2\langle c\rangle\langle y\rangle}{2\,\langle c\rangle\langle y\rangle}$$

*In words: intrinsic noise is the mean squared* difference *between the two colours in the same cell; extrinsic noise is their* covariance*; total noise is the ordinary variance, symmetrized over the two channels.*

**They add exactly, and the algebra takes one line:**

$$\eta_{\text{int}}^{2} + \eta_{\text{ext}}^{2} = \frac{\langle c^{2}\rangle - 2\langle cy\rangle + \langle y^{2}\rangle + 2\langle cy\rangle - 2\langle c\rangle\langle y\rangle}{2\langle c\rangle\langle y\rangle} = \frac{\langle c^{2}\rangle+\langle y^{2}\rangle - 2\langle c\rangle\langle y\rangle}{2\langle c\rangle\langle y\rangle} = \boxed{\;\eta_{\text{tot}}^{2}\;}$$

**The cross term cancels identically.** No model, no approximation, no fitted parameter — an algebraic identity on any two-channel dataset. And when the channels are calibrated to a common mean $\mu$, the last expression is just $(\sigma_c^2+\sigma_y^2)/2\mu^2$, the average of the two single-channel $CV^2$ values. So **the total is what one colour would have given you; the second colour is what splits it.**

**Why it works.** Condition on the cell's global state $Z$ — its ribosome content, size, cycle phase, free polymerase. Given $Z$, the two identical gene copies fire independently, so $\operatorname{Cov}(c,y \mid Z) = 0$. The law of total covariance then gives $\operatorname{Cov}(c,y) = \operatorname{Var}\bigl(\mathbb{E}[c\mid Z]\bigr)$ — **the covariance between the colours is exactly the variance contributed by the shared state, with the private randomness eliminated by construction.** That is the entire experiment in one identity, and it is why the design needs two colours and not two cells, two timepoints, or a better microscope.

**Three controls make it an experiment rather than a formula.** (i) The two promoters must be genuinely identical and integrated at equivalent chromosomal positions, or a systematic offset masquerades as intrinsic noise. (ii) A strain in which *one* gene drives both colours should report $\eta_{\text{int}} = 0$; what it actually reports is the measurement floor, which is then subtracted. (iii) The colours must have matched maturation times, since a slow-folding fluorophore low-pass-filters its own fluctuations and reads as artificially quiet.

**The result, and the part that is more useful than the decomposition itself.** In *E. coli*, intrinsic noise dominated at low expression and fell as expression rose; extrinsic noise was roughly **independent of the mean**, because it enters as a multiplicative factor on everything. Total noise therefore has a **floor**:

$$\eta_{\text{tot}}^{2} \;\approx\; \underbrace{\frac{F}{\mu}}_{\text{falls as }1/\mu} \;+\; \underbrace{\eta_{\text{ext}}^{2}}_{\text{constant}}$$

**You cannot express your way out of noise.** Past a few hundred copies the intrinsic term is negligible and the cell-to-cell variability is entirely inherited from the cell's own global fluctuations — a hard limit on how precisely any single gene can report anything.

### Gillespie's algorithm

When the CME will not solve, sample from it. Given the current state $\mathbf{n}$ and time $t$, compute all propensities and their total $a_0 = \sum_j a_j(\mathbf{n})$, then:

1. **When.** The waiting time to the next reaction is exponential with rate $a_0$: draw $r_1$ uniform on $(0,1)$ and set $\tau = -\ln r_1 / a_0$.
2. **Which.** Reaction $j$ fires with probability $a_j/a_0$: draw $r_2$ uniform and take the smallest $j$ with $\sum_{i\le j} a_i > r_2 a_0$.
3. **Update.** $\mathbf{n} \to \mathbf{n} + \mathbf{s}_j$, $t \to t + \tau$, recompute, repeat.

*In words: the reactions race, the winner is chosen in proportion to its rate, and the clock jumps straight to the event.* **This is exact sampling of the CME, not a discretization** — there is no time step and no truncation error, and the memorylessness of the exponential is what makes steps 1 and 2 independent. Its cost is that it simulates every individual reaction event, so it is slowest exactly when molecule numbers are large, which is exactly when you did not need it. That trade is what the intermediate approximations — tau-leaping, the chemical Langevin equation, moment closure — exist to soften; the Langevin route is the same fluctuation-dissipation reasoning as [stat-mech 6.1](../../stat-mech/lessons/06-01-brownian-langevin.md), and [2.3](02-03-positive-autoregulation.md) already used it to get $F = 1/(1-\phi)$ for an autoregulated gene.

### Bursting, and reading a mechanism off a histogram

**Source one: translational bursting.** Transcription makes mRNA at rate $k_m$, each mRNA is translated at rate $k_p$ and degraded at rate $\gamma_m$, protein is removed at $\gamma_p$. Each transcript therefore delivers a geometric number of proteins with mean

$$b_p = \frac{k_p}{\gamma_m}$$

before it dies. Solving the two-stage moment equations gives the protein Fano factor

$$F_p = 1 + \frac{k_p}{\gamma_m + \gamma_p} \;\approx\; 1 + b_p \qquad (\gamma_p \ll \gamma_m)$$

*In words: even a perfectly steady promoter makes protein in clumps, because mRNA is short-lived and each copy is read several times.* In bacteria mRNA half-lives are a few minutes and proteins are stable over a generation, so $\gamma_p \ll \gamma_m$ holds comfortably.

**Source two: transcriptional bursting.** The promoter itself switches OFF $\to$ ON at rate $k_{\text{on}}$ and back at $k_{\text{off}}$, transcribing at $k_m$ only while ON — the **random telegraph** model. Its exact mRNA Fano factor is

$$F_m = 1 + \frac{k_m\,k_{\text{off}}}{(k_{\text{on}}+k_{\text{off}})(k_{\text{on}}+k_{\text{off}}+\gamma_m)}$$

Two limits, and both matter. If switching is **fast** ($k_{\text{on}}, k_{\text{off}} \gg \gamma_m, k_m$) the second term vanishes and $F_m \to 1$: the gene sees a time-averaged rate and is Poissonian again. If switching is **slow** with rare brief ON episodes ($k_{\text{on}} \ll k_{\text{off}}$, $\gamma_m \ll k_{\text{off}}$),

$$F_m \approx 1 + \frac{k_m}{k_{\text{off}}} = 1 + b_m, \qquad b_m \equiv \text{transcripts per ON episode}$$

**Both sources give the same signature**, and the general statement is worth boxing:

$$\boxed{\;\text{burst size} = F - 1, \qquad \text{burst frequency } a = \frac{\gamma\,\mu}{b}\;}$$

*In words: the width of the histogram, above the Poisson baseline, is the number of molecules made per production event; the mean then fixes how often those events happen.* A snapshot of a fixed population reports a rate constant nobody watched.

**And the honest limit, which is the same warning this course has issued twice already.** A protein Fano factor cannot tell you *which* burst source you have — a $b$ of 9 could be nine proteins per mRNA from a steady promoter, or a bursty promoter with efficient transcripts, or both. Separating them requires counting mRNA directly. This is [1.3](01-03-michaelis-menten-qssa.md)'s point that a fitted hyperbola does not distinguish QSSA from rapid equilibrium, and [1.4](01-04-cooperativity-hill-ultrasensitivity.md)'s that a fitted Hill coefficient does not distinguish cooperativity from titration, arriving a third time: **the functional form is degenerate across mechanisms, so a good fit is a constraint and never an identification.**

## Picture

![Panel a shows protein copy number against time for two genetically identical cells. Both traces are jagged, stepping upward in bursts and decaying between them, and they diverge to clearly different levels, while the smooth deterministic curve rises to a single steady state of 40 copies and describes neither cell. Panel c is a scatter of two-colour reporter measurements, cyan fluorescence against yellow fluorescence, forming a cloud stretched along the diagonal where the two colours are equal, with a double-headed arrow along the diagonal labelled extrinsic and a second double-headed arrow perpendicular to it labelled intrinsic. Panel b shows two steady-state distributions with the same mean of 40 copies: a tall narrow Poisson curve with Fano factor 1 and coefficient of variation 16 percent, and a much lower and broader bursty curve with Fano factor 10 and coefficient of variation 50 percent. Beside it a sample trace shows the promoter switching on in three brief episodes per generation, each producing a staircase of transcripts that then decays away, which is the mechanism that makes the distribution broad.](assets/04-03-fig1.svg)

**Panel (a) is the whole argument against Modules 1–3 being the last word**, and panel (b) is the compensation: the deterministic curve got the mean right and told you nothing else, while the width of the histogram tells you how the molecules were made.

## Worked examples

**Example 1 (mechanical — reading a burst size and a burst frequency off a histogram).** A transcription factor is measured in thousands of single cells. The mean is 40 copies per cell and the standard deviation is 20 copies. The protein is stable, so its removal is dilution by growth with a generation time of 30 min. (a) What would a Poissonian gene have given? (b) Extract the burst size and burst frequency. (c) Say what the numbers mean.

**(a)** For a birth–death gene at $\mu = 40$:

$$\sigma = \sqrt{40} = 6.32 \ \text{copies}, \qquad CV = \frac{1}{\sqrt{40}} = \mathbf{15.8\ \text{percent}}, \qquad F = 1$$

**(b)** The measurement:

$$\sigma^{2} = 20^{2} = 400 \qquad\Longrightarrow\qquad F = \frac{400}{40} = \mathbf{10}, \qquad CV = \frac{20}{40} = \mathbf{50\ \text{percent}}$$

$$b = F - 1 = \mathbf{9\ \text{proteins per burst}}$$

The removal rate is dilution, $\gamma = \ln 2 / 30 = 0.02310\ \text{min}^{-1}$, so from $\mu = ab/\gamma$:

$$a = \frac{\gamma\mu}{b} = \frac{0.02310 \times 40}{9} = \mathbf{0.1027\ \text{bursts min}^{-1}}$$

Check: $ab/\gamma = 0.1027 \times 9 / 0.02310 = 40.0$ ✓, and $CV = \sqrt{F/\mu} = \sqrt{10/40} = 0.500$ ✓.

**(c)** One burst every $1/0.1027 = 9.7$ min, so **about three production episodes per generation.** The cell's entire complement of 40 molecules of this regulator was assembled in roughly three events — and *that* is why the histogram is three times wider than counting statistics allow ($CV$ inflated by $\sqrt{F} = 3.16$).

**Notice what has been inferred and from what.** A fixed snapshot of a dead population — no time-lapse, no promoter reporter, no biochemistry — yielded a rate constant and an event size for a process occurring three times per hour inside a living cell. **That is the payoff for taking the master equation seriously rather than treating scatter as error bars.**

**Example 2 (why you'd care — running the two-colour decomposition on data).** Six cells carrying identical CFP and YFP reporters give, in arbitrary units:

| cell | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| CFP $c$ | 80 | 100 | 100 | 120 | 120 | 140 |
| YFP $y$ | 100 | 80 | 120 | 100 | 140 | 120 |

(a) Decompose the noise. (b) Verify additivity. (c) The strain is re-engineered to express ten times more of both reporters. Predict the new total noise.

**(a)** Means first: $\langle c\rangle = 660/6 = 110$ and $\langle y\rangle = 660/6 = 110$, so $\langle c\rangle\langle y\rangle = 12{,}100$.

The differences $c-y$ are $-20, +20, -20, +20, -20, +20$, so $\langle (c-y)^2\rangle = 400$:

$$\eta_{\text{int}}^{2} = \frac{400}{2(12{,}100)} = 0.016529 \qquad\Longrightarrow\qquad \eta_{\text{int}} = \mathbf{12.9\ \text{percent}}$$

The products $cy$ are $8000,\,8000,\,12{,}000,\,12{,}000,\,16{,}800,\,16{,}800$, averaging $73{,}600/6 = 12{,}266.7$:

$$\eta_{\text{ext}}^{2} = \frac{12{,}266.7 - 12{,}100}{12{,}100} = 0.013774 \qquad\Longrightarrow\qquad \eta_{\text{ext}} = \mathbf{11.7\ \text{percent}}$$

**(b)** $\langle c^2\rangle = \langle y^2\rangle = 74{,}800/6 = 12{,}466.7$, so

$$\eta_{\text{tot}}^{2} = \frac{2(12{,}466.7) - 2(12{,}100)}{2(12{,}100)} = \frac{733.3}{24{,}200} = 0.030303 \qquad\Longrightarrow\qquad \eta_{\text{tot}} = \mathbf{17.4\ \text{percent}}$$

And $0.016529 + 0.013774 = 0.030303$ ✓ — exactly, as the identity requires. Note also that the single-channel $CV$ is $\sqrt{366.7}/110 = 17.4$ percent, identical to $\eta_{\text{tot}}$: **one colour measures the total and cannot split it.** Variances add, not standard deviations — $12.9 + 11.7 \ne 17.4$, but $12.9^2 + 11.7^2 = 17.4^2$.

**(c)** The intrinsic term scales as $F/\mu$, so a tenfold increase in expression divides $\eta_{\text{int}}^2$ by 10; the extrinsic term is a multiplicative property of the cell and is unchanged:

$$\eta_{\text{int}}^{2} \to \frac{0.016529}{10} = 0.001653, \qquad \eta_{\text{ext}}^{2} = 0.013774 \ \text{(unchanged)}$$

$$\eta_{\text{tot}} = \sqrt{0.001653 + 0.013774} = \sqrt{0.015427} = \mathbf{12.4\ \text{percent}}$$

**A tenfold increase in protein bought a reduction in total noise from 17.4 percent to 12.4 percent, and no further increase will help much** — 11.7 of those 12.4 points are extrinsic and the intrinsic contribution is already almost gone. That asymptote is the noise floor, and it has three consequences worth carrying:

1. **A circuit that needs precision cannot get it from abundance alone.** It needs either feedback ([2.2](02-02-negative-autoregulation.md), which pushes $F$ *below* 1) or time-averaging, or it must be built to tolerate the scatter.
2. **Extrinsic noise is correlated across genes**, so it does not average away when a downstream node integrates several inputs — a fact that quietly breaks any argument of the form "the noise will wash out in the cascade."
3. **A population measurement of a steep response is uninterpretable without this.** Cells scattered across a threshold by extrinsic noise produce a smooth graded population curve even when every individual cell is switching sharply — the point [4.4](04-04-signal-transduction-cascades.md) insists on when it measures effective Hill coefficients, and the same trap [3.2](03-02-bistability-toggle-switch.md) flagged for bistability.

**Where the cell exploits this instead of fighting it.** Noise plus the positive feedback of [2.3](02-03-positive-autoregulation.md) gives a **bimodal** population: two sharp subpopulations, ON and OFF, with the mean describing nobody. *B. subtilis* competence works exactly this way — a minority of cells stochastically enter a DNA-uptake state each generation — and bacterial persistence is the same architecture, a small fraction of cells entering a dormant, antibiotic-tolerant state at random. **Neither is a response to a signal; both are hedges against a signal that has not arrived**, which is [evolution-ecology 3.3](../../evolution-ecology/lessons/03-03-life-histories-tradeoffs.md)'s bet-hedging argument implemented in a gene circuit: the geometric-mean fitness of a clonal population with two phenotypes beats a uniform population when the environment is unpredictable.

## Watch out

- **You might think the deterministic model gives the mean of the stochastic one.** It does **only when every propensity is linear in copy number.** Taking the average of the CME gives $\frac{d\langle n\rangle}{dt} = \sum_j \mathbf{s}_j\langle a_j(\mathbf{n})\rangle$, and $\langle a_j(\mathbf{n})\rangle = a_j(\langle \mathbf{n}\rangle)$ only for linear $a_j$. With a Hill function — every circuit in Modules 2 and 3 — Jensen's inequality puts the true mean above or below the ODE prediction depending on curvature, and near a bistable region ([3.2](03-02-bistability-toggle-switch.md)) noise can flip which state the population occupies. **Noise does not merely blur the deterministic answer; it can move it.**
- **You might expect noise to fall indefinitely with expression level.** Only the intrinsic part does, as $1/\sqrt{\mu}$. Extrinsic noise is roughly mean-independent and sets a floor of order 10 to 30 percent that no amount of overexpression penetrates.
- **You might read $F>1$ as bad data.** $F$ is a mechanism report, not an error bar. $F = 1$ says Poissonian production; $F > 1$ says bursty, with $F - 1$ the burst size in molecules; $F < 1$ is sub-Poissonian and requires **negative feedback** — [2.3](02-03-positive-autoregulation.md) derived $F = 1/(1-\phi)$, giving $F = 0.25$ at $\phi = -3$ for a strongly negatively autoregulated gene.
- **You might think Gillespie is an approximate simulation.** It is exact sampling from the CME: no time step, no discretization error. The only error is Monte Carlo error from running finitely many trajectories, and it shrinks as $1/\sqrt{\text{runs}}$.
- **You might put a concentration into a noise formula.** $CV = 1/\sqrt{\mu}$ counts **molecules**. Two cells at identical concentration but different volume have different noise, which is why the CME carries $\Omega$ explicitly and the rate ODEs never did. Convert to copy number before computing anything.

## One-liner

> A gene's histogram is a mechanism report: its mean is the ODE's answer, its width $CV = 1/\sqrt{\mu}$ is the irreducible price of counting molecules, its excess Fano factor $F-1$ is the size of production bursts nobody watched, and a second fluorescent colour in the same cell separates the gene's own randomness from the cell's.

## Problems

**P1 (🟢)** Two proteins in *E. coli*: a transcriptional repressor at a mean of 5 copies per cell and a metabolic enzyme at a mean of 5000, both Poissonian. (a) Give the $CV$ of each. (b) What mean copy number is needed for $CV \le 5$ percent? (c) The repressor drives a promoter whose 10-to-90 response window is 3-fold wide ([1.4](01-04-cooperativity-hill-ultrasensitivity.md), $n = 4$). Comment on whether that promoter is a switch at the level of a single cell, of the population, or both.

**P2 (🟡)** Single-molecule FISH counts of an mRNA give a mean of 4 transcripts per cell and a variance of 14. The mRNA degradation rate is $\gamma_m = 0.2\ \text{min}^{-1}$. (a) Fano factor, burst size and burst frequency. (b) The measured $CV$, and the $CV$ a Poissonian gene at the same mean would have shown. (c) A colleague concludes that the promoter switches ON about once every three minutes. State the one alternative mechanism that fits the same data equally well, and the one additional measurement that separates them.

**P3 (🔴, bridges to [2.2](02-02-negative-autoregulation.md) and [2.3](02-03-positive-autoregulation.md))** Four cells carrying identical CFP/YFP reporters give $(c,y) = (60,90),\,(90,60),\,(110,140),\,(140,110)$. (a) Compute $\eta_{\text{int}}$, $\eta_{\text{ext}}$ and $\eta_{\text{tot}}$, and verify the additivity identity. (b) What would a single-colour experiment on this strain have reported? (c) The gene is now placed under strong negative autoregulation with feedback strength $\phi = -3$, giving $F = 1/(1-\phi) = 0.25$ from [2.3](02-03-positive-autoregulation.md). Estimate the new total noise, and say what the calculation reveals about the limits of feedback.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$CV_{\text{repressor}} = \frac{1}{\sqrt{5}} = 0.4472 = \mathbf{44.7\ \text{percent}}, \qquad CV_{\text{enzyme}} = \frac{1}{\sqrt{5000}} = 0.01414 = \mathbf{1.41\ \text{percent}}$$

**A thirty-twofold difference in relative precision from a thousandfold difference in abundance** — the square root at work.

**(b)** $$\frac{1}{\sqrt{\mu}} \le 0.05 \quad\Longrightarrow\quad \mu \ge \frac{1}{0.05^{2}} = \mathbf{400\ \text{copies}}$$

And note this is the *floor*: with any burstiness the requirement is $\mu \ge F/0.05^2$, so at $F = 10$ you would need 4000 copies. **Precision is expensive in molecules, and quadratically so.**

**(c)** **A switch in the single cell, not in the population.** Take the repressor's spread at face value: $\pm 1$ standard deviation runs from $5(1-0.447) = 2.8$ to $5(1+0.447) = 7.2$ copies, a **2.6-fold range** across the middle two-thirds of cells.

The promoter's entire 10-to-90 decision window is **3-fold wide** ($81^{1/4} = 3$). So the ordinary cell-to-cell scatter in the *input* very nearly fills the whole *output* transition. Each individual cell has an $n=4$ Hill response and switches decisively; the population, scattered across the threshold, produces a curve that looks far more graded than any cell's.

**This is the trap in three separate places in this course.** It is why [3.2](03-02-bistability-toggle-switch.md) insists hysteresis, not steepness, proves bistability; why [4.4](04-04-signal-transduction-cascades.md) requires single-cell measurement before quoting an effective Hill coefficient; and why [1.4](01-04-cooperativity-hill-ultrasensitivity.md)'s warning that a fitted $n$ measures sharpness and never mechanism has a population-level cousin: **a fitted $n$ from bulk data does not even measure sharpness.**

It also reads as a design constraint. If the cell needs a sharp population-level decision it must either raise the repressor's abundance, add feedback to suppress the input noise, or make the decision irreversible so that scatter in *when* a cell commits does not become scatter in *whether* it commits.

**P2 (a)**

$$F = \frac{14}{4} = \mathbf{3.5}, \qquad b_m = F - 1 = \mathbf{2.5\ \text{transcripts per burst}}$$

$$a = \frac{\gamma_m \mu}{b_m} = \frac{0.2 \times 4}{2.5} = \mathbf{0.32\ \text{bursts min}^{-1}}$$

i.e. one burst every $1/0.32 = 3.1$ min. Check: $ab_m/\gamma_m = 0.32(2.5)/0.2 = 4.0$ ✓.

**(b)**

$$CV_{\text{measured}} = \sqrt{\frac{F}{\mu}} = \sqrt{\frac{3.5}{4}} = 0.935 = \mathbf{93.5\ \text{percent}}, \qquad CV_{\text{Poisson}} = \frac{1}{\sqrt{4}} = \mathbf{50\ \text{percent}}$$

The ratio is $\sqrt{3.5} = 1.87$ ✓. **At four transcripts per cell, half the cells are outside a factor of two of the mean** — and with $F=3.5$ a substantial fraction have zero.

**(c)** **The alternative: the promoter is not switching at all.** The random-telegraph model has a fast-switching limit in which $F \to 1$ and a slow-switching limit in which $F \to 1 + k_m/k_{\text{off}}$. A Fano factor of 3.5 is consistent with the slow limit — the colleague's reading — but it is *also* consistent with a promoter that is permanently ON and simply initiates transcription in a correlated way, for instance because RNA polymerase molecules load in convoys, or because supercoiling built up by one round of transcription transiently favours the next.

**Both mechanisms produce clumped arrivals, and clumped arrivals are all a Fano factor sees.** The functional form is degenerate across mechanisms, exactly as in [1.3](01-03-michaelis-menten-qssa.md) and [1.4](01-04-cooperativity-hill-ultrasensitivity.md).

**The measurement that separates them: watch a single promoter in real time.** A live-cell transcription reporter (an MS2 stem-loop array, say) gives the actual ON and OFF interval distributions rather than their summary. If the promoter really switches, OFF intervals are exponential with mean $1/k_{\text{on}} = 3.1$ min and transcripts arrive only inside the ON windows; if it is constitutively ON, there are no OFF windows to find. **A second, cheaper discriminator:** perturb $k_{\text{on}}$ specifically — delete an activator binding site, or change inducer concentration — and see whether burst *frequency* moves while burst *size* stays fixed. Under the telegraph model those two knobs are separable, and finding they move together falsifies it.

**P3 (a)** Means: $\langle c\rangle = 400/4 = 100$, $\langle y\rangle = 400/4 = 100$, so $\langle c\rangle\langle y\rangle = 10{,}000$.

Differences $c-y = -30, +30, -30, +30$, so $\langle (c-y)^2\rangle = 900$:

$$\eta_{\text{int}}^{2} = \frac{900}{2(10{,}000)} = 0.045 \qquad\Longrightarrow\qquad \eta_{\text{int}} = \mathbf{21.2\ \text{percent}}$$

Products $cy = 5400,\,5400,\,15{,}400,\,15{,}400$, averaging $41{,}600/4 = 10{,}400$:

$$\eta_{\text{ext}}^{2} = \frac{10{,}400 - 10{,}000}{10{,}000} = 0.040 \qquad\Longrightarrow\qquad \eta_{\text{ext}} = \mathbf{20.0\ \text{percent}}$$

$$\eta_{\text{tot}}^{2} = 0.045 + 0.040 = 0.085 \qquad\Longrightarrow\qquad \eta_{\text{tot}} = \mathbf{29.2\ \text{percent}}$$

Direct check: $\langle c^2\rangle = (3600+8100+12{,}100+19{,}600)/4 = 10{,}850$, so $\sigma_c^2 = 850$ and $\sigma_c^2/\langle c\rangle^2 = 0.085$ ✓ — the identity holds.

**(b)** **Exactly 29.2 percent, and nothing else.** A single-colour measurement returns $\eta_{\text{tot}}$ and has no way to partition it; it cannot even tell you whether the answer is 100 percent intrinsic or 100 percent extrinsic, which are opposite biological situations demanding opposite fixes. **That is the entire justification for the second fluorophore**, and it is why the design counts as an experiment rather than a convenience.

**(c)** Back out the implied copy number from the intrinsic term, taking $\eta_{\text{int}}^2 = F/\mu$ with $F = 1$ unregulated:

$$\mu = \frac{1}{0.045} = 22.2\ \text{copies}$$

Under NAR at $\phi = -3$ the intrinsic Fano factor falls to $F = 0.25$ at the same mean:

$$\eta_{\text{int}}^{2} \to \frac{0.25}{22.2} = 0.01125 \qquad\Longrightarrow\qquad \eta_{\text{int}} = 10.6\ \text{percent}$$

Holding the extrinsic term fixed:

$$\eta_{\text{tot}} = \sqrt{0.01125 + 0.040} = \sqrt{0.05125} = \mathbf{22.6\ \text{percent}}$$

**A fourfold cut in intrinsic variance bought a drop in total noise from 29.2 to 22.6 percent — a 23 percent improvement, not a 75 percent one.** The feedback loop did everything it could do and most of the noise survived, because **most of the noise was never the gene's to fix.** Negative autoregulation is a private solution to a private problem.

**Two honest caveats, and the first cuts against the calculation above.** Negative feedback does *not* leave the whole extrinsic term untouched: [2.2](02-02-negative-autoregulation.md)'s robustness result is precisely that NAR attenuates fluctuations in its own production rate $\beta$, and some extrinsic noise — a wobble in free polymerase, say — enters exactly there. What NAR cannot reject is extrinsic noise entering downstream of its sensor or acting on the removal arm, plus the partitioning noise at cell division. **So the true answer lies between 22.6 percent and something lower, and which end depends on where in the loop the extrinsic fluctuations enter** — a question the two-colour decomposition, which lumps all extrinsic sources together, cannot answer on its own.

Second, $F = 1/(1-\phi)$ came from a *linearized* treatment ([2.3](02-03-positive-autoregulation.md)), valid for small fluctuations about the steady state. At 22 copies with a $CV$ near 20 percent that is defensible; at 5 copies it would not be, and the full CME would be required.

**The design reading, which is the point of the problem.** If you are engineering a circuit and measure 29 percent noise, the first thing to do is not add feedback — it is run the two-colour experiment and find out which component you are looking at. Feedback attacks the intrinsic term; only redundancy, time-averaging, or a downstream stage that is insensitive to the shared fluctuation will touch the extrinsic one.

</details>

## Flashback

**From Lesson 3.3 (robustness & feedback: integral control & exact adaptation):** Two chemotaxis strains run the Barkai–Leibler integrator $\dot M = V_R - kA$, with $M$ the receptor methylation level, $A$ the active fraction, $V_R$ the saturated CheR methylation rate and $k \equiv k_B B$ the demethylation rate constant. Both have $a = \partial A/\partial M = 0.25$ per methyl group near the operating point. Strain W: $V_R = 0.60$ methyl per minute, $k = 2.4$ per minute. In strain C, CheR and CheB are transcribed from a single operon, and a promoter mutation raises **both** 1.5-fold: $V_R = 0.90$, $k = 3.6$. (a) Give $A^*$ and the adaptation time constant $\tau$ for each strain, and say which quantity the co-ordinated change moves and which it does not — pointing at where each parameter does or does not enter the algebra. (b) Both strains receive an attractant step that drops activity instantaneously by 0.12. How far is each from its own baseline 4.0 minutes later, as a fraction of the initial drop and in absolute activity? A five-minute assay reports strain C as "adapting more precisely" — is it? (c) Now a cell swims steadily up a gradient, so that with methylation frozen its activity would fall linearly at $r = 0.030$ per minute. Look for the long-time solution in which methylation climbs at a constant rate, and give the persistent activity offset of each strain. Say why this offset is the *point* of the circuit, and why — unlike the step response — it is not robust.

<details>
<summary>Solution</summary>

**(a)** The setpoint is the ratio, $A^* = V_R/k$:

$$A^*_{\text{W}} = \frac{0.60}{2.4} = \mathbf{0.250}, \qquad A^*_{\text{C}} = \frac{0.90}{3.6} = \mathbf{0.250}.$$

**Identical.** Scaling CheR and CheB together leaves $V_R/k$ untouched, so the co-ordinated mutation is invisible in the baseline — which is *not* the theorem's robustness (that would be independence of ligand and of the plant $A(M,L)$), but a second, weaker invariance that comes from the setpoint depending on the two controller parameters only through their ratio. Change CheR alone and the baseline does move.

Linearizing, $\delta \dot M = -k\,\delta A$ and $\delta A = a\,\delta M$ give $\tau = 1/(ka)$:

$$\tau_{\text{W}} = \frac{1}{2.4 \times 0.25} = \mathbf{1.67\ \text{min}}, \qquad \tau_{\text{C}} = \frac{1}{3.6 \times 0.25} = \mathbf{1.11\ \text{min}}.$$

$k$ is **algebraically absent** from the steady-state condition $\dot M = 0 \Rightarrow A = V_R/k$ once the ratio is fixed, and **algebraically present** in the eigenvalue $-ka$. So the strains are indistinguishable at rest and differ 1.5-fold in speed.

**(b)** With $s = 0.12$ the deviation relaxes as $\delta A(t) = -s\,e^{-t/\tau}$:

| strain | $t/\tau$ at 4.0 min | fraction of drop left | absolute | as fraction of baseline |
|---|---|---|---|---|
| W | $4.0 \times 0.6 = 2.4$ | $e^{-2.4} = \mathbf{9.07\ \text{percent}}$ | $\mathbf{0.0109}$ | 4.4 percent |
| C | $4.0 \times 0.9 = 3.6$ | $e^{-3.6} = \mathbf{2.73\ \text{percent}}$ | $\mathbf{0.00328}$ | 1.3 percent |

**No — the assay is measuring the wrong thing.** Both strains have adaptation precision exactly 1; the residual is $-s\,e^{-t/\tau}$ and goes to zero in both, forced by $\dot M = 0 \Rightarrow A = A^*$ with no parameter in sight. What the five-minute window measured is $e^{-t/\tau}$, i.e. $\tau$, and the apparent 3.3-fold "precision" gap is just $e^{1.2} = 3.32$, a pure speed ratio. **A finite assay window converts an unmeasured time constant into a fake precision difference** — which is exactly why the 1999 experiments defined precision as the asymptotic return and measured it well past several time constants.

**(c)** Let $m$ be methylation added since the ramp began. Activity is the frozen-methylation ramp plus the controller's correction, $\delta A = -rt + a\,m$, and the integrator gives $\dot m = -k\,\delta A = krt - kam$. Try $m = ct + d$: matching the $t$ terms forces $c = r/a$, and the constants give $c = -kad$, so $d = -r/(ka^{2})$. Then

$$\delta A = -rt + a\left(\frac{r}{a}t - \frac{r}{ka^{2}}\right) = -\frac{r}{ka} = \boxed{\;-r\tau\;}$$

(the transient is $+r\tau e^{-t/\tau}$, so starting from baseline $\delta A(t) = -r\tau(1-e^{-t/\tau})$ — the offset builds over one time constant and then holds).

$$\delta A_{\text{W}} = -0.030 \times 1.67 = \mathbf{-0.0500}, \qquad \delta A_{\text{C}} = -0.030 \times 1.11 = \mathbf{-0.0333}.$$

Against a baseline of 0.250 that is a **20.0 percent** and a **13.3 percent** suppression of activity, held for as long as the climb continues.

**Why it is the point:** exact adaptation makes the DC gain zero, so the cell is blind to attractant *level* and reports only *rate of change* — a differentiator. The constant offset while climbing is the entire chemotactic signal: it is what lengthens runs in the favourable direction. A cell that adapted to the ramp too would be unable to chemotax at all.

**Why it is not robust:** the offset is $r\tau = r/(ka)$, and $k$ and $a$ are both in it — this is the Type-1 system's finite error to a ramp, $1/K_v$, not its zero error to a step. So the two strains, identical at rest and identical in precision, report the *same* gradient with signals differing by 1.5-fold. Note the trade this exposes: the faster integrator adapts more quickly but generates a *weaker* gradient signal, because it partly cancels the very ramp it is supposed to report.

</details>

## Connections

- **Backward:** the CME's jump vectors $\mathbf{s}_j$ are literally the columns of $S$ from [1.2](01-02-mass-action-rate-odes.md), so the stoichiometric bookkeeping carries over unchanged from the deterministic world. [1.1](01-01-systems-view-of-the-cell.md)'s "one molecule is 1.7 nM" and its warning that the cell is not a well-stirred beaker are cashed in here. [2.2](02-02-negative-autoregulation.md) promised noise reduction and deferred the mechanism; [2.3](02-03-positive-autoregulation.md) derived $F = 1/(1-\phi)$ by fluctuation–dissipation and pointed at bimodality — both are special cases of the master equation, linearized.
- **Forward:** [4.4](04-04-signal-transduction-cascades.md) needs the single-cell-versus-population distinction before it can quote an effective Hill coefficient for a cascade, and needs sequestration noise for the same reason. [4.5](04-05-synthetic-biology-pattern-formation.md) collects the debt in full: the original repressilator oscillated *irregularly*, with cells losing phase within a few generations, and this lesson is why — a synthetic circuit built from low-copy parts inherits every fluctuation the model omitted.
- **Sideways:** the Poisson and geometric distributions, and the negative binomial that bursting produces, are [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md); the exponential waiting times that make Gillespie's algorithm exact are [2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md) there, and the measure-theoretic version of the conditioning argument behind the two-colour identity is [probability-theory 5.1](../../probability-theory/lessons/05-01-conditional-expectation.md). The Langevin approximation and the fluctuation–dissipation logic behind $F = 1/(1-\phi)$ are [stat-mech 6.1](../../stat-mech/lessons/06-01-brownian-langevin.md), and the same variance-of-a-fluctuating-count argument is [3.3](../../stat-mech/lessons/03-03-fluctuations-ensemble-equivalence.md) there — a gene at 40 copies is a small canonical ensemble. Bet-hedging as a fitness argument, which is what persistence and competence implement, is [evolution-ecology 3.3](../../evolution-ecology/lessons/03-03-life-histories-tradeoffs.md); how much a noisy channel can actually transmit is [information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md), and the answer for a single eukaryotic promoter is famously close to one bit.

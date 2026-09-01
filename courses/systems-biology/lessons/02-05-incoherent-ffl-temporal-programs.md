# Systems Biology · Lesson 2.5: Incoherent FFLs & temporal programs

> ⏱ ~15 min · Module 2: Gene-regulatory networks & motifs · Builds on: [2.4](02-04-feed-forward-loop.md), [2.2](02-02-negative-autoregulation.md), [2.1](02-01-input-functions-promoter-logic.md) · Unlocks: [3.3](03-03-integral-control-exact-adaptation.md) (integral control & exact adaptation)

## Why this matters

[2.4](02-04-feed-forward-loop.md) flipped one sign on the $Y \to Z$ edge and got a persistence detector. Flip it the other way — $Y$ **represses** $Z$ — and the same three nodes become a **pulse generator**, an **accelerator**, and an approximate **adaptation** circuit. Two of the eight FFL types dominate real transcription networks, and this is the second one.

[molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) already presented the incoherent feed-forward loop as *the* adaptation mechanism, in the special multiplicative form $x \propto u/y$ that adapts exactly. That form is a happy accident of one algebraic choice. **The generic I1-FFL does not adapt exactly** — its precision is a number you can compute from its parameters, and a twofold change in a rate constant degrades it. Establishing that is the whole point of this lesson, because it creates the gap that [3.3](03-03-integral-control-exact-adaptation.md) fills with integral control.

The second half is the module's most elegant result and its least famous: **a cell can run a scheduled program of gene expression with no clock anywhere in it**, using nothing but the fact that different promoters bind the same regulator with different affinities. The schedule is stored in binding energies.

## The idea

**Two arms racing.** In the incoherent type-1 FFL, $X$ activates $Z$ directly and also activates $Y$, which represses $Z$. Both arms carry the same signal, with opposite signs, and **the repressing arm is slower** — it has to wait for $Y$ protein to accumulate. So when $X$ switches on:

1. $Z$ shoots up at full rate, because $Y$ is not there yet.
2. $Y$ crosses its repression threshold on $Z$'s promoter.
3. $Z$'s production drops by a factor $F$, and $Z$ decays to a new, lower plateau.

The output **overshoots and settles**. That is a pulse. **It is also, read differently, an acceleration** — and this is the part that gets missed. If you only care where $Z$ ends up, the circuit got it to a low steady state by driving hard and then throttling, which is *far* faster than producing at the low rate all along. [2.2](02-02-negative-autoregulation.md)'s negative autoregulation used exactly the same trick — drive hard, then throttle — but throttled with the gene's own product. **Same design principle, completely different wiring.**

**The pulse and the acceleration are one curve, not two circuits.** Whether you call it a pulse depends only on how large the overshoot is.

**Adaptation is a matter of degree here.** The plateau is $1/F$ of the unrepressed level, so "how close to baseline does it return" is set by $F$ — a parameter. Strong repression gives near-exact adaptation; weak repression gives a modest dip. Nothing in the *structure* forces the return, which is the sharpest available contrast with the integral controller of [3.3](03-03-integral-control-exact-adaptation.md), where zero steady-state error is forced by the loop's shape no matter what the parameters are.

**Then the temporal program.** Take one regulator $X$ driving many target genes directly — a **single-input module**, and the commonest structure in real transcription networks after autoregulation. Give the targets promoters with *different* affinities for $X$. Now let $X$ rise slowly. Each gene switches on at the moment $X$ crosses *its* threshold, so **the genes fire in the rank order of their thresholds**. On the way down, $X$ falls back through the same thresholds in the opposite direction, so the last gene on is the first gene off: **last in, first out**.

No timer, no cascade, no sequential activation. **The schedule is the list of dissociation constants.**

## The formal version

**Setup.** Let $X$ be ON from $t=0$. Write $Y$ as a simply regulated gene ([2.1](02-01-input-functions-promoter-logic.md)):

$$\dot{Y} = \beta_Y - \alpha_Y Y, \qquad Y(0)=0 \;\Longrightarrow\; Y(t) = Y_{st}\left(1 - e^{-\alpha_Y t}\right), \quad Y_{st} = \frac{\beta_Y}{\alpha_Y}$$

where $\beta_Y$ is the maximal production rate (concentration per time) and $\alpha_Y$ the combined degradation-and-dilution rate.

**Peak time.** $Y$ represses $Z$ once it crosses the threshold $K_{YZ}$ on $Z$'s promoter. Solving $Y(t_m) = K_{YZ}$:

$$\boxed{\; t_m = \frac{1}{\alpha_Y}\,\ln\!\left(\frac{1}{1 - K_{YZ}/Y_{st}}\right) \;}$$

*In words: the pulse peaks at the moment the repressor arrives, and that moment is set by how far up $Y$'s own rise the threshold sits.*

**This is literally the same formula as [2.4](02-04-feed-forward-loop.md)'s $t_{\text{ON}}$.** The coherent FFL uses that delay to *withhold* the output; the incoherent FFL uses it to *terminate* the output. **One delay, two functions, decided entirely by the sign of the $Y \to Z$ edge.**

**Pulse shape.** Let $\beta_Z$ be $Z$'s production rate when unrepressed, $\alpha_Z$ its removal rate, $Z^{\max} = \beta_Z/\alpha_Z$ the level it would reach with no repression, and $F>1$ the **repression fold** — the factor by which bound $Y$ cuts $Z$'s production. Then

$$Z(t) = \begin{cases} Z^{\max}\left(1 - e^{-\alpha_Z t}\right), & t < t_m, \\[6pt] \dfrac{Z^{\max}}{F} + \left(Z_{\text{peak}} - \dfrac{Z^{\max}}{F}\right) e^{-\alpha_Z (t - t_m)}, & t \ge t_m, \end{cases}$$

$$Z_{\text{peak}} = Z^{\max}\left(1 - e^{-\alpha_Z t_m}\right), \qquad Z_{st} = \frac{Z^{\max}}{F}$$

*In words: rise as if unregulated until the repressor lands, then relax to a plateau $F$ times lower.*

**Adaptation precision.** Define precision as the fraction of the pulse that decays away:

$$\boxed{\; P \;=\; 1 - \frac{Z_{st}}{Z_{\text{peak}}} \;=\; 1 - \frac{1}{F\left(1 - e^{-\alpha_Z t_m}\right)} \;}$$

*In words: how nearly the output returns to where it started depends on the repression fold and on how much of its rise the output completed before repression hit.*

**Read the formula for what it costs you.** $P$ is a smooth function of $F$, $\alpha_Z$ and $t_m$. Halve $F$ and the plateau doubles. There is no value of the parameters at which $P$ becomes structurally pinned to 1 — you can only push it close. **That is what "approximate adaptation" means, precisely.** Note also the ceiling: even with $\alpha_Z t_m \to \infty$, $P \le 1 - 1/F$.

**Response acceleration.** Compare two circuits that reach the *same* steady state $Z_{st}$:

| | production rate | rise |
|---|---|---|
| Simple regulation ([2.1](02-01-input-functions-promoter-logic.md)) | $\alpha_Z Z_{st}$ | $Z_{st}\left(1 - e^{-\alpha_Z t}\right)$ |
| I1-FFL | $F\alpha_Z Z_{st}$ until $t_m$ | $F Z_{st}\left(1 - e^{-\alpha_Z t}\right)$ |

Setting each to $Z_{st}/2$:

$$t_{1/2}^{\text{simple}} = \frac{\ln 2}{\alpha_Z}, \qquad t_{1/2}^{\text{FFL}} = -\frac{1}{\alpha_Z}\ln\!\left(1 - \frac{1}{2F}\right)$$

$$\boxed{\; \text{speedup} = \frac{\ln 2}{-\ln\!\left(1 - \frac{1}{2F}\right)} \;\approx\; 2F\ln 2 \;\;(F \gg 1) \;}$$

*In words: the accelerator's speedup grows roughly in proportion to how hard it overdrives, about $1.39F$.*

**Two conditions this hides.** First, it requires $t_{1/2}^{\text{FFL}} < t_m$ — the repressor must arrive *after* the output has passed half its final level, or the acceleration is cut short. Second, the removal rate $\alpha_Z$ is unchanged; as in [2.1](02-01-input-functions-promoter-logic.md), the circuit does not make the protein less stable, it just front-loads the production. **Every accelerator in this course works by overdriving and throttling — none of them touch $\alpha$.**

**Single-input module: the ordering law.** One regulator $X(t) = X_{st}\left(1 - e^{-\alpha_X t}\right)$ drives targets $Z_1,\dots,Z_k$ with promoter thresholds $K_1 < K_2 < \dots < K_k$. Target $i$ activates when $X$ crosses $K_i$:

$$\boxed{\; t_i = -\frac{1}{\alpha_X}\ln\!\left(1 - \frac{K_i}{X_{st}}\right) \;}$$

*In words: low-threshold genes come on early, high-threshold genes late, and the order is just the sorted list of affinities.*

If the signal is removed at $t_{\text{off}}$ and $X$ then decays as $X(t_{\text{off}})e^{-\alpha_X (t-t_{\text{off}})}$, target $i$ shuts off at

$$t_i^{\text{off}} = t_{\text{off}} + \frac{1}{\alpha_X}\ln\!\frac{X(t_{\text{off}})}{K_i}$$

**which is decreasing in $K_i$ exactly as $t_i$ was increasing in it — LIFO, and it is forced, not designed.** The same ranked list of thresholds is traversed upward on the way in and downward on the way out.

**What is robust and what is not.** $t_i$ depends on $\alpha_X$ and $X_{st}$; change either and every switching time moves. But the *order* depends only on the rank of the $K_i$, which no parameter change can permute. **The order is structural; the timing is not.** Hold onto that distinction — it is the whole subject of [3.3](03-03-integral-control-exact-adaptation.md).

**The biology.** In *E. coli* amino-acid biosynthesis operons and in flagellar assembly, the transcriptional order matches the order in which the gene products are physically needed — the first enzyme in the pathway induced first, the hook before the filament. This is **just-in-time production**: the cell does not pay to make a late-pathway enzyme before its substrate exists.

## Picture

![Panel a shows the incoherent type-1 feed-forward loop wiring, with X activating Y and Z directly and Y repressing Z, beside a time course in which the output Z rises steeply to a peak of 50 nanomolar at 6.9 minutes and then relaxes to an adapted plateau of 20, overlaid on a simple-regulation curve that creeps to the same plateau and reaches half-maximum 6.6 times later. Panel b shows a single-input module: a regulator rises and crosses four dashed promoter thresholds at 20, 40, 60 and 80 nanomolar in turn, then decays after the input is removed; below, four horizontal bars show the four target genes switching on in threshold order and off in exactly the reverse order, giving a nested last-in-first-out pattern.](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — the whole pulse, end to end).** An I1-FFL has $\beta_Z = 10$ nM/min, $\alpha_Z = 0.1$ min$^{-1}$, repression fold $F = 5$. The repressor arm has $\alpha_Y = 0.1$ min$^{-1}$, $Y_{st} = 100$ nM, and represses $Z$'s promoter above $K_{YZ} = 50$ nM. Find the peak time, peak height, plateau, adaptation precision, and the speedup over simple regulation to the same plateau.

**Peak time.**

$$t_m = \frac{1}{0.1}\ln\!\left(\frac{1}{1 - 50/100}\right) = 10\ln 2 = \mathbf{6.93\ \text{min}}$$

**Levels.** $Z^{\max} = \beta_Z/\alpha_Z = 10/0.1 = 100$ nM.

$$Z_{\text{peak}} = 100\left(1 - e^{-0.1(6.93)}\right) = 100(1 - 0.5) = \mathbf{50\ \text{nM}}, \qquad Z_{st} = \frac{100}{5} = \mathbf{20\ \text{nM}}$$

**Precision.**

$$P = 1 - \frac{20}{50} = \mathbf{0.60}$$

Sixty percent of the pulse decays away. Note the ceiling $1 - 1/F = 0.80$: **even a perfectly timed repressor could not do better than 80 percent here**, and this one loses a further 20 points because $Z$ had only completed half its rise when the repressor arrived.

**Speedup.** Simple regulation to $Z_{st}=20$ nM has $t_{1/2} = \ln 2/0.1 = 6.93$ min. The FFL reaches 10 nM when $100(1-e^{-0.1t}) = 10$:

$$t_{1/2}^{\text{FFL}} = -10\ln(0.9) = \mathbf{1.05\ \text{min}} \quad\Longrightarrow\quad \text{speedup} = \frac{6.93}{1.05} = \mathbf{6.6}$$

Check against the formula: $\ln 2 / \left[-\ln(1 - 1/10)\right] = 0.6931/0.1054 = 6.58$ ✔, and against the large-$F$ estimate $2F\ln 2 = 6.93$ ✔. **And the validity condition holds:** $1.05 < 6.93 = t_m$, so the repressor really does arrive after half-max.

**Now raise $F$ to 20**, holding everything else: $Z^{\max}$ becomes $\beta_Z/\alpha_Z$ still $100$, plateau drops to 5 nM, $P = 1 - 5/50 = 0.90$, and the speedup becomes $\ln 2/\left[-\ln(1 - 1/40)\right] = 0.6931/0.02532 = 27.4$. **Better adaptation and a faster accelerator come from the same knob** — which is exactly why the two functions are hard to separate experimentally, and why a circuit tuned for one gets the other for free.

**Example 2 (why you'd care — a schedule with no clock).** A master regulator rises as $X(t) = 100\left(1 - e^{-0.1t}\right)$ nM. Four target promoters have thresholds $K = 20, 40, 60, 80$ nM. The inducing signal is removed at $t_{\text{off}} = 25$ min. Find the on-times and off-times.

**On-times**, from $t_i = -10\ln(1 - K_i/100)$:

| Gene | $K_i$ (nM) | $t_i$ (min) |
|---|---|---|
| $Z_1$ | 20 | $-10\ln 0.8 = \mathbf{2.23}$ |
| $Z_2$ | 40 | $-10\ln 0.6 = \mathbf{5.11}$ |
| $Z_3$ | 60 | $-10\ln 0.4 = \mathbf{9.16}$ |
| $Z_4$ | 80 | $-10\ln 0.2 = \mathbf{16.09}$ |

**Notice the spacing widens.** Equal steps in threshold give unequal, increasing gaps in time — 2.9, 4.1, 6.9 minutes — because $X$ is flattening as it approaches its plateau. **A cell that wants a late gene to fire much later does not need a large threshold difference; it needs a threshold near $X_{st}$**, where the curve is nearly horizontal. That is cheap in binding energy and expensive in reliability, which we return to below.

**Off-times.** At $t_{\text{off}} = 25$, $X = 100(1 - e^{-2.5}) = 91.79$ nM. Then $t^{\text{off}}_i = 25 + 10\ln(91.79/K_i)$:

| Gene | $K_i$ | $t^{\text{off}}_i$ (min) |
|---|---|---|
| $Z_4$ | 80 | $25 + 1.37 = \mathbf{26.37}$ |
| $Z_3$ | 60 | $25 + 4.25 = \mathbf{29.25}$ |
| $Z_2$ | 40 | $25 + 8.31 = \mathbf{33.31}$ |
| $Z_1$ | 20 | $25 + 15.24 = \mathbf{40.24}$ |

**Exactly reversed.** The ON intervals are nested (see the figure), and this required no additional wiring at all: LIFO is a geometric consequence of a monotone signal crossing a ranked set of thresholds twice.

*(Had $X$ reached its full plateau of 100 nM before removal, the off-times would mirror the on-times exactly — 2.23, 5.11, 9.16, 16.09 minutes after removal. The small discrepancy above is just $X$ sitting at 91.8 rather than 100.)*

**Why this is the right design for assembly.** The flagellar motor is built base-outward: the MS ring, then the rod, then the hook, then twenty thousand copies of flagellin. Making flagellin before there is a hook to thread it through wastes the cell's largest single protein investment. A single-input module with thresholds ranked in assembly order produces the parts **in the order the assembly consumes them**, and the LIFO shutdown means the last, most expensive gene is also the first one silenced when the signal fails. **The temporal program and the economics point the same way**, which is a strong hint that this is what the thresholds were selected for.

**The claim worth stating plainly:** *the schedule lives in the promoter sequences.* Mutate one operator to bind $X$ more tightly and you have moved that gene earlier in the program — a rescheduling achieved by changing a few base pairs, with no new regulator, no new edge, and no clock.

## Watch out

- **You might think the incoherent FFL adapts exactly.** [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md)'s form $x \propto u/y$ does, because the division makes $u$ cancel algebraically. A generic I1-FFL with a Hill or fold-repression input function does **not** — its precision is $1 - 1/\left[F(1-e^{-\alpha_Z t_m})\right]$, a parameter-dependent number. Exactness that survives parameter change requires integral feedback ([3.3](03-03-integral-control-exact-adaptation.md)).
- **You might think the pulse generator and the accelerator are different circuits.** They are the same solution with the same parameters. "Pulse" describes the overshoot; "acceleration" describes the approach to the plateau. If a paper reports one, the other is present too.
- **You might apply the speedup formula unconditionally.** It assumes $t_{1/2}^{\text{FFL}} < t_m$. Make the repressor arm fast and the throttle closes before the output has climbed, killing the acceleration and shrinking the pulse to nothing.
- **You might think a temporal program needs a cascade or a timer.** A single-input module has no internal sequencing at all — every target is one edge from the regulator. The order is stored in dissociation constants, and it is **robust in rank but not in timing**: a change in $X_{st}$ or $\alpha_X$ moves all the switching times, and any gene with $K_i > X_{st}$ simply never fires.

## One-liner

> Flip one sign in the feed-forward loop and the delay that used to withhold the output now terminates it: you get a pulse, an approximate adaptation whose precision is a parameter rather than a guarantee, and an accelerator that beats simple regulation by about $1.39F$ — while one regulator crossing a ranked set of promoter thresholds runs a whole temporal program, last-in-first-out, with no clock in the cell.

## Problems

**P1 (🟢)** An I1-FFL has $\beta_Z = 6$ nM/min, $\alpha_Z = 0.15$ min$^{-1}$, and repression fold $F = 4$. The repressor crosses its threshold at $t_m = 5$ min. (a) Find $Z^{\max}$, $Z_{\text{peak}}$ and $Z_{st}$. (b) Compute the adaptation precision. (c) The ceiling $1-1/F$ is 75 percent; explain the shortfall and name two parameter changes that would close it.

**P2 (🟡, bridges to control-systems)** A protein has $\alpha = 0.03$ min$^{-1}$ (dilution-dominated in a slowly growing cell). (a) Its half-time under simple regulation. (b) Its half-time under an I1-FFL with $F = 8$, and the speedup. (c) [2.2](02-02-negative-autoregulation.md)'s negative autoregulation delivers roughly a fivefold speedup. State the mechanistic difference between the two accelerators, and name two costs the I1-FFL pays that NAR does not.

**P3 (🔴, design problem)** You want four genes under a single-input module to switch on at 2, 4, 8 and 16 minutes after induction. The regulator obeys $X(t) = 200\left(1 - e^{-0.1t}\right)$ nM. (a) Find the four thresholds. (b) Show the shutdown order reverses, assuming $X$ has reached its plateau when the signal is removed. (c) A mutation reduces the regulator's plateau from 200 to 150 nM. Which genes still fire, when, and what does this say about which features of a temporal program are robust?

<details>
<summary>Solutions</summary>

**P1 (a)**

$$Z^{\max} = \frac{\beta_Z}{\alpha_Z} = \frac{6}{0.15} = \mathbf{40\ \text{nM}}$$

$$Z_{\text{peak}} = 40\left(1 - e^{-0.15(5)}\right) = 40\left(1 - e^{-0.75}\right) = 40(1 - 0.47237) = 40(0.52763) = \mathbf{21.11\ \text{nM}}$$

$$Z_{st} = \frac{40}{4} = \mathbf{10\ \text{nM}}$$

**(b)**

$$P = 1 - \frac{10}{21.11} = 1 - 0.4738 = \mathbf{0.526}$$

Check against the closed form: $1 - 1/\left[4(0.52763)\right] = 1 - 1/2.1105 = 1 - 0.4738 = 0.526$ ✔

**(c)** **The shortfall is entirely timing.** The ceiling $1 - 1/F = 0.75$ assumes $Z$ reached its full unrepressed level $Z^{\max} = 40$ before repression hit. It did not — at $t_m = 5$ min it had reached only 21.11 nM, 53 percent of the way. The overshoot you actually get is the overshoot you had time to build.

Two fixes:

1. **Raise $t_m$** — a higher $K_{YZ}$ or a slower $\alpha_Y$ delays the repressor. At $t_m = 20$ min, $1 - e^{-3} = 0.950$ and $P = 1 - 1/(4\times0.950) = 0.737$, essentially the ceiling. *Cost: a wider pulse, so a slower report of the change.*
2. **Raise $F$** — stronger repression lowers the plateau directly. At $F = 12$ with the original $t_m$, $P = 1 - 1/(12\times0.52763) = 0.842$. *Cost: the plateau may fall below the level the downstream target needs.*

**Not a fix: raising $\beta_Z$.** It scales $Z^{\max}$, $Z_{\text{peak}}$ and $Z_{st}$ by the same factor, so $P$ is unchanged. Precision is a ratio, and $\beta_Z$ cancels out of it — the same insensitivity to production rate that [2.1](02-01-input-functions-promoter-logic.md) found for response time.

**P2 (a)**

$$t_{1/2}^{\text{simple}} = \frac{\ln 2}{0.03} = \frac{0.6931}{0.03} = \mathbf{23.1\ \text{min}}$$

**(b)**

$$t_{1/2}^{\text{FFL}} = -\frac{1}{0.03}\ln\!\left(1 - \frac{1}{16}\right) = -33.33\ln(0.9375) = 33.33(0.064539) = \mathbf{2.15\ \text{min}}$$

$$\text{speedup} = \frac{23.1}{2.15} = \mathbf{10.7}$$

(Estimate $2F\ln 2 = 11.1$ ✔.) **Validity check:** this holds only if the repressor arrives after 2.15 min, i.e. $t_m > 2.15$ min — a genuine design constraint on the $Y$ arm, not a footnote.

**(c) The mechanism.** Both accelerators overdrive and then throttle; **neither changes $\alpha$**, which is the only thing that sets an unregulated protein's response time ([2.1](02-01-input-functions-promoter-logic.md)). They differ in *what closes the throttle*:

- **NAR:** the output protein itself. The feedback is instantaneous in the output's own concentration, so the throttle closes exactly when the output arrives — self-limiting, and it cannot overshoot much.
- **I1-FFL:** a separate, slower gene. The throttle closes on $Y$'s schedule, not $Z$'s, so **the timing is open-loop** and the output overshoots.

**Two costs the I1-FFL pays:**

1. **It overshoots.** The transient peak is $F$ times the target level (up to the $Z^{\max}$ ceiling). If $Z$ is toxic, or if downstream circuitry has a threshold, an eightfold spike is a real hazard. NAR approaches its steady state monotonically from below.
2. **The acceleration is not self-correcting.** NAR's throttle tracks the output; the I1-FFL's throttle fires on a timer set by $\beta_Y, \alpha_Y, K_{YZ}$. Perturb any of those and the pulse shape changes, whereas NAR's speedup survives because the feedback measures the thing it is regulating.

(A third, if you want it: the I1-FFL needs a second gene and a second promoter site — more parts, more mutational target.)

**The generalizable point, which is the control-theory one:** the I1-FFL is **feedforward** compensation and NAR is **feedback** compensation. Feedforward is faster and can be shaped precisely, but it is blind — it does not measure what it is correcting, so it is only as good as its calibration. Feedback measures the error and therefore self-corrects, at the price of needing the error to exist first. This is the same trade-off as feedforward-plus-feedback control in [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md), and it is why real controllers use both.

**P3 (a)** Invert $t_i = -10\ln(1 - K_i/200)$ to get $K_i = 200\left(1 - e^{-0.1 t_i}\right)$:

| Target time (min) | $e^{-0.1t_i}$ | $K_i$ (nM) |
|---|---|---|
| 2 | 0.81873 | $200(0.18127) = \mathbf{36.3}$ |
| 4 | 0.67032 | $200(0.32968) = \mathbf{65.9}$ |
| 8 | 0.44933 | $200(0.55067) = \mathbf{110.1}$ |
| 16 | 0.20190 | $200(0.79810) = \mathbf{159.6}$ |

Note how the thresholds crowd toward $X_{st} = 200$: doubling the delay from 8 to 16 minutes costs only a 45 percent increase in threshold. **Late scheduling is cheap in binding energy — and, as part (c) shows, that is exactly the problem.**

**(b)** With $X$ at its plateau of 200 when the signal is removed, $t^{\text{off}}_i = 10\ln(200/K_i)$:

| $K_i$ | $200/K_i$ | $t^{\text{off}}_i$ (min after removal) |
|---|---|---|
| 159.6 | 1.253 | $\mathbf{2.26}$ |
| 110.1 | 1.816 | $\mathbf{5.97}$ |
| 65.9 | 3.035 | $\mathbf{11.10}$ |
| 36.3 | 5.510 | $\mathbf{17.06}$ |

The 16-minute gene goes off first and the 2-minute gene last: **exactly reversed**, and note it is nearly a mirror image of the on-times (2.26 vs 2, 5.97 vs 4, 11.10 vs 8, 17.06 vs 16) — not identical, because the rise is $1-e^{-\alpha t}$ and the fall is $e^{-\alpha t}$, which are only reflections of each other through the midpoint.

**(c)** With $X_{st} = 150$ nM, recompute $t_i = -10\ln(1 - K_i/150)$:

| $K_i$ | $K_i/150$ | new $t_i$ | old $t_i$ |
|---|---|---|---|
| 36.3 | 0.242 | $-10\ln(0.758) = \mathbf{2.77}$ | 2 |
| 65.9 | 0.439 | $-10\ln(0.561) = \mathbf{5.79}$ | 4 |
| 110.1 | 0.734 | $-10\ln(0.266) = \mathbf{13.25}$ | 8 |
| 159.6 | 1.064 | **never fires** | 16 |

**Three things to read off this.**

1. **The order survived.** The three genes that still fire fire in the same sequence. No parameter change can permute a sorted list of thresholds — that is why order is a *structural* property of the module.
2. **The timing did not.** The late gene slipped from 8 minutes to 13.25, a 66 percent error, while the early gene slipped by only 38 percent. **Sensitivity grows with threshold**, because a high threshold sits where the regulator's curve is flattest and a small vertical shift buys a large horizontal one. The cheapness of late scheduling in part (a) is the same fact seen from the other side.
3. **The last gene dropped out entirely.** Any target with $K_i > X_{st}$ never activates. A 25 percent fall in regulator level produced not a delay but a **qualitative loss of one step of the program** — the kind of failure that shows up as a missing flagellum, not a slow one.

**The moral, and the setup for [3.3](03-03-integral-control-exact-adaptation.md):** ask of any biological property "is this pinned by the structure or tuned by the parameters?" Here the *rank order* is structural and holds across large perturbations; the *timing* is tuned and degrades smoothly; and the *membership* of the program has a hard cliff at $K_i = X_{st}$. Three properties of one circuit, three completely different robustness classes. Exact adaptation, in [3.3](03-03-integral-control-exact-adaptation.md), turns out to be in the first class — and that is why integral control is worth a lesson.

</details>

## Flashback

**From Lesson 2.4 (the feed-forward loop):** A C1-FFL with AND logic must ignore input pulses shorter than 8 minutes and respond to anything longer. The intermediate obeys $\dot Y = \beta_Y - \alpha_Y Y$ with $\alpha_Y = 0.1$ min$^{-1}$ and $Y_{st} = 40$ nM. (a) What threshold $K_Y$ implements exactly that filter? (b) With that threshold, how long after a genuine sustained ON does $Z$ begin to accumulate? (c) A promoter mutation halves $\beta_Y$. What does the filter become?

<details>
<summary>Solution</summary>

**(a)** The delay is $t_{\text{ON}} = -\frac{1}{\alpha_Y}\ln\left(1 - K_Y/Y_{st}\right)$. Set it to 8 min:

$$1 - \frac{K_Y}{40} = e^{-0.1(8)} = e^{-0.8} = 0.44933 \;\Longrightarrow\; K_Y = 40(0.55067) = \mathbf{22.0\ \text{nM}}$$

**(b) Eight minutes — the same number.** This is the point of the problem: **in a C1-FFL the filter width and the response delay are one quantity, not two.** You cannot buy a longer noise filter without paying an equal delay on every real signal. That is the cost [2.4](02-04-feed-forward-loop.md) named, made numerical. (The OFF transition is still immediate: $t_{\text{OFF}} = 0$, since the AND condition fails the instant $X$ drops.)

**(c)** Halving $\beta_Y$ halves the steady state: $Y_{st} = \beta_Y/\alpha_Y = 20$ nM. But $K_Y = 22.0 > 20$, so

$$Y(t) = 20\left(1 - e^{-0.1t}\right) < 20 < K_Y \quad \text{for all } t$$

**$Y$ never crosses its threshold, and $Z$ never turns on at all** — not late, ever. The circuit has gone from a persistence detector to a permanent block from a twofold change in one production rate.

**Why this is worth remembering:** the delay $t_{\text{ON}}$ depends on the *ratio* $K_Y/Y_{st}$, and that ratio has a hard boundary at 1. A filter tuned for a long delay necessarily sits with $K_Y$ close to $Y_{st}$ — near the cliff — so **the more selective the persistence detector, the more brittle it is.** Exactly the sensitivity-near-the-plateau effect that P3(c) found in single-input modules, and the reason [3.3](03-03-integral-control-exact-adaptation.md) asks what a circuit would have to look like for its key property not to sit on a cliff at all.

</details>

## Connections

- **Backward:** the peak time $t_m$ is [2.4](02-04-feed-forward-loop.md)'s $t_{\text{ON}}$ with the $Y \to Z$ sign flipped — one formula, two motifs. The acceleration is [2.2](02-02-negative-autoregulation.md)'s overdrive-and-throttle trick implemented feedforward instead of by feedback, and both are attacks on [2.1](02-01-input-functions-promoter-logic.md)'s result that $t_{1/2} = \ln 2/\alpha$ is untouchable by production rate alone. The repression fold $F$ and the promoter thresholds $K_i$ are Hill-function parameters from [1.4](01-04-cooperativity-hill-ultrasensitivity.md).
- **Forward:** [3.3](03-03-integral-control-exact-adaptation.md) is written against this lesson's central admission — that I1-FFL adaptation is approximate and parameter-dependent — and shows what structure makes it exact and robust instead. The bimodality that would blur a threshold-ordered program in a real population is [4.3](04-03-stochastic-gene-expression.md); [4.5](04-05-synthetic-biology-pattern-formation.md)'s French-flag model is this lesson's threshold ordering run in space rather than in time, which is a closer analogy than it first sounds.
- **Sideways:** [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) owns the qualitative adaptation story and the exactly-adapting $u/y$ form; this lesson supplies the pulse geometry and the precision it costs. The feedforward-versus-feedback trade-off in P2 is the same one that motivates combined controllers in [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md), and an I1-FFL is a band-pass element — it passes changes and blocks steady levels — in the sense of [signals-systems 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md).

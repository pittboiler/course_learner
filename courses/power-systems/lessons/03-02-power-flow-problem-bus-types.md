# Power Systems · Lesson 3.2: The power-flow problem and bus types

> ⏱ ~15 min · Module 3: Power flow and economic dispatch · Builds on: [3.1 The bus admittance matrix](03-01-bus-admittance-matrix.md) · Unlocks: [3.3 Gauss–Seidel power flow](03-03-gauss-seidel-power-flow.md), [3.4 Newton–Raphson power flow](03-04-newton-raphson-power-flow.md)

## Why this matters

$\mathbf{I} = \mathbf{Y}_{bus}\mathbf{V}$ is linear and would be trivial to solve — if you knew the injected currents. You don't. What is specified at a power-system bus is **power**, not current: a load draws 50 MW and 20 Mvar, a generator produces 200 MW and holds its voltage at 1.02 pu.

Substituting $S = VI^*$ into a linear relation makes it **nonlinear**, and forces one bus to be designated the [slack](../reference.md#slack-bus), and that single substitution is what makes power flow the central computational problem of the field rather than a homework exercise. This lesson sets the problem up precisely: what is specified where, what is unknown, how many equations there are, and why the count works out. Getting the bookkeeping right is most of the battle; [3.3](03-03-gauss-seidel-power-flow.md) and [3.4](03-04-newton-raphson-power-flow.md) then supply the numerical machinery.

## The idea

Each bus has four quantities associated with it: $|V|$, $\theta$, $P$, $Q$. At every bus, **exactly two are specified and two are unknown**. Which two are specified defines the bus type.

**Load bus (PQ).** A load draws a known real and reactive power, and nobody controls its voltage. So $P$ and $Q$ are given; $|V|$ and $\theta$ are unknown. Most buses in any system are PQ.

**Voltage-controlled bus (PV).** A generator's real output is set by dispatch, and its excitation is adjusted to hold its terminal voltage. So $P$ and $|V|$ are given; $Q$ and $\theta$ are unknown — the reactive output is whatever it takes to hold the voltage.

**Slack bus (swing).** One bus, and only one, has $|V|$ and $\theta$ specified — conventionally $1.0\angle0°$. Its $P$ and $Q$ are unknown.

Why is a slack bus necessary? Two reasons, and both are worth understanding.

**Losses are unknown until the problem is solved.** Total generation must equal total load *plus* losses, but the losses depend on the currents, which depend on the solution. You cannot specify every generator's output in advance, because the last few megawatts of loss are not known yet. The slack bus absorbs the discrepancy.

**Angles are only defined relative to something.** The equations depend on angle *differences*, so adding a constant to every angle changes nothing. Fixing one bus's angle removes that degeneracy — exactly like grounding a node in ordinary circuit analysis.

In practice the slack is a large generator with strong regulation, and it is chosen so that the leftover it absorbs is a small fraction of its capacity.

## The formal version

**Complex power injection at bus $i$.** From $S_i = V_iI_i^*$ and $I_i = \sum_kY_{ik}V_k$:

$$\boxed{\;S_i = P_i+jQ_i = V_i\sum_{k=1}^{N}\left(Y_{ik}V_k\right)^{*} = V_i\sum_{k=1}^{N}Y_{ik}^{*}V_k^{*}.\;}$$

*In words: the power injected at a bus is its voltage times the conjugate of the current the network draws from it.*

**Polar form.** Writing $V_i = |V_i|\angle\theta_i$ and $Y_{ik} = |Y_{ik}|\angle\gamma_{ik}$, and letting $\theta_{ik} = \theta_i-\theta_k$:

$$\boxed{\;P_i = \sum_{k=1}^{N}|V_i||V_k||Y_{ik}|\cos(\theta_{ik}-\gamma_{ik}), \qquad Q_i = \sum_{k=1}^{N}|V_i||V_k||Y_{ik}|\sin(\theta_{ik}-\gamma_{ik}).\;}$$

**Rectangular form** ($Y_{ik} = G_{ik}+jB_{ik}$), which is the version most solvers use:

$$P_i = |V_i|\sum_k|V_k|\left(G_{ik}\cos\theta_{ik}+B_{ik}\sin\theta_{ik}\right),$$
$$Q_i = |V_i|\sum_k|V_k|\left(G_{ik}\sin\theta_{ik}-B_{ik}\cos\theta_{ik}\right).$$

**Bus types.**

| Type | Specified | Unknown | Count | Typical |
|---|---|---|---|---|
| Slack (swing) | $\vert V\vert,\ \theta$ | $P,\ Q$ | exactly 1 | largest generator |
| PV (generator) | $P,\ \vert V\vert$ | $Q,\ \theta$ | $N_g$ | voltage-regulating units |
| PQ (load) | $P,\ Q$ | $\vert V\vert,\ \theta$ | rest | loads, tie buses |

**Counting.** With $N$ buses, 1 slack, $N_g$ PV buses, and $N-1-N_g$ PQ buses:

$$\text{unknowns} = \underbrace{(N-1)}_{\text{angles}}+\underbrace{(N-1-N_g)}_{\text{magnitudes}},$$

and the equations are one $P$ equation per non-slack bus and one $Q$ equation per PQ bus — **the same count**. The system is square, as it must be.

*In words: every non-slack bus contributes a $P$ equation, and every PQ bus contributes a $Q$ equation on top.*

**Mismatch.** The solution is found by driving the difference between specified and calculated power to zero:

$$\boxed{\;\Delta P_i = P_i^{\rm sched}-P_i^{\rm calc}(\mathbf{V},\boldsymbol\theta), \qquad \Delta Q_i = Q_i^{\rm sched}-Q_i^{\rm calc}(\mathbf{V},\boldsymbol\theta).\;}$$

Convergence is declared when every mismatch falls below a tolerance, typically $10^{-4}$ pu (0.01 MW on a 100 MVA base).

**Generator reactive limits.** A PV bus holds its voltage only while its reactive output stays within $[Q_{\min},Q_{\max}]$. If the required $Q$ exceeds a limit during iteration, the bus is **switched to PQ** with $Q$ fixed at the violated limit, and its voltage is allowed to fall away from the setpoint.

This is not a numerical convenience — it is physics. A generator at its excitation ceiling cannot hold voltage, and the switch is what lets a power flow predict voltage collapse. Handling these switches (and the possibility of switching back later) is one of the fiddliest parts of a production solver.

**Line flows, computed after the solve.** Once all voltages are known:

$$\boxed{\;S_{ij} = V_i\left[\left(V_i-V_j\right)y_{ij}+V_i\frac{y_{sh,ij}}{2}\right]^{*}.\;}$$

Note that $S_{ij}\neq-S_{ji}$: the difference is the loss in that branch.

**What the power flow delivers.** Voltage magnitude and angle at every bus; real and reactive flow on every branch, and its loss; slack-bus generation; each PV generator's reactive output. That output set answers the operating questions: is any voltage out of limits, is any line overloaded, is any generator against its var ceiling.

## Picture

![A two-panel figure. Left: a five-bus one-line diagram with each bus labelled by its type — one slack bus with a generator symbol and the annotation V and theta known, two PV buses with generator symbols annotated P and V known, and two PQ buses with load arrows annotated P and Q known — and a small table beneath each bus listing which of the four quantities are specified and which are unknown. Right: a bookkeeping ledger showing the count, with the number of unknown angles and unknown magnitudes on the left and the number of P equations and Q equations on the right, the two totals equal and connected by an equals sign.](assets/03-02-fig1.svg)

Left: the classification. Every bus carries the same four quantities; only which pair is known changes.

Right: the count that must balance. Angles for every non-slack bus, magnitudes for every PQ bus — matched exactly by one $P$ equation per non-slack bus and one $Q$ equation per PQ bus. If your count does not balance, you have misclassified a bus.

## Worked examples

**Example 1 (classifying a system and counting the problem).** A five-bus system: bus 1 is a large generating station chosen as slack; buses 2 and 4 have voltage-regulating generators; buses 3 and 5 are loads. Classify each bus and size the problem.

| Bus | Type | Specified | Unknown |
|---|---|---|---|
| 1 | Slack | $\vert V_1\vert = 1.04$, $\theta_1 = 0$ | $P_1$, $Q_1$ |
| 2 | PV | $P_2 = 0.5$, $\vert V_2\vert = 1.02$ | $Q_2$, $\theta_2$ |
| 3 | PQ | $P_3 = -0.8$, $Q_3 = -0.3$ | $\vert V_3\vert$, $\theta_3$ |
| 4 | PV | $P_4 = 0.3$, $\vert V_4\vert = 1.01$ | $Q_4$, $\theta_4$ |
| 5 | PQ | $P_5 = -1.2$, $Q_5 = -0.5$ | $\vert V_5\vert$, $\theta_5$ |

(Loads are negative injections — a bus that consumes 0.8 pu injects $-0.8$ pu.)

*Counting.*

Unknown angles: $\theta_2,\theta_3,\theta_4,\theta_5$ → **4** (all non-slack buses).

Unknown magnitudes: $|V_3|,|V_5|$ → **2** (PQ buses only).

Total unknowns: **6**.

Equations: $P$ at buses 2, 3, 4, 5 → 4. $Q$ at buses 3, 5 → 2. Total: **6** ✓.

*Sanity check on the specified generation.* Scheduled generation is $0.5+0.3 = 0.8$ pu at the PV buses; scheduled load is $0.8+1.2 = 2.0$ pu. So the slack must supply about $2.0-0.8 = 1.2$ pu plus losses — perhaps 1.23 pu. **If the answer came back as 0.05 pu or 3 pu, a bus is misclassified or a sign is wrong**, and this two-second estimate catches it before any iteration.

**Example 2 (evaluating injections and flows from a solved case).** Take the three-bus system of [3.1](03-01-bus-admittance-matrix.md) with

$$\mathbf{Y}_{bus} = \begin{bmatrix}6.25-j18.695 & -5+j15 & -1.25+j3.75\\ -5+j15 & 6.6667-j19.95 & -1.6667+j5\\ -1.25+j3.75 & -1.6667+j5 & 2.9167-j8.705\end{bmatrix}$$

and a solved profile $V_1 = 1.05\angle0°$, $V_2 = 0.98\angle{-3°}$, $V_3 = 1.00\angle{-5°}$. Find the injections at every bus, the line flows, and verify power balance.

*Injections.* Using $S_i = V_i\left(\sum_kY_{ik}V_k\right)^{*}$:

$$V_2 = 0.9787-j0.0513, \qquad V_3 = 0.9962-j0.0872.$$

$$I_1 = Y_{11}V_1+Y_{12}V_2+Y_{13}V_3 = 1.5201-j0.8488,$$
$$S_1 = (1.05)(1.5201+j0.8488) = 1.5961+j0.8912\ \mathrm{pu}.$$

Similarly:

$$S_2 = -1.0044-j0.9386\ \mathrm{pu}, \qquad S_3 = -0.5374+j0.0569\ \mathrm{pu}.$$

*Reading the result.* Bus 1 generates 1.60 pu of real power and 0.89 pu of vars — clearly the slack. Bus 2 consumes 1.00 pu and 0.94 pu — a heavy, poor-power-factor load. Bus 3 consumes 0.54 pu real but **injects** 0.057 pu of vars, because the charging of the two lines that reach it exceeds what its own consumption absorbs.

*Line flows.*

| Line | $S_{ij}$ | $S_{ji}$ | Loss |
|---|---|---|---|
| 1–2 | $1.1824+j0.8213$ | $-1.1438-j0.7674$ | $0.0386+j0.0539$ |
| 1–3 | $0.4138+j0.0699$ | $-0.4007-j0.0831$ | $0.0131-j0.0132$ |
| 2–3 | $0.1393-j0.1712$ | $-0.1367+j0.1400$ | $0.0027-j0.0312$ |

*Checking the balance.*

$$\sum_iP_i = 1.5961-1.0044-0.5374 = 0.0543\ \mathrm{pu},$$

and the line losses sum to $0.0386+0.0131+0.0027 = 0.0544$ pu ✓ (0.05 pu = 5.4 MW on a 100 MVA base, about 3.4% of generation — a realistic figure).

$$\sum_iQ_i = 0.8912-0.9386+0.0569 = 0.0095\ \mathrm{pu},$$

matching the reactive-loss column: $0.0539-0.0132-0.0312 = 0.0095$ ✓.

*What the negative reactive losses mean.* Lines 1–3 and 2–3 have **negative** net reactive loss — they generate more vars from their charging capacitance than they absorb in $I^2X$. That is the sub-SIL condition of [2.6](02-06-long-line-surge-impedance.md), seen from the network side: these two lines are lightly loaded and are net var sources. Line 1–2 carries 1.18 pu, well above its natural loading, and is a var sink.

**This is the single most useful diagnostic in a power-flow result.** Lines below SIL push voltage up at their far ends; lines above SIL pull it down. Scanning the reactive-loss column tells an operator immediately where the system's voltage problems will appear, and whether the fix is to add capacitors (raise voltage on a heavily loaded corridor) or to switch in reactors (suppress the rise on a lightly loaded one).

*One more check worth doing.* Line 1–2's flow at the receiving end is $-1.1438-j0.7674$, i.e. bus 2 *receives* 1.1438 pu. Bus 2 also receives $-0.1393$ from line 2–3 (it sends 0.1393 out), so its net is $1.1438-0.1393 = 1.0045$ pu consumed — matching $S_2$ ✓. Bus-by-bus flow summation is a stronger check than the global balance, because it catches sign errors on individual branches that a global sum can hide.

## Watch out

- **You might specify more than one slack bus, or none.** Exactly one, always. Without it the angles are undetermined and the system is singular; with two, the loss allocation is ambiguous.
- **You might give loads positive signs.** Injections are positive for generation and negative for load. A 50 MW load is $P = -0.5$ pu on a 100 MVA base.
- **You might forget the conjugate.** $S = VI^*$, so $S_i = V_i(\sum Y_{ik}V_k)^{*}$. Dropping the conjugate flips the sign of $Q$ and gives a plausible-looking wrong answer.
- **You might expect $S_{ij} = -S_{ji}$.** The difference *is* the branch loss — that is how you compute it.
- **You might ignore generator var limits.** A PV bus that cannot reach its setpoint must be switched to PQ at its limit; ignoring this yields an answer with a generator producing physically impossible reactive power.
- **You might mismatch the equation count.** $(N-1)$ $P$-equations plus $N_{PQ}$ $Q$-equations. If your unknowns and equations differ, recheck the bus types.

## One-liner

> Every bus has $|V|$, $\theta$, $P$, $Q$ with exactly two specified — PQ for loads, PV for generators, one slack to absorb the losses and fix the angle reference — and substituting $S = VI^*$ into $\mathbf{I}=\mathbf{Y}_{bus}\mathbf{V}$ is what makes the problem nonlinear.

## Problems

**P1 (🟢)** A six-bus system has bus 1 as slack, generators at buses 2, 3 and 6, and loads at buses 4 and 5. (a) Classify every bus. (b) Count the unknowns and the equations, and confirm they match. (c) If the generator at bus 6 hits its reactive limit during the solve, state what changes and by how much the equation count shifts.

**P2 (🟡)** For a two-bus system with $\mathbf{Y}_{bus} = \begin{bmatrix}2.94-j11.76 & -2.94+j11.76\\ -2.94+j11.76 & 2.94-j11.76\end{bmatrix}$ pu, bus 1 is the slack at $1.0\angle0°$ and the solved value of $V_2$ is $0.937\angle{-3.18°}$. (a) Find $S_2$ and confirm it is close to a load of $0.8+j0.6$ pu. (b) Find $S_1$. (c) Find the real and reactive losses.

**P3 (🔴)** In the three-bus system of Example 2, bus 3's load is increased so that the solved profile becomes $V_1 = 1.05\angle0°$, $V_2 = 0.96\angle{-5°}$, $V_3 = 0.97\angle{-8°}$. (a) Find all three injections. (b) Find the total real losses and compare with Example 2. (c) Find the reactive loss on each line and identify which lines are now above their natural loading. (d) The operator wants bus 3 back at 1.00 pu. Estimate the capacitor bank needed at bus 3, and explain why a capacitor at bus 3 is more effective than the same capacitor at bus 1.

<details>
<summary>Solutions</summary>

**P1** (a)

| Bus | Type |
|---|---|
| 1 | Slack |
| 2, 3, 6 | PV |
| 4, 5 | PQ |

(b) Unknown angles: buses 2–6 → **5**. Unknown magnitudes: buses 4, 5 → **2**. Total **7**.

$P$ equations: buses 2–6 → 5. $Q$ equations: buses 4, 5 → 2. Total **7** ✓.

(c) Bus 6 switches from PV to PQ with $Q_6$ fixed at the violated limit. Its voltage magnitude becomes unknown, so:

- unknown magnitudes: 2 → **3**
- $Q$ equations: 2 → **3**

Total unknowns and equations both rise from 7 to **8** — still square. The count always balances; the switch just moves a bus between categories.

*What it means physically:* bus 6's voltage will now come out **below** its setpoint (if it hit $Q_{\max}$), because the generator is at its excitation ceiling and cannot supply the vars needed to hold it up. That is exactly the mechanism of voltage collapse, and it is why a power flow that reports many PV-to-PQ switches is warning of a stressed system.

**P2** (a) $$V_1 = 1.0, \qquad V_2 = 0.937\angle{-3.18°} = 0.93556-j0.05197.$$

$$I_2 = Y_{21}V_1+Y_{22}V_2 = (-2.94+j11.76)(1.0)+(2.94-j11.76)(0.93556-j0.05197).$$

Second term: $(2.94)(0.93556)+(2.94)(-j0.05197)+(-j11.76)(0.93556)+(-j11.76)(-j0.05197)$
$= 2.7506-j0.1528-j11.0022-0.6112 = 2.1394-j11.1550$.

$$I_2 = (-2.94+2.1394)+j(11.76-11.1550) = -0.8006+j0.6050.$$

$$S_2 = V_2I_2^{*} = (0.93556-j0.05197)(-0.8006-j0.6050)$$
$$= -0.74902-j0.56602+j0.04161-0.03144 = -0.7806-j0.5244\ \mathrm{pu}.$$

The scheduled load is $0.8+j0.6$, i.e. an injection of $-0.8-j0.6$. The computed injection is $-0.78-j0.52$, so the **mismatch** is

$$\Delta P_2 = -0.8-(-0.7806) = -0.0195, \qquad \Delta Q_2 = -0.6-(-0.5244) = -0.0756.$$

Not converged — this is the result after a single Gauss–Seidel step ([3.3](03-03-gauss-seidel-power-flow.md)), and the reactive mismatch in particular is still large. Two more sweeps would bring both under $10^{-3}$.

(b) $$I_1 = Y_{11}V_1+Y_{12}V_2 = (2.94-j11.76)+(-2.94+j11.76)(0.93556-j0.05197).$$

Second term: $-2.7506+j0.1528+j11.0022+0.6112 = -2.1394+j11.1550$.

$$I_1 = 0.8007-j0.6050, \qquad S_1 = (1.0)(0.8007+j0.6050) = 0.8007+j0.6050\ \mathrm{pu}.$$

(c) $$P_{\rm loss} = P_1+P_2 = 0.8007-0.7806 = 0.0201\ \mathrm{pu},$$
$$Q_{\rm loss} = Q_1+Q_2 = 0.6050-0.5244 = 0.0806\ \mathrm{pu}.$$

*Cross-check directly:* $|I| = \sqrt{0.8007^2+0.6050^2} = 1.0036$, so

$$P_{\rm loss} = |I|^2R = (1.0036)^2(0.02) = 0.0201\ \checkmark, \qquad Q_{\rm loss} = |I|^2X = (1.0036)^2(0.08) = 0.0806\ \checkmark.$$

(There is no shunt in this system, so the reactive loss is purely $I^2X$.)

**P3** (a) With $V_2 = 0.96\angle{-5°} = 0.95635-j0.08367$ and $V_3 = 0.97\angle{-8°} = 0.96056-j0.13500$:

$$I_1 = Y_{11}V_1+Y_{12}V_2+Y_{13}V_3.$$

$Y_{11}V_1 = (6.25-j18.695)(1.05) = 6.5625-j19.6298$.

$Y_{12}V_2 = (-5+j15)(0.95635-j0.08367) = -4.78175+j0.41835+j14.34525+1.25505 = -3.5267+j14.7636$.

$Y_{13}V_3 = (-1.25+j3.75)(0.96056-j0.13500) = -1.20070+j0.16878+j3.60210+0.50633 = -0.6944+j3.7709$.

$$I_1 = 2.3414-j1.0953, \qquad S_1 = 1.05(2.3414+j1.0953) = 2.4585+j1.1501\ \mathrm{pu}.$$

By the same procedure:

$$S_2 = -1.5008-j0.9681\ \mathrm{pu}, \qquad S_3 = -0.8415+j0.0171\ \mathrm{pu}.$$

(b) $$P_{\rm loss} = 2.4584-1.5008-0.8415 = 0.1161\ \mathrm{pu},$$

against 0.0543 pu in Example 2 — the losses have **more than doubled**.

*Why.* Generation rose from 1.60 to 2.46 pu, a factor of 1.54, and losses go as roughly the square of the current: $1.54^2 = 2.37$, against the observed $0.1161/0.0543 = 2.14$. The agreement is good, and the shortfall is because the loading did not grow uniformly — line 2–3 barely changed, so its losses barely changed, while the two lines out of bus 1 took nearly all the increase.

**Losses scale as the square of loading.** That single fact drives transmission planning: doubling the power on a corridor quadruples the losses on it, which is why new load is met by building new paths rather than by loading existing ones harder.

(c) Reactive losses per line, computed as $S_{ij}+S_{ji}$:

| Line | $Q$ loss (pu) | Interpretation |
|---|---|---|
| 1–2 | $+0.1758$ | far above natural loading — net var **sink** |
| 1–3 | $+0.0473$ | now above natural loading |
| 2–3 | $-0.0240$ | still below natural loading — net var **source** |

So **lines 1–2 and 1–3 are now above their natural loading**, where in Example 2 only line 1–2 was. Line 1–3 has crossed over, which is the signature of a system being loaded into its reactive-deficit regime.

*Total:* $0.1758+0.0473-0.0240 = 0.1991$ pu of reactive loss, against 0.0095 pu before — a **twentyfold** increase against a real-loss increase of only 2.1 times. **Reactive losses grow far faster than real losses** ($X\gg R$ on transmission, so $I^2X\gg I^2R$), which is why voltage problems appear before thermal ones on a stressed system.

(d) *Sizing the capacitor.* Bus 3 needs to rise from 0.97 to 1.00 pu, i.e. $\Delta|V| = 0.03$ pu. The standard sensitivity estimate uses the Thevenin reactance seen at the bus:

$$\Delta|V| \approx \frac{X_{th}\,Q_{\rm inj}}{|V|} \quad\Longrightarrow\quad Q_{\rm inj} \approx \frac{|V|\,\Delta|V|}{X_{th}}.$$

From $Y_{bus}$, bus 3's total connected susceptance is $|B_{33}| = 8.705$, so a rough Thevenin reactance is $X_{th}\approx1/8.705 = 0.1149$ pu:

$$Q_{\rm inj} \approx \frac{(0.97)(0.03)}{0.1149} = 0.253\ \mathrm{pu} = 25.3\ \mathrm{Mvar}\ \text{on a 100 MVA base}.$$

A **25–30 Mvar capacitor bank** at bus 3 would do it. (A real study would iterate the power flow rather than trust this linearization, but the estimate is reliably within about 20%.)

*Why bus 3 and not bus 1.* Three reasons, in increasing order of importance:

**Voltage sensitivity is local.** $\partial|V_3|/\partial Q_3$ is large — bus 3 is electrically weak, with $|Y_{33}| = 8.7$ against bus 1's 18.7. Injecting vars at bus 1, a strong bus, moves bus 1's own voltage very little and bus 3's less still.

**Vars do not travel well.** Reactive power flowing from bus 1 to bus 3 must cross the lines' reactance, and the transport itself consumes vars: $I^2X$ rises with the extra current. Supplying 25 Mvar from bus 1 might require 30 Mvar of generation, with the difference lost in transit. A capacitor at bus 3 supplies its vars where they are consumed.

**The current reduction is what matters.** A capacitor at bus 3 reduces the reactive current on **both** lines feeding bus 3, cutting $I^2R$ and $I^2X$ on each. A capacitor at bus 1 reduces nothing — bus 1 is the source, and the same current still flows down the lines.

The general principle, and it is one of the most reliable rules in the field: **compensate reactive power where it is consumed**, as close to the load as economics allows. It is the network-level statement of the power-factor correction of [`circuits` 4.3](../../circuits/lessons/04-03-ac-power-power-factor.md), and it is why distribution feeders carry pole-mounted capacitor banks rather than centralizing them at the substation.

</details>

## Flashback

**From Lesson 3.1 (The bus admittance matrix):** A three-bus system has lines 1–2 with $z = 0.01+j0.03$ pu and 2–3 with $z = 0.02+j0.06$ pu, no charging, and a capacitor of $j0.05$ pu at bus 3. (a) Build $Y_{bus}$. (b) Verify the row sums.

<details>
<summary>Solution</summary>

(a) $$y_{12} = \frac{1}{0.01+j0.03} = \frac{0.01-j0.03}{0.001} = 10-j30,$$
$$y_{23} = \frac{1}{0.02+j0.06} = \frac{0.02-j0.06}{0.004} = 5-j15.$$

$$Y_{11} = 10-j30, \qquad Y_{22} = (10-j30)+(5-j15) = 15-j45, \qquad Y_{33} = (5-j15)+j0.05 = 5-j14.95,$$
$$Y_{12}=Y_{21} = -10+j30, \qquad Y_{23}=Y_{32} = -5+j15, \qquad Y_{13}=Y_{31}=0.$$

$$\mathbf{Y}_{bus} = \begin{bmatrix}10-j30 & -10+j30 & 0\\ -10+j30 & 15-j45 & -5+j15\\ 0 & -5+j15 & 5-j14.95\end{bmatrix}.$$

(b) Row 1: $(10-j30)+(-10+j30) = 0$ ✓ (no shunt at bus 1).

Row 2: $(-10+j30)+(15-j45)+(-5+j15) = 0$ ✓ (no shunt at bus 2).

Row 3: $(-5+j15)+(5-j14.95) = j0.05$ ✓ — exactly the capacitor.

*Note the sign convention:* a capacitor has **positive** susceptance ($y = j\omega C$), so it adds $+j0.05$ and makes the imaginary part of $Y_{33}$ *less* negative. A reactor would subtract. Getting this sign wrong reverses the direction the bank moves the voltage, so it is worth the extra second to check the row sum after adding any shunt device.

</details>

## Connections

- **Backward:** $\mathbf{Y}_{bus}$ is [3.1](03-01-bus-admittance-matrix.md)'s; the per-unit framing is [1.3](01-03-the-per-unit-system.md)'s; the sub-SIL/above-SIL reading of the reactive-loss column is [2.6](02-06-long-line-surge-impedance.md)'s.
- **Forward:** [3.3](03-03-gauss-seidel-power-flow.md) and [3.4](03-04-newton-raphson-power-flow.md) solve these equations; [3.5](03-05-economic-dispatch.md) decides what the PV buses' $P$ values should be in the first place.
- **Sideways:** this is a nonlinear algebraic system solved by Newton's method, exactly as in [`numerical-analysis`](../../numerical-analysis/syllabus.md) — the power-flow Jacobian is that subject's Jacobian, with an unusually helpful sparsity and structure.

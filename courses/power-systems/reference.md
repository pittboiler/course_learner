# Power Systems · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Power-system analysis is bookkeeping with physics attached: normalize everything to per-unit, reduce three phases to one, assemble the pieces into a matrix, solve, then break it on purpose and see whether it survives. This card holds the conversion factors, the model formulas, the sequence tables, and the traps — the things you'd otherwise go hunting through a lesson for while mid-problem.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $V_{LL}$, $V_\phi$ | line-to-line and line-to-neutral (phase) voltage | [1.1](lessons/01-01-ac-power-and-three-phase.md) |
| $S$, $P$, $Q$ | apparent (VA), real (W), reactive (var) power | [1.1](lessons/01-01-ac-power-and-three-phase.md) |
| $\varphi$ | power-factor angle — how far current lags or leads voltage | [1.1](lessons/01-01-ac-power-and-three-phase.md) |
| $Z_Y$, $Z_\Delta$ | per-phase impedance of a wye or delta load | [1.2](lessons/01-02-per-phase-equivalent.md) |
| $S_{base}$, $V_{base}$ | chosen normalizing power (three-phase MVA) and voltage (line-to-line kV) | [1.3](lessons/01-03-the-per-unit-system.md) |
| pu | per-unit — a quantity divided by its base, so healthy values sit near 1.0 | [1.3](lessons/01-03-the-per-unit-system.md) |
| $a$ | transformer turns ratio $N_1/N_2$, or (in Module 4) the operator $1\angle120°$ | [2.1](lessons/02-01-ideal-and-real-transformer.md) |
| $R_{eq}$, $X_{eq}$ | transformer's total series resistance and leakage reactance, referred to one side | [2.1](lessons/02-01-ideal-and-real-transformer.md) |
| $R_c$, $X_m$ | core-loss resistance and magnetizing reactance (the shunt branch) | [2.1](lessons/02-01-ideal-and-real-transformer.md) |
| VR | voltage regulation — how far the output voltage sags from no load to full load | [2.2](lessons/02-02-transformer-performance-per-unit.md) |
| $D_m$ | geometric mean distance — the effective spacing of three unequally spaced conductors | [2.4](lessons/02-04-transmission-line-parameters.md) |
| $D_s$, $r'$ | geometric mean radius — the effective radius that accounts for internal flux | [2.4](lessons/02-04-transmission-line-parameters.md) |
| $A,B,C,D$ | two-port parameters of a line or cascade: $V_S = AV_R+BI_R$, $I_S = CV_R+DI_R$ | [2.5](lessons/02-05-short-and-medium-line-models.md) |
| $\delta$ | power angle — the angle by which the sending voltage (or rotor) leads | [2.5](lessons/02-05-short-and-medium-line-models.md) |
| $\gamma = \alpha+j\beta$ | propagation constant per unit length: attenuation plus phase shift | [2.6](lessons/02-06-long-line-surge-impedance.md) |
| $Z_c$ | surge (characteristic) impedance — voltage-to-current ratio in a travelling wave | [2.6](lessons/02-06-long-line-surge-impedance.md) |
| SIL | surge-impedance loading — the loading at which a line's voltage profile is flat | [2.6](lessons/02-06-long-line-surge-impedance.md) |
| $\mathbf{Y}_{bus}$ | bus admittance matrix: $\mathbf{I} = \mathbf{Y}_{bus}\mathbf{V}$ | [3.1](lessons/03-01-bus-admittance-matrix.md) |
| $y_{ij}$, $y_{sh}$ | series admittance of a branch; total shunt (charging) admittance of a line | [3.1](lessons/03-01-bus-admittance-matrix.md) |
| $\theta_{ik}$ | angle difference $\theta_i-\theta_k$ between two bus voltages | [3.2](lessons/03-02-power-flow-problem-bus-types.md) |
| $\Delta P_i$, $\Delta Q_i$ | mismatch — scheduled power minus calculated power at bus $i$ | [3.2](lessons/03-02-power-flow-problem-bus-types.md) |
| $\alpha$ (Module 3) | acceleration factor in Gauss–Seidel over-relaxation | [3.3](lessons/03-03-gauss-seidel-power-flow.md) |
| $\mathbf{J}$ | power-flow Jacobian, blocks $\mathbf{H},\mathbf{N},\mathbf{J}_{Q\theta},\mathbf{L}$ | [3.4](lessons/03-04-newton-raphson-power-flow.md) |
| $\lambda$ | system incremental cost — the price of the next megawatt, in dollars/MWh | [3.5](lessons/03-05-economic-dispatch.md) |
| $L_i$ | penalty factor — how much a unit's remoteness inflates its effective cost | [3.5](lessons/03-05-economic-dispatch.md) |
| $X_d''$, $X_d'$, $X_d$ | subtransient, transient and steady-state synchronous reactance | [4.1](lessons/04-01-symmetrical-faults.md) |
| $Z_{th}$, $Z_{kk}$ | Thevenin impedance at the fault bus; the $Z_{bus}$ diagonal entry that equals it | [4.1](lessons/04-01-symmetrical-faults.md) |
| MVA$_{sc}$ | short-circuit capacity — how "strong" a bus is | [4.1](lessons/04-01-symmetrical-faults.md) |
| $V_0$, $V_1$, $V_2$ | zero-, positive- and negative-sequence components (of phase $a$) | [4.2](lessons/04-02-symmetrical-components.md) |
| $Z_0$, $Z_1$, $Z_2$ | sequence impedances of a network element | [4.2](lessons/04-02-symmetrical-components.md) |
| $Z_f$ | fault impedance (arc or ground resistance) at the fault point | [4.3](lessons/04-03-sequence-networks-unsymmetrical-faults.md) |
| CTR, TMS | current-transformer ratio; time-multiplier setting of an inverse-time relay | [4.4](lessons/04-04-protection-and-relaying.md) |
| CTI | coordination time interval between adjacent relays | [4.4](lessons/04-04-protection-and-relaying.md) |
| $H$ | inertia constant — seconds of rated output stored as rotational kinetic energy | [4.5](lessons/04-05-swing-equation-rotor-dynamics.md) |
| $M$ | inertia coefficient $2H/\omega_s$, in s²/rad | [4.5](lessons/04-05-swing-equation-rotor-dynamics.md) |
| $P_s$ | synchronizing power coefficient $P_{\max}\cos\delta_0$ — the rotor's "spring constant" | [4.5](lessons/04-05-swing-equation-rotor-dynamics.md) |
| $\delta_{cr}$, $t_{cr}$ | critical clearing angle and time | [4.6](lessons/04-06-transient-stability-equal-area.md) |

## Definitions

### Per-unit

A quantity divided by a chosen base of the same kind, so that healthy values land near 1.0 and transformer turns ratios disappear.

$$X_{\rm pu} = \frac{X_{\rm actual}}{X_{base}}$$

*Introduced:* [1.3](lessons/01-03-the-per-unit-system.md)

### Per-phase equivalent

A balanced three-phase circuit redrawn as one phase against neutral; solve it once, and the other two phases follow by rotation.

*Introduced:* [1.2](lessons/01-02-per-phase-equivalent.md)

### Voltage regulation

How far the output voltage rises when the load is removed, as a fraction of the full-load voltage — a measure of how "stiff" a source is.

$$\mathrm{VR} = \frac{|V_{NL}|-|V_{FL}|}{|V_{FL}|}\times100\%$$

*Introduced:* [2.2](lessons/02-02-transformer-performance-per-unit.md)

### Geometric mean distance (GMD)

The single equivalent spacing that a set of unequally spaced conductors behaves like, once the line is transposed.

$$D_m = \sqrt[3]{D_{ab}D_{bc}D_{ca}}$$

*Introduced:* [2.4](lessons/02-04-transmission-line-parameters.md)

### Geometric mean radius (GMR)

The effective radius of a conductor once its internal flux is accounted for — smaller than the physical radius for a solid round wire.

$$D_s = r' = 0.7788\,r \quad\text{(solid round conductor)}$$

*Introduced:* [2.4](lessons/02-04-transmission-line-parameters.md)

### ABCD parameters

Four constants that describe any two-port between a sending and a receiving end, so that lines, transformers and cascades of both look alike.

$$\begin{bmatrix}V_S\\I_S\end{bmatrix} = \begin{bmatrix}A&B\\C&D\end{bmatrix}\begin{bmatrix}V_R\\I_R\end{bmatrix}, \qquad AD-BC = 1$$

*Introduced:* [2.5](lessons/02-05-short-and-medium-line-models.md)

### Power angle

The angle by which the sending-end voltage leads the receiving-end voltage — and, for a generator, the angle by which its rotor leads the synchronous reference.

$$P = \frac{V_SV_R}{X}\sin\delta$$

*Introduced:* [2.5](lessons/02-05-short-and-medium-line-models.md), used dynamically in [4.5](lessons/04-05-swing-equation-rotor-dynamics.md)

### Surge impedance

The ratio of voltage to current in a single travelling wave — what a line looks like before any reflection returns.

$$Z_c = \sqrt{\frac{z}{y}} \approx \sqrt{\frac{L}{C}}\quad\text{(low loss)}$$

*Introduced:* [2.6](lessons/02-06-long-line-surge-impedance.md)

### Surge-impedance loading (SIL)

The loading at which a line's own charging exactly offsets its reactive absorption, so the voltage magnitude is constant along the whole length.

$$\mathrm{SIL} = \frac{V_{LL}^2}{Z_c}\ \ \text{(MW, with } V_{LL}\text{ in kV)}$$

*Introduced:* [2.6](lessons/02-06-long-line-surge-impedance.md)

### Ferranti effect

An unloaded long line's far-end voltage exceeds its source voltage, because the distributed capacitance draws a leading current through the line's inductance.

$$\frac{V_R}{V_S} = \frac{1}{\cos\beta\ell} > 1$$

*Introduced:* [2.6](lessons/02-06-long-line-surge-impedance.md)

### Bus admittance matrix

Nodal analysis applied to a power network: diagonals sum everything touching a bus, off-diagonals are the negative of the direct branch admittance.

$$\mathbf{I} = \mathbf{Y}_{bus}\mathbf{V}$$

*Introduced:* [3.1](lessons/03-01-bus-admittance-matrix.md)

### Slack bus

The one bus whose voltage magnitude and angle are fixed, so that it absorbs the losses (unknown until the problem is solved) and fixes the angle reference.

*Introduced:* [3.2](lessons/03-02-power-flow-problem-bus-types.md)

### Mismatch

The difference between the power scheduled at a bus and the power the current voltage estimate implies; driving it to zero is what "solving the power flow" means.

$$\Delta P_i = P_i^{\rm sch}-P_i^{\rm calc}, \qquad \Delta Q_i = Q_i^{\rm sch}-Q_i^{\rm calc}$$

*Introduced:* [3.2](lessons/03-02-power-flow-problem-bus-types.md)

### Acceleration factor

An over-relaxation multiplier that takes a step larger than Gauss–Seidel suggests, betting that the trend continues.

$$V_i^{(k+1)} = V_i^{(k)}+\alpha\left(V_i^{\rm calc}-V_i^{(k)}\right), \qquad 1<\alpha<2$$

*Introduced:* [3.3](lessons/03-03-gauss-seidel-power-flow.md)

### Power-flow Jacobian

The matrix of sensitivities of every bus's injected power to every unknown angle and magnitude; Newton's method solves a linear system with it each iteration.

*Introduced:* [3.4](lessons/03-04-newton-raphson-power-flow.md)

### Incremental cost

What the next megawatt costs from a given unit — the derivative of its cost curve, and the quantity that must be equal across all dispatched units.

$$\lambda_i = \frac{dC_i}{dP_i}$$

*Introduced:* [3.5](lessons/03-05-economic-dispatch.md)

### Penalty factor

The multiplier that converts a remote unit's incremental cost into its effective cost at the load, accounting for the losses its extra output causes.

$$L_i = \frac{1}{1-\dfrac{\partial P_L}{\partial P_i}}, \qquad L_i\lambda_i = \lambda$$

*Introduced:* [3.5](lessons/03-05-economic-dispatch.md)

### Unit commitment

Deciding *which* generators to run over the coming hours, as opposed to how much each running unit should produce — a mixed-integer problem because start-up costs and minimum run times couple the hours together.

*Introduced:* [3.5](lessons/03-05-economic-dispatch.md)

### Subtransient reactance

The reactance a synchronous machine presents in the first two or three cycles after a fault, while damper-winding currents are still flowing — the smallest of the three, and the one that sets breaker duty.

*Introduced:* [4.1](lessons/04-01-symmetrical-faults.md)

### Fault MVA

A single number characterizing how strong a bus is: the apparent power a bolted three-phase fault there would draw.

$$\mathrm{MVA}_{sc} = \frac{S_{base}}{Z_{th,\rm pu}} = \sqrt3\,V_{LL}I_f$$

*Introduced:* [4.1](lessons/04-01-symmetrical-faults.md)

### Symmetrical components

Any three unbalanced phasors written as the sum of three balanced sets — positive, negative and zero sequence — which do not interact in a symmetric network.

$$V_0 = \tfrac13(V_a+V_b+V_c), \quad V_1 = \tfrac13(V_a+aV_b+a^2V_c), \quad V_2 = \tfrac13(V_a+a^2V_b+aV_c)$$

*Introduced:* [4.2](lessons/04-02-symmetrical-components.md)

### Zero sequence

Three equal, in-phase phasors. They do not sum to zero, so zero-sequence current requires a return path — a grounded neutral or the earth.

$$I_n = I_a+I_b+I_c = 3I_0$$

*Introduced:* [4.2](lessons/04-02-symmetrical-components.md)

### Sequence network

The whole power system as seen by one sequence, reduced to its Thevenin equivalent at the fault bus. Only the positive-sequence network contains a source.

*Introduced:* [4.3](lessons/04-03-sequence-networks-unsymmetrical-faults.md)

### Differential protection

Compare the current entering a zone with the current leaving; they are equal unless there is a fault inside. Inherently selective, so it needs no coordination.

$$I_{\rm op} = |I_1-I_2|, \qquad I_{\rm rest} = \frac{|I_1|+|I_2|}{2}$$

*Introduced:* [4.4](lessons/04-04-protection-and-relaying.md)

### Distance protection

Compute $V/I$ at the relay; the ratio is proportional to the distance to the fault, so an impedance threshold is a distance threshold — independent of fault level.

*Introduced:* [4.4](lessons/04-04-protection-and-relaying.md)

### Inertia constant

How many seconds a machine could supply its rated output from its rotational kinetic energy alone. Nearly every machine ever built falls in 2–10 s.

$$H = \frac{\tfrac12J\omega_m^2}{S_{\rm rated}}\ \ \text{seconds}$$

*Introduced:* [4.5](lessons/04-05-swing-equation-rotor-dynamics.md)

### Swing equation

Newton's second law for a generator rotor, written in per-unit: accelerating power divided by inertia gives angular acceleration.

$$\frac{2H}{\omega_s}\frac{d^2\delta}{dt^2} = P_m-P_e$$

*Introduced:* [4.5](lessons/04-05-swing-equation-rotor-dynamics.md)

### Synchronizing power coefficient

The slope of the power-angle curve at the operating point — the restoring "stiffness" that pulls a disturbed rotor back into step.

$$P_s = \left.\frac{dP_e}{d\delta}\right|_{\delta_0} = P_{\max}\cos\delta_0$$

*Introduced:* [4.5](lessons/04-05-swing-equation-rotor-dynamics.md)

### Equal-area criterion

A generator survives a fault only if the post-fault system can absorb at least as much energy as the fault put in — compared as two areas on the power-angle curve.

$$\int_{\delta_0}^{\delta_c}\left(P_m-P_e^{F}\right)d\delta \ \leq\ \int_{\delta_c}^{\delta_{\max}}\left(P_e^{P}-P_m\right)d\delta$$

*Introduced:* [4.6](lessons/04-06-transient-stability-equal-area.md)

### Critical clearing time

The longest a fault may persist with the machine still able to recover — the specification that protection speed must meet.

*Introduced:* [4.6](lessons/04-06-transient-stability-equal-area.md)

## Formulas and rules

### Three-phase relationships

| Connection | Voltage | Current |
|---|---|---|
| Wye (Y) | $V_\phi = V_{LL}/\sqrt3$ | $I_\phi = I_L$ |
| Delta ($\Delta$) | $V_\phi = V_{LL}$ | $I_\phi = I_L/\sqrt3$ |

$$S_{3\phi} = \sqrt3\,V_{LL}I_L = 3V_\phi I_\phi, \qquad P = \sqrt3\,V_{LL}I_L\cos\varphi, \qquad Q = \sqrt3\,V_{LL}I_L\sin\varphi$$

$$S = VI^{*} = P+jQ, \qquad \mathrm{pf} = \cos\varphi = P/S, \qquad Z_Y = Z_\Delta/3$$

In a balanced system $V_{LL}$ leads $V_\phi$ by $30°$, and the neutral carries no current.

*From* [1.1](lessons/01-01-ac-power-and-three-phase.md), [1.2](lessons/01-02-per-phase-equivalent.md)

### Per-unit bases

$$I_{base} = \frac{S_{base}}{\sqrt3\,V_{base,LL}}, \qquad Z_{base} = \frac{V_{base,LL}^2}{S_{base}}, \qquad Y_{base} = \frac{1}{Z_{base}}$$

**Base change** (the single most-used formula in the course):

$$Z_{\rm new} = Z_{\rm old}\left(\frac{V_{\rm old}}{V_{\rm new}}\right)^2\left(\frac{S_{\rm new}}{S_{\rm old}}\right)$$

Conventions: $S_{base}$ is three-phase MVA and common to the whole system; $V_{base}$ is line-to-line kV and changes only at a transformer, by its rated ratio. Choose any two bases; the other two follow.

*From* [1.3](lessons/01-03-the-per-unit-system.md), [1.4](lessons/01-04-base-changes-one-line-diagram.md)

### Transformer equivalent circuit and tests

$$R_{eq} = R_1+a^2R_2, \qquad X_{eq} = X_1+a^2X_2, \qquad a = \frac{N_1}{N_2}$$

| Test | Performed on | Yields |
|---|---|---|
| Open circuit | LV side energized, HV open | $R_c$, $X_m$ (core loss, magnetizing) |
| Short circuit | HV side energized, LV shorted | $R_{eq}$, $X_{eq}$ (copper loss, leakage) |

$$R_c = \frac{V_{OC}^2}{P_{OC}}, \qquad Z_{eq} = \frac{V_{SC}}{I_{SC}}, \qquad R_{eq} = \frac{P_{SC}}{I_{SC}^2}$$

*From* [2.1](lessons/02-01-ideal-and-real-transformer.md)

### Transformer performance

$$\mathrm{VR}\approx\frac{|I|\left(R_{eq}\cos\theta\pm X_{eq}\sin\theta\right)}{|V_L|} \quad (+\text{ lagging}, -\text{ leading})$$

$$\eta = \frac{P_{out}}{P_{out}+P_{core}+P_{cu}}, \qquad P_{cu} = x^2P_{cu,\rm rated}$$

**Maximum efficiency** occurs where copper loss equals core loss:

$$x^{*} = \sqrt{\frac{P_{core}}{P_{cu,\rm rated}}}$$

**All-day efficiency** weights by energy, not power — the right measure for a distribution transformer that is energized 24 hours and loaded a few.

In per-unit the turns ratio vanishes and a transformer is a series impedance.

*From* [2.2](lessons/02-02-transformer-performance-per-unit.md)

### Three-phase transformer connections

| Connection | $30°$ shift | Triplen path | Typical use |
|---|---|---|---|
| Y–Y | none | none — needs a delta tertiary | rare, avoided |
| Y–$\Delta$ | yes | $\Delta$ traps them | step-down from transmission |
| $\Delta$–Y | yes | $\Delta$ traps them | **the workhorse** — generator step-up |
| $\Delta$–$\Delta$ | none | both sides trap | industrial, allows open-delta |

Sign convention: with positive sequence, the **HV side leads the LV side by $30°$**; with negative sequence it lags. Banks in parallel must share the same shift.

*From* [2.3](lessons/02-03-three-phase-transformer-connections.md)

### Transmission-line parameters

$$L = 2\times10^{-7}\ln\frac{D_m}{D_s}\ \ \mathrm{H/m}, \qquad C = \frac{2\pi\varepsilon_0}{\ln(D_m/r)}\ \ \mathrm{F/m}$$

**Capacitance uses the actual radius $r$; inductance uses the GMR $D_s$.**

Bundle GMR (2, 3, 4 conductors at spacing $d$):

$$D_{sb} = \sqrt{D_sd}, \qquad \sqrt[3]{D_sd^2}, \qquad 1.091\sqrt[4]{D_sd^3}$$

$$Q_{\rm charging} = V_{LL}^2\,\omega C\ell\ \ \mathrm{(vars)}, \qquad \varepsilon_0 = 8.854\times10^{-12}\ \mathrm{F/m}$$

Typical values: $X_L\approx0.4$–$0.5\ \Omega$/km, $C\approx9$ nF/km, $Z_0/Z_1 = 2$–$3.5$.

*From* [2.4](lessons/02-04-transmission-line-parameters.md)

### Line models and ABCD parameters

| Length | Model | $A = D$ | $B$ | $C$ |
|---|---|---|---|---|
| $<80$ km | short | $1$ | $Z$ | $0$ |
| 80–250 km | nominal-$\pi$ | $1+\dfrac{ZY}{2}$ | $Z$ | $Y\left(1+\dfrac{ZY}{4}\right)$ |
| $>250$ km | long (exact) | $\cosh\gamma\ell$ | $Z_c\sinh\gamma\ell$ | $\dfrac{\sinh\gamma\ell}{Z_c}$ |

$$\mathrm{VR} = \frac{|V_S|/|A|-|V_{R,FL}|}{|V_{R,FL}|}\times100\%, \qquad P_{\max} = \frac{V_SV_R}{X}\ \text{at }\delta = 90°$$

$$P = \frac{V_SV_R}{X}\sin\delta, \qquad Q_R = \frac{V_SV_R\cos\delta-V_R^2}{X}$$

**Angle moves watts; magnitude moves vars.** Cascades multiply: $\mathbf{T} = \mathbf{T}_1\mathbf{T}_2$.

*From* [2.5](lessons/02-05-short-and-medium-line-models.md)

### Long line and surge impedance

$$\gamma = \sqrt{zy} = \alpha+j\beta, \qquad Z_c = \sqrt{z/y}, \qquad \lambda = \frac{2\pi}{\beta}\approx5000\ \mathrm{km\ at\ 60\ Hz}$$

$$\beta\approx0.072°/\mathrm{km}, \qquad \text{equivalent-}\pi: \ Z' = Z_c\sinh\gamma\ell, \ \ \frac{Y'}{2} = \frac{1}{Z_c}\tanh\frac{\gamma\ell}{2}$$

| Voltage | $Z_c$ | SIL |
|---|---|---|
| 138 kV | 400 Ω | 48 MW |
| 230 kV | 380 Ω | 139 MW |
| 345 kV | 285 Ω | 418 MW |
| 500 kV | 250 Ω | 1000 MW |
| 765 kV | 260 Ω | 2250 MW |

Lossless power limit: $P_{\max} = V_SV_R/(Z_c\sin\beta\ell)$, which exceeds the lumped $V^2/X$ by $\beta\ell/\sin\beta\ell$.

*From* [2.6](lessons/02-06-long-line-surge-impedance.md)

### Building $Y_{bus}$

$$Y_{ii} = \sum_{k\neq i}y_{ik}+y_{i0}, \qquad Y_{ij} = -y_{ij}\ (i\neq j)$$

A $\pi$-line contributes $y_{sh}/2$ to *each* diagonal (to ground, not between buses).

**Off-nominal tap $a$ on the bus-$i$ side:**

$$Y_{ii}\mathrel{+}= \frac{y}{a^2}, \qquad Y_{jj}\mathrel{+}= y, \qquad Y_{ij} = Y_{ji} = -\frac{y}{a}$$

**Row-sum check:** every row sums to that bus's shunt admittance (zero if there is none). $Z_{bus} = Y_{bus}^{-1}$ is full and is built only where its physical meaning is needed.

*From* [3.1](lessons/03-01-bus-admittance-matrix.md)

### Power-flow equations and bus types

$$S_i = V_i\sum_kY_{ik}^{*}V_k^{*}$$

$$P_i = \sum_k|V_i||V_k||Y_{ik}|\cos(\theta_{ik}-\gamma_{ik}), \qquad Q_i = \sum_k|V_i||V_k||Y_{ik}|\sin(\theta_{ik}-\gamma_{ik})$$

| Type | Specified | Unknown | Count |
|---|---|---|---|
| Slack | $\vert V\vert,\ \theta$ | $P,\ Q$ | exactly 1 |
| PV | $P,\ \vert V\vert$ | $Q,\ \theta$ | $N_{PV}$ |
| PQ | $P,\ Q$ | $\vert V\vert,\ \theta$ | the rest |

Unknowns $= (N-1)$ angles $+\ N_{PQ}$ magnitudes; equations $= (N-1)$ $P$-equations $+\ N_{PQ}$ $Q$-equations.

**Line flow after solving:** $S_{ij} = V_i\left[(V_i-V_j)y_{ij}+V_iy_{sh}/2\right]^{*}$, and $S_{ij}+S_{ji}$ is the branch loss.

*From* [3.2](lessons/03-02-power-flow-problem-bus-types.md)

### Gauss–Seidel

$$V_i^{(k+1)} = \frac{1}{Y_{ii}}\left[\frac{P_i^{\rm sch}-jQ_i^{\rm sch}}{\left(V_i^{(k)}\right)^{*}}-\sum_{m<i}Y_{im}V_m^{(k+1)}-\sum_{m>i}Y_{im}V_m^{(k)}\right]$$

PV bus, three steps: (1) $Q_i = \operatorname{Im}\{V_i(\sum_mY_{im}V_m)^{*}\}$; (2) update with $P^{\rm sch}$ and that $Q$; (3) reset $|V_i|$ to its setpoint, keeping the angle.

Var-limit switch: if $Q$ leaves $[Q_{\min},Q_{\max}]$, fix it at the limit and treat the bus as PQ. Voltage then lands **below** setpoint if $Q_{\max}$ was hit, **above** if $Q_{\min}$ was.

Convergence is **linear**; iteration count grows with system size. Acceleration ($1<\alpha<2$) pays only when the unaccelerated convergence is slow.

*From* [3.3](lessons/03-03-gauss-seidel-power-flow.md)

### Newton–Raphson

$$\begin{bmatrix}\Delta\mathbf{P}\\\Delta\mathbf{Q}\end{bmatrix} = \begin{bmatrix}\mathbf{H}&\mathbf{N}\\\mathbf{J}_{Q\theta}&\mathbf{L}\end{bmatrix}\begin{bmatrix}\Delta\boldsymbol\theta\\\Delta\mathbf{V}\end{bmatrix}$$

**Diagonal entries** (the ones you actually type — every one is an injection plus a self-admittance term):

$$H_{ii} = -Q_i-B_{ii}V_i^2, \qquad N_{ii} = \frac{P_i}{V_i}+G_{ii}V_i, \qquad J_{ii} = P_i-G_{ii}V_i^2, \qquad L_{ii} = \frac{Q_i}{V_i}-B_{ii}V_i$$

**Off-diagonal** ($i\neq k$, with $\theta_{ik} = \theta_i-\theta_k$):

$$H_{ik} = V_iV_k\left(G_{ik}\sin\theta_{ik}-B_{ik}\cos\theta_{ik}\right), \qquad N_{ik} = V_i\left(G_{ik}\cos\theta_{ik}+B_{ik}\sin\theta_{ik}\right)$$
$$J_{ik} = -V_iV_k\left(G_{ik}\cos\theta_{ik}+B_{ik}\sin\theta_{ik}\right), \qquad L_{ik} = V_i\left(G_{ik}\sin\theta_{ik}-B_{ik}\cos\theta_{ik}\right)$$

Convergence is **quadratic**, so 4–6 iterations regardless of system size. Solve by sparse LU, never by inversion. All derivatives are with respect to **radians**.

**Fast-decoupled (FDLF):** $\mathbf{B}'\Delta\boldsymbol\theta = \Delta\mathbf{P}/V$, $\mathbf{B}''\Delta\mathbf{V} = \Delta\mathbf{Q}/V$ with constant matrices factored once. **DC power flow:** $\mathbf{P} = \mathbf{B}\boldsymbol\theta$, linear, one step, no voltages.

*From* [3.4](lessons/03-04-newton-raphson-power-flow.md)

### Economic dispatch

$$C_i(P_i) = a_i+b_iP_i+c_iP_i^2, \qquad \lambda_i = b_i+2c_iP_i$$

**Equal-$\lambda$ criterion**, and its closed-form solution when no limits bind:

$$\lambda = \frac{P_D+\sum_i\dfrac{b_i}{2c_i}}{\sum_i\dfrac{1}{2c_i}}, \qquad P_i = \frac{\lambda-b_i}{2c_i}$$

**KKT conditions with limits:**

$$\frac{dC_i}{dP_i}\begin{cases}=\lambda & P_i^{\min}<P_i<P_i^{\max}\\ \leq\lambda & P_i = P_i^{\max}\ \text{(cheaper than the margin)}\\ \geq\lambda & P_i = P_i^{\min}\end{cases}$$

Algorithm: solve unconstrained, clamp violators, re-solve for the rest, verify the inequality on each clamped unit.

**With losses:** $L_i\lambda_i = \lambda$ with $L_i = 1/(1-\partial P_L/\partial P_i)$. Loss formula $P_L = \sum_i\sum_jP_iB_{ij}P_j$.

*From* [3.5](lessons/03-05-economic-dispatch.md)

### Symmetrical fault analysis

$$I_f = \frac{V_{\rm prefault}}{Z_{th}}\ \mathrm{pu}, \qquad I_{f,\mathrm{A}} = I_{f,\rm pu}\times\frac{S_{base}}{\sqrt3V_{base,LL}}, \qquad \mathrm{MVA}_{sc} = \frac{S_{base}}{Z_{th}}$$

$$Z_{bus} = Y_{bus}^{-1}, \qquad I_f^{(k)} = \frac{V_k^{(0)}}{Z_{kk}}, \qquad V_i^{\rm fault} = V_i^{(0)}-\frac{Z_{ik}}{Z_{kk}}V_k^{(0)}$$

Build $Y_{bus}$ for a fault study with **generators as shunt reactances to ground** ($1/jX_d''$), or the matrix is singular.

| Reactance | Duration | Typical | Used for |
|---|---|---|---|
| $X_d''$ | 2–3 cycles | 0.10–0.25 pu | breaker duty |
| $X_d'$ | 0.1–2 s | 0.15–0.40 pu | relaying, stability |
| $X_d$ | steady | 1.0–2.0 pu | steady-state |

**Breaker duty:** momentary (close-and-latch) $\approx1.6\,I''$ rms asymmetrical; peak $\approx2.6\,I''$; interrupting (5-cycle) $\approx1.1\,I''$. Both ratings must be checked.

$$i(t) = \sqrt2\,I''\left[\sin(\omega t-\alpha)+e^{-t/\tau}\sin\alpha\right], \qquad \tau = \frac{X}{\omega R}$$

*From* [4.1](lessons/04-01-symmetrical-faults.md)

### Symmetrical components

$$a = 1\angle120°, \qquad a^2 = 1\angle{-120°}, \qquad a^3 = 1, \qquad 1+a+a^2 = 0$$

$$\begin{bmatrix}V_0\\V_1\\V_2\end{bmatrix} = \frac13\begin{bmatrix}1&1&1\\1&a&a^2\\1&a^2&a\end{bmatrix}\begin{bmatrix}V_a\\V_b\\V_c\end{bmatrix}, \qquad \begin{bmatrix}V_a\\V_b\\V_c\end{bmatrix} = \begin{bmatrix}1&1&1\\1&a^2&a\\1&a&a^2\end{bmatrix}\begin{bmatrix}V_0\\V_1\\V_2\end{bmatrix}$$

**The $1/3$ goes with phase → sequence only.** Subscripts refer to phase $a$.

| Condition | Sequence signature |
|---|---|
| Balanced | $V_1$ only |
| Single-line-to-ground | $I_0 = I_1 = I_2 = I_a/3$ |
| Line-to-line | $I_0 = 0$, $I_2 = -I_1$ |
| Open conductor | all three present, $I_0 = I_2$, small $I_1$ change |
| Any ungrounded system | $I_0 = 0$ always |

$$I_n = 3I_0, \qquad S_{3\phi} = 3\left(V_0I_0^{*}+V_1I_1^{*}+V_2I_2^{*}\right)$$

**Zero-sequence transformer paths:** Y$_g$–Y$_g$ passes through; Y$_g$–$\Delta$ circulates in the delta; ungrounded Y or $\Delta$–$\Delta$ blocks entirely. A neutral impedance $Z_n$ appears as $3Z_n$.

*From* [4.2](lessons/04-02-symmetrical-components.md)

### Unsymmetrical faults

| Fault | Connection | Current |
|---|---|---|
| Three-phase | positive only | $I_f = \dfrac{E}{Z_1+Z_f}$ |
| Single-line-to-ground | 1, 2, 0 in **series** | $I_f = \dfrac{3E}{Z_0+Z_1+Z_2+3Z_f}$ |
| Line-to-line | 1, 2 in **parallel** | $I_f = \dfrac{\sqrt3\,E}{Z_1+Z_2+Z_f}$ |
| Double-line-to-ground | 2 ∥ 0, then in series with 1 | $I_1 = \dfrac{E}{Z_1+\dfrac{Z_2(Z_0+3Z_f)}{Z_2+Z_0+3Z_f}}$, $I_{\rm gnd} = 3I_0$ |

$$V_1 = E-I_1Z_1, \qquad V_2 = -I_2Z_2, \qquad V_0 = -I_0Z_0$$

**Which fault is worst** depends on $Z_0/Z_1$: below 1, the SLG fault exceeds the three-phase fault (typical at a generator bus); above 1, the three-phase fault is worst (typical for a remote line fault). Line-to-line is always $\sqrt3/2 = 87\%$ of three-phase when $Z_1 = Z_2$.

*From* [4.3](lessons/04-03-sequence-networks-unsymmetrical-faults.md)

### Protection

**Inverse-time overcurrent (IEC):**

$$t = \mathrm{TMS}\cdot\frac{k}{\left(I/I_s\right)^{\alpha}-1}$$

| Curve | $k$ | $\alpha$ |
|---|---|---|
| Standard inverse | 0.14 | 0.02 |
| Very inverse | 13.5 | 1 |
| Extremely inverse | 80 | 2 |

CTI $\approx0.25$–$0.40$ s; set the most remote relay first and step upward. Round the upstream TMS **up**, never down.

**Differential:** trip if $I_{\rm op}>\max(I_{\rm pickup},\ mI_{\rm rest})$, slope $m$ 25–40%, plus second-harmonic (inrush) and fifth-harmonic (overexcitation) blocking on transformers.

**Distance zones:**

| Zone | Reach | Delay |
|---|---|---|
| 1 | 80–90% of the line | instantaneous |
| 2 | 120–150% | 0.3–0.5 s |
| 3 | line + 100–120% of the longest adjacent line | 1–2 s |

$$Z_{\rm apparent} = Z_{L1}+\left(1+\frac{I_{\rm infeed}}{I_{\rm relay}}\right)Z_{L2} \qquad \text{(infeed always underreaches)}$$

$$I_{\rm sec} = \frac{I_{\rm pri}}{\mathrm{CTR}}, \qquad \mathrm{CTR} = \frac{\text{primary rating}}{5\ \mathrm{A}}$$

*From* [4.4](lessons/04-04-protection-and-relaying.md)

### Rotor dynamics

$$H_{\rm new} = H_{\rm old}\frac{S_{\rm old}}{S_{\rm new}}, \qquad M = \frac{2H}{\omega_s}, \qquad \omega_s = 2\pi f = 377\ \mathrm{rad/s\ at\ 60\ Hz}$$

$$M\ddot\delta = P_m-P_e, \qquad \ddot\delta = \frac{\omega_sP_a}{2H}, \qquad \delta_{\rm elec} = \frac{p}{2}\delta_{\rm mech}$$

$$P_e = \frac{E'V}{X}\sin\delta, \qquad \delta_0 = \arcsin\frac{P_m}{P_{\max}}, \qquad P_s = P_{\max}\cos\delta_0, \qquad \omega_n = \sqrt{\frac{P_s}{M}}$$

Typical $H$: 3–7 s (2-pole steam), 2–4 s (4-pole steam, hydro), 4–10 s (combustion turbine). Inverter-based generation contributes none.

*From* [4.5](lessons/04-05-swing-equation-rotor-dynamics.md)

### Transient stability

$$\delta_{\max} = \pi-\arcsin\frac{P_m}{P_{\max}^{P}}$$

$$\cos\delta_{cr} = \frac{P_m\left(\delta_{\max}-\delta_0\right)+P_{\max}^{P}\cos\delta_{\max}-P_{\max}^{F}\cos\delta_0}{P_{\max}^{P}-P_{\max}^{F}}$$

A result outside $[-1,1]$ means **stable for any clearing time**.

**Critical clearing time**, valid only when $P_{\max}^{F} = 0$ (constant acceleration):

$$t_{cr} = \sqrt{\frac{4H\left(\delta_{cr}-\delta_0\right)}{\omega_sP_m}} = \sqrt{\frac{2H\left(\delta_{cr}-\delta_0\right)}{\pi f\,P_m}} \qquad (\delta\text{ in radians})$$

Otherwise integrate the swing equation from $\delta_0$ to $\delta_{cr}$. Scaling: $t_{cr}\propto\sqrt H$, while $\delta_{cr}$ does not depend on $H$ at all.

Remedies, in order of cost-effectiveness: faster clearing (attacks the area quadratically), fast excitation with a power system stabilizer, series compensation, reduced loading.

*From* [4.6](lessons/04-06-transient-stability-equal-area.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Phasor representation of sinusoids; $V = V_m\angle\theta$ | [`circuits` 4.1](../circuits/lessons/04-01-sinusoids-and-phasors.md) |
| Impedance of R, L, C and phasor circuit analysis | [`circuits` 4.2](../circuits/lessons/04-02-impedance-phasor-analysis.md) |
| Single-phase AC power: $P$, $Q$, $S = VI^*$, power factor, correction | [`circuits` 4.3](../circuits/lessons/04-03-ac-power-power-factor.md) |
| Nodal analysis, KCL and KVL | [`circuits` 2.1](../circuits/lessons/02-01-nodal-analysis.md) |
| Thevenin and Norton equivalents | [`circuits` 2.4](../circuits/lessons/02-04-thevenin-norton-max-power.md) |
| First-order $RL$ transients and the $L/R$ time constant (the fault DC offset) | [`circuits` 3.2](../circuits/lessons/03-02-first-order-rc-rl-transients.md) |
| Complex arithmetic: $1/(R+jX) = (R-jX)/(R^2+X^2)$, polar–rectangular conversion | [`calc-refresher`](../calc-refresher/syllabus.md), [`complex-analysis`](../complex-analysis/syllabus.md) |
| Matrix inversion, LU factorization, sparsity | [`linalg-refresher`](../linalg-refresher/syllabus.md), [`numerical-analysis`](../numerical-analysis/syllabus.md) |
| Newton's method for nonlinear systems, and its quadratic convergence | [`numerical-analysis`](../numerical-analysis/syllabus.md) |
| Gauss–Seidel iteration and successive over-relaxation | [`numerical-analysis`](../numerical-analysis/syllabus.md) |
| Lagrange multipliers and KKT conditions | [`convex-optimization`](../convex-optimization/syllabus.md) |
| Mixed-integer programming (what unit commitment is solved as) | [`operations-research`](../operations-research/syllabus.md) |
| Faraday's law and magnetic circuits (transformer operation) | [`em-refresher`](../em-refresher/syllabus.md) |
| Capacitance and inductance from conductor geometry | [`em-refresher`](../em-refresher/syllabus.md) |
| Hyperbolic functions and their series expansions | [`calc-refresher`](../calc-refresher/syllabus.md) |
| The wave equation and travelling-wave solutions | [`pdes`](../pdes/syllabus.md) |
| Newton's second law for rotation, $J\ddot\theta = T$ | [`mechanics-refresher`](../mechanics-refresher/syllabus.md) |
| Simple harmonic motion and the linearized pendulum | [`mechanics-refresher`](../mechanics-refresher/syllabus.md), [`analytical-mechanics` 1.4](../analytical-mechanics/lessons/01-04-lagrangian-applications.md) |

## Pitfalls

### Per-unit and bases

- You might mix line-to-line and line-to-neutral voltages. $S_{base}$ is three-phase MVA and $V_{base}$ is line-to-line kV; the $\sqrt3$ in $I_{base}$ is already accounted for.
  *([1.3](lessons/01-03-the-per-unit-system.md))*
- You might forget to convert an element to the common base. Generator and transformer impedances arrive on their own ratings; convert everything first, then add.
  *([1.4](lessons/01-04-base-changes-one-line-diagram.md), [4.1](lessons/04-01-symmetrical-faults.md))*
- You might use the wrong $I_{base}$ when converting a per-unit current to amperes. It depends on the voltage level *at the point of interest*.
  *([4.1](lessons/04-01-symmetrical-faults.md))*
- A per-unit value far from 1.0 is usually a wrong base, not a wrong system.
  *([1.3](lessons/01-03-the-per-unit-system.md))*

### Three-phase and connections

- You might apply per-phase analysis to an unbalanced system. It requires balance; unbalance needs symmetrical components.
  *([1.2](lessons/01-02-per-phase-equivalent.md), [4.2](lessons/04-02-symmetrical-components.md))*
- You might forget $Z_Y = Z_\Delta/3$ before reducing a delta load to a per-phase equivalent.
  *([1.2](lessons/01-02-per-phase-equivalent.md))*
- You might get the sign of the $30°$ transformer shift backwards. HV leads LV for positive sequence, lags for negative.
  *([2.3](lessons/02-03-three-phase-transformer-connections.md), [4.2](lessons/04-02-symmetrical-components.md))*

### Transformers and lines

- You might use $a$ where $a^2$ is needed. Impedances refer as $a^2Z$; the tap side of an off-nominal transformer gets $y/a^2$ and the coupling gets $y/a$.
  *([2.1](lessons/02-01-ideal-and-real-transformer.md), [3.1](lessons/03-01-bus-admittance-matrix.md))*
- You might use the GMR for capacitance. Capacitance uses the **actual** radius $r$; only inductance uses $D_s$.
  *([2.4](lessons/02-04-transmission-line-parameters.md))*
- You might use the short-line model past 80 km, or the lumped model past 250 km. The error grows as $(\gamma\ell)^2$ and reaches 2.3% in $B$ at 300 km.
  *([2.5](lessons/02-05-short-and-medium-line-models.md), [2.6](lessons/02-06-long-line-surge-impedance.md))*
- You might compute regulation without dividing by $|A|$. The no-load receiving voltage is $V_S/A$, and $A$ can be 0.9 on a long line.
  *([2.5](lessons/02-05-short-and-medium-line-models.md))*
- You might expect $|A|>1$. For a line $|A| = |\cosh\gamma\ell|<1$, which is exactly what produces the Ferranti rise.
  *([2.6](lessons/02-06-long-line-surge-impedance.md))*
- You might size a shunt reactor at 100% of the line charging. That over-compensates and depresses the far end; 50–80%, split between the ends and switched, is typical.
  *([2.6](lessons/02-06-long-line-surge-impedance.md))*
- You might assume a line's $Z_0$ equals its $Z_1$. It is 2–3.5 times larger, and the error propagates straight into ground-fault current.
  *([4.2](lessons/04-02-symmetrical-components.md), [4.3](lessons/04-03-sequence-networks-unsymmetrical-faults.md))*

### Network matrices and power flow

- You might drop the minus sign on $Y_{bus}$ off-diagonals, or invert impedance element-by-element instead of as complex division.
  *([3.1](lessons/03-01-bus-admittance-matrix.md))*
- You might put line charging between buses. It goes to ground, so it affects only the diagonals — and halve a *total* charging value, not an already-halved one.
  *([3.1](lessons/03-01-bus-admittance-matrix.md))*
- You might specify more than one slack bus, or none. Exactly one, always.
  *([3.2](lessons/03-02-power-flow-problem-bus-types.md))*
- You might give loads positive signs. A 50 MW load is $P = -0.5$ pu on a 100 MVA base.
  *([3.2](lessons/03-02-power-flow-problem-bus-types.md))*
- You might drop the conjugate in $S_i = V_i(\sum Y_{ik}V_k)^{*}$, or use $P+jQ$ instead of $P-jQ$ in the Gauss–Seidel numerator. Either converges confidently to a wrong answer.
  *([3.2](lessons/03-02-power-flow-problem-bus-types.md), [3.3](lessons/03-03-gauss-seidel-power-flow.md))*
- You might expect $S_{ij} = -S_{ji}$. The difference is the branch loss — that is how you compute it.
  *([3.2](lessons/03-02-power-flow-problem-bus-types.md))*
- You might trust a small $|\Delta V|$ instead of checking the power mismatch. Near a flat region the voltages barely move while the powers are still well off.
  *([3.3](lessons/03-03-gauss-seidel-power-flow.md))*
- You might work in degrees in the Jacobian, or invert it instead of factoring. Both destroy the method.
  *([3.4](lessons/03-04-newton-raphson-power-flow.md))*
- You might read a power-flow divergence as a bug. Near the loading limit the Jacobian is singular because there genuinely is no solution.
  *([3.3](lessons/03-03-gauss-seidel-power-flow.md), [3.4](lessons/03-04-newton-raphson-power-flow.md))*

### Dispatch

- You might equalize average cost $C/P$ instead of incremental cost $dC/dP$.
  *([3.5](lessons/03-05-economic-dispatch.md))*
- You might clamp a unit at its limit and forget to re-solve for $\lambda$ across the remaining free units — or forget to verify the KKT inequality on the clamped one.
  *([3.5](lessons/03-05-economic-dispatch.md))*
- You might treat unit commitment as dispatch repeated hourly. Start-up costs and minimum run times couple the hours; a locally optimal hour can be globally expensive.
  *([3.5](lessons/03-05-economic-dispatch.md))*

### Faults and sequences

- You might use $X_d$ for breaker duty. Breakers act in cycles, so use $X_d''$ — the difference can be a factor of eight.
  *([4.1](lessons/04-01-symmetrical-faults.md))*
- You might check only the interrupting rating. The momentary duty is the larger number and can destroy a breaker that would have interrupted fine.
  *([4.1](lessons/04-01-symmetrical-faults.md))*
- You might reduce a meshed network by inspection. Ignoring a remote generator can understate the fault duty by 50%; use $Z_{bus}$.
  *([4.1](lessons/04-01-symmetrical-faults.md))*
- You might assume the three-phase fault is always worst. When $Z_0<Z_1$ the single-line-to-ground fault exceeds it, and an LLG fault's ground current can be twice the three-phase current.
  *([4.1](lessons/04-01-symmetrical-faults.md), [4.3](lessons/04-03-sequence-networks-unsymmetrical-faults.md))*
- You might swap $a$ and $a^2$ between $V_1$ and $V_2$. $V_1$ uses $(1,a,a^2)$; $V_2$ uses $(1,a^2,a)$.
  *([4.2](lessons/04-02-symmetrical-components.md))*
- You might expect zero-sequence current on an ungrounded system. No return path means $I_0 = 0$, always.
  *([4.2](lessons/04-02-symmetrical-components.md))*
- You might forget the factors of 3: $I_n = 3I_0$, a neutral impedance appears as $3Z_n$, and an SLG or LLG fault impedance appears as $3Z_f$ (but plain $Z_f$ for line-to-line).
  *([4.2](lessons/04-02-symmetrical-components.md), [4.3](lessons/04-03-sequence-networks-unsymmetrical-faults.md))*
- You might report $I_1$ as the fault current. SLG gives $3I_1$; LL gives $\sqrt3I_1$; only the three-phase fault gives $I_1$.
  *([4.3](lessons/04-03-sequence-networks-unsymmetrical-faults.md))*
- You might draw the zero-sequence network with the positive-sequence topology. It is often different — deltas and ungrounded neutrals block it entirely.
  *([4.3](lessons/04-03-sequence-networks-unsymmetrical-faults.md))*

### Protection

- You might set relay values in primary amperes. Settings are secondary; divide by the CTR.
  *([4.4](lessons/04-04-protection-and-relaying.md))*
- You might coordinate at one fault current only. The margin must hold across the whole range, and the curves converge at high current where the margin is smallest.
  *([4.4](lessons/04-04-protection-and-relaying.md))*
- You might set Zone 1 to 100% of the line. Reach errors of 10–20% would cause overreach and non-selective tripping.
  *([4.4](lessons/04-04-protection-and-relaying.md))*
- You might extend Zone 2 to overcome infeed. It then overreaches badly when the infeed source is out of service.
  *([4.4](lessons/04-04-protection-and-relaying.md))*
- You might autoreclose on a cable or transformer fault. Those are never transient.
  *([4.4](lessons/04-04-protection-and-relaying.md))*

### Stability

- You might mix electrical and mechanical angles, or work in degrees. The swing equation is in electrical radians, with $\omega_s = 377$ rad/s at 60 Hz.
  *([4.5](lessons/04-05-swing-equation-rotor-dynamics.md), [4.6](lessons/04-06-transient-stability-equal-area.md))*
- You might use $X_d$ instead of $X_d'$ with $E'$ held constant. Transient stability plays out over the transient period.
  *([4.5](lessons/04-05-swing-equation-rotor-dynamics.md))*
- You might assume $P_e = 0$ during any fault. Only for a terminal fault or one with no parallel path.
  *([4.5](lessons/04-05-swing-equation-rotor-dynamics.md))*
- You might use the same $P_{\max}$ for the prefault, fault-on and post-fault conditions. They are three different curves, and $\delta_{\max}$ is computed on the post-fault one.
  *([4.6](lessons/04-06-transient-stability-equal-area.md))*
- You might apply the simple $t_{cr}$ formula when $P_{\max}^{F}\neq0$, or copy it with $\omega_s$ where a source wrote $\pi f$. Check it against the swing equation directly.
  *([4.6](lessons/04-06-transient-stability-equal-area.md))*
- You might read $\cos\delta_{cr}$ outside $[-1,1]$ as an error. It means unconditionally stable.
  *([4.6](lessons/04-06-transient-stability-equal-area.md))*
- You might apply the equal-area criterion to a multi-machine system. It is a single-machine result; anything larger needs numerical integration.
  *([4.6](lessons/04-06-transient-stability-equal-area.md))*

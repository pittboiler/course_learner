# Power Systems · Lesson 3.3: Gauss–Seidel power flow

> ⏱ ~15 min · Module 3: Power flow and economic dispatch · Builds on: [3.2 The power-flow problem and bus types](03-02-power-flow-problem-bus-types.md) · Unlocks: [3.4 Newton–Raphson power flow](03-04-newton-raphson-power-flow.md)

## Why this matters

The power-flow equations are nonlinear, so they must be solved iteratively. Gauss–Seidel is the simplest method that works — its update rule and its [acceleration factor](../reference.md#acceleration-factor) are on the card — and it was how the first digital power flows were solved in the 1950s.

It is worth learning for three reasons even though production software uses Newton–Raphson. It is the only method you can genuinely run by hand, which makes the structure of the problem visible. Its failure modes — slow convergence, sensitivity to the starting point, divergence near the loading limit — are the same failure modes every method has, just more obvious. And it is still used to *start* a Newton–Raphson solve on a difficult case, because it is robust far from the solution where Newton is not.

## The idea

Rearrange the injection equation to solve for one voltage. From

$$S_i = V_i\left(\sum_kY_{ik}V_k\right)^{*} \quad\Longrightarrow\quad \frac{S_i^{*}}{V_i^{*}} = \sum_kY_{ik}V_k = Y_{ii}V_i+\sum_{k\neq i}Y_{ik}V_k,$$

so

$$V_i = \frac{1}{Y_{ii}}\left[\frac{S_i^{*}}{V_i^{*}}-\sum_{k\neq i}Y_{ik}V_k\right].$$

$V_i$ still appears on the right, so this is not a solution — it is a **fixed-point iteration**. Guess all the voltages, use the formula to compute a better $V_1$, then a better $V_2$, and so on; sweep repeatedly until nothing changes.

The "Seidel" part is the one refinement that matters: **use each new value immediately**. When updating $V_3$, use the $V_1$ and $V_2$ you just computed this sweep, not last sweep's. That roughly halves the number of iterations for free, and it is why the method is Gauss–*Seidel* rather than plain Gauss (Jacobi).

The starting point is conventionally a **flat start**: every unknown voltage set to $1.0\angle0°$, or to the slack's magnitude. That is a good guess because a healthy power system really does sit near 1.0 pu with small angles — the per-unit system of [1.3](01-03-the-per-unit-system.md) was designed to make that true.

## The formal version

**PQ bus update.**

$$\boxed{\;V_i^{(k+1)} = \frac{1}{Y_{ii}}\left[\frac{P_i^{\rm sch}-jQ_i^{\rm sch}}{\left(V_i^{(k)}\right)^{*}}-\sum_{m<i}Y_{im}V_m^{(k+1)}-\sum_{m>i}Y_{im}V_m^{(k)}\right].\;}$$

*In words: divide the scheduled power by the old voltage's conjugate, subtract what the neighbours contribute (newest values where available), and divide by the self-admittance.*

Note $S^{*} = P-jQ$ — the minus sign on $Q$ is not optional, and it is the most common error in the whole method.

**PV bus update.** A PV bus has $Q$ unknown, so it takes an extra step:

1. **Estimate $Q$** from the current voltages:
$$Q_i^{(k)} = \operatorname{Im}\left\{V_i^{(k)}\left(\sum_mY_{im}V_m\right)^{*}\right\}.$$

2. **Update the voltage** with the ordinary formula, using $P_i^{\rm sch}$ and this $Q_i^{(k)}$.

3. **Reset the magnitude**, keeping only the angle:
$$V_i^{(k+1)} = \left|V_i^{\rm sch}\right|\frac{V_i^{\rm calc}}{\left|V_i^{\rm calc}\right|}.$$

*In words: the update tells you which way the angle should move; the magnitude is whatever you specified, so overwrite it.*

**Reactive limit check.** After step 1, test $Q_i^{(k)}$ against the machine's limits:

$$\text{if } Q_i^{(k)}>Q_{\max}: \ \text{set } Q_i = Q_{\max}\ \text{and treat the bus as PQ},$$
$$\text{if } Q_i^{(k)}<Q_{\min}: \ \text{set } Q_i = Q_{\min}\ \text{and treat the bus as PQ}.$$

The voltage then floats away from the setpoint — **below** it if $Q_{\max}$ was hit, **above** it if $Q_{\min}$ was hit.

**Acceleration.** Convergence can be sped up by over-relaxing:

$$\boxed{\;V_i^{(k+1)} = V_i^{(k)}+\alpha\left(V_i^{\rm calc}-V_i^{(k)}\right), \qquad 1<\alpha<2.\;}$$

*In words: take a step larger than the one the formula suggests, betting that the trend continues.* The textbook value is $\alpha\approx1.6$, but the optimum is **problem-dependent** — Example 1 and P2 show a case where acceleration actively hurts, and P3 shows one where it gives a 6× speedup. The rule of thumb: acceleration pays when the unaccelerated convergence is slow, and costs when it is already fast.

**Convergence test.** Either the largest voltage change,

$$\max_i\left|V_i^{(k+1)}-V_i^{(k)}\right| < \varepsilon,$$

or, better, the largest power mismatch $\max(|\Delta P_i|,|\Delta Q_i|)<\varepsilon$, with $\varepsilon$ typically $10^{-4}$ pu. The mismatch test is the honest one, because a small voltage step does not guarantee a small power error near a flat region.

**Convergence behaviour.** Gauss–Seidel converges **linearly**: the error shrinks by a roughly constant factor each sweep, so the number of iterations to a fixed tolerance grows **proportionally to the number of buses**. That is the method's fatal flaw. A 10-bus case converges in a dozen sweeps; a 1000-bus case needs hundreds; a 10,000-bus case is hopeless. [3.4](03-04-newton-raphson-power-flow.md) exists to fix exactly this.

**After convergence.** Compute the slack injection $S_1 = V_1(\sum_kY_{1k}V_k)^{*}$, each PV bus's actual $Q$, all line flows by $S_{ij} = V_i[(V_i-V_j)y_{ij}+V_iy_{sh}/2]^{*}$, and the losses as the sum of injections.

## Picture

![A two-panel figure. Left: a flowchart of the Gauss-Seidel algorithm — flat start, then a loop that for each non-slack bus branches on bus type, with the PQ branch doing a single voltage update and the PV branch doing compute Q, check limits, update voltage, reset magnitude, then converging on a mismatch test that either loops back or exits to compute slack power and line flows. Right: a semi-log convergence plot of maximum voltage change against iteration number, showing a straight declining line labelled Gauss-Seidel linear convergence next to a much steeper curving line labelled Newton-Raphson quadratic, with a horizontal dashed tolerance line at ten to the minus four crossed after five iterations by one and after two by the other.](assets/03-03-fig1.svg)

Left: the algorithm. The only complication is the PV branch, and even that is three extra lines.

Right: the reason Gauss–Seidel lost. On a semi-log plot linear convergence is a straight line — each sweep buys a fixed number of decimal places. Quadratic convergence curves downward, *doubling* the correct digits each step. For a small tolerance and a large system the gap is enormous.

## Worked examples

**Example 1 (a two-bus system, by hand, to convergence).** Bus 1 is the slack at $1.0\angle0°$; bus 2 is a PQ bus drawing $0.8+j0.6$ pu. The line has $z = 0.02+j0.08$ pu, no charging. Solve by Gauss–Seidel from a flat start.

*Build $Y_{bus}$.*

$$y = \frac{1}{0.02+j0.08} = \frac{0.02-j0.08}{0.0068} = 2.9412-j11.7647,$$
$$Y_{11} = Y_{22} = 2.9412-j11.7647, \qquad Y_{12} = Y_{21} = -2.9412+j11.7647.$$

*The update formula.* Bus 2 is PQ with $S_2^{\rm sch} = -0.8-j0.6$ (a load is a negative injection), so $S_2^{*} = -0.8+j0.6$:

$$V_2^{(k+1)} = \frac{1}{Y_{22}}\left[\frac{-0.8+j0.6}{\left(V_2^{(k)}\right)^{*}}-Y_{21}V_1\right].$$

*Iteration 1*, from $V_2^{(0)} = 1.0\angle0°$:

$$\frac{-0.8+j0.6}{1.0} = -0.8+j0.6, \qquad -Y_{21}V_1 = 2.9412-j11.7647.$$

$$\text{bracket} = 2.1412-j11.1647.$$

$$V_2^{(1)} = \frac{2.1412-j11.1647}{2.9412-j11.7647}.$$

Multiply numerator and denominator by the conjugate of the denominator ($|Y_{22}|^2 = 2.9412^2+11.7647^2 = 147.058$):

$$= \frac{(2.1412-j11.1647)(2.9412+j11.7647)}{147.058} = \frac{6.2977+j25.1899-j32.8377+131.3495}{147.058}$$
$$= \frac{137.6472-j7.6478}{147.058} = 0.9360-j0.0520 = 0.9374\angle{-3.180°}.$$

*Subsequent iterations.*

| $k$ | $V_2^{(k)}$ | $\vert V_2\vert$ | $\theta_2$ | $\vert\Delta V\vert$ |
|---|---|---|---|---|
| 0 | $1.000000+j0$ | 1.00000 | $0°$ | — |
| 1 | $0.936000-j0.052000$ | 0.937443 | $-3.180°$ | $8.25\times10^{-2}$ |
| 2 | $0.928757-j0.051598$ | 0.930190 | $-3.180°$ | $7.25\times10^{-3}$ |
| 3 | $0.928202-j0.052000$ | 0.929657 | $-3.207°$ | $6.86\times10^{-4}$ |
| 4 | $0.928137-j0.051996$ | 0.929592 | $-3.207°$ | $6.54\times10^{-5}$ |
| 5 | $0.928131-j0.052000$ | 0.929587 | $-3.207°$ | $6.24\times10^{-6}$ |

**Converged** at iteration 5 with $\varepsilon = 10^{-5}$: $V_2 = 0.9296\angle{-3.21°}$ pu.

*Note the error ratio.* Each $|\Delta V|$ is almost exactly $0.0955$ times the previous — a constant factor. **That is linear convergence made visible**, and it means each sweep buys about one decimal digit.

*Slack power and losses.*

$$I_1 = Y_{11}V_1+Y_{12}V_2 = (2.9412-j11.7647)(1.0)+(-2.9412+j11.7647)(0.928131-j0.052000).$$

Second term: $-2.7298+j0.1530+j10.9198+0.6118 = -2.1180+j11.0728$.

$$I_1 = 0.8232-j0.6919, \qquad S_1 = (1.0)(0.8232+j0.6919) = 0.8231+j0.6926\ \mathrm{pu}.$$

$$P_{\rm loss} = 0.8231-0.8 = 0.0231\ \mathrm{pu}, \qquad Q_{\rm loss} = 0.6926-0.6 = 0.0926\ \mathrm{pu}.$$

*Check:* $|I| = |{-}(0.8232-j0.6919)| = 1.0754$, so $P_{\rm loss} = |I|^2R = (1.0754)^2(0.02) = 0.0231$ ✓ and $Q_{\rm loss} = (1.0754)^2(0.08) = 0.0925$ ✓.

**Example 2 (a three-bus system with a PV bus, and a reactive limit).** Use the $Y_{bus}$ of [3.1](03-01-bus-admittance-matrix.md):

$$\mathbf{Y}_{bus} = \begin{bmatrix}6.25-j18.695 & -5+j15 & -1.25+j3.75\\ -5+j15 & 6.6667-j19.95 & -1.6667+j5\\ -1.25+j3.75 & -1.6667+j5 & 2.9167-j8.705\end{bmatrix}.$$

Bus 1 is the slack at $1.05\angle0°$; bus 2 is PQ drawing $0.6+j0.3$; bus 3 is PV generating $P_3 = 0.3$ pu and holding $|V_3| = 1.02$. Solve, then impose $Q_3\in[-0.20,+0.60]$ pu.

*Iteration 1.* Bus 2 (PQ), with $S_2^{*} = -0.6+j0.3$:

$$V_2^{(1)} = \frac{1}{6.6667-j19.95}\left[\frac{-0.6+j0.3}{1.0}-(-5+j15)(1.05)-(-1.6667+j5)(1.02)\right]$$
$$= 1.022283-j0.023319 = 1.02255\angle{-1.307°}.$$

Bus 3 (PV). First estimate $Q_3$ using the *new* $V_2$:

$$I_3 = Y_{31}V_1+Y_{32}V_2^{(1)}+Y_{33}V_3^{(0)}, \qquad Q_3^{(1)} = \operatorname{Im}\left\{V_3^{(0)}I_3^{*}\right\} = -0.21285\ \mathrm{pu}.$$

**Negative** — this generator must *absorb* vars, not supply them. Then update with $S_3^{*} = 0.3+j0.21285$:

$$V_3^{\rm calc} = \frac{1}{2.9167-j8.705}\left[\frac{0.3+j0.21285}{1.02}-(-1.25+j3.75)(1.05)-(-1.6667+j5)V_2^{(1)}\right] = 1.02782\angle1.260°.$$

Reset the magnitude to 1.02, keep the angle:

$$V_3^{(1)} = 1.02\angle1.260° = 1.019753+j0.022429.$$

*Continuing.*

| $k$ | $\vert V_2\vert\angle\theta_2$ | $Q_3$ | $\vert V_3^{\rm calc}\vert$ | $\theta_3$ |
|---|---|---|---|---|
| 1 | $1.02255\angle{-1.307°}$ | $-0.2129$ | 1.02782 | $1.260°$ |
| 2 | $1.02236\angle{-0.936°}$ | $-0.2648$ | 1.02180 | $1.559°$ |
| 3 | $1.02245\angle{-0.869°}$ | $-0.2779$ | 1.02035 | $1.617°$ |
| 4 | $1.02246\angle{-0.856°}$ | $-0.2805$ | 1.02007 | $1.628°$ |
| 5 | $1.02247\angle{-0.854°}$ | $-0.2809$ | 1.02001 | $1.630°$ |
| 6 | $1.02247\angle{-0.853°}$ | $-0.2810$ | 1.02000 | $1.631°$ |

**Converged:** $V_2 = 1.02247\angle{-0.853°}$, $V_3 = 1.02\angle1.631°$, $Q_3 = -0.281$ pu.

*Two checks.* The uncorrected $|V_3^{\rm calc}|$ converges to **1.02000** — exactly the setpoint. That is the signature of a correct PV implementation: at the solution the magnitude reset does nothing, because the update already lands on the right magnitude. If it converges to something else, the $Q$ estimate is wrong.

And the injections at the converged voltages come out as $S_1 = 0.3105+j0.4527$, $S_2 = -0.6000-j0.3000$, $S_3 = 0.3000-j0.2811$ — bus 2 and bus 3 match their schedules to five decimals ✓, and $P_{\rm loss} = 0.3105-0.6+0.3 = 0.0105$ pu, about 1.7% of generation.

*Now impose the reactive limit* $Q_3\geq-0.20$ pu. The solution needs $Q_3 = -0.281$, which violates it. So bus 3 **switches to PQ** at $Q_3 = -0.20$, and $|V_3|$ becomes free:

| $k$ | $\vert V_2\vert\angle\theta_2$ | $V_3$ | $\vert V_3\vert\angle\theta_3$ |
|---|---|---|---|
| 1 | $1.02255\angle{-1.307°}$ | $1.028874+j0.022165$ | $1.02911\angle1.234°$ |
| 2 | $1.02465\angle{-0.937°}$ | $1.029457+j0.025375$ | $1.02977\angle1.412°$ |
| 3 | $1.02497\angle{-0.898°}$ | $1.029542+j0.025722$ | $1.02986\angle1.431°$ |
| 4 | $1.02501\angle{-0.893°}$ | $1.029556+j0.025759$ | $1.02988\angle1.433°$ |

**$|V_3|$ settles at 1.0299** — *above* the 1.02 setpoint, not below.

*Why above, and why it matters.* The usual textbook case is a generator hitting $Q_{\max}$: it cannot supply enough vars, and its voltage sags below setpoint. Here the generator hits $Q_{\min}$ — it cannot *absorb* enough — and the voltage floats **up**.

That is the real situation on a lightly loaded system at night. The transmission lines' charging capacitance ([2.6](02-06-long-line-surge-impedance.md)) pumps vars into the network, the generators underexcite to soak them up, and when they run out of absorbing capacity the voltage rises. Operators respond by switching in shunt reactors or taking lines out of service — the light-load overvoltage problem, which is every bit as real as the heavy-load undervoltage one and rather less intuitive.

## Watch out

- **You might use $S$ instead of $S^{*}$.** The numerator is $P-jQ$. Using $P+jQ$ converges to a confidently wrong answer.
- **You might use old values within a sweep.** Always use the newest available $V_m$ — that is the "Seidel" in the name, and it is worth about a factor of two.
- **You might get the sign of $Q$ backwards on a PV bus.** $Q_i = \operatorname{Im}\{V_iI_i^{*}\}$, with $I_i = \sum_kY_{ik}V_k$. A sign error here converges smoothly to a solution whose $P$ at the PV bus is *not* the scheduled value — which is why checking the converged injections against the schedule is essential.
- **You might forget to reset the PV magnitude.** Without it the bus behaves as PQ with a drifting $Q$.
- **You might apply acceleration to a PV bus's magnitude.** Accelerate the angle only; the magnitude is specified.
- **You might trust a small $|\Delta V|$.** Check the *power* mismatch. Near a flat region the voltages can barely move while the powers are still well off.
- **You might blame the method for a divergence that is physical.** If the load exceeds what the network can deliver, there is no solution to find. Divergence at high loading is information, not a bug — it is the nose of the P–V curve.

## One-liner

> Rearrange $S_i = V_iI_i^*$ into $V_i = (S_i^*/V_i^*-\sum_{k\neq i}Y_{ik}V_k)/Y_{ii}$, sweep bus by bus using the newest values, reset the magnitude at PV buses and check their var limits — simple, robust, and linearly convergent, which is why it lost to Newton.

## Problems

**P1 (🟢)** A two-bus system: bus 1 is the slack at $1.02\angle0°$, bus 2 is PQ drawing $0.5+j0.2$ pu, and the line has $z = 0.03+j0.10$ pu. (a) Find $Y_{bus}$. (b) Perform two Gauss–Seidel iterations from a flat start at 1.02. (c) The converged answer is $V_2 = 0.98348\angle{-2.514°}$; find the slack injection and the losses.

**P2 (🟡)** For the system of Example 1, repeat the first three iterations with acceleration factors $\alpha = 1.0$, $1.4$ and $1.6$. (a) Tabulate $V_2$ at each step. (b) Comment on which converges fastest. (c) Explain why acceleration does not help here, and state the condition under which it does.

**P3 (🔴)** Consider a radial feeder: a slack bus at $1.0\angle0°$ followed by a chain of $N-1$ load buses, each drawing $0.08+j0.04$ pu, with every link having $z = 0.01+j0.04$ pu. Unaccelerated Gauss–Seidel takes 185 sweeps to reach $10^{-6}$ for $N = 8$ and 419 sweeps for $N = 12$. With acceleration the counts are:

| $\alpha$ | $N=8$ | $N=12$ |
|---|---|---|
| 1.0 | 185 | 419 |
| 1.2 | 128 | 293 |
| 1.4 | 84 | 196 |
| 1.6 | 45 | 117 |
| 1.7 | 30 | 79 |
| 1.8 | 49 | 46 |
| 1.9 | 97 | 98 |

(a) Describe how the iteration count scales with $N$, and explain why. (b) Describe how it varies with $\alpha$, and identify the optimum for each case. (c) Contrast with Example 1's two-bus system, where acceleration made things worse — what distinguishes the two situations? (d) Extrapolate to a 3000-bus system and state what this implies about using Gauss–Seidel in production.

<details>
<summary>Solutions</summary>

**P1** (a) $$y = \frac{1}{0.03+j0.10} = \frac{0.03-j0.10}{(0.03)^2+(0.10)^2} = \frac{0.03-j0.10}{0.0109} = 2.75229-j9.17431.$$

$$Y_{11} = Y_{22} = 2.75229-j9.17431, \qquad Y_{12} = Y_{21} = -2.75229+j9.17431.$$

(b) $S_2^{\rm sch} = -0.5-j0.2$, so $S_2^{*} = -0.5+j0.2$.

*Iteration 1*, from $V_2^{(0)} = 1.02$:

$$\frac{-0.5+j0.2}{1.02} = -0.49020+j0.19608,$$
$$-Y_{21}V_1 = (2.75229-j9.17431)(1.02) = 2.80734-j9.35780,$$
$$\text{bracket} = 2.31714-j9.16172.$$

$$V_2^{(1)} = \frac{2.31714-j9.16172}{2.75229-j9.17431} = 0.985686-j0.043137 = 0.98663\angle{-2.506°}.$$

*Iteration 2*, with $\left(V_2^{(1)}\right)^{*} = 0.985686+j0.043137$:

$$\frac{-0.5+j0.2}{0.985686+j0.043137} = -0.49535+j0.22459,$$
$$\text{bracket} = 2.31199-j9.13321,$$
$$V_2^{(2)} = 0.982610-j0.043003 = 0.98355\angle{-2.506°}.$$

Already within $10^{-3}$ of the converged value.

(c) $$I_1 = Y_{11}V_1+Y_{12}V_2 = (2.75229-j9.17431)(1.02)+(-2.75229+j9.17431)(0.982482-j0.043137).$$

Second term: $-2.70409+j0.11873+j9.01360+0.39574 = -2.30835+j9.13233$.

$$I_1 = (2.80734-2.30835)+j(-9.35780+9.13233) = 0.49899-j0.22547,$$
$$S_1 = (1.02)(0.49899+j0.22547) = 0.50897+j0.23000\ \mathrm{pu}.$$

$$P_{\rm loss} = 0.50897-0.5 = 0.0090\ \mathrm{pu}, \qquad Q_{\rm loss} = 0.23000-0.2 = 0.0300\ \mathrm{pu}.$$

*Check:* $|I| = \sqrt{0.49899^2+0.22547^2} = 0.54756$, so $|I|^2R = (0.54756)^2(0.03) = 0.0090$ ✓ and $|I|^2X = (0.54756)^2(0.10) = 0.0300$ ✓.

**P2** (a)

| $k$ | $\alpha = 1.0$ | $\alpha = 1.4$ | $\alpha = 1.6$ |
|---|---|---|---|
| 1 | $0.93600-j0.05200$ | $0.91040-j0.07280$ | $0.89760-j0.08320$ |
| 2 | $0.92876-j0.05160$ | $0.93169-j0.04252$ | $0.93981-j0.03150$ |
| 3 | $0.92820-j0.05200$ | $0.92780-j0.05659$ | $0.92431-j0.06588$ |

Converged value: $0.928131-j0.052000$.

(b) **$\alpha = 1.0$ converges fastest by a wide margin.** After three iterations its error is $7\times10^{-4}$; $\alpha=1.4$ is at $5\times10^{-3}$ and $\alpha=1.6$ at $1.5\times10^{-2}$ — worse by one and two orders of magnitude. Carried to $10^{-5}$, the counts are 5, 15 and 32 sweeps respectively.

The accelerated sequences visibly **oscillate around** the answer rather than approaching it monotonically: $\alpha=1.6$ goes 0.8976 → 0.9398 → 0.9243, straddling 0.9281 each time. That overshoot is the signature of too large a relaxation factor.

(c) *Why it fails here.* Acceleration extrapolates along the direction the iteration is already moving, and pays off when the unaccelerated iteration takes many small steps in nearly the same direction. Here the unaccelerated iteration has a convergence factor of about **0.0955** — it kills 90% of the error every sweep and lands essentially on the answer in one step. There is no long slow crawl to extrapolate along, so a 1.6× step simply overshoots.

*The condition under which it does help.* Acceleration pays when the convergence factor $\rho$ is close to 1, i.e. when the unaccelerated iteration is slow. That happens on **large, weakly coupled, or radial** systems, where information has to propagate bus by bus down a long chain and each sweep moves the far end only slightly. P3 is exactly that case.

The general rule from relaxation theory: the optimal factor is $\alpha_{\rm opt} = 2/(1+\sqrt{1-\rho^2})$, which is near 1 when $\rho$ is small and approaches 2 as $\rho\to1$. With $\rho = 0.0955$ here, $\alpha_{\rm opt} = 1.002$ — essentially no acceleration, exactly as observed.

**P3** (a) **Roughly linear in $N$.** From $N=8$ to $N=12$ (a factor of 1.5 in bus count) the unaccelerated count goes 185 → 419, a factor of 2.26. That is somewhat worse than linear, closer to $N^{2}$ over this small range, and reflects the radial topology: the chain's total impedance grows with $N$, so the system is also getting *electrically* longer, not just larger.

*Why it scales at all.* Gauss–Seidel propagates information one bus per sweep in the direction of the sweep. A change at the far end of an $N$-bus chain takes $O(N)$ sweeps just to be *felt* at the slack, and the error decays by a factor per sweep that itself worsens as the chain lengthens. The method has no global view of the system; every method that does — Newton, in particular — escapes this scaling.

(b) The count falls steeply with $\alpha$ up to an optimum, then rises again:

- $N = 8$: optimum at **$\alpha = 1.7$**, 30 sweeps — a **6.2× speedup** over $\alpha=1$.
- $N = 12$: optimum at **$\alpha = 1.8$**, 46 sweeps — a **9.1× speedup**.

Two patterns are worth noting. The optimum **shifts upward with system size**, consistent with $\alpha_{\rm opt} = 2/(1+\sqrt{1-\rho^2})$ and a $\rho$ that approaches 1 as the chain lengthens. And the penalty for overshooting is **steep and asymmetric**: at $N=8$, going from 1.7 to 1.9 triples the count (30 → 97), while going from 1.7 down to 1.6 costs only 50%. Since the optimum is not known in advance, practical implementations deliberately **undershoot**, using $\alpha\approx1.6$ rather than risking the far side.

(c) *What distinguishes them.* The two-bus system is **electrically compact and strongly coupled**: one bus, one line, a convergence factor of 0.0955. The radial chain is **electrically long and weakly coupled**: each bus is far from the slack in the graph, and information crawls. Acceleration is a tool for the second situation and a liability in the first.

The single diagnostic is the observed error ratio between sweeps. If it is small (below about 0.3), do not accelerate. If it is close to 1, acceleration is essential.

(d) *Extrapolation.* Taking the pessimistic scaling observed here (between $N$ and $N^{2}$), and using the accelerated optimum, a 3000-bus system would need somewhere between $46\times(3000/12) = 11{,}500$ and vastly more sweeps. Even the optimistic linear extrapolation gives roughly $10^{4}$ sweeps.

Each sweep costs $O(\text{nonzeros}) \approx O(4N) = 12{,}000$ complex operations, so a solve is around $10^{8}$ operations — not fatal on its own. But the real problems are worse than the count suggests:

**Accuracy is inadequate.** Linear convergence with $\rho$ near 1 means the residual plateaus. Getting mismatches to $10^{-4}$ pu on a large system is often simply unreachable, and the iteration wanders instead of converging.

**Contingency analysis multiplies it.** An operator screens thousands of outages every few minutes. At $10^4$ sweeps each, that is impossible.

**Newton–Raphson does it in 4 to 6 iterations, independent of system size.** Each Newton iteration is more expensive — it factors a sparse Jacobian — but the total is orders of magnitude less, and the count barely changes between a 300-bus and a 30,000-bus case.

*The verdict.* Gauss–Seidel is a teaching method and a **starter**: a few GS sweeps from a flat start are sometimes used to get a difficult case into Newton's basin of attraction, where Newton's quadratic convergence then finishes in three or four steps. That hybrid is its remaining production role, and it is a genuinely useful one — Newton is fast but fragile far from the solution, and Gauss–Seidel is slow but almost unbreakable.

</details>

## Flashback

**From Lesson 3.2 (The power-flow problem and bus types):** A four-bus system has bus 1 as slack, a generator at bus 2, and loads at buses 3 and 4. (a) Count the unknowns and the equations. (b) The generator at bus 2 is rated $Q\in[-0.3,0.5]$ pu and the solution requires $Q_2 = 0.62$ pu. State what happens and give the new counts.

<details>
<summary>Solution</summary>

(a) Unknown angles: $\theta_2,\theta_3,\theta_4$ → 3. Unknown magnitudes: $|V_3|,|V_4|$ → 2. Total **5**.

$P$ equations at buses 2, 3, 4 → 3. $Q$ equations at buses 3, 4 → 2. Total **5** ✓.

(b) $Q_2 = 0.62$ exceeds $Q_{\max} = 0.5$, so bus 2 **switches from PV to PQ** with $Q_2$ fixed at $0.5$ pu. Its magnitude becomes unknown:

- unknown magnitudes: 2 → **3**, total unknowns **6**
- $Q$ equations: 2 → **3**, total equations **6** ✓

$|V_2|$ will settle **below** its setpoint, because the machine is at its excitation ceiling and cannot supply the reactive power the setpoint demanded.

*Connecting to this lesson:* in Gauss–Seidel the switch is trivially easy to implement — stop resetting the magnitude and use the limit value for $Q$ — which is one reason GS survived as long as it did. In Newton–Raphson the switch changes the *dimension of the Jacobian*, so the matrix must be refactored, and a case that oscillates between switching a bus in and out can stall the solver entirely. Handling limit switching gracefully is one of the genuinely hard parts of production power-flow code.

</details>

## Connections

- **Backward:** the equations solved here are [3.2](03-02-power-flow-problem-bus-types.md)'s; $Y_{bus}$ is [3.1](03-01-bus-admittance-matrix.md)'s; the flat start is justified by the per-unit normalization of [1.3](01-03-the-per-unit-system.md).
- **Forward:** [3.4](03-04-newton-raphson-power-flow.md) replaces linear with quadratic convergence and is what production software uses.
- **Sideways:** this is the Gauss–Seidel method of [`numerical-analysis`](../../numerical-analysis/syllabus.md) applied to a nonlinear system, and the acceleration factor is successive over-relaxation (SOR) — the same technique used to solve Laplace's equation on a grid in [`em-refresher`](../../em-refresher/syllabus.md), with the same optimum-$\alpha$ theory and the same steep penalty for overshooting.

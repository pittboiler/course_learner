# Control Systems · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Control is one loop and four ways to look at it. This card holds the transform
and partial-fraction toolkit, the transient-response formulas that turn specs
into pole locations, the Routh array, the root-locus and Bode construction
rules, the margin definitions, the PID and compensator design formulas, and the
state-space machinery — plus the sign and convention bookkeeping where the real
mistakes live.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $G(s)$ | the **plant** — the hardware you're stuck with | [1.1](lessons/01-01-feedback-and-the-control-problem.md) |
| $G_c(s)$, $K_c$ | the **controller** you design, and its plain gain | [1.1](lessons/01-01-feedback-and-the-control-problem.md) |
| $H(s)$ | the feedback path (the sensor). $H=1$ is "unity feedback" | [1.1](lessons/01-01-feedback-and-the-control-problem.md) |
| $L(s)=G_cGH$ | **open-loop transfer function** — what you go around the loop and back | [1.1](lessons/01-01-feedback-and-the-control-problem.md) |
| $T(s)$ | closed-loop transfer function, $\dfrac{G_cG}{1+G_cGH}$ | [1.1](lessons/01-01-feedback-and-the-control-problem.md) |
| $r,\,e,\,u,\,y,\,d$ | reference, error, control effort, output, disturbance | [1.1](lessons/01-01-feedback-and-the-control-problem.md) |
| $S=\dfrac{1}{1+L}$ | sensitivity — the factor by which feedback shrinks your ignorance | [1.1](lessons/01-01-feedback-and-the-control-problem.md) |
| $m,b,k$ / $J$ | mass, viscous damping, spring constant / rotational inertia | [1.2](lessons/01-02-modeling-systems-as-odes.md) |
| $s=\sigma+j\omega$ | the Laplace variable; $j=\sqrt{-1}$ (engineers reserve $i$ for current) | [1.3](lessons/01-03-laplace-transform-toolkit.md) |
| $0^-$, $0^+$ | just before and just after $t=0$; the transform rules want $0^-$ | [1.3](lessons/01-03-laplace-transform-toolkit.md) |
| $\times$, $\circ$ | pole and zero on a pole–zero plot | [1.4](lessons/01-04-transfer-functions-poles-zeros.md) |
| $G(0)$ | **DC gain** — the steady output for a unit step (if the loop is stable) | [1.4](lessons/01-04-transfer-functions-poles-zeros.md) |
| $1+L(s)=0$ | the **characteristic equation** — every technique in this course moves its roots | [1.4](lessons/01-04-transfer-functions-poles-zeros.md) |
| $\Delta$, $P_k$, $\Delta_k$ | Mason's determinant, forward-path gains, and cofactors | [1.5](lessons/01-05-block-diagram-algebra.md) |
| $\tau$ | time constant, in seconds — a first-order pole sits at $s=-1/\tau$ | [2.1](lessons/02-01-first-order-response.md) |
| $\zeta$ | damping ratio (dimensionless) — sets the **shape** | [2.2](lessons/02-02-second-order-response.md) |
| $\omega_n$, $\omega_d$ | natural frequency and damped (actual ringing) frequency, rad/s | [2.2](lessons/02-02-second-order-response.md) |
| $\sigma=\zeta\omega_n$ | the pole's distance left of the axis — sets settling time alone | [2.2](lessons/02-02-second-order-response.md) |
| $\beta=\arccos\zeta$ | the design angle: $\zeta=\cos\beta$, so constant-$\zeta$ is a **ray** | [2.2](lessons/02-02-second-order-response.md) |
| $M_p$, $t_s$, $t_p$, $t_r$ | percent overshoot, settling (2 percent), peak, and rise time | [2.2](lessons/02-02-second-order-response.md) |
| $K_p,K_v,K_a$ | position, velocity, acceleration **error constants** | [2.3](lessons/02-03-steady-state-error-system-type.md) |
| type $N$ | the number of poles at the origin in $L(s)$ — not in $T(s)$ | [2.3](lessons/02-03-steady-state-error-system-type.md) |
| $e_{ss}$ | steady-state error | [2.3](lessons/02-03-steady-state-error-system-type.md) |
| $\sigma_a$ | root-locus asymptote centroid | [3.1](lessons/03-01-root-locus-construction.md) |
| $s_d$ | the design point — where the locus meets your spec region | [3.2](lessons/03-02-root-locus-design.md) |
| dB | $20\log_{10}$ for amplitude, $10\log_{10}$ for power | [3.3](lessons/03-03-frequency-response-bode-plots.md) |
| $\omega_{gc}$, $\omega_{pc}$ | gain crossover ($\lvert L\rvert=1$) and phase crossover ($\angle L=-180^\circ$) | [3.4](lessons/03-04-gain-and-phase-margins.md) |
| PM, GM | phase margin (degrees) and gain margin (dB or a factor) | [3.4](lessons/03-04-gain-and-phase-margins.md) |
| $Z=N+P$ | Nyquist: closed-loop RHP poles = encirclements + open-loop RHP poles | [3.5](lessons/03-05-nyquist-criterion.md) |
| $K_p,K_i,K_d$ | PID gains. **Note the clash**: $K_p$ is also the position error constant of [2.3](lessons/02-03-steady-state-error-system-type.md) | [4.1](lessons/04-01-pid-control.md) |
| $T_i$, $T_d$ | integral and derivative times in the standard form, $T_i=K_p/K_i$, $T_d=K_d/K_p$ | [4.1](lessons/04-01-pid-control.md) |
| $K_u$, $P_u$ | ultimate gain and ultimate period (Ziegler–Nichols) | [4.2](lessons/04-02-tuning-pid.md) |
| $\alpha$, $\beta$ | lead ratio ($\alpha<1$) and lag ratio ($\beta>1$). **$\beta$ also means the $\arccos\zeta$ angle of [2.2](lessons/02-02-second-order-response.md)** | [4.3](lessons/04-03-lead-lag-compensators.md) |
| $\phi_{\max}$, $\omega_{\max}$ | a lead network's peak phase boost and where it occurs | [4.3](lessons/04-03-lead-lag-compensators.md) |
| $A,B,C,D$ | state, input, output, and feedthrough matrices ($n\times n$, $n\times m$, $p\times n$, $p\times m$) | [5.1](lessons/05-01-state-space-modeling.md) |
| $x$, $\dot x$ | the state vector and its derivative — the system's memory | [5.1](lessons/05-01-state-space-modeling.md) |
| $\Phi(t)=e^{At}$ | the **state transition matrix** | [5.2](lessons/05-02-solving-state-equations.md) |
| $\mathcal{C}$, $\mathcal{O}$ | controllability and observability matrices | [5.3](lessons/05-03-controllability-observability.md) |
| $K$ (row), $L$ (column) | state-feedback gain and observer gain. **$L$ also means the open-loop transfer function** — context disambiguates | [5.4](lessons/05-04-pole-placement-observers.md) |
| $\hat x$, $e=x-\hat x$ | the estimated state and the estimation error | [5.4](lessons/05-04-pole-placement-observers.md) |
| $T$ (sampling) | the sample period, seconds. **Also the closed-loop transfer function** | [5.5](lessons/05-05-digital-control.md) |
| $z=e^{sT}$ | the discrete variable; $z^{-1}$ is one sample of delay | [5.5](lessons/05-05-digital-control.md) |

**Four symbol collisions to keep straight.** $K_p$ = proportional gain ([4.1](lessons/04-01-pid-control.md))
*and* position error constant ([2.3](lessons/02-03-steady-state-error-system-type.md)).
$\beta$ = the $\arccos\zeta$ design angle ([2.2](lessons/02-02-second-order-response.md))
*and* the lag ratio ([4.3](lessons/04-03-lead-lag-compensators.md)).
$L$ = open-loop transfer function ([1.1](lessons/01-01-feedback-and-the-control-problem.md))
*and* observer gain ([5.4](lessons/05-04-pole-placement-observers.md))
*and* the dead time in the Ziegler–Nichols reaction curve ([4.2](lessons/04-02-tuning-pid.md)).
$T$ = closed-loop transfer function *and* the sample period ([5.5](lessons/05-05-digital-control.md)).

## Definitions

### Open loop vs closed loop

Open loop picks the control action from a model alone; closed loop measures the
output and acts on the error $e=r-y$. Feedback divides plant error, drift, and
disturbances by $1+L$ — and charges you a sensor, control effort, and the
possibility of instability.

*Introduced:* [1.1](lessons/01-01-feedback-and-the-control-problem.md)

### Sensitivity

How much a fractional change in the plant leaks through to the closed loop.

$$S = \frac{1}{1+L(s)}$$

*In words: a 20 percent plant error inside a loop with $L=10$ becomes roughly a 2 percent output error.*

*Introduced:* [1.1](lessons/01-01-feedback-and-the-control-problem.md)

### Transfer function

$G(s)=Y(s)/X(s)$ with **zero initial conditions** — the forced part of the
response, which is what you design with.

*Introduced:* [1.4](lessons/01-04-transfer-functions-poles-zeros.md)

### Characteristic equation

The denominator of the closed loop set to zero, $1+L(s)=0$. Its roots are the
closed-loop poles. Routh tests them, root locus tracks them, pole placement puts
them where you want — three questions about one polynomial.

*Introduced:* [1.4](lessons/01-04-transfer-functions-poles-zeros.md)

### Non-minimum-phase zero

A zero in the right half-plane. It creates no mode, but its signature is
unmistakable: **the step response first moves the wrong way**. It also adds phase
lag with no magnitude signature, which is what makes such plants hard to control.

*Introduced:* [1.4](lessons/01-04-transfer-functions-poles-zeros.md)

### BIBO stability

Every bounded input gives a bounded output. For an LTI system: all closed-loop
poles strictly in the open left half-plane. Poles *on* the axis are marginally
stable, which is **not** stable.

*Introduced:* [2.4](lessons/02-04-stability-routh-hurwitz.md)

### System type

The number of pure integrators (poles at $s=0$) in the **open-loop** $L(s)$. Each
one wipes out the steady-state error for one more class of reference input.

*Introduced:* [2.3](lessons/02-03-steady-state-error-system-type.md)

### Dominant poles

The closed-loop pole pair nearest the imaginary axis, when everything else is at
least about 5 times farther left and no zero sits nearby. Only then do the
second-order formulas apply to a higher-order system.

*Introduced:* [2.2](lessons/02-02-second-order-response.md), stress-tested in [3.2](lessons/03-02-root-locus-design.md)

### Root locus

The path traced by the closed-loop poles as a gain sweeps $0\to\infty$. Points on
it satisfy $KL(s)=-1$: the **angle condition** $\angle L=180^\circ$ decides the
shape, the **magnitude condition** $K=1/\lvert L\rvert$ gives the gain.

*Introduced:* [3.1](lessons/03-01-root-locus-construction.md)

### Gain and phase margin

Distance from the critical point $L(j\omega)=-1$. **PM** $=180^\circ+\angle L(j\omega_{gc})$
is the extra lag the loop can absorb; **GM** $=1/\lvert L(j\omega_{pc})\rvert$ is the
extra gain. They are measured at *different* frequencies.

*Introduced:* [3.4](lessons/03-04-gain-and-phase-margins.md)

### Nyquist criterion

$Z=N+P$: closed-loop RHP poles equal clockwise encirclements of $-1$ plus
open-loop RHP poles. For a stable plant ($P=0$) this reduces to **no
encirclements means stable**. Unlike margins, it handles unstable plants and
conditionally stable loops.

*Introduced:* [3.5](lessons/03-05-nyquist-criterion.md)

### PID control

$u = K_pe + K_i\int e\,dt + K_d\dot e$ — present, past, and predicted error.
Integral is the only term that zeroes steady-state step error; derivative is the
only one that buys damping.

*Introduced:* [4.1](lessons/04-01-pid-control.md)

### Integral windup

When the actuator saturates, the integrator keeps accumulating past what the
hardware can deliver, so the loop overshoots badly while it unwinds. Fixes:
clamping, back-calculation, conditional integration.

*Introduced:* [4.1](lessons/04-01-pid-control.md)

### Lead and lag compensators

Both are $G_c(s)=K_c\dfrac{s+z}{s+p}$; only the ordering differs. **Lead**
($\lvert z\rvert<\lvert p\rvert$) spends high-frequency gain to buy phase where the
margin is. **Lag** ($\lvert p\rvert<\lvert z\rvert$) spends a few degrees of phase to
buy low-frequency gain where the error is.

*Introduced:* [4.3](lessons/04-03-lead-lag-compensators.md)

### State

The minimum set of variables such that knowing them now, plus the future input,
determines the entire future. Usually the energy-storage variables — spring
compression, velocity, capacitor voltage, inductor current.

*Introduced:* [5.1](lessons/05-01-state-space-modeling.md)

### State transition matrix

$\Phi(t)=e^{At}$, the operator that transports the state forward by $t$.
Properties: $\Phi(0)=I$, $\Phi(t_1+t_2)=\Phi(t_1)\Phi(t_2)$, $\Phi^{-1}(t)=\Phi(-t)$,
$\dot\Phi=A\Phi$.

*Introduced:* [5.2](lessons/05-02-solving-state-equations.md)

### Controllability and observability

**Controllable**: the input can *reach* any state in finite time. **Observable**:
the output determines the full internal state. They are independent — run both
tests. A mode failing either is exactly a mode that cancels out of the transfer
function.

*Introduced:* [5.3](lessons/05-03-controllability-observability.md)

### Separation principle

The eigenvalues of the observer-plus-state-feedback closed loop are exactly the
union of the controller eigenvalues ($A-BK$) and the observer eigenvalues
($A-LC$), because the combined system is block-triangular in $(x,e)$ coordinates.
So $K$ and $L$ may be designed **independently**.

*Introduced:* [5.4](lessons/05-04-pole-placement-observers.md)

## Formulas and rules

### Modeling element table

| Domain | Elements | Governing equation |
|---|---|---|
| Translational | mass $m$, damper $b$, spring $k$ | $m\ddot x+b\dot x+kx=f(t)$ |
| Rotational | inertia $J$, damper $b$, torsion $k$ | $J\ddot\theta+b\dot\theta+k\theta=\tau(t)$ |
| Electrical (series RLC) | $L$, $R$, $C$ | $L\ddot q+R\dot q+q/C=v(t)$ |

**Force–voltage analogy:** $m\leftrightarrow L$, $b\leftrightarrow R$,
$k\leftrightarrow 1/C$, $x\leftrightarrow q$, $f\leftrightarrow v$. (A rival
force–current analogy exists; this course uses force–voltage.)

*From* [1.2](lessons/01-02-modeling-systems-as-odes.md)

### Laplace transform pairs

| $x(t)$ | $X(s)$ |
|---|---|
| $\delta(t)$ | $1$ |
| $u(t)$ | $1/s$ |
| $t$ | $1/s^2$ |
| $t^n$ | $n!/s^{n+1}$ |
| $e^{-at}$ | $1/(s+a)$ |
| $\sin\omega t$ | $\omega/(s^2+\omega^2)$ |
| $\cos\omega t$ | $s/(s^2+\omega^2)$ |
| $e^{-at}\sin\omega t$ | $\omega/[(s+a)^2+\omega^2]$ |
| $e^{-at}\cos\omega t$ | $(s+a)/[(s+a)^2+\omega^2]$ |

The last two are the workhorses — underdamped responses are damped sinusoids.

| Property | Statement |
|---|---|
| Differentiation | $\mathcal{L}\{\dot x\}=sX-x(0^-)$, $\mathcal{L}\{\ddot x\}=s^2X-sx(0^-)-\dot x(0^-)$ |
| Time delay | $x(t-T)u(t-T)\leftrightarrow e^{-sT}X(s)$ |
| Initial value | $x(0^+)=\lim_{s\to\infty}sX(s)$ |
| Final value | $x(\infty)=\lim_{s\to0}sX(s)$ — **only if the poles are in the LHP** |

*From* [1.3](lessons/01-03-laplace-transform-toolkit.md)

### Partial fractions

| Case | Method |
|---|---|
| Improper ($\deg N\ge\deg D$) | long-divide first; the constant term inverts to an impulse |
| Distinct real poles | cover-up: $A_i=[(s-p_i)X(s)]_{s=p_i}$ |
| Repeated pole $(s+a)^m$ | multiply by the **full** power; get lower coefficients by differentiating |
| Complex pair | complete the square, then rewrite the numerator in $(s+a)$ so it matches the $\sin$/$\cos$ rows |

*From* [1.3](lessons/01-03-laplace-transform-toolkit.md)

### Block-diagram reduction

| Interconnection | Result |
|---|---|
| Series (no loading) | $G_1G_2$ |
| Parallel | $G_1+G_2$ |
| Negative feedback | $\dfrac{G}{1+GH}$ |
| Positive feedback | $\dfrac{G}{1-GH}$ |
| Unity feedback | $\dfrac{G}{1+G}$ |
| Move summing junction **back** past $G$ | divide the entering signal by $G$ |
| Move summing junction **forward** past $G$ | multiply the entering signal by $G$ |

Strategy: collapse the **innermost loop first**. Mason's rule
$T=\frac{1}{\Delta}\sum_k P_k\Delta_k$ with $\Delta = 1-\sum(\text{loop gains})+\sum(\text{non-touching pairs})-\cdots$
is the alternative when loops interlock.

*From* [1.5](lessons/01-05-block-diagram-algebra.md)

### First-order response

$G(s)=\dfrac{K}{\tau s+1}$, step response $y(t)=K(1-e^{-t/\tau})$.

| Quantity | Value |
|---|---|
| at $t=\tau$ | 63.2 percent of final |
| $t=\tau,2\tau,3\tau,4\tau,5\tau$ | 63.2, 86.5, 95.0, 98.2, 99.3 percent |
| 2 percent settling | $t_s\approx4\tau$ |
| 10–90 percent rise | $t_r=\tau\ln9\approx2.20\tau$ |
| initial tangent | reaches the final value at exactly $t=\tau$ |

Never overshoots. Proportional feedback gives $\tau\to\tau/(1+K_cK)$ — faster, but
with a residual offset.

*From* [2.1](lessons/02-01-first-order-response.md)

### Second-order response

$G(s)=\dfrac{\omega_n^2}{s^2+2\zeta\omega_ns+\omega_n^2}$, poles $s=-\zeta\omega_n\pm j\omega_n\sqrt{1-\zeta^2}$.

| Spec | Formula |
|---|---|
| Percent overshoot | $M_p=e^{-\zeta\pi/\sqrt{1-\zeta^2}}\times100\ \text{percent}$ |
| Inverse (spec → $\zeta$) | $\zeta=\dfrac{-\ln M_p}{\sqrt{\pi^2+\ln^2M_p}}$, $M_p$ as a **fraction** |
| 2 percent settling | $t_s\approx\dfrac{4}{\zeta\omega_n}=\dfrac{4}{\sigma}$ — real part only |
| Peak time | $t_p=\pi/\omega_d$ |
| Rise time (0–100 percent) | $t_r=(\pi-\beta)/\omega_d$, $\beta=\arccos\zeta$ |
| Damped frequency | $\omega_d=\omega_n\sqrt{1-\zeta^2}$ |

| $\zeta$ | 0.1 | 0.3 | 0.5 | 0.6 | 0.707 | 0.8 | 0.9 |
|---|---|---|---|---|---|---|---|
| $M_p$ (percent) | 72.9 | 37.2 | 16.3 | 9.5 | 4.3 | 1.5 | 0.15 |

**s-plane design geometry:** radial rays from the origin are constant $\zeta$
(constant overshoot, $\zeta=\cos\beta$); vertical lines are constant settling
time; horizontal lines are constant peak time; circles are constant $\omega_n$.

*From* [2.2](lessons/02-02-second-order-response.md)

### Steady-state error

$e_{ss}=\lim_{s\to0}\dfrac{sR(s)}{1+L(s)}$ — **valid only on a stable loop.**

| | Step | Ramp | Parabola |
|---|---|---|---|
| **Type 0** | $\dfrac{1}{1+K_p}$ | $\infty$ | $\infty$ |
| **Type 1** | $0$ | $\dfrac{1}{K_v}$ | $\infty$ |
| **Type 2** | $0$ | $0$ | $\dfrac{1}{K_a}$ |

with $K_p=\lim_{s\to0}L(s)$, $K_v=\lim_{s\to0}sL(s)$, $K_a=\lim_{s\to0}s^2L(s)$.

*From* [2.3](lessons/02-03-steady-state-error-system-type.md)

### Routh–Hurwitz

**Necessary first:** all coefficients present and same sign (necessary, not
sufficient).

Build the array from the characteristic polynomial's coefficients; each new entry
is $-\frac{1}{\text{pivot}}\det\begin{bmatrix}\cdot&\cdot\\\cdot&\cdot\end{bmatrix}$
of the two rows above. Then:

$$\textbf{number of RHP roots} = \textbf{number of sign changes in the first column.}$$

| Special case | Fix |
|---|---|
| Zero in the first column, row not all zero | replace with $\varepsilon$, take $\varepsilon\to0^+$ |
| Entire row of zeros | symmetric roots; form the auxiliary polynomial from the row above, differentiate, continue |

The row of zeros is not a nuisance — **it locates the $j\omega$ crossing**, which
root locus and Ziegler–Nichols both need.

Worked reference: $L=K/(s(s+2)(s+4))$ gives $s^3+6s^2+8s+K$, stable for
$0<K<48$, oscillating at $\omega=2\sqrt2\approx2.83$ rad/s at the limit.

*From* [2.4](lessons/02-04-stability-routh-hurwitz.md)

### Root-locus construction

| Rule | Statement |
|---|---|
| Branches | $n$ of them; start at open-loop poles ($K=0$), end at zeros ($K\to\infty$); $n-m$ go to infinity |
| Symmetry | about the real axis |
| Real-axis segments | on the locus iff the number of real poles and zeros to the **right** is odd |
| Asymptote angles | $\theta_k=\dfrac{(2k+1)180^\circ}{n-m}$ |
| Asymptote centroid | $\sigma_a=\dfrac{\sum\text{poles}-\sum\text{zeros}}{n-m}$ |
| Breakaway / break-in | solve $dK/ds=0$; **keep only roots on an actual segment** |
| $j\omega$ crossing | substitute $s=j\omega$, or read the Routh auxiliary polynomial |
| Gain at a point | $K=\dfrac{\prod\lvert s_d-p_i\rvert}{\prod\lvert s_d-z_j\rvert}$ |

**Design:** adding a **zero pulls the locus left** (stabilizing); adding a **pole
pushes it right** (destabilizing). If the locus never enters the spec region, no
gain works — reshape with a compensator.

*From* [3.1](lessons/03-01-root-locus-construction.md), [3.2](lessons/03-02-root-locus-design.md)

### Bode asymptotes

Convert to **Bode (time-constant) form** first — $10/(s+2)\to5/(1+s/2)$ — or the
whole plot shifts vertically.

| Factor | Magnitude | Phase |
|---|---|---|
| $K$ | flat $20\log_{10}\lvert K\rvert$ | $0^\circ$ |
| $1/s$ | $-20$ dB/dec through 0 dB at $\omega=1$ | $-90^\circ$ constant |
| $1/(1+s/\omega_c)$ | 0 dB below $\omega_c$, $-20$ dB/dec above | $0^\circ\to-90^\circ$, $-45^\circ$ at $\omega_c$ |
| complex pair | $-40$ dB/dec above $\omega_n$ | $0^\circ\to-180^\circ$, $-90^\circ$ at $\omega_n$ |

Zeros mirror everything. Exact error at a real corner: $-3.01$ dB. Slopes
**accumulate**. Resonant peak for $\zeta<0.707$:
$M_r=\dfrac{1}{2\zeta\sqrt{1-\zeta^2}}$ at $\omega_r=\omega_n\sqrt{1-2\zeta^2}$.

dB anchors: $1\to0$, $\sqrt2\to3.01$, $2\to6.02$, $10\to20$, $0.1\to-20$.

*From* [3.3](lessons/03-03-frequency-response-bode-plots.md)

### Margins

| Quantity | Definition |
|---|---|
| $\omega_{gc}$ | where $\lvert L(j\omega)\rvert=1$ (0 dB) |
| $\omega_{pc}$ | where $\angle L(j\omega)=-180^\circ$ |
| Phase margin | $\text{PM}=180^\circ+\angle L(j\omega_{gc})$ |
| Gain margin | $\text{GM}=1/\lvert L(j\omega_{pc})\rvert$, or $-20\log_{10}\lvert L(j\omega_{pc})\rvert$ dB |
| Damping estimate | $\zeta\approx\text{PM}/100$ (good to about $\text{PM}=70^\circ$) |
| Bandwidth | $\omega_{BW}\approx\omega_{gc}$ (within a factor of ~2) |
| **Delay margin** | $T_{\max}=\dfrac{\text{PM in radians}}{\omega_{gc}}$ |

Typical target: PM 30–60°, with 45–60° giving well-damped response.

*From* [3.4](lessons/03-04-gain-and-phase-margins.md)

### PID

$$G_c(s)=K_p+\frac{K_i}{s}+K_ds = K_p\left(1+\frac{1}{T_is}+T_ds\right),\qquad T_i=\frac{K_p}{K_i},\ T_d=\frac{K_d}{K_p}$$

| Increase | Rise time | Overshoot | Settling | $e_{ss}$ | Stability |
|---|---|---|---|---|---|
| $K_p$ | decreases | increases | small change | decreases | degrades |
| $K_i$ | decreases | increases | increases | **eliminated** | degrades |
| $K_d$ | small change | decreases | decreases | no change | improves |

Rules of thumb for typical plants, not theorems — the terms interact.

**Practical must-dos:** filter the derivative ($K_ds/(1+sT_d/N)$, $N\approx8$–$20$);
differentiate the *measurement* not the error, to avoid derivative kick; guard
against windup.

*From* [4.1](lessons/04-01-pid-control.md)

### Ziegler–Nichols tuning

**Ultimate-gain (closed loop)** — raise $K_p$ until sustained oscillation; record
$K_u$ and period $P_u$:

| Controller | $K_p$ | $T_i$ | $T_d$ |
|---|---|---|---|
| P | $0.5K_u$ | — | — |
| PI | $0.45K_u$ | $P_u/1.2$ | — |
| PID | $0.6K_u$ | $P_u/2$ | $P_u/8$ |

**Reaction-curve (open loop)** — fit $Ke^{-Ls}/(Ts+1)$ from the step response:

| Controller | $K_p$ | $T_i$ | $T_d$ |
|---|---|---|---|
| P | $T/(LK)$ | — | — |
| PI | $0.9T/(LK)$ | $L/0.3$ | — |
| PID | $1.2T/(LK)$ | $2L$ | $0.5L$ |

If you have a model you can *compute* $K_u$ and $P_u$: they are the Routh critical
gain and $P_u=2\pi/\omega_{\text{crossing}}$. Z-N targets quarter-amplitude decay —
aggressive, roughly 25 percent or more overshoot. **A starting point, not a design.**

*From* [4.2](lessons/04-02-tuning-pid.md)

### Lead and lag design

$$G_c(s)=K_c\,\alpha\,\frac{Ts+1}{\alpha Ts+1}\quad(\text{lead},\ \alpha<1)$$

| Quantity | Formula |
|---|---|
| Peak phase | $\sin\phi_{\max}=\dfrac{1-\alpha}{1+\alpha}$ |
| Inverse | $\alpha=\dfrac{1-\sin\phi_{\max}}{1+\sin\phi_{\max}}$ |
| Where it peaks | $\omega_{\max}=\sqrt{zp}=\dfrac{1}{T\sqrt\alpha}$ (geometric mean) |
| Practical ceiling | about $60$–$65^\circ$ per section |

Anchors: $\phi_{\max}=45^\circ\Rightarrow\alpha=0.1716$; $60^\circ\Rightarrow\alpha=0.0718$.
Add 5–12° of pad, because lead moves crossover right.

| | Lead | Lag |
|---|---|---|
| Buys | phase margin, speed, bandwidth | low-frequency gain, accuracy |
| Costs | high-frequency gain, noise | a little phase, slower response |
| Zero/pole | zero nearer the origin | pole nearer the origin |
| Place it | $\omega_{\max}$ at the new crossover | zero ~a decade **below** crossover |
| Relation to PID | PD with a realizable pole | PI with the pole off the origin |

*From* [4.3](lessons/04-03-lead-lag-compensators.md)

### State space

$$\dot x = Ax+Bu,\qquad y = Cx+Du,\qquad G(s)=C(sI-A)^{-1}B+D$$

| Fact | Statement |
|---|---|
| Phase-variable form | for $\ddot y+a_1\dot y+a_0y=b_0u$: $A=\begin{bmatrix}0&1\\-a_0&-a_1\end{bmatrix}$, $B=\begin{bmatrix}0\\b_0\end{bmatrix}$, $C=\begin{bmatrix}1&0\end{bmatrix}$ |
| Coordinate change | $z=Tx$ gives $A'=TAT^{-1}$, $B'=TB$, $C'=CT^{-1}$ — **eigenvalues invariant** |
| Poles | $\det(sI-A)=0$; poles of $G$ $\subseteq$ eigenvalues of $A$ (equality iff nothing cancels) |
| Stability | all $\operatorname{Re}\{\lambda_i\}<0$ |
| Solution | $x(t)=e^{At}x(0)+\displaystyle\int_0^te^{A(t-\tau)}Bu(\tau)\,d\tau$ |
| Computing $e^{At}$ | $\mathcal{L}^{-1}\{(sI-A)^{-1}\}$, or $Ve^{\Lambda t}V^{-1}$ when diagonalizable |

*From* [5.1](lessons/05-01-state-space-modeling.md), [5.2](lessons/05-02-solving-state-equations.md)

### Controllability, observability, and design

| Object | Test |
|---|---|
| $\mathcal{C}=[B\ \ AB\ \ \cdots\ \ A^{n-1}B]$ | controllable iff $\operatorname{rank}=n$ |
| $\mathcal{O}=[C;\ CA;\ \cdots;\ CA^{n-1}]$ | observable iff $\operatorname{rank}=n$ |
| Duality | $(A,B)$ controllable $\iff$ $(A^{T},B^{T})$ observable |

| Design step | Result |
|---|---|
| State feedback $u=-Kx$ | closed loop $\dot x=(A-BK)x$; poles placeable anywhere iff controllable |
| Method | match coefficients of $\det(sI-A+BK)$ to the desired polynomial |
| Ackermann | $K=[0\ \cdots\ 0\ 1]\,\mathcal{C}^{-1}\varphi_d(A)$ |
| Observer | $\dot{\hat x}=A\hat x+Bu+L(y-C\hat x)$; error obeys $\dot e=(A-LC)e$ |
| Observer speed | place its poles 2–10× faster than the controller's |
| Separation | closed-loop eigenvalues $=$ eig$(A-BK)\ \cup$ eig$(A-LC)$ |

*From* [5.3](lessons/05-03-controllability-observability.md), [5.4](lessons/05-04-pole-placement-observers.md)

### Digital control

| Item | Value |
|---|---|
| Mapping | $z=e^{sT}$: $j\omega$ axis → unit circle; LHP → **inside** the unit circle |
| Many-to-one | each strip of height $2\pi/T$ covers the whole z-plane — that *is* aliasing |
| Pole mapping | $s=-a\ \longrightarrow\ z=e^{-aT}$ |
| **ZOH cost** | an average delay of $T/2$, i.e. $\omega T/2$ radians of phase lag at $\omega$ |
| Sample-rate rule | 20–40× the closed-loop bandwidth, or 4–10 samples per rise time |
| Tustin / bilinear | $s\leftarrow\dfrac{2}{T}\dfrac{z-1}{z+1}$ — the default discretization |
| Discrete PID | $u_i[k]=u_i[k-1]+K_iTe[k]$; derivative $K_d(e[k]-e[k-1])/T$ |

Nyquist is the floor for *signal recovery*, nowhere near enough for a loop —
phase margin, not information content, sets the rate. Anti-aliasing must be
**analog**, before the sampler.

*From* [5.5](lessons/05-05-digital-control.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Solving second-order constant-coefficient ODEs; characteristic roots | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Damping regimes and driven resonance | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md), [2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| Variation of parameters (behind the convolution solution) | [ode-refresher 2.4](../ode-refresher/lessons/02-04-variation-of-parameters.md) |
| The unilateral Laplace transform as an IVP tool | [ode-refresher 4.1](../ode-refresher/lessons/04-01-laplace-transform.md) |
| Phase portraits and equilibrium stability | [ode-refresher 3.2](../ode-refresher/lessons/03-02-phase-portraits-stability.md) |
| The bilateral Laplace transform, ROC, and why control can ignore it | [signals-systems 2.4](../signals-systems/lessons/02-04-laplace-transform-roc.md) |
| Poles as modes; the geometric magnitude construction | [signals-systems 2.5](../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md) |
| Why $e^{st}$ is an eigenfunction, so sinusoid in gives sinusoid out | [signals-systems 2.1](../signals-systems/lessons/02-01-eigenfunctions-frequency-response.md) |
| Convolution as the zero-state response | [signals-systems 1.4](../signals-systems/lessons/01-04-convolution-continuous-time.md) |
| Sampling, spectral replication, and the Nyquist theorem | [signals-systems 3.1](../signals-systems/lessons/03-01-sampling-nyquist-shannon.md) |
| Aliasing and reconstruction; the zero-order hold | [signals-systems 3.2](../signals-systems/lessons/03-02-aliasing-and-reconstruction.md) |
| The z-transform, its ROC, and the unit circle | [signals-systems 4.1](../signals-systems/lessons/04-01-z-transform-and-roc.md), [4.2](../signals-systems/lessons/04-02-discrete-transfer-functions-z-plane.md) |
| Difference equations and direct-form realizations | [signals-systems 4.3](../signals-systems/lessons/04-03-difference-equations-realizations.md) |
| Decibels and the $-3$ dB convention | [signals-systems 4.4](../signals-systems/lessons/04-04-filter-design-basics.md) |
| Eigenvalues, eigenvectors, and diagonalization | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), [3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Matrix inverses, rank, and the four subspaces | [linalg-refresher 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md), [1.3](../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) |
| Determinants | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Conditioning and singular values (the "degree" of controllability) | [linalg-refresher 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| Linearization and Taylor expansion about an operating point | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Newton's laws and free-body diagrams | [mechanics-refresher 1.3](../mechanics-refresher/lessons/01-03-applying-newtons-laws.md) |
| Rotational dynamics | [mechanics-refresher 4.1](../mechanics-refresher/lessons/04-01-rotational-dynamics.md) |
| Kirchhoff's laws; RLC transients | [circuits 1.3](../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md), [3.3](../circuits/lessons/03-03-second-order-rlc.md) |
| The argument principle (behind Nyquist) | [complex-analysis 6.3](../complex-analysis/lessons/06-03-argument-principle-rouche.md) |

## Pitfalls

### Loop structure and modeling

- $e=r-y$ holds **only for unity feedback**. With a real sensor the junction computes $r-Hy$, so the loop drives the *measurement* to the reference, not the truth. *([1.1](lessons/01-01-feedback-and-the-control-problem.md))*
- Disturbances rarely enter where the reference does — a hill enters at the plant input, noise at the measurement. Each entry point gets its own transfer function. *([1.1](lessons/01-01-feedback-and-the-control-problem.md))*
- More feedback is not monotonically better: past first order, cranking $K$ walks the closed-loop poles into the right half-plane. *([1.1](lessons/01-01-feedback-and-the-control-problem.md))*
- Declare the positive direction before writing a single force. A spring gives $-kx$ only when $x$ is measured from the relaxed length in the same direction you resolve. *([1.2](lessons/01-02-modeling-systems-as-odes.md))*
- A heavier model is not a better model — dynamics far outside your control bandwidth add algebra and no accuracy. *([1.2](lessons/01-02-modeling-systems-as-odes.md))*
- Linearization is not a technicality; it is the load-bearing assumption of Modules 1–4. Every margin you compute describes the *linearized* plant near one operating point. *([1.2](lessons/01-02-modeling-systems-as-odes.md))*
- Pick one analogy and say which — force–voltage and force–current give different tables for the same hardware. *([1.2](lessons/01-02-modeling-systems-as-odes.md))*
- $G_1G_2$ is the cascade **only if stage 2 doesn't load stage 1**. Two RC sections wired together give a cross term. *([1.5](lessons/01-05-block-diagram-algebra.md))*
- The denominator sign follows the **summing junction**, not the feedback path's algebra: negative gives $1+GH$, positive gives $1-GH$. *([1.5](lessons/01-05-block-diagram-algebra.md))*
- Don't memorize the block-relocation table — regenerate it by writing the output equation before and after. *([1.5](lessons/01-05-block-diagram-algebra.md))*
- The plant's poles are $L$'s poles. The system you built has poles at the roots of $1+L(s)=0$, and every one moves when you turn a gain. *([1.5](lessons/01-05-block-diagram-algebra.md))*

### Transforms and inversion

- The final value theorem fails **silently** on an unstable or oscillatory system — it returns a clean, confident, wrong number. Check pole locations first. *([1.3](lessons/01-03-laplace-transform-toolkit.md), [2.3](lessons/02-03-steady-state-error-system-type.md))*
- Cover-up breaks on a repeated pole. Multiply by the **full** power and differentiate for the lower coefficients. *([1.3](lessons/01-03-laplace-transform-toolkit.md))*
- After completing the square, the numerator must be rewritten in $(s+a)$ — the cosine row needs $(s+a)$ on top. *([1.3](lessons/01-03-laplace-transform-toolkit.md))*
- $G(0)$ is the DC gain only when the final value theorem applies; a type-1 plant has $G(0)=\infty$. *([1.4](lessons/01-04-transfer-functions-poles-zeros.md), [2.1](lessons/02-01-first-order-response.md))*
- The numerator constant is the DC gain only in $K/(\tau s+1)$ form. For $5/(s+0.5)$ the DC gain is 10. Evaluate at $s=0$ instead. *([2.1](lessons/02-01-first-order-response.md))*
- Cancelling a pole with a zero does not remove the mode — an unstable one is still there, merely invisible from that input–output pair. *([1.4](lessons/01-04-transfer-functions-poles-zeros.md), [5.1](lessons/05-01-state-space-modeling.md), [5.2](lessons/05-02-solving-state-equations.md))*
- Zeros don't affect stability but they set the residues — so they control overshoot and how much of each mode you see. *([1.4](lessons/01-04-transfer-functions-poles-zeros.md))*

### Transient specs

- $\tau$ is 63 percent, not "how long it takes" — the response isn't done until about $4\tau$. *([2.1](lessons/02-01-first-order-response.md))*
- A first-order system **cannot** overshoot, for any gain. One real pole, nothing to oscillate against. *([2.1](lessons/02-01-first-order-response.md))*
- $\omega_n$ cancels out of $M_p$ entirely. Raising it compresses the time axis and leaves the shape untouched; $\zeta$ alone sets overshoot. *([2.2](lessons/02-02-second-order-response.md))*
- The system rings at $\omega_d$, not $\omega_n$. Rule: $\omega_n$ appears in $M_p$ and $t_s$; $\omega_d$ appears in $t_p$ and $t_r$. *([2.2](lessons/02-02-second-order-response.md))*
- The inverse overshoot formula needs $M_p$ as a **fraction**. Passing 16.3 instead of 0.163 returns a negative $\zeta$. *([2.2](lessons/02-02-second-order-response.md))*
- The second-order formulas assume a **constant numerator**. A zero changes overshoot without moving a single pole. *([2.2](lessons/02-02-second-order-response.md))*
- "Dominant" means the poles nearest the axis *by a wide margin* — naming a pair dominant doesn't make it so. *([3.2](lessons/03-02-root-locus-design.md))*
- $t_s=4/\sigma$ is the 2 percent envelope estimate for a dominant complex pair, not an identity. *([3.2](lessons/03-02-root-locus-design.md))*

### Steady-state error and stability

- Count integrators in the **open-loop** $L(s)$, not in $T(s)$ — $T$ has no pole at the origin when $L$ does. *([2.3](lessons/02-03-steady-state-error-system-type.md))*
- "Type 1 means zero error" means zero error **to a step**. Type always answers "zero error to *which* input?" *([2.3](lessons/02-03-steady-state-error-system-type.md))*
- $K_v$ is not a velocity; it is a gain constant with units of $1/\text{s}$. *([2.3](lessons/02-03-steady-state-error-system-type.md))*
- Routh is applied to the **closed-loop** characteristic polynomial, never the open-loop denominator alone. *([2.4](lessons/02-04-stability-routh-hurwitz.md))*
- A row of zeros gives no sign change but is **not** stable — it means roots on the axis. *([2.4](lessons/02-04-stability-routh-hurwitz.md))*
- The stable set need not be one interval: conditionally stable systems have a **lower** gain bound too. *([2.4](lessons/02-04-stability-routh-hurwitz.md))*

### Graphical methods

- With $n>m$, the extra branches end at **zeros at infinity** — no finite zeros means escape routes, not a short locus. *([3.1](lessons/03-01-root-locus-construction.md))*
- Not every root of $dK/ds=0$ is a breakaway point — test each against an actual segment. *([3.1](lessons/03-01-root-locus-construction.md))*
- Asymptotes are far-field behavior only; the locus can run strictly to one side of them the whole way out. *([3.1](lessons/03-01-root-locus-construction.md))*
- The magnitude condition returns a cheerful positive number for points that aren't on the locus at all. Check the **angle** condition first. *([3.2](lessons/03-02-root-locus-design.md))*
- Convert to $(1+s/\omega_c)$ form before sketching, or the whole Bode plot is shifted vertically. *([3.3](lessons/03-03-frequency-response-bode-plots.md))*
- Bode slopes **accumulate** — they don't reset at each corner. *([3.3](lessons/03-03-frequency-response-bode-plots.md))*
- Asymptotes are off by 14 dB near a $\zeta=0.1$ pair, exactly where the loop will bite. Sketch the peak in. *([3.3](lessons/03-03-frequency-response-bode-plots.md))*
- A decade is $\times10$, an octave is $\times2$: $-20$ dB/decade is $-6.02$ dB/octave. *([3.3](lessons/03-03-frequency-response-bode-plots.md))*
- **PM lives at $\omega_{gc}$, GM at $\omega_{pc}$** — different frequencies. This is the classic error. *([3.4](lessons/03-04-gain-and-phase-margins.md))*
- Infinite gain margin does not mean a good design; PM is usually the more informative number. *([3.4](lessons/03-04-gain-and-phase-margins.md))*
- The delay-margin formula needs **PM in radians** — multiply degrees by $\pi/180$ or be off by 57×. *([3.4](lessons/03-04-gain-and-phase-margins.md))*
- Nyquist is about **winding**, not position: a curve can pass left of $-1$ without encircling it. *([3.5](lessons/03-05-nyquist-criterion.md))*
- $P$ counts **open-loop** RHP poles (free information); $Z$ is the unknown. Reading them backwards inverts every conclusion. *([3.5](lessons/03-05-nyquist-criterion.md))*
- Don't drop the mirror half of the Nyquist plot, and never mix sign conventions mid-problem. *([3.5](lessons/03-05-nyquist-criterion.md))*

### Controller design

- The PID effects table is a set of habits, not theorems — every entry assumes a well-behaved plant with the other two gains fixed. *([4.1](lessons/04-01-pid-control.md))*
- Integral action *eliminates* step error, but only if the loop stays stable — the added $-90^\circ$ can push you past the boundary. *([4.1](lessons/04-01-pid-control.md))*
- Pole–zero cancellation in a controller is exact only in the model; the real pole drifts and the mode reappears as a slow tail. *([4.1](lessons/04-01-pid-control.md), [4.3](lessons/04-03-lead-lag-compensators.md))*
- Ziegler–Nichols is a **starting point**, tuned for quarter-amplitude decay — expect 25 percent or more overshoot and thin margins. *([4.2](lessons/04-02-tuning-pid.md))*
- You often cannot run the ultimate-gain test at all — deliberate sustained oscillation may be unsafe. *([4.2](lessons/04-02-tuning-pid.md))*
- Raw $K_ds$ has unbounded gain with frequency and pumps sensor noise into the actuator. Always filter it. *([4.2](lessons/04-02-tuning-pid.md), [4.1](lessons/04-01-pid-control.md))*
- The 5–12° lead pad is not fudge: lead moves crossover **right**, onto plant phase you haven't accounted for. *([4.3](lessons/04-03-lead-lag-compensators.md))*
- Lag doesn't *add* phase margin — it reveals margin already present at a lower frequency by attenuating until crossover slides down. *([4.3](lessons/04-03-lead-lag-compensators.md))*
- Watch the lag compensator's slow real pole; it survives only because the zero nearly cancels it. *([4.3](lessons/04-03-lead-lag-compensators.md))*

### State space

- $sI-A$ puts $s$ on the **diagonal only** — it is not "add $s$ to every entry." *([5.1](lessons/05-01-state-space-modeling.md))*
- There is no unique state vector. Two correct answers can share no entry; compare eigenvalues or $G(s)$. *([5.1](lessons/05-01-state-space-modeling.md))*
- Eigenvalues of $A$ $\supseteq$ poles of $G$, with equality only when nothing cancels. *([5.1](lessons/05-01-state-space-modeling.md), [5.2](lessons/05-02-solving-state-equations.md))*
- $e^{At}$ is **not** entrywise exponentiation. *([5.2](lessons/05-02-solving-state-equations.md))*
- $e^{At}e^{Bt}=e^{(A+B)t}$ only if $AB=BA$ — the most common matrix-exponential error. *([5.2](lessons/05-02-solving-state-equations.md))*
- "Controllable" means you can **reach** any state in finite time, not hold it there. *([5.3](lessons/05-03-controllability-observability.md))*
- Controllability and observability are **independent** — run both tests, always. *([5.3](lessons/05-03-controllability-observability.md))*
- An uncontrollable system usually signals a **symmetry**, not a broken model; the fix is hardware. *([5.3](lessons/05-03-controllability-observability.md))*
- Rank is binary but reality is graded — a nearly-singular $\mathcal{C}$ is controllable in principle and hopeless in practice. *([5.3](lessons/05-03-controllability-observability.md))*
- Pole placement doesn't touch the **zeros**: the numerator of $C(sI-A+BK)^{-1}B$ is unchanged. *([5.4](lessons/05-04-pole-placement-observers.md))*
- Faster poles mean larger $K$ and a larger control signal — push too far and the actuator saturates. *([5.4](lessons/05-04-pole-placement-observers.md))*
- Only the *eigenvalues* separate. The response still carries the estimation transient if $\hat x(0)$ is wrong. *([5.4](lessons/05-04-pole-placement-observers.md))*
- It is $A-BK$ and $A-LC$ — the minus is already inside $u=-Kx$; don't subtract twice. *([5.4](lessons/05-04-pole-placement-observers.md))*

### Digital implementation

- Nyquist tells you when a *signal* is recoverable, not how fast to sample a **loop**. A loop at 3× bandwidth satisfies Nyquist and is often unstable. *([5.5](lessons/05-05-digital-control.md))*
- A slow sample rate doesn't just coarsen the response — it destabilizes, and the effect is invisible in a continuous-time simulation. *([5.5](lessons/05-05-digital-control.md))*
- Aliased noise cannot be filtered out afterward; anti-aliasing must be **analog**, before the sampler. *([5.5](lessons/05-05-digital-control.md))*
- Forward Euler can turn a stable design into an unstable controller. Use Tustin unless you have a reason not to. *([5.5](lessons/05-05-digital-control.md))*

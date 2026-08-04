# Control Systems — Syllabus

> Engineering · Tier 1 · ~22 lessons · Prereqs: [ode-refresher](../ode-refresher/syllabus.md), [linalg-refresher](../linalg-refresher/syllabus.md) · Roadmap id: `control-systems`

## Goal

Take a physical system, model it as a dynamic system, and design feedback that makes it behave — fast enough, accurate enough, and provably stable. You'll fluently move between the three classical lenses (transfer functions, root locus, frequency response) and the modern state-space one, and you'll design real controllers: PID, lead/lag compensators, and full state feedback with observers. We deliberately skip nonlinear control, optimal control depth (LQR gets a one-line mention, not a derivation), and robust control — those are their own courses.

## Dangerous Checklist

When you finish, you can:

- [ ] Model a mechanical or electrical system as an ODE and reduce it to a transfer function
- [ ] Compute a system's poles and zeros and read off its speed, overshoot, and stability from their location
- [ ] Simplify any block diagram to a single closed-loop transfer function
- [ ] Predict the step response of a first- or second-order system from its parameters (time constant, $\zeta$, $\omega_n$)
- [ ] Compute steady-state error and classify a system by type
- [ ] Determine stability and the stabilizing gain range with the Routh–Hurwitz criterion
- [ ] Sketch a root locus by hand and pick a gain that meets a transient spec
- [ ] Draw a Bode plot and read off gain margin, phase margin, and crossover frequencies
- [ ] Apply the Nyquist criterion to judge closed-loop stability from an open-loop plot
- [ ] Design and tune a PID controller and design a lead or lag compensator to hit a spec
- [ ] Write a state-space model, test controllability and observability, and place poles with state feedback
- [ ] Build a full-order observer and explain why estimated-state feedback still works (separation principle)

## Modules

### Module 1: Modeling & the Laplace transform

Turn physical hardware into equations you can manipulate, then into the algebraic language — transfer functions and block diagrams — the whole classical toolkit runs on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Feedback & the control problem | Say what feedback buys you and diagram an open- vs closed-loop system | plant, controller, reference, error, disturbance, open vs closed loop |
| 1.2 | Modeling systems as ODEs | Write the governing ODE for a mechanical or electrical system | free-body/Kirchhoff laws, mass–spring–damper, RLC, force–voltage analogy |
| 1.3 | The Laplace transform toolkit | Transform ODEs into algebra and invert with partial fractions | definition, linearity, differentiation rule, key pairs, partial fractions |
| 1.4 | Transfer functions, poles & zeros | Build a transfer function and locate its poles and zeros | transfer function, characteristic equation, poles, zeros, DC gain |
| 1.5 | Block-diagram algebra | Reduce any interconnection to one transfer function | series/parallel, feedback formula, moving summing points, Mason's rule (touch) |

**Boss problem 1:** A cart of mass $m=1$ with damping $b=3$ and spring $k=2$ obeys $m\ddot{x}+b\dot{x}+kx=f(t)$, output $x$, input force $f$. Derive $G(s)=X(s)/F(s)$, factor it, and give all poles and zeros. Then a controller feeds this plant inside a unity-feedback loop with forward gain $K$ — reduce the block diagram to the closed-loop transfer function $T(s)$.

### Module 2: Time response & stability

Read a system's behavior in time from its poles, quantify accuracy, and decide the one thing that matters most: does it blow up?

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | First-order response | Predict a first-order step/impulse response from its time constant | time constant $\tau$, pole location, rise/settling, DC gain |
| 2.2 | Second-order response | Extract overshoot, settling, and rise from $\zeta$ and $\omega_n$ | damping ratio, natural frequency, $M_p$, $t_s$, dominant poles |
| 2.3 | Steady-state error & system type | Compute steady-state error and classify a system by type | error constants $K_p,K_v,K_a$, system type, final value theorem |
| 2.4 | Stability & Routh–Hurwitz | Decide stability and find the stabilizing gain range without solving for roots | BIBO stability, RH array, marginal stability, gain range |

**Boss problem 2:** A unity-feedback loop has forward path $G(s)=\dfrac{K}{s(s+2)}$. (a) Find $K$ for a damping ratio $\zeta=0.5$, and report the resulting percent overshoot and 2% settling time. (b) Use Routh–Hurwitz to give the full range of $K$ for which the closed loop is stable.

### Module 3: Root locus & frequency response

Two graphical superpowers: watch the closed-loop poles migrate as gain changes, and judge stability and robustness straight from the open-loop frequency response.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Root locus: construction | Sketch the locus of closed-loop poles by hand | angle/magnitude conditions, asymptotes, breakaway, $j\omega$ crossings |
| 3.2 | Root locus: design | Pick a gain on the locus to meet a transient spec | design point, dominant-pole placement, gain from magnitude condition |
| 3.3 | Frequency response & Bode plots | Draw magnitude/phase asymptotes for a transfer function | frequency response, decibels, corner frequencies, Bode asymptotes |
| 3.4 | Gain & phase margins | Read robustness margins off a Bode plot | gain/phase crossover, gain margin, phase margin, stability from margins |
| 3.5 | The Nyquist criterion | Judge closed-loop stability from the open-loop Nyquist plot | contour mapping, encirclements, $Z=N+P$, relation to margins |

**Boss problem 3:** For $G(s)=\dfrac{K}{s(s+2)(s+4)}$ in a unity-feedback loop: find the value of $K$ at which the root locus crosses the imaginary axis and the frequency of oscillation there. Confirm the same critical $K$ from the Routh array, and state the gain margin (in dB) when $K$ is set to one-quarter of that critical value.

### Module 4: PID & compensator design

The workhorse controllers. Understand what each knob does, tune them systematically, and shape the loop with lead/lag networks when a plain gain won't cut it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | PID control | Explain the effect of each term and predict its impact on response | proportional/integral/derivative action, error dynamics, integral windup (touch) |
| 4.2 | Tuning PID | Tune a PID controller with a systematic method | Ziegler–Nichols ultimate-gain & reaction-curve rules, trade-offs |
| 4.3 | Lead & lag compensators | Design a lead or lag network to hit a margin/error spec | lead (phase boost) vs lag (low-freq gain), pole–zero placement, Bode/root-locus design |

**Boss problem 4:** Plant $G(s)=\dfrac{1}{s(s+1)}$ in unity feedback. (a) With proportional gain $K$, find $K$ that yields a phase margin of exactly $45°$ and report the gain-crossover frequency. (b) The velocity-error requirement is $K_v\ge 5$ — argue why pure gain can't satisfy both specs at once, and state which compensator (lead or lag) you'd add and why.

### Module 5: State-space control

The modern, matrix-native view: it scales to many inputs and outputs, and it lets you place every pole and estimate states you can't measure.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | State-space modeling | Write $\dot{x}=Ax+Bu,\ y=Cx+Du$ for a system and convert to/from a transfer function | state vector, $A,B,C,D$, phase-variable form, $C(sI-A)^{-1}B$ |
| 5.2 | Solving the state equations | Compute the state response via the matrix exponential | $e^{At}$, eigenvalues as poles, modes, state transition matrix |
| 5.3 | Controllability & observability | Test whether you can steer and reconstruct the state | controllability/observability matrices, rank test, duality |
| 5.4 | Pole placement & observers | Design state feedback and a full-order observer | $u=-Kx$, Ackermann, observer gain $L$, separation principle |
| 5.5 | A taste of digital control | Explain how sampling changes the picture and when it bites | sampling, $z$-transform, $z=e^{sT}$ mapping, unit circle, aliasing (touch); LQR named only |

**Boss problem 5:** For $A=\begin{bmatrix}0&1\\0&-2\end{bmatrix}$, $B=\begin{bmatrix}0\\1\end{bmatrix}$, $C=\begin{bmatrix}1&0\end{bmatrix}$: (a) show the system is controllable and observable; (b) design state feedback $u=-Kx$ that places the closed-loop poles at $-2\pm j2$; (c) give the characteristic polynomial an observer with poles at $-8,-8$ would have, and name the principle that lets you design $K$ and the observer separately.

## Sources of truth

- Ogata, *Modern Control Engineering* — notation, Routh array, root-locus and state-space conventions.
- Nise, *Control Systems Engineering* — worked problem style and transient-response formulas.
- Franklin, Powell & Emami-Naeini, *Feedback Control of Dynamic Systems* — frequency-response and digital-control treatment.
- Åström & Murray, *Feedback Systems* — intuition and the "why feedback" framing.

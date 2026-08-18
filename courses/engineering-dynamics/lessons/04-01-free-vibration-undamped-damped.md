# Engineering Dynamics · Lesson 4.1: Free vibration — undamped & damped

> ⏱ ~15 min · Module 4: Mechanical Vibrations · Builds on: [2.1 Newton's second law for particles](02-01-newtons-second-law-particles.md), [`ode-refresher`](../../ode-refresher/syllabus.md) · Unlocks: [4.2 Forced vibration & resonance](04-02-forced-vibration-resonance.md)

## Why this matters

Pluck a guitar string, drive over a pothole, or set a building swaying in an earthquake, and the same thing happens: the system rings and — if you're lucky — settles down. This is the payoff of the whole course. Everything you learned about drawing a free-body diagram and writing $\sum F = ma$ now collapses into a single second-order ODE, $m\ddot x + c\dot x + kx = 0$, whose three possible behaviors — oscillate forever, oscillate-and-decay, or slide silently home — are governed by *one dimensionless number*. Get that number right and you know whether a car's suspension will bounce your coffee or absorb the bump. This is exactly why [control-systems](../../control-systems/syllabus.md) treats "damping ratio" as a design knob.

## The idea

A mass on a spring, pulled and released, oscillates because the spring always pulls it back toward home and it overshoots — that's simple harmonic motion (SHM), the [`mechanics-refresher`](../../mechanics-refresher/syllabus.md) idea. Left alone with no friction, it rings forever at a tempo set only by *stiffness over mass*. That tempo is the **natural frequency**.

Now add a **damper** — a shock absorber, a dashpot, honey around the piston — a device that pushes back proportional to *velocity*, not position. It bleeds energy out of the ringing. A little damping and the oscillation still happens but shrinks each cycle (**underdamped**). Add more and eventually the mass can't complete even one swing — it just eases back to rest. The exact boundary, the least damping that kills all oscillation, is **critical damping** (that's what you want in a screen door or a car suspension: home fast, no bounce). Past that (**overdamped**), extra damping is counterproductive — the mass returns *slower*, like pulling your hand through molasses. One number, the **damping ratio** $\zeta$, says which world you're in: $\zeta<1$, $\zeta=1$, or $\zeta>1$.

## The formal version

**Equation of motion.** A mass $m$ (kg) on a spring of stiffness $k$ (N/m) with a viscous damper of coefficient $c$ (N·s/m). Measure displacement $x$ (m) from the equilibrium position. Three horizontal forces act: the spring $-kx$, the damper $-c\dot x$ (opposes velocity), and nothing else. Newton's second law $\sum F = m\ddot x$ gives

$$m\ddot x = -kx - c\dot x \qquad\Longrightarrow\qquad \boxed{\,m\ddot x + c\dot x + kx = 0\,}.$$

*In words: inertia + damping + stiffness balance to zero — a free vibration has no driving force on the right-hand side.* This is precisely the homogeneous second-order linear ODE from [`ode-refresher`](../../ode-refresher/syllabus.md); its behavior is decided by the roots of the characteristic equation $mr^2 + cr + k = 0$.

**Undamped case ($c = 0$).** Divide by $m$:

$$\ddot x + \omega_n^2\, x = 0, \qquad \omega_n \equiv \sqrt{\frac{k}{m}}\ \ (\text{rad/s}), \qquad T = \frac{2\pi}{\omega_n}\ \ (\text{s}).$$

*In words: with no damping the mass rings at its natural frequency $\omega_n$ forever.* The characteristic roots are purely imaginary, $r = \pm i\omega_n$, so the solution is $x(t) = A\cos\omega_n t + B\sin\omega_n t$ — undecaying SHM. $A,B$ come from the initial conditions.

**Damping ratio.** Rewrite the full equation as $\ddot x + 2\zeta\omega_n\dot x + \omega_n^2 x = 0$. Matching coefficients defines the **critical damping coefficient** and the dimensionless **damping ratio**:

$$c_c = 2\sqrt{km} = 2m\omega_n, \qquad \zeta = \frac{c}{c_c}.$$

*In words: $\zeta$ measures your damper against the exact amount needed to just barely stop oscillation.* The characteristic roots are $r = \left(-\zeta \pm \sqrt{\zeta^2 - 1}\right)\omega_n$, and the sign of $\zeta^2-1$ picks the regime:

| Regime | Condition | Roots | Motion |
|---|---|---|---|
| **Underdamped** | $\zeta < 1$ | complex, negative real part | decaying oscillation |
| **Critically damped** | $\zeta = 1$ | real, repeated $r=-\omega_n$ | fastest non-oscillating return |
| **Overdamped** | $\zeta > 1$ | two distinct negative reals | slow non-oscillating return |

**Underdamped detail.** For $\zeta<1$ the mass oscillates, but at a *slightly slower* damped natural frequency, inside a shrinking exponential envelope $e^{-\zeta\omega_n t}$:

$$x(t) = X\,e^{-\zeta\omega_n t}\cos(\omega_d t - \phi), \qquad \omega_d = \omega_n\sqrt{1-\zeta^2}.$$

*In words: damping both drains the amplitude (the $e^{-\zeta\omega_n t}$ envelope) and drags the tempo down from $\omega_n$ to $\omega_d$.*

**Logarithmic decrement.** You can't read $\zeta$ off a ruler, but you can read it off two successive peaks. Because each cycle multiplies the amplitude by $e^{-\zeta\omega_n T_d}$ (with $T_d = 2\pi/\omega_d$), the log of the ratio of consecutive peaks is constant:

$$\delta = \ln\frac{x_i}{x_{i+1}} = \frac{2\pi\zeta}{\sqrt{1-\zeta^2}} \qquad\Longrightarrow\qquad \zeta = \frac{\delta}{\sqrt{(2\pi)^2 + \delta^2}}.$$

*In words: measure how much two successive swings shrink, take a log, and you've measured the damping.* This is the standard experimental way to find $\zeta$ for a real structure.

## Picture

![Three free-response curves on one displacement-time axis: a blue underdamped decaying sinusoid, a coral critically damped return, and a slower grey overdamped return, all from the same initial displacement](assets/04-01-free-vibration-undamped-damped-fig1.svg)

All three masses start pulled to $x_0$ and released from rest. The blue underdamped curve ($\zeta<1$) rings inside a decaying envelope — the marked peaks $x_i, x_{i+1}$ are what the logarithmic decrement compares. Coral ($\zeta=1$) is the quickest way home *without* overshooting; grey ($\zeta>1$) overshoots nothing either but dawdles. Notice the critical curve beats the overdamped one back to zero — more damping is not "more settled."

## Worked examples

**Example 1 (undamped — find the motion).** A $2\,\text{kg}$ mass on a spring of stiffness $k = 50\,\text{N/m}$, no damper. It is pulled $x_0 = 0.05\,\text{m}$ from equilibrium and released from rest. Find $\omega_n$, the period, and $x(t)$.

Natural frequency and period:

$$\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{50}{2}} = \sqrt{25} = 5\,\text{rad/s}, \qquad T = \frac{2\pi}{\omega_n} = \frac{2\pi}{5} \approx 1.26\,\text{s}.$$

With $c=0$ the solution is $x(t) = A\cos\omega_n t + B\sin\omega_n t$. Apply the initial conditions: $x(0) = 0.05 \Rightarrow A = 0.05$; $\dot x(0) = 0 \Rightarrow \omega_n B = 0 \Rightarrow B = 0$. So

$$x(t) = 0.05\cos(5t)\ \text{m}.$$

It rings forever at $5\,\text{rad/s}$ with a fixed $0.05\,\text{m}$ amplitude — no damper, no decay.

**Example 2 (damped — classify and find $\omega_d$).** A $10\,\text{kg}$ mass on $k = 1000\,\text{N/m}$ now has a viscous damper $c = 60\,\text{N·s/m}$. Find $\omega_n$, the critical damping coefficient $c_c$, the damping ratio $\zeta$, classify the regime, and find $\omega_d$.

$$\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{1000}{10}} = \sqrt{100} = 10\,\text{rad/s}.$$

Critical damping and ratio:

$$c_c = 2\sqrt{km} = 2\sqrt{(1000)(10)} = 2\sqrt{10000} = 200\,\text{N·s/m}, \qquad \zeta = \frac{c}{c_c} = \frac{60}{200} = 0.3.$$

Since $\zeta = 0.3 < 1$, the system is **underdamped** — it oscillates while decaying. The damped natural frequency:

$$\omega_d = \omega_n\sqrt{1-\zeta^2} = 10\sqrt{1 - 0.09} = 10\sqrt{0.91} \approx 9.54\,\text{rad/s}.$$

The envelope decays as $e^{-\zeta\omega_n t} = e^{-3t}$, so amplitude drops to $1/e$ in about $\tfrac13\,\text{s}$. (In [4.2](04-02-forced-vibration-resonance.md) we'll push this same system with a harmonic force and watch its amplitude peak near $\omega_n$.)

## Watch out

- **You might think adding more damping always settles the system faster.** Past critical it does the opposite: overdamped ($\zeta>1$) systems return *slower* than the critically damped one. Critical damping ($\zeta=1$) is the sweet spot — the quickest return with no overshoot, which is exactly what a car suspension or a door closer is tuned for.
- **You might use $\omega_n$ when you need $\omega_d$.** The undamped $\omega_n=\sqrt{k/m}$ sets $c_c$ and $\zeta$, but the *actual* oscillation of a damped system happens at the slower $\omega_d = \omega_n\sqrt{1-\zeta^2}$. For light damping they're close ($\zeta=0.3$ shifts it only 5%), but never identical.
- **You might forget the damper force opposes velocity, not displacement.** The spring term is $-kx$ (position), the damper term is $-c\dot x$ (velocity). Mixing them up loses the entire distinction between stiffness and dissipation — and the sign of the real part of the roots, which decides decay vs growth.

## One-liner

> $m\ddot x + c\dot x + kx = 0$ is the whole story: the ratio $\zeta = c/(2\sqrt{km})$ decides whether the mass rings-and-decays ($\zeta<1$), returns fastest without ringing ($\zeta=1$), or crawls home ($\zeta>1$).

## Problems

**P1 (🟢)** A $3\,\text{kg}$ block on a spring $k = 48\,\text{N/m}$ (no damper) is displaced $0.1\,\text{m}$ and released from rest. Find $\omega_n$, the period $T$, and write $x(t)$.

**P2 (🟡)** A $5\,\text{kg}$ mass on $k = 180\,\text{N/m}$ has a damper $c = 30\,\text{N·s/m}$. Compute $c_c$, $\zeta$, classify the regime, and find $\omega_d$.

**P3 (🔴)** An engineer taps a damped structure and measures two successive swing peaks: $x_1 = 15\,\text{mm}$ and $x_2 = 9\,\text{mm}$. Find the logarithmic decrement $\delta$ and the damping ratio $\zeta$. *(This is how control and structural engineers actually measure $\zeta$ from a test.)*

<details>
<summary>Solutions</summary>

**P1** Undamped, so $c=0$ and the motion is pure SHM.

$$\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{48}{3}} = \sqrt{16} = 4\,\text{rad/s}, \qquad T = \frac{2\pi}{\omega_n} = \frac{2\pi}{4} = \frac{\pi}{2} \approx 1.57\,\text{s}.$$

General solution $x(t) = A\cos 4t + B\sin 4t$. From $x(0) = 0.1$: $A = 0.1$. From $\dot x(0) = 0$: $B = 0$. So

$$x(t) = 0.1\cos(4t)\ \text{m}.$$

*Check.* Units: $\sqrt{(\text{N/m})/\text{kg}} = \sqrt{\text{s}^{-2}} = \text{s}^{-1}$ ✓. Released from rest at the peak, so a pure cosine is correct.

**P2** 

$$\omega_n = \sqrt{\frac{180}{5}} = \sqrt{36} = 6\,\text{rad/s}, \qquad c_c = 2\sqrt{km} = 2\sqrt{(180)(5)} = 2\sqrt{900} = 60\,\text{N·s/m}.$$

$$\zeta = \frac{c}{c_c} = \frac{30}{60} = 0.5.$$

Since $\zeta = 0.5 < 1$, the system is **underdamped**. Then

$$\omega_d = \omega_n\sqrt{1-\zeta^2} = 6\sqrt{1 - 0.25} = 6\sqrt{0.75} \approx 5.20\,\text{rad/s}.$$

*Check.* $\zeta<1$ and $\omega_d < \omega_n$, both as required for an oscillating decay. Equivalently $c_c = 2m\omega_n = 2(5)(6) = 60$ ✓.

**P3** The logarithmic decrement is the log of the ratio of successive peaks:

$$\delta = \ln\frac{x_1}{x_2} = \ln\frac{15}{9} = \ln(1.6667) \approx 0.511.$$

Invert for $\zeta$:

$$\zeta = \frac{\delta}{\sqrt{(2\pi)^2 + \delta^2}} = \frac{0.511}{\sqrt{39.48 + 0.261}} = \frac{0.511}{\sqrt{39.74}} = \frac{0.511}{6.304} \approx 0.081.$$

*Check.* For light damping the small-$\zeta$ approximation $\zeta \approx \delta/2\pi = 0.511/6.283 = 0.0813$ agrees to three digits — expected since $\zeta \ll 1$ makes $\sqrt{1-\zeta^2}\approx1$. A modestly damped structure, $\zeta \approx 8\%$. ✓

</details>

## Flashback

**From Lesson 3.4 (Rigid-body kinetics in 2D):** A uniform **solid sphere** of mass $m$ and radius $r$ ($I_G = \tfrac25 mr^2$) rolls without slipping down an incline of angle $\theta = 25^\circ$. Find the acceleration of its center $a_G$. (Use $g = 9.81\,\text{m/s}^2$; fresh variant — a sphere, not the cylinder from the boss problem.)

<details>
<summary>Solution</summary>

Draw the FBD: gravity component $mg\sin\theta$ down the incline, friction $f$ up the incline, normal force perpendicular. Two equations of plane motion.

Along the incline ($\sum F = m a_G$):

$$mg\sin\theta - f = m a_G.$$

Moment about the center $G$ ($\sum M_G = I_G\alpha$), with only friction producing a moment (arm $r$):

$$f\,r = I_G\,\alpha = \tfrac25 mr^2\,\alpha.$$

Rolling without slipping ties the two: $a_G = r\alpha \Rightarrow \alpha = a_G/r$. Substitute:

$$f = \tfrac25 mr^2\cdot\frac{a_G/r}{r} = \tfrac25 m a_G.$$

Put that back into the force equation:

$$mg\sin\theta - \tfrac25 m a_G = m a_G \;\Longrightarrow\; g\sin\theta = \tfrac75 a_G \;\Longrightarrow\; a_G = \tfrac57 g\sin\theta.$$

Numerically, with $\theta = 25^\circ$ ($\sin 25^\circ \approx 0.4226$):

$$a_G = \tfrac57 (9.81)(0.4226) \approx 2.96\,\text{m/s}^2.$$

*Check.* The general rolling result is $a_G = \dfrac{g\sin\theta}{1 + I_G/(mr^2)}$; for a sphere $I_G/(mr^2) = \tfrac25$, giving the $\tfrac57$ factor — less than the cylinder's $\tfrac23$ because the sphere concentrates less mass at the rim, so it accelerates faster. ✓

</details>

## Connections

- **Backward:** the equation of motion is just [2.1](02-01-newtons-second-law-particles.md)'s $\sum F = ma$ applied to a spring–damper free-body diagram — inertia, stiffness, and dissipation, nothing new mechanically.
- **Forward:** [4.2 Forced vibration & resonance](04-02-forced-vibration-resonance.md) puts a driving force $F_0\cos\Omega t$ on the right-hand side; the steady-state amplitude blows up when $\Omega$ nears $\omega_n$, and $\zeta$ is exactly what limits the peak.
- **Sideways (ODEs ↔ control):** this is the constant-coefficient second-order ODE of [`ode-refresher`](../../ode-refresher/syllabus.md) in physical clothing — $\zeta<1$ is its complex-roots case, $\zeta>1$ its distinct-real-roots case, $\zeta=1$ the repeated root. The very same $\omega_n$ and $\zeta$ reappear as the standard second-order system in [control-systems](../../control-systems/syllabus.md), where they set overshoot and settling time.

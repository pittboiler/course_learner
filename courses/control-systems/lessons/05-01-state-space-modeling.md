# Control Systems · Lesson 5.1: State-space modeling

> ⏱ ~15 min · Module 5: State-space control · Builds on: [1.2 Modeling systems as ODEs](01-02-modeling-systems-as-odes.md), [1.4 Transfer functions, poles & zeros](01-04-transfer-functions-poles-zeros.md), [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) · Unlocks: [5.2 Solving the state equations](05-02-solving-state-equations.md), [5.3 Controllability & observability](05-03-controllability-observability.md)

## Why this matters

Everything so far has been *classical* control: one input, one output, one transfer function, and a plane you draw dots on. It works beautifully — and it has a ceiling. A quadrotor has four motors and six degrees of freedom. A distillation column has a dozen valves and a dozen temperatures. A transfer function cannot describe those, because $G(s) = Y(s)/U(s)$ presumes there is *a* $Y$ and *a* $U$.

Module 5 changes representation, not subject. Same systems, same poles, same stability question — written as vectors and matrices instead of ratios of polynomials. The payoff is that everything scales: many inputs, many outputs, initial conditions carried along for free, internal variables visible instead of hidden, and a form that numerical software and every modern controller actually runs on. The cost is real and I'll name it up front: you lose the picture. There is no root locus of a matrix, no Bode plot you can sketch by hand from $A$. You trade eyes for reach.

## The idea

Here is the honest indictment of the transfer function.

1. **It is a scalar.** One input, one output. MIMO systems need a *matrix* of transfer functions and the bookkeeping explodes.
2. **It assumes zero initial conditions.** We threw the ICs away in [1.3](01-03-laplace-transform-toolkit.md) to get $d/dt \to s$. Fine for design specs; useless if you're asking "the tank is already half full, now what?"
3. **It only sees the terminals.** $G(s)$ tells you what comes out the wire. It says nothing about the current inside the inductor, the internal temperature, the rotor angle. Those can be doing something alarming while $y(t)$ looks perfectly calm — see [5.3](05-03-controllability-observability.md), where that turns from a curiosity into a hazard.

The fix is to stop asking "what does the output do?" and start asking "**what does the system need to remember?**"

Think about it physically. To predict a mass–spring–damper's future you need to know where it is *and* how fast it's going — two numbers. To predict an RLC circuit you need the capacitor's voltage and the inductor's current — two numbers. Give me those, plus the input from now on, and I can run the system forward forever. That short list of numbers is the **state**, and it is the system's memory.

And there's a beautiful heuristic for finding it: **states usually correspond to energy storage.** Anything that can bank energy and give it back later is something the system remembers.

| Element | Energy stored | Natural state variable |
|---|---|---|
| Spring | $\tfrac12 kx^2$ | compression / extension $x$ |
| Mass | $\tfrac12 mv^2$ | velocity $v$ |
| Capacitor | $\tfrac12 Cv_C^2$ | voltage $v_C$ |
| Inductor | $\tfrac12 Li_L^2$ | current $i_L$ |
| Thermal mass | $mc\,T$ | temperature $T$ |
| Tank | $\rho g A h^2/2$ | level $h$ |

Count the independent energy stores and you have counted the states. A damper and a resistor store nothing — they only dissipate — so they contribute no states, which is exactly why an RC circuit is first order and an RLC circuit is second order. This heuristic will pick your state vector correctly in nearly every physical problem you meet.

## The formal version

**Definition (state).** The **state** of a system at time $t_0$ is the smallest set of variables $x_1(t_0), \dots, x_n(t_0)$ such that knowing them, together with the input $u(t)$ for all $t \ge t_0$, determines $y(t)$ and all the $x_i(t)$ for $t \ge t_0$. *In words: the state is the minimum you'd have to write on a sticky note so someone else could take over the simulation.* The integer $n$ is the **order** of the system, and $x = [x_1 \; \cdots \; x_n]^T \in \mathbb{R}^n$ is the **state vector**.

**The equations.** A linear time-invariant system is

$$\boxed{\;\dot{x} = Ax + Bu, \qquad y = Cx + Du\;}$$

*In words: the rate of change of the state is a linear combination of the current state and the current input; the output is a linear combination of the same two.* The first is the **state equation** — $n$ coupled *first-order* ODEs replacing one $n$th-order ODE. The second is the **output equation**, and it's pure algebra, no derivatives.

With $n$ states, $m$ inputs, and $p$ outputs:

| Matrix | Size | Name | What it does |
|---|---|---|---|
| $A$ | $n \times n$ | system / dynamics matrix | how the state drives itself — the physics |
| $B$ | $n \times m$ | input matrix | where the actuators push |
| $C$ | $p \times n$ | output matrix | what the sensors see |
| $D$ | $p \times m$ | feedthrough matrix | input leaking straight to the output |

SISO is just $m = p = 1$: $B$ is a column, $C$ is a row, $D$ is a scalar. **$D = 0$ whenever the plant is strictly proper** (numerator degree strictly below denominator degree, the usual case from [1.4](01-04-transfer-functions-poles-zeros.md)) — physically, no instantaneous path from input to output. A nonzero $D$ means a jolt on $u$ shows up in $y$ with zero delay, which happens for proper-but-not-strictly-proper plants like $\frac{s+1}{s+2}$.

Note what $A$ is *not*: it is not a mystery. It is a linear map on state space ([`linalg-refresher` 2.1](../../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md)), and its eigenvalues are the entire dynamic story — which is the punchline of this lesson.

### From an ODE to state space: phase variables

Given

$$\ddot{y} + a_1\dot{y} + a_0 y = b_0 u,$$

choose the output and its derivatives as states — the **phase variables**:

$$x_1 = y, \qquad x_2 = \dot{y}.$$

Then $\dot{x}_1 = x_2$ by definition, and $\dot{x}_2 = \ddot{y} = -a_0 x_1 - a_1 x_2 + b_0 u$ by rearranging the ODE. Stacked:

$$\dot{x} = \begin{bmatrix} 0 & 1 \\ -a_0 & -a_1 \end{bmatrix} x + \begin{bmatrix} 0 \\ b_0 \end{bmatrix} u, \qquad y = \begin{bmatrix} 1 & 0 \end{bmatrix} x.$$

*In words: the top row just says "the derivative of position is velocity"; the bottom row is the actual physics.* This is the **phase-variable** or **controllable canonical** form.

The pattern generalizes verbatim. For $y^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_1\dot{y} + a_0 y = b_0 u$, take $x_i = y^{(i-1)}$:

$$A = \begin{bmatrix} 0 & 1 & 0 & \cdots & 0 \\ 0 & 0 & 1 & \cdots & 0 \\ \vdots & & & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & 1 \\ -a_0 & -a_1 & -a_2 & \cdots & -a_{n-1} \end{bmatrix}, \quad B = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \\ b_0 \end{bmatrix}, \quad C = \begin{bmatrix} 1 & 0 & \cdots & 0\end{bmatrix}.$$

**Ones on the superdiagonal, negated coefficients along the bottom row, $b_0$ in the last slot of $B$.** This is called a **companion matrix**, and its characteristic polynomial is $s^n + a_{n-1}s^{n-1} + \cdots + a_0$ — literally the ODE's coefficients read back. You can write it down by inspection.

**Worked, with real numbers.** The mass–spring–damper of [1.2](01-02-modeling-systems-as-odes.md) with $m = 1$ kg, $b = 3$ N·s/m, $k = 2$ N/m, input force $f$ (N), output position $x$ (m):

$$\ddot{x} + 3\dot{x} + 2x = f.$$

Energy check: a spring and a mass, two stores, so $n = 2$ — and the damper contributes nothing, as promised. Take $x_1 = x$ (position, spring energy) and $x_2 = \dot{x}$ (velocity, kinetic energy):

$$\dot{x} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}x + \begin{bmatrix} 0 \\ 1 \end{bmatrix} f, \qquad y = \begin{bmatrix} 1 & 0\end{bmatrix} x, \quad D = 0.$$

Eigenvalues of $A$: $\det(sI - A) = \det\begin{bmatrix} s & -1 \\ 2 & s+3\end{bmatrix} = s(s+3) + 2 = s^2 + 3s + 2 = (s+1)(s+2)$, so $\lambda = -1, -2$ — exactly the poles of $G(s) = \frac{1}{s^2+3s+2}$ from Module 1. Not a coincidence; see below.

### The state vector is not unique

This trips everyone. Pick any invertible $n \times n$ matrix $T$ and define new coordinates $z = Tx$. Then $x = T^{-1}z$ and

$$\dot{z} = T\dot{x} = T(Ax + Bu) = \underbrace{TAT^{-1}}_{A'}z + \underbrace{TB}_{B'}u, \qquad y = \underbrace{CT^{-1}}_{C'}z + \underbrace{D}_{D'}u.$$

*In words: relabel the state however you like and you get a different-looking model of the identical system.* There are infinitely many valid $(A,B,C,D)$ for one physical plant. So the matrices themselves are **not** the physical content.

What *is* invariant? The eigenvalues. One line:

$$\det(sI - TAT^{-1}) = \det\!\big(T(sI - A)T^{-1}\big) = \det T \cdot \det(sI-A)\cdot \tfrac{1}{\det T} = \det(sI-A).$$

**The characteristic polynomial survives a similarity transformation untouched.** That is why $\operatorname{eig}(A)$, not $A$, carries the physics — and it's the same fact you proved in [`linalg-refresher` 3.2](../../linalg-refresher/lessons/03-02-diagonalization.md).

The most useful coordinate choice is the one that makes $A'$ **diagonal** — **modal form** — obtained by taking $T^{-1} = P$, the matrix of eigenvectors. Then the state equations decouple completely: each $\dot{z}_i = \lambda_i z_i + (\ldots)u$ evolves on its own, and you are looking at the system's natural modes one at a time. For the mass–spring–damper above, eigenvectors for $\lambda = -1, -2$ are $\begin{bmatrix}1\\-1\end{bmatrix}$ and $\begin{bmatrix}1\\-2\end{bmatrix}$, so with

$$P = \begin{bmatrix} 1 & 1 \\ -1 & -2\end{bmatrix}, \quad T = P^{-1} = \begin{bmatrix} 2 & 1 \\ -1 & -1 \end{bmatrix} \;\Longrightarrow\; A' = \begin{bmatrix}-1 & 0 \\ 0 & -2\end{bmatrix},\; B' = \begin{bmatrix}1\\-1\end{bmatrix},\; C' = \begin{bmatrix}1 & 1\end{bmatrix}.$$

(Check $P^{-1}$: $\det P = -2 + 1 = -1$, so $P^{-1} = \frac{1}{-1}\begin{bmatrix}-2 & -1\\ 1 & 1\end{bmatrix} = \begin{bmatrix}2 & 1\\ -1 & -1\end{bmatrix}$, and $P^{-1}P = \begin{bmatrix}2-1 & 2-2\\ -1+1 & -1+2\end{bmatrix} = I$. ✓) Same eigenvalues, unrecognizable matrices.

### State space $\to$ transfer function

Laplace-transform the state equation with **zero initial conditions**, using $\mathcal{L}\{\dot{x}\} = sX(s)$ componentwise:

$$sX(s) = AX(s) + BU(s) \;\Longrightarrow\; (sI - A)X(s) = BU(s) \;\Longrightarrow\; X(s) = (sI-A)^{-1}BU(s).$$

Substitute into $Y(s) = CX(s) + DU(s)$:

$$\boxed{\;G(s) = \frac{Y(s)}{U(s)} = C(sI-A)^{-1}B + D\;}$$

*In words: to get the transfer function, invert one matrix and sandwich it between $C$ and $B$.* (For MIMO this is a $p\times m$ **matrix** of transfer functions — the formula doesn't change at all. That's the scaling promise, delivered.)

**Now the structural fact.** By the adjugate formula ([`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md)),

$$(sI-A)^{-1} = \frac{\operatorname{adj}(sI-A)}{\det(sI-A)} \;\Longrightarrow\; G(s) = \frac{C\operatorname{adj}(sI-A)B}{\det(sI-A)} + D.$$

The denominator is $\det(sI-A)$ — the characteristic polynomial of $A$. But the characteristic equation of the plant, from [1.4](01-04-transfer-functions-poles-zeros.md), is exactly "denominator $= 0$". Therefore:

> **The poles of $G(s)$ are the eigenvalues of $A$.**

Two vocabularies, one set of numbers. Everything you learned about pole locations in Modules 2 and 3 transfers wholesale. In particular, stability:

$$\text{internally stable} \iff \operatorname{Re}\{\lambda_i(A)\} < 0 \text{ for every eigenvalue } \lambda_i.$$

Same left-half-plane condition as [2.4](02-04-stability-routh-hurwitz.md), now an eigenvalue statement — and since $\det(sI-A)$ *is* the characteristic polynomial, you can still run a Routh array on it if you'd rather not compute eigenvalues. [5.2](05-02-solving-state-equations.md) shows why the eigenvalues govern, by actually solving $\dot{x} = Ax$.

**One caveat, and it matters.** The numerator $C\operatorname{adj}(sI-A)B$ can share a root with $\det(sI-A)$, and the two cancel. Then $G(s)$ has **fewer poles than $A$ has eigenvalues** — a **hidden mode**, alive inside the system but invisible at the terminals. If it's a stable mode, no harm. If it's in the right half-plane, your transfer function says "stable" while the hardware saturates. That gap is precisely what [5.3](05-03-controllability-observability.md) is about.

## Picture

![Block diagram of a state-space model: u enters through B into a summing junction, then an integrator block produces x, which is read out through C to y, with the A matrix drawn as a coral feedback path from x back to the summing junction, and a grey D feedthrough path over the top](assets/05-01-fig1.svg)

Every state-space model on earth is this diagram. The integrator is the only dynamic element — everything else is a constant-matrix multiply — which is why analog computers were literally built this way, and why $A$'s eigenvalues are the whole story: $A$ is the gain wrapped around the integrator.

Concretely, for the mass–spring–damper:

![Two panels: the second-order ODE ẍ + 3ẋ + 2x = f split into the two first-order equations ẋ₁ = x₂ and ẋ₂ = −2x₁ − 3x₂ + f; below, the same system as a chain of two integrators with coral feedback gains −3 from the velocity node and −2 from the position node](assets/05-01-fig2.svg)

The two coral gains in the bottom panel are the bottom row of $A$. Reading the wiring off the matrix is a skill worth ten minutes of staring.

## Worked examples

**Example 1 (both directions, one system).** Take the plant from **Boss problem 5** — and note this is the *same* plant $\frac{1}{s(s+2)}$ that ran through Modules 2 and 3, so you're about to see one system wearing both uniforms:

$$A = \begin{bmatrix} 0 & 1 \\ 0 & -2\end{bmatrix}, \qquad B = \begin{bmatrix}0\\1\end{bmatrix}, \qquad C = \begin{bmatrix}1 & 0\end{bmatrix}, \qquad D = 0.$$

Physically: $x_1$ is position, $x_2$ is velocity, $\dot{x}_2 = -2x_2 + u$ is a mass with viscous drag being pushed. No spring — hence the free integrator.

*Step 1: form $sI - A$.* Remember $sI$ means $s$ times the identity, so $s$ lands on the diagonal only:

$$sI - A = \begin{bmatrix} s & 0 \\ 0 & s\end{bmatrix} - \begin{bmatrix}0 & 1\\ 0 & -2\end{bmatrix} = \begin{bmatrix} s & -1 \\ 0 & s+2 \end{bmatrix}.$$

*Step 2: determinant.* Upper triangular, so multiply the diagonal:

$$\det(sI-A) = s(s+2) - (-1)(0) = s(s+2) = s^2 + 2s.$$

Eigenvalues $\lambda = 0, -2$. (One at the origin — marginally stable, an integrator, exactly as [2.3](02-03-steady-state-error-system-type.md) would classify a Type 1 plant.)

*Step 3: adjugate.* For $\begin{bmatrix}a & b\\ c& d\end{bmatrix}$ the adjugate is $\begin{bmatrix}d & -b \\ -c & a\end{bmatrix}$ — swap the diagonal, negate the off-diagonal. With $a=s$, $b=-1$, $c=0$, $d=s+2$:

$$\operatorname{adj}(sI-A) = \begin{bmatrix} s+2 & 1 \\ 0 & s\end{bmatrix}, \qquad (sI-A)^{-1} = \frac{1}{s(s+2)}\begin{bmatrix} s+2 & 1 \\ 0 & s\end{bmatrix}.$$

*Verify the inverse — never skip this.* Multiply it by $(sI-A)$ and demand $I$:

$$\begin{bmatrix} s & -1 \\ 0 & s+2 \end{bmatrix}\begin{bmatrix} s+2 & 1 \\ 0 & s\end{bmatrix} = \begin{bmatrix} s(s+2) + 0 & s - s \\ 0 & (s+2)s\end{bmatrix} = s(s+2)\,I.$$

Dividing through by $s(s+2)$ gives exactly $I$. ✓

*Step 4: sandwich.*

$$(sI-A)^{-1}B = \frac{1}{s(s+2)}\begin{bmatrix} s+2 & 1 \\ 0 & s\end{bmatrix}\begin{bmatrix}0\\1\end{bmatrix} = \frac{1}{s(s+2)}\begin{bmatrix}1\\ s\end{bmatrix},$$

$$G(s) = C(sI-A)^{-1}B + D = \begin{bmatrix}1 & 0\end{bmatrix}\frac{1}{s(s+2)}\begin{bmatrix}1\\ s\end{bmatrix} + 0 = \boxed{\frac{1}{s(s+2)}}.$$

*Check.* The poles of $G$ are $0$ and $-2$, matching $\operatorname{eig}(A) = \{0,-2\}$ ✓. Nothing cancelled, so no hidden modes here. And this is Boss problem 2's plant with $K=1$ — every root-locus and Routh conclusion you drew about it applies verbatim.

**Example 2 (the reverse trip, plus a warning).** Convert $G(s) = \dfrac{s+3}{s^2+5s+6}$ to state space.

Cross-multiply $\frac{Y}{U}$ and invert the transform ($s \leftrightarrow d/dt$, zero ICs): $\ddot{y} + 5\dot{y} + 6y = \dot{u} + 3u$. The $\dot{u}$ is awkward for the naive phase-variable recipe, so use the standard trick: introduce an intermediate variable $w$ with $\ddot{w} + 5\dot{w} + 6w = u$, and set $y = \dot{w} + 3w$ (linearity makes this legitimate). Now phase variables on $w$: $x_1 = w$, $x_2 = \dot{w}$, giving

$$A = \begin{bmatrix}0 & 1 \\ -6 & -5\end{bmatrix}, \quad B = \begin{bmatrix}0\\1\end{bmatrix}, \quad C = \begin{bmatrix}3 & 1\end{bmatrix}, \quad D = 0.$$

*In words: the numerator coefficients go into $C$; the denominator coefficients go into the bottom row of $A$.* Verify by going back:

$$sI - A = \begin{bmatrix}s & -1\\ 6 & s+5\end{bmatrix}, \quad \det = s(s+5)+6 = s^2+5s+6, \quad \operatorname{adj} = \begin{bmatrix}s+5 & 1 \\ -6 & s\end{bmatrix},$$

$$(sI-A)^{-1}B = \frac{1}{s^2+5s+6}\begin{bmatrix}1\\ s\end{bmatrix}, \qquad G = \begin{bmatrix}3&1\end{bmatrix}\frac{1}{s^2+5s+6}\begin{bmatrix}1\\s\end{bmatrix} = \frac{s+3}{s^2+5s+6}.$$

Back to the transfer function we started from. ✓

**The warning:** $G(s) = \frac{s+3}{(s+2)(s+3)}$ — the zero at $-3$ sits on top of the pole at $-3$. If you had cancelled first and realized $\frac{1}{s+2}$ as a *first-order* model, you'd have a perfectly good transfer function and a physically wrong system: the real hardware still has a mode at $-3$. Here it's harmless (it decays). Had the shared root been at $+3$, the transfer function would look stable while the state ran away. **Never cancel a pole and a zero without asking what happens to the mode you just erased.**

## Watch out

- **You might think $sI - A$ means "add $s$ to every entry of $-A$."** It does not. $sI$ is $s$ on the diagonal and **zeros everywhere else**. For $A = \begin{bmatrix}0&1\\0&-2\end{bmatrix}$ the correct $sI - A = \begin{bmatrix}s & -1\\ 0 & s+2\end{bmatrix}$ — the off-diagonal entries are just $-A$'s, untouched by $s$. This single slip accounts for most wrong answers on this material.
- **You might think there is one right state vector.** There are infinitely many, all related by $z = Tx$, all equally valid. Two people can hand in $A$ matrices with no entry in common and both be correct — check by comparing eigenvalues (or $G(s)$), never entries. The physical choice (energy-storage variables) and the tidy choice (phase variables) are usually *different* models of the same plant.
- **You might think "poles of $G$" and "eigenvalues of $A$" are interchangeable.** Eigenvalues of $A$ $\supseteq$ poles of $G$, with equality only when nothing cancels. The transfer function shows you the modes that are both reachable from $u$ and visible at $y$; $A$ shows you all of them. When those sets differ, believe $A$ — it's the one connected to the hardware.

## One-liner

> Replace one $n$th-order ODE with $n$ first-order ones stacked into $\dot{x} = Ax + Bu$, $y = Cx + Du$; the matrices depend on your choice of coordinates but the eigenvalues of $A$ don't, and those eigenvalues are the poles of $G(s) = C(sI-A)^{-1}B + D$.

## Problems

**P1 (🟢)** A system obeys $\ddot{y} + 7\dot{y} + 12y = 3u$, with output $y$. Write it in phase-variable form ($A$, $B$, $C$, $D$), then state the eigenvalues of $A$ and whether the system is stable — without computing $G(s)$.

**P2 (🟡)** A series RLC circuit driven by source voltage $v_{\text{in}}$ has $L = 1$ H, $R = 3\ \Omega$, and capacitance $C_e = 0.5$ F (subscript $e$ so it doesn't collide with the output matrix $C$); the output is the capacitor voltage $v_C$. Choose states by the energy-storage heuristic, write $(A,B,C,D)$, and compute $G(s) = V_C(s)/V_{\text{in}}(s)$ via $C(sI-A)^{-1}B + D$. Verify your answer against the impedance voltage divider.

**P3 (🔴)** A system has

$$A = \begin{bmatrix}-1 & 0 \\ 0 & 2\end{bmatrix}, \quad B = \begin{bmatrix}1\\1\end{bmatrix}, \quad C = \begin{bmatrix}1 & 0\end{bmatrix}, \quad D = 0.$$

Compute $G(s)$. Compare the poles of $G$ to the eigenvalues of $A$, then answer: is this system safe to operate? What exactly went wrong?

<details>
<summary>Solutions</summary>

**P1** Match to $\ddot{y} + a_1\dot{y} + a_0 y = b_0 u$: $a_1 = 7$, $a_0 = 12$, $b_0 = 3$. Take $x_1 = y$, $x_2 = \dot{y}$, so $\dot{x}_1 = x_2$ and $\dot{x}_2 = \ddot{y} = -12x_1 - 7x_2 + 3u$:

$$A = \begin{bmatrix} 0 & 1 \\ -12 & -7\end{bmatrix}, \quad B = \begin{bmatrix}0\\3\end{bmatrix}, \quad C = \begin{bmatrix}1 & 0\end{bmatrix}, \quad D = 0.$$

$D = 0$ because the ODE has no derivative of $u$ on the right, so nothing reaches $y$ instantaneously. Eigenvalues:

$$\det(sI-A) = \det\begin{bmatrix} s & -1 \\ 12 & s+7\end{bmatrix} = s(s+7) + 12 = s^2 + 7s + 12 = (s+3)(s+4),$$

so $\lambda = -3, -4$. Both have negative real part, so the system is **stable** — and being real and distinct, it's overdamped (two decaying exponentials, no ringing), per [2.2](02-02-second-order-response.md).

*Check.* The companion form promises $\det(sI-A) = s^2 + a_1 s + a_0 = s^2 + 7s + 12$, and that's what came out ✓. Sanity on the eigenvalues: $(-3)(-4) = 12 = a_0 = \det A$ and $(-3)+(-4) = -7 = -a_1 = \operatorname{tr}A$ ✓ (product of eigenvalues is the determinant, sum is the trace).

**P2** Two energy stores — the inductor (current $i_L$) and the capacitor (voltage $v_C$) — so $n = 2$. Take $x_1 = i_L$ (A), $x_2 = v_C$ (V). The element laws are $v_L = L\,di_L/dt$ and $i_C = C_e\,dv_C/dt$ ([`circuits` 3.1](../../circuits/lessons/03-01-capacitors-and-inductors.md)).

KVL around the loop: $v_{\text{in}} = Ri_L + L\dfrac{di_L}{dt} + v_C$, so

$$\frac{di_L}{dt} = -\frac{R}{L}i_L - \frac{1}{L}v_C + \frac{1}{L}v_{\text{in}} = -3i_L - v_C + v_{\text{in}}.$$

In a series circuit the capacitor carries the loop current, so $C_e\dfrac{dv_C}{dt} = i_L$:

$$\frac{dv_C}{dt} = \frac{1}{C_e}i_L = 2i_L.$$

Hence

$$A = \begin{bmatrix}-3 & -1 \\ 2 & 0\end{bmatrix}, \quad B = \begin{bmatrix}1\\0\end{bmatrix}, \quad C = \begin{bmatrix}0 & 1\end{bmatrix}, \quad D = 0.$$

Now convert:

$$sI - A = \begin{bmatrix}s+3 & 1 \\ -2 & s\end{bmatrix}, \qquad \det(sI-A) = s(s+3) - (1)(-2) = s^2 + 3s + 2 = (s+1)(s+2).$$

Adjugate (swap diagonal, negate off-diagonal): $\operatorname{adj} = \begin{bmatrix} s & -1 \\ 2 & s+3\end{bmatrix}$.

*Verify the inverse:*

$$\begin{bmatrix}s+3 & 1 \\ -2 & s\end{bmatrix}\begin{bmatrix} s & -1 \\ 2 & s+3\end{bmatrix} = \begin{bmatrix} s(s+3)+2 & -(s+3)+(s+3) \\ -2s+2s & 2 + s(s+3)\end{bmatrix} = (s^2+3s+2)\,I.$$

Dividing through by $\det(sI-A) = s^2+3s+2$ gives $I$. ✓

Then

$$(sI-A)^{-1}B = \frac{1}{s^2+3s+2}\begin{bmatrix} s & -1 \\ 2 & s+3\end{bmatrix}\begin{bmatrix}1\\0\end{bmatrix} = \frac{1}{s^2+3s+2}\begin{bmatrix}s\\2\end{bmatrix},$$

$$G(s) = \begin{bmatrix}0 & 1\end{bmatrix}\frac{1}{s^2+3s+2}\begin{bmatrix}s\\2\end{bmatrix} = \frac{2}{s^2+3s+2} = \frac{2}{(s+1)(s+2)}.$$

*Check against the voltage divider* ([`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md)): the capacitor's share of the series impedance is

$$\frac{V_C}{V_{\text{in}}} = \frac{1/(sC_e)}{R + sL + 1/(sC_e)} = \frac{1}{s^2LC_e + sRC_e + 1} = \frac{1}{0.5s^2 + 1.5s + 1} = \frac{2}{s^2+3s+2}.$$

Identical. ✓ Note the eigenvalues of $A$ are $-1, -2$, matching the poles — and matching the mass–spring–damper of the lesson body, because $L \leftrightarrow m$, $R \leftrightarrow b$, $1/C_e \leftrightarrow k$ is the force–voltage analogy of [1.2](01-02-modeling-systems-as-odes.md).

**P3** $A$ is diagonal, so the inversion is easy:

$$sI - A = \begin{bmatrix} s+1 & 0 \\ 0 & s-2\end{bmatrix}, \qquad (sI-A)^{-1} = \begin{bmatrix} \frac{1}{s+1} & 0 \\ 0 & \frac{1}{s-2}\end{bmatrix}.$$

*Verify:* the product of the two diagonal matrices is $\operatorname{diag}\!\big(\frac{s+1}{s+1}, \frac{s-2}{s-2}\big) = I$ ✓. Then

$$(sI-A)^{-1}B = \begin{bmatrix} \frac{1}{s+1} \\ \frac{1}{s-2}\end{bmatrix}, \qquad G(s) = \begin{bmatrix}1 & 0\end{bmatrix}\begin{bmatrix} \frac{1}{s+1} \\ \frac{1}{s-2}\end{bmatrix} = \frac{1}{s+1}.$$

$G$ has **one** pole, at $-1$. $A$ has **two** eigenvalues, $-1$ and $+2$. The full expression before simplification is

$$G(s) = \frac{C\operatorname{adj}(sI-A)B}{\det(sI-A)} = \frac{s-2}{(s+1)(s-2)},$$

and the factor $(s-2)$ cancelled top and bottom.

**No, this system is not safe.** The mode $e^{2t}$ is alive in $x_2$: from $\dot{x}_2 = 2x_2 + u$, any nonzero $u$ or nonzero $x_2(0)$ makes $x_2$ grow without bound, and real hardware saturates, overheats, or breaks. What went wrong is that $C = \begin{bmatrix}1 & 0\end{bmatrix}$ never looks at $x_2$ — the unstable mode is **unobservable**, so it is invisible in $G(s)$. The transfer function's clean bill of health is a lie of omission.

*Check.* Solve directly: with $u = 0$ and $x(0) = [0, \epsilon]^T$, the decoupled equations give $x_1(t) = 0$, $x_2(t) = \epsilon e^{2t}$. The output $y = x_1 = 0$ forever — perfectly quiet at the terminals while the internal state explodes ✓. This is exactly the failure [5.3](05-03-controllability-observability.md) gives a test for, and the reason internal stability (eigenvalues) is the stronger notion than BIBO stability (poles).

</details>

## Flashback

**From Lesson 2.4 (Stability & Routh–Hurwitz):** A unity-feedback loop has forward path $G(s) = \dfrac{K}{s(s+1)(s+3)}$. Use the Routh array to find the full range of $K$ for closed-loop stability, and the oscillation frequency at the upper limit.

<details>
<summary>Solution</summary>

Closed-loop characteristic equation, $1 + G(s) = 0$:

$$s(s+1)(s+3) + K = 0 \;\Longrightarrow\; s^3 + 4s^2 + 3s + K = 0,$$

expanding $s(s+1)(s+3) = (s^2+s)(s+3) = s^3 + 4s^2 + 3s$.

Routh array:

$$\begin{array}{c|cc}
s^3 & 1 & 3 \\
s^2 & 4 & K \\
s^1 & \dfrac{4\cdot 3 - 1\cdot K}{4} = \dfrac{12-K}{4} & 0 \\
s^0 & K &
\end{array}$$

No sign changes in the first column requires every entry positive:

$$4 > 0, \qquad \frac{12-K}{4} > 0 \;\Rightarrow\; K < 12, \qquad K > 0.$$

$$\boxed{0 < K < 12}$$

At $K = 12$ the $s^1$ row vanishes and the system is marginally stable. The auxiliary polynomial comes from the row above: $4s^2 + K = 4s^2 + 12 = 0 \Rightarrow s^2 = -3 \Rightarrow s = \pm j\sqrt{3}$, so it oscillates at $\omega = \sqrt{3} \approx 1.73$ rad/s.

*Check.* Substitute $s = j\sqrt3$ and $K=12$ into the characteristic polynomial: $(j\sqrt3)^3 + 4(j\sqrt3)^2 + 3(j\sqrt3) + 12 = -3\sqrt3 j - 12 + 3\sqrt3 j + 12 = 0$ ✓. Cross-check with the third-order rule of thumb ($a_2a_1 > a_3a_0$ for $s^3+a_2s^2+a_1s+a_0$): $4\cdot 3 = 12 > K$, same answer ✓. Sanity: $K=0$ gives an open loop with a pole at the origin — marginal, not stable — so the strict inequality $K>0$ is right.

**Tie-in to today:** that characteristic polynomial $s^3+4s^2+3s+K$ is exactly $\det(sI - A_{\text{cl}})$ for the closed-loop system written in state space. Routh–Hurwitz never stopped being a legal move; it's now a test on a matrix's eigenvalues rather than on a polynomial you got from block algebra.

</details>

## Connections

- **Backward:** the ODEs come straight from [1.2](01-02-modeling-systems-as-odes.md) — this lesson just stacks them differently. $\det(sI-A) = 0$ is [1.4](01-04-transfer-functions-poles-zeros.md)'s characteristic equation, the left-half-plane rule is [2.4](02-04-stability-routh-hurwitz.md)'s stability criterion, and eigenvalues, eigenvectors, similarity, and diagonalization are [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) and [3.2](../../linalg-refresher/lessons/03-02-diagonalization.md) cashing in. You also met $\dot{x} = Ax$ as a system of ODEs in [`ode-refresher` 3.1](../../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md); the phase portraits there are pictures of exactly these modes.
- **Forward:** [5.2](05-02-solving-state-equations.md) solves $\dot{x} = Ax + Bu$ with the matrix exponential $e^{At}$, proving the eigenvalue claim rather than asserting it. [5.3](05-03-controllability-observability.md) gives rank tests for the hidden modes flagged above. [5.4](05-04-pole-placement-observers.md) is the payoff: with $u = -Kx$ the dynamics become $\dot{x} = (A - BK)x$, and you can put *every* eigenvalue exactly where you want — a strictly stronger design move than anything root locus ([3.1](03-01-root-locus-construction.md)) or loop shaping ([3.3](03-03-frequency-response-bode-plots.md)) can do, which is what you bought with the intuition you gave up.
- **Sideways:** the integrator-chain figure is the continuous-time twin of the delay-chain realizations for difference equations in [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md) — same block diagram, integrators swapped for unit delays, which is exactly the move [5.5](05-05-digital-control.md) makes. In robotics and orbital mechanics, "the state" is the everyday word for the thing being estimated ([`robotics`](../../robotics/syllabus.md), [`orbital-mechanics`](../../orbital-mechanics/syllabus.md)); this lesson is where that word gets its definition.

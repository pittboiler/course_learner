# Differential Equations · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

A differential equation hands you a *rule for change* and asks you to recover the
thing that's changing. This course's whole toolkit is four ways to answer that:
solve it exactly (separable, integrating factor, exact equations, characteristic
equation, undetermined coefficients, variation of parameters), transform it into algebra (Laplace), read its fate
without solving (equilibria, phase portraits), or split it into modes
(eigenvectors, Fourier). The one table to find first is
[Which method for which equation](#which-method-for-which-equation).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $y' = f(t,y)$ | the rule: at each point of the plane, the slope a solution must have | [1.1](lessons/01-01-odes-solutions-slope-fields.md) |
| $y(t_0) = y_0$ | initial condition — the one fact that picks a single curve out of the family | [1.1](lessons/01-01-odes-solutions-slope-fields.md) |
| $C$, $c_1, c_2$ | the arbitrary constants a general solution carries (one per order) | [1.1](lessons/01-01-odes-solutions-slope-fields.md) |
| $\mu(x)$ | integrating factor — the multiplier that makes the left side a product-rule derivative | [1.2](lessons/01-02-separable-and-linear-first-order.md) |
| $p(t)$, $q(t)$ | in $y' + p y = q$: the coefficient riding on $y$, and the free source term | [1.2](lessons/01-02-separable-and-linear-first-order.md) |
| $M(x,y)$, $N(x,y)$ | the two coefficient functions in differential form $M\,dx + N\,dy = 0$ | [1.4](lessons/01-04-exact-equations.md) |
| $F(x,y)$ | the potential of an exact equation — the quantity held constant along a solution | [1.4](lessons/01-04-exact-equations.md) |
| $y^{*}$ | an equilibrium value — a constant solution, where $f(y^{*}) = 0$ | [1.3](lessons/01-03-first-order-models.md) |
| $K$, $r$ (logistic) | carrying capacity (the ceiling) and low-density growth rate | [1.3](lessons/01-03-first-order-models.md) |
| $T_{\text{env}}$ | ambient temperature in Newton cooling — the value everything drifts to | [1.3](lessons/01-03-first-order-models.md) |
| $r$ (Module 2) | a root of the characteristic equation — the exponential rate $e^{rt}$ that works | [2.1](lessons/02-01-second-order-constant-coefficient.md) |
| $\alpha \pm i\beta$ | complex root: $\alpha$ is the grow/decay rate, $\beta$ the ringing frequency | [2.1](lessons/02-01-second-order-constant-coefficient.md) |
| $W$ | Wronskian $y_1y_2' - y_1'y_2$ — nonzero certifies two solutions are genuinely different | [2.1](lessons/02-01-second-order-constant-coefficient.md) |
| $u_1(t)$, $u_2(t)$ | the varied "constants" in $y_p = u_1y_1 + u_2y_2$ | [2.4](lessons/02-04-variation-of-parameters.md) |
| $g(t)$ | the forcing in **standard form** $y'' + py' + qy = g$ — divide by the leading coefficient first | [2.4](lessons/02-04-variation-of-parameters.md) |
| $m, c, k$ | mass, damping coefficient, spring constant | [2.2](lessons/02-02-oscillations-damping.md) |
| $L, R, C$ | inductance, resistance, capacitance — the circuit twins of $m, c, k$ | [2.2](lessons/02-02-oscillations-damping.md) |
| $\omega_0$ | natural frequency $\sqrt{k/m}$ — how fast it would ring with no friction | [2.2](lessons/02-02-oscillations-damping.md) |
| $\gamma$ | damping rate $c/2m$ — how fast energy leaks out | [2.2](lessons/02-02-oscillations-damping.md) |
| $\omega_d$ | damped frequency $\sqrt{\omega_0^2 - \gamma^2}$ — the rate it actually rings at | [2.2](lessons/02-02-oscillations-damping.md) |
| $y_h$, $y_p$ | homogeneous part (the transient) and particular part (the steady state) | [2.3](lessons/02-03-forcing-resonance.md) |
| $f(t)$, $F_0$, $\omega$ | the forcing function, its amplitude, and the driving frequency | [2.3](lessons/02-03-forcing-resonance.md) |
| $A(\omega)$ | steady-state amplitude as a function of drive frequency — the resonance curve | [2.3](lessons/02-03-forcing-resonance.md) |
| $\mathbf x' = A\mathbf x$ | a system: the state's velocity is a fixed linear function of the state | [3.1](lessons/03-01-linear-systems-eigenvalues.md) |
| $\lambda$, $\mathbf v$ | eigenvalue and eigenvector — a rate and the direction that runs at that rate | [3.1](lessons/03-01-linear-systems-eigenvalues.md) |
| $\tau$, $\Delta$ | trace and determinant of $A$ — the two numbers that classify an equilibrium | [3.2](lessons/03-02-phase-portraits-stability.md) |
| $\mathcal{L}\{f\}$, $F(s)$, $Y$ | the Laplace transform of $f$; $Y = \mathcal{L}\{y\}$ is the unknown in the $s$-world | [4.1](lessons/04-01-laplace-transform.md) |
| $s$ | the transform's frequency-like variable; multiplying by $s$ *is* differentiating | [4.1](lessons/04-01-laplace-transform.md) |
| $u(t-a)$ | unit step — a switch that is off before $t=a$ and on after | [4.1](lessons/04-01-laplace-transform.md) |
| $\delta(t-a)$ | impulse — an idealized instantaneous kick at $t=a$ | [4.1](lessons/04-01-laplace-transform.md) |
| $u(x,t)$, $u_t$, $u_{xx}$ | a field (temperature along a rod, say) and its partial derivatives | [4.2](lessons/04-02-intro-pdes-separation.md) |
| $\alpha$ (Module 4) | thermal diffusivity in $u_t = \alpha u_{xx}$ — how fast the material conducts | [4.2](lessons/04-02-intro-pdes-separation.md) |
| $\lambda_n$, $X_n$, $b_n$ | the $n$-th separation constant, spatial mode, and Fourier weight | [4.2](lessons/04-02-intro-pdes-separation.md) |

Three letters get reused across modules and it will bite you: $r$ is a logistic
growth rate in 1.3 and a characteristic root in 2.1; $c$ is a damping coefficient
in 2.2, a capacitance in the RLC twin, and a wave speed in 4.2; $\alpha$ is the
real part of a complex root in 2.1 and a diffusivity in 4.2. Read the module, not
the letter.

## Definitions

### Order

How many derivatives deep the rule reaches — first order is a rule about slope,
second order a rule about curvature. Formally, the highest derivative appearing.
An $n$-th order equation needs $n$ initial conditions.

*Introduced:* [1.1](lessons/01-01-odes-solutions-slope-fields.md)

### Linear ODE

$y$ and its derivatives enter "plainly": never squared, never multiplied by each
other, never fed into $\sin$ or $\sqrt{\ }$. The coefficients may be as wild as
they like. Linear refers to how $y$ enters the equation, **not** to the shape of
the solutions.

$$y^{(n)} + p_{n-1}(t)y^{(n-1)} + \cdots + p_0(t)\,y = g(t)$$

*Introduced:* [1.1](lessons/01-01-odes-solutions-slope-fields.md)

### Solution

A function that turns the equation into an identity when you substitute it.
Checking one is pure differentiation — plug in the candidate and its derivatives
and see whether the two sides match.

*Introduced:* [1.1](lessons/01-01-odes-solutions-slope-fields.md)

### Initial-value problem

The equation plus enough starting data to spend all its arbitrary constants,
which selects one **particular solution** out of the **general solution**'s family.

$$y' = f(t,y), \qquad y(t_0) = y_0$$

*Introduced:* [1.1](lessons/01-01-odes-solutions-slope-fields.md)

### Slope field

The equation staples a short segment of the demanded slope onto every point of
the plane; a solution is any curve that stays tangent to the field the whole way.
Lets you read a system's fate without solving.

*Introduced:* [1.1](lessons/01-01-odes-solutions-slope-fields.md)

### Existence and uniqueness

When the rule is nice, exactly one solution curve threads each point — so
solution curves never cross. Stated here, proved in `real-analysis`.

$$f \text{ and } \partial f/\partial y \text{ continuous near } (t_0,y_0) \;\Longrightarrow\; \text{a unique solution on \textit{some} interval around } t_0$$

*Introduced:* [1.1](lessons/01-01-odes-solutions-slope-fields.md)

### Separable equation

The right-hand side splits into an $x$-part times a $y$-part, so you can sort the
variables onto opposite sides and integrate each on its own turf.

$$\frac{dy}{dx} = g(x)\,h(y)$$

*Introduced:* [1.2](lessons/01-02-separable-and-linear-first-order.md)

### Integrating factor

The multiplier that engineers the product rule to run backwards: after
multiplying by $\mu$, the left side of a first-order linear equation *is* a
derivative, so you just integrate it away.

$$\mu(x) = e^{\int p(x)\,dx}, \qquad \big(\mu y\big)' = \mu q$$

*Introduced:* [1.2](lessons/01-02-separable-and-linear-first-order.md) · generalized to any
$M\,dx + N\,dy = 0$ in [1.4](lessons/01-04-exact-equations.md)

### Exact equation

A conservation law in disguise: the left side is the total differential of a
hidden **potential** $F$, so the equation says "$F$ doesn't change" and the
solution curves are its level curves $F(x,y) = C$.

$$M\,dx + N\,dy = 0 \ \text{ with }\ F_x = M,\ F_y = N \quad\Longrightarrow\quad F(x,y) = C$$

*Introduced:* [1.4](lessons/01-04-exact-equations.md)

### Potential function

The $F$ above — the quantity that stays constant along every solution. Same
object as the potential energy of a conservative field; the equation's solutions
are its equipotentials.

*Introduced:* [1.4](lessons/01-04-exact-equations.md)

### Equilibrium

A value the quantity would sit at forever: plug it in and nothing moves. For an
autonomous equation $y' = f(y)$, it is a zero of $f$.

$$f(y^{*}) = 0$$

*Introduced:* [1.3](lessons/01-03-first-order-models.md)

### Stability

Nudge the system off an equilibrium: does it come back (stable, a marble in a
bowl) or run away (unstable, a marble on a dome)? Read it off the sign of $f$ on
either side, or the slope of $f$ at the crossing.

$$f'(y^{*}) < 0 \Rightarrow \text{stable}, \qquad f'(y^{*}) > 0 \Rightarrow \text{unstable}$$

*Introduced:* [1.3](lessons/01-03-first-order-models.md)

### Characteristic equation

Guess $y = e^{rt}$; every term becomes the same $e^{rt}$ times a power of $r$, so
the differential equation collapses into a quadratic. The exponential converts
calculus into algebra.

$$ay'' + by' + cy = 0 \;\longrightarrow\; ar^2 + br + c = 0$$

*Introduced:* [2.1](lessons/02-01-second-order-constant-coefficient.md)

### Superposition

Because a linear homogeneous equation can't tell combinations apart, any blend of
solutions is again a solution — which is why "find two independent ones, combine
them" is legal and complete.

*Introduced:* [2.1](lessons/02-01-second-order-constant-coefficient.md)

### Wronskian

The certificate that two solutions are genuinely different (neither a multiple of
the other), so their combination really is the *full* solution family.

$$W = y_1 y_2' - y_1' y_2 \neq 0$$

It is the determinant of the matrix with columns $(y_1, y_1')$ and $(y_2, y_2')$.
Geometrically, $|W|$ is the area of the parallelogram those two columns span — so
$W \neq 0$ means they span the plane, which is exactly what makes variation of
parameters solvable at every $t$.

*Introduced:* [2.1](lessons/02-01-second-order-constant-coefficient.md) · put to work in
[2.4](lessons/02-04-variation-of-parameters.md)

### Transient and steady state

A driven system's motion splits in two: the free vibration it remembers from its
start, which dies, and the motion the driver imposes, which persists. The
arbitrary constants live entirely in the transient.

$$y = \underbrace{y_h}_{\text{transient}} + \underbrace{y_p}_{\text{steady state}}$$

*Introduced:* [2.3](lessons/02-03-forcing-resonance.md)

### Undetermined coefficients

Assume the output rhymes with the input: guess a $y_p$ of the same shape as the
forcing with unknown coefficients, substitute, and let the equation solve for
them. No integration, just matching.

*Introduced:* [2.3](lessons/02-03-forcing-resonance.md)

### Variation of parameters

Let the constants in $c_1y_1 + c_2y_2$ become functions of $t$. Two unknown
functions against one equation leaves slack, so you *impose* the convenient
extra condition $u_1'y_1 + u_2'y_2 = 0$; what's left is a $2\times2$ system whose
determinant is the Wronskian. Works for **any** continuous forcing, and for
non-constant coefficients too.

*Introduced:* [2.4](lessons/02-04-variation-of-parameters.md)

### Resonance

Push a lightly damped system at its own rhythm and the response grows enormous —
the denominator of the amplitude formula nearly vanishes. Undamped and driven
exactly at $\omega_0$, the amplitude grows like $t$, without bound.

*Introduced:* [2.3](lessons/02-03-forcing-resonance.md)

### Linear system

Several coupled quantities whose rates depend on each other, written as one
matrix equation: the state's velocity is a fixed linear function of the state.

$$\mathbf x' = A\mathbf x$$

*Introduced:* [3.1](lessons/03-01-linear-systems-eigenvalues.md)

### Eigen-solution

An eigenvector is a direction in which the coupling switches off and the system
becomes one scalar equation — so along it the motion is a lone exponential.

$$\mathbf x(t) = e^{\lambda t}\mathbf v \ \text{ solves } \mathbf x' = A\mathbf x \iff A\mathbf v = \lambda\mathbf v$$

*Introduced:* [3.1](lessons/03-01-linear-systems-eigenvalues.md)

### Phase plane

Stop plotting each variable against the clock; plot the state itself, $x_2$
against $x_1$, and let time run *along* the curve. The curve is a **trajectory**,
the field of velocity arrows is the **phase portrait**.

*Introduced:* [3.2](lessons/03-02-phase-portraits-stability.md)

### Asymptotic stability

Every nearby trajectory actually returns to the equilibrium — not merely stays
close. The clean test: both eigenvalues have negative real part.

$$\operatorname{Re}\lambda_1 < 0 \ \text{ and } \ \operatorname{Re}\lambda_2 < 0$$

*Introduced:* [3.2](lessons/03-02-phase-portraits-stability.md)

### Laplace transform

A change of language: weight $f$ by a decaying exponential and total it over all
time. In the new language, differentiating becomes multiplying by $s$, so a
differential equation becomes an algebraic one.

$$\mathcal{L}\{f\}(s) = \int_0^\infty e^{-st}f(t)\,dt = F(s)$$

*Introduced:* [4.1](lessons/04-01-laplace-transform.md)

### Unit step and impulse

The switch and the hammer-blow: $u(t-a)$ is $0$ before $t=a$ and $1$ after;
$\delta(t-a)$ is an idealized instantaneous kick at $t=a$ (not a function — use it
only through its transform).

$$\mathcal{L}\{u(t-a)\} = \frac{e^{-as}}{s}, \qquad \mathcal{L}\{\delta(t-a)\} = e^{-as}$$

*Introduced:* [4.1](lessons/04-01-laplace-transform.md)

### Partial differential equation

One equation governing a function of several variables — a whole profile
evolving, not a single number. Boundary conditions (what happens at the edges,
for all time) are as much a part of the problem as the initial condition.

$$u_t = \alpha\,u_{xx} \quad (\text{heat}), \qquad u_{tt} = c^2 u_{xx} \quad (\text{wave})$$

*Introduced:* [4.2](lessons/04-02-intro-pdes-separation.md)

### Separation of variables

Bet that the solution is a fixed spatial shape whose amplitude rises or falls
uniformly. Substituting forces a function of $x$ to equal a function of $t$, so
both must be constant — and one PDE becomes two ODEs you already solve.

$$u(x,t) = X(x)\,T(t)$$

*Introduced:* [4.2](lessons/04-02-intro-pdes-separation.md)

### Fourier sine series

Build any starting shape out of the standing waves the boundary conditions allow,
weighting each by how much of it is present. The weights come from projection,
exactly as components of a vector on an orthogonal basis.

$$f(x) = \sum_{n=1}^{\infty} b_n \sin\frac{n\pi x}{L}, \qquad b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\,dx$$

*Introduced:* [4.2](lessons/04-02-intro-pdes-separation.md)

## Formulas and rules

### Which method for which equation

Read the equation before reaching for a tool: **what order is it, is it linear,
and are the coefficients constant?** That triage picks the row.

| What you're looking at | Reach for | Where |
|---|---|---|
| $y' = g(x)h(y)$ — the right side factors into an $x$-part times a $y$-part | **Separation:** $\int dy/h = \int g\,dx$, then check whether $h(y)=0$ gives extra constant solutions | [1.2](lessons/01-02-separable-and-linear-first-order.md) |
| $y' + p(x)y = q(x)$ — first order, linear, doesn't separate | **Integrating factor** $\mu = e^{\int p}$; get standard form (coefficient $1$ on $y'$) *first* | [1.2](lessons/01-02-separable-and-linear-first-order.md) |
| $y' = f(y)$ and you only want the long-run answer | **Don't solve.** Find the zeros of $f$, read the sign of $f$ between them | [1.3](lessons/01-03-first-order-models.md), [1.1](lessons/01-01-odes-solutions-slope-fields.md) |
| $M\,dx + N\,dy = 0$ with $\partial M/\partial y = \partial N/\partial x$ | **Exact equations:** find $F$ with $F_x = M$, $F_y = N$; the solution is $F(x,y) = C$ | [1.4](lessons/01-04-exact-equations.md) |
| Same, but $\partial M/\partial y \neq \partial N/\partial x$ | **Integrating factor:** if $(M_y - N_x)/N$ is a function of $x$ alone, multiply by $\mu = e^{\int (M_y-N_x)/N\,dx}$ and re-test | [1.4](lessons/01-04-exact-equations.md), [1.2](lessons/01-02-separable-and-linear-first-order.md) |
| $ay'' + by' + cy = 0$, constant $a,b,c$ | **Characteristic equation** $ar^2+br+c=0$; three root cases below | [2.1](lessons/02-01-second-order-constant-coefficient.md) |
| $ay'' + by' + cy = f(t)$ with $f$ an exponential, sine/cosine, or polynomial | **Undetermined coefficients** on top of $y_h$; apply the modification rule if the guess is already homogeneous | [2.3](lessons/02-03-forcing-resonance.md) |
| Same, but $f$ is anything else ($\tan t$, $\sec t$, $\ln t$, $1/t$) | **Variation of parameters:** replace $c_1,c_2$ by functions and solve for them by integration | [2.4](lessons/02-04-variation-of-parameters.md) |
| A second-order equation with **non-constant** coefficients, and you're handed $y_1, y_2$ | **Variation of parameters** again — it never assumed constant coefficients | [2.4](lessons/02-04-variation-of-parameters.md) |
| Any linear constant-coefficient IVP — especially with a jump, a switch, or an impulse | **Laplace transform:** transform, solve for $Y(s)$, invert. Initial conditions ride in free | [4.1](lessons/04-01-laplace-transform.md) |
| Two or more coupled first-order equations | **Matrix form $\mathbf x' = A\mathbf x$**, then eigenvalues and eigenvectors | [3.1](lessons/03-01-linear-systems-eigenvalues.md) |
| A higher-order single equation you'd rather treat as a system | **Companion matrix:** name the derivatives as new variables | [3.1](lessons/03-01-linear-systems-eigenvalues.md) |
| A system whose *fate* is all you need | **Trace–determinant test** — no eigenvectors required | [3.2](lessons/03-02-phase-portraits-stability.md) |
| A linear PDE in $x$ and $t$ with homogeneous boundary conditions | **Separation of variables** plus a Fourier series to match the initial data | [4.2](lessons/04-02-intro-pdes-separation.md) |

Every row now has a home in the course. Two of them are last resorts worth
naming: variation of parameters always works but costs two integrals, so try
undetermined coefficients first; and if neither $(M_y - N_x)/N$ nor
$(N_x - M_y)/M$ collapses to a single-variable function, finding an integrating
factor is as hard as the original equation, and it's time for a numerical method.
For a constant-coefficient IVP, Laplace is often the shortest road regardless.

### Solving first-order equations

$$\text{separable:}\quad \int\frac{dy}{h(y)} = \int g(x)\,dx \qquad\qquad \text{linear:}\quad y = \frac{1}{\mu}\left(\int \mu q\,dx + C\right),\ \ \mu = e^{\int p}$$

No $+C$ is needed inside $\mu$ — any one antiderivative of $p$ works, since a
constant factor cancels off both sides.

*From* [1.2](lessons/01-02-separable-and-linear-first-order.md)

### The exactness test, and recovering the potential

Write the equation as $M(x,y)\,dx + N(x,y)\,dy = 0$. Then, on a rectangle where
everything is continuous,

$$\text{exact} \iff \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

It *is* the test because if $F_x = M$ and $F_y = N$ then $M_y = F_{xy}$ and
$N_x = F_{yx}$, equal by
[Clairaut](../calc-refresher/reference.md#mixed-partials-commute-clairaut). In two
dimensions this is the same condition as "curl $=0$", i.e. the field $(M,N)$ is
[conservative](../calc-refresher/reference.md#conservative-field).

**Recipe once the test passes:**

| Step | Do this |
|---|---|
| 1 | $F = \int M\,dx + g(y)$ — the integration "constant" is a function of $y$, never a number |
| 2 | Differentiate: $F_y = \dots + g'(y)$, and set it equal to $N$ |
| 3 | Every $x$ must cancel (if it doesn't, recheck step 1 or the test); integrate the leftover $g'(y)$ |
| 4 | Answer is the implicit relation $F(x,y) = C$; an initial condition fixes $C$ |

You may start from $N$ and integrate in $y$ instead — pick whichever is less work.

**If the test fails:**

$$\frac{M_y - N_x}{N} = h(x) \ \Rightarrow\ \mu(x) = e^{\int h\,dx}, \qquad \frac{N_x - M_y}{M} = k(y) \ \Rightarrow\ \mu(y) = e^{\int k\,dy}$$

Multiply through by $\mu$, re-test, then run the recipe. The linear equation
$y' + py = q$ is the special case $M = py - q$, $N = 1$, where $h(x) = p(x)$ and
$\mu = e^{\int p}$ — 1.2's formula is this one specialized.

*From* [1.4](lessons/01-04-exact-equations.md)

### First-order model templates

| Story | Equation | Solution / equilibrium |
|---|---|---|
| growth or decay | $y' = ky$ | $y = y_0 e^{kt}$; equilibrium $y = 0$ |
| Newton cooling | $T' = -k(T - T_{\text{env}})$ | $T = T_{\text{env}} + (T_0 - T_{\text{env}})e^{-kt}$; stable at $T_{\text{env}}$ |
| mixing tank (volume $V$ constant) | $x' = (\text{conc. in})(\text{flow in}) - \dfrac{x}{V}(\text{flow out})$ | steady state = inflow concentration times $V$ |
| logistic | $P' = rP\left(1 - \dfrac{P}{K}\right)$ | $P = \dfrac{K}{1 + Ae^{-rt}}$, $A = \dfrac{K - P_0}{P_0}$; $P=0$ unstable, $P=K$ stable |

The universal move: **shift by the equilibrium.** Setting $u = y - y^{*}$ turns
every linear first-order model into a bare $u' = ku$.

*From* [1.3](lessons/01-03-first-order-models.md)

### The three root cases

With $r_{1,2} = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, the discriminant decides everything:

| Discriminant | Roots | General solution |
|---|---|---|
| $b^2 - 4ac > 0$ | real, distinct $r_1 \neq r_2$ | $y = c_1 e^{r_1 t} + c_2 e^{r_2 t}$ |
| $b^2 - 4ac = 0$ | repeated $r = -b/2a$ | $y = (c_1 + c_2 t)\,e^{rt}$ |
| $b^2 - 4ac < 0$ | complex $\alpha \pm i\beta$ | $y = e^{\alpha t}(c_1\cos\beta t + c_2\sin\beta t)$ |

Here $\alpha = -b/2a$ and $\beta = \sqrt{4ac - b^2}\,/\,2a$. Stability lives in
$\alpha$ alone; $\beta$ only sets how fast it wiggles.

*From* [2.1](lessons/02-01-second-order-constant-coefficient.md)

### Amplitude and phase form

The lessons collapse a cosine-plus-sine into a single shifted cosine whenever
they want to read off an amplitude. Worth having written down:

$$c_1\cos\omega t + c_2\sin\omega t = R\cos(\omega t - \varphi), \qquad R = \sqrt{c_1^2 + c_2^2}, \quad \tan\varphi = \frac{c_2}{c_1}$$

Pick $\varphi$ in the quadrant matching the signs of $c_1$ and $c_2$ — the
arctangent alone can be off by $\pi$.

*Used in* [2.1](lessons/02-01-second-order-constant-coefficient.md) *and* [2.2](lessons/02-02-oscillations-damping.md)

### The oscillator and its damping regimes

$$m x'' + c x' + k x = 0 \quad\Longleftrightarrow\quad L q'' + R q' + \tfrac{1}{C} q = 0 \quad\Longleftrightarrow\quad x'' + 2\gamma x' + \omega_0^2 x = 0$$

with $\omega_0 = \sqrt{k/m}$, $\gamma = c/2m$, and the dictionary
$m \leftrightarrow L$, $c \leftrightarrow R$, $k \leftrightarrow 1/C$.

| Condition | Regime | Motion |
|---|---|---|
| $\gamma^2 > \omega_0^2$ (i.e. $c^2 > 4mk$) | overdamped | $x = C_1e^{r_1t} + C_2e^{r_2t}$ — creeps back, no overshoot, *slowly* |
| $\gamma^2 = \omega_0^2$ (i.e. $c^2 = 4mk$) | critically damped | $x = (C_1 + C_2t)e^{-\gamma t}$ — fastest return with no overshoot |
| $\gamma^2 < \omega_0^2$ (i.e. $c^2 < 4mk$) | underdamped | $x = e^{-\gamma t}(C_1\cos\omega_d t + C_2\sin\omega_d t)$, $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$ |
| $\gamma = 0$ | simple harmonic | $x = A\cos(\omega_0 t - \phi)$ — rings forever |

*From* [2.2](lessons/02-02-oscillations-damping.md)

### Undetermined coefficients

| Forcing $f(t)$ | Trial $y_p$ |
|---|---|
| $F_0 e^{kt}$ | $Ae^{kt}$ |
| $F_0\cos\omega t$ **or** $F_0\sin\omega t$ | $A\cos\omega t + B\sin\omega t$ (both, always) |
| polynomial of degree $n$ | a general degree-$n$ polynomial |
| a sum of the above | the sum of the corresponding trials |

**Modification rule:** if a term of the trial already solves the homogeneous
equation, multiply that trial by $t$ — by $t^2$ if the offending root is repeated.

*From* [2.3](lessons/02-03-forcing-resonance.md)

### Variation of parameters

**Standard form first** — divide by the leading coefficient so it is exactly $1$:

$$y'' + p(t)\,y' + q(t)\,y = g(t)$$

With $y_1, y_2$ independent homogeneous solutions and $W = y_1y_2' - y_1'y_2$:

$$u_1' = -\frac{y_2\,g}{W}, \qquad u_2' = \frac{y_1\,g}{W}, \qquad y_p = u_1y_1 + u_2y_2$$

$$y_p = -y_1\int \frac{y_2\,g}{W}\,dt \;+\; y_2\int \frac{y_1\,g}{W}\,dt$$

These come from Cramer's rule on

$$u_1'y_1 + u_2'y_2 = 0, \qquad u_1'y_1' + u_2'y_2' = g,$$

whose determinant is $W$ — which is why a nonzero Wronskian is the hypothesis the
whole method rests on. Drop the $+C$ from both integrals (they only regenerate
$y_h$), and delete any piece of $y_p$ that is a multiple of $y_1$ or $y_2$.

**Sanity anchors:** $y_1 = \cos t,\ y_2 = \sin t \Rightarrow W = 1$;
$y_1 = e^{r_1t},\ y_2 = e^{r_2t} \Rightarrow W = (r_2 - r_1)e^{(r_1+r_2)t}$;
$y_1 = e^{rt},\ y_2 = te^{rt} \Rightarrow W = e^{2rt}$.

*From* [2.4](lessons/02-04-variation-of-parameters.md)

### Resonance

For $y'' + 2\gamma y' + \omega_0^2 y = F_0\cos\omega t$ with $\gamma > 0$, the
steady-state amplitude is

$$A(\omega) = \frac{F_0}{\sqrt{(\omega_0^2 - \omega^2)^2 + (2\gamma\omega)^2}},$$

peaking at $\omega = \sqrt{\omega_0^2 - 2\gamma^2}$ — slightly *below* $\omega_0$.
Lighter damping makes the peak taller and narrower. In the undamped limit driven
exactly at resonance,

$$y'' + \omega_0^2 y = F_0\cos\omega_0 t \quad\Longrightarrow\quad y_p = \frac{F_0}{2\omega_0}\,t\sin\omega_0 t,$$

an amplitude growing linearly forever.

*From* [2.3](lessons/02-03-forcing-resonance.md)

### Solving a linear system

For a $2\times2$ matrix $A$: solve $\det(A - \lambda I) = 0$, find an eigenvector
for each root, and superpose.

$$\text{real distinct:}\quad \mathbf x = c_1 e^{\lambda_1 t}\mathbf v_1 + c_2 e^{\lambda_2 t}\mathbf v_2$$

$$\text{complex } \lambda = \alpha \pm i\beta:\quad \text{take the real and imaginary parts of the single mode } e^{\lambda t}\mathbf v$$

Sanity checks worth doing every time: $\lambda_1 + \lambda_2 = \operatorname{tr}A$
and $\lambda_1\lambda_2 = \det A$.

**Any higher-order equation becomes a system** by naming the derivatives. For
$y'' + py' + qy = 0$, set $x_1 = y$, $x_2 = y'$:

$$\begin{bmatrix} x_1 \\ x_2\end{bmatrix}' = \begin{bmatrix} 0 & 1 \\ -q & -p\end{bmatrix}\begin{bmatrix} x_1 \\ x_2\end{bmatrix}$$

and $\det(A - \lambda I) = 0$ for this **companion matrix** *is* the
characteristic equation of 2.1.

*From* [3.1](lessons/03-01-linear-systems-eigenvalues.md)

### Classifying an equilibrium

| Eigenvalues | Type | Stability |
|---|---|---|
| real, same sign | **node** — straight in or out | stable if both $<0$, unstable if both $>0$ |
| real, opposite signs | **saddle** — in along one eigen-line, out along the other | **always unstable** |
| complex $a \pm bi$, $a \neq 0$ | **spiral** (focus) — winds in or out | stable if $a<0$, unstable if $a>0$ |
| pure imaginary $\pm bi$ | **center** — closed orbits | neutrally stable, never asymptotically |

**Trace–determinant shortcut**, with $\tau = \operatorname{tr}A$ and $\Delta = \det A$:

$$\lambda = \frac{\tau \pm \sqrt{\tau^2 - 4\Delta}}{2}$$

- $\Delta < 0$ → saddle (unstable), no further questions.
- $\Delta > 0$: the **sign of $\tau$ is the stability switch** ($\tau<0$ stable,
  $\tau>0$ unstable, $\tau=0$ center), and $\tau^2 - 4\Delta$ is the
  **node-vs-spiral switch** (positive = real = node, negative = complex = spiral).

*From* [3.2](lessons/03-02-phase-portraits-stability.md)

### Laplace transform table

| $f(t)$ | $F(s)$ | | $f(t)$ | $F(s)$ |
|---|---|---|---|---|
| $1$ | $\dfrac{1}{s}$ | | $u(t-a)$ | $\dfrac{e^{-as}}{s}$ |
| $e^{at}$ | $\dfrac{1}{s-a}$ | | $u(t-a)f(t-a)$ | $e^{-as}F(s)$ |
| $t^n$ | $\dfrac{n!}{s^{n+1}}$ | | $\delta(t-a)$ | $e^{-as}$ |
| $\cos\omega t$ | $\dfrac{s}{s^2+\omega^2}$ | | $y'$ | $sY - y(0)$ |
| $\sin\omega t$ | $\dfrac{\omega}{s^2+\omega^2}$ | | $y''$ | $s^2Y - s\,y(0) - y'(0)$ |

The transform is **linear**, so constants and sums pass straight through. Two
standard rows the lessons never needed but you will, the moment a quadratic
denominator refuses to factor — complete the square and shift:

$$\mathcal{L}\{e^{at}f(t)\} = F(s-a), \qquad e^{at}\cos\omega t \leftrightarrow \frac{s-a}{(s-a)^2+\omega^2}, \qquad e^{at}\sin\omega t \leftrightarrow \frac{\omega}{(s-a)^2+\omega^2}$$

**The method, in three moves:** transform the whole equation → solve the algebra
for $Y(s)$ → invert, using partial fractions to break $Y$ into table-shaped
pieces. The denominator you factor is the same characteristic polynomial as 2.1.

*From* [4.1](lessons/04-01-laplace-transform.md)

### Separation of variables, worked to a template

With a rod of length $L$ and both ends held at zero, $X(0) = X(L) = 0$:

$$\frac{T'}{\alpha T} = \frac{X''}{X} = -\lambda \;\Longrightarrow\; X'' + \lambda X = 0,\quad T' = -\alpha\lambda T$$

$$\lambda_n = \left(\frac{n\pi}{L}\right)^2, \qquad X_n(x) = \sin\frac{n\pi x}{L}, \qquad n = 1,2,3,\dots$$

| Equation | Time factor $T_n$ | Behavior |
|---|---|---|
| heat $u_t = \alpha u_{xx}$ | $e^{-\alpha\lambda_n t}$ | pure decay; wigglier modes die faster, so the profile smooths |
| wave $u_{tt} = c^2 u_{xx}$ | $\cos(c\sqrt{\lambda_n}\,t)$, $\sin(c\sqrt{\lambda_n}\,t)$ | oscillation; mode $n$ rings at $cn\pi/L$ — a fundamental plus integer overtones |

Then superpose and match the initial shape:

$$u(x,t) = \sum_{n=1}^{\infty} b_n \sin\frac{n\pi x}{L}\,T_n(t), \qquad b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\,dx$$

The $2/L$ is not magic — it's $1/\!\int_0^L \sin^2(n\pi x/L)\,dx$, the
normalization of the basis. The projection works because the modes are
orthogonal:

$$\int_0^L \sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}\,dx = \begin{cases} 0, & m \neq n \\ L/2, & m = n\end{cases}$$

*From* [4.2](lessons/04-02-intro-pdes-separation.md)

## Assumed, not taught here

A Tier 0 refresher is allowed to assume you once knew these. It is not allowed to
leave them unfindable.

| Fact | Where it's taught |
|---|---|
| Derivative and antiderivative tables; product, quotient, chain rules | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md), [2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Substitution, integration by parts, **partial fractions** (needed for every Laplace inversion) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Improper integrals and when $\int_0^\infty$ converges (why $\mathcal{L}\{f\}$ exists) | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ — the bridge from complex roots to real sines | Stated, with complex arithmetic and the conjugate-pair picture, in [precalculus 2.4](../precalculus/lessons/02-04-complex-numbers.md); proved from power series in [calc-refresher 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Partial derivatives and the $u_x$, $u_{xx}$ notation | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Eigenvalues, eigenvectors, and solving $\det(A - \lambda I) = 0$ | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| Trace, determinant, and what a $2\times2$ determinant means | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Matrix–vector multiplication; linear independence of two vectors | [linalg-refresher 2.1](../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md), [1.2](../linalg-refresher/lessons/01-02-linear-independence-basis-dimension.md) |
| Orthogonal bases and projection (the idea Fourier coefficients run on) | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| The quadratic formula and its discriminant | [algebra-foundations 4.1](../algebra-foundations/lessons/04-01-quadratic-equations.md) |
| Trig identities, radians, amplitude / period / phase-shift knobs | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |
| Exponential and log algebra ($e^{\ln x} = x$, and why $\ln\lvert y\rvert$ carries the absolute value) | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |

## Pitfalls

### Reading and checking an equation

- Verification is **substitution**, not re-derivation: differentiate the candidate, plug in, compare sides. *([1.1](lessons/01-01-odes-solutions-slope-fields.md))*
- A first-order ODE has a one-parameter *family*, not "a solution"; an $n$-th order equation needs $n$ conditions to spend its $n$ constants. *([1.1](lessons/01-01-odes-solutions-slope-fields.md))*
- "Linear" describes how $y$ enters the equation, never the shape of the graph — $y' = t^2y$ is linear with curvy solutions, $y' = 1 + y^2$ is not. *([1.1](lessons/01-01-odes-solutions-slope-fields.md))*
- Existence–uniqueness promises a solution on *some* interval only: $y' = 1 + y^2$ has a perfectly smooth right side and still blows up at $t = \pi/2$. *([1.1](lessons/01-01-odes-solutions-slope-fields.md))*

### First-order technique

- Dividing by $h(y)$ deletes solutions: the constant solutions where $h(y) = 0$ (the equilibria) never appear in the divided-out family. Check them separately. *([1.2](lessons/01-02-separable-and-linear-first-order.md))*
- The integrating factor only applies in **standard form**, coefficient $1$ on $y'$. Seeing $t\,y' + y = t^2$, divide by $t$ before reading off $p$. *([1.2](lessons/01-02-separable-and-linear-first-order.md))*
- Do not put a $+C$ inside $\mu = e^{\int p}$ — it cancels. Spend zero effort on it. *([1.2](lessons/01-02-separable-and-linear-first-order.md))*
- An implicit answer is still an answer; forcing a separable solution into $y = f(x)$ is often impossible and never required. *([1.2](lessons/01-02-separable-and-linear-first-order.md), [1.4](lessons/01-04-exact-equations.md))*
- In $F = \int M\,dx + g(y)$ the integration term is a **function of $y$**, not a constant. Writing $+C$ there silently deletes all the $y$-dependence the reconcile step exists to find. *([1.4](lessons/01-04-exact-equations.md))*
- If the $x$'s don't cancel at the reconcile step, stop: either the arithmetic slipped or the equation wasn't exact. A leftover $x$ inside $g'(y)$ is never valid. *([1.4](lessons/01-04-exact-equations.md))*
- "Not separable and not linear" is not a dead end — run $M_y$ vs. $N_x$ before giving up. It costs two partial derivatives. *([1.4](lessons/01-04-exact-equations.md))*

### Modeling and equilibria

- The outflow of a mixing tank carries the tank's *current* concentration $x/V$, not the inflow concentration — that dependence on $x$ is what makes it a differential equation. *([1.3](lessons/01-03-first-order-models.md))*
- Equilibrium does not mean stable: logistic $P = 0$ is an equilibrium a single organism flees. Stability is a separate question, answered by the sign of $f'$ there. *([1.3](lessons/01-03-first-order-models.md))*
- You rarely need to solve for the long-run answer — the fate is the stable equilibrium your initial condition drains into, readable from the sign of $f$. *([1.3](lessons/01-03-first-order-models.md), [1.1](lessons/01-01-odes-solutions-slope-fields.md))*

### Second-order and damping

- A repeated root gives **one** exponential; the partner is $t\,e^{rt}$. Drop it and you cannot match both initial conditions. *([2.1](lessons/02-01-second-order-constant-coefficient.md), [2.2](lessons/02-02-oscillations-damping.md))*
- Complex roots do not make the answer complex — the imaginary parts cancel. Always report $e^{\alpha t}(c_1\cos\beta t + c_2\sin\beta t)$. *([2.1](lessons/02-01-second-order-constant-coefficient.md), [3.1](lessons/03-01-linear-systems-eigenvalues.md))*
- Grow-or-decay is the **real part** $\alpha$; $\beta$ only sets the wiggle rate and never affects stability. *([2.1](lessons/02-01-second-order-constant-coefficient.md))*
- More damping is not faster settling: past critical, one root drifts toward zero and the overdamped system lingers. Critical damping is the sweet spot. *([2.2](lessons/02-02-oscillations-damping.md))*
- The damped frequency $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$ is strictly *below* $\omega_0$, and collapses to zero exactly at critical damping. *([2.2](lessons/02-02-oscillations-damping.md))*

### Forcing and resonance

- Fit $c_1, c_2$ to the **full** $y = y_h + y_p$, never to $y_h$ alone — the forcing shifts where the motion starts. *([2.3](lessons/02-03-forcing-resonance.md))*
- A cosine drive on a damped system needs **both** $A\cos\omega t$ and $B\sin\omega t$; the $y'$ term converts one into the other, and dropping the sine makes the algebra unsolvable. *([2.3](lessons/02-03-forcing-resonance.md))*
- With any damping, resonance is large but finite, and the peak sits slightly below $\omega_0$. The genuine blow-up needs the idealized $\gamma = 0$ case. *([2.3](lessons/02-03-forcing-resonance.md))*
- If the trial $y_p$ is already a homogeneous solution, plugging it in gives $0$ and matches nothing — multiply by $t$. *([2.3](lessons/02-03-forcing-resonance.md))*
- Variation of parameters reads $g$ off the **standard form**. For $t^2y'' - 2ty' + 2y = t^3$ the forcing is $g = t$, not $t^3$ — divide by the leading coefficient before touching the formula. *([2.4](lessons/02-04-variation-of-parameters.md))*
- The minus sign belongs to $u_1'$, and each $u_i'$ carries the *other* solution: $u_1' = -y_2g/W$, $u_2' = +y_1g/W$. Swapping them yields a plausible-looking wrong answer. *([2.4](lessons/02-04-variation-of-parameters.md))*
- $u_1'y_1 + u_2'y_2 = 0$ is a **choice**, not a derived fact — it's how you spend the extra degree of freedom two unknown functions give you. *([2.4](lessons/02-04-variation-of-parameters.md))*
- Don't reach for variation of parameters when the forcing is on 2.3's menu: guessing is faster and needs no integration. *([2.4](lessons/02-04-variation-of-parameters.md))*

### Systems and phase portraits

- The pairing of exponent and direction is rigid: mode $i$ is $e^{\lambda_i t}\mathbf v_i$. Never mix $\lambda_1$ with $\mathbf v_2$. *([3.1](lessons/03-01-linear-systems-eigenvalues.md))*
- A phase-plane trajectory is **not** a graph against time — time is hidden, running along the curve. A spiral in the plane is a decaying oscillation in time. *([3.2](lessons/03-02-phase-portraits-stability.md))*
- A large positive $\Delta$ only rules out a saddle; it says the eigenvalues share a sign, not which. **The trace is the stability switch.** *([3.2](lessons/03-02-phase-portraits-stability.md))*
- A center is stable but *not* asymptotically stable — orbits circle forever. Pure-imaginary eigenvalues are a knife-edge any perturbation can tip. *([3.2](lessons/03-02-phase-portraits-stability.md))*
- A saddle's one incoming direction does not make it "half stable" — it is unstable, full stop. *([3.2](lessons/03-02-phase-portraits-stability.md))*

### Laplace

- Keep the $u(t-a)$ factor after applying the shift rule; the answer is genuinely piecewise, and that factor *is* the switch. *([4.1](lessons/04-01-laplace-transform.md))*
- The shift rule pairs $e^{-as}F(s)$ with the **shifted** function: invert $F$ to get $g(t)$, *then* replace $t$ by $t-a$. Writing $g(t)$ instead of $g(t-a)$ is the classic error. *([4.1](lessons/04-01-laplace-transform.md))*
- $\delta(t-a)$ is not an ordinary function; use it only through its transform. Under an impulse, $y'$ jumps while $y$ stays continuous. *([4.1](lessons/04-01-laplace-transform.md))*

### PDEs and Fourier

- The separation constant cannot have either sign: $\lambda \le 0$ forces $X$ to be a line or a real exponential, and neither can vanish at both ends without being identically zero. That is what quantizes $\lambda$. *([4.2](lessons/04-02-intro-pdes-separation.md))*
- Each *mode* is a product $X_nT_n$; the *solution* is their sum. A single product almost never matches a given initial shape — superposition does the real work. *([4.2](lessons/04-02-intro-pdes-separation.md))*
- Fixed-zero ends give **sines only**; every basis function has to vanish at both ends. Insulated ends would flip you to cosines. *([4.2](lessons/04-02-intro-pdes-separation.md))*

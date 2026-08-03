# Partial Differential Equations · Lesson 4.4: The Laplace transform for evolution problems

> ⏱ ~15 min · Module 4: Transforms on unbounded domains · Builds on: [4.3 The wave equation on the line and dispersion](04-03-wave-equation-line-dispersion.md) · Unlocks: [5.1 The Dirac delta and distributions, lightly](05-01-dirac-delta-distributions.md)

## Why this matters

You flip a switch: at $t=0$ the end of a cold metal rod is suddenly clamped to a hot temperature and held there. How does the heat crawl inward, and how long until things settle? This is a **transient** — a system responding to a change that starts at a definite moment — and it's the everyday shape of engineering: a circuit powered on, a control input applied, a load dropped onto a beam. Fourier (Module 4 so far) is built for the whole line and steady oscillation; it has no natural home for "and then at $t=0$ something happened." The **Laplace transform in time** is exactly that home. It turns the time derivative into algebra, swallows the initial condition automatically, and reduces an evolution PDE to an ordinary boundary-value problem in space.

## The idea

Recall the one move behind every transform ([4.1](04-01-fourier-transform.md)): trade a hard operation for an easy one by changing coordinates. Fourier trades $\partial_x$ for "multiply by $i\xi$." Laplace does the same trick to the **time** derivative — but with a decaying weight $e^{-st}$ instead of an oscillating one, and integrating only over $t \ge 0$.

Here's the payoff in one line. Multiplying $u(x,t)$ by $e^{-st}$ and integrating over all future time converts $\partial_t$ into "multiply by $s$" — *and* leaves behind the value of $u$ at the starting instant. So a PDE that mixes derivatives in $x$ and $t$ collapses: the $t$-derivatives become plain factors of $s$, the initial data rides along for free, and what's left is an **ordinary** differential equation in $x$ alone, with $s$ sitting in it as a fixed parameter. Solve that ODE (it's usually easy), then **invert** the transform to read off the time behavior. The whole strategy is the pipeline in the picture: down into $s$-land where calculus is algebra, solve, come back.

The mental image: you were juggling two variables at once; Laplace freezes time into a single knob $s$, you handle space calmly, then you un-freeze.

## The formal version

**The Laplace transform in time.** For a function $u(x,t)$ defined for $t \ge 0$,

$$U(x,s) = \mathcal{L}\{u\}(x,s) = \int_0^\infty u(x,t)\,e^{-st}\,dt .$$

In words: weight the whole future by the decaying factor $e^{-st}$ and add it up; the result $U$ depends on space $x$ and on the transform variable $s$ (think of $s$ as an adjustable decay rate, real and large enough for the integral to converge). Space is untouched — $x$ just rides through.

**The derivative rules (why any of this works).** Integrating by parts in $t$ gives

$$\mathcal{L}\{u_t\} = s\,U(x,s) - u(x,0), \qquad \mathcal{L}\{u_{tt}\} = s^2 U - s\,u(x,0) - u_t(x,0).$$

In words: each time derivative becomes a factor of $s$, and the **initial conditions drop out as free terms** — you never impose them by hand, the transform bakes them in. Meanwhile space derivatives pass straight through: $\mathcal{L}\{u_{xx}\} = U_{xx}(x,s)$, because the $t$-integral doesn't see $x$.

**The consequence.** Apply $\mathcal{L}$ to an evolution PDE and the $t$-derivatives turn into $s$'s while the $x$-derivatives survive. A PDE in $(x,t)$ becomes an **ODE in $x$** with parameter $s$:

$$u_t = k\,u_{xx} \quad\xrightarrow{\ \mathcal{L}\ }\quad sU - u(x,0) = k\,U_{xx}.$$

In words: diffusion in two variables becomes, for each fixed $s$, a single second-order ODE in $x$ — algebra plus an ODE you already know how to solve. The one genuinely hard step is the last one, **inversion**: recovering $u(x,t)$ from $U(x,s)$. In practice you match $U$ to a known transform pair (a table), and when nothing matches you fall back on the Bromwich contour integral — a complex-analysis computation we only name here.

## Picture

![Pipeline: a PDE in (x,t) is Laplace-transformed in t into an ODE in x with parameter s and the initial condition built in, solved for U(x,s), then inverted back to u(x,t); below, a transient curve rising from zero and settling onto a dashed steady-state level](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (the classic: heat penetrating a semi-infinite rod).** A rod occupies $x \ge 0$, starts everywhere cold, $u(x,0)=0$, and stays bounded far away, $u(x,t)\to 0$ as $x\to\infty$. At $t=0$ we clamp the near end hot: $u(0,t)=T_0$ for $t>0$ (a suddenly-applied step). The rod obeys $u_t = k\,u_{xx}$. Find $u(x,t)$.

*Transform in $t$.* With $u(x,0)=0$ the derivative rule gives $\mathcal{L}\{u_t\} = sU$, so

$$sU = k\,U_{xx} \quad\Longrightarrow\quad U_{xx} - \frac{s}{k}\,U = 0.$$

This is a constant-coefficient ODE in $x$ (with $s$ a parameter). Its general solution is $U = A(s)\,e^{\sqrt{s/k}\,x} + B(s)\,e^{-\sqrt{s/k}\,x}$.

*Apply the boundary conditions.* Boundedness as $x\to\infty$ kills the growing branch, so $A(s)=0$. The hot end transforms as $\mathcal{L}\{T_0\} = \int_0^\infty T_0 e^{-st}dt = T_0/s$, giving $U(0,s)=T_0/s$, hence $B(s)=T_0/s$. So

$$U(x,s) = \frac{T_0}{s}\,e^{-\sqrt{s/k}\,x}.$$

*Invert.* This is a tabulated pair. The standard transform

$$\mathcal{L}^{-1}\!\left\{\frac{1}{s}\,e^{-a\sqrt{s}}\right\} = \operatorname{erfc}\!\left(\frac{a}{2\sqrt{t}}\right), \qquad \operatorname{erfc}(z)=\frac{2}{\sqrt\pi}\int_z^\infty e^{-w^2}dw,$$

with $a = x/\sqrt{k}$, yields

$$\boxed{\,u(x,t) = T_0\,\operatorname{erfc}\!\left(\frac{x}{2\sqrt{kt}}\right).}$$

Read it: at the hot face $x=0$, $\operatorname{erfc}(0)=1$, so $u=T_0$ (boundary honored). Deep inside, the argument is large and $\operatorname{erfc}\to 0$ — the rod is still cold there. The single combination $x/\sqrt{kt}$ controls everything: heat penetrates like $\sqrt{t}$, the same diffusive scaling as the heat kernel in [4.2](04-02-heat-equation-line-heat-kernel.md). That's the error-function penetration profile every heat-transfer text draws.

**Example 2 (the initial condition carried for free).** Take a single spatial mode's amplitude — the kind of decoupled ODE that eigenfunction expansion produces in [3.5](03-05-eigenfunction-expansions-inhomogeneous.md). Say $a(t)$ satisfies $a' + \lambda a = f_0$ (a mode driven by a constant forcing $f_0$, decay rate $\lambda>0$), with $a(0)=a_0$. Solve by Laplace.

Transform: $\mathcal{L}\{a'\} = sA - a_0$ and $\mathcal{L}\{f_0\}=f_0/s$, so

$$sA - a_0 + \lambda A = \frac{f_0}{s} \quad\Longrightarrow\quad A(s) = \frac{a_0}{s+\lambda} + \frac{f_0}{s(s+\lambda)}.$$

Notice $a_0$ walked into the algebra by itself — no separate step imposed it. Partial fractions on the second term, $\frac{1}{s(s+\lambda)} = \frac{1}{\lambda}\big(\frac1s - \frac{1}{s+\lambda}\big)$, and inverting term by term ($\mathcal{L}^{-1}\{1/(s+\lambda)\}=e^{-\lambda t}$, $\mathcal{L}^{-1}\{1/s\}=1$):

$$a(t) = a_0 e^{-\lambda t} + \frac{f_0}{\lambda}\big(1 - e^{-\lambda t}\big).$$

The transient ($e^{-\lambda t}$ terms) dies; the amplitude **settles** to the steady value $f_0/\lambda$ — precisely the rising-and-leveling curve at the bottom of the picture. This is the Laplace transform you met for ODEs in [ode-refresher](../../ode-refresher/syllabus.md), now doing duty as the per-mode engine inside a PDE.

## Watch out

- **Laplace is one-sided in time; Fourier is two-sided in space.** The $t$-integral runs $0$ to $\infty$ and needs a definite initial condition — it's built for "the world before $t=0$ doesn't matter, something starts now." Don't reach for it on a whole-line steady oscillation; that's Fourier's job ([4.1](04-01-fourier-transform.md)). Choose by the geometry of the problem, not habit.
- **$s$ is a parameter, not integrated away.** Contrast Fourier: there the frequency $\xi$ gets integrated out on the way back. Here $s$ stays a free knob all through the ODE solve — you carry it symbolically and only deal with it at inversion. Treating $s$ like a number you can plug in is the classic slip.
- **The initial condition is not a boundary condition you add later — it's already inside.** The $-u(x,0)$ in $\mathcal{L}\{u_t\}$ *is* the initial data. If you also try to impose it separately you'll double-count. (ODE solvers exploit exactly this convenience.)
- **Inversion is the hard step, and it's where mistakes hide.** Getting $U(x,s)$ is routine; reading $u(x,t)$ back out is not. Match to a table when you can; the general tool is the Bromwich contour integral, a complex-analysis computation — see [complex-analysis](../../complex-analysis/syllabus.md). Don't invent an inverse by "plugging in."

## One-liner

> Laplace-in-time turns $\partial_t$ into a factor of $s$ and pockets the initial condition, collapsing an evolution PDE into an ODE in space — solve there, then invert to watch the transient settle.

## Problems

**P1 (🟢)** Using the derivative rules, transform the wave equation $u_{tt} = c^2 u_{xx}$ in time, given initial data $u(x,0)=g(x)$ and $u_t(x,0)=h(x)$. Write the resulting ODE in $x$ for $U(x,s)$ (with $s$ as a parameter). Identify which terms carry the initial conditions.

**P2 (🟡)** In Example 1, define the *penetration depth* $\delta(t)$ as the distance $x$ at which the temperature has risen to half the boundary value, $u=T_0/2$. Using $\operatorname{erfc}(z)=\tfrac12$ at $z\approx 0.477$, find $\delta(t)$ and state how it grows with $t$.

**P3 (🔴, optional)** Solve the semi-infinite heat problem of Example 1 but with the near end held at a *ramp* instead of a step: $u(0,t)=\beta t$ (temperature rising linearly), still with $u(x,0)=0$ and bounded at infinity. Find $U(x,s)$; you need not invert. (Hint: only the boundary transform changes.)

<details>
<summary>Solutions</summary>

**P1** The second-derivative rule gives $\mathcal{L}\{u_{tt}\} = s^2 U - s\,u(x,0) - u_t(x,0) = s^2 U - s\,g(x) - h(x)$, while $\mathcal{L}\{u_{xx}\}=U_{xx}$. So the PDE becomes

$$s^2 U - s\,g(x) - h(x) = c^2 U_{xx} \quad\Longrightarrow\quad U_{xx} - \frac{s^2}{c^2}U = -\frac{s\,g(x)+h(x)}{c^2}.$$

An inhomogeneous second-order ODE in $x$ (parameter $s$). The initial conditions live entirely in the forcing term on the right: $s\,g(x)$ carries the initial displacement $g$, and $h(x)$ carries the initial velocity — exactly the two free terms the $u_{tt}$ rule produced. No separate imposition needed.

**P2** Set $u=T_0/2$ in $u(x,t)=T_0\operatorname{erfc}\!\big(x/(2\sqrt{kt})\big)$: we need $\operatorname{erfc}(z)=\tfrac12$, i.e. $z\approx 0.477$. The argument is $z = \delta/(2\sqrt{kt})$, so

$$\frac{\delta}{2\sqrt{kt}} = 0.477 \quad\Longrightarrow\quad \delta(t) = 0.954\,\sqrt{kt} \approx 0.95\sqrt{kt}.$$

The half-temperature front advances like $\sqrt{t}$ — diffusion's signature. To reach twice as deep takes four times as long: no finite propagation speed, in contrast to the wave equation's rigid $ct$.

**P3** Only the boundary condition changes. Its transform is $\mathcal{L}\{\beta t\} = \beta\int_0^\infty t\,e^{-st}dt = \beta/s^2$. The interior ODE and boundedness are identical to Example 1, so $U(x,s) = C(s)\,e^{-\sqrt{s/k}\,x}$ with $C(s)=U(0,s)=\beta/s^2$. Hence

$$U(x,s) = \frac{\beta}{s^2}\,e^{-\sqrt{s/k}\,x}.$$

(For the curious: inverting this table entry gives a profile built from $\operatorname{ierfc}$, the integrated complementary error function — a heavier transient than the step, since the drive keeps growing.)

</details>

## Flashback

**From Lesson 4.3 (The wave equation on the line and dispersion):** A wave equation supports plane-wave solutions $u = e^{i(\kappa x - \omega t)}$. For the beam/plate-type equation $u_{tt} = -\gamma\,u_{xxxx}$ (with $\gamma>0$), find the dispersion relation $\omega(\kappa)$, and say whether the medium is dispersive.

<details>
<summary>Solution</summary>

Substitute $u=e^{i(\kappa x-\omega t)}$. Each $\partial_t$ brings down $-i\omega$, so $u_{tt}\to(-i\omega)^2 u = -\omega^2 u$. Each $\partial_x$ brings down $i\kappa$, so $u_{xxxx}\to(i\kappa)^4 u = \kappa^4 u$. The equation becomes

$$-\omega^2 = -\gamma\,\kappa^4 \quad\Longrightarrow\quad \omega = \pm\sqrt{\gamma}\,\kappa^2.$$

The phase speed $\omega/\kappa = \pm\sqrt{\gamma}\,\kappa$ depends on $\kappa$, so **yes, the medium is dispersive** — indeed strongly so, since $\omega\propto\kappa^2$: short-wavelength (high-$\kappa$) ripples race far ahead of long ones, and a localized initial shape spreads and reshapes as it travels. This is why a struck plate rings differently from a plucked string, whose $\omega=\pm c\kappa$ is non-dispersive.

</details>

## Connections

- **Backward:** this is the transform philosophy of [4.1](04-01-fourier-transform.md) — turn calculus into algebra — applied to time instead of space; the diffusive $\sqrt{t}$ penetration in Example 1 is the same physics as the heat kernel of [4.2](04-02-heat-equation-line-heat-kernel.md), and P1 re-derives the transformed wave equation of [4.3](04-03-wave-equation-line-dispersion.md).
- **Forward:** the transient-response viewpoint here is exactly what [5.4 Duhamel's principle](05-04-duhamels-principle.md) systematizes — building the response to a time-varying source out of responses to sudden impulses. The suddenly-applied boundary condition is the entry point.
- **Sideways (ODEs):** this *is* the Laplace transform from [ode-refresher](../../ode-refresher/syllabus.md), reused per spatial mode — Example 2 is a pure ODE calculation living inside a PDE course.
- **Sideways (engineering / EM):** in [em-refresher](../../em-refresher/syllabus.md) and circuit theory, $U(x,s)$-style ratios are **transfer functions**, and the step response above is literally how you characterize a circuit turning on — same transform, same transient, different vocabulary.
- **Sideways (complex analysis):** the honest inversion is the Bromwich contour integral of [complex-analysis](../../complex-analysis/syllabus.md) — residues and branch cuts of $U(x,s)$ in the complex $s$-plane reconstruct the time behavior.

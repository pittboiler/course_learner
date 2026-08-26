# Aerodynamics · Lesson 2.2: The vortex sheet and the thin-airfoil equation

> ⏱ ~15 min · Module 2: Airfoils and finite wings · Builds on: [2.1 Airfoil geometry and the Kutta condition](02-01-airfoil-geometry-kutta-condition.md) · Unlocks: [2.3 Symmetric thin airfoil](02-03-symmetric-thin-airfoil.md), [2.4 Cambered airfoil and aerodynamic center](02-04-cambered-airfoil-aerodynamic-center.md)

## Why this matters

[2.1](02-01-airfoil-geometry-kutta-condition.md) said the Kutta condition fixes the circulation. It did not say *how much* circulation, because an airfoil is not a cylinder and you cannot simply write down its potential flow.

This lesson builds the machine that can. The trick is to stop thinking of the airfoil as a body and start thinking of it as a **sheet of vorticity** whose strength varies along the chord — then demand that the sheet's own induced velocity, added to the free stream, be tangent to the airfoil. That demand is an integral equation, and solving it is the whole of thin-airfoil theory.

**This lesson is the setup; [2.3](02-03-symmetric-thin-airfoil.md) and [2.4](02-04-cambered-airfoil-aerodynamic-center.md) are the payoff.** The setup is worth doing carefully, because the same idea — replace the body by singularities, enforce tangency, solve for the strengths — is the basis of panel methods, lifting-line theory, and essentially all of computational aerodynamics before CFD.

## The idea

**A vortex sheet.** Take the point vortex of [1.2](01-02-potential-flow-elementary-flows.md) and smear it along a line: a continuous distribution with **strength per unit length** $\gamma(s)$, so that a length $ds$ of sheet contains circulation $\gamma\,ds$. Two facts do all the work:

**The total circulation is the integral of $\gamma$**, so once you know $\gamma(x)$ you know the lift by Kutta–Joukowski.

**The sheet is a slip surface**: the tangential velocity jumps across it by exactly $\gamma$. Above the sheet the flow is faster, below it slower — which is precisely the top-versus-bottom asymmetry that lift requires. **A vortex sheet *is* a pressure difference**, wearing a different notation.

**Why a sheet is the right model.** A real airfoil, viewed from a chord length away, is a thin region across which the tangential velocity changes. That is the definition of a vortex sheet. And because a thin airfoil is close to its own chord line, you can lay the sheet on the *chord* rather than on the curved surface and make an error that is second order in thickness and camber.

**The tangency condition.** The airfoil is a solid surface, so the velocity normal to it must vanish. The normal velocity has two contributions: a component of the free stream, which the camber slope and angle of attack together determine, and the downwash $w(x)$ that the sheet induces on itself. Setting the sum to zero at every chordwise station gives one equation per station — an **integral equation for $\gamma$**.

**Then the Kutta condition picks the solution.** The integral equation alone has infinitely many solutions, differing by a distribution that induces no normal velocity anywhere. Demanding $\gamma(c) = 0$ kills all but one. **This is the indeterminacy of [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md), reappearing in a new costume and being defeated the same way.**

**The clever substitution.** The integral is nasty in $x$ and beautiful in $\theta$, where $x = \tfrac{c}{2}(1-\cos\theta)$. In that variable the singular kernel evaluates to a strikingly simple closed form for every Fourier mode, and the whole problem becomes: expand the camber slope in a cosine series, read off the coefficients.

## The formal version

**Vortex sheet.** For a sheet along the $x$-axis with strength $\gamma(x)$:

$$\boxed{\;\Gamma = \int_0^c\gamma(\xi)\,d\xi, \qquad \gamma = u_{\rm upper}-u_{\rm lower}.\;}$$

$\gamma$ has units of velocity (m/s), not circulation.

**Pressure jump.** From Bernoulli applied above and below, with $u_{u,l} = V_\infty\pm\gamma/2$,

$$\Delta p = p_l-p_u = \rho_\infty V_\infty\gamma(x),$$

so $\gamma$ is, up to a constant, the local lift loading. **The sheet strength is the lift distribution.**

**Induced downwash.** An element $\gamma(\xi)d\xi$ at station $\xi$ induces at station $x$ (both on the chord) a vertical velocity

$$dw = -\frac{\gamma(\xi)\,d\xi}{2\pi(x-\xi)}, \qquad w(x) = -\frac{1}{2\pi}\int_0^c\frac{\gamma(\xi)\,d\xi}{x-\xi},$$

the integral taken as a **Cauchy principal value** (the singularity at $\xi = x$ cancels between the two sides).

**Tangency.** For a thin airfoil with camber line $z_c(x)$ at angle of attack $\alpha$ (both small), the free stream's normal component at station $x$ is $V_\infty(\alpha-dz_c/dx)$. Setting the total normal velocity to zero:

$$\boxed{\;\frac{1}{2\pi}\int_0^c\frac{\gamma(\xi)\,d\xi}{x-\xi} = V_\infty\left(\alpha-\frac{dz_c}{dx}\right)\;}$$

— **the fundamental equation of thin-airfoil theory**, with the Kutta condition $\gamma(c) = 0$ as its side condition.

*In words: find the vorticity distribution whose self-induced downwash exactly cancels the free stream's tendency to blow through the camber line.*

**Two approximations are buried here**, both second order in thickness and camber: the sheet sits on the chord rather than the camber line, and the boundary condition is applied on the chord rather than on the surface. **In exchange, the problem becomes linear and exactly solvable.**

**The Glauert transformation.**

$$\boxed{\;\xi = \frac{c}{2}(1-\cos\theta), \qquad x = \frac{c}{2}(1-\cos\theta_0),\;}$$

mapping $\xi\in[0,c]$ to $\theta\in[0,\pi]$ — leading edge at $\theta = 0$, trailing edge at $\theta = \pi$. With $d\xi = \tfrac{c}{2}\sin\theta\,d\theta$ and $x-\xi = \tfrac{c}{2}(\cos\theta-\cos\theta_0)$, the equation becomes

$$\boxed{\;\frac{1}{2\pi}\int_0^\pi\frac{\gamma(\theta)\sin\theta\,d\theta}{\cos\theta-\cos\theta_0} = V_\infty\left(\alpha-\frac{dz_c}{dx}\right).\;}$$

**Why this substitution and not another:** the transformation clusters points near the leading and trailing edges, exactly where $\gamma$ varies fastest, and it turns the kernel into something a cosine series diagonalizes.

**Glauert's integral.** The reason the whole method works:

$$\boxed{\;\int_0^\pi\frac{\cos n\theta}{\cos\theta-\cos\theta_0}\,d\theta = \frac{\pi\sin n\theta_0}{\sin\theta_0}, \qquad n = 0,1,2,\dots\;}$$

**Each cosine mode maps to a sine mode.** In particular $n = 0$ gives exactly zero, which is the fact that makes both the flat-plate solution and the non-uniqueness work out.

**The Glauert series.** Anticipating [2.3](02-03-symmetric-thin-airfoil.md) and [2.4](02-04-cambered-airfoil-aerodynamic-center.md), the solution is always written

$$\gamma(\theta) = 2V_\infty\left(A_0\frac{1+\cos\theta}{\sin\theta}+\sum_{n=1}^\infty A_n\sin n\theta\right).$$

The first term carries the leading-edge singularity and vanishes at $\theta = \pi$ (satisfying Kutta); every $\sin n\theta$ term vanishes at both ends automatically. **The form is chosen so that Kutta is built in.**

## Picture

![A two-panel figure. Left panel: an airfoil section drawn faintly with its camber line highlighted, overlaid by a row of small circular-arrow vortex symbols of varying size lying along the chord line — largest at the leading edge and shrinking to nothing at the trailing edge — with a curve above showing the sheet strength gamma of x falling from a spike at the leading edge to zero at the trailing edge, labelled gamma of trailing edge equals zero, the Kutta condition. Arrows above and below the sheet show the tangential velocity jump: faster above, slower below. Right panel: the Glauert transformation, showing a semicircle of radius c over 2 above the chord, with equally spaced angles theta marked around the semicircle and dropped vertically onto the chord to show the resulting unequal x stations — bunched near both the leading and trailing edges and spread out in the middle — labelled x equals c over two times one minus cosine theta.](assets/02-02-fig1.svg)

Left: the model. A body is replaced by a distribution of circulation whose strength is the local lift loading and which the Kutta condition pins to zero at the tail.

Right: why the substitution is worth making. Equal steps in $\theta$ become fine steps in $x$ exactly where $\gamma$ is changing fastest.

## Worked examples

**Example 1 (Glauert's integral, checked).** The identity $\int_0^\pi\cos n\theta\,d\theta/(\cos\theta-\cos\theta_0) = \pi\sin n\theta_0/\sin\theta_0$ is doing all the work in this theory, so it is worth confirming and reading.

*Numerical check at $\theta_0 = 60°$*, by symmetric midpoint quadrature (which converges to the principal value):

| $n$ | Numerical | $\pi\sin n\theta_0/\sin\theta_0$ |
|---|---|---|
| 0 | $0.000000$ | $0$ |
| 1 | $3.141593$ | $\pi = 3.141593$ |
| 2 | $3.141564$ | $2\pi\cos60° = 3.141593$ |
| 3 | $-0.000057$ | $0$ |

*(The last digits differ because the quadrature grid is finite; the agreement is to five figures.)*

*Same check at $\theta_0 = 45°$:* $n = 0$ gives 0, $n = 1$ gives $3.141593$, $n = 2$ gives $4.442883 = 2\pi\cos45°$ ✓, $n = 3$ gives $3.141593$ ✓.

*Reading the identity.* Three consequences, each of which shows up later:

**$n = 0$ gives zero.** A *constant* $\gamma\sin\theta$ contribution induces no downwash anywhere. This is the source of the non-uniqueness that Kutta must remove (P3), and it is why the $A_0$ term of the Glauert series can carry lift without disturbing the tangency balance.

**$n = 1$ gives $\pi$, independent of $\theta_0$.** The $\cos\theta$ mode induces a *uniform* downwash. That is why $A_0$ couples to $\alpha$ alone.

**Cosine in, sine out.** Modes do not mix. Expand the camber slope in $\cos n\theta$ and each coefficient falls out independently — the integral equation is diagonal in this basis. **That is the entire reason thin-airfoil theory has closed-form answers.**

**Example 2 (the flat plate, verified).** Claim: for a flat plate ($dz_c/dx = 0$) at angle of attack $\alpha$,

$$\gamma(\theta) = 2\alpha V_\infty\frac{1+\cos\theta}{\sin\theta}.$$

*(a) Does it satisfy the fundamental equation?* Substitute:

$$\frac{1}{2\pi}\int_0^\pi\frac{\gamma(\theta)\sin\theta}{\cos\theta-\cos\theta_0}d\theta = \frac{1}{2\pi}\int_0^\pi\frac{2\alpha V_\infty(1+\cos\theta)}{\cos\theta-\cos\theta_0}d\theta$$

$$= \frac{\alpha V_\infty}{\pi}\left[\int_0^\pi\frac{d\theta}{\cos\theta-\cos\theta_0}+\int_0^\pi\frac{\cos\theta\,d\theta}{\cos\theta-\cos\theta_0}\right] = \frac{\alpha V_\infty}{\pi}\left[0+\pi\right] = \alpha V_\infty.$$

**The right-hand side is $V_\infty(\alpha-0) = \alpha V_\infty$** ✓ — and note it worked *for every $\theta_0$*, which is what "satisfies the equation" means. The $n = 0$ and $n = 1$ Glauert integrals are exactly the two pieces needed.

*(b) Does it satisfy the Kutta condition?* At the trailing edge $\theta = \pi$ both numerator and denominator vanish. Let $\epsilon = \pi-\theta\to0$: then $\cos\theta = -\cos\epsilon\approx-1+\epsilon^2/2$, so $1+\cos\theta\approx\epsilon^2/2$, while $\sin\theta = \sin\epsilon\approx\epsilon$. Hence

$$\gamma\approx2\alpha V_\infty\frac{\epsilon^2/2}{\epsilon} = \alpha V_\infty\epsilon\to0 \quad\checkmark$$

**$\gamma$ vanishes linearly at the trailing edge.**

*(c) What happens at the leading edge?* At $\theta\to0$: $1+\cos\theta\to2$ and $\sin\theta\to\theta$, so

$$\gamma\approx\frac{4\alpha V_\infty}{\theta}\to\infty.$$

And since $x\approx\tfrac{c}{2}\cdot\tfrac{\theta^2}{2} = c\theta^2/4$, i.e. $\theta\propto\sqrt{x}$, this is

$$\gamma\sim\frac{1}{\sqrt{x}}.$$

**The theory predicts infinite velocity at the leading edge.** This is not a mistake but a consequence of the flat plate's zero nose radius: the flow really is turning a sharp corner there. A real airfoil has a rounded nose, which replaces the singularity with a finite, very large **suction peak** — the physical remnant of the mathematical infinity, and the thing that eventually triggers leading-edge stall ([3.3](03-03-separation-stall-drag-polar.md)).

**Note that the singularity is integrable** ($\int dx/\sqrt{x}$ converges), so the lift is finite even though the local velocity is not.

*(d) The lift, one line ahead of [2.3](02-03-symmetric-thin-airfoil.md).*

$$\Gamma = \int_0^c\gamma\,dx = \int_0^\pi\gamma(\theta)\frac{c}{2}\sin\theta\,d\theta = \alpha V_\infty c\int_0^\pi(1+\cos\theta)\,d\theta = \pi\alpha V_\infty c,$$

$$c_l = \frac{\rho V_\infty\Gamma}{q_\infty c} = \frac{2\Gamma}{V_\infty c} = 2\pi\alpha.$$

**There it is.** The most-quoted result in aerodynamics falls out of one substitution and two Glauert integrals.

## Watch out

- **You might give $\gamma$ the units of circulation.** It is circulation *per unit length* — a velocity. $\Gamma = \int\gamma\,dx$ restores the units.
- **You might evaluate the induced-velocity integral naively.** It is a Cauchy principal value; an ordinary numerical quadrature straddling $\xi = x$ diverges. Symmetric grids, or the $\theta$ substitution, handle it.
- **You might place the sheet on the camber line.** Thin-airfoil theory deliberately places it on the *chord*, and applies the boundary condition there too. Both errors are second order and they partly cancel.
- **You might expect the theory to know about thickness.** It does not — thickness enters at second order and contributes no lift at all. That is a feature: it is why one theory covers every thin section.
- **You might be alarmed by $\gamma\to\infty$ at the leading edge.** It is integrable, the lift is finite, and it is the mathematical shadow of a real suction peak.
- **You might forget the small-angle assumptions.** $\alpha$ and $dz_c/dx$ small, thickness small. Beyond about $10°$–$12°$ the linearization and the real flow both fail, for different reasons.

## One-liner

> Replace the airfoil by a sheet of vorticity on its own chord, demand that the sheet's induced downwash cancel the free stream's normal component everywhere, add $\gamma(c) = 0$, and substitute $x = \tfrac{c}{2}(1-\cos\theta)$ — at which point Glauert's integral diagonalizes the problem and the answers become one-liners.

## Problems

**P1 (🟢)** A vortex sheet of length $c = 1.5$ m has strength $\gamma(x) = \gamma_0(1-x/c)$ with $\gamma_0 = 20$ m/s, in a stream of $V_\infty = 50$ m/s at sea level. (a) Find the total circulation. (b) Find $c_l$. (c) Find the upper- and lower-surface velocities and the pressure difference at $x = 0$. (d) Does this distribution satisfy the Kutta condition?

**P2 (🟡)** An airfoil of chord $c = 2.0$ m is analyzed with the Glauert transformation. (a) Find $x$ for $\theta = 30°,\ 60°,\ 90°,\ 150°$. (b) Compare the chordwise spacing between $\theta = 0°$ and $30°$ with that between $\theta = 60°$ and $90°$, and say why the clustering is desirable. (c) For a flat plate at $\alpha = 5°$ in a $50$ m/s sea-level stream, compute $\Gamma$, $c_l$, and $L'$. (d) Find the sheet strength $\gamma$ at mid-chord.

**P3 (🔴)** The fundamental equation without the Kutta condition has infinitely many solutions. (a) Show that $\gamma_e(\theta) = C/\sin\theta$, for any constant $C$, satisfies the *homogeneous* equation — i.e. induces zero downwash at every station. (b) Find the circulation this eigen-solution carries, for a chord $c$. (c) Explain what this means for the uniqueness of the flow, and which of the three statements of the Kutta condition in [2.1](02-01-airfoil-geometry-kutta-condition.md) rules it out. (d) Connect this explicitly to the free parameter $\Gamma$ in the lifting-cylinder problem of [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md).

<details>
<summary>Solutions</summary>

**P1** (a) $$\Gamma = \int_0^c\gamma_0\left(1-\frac{x}{c}\right)dx = \gamma_0\left[x-\frac{x^2}{2c}\right]_0^c = \gamma_0\frac{c}{2} = 20\frac{1.5}{2} = 15.0\ \mathrm{m^2/s}.$$

(b) $$c_l = \frac{L'}{q_\infty c} = \frac{\rho V_\infty\Gamma}{\tfrac12\rho V_\infty^2c} = \frac{2\Gamma}{V_\infty c} = \frac{2(15.0)}{50(1.5)} = \frac{30}{75} = 0.400.$$

(c) At $x = 0$, $\gamma = \gamma_0 = 20$ m/s, so

$$u_u = V_\infty+\frac{\gamma}{2} = 50+10 = 60\ \mathrm{m/s}, \qquad u_l = V_\infty-\frac{\gamma}{2} = 50-10 = 40\ \mathrm{m/s}.$$

$$\Delta p = \rho_\infty V_\infty\gamma = 1.225(50)(20) = 1225\ \mathrm{Pa}.$$

*Check by Bernoulli directly:* $\Delta p = \tfrac12\rho(u_u^2-u_l^2) = \tfrac12(1.225)(3600-1600) = \tfrac12(1.225)(2000) = 1225$ Pa ✓ — the two forms agree exactly, since $u_u^2-u_l^2 = (u_u+u_l)(u_u-u_l) = 2V_\infty\gamma$.

(d) $$\gamma(c) = \gamma_0(1-1) = 0 \quad\checkmark$$

**Yes.** A linear ramp to zero is a perfectly admissible sheet as far as the Kutta condition is concerned. It is not, however, the *solution* for any particular airfoil — that requires also satisfying the tangency integral equation, which this distribution will not do for a flat plate.

**P2** (a) $$x = \frac{c}{2}(1-\cos\theta) = 1.0(1-\cos\theta).$$

| $\theta$ | $\cos\theta$ | $x$ (m) | $x/c$ |
|---|---|---|---|
| $0°$ | 1 | 0 | 0 |
| $30°$ | 0.86603 | 0.13397 | 0.0670 |
| $60°$ | 0.5 | 0.50000 | 0.250 |
| $90°$ | 0 | 1.00000 | 0.500 |
| $150°$ | $-0.86603$ | 1.86603 | 0.933 |

(b) $$\Delta x(0°\to30°) = 0.134\ \mathrm{m}, \qquad \Delta x(60°\to90°) = 1.000-0.500 = 0.500\ \mathrm{m}.$$

**The same $30°$ of $\theta$ covers 3.7 times less chord near the leading edge than near mid-chord.** That is exactly what is wanted: $\gamma$ behaves like $1/\sqrt{x}$ at the nose and like $\sqrt{c-x}$ at the tail, so the interesting variation is concentrated at the ends. The transformation spends its resolution where the function needs it — and equivalently, it turns those square-root edge behaviours into smooth trigonometric ones.

(c) $$\alpha = 5° = 0.087266\ \mathrm{rad}.$$

$$\Gamma = \pi\alpha V_\infty c = \pi(0.087266)(50)(2.0) = 27.42\ \mathrm{m^2/s}.$$

$$c_l = 2\pi\alpha = 2\pi(0.087266) = 0.5483.$$

$$q_\infty = \tfrac12(1.225)(2500) = 1531.3\ \mathrm{Pa}, \qquad L' = c_lq_\infty c = 0.5483(1531.3)(2.0) = 1679\ \mathrm{N/m}.$$

*Cross-check by Kutta–Joukowski:* $\rho V_\infty\Gamma = 1.225(50)(27.42) = 1679$ N/m ✓

(d) Mid-chord is $\theta = 90°$:

$$\gamma = 2\alpha V_\infty\frac{1+\cos90°}{\sin90°} = 2(0.087266)(50)\frac{1+0}{1} = 8.727\ \mathrm{m/s}.$$

*For perspective*, at $\theta = 10°$ ($x/c = 0.0076$) the same formula gives $2(0.087266)(50)(1.9848/0.17365) = 99.7$ m/s — **more than twice the free-stream speed, at less than 1% of chord.** The loading is enormously concentrated at the nose.

**P3** (a) Substitute $\gamma_e = C/\sin\theta$ into the left-hand side of the fundamental equation:

$$\frac{1}{2\pi}\int_0^\pi\frac{\gamma_e(\theta)\sin\theta}{\cos\theta-\cos\theta_0}d\theta = \frac{1}{2\pi}\int_0^\pi\frac{(C/\sin\theta)\sin\theta}{\cos\theta-\cos\theta_0}d\theta = \frac{C}{2\pi}\int_0^\pi\frac{d\theta}{\cos\theta-\cos\theta_0}.$$

That last integral is Glauert's with $n = 0$:

$$\int_0^\pi\frac{d\theta}{\cos\theta-\cos\theta_0} = \frac{\pi\sin0}{\sin\theta_0} = 0.$$

$$\Longrightarrow\quad \frac{1}{2\pi}\int_0^\pi\frac{\gamma_e\sin\theta\,d\theta}{\cos\theta-\cos\theta_0} = 0 \quad\text{for every }\theta_0. \quad\checkmark$$

**The $\sin\theta$ in the transformation's Jacobian cancels the $1/\sin\theta$ exactly**, leaving the $n = 0$ integral — which is zero. So $\gamma_e$ induces no downwash anywhere on the chord and is invisible to the tangency condition.

(b) $$\Gamma_e = \int_0^c\gamma_e\,dx = \int_0^\pi\frac{C}{\sin\theta}\cdot\frac{c}{2}\sin\theta\,d\theta = \frac{Cc}{2}\int_0^\pi d\theta = \frac{\pi Cc}{2}.$$

**Nonzero for any $C\neq0$** — it carries lift $L' = \rho V_\infty\pi Cc/2$, unbounded in both directions as $C$ ranges over the reals.

(c) *What it means.* If $\gamma^*$ solves the tangency equation, so does $\gamma^*+C/\sin\theta$ for every $C$ — and the two flows have *different lift*. The boundary-value problem "inviscid flow tangent to this airfoil" is therefore **not well posed**: it admits a one-parameter family of solutions, indexed by lift. Physically the family differs in where the rear stagnation point sits.

*Which statement of Kutta rules it out.* Statement **(iii)**, $\gamma(\text{TE}) = 0$, does it directly and most simply: as $\theta\to\pi$, $\sin\theta\to0$ so $\gamma_e = C/\sin\theta\to\infty$. The eigen-solution is **singular at the trailing edge**, so it violates $\gamma(\text{TE}) = 0$ for every $C$ except $C = 0$.

Statement **(ii)** rules it out equally: the velocity jump across the sheet is $\gamma$, so an infinite $\gamma$ at the trailing edge is an infinite velocity there. And statement **(i)** is the physical picture behind both — a flow that leaves the tail at infinite speed is not leaving smoothly.

**With $C$ forced to zero, the solution is unique and the lift is determined.** That is the moment thin-airfoil theory becomes predictive.

(d) *The connection to the cylinder.* In [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md), the flow past a cylinder was uniform stream + doublet + **a vortex of arbitrary strength $\Gamma$**. That vortex satisfied the cylinder's boundary condition — its induced velocity on the surface is purely tangential — for *any* $\Gamma$, so it was invisible to the tangency requirement and the lift was undetermined.

**$\gamma_e = C/\sin\theta$ is the same object.** It is the airfoil's version of "add a vortex, change the lift, break nothing." The parallel is exact:

| | Cylinder | Thin airfoil |
|---|---|---|
| Free mode | point vortex of strength $\Gamma$ | $\gamma_e = C/\sin\theta$ |
| Why it's free | induces only tangential velocity on the surface | $n = 0$ Glauert integral vanishes |
| Lift it carries | $\rho V_\infty\Gamma$ | $\rho V_\infty\pi Cc/2$ |
| What removes it | *nothing* — needs external spin | the sharp trailing edge |

**The cylinder has no sharp trailing edge, so nothing removes its free mode** — and that, in one line, is why cylinders need to be spun to lift and airfoils do not.

</details>

## Flashback

**From Lesson 2.1 (Airfoil geometry and the Kutta condition):** A NACA 2415 airfoil has chord $c = 1.2$ m. (a) State its maximum camber (in metres), the chordwise location of maximum camber, and its maximum thickness. (b) Compute the camber-line slope $dz_c/dx$ at $x/c = 0.1$ and at $x/c = 0.6$. (c) In the fundamental equation of this lesson, where do those slopes appear, and what happens to them for a NACA 0015?

<details>
<summary>Solution</summary>

(a) **NACA 2415**: $M = 2$, $P = 4$, $XX = 15$ — so $m = 0.02$, $p = 0.4$, $t = 0.15$.

Maximum camber $= 0.02(1.2) = 0.024$ m, at $x = 0.4(1.2) = 0.48$ m. Maximum thickness $= 0.15(1.2) = 0.180$ m.

(b) *Front branch, $\xi\leq0.4$:*

$$\frac{dz_c}{dx} = \frac{2m}{p^2}(p-\xi) = \frac{2(0.02)}{0.16}(0.4-\xi) = 0.25(0.4-\xi).$$

$$\xi = 0.1: \quad 0.25(0.3) = 0.0750.$$

*Rear branch, $\xi\geq0.4$:*

$$\frac{dz_c}{dx} = \frac{2m}{(1-p)^2}(p-\xi) = \frac{2(0.02)}{0.36}(0.4-\xi) = 0.11111(0.4-\xi).$$

$$\xi = 0.6: \quad 0.11111(-0.2) = -0.02222.$$

(c) *Where they appear.* On the **right-hand side** of the fundamental equation:

$$\frac{1}{2\pi}\int_0^c\frac{\gamma(\xi)\,d\xi}{x-\xi} = V_\infty\left(\alpha-\frac{dz_c}{dx}\right).$$

The camber line enters **only through its slope**, and only as a forcing function. Not its ordinate, not its curvature, not the thickness — just $dz_c/dx$ evaluated station by station.

**That is the structural reason [2.4](02-04-cambered-airfoil-aerodynamic-center.md) can Fourier-expand the camber effect and be done.** The equation is linear, so the response splits cleanly:

$$\underbrace{\alpha}_{\text{same for every airfoil}} - \underbrace{\frac{dz_c}{dx}}_{\text{all the airfoil-specific information}}$$

and superposition means the flat-plate answer $c_l = 2\pi\alpha$ plus a camber correction is the *complete* answer, not an approximation to it.

*For a NACA 0015.* $m = 0$, so $dz_c/dx\equiv0$ and the forcing reduces to $V_\infty\alpha$ — the flat-plate problem of Example 2, exactly. The 15% thickness never appears anywhere in the equation.

**So thin-airfoil theory predicts identical lift curves for a NACA 0015, a NACA 0006, and an infinitely thin flat plate.** Measurement says the lift-curve slopes agree to within a few percent, which is a genuinely surprising vindication of throwing thickness away. What thickness *does* control — the nose radius, and hence how gracefully the section stalls — is entirely outside this theory's reach, and is the business of [3.3](03-03-separation-stall-drag-polar.md).

</details>

## Connections

- **Backward:** the elementary vortex being smeared into a sheet is [1.2](01-02-potential-flow-elementary-flows.md)'s; the Kutta condition closing the problem is [2.1](02-01-airfoil-geometry-kutta-condition.md)'s; the Bernoulli step giving $\Delta p = \rho V_\infty\gamma$ is [`fluid-dynamics` 2.1](../../fluid-dynamics/lessons/02-01-bernoulli.md)'s.
- **Forward:** [2.3](02-03-symmetric-thin-airfoil.md) solves this equation for zero camber; [2.4](02-04-cambered-airfoil-aerodynamic-center.md) solves it for arbitrary camber by Fourier expansion; [2.5](02-05-finite-wings-downwash-lifting-line.md) reuses the identical idea one dimension up, replacing the *wing* by a sheet of trailing vorticity.
- **Sideways:** the structure here — unknown source density on a boundary, a singular kernel, an integral equation, solved by expansion in eigenfunctions of the kernel — is the **boundary integral method**, and it recurs verbatim in electrostatics (surface charge from a potential boundary condition), elasticity (dislocation distributions), and acoustics. The Cauchy principal value and the Hilbert-transform structure are shared with the Kramers–Kronig relations in optics.

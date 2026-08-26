# Aerodynamics · Lesson 2.4: The cambered airfoil and the aerodynamic centre

> ⏱ ~15 min · Module 2: Airfoils and finite wings · Builds on: [2.3 The symmetric thin airfoil](02-03-symmetric-thin-airfoil.md) · Unlocks: [2.5 Finite wings: downwash and lifting-line theory](02-05-finite-wings-downwash-lifting-line.md)

## Why this matters

Real wings are cambered, because camber buys lift at zero angle of attack — which means a lower landing speed for the same wing, or a smaller wing for the same landing speed. But it also introduces a **pitching moment that will not go away**, and that moment is what the tail has to trim against for the entire flight.

This lesson generalizes [2.3](02-03-symmetric-thin-airfoil.md) to arbitrary camber, and the result is beautifully clean: expand the camber slope in a Fourier cosine series, and the first three coefficients give you *everything*. The lift-curve slope stays $2\pi$; the whole curve shifts sideways by the zero-lift angle; and a constant quarter-chord moment appears.

**The aerodynamic centre stays at $c/4$, but the centre of pressure starts moving.** Understanding why those two statements are compatible is the point of the lesson.

## The idea

**One equation, one unknown function, infinitely many degrees of freedom.** The fundamental equation of [2.2](02-02-vortex-sheet-thin-airfoil-equation.md) is linear, so the sensible move is to expand $\gamma$ in a basis and solve mode by mode. The right basis was already written down:

$$\gamma(\theta) = 2V_\infty\left(A_0\frac{1+\cos\theta}{\sin\theta}+\sum_{n=1}^\infty A_n\sin n\theta\right),$$

which builds the Kutta condition in from the start — every term vanishes at $\theta = \pi$.

**Glauert's integral diagonalizes it.** Substituting the series and applying $\int_0^\pi\cos n\theta\,d\theta/(\cos\theta-\cos\theta_0) = \pi\sin n\theta_0/\sin\theta_0$ mode by mode, the integral equation collapses to a plain Fourier statement:

$$\alpha-\frac{dz_c}{dx} = A_0-\sum_{n=1}^\infty A_n\cos n\theta_0.$$

**No integral equation is left.** The left side is a known function of $\theta_0$ (given the airfoil and $\alpha$); the right side is its cosine series. Read off the coefficients with the standard Fourier formulas and you are done.

**Then only $A_0$, $A_1$, $A_2$ survive.** Lift depends on $2A_0+A_1$; the quarter-chord moment on $A_2-A_1$. Every higher coefficient describes a redistribution of loading that produces neither net force nor net quarter-chord moment. **Camber details beyond the first two Fourier modes are invisible to the integrated aerodynamics** — a fact that makes airfoil design surprisingly forgiving.

**Camber shifts the curve; it does not tilt it.** $\alpha$ enters only through $A_0 = \alpha-(\text{camber integral})$, so $dc_l/d\alpha$ is untouched. The whole lift curve slides left by the **zero-lift angle** $\alpha_{L=0}$, which is negative for positive camber.

**And the moment becomes a constant.** $c_{m,c/4} = \tfrac{\pi}{4}(A_2-A_1)$ contains no $\alpha$ at all. That is the definition of the aerodynamic centre being at $c/4$: a moment there that does not respond to angle of attack.

**But the centre of pressure moves.** If a constant moment sits alongside a lift that grows with $\alpha$, the point where the resultant acts must slide *forward* as lift increases — approaching $c/4$ from behind, and running off to infinity as $c_l\to0$.

## The formal version

**The Glauert series and the resulting Fourier problem.**

$$\gamma(\theta) = 2V_\infty\left(A_0\frac{1+\cos\theta}{\sin\theta}+\sum_{n=1}^\infty A_n\sin n\theta\right) \quad\Longrightarrow\quad \alpha-\frac{dz_c}{dx} = A_0-\sum_{n=1}^\infty A_n\cos n\theta_0.$$

**Coefficients.**

$$\boxed{\;A_0 = \alpha-\frac{1}{\pi}\int_0^\pi\frac{dz_c}{dx}\,d\theta_0, \qquad A_n = \frac{2}{\pi}\int_0^\pi\frac{dz_c}{dx}\cos n\theta_0\,d\theta_0\;}$$

with $dz_c/dx$ evaluated at $x = \tfrac{c}{2}(1-\cos\theta_0)$. **Only $A_0$ contains $\alpha$**; every $A_n$ ($n\geq1$) is a pure geometry number, fixed once the airfoil is drawn.

**Lift.** Integrating the series ($\Gamma = \tfrac{cV_\infty}{1}\cdot\pi(A_0+\tfrac12A_1)$ after the standard orthogonality steps):

$$\boxed{\;c_l = \pi\left(2A_0+A_1\right) = 2\pi\left[\alpha+\frac{1}{\pi}\int_0^\pi\frac{dz_c}{dx}(\cos\theta_0-1)\,d\theta_0\right].\;}$$

**Zero-lift angle.** Setting $c_l = 0$:

$$\boxed{\;\alpha_{L=0} = -\frac{1}{\pi}\int_0^\pi\frac{dz_c}{dx}\left(\cos\theta_0-1\right)d\theta_0, \qquad c_l = 2\pi\left(\alpha-\alpha_{L=0}\right).\;}$$

*In words: camber does not change the slope, only where the line crosses zero.* Positive camber gives negative $\alpha_{L=0}$ — the airfoil still lifts when pointed straight into the wind.

**Quarter-chord moment.**

$$\boxed{\;c_{m,c/4} = \frac{\pi}{4}\left(A_2-A_1\right),\;}$$

**independent of $\alpha$** — hence the aerodynamic centre is at $x_{ac}/c = 1/4$, exactly as for the symmetric case. **This is the general result: thin-airfoil theory puts the aerodynamic centre at the quarter chord for every camber line.**

**Leading-edge moment and centre of pressure.**

$$c_{m,LE} = -\frac{c_l}{4}+c_{m,c/4}, \qquad \boxed{\;\frac{x_{cp}}{c} = \frac{1}{4}-\frac{c_{m,c/4}}{c_l} = \frac14\left[1+\frac{\pi(A_1-A_2)}{c_l}\right].\;}$$

Since $c_{m,c/4}<0$ for positive camber, $x_{cp}>c/4$ always, and $x_{cp}\to c/4$ as $c_l\to\infty$, $x_{cp}\to\infty$ as $c_l\to0$.

**Sanity check.** Setting $z_c\equiv0$ gives $A_0 = \alpha$, $A_n = 0$, so $c_l = 2\pi\alpha$, $c_{m,c/4} = 0$, $x_{cp} = c/4$ — [2.3](02-03-symmetric-thin-airfoil.md) recovered exactly.

## Picture

![A two-panel figure. Left panel: lift and moment curves for a cambered airfoil compared with a symmetric one. The c sub l versus alpha lines are parallel with identical slope two pi per radian; the symmetric one passes through the origin, the cambered one is shifted left so that it crosses zero at a negative angle labelled alpha for zero lift, and has a positive c sub l at alpha equals zero labelled the camber bonus. Below, c sub m about the quarter chord is drawn as two horizontal lines: zero for the symmetric section and a constant negative value for the cambered one, labelled constant, independent of alpha — this is what aerodynamic centre means. Right panel: the centre of pressure position x over c plotted against c sub l for the cambered airfoil, a hyperbola starting far off the top of the plot near c sub l equals zero, dropping steeply, and approaching the horizontal dashed line at x over c equals one quarter from above as c sub l grows, with the aerodynamic centre marked as a fixed point on that dashed line and annotated the aerodynamic centre stays, the centre of pressure moves.](assets/02-04-fig1.svg)

Left: camber slides the lift curve left and pulls the moment line down, but tilts neither.

Right: the same information read as a moving resultant. The centre of pressure is a *consequence* of a fixed force-plus-couple at $c/4$, not an independent fact — which is exactly why aerodynamicists quote the aerodynamic centre and not the centre of pressure.

## Worked examples

**Example 1 (parabolic camber, in closed form).** Take the camber line $z_c/c = 4\varepsilon\,\xi(1-\xi)$ with $\xi = x/c$ — a parabolic arc of maximum camber $\varepsilon$ at mid-chord. Let $\varepsilon = 0.03$ (3% camber).

*The slope, in $\theta$.*

$$\frac{dz_c}{dx} = 4\varepsilon(1-2\xi), \qquad \text{and since } \xi = \tfrac12(1-\cos\theta), \quad 1-2\xi = \cos\theta,$$

$$\boxed{\frac{dz_c}{dx} = 4\varepsilon\cos\theta.}$$

**The camber slope is *exactly* the first cosine mode.** That is what makes this case analytic, and it is why the parabolic arc is the canonical worked example.

*Coefficients, by inspection of the orthogonality relations.*

$$A_0 = \alpha-\frac{1}{\pi}\int_0^\pi4\varepsilon\cos\theta\,d\theta = \alpha-0 = \alpha,$$

$$A_1 = \frac{2}{\pi}\int_0^\pi4\varepsilon\cos^2\theta\,d\theta = \frac{2}{\pi}(4\varepsilon)\frac{\pi}{2} = 4\varepsilon = 0.12,$$

$$A_2 = \frac{2}{\pi}\int_0^\pi4\varepsilon\cos\theta\cos2\theta\,d\theta = 0 \quad\text{(orthogonal)}, \qquad A_n = 0\ \ (n\geq2).$$

*Results.*

$$c_l = \pi(2\alpha+4\varepsilon) = 2\pi\alpha+4\pi\varepsilon,$$

$$\alpha_{L=0} = -2\varepsilon = -0.06\ \mathrm{rad} = -3.44°,$$

$$c_{m,c/4} = \frac{\pi}{4}(0-4\varepsilon) = -\pi\varepsilon = -0.0942.$$

*Reading them.* Three clean scalings worth carrying:

**The zero-lift angle is minus twice the camber ratio**, in radians. A 3% parabolic camber gives $-3.4°$; double the camber and you double the shift.

**The camber bonus at $\alpha = 0$ is $c_l = 4\pi\varepsilon = 0.377$** — a third of a typical cruise lift coefficient, free, from a 3% bend.

**The quarter-chord moment is $-\pi\varepsilon$**, nose-down, and it is there whether the airfoil is lifting or not.

*Centre of pressure.*

| $\alpha$ | $c_l$ | $x_{cp}/c$ |
|---|---|---|
| $5°$ | 0.9253 | 0.3519 |
| $10°$ | 1.4736 | 0.3140 |

*(At $\alpha = 5°$: $c_l = 2\pi(0.087266)+0.37699 = 0.54831+0.37699 = 0.92530$, and $x_{cp}/c = 0.25(1+0.37699/0.92530) = 0.3519$.)*

**The resultant moves forward by 4% of chord as the angle doubles** — a real effect, and one that a designer must account for in the spar loads.

**Example 2 (a NACA 2412, and how good the theory is).** The NACA four-digit camber slope is piecewise linear in $\xi$, and in $\theta$ that becomes remarkably tidy. With $m = 0.02$, $p = 0.40$:

*The slope in $\theta$.* On each branch $dz_c/dx = k(p-\xi)$ with $k_1 = 2m/p^2 = 0.2500$ and $k_2 = 2m/(1-p)^2 = 0.1111$. Substituting $\xi = \tfrac12(1-\cos\theta)$:

$$\frac{dz_c}{dx} = \frac{k}{2}\left(\cos\theta-\cos\theta_p\right), \qquad \cos\theta_p = 1-2p = 0.20, \quad \theta_p = 78.463°.$$

**Both branches are the *same* function of $\cos\theta$ up to a constant factor**, offset so that the slope vanishes at $\theta_p$ — which is the maximum-camber point, as it must be.

*Coefficients* (elementary integrals, split at $\theta_p$):

$$A_1 = 0.081495, \qquad A_2 = 0.013861.$$

*Results.*

$$\alpha_{L=0} = -0.036255\ \mathrm{rad} = -2.077°,$$

$$c_{m,c/4} = \frac{\pi}{4}(0.013861-0.081495) = \frac{\pi}{4}(-0.067634) = -0.0531.$$

*Against measurement.* Published NACA 2412 data at $Re = 6\times10^6$: $\alpha_{L=0}\approx-2.1°$ and $c_{m,c/4}\approx-0.05$.

**The zero-lift angle is right to within 0.03° and the moment to within 6%.** Thin-airfoil theory is not a crude estimate for these two quantities; it is essentially exact. (Contrast the lift-curve *slope*, which the theory overpredicts by about 4% — see [2.3](02-03-symmetric-thin-airfoil.md).)

*The centre of pressure, as it moves.* With $\pi(A_1-A_2) = 0.21248$:

| $\alpha$ | $c_l$ | $x_{cp}/c$ |
|---|---|---|
| $0°$ | 0.2278 | 0.483 |
| $2°$ | 0.4471 | 0.369 |
| $4°$ | 0.6665 | 0.330 |
| $8°$ | 1.1051 | 0.298 |
| $12°$ | 1.5437 | 0.284 |

**At zero incidence the resultant sits near mid-chord; at high lift it has migrated to within 3% of the quarter chord.** And at $\alpha = \alpha_{L=0} = -2.08°$ the lift vanishes while the moment does not, so $x_{cp}$ runs off to infinity — the loading has become a **pure couple**, positive lift ahead and negative behind, summing to zero force.

*Why this settles the aerodynamic-centre-versus-centre-of-pressure question.* The centre of pressure is a badly behaved coordinate: it wanders across half the chord in normal operation and becomes singular at one perfectly ordinary flight condition. The aerodynamic centre never moves and the pair $(c_l,\ c_{m,c/4})$ is finite and well-behaved everywhere.

**So aerodynamics quotes a force at a fixed point plus a constant couple, never a moving resultant.** Every stability derivative, every wind-tunnel data sheet, and every flight-dynamics model is written that way.

## Watch out

- **You might expect camber to change the lift slope.** It does not — $\alpha$ appears only in $A_0$, so $dc_l/d\alpha = 2\pi$ regardless. Camber shifts, never tilts.
- **You might integrate $dz_c/dx$ in $x$.** The coefficient formulas are integrals over $\theta_0$, uniformly weighted in $\theta_0$, not in $x$. Converting requires the Jacobian.
- **You might forget to split the NACA integral at $\theta_p$.** The slope is discontinuous there; integrating one branch across the whole range gives a wrong answer.
- **You might take $c_{m,c/4}<0$ as a defect.** It is the normal state for a cambered section, and trimming it is one of the tail's jobs. A **reflexed** camber line (trailing edge turned up) can make $A_2>A_1$ and give $c_{m,c/4}>0$, which is how tailless aircraft trim themselves.
- **You might chase the centre of pressure in design.** Use the aerodynamic centre; the centre of pressure is a derived quantity that is singular at zero lift.
- **You might think higher $A_n$ are negligible because they are small.** They are not negligible for the *loading* — they reshape $\gamma(x)$ and hence the pressure distribution, which decides separation. They are only invisible to $c_l$ and $c_{m,c/4}$.

## One-liner

> Expand the camber slope in a Fourier cosine series and Glauert's integral turns thin-airfoil theory into arithmetic: $A_0$ carries the angle of attack, $2A_0+A_1$ gives the lift, $A_2-A_1$ gives a quarter-chord moment that never changes with $\alpha$ — so camber slides the lift curve left, hangs a constant nose-down couple on the airfoil, and leaves the aerodynamic centre exactly where it was.

## Problems

**P1 (🟢)** A NACA 2412 section of chord $c = 1.5$ m flies at $V_\infty = 50$ m/s at sea level. Take $\alpha_{L=0} = -2.08°$ and $c_{m,c/4} = -0.053$. (a) Find $c_l$ at $\alpha = 5°$. (b) Find the lift per unit span. (c) Find the moment per unit span about the quarter chord. (d) Find $x_{cp}/c$.

**P2 (🟡)** A parabolic-arc camber line has maximum camber $\varepsilon$ at mid-chord. (a) Derive $A_0$, $A_1$, and $A_2$. (b) A wing section must produce $c_l = 0.55$ at $\alpha = 0$. Find the required $\varepsilon$. (c) With that camber, find $\alpha_{L=0}$, $c_{m,c/4}$, and the angle needed for $c_l = 1.1$. (d) Find $x_{cp}/c$ at both conditions and comment on the trend.

**P3 (🔴)** Compute the thin-airfoil properties of a **NACA 4412** from scratch. (a) Write $dz_c/dx$ in the form $\tfrac{k}{2}(\cos\theta-\cos\theta_p)$ on each branch, giving $k_1$, $k_2$, and $\theta_p$. (b) Evaluate the three integrals $I_0 = \int_0^\pi(dz_c/dx)d\theta$, $I_1 = \int_0^\pi(dz_c/dx)\cos\theta\,d\theta$, and $I_2 = \int_0^\pi(dz_c/dx)\cos2\theta\,d\theta$. (c) Find $\alpha_{L=0}$ and $c_{m,c/4}$, and compare with the measured values $\alpha_{L=0}\approx-4.0°$ and $c_{m,c/4}\approx-0.09$. (d) Compare with your NACA 2412 results and state the scaling rule for four-digit sections; explain why it holds exactly in this theory.

<details>
<summary>Solutions</summary>

**P1** (a) $$\alpha-\alpha_{L=0} = 5°-(-2.08°) = 7.08° = 0.123569\ \mathrm{rad},$$
$$c_l = 2\pi(0.123569) = 0.7764.$$

(b) $$q_\infty = \tfrac12(1.225)(50)^2 = 1531.3\ \mathrm{Pa}, \qquad L' = c_lq_\infty c = 0.7764(1531.3)(1.5) = 1783\ \mathrm{N/m}.$$

(c) $$M'_{c/4} = c_{m,c/4}\,q_\infty c^2 = -0.053(1531.3)(2.25) = -182.6\ \mathrm{N\cdot m/m},$$

nose-down.

(d) $$\frac{x_{cp}}{c} = \frac14-\frac{c_{m,c/4}}{c_l} = 0.25+\frac{0.053}{0.7764} = 0.25+0.0683 = 0.3183.$$

**P2** (a) With $z_c/c = 4\varepsilon\xi(1-\xi)$ and $1-2\xi = \cos\theta$:

$$\frac{dz_c}{dx} = 4\varepsilon(1-2\xi) = 4\varepsilon\cos\theta.$$

$$A_0 = \alpha-\frac{1}{\pi}\int_0^\pi4\varepsilon\cos\theta\,d\theta = \alpha-\frac{4\varepsilon}{\pi}\left[\sin\theta\right]_0^\pi = \alpha,$$

$$A_1 = \frac{2}{\pi}\int_0^\pi4\varepsilon\cos^2\theta\,d\theta = \frac{8\varepsilon}{\pi}\cdot\frac{\pi}{2} = 4\varepsilon,$$

$$A_2 = \frac{2}{\pi}\int_0^\pi4\varepsilon\cos\theta\cos2\theta\,d\theta = 0,$$

by orthogonality of $\cos\theta$ and $\cos2\theta$ on $[0,\pi]$.

(b) At $\alpha = 0$: $c_l = \pi(2A_0+A_1) = \pi(0+4\varepsilon) = 4\pi\varepsilon$. Setting this to 0.55:

$$\varepsilon = \frac{0.55}{4\pi} = \frac{0.55}{12.566} = 0.04377 \approx 4.4\%\ \text{camber}.$$

(c) $$\alpha_{L=0} = -2\varepsilon = -0.08754\ \mathrm{rad} = -5.015°.$$

$$c_{m,c/4} = -\pi\varepsilon = -\pi(0.04377) = -0.1375.$$

For $c_l = 1.1$:

$$\alpha-\alpha_{L=0} = \frac{1.1}{2\pi} = 0.175070\ \mathrm{rad} = 10.031°, \qquad \alpha = 10.031°-5.015° = 5.02°.$$

*A neat coincidence worth noting:* doubling the lift coefficient from 0.55 to 1.1 requires exactly the angle that the camber was already providing — because with $c_l\propto(\alpha-\alpha_{L=0})$ and $\alpha_{L=0} = -2\varepsilon$, the camber's contribution at $\alpha = 0$ is *half* of $c_l = 1.1$ by construction.

(d) $$\frac{x_{cp}}{c} = \frac14-\frac{c_{m,c/4}}{c_l}.$$

*At $c_l = 0.55$:* $0.25+0.1375/0.55 = 0.25+0.25 = 0.500$ — exactly mid-chord.

*At $c_l = 1.1$:* $0.25+0.1375/1.1 = 0.25+0.125 = 0.375$.

**The centre of pressure moves forward by 12.5% of chord as the lift doubles**, and the trend is toward $c/4$: at $c_l = 2.2$ it would be at $0.3125$, at $c_l\to\infty$ at $0.25$.

*Why the trend is always forward and always toward $c/4$.* The loading is the sum of two pieces: the $\alpha$-driven flat-plate part, whose resultant is at $c/4$, and the camber part, which is a fixed couple. As $\alpha$ grows the first piece grows and the second does not, so the combination's resultant migrates toward the first piece's location. **The centre of pressure is a weighted average, and the weight is shifting.**

**P3** (a) NACA **4412**: $m = 0.04$, $p = 0.40$, so

$$k_1 = \frac{2m}{p^2} = \frac{0.08}{0.16} = 0.5000, \qquad k_2 = \frac{2m}{(1-p)^2} = \frac{0.08}{0.36} = 0.2222,$$

$$\cos\theta_p = 1-2p = 0.20, \qquad \theta_p = \arccos(0.20) = 1.36944\ \mathrm{rad} = 78.463°, \qquad \sin\theta_p = 0.97980.$$

$$\frac{dz_c}{dx} = \frac{k_1}{2}(\cos\theta-0.2) \ \ (\theta<\theta_p), \qquad \frac{dz_c}{dx} = \frac{k_2}{2}(\cos\theta-0.2)\ \ (\theta>\theta_p).$$

*(Derivation: $dz_c/dx = k(p-\xi)$ with $\xi = \tfrac12(1-\cos\theta)$ gives $k\left[p-\tfrac12+\tfrac12\cos\theta\right] = \tfrac{k}{2}\left[\cos\theta-(1-2p)\right]$.)*

(b) Write $c_p^* \equiv\cos\theta_p = 0.2$, $s_p\equiv\sin\theta_p = 0.97980$. The needed antiderivatives of $(\cos\theta-c_p^*)w(\theta)$:

$$w = 1: \quad \sin\theta-c_p^*\theta,$$
$$w = \cos\theta: \quad \frac{\theta}{2}+\frac{\sin2\theta}{4}-c_p^*\sin\theta,$$
$$w = \cos2\theta: \quad \frac{\sin3\theta}{6}+\frac{\sin\theta}{2}-c_p^*\frac{\sin2\theta}{2}.$$

*Front segment $[0,\theta_p]$ and rear segment $[\theta_p,\pi]$, weighted by $k_1/2$ and $k_2/2$:*

$$I_0 = \frac{k_1}{2}\left(s_p-c_p^*\theta_p\right)+\frac{k_2}{2}\left(-s_p-c_p^*(\pi-\theta_p)\right)$$
$$= 0.25\left(0.97980-0.2(1.36944)\right)+0.11111\left(-0.97980-0.2(1.77215)\right)$$
$$= 0.25(0.70591)+0.11111(-1.33423) = 0.176478-0.148248 = 0.028230.$$

$$I_1 = 0.256025, \qquad I_2 = 0.043546$$

*(same antiderivatives, evaluated at $\theta_p$ and $\pi$ and combined with the same weights).*

$$A_1 = \frac{2}{\pi}I_1 = \frac{2(0.256025)}{\pi} = 0.16299, \qquad A_2 = \frac{2}{\pi}I_2 = \frac{2(0.043546)}{\pi} = 0.027723.$$

(c) $$\alpha_{L=0} = -\frac{1}{\pi}\int_0^\pi\frac{dz_c}{dx}(\cos\theta-1)\,d\theta = -\frac{I_1-I_0}{\pi} = -\frac{0.256025-0.028230}{\pi} = -\frac{0.227795}{\pi}$$
$$= -0.072509\ \mathrm{rad} = -4.155°.$$

$$c_{m,c/4} = \frac{\pi}{4}(A_2-A_1) = \frac{\pi}{4}(0.027723-0.16299) = \frac{\pi}{4}(-0.135267) = -0.1062.$$

*Against measurement.* $\alpha_{L=0}$: theory $-4.16°$, experiment $-4.0°$ — **4% high**. $c_{m,c/4}$: theory $-0.106$, experiment $-0.09$ — **18% high**.

**Both errors are in the same direction: the theory overestimates the effect of camber.** The reason is the boundary layer, which is thicker at the trailing edge than at the leading edge and so fills in part of the rear camber — the *effective* camber line is flatter than the metal one. The effect scales with camber, which is why the 2412 (2% camber) agreed within 6% on the moment and the 4412 (4% camber) only within 18%.

(d) *Comparison.*

| | NACA 2412 | NACA 4412 | ratio |
|---|---|---|---|
| $m$ | 0.02 | 0.04 | 2 |
| $A_1$ | 0.081495 | 0.162990 | 2 |
| $A_2$ | 0.013861 | 0.027723 | 2 |
| $\alpha_{L=0}$ | $-2.077°$ | $-4.155°$ | 2 |
| $c_{m,c/4}$ | $-0.0531$ | $-0.1062$ | 2 |

**The scaling rule: for four-digit sections with the same $P$, everything camber-related is exactly proportional to $M$.** Double the camber, double the zero-lift angle and double the quarter-chord moment.

*Why it is exact.* The camber slope enters the theory *linearly*, and for the four-digit family the slope is proportional to $m$ at every station:

$$\frac{dz_c}{dx} = \frac{k}{2}(\cos\theta-\cos\theta_p), \qquad k_1 = \frac{2m}{p^2},\quad k_2 = \frac{2m}{(1-p)^2},$$

so $m$ factors straight out of every integral, while $\theta_p$ — which depends only on $p$ — is unchanged. Since $\alpha_{L=0}$ and $c_{m,c/4}$ are both *linear* functionals of $dz_c/dx$, they inherit the proportionality exactly.

**The thickness digits are irrelevant to all of it**, so a NACA 4406 and a NACA 4424 have the same predicted $\alpha_{L=0}$ and $c_{m,c/4}$ as the 4412 — which measurement confirms to within a few percent.

*The design lesson.* Camber and angle of attack are separately adjustable, and the theory says exactly what each buys: camber sets where the lift curve sits and how much nose-down moment you must trim, angle of attack moves you along it. **Choosing $M$ is choosing a trim penalty in exchange for a low-speed lift bonus** — which is why airliners use modest fixed camber plus deployable flaps (temporary camber, used only when the bonus is worth the moment) rather than heavy permanent camber.

</details>

## Flashback

**From Lesson 2.3 (The symmetric thin airfoil):** A symmetric thin airfoil of chord $c = 1.8$ m flies at $V_\infty = 45$ m/s at sea level at $\alpha = 7°$. (a) Find $c_l$, $L'$, and $\Gamma$. (b) Find $c_{m,LE}$ and $x_{cp}$. (c) A cambered section with the same chord and $\alpha_{L=0} = -3°$ replaces it at the same angle. By what factor does the lift change, and what does the quarter-chord moment do?

<details>
<summary>Solution</summary>

(a) $$\alpha = 7° = 0.122173\ \mathrm{rad}, \qquad c_l = 2\pi(0.122173) = 0.76764.$$

$$q_\infty = \tfrac12(1.225)(45)^2 = \tfrac12(1.225)(2025) = 1240.3\ \mathrm{Pa},$$
$$L' = 0.76764(1240.3)(1.8) = 1714\ \mathrm{N/m},$$
$$\Gamma = \pi\alpha V_\infty c = \pi(0.122173)(45)(1.8) = 31.09\ \mathrm{m^2/s}.$$

*Check:* $\rho V\Gamma = 1.225(45)(31.09) = 1714$ N/m ✓

(b) $$c_{m,LE} = -\frac{c_l}{4} = -0.19191, \qquad x_{cp} = \frac{c}{4} = 0.450\ \mathrm{m}.$$

(c) $$c_l^{\rm cambered} = 2\pi\left(7°-(-3°)\right)\frac{\pi}{180} = 2\pi(0.174533) = 1.09662.$$

$$\frac{c_l^{\rm cambered}}{c_l^{\rm symmetric}} = \frac{1.09662}{0.76764} = 1.429.$$

**A 43% lift increase at the same attitude**, from a camber line whose zero-lift angle is only $-3°$.

*And the moment.* The symmetric section had $c_{m,c/4} = 0$ exactly; the cambered one has a constant negative $c_{m,c/4}$, of order $-0.05$ to $-0.08$ for a section with $\alpha_{L=0} = -3°$. **It is no longer zero, and no angle of attack will make it zero** — that is the price.

*Putting numbers on the price.* At $c_{m,c/4} = -0.07$,

$$M'_{c/4} = -0.07(1240.3)(1.8)^2 = -281\ \mathrm{N\cdot m/m}.$$

On a wing of $10$ m span that is roughly $2800$ N·m of nose-down pitching moment to trim, requiring a download on the tail — which subtracts from the total lift and adds trim drag.

**So camber is not free lift; it is lift traded against a permanent trim burden.** The trade is usually worth it, because trim drag is small compared with the induced-drag saving from being able to use a smaller wing. But this is exactly the calculation that makes flaps preferable to fixed camber when the extra lift is only needed for a few minutes per flight.

</details>

## Connections

- **Backward:** the Glauert series and the integral it is substituted into are [2.2](02-02-vortex-sheet-thin-airfoil-equation.md)'s; the $\varepsilon\to0$ limit is [2.3](02-03-symmetric-thin-airfoil.md); the NACA camber-line formula is [2.1](02-01-airfoil-geometry-kutta-condition.md)'s; the moment-transfer relation between $c_{m,LE}$, $c_{m,c/4}$ and $x_{cp}$ is [1.1](01-01-forces-moments-coefficients.md)'s.
- **Forward:** [2.5](02-05-finite-wings-downwash-lifting-line.md) applies a Fourier expansion of exactly this kind in the *spanwise* direction; [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md) reads its coefficients as span efficiency; [3.3](03-03-separation-stall-drag-polar.md) explains why the higher $A_n$, invisible here, decide where a section stalls.
- **Sideways:** the whole method is **expansion in the eigenfunctions of a singular integral operator** — the same manoeuvre as expanding in spherical harmonics because they diagonalize the Laplacian, or in normal modes because they diagonalize the stiffness matrix. The observation that only $A_0$, $A_1$, $A_2$ affect the integrated forces is a **multipole truncation**: the far field of a load distribution sees only its lowest moments, exactly as in [`em-refresher`](../../em-refresher/syllabus.md).

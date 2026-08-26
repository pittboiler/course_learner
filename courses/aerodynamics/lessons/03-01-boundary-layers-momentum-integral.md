# Aerodynamics · Lesson 3.1: Boundary layers recalled, and the momentum integral

> ⏱ ~15 min · Module 3: Boundary layers and viscous drag · Builds on: [2.6 Elliptical loading and induced drag](02-06-elliptical-loading-induced-drag-aspect-ratio.md), [`fluid-dynamics` 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md) · Unlocks: [3.2 Transition and turbulent boundary layers](03-02-transition-turbulent-boundary-layers.md), [3.3 Separation, stall, and the drag polar](03-03-separation-stall-drag-polar.md)

## Why this matters

Modules 1 and 2 produced a complete, quantitative, and *frictionless* theory of lift. It predicts zero drag on an airfoil, which is off by infinity.

Viscosity is what fixes that, and [`fluid-dynamics` 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md) established where it lives: a layer of relative thickness $1/\sqrt{Re}$ glued to the surface. This lesson reloads that result and then adds the tool that makes it useful for engineering — **von Kármán's momentum integral**, which converts the boundary-layer equations into a single ordinary differential equation you can solve with a guessed velocity profile and still get within a few percent.

**And it introduces the two thicknesses that actually matter.** Not $\delta$, which is arbitrary (defined by a 99% convention), but the **displacement thickness** $\delta^*$ and the **momentum thickness** $\theta$ — the first tells the outer inviscid flow how much the body appears to have swollen, and the second *is* the drag.

## The idea

**Reload, in three facts.** For a flat plate with laminar flow ([`fluid-dynamics` 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md)): the layer thickens as $\delta\approx5.0\sqrt{\nu x/U}$; the wall stress is $\tau_w = 0.332\rho U^2/\sqrt{Re_x}$; and the total friction coefficient is $C_f = 1.328/\sqrt{Re_L}$. **Nothing in this lesson re-derives Blasius**; it is used as given.

**But $\delta$ is a bad quantity.** It is defined as where $u$ reaches 99% of $U$ — and 99% is a convention, not physics. Change it to 99.5% and $\delta$ changes by 15%. Any result quoted in terms of $\delta$ inherits that arbitrariness.

**Two better thicknesses, both defined by integrals.** The **displacement thickness** answers: by how much would I have to move the wall outward, in a *frictionless* flow, to lose the same mass flow that friction actually costs me? The **momentum thickness** answers the same question about momentum flux.

**And momentum thickness is drag.** The control-volume argument is exact: the momentum the plate removed from the flow, divided by $\rho U^2$, *is* $\theta$ at the trailing edge. So measuring a wake profile gives the drag with no assumptions at all — which is how wind tunnels measure section drag to this day.

**Their ratio diagnoses the layer's health.** The **shape factor** $H = \delta^*/\theta$ is about 2.6 for a laminar Blasius profile, 1.3–1.4 for a turbulent one, and rises toward 3.5–4 as the layer approaches separation. **A single number that tells you whether the flow is about to let go.**

**The momentum integral turns all this into an ODE.** Apply conservation of momentum to a control volume straddling the layer and you get one equation relating $d\theta/dx$, the pressure gradient, and the wall stress. Guess a plausible velocity profile, evaluate $\theta$ and $\tau_w$ from it, and integrate. **The answer is typically within a few percent of exact — from a guess.**

## The formal version

**The three thicknesses.**

$$\boxed{\;\delta^* = \int_0^\infty\left(1-\frac{u}{U}\right)dy, \qquad \theta = \int_0^\infty\frac{u}{U}\left(1-\frac{u}{U}\right)dy, \qquad H = \frac{\delta^*}{\theta}.\;}$$

*In words: $\delta^*$ is the missing mass flow expressed as a length; $\theta$ is the missing momentum flux expressed as a length; $H$ compares them.*

**Blasius values** (laminar, zero pressure gradient):

$$\frac{\delta_{99}}{x} = \frac{5.0}{\sqrt{Re_x}}, \qquad \frac{\delta^*}{x} = \frac{1.721}{\sqrt{Re_x}}, \qquad \frac{\theta}{x} = \frac{0.664}{\sqrt{Re_x}}, \qquad H = \frac{1.721}{0.664} = 2.59.$$

$$c_f(x) = \frac{\tau_w}{q_\infty} = \frac{0.664}{\sqrt{Re_x}}, \qquad C_f = \frac{1}{L}\int_0^Lc_f\,dx = \frac{1.328}{\sqrt{Re_L}}.$$

**Note that $c_f(x)$ and $\theta/x$ share the constant $0.664$.** That is not a coincidence; it is the momentum integral, below.

**Drag from momentum thickness.**

$$\boxed{\;D' = \rho_\infty U^2\theta(L) \quad\text{(per unit width, one side)}, \qquad C_f = \frac{2\theta(L)}{L}.\;}$$

**Exact** — no profile assumption, no boundary-layer approximation beyond a control volume in which the pressure has recovered.

**Von Kármán momentum integral.**

$$\boxed{\;\frac{d\theta}{dx}+\left(2\theta+\delta^*\right)\frac{1}{U}\frac{dU}{dx} = \frac{\tau_w}{\rho U^2} = \frac{c_f}{2}\;}$$

*In words: the momentum thickness grows because the wall takes momentum away (the $\tau_w$ term) and because the outer flow is decelerating (the $dU/dx$ term).*

**For zero pressure gradient** ($dU/dx = 0$) it collapses to

$$\frac{d\theta}{dx} = \frac{c_f}{2},$$

which is the identity behind the shared $0.664$: integrating $c_f/2 = 0.332/\sqrt{Re_x}$ gives $\theta/x = 0.664/\sqrt{Re_x}$ ✓.

**The approximate method.** Assume a profile shape $u/U = f(y/\delta)$ satisfying $f(0) = 0$, $f(1) = 1$, $f'(1) = 0$. Then:

$$\frac{\theta}{\delta} = \int_0^1f(1-f)\,d\eta, \qquad \tau_w = \frac{\mu U}{\delta}f'(0),$$

and the momentum integral becomes a first-order ODE for $\delta(x)$ with solution $\delta\propto\sqrt{\nu x/U}$ and a computable constant.

**The pressure gradient enters through $dU/dx$.** A *favourable* gradient (accelerating outer flow, $dU/dx>0$) subtracts from $d\theta/dx$ and keeps the layer thin; an *adverse* gradient adds to it, thickening the layer and raising $H$ — the road to separation ([3.3](03-03-separation-stall-drag-polar.md)).

## Picture

![A two-panel figure. Left panel: a boundary-layer velocity profile on a flat plate, with the wall along the bottom, the streamwise velocity u rising from zero at the wall to the free-stream value U, and the ninety-nine percent thickness delta marked. To the right of the profile, two shaded areas are drawn: the area between the profile and the free-stream line, labelled displacement thickness delta star equals the missing mass flow as a length; and a second, smaller shaded region labelled momentum thickness theta equals the missing momentum, and equals the drag. A small equivalent sketch below shows the same outer flow over a thickened body whose surface has been displaced outward by delta star, with the caption what the inviscid flow actually sees. Right panel: a control volume drawn around a length of plate, with a uniform velocity profile entering on the left, a boundary-layer profile leaving on the right, mass spilling out through the top streamline, and the wall shear stress tau sub w acting along the bottom, annotated with the momentum balance that gives d theta by d x equals c sub f over two.](assets/03-01-fig1.svg)

Left: the two integral thicknesses, as areas. $\delta^*$ is how much the body appears to have grown; $\theta$ is how much momentum has been stolen.

Right: where the momentum integral comes from. Momentum in, minus momentum out, equals the force the wall applied — that is the entire derivation.

## Worked examples

**Example 1 (a laminar plate, four ways to the same drag).** Air ($\nu = 1.5\times10^{-5}$ m²/s, $\rho = 1.225$ kg/m³) flows at $U = 15$ m/s over a flat plate of length $L = 0.40$ m.

*Regime check.*

$$Re_L = \frac{UL}{\nu} = \frac{15(0.40)}{1.5\times10^{-5}} = 4.00\times10^5,$$

below the usual transition value of $5\times10^5$ — **laminar over the whole plate**, so Blasius applies. $\sqrt{Re_L} = 632.46$.

*The three thicknesses at the trailing edge.*

$$\delta_{99} = \frac{5.0(0.40)}{632.46} = 3.16\ \mathrm{mm}, \quad \delta^* = \frac{1.721(0.40)}{632.46} = 1.089\ \mathrm{mm}, \quad \theta = \frac{0.664(0.40)}{632.46} = 0.420\ \mathrm{mm}.$$

$$H = \frac{1.089}{0.420} = 2.59 \quad\checkmark$$

*Drag, route 1 — the friction coefficient.*

$$C_f = \frac{1.328}{632.46} = 0.002100, \qquad q_\infty = \tfrac12(1.225)(15)^2 = 137.81\ \mathrm{Pa},$$

$$D' = C_fq_\infty L = 0.002100(137.81)(0.40) = 0.11575\ \mathrm{N/m}.$$

*Drag, route 2 — the momentum thickness.*

$$D' = \rho U^2\theta = 1.225(225)(4.1995\times10^{-4}) = 0.11575\ \mathrm{N/m} \quad\checkmark$$

**Identical, as they must be** — the two routes are the same statement, since $C_f = 2\theta/L$: $2(0.41995)/400 = 0.002100$ ✓

*Reading the numbers.* Three things worth carrying:

**The layer is 3 mm thick after 40 cm of plate.** That is the whole point of boundary-layer theory: everything viscous is confined to under 1% of the plate length.

**$\delta^*$ is about a third of $\delta$.** So the outer inviscid flow sees a body 1.1 mm fatter than the metal one — small, but on an airfoil this apparent thickening is concentrated at the trailing edge and *decambers* the section, which is precisely the 4% lift-slope deficit of [2.3](02-03-symmetric-thin-airfoil.md).

**The drag is 0.116 N/m per side.** Tiny — but it is the *only* drag this plate has, and inviscid theory said zero.

**Example 2 (the momentum integral with a guessed profile).** Suppose you had never heard of Blasius. Assume the sinusoidal profile

$$\frac{u}{U} = \sin\left(\frac{\pi}{2}\frac{y}{\delta}\right) = \sin\left(\frac{\pi\eta}{2}\right), \qquad \eta = \frac{y}{\delta},$$

which satisfies $u(0) = 0$, $u(\delta) = U$, and $\partial u/\partial y|_{\delta} = 0$ — the three physically required conditions.

*Momentum thickness.*

$$\frac{\theta}{\delta} = \int_0^1\sin\frac{\pi\eta}{2}\left(1-\sin\frac{\pi\eta}{2}\right)d\eta = \frac{2}{\pi}-\frac12 = 0.63662-0.5 = 0.13662.$$

*Displacement thickness.*

$$\frac{\delta^*}{\delta} = \int_0^1\left(1-\sin\frac{\pi\eta}{2}\right)d\eta = 1-\frac{2}{\pi} = 0.36338, \qquad H = \frac{0.36338}{0.13662} = 2.660.$$

*Wall stress.*

$$\tau_w = \mu\left.\frac{\partial u}{\partial y}\right|_0 = \frac{\mu U}{\delta}\cdot\frac{\pi}{2}.$$

*Integrate.* With zero pressure gradient, $d\theta/dx = \tau_w/(\rho U^2)$:

$$0.13662\frac{d\delta}{dx} = \frac{\nu}{U\delta}\frac{\pi}{2} \quad\Longrightarrow\quad \delta\,d\delta = \frac{\pi\nu}{2(0.13662)U}dx = 11.4986\frac{\nu}{U}dx,$$

$$\frac{\delta^2}{2} = 11.4986\frac{\nu x}{U} \quad\Longrightarrow\quad \delta = \sqrt{22.997\frac{\nu x}{U}} = \frac{4.795\,x}{\sqrt{Re_x}}.$$

*Skin friction.*

$$c_f = \frac{2\tau_w}{\rho U^2} = \frac{\pi\nu}{U\delta} = \frac{\pi}{4.795\sqrt{Re_x}} = \frac{0.6551}{\sqrt{Re_x}}.$$

*Against Blasius.*

| Quantity | Sine guess | Blasius exact | Error |
|---|---|---|---|
| $\delta\sqrt{Re_x}/x$ | 4.795 | 5.0 | $-4.1\%$ |
| $c_f\sqrt{Re_x}$ | 0.6551 | 0.664 | $-1.3\%$ |
| $H$ | 2.660 | 2.59 | $+2.7\%$ |

**A guess with no differential equation solved gets the skin friction to 1.3%.**

*Why it works so well.* The momentum integral is an *exact* statement of momentum conservation; the only approximation is the profile shape, and the shape enters the answer only through two integrated quantities ($\theta/\delta$ and $f'(0)$). **Integration is a smoothing operation** — the details of a wrong profile average out, and any curve with the right qualitative shape gets the integrals nearly right.

*And notice which error is largest.* $\delta$ is off by 4%, $c_f$ by only 1.3%. That is because $\delta$ is the arbitrary 99% quantity while $c_f$ is a genuine physical one — a reminder that $\delta$ was never the thing to compute.

**This method — assume a profile, satisfy the integral balance exactly — is called the Kármán–Pohlhausen method**, and with a family of profiles parameterized by the pressure gradient it can predict separation on a real airfoil to within a few percent of chord. It was how boundary layers were computed for fifty years before CFD.

## Watch out

- **You might treat $\delta$ as physically meaningful.** It depends on the 99% convention. Quote $\delta^*$, $\theta$, or $c_f$ instead.
- **You might drop the $dU/dx$ term.** It is zero only for a flat plate. On an airfoil the outer flow accelerates then decelerates, and that term is what eventually causes separation.
- **You might forget the plate has two sides.** $C_f = 1.328/\sqrt{Re_L}$ is per wetted side.
- **You might use Blasius past $Re_x = 5\times10^5$.** Beyond transition the profile, the constants, and the physics all change ([3.2](03-02-transition-turbulent-boundary-layers.md)).
- **You might integrate $\theta$ to a finite upper limit carelessly.** The integrand vanishes only where $u\to U$; truncating too early undercounts.
- **You might expect a better profile guess to give a better $\delta$.** Not necessarily — profile guesses converge fast in $c_f$ and slowly in $\delta$, because $\delta$ is sensitive to the tail of the profile where the guess is worst.

## One-liner

> Viscosity hides in a layer of thickness $\sim x/\sqrt{Re_x}$, and the two integrals that matter are $\delta^*$ (how much fatter the body looks to the outer flow) and $\theta$ (which *is* the drag) — while von Kármán's momentum balance $d\theta/dx = c_f/2$ turns a guessed velocity profile into skin friction accurate to a percent.

## Problems

**P1 (🟢)** Air ($\nu = 1.5\times10^{-5}$ m²/s) flows at $U = 18$ m/s over a flat plate of length $L = 0.35$ m at sea level. (a) Find $Re_L$ and confirm the flow is laminar. (b) Find $\delta_{99}$, $\delta^*$, and $\theta$ at the trailing edge. (c) Find $c_f$ at the trailing edge and $C_f$ for the whole plate. (d) Find the friction drag per unit width on one side, two independent ways.

**P2 (🟡)** Repeat Example 2 with the parabolic profile $u/U = 2\eta-\eta^2$. (a) Find $\theta/\delta$, $\delta^*/\delta$, and $H$. (b) Find $\tau_w$ in terms of $\mu U/\delta$. (c) Integrate the momentum equation to find $\delta(x)$ and $c_f(x)$. (d) Compare all four results with Blasius and with the sine profile, and say which profile is better and why.

**P3 (🔴)** A wind-tunnel wake survey behind a 2-D airfoil of chord $c = 1.0$ m at $V_\infty = 60$ m/s (sea level) measures the velocity-deficit profile

$$\frac{u(y)}{V_\infty} = 1-0.25\,e^{-(y/a)^2}, \qquad a = 0.012\ \mathrm{m},$$

far enough downstream that the static pressure has returned to free-stream. (a) Find the wake's momentum thickness. *(Hint: $\int_{-\infty}^{\infty}e^{-(y/a)^2}dy = a\sqrt\pi$ and $\int_{-\infty}^{\infty}e^{-2(y/a)^2}dy = a\sqrt{\pi/2}$.)* (b) Find the section drag per unit span and the section drag coefficient. (c) The airfoil's boundary layers occupy roughly the front 40% of that wake momentum at the trailing edge, the rest coming from the pressure field. Comment on what a $c_d$ of this size implies about the flow, given that a fully attached airfoil at low $Re$ has $c_d\approx0.006$. (d) Explain why this measurement requires no knowledge of the airfoil's shape, pressure distribution, or boundary-layer state.

<details>
<summary>Solutions</summary>

**P1** (a) $$Re_L = \frac{UL}{\nu} = \frac{18(0.35)}{1.5\times10^{-5}} = \frac{6.30}{1.5\times10^{-5}} = 4.200\times10^5.$$

**Laminar** — below the transition value $5\times10^5$. $\sqrt{Re_L} = 648.07$.

(b) $$\delta_{99} = \frac{5.0(0.35)}{648.07} = 2.700\times10^{-3}\ \mathrm{m} = 2.700\ \mathrm{mm},$$
$$\delta^* = \frac{1.721(0.35)}{648.07} = 9.294\times10^{-4}\ \mathrm{m} = 0.9294\ \mathrm{mm},$$
$$\theta = \frac{0.664(0.35)}{648.07} = 3.586\times10^{-4}\ \mathrm{m} = 0.3586\ \mathrm{mm}.$$

*Check:* $H = 0.9294/0.3586 = 2.592$ ✓

(c) $$c_f(L) = \frac{0.664}{648.07} = 1.0246\times10^{-3}, \qquad C_f = \frac{1.328}{648.07} = 2.0492\times10^{-3}.$$

**$C_f$ is exactly twice the local $c_f$ at the trailing edge** — a consequence of $c_f\propto x^{-1/2}$, whose average over $[0,L]$ is twice its endpoint value.

(d) $$q_\infty = \tfrac12(1.225)(18)^2 = \tfrac12(1.225)(324) = 198.45\ \mathrm{Pa}.$$

*Route 1:* $$D' = C_fq_\infty L = 2.0492\times10^{-3}(198.45)(0.35) = 0.14233\ \mathrm{N/m}.$$

*Route 2:* $$D' = \rho U^2\theta = 1.225(324)(3.586\times10^{-4}) = 0.14233\ \mathrm{N/m} \quad\checkmark$$

**P2** (a) With $f = 2\eta-\eta^2$ so that $1-f = (1-\eta)^2$:

$$\frac{\theta}{\delta} = \int_0^1\left(2\eta-\eta^2\right)\left(1-2\eta+\eta^2\right)d\eta = \int_0^1\left(2\eta-5\eta^2+4\eta^3-\eta^4\right)d\eta$$
$$= 1-\frac53+1-\frac15 = \frac{15-25+15-3}{15} = \frac{2}{15} = 0.13333.$$

$$\frac{\delta^*}{\delta} = \int_0^1\left(1-2\eta+\eta^2\right)d\eta = 1-1+\frac13 = \frac13 = 0.33333.$$

$$H = \frac{1/3}{2/15} = \frac{15}{6} = 2.500.$$

(b) $$\left.\frac{\partial}{\partial\eta}\left(2\eta-\eta^2\right)\right|_0 = 2 \quad\Longrightarrow\quad \tau_w = \frac{\mu U}{\delta}(2) = \frac{2\mu U}{\delta}.$$

(c) $$\frac{d\theta}{dx} = \frac{\tau_w}{\rho U^2} \quad\Longrightarrow\quad \frac{2}{15}\frac{d\delta}{dx} = \frac{2\nu}{U\delta},$$

$$\delta\,d\delta = \frac{15\nu}{U}dx \quad\Longrightarrow\quad \frac{\delta^2}{2} = \frac{15\nu x}{U} \quad\Longrightarrow\quad \delta = \sqrt{\frac{30\nu x}{U}} = \frac{5.477\,x}{\sqrt{Re_x}}.$$

$$c_f = \frac{2\tau_w}{\rho U^2} = \frac{4\nu}{U\delta} = \frac{4}{5.477\sqrt{Re_x}} = \frac{0.7303}{\sqrt{Re_x}}.$$

(d) *Comparison.*

| Quantity | Parabolic | Sine | Blasius | Parab. error | Sine error |
|---|---|---|---|---|---|
| $\delta\sqrt{Re_x}/x$ | 5.477 | 4.795 | 5.0 | $+9.5\%$ | $-4.1\%$ |
| $c_f\sqrt{Re_x}$ | 0.7303 | 0.6551 | 0.664 | $+10.0\%$ | $-1.3\%$ |
| $\theta/\delta$ | 0.13333 | 0.13662 | 0.1328 | $+0.4\%$ | $+2.9\%$ |
| $H$ | 2.500 | 2.660 | 2.59 | $-3.5\%$ | $+2.7\%$ |

*(Blasius's $\theta/\delta$ is $0.664/5.0 = 0.1328$.)*

**The sine profile is clearly better**, and the reason is visible in the table: its error in $c_f$ is 1.3% against the parabola's 10%.

*Why.* Skin friction depends on $f'(0)$, the wall slope. The parabola's $f'(0) = 2$ against the sine's $\pi/2 = 1.571$ — a 27% difference — and the Blasius profile's true wall slope, expressed the same way, is closer to the sine's. The parabola is too steep at the wall because it must reach $U$ using only a quadratic, which forces it to do most of its rising early.

**The sine profile also has the right qualitative curvature**: it approaches $U$ tangentially with vanishing curvature, as the true profile does, whereas the parabola meets it with finite curvature.

*The lesson about the method itself.* Both guesses satisfy all three stated boundary conditions, yet one is eight times more accurate in $c_f$. **The momentum-integral method's accuracy is set almost entirely by how well the guess reproduces the near-wall slope**, so extra conditions imposed at the wall (for instance $\partial^2u/\partial y^2|_0 = -(1/\mu)dp/dx$, which is exact) buy far more than extra conditions at the outer edge. That insight is what Pohlhausen's quartic profile is built on.

**P3** (a) Write $f(y) = 0.25e^{-(y/a)^2}$, so $u/V_\infty = 1-f$ and

$$\frac{u}{V_\infty}\left(1-\frac{u}{V_\infty}\right) = (1-f)f = f-f^2.$$

$$\int_{-\infty}^{\infty}f\,dy = 0.25\,a\sqrt\pi = 0.25(0.012)(1.77245) = 5.3174\times10^{-3}\ \mathrm{m},$$

$$\int_{-\infty}^{\infty}f^2dy = 0.0625\,a\sqrt{\pi/2} = 0.0625(0.012)(1.25331) = 9.3998\times10^{-4}\ \mathrm{m},$$

$$\theta = 5.3174\times10^{-3}-9.3998\times10^{-4} = 4.3774\times10^{-3}\ \mathrm{m} = 4.377\ \mathrm{mm}.$$

(b) $$D' = \rho_\infty V_\infty^2\theta = 1.225(3600)(4.3774\times10^{-3}) = 19.30\ \mathrm{N/m}.$$

$$q_\infty = \tfrac12(1.225)(3600) = 2205\ \mathrm{Pa}, \qquad c_d = \frac{D'}{q_\infty c} = \frac{19.30}{2205(1.0)} = 8.755\times10^{-3}.$$

*Equivalently and more directly:* $c_d = 2\theta/c = 2(4.3774\times10^{-3})/1.0 = 8.755\times10^{-3}$ ✓

(c) $$c_d = 0.00876 \quad\text{against}\quad c_d\approx0.006\ \text{for a clean attached section}.$$

**About 46% more drag than a fully attached airfoil**, which is a meaningful excess but not a catastrophic one.

*What it implies.* The airfoil is not stalled — a stalled section has $c_d$ of 0.05 or more, five times this. But it is not running clean either. The likely causes, in order of plausibility:

**A short region of separated flow near the trailing edge**, typical of an airfoil at moderate-to-high lift, thickening the wake without destroying it.

**A fully turbulent boundary layer** where a laminar one was assumed — turbulent skin friction is several times laminar ([3.2](03-02-transition-turbulent-boundary-layers.md)), which alone can account for much of the excess.

**A thick section, or one at an off-design angle**, carrying more pressure drag than a thin one at its ideal angle.

*The wake shape itself is a clue.* A wake half-width of $a = 12$ mm on a 1 m chord, with a 25% peak deficit, is a *broad, shallow* wake — the signature of a thickened but attached boundary layer rather than a violent separation, which would give a narrow, deep, and unsteady one.

(d) *Why the method needs nothing else.* The measurement is a **control-volume momentum balance**, and control volumes do not care what is inside them.

Draw a box with its upstream face in undisturbed flow and its downstream face far behind the airfoil, where the static pressure has returned to $p_\infty$. Then the only forces on the box's fluid are the pressures on the two faces — equal and opposite — and the reaction to whatever force the airfoil exerted. Momentum conservation gives

$$D' = \int\rho u\left(V_\infty-u\right)dy = \rho V_\infty^2\int\frac{u}{V_\infty}\left(1-\frac{u}{V_\infty}\right)dy = \rho V_\infty^2\theta,$$

with **no reference to the body at all**. Shape, camber, thickness, angle of attack, laminar or turbulent, attached or separated — all of it is interior detail that the balance integrates over.

*Why this matters practically.* Force balances measuring 2-D section drag directly are hard: the drag is a small force, the model's end connections leak and contaminate the measurement, and tunnel-wall interference corrupts it. **A wake rake is a row of pitot tubes and costs almost nothing**, and it measures the thing you want without touching the model. It remains the standard method for airfoil drag.

*The one condition that must be respected.* The downstream face must be far enough back that $p = p_\infty$ across the whole wake. Too close, and the wake is still at reduced static pressure, the pressure term in the momentum balance no longer cancels, and the measured $\theta$ overstates the drag. In practice a rake sits at least one chord behind the trailing edge.

</details>

## Flashback

**From Lesson 2.6 (Elliptical loading, induced drag, and aspect ratio):** A wing has $AR = 12$, $e = 0.92$, wing area $S = 20$ m², and flies at $V_\infty = 55$ m/s at sea level with $C_L = 0.65$. (a) Find $C_{D,i}$ and the induced drag force. (b) Find the induced angle. (c) The wing's skin-friction drag coefficient is $C_{D,0} = 0.0095$. Find the total drag and $L/D$. (d) At what $C_L$ are the two drag contributions equal?

<details>
<summary>Solution</summary>

(a) $$\pi eAR = \pi(0.92)(12) = 34.683,$$

$$C_{D,i} = \frac{C_L^2}{\pi eAR} = \frac{0.4225}{34.683} = 0.012182.$$

$$q_\infty = \tfrac12(1.225)(55)^2 = 1852.8\ \mathrm{Pa}, \qquad D_i = 0.012182(1852.8)(20) = 451.4\ \mathrm{N}.$$

(b) $$\alpha_i = \frac{C_L}{\pi eAR} = \frac{0.65}{34.683} = 0.018741\ \mathrm{rad} = 1.074°.$$

(c) $$C_D = C_{D,0}+C_{D,i} = 0.0095+0.012182 = 0.021682,$$

$$\frac{L}{D} = \frac{C_L}{C_D} = \frac{0.65}{0.021682} = 29.98.$$

$$D = 0.021682(1852.8)(20) = 803.4\ \mathrm{N}, \qquad L = 0.65(1852.8)(20) = 24{,}087\ \mathrm{N}.$$

*Check:* $24{,}087/803.4 = 29.98$ ✓

(d) $$C_{D,0} = \frac{C_L^2}{\pi eAR} \quad\Longrightarrow\quad C_L = \sqrt{\pi eAR\,C_{D,0}} = \sqrt{34.683(0.0095)} = \sqrt{0.329489} = 0.5740.$$

*The significance of that condition.* Setting the two drags equal is exactly the condition for **maximum $L/D$**. Minimizing $C_D/C_L = C_{D,0}/C_L+C_L/(\pi eAR)$ with respect to $C_L$ gives

$$-\frac{C_{D,0}}{C_L^2}+\frac{1}{\pi eAR} = 0 \quad\Longrightarrow\quad C_L^2 = \pi eAR\,C_{D,0},$$

the same equation. So $C_L = 0.574$ is this wing's best-glide lift coefficient, where

$$\left(\frac{L}{D}\right)_{\max} = \frac{C_L}{2C_{D,0}} = \frac{0.574}{0.019} = 30.2.$$

*The bridge to Module 3.* Notice what the calculation needed: $C_{D,0} = 0.0095$, handed over as a given. **Module 2 could not compute that number** — it is entirely viscous, and inviscid theory says it is zero.

This lesson is the start of computing it. The plate result $C_f = 1.328/\sqrt{Re_L}$ at a wing's chord Reynolds number of $55(2)/1.5\times10^{-5} = 7.3\times10^6$ would give $C_f = 4.9\times10^{-4}$ per side — an order of magnitude *below* the quoted $0.0095$, which tells you immediately that the real boundary layer is not laminar. **That discrepancy is the subject of [3.2](03-02-transition-turbulent-boundary-layers.md).**

</details>

## Connections

- **Backward:** the boundary-layer concept, the $\delta\sim\sqrt{\nu x/U}$ scaling, the Blasius similarity solution and its constants are [`fluid-dynamics` 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md)'s and are *reloaded*, not re-derived here; the Reynolds number is [`fluid-dynamics` 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md)'s; the drag that Module 2 could not produce is [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)'s d'Alembert paradox.
- **Forward:** [3.2](03-02-transition-turbulent-boundary-layers.md) replaces the laminar constants with turbulent ones and finds skin friction several times larger; [3.3](03-03-separation-stall-drag-polar.md) puts the $dU/dx$ term to work and shows how an adverse gradient drives $H$ up until the layer separates.
- **Sideways:** the momentum integral is a **weighted-residual method** — satisfy the governing equation in an integrated (weak) sense rather than pointwise — which is exactly the idea behind Galerkin and finite-element methods in [`numerical-analysis`](../../numerical-analysis/syllabus.md). The insight that integrated quantities are insensitive to profile detail is the same reason a variational estimate of a ground-state energy is far more accurate than the trial wavefunction that produced it.

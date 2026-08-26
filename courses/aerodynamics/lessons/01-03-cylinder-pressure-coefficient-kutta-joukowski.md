# Aerodynamics · Lesson 1.3: The cylinder, pressure coefficient, and Kutta–Joukowski

> ⏱ ~15 min · Module 1: Aerodynamic forces and potential flow · Builds on: [1.2 Potential flow recalled](01-02-potential-flow-elementary-flows.md), [`fluid-dynamics` 2.6](../../fluid-dynamics/lessons/02-06-flow-past-cylinder-lift.md) · Unlocks: [2.1 Airfoil geometry and the Kutta condition](02-01-airfoil-geometry-kutta-condition.md), [3.3 Separation, stall, and the drag polar](03-03-separation-stall-drag-polar.md)

## Why this matters

This lesson does two things that everything after it depends on.

It introduces the **[pressure coefficient](../reference.md#pressure-coefficient)** $C_p$ — the single most-plotted quantity in aerodynamics. Every airfoil is characterized by its $C_p$ distribution, every wind-tunnel model is instrumented to measure it, and every CFD result is presented as one. It is where the forces of [1.1](01-01-forces-moments-coefficients.md) actually come from.

And it establishes **Kutta–Joukowski**: $L' = \rho_\infty V_\infty\Gamma$. Lift is circulation. Not "the air travels farther over the top," not "the wing pushes air down" as a complete explanation — circulation, and exactly proportional to it. That result, derived here on the easiest possible body, transfers unchanged to any 2-D shape and is the foundation of all of Module 2.

The cylinder flow itself was built in [`fluid-dynamics` 2.6](../../fluid-dynamics/lessons/02-06-flow-past-cylinder-lift.md); this is a reload of that result read through aerodynamic eyes, plus $C_p$, which is new.

## The idea

**The pressure coefficient.** Bernoulli says that where the flow is fast the pressure is low. Nondimensionalize the pressure *difference* from free stream by the dynamic pressure and you get a number that depends only on the local speed ratio:

$$C_p = \frac{p-p_\infty}{q_\infty} = 1-\left(\frac{V}{V_\infty}\right)^2.$$

**That is a remarkable simplification.** The pressure at any point in an incompressible potential flow is fixed by the speed there and nothing else — not by density, not by free-stream speed, not by the body's size. Solve the flow once and the $C_p$ distribution is universal.

Two anchors worth memorizing: $C_p = +1$ exactly at a stagnation point ($V = 0$), and $C_p = 0$ wherever the flow has recovered to free-stream speed. Negative $C_p$ means the flow is faster than free stream and the pressure is *below* ambient — **suction**, which is where most of a wing's lift comes from.

**The cylinder without circulation.** Uniform stream plus doublet. The surface speed is $2V_\infty\sin\theta$ — zero at the front and back stagnation points, twice free stream at the shoulders. So

$$C_p = 1-4\sin^2\theta,$$

symmetric top-to-bottom (no lift) and fore-to-aft (no drag). The second symmetry is **d'Alembert's paradox**.

**Adding circulation.** Superpose a vortex. The surface speed becomes $2V_\infty\sin\theta+\Gamma/(2\pi R)$ in magnitude — faster over the top, slower underneath. Faster means lower pressure, so the cylinder is sucked upward. The top-bottom symmetry is broken and lift appears; the fore-aft symmetry survives, so the drag stays exactly zero.

**And the amount of lift depends only on $\Gamma$.** Not on $R$, not on the body's shape. That is the content of Kutta–Joukowski, and it is why the rest of the course can talk about circulation instead of about geometry.

## The formal version

**Pressure coefficient.**

$$\boxed{\;C_p \equiv \frac{p-p_\infty}{q_\infty} = \frac{p-p_\infty}{\tfrac12\rho_\infty V_\infty^2} = 1-\left(\frac{V}{V_\infty}\right)^2\;}$$

(the last equality for incompressible, inviscid flow, via Bernoulli). $C_p\leq1$ always in incompressible flow, with equality only at a stagnation point; there is no lower bound.

**Forces from $C_p$.** For an airfoil of chord $c$, with subscripts $u$ and $l$ for upper and lower surface,

$$\boxed{\;c_n = \frac{1}{c}\int_0^c\left(C_{p,l}-C_{p,u}\right)dx,\;}$$

and at small angle of attack $c_l\approx c_n$. *In words: lift is the area between the upper and lower $C_p$ curves.* This is why a $C_p$ plot is the aerodynamicist's primary diagnostic — you can read the lift straight off it.

**Non-lifting cylinder.**

$$V_\theta = -2V_\infty\sin\theta, \qquad \boxed{\;C_p = 1-4\sin^2\theta.\;}$$

| $\theta$ | $V/V_\infty$ | $C_p$ | |
|---|---|---|---|
| $0°$ | 0 | $+1$ | forward stagnation |
| $30°$ | 1 | $0$ | flow at free-stream speed |
| $60°$ | 1.73 | $-2$ | |
| $90°$ | 2 | $-3$ | maximum suction |
| $180°$ | 0 | $+1$ | rear stagnation |

**The minimum $C_p$ on a circular cylinder is exactly $-3$** — a useful benchmark. Thinner bodies reach less suction; the flat plate approaches $C_p\to0$.

**Lifting cylinder.** Add a vortex of circulation $\Gamma$ (clockwise positive):

$$V_\theta = -2V_\infty\sin\theta-\frac{\Gamma}{2\pi R}, \qquad C_p = 1-\left(2\sin\theta+\frac{\Gamma}{2\pi RV_\infty}\right)^2.$$

**Stagnation points** where $V_\theta = 0$:

$$\boxed{\;\sin\theta_s = -\frac{\Gamma}{4\pi V_\infty R}.\;}$$

| $\Gamma/(4\pi V_\infty R)$ | $\theta_s$ | Behaviour |
|---|---|---|
| 0 | $0°,\ 180°$ | symmetric, no lift |
| 0.25 | $-14.5°,\ 194.5°$ | both points slide down |
| 0.50 | $-30°,\ 210°$ | further down |
| **1.00** | $-90°$ (both) | **the two merge at the bottom** |
| $>1$ | none on the surface | a standoff vortex sits below |

**Kutta–Joukowski theorem.**

$$\boxed{\;L' = \rho_\infty V_\infty\Gamma, \qquad D' = 0.\;}$$

*In words: lift per unit span is density times free-stream speed times circulation, and there is no drag at all.*

**The theorem holds for any two-dimensional shape**, not just the cylinder — the cylinder is merely the easiest case on which to prove it. That generality is what makes it the foundation of thin-airfoil theory ([2.3](02-03-symmetric-thin-airfoil.md)) and lifting-line theory ([2.5](02-05-finite-wings-downwash-lifting-line.md)).

**Where the circulation comes from.** Nowhere, in this theory — $\Gamma$ is a free parameter you insert by hand. Two physical mechanisms supply it in reality:

**Spin.** A rotating cylinder drags air around by no-slip, generating real circulation. That is the **Magnus effect**, and it is why a spinning ball curves.

**A sharp trailing edge.** An airfoil has no spin, but its sharp tail forces the flow to leave smoothly, and only one value of $\Gamma$ permits that. This is the **Kutta condition** of [2.1](02-01-airfoil-geometry-kutta-condition.md), and it is what turns an indeterminate theory into a predictive one.

**Both mechanisms are viscous in origin** — no-slip in the first case, the inability of real flow to turn a sharp corner at infinite speed in the second. Inviscid theory gets the answer right but cannot explain why.

## Picture

![A two-panel figure. Left: the pressure coefficient distribution around a circular cylinder, plotted as C_p against angle from the forward stagnation point, showing the ideal potential-flow curve one minus four sine squared theta starting at plus one, crossing zero at thirty degrees, dipping to minus three at ninety degrees, and rising symmetrically back to plus one at one hundred eighty degrees — with a second, measured curve overlaid that follows the ideal curve to about eighty degrees and then flattens out at roughly minus one for the rest of the rear surface, the gap between them shaded and labelled as the pressure that separation destroys. Right: a lifting cylinder with streamlines crowded over the top and sparse underneath, the two stagnation points both dropped below the horizontal axis, an upward lift arrow labelled L equals rho V Gamma, and a crossed-out drag arrow, with a small inset showing the stagnation points merging at the bottom when Gamma reaches four pi V R.](assets/01-03-fig1.svg)

Left: the ideal and the real. The front half matches beautifully — which is why potential flow predicts lift well. The rear half does not, because the boundary layer separates, and the missing pressure recovery *is* the pressure drag ([3.3](03-03-separation-stall-drag-polar.md)).

Right: circulation breaks the top-bottom symmetry and makes lift, while leaving the fore-aft symmetry — and hence the zero drag — untouched.

## Worked examples

**Example 1 (the boss problem: stagnation points, merge, and lift).** A cylinder of radius $R = 0.30$ m sits in a sea-level stream of $V_\infty = 40$ m/s carrying circulation $\Gamma$.

*Stagnation points as a function of $\Gamma$.* Setting the surface speed to zero,

$$-2V_\infty\sin\theta_s-\frac{\Gamma}{2\pi R} = 0 \quad\Longrightarrow\quad \sin\theta_s = -\frac{\Gamma}{4\pi V_\infty R}.$$

With $4\pi V_\infty R = 4\pi(40)(0.30) = 150.80$ m²/s, this is $\sin\theta_s = -\Gamma/150.80$.

For $\Gamma<150.80$ there are two solutions, symmetric about the vertical and both **below** the horizontal axis — the flow's stagnation points slide down together as circulation increases. For $\Gamma = 75.4$ m²/s, $\sin\theta_s = -0.5$ and $\theta_s = -30°$ and $210°$.

*Where they merge.*

$$\sin\theta_s = -1 \quad\Longrightarrow\quad \boxed{\Gamma_{\rm merge} = 4\pi V_\infty R = 150.80\ \mathrm{m^2/s},}$$

with both points at $\theta_s = -90°$, the bottom of the cylinder.

*Lift at that condition.*

$$q_\infty = \tfrac12(1.225)(40)^2 = 980\ \mathrm{Pa},$$

$$L' = \rho_\infty V_\infty\Gamma = 1.225(40)(150.80) = 7389\ \mathrm{N/m}.$$

*Or directly:* $L' = \rho_\infty V_\infty(4\pi V_\infty R) = 4\pi\rho_\infty V_\infty^2R = 4\pi(1.225)(1600)(0.30) = 7389$ N/m ✓.

*Confirming by integrating the surface pressure.* The force per unit span is

$$\mathbf{F}' = -\oint p\,\hat n\,R\,d\theta, \qquad \hat n = (\cos\theta,\ \sin\theta),$$

so, writing $p = p_\infty+q_\infty C_p$ (the constant $p_\infty$ integrates to zero around a closed body),

$$L' = -q_\infty R\int_0^{2\pi}C_p(\theta)\sin\theta\,d\theta, \qquad D' = -q_\infty R\int_0^{2\pi}C_p(\theta)\cos\theta\,d\theta.$$

Evaluating numerically with $C_p = 1-\left(2\sin\theta+\Gamma/(2\pi RV_\infty)\right)^2$ at $\Gamma = 150.80$:

$$L' = 7389.0\ \mathrm{N/m}\ \checkmark, \qquad D' = -1.2\times10^{-12}\ \mathrm{N/m} \approx 0\ \checkmark$$

**The integration reproduces Kutta–Joukowski to seven figures and gives zero drag to machine precision.**

*Why the drag integrates to zero — the structural reason.* Expand $C_p$:

$$C_p = 1-4\sin^2\theta-\frac{2\Gamma\sin\theta}{\pi RV_\infty}-\left(\frac{\Gamma}{2\pi RV_\infty}\right)^2.$$

Every term is either **constant** or a function of $\sin\theta$ only. Now $\int_0^{2\pi}\cos\theta\,d\theta = 0$, $\int_0^{2\pi}\sin^2\theta\cos\theta\,d\theta = 0$, and $\int_0^{2\pi}\sin\theta\cos\theta\,d\theta = 0$ — **every term's contribution to the drag integral vanishes by symmetry.**

The physical statement is simpler: $C_p(\theta) = C_p(\pi-\theta)$, so the pressure at any point on the front is exactly matched by the pressure at its mirror image on the back. The nose is pushed backwards and the tail is pushed forwards by identical amounts.

*And the lift integral does not vanish*, because the term $-2\Gamma\sin\theta/(\pi RV_\infty)$ multiplied by $\sin\theta$ gives $\int\sin^2\theta\,d\theta = \pi\neq0$. **The circulation term is the only one that survives**, which is exactly why $L'$ depends on $\Gamma$ and on nothing else about the body.

*A reality check on the magnitude.* Taking the cylinder's diameter as a "chord",

$$c_l = \frac{L'}{q_\infty(2R)} = \frac{7389}{980(0.60)} = 12.57 = 4\pi.$$

**A lift coefficient of 12.6** — against about $1.5$ for a good airfoil. That is not an error: a spinning cylinder really is an extraordinarily effective lift generator, which is the principle of the **Flettner rotor** used on a handful of ships. What kills it in practice is the drag (enormous, and invisible to this theory) and the power to spin it.

**Example 2 ($C_p$ on a cylinder — ideal versus real).** Compare the potential-flow $C_p$ on a non-lifting cylinder with what is actually measured at high Reynolds number.

*The ideal distribution.*

$$C_p = 1-4\sin^2\theta.$$

| $\theta$ from the nose | Ideal $C_p$ | Measured (turbulent, $Re\approx10^6$) |
|---|---|---|
| $0°$ | $+1.00$ | $+1.00$ |
| $30°$ | $0.00$ | $\approx0.0$ |
| $60°$ | $-2.00$ | $\approx-1.8$ |
| $90°$ | $-3.00$ | $\approx-2.2$ |
| $120°$ | $-2.00$ | $\approx-1.2$ |
| $150°$ | $-1.00$ | $\approx-1.2$ |
| $180°$ | $+1.00$ | $\approx-1.2$ |

*Reading the comparison.*

**The front agrees closely.** From the nose to about $70°$ the flow is accelerating, the pressure is falling, and the boundary layer is thin, well-behaved and firmly attached. Potential flow is genuinely accurate there — the error is a few percent.

**The rear does not agree at all.** The ideal theory predicts the pressure recovering all the way to $+1$ at the tail; the measurement shows it flattening near $-1.2$ and staying there. The boundary layer has **separated**, and downstream of separation the pressure simply stops changing.

**The gap is the drag.** Ideal theory says the $+1$ at the tail cancels the $+1$ at the nose. Reality delivers $-1.2$ at the tail instead, so nothing cancels the nose pressure and the cylinder is pushed backwards. Integrating the *measured* distribution gives $C_D\approx0.3$–$1.2$ depending on Reynolds number, against the ideal $0$.

*Why this figure is worth carrying.* It shows precisely where inviscid theory can and cannot be trusted, and it does so quantitatively:

**Use potential flow for the accelerating region and for lift.** On a streamlined body — an airfoil at moderate angle — the flow stays attached over nearly the whole surface, the $C_p$ distribution is close to ideal everywhere, and the predicted lift is good to a few percent. That is why Module 2 works.

**Never use it for drag, or for anything downstream of separation.** On a bluff body the theory is wrong over half the surface and wrong about the total drag by an infinite factor.

*The Reynolds-number twist.* At $Re\approx10^5$ (laminar separation) the cylinder's $C_D$ is about $1.2$; at $Re\approx10^6$ (turbulent separation) it drops to about $0.3$. **Making the boundary layer more turbulent reduces the drag**, because a turbulent layer resists the adverse gradient longer and separates further aft — the drag crisis of [`fluid-dynamics` 3.5](../../fluid-dynamics/lessons/03-05-separation-drag.md), and the reason golf balls have dimples.

## Watch out

- **You might expect $C_p$ to have a lower bound.** It is capped at $+1$ above but unbounded below; a suction peak of $-6$ is unremarkable on a highly loaded airfoil.
- **You might forget the factor of $\tfrac12$ in $q_\infty$.** $C_p = (p-p_\infty)/(\tfrac12\rho V^2)$, not $(p-p_\infty)/(\rho V^2)$.
- **You might use $C_p = 1-(V/V_\infty)^2$ in compressible flow.** It holds only for incompressible flow; [4.6](04-06-subsonic-compressibility-transonic.md) gives the compressible version.
- **You might take the vortex sign convention for granted.** Here $\Gamma>0$ is clockwise and produces upward lift on a left-to-right stream. The opposite convention is equally common in mathematics.
- **You might expect the theory to determine $\Gamma$.** It does not — any $\Gamma$ satisfies the equations. A physical condition is needed, and that is [2.1](02-01-airfoil-geometry-kutta-condition.md).
- **You might read $D' = 0$ as an approximation.** It is exact within the theory, and exactly wrong in reality. The error is not small; it is total.
- **You might apply the measured cylinder $C_p$ to a streamlined body.** The rear-surface collapse is a bluff-body phenomenon; an attached airfoil recovers most of its pressure.

## One-liner

> $C_p = 1-(V/V_\infty)^2$ turns the whole flow field into one universal curve, and adding a vortex to a cylinder breaks the top-bottom symmetry to give $L' = \rho_\infty V_\infty\Gamma$ — exactly, for any 2-D shape — while leaving the fore-aft symmetry, and hence the embarrassing zero drag, intact.

## Problems

**P1 (🟢)** A non-lifting cylinder sits in a stream of $V_\infty = 25$ m/s at sea level. (a) Find $q_\infty$. (b) Find $C_p$ and the gauge pressure at $\theta = 0°$, $45°$, and $90°$. (c) Find the surface speed at $\theta = 45°$.

**P2 (🟡)** A cylinder of radius $R = 0.15$ m in a $30$ m/s sea-level stream carries $\Gamma = 40$ m²/s (clockwise). (a) Locate the stagnation points. (b) Find the lift per unit span. (c) Find the surface speed and $C_p$ at the top ($\theta = 90°$) and the bottom ($\theta = 270°$). (d) Verify that the top-to-bottom pressure difference is consistent with the sign of the lift.

**P3 (🔴)** A Flettner rotor on a ship is a vertical cylinder of diameter $3.0$ m and height $18$ m, spinning in a $12$ m/s apparent wind at sea level. (a) Find the circulation and lift per unit span if the rotor spins fast enough to put its stagnation points at $\theta_s = -50°$. (b) Find the total lift force on the rotor. (c) Find the surface tangential speed required and the rotational rate in rpm. (d) The measured drag coefficient of a spinning cylinder at this spin ratio is about $C_D\approx1.2$ (on frontal area). Compute the drag, find the actual lift-to-drag ratio, and comment on why Flettner rotors are a niche technology despite the huge $c_l$.

<details>
<summary>Solutions</summary>

**P1** (a) $$q_\infty = \tfrac12(1.225)(25)^2 = \tfrac12(1.225)(625) = 382.8\ \mathrm{Pa}.$$

(b) $$C_p = 1-4\sin^2\theta, \qquad p-p_\infty = q_\infty C_p.$$

| $\theta$ | $\sin^2\theta$ | $C_p$ | $p-p_\infty$ |
|---|---|---|---|
| $0°$ | 0 | $+1.00$ | $+382.8$ Pa |
| $45°$ | 0.5 | $-1.00$ | $-382.8$ Pa |
| $90°$ | 1 | $-3.00$ | $-1148.4$ Pa |

(c) $$V = 2V_\infty\left|\sin45°\right| = 2(25)(0.70711) = 35.36\ \mathrm{m/s}.$$

*Check via $C_p$:* $1-(35.36/25)^2 = 1-2.000 = -1.000$ ✓

**P2** (a) $$\sin\theta_s = -\frac{\Gamma}{4\pi V_\infty R} = -\frac{40}{4\pi(30)(0.15)} = -\frac{40}{56.549} = -0.7074.$$

$$\theta_s = \arcsin(-0.7074) = -45.02°, \qquad \text{and} \qquad 180°+45.02° = 225.02°.$$

**Both stagnation points are below the horizontal**, at $-45.0°$ and $225.0°$ — symmetric about the vertical, as they must be.

(b) $$L' = \rho_\infty V_\infty\Gamma = 1.225(30)(40) = 1470\ \mathrm{N/m}.$$

(c) $$\frac{\Gamma}{2\pi RV_\infty} = \frac{40}{2\pi(0.15)(30)} = \frac{40}{28.274} = 1.4147.$$

*At the top, $\theta = 90°$:*

$$\left|\frac{V}{V_\infty}\right| = \left|2\sin90°+1.4147\right| = 3.4147, \qquad V = 3.4147(30) = 102.44\ \mathrm{m/s},$$
$$C_p = 1-(3.4147)^2 = 1-11.660 = -10.660.$$

*At the bottom, $\theta = 270°$:*

$$\left|\frac{V}{V_\infty}\right| = \left|2\sin270°+1.4147\right| = \left|-2+1.4147\right| = 0.5853, \qquad V = 17.56\ \mathrm{m/s},$$
$$C_p = 1-(0.5853)^2 = 1-0.3426 = +0.657.$$

(d) $$q_\infty = \tfrac12(1.225)(900) = 551.25\ \mathrm{Pa}.$$

$$p_{\rm top}-p_\infty = 551.25(-10.660) = -5876\ \mathrm{Pa}, \qquad p_{\rm bottom}-p_\infty = 551.25(0.657) = +362\ \mathrm{Pa}.$$

$$\Delta p = p_{\rm bottom}-p_{\rm top} = 362-(-5876) = 6238\ \mathrm{Pa}, \quad\text{pushing \textbf{upward}} \ \checkmark$$

**Consistent with the positive lift.** The top is at $5876$ Pa *below* ambient — a suction of nearly $6$ kPa — while the bottom is barely above ambient. That asymmetry is extreme, and it reflects how much circulation this is: $\Gamma/(4\pi V_\infty R) = 0.707$, i.e. 71% of the way to the merge condition.

*A caution on the estimate.* Multiplying $\Delta p$ by the diameter gives $6238(0.30) = 1871$ N/m, which overestimates the true $1470$ N/m by 27% — because the pressure difference is largest at the top and bottom and falls off toward the sides. **Only the full integral gives the right answer**, and Kutta–Joukowski *is* that integral, done once and for all.

**P3** (a) $$\sin\theta_s = -\sin50° = -0.76604 \quad\Longrightarrow\quad \frac{\Gamma}{4\pi V_\infty R} = 0.76604.$$

With $R = 1.5$ m and $V_\infty = 12$ m/s:

$$\Gamma = 0.76604\left(4\pi(12)(1.5)\right) = 0.76604(226.19) = 173.28\ \mathrm{m^2/s}.$$

$$L' = \rho_\infty V_\infty\Gamma = 1.225(12)(173.28) = 2547\ \mathrm{N/m}.$$

(b) $$L = L'\times h = 2547(18) = 45{,}850\ \mathrm{N} = 45.9\ \mathrm{kN}.$$

**About 4.7 tonnes-force of side thrust** from one rotor — which is why the idea keeps being revived.

(c) The vortex model's surface tangential speed is

$$V_{\rm surf} = \frac{\Gamma}{2\pi R} = \frac{173.28}{2\pi(1.5)} = \frac{173.28}{9.4248} = 18.39\ \mathrm{m/s}.$$

$$\omega = \frac{V_{\rm surf}}{R} = \frac{18.39}{1.5} = 12.26\ \mathrm{rad/s},$$

$$\mathrm{rpm} = \frac{12.26(60)}{2\pi} = \frac{735.6}{6.2832} = 117\ \mathrm{rpm}.$$

*The spin ratio* — the standard parameter for this device — is

$$\frac{V_{\rm surf}}{V_\infty} = \frac{18.39}{12} = 1.53,$$

typical of real Flettner installations, which run between about 1 and 4.

(d) $$q_\infty = \tfrac12(1.225)(12)^2 = \tfrac12(1.225)(144) = 88.2\ \mathrm{Pa}.$$

Frontal area $= 2R\times h = 3.0(18) = 54$ m².

$$D = C_Dq_\infty A = 1.2(88.2)(54) = 5715\ \mathrm{N} = 5.7\ \mathrm{kN}.$$

$$\frac{L}{D} = \frac{45{,}850}{5715} = 8.02.$$

*And the lift coefficient, for comparison:*

$$C_L = \frac{L}{q_\infty A} = \frac{45{,}850}{88.2(54)} = \frac{45{,}850}{4763} = 9.63.$$

**A lift coefficient of 9.6** — six times what a good airfoil achieves — with an $L/D$ of 8.

*Why it remains a niche technology.* Four reasons, and the first is the one this problem was built to expose:

**The huge $C_L$ is real; the huge $L/D$ is not.** Potential flow promised $D = 0$ and an infinite $L/D$. The measured $C_D\approx1.2$ brings it down to 8 — respectable, but no better than a mediocre sail and far worse than a wing, which reaches 20–40. **The theory's most dramatic prediction is the one reality most thoroughly destroys**, exactly as Example 2 warned.

**It costs power to spin.** The rotor must be driven, against the same viscous torque that generates the circulation. Typical installations consume 10–20% of the propulsive power they save — real, but a genuine tax that a sail does not pay.

**The force direction is fixed relative to the wind, not the ship.** Lift is perpendicular to the *apparent wind*, so the useful forward component depends entirely on the wind angle. A rotor is nearly useless directly upwind or downwind, and the spin must be reversed when the ship tacks.

**Structure and windage.** A 18 m rotating column carries large bending loads and stands in the way of cargo handling. On a container ship, deck space is the scarce commodity.

*What has changed recently.* Fuel prices and carbon regulation have shifted the balance, and several modern cargo ships now carry rotors, reporting 5–20% fuel savings. **The physics was never in doubt** — Flettner sailed a rotor ship across the Atlantic in 1926 — and the technology's history is a case study in a device whose economics, not whose aerodynamics, decide its fate.

</details>

## Flashback

**From Lesson 1.1 (Forces, moments, and coefficients):** A wing of area $S = 20$ m² flies at $V_\infty = 55$ m/s at sea level with $C_L = 0.45$ and $C_D = 0.030$. (a) Find $q_\infty$, the lift, and the drag. (b) Find $L/D$. (c) A pressure tap on the upper surface reads a gauge pressure of $-2600$ Pa; find the local $C_p$ and the local flow speed.

<details>
<summary>Solution</summary>

(a) $$q_\infty = \tfrac12(1.225)(55)^2 = \tfrac12(1.225)(3025) = 1852.8\ \mathrm{Pa}.$$

$$L = C_Lq_\infty S = 0.45(1852.8)(20) = 16{,}675\ \mathrm{N},$$
$$D = C_Dq_\infty S = 0.030(1852.8)(20) = 1112\ \mathrm{N}.$$

(b) $$\frac{L}{D} = \frac{0.45}{0.030} = 15.0.$$

(c) $$C_p = \frac{p-p_\infty}{q_\infty} = \frac{-2600}{1852.8} = -1.403.$$

$$C_p = 1-\left(\frac{V}{V_\infty}\right)^2 \quad\Longrightarrow\quad \frac{V}{V_\infty} = \sqrt{1-C_p} = \sqrt{1+1.403} = \sqrt{2.403} = 1.550,$$

$$V = 1.550(55) = 85.3\ \mathrm{m/s}.$$

*Reading it.* The flow over that tap is moving at $155\%$ of free stream, and the pressure there is $2.6$ kPa below ambient. **Most of a wing's lift is suction on the upper surface**, not pressure on the lower — typically two-thirds of it — and $C_p$ values of $-1$ to $-2$ over the forward upper surface are entirely ordinary.

*And the connection between the two lessons.* [1.1](01-01-forces-moments-coefficients.md) gave the integrated coefficients; this lesson gives the *distribution* they came from. The relation

$$c_n = \frac{1}{c}\int_0^c\left(C_{p,l}-C_{p,u}\right)dx$$

is the bridge: the lift coefficient is literally the area between the two $C_p$ curves. **A designer works on the distribution and reads the coefficient**, because the distribution is where the physics is — a suction peak that is too sharp will separate, and no amount of favourable integrated $C_L$ will save it.

*One more check worth doing.* Is $C_p = -1.403$ plausible? The maximum suction on a circular cylinder is $-3$, and an airfoil is much thinner, so a peak around $-1.4$ at moderate lift is entirely reasonable. Had the tap read $C_p = -8$, the section would be close to a leading-edge separation.

</details>

## Connections

- **Backward:** the cylinder flow, its stagnation points, the $\Gamma = 4\pi V_\infty R$ merge and d'Alembert's paradox are all [`fluid-dynamics` 2.6](../../fluid-dynamics/lessons/02-06-flow-past-cylinder-lift.md)'s; the elementary flows superposed to build it are [1.2](01-02-potential-flow-elementary-flows.md)'s; $q_\infty$ and the coefficient conventions are [1.1](01-01-forces-moments-coefficients.md)'s.
- **Forward:** [2.1](02-01-airfoil-geometry-kutta-condition.md) supplies the physical condition that finally fixes $\Gamma$; [2.3](02-03-symmetric-thin-airfoil.md) applies Kutta–Joukowski to a vortex sheet and gets $c_l = 2\pi\alpha$; [3.3](03-03-separation-stall-drag-polar.md) explains the rear-surface collapse that Example 2 measured.
- **Sideways:** the Magnus force $\rho V\Gamma$ is the fluid analogue of the Lorentz force $qv\times B$ and of the force on a current-carrying wire — in each case a circulation of *something* crossed with a translation gives a transverse force, and the mathematics is the same cross product.

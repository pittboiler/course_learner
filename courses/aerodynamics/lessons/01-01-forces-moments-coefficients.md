# Aerodynamics · Lesson 1.1: Forces, moments, and coefficients

> ⏱ ~15 min · Module 1: Aerodynamic forces and potential flow · Builds on: [`fluid-dynamics` 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md), [`fluid-dynamics` 2.1](../../fluid-dynamics/lessons/02-01-bernoulli.md) · Unlocks: [1.3 The cylinder, pressure coefficient, and Kutta–Joukowski](01-03-cylinder-pressure-coefficient-kutta-joukowski.md), [2.3 Symmetric thin airfoil](02-03-symmetric-thin-airfoil.md)

## Why this matters

An airplane wing at 60 m/s and a model of it in a tunnel at 20 m/s produce completely different forces in newtons — and yet the wing designer treats the tunnel result as if it were the real thing. That only works because of nondimensionalization, and this lesson is where the bookkeeping gets set up.

The [force coefficients](../reference.md#force-and-moment-coefficients) $C_L$, $C_D$, $C_M$ are how every aerodynamic result in this course, every wind-tunnel measurement, and every aircraft performance calculation is reported. Getting them right is mostly a matter of knowing which area, which length, and which reference point — and those choices are conventions, not physics, which is exactly why they are so easy to get wrong.

The deeper payoff is dimensional analysis: once the force is a coefficient, it depends on only three numbers — angle of attack, Reynolds number, and Mach number. That reduction is what makes the rest of the subject possible.

## The idea

An aerodynamic body immersed in a stream feels a distributed load: pressure everywhere normal to the surface, shear everywhere tangent to it. Integrate the whole distribution and you get one resultant force and one moment.

There are two natural ways to resolve that resultant, and both are used:

**Body axes.** **Normal force** $N$ perpendicular to the chord line, **axial force** $A$ along it. This is what a balance bolted to the model measures, because the balance is bolted to the *body*.

**Wind axes.** **Lift** $L$ perpendicular to the *free stream*, **drag** $D$ parallel to it. This is what the airplane cares about, because lift holds it up and drag is what the engine must overcome.

The two are related by a rotation through the angle of attack $\alpha$, and confusing them at even a few degrees of $\alpha$ produces a drag error of tens of percent — Example 2 shows exactly how much.

**Nondimensionalizing.** Divide the force by the **dynamic pressure** $q_\infty = \tfrac12\rho_\infty V_\infty^2$ (the pressure a stagnating stream would build up, from [`fluid-dynamics` 2.1](../../fluid-dynamics/lessons/02-01-bernoulli.md)) and by a reference area $S$. Divide a moment by $q_\infty S$ and a reference length as well.

Why $q_\infty S$? Because that is the only combination of the free-stream properties and the body size with the units of force, and because the pressure differences that actually push on the body scale as $\rho V^2$. Buckingham's theorem then says the resulting dimensionless force can depend only on the remaining dimensionless groups:

$$C_L = f\left(\alpha,\ Re,\ M\right).$$

**Three numbers instead of six.** That is the whole reason a tunnel model at the right $Re$ and $M$ predicts the full-scale airplane.

## The formal version

**Dynamic pressure.**

$$\boxed{\;q_\infty = \tfrac12\rho_\infty V_\infty^2.\;}$$

**Force and moment coefficients.**

$$\boxed{\;C_L = \frac{L}{q_\infty S}, \qquad C_D = \frac{D}{q_\infty S}, \qquad C_M = \frac{M}{q_\infty S\,\ell}.\;}$$

**Two-dimensional (per unit span) quantities get lowercase symbols and the chord as the reference length:**

$$c_l = \frac{L'}{q_\infty c}, \qquad c_d = \frac{D'}{q_\infty c}, \qquad c_m = \frac{M'}{q_\infty c^2},$$

where a prime denotes *per unit span* (so $L'$ is in N/m).

*In words: capitals for a whole finite wing, lowercase for an airfoil section.* The distinction is not cosmetic — $C_L\neq c_l$ for the same wing at the same angle, and the gap between them is the entire subject of [2.5](02-05-finite-wings-downwash-lifting-line.md)–[2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md).

**Reference conventions** — the part that causes real errors:

| Quantity | Convention | Note |
|---|---|---|
| $S$ for a wing | **planform** area (projected, top view) | *not* wetted area, *not* frontal area |
| $S$ for a bluff body | **frontal** area | opposite convention |
| $\ell$ for a wing moment | mean aerodynamic chord $\bar c$ | |
| Moment reference point | quarter chord, or leading edge | **always state which** |
| Positive moment | nose-**up** | |

**Body axes to wind axes.**

$$\boxed{\;L = N\cos\alpha-A\sin\alpha, \qquad D = N\sin\alpha+A\cos\alpha.\;}$$

*In words: rotate the measured body-axis forces through the angle of attack.*

**Moving the moment reference.** A moment about point 2, given the moment about point 1 and the normal force:

$$\boxed{\;M_2 = M_1+N\left(x_2-x_1\right),\;}$$

with $x$ measured positive aft. In coefficient form for an airfoil, with $x/c$ measured from the leading edge:

$$c_{m,x} = c_{m,\rm le}+c_l\frac{x}{c}\qquad\text{(small }\alpha\text{, so }N\approx L\text{)}.$$

**Center of pressure** is the point where the moment vanishes:

$$\boxed{\;\frac{x_{cp}}{c} = -\frac{c_{m,\rm le}}{c_l}.\;}$$

*In words: the single point at which the whole resultant could act and produce the same moment.* It **moves** with angle of attack, which is why it is a poor design reference — [2.4](02-04-cambered-airfoil-aerodynamic-center.md) introduces the aerodynamic center, which does not.

**What the coefficients depend on.**

$$C_L = f_1(\alpha, Re, M), \qquad C_D = f_2(\alpha, Re, M), \qquad C_M = f_3(\alpha, Re, M).$$

| Group | Definition | Governs |
|---|---|---|
| Angle of attack $\alpha$ | angle between chord and free stream | how much lift |
| Reynolds number $Re = \dfrac{\rho V c}{\mu} = \dfrac{Vc}{\nu}$ | inertia / viscous | boundary layer, skin friction, stall |
| Mach number $M = \dfrac{V}{a}$ | speed / sound speed | compressibility, shocks |

**When each matters.** Below $M\approx0.3$ compressibility is negligible ([4.1](04-01-compressibility-sound-speed-energy.md) quantifies "negligible"), so $C_L$ and $C_D$ depend only on $\alpha$ and $Re$. Above it, $M$ enters and eventually dominates.

**Lift-to-drag ratio.**

$$\frac{L}{D} = \frac{C_L}{C_D},$$

which is the single most important figure of merit for a whole aircraft — it sets range, glide angle and climb performance, and it is independent of size, speed and altitude at fixed $C_L$.

**Standard sea-level air** (ISA), used throughout this course:

$$\rho_\infty = 1.225\ \mathrm{kg/m^3}, \quad p_\infty = 101{,}325\ \mathrm{Pa}, \quad T_\infty = 288.15\ \mathrm{K},$$
$$\nu = 1.5\times10^{-5}\ \mathrm{m^2/s}, \quad a = \sqrt{\gamma RT} = 340.3\ \mathrm{m/s}.$$

## Picture

![A two-panel figure. Left: an airfoil section at an angle of attack alpha to an oncoming free stream, with the chord line drawn and two pairs of force arrows at the same point — a body-axis pair showing normal force perpendicular to the chord and axial force along it, and a wind-axis pair showing lift perpendicular to the free stream and drag parallel to it — with the angle alpha marked between the chord and the free-stream direction and the rotation relation noted beside them. Right: a plot of lift coefficient against angle of attack, rising linearly from a negative zero-lift angle with a constant slope, then bending over to a maximum and dropping past stall, with the linear region, the slope, C_L max and the stall angle all labelled, and a second smaller curve beneath showing drag coefficient rising quadratically over the same range.](assets/01-01-fig1.svg)

Left: the two axis systems and the rotation between them. At $\alpha = 0$ they coincide; by $\alpha = 6°$ the axial force has contributed more to drag than the skin friction itself.

Right: the lift curve, the single most-plotted graph in the subject. The linear portion is what [2.3](02-03-symmetric-thin-airfoil.md) predicts exactly; the bend and the drop are viscous effects that need [3.3](03-03-separation-stall-drag-polar.md).

## Worked examples

**Example 1 (sizing a wing, and reading what each number depends on).** A light aircraft weighs $12{,}000$ N and has a wing of planform area $S = 16$ m². It cruises at $V_\infty = 60$ m/s at sea level. Find the cruise $C_L$, the Reynolds number per metre of chord, the Mach number, and the stall speed if $C_{L,\max} = 1.4$.

*Dynamic pressure.*

$$q_\infty = \tfrac12\rho_\infty V_\infty^2 = \tfrac12(1.225)(60)^2 = \tfrac12(1.225)(3600) = 2205\ \mathrm{Pa}.$$

*Cruise lift coefficient.* In level flight lift equals weight:

$$C_L = \frac{L}{q_\infty S} = \frac{12{,}000}{2205(16)} = \frac{12{,}000}{35{,}280} = 0.340.$$

*Reynolds number.*

$$\frac{Re}{c} = \frac{V_\infty}{\nu} = \frac{60}{1.5\times10^{-5}} = 4.0\times10^{6}\ \mathrm{per\ metre}.$$

For a typical $1.4$ m chord, $Re = 5.6\times10^{6}$ — firmly in the turbulent, high-Reynolds regime where skin friction is modest and the flow stays attached.

*Mach number.*

$$M = \frac{V_\infty}{a} = \frac{60}{340.3} = 0.176.$$

**Well under $0.3$**, so compressibility is negligible and Module 4's machinery is not needed. $C_L$ and $C_D$ depend on $\alpha$ and $Re$ alone.

*Stall speed.* At stall, lift still equals weight but $C_L$ is at its maximum:

$$V_{\rm stall} = \sqrt{\frac{2W}{\rho_\infty SC_{L,\max}}} = \sqrt{\frac{2(12{,}000)}{1.225(16)(1.4)}} = \sqrt{\frac{24{,}000}{27.44}} = \sqrt{874.6} = 29.6\ \mathrm{m/s}.$$

*Reading the result.* Cruise at $C_L = 0.34$ against a maximum of $1.4$ leaves a factor of $4.1$ in lift coefficient, i.e. a factor of $\sqrt{4.1} = 2.03$ in speed. **The aircraft cruises at just over twice its stall speed** — a normal and comfortable margin.

*And the scaling worth internalizing.* $V_{\rm stall}\propto\sqrt{W/S}$: stall speed is set by **wing loading**, not by weight or area separately. Doubling both leaves it unchanged. That is why wing loading, in N/m² or lb/ft², is the number quoted when comparing aircraft — a glider at $300$ N/m² and a fighter at $4000$ N/m² differ in stall speed by $\sqrt{13.3} = 3.6$ times.

**Example 2 (body axes versus wind axes, and why the distinction is not pedantic).** A wind-tunnel balance measures $N = 1000$ N and $A = 80$ N on a model at $\alpha = 6°$. Find lift and drag.

$$\cos6° = 0.99452, \qquad \sin6° = 0.10453.$$

$$L = N\cos\alpha-A\sin\alpha = 1000(0.99452)-80(0.10453) = 994.52-8.36 = 986.2\ \mathrm{N},$$

$$D = N\sin\alpha+A\cos\alpha = 1000(0.10453)+80(0.99452) = 104.53+79.56 = 184.1\ \mathrm{N}.$$

*Now the error you avoid by doing this.* Suppose someone reports the axial force as the drag — a natural-sounding mistake, since $A$ is "the force along the body":

$$D_{\rm reported} = 80\ \mathrm{N} \quad\text{versus}\quad D_{\rm actual} = 184.1\ \mathrm{N}.$$

**The true drag is 2.3 times the axial force**, and the whole difference is the term $N\sin\alpha$ — the *lift* leaning backwards. At $\alpha = 6°$ the normal force contributes $104.5$ N of drag, which is more than the axial force itself.

*The corresponding lift error is negligible:* $L = 986.2$ against $N = 1000$, a $1.4\%$ overestimate. **Lift is forgiving of the confusion; drag is not**, because $N\gg A$ and it is $N$ that leaks into drag.

*Why this matters beyond bookkeeping.* $L/D$ here is $986.2/184.1 = 5.36$. Using $A$ as drag would give $1000/80 = 12.5$ — **more than twice as good as the truth**, and an aircraft designed on that number would fall far short of its predicted range. Tunnel data reduction is one of the places where a convention error propagates all the way to a wrong airplane.

*Center of pressure, from the same test.* Suppose the balance also reports a leading-edge moment coefficient $c_{m,\rm le} = -0.090$ at $c_l = 0.400$:

$$\frac{x_{cp}}{c} = -\frac{c_{m,\rm le}}{c_l} = -\frac{-0.090}{0.400} = 0.225.$$

**The resultant acts at 22.5% chord.** Note what happens as $\alpha$ falls: $c_l\to0$ and $x_{cp}\to\infty$. The centre of pressure runs off the airfoil entirely at zero lift, which is a mathematical artifact of dividing by a vanishing force — and precisely why the aerodynamic center of [2.4](02-04-cambered-airfoil-aerodynamic-center.md) is the reference that structural and stability engineers actually use.

## Watch out

- **You might use the wrong reference area.** Wings use **planform** area; bluff bodies use **frontal** area. A $C_D$ quoted without its area is meaningless.
- **You might report axial force as drag.** They differ by $N\sin\alpha$, which dominates at any useful angle of attack.
- **You might omit the moment reference point.** $c_m$ about the leading edge and about the quarter chord differ by $c_l/4$ — a large number.
- **You might mix $C_L$ and $c_l$.** Capitals are the finite wing, lowercase the 2-D section, and they are genuinely different quantities.
- **You might treat the centre of pressure as fixed.** It moves with $\alpha$ and runs to infinity at zero lift.
- **You might use $\rho$ at the wrong altitude.** Coefficients are density-independent, but the *forces* are not, and $\rho$ falls by a factor of three by $10$ km.
- **You might forget that $C_L$ depends on $Re$ and $M$ too.** A tunnel test at the wrong $Re$ predicts the wrong stall, and at the wrong $M$ the wrong drag.
- **You might use $q_\infty = \rho V^2$.** The factor of $\tfrac12$ is not optional.

## One-liner

> Divide force by $q_\infty S$ and moment by $q_\infty S\ell$, and the answer depends only on $\alpha$, $Re$ and $M$ — but state your reference area, your reference length and your moment reference point, and never confuse the body-axis forces a balance measures with the wind-axis lift and drag an airplane feels.

## Problems

**P1 (🟢)** An aircraft of wing area $S = 14$ m² flies at $V_\infty = 50$ m/s at sea level, generating $L = 9000$ N and $D = 700$ N. (a) Find $q_\infty$. (b) Find $C_L$ and $C_D$. (c) Find $L/D$. (d) Find the Mach number and state whether compressibility matters.

**P2 (🟡)** The same aircraft climbs to $10$ km, where $\rho = 0.4135$ kg/m³ and $\nu = 3.53\times10^{-5}$ m²/s. It holds the same $C_L$ in level flight at the same weight. (a) Find the new true airspeed. (b) Find the ratio of the new Reynolds number to the sea-level one, taking the chord as unchanged. (c) Comment on what the $Re$ change implies for the drag.

**P3 (🔴)** A wind-tunnel test of an airfoil section of chord $c = 0.30$ m at $V_\infty = 40$ m/s in sea-level air reports, per metre of span, $N' = 260$ N/m and $A' = 6.0$ N/m at $\alpha = 8°$, with a leading-edge moment $M'_{\rm le} = -22.5$ N·m/m. (a) Find $q_\infty$ and the section coefficients $c_l$, $c_d$, $c_{m,\rm le}$. (b) Find the centre of pressure. (c) Find $c_{m,c/4}$. (d) The same section is tested at $\alpha = 2°$, giving $c_l = 0.30$ and $c_{m,\rm le} = -0.075$. Find the new centre of pressure, compare with (b), and explain what the comparison says about where the moment reference should be placed.

<details>
<summary>Solutions</summary>

**P1** (a) $$q_\infty = \tfrac12(1.225)(50)^2 = \tfrac12(1.225)(2500) = 1531.25\ \mathrm{Pa}.$$

(b) $$C_L = \frac{9000}{1531.25(14)} = \frac{9000}{21{,}437.5} = 0.4198,$$
$$C_D = \frac{700}{21{,}437.5} = 0.03265.$$

(c) $$\frac{L}{D} = \frac{9000}{700} = 12.86 \quad\left(= \frac{0.4198}{0.03265}\ \checkmark\right).$$

(d) $$M = \frac{50}{340.3} = 0.147.$$

**Compressibility does not matter** — well below the $M\approx0.3$ threshold, so density changes along the streamline are under about $4\%$ and the incompressible theory of Modules 1–3 applies without correction.

**P2** (a) Level flight at fixed weight and fixed $C_L$ requires fixed $q_\infty$:

$$\tfrac12\rho_1V_1^2 = \tfrac12\rho_2V_2^2 \quad\Longrightarrow\quad V_2 = V_1\sqrt{\frac{\rho_1}{\rho_2}} = 50\sqrt{\frac{1.225}{0.4135}} = 50\sqrt{2.9625} = 50(1.7212) = 86.1\ \mathrm{m/s}.$$

**The true airspeed rises 72%** while the *indicated* airspeed — which is what a pitot-static instrument reads, and which depends on $q_\infty$ alone — is unchanged. That is why aircraft are flown on indicated airspeed: the wing cares about $q_\infty$, not about how fast the ground is going past.

(b) $$\frac{Re_2}{Re_1} = \frac{V_2/\nu_2}{V_1/\nu_1} = \frac{86.1/3.53\times10^{-5}}{50/1.5\times10^{-5}} = \frac{2.439\times10^{6}}{3.333\times10^{6}} = 0.732.$$

**The Reynolds number falls by 27%**, despite the aircraft flying 72% faster — because the kinematic viscosity has risen by a factor of $2.35$, more than offsetting the speed.

(c) *What the $Re$ drop implies.* Lower $Re$ means:

**Thicker boundary layers** ($\delta\propto Re^{-1/2}$, from [3.1](03-01-boundary-layers-momentum-integral.md)), so slightly more displacement effect.

**Higher skin-friction coefficient.** For turbulent flow $c_f\propto Re^{-1/5}$, so a $27\%$ drop in $Re$ raises $c_f$ by $(1/0.732)^{0.2} = 1.064$ — about $6\%$.

**Earlier transition is *not* implied** — transition depends on $Re_x$ reaching a critical value, and a lower $Re$ pushes transition *aft*, which slightly *reduces* friction drag. The two effects partly cancel.

**The net effect on $C_D$ is a few percent at most**, which is why altitude performance is dominated by the density change and the engine, not by the Reynolds shift. The important practical consequence of the $Re$ drop is elsewhere: **$C_{L,\max}$ falls with $Re$**, so the stall margin in indicated airspeed shrinks with altitude.

**P3** (a) $$q_\infty = \tfrac12(1.225)(40)^2 = \tfrac12(1.225)(1600) = 980\ \mathrm{Pa}.$$

$$\cos8° = 0.99027, \qquad \sin8° = 0.13917.$$

$$L' = N'\cos\alpha-A'\sin\alpha = 260(0.99027)-6.0(0.13917) = 257.47-0.84 = 256.63\ \mathrm{N/m},$$
$$D' = N'\sin\alpha+A'\cos\alpha = 260(0.13917)+6.0(0.99027) = 36.18+5.94 = 42.12\ \mathrm{N/m}.$$

$$c_l = \frac{L'}{q_\infty c} = \frac{256.63}{980(0.30)} = \frac{256.63}{294} = 0.8729,$$
$$c_d = \frac{42.12}{294} = 0.1433,$$
$$c_{m,\rm le} = \frac{M'_{\rm le}}{q_\infty c^2} = \frac{-22.5}{980(0.09)} = \frac{-22.5}{88.2} = -0.2551.$$

*A remark on that $c_d$.* $0.143$ is enormous for an airfoil — a good section runs $0.006$–$0.010$ at cruise. At $\alpha = 8°$ with $L/D = 256.63/42.12 = 6.09$, this section is either near stall or being tested at a very low Reynolds number. Both are common in small tunnels, and both are worth noticing before trusting the data.

(b) $$\frac{x_{cp}}{c} = -\frac{c_{m,\rm le}}{c_l} = -\frac{-0.2551}{0.8729} = 0.2923.$$

**Centre of pressure at 29.2% chord.**

(c) $$c_{m,c/4} = c_{m,\rm le}+c_l\left(\frac{1}{4}\right) = -0.2551+0.8729(0.25) = -0.2551+0.2182 = -0.0369.$$

(d) At $\alpha = 2°$:

$$\frac{x_{cp}}{c} = -\frac{-0.075}{0.30} = 0.250.$$

$$c_{m,c/4} = -0.075+0.30(0.25) = -0.075+0.075 = 0.000.$$

*The comparison.*

| $\alpha$ | $c_l$ | $x_{cp}/c$ | $c_{m,c/4}$ |
|---|---|---|---|
| $2°$ | 0.300 | **0.250** | 0.000 |
| $8°$ | 0.873 | **0.292** | $-0.037$ |

**The centre of pressure moved 4.2% of chord** — from 25.0% to 29.2% — while the angle of attack changed by only $6°$.

*What this says about the moment reference.* Three things, and the third is the important one:

**The centre of pressure is a moving target.** It shifts with $\alpha$, and at low $c_l$ it shifts fast: as $c_l\to0$, $x_{cp} = -c_{m,\rm le}/c_l\to\pm\infty$. A structural engineer cannot design a spar around a load point that runs off the wing.

**The quarter-chord moment is nearly constant here** — $0.000$ and $-0.037$ — but not exactly so, which means the quarter chord is *close to* but not exactly the aerodynamic center for this section.

**A fixed reference point with a nearly constant moment is the useful description.** Instead of "the resultant acts at a point that moves," say "the resultant is a force at the quarter chord plus a nearly constant moment." That is a statically equivalent statement of the same physics, and it is the one that stays well-behaved at zero lift.

*Finding the actual aerodynamic center from this data.* The aerodynamic center is where $dc_m/dc_l = 0$. Using the transfer rule between the two data points,

$$c_{m,x} = c_{m,\rm le}+c_l\frac{x}{c} \quad\Longrightarrow\quad \frac{dc_{m,x}}{dc_l} = \frac{dc_{m,\rm le}}{dc_l}+\frac{x}{c}.$$

From the two points,

$$\frac{dc_{m,\rm le}}{dc_l} = \frac{-0.2551-(-0.075)}{0.8729-0.300} = \frac{-0.1801}{0.5729} = -0.3144,$$

so the aerodynamic center sits at

$$\frac{x_{ac}}{c} = 0.3144,$$

i.e. **31.4% chord** rather than the thin-airfoil ideal of 25%. That is a real and typical result for a thick or cambered section at finite Reynolds number, and [2.4](02-04-cambered-airfoil-aerodynamic-center.md) shows where the $25\%$ prediction comes from and why real sections depart from it.

</details>

## Connections

- **Backward:** the dynamic pressure and the stagnation-pressure idea are [`fluid-dynamics` 2.1](../../fluid-dynamics/lessons/02-01-bernoulli.md)'s; the Reynolds number and its meaning are [3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md)'s.
- **Forward:** [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md) makes the pressure itself a coefficient; [2.3](02-03-symmetric-thin-airfoil.md) predicts the lift-curve slope; [3.3](03-03-separation-stall-drag-polar.md) assembles the drag polar out of these coefficients.
- **Sideways:** this is Buckingham Pi dimensional analysis, the same reduction that produces the Nusselt and Prandtl numbers of [`heat-transfer`](../../heat-transfer/syllabus.md) and the dimensionless groups of [`transport-phenomena`](../../transport-phenomena/syllabus.md) — in every case, the payoff is that a model test at matched groups predicts the full-scale article.

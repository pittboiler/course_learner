# Heat Transfer · Lesson 3.1: The convection coefficient and boundary layers

> ⏱ ~15 min · Module 3: Convection · Builds on: [1.1 Three modes and Fourier's law](01-01-three-modes-fouriers-law.md), [1.2 The heat equation](01-02-heat-equation.md) · Unlocks: [3.2 Dimensionless groups: Re, Pr, Nu](03-02-dimensionless-groups-re-pr-nu.md)

## Why this matters

Back in [1.1](01-01-three-modes-fouriers-law.md) we wrote Newton's law of cooling, $q''=h(T_s-T_\infty)$, and then quietly moved on — because the whole coefficient $h$ was a black box. This module opens the box. Almost every real cooling problem you'll ever size — a CPU heat sink, a pipe carrying hot water, wind chilling a wall — is a convection problem, and the entire difficulty is *getting $h$*. The payoff of this lesson is a single reframing that makes the rest of the module make sense: **convection is just conduction into a fluid that happens to be moving.** Once you see that, you'll know exactly what $h$ depends on (the flow) and — just as importantly — what it does *not* depend on (the solid).

## The idea

Blow air across a hot plate. Right at the surface, the air molecules touching the plate aren't moving at all — a fluid sticks to a solid wall (the **no-slip condition**, the same fact that gives fluids their drag in [`fluid-dynamics` 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md)). So heat leaving the plate has no bulk motion to ride on for that first molecular layer; it has to **conduct** across the stationary film, exactly like conduction through a solid. Fourier's law still rules at the wall.

Here's the twist that makes convection powerful. Just a hair above the wall, the fluid *is* moving, and it sweeps the freshly-heated fluid away and drags cool fluid in to take its place. That renewal keeps the temperature drop squeezed into a very thin layer near the wall — which keeps the temperature *gradient* at the wall steep — which, by Fourier's law, keeps the heat flux high. So the coefficient $h$ is really a measure of **how steep the flow keeps the wall temperature gradient.** Fast, turbulent flow scrubs the wall hard, pins the hot layer thin, and gives a big $h$. Slow, sluggish flow lets heat pile up in a thick lazy layer, gives a small $h$. The solid's conductivity never enters — only the fluid's, and how the fluid moves.

The region where the fluid's velocity is still catching up to the freestream is the **velocity boundary layer**; the region where its temperature is still adjusting from wall to freestream is the **thermal boundary layer**. Convection lives entirely inside these two thin skins.

## The formal version

**Where $h$ comes from.** At the wall ($y=0$, measuring $y$ outward into the fluid) the fluid velocity is zero, so energy crosses that plane purely by conduction *in the fluid*. Fourier's law in the fluid gives the wall flux, and setting it equal to Newton's law of cooling defines $h$:

$$q''_s = -k_f\left.\frac{\partial T}{\partial y}\right|_{y=0} = h\,(T_s-T_\infty) \quad\Longrightarrow\quad \boxed{\,h = \dfrac{-k_f\,\partial T/\partial y|_{y=0}}{T_s-T_\infty}\,}$$

Here $k_f$ is the **fluid's** thermal conductivity (W/(m·K)), $T_s$ is the surface temperature (K or °C), $T_\infty$ is the freestream fluid temperature far from the wall, and $h$ has units W/(m²·K). *In words: $h$ is the wall temperature slope in the fluid, normalized by the overall wall-to-fluid temperature difference.*

Read that boxed formula again for what it does **not** contain: the solid's conductivity. $h$ is set by $k_f$ and by the shape of the temperature profile — and that profile is carved by the flow (velocity, geometry, whether it's laminar or turbulent). **$h$ is a property of the situation, not a material property of the solid.** This is the single most-misused idea in the subject.

**The two boundary layers.** Over a flat plate with freestream speed $u_\infty$:

- **Velocity boundary layer**, thickness $\delta(x)$: the layer where $u$ climbs from $0$ at the wall to (conventionally) $0.99\,u_\infty$. It starts at zero thickness at the leading edge and grows downstream, $\delta \sim \sqrt{x}$ for laminar flow. *In words: the further the fluid has traveled along the plate, the more of it has been slowed by the wall.*
- **Thermal boundary layer**, thickness $\delta_t(x)$: the layer where $T$ adjusts from $T_s$ at the wall to $\approx T_\infty$. Outside it, the fluid hasn't felt the wall's temperature yet.

Their **relative thickness is set by the Prandtl number** $Pr=\nu/\alpha$ (kinematic viscosity over thermal diffusivity — a fluid property, previewed properly in [3.2](03-02-dimensionless-groups-re-pr-nu.md)): $\delta/\delta_t \sim Pr^{1/3}$. *In words: $Pr$ compares how fast momentum diffuses to how fast heat diffuses.* For oils ($Pr\gg1$) velocity spreads much further than heat, so $\delta\gg\delta_t$; for liquid metals ($Pr\ll1$) it's the reverse; for gases ($Pr\approx0.7$) the two layers are nearly the same size (that's the case drawn below).

**Laminar vs turbulent.** Near the leading edge the boundary layer is smooth and layered (**laminar**) — heat crosses it only by molecular conduction, which is slow, so $h$ is modest and *falls* with $x$ as the layer thickens. Downstream the layer trips into chaotic **turbulent** motion, whose eddies physically carry hot fluid across the layer. That mixing is far more effective than molecular conduction, so it thins the effective conduction sublayer at the wall, steepens the gradient, and **jumps $h$ upward.** Turbulence is a heat-transfer friend and a pumping-cost enemy.

**Local vs average $h$.** Because $\delta$ grows with $x$, the coefficient varies along the surface: the **local** coefficient $h_x$ is high at the leading edge (thin layer, steep gradient) and decays downstream. For a total heat rate you want the **average** over the surface of length $L$:

$$\bar h = \frac{1}{L}\int_0^L h_x\,dx, \qquad q = \bar h\,A\,(T_s-T_\infty).$$

*In words: $h_x$ is what's happening at one spot; $\bar h$ is the length-average you plug into a heat-rate calculation for the whole surface $A$.*

## Picture

![Flow over a hot flat plate: uniform freestream at u-infinity and T-infinity enters at left; the velocity boundary layer (blue) and the slightly thicker thermal boundary layer (coral) both grow from zero at the leading edge; a velocity profile at one station shows u rising from zero at the no-slip wall to the freestream; the wall temperature gradient in the fluid defines h](assets/03-01-fig1.svg)

## Worked examples

**Example 1 — get $h$ from the wall gradient.** Water flows over a heated plate held at $T_s = 70\ ^\circ\mathrm{C}$; far away the water is at $T_\infty = 30\ ^\circ\mathrm{C}$. A fine probe finds that, right at the wall, the water temperature falls by about $8\ \mathrm{K}$ over the first $0.40\ \mathrm{mm}$ — so the near-wall slope is

$$\left.\frac{\partial T}{\partial y}\right|_{y=0} \approx \frac{-8\ \mathrm{K}}{0.40\times10^{-3}\ \mathrm{m}} = -2.0\times10^{4}\ \mathrm{K/m}.$$

The sign is negative because $T$ *drops* as you move off the hot wall into cooler fluid. Take the fluid conductivity $k_f = 0.60\ \mathrm{W/(m\,K)}$ (liquid water). The wall flux, by Fourier's law in the fluid:

$$q''_s = -k_f\left.\frac{\partial T}{\partial y}\right|_{0} = -(0.60)\,(-2.0\times10^{4}) = 1.2\times10^{4}\ \mathrm{W/m^2} = 12\ \mathrm{kW/m^2}.$$

Now back out $h$ from Newton's law of cooling:

$$h = \frac{q''_s}{T_s-T_\infty} = \frac{1.2\times10^{4}\ \mathrm{W/m^2}}{(70-30)\ \mathrm{K}} = \frac{12000}{40} = 300\ \mathrm{W/(m^2\,K)}.$$

*Units/sanity check.* $q''$: $\mathrm{(W/m\,K)(K/m)=W/m^2}$ ✓. $h$: $\mathrm{(W/m^2)/K = W/(m^2K)}$ ✓. And $300\ \mathrm{W/(m^2K)}$ sits squarely in the textbook band for forced convection of water (≈$100$–$15{,}000$), so the answer is physically sane. Notice we never used any property of the *plate* — only the fluid's $k_f$ and the temperature field the flow produced.

**Example 2 — $h$ is not a constant of the material.** Take that same plate and the same water, but push the flow faster. Does $h$ change? It must — and here's the chain, with no reference to the solid anywhere in it:

$$\text{faster } u_\infty \;\Rightarrow\; \text{thinner } \delta,\,\delta_t \;\Rightarrow\; \text{steeper } \partial T/\partial y|_0 \;\Rightarrow\; \text{larger } q''_s \;\Rightarrow\; \text{larger } h.$$

Faster flow renews the near-wall fluid more aggressively, so it can't heat up as much before being swept away; the whole temperature drop gets compressed into a thinner film, and a thinner film across the same $T_s-T_\infty$ means a steeper slope and more flux.

We can even scale it. For a laminar flat plate (derived in [3.3](03-03-external-forced-convection.md)), $\bar h \propto u_\infty^{1/2}$ while the boundary layer thins as $\delta \propto u_\infty^{-1/2}$. So if Example 1's $h=300\ \mathrm{W/(m^2K)}$ came at $u_\infty = 1\ \mathrm{m/s}$, then **quadrupling** the speed to $4\ \mathrm{m/s}$ gives

$$\bar h_{\text{new}} = 300\times\sqrt{\tfrac{4}{1}} = 300\times 2 = 600\ \mathrm{W/(m^2\,K)},$$

and the boundary layer at any station is $\sqrt{4}=2\times$ thinner. Same aluminum, same water — but $h$ doubled, purely because the *flow* changed. If $h$ were a material constant, this couldn't happen. It isn't, and it does.

*Sanity check.* $\bar h \propto u^{1/2}$ is dimensionless-ratio scaling, so units are untouched; both $h$ values stay in the forced-water band. The direction is right: more pumping buys more heat transfer, with diminishing returns (the $\tfrac12$ power).

## Watch out

- **You might think $h$ is a property of the solid, like $k$ is.** It isn't. $h$ answers "how hard is this particular flow scrubbing this surface?" — swap the fluid, change the speed, or reshape the geometry and $h$ changes, even with the identical solid. The only conductivity in the $h$ formula is the *fluid's* $k_f$.
- **You might think a thicker boundary layer means more heat transfer** (more fluid involved!). Opposite: a thick layer is a fat insulating blanket with a gentle wall gradient — small $h$. You want the layer *thin*. That's why turbulence, which mixes and thins the wall sublayer, *raises* $h$.
- **You might reach for the local $h_x$ when you need the average $\bar h$.** $h_x$ is largest at the leading edge and decays downstream; using the leading-edge value for the whole plate badly over-predicts the heat rate. Total heat rate needs $\bar h = \frac1L\int_0^L h_x\,dx$, not a spot value.

## One-liner

> Convection is conduction across a moving fluid's thin near-wall film, so $h=-k_f(\partial T/\partial y)|_0/(T_s-T_\infty)$ is set by the *flow*, not the solid — faster flow thins the boundary layer, steepens the wall gradient, and raises $h$.

## Problems

**P1 (🟢)** Air ($k_f = 0.026\ \mathrm{W/(m\,K)}$) flows over an electronic chip whose surface is at $T_s = 85\ ^\circ\mathrm{C}$; the air is at $T_\infty = 25\ ^\circ\mathrm{C}$. Measurements give a near-wall air temperature gradient $\partial T/\partial y|_0 = -1.2\times10^{5}\ \mathrm{K/m}$. Find the wall heat flux $q''_s$ and the convection coefficient $h$.

**P2 (🟡)** For a laminar flat plate, $\bar h \propto u_\infty^{1/2}$ and the boundary-layer thickness scales as $\delta \propto u_\infty^{-1/2}$. A fan gives $\bar h = 45\ \mathrm{W/(m^2K)}$ over a board at one speed. (a) By what factor must you raise the air speed to reach $\bar h = 90\ \mathrm{W/(m^2K)}$? (b) What happens to $\delta$ at that new speed, and physically why does thinning the layer raise $h$?

**P3 (🔴)** A flat plate of length $L$ is in laminar flow, and the local coefficient falls off as $h_x = C\,x^{-1/2}$ for a constant $C$. (a) Find the average coefficient $\bar h$ over $0\le x\le L$ in terms of $C$ and $L$. (b) Express $\bar h$ as a multiple of the local value $h_L$ at the trailing edge. (c) What does the ratio tell you about using $h_L$ to estimate the whole-plate heat rate?

<details>
<summary>Solutions</summary>

**P1** Fourier's law in the fluid gives the flux; the sign flips because the gradient is negative (temperature drops away from the hot chip):

$$q''_s = -k_f\left.\frac{\partial T}{\partial y}\right|_0 = -(0.026)(-1.2\times10^{5}) = 3120\ \mathrm{W/m^2} \approx 3.1\ \mathrm{kW/m^2}.$$

Then from Newton's law of cooling with $T_s-T_\infty = 85-25 = 60\ \mathrm{K}$:

$$h = \frac{q''_s}{T_s-T_\infty} = \frac{3120}{60} = 52\ \mathrm{W/(m^2\,K)}.$$

*Check.* Units: $\mathrm{(W/mK)(K/m)=W/m^2}$, then $\mathrm{(W/m^2)/K=W/(m^2K)}$ ✓. $h\approx52$ is in the forced-air band (≈$25$–$250$), sensible for a fan-cooled chip. ✓

**P2** (a) Since $\bar h\propto u_\infty^{1/2}$, doubling $\bar h$ needs $u_\infty^{1/2}$ to double, i.e. $u_\infty$ up by a factor $2^2 = \mathbf{4}$. (b) With $\delta\propto u_\infty^{-1/2}$, a $4\times$ speed makes $\delta$ smaller by $\sqrt{4}=2$ — the layer is **half as thick**. Physically, the thinner thermal layer squeezes the same wall-to-freestream temperature drop into half the distance, so the wall gradient $\partial T/\partial y|_0$ roughly doubles, and by $q''_s=-k_f\,\partial T/\partial y|_0$ the flux (hence $h$) rises. *Check:* the two scalings are consistent — $\bar h\propto u^{1/2}\propto 1/\delta$, so halving $\delta$ doubles $\bar h$, matching part (a). ✓

**P3** (a) Average the local value:

$$\bar h = \frac1L\int_0^L C\,x^{-1/2}\,dx = \frac{C}{L}\Big[2x^{1/2}\Big]_0^L = \frac{C}{L}\,(2L^{1/2}) = \frac{2C}{L^{1/2}} = 2C\,L^{-1/2}.$$

(b) The trailing-edge local value is $h_L = C\,L^{-1/2}$, so

$$\bar h = 2\,C L^{-1/2} = 2\,h_L.$$

(c) The average is exactly **twice** the trailing-edge local coefficient, $\bar h = 2h_L$. So using the small trailing-edge $h_L$ for the whole plate would *under*-predict the heat rate by a factor of 2; the leading edge, where $h_x\to\infty$ in this idealization, carries a disproportionate share. You must integrate. *Check:* dimensionally $\bar h$ and $h_L$ share units, ratio is pure number ✓; and $\bar h>h_L$ makes sense because $h_x$ is larger than $h_L$ everywhere upstream of the trailing edge. ✓

</details>

## Flashback

**From Lesson 2.1 (Lumped capacitance and the Biot number):** A solid copper sphere of diameter $D = 12\ \mathrm{mm}$ ($k=401\ \mathrm{W/(m\,K)}$, $\rho = 8933\ \mathrm{kg/m^3}$, $c_p = 385\ \mathrm{J/(kg\,K)}$) is heated to $T_i = 90\ ^\circ\mathrm{C}$ and then cooled in a breeze at $T_\infty = 25\ ^\circ\mathrm{C}$ with $h = 30\ \mathrm{W/(m^2\,K)}$. (a) Check that lumped capacitance is legitimate. (b) Find the time constant $\tau$. (c) How long until the sphere reaches $45\ ^\circ\mathrm{C}$?

<details>
<summary>Solution</summary>

Characteristic length for a sphere, $L_c = V/A_s = (\tfrac16\pi D^3)/(\pi D^2) = D/6 = 0.012/6 = 2.0\times10^{-3}\ \mathrm{m}$.

(a) Biot number:

$$Bi = \frac{hL_c}{k} = \frac{(30)(2.0\times10^{-3})}{401} = 1.5\times10^{-4} \ll 0.1,$$

so internal conduction is far faster than surface convection — the sphere is essentially isothermal and lumped capacitance is valid.

(b) Time constant:

$$\tau = \frac{\rho V c_p}{h A_s} = \frac{\rho\,c_p\,L_c}{h} = \frac{(8933)(385)(2.0\times10^{-3})}{30} \approx \frac{6878}{30} \approx 229\ \mathrm{s}.$$

(c) Lumped cooling is $\theta/\theta_i = e^{-t/\tau}$ with $\theta = T-T_\infty$. Here $\theta_i = 90-25 = 65\ \mathrm{K}$ and target $\theta = 45-25 = 20\ \mathrm{K}$:

$$t = \tau\ln\!\frac{\theta_i}{\theta} = 229\ln\!\frac{65}{20} = 229\,(1.179) \approx 270\ \mathrm{s} \approx 4.5\ \mathrm{min}.$$

*Check.* Units of $\tau$: $\mathrm{(kg/m^3)(J/kgK)(m)/(W/m^2K) = (J/m^2K)/(W/m^2K) = J/W = s}$ ✓. $Bi\ll0.1$ confirms the whole method; and $t\approx1.2\tau$ to fall to $\sim31\%$ of the initial excess is consistent with $e^{-1.2}\approx0.30$. ✓

</details>

## Connections

- **Backward:** this lesson finally unpacks the $h$ from Newton's law of cooling in [1.1](01-01-three-modes-fouriers-law.md), and its foundation is [1.1](01-01-three-modes-fouriers-law.md)'s Fourier's law — applied *in the fluid at the wall*. It also reuses the wall-flux boundary-condition thinking from [1.2](01-02-heat-equation.md): a convective surface is where a fluid-side conduction flux meets Newton's law.
- **Forward:** [3.2 Dimensionless groups](03-02-dimensionless-groups-re-pr-nu.md) turns "the flow sets $h$" into arithmetic — $Nu=hL/k$ packages $h$, and $Nu=f(Re,Pr)$ lets a single correlation predict it. $Re$ decides laminar vs turbulent; $Pr$ (met here as $\delta/\delta_t$) fixes the thermal-layer thickness. Then [3.3](03-03-external-forced-convection.md)–[3.5](03-05-natural-convection.md) walk the specific correlations, and the SFEE bookkeeping $\dot q=\dot m c_p\,\Delta T$ from [`engineering-thermodynamics`](../../engineering-thermodynamics/syllabus.md) closes the energy balance on the fluid.
- **Sideways (fluid mechanics):** the velocity boundary layer here *is* the momentum boundary layer of [`fluid-dynamics` 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md), and the no-slip condition and $\delta\sim\sqrt{x}$ growth come straight from there; the laminar/turbulent split is governed by the same Reynolds number introduced in [`fluid-dynamics` 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md). Heat transfer just rides the flow the fluids course describes.

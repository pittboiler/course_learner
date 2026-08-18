# Reactor Thermal-Hydraulics · Lesson 1.2: Conduction with a heat source in a fuel pin

> ⏱ ~15 min · Module 1: Core power and conduction in the fuel · Builds on: [1.1 Power distribution and the volumetric source](01-01-power-distribution-volumetric-source.md), [`heat-transfer` 1.3 (1-D steady conduction)](../../heat-transfer/lessons/01-03-1d-steady-conduction.md), [`nuclear-materials` 3.2 (fuel temperature profile)](../../nuclear-materials/lessons/03-02-fuel-temperature-profile-restructuring.md) · Unlocks: 1.3 (gap and cladding resistances)

## Why this matters

[Lesson 1.1](01-01-power-distribution-volumetric-source.md) told you *how much* heat is made and *where*: a volumetric source $q'''$ smeared through the fuel. This lesson answers the question that decides whether the reactor lives — **how hot does the middle of the pellet get?** The center is always the hottest point in the core, and if it reaches the UO$_2$ melting point (~2865 °C) the fuel liquefies, relocates, and the safety case collapses. The astonishing payoff is a result so clean it feels like cheating: the centerline-to-surface temperature rise depends on the linear power $q'$ **alone** — not on the pellet's radius. That single number, quoted in kW/m, is the master knob every reactor designer watches.

## The idea

Think of the pellet as a nested stack of thin cylindrical shells. Every shell makes its own fission heat, but there is **no exit at the center** — all the heat generated inside radius $r$ must cross the surface at $r$ on its way out to the coolant. The deeper you go, the more accumulated heat is squeezing through a smaller and smaller area, so the temperature has to climb steeply toward the middle to push that heat outward. That rising-toward-the-center shape is a **parabola**: flat-topped at the axis, steepest at the rim.

Now the surprise. You'd guess a fatter pellet runs hotter — more fuel, more heat. But at the same *heat-per-meter* $q'$, a fatter pellet also has proportionally more cross-sectional area to conduct through, and the two effects cancel exactly. What sets the centerline-to-surface **temperature drop** is $q'$ and the conductivity $k$, nothing else. That is why fuel duty is rated in kW/m, and why the peak-power pin — not the average one — sets the licensing limit.

One complication makes the center run even hotter than the clean formula suggests: UO$_2$ is a *ceramic*, a poor conductor, and worse, its conductivity **falls** as it heats up ([`nuclear-materials` 3.1](../../nuclear-materials/lessons/03-01-uo2-ceramic-fuel.md)). So the hottest region is also the *worst* at getting rid of heat — a vicious circle that we'll handle honestly with an **integral** over $k(T)$.

## The formal version

**The governing equation.** Take a long cylinder with uniform volumetric source $q'''$ (W/m$^3$), thermal conductivity $k$ (W·m$^{-1}$·K$^{-1}$), and temperature $T(r)$ depending only on radius $r$ (m). Steady-state energy balance — heat conducted out of each shell equals heat generated in it — is the cylindrical Poisson equation:

$$\frac{1}{r}\frac{d}{dr}\!\left(r\,\frac{dT}{dr}\right) + \frac{q'''}{k} = 0.$$

*In words: at every radius the divergence of the heat flux exactly soaks up the local generation — nothing accumulates in steady state.* This is the same conduction-with-generation balance as [`heat-transfer` 1.3](../../heat-transfer/lessons/01-03-1d-steady-conduction.md), written in cylindrical coordinates.

**Boundary conditions.** By symmetry there is no net heat crossing the axis, so the flux vanishes there:

$$\left.\frac{dT}{dr}\right|_{r=0} = 0,$$

and we fix the surface temperature $T(r_o) = T_s$, where $r_o$ (m) is the pellet outer radius (the symbol $a$ in [`nuclear-materials` 3.2](../../nuclear-materials/lessons/03-02-fuel-temperature-profile-restructuring.md) — same quantity).

**Solve it (constant $k$).** Multiply by $r$ and integrate once:

$$\frac{d}{dr}\!\left(r\,\frac{dT}{dr}\right) = -\frac{q'''}{k}\,r \quad\Longrightarrow\quad r\,\frac{dT}{dr} = -\frac{q'''\,r^2}{2k} + C_1.$$

The symmetry BC forces $C_1 = 0$, so $\dfrac{dT}{dr} = -\dfrac{q'''\,r}{2k}$. *In words: the outward flux $-k\,dT/dr = q''' r/2$ grows linearly with radius — exactly the generation inside $\pi r^2$ divided by the perimeter $2\pi r$.* Integrate again from the center ($T = T_0$ at $r=0$) outward:

$$\boxed{\,T(r) = T_0 - \frac{q'''\,r^2}{4k}\,}$$

a clean **parabola**. Evaluating at the surface $r = r_o$ gives the centerline-to-surface drop, and using $q' = q'''\,\pi r_o^2$ from [1.1](01-01-power-distribution-volumetric-source.md) to eliminate $q'''$ and $r_o$:

$$\boxed{\,T_0 - T_s = \frac{q'''\,r_o^2}{4k} = \frac{q'}{4\pi k}\,}$$

*In words: the centerline runs above the surface by $q'/(4\pi k)$ — and the radius has vanished.* Read that twice: at a fixed linear power, a fat pellet and a skinny pellet reach the **same** centerline temperature.

**Temperature-dependent $k$.** UO$_2$'s conductivity drops with temperature, so a single $k$ is a lie. Keep $k(T)$ inside the integral. Starting from $k\,dT = -\tfrac{q'''}{2} r\,dr$ and integrating surface-to-center:

$$\int_{T_s}^{T_0} k(T)\,dT = \frac{q'''}{2}\int_0^{r_o} r\,dr = \frac{q''' r_o^2}{4} = \frac{q'}{4\pi}.$$

$$\boxed{\,\frac{q'}{4\pi} = \int_{T_s}^{T_0} k(T)\,dT\,}$$

*In words: the linear power (over $4\pi$) equals the area under the conductivity-vs-temperature curve between surface and centerline.* This is **exactly** the boxed result of [`nuclear-materials` 3.2](../../nuclear-materials/lessons/03-02-fuel-temperature-profile-restructuring.md) — the two courses reconcile. The constant-$k$ case is just the special case $\int k\,dT = k(T_0 - T_s)$. Because $k$ is small where $T$ is large, you must extend $T_0$ far up the axis to accumulate enough area — which is *why the centerline runs so disproportionately hot*.

**The melt limit.** The whole point of the calculation is to keep the peak below the UO$_2$ melting point, $T_0 < T_{\text{melt}} \approx 2865\ ^\circ$C. With a typical surface temperature $T_s \approx 450\ ^\circ$C, that leaves a temperature budget of roughly 2400 K for the internal rise — generous, but a hot pin at high burnup (degraded $k$) can eat into it fast.

## Picture

![Left: a fuel pellet cross-section with the hottest point at the centerline, radius r_o, and cooled surface T_s marked. Right: the parabolic radial temperature profile T(r) peaking at the centerline T_0 and falling to the surface temperature T_s at r = r_o, with the centerline-to-surface drop labeled q'/(4 pi k).](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (constant $k$ — the radius-free drop).** A fuel pin runs at linear power $q' = 40\ \mathrm{kW/m} = 40{,}000\ \mathrm{W/m}$ (a PWR peak rating). Approximate the conductivity as a single value $k = 3\ \mathrm{W\,m^{-1}\,K^{-1}}$. The centerline-to-surface drop is

$$T_0 - T_s = \frac{q'}{4\pi k} = \frac{40{,}000}{4\pi \times 3} = \frac{40{,}000}{37.70} \approx 1061\ \mathrm{K}.$$

With a surface at $T_s \approx 450\ ^\circ$C the centerline sits near $450 + 1061 = 1511\ ^\circ$C — hot, but comfortably under the 2865 °C melt.

Now the punchline: **nothing in that calculation was the pellet radius.** Whether the pin is 8 mm or 12 mm across, the same 40 kW/m gives the same 1061 K rise. The radius only sets the volumetric rate $q''' = q'/(\pi r_o^2)$ — the local intensity — not the peak temperature.

*Check.* Units: $\dfrac{\mathrm{W/m}}{\mathrm{W\,m^{-1}\,K^{-1}}} = \mathrm{K}$ ✓. Order of magnitude: ~1000 K of internal rise at ~40 kW/m is textbook for a poorly-conducting oxide fuel.

**Example 2 (integral conductivity — the honest version).** Same $q' = 40\ \mathrm{kW/m}$, but now respect that $k$ falls with temperature: model it as linear, $k = 5\ \mathrm{W\,m^{-1}\,K^{-1}}$ at the cool surface dropping to $k = 2.5\ \mathrm{W\,m^{-1}\,K^{-1}}$ at the hot centerline. For a linear $k(T)$ the integral is just the **average** conductivity times the temperature span:

$$\int_{T_s}^{T_0} k\,dT = \bar k \,(T_0 - T_s), \qquad \bar k = \frac{5 + 2.5}{2} = 3.75\ \mathrm{W\,m^{-1}\,K^{-1}}.$$

Set this equal to $q'/(4\pi)$:

$$\bar k\,(T_0 - T_s) = \frac{q'}{4\pi} = \frac{40{,}000}{4\pi} = 3183\ \mathrm{W/m} \;\Longrightarrow\; T_0 - T_s = \frac{3183}{3.75} \approx 849\ \mathrm{K}.$$

Same ballpark as Example 1's 1061 K — the two estimates bracket the truth because the effective conductivity ($\bar k = 3.75$) is a bit higher than the crude $k = 3$. The physical reading: **each shell adds its bit.** Sweep temperature from $T_s$ up to $T_0$; each slice $dT$ contributes $k(T)\,dT$ of heat-carrying capacity, and the *whole* stack of slices has to add up to the fixed $q'/(4\pi)$. Where $k$ is smallest (the hot core), each slice contributes little, so you need many degrees of extra $T$ to make up the area — the mathematical fingerprint of a runaway-hot center.

*Check.* Units: $\bar k\,\Delta T = (\mathrm{W\,m^{-1}\,K^{-1}})(\mathrm{K}) = \mathrm{W/m}$, matching $q'/(4\pi)$ ✓. Had we naively used the *surface* value $k = 5$ we'd get $3183/5 = 637$ K — an underestimate, exactly the optimism the integral form is designed to remove.

## Watch out

- **You might think a fatter pellet runs hotter at the center.** It doesn't — $T_0 - T_s = q'/(4\pi k)$ has no radius in it. A wider pellet at the same $q'$ makes the same heat per meter but has more area to conduct it, and the centerline rise is identical. Radius changes $q''' = q'/(\pi r_o^2)$, not $\Delta T$.
- **You might trust a single constant $k$.** UO$_2$'s conductivity *drops* with temperature, so the hot center is the worst conductor and a constant-$k$ estimate using the surface value **under**predicts the centerline. Use $\int_{T_s}^{T_0} k(T)\,dT$; constant $k$ is a back-of-envelope shortcut, useful but optimistic.
- **You might mix up the primes.** $q'''$ (W/m$^3$, volumetric), $q'$ (W/m, per unit length $= q'''\pi r_o^2$), and $q''$ (W/m$^2$, surface flux) are three different animals. The radius-free result is written in the *linear* power $q'$ — get the primes right or the units won't close.

## One-liner

> Solve $\tfrac{1}{r}\tfrac{d}{dr}(r\,dT/dr) = -q'''/k$ and the fuel temperature is a parabola whose centerline-to-surface drop is $q'/(4\pi k)$ — set by linear power alone, radius nowhere in sight (and honestly, by $\int_{T_s}^{T_0} k\,dT$).

## Problems

**P1 (🟢)** A fuel pin runs at $q' = 35\ \mathrm{kW/m}$ with a surface temperature $T_s = 430\ ^\circ$C. Treating $k = 3.2\ \mathrm{W\,m^{-1}\,K^{-1}}$ as constant, find the centerline temperature $T_0$. How much margin is left to the 2865 °C melting point?

**P2 (🟡)** For a pin with surface temperature $T_s = 500\ ^\circ$C and constant $k = 2.8\ \mathrm{W\,m^{-1}\,K^{-1}}$, what is the maximum linear power $q'_{\max}$ that keeps the centerline just below the UO$_2$ melting point? Would the real (temperature-dependent) conductivity make the true limit higher or lower than this estimate?

**P3 (🔴, optional)** Respect the falling conductivity with the linear model $k(T) = 4.0 - 0.0008\,(T - 500)$ in W·m$^{-1}$·K$^{-1}$, with $T$ in °C and surface temperature $T_s = 500\ ^\circ$C. For $q' = 40\ \mathrm{kW/m}$, use the integral-conductivity relation to find the centerline temperature $T_0$. Compare to the optimistic estimate you'd get from the surface conductivity alone.

<details>
<summary>Solutions</summary>

**P1** Constant-$k$ drop:

$$T_0 - T_s = \frac{q'}{4\pi k} = \frac{35{,}000}{4\pi \times 3.2} = \frac{35{,}000}{40.21} \approx 870\ \mathrm{K}, \qquad T_0 \approx 430 + 870 = 1300\ ^\circ\mathrm{C}.$$

Margin to melt: $2865 - 1300 = 1565\ ^\circ$C — a wide cushion.

*Check.* Units: $(\mathrm{W/m})/(\mathrm{W\,m^{-1}\,K^{-1}}) = \mathrm{K}$ ✓. Slightly lower power and higher $k$ than Example 1 give a smaller rise (870 vs 1061 K) — consistent.

**P2** The centerline may rise at most $T_0 - T_s = 2865 - 500 = 2365\ \mathrm{K}$. Invert the relation:

$$q'_{\max} = 4\pi k\,(T_0 - T_s) = 4\pi \times 2.8 \times 2365 \approx 83{,}200\ \mathrm{W/m} \approx 83\ \mathrm{kW/m}.$$

The real conductivity falls below 2.8 in the hot core, so the true $\int k\,dT$ is *smaller* than $2.8 \times 2365$ — meaning the actual centerline hits melt at a **lower** $q'$. The constant-$k$ estimate is optimistic; the honest melt limit is below 83 kW/m.

*Check.* Units: $4\pi k\,\Delta T = (\mathrm{W\,m^{-1}\,K^{-1}})(\mathrm{K}) = \mathrm{W/m}$ ✓. That ~83 kW/m sits well above a typical ~40 kW/m peak rating, so normal operation keeps a factor-of-two margin to melt — as it must.

**P3** The integral-conductivity relation with $u \equiv T - 500$ (so $\Delta T = T_0 - 500$):

$$\int_{T_s}^{T_0} k\,dT = \int_0^{\Delta T} \big(4.0 - 0.0008\,u\big)\,du = 4.0\,\Delta T - 0.0004\,\Delta T^2 = \frac{q'}{4\pi} = \frac{40{,}000}{4\pi} = 3183\ \mathrm{W/m}.$$

Solve the quadratic $0.0004\,\Delta T^2 - 4.0\,\Delta T + 3183 = 0$, i.e. $\Delta T^2 - 10{,}000\,\Delta T + 7.96\times10^6 = 0$:

$$\Delta T = \frac{10{,}000 - \sqrt{10{,}000^2 - 4(7.96\times10^6)}}{2} = \frac{10{,}000 - \sqrt{6.816\times10^7}}{2} = \frac{10{,}000 - 8256}{2} \approx 872\ \mathrm{K}.$$

(Take the smaller root — the larger one is unphysical, past where the linear model would drive $k$ negative.) So $T_0 \approx 500 + 872 = 1372\ ^\circ$C, and the centerline conductivity has fallen to $k(T_0) = 4.0 - 0.0008(872) \approx 3.30\ \mathrm{W\,m^{-1}\,K^{-1}}$.

Optimistic surface-only estimate: $\Delta T = q'/(4\pi k_s) = 3183/4.0 \approx 796\ \mathrm{K}$, i.e. $T_0 \approx 1296\ ^\circ$C. The integral gives ~76 K more, because conductivity degrades on the way to the center — exactly the effect a single surface value misses.

*Check.* Units of the quadratic's constant: $q'/(4\pi)$ is W/m and $\bar k\,\Delta T$ is W/m ✓. The average conductivity implied, $\bar k = 3183/872 = 3.65 \approx (4.0 + 3.30)/2$, matches the mean of the end values — the linear-$k$ shortcut checks out. ✓

</details>

## Connections

- **Backward:** the source $q'''$ and the linear rating $q'$ come straight from [1.1](01-01-power-distribution-volumetric-source.md); the conduction-with-generation balance is [`heat-transfer` 1.3](../../heat-transfer/lessons/01-03-1d-steady-conduction.md) in cylindrical form; and the low, temperature-declining UO$_2$ conductivity that makes the center so hot is [`nuclear-materials` 3.1](../../nuclear-materials/lessons/03-01-uo2-ceramic-fuel.md). The boxed $q' = 4\pi\int k\,dT$ is the same relation derived in [`nuclear-materials` 3.2](../../nuclear-materials/lessons/03-02-fuel-temperature-profile-restructuring.md).
- **Forward:** this gives the drop *inside* the pellet only. [1.3 The gap and cladding resistances](01-03-gap-cladding-resistances.md) adds the gap and clad to carry the temperature out to the coolant, recasting $q'/(4\pi k)$ as the first link in a thermal-resistance chain ([`heat-transfer` 1.4](../../heat-transfer/lessons/01-04-thermal-resistance-networks.md)) — where the fuel resistance is $R'_f = 1/(4\pi k_f)$. [1.4](01-04-axial-temperature-profile-channel.md) then stacks these drops up the channel to locate the peak fuel temperature.
- **Sideways:** the operator $\frac{1}{r}\frac{d}{dr}(r\,dT/dr)$ is the cylindrical Poisson/Laplacian — the *same* radial equation that gives the parabolic velocity profile of laminar pipe flow ([`fluid-dynamics` 3.2 Couette–Poiseuille](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md)) and the field inside a uniformly charged rod. Recognize the operator and the parabola is the same math wearing three uniforms.

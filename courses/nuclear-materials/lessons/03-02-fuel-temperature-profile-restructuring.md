# Nuclear Materials · Lesson 3.2: The fuel temperature profile and restructuring

> ⏱ ~15 min · Module 3: Nuclear fuels and fission-product behavior · Builds on: [3.1 UO₂: the workhorse ceramic fuel](03-01-uo2-ceramic-fuel.md), [`intro-nuclear-engineering` 3.1 (fission process and energy)](../../intro-nuclear-engineering/lessons/03-01-fission-process-energy.md) · Unlocks: 3.4 (which zones release fission gas)

## Why this matters

Every fuel pin in a reactor is a small furnace: fission deposits heat throughout its volume, and that heat can only escape outward through the pellet's edge. So the center is always the hottest place in the core, and *how* hot it gets decides everything downstream — whether the fuel melts, whether it cracks, whether it vents radioactive gas. The remarkable news from [3.1](03-01-uo2-ceramic-fuel.md)'s poorly-conducting UO₂ is that the centerline temperature is set by a **single operating number** — the linear power — and *not* by how fat the pellet is. This lesson derives that result, then shows how the fuel literally rewrites its own microstructure to tell you, after the fact, how hot each ring ran.

## The idea

Picture the pellet as a stack of thin concentric shells. Fission heat is born uniformly in every shell, but there's no exit at the center — all the heat generated inside radius $r$ has to cross the surface at $r$ on its way out. So the further out you go, the more accumulated heat is passing through, and the steeper the temperature must fall to push it along. The result is a temperature that is highest at the center and sags to a parabola-like curve out to the cooled surface.

Here's the surprising part. You might expect a bigger pellet to run hotter — more fuel, more heat. But a bigger pellet at the same *heat-per-unit-length* also has more cross-sectional area to conduct through, and the two effects exactly cancel. What actually sets the centerline-to-surface **temperature rise** is the **linear power** $q'$ — watts of heat produced per meter of pin length — full stop. Radius drops out. That's why reactor engineers quote fuel duty in kW/m, not in W/cm³: $q'$ is the knob that controls the hottest temperature in the core.

And because UO₂ is a *ceramic* — brittle and a poor conductor — that steep internal gradient does two things. It builds up enormous thermal stress and **cracks** the pellet on the very first rise to power. And if the center runs hot enough, the fabrication pores baked into the pellet start to **migrate up the temperature gradient** toward the hot center, sweeping the grains into new shapes and hollowing out a **central void**. The finished microstructure is a thermometer, written in grains.

## The formal version

**Steady-state radial conduction with uniform generation.** In a long solid cylinder producing heat at a uniform volumetric rate $q'''$ (watts per cubic meter, W/m³), with thermal conductivity $k$ (W·m⁻¹·K⁻¹) and temperature $T(r)$ depending only on radius $r$ (m), energy balance gives

$$\frac{1}{r}\frac{d}{dr}\!\left(r\,k\,\frac{dT}{dr}\right) + q''' = 0.$$

*In words: at every radius, the heat conducted away must exactly carry off the heat generated — nothing accumulates in steady state.*

Multiply by $r$ and integrate once:

$$\frac{d}{dr}\!\left(r\,k\,\frac{dT}{dr}\right) = -q'''\,r \quad\Longrightarrow\quad r\,k\,\frac{dT}{dr} = -\frac{q'''\,r^2}{2} + C_1.$$

By symmetry the pellet has no heat source *at* the axis and the flux there is finite, so $dT/dr = 0$ at $r=0$, forcing $C_1 = 0$. Hence

$$k\,\frac{dT}{dr} = -\frac{q'''\,r}{2}.$$

*In words: the outward heat flux $-k\,dT/dr = q''' r/2$ grows linearly with radius — exactly what you'd expect, since the heat crossing radius $r$ is all the generation inside $\pi r^2$ spread over the area $2\pi r$.*

Now integrate $k\,dT$ from the surface ($r=a$, temperature $T_s$) inward to the center ($r=0$, temperature $T_0$):

$$\int_{T_s}^{T_0} k(T)\,dT = \frac{q'''}{2}\int_0^{a} r\,dr = \frac{q'''\,a^2}{4}.$$

Finally connect $q'''$ to the **linear power** $q'$ (W/m), the total heat generated per unit length: $q' = q'''\,(\pi a^2)$, so $q''' a^2 = q'/\pi$. Substituting gives the central result:

$$\boxed{\,q' = 4\pi \int_{T_s}^{T_0} k(T)\,dT\,}$$

*In words: the linear power equals $4\pi$ times the area under the conductivity-vs-temperature curve between the surface and centerline temperatures.* This **integral conductivity** relation is exact for *any* $k(T)$, and — read it twice — **the pellet radius $a$ has vanished**. The centerline-to-surface temperature rise is fixed by $q'$ alone.

**The constant-$k$ special case.** If we approximate $k$ as a single number, the integral is just $k(T_0 - T_s)$, and

$$T_0 - T_s = \frac{q'}{4\pi k}.$$

The full radial profile then follows from integrating $k\,dT = -\tfrac{q'''}{2} r\,dr$ out to a general radius:

$$\boxed{\,T(r) = T_0 - (T_0 - T_s)\left(\frac{r}{a}\right)^2\,}$$

a **parabola**: flat-topped at the center, steepest at the rim.

**Why the center cracks.** A radial temperature difference $\Delta T = T_0 - T_s$ across a brittle solid sets up a thermal stress of order $\sigma \sim \dfrac{E\,\alpha\,\Delta T}{1-\nu}$, with $E$ the elastic modulus, $\alpha$ the thermal-expansion coefficient, and $\nu$ Poisson's ratio (all from [`materials-science` 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md)). With $\Delta T$ of many hundreds of kelvin, this easily exceeds UO₂'s modest fracture strength, so the pellet **cracks radially** on the first rise to power — see brittle fracture in [`materials-science` 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md).

**Restructuring.** Above roughly $1600$–$1800\,^\circ$C the fabrication pores stop sitting still. Each pore is hotter on its center-facing wall than on its rim-facing wall; UO₂ **evaporates** off the hot face, drifts across the pore as vapor, and **condenses** on the cool face — so the pore migrates *up* the gradient toward the center (an evaporation–condensation mass transport, cousin to the diffusion of [`materials-science` 2.4](../../materials-science/lessons/02-04-diffusion-i-ficks-first-law.md)). Sweeping pores leave behind, from the axis outward: a **central void** where the pores collected, a **columnar-grain** region of long grains aligned along the gradient, an **equiaxed-grain** region where grains merely coarsened, and an unaltered **as-fabricated rim**. Each boundary marks an isotherm — the microstructure is a permanent record of the temperature field.

## Picture

![Left: the parabolic radial temperature profile T(r) peaking at the centerline T0 and falling to the surface Ts, with the 1000 C release threshold marked and the hot central zone shaded. Right: a pellet cross-section showing the four restructuring zones — central void, columnar grains, equiaxed grains, and the as-fabricated rim.](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (centerline temperature — Boss problem 3a).** A UO₂ pin runs at linear power $q' = 30\ \mathrm{kW/m} = 30{,}000\ \mathrm{W/m}$, with surface temperature $T_s = 450\,^\circ$C. Model conductivity crudely as constant, $k = 3\ \mathrm{W\,m^{-1}\,K^{-1}}$. Then

$$T_0 - T_s = \frac{q'}{4\pi k} = \frac{30{,}000}{4\pi \times 3} = \frac{30{,}000}{37.70} \approx 796\ \mathrm{K},$$

so the centerline runs at

$$T_0 \approx 450 + 796 = 1246\,^\circ\mathrm{C}.$$

Line that up against the two limits that matter: UO₂ melts near $2865\,^\circ$C, so we have a comfortable margin to melting; but the fission-gas-release threshold is about $1000\,^\circ$C, and $1246 > 1000$ — **the center is above the gas-release threshold even though the fuel is nowhere near melting.** That gap is the everyday operating regime of a power reactor: hot enough at the core to vent gas, cool enough at the rim to be inert. (Note the pellet radius $a = 4.1$ mm was given in the problem but never needed — that is the integral-conductivity relation earning its keep.)

**Example 2 (which rings are hot, and what a power uprate does — setup for Boss 3b).** Using the parabolic profile with the numbers above, where does the fuel cross $1000\,^\circ$C? Set $T(r) = 1000$:

$$\left(\frac{r}{a}\right)^2 = \frac{T_0 - T(r)}{T_0 - T_s} = \frac{1246 - 1000}{796} = \frac{246}{796} = 0.309 \;\Longrightarrow\; \frac{r}{a} = 0.556.$$

So every ring inside $r \approx 0.56\,a$ exceeds the threshold. Because area scales as $r^2$, that inner core is $(0.556)^2 \approx 0.31$ — the **inner ~31% of the pellet's cross-sectional area** is hot enough to release gas; the outer ~69% is not.

Now raise the power 50%, to $q' = 45\ \mathrm{kW/m}$. Since $T_0 - T_s$ scales linearly with $q'$, the rise becomes $796 \times 1.5 \approx 1194\ \mathrm{K}$ and $T_0 \approx 450 + 1194 = 1644\,^\circ$C. The hot fraction grows:

$$\left(\frac{r}{a}\right)^2 = \frac{1644 - 1000}{1194} = \frac{644}{1194} = 0.539 \;\Longrightarrow\; \text{inner } \sim 54\% \text{ of the area now exceeds } 1000\,^\circ\mathrm{C}.$$

Qualitatively: a 50% power bump nearly **doubles** the gas-releasing volume *and* pushes the peak temperature up by ~400 K, into the regime where thermal (diffusion-driven) release turns on steeply. So the release fraction climbs sharply and the fission gas vented into the pin's plenum rises — driving up **plenum pressure** on the cladding ([3.4](03-04-fission-gas-release-swelling.md) makes this quantitative). This is precisely why licensing caps peak linear power: the hottest pin, not the average one, sets the limit.

## Watch out

- **You might think a fatter pellet runs hotter at the center.** It doesn't — $T_0 - T_s = q'/(4\pi k)$ contains no radius. A wider pellet at the same $q'$ makes the same heat per meter but has proportionally more area to conduct it, so the centerline rise is identical. What a bigger radius *does* change is the volumetric rate $q''' = q'/(\pi a^2)$, not $\Delta T$.
- **You might treat $k$ as a constant and stop there.** UO₂'s conductivity *falls* as it heats up (from [3.1](03-01-uo2-ceramic-fuel.md)), so the hottest region is also the *worst*-conducting one, and a constant-$k$ estimate underpredicts the real centerline temperature. The honest tool is the integral $\int_{T_s}^{T_0} k(T)\,dT$; constant $k$ is a back-of-envelope shortcut, useful but optimistic.
- **You might read "restructuring" as damage.** The central void and columnar grains are a thermodynamic *response*, not a failure — the void even helps by giving swelling and fission gas somewhere to go. But their appearance is a red flag that the fuel ran very hot, and each zone boundary pins down an isotherm you can read post-irradiation.
- **You might mix up the three power densities.** $q'''$ (W/m³, volumetric), $q'$ (W/m, per unit length, $= q'''\pi a^2$), and $q''$ (W/m², surface flux) are different animals. The integral-conductivity relation uses the *linear* power $q'$ — get the primes right.

## One-liner

> A fuel pin's centerline-to-surface temperature rise is set by the linear power alone, $q' = 4\pi\int_{T_s}^{T_0} k\,dT$ (radius cancels), and the hot center writes its own thermometer — cracks, columnar grains, and a central void.

## Problems

**P1 (🟢)** A UO₂ pin runs at $q' = 25\ \mathrm{kW/m}$ with surface temperature $T_s = 400\,^\circ$C. Taking $k = 2.8\ \mathrm{W\,m^{-1}\,K^{-1}}$ (constant), find the centerline temperature $T_0$. Does the center exceed the $\sim 1000\,^\circ$C fission-gas-release threshold?

**P2 (🟡)** For the same pin ($T_s = 400\,^\circ$C, $k = 2.8\ \mathrm{W\,m^{-1}\,K^{-1}}$), a low-temperature irradiation test requires the centerline to stay **below** $1000\,^\circ$C. What is the maximum allowable linear power $q'$? Comment on what a higher-conductivity fuel would buy you.

**P3 (🔴)** Continuing P1's pin, use the parabolic profile to find the radial fraction $r/a$ at which $T = 1000\,^\circ$C, and hence the fraction of the pellet's **cross-sectional area** that exceeds the release threshold.

<details>
<summary>Solutions</summary>

**P1** With constant $k$,

$$T_0 - T_s = \frac{q'}{4\pi k} = \frac{25{,}000}{4\pi \times 2.8} = \frac{25{,}000}{35.19} \approx 710\ \mathrm{K}, \qquad T_0 \approx 400 + 710 = 1110\,^\circ\mathrm{C}.$$

Yes — $1110\,^\circ$C exceeds the $\sim 1000\,^\circ$C threshold, so the central region will release fission gas (though the margin to the $2865\,^\circ$C melt is large).

*Check.* Units: $q'/(4\pi k) = (\mathrm{W/m})/(\mathrm{W\,m^{-1}\,K^{-1}}) = \mathrm{K}$ ✓. Sanity: slightly lower power and lower $k$ than Example 1 give a slightly lower rise (710 vs 796 K) — consistent.

**P2** The centerline constraint is $T_0 - T_s \le 1000 - 400 = 600\ \mathrm{K}$. Invert the relation:

$$q'_{\max} = 4\pi k\,(T_0 - T_s) = 4\pi \times 2.8 \times 600 \approx 21{,}100\ \mathrm{W/m} \approx 21\ \mathrm{kW/m}.$$

So the test must be derated to about $21$ kW/m — below the $25$ kW/m of P1, which is why P1's center broke the threshold. A fuel with higher $k$ (e.g. a metallic fuel, $k \sim 10\times$ UO₂, coming in [3.5](03-05-metallic-advanced-fuels.md)) raises $q'_{\max}$ in direct proportion: you can run far more power per meter before hitting the same centerline temperature. Higher conductivity buys thermal margin.

*Check.* Units: $4\pi k \Delta T = (\mathrm{W\,m^{-1}\,K^{-1}})(\mathrm{K}) = \mathrm{W/m}$ ✓. And $21 < 25$ kW/m, consistent with P1 exceeding the limit.

**P3** From $T(r) = T_0 - (T_0 - T_s)(r/a)^2$, set $T = 1000\,^\circ$C with $T_0 = 1110$, $T_s = 400$:

$$\left(\frac{r}{a}\right)^2 = \frac{T_0 - T}{T_0 - T_s} = \frac{1110 - 1000}{1110 - 400} = \frac{110}{710} = 0.155 \;\Longrightarrow\; \frac{r}{a} = 0.394.$$

The cross-sectional area inside radius $r$ scales as $(r/a)^2$, so the fraction of area above the threshold is exactly $(r/a)^2 = 0.155$, i.e. the **inner ~16% of the pellet area** releases gas.

*Check.* The area fraction equals $(r/a)^2$ directly, so no separate step is needed — and a lower centerline (1110 vs Example 1's 1246 °C) sensibly gives a smaller hot core (16% vs 31%). ✓

</details>

## Flashback

**From Lesson 2.5 (Radiation hardening):** An irradiated steel develops a number density $N = 1\times10^{23}\ \mathrm{m^{-3}}$ of obstacles of mean diameter $d = 2\ \mathrm{nm}$. Using the dispersed-barrier model $\Delta\sigma = \alpha M \mu b \sqrt{Nd}$ with $\alpha = 0.3$, $M = 3.06$, $\mu = 80\ \mathrm{GPa}$, and $b = 0.25\ \mathrm{nm}$, estimate the yield-strength increase.

<details>
<summary>Solution</summary>

First the obstacle-spacing factor:

$$\sqrt{Nd} = \sqrt{(1\times10^{23})(2\times10^{-9})} = \sqrt{2\times10^{14}} = 1.41\times10^{7}\ \mathrm{m^{-1}}.$$

Then

$$\Delta\sigma = \alpha M \mu b \sqrt{Nd} = 0.3 \times 3.06 \times (80\times10^{9}) \times (0.25\times10^{-9}) \times (1.41\times10^{7}) \approx 2.6\times10^{8}\ \mathrm{Pa} = 260\ \mathrm{MPa}.$$

*Check.* Units: $\mu b\sqrt{Nd} = \mathrm{Pa}\cdot\mathrm{m}\cdot\mathrm{m^{-1}} = \mathrm{Pa}$ ✓ ($\alpha$, $M$ dimensionless). A few-hundred-MPa hardening from nanometer obstacles at $10^{23}\ \mathrm{m^{-3}}$ is the right order for reactor steels. ✓

</details>

## Connections

- **Backward:** the entire temperature problem is driven by UO₂'s low, temperature-declining conductivity from [3.1](03-01-uo2-ceramic-fuel.md) — a good conductor would barely have a gradient. The cracking argument reuses elastic stress from [`materials-science` 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) and brittle fracture from [`materials-science` 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md), and pore migration is the evaporation–condensation cousin of diffusion in [`materials-science` 2.4](../../materials-science/lessons/02-04-diffusion-i-ficks-first-law.md).
- **Forward:** the hot rings we located are exactly the zones that vent fission gas in [3.4](03-04-fission-gas-release-swelling.md) — the $1000\,^\circ$C isotherm you found here is the release map, and the central void gives the gas somewhere to collect. [3.5](03-05-metallic-advanced-fuels.md) shows how a high-conductivity metallic fuel flattens this whole profile and runs cool enough to skip restructuring entirely.
- **Sideways:** the governing equation $\frac{1}{r}\frac{d}{dr}(r\,dT/dr) = -q'''/k$ is the cylindrical Poisson equation — the same radial Laplacian operator that gives the electric field inside a uniformly charged rod and the velocity profile of laminar pipe flow. Recognize the operator and all three problems are one derivation.

# Heat Transfer · Lesson 3.5: Natural convection

> ⏱ ~15 min · Module 3: Convection · Builds on: [3.2 Dimensionless groups: Re, Pr, Nu](03-02-dimensionless-groups-re-pr-nu.md), [3.3 External forced convection](03-03-external-forced-convection.md), [3.4 Internal forced convection](03-04-internal-forced-convection.md) · Unlocks: [3.6 Boiling and condensation](03-06-boiling-condensation.md), Boss problem 3(c)

## Why this matters

Every convection problem so far had something *pushing* the fluid — a pump, a fan, a wind. But a radiator warms a room with no fan. A cup of coffee sheds heat to still air. Electronics in a sealed box, a transformer on a pole, a person standing in a quiet room — all cool themselves with **no moving parts**, driven only by the fact that warm fluid is lighter and floats. This is **natural (free) convection**, and it sets a floor on how much heat you can dump without spending energy to move the fluid. Knowing that floor is exactly what tells you whether you *need* a pump — the punchline of Boss problem 3.

## The idea

Heat a surface. The thin layer of fluid touching it warms up, expands, and becomes **less dense** than the cooler fluid around it. Less dense means it floats: gravity pulls the surrounding heavy fluid down and shoves the light warm fluid up. The surface has generated its own current — no pump required. The rising warm fluid drags fresh cool fluid in along the wall, which warms in turn, and a steady buoyant boundary layer sets up.

The consequences flow from one difference with forced convection: **there is no imposed velocity**. In forced flow you had a free-stream speed $u_\infty$ setting the Reynolds number. Here the fluid far away is *dead still* ($u_\infty = 0$), and the only speed that exists is the one buoyancy manufactures. So Reynolds number is the wrong dial — we need a group that measures **buoyancy against the viscosity that resists it**. That group is the Grashof number, and it plays exactly the role $Re$ played before.

The velocity profile looks strange the first time you see it (see the Picture). In forced flow over a plate, speed rose from zero at the wall to $u_\infty$ far away. Here it's **zero at the wall** (no-slip, as always) *and* **zero far away** (the fluid out there isn't moving at all) — so the speed must peak *somewhere in between*. The whole flow is a self-contained buoyant plume hugging the surface.

One number to carry away before any algebra: natural-convection coefficients are **small**. For a surface in air, $\bar h$ lands in the single digits to low tens of $\mathrm{W/(m^2\,K)}$ — a tenth or a hundredth of what a fan buys you. That weakness is precisely why forced convection earns its pump.

## The formal version

**Thermal expansion coefficient.** Buoyancy comes from density changing with temperature, so we need to quantify that. The **volumetric thermal expansion coefficient** is

$$\beta = -\frac{1}{\rho}\left(\frac{\partial \rho}{\partial T}\right)_p \qquad (\mathrm{K^{-1}}),$$

with $\rho$ the density ($\mathrm{kg/m^3}$), $T$ temperature (K), pressure held fixed. *In words: $\beta$ is the fractional drop in density per degree of warming.* The bigger $\beta$, the more buoyancy a given temperature difference produces. For an **ideal gas** $\rho = p/RT$, so $\partial\rho/\partial T = -\rho/T$ and

$$\beta = \frac{1}{T_f}\quad(\text{ideal gas, }T_f\text{ in kelvin}),$$

evaluated at the **film temperature** $T_f = (T_s + T_\infty)/2$ — the average of the surface and far-fluid temperatures, where we read all properties. For liquids $\beta$ is a tabulated property (water near 330 K has $\beta \approx 5\times10^{-4}\,\mathrm{K^{-1}}$).

**Grashof number.** Replace $Re$ with the ratio of buoyancy force to viscous force:

$$Gr = \frac{g\,\beta\,(T_s - T_\infty)\,L^3}{\nu^2},$$

where $g = 9.81\,\mathrm{m/s^2}$, $T_s$ is surface temperature and $T_\infty$ the still-fluid temperature (K or °C — only the difference enters), $L$ is the characteristic length ($\mathrm{m}$; for a vertical plate, its **height**), and $\nu$ is the kinematic viscosity ($\mathrm{m^2/s}$). *In words: $Gr$ measures how hard buoyancy drives the flow versus how hard viscosity fights it — the buoyancy-driven cousin of $Re$.* Where forced-convection correlations read $Nu = f(Re, Pr)$, natural convection reads $Nu = f(Gr, Pr)$.

**Rayleigh number.** In practice buoyancy and the fluid's heat-carrying ability always appear together, so we bundle them:

$$Ra = Gr\,Pr = \frac{g\,\beta\,(T_s - T_\infty)\,L^3}{\nu\,\alpha},$$

with $\alpha = k/(\rho c_p)$ the thermal diffusivity ($\mathrm{m^2/s}$) and $Pr = \nu/\alpha$. *In words: $Ra$ is the single knob for natural convection — it sets both how strong the flow is and how well it moves heat.* Low $Ra$: sluggish, laminar, sometimes barely-moving fluid. High $Ra$ (past $\sim10^9$ on a vertical plate): the plume goes turbulent. Natural-convection correlations are written as $Nu = f(Ra, Pr)$, and most of them are just $\overline{Nu} = C\,Ra^{n}$.

**Correlations.** Three workhorses (all properties at $T_f$; Incropera):

| Geometry | Characteristic length $L$ | Correlation | Range |
|---|---|---|---|
| Vertical plate | height | $\overline{Nu} = 0.59\,Ra^{1/4}$ | $10^4 \le Ra \le 10^9$ (laminar) |
| Horizontal cylinder | diameter $D$ | $\overline{Nu}_D = 0.53\,Ra_D^{1/4}$ | $10^4 \le Ra_D \le 10^9$ |
| Horizontal plate, hot face up | $A_s/P$ (area/perimeter) | $\overline{Nu} = 0.54\,Ra^{1/4}$ | $10^4 \le Ra \le 10^7$ |

For the vertical plate across *all* $Ra$ (laminar and turbulent), the smoother **Churchill–Chu** correlation

$$\overline{Nu} = \left\{0.825 + \frac{0.387\,Ra^{1/6}}{\left[1+(0.492/Pr)^{9/16}\right]^{8/27}}\right\}^2$$

is the more accurate choice; the $0.59\,Ra^{1/4}$ form is its laminar simplification and is plenty for estimates. In every case $\bar h = \overline{Nu}\,k/L$, then $q'' = \bar h\,(T_s - T_\infty)$ from Newton's law of cooling.

**Mixed convection.** Buoyancy never truly switches off, even in forced flow. The referee is the ratio $Gr/Re^2$:

- $Gr/Re^2 \ll 1$: forced convection wins, ignore buoyancy.
- $Gr/Re^2 \gg 1$: natural convection wins, ignore the imposed flow.
- $Gr/Re^2 \sim 1$: **mixed** — both matter, and you combine them (roughly $Nu^n = Nu_{\text{forced}}^n \pm Nu_{\text{nat}}^n$, sign depending on whether buoyancy aids or opposes the flow).

*In words: compare buoyancy ($Gr$) to inertia ($Re^2$); whichever is far bigger owns the physics.*

## Picture

![A heated vertical plate at temperature T_s in still cool fluid. A dashed boundary-layer edge grows thicker toward the top; upward arrows along the wall show the buoyant rise. At one height the vertical-velocity profile is drawn: zero at the wall, rising to a peak a short distance out, then decaying back to zero at the edge — unlike forced flow, which would level off at the free-stream speed.](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (vertical plate in air — the whole recipe).** A vertical plate $L = 0.3\ \mathrm{m}$ tall is held at $T_s = 60\,^\circ\mathrm{C}$ in quiescent air at $T_\infty = 20\,^\circ\mathrm{C}$. Find $\bar h$ and the heat flux $q''$.

*Step 1 — film temperature and properties.* $T_f = (60+20)/2 = 40\,^\circ\mathrm{C} = 313\ \mathrm{K}$. Air at 313 K (Incropera, interpolated): $\nu = 17.2\times10^{-6}\,\mathrm{m^2/s}$, $\alpha = 24.4\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.0273\,\mathrm{W/(m\,K)}$, $Pr = 0.705$. Air is an ideal gas, so

$$\beta = \frac{1}{T_f} = \frac{1}{313} = 3.19\times10^{-3}\ \mathrm{K^{-1}}.$$

*Step 2 — Rayleigh number.* The temperature difference is $T_s - T_\infty = 40\ \mathrm{K}$ and $L^3 = 0.3^3 = 0.027\,\mathrm{m^3}$:

$$Ra = \frac{g\beta(T_s-T_\infty)L^3}{\nu\alpha} = \frac{9.81 \times 3.19\times10^{-3}\times 40 \times 0.027}{17.2\times10^{-6}\times 24.4\times10^{-6}} = \frac{0.0338}{4.20\times10^{-10}} \approx 8.1\times10^{7}.$$

This sits inside $10^4$–$10^9$, so the flow is laminar and $\overline{Nu} = 0.59\,Ra^{1/4}$ applies.

*Step 3 — Nusselt, then $\bar h$.* $Ra^{1/4} = (8.1\times10^{7})^{1/4} \approx 94.8$, so

$$\overline{Nu} = 0.59 \times 94.8 = 55.9, \qquad \bar h = \frac{\overline{Nu}\,k}{L} = \frac{55.9 \times 0.0273}{0.3} \approx 5.1\ \mathrm{W/(m^2\,K)}.$$

*Step 4 — heat flux.* $q'' = \bar h\,(T_s - T_\infty) = 5.1 \times 40 \approx 204\ \mathrm{W/m^2}.$

*Check.* Units of $Ra$: numerator $(\mathrm{m/s^2})(\mathrm{K^{-1}})(\mathrm{K})(\mathrm{m^3}) = \mathrm{m^4/s^2}$; denominator $(\mathrm{m^2/s})(\mathrm{m^2/s}) = \mathrm{m^4/s^2}$ — they cancel, so $Ra$ is dimensionless ✓. And $\bar h \approx 5\,\mathrm{W/(m^2K)}$ is squarely in the single-digit range advertised for air free convection — a fan over this plate would easily give ten to fifty times more.

**Example 2 (Boss problem 3(c): does the pump earn its keep?).** Boss problem 3 pushes water through a heated tube of diameter $D = 0.025\ \mathrm{m}$; the forced-convection analysis of [Lesson 3.4](03-04-internal-forced-convection.md) — Dittus–Boelter at $u_m = 2\ \mathrm{m/s}$, water near 330 K — gave $Re \approx 1.0\times10^{5}$, $Nu \approx 366$, and

$$h_{\text{forced}} = \frac{Nu\,k}{D} = \frac{366 \times 0.650}{0.025} \approx 9.5\times10^{3}\ \mathrm{W/(m^2\,K)}.$$

Now cut the pump. The same tube, wall at $T_s = 75\,^\circ\mathrm{C}$, sits in a large pool of still water at $T_\infty = 45\,^\circ\mathrm{C}$. What natural-convection $h$ can buoyancy alone deliver on this **horizontal cylinder**?

Film temperature $T_f = 60\,^\circ\mathrm{C} \approx 333\ \mathrm{K}$; water there (Incropera): $\nu = 4.97\times10^{-7}\,\mathrm{m^2/s}$, $\alpha = 1.58\times10^{-7}\,\mathrm{m^2/s}$, $k = 0.650\,\mathrm{W/(m\,K)}$, $\beta = 5.0\times10^{-4}\,\mathrm{K^{-1}}$ (tabulated — water is *not* an ideal gas). With $D$ as the length and $T_s - T_\infty = 30\ \mathrm{K}$, $D^3 = 1.56\times10^{-5}\,\mathrm{m^3}$:

$$Ra_D = \frac{9.81 \times 5.0\times10^{-4}\times 30 \times 1.56\times10^{-5}}{4.97\times10^{-7}\times 1.58\times10^{-7}} = \frac{2.30\times10^{-6}}{7.85\times10^{-14}} \approx 2.9\times10^{7}.$$

In range for $\overline{Nu}_D = 0.53\,Ra_D^{1/4}$: $Ra_D^{1/4} \approx 73.5$, so $\overline{Nu}_D = 0.53 \times 73.5 \approx 39$, and

$$h_{\text{nat}} = \frac{\overline{Nu}_D\,k}{D} = \frac{39 \times 0.650}{0.025} \approx 1.0\times10^{3}\ \mathrm{W/(m^2\,K)}.$$

*The verdict.* $h_{\text{forced}}/h_{\text{nat}} \approx 9500/1000 \approx 9$–$10$. The pump buys almost an **order of magnitude** more heat transfer. (Notice water free convection, $\sim10^3\,\mathrm{W/(m^2K)}$, is far from the single-digit air value — liquids convect naturally much better than gases — yet forced flow *still* dominates.) That factor of ten is the difference between a tube that barely keeps the water moving toward its target temperature and one that reaches it in a fraction of the length — which is exactly why the design pays for a pump.

*Check.* Both $h$'s came out as $Nu\,k/D$ with the same $k$ and $D$, so their ratio is just $366/39 \approx 9.4$ — the forced Nusselt number swamps the natural one, as it must when $Re^2 = (10^5)^2 = 10^{10}$ dwarfs $Gr = Ra_D/Pr \approx 2.9\times10^7/3.15 \approx 9\times10^6$, giving $Gr/Re^2 \sim 10^{-3} \ll 1$ ✓ — squarely in the forced-convection-wins regime.

## Watch out

- **You might think you use the same properties as forced convection at the bulk temperature.** For external natural convection, evaluate *everything* at the **film temperature** $T_f = (T_s+T_\infty)/2$, and don't forget $\beta$ is one of those properties — it's the whole engine of the problem, easy to leave out.
- **You might set $\beta = 1/T_f$ for water.** That shortcut is *ideal-gas only*. For liquids, look $\beta$ up in a table (and use **absolute** kelvin if the surface happens to be a gas). Using $1/T_f$ for water overestimates $\beta$ by a factor of several.
- **You might expect the velocity profile to level off far from the wall like forced flow.** It goes back to **zero** far away, because the free fluid is quiescent — the profile has an interior peak, not a plateau. Any mental picture borrowed from flat-plate forced convection will mislead you here.
- **You might drop buoyancy the instant there's a fan.** Only if $Gr/Re^2 \ll 1$. In slow flows — gentle ventilation, a barely-running fan — $Gr/Re^2 \sim 1$ and you're in the *mixed* regime where ignoring either mode is wrong.

## One-liner

> With no pump, a hot surface makes its own current: buoyancy over viscosity is the Grashof number, $Ra = Gr\,Pr$ is the single dial, $Nu \sim 0.5\,Ra^{1/4}$ gives a small $h$ — and that smallness is why forced convection is worth a pump.

## Problems

**P1 (🟢)** A vertical plate $L = 0.5\ \mathrm{m}$ tall is at $T_s = 40\,^\circ\mathrm{C}$ in still air at $T_\infty = 20\,^\circ\mathrm{C}$. Using air at $T_f = 30\,^\circ\mathrm{C} = 303\ \mathrm{K}$ ($\nu = 16.0\times10^{-6}\,\mathrm{m^2/s}$, $\alpha = 22.9\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.0265\,\mathrm{W/(m\,K)}$, $Pr = 0.706$), find $\beta$, then $Ra$, then $\bar h$ with $\overline{Nu} = 0.59\,Ra^{1/4}$.

**P2 (🟡)** A horizontal steam pipe of diameter $D = 0.1\ \mathrm{m}$ has a surface at $T_s = 70\,^\circ\mathrm{C}$ in still air at $T_\infty = 20\,^\circ\mathrm{C}$. Use air at $T_f = 45\,^\circ\mathrm{C} = 318\ \mathrm{K}$ ($\nu = 17.7\times10^{-6}\,\mathrm{m^2/s}$, $\alpha = 25.2\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.0276\,\mathrm{W/(m\,K)}$). Find $\bar h$ from $\overline{Nu}_D = 0.53\,Ra_D^{1/4}$, then the heat lost **per metre of pipe length**, $q' = \bar h\,(\pi D)\,(T_s - T_\infty)$.

**P3 (🔴)** A fan blows air at $u_\infty = 0.4\ \mathrm{m/s}$ across the vertical plate of P1 (still $L = 0.5\ \mathrm{m}$, $\nu = 16.0\times10^{-6}\,\mathrm{m^2/s}$). Compute $Re_L$ and the ratio $Gr/Re_L^2$ (recall $Gr = Ra/Pr$ from P1), and decide whether this is forced, natural, or mixed convection.

<details>
<summary>Solutions</summary>

**P1** Ideal-gas air: $\beta = 1/T_f = 1/303 = 3.30\times10^{-3}\ \mathrm{K^{-1}}$. With $T_s - T_\infty = 20\ \mathrm{K}$ and $L^3 = 0.125\,\mathrm{m^3}$,

$$Ra = \frac{g\beta\,\Delta T\,L^3}{\nu\alpha} = \frac{9.81 \times 3.30\times10^{-3}\times 20 \times 0.125}{16.0\times10^{-6}\times 22.9\times10^{-6}} = \frac{0.0809}{3.66\times10^{-10}} \approx 2.21\times10^{8}.$$

In laminar range ($<10^9$). $Ra^{1/4} = (2.21\times10^8)^{1/4} \approx 121.9$, so $\overline{Nu} = 0.59 \times 121.9 \approx 71.9$ and

$$\bar h = \frac{\overline{Nu}\,k}{L} = \frac{71.9 \times 0.0265}{0.5} \approx 3.8\ \mathrm{W/(m^2\,K)}.$$

*Check.* $Ra$ dimensionless ✓; $\bar h \approx 4\,\mathrm{W/(m^2K)}$ — single digits, as expected for a small plate in air. (Smaller $\Delta T$ than Example 1 gives a smaller $h$, as it should — less buoyancy.)

**P2** Ideal-gas air: $\beta = 1/318 = 3.14\times10^{-3}\ \mathrm{K^{-1}}$. With $\Delta T = 50\ \mathrm{K}$ and $D^3 = 10^{-3}\,\mathrm{m^3}$,

$$Ra_D = \frac{9.81 \times 3.14\times10^{-3}\times 50 \times 10^{-3}}{17.7\times10^{-6}\times 25.2\times10^{-6}} = \frac{1.540\times10^{-3}}{4.46\times10^{-10}} \approx 3.45\times10^{6}.$$

In range. $Ra_D^{1/4} = (3.45\times10^6)^{1/4} \approx 43.1$, so $\overline{Nu}_D = 0.53 \times 43.1 \approx 22.8$ and

$$\bar h = \frac{\overline{Nu}_D\,k}{D} = \frac{22.8 \times 0.0276}{0.1} \approx 6.3\ \mathrm{W/(m^2\,K)}.$$

Heat lost per metre: $q' = \bar h\,(\pi D)\,\Delta T = 6.3 \times (\pi \times 0.1) \times 50 \approx 6.3 \times 0.314 \times 50 \approx 99\ \mathrm{W/m}.$

*Check.* Units: $\mathrm{W/(m^2K)} \times \mathrm{m} \times \mathrm{K} = \mathrm{W/m}$ ✓ (per-length, single prime). Sanity: a bare hot pipe leaking $\sim100\,\mathrm{W}$ per metre to still air is why steam lines get lagged — natural convection alone is weak, but over long runs it adds up.

**P3** Reynolds number with the imposed speed and the plate length:

$$Re_L = \frac{u_\infty L}{\nu} = \frac{0.4 \times 0.5}{16.0\times10^{-6}} = \frac{0.2}{16.0\times10^{-6}} = 1.25\times10^{4}.$$

From P1, $Gr = Ra/Pr = 2.21\times10^8 / 0.706 \approx 3.13\times10^{8}$. Then

$$\frac{Gr}{Re_L^2} = \frac{3.13\times10^{8}}{(1.25\times10^{4})^2} = \frac{3.13\times10^{8}}{1.56\times10^{8}} \approx 2.0.$$

Since $Gr/Re_L^2 \approx 2 \sim 1$, this is **mixed convection** — the gentle fan and buoyancy are comparable, and neither may be neglected.

*Check.* $Re_L$ and the ratio are dimensionless ✓. A faster fan would shrink the ratio (forced wins); a hotter plate would grow it (natural wins) — the ratio behaves exactly as the two mechanisms should.

</details>

## Flashback

**From Lesson 3.4 (Internal forced convection):** Water flows through a $D = 0.05\ \mathrm{m}$ pipe at mean velocity $u_m = 0.5\ \mathrm{m/s}$; properties near 330 K are $\rho = 984\,\mathrm{kg/m^3}$, $\mu = 489\times10^{-6}\,\mathrm{Pa\cdot s}$, $k = 0.650\,\mathrm{W/(m\,K)}$, $Pr = 3.15$. The wall is warmer than the water. Classify the flow and estimate $h$ with the Dittus–Boelter correlation.

<details>
<summary>Solution</summary>

Reynolds number for internal flow:

$$Re = \frac{\rho u_m D}{\mu} = \frac{984 \times 0.5 \times 0.05}{489\times10^{-6}} = \frac{24.6}{489\times10^{-6}} \approx 5.0\times10^{4}.$$

Since $Re > 2300$ (indeed $> 10^4$), the flow is **fully turbulent**, so Dittus–Boelter applies. Water is being *heated*, so $n = 0.4$:

$$Nu = 0.023\,Re^{4/5}Pr^{0.4} = 0.023 \times (5.0\times10^4)^{0.8}\times 3.15^{0.4} \approx 0.023 \times 5.78\times10^{3}\times 1.58 \approx 210.$$

Then

$$h = \frac{Nu\,k}{D} = \frac{210 \times 0.650}{0.05} \approx 2.7\times10^{3}\ \mathrm{W/(m^2\,K)}.$$

*Check.* Units $\mathrm{W/(m^2K)}$ ✓; a few thousand $\mathrm{W/(m^2K)}$ is typical for turbulent water in a pipe — a hundred-fold above the single-digit air free-convection numbers of this lesson, and again several times the natural-convection value on a submerged tube (Example 2). Forced turbulent internal flow is about the strongest ordinary convection there is.

</details>

## Connections

- **Backward:** natural convection reuses the whole dimensionless machinery of [3.2](03-02-dimensionless-groups-re-pr-nu.md) — $Nu = hL/k$ and $Pr$ are unchanged — with the buoyancy group $Gr$ standing in for the $Re$ of [3.3](03-03-external-forced-convection.md)/[3.4](03-04-internal-forced-convection.md). The $\bar h$ it produces still feeds Newton's law of cooling and the thermal-resistance networks of [1.4](01-04-thermal-resistance-networks.md) as the convective resistance $1/(\bar h A)$.
- **Forward:** [3.6 Boiling and condensation](03-06-boiling-condensation.md) is the extreme end of buoyancy-driven convection — vapour bubbles rising off a hot surface are natural convection with a phase change bolted on, and the coefficients jump by orders of magnitude past even forced flow. This lesson also closes Boss problem 3: part (c) is exactly Example 2's comparison.
- **Sideways:** the buoyant plume here is the same physics that drives weather, mantle convection, and the draft up a chimney — all governed by $Ra$. In [engineering-thermodynamics](../../engineering-thermodynamics/syllabus.md) the density-change-with-temperature that powers this flow is the coefficient of thermal expansion from the property relations; here it becomes a *force*, via the steady-flow energy balance $\dot q = \dot m c_p\,\Delta T$ that any convective stream — pumped or buoyant — must satisfy.

# Transport Phenomena · Lesson 3.5: Free (natural) convection

> ⏱ ~15 min · Module 3: Transport coefficients and boundary layers · Builds on: [3.1 Nondimensionalizing the equations of change](03-01-nondimensionalizing-equations-of-change.md), [3.4 Forced-convection transport coefficients](03-04-forced-convection-transport-coefficients.md), [`heat-transfer` 3.5 Natural convection](../../heat-transfer/lessons/03-05-natural-convection.md) · Unlocks: Module 5 (transport analogies, interphase transfer)

## Why this matters

Every transport coefficient so far had a fluid being *pushed* — a pump, a fan, a free-stream $V$ that set the Reynolds number. But a radiator warms a room with no fan; a sugar cube dissolves into still tea with no stirring; a puddle evaporates into dead-calm air. In all three, the fluid moves itself. A surface changes the density of the fluid touching it — hotter (thermal) or differently-composed (solutal) — and gravity does the rest: light fluid floats, heavy fluid sinks, and a self-made current carries heat or mass away. This is **free (natural) convection**, and it matters because it sets the *floor* — the transport you get for free, with no energy spent moving the fluid. Knowing that floor is what tells you whether the pump is worth it. And because it is buoyancy-driven, it obeys the same correspondence this course keeps hammering: **heat and mass are one story** — the thermal version and the concentration version are the same equations with the labels swapped.

## The idea

Heat a wall. The skin of fluid on it warms, expands, gets **less dense**, and floats; gravity pulls the surrounding heavy fluid down and shoves the light fluid up. The wall has manufactured its own upward current — no pump. The rising fluid drags in fresh cool fluid along the wall, which warms in turn, and a steady buoyant boundary layer climbs the surface.

One structural difference with forced convection drives everything: **there is no imposed velocity**. In forced flow a free-stream $V$ set $Re = \rho V L/\mu$. Here the fluid far away is *dead still*, so $Re$ is the wrong dial — the only velocity that exists is the one buoyancy invents. We need a group that weighs **buoyancy against the viscosity fighting it**. That group is the **Grashof number**, and it steps into exactly the slot $Re$ occupied: forced correlations read $Nu = f(Re,Pr)$, free ones read $Nu = f(Gr,Pr)$.

The velocity profile looks strange the first time (see the Picture). Over a forced flat plate, speed rose from zero at the wall to $V$ far away. In free convection it is **zero at the wall** (no-slip) *and* **zero far away** (the outside fluid isn't moving) — so it must **peak somewhere in between**. The flow is a self-contained buoyant plume hugging the wall, not a layer approaching a plateau.

Now the transport-phenomena twist. Density does not only change with *temperature*. It changes with *composition* too. Put a wall that releases (or absorbs) a species into the fluid — a dissolving solid, an evaporating film — and the near-wall fluid becomes denser or lighter because of the **concentration difference**. That drives its own buoyant flow, governed by a **solutal Grashof number** $Gr_m$, and it carries *mass* exactly the way the thermal one carries heat. Same picture, same algebra, $\Delta T \to \Delta c_A$, $Nu \to Sh$, $Pr \to Sc$.

## The formal version

**Expansion coefficient — the engine.** Buoyancy needs density to respond to the driver.

$$\beta = -\frac{1}{\rho}\left(\frac{\partial \rho}{\partial T}\right)_{p}\ (\mathrm{K^{-1}}), \qquad \beta_c = -\frac{1}{\rho}\left(\frac{\partial \rho}{\partial c_A}\right)_{p,T}.$$

*In words: $\beta$ is the fractional density drop per degree of warming; $\beta_c$ is the fractional density change per unit rise in the concentration $c_A$ (units make $\beta_c\,\Delta c_A$ dimensionless).* For an **ideal gas** $\rho = pM/(RT)$, so $\partial\rho/\partial T = -\rho/T$ and

$$\boxed{\ \beta = \frac{1}{T_f}\ }\quad(\text{ideal gas},\ T_f\ \text{in kelvin}),$$

with all properties read at the **film temperature** $T_f = (T_s + T_\infty)/2$. For liquids $\beta$ is tabulated (this shortcut is gas-only). It is often cleanest to write buoyancy straight from the density difference: $\beta\,\Delta T \approx \Delta\rho/\rho$ (thermal) and $\beta_c\,\Delta c_A \approx \Delta\rho/\rho$ (solutal).

**Grashof number.** Replace $Re$ by the buoyancy-to-viscous ratio:

$$Gr = \frac{g\,\beta\,(T_s - T_\infty)\,L^3}{\nu^2}, \qquad Gr_m = \frac{g\,\beta_c\,(c_{A,s}-c_{A,\infty})\,L^3}{\nu^2},$$

with $g = 9.81\ \mathrm{m/s^2}$, $L$ the characteristic length ($\mathrm{m}$; for a vertical plate its **height**), $\nu$ the kinematic viscosity ($\mathrm{m^2/s}$), $c_A$ a molar (or mass) concentration. *In words: $Gr$ (or $Gr_m$) measures how hard buoyancy drives the flow versus how hard viscosity resists — the buoyancy-built cousin of $Re$.* Note the $L^3$: buoyancy is a volume force, so free convection rewards size steeply.

**Rayleigh number — the single dial.** Buoyancy and the fluid's ability to *carry* the transported quantity always ride together, so bundle them:

$$Ra = Gr\,Pr = \frac{g\beta(T_s-T_\infty)L^3}{\nu\,\alpha}, \qquad Ra_m = Gr_m\,Sc = \frac{g\beta_c(c_{A,s}-c_{A,\infty})L^3}{\nu\,D_{AB}},$$

with $\alpha = k/(\rho c_p)$ the thermal diffusivity, $D_{AB}$ the mass diffusivity, $Pr=\nu/\alpha$, $Sc=\nu/D_{AB}$. *In words: $Ra$ is the one knob — it sets both how strong the buoyant flow is and how well it moves heat; $Ra_m$ does the same for mass.* The correlations then read

$$\overline{Nu} = f(Ra,\,Pr), \qquad \overline{Sh} = f(Ra_m,\,Sc),$$

and most workhorses are just $\overline{Nu} = C\,Ra^{n}$. The **laminar vertical plate** ($10^4 \le Ra \le 10^9$) uses

$$\overline{Nu} = 0.59\,Ra^{1/4}, \qquad\text{twin:}\quad \overline{Sh} = 0.59\,Ra_m^{1/4},$$

then $\bar h = \overline{Nu}\,k/L$ and $q'' = \bar h(T_s-T_\infty)$; on the mass side $\bar k_c = \overline{Sh}\,D_{AB}/L$ and $N_A = \bar k_c(c_{A,s}-c_{A,\infty})$. (For all $Ra$, the smoother Churchill–Chu form is more accurate; $0.59\,Ra^{1/4}$ is its laminar simplification and fine for estimates.) Past $Ra \sim 10^9$ the plume goes turbulent.

**Mixed convection.** Buoyancy never truly switches off, even in forced flow. The referee is $Gr/Re^2$ (a buoyancy vs. inertia ratio — see [3.1](03-01-nondimensionalizing-equations-of-change.md), where it fell out of nondimensionalizing the equation of motion):

- $Gr/Re^2 \ll 1$: forced convection wins — ignore buoyancy.
- $Gr/Re^2 \gg 1$: free convection wins — ignore the imposed flow.
- $Gr/Re^2 \sim 1$: **mixed** — both matter, and $\overline{Nu}^n \approx \overline{Nu}_{\text{forced}}^n \pm \overline{Nu}_{\text{free}}^n$ ($+$ if buoyancy aids the flow, $-$ if it opposes).

*In words: compare buoyancy ($Gr$) against inertia ($Re^2$); whichever is far larger owns the physics, and near parity you keep both.*

## Picture

![A heated vertical plate in still cool fluid, with a dashed boundary-layer edge thickening toward the top and blue arrows showing the buoyant upward rise. Beside it, the vertical-velocity profile at one height: zero at the wall, rising to an interior peak, then decaying back to zero at the boundary-layer edge — contrasted with a forced-flow profile that instead levels off at the free-stream speed. A caption gives the solutal analogue.](assets/03-05-fig1.svg)

The **grand analogy**, side by side:

| Ingredient | Thermal free convection | Solutal (mass) free convection |
|---|---|---|
| Driver | temperature difference $T_s - T_\infty$ | concentration difference $c_{A,s}-c_{A,\infty}$ |
| Density response | $\beta = -\tfrac{1}{\rho}(\partial\rho/\partial T)_p$ | $\beta_c = -\tfrac{1}{\rho}(\partial\rho/\partial c_A)_{p,T}$ |
| Buoyancy group | $Gr = g\beta\Delta T\,L^3/\nu^2$ | $Gr_m = g\beta_c\Delta c_A\,L^3/\nu^2$ |
| Fluid property | $Pr = \nu/\alpha$ | $Sc = \nu/D_{AB}$ |
| Combined dial | $Ra = Gr\,Pr$ | $Ra_m = Gr_m\,Sc$ |
| Output group | $Nu = hL/k$ | $Sh = k_c L/D_{AB}$ |
| Coefficient | $\bar h$, flux $q''=\bar h\,\Delta T$ | $\bar k_c$, flux $N_A = \bar k_c\,\Delta c_A$ |

Two columns, one physics: buoyancy over viscosity, carried by the relevant diffusivity.

## Worked examples

**Example 1 (thermal vertical plate in air — the whole recipe).** A vertical plate $L = 0.3\ \mathrm{m}$ tall sits at $T_s = 60\,^\circ\mathrm{C}$ in quiescent air at $T_\infty = 20\,^\circ\mathrm{C}$. Find $\bar h$ and $q''$.

*Step 1 — film temperature and properties.* $T_f = (60+20)/2 = 40\,^\circ\mathrm{C} = 313\ \mathrm{K}$. Air there: $\nu = 17.2\times10^{-6}\,\mathrm{m^2/s}$, $\alpha = 24.4\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.0273\,\mathrm{W/(m\,K)}$, $Pr = 0.705$. Air is an ideal gas:

$$\beta = \frac{1}{T_f} = \frac{1}{313} = 3.19\times10^{-3}\ \mathrm{K^{-1}}.$$

*Step 2 — Rayleigh number.* $\Delta T = 40\ \mathrm{K}$, $L^3 = 0.027\,\mathrm{m^3}$:

$$Ra = \frac{g\beta\,\Delta T\,L^3}{\nu\alpha} = \frac{9.81\times 3.19\times10^{-3}\times 40 \times 0.027}{17.2\times10^{-6}\times 24.4\times10^{-6}} = \frac{0.0338}{4.20\times10^{-10}} \approx 8.1\times10^{7}.$$

Inside $10^4$–$10^9$, so laminar: $\overline{Nu} = 0.59\,Ra^{1/4}$.

*Step 3 — Nusselt, then $\bar h$.* $Ra^{1/4} = (8.1\times10^7)^{1/4} \approx 94.8$, so

$$\overline{Nu} = 0.59\times 94.8 \approx 55.9, \qquad \bar h = \frac{\overline{Nu}\,k}{L} = \frac{55.9\times 0.0273}{0.3} \approx 5.1\ \mathrm{W/(m^2\,K)}.$$

*Step 4 — flux.* $q'' = \bar h\,\Delta T = 5.1\times 40 \approx 204\ \mathrm{W/m^2}$.

*Check.* $Ra$: numerator $(\mathrm{m/s^2})(\mathrm{K^{-1}})(\mathrm{K})(\mathrm{m^3}) = \mathrm{m^4/s^2}$, denominator $(\mathrm{m^2/s})^2 = \mathrm{m^4/s^2}$ — dimensionless ✓. And $\bar h \approx 5\,\mathrm{W/(m^2K)}$ is squarely in the single-digit range advertised for air free convection; a modest fan would beat it tenfold.

**Example 2 (mixed-convection check — does the fan matter?).** A gentle draft of $V = 0.5\ \mathrm{m/s}$ blows *up* the same plate (aiding buoyancy). Can we treat this as pure forced convection and drop free convection?

Use the same film-temperature air ($\nu = 17.2\times10^{-6}\,\mathrm{m^2/s}$). Reynolds number on the plate height:

$$Re_L = \frac{V L}{\nu} = \frac{0.5\times 0.3}{17.2\times10^{-6}} = \frac{0.15}{17.2\times10^{-6}} \approx 8.72\times10^{3}.$$

Grashof from Example 1's Rayleigh, $Gr = Ra/Pr = 8.1\times10^{7}/0.705 \approx 1.15\times10^{8}$. Then

$$\frac{Gr}{Re_L^2} = \frac{1.15\times10^{8}}{(8.72\times10^{3})^2} = \frac{1.15\times10^{8}}{7.60\times10^{7}} \approx 1.5.$$

Since $Gr/Re_L^2 \approx 1.5 \sim 1$, this is **mixed convection**: the draft and buoyancy are comparable, so ignoring either is wrong. You must combine them (here $\overline{Nu}^3 \approx \overline{Nu}_{\text{forced}}^3 + \overline{Nu}_{\text{free}}^3$, buoyancy aiding).

*Check.* $Re_L$ and the ratio are dimensionless ✓. Speed up the fan and $Re^2$ grows, driving the ratio down toward the forced regime; heat the plate more and $Gr$ grows, pushing toward free — the ratio moves exactly as the competing mechanisms should.

## Watch out

- **You might think you evaluate properties at the bulk temperature like some forced-convection shortcuts.** For external free convection, read *everything* at the film temperature $T_f = (T_s+T_\infty)/2$ — and don't forget $\beta$ (or $\beta_c$) is one of those properties. It is the engine; leave it out and the flow has no cause.
- **You might set $\beta = 1/T_f$ for a liquid or for the solutal case.** $\beta = 1/T_f$ is *ideal-gas thermal* only. For liquids look $\beta$ up; for the solutal group you need $\beta_c$ (or work straight from $\Delta\rho/\rho$). Using $1/T_f$ where it doesn't belong can be off by a large factor.
- **You might expect the velocity to level off far from the wall like a forced boundary layer.** It returns to **zero**, because the outside fluid is quiescent — the profile has an interior peak, not a plateau. Any picture borrowed from flat-plate forced flow will mislead you.
- **You might drop buoyancy the instant there's any imposed flow.** Only if $Gr/Re^2 \ll 1$. In slow flows — gentle ventilation, a barely-running fan — $Gr/Re^2 \sim 1$ and you are in the *mixed* regime where neglecting either mode is an error.

## One-liner

> With no pump, a surface makes its own current from the density change it causes — thermal *or* compositional; buoyancy over viscosity is $Gr$ (or $Gr_m$), $Ra = Gr\,Pr$ (or $Ra_m = Gr_m\,Sc$) is the single dial, and $Nu$ (or $Sh$) $\sim 0.59\,Ra^{1/4}$ gives a small — but never zero — coefficient.

## Problems

**P1 (🟢)** A vertical plate $L = 0.4\ \mathrm{m}$ tall is at $T_s = 50\,^\circ\mathrm{C}$ in still air at $T_\infty = 10\,^\circ\mathrm{C}$. Use air at $T_f = 30\,^\circ\mathrm{C} = 303\ \mathrm{K}$: $\nu = 16.0\times10^{-6}\,\mathrm{m^2/s}$, $\alpha = 22.9\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.0265\,\mathrm{W/(m\,K)}$, $Pr = 0.706$. Find $\beta$, then $Ra$, then $\bar h$ from $\overline{Nu} = 0.59\,Ra^{1/4}$.

**P2 (🟡)** A vertical wetted plate $L = 0.3\ \mathrm{m}$ tall lets water evaporate into still, dry air. The humid air near the surface is lighter than the dry ambient by a fractional density deficit $\Delta\rho/\rho = 0.010$ (so $\beta_c\,\Delta c_A = \Delta\rho/\rho$). Air properties: $\nu = 16.0\times10^{-6}\,\mathrm{m^2/s}$, and water-vapour-in-air diffusivity $D_{AB} = 2.6\times10^{-5}\,\mathrm{m^2/s}$. Find $Sc$, then $Gr_m$, then $Ra_m$, then $\overline{Sh} = 0.59\,Ra_m^{1/4}$, and finally the mass-transfer coefficient $\bar k_c = \overline{Sh}\,D_{AB}/L$.

**P3 (🔴)** Now a slow breeze $V = 0.2\ \mathrm{m/s}$ blows across the evaporating plate of P2 ($L = 0.3\ \mathrm{m}$, $\nu = 16.0\times10^{-6}\,\mathrm{m^2/s}$). Compute $Re_L$ and the ratio $Gr_m/Re_L^2$ (use $Gr_m$ from P2), and classify the transport as forced, free, or mixed.

<details>
<summary>Solutions</summary>

**P1** Ideal-gas air: $\beta = 1/T_f = 1/303 = 3.30\times10^{-3}\ \mathrm{K^{-1}}$. With $\Delta T = 40\ \mathrm{K}$ and $L^3 = 0.064\,\mathrm{m^3}$,

$$Ra = \frac{g\beta\,\Delta T\,L^3}{\nu\alpha} = \frac{9.81\times 3.30\times10^{-3}\times 40 \times 0.064}{16.0\times10^{-6}\times 22.9\times10^{-6}} = \frac{0.0829}{3.66\times10^{-10}} \approx 2.26\times10^{8}.$$

Laminar ($<10^9$). $Ra^{1/4} = (2.26\times10^8)^{1/4} \approx 122.6$, so $\overline{Nu} = 0.59\times 122.6 \approx 72.3$ and

$$\bar h = \frac{\overline{Nu}\,k}{L} = \frac{72.3\times 0.0265}{0.4} \approx 4.8\ \mathrm{W/(m^2\,K)}.$$

*Check.* $Ra$ dimensionless ✓; $\bar h \approx 5\,\mathrm{W/(m^2K)}$ — single digits, right where air free convection lives.

**P2** $Sc = \nu/D_{AB} = 16.0\times10^{-6}/2.6\times10^{-5} = 0.615$. With $\beta_c\,\Delta c_A = \Delta\rho/\rho = 0.010$ and $L^3 = 0.027\,\mathrm{m^3}$,

$$Gr_m = \frac{g\,(\Delta\rho/\rho)\,L^3}{\nu^2} = \frac{9.81\times 0.010\times 0.027}{(16.0\times10^{-6})^2} = \frac{2.65\times10^{-3}}{2.56\times10^{-10}} \approx 1.03\times10^{7}.$$

$$Ra_m = Gr_m\,Sc = 1.03\times10^{7}\times 0.615 \approx 6.36\times10^{6}.$$

In range $10^4$–$10^9$. $Ra_m^{1/4} = (6.36\times10^6)^{1/4} \approx 50.2$, so $\overline{Sh} = 0.59\times 50.2 \approx 29.6$ and

$$\bar k_c = \frac{\overline{Sh}\,D_{AB}}{L} = \frac{29.6\times 2.6\times10^{-5}}{0.3} \approx 2.6\times10^{-3}\ \mathrm{m/s}.$$

*Check.* $Gr_m$, $Ra_m$, $Sh$ dimensionless ✓; $\bar k_c$ has units $(\mathrm{m^2/s})/\mathrm{m} = \mathrm{m/s}$ ✓. The whole solution is Example 1 with $\Delta T \to \Delta\rho/\rho$, $\alpha \to D_{AB}$, $Nu \to Sh$, $h \to k_c$ — heat and mass, one story.

**P3** Reynolds number on the plate height:

$$Re_L = \frac{V L}{\nu} = \frac{0.2\times 0.3}{16.0\times10^{-6}} = \frac{0.06}{16.0\times10^{-6}} = 3.75\times10^{3}.$$

Using $Gr_m = 1.03\times10^{7}$ from P2,

$$\frac{Gr_m}{Re_L^2} = \frac{1.03\times10^{7}}{(3.75\times10^{3})^2} = \frac{1.03\times10^{7}}{1.41\times10^{7}} \approx 0.73.$$

Since $Gr_m/Re_L^2 \approx 0.73 \sim 1$ (order unity), this is **mixed convection** — the breeze and the buoyant plume are comparable, and buoyancy cannot be dropped despite the imposed flow. (A faster breeze would drive the ratio well below 1 and let you treat it as pure forced mass transfer.)

*Check.* Both quantities dimensionless ✓. The solutal $Gr_m$ plays exactly the role $Gr$ played in Example 2's thermal mixed-convection test — same criterion, mass instead of heat.

</details>

## Flashback

**From Lesson 3.4 (Forced-convection transport coefficients):** Air at $V = 2\ \mathrm{m/s}$ flows over a flat plate $L = 0.5\ \mathrm{m}$ long. Properties (film): $\nu = 16.0\times10^{-6}\,\mathrm{m^2/s}$, $k = 0.026\,\mathrm{W/(m\,K)}$, $Pr = 0.70$. Confirm the flow is laminar, then estimate the average heat-transfer coefficient from $\overline{Nu} = 0.664\,Re_L^{1/2}Pr^{1/3}$. (Fresh variant — a *forced*-flow companion to today's free-flow numbers.)

<details>
<summary>Solution</summary>

$$Re_L = \frac{V L}{\nu} = \frac{2\times 0.5}{16.0\times10^{-6}} = \frac{1.0}{16.0\times10^{-6}} = 6.25\times10^{4}.$$

Below the flat-plate transition $Re \approx 5\times10^{5}$, so **laminar** and the correlation applies. $Re_L^{1/2} = 250$, $Pr^{1/3} = 0.70^{1/3} \approx 0.888$:

$$\overline{Nu} = 0.664\times 250\times 0.888 \approx 147, \qquad \bar h = \frac{\overline{Nu}\,k}{L} = \frac{147\times 0.026}{0.5} \approx 7.7\ \mathrm{W/(m^2\,K)}.$$

*Check.* Dimensionless $Nu$, $\bar h$ in $\mathrm{W/(m^2K)}$ ✓. Even this modest 2 m/s breeze edges out the free-convection $\bar h \approx 5\,\mathrm{W/(m^2K)}$ of Example 1 — and the two being *comparable* here at low speed is precisely why the mixed regime ($Gr/Re^2 \sim 1$) exists. Note the structural echo: forced $\overline{Nu} = 0.664\,Re^{1/2}Pr^{1/3}$ vs. free $\overline{Nu} = 0.59\,Ra^{1/4}$ — $Re$ swapped for the buoyancy group $Ra$.

</details>

## Connections

- **Backward:** free convection reuses the dimensionless machinery of [3.1](03-01-nondimensionalizing-equations-of-change.md) and the boundary-layer coefficients of [3.4](03-04-forced-convection-transport-coefficients.md) — $Nu$, $Sh$, $Pr$, $Sc$ are unchanged — with the buoyancy group $Gr$/$Gr_m$ standing in for $Re$. The ratio $Gr/Re^2$ is exactly the buoyancy parameter that dropped out when you nondimensionalized the $\rho\mathbf{g}$ term of the equation of motion in 3.1.
- **Forward:** the $\bar h$ and $\bar k_c$ here feed **Module 5**. In [5.2 two-film theory](05-02-two-film-theory-interphase.md) they become interphase resistances $1/(\bar h A)$ and $1/(\bar k_c A)$; in [5.3 simultaneous heat and mass transfer](05-03-simultaneous-heat-mass-transfer.md), thermal and solutal buoyancy can act *together* on the same surface (an evaporating film cools *and* lightens the air at once) — a genuinely coupled double-diffusive plume.
- **Sideways:** this is the same buoyancy that drives weather, mantle convection, and the draft up a chimney — all ruled by $Ra$. The thermal case is developed in full in [`heat-transfer` 3.5](../../heat-transfer/lessons/03-05-natural-convection.md); what this course adds is the solutal twin, $Ra_m = Gr_m\,Sc$, making natural convection one more entry in the momentum–heat–mass ledger. Double-diffusive convection (salt fingers in the ocean, where heat and salt diffuse at very different rates, $Le = Sc/Pr \gg 1$) is the striking case where the *two* buoyancies fight.

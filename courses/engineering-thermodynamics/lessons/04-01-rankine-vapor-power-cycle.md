# Engineering Thermodynamics · Lesson 4.1: The Rankine vapor power cycle

> ⏱ ~15 min · Module 4: Power and Refrigeration Cycles · Builds on: [2.4 Steady-flow devices (work)](02-04-steady-flow-devices-work.md), [2.5 Steady-flow devices (no work)](02-05-steady-flow-devices-no-work.md), [3.4 Isentropic processes and efficiency](03-04-isentropic-processes-efficiency.md), [1.3 Property tables and quality](01-03-property-tables-quality.md) · Unlocks: [4.2 Gas power cycles](04-02-gas-power-cycles-otto-diesel.md), [4.3 Brayton](04-03-brayton-gas-turbine-cycle.md), and every steam power plant (fossil and nuclear)

## Why this matters

Most of the electricity you have ever used was made by boiling water. Coal plants, natural-gas combined cycles, and **every commercial nuclear reactor** do the same thing at heart: dump heat into water, run the resulting steam through a turbine, condense it, and pump it back. That loop is the **Rankine cycle**, and it is the single most important engineering application of everything you built in Modules 2 and 3. Here the abstract "steady-flow device" and "isentropic efficiency" turn into a machine that lights a city. This lesson is also the template for the reactor thermal-hydraulics work later in the engineering track — the reactor just replaces the boiler's flame.

## The idea

You already know the Carnot lesson: to make work from heat you must take heat in hot, reject some cold, and pocket the difference. Rankine is Carnot's *practical* cousin — it obeys the same bound but is built from four real, cheap devices you can actually buy.

Follow one kilogram of water around the loop:

1. **Pump** — squeeze the cold *liquid* up to boiler pressure. Compressing a liquid barely changes its volume, so this costs almost nothing.
2. **Boiler** — pour heat in at high pressure until the water boils and then superheats into hot, high-energy steam.
3. **Turbine** — let that steam expand and spin a shaft. This is where the work comes out.
4. **Condenser** — cool the spent, low-pressure steam back to liquid so the pump can grab it again.

The whole trick — the reason vapor cycles dominate power generation — is step 1. Pumping a liquid is nearly free, so almost *all* the turbine's output is yours to keep. In a gas cycle (next lessons) you must compress a bulky gas, which eats a huge fraction of the turbine work. Rankine sidesteps that by doing its compression while the fluid is a dense little liquid.

## The formal version

Every device is a **steady-flow control volume** with one inlet, one outlet, negligible kinetic/potential change, so the first law from [2.4](02-04-steady-flow-devices-work.md)/[2.5](02-05-steady-flow-devices-no-work.md) collapses to $q - w = h_{out} - h_{in}$ per unit mass. Number the states going around the loop: $1$ = condenser exit (sat. liquid), $2$ = pump exit, $3$ = boiler exit (the hot steam), $4$ = turbine exit. All quantities are **per kilogram**: $h$ in kJ/kg, $s$ in kJ/(kg·K), $v$ in m³/kg, $w$ and $q$ in kJ/kg.

**Pump (1→2), adiabatic, work in.** No heat, so $w_p = h_2 - h_1$. Because a liquid is nearly incompressible ($v \approx v_1$ = const), the [2.4](02-04-steady-flow-devices-work.md) shaft-work integral $w = \int v\,dp$ gives the shortcut

$$w_p = v_1\,(p_2 - p_1), \qquad h_2 = h_1 + w_p.$$

*In words: pumping a liquid costs (its volume) × (the pressure rise) — and since $v_1$ is tiny, so is the bill.*

**Boiler (2→3), heat in, no work.** $\;q_{in} = h_3 - h_2.$ *In words: the heat you add equals the enthalpy the steam gains.*

**Turbine (3→4), adiabatic, work out.** $\;w_t = h_3 - h_4.$ *In words: the shaft work equals the enthalpy the steam gives up as it expands.*

**Condenser (4→1), heat out, no work.** $\;q_{out} = h_4 - h_1.$ *In words: the heat you throw away equals the enthalpy dumped bringing steam back to liquid.*

**Ideal Rankine** = the pump and turbine are **isentropic** (reversible + adiabatic), so $s_2 = s_1$ and $s_4 = s_3$. That single assumption is what lets you *find* states 2 and 4: fix the entropy, then read the tables from [1.3](01-03-property-tables-quality.md). The boiler and condenser are idealized as constant-pressure.

**Net work and thermal efficiency.** Net work is turbine out minus pump in, and efficiency is what you get over what you paid:

$$w_{net} = w_t - w_p = (h_3 - h_4) - (h_2 - h_1), \qquad \boxed{\;\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}\;}$$

*In words: efficiency is net work per unit of heat you had to buy.* Energy must balance over the closed loop, so equivalently $w_{net} = q_{in} - q_{out}$ and $\eta_{th} = 1 - q_{out}/q_{in}$ — the same "1 − reject/absorb" form as the [3.1](03-01-second-law-carnot-limit.md) Carnot engine, just with real enthalpies.

The **back-work ratio** $\mathrm{bwr} = w_p / w_t$ measures how much of the turbine's output the pump steals back. For Rankine it is a fraction of a percent — the headline advantage of a vapor cycle.

Two intro-level upgrades, both visible on the T–s diagram: **superheat** (extend the boiler further right, raising the average temperature at which heat enters, which lifts $\eta_{th}$ and drags the turbine exit toward drier steam) and **reheat** (send partly-expanded steam back through the boiler and finish expanding it, keeping the turbine-exit quality high so droplets don't erode the blades). More on both in later lessons.

## Picture

![Left: ideal Rankine cycle drawn on a temperature–entropy diagram with the vapor dome, showing pump 1 to 2, boiler 2 to 3 across the dome into superheat, isentropic turbine 3 to 4 straight down, and condenser 4 to 1. Right: the four devices wired into a plant loop with q_in into the boiler, w_t out of the turbine, q_out out of the condenser, and w_p into the pump.](assets/04-01-fig1.svg)

Trace it: state 1 sits on the saturated-liquid line at low pressure. The pump nudges it up to 2 (so close it is nearly the same point — that is the "pumping is cheap" story in one picture). The boiler walks 2→3 up and across the dome and out into superheat. The turbine drops 3→4 straight down (isentropic = vertical) into the wet region. The condenser slides 4→1 flat across the dome. The area enclosed by the loop is $w_{net}$.

## Worked examples

**Example 1 — Boss Problem 4: a full ideal Rankine plant.** Steam leaves the boiler at $8\ \mathrm{MPa}$, $480\,^\circ\mathrm{C}$ and the condenser holds $10\ \mathrm{kPa}$. Find every state point and the thermal efficiency.

*State 1 (condenser exit, sat. liquid @ 10 kPa).* From the saturation table, $h_1 = h_f = 191.8\ \mathrm{kJ/kg}$, $v_1 = v_f = 0.00101\ \mathrm{m^3/kg}$.

*State 2 (pump exit).* The pump raises pressure from 10 kPa to 8000 kPa:

$$w_p = v_1(p_2 - p_1) = 0.00101\,(8000 - 10) = 8.07\ \mathrm{kJ/kg}, \qquad h_2 = 191.8 + 8.07 = 199.9\ \mathrm{kJ/kg}.$$

*State 3 (boiler exit).* Superheated water at 8 MPa, 480 °C: $h_3 = 3347.5\ \mathrm{kJ/kg}$, $s_3 = 6.6586\ \mathrm{kJ/(kg\cdot K)}$.

*State 4 (turbine exit).* Isentropic turbine: $s_4 = s_3 = 6.6586$. At 10 kPa, $s_f = 0.6493$, $s_{fg} = 7.5009$, so the exit is **wet** with quality

$$x_4 = \frac{s_4 - s_f}{s_{fg}} = \frac{6.6586 - 0.6493}{7.5009} = 0.801.$$

Then, with $h_f = 191.8$, $h_{fg} = 2392.8$ at 10 kPa,

$$h_4 = h_f + x_4\,h_{fg} = 191.8 + 0.801\,(2392.8) = 2108.8\ \mathrm{kJ/kg}.$$

*Tally the loop.*

$$w_t = h_3 - h_4 = 3347.5 - 2108.8 = 1238.7\ \mathrm{kJ/kg}, \qquad w_p = 8.07\ \mathrm{kJ/kg},$$
$$w_{net} = 1238.7 - 8.07 = 1230.7\ \mathrm{kJ/kg}, \qquad q_{in} = h_3 - h_2 = 3347.5 - 199.9 = 3147.6\ \mathrm{kJ/kg},$$
$$\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{1230.7}{3147.6} = 0.391 \;\approx\; 39\%.$$

*Check.* Energy balance closes: $q_{out} = h_4 - h_1 = 2108.8 - 191.8 = 1917.0$, and $q_{in} - q_{out} = 3147.6 - 1917.0 = 1230.7 = w_{net}$ ✓. And $x_4 = 0.80$ is a physically sane turbine exit — mostly vapor, a little moisture. A real 8-MPa plant lands near 39–42%, so we are in the right country.

**Example 2 — is pumping really that cheap?** Redo the efficiency but *ignore the pump work entirely*, pretending $h_2 \approx h_1 = 191.8$. Then $q_{in} = h_3 - h_1 = 3347.5 - 191.8 = 3155.7\ \mathrm{kJ/kg}$ and $w_{net} \approx w_t = 1238.7$, giving

$$\eta_{th} \approx \frac{1238.7}{3155.7} = 0.393 \;\approx\; 39\%.$$

The efficiency barely moved — from 39.1% to 39.3%, about two-tenths of a percentage point. The reason is the **back-work ratio**:

$$\mathrm{bwr} = \frac{w_p}{w_t} = \frac{8.07}{1238.7} = 0.0065 = 0.65\%.$$

The pump swallows less than 1% of the turbine's output. Contrast this with a gas turbine (Brayton, [4.3](04-03-brayton-gas-turbine-cycle.md)), where the compressor can eat 40–80% of the turbine work — a back-work ratio a *hundred times* larger — because you are compressing a fat, springy gas instead of a nearly-incompressible liquid. That contrast is the whole reason steam cycles dominate base-load power. (In careful bookkeeping we still keep $w_p$; it is small, not zero.)

## Watch out

- **You might think the pump is negligible, so drop it.** For *efficiency* estimates, fine — Example 2 shows it barely matters. But conceptually the tiny pump work is the *entire point* of the cycle: it is what makes the vapor cycle beat the gas cycle. Small number, huge significance. Keep it in the exact accounting.
- **You might read the turbine exit off the temperature.** State 4 is inside the dome, where temperature and pressure are locked together (both fixed by "10 kPa"). What you *don't* know yet is the **quality** — and quality is what sets $h_4$. Get $x_4$ from the entropy ($s_4 = s_3$), never from the temperature.
- **You might expect steam to leave the turbine as dry vapor.** In a plain Rankine cycle it usually comes out **wet** ($x_4 < 1$). That is a problem: liquid droplets pit the last turbine blades. Superheat and reheat exist largely to push $x_4$ back up toward 1, not just to chase efficiency.

## One-liner

> Rankine is Carnot you can build: boil water hot, expand it through a turbine for work, condense it, and pump the liquid back for almost nothing — so nearly all the turbine work is net, and $\eta_{th} = 1 - q_{out}/q_{in} \approx 40\%$.

## Problems

**P1 (🟢)** An ideal Rankine cycle has a condenser at 10 kPa and a boiler delivering steam at $h_3 = 3347.5\ \mathrm{kJ/kg}$. Given a turbine-exit enthalpy $h_4 = 2108.8\ \mathrm{kJ/kg}$ and pump-exit enthalpy $h_2 = 199.9\ \mathrm{kJ/kg}$ (with $h_1 = 191.8$), compute $q_{in}$, $q_{out}$, $w_{net}$, and verify $\eta_{th}$ two ways: from $w_{net}/q_{in}$ and from $1 - q_{out}/q_{in}$.

**P2 (🟡)** For the same cycle, compute the pump work directly from $w_p = v_1(p_2 - p_1)$ with the condenser at 10 kPa and boiler at 8 MPa ($v_1 = 0.00101\ \mathrm{m^3/kg}$). Then find the back-work ratio $w_p/w_t$ and state, in one sentence, why it would be far larger in a gas turbine.

**P3 (🔴)** Someone proposes cooling the condenser harder, dropping it from 10 kPa to a lower pressure. Using $\eta_{th} = 1 - q_{out}/q_{in}$ and the T–s picture, argue qualitatively whether efficiency rises or falls, and name the practical penalty that shows up at the turbine exit.

<details>
<summary>Solutions</summary>

**P1** Straight bookkeeping, all per kg:

$$q_{in} = h_3 - h_2 = 3347.5 - 199.9 = 3147.6\ \mathrm{kJ/kg},$$
$$q_{out} = h_4 - h_1 = 2108.8 - 191.8 = 1917.0\ \mathrm{kJ/kg},$$
$$w_{net} = q_{in} - q_{out} = 3147.6 - 1917.0 = 1230.7\ \mathrm{kJ/kg}.$$

Efficiency two ways:

$$\eta_{th} = \frac{w_{net}}{q_{in}} = \frac{1230.7}{3147.6} = 0.391, \qquad \eta_{th} = 1 - \frac{q_{out}}{q_{in}} = 1 - \frac{1917.0}{3147.6} = 1 - 0.609 = 0.391.\;✓$$

*Check.* Both routes agree at 0.391 because $w_{net} = q_{in} - q_{out}$ is just the closed-loop energy balance rearranged. Units cancel to a pure fraction, as an efficiency must.

**P2** Pump work:

$$w_p = v_1(p_2 - p_1) = 0.00101\,(8000 - 10) = 0.00101 \times 7990 = 8.07\ \mathrm{kJ/kg}.$$

Turbine work $w_t = h_3 - h_4 = 3347.5 - 2108.8 = 1238.7\ \mathrm{kJ/kg}$, so

$$\mathrm{bwr} = \frac{w_p}{w_t} = \frac{8.07}{1238.7} = 0.0065 \approx 0.65\%.$$

In a gas turbine the "pump" is a **compressor** working on a gas, whose specific volume is thousands of times larger than a liquid's; since compression work $\int v\,dp$ scales with $v$, that back-work ratio balloons to 40–80%.

*Check.* Units: $\mathrm{m^3/kg} \times \mathrm{kPa} = \mathrm{m^3/kg}\times \mathrm{kN/m^2} = \mathrm{kN\cdot m/kg} = \mathrm{kJ/kg}$ ✓. 8 kJ/kg against ~1240 kJ/kg is well under 1%, matching Example 2.

**P3** Lowering the condenser pressure lowers the temperature at which heat is rejected, so the flat 4→1 line on the T–s diagram slides *downward*. That drops the average rejection temperature, shrinks $q_{out}$ relative to $q_{in}$, and by $\eta_{th} = 1 - q_{out}/q_{in}$ raises efficiency — this is why real condensers run at a hard vacuum. The penalty: dropping into the dome pushes the isentropic turbine exit to a **lower quality** $x_4$ (more moisture), and the extra liquid droplets erode the last-stage turbine blades. That moisture limit is a big reason reheat exists.

*Check.* Sign sense: colder rejection = closer to the Carnot ideal $\eta = 1 - T_L/T_H$, which also improves as $T_L$ falls — consistent. ✓

</details>

## Flashback

**From Lesson 3.4 (Isentropic processes and efficiency):** Steam enters a turbine at $4\ \mathrm{MPa}$, $400\,^\circ\mathrm{C}$ ($h_1 = 3213.6\ \mathrm{kJ/kg}$, $s_1 = 6.7714\ \mathrm{kJ/(kg\cdot K)}$) and exhausts to $50\ \mathrm{kPa}$. Find the *isentropic* exit state and the ideal work, then the **actual** exit enthalpy if the turbine's isentropic efficiency is $\eta_T = 0.85$. (At 50 kPa: $h_f = 340.5$, $h_{fg} = 2304.7$, $s_f = 1.0912$, $s_{fg} = 6.5019$.)

<details>
<summary>Solution</summary>

Isentropic exit: $s_{2s} = s_1 = 6.7714$. At 50 kPa this is wet, quality

$$x_{2s} = \frac{s_{2s} - s_f}{s_{fg}} = \frac{6.7714 - 1.0912}{6.5019} = 0.8736,$$
$$h_{2s} = h_f + x_{2s}\,h_{fg} = 340.5 + 0.8736\,(2304.7) = 2353.9\ \mathrm{kJ/kg}.$$

Ideal (isentropic) work:

$$w_s = h_1 - h_{2s} = 3213.6 - 2353.9 = 859.7\ \mathrm{kJ/kg}.$$

The real turbine delivers only 85% of that (definition of isentropic efficiency from [3.4](03-04-isentropic-processes-efficiency.md), $\eta_T = w_{actual}/w_s$ for a turbine):

$$w_{actual} = \eta_T\,w_s = 0.85 \times 859.7 = 730.7\ \mathrm{kJ/kg}, \qquad h_{2a} = h_1 - w_{actual} = 3213.6 - 730.7 = 2482.9\ \mathrm{kJ/kg}.$$

*Check.* The actual exit enthalpy (2482.9) sits *above* the isentropic one (2353.9): the real turbine extracts less work, so more energy stays in the steam, and irreversibility bumps its entropy up. That is exactly the "actual state lies to the right of the isentropic point" picture from 3.4. ✓

</details>

## Connections

- **Backward:** every device here is a [2.4](02-04-steady-flow-devices-work.md)/[2.5](02-05-steady-flow-devices-no-work.md) steady-flow control volume with $q - w = \Delta h$; the isentropic pump and turbine are [3.4](03-04-isentropic-processes-efficiency.md)'s ideal limit; states 1 and 4 are read with the quality machinery of [1.3](01-03-property-tables-quality.md); and $\eta_{th} = 1 - q_{out}/q_{in}$ is the [3.1](03-01-second-law-carnot-limit.md) heat-engine efficiency dressed in real enthalpies.
- **Forward:** [4.2](04-02-gas-power-cycles-otto-diesel.md) and [4.3](04-03-brayton-gas-turbine-cycle.md) run the same first-law loop with a *gas* working fluid — where the fat back-work ratio we contrasted here becomes the defining headache. The condenser/rejection logic flips in [4.4 refrigeration and heat pumps](04-04-refrigeration-heat-pump-cycles.md), which is Rankine run backwards.
- **Sideways (physics):** the entropy we shuffled as pure bookkeeping ($s_4 = s_3$, $x_4$ from an entropy balance) gets its microscopic meaning — disorder, counting of states — in [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md). The Carnot bound this cycle chases is that course's second law; here it is a design target, there it is a theorem.
- **Sideways (engineering):** swap the boiler's flame for a reactor core and this *is* the secondary loop of a nuclear power plant — the reactor thermal-hydraulics course later in the track builds directly on this state-point accounting.

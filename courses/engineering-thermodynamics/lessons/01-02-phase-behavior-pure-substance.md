# Engineering Thermodynamics · Lesson 1.2: Phase behavior of a pure substance

> ⏱ ~15 min · Module 1: Properties and the pure substance · Builds on: [1.1 System, control volume, and state](01-01-system-vs-control-volume-state.md) · Unlocks: [1.3 Property tables and quality](01-03-property-tables-quality.md)

## Why this matters

Nearly every power plant on Earth runs on the same trick: boil water into steam, let the steam push a turbine, condense it back to water, repeat. To size that turbine or that boiler you have to know, at every point, *what phase the water is in and exactly how much volume each kilogram occupies* — because a kilogram of liquid water and a kilogram of its steam differ in volume by nearly a thousandfold. This lesson is the map of how a pure substance moves between liquid and vapor as you heat it, and the diagrams engineers use to navigate that map. Get it, and next lesson's steam tables stop being a wall of numbers and become coordinates on a picture you already understand.

## The idea

Put a kilogram of water in a cylinder with a weighted, freely-sliding piston, so the pressure on the water is held **constant** no matter how the volume changes. Now heat it, slowly, and watch.

At first the water just gets *hotter*: temperature climbs, volume barely budges (liquids are nearly incompressible). This is **compressed** (or *subcooled*) liquid — liquid that is cooler than its boiling point at this pressure.

Then you hit the boiling point. Something strange happens: you keep pouring heat in, but the temperature **stops rising**. Every joule now goes into *tearing molecules apart* from the liquid huddle into free-flying vapor, not into speeding them up. The first bubble marks the **saturated liquid** state, called **f**. Past it you have a churning mix of liquid and vapor — a **saturated mixture** — and as heating continues the piston rises dramatically as liquid turns to vapor at *fixed temperature*. When the last drop vaporizes you reach **saturated vapor**, called **g**. The heat you added between f and g, all at constant temperature, is the **latent heat**: the energy price of the phase change itself.

Only now, with all the water as vapor, does heating resume raising the temperature — you're making **superheated vapor**, vapor hotter than its boiling point. So the whole journey is: *warm the liquid → boil at constant temperature → warm the vapor*. Two "sensible" heating stages that raise temperature, sandwiching one "latent" stage that doesn't.

## The formal version

A **pure substance** is one with a fixed, uniform chemical composition — water, nitrogen, refrigerant R-134a. It can appear as solid, liquid, or vapor and still be "pure" as long as the composition doesn't change. We'll live almost entirely in the liquid–vapor world.

**Saturation.** At a given pressure, a liquid boils at one specific temperature, the **saturation temperature** $T_{sat}$. Equivalently, at a given temperature it boils at one specific pressure, the **saturation pressure** $p_{sat}$. These are two views of a single curve $p_{sat}(T)$:

$$T_{sat} = T_{sat}(p), \qquad p_{sat} = p_{sat}(T).$$

*In words: boiling temperature and boiling pressure are locked together — fix one and the other is determined.* For water, $p_{sat} = 101.3\ \mathrm{kPa}$ pairs with $T_{sat} = 100\,^\circ\mathrm{C}$; drop the pressure and the boiling temperature drops with it (that's the mountain-stove problem below).

Along the boiling plateau we name the two endpoints by the **specific volume** $v$ (volume per unit mass, $\mathrm{m^3/kg}$ — introduced in [1.1](01-01-system-vs-control-volume-state.md) as the intensive stand-in for volume):

- **$v_f$** — specific volume of **saturated liquid** (state f): the last all-liquid point, the first bubble.
- **$v_g$** — specific volume of **saturated vapor** (state g): the first all-vapor point, the last drop gone.

For water at $200\ \mathrm{kPa}$, $v_f = 0.001061\ \mathrm{m^3/kg}$ and $v_g = 0.8858\ \mathrm{m^3/kg}$ — a factor of **835**. That enormous gap is the vapor dome's width.

**The vapor dome.** Plot every $(v,T)$ state and the saturation data traces a dome (see the Picture):

- The **saturated-liquid line** (all the f points, one per pressure) forms the **left** edge.
- The **saturated-vapor line** (all the g points) forms the **right** edge.
- Under the dome lies the **two-phase region**: liquid and vapor coexisting, the boiling plateau.
- **Left of the dome**: compressed liquid. **Right of the dome**: superheated vapor.

*In words: the dome is the fence around "part-liquid, part-vapor"; outside it you have one pure phase, inside it you have a mixture.*

**Critical point.** As you raise the pressure, f and g slide toward each other — the boiling plateau shortens, because liquid and vapor grow more alike. At the **critical point** they merge and the dome closes. For water:

$$p_{cr} = 22.06\ \mathrm{MPa}, \qquad T_{cr} = 373.95\,^\circ\mathrm{C}, \qquad v_{cr} = 0.003106\ \mathrm{m^3/kg}.$$

*In words: above the critical pressure there is no distinct boiling — liquid becomes vapor continuously, with no plateau, no visible meniscus, no latent heat.* The substance there is called a **supercritical fluid**; a modern high-pressure boiler operates above this point on purpose, and the working fluid never "boils" in the everyday sense.

**Triple line.** At one particular pressure–temperature pair (for water, $0.6117\ \mathrm{kPa}$ and $0.01\,^\circ\mathrm{C}$) solid, liquid, and vapor all coexist. On a $p$–$T$ diagram this is a single **triple point**; but because the three phases have very different specific volumes, on a $T$–$v$ or $p$–$v$ diagram it spreads out into a **triple line** — one horizontal line at the bottom, the floor of the vapor dome.

## Picture

![T–v diagram showing the vapor dome, saturated-liquid line on the left, saturated-vapor line on the right, the critical point at the top, and a constant-pressure heating path 1 to f to g to 5 rising steeply through compressed liquid, flat across the two-phase region, then rising again into superheated vapor](assets/01-02-fig1.svg)

Trace the coral line left to right — that is one kilogram of water heated at constant pressure. Steep rise **1 → f** (warming the liquid; $v$ barely grows), flat plateau **f → g** (boiling at constant $T_{sat}$; $v$ balloons by a factor of hundreds), steep rise **g → 5** (superheating the vapor). Raise the pressure and the whole plateau lifts *and* shortens; push past $22.06\ \mathrm{MPa}$ and the path sails over the critical point with no plateau at all. The $p$–$v$ diagram looks the same in spirit — same dome, same critical point — but there the constant-pressure path is simply a horizontal line, while constant-temperature lines do the plateau instead.

## Worked examples

**Example 1 (place three states at 200 kPa).** Water sits at $p = 200\ \mathrm{kPa}$, where $T_{sat} = 120.2\,^\circ\mathrm{C}$. Classify it at three temperatures.

The rule is a single comparison — compare the actual temperature to $T_{sat}$ *at that pressure*:

- **$T = 90\,^\circ\mathrm{C}$:** $90 < 120.2$, so the water is *cooler* than its boiling point. It hasn't started to boil → **compressed (subcooled) liquid**, left of the dome.
- **$T = 120.2\,^\circ\mathrm{C}$:** $T = T_{sat}$ exactly. It sits *on the boiling plateau* → **saturated** — somewhere between f and g (could be saturated liquid, saturated vapor, or any mixture; temperature alone can't say where, which is exactly why we'll need *quality* in [1.3](01-03-property-tables-quality.md)).
- **$T = 300\,^\circ\mathrm{C}$:** $300 > 120.2$, hotter than boiling → **superheated vapor**, right of the dome.

*Sanity check.* At fixed pressure the states march left-to-right on the $T$–$v$ diagram exactly as $T$ increases: $90\,^\circ\mathrm{C}$ (compressed) → $120.2\,^\circ\mathrm{C}$ (under the dome) → $300\,^\circ\mathrm{C}$ (superheated). The ordering is consistent. ✓

**Example 2 (trace and account for the 200-kPa heating path).** Follow one kilogram of water heated from $90\,^\circ\mathrm{C}$ to $300\,^\circ\mathrm{C}$ at a constant $200\ \mathrm{kPa}$, naming each segment and its volume change. Use $v_f = 0.001061$, $v_g = 0.8858$, and superheated $v \approx 1.3162\ \mathrm{m^3/kg}$ at $200\ \mathrm{kPa}$, $300\,^\circ\mathrm{C}$.

**Segment 1 → f (sensible, liquid).** From $90\,^\circ\mathrm{C}$ up to $T_{sat} = 120.2\,^\circ\mathrm{C}$. Temperature rises; the added heat raises the liquid's thermal energy. Volume creeps from roughly $0.00104$ up to $v_f = 0.001061\ \mathrm{m^3/kg}$ — a change of about $2\times10^{-5}\ \mathrm{m^3/kg}$, essentially nothing. *Sensible* heating: you feel it as temperature.

**Segment f → g (latent, boiling).** Temperature **pinned** at $120.2\,^\circ\mathrm{C}$ the entire way. Heat goes into vaporization, not temperature. Volume explodes:

$$\Delta v = v_g - v_f = 0.8858 - 0.001061 = 0.8847\ \mathrm{m^3/kg},$$

an **835-fold** jump over segment 1's specific volume. This is the flat plateau, and the heat absorbed here is the latent heat (the enthalpy of vaporization $h_{fg}$, which [1.3](01-03-property-tables-quality.md) reads off the table).

**Segment g → 5 (sensible, vapor).** From $120.2\,^\circ\mathrm{C}$ up to $300\,^\circ\mathrm{C}$. Now all vapor; temperature climbs again. Volume grows further from $v_g = 0.8858$ to $1.3162\ \mathrm{m^3/kg}$, a change of $0.43\ \mathrm{m^3/kg}$ — large, but still smaller than the boiling jump.

*Sanity check.* Two sensible stages (temperature moves, $\Delta v$ modest) bracket one latent stage (temperature frozen, $\Delta v$ huge). The three volume changes rank $0.00002 \ll 0.43 < 0.88\ \mathrm{m^3/kg}$: liquid heating negligible, vapor heating moderate, boiling dominant — matching the coral path's shape (barely-there rise, then a long flat sprint, then a rise). ✓

## Watch out

- **You might think temperature always rises when you add heat.** Not during a phase change. Across f → g you pour in the latent heat and the thermometer doesn't move — energy is going into the *configuration* of the molecules (liquid vs. vapor), not their speed. A pot of boiling water stays at $100\,^\circ\mathrm{C}$ whether the burner is low or roaring; the roar just boils it away faster.
- **You might think "saturated" means fully vaporized or "soggy."** It just means *on the dome, coexisting phases in play*. Saturated liquid (f) is $100\%$ liquid but on the verge of boiling; saturated vapor (g) is $100\%$ vapor but on the verge of condensing. Both are "saturated." Which point you're at within the plateau is the job of **quality** $x$, next lesson.
- **You might think you can fix the state from temperature and pressure inside the dome.** You can't. On the plateau $T$ and $p$ are locked together ($T_{sat}\!\leftrightarrow\!p_{sat}$), so they carry only *one* independent piece of information, not two — every point from f to g shares the same $T$ *and* the same $p$. You need a second, *independent* property (like $v$ or quality) to say where on the plateau you are. Outside the dome, $T$ and $p$ are independent and do fix the state.

## One-liner

> Heat a pure substance at constant pressure and it warms as liquid, boils at a fixed $T_{sat}$ from saturated-liquid (f) to saturated-vapor (g) while its volume balloons, then warms as vapor — a journey mapped by the vapor dome, whose peak is the critical point beyond which boiling vanishes.

## Problems

**P1 (🟢)** Water is held at $200\ \mathrm{kPa}$, where $T_{sat} = 120.2\,^\circ\mathrm{C}$. Classify each as compressed liquid, saturated mixture, or superheated vapor: (a) $T = 150\,^\circ\mathrm{C}$; (b) $T = 120.2\,^\circ\mathrm{C}$ with specific volume $v = 0.45\ \mathrm{m^3/kg}$; (c) $T = 25\,^\circ\mathrm{C}$.

**P2 (🟡)** A hiker on a high peak finds water boiling at $93\,^\circ\mathrm{C}$ instead of $100\,^\circ\mathrm{C}$. Using the $T_{sat}\!\leftrightarrow\!p_{sat}$ relationship, explain qualitatively whether the local air pressure is above or below $101.3\ \mathrm{kPa}$, and why food takes longer to cook. Then, on a $T$–$v$ diagram, describe how the constant-pressure boiling plateau at the peak compares to the sea-level one (higher/lower, longer/shorter).

**P3 (🔴)** A rigid sealed tank (constant volume, *not* constant pressure) contains water at $200\ \mathrm{kPa}$ whose overall specific volume is exactly $v = v_g = 0.8858\ \mathrm{m^3/kg}$ — saturated vapor. You now *cool* it slowly. Trace what happens on the $T$–$v$ diagram and state which phase(s) appear. (Hint: on a $T$–$v$ diagram, constant volume is a vertical line. Which dome edge does a downward vertical move from g hug?)

<details>
<summary>Solutions</summary>

**P1** Compare each temperature to $T_{sat} = 120.2\,^\circ\mathrm{C}$ at $200\ \mathrm{kPa}$.

(a) $150 > 120.2\,^\circ\mathrm{C}$ → **superheated vapor**.

(b) $T = T_{sat}$, so it's on the plateau — but check $v$ lands *between* $v_f$ and $v_g$ to confirm it's a genuine mixture: $0.001061 < 0.45 < 0.8858$. Yes → **saturated mixture** (roughly half vapor by the look of $v$, which quality will pin down in [1.3](01-03-property-tables-quality.md)).

(c) $25 < 120.2\,^\circ\mathrm{C}$ → **compressed (subcooled) liquid**.

*Check.* The three sit in the correct left-to-right order on the dome: (c) compressed, (b) under the dome, (a) superheated. ✓

**P2** Boiling is the saturation condition, so $93\,^\circ\mathrm{C}$ being the boiling point means the *local* $p_{sat}$ equals the local air pressure. Since water boils *cooler* than its sea-level $100\,^\circ\mathrm{C}$, and lower $T_{sat}$ pairs with lower $p_{sat}$ along the single $p_{sat}(T)$ curve, the local air pressure must be **below $101.3\ \mathrm{kPa}$** — exactly what you expect at altitude, where there's less atmosphere pressing down. Cooking is slower because the water caps out at $93\,^\circ\mathrm{C}$: chemical reactions in food run slower at lower temperature, and no amount of extra heat pushes a boiling pot past its $T_{sat}$ (it just boils away faster). On the $T$–$v$ diagram the peak's plateau sits at a **lower** temperature (lower $T_{sat}$) and, being at lower pressure, is **longer** — lower-pressure plateaus stretch wider because $v_g$ grows as pressure falls while $v_f$ barely moves.

*Check.* Direction is consistent with the mountain intuition (thinner air → lower pressure → cooler boiling → slow cooking), and with the dome shape (plateaus lengthen toward the bottom, shrink to zero at the critical point on top). ✓

**P3** A rigid tank fixes $v$, so the process is a **vertical downward line** on the $T$–$v$ diagram, starting right on the saturated-vapor line at g. Here's the key geometry: as temperature falls, the saturated-vapor value $v_g$ gets *larger*, so the g-line bends to the **right** below g. Our path holds $v = 0.8858$ fixed while the g-line slides rightward — so the path ends up to the **left of the g-line, i.e. inside the dome, in the two-phase region.** The vapor begins to **condense**: droplets of liquid form and a liquid–vapor mixture develops, getting wetter as cooling continues. So the phases present: initially saturated vapor, then a **liquid + vapor mixture** with the liquid fraction growing.

*Check.* Physically sensible: cooling a saturated vapor at fixed volume is condensation (dew forming), the constant-volume analogue of the constant-pressure boiling in the lesson — same dome, different straight-line path across it. Constant $v$ is vertical, constant $p$ is the coral path; both cross the dome, one by condensing, one by boiling. ✓

</details>

## Connections

- **Backward:** the specific volume $v$ and the intensive/extensive distinction come straight from [1.1](01-01-system-vs-control-volume-state.md); this lesson gives them a geography. The claim that two independent intensive properties fix a state (the state postulate) is exactly why $T$ and $p$ *fail* to fix a state inside the dome — they aren't independent there.
- **Forward:** [1.3 Property tables and quality](01-03-property-tables-quality.md) turns the dome into arithmetic — reading $v_f$, $v_g$, and the plateau's mixtures off steam tables via the quality $x$. Every energy balance in Modules 2–4 (turbines, boilers, the Rankine cycle in [4.1](04-01-rankine-vapor-power-cycle.md)) starts by fixing states on exactly these diagrams.
- **Sideways (statistical origin):** *why* does latent heat exist — why does breaking the liquid's molecular huddle cost energy at constant temperature? That's the microscopic story of phase transitions, which this engineering course treats as a tabulated number but [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md) and [`stat-mech`](../../stat-mech/syllabus.md) derive from intermolecular forces and entropy. Here, heat is just a number crossing a boundary; there, it's molecules rearranging.

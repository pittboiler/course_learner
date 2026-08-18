# Materials Science & Engineering · Lesson 4.4: Failure — fracture, fatigue & creep

> ⏱ ~15 min · Module 4: Mechanical Behavior · Builds on: [4.1 Elastic behavior](04-01-elastic-behavior-stress-strain.md), [4.2 Plastic deformation & Schmid's law](04-02-plastic-deformation-schmid.md), [4.3 Strengthening mechanisms](04-03-strengthening-mechanisms.md) · Unlocks: 5.3 (materials selection); nuclear-materials embrittlement, DBTT shift, and irradiation creep

## Why this matters

The previous three lessons made a material *stronger* — raise the yield stress, resist the first slip. But real parts rarely fail by yielding gently. They **break**: a bridge cracks in cold weather, an aircraft wing snaps after a million uneventful flights, a turbine blade stretches and ruptures after years at red heat. These are three distinct clocks — one set by a *flaw*, one by a *cycle count*, one by *time-at-temperature* — and mixing them up is how engineers get people killed. This is also where reactor materials live: fast neutrons make steels brittle (a shifting ductile-to-brittle transition) and make hot cladding creep, both of which start right here.

## The idea

Three ways to fail, three different physics:

**Fracture** is a single overload event. A **ductile** material warns you first: it necks down, draws out, and tears with a fibrous, cup-and-cone face — soaking up a lot of energy on the way. A **brittle** material gives no warning: almost no plastic flow, a fast-running crack, a flat shiny (cleavage) face. The same steel can do *either* depending on temperature — warm it and it draws out, chill it and it shatters. That temperature switch, the **ductile-to-brittle transition (DBTT)**, is why the Liberty ships cracked in half in cold North Atlantic water.

The villain in brittle fracture is the **flaw**. A material is never as strong as its bonds because every scratch, pore, or inclusion acts as a lever that **concentrates stress** at its tip — the sharper the flaw, the bigger the multiplier. Fracture mechanics turns this into an accounting rule: a crack runs when the stress *concentrated at its tip* reaches a material limit called **fracture toughness**.

**Fatigue** is death by a thousand cuts. Load a part *below* its yield stress, but do it over and over, and a tiny crack nucleates at a surface flaw and grows a sliver per cycle until the remaining section can't hold — then sudden fracture. Most metal parts that fail in service fail this way. The design tool is the **S–N curve**: stress amplitude vs. number of cycles to failure. Some materials (steels) have an **endurance limit** — a stress you can cycle forever below; others (aluminum) don't, and every part has a finite life.

**Creep** is slow surrender to heat. Hold a *constant* load on a hot metal (above roughly 40% of its melting temperature in kelvin) and it keeps stretching with time even though the stress never changes. Atoms and dislocations have enough thermal energy to sneak around obstacles, so the material flows like extremely stiff putty. This sets the life of anything hot and stressed — turbine blades, steam pipes, fuel cladding.

## The formal version

**Stress concentration at a flaw.** Model a flaw as an elliptical hole of half-length $a$ (m) with tip radius of curvature $\rho_t$ (m). The stress at the tip, $\sigma_m$, exceeds the far-field applied stress $\sigma$ (Pa) by

$$\sigma_m = \sigma\left(1 + 2\sqrt{\tfrac{a}{\rho_t}}\right).$$

*In words: a long, sharp crack (large $a$, tiny $\rho_t$) multiplies the stress you applied by a large factor right at its tip.* A sharp crack ($\rho_t \to 0$) drives the multiplier toward infinity — which is why you stop a crack by **drilling a round hole** at its tip.

**Fracture mechanics.** Rather than track the tip stress directly, fracture mechanics bundles applied stress and crack size into one number, the **stress intensity factor**

$$K = Y\sigma\sqrt{\pi a},$$

where $Y$ is a dimensionless geometry factor (near 1 for a small interior crack) and $a$ is the crack length (m). Fast fracture occurs when $K$ reaches the material's **plane-strain fracture toughness** $K_{IC}$ (units $\mathrm{MPa}\sqrt{\mathrm m}$):

$$\boxed{\,K = Y\sigma\sqrt{\pi a} \;\ge\; K_{IC}\,}$$

*In words: a crack runs when applied stress times the square-root of its size reaches a material constant.* $K_{IC}$ is the property; $K$ is the loading. This is Griffith's insight made engineering-ready: **Griffith** said a crack grows when the elastic energy it releases exceeds the energy cost of the new surfaces it creates — $K_{IC}$ packages that energy balance into one measurable toughness.

**Fatigue.** Under cyclic stress the **S–N curve** plots stress amplitude $S$ against cycles to failure $N$ (log scale). For steels the curve flattens to a horizontal **endurance (fatigue) limit** $S_e$ — cycle below it and the part lasts indefinitely. Aluminum and most non-ferrous metals have **no** limit; the curve keeps sloping, so you quote a **fatigue strength** at a specified life (say $10^7$ cycles). Life splits into **initiation** (a crack nucleates at a surface stress-raiser) plus **propagation** (it grows a bit each cycle until $K \ge K_{IC}$ and the rest fractures at once).

**Creep.** Under constant load at $T \gtrsim 0.4\,T_m$ ($T_m$ = melting temperature in K), strain $\varepsilon$ climbs through three regimes: **primary** (transient, slope *decreasing* as the metal work-hardens), **secondary** (steady-state, the slope roughly *constant* and the design-relevant number), and **tertiary** (slope *accelerating* as voids and necking take over, ending in rupture). The steady-state strain rate obeys an Arrhenius power law

$$\dot\varepsilon_s = A\,\sigma^{\,n}\exp\!\left(-\frac{Q_c}{RT}\right),$$

with $A$ a constant, $n$ the stress exponent (typically 3–8), $Q_c$ the activation energy for creep (J/mol), $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$, and $T$ in kelvin. *In words: hotter and more stressed both speed the flow — stress as a strong power, temperature exponentially.* Because raising $T$ and dropping $\sigma$ can trade off, engineers collapse time-to-rupture $t_r$ and temperature into one **Larson–Miller parameter** $\mathrm{LMP} = T(C + \log_{10} t_r)$ (with $C \approx 20$), so a short hot test predicts long service life.

## Picture

![Left: an S–N fatigue curve showing stress amplitude falling with log cycles, a steel curve flattening to a horizontal endurance limit while an aluminum curve keeps dropping. Right: a creep strain-versus-time curve split into primary, secondary (steady-state), and tertiary regimes ending in rupture.](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (fracture — the critical crack size).** A steel plate ($K_{IC} = 50\ \mathrm{MPa}\sqrt{\mathrm m}$, geometry factor $Y = 1$) carries a tensile stress $\sigma = 200\ \mathrm{MPa}$. What is the largest interior crack it can tolerate before fast fracture? Set $K = K_{IC}$ and solve $Y\sigma\sqrt{\pi a_c} = K_{IC}$ for $a_c$:

$$a_c = \frac{1}{\pi}\left(\frac{K_{IC}}{Y\sigma}\right)^2 = \frac{1}{\pi}\left(\frac{50}{1\times 200}\right)^2 = \frac{1}{\pi}(0.25)^2 = \frac{0.0625}{\pi} \approx 0.0199\ \mathrm m \approx 20\ \mathrm{mm}.$$

A half-length of about $20$ mm (so a $\sim 40$ mm crack) is tolerable here. Notice the payoff of toughness: **double $K_{IC}$ and you quadruple the survivable crack** (it goes as $K_{IC}^2$). This is exactly why a *tougher* (not just stronger) steel is what you want in a cold reactor vessel — and why neutron embrittlement, which *lowers* $K_{IC}$, is dangerous.

**Example 2 (fatigue — will it live?).** A steel shaft has an endurance limit $S_e = 250\ \mathrm{MPa}$. In service it sees a cyclic stress amplitude of (a) $220\ \mathrm{MPa}$, then a redesign pushes it to (b) $300\ \mathrm{MPa}$. Suppose the finite-life region follows the empirical line $S = 900 - 90\log_{10} N$ (with $S$ in MPa).

(a) $220\ \mathrm{MPa} < S_e = 250\ \mathrm{MPa}$: below the endurance limit, so — for a nominally flawless steel — the shaft survives **indefinitely**. No finite life to compute.

(b) $300\ \mathrm{MPa} > S_e$: now it's on the sloping part, so it has a finite life. Solve for $N$:

$$300 = 900 - 90\log_{10} N \;\Longrightarrow\; \log_{10} N = \frac{900 - 300}{90} = 6.67 \;\Longrightarrow\; N = 10^{6.67} \approx 4.6\times 10^{6}\ \text{cycles}.$$

A $36\%$ stress increase took the part from *forever* to under five million cycles. Fatigue life is brutally sensitive near the knee of the S–N curve — the whole game in fatigue design is staying below $S_e$.

## Watch out

- **You might think a stronger material is a tougher one.** Not the same axis. Strength (yield stress) resists the *onset of plastic flow*; toughness ($K_{IC}$) resists *crack propagation*. Many strengthening tricks from [4.3](04-03-strengthening-mechanisms.md) raise strength but *lower* toughness — a very hard steel can be dangerously brittle. Always ask which failure clock you're fighting.
- **You might think loading below yield is automatically safe.** Under *cyclic* loading it isn't — fatigue cracks grow at stresses well below yield, and the part fails with zero macroscopic warning. And at high temperature even a *constant* sub-yield load creeps to rupture. "Below yield" only guarantees no *immediate* plastic collapse.
- **You might read the DBTT as a fixed material temperature.** It shifts. Faster loading, a sharper notch, a thicker section, and — crucially for reactors — neutron irradiation all raise the transition temperature, so a steel that was ductile in a lab test can be brittle in service. Nuclear-materials tracks exactly this **DBTT shift**.

## One-liner

> Three clocks, three triggers: fracture runs when $K = Y\sigma\sqrt{\pi a}$ hits $K_{IC}$ (a flaw), fatigue accumulates below yield until a crack grows through (cycles), and creep flows at $\dot\varepsilon_s \propto \sigma^n e^{-Q_c/RT}$ (time at heat).

## Problems

**P1 (🟢)** A titanium alloy has $K_{IC} = 44\ \mathrm{MPa}\sqrt{\mathrm m}$. A component is loaded to $\sigma = 500\ \mathrm{MPa}$ with geometry factor $Y = 1.1$. Find the critical crack half-length $a_c$. Would a $2$ mm surface crack (i.e. $a = 2$ mm) already be dangerous?

**P2 (🟡)** Two nominally identical steels differ only in fracture toughness: steel A has $K_{IC} = 40\ \mathrm{MPa}\sqrt{\mathrm m}$, steel B has $K_{IC} = 80\ \mathrm{MPa}\sqrt{\mathrm m}$. For the same applied stress and geometry, how much larger a crack can steel B tolerate than steel A? Explain in one sentence why "twice as tough" is not "twice the crack."

**P3 (🔴)** A creep test at $T_1 = 900\ \mathrm{K}$ gives a steady-state rate $\dot\varepsilon_1 = 1.0\times10^{-6}\ \mathrm{s^{-1}}$ at fixed stress. The activation energy is $Q_c = 200\ \mathrm{kJ/mol}$. Estimate the steady-state rate at $T_2 = 1000\ \mathrm{K}$ at the *same* stress. ($R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$.)

<details>
<summary>Solutions</summary>

**P1** Set $K = K_{IC}$ and solve for $a_c$:

$$a_c = \frac{1}{\pi}\left(\frac{K_{IC}}{Y\sigma}\right)^2 = \frac{1}{\pi}\left(\frac{44}{1.1\times 500}\right)^2 = \frac{1}{\pi}\left(\frac{44}{550}\right)^2 = \frac{1}{\pi}(0.08)^2 = \frac{0.0064}{\pi} \approx 2.0\times10^{-3}\ \mathrm m = 2.0\ \mathrm{mm}.$$

So the critical crack half-length is about $2$ mm — a $2$ mm crack sits right at the threshold. It is **dangerous**: any crack at or beyond $a_c$ runs to fast fracture, and there is essentially no margin. You would either lower the stress or find a tougher alloy.

*Check.* Units: $\left(\mathrm{MPa}\sqrt{\mathrm m}/\mathrm{MPa}\right)^2 = (\sqrt{\mathrm m})^2 = \mathrm m$ ✓. The stress here ($500$ MPa) is much higher than Example 1's $200$ MPa, so the survivable crack is far smaller — consistent. ✓

**P2** Critical crack size scales as $a_c \propto K_{IC}^2$ (all else fixed). Doubling $K_{IC}$ multiplies $a_c$ by $2^2 = 4$:

$$\frac{a_{c,B}}{a_{c,A}} = \left(\frac{80}{40}\right)^2 = 4.$$

Steel B tolerates a crack **four times** as long. "Twice as tough" is not "twice the crack" because $K$ depends on $\sqrt a$, so crack size enters as the *square* of the toughness — toughness pays off quadratically.

*Check.* Same $\sigma$, $Y$ cancel in the ratio, leaving only $(K_{IC,B}/K_{IC,A})^2$ ✓.

**P3** At fixed stress, the pre-factor $A\sigma^n$ cancels in the ratio, leaving the Arrhenius factors:

$$\frac{\dot\varepsilon_2}{\dot\varepsilon_1} = \exp\!\left[-\frac{Q_c}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)\right].$$

Compute the bracket: $\dfrac{1}{T_2} - \dfrac{1}{T_1} = \dfrac{1}{1000} - \dfrac{1}{900} = 0.001000 - 0.001111 = -1.111\times10^{-4}\ \mathrm{K^{-1}}$. Then

$$-\frac{Q_c}{R}\left(\tfrac{1}{T_2}-\tfrac{1}{T_1}\right) = -\frac{200{,}000}{8.314}\times(-1.111\times10^{-4}) = -24{,}056\times(-1.111\times10^{-4}) \approx 2.67.$$

So $\dot\varepsilon_2 = \dot\varepsilon_1\,e^{2.67} \approx 1.0\times10^{-6}\times 14.5 \approx 1.5\times10^{-5}\ \mathrm{s^{-1}}$.

*Check.* A $100$ K rise sped the creep rate roughly $15\times$ — the exponential temperature sensitivity is exactly why hot components have such steep life-vs-temperature curves, and why running a turbine or fuel pin even slightly hotter than rated is so costly. ✓

</details>

## Flashback

**From Lesson 4.3 (Strengthening mechanisms):** A low-carbon steel obeys the Hall–Petch relation $\sigma_y = \sigma_0 + k_y\,d^{-1/2}$, with friction stress $\sigma_0 = 70\ \mathrm{MPa}$ and $k_y = 0.74\ \mathrm{MPa}\sqrt{\mathrm m}$. Its grains are $d = 40\ \mu\mathrm m$. To what grain size must you refine it to raise the yield strength to $200\ \mathrm{MPa}$?

<details>
<summary>Solution</summary>

First confirm the starting yield strength. With $d = 40\ \mu\mathrm m = 40\times10^{-6}\ \mathrm m$, $d^{-1/2} = (4.0\times10^{-5})^{-1/2} = 158\ \mathrm m^{-1/2}$:

$$\sigma_y = 70 + 0.74\times 158 \approx 70 + 117 = 187\ \mathrm{MPa}.$$

Now solve for the $d$ that gives $200\ \mathrm{MPa}$. Rearrange Hall–Petch:

$$d^{-1/2} = \frac{\sigma_y - \sigma_0}{k_y} = \frac{200 - 70}{0.74} = \frac{130}{0.74} \approx 175.7\ \mathrm m^{-1/2}.$$

Then $d^{1/2} = 1/175.7 = 5.69\times10^{-3}\ \mathrm m^{1/2}$, so

$$d = (5.69\times10^{-3})^2 = 3.24\times10^{-5}\ \mathrm m \approx 32\ \mu\mathrm m.$$

*Check.* We need a *higher* strength than the starting $187$ MPa, and finer grains strengthen, so $d$ must drop below $40\ \mu\mathrm m$ — and $32\ \mu\mathrm m$ does. ✓ The gain is modest because $\sigma_y$ depends on $d^{-1/2}$: shrinking grains has diminishing returns, one of 4.3's tradeoffs.

</details>

## Connections

- **Backward:** brittle fracture is what happens when the crystal *can't* do [4.2](04-02-plastic-deformation-schmid.md)'s slip fast enough to blunt a crack tip — plasticity is the energy sink that separates ductile from brittle. And [4.3](04-03-strengthening-mechanisms.md)'s strengthening tricks nearly all trade *away* toughness, so failure is where the strength–toughness tension from that lesson comes due.
- **Forward:** [5.3 Materials selection](05-03-materials-classes-selection.md) turns $K_{IC}$, the endurance limit, and creep rate into selection charts for choosing a material against a failure mode. In **nuclear-materials**, this lesson is the seed for radiation embrittlement and the **DBTT shift** (neutron damage lowers $K_{IC}$ and raises the transition temperature) and for **irradiation creep** (displacement damage lets cladding creep even below the usual $0.4\,T_m$ threshold).
- **Sideways:** the Arrhenius temperature factor $e^{-Q/RT}$ driving steady-state creep is the *same* exponential that governs atomic diffusion in [2.5](02-05-diffusion-ii-transient-arrhenius.md) — creep is diffusion-assisted flow, so the two share an activation energy. This thermally-activated rate law also underlies reaction kinetics in chemistry and the temperature dependence of conductivity in [5.1](05-01-electronic-properties-band-picture.md).

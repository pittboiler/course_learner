# Propulsion · Lesson 4.1: Electric propulsion

> ⏱ ~15 min · Module 4: Advanced and exotic propulsion · Builds on: [3.2 Specific impulse](03-02-specific-impulse-rocket-performance.md), [3.5 Mission $\Delta v$](03-05-mission-delta-v-budget.md) · Unlocks: [4.4 Capstone: the propulsion design space](04-04-propulsion-design-space.md)

## Why this matters

Chemical propulsion has a hard ceiling. [1.2](01-02-compressible-flow-nozzles.md) showed that exhaust velocity scales as $\sqrt{T_0/\mathcal{M}}$, that chemistry caps $T_0$ near 3600 K, and that the lightest useful exhaust is hydrogen-rich. **The best chemical rocket ever built reaches $I_{sp} = 465$ s, and no chemical rocket will ever do much better.**

Electric propulsion breaks that ceiling by abandoning heat altogether. **Accelerate ions in an electric field and the exhaust velocity is set by the voltage**, not by any temperature — 3000 to 5000 seconds is routine, and 10,000 is achievable.

**But you cannot get something for nothing.** The power to accelerate that exhaust must come from somewhere, and it scales as the *square* of exhaust velocity. **At a spacecraft's available power the thrust is measured in millinewtons**, and a manoeuvre that takes a chemical engine forty minutes takes an ion engine a year and a half.

**That single trade — enormous $I_{sp}$, negligible thrust — organizes every use of electric propulsion**, and it is why they are on almost every geostationary satellite and on no launch vehicle.

## The idea

**Heat the propellant, and you are stuck.** A thermal rocket's exhaust velocity is bounded by the enthalpy you can put into the gas, and chemistry, materials, and dissociation all bound that.

**Charge the propellant instead, and the bound disappears.** An ion of charge $q$ falling through a potential difference $V$ acquires energy $qV$, so its speed is $\sqrt{2qV/m}$. **Raise the voltage and the exhaust goes faster; there is no temperature involved.**

**Which immediately says: use a light ion.** $v_e\propto1/\sqrt{m}$, so argon beats xenon by a factor of 1.8 at the same voltage. **But heavy ions give more thrust per unit power** — and thrust, not $I_{sp}$, is usually the scarce quantity, which is why xenon won.

**Now the [power penalty](../reference.md#power-limited-thrust), which is the whole story.** The jet power is $\tfrac12\dot mv_e^2$ and the thrust is $\dot mv_e$, so

$$F = \frac{2\eta P}{v_e}.$$

**Thrust is inversely proportional to exhaust velocity at fixed power.** Doubling $I_{sp}$ halves the thrust.

**And spacecraft power is small.** A large communications satellite has 15 kW of solar array; a deep-space probe has 1–5 kW. **At 5 kW and $I_{sp} = 3000$ s, the thrust is 0.19 N** — about the weight of an apple, in a vacuum, for months.

**So the mission has to be able to wait.** Electric propulsion is used where time is cheap and mass is expensive: station-keeping, orbit raising over months, and deep-space cruise where the trip is years anyway.

**There is also an optimum $I_{sp}$, and it is not "as high as possible."** Higher $I_{sp}$ saves propellant but demands more power-plant mass and more time. **The optimum trades propellant against power, and it depends on the mission's $\Delta v$ and its acceptable duration.**

## The formal version

**Electrostatic acceleration.**

$$\boxed{\;\tfrac12mv_e^2 = qV \quad\Longrightarrow\quad v_e = \sqrt{\frac{2qV}{m}}, \qquad I_{sp} = \frac{v_e}{g_0}.\;}$$

For singly charged xenon ($m = 2.180\times10^{-25}$ kg, $q = 1.602\times10^{-19}$ C):

$$v_e = 1212.3\sqrt{V}\ \mathrm{m/s}\quad(V\ \text{in volts}).$$

| $V$ | 300 | 600 | 1000 | 2000 | 4000 |
|---|---|---|---|---|---|
| $v_e$ (m/s) | 20,998 | 29,696 | 38,338 | 54,218 | 76,675 |
| $I_{sp}$ (s) | 2141 | 3028 | 3909 | 5529 | 7819 |

**Propellant choice** (at 1000 V, singly charged):

| Propellant | $\mathcal{M}$ | $v_e$ (m/s) | $I_{sp}$ (s) | Note |
|---|---|---|---|---|
| Argon | 40 | 69,502 | 7087 | cheap, light, low thrust/power |
| Krypton | 84 | 47,988 | 4893 | Starlink's choice — cheaper than Xe |
| Xenon | 131 | 38,338 | 3909 | industry standard: dense, storable, easy to ionize |
| Iodine | 127 | 38,995 | 3976 | solid storage, corrosive |

**Power and thrust.**

$$\boxed{\;P_{\rm jet} = \tfrac12\dot mv_e^2 = \tfrac12Fv_e, \qquad F = \frac{2\eta P}{v_e} = \frac{2\eta P}{g_0I_{sp}},\;}$$

with $\eta$ the total efficiency (ionization + acceleration + beam divergence + power processing), typically **0.45–0.65 for Hall thrusters and 0.6–0.75 for gridded ion engines.**

**The specific-power figure of merit:**

$$\boxed{\;\frac{P}{F} = \frac{g_0I_{sp}}{2\eta}\ \ \mathrm{W/N}.\;}$$

At $I_{sp} = 3000$ s and $\eta = 0.6$: **24.5 kW per newton.** *(A chemical rocket needs no electrical power at all.)*

**Thruster families.**

| Type | $I_{sp}$ (s) | $\eta$ | Thrust density | Mechanism |
|---|---|---|---|---|
| Resistojet | 300 | 0.8 | high | electrically heated gas — thermal, not electrostatic |
| Arcjet | 500–700 | 0.35 | high | arc-heated gas |
| **Hall effect** | 1500–2500 | 0.45–0.60 | moderate | quasi-neutral plasma, crossed E and B fields |
| **Gridded ion** | 3000–4500 | 0.60–0.75 | low | ions extracted through charged grids |
| Magnetoplasmadynamic | 2000–5000 | 0.3–0.5 | high (needs 100s of kW) | Lorentz-force acceleration |

**Space-charge limit** (why gridded engines have low thrust density). The Child–Langmuir law caps the current density between the grids:

$$j_{\max} = \frac{4}{9}\varepsilon_0\sqrt{\frac{2q}{m}}\frac{V^{3/2}}{d^2},$$

so the thrust per unit area is bounded by the grid gap and the voltage. **A Hall thruster avoids the limit by keeping the plasma quasi-neutral**, which is why it has 5–10 times the thrust density and why it dominates commercial use.

**Burn time.** Since the thrust is essentially constant,

$$\boxed{\;t_{\rm burn} = \frac{m_p}{\dot m} = \frac{m_pv_e}{F}\approx\frac{\overline{m}\,\Delta v}{F}.\;}$$

## Picture

![A two-panel figure. Left: schematics of two thrusters side by side. The gridded ion engine shows a discharge chamber where neutral xenon is ionized, then two closely spaced perforated grids at high positive and negative potential extracting and accelerating an ion beam, with a neutralizer cathode injecting electrons into the beam downstream, and a note that the current is space-charge limited between the grids. The Hall thruster shows an annular channel with a radial magnetic field and an axial electric field, electrons trapped in an azimuthal drift ionizing the propellant while ions are accelerated straight out, labelled quasi-neutral, no space-charge limit. Right: a log-log plot of thrust against specific impulse at a fixed input power of five kilowatts, showing the hyperbola F equals two eta P over g nought I sp; markers along it locate a resistojet, an arcjet, a Hall thruster, a gridded ion engine and an MPD thruster, and a horizontal band at the top marks the thrust range of a small chemical thruster, far above the curve and off to the left at low specific impulse, annotated chemical: no power needed, thrust unbounded, specific impulse capped.](assets/04-01-fig1.svg)

Left: the two workhorses, and the space-charge limit that separates them.

Right: the hyperbola every electric thruster lives on. You choose a point along it; you cannot leave it without more power.

## Worked examples

**Example 1 (a Hall thruster on a communications satellite).** A satellite allocates $P = 4.5$ kW to a Hall thruster with $\eta = 0.55$ and $I_{sp} = 1600$ s.

*Exhaust velocity and thrust.*

$$v_e = 9.80665(1600) = 15{,}691\ \mathrm{m/s}, \qquad F = \frac{2(0.55)(4500)}{15{,}691} = \frac{4950}{15{,}691} = 0.3155\ \mathrm{N}.$$

*Propellant flow.*

$$\dot m = \frac{F}{v_e} = \frac{0.3155}{15{,}691} = 2.011\times10^{-5}\ \mathrm{kg/s} = 1.74\ \mathrm{kg/day}.$$

*Specific power.*

$$\frac{P}{F} = \frac{4500}{0.3155} = 14{,}264\ \mathrm{W/N}.$$

*Doing fifteen years of station-keeping* (750 m/s, [3.5](03-05-mission-delta-v-budget.md)) on a 2000 kg satellite:

$$m_p = 2000\left(e^{750/15{,}691}-1\right) = 2000(0.04897) = 98\ \mathrm{kg},$$

against $2000\left(e^{750/3138}-1\right) = 540$ kg for a 320 s chemical system — **a saving of 442 kg.**

*Total firing time.*

$$t = \frac{98}{2.011\times10^{-5}} = 4.87\times10^6\ \mathrm{s} = 56\ \mathrm{days},$$

spread over fifteen years — **about 10 minutes a day.** The thruster's *duty cycle* is trivial; its *lifetime* requirement, 5000 hours of firing, is the hard part, and grid erosion or channel wall erosion is what limits it.

*Reading it.* **The trade is entirely favourable here.** 442 kg saved on a 2-tonne satellite, and the manoeuvre was going to be done in small daily increments anyway. **Station-keeping is the ideal electric-propulsion mission**, and essentially every geostationary satellite built since 2000 uses electric thrusters for it.

**Example 2 (the thrust penalty, and the optimum $I_{sp}$).** The same 4.5 kW, $\eta = 0.55$, at different specific impulses:

| $I_{sp}$ | $v_e$ (m/s) | $F$ (N) | $\dot m$ (kg/day) | $P/F$ (W/N) |
|---|---|---|---|---|
| 1000 | 9807 | 0.5048 | 4.45 | 8914 |
| 1600 | 15,691 | 0.3155 | 1.74 | 14,264 |
| 2000 | 19,613 | 0.2524 | 1.11 | 17,829 |
| 3000 | 29,420 | 0.1683 | 0.49 | 26,743 |
| 4500 | 44,130 | 0.1122 | 0.22 | 40,115 |

**Every doubling of $I_{sp}$ halves the thrust.** The relation $F = 2\eta P/v_e$ has no escape.

*The mission consequence.* A 6000 m/s orbit-raising manoeuvre on a 3000 kg spacecraft:

| $I_{sp}$ | $m_p$ (kg) | $F$ (N) | Burn time |
|---|---|---|---|
| 1000 | 2531 | 0.505 | 1.6 years |
| 2000 | 1074 | 0.252 | 2.7 years |
| 3000 | 679 | 0.168 | 3.8 years |
| 4500 | 437 | 0.112 | 5.5 years |

*(Burn time from $t\approx\overline{m}\,\Delta v/F$ with $\overline{m}$ the mean mass.)*

**Going from $I_{sp} = 1000$ to 4500 saves 2094 kg of propellant and costs 3.9 years.**

*So what is the optimum?* It depends on what a year is worth, and the honest formulation makes that explicit. **A higher $I_{sp}$ trades three things:**

**Propellant mass falls**, as $m_p\approx m\Delta v/v_e$ for small $\Delta v/v_e$ — inversely with $I_{sp}$.

**Power-plant mass is unchanged** at fixed $P$ — but if you wanted to keep the *trip time* constant you would need more power, and power-plant mass scales roughly linearly with $P$. **That is the term that creates a genuine interior optimum.**

**Time rises linearly with $I_{sp}$** at fixed power.

*The classical result.* For a **power-limited** mission where the power plant has specific mass $\alpha$ (kg/W) and the trip time $t$ is fixed, minimizing $m_p+m_{\rm powerplant}$ gives an optimal exhaust velocity

$$v_{e,\rm opt} = \sqrt{\frac{2t}{\alpha}}\times(\text{a factor of order 1 depending on }\Delta v/v_e),$$

so the optimum $I_{sp}$ **rises as the square root of the allowed trip time** and falls as the square root of the power plant's specific mass.

**With solar arrays at $\alpha\approx0.02$ kg/W and a one-year mission, this lands around $I_{sp} = 2000$–$3000$ s** — which is exactly where commercial Hall and ion thrusters sit. **The industry's choice is not arbitrary; it is the optimum for the missions and the power technology available.**

*And why nobody launches with electric propulsion.* At $F = 0.3$ N a thruster would need to be $10^7$ times more powerful to lift its own weight on Earth, and the power to do so — from $P = Fv_e/2\eta$ — would be gigawatts. **Electric propulsion works only where the gravity field is already balanced by orbital motion**, which is to say, only in space.

*One nuance worth naming.* Solar-electric propulsion's power falls as $1/r^2$ from the Sun, so an ion-propelled mission to Jupiter arrives with 4% of its Earth-orbit power. **Beyond about 3 AU, solar-electric propulsion stops being useful and the argument turns to nuclear-electric** — which is [4.2](04-02-nuclear-thermal-advanced.md)'s territory.

## Watch out

- **You might think higher $I_{sp}$ is always better.** At fixed power it costs thrust one-for-one, and the mission's time budget usually binds first.
- **You might forget the power plant.** Electric propulsion is not propellant-free; it trades propellant mass for power-plant mass and time.
- **You might use the ideal $v_e = \sqrt{2qV/m}$ as achieved performance.** Real thrusters lose to double ionization, beam divergence, incomplete ionization, and power processing — the total efficiency is 0.45–0.75.
- **You might neglect the neutralizer.** An ion beam carries charge; without a neutralizer cathode the spacecraft charges up and the beam returns to it. **The neutralizer is not optional.**
- **You might size for total impulse and ignore lifetime.** Grid and channel erosion cap the firing hours, and a thruster that can deliver the impulse in principle may not survive delivering it.
- **You might use solar-electric far from the Sun.** Power falls as $1/r^2$.
- **You might compare $I_{sp}$ without noting the thrust.** A 4500 s engine and a 320 s engine are not competitors; they do different jobs.

## One-liner

> Accelerate ions electrostatically and the exhaust velocity is set by voltage rather than temperature, so $I_{sp}$ of thousands of seconds is routine — but $F = 2\eta P/v_e$ means thrust falls as $I_{sp}$ rises, spacecraft power is kilowatts, and the result is millinewtons: enormous propellant savings bought with months or years of firing, which is why electric propulsion is on every geostationary satellite and no launch vehicle.

## Problems

**P1 (🟢)** A gridded ion engine runs singly charged xenon at $V = 1200$ V with total efficiency $\eta = 0.68$ and input power $P = 2.5$ kW. (a) Find the ideal exhaust velocity and $I_{sp}$. (b) Find the thrust. (c) Find the propellant flow in mg/s and kg/year of continuous operation. (d) Find the specific power in W/N.

**P2 (🟡)** A 1800 kg spacecraft must perform 2400 m/s using a Hall thruster with $I_{sp} = 1800$ s, $\eta = 0.58$, and 6 kW of available power. (a) Find $v_e$, the thrust, and the propellant mass. (b) Find the firing time in days. (c) Compare the propellant mass with a chemical system at $I_{sp} = 315$ s. (d) The mission can allow at most 8 months of thrusting; is the electric option feasible?

**P3 (🔴)** A deep-space probe of 2500 kg dry mass must deliver $\Delta v = 7$ km/s. Its solar array supplies $P = 8$ kW at 1 AU with a specific mass of $\alpha = 0.025$ kg/W (array plus power processing), and the thruster has $\eta = 0.62$. (a) For $I_{sp} = 1500$, 2500, 3500, and 5000 s, find the propellant mass, thrust, and firing time. (b) Find the power-plant mass and hence the total "propulsion system plus propellant" mass for each. (c) Identify the $I_{sp}$ that minimizes total mass, and separately the one that would minimize trip time. (d) The mission requires the manoeuvre to complete within 3 years. Recommend an $I_{sp}$ and explain what would change your answer.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_e = 1212.3\sqrt{V} = 1212.3\sqrt{1200} = 1212.3(34.641) = 41{,}997\ \mathrm{m/s},$$

$$I_{sp} = \frac{41{,}997}{9.80665} = 4282\ \mathrm{s}.$$

(b) $$F = \frac{2\eta P}{v_e} = \frac{2(0.68)(2500)}{41{,}997} = \frac{3400}{41{,}997} = 0.08096\ \mathrm{N} = 81.0\ \mathrm{mN}.$$

(c) $$\dot m = \frac{F}{v_e} = \frac{0.08096}{41{,}997} = 1.928\times10^{-6}\ \mathrm{kg/s} = 1.93\ \mathrm{mg/s},$$

$$\dot m\times3.156\times10^7 = 60.8\ \mathrm{kg/year}.$$

(d) $$\frac{P}{F} = \frac{2500}{0.08096} = 30{,}880\ \mathrm{W/N}.$$

*(For scale: producing 1 N of thrust this way needs 31 kW — more than the entire electrical power of most spacecraft.)*

**P2** (a) $$v_e = 9.80665(1800) = 17{,}652\ \mathrm{m/s}, \qquad F = \frac{2(0.58)(6000)}{17{,}652} = \frac{6960}{17{,}652} = 0.3943\ \mathrm{N}.$$

$$m_p = m_f\left(e^{\Delta v/v_e}-1\right)\ \text{with}\ m_f = 1800\ \mathrm{kg}: \quad e^{2400/17{,}652} = e^{0.13596} = 1.14563,$$

$$m_p = 1800(0.14563) = 262\ \mathrm{kg}.$$

(b) $$\dot m = \frac{F}{v_e} = \frac{0.3943}{17{,}652} = 2.234\times10^{-5}\ \mathrm{kg/s},$$

$$t = \frac{262}{2.234\times10^{-5}} = 1.173\times10^7\ \mathrm{s} = 136\ \mathrm{days}.$$

(c) $$v_e = 9.80665(315) = 3089.1\ \mathrm{m/s}, \qquad e^{2400/3089.1} = e^{0.77692} = 2.1748,$$

$$m_p = 1800(1.1748) = 2115\ \mathrm{kg}.$$

**The electric system uses 262 kg where the chemical one uses 2115 kg — a saving of 1852 kg**, more than the spacecraft's own dry mass.

(d) $$136\ \mathrm{days} = 4.5\ \mathrm{months}<8\ \mathrm{months}.$$

**Yes, comfortably feasible**, with 3.5 months of margin.

*And the margin is worth having*, because the 136 days assumes continuous thrusting. Real operations lose time to eclipses (a solar-powered thruster stops in shadow), to attitude manoeuvres, to safe modes, and to periods when the thrust vector must point away from the desired direction. **A duty cycle of 70–85% is typical**, which stretches 136 days of firing to 160–195 days of elapsed time — still inside 8 months, but no longer comfortably.

**P3** (a) $$F = \frac{2\eta P}{v_e} = \frac{2(0.62)(8000)}{v_e} = \frac{9920}{v_e}, \qquad m_p = 2500\left(e^{7000/v_e}-1\right),$$

$$t = \frac{m_pv_e}{F} = \frac{m_pv_e^2}{9920}.$$

| $I_{sp}$ | $v_e$ (m/s) | $F$ (N) | $m_p$ (kg) | $\dot m$ (kg/s) | $t$ (years) |
|---|---|---|---|---|---|
| 1500 | 14,710 | 0.6744 | 1524 | $4.585\times10^{-5}$ | 1.05 |
| 2500 | 24,517 | 0.4046 | 826 | $1.650\times10^{-5}$ | 1.59 |
| 3500 | 34,323 | 0.2890 | 566 | $8.420\times10^{-6}$ | 2.13 |
| 5000 | 49,033 | 0.2023 | 384 | $4.126\times10^{-6}$ | 2.95 |

*(Working the $I_{sp} = 2500$ row: $v_e = 24{,}517$ m/s; $F = 9920/24{,}517 = 0.4046$ N; $e^{7000/24{,}517} = e^{0.28551} = 1.33044$, so $m_p = 2500(0.33044) = 826$ kg; $\dot m = F/v_e = 1.650\times10^{-5}$ kg/s; $t = 826/1.650\times10^{-5} = 5.01\times10^7$ s $= 1.59$ years.)*

(b) $$m_{\rm power} = \alpha P = 0.025(8000) = 200\ \mathrm{kg},$$

**the same for every option**, because the power is fixed.

| $I_{sp}$ | $m_p$ | $m_{\rm power}$ | Total |
|---|---|---|---|
| 1500 | 1524 kg | 200 kg | **1724 kg** |
| 2500 | 826 | 200 | **1026 kg** |
| 3500 | 566 | 200 | **766 kg** |
| 5000 | 384 | 200 | **584 kg** |

(c) **At fixed power, the total mass falls monotonically with $I_{sp}$** — there is no interior optimum in this formulation, because the power plant does not grow.

$$\boxed{\text{Minimum mass: the highest available } I_{sp}.}$$

$$\boxed{\text{Minimum trip time: the lowest } I_{sp}\ (1500\ \mathrm{s}, 1.05\ \mathrm{years}).}$$

*Why there is no interior optimum here, and when there would be.* The classical power-limited optimization has an interior minimum because it holds the **trip time** fixed and lets the power grow: raising $I_{sp}$ at fixed $t$ requires $P\propto v_e^2/t$, so power-plant mass grows quadratically while propellant mass falls only linearly — and the sum has a minimum.

**This problem fixes the power instead**, so raising $I_{sp}$ costs time rather than mass. **The trade is mass against time, not mass against mass**, and the answer is whatever the schedule allows.

(d) *Recommendation for a 3-year limit.* **$I_{sp}\approx4500$–$5000$ s**, using a gridded ion engine.

The reasoning:

**The 5000 s option fits, barely.** 2.95 years of continuous thrusting against a 3-year limit leaves 2% margin — not enough, once duty cycle is considered.

**Derating to $I_{sp} = 4500$ s** gives $v_e = 44{,}130$ m/s, $F = 0.2248$ N, $m_p = 430$ kg, and $t = 2.67$ years — **an 11% schedule margin**, at a cost of 46 kg. That is the sensible choice.

**And the mass saving over the fast option is enormous**: 430 kg against 1524 kg at $I_{sp} = 1500$ s. **On a 2500 kg dry spacecraft, 1094 kg is the difference between one launch vehicle class and the next.**

*What would change the answer.*

**A duty cycle below about 85%.** If eclipses, attitude constraints, and safe modes reduce effective thrusting to 80% of elapsed time, the 4500 s option stretches to 3.3 years and breaks the limit. **Then you must drop to $I_{sp}\approx3500$ s** (2.13 years of firing, 2.7 years elapsed) and accept 136 kg more propellant.

**A different power level.** Doubling the array to 16 kW halves every trip time, which would allow $I_{sp} = 5000$ s in 1.5 years — at the cost of 200 kg more power plant, which is *less* than the 42 kg saved... no: the extra 200 kg of array against a propellant saving of only 42 kg makes it a poor trade for mass, but an excellent one for schedule. **Whether it is worth it depends on whether the mission is mass-limited or time-limited**, and that is a programme decision rather than an engineering one.

**Solar distance.** If this probe travels outward, its array power falls as $1/r^2$, and a manoeuvre planned at 8 kW near Earth might have only 2 kW at 2 AU — quadrupling the trip time. **A realistic analysis integrates the thrust along the trajectory rather than assuming constant power**, and for outer-planet missions that integration usually kills solar-electric propulsion entirely.

</details>

## Flashback

**From Lesson 3.5 (Mission $\Delta v$ and the propulsion budget):** A geostationary satellite of 1800 kg dry mass carries a budget of 1836 m/s (combined apogee burn) plus 750 m/s of station-keeping, with 10% margin. (a) Find the carried $\Delta v$. (b) Find the propellant for a 320 s chemical system. (c) Find it for a 1700 s electric system. (d) Why would a real satellite use both?

<details>
<summary>Solution</summary>

(a) $$\Delta v_{\rm det} = 1836+750 = 2586\ \mathrm{m/s}, \qquad \Delta v_{\rm carried} = 1.10(2586) = 2845\ \mathrm{m/s}.$$

(b) $$v_e = 9.80665(320) = 3138.1\ \mathrm{m/s}, \qquad e^{2845/3138.1} = e^{0.90660} = 2.4759,$$

$$m_p = 1800(1.4759) = 2657\ \mathrm{kg}, \qquad m_0 = 4457\ \mathrm{kg}.$$

(c) $$v_e = 9.80665(1700) = 16{,}671\ \mathrm{m/s}, \qquad e^{2845/16{,}671} = e^{0.17065} = 1.18608,$$

$$m_p = 1800(0.18608) = 335\ \mathrm{kg}, \qquad m_0 = 2135\ \mathrm{kg}.$$

**The electric system saves 2322 kg — more than the satellite's dry mass.**

(d) *Why both.* Because the two burns have completely different **time** requirements.

**The apogee burn wants to be fast.** 1836 m/s must be delivered while the satellite is in a highly elliptical transfer orbit, passing repeatedly through the Van Allen belts. A chemical engine does it in about 40 minutes of firing spread over a few days. **An electric thruster at 0.3 N on a 2135 kg spacecraft would take**

$$t\approx\frac{2000(1836)}{0.3} = 1.2\times10^7\ \mathrm{s} = 142\ \mathrm{days},$$

during which the satellite earns nothing and accumulates radiation dose crossing the belts hundreds of times.

**Station-keeping wants to be slow.** Its 750 m/s is spent in tiny increments over fifteen years, so an electric thruster's low thrust is irrelevant — and its propellant saving is 442 kg.

*The hybrid, which is what most satellites do.*

$$m_p = \underbrace{1800\left(e^{2020/3138.1}-1\right)}_{\text{chemical apogee, with margin}}+\underbrace{1800\left(e^{825/16{,}671}-1\right)}_{\text{electric station-keeping}}= 1626+91 = 1717\ \mathrm{kg},$$

against 2657 kg all-chemical — **a 940 kg saving with no schedule penalty at all.**

*And the emerging alternative.* Operators increasingly accept the 142-day electric orbit raising in exchange for the full 2322 kg saving, because it lets a satellite fly on a launch vehicle one class smaller — **which is worth more than six months of deferred revenue.** All-electric geostationary satellites have been flying since 2015, and the trade tipped as launch prices, radiation-hardening, and thruster lifetimes all improved.

*The bridge to this lesson.* [3.5](03-05-mission-delta-v-budget.md) treated $\Delta v$ as the only currency. **Electric propulsion introduces a second one — time — and the interesting missions are the ones where the exchange rate between them is close.**

</details>

## Connections

- **Backward:** the chemical $I_{sp}$ ceiling this lesson escapes is [1.2](01-02-compressible-flow-nozzles.md)'s and [3.2](03-02-specific-impulse-rocket-performance.md)'s; the rocket equation that makes high $I_{sp}$ so valuable is [3.1](03-01-rocket-equation.md)'s; the mission budgets are [3.5](03-05-mission-delta-v-budget.md)'s.
- **Forward:** [4.2](04-02-nuclear-thermal-advanced.md) covers the other escape from the chemical ceiling — heating a light propellant with a reactor instead of a flame — and nuclear-*electric* propulsion, which removes this lesson's power constraint; [4.4](04-04-propulsion-design-space.md) places both on the thrust-versus-$I_{sp}$ map.
- **Sideways:** $F = 2\eta P/v_e$ is the same **fixed-power trade-off** as a motor's torque-speed curve or an amplifier's gain-bandwidth product: with the power fixed, the two output quantities are reciprocal, and design consists of choosing where on the hyperbola to sit. The ion-acceleration physics is [`em-refresher`](../../em-refresher/syllabus.md)'s, and the space-charge limit is [`plasma-physics`](../../plasma-physics/syllabus.md)'s.

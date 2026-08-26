# Propulsion · Lesson 4.4: Capstone — the propulsion design space

> ⏱ ~15 min · Module 4: Advanced and exotic propulsion · Builds on: every lesson in the course · Course finale

## Why this matters

Nineteen lessons have produced a lot of engines. This one puts them all on a single map and shows that the map has a shape — that the apparent variety of propulsion is really **one trade-off, seen from different angles.**

The trade-off is this: **thrust and specific impulse are both bought with power, and power is what nobody has enough of.** $P_{\rm jet} = \tfrac12Fv_e$, so at any given power level a device can have high thrust or high exhaust velocity, never both. **The entire propulsion landscape is a set of answers to "where does the power come from, and how much is there?"**

Once you see that, every choice in the course becomes one question: **is this mission limited by thrust, by propellant, or by time?**

## The idea

**Everything lives on the [jet-power hyperbola](../reference.md#power-limited-thrust).** $P_{\rm jet} = \tfrac12\dot mv_e^2 = \tfrac12Fv_e$: fix the power and thrust is inversely proportional to exhaust velocity. **The empty corner of the map — high thrust *and* high $I_{sp}$ — is empty because it requires gigawatts.**

**Chemical rockets get their power free, and pay in $I_{sp}$.** The propellant carries its own energy, so the jet power comes with the mass flow at no extra hardware cost — megawatts per kilogram per second, automatically. **The price is that the energy density of chemical bonds caps $I_{sp}$ at 465 s.**

**Electric thrusters buy their power, and pay in thrust.** A separate power system supplies the energy, so $I_{sp}$ is unbounded — but the power system's mass and the spacecraft's electrical capacity cap the thrust at millinewtons.

**Nuclear thermal splits the difference**, and it is the only thing that does: the reactor supplies the power at chemical-scale flow rates, so both the thrust and the $I_{sp}$ are good — at the cost of a very heavy engine.

**Air-breathers occupy a different axis entirely.** They do not carry oxidizer, so their $I_{sp}$ (counted per unit *fuel*) is thousands of seconds — but they only work inside an atmosphere, and each type works only over a band of flight Mach number.

**Which gives the second organizing axis: flight regime.** Propellers below $M = 0.65$, turbofans to $M = 0.9$, turbojets to $M = 3$, ramjets from 3 to 5, scramjets from 5 to 12, rockets everywhere and beyond.

**And the mission decides.** A launch needs thrust-to-weight above 1, so nothing but a chemical rocket will do. A geostationary satellite needs propellant efficiency and has fifteen years, so electric wins. **The engine is chosen by the mission's scarcest resource**, and that is the one question worth carrying out of this course.

## The formal version

**The power constraint that organizes everything.**

$$\boxed{\;P_{\rm jet} = \tfrac12\dot mv_e^2 = \tfrac12Fv_e \quad\Longrightarrow\quad F = \frac{2P_{\rm jet}}{v_e}.\;}$$

**Where the power comes from:**

| Class | Power source | $P/\dot m$ | Consequence |
|---|---|---|---|
| Chemical | the propellant itself | $\tfrac12v_e^2\approx5$–$10$ MJ/kg | thrust unlimited, $I_{sp}$ capped by chemistry |
| Nuclear thermal | reactor, propellant is inert | $\approx35$ MJ/kg | both good, engine very heavy |
| Electric | separate power plant | limited by $P_{\rm avail}$ | $I_{sp}$ unlimited, thrust tiny |
| Air-breathing | fuel + free atmospheric oxidizer | as chemical | no oxidizer mass, but needs air |

**The map** ($I_{sp}$ against thrust, both logarithmic):

| System | $I_{sp}$ (s) | Typical $F$ | $T/W$ of engine | Where it works |
|---|---|---|---|---|
| Turbofan (high bypass) | 5000–6500* | 100–400 kN | 5–7 | $M<0.9$, in air |
| Turboprop | 8000–10,000* | 20–60 kN | 3–5 | $M<0.65$, in air |
| Turbojet | 3000–4000* | 50–150 kN | 5–8 | $M<3$, in air |
| Ramjet | 1500–2500* | 10–100 kN | 5–10 | $3<M<5$ |
| Scramjet | 1000–3000* | 10–100 kN | — | $5<M<12$ |
| Solid rocket | 250–290 | 1–15 MN | very high | anywhere |
| Chemical rocket (kerolox) | 300–360 | 0.1–8 MN | 60–150 | anywhere |
| Chemical rocket (hydrolox) | 440–465 | 0.1–2 MN | 50–80 | anywhere |
| Nuclear thermal | 800–900 | 0.1–1 MN | 3–7 | in space (or from orbit) |
| Arcjet | 500–700 | 0.1–0.5 N | — | in space |
| Hall thruster | 1500–2500 | 0.05–0.5 N | — | in space |
| Gridded ion | 3000–4500 | 0.02–0.2 N | — | in space |

*\*Air-breathing $I_{sp}$ counts fuel only; it is not comparable with a rocket's.*

**Thrust-to-weight is the launch gate.**

$$\boxed{\;\frac{T}{W}>1\ \text{at liftoff} \quad\Longrightarrow\quad \text{chemical rockets only.}\;}$$

Nuclear thermal reaches $T/W\approx3$–$7$ for the engine alone but its shielding and the hydrogen tank make a launch stage impractical; electric propulsion is nine orders of magnitude short.

**The three-question decision procedure.**

**1. Is there air?** No → rocket family. Yes → what Mach number?

**2. Must the thrust exceed the weight?** Yes → chemical rocket. No → the field opens.

**3. What is scarce — mass or time?** Mass → highest $I_{sp}$ the schedule allows. Time → highest thrust the mass budget allows.

**The recurring arithmetic.** Four relations do almost all the work in this course:

$$F = \dot m_eu_e-\dot m_aV_\infty+\left(p_e-p_a\right)A_e, \qquad u_e\propto\sqrt{\frac{T_0}{\mathcal{M}}},$$

$$\Delta v = v_e\ln\frac{m_0}{m_f}, \qquad \eta_p = \frac{2}{1+u_e/V_\infty}.$$

**The first says where thrust comes from; the second bounds thermal exhaust velocity; the third converts it into mission capability; the fourth explains why an air-breather should not throw its jet too fast.**

## Picture

![A two-panel figure. Left: the master map, a log-log plot of specific impulse against thrust spanning from 0.01 newtons to 10 meganewtons and from 200 to 5000 seconds. Labelled regions are drawn as ellipses — solid and chemical rockets at the lower right, nuclear thermal above them, arcjets, Hall thrusters and gridded ion engines in a diagonal band at the upper left, and speculative fusion concepts sketched beyond the top. Diagonal dashed lines of constant jet power run from lower left to upper right, marked one kilowatt, one megawatt and one gigawatt; the upper-right corner beyond the gigawatt line is shaded and labelled nothing lives here. A horizontal dashed line low on the plot marks the thrust needed for a thrust-to-weight of one on a launch vehicle, with only the chemical region above it. Right: the flight-regime map, plotting specific impulse against flight Mach number from zero to fifteen, with overlapping bands for turboprop, turbofan, turbojet, ramjet and scramjet descending from left to right as each type's efficiency falls with speed, and a flat horizontal line for the rocket at about 450 seconds running across the whole range; the crossing point where the scramjet band falls to the rocket line, near Mach 12 to 15, is marked air-breathing ends here.](assets/04-04-fig1.svg)

Left: every propulsion system, organized by the one constraint they all share.

Right: the same systems organized by where they fly. Note that the rocket's line is flat — it is the only device indifferent to flight speed.

## Worked examples

**Example 1 (reading the map: three missions, three answers).**

*Mission A — launch 20 t to LEO.* Requires $\Delta v = 9.4$ km/s and $T/W>1$ at liftoff.

**Only chemical rockets pass the thrust gate.** A nuclear-thermal first stage would need to lift its own reactor and shield with $T/W\approx3$, which is possible in principle but launches a reactor through the atmosphere; electric propulsion is off by a factor of $10^7$.

**The design question reduces to which chemical propellant and how many stages** — [3.3](03-03-staging-mass-ratio.md) and [3.4](03-04-chemical-rockets-liquids-solids.md). A kerolox first stage (dense, high thrust) with a hydrolox upper stage (high $I_{sp}$, vacuum-optimized) is the standard answer, and it is standard because the trade is not close.

*Mission B — raise a 2 t satellite from GTO to GEO and keep it there for 15 years.* Requires 1836 + 750 m/s, with months available.

**The thrust gate is gone**, so the field opens. From [3.5](03-05-mission-delta-v-budget.md) and [4.1](04-01-electric-propulsion.md):

| Option | Propellant | Time |
|---|---|---|
| All chemical (320 s) | 2657 kg | 40 min + 15 yr |
| All electric (1700 s) | 335 kg | 5 months + 15 yr |
| Hybrid (chemical apogee, electric station-keeping) | 1717 kg | 40 min + 15 yr |

**The answer depends on what six months of deferred revenue is worth**, which is a business question, not an engineering one — and the industry has been steadily moving from the hybrid to the all-electric answer as launch costs and thruster lifetimes have improved.

*Mission C — cruise an airliner at $M = 0.85$.* No $\Delta v$ budget at all; the figure of merit is fuel burn per passenger-kilometre.

**The rocket family is irrelevant** — there is air, so use it. From [2.1](02-01-propulsion-efficiencies-brayton.md) and [2.5](02-05-turbofan-bypass.md), the answer is a high-bypass turbofan, and the design question is how large the fan can be before the nacelle, the ground clearance, and the weight eat the propulsive-efficiency gain.

**Reading across the three.** The same course produced three completely different answers, and the branch points were: **is there air; must thrust exceed weight; and is time or mass the scarce thing.** Nothing else was needed.

**Example 2 (the empty corner, quantified).** Why is there nothing at high thrust *and* high $I_{sp}$?

*Take a hypothetical engine with $F = 1$ MN and $I_{sp} = 3000$ s.*

$$v_e = 9.80665(3000) = 29{,}420\ \mathrm{m/s}, \qquad P_{\rm jet} = \tfrac12Fv_e = \tfrac12\left(10^6\right)(29{,}420) = 14.7\ \mathrm{GW}.$$

**Fourteen gigawatts** — roughly ten large nuclear power stations, in a device that must also be light enough to fly.

*Where would that power come from?*

**Not chemically.** The mass flow at that $I_{sp}$ is $\dot m = F/v_e = 34$ kg/s, and 14.7 GW over 34 kg/s is **433 MJ/kg** — thirty-six times the specific energy of the best chemical propellant combination. **Chemistry cannot supply it.**

**Not from a fission reactor of any reasonable mass.** A solid-core reactor delivering 14.7 GW would need a core roughly thirty times NERVA's, and its fuel elements would still be limited to 2900 K — which caps $I_{sp}$ at 900 s regardless of power.

**In principle from fusion**, at 340 TJ/kg for D–T — but no fusion device has produced net energy, let alone thrust.

*The general statement.* Writing the specific power of the energy source as $e$ (J/kg of propellant),

$$\tfrac12v_e^2\leq e \quad\Longrightarrow\quad v_e\leq\sqrt{2e}.$$

| Energy source | $e$ (J/kg) | $v_e^{\max}$ (m/s) | $I_{sp}^{\max}$ (s) |
|---|---|---|---|
| Chemical (best) | $1.2\times10^7$ | 4900 | 500 |
| Fission (burnup-limited, thermal) | $\sim3\times10^7$ | 7750 | 790 |
| Fission (ideal, full burnup) | $8\times10^{13}$ | $1.3\times10^7$ | $1.3\times10^6$ |
| Fusion (D–T) | $3.4\times10^{14}$ | $2.6\times10^7$ | $2.7\times10^6$ |
| Antimatter | $9\times10^{16}$ | $4.2\times10^8$ | $4.3\times10^7$ |

**Chemistry's ceiling is not a materials problem or an engineering problem; it is the bond energy of the molecules involved**, and no amount of cleverness moves it.

*And the second constraint, which is why the ideal fission and fusion rows are fantasy.* Extracting that specific energy requires the reaction products themselves to *be* the exhaust — a fission or fusion fragment leaving at $10^7$ m/s. **Every practical design instead uses the reaction to heat a separate working fluid**, at which point the exhaust velocity is capped by the *material temperature* rather than by the energy release. **Nuclear thermal gets 900 s from a source capable of $10^6$ s**, and the factor of a thousand is lost entirely to the melting point of the fuel elements.

*Which is the deepest statement this course can make about propulsion.* **The energy is not the problem. Getting it into the exhaust without melting the engine is the problem** — and every advanced concept, from gas-core reactors to magnetic nozzles to direct fusion drives, is an attempt to hold the hot stuff away from the walls.

## Watch out

- **You might compare an air-breather's $I_{sp}$ with a rocket's.** The air-breather counts fuel only; the rocket counts fuel plus oxidizer. Compare only where both could fly.
- **You might think high $I_{sp}$ is always the goal.** It is the goal when propellant mass is scarce. When *thrust* or *time* is scarce, it is the wrong objective.
- **You might expect a technology gap to be closed by engineering.** The chemical $I_{sp}$ ceiling is a bond-energy limit; the thermal-rocket ceiling is a melting-point limit. **Neither yields to effort.**
- **You might size an electric system on $I_{sp}$ alone.** Its power plant, radiator, and trip time are the real design drivers.
- **You might ignore the flight-regime axis.** A turbojet at $M = 6$ and a scramjet at $M = 2$ both produce nothing, however good their cycle numbers look.
- **You might treat $T/W>1$ as negotiable.** It is the one hard gate: a vehicle that cannot lift itself does not leave the pad.
- **You might read the map as static.** Bypass ratios, chamber pressures, and thruster lifetimes have all moved substantially in fifty years — but the *shape* of the map, set by the power constraint, has not.

## One-liner

> Every propulsion system sits on the hyperbola $F = 2P_{\rm jet}/v_e$, so the answer to "which engine" is really "where does the power come from and how much is there" — chemical gets it free and pays in $I_{sp}$, electric buys it and pays in thrust, nuclear thermal splits the difference and pays in engine mass, and air-breathers avoid the question by not carrying an oxidizer, at the price of only working inside an atmosphere and inside a Mach band.

## Problems

**P1 (🟢)** Compute the jet power for: (a) a Merlin engine, $F = 845$ kN at $I_{sp} = 311$ s; (b) a Hall thruster, $F = 0.3$ N at $I_{sp} = 1800$ s; (c) a NERVA-class engine, $F = 250$ kN at $I_{sp} = 850$ s; (d) comment on which of these needs an external power supply and why the others do not.

**P2 (🟡)** A satellite operator must move 3000 kg from GTO to GEO ($\Delta v = 1840$ m/s) and asks for three options: chemical at $I_{sp} = 320$ s, arcjet at 600 s, and Hall thruster at 1800 s with 5 kW and $\eta = 0.55$. (a) Find the propellant mass for each. (b) Find the thrust and transfer duration for the Hall option. (c) Find the arcjet's thrust assuming 2 kW and $\eta = 0.35$, and its duration. (d) Recommend one, stating your assumption about the value of time.

**P3 (🔴)** *(Boss problem 4.)* A spacecraft in deep space must make a $\Delta v$ of $5$ km/s starting at $2000$ kg. Option A is a chemical thruster with $I_{sp} = 320$ s; option B is an ion thruster with $I_{sp} = 3000$ s but only $0.2$ N of thrust. (a) Compute the propellant mass each option needs. (b) Estimate the burn duration for the ion thruster (treat mass as roughly constant) and comment on why it may take months. (c) State one mission where you would still pick the chemical option despite its far larger propellant mass, and why.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_e = 9.80665(311) = 3049.9\ \mathrm{m/s}, \qquad P_{\rm jet} = \tfrac12Fv_e = \tfrac12\left(845{,}000\right)(3049.9) = 1.288\ \mathrm{GW}.$$

(b) $$v_e = 9.80665(1800) = 17{,}652\ \mathrm{m/s}, \qquad P_{\rm jet} = \tfrac12(0.3)(17{,}652) = 2648\ \mathrm{W} = 2.65\ \mathrm{kW}.$$

(c) $$v_e = 9.80665(850) = 8335.7\ \mathrm{m/s}, \qquad P_{\rm jet} = \tfrac12\left(250{,}000\right)(8335.7) = 1.042\ \mathrm{GW}.$$

(d) **Only the Hall thruster needs an external supply.**

*Why the others do not.* The Merlin's 1.29 GW arrives with the propellant: at $\dot m = F/v_e = 277$ kg/s and a chemical specific energy of about 4.6 MJ/kg for kerolox, the chemical release is $277(4.6\times10^6) = 1.27$ GW. **The power and the mass flow are the same thing** — the propellant is simultaneously the working fluid and the fuel, so no separate power system exists or is needed.

The NERVA engine's 1.04 GW comes from a reactor, which *is* an external source — but it is **thermally coupled directly to the propellant**, not converted to electricity. A reactor delivering a gigawatt of heat into a flowing gas is a compact device; a reactor delivering a gigawatt of *electricity* would need a conversion system and a radiator the size of a football field ([4.2](04-02-nuclear-thermal-advanced.md)).

The Hall thruster's 2.65 kW is **five and a half orders of magnitude smaller** than either — and it still requires solar arrays, power processing, and thermal control, because it must arrive as electricity.

**That contrast is the whole map in three numbers**: 1.29 GW free, 1.04 GW as heat, 2.65 kW as electricity — and the thrust follows accordingly at 845 kN, 250 kN, and 0.3 N.

**P2** (a) $$m_p = m_f\left(e^{\Delta v/v_e}-1\right)\ \text{with}\ m_f = 3000\ \mathrm{kg}.$$

| Option | $I_{sp}$ | $v_e$ (m/s) | $e^{1840/v_e}$ | $m_p$ (kg) |
|---|---|---|---|---|
| Chemical | 320 | 3138.1 | 1.79739 | **2392** |
| Arcjet | 600 | 5884.0 | 1.36713 | **1101** |
| Hall | 1800 | 17,652 | 1.10986 | **330** |

(b) $$F = \frac{2\eta P}{v_e} = \frac{2(0.55)(5000)}{17{,}652} = \frac{5500}{17{,}652} = 0.3116\ \mathrm{N},$$

$$\dot m = \frac{F}{v_e} = \frac{0.3116}{17{,}652} = 1.765\times10^{-5}\ \mathrm{kg/s},$$

$$t = \frac{330}{1.765\times10^{-5}} = 1.867\times10^7\ \mathrm{s} = 216\ \mathrm{days} = 7.1\ \mathrm{months}.$$

(c) $$F = \frac{2(0.35)(2000)}{5884.0} = \frac{1400}{5884.0} = 0.2379\ \mathrm{N},$$

$$\dot m = \frac{0.2379}{5884.0} = 4.044\times10^{-5}\ \mathrm{kg/s}, \qquad t = \frac{1101}{4.044\times10^{-5}} = 2.724\times10^7\ \mathrm{s} = 315\ \mathrm{days}.$$

**The arcjet is worse on both counts** — it uses 3.3 times the Hall thruster's propellant *and* takes 46% longer, because its lower efficiency (0.35 against 0.55) and lower power (2 kW against 5 kW) more than cancel its shorter mass-ratio exponent.

*(This is a genuine historical point: arcjets were used on commercial satellites in the 1990s and were displaced entirely by Hall thrusters, which are better on every axis.)*

(d) *Recommendation.* **The Hall thruster, if seven months of deferred revenue is acceptable; otherwise chemical.**

*The trade, stated in the operator's terms.* The Hall option saves 2062 kg of propellant, which on a 3000 kg dry satellite means the wet mass falls from 5392 kg to 3330 kg — **a 38% reduction that moves the satellite into a smaller and cheaper launch slot, or allows a much larger payload in the same slot.**

Against that, seven months of a fifteen-year revenue stream is roughly 4% of the satellite's earning life.

*My assumption, stated explicitly.* **I assume launch capacity is the binding constraint and revenue is deferred rather than lost** — the satellite still earns for fifteen years, it simply starts later. Under that assumption the Hall thruster wins comfortably, because a 38% mass reduction is worth far more than 4% of the revenue stream.

**The assumption fails if** the satellite is replacing one that has already failed (revenue is *lost*, not deferred), if the orbital slot must be occupied by a regulatory deadline, or if the transfer through the Van Allen belts would degrade the solar arrays enough to shorten the mission. **In any of those cases, chemical.**

**P3** *(a) Propellant mass for each option.*

$$m_p = m_0\left(1-e^{-\Delta v/v_e}\right), \qquad m_0 = 2000\ \mathrm{kg}, \qquad \Delta v = 5000\ \mathrm{m/s}.$$

*Option A — chemical, $I_{sp} = 320$ s:*

$$v_e = 9.80665(320) = 3138.1\ \mathrm{m/s}, \qquad MR = e^{5000/3138.1} = e^{1.59332} = 4.9200,$$

$$m_f = \frac{2000}{4.9200} = 406.5\ \mathrm{kg}, \qquad \boxed{m_p = 2000-406.5 = 1593.5\ \mathrm{kg}.}$$

*Option B — ion, $I_{sp} = 3000$ s:*

$$v_e = 9.80665(3000) = 29{,}420\ \mathrm{m/s}, \qquad MR = e^{5000/29{,}420} = e^{0.16995} = 1.18525,$$

$$m_f = \frac{2000}{1.18525} = 1687.4\ \mathrm{kg}, \qquad \boxed{m_p = 2000-1687.4 = 312.6\ \mathrm{kg}.}$$

**The ion thruster needs 313 kg where the chemical needs 1594 kg — a factor of 5.1**, and the difference, 1281 kg, is 64% of the spacecraft's initial mass.

*Why the gap is so large.* The exponent $\Delta v/v_e$ falls from 1.593 to 0.170, and the rocket equation is exponential in it: $e^{1.593}-1 = 3.92$ against $e^{0.170}-1 = 0.185$. **The ion engine is operating in the near-linear regime of the exponential where propellant is nearly proportional to $\Delta v$; the chemical engine is deep in the exponential regime where it is not.**

*(b) Burn duration for the ion thruster.*

Treating the mass as roughly constant at its mean value $\overline{m} = (2000+1687.4)/2 = 1844\ \mathrm{kg}$:

$$t\approx\frac{\overline{m}\,\Delta v}{F} = \frac{1844(5000)}{0.2} = \frac{9.22\times10^6}{0.2} = 4.61\times10^7\ \mathrm{s}.$$

$$\boxed{t = 4.61\times10^7\ \mathrm{s} = 533\ \mathrm{days} = 1.46\ \mathrm{years}.}$$

*Check by mass flow, which is exact:*

$$\dot m = \frac{F}{v_e} = \frac{0.2}{29{,}420} = 6.798\times10^{-6}\ \mathrm{kg/s}, \qquad t = \frac{312.6}{6.798\times10^{-6}} = 4.60\times10^7\ \mathrm{s} = 532\ \mathrm{days} \quad\checkmark$$

*Why it takes so long, and it is not a defect of this particular thruster.* The acceleration is

$$a = \frac{F}{m}\approx\frac{0.2}{1844} = 1.08\times10^{-4}\ \mathrm{m/s^2} = 11\ \mathrm{micro}\text{-}g.$$

**At eleven millionths of a gravity, accumulating 5 km/s takes a year and a half.** The chemical engine, at perhaps 400 N on the same spacecraft, would do it in

$$t = \frac{1844(5000)}{400} = 23{,}050\ \mathrm{s} = 6.4\ \mathrm{hours}.$$

*The reason is the power constraint, not the thruster.* From $F = 2\eta P/v_e$, producing 0.2 N at $v_e = 29{,}420$ m/s requires

$$P = \frac{Fv_e}{2\eta} = \frac{0.2(29{,}420)}{2(0.70)} = 4203\ \mathrm{W},$$

**4.2 kW for one fifth of a newton.** Scaling to the chemical engine's 400 N would need 8.4 MW of electrical power — **two thousand times more than a spacecraft carries.** The thrust is small because the power is small, and the power is small because solar arrays and reactors are heavy.

*(c) When to choose chemical anyway.*

**A crewed Mars transfer.** The mission's $\Delta v$ is comparable — 3.6 km/s for injection, more for arrival — and the ion option's propellant saving would be enormous. **But the crew's radiation dose and consumables scale directly with trip time**, and a low-thrust spiral out of Earth orbit means months of repeated passes through the Van Allen belts before the interplanetary cruise even begins. **A chemical (or nuclear-thermal) burn of a few minutes puts the spacecraft on its trajectory immediately**, and the propellant mass — however unwelcome — is a cost that can be paid, whereas the radiation dose is a cost that cannot.

*Two other cases where chemical wins, for completeness:*

**Any manoeuvre with a deadline set by orbital mechanics.** A planetary orbit insertion happens at a specific moment during a hyperbolic approach, and it must be completed in minutes or the spacecraft flies past. **Low thrust cannot perform a capture burn at all** — which is why every ion-propelled mission to a planet either uses a chemical engine for insertion or spends months spiralling in from a slow, carefully arranged approach.

**A collision-avoidance or abort manoeuvre.** Anything requiring a response in minutes rather than months.

*The general principle, which is this course's last statement.* **High $I_{sp}$ buys mass; high thrust buys time.** Every propulsion decision comes down to which of those two the mission is short of — and no engine has ever offered both, because $P_{\rm jet} = \tfrac12Fv_e$ and nobody has enough power.

</details>

## Flashback

**From Lesson 4.3 (Hypersonic air-breathing and the scramjet):** A vehicle flies at $M_\infty = 7$ where $T_\infty = 220$ K. (a) Find $T_{0\infty}$. (b) Find the combustor entry temperature for a ramjet ($M_2 = 0.2$) and a scramjet ($M_2 = 2.33$). (c) With a 2400 K limit, find the headroom in each. (d) Place both, and a rocket, on the flight-regime map at this Mach number.

<details>
<summary>Solution</summary>

(a) $$T_{0\infty} = 220\left(1+0.2(49)\right) = 220(10.8) = 2376\ \mathrm{K}.$$

(b) $$T_{2,\rm ram} = \frac{2376}{1+0.2(0.04)} = \frac{2376}{1.008} = 2357\ \mathrm{K},$$

$$T_{2,\rm scram} = \frac{2376}{1+0.2(5.4289)} = \frac{2376}{2.0858} = 1139\ \mathrm{K}.$$

(c) $$\Delta T_{\rm ram} = 2400-2357 = 43\ \mathrm{K}, \qquad \Delta T_{\rm scram} = 2400-1139 = 1261\ \mathrm{K}.$$

**The ramjet has 43 K of headroom — effectively none**, giving $f = 1150(43)/120\times10^6 = 0.00041$ and negligible thrust. **The scramjet has 1261 K**, giving $f = 0.0121$ and a working engine.

(d) *On the flight-regime map at $M = 7$:*

| System | Status at $M = 7$ | $I_{sp}$ |
|---|---|---|
| Turbojet | inoperable (inlet cannot handle it; compressor would melt) | — |
| Ramjet | technically running, producing almost nothing | $\to0$ |
| **Scramjet** | **in its design range** | $\approx2500$ s |
| Rocket | works, indifferent to Mach number | 450 s |

**The scramjet's $I_{sp}$ advantage over the rocket at this Mach number is a factor of about 5.5** — and it comes entirely from not carrying oxidizer.

*The bridge to this lesson, and the closing thought of the course.* Notice that the rocket's entry is the only one with no qualification attached. **It works at $M = 0$ and at $M = 25$, at sea level and in interstellar space, and its performance is the same everywhere.**

**That universality is bought at exactly one price: it carries its oxidizer.** An air-breather's $I_{sp}$ of thousands of seconds is not magic — it is the arithmetic consequence of not counting the 3–15 kg of oxygen per kilogram of fuel that the atmosphere supplied for free.

**And so the whole course reduces to a single accounting question**: what does the vehicle have to carry, and what can it pick up along the way? Air-breathers pick up oxidizer and are therefore confined to the atmosphere and to a Mach band. Rockets carry everything and are therefore free of both constraints and permanently penalized for it. Electric thrusters carry propellant but pick up energy from the Sun, and pay in thrust. Nuclear systems carry their energy in a form dense enough not to matter, and pay in engine mass.

**Four ways of answering one question — and that is the propulsion design space.**

</details>

## Connections

- **Backward:** every lesson. The thrust equation is [1.1](01-01-thrust-momentum-equation.md)'s, the $\sqrt{T_0/\mathcal{M}}$ ceiling [1.2](01-02-compressible-flow-nozzles.md)'s, the propulsive-efficiency trade [2.1](02-01-propulsion-efficiencies-brayton.md)'s, the flight-regime bands Module 2's and [4.3](04-03-hypersonic-airbreathing-scramjet.md)'s, the rocket equation [3.1](03-01-rocket-equation.md)'s, the mission budgets [3.5](03-05-mission-delta-v-budget.md)'s, and the power constraint [4.1](04-01-electric-propulsion.md)'s and [4.2](04-02-nuclear-thermal-advanced.md)'s.
- **Forward:** [`orbital-mechanics`](../../orbital-mechanics/syllabus.md) supplies the $\Delta v$ budgets this course consumes; [`aerodynamics`](../../aerodynamics/syllabus.md) supplies the drag that air-breathing vehicles must overcome and the compressible flow that every engine here runs on; [`reactor-physics`](../../reactor-physics/syllabus.md) is where the nuclear options are actually designed.
- **Sideways:** $P = \tfrac12Fv_e$ making thrust and exhaust velocity reciprocal at fixed power is the **same constraint** as a gearbox trading torque for speed, an amplifier trading gain for bandwidth, and a lens trading aperture for depth of field: a conserved product that no design can beat, only choose a point along. Recognizing which conserved product governs a field — and then asking which side of it the application is short of — is most of what engineering judgement consists of.

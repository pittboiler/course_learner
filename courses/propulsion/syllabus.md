# Propulsion — Syllabus

> Engineering · Tier 2 · ~20 lessons · Prereqs: [engineering-thermodynamics](../engineering-thermodynamics/syllabus.md), [fluid-dynamics](../fluid-dynamics/syllabus.md) · Roadmap id: `propulsion`

## Goal

Learn where thrust comes from and how every practical engine makes it — from the momentum equation, through the converging–diverging nozzle, into the cycle analysis of air-breathers (turbojet, turbofan, turboprop, ramjet) and the rocket equation that governs everything that leaves the atmosphere. You will size nozzles from isentropic relations, read an engine as a thermodynamic cycle and pull out its specific thrust, fuel consumption, and efficiencies, apply Tsiolkovsky's equation to real mission $\Delta v$, and understand why staging and specific impulse dominate rocketry. Deliberately skipped: detailed turbomachinery blade/stage design and deep combustion chemistry (we treat the combustor as a heat-addition box). We end on a taste of electric, nuclear-thermal, and scramjet propulsion — enough to place them in the design space, not to design them.

## Dangerous Checklist

When you finish, you can:

- [ ] Derive the thrust equation for a control volume and explain the momentum term and the pressure-area term separately
- [ ] Apply the isentropic and stagnation relations to compute pressure, temperature, and density ratios from a Mach number
- [ ] Use the area–Mach relation to explain choking and size a converging–diverging nozzle for a target exit Mach
- [ ] Diagnose a nozzle as under-, over-, or perfectly expanded from its pressure ratio and predict shocks or plume behavior
- [ ] Compute the thrust coefficient $C_F$ and characteristic velocity $c^*$ and say what each measures
- [ ] Run an ideal cycle analysis of a turbojet: specific thrust, thrust-specific fuel consumption, and thermal/propulsive/overall efficiency
- [ ] Explain why a high-bypass turbofan beats a turbojet on fuel burn, using propulsive efficiency
- [ ] Estimate an adiabatic flame temperature from a fuel/air heating value and set up a stoichiometric ratio
- [ ] State and apply the Tsiolkovsky rocket equation, and compute mission $\Delta v$ from a mass ratio and specific impulse
- [ ] Explain why staging works and compute the payload gain of a multi-stage vehicle over a single stage
- [ ] Compare a chemical, electric, and nuclear-thermal system on the $I_{sp}$-vs-thrust plane and match each to a mission
- [ ] Explain the operating principle and regime of a ramjet and a scramjet, and why each fails outside its Mach window

## Modules

### Module 1: Thrust and nozzle flow

Build thrust from conservation of momentum, then master the nozzle that turns hot high-pressure gas into a fast jet.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Thrust and the momentum equation | Get the thrust equation from a control volume and read every term | control-volume momentum balance, momentum thrust $\dot m u_e$, pressure thrust $(p_e-p_a)A_e$, uninstalled thrust |
| 1.2 | Compressible flow review: stagnation and isentropic relations | Convert freely between Mach number and property ratios | stagnation (total) properties, isentropic relations, Mach number, speed of sound $a=\sqrt{\gamma R T}$ |
| 1.3 | The area–Mach relation and choking | See why a throat chokes and how area sets Mach number | area–Mach relation $A/A^*$, sonic throat, choked mass flow, converging vs C-D nozzles |
| 1.4 | Nozzle operating regimes: under- and over-expansion | Diagnose a nozzle from its pressure ratio and predict shocks | design pressure ratio, over/under-expansion, oblique/normal shocks, separation, altitude compensation |
| 1.5 | Nozzle performance: thrust coefficient and $c^*$ | Split rocket performance into a chamber part and a nozzle part | thrust coefficient $C_F$, characteristic velocity $c^*$, $F=C_F\,p_0 A_t$, expansion-ratio optimization |

**Boss problem 1:** A converging–diverging nozzle with area ratio $A_e/A^*=4$ expands gas with $\gamma=1.4$ from a large chamber. (a) Find the supersonic exit Mach number from the area–Mach relation. (b) Find the design ratio $p_e/p_0$ of exit to chamber pressure. (c) If the nozzle exhausts to a back pressure equal to $0.10\,p_0$, is it under- or over-expanded, and what happens to the exhaust plume? (d) Write the thrust in the form $F=C_F p_0 A_t$ and identify which term you would raise to gain thrust at high altitude.

### Module 2: Air-breathing engine cycles

Treat each engine as a Brayton-type cycle and extract thrust, fuel burn, and the efficiencies that decide the design.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Propulsion efficiencies and the Brayton foundation | Split engine performance into thermal, propulsive, and overall efficiency | ideal Brayton cycle, thermal efficiency, propulsive efficiency, overall efficiency, specific thrust, TSFC |
| 2.2 | The ideal ramjet | Analyze the simplest air-breather — compression by ram alone | ram compression, no moving parts, ramjet thrust, why it needs supersonic flight, thrust-Mach limits |
| 2.3 | Combustion for propulsion (an introduction) | Model the combustor as heat addition and estimate flame temperature | stoichiometry, fuel/air ratio, heating value, adiabatic flame temperature, heat-addition (Rayleigh) view |
| 2.4 | The turbojet cycle | Run a full ideal turbojet analysis: compressor, burner, turbine, nozzle | station numbering, compressor pressure ratio, turbine-inlet temperature, work matching, specific thrust & TSFC |
| 2.5 | The turbofan and the bypass idea | Explain why bypassing air raises propulsive efficiency and cuts fuel burn | bypass ratio, fan work, specific thrust vs efficiency trade, high- vs low-bypass, noise |
| 2.6 | The turboprop and propeller propulsion | Extend the cycle to a shaft-driven propeller and see its low-speed edge | shaft power, propeller efficiency, disk actuator idea, equivalent power, speed ceiling of props |

**Boss problem 2:** An ideal turbojet flies at Mach $0.85$ where the ambient temperature is $220\,\mathrm{K}$. The compressor pressure ratio is $30$, the turbine-inlet temperature is $1600\,\mathrm{K}$, and the fuel heating value is $43\,\mathrm{MJ/kg}$ (take $\gamma=1.4$, $c_p=1.005\,\mathrm{kJ/kg\,K}$). Working through the stations, find (a) the specific thrust $F/\dot m_a$, (b) the fuel/air ratio and the thrust-specific fuel consumption, and (c) the thermal, propulsive, and overall efficiencies. Then state which single parameter you would change to cut fuel burn, and why it hurts specific thrust.

### Module 3: Rocket propulsion and the rocket equation

Leave the atmosphere: no air to breathe, so the vehicle carries its own reaction mass — and one equation rules the whole enterprise.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The rocket equation | Derive Tsiolkovsky's equation and see the mass ratio's exponential tyranny | reaction mass, effective exhaust velocity, mass ratio, $\Delta v = v_e\ln(m_0/m_f)$, gravity/drag losses |
| 3.2 | Specific impulse and rocket performance | Tie $I_{sp}$, $c^*$, and $C_F$ into one performance picture | specific impulse $I_{sp}$, effective exhaust velocity $v_e=g_0 I_{sp}$, $c^*$ vs $C_F$ split, propellant quality |
| 3.3 | Staging and the mass ratio | Show why dropping dead mass beats one big rocket | serial staging, structural coefficient, payload fraction, optimal $\Delta v$ split, single- vs multi-stage |
| 3.4 | Chemical rockets: liquids and solids | Compare the two workhorse architectures through combustion and the nozzle | liquid bipropellant, solid grain, chamber pressure, combustion temperature, throttling, restart, trade-offs |
| 3.5 | Mission $\Delta v$ and the propulsion budget | Turn a mission into a $\Delta v$ budget and size the propellant | $\Delta v$ budget, orbit-change costs, propellant mass sizing, margins, bridge to orbital mechanics |

**Boss problem 3:** A launch vehicle must deliver a $\Delta v$ of $9.4\,\mathrm{km/s}$. (a) For a single stage with $I_{sp}=350\,\mathrm{s}$ and a structural coefficient of $0.10$ (structure = $10\%$ of stage-plus-propellant mass), show that no positive payload fraction exists. (b) Split the mission evenly across two identical such stages and compute the overall payload fraction. (c) Explain in one paragraph, using the rocket equation, why the two-stage vehicle can carry payload where the single stage cannot.

### Module 4: Advanced propulsion — a taste

Step off the chemical-rocket road: trade thrust for efficiency with electric and nuclear systems, and push air-breathing into the hypersonic regime.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Electric propulsion | Understand how ion and Hall thrusters trade thrust for enormous $I_{sp}$ | electrostatic acceleration, ion & Hall thrusters, power-limited thrust, $I_{sp}$ of thousands of seconds, trip time |
| 4.2 | Nuclear-thermal and advanced in-space concepts | Place nuclear-thermal and other high-$I_{sp}$ concepts in the design space | nuclear-thermal rocket, low molecular weight = high $v_e$, thrust-to-weight, solar-electric, concept survey |
| 4.3 | Hypersonic air-breathing and the scramjet | Explain why combustion must go supersonic above Mach $\sim 6$ | ramjet Mach ceiling, supersonic combustion, scramjet, total-temperature limits, dissociation, Mach window |
| 4.4 | Capstone: the propulsion design space | Match engine to mission across the $I_{sp}$-vs-thrust plane | thrust vs efficiency trade, $I_{sp}$–thrust map, mission matching, air-breathing vs rocket boundary |

**Boss problem 4:** A spacecraft in deep space must make a $\Delta v$ of $5\,\mathrm{km/s}$ starting at $2000\,\mathrm{kg}$. Option A is a chemical thruster with $I_{sp}=320\,\mathrm{s}$; option B is an ion thruster with $I_{sp}=3000\,\mathrm{s}$ but only $0.2\,\mathrm{N}$ of thrust. (a) Compute the propellant mass each option needs. (b) Estimate the burn duration for the ion thruster (treat mass as roughly constant) and comment on why it may take months. (c) State one mission where you would still pick the chemical option despite its far larger propellant mass, and why.

## Sources of truth

- Hill & Peterson, *Mechanics and Thermodynamics of Propulsion* (primary — level, station notation, and cycle analysis)
- Sutton & Biblarz, *Rocket Propulsion Elements* (rocket nozzle, $C_F$/$c^*$, chemical and electric propulsion)
- Anderson, *Modern Compressible Flow* (isentropic relations, area–Mach, shocks, and nozzle regimes)
- Mattingly, *Elements of Propulsion: Gas Turbines and Rockets* (turbojet/turbofan/turboprop cycle detail)

## Notes

- This course rests on [engineering-thermodynamics](../engineering-thermodynamics/syllabus.md): every engine here is a thermodynamic cycle, and the Brayton cycle, stagnation enthalpy, and efficiency definitions come straight from there.
- It rests equally on [fluid-dynamics](../fluid-dynamics/syllabus.md): nozzle flow is compressible gas dynamics, the thrust equation is a control-volume momentum balance, and shocks and choking are fluid phenomena.
- Module 3 bridges forward to `orbital-mechanics`: the $\Delta v$ budget computed here is exactly what maneuvers and transfers there spend. Module 2's intakes and the whole hypersonic discussion connect to `aerodynamics`.
- Combustion is treated as a heat-addition box (Lesson 2.3); readers wanting the chemistry should follow the combustion references — it is deliberately out of scope here.

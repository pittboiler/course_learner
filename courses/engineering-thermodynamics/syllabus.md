# Engineering Thermodynamics — Syllabus

> Engineering · Tier 1 · ~19 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md) · Roadmap id: `engineering-thermodynamics`

## Goal

This course makes you fluent in the engineer's bookkeeping of energy: fix the state of a working fluid, read it off tables or an ideal-gas law, and account for every joule of work and heat crossing a boundary — first with the first law, then with the second law's verdict on what's actually possible. You will size and evaluate the machines that run the physical economy: turbines, compressors, boilers, condensers, and the power and refrigeration cycles built from them. It deliberately skips the statistical/microscopic origin of entropy (that lives in `thermodynamics-physics` and `stat-mech`) and the chemistry of combustion — here heat is just a number that crosses a boundary.

## Dangerous Checklist

When you finish, you can:

- [ ] Draw a system boundary or control volume around a device and list every energy stream crossing it
- [ ] Fix the state of a pure substance from two properties and locate it on $T$–$v$ and $p$–$v$ diagrams
- [ ] Interpolate steam tables and compute quality $x$ inside the vapor dome
- [ ] Decide when the ideal-gas model is safe and estimate its error when it isn't
- [ ] Compute boundary work $\int p\,dV$ and get the sign right for expansion vs. compression
- [ ] Apply the closed-system first law to constant-$V$, constant-$p$, and polytropic processes
- [ ] Write a steady-flow energy balance for a turbine, compressor, pump, nozzle, throttle, or heat exchanger and solve for the unknown
- [ ] State the second law two ways (Kelvin–Planck, Clausius) and explain why they're the same law
- [ ] Compute entropy change, entropy generation, and use $s_2 = s_1$ to find the ideal exit state
- [ ] Evaluate isentropic efficiency of a turbine, compressor, pump, or nozzle
- [ ] Compute the thermal efficiency of a Rankine, Otto, Diesel, or Brayton cycle from its state points
- [ ] Compute the COP of a refrigerator or heat pump and explain why it can exceed 1
- [ ] Read a psychrometric state and compute the exergy (available work) of a stream

## Modules

### Module 1: Properties, Work & Heat

Build the vocabulary of state and the two ways energy crosses a boundary — before any law is invoked, you must be able to say exactly what the fluid *is* and what's flowing.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | System vs. control volume; state & properties | Draw the right boundary and list the properties that fix a state | closed system, control volume, extensive/intensive, state postulate, equilibrium |
| 1.2 | Phase behavior of a pure substance | Locate any state on $T$–$v$ / $p$–$v$ diagrams and name its phase | saturation, vapor dome, critical point, $T$–$v$ and $p$–$v$ diagrams |
| 1.3 | Property tables & quality | Read steam tables and compute properties inside the dome | saturated/superheated tables, quality $x$, linear interpolation |
| 1.4 | The ideal-gas model and its limits | Use $pv=RT$ and know when it lies | $pv=RT$, gas constant $R$, compressibility factor $Z$, reduced properties |
| 1.5 | Work and heat | Compute boundary work and fix heat/work sign conventions | boundary work $\int p\,dV$, sign convention, path dependence, heat vs. work |

**Boss problem 1:** A piston–cylinder holds 2 kg of water at a constant 200 kPa, initially saturated liquid. Heat is added until the temperature reaches 300 °C. Compute the boundary work done by the water. *(Target: $W = p\,m\,(v_2-v_1) \approx 200 \cdot 2 \cdot (1.3162 - 0.001061) \approx 526$ kJ — the fluid crosses the dome and ends superheated.)*

### Module 2: The First Law — Closed & Open Systems

Energy is conserved; the whole art is choosing the boundary and identifying the streams. Master the closed-system balance, then let mass flow across the boundary and pick up the steady-flow devices that make up every power plant.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | First law for closed systems | Balance $Q$, $W$, and $\Delta U$; use internal energy and specific heats | $Q - W = \Delta U$, $u$, $c_v$, $c_p$, $c_p = c_v + R$ |
| 2.2 | Closed-system processes | Solve constant-$V$, constant-$p$, and polytropic processes end to end | isochoric, isobaric, polytropic $pV^n=$const, enthalpy $h$ |
| 2.3 | Mass & energy balance for control volumes | Write the steady-flow energy equation and see why enthalpy appears | conservation of mass, flow work, enthalpy, SFEE |
| 2.4 | Steady-flow devices I: work producers & movers | Analyze turbines, compressors, pumps, and nozzles | turbine, compressor, pump, nozzle, KE/PE terms |
| 2.5 | Steady-flow devices II: no-work devices | Analyze throttles, heat exchangers, and mixing chambers | throttling ($h$=const), heat exchanger, mixing chamber, effectiveness |

**Boss problem 2:** Steam enters an adiabatic turbine at 4 MPa, 400 °C and leaves at 50 kPa with quality $x = 0.90$; mass flow is 5 kg/s. Neglecting kinetic and potential energy, find the power output. *(Target: $h_1 \approx 3213.6$, $h_2 = 340.5 + 0.9(2304.7) \approx 2414.7$ kJ/kg, so $\dot W = 5(3213.6-2414.7) \approx 3.99$ MW.)*

### Module 3: Entropy & the Second Law

The first law says energy is conserved; the second law says direction matters. Introduce entropy as the bookkeeping tool for irreversibility, then use it to define the ideal process and measure how far a real machine falls short.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The second law and the Carnot limit | State the second law two ways and bound any cycle's efficiency | Kelvin–Planck, Clausius, reversibility, Carnot efficiency |
| 3.2 | Entropy and the Clausius inequality | Define entropy and read a $T$–$s$ diagram | $\oint \delta Q/T \le 0$, entropy $s$, $T$–$s$ diagram, area = heat |
| 3.3 | Entropy balance & the $Tds$ relations | Compute entropy change and entropy generation for any process | $Tds = du + p\,dv$, ideal-gas $\Delta s$, entropy generation $S_\text{gen}$ |
| 3.4 | Isentropic processes & efficiency | Use $s_2 = s_1$ to find the ideal exit state and score the real one | isentropic process, isentropic efficiency of turbine/compressor/pump/nozzle |

**Boss problem 3:** For the turbine of Boss Problem 2 (in at 4 MPa, 400 °C; out at 50 kPa), the actual exit quality is 0.90. Compute its isentropic efficiency. *(Target: $s_1 \approx 6.7714$; ideal exit $x_{2s} = (6.7714-1.0912)/6.5019 \approx 0.874$, $h_{2s}\approx 2353.9$; $\eta_T = (3213.6-2414.7)/(3213.6-2353.9) \approx 0.93$.)*

### Module 4: Power & Refrigeration Cycles

Assemble the devices into the cycles that generate the world's electricity and move its heat. Each cycle is a loop of the balances you already know; the payoff is a single number — efficiency or COP — and a diagram that shows where the work goes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The Rankine vapor power cycle | Compute the thermal efficiency of a steam power plant | boiler, turbine, condenser, pump, reheat/superheat (intro) |
| 4.2 | Gas power cycles: Otto & Diesel | Model reciprocating engines and find efficiency vs. compression ratio | air-standard cycle, compression ratio, cutoff ratio, Otto vs. Diesel |
| 4.3 | The Brayton gas-turbine cycle | Analyze a jet/gas-turbine cycle and its pressure-ratio trade-off | compressor–combustor–turbine, pressure ratio, back-work ratio |
| 4.4 | Refrigeration & heat-pump cycles | Compute COP for a vapor-compression refrigerator or heat pump | reversed cycle, COP, evaporator/condenser, refrigerant $p$–$h$ diagram |
| 4.5 | A taste: psychrometrics & exergy | Read a moist-air state and compute a stream's available work | humidity ratio, relative humidity, dew point; exergy / availability, dead state |

**Boss problem 4:** An ideal Rankine cycle runs between a boiler at 8 MPa / 480 °C and a condenser at 10 kPa. Compute its thermal efficiency, including pump work. *(Target: $h_2 \approx 199.9$, $h_3 \approx 3347.5$, $h_4 \approx 2107.5$ kJ/kg; $w_\text{net} = (3347.5-2107.5) - v_f(8000-10) \approx 1231.9$; $\eta_\text{th} = 1231.9/(3347.5-199.9) \approx 0.39$.)*

> **Note (2026-08-04):** Landed at 19 lessons vs. the ~18 target — Module 4 keeps psychrometrics and exergy as a separate closing lesson (4.5) rather than cramming both into the refrigeration lesson. Within the 25% band; no restructuring needed.

## Sources of truth

- **Çengel & Boles, *Thermodynamics: An Engineering Approach*** — for notation, the closed/open-system split, and the steam-table conventions (values quoted above follow its tables).
- **Moran, Shapiro, Boettner & Bailey, *Fundamentals of Engineering Thermodynamics*** — for the control-volume energy balance and the exergy chapter.
- **NIST Chemistry WebBook / IAPWS-IF97** — the authoritative source for water/steam property values when tables disagree at the last digit.

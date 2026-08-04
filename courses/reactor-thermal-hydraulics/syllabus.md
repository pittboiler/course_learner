# Reactor Thermal-Hydraulics — Syllabus

> Engineering · Tier 2 · ~22 lessons · Prereqs: [heat-transfer](../heat-transfer/syllabus.md), [fluid-dynamics](../fluid-dynamics/syllabus.md) · Roadmap id: `reactor-thermal-hydraulics`

## Goal

Neutronics tells you where the power is made; thermal-hydraulics tells you whether you can carry it away before something melts. This course traces one heat packet from a fissioning fuel pellet, out through the gap and cladding, into the coolant, and up the channel — first as single-phase convection, then through boiling and the wall of margin called critical heat flux, and finally back to the reactor as temperature feedback on reactivity. You will build radial pin temperature profiles, size a coolant channel against a departure-from-nucleate-boiling limit, compute the driving head of a natural-circulation loop, and estimate how much decay heat a scrammed core must still shed. Deliberately skipped: full CFD and subchannel codes (this course builds the intuition those automate) and severe-accident / core-melt progression.

## Dangerous Checklist

When you finish, you can:

- [ ] Convert core thermal power into a volumetric heat generation rate and sketch its radial and axial shape
- [ ] Solve conduction with an internal source to get the centerline-to-surface temperature drop in a fuel pin
- [ ] Assemble the fuel–gap–clad–coolant thermal-resistance chain and locate where each degree of temperature is lost
- [ ] Apply hot-channel and hot-spot factors to turn a core average into a worst-case local condition
- [ ] Close a coolant energy balance to find the axial bulk-temperature rise along a channel
- [ ] Pick and apply a convective correlation (Dittus–Boelter and kin) to get the film temperature drop
- [ ] Estimate core pressure drop from friction, form, acceleration, and elevation contributions
- [ ] Read the boiling curve and identify onset of nucleate boiling, subcooled vs. saturated boiling, and the CHF peak
- [ ] Compute flow quality and void fraction and name the two-phase flow regime in a heated channel
- [ ] Evaluate a critical-heat-flux limit and report a DNBR/CHFR thermal margin against a design criterion
- [ ] Compute the buoyancy-driven flow rate of a natural-circulation loop from a balance of driving head and losses
- [ ] Sign and estimate Doppler and moderator/coolant reactivity feedback, and size decay heat after a scram

## Modules

### Module 1: Core power and conduction in the fuel

Follow the heat from where it is born. Turn reactor power into a local source term, then push that heat radially out of a fuel pin through pellet, gap, and cladding — and learn why the peak pin, not the average one, sets the limit.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Power distribution and the volumetric source | Convert core power into a local $q'''$ and its spatial shape | thermal power, linear rating $q'$, volumetric rate $q'''$, radial/axial peaking, cosine flux shape |
| 1.2 | Conduction with a heat source in a fuel pin | Solve for the radial temperature profile inside the pellet | Poisson conduction equation, parabolic $T(r)$, centerline temperature, integral $\int k\,dT$ conductivity |
| 1.3 | The gap and cladding resistances | Add the gap and clad to get the pellet-to-clad-surface drop | gap conductance $h_g$, contact/gas conduction, cylindrical-shell resistance, series thermal circuit |
| 1.4 | Axial temperature profile of a channel | Track fuel, clad, and coolant temperatures up the channel | cosine power profile, bulk-temperature rise, location of peak clad and fuel temperature |
| 1.5 | Hot-channel and hot-spot factors | Turn a core average into a worst-case local condition | nuclear vs. engineering hot-channel factors, enthalpy-rise vs. heat-flux factors, subfactor multiplication |

**Boss problem 1:** A PWR fuel pin runs at a peak linear rating of 40 kW/m with a cosine axial power shape. Using the fuel–gap–clad resistance chain, find the axial location and magnitude of (a) the peak clad-surface temperature and (b) the peak fuel-centerline temperature — and explain why the two peaks occur at *different* elevations along the channel.

### Module 2: Single-phase convection and flow

The coolant is the only thing standing between the fuel and a meltdown. Close its energy balance, get the heat off the wall with a convective correlation, and pay the pumping bill in pressure drop.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Coolant energy balance and bulk temperature | Find how coolant enthalpy and temperature climb the channel | $\dot m c_p \, dT = q'\,dz$, bulk (mixed-mean) temperature, inlet/outlet rise, mass flux $G$ |
| 2.2 | Convective heat transfer and film drop | Get the wall-to-coolant temperature difference | heat transfer coefficient $h$, Nusselt number, Dittus–Boelter, Reynolds/Prandtl, hydraulic diameter |
| 2.3 | Correlations across coolants | Choose a correlation for water, gas, or liquid metal | turbulent-water correlations, low-Pr liquid-metal Nusselt, entrance effects, property evaluation |
| 2.4 | The full radial temperature drop | Chain conduction and convection into one profile | coolant → film → clad → gap → fuel centerline, total $\Delta T$ budget, dominant resistance |
| 2.5 | Pressure drop in the core | Sum the pressure losses a coolant channel demands | friction (Darcy $f$), form/spacer losses, acceleration, elevation head, pumping power |

**Boss problem 2:** Water enters a heated channel at 290 °C and 15 MPa carrying a known mass flux. Given the channel's linear power and geometry, compute the coolant outlet temperature, the peak clad-surface temperature via a Dittus–Boelter film drop, and the total single-phase pressure drop — then state which term of the temperature budget you'd attack first to lower the peak clad temperature.

### Module 3: Two-phase flow, boiling, and critical heat flux

Push the wall hotter and the coolant starts to boil — which helps, until it suddenly stops helping. Read the boiling curve, track vapor through the channel, and find the flux at which the wall dries out and temperature runs away.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The boiling curve and pool-boiling regimes | Map wall superheat to heat flux and name each regime | boiling curve, nucleate/transition/film boiling, CHF peak, Leidenfrost minimum, Nukiyama's experiment |
| 3.2 | Onset of nucleate boiling and subcooled boiling | Locate where boiling begins on a subcooled channel wall | ONB criterion, wall superheat, subcooled vs. saturated boiling, partial and fully developed boiling |
| 3.3 | Quality, void fraction, and slip | Quantify how much vapor is present and how fast it moves | flow (thermodynamic) quality $x$, void fraction $\alpha$, slip ratio, homogeneous vs. slip models |
| 3.4 | Two-phase flow regimes | Identify bubbly → slug → annular flow up a heated channel | flow-regime maps, bubbly/slug/churn/annular, flow-pattern transitions, entrainment |
| 3.5 | Two-phase pressure drop | Estimate the pressure loss a boiling channel demands | two-phase multiplier, homogeneous model, frictional/accelerational/gravitational components |
| 3.6 | Critical heat flux and DNB | Predict the flux that dries the wall and spikes its temperature | departure from nucleate boiling, dryout, CHF correlations, boiling crisis, wall-temperature excursion |

**Boss problem 3:** A BWR channel produces an exit quality of 15%. Working up the channel, estimate the void fraction and identify the flow regime at the exit, add the two-phase frictional pressure drop to the single-phase entry region, and finally compare the local heat flux at the highest-power node to a CHF correlation — reporting whether the channel is safe and by what margin.

### Module 4: Natural circulation, neutronic coupling, and safety margins

Close the loop. Let buoyancy drive the flow when the pumps are gone, feed core temperature back into reactivity, and ask the question the whole course was built to answer: after a pipe breaks and the reactor scrams, can the core still cool itself?

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Natural circulation and driving head | Compute buoyancy-driven flow from a loop temperature difference | thermal driving head $\rho g \beta \Delta T H$, loop momentum balance, hot/cold leg density difference |
| 4.2 | Flow stability | Recognize when a boiling channel's flow goes unstable | Ledinegg (static) instability, N-shaped channel curve, density-wave oscillation intuition |
| 4.3 | Reactivity feedback coefficients | Sign and estimate how temperature changes reactivity | Doppler fuel-temperature coefficient, moderator/coolant density coefficient, void coefficient, reactivity $\rho$ |
| 4.4 | Coupled thermal-hydraulic / neutronic feedback | See how power and temperature settle to a self-regulating point | feedback loop, power defect, quasi-static balance, inherent stability and the sign of feedback |
| 4.5 | Decay heat after shutdown | Size the heat a scrammed core keeps making | fission-product decay, decay-heat fraction vs. time, Wigner–Way estimate, shutdown power curve |
| 4.6 | Loss-of-coolant and thermal margins | Assemble the pieces into a basic LOCA safety picture | LOCA sequence, blowdown/reflood, peak clad temperature limit, defense in depth, margin to CHF and to melt |

**Boss problem 4:** A reactor scrams from full power on loss of forced flow, and a natural-circulation loop of known height and temperature difference must remove the decay heat. Estimate the decay power 100 s after shutdown, compute the natural-circulation mass flow the loop's driving head can sustain against its losses, and decide whether that flow keeps the peak clad temperature below its limit — then say which single change (loop height, coolant inventory, or decay-heat timing) buys the most margin.

## Sources of truth

- Todreas & Kazimi, *Nuclear Systems I* — notation and rigor level for pin conduction, two-phase flow, and CHF.
- Lewis, *Fundamentals of Nuclear Reactor Physics* — for the neutronic-coupling and feedback lessons.
- Todreas & Kazimi, *Nuclear Systems II* (elements of) — decay heat and safety-margin framing.

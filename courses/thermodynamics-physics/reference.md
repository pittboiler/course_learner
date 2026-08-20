# Classical Thermodynamics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Thermodynamics is four laws and a handful of dials. A gas in equilibrium is
described by $P, V, T, N$; the **first law** says energy in equals energy stored
plus energy out; the **second law** says the bookkeeping quantity $S$ never falls
for an isolated system; and the four **potentials** repackage both laws so that
whichever two variables your apparatus holds fixed, equilibrium is a minimum.
Almost every wrong answer in this course is a sign error on $Q$ or $W$, or a
formula applied off the process it was derived on — so the sign-convention block
and the process table below are the two things to check first.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $T$ | absolute temperature, always in kelvin (K) — the label on an equilibrium class | [1.1](lessons/01-01-temperature-zeroth-law.md) |
| $A \sim B$ | "$A$ is in thermal equilibrium with $B$" | [1.1](lessons/01-01-temperature-zeroth-law.md) |
| $P$ | pressure, Pa $=$ N/m² $=$ J/m³ | [1.2](lessons/01-02-state-variables-equations-of-state.md) |
| $V$ | volume, m³ | [1.2](lessons/01-02-state-variables-equations-of-state.md) |
| $n$, $N$ | amount in moles, and number of molecules ($N = nN_A$) | [1.2](lessons/01-02-state-variables-equations-of-state.md) |
| $R$, $k_B$ | gas constant per mole, J/(mol·K); Boltzmann constant per molecule, J/K | [1.2](lessons/01-02-state-variables-equations-of-state.md) |
| $a$, $b$ | van der Waals attraction (Pa·m⁶/mol²) and excluded volume (m³/mol) | [1.2](lessons/01-02-state-variables-equations-of-state.md) |
| $\oint dX = 0$ | round-trip change of a state function — zero, always | [1.2](lessons/01-02-state-variables-equations-of-state.md) |
| $U$ | internal energy, J — the energy the gas actually *has* | [1.3](lessons/01-03-heat-work-first-law.md) |
| $Q$, $W$ | heat absorbed and work done **by** the gas, J — energy *in transit* | [1.3](lessons/01-03-heat-work-first-law.md) |
| $\delta Q$, $\delta W$ | inexact differentials: a sliver of heat/work along a path, **not** $d$ of anything | [1.3](lessons/01-03-heat-work-first-law.md) |
| $C_V$, $C_P$ | heat capacity at fixed volume / fixed pressure, J/K (per mole: J/(mol·K)) | [1.4](lessons/01-04-heat-capacities-pv-processes.md) |
| $\gamma$ | adiabatic index $C_P/C_V$ — dimensionless, $>1$ | [1.4](lessons/01-04-heat-capacities-pv-processes.md) |
| $T_h$, $T_c$ | hot- and cold-reservoir temperatures, K | [2.1](lessons/02-01-heat-engines-carnot-cycle.md) |
| $Q_h$, $Q_c$ | heat drawn from hot / dumped to cold per cycle, J — written as **positive magnitudes** | [2.1](lessons/02-01-heat-engines-carnot-cycle.md) |
| $\eta$ | thermal efficiency $W/Q_h$ — dimensionless fraction between 0 and 1 | [2.1](lessons/02-01-heat-engines-carnot-cycle.md) |
| $\mathrm{COP}$ | coefficient of performance — heat moved per unit work; may exceed 1 | [2.1](lessons/02-01-heat-engines-carnot-cycle.md) |
| $S$ | entropy, J/K — the state function whose increment is $\delta Q_\text{rev}/T$ | [2.3](lessons/02-03-entropy.md) |
| $\Delta S_\text{univ}$ | system plus surroundings, J/K — the quantity the second law bounds | [2.3](lessons/02-03-entropy.md) |
| $H$, $F$, $G$ | enthalpy, Helmholtz free energy, Gibbs free energy — all in J | [3.1](lessons/03-01-thermodynamic-potentials.md) |
| $\left(\frac{\partial X}{\partial Y}\right)_Z$ | derivative of $X$ in $Y$ with $Z$ **held fixed** — the subscript is load-bearing | [3.1](lessons/03-01-thermodynamic-potentials.md) |
| $g$, $s$, $v$ | *per-mole* (or per-kg) Gibbs energy J/mol, entropy J/(mol·K), volume m³/mol | [3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md) |
| $L$ | latent heat, J/mol or J/kg — heat absorbed crossing a phase line at fixed $T,P$ | [3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md) |
| $R_v$ | *specific* gas constant $R/M$, J/(kg·K) — the per-kilogram face of $R$ | [3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md) |
| $\mu$ | chemical potential, J per particle (or J/mol) — energy price of one more particle | [3.4](lessons/03-04-third-law-chemical-potential.md) |
| $\nu_i$ | stoichiometric coefficient of species $i$ in a reaction — dimensionless | [3.4](lessons/03-04-third-law-chemical-potential.md) |

## Definitions

### Thermal equilibrium

Two systems touching through a wall that passes energy but not matter (a
*diathermal* wall), with nothing changing anymore and no net energy flow.

*Introduced:* [1.1](lessons/01-01-temperature-zeroth-law.md)

### Zeroth law

Two systems each in equilibrium with a third are in equilibrium with each other —
which is what lets one thermometer reading stand in for direct contact.

$$A \sim C \ \text{ and } \ B \sim C \ \Longrightarrow\ A \sim B$$

*Introduced:* [1.1](lessons/01-01-temperature-zeroth-law.md)

### Temperature

The number labelling an equilibrium class: equal temperature means mutual
equilibrium and nothing else. Intensive — cutting a body in half leaves it alone.

$$T_A = T_B \iff A \sim B$$

*Introduced:* [1.1](lessons/01-01-temperature-zeroth-law.md)

### Intensive vs. extensive

Clone the system: **extensive** quantities double ($V, N, U, S, C$), **intensive**
ones don't budge ($P, T, \rho, \mu$). Any ratio of two extensives is intensive.

*Introduced:* [1.2](lessons/01-02-state-variables-equations-of-state.md)

### State function vs. path function

A **state function** is fixed by where you are ($P, V, T, N, U, S, H, F, G$); a
**path function** only exists while something flows ($Q$, $W$), so it needs a
process, not a state, before the question even means anything.

$$\oint dX = 0 \quad\text{(state)}, \qquad \oint \delta Q,\ \oint \delta W \neq 0 \ \text{ in general}$$

*Introduced:* [1.2](lessons/01-02-state-variables-equations-of-state.md)

### Equation of state

The one relation tying $P, V, T, N$ together, so a simple system has exactly **two**
free variables — pick two and the rest are forced.

*Introduced:* [1.2](lessons/01-02-state-variables-equations-of-state.md)

### Internal energy

The energy the system actually stores (all the microscopic kinetic and potential
energy). A state function, so $\Delta U$ reads the endpoints only.

$$\Delta U = U_2 - U_1, \qquad \oint dU = 0$$

*Introduced:* [1.3](lessons/01-03-heat-work-first-law.md)

### First law

Energy conservation with two entry doors: whatever heat flows in, minus whatever
work the gas does pushing on the world, is what it keeps.

$$dU = \delta Q - \delta W \qquad (\text{work } \delta W = P\,dV \text{ done \textbf{by} the gas})$$

*Introduced:* [1.3](lessons/01-03-heat-work-first-law.md)

### Quasi-static

Slow enough that the gas stays in equilibrium the whole way, so $P$, $V$, $T$ are
defined at every instant — the licence to write $W = \int P\,dV$ at all.

*Introduced:* [1.3](lessons/01-03-heat-work-first-law.md)

### Heat capacity

Joules of heat per kelvin of temperature rise — but heat is a path quantity, so
the number depends on which process you hold to. Never quote a bare $C$.

$$C = \frac{\delta Q}{dT}, \qquad C_V = \left(\frac{\partial U}{\partial T}\right)_V, \qquad C_P = \left(\frac{\partial H}{\partial T}\right)_P$$

*Introduced:* [1.4](lessons/01-04-heat-capacities-pv-processes.md)

### Adiabatic index

The ratio of the two heat capacities — the exponent that makes the adiabat
steeper than the isotherm.

$$\gamma \equiv \frac{C_P}{C_V} = \tfrac53 \ (\text{monatomic}), \quad \tfrac75 \ (\text{diatomic})$$

*Introduced:* [1.4](lessons/01-04-heat-capacities-pv-processes.md)

### Reservoir

A body so large that transacting heat with it doesn't move its temperature —
infinitely deep pockets, fixed price.

*Introduced:* [2.1](lessons/02-01-heat-engines-carnot-cycle.md)

### Heat engine

A waterwheel in the hot-to-cold heat stream: it takes $Q_h$ from the hot side,
diverts a cut into work, and must dump the rest as $Q_c$.

$$W = Q_h - Q_c, \qquad \eta = \frac{W}{Q_h} = 1 - \frac{Q_c}{Q_h}$$

*Introduced:* [2.1](lessons/02-01-heat-engines-carnot-cycle.md)

### Coefficient of performance

The scorecard for a machine run backwards: heat *moved* per joule of work paid.
Not an efficiency — it routinely exceeds 1 without breaking conservation.

$$\mathrm{COP}_\text{fridge} = \frac{Q_c}{W}, \qquad \mathrm{COP}_\text{heat pump} = \frac{Q_h}{W} = \mathrm{COP}_\text{fridge} + 1$$

*Introduced:* [2.1](lessons/02-01-heat-engines-carnot-cycle.md)

### Reversible

Quasi-static **and** dissipation-free, so running the process backwards retraces
the identical states. Stronger than "can be run in reverse" — every engine can be
cranked backwards, but only reversible ones hit the Carnot bound.

*Introduced:* [2.1](lessons/02-01-heat-engines-carnot-cycle.md)

### Carnot cycle

The reference engine: two isotherms and two adiabats stitched into a closed loop
between $T_h$ and $T_c$. Clockwise, its enclosed $P$–$V$ area is the net work.

1. isothermal expansion at $T_h$ — absorbs $Q_h$
2. adiabatic expansion — cools $T_h \to T_c$, no heat
3. isothermal compression at $T_c$ — rejects $Q_c$
4. adiabatic compression — heats $T_c \to T_h$, no heat

*Introduced:* [2.1](lessons/02-01-heat-engines-carnot-cycle.md)

### Second law (Kelvin–Planck and Clausius)

Two impossibilities that turn out to be one law — deny either and you can build
the other. The phrase "with no other effect" is load-bearing: a plugged-in fridge
*does* move heat uphill, but it leaves work consumed behind it.

> **Kelvin–Planck:** no cyclic process converts heat *entirely* into work with no other effect (no perfect engine).
>
> **Clausius:** no cyclic process moves heat from colder to hotter with no other effect (no perfect fridge).

*Introduced:* [2.2](lessons/02-02-carnot-efficiency-second-law.md)

### Carnot's theorem

Reversibility is the gold standard: no engine beats a reversible one between the
same two reservoirs, and all reversible ones tie — so their shared efficiency can
depend on nothing but the two temperatures.

$$\eta_X \le \eta_\text{rev}, \qquad \eta_{\text{rev},1} = \eta_{\text{rev},2}$$

*Introduced:* [2.2](lessons/02-02-carnot-efficiency-second-law.md)

### Entropy

Heat-over-temperature, accumulated along a **reversible** path. Dividing by $T$ is
what turns the inexact $\delta Q$ into an exact differential — so $S$ is a state
function, and $\Delta S$ depends only on the endpoints.

$$dS = \frac{\delta Q_\text{rev}}{T}, \qquad [S] = \mathrm{J/K}$$

*Introduced:* [2.3](lessons/02-03-entropy.md)

### Clausius inequality

Sum heat-over-temperature around *any* loop and you never get a positive number;
a real, irreversible loop comes up strictly short. This is the second law in one
line, and its reversible equality is why $S$ exists at all.

$$\oint \frac{\delta Q}{T} \le 0 \qquad (=0 \text{ reversible},\ <0 \text{ irreversible})$$

*Introduced:* [2.3](lessons/02-03-entropy.md)

### Natural variables

The pair a potential "wants" to be a function of — the two that appear as
differentials in its own $d(\text{potential})$, and the two you must hold fixed
for its minimum principle to be true.

*Introduced:* [3.1](lessons/03-01-thermodynamic-potentials.md)

### Legendre transform

Swap an independent variable for its conjugate slope by adding or subtracting
"slope times variable" — the same move that carries the Lagrangian to the
Hamiltonian. Trading $S \to T$ subtracts $TS$; trading $V \to P$ adds $PV$.

*Introduced:* [3.1](lessons/03-01-thermodynamic-potentials.md)

### Enthalpy

Internal energy with the atmosphere's push-back work already folded in — which
makes it the heat bucket at constant pressure, $Q_P = \Delta H$.

$$H \equiv U + PV, \qquad dH = T\,dS + V\,dP$$

*Introduced:* [3.1](lessons/03-01-thermodynamic-potentials.md)

### Helmholtz free energy

Internal energy minus the part locked up as $TS$ — the "free" part, i.e. the most
work you can extract isothermally. Minimized at fixed $(T,V)$.

$$F \equiv U - TS, \qquad dF = -S\,dT - P\,dV$$

*Introduced:* [3.1](lessons/03-01-thermodynamic-potentials.md)

### Gibbs free energy

The bench-chemistry potential: temperature and pressure fixed, both the reservoir's
entropy cost and the atmosphere's work already subtracted out. Minimized at fixed
$(T,P)$, so $\Delta G \le 0$ is the spontaneity test.

$$G \equiv H - TS = U + PV - TS, \qquad dG = -S\,dT + V\,dP$$

*Introduced:* [3.1](lessons/03-01-thermodynamic-potentials.md)

### Maxwell relation

An identity you get for free from a potential because its mixed second partials
commute — and it always trades an unmeasurable entropy derivative for a
$P$-$V$-$T$ derivative you can read off a gauge.

$$d\Phi = A\,dx + B\,dy \ \Longrightarrow\ \left(\frac{\partial A}{\partial y}\right)_x = \left(\frac{\partial B}{\partial x}\right)_y$$

*Introduced:* [3.2](lessons/03-02-maxwell-relations.md)

### First-order phase transition

The two phases tie on $g$ but their *first derivatives* jump: different entropy per
mole (hence a latent heat) and different volume per mole. Melting, boiling,
sublimation are all of this type.

$$g_1 = g_2, \qquad \Delta s = s_1 - s_2 \neq 0, \qquad \Delta v = v_1 - v_2 \neq 0$$

*Introduced:* [3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md)

### Latent heat

The heat one mole (or kg) swallows crossing the phase line without changing
temperature — the entropy jump, priced in joules.

$$L = T\,\Delta s$$

*Introduced:* [3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md)

### Coexistence curve

A border on the $P$–$T$ phase diagram where two phases tie on Gibbs energy, so
both can sit there at once. Three borders meet at the **triple point**; the
liquid–gas border stops dead at the **critical point**, beyond which liquid and
gas are indistinguishable.

*Introduced:* [3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md)

### Third law (Nernst)

Cool anything toward absolute zero and its entropy forgets every other variable,
settling on one constant — taken as zero for a perfect crystal. That fixes the
constant the second law left dangling.

$$\lim_{T \to 0} S(T, X) = S_0 \quad \text{independent of } X$$

*Introduced:* [3.4](lessons/03-04-third-law-chemical-potential.md)

### Chemical potential

The energy price of sneaking in one more particle — and, because $G$ is extensive
in $N$ at fixed $T,P$, simply the Gibbs free energy per particle. Particles flow
from high $\mu$ to low $\mu$ and stop when it's equal, exactly as heat does with $T$.

$$\mu \equiv \left(\frac{\partial U}{\partial N}\right)_{S,V} = \left(\frac{\partial G}{\partial N}\right)_{T,P} = \frac{G}{N} = g$$

*Introduced:* [3.4](lessons/03-04-third-law-chemical-potential.md)

## Formulas and rules

### Sign conventions — read this before every problem

**This course uses the physics ("by-gas") convention throughout:**

$$\boxed{\,dU = \delta Q - \delta W\,}, \qquad W = \text{work done \textbf{by} the gas on its surroundings}$$

| Quantity | Positive means | Negative means |
|---|---|---|
| $Q$ | heat flows **into** the system | system releases heat |
| $W$ | gas **expands**, does work on the world ($dV>0$) | gas is **compressed**, work done on it ($dV<0$) |
| $\Delta U$ | system stored energy | system gave energy up |

Translating English into signs — the single most common place to lose a problem:

| The problem says | You write |
|---|---|
| "800 J of work is done **on** the gas" | $W = -800\ \mathrm{J}$ |
| "the gas does 800 J of work" | $W = +800\ \mathrm{J}$ |
| "it releases 500 J of heat" | $Q = -500\ \mathrm{J}$ |
| "it absorbs 500 J of heat" | $Q = +500\ \mathrm{J}$ |

Chemistry texts track work done *on* the system and write $dU = \delta Q + \delta W_\text{on}$,
with $W_\text{on} = -W$. Same physics, opposite sign. Pick one convention and never
mix them inside a problem. **Engine problems are the exception to the sign rule:**
$Q_h$ and $Q_c$ are conventionally written as positive *magnitudes*, with the
directions carried by the words, so $W = Q_h - Q_c$.

*From* [1.3](lessons/01-03-heat-work-first-law.md) *and* [2.1](lessons/02-01-heat-engines-carnot-cycle.md)

### Constants, units and conversions

| Constant | Value | Note |
|---|---|---|
| $R$ | $8.314\ \mathrm{J\,mol^{-1}K^{-1}}$ | gas constant, per mole |
| $k_B$ | $1.38\times10^{-23}\ \mathrm{J/K}$ | Boltzmann constant, per molecule |
| $N_A$ | $6.022\times10^{23}\ \mathrm{mol^{-1}}$ | $R = N_A k_B$, $N = nN_A$ |
| $R_v$ (water vapour) | $R/M = 8.314/0.018 \approx 461\ \mathrm{J\,kg^{-1}K^{-1}}$ | specific gas constant, per kg |
| $1\ \mathrm{atm}$ | $1.013\times10^5\ \mathrm{Pa}$ | |
| $0\ ^\circ\mathrm{C}$ | $273.15\ \mathrm{K}$ | $T(\mathrm{K}) = T(^\circ\mathrm{C}) + 273.15$ |
| $1\ \mathrm{L}$ | $10^{-3}\ \mathrm{m^3}$ | |
| $L_\text{fusion}$ (water) | $3.34\times10^5\ \mathrm{J/kg}$ | at $273\ \mathrm{K}$ |
| $L_\text{vap}$ (water) | $2.26\times10^6\ \mathrm{J/kg}$ | at $373\ \mathrm{K}$ |

Unit identities worth reflexively checking with: $\mathrm{Pa\cdot m^3 = J}$,
$\mathrm{Pa = J/m^3 = N/m^2}$, $[S] = [C] = \mathrm{J/K}$, $[\eta] = [\gamma] = $ dimensionless.
Every $T$ in a ratio ($\eta$, adiabats, entropy) must be in **kelvin**.

*From* [1.1](lessons/01-01-temperature-zeroth-law.md), [1.2](lessons/01-02-state-variables-equations-of-state.md) *and* [3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md)

### Equations of state

$$\text{ideal gas:}\quad PV = Nk_BT = nRT$$
$$\text{van der Waals:}\quad \left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT \ \Longleftrightarrow\ P = \frac{nRT}{V-nb} - \frac{an^2}{V^2}$$

The $nb$ is the room the molecules themselves take up (raises $P$); the $an^2/V^2$ is
their mutual attraction (**lowers** the pressure the gas exerts). Both vanish at
low density, recovering $PV = nRT$. Slices of the $P$–$V$–$T$ surface: isotherm
$P = nRT/V$ (hyperbola), isobar $V \propto T$, isochore $P \propto T$.

*From* [1.2](lessons/01-02-state-variables-equations-of-state.md)

### The four standard processes (ideal gas, quasi-static)

$W$ is work done **by** the gas; $\Delta U = C_V\,\Delta T$ holds in *every* row
(because $U = U(T)$ for an ideal gas), not just the ones where it's written.

| Process | Held fixed | Path | $W = \int P\,dV$ | $Q$ | $\Delta U$ | $\Delta S$ |
|---|---|---|---|---|---|---|
| **Isothermal** | $T$ | $PV = \text{const}$ | $nRT\ln\dfrac{V_2}{V_1}$ | $Q = W$ | $0$ | $nR\ln\dfrac{V_2}{V_1}$ |
| **Isochoric** | $V$ | $P \propto T$ | $0$ | $C_V\,\Delta T$ | $C_V\,\Delta T$ | $C_V\ln\dfrac{T_2}{T_1}$ |
| **Isobaric** | $P$ | $V \propto T$ | $P\,\Delta V = nR\,\Delta T$ | $C_P\,\Delta T$ | $C_V\,\Delta T$ | $C_P\ln\dfrac{T_2}{T_1}$ |
| **Adiabatic** | $Q = 0$ | $PV^\gamma = \text{const}$ | $-\Delta U = \dfrac{P_1V_1 - P_2V_2}{\gamma - 1}$ | $0$ | $C_V\,\Delta T$ | $0$ (if reversible) |

General ideal-gas entropy change between any two states — use it when no row above
applies:

$$\Delta S = C_V \ln\frac{T_2}{T_1} + nR\ln\frac{V_2}{V_1} = C_P\ln\frac{T_2}{T_1} - nR\ln\frac{P_2}{P_1}$$

*From* [1.3](lessons/01-03-heat-work-first-law.md), [1.4](lessons/01-04-heat-capacities-pv-processes.md) *and* [2.3](lessons/02-03-entropy.md)

### Heat capacities and the adiabat

$$C_P - C_V = nR \quad (\text{Mayer, ideal gas}), \qquad \gamma = \frac{C_P}{C_V}, \qquad \frac{nR}{C_V} = \gamma - 1$$

| Gas | $C_V$ | $C_P$ | $\gamma$ |
|---|---|---|---|
| monatomic | $\tfrac32 nR$ | $\tfrac52 nR$ | $5/3 \approx 1.67$ |
| diatomic | $\tfrac52 nR$ | $\tfrac72 nR$ | $7/5 = 1.40$ |

The adiabat, in all three equivalent forms (any two of $P,V,T$ at a time):

$$PV^\gamma = \text{const}, \qquad TV^{\gamma-1} = \text{const}, \qquad TP^{(1-\gamma)/\gamma} = \text{const}$$

Slopes at a shared point: isotherm $\left.\frac{dP}{dV}\right|_T = -P/V$, adiabat
$\left.\frac{dP}{dV}\right|_{Q=0} = -\gamma P/V$ — the adiabat is steeper by exactly $\gamma$,
because an expanding insulated gas also *cools*, so its pressure drops for two
reasons at once.

*From* [1.4](lessons/01-04-heat-capacities-pv-processes.md)

### Cycles, engines and the Carnot bound

$$\oint dU = 0 \ \Longrightarrow\ \oint \delta Q = \oint \delta W = \text{area enclosed on the } P\text{–}V \text{ diagram}$$

$$\eta = \frac{W}{Q_h} = 1 - \frac{Q_c}{Q_h} \ \le\ \eta_\text{Carnot} = 1 - \frac{T_c}{T_h} \qquad (T \text{ in kelvin})$$

For a **reversible** cycle only, the heat ratio collapses to a temperature ratio —
this is the relation entropy is born from:

$$\frac{Q_c}{Q_h} = \frac{T_c}{T_h} \qquad\Longleftrightarrow\qquad \frac{Q_h}{T_h} = \frac{Q_c}{T_c}$$

$$\mathrm{COP}_\text{fridge}^\text{Carnot} = \frac{T_c}{T_h - T_c}, \qquad \mathrm{COP}_\text{heat pump}^\text{Carnot} = \frac{T_h}{T_h - T_c}$$

Cold-side wins: $\partial\eta/\partial T_c = -1/T_h$ against $\partial\eta/\partial T_h = +T_c/T_h^2$, so a
kelvin off $T_c$ buys $T_h/T_c > 1$ times more efficiency than a kelvin onto $T_h$.
On a $T$–$S$ diagram the Carnot cycle is a **rectangle**: $Q_h = T_h\Delta S$ on top,
$Q_c = T_c\Delta S$ on the bottom, area $(T_h - T_c)\Delta S = W$, and $\eta$ falls out by reading it.

*From* [2.1](lessons/02-01-heat-engines-carnot-cycle.md), [2.2](lessons/02-02-carnot-efficiency-second-law.md) *and* [2.3](lessons/02-03-entropy.md)

### Entropy — the results to have cold

$$\Delta S_\text{univ} = \Delta S_\text{sys} + \Delta S_\text{surr} \ge 0 \qquad (=0 \text{ only if reversible})$$

| Situation | $\Delta S$ | Note |
|---|---|---|
| Heat $Q$ into a reservoir at fixed $T$ | $Q/T$ | its $T$ doesn't move, so just divide |
| Isothermal ideal-gas expansion $V_1 \to V_2$ | $nR\ln(V_2/V_1)$ | |
| **Free expansion** into vacuum $V_1 \to V_2$ | $nR\ln(V_2/V_1)$ | same endpoints — yet $Q = 0$ |
| Body of capacity $C$ warmed $T_i \to T_f$ | $C\ln(T_f/T_i)$ | from $\int C\,dT/T$ |
| Two equal-$C$ bodies equilibrating | $C\ln\dfrac{T_f^2}{T_hT_c} > 0$ | $T_f = \tfrac12(T_h + T_c)$ |
| Heat $Q$ conducted $T_h \to T_c$ directly | $Q\left(\dfrac{1}{T_c} - \dfrac{1}{T_h}\right) > 0$ | no engine, pure waste |

**The method for anything irreversible:** ignore the real process. Invent *any*
reversible path with the same endpoints and integrate $\delta Q_\text{rev}/T$ along it for
$\Delta S_\text{sys}$; for $\Delta S_\text{surr}$ use the heat the surroundings *actually* took, $Q_\text{surr}/T$.

**Gouy–Stodola (lost work).** Entropy you needlessly generate is work you can
never get back:

$$W_\text{lost} = T_c\,\Delta S_\text{univ}$$

The equal-$C$ mixing result is positive for any $T_h \neq T_c$ by AM–GM,
$T_f = \tfrac12(T_h+T_c) \ge \sqrt{T_hT_c}$, so $T_f^2 \ge T_hT_c$ and the log is non-negative.

*From* [2.3](lessons/02-03-entropy.md)

### The four potentials

| Potential | Definition | Differential | Natural variables | Minimized at fixed | First derivatives |
|---|---|---|---|---|---|
| $U$ | — | $dU = T\,dS - P\,dV$ | $(S,V)$ | $(S,V)$ | $T = \left(\frac{\partial U}{\partial S}\right)_V$, $P = -\left(\frac{\partial U}{\partial V}\right)_S$ |
| $H$ | $U + PV$ | $dH = T\,dS + V\,dP$ | $(S,P)$ | $(S,P)$ | $T = \left(\frac{\partial H}{\partial S}\right)_P$, $V = \left(\frac{\partial H}{\partial P}\right)_S$ |
| $F$ | $U - TS$ | $dF = -S\,dT - P\,dV$ | $(T,V)$ | $(T,V)$ | $S = -\left(\frac{\partial F}{\partial T}\right)_V$, $P = -\left(\frac{\partial F}{\partial V}\right)_T$ |
| $G$ | $U + PV - TS$ | $dG = -S\,dT + V\,dP$ | $(T,P)$ | $(T,P)$ | $S = -\left(\frac{\partial G}{\partial T}\right)_P$, $V = \left(\frac{\partial G}{\partial P}\right)_T$ |

Physical readings: $Q_P = \Delta H$ (heat at constant pressure); $-\Delta F$ is the maximum
work extractable isothermally; $\Delta G \le 0$ is the spontaneity criterion at fixed $(T,P)$,
which is why chemistry and phase equilibrium both live on $G$. With particle
number free, every differential gains a $+\mu\,dN$ term.

*From* [3.1](lessons/03-01-thermodynamic-potentials.md) *and* [3.4](lessons/03-04-third-law-chemical-potential.md)

### The four Maxwell relations

$$dU:\quad \left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V \qquad\qquad dH:\quad \left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$$
$$dF:\quad \left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V \qquad\qquad dG:\quad \left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$$

The bottom two are the workhorses: entropy derivative on the left, pure $P$-$V$-$T$
on the right. **Sign rule:** the relation's sign is the product of the signs sitting
in front of the two differentials ($dU$: $+T$ and $-P$ give $-$; $dF$: $-S$ and $-P$ give $+$).

**Thermodynamic square.** Corners clockwise from top-left $S, V, T, P$ (*"Study Very
Thoroughly, Physicist"*); edges are the potentials, each flanked by its own two
natural variables — top $U$ ($S,V$), right $F$ ($V,T$), bottom $G$ ($T,P$), left $H$ ($P,S$);
diagonals join the conjugate pairs $(S,T)$ and $(P,V)$. Minus sign for the
horizontal edges $U$ and $G$, plus for the vertical edges $F$ and $H$.

*From* [3.2](lessons/03-02-maxwell-relations.md)

### Turning entropy derivatives into measurable ones

Reflex: a lone $\left(\frac{\partial S}{\partial V}\right)_T$ or $\left(\frac{\partial S}{\partial P}\right)_T$ gets a Maxwell relation applied
immediately. (A $\left(\frac{\partial S}{\partial T}\right)$ is *not* a Maxwell target — that one is a heat
capacity, $C_X = T\left(\frac{\partial S}{\partial T}\right)_X$.) Two general identities that follow, true for **any**
substance:

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial P}{\partial T}\right)_V - P, \qquad \left(\frac{\partial H}{\partial P}\right)_T = V - T\left(\frac{\partial V}{\partial T}\right)_P$$

| Substance | $\left(\frac{\partial U}{\partial V}\right)_T$ | Reading |
|---|---|---|
| ideal gas | $0$ | Joule's law: $U = U(T)$ only; likewise $\left(\frac{\partial H}{\partial P}\right)_T = 0$, so throttling can't cool it |
| van der Waals | $an^2/V^2 > 0$ | pulling attracting molecules apart stores energy |

*From* [3.2](lessons/03-02-maxwell-relations.md)

### Phase boundaries

$$\boxed{\ \frac{dP}{dT} = \frac{\Delta s}{\Delta v} = \frac{L}{T\,\Delta v}\ } \qquad (\text{Clausius–Clapeyron})$$

Per mole or per kilogram — either is fine, provided $L$, $s$, $v$ are all the same
one. Climbing solid → liquid → gas, $\Delta s > 0$, so **the sign of the slope is the
sign of $\Delta v$**: normal substances ($\Delta v > 0$) lean right, water's melting line
($\Delta v < 0$, ice is bulkier than water) leans **left**, which is why squeezing ice melts it.

For a boundary that produces a **gas** only, approximate $\Delta v \approx v_\text{gas} = RT/P$:

$$\frac{1}{P}\frac{dP}{dT} = \frac{L}{RT^2} \quad\Longrightarrow\quad \ln P \approx -\frac{L}{RT} + \text{const}, \qquad P(T) \approx P_0e^{-L/RT}$$

Rearranged for the boiling-point shift caused by a fractional pressure change:

$$dT = \frac{RT^2}{L}\,\frac{dP}{P}$$

*From* [3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md)

### Third law and chemical potential

$$S(T) - S(0) = \int_0^T \frac{C_X(T')}{T'}\,dT' \ \Longrightarrow\ C_X \to 0 \text{ as } T \to 0, \qquad C_X = T\left(\frac{\partial S}{\partial T}\right)_X$$

The integral can only converge if every heat capacity dies at the bottom — so the
classical constant $C_V = \tfrac32 nR$ is simply wrong at low $T$ (a crystal goes as $C \propto T^3$).
And because the entropy curves all merge at $S_0$, each cooling step buys less
than the last: $T = 0$ is unreachable in finitely many steps.

$$dU = T\,dS - P\,dV + \mu\,dN, \qquad dG = -S\,dT + V\,dP + \mu\,dN, \qquad \mu = \frac{G}{N} = g$$

| Equilibrium condition | What has stopped flowing |
|---|---|
| $T_1 = T_2$ | heat |
| $P_1 = P_2$ | volume / mechanical push |
| $\mu_1 = \mu_2$ | particles (also the phase-coexistence condition $g_1 = g_2$) |
| $\sum_i \nu_i\mu_i = 0$ | a chemical reaction |

For an ideal gas, $\mu = \mu^\circ(T) + k_BT\ln(P/P_0)$ — intensive, and negative whenever $P < P_0$.

*From* [3.4](lessons/03-04-third-law-chemical-potential.md)

## Assumed, not taught here

This is a Tier 0 course: it uses the following without deriving them. Every row
points at where the derivation actually lives.

| Fact | Where it's taught |
|---|---|
| The definite integral as area under a curve — the meaning of $W = \int P\,dV$ | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| $\int dx/x = \ln x$, and integrating a separable ODE (the adiabat derivation) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Partial derivatives, and what a "held fixed" subscript does | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Path-dependent vs. path-independent integrals; $\oint dX = 0$ for an exact differential | [calc-refresher 5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md) |
| Equality of mixed partials / the exactness test — the engine of every Maxwell relation | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| First-order expansion $(1+x)^{-1} \approx 1-x$ (the $\Delta T$ comparison in 2.2 P3) | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Logarithm and exponential algebra ($\ln$ of a ratio, solving $\ln P = -L/RT + c$) | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| Mechanical work $\int F\,dx$ — what the piston force $PA$ is doing | [mechanics-refresher 2.1](../mechanics-refresher/lessons/02-01-work-energy.md) |
| The Legendre transform as a general operation (velocity $\to$ momentum) | [analytical-mechanics 3.1](../analytical-mechanics/lessons/03-01-legendre-hamiltons-equations.md) |
| Why $PV = Nk_BT$ holds at all — the microscopic derivation | [stat-mech 1.5](../stat-mech/lessons/01-05-ideal-gas-sackur-tetrode.md) |
| $S = k_B\ln\Omega$ — where entropy *comes from*, and why $S \to 0$ at $T = 0$ | [stat-mech 1.3](../stat-mech/lessons/01-03-entropy-microcanonical.md) |
| Why $C_V = \tfrac32 nR$ monatomic and $\tfrac52 nR$ diatomic (equipartition, and where it fails) | [stat-mech 3.4](../stat-mech/lessons/03-04-equipartition-theorem.md) |
| Where the van der Waals $a$ and $b$ come from microscopically | [stat-mech 5.1](../stat-mech/lessons/05-01-virial-van-der-waals.md) |

## Pitfalls

### Signs and conventions

- Work done *on* the gas is $W < 0$ in this course's by-gas convention — translate the words into a sign **before** substituting. *([1.3](lessons/01-03-heat-work-first-law.md), [1.4](lessons/01-04-heat-capacities-pv-processes.md))*
- If you catch yourself writing $dU = \delta Q + \delta W$ you've switched to the chemistry convention mid-problem; either finish in it consistently or switch back. *([1.3](lessons/01-03-heat-work-first-law.md))*
- Efficiency is $W/Q_h$ — never $W/Q_c$ or $Q_c/Q_h$. You divide by the heat you *paid for*. *([2.1](lessons/02-01-heat-engines-carnot-cycle.md))*
- Every $T$ in $\eta$, an adiabat, or an entropy formula is **absolute**: Celsius produces nonsense, sometimes negative efficiencies. *([2.2](lessons/02-02-carnot-efficiency-second-law.md))*
- In $\Delta v$ and $\Delta s$, keep the same phase labelled "1" top and bottom, or you'll get water's melting line backwards. *([3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md))*
- The Maxwell sign is not decoration — it decides whether energy rises or falls. Rebuild it from the differential's coefficients rather than recalling it. *([3.2](lessons/03-02-maxwell-relations.md))*
- Trading $V$ for $P$ *adds* $PV$; trading $S$ for $T$ *subtracts* $TS$. A potential that hands you a negative $S$ has a flipped transform. *([3.1](lessons/03-01-thermodynamic-potentials.md))*

### State vs. path

- A gas never "contains" heat — there is no function $Q(\text{state})$, which is exactly what the $\delta$ warns you about. Say "heat absorbed *in this process*". *([1.1](lessons/01-01-temperature-zeroth-law.md), [1.2](lessons/01-02-state-variables-equations-of-state.md), [1.3](lessons/01-03-heat-work-first-law.md))*
- Endpoints fix $\Delta U$, $\Delta T$, $\Delta S$ — they do **not** fix $Q$ or $W$. Knowing $\Delta U$ alone can never give you the work. *([1.2](lessons/01-02-state-variables-equations-of-state.md), [1.3](lessons/01-03-heat-work-first-law.md))*
- Temperature is intensive: two 300 K cups poured together give 300 K, not 600 K. Only extensive quantities add. *([1.1](lessons/01-01-temperature-zeroth-law.md), [1.2](lessons/01-02-state-variables-equations-of-state.md))*
- You cannot dial $P$, $V$, and $T$ independently — the equation of state spends one degree of freedom, leaving two. *([1.2](lessons/01-02-state-variables-equations-of-state.md))*
- Maxwell relations need an *exact* differential, so they apply to $U, H, F, G$ and never to $\delta Q$ or $\delta W$. *([3.2](lessons/03-02-maxwell-relations.md))*

### Processes and heat capacities

- $W = P\,\Delta V$ is legal **only** on an isobar; on an isotherm $P$ varies as $1/V$ and you get $nRT\ln(V_2/V_1)$. Ask "is $P$ constant?" before factoring it out. *([1.3](lessons/01-03-heat-work-first-law.md))*
- $Q = C_V\Delta T$ needs $V$ genuinely constant and $Q = C_P\Delta T$ needs $P$ genuinely constant — but $\Delta U = C_V\Delta T$ holds for *any* ideal-gas process. *([1.4](lessons/01-04-heat-capacities-pv-processes.md))*
- Heat capacity is a property of the substance **and the path**; a bare $C$ is missing information worth $nR$ per degree. *([1.4](lessons/01-04-heat-capacities-pv-processes.md))*
- The adiabat is not "a slightly different isotherm": it is steeper by exactly $\gamma$, because expanding without heat also cools the gas. *([1.4](lessons/01-04-heat-capacities-pv-processes.md))*
- The van der Waals $a$-term *lowers* the pressure a real gas exerts; it is added back only to reconstruct $nRT$. *([1.2](lessons/01-02-state-variables-equations-of-state.md))*

### Engines and the second law

- $Q_c = 0$ is forbidden physics, not an engineering target — the Kelvin statement rules it out. *([2.1](lessons/02-01-heat-engines-carnot-cycle.md))*
- "Reversible" means quasi-static *and* dissipation-free, not merely "can be run backwards". Every engine can be cranked in reverse; almost none are reversible. *([2.1](lessons/02-01-heat-engines-carnot-cycle.md))*
- A COP above 1 breaks nothing: you're relocating pre-existing heat, not creating energy. *([2.1](lessons/02-01-heat-engines-carnot-cycle.md))*
- Kelvin and Clausius are not two assumptions — violate either and you can build a violation of the other. *([2.2](lessons/02-02-carnot-efficiency-second-law.md))*
- $\eta = 1 - T_c/T_h$ is a **ceiling**, hit only by a reversible engine; every real one lands strictly below. *([2.2](lessons/02-02-carnot-efficiency-second-law.md))*
- "With no other effect" is the load-bearing phrase: a plugged-in fridge moves heat uphill legally, because it consumed work. *([2.2](lessons/02-02-carnot-efficiency-second-law.md))*

### Entropy

- $Q = 0$ does **not** imply $\Delta S = 0$ — only a *reversible* adiabat has $\Delta S = 0$. Free expansion has $Q = 0$ and $\Delta S > 0$. *([2.3](lessons/02-03-entropy.md))*
- Never integrate the *actual* heat of an irreversible process; invent a reversible path between the same endpoints. (For the surroundings, the heat they really absorbed is fine — a reservoir takes it reversibly.) *([2.3](lessons/02-03-entropy.md))*
- The system's entropy may fall; only $\Delta S_\text{univ}$ is forbidden to. *([2.3](lessons/02-03-entropy.md))*

### Potentials, phases and particles

- A potential is not "the" energy: $F$ and $G$ have the reservoir's entropy cost and the atmosphere's work already netted out. Only $U$ is raw internal energy. *([3.1](lessons/03-01-thermodynamic-potentials.md))*
- Use the potential whose natural variables are the ones actually held fixed — sealed and rigid means $F$, open on the bench means $G$. Pick wrong and the minimum principle is simply false. *([3.1](lessons/03-01-thermodynamic-potentials.md))*
- Computing an energy change almost never needs entropy data — that is the entire point of the Maxwell relations. *([3.2](lessons/03-02-maxwell-relations.md))*
- $g$ is *continuous* across a phase boundary; it's the first derivatives $s$ and $v$ that jump — hence "first-order". *([3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md))*
- The exponential vapour law assumed $\Delta v \approx v_\text{gas} = RT/P$, so it applies to vaporization and sublimation only — never to a melting line. *([3.3](lessons/03-03-phase-transitions-clausius-clapeyron.md))*
- The third law says $S$ becomes *parameter-independent*, and setting that constant to zero is a convention — glasses and disordered crystals keep a residual entropy. *([3.4](lessons/03-04-third-law-chemical-potential.md))*
- $\mu$ can be negative, and particles follow $\mu$, not concentration — they can flow *up* a density gradient if that lowers $\mu$. *([3.4](lessons/03-04-third-law-chemical-potential.md))*

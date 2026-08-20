# Electrochemistry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Electrochemistry is one measured quantity — the cell voltage — read at two depths.
At equilibrium it is thermodynamics: a voltmeter reporting Gibbs energy, via
$\Delta G = -nFE$ and the Nernst equation. With current flowing it is kinetics and
transport: the voltage sags below ideal by **overpotentials** that encode how fast
electrons cross the interface (Butler–Volmer, Tafel) and how fast reactant reaches
it (diffusion layer, Cottrell). Almost every error in this subject is a **sign**
error, so start at [Signs, in one table](#signs-in-one-table) and check yourself
against it before trusting any answer. Basic redox bookkeeping (oxidation numbers,
net ionic equations, molarity) lives on the
[general-chemistry card](../general-chemistry/reference.md) — this card does not
repeat it.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $n$ | electrons transferred per formula unit of reaction — a pure integer read off the balanced equation | [1.1](lessons/01-01-redox-balancing-half-reactions.md) |
| $F$ | Faraday constant, $96485\ \mathrm{C/mol}$ — the charge on one mole of electrons | [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md) |
| $Q$ (coulombs) | charge passed, $Q = It$. **Not** the reaction quotient — same letter, different job | [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md) |
| $\xi$ | extent of reaction (moles of formula units actually reacted) | [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md) |
| $\vert$ , $\Vert$ | in line notation: a phase boundary, and the salt bridge | [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md) |
| $E^\circ$ | standard **reduction** potential of a couple, vs SHE, at unit activity | [1.3](lessons/01-03-electrode-potentials-she-series.md) |
| $E^\circ_\text{cell}$ | standard cell EMF, $E^\circ_\text{cat} - E^\circ_\text{an}$ | [1.3](lessons/01-03-electrode-potentials-she-series.md) |
| $K$ | equilibrium constant of the cell reaction | [1.4](lessons/01-04-cell-emf-gibbs-equilibrium.md) |
| $Q$ (dimensionless) | reaction quotient — products over reactants at the *current* composition | [1.5](lessons/01-05-nernst-equation-concentration-cells.md) |
| $a_i$, $\gamma_i$ | activity of species $i$ and its activity coefficient ($a_i = \gamma_i[i]/c^\circ$) | [1.5](lessons/01-05-nernst-equation-concentration-cells.md) |
| $C_{dl}$ | double-layer capacitance **per unit area**, typically $10\text{–}40\ \mu\mathrm{F/cm^2}$ | [2.1](lessons/02-01-interface-electrical-double-layer.md) |
| $\phi$, $\Delta\phi$ | electric potential in solution, and the drop across the interface | [2.1](lessons/02-01-interface-electrical-double-layer.md) |
| $\kappa^{-1}$ | Debye length — how far into solution the electrode's charge is screened | [2.1](lessons/02-01-interface-electrical-double-layer.md) |
| $i_c$, $i_F$ | charging (non-Faradaic, capacitor) current and Faradaic (reaction) current | [2.1](lessons/02-01-interface-electrical-double-layer.md) |
| $E_\text{eq}$ | the electrode's equilibrium (Nernst) potential — where net current is zero | [2.2](lessons/02-02-activation-exchange-current.md) |
| $j$ | net current density (A/cm²). **Positive = anodic** (net oxidation) | [2.2](lessons/02-02-activation-exchange-current.md) |
| $j_0$ | exchange current density — the balanced two-way traffic at $E_\text{eq}$ | [2.2](lessons/02-02-activation-exchange-current.md) |
| $\alpha_a$, $\alpha_c$ | anodic/cathodic transfer (symmetry) coefficients, dimensionless, $\approx 0.5$ | [2.2](lessons/02-02-activation-exchange-current.md) |
| $\Delta G^\ddagger$ | activation free energy of the electron-transfer step (J/mol) | [2.2](lessons/02-02-activation-exchange-current.md) |
| $\eta$ | overpotential, $E - E_\text{eq}$. $\eta > 0$ anodic, $\eta < 0$ cathodic | [2.3](lessons/02-03-butler-volmer-equation.md) |
| $R_{ct}$ | charge-transfer resistance ($\Omega\,\mathrm{cm^2}$) — the interface's small-signal resistance | [2.3](lessons/02-03-butler-volmer-equation.md) |
| $b$ | Tafel slope, volts **per decade** of current | [2.4](lessons/02-04-overpotential-tafel-analysis.md) |
| $J$ | flux of a species, $\mathrm{mol\,cm^{-2}s^{-1}}$ | [3.1](lessons/03-01-transport-modes-diffusion-layer.md) |
| $D$ | diffusion coefficient (cm²/s) | [3.1](lessons/03-01-transport-modes-diffusion-layer.md) |
| $C^{*}$, $C_s$ | bulk and **surface** concentration of the analyte (mol/cm³) | [3.1](lessons/03-01-transport-modes-diffusion-layer.md) |
| $\delta$ | Nernst diffusion-layer thickness — the effective distance diffusion must bridge | [3.1](lessons/03-01-transport-modes-diffusion-layer.md) |
| $j_L$ | diffusion-limiting current density — the transport ceiling | [3.2](lessons/03-02-diffusion-limited-current-concentration-overpotential.md) |
| $j_k$ | kinetic current — what Butler–Volmer alone would deliver at that potential | [3.3](lessons/03-03-mixed-control-kinetics-transport.md) |
| $R_\Omega$ | area-specific (uncompensated) electrolyte resistance, $\Omega\,\mathrm{cm^2}$ | [3.3](lessons/03-03-mixed-control-kinetics-transport.md) |
| $A$ | electrode area (cm²) | [3.4](lessons/03-04-chronoamperometry-cottrell.md) |
| $v$ | scan rate $\lvert dE/dt\rvert$ (V/s) in voltammetry — also fluid velocity in [3.1](lessons/03-01-transport-modes-diffusion-layer.md) | [3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md) |
| $i_p$, $\Delta E_p$ | voltammetric peak current, and the forward/reverse peak separation | [3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md) |
| $E_{pa}$, $E_{pc}$ | anodic and cathodic peak potentials | [3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md) |
| $E_\text{load}$ | terminal voltage while current flows (below $E_\text{eq}$ for a source) | [4.1](lessons/04-01-batteries-energy-density.md) |
| $\eta_V$ | voltage efficiency, $E_\text{load}/E^\circ$ | [4.2](lessons/04-02-fuel-cells-electrolyzers.md) |
| $E_\text{corr}$, $i_\text{corr}$ | mixed (corrosion) potential and the current at which the metal eats itself | [4.3](lessons/04-03-corrosion-mixed-potential.md) |
| $\varepsilon$ | current efficiency of a plating bath (fraction of charge that became metal) | [4.4](lessons/04-04-electrodeposition-sensors.md) |

## Definitions

### Oxidation state

A bookkeeping charge assigned by pretending every bond is fully ionic. Not a real
charge — a tally whose *change* counts electrons moved. Rising state = oxidized;
falling = reduced.

*Introduced:* [1.1](lessons/01-01-redox-balancing-half-reactions.md)

### Oxidant and reductant

Deliberately backwards-sounding: the **oxidant** is the electron *thief* — it
causes oxidation in its partner and is itself **reduced**. The **reductant** is
oxidized.

*Introduced:* [1.1](lessons/01-01-redox-balancing-half-reactions.md)

### Half-reaction

One side of the electron trade written alone, with the electrons shown explicitly
— as a product (oxidation) or a reactant (reduction). Not just algebra: a cell
physically puts each half in its own beaker.

*Introduced:* [1.1](lessons/01-01-redox-balancing-half-reactions.md)

### Anode and cathode

Named by the **chemistry**, never by the sign. *An Ox, Red Cat.*

$$\text{anode} \equiv \text{where oxidation occurs}, \qquad \text{cathode} \equiv \text{where reduction occurs}$$

Electrons always leave the anode and enter the cathode through the external wire —
in **both** cell types. Only the polarity flips; see
[Signs, in one table](#signs-in-one-table).

*Introduced:* [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md)

### Galvanic cell

A spontaneous reaction wired so its electrons must travel a circuit and do work —
a battery. $E_\text{cell} > 0$, $\Delta G < 0$.

*Introduced:* [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md)

### Electrolytic cell

The same hardware with a power supply pumping electrons uphill against the
reaction's preference — electrolysis, plating, charging. $E_\text{cell} < 0$ as
written, $\Delta G > 0$.

*Introduced:* [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md)

### Salt bridge

A tube of inert electrolyte whose ions drift to cancel the charge each half-cell
builds up. **Ions** cross the bridge (anions toward the anode, cations toward the
cathode); **electrons** never do — they take the wire.

*Introduced:* [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md)

### Cell line notation

Anode on the **left**, cathode on the right, each half written from the electrode
outward toward the bridge:

$$\ce{Zn|Zn^2+||Cu^2+|Cu}$$

*Introduced:* [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md)

### Standard hydrogen electrode (SHE)

The agreed sea level. Platinized Pt in $\ce{H+}$ at unit activity with $\ce{H2}$ at
1 bar, *defined* as exactly zero volts:

$$\ce{2H+ + 2e- <=> H2}, \qquad E^\circ \equiv 0.000\ \mathrm{V}$$

Its zero is a **choice**, not a physical absolute — a voltmeter has two leads and
can only ever report a difference.

*Introduced:* [1.3](lessons/01-03-electrode-potentials-she-series.md)

### Standard reduction potential

How badly a couple wants to be reduced, compared with hydrogen, measured against
the SHE at unit activity. By IUPAC convention **every** tabulated value is written
as a reduction. It is **intensive**: reversing or scaling the half-reaction does
not flip or scale it.

*Introduced:* [1.3](lessons/01-03-electrode-potentials-she-series.md)

### Electrochemical series

The ranked ladder of reduction potentials. More positive = stronger oxidizing
agent (top); more negative = the reverse oxidation runs easily, i.e. a stronger
reducing agent (bottom). Pair any two couples and the **higher one is the
cathode**.

*Introduced:* [1.3](lessons/01-03-electrode-potentials-she-series.md)

### Reference electrode

A practical stand-in for the fussy SHE: a half-cell of accurately known, stable
potential ($\ce{Ag/AgCl}$, saturated calomel). Quote results "vs SHE" by adding its
offset. In a sensor it supplies the fixed half of the measurement — a drifting
reference is the most common failure mode.

*Introduced:* [1.3](lessons/01-03-electrode-potentials-she-series.md), used again in [4.4](lessons/04-04-electrodeposition-sensors.md)

### Cell EMF

The cell's voltage read as energy per unit charge — and therefore the reaction's
Gibbs energy in disguise, $\Delta G = -nFE$. Positive EMF, spontaneous reaction,
same statement.

*Introduced:* [1.4](lessons/01-04-cell-emf-gibbs-equilibrium.md)

### Concentration cell

A cell built from **one** couple at two concentrations. Both electrodes share
$E^\circ$, so $E^\circ_\text{cell} = 0$ and the entire voltage is the Nernst
$\log Q$ term. The drive is entropic (unmixing), and the concentrated side is the
cathode.

*Introduced:* [1.5](lessons/01-05-nernst-equation-concentration-cells.md)

### Electrical double layer

The nanometre-thick charge sandwich at the electrode: excess charge on the metal,
countercharge of ions just outside it. Three pictures, each fixing the last —
**Helmholtz** (one rigid ion sheet), **Gouy–Chapman** (a diffuse thermal cloud),
**Stern** (compact layer in series with diffuse cloud, the working model).

*Introduced:* [2.1](lessons/02-01-interface-electrical-double-layer.md)

### Charging current

Non-Faradaic current that flows purely to re-dress the double-layer capacitor when
the potential moves. It transfers no electrons into a reaction — current at an
electrode is *not* proof of chemistry.

$$i_c = C_{dl}\,A\,\frac{dE}{dt}$$

*Introduced:* [2.1](lessons/02-01-interface-electrical-double-layer.md)

### Ideally polarizable electrode

An electrode with no available reaction over some potential window (clean mercury
in inert electrolyte): a **pure capacitor**, where every electron you supply just
changes its potential.

*Introduced:* [2.1](lessons/02-01-interface-electrical-double-layer.md)

### Exchange current density

The equal-and-opposite one-way current each direction carries at equilibrium.
Zero *net* current, heavy traffic. It measures how **facile** the electron transfer
is on that surface, spans twelve orders of magnitude
($\ce{H+}/\ce{H2}$: $\sim 10^{-3}\ \mathrm{A/cm^2}$ on Pt, $\sim 10^{-12}$ on Hg),
and is purely kinetic — independent of $E^\circ$ and $\Delta G$.

*Introduced:* [2.2](lessons/02-02-activation-exchange-current.md)

### Transfer coefficient

The fraction of an applied potential shift that actually reaches the transition
state and lowers the forward barrier. Geometrically it is *where along the
reaction coordinate the barrier peak sits*: symmetric barrier gives $0.5$, an early
transition state less, a late one more. Not a fudge factor — it carries mechanism.

*Introduced:* [2.2](lessons/02-02-activation-exchange-current.md)

### Overpotential

How far, and in which direction, you have shoved an electrode off the voltage it
would rest at. It is a *difference from equilibrium*, never the electrode potential
itself.

$$\eta \equiv E - E_\text{eq}$$

*Introduced:* [2.2](lessons/02-02-activation-exchange-current.md), formalized in [2.3](lessons/02-03-butler-volmer-equation.md)

### Charge-transfer resistance

The interface's small-signal resistance: near equilibrium the electrode is just an
ohmic resistor, and the constant of proportionality grades the catalyst (small
$R_{ct}$ = fast kinetics). This is the number impedance spectroscopy measures.

$$R_{ct} = \frac{RT}{nF\,j_0}$$

*Introduced:* [2.3](lessons/02-03-butler-volmer-equation.md), reused in [2.4](lessons/02-04-overpotential-tafel-analysis.md)

### Tafel plot

A plot of $\log_{10}\lvert j\rvert$ against $\eta$. Driven hard, each branch is a
straight line: the slope gives $\alpha$, and extrapolating back to $\eta = 0$ gives
$\log_{10} j_0$. Fit only the straight high-field part — never the knee.

*Introduced:* [2.4](lessons/02-04-overpotential-tafel-analysis.md)

### Supporting electrolyte

A large excess of inert salt that carries essentially all the ionic current,
collapsing the field in the bulk so the analyte stops **migrating**. It does not
speed anything up — it *removes a transport mode* so what's left is clean,
modelable diffusion.

*Introduced:* [3.1](lessons/03-01-transport-modes-diffusion-layer.md)

### Nernst diffusion layer

The stagnant skin of thickness $\delta$ next to the electrode across which
concentration ramps (idealized as a straight line) from $C_s$ at the surface to
$C^{*}$ in the bulk. A deliberate fiction: $\delta$ packages all the messy
hydrodynamics into one number. Convection sets it; convection cannot penetrate it.

*Introduced:* [3.1](lessons/03-01-transport-modes-diffusion-layer.md)

### Limiting current density

The current ceiling reached when every arriving molecule reacts instantly, so
$C_s \to 0$ and the concentration ramp cannot get any steeper.

$$j_L = \frac{nFDC^{*}}{\delta}$$

Not a property of the species: it rides on $\delta$, which you control by stirring.

*Introduced:* [3.2](lessons/03-02-diffusion-limited-current-concentration-overpotential.md)

### Concentration overpotential

The voltage penalty for *starving the surface*, not for slow kinetics — the
electrode's Nernst potential is set by the concentration it actually sees. It
contains no $j_0$ and no $\alpha$, and exists even for an infinitely fast
electrode.

$$\eta_\text{conc} = \frac{RT}{nF}\ln\!\left(1 - \frac{j}{j_L}\right)$$

*Introduced:* [3.2](lessons/03-02-diffusion-limited-current-concentration-overpotential.md)

### Polarization curve

The single plot of overpotential (or electrode potential) against current density
that shows, at any current, where your voltage is going: a Tafel rise at low $j$,
an ohmic tilt through the middle, a wall at $j_L$.

*Introduced:* [3.3](lessons/03-03-mixed-control-kinetics-transport.md)

### Cottrell equation

The current after a potential step into diffusion control, in **unstirred**
solution: the depletion layer grows as $\sqrt{\pi D t}$, so the gradient — and the
current — bleeds off as $t^{-1/2}$. A straight plot of $i$ vs $t^{-1/2}$ through
the origin is the fingerprint of pure planar diffusion control.

$$i(t) = nFAC^{*}\sqrt{\frac{D}{\pi t}}$$

*Introduced:* [3.4](lessons/03-04-chronoamperometry-cottrell.md)

### Cyclic voltammetry

Ramp the potential at scan rate $v$ to a switching point and back, plotting current
against **potential**. The forward leg drives the reaction; the reverse leg
interrogates the product it just made. Peaks rise then fall because diffusion
loses to demand (the Cottrell tail riding the ramp).

*Introduced:* [3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md)

### Electrochemical reversibility

A *kinetic* property, not a thermodynamic one: a couple is reversible when
electron transfer is fast enough ($j_0$ large) that the surface stays Nernstian
throughout the experiment. Diagnosed from a voltammogram — see
[Reading a voltammogram](#reading-a-voltammogram).

*Introduced:* [3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md)

### Formal potential

The couple's practical $E^\circ$ under the working conditions, read as the
**midpoint** of a reversible CV's two peaks, $E^{\circ} \approx (E_{pa}+E_{pc})/2$.
Neither peak alone is it — they straddle it.

*Introduced:* [3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md)

### Primary vs secondary cell

**Primary**: runs one way to exhaustion, then discarded. **Secondary**
(rechargeable): the reaction can be driven backwards by an external supply — an
electrolytic step. Discharge pays you, charge costs you, and the round trip is
never free.

*Introduced:* [4.1](lessons/04-01-batteries-energy-density.md)

### C-rate

Discharge current quoted relative to capacity: **1C** empties the cell in an hour,
**2C** in half an hour, **C/5** in five. Higher C-rate means higher current means a
bigger overpotential tax, so more sag.

*Introduced:* [4.1](lessons/04-01-batteries-energy-density.md)

### Specific energy

Energy stored per kilogram (Wh/kg). The **theoretical** value counts only active
materials; a real cell also carries case, separator, electrolyte, and collectors,
so practical energy density lands at roughly a quarter to a half of theoretical.

*Introduced:* [4.1](lessons/04-01-batteries-energy-density.md)

### Thermodynamic efficiency

The fraction of a fuel's total energy that is *available* as work at all:
$\Delta G/\Delta H$. For $\ce{H2}$ it is about $0.83$, and there is **no Carnot
factor** — a fuel cell converts free energy directly rather than through a hot
reservoir.

*Introduced:* [4.2](lessons/04-02-fuel-cells-electrolyzers.md)

### Mixed potential

The single potential an isolated metal floats to when two different reactions run
on the *same* surface with no external wire: the value at which oxidation and
reduction currents exactly balance. It is **not** an equilibrium potential — both
reactions are running off-equilibrium, and it sits between their two Nernst values.

*Introduced:* [4.3](lessons/04-03-corrosion-mixed-potential.md)

### Corrosion current

The common (balanced) current at $E_\text{corr}$ — the rusting rate in disguise,
converted to millimetres per year by Faraday's law. It is the *horizontal*
position of the Evans-diagram crossing; $E_\text{corr}$ (the height) does not set
the rate.

*Introduced:* [4.3](lessons/04-03-corrosion-mixed-potential.md)

### Passivation

Growth of a thin, adherent oxide (Al, Cr, stainless, Ti) that throttles metal
dissolution. On an Evans diagram the anodic branch collapses by orders of
magnitude into a flat **passive** region, dragging the crossing current — and the
corrosion rate — down with it.

*Introduced:* [4.3](lessons/04-03-corrosion-mixed-potential.md)

### Cathodic protection

Force the metal you care about to be a **cathode**. Either bolt on a *more active*
metal (zinc, magnesium) as a **sacrificial anode**, or push electrons onto the
structure from a DC supply (impressed current). You want the eager metal, not the
strong one.

*Introduced:* [4.3](lessons/04-03-corrosion-mixed-potential.md)

### Current efficiency

The fraction of charge that ended up in the intended deposit rather than a side
reaction (usually $\ce{H2}$ evolution). Sets *how much* metal you get; it says
nothing about how evenly.

*Introduced:* [4.4](lessons/04-04-electrodeposition-sensors.md)

### Throwing power

How **uniformly** a bath coats a recessed or complex shape. A geometry-and-additives
problem, independent of the total charge: doubling the current plates more metal,
not a better part.

*Introduced:* [4.4](lessons/04-04-electrodeposition-sensors.md)

### Potentiometric vs amperometric sensing

Two philosophies on one electrode. **Potentiometric**: zero current, measure
potential, Nernst reports **activity**, logarithmically (a pH probe: 59 mV per pH
unit). **Amperometric**: hold the potential on the diffusion-limited plateau,
measure current, which reports **concentration**, linearly ($j_L \propto C^{*}$).

*Introduced:* [4.4](lessons/04-04-electrodeposition-sensors.md)

## Formulas and rules

### Signs, in one table

The single most error-prone thing in the course. The **labels** anode/cathode are
fixed by the chemistry; the **polarity** is fixed by who is driving.

| | Galvanic (spontaneous) | Electrolytic (driven) |
|---|---|---|
| Anode (oxidation) | **negative** terminal | **positive** terminal |
| Cathode (reduction) | **positive** terminal | **negative** terminal |
| Electrons in external wire | anode $\to$ cathode | anode $\to$ cathode (**unchanged**) |
| Ions in the salt bridge | anions $\to$ anode, cations $\to$ cathode | same |
| $E_\text{cell}$ (as written) | $> 0$ | $< 0$ |
| $\Delta G$ | $< 0$ | $> 0$ |
| Line notation | anode left, cathode right | same |
| Device | battery, fuel cell, corroding metal | electrolyzer, plating bath, charging battery |

Four more sign rules that live in the same drawer:

- **Never flip the anode's tabulated $E^\circ$.** Both numbers enter $E^\circ_\text{cell} = E^\circ_\text{cat} - E^\circ_\text{an}$ as printed **reduction** potentials; the subtraction already reverses the anode. Flipping *and* subtracting double-counts.
- **Overpotential:** $\eta = E - E_\text{eq}$. $\eta > 0$ is anodic (drives oxidation, $j > 0$); $\eta < 0$ is cathodic (drives reduction, $j < 0$). In Butler–Volmer the cathodic term carries a minus sign **and** a minus in its exponent — drop either and the curve misses the origin.
- **Losses never help anyone.** A source *loses* voltage to them, $E_\text{load} = E_\text{eq} - \eta_\text{act} - \eta_\text{conc} - iR$; a driven cell *pays* them, $E_\text{applied} = E^\circ + \lvert\eta_\text{act}\rvert + \lvert\eta_\text{ohm}\rvert + \lvert\eta_\text{conc}\rvert$.
- **$\eta_\text{conc}$ as written is negative** for a cathodic process ($\ln$ of something below 1); in the additive loss budget of [3.3](lessons/03-03-mixed-control-kinetics-transport.md) it appears with a leading minus so every term is a positive cost. Decide once whether you are tracking signed potentials or magnitudes, and stay there.

*From* [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md), [1.3](lessons/01-03-electrode-potentials-she-series.md), [2.3](lessons/02-03-butler-volmer-equation.md), [3.3](lessons/03-03-mixed-control-kinetics-transport.md), [4.2](lessons/04-02-fuel-cells-electrolyzers.md)

### Constants and the 298 K shortcuts

| Quantity | Value | Where it shows up |
|---|---|---|
| $F$ | $96485\ \mathrm{C/mol}$ ($= N_A e$) | everywhere |
| $R$ | $8.314\ \mathrm{J\,mol^{-1}K^{-1}}$ | Nernst, Butler–Volmer, Tafel |
| $RT/F$ at 298 K | $0.0257\ \mathrm{V}$ | exponents in Butler–Volmer |
| $2.303\,RT/F$ at 298 K | $0.0592\ \mathrm{V}$ | Nernst decade, Tafel slope, $59/n$ mV |
| $F/RT$ at 298 K | $38.9\ \mathrm{V^{-1}}$ | $\ln K = nFE^\circ/RT \approx 38.9\,nE^\circ$ |
| $e$ (elementary charge) | $1.602\times10^{-19}\ \mathrm{C}$ | electrons per second from a current |
| $\varepsilon_0$ | $8.85\times10^{-12}\ \mathrm{F/m}$ | parallel-plate double layer |
| $1\ \mathrm{Ah}$ | $3600\ \mathrm{C}$ | battery capacity |

**Unit traps this course lives on:** $1\ \mathrm{V} = 1\ \mathrm{J/C}$;
$1\ \mathrm{mM} = 10^{-3}\ \mathrm{mol/L} = 10^{-6}\ \mathrm{mol/cm^3}$ (since
$1\ \mathrm{L} = 1000\ \mathrm{cm^3}$); $1\ \mathrm{cm} = 10^{4}\ \mu\mathrm{m}$;
$\mathrm{V}/(\mathrm{A/cm^2}) = \Omega\,\mathrm{cm^2}$;
$1\ \mathrm{A/cm^2} = 10^{4}\ \mathrm{A/m^2}$.

*From* [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md), [1.4](lessons/01-04-cell-emf-gibbs-equilibrium.md), [2.2](lessons/02-02-activation-exchange-current.md)

### Standard reduction potentials at 298 K

Every couple the lessons quote, plus the reference electrodes and the two
permanganate/dichromate oxidants used in balancing. All written as reductions,
volts vs SHE.

| Half-reaction | $E^\circ$ (V) |
|---|---|
| $\ce{F2 + 2e- -> 2F-}$ | $+2.87$ |
| $\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$ | $+1.51$ |
| $\ce{Au^3+ + 3e- -> Au}$ | $+1.50$ |
| $\ce{Cl2 + 2e- -> 2Cl-}$ | $+1.36$ |
| $\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O}$ | $+1.33$ |
| $\ce{O2 + 4H+ + 4e- -> 2H2O}$ | $+1.23$ |
| $\ce{Ag+ + e- -> Ag}$ | $+0.80$ |
| $\ce{O2 + 2H2O + 4e- -> 4OH-}$ | $+0.40$ |
| $\ce{Cu^2+ + 2e- -> Cu}$ | $+0.34$ |
| saturated calomel electrode (SCE) | $+0.241$ |
| $\ce{Ag/AgCl}$, saturated KCl | $+0.197$ |
| $\ce{2H+ + 2e- -> H2}$ (SHE) | $0.000$ **by definition** |
| $\ce{Pb^2+ + 2e- -> Pb}$ | $-0.13$ |
| $\ce{Sn^2+ + 2e- -> Sn}$ | $-0.14$ |
| $\ce{Ni^2+ + 2e- -> Ni}$ | $-0.25$ |
| $\ce{Fe^2+ + 2e- -> Fe}$ | $-0.44$ |
| $\ce{Zn^2+ + 2e- -> Zn}$ | $-0.76$ |
| $\ce{Mg^2+ + 2e- -> Mg}$ | $-2.37$ |
| $\ce{Li+ + e- -> Li}$ | $-3.04$ |

Read it as a ladder: **higher couple = cathode**, lower couple = anode, and the
metal of the lower couple displaces the ion of the higher one from solution. A
very negative value means a *weak oxidant* and therefore a *strong reductant* —
lithium is the fiercest electron donor here, not the feeblest couple.

*From* [1.3](lessons/01-03-electrode-potentials-she-series.md), also used by [1.4](lessons/01-04-cell-emf-gibbs-equilibrium.md), [4.2](lessons/04-02-fuel-cells-electrolyzers.md), [4.3](lessons/04-03-corrosion-mixed-potential.md)

### Balancing half-reactions

Oxidation-state rules, applied top-down (earlier rules win ties):

1. free element $= 0$; 2. monatomic ion $=$ its charge; 3. F always $-1$, other
halogens $-1$ except with O or a heavier halogen; 4. O is $-2$ (peroxide $-1$,
superoxide $-\tfrac12$, $\ce{OF2}$ positive); 5. H is $+1$ with nonmetals, $-1$
with metals; 6. **the states must sum to the species' total charge** — this is the
workhorse that pins down whatever is left.

The algorithm, **in acid**, for each half:

1. balance the element being oxidized/reduced → 2. balance O with $\ce{H2O}$ →
3. balance H with $\ce{H+}$ → 4. balance charge with $\ce{e-}$ on the more-positive
side → 5. scale both halves to a common electron count → 6. add and cancel.

**In base:** do the whole acid balance first, then add as many $\ce{OH-}$ to
**both** sides as there are $\ce{H+}$, combine $\ce{H+ + OH- -> H2O}$, and cancel
duplicate waters.

Three checks, always: **mass**, **charge**, **electrons fully cancelled**.

*From* [1.1](lessons/01-01-redox-balancing-half-reactions.md); the oxidation-number concept itself is on the [general-chemistry card](../general-chemistry/reference.md#oxidation-number)

### Faraday's laws and charge bookkeeping

Charge in, moles out. Everything electrolytic is one of these rearranged.

$$Q = nF\xi, \qquad Q = I\,t, \qquad m = \frac{Q}{nF}\,M = \frac{I\,t\,M}{nF}$$

With a plating bath's current efficiency $\varepsilon \le 1$:
$m = \varepsilon\,ItM/(nF)$. Note the **voltage never enters** — Faraday ties moles
to charge alone; voltage only sets how much energy those electrons carry.

*From* [1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md), [4.2](lessons/04-02-fuel-cells-electrolyzers.md), [4.4](lessons/04-04-electrodeposition-sensors.md)

### Voltage, Gibbs energy, and K

One number wearing three costumes.

$$E^\circ_\text{cell} = E^\circ_\text{cathode} - E^\circ_\text{anode}, \qquad \Delta G = -nFE, \qquad \Delta G^\circ = -nFE^\circ_\text{cell}$$

$$E^\circ_\text{cell} > 0 \iff \Delta G^\circ < 0 \iff \text{spontaneous as written}$$

$$\ln K = \frac{nFE^\circ_\text{cell}}{RT}, \qquad \log_{10} K = \frac{n E^\circ_\text{cell}}{0.0592} \ \ (298\ \mathrm{K})$$

Temperature dependence, thermodynamics without a calorimeter:

$$\left(\frac{\partial E^\circ_\text{cell}}{\partial T}\right)_p = \frac{\Delta S^\circ}{nF}, \qquad \Delta H^\circ = \Delta G^\circ + T\Delta S^\circ$$

Scaling: $E^\circ$ is **intensive** (volts = energy per charge) and never scales;
$\Delta G^\circ$ is **extensive** and scales with $n$. Because $nF/RT \approx 38.9n$
per volt, one volt on a one-electron cell already means $K \approx 10^{17}$ — small
voltages are not "barely spontaneous."

*From* [1.4](lessons/01-04-cell-emf-gibbs-equilibrium.md), used again in [4.1](lessons/04-01-batteries-energy-density.md)

### The Nernst equation

Le Châtelier written in volts.

$$E = E^\circ - \frac{RT}{nF}\ln Q \qquad\Longrightarrow\qquad E = E^\circ - \frac{0.0592}{n}\log_{10} Q \ \ (298\ \mathrm{K})$$

- $Q > 1$ (product-heavy) pulls $E$ **below** $E^\circ$; $Q < 1$ pushes it above.
- At equilibrium $Q = K$ and $E = 0$ — a dead battery — which regenerates $\ln K = nFE^\circ/RT$.
- **What goes into $Q$:** activities. Solutes $a_i = \gamma_i[i]/c^\circ$ (this course takes $\gamma_i \approx 1$); gases $a_i = P_i/P^\circ$ with $P^\circ = 1$ bar; **pure solids and the solvent have $a = 1$** and never appear.
- Keep $n$ and $Q$ from the *same* balanced equation — rescaling changes both, and the changes cancel.

Three standard specializations:

$$\text{pH electrode:}\quad E = -0.0592\,\mathrm{pH} \quad (\approx -59\ \mathrm{mV\ per\ pH\ unit})$$
$$\text{ion-selective electrode:}\quad E = \text{const} + \frac{0.0592}{z_i}\log_{10} a_i$$
$$\text{concentration cell:}\quad E = \frac{0.0592}{n}\log_{10}\frac{C_\text{high}}{C_\text{low}}, \qquad E^\circ_\text{cell} = 0$$

*From* [1.5](lessons/01-05-nernst-equation-concentration-cells.md), [4.4](lessons/04-04-electrodeposition-sensors.md)

### The interface as a circuit

The skeleton every kinetic model hangs on: the double-layer **capacitor** in
parallel with the **reaction** path, all in series with the electrolyte resistance.

$$i = \underbrace{C_{dl}A\,\frac{dE}{dt}}_{\text{non-Faradaic}} + \underbrace{i_F}_{\text{Faradaic}}, \qquad \frac{1}{C_{dl}} = \frac{1}{C_H} + \frac{1}{C_{GC}} \ \ (\text{Stern, in series})$$

| Element | Formula | Reads out |
|---|---|---|
| double-layer capacitance | $C/A = \varepsilon\varepsilon_0/d$, measured $10\text{–}40\ \mu\mathrm{F/cm^2}$ | interfacial area, adsorption |
| charge-transfer resistance | $R_{ct} = RT/(nFj_0)$ | catalytic activity (small = fast) |
| uncompensated resistance | $R_\Omega$ ($\Omega\,\mathrm{cm^2}$), $\eta_\text{ohmic} = jR_\Omega$ | electrolyte + collectors |

Capacitors in series are dominated by the **smaller** one: in dilute solution the
thick diffuse layer wins; flood the cell with supporting electrolyte and the Debye
length shrinks as $1/\sqrt{c}$, the diffuse term collapses, and the fixed compact
$C_H$ takes over. The interfacial field is brutal — a fraction of a volt across a
nanometre is $10^{8}\text{–}10^{9}\ \mathrm{V/m}$, which is *why* a 100 mV nudge can
change a rate sevenfold. (This $R_{ct}$-and-$C_{dl}$ pair is what electrochemical
impedance spectroscopy separates; EIS itself is named as a next step in
[4.4](lessons/04-04-electrodeposition-sensors.md), not developed in this course.)

*From* [2.1](lessons/02-01-interface-electrical-double-layer.md), [2.3](lessons/02-03-butler-volmer-equation.md), [3.3](lessons/03-03-mixed-control-kinetics-transport.md)

### Butler–Volmer and its two limits

Arrhenius kinetics with the barrier tilted by potential. Barrier and partial
currents first:

$$\Delta G^\ddagger_a(\eta) = \Delta G^\ddagger_a(0) - \alpha_a F\eta, \qquad \Delta G^\ddagger_c(\eta) = \Delta G^\ddagger_c(0) + \alpha_c F\eta$$
$$j_a = j_0\,e^{\,\alpha_a F\eta/RT}, \qquad \lvert j_c\rvert = j_0\,e^{-\alpha_c F\eta/RT}$$

Their difference is the master law:

$$\boxed{\,j = j_0\left[e^{\,\alpha_a F\eta/RT} - e^{-\alpha_c F\eta/RT}\right]\,}$$

**What it assumes** (and therefore where it fails): reactant is never starved, so
the surface concentration equals the bulk — mass transport is *not* limiting; and a
**single elementary electron-transfer step** is rate-determining. Once demand
outruns diffusion the real current plateaus at $j_L$ instead of exploding. Also
$\alpha_a + \alpha_c = 1$ for a one-electron step (written $= n$ in
[2.4](lessons/02-04-overpotential-tafel-analysis.md) for an $n$-electron one-step
process).

| Limit | Condition | Result |
|---|---|---|
| **Tafel (high field)** | $\lvert\eta\rvert \gtrsim 50\text{–}100\ \mathrm{mV}$ | $j \approx j_0 e^{\alpha_a F\eta/RT}$, i.e. $\eta = a + b\log_{10}\lvert j\rvert$ |
| **Linear (low field)** | $\lvert\eta\rvert$ a few mV | $j \approx j_0\,nF\eta/RT$, i.e. $\eta = R_{ct}\,j$ |
| **In between** | neither | only the full equation is honest |

$$b = \frac{2.303\,RT}{\alpha F} = \frac{0.0592}{\alpha}\ \mathrm{V/decade}\ (298\ \mathrm{K}), \qquad a = -b\log_{10} j_0, \qquad \alpha = \frac{0.0592}{b}$$

$$\eta = b\,\log_{10}\frac{j}{j_0} \quad\text{(inverting the Tafel line)}, \qquad R_{ct} = \frac{RT}{nFj_0}$$

| $\alpha$ | Tafel slope $b$ at 298 K |
|---|---|
| $0.40$ | $148\ \mathrm{mV/dec}$ |
| $0.5$ (symmetric barrier) | $118\ \mathrm{mV/dec}$ |
| $0.74$ | $80\ \mathrm{mV/dec}$ |
| $1.0$ | $59\ \mathrm{mV/dec}$ |

A measured slope of 118 vs 60 vs 40 mV/dec is a **mechanism clue** — how many
electrons move in the rate-determining step — not a constant of nature. On the
conventional plot ($\log\lvert j\rvert$ vertical, $\eta$ horizontal) the visible
slope is $1/b$, not $b$.

*From* [2.2](lessons/02-02-activation-exchange-current.md), [2.3](lessons/02-03-butler-volmer-equation.md), [2.4](lessons/02-04-overpotential-tafel-analysis.md)

### Mass transport

$$J = \underbrace{-D\frac{dC}{dx}}_{\text{diffusion}} \underbrace{-\ \frac{zF}{RT}DC\frac{d\phi}{dx}}_{\text{migration}} + \underbrace{Cv}_{\text{convection}}$$

Supporting electrolyte kills the migration term for the analyte; a quiescent cell
kills convection at the surface. What survives is **Fick's first law**,
$J = -D\,dC/dx$, linearized across the Nernst layer:

$$\lvert j\rvert = \frac{nFD\,(C^{*} - C_s)}{\delta}, \qquad j_L = \frac{nFDC^{*}}{\delta}, \qquad \frac{j}{j_L} = 1 - \frac{C_s}{C^{*}}$$

$$\eta_\text{conc} = \frac{RT}{nF}\ln\!\left(1 - \frac{j}{j_L}\right) \quad\longrightarrow\ -\infty \ \text{ as } j \to j_L$$

Three levers on the ceiling: $j_L \propto C^{*}$ (the analytical workhorse — plateau
height reads concentration), $j_L \propto D$, and $j_L \propto 1/\delta$ (stir
harder). Near the wall each factor of ten closer to $j_L$ costs a fixed
$2.303RT/nF \approx (59/n)\ \mathrm{mV}$ — the same constant as the Tafel slope,
now doing transport work.

**Unstirred, after a potential step** (Fick's second law,
$\partial C/\partial t = D\,\partial^2 C/\partial x^2$, with $C_s = 0$):

$$\delta(t) = \sqrt{\pi D t}, \qquad i(t) = nFAC^{*}\sqrt{\frac{D}{\pi t}} \quad\text{(Cottrell)}, \qquad D = \pi\left(\frac{m}{nFAC^{*}}\right)^2$$

with $m$ the slope of $i$ vs $t^{-1/2}$. Diffusion spreads as $\sqrt{t}$, never as
$t$; a planar electrode in still solution therefore **never** reaches steady state.
Steady state needs convection (a pinned $\delta$) or a microelectrode.

*From* [3.1](lessons/03-01-transport-modes-diffusion-layer.md), [3.2](lessons/03-02-diffusion-limited-current-concentration-overpotential.md), [3.4](lessons/03-04-chronoamperometry-cottrell.md)

### The three overpotentials

They are **in series**, so they add — every electron pays all three tolls. The
"dominant" loss is just the biggest addend.

$$\eta_\text{total} = \eta_\text{act} + \eta_\text{conc} + \eta_\text{ohmic}$$

| Term | Formula | Grows with $j$ as | Limited by |
|---|---|---|---|
| activation | $\eta_\text{act} = b\log_{10}(j/j_0)$ | logarithmically | $j_0$, $\alpha$ (kinetics) |
| ohmic | $\eta_\text{ohmic} = jR_\Omega$ | linearly | electrolyte resistance |
| concentration | $\eta_\text{conc} = -\dfrac{RT}{nF}\ln(1 - j/j_L)$ | diverges at $j_L$ | $j_L = nFDC^{*}/\delta$ |

And the current itself, kinetics and transport as series conductances (the
Koutecký–Levich flavour):

$$\frac{1}{j} = \frac{1}{j_k} + \frac{1}{j_L}$$

so $j$ is always **below the smaller** of $j_k$ and $j_L$ — the slower step is the
bottleneck. $j_k$ grows exponentially with $\eta$; $j_L$ is roughly potential
independent, which is why the polarization curve eventually flattens. Control hands
over at $\lvert\eta_\text{cross}\rvert = \frac{RT}{\alpha F}\ln(j_L/j_0)$.
Always $iR$-compensate before fitting a Tafel slope.

*From* [3.3](lessons/03-03-mixed-control-kinetics-transport.md), [3.2](lessons/03-02-diffusion-limited-current-concentration-overpotential.md)

### Reading a voltammogram

$$i_p = (2.69\times10^{5})\,n^{3/2}A\,D^{1/2}C^{*}v^{1/2} \quad \text{(Randles–Ševčík, 298 K, } i_p \text{ in A)}$$

with $A$ in cm², $D$ in cm²/s, $C^{*}$ in mol/cm³, $v$ in V/s. Strip the constants
and the two signatures are $i_p \propto \sqrt{v}$ and $i_p \propto C^{*}\sqrt{D}$.

$$\Delta E_p = E_{pa} - E_{pc} \approx \frac{59}{n}\ \mathrm{mV} \ \text{(reversible)}, \qquad E^{\circ} \approx \frac{E_{pa}+E_{pc}}{2}$$

| Diagnostic | Reversible (large $j_0$) | Quasi-/irreversible (small $j_0$) |
|---|---|---|
| $\Delta E_p$ | $\approx 59/n$ mV | $> 59/n$ mV |
| $\Delta E_p$ vs scan rate | constant | **grows** with $v$ |
| $i_{pa}/i_{pc}$ | $\approx 1$ | $\neq 1$, or the reverse peak vanishes |
| $i_p$ vs $v$ | $\propto \sqrt{v}$ if freely diffusing; $\propto v$ if surface-adsorbed | same test applies |

A missing reverse peak means the product reacted away chemically before you swept
back. Subtract the non-Faradaic charging background ($i_c = C_{dl}A\,dE/dt$, the
flat box) before reading peak heights.

*From* [3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md), background from [2.1](lessons/02-01-interface-electrical-double-layer.md)

### Batteries

$$w_\text{theo} = \frac{nFE}{\sum M}\ \left[\mathrm{J/kg}\right], \qquad w_\text{theo}[\mathrm{Wh/kg}] = \frac{nFE}{3600\sum M}$$

with $\sum M$ the summed molar masses (kg/mol) of the **active materials** only.
Multiply by a packaging factor of $\approx 0.25\text{–}0.5$ for a real cell.

$$E_\text{load} = E_\text{eq} - \eta_\text{act} - \eta_\text{conc} - iR, \qquad \text{energy} = E_\text{load}\times Q, \qquad \eta_V = \frac{E_\text{load}}{E_\text{eq}}$$

Heat dissipated inside the cell is (total overpotential) $\times\ i$. Capacity is
**charge** (Ah), not energy — energy needs the voltage. The end-of-discharge
*cliff* is the concentration term: as the bulk depletes, $j_L$ falls, the fixed
draw becomes a larger fraction of it, and $\eta_\text{conc}$ runs away.

*From* [4.1](lessons/04-01-batteries-energy-density.md)

### Fuel cells and electrolyzers

$$\ce{H2 + 1/2 O2 -> H2O}, \qquad E^\circ = 1.23\ \mathrm{V},\ n = 2, \qquad \Delta G^\circ = -237,\ \Delta H^\circ = -286\ \mathrm{kJ/mol}$$
$$\text{anode: } \ce{H2 -> 2H+ + 2e-}, \qquad \text{cathode: } \ce{O2 + 4H+ + 4e- -> 2H2O}$$

$$\eta_\text{thermo} = \frac{\Delta G}{\Delta H} = \frac{-nFE^\circ}{\Delta H} \approx 0.83, \qquad \eta_V = \frac{E_\text{load}}{E^\circ}, \qquad \eta_\text{cell} = \eta_\text{thermo}\,\eta_V\,\eta_\text{fuel}$$

$$n_{\ce{H2}} = \frac{Q}{nF} = \frac{It}{nF}, \qquad E_\text{applied} = E^\circ + \sum\lvert\eta\rvert > 1.23\ \mathrm{V}, \qquad \eta_\text{round-trip} = \frac{E_\text{fc}}{E_\text{ez}}$$

**No Carnot factor** — a fuel cell never routes energy through a hot reservoir.
Divide by the reversible $1.23\ \mathrm{V}$, not the thermoneutral $1.48\ \mathrm{V}$
(that one corresponds to $\Delta H$ and would double-count $\eta_\text{thermo}$).
The dominant loss is the sluggish oxygen-reduction activation overpotential — its
$j_0$ is tiny.

*From* [4.2](lessons/04-02-fuel-cells-electrolyzers.md)

### Corrosion

Mixed-potential theory: with no external wire, no net current leaves the metal, so

$$\lvert i_a(E_\text{corr})\rvert = \lvert i_c(E_\text{corr})\rvert \equiv i_\text{corr}$$

On an **Evans diagram** ($E$ vertical, $\log\lvert i\rvert$ horizontal), the rising
anodic Tafel line and the falling cathodic one cross at exactly
$(\log i_\text{corr},\, E_\text{corr})$ — solve the two line equations
simultaneously. The usual cathodic partners are $\ce{2H+ + 2e- -> H2}$ (acid) and
$\ce{O2 + 2H2O + 4e- -> 4OH-}$ (neutral, aerated) — which is why rusting needs
**both water and air**, and why oxygen supply, not eager iron, usually paces it.

$$\text{CR} = \frac{i_\text{corr}M}{nF\rho}, \qquad \text{CR}\,[\mathrm{mm/yr}] = 3.27\times10^{-3}\,i_\text{corr}[\mu\mathrm{A/cm^2}]\,\frac{M/n}{\rho}$$

with $M$ in g/mol, $\rho$ in g/cm³; one year is $3.156\times10^{7}\ \mathrm{s}$.

*From* [4.3](lessons/04-03-corrosion-mixed-potential.md)

### Deposition and sensing

$$m = \varepsilon\,\frac{ItM}{nF} \qquad \text{(plating, electrorefining, electroforming)}$$

$$\text{potentiometric: } E = \text{const} + \frac{0.0592}{z_i}\log_{10} a_i \qquad \text{amperometric: } j_L = \frac{nFDC^{*}}{\delta} \propto C^{*}$$

Calibrating an amperometric sensor absorbs the whole prefactor $nFD/\delta$ in one
shot, so you never need $D$ or $\delta$ separately — as long as temperature,
membrane, and stirring hold steady between calibration and measurement.

*From* [4.4](lessons/04-04-electrodeposition-sensors.md)

## Assumed, not taught here

Tier 2, so the list is short — but each row is a fact this course *uses* without
deriving.

| Fact | Where it's taught |
|---|---|
| Oxidation numbers, net ionic equations, molarity, the reactivity series in words | [general-chemistry card](../general-chemistry/reference.md#oxidation-number), [general-chemistry 2.3](../general-chemistry/lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md), [4.4](../general-chemistry/lessons/04-04-taste-of-electrochemistry.md) |
| $\Delta G$ as maximum non-expansion work; $\Delta G = \Delta H - T\Delta S$; $(\partial\Delta G/\partial T)_p = -\Delta S$ | [physical-chemistry 1.3](../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md) |
| $\Delta G = \Delta G^\circ + RT\ln Q$ and $\Delta G^\circ = -RT\ln K$ | [physical-chemistry 2.6](../physical-chemistry/lessons/02-06-chemical-equilibrium-constant.md), [general-chemistry 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| Activity, activity coefficients, standard states — what $Q$ is *really* built from | [physical-chemistry 1.6](../physical-chemistry/lessons/01-06-fugacity-activity.md) |
| Chemical potential (why a depleted surface sits at a different potential) | [physical-chemistry 1.5](../physical-chemistry/lessons/01-05-chemical-potential.md) |
| Arrhenius rate law, transition-state theory, the barrier $\Delta G^\ddagger$ | [physical-chemistry 3.4](../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) |
| Enthalpy of reaction, $\Delta H^\circ = -286\ \mathrm{kJ/mol}$ for liquid water | [physical-chemistry 1.1](../physical-chemistry/lessons/01-01-first-law-enthalpy.md), [general-chemistry 3.3](../general-chemistry/lessons/03-03-hess-law-enthalpies-formation.md) |
| The Carnot limit a fuel cell is *not* subject to | [engineering-thermodynamics 3.1](../engineering-thermodynamics/lessons/03-01-second-law-carnot-limit.md) |
| $q = CV$ and the parallel-plate result $C/A = \varepsilon\varepsilon_0/d$ | [em-refresher 2.1](../em-refresher/lessons/02-01-capacitance.md) |
| Ohm's law, series resistance, the $iR$ drop | [circuits 1.2](../circuits/lessons/01-02-ohms-law-equivalent-resistance.md) |
| Impedance and phasors (the language EIS is written in; EIS itself is a next step, not covered) | [circuits 4.2](../circuits/lessons/04-02-impedance-phasor-analysis.md) |
| Debye screening of a charge by mobile carriers, and why the screening length falls as density rises | [plasma-physics 1.1](../plasma-physics/lessons/01-01-what-is-a-plasma-debye.md) |
| Fick's first law as one of the flux laws; where $D$ comes from | [transport-phenomena 1.3](../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md), [1.1](../transport-phenomena/lessons/01-01-one-flux-law-three-transports.md) |
| Solving the diffusion equation — the source of $\delta(t) = \sqrt{\pi Dt}$, quoted but never derived here | [pdes 2.1](../pdes/lessons/02-01-heat-diffusion-equations.md), [4.2](../pdes/lessons/04-02-heat-equation-line-heat-kernel.md), [transport-phenomena 4.4](../transport-phenomena/lessons/04-04-transient-multidimensional-diffusion.md) |

## Pitfalls

### Signs and naming

- The cathode is **not** always positive — it is positive in a galvanic cell, negative in an electrolytic one. Only "cathode = reduction" is universal. *([1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md))*
- The **oxidant** is the species that gets *reduced*. Check the reaction, not the name: whatever's oxidation state drops is the oxidant. *([1.1](lessons/01-01-redox-balancing-half-reactions.md))*
- Do **not** flip the anode's $E^\circ$ when you reverse its half-reaction — the subtraction in $E^\circ_\text{cat} - E^\circ_\text{an}$ already did it. *([1.3](lessons/01-03-electrode-potentials-she-series.md), [1.4](lessons/01-04-cell-emf-gibbs-equilibrium.md))*
- Very negative $E^\circ$ means a *strong reductant*, not a weak couple. Lithium at $-3.04\ \mathrm{V}$ is the fiercest donor on the table. *([1.3](lessons/01-03-electrode-potentials-she-series.md))*
- $\eta$ is $E - E_\text{eq}$, not the electrode potential. A battery's droop under load is $\eta$, a tax *on top of* the thermodynamic $E_\text{eq}$. *([2.3](lessons/02-03-butler-volmer-equation.md))*
- In Butler–Volmer the cathodic term needs **both** its minus signs, or the curve stops passing through the origin. *([2.3](lessons/02-03-butler-volmer-equation.md))*
- Overpotentials never help anyone: they lower a fuel cell's output and raise an electrolyzer's input. *([4.2](lessons/04-02-fuel-cells-electrolyzers.md))*

### Bookkeeping

- Oxidation states are a **fiction** — the Mn in $\ce{MnO4-}$ is not literally $+7$. They work because they're consistent, not because they're physical. *([1.1](lessons/01-01-redox-balancing-half-reactions.md))*
- Balancing mass without checking charge hides the electron count you skipped. Confirm all three: mass, charge, electrons cancelled. *([1.1](lessons/01-01-redox-balancing-half-reactions.md))*
- Converting to base means adding $\ce{OH-}$ to **both** sides — you're neutralizing, not inventing atoms. *([1.1](lessons/01-01-redox-balancing-half-reactions.md))*
- Getting $n$ wrong is the single most common electrolysis error: charge per mole of metal is $nF$, not $F$ ($\ce{Al^3+}$ costs three electrons, $\ce{Ag+}$ one). *([1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md))*
- $E^\circ$ is **intensive** and never scales with $n$; $\Delta G^\circ$ is extensive and does. *([1.4](lessons/01-04-cell-emf-gibbs-equilibrium.md))*
- Pure solids and the solvent have activity 1 and never enter $Q$ — a zinc bar has no "concentration." *([1.5](lessons/01-05-nernst-equation-concentration-cells.md))*
- Electrons cross the **wire**; ions cross the **salt bridge**. No bridge, no sustained current. *([1.2](lessons/01-02-galvanic-electrolytic-cells-faraday.md))*
- Capacity (Ah) is charge, not energy. Two cells with the same Ah and different chemistries store very different Wh. *([4.1](lessons/04-01-batteries-energy-density.md))*

### Thermodynamics vs kinetics

- "Standard" means unit activity, not "any concentration" — off standard, use Nernst. *([1.3](lessons/01-03-electrode-potentials-she-series.md))*
- A small voltage is not "barely spontaneous": $nF/RT \approx 39$ per volt sits in an *exponent*, so $+1\ \mathrm{V}$ already means $K \sim 10^{17}$. *([1.4](lessons/01-04-cell-emf-gibbs-equilibrium.md))*
- $j_0$ is kinetic and independent of $E^\circ$ and $\Delta G$: a hugely favourable reaction can be microscopically slow. Same $\ce{H+}/\ce{H2}$ thermodynamics on Pt and Hg, a billionfold difference in rate. *([2.2](lessons/02-02-activation-exchange-current.md))*
- Zero **net** current at $E_\text{eq}$ is a balance of two large opposing fluxes of size $j_0$, not silence. *([2.2](lessons/02-02-activation-exchange-current.md), [2.3](lessons/02-03-butler-volmer-equation.md))*
- $\alpha$ is not a fudge factor — it is where the barrier peak sits along the reaction coordinate, and it carries mechanistic information. *([2.2](lessons/02-02-activation-exchange-current.md))*
- A concentration cell has $E^\circ = 0$ but a real, nonzero $E$: the drive is entropic (mixing), living entirely in the $\log Q$ term. *([1.5](lessons/01-05-nernst-equation-concentration-cells.md))*

### Kinetics measurements

- The Tafel intercept is the *extrapolated* line at $\eta = 0$, a fiction — the real net current there is exactly zero. It recovers $j_0$ because $j_0$ is the shared partial current, not the net one. *([2.4](lessons/02-04-overpotential-tafel-analysis.md))*
- $b$ vs $1/b$: the Tafel *equation* puts $b$ (V/decade) on $\eta$ vs $\log\lvert j\rvert$; the conventional *plot* flips the axes, so the visible slope is $1/b$. *([2.4](lessons/02-04-overpotential-tafel-analysis.md))*
- Each limit is one-sided: don't use the Tafel form near $\eta = 0$, or the linear form at large $\eta$. In between, only the full equation. *([2.4](lessons/02-04-overpotential-tafel-analysis.md))*
- A Tafel slope is a mechanism clue, not a constant of nature — quoting one without conditions is meaningless. *([2.4](lessons/02-04-overpotential-tafel-analysis.md))*
- Fit the Tafel line only in the straight low-current region, *before* transport curvature bends it — and subtract $iR$ first, or a plain resistor masquerades as sluggish kinetics. *([3.3](lessons/03-03-mixed-control-kinetics-transport.md))*
- Current at an electrode is not proof of chemistry: $i_c = C_{dl}A\,dE/dt$ flows with no reaction at all. Separate non-Faradaic from Faradaic. *([2.1](lessons/02-01-interface-electrical-double-layer.md), [3.4](lessons/03-04-chronoamperometry-cottrell.md))*
- The double layer is Stern, not a single ion sheet — which is why its capacitance depends on concentration and potential rather than being fixed. *([2.1](lessons/02-01-interface-electrical-double-layer.md))*

### Transport

- Supporting electrolyte does not speed the reaction. It *removes* migration so transport becomes clean and analyzable. *([3.1](lessons/03-01-transport-modes-diffusion-layer.md))*
- $\delta$ is a model, not a wall — the real profile is curved. And in a truly quiescent cell $\delta$ never settles: it grows as $\sqrt{Dt}$ and the current decays forever. Steady state requires convection or a microelectrode. *([3.1](lessons/03-01-transport-modes-diffusion-layer.md), [3.4](lessons/03-04-chronoamperometry-cottrell.md))*
- Diffusion spreads as $\sqrt{t}$, never as $t$ — doubling the distance takes four times as long. Linear-in-$t$ growth would be convection. *([3.4](lessons/03-04-chronoamperometry-cottrell.md))*
- The limiting plateau does **not** mean the reaction stopped or slowed: on the plateau kinetics is effortless and *supply* is the cap. *([3.2](lessons/03-02-diffusion-limited-current-concentration-overpotential.md))*
- $\eta_\text{conc}$ is a transport/thermodynamic loss with no $j_0$ or $\alpha$ in it — it exists even for an infinitely fast electrode. *([3.2](lessons/03-02-diffusion-limited-current-concentration-overpotential.md))*
- $j_L$ is not a property of the species — it rides on $\delta$, which you set by stirring. *([3.2](lessons/03-02-diffusion-limited-current-concentration-overpotential.md))*
- The three losses are in **series**, so they add; current does not "pick" the worst path. And $j_k$ is not a fixed number — it grows exponentially with $\eta$, while $j_L$ barely moves. *([3.3](lessons/03-03-mixed-control-kinetics-transport.md))*
- The Cottrell $t^{-1/2}$ law only holds after the double-layer charging spike dies; fit the *later* data. *([3.4](lessons/03-04-chronoamperometry-cottrell.md))*

### Voltammetry and devices

- A CV peak does not mean the reactant ran out — only the thin surface layer is depleted; the bulk is untouched. *([3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md))*
- A **large** $\Delta E_p$ means sluggish kinetics, not more electrons — more electrons give a *smaller* gap ($59/n$). The tell is that a kinetic gap grows with scan rate. *([3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md))*
- Neither peak alone is $E^{\circ}$; use the midpoint, and only for a reasonably reversible couple. A vanishing reverse peak means follow-up chemistry. *([3.5](lessons/03-05-linear-sweep-cyclic-voltammetry.md))*
- Theoretical Wh/kg ignores every gram that isn't a reactant — apply the packaging factor before comparing to a datasheet, and don't read the discharge plateau as the EMF. *([4.1](lessons/04-01-batteries-energy-density.md))*
- Recharging is not free reverse discharge: overpotentials now add against you, so round-trip efficiency is always below 100%. *([4.1](lessons/04-01-batteries-energy-density.md))*
- A fuel cell is **not** Carnot-limited, and $\eta_V$ divides by $1.23\ \mathrm{V}$, not the thermoneutral $1.48\ \mathrm{V}$. *([4.2](lessons/04-02-fuel-cells-electrolyzers.md))*
- A corroding metal is anode *and* cathode everywhere at once; $E_\text{corr}$ is a compromise, and a nobler $E_\text{corr}$ does not mean slower corrosion — $i_\text{corr}$ does. *([4.3](lessons/04-03-corrosion-mixed-potential.md))*
- A sacrificial anode should be the *more active* metal (zinc, magnesium), not the strongest one. *([4.3](lessons/04-03-corrosion-mixed-potential.md))*
- A potentiometric reading is an **activity**, not a concentration, and it is a *difference* — a drifting reference electrode is usually what's wrong. *([4.4](lessons/04-04-electrodeposition-sensors.md))*
- Amperometric sensing needs the diffusion-limited plateau; on the kinetic foot of the wave the current no longer reads concentration. *([4.4](lessons/04-04-electrodeposition-sensors.md))*

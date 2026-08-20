# General Chemistry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Chemistry is one question asked at four scales: *where are the electrons?* At the
atom it answers configurations and periodic trends; at the molecule it answers
bonds, shapes, and polarity; at the beaker it answers how much reacts (the mole),
how much energy moves ($\Delta H$), and where the reaction stops ($K$). Everything
below is the lookup layer for that: the constants, the standard tables the lessons
use without printing, and the handful of relations you'd otherwise go hunting for
mid-problem.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $Z$, $A$, $N$ | protons (which *is* the element), nucleons ($A=Z+N$), neutrons | [1.1](lessons/01-01-quantum-atom.md) |
| $\ce{^{A}_{Z}X}$ | nuclide symbol — mass number on top, atomic number below | [1.1](lessons/01-01-quantum-atom.md) |
| $n$, $\ell$, $m_\ell$, $m_s$ | quantum numbers: shell (size), subshell (shape), orientation, spin | [1.1](lessons/01-01-quantum-atom.md) |
| $[\ce{Ar}]$ | noble-gas core — "everything up to argon, already filled" | [1.2](lessons/01-02-electron-configurations-periodic-table.md) |
| $Z_\text{eff}$, $S$ | the pull a valence electron actually feels; the part the core cancels | [1.3](lessons/01-03-periodic-trends.md) |
| $\chi$, $\Delta\chi$ | electronegativity (pull on shared electrons); the gap across a bond | [1.3](lessons/01-03-periodic-trends.md) |
| $\delta+$, $\delta-$ | partial charges — one end of a polar bond is electron-rich | [1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md) |
| $\mathrm{FC}$ | formal charge — bookkeeping ownership of electrons in a drawing | [1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md) |
| $\leftrightarrow$ | resonance arrow — "these drawings average", **not** "these interconvert" | [1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md) |
| $\vec\mu$ | dipole arrow, pointing toward the more electronegative end | [1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) |
| $\sigma$, $\pi$ | head-on bond (sets direction); sideways bond (adds glue, no new direction) | [1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) |
| $N_A$ | Avogadro's number — how many particles are in one mole | [2.1](lessons/02-01-mole-molar-mass-formulas.md) |
| $M$ (g/mol) | molar mass — grams per mole, the mass ↔ count exchange rate | [2.1](lessons/02-01-mole-molar-mass-formulas.md) |
| $\mathrm{M}$ (mol/L) | molarity — **same letter, different job**; read the units, not the glyph | [2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md) |
| $(s)$, $(l)$, $(g)$, $(aq)$ | phase labels; $\ce{(v)}$ after a product marks a precipitate falling out | [2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md) |
| $R$, $k_B$ | gas constant (per mole); Boltzmann's constant (per molecule) | [3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md) |
| $x_i$, $P_i$ | mole fraction of a gas; the pressure it contributes on its own | [3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md) |
| $v_\text{rms}$ | root-mean-square molecular speed | [3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md) |
| $q$, $w$, $U$, $H$ | heat in, work done on the system, internal energy, enthalpy | [3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md) |
| $c$, $C$ | specific heat (per gram) vs. heat capacity (per object) | [3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md) |
| $^\circ$ (superscript) | standard conditions: 25 °C, 1 atm, 1 M solutions | [3.3](lessons/03-03-hess-law-enthalpies-formation.md) |
| $\Delta H_f^\circ$ | heat to build 1 mol of a compound out of its elements | [3.3](lessons/03-03-hess-law-enthalpies-formation.md) |
| $\ce{<=>}$ | reversible reaction — it settles at a standoff, not completion | [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| $[\ce{X}]$ | molar concentration of X (mol/L) | [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| $K_c$, $K_p$, $Q$ | equilibrium constant in concentrations, in pressures; same ratio *right now* | [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| $\Delta n$ | (moles of gas products) − (moles of gas reactants) | [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| $K_w$, $K_a$, $K_b$ | water's autoionization constant; acid and base strength constants | [4.1](lessons/04-01-acids-bases-ph-strength.md) |
| $\mathrm{pH}$, $\mathrm{pOH}$, $\mathrm{p}K_a$ | $-\log_{10}$ of $[\ce{H+}]$, $[\ce{OH-}]$, $K_a$ — "p" means "take minus the log" | [4.1](lessons/04-01-acids-bases-ph-strength.md) |
| $C$ (in acid problems) | the *initial* concentration of the acid, before any dissociates | [4.1](lessons/04-01-acids-bases-ph-strength.md) |
| $\ce{HA}$ / $\ce{A-}$ | a generic weak acid and its conjugate base | [4.2](lessons/04-02-buffers-titration.md) |
| $k$, $E_a$, $A$ | rate constant, activation-energy hill, frequency factor | [4.3](lessons/04-03-taste-of-kinetics.md) |
| $t_{1/2}$ | half-life — time for half of what's left to disappear | [4.3](lessons/04-03-taste-of-kinetics.md) |
| $E^\circ$, $E^\circ_\text{cell}$ | tabulated **reduction** potential; the voltage the assembled cell delivers | [4.4](lessons/04-04-taste-of-electrochemistry.md) |
| $F$, $n$ (in $-nFE^\circ$) | charge on one mole of electrons; moles of electrons the reaction moves | [4.4](lessons/04-04-taste-of-electrochemistry.md) |
| $\vert$ and $\Vert$ | in cell notation: a phase boundary, and the salt bridge | [4.4](lessons/04-04-taste-of-electrochemistry.md) |

**Overloaded letters, in one place:** $n$ is a principal quantum number (1.1), an
amount in moles (2.1), and moles of electrons (4.4). $M$ is molar mass, $\mathrm{M}$
is molarity. $C$ is heat capacity (3.2) and initial acid concentration (4.1). $A$
is mass number (1.1) and the Arrhenius frequency factor (4.3). $k$ is a rate
constant; $K$ is an equilibrium constant. Units disambiguate all of them.

## Definitions

### Isotope

Same element, different weight: the proton count is fixed (that's the element),
the neutron count varies.

$$Z = \text{protons}, \qquad A = Z + N, \qquad \ce{^{12}C} \ \text{and}\ \ce{^{14}C}\ \text{are both carbon}$$

*Introduced:* [1.1](lessons/01-01-quantum-atom.md)

### Orbital

A region where one electron is *likely* to be found — a probability cloud, not a
track. Labeled by $(n,\ell,m_\ell)$ and holding **exactly two** electrons of
opposite spin.

*Introduced:* [1.1](lessons/01-01-quantum-atom.md)

### Electron configuration

The seating chart: which subshells the electrons occupy, cheapest first, written
with occupancy as a superscript.

$$\ce{Fe}:\ 1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^6 \;=\; [\ce{Ar}]\,4s^2\,3d^6$$

*Introduced:* [1.2](lessons/01-02-electron-configurations-periodic-table.md)

### Valence electrons

The outermost electrons — the ones that do all the bonding. For a main-group atom
they're everything in the highest occupied shell $n$; a filled inner $d$ counts as
core.

*Introduced:* [1.2](lessons/01-02-electron-configurations-periodic-table.md)

### Effective nuclear charge

How much positive pull a valence electron actually feels once the core electrons
have cancelled part of it. One number that drives every periodic trend.

$$Z_\text{eff} = Z - S$$

*Introduced:* [1.3](lessons/01-03-periodic-trends.md)

### Ionization energy and electron affinity

Two different questions about grip: how hard it is to take an electron *away*, and
how eagerly the atom takes one *on*. They trend together but are measured
separately.

$$\text{IE:}\ \ce{X(g) -> X+(g) + e-} \qquad\qquad \text{EA:}\ \ce{X(g) + e- -> X^-(g)}$$

*Introduced:* [1.3](lessons/01-03-periodic-trends.md)

### Electronegativity

An atom's pull on the electrons *inside a shared bond* (Pauling scale, unitless,
about 0.7 to 4.0). $\ce{F}$ is the champion at 3.98.

*Introduced:* [1.3](lessons/01-03-periodic-trends.md)

### Octet rule

Atoms gain, lose, or share until their valence shell looks like a noble gas —
eight electrons. Hydrogen settles for two.

*Introduced:* [1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md)

### Formal charge

A tiebreaker between candidate Lewis structures: compare what an atom "owns" in
the drawing (its lone-pair electrons plus half of each bond) to what it brought.

$$\mathrm{FC} = (\text{valence } e^-) - (\text{lone-pair } e^-) - \tfrac12(\text{bonding } e^-)$$

*Introduced:* [1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md)

### Resonance

When several equally valid Lewis drawings differ only in where a multiple bond or
lone pair sits, the real molecule is the **static delocalized average** of them —
it does not flicker between them.

*Introduced:* [1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md)

### Electron domain

One cloud of electrons around the central atom: a lone pair, or a bond of *any*
order. Domains repel, so they spread out — that's the whole of VSEPR.

$$\text{domains} = (\text{atoms bonded}) + (\text{lone pairs}), \qquad \text{a double or triple bond counts once}$$

*Introduced:* [1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md)

### Hybridization

The central atom mixes its own $s$, $p$ (and sometimes $d$) orbitals into as many
equivalent orbitals as it has domains, aimed where the geometry demands. Read it
straight off the domain count.

*Introduced:* [1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md)

### Sigma and pi bonds

$\sigma$ is head-on overlap along the bond axis — every single bond is one, and it
fixes the direction. $\pi$ is sideways overlap of leftover $p$ orbitals, adding
strength in a direction that already exists.

$$\text{double bond} = 1\sigma + 1\pi, \qquad \text{triple bond} = 1\sigma + 2\pi$$

*Introduced:* [1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md)

### Bond order

Net bonds after cancelling the antibonding electrons against the bonding ones.
Positive means the molecule holds together.

$$\text{bond order} = \tfrac12\left(n_\text{bonding} - n_\text{antibonding}\right)$$

*Introduced:* [1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md)

### Molecular polarity

Whether the molecule as a whole has a lopsided charge — which is a question about
**shape**, not about how polar the individual bonds are.

$$\vec\mu_\text{net} = \sum_i \vec\mu_i \quad (\text{nonzero} \Rightarrow \text{polar})$$

*Introduced:* [1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md)

### Mole

A count, exactly like "a dozen," chosen so that one mole of a substance weighs, in
grams, the number printed on the periodic table.

$$1\ \mathrm{mol} = N_A = 6.022\times10^{23}\ \text{particles}$$

*Introduced:* [2.1](lessons/02-01-mole-molar-mass-formulas.md)

### Molar mass

The mass of one mole, in g/mol — the price tag that converts grams to moles. For a
compound, add up every atom in the formula.

$$M(\ce{H2O}) = 2(1.008) + 16.00 = 18.02\ \mathrm{g/mol}$$

*Introduced:* [2.1](lessons/02-01-mole-molar-mass-formulas.md)

### Empirical vs. molecular formula

Empirical is the simplest whole-number atom ratio ($\ce{CH2O}$); molecular is the
actual per-molecule count ($\ce{C6H12O6}$). Percent-composition data alone can
never distinguish them.

$$\text{molecular} = (\text{empirical}) \times n, \qquad n = \frac{M_\text{molecular}}{M_\text{empirical}}$$

*Introduced:* [2.1](lessons/02-01-mole-molar-mass-formulas.md)

### Limiting reagent

The ingredient that runs out first. It alone caps how much product forms;
everything else is leftover.

*Introduced:* [2.2](lessons/02-02-stoichiometry-limiting-reagents.md)

### Percent yield

What you actually got, as a fraction of the most the limiting reagent could have
given you (the **theoretical yield**). Always under 100% in real life.

*Introduced:* [2.2](lessons/02-02-stoichiometry-limiting-reagents.md)

### Molarity

How many moles of solute sit in each liter of solution — the way you "weigh out" a
reactant that's already dissolved, in mol/L.

*Introduced:* [2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)

### Net ionic equation

The reaction with the bystanders deleted: split every dissolved strong electrolyte
into ions, then cancel whatever is identical on both sides (the **spectator ions**).

$$\ce{Ag+ + Cl- -> AgCl(v)}$$

*Introduced:* [2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)

### Oxidation number

The charge an atom *would* carry if every bond were fully ionic. A fiction that
only has to balance — its job is to make electron transfer visible.

*Introduced:* [2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)

### Redox

A reaction in which electrons change owners, detected by oxidation numbers moving.
The two roles always come as a pair.

$$\text{oxidation} = \text{loses } e^- = \text{number goes up} \quad (\textbf{OIL RIG})$$

The species oxidized is the **reducing agent**; the species reduced is the
**oxidizing agent**.

*Introduced:* [2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)

### Ideal gas

A gas modeled as tiny, volumeless, non-interacting particles bouncing elastically —
so its behavior forgets what it's made of and obeys $PV = nRT$ ($T$ in kelvin,
always).

*Introduced:* [3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md)

### Partial pressure

The pressure one gas in a mixture would exert alone. Each gas pushes independently,
in proportion to how many of the molecules are it.

$$P_\text{total} = \sum_i P_i, \qquad P_i = x_i P_\text{total}, \qquad x_i = \frac{n_i}{n_\text{total}}$$

*Introduced:* [3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md)

### Enthalpy

The chemist's energy currency: at constant pressure (an open beaker), the enthalpy
change simply *is* the heat you feel.

$$H = U + PV, \qquad \Delta H = q_p$$

Negative is **exothermic** (beaker warms), positive is **endothermic** (beaker cools).

*Introduced:* [3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md)

### State function

A quantity that depends only on where you are, not how you got there — like
altitude. $U$ and $H$ are state functions; $q$ and $w$ are not.

*Introduced:* [3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md)

### Specific heat

How stubborn a substance is about changing temperature: joules needed per gram per
degree, $q = mc\,\Delta T$. Water's is famously large, which is why it buffers
climate and scalds tongues.

*Introduced:* [3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md)

### Standard enthalpy of formation

The heat to build **one mole** of a compound from its elements in their standard
states. An element already in its standard state has $\Delta H_f^\circ = 0$ by
definition.

*Introduced:* [3.3](lessons/03-03-hess-law-enthalpies-formation.md)

### Hess's law

Because enthalpy is a state function, you can build a reaction out of other
reactions and just add their heats.

$$\Delta H_\text{target} = \sum_i \Delta H_i$$

*Introduced:* [3.3](lessons/03-03-hess-law-enthalpies-formation.md)

### Dynamic equilibrium

Not a stopped reaction — a tied race. Forward and reverse run at equal rates, so
the concentrations stop changing while the molecules keep converting.

*Introduced:* [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md)

### Equilibrium constant

The one number the products-over-reactants ratio always lands on at a given
temperature, whatever you started with.

$$\ce{aA + bB <=> cC + dD}, \qquad K_c = \frac{[\ce{C}]^c[\ce{D}]^d}{[\ce{A}]^a[\ce{B}]^b}$$

Pure solids and pure liquids are **omitted**. Only temperature changes $K$.

*Introduced:* [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md)

### Reaction quotient

The same expression evaluated at whatever you have *right now*. Comparing it to $K$
is your compass for which way the reaction moves.

$$Q < K \Rightarrow \text{shift right}, \qquad Q > K \Rightarrow \text{shift left}$$

*Introduced:* [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md)

### Le Châtelier's principle

Disturb a system at equilibrium and it shifts in the direction that partially
undoes the disturbance.

*Introduced:* [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md)

### ICE table

Initial / Change / Equilibrium: tabulate the starting concentrations, let $x$ be
how much reacts, and feed the bottom row into $K$.

*Introduced:* [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md)

### Brønsted–Lowry acid and base

An acid is a proton donor, a base is a proton acceptor. Every acid–base reaction is
one $\ce{H+}$ changing hands.

$$\ce{HA + B <=> A- + HB+}$$

(The broader **Lewis** definition swaps "proton" for "electron pair": a Lewis acid
accepts a pair, a Lewis base donates one.)

*Introduced:* [4.1](lessons/04-01-acids-bases-ph-strength.md)

### Conjugate acid–base pair

Two species differing by exactly one proton, like $\ce{HA}$ and $\ce{A-}$. A strong
acid always has a weak conjugate base, and vice versa.

$$K_a K_b = K_w$$

*Introduced:* [4.1](lessons/04-01-acids-bases-ph-strength.md)

### pH

How many powers of ten below 1 M the proton concentration sits. Each whole unit is
a **tenfold** change.

$$\mathrm{pH} = -\log_{10}[\ce{H+}], \qquad [\ce{H+}] = 10^{-\mathrm{pH}}$$

*Introduced:* [4.1](lessons/04-01-acids-bases-ph-strength.md)

### Strong vs. weak

A statement about the *fraction* that dissociates, not about concentration or
danger. Strong means it all comes apart ($[\ce{H+}] = C$); weak means it sits at an
equilibrium set by $K_a$.

*Introduced:* [4.1](lessons/04-01-acids-bases-ph-strength.md)

### Acid dissociation constant

The equilibrium constant for letting the proton go — bigger $K_a$ (smaller
$\mathrm{p}K_a$) means a stronger acid.

$$\ce{HA <=> H+ + A-}, \qquad K_a = \frac{[\ce{H+}][\ce{A-}]}{[\ce{HA}]}$$

*Introduced:* [4.1](lessons/04-01-acids-bases-ph-strength.md)

### Buffer

A weak acid and its conjugate base in the same beaker at comparable amounts, so
the solution keeps both a proton donor and a proton sponge on hand. Its **capacity**
is how much it can swallow before one partner runs out.

*Introduced:* [4.2](lessons/04-02-buffers-titration.md)

### Henderson–Hasselbalch equation

The pH of a buffer is the acid's $\mathrm{p}K_a$, nudged by the log of the
base-to-acid ratio: $\mathrm{pH} = \mathrm{p}K_a + \log_{10}([\ce{A-}]/[\ce{HA}])$.
Design rules and the buffer window are tabulated below.

*Introduced:* [4.2](lessons/04-02-buffers-titration.md)

### Equivalence and half-equivalence points

**Half-equivalence:** half the acid is converted, so $[\ce{HA}]=[\ce{A-}]$ and
$\mathrm{pH} = \mathrm{p}K_a$ — read $K_a$ straight off the flat part of the curve.
**Equivalence:** all the acid is converted — the steep jump. "Equivalent" means
stoichiometrically equal, *not* neutral.

*Introduced:* [4.2](lessons/04-02-buffers-titration.md)

### Reaction rate

How fast a concentration changes, divided by the stoichiometric coefficient so
every species reports the same number.

$$\text{rate} = -\frac1a\frac{\Delta[\ce{A}]}{\Delta t} = +\frac1c\frac{\Delta[\ce{C}]}{\Delta t}$$

*Introduced:* [4.3](lessons/04-03-taste-of-kinetics.md)

### Rate law

Rate as a product of concentrations raised to **experimentally measured** powers,
$\text{rate} = k[\ce{A}]^m[\ce{B}]^n$, with overall order $m+n$. The orders encode
the mechanism, which the balanced equation hides.

*Introduced:* [4.3](lessons/04-03-taste-of-kinetics.md)

### Activation energy

The energy hill a collision has to clear before anything reacts. Only the fraction
$e^{-E_a/RT}$ of collisions make it over — which is why heating speeds everything up.

*Introduced:* [4.3](lessons/04-03-taste-of-kinetics.md)

### Catalyst

Something that opens a lower-barrier path without being consumed. It lowers the
forward and reverse hills *equally*, so it changes speed, never $K$.

*Introduced:* [4.3](lessons/04-03-taste-of-kinetics.md)

### Half-life

The time for half of what remains to disappear. For a **first-order** process it's
constant, $t_{1/2} = \ln 2 / k$ — independent of how much you started with, which
is the signature of exponential decay.

*Introduced:* [4.3](lessons/04-03-taste-of-kinetics.md)

### Galvanic cell

A spontaneous redox reaction split into two beakers so its electrons are forced to
travel a wire, where they can do work. A **salt bridge** carries ions to keep each
half neutral.

$$\ce{Zn(s) | Zn^2+(aq) || Cu^2+(aq) | Cu(s)}$$

*Introduced:* [4.4](lessons/04-04-taste-of-electrochemistry.md)

### Anode and cathode

**An Ox, Red Cat:** the anode is where oxidation happens (electrons leave), the
cathode where reduction happens (electrons arrive). Electrons flow anode → cathode
through the wire.

*Introduced:* [4.4](lessons/04-04-taste-of-electrochemistry.md)

### Standard reduction potential

A tabulated voltage, **always written as a reduction**, measured against the
standard hydrogen electrode (defined as exactly 0 V). More positive means a
stronger appetite for electrons. It is *intensive* — scaling a half-reaction does
not scale $E^\circ$.

*Introduced:* [4.4](lessons/04-04-taste-of-electrochemistry.md)

## Formulas and rules

### Constants

| Constant | Value | Where it shows up |
|---|---|---|
| $N_A$ | $6.022\times10^{23}\ \mathrm{mol^{-1}}$ | moles ↔ particles |
| $R$ | $0.08206\ \mathrm{L\,atm/(mol\,K)}$ | gas law in atm and L |
| $R$ | $8.314\ \mathrm{J/(mol\,K)}$ | Arrhenius, $K_p$/$K_c$, energies |
| $k_B$ | $1.381\times10^{-23}\ \mathrm{J/K}$ | $\overline{KE} = \tfrac32 k_B T$ per molecule |
| $h$ | $6.626\times10^{-34}\ \mathrm{J\,s}$ | $\Delta E = h\nu$ |
| $c$ (light) | $3.00\times10^{8}\ \mathrm{m/s}$ | $\Delta E = hc/\lambda$ |
| $F$ | $96485\ \mathrm{C/mol}$ | $\Delta G^\circ = -nFE^\circ_\text{cell}$ |
| $K_w$ | $1.0\times10^{-14}$ at 25 °C | $[\ce{H+}][\ce{OH-}]$ |
| $c_\text{water}$ | $4.18\ \mathrm{J/(g\cdot{}^\circ C)}$ | calorimetry |
| molar volume at STP | $22.4\ \mathrm{L/mol}$ | gases at 0 °C and 1 atm **only** |

**Unit conversions the lessons assume:** $T_\mathrm{K} = T_{^\circ\mathrm C} + 273.15$;
$1\ \mathrm{atm} = 101{,}325\ \mathrm{Pa}$; $1\ \mathrm{L} = 1000\ \mathrm{mL}$;
$1\ \mathrm{kJ} = 1000\ \mathrm{J}$; 1 amu $\approx$ the mass of one proton;
$1\ \mathrm{V} = 1\ \mathrm{J/C}$.

*From* [1.1](lessons/01-01-quantum-atom.md), [2.1](lessons/02-01-mole-molar-mass-formulas.md), [3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md), [4.4](lessons/04-04-taste-of-electrochemistry.md)

### Atomic structure

| Subshell | $\ell$ | Orbitals ($2\ell+1$) | Max electrons | Shape |
|---|---|---|---|---|
| s | 0 | 1 | 2 | sphere |
| p | 1 | 3 | 6 | three perpendicular dumbbells |
| d | 2 | 5 | 10 | cloverleaves |
| f | 3 | 7 | 14 | — |

**Aufbau fill order** (read the diagonals of the $n\ell$ grid):

$$1s\ 2s\ 2p\ 3s\ 3p\ 4s\ 3d\ 4p\ 5s\ 4d\ 5p\ 6s\ 4f\ 5d\ 6p\ 7s\ 5f\ 6d\ 7p$$

- **Pauli:** two per orbital, opposite spins. **Hund:** singly fill degenerate orbitals, parallel spins, before pairing.
- **Ions:** cations lose the **highest-$n$** electrons first — $4s$ leaves before $3d$, even though $4s$ filled first. Anions add electrons toward the next noble gas.
- **The two anomalies worth memorizing:** $\ce{Cr} = [\ce{Ar}]4s^1 3d^5$ and $\ce{Cu} = [\ce{Ar}]4s^1 3d^{10}$ — a half-filled or filled $d$ is extra stable.
- **Reading the table:** period number = highest $n$; block = subshell being filled; for main-group elements the group number gives the valence count (1–2 → 1–2; 13–18 → 3–8).

$$\Delta E = h\nu = \frac{hc}{\lambda}, \qquad \bar m = \sum_i f_i m_i \ \ (\textstyle\sum_i f_i = 1)$$

*From* [1.1](lessons/01-01-quantum-atom.md) *and* [1.2](lessons/01-02-electron-configurations-periodic-table.md)

### Periodic trends

| Property | Across a period (→) | Down a group (↓) | Because |
|---|---|---|---|
| Atomic radius | decreases | increases | $Z_\text{eff}$ up vs. a new shell at larger $n$ |
| Ionization energy | increases | decreases | tighter grip vs. farther out and shielded |
| Electron affinity | more exothermic | roughly decreases | halogens release the most |
| Electronegativity | increases | decreases | $\ce{F}$ is the maximum, 3.98 |
| Metallic character | decreases | increases | mirror of ionization energy |

- **Ionic radius:** cations are smaller than the parent atom, anions larger. In an **isoelectronic series** (same electron count) radius shrinks as $Z$ grows: $\ce{O^2-} > \ce{F-} > \ce{Na+} > \ce{Mg^2+}$.
- **Two dips in the ionization-energy rise:** group 2 → 13 (starting a new $p$ subshell) and group 15 → 16 (relieving pair repulsion in a half-filled $p^3$).
- **Successive ionization energies** always rise, and jump enormously the moment you break into the noble-gas core — that jump counts the valence electrons.

**Pauling electronegativities** (the lessons round these; either version is fine):

| $\ce{H}$ | $\ce{C}$ | $\ce{N}$ | $\ce{O}$ | $\ce{F}$ | $\ce{Na}$ | $\ce{S}$ | $\ce{Cl}$ | $\ce{Br}$ |
|---|---|---|---|---|---|---|---|---|
| 2.20 | 2.55 | 3.04 | 3.44 | 3.98 | 0.93 | 2.58 | 3.16 | 2.96 |

*From* [1.3](lessons/01-03-periodic-trends.md)

### Bonding and Lewis structures

| $\Delta\chi$ | Bond type | What happens | Example |
|---|---|---|---|
| $\gtrsim 1.7$ | ionic | electron **transferred** | $\ce{NaCl}$ ($\Delta\chi \approx 2.1$) |
| $0.4$–$1.7$ | polar covalent | shared unevenly, $\delta+/\delta-$ | $\ce{H2O}$ ($\Delta\chi \approx 1.2$) |
| $< 0.4$ | nonpolar covalent | shared evenly | $\ce{Cl2}$ ($\Delta\chi = 0$) |

**Lewis algorithm.** (1) Count valence electrons; add one per negative charge,
subtract one per positive. (2) Central atom = least electronegative, never H.
(3) Single-bond everything. (4) Complete the **terminal** octets. (5) Leftovers go
on the central atom. (6) Central atom short of an octet → make multiple bonds.

**Best structure:** formal charges closest to zero, with any negative on the most
electronegative atom, and $\sum \mathrm{FC} = $ the species' charge.

**Octet exceptions:** incomplete ($\ce{BF3}$, $\ce{BeCl2}$), odd-electron radicals
($\ce{NO}$), and expanded octets on **period-3-and-below central atoms**
($\ce{PCl5}$, $\ce{SF6}$, $\ce{SF4}$). Terminal atoms never expand.

*From* [1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md)

### VSEPR: domains to shape

| Domains | Electron-domain geometry | Ideal angle | Hybridization | Lone pairs → molecular shape |
|---|---|---|---|---|
| 2 | linear | $180^\circ$ | $sp$ | 0: linear |
| 3 | trigonal planar | $120^\circ$ | $sp^2$ | 0: trigonal planar · 1: bent ($\sim115^\circ$) |
| 4 | tetrahedral | $109.5^\circ$ | $sp^3$ | 0: tetrahedral · 1: trigonal pyramidal ($\sim107^\circ$) · 2: bent ($\sim104.5^\circ$) |
| 5 | trigonal bipyramidal | $90^\circ$, $120^\circ$ | $sp^3d$ | 0: trigonal bipyramidal · 1: seesaw · 2: T-shaped · 3: linear |
| 6 | octahedral | $90^\circ$ | $sp^3d^2$ | 0: octahedral · 1: square pyramidal · 2: square planar |

- A lone pair is fatter than a bonding pair, so each one shaves a few degrees off the ideal angle.
- In a trigonal bipyramid, lone pairs always take **equatorial** sites (two $90^\circ$ neighbors instead of three). This is why $\ce{SF4}$ is a seesaw.
- **Polarity:** symmetric shapes with identical bonds cancel — $\ce{CO2}$, $\ce{CCl4}$, $\ce{SF6}$ are nonpolar despite polar bonds. Lone pairs are the usual symmetry-wreckers: $\ce{H2O}$, $\ce{NH3}$, $\ce{SF4}$ are polar.

*From* [1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md)

### Common polyatomic ions

The lessons write these without ever tabulating them. Charge is what you need for
formulas and for counting valence electrons.

| Ion | Formula | | Ion | Formula |
|---|---|---|---|---|
| ammonium | $\ce{NH4+}$ | | nitrate | $\ce{NO3^-}$ |
| hydroxide | $\ce{OH-}$ | | nitrite | $\ce{NO2^-}$ |
| acetate | $\ce{CH3COO^-}$ | | sulfate | $\ce{SO4^2-}$ |
| hypochlorite | $\ce{OCl-}$ | | sulfite | $\ce{SO3^2-}$ |
| permanganate | $\ce{MnO4^-}$ | | carbonate | $\ce{CO3^2-}$ |
| dichromate | $\ce{Cr2O7^2-}$ | | phosphate | $\ce{PO4^3-}$ |
| chromate | $\ce{CrO4^2-}$ | | hydrogen phosphate | $\ce{HPO4^2-}$ |
| cyanide | $\ce{CN-}$ | | dihydrogen phosphate | $\ce{H2PO4^-}$ |

*Used from* [1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md) *onward, especially* [2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)

### Atomic masses used in this course

| $\ce{H}$ | $\ce{C}$ | $\ce{N}$ | $\ce{O}$ | $\ce{F}$ | $\ce{Na}$ | $\ce{Mg}$ | $\ce{Al}$ | $\ce{S}$ | $\ce{Cl}$ |
|---|---|---|---|---|---|---|---|---|---|
| 1.008 | 12.01 | 14.01 | 16.00 | 19.00 | 22.99 | 24.31 | 26.98 | 32.07 | 35.45 |

| $\ce{K}$ | $\ce{Ca}$ | $\ce{Cr}$ | $\ce{Mn}$ | $\ce{Fe}$ | $\ce{Cu}$ | $\ce{Zn}$ | $\ce{Ag}$ | $\ce{I}$ | $\ce{Pb}$ |
|---|---|---|---|---|---|---|---|---|---|
| 39.10 | 40.08 | 52.00 | 54.94 | 55.85 | 63.55 | 65.38 | 107.87 | 126.90 | 207.2 |

*Used from* [2.1](lessons/02-01-mole-molar-mass-formulas.md) *onward*

### Mole conversions

$$n = \frac{m}{M}, \qquad N = n\,N_A, \qquad \%\,\text{element} = \frac{\text{mass of that element in 1 mol}}{M_\text{compound}}\times 100\%$$

**Moles sit in the middle** — never jump grams → molecules directly. To get an
empirical formula from percent composition: assume a 100 g sample (percents become
grams), convert each to moles, divide all by the smallest, round to whole numbers.

*From* [2.1](lessons/02-01-mole-molar-mass-formulas.md)

### Stoichiometry

$$m_A \ \xrightarrow{\ \div M_A\ }\ n_A \ \xrightarrow{\ \times\, b/a\ }\ n_B \ \xrightarrow{\ \times M_B\ }\ m_B$$

with $a$, $b$ the coefficients of $A$ and $B$ in the **balanced** equation. Balance
by adjusting **coefficients only** — a subscript change makes a different substance.

**Limiting reagent:** convert *each* reactant to the moles of product it could make
alone; the smallest wins and sets the theoretical yield. The excess reagent's
amount is irrelevant to the yield.

$$\text{percent yield} = \frac{\text{actual yield}}{\text{theoretical yield}}\times 100\%$$

*From* [2.2](lessons/02-02-stoichiometry-limiting-reagents.md)

### Solutions, solubility, and redox

$$\mathrm{M} = \frac{n}{V}, \qquad n = \mathrm{M}V, \qquad M_1V_1 = M_2V_2 \ \ (\text{dilution: moles are conserved})$$

**Solubility rules** — the memorize-these list:

| Rule | Exceptions |
|---|---|
| Nitrates ($\ce{NO3^-}$), group-1 salts, ammonium ($\ce{NH4+}$) — **always soluble** | none worth tracking |
| Halides ($\ce{Cl-}$, $\ce{Br-}$, $\ce{I-}$) — soluble | $\ce{Ag+}$, $\ce{Pb^2+}$, $\ce{Hg2^2+}$ |
| Sulfates ($\ce{SO4^2-}$) — soluble | $\ce{BaSO4}$, $\ce{PbSO4}$, $\ce{CaSO4}$ |
| Carbonates, hydroxides, sulfides — **insoluble** | with the always-soluble cations above |

**Oxidation-number rules, applied in order:** (1) free element = 0; (2) monatomic
ion = its charge; (3) O is usually $-2$, H usually $+1$; (4) the numbers sum to the
species' overall charge.

**Balancing a half-reaction in acid:** balance the element → balance $\ce{O}$ with
$\ce{H2O}$ → balance $\ce{H}$ with $\ce{H+}$ → balance charge with $\ce{e-}$. Then
scale the two halves so electrons lost = electrons gained, and add.

**Three aqueous reaction types:** a solid drops (precipitation), water forms
(acid–base, net ionic $\ce{H+ + OH- -> H2O}$ for strong + strong), or oxidation
numbers change (redox).

*From* [2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)

### Gas laws

$$PV = nRT, \qquad \frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2} \ \ (\text{fixed } n)$$

| Special case | Held fixed | Statement |
|---|---|---|
| Boyle | $n$, $T$ | $PV = \text{const}$ |
| Charles | $n$, $P$ | $V/T = \text{const}$ |
| Avogadro | $P$, $T$ | $V \propto n$ |

$$\rho = \frac{PM}{RT} \iff M = \frac{\rho RT}{P}, \qquad V_m(\text{STP}) = 22.4\ \mathrm{L/mol}$$

**Kinetic-molecular theory** (tiny, volumeless, non-interacting, elastic):

$$\overline{KE} = \tfrac32 k_B T, \qquad v_\text{rms} = \sqrt{\frac{3RT}{M}} \ \ (M \text{ in kg/mol}), \qquad \text{effusion rate} \propto \frac{1}{\sqrt M}$$

**Real gases** (van der Waals — $a$ for attraction, $b$ for molecular volume):

$$\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT$$

*From* [3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md)

### Thermochemistry

$$\Delta U = q + w, \qquad H = U + PV, \qquad \Delta H = q_p, \qquad q = mc\,\Delta T = C\,\Delta T$$

Sign convention: **heat into the system is positive; work done on the system is
positive**, so an expanding gas has $w = -P\Delta V < 0$.

$$q_\text{reaction} = -\,q_\text{calorimeter}$$

| Instrument | Condition | Measures |
|---|---|---|
| coffee-cup (open) | constant pressure | $q_p = \Delta H$ |
| bomb (sealed, rigid) | constant volume, $w = 0$ | $q_v = \Delta U$ |

**Thermochemical-equation rules:** $\Delta H$ **scales** with the coefficients
(double the equation, double $\Delta H$) and **flips sign** when the reaction
reverses. These two rules are the whole engine of Hess's law.

*From* [3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md)

### Hess's law and formation enthalpies

$$\Delta H_\text{rxn}^\circ = \sum n\,\Delta H_f^\circ(\text{products}) - \sum n\,\Delta H_f^\circ(\text{reactants})$$

**Standard states** (where $\Delta H_f^\circ = 0$): $\ce{O2(g)}$, $\ce{H2(g)}$,
$\ce{N2(g)}$, $\ce{Cl2(g)}$, $\ce{C(graphite)}$, $\ce{Hg(l)}$, $\ce{Na(s)}$ — the
stablest form at 25 °C and 1 atm. Atomic $\ce{O(g)}$ and $\ce{O3(g)}$ are **not** zero.

Formation enthalpies used in the lessons, in kJ/mol:

| $\ce{CH4(g)}$ | $\ce{CO(g)}$ | $\ce{CO2(g)}$ | $\ce{H2O(l)}$ | $\ce{H2O(g)}$ | $\ce{NH3(g)}$ | $\ce{NO(g)}$ | $\ce{C2H4(g)}$ |
|---|---|---|---|---|---|---|---|
| $-74.8$ | $-110.5$ | $-393.5$ | $-285.8$ | $-241.8$ | $-46.1$ | $+90.3$ | $+52.4$ |

*From* [3.3](lessons/03-03-hess-law-enthalpies-formation.md)

### Equilibrium

$$K_c = \frac{[\ce{C}]^c[\ce{D}]^d}{[\ce{A}]^a[\ce{B}]^b}, \qquad K_p = K_c (RT)^{\Delta n}, \qquad \Delta n = (\text{mol gas products}) - (\text{mol gas reactants})$$

| Stress | Shift | Does $K$ change? |
|---|---|---|
| add a species | away from what you added | no |
| remove a species | toward what you removed | no |
| compress (raise $P$) | toward the side with **fewer moles of gas** | no |
| raise $T$, exothermic ($\Delta H<0$) | left (heat is a product) | **yes**, $K$ falls |
| raise $T$, endothermic | right | **yes**, $K$ rises |
| add a catalyst | none — just faster | no |

**ICE + small-$x$:** if $K$ is tiny, approximate $C - x \approx C$, solve, then
**validate**: the approximation is fine when $x/C < 5\%$ (roughly, when
$C/K \gtrsim 400$). Otherwise solve the quadratic.

*From* [3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md)

### Acids and bases

$$K_w = [\ce{H+}][\ce{OH-}] = 1.0\times10^{-14}, \qquad \mathrm{pH} + \mathrm{pOH} = 14 \ \ (25\,^\circ\mathrm{C})$$

$$\text{strong acid: } [\ce{H+}] = C \qquad \text{weak acid: } [\ce{H+}] \approx \sqrt{K_a C} \qquad \text{weak base: } [\ce{OH-}] \approx \sqrt{K_b C}$$

$$K_a K_b = K_w, \qquad \mathrm{p}K_a = -\log_{10} K_a$$

**The strong acids** (everything else is weak): $\ce{HCl}$, $\ce{HBr}$, $\ce{HI}$,
$\ce{HNO3}$, $\ce{H2SO4}$, $\ce{HClO4}$.
**The strong bases:** group-1 hydroxides ($\ce{NaOH}$, $\ce{KOH}$, $\ce{LiOH}$) and
the heavy group-2 hydroxides ($\ce{Ca(OH)2}$, $\ce{Sr(OH)2}$, $\ce{Ba(OH)2}$).

Weak-acid constants used in the lessons:

| Acid | $K_a$ | $\mathrm{p}K_a$ |
|---|---|---|
| formic, $\ce{HCOOH}$ | $1.8\times10^{-4}$ | 3.75 |
| acetic, $\ce{CH3COOH}$ | $1.8\times10^{-5}$ | 4.74 |
| dihydrogen phosphate, $\ce{H2PO4^-}$ | $6.3\times10^{-8}$ | 7.20 |
| hypochlorous, $\ce{HOCl}$ | $3.0\times10^{-8}$ | 7.5 |

*From* [4.1](lessons/04-01-acids-bases-ph-strength.md)

### Buffers and titration

$$\mathrm{pH} = \mathrm{p}K_a + \log_{10}\frac{[\ce{A-}]}{[\ce{HA}]}$$

- Equal amounts ⇒ $\mathrm{pH} = \mathrm{p}K_a$. **Design rule:** pick an acid whose $\mathrm{p}K_a$ is near the target pH, then tune the ratio.
- **Effective range** $\mathrm{p}K_a \pm 1$ (ratios from 1:10 to 10:1). Capacity is largest at equal amounts *and* high concentration.
- The mole ratio works as well as the concentration ratio — both species share one volume.

**The four acts of a weak-acid titration with strong base:**

| Stage | pH from |
|---|---|
| initial | $[\ce{H+}] \approx \sqrt{K_a C}$ |
| buffer region | Henderson–Hasselbalch (flat) |
| half-equivalence | $\mathrm{pH} = \mathrm{p}K_a$ |
| equivalence | the conjugate base alone: $K_b = K_w/K_a$, then $[\ce{OH-}] \approx \sqrt{K_b C}$ |

**Equivalence pH by pairing:** strong + strong $= 7$; weak acid + strong base $> 7$;
weak base + strong acid $< 7$. Choose an indicator whose color-change window
**brackets** that pH.

*From* [4.2](lessons/04-02-buffers-titration.md)

### Kinetics

| Order | Integrated law | Linear plot | Half-life |
|---|---|---|---|
| 0 | $[\ce{A}] = [\ce{A}]_0 - kt$ | $[\ce{A}]$ vs. $t$ | $[\ce{A}]_0/2k$ |
| 1 | $\ln[\ce{A}] = \ln[\ce{A}]_0 - kt$ | $\ln[\ce{A}]$ vs. $t$ | $\dfrac{\ln 2}{k}$ |
| 2 | $\dfrac{1}{[\ce{A}]} = \dfrac{1}{[\ce{A}]_0} + kt$ | $1/[\ce{A}]$ vs. $t$ | $\dfrac{1}{k[\ce{A}]_0}$ |

Identify the order by seeing **which plot is a straight line**.

**Method of initial rates:** double one reactant with the others fixed; the rate
multiplies by $2^m$. No change → $m=0$; doubles → $m=1$; quadruples → $m=2$.

$$k = A e^{-E_a/RT}, \qquad \ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

*From* [4.3](lessons/04-03-taste-of-kinetics.md)

### Electrochemistry

$$E^\circ_\text{cell} = E^\circ_\text{cathode} - E^\circ_\text{anode}, \qquad \Delta G^\circ = -nFE^\circ_\text{cell}, \qquad E = E^\circ_\text{cell} - \frac{RT}{nF}\ln Q$$

$$E^\circ_\text{cell} > 0 \iff \Delta G^\circ < 0 \iff \text{spontaneous as written}$$

Both values in the subtraction are tabulated **reduction** potentials — the minus
sign does the flipping for you. The more positive potential is the cathode.

Standard reduction potentials used in the lessons (volts, 25 °C):

| Half-reaction | $E^\circ$ |
|---|---|
| $\ce{Ag+ + e- -> Ag}$ | $+0.80$ |
| $\ce{Cu^2+ + 2e- -> Cu}$ | $+0.34$ |
| $\ce{2H+ + 2e- -> H2}$ (SHE) | $0$ by definition |
| $\ce{Ni^2+ + 2e- -> Ni}$ | $-0.26$ |
| $\ce{Fe^2+ + 2e- -> Fe}$ | $-0.44$ |
| $\ce{Zn^2+ + 2e- -> Zn}$ | $-0.76$ |

**Cell notation:** anode on the left, cathode on the right; $\vert$ is a phase
boundary, $\Vert$ the salt bridge. Electrons cross the *wire* anode → cathode;
ions cross the *bridge* (cations toward the cathode).

*From* [4.4](lessons/04-04-taste-of-electrochemistry.md)

## Assumed, not taught here

This is a Tier 0 course with no listed prerequisites, so it borrows freely. Each
row points at the course that actually derives the fact.

| Fact | Where it's taught |
|---|---|
| Logarithms and antilogs (the entire pH scale, $\mathrm{p}K_a$, Arrhenius) | [algebra-foundations 5.2](../algebra-foundations/lessons/05-02-logarithms.md) |
| Exponentials, $e^x$, and their algebra ($e^{-E_a/RT}$, exponential decay) | [algebra-foundations 5.1](../algebra-foundations/lessons/05-01-exponential-functions.md), [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| Solving a quadratic — the fallback when the small-$x$ ICE shortcut fails | [algebra-foundations 4.1](../algebra-foundations/lessons/04-01-quadratic-equations.md) |
| Square roots and radical manipulation ($\sqrt{K_a C}$, $v_\text{rms}$) | [algebra-foundations 4.3](../algebra-foundations/lessons/04-03-radicals-and-rational-exponents.md) |
| Ratios, proportions, and percent arithmetic (percent composition, yield, abundance) | [arithmetic-number-sense 2.3](../arithmetic-number-sense/lessons/02-03-ratios-proportions-percents.md) |
| Significant figures and order-of-magnitude sanity checks | [arithmetic-number-sense 3.1](../arithmetic-number-sense/lessons/03-01-rounding-and-estimation.md), [analytical-chemistry 1.1](../analytical-chemistry/lessons/01-01-accuracy-precision-significant-figures.md) |
| Adding vectors head-to-tail (bond dipoles summing to $\vec\mu_\text{net}$) | [precalculus 4.2](../precalculus/lessons/04-02-vectors-parametric-and-polar.md) |
| Solving $d[\ce{A}]/dt = -k[\ce{A}]^m$ — where the integrated rate laws come from | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md), [ode-refresher 1.3](../ode-refresher/lessons/01-03-first-order-models.md) |
| Quantized energy levels and orbital shapes as solutions of the hydrogen atom | [quantum-mechanics 4.4](../quantum-mechanics/lessons/04-04-hydrogen-atom.md), [4.3](../quantum-mechanics/lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| Electron spin and why Pauli exclusion holds | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md), [5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Molecular orbitals beyond the $\sigma/\sigma^*$ cartoon (correct $\ce{O2}$ paramagnetism) | [quantum-chemistry 1.6](../quantum-chemistry/lessons/01-06-h2-plus-lcao.md) |
| $\Delta U = q + w$ as physics, and the heat/work sign conventions | [thermodynamics-physics 1.3](../thermodynamics-physics/lessons/01-03-heat-work-first-law.md) |
| Why $H$ is a state function, and $\Delta H$ at constant pressure | [physical-chemistry 1.1](../physical-chemistry/lessons/01-01-first-law-enthalpy.md) |
| The Maxwell–Boltzmann distribution and $\overline{KE} = \tfrac32 k_B T$ | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md), [3.4](../stat-mech/lessons/03-04-equipartition-theorem.md) |
| Where the van der Waals $a$ and $b$ corrections come from | [stat-mech 5.1](../stat-mech/lessons/05-01-virial-van-der-waals.md) |
| $\Delta G^\circ = -RT\ln K$ — why an equilibrium constant is a free energy | [physical-chemistry 2.6](../physical-chemistry/lessons/02-06-chemical-equilibrium-constant.md) |
| Where tabulated $E^\circ$ values and the SHE reference come from | [electrochemistry 1.3](../electrochemistry/lessons/01-03-electrode-potentials-she-series.md) |
| $\Delta G^\circ = -nFE^\circ$ and the Nernst equation, derived | [electrochemistry 1.4](../electrochemistry/lessons/01-04-cell-emf-gibbs-equilibrium.md), [1.5](../electrochemistry/lessons/01-05-nernst-equation-concentration-cells.md) |
| Rate laws, mechanisms, and transition-state theory in full | [physical-chemistry 3.1](../physical-chemistry/lessons/03-01-rate-laws-reaction-order.md), [3.4](../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) |

**Not derived anywhere yet, and that's fine:** the periodic table's atomic masses
and electronegativities are measured data (tabulated above), and the solubility
rules are an empirical summary, not a theorem — lattice energy gives the *reason*,
in [inorganic-chemistry 1.2](../inorganic-chemistry/lessons/01-02-ionic-solids-lattice-energy.md).

## Pitfalls

### Atoms and configurations

- An orbital is a probability cloud, not a planetary orbit — "where is the electron right now" has no answer. *([1.1](lessons/01-01-quantum-atom.md))*
- Mass number $A$ is a whole-number nucleon count for one nuclide; the periodic-table value is an abundance-weighted average over isotopes (35.45 for $\ce{Cl}$). *([1.1](lessons/01-01-quantum-atom.md))*
- Only a photon matching a gap does anything — the wrong energy passes straight through. *([1.1](lessons/01-01-quantum-atom.md))*
- A p subshell is *three* orbitals and a d is *five*, not one blob each. *([1.1](lessons/01-01-quantum-atom.md))*
- Fill order and removal order are different lists: $4s$ fills before $3d$ but leaves first. $\ce{Fe^2+}$ is $[\ce{Ar}]3d^6$. *([1.2](lessons/01-02-electron-configurations-periodic-table.md))*
- $\ce{Cr}$ and $\ce{Cu}$ break the pattern by one electron — $4s^1 3d^5$ and $4s^1 3d^{10}$. *([1.2](lessons/01-02-electron-configurations-periodic-table.md))*
- Hund's rule first: carbon's $2p^2$ is two unpaired electrons in separate orbitals, not one pair. *([1.2](lessons/01-02-electron-configurations-periodic-table.md))*

### Periodic trends

- Adding electrons across a period makes atoms *smaller*, not bigger — the protons added alongside win. Size grows only when a new shell opens. *([1.3](lessons/01-03-periodic-trends.md))*
- Ionization energy (holding what you have) and electron affinity (grabbing more) trend together but are separate measurements with separate irregularities. *([1.3](lessons/01-03-periodic-trends.md))*
- More protons does not mean more electronegative: $\ce{O}$ beats $\ce{S}$ because its valence shell is closer in and less shielded. Position beats raw $Z$. *([1.3](lessons/01-03-periodic-trends.md))*

### Bonding and shape

- Formal charge is bookkeeping, not a real charge — it ranks candidate drawings; it is not the $\delta+/\delta-$ from electronegativity. *([1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md))*
- Don't force an octet: period-3+ **central** atoms expand ($\ce{SF4}$, $\ce{PCl5}$), $\ce{B}$ and $\ce{Be}$ fall short. Terminal atoms still obey. *([1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md))*
- Resonance forms are not flickering states — the molecule is one static, delocalized average. *([1.4](lessons/01-04-ionic-covalent-bonds-lewis-structures.md))*
- A double bond is **one** domain, not two: $\ce{CO2}$ is linear. *([1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md))*
- Report the *molecular* geometry, not the electron-domain geometry — $\ce{NH3}$ has tetrahedral domains but is trigonal pyramidal. Always do both steps. *([1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md))*
- Polar bonds do not make a polar molecule; the *vectors* have to fail to cancel. $\ce{CCl4}$ has four strong dipoles and no net one. *([1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md))*
- A trigonal-bipyramidal lone pair goes **equatorial**, never axial. *([1.5](lessons/01-05-molecular-shape-vsepr-hybridization-mo.md))*

### Moles and stoichiometry

- Grams → moles uses $M$; moles → particles uses $N_A$. Two different factors — don't swap them, and don't skip the middle. *([2.1](lessons/02-01-mole-molar-mass-formulas.md))*
- A subscript outside a parenthesis distributes over everything inside: $\ce{Ca(NO3)2}$ has two N and **six** O. *([2.1](lessons/02-01-mole-molar-mass-formulas.md))*
- Percent composition gives only the *empirical* formula; you need a measured molar mass to pick the multiple. *([2.1](lessons/02-01-mole-molar-mass-formulas.md))*
- Balance with coefficients only — changing $\ce{H2O}$ to $\ce{H2O2}$ changes the substance. *([2.2](lessons/02-02-stoichiometry-limiting-reagents.md))*
- Coefficients are mole ratios, never mass ratios; you must route through moles on both ends. *([2.2](lessons/02-02-stoichiometry-limiting-reagents.md))*
- Once the limiting reagent is identified, the product depends on it *alone* — the excess only tells you what's left over. *([2.2](lessons/02-02-stoichiometry-limiting-reagents.md))*

### Solutions and redox

- Only dissolved strong electrolytes split into ions — the precipitate, water, and weak electrolytes stay written whole. *([2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md))*
- Oxidation number is not actual charge: there is no bare $\ce{Mn^7+}$ in permanganate. *([2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md))*
- The species **oxidized** is the **reducing** agent. Say "the one that's oxidized does the reducing" until it sticks. *([2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md), [4.4](lessons/04-04-taste-of-electrochemistry.md))*
- A net ionic equation still showing the same ion on both sides isn't finished. *([2.3](lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md))*

### Gases

- **Kelvin, always.** Celsius in $PV=nRT$ isn't a small error; at room temperature it's off by more than tenfold. *([3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md))*
- 22.4 L/mol is the molar volume at **STP only** — near 24.5 L/mol at room temperature. When unsure, compute $V = nRT/P$. *([3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md))*
- Real gases aren't always *below* ideal pressure: attraction ($a$) lowers it, finite volume ($b$) raises it, and which wins depends on the regime. *([3.1](lessons/03-01-gases-ideal-gas-law-kinetic-theory.md))*

### Thermochemistry

- The reaction and the calorimeter have opposite signs. Solution warms ⇒ $q_\text{rxn} < 0$ ⇒ exothermic. Always write $q_\text{rxn} = -q_\text{cal}$. *([3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md))*
- A bomb calorimeter measures $\Delta U$ (constant volume), not $\Delta H$. Only the open coffee cup hands you $\Delta H$. *([3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md))*
- $\Delta H$ is per mole **of the reaction as written** — halve the equation and you halve it. *([3.2](lessons/03-02-thermochemistry-enthalpy-calorimetry.md), [3.3](lessons/03-03-hess-law-enthalpies-formation.md))*
- Reversing a step flips the sign of its $\Delta H$; scaling a step scales its $\Delta H$. Forgetting either is the classic Hess's-law error. *([3.3](lessons/03-03-hess-law-enthalpies-formation.md))*
- The master formula is **products minus reactants**. Backwards flips every sign. *([3.3](lessons/03-03-hess-law-enthalpies-formation.md))*
- Only the *standard-state* form of an element has $\Delta H_f^\circ = 0$ — $\ce{O2(g)}$ yes, $\ce{O(g)}$ and $\ce{O3(g)}$ no. *([3.3](lessons/03-03-hess-law-enthalpies-formation.md))*

### Equilibrium

- Equilibrium is not a stopped reaction, and not a 50/50 split — it's whatever makes $Q = K$. *([3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md))*
- Solids and pure liquids never appear in $K$. *([3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md))*
- A catalyst gives you the same equilibrium sooner, never more product. *([3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md), [4.3](lessons/04-03-taste-of-kinetics.md))*
- The small-$x$ shortcut needs a small $K$; validate that $x$ is under about 5% of the initial value, or solve the quadratic. *([3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md))*
- Temperature is the only stress that changes the *value* of $K$. *([3.4](lessons/03-04-chemical-equilibrium-k-le-chatelier.md))*

### Acids, bases, and buffers

- Strong ≠ concentrated. Fraction dissociated and amount dissolved are independent knobs. *([4.1](lessons/04-01-acids-bases-ph-strength.md))*
- $[\ce{H+}] = C$ only for a strong acid; a weak one must go through $K_a$, or you overstate acidity by orders of magnitude. *([4.1](lessons/04-01-acids-bases-ph-strength.md))*
- Mind the minus sign: smaller $[\ce{H+}]$ means *larger* pH, and pH 5 means $10^{-5}$ M. *([4.1](lessons/04-01-acids-bases-ph-strength.md))*
- Big $K_a$ forces *small* $K_b$ — a strong acid has a weak conjugate base. *([4.1](lessons/04-01-acids-bases-ph-strength.md))*
- Strong acids can't buffer; buffering needs a *weak* pair so both forms stay around. *([4.2](lessons/04-02-buffers-titration.md))*
- The equivalence point is pH 7 only for strong + strong. "Equivalence" means stoichiometric, not neutral. *([4.2](lessons/04-02-buffers-titration.md))*
- Half-equivalence ($\mathrm{pH} = \mathrm{p}K_a$, flat) and equivalence (the steep jump) sit at half and full titrant volume. *([4.2](lessons/04-02-buffers-titration.md))*
- The indicator's color-change window must straddle the equivalence pH, not the buffer region. *([4.2](lessons/04-02-buffers-titration.md))*

### Kinetics and electrochemistry

- Orders are measured, never read off the coefficients — they reflect the mechanism the balanced equation hides. *([4.3](lessons/04-03-taste-of-kinetics.md))*
- "Fast" and "far" are different questions: $k$ and $E_a$ govern speed, $K$ and $\Delta G$ govern extent. Diamond is unstable *and* permanent. *([4.3](lessons/04-03-taste-of-kinetics.md))*
- Don't flip the anode's $E^\circ$ yourself — $E^\circ_\text{cathode} - E^\circ_\text{anode}$ already uses two reduction potentials and does the flipping. *([4.4](lessons/04-04-taste-of-electrochemistry.md))*
- $E^\circ$ does **not** scale when you multiply a half-reaction; volts are energy per charge. Only $n$ in $\Delta G^\circ = -nFE^\circ_\text{cell}$ picks up the factor. *([4.4](lessons/04-04-taste-of-electrochemistry.md))*
- Wire carries electrons (anode → cathode); the salt bridge carries ions (cations toward the cathode). *([4.4](lessons/04-04-taste-of-electrochemistry.md))*

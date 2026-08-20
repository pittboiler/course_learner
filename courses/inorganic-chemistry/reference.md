# Inorganic Chemistry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Inorganic chemistry is one question asked at four scales: *how tightly does a
metal hold electrons, and what does it grab?* Module 1 answers it for bare atoms
and ionic solids (effective nuclear charge, lattice energy, hard–soft matching);
Module 2 wraps the metal in ligands and lets the d-orbital splitting predict
geometry, colour, and spin; Module 3 supplies the instruments (symmetry, spectra,
magnetism) that measure that splitting; Module 4 puts the metal to work
(18-electron counting, catalytic cycles, metalloproteins). The tables below —
splitting diagrams, spectrochemical series, ligand names, point groups, colour
and magnetic-moment conversions — are the ones you'd otherwise go hunting for
mid-problem.

General-chemistry basics (moles, Lewis structures, VSEPR, equilibrium, Hess's
law) are **not** repeated here — see
[the general-chemistry card](../general-chemistry/reference.md) and the
*Assumed, not taught here* table at the bottom.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $Z_\text{eff}$ | effective nuclear charge — the net pull an electron actually feels after shielding | [1.1](lessons/01-01-periodic-trends-revisited.md) |
| $S$ | shielding (screening) constant — how much of $Z$ the other electrons hide (not the improper axis $S_n$, and not spin) | [1.1](lessons/01-01-periodic-trends-revisited.md) |
| IE, EA, EN | ionization energy, electron affinity, electronegativity | [1.1](lessons/01-01-periodic-trends-revisited.md) |
| $U$ | lattice energy — the glue holding an ionic crystal together (sign convention varies; see below) | [1.2](lessons/01-02-ionic-solids-lattice-energy.md) |
| $M$ | Madelung constant — the whole lattice geometry packed into one dimensionless number | [1.2](lessons/01-02-ionic-solids-lattice-energy.md) |
| $n$ (Born) | Born exponent, 5–12 — steepness of the short-range repulsion (**not** the unpaired-electron count) | [1.2](lessons/01-02-ionic-solids-lattice-energy.md) |
| $r_0$, $\rho$ | equilibrium cation–anion distance $r_+ + r_-$, and the radius ratio $\rho = r_+/r_-$ | [1.2](lessons/01-02-ionic-solids-lattice-energy.md) |
| $z_\pm$ | integer charge number of an ion ($+2$ for $\ce{Mg^2+}$) | [1.2](lessons/01-02-ionic-solids-lattice-energy.md) |
| $\Delta H_\text{sub}$, $D$, $\Delta H_f$ | sublimation/atomization enthalpy, bond-dissociation enthalpy of $\ce{X2}$, enthalpy of formation | [1.3](lessons/01-03-born-haber-cycle.md) |
| CN | coordination number — the count of **donor atoms** touching the metal | [2.1](lessons/02-01-complexes-ligands-coordination-number.md) |
| en | ethylenediamine, $\ce{H2N-CH2-CH2-NH2}$ — the workhorse bidentate ligand | [2.1](lessons/02-01-complexes-ligands-coordination-number.md) |
| $K_f$ | formation constant — equilibrium constant for assembling a complex | [2.1](lessons/02-01-complexes-ligands-coordination-number.md) |
| $[\ \cdots\ ]$ | square brackets = the coordination sphere; anything outside is a spectator counterion | [2.1](lessons/02-01-complexes-ligands-coordination-number.md) |
| $x_\text{metal}$ | the metal's oxidation state, solved from charge balance | [2.2](lessons/02-02-nomenclature-oxidation-state.md) |
| *cis*/*trans*, *fac*/*mer* | ligands adjacent vs opposite; three ligands capping a face vs spanning a meridian | [2.3](lessons/02-03-isomerism-complexes.md) |
| $\Delta$, $\Lambda$ | the right- and left-handed enantiomers of a chiral tris-chelate propeller | [2.3](lessons/02-03-isomerism-complexes.md) |
| $\Delta_o$ | octahedral field-splitting parameter, $E(e_g) - E(t_{2g})$ | [2.4](lessons/02-04-crystal-field-octahedral-splitting.md) |
| $t_{2g}$, $e_g$ | the lower (between-axis) trio and upper (on-axis) pair of d orbitals in an octahedral field | [2.4](lessons/02-04-crystal-field-octahedral-splitting.md) |
| CFSE | crystal-field stabilization energy — net d-electron energy gained from the splitting | [2.4](lessons/02-04-crystal-field-octahedral-splitting.md) |
| $P$ | pairing energy — the penalty for forcing two electrons into one orbital | [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md) |
| $n_\text{unp}$ | number of unpaired electrons | [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md) |
| $e$, $t_2$ | the tetrahedral d-orbital sets — same orbitals as $e_g$/$t_{2g}$, opposite order, no "g" | [2.6](lessons/02-06-tetrahedral-square-planar-fields.md) |
| $\Delta_t$ | tetrahedral splitting, $\approx \tfrac49 \Delta_o$ | [2.6](lessons/02-06-tetrahedral-square-planar-fields.md) |
| $E$, $C_n$, $\sigma$, $i$, $S_n$ | the five symmetry elements: identity, proper rotation, mirror plane, inversion centre, improper rotation | [3.1](lessons/03-01-symmetry-elements-operations.md) |
| $\sigma_v$, $\sigma_h$, $\sigma_d$ | mirror planes containing / perpendicular to / bisecting-$C_2$-axes relative to the principal axis | [3.1](lessons/03-01-symmetry-elements-operations.md) |
| $C_{2v}$, $D_{4h}$, $O_h$, $T_d$ | Schoenflies point-group labels — the molecule's whole symmetry toolkit in one symbol | [3.2](lessons/03-02-assigning-point-groups.md) |
| $\lambda_{max}$, $\bar\nu$ | wavelength of maximum absorption (nm), and its wavenumber $1/\lambda$ in $\mathrm{cm^{-1}}$ | [3.3](lessons/03-03-electronic-spectra-dd-transitions.md) |
| $\varepsilon$ | molar absorptivity, $\mathrm{M^{-1}cm^{-1}}$ — how *intense* a band is, not where it sits | [3.3](lessons/03-03-electronic-spectra-dd-transitions.md) |
| LMCT, MLCT | ligand-to-metal and metal-to-ligand charge transfer | [3.3](lessons/03-03-electronic-spectra-dd-transitions.md) |
| $\mu_{so}$, $\mu_\text{eff}$ | the spin-only magnetic moment (predicted) and the measured effective moment | [3.4](lessons/03-04-magnetism-of-complexes.md) |
| $\mu_B$ | Bohr magneton, $9.27\times10^{-24}\ \mathrm{J/T}$ — the natural unit of atomic magnetism | [3.4](lessons/03-04-magnetism-of-complexes.md) |
| $\eta^n$ | hapticity — how many *contiguous* atoms of one ligand touch the metal | [4.1](lessons/04-01-organometallics-18-electron-rule.md) |
| Cp | cyclopentadienyl, $\ce{C5H5}$, usually $\eta^5$ | [4.1](lessons/04-01-organometallics-18-electron-rule.md) |
| TON, TOF | turnover number (total product per catalyst) and turnover frequency (TON per unit time) | [4.2](lessons/04-02-homogeneous-catalysis-cycle.md) |

## Definitions

### Effective nuclear charge

The net positive pull an electron actually feels once the other electrons have
blurred out part of the nucleus. Every periodic trend is a story about this one
number.

$$Z_\text{eff} = Z - S$$

*Introduced:* [1.1](lessons/01-01-periodic-trends-revisited.md)

### Lanthanide contraction

Filling the diffuse $4f$ shell shields the outer electrons badly, so $Z_\text{eff}$
creeps up and atoms shrink a little at every step — accumulated over fourteen
lanthanides, enough to cancel the expected period-6 size increase. Result: $\ce{Zr}$
and $\ce{Hf}$ (and $\ce{Nb}$/$\ce{Ta}$, $\ce{Mo}$/$\ce{W}$) are near-twins in size and chemistry.

*Introduced:* [1.1](lessons/01-01-periodic-trends-revisited.md)

### Inert-pair effect

Heavy p-block elements increasingly prefer an oxidation state **two below** the
group value ($\ce{Tl+}$ over $\ce{Tl^3+}$, $\ce{Pb^2+}$ over $\ce{Pb^4+}$) because the $ns^2$ pair
is held too tightly to bond.

*Introduced:* [1.1](lessons/01-01-periodic-trends-revisited.md)

### Lattice energy

The energy accounting for tearing an ionic crystal apart into a gas of infinitely
separated ions (or, with the opposite sign, for assembling it). One number that
predicts melting point, hardness, and solubility.

$$U \propto \frac{|z_+ z_-|}{r_0}$$

*Introduced:* [1.2](lessons/01-02-ionic-solids-lattice-energy.md)

### Madelung constant

The dimensionless factor that packages the *entire* alternating lattice sum —
nearest-neighbour attractions, next-nearest repulsions, and outward — into one
number. It depends **only on the structure type**, never on which ions occupy it.

*Introduced:* [1.2](lessons/01-02-ionic-solids-lattice-energy.md)

### Born repulsion and the Born exponent

The sharp push-back (Pauli exclusion) when electron clouds start to overlap,
modelled as $\propto 1/r^{\,n}$. It is what stops pure Coulomb attraction from
collapsing the crystal to $r = 0$, and it sets the equilibrium spacing $r_0$.

*Introduced:* [1.2](lessons/01-02-ionic-solids-lattice-energy.md)

### Born–Haber cycle

A closed thermochemical loop that measures the unmeasurable: build the crystal by
two paths (direct formation vs. the scenic route through gaseous ions), set them
equal because enthalpy is a state function, and solve for the lattice energy.

$$U = \Delta H_\text{sub} + \text{IE} + \tfrac12 D + \text{EA} - \Delta H_f$$

*Introduced:* [1.3](lessons/01-03-born-haber-cycle.md)

### Brønsted acid and base

Whoever hands off the proton is the acid; whoever catches it is the base.
Removing $\ce{H+}$ from an acid leaves its **conjugate base**; the two differ by
exactly one proton.

$$\ce{HA + B <=> A- + HB+}$$

*Introduced:* [1.4](lessons/01-04-bronsted-lewis-acids-bases.md)

### Amphoterism

A species that acts as an acid with one partner and a base with another. Water is
the archetype; $\ce{Al(OH)3}$, $\ce{ZnO}$, $\ce{Al2O3}$ are the inorganic showpieces —
they dissolve in *both* strong acid and strong base.

*Introduced:* [1.4](lessons/01-04-bronsted-lewis-acids-bases.md)

### Lewis acid and base

Drop the proton and follow the electron pair: an **acid** has a low-lying empty
orbital and accepts a pair; a **base** has an accessible lone pair and donates
one. Strictly more general than Brønsted — $\ce{H+}$ is merely one particular Lewis
acid (an empty $1s$).

*Introduced:* [1.4](lessons/01-04-bronsted-lewis-acids-bases.md)

### Dative bond and adduct

The bond formed when a Lewis base hands a whole lone pair to a Lewis acid: an
ordinary covalent bond in which *both* electrons came from one partner. The union
is the **adduct**, e.g. $\ce{BF3 + NH3 -> F3B-NH3}$. Every metal–ligand bond in
this course is a dative bond.

*Introduced:* [1.4](lessons/01-04-bronsted-lewis-acids-bases.md)

### Polarizability

How readily an electron cloud distorts under a nearby electric field. Big, diffuse
atoms polarize easily; small dense ones resist. This is the axis that "hard" and
"soft" sit on.

*Introduced:* [1.5](lessons/01-05-hard-soft-acid-base.md)

### Hard and soft (HSAB)

**Hard** = small, highly charged, tight, barely polarizable (a marble). **Soft** =
large, low-charged, squishy, highly polarizable (a water balloon). Hard–hard
bonds win on ionic attraction, soft–soft on covalent overlap; hard–soft gets
neither bonus.

> **Hard likes hard; soft likes soft.**

*Introduced:* [1.5](lessons/01-05-hard-soft-acid-base.md)

### Pearson's principle

Rearranging partners so hard pairs with hard and soft with soft releases energy,
so the exchange equilibrium lies to the right.

$$\text{(hard–soft)} + \text{(soft–hard)} \;\rightleftharpoons\; \text{(hard–hard)} + \text{(soft–soft)}$$

*Introduced:* [1.5](lessons/01-05-hard-soft-acid-base.md)

### Coordination complex

A central metal ion acting as a Lewis acid, gripped by ligands acting as Lewis
bases, each donating a lone pair into an empty metal orbital. The metal plus its
directly attached ligands is the **coordination sphere**, written in square
brackets; ions outside the brackets are counterions and are not bonded to the metal.

*Introduced:* [2.1](lessons/02-01-complexes-ligands-coordination-number.md)

### Ligand and donor atom

A **ligand** is the whole molecule or ion that binds; the **donor atom** is the
specific atom whose lone pair points at the metal. Which donor a metal prefers is
a hard–soft question: hard metals take O/F/N donors, soft metals take S/P/I.

*Introduced:* [2.1](lessons/02-01-complexes-ligands-coordination-number.md)

### Denticity

How many donor atoms one ligand uses to grip the metal — monodentate (one tooth),
bidentate (two), polydentate. A ligand biting with two or more teeth is a
**chelate**, and the metal–ligand rings it closes are chelate rings.

*Introduced:* [2.1](lessons/02-01-complexes-ligands-coordination-number.md)

### Coordination number

The total count of donor atoms bonded to the metal — **teeth, not ligands**.

$$\text{CN} = \sum_{\text{ligands}} (\text{denticity of that ligand})$$

*Introduced:* [2.1](lessons/02-01-complexes-ligands-coordination-number.md)

### Chelate effect

A chelating ligand forms a far more stable complex than the same number of
comparable monodentate donors — and it's an **entropy** effect, not stronger
bonds. One claw binding releases several free molecules, so $\Delta S^\circ > 0$,
$\Delta G^\circ$ drops, and $K_f$ climbs (often by $10^{10}$).

*Introduced:* [2.1](lessons/02-01-complexes-ligands-coordination-number.md)

### Oxidation state of the metal

Pure charge bookkeeping: the bracket charge minus everything the ligands bring.
It fixes the d-electron count, which is the sole input to every crystal-field
prediction downstream.

$$x_\text{metal} = q_\text{complex} - \sum_i q_{\text{ligand},\,i}$$

*Introduced:* [2.2](lessons/02-02-nomenclature-oxidation-state.md)

### Structural isomers

Same formula, different **connectivity** — literally which atom is bonded to
what. Three flavours: **linkage** (an ambidentate ligand binds through its other
donor atom), **ionization** (an anion swaps between inside the sphere and outside
as a counterion), and **hydrate/solvate** (the swapped species is water).
**Coordination isomers** redistribute ligands between two complex ions.

*Introduced:* [2.3](lessons/02-03-isomerism-complexes.md)

### Ambidentate ligand

A ligand with two different donor atoms that can bind through either — nitro
($\ce{-NO2}$, N-bound) vs nitrito ($\ce{-ONO}$, O-bound); thiocyanato as $\ce{M-SCN}$
vs $\ce{M-NCS}$. Which one wins is an HSAB call.

*Introduced:* [2.3](lessons/02-03-isomerism-complexes.md)

### Stereoisomers

Same connectivity, different arrangement in space. **cis/trans** asks whether two
identical ligands are $90^\circ$ apart or $180^\circ$ apart; **fac/mer** is the
octahedral $\ce{MA3B3}$ version (three ligands capping one face, all mutually cis, vs
lying on a meridian, two trans and one cis).

*Introduced:* [2.3](lessons/02-03-isomerism-complexes.md)

### Chirality and enantiomers

A molecule is **chiral** if it is not superimposable on its mirror image; the two
forms are **enantiomers**, identical in every scalar property but rotating
polarized light oppositely. The rigorous test is symmetry:

$$\text{chiral} \iff \text{no improper axis } S_n \text{ of any order (so no } \sigma = S_1 \text{ and no } i = S_2)$$

The showcase is the octahedral tris-chelate propeller $\ce{[Co(en)3]^3+}$, whose two
handednesses are labelled $\Delta$ and $\Lambda$.

*Introduced:* [2.3](lessons/02-03-isomerism-complexes.md), sharpened in [3.1](lessons/03-01-symmetry-elements-operations.md)

### Crystal-field theory

A deliberately crude electrostatic model: treat every ligand as a point negative
charge and ask which d orbitals point *at* it. Those get shoved up, the rest sink,
and the resulting gap predicts colour, magnetism, and much of a complex's stability.

*Introduced:* [2.4](lessons/02-04-crystal-field-octahedral-splitting.md)

### Field-splitting parameter

The energy gap the splitting opens — how much more it costs to put an electron in
a ligand-facing orbital than in a between-ligand one.

$$\Delta_o \equiv E(e_g) - E(t_{2g})$$

*Introduced:* [2.4](lessons/02-04-crystal-field-octahedral-splitting.md)

### Barycenter rule

Splitting only *rearranges* orbital energies; it cannot move their weighted
average. Two orbitals up must be paid for by three orbitals down.

$$2x = 3y,\quad x + y = \Delta_o \;\Longrightarrow\; E(e_g) = +0.6\,\Delta_o,\quad E(t_{2g}) = -0.4\,\Delta_o$$

*Introduced:* [2.4](lessons/02-04-crystal-field-octahedral-splitting.md)

### Crystal-field stabilization energy

The net energy the d electrons gain, measured **from the barycenter**, by living
in a split set rather than a degenerate one. More negative = more glue.

$$\text{CFSE} = \left(-0.4\,n_{t_{2g}} + 0.6\,n_{e_g}\right)\Delta_o \;+\; p\,P$$

Here $p$ counts the **extra** pairs the field created beyond what the free ion
already had.

*Introduced:* [2.4](lessons/02-04-crystal-field-octahedral-splitting.md)

### Pairing energy

The energy penalty for forcing two electrons to share one orbital — they repel.
The quantity $\Delta$ is measured against, and the whole spin-state question.

*Introduced:* [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md)

### High spin and low spin

Each electron at a decision point picks the cheaper cost: climb the gap or pair
up. Small gap → spread out, maximum unpaired electrons (**high spin**); big gap →
double up low, minimum unpaired (**low spin**).

$$\text{high spin} \iff \Delta_o < P, \qquad \text{low spin} \iff \Delta_o > P$$

Only $d^4$–$d^7$ get a vote; every other count fills the same way either way.

*Introduced:* [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md)

### Spectrochemical series

Ligands ranked by the $\Delta_o$ they produce, measured on the same metal. Left =
weak field, small gap, high spin; right = strong field, big gap, low spin.

*Introduced:* [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md)

### Ligand-field theory

Crystal-field theory plus covalency. It explains what point charges cannot: a
*neutral* $\ce{CO}$ produces the largest $\Delta_o$ of all because it is a
**π-acceptor** — its empty $\pi^\ast$ orbitals drain metal $t_{2g}$ density
(**back-bonding**), lowering $t_{2g}$ and widening the gap. Halides are
**π-donors**: their filled p orbitals push $t_{2g}$ up and shrink it. The series is
really π-donor → σ-only → π-acceptor.

*Introduced:* [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md)

### Jahn–Teller distortion

Any nonlinear molecule in an orbitally degenerate state distorts to break the
degeneracy and lower its energy. The case you meet: an octahedral ion with an
**unequally occupied $e_g$ set** — high-spin $d^4$ or $d^9$ (the classic $\ce{Cu^2+}$) —
elongates along $z$, dropping $d_{z^2}$ and raising $d_{x^2-y^2}$. Pushed to the
limit, that elongation *becomes* the square-planar splitting.

*Introduced:* [2.6](lessons/02-06-tetrahedral-square-planar-fields.md)

### Symmetry element vs. symmetry operation

The **element** is the static geometric prop (an axis, a plane, a point); the
**operation** is the motion you perform with it that leaves the molecule looking
unchanged. One element can host several operations — a $C_3$ axis gives both
$C_3^1$ and $C_3^2$. Point groups count *operations*.

*Introduced:* [3.1](lessons/03-01-symmetry-elements-operations.md)

### Principal axis

The $C_n$ with the largest $n$, drawn vertical by convention. Everything else —
especially whether a mirror plane is $\sigma_v$, $\sigma_h$, or $\sigma_d$ — is
named relative to it, so find it first.

*Introduced:* [3.1](lessons/03-01-symmetry-elements-operations.md)

### Improper rotation

A two-step move done as one: rotate by $360^\circ/n$, then reflect through the
plane perpendicular to that axis. Neither half need be a symmetry on its own.

$$S_1 = \sigma, \qquad S_2 = i$$

This is why $S_n$ is the master category for the chirality test.

*Introduced:* [3.1](lessons/03-01-symmetry-elements-operations.md)

### Point group

The complete, self-contained set of a molecule's symmetry operations — closed
under composition, with an identity and inverses (the group axioms), and leaving
at least one point fixed. Labelled by a **Schoenflies symbol**. A molecule is
chiral exactly when its point group is a **pure-rotation group** ($C_n$ or $D_n$,
including $C_1$).

*Introduced:* [3.2](lessons/03-02-assigning-point-groups.md)

### d–d transition

An electron absorbing a photon of energy exactly $\Delta_o$ and jumping
$t_{2g} \to e_g$. The complex swallows that colour and shows you the
**complementary** one — so the colour you see is never the colour absorbed.

*Introduced:* [3.3](lessons/03-03-electronic-spectra-dd-transitions.md)

### Laporte (parity) rule

In a centrosymmetric complex an allowed transition must change parity,
$g \leftrightarrow u$. All d orbitals are *gerade*, so every d–d transition is
$g \to g$ — **forbidden**. It happens anyway, weakly, because vibrations
momentarily destroy the inversion centre (vibronic coupling). Tetrahedral
complexes, having no centre of symmetry, escape the rule and absorb more strongly.

*Introduced:* [3.3](lessons/03-03-electronic-spectra-dd-transitions.md)

### Spin selection rule

Total spin cannot change: $\Delta S = 0$. A transition that would flip a spin is
**spin-forbidden** and even fainter. High-spin $d^5$ is doubly forbidden (every
excitation must both pair a spin and violate Laporte), which is why
$\ce{[Mn(H2O)6]^2+}$ is nearly colourless.

*Introduced:* [3.3](lessons/03-03-electronic-spectra-dd-transitions.md)

### Charge-transfer band

An electron jumping between a ligand orbital and a metal orbital — **LMCT**
(ligand → metal) or **MLCT** (metal → ligand). Both Laporte- and spin-allowed, so
$\varepsilon \approx 10^3$–$10^4$: a hundred to ten-thousand times louder than a
d–d band. A vivid colour almost always means charge transfer, not d–d — the
purple of $\ce{MnO4-}$ (with $d^0$ manganese, so no d–d band is even possible) is
the standing example.

*Introduced:* [3.3](lessons/03-03-electronic-spectra-dd-transitions.md)

### Paramagnetism and diamagnetism

**Every** electron sets up a weak counter-field that pushes a sample out of a
magnet (diamagnetism). **Unpaired** electrons align with the field instead, and
that pull is far stronger — the sample is pulled in (paramagnetism). A Gouy or
Evans balance weighs the difference. Diamagnetic means *no unpaired* electrons,
not *no* d electrons.

*Introduced:* [3.4](lessons/03-04-magnetism-of-complexes.md)

### Spin-only magnetic moment

With $n$ unpaired electrons the total spin is $S = n/2$, and if orbital motion
contributes nothing the moment depends on $n$ alone:

$$\mu_{so} = \sqrt{n(n+2)}\ \ \mu_B$$

Good to a few tenths for first-row (3d) complexes; heavy 4d/5d metals and
orbitally degenerate ground states drift above it.

*Introduced:* [3.4](lessons/03-04-magnetism-of-complexes.md)

### 18-electron rule

The octet rule with the d orbitals included. A transition metal has nine valence
orbitals ($5d + 1s + 3p$), so a filled valence shell holds **18** electrons, and
complexes hitting 18 tend to be stable and isolable. A strong tendency, not a law.

$$\text{count} = N_\text{metal (group number)} + \sum_\text{ligands}(\text{donation}) - (\text{overall charge})$$

*Introduced:* [4.1](lessons/04-01-organometallics-18-electron-rule.md)

### Hapticity

The number of *contiguous* atoms of one ligand simultaneously bonded to the
metal, written $\eta^n$. For π-ligands it sets the donation directly:
$\eta^2$-alkene gives 2, $\eta^5$-Cp gives 5, $\eta^6$-benzene gives 6. A Cp ring can
"slip" from $\eta^5$ to $\eta^3$ or $\eta^1$ to open a coordination site.

*Introduced:* [4.1](lessons/04-01-organometallics-18-electron-rule.md)

### Coordinatively unsaturated

Below 18 electrons, so at least one valence orbital is empty — a vacant seat where
a substrate can bind *without* first ejecting a ligand. This is a design feature,
not a defect: 16-electron square-planar $d^8$ complexes (Wilkinson's catalyst
$\ce{RhCl(PPh3)3}$, Vaska's complex) are deliberately built this way.

*Introduced:* [4.1](lessons/04-01-organometallics-18-electron-rule.md)

### Catalytic cycle

A closed loop of elementary steps in which a metal binds substrate, transforms it,
releases product, and returns to *exactly* its starting oxidation state and
electron count. If the two dials don't come home, you have a reactant, not a
catalyst.

*Introduced:* [4.2](lessons/04-02-homogeneous-catalysis-cycle.md)

### Turnover number and frequency

$\text{TON} = (\text{mol product})/(\text{mol catalyst})$ — total mileage before
the catalyst dies. $\text{TOF} = \text{TON}/t$ — the speed. Industrial catalysts
run TON in the thousands to millions.

*Introduced:* [4.2](lessons/04-02-homogeneous-catalysis-cycle.md)

### Heme

An $\ce{Fe^2+}$ ion held by a **porphyrin**, a flat tetradentate $\ce{N4}$ macrocycle,
plus one axial N from a **proximal histidine** — five ligands permanently
installed so the **sixth site stays open** for $\ce{O2}$. A coordination complex with
a deliberately reserved parking spot.

*Introduced:* [4.3](lessons/04-03-bioinorganic-metals-in-life.md)

### Cooperativity

Binding $\ce{O2}$ flips heme iron from high-spin (too big, sitting $\sim0.4$ Å out of
the porphyrin plane) to low-spin (smaller, snapping *into* the plane). That
sub-ångström motion tugs the proximal histidine, shifts the protein, and makes the
other three subunits bind more easily — producing hemoglobin's sigmoidal
(S-shaped) binding curve instead of myoglobin's plain hyperbola.

*Introduced:* [4.3](lessons/04-03-bioinorganic-metals-in-life.md)

## Formulas and rules

### Slater's rules

Write the configuration in these groups, in this order, then sum contributions
from all the *other* electrons to get $S$:

$$(1s)\;(2s,2p)\;(3s,3p)\;(3d)\;(4s,4p)\;(4d)\;(4f)\;(5s,5p)\;\dots$$

| Contributing electron | Contributes to $S$ |
|---|---|
| Same group as the chosen electron | $0.35$ each (but $0.30$ inside the $(1s)$ group) |
| For an **s or p** electron: any electron in shell $n-1$ | $0.85$ each |
| For an **s or p** electron: any electron in shell $n-2$ or deeper | $1.00$ each |
| For a **d or f** electron: *every* electron in a group to its left | $1.00$ each |
| Any electron in a group to the **right** | $0$ |

Worked anchor: a $3p$ electron in Si ($Z = 14$),
$S = 3(0.35) + 8(0.85) + 2(1.00) = 9.85$, so $Z_\text{eff} = 4.15$.

*From* [1.1](lessons/01-01-periodic-trends-revisited.md)

### Periodic trends and their exceptions

| Property | Across a period | Down a group | Driver |
|---|---|---|---|
| Atomic / ionic radius | decreases | increases | $Z_\text{eff}$ rises vs. a new outer shell |
| Ionization energy | increases | decreases | $Z_\text{eff}$ over distance |
| Electron affinity | more exothermic | roughly decreases | halogens are the champions |
| Electronegativity | increases | decreases | Pauling scale, $\ce{F} \approx 4.0$ at the top |

Cations are smaller than the parent atom, anions larger. Mulliken's intuition:
$\text{EN} \propto \tfrac12(\text{IE} + \text{EA})$.

**The four anomalies that break the arrows:**

1. **Group 2 → 13 IE dip** ($\ce{Be} > \ce{B}$, $\ce{Mg} > \ce{Al}$): group 13 gives up a higher-energy, better-shielded $np$ electron.
2. **Group 15 → 16 IE dip** ($\ce{N} > \ce{O}$, $\ce{P} > \ce{S}$): group 16's fourth p electron must pair, and pair repulsion eases its removal.
3. **d-block and lanthanide contraction:** poorly shielding d/f electrons let $Z_\text{eff}$ creep up, shrinking radii more than expected ($\ce{Hf} \approx \ce{Zr}$).
4. **Inert-pair effect:** heavy p-block elements favour the oxidation state two below the group value.

*From* [1.1](lessons/01-01-periodic-trends-revisited.md)

### Coulomb energy and the Born–Landé equation

One ion pair, then the whole lattice, then the repulsion correction:

$$E = \frac{1}{4\pi\varepsilon_0}\,\frac{z_+ z_-\, e^2}{r}, \qquad E_\text{elec} = \frac{1}{4\pi\varepsilon_0}\,\frac{N_A\, M\, z_+ z_-\, e^2}{r}$$

$$U = -\frac{N_A\, M\, |z_+ z_-|\, e^2}{4\pi\varepsilon_0\, r_0}\left(1 - \frac{1}{n}\right)$$

Constants the lessons use without restating them:
$\tfrac{1}{4\pi\varepsilon_0} = 8.988\times10^{9}\ \mathrm{J\,m\,C^{-2}}$,
$e = 1.602\times10^{-19}\ \mathrm{C}$,
$\varepsilon_0 = 8.854\times10^{-12}\ \mathrm{C^2 J^{-1} m^{-1}}$,
$N_A = 6.022\times10^{23}\ \mathrm{mol^{-1}}$.

**Sign convention.** As boxed, $U$ comes out *negative* (forming the crystal
releases energy). Many texts — and the Born–Haber cycle of [1.3](lessons/01-03-born-haber-cycle.md) —
quote lattice energy as the *positive* energy to break the crystal apart. Same
glue, opposite sign; state which you are using.

*From* [1.2](lessons/01-02-ionic-solids-lattice-energy.md)

### Madelung constants and radius-ratio rules

| Structure type | Example | $M$ | CN | Radius ratio $\rho = r_+/r_-$ | Geometry |
|---|---|---|---|---|---|
| zinc blende | $\ce{ZnS}$ | $1.638$ | 4 | $0.225 - 0.414$ | tetrahedral |
| rock salt | $\ce{NaCl}$ | $1.748$ | 6 | $0.414 - 0.732$ | octahedral |
| cesium chloride | $\ce{CsCl}$ | $1.763$ | 8 | $0.732 - 1.000$ | cubic |

Below $0.225$ you get CN 3 or 2. The cutoffs are pure hard-sphere packing
geometry, so they are **guidelines, not laws** — polarizable ions and covalency
routinely break them ($\ce{LiI}$ is predicted tetrahedral, is actually rock salt).

*From* [1.2](lessons/01-02-ionic-solids-lattice-energy.md)

### Born–Haber cycle: the terms and their signs

$$\Delta H_f = \Delta H_\text{sub} + \text{IE} + \tfrac12 D + \text{EA} + (-U) \;\Longrightarrow\; U = \Delta H_\text{sub} + \text{IE} + \tfrac12 D + \text{EA} - \Delta H_f$$

| Term | Process | Sign |
|---|---|---|
| $\Delta H_\text{sub}$ | $\ce{M(s) -> M(g)}$ | always endothermic $(+)$ |
| IE | $\ce{M(g) -> M+(g) + e-}$ | always endothermic $(+)$; a $2+$ ion needs $\text{IE}_1 + \text{IE}_2$, and $\text{IE}_2 > \text{IE}_1$ |
| $\tfrac12 D$ | $\ce{X2 -> 2X}$, halved for one atom | endothermic $(+)$ |
| $\text{EA}_1$ | $\ce{X(g) + e- -> X-(g)}$ | usually exothermic $(-)$ |
| $\text{EA}_2$ | $\ce{X-(g) + e- -> X^2-(g)}$ | **endothermic** $(+)$ — you fight Coulomb repulsion |
| $\Delta H_f$ | elements $\to$ crystal, direct | exothermic $(-)$ for a stable salt |

Here $U > 0$ is the lattice-*breaking* energy, so the term entering the formation
sum is $-U$.

**Born–Haber vs. Born–Landé is a covalency detector:** close agreement means the
ionic model works ($\ce{NaCl}$: 788 vs. $\sim$780 kJ/mol); an experimental value well
*above* the ionic prediction means real covalent bonding ($\ce{AgCl}$: 915 vs. 833).

*From* [1.3](lessons/01-03-born-haber-cycle.md)

### Brønsted acid-strength trends

| Comparison | Rule | Example |
|---|---|---|
| Binary acids **down** a group | bond gets longer and weaker → acidity **increases** | $\ce{HF < HCl < HBr < HI}$ |
| Binary acids **across** a period | more electronegative atom stabilizes $\ce{A-}$ → acidity increases | $\ce{CH4 < NH3 < H2O < HF}$ |
| Oxoacids $\ce{H_nEO_m}$ | each extra **terminal** (non-OH) oxygen raises $K_a$ by roughly $10^5$ | $\ce{HClO < HClO2 < HClO3 < HClO4}$ |
| Oxoacids, different centre | more electronegative central atom → stronger | $\ce{HClO4 > HBrO4 > HIO4}$ |

Rule of thumb by terminal-oxygen count: $0, 1, 2, 3 \Rightarrow$ very weak, weak,
strong, very strong. Count only terminal oxygens — the OH oxygens don't.

Highly charged, small metal cations are strong enough Lewis acids to make their
bound water Brønsted-acidic:
$\ce{[Fe(H2O)6]^3+ + H2O <=> [Fe(H2O)5(OH)]^2+ + H3O+}$. Charge density is the
predictor: $\ce{Al^3+} > \ce{Mg^2+} > \ce{Na+}$.

*From* [1.4](lessons/01-04-bronsted-lewis-acids-bases.md)

### Hard–soft classification

| | **Hard** | **Borderline** | **Soft** |
|---|---|---|---|
| Acids (acceptors) | $\ce{H+}$, $\ce{Li+}$, $\ce{Be^2+}$, $\ce{Mg^2+}$, $\ce{Al^3+}$, $\ce{Fe^3+}$ | $\ce{Fe^2+}$, $\ce{Cu^2+}$, $\ce{Zn^2+}$, $\ce{Pb^2+}$ | $\ce{Cu+}$, $\ce{Ag+}$, $\ce{Au+}$, $\ce{Hg^2+}$, $\ce{Pt^2+}$ |
| Bases (donors) | $\ce{F-}$, $\ce{OH-}$, $\ce{O^2-}$, $\ce{H2O}$, $\ce{NH3}$, $\ce{CO3^2-}$ | $\ce{SO3^2-}$, $\ce{Br-}$ | $\ce{I-}$, $\ce{S^2-}$, $\ce{CN-}$, $\ce{CO}$, phosphines $\ce{PR3}$, thiols $\ce{RSH}$ |

Two patterns regenerate the table: **(1)** down a group, softness increases
($\ce{F- < Cl- < Br- < I-}$); **(2)** for a metal, lower oxidation state and heavier
element means softer ($\ce{Fe^3+}$ hard, $\ce{Fe^2+}$ borderline; $\ce{Cu^2+}$ borderline,
$\ce{Cu+}$ soft). A ligand's character is carried by its **donor atom**: N and O
donors hard, P and S donors soft.

**Consequences:** matched pairs give the more stable adducts and the larger
formation constants; matched salts are the *insoluble* ones ($\ce{HgS}$, $\ce{AgI}$);
geochemistry sorts hard lithophiles into oxides/silicates and soft chalcophiles
into sulfides.

*From* [1.5](lessons/01-05-hard-soft-acid-base.md)

### Common ligands: name, charge, denticity, field strength

| Ligand | Name in a complex | Charge | Denticity | Field |
|---|---|---|---|---|
| $\ce{H2O}$ | aqua | 0 | 1 | weak–medium |
| $\ce{NH3}$ | ammine (two m's) | 0 | 1 | medium |
| $\ce{CO}$ | carbonyl | 0 | 1 | strongest |
| $\ce{PR3}$ | phosphine | 0 | 1 | strong (soft donor) |
| en | ethylenediamine (as *bis*/*tris*) | 0 | 2 | medium–strong |
| $\ce{F-}$, $\ce{Cl-}$, $\ce{Br-}$, $\ce{I-}$ | fluorido, chlorido, bromido, iodido | $-1$ | 1 | weak (π-donors) |
| $\ce{OH-}$ | hydroxido | $-1$ | 1 | weak |
| $\ce{CN-}$ | cyanido | $-1$ | 1 | very strong (π-acceptor) |
| $\ce{NO2-}$ | nitrito-$\kappa N$ (nitro) or nitrito-$\kappa O$ | $-1$ | 1 (ambidentate) | strong |
| $\ce{SCN-}$ | thiocyanato, S- or N-bound | $-1$ | 1 (ambidentate) | — |
| $\ce{C2O4^2-}$ | oxalato | $-2$ | 2 | medium |
| bipy | 2,2'-bipyridine | 0 | 2 | strong |
| EDTA | ethylenediaminetetraacetato | $-4$ | 6 | — |
| porphyrin $\ce{N4}$ | (macrocycle) | $-2$ | 4 | strong |

Older texts drop the "d": *chloro*, *cyano* for *chlorido*, *cyanido*. Note
*a**mm**ine* (the ligand $\ce{NH3}$) vs *amine* (an organic $\ce{NH2}$ group).

*From* [2.1](lessons/02-01-complexes-ligands-coordination-number.md), [2.2](lessons/02-02-nomenclature-oxidation-state.md), [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md), [4.1](lessons/04-01-organometallics-18-electron-rule.md), [4.3](lessons/04-03-bioinorganic-metals-in-life.md)

### Coordination number to geometry

| CN | Geometry | Point group | Example |
|---|---|---|---|
| 2 | linear | $D_{\infty h}$ | $\ce{[Ag(NH3)2]+}$ |
| 4 | tetrahedral | $T_d$ | $\ce{[Zn(NH3)4]^2+}$, $\ce{[NiCl4]^2-}$ |
| 4 | square planar | $D_{4h}$ | $\ce{[PtCl4]^2-}$, $\ce{[Ni(CN)4]^2-}$ |
| 5 | square pyramidal | $C_{4v}$ | deoxy-heme $\ce{FeN5}$ |
| 6 | octahedral (by far the commonest) | $O_h$ | $\ce{[Co(NH3)6]^3+}$ |

Four-coordinate is the interesting fork: **strong-field ligands or a heavy $d^8$
metal (Pd, Pt, Au) → square planar; weak-field → tetrahedral.**

*From* [2.1](lessons/02-01-complexes-ligands-coordination-number.md), [2.6](lessons/02-06-tetrahedral-square-planar-fields.md), [3.2](lessons/03-02-assigning-point-groups.md), [4.3](lessons/04-03-bioinorganic-metals-in-life.md)

### Naming a complex

**Formula → name.**

1. Cation before anion, as in any salt.
2. Inside the complex, ligands in **alphabetical order of the ligand name**, ignoring the multiplying prefix (*tetraammine* files under **a**).
3. Counts: *di, tri, tetra, penta, hexa*. For ligands whose own name contains a prefix or is complex (ethylenediamine, oxalato), use *bis, tris, tetrakis* and parenthesize: **tris(ethylenediamine)**.
4. Anionic ligand names end in **-o** (chlorid**o**, cyanid**o**, oxalat**o**); neutral ligands keep special names (aqua, ammine, carbonyl).
5. Metal name, then oxidation state as a Roman numeral in parentheses, no space.
6. **If the complex ion is an anion, the metal takes -ate**, often on a Latin stem.

| Metal | Anionic-complex stem |
|---|---|
| iron | ferrate |
| copper | cuprate |
| silver | argentate |
| lead | plumbate |
| tin | stannate |
| gold | aurate |

Cationic and neutral complexes never take -ate. **Name → formula:** metal first
inside the brackets, ligands in the order named, counts as subscripts, counterion
outside — then check the charges balance.

*From* [2.2](lessons/02-02-nomenclature-oxidation-state.md)

### Isomer types at a glance

| Family | Type | What differs | Example |
|---|---|---|---|
| Structural | linkage | which donor atom of an ambidentate ligand binds | $\ce{[Co(NH3)5(NO2)]^2+}$ (yellow) vs $\ce{[Co(NH3)5(ONO)]^2+}$ (red) |
| Structural | ionization | which anion is inside the sphere vs a counterion | $\ce{[Co(NH3)5Br]SO4}$ vs $\ce{[Co(NH3)5SO4]Br}$ |
| Structural | hydrate / solvate | water inside as ligand vs outside as crystal water | $\ce{[Cr(H2O)6]Cl3}$ (violet) vs $\ce{[Cr(H2O)4Cl2]Cl.2H2O}$ (green) |
| Structural | coordination | ligands split differently between two complex ions | $\ce{[Co(NH3)6][Cr(CN)6]}$ vs $\ce{[Cr(NH3)6][Co(CN)6]}$ |
| Stereo | cis / trans | identical ligands $90^\circ$ vs $180^\circ$ apart | cisplatin vs transplatin, $\ce{[Pt(NH3)2Cl2]}$ |
| Stereo | fac / mer | $\ce{MA3B3}$: three ligands on a face vs on a meridian | $\ce{[Co(NH3)3Cl3]}$ (both achiral) |
| Stereo | optical | non-superimposable mirror images | $\Delta$/$\Lambda$-$\ce{[Co(en)3]^3+}$ |

**How to enumerate:** (1) fix the geometry from CN; (2) list the geometrically
distinct arrangements (cis/trans, fac/mer); (3) for *each* arrangement, draw the
mirror image and test superimposability — a non-superimposable one splits into a
$\Delta$/$\Lambda$ pair. Chelates force chirality only when the geometry twists
them: $\ce{[Co(en)3]^3+}$ and *cis*-$\ce{[Co(en)2Cl2]+}$ are chiral, *trans*-$\ce{[Co(en)2Cl2]+}$ is not.

Tetrahedral $\ce{MA2B2}$ has **no** cis/trans (all four positions are equivalent),
but tetrahedral $\ce{MABCD}$ *is* chiral, like an asymmetric carbon.

*From* [2.3](lessons/02-03-isomerism-complexes.md), [3.1](lessons/03-01-symmetry-elements-operations.md)

### Crystal-field splitting by geometry

Where the ligands sit decides which d orbitals point at them. Aim at a ligand,
pay an energy penalty — that single rule redraws every diagram.

| Geometry | Splitting, low to high | Gap | Spin |
|---|---|---|---|
| **Octahedral** ($O_h$) | $t_{2g}$ ($d_{xy}, d_{xz}, d_{yz}$) at $-0.4\,\Delta_o$; $e_g$ ($d_{z^2}, d_{x^2-y^2}$) at $+0.6\,\Delta_o$ | $\Delta_o$ | high spin iff $\Delta_o < P$; low spin iff $\Delta_o > P$ — **only $d^4$–$d^7$ have a choice** |
| **Tetrahedral** ($T_d$) | order **inverts**: $e$ ($d_{z^2}, d_{x^2-y^2}$) low; $t_2$ ($d_{xy}, d_{xz}, d_{yz}$) high. No "g" — no inversion centre | $\Delta_t \approx \tfrac49\,\Delta_o$ | $\Delta_t < P$ essentially always $\Rightarrow$ **high spin, no question asked** |
| **Square planar** ($D_{4h}$) | $d_{xz}, d_{yz} \;<\; d_{z^2} \;<\; d_{xy} \;\ll\; d_{x^2-y^2}$ | the large $d_{xy} \to d_{x^2-y^2}$ gap | $d^8$ fills the lower four, leaves $d_{x^2-y^2}$ empty $\Rightarrow$ **diamagnetic, large CFSE** |
| **Octahedral, Jahn–Teller elongated** | axial ligands pulled out: $d_{z^2}$ drops, $d_{x^2-y^2}$ rises ($d_{xz}, d_{yz}$ drop, $d_{xy}$ rises slightly) | — | triggered by an **unequally occupied $e_g$ set**: high-spin $d^4$, $d^9$ (e.g. $\ce{Cu^2+}$) |

The square-planar diagram is the Jahn–Teller elongation taken to the limit (pull
the two axial ligands away to infinity).

**Which orbitals point where (octahedral, ligands on the axes):** $e_g$ lobes lie
**along** $x, y, z$ — straight at the ligands, so raised; $t_{2g}$ lobes lie
**between** the axes, dodging them, so lowered. In a tetrahedron the ligands sit
between the axes instead, which is why the order flips.

**What raises $\Delta$ for a fixed geometry:** a higher metal oxidation state
(ligands pulled in tighter) and going down a group ($3d < 4d < 5d$, roughly +50%
per row — essentially all 4d/5d octahedral complexes are low-spin).

*From* [2.4](lessons/02-04-crystal-field-octahedral-splitting.md), [2.6](lessons/02-06-tetrahedral-square-planar-fields.md)

### Octahedral $d^n$ filling and unpaired counts

| $d^n$ | High spin ($\Delta_o < P$) | $n_\text{unp}$ | Low spin ($\Delta_o > P$) | $n_\text{unp}$ |
|---|---|---|---|---|
| $d^1$ | $t_{2g}^1$ | 1 | (same) | 1 |
| $d^2$ | $t_{2g}^2$ | 2 | (same) | 2 |
| $d^3$ | $t_{2g}^3$ | 3 | (same) | 3 |
| $d^4$ | $t_{2g}^3 e_g^1$ | **4** | $t_{2g}^4$ | **2** |
| $d^5$ | $t_{2g}^3 e_g^2$ | **5** | $t_{2g}^5$ | **1** |
| $d^6$ | $t_{2g}^4 e_g^2$ | **4** | $t_{2g}^6$ | **0** |
| $d^7$ | $t_{2g}^5 e_g^2$ | **3** | $t_{2g}^6 e_g^1$ | **1** |
| $d^8$ | $t_{2g}^6 e_g^2$ | 2 | (same) | 2 |
| $d^9$ | $t_{2g}^6 e_g^3$ | 1 | (same) | 1 |
| $d^{10}$ | $t_{2g}^6 e_g^4$ | 0 | (same) | 0 |

High spin = singly occupy all five before pairing anyone (Hund, as if the gap
weren't there). Low spin = fill and pair the lower three completely before
touching the top.

**CFSE benchmarks:** $d^3$ gives $-1.2\,\Delta_o$ (maximal for that count — hence
inert $\ce{Cr^3+}$); high-spin $d^5$ gives **exactly zero** ($-1.2 + 1.2$), which is
part of why $\ce{Mn^2+}$ and $\ce{Fe^3+}$ salts are pale; high-spin $d^6$ gives
$-0.4\,\Delta_o$ against low-spin $d^6$'s $-2.4\,\Delta_o + 2P$, and comparing those two
is exactly the derivation of $\Delta_o$ vs. $P$.

**d-electron count shortcut:** $d\text{-count} = (\text{group number}) - (\text{oxidation state})$.

*From* [2.4](lessons/02-04-crystal-field-octahedral-splitting.md), [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md)

### The spectrochemical series

$$\ce{I- < Br- < Cl- < F- < OH- < H2O < NH3 < en < NO2- < CN- \approx CO}$$

Weak field (small $\Delta_o$, high spin) on the left; strong field (large
$\Delta_o$, low spin) on the right. Physically it runs **π-donor → σ-only →
π-acceptor**: halides push $t_{2g}$ up and shrink the gap; $\ce{CN-}$ and $\ce{CO}$
back-bond, pulling $t_{2g}$ down and widening it.

The series ranks *ligands*, not complexes — the real test is always $\Delta_o$
against $P$, and oxidation state and metal row can override a mid-series ligand.

*From* [2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md)

### The five symmetry elements

| Element | Operation | Notes |
|---|---|---|
| $E$ | do nothing | every molecule has it; the group's identity |
| $C_n$ | rotate by $360^\circ/n$ | generates $n-1$ non-trivial operations $C_n^1 \dots C_n^{n-1}$; largest $n$ = principal axis |
| $\sigma$ | reflect through a plane | $\sigma_v$ contains the principal axis; $\sigma_h$ is perpendicular to it; $\sigma_d$ is a $\sigma_v$ bisecting two perpendicular $C_2$ axes |
| $i$ | send $(x,y,z) \to (-x,-y,-z)$ | octahedral $\ce{ML6}$ has one; tetrahedral $\ce{CH4}$ does not |
| $S_n$ | rotate $360^\circ/n$, **then** reflect through the perpendicular plane | $S_1 = \sigma$, $S_2 = i$ |

*From* [3.1](lessons/03-01-symmetry-elements-operations.md)

### The point-group decision tree

Walk in order, stop at the first match.

1. **Special shapes.** Linear: $C_{\infty v}$ if the ends differ ($\ce{HCl}$, $\ce{HCN}$, $\ce{OCS}$), $D_{\infty h}$ if there's an inversion centre ($\ce{CO2}$, $\ce{N2}$). Polyhedral: $T_d$ (regular tetrahedron), $O_h$ (regular octahedron), $I_h$ (icosahedral).
2. **No $C_n$ with $n \ge 2$?** One mirror only $\Rightarrow C_s$; only an inversion centre $\Rightarrow C_i$; nothing but $E$ $\Rightarrow C_1$.
3. **Find the principal $C_n$.** Are there $n$ $C_2$ axes **perpendicular** to it? Yes $\Rightarrow$ a **$D$** group; no $\Rightarrow$ a **$C$** group.
4. **Refine with mirrors.** A $\sigma_h$ $\Rightarrow$ subscript $h$ ($D_{nh}$ / $C_{nh}$); else $n\sigma_v$ or $n\sigma_d$ $\Rightarrow$ subscript $v$ or $d$ ($C_{nv}$ / $D_{nd}$); else bare $C_n$ / $D_n$.

**Chirality read off the label:** chiral $\iff$ pure-rotation group, i.e. $C_n$ or
$D_n$ (including $C_1$). Any $h$, $v$, $d$, $i$, or $S_n$ in the group means achiral.

*From* [3.2](lessons/03-02-assigning-point-groups.md)

### Common point groups

| Group | Shape | Key elements | Example |
|---|---|---|---|
| $C_1$ | fully asymmetric | $E$ only | $\ce{CHFClBr}$ — chiral |
| $C_2$ | twisted, one axis | $E$, $C_2$ | *cis*-$\ce{[Co(en)2Cl2]+}$ — chiral |
| $C_{2v}$ | bent $\ce{AB2}$ | $E$, $C_2$, $2\sigma_v$ | $\ce{H2O}$; *cis*-$\ce{[PtCl2(NH3)2]}$ |
| $C_{3v}$ | trigonal pyramidal | $E$, $2C_3$, $3\sigma_v$ (order 6) | $\ce{NH3}$, $\ce{PCl3}$ |
| $C_{2h}$ | planar with $\sigma_h$ and $i$ | $E$, $C_2$, $\sigma_h$, $i$ | *trans*-$\ce{[Co(en)2Cl2]+}$ — achiral |
| $D_3$ | tris-chelate propeller | $C_3$, $3C_2$, **no** mirrors | $\ce{[Co(en)3]^3+}$ — chiral, $\Delta$/$\Lambda$ |
| $D_{3h}$ | trigonal planar / bipyramidal | $E$, $C_3$, $3C_2$, $\sigma_h$, $3\sigma_v$, $S_3$ | $\ce{BF3}$, $\ce{PF5}$ |
| $D_{2h}$ | planar $\ce{MA2B2}$ *trans* | $C_2$, two perpendicular $C_2$, $\sigma_h$ | *trans*-$\ce{[PtCl2(NH3)2]}$ |
| $D_{4h}$ | square planar | $C_4$, $4C_2$, $\sigma_h$, $i$ | $\ce{[PtCl4]^2-}$ |
| $D_{\infty h}$ | linear, symmetric ends | $C_\infty$, $\sigma_h$, $i$ | $\ce{CO2}$ |
| $C_{\infty v}$ | linear, different ends | $C_\infty$, $\infty\sigma_v$ | $\ce{HCl}$, $\ce{HCN}$ |
| $T_d$ | regular tetrahedron | $4C_3$, $3C_2/S_4$, $6\sigma_d$; **no $i$** | $\ce{CH4}$, $\ce{[NiCl4]^2-}$ |
| $O_h$ | regular octahedron | $3C_4$ (also $S_4$), $4C_3$ (also $S_6$), $6C_2$, $i$, $3\sigma_h + 6\sigma_d$; 48 operations | $\ce{SF6}$, $\ce{[Co(NH3)6]^3+}$ |

*From* [3.1](lessons/03-01-symmetry-elements-operations.md), [3.2](lessons/03-02-assigning-point-groups.md)

### Colour, wavelength, and the gap

$$\Delta_o = \frac{hc}{\lambda_{max}}\ (\text{per complex}), \qquad \Delta_o = \frac{N_A hc}{\lambda_{max}}\ (\text{per mole})$$

The shortcut worth memorizing, with $N_A hc = 0.1196\ \mathrm{J\,m\,mol^{-1}}$:

$$\Delta_o\ (\mathrm{kJ/mol}) = \frac{1.196\times10^{5}}{\lambda_{max}\ (\mathrm{nm})}, \qquad \bar\nu\ (\mathrm{cm^{-1}}) = \frac{10^{7}}{\lambda_{max}\ (\mathrm{nm})}$$

Typical $\Delta_o$ runs $10{,}000$–$30{,}000\ \mathrm{cm^{-1}}$, squarely visible.
Constants: $h = 6.626\times10^{-34}\ \mathrm{J\,s}$, $c = 3.00\times10^{8}\ \mathrm{m/s}$, $hc = 1.986\times10^{-25}\ \mathrm{J\,m}$.

| Absorbed $\lambda$ (nm) | Colour absorbed | Colour you see |
|---|---|---|
| 400–430 | violet | yellow-green |
| 450–490 | blue | orange |
| 490–560 | green | red / purple |
| 560–580 | yellow | violet / indigo |
| 580–620 | orange | blue |
| 620–700 | red | green |

Stronger-field ligand $\Rightarrow$ larger $\Delta_o$ $\Rightarrow$ **shorter**
absorbed wavelength (blue shift) $\Rightarrow$ different observed colour.

*From* [3.3](lessons/03-03-electronic-spectra-dd-transitions.md)

### Selection rules and band intensity

| Transition | Rules | $\varepsilon$ ($\mathrm{M^{-1}cm^{-1}}$) | Look |
|---|---|---|---|
| d–d, centrosymmetric ($O_h$), spin-allowed | Laporte-forbidden; survives only by vibronic coupling | $1$–$100$ | pale |
| d–d, non-centrosymmetric ($T_d$) | Laporte relaxed (no $i$) | higher than $O_h$ | more intense |
| d–d, spin-forbidden (high-spin $d^5$) | Laporte **and** spin forbidden | $\lesssim 1$ | nearly colourless |
| charge transfer (LMCT / MLCT) | both allowed | $10^{3}$–$10^{4}$ | vivid |

*From* [3.3](lessons/03-03-electronic-spectra-dd-transitions.md)

### Spin-only magnetic moments

$$\mu_{so} = \sqrt{n(n+2)}\ \ \mu_B$$

| $n$ unpaired | $\mu_{so}\ (\mu_B)$ | Behaviour |
|:---:|:---:|:---|
| 0 | $0$ | diamagnetic |
| 1 | $1.73$ | paramagnetic |
| 2 | $2.83$ | paramagnetic |
| 3 | $3.87$ | paramagnetic |
| 4 | $4.90$ | paramagnetic |
| 5 | $5.92$ | paramagnetic |

Run it either way: $d^n$ and spin state $\to n \to \mu_{so}$ (predict), or
measured $\mu_\text{eff} \to n \to$ spin state (deduce). For 3d complexes, round
$\mu_\text{eff}$ to the nearest row. Note $n = 3$ fits both $d^3$ and high-spin
$d^7$ — you need the oxidation state or a spectrum to break the tie.

*From* [3.4](lessons/03-04-magnetism-of-complexes.md)

### 18-electron counting: ligand donations

Neutral (covalent) method: metal contributes its **group number**, each ligand its
donation, then subtract the overall charge (add for a negative charge).

| Ligand | Donates | | Ligand | Donates |
|---|---|---|---|---|
| $\ce{CO}$ (carbonyl) | 2 | | $\ce{H}$ (hydride) | 1 |
| $\ce{PR3}$ (phosphine) | 2 | | $\ce{CH3}$ / alkyl | 1 |
| $\eta^2$-alkene | 2 | | halide | 1 |
| $\eta^5$-Cp | 5 | | $\eta^6$-benzene | 6 |
| terminal $\ce{CO}$ | 2 to that metal | | bridging $\mu$-$\ce{CO}$ | 1 to *each* metal |
| — | — | | metal–metal bond | 1 to each metal |

Benchmarks: $\ce{Cr(CO)6}$, $\ce{Fe(CO)5}$, $\ce{Ni(CO)4}$, ferrocene, and
$\ce{Mn2(CO)10}$ (per Mn, counting the Mn–Mn bond) all hit 18.
$\ce{RhCl(PPh3)3}$ sits at 16 on purpose; $\ce{V(CO)6}$ is a rare stable 17.

The **ionic method** (assign ligand charges, use the metal's $d$-count, add 2 per
donated pair) gives the same total by different bookkeeping — pick one lane and
stay in it.

*From* [4.1](lessons/04-01-organometallics-18-electron-rule.md)

### Elementary steps of a catalytic cycle

| Step | Oxidation state | Electron count | Coordination number |
|---|---|---|---|
| **Ligand dissociation** | $0$ | $-2$ | $-1$ |
| **Ligand association** | $0$ | $+2$ | $+1$ |
| **Oxidative addition** (M inserts into an X–Y bond) | $+2$ | $+2$ | $+2$ |
| **Reductive elimination** (two cis ligands couple and leave) | $-2$ | $-2$ | $-2$ |
| **Migratory insertion** (bound alkene/CO inserts into an adjacent M–H or M–R) | $0$ | $-2$ | $-1$ |

Two structural facts fall out: oxidative addition needs two open sites and
reductive elimination needs two **cis** ligands, so around a closed loop they come
in matched pairs; and **you can never exceed 18 electrons**, so every association
or oxidative addition must be preceded by something that opened a site.

**Wilkinson's hydrogenation as the reference loop** ($\ce{RhCl(PPh3)3}$, 16e Rh(I)
resting state): dissociate a phosphine (14e, Rh(I)) → oxidative addition of
$\ce{H2}$ (16e, Rh(III)) → alkene association (18e, Rh(III)) → migratory insertion
(16e, Rh(III)) → reductive elimination of the alkane (14e, Rh(I)). Counts run
$14 \to 16 \to 18 \to 16 \to 14$; oxidation state runs I → III → III → III → I.
Both come home, so it is a genuine catalyst.

*From* [4.2](lessons/04-02-homogeneous-catalysis-cycle.md)

### Metals in biology at a glance

| Job | Metal and site | Course idea it uses |
|---|---|---|
| $\ce{O2}$ transport | heme $\ce{Fe^2+}$: porphyrin $\ce{N4}$ + proximal histidine + one open site | open coordination site; high-spin/low-spin switch |
| Electron transfer | cytochrome heme $\ce{Fe^2+}/\ce{Fe^3+}$; $\ce{[2Fe-2S]}$ and $\ce{[4Fe-4S]}$ clusters | accessible, closely spaced d-block oxidation states |
| Lewis-acid catalysis | $\ce{Zn^2+}$ ($d^{10}$, redox-inert) in carbonic anhydrase, carboxypeptidase | polarizes a bound water to a nucleophilic hydroxide |
| Metal choice | hard/borderline $\ce{Fe}$, $\ce{Zn}$ take N/O donors; soft $\ce{Cu+}$ and Fe–S take S donors | HSAB matching, plus redox need and abundance |
| Poisoning | $\ce{CO}$ binds heme's sixth site $\sim200\times$ tighter than $\ce{O2}$; soft $\ce{Hg^2+}$ grabs cysteine thiols | too-strong binding at the active site is catalyst poisoning |

Deoxy-heme: CN 5, square pyramidal, high-spin $d^6$ ($t_{2g}^4 e_g^2$, 4 unpaired),
iron $\sim0.4$ Å out of the plane. Oxy-heme: CN 6, octahedral, low-spin $d^6$
($t_{2g}^6$, diamagnetic), iron in the plane. Iron stays $\ce{Fe^2+}$ in both.

*From* [4.3](lessons/04-03-bioinorganic-metals-in-life.md)

## Assumed, not taught here

This is a Tier 1 course sitting on general chemistry. It uses the following
without deriving them.

| Fact | Where it's taught |
|---|---|
| Electron configurations, Aufbau order, Pauli and **Hund's rule**; cations lose highest-$n$ ($4s$ before $3d$) | [general-chemistry 1.2](../general-chemistry/lessons/01-02-electron-configurations-periodic-table.md), summarized on [its card](../general-chemistry/reference.md#atomic-structure) |
| The qualitative periodic-trend arrows this course makes quantitative | [general-chemistry 1.3](../general-chemistry/lessons/01-03-periodic-trends.md), [card](../general-chemistry/reference.md#periodic-trends) |
| Lewis structures, the octet rule, formal charge, ionic vs. covalent character | [general-chemistry 1.4](../general-chemistry/lessons/01-04-ionic-covalent-bonds-lewis-structures.md) |
| Orbital shapes, VSEPR geometries, hybridization, σ/π bonds and MO basics | [general-chemistry 1.5](../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) |
| $d$-orbital shapes themselves (why $d_{z^2}$ is a genuine $e_g$ partner) | [general-chemistry 1.1](../general-chemistry/lessons/01-01-quantum-atom.md); the angular functions in [quantum-mechanics 4.3](../quantum-mechanics/lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| Enthalpy as a state function; **Hess's law**, which the Born–Haber cycle is | [general-chemistry 3.2](../general-chemistry/lessons/03-02-thermochemistry-enthalpy-calorimetry.md), [3.3](../general-chemistry/lessons/03-03-hess-law-enthalpies-formation.md) |
| Brønsted acids, conjugate pairs, $K_a$, strong vs. weak | [general-chemistry 4.1](../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) |
| Oxidation numbers and charge-balance bookkeeping | [general-chemistry 2.3](../general-chemistry/lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md) |
| Equilibrium constants and what a large $K$ means | [general-chemistry 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$ and $\Delta G^\circ = -RT\ln K$ — the whole engine of the chelate effect | [physical-chemistry 1.3](../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md), [2.6](../physical-chemistry/lessons/02-06-chemical-equilibrium-constant.md); entropy itself in [1.2](../physical-chemistry/lessons/01-02-entropy-second-law.md) |
| $E = h\nu = hc/\lambda$, and the constants $h$, $c$, $N_A$ | [general-chemistry 1.1](../general-chemistry/lessons/01-01-quantum-atom.md), tabulated on [its card](../general-chemistry/reference.md#constants) |
| Absorption spectra, molar absorptivity, and Beer's law behind $\varepsilon$ | [physical-chemistry 4.6](../physical-chemistry/lessons/04-06-electronic-spectroscopy.md) |
| Coulomb's law and $\varepsilon_0$, the basis of the whole lattice-energy calculation | [em-refresher 1.1](../em-refresher/lessons/01-01-coulomb-electric-field.md) |
| Why *every* electron produces a diamagnetic counter-field (induction opposing an applied field) | [em-refresher 3.3](../em-refresher/lessons/03-03-electromagnetic-induction.md) |
| Electron spin $\tfrac12$, the $g$-factor, and the Bohr magneton behind $\mu_{so}$ | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) |
| Orbital angular momentum and spin–orbit coupling — why "spin-only" fails for 4d/5d metals | [quantum-mechanics 4.2](../quantum-mechanics/lessons/04-02-angular-momentum-algebra.md), [4.6](../quantum-mechanics/lessons/04-06-addition-angular-momenta.md) |
| The group axioms (closure, identity, inverses) that make a point group a *group* | [abstract-algebra 1.1](../abstract-algebra/lessons/01-01-group-axioms-first-examples.md), [1.3](../abstract-algebra/lessons/01-03-dihedral-symmetric-groups.md) |
| Chirality and enantiomers in the organic sense (the asymmetric carbon) | [organic-chemistry 1.5](../organic-chemistry/lessons/01-05-chirality-r-s-system.md) |
| Sigmoidal vs. hyperbolic oxygen-binding curves, the protein side of cooperativity | [biochemistry 1.5](../biochemistry/lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md) |

## Pitfalls

### Periodic trends

- $Z_\text{eff}$ is **not** the group number — shielding always eats into $Z$; a period-3 valence electron sees roughly $2$–$6$. *([1.1](lessons/01-01-periodic-trends-revisited.md))*
- The IE dips are not a trend *reversal*: $Z$ still rises, but a different, more removable electron ($np$ instead of $ns$, or a paired vs. unpaired p electron) is now the target. *([1.1](lessons/01-01-periodic-trends-revisited.md))*
- Slater's $0.85$/$1.00$ split applies to **s and p** electrons only; for a $d$ or $f$ electron, everything to the left counts $1.00$. *([1.1](lessons/01-01-periodic-trends-revisited.md))*
- Don't expect $5d$ elements to be much bigger than $4d$ ones — the lanthanide contraction cancels the extra shell ($\ce{Hf} \approx \ce{Zr}$). *([1.1](lessons/01-01-periodic-trends-revisited.md))*

### Ionic solids and thermochemistry

- Doubling *both* charges roughly **quadruples** $U$ — it's the product $|z_+ z_-|$. Compare sizes only after the charges tie. *([1.2](lessons/01-02-ionic-solids-lattice-energy.md))*
- State your sign convention: Born–Landé as boxed gives a negative $U$ (formation), while Born–Haber quotes the positive lattice-*breaking* energy, entering the formation sum as $-U$. Mixing the two lands you off by $2\Delta H_f$. *([1.2](lessons/01-02-ionic-solids-lattice-energy.md), [1.3](lessons/01-03-born-haber-cycle.md))*
- Radius-ratio rules are hard-sphere geometry, not law — a small cation with a big polarizable anion ($\ce{LiI}$) breaks them. *([1.2](lessons/01-02-ionic-solids-lattice-energy.md))*
- Don't drop the $\tfrac12$ on $D(\ce{X2})$ — the salt needs one halogen atom, but $D$ is quoted per diatomic molecule. *([1.3](lessons/01-03-born-haber-cycle.md))*
- $\text{EA}_2$ is **endothermic**: you're pushing an electron onto an already-negative ion. Making $\ce{O^2-}(g)$ costs energy net; only the lattice pays it back. *([1.3](lessons/01-03-born-haber-cycle.md))*

### Acids, bases, and HSAB

- $\ce{HF}$ is *weak* despite fluorine's electronegativity — down a group **bond strength** wins, across a period electronegativity wins. Don't mix the two trends. *([1.4](lessons/01-04-bronsted-lewis-acids-bases.md))*
- Pauling's rule counts **terminal** oxygens only; the OH oxygens don't. *([1.4](lessons/01-04-bronsted-lewis-acids-bases.md))*
- A Lewis acid needs an *empty orbital*, not a proton — $\ce{BF3}$, $\ce{Al^3+}$, and $\ce{CO2}$ are acids with no acidic hydrogen anywhere. *([1.4](lessons/01-04-bronsted-lewis-acids-bases.md))*
- Amphoteric means it *reacts as* acid or base depending on the partner — not that it's inert or neutral. *([1.4](lessons/01-04-bronsted-lewis-acids-bases.md))*
- Hard/soft is **not** strong/weak — independent axes. $\ce{OH-}$ and $\ce{F-}$ are both hard, but $\ce{OH-}$ is far stronger. HSAB answers *which partner*, never *how strong*. *([1.5](lessons/01-05-hard-soft-acid-base.md))*
- Don't force borderline species ($\ce{Fe^2+}$, $\ce{Cu^2+}$, $\ce{Zn^2+}$, $\ce{Pb^2+}$) into a bin, and remember the same element changes bin with oxidation state. *([1.5](lessons/01-05-hard-soft-acid-base.md))*
- HSAB gives directions and relative stabilities, never numbers — magnitudes come from lattice energies, $K_f$, or thermochemistry. *([1.5](lessons/01-05-hard-soft-acid-base.md))*

### Complexes: counting and naming

- Coordination number counts **donor atoms**, not ligands: $\ce{[Ni(en)3]^2+}$ has three ligands and CN 6. Multiply each ligand by its denticity first. *([2.1](lessons/02-01-complexes-ligands-coordination-number.md))*
- Only what's inside the square brackets is bonded to the metal; everything outside is a counterion. *([2.1](lessons/02-01-complexes-ligands-coordination-number.md), [2.2](lessons/02-02-nomenclature-oxidation-state.md))*
- The chelate effect is **entropy**, not stronger bonds — the per-bond enthalpies are nearly identical. *([2.1](lessons/02-01-complexes-ligands-coordination-number.md))*
- Alphabetize by the **ligand name**, ignoring di/tri/tetra and bis/tris: *tetraammine* files under **a**. *([2.2](lessons/02-02-nomenclature-oxidation-state.md))*
- Neutral ligands contribute zero to the charge balance — don't distribute the complex's charge over them. *([2.2](lessons/02-02-nomenclature-oxidation-state.md))*
- Only *anionic* complexes take **-ate**, and several use an unguessable Latin stem (ferrate, cuprate, plumbate, stannate, argentate). *([2.2](lessons/02-02-nomenclature-oxidation-state.md))*

### Isomers, symmetry, and chirality

- cis/trans in complexes needs no double bond — the rigid $90^\circ$/$180^\circ$ coordination polyhedron locks the positions. *([2.3](lessons/02-03-isomerism-complexes.md))*
- Tetrahedral $\ce{MA2B2}$ has **no** cis/trans (all four positions are equivalent), though tetrahedral $\ce{MABCD}$ is chiral. *([2.3](lessons/02-03-isomerism-complexes.md))*
- Having a chelate does **not** make a complex chiral: *trans*-$\ce{[Co(en)2Cl2]+}$ keeps a mirror plane. You need the geometry to force the twist. *([2.3](lessons/02-03-isomerism-complexes.md))*
- "No mirror plane by eye" is not the test — the complete criterion is **no $S_n$ of any order**; a molecule can lack both $\sigma$ and $i$ yet be achiral via $S_4$. *([2.3](lessons/02-03-isomerism-complexes.md), [3.1](lessons/03-01-symmetry-elements-operations.md))*
- An element is not its operation: one $C_3$ axis (one element) contributes two rotation operations, and point groups count operations. *([3.1](lessons/03-01-symmetry-elements-operations.md))*
- A plane is $\sigma_v$ or $\sigma_h$ by its relation to the **principal axis**, not by how it looks on the page — so find the principal axis first. *([3.1](lessons/03-01-symmetry-elements-operations.md))*
- Having a mirror plane doesn't make it $C_s$ ($C_s$ is $E$ plus *one* $\sigma$ and nothing else) — water has planes but a $C_2$ too, so it's $C_{2v}$. *([3.2](lessons/03-02-assigning-point-groups.md))*
- A $D$ group needs $n$ $C_2$ axes **perpendicular** to the principal $C_n$ — the principal axis being a $C_2$ itself doesn't count. *([3.2](lessons/03-02-assigning-point-groups.md))*
- For a linear molecule the deciding question is whether the two ends are the same: $\ce{CO2}$ is $D_{\infty h}$, $\ce{HCN}$ is $C_{\infty v}$. *([3.2](lessons/03-02-assigning-point-groups.md))*

### Crystal field and spin state

- $e_g$ is high because of **geometry** (its lobes point at the ligands), not because it holds fewer orbitals — in a tetrahedral field the order flips. *([2.4](lessons/02-04-crystal-field-octahedral-splitting.md), [2.6](lessons/02-06-tetrahedral-square-planar-fields.md))*
- The split is $0.6$/$0.4$, never $\pm 0.5$ — two orbitals up must balance three down. *([2.4](lessons/02-04-crystal-field-octahedral-splitting.md))*
- CFSE is measured from the **barycenter**, not from zero interaction: all five orbitals are actually pushed up. It's a relative comparison number. *([2.4](lessons/02-04-crystal-field-octahedral-splitting.md))*
- "Strong field" means a **big gap**, so climbing is expensive and electrons huddle low — strong field gives *low* spin and *fewer* unpaired electrons. *([2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md))*
- High vs. low spin is only a real question for $d^4$–$d^7$; calling $d^3$ "high-spin" is vacuous. *([2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md))*
- The series ranks *ligands*; oxidation state and metal row shift $\Delta_o$ too, and the true test is always $\Delta_o$ vs. $P$. *([2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md))*
- Neutral $\ce{CO}$ is the **strongest** common field ligand, not the weakest — π-back-bonding is covalency the point-charge model can't see. *([2.5](lessons/02-05-high-spin-low-spin-spectrochemical-series.md))*
- Tetrahedral isn't just the octahedral diagram upside down — the gap also shrinks to $\approx\tfrac49\Delta_o$, which is why low-spin tetrahedral complexes essentially don't exist. *([2.6](lessons/02-06-tetrahedral-square-planar-fields.md))*
- Not every $d^8$ complex is square planar: weak-field $\ce{[NiCl4]^2-}$ stays tetrahedral. Field strength, not electron count alone, decides. *([2.6](lessons/02-06-tetrahedral-square-planar-fields.md))*
- Jahn–Teller needs no lookup table — the trigger is a *degenerate, unequally occupied* set, and it's the ligand-pointing $e_g$ set that distorts strongly. *([2.6](lessons/02-06-tetrahedral-square-planar-fields.md))*

### Colour and magnetism

- The colour you see is the **complement** of the colour absorbed: a blue complex absorbs orange. Convert before reasoning about $\Delta_o$. *([3.3](lessons/03-03-electronic-spectra-dd-transitions.md))*
- Bigger $\Delta_o$ means a **shorter** absorbed wavelength, since $\lambda = hc/\Delta_o$. *([3.3](lessons/03-03-electronic-spectra-dd-transitions.md))*
- An intense colour is almost never d–d: $\ce{MnO4-}$ is $d^0$ and can't have a d–d band at all. Pale = forbidden d–d, vivid = allowed charge transfer. *([3.3](lessons/03-03-electronic-spectra-dd-transitions.md))*
- High-spin $d^5$ ($\ce{Mn^2+}$, $\ce{Fe^3+}$) is nearly colourless — doubly forbidden — not brightly coloured like the other $d^n$. *([3.3](lessons/03-03-electronic-spectra-dd-transitions.md))*
- "High-spin" is not "high moment": count unpaired electrons. High-spin $d^6$ gives $n = 4$, high-spin $d^8$ only $n = 2$. *([3.4](lessons/03-04-magnetism-of-complexes.md))*
- Spin-only is a **first-row approximation**; unquenched orbital angular momentum and 4d/5d spin–orbit coupling push $\mu_\text{eff}$ noticeably higher. *([3.4](lessons/03-04-magnetism-of-complexes.md))*
- Diamagnetic means no *unpaired* electrons, not no d electrons — low-spin $d^6$ is packed with six. *([3.4](lessons/03-04-magnetism-of-complexes.md))*
- Magnetism proves the spin state; $\Delta_o$ from a spectrum only quantifies the field, since judging spin from $\Delta_o$ alone would need $P$. *([3.4](lessons/03-04-magnetism-of-complexes.md))*

### Electron counting and catalysis

- The 18-electron rule is a strong tendency, not a law — early metals, bulky ligands, and the deliberately 16-electron square-planar $d^8$ catalysts all live outside it. *([4.1](lessons/04-01-organometallics-18-electron-rule.md))*
- In the neutral method use the **group number**, never the oxidation state, and adjust once for the overall charge. Don't also assign ligand charges. *([4.1](lessons/04-01-organometallics-18-electron-rule.md))*
- Hapticity can change — if the problem writes $\eta^3$, use 3; don't assume Cp is always $\eta^5$. And a bridging $\mu$-$\ce{CO}$ gives 1 to each metal, not 2. *([4.1](lessons/04-01-organometallics-18-electron-rule.md))*
- Oxidative addition and migratory insertion are different moves: the first breaks a bond in an *incoming* molecule and shifts the oxidation state by $+2$; the second rearranges ligands *already bound* and leaves it alone. *([4.2](lessons/04-02-homogeneous-catalysis-cycle.md))*
- An 18-electron complex is **saturated and content**, not reactive — reactivity lives in the 16- and 14-electron intermediates, so the resting catalyst must first shed a ligand. *([4.2](lessons/04-02-homogeneous-catalysis-cycle.md), [4.1](lessons/04-01-organometallics-18-electron-rule.md))*
- If your dials don't return to their starting values after one loop, you mislabelled or missed a step — a real cycle closes in *both* oxidation state and electron count. *([4.2](lessons/04-02-homogeneous-catalysis-cycle.md))*

### Bioinorganic

- $\ce{O2}$ binding does not oxidize the iron: it stays $\ce{Fe^2+}$ through the working cycle. Iron that *does* reach $\ce{Fe^3+}$ (met-hemoglobin) can no longer bind $\ce{O2}$. *([4.3](lessons/04-03-bioinorganic-metals-in-life.md))*
- Maximal binding is the failure mode, not the goal — a carrier that grips too hard can't deliver, which is exactly the $\ce{CO}$ story. *([4.3](lessons/04-03-bioinorganic-metals-in-life.md))*
- The out-of-plane displacement is a fraction of an ångström and still decisive: it is amplified through the protein into a global conformational switch. *([4.3](lessons/04-03-bioinorganic-metals-in-life.md))*

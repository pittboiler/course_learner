# Nuclear Materials · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One neutron hits one atom; twenty years later a duct no longer fits its channel.
This course is that chain, and this card is its lookup surface: the dose
bookkeeping (**dpa**), the rate-theory balance that decides where surviving
defects go, the six ways a component changes shape or toughness, and the
property data for the fuels (UO₂, metal, TRISO) and alloys (Zircaloy, austenitic
and F/M steels, tungsten) the lessons compute with. When a number is used but
never stated in a lesson — displacement thresholds, absorption cross-sections,
melting points, swelling rates — it is tabulated below.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $E_\mathrm{f}^{v}$, $E_\mathrm{m}$ | formation energy of a vacancy; migration energy of a hopping defect (eV) | [1.1](lessons/01-01-crystals-defects-refresher.md) |
| $n_v/N$ | equilibrium vacancy site fraction — the tiny thermal baseline irradiation blows past | [1.1](lessons/01-01-crystals-defects-refresher.md) |
| $\mathbf{b}$ | Burgers vector — how far the lattice is offset across a dislocation ($\sim0.25$ nm) | [1.1](lessons/01-01-crystals-defects-refresher.md) |
| $\gamma$ | energy-transfer efficiency of one elastic hit, set by the mass ratio alone | [1.2](lessons/01-02-how-radiation-deposits-energy.md) |
| $T$, $T_{\max}$, $\bar T$ | recoil energy handed to a struck atom: actual, head-on maximum, isotropic average | [1.2](lessons/01-02-how-radiation-deposits-energy.md) |
| $E_d$ | displacement threshold — the price of evicting one atom for good (tens of eV) | [1.2](lessons/01-02-how-radiation-deposits-energy.md) |
| $E_{PKA}$, $E_{dam}$ | energy of the primary knock-on atom; the nuclear (non-ionizing) part of it | [1.4](lessons/01-04-kinchin-pease-nrt-dpa.md) |
| $N_d$, $\kappa$ | displacements per cascade; the NRT efficiency factor $\kappa = 0.8$ | [1.4](lessons/01-04-kinchin-pease-nrt-dpa.md) |
| $\sigma_d$, $\phi$, $\Phi$ | displacement cross-section (barns), neutron flux, fluence $\Phi=\phi t$ | [1.4](lessons/01-04-kinchin-pease-nrt-dpa.md) |
| $\dot d$ | dpa rate, $\sigma_d\phi$ (displacements per atom per second) | [1.4](lessons/01-04-kinchin-pease-nrt-dpa.md) |
| $\xi$ | survival efficiency — the fraction of NRT displacements still there after the quench | [1.5](lessons/01-05-cascade-to-defect-population.md) |
| $K_0$ | effective production rate of *surviving* point defects, $\xi\dot d$ (per atom per second) | [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md) |
| $C_v$, $C_i$ | vacancy / interstitial concentrations as dimensionless site fractions | [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md) |
| $D_v$, $D_i$ | their diffusion coefficients (m²/s); always $D_i \gg D_v$ | [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md) |
| $k^2$ | sink strength (m⁻²) — total catchment capacity of dislocations, boundaries, voids | [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md) |
| $K_{iv}$ | recombination rate coefficient (s⁻¹) for a vacancy meeting an interstitial | [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md) |
| $Z_i$, $Z_v$, $B$ | capture efficiencies of a dislocation, and the bias $B$ between them (a few percent) | [2.2](lessons/02-02-dislocation-loops-bias.md) |
| $N$, $r$, $d$ | number density of voids/obstacles (m⁻³), void radius, obstacle diameter | [2.3](lessons/02-03-voids-void-swelling.md) |
| $\Delta V/V$, $\Delta L/L$ | volumetric swelling and the linear strain it produces | [2.3](lessons/02-03-voids-void-swelling.md) |
| $T_m$ | melting point in kelvin — swelling windows are always quoted as fractions of it | [2.3](lessons/02-03-voids-void-swelling.md) |
| $B_0$, $\dot\varepsilon$ | irradiation-creep compliance (MPa⁻¹ dpa⁻¹) and creep strain rate | [2.4](lessons/02-04-irradiation-creep-growth.md) |
| $\varepsilon_a$, $\varepsilon_c$ | growth strains along the hcp $a$- and $c$-axes (opposite in sign, volume conserved) | [2.4](lessons/02-04-irradiation-creep-growth.md) |
| $\alpha$, $M$, $\mu$, $b$ | barrier strength, Taylor factor ($3.06$), shear modulus, Burgers-vector length | [2.5](lessons/02-05-radiation-hardening.md) |
| $\Delta\sigma_y$, $L$ | irradiation yield-strength increase; mean in-plane obstacle spacing $1/\sqrt{Nd}$ | [2.5](lessons/02-05-radiation-hardening.md) |
| $\Delta\text{DBTT}$, USE | shift of the ductile-to-brittle transition; upper-shelf (fully ductile) Charpy energy | [2.6](lessons/02-06-embrittlement-dbtt-shift.md) |
| $k(T)$, O/M | fuel thermal conductivity; oxygen-to-metal ratio (2.00 for perfect UO₂) | [3.1](lessons/03-01-uo2-ceramic-fuel.md) |
| $q'$, $q''$, $q'''$ | linear power (W/m), surface flux (W/m²), volumetric generation (W/m³) — mind the primes | [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md) |
| $T_0$, $T_s$, $a$ | pellet centerline temperature, pellet surface temperature, pellet radius | [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md) |
| $Y(A)$, FIMA, $B$ | fission yield at mass $A$; burnup as at.% of heavy metal fissioned, or MWd/kgU | [3.3](lessons/03-03-fission-products-fates.md) |
| $f$, $T_{\mathrm{th}}$ | fission-gas release fraction; the release threshold, about $1000\,^\circ$C | [3.4](lessons/03-04-fission-gas-release-swelling.md) |
| $\sigma_a$, $\Sigma_a$ | microscopic and macroscopic absorption cross-section, $\Sigma_a = N\sigma_a$ (cm⁻¹) | [4.1](lessons/04-01-zirconium-alloys-cladding.md) |
| $C_{\mathrm{TSS}}$, $\sigma_\theta$ | terminal solid solubility of H in Zr (wt ppm); cladding hoop stress | [4.1](lessons/04-01-zirconium-alloys-cladding.md) |
| PCT, ECR | LOCA limits: peak cladding temperature; equivalent cladding reacted (wall fraction oxidized) | [4.1](lessons/04-01-zirconium-alloys-cladding.md) |
| $S$, $D$, $D_0$ | steady swelling rate (per dpa), accumulated dose, incubation dose | [4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md) |
| $x$, $x_t$, $k_p$, $k_\ell$ | oxide thickness, transition thickness, parabolic and linear rate constants | [4.3](lessons/04-03-corrosion-reactor-coolant.md) |
| ECP | electrochemical corrosion potential (mV) — how aggressive the water is toward the metal | [4.3](lessons/04-03-corrosion-reactor-coolant.md) |
| $K$, $K_{ISCC}$, $da/dt$ | stress-intensity factor, the SCC threshold, and crack-growth rate (m/s) | [4.4](lessons/04-04-scc-iascc.md) |
| appm, He/dpa | atomic parts per million; helium bred per dpa — the fusion signature number | [4.5](lessons/04-05-materials-for-fusion.md) |

$N$ does triple duty (obstacle density, void density, atom number density) and $B$
does double duty (dislocation bias, burnup) — read them from context.

## Definitions

### Frenkel pair

One displaced atom plus the empty seat it left behind — the fundamental unit of
radiation damage, made athermally and always in equal numbers of each species.

$$\text{1 Frenkel pair} = 1\ \text{vacancy} + 1\ \text{self-interstitial (SIA)}$$

Contrast the thermal (Schottky) route, which makes a vacancy by sending the atom
to a surface and produces **no** interstitial.

*Introduced:* [1.1](lessons/01-01-crystals-defects-refresher.md)

### Primary knock-on atom (PKA)

The first lattice atom set moving by the incident particle. The neutron is the
trigger; the PKA is the bullet that does essentially all the displacing.

*Introduced:* [1.2](lessons/01-02-how-radiation-deposits-energy.md), [1.3](lessons/01-03-pka-displacement-cascades.md)

### Displacement threshold energy

The bouncer at the door: below $E_d$ a struck atom springs back to its site and
the energy becomes heat; above it, a permanent Frenkel pair is born.

$$T > E_d \Rightarrow \text{displacement}, \qquad T < E_d \Rightarrow \text{heat only}$$

*Introduced:* [1.3](lessons/01-03-pka-displacement-cascades.md)

### Displacement cascade

A branching avalanche of collisions from one energetic PKA — secondaries,
tertiaries, and so on — fully developed in under a picosecond.

*Introduced:* [1.3](lessons/01-03-pka-displacement-cascades.md)

### Thermal spike

The picosecond flash-melt at the cascade's heart: a few nanometres of lattice
lose order and behave liquid-like, then the cold surroundings quench it.

*Introduced:* [1.3](lessons/01-03-pka-displacement-cascades.md)

### Cascade morphology

The refrozen debris is spatially sorted: a **vacancy-rich core** wrapped in an
**interstitial-rich shell**. That separation is why any damage survives at all —
intermixed defects would simply annihilate.

*Introduced:* [1.3](lessons/01-03-pka-displacement-cascades.md)

### Damage energy

The part of a PKA's energy that goes into elastic nuclear collisions rather than
into heating the electron sea. Only this part can displace anything.

$$E_{dam} \approx 0.7\,E_{PKA} \quad(\text{Lindhard partition, metals near 100 keV})$$

*Introduced:* [1.4](lessons/01-04-kinchin-pease-nrt-dpa.md)

### dpa

Displacements per atom: the expected number of times an average atom has been
knocked off its site. A spectrum-proof exposure unit — 10 dpa in a thermal
reactor and 10 dpa in a fast one mean the same lattice wear. It is **bookkeeping**,
not a defect census.

$$\text{dpa} = \sigma_d\,\phi\,t$$

*Introduced:* [1.4](lessons/01-04-kinchin-pease-nrt-dpa.md)

### Survival (production) efficiency

The fraction of NRT-counted displacements that are still present once the
thermal spike has quenched; the rest recombined in-cascade.

$$\xi = \frac{\text{point defects surviving the cascade}}{N_{\mathrm{NRT}}} \approx 0.01\text{–}0.30$$

Falls with PKA energy (denser cascades recombine harder), rises at low temperature.

*Introduced:* [1.5](lessons/01-05-cascade-to-defect-population.md)

### Freely-migrating defects (FMD)

The survivors that escaped as *isolated, mobile* point defects, free to travel to
distant sinks. The rest of the survivors are born already tied up in in-cascade
clusters (small loops, vacancy stacking-fault tetrahedra) that never migrated.

*Introduced:* [1.5](lessons/01-05-cascade-to-defect-population.md)

### Dose-rate effect

Same dpa at a higher flux is *not* the same damage: higher instantaneous defect
concentrations recombine harder, so the whole microstructural response shifts to
higher temperature. A test reactor must run 50–100 °C hotter to mimic a power
reactor at equal dose.

*Introduced:* [1.5](lessons/01-05-cascade-to-defect-population.md)

### Sink strength

How much "catchment capacity" the microstructure offers a wandering defect,
summed over dislocations, grain boundaries, voids, and precipitates.

$$k^2 = \sum_j k_j^2 \ \ (\mathrm{m^{-2}}), \qquad k^2 D = \text{absorption rate (s}^{-1})$$

*Introduced:* [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md)

### Radiation-enhanced diffusion (RED)

Irradiation does not lower the jump barrier; it manufactures the *carriers*. With
$C_v$ held orders of magnitude above equilibrium, a cold alloy diffuses as though
it were hundreds of degrees hotter.

$$D_{\text{atom}} \propto D_v C_v + D_i C_i$$

*Introduced:* [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md)

### Radiation-induced segregation (RIS)

Defect fluxes to sinks drag solutes with them (inverse Kirkendall), rewriting
grain-boundary chemistry: in austenitic steel, **Cr is depleted** and Ni, Si, P
enrich at the boundary. No carbides and no weld heat required — only fluence.

*Introduced:* [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md)

### Dislocation loop

A disc of clustered point defects whose rim is a dislocation line: an
**interstitial loop** is an extra patch of atomic plane, a **vacancy loop** a
missing one. Both are biased sinks, so interstitial loops grow and vacancy loops
get healed from the inside and shrink.

*Introduced:* [2.2](lessons/02-02-dislocation-loops-bias.md)

### Dislocation bias

A dislocation grabs interstitials a few percent more eagerly than vacancies,
because a crammed-in interstitial strains the lattice harder. This tiny,
never-resting asymmetry is the engine of swelling, creep, and growth.

$$Z_i = Z_v (1 + B), \qquad B \sim 0.01\text{–}0.05$$

*Introduced:* [2.2](lessons/02-02-dislocation-loops-bias.md)

### Void

A three-dimensional cluster of vacancies — a hole in the crystal. Usually needs a
few atoms of insoluble gas (helium from $(n,\alpha)$) inside to survive
nucleation; without gas the embryo collapses into a flat vacancy loop instead.

*Introduced:* [2.3](lessons/02-03-voids-void-swelling.md)

### Void swelling

The fraction of the solid that is now hole. Same atoms, more room. Needs the
bias, a temperature where vacancies move, and a gas seed — remove any one and the
metal stays dense.

$$\frac{\Delta V}{V} = \frac{4}{3}\pi r^3 N$$

*Introduced:* [2.3](lessons/02-03-voids-void-swelling.md)

### Incubation dose

The lag — tens of dpa — during which voids nucleate and almost no dimensional
change appears, before swelling settles into its roughly linear regime.
Engineering a swelling-resistant alloy largely means pushing $D_0$ out.

*Introduced:* [2.3](lessons/02-03-voids-void-swelling.md), [4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md)

### Irradiation creep

Flow under stress at temperatures where thermal creep is dead, because the flux
(not thermal equilibrium) supplies the point defects that dislocation climb needs.
Only weakly temperature-dependent.

*Introduced:* [2.4](lessons/02-04-irradiation-creep-growth.md)

### SIPA

Stress-induced preferential absorption: an applied stress makes differently
oriented dislocations absorb interstitials at slightly different rates, so climb
— and therefore strain — is biased toward the stress direction. One of the two
mechanisms behind $B_0$ (the other is climb-and-glide).

*Introduced:* [2.4](lessons/02-04-irradiation-creep-growth.md)

### Irradiation growth

Shape change at **zero applied stress and constant volume**, possible only in an
anisotropic crystal (hcp Zr, graphite): interstitial and vacancy loops sort onto
different habit planes, lengthening one axis and shortening another. A macroscopic
effect only if the component is **textured**.

*Introduced:* [2.4](lessons/02-04-irradiation-creep-growth.md)

### Dispersed-barrier hardening

Irradiation sprays the slip planes with obstacles nobody designed — loops, voids,
fine precipitates — and a gliding dislocation must bow between them. Same Orowan
mechanism as any alloy strengthening, with self-inflicted obstacles.

$$\Delta\sigma_y = \alpha M \mu b \sqrt{Nd}$$

*Introduced:* [2.5](lessons/02-05-radiation-hardening.md)

### Source hardening and dislocation channeling

Clusters also pin the dislocation *sources*, giving an upper yield point and a
yield drop; the first dislocations through then sweep obstacles out of a narrow
band, and all further deformation localizes in that cleared **channel**. Strength
up, uniform ductility down.

*Introduced:* [2.5](lessons/02-05-radiation-hardening.md)

### Ductile-to-brittle transition temperature (DBTT)

The temperature at which a bcc steel flips from blunting cracks by plastic flow
to cleaving them open. Read off a Charpy energy-vs-temperature curve at a fixed
index energy (commonly 41 J).

*Introduced:* [2.6](lessons/02-06-embrittlement-dbtt-shift.md)

### DBTT shift

Hardening raises yield at *every* temperature, so yield meets the (roughly
temperature-independent) cleavage stress at a warmer temperature — the whole
transition slides right, and the ductile plateau (USE) sags down.

$$\Delta\text{DBTT} \approx C\,\Delta\sigma_y, \qquad C \approx 0.6\ ^\circ\text{C/MPa}$$

*Introduced:* [2.6](lessons/02-06-embrittlement-dbtt-shift.md)

### Helium embrittlement

A *separate* mode from the DBTT shift: transmutation helium is insoluble, collects
into grain-boundary bubbles, and decoheres them, so failure goes
**intergranular** and upper-shelf toughness collapses. High temperature, high
dose, and it cannot be annealed out — the helium atoms never leave.

*Introduced:* [2.6](lessons/02-06-embrittlement-dbtt-shift.md), [4.5](lessons/04-05-materials-for-fusion.md)

### Fluorite structure

UO₂'s open ceramic cage: uranium on an fcc lattice with oxygen filling all eight
tetrahedral holes (U is 8-coordinate, O is 4-coordinate, formula UO₂ exactly).
The empty body-centre-type sites are the built-in room that swallows fission
products and tolerates non-stoichiometry.

*Introduced:* [3.1](lessons/03-01-uo2-ceramic-fuel.md)

### O/M ratio

Oxygen-to-metal ratio, 2.00 for perfect UO₂. Real fuel lives as $\mathrm{UO}_{2\pm x}$;
excess oxygen scatters phonons (lowering $k$) and raises the **oxygen potential**
that attacks the cladding's inner wall. A design variable, not a constant.

*Introduced:* [3.1](lessons/03-01-uo2-ceramic-fuel.md), [3.3](lessons/03-03-fission-products-fates.md)

### Linear power

Heat generated per metre of fuel pin (W/m) — the single number that sets the
centerline-to-surface temperature rise. Pellet radius cancels out entirely.

*Introduced:* [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md)

### Integral conductivity

The exact statement of the pin thermal problem for any $k(T)$: linear power equals
$4\pi$ times the area under the conductivity curve between surface and centerline.

$$q' = 4\pi\int_{T_s}^{T_0} k(T)\,dT$$

*Introduced:* [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md)

### Restructuring

Above roughly 1600–1800 °C fabrication pores migrate *up* the temperature
gradient by evaporation on the hot face and condensation on the cold one,
leaving, from the axis out: **central void → columnar grains → equiaxed grains →
as-fabricated rim**. Each boundary marks an isotherm — a thermometer written in
grains.

*Introduced:* [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md)

### Fission yield

The number of product atoms of mass $A$ per 100 fissions. Double-humped and
asymmetric (peaks near $A \approx 95$ and $137$), summing to 200 percent because
each fission makes two products.

*Introduced:* [3.3](lessons/03-03-fission-products-fates.md)

### Burnup

The fuel's odometer — accumulated fissions, not calendar time. Quoted either as
at.% FIMA (fissions per initial metal atom) or as energy per unit fuel mass.

$$\text{FIMA} = \frac{\text{fissions}}{\text{initial heavy-metal atoms}}, \qquad B = \frac{\mathrm{MWd}}{\mathrm{kgU}}$$

*Introduced:* [3.3](lessons/03-03-fission-products-fates.md)

### Fission-gas release fraction

The share of bred Xe and Kr that has escaped the fuel into the pin's plenum. Set
by how much of the pellet sits above the release threshold.

$$f = \frac{\text{gas atoms released}}{\text{gas atoms produced}}$$

*Introduced:* [3.4](lessons/03-04-fission-gas-release-swelling.md)

### Athermal vs. thermal release

**Athermal** (recoil and knockout) is a geometric few-percent floor, flat in
temperature. **Thermal** is diffusion-controlled, so it switches on steeply near
1000 °C — the knee of an Arrhenius curve, not a phase change.

*Introduced:* [3.4](lessons/03-04-fission-gas-release-swelling.md)

### PCMI

Pellet–clad mechanical interaction: retained gas plus solid fission products swell
the pellet until it closes the fuel–clad gap and pushes outward on the cladding.
The mirror-image risk to plenum pressure — hot fuel releases (pressure), cold fuel
retains (swelling). You pay either way.

*Introduced:* [3.4](lessons/03-04-fission-gas-release-swelling.md)

### FCCI

Fuel–clad chemical interaction: in metallic fuel, fuel constituents and lanthanide
fission products interdiffuse into the steel clad and form **low-melting
eutectics** that thin it from the inside. A chemistry failure at the interface —
a large margin to the fuel's own melting point does not protect against it.

*Introduced:* [3.5](lessons/03-05-metallic-advanced-fuels.md)

### TRISO

A coated fuel particle — kernel, porous carbon buffer, inner pyrolytic carbon,
**SiC pressure vessel**, outer pyrolytic carbon — so containment is distributed
per particle rather than concentrated in one clad tube. One failed particle costs
one particle's inventory.

*Introduced:* [3.5](lessons/03-05-metallic-advanced-fuels.md)

### Terminal solid solubility (of hydrogen in Zr)

The ceiling on how much hydrogen zirconium can hold in solution — Arrhenius, so it
*falls* steeply on cooling. Any excess must precipitate as brittle $\mathrm{ZrH}_x$,
which is why the coldest spots on a pin stockpile hydride.

$$C_{\mathrm{TSS}}(T) = C_0\exp\!\left(-\frac{Q}{RT}\right)$$

*Introduced:* [4.1](lessons/04-01-zirconium-alloys-cladding.md)

### Hydride reorientation

Hydride platelets normally precipitate **circumferential** (harmless, hoop stress
lies in their plane). A tensile hoop stress present *during* precipitation flips
them **radial**, where the hoop stress pulls straight across their faces — a
ready-made crack, and the start of **delayed hydride cracking (DHC)**. Same
hydrogen content, opposite consequence.

*Introduced:* [4.1](lessons/04-01-zirconium-alloys-cladding.md)

### Breakaway (oxide transition)

The knee in a corrosion curve: the protective oxide, in compression, cracks near
the metal interface past a critical thickness, stops throttling the reaction, and
growth switches from decelerating (parabolic/cubic) to **linear**. Breakaway
oxidation is also breakaway hydriding.

*Introduced:* [4.3](lessons/04-03-corrosion-reactor-coolant.md)

### ECP

Electrochemical corrosion potential — the mixed potential the metal floats to in a
given water, in mV. Radiolytic oxidants push it **up** (aggressive); dissolved
hydrogen scavenges them and pulls it **down** (reducing). The main chemistry lever
against corrosion and cracking.

*Introduced:* [4.3](lessons/04-03-corrosion-reactor-coolant.md)

### CRUD

Corrosion products shed by the whole loop, deposited on hot cladding. Not dirt:
it carries activated $^{60}\mathrm{Co}$ around as worker dose, soaks up boron and
shifts core power (CIPS/AOA), and locally overheats the clad underneath.

*Introduced:* [4.3](lessons/04-03-corrosion-reactor-coolant.md)

### SCC triad

Stress-corrosion cracking needs a **susceptible material**, a **tensile stress**,
and an **aggressive environment**, all at the same place and time. Pull any one
leg and cracking stops — three independent chances to defeat it.

*Introduced:* [4.4](lessons/04-04-scc-iascc.md)

### Sensitization

Heating an austenitic stainless into roughly 500–800 °C (a weld's heat-affected
zone) precipitates $\mathrm{Cr_{23}C_6}$ on grain boundaries, starving the flanking
zone of chromium below the ~12 wt% needed to passivate. Thermal, carbon-driven —
defeated by low-carbon (304L/316L) or stabilized (321/347) grades.

*Introduced:* [4.4](lessons/04-04-scc-iascc.md)

### IASCC

Irradiation-assisted SCC: one agent, the neutron flux, pushes on all three triad
legs at once — RIS on the material, hardening and channeling on the stress,
radiolysis on the environment. Appears above a soft fluence threshold of order a
few dpa in LWR internals.

*Introduced:* [4.4](lessons/04-04-scc-iascc.md)

### He/dpa ratio

Helium bred per unit displacement dose (appm/dpa) — the number that separates
fusion from fission. Displacement counts can be matched in a fission reactor; the
gas cannot.

$$C_{\mathrm{He}} = \left(\frac{\text{He}}{\text{dpa}}\right)\times D$$

*Introduced:* [4.5](lessons/04-05-materials-for-fusion.md)

### Reduced activation

Designing the alloy chemistry so its transmutation products decay in **decades,
not millennia**: Mo → W, Nb → Ta, Ni → Mn, and no Co. It is a decay-time property,
not a shielding one — RAFM steel activates just fine.

*Introduced:* [4.5](lessons/04-05-materials-for-fusion.md)

## Formulas and rules

### Constants and conversions

| Quantity | Value |
|---|---|
| Boltzmann constant | $k_B = 8.617\times10^{-5}\ \mathrm{eV/K}$ |
| Gas constant | $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$ |
| Avogadro | $N_A = 6.022\times10^{23}\ \mathrm{mol^{-1}}$ |
| Barn | $1\ \mathrm{b} = 10^{-24}\ \mathrm{cm^2}$ |
| Full-power year | $1\ \mathrm{FPY} = 3.156\times10^{7}\ \mathrm{s}$ |
| Atomic attempt frequency | $\nu \sim 10^{13}\ \mathrm{Hz}$ |
| Iron atom density | $8.5\times10^{28}\ \mathrm{m^{-3}}$ |
| Concentration units | 1 at.% = 10,000 appm = $10^{-2}$ atom fraction |
| Fission energy | $\approx 200\ \mathrm{MeV} = 3.2\times10^{-11}\ \mathrm{J}$ |
| Fissions per MWd | $\approx 2.7\times10^{21}$, i.e. $\approx 0.95\ \mathrm{MWd}$ per gram fissioned |
| Burnup conversion | 1 at.% FIMA $\approx 9.5\ \mathrm{MWd/kgU}$ |

### Collision kinematics and the displacement count

$$T_{\max} = \gamma E, \qquad \gamma = \frac{4M_1M_2}{(M_1+M_2)^2}, \qquad \bar T = \tfrac12 T_{\max}$$

$\gamma = 1$ at equal masses (why a moving Fe atom can hand *all* its energy to
another Fe atom, and why cascades branch) and falls as the mismatch grows
($\gamma \approx 0.069$ for n on Fe, $0.28$ on C, $0.022$ on W).

$$\text{Kinchin–Pease:}\quad N_d = \frac{E_{dam}}{2E_d} \qquad\qquad \text{NRT:}\quad N_d = \frac{0.8\,E_{dam}}{2E_d} = \frac{0.4\,E_{dam}}{E_d}$$

$$\text{dpa} = \sigma_d\,\phi\,t = \sigma_d\,\Phi, \qquad \dot d_{\mathrm{surv}} = \xi\,\sigma_d\,\phi$$

**Order of operations:** take $E_{dam} \approx 0.7 E_{PKA}$ *first*, then divide by
$2E_d$, then apply $\kappa = 0.8$. Below $E_d$, $N_d = 0$; between $E_d$ and $2E_d$,
$N_d = 1$; then a linear ramp; then a plateau where electronic losses take over.

*From* [1.2](lessons/01-02-how-radiation-deposits-energy.md), [1.3](lessons/01-03-pka-displacement-cascades.md), [1.4](lessons/01-04-kinchin-pease-nrt-dpa.md), [1.5](lessons/01-05-cascade-to-defect-population.md)

### Damage-relevant material data

Values the lessons use without deriving them.

| Material | $E_d$ (eV) | Notes |
|---|---|---|
| Iron / steel | 40 | the field's working number |
| Copper | 30 | |
| Tungsten | 90 | heavy, small $\gamma$, dense cascades |

| Quantity | Typical value |
|---|---|
| Vacancy formation energy $E_\mathrm{f}^{v}$ (metals) | 1–2 eV (Fe $\approx 1.6$) |
| Interstitial formation energy $E_\mathrm{f}^{i}$ | 3–5 eV (so thermal SIAs are negligible) |
| Migration energy, interstitial / vacancy | $E_\mathrm{m}^{i} \approx 0.1$–$0.3$ eV vs. $E_\mathrm{m}^{v} \approx 1$ eV |
| Fast-reactor flux / dpa rate | $\sim10^{15}\ \mathrm{n\,cm^{-2}s^{-1}}$, $\sim10^{-6}\ \mathrm{dpa/s}$ (tens of dpa per year) |
| LWR internals | a few dpa per decade; RPV a fraction of a dpa over life |
| Survival efficiency $\xi$ | 0.01–0.30 |
| Dislocation bias $B$ | 0.01–0.05 |

### Point-defect rate theory

$$D = D_0\exp\!\left(-\frac{E_m}{k_BT}\right), \qquad \frac{n_v}{N}\bigg|_{\mathrm{eq}} = \exp\!\left(-\frac{E_\mathrm{f}^{v}}{k_BT}\right), \qquad \Gamma = \nu\exp\!\left(-\frac{E_m}{k_BT}\right)$$

$$\frac{dC_v}{dt} = K_0 - K_{iv}C_iC_v - k_v^2 D_v C_v, \qquad \frac{dC_i}{dt} = K_0 - K_{iv}C_iC_v - k_i^2 D_i C_i$$

Two steady-state regimes, and which one you are in decides how everything scales
with flux:

| Regime | Steady state | Scaling with dose rate |
|---|---|---|
| Sink-dominated (many sinks, low flux) | $C_v \approx \dfrac{K_0}{k_v^2 D_v}$ | linear, $C \propto K_0$ |
| Recombination-dominated (few sinks, high flux) | $C \approx \sqrt{K_0/K_{iv}}$ | square root, $C \propto K_0^{1/2}$ |

Bias bookkeeping: dislocations run a net interstitial current
$\propto Z_i - Z_v = Z_v B$, so conservation hands the unbiased sinks (voids) an
equal vacancy surplus, $J_v^{\text{void}} \propto B$. Set $B = 0$ and swelling
switches off exactly.

*From* [1.1](lessons/01-01-crystals-defects-refresher.md), [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md), [2.2](lessons/02-02-dislocation-loops-bias.md)

### Property-degradation mechanisms — one table

Every way irradiation changes a component, what it actually changes, and the
operating regime where it dominates.

| Mechanism | What it changes | Where it dominates | Lesson |
|---|---|---|---|
| **Void swelling** | volume **up**, density down; isotropic, stress-free | $0.3$–$0.55\,T_m$ (peak $\sim0.4\,T_m$), past incubation; fcc austenitics worst | [2.3](lessons/02-03-voids-void-swelling.md), [4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md) |
| **Irradiation growth** | shape at **constant** volume | anisotropic hcp (Zr, graphite) *and* textured components; needs no stress | [2.4](lessons/02-04-irradiation-creep-growth.md), [4.1](lessons/04-01-zirconium-alloys-cladding.md) |
| **Irradiation creep** | shape under stress, volume unchanged | anywhere the flux runs — including temperatures where thermal creep is dead | [2.4](lessons/02-04-irradiation-creep-growth.md) |
| **Thermal creep** | strain under stress and heat | above ~550 °C (F/M), ~650 °C (austenitic) — the ceiling that limits F/M | [2.4](lessons/02-04-irradiation-creep-growth.md), [4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md) |
| **Radiation hardening** | yield strength **up**, uniform ductility down | low temperature; rises as $\sqrt{\text{dpa}}$ then saturates within a few dpa | [2.5](lessons/02-05-radiation-hardening.md) |
| **Dislocation channeling** | deformation localizes in cleared bands | after hardening; the ductility half of the same trade | [2.5](lessons/02-05-radiation-hardening.md) |
| **DBTT embrittlement** | toughness down, transition temperature up, USE down | bcc steels (RPV, F/M) at low temperature; driven by Cu, Ni, P and fluence | [2.6](lessons/02-06-embrittlement-dbtt-shift.md) |
| **Helium embrittlement** | grain-boundary decohesion, **intergranular** fracture | high temperature + high He/dpa (fusion walls, Ni-bearing alloys) | [2.6](lessons/02-06-embrittlement-dbtt-shift.md), [4.5](lessons/04-05-materials-for-fusion.md) |
| **RED / RIS** | diffusion rate up; grain-boundary chemistry (Cr depleted) | reactor temperatures where thermal $C_v^{\mathrm{eq}}$ is negligible | [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md) |
| **IASCC** | intergranular cracking of core internals | oxidizing LWR water above ~ a few dpa | [4.4](lessons/04-04-scc-iascc.md) |
| **Waterside corrosion + H pickup** | oxide grows, wall thins, hydride embrittles | hot coolant; accelerates sharply past breakaway | [4.3](lessons/04-03-corrosion-reactor-coolant.md), [4.1](lessons/04-01-zirconium-alloys-cladding.md) |
| **LOCA steam oxidation** | oxygen embrittlement, H₂ release, thermal runaway | Zr in steam above ~1000 °C | [4.1](lessons/04-01-zirconium-alloys-cladding.md) |
| **Fission-gas release / gaseous swelling** | plenum pressure up (released) or pellet swelling (retained) | fuel above ~1000 °C releases; below it retains | [3.4](lessons/03-04-fission-gas-release-swelling.md), [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md) |
| **Solid FP swelling and O/M rise** | pellet volume up; fuel becomes more oxidizing | with burnup, all temperatures | [3.3](lessons/03-03-fission-products-fates.md) |
| **FCCI** | clad wall thinned by low-melting eutectics | metallic fuel against steel cladding | [3.5](lessons/03-05-metallic-advanced-fuels.md) |

### Dimensional change — swelling, creep, growth

$$\frac{\Delta V}{V} = \frac{4}{3}\pi r^3 N, \qquad \frac{\Delta V}{V} \approx S\,(D - D_0)_+, \qquad \frac{\Delta L}{L} = (1 + \Delta V/V)^{1/3} - 1 \approx \tfrac13\frac{\Delta V}{V}$$

$$\text{creep:}\quad \dot\varepsilon = B_0\,\sigma\,\dot\phi_{\mathrm{dpa}} \;\Longrightarrow\; \varepsilon = B_0\,\sigma\,\phi_{\mathrm{dpa}} \quad(\text{depends on dose, not path})$$

$$\text{growth (hcp):}\quad \varepsilon_a > 0,\ \ \varepsilon_c < 0, \qquad \frac{\Delta V}{V} = 2\varepsilon_a + \varepsilon_c \approx 0$$

Typical $B_0 \sim 10^{-6}\ \mathrm{MPa^{-1}dpa^{-1}}$. Keep the three straight:

| | Needs stress? | Needs anisotropy? | Volume change |
|---|---|---|---|
| Swelling | no | no | $\Delta V/V > 0$ |
| Growth | no | **yes** | $\approx 0$ |
| Creep | **yes** | no | $\approx 0$ (shape only) |

*From* [2.3](lessons/02-03-voids-void-swelling.md), [2.4](lessons/02-04-irradiation-creep-growth.md), [4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md)

### Hardening and embrittlement

$$\Delta\sigma_y = \alpha M \mu b\sqrt{Nd}, \qquad L \approx \frac{1}{\sqrt{Nd}}, \qquad \Delta\sigma_y \approx \sqrt{\textstyle\sum_i \Delta\sigma_{y,i}^2}$$

$$\Delta\sigma_y \propto (\text{dpa})^{1/2}\ \text{while obstacles nucleate, then saturates}$$

$$\Delta\text{DBTT} \approx 0.6\,\Delta\sigma_y \quad (^\circ\text{C per MPa})$$

Standard parameter values used throughout Modules 2 and 4:

| Parameter | Value |
|---|---|
| Taylor factor $M$ | 3.06 (random bcc or fcc polycrystal) |
| Shear modulus $\mu$ (steel) | 80 GPa |
| Burgers vector $b$ | 0.25 nm |
| Barrier strength $\alpha$ | 0.1–0.2 weak/shearable loops · 0.4 precipitates · 0.5–1 voids, large precipitates |
| Realistic RPV end-of-life $\Delta\sigma_y$ | tens to ~150 MPa (so $\Delta$DBTT of tens of °C up to ~150 °C) |
| Charpy index energy | 41 J |
| RPV copper content | old vessels 0.2–0.35 wt%; modern below ~0.05 wt% |

*From* [2.5](lessons/02-05-radiation-hardening.md), [2.6](lessons/02-06-embrittlement-dbtt-shift.md)

### Fuel thermal analysis

$$\frac{1}{r}\frac{d}{dr}\!\left(r\,k\,\frac{dT}{dr}\right) + q''' = 0, \qquad q' = q'''\pi a^2$$

$$q' = 4\pi\int_{T_s}^{T_0}k(T)\,dT \quad\Longrightarrow\quad T_0 - T_s = \frac{q'}{4\pi k}\ \ (\text{constant }k)$$

$$T(r) = T_0 - (T_0 - T_s)\left(\frac{r}{a}\right)^2, \qquad \frac{V_{>T_{\mathrm{th}}}}{V} = \left(\frac{r_{\mathrm{th}}}{a}\right)^2 = \frac{T_0 - T_{\mathrm{th}}}{T_0 - T_s}$$

The pellet radius never appears in the temperature rise. Area fraction above a
threshold equals $(r/a)^2$ directly. UO₂ conductivity falls with temperature,
$k(T)\approx 1/(A + BT)$, so a constant-$k$ estimate is optimistic. Thermal stress
in the brittle pellet is of order $\sigma \sim E\alpha\Delta T/(1-\nu)$ — enough to
crack it radially on the first rise to power.

*From* [3.1](lessons/03-01-uo2-ceramic-fuel.md), [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md)

### Fuel property data and temperature landmarks

| Fuel | $k$ (W·m⁻¹K⁻¹) | Melting point | Headline trait |
|---|---|---|---|
| UO₂ | 3–8, *falls* with $T$ (~8 near 200 °C, ~3 by 1500 °C) | ~2865 °C | open fluorite cage, huge thermal margin, poor conductor |
| MOX (U,Pu)O₂ | 3–4 | ~2750 °C | UO₂-like; the reason is fuel cycle, not thermal |
| U–Zr metal | 30–40 | ~1100–1200 °C | ~10× $k$, cool center, but low margin, FCCI, high swelling |
| UN / UC | 15–25 | ~2400–2800 °C | dense **and** conductive; compact and space reactors |
| U metal | ~35 | ~1135 °C | reacts with water, swells and distorts — the loser of 3.1 |

| Landmark | Temperature |
|---|---|
| Fission-gas release threshold | ~1000 °C |
| Restructuring (pore migration, columnar grains) | ~1600–1800 °C |
| UO₂ melting | ~2865 °C |
| PWR coolant pressure (the plenum-pressure limit to beat) | 15.5 MPa |
| Typical peak linear power | 25–30 kW/m |

Metallic-fuel pin design leans on three fixes: a **sodium thermal bond** in the
gap, a low **smear density** (~75 percent, leaving room to swell), and a large gas
plenum.

*From* [3.1](lessons/03-01-uo2-ceramic-fuel.md), [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md), [3.5](lessons/03-05-metallic-advanced-fuels.md)

### Fission products, burnup, and plenum pressure

| Class | Examples | Fate in the pellet |
|---|---|---|
| Noble gas | Xe, Kr | insoluble → bubbles, swelling, release |
| Volatile | Cs, I, Te | migrate to the cooler rim; accident source term |
| Solid metal | Mo, Tc, Ru, Rh, Pd | metallic "white inclusion" precipitates |
| Oxide / soluble | Sr, Ba, Zr, rare earths | dissolve substitutionally in the UO₂ lattice |

$$n = f\,n_{\text{prod}}, \qquad p = \frac{nRT}{V}$$

Combined noble-gas yield $\approx 0.28$–$0.30$ atoms of (Xe + Kr) per fission. A
typical LWR pin holds ~1.7 kgU and reaches 45–60 MWd/kgU, i.e. ~5–6 at.% FIMA and
of order 0.1 mol of noble gas. Fission fragments become fission **products** only
after prompt-neutron emission and beta decay.

*From* [3.3](lessons/03-03-fission-products-fates.md), [3.4](lessons/03-04-fission-gas-release-swelling.md)

### Cladding and structural alloy selection

| Alloy | Lattice | Where it goes | Why / why not |
|---|---|---|---|
| Zircaloy-2 / -4, ZIRLO, M5 | hcp | LWR cladding | near-transparent to thermal neutrons; hydrides, grows, corrodes (Nb alloys corrode and pick up H less) |
| 304 / 316 austenitic | fcc | LWR internals, moderate dose | tough, weldable, no DBTT, hot-strong — but swells ~1 percent per dpa and suffers IASCC |
| HT9, T91 (9–12 Cr F/M) | bcc | fast-reactor cladding and ducts | high sink density → ~0.1 percent per dpa swelling; pays with a ~550 °C ceiling and a DBTT |
| ODS (Y–Ti–O dispersion) | bcc | advanced / fusion | oxides pin dislocations (ceiling ~700 °C), add sinks, and trap He; hard, costly powder metallurgy |
| EUROFER-97, F82H (RAFM) | bcc | fusion structure | F/M chemistry re-tuned for reduced activation |
| W (and Be) | bcc | plasma-facing armour | highest melting point, low sputter yield, low tritium retention; brittle, recrystallizes |

$$S_{\text{austenitic}} \approx 1\%/\text{dpa} \ (D_0 \sim 20\text{–}40\ \text{dpa}), \qquad S_{\text{F/M}} \approx 0.1\%/\text{dpa} \ (D_0 \gtrsim 100\ \text{dpa})$$

Swelling scales inversely with total sink strength, $\Delta V/V \propto 1/k^2$ —
the F/M advantage is metallurgy (laths, dislocations, carbides), not the bcc
packing fraction.

**Neutron economy.** $\Sigma_a = N\sigma_a$ with $N = \rho N_A/M$:

| Metal | $\sigma_a$ (thermal, b) | $\rho$ (g/cm³) | $M$ (g/mol) | $\Sigma_a$ (cm⁻¹) |
|---|---|---|---|---|
| Zr | 0.18 | 6.5 | 91.2 | $7.7\times10^{-3}$ |
| Fe | 2.56 | 7.9 | 55.8 | 0.218 (≈ 28× Zr) |
| Ni | 4.5 | 8.9 | 58.7 | 0.411 (≈ 53× Zr) |

**LOCA limits:** PCT $\le 1200\ ^\circ$C and ECR $\le 17$ percent, both far below
zirconium's ~1850 °C melting point — they guard against runaway and oxygen
embrittlement, not melting. Hydrogen pickup fraction is roughly 10–20 percent for
Zircaloy-4, lower for M5 and ZIRLO.

*From* [4.1](lessons/04-01-zirconium-alloys-cladding.md), [4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md), [4.5](lessons/04-05-materials-for-fusion.md)

### Corrosion kinetics and water chemistry

$$\text{pre-transition (protective):}\quad x = \sqrt{k_p t}, \qquad \frac{dx}{dt} = \frac{k_p}{2x}$$

$$\text{post-transition (breakaway):}\quad x = x_t + k_\ell(t - t_t), \qquad \frac{dx}{dt} = k_\ell = \text{const}$$

$$\mathrm{Zr} + 2\,\mathrm{H_2O} \rightarrow \mathrm{ZrO_2} + 2\,\mathrm{H_2} + \text{heat}$$

Transition thickness is a couple of micrometres; rate constants are Arrhenius, so
the hottest span of a rod grows the thickest oxide. Radiolysis makes O₂, H₂O₂ and
radicals that raise the ECP; dissolved H₂ scavenges them and pulls it back down.

| | PWR primary | BWR |
|---|---|---|
| Boiling in core | no (subcooled) | yes |
| Chemistry | borated + lithiated, 25–50 cc H₂ per kg water | NWC (oxidizing) or HWC + noble metal |
| ECP | low, reducing (~$-500$ mV range) | high under NWC; H₂ boils off into the steam, so the fix keeps escaping |

Dosing hydrogen *lowers* hydrogen pickup: it suppresses radiolytic oxygen → lower
ECP → less corrosion → less H₂ produced → less taken up.

*From* [4.3](lessons/04-03-corrosion-reactor-coolant.md)

### Cracking: SCC, IASCC, and mitigations

$$\text{SCC} = \text{(susceptible material)} \cap \text{(tensile stress)} \cap \text{(aggressive environment)}$$

$$K < K_{ISCC}: \ da/dt \approx 0 \ \longrightarrow\ \text{Stage I (rises with } K) \ \longrightarrow\ \text{Stage II plateau}$$

Irradiation moves the whole curve up and left: lower $K_{ISCC}$, higher plateau.

| Leg | What irradiation adds | One mitigation |
|---|---|---|
| Material | RIS depletes Cr at grain boundaries (no carbides needed) | low-carbon 304L/316L or stabilized 321/347 — beats sensitization, **not** RIS |
| Stress | hardening raises $\sigma_y$; channeling spikes local stress at boundaries | stress-relief anneal or shot-peening (put the surface in compression) |
| Environment | radiolysis raises the ECP into the fast-cracking range | hydrogen water chemistry / PWR H₂ dosing |

Crack paths: **IGSCC** along grain boundaries (the usual reactor case, and what RIS
sets up); **TGSCC** straight through grains (more typical of chloride attack).

*From* [4.4](lessons/04-04-scc-iascc.md)

### The fusion first wall

| Quantity | Fission | Fusion (14.1 MeV D–T) |
|---|---|---|
| He/dpa | 0.1–0.3 appm/dpa | 10–15 appm/dpa (50–100×) |
| Design dose | — | tens to ~100 dpa lifetime target |

Four loads on one component: **displacement damage** (harder spectrum, bigger
cascades), **transmutation gas** (He and H from $(n,\alpha)$, $(n,p)$ threshold
reactions open above ~1 MeV), **surface heat and sputtering erosion** (MW·m⁻²),
and **tritium retention and permeation**. Reduced-activation substitutions:
Mo → W, Nb → Ta, Ni → Mn, no Co.

*From* [4.5](lessons/04-05-materials-for-fusion.md)

## Assumed, not taught here

This is a Tier 2 course: it leans hard on `materials-science` for the metallurgy
and on `intro-nuclear-engineering` for the neutronics, and derives neither.

| Fact | Where it's taught |
|---|---|
| bcc / fcc / hcp lattices, packing fractions, unit-cell counting | [materials-science 1.2](../materials-science/lessons/01-02-crystal-structures-unit-cells.md) |
| Miller indices, habit planes, close-packed directions | [materials-science 1.3](../materials-science/lessons/01-03-miller-indices-directions-planes.md) |
| Grains, crystallographic **texture**, anisotropy (behind growth and hydride orientation) | [materials-science 1.4](../materials-science/lessons/01-04-order-disorder-grains.md) |
| Vacancies, interstitials, solid solutions at equilibrium | [materials-science 2.1](../materials-science/lessons/02-01-point-defects-solid-solutions.md) |
| Dislocations, Burgers vector, slip and plastic flow | [materials-science 2.2](../materials-science/lessons/02-02-dislocations-plastic-flow.md) |
| Grain boundaries and interfaces as sinks and segregation sites | [materials-science 2.3](../materials-science/lessons/02-03-interfaces-grain-boundaries.md) |
| Fick's laws; Arrhenius temperature dependence of diffusion | [materials-science 2.4](../materials-science/lessons/02-04-diffusion-i-ficks-first-law.md), [2.5](../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) |
| Eutectics and low-melting phases (the chemistry behind FCCI) | [materials-science 3.2](../materials-science/lessons/03-02-eutectics-microstructure.md) |
| Austenite / ferrite / martensite, carbide precipitation, heat treatment | [materials-science 3.3](../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md) |
| Elastic constants $E$, $\nu$, thermal expansion $\alpha$ (the pellet-cracking stress) | [materials-science 4.1](../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) |
| Schmid factor and resolved shear stress (the origin of the Taylor factor $M$) | [materials-science 4.2](../materials-science/lessons/04-02-plastic-deformation-schmid.md) |
| Orowan / dispersed-obstacle strengthening in its unirradiated form | [materials-science 4.3](../materials-science/lessons/04-03-strengthening-mechanisms.md) |
| Cleavage vs. plastic flow, Charpy testing, stress intensity $K$, thermal creep | [materials-science 4.4](../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) |
| Band picture: why an insulator carries heat by phonons and a metal by electrons | [materials-science 5.1](../materials-science/lessons/05-01-electronic-properties-band-picture.md) |
| Materials-selection logic (property bundles, not single numbers) | [materials-science 5.3](../materials-science/lessons/05-03-materials-classes-selection.md) |
| Microscopic cross-section, the barn, reaction rates | [intro-nuclear-engineering 2.1](../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md) |
| Macroscopic cross-section $\Sigma = N\sigma$, neutron flux, mean free path | [intro-nuclear-engineering 2.2](../intro-nuclear-engineering/lessons/02-02-macroscopic-cross-section-mean-free-path.md) |
| Moderation and why light nuclei slow neutrons (same $\gamma$ as 1.2) | [intro-nuclear-engineering 2.4](../intro-nuclear-engineering/lessons/02-04-moderation-slowing-neutrons.md) |
| $(n,\alpha)$ and $(n,p)$ reactions, Q-values, thresholds (helium production) | [intro-nuclear-engineering 1.5](../intro-nuclear-engineering/lessons/01-05-nuclear-reactions-q-values.md) |
| Fission and its ~200 MeV energy release | [intro-nuclear-engineering 3.1](../intro-nuclear-engineering/lessons/03-01-fission-process-energy.md) |
| Fission-product yields as neutron-economy objects | [intro-nuclear-engineering 3.2](../intro-nuclear-engineering/lessons/03-02-fission-products-neutron-yield.md) |
| Electronic vs. nuclear stopping (the split behind $E_{dam}$) | [intro-nuclear-engineering 4.3](../intro-nuclear-engineering/lessons/04-03-charged-particles-through-matter.md) |
| Dose as "deposited energy weighted by damage" — dpa's radiological cousin | [intro-nuclear-engineering 4.4](../intro-nuclear-engineering/lessons/04-04-dose-quantities.md) |
| D–T fusion and the 14.1 MeV neutron | [intro-nuclear-engineering 4.1](../intro-nuclear-engineering/lessons/04-01-fusion-basics.md) |
| Reactor types (LWR, fast, HTGR) and their operating conditions | [intro-nuclear-engineering 4.5](../intro-nuclear-engineering/lessons/04-05-reactor-types-nuclear-landscape.md) |
| Ideal gas law (plenum pressure) | [general-chemistry 3.1](../general-chemistry/lessons/03-01-gases-ideal-gas-law-kinetic-theory.md) |
| Le Chatelier / equilibrium shifting (why dosing H₂ kills radiolytic O₂) | [general-chemistry 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| Mixed potential and corrosion potential (the ECP) | [electrochemistry 4.3](../electrochemistry/lessons/04-03-corrosion-mixed-potential.md) |
| Steady conduction with internal generation, cylindrical geometry | [heat-transfer 1.2](../heat-transfer/lessons/01-02-heat-equation.md), [1.3](../heat-transfer/lessons/01-03-1d-steady-conduction.md) |
| Hoop stress in a thin-walled tube | [mechanics-of-materials 4.3](../mechanics-of-materials/lessons/04-03-combined-loadings.md) |
| Thermal stress from a constrained temperature difference | [mechanics-of-materials 1.5](../mechanics-of-materials/lessons/01-05-thermal-stress-poisson.md) |

## Pitfalls

### Dose and counting

- dpa counts displacement *events*, not surviving defects — most heal in picoseconds; real damage tracks $\xi\,\sigma_d\phi$. *([1.4](lessons/01-04-kinchin-pease-nrt-dpa.md), [1.5](lessons/01-05-cascade-to-defect-population.md))*
- Fluence, dpa, and burnup are three different axes: neutrons per area, atomic kicks per atom, fissions per heavy-metal atom. *([1.4](lessons/01-04-kinchin-pease-nrt-dpa.md), [3.3](lessons/03-03-fission-products-fates.md))*
- Strip the electronic losses **first**: $E_{dam} \approx 0.7E_{PKA}$, then divide by $2E_d$. Skipping it overcounts by about 40 percent. *([1.4](lessons/01-04-kinchin-pease-nrt-dpa.md))*
- A more energetic PKA makes *more* defects but a *smaller fraction* survives — denser cascade, harder recombination. *([1.5](lessons/01-05-cascade-to-defect-population.md), [1.3](lessons/01-03-pka-displacement-cascades.md))*
- A dose without its dose rate and temperature is not a specified irradiation. *([1.5](lessons/01-05-cascade-to-defect-population.md))*
- The neutron isn't the damage agent — it is uncharged and merely triggers the PKA, which does all the displacing. *([1.3](lessons/01-03-pka-displacement-cascades.md))*
- $T_{\max}$ is the head-on ceiling; the average isotropic recoil is half of it. Energy transfer is about the mass *match*, not brute energy. *([1.2](lessons/01-02-how-radiation-deposits-energy.md))*
- Ionization is the biggest energy loss but does no damage **in a metal** — do not carry that rule into insulators, oxides, or polymers. *([1.2](lessons/01-02-how-radiation-deposits-energy.md))*

### Defects, sinks, and symmetry

- Vacancies and interstitials are produced equally but never behave equally: $D_i \gg D_v$ **and** $k_i^2 \neq k_v^2$. That broken symmetry is the whole of Module 2. *([1.1](lessons/01-01-crystals-defects-refresher.md), [2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md), [2.2](lessons/02-02-dislocation-loops-bias.md))*
- Thermal-defect intuition does not transfer: radiation defects are athermal and sit at a driven steady state, not at equilibrium. A cold component can be saturated with defects. *([1.1](lessons/01-01-crystals-defects-refresher.md))*
- RED does not mean the metal is hotter — the jump barrier $E_m$ is unchanged; irradiation raises the *number of carriers*. *([2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md))*
- Defect concentration does not climb forever: recombination-dominated it saturates as $\sqrt{K_0/K_{iv}}$; only sink-dominated does it track $K_0$ linearly. *([2.1](lessons/02-01-defect-migration-radiation-enhanced-diffusion.md))*
- Vacancy *loops* do not grow — being dislocations, they preferentially catch interstitials, which heal them. Vacancies accumulate in **voids**, which are far less biased sinks. *([2.2](lessons/02-02-dislocation-loops-bias.md))*
- In-cascade clusters and freely-migrating defects do different jobs: clusters are immobile obstacles from birth, FMD drive long-range segregation and void growth. *([1.5](lessons/01-05-cascade-to-defect-population.md))*

### Dimensional change

- Swelling, growth, and creep are three different animals — only swelling adds volume; growth needs anisotropy; creep needs stress. *([2.4](lessons/02-04-irradiation-creep-growth.md))*
- Irradiation creep needs no heat — the flux, not temperature, supplies the defects for climb, so do not reach for an Arrhenius factor. *([2.4](lessons/02-04-irradiation-creep-growth.md))*
- Growth is inseparable from fabrication texture: a randomly-oriented polycrystal of the same alloy grows far less than a cold-pilgered tube. *([2.4](lessons/02-04-irradiation-creep-growth.md), [4.1](lessons/04-01-zirconium-alloys-cladding.md))*
- Extrapolating the linear swelling rate back to zero dose badly overpredicts — the incubation dose is real. *([2.3](lessons/02-03-voids-void-swelling.md), [4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md))*
- Voids are not a vacancy-only phenomenon: interstitials arrive too and shrink them. Swelling exists only because the bias skims interstitials off elsewhere first — and usually only because a little helium got the void past nucleation. *([2.3](lessons/02-03-voids-void-swelling.md))*
- F/M steels resist swelling because of **sink density** (laths, dislocations, carbides), not because bcc is "less dense". *([4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md))*

### Strength and toughness

- Hardening scales as $\sqrt{Nd}$, so doubling the obstacle content buys only $\sqrt2$ — and it saturates within a few dpa. *([2.5](lessons/02-05-radiation-hardening.md))*
- Not all obstacles count alike — that's what $\alpha$ is for, and mixed populations combine by root-sum-square, not by adding. *([2.5](lessons/02-05-radiation-hardening.md))*
- "Embrittled" does **not** mean weaker: yield strength went up, toughness went down. Higher tensile number, lower Charpy number. *([2.6](lessons/02-06-embrittlement-dbtt-shift.md))*
- Fluence alone does not predict a DBTT shift — Cu, Ni, P content and flux matter as much, and P segregation embrittles without hardening. *([2.6](lessons/02-06-embrittlement-dbtt-shift.md))*
- Helium embrittlement is a different animal from the DBTT shift: high-temperature, bubble-driven, **intergranular** — not low-temperature transgranular cleavage. *([2.6](lessons/02-06-embrittlement-dbtt-shift.md), [4.5](lessons/04-05-materials-for-fusion.md))*

### Fuel

- UO₂'s conductivity **falls** with temperature (phonon scattering) — the opposite of metal intuition, and the single most common UO₂ error. *([3.1](lessons/03-01-uo2-ceramic-fuel.md))*
- A fatter pellet does *not* run hotter: radius cancels in $T_0 - T_s = q'/4\pi k$. It changes $q'''$, not $\Delta T$. *([3.2](lessons/03-02-fuel-temperature-profile-restructuring.md))*
- Keep the primes straight: $q'''$ volumetric, $q'$ per unit length, $q''$ surface flux. The integral-conductivity relation uses $q'$. *([3.2](lessons/03-02-fuel-temperature-profile-restructuring.md))*
- Constant $k$ is optimistic — the hottest region is also the worst-conducting one, so the true centerline sits above the estimate. *([3.1](lessons/03-01-uo2-ceramic-fuel.md), [3.2](lessons/03-02-fuel-temperature-profile-restructuring.md))*
- Restructuring is a thermodynamic response, not damage — but it is a permanent record that the fuel ran very hot. *([3.2](lessons/03-02-fuel-temperature-profile-restructuring.md))*
- Fission is asymmetric: the symmetric split is hundreds of times rarer than the peaks. And a product's *chemical class*, not its yield, decides its fate. *([3.3](lessons/03-03-fission-products-fates.md))*
- Burnup measures accumulated fissions, not calendar time. *([3.3](lessons/03-03-fission-products-fates.md))*
- The 1000 °C release threshold is the knee of an Arrhenius curve, not a wall; and athermal release does *not* grow with temperature. *([3.4](lessons/03-04-fission-gas-release-swelling.md))*
- Releasing gas isn't strictly the bad outcome — it trades plenum pressure against gaseous swelling and PCMI. *([3.4](lessons/03-04-fission-gas-release-swelling.md))*
- What matters is margin to melting, not operating temperature: metallic fuel runs cool but melts near 1100 °C. *([3.5](lessons/03-05-metallic-advanced-fuels.md))*
- TRISO's SiC is a load-bearing pressure vessel, not a surface coating; MOX is not a new fuel, just UO₂ chemistry with Pu on the same lattice. *([3.5](lessons/03-05-metallic-advanced-fuels.md))*

### Cladding, corrosion, and cracking

- In a *thermal* reactor the clad's first job is neutron transparency, not strength — that is why the soft, reactive metal wins over steel. *([4.1](lessons/04-01-zirconium-alloys-cladding.md))*
- Hydride danger is orientation, not quantity: circumferential platelets are benign, radial ones are pre-made cracks under hoop stress. *([4.1](lessons/04-01-zirconium-alloys-cladding.md))*
- LOCA limits guard against oxidation runaway and oxygen embrittlement, not melting — they sit hundreds of degrees below zirconium's melting point. *([4.1](lessons/04-01-zirconium-alloys-cladding.md))*
- Early oxide is protection; the hazard is the **transition** where it cracks and growth goes linear. And "parabolic" is shorthand — Zircaloy is often closer to cubic. *([4.3](lessons/04-03-corrosion-reactor-coolant.md))*
- Dosing hydrogen *reduces* hydrogen pickup: it kills the radiolytic oxidant that would otherwise accelerate the corrosion that makes the hydrogen. *([4.3](lessons/04-03-corrosion-reactor-coolant.md))*
- CRUD is an active player — worker dose via $^{60}\mathrm{Co}$, core power shift via boron, local overheating of the clad. *([4.3](lessons/04-03-corrosion-reactor-coolant.md))*
- Only **tensile** stress drives SCC, and residual stress from welding or machining counts — parts have cracked under no service load at all. *([4.4](lessons/04-04-scc-iascc.md))*
- Sensitization and RIS share a symptom (Cr-depleted boundaries) but not a mechanism — a low-carbon grade defeats one and not the other, which is why 316L internals still suffer IASCC. *([4.4](lessons/04-04-scc-iascc.md))*
- The IASCC fluence threshold is a soft knee, not a bright line. *([4.4](lessons/04-04-scc-iascc.md))*
- Toughness is not the binding constraint at high dose — dimensional stability is. A tough steel that swelled 60 percent is useless. *([4.2](lessons/04-02-steels-austenitic-ferritic-martensitic.md))*

### Fusion

- The new fusion problem is **transmutation gas**, not raw dpa — a fission fast reactor can match the displacement count but never the He/dpa ratio. *([4.5](lessons/04-05-materials-for-fusion.md))*
- Tungsten is chosen for the *surface* (heat flux, sputtering), not for bulk damage resistance — it is brittle and its DBTT worsens under irradiation. *([4.5](lessons/04-05-materials-for-fusion.md))*
- "Low activation" means it does not *stay* radioactive — decades rather than millennia. It activates just fine. *([4.5](lessons/04-05-materials-for-fusion.md))*

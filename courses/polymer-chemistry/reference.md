# Polymer & Materials Chemistry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One monomer, one mechanism, one distribution — and out the far end comes a stiff
bottle, a rubber band, or a puddle of honey. This card holds the machinery in
between: the two polymerization mechanisms and what each lets you control, the
four molecular-weight averages and which instrument reports which, the random-coil
statistics that set chain size, the thermal vocabulary ($T_g$ vs. $T_m$) and what
shifts each, and the Flory–Huggins thermodynamics that decides whether a chain
swells, collapses, or comes out of solution.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $M_0$ | molar mass of **one repeat unit as it sits in the chain** (not of the monomer you bought) | [1.1](lessons/01-01-what-is-a-polymer-classification.md) |
| $X_n$ | number-average degree of polymerization — repeat units per average chain | [1.1](lessons/01-01-what-is-a-polymer-classification.md) |
| $p$ | conversion — fraction of one functional group that has already reacted | [1.2](lessons/01-02-step-growth-polymerization.md) |
| $c_0$, $c$ | initial and current concentration of a reacting functional group (mol/L) | [1.2](lessons/01-02-step-growth-polymerization.md) |
| $r$ | stoichiometric ratio, deficient groups over excess groups; **always** $\le 1$ | [1.3](lessons/01-03-carothers-equation.md) |
| $f_{\text{avg}}$, $p_c$ | average functionality (groups per molecule) and the conversion at which it gels | [1.3](lessons/01-03-carothers-equation.md) |
| $[M]$, $[I]$, $[M^\bullet]$ | monomer, initiator, and total live-radical concentrations | [1.4](lessons/01-04-radical-polymerization.md) |
| $k_d,\,k_p,\,k_t,\,k_{tr}$ | rate constants: initiator decomposition, propagation, termination, transfer | [1.4](lessons/01-04-radical-polymerization.md) |
| $f$ (in $R_i$) | initiator **efficiency** — fraction of radicals that escape the solvent cage | [1.4](lessons/01-04-radical-polymerization.md) |
| $R_i,\,R_p,\,R_t$ | rates of initiation, propagation, termination (mol L⁻¹ s⁻¹) | [1.4](lessons/01-04-radical-polymerization.md) |
| $\nu$ (Module 1) | kinetic chain length — monomers added per radical before it dies | [1.4](lessons/01-04-radical-polymerization.md) |
| $C_S$ | chain-transfer constant $k_{tr}/k_p$ | [1.4](lessons/01-04-radical-polymerization.md) |
| $r_1,\,r_2$ | reactivity ratios $k_{11}/k_{12}$ and $k_{22}/k_{21}$ — each end's taste for its own kind | [1.6](lessons/01-06-copolymers-reactivity-ratios.md) |
| $f_1$, $F_1$ | mole fraction of monomer 1 in the **feed** and in the chain being made **right now** | [1.6](lessons/01-06-copolymers-reactivity-ratios.md) |
| $M_n$, $M_w$, $M_v$ | number-, weight-, and viscosity-average molar mass (g/mol) | [2.1](lessons/02-01-molecular-weight-averages-dispersity.md) |
| $Đ$ | dispersity $M_w/M_n$ — the normalized width of the chain-length distribution | [2.1](lessons/02-01-molecular-weight-averages-dispersity.md) |
| $w_i$, $N_i$ | weight fraction and chain count (or moles) of the species of mass $M_i$ | [2.1](lessons/02-01-molecular-weight-averages-dispersity.md) |
| $\Pi$, $A_2$ | osmotic pressure and the second virial coefficient (solvent-quality slope) | [2.2](lessons/02-02-measuring-molecular-weight.md) |
| $[\eta]$ | intrinsic viscosity (mL/g) — a limiting *slope*, not a viscosity | [2.2](lessons/02-02-measuring-molecular-weight.md) |
| $K,\,a$ | Mark–Houwink constants; specific to polymer **+ solvent + temperature** | [2.2](lessons/02-02-measuring-molecular-weight.md) |
| $N$ | number of segments (Kuhn units, or lattice sites) per chain | [2.3](lessons/02-03-random-coil-end-to-end-distance.md) |
| $b$ | segment (Kuhn) length | [2.3](lessons/02-03-random-coil-end-to-end-distance.md) |
| $\mathbf R$, $R_{\text{rms}}$, $R^*$ | end-to-end vector, its RMS length, and the most-probable end-to-end distance | [2.3](lessons/02-03-random-coil-end-to-end-distance.md) |
| $L$ | contour length $Nb$ — the chain pulled straight | [2.3](lessons/02-03-random-coil-end-to-end-distance.md) |
| $R_g$ | radius of gyration — RMS distance of segments from the coil's own center | [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md) |
| $C_\infty$, $l_p$ | characteristic ratio and persistence length — how locally stiff the backbone is | [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md) |
| $v$ | excluded volume per segment — the space one segment forbids to others | [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md) |
| $\nu$ (Module 2 onward) | **Flory exponent** in $R \sim N^{\nu}$ (a different $\nu$ from kinetic chain length) | [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md) |
| $T_g$ | glass-transition temperature — kinetic freezing of segmental motion | [3.1](lessons/03-01-glass-transition.md) |
| $v_f$ | free volume — the empty pockets a segment needs to hop into | [3.1](lessons/03-01-glass-transition.md) |
| $T_m$, $T_m^0$ | melting point of a real lamella, and of a perfect infinitely thick crystal | [3.2](lessons/03-02-crystallinity-melting.md) |
| $x_c$, $\phi_c$ (Module 3) | **mass** and **volume** fraction crystalline | [3.2](lessons/03-02-crystallinity-melting.md) |
| $\rho_a$, $\rho_c$ | fully amorphous and fully crystalline densities | [3.2](lessons/03-02-crystallinity-melting.md) |
| $\Delta H_f$, $\sigma_e$, $l$ | enthalpy of fusion, fold-surface free energy, lamellar thickness | [3.2](lessons/03-02-crystallinity-melting.md) |
| $X(t)$, $n$ | fraction crystallized by time $t$, and the Avrami exponent | [3.3](lessons/03-03-semicrystalline-morphology.md) |
| $\nu_c$, $M_c$ | network-strand number density (m⁻³) and molar mass between crosslinks | [3.4](lessons/03-04-rubber-elasticity-entropic-spring.md) |
| $G$, $\lambda$ | shear modulus (Pa) and uniaxial stretch ratio | [3.4](lessons/03-04-rubber-elasticity-entropic-spring.md) |
| $\phi$ | polymer **volume fraction** (fraction of lattice sites the chains occupy) | [4.1](lessons/04-01-polymer-solutions-flory-huggins.md) |
| $\chi$ | Flory–Huggins interaction parameter — the cost of a polymer–solvent contact | [4.1](lessons/04-01-polymer-solutions-flory-huggins.md) |
| $\delta$ | Hildebrand solubility parameter $\sqrt{E_{coh}/V}$ (MPa$^{1/2}$) — self-stickiness | [4.1](lessons/04-01-polymer-solutions-flory-huggins.md) |
| $\chi_c$, $\phi_c$ (Module 4) | **critical** interaction parameter and **critical** composition for demixing | [4.2](lessons/04-02-solvent-quality-theta-phase-separation.md) |
| $\chi_s(\phi)$ | spinodal — the $\chi$ at which $\Delta G_{mix}$ turns concave at composition $\phi$ | [4.2](lessons/04-02-solvent-quality-theta-phase-separation.md) |
| $\sigma$, $\varepsilon$, $\dot\varepsilon$ | stress (Pa), strain (dimensionless), strain rate (s⁻¹) | [4.3](lessons/04-03-viscoelasticity-rheology.md) |
| $E$, $\eta$, $\tau$ | elastic modulus, viscosity (Pa·s), and relaxation time $\eta/E$ | [4.3](lessons/04-03-viscoelasticity-rheology.md) |
| $\mathrm{De}$ | Deborah number $\tau/t_{\text{obs}}$ — solid if large, liquid if small | [4.3](lessons/04-03-viscoelasticity-rheology.md) |
| $a_T$, $C_1$, $C_2$ | WLF horizontal shift factor and its two empirical constants | [4.3](lessons/04-03-viscoelasticity-rheology.md) |
| $M_e$ | entanglement molar mass — above it, chains thread and the melt thickens steeply | [4.3](lessons/04-03-viscoelasticity-rheology.md) |
| $\chi N$ | segregation strength of a block copolymer — decides whether it orders at all | [4.4](lessons/04-04-self-assembly-functional-polymers.md) |
| $f$ (Module 4) | **volume fraction of the minority block** (a third meaning of $f$ — decides the shape) | [4.4](lessons/04-04-self-assembly-functional-polymers.md) |

## Definitions

### Repeat unit

The group that actually recurs along the finished chain. For addition polymers it
has the same atoms as the monomer; for **condensation** polymers a small molecule
(usually water) was expelled at each link, so the repeat unit is *lighter* than the
monomers that made it.

*Introduced:* [1.1](lessons/01-01-what-is-a-polymer-classification.md)

### Degree of polymerization

How many repeat units long the average chain is — the mass of a whole chain divided
by the mass of one link.

$$X_n = \frac{M_n}{M_0}$$

*Introduced:* [1.1](lessons/01-01-what-is-a-polymer-classification.md)

### Thermoplastic vs. thermoset

A statement about **crosslinks**, not about chemistry. Linear or branched chains are
separate molecules that slide when heated (thermoplastic, remeltable, recyclable);
a covalently crosslinked network is one giant molecule that cannot flow
(thermoset — it degrades before it melts). The *same* polyisoprene is a
thermoplastic raw and a thermoset once vulcanized.

*Introduced:* [1.1](lessons/01-01-what-is-a-polymer-classification.md)

### Step-growth polymerization

Any two species with functional groups can react, so monomer vanishes early but
long chains appear only at the very end. Almost always condensation chemistry
(esterification, amidation).

$$\ce{-COOH + HO- -> -CO-O- + H2O}\qquad \ce{-COOH + H2N- -> -CO-NH- + H2O}$$

*Introduced:* [1.2](lessons/01-02-step-growth-polymerization.md)

### Conversion

The fraction of one functional group that has already reacted — the single knob in
the Carothers equation.

$$p \equiv \frac{c_0 - c}{c_0}, \qquad c = c_0(1-p)$$

*Introduced:* [1.2](lessons/01-02-step-growth-polymerization.md)

### Equal reactivity principle

A `-COOH` on a 500-unit chain reacts with the same rate constant as one on a free
monomer: reactivity is a *local* property of the functional group. This is the
assumption that collapses an infinite set of chain-length-resolved rate equations
into one second-order equation in the total group concentration.

*Introduced:* [1.2](lessons/01-02-step-growth-polymerization.md)

### Gel point

The conversion at which branching first knits everything into one spanning network
— the boundary between a thermoplastic and a thermoset.

$$p_c = \frac{2}{f_{\text{avg}}}, \qquad f_{\text{avg}} = \frac{\text{total functional groups}}{\text{total molecules}}$$

Carothers' $p_c$ tracks where the *number*-average diverges and always
**overestimates** the real gel point (which the weight-average, via Flory–Stockmayer,
reaches sooner).

*Introduced:* [1.3](lessons/01-03-carothers-equation.md)

### Kinetic chain length

How many monomers one radical adds before it dies — monomers consumed per chain
started.

$$\nu = \frac{R_p}{R_i} = \frac{k_p[M]}{2\left(f k_d k_t [I]\right)^{1/2}} \;\propto\; \frac{[M]}{[I]^{1/2}}$$

The dead chain is $X_n = 2\nu$ if termination is by **combination**, $X_n = \nu$ if by
**disproportionation**.

*Introduced:* [1.4](lessons/01-04-radical-polymerization.md)

### Chain transfer

A growing radical snatches an atom (usually H) from another molecule: this chain
dies, but the radical is *relocated*, not destroyed. So molecular weight drops while
the rate barely moves — which is exactly why transfer agents are the industrial MW
dial.

*Introduced:* [1.4](lessons/01-04-radical-polymerization.md)

### Living polymerization

Chain-growth with fast complete initiation and **no inherent termination or
transfer** — the ends stay reactive until you quench them. Every initiator becomes
exactly one chain, so length is set by the charge ratio and the spread is
Poisson-narrow.

$$X_n = \frac{[M]_0}{[I]_0}, \qquad Đ = 1 + \frac{X_n}{(X_n+1)^2} \approx 1 + \frac{1}{X_n}$$

*Introduced:* [1.5](lessons/01-05-ionic-coordination-polymerization.md)

### Tacticity

The pattern of 3-D configuration down the backbone — **isotactic** (all side groups
one side), **syndiotactic** (strictly alternating), **atactic** (random). Not a
difference in which atoms are bonded: isotactic and atactic polypropylene have the
same formula and opposite properties. Stereoregularity is the *precondition* for
crystallizing at all.

*Introduced:* [1.5](lessons/01-05-ionic-coordination-polymerization.md)

### Reactivity ratios

Two numbers that say how much each kind of chain end prefers its own monomer over
the other.

$$r_1 = \frac{k_{11}}{k_{12}}, \qquad r_2 = \frac{k_{22}}{k_{21}}$$

*Introduced:* [1.6](lessons/01-06-copolymers-reactivity-ratios.md)

### Azeotropic composition

The one feed at which the copolymer comes out matching the feed and therefore never
drifts. It exists only when $r_1$ and $r_2$ sit on the **same** side of 1.

$$f_1^{\text{az}} = \frac{1 - r_2}{2 - r_1 - r_2}$$

*Introduced:* [1.6](lessons/01-06-copolymers-reactivity-ratios.md)

### Number-average molar mass

Throw a dart at a random *chain* and ask its mass: total mass over total number of
chains. Dominated by the crowd of short chains.

$$M_n = \frac{\sum_i N_i M_i}{\sum_i N_i}, \qquad \frac{1}{M_n} = \sum_i \frac{w_i}{M_i}$$

*Introduced:* [2.1](lessons/02-01-molecular-weight-averages-dispersity.md)

### Weight-average molar mass

Throw a dart at a random *gram* and ask which chain it belongs to. The heavy chains
hoard the mass, so $M_w \ge M_n$ always.

$$M_w = \frac{\sum_i N_i M_i^2}{\sum_i N_i M_i} = \sum_i w_i M_i$$

*Introduced:* [2.1](lessons/02-01-molecular-weight-averages-dispersity.md)

### Dispersity

The ratio of the two averages — literally the normalized width of the chain-length
distribution, and never below 1.

$$Đ = \frac{M_w}{M_n} = \frac{\langle M^2\rangle}{\langle M\rangle^2} = 1 + \frac{\sigma^2}{M_n^2} \;\ge\; 1$$

*Introduced:* [2.1](lessons/02-01-molecular-weight-averages-dispersity.md)

### Most-probable distribution

The chain-length distribution ideal step-growth always produces: a chain of $x$ units
exists whenever $x-1$ links formed and the next did not — a geometric distribution.

$$n_x = (1-p)\,p^{\,x-1}, \qquad X_n = \frac{1}{1-p}, \qquad X_w = \frac{1+p}{1-p}, \qquad Đ = 1+p \xrightarrow{p\to1} 2$$

*Introduced:* [2.1](lessons/02-01-molecular-weight-averages-dispersity.md)

### Intrinsic viscosity

The fractional thickening a solute causes per unit concentration, extrapolated to
infinite dilution — a measure of the volume one gram of coils pervades, in mL/g. It
is a limiting **slope**, not a viscosity.

$$[\eta] = \lim_{c\to 0}\frac{\eta - \eta_s}{\eta_s\,c}$$

*Introduced:* [2.2](lessons/02-02-measuring-molecular-weight.md)

### Hydrodynamic volume

The size a coil actually occupies in solution — what a GPC column separates by, and
therefore *not* mass. The product $[\eta]M$ is proportional to it, which is what makes
universal calibration work.

*Introduced:* [2.2](lessons/02-02-measuring-molecular-weight.md)

### Freely jointed chain

The workhorse idealization: $N$ rigid segments of length $b$, directions independent
and uniformly random, segments free to overlap (a "phantom" chain). It is literally a
random walk.

$$\mathbf R = \sum_{i=1}^{N}\mathbf b_i, \qquad \langle\mathbf R\rangle = \mathbf 0$$

*Introduced:* [2.3](lessons/02-03-random-coil-end-to-end-distance.md)

### End-to-end distance

The size of the coil, measured from the first atom to the last. The *vector* averages
to zero by symmetry; the *distance* does not, so always quote the RMS value.

$$\langle R^2\rangle = Nb^2, \qquad R_{\text{rms}} = \sqrt N\,b$$

*Introduced:* [2.3](lessons/02-03-random-coil-end-to-end-distance.md)

### Contour length

The chain pulled dead straight, $L = Nb$. The coil spans only the fraction
$R_{\text{rms}}/L = 1/\sqrt N$ of it — a hundredfold gap for a typical chain.

*Introduced:* [2.3](lessons/02-03-random-coil-end-to-end-distance.md)

### Radius of gyration

The RMS distance of the segments from the coil's own center of mass — the coil's
physical radius, and the size that light scattering actually reports.

$$R_g^2 \equiv \frac{1}{N}\sum_{i=1}^{N}\big\langle |\mathbf r_i - \mathbf r_{\mathrm{cm}}|^2\big\rangle = \frac{Nb^2}{6} \quad(\text{ideal chain}), \qquad R_g = \frac{R_{\text{rms}}}{\sqrt6}$$

The $\sqrt6$ relation holds **only** for an ideal (Gaussian) chain.

*Introduced:* [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md)

### Kuhn segment

Coarse-graining that hides local stiffness: any real chain can be re-described as an
ideal chain of $N_K$ links of length $b_K = 2l_p$ chosen so $\langle R^2\rangle = N_K b_K^2$.
This changes the **ruler**, never the exponent.

$$C_\infty \equiv \frac{\langle R^2\rangle}{n\,\ell^2} > 1 \quad (n \text{ real backbone bonds of length } \ell)$$

*Introduced:* [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md)

### Excluded volume

The volume one segment forbids to the others. Self-avoidance is a net repulsion that
**swells** the coil and changes the exponent itself, from $1/2$ to $3/5$ — a change of
physics, not of ruler.

*Introduced:* [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md)

### Theta condition

The knife-edge where monomer–monomer attraction exactly cancels excluded-volume
repulsion, so the effective $v\to0$ and a real chain behaves *ideally*. Equivalently
$\chi = \tfrac12$, or $A_2 = 0$. It is not a weak solvent — it is a perfectly
balanced one.

*Introduced:* [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md), pinned to $\chi$ in [4.2](lessons/04-02-solvent-quality-theta-phase-separation.md)

### Glass transition temperature

The temperature where cooperative **segmental motion** gets too slow to keep up with
your experiment, freezing a rubbery amorphous polymer into a rigid (still
disordered) glass. It is **kinetic and operationally defined** — cool faster and $T_g$
comes out higher, by a few kelvin per decade of rate.

*Introduced:* [3.1](lessons/03-01-glass-transition.md)

### Free volume

The empty pockets a segment needs to hop into: $v = v_{\text{occ}} + v_f$. Below $T_g$,
$v_f$ is frozen at a small locked-in value — this is the picture behind both the Fox
equation and plasticization.

*Introduced:* [3.1](lessons/03-01-glass-transition.md)

### Melting temperature

Destruction of *crystalline* order — a genuine first-order transition with latent
heat $\Delta H_f$, unlike $T_g$.

$$T_m^0 = \frac{\Delta H_f}{\Delta S_f}$$

$T_m^0$ is the ideal value for a perfect, infinitely thick crystal; real lamellae melt
below it.

*Introduced:* [3.2](lessons/03-02-crystallinity-melting.md)

### Degree of crystallinity

A number between 0 and about 0.8, never 1: a bulk polymer is **always**
semicrystalline — folded-chain lamellae embedded in an amorphous matrix.

*Introduced:* [3.2](lessons/03-02-crystallinity-melting.md)

### Lamella

A chain-folded crystalline plate, only ~10–20 nm thick (the fold length) but far
wider — the chain dives through, folds back at the surface, and dives again. Those
two fold surfaces are what Gibbs–Thomson taxes.

*Introduced:* [3.2](lessons/03-02-crystallinity-melting.md), morphology in [3.3](lessons/03-03-semicrystalline-morphology.md)

### Spherulite

A roughly spherical **polycrystalline** aggregate of lamellae radiating from one
nucleus, microns to millimeters across, with amorphous material between the arms.
Between crossed polarizers it shows the tell-tale dark **Maltese cross**. Not a single
crystal.

*Introduced:* [3.3](lessons/03-03-semicrystalline-morphology.md)

### Tie chain

A chain long enough to leave one lamella, cross the amorphous gap, and re-enter the
next — the rivet that lets crystals share load. Tie-chain density rises with molar
mass and is what makes a semicrystalline polymer **tough** at fixed crystallinity.

*Introduced:* [3.3](lessons/03-03-semicrystalline-morphology.md)

### Entropic spring

A stretched chain pulls back not because bonds are strained ($U$ is independent of
shape) but because stretching throws away conformations. The restoring force is
$-T\,\partial S/\partial R$, so its "spring constant" is made of temperature.

$$S(R) = S_0 - \frac{3k_B R^2}{2Nb^2}, \qquad f = \frac{3k_BT}{Nb^2}\,R$$

*Introduced:* [3.4](lessons/03-04-rubber-elasticity-entropic-spring.md)

### Flory–Huggins parameter

One dimensionless number bundling the energy cost of a polymer–solvent contact:
$\chi > 0$ means unlike contacts are unfavorable, $\chi = 0$ means indifference,
$\chi < 0$ means the chain actively likes the solvent. In practice it also absorbs a
small entropic offset and usually varies as $1/T$.

*Introduced:* [4.1](lessons/04-01-polymer-solutions-flory-huggins.md)

### Binodal and spinodal

Two different boundaries on the same free-energy curve $f(\phi)$. The **binodal** is the
true coexistence curve — the two compositions sharing one **common tangent** (equal
chemical potentials). The **spinodal** is the inner curve where $f''(\phi) = 0$. Between
them the solution is *metastable* (needs a nucleus); inside the spinodal it demixes
spontaneously with no barrier.

*Introduced:* [4.2](lessons/04-02-solvent-quality-theta-phase-separation.md)

### Viscoelasticity

Being a spring and a liquid at once, with which face you see decided by timescale.
Probe it two ways: fix the strain and watch stress bleed away (**stress relaxation**),
or fix the stress and watch strain creep upward (**creep**).

*Introduced:* [4.3](lessons/04-03-viscoelasticity-rheology.md)

### Deborah number

Solid or liquid is not intrinsic — it is a ratio of the material's relaxation time to
your observation time. $\mathrm{De}\gg1$ reads as an elastic solid, $\mathrm{De}\ll1$ as
a flowing liquid.

$$\mathrm{De} = \frac{\tau}{t_{\text{obs}}}$$

*Introduced:* [4.3](lessons/04-03-viscoelasticity-rheology.md)

### Reptation

Above the entanglement molar mass $M_e$ a chain cannot cross its neighbors; it is
trapped in a virtual **tube** and can only escape by snaking lengthwise out of it, end
first. The disengagement time grows as $M^3$, which is where the steep viscosity law
comes from.

*Introduced:* [4.3](lessons/04-03-viscoelasticity-rheology.md)

### Microphase separation

Two incompatible blocks tied by a covalent bond still try to separate but can only
get one chain-length apart (~10–50 nm), so the melt fills with a regular
nanopattern. **Composition $f$ picks the shape; $\chi N$ decides whether there is
one.**

*Introduced:* [4.4](lessons/04-04-self-assembly-functional-polymers.md)

### LCST

A **lower** critical solution temperature: soluble when cold, phase-separating when
**warm** — the inverse of ordinary solubility, and entropy-driven (heating releases
the ordered hydration cage). PNIPAM's is near 32 °C.

$$T_{\text{LCST}} = \frac{\Delta H_{\text{mix}}}{\Delta S_{\text{mix}}} \quad(\text{both negative})$$

*Introduced:* [4.4](lessons/04-04-self-assembly-functional-polymers.md)

## Formulas and rules

### The molecular-weight averages, side by side

Same sample, four honest numbers. What separates them is **what each weights by**.

| Average | Formula | Weights each chain by | What reads it out | Feels |
|---|---|---|---|---|
| $M_n$ | $\dfrac{\sum N_iM_i}{\sum N_i}$ | its count (1 vote each) | membrane osmometry, end-group analysis (**absolute**) | the crowd of short chains |
| $M_v$ | $[\eta] = K M_v^{\,a}$ | its pervaded volume | dilute-solution viscometry (**relative**) | between $M_n$ and $M_w$ |
| $M_w$ | $\dfrac{\sum N_iM_i^2}{\sum N_iM_i}$ | its mass | static light scattering / Zimm plot (**absolute**) | where the mass lives |
| $M_z$ | $\dfrac{\sum N_iM_i^3}{\sum N_iM_i^2}$ | mass × mass | sedimentation equilibrium | only the very longest chains |
| Đ | $M_w/M_n$ | — | GPC/SEC gives the whole curve, hence all of them | the width itself |

$$M_n \le M_v \le M_w \le M_z, \qquad M_v = M_w \text{ only if } a = 1$$

($M_z$ is the standard next moment up; the lessons stop at $M_w$, but it is what a
high-$M$ tail inflates most, so it is here for completeness.)

Two mixture shortcuts worth having ready: for an **equimolar** blend, $M_n$ is the plain
mean; for an **equal-weight** blend, $M_w$ is the plain mean and $1/M_n$ is the mean of
the reciprocals. A high-$M$ tail barely moves $M_n$ and strongly inflates $M_w$, so Đ
rises; a low-$M$ tail (leftover monomer, oligomers) craters $M_n$ and also inflates Đ.

*From* [2.1](lessons/02-01-molecular-weight-averages-dispersity.md) *and* [2.2](lessons/02-02-measuring-molecular-weight.md)

### Which technique gives which average

| Technique | Senses | Reports | Absolute? |
|---|---|---|---|
| Membrane osmometry, $\Pi/c = RT\left(\frac{1}{M_n} + A_2c + \cdots\right)$ | colligative — **counts** molecules | $M_n$ (intercept as $c\to0$) | yes |
| Static light scattering, $\frac{Kc}{R_\theta} = \frac{1}{M_w}\left(1 + \tfrac13\langle R_g^2\rangle q^2\right) + 2A_2c$ | mass | $M_w$, plus $R_g$ (angular slope) and $A_2$ (concentration slope) | yes |
| Dilute-solution viscometry, $[\eta] = K M_v^{\,a}$ | pervaded volume | $M_v$ | no — needs $K,a$ |
| GPC / SEC | **hydrodynamic volume** (large elutes early) | the whole distribution | no — needs calibration |

Universal calibration rescues GPC from "polystyrene-equivalent" numbers, because
$[\eta]M$ is proportional to hydrodynamic volume:

$$[\eta]_1 M_1 = [\eta]_2 M_2 \quad\text{(species co-eluting at the same volume)}$$

The Mark–Houwink exponent $a$ is a direct readout of coil expansion:

| $a$ | Coil state |
|---|---|
| $\to 0$ | compact sphere |
| $\approx 0.5$ | theta solvent — unperturbed ideal coil |
| $\approx 0.8$ | good solvent — swollen coil |
| up to $\approx 2$ | rigid rod |

*From* [2.2](lessons/02-02-measuring-molecular-weight.md)

### Step growth vs. chain growth — the two mechanisms side by side

| | **Step-growth** | **Chain-growth (radical)** |
|---|---|---|
| Who may react | any two species carrying groups | only a live active centre + monomer |
| Monomer fate | consumed **fastest**, early | consumed steadily throughout |
| MW vs. conversion | $X_n = \dfrac{1}{1-p}$ — flat, then a wall at $p\to1$ | **high from ~1% conversion, then flat** |
| Long chains at low $p$? | no — oligomer soup | yes — finished polymer plus untouched monomer |
| More conversion buys | longer chains | *more* chains, same length |
| MW knobs | conversion $p$, stoichiometry $r$, chain stoppers | $[M]/[I]^{1/2}$, chain-transfer agents |
| Rate law | $\dfrac{1}{1-p} = 1 + c_0 k t$ (catalyzed, 2nd order) | $R_p = k_p[M]\left(\dfrac{fk_d[I]}{k_t}\right)^{1/2}$ |
| Growth in time | $X_n \propto t$ (or $\sqrt t$ self-catalyzed) | each chain finished in ~1 s |
| Typical Đ | $1+p \to 2$ (most probable) | 1.5–2; $\approx 1 + 1/X_n$ if **living** |
| Byproduct | usually condensation (water) | none (addition) |
| Typical products | PET, nylon, polycarbonate | PE, PVC, PS, acrylics |

*From* [1.2](lessons/01-02-step-growth-polymerization.md), [1.3](lessons/01-03-carothers-equation.md), [1.4](lessons/01-04-radical-polymerization.md)

### Step-growth: Carothers, imbalance, stoppers, gelation

$$X_n = \frac{1}{1-p} \quad (r=1) \qquad\qquad X_n = \frac{1+r}{1+r-2rp} \quad\text{(general)}$$

$$X_n = \frac{1+r}{1-r} \quad (p = 1) \qquad\qquad M_n = X_n M_0$$

A monofunctional chain stopper counts **twice** (it removes a growth site without
adding one):

$$r = \frac{N_A}{N_B + 2N_{B'}}$$

Branching: $X_n = \dfrac{2}{2 - p f_{\text{avg}}}$, diverging at $p_c = 2/f_{\text{avg}}$.
Kinetics: catalyzed $\dfrac{1}{1-p} = 1 + c_0kt$; self-catalyzed (third order)
$\dfrac{1}{(1-p)^2} = 1 + 2c_0^2kt$, so $X_n \propto \sqrt t$ — slower still.

Feel for the numbers: $p = 0.5 \Rightarrow X_n = 2$; $p = 0.9 \Rightarrow 10$;
$p = 0.99 \Rightarrow 100$; $r = 0.99$ caps you at 199; $r = 0.95$ caps you at 39.

*From* [1.2](lessons/01-02-step-growth-polymerization.md) *and* [1.3](lessons/01-03-carothers-equation.md)

### Radical chain-growth kinetics

$$R_i = 2fk_d[I], \qquad R_p = k_p[M][M^\bullet], \qquad R_t = 2k_t[M^\bullet]^2$$

Steady state ($R_i = R_t$) gives the live-radical population and the signature
half-order law:

$$[M^\bullet] = \left(\frac{R_i}{2k_t}\right)^{1/2} = \left(\frac{fk_d[I]}{k_t}\right)^{1/2}, \qquad R_p = k_p[M]\left(\frac{fk_d[I]}{k_t}\right)^{1/2}$$

$$R_p \propto [I]^{1/2}, \qquad \nu \propto [I]^{-1/2} \quad\text{— faster and shorter, always together}$$

Mayo equation for transfer-limited molecular weight:

$$\frac{1}{X_n} = \frac{1}{X_{n,0}} + C_S\frac{[S]}{[M]}, \qquad C_S = \frac{k_{tr}}{k_p}$$

Typical scale: $[M^\bullet]\sim10^{-8}$ mol/L — about one live chain per hundred million
monomers.

*From* [1.4](lessons/01-04-radical-polymerization.md)

### Choosing a chain-growth mechanism

| Mechanism | Active centre | What you get | Cost |
|---|---|---|---|
| Radical | free radical | cheap, robust, tolerant; Đ ≈ 1.5–2 | no control of length or stereochemistry |
| Anionic (**living**) | carbanion | $X_n = [M]_0/[I]_0$, Đ ≈ 1.0; true **block** copolymers | fussy, needs clean monomers |
| Cationic | carbocation | reaches electron-rich monomers (isobutylene) | rampant transfer → broad, capped MW (run cold) |
| Coordination (Ziegler–Natta, metallocene) | metal centre | **tacticity** → crystallizable plastics | catalyst-specific |

*From* [1.5](lessons/01-05-ionic-coordination-polymerization.md)

### Copolymers: composition and sequence

$$F_1 = \frac{r_1 f_1^2 + f_1 f_2}{r_1 f_1^2 + 2f_1f_2 + r_2f_2^2} \qquad \text{(Mayo–Lewis, instantaneous)}$$

Ideal shortcut when $r_1r_2 = 1$: $F_1 = \dfrac{r_1f_1}{r_1f_1 + f_2}$.

| $r_1 r_2$ | Sequence |
|---|---|
| $\to 0$ (both $r$ small) | strictly alternating, …121212… |
| $= 1$ | random / ideal |
| $> 1$ (both $r>1$) | blocky runs, tending toward two homopolymers |

Read the individual ratios, not just the product — $r_1 = 0.02$ with $r_2 = 55$ gives
$r_1r_2 \approx 1$ yet both ends want monomer 2, so composition drifts violently.

*From* [1.6](lessons/01-06-copolymers-reactivity-ratios.md)

### Chain statistics and the size exponents

$$\langle R^2\rangle = Nb^2, \qquad R_{\text{rms}} = \sqrt N\,b, \qquad L = Nb, \qquad \frac{R_{\text{rms}}}{L} = \frac{1}{\sqrt N}$$

$$P(\mathbf R) = \left(\frac{3}{2\pi Nb^2}\right)^{3/2}\exp\!\left(-\frac{3R^2}{2Nb^2}\right), \qquad R^* = b\sqrt{\tfrac{2N}{3}} \approx 0.816\,R_{\text{rms}}$$

Each Cartesian component is an independent 1D Gaussian of variance $Nb^2/3$.

$$R_g^2 = \frac{Nb^2}{6} \ \ (\text{ideal}), \qquad \frac{F(R)}{k_BT} \simeq \frac{R^2}{Nb^2} + v\frac{N^2}{R^3} \ \Rightarrow\ R^5 \simeq v\,b^2N^3$$

| Regime | Flory exponent $\nu$ in $R\sim N^\nu$ | Condition |
|---|---|---|
| Collapsed globule (constant density) | $1/3$ | poor solvent, $\chi > \tfrac12$, $v<0$ |
| Ideal / theta chain | $1/2$ | $\chi = \tfrac12$, $v = 0$ |
| Swollen self-avoiding walk | $3/5$ (exact $\approx 0.588$) | good solvent, $\chi < \tfrac12$, $v>0$ |

Local stiffness rescales but never re-exponents: $\langle R^2\rangle_{\text{real}} = C_\infty n\ell^2$,
so $R_{\text{rms}}$ grows by $\sqrt{C_\infty}$, with $\nu$ untouched at $1/2$.

*From* [2.3](lessons/02-03-random-coil-end-to-end-distance.md) *and* [2.4](lessons/02-04-radius-of-gyration-excluded-volume.md)

### $T_g$ vs. $T_m$ — the thermal vocabulary

| | $T_g$ (glass transition) | $T_m$ (melting) |
|---|---|---|
| Which phase | the **amorphous** fraction | the **crystalline** fraction |
| Nature | kinetic freezing of segmental motion | genuine first-order transition |
| Latent heat | none | yes, $\Delta H_f$ |
| DSC signature | a **step** in $C_p$ | an endothermic **peak** |
| Depends on rate? | **yes** — cool faster, higher $T_g$ | essentially no |
| Also visible as | slope change in specific volume (drop in $\alpha$) | a melting *range*, from the spread of lamellar thicknesses |
| Who has one | every amorphous polymer | only polymers regular enough to crystallize |

Rule of thumb: $T_g \approx \tfrac12$ to $\tfrac23\,T_m$ in kelvin, and always $T_g < T_m$.
A fully amorphous polymer (atactic PS, PMMA) has only $T_g$; a semicrystalline one
(PE, PET) has both.

**What shifts $T_g$** — anything that makes segmental motion harder raises it:

| Raises $T_g$ | Lowers $T_g$ |
|---|---|
| stiff backbone (aromatic rings *in* the chain, double bonds) | flexible backbone (C–O–C ether, Si–O siloxane) |
| bulky side groups (steric hindrance) | small or absent side groups |
| polar side groups / hydrogen bonding | long flexible side chains (internal plasticizer) |
| crosslinking | **plasticizer** — small molecules adding free volume |

$$\text{Fox equation:}\quad \frac{1}{T_g} = \frac{w_1}{T_{g,1}} + \frac{w_2}{T_{g,2}} \qquad (\textbf{kelvin only})$$

Because Fox averages *reciprocals*, the blend $T_g$ always falls **below** the plain
weight average — the low-$T_g$ component pulls harder.

**What shifts $T_m$**: thicker lamellae (slow crystallization, annealing) push $T_m$ up
toward $T_m^0$; comonomers, branches, and irregularity push it down.

*From* [3.1](lessons/03-01-glass-transition.md) *and* [3.2](lessons/03-02-crystallinity-melting.md)

### Crystallinity, lamellae, morphology

$$\phi_c = \frac{\rho - \rho_a}{\rho_c - \rho_a} \ (\text{volume}), \qquad x_c = \frac{\rho_c(\rho-\rho_a)}{\rho\,(\rho_c-\rho_a)} \ (\text{mass}), \qquad x_c = \frac{\rho_c}{\rho}\,\phi_c$$

$$\text{Gibbs–Thomson:}\quad T_m(l) = T_m^0\left(1 - \frac{2\sigma_e}{\Delta H_f\,\rho_c\,l}\right)$$

The 2 counts **both** fold surfaces; the depression scales as $1/l$. Work in SI so the
bracket comes out dimensionless.

$$\text{Avrami:}\quad X(t) = 1 - \exp(-Kt^{\,n}), \qquad t_{1/2} = \left(\frac{\ln 2}{K}\right)^{1/n}$$

with $n$ (typically 2–4) encoding nucleation mode and growth dimensionality.

The three property dials, and which structural feature sets each:

| Property | Set by |
|---|---|
| Stiffness / modulus | **degree of crystallinity** (crystals are the load-bearing phase) |
| Clarity | **spherulite size relative to $\lambda \approx 0.5\ \mu\text{m}$** — sub-wavelength spherulites don't scatter |
| Toughness | **tie-chain density**, which rises with molar mass |

Undercooling is the master lever: cool slowly → few nuclei → few big spherulites,
high crystallinity (hazy, stiff); quench → many nuclei → many tiny spherulites,
lower crystallinity (clear, soft). A **nucleating/clarifying agent** decouples the
two: many sub-micron spherulites, high crystallinity, still clear.

*From* [3.2](lessons/03-02-crystallinity-melting.md) *and* [3.3](lessons/03-03-semicrystalline-morphology.md)

### Rubber elasticity

$$f = \frac{\partial A}{\partial R} = -T\frac{\partial S}{\partial R} = \frac{3k_BT}{Nb^2}\,R, \qquad k_{\text{ch}} = \frac{3k_BT}{Nb^2}$$

$$G = \nu_c k_B T, \qquad \nu_c = \frac{\rho N_A}{M_c}, \qquad \sigma = G\left(\lambda - \lambda^{-2}\right)$$

$$\left(\frac{\partial f}{\partial T}\right)_{\!R} = -\left(\frac{\partial S}{\partial R}\right)_{\!T} = \frac{f}{T} \ \Longrightarrow\ f \propto T$$

Consequences worth memorizing: at fixed length, tension and modulus **rise** with $T$;
at fixed load, $R \propto 1/T$, so a loaded band **contracts** on heating; a fast
(adiabatic) stretch **warms** the band. Single-chain forces land at the piconewton
scale. All of it requires $T > T_g$ — below the glass transition there is no entropic
spring. At very small strain, ordinary thermal expansion can reverse the sign — the
**thermoelastic inversion** point, near ~10% strain.

*From* [3.4](lessons/03-04-rubber-elasticity-entropic-spring.md)

### Flory–Huggins solution thermodynamics

$$\frac{\Delta S_{mix}}{k_B} = -\left[\frac{\phi}{N}\ln\phi + (1-\phi)\ln(1-\phi)\right], \qquad \frac{\Delta H_{mix}}{k_BT} = \chi\phi(1-\phi)$$

$$\frac{\Delta G_{mix}}{k_BT} = \frac{\phi}{N}\ln\phi + (1-\phi)\ln(1-\phi) + \chi\,\phi(1-\phi)$$

The whole polymer story is the $1/N$ on the first term: chaining $N$ monomers together
divides their mixing entropy by $N$, so only the *solvent* still gains much entropy
from dissolving.

Estimating $\chi$ from cohesive energy densities ("like dissolves like", quantified):

$$\chi \approx \chi_S + \frac{V_{\text{site}}}{RT}(\delta_p - \delta_s)^2, \qquad \chi_S \approx 0.34, \qquad \delta = \sqrt{E_{coh}/V}$$

Unit convenience: 1 MPa = 1 J/cm³, so (MPa)·(cm³/mol) = J/mol and the bracket
cancels against $RT$.

**Solvent quality**, all one knob:

$$v \approx b^3(1 - 2\chi)$$

| Regime | $\chi$ | Effective $v$ | Coil |
|---|---|---|---|
| Good | $< \tfrac12$ | $>0$, repulsive | swollen, $R\sim N^{3/5}$; $A_2 > 0$ |
| Theta | $= \tfrac12$ | $= 0$ | ideal, $R\sim N^{1/2}$; $A_2 = 0$ |
| Poor | $> \tfrac12$ | $<0$, attractive | globule, $R\sim N^{1/3}$ |

**Phase separation.** Binodal = common tangent; spinodal and critical point:

$$\chi_s(\phi) = \frac12\left(\frac{1}{N\phi} + \frac{1}{1-\phi}\right), \qquad \phi_c = \frac{1}{1+\sqrt N}, \qquad \chi_c = \frac12\left(1 + N^{-1/2}\right)^2$$

As $N\to\infty$: $\chi_c \to \tfrac12$ and $\phi_c \to 0$ — long chains demix at the
faintest solvent dislike and at essentially zero polymer content. Since $\chi$
usually goes as $1/T$, **cooling raises $\chi$** and triggers ordinary (UCST) demixing.

*From* [4.1](lessons/04-01-polymer-solutions-flory-huggins.md) *and* [4.2](lessons/04-02-solvent-quality-theta-phase-separation.md)

### Viscoelasticity, flow, and entanglement

$$\sigma = E\varepsilon \ (\text{spring}), \qquad \sigma = \eta\dot\varepsilon \ (\text{dashpot}), \qquad \tau = \frac{\eta}{E}$$

| Model | Wiring | Test it fits | Response |
|---|---|---|---|
| **Maxwell** | series | stress relaxation (fixed strain) | $\sigma(t) = \sigma_0 e^{-t/\tau}$ — a **liquid** with short-time elasticity |
| **Kelvin–Voigt** | parallel | creep (fixed stress) | $\varepsilon(t) = \frac{\sigma_0}{E}\left(1 - e^{-t/\tau}\right)$ — a **solid** with delayed elasticity |

$$\text{WLF shift:}\quad \log a_T = \frac{-C_1(T-T_0)}{C_2 + (T-T_0)}$$

Time–temperature superposition: heating is equivalent to waiting, so curves at many
temperatures collapse onto one master curve spanning far more decades than any one
experiment.

$$\eta \propto M^{1}\ \ (M < M_e), \qquad \eta \propto M^{3.4}\ \ (M > M_e), \qquad \tau_{\text{rep}} \propto M^3, \quad \eta = G\,\tau_{\text{rep}}$$

Doubling $M$ above $M_e$ thickens the melt about $2^{3.4} \approx 10.6\times$. The plateau
modulus $G$ is the entropic-network modulus $\nu_c k_BT$ of [3.4](lessons/03-04-rubber-elasticity-entropic-spring.md),
with entanglements playing the role of **temporary** crosslinks — which is why a melt
is rubbery briefly and then flows, while a crosslinked rubber is elastic forever.

*From* [4.3](lessons/04-03-viscoelasticity-rheology.md)

### Block-copolymer self-assembly

$$f = \frac{N_Av_A}{N_Av_A + N_Bv_B}, \qquad \chi N \gtrsim 10.5 \ \text{(ODT, symmetric diblock)}, \qquad d \sim b\,N^{2/3}\chi^{1/6}$$

| Minority-block fraction $f$ | Morphology |
|---|---|
| $\lesssim 0.17$ | spheres (BCC) in a matrix |
| $\approx 0.17$–$0.34$ | cylinders |
| narrow window near $0.35$ | gyroid network |
| $\approx 0.5$ | alternating lamellae |

In a **selective** solvent the same logic gives micelles (small core fraction) or
hollow vesicles (large core fraction), driven by the hydrophobic effect. A
crosslinked responsive gel swells where the mixing pull ($\chi < \tfrac12$) beats the
network's entropic retraction $G = \nu k_BT$, and **deswells** once a stimulus pushes
$\chi$ past $\tfrac12$.

*From* [4.4](lessons/04-04-self-assembly-functional-polymers.md)

### Constants and repeat-unit masses

The lessons use these without stating them.

| Constant | Value |
|---|---|
| $k_B$ | $1.38\times10^{-23}\ \mathrm{J/K}$ (so $k_BT = 4.14\times10^{-21}$ J at 300 K) |
| $N_A$ | $6.022\times10^{23}\ \mathrm{mol^{-1}}$ |
| $R = N_Ak_B$ | $8.314\ \mathrm{J\,mol^{-1}K^{-1}}$ |
| Atomic masses | H 1.008, C 12.01, N 14.01, O 16.00, Cl 35.45 g/mol |

| Polymer | Repeat unit | $M_0$ (g/mol) | $T_g$ (K) | $T_m$ (K) |
|---|---|---|---|---|
| Polyethylene (PE) | $\ce{[-CH2-CH2-]_n}$ | 28 | ~150 | ~415 |
| Polypropylene (PP), isotactic | $\ce{[-CH2-CH(CH3)-]_n}$ | 42 | ~260 | ~438 |
| Poly(vinyl chloride) (PVC) | $\ce{[-CH2-CHCl-]_n}$ | 62.5 | 354 | — (mostly amorphous) |
| Polystyrene (PS), atactic | $\ce{[-CH2-CH(C6H5)-]_n}$ | 104 | ~373 | — |
| PMMA | $\ce{[-CH2-C(CH3)(COOCH3)-]_n}$ | 100 | ~378 | — |
| Polycarbonate (PC) | bisphenol-A carbonate | — | ~420 | — |
| PDMS (silicone) | $\ce{[-Si(CH3)2-O-]_n}$ | 74 | ~150 | — |

Useful unit checks: $\mathrm{Pa\cdot s / Pa = s}$; $\mathrm{(J/m^2)}$ against
$\Delta H_f\rho_c l$ in Gibbs–Thomson; $\mathrm{Pa} = \mathrm{J/m^3}$ so
$G/k_BT$ comes out in $\mathrm{m^{-3}}$.

*Used throughout, first in* [1.1](lessons/01-01-what-is-a-polymer-classification.md)

## Assumed, not taught here

This is a Tier 2 course: it leans on organic chemistry, physical chemistry,
statistical mechanics, and probability without re-deriving them.

| Fact | Where it's taught |
|---|---|
| Functional groups and the language of mechanisms | [organic-chemistry 2.1](../organic-chemistry/lessons/02-01-functional-groups-mechanisms-language.md) |
| Esterification / amidation (acyl substitution), the step-growth link chemistry | [organic-chemistry 3.4](../organic-chemistry/lessons/03-04-carboxylic-acids-derivatives-acyl-substitution.md) |
| Alcohols and amines as the nucleophilic partners in condensation | [organic-chemistry 3.6](../organic-chemistry/lessons/03-06-alcohols-ethers-amines.md) |
| Vinyl monomers and addition across a C=C double bond | [organic-chemistry 2.5](../organic-chemistry/lessons/02-05-alkenes-electrophilic-addition.md) |
| Radicals, radical stability, and why some monomers polymerize radically | [organic-chemistry 2.6](../organic-chemistry/lessons/02-06-alkynes-radicals.md) |
| Configuration at a stereocentre — the basis of tacticity | [organic-chemistry 1.5](../organic-chemistry/lessons/01-05-chirality-r-s-system.md) |
| Conjugation and $\pi$ delocalization (conducting polymers, 4.4) | [organic-chemistry 3.1](../organic-chemistry/lessons/03-01-aromaticity-huckel.md) |
| Integrated second- and third-order rate laws | [physical-chemistry 3.2](../physical-chemistry/lessons/03-02-integrated-rate-laws-half-lives.md) |
| The steady-state approximation (used for $[M^\bullet]$ and for Mayo–Lewis) | [physical-chemistry 3.3](../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md) |
| Arrhenius $k = Ae^{-E_a/RT}$ and activation-energy competition | [physical-chemistry 3.4](../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) |
| Colligative properties and osmotic pressure (the basis of $M_n$ osmometry) | [physical-chemistry 2.4](../physical-chemistry/lessons/02-04-colligative-properties.md) |
| $\Delta G = \Delta H - T\Delta S$ and the sign convention for spontaneity | [physical-chemistry 1.3](../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md) |
| Equal chemical potential as the coexistence condition (binodal / common tangent) | [physical-chemistry 1.5](../physical-chemistry/lessons/01-05-chemical-potential.md) |
| First-order transitions and latent heat (behind $T_m^0 = \Delta H_f/\Delta S_f$) | [physical-chemistry 2.1](../physical-chemistry/lessons/02-01-phase-stability-one-component-diagrams.md) |
| The second virial coefficient $A_2$ as a nonideality term | [stat-mech 5.1](../stat-mech/lessons/05-01-virial-van-der-waals.md) |
| Boltzmann entropy $S = k_B\ln\Omega$ (behind the entropic spring) | [stat-mech 1.3](../stat-mech/lessons/01-03-entropy-microcanonical.md) |
| Helmholtz free energy $A = U - TS$ | [stat-mech 2.3](../stat-mech/lessons/02-03-thermodynamic-potentials-legendre.md) |
| Maxwell relations from $dA = -S\,dT + f\,dR$ | [stat-mech 2.4](../stat-mech/lessons/02-04-maxwell-relations-stability.md) |
| Mean-field lattice models (Flory–Huggins is one) | [stat-mech 5.3](../stat-mech/lessons/05-03-ising-mean-field.md) |
| Brownian motion and $\langle r^2\rangle = 6Dt$ — the diffusion twin of $\langle R^2\rangle = Nb^2$ | [stat-mech 6.1](../stat-mech/lessons/06-01-brownian-langevin.md) |
| Moments, mean and variance of a distribution (behind $M_n$, $M_w$, Đ) | [prob-stat-refresher 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| Geometric and Poisson distributions (most-probable vs. living) | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Variances of independent variables add | [prob-stat-refresher 3.2](../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md) |
| Central Limit Theorem — why $P(\mathbf R)$ is Gaussian | [prob-stat-refresher 3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) |
| Stress, strain, and elastic modulus | [materials-science 4.1](../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) |
| Nucleation-and-growth kinetics (Avrami/JMAK, undercooling, grain size) | [materials-science 3.3](../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md) |
| Reading a two-phase region off a free-energy / phase diagram | [materials-science 3.1](../materials-science/lessons/03-01-phase-diagrams-lever-rule.md) |
| Bands, doping, and carriers (conducting polymers, 4.4) | [materials-science 5.1](../materials-science/lessons/05-01-electronic-properties-band-picture.md) |
| Hooke's law and the linear spring | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |

## Pitfalls

### Naming, counting, and repeat units

- The repeat unit weighs the same as the monomer **only** for addition polymers; a condensation repeat unit is lighter by the small molecule expelled, so use the in-chain mass for $M_0$. *([1.1](lessons/01-01-what-is-a-polymer-classification.md), [1.2](lessons/01-02-step-growth-polymerization.md))*
- State whether you are counting **repeat units or monomer residues** — nylon-6,6's repeat unit contains two residues, so "1000 repeat units" means 2000 residues. *([1.1](lessons/01-01-what-is-a-polymer-classification.md))*
- "Thermoset" is read off the **crosslinks**, not off the chemistry: linear polyisoprene is a thermoplastic, vulcanized polyisoprene a thermoset. *([1.1](lessons/01-01-what-is-a-polymer-classification.md))*
- "Condensation" and "step-growth" answer different questions — byproduct vs. mechanism. Polyurethanes are step-growth with no byproduct. *([1.2](lessons/01-02-step-growth-polymerization.md))*

### Conversion, stoichiometry, and gelation

- 90% conversion is not 90% of the way to long chains: $p = 0.9$ gives $X_n = 10$. All the molecular weight lives in the last percent. *([1.2](lessons/01-02-step-growth-polymerization.md))*
- Monomer is consumed **fastest** in step-growth, not last — what runs short late is unreacted groups on long chains. *([1.2](lessons/01-02-step-growth-polymerization.md))*
- Full conversion does **not** mean infinite chains: any imbalance or monofunctional impurity imposes the hard ceiling $X_n = (1+r)/(1-r)$. High MW needs high $p$ **and** near-perfect stoichiometry. *([1.3](lessons/01-03-carothers-equation.md))*
- $r \le 1$ is a stoichiometry ratio fixed before you start; $p$ is a conversion that climbs during the run. Feeding $r>1$ into the formula gives nonsense. *([1.3](lessons/01-03-carothers-equation.md))*
- $p_c = 2/f_{\text{avg}}$ is an **overestimate** of the true gel point, because real gelation is a weight-average (Flory–Stockmayer) event. *([1.3](lessons/01-03-carothers-equation.md))*

### Chain-growth kinetics and control

- Doubling the initiator multiplies the rate by $\sqrt2$, not 2 — radicals are born singly and die in pairs. That half-order exponent is how the mechanism is *proved*. *([1.4](lessons/01-04-radical-polymerization.md))*
- In chain-growth, MW does **not** climb with conversion; higher conversion means more chains of the same length, the mirror image of step-growth. *([1.4](lessons/01-04-radical-polymerization.md))*
- Transfer is not termination: it relocates the radical, cutting MW while leaving the rate essentially unchanged. *([1.4](lessons/01-04-radical-polymerization.md))*
- "Living" means no *inherent* death step — the ends stay reactive until you quench them, not forever. *([1.5](lessons/01-05-ionic-coordination-polymerization.md))*
- More initiator makes chains **shorter** in a living polymerization ($X_n = [M]_0/[I]_0$), and shorter *and* faster in a radical one. *([1.4](lessons/01-04-radical-polymerization.md), [1.5](lessons/01-05-ionic-coordination-polymerization.md))*
- Isotactic and atactic polypropylene are the same compound; only the configuration pattern differs — and that alone decides crystalline plastic vs. amorphous goo. *([1.5](lessons/01-05-ionic-coordination-polymerization.md), [3.2](lessons/03-02-crystallinity-melting.md))*
- $r_1$ is a *ratio* of propagation constants, not a rate — small $r_1$ means "prefers the other monomer", not "slow". *([1.6](lessons/01-06-copolymers-reactivity-ratios.md))*
- Feed ratio equals chain ratio only at $r_1 = r_2 = 1$ or exactly at the azeotrope; otherwise composition **drifts**, and an azeotrope exists only when both ratios lie on the same side of 1. *([1.6](lessons/01-06-copolymers-reactivity-ratios.md))*

### Averages and measurements

- $M_n$ and $M_w$ are structurally different weightings, not two roundings of one number — for a broad sample they differ by 2–3×. Always say which. *([2.1](lessons/02-01-molecular-weight-averages-dispersity.md))*
- A few percent of oligomers or leftover monomer craters $M_n$ (they are numerous) while barely touching $M_w$; a high-$M$ tail does the reverse. Either way Đ rises. *([2.1](lessons/02-01-molecular-weight-averages-dispersity.md), [2.2](lessons/02-02-measuring-molecular-weight.md))*
- $Đ \approx 2$ is not sloppiness — it is the thermodynamically expected value for ideal step-growth. Narrow ($Đ<1.1$) is the living-polymerization signature, not a universal target. *([2.1](lessons/02-01-molecular-weight-averages-dispersity.md))*
- GPC separates by **hydrodynamic volume**, not mass, so raw output is "polystyrene-equivalent" until you apply universal calibration. *([2.2](lessons/02-02-measuring-molecular-weight.md))*
- $[\eta]$ is a limiting slope with units mL/g, not a viscosity; and $K$, $a$ belong to a specific polymer + solvent + temperature, never universal. *([2.2](lessons/02-02-measuring-molecular-weight.md))*

### Chain size and scaling

- Coil size grows as $\sqrt N$, not $N$ — only a fully stretched chain scales as $N$ (that is the contour length). Doubling $M$ grows an ideal coil by just $\sqrt2$. *([2.3](lessons/02-03-random-coil-end-to-end-distance.md))*
- $\langle\mathbf R\rangle = \mathbf 0$ means directions cancel, not that the coil has no size; characterize size with $R_{\text{rms}}$. *([2.3](lessons/02-03-random-coil-end-to-end-distance.md))*
- The Gaussian $P(\mathbf R)$ fails near full extension — it assigns nonzero probability beyond $L$. Real chains stiffen sharply as $R\to L$. *([2.3](lessons/02-03-random-coil-end-to-end-distance.md))*
- $R_g = R_{\text{rms}}/\sqrt6$ holds **only** for an ideal chain; instruments report $R_g$, the freely-jointed formula gives $R_{\text{rms}}$. *([2.4](lessons/02-04-radius-of-gyration-excluded-volume.md))*
- Stiffness and swelling are different corrections: stiffness rescales into Kuhn segments (exponent still $1/2$); excluded volume changes the exponent to $3/5$. *([2.4](lessons/02-04-radius-of-gyration-excluded-volume.md))*
- Solvent quality changes the **exponent**, not $N$ — a better solvent tilts the scaling line, it doesn't move you along it. *([2.4](lessons/02-04-radius-of-gyration-excluded-volume.md))*

### Thermal transitions and morphology

- $T_g$ is not a material constant: it depends on cooling rate and method, so quote it with one ("DSC, 10 K/min"). *([3.1](lessons/03-01-glass-transition.md))*
- A glass is a *frozen liquid*, just as disordered as the melt — order is a separate axis, and that axis is what $T_m$ measures. *([3.1](lessons/03-01-glass-transition.md))*
- The Fox equation takes **kelvin**; reciprocals of Celsius are meaningless. *([3.1](lessons/03-01-glass-transition.md))*
- $T_g$ and $T_m$ are different beasts — kinetic step with no latent heat vs. first-order peak with one — and a semicrystalline polymer has both. Heat faster and only the $T_g$ step moves. *([3.1](lessons/03-01-glass-transition.md), [3.2](lessons/03-02-crystallinity-melting.md))*
- Polymers never reach 100% crystallinity, and a "highly crystalline" sample is still lamellae in an amorphous matrix. *([3.2](lessons/03-02-crystallinity-melting.md))*
- Expect a melting **range**, not a point: a spread of lamellar thicknesses maps through Gibbs–Thomson to a spread of $T_m$. *([3.2](lessons/03-02-crystallinity-melting.md))*
- A spherulite is a radial aggregate of thousands of lamellae, not a single crystal — the Maltese cross is the giveaway. *([3.3](lessons/03-03-semicrystalline-morphology.md))*
- Opacity comes from spherulites **larger than the wavelength of light**, not from crystallinity itself; and toughness and stiffness usually trade off, because raising crystallinity thins the tie-chain network. *([3.3](lessons/03-03-semicrystalline-morphology.md))*

### Entropy, elasticity, and flow

- Stretching an ideal rubber strains no bonds — $U$ is shape-independent and the entire force is $-T\,\partial S/\partial R$. *([3.4](lessons/03-04-rubber-elasticity-entropic-spring.md))*
- Heat **stiffens** rubber and makes a loaded band contract; a metal does the opposite. And none of it works below $T_g$, where the strands are frozen. *([3.4](lessons/03-04-rubber-elasticity-entropic-spring.md))*
- "Solid" and "liquid" are timescale verdicts, not material facts — read $\mathrm{De} = \tau/t_{\text{obs}}$ before deciding. *([4.3](lessons/04-03-viscoelasticity-rheology.md))*
- The clean tube prediction is the exponent 3; the measured 3.4 carries finite-chain corrections. The physics is the near-cubic explosion, not the decimal. *([4.3](lessons/04-03-viscoelasticity-rheology.md))*
- Both Maxwell and Kelvin–Voigt have $\tau = \eta/E$, but one governs stress decay at fixed strain and the other strain growth at fixed stress — duals, not the same measurement. *([4.3](lessons/04-03-viscoelasticity-rheology.md))*

### Solutions and self-assembly

- $\Delta S_{mix} > 0$ does not guarantee mixing: for large $N$ the entropic gain is tiny and a modest $\chi$ overpowers it. *([4.1](lessons/04-01-polymer-solutions-flory-huggins.md))*
- Stability is about **curvature**, not sign — a composition can sit on a negative $\Delta G_{mix}$ and still lie under a common tangent. Look for the hump. *([4.1](lessons/04-01-polymer-solutions-flory-huggins.md))*
- $\chi$ is not a pure energy: it carries a small entropic offset and drifts with $T$ (usually as $1/T$), which is why cooling can precipitate a solution. *([4.1](lessons/04-01-polymer-solutions-flory-huggins.md))*
- $\chi = \tfrac12$ is not "half-dissolved" or weak — it is the perfectly balanced theta point that defines good and poor. *([4.2](lessons/04-02-solvent-quality-theta-phase-separation.md))*
- The critical composition is **not** $\phi_c = \tfrac12$ as for two small molecules; the polymer's missing entropy pushes it to $1/(1+\sqrt N) \to 0$. *([4.2](lessons/04-02-solvent-quality-theta-phase-separation.md))*
- Binodal ≠ spinodal: between them the solution is metastable and needs a nucleus; only inside the spinodal does it demix on its own. *([4.2](lessons/04-02-solvent-quality-theta-phase-separation.md))*
- A diblock cannot macrophase-separate — the tether caps separation at one chain length, and that constraint is what manufactures nanoscale order. *([4.4](lessons/04-04-self-assembly-functional-polymers.md))*
- Large $\chi$ alone is not enough: ordering needs $\chi N \gtrsim 10.5$, so a short enough chain stays a disordered melt however incompatible the blocks. *([4.4](lessons/04-04-self-assembly-functional-polymers.md))*
- LCST behavior does not break thermodynamics — those systems have $\Delta S_{\text{mix}} < 0$, so $-T\Delta S$ wins at high $T$ and warming demixes them. *([4.4](lessons/04-04-self-assembly-functional-polymers.md))*

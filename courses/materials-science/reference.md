# Materials Science & Engineering · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is one claim, run five times: **structure sets property.** A bond's
energy well sets stiffness and melting point; how atoms stack sets density and
which planes slip; the *mistakes* in the stacking — vacancies, dislocations,
boundaries — set strength, diffusion, and failure; a phase diagram plus a cooling
rate sets microstructure; and a band gap sets everything electronic and optical.
This card is where the numbers, the structure tables, and the sign conventions
live so you don't have to hunt them mid-problem. **Units are stated everywhere** —
most errors in this subject are unit errors, not physics errors.

## Notation

Several symbols are reused across modules with different meanings — the collisions
are flagged, because they are the fastest way to get a wrong answer here.

| Symbol | Means | First used |
|---|---|---|
| $U(r)$ | potential energy of two atoms a distance $r$ apart (J or eV) | [1.1](lessons/01-01-bonding-energy-well.md) |
| $r_0$ | equilibrium bond length — bottom of the well, where $dU/dr = 0$ (nm) | [1.1](lessons/01-01-bonding-energy-well.md) |
| $\kappa$ | well curvature $d^2U/dr^2$ at $r_0$ — the bond's spring constant (N/m) | [1.1](lessons/01-01-bonding-energy-well.md) |
| $U_0$ | well depth — the cohesive/bond energy needed to pull atoms apart (eV) | [1.1](lessons/01-01-bonding-energy-well.md) |
| $R$ | atomic radius, hard-sphere model (nm) — **not** the gas constant | [1.2](lessons/01-02-crystal-structures-unit-cells.md) |
| $a$ | lattice parameter, the cube edge (nm) — **also** crack half-length in [4.4](lessons/04-04-failure-fracture-fatigue-creep.md) | [1.2](lessons/01-02-crystal-structures-unit-cells.md) |
| $n$ | atoms per unit cell (pure count) — **also** carrier density in [5.1](lessons/05-01-electronic-properties-band-picture.md), creep stress exponent in [4.4](lessons/04-04-failure-fracture-fatigue-creep.md) | [1.2](lessons/01-02-crystal-structures-unit-cells.md) |
| CN | coordination number — how many nearest neighbours each atom touches | [1.2](lessons/01-02-crystal-structures-unit-cells.md) |
| APF | atomic packing factor — fraction of cell volume filled by spheres | [1.2](lessons/01-02-crystal-structures-unit-cells.md) |
| $A$ | atomic mass (g/mol) — **also** original cross-section $A_0$ in [4.1](lessons/04-01-elastic-behavior-stress-strain.md) | [1.2](lessons/01-02-crystal-structures-unit-cells.md) |
| $V_c$ | unit-cell volume (cm³ when feeding the density formula) | [1.2](lessons/01-02-crystal-structures-unit-cells.md) |
| $[uvw]$, $\langle uvw\rangle$ | a crystallographic **direction**, and its symmetry-equivalent family | [1.3](lessons/01-03-miller-indices-directions-planes.md) |
| $(hkl)$, $\{hkl\}$ | a crystallographic **plane**, and its symmetry-equivalent family | [1.3](lessons/01-03-miller-indices-directions-planes.md) |
| $\bar{1}$ | a barred index — a negative one, the crystallographer's minus sign | [1.3](lessons/01-03-miller-indices-directions-planes.md) |
| $d_{hkl}$ | interplanar spacing — perpendicular gap between adjacent $(hkl)$ planes (nm) | [1.3](lessons/01-03-miller-indices-directions-planes.md) |
| LD, PD | linear density (atoms/nm) and planar density (atoms/nm²) | [1.3](lessons/01-03-miller-indices-directions-planes.md) |
| $d$ | average grain diameter (mm or µm) | [1.4](lessons/01-04-order-disorder-grains.md) |
| $N_v/N$ | equilibrium fraction of lattice sites that are vacant (dimensionless) | [2.1](lessons/02-01-point-defects-solid-solutions.md) |
| $Q_v$ | energy to form one vacancy (eV per vacancy, or J/mol) | [2.1](lessons/02-01-point-defects-solid-solutions.md) |
| $k$ | Boltzmann constant, $8.62\times10^{-5}$ eV/K | [2.1](lessons/02-01-point-defects-solid-solutions.md) |
| $\mathbf b$, $b$ | Burgers vector and its magnitude — the slip step a dislocation carries (nm) | [2.2](lessons/02-02-dislocations-plastic-flow.md) |
| $\boldsymbol\xi$ | dislocation **line** direction (edge: $\perp\mathbf b$; screw: $\parallel\mathbf b$) | [2.2](lessons/02-02-dislocations-plastic-flow.md) |
| $G$ | shear modulus (Pa) | [2.2](lessons/02-02-dislocations-plastic-flow.md) |
| $\gamma_s$, $\gamma_{gb}$ | surface energy and grain-boundary energy (J/m²) | [2.3](lessons/02-03-interfaces-grain-boundaries.md) |
| $\theta$ | misorientation angle between two grains (degrees, radians in formulas) | [2.3](lessons/02-03-interfaces-grain-boundaries.md) |
| $J$ | diffusion flux — amount crossing unit area per unit time (kg m⁻² s⁻¹) | [2.4](lessons/02-04-diffusion-i-ficks-first-law.md) |
| $C$, $dC/dx$ | concentration (kg/m³ or wt%) and its gradient — **also** number of components in [3.1](lessons/03-01-phase-diagrams-lever-rule.md) | [2.4](lessons/02-04-diffusion-i-ficks-first-law.md) |
| $D$ | diffusion coefficient / diffusivity (m²/s) — **also** dislocation spacing in [2.3](lessons/02-03-interfaces-grain-boundaries.md) | [2.4](lessons/02-04-diffusion-i-ficks-first-law.md) |
| $D_0$, $Q_d$ | Arrhenius pre-exponential (m²/s) and activation energy for diffusion (J/mol) | [2.5](lessons/02-05-diffusion-ii-transient-arrhenius.md) |
| $\operatorname{erf}(z)$ | error function — S-curve from 0 to 1, tabulated below | [2.5](lessons/02-05-diffusion-ii-transient-arrhenius.md) |
| $C_s$, $C_0$, $C_x$ | surface, initial, and depth-$x$ concentrations in a carburizing profile | [2.5](lessons/02-05-diffusion-ii-transient-arrhenius.md) |
| $P$, $F$ | number of coexisting phases, and degrees of freedom (Gibbs phase rule) | [3.1](lessons/03-01-phase-diagrams-lever-rule.md) |
| $C_0$, $C_L$, $C_\alpha$ | overall alloy composition, and the tie-line ends (liquid, solid) in wt% | [3.1](lessons/03-01-phase-diagrams-lever-rule.md) |
| $W_\alpha$, $W_L$ | mass fractions of the phases from the lever rule (dimensionless) | [3.1](lessons/03-01-phase-diagrams-lever-rule.md) |
| $C_E$, $T_E$ | eutectic composition and eutectic temperature | [3.2](lessons/03-02-eutectics-microstructure.md) |
| $\alpha$, $\beta$, $\gamma$ | the solid phases on a diagram — in steel, $\alpha$ = ferrite, $\gamma$ = austenite. **Also** the linear thermal-expansion coefficient $\alpha$ (K⁻¹) in [5.2](lessons/05-02-semiconductors-optics-thermal.md) and shear strain $\gamma$ in [4.1](lessons/04-01-elastic-behavior-stress-strain.md) | [3.2](lessons/03-02-eutectics-microstructure.md) |
| $W_{\alpha'}$ | mass fraction of the **proeutectoid** (primary) constituent | [3.3](lessons/03-03-transformations-ttt-heat-treatment.md) |
| $\mathrm{Fe_3C}$ | cementite, the iron-carbide compound fixed at 6.70 wt% C | [3.3](lessons/03-03-transformations-ttt-heat-treatment.md) |
| $\sigma$, $\varepsilon$ | engineering stress (Pa, usually MPa) and engineering strain (dimensionless) — $\sigma$ is **also** electrical conductivity in [5.1](lessons/05-01-electronic-properties-band-picture.md) | [4.1](lessons/04-01-elastic-behavior-stress-strain.md) |
| $E$ | Young's (elastic) modulus — slope of the elastic line (GPa) | [4.1](lessons/04-01-elastic-behavior-stress-strain.md) |
| $\nu$ | Poisson's ratio (dimensionless, ~0.3 for metals) — **also** photon frequency in [5.2](lessons/05-02-semiconductors-optics-thermal.md) | [4.1](lessons/04-01-elastic-behavior-stress-strain.md) |
| $\tau$, $\gamma$ | shear stress (Pa) and shear strain (dimensionless) | [4.1](lessons/04-01-elastic-behavior-stress-strain.md) |
| $\sigma_y$ | yield strength, by the 0.2 % offset construction (MPa) | [4.2](lessons/04-02-plastic-deformation-schmid.md) |
| $\tau_R$, $\tau_{\mathrm{CRSS}}$ | resolved shear stress on a slip system, and its critical value (MPa) | [4.2](lessons/04-02-plastic-deformation-schmid.md) |
| $\phi$, $\lambda$ | angle from the tensile axis to the slip-plane **normal**, and to the slip **direction** — $\lambda$ is **also** wavelength in [5.2](lessons/05-02-semiconductors-optics-thermal.md) | [4.2](lessons/04-02-plastic-deformation-schmid.md) |
| $m$ | Schmid factor $\cos\phi\cos\lambda$ (dimensionless, at most $1/2$) | [4.2](lessons/04-02-plastic-deformation-schmid.md) |
| $\sigma_0$, $k_y$ | Hall–Petch friction stress (MPa) and slope (MPa·mm$^{1/2}$) | [4.3](lessons/04-03-strengthening-mechanisms.md) |
| %CW | percent cold work — fraction of cross-section squeezed away | [4.3](lessons/04-03-strengthening-mechanisms.md) |
| $\sigma_m$, $\rho_t$ | stress at a crack tip (MPa), and the tip's radius of curvature (m) | [4.4](lessons/04-04-failure-fracture-fatigue-creep.md) |
| $K$, $K_{IC}$, $Y$ | stress-intensity factor, plane-strain fracture toughness (MPa$\sqrt{\mathrm m}$), geometry factor | [4.4](lessons/04-04-failure-fracture-fatigue-creep.md) |
| $S$, $S_e$, $N$ | cyclic stress amplitude, endurance limit (MPa), and cycles to failure | [4.4](lessons/04-04-failure-fracture-fatigue-creep.md) |
| $\dot\varepsilon_s$, $Q_c$ | steady-state creep rate (s⁻¹) and activation energy for creep (J/mol) | [4.4](lessons/04-04-failure-fracture-fatigue-creep.md) |
| $T_m$ | melting temperature, **in kelvin** (creep matters above roughly $0.4\,T_m$) | [4.4](lessons/04-04-failure-fracture-fatigue-creep.md) |
| $E_g$, $E_F$ | band gap and Fermi level (eV) | [5.1](lessons/05-01-electronic-properties-band-picture.md) |
| $\mu$, $\mu_e$, $\mu_h$ | carrier mobility, for electrons and holes (m²·V⁻¹s⁻¹) | [5.1](lessons/05-01-electronic-properties-band-picture.md) |
| $p$, $N_d$ | hole density and donor density (m⁻³) | [5.2](lessons/05-02-semiconductors-optics-thermal.md) |
| $\lambda_{\text{edge}}$ | absorption edge — longest wavelength a material can absorb (nm) | [5.2](lessons/05-02-semiconductors-optics-thermal.md) |
| $M$ | material index — the property group you maximize to win a design | [5.3](lessons/05-03-materials-classes-selection.md) |

## Definitions

### Bond-energy well

The energy landscape two atoms sit in: attraction pulls them together, repulsion
shoves them apart, and the valley between is where they rest. **Depth** sets the
melting point; **curvature at the bottom** sets the stiffness. They are different
numbers.

$$U(r) = -\frac{A}{r^{m}} + \frac{B}{r^{n}}, \quad n > m > 0; \qquad \left.\frac{dU}{dr}\right|_{r_0} = 0, \qquad \kappa = \left.\frac{d^2U}{dr^2}\right|_{r_0} > 0$$

*Introduced:* [1.1](lessons/01-01-bonding-energy-well.md)

### Unit cell

The smallest box that, stamped edge-to-edge forever, rebuilds the whole crystal —
3D wallpaper from one tile. Atoms on its boundary are shared: **corner $\tfrac18$,
edge $\tfrac14$, face $\tfrac12$, interior $1$.**

*Introduced:* [1.2](lessons/01-02-crystal-structures-unit-cells.md)

### Coordination number

How many nearest neighbours each atom actually touches. More neighbours means
denser packing: 12 is the maximum for equal spheres (FCC and HCP), 8 for BCC.

*Introduced:* [1.2](lessons/01-02-crystal-structures-unit-cells.md)

### Atomic packing factor

What fraction of the cell's volume is really atom rather than void. It depends on
the *arrangement* only — the atomic radius cancels.

$$\text{APF} = \frac{n\cdot\tfrac43\pi R^3}{a^3}$$

*Introduced:* [1.2](lessons/01-02-crystal-structures-unit-cells.md)

### Miller indices

A three-integer name for a line or a sheet inside the unit cell. A **direction**
is the reduced integer displacement vector in square brackets; a **plane** is the
reduced *reciprocals* of its axis intercepts in round brackets. Reciprocals are
what turn "parallel to that axis, intercept infinity" into a clean $0$.

$$[uvw] \ \text{direction} \qquad (hkl) \ \text{plane} \qquad \langle uvw\rangle,\ \{hkl\} \ \text{symmetry families}$$

*Introduced:* [1.3](lessons/01-03-miller-indices-directions-planes.md)

### Planar density

How crowded a sheet of atoms is — atoms per unit area, counting only atoms whose
centres lie in the plane. The densest plane, paired with the densest direction
lying in it, is where the crystal slips.

$$\text{PD} = \frac{\text{atoms centred in the plane}}{\text{area of that region}}, \qquad \text{LD} = \frac{\text{atoms centred on the line}}{\text{length of that vector}}$$

*Introduced:* [1.3](lessons/01-03-miller-indices-directions-planes.md)

### Grain

One region of single-crystal order inside a polycrystal — same lattice as its
neighbours, different *tilt*. The mismatched seam between two grains is a **grain
boundary**. Grains are not phases: a pure metal is one phase and millions of grains.

*Introduced:* [1.4](lessons/01-04-order-disorder-grains.md)

### Long-range order

You can stand on one atom and predict where an atom a thousand cells away sits.
Crystals have it; a glass has only **short-range** order (a well-defined
nearest-neighbour spacing that washes out after a few atoms).

*Introduced:* [1.4](lessons/01-04-order-disorder-grains.md)

### Anisotropy

A property that depends on which direction you measure it. A single crystal is
anisotropic (its planes and directions aren't equivalent); a randomly-oriented
polycrystal averages the orientations away and comes out **isotropic**. Deliberate
grain alignment from rolling or drawing — a **texture** — brings anisotropy back.

*Introduced:* [1.4](lessons/01-04-order-disorder-grains.md)

### Polymorphism

One composition, more than one crystal structure, selected by temperature or
pressure (**allotropy** is the same word for a pure element). Because the two
structures pack differently, the volume jumps at the transformation temperature.

*Introduced:* [1.4](lessons/01-04-order-disorder-grains.md)

### Point defect

A mistake at a single atomic site: a **vacancy** (empty site) or a
**self-interstitial** (an extra host atom wedged into a gap). Vacancies are cheap
and are genuine *equilibrium* defects — a warm crystal wants some.

*Introduced:* [2.1](lessons/02-01-point-defects-solid-solutions.md)

### Solid solution

A single-phase crystal with a second element dissolved in it. **Substitutional**:
the solute sits on a normal lattice site (needs similar size — Hume-Rothery).
**Interstitial**: a much smaller solute squeezes into the voids, as carbon does in
iron.

*Introduced:* [2.1](lessons/02-01-point-defects-solid-solutions.md)

### Dislocation

A **line** defect that lets a crystal slip one row of bonds at a time, like
walking a wrinkle across a rug instead of dragging the whole rug. This is why real
metals yield roughly a thousand times below their bond-breaking strength.

- **Edge**: an extra half-plane of atoms; $\mathbf b \perp \boldsymbol\xi$.
- **Screw**: planes spiral into one helical ramp; $\mathbf b \parallel \boldsymbol\xi$.

*Introduced:* [2.2](lessons/02-02-dislocations-plastic-flow.md)

### Burgers vector

The step size of the defect: trace a loop around the dislocation line and
$\mathbf b$ is the vector that closes the loop's failure. It is the **same
everywhere along the line**, even where the character changes from edge to screw.

$$\mathbf b = \tfrac{a}{2}\langle110\rangle \ (\text{FCC}), \qquad |\mathbf b| = \frac{a}{\sqrt2} = 2R$$

*Introduced:* [2.2](lessons/02-02-dislocations-plastic-flow.md)

### Slip system

A slip plane paired with a slip direction lying in it — the road a dislocation is
allowed to drive on. Slip picks the *densest* plane and the *closest-packed*
direction, because there $\mathbf b$ is shortest and the atomic washboard is
smoothest.

*Introduced:* [2.2](lessons/02-02-dislocations-plastic-flow.md)

### Grain boundary

A **two-dimensional** defect: the transition zone, a couple of atoms wide, where
two crystal orientations meet. It stores energy $\gamma_{gb}$ per unit area, blocks
dislocations (strength), and speeds diffusion (creep, corrosion). It is not a gap
or a crack — atoms are still bonded across it, just imperfectly placed.

*Introduced:* [2.3](lessons/02-03-interfaces-grain-boundaries.md)

### Twin boundary

A mirror plane: atoms on one side are the reflection of atoms on the other, so
bonding across it is nearly perfect and its energy is an order of magnitude below
a general high-angle boundary. A **stacking fault** is its cousin — one slip in
the close-packed stacking sequence (FCC ...ABCABC... briefly reading ...ABCACB...).

*Introduced:* [2.3](lessons/02-03-interfaces-grain-boundaries.md)

### Diffusion flux

The net amount of a species crossing unit area per unit time, driven by nothing
but a concentration difference plus random thermal hopping — no force required.

$$J = -D\,\frac{dC}{dx} \qquad (\mathrm{kg\,m^{-2}s^{-1}})$$

*Introduced:* [2.4](lessons/02-04-diffusion-i-ficks-first-law.md)

### Steady state

Concentration at every point has stopped changing in time, so the flux is the same
everywhere — whatever flows in flows out. Through a **flat plate with constant
$D$** this forces a straight-line profile; in a cylindrical shell the same steady
condition gives a logarithmic one.

*Introduced:* [2.4](lessons/02-04-diffusion-i-ficks-first-law.md)

### Diffusion coefficient

How fast a species moves through a given host at a given temperature (m²/s). It is
thermally activated, so it climbs exponentially with temperature. Interstitial
diffusion beats substitutional by $10^{4}$–$10^{6}$, because an interstitial never
has to wait for a vacancy.

$$D = D_0\exp\!\left(-\frac{Q_d}{RT}\right)$$

*Introduced:* [2.4](lessons/02-04-diffusion-i-ficks-first-law.md), *temperature law in* [2.5](lessons/02-05-diffusion-ii-transient-arrhenius.md)

### Phase

A physically distinct, chemically uniform region with its own structure. Distinct
from a **component** (an ingredient you weigh out, like Cu or Ni): one component
can appear as several phases, and one phase can hold several components dissolved
together.

*Introduced:* [3.1](lessons/03-01-phase-diagrams-lever-rule.md)

### Tie line

The horizontal line drawn across a two-phase field at a fixed temperature. Its two
ends read off *what* the coexisting phases are made of — and neither of them is
the overall alloy composition $C_0$, which sits between them.

*Introduced:* [3.1](lessons/03-01-phase-diagrams-lever-rule.md)

### Lever rule

The tie line as a seesaw with its fulcrum at $C_0$: each phase's mass fraction is
the length of the **opposite** arm over the whole tie line. It is nothing but
conservation of solute, solved.

$$W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L}, \qquad W_L = \frac{C_\alpha - C_0}{C_\alpha - C_L}, \qquad W_\alpha C_\alpha + W_L C_L = C_0$$

*Introduced:* [3.1](lessons/03-01-phase-diagrams-lever-rule.md)

### Eutectic

The one composition where a **liquid** freezes straight into two solids at a
single temperature — the lowest melting point anywhere on the diagram, with no
mushy range. Alloys off to either side freeze primary (proeutectic) crystals first
and only then hit the eutectic isotherm.

$$L \;\xrightarrow{\ T_E\ }\; \alpha + \beta$$

*Introduced:* [3.2](lessons/03-02-eutectics-microstructure.md)

### Microconstituent

A recognizable structural *region*, not a phase. "The eutectic" is a
microconstituent made of two phases woven into fine lamellae; "primary $\alpha$" is
the same $\alpha$ phase grown as blocky grains. Chemically identical, mechanically
very different — the lamellar version is strong because its interfaces block
dislocations.

*Introduced:* [3.2](lessons/03-02-eutectics-microstructure.md)

### Eutectoid

The solid-state cousin of the eutectic: one **solid** parent splits into two
solids at a fixed temperature. In steel this is austenite becoming ferrite plus
cementite, and the product is **pearlite** — alternating lamellae of the two.

$$\gamma\,(0.76\ \text{wt\% C}) \;\xrightarrow{\ 727\,^\circ\mathrm{C}\ }\; \alpha\,(0.022) + \mathrm{Fe_3C}\,(6.70)$$

*Introduced:* [3.3](lessons/03-03-transformations-ttt-heat-treatment.md)

### Martensite

What you get when a quench outruns diffusion entirely: the FCC-to-BCC change
happens by a shear of the lattice with no carbon redistribution, trapping all the
carbon in a strained body-centered-tetragonal cell. Very hard, very brittle, and
it appears **nowhere on the equilibrium diagram**. Tempering (a moderate reheat)
trades some hardness back for toughness.

*Introduced:* [3.3](lessons/03-03-transformations-ttt-heat-treatment.md)

### Engineering stress and strain

Force per **original** area, and stretch per **original** length. Normalizing this
way is what makes the numbers belong to the material rather than to your particular
specimen.

$$\sigma = \frac{F}{A_0}\ (\mathrm{Pa}), \qquad \varepsilon = \frac{\Delta L}{L_0}\ (\text{dimensionless})$$

*Introduced:* [4.1](lessons/04-01-elastic-behavior-stress-strain.md)

### Young's modulus

**Stiffness**, not strength: the slope of the elastic line, the stress needed to
produce one unit of strain. It is set by bonding and packing — the curvature of the
[bond-energy well](#bond-energy-well) — so alloying and heat treatment barely move
it. All steels sit near 200 GPa regardless of carbon content.

$$\sigma = E\varepsilon, \qquad E \propto \left.\frac{d^2U}{dr^2}\right|_{r_0}$$

*Introduced:* [4.1](lessons/04-01-elastic-behavior-stress-strain.md)

### Poisson's ratio

How much a material narrows sideways for every unit it stretches lengthwise. The
minus sign is what makes it a positive number.

$$\nu = -\frac{\varepsilon_{\text{lateral}}}{\varepsilon_{\text{axial}}} \approx 0.3 \ \text{for metals}$$

*Introduced:* [4.1](lessons/04-01-elastic-behavior-stress-strain.md)

### Yield strength

The stress at which permanent deformation begins. Because the elastic-to-plastic
transition has no sharp corner, it is *defined by construction*: draw a line
parallel to the elastic slope starting at $\varepsilon = 0.002$, and read off where
it crosses the curve — the **0.2 % offset**.

*Introduced:* [4.2](lessons/04-02-plastic-deformation-schmid.md)

### Resolved shear stress

Dislocations answer only to shear *along the slip direction*, so only the fraction
$\cos\phi\cos\lambda$ of your tensile pull ever reaches them. That fraction is the
**Schmid factor** $m$, and it can never exceed $\tfrac12$.

$$\tau_R = \sigma\cos\phi\cos\lambda = \sigma m, \qquad m \le \tfrac12 \ (\text{equality at } \phi = \lambda = 45^\circ)$$

*Introduced:* [4.2](lessons/04-02-plastic-deformation-schmid.md)

### Critical resolved shear stress

The material's threshold: a slip system runs when $\tau_R$ reaches $\tau_{\mathrm{CRSS}}$.
Every strengthening mechanism in the course is a way of pushing this number up.

$$\tau_R \ge \tau_{\mathrm{CRSS}} \iff \text{slip}, \qquad \sigma_y = \frac{\tau_{\mathrm{CRSS}}}{m}$$

*Introduced:* [4.2](lessons/04-02-plastic-deformation-schmid.md)

### Cold work

Plastic deformation below the recrystallization temperature. It multiplies and
tangles dislocations, so strength climbs and ductility falls — and it is fully
reversible by annealing.

$$\%\mathrm{CW} = \frac{A_0 - A_d}{A_0}\times100 \;=\; \left[1 - \left(\frac{d_d}{d_0}\right)^{2}\right]\times100 \ (\text{round sections})$$

*Introduced:* [4.3](lessons/04-03-strengthening-mechanisms.md)

### Recrystallization

The middle stage of annealing, where brand-new strain-free grains nucleate and eat
the deformed ones: strength drops back toward the annealed value and ductility
returns. The full sequence on heating cold-worked metal is
**recovery → recrystallization → grain growth**, and over-baking into grain growth
gives back a little strength via Hall–Petch.

*Introduced:* [4.3](lessons/04-03-strengthening-mechanisms.md)

### Fracture toughness

Resistance to a **crack running**, which is a different axis from strength
(resistance to yielding). Many strengthening tricks lower it. Fast fracture occurs
when the loading number $K$ reaches the material number $K_{IC}$.

$$K = Y\sigma\sqrt{\pi a} \;\ge\; K_{IC} \qquad (K_{IC}\ \text{in}\ \mathrm{MPa}\sqrt{\mathrm m})$$

*Introduced:* [4.4](lessons/04-04-failure-fracture-fatigue-creep.md)

### Ductile-to-brittle transition

The temperature at which a material stops warning you. Above it, fracture is
ductile — necking, drawing, a fibrous cup-and-cone face, lots of energy absorbed.
Below it, brittle — no plastic flow, a fast crack, a flat cleavage face. **It is
not a fixed number**: faster loading, a sharper notch, a thicker section, and
neutron irradiation all shift it upward.

*Introduced:* [4.4](lessons/04-04-failure-fracture-fatigue-creep.md)

### Endurance limit

A cyclic stress amplitude you can apply forever without fatigue failure. **Steels
have one; aluminum and most non-ferrous metals do not** — for those you quote a
*fatigue strength* at a stated life instead.

*Introduced:* [4.4](lessons/04-04-failure-fracture-fatigue-creep.md)

### Creep

Slow, time-dependent stretching under a **constant** load at high temperature
(roughly above $0.4\,T_m$, with $T_m$ in kelvin). Three stages: primary (slope
decreasing), secondary (steady state — the design number), tertiary (accelerating
to rupture).

$$\dot\varepsilon_s = A\,\sigma^{\,n}\exp\!\left(-\frac{Q_c}{RT}\right), \qquad n \approx 3\text{–}8$$

*Introduced:* [4.4](lessons/04-04-failure-fracture-fatigue-creep.md)

### Band gap

The energy an electron must gain to leave the full **valence band** and reach the
empty **conduction band**, where it can carry current. One number decides whether a
solid is a metal, a semiconductor, or an insulator — and what colour of light it
swallows.

*Introduced:* [5.1](lessons/05-01-electronic-properties-band-picture.md)

### Fermi level

Loosely, the water line of the electron sea: states below it are occupied, states
above are empty (at absolute zero). Whether $E_F$ lands *inside* a band or inside a
gap is the whole classification.

*Introduced:* [5.1](lessons/05-01-electronic-properties-band-picture.md)

### Conductivity

How many carriers you have, times how nimble each one is. Its reciprocal is
resistivity.

$$\sigma = n e \mu \quad (\mathrm{S/m}), \qquad \rho = 1/\sigma \quad (\Omega\cdot\mathrm m)$$

*Introduced:* [5.1](lessons/05-01-electronic-properties-band-picture.md)

### Doping

Deliberately planting substitutional impurities for their *electrons*, not their
size. **n-type**: a group-V donor in group-IV silicon parks a spare electron just
below the conduction band, so carriers are negative electrons. **p-type**: a
group-III acceptor creates a level just above the valence band, leaving a mobile
positive **hole**. The dopant, not the temperature, then sets the carrier count.

*Introduced:* [5.2](lessons/05-02-semiconductors-optics-thermal.md)

### Absorption edge

The longest wavelength a material can absorb — the photon that just barely spans
the gap. Longer (weaker) photons pass through; shorter (stronger) ones are
swallowed.

$$\lambda_{\text{edge}} = \frac{hc}{E_g}, \qquad \lambda_{\text{edge}}[\mathrm{nm}] = \frac{1240}{E_g[\mathrm{eV}]}$$

*Introduced:* [5.2](lessons/05-02-semiconductors-optics-thermal.md)

### Material index

A group of material properties built so that **maximizing it minimizes the mass**
(or cost) for a stated function and constraint. It is a property of the *problem*,
not of the material — change tie to beam and the ranking reshuffles.

*Introduced:* [5.3](lessons/05-03-materials-classes-selection.md)

## Formulas and rules

### Crystal structures at a glance

The table the whole first module is built to let you use. $R$ is the atomic radius,
$a$ the lattice parameter.

| | **BCC** | **FCC** | **HCP** |
|---|---|---|---|
| Atoms per cell $n$ | 2 | 4 | 6 |
| Coordination number | 8 | 12 | 12 |
| Where spheres touch | body diagonal $\langle111\rangle$ | face diagonal $\langle110\rangle$ | basal close-packed rows |
| Cell size | $a = \dfrac{4R}{\sqrt3}$ | $a = 2R\sqrt2 = \dfrac{4R}{\sqrt2}$ | $a = 2R$, ideal $\dfrac{c}{a} = \sqrt{\tfrac83} \approx 1.633$ |
| APF | 0.68 $\left(=\dfrac{\pi\sqrt3}{8}\right)$ | 0.74 $\left(=\dfrac{\pi}{3\sqrt2}\right)$ | 0.74 |
| Cell volume | $a^3$ | $a^3$ | $\dfrac{3\sqrt3}{2}a^2c$ |
| Stacking sequence | not close-packed | ABCABC | ABABAB |
| Slip system | $\{110\}\langle111\rangle$ (also $\{112\}$, $\{123\}$) | $\{111\}\langle110\rangle$ | basal $(0001)\langle11\bar20\rangle$ |
| Independent slip systems | 12 (non-close-packed planes) | 12 (close-packed planes) | 3 |
| Burgers vector | $\tfrac{a}{2}\langle111\rangle$, $\lvert\mathbf b\rvert = \tfrac{a\sqrt3}{2}$ | $\tfrac{a}{2}\langle110\rangle$, $\lvert\mathbf b\rvert = \tfrac{a}{\sqrt2}$ | $\tfrac{a}{3}\langle11\bar20\rangle$, $\lvert\mathbf b\rvert = a$ |
| Ductility | ductile, but shows a **DBTT** | ductile at all temperatures | limited — few slip systems |
| Examples | $\alpha$-Fe, Cr, W, Mo, V | Cu, Al, Au, Ni, Ag, Pb, $\gamma$-Fe | Zn, Mg, $\alpha$-Ti, Cd, Co |

Reading the table: FCC and HCP are the two ways to pack equal spheres as densely
as physically possible (74 %); BCC leaves more air (68 %). **The slip-system count
is why FCC metals stay ductile at any temperature while HCP metals are hard to
form** — with only three basal systems, HCP often can't accommodate an arbitrary
imposed shape change. The HCP slip system uses four Miller–Bravais indices
$(hkil)$ with $i = -(h+k)$, a hexagonal-only bookkeeping convention.

*From* [1.2](lessons/01-02-crystal-structures-unit-cells.md), [1.3](lessons/01-03-miller-indices-directions-planes.md), *and* [2.2](lessons/02-02-dislocations-plastic-flow.md). *The slip-system and stacking rows are standard reference data the lessons use without tabulating.*

### Theoretical density

$$\rho = \frac{n\,A}{V_c\,N_A}$$

with $n$ atoms per cell, $A$ the atomic mass in **g/mol**, $V_c$ the cell volume in
**cm³**, and $N_A = 6.022\times10^{23}$/mol. The units are not optional: $A$ is per
mole in grams, so convert $a$ to cm **before** cubing. The conversion chain is
$1\ \mathrm{nm} = 10^{-9}\ \mathrm m = 10^{-7}\ \mathrm{cm}$.

*From* [1.2](lessons/01-02-crystal-structures-unit-cells.md)

### Miller index recipes

**Direction $[uvw]$:** head minus tail, in units of the lattice parameters; clear
fractions; divide by the greatest common divisor; square brackets, negatives barred.

**Plane $(hkl)$:** find the axis intercepts in units of $a$ (slide the plane off the
origin first if it passes through); take **reciprocals**; clear to smallest
integers; round brackets. An intercept of $\infty$ gives index $0$.

$$d_{hkl} = \frac{a}{\sqrt{h^2+k^2+l^2}} \qquad (\text{cubic only})$$

In cubic crystals — and *only* in cubic crystals — $[hkl]$ is perpendicular to
$(hkl)$. The spacing $d_{hkl}$ is what Bragg's law $n\lambda = 2d\sin\theta$ measures.

*From* [1.3](lessons/01-03-miller-indices-directions-planes.md)

### Standard atomic and lattice data

Every value the lessons actually use, in one place.

| Element | Structure | $R$ (nm) | $a$ (nm) | $A$ (g/mol) | $\rho$ measured (g/cm³) |
|---|---|---|---|---|---|
| Cu | FCC | 0.128 | 0.3615 | 63.55 | 8.96 |
| Al | FCC | 0.143 | 0.4050 | 26.98 | 2.70 |
| Ni | FCC | 0.125 | — | 58.69 | 8.90 |
| Fe ($\alpha$, BCC) | BCC | 0.124 | 0.2866 | 55.85 | 7.87 |
| Cr | BCC | 0.125 | 0.2884 | 52.00 | 7.19 |
| Zn | HCP | 0.133 | — | 65.38 | 7.13 |
| C (interstitial) | — | 0.071 | — | 12.01 | — |

Handy checks: $|\mathbf b| = a/\sqrt2 = 2R$ in FCC, giving $b = 0.256$ nm for Cu and
$0.286$ nm for Al. Carbon in iron has $r_C/r_{Fe} \approx 0.57$ — far past the 15 %
substitutional limit, comfortably inside the interstitial one.

*From* [1.2](lessons/01-02-crystal-structures-unit-cells.md), [1.3](lessons/01-03-miller-indices-directions-planes.md), [2.1](lessons/02-01-point-defects-solid-solutions.md), [2.2](lessons/02-02-dislocations-plastic-flow.md)

### Defect taxonomy by dimensionality

The organizing spine of Module 2: defects sorted by how many dimensions they
extend in.

| Dim | Defect | What it is | Equilibrium defect? | Lesson |
|---|---|---|---|---|
| **0D** | vacancy | an empty lattice site | **yes** — $N_v/N = e^{-Q_v/kT}$ at any $T > 0$ | [2.1](lessons/02-01-point-defects-solid-solutions.md) |
| 0D | self-interstitial | a host atom wedged into a void | rare — high formation energy | [2.1](lessons/02-01-point-defects-solid-solutions.md) |
| 0D | substitutional solute | foreign atom on a lattice site | set by chemistry, not temperature | [2.1](lessons/02-01-point-defects-solid-solutions.md) |
| 0D | interstitial solute | small foreign atom in a void (C in Fe) | set by solubility limit | [2.1](lessons/02-01-point-defects-solid-solutions.md) |
| **1D** | edge dislocation | extra half-plane; $\mathbf b \perp \boldsymbol\xi$ | **no** — energy per length is far too large | [2.2](lessons/02-02-dislocations-plastic-flow.md) |
| 1D | screw dislocation | helical ramp of planes; $\mathbf b \parallel \boldsymbol\xi$ | no | [2.2](lessons/02-02-dislocations-plastic-flow.md) |
| 1D | mixed dislocation | the continuum between them; $\mathbf b$ unchanged along the line | no | [2.2](lessons/02-02-dislocations-plastic-flow.md) |
| **2D** | free surface | dangling bonds; costs $\gamma_s$ (J/m²) | no | [2.3](lessons/02-03-interfaces-grain-boundaries.md) |
| 2D | grain boundary | orientation mismatch; $\gamma_{gb} \approx \tfrac13$–$\tfrac12\,\gamma_s$ | no | [2.3](lessons/02-03-interfaces-grain-boundaries.md) |
| 2D | twin boundary | mirror plane; very low energy | no | [2.3](lessons/02-03-interfaces-grain-boundaries.md) |
| 2D | stacking fault | one slip in the ABCABC sequence | no | [2.3](lessons/02-03-interfaces-grain-boundaries.md) |
| **3D** | pores, voids, inclusions | bulk flaws — the stress raisers that start cracks | no | [4.4](lessons/04-04-failure-fracture-fatigue-creep.md) |
| 3D | precipitates / second phase | a distinct phase dispersed in the matrix | equilibrium if the diagram says so | [3.2](lessons/03-02-eutectics-microstructure.md), [3.3](lessons/03-03-transformations-ttt-heat-treatment.md) |

The one line worth memorizing: **vacancies are the only defect thermal
fluctuations can create on their own.** A dislocation costs a few eV per atomic
length of line times millions of atomic lengths — heat cannot pop one into
existence, so they are grown in during solidification and multiplied by deformation.

### Vacancies and solid solubility

$$\frac{N_v}{N} = \exp\!\left(-\frac{Q_v}{kT}\right) \quad (Q_v\ \text{in eV},\ k = 8.62\times10^{-5}\ \mathrm{eV/K}) \qquad\text{or}\qquad \exp\!\left(-\frac{Q_v}{RT}\right) \quad (Q_v\ \text{in J/mol})$$

Match the constant to the energy unit, and $T$ is **always** in kelvin. Inverting:
$Q_v = -kT\ln(N_v/N)$.

**Hume-Rothery rules** — substitutional solubility is large only when the solute
resembles the host on all four counts:

| Rule | Criterion |
|---|---|
| 1. Size | atomic radii within about 15 % |
| 2. Crystal structure | same structure (both FCC, both BCC…) |
| 3. Valence | similar; a metal dissolves an equal-or-lower valence more readily |
| 4. Electronegativity | close — a big gap makes a compound instead of a solution |

Cu–Ni passes all four and is soluble in *all* proportions; Cu–Zn fails rule 2 (Zn
is HCP) and brass tops out near 35–40 wt% Zn. **Interstitial** solubility instead
needs $r_{\text{solute}} \lesssim 0.6\,r_{\text{host}}$ — and is capped low anyway,
because the holes are small.

*From* [2.1](lessons/02-01-point-defects-solid-solutions.md)

### Dislocation and boundary geometry

$$T \approx \tfrac12\,G\,|\mathbf b|^2 \quad (\text{line tension, J/m} = \text{N}) \qquad \tau_{\text{th}} = \frac{Gb}{2\pi a} \approx \frac{G}{2\pi} \quad (\text{theoretical shear strength})$$

Real crystals yield $10^3$–$10^4$ times below $\tau_{\text{th}}$ — the entire point
of the dislocation.

Low-angle **tilt** boundary as a wall of edge dislocations, and its energy:

$$D = \frac{b}{2\sin(\theta/2)} \approx \frac{b}{\theta} \ (\theta \text{ in radians}), \qquad \gamma_{gb}(\theta) = \gamma_0\,\theta\,(A - \ln\theta) \quad \text{(Read–Shockley)}$$

Read–Shockley climbs steeply over the first few degrees, then saturates; past
roughly 10–15° the dislocation cores overlap, the model dies, and you have a
**high-angle** boundary whose energy is nearly flat in $\theta$. (A **twist**
boundary is the same idea with a crossed grid of screw dislocations.)

*From* [2.2](lessons/02-02-dislocations-plastic-flow.md) *and* [2.3](lessons/02-03-interfaces-grain-boundaries.md)

### Diffusion

$$\text{Fick I:}\quad J = -D\frac{dC}{dx} \qquad\qquad \text{flat plate, steady state:}\quad J = D\,\frac{C_1 - C_2}{\Delta x}$$
$$\text{cylindrical shell:}\quad \dot M = \frac{2\pi L D (C_1 - C_2)}{\ln(r_2/r_1)}$$
$$\text{Fick II:}\quad \frac{\partial C}{\partial t} = D\,\frac{\partial^2 C}{\partial x^2} \qquad\qquad \text{semi-infinite solid:}\quad \frac{C_x - C_0}{C_s - C_0} = 1 - \operatorname{erf}\!\left(\frac{x}{2\sqrt{Dt}}\right)$$

Everything about the transient profile rides on the one dimensionless grouping
$x/2\sqrt{Dt}$, so $\sqrt{Dt}$ is the **diffusion length** and depth scales as
$\sqrt{t}$: doubling the case depth costs **four times** the soak.

$$D = D_0 e^{-Q_d/RT}, \qquad \ln D = \ln D_0 - \frac{Q_d}{R}\cdot\frac1T \ (\text{slope} = -Q_d/R)$$
$$\text{same profile}\iff Dt \ \text{unchanged} \;\Longrightarrow\; \frac{t_2}{t_1} = \frac{D_1}{D_2} = \exp\!\left[-\frac{Q_d}{R}\left(\frac1{T_1}-\frac1{T_2}\right)\right]$$
$$\text{two-point extraction:}\quad Q_d = R\,\frac{\ln(D_2/D_1)}{1/T_1 - 1/T_2}$$

**Error function table** (linear interpolation between entries is fine):

| $z$ | 0.35 | 0.40 | 0.45 | 0.50 | 0.55 | 0.60 |
|---|---|---|---|---|---|---|
| $\operatorname{erf}(z)$ | 0.379 | 0.428 | 0.475 | 0.520 | 0.563 | 0.604 |

with $\operatorname{erf}(0) = 0$ and $\operatorname{erf}(\infty) = 1$.

**Diffusion data used in this course:**

| System | $D_0$ (m²/s) | $Q_d$ (kJ/mol) |
|---|---|---|
| C in $\alpha$-Fe (BCC, interstitial) | $6.2\times10^{-7}$ | 80 |
| C in $\gamma$-Fe (FCC, interstitial) | $2.3\times10^{-5}$ | 148 |

*From* [2.4](lessons/02-04-diffusion-i-ficks-first-law.md) *and* [2.5](lessons/02-05-diffusion-ii-transient-arrhenius.md)

### Phase-diagram vocabulary

$$\text{Gibbs phase rule:}\quad P + F = C + 2 \qquad\longrightarrow\qquad P + F = C + 1 \ \ (\text{fixed pressure})$$

For a binary alloy at fixed pressure, $P + F = 3$: a single-phase field has
$F = 2$ (vary $T$ and composition freely); a two-phase field has $F = 1$ (fix $T$
and both phase compositions are locked at the tie-line ends).

| Boundary / term | What it means |
|---|---|
| **liquidus** | above it, everything is liquid; it gives $C_L$ on a tie line |
| **solidus** | below it, everything is solid; it gives $C_\alpha$ on a tie line |
| **solvus** | the solid-solubility limit — where a second solid phase appears |
| **isomorphous** | the two components dissolve completely, solid *and* liquid (Cu–Ni): one lens-shaped two-phase field, no eutectic |
| **hypo-/hypereutectic** | $C_0$ below / above $C_E$ — forms primary $\alpha$ / primary $\beta$ |
| **hypo-/hypereutectoid** | $C_0$ below / above the eutectoid — proeutectoid ferrite / cementite |

**The three-phase invariant reactions.** Each occurs at one fixed temperature and
one fixed composition ($F = 0$), which is why the eutectic isotherm is flat.

| Reaction | On **cooling** | Example |
|---|---|---|
| **Eutectic** | $L \to \alpha + \beta$ | Pb–Sn, 183 °C, 61.9 wt% Sn |
| **Eutectoid** | $\gamma \to \alpha + \beta$ (all solid) | Fe–Fe₃C, 727 °C, 0.76 wt% C: $\gamma \to \alpha + \mathrm{Fe_3C}$ |
| **Peritectic** | $L + \beta \to \alpha$ (liquid + solid → a *different* solid) | Fe–Fe₃C, 1493 °C: $\delta + L \to \gamma$ |
| **Peritectoid** | $\alpha + \beta \to \gamma$ (all solid) | the solid-state cousin of the peritectic |

Mnemonic: **-oid means the parent was solid**; a peritectic *consumes* a phase on
cooling where a eutectic *splits* one. The peritectic and peritectoid rows are
standard vocabulary the course never exercises — they are here so the family is
complete.

*From* [3.1](lessons/03-01-phase-diagrams-lever-rule.md), [3.2](lessons/03-02-eutectics-microstructure.md), [3.3](lessons/03-03-transformations-ttt-heat-treatment.md)

### Using the lever rule twice

The single most-tested move in Module 3. Which tie line you use decides whether you
get *phases* or *microconstituents*.

| You want | Tie line to use | Formula (hypoeutectoid steel) |
|---|---|---|
| **Microconstituents** (primary/proeutectoid vs. eutectic/pearlite) | **just above** the invariant temperature, from the solid-solubility limit to $C_E$ (or the eutectoid) | $W_{\alpha'} = \dfrac{0.76 - C_0}{0.76 - 0.022}$, $W_{\text{pearlite}} = \dfrac{C_0 - 0.022}{0.738}$ |
| **Total phase amounts** | **just below**, the full width from one solid to the other | $W_{\alpha,\text{tot}} = \dfrac{6.70 - C_0}{6.678}$, $W_{\mathrm{Fe_3C}} = \dfrac{C_0 - 0.022}{6.678}$ |

The two views reconcile: total $\alpha$ = primary $\alpha$ + the $\alpha$ locked
inside the eutectic/pearlite. Always sanity-check by conserving solute, e.g.
$0.943(0.022) + 0.057(6.70) = 0.40$ for a 0.40 wt% C steel.

**Composition landmarks.**

| Pb–Sn (wt% Sn) | | Fe–Fe₃C (wt% C) | |
|---|---|---|---|
| eutectic $C_E$ | 61.9 at $T_E = 183\,^\circ$C | eutectoid | 0.76 at 727 °C |
| max solubility in $\alpha$ (Pb-rich) | 18.3 | max C in ferrite $\alpha$ (BCC) | 0.022 at 727 °C |
| $\beta$ (Sn-rich) at $T_E$ | 97.8 | cementite Fe₃C (compound) | 6.70 (fixed) |
| | | max C in austenite $\gamma$ (FCC) | ~2.1 |
| | | Fe–C eutectic (standard, unused here) | 4.30 at 1147 °C |

*From* [3.1](lessons/03-01-phase-diagrams-lever-rule.md), [3.2](lessons/03-02-eutectics-microstructure.md), [3.3](lessons/03-03-transformations-ttt-heat-treatment.md)

### Cooling rate and what it produces

Equilibrium says *whether*; kinetics says *how fast*; the cooling rate then picks
the product. A **TTT** (time–temperature–transformation) diagram plots
transformation start and finish times at each hold temperature — the classic
C-curve — and a cooling path that stays left of the nose beats diffusion.

| Cooling | Product | Character |
|---|---|---|
| furnace cool (slow) | coarse pearlite | thick lamellae, soft |
| air cool (faster) | fine pearlite | thinner lamellae, harder |
| faster still | bainite | very fine, harder again |
| water quench | **martensite** | diffusionless shear, BCT, very hard and brittle; **not on the diagram** |
| quench then reheat | tempered martensite | some carbide precipitates back out — hardness traded for toughness |

*From* [3.3](lessons/03-03-transformations-ttt-heat-treatment.md)

### Elastic constants and the tensile test

$$\sigma = E\varepsilon, \qquad \tau = G\gamma, \qquad \nu = -\frac{\varepsilon_{\text{lat}}}{\varepsilon_{\text{ax}}}, \qquad E = 2G(1+\nu)$$

For $\nu \approx 0.3$, $G \approx 0.4E$ — a fast sanity check. Know any two of
$E$, $G$, $\nu$ and you have the third.

**What you read off one stress–strain curve** (the standard readout, used in the
Module 4 boss problem but never tabulated in a lesson):

| Quantity | From the curve | Formula |
|---|---|---|
| Young's modulus $E$ | slope of the straight elastic part | $\sigma/\varepsilon$ |
| Yield strength $\sigma_y$ | 0.2 % offset intercept | $F_y/A_0$ |
| Ultimate tensile strength (UTS) | the **peak** stress | $F_{\max}/A_0$ |
| Ductility, percent elongation | how far it stretched before fracture | $\dfrac{L_f - L_0}{L_0}\times100$ |
| Ductility, percent reduction of area | how far it necked | $\dfrac{A_0 - A_f}{A_0}\times100$ |
| Toughness | **area under the whole curve** | energy per unit volume |
| Resilience | area under the *elastic* part only | $\tfrac{\sigma_y^2}{2E}$ |

Necking begins at the UTS: past the peak the load falls because the section is
shrinking faster than the material is hardening.

**Property data used across the course:**

| Material | $E$ (GPa) | $G$ (GPa) | $\nu$ | $\rho$ (Mg/m³) | $K_{IC}$ (MPa$\sqrt{\mathrm m}$) |
|---|---|---|---|---|---|
| Steel | 200–210 | ~80 | 0.30 | 7.8 | ~50 |
| Aluminum alloy | 70 | 26 | 0.33 | 2.7 | ~24 |
| Copper (random polycrystal) | 110 | 48 | 0.34 | 8.9 | — |
| Copper single crystal | 192 along $\langle111\rangle$, 67 along $\langle100\rangle$ | | | | |
| Titanium alloy | 115 | — | — | 4.5 | ~44 |
| CFRP | 100 | — | — | 1.6 | — |
| Diamond / ceramics | ~1000 / 300–400 | — | — | 3.5 | 1–5 (brittle) |
| Polymers | 1–5 | — | — | ~1.0 | — |

*From* [4.1](lessons/04-01-elastic-behavior-stress-strain.md), [4.4](lessons/04-04-failure-fracture-fatigue-creep.md), [5.3](lessons/05-03-materials-classes-selection.md)

### Schmid's law

$$\tau_R = \sigma\cos\phi\cos\lambda, \qquad m = \cos\phi\cos\lambda \le \tfrac12, \qquad \text{slip when } \tau_R \ge \tau_{\mathrm{CRSS}}$$

Get the two cosines from **dot products** of lattice vectors — never by assuming
the angles are related:

$$\cos\phi = \frac{\mathbf t\cdot\mathbf n}{|\mathbf t||\mathbf n|}, \qquad \cos\lambda = \frac{\mathbf t\cdot\mathbf b}{|\mathbf t||\mathbf b|}$$

with $\mathbf t$ the tensile axis, $\mathbf n$ the slip-plane normal (which in a
cubic crystal is just the plane's own indices), and $\mathbf b$ the slip direction.
Since $\mathbf n \perp \mathbf b$, the only general constraint is
$\cos^2\phi + \cos^2\lambda \le 1$. A large $m$ is the **soft** orientation
($\sigma_y = \tau_{\mathrm{CRSS}}/m$); $m = 0$ locks a system out at any stress. If
the handed system gives $m = 0$, check the rest of the family — the same $\{111\}$
plane hosts other $\langle110\rangle$ directions.

*From* [4.2](lessons/04-02-plastic-deformation-schmid.md)

### Strengthening mechanisms — and what each costs

Every one of them is the same move: **put obstacles in the path of gliding
dislocations**, raising $\tau_{\mathrm{CRSS}}$. What differs is the obstacle and the
price.

| Mechanism | Obstacle | Knob | Strength | Ductility | Toughness | Undone by |
|---|---|---|---|---|---|---|
| **Grain refinement** (Hall–Petch) | grain boundaries | grain diameter $d$ | ↑ as $d^{-1/2}$ | ↑ (or flat) | ↑ — finer grains blunt cracks | grain growth if overheated |
| **Solid-solution** | solute strain fields | concentration $c$ | ↑ as $\sqrt c$ | ↓ modest | ↓ modest | nothing (it is chemistry) |
| **Strain hardening** (cold work) | tangled dislocations | %CW | ↑↑ | ↓↓ | ↓↓ | recrystallization anneal |
| **Precipitation / age hardening** | second-phase particles | ageing time and temperature | ↑↑ | ↓ | ↓ | over-ageing (particles coarsen) |
| **Quench to martensite** | trapped carbon, strained BCT lattice | cooling rate | ↑↑↑ (hardness) | ↓↓↓ | ↓↓↓ | tempering (deliberately) |

$$\text{Hall–Petch:}\quad \sigma_y = \sigma_0 + k_y\,d^{-1/2} \qquad\qquad \text{solid solution:}\quad \Delta\sigma_y \propto \sqrt c$$

**Grain refinement is the only free lunch** — it raises strength *and* toughness.
Everything else buys strength with ductility. Note also that **none of them change
$E$**: stiffness belongs to bonding and packing, not to microstructure.

Annealing sequence on reheating cold-worked metal:
**recovery** (stress relief, little strength change) → **recrystallization** (new
strain-free grains; strength drops, ductility returns) → **grain growth** (grains
coarsen; a little strength comes back via Hall–Petch).

*From* [4.3](lessons/04-03-strengthening-mechanisms.md), *precipitation from* [3.3](lessons/03-03-transformations-ttt-heat-treatment.md)

### Failure: three clocks

| Failure mode | Trigger | Governing relation |
|---|---|---|
| **Fracture** | a **flaw** under a single overload | $K = Y\sigma\sqrt{\pi a} \ge K_{IC}$ |
| **Fatigue** | **cycles**, at stresses below yield | S–N curve; safe forever only below $S_e$ (steels only) |
| **Creep** | **time at temperature**, above ~$0.4\,T_m$ | $\dot\varepsilon_s = A\sigma^n e^{-Q_c/RT}$ |

$$\text{stress concentration:}\quad \sigma_m = \sigma\left(1 + 2\sqrt{\frac{a}{\rho_t}}\right) \qquad\qquad \text{critical crack:}\quad a_c = \frac1\pi\left(\frac{K_{IC}}{Y\sigma}\right)^{2}$$

Because $a_c \propto K_{IC}^2$, **doubling the toughness quadruples the survivable
crack.** A sharp tip ($\rho_t \to 0$) sends the concentration factor toward
infinity — which is why you arrest a crack by drilling a round hole at its tip.
Griffith's energy balance (elastic energy released versus new surface energy
created) is what $K_{IC}$ packages into one measurable number.

Fatigue life = **initiation** (a crack nucleates at a surface stress raiser) +
**propagation** (it grows per cycle until $K \ge K_{IC}$ and the rest goes at once).

Creep stages: **primary** (slope decreasing as it work-hardens) → **secondary**
(steady state — the design number) → **tertiary** (accelerating, voids and necking)
→ rupture. Time-to-rupture and temperature collapse onto one line via the
**Larson–Miller parameter** $\mathrm{LMP} = T(C + \log_{10}t_r)$ with $C \approx 20$,
so a short hot test predicts long service life.

*From* [4.4](lessons/04-04-failure-fracture-fatigue-creep.md)

### Electronic and optical behaviour

| Class | Where $E_F$ sits | $E_g$ | $d\sigma/dT$ |
|---|---|---|---|
| **Metal** | inside a band (partly filled, or two bands overlap) | 0 | **negative** — $n$ fixed, phonons cut $\mu$ |
| **Semiconductor** | in a small gap | ~0.1–3 eV | **positive** — heat frees more carriers than it costs in mobility |
| **Insulator** | in a large gap | $\gtrsim 4$ eV | negligible either way |

The sign of $d\sigma/dT$ is the fastest way to tell a metal from a semiconductor.

$$\sigma = ne\mu \ (\text{one carrier}) \qquad \sigma = n e\mu_e + p e\mu_h \ (\text{two}) \qquad \sigma \approx N_d e\mu_e \ (\text{n-type extrinsic})$$
$$h\nu = \frac{hc}{\lambda} \ge E_g \iff \text{absorbed}, \qquad \lambda_{\text{edge}} = \frac{hc}{E_g}, \qquad hc = 1240\ \mathrm{eV\cdot nm}$$

Thermal response: $\Delta L = \alpha L_0\Delta T$, and the *reason* expansion exists
at all is the **asymmetry** of the bond-energy well — a perfectly parabolic well
would give none. Heat is carried by **free electrons in metals** (so electrical and
thermal conductivity track each other) and by **phonons in ceramics** (good heat
conduction with no charge conduction).

**Gaps used in this course:** Si 1.11 eV (absorption edge 1117 nm — opaque to
visible, transparent in the deeper infrared), GaAs 1.42 eV (edge 873 nm, a
near-infrared LED), diamond 5.5 eV (transparent, insulating). Copper for reference:
$n = 8.5\times10^{28}\ \mathrm{m^{-3}}$, $\mu = 4.3\times10^{-3}\ \mathrm{m^2V^{-1}s^{-1}}$,
$\sigma \approx 6\times10^{7}$ S/m.

*From* [5.1](lessons/05-01-electronic-properties-band-picture.md) *and* [5.2](lessons/05-02-semiconductors-optics-thermal.md)

### The four materials classes

| Class | Bond | Why it behaves that way | Signature properties |
|---|---|---|---|
| **Metals** | metallic (electron sea) | non-directional → dislocations glide; free electrons | tough, ductile, dense, conductive; moderate–high $E$ |
| **Ceramics** | ionic / covalent | directional and charged → dislocations locked | hard, stiff, high-melting, **brittle**; usually insulating |
| **Polymers** | covalent chains + van der Waals between them | the weak secondary bond is the weak link | light, compliant, low-melting, formable |
| **Composites** | two classes together | stiff fibre + light matrix | tunable: high $E$ and strength at low $\rho$ |

*From* [5.3](lessons/05-03-materials-classes-selection.md) *and* [1.1](lessons/01-01-bonding-energy-well.md)

### Material indices

$$M_{\text{tie}} = \frac{E}{\rho}, \qquad M_{\text{beam}} = \frac{E^{1/2}}{\rho}, \qquad M_{\text{strong beam}} = \frac{\sigma_y^{2/3}}{\rho}$$

Maximize $M$ to minimize mass; for equal performance, mass scales as $1/M$. The
fractional powers come from geometry: a beam's bending stiffness goes as $b^4$
while its mass goes as $b^2$, so eliminating the free variable leaves $E^{1/2}$
behind; a tie's stiffness and mass both scale linearly in area, so $E$ survives
whole.

**Workflow:** function → objective → constraint → index. On an Ashby chart with
$\log E$ against $\log\rho$, a contour $E^{1/n}/\rho = C$ is a **straight line of
slope $n$** ($n = 2$ for the beam index); slide it up and to the left and the last
family it touches wins.

*From* [5.3](lessons/05-03-materials-classes-selection.md)

### Constants and units

| Constant | Value | Where it's used |
|---|---|---|
| $N_A$ | $6.022\times10^{23}$ /mol | theoretical density |
| $k$ (Boltzmann) | $8.62\times10^{-5}$ eV/K | vacancy fraction, carrier statistics |
| $R$ (gas constant) | $8.314$ J·mol⁻¹K⁻¹ | Arrhenius diffusion, creep |
| $e$ | $1.602\times10^{-19}$ C | conductivity |
| $hc$ | $1240$ eV·nm | absorption edge |
| 1 eV | $1.602\times10^{-19}$ J | converting formation and line energies |
| $k_BT$ at 300 K | $\approx0.026$ eV | judging whether a gap is thermally crossable |

**Unit habits that prevent most errors:** temperature in **kelvin** inside any
exponential; lattice parameter in **cm** before cubing for a density; $Q$ in eV
pairs with $k$, $Q$ in J/mol pairs with $R$; $1\ \mathrm{GPa} = 10^{9}$ Pa and
$1\ \mathrm{MPa} = 10^{6}$ Pa; Hall–Petch's $k_y$ and $d$ must share a length unit.

## Assumed, not taught here

This is a Tier 1 course, so it derives most of what it uses — but it leans on the
following without proof. Each row points at the course that does the derivation.

| Fact | Where it's taught |
|---|---|
| First and second derivative test (finding $r_0$ and confirming it's a minimum) | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Taylor expansion about a minimum (why every well bottom is a parabola) | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| The spring law $F = kx$ and the universal harmonic well | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Dot products and direction cosines (the whole engine of Schmid's law) | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md), [1.1](../linalg-refresher/lessons/01-01-vectors-span-linear-combinations.md) |
| Ionic vs. covalent bonding, valence, electronegativity (the Hume-Rothery inputs) | [general-chemistry 1.4](../general-chemistry/lessons/01-04-ionic-covalent-bonds-lewis-structures.md), [1.3](../general-chemistry/lessons/01-03-periodic-trends.md) |
| The mole, molar mass, and Avogadro's number | [general-chemistry 2.1](../general-chemistry/lessons/02-01-mole-molar-mass-formulas.md) |
| Where the Boltzmann factor $e^{-Q/kT}$ comes from | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| Entropy, and why free energy (not energy) is minimized — the reason vacancies exist at equilibrium | [thermodynamics-physics 2.3](../thermodynamics-physics/lessons/02-03-entropy.md), [3.1](../thermodynamics-physics/lessons/03-01-thermodynamic-potentials.md) |
| Gibbs energy minimization behind the phase rule and phase coexistence | [thermodynamics-physics 3.3](../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md) |
| Solving the diffusion PDE, and where the $\operatorname{erf}$ solution comes from | [heat-transfer 2.2](../heat-transfer/lessons/02-02-semi-infinite-solid.md) (same equation, temperature instead of concentration) |
| Fourier's law of heat conduction, the twin of Fick's first law | [heat-transfer 1.1](../heat-transfer/lessons/01-01-three-modes-fouriers-law.md) |
| The full tensile-test readout: UTS, percent elongation, toughness as area under the curve, factor of safety | [mechanics-of-materials 1.2](../mechanics-of-materials/lessons/01-02-strain-tension-test.md) |
| Multiaxial Hooke's law and thermal stress $\sigma = E\alpha\Delta T$ | [mechanics-of-materials 1.5](../mechanics-of-materials/lessons/01-05-thermal-stress-poisson.md) |
| Second moment of area $I$, and bending stiffness scaling as $b^4$ (the beam index) | [statics 4.3](../statics/lessons/04-03-second-moment-of-area-parallel-axis.md), [mechanics-of-materials 2.4](../mechanics-of-materials/lessons/02-04-flexure-formula.md) |
| Ohm's law, resistivity, and conductivity as a material property | [circuits 1.2](../circuits/lessons/01-02-ohms-law-equivalent-resistance.md) |
| Photon energy $E = h\nu$ and the quantization of atomic levels | [quantum-mechanics 1.1](../quantum-mechanics/lessons/01-01-why-quantum.md) |
| The Pauli exclusion principle (why atomic levels split into bands) | [quantum-mechanics 5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Bragg's law and X-ray diffraction — what actually measures $d_{hkl}$ and $a$ | [condensed-matter 1.4](../condensed-matter/lessons/01-04-xray-diffraction-bragg.md) |
| Phonons: where lattice vibrations come from and why they scatter electrons | [condensed-matter 2.3](../condensed-matter/lessons/02-03-phonons-quantization.md) |
| Where bands and gaps actually come from (Bloch states, dispersion, density of states) | [condensed-matter 3.6](../condensed-matter/lessons/03-06-bands-zones-dos.md), [3.7](../condensed-matter/lessons/03-07-metals-insulators-semiconductors.md) |

## Pitfalls

### Counting atoms and computing densities

- A corner atom is $\tfrac18$ of an atom, not one — miscounting $n$ is the single most common density error and can be off by a factor of 4. *([1.2](lessons/01-02-crystal-structures-unit-cells.md))*
- Convert $a$ to **cm before cubing**; leaving it in nm throws the density off by $10^{21}$, because $A$ is grams per mole. *([1.2](lessons/01-02-crystal-structures-unit-cells.md))*
- "Cubic" doesn't mean full: even the tightest packing leaves 26 % void — which is exactly where interstitials like carbon live. *([1.2](lessons/01-02-crystal-structures-unit-cells.md))*

### Indices and geometry

- Planes use the **reciprocals** of the intercepts, never the intercepts themselves — that is what makes a whole family of parallel planes share one label. *([1.3](lessons/01-03-miller-indices-directions-planes.md))*
- $[110]$ is a direction, $(110)$ is a plane. They coincide as normal-and-plane only in **cubic** crystals; don't carry that habit elsewhere. *([1.3](lessons/01-03-miller-indices-directions-planes.md))*
- Slide a plane off the origin before reading intercepts — a zero intercept gives an infinite index. *([1.3](lessons/01-03-miller-indices-directions-planes.md))*
- $\phi$ and $\lambda$ do **not** add to 90°: both are measured from the tensile axis, but to two different (mutually perpendicular) directions. Compute each with its own dot product. *([4.2](lessons/04-02-plastic-deformation-schmid.md))*

### Structure vs. microstructure — words that get blurred

- **Grain ≠ phase.** Every grain in a pure metal is the same substance and lattice; only the orientation differs. One phase can be millions of grains. *([1.4](lessons/01-04-order-disorder-grains.md))*
- **Microconstituent ≠ phase.** Pearlite and "primary $\alpha$" are recognizable *regions*, not phases; primary $\alpha$ and eutectic $\alpha$ are chemically identical and differ only in morphology (blocky vs. lamellar) — which is exactly why they behave differently. *([3.2](lessons/03-02-eutectics-microstructure.md), [3.3](lessons/03-03-transformations-ttt-heat-treatment.md))*
- **Amorphous ≠ randomly packed.** A glass keeps tight *short-range* order; what it lacks is long-range periodicity. It is a frozen liquid, not a powder. *([1.4](lessons/01-04-order-disorder-grains.md))*
- A grain boundary is **not a gap or a crack** — atoms are densely bonded across it, just imperfectly positioned. It has energy, not empty space. *([2.3](lessons/02-03-interfaces-grain-boundaries.md))*

### Energy wells and stiffness

- Depth and curvature are different numbers: **depth sets the melting point, curvature sets the modulus.** Two wells can be equally deep and differently curved. *([1.1](lessons/01-01-bonding-energy-well.md), [4.1](lessons/04-01-elastic-behavior-stress-strain.md))*
- Equilibrium is where the **slope** is zero, not where the energy is zero — $U = 0$ is the unbound far-apart reference. *([1.1](lessons/01-01-bonding-energy-well.md))*
- The minus sign in $F = -dU/dr$ is the restoring mechanism, not decoration. *([1.1](lessons/01-01-bonding-energy-well.md))*
- $E$ is **stiffness, not strength**, and alloying or heat treatment barely moves it — all steels sit near 200 GPa. The Module 4 tricks raise strength, not stiffness. *([4.1](lessons/04-01-elastic-behavior-stress-strain.md), [4.3](lessons/04-03-strengthening-mechanisms.md))*
- Not every solid expands on heating: crossing into a *denser* polymorph (iron BCC→FCC at 912 °C) contracts it by roughly 8 %. *([1.4](lessons/01-04-order-disorder-grains.md))*

### Defects

- A perfect crystal is **not** the equilibrium state above absolute zero: configurational entropy makes some vacancies free-energy-favourable. *([2.1](lessons/02-01-point-defects-solid-solutions.md))*
- Match energy units to the constant — eV with $k$, J/mol with $R$ — and use kelvin, never Celsius, in any exponential. *([2.1](lessons/02-01-point-defects-solid-solutions.md), [2.5](lessons/02-05-diffusion-ii-transient-arrhenius.md))*
- A dislocation is a **line**, not a missing atom; its signature is the closure failure of a Burgers circuit. And no atom travels far when it glides — bonds re-form just behind the front. It is a wave of misregistry, not a projectile. *([2.2](lessons/02-02-dislocations-plastic-flow.md))*
- Edge and screw are two ends of one continuum on the *same* line; what changes along the line is the angle between $\mathbf b$ and $\boldsymbol\xi$, never $\mathbf b$ itself. *([2.2](lessons/02-02-dislocations-plastic-flow.md))*
- More misorientation does not always mean more energy: Read–Shockley saturates past ~15°, and a coherent twin can be far *lower* than a random low-angle boundary. *([2.3](lessons/02-03-interfaces-grain-boundaries.md))*
- Small size makes an interstitial *possible*, not automatic — the host's holes must actually fit it, and a solute that fails the 15 % rule may simply form a second phase instead. *([2.1](lessons/02-01-point-defects-solid-solutions.md))*

### Diffusion

- The minus sign in Fick's first law is not a sign on the answer — it is what makes atoms go **downhill**. *([2.4](lessons/02-04-diffusion-i-ficks-first-law.md))*
- The straight-line profile is a *consequence* of steady state through a flat plate with constant $D$, not a law. Transients curve; shells go logarithmic. *([2.4](lessons/02-04-diffusion-i-ficks-first-law.md))*
- Flux and concentration are different things: a region can be rich in a species yet have zero flux, because a flat profile has no gradient. *([2.4](lessons/02-04-diffusion-i-ficks-first-law.md))*
- Fick's **second** law responds to **curvature**, not slope — a constant-gradient profile flows steadily and changes not at all. *([2.5](lessons/02-05-diffusion-ii-transient-arrhenius.md))*
- Depth grows as $\sqrt{Dt}$: doubling the case depth costs **four times** the soak, not twice. *([2.5](lessons/02-05-diffusion-ii-transient-arrhenius.md))*

### Phase diagrams

- The two coexisting phases are **not** at the overall composition $C_0$ — only their weighted average is. Reading $C_0$ off as a phase composition is the classic beginner error. *([3.1](lessons/03-01-phase-diagrams-lever-rule.md))*
- Use the arm on the **opposite** side of the fulcrum; the same-side arm gives you the other phase's fraction. Sanity-check with "the fulcrum sits nearer the phase you have more of." *([3.1](lessons/03-01-phase-diagrams-lever-rule.md))*
- Tie lines and the lever rule live **only** inside two-phase regions. In a single-phase field the composition is simply $C_0$. *([3.1](lessons/03-01-phase-diagrams-lever-rule.md))*
- For the **eutectic/pearlite fraction** use the tie line **just above** the invariant temperature; the tie line below gives *total* phases and silently merges primary with eutectic. *([3.2](lessons/03-02-eutectics-microstructure.md), [3.3](lessons/03-03-transformations-ttt-heat-treatment.md))*
- At exactly $C_E$ there is no mushy freezing range — it freezes flat, like a pure metal. The range exists only off-composition. *([3.2](lessons/03-02-eutectics-microstructure.md))*
- Proeutectoid ferrite starts forming when you cross the sloping A₃ boundary, **above** 727 °C; only the leftover austenite waits for the eutectoid. *([3.3](lessons/03-03-transformations-ttt-heat-treatment.md))*
- The diagram gives the **equilibrium** structure only. Martensite is real, useful, and absent from it — always ask how fast it was cooled. *([3.3](lessons/03-03-transformations-ttt-heat-treatment.md))*

### Strength, yielding, and strengthening

- Stress is force **per original area**, not force: the same 30 kN means completely different things to a wire and a bar. *([4.1](lessons/04-01-elastic-behavior-stress-strain.md))*
- A **bigger** Schmid factor means the crystal yields at **lower** applied stress — large $m$ is the soft orientation. *([4.2](lessons/04-02-plastic-deformation-schmid.md))*
- Not every load eventually yields every system: if $m = 0$ that system is geometrically locked out at any stress. Check the whole slip-system family before concluding a crystal can't slip. *([4.2](lessons/04-02-plastic-deformation-schmid.md))*
- In Hall–Petch, $d$ sits under a root in the **denominator**: finer grains give a *larger* $d^{-1/2}$ and higher strength. *([4.3](lessons/04-03-strengthening-mechanisms.md))*
- Cold work is not permanent — an anneal above the recrystallization temperature erases it, which is a tool when you want it and a hazard when a part gets hot in service. *([4.3](lessons/04-03-strengthening-mechanisms.md))*
- Single crystals are not "the strongest form": grain boundaries block dislocations, so a fine-grained polycrystal is usually harder. Single crystals are for *stiffness aiming* and creep resistance. *([1.4](lessons/01-04-order-disorder-grains.md), [2.3](lessons/02-03-interfaces-grain-boundaries.md))*
- Finer grains are not simply "better": more boundary area also means faster diffusion, creep, and corrosion. Stronger at room temperature can mean weaker in a jet engine. *([2.3](lessons/02-03-interfaces-grain-boundaries.md))*

### Failure

- **Stronger is not tougher.** Strength resists the onset of plastic flow; toughness resists a crack running — and most strengthening tricks lower toughness. *([4.4](lessons/04-04-failure-fracture-fatigue-creep.md))*
- Below yield is not automatically safe: cyclic loading grows fatigue cracks with no macroscopic warning, and a constant sub-yield load creeps to rupture at high temperature. *([4.4](lessons/04-04-failure-fracture-fatigue-creep.md))*
- The DBTT is not a fixed material temperature — faster loading, sharper notches, thicker sections, and irradiation all shift it upward. *([4.4](lessons/04-04-failure-fracture-fatigue-creep.md))*
- "Twice as tough" is **four times** the survivable crack, because $K$ carries $\sqrt a$. *([4.4](lessons/04-04-failure-fracture-fatigue-creep.md))*
- Ceramics are hard and stiff but not *strong* in the unqualified sense — they carry huge compressive loads and crack from a tiny flaw in tension. Always ask "strong in which mode?" *([5.3](lessons/05-03-materials-classes-selection.md))*

### Electrons, light, and selection

- An insulator's valence band is completely **full**, not empty — that is precisely the problem, since conduction needs an empty state next door. *([5.1](lessons/05-01-electronic-properties-band-picture.md))*
- Heating helps a semiconductor and hurts a metal: a metal gains no carriers, only scattering. *([5.1](lessons/05-01-electronic-properties-band-picture.md), [5.2](lessons/05-02-semiconductors-optics-thermal.md))*
- In $\sigma = ne\mu$, the carrier density $n$ usually dominates — a metal and a semiconductor can share a mobility and differ by ten-plus orders of magnitude in $n$. *([5.1](lessons/05-01-electronic-properties-band-picture.md))*
- **Low**-energy photons pass through and high-energy ones are absorbed, not the reverse: silicon is opaque to visible light and transparent in the deeper infrared. *([5.2](lessons/05-02-semiconductors-optics-thermal.md))*
- A hole is a genuine mobile positive carrier doing real work, not "no current." *([5.2](lessons/05-02-semiconductors-optics-thermal.md))*
- "Light and stiff" does not mean "pick the stiffest material": for a beam the index is $E^{1/2}/\rho$, which is why CFRP and balsa beat steel per kilogram in bending. *([5.3](lessons/05-03-materials-classes-selection.md))*
- A material index is a property of the **problem**, not of the material. Change function or objective and the ranking reshuffles. *([5.3](lessons/05-03-materials-classes-selection.md))*

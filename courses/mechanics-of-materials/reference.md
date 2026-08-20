# Mechanics of Materials · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Statics hands you an internal force; this course turns it into a stress, a
movement, and a verdict. Every formula below is one of three kinds: **stress =
load × geometry-position / section property** ($P/A$, $Tr/J$, $My/I$, $VQ/It$),
**deformation = load × length / stiffness** ($PL/AE$, $TL/GJ$, $EIv''=M$), or a
**check** (allowable stress, Euler buckling, Tresca/von Mises). The lookup tables
you actually reach for mid-problem — section properties, beam deflections, the
$K$ factors — are all here.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\sigma$ | normal stress — internal force per unit area, **perpendicular** to the cut (MPa) | [1.1](lessons/01-01-normal-shear-stress.md) |
| $\tau$ | shear stress — force per unit area acting **along** the cut (MPa) | [1.1](lessons/01-01-normal-shear-stress.md) |
| $P$, $V$ | internal normal force (tension $+$) and internal shear force, in newtons | [1.1](lessons/01-01-normal-shear-stress.md) |
| $A$, $A_b$ | cross-sectional area; $A_b = d\,t$ is the **projected** bearing area of a pin | [1.1](lessons/01-01-normal-shear-stress.md) |
| $\sigma_b$ | bearing stress — contact pressure a pin presses onto its hole | [1.1](lessons/01-01-normal-shear-stress.md) |
| $\varepsilon$ | normal strain — stretch as a fraction of original length (dimensionless) | [1.2](lessons/01-02-strain-tension-test.md) |
| $\gamma$ | shear strain — how far a right angle opens or closes, in radians | [1.2](lessons/01-02-strain-tension-test.md) |
| $E$ | Young's modulus — slope of the elastic line, the material's **stiffness** (GPa) | [1.2](lessons/01-02-strain-tension-test.md) |
| $\sigma_Y$, $\sigma_u$ | yield strength (0.2 percent offset) and ultimate strength (MPa) | [1.2](lessons/01-02-strain-tension-test.md) |
| $FS$, $\sigma_{\text{allow}}$ | factor of safety, and the working stress it permits | [1.2](lessons/01-02-strain-tension-test.md) |
| $\delta$ | axial elongation (lengthening $+$, shortening $-$), in mm | [1.3](lessons/01-03-axial-deformation.md) |
| $k = AE/L$ | axial stiffness — force per unit stretch; a bar **is** a spring | [1.3](lessons/01-03-axial-deformation.md) |
| $N(x)$ | internal axial force at position $x$ when it varies along the member | [1.3](lessons/01-03-axial-deformation.md) |
| $\gamma_w$ | specific weight (N/m³) — used for a bar stretching under its own weight | [1.3](lessons/01-03-axial-deformation.md) |
| $R_A$, $R_B$ | support reactions in an indeterminate member, found via compatibility | [1.4](lessons/01-04-statically-indeterminate-axial.md) |
| $\alpha$, $\Delta T$ | coefficient of thermal expansion (per $^\circ\mathrm{C}$) and temperature rise | [1.5](lessons/01-05-thermal-stress-poisson.md) |
| $\nu$ | Poisson's ratio — sideways shrink per unit lengthwise stretch ($\approx 0.3$) | [1.5](lessons/01-05-thermal-stress-poisson.md) |
| $G$ | shear modulus — Hooke's law constant in shear, $\tau = G\gamma$ (GPa) | [1.5](lessons/01-05-thermal-stress-poisson.md) |
| $T$, $\phi$ | torque (N·m) and angle of twist (**radians**, always) | [2.1](lessons/02-01-torsion-circular-shafts.md) |
| $J$ | polar second moment of area — torsion's version of $I$ (mm⁴) | [2.1](lessons/02-01-torsion-circular-shafts.md) |
| $c$ | distance from the axis (torsion) or from the neutral axis (bending) to the **extreme** fibre | [2.1](lessons/02-01-torsion-circular-shafts.md), [2.4](lessons/02-04-flexure-formula.md) |
| $GJ$, $EI$ | torsional rigidity and flexural rigidity — the stiffness in each mode | [2.1](lessons/02-01-torsion-circular-shafts.md), [3.1](lessons/03-01-deflection-by-integration.md) |
| $J/c$ | polar section modulus — a shaft's torque capacity per unit allowable stress | [2.2](lessons/02-02-power-transmission-indeterminate-shafts.md) |
| $\omega$, $n$ | angular speed in rad/s, and rotational speed in rev/min (rpm) | [2.2](lessons/02-02-power-transmission-indeterminate-shafts.md) |
| $w(x)$ | distributed load intensity, downward positive (N/m) | [2.3](lessons/02-03-shear-moment-diagrams.md) |
| $M$ | internal bending moment (N·m); **positive $M$ sags** | [2.3](lessons/02-03-shear-moment-diagrams.md) |
| $I$ | second moment of area about the neutral (centroidal) axis (mm⁴) | [2.4](lessons/02-04-flexure-formula.md) |
| $y$ | signed distance from the neutral axis to a fibre, positive **up** | [2.4](lessons/02-04-flexure-formula.md) |
| $S = I/c$ | section modulus — one number for a section's bending capacity (mm³) | [2.4](lessons/02-04-flexure-formula.md) |
| $Q = A'\bar y'$ | first moment of the area *beyond* the cut, about the NA (mm³) | [2.5](lessons/02-05-transverse-shear-stress.md) |
| $t$ | section **width at the level you want $\tau$** (not the widest width) | [2.5](lessons/02-05-transverse-shear-stress.md) |
| $q = VQ/I$ | shear flow — sliding force per unit length the fasteners must hold (N/mm) | [2.5](lessons/02-05-transverse-shear-stress.md) |
| $s$ | fastener spacing along the beam (mm) | [2.5](lessons/02-05-transverse-shear-stress.md) |
| $v(x)$, $v'$ | deflection of the elastic curve, and its slope (rad) | [3.1](lessons/03-01-deflection-by-integration.md) |
| $\theta$ (beams) | slope at a specified point, in radians | [3.2](lessons/03-02-deflection-by-superposition.md) |
| $n$ (beams) | degree of static indeterminacy — reactions minus equilibrium equations | [3.3](lessons/03-03-statically-indeterminate-beams.md) |
| $\Delta$ | known support settlement in a compatibility equation | [3.3](lessons/03-03-statically-indeterminate-beams.md) |
| $\sigma_x,\ \sigma_y,\ \tau_{xy}$ | the three numbers of a plane-stress element on your chosen axes | [4.1](lessons/04-01-plane-stress-transformation.md) |
| $\theta_p$, $\theta_s$ | rotation to the principal planes, and to the maximum-shear planes | [4.1](lessons/04-01-plane-stress-transformation.md) |
| $\sigma_1,\sigma_2,\sigma_3$ | principal stresses, ranked $\sigma_1 \ge \sigma_2 \ge \sigma_3$ | [4.1](lessons/04-01-plane-stress-transformation.md), [4.5](lessons/04-05-yield-failure-criteria.md) |
| $C$, $R$ | Mohr's-circle centre (average normal stress) and radius (max in-plane shear) | [4.2](lessons/04-02-mohrs-circle.md) |
| $\tau_{\text{abs max}}$ | absolute max shear — uses all three principals, including the out-of-plane zero | [4.2](lessons/04-02-mohrs-circle.md) |
| $p$, $r$, $t$ (vessel) | internal pressure, inner radius, wall thickness of a thin-walled vessel | [4.3](lessons/04-03-combined-loadings.md) |
| $\sigma_\theta$, $\sigma_z$ | hoop (circumferential) and longitudinal stress in a vessel wall | [4.3](lessons/04-03-combined-loadings.md) |
| $P_{cr}$ | Euler critical load — where a column goes unstable (N) | [4.4](lessons/04-04-column-buckling.md) |
| $K$, $KL$ | effective-length factor set by the end fixity, and the effective length | [4.4](lessons/04-04-column-buckling.md) |
| $r_g = \sqrt{I/A}$ | radius of gyration — how far the section's area is spread (mm) | [4.4](lessons/04-04-column-buckling.md) |
| $KL/r_g$ | slenderness ratio — the one number that says long-and-thin vs. short-and-stubby | [4.4](lessons/04-04-column-buckling.md) |
| $\sigma_{vm}$, $\sigma_{eq}$ | von Mises stress; any criterion's single equivalent stress (MPa) | [4.5](lessons/04-05-yield-failure-criteria.md) |

*Symbol collisions to watch:* $c$ is the extreme-fibre distance in both torsion and
bending; $t$ is a plate thickness in bearing, a section width in $VQ/It$, and a wall
thickness in vessels; $n$ is rpm in torsion and a count of redundancies in beams.
The lessons write the radius of gyration as $r$; this card uses $r_g$ so it never
collides with a vessel radius.

## Definitions

### Normal stress

The intensity of internal force piercing straight through a cut — what the
material actually feels, not the raw load.

$$\sigma = \lim_{\Delta A \to 0}\frac{\Delta F_\perp}{\Delta A}, \qquad \sigma = \frac{P}{A}\ \text{when uniform}$$

*Introduced:* [1.1](lessons/01-01-normal-shear-stress.md)

### Shear stress

Same idea, but the force **slides along** the cut face instead of piercing it —
scissors, not pulling.

$$\tau = \frac{V}{A}\ \text{(average)}$$

*Introduced:* [1.1](lessons/01-01-normal-shear-stress.md)

### Bearing stress

The contact pressure a pin squeezes onto the hole it sits in, averaged over the
**flattened** (projected) patch, not the curved surface.

$$\sigma_b = \frac{P}{A_b}, \qquad A_b = d\,t$$

*Introduced:* [1.1](lessons/01-01-normal-shear-stress.md)

### Single and double shear

How many planes the load has to cut through. One plane carries everything; two
planes split it — the pin's area is unchanged either way.

$$\text{single: } V = P \qquad\qquad \text{double: } V = \tfrac{P}{2}$$

*Introduced:* [1.1](lessons/01-01-normal-shear-stress.md)

### Complementary shear

A shear stress on one face of a tiny cube forces an equal shear on the
perpendicular face, or the cube would spin. This is why the transverse shear on a
beam's cross-section equals the longitudinal shear that slides its fibres.

*Introduced:* [1.1](lessons/01-01-normal-shear-stress.md), used in [2.5](lessons/02-05-transverse-shear-stress.md)

### Normal strain

Stretch expressed per unit of original length — so a 1 mm growth means something
different on a pin than on a cable.

$$\varepsilon = \frac{\delta}{L} \qquad (\text{dimensionless};\ 1\ \mu\varepsilon = 10^{-6})$$

*Introduced:* [1.2](lessons/01-02-strain-tension-test.md)

### Shear strain

The change in a right angle, in radians — skew rather than stretch. For small
distortions it is the sideways slip divided by the height.

$$\gamma = \frac{\pi}{2} - \theta'$$

*Introduced:* [1.2](lessons/01-02-strain-tension-test.md)

### Hooke's law

In the initial straight stretch of the stress–strain curve, stress is a fixed
multiple of strain, and that multiple is the material's stiffness.

$$\sigma = E\,\varepsilon, \qquad \tau = G\,\gamma$$

*Introduced:* [1.2](lessons/01-02-strain-tension-test.md), shear form in [1.5](lessons/01-05-thermal-stress-poisson.md)

### Young's modulus

The **slope** of the elastic line: how much stress it takes to buy a unit of
strain. Stiffness, not strength — it says how far a part moves, not when it fails.

*Introduced:* [1.2](lessons/01-02-strain-tension-test.md)

### Yield strength

The stress at which permanent deformation sets in. Because the knee is rounded,
it is defined by construction: offset the elastic line by $\varepsilon = 0.002$
($0.2\%$) and take where it crosses the curve.

*Introduced:* [1.2](lessons/01-02-strain-tension-test.md)

### Resilience and toughness

Two areas under the same curve. **Resilience** is the elastic triangle up to yield
(energy the part gives back); **toughness** is the whole area to fracture (energy
including all the plastic work).

$$u_r = \tfrac12\sigma_Y\varepsilon_Y = \frac{\sigma_Y^2}{2E}$$

*Introduced:* [1.2](lessons/01-02-strain-tension-test.md)

### Factor of safety

The margin you leave between the stress the material fails at and the stress you
allow the part to run at.

$$FS = \frac{\sigma_{fail}}{\sigma_{allow}} \quad\Longrightarrow\quad \sigma_{allow} = \frac{\sigma_{fail}}{FS}$$

*Introduced:* [1.2](lessons/01-02-strain-tension-test.md); recomputed from $\sigma_{eq}$ in [4.5](lessons/04-05-yield-failure-criteria.md)

### Axial stiffness

Every axial member is a spring: force is proportional to stretch, with spring
constant $AE/L$. Its inverse is the **flexibility** (compliance).

$$P = k\,\delta, \qquad k = \frac{AE}{L}, \qquad f = \frac{1}{k} = \frac{L}{AE}$$

*Introduced:* [1.3](lessons/01-03-axial-deformation.md)

### Statically indeterminate

More unknown reactions than equilibrium can supply equations for. The deficit is
the **degree of indeterminacy**, and you must supply exactly that many geometric
equations.

$$n = (\text{reactions}) - (\text{independent equilibrium equations})$$

*Introduced:* [1.4](lessons/01-04-statically-indeterminate-axial.md); counted for beams in [3.3](lessons/03-03-statically-indeterminate-beams.md)

### Compatibility condition

The missing equation, supplied by geometry rather than by force balance: the
deformations have to fit the supports. Walls don't move, rigid caps keep two
members the same length, a prop holds a point at zero deflection.

*Introduced:* [1.4](lessons/01-04-statically-indeterminate-axial.md)

### Force (flexibility) method

The three-step recipe that cracks every indeterminate problem in this course:
equilibrium, then a member law ($\delta = PL/AE$, $\phi = TL/GJ$, or a deflection),
then compatibility. Load flows to the **stiffer** path.

*Introduced:* [1.4](lessons/01-04-statically-indeterminate-axial.md); torsion [2.2](lessons/02-02-power-transmission-indeterminate-shafts.md), beams [3.3](lessons/03-03-statically-indeterminate-beams.md)

### Thermal strain

Free expansion: heat a member and every unit of length grows by $\alpha\,\Delta T$.
If nothing constrains it, this costs **zero stress**.

$$\varepsilon_T = \alpha\,\Delta T, \qquad \delta_T = \alpha\,\Delta T\,L$$

*Introduced:* [1.5](lessons/01-05-thermal-stress-poisson.md)

### Poisson's ratio

Pull a bar longer and it gets thinner; the ratio of those two strains is a fixed
material property.

$$\nu = -\frac{\varepsilon_{\text{lat}}}{\varepsilon_{\text{ax}}}, \qquad 0 \le \nu \lesssim 0.5$$

*Introduced:* [1.5](lessons/01-05-thermal-stress-poisson.md)

### Shear modulus

Hooke's constant for skew instead of stretch. For an isotropic material it is not
independent — two of $E,\nu,G$ fix the third.

$$G = \frac{E}{2(1+\nu)}$$

*Introduced:* [1.5](lessons/01-05-thermal-stress-poisson.md)

### Polar second moment of area

How far a circular section's material is spread from the twist axis, weighted by
distance squared — torsion's analogue of the area $A$.

$$J = \int_A r^2\,dA, \qquad J = I_x + I_y \text{ for any section}$$

*Introduced:* [2.1](lessons/02-01-torsion-circular-shafts.md)

### Angle of twist

How far one end of a shaft rotates relative to the other — torsion's mirror of
axial elongation, with $GJ$ playing the role of $AE$. **Always in radians.**

$$\phi = \frac{TL}{GJ}, \qquad \phi = \sum_i \frac{T_i L_i}{G_i J_i}$$

*Introduced:* [2.1](lessons/02-01-torsion-circular-shafts.md)

### Polar section modulus

The geometry group that alone decides how much torque a shaft carries at a given
allowable stress.

$$\frac{J}{c}, \qquad \left(\frac{J}{c}\right)_{\text{solid}} = \frac{\pi d^3}{16}$$

*Introduced:* [2.2](lessons/02-02-power-transmission-indeterminate-shafts.md)

### Sign convention for $V$ and $M$

A positive bending moment **sags** the beam — concave up, tension on the bottom
fibres. Positive shear pushes the left face of a cut up and the right face down.
Every downstream sign (notably $\sigma = -My/I$) depends on this choice.

*Introduced:* [2.3](lessons/02-03-shear-moment-diagrams.md)

### Neutral axis

The layer through a bending beam that neither stretches nor squeezes. In pure
bending it passes through the **centroid** of the cross-section — the only height
where tension above and compression below cancel to zero net axial force.

*Introduced:* [2.4](lessons/02-04-flexure-formula.md)

### Second moment of area

How well a section resists bending, given by how far its area sits from the
neutral axis, squared. The reason depth beats width.

$$I = \int_A y^2\,dA$$

*Introduced:* [2.4](lessons/02-04-flexure-formula.md) (computed in [`statics` 4.3](../statics/lessons/04-03-second-moment-of-area-parallel-axis.md))

### Section modulus

$I$ and $c$ rolled into one number: divide the moment by it and you have the
extreme-fibre stress. Bigger $S$, stronger beam.

$$S = \frac{I}{c}, \qquad \sigma_{\max} = \frac{M}{S}$$

*Introduced:* [2.4](lessons/02-04-flexure-formula.md)

### First moment of area $Q$

How much cross-sectional area lies **beyond** the level you are cutting at, times
how far its centroid sits from the neutral axis. Largest at the NA, zero at the
extreme fibres — which is why shear does the opposite of bending.

$$Q = A'\bar y'$$

*Introduced:* [2.5](lessons/02-05-transverse-shear-stress.md)

### Shear flow

The sliding force per millimetre of beam length that a glue line, nail row, or
weld has to carry to make separate pieces act as one deep beam.

$$q = \frac{VQ}{I}\ (\mathrm{N/mm}), \qquad s = \frac{F_{\text{fastener}}}{q}$$

*Introduced:* [2.5](lessons/02-05-transverse-shear-stress.md)

### Elastic curve

The deflected shape $v(x)$ of the beam's neutral axis, measured positive upward
from the undeformed line. Its curvature is the moment divided by the rigidity.

$$EI\,v''(x) = M(x)$$

*Introduced:* [3.1](lessons/03-01-deflection-by-integration.md)

### Flexural rigidity

The single number $EI$ — material stiffness times section geometry — that decides
how far a beam moves under load. Big $EI$, small sag.

*Introduced:* [3.1](lessons/03-01-deflection-by-integration.md)

### Superposition

Because the governing equations are linear, each load bends the beam as if the
others weren't there, and the deflections (and slopes, and stresses at a point)
simply add.

$$v(x) = v_1(x) + v_2(x)$$

*Introduced:* [3.2](lessons/03-02-deflection-by-superposition.md); stress version in [4.3](lessons/04-03-combined-loadings.md)

### Redundant and released structure

The reaction you choose to delete so that what's left is determinate. The
redundant is then whatever force pushes the released beam's deflection at that
point back to what reality demands (usually zero).

$$\delta_0 + R f = 0 \quad\Longrightarrow\quad R = -\frac{\delta_0}{f}$$

*Introduced:* [3.3](lessons/03-03-statically-indeterminate-beams.md)

### Plane stress

The stress state at a point reduced to three numbers on the axes you happened to
choose — $\sigma_x$, $\sigma_y$, $\tau_{xy}$ — with nothing acting out of plane
(so $\sigma_z = 0$, and that zero is a real principal stress).

*Introduced:* [4.1](lessons/04-01-plane-stress-transformation.md)

### Principal stresses

The largest and smallest normal stresses over all cut angles. They act on the one
pair of perpendicular planes carrying **zero shear**.

$$\sigma_{1,2} = \frac{\sigma_x+\sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^2}$$

*Introduced:* [4.1](lessons/04-01-plane-stress-transformation.md)

### Maximum in-plane shear

The worst shear over all in-plane cut angles — the Mohr radius. It sits $45^\circ$
from the principal planes, and those planes still carry the **average** normal
stress on both faces.

$$\tau_{\max} = R = \frac{\sigma_1-\sigma_2}{2}$$

*Introduced:* [4.1](lessons/04-01-plane-stress-transformation.md)

### Mohr's circle

The whole transformation drawn as one circle in the $(\sigma,\tau)$ plane: every
cut angle is a point on the rim, and a physical rotation of $\theta$ moves you
$2\theta$ around the circle.

$$(\sigma_{x'}-C)^2 + \tau_{x'y'}^2 = R^2$$

*Introduced:* [4.2](lessons/04-02-mohrs-circle.md)

### Absolute maximum shear

The radius of the **largest** of the three Mohr circles, using all three
principals including the out-of-plane $\sigma_3 = 0$. When both in-plane
principals share a sign, this beats the in-plane $\tau_{\max}$.

$$\tau_{\text{abs max}} = \frac{\sigma_{\max}-\sigma_{\min}}{2}$$

*Introduced:* [4.2](lessons/04-02-mohrs-circle.md); governs Tresca in [4.5](lessons/04-05-yield-failure-criteria.md)

### Critical point

The spot on a cross-section where the *combined* stress state is worst. Bending
peaks where transverse shear vanishes and vice versa, so you check candidates —
you never get both maxima at one point.

*Introduced:* [4.3](lessons/04-03-combined-loadings.md)

### Buckling

A **stability** failure, not a strength one: past a critical load a slender
compression member folds sideways with nothing yielded and nothing cracked. It
depends on $E$ and geometry — the material's strength does not appear.

$$P_{cr} = \frac{\pi^2 EI_{\min}}{(KL)^2}$$

*Introduced:* [4.4](lessons/04-04-column-buckling.md)

### Slenderness ratio

One number that classifies a column: effective length over radius of gyration.
Above the transition value it buckles elastically; below it, it yields first.

$$\frac{KL}{r_g}, \qquad r_g = \sqrt{\frac{I}{A}}, \qquad \left(\frac{KL}{r_g}\right)_{\!c} = \pi\sqrt{\frac{E}{\sigma_Y}}$$

*Introduced:* [4.4](lessons/04-04-column-buckling.md)

### Equivalent stress

The one number a yield criterion collapses a multiaxial state into, so it can be
compared against the single $\sigma_Y$ the tension test reports.

$$FS = \frac{\sigma_Y}{\sigma_{eq}}$$

*Introduced:* [4.5](lessons/04-05-yield-failure-criteria.md)

## Formulas and rules

### Units — the identity worth tattooing

Stress is N/m² = pascal, and a pascal is tiny, so engineering runs in megapascals:

$$1\ \mathrm{MPa} = 10^{6}\ \mathrm{Pa} = 1\ \mathrm{N/mm^2}, \qquad 1\ \mathrm{GPa} = 10^{3}\ \mathrm{MPa} = 1\ \mathrm{kN/mm^2}$$

So **newtons over square-millimetres lands directly in MPa.** Pick one system and
carry it all the way:

| Quantity | SI (m) | Engineer's (mm) |
|---|---|---|
| force | N | N (or kN) |
| length | m | mm |
| area $A$ | m² | mm² |
| second moment $I$, $J$ | m⁴ | mm⁴ ($10^6\,\mathrm{mm^4} = 10^{-6}\,\mathrm{m^4}$) |
| moment / torque | N·m | N·mm ($1\ \mathrm{kN\cdot m} = 10^{6}\ \mathrm{N\cdot mm}$) |
| stress | Pa | MPa |
| modulus $E$, $G$ | Pa | MPa ($200\ \mathrm{GPa} = 200{,}000\ \mathrm{MPa}$) |

*From* [1.1](lessons/01-01-normal-shear-stress.md), [2.4](lessons/02-04-flexure-formula.md)

### Typical material properties

Handbook values the lessons use without re-deriving. Round numbers; real design
uses a spec sheet.

| Material | $E$ (GPa) | $G$ (GPa) | $\nu$ | $\alpha$ (per $^\circ\mathrm{C}$) | $\sigma_Y$ (MPa) |
|---|---|---|---|---|---|
| Structural steel | $200$ | $77$ | $0.30$ | $12\times10^{-6}$ | $\approx 250$ |
| Aluminum alloy | $70$ | $26$ | $0.33$ | $23\times10^{-6}$ | $95$–$270$ |
| Copper | $117$ | $\approx 44$ | $0.34$ | $17\times10^{-6}$ | — |

Steel's specific weight is $\gamma_w \approx 77\ \mathrm{kN/m^3}$. Every steel —
mild or high-strength — shares essentially the same $E$, which is why alloy choice
buys a slender column nothing ([4.4](lessons/04-04-column-buckling.md)).

*From* [1.2](lessons/01-02-strain-tension-test.md), [1.5](lessons/01-05-thermal-stress-poisson.md)

### The four stress formulas

Every stress in this course is one of these. All four are "load × position ÷
section property."

| Load | Stress | Where it peaks |
|---|---|---|
| axial $P$ | $\sigma = \dfrac{P}{A}$ | uniform over the section |
| torsion $T$ (circular only) | $\tau = \dfrac{Tr}{J}$, $\ \tau_{\max} = \dfrac{Tc}{J}$ | outer surface; zero on the axis |
| bending $M$ | $\sigma = -\dfrac{My}{I}$, $\ \sigma_{\max} = \dfrac{Mc}{I} = \dfrac{M}{S}$ | extreme fibre; zero at the NA |
| transverse shear $V$ | $\tau = \dfrac{VQ}{It}$ | neutral axis; zero at the extreme fibres |

Solid-circular shortcuts, worth memorising for shafts:

$$\sigma_{\max} = \frac{32M}{\pi d^3}, \qquad \tau_{\max} = \frac{16T}{\pi d^3}$$

*From* [1.1](lessons/01-01-normal-shear-stress.md), [2.1](lessons/02-01-torsion-circular-shafts.md), [2.4](lessons/02-04-flexure-formula.md), [2.5](lessons/02-05-transverse-shear-stress.md)

### Deformation formulas

Same shape every time: **load × length ÷ stiffness.**

| Mode | Deformation | Stiffness | Segmented / varying |
|---|---|---|---|
| axial | $\delta = \dfrac{PL}{AE}$ | $k = \dfrac{AE}{L}$ | $\delta = \sum_i \dfrac{N_i L_i}{A_i E_i}$, or $\displaystyle\int_0^L \frac{N(x)}{A(x)E}\,dx$ |
| torsion | $\phi = \dfrac{TL}{GJ}$ | $\dfrac{GJ}{L}$ | $\phi = \sum_i \dfrac{T_i L_i}{G_i J_i}$ |
| bending | $EI\,v'' = M(x)$ | $EI$ | integrate twice, or superpose the table below |

Self-weight of a prismatic hanging bar (specific weight $\gamma_w$, total weight
$W = \gamma_w A L$): $\ \delta = \dfrac{\gamma_w L^2}{2E} = \dfrac{WL}{2AE}$ — as if
the whole weight acted at midheight. It grows as $L^2$, so it is negligible for
short members and dominant for very long cables.

*From* [1.3](lessons/01-03-axial-deformation.md), [2.1](lessons/02-01-torsion-circular-shafts.md), [3.1](lessons/03-01-deflection-by-integration.md)

### Indeterminate members — the standard splits

| Configuration | Compatibility | Result |
|---|---|---|
| Bar fixed at both ends, load $P$ at $C$ | $\delta_{AC}+\delta_{CB}=0$ | $R_A = P\dfrac{L_{CB}}{L_{AC}+L_{CB}}$ (equal $AE$); in general $R_A/R_B = k_{AC}/k_{CB}$ |
| Two members sharing a load in parallel | $\delta_1 = \delta_2$ | $P_i = P\dfrac{A_iE_i/L_i}{\sum A_jE_j/L_j}$ |
| Shaft fixed at both ends, torque $T_0$ at $C$ | $\phi_{AC} = \phi_{CB}$ | $T_A = T_0\dfrac{(GJ/L)_{AC}}{(GJ/L)_{AC}+(GJ/L)_{CB}}$ |

**Load flows to the stiffer path** — bigger $AE/L$ or $GJ/L$ grabs the larger
share, regardless of which material is "stronger."

*From* [1.4](lessons/01-04-statically-indeterminate-axial.md), [2.2](lessons/02-02-power-transmission-indeterminate-shafts.md)

### Thermal and multiaxial elasticity

Free growth costs nothing; blocked growth costs $E\alpha\,\Delta T$:

$$\varepsilon_{\text{total}} = \alpha\,\Delta T + \frac{\sigma}{E} = 0 \quad\Longrightarrow\quad \sigma = -E\,\alpha\,\Delta T$$

Heating a fully blocked bar puts it in **compression**; cooling puts it in
tension. The length and the area both drop out of the *stress* (the reaction
*force* is $F = \sigma A$). With a gap $g$, only the growth beyond the gap is
constrained: $\sigma = E(\delta_T - g)/L$, and zero if $\delta_T \le g$.

Biaxial Hooke's law (each stress strains its own axis directly and the other one
through Poisson):

$$\varepsilon_x = \frac{1}{E}\left(\sigma_x - \nu\sigma_y\right), \qquad \varepsilon_y = \frac{1}{E}\left(\sigma_y - \nu\sigma_x\right), \qquad G = \frac{E}{2(1+\nu)}$$

*From* [1.5](lessons/01-05-thermal-stress-poisson.md)

### Section properties

The lookup table the whole course leans on. $I$ and $S$ are about the horizontal
**centroidal** axis; $h$ is always the dimension in the bending direction.

| Section | $A$ | Centroid | $I$ | $S = I/c$ | $J$ | $r_g=\sqrt{I/A}$ |
|---|---|---|---|---|---|---|
| Rectangle $b \times h$ | $bh$ | mid-depth | $\dfrac{bh^3}{12}$ | $\dfrac{bh^2}{6}$ | — | $\dfrac{h}{\sqrt{12}} \approx 0.289h$ |
| Hollow rectangle (concentric) | $bh - b_ih_i$ | mid-depth | $\dfrac{bh^3 - b_ih_i^3}{12}$ | $I/c$, $c = h/2$ | — | $\sqrt{I/A}$ |
| Solid circle $d$ | $\dfrac{\pi d^2}{4}$ | centre | $\dfrac{\pi d^4}{64}$ | $\dfrac{\pi d^3}{32}$ | $\dfrac{\pi d^4}{32}$ | $\dfrac{d}{4}$ |
| Hollow circle $d_o,d_i$ | $\dfrac{\pi(d_o^2-d_i^2)}{4}$ | centre | $\dfrac{\pi(d_o^4-d_i^4)}{64}$ | $I/c_o$ | $\dfrac{\pi(d_o^4-d_i^4)}{32}$ | $\dfrac{\sqrt{d_o^2+d_i^2}}{4}$ |
| Triangle, base $b$, height $h$ | $\dfrac{bh}{2}$ | $h/3$ above base | $\dfrac{bh^3}{36}$ | $I/c$ | — | $\dfrac{h}{\sqrt{18}}$ |

**Composite / built-up sections.** Locate the centroid first
($\bar y = \sum A_i\bar y_i / \sum A_i$, holes count as negative area), then use the
**parallel-axis theorem** about that axis:

$$I = \sum_i \left(\bar I_i + A_i d_i^2\right)$$

where $d_i$ is the distance from piece $i$'s own centroid to the section's neutral
axis. The $A_id_i^2$ terms are usually most of the answer.

For a rectangle, $Q$ and $\tau$ at height $y$ above the NA ($c = h/2$):

$$Q(y) = \frac{b}{2}\left(c^2 - y^2\right), \qquad \tau(y) = \tau_{\max}\left[1-\left(\frac{y}{c}\right)^2\right]$$

$$\tau_{\max}^{\text{rect}} = \frac{3V}{2A} = 1.5\,\frac{V}{A}, \qquad \tau_{\max}^{\text{circle}} = \frac{4V}{3A}$$

*From* [2.1](lessons/02-01-torsion-circular-shafts.md), [2.4](lessons/02-04-flexure-formula.md), [2.5](lessons/02-05-transverse-shear-stress.md), [`statics` 4.3](../statics/lessons/04-03-second-moment-of-area-parallel-axis.md)

### Power transmission

$$P = T\omega, \qquad \omega = 2\pi f = \frac{2\pi n}{60}\ \mathrm{rad/s} \quad\Longrightarrow\quad T = \frac{60P}{2\pi n}$$

Sizing a solid shaft to an allowable shear stress:

$$\frac{J}{c} = \frac{\pi d^3}{16} \ge \frac{T}{\tau_{\text{allow}}} \quad\Longrightarrow\quad d \ge \left(\frac{16T}{\pi\,\tau_{\text{allow}}}\right)^{1/3}$$

The required diameter grows only as the **cube root** of the torque. Always round
a required diameter (or depth, or area) **up**.

*From* [2.2](lessons/02-02-power-transmission-indeterminate-shafts.md)

### Load, shear, and moment relations

$$\frac{dV}{dx} = -w(x), \qquad \frac{dM}{dx} = V(x)$$

$$V_2 - V_1 = -(\text{area under the load}), \qquad M_2 - M_1 = (\text{area under the shear})$$

| Loading over a stretch | $V$ | $M$ |
|---|---|---|
| none ($w=0$) | constant | straight line |
| uniform $w$ | linear | parabola |
| point load $P$ down | **jumps down** by $P$ | continuous, kinks |
| applied couple | continuous | **jumps** by the couple |

**$M$ is stationary where $V = 0$** — that's where you read $M_{\max}$. Under a
point load $V$ jumps *through* zero (peak sits at the load); under distributed
load it crosses on a slope (solve $V(x)=0$).

*From* [2.3](lessons/02-03-shear-moment-diagrams.md)

### Standard beam results — reactions, moments, deflections

Constant $EI$; $\delta$ is a magnitude in the load's direction, $\theta$ a slope in
radians.

*Cantilever, length $L$, values at the free tip:*

| Load | $M_{\max}$ (at the wall) | $\delta_{\text{tip}}$ | $\theta_{\text{tip}}$ |
|---|---|---|---|
| Tip load $P$ | $PL$ | $\dfrac{PL^3}{3EI}$ | $\dfrac{PL^2}{2EI}$ |
| UDL $w$, full span | $\dfrac{wL^2}{2}$ | $\dfrac{wL^4}{8EI}$ | $\dfrac{wL^3}{6EI}$ |
| End moment $M$ | $M$ | $\dfrac{ML^2}{2EI}$ | $\dfrac{ML}{EI}$ |
| Load $P$ at $a$ from the wall | $Pa$ | $\dfrac{Pa^2}{6EI}(3L-a)$ | $\dfrac{Pa^2}{2EI}$ |

*Simply supported, span $L$:*

| Load | $M_{\max}$ | Midspan $\delta$ | End slope $\theta$ |
|---|---|---|---|
| Central load $P$ | $\dfrac{PL}{4}$ at midspan | $\dfrac{PL^3}{48EI}$ | $\dfrac{PL^2}{16EI}$ |
| UDL $w$, full span | $\dfrac{wL^2}{8}$ at midspan | $\dfrac{5wL^4}{384EI}$ | $\dfrac{wL^3}{24EI}$ |
| Load $P$ at $a$ from left, $b=L-a$ | $\dfrac{Pab}{L}$ at the load | $\dfrac{Pb(3L^2-4b^2)}{48EI}$, $b \le a$ | — |
| End moment $M$ at one end | $M$ at that end | $\dfrac{ML^2}{16EI}$ | $\dfrac{ML}{3EI}$ near, $\dfrac{ML}{6EI}$ far |

For an off-centre point load the true maximum sits nearer the load, at
$x = \sqrt{(L^2-b^2)/3}$ from the far support, with
$\delta_{\max} = \dfrac{Pb\,(L^2-b^2)^{3/2}}{9\sqrt3\,L\,EI}$ — but the midspan value
above is within a couple of percent and is what you superpose.

*Indeterminate standards (derived by the force method):*

| Beam | Reactions | $M_{\max}$ | $v_{\max}$ |
|---|---|---|---|
| Propped cantilever, UDL $w$ | $R_B = \dfrac{3wL}{8}$, $R_A = \dfrac{5wL}{8}$ | $\dfrac{wL^2}{8}$ hogging at the wall (span peak $\dfrac{9wL^2}{128}$ at $\tfrac58 L$) | $\approx\dfrac{wL^4}{185EI}$ at $0.578L$ |
| Propped cantilever, central $P$ | $R_B = \dfrac{5P}{16}$, $R_A = \dfrac{11P}{16}$ | $\dfrac{3PL}{16}$ hogging at the wall | — |
| Fixed–fixed, UDL $w$ | $R = \dfrac{wL}{2}$ each | $\dfrac{wL^2}{12}$ hogging at each end ($\dfrac{wL^2}{24}$ sagging at midspan) | $\dfrac{wL^4}{384EI}$ |
| Fixed–fixed, central $P$ | $R = \dfrac{P}{2}$ each | $\dfrac{PL}{8}$ at ends and midspan | $\dfrac{PL^3}{192EI}$ |

*From* [2.3](lessons/02-03-shear-moment-diagrams.md), [3.1](lessons/03-01-deflection-by-integration.md), [3.2](lessons/03-02-deflection-by-superposition.md), [3.3](lessons/03-03-statically-indeterminate-beams.md)

### Boundary conditions for double integration

| Support | Geometric condition |
|---|---|
| Pin or roller | $v = 0$ |
| Fixed (built-in) end | $v = 0$ **and** $v' = 0$ |
| Free end | none geometric — instead $M = 0$ (and $V = 0$) |
| Symmetry axis | $v' = 0$ (substitutes for the far support) |
| Piecewise break | $v$ and $v'$ continuous across it |

The chain, if the load form makes another end easier to start from:

$$EI\,v'' = M(x), \qquad EI\,v''' = V(x), \qquad EI\,v'''' = -w(x)$$

*From* [3.1](lessons/03-01-deflection-by-integration.md)

### The force method for beams

1. Count $n = (\text{reactions}) - 2$ for a planar beam under transverse loads.
2. Pick $n$ redundants; delete them to leave a stable determinate **released beam**.
3. Compute $\delta_0$ at each released point under the real load (table above).
4. Compute $f$ = deflection there per unit redundant.
5. **Compatibility:** $\delta_0 - Rf = \Delta$, where $\Delta$ is the known support
   movement ($0$ if the support holds firm). Solve for $R$.
6. Recover the rest by equilibrium, then build $V(x)$, $M(x)$, $v(x)$ as usual.

For a *uniform* indeterminate beam the reactions are independent of $EI$ — it
cancels. It stops cancelling the moment a support settles or $EI$ varies.

*From* [3.3](lessons/03-03-statically-indeterminate-beams.md)

### Stress transformation

Rotate the axes by $\theta$ (counterclockwise positive):

$$\sigma_{x'} = \frac{\sigma_x+\sigma_y}{2} + \frac{\sigma_x-\sigma_y}{2}\cos 2\theta + \tau_{xy}\sin 2\theta$$

$$\tau_{x'y'} = -\frac{\sigma_x-\sigma_y}{2}\sin 2\theta + \tau_{xy}\cos 2\theta$$

$$\sigma_{1,2} = C \pm R, \qquad C = \frac{\sigma_x+\sigma_y}{2}, \qquad R = \sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^2}$$

$$\tan 2\theta_p = \frac{2\tau_{xy}}{\sigma_x-\sigma_y}, \qquad \tau_{\max} = R = \frac{\sigma_1-\sigma_2}{2}, \qquad \theta_s = \theta_p \pm 45^\circ$$

**Invariant check, use it every time:**
$\ \sigma_x+\sigma_y = \sigma_1+\sigma_2 = 2C$.

On the max-shear planes the normal stress is $C$, **not** zero. Only the principal
planes are shear-free.

*From* [4.1](lessons/04-01-plane-stress-transformation.md)

### Mohr's circle — the procedure

1. Compute $C = \tfrac{\sigma_x+\sigma_y}{2}$ and
   $R = \sqrt{\left(\tfrac{\sigma_x-\sigma_y}{2}\right)^2+\tau_{xy}^2}$.
2. Plot $X = (\sigma_x,\ \tau_{xy})$ and $Y = (\sigma_y,\ -\tau_{xy})$, taking $\tau$
   **positive downward** so circle rotations run the same way as body rotations.
3. $X$ and $Y$ are a diameter; the circle crosses the axis at $\sigma_{1,2} = C \pm R$.
4. Top/bottom of the circle: $\tau_{\max} = R$, with normal stress $C$.
5. Angles on the circle are $2\theta$ — **halve** before orienting the element.
6. Add the third principal $\sigma_3 = 0$ and take
   $\tau_{\text{abs max}} = \tfrac12(\sigma_{\max}-\sigma_{\min})$ over all three.

| Sign of the in-plane principals | Governing circle |
|---|---|
| opposite signs ($\sigma_1 > 0 > \sigma_2$) | in-plane wins: $\tau_{\text{abs max}} = R$ |
| same sign (e.g. a pressure vessel) | out-of-plane wins: $\tau_{\text{abs max}} = \tfrac12\lvert\sigma_{\max}\rvert > R$ |

Special states worth recognising instantly:

| State | $C$ | $R$ | Principals |
|---|---|---|---|
| Uniaxial $\sigma$ | $\sigma/2$ | $\sigma/2$ | $\sigma,\ 0$ |
| Pure shear $\tau$ | $0$ | $\tau$ | $+\tau,\ -\tau$ at $45^\circ$ (why brittle shafts crack on a helix) |
| Bending $+$ torsion $(\sigma,0,\tau)$ | $\sigma/2$ | $\sqrt{(\sigma/2)^2+\tau^2}$ | $\dfrac{\sigma}{2} \pm \sqrt{\left(\dfrac{\sigma}{2}\right)^2+\tau^2}$ |

*From* [4.2](lessons/04-02-mohrs-circle.md)

### Combined loading

Superpose at **one chosen point**: normals with normals, shears with shears.

$$\sigma_x = \frac{P}{A} \pm \frac{Mc}{I}, \qquad \tau_{xy} = \frac{Tc}{J} \pm \frac{VQ}{It}, \qquad \sigma_y = 0 \text{ (usually)}$$

Then transform. On a round shaft under bending and torsion the worst point is the
**outer surface at the top or bottom fibre** — torsional shear is the same all the
way round, bending is extreme there, and transverse shear is zero there.

Thin-walled pressure vessel ($t \ll r$), already a principal state on those faces:

$$\sigma_\theta = \frac{pr}{t}\ (\text{hoop}), \qquad \sigma_z = \frac{pr}{2t}\ (\text{longitudinal}), \qquad \sigma_3 \approx 0$$

Hoop is exactly **twice** longitudinal — which is why an over-pressured pipe splits
lengthwise. For a sphere both are $pr/2t$.

*From* [4.3](lessons/04-03-combined-loadings.md)

### Column buckling

$$P_{cr} = \frac{\pi^2 EI_{\min}}{(KL)^2}, \qquad \sigma_{cr} = \frac{P_{cr}}{A} = \frac{\pi^2 E}{(KL/r_g)^2}$$

| End conditions | $K$ | Capacity vs. pinned–pinned |
|---|---|---|
| Pinned–pinned | $1.0$ | reference |
| Fixed–free (cantilever) | $2.0$ | $\tfrac14\times$ |
| Fixed–pinned | $0.7$ | $\approx 2\times$ |
| Fixed–fixed | $0.5$ | $4\times$ |

**Validity.** Euler assumes elastic behaviour, so it holds only while
$\sigma_{cr} < \sigma_Y$, i.e. above the transition slenderness
$(KL/r_g)_c = \pi\sqrt{E/\sigma_Y}$ ($\approx 89$ for structural steel,
$\approx 54$ for aluminum). Below it the member is **stocky** and its capacity is
the squash load $P_Y = \sigma_Y A$. Real design takes the **lower** of $P_{cr}$
and $\sigma_Y A$.

*From* [4.4](lessons/04-04-column-buckling.md)

### Failure criteria — Tresca vs. von Mises, side by side

Rank all three principals $\sigma_1 \ge \sigma_2 \ge \sigma_3$, **including the
out-of-plane zero**, then:

| | Tresca (max shear) | von Mises (distortion energy) |
|---|---|---|
| Physical story | yield when the biggest shear anywhere equals the tension test's $\sigma_Y/2$ | yield when the total shape-changing energy equals the tension test's |
| $\sigma_{eq}$ | $\sigma_1 - \sigma_3$ | $\sqrt{\tfrac12\big[(\sigma_1-\sigma_2)^2+(\sigma_2-\sigma_3)^2+(\sigma_3-\sigma_1)^2\big]}$ |
| Plane stress ($\sigma_3=0$ in plane) | $\sigma_1-\sigma_3$ over the ranked three | $\sqrt{\sigma_1^2-\sigma_1\sigma_2+\sigma_2^2}$ |
| Shaft shortcut ($\sigma$ and $\tau$ only) | $\sqrt{\sigma^2+4\tau^2}$ | $\sqrt{\sigma^2+3\tau^2}$ |
| In $(\sigma_1,\sigma_2)$ space | hexagon, **inscribed** in the ellipse | ellipse |
| Verdict | always the more conservative — lower $FS$ | fits ductile-metal data better |
| Use when | codes demand it, or you want the safe side | you want the realistic number |

$$FS = \frac{\sigma_Y}{\sigma_{eq}}$$

They agree **exactly** at pure tension, pure compression, and equal biaxial
loading, and disagree most at **pure shear**, where Tresca is stricter by
$2/\sqrt3 = 1.155$ (about 15 percent). Both predict **yield in ductile metals**
only — brittle materials need a maximum-normal-stress criterion instead.

*From* [4.5](lessons/04-05-yield-failure-criteria.md)

## Assumed, not taught here

This is a Tier 1 course built directly on statics; it *uses* the following without
re-deriving them.

| Fact | Where it's taught |
|---|---|
| Internal $N$, $V$, $M$ at a cut by the method of sections | [statics 4.1](../statics/lessons/04-01-internal-forces-normal-shear-bending.md) |
| Drawing $V$ and $M$ diagrams, and $dV/dx=-w$, $dM/dx=V$ | [statics 4.2](../statics/lessons/04-02-shear-bending-moment-diagrams.md) |
| Support reactions, free-body discipline, statical determinacy | [statics 1.5](../statics/lessons/01-05-rigid-body-equilibrium-supports.md) |
| Reducing a distributed load to a resultant at its centroid | [statics 3.1](../statics/lessons/03-01-distributed-loads-resultants.md) |
| Centroid of a composite area (which locates the neutral axis) | [statics 3.2](../statics/lessons/03-02-centroids-of-areas.md) |
| Second moment of area $I$ and the parallel-axis theorem | [statics 4.3](../statics/lessons/04-03-second-moment-of-area-parallel-axis.md) |
| Definite integrals as accumulation (the double integration of $M$) | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Antiderivatives of polynomials; substitution | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| "$M$ peaks where $V=0$" — the first-derivative test | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Solving $v'' + k^2 v = 0$ as $A\sin kx + B\cos kx$, and the eigenvalue idea | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| $\sin 2\theta$, $\cos 2\theta$, $\arctan$, radians vs. degrees | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |
| *Why* the stress–strain curve looks as it does, and where $E$ and $\sigma_Y$ come from | [materials-science 4.1](../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) |
| *Why* ductile metals yield by shear (dislocation glide, Schmid's law) — the physics behind Tresca and von Mises | [materials-science 4.2](../materials-science/lessons/04-02-plastic-deformation-schmid.md) |
| Brittle fracture, fatigue, creep — the failure modes these criteria do **not** cover | [materials-science 4.4](../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) |

## Pitfalls

### Units and bookkeeping

- Mixing mm and m is the single most common error in the subject. $I$ in mm⁴ demands $M$ in N·mm and $y$ in mm to land on MPa; a stray $10^3$ between kN·m and N·mm is the classic flexure blunder. *([1.1](lessons/01-01-normal-shear-stress.md), [2.1](lessons/02-01-torsion-circular-shafts.md), [2.4](lessons/02-04-flexure-formula.md))*
- Angles: $\phi = TL/GJ$ and $\gamma = r\phi/L$ are in **radians**. Convert to degrees only for the final human-readable answer. *([2.1](lessons/02-01-torsion-circular-shafts.md))*
- Round a required diameter, depth, or area **up**; round a fastener spacing **down**. Rounding the wrong way silently breaks the check you just passed. *([1.1](lessons/01-01-normal-shear-stress.md), [2.2](lessons/02-02-power-transmission-indeterminate-shafts.md), [2.4](lessons/02-04-flexure-formula.md), [2.5](lessons/02-05-transverse-shear-stress.md))*
- Plug rpm into $P = T\omega$ and you're off by a factor of about $9.55$ or $60$. Convert: $\omega = 2\pi n/60$. *([2.2](lessons/02-02-power-transmission-indeterminate-shafts.md))*

### Sign conventions (the classic error)

- **Positive $M$ sags** (concave up, tension on the bottom); **positive $V$ pushes the left face of the cut up.** Flip either and $\sigma = -My/I$ puts tension on the wrong face. *([2.3](lessons/02-03-shear-moment-diagrams.md), [2.4](lessons/02-04-flexure-formula.md))*
- The minus in $dV/dx = -w$ is not decoration: a *downward* load makes shear *decrease*. *([2.3](lessons/02-03-shear-moment-diagrams.md))*
- In $\delta = PL/AE$ a compressive internal force is negative and *shortens* the member. In a bar with tension and compression segments the signs must fight it out inside the sum. *([1.3](lessons/01-03-axial-deformation.md))*
- Compatibility is a **signed** statement: $\delta_{AC}+\delta_{CB}=0$ says one segment's stretch cancels the other's squash, not that the two reactions are equal. Drop the sign and you wrongly get $R_A = R_B$. *([1.4](lessons/01-04-statically-indeterminate-axial.md))*
- Superposing deflections, an upward force (or a redundant reaction) contributes a *negative* downward deflection. One flipped sign and the beam appears to bend the wrong way. *([3.2](lessons/03-02-deflection-by-superposition.md), [3.3](lessons/03-03-statically-indeterminate-beams.md))*

### Stress and strain basics

- What breaks a part is the **stress**, not the load. Two rods under the same 50 kN are not equally endangered — divide by the area before judging. *([1.1](lessons/01-01-normal-shear-stress.md))*
- Ask which way the force points relative to the cut before picking a formula: perpendicular → $\sigma = P/A$, parallel → $\tau = V/A$. *([1.1](lessons/01-01-normal-shear-stress.md))*
- Double shear halves the **force**, not the area: $\tau = P/(2A)$ over the pin's full section. *([1.1](lessons/01-01-normal-shear-stress.md))*
- Bearing uses the projected rectangle $d\,t$, never the curved half-cylinder. *([1.1](lessons/01-01-normal-shear-stress.md))*
- A 1 mm stretch is not a strain until you divide by the original length. *([1.2](lessons/01-02-strain-tension-test.md))*
- Stiff is not strong. Stiffness is the **slope** $E$, strength is the **height** at yield or ultimate, toughness is the **area**. Glass is stiff and brittle; many polymers are floppy and tough. *([1.2](lessons/01-02-strain-tension-test.md))*
- The curve dropping after the ultimate point is an artifact of dividing by the *original* area while the neck shrinks — the material isn't weakening, the denominator is stale. *([1.2](lessons/01-02-strain-tension-test.md))*
- Yield is *defined* by the 0.2 percent offset construction, not by eyeballing where the line bends. *([1.2](lessons/01-02-strain-tension-test.md))*

### Axial members and indeterminacy

- $\delta = PL/AE$ takes the **internal** force from a section cut, not the applied load. With loads applied mid-bar, the segment nearest the wall carries everything downstream. *([1.3](lessons/01-03-axial-deformation.md))*
- Never average areas on a stepped bar — sum $P_iL_i/(A_iE_i)$. Flexibilities add in series, so a short thin segment can dominate. *([1.3](lessons/01-03-axial-deformation.md))*
- You cannot be clever enough with equilibrium to find a redundant. Any balanced set of reactions is possible; only geometry singles out the true one. The missing equation is always compatibility. *([1.4](lessons/01-04-statically-indeterminate-axial.md), [3.3](lessons/03-03-statically-indeterminate-beams.md))*
- Load sharing is decided by **stiffness** $AE/L$ or $GJ/L$, not by $E$ alone and not by strength. A softer material with enough area still hogs the load. *([1.4](lessons/01-04-statically-indeterminate-axial.md), [2.2](lessons/02-02-power-transmission-indeterminate-shafts.md))*
- If a problem hands you $E$ or areas where pure statics wouldn't need them, that's the tell that it's indeterminate. *([1.4](lessons/01-04-statically-indeterminate-axial.md))*

### Thermal and multiaxial

- Heating stresses a part only if the growth is **constrained**. A bar free on rollers heats, grows, and carries zero stress — thermal stress is a story about the supports. *([1.5](lessons/01-05-thermal-stress-poisson.md))*
- Thermal stress has no $L$ in it: a stubby blocked bar and a long one reach the same $E\alpha\Delta T$. Only the free growth and the reaction force scale. *([1.5](lessons/01-05-thermal-stress-poisson.md))*
- Under more than one stress, $\varepsilon_x$ is not $\sigma_x/E$ — a transverse $\sigma_y$ shifts it by $-\nu\sigma_y/E$. *([1.5](lessons/01-05-thermal-stress-poisson.md))*

### Torsion

- $\tau = Tr/J$ is exact **only** for solid or hollow *circular* shafts. Square and open sections warp out of plane and need different formulas. *([2.1](lessons/02-01-torsion-circular-shafts.md))*
- For a hollow shaft, subtract the fourth powers: $J = \tfrac{\pi}{32}(d_o^4-d_i^4)$, never $\tfrac{\pi}{32}(d_o-d_i)^4$. *([2.1](lessons/02-01-torsion-circular-shafts.md))*
- $J/c = \pi d^3/16$ solves for the **diameter**; $J/c = \pi c^3/2$ solves for the radius. Both are right; mixing them is not. *([2.2](lessons/02-02-power-transmission-indeterminate-shafts.md))*
- The two segments of a fixed–fixed shaft carry equal torque only if it is symmetric. Off-centre or stepped, the stiffer segment grabs more. *([2.2](lessons/02-02-power-transmission-indeterminate-shafts.md))*

### Shear and moment diagrams

- $M_{\max}$ lives where $V = 0$, which is midspan **only** for a symmetric load. An off-centre load or a partial UDL moves it. *([2.3](lessons/02-03-shear-moment-diagrams.md))*
- Under a point load, $V$ *jumps* through zero — no equation to solve, the peak is at the load. Only distributed load gives a sloped crossing. *([2.3](lessons/02-03-shear-moment-diagrams.md))*
- A cantilever's worst moment is always at the wall, never at the tip — the opposite reflex from a simply supported beam. *([2.3](lessons/02-03-shear-moment-diagrams.md))*
- Indeterminate beams put their biggest moment at the stiff support: for a propped cantilever the hogging $wL^2/8$ at the wall beats the span's $9wL^2/128$. Always evaluate the wall. *([3.3](lessons/03-03-statically-indeterminate-beams.md))*

### Bending and transverse shear

- The neutral axis sits at the **centroid** of the actual area, not the middle of a bounding box. For an unsymmetric section (T, channel) $c$ differs top and bottom, and the larger $c$ governs. *([2.4](lessons/02-04-flexure-formula.md))*
- $I$ must be taken about the neutral axis **in the direction the beam bends**: a $50\times100$ section laid flat has a quarter of the $I$ it has standing up. *([2.4](lessons/02-04-flexure-formula.md))*
- Summing each piece's $\bar I$ and stopping is wrong unless every piece is already centred on the section's axis. The $A_id_i^2$ terms are usually most of the answer. *([2.4](lessons/02-04-flexure-formula.md), [`statics` 4.3](../statics/lessons/04-03-second-moment-of-area-parallel-axis.md))*
- Shear is **zero** at the extreme fibres and **maximum at the neutral axis** — the exact reverse of bending stress. *([2.5](lessons/02-05-transverse-shear-stress.md))*
- $Q$ is the first moment of *only the area beyond the cut*, and $t$ is the width *right at that cut* — not the section's total area or its widest width. *([2.5](lessons/02-05-transverse-shear-stress.md))*

### Deflection

- A free end gives no geometric condition. The two constants of integration come from the *supported* ends; the free end contributes $M = 0$, which you already used to build $M(x)$. *([3.1](lessons/03-01-deflection-by-integration.md))*
- $C_1$ and $C_2$ are physics, not bookkeeping — a rigid tilt and a rigid shift the supports forbid. Skip a boundary condition and the beam floats in space. *([3.1](lessons/03-01-deflection-by-integration.md))*
- A piecewise $M(x)$ needs its own constants per region plus continuity of $v$ **and** $v'$ at the break. Don't integrate across a kink as one expression. *([3.1](lessons/03-01-deflection-by-integration.md))*
- You may only add contributions at the **same point** and of the **same kind** — the cantilever $wL^4/8EI$ is a *tip* value, the simply supported $5wL^4/384EI$ a *midspan* one, and different loads' maxima generally don't line up. *([3.2](lessons/03-02-deflection-by-superposition.md))*
- Superposition needs linearity. It dies the moment the material yields or deflections grow big enough that axial load starts adding bending. *([3.2](lessons/03-02-deflection-by-superposition.md))*

### Transformation, Mohr, and combined loading

- Everything swings at $2\theta$, not $\theta$. That's why principal and max-shear planes are $45^\circ$ apart in the body and $90^\circ$ apart on the circle — and why halving the circle angle before orienting the element is mandatory. *([4.1](lessons/04-01-plane-stress-transformation.md), [4.2](lessons/04-02-mohrs-circle.md))*
- Max-shear planes are **not** stress-free: they carry $\sigma_{\text{avg}} = C$ on both faces. Only the principal planes have zero shear. *([4.1](lessons/04-01-plane-stress-transformation.md), [4.2](lessons/04-02-mohrs-circle.md))*
- $\tan 2\theta_p$ returns two roots $90^\circ$ apart, one per principal stress. Decide which is which by substituting back, or use the rule that with $\sigma_x > \sigma_y$ the angle nearer the $x$-axis carries $\sigma_1$. *([4.1](lessons/04-01-plane-stress-transformation.md))*
- $\tau_{\max} = R$ is the worst *in-plane* shear only. If $\sigma_1$ and $\sigma_2$ share a sign, the circle through $\sigma_3 = 0$ is bigger and governs. *([4.2](lessons/04-02-mohrs-circle.md), [4.3](lessons/04-03-combined-loadings.md))*
- Only stresses on the same face and in the same direction add. Axial and bending both make $\sigma_x$; torsion and transverse shear both make $\tau_{xy}$. You never add a $\sigma$ to a $\tau$ — that's what transformation is for. *([4.3](lessons/04-03-combined-loadings.md))*
- Don't manufacture a phantom point that has both the bending peak and the transverse-shear peak. Evaluate each candidate point and take the worst. *([4.3](lessons/04-03-combined-loadings.md))*

### Buckling and failure

- Stronger steel buys a slender column nothing: $P_{cr}$ contains $E$ and $I$, never $\sigma_Y$. Strength only helps once the member is stocky enough to yield instead. *([4.4](lessons/04-04-column-buckling.md))*
- Use the **smallest** $I$ — a column folds about its floppiest axis unless bracing prevents it. *([4.4](lessons/04-04-column-buckling.md))*
- Euler wildly *over*predicts for a stubby column. Always confirm $\sigma_{cr} < \sigma_Y$ (equivalently $KL/r_g$ above the transition) before quoting $P_{cr}$ — clamping the ends can push a column out of the Euler regime entirely. *([4.4](lessons/04-04-column-buckling.md))*
- In a plane-stress Tresca check the out-of-plane $\sigma_3 = 0$ is often the *minimum*. Rank all three before subtracting: with both in-plane principals tensile, $\sigma_{eq} = \sigma_1 - 0$, not $\sigma_1-\sigma_2$. *([4.5](lessons/04-05-yield-failure-criteria.md))*
- Tresca and von Mises never differ by more than about 15 percent. Answers a factor of two apart mean an arithmetic error, not a "criterion choice." *([4.5](lessons/04-05-yield-failure-criteria.md))*
- These criteria predict **yield in ductile metals**. Cast iron, concrete, and glass fail by a different mechanism and need a maximum-normal-stress criterion. *([4.5](lessons/04-05-yield-failure-criteria.md))*

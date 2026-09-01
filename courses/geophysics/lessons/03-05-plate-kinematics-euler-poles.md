# Geophysics · Lesson 3.5: Plate kinematics on a sphere

> ⏱ ~15 min · Module 3: Geomagnetism, palaeomagnetism & plate kinematics · Builds on: [3.4](03-04-magnetic-anomalies-reversals.md), [2.7](02-07-space-geodesy.md) · Unlocks: [4.5](04-05-plate-driving-forces.md)

## Why this matters

Plate tectonics on a flat map is a story. On a sphere it becomes arithmetic, because of a theorem: **any displacement of a rigid cap on a sphere is a rotation about a single axis through the centre.** So a plate's entire motion — every velocity at every point on its boundary — is specified by three numbers: two for the pole's position and one for the rotation rate.

That is an enormous compression, and it makes the theory testable in a way no qualitative account could be. Transform faults must be small circles about the pole. Spreading rates must vary as the sine of the angular distance from it. Three plates meeting must have rotation vectors that sum to zero. Every one of these is a prediction that could have failed, and none of them did.

## The idea

**Euler's theorem is the whole subject in one sentence.** A rigid plate cannot translate on a sphere — there is nowhere to translate *to* that stays on the sphere. Every motion is a rotation. The axis pierces the surface at the **Euler pole**, and the plate's motion is a rigid spin about it.

**Which immediately tells you the shape of the velocity field.** Points near the pole barely move; points 90° away move fastest; points beyond 90° slow down again. The velocity at angular distance $\theta$ from the pole is $v = \omega R\sin\theta$ — a sine curve, not a constant.

**Transform faults are the pole's fingerprint.** A transform fault is where two plates slide past one another without creating or destroying crust, so the fault must lie *along* the direction of relative motion — which is a small circle about the Euler pole. **Draw perpendiculars to a set of fracture zones and they meet at the pole.** This is how the first Euler poles were found, by Morgan and by Le Pichon in 1968, using nothing but the map.

**And spreading rates give the pole a second time, independently.** Measure the rate at several places along a ridge ([3.4](03-04-magnetic-anomalies-reversals.md)) and fit $v = \omega R\sin\theta$. The fit determines both where the pole is and how fast the rotation goes. That the geometric method and the rate method agree is a nontrivial check that the plates really are rigid.

**Relative motions add like vectors.** Rotation vectors compose: the motion of A relative to C is the motion of A relative to B plus B relative to C. So a **plate circuit** can determine a boundary nobody has surveyed — and, more powerfully, going around a closed circuit must return zero. A circuit that fails to close means a plate has been missed, and several plates were discovered exactly that way.

**Where three plates meet, the junction may or may not survive.** A triple junction's geometry evolves as the plates move, and only certain combinations are **stable** — able to keep the same configuration as they grow. Ridge–ridge–ridge junctions are always stable; most others are stable only for particular geometries, and when they are not, the junction changes character.

## The formal version

**Euler's theorem.** Any motion of a rigid body on a sphere about its centre is a rotation about some axis through the centre. The plate's velocity field is

$$\mathbf v = \boldsymbol\omega\times\mathbf r,$$

with $\boldsymbol\omega$ the **rotation vector**, whose direction is the pole and whose magnitude is the rate.

**Speed as a function of position.**

$$\boxed{\ v = \omega R\sin\theta\ }$$

with $\theta$ the angular distance from the Euler pole and $\omega$ in **radians** per unit time. *In words: zero at the pole, maximum at 90°, and symmetric about that.* Convert from degrees per Myr by multiplying by $\pi/180$.

Useful shortcut: $\omega = 1^\circ/\mathrm{Myr}$ gives $v = 111.2\sin\theta\ \mathrm{km\,Myr^{-1}} = 11.1\sin\theta\ \mathrm{cm\,yr^{-1}}$.

**Finding the pole from transform faults.** Each transform fault segment lies along a small circle about the pole, so the great circle *perpendicular* to it passes through the pole. Two such great circles intersect at the pole (and its antipode); more than two over-determine it and give an error estimate.

**Composing rotations.** For instantaneous rotations, the vectors simply add:

$$\boldsymbol\omega_{AC} = \boldsymbol\omega_{AB} + \boldsymbol\omega_{BC}, \qquad \boldsymbol\omega_{AB} = -\boldsymbol\omega_{BA}.$$

*In words: relative rotations compose by vector addition, exactly like relative velocities in elementary mechanics.* **Circuit closure**: around any closed loop of plates,

$$\boldsymbol\omega_{AB} + \boldsymbol\omega_{BC} + \boldsymbol\omega_{CA} = \mathbf 0.$$

(This exactness holds for *instantaneous* rotations. Finite rotations do not commute, so reconstructing a sequence of past positions requires matrix composition in the right order — a real and often overlooked source of error in deep-time reconstructions.)

**Converting a rotation vector to a pole.** With $\boldsymbol\omega = (\omega_x,\omega_y,\omega_z)$ in a geocentric Cartesian frame ($z$ through the north pole, $x$ through 0° longitude):

$$\omega = |\boldsymbol\omega|, \qquad \lambda_p = \arcsin\!\left(\frac{\omega_z}{\omega}\right), \qquad \varphi_p = \arctan\!\left(\frac{\omega_y}{\omega_x}\right).$$

**Triple junctions.** Three plates A, B, C meet at a point. Each boundary is a ridge (R), trench (T) or transform (F). Stability is assessed in **velocity space**: plot the velocity of each plate as a point, then for each boundary draw the locus of points that could be the junction's velocity. The junction is stable if all three loci meet at a single point.

| Type | Stability |
|---|---|
| RRR | always stable |
| TTT, TTF, RTF, … | stable only for particular geometries |

**Reference frames and datasets.**

| Model | Basis | Timescale averaged |
|---|---|---|
| NUVEL-1A, MORVEL | magnetic anomalies, transform azimuths, earthquake slip vectors | ~3 Myr |
| ITRF / GNSS solutions | geodesy ([2.7](02-07-space-geodesy.md)) | years to decades |

**These agree to within a few percent for most plate pairs.** That is a remarkable result: the average over three million years matches the average over a decade, which means plate motions are steady on all timescales in between — an observation that constrains what can be driving them ([4.5](04-05-plate-driving-forces.md)).

## Picture

![Left: a sphere with a coral Euler pole marked near the top. Three blue arcs are drawn as small circles about the pole, labelled transform faults are small circles about the pole. A dashed line from the pole to a point on one arc marks the angular distance theta. Two coral velocity arrows are drawn tangent to the small circles, a short one near the pole and a long one further away, annotated with v equals omega R sine theta. A note says that near the pole almost nothing moves while ninety degrees away the motion is fastest. Right: a graph of speed against angular distance from the pole, tracing a sine arch from zero at zero degrees to a marked maximum at ninety degrees and back to zero at 180 degrees, with a note that measuring the rate at two places on one boundary over-determines the sine curve and yields both the pole position and the rotation rate](assets/03-05-fig1.svg)

Three numbers, and the entire velocity field of a plate is fixed.

## Worked examples

**Example 1 (mechanical — velocities from a pole).** Two plates rotate about a common Euler pole at $\omega = 0.50^\circ/\mathrm{Myr}$. Find the relative velocity at points 10°, 60° and 90° from the pole.

$$\omega = 0.50\times\frac{\pi}{180} = 8.727\times10^{-3}\ \mathrm{rad\,Myr^{-1}}.$$
$$v = \omega R\sin\theta = 8.727\times10^{-3}\times6371\times\sin\theta = 55.6\sin\theta\ \mathrm{km\,Myr^{-1}}.$$

$$\theta = 10^\circ: \quad 55.6\times0.1736 = 9.65\ \mathrm{km\,Myr^{-1}} = 0.97\ \mathrm{cm\,yr^{-1}},$$
$$\theta = 60^\circ: \quad 55.6\times0.8660 = 48.2\ \mathrm{km\,Myr^{-1}} = 4.8\ \mathrm{cm\,yr^{-1}},$$
$$\theta = 90^\circ: \quad 55.6\times1.000 = 55.6\ \mathrm{km\,Myr^{-1}} = 5.6\ \mathrm{cm\,yr^{-1}}.$$

**A five-fold variation in rate along one boundary, with no change whatever in the rotation.** This is why "the spreading rate of the Mid-Atlantic Ridge" is not a single number: it runs from under 2 cm/yr near Iceland to about 3.5 cm/yr near the equator, because the ridge extends over a large range of $\theta$ from the Africa–South America pole.

**Example 2 (why you'd care — locating a pole from two rate measurements).** A ridge shows a half-spreading rate of 1.2 cm/yr at point P and 2.8 cm/yr at point Q, with P and Q separated by 40° of arc along the ridge, Q being further from the pole. Find $\theta_P$, $\theta_Q$ and $\omega$.

*Set up the ratio.* Full rates are 2.4 and 5.6 cm/yr, and $v \propto\sin\theta$, so

$$\frac{\sin\theta_P}{\sin\theta_Q} = \frac{2.4}{5.6} = 0.4286, \qquad \theta_Q = \theta_P + 40^\circ.$$

*Expand.*
$$\sin\theta_P = 0.4286\sin(\theta_P+40^\circ) = 0.4286\left[\sin\theta_P\cos40^\circ + \cos\theta_P\sin40^\circ\right]$$
$$= 0.4286[0.7660\sin\theta_P + 0.6428\cos\theta_P] = 0.3283\sin\theta_P + 0.2755\cos\theta_P.$$
$$0.6717\sin\theta_P = 0.2755\cos\theta_P \;\Rightarrow\; \tan\theta_P = 0.4102 \;\Rightarrow\; \theta_P = 22.3^\circ.$$
$$\theta_Q = 62.3^\circ.$$

*Check.* $\sin22.3^\circ/\sin62.3^\circ = 0.3795/0.8854 = 0.4287$. ✓

*Rotation rate.*
$$\omega = \frac{v_P}{R\sin\theta_P} = \frac{24\ \mathrm{km\,Myr^{-1}}}{6371\times0.3795} = \frac{24}{2418} = 9.93\times10^{-3}\ \mathrm{rad\,Myr^{-1}} = 0.569^\circ\mathrm{/Myr}.$$

*What has just happened.* **Two rate measurements on one ridge determined where the pole is** — 22.3° from P along the great circle through P and Q, extended backwards — **and how fast the plates are turning.** No fracture zones, no fault azimuths, no geodesy.

*And here is why that matters.* The pole can also be found geometrically, from the perpendiculars to the transform faults, using no rates at all. The two determinations are completely independent: one uses the *directions* of boundaries, the other the *magnitudes* of rates. **If plates were not rigid, there is no reason the two would agree.** They do, typically to within a degree or two of pole position, across every well-surveyed plate pair.

That agreement is the empirical content of "plate rigidity", and it is worth appreciating how strong a claim it validates. It says that ocean basins thousands of kilometres across deform internally by less than a few percent of their boundary motion over millions of years — that the plates really are the plates. Every quantitative statement in plate tectonics inherits its credibility from this one over-determination, and the modern versions (MORVEL, GNSS solutions) are least-squares fits ([6.1](06-01-the-linear-inverse-problem.md)) that combine rates, azimuths and slip vectors into the same three numbers per plate pair, with residuals small enough that departures from rigidity — in diffuse boundary zones like the central Indian Ocean — stand out clearly as *exceptions*.

## Watch out

- **You might think** the Euler pole is somewhere on the plate, or somewhere physically meaningful. **Actually** it is a purely geometric construct and is usually nowhere near either plate; it can lie in the middle of a third plate or in an ocean neither plate touches. Nothing physical happens there.
- **You might think** finite rotations add like instantaneous ones. **Actually** finite rotations do not commute — rotating 90° about $x$ then 90° about $z$ is not the same as the reverse. Instantaneous rotation *vectors* add; finite reconstructions must be composed as matrices in the correct order. Getting this wrong is a real and recurring source of error in deep-time plate reconstructions.
- **You might think** a triple junction is a fixed point. **Actually** it migrates, generally at a speed unrelated to any of the three plate velocities, and its geometry may be unstable — in which case the junction transforms into a different type or spawns a new boundary. The Mendocino triple junction has migrated more than a thousand kilometres up the Californian coast, leaving the San Andreas system behind it.

## One-liner

> Every plate motion is a rotation about an Euler pole, so transform faults are small circles about it and spreading rates follow a sine curve — and that these two independent constructions give the same pole is what "rigid plate" actually means.

## Problems

**P1 (🟢)** Two plates rotate about a pole at $\omega = 0.85^\circ/\mathrm{Myr}$. (a) Compute the relative velocity at 30° from the pole. (b) At 75°. (c) At what angular distance is the rate 4.0 cm/yr?

**P2 (🟡)** A transform fault trends 073° at a point 55° of arc from the Euler pole; the full spreading rate on the adjacent ridge is 6.2 cm/yr. (a) Compute $\omega$ in °/Myr. (b) State the trend of the great circle that passes through the pole from this point. (c) Predict the full spreading rate at a second point on the same boundary, 25° of arc closer to the pole. (d) A colleague measures 4.9 cm/yr there. Comment on the agreement and on what a large mismatch would imply.

**P3 (🔴, bridges to [4.5](04-05-plate-driving-forces.md))** Three plates A, B and C have instantaneous rotation vectors, in a geocentric Cartesian frame with $z$ through the north pole and $x$ through the Greenwich meridian, in units of °/Myr:
$$\boldsymbol\omega_{AB} = (0.20,\ 0.50,\ 0.80), \qquad \boldsymbol\omega_{BC} = (0.10,\ -0.30,\ 0.40).$$
(a) Compute $\boldsymbol\omega_{AC}$ and its magnitude. (b) Compute the latitude and longitude of the A–C Euler pole. (c) Compute the relative velocity across the A–C boundary at a point 50° from that pole. (d) Geodesy across the A–C boundary measures 8.1 cm/yr at that point. State two distinct explanations for the discrepancy and how you would distinguish them.

<details>
<summary>Solutions</summary>

**P1** (a) $$\omega = 0.85\times\frac{\pi}{180} = 1.4835\times10^{-2}\ \mathrm{rad\,Myr^{-1}}, \qquad \omega R = 1.4835\times10^{-2}\times6371 = 94.5\ \mathrm{km\,Myr^{-1}}.$$
$$v = 94.5\sin30^\circ = 94.5\times0.500 = 47.3\ \mathrm{km\,Myr^{-1}} = 4.7\ \mathrm{cm\,yr^{-1}}.$$

(b) $$v = 94.5\sin75^\circ = 94.5\times0.9659 = 91.3\ \mathrm{km\,Myr^{-1}} = 9.1\ \mathrm{cm\,yr^{-1}}.$$

(c) $$40 = 94.5\sin\theta \;\Rightarrow\; \sin\theta = 0.4233 \;\Rightarrow\; \theta = 25.0^\circ \text{ (or } 155.0^\circ).$$

Note the two solutions — the sine curve is symmetric about 90°, so a rate alone never determines $\theta$ uniquely. This ambiguity is one reason rates must be combined with azimuths.

**P2** (a) $$v = \omega R\sin\theta \;\Rightarrow\; \omega R = \frac{62\ \mathrm{km\,Myr^{-1}}}{\sin55^\circ} = \frac{62}{0.8192} = 75.7\ \mathrm{km\,Myr^{-1}}.$$
$$\omega = \frac{75.7}{6371} = 1.188\times10^{-2}\ \mathrm{rad\,Myr^{-1}} = 0.681^\circ\mathrm{/Myr}.$$

(b) A transform fault lies *along* a small circle about the pole, and the great circle to the pole is perpendicular to it. So the bearing to the pole is $073^\circ \pm 90^\circ$, i.e. **163° or 343°**. Which of the two requires knowing which side the pole lies on — resolved by a second fracture zone, or by the sense of motion.

(c) At $\theta = 55 - 25 = 30^\circ$:
$$v = 75.7\sin30^\circ = 75.7\times0.500 = 37.9\ \mathrm{km\,Myr^{-1}} = 3.8\ \mathrm{cm\,yr^{-1}}.$$

(d) Measured 4.9 against predicted 3.8 cm/yr — a discrepancy of 29 percent, **too large to be measurement error** in a well-determined spreading rate (typically good to a few percent).

Something in the model is wrong. Possibilities, in rough order of likelihood:

- **The pole position is wrong**, most likely because it was derived from a single transform azimuth with the $\pm90^\circ$ ambiguity of part (b) unresolved, or because that transform is misidentified. A fit to several rates and azimuths simultaneously would give a better pole.
- **The two points are not on the same plate boundary** — a third plate or a diffuse deformation zone intervenes, so the two rates describe different plate pairs.
- **The plates are not rigid** in this region: a broad zone of internal deformation absorbs part of the motion.

The discriminator is over-determination: measure rate *and* azimuth at three or more points and fit. A rigid two-plate model that fails to fit within uncertainty is telling you something real about the tectonics, and this is exactly how diffuse plate boundaries were discovered.

**P3** (a) $$\boldsymbol\omega_{AC} = \boldsymbol\omega_{AB} + \boldsymbol\omega_{BC} = (0.20+0.10,\ 0.50-0.30,\ 0.80+0.40) = (0.30,\ 0.20,\ 1.20)\ ^\circ\mathrm{/Myr}.$$
$$\omega = \sqrt{0.09+0.04+1.44} = \sqrt{1.57} = 1.253^\circ\mathrm{/Myr}.$$

(b) $$\lambda_p = \arcsin\frac{1.20}{1.253} = \arcsin(0.9577) = 73.2^\circ\mathrm{N}.$$
$$\varphi_p = \arctan\frac{0.20}{0.30} = \arctan(0.6667) = 33.7^\circ\mathrm{E}.$$

(c) $$\omega = 1.253\times\frac{\pi}{180} = 2.1869\times10^{-2}\ \mathrm{rad\,Myr^{-1}}, \qquad \omega R = 139.3\ \mathrm{km\,Myr^{-1}}.$$
$$v = 139.3\sin50^\circ = 139.3\times0.7660 = 106.7\ \mathrm{km\,Myr^{-1}} = 10.7\ \mathrm{cm\,yr^{-1}}.$$

(d) Predicted 10.7, observed 8.1 cm/yr — a 24 percent shortfall. Two distinct explanations:

**1. A missing plate.** The circuit assumed A, B and C are the only plates involved. If a fourth plate D lies between A and C along part of the boundary, then $\boldsymbol\omega_{AC}$ computed through B is the correct *total* across the whole system, but the geodetic measurement at one point spans only part of it — the rest being taken up on a boundary the survey did not cross. Historically this is exactly how several small plates were identified: the circuit refused to close, and the residual was a plate.

**2. Timescale mismatch.** $\boldsymbol\omega_{AB}$ and $\boldsymbol\omega_{BC}$ from magnetic anomalies are averages over about 3 Myr ([3.4](03-04-magnetic-anomalies-reversals.md)); the geodetic rate is an average over years to decades ([2.7](02-07-space-geodesy.md)). If the A–C motion has genuinely slowed since 3 Ma, both numbers are right and they are measuring different things.

*Distinguishing them.* The decisive test is **spatial versus temporal**. If a plate is missing, running a transect of GNSS stations across the entire A–C region will find the remaining 2.6 cm/yr taken up somewhere — on a discrete boundary or distributed through a deformation zone — and the sum will recover 10.7. If instead the motion has slowed, no such extra motion exists anywhere, and the shortfall is uniform across the whole region.

A secondary test uses the anomaly record itself: computing the A–C rate from progressively younger magnetic anomalies (5 Ma, 3 Ma, 1 Ma) reveals whether the rate has been declining. A steady anomaly-derived rate that disagrees with geodesy points to a missing plate; a declining one points to real deceleration. And a genuine deceleration would itself be interesting, because the near-perfect agreement between 3-Myr and decadal rates for most plate pairs is one of the constraints on what drives plate motion ([4.5](04-05-plate-driving-forces.md)).

</details>

## Flashback

**From Lesson 3.4 (Magnetic anomalies and reversals):** On a ridge flank, the Gauss–Gilbert boundary (3.60 Ma) lies 79 km from the axis, and the Brunhes–Matuyama boundary (0.78 Ma) lies 20 km from the axis. (a) Compute the half-spreading rate over each interval. (b) Comment on whether the rate has been steady. (c) Compute the full spreading rate for the most recent interval.

<details>
<summary>Solution</summary>

(a) For 0–0.78 Ma:
$$\frac{20}{0.78} = 25.6\ \mathrm{km\,Myr^{-1}} = 2.6\ \mathrm{cm\,yr^{-1}}.$$

For 0.78–3.60 Ma:
$$\frac{79-20}{3.60-0.78} = \frac{59}{2.82} = 20.9\ \mathrm{km\,Myr^{-1}} = 2.1\ \mathrm{cm\,yr^{-1}}.$$

(b) The rate has increased by about 22 percent in the last 0.78 Myr. Whether that is a real tectonic change depends on the uncertainties: anomaly identifications are usually good to a few kilometres, and the ridge axis position to a kilometre or two. A 2 km error on the 20 km measurement is 10 percent, so the change is **marginally significant at best** — real enough to be worth checking against the other flank and against a neighbouring profile, not yet enough to announce a change in plate motion.

This is a good habit to carry: a spreading-rate change computed from two intervals with different lever arms is systematically more uncertain in the short one, and short intervals near the axis are exactly where errors bite hardest.

(c) $$2\times2.6 = 5.1\ \mathrm{cm\,yr^{-1}}.$$

</details>

## Connections

- **Backward:** the spreading rates fitted to the sine curve are [3.4](03-04-magnetic-anomalies-reversals.md)'s; the geodetic velocities that check them on a decadal timescale are [2.7](02-07-space-geodesy.md)'s; the palaeomagnetic reconstructions of [3.3](03-03-paleomagnetism.md) supply the deep-time positions where no ocean floor survives.
- **Forward:** [4.5](04-05-plate-driving-forces.md) asks what force balance produces these particular velocities, and uses the observation — established here — that plate motions are steady over three million years to argue that the driving forces must be steady too.
- **Sideways:** Euler's rotation theorem and the composition of rotations are rigid-body kinematics from [`mechanics-refresher`](../../mechanics-refresher/syllabus.md), with the non-commutativity of finite rotations being the same fact that makes rotation matrices a non-abelian group in [`abstract-algebra`](../../abstract-algebra/syllabus.md) and [`representation-theory`](../../representation-theory/syllabus.md). [`geology` 2.2](../../geology/lessons/02-02-plate-boundaries.md) owns plate boundaries as geological objects — what they look like, what they produce — and cites this lesson for the quantitative kinematics; the triple-junction stability analysis explains the boundary reorganizations that lesson describes.

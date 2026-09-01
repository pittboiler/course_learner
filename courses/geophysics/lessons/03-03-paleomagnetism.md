# Geophysics · Lesson 3.3: Palaeomagnetism

> ⏱ ~15 min · Module 3: Geomagnetism, palaeomagnetism & plate kinematics · Builds on: [3.1](03-01-the-main-field.md), [3.2](03-02-the-geodynamo.md) · Unlocks: [3.4](03-04-magnetic-anomalies-reversals.md), [3.5](03-05-plate-kinematics-euler-poles.md)

## Why this matters

Rocks remember the magnetic field that was present when they formed, and $\tan I = 2\tan\lambda$ turns that memory into a latitude. So a lava flow is a fossil latitude measurement, accurate to a degree or two, valid for billions of years.

That is the observation that broke continental drift's deadlock. Wegener had the fit of the coastlines and the fossils, and no mechanism; palaeomagnetism supplied something better than a mechanism — a *measurement*. In the 1950s, when Britain's Triassic rocks were shown to have formed 30 degrees south of where they sit today, the argument stopped being about whether continents move and became about how fast.

There is also a hard limit worth learning early, because it shapes everything downstream: **palaeomagnetism cannot recover longitude.** An axially symmetric field cannot encode a coordinate it is symmetric in.

## The idea

**Iron oxide grains lock in a direction when they cool through a critical temperature.** Above it, thermal energy flips the grains' magnetization back and forth in seconds, so they simply follow the ambient field. Below it, the flipping time shoots up astronomically and the direction is frozen. The transition is sharp — a matter of degrees, because the relaxation time depends *exponentially* on temperature — and the temperature at which it happens is the **blocking temperature**, close to the mineral's Curie point.

**There are three main ways rocks acquire a remanence.** Igneous rocks cooling through the blocking temperature acquire **thermoremanent** magnetization (TRM) — by far the strongest and most reliable. Sediments acquire **detrital** remanence (DRM) as magnetic grains settle and align, a weaker and more error-prone signal. And chemical growth of new magnetic minerals during weathering or alteration produces **chemical** remanence (CRM), which is usually a contaminant.

**Real samples carry more than one magnetization, and the job is to separate them.** A rock may hold its original TRM plus a later overprint acquired during burial or alteration. Progressive demagnetization — heating in steps, or applying alternating fields of increasing strength — strips off the softer components first, and the direction that remains stable over a range of steps is the primary one.

**Field tests decide whether the remanence predates a geological event.** The **fold test** is the classic: sample a folded bed at several places. If the directions cluster after you rotate each site back to horizontal, the magnetization predates the folding; if they cluster *before* unfolding, it was acquired afterwards. This turns a structural relationship into a clean yes-or-no test on the magnetization's age.

**Averaging is not optional.** The field at any instant is a tilted dipole plus a wandering non-dipole part, so a single lava flow records something several degrees off the axial dipole. Sampling many flows spanning ten thousand years or more averages the secular variation away, and *then* the geocentric axial dipole hypothesis applies.

**And then the pole positions can be plotted through time.** For each dated formation, compute where the pole must have been. Joining them gives an **apparent polar wander path**. The pole did not really wander; the continent did. Two continents that were joined must share a single path, and the age at which their paths diverge dates their separation.

## The formal version

**Néel relaxation time.** For a single-domain grain of volume $v$:

$$\tau = \frac{1}{C}\exp\!\left(\frac{v\,\mu_0 H_K M_s}{2kT}\right),$$

with $C \approx 10^{9}\ \mathrm{s^{-1}}$, $H_K$ the microscopic coercivity and $M_s$ the saturation magnetization. *In words: the time a grain holds its direction rises exponentially with its volume and with falling temperature.* The exponential is what makes blocking sharp: a 10 percent temperature drop can change $\tau$ from seconds to millions of years.

Grains too small to be stable at ambient temperature are **superparamagnetic** and carry no useful record.

**Key mineral temperatures.**

| Mineral | Curie temperature |
|---|---|
| magnetite (Fe₃O₄) | 580 °C |
| hematite (Fe₂O₃) | 680 °C |
| titanomagnetites | 200–580 °C, depending on Ti |

**Palaeolatitude from inclination.**

$$\boxed{\ \tan\lambda = \frac{\tan I}{2}\ }$$

*In words: halve the tangent of the dip and take the arctangent.* The sign of $I$ gives the hemisphere — but only if the field's polarity at that time is known, which it often is not, so palaeolatitudes carry a hemisphere ambiguity unless the polarity sequence is independently established.

**The virtual geomagnetic pole (VGP).** Combining $I$ and $D$ at a site of known present position $(\lambda_s,\varphi_s)$ gives the pole position implied by that one sample. The palaeocolatitude is

$$p = 90^\circ - \lambda, \qquad \cot p = \tfrac12\tan I,$$

and the pole lies at angular distance $p$ from the site along the bearing given by the declination $D$. Averaging many VGPs from a formation gives the **palaeomagnetic pole**.

**Field tests.**

| Test | Question it answers |
|---|---|
| fold test | Was the remanence acquired before or after folding? |
| conglomerate test | Are clast directions random (remanence predates erosion) or aligned (remagnetized since)? |
| reversal test | Do normal and reversed directions differ by exactly 180°? If so, secular variation has been averaged out. |
| baked-contact test | Does the baked country rock next to an intrusion match the intrusion's direction? |

**The GAD hypothesis.** Averaged over $10^{4}$ to $10^{5}$ years, the field is a geocentric dipole aligned with the rotation axis. This is the load-bearing assumption of the entire subject. Its support: present-day field averages very nearly to GAD over the last few thousand years; the reversal test works; and palaeolatitudes agree with independent palaeoclimate indicators (evaporites near the palaeoequator, glacial deposits near palaeopoles). Its known weakness: small persistent non-GAD terms, particularly an axial *octupole*, may bias palaeolatitudes by a few degrees.

**What cannot be recovered.** A geocentric axial dipole field is symmetric about the rotation axis. Nothing in it distinguishes one longitude from another, so **palaeolongitude is unrecoverable from palaeomagnetism alone.** Ancient continental reconstructions are therefore fixed in latitude and orientation but free to slide in longitude, and pinning them down needs hotspot tracks, geological piercing points or plate-circuit closure.

## Picture

![Left: a graph of the logarithm of relaxation time against falling temperature, showing a curve that is flat and low at high temperature, rises very steeply through a marked blocking temperature at 580 degrees for magnetite, and flattens high on the other side. Labels note that above the blocking temperature grains flip in seconds while below it they hold for billions of years, and that because relaxation time depends exponentially on grain volume and temperature the transition is sharp, a few degrees rather than a few hundred. Right: a polar projection showing the present pole at the centre of a circle, with two apparent polar wander paths leaving it. They run together back through several points and then split at a marked junction, one continuing in blue for continent A and one in coral for continent B. A note says that two continents joined together must share one apparent polar wander path, that the age at which the paths diverge dates the rifting, and that the angle between them afterwards measures how far apart they have moved](assets/03-03-fig1.svg)

The pole never moved. Everything else did.

## Worked examples

**Example 1 (mechanical — how far has India come?).** A Deccan Trap basalt now at 19.0°N records a stable inclination of $I = -45.0^\circ$ and is dated at 65 Ma. Find its palaeolatitude, the northward displacement, and the average velocity.

*Palaeolatitude.*
$$\tan\lambda = \frac{\tan(-45.0^\circ)}{2} = \frac{-1.000}{2} = -0.500 \;\Rightarrow\; \lambda = -26.6^\circ, \text{ i.e. } 26.6^\circ\mathrm{S}.$$

*Displacement.*
$$\Delta\lambda = 19.0 - (-26.6) = 45.6^\circ,$$
$$d = 45.6\times111.2\ \mathrm{km\,deg^{-1}} = 5071\ \mathrm{km}.$$

*Velocity.*
$$v = \frac{5.071\times10^{6}\ \mathrm{m}}{65\times10^{6}\ \mathrm{yr}} = 0.078\ \mathrm{m\,yr^{-1}} = 78\ \mathrm{mm\,yr^{-1}}.$$

**Nearly eight centimetres a year, averaged over 65 million years** — roughly twice a typical plate speed, and India's rapid northward flight is one of the best-documented anomalies in plate tectonics. (Marine magnetic anomalies in the Indian Ocean show it peaked near 180 mm/yr before slowing sharply on collision with Asia, which is exactly what an average of 78 over the whole interval implies.)

**Example 2 (why you'd care — the fold test, and why field tests beat lab work).** Two limbs of an anticline are sampled. In present coordinates, limb A gives a mean direction of $D = 020^\circ$, $I = 52^\circ$; limb B gives $D = 340^\circ$, $I = 30^\circ$. Limb A dips 25° to the east, limb B dips 30° to the west. Untilting each limb about its strike brings both directions to approximately $D = 000^\circ$, $I = 45^\circ$. What does this establish, and why does it matter more than any laboratory measurement?

*The logic.* If the magnetization were acquired *after* folding, all sites would already agree in present coordinates and untilting would scatter them. Observed: they disagree before untilting and agree after. **The magnetization therefore predates the folding** — it is at least as old as the deformation, and if the rocks are dated and the fold is dated, the remanence is bracketed.

*Palaeolatitude from the restored direction.*
$$\tan\lambda = \frac{\tan45^\circ}{2} = 0.500 \;\Rightarrow\; \lambda = 26.6^\circ.$$

*Why this is the decisive kind of evidence.* Every laboratory demagnetization experiment answers the question "is this component stable in the lab?" — which is necessary but nowhere near sufficient. A rock remagnetized 200 million years after it formed can carry a beautifully stable, perfectly linear demagnetization path pointing in a completely spurious direction. Stability in the lab certifies the *measurement*, not the *age*.

A field test does something no lab can: it ties the magnetization to a datable geological event using the geometry of the outcrop. The fold test says "older than the folding". The baked-contact test says "the intrusion's heat overprinted the country rock, and both now agree, so the intrusion's direction is real". The conglomerate test says "these clasts were tumbled after magnetization, and their directions are random, so nothing has remagnetized them since".

**This is a general pattern in the Earth sciences and worth naming: the strongest evidence usually comes from exploiting a geometry that nature has already provided, not from a more precise instrument.** The fold test cost nothing but the decision to sample both limbs, and it settles a question that no amount of magnetometer precision could touch. The same reasoning underlies the reversal test (which certifies that secular variation has been averaged out) and, in a different guise, the Vine–Matthews argument of [3.4](03-04-magnetic-anomalies-reversals.md), where the *symmetry* of the anomaly pattern about a ridge is the evidence, not the anomalies themselves.

## Watch out

- **You might think** a palaeomagnetic pole tells you where the continent was. **Actually** it tells you the continent's latitude and its orientation (from declination), and nothing about longitude. Reconstructions are free to slide east–west, and this genuinely limits how well ancient supercontinents can be assembled.
- **You might think** more precise measurements give more precise palaeolatitudes. **Actually** the dominant error is usually not measurement but **secular variation** — the field's own wandering, several degrees, which is averaged down only by sampling enough independent time slices. Twenty flows spanning 20,000 years beat one flow measured a hundred times.
- **You might think** an inclination of, say, $+30^\circ$ unambiguously means 16° north. **Actually** it means 16° in whichever hemisphere the field's polarity makes it. Because the field reverses, a normal-polarity $+30^\circ$ and a reversed-polarity $-30^\circ$ record the same site latitude with opposite signs, and resolving the ambiguity requires an independent polarity constraint — usually magnetostratigraphy ([3.4](03-04-magnetic-anomalies-reversals.md)).

## One-liner

> Cooling rock freezes in the field direction, the dip angle converts to latitude, and averaging enough samples turns a hand specimen into a measurement of where a continent used to be — in latitude and orientation, never in longitude.

## Problems

**P1 (🟢)** A basalt now at 42.0°N records a stable inclination of $+18.0^\circ$ (normal polarity). (a) Compute the palaeolatitude. (b) Compute the northward displacement in degrees and kilometres. (c) The rock is dated at 120 Ma; compute the average northward velocity in mm/yr.

**P2 (🟡)** A sedimentary sequence at 55.0°S gives $I = -68.0^\circ$ and $D = 195^\circ$. (a) Compute the palaeolatitude. (b) Compute the palaeocolatitude $p$. (c) Explain in one sentence how $D$ would be used, together with $p$, to locate the virtual geomagnetic pole. (d) A colleague notes the sediments are red beds and may carry a chemical remanence; state which field test you would apply and what result would reassure you.

**P3 (🔴, bridges to [3.5](03-05-plate-kinematics-euler-poles.md))** Two continents, X and Y, have apparent polar wander paths that coincide from 400 to 200 Ma and diverge thereafter, reaching a separation of 22° of arc by 100 Ma. (a) Interpret the coincidence and the divergence. (b) Estimate the relative displacement between X and Y between 200 and 100 Ma, and the average relative velocity. (c) Explain why this displacement is a *lower bound* on their true relative motion. (d) Marine magnetic anomalies in the ocean between them give a total opening of 3400 km over the same interval. Reconcile the two numbers and say what the discrepancy is diagnostic of.

<details>
<summary>Solutions</summary>

**P1** (a) $$\tan\lambda = \frac{\tan18.0^\circ}{2} = \frac{0.32492}{2} = 0.16246 \;\Rightarrow\; \lambda = 9.23^\circ\mathrm{N}.$$

(b) $$\Delta\lambda = 42.0 - 9.23 = 32.8^\circ, \qquad d = 32.8\times111.2 = 3647\ \mathrm{km}.$$

(c) $$v = \frac{3.647\times10^{6}\ \mathrm{m}}{1.2\times10^{8}\ \mathrm{yr}} = 0.0304\ \mathrm{m\,yr^{-1}} = 30\ \mathrm{mm\,yr^{-1}}.$$

A thoroughly ordinary plate velocity, unlike India's.

**P2** (a) $$\tan\lambda = \frac{\tan(-68.0^\circ)}{2} = \frac{-2.4751}{2} = -1.2376 \;\Rightarrow\; \lambda = -51.1^\circ, \text{ i.e. } 51.1^\circ\mathrm{S}.$$

So the site has moved only about 4 degrees of latitude since deposition — it was already at high southern latitude.

(b) $$p = 90^\circ - |\lambda| = 90 - 51.1 = 38.9^\circ.$$

(c) The pole lies at an angular distance $p = 38.9^\circ$ from the site, measured along the great circle whose bearing at the site is the declination $D = 195^\circ$ — that is, 39 degrees of arc away in the direction 195° (roughly south-southwest). Spherical trigonometry then converts that bearing-and-distance into the pole's latitude and longitude.

(d) The **conglomerate test**, if a conglomerate containing clasts of the sequence exists, or failing that the **fold test** if the beds are folded. Red beds acquire their colour, and often their magnetization, from post-depositional oxidation of iron minerals — a chemical remanence acquired long after deposition — so the specific worry is remagnetization.

A reassuring result: in the conglomerate test, clast directions **randomly scattered**, showing that nothing has remagnetized the rock since the clasts were tumbled. In the fold test, directions that cluster **after** untilting. Either outcome bounds the remanence's age by a datable geological event, which no laboratory measurement can do.

**P3** (a) Coincident paths from 400 to 200 Ma mean the two continents shared a single apparent polar wander path — they were **joined and moving as one plate**. Divergence after 200 Ma means they began moving independently: **rifting began at 200 Ma**.

(b) A 22° separation of poles corresponds to a 22° relative rotation of the two continents:

$$d = 22\times111.2 = 2446\ \mathrm{km},$$
$$v = \frac{2.446\times10^{6}\ \mathrm{m}}{1.0\times10^{8}\ \mathrm{yr}} = 0.0245\ \mathrm{m\,yr^{-1}} = 24\ \mathrm{mm\,yr^{-1}}.$$

(c) Because **the pole separation is blind to any relative motion along lines of palaeolongitude-preserving symmetry** — more concretely, two continents can move relative to one another in a way that changes their longitudes without changing either one's latitude or orientation relative to the pole. Such motion leaves both apparent polar wander paths unchanged and is therefore invisible.

Since the pole separation captures only the part of the relative motion that changes palaeolatitude or orientation, it is a lower bound on the total. Any east–west component is missed entirely.

(d) The marine magnetic record gives 3400 km against the palaeomagnetic 2446 km — the seafloor record is larger, as part (c) says it must be. The difference,

$$\sqrt{3400^2 - 2446^2} = \sqrt{1.156\times10^{7} - 5.983\times10^{6}} = \sqrt{5.58\times10^{6}} = 2362\ \mathrm{km},$$

is (to the accuracy of this crude decomposition) the component of opening that palaeomagnetism could not see — a substantial **longitudinal** component, meaning the two continents separated along a direction with a large east–west element.

The discrepancy is therefore not an error in either method but a **diagnostic of the opening direction**. This is precisely why modern plate reconstructions are built from marine magnetic anomalies and fracture-zone geometry ([3.4](03-04-magnetic-anomalies-reversals.md), [3.5](03-05-plate-kinematics-euler-poles.md)) wherever ocean floor of the right age survives, and fall back on palaeomagnetism only for older times, where all the ocean floor has been subducted and latitude-plus-orientation is all that can be recovered. The two methods are complementary in exactly the way their blind spots differ.

</details>

## Flashback

**From Lesson 3.2 (The geodynamo):** A planetary core has $\sigma = 8\times10^{5}\ \mathrm{S\,m^{-1}}$ and radius $2.5\times10^{6}$ m, with a core flow of $1\times10^{-4}\ \mathrm{m\,s^{-1}}$. (a) Compute the magnetic diffusivity. (b) Compute the free decay time in years. (c) Compute $R_m$ and comment on whether a dynamo can operate.

<details>
<summary>Solution</summary>

(a) $$\eta = \frac{1}{\mu_0\sigma} = \frac{1}{4\pi\times10^{-7}\times8\times10^{5}} = \frac{1}{1.0053} = 0.995\ \mathrm{m^2\,s^{-1}}.$$

(b) $$\tau = \frac{L^2}{\pi^2\eta} = \frac{(2.5\times10^{6})^2}{9.8696\times0.995} = \frac{6.25\times10^{12}}{9.821} = 6.36\times10^{11}\ \mathrm{s}.$$
$$= \frac{6.36\times10^{11}}{3.156\times10^{7}} = 2.02\times10^{4}\ \mathrm{yr}.$$

(c) $$R_m = \frac{uL}{\eta} = \frac{1\times10^{-4}\times2.5\times10^{6}}{0.995} = \frac{250}{0.995} = 251.$$

Well above the critical value of order 10 to 100, so **a dynamo can operate** provided the flow has suitable helicity — $R_m$ is a necessary condition, not a sufficient one, since Cowling's theorem rules out flows that are too symmetric no matter how vigorous they are.

</details>

## Connections

- **Backward:** $\tan I = 2\tan\lambda$ and the GAD field are [3.1](03-01-the-main-field.md)'s; the reversals that create the polarity ambiguity are [3.2](03-02-the-geodynamo.md)'s dynamo doing what its equations permit.
- **Forward:** [3.4](03-04-magnetic-anomalies-reversals.md) uses the same remanence carried by seafloor basalt, but reads the *polarity sequence* rather than the direction, which sidesteps the longitude problem entirely; [3.5](03-05-plate-kinematics-euler-poles.md) assembles both into quantitative plate reconstructions.
- **Sideways:** the Néel relaxation time is an Arrhenius thermal-activation argument, the same form as the diffusion and creep kinetics of [materials-science 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) and the closure temperature of radiometric dating in [`geology` 4.2](../../geology/lessons/04-02-radiometric-dating.md) — in all three cases a process that is fast above a temperature and effectively frozen below it, with the sharpness coming from an exponential. [`geology` 2.1](../../geology/lessons/02-01-evidence-for-drift.md) owns the historical argument that this evidence settled.

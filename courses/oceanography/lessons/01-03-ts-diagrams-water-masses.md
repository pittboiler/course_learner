# Physical Oceanography · Lesson 1.3: T–S diagrams and water-mass identification

> ⏱ ~15 min · Module 1: Seawater and its structure · Builds on: [1.1](01-01-temperature-salinity-pressure.md), [1.2](01-02-density-equation-of-state.md) · Unlocks: [1.4](01-04-stratification-buoyancy-frequency.md), [4.1](04-01-water-masses-world-ocean.md)

## Why this matters

The ocean has no dye in it. You cannot watch a parcel of water travel from the Labrador Sea to the Indian Ocean; the trip takes centuries and the parcel is indistinguishable from its neighbours by sight. Yet oceanographers routinely say things like "that is Antarctic Intermediate Water, at 900 m, 12,000 km from where it was made." The evidence for that claim comes almost entirely from one plot.

The temperature–salinity diagram is the most information-dense object in descriptive oceanography, and its power rests on a single structural fact established in [1.1](01-01-temperature-salinity-pressure.md): $\theta$ and $S$ are conservative, so **in the interior they can only be changed by mixing**. That turns the geometry of the plot into a mixing calculus. Straight segments mean two-component mixing. Kinks mean a source. Curvature means three or more components. You can read a water column's plumbing off it.

## The idea

**Throw away depth.** A CTD cast gives you $\theta$, $S$ and $p$ at every level. Plot $\theta$ against $S$ and *discard* $p$. This sounds like vandalism and is the whole trick: depth is a local accident of where the water happens to be now, whereas $(\theta, S)$ is a permanent label acquired at the surface, wherever and whenever that was. A station becomes a **curve** on the T–S plane, threading from warm-salty surface water at the top to cold deep water at the bottom.

**Mixing is a straight line, because both coordinates mix linearly.** Blend a fraction $x$ of parcel 1 with $1-x$ of parcel 2 and the result has $\theta = x\theta_1 + (1-x)\theta_2$ and $S = xS_1 + (1-x)S_2$. Both are linear in the *same* $x$, so the mixture lies on the straight segment joining the parents — and its position along that segment tells you the mixing ratio. This is the entire basis of quantitative water-mass analysis.

**So kinks are sources.** If a T–S curve were a single straight line, the whole column would be two end-members mixing. Real curves have corners. Each corner is a $(\theta,S)$ pair the column keeps returning to no matter how much it mixes — a **water-mass core**, the signature of water injected at that density from somewhere else. In practice a core shows up as an extremum in salinity at some depth: a salinity *minimum* where fresh intermediate water has spread in, a salinity *maximum* where salty deep water has.

**And smooth curvature is a third component, or age.** A gently curved segment between two cores is what a long mixing history produces: the corner gets rounded as the core is eroded by diffusion. How rounded the corner is, is a crude clock. Fresh cores are sharp; ancient ones are barely a wobble.

## The formal version

**The mixing line.** For two source waters $(\theta_1,S_1)$ and $(\theta_2,S_2)$ mixed in mass fractions $x$ and $1-x$:

$$\theta = x\,\theta_1 + (1-x)\,\theta_2, \qquad S = x\,S_1 + (1-x)\,S_2.$$

*In words: the mixture sits on the straight line between the parents, at the position given by the mixing fraction.* Eliminating $x$,

$$\boxed{\ \frac{\theta - \theta_2}{\theta_1-\theta_2} \;=\; \frac{S-S_2}{S_1-S_2} \;=\; x. \ }$$

Two independent equations, one unknown — so an observed $(\theta,S)$ **over-determines** $x$, and the two estimates agreeing is a check that only two sources are involved. If they disagree, there is a third.

**Three-component mixing.** With three sources, a sample satisfies

$$\theta = \sum_{i=1}^{3} x_i\theta_i, \qquad S = \sum_i x_i S_i, \qquad \sum_i x_i = 1,$$

three equations for three unknowns, uniquely solvable — provided the three sources are not collinear on the T–S plane, which is the *only* condition and is worth checking before trusting an answer. Beyond three components, $(\theta,S)$ alone is not enough and you must bring in extra tracers: oxygen, silicate, nutrients. That generalization is called **optimum multiparameter analysis**, and it is how modern water-mass censuses are actually done.

**Isopycnals as the background grid.** Superimposing lines of constant $\sigma_\theta$ ([1.2](01-02-density-equation-of-state.md)) converts the plot from descriptive to dynamical: you can see at a glance which waters can exchange places without work, and — because those lines are *curved* — you can see the cabbeling: a straight mixing line crossing a curved isopycnal ends up on its dense side.

**What the ocean actually contains.** Tabulate the ocean's volume by $(\theta,S)$ cell and the result is startling:

| Fraction of ocean volume | $\theta$ range | $S$ range |
|---|---|---|
| about 75 percent | 0 to 6 °C | 34.5 to 35.0 |
| about 50 percent | 0.5 to 3 °C | 34.6 to 34.8 |
| a few percent | above 15 °C | anything |

*In words: the ocean is a cold, slightly salty, nearly uniform reservoir with a thin warm skin.* The tropical surface ocean that dominates our mental image of the sea is volumetrically negligible. The mean temperature of the world ocean is about 3.5 °C. This single table reframes the subject: the interesting *dynamics* happen in the skin, and the interesting *reservoir* is the abyss.

## Picture

![A temperature-salinity diagram for a western North Atlantic station below 12 degrees, with salinity from 34.6 to 35.8 and potential temperature from 0 to 13 degrees. Grey dashed isopycnals run diagonally. The blue station curve descends from upper right, reaches a sharp salinity minimum of 34.75 at 4.8 degrees marked as the Antarctic Intermediate Water core near 800 m, turns back to a salinity maximum of 34.98 at 3.5 degrees marked as the North Atlantic Deep Water core near 2000 m, then curves back toward fresher and colder water at the bottom under Antarctic Bottom Water influence](assets/01-03-fig1.svg)

Three corners, three sources, one plot. The station never sampled Antarctica, and yet Antarctica is visible twice.

## Worked examples

**Example 1 (mechanical — what fraction is which?).** A sample at 1500 m has $(\theta, S) = (4.20\,^\circ\mathrm{C},\ 34.86)$. It is believed to be a two-component mixture of AAIW $(4.80,\ 34.75)$ and NADW $(3.50,\ 34.98)$. Find the mixing fraction, and verify that two components suffice.

From temperature, with $x$ the AAIW fraction:

$$x = \frac{\theta - \theta_{\text{NADW}}}{\theta_{\text{AAIW}} - \theta_{\text{NADW}}} = \frac{4.20 - 3.50}{4.80-3.50} = \frac{0.70}{1.30} = 0.538.$$

From salinity:

$$x = \frac{S - S_{\text{NADW}}}{S_{\text{AAIW}}-S_{\text{NADW}}} = \frac{34.86-34.98}{34.75-34.98} = \frac{-0.12}{-0.23} = 0.522.$$

The two agree to about 3 percent — well inside the uncertainty of the assumed end-member values — so **two components are sufficient** and the sample is roughly 53 percent AAIW, 47 percent NADW.

Had the two estimates come out at, say, 0.54 and 0.31, the sample would necessarily contain a third water mass, and the discrepancy's *sign* would tell you which direction on the T–S plane to look for it.

**Example 2 (why you'd care — a hidden third source).** A sample from 1200 m off Portugal reads $(\theta,S) = (9.50\,^\circ\mathrm{C},\ 35.75)$. The two candidate sources at that depth are NADW $(3.50,\ 34.98)$ and AAIW $(4.80,\ 34.75)$. Diagnose.

Apply the two-component test:

$$x_{\text{AAIW}}\ \text{from}\ \theta: \quad \frac{9.50-3.50}{4.80-3.50} = 4.62.$$

A mixing fraction of 4.62 is impossible — fractions live in $[0,1]$ — and the sample is warmer than *both* candidates, which no mixture of them can be. **The geometry has failed, and the failure is the result.** The sample lies outside the segment joining the two sources, so a third, much warmer and saltier end-member is required.

*Identifying it.* Extend the line from the NADW–AAIW region through the sample and see where it points: toward high $\theta$ and high $S$. At 1200 m off Iberia there is exactly one such source — **Mediterranean Outflow Water**, which leaves the Gibraltar sill at roughly $(13\,^\circ\mathrm{C},\ 38.4)$ and, as computed in [1.2](01-02-density-equation-of-state.md), is dense enough despite its warmth to settle near 1000 m. Taking Mediterranean water and NADW as the two dominant sources:

$$x_{\text{Med}} = \frac{9.50-3.50}{13.0-3.50} = 0.632 \quad\text{from}\ \theta, \qquad x_{\text{Med}} = \frac{35.75-34.98}{38.4-34.98} = 0.225 \quad\text{from}\ S.$$

These still disagree badly, which is honest: at this location all *three* sources are genuinely present, and a two-component fit cannot work no matter which pair you pick. Solving the full three-component system is the correct move, and it is P3 below.

*The point.* A T–S diagram fails informatively. An impossible mixing fraction is not an error message, it is a detection — it tells you a source is missing, and the direction of the failure tells you what kind of source. This is a general and underrated property of over-determined systems: **the residual is data.**

## Watch out

- **You might think** a station's T–S curve tells you about depth. **Actually** you have deliberately thrown depth away, and the same $(\theta,S)$ point can occur at two different depths in the same cast. Always keep the depth information alongside, in a separate profile plot — the T–S diagram identifies *what* the water is, never *where* it is.
- **You might think** a straight T–S segment proves two-component mixing. **Actually** it only fails to disprove it. Three sources that happen to be nearly collinear produce a straight segment too, and that is not a hypothetical: AAIW, NADW and AABW are uncomfortably close to collinear in parts of the South Atlantic, which is precisely why silicate is brought in as a fourth coordinate there.
- **You might think** the corner of a T–S curve is the pure water mass. **Actually** it is the *most nearly pure* sample in that column — the core has already been diluted by everything it passed through. True end-member properties are defined at the formation region, and using an observed remote core as an end-member biases every mixing fraction you compute from it.

## One-liner

> Discard depth, plot temperature against salinity, and the ocean's plumbing becomes geometry: straight segments are two-component mixtures, corners are sources, and a mixing fraction outside zero to one is not an error but the detection of a water mass you forgot.

## Problems

**P1 (🟢)** A sample reads $(\theta,S) = (2.80\,^\circ\mathrm{C},\ 34.93)$. The two end-members are NADW $(3.50,\ 34.98)$ and AABW $(-0.50,\ 34.65)$. (a) Compute the NADW fraction from temperature and from salinity. (b) State whether two components suffice, and give the composition.

**P2 (🟡)** Water mass 1 is $(\theta_1,S_1) = (6.0\,^\circ\mathrm{C},\ 34.60)$. Water mass 2 sits at $14.0\,^\circ\mathrm{C}$ **on the same isopycnal**. Take $\beta = 7.6\times10^{-4}$, $\rho = 1027\ \mathrm{kg\,m^{-3}}$, and the tabulated coefficients $\alpha(6) = 1.24$, $\alpha(8) = 1.45$, $\alpha(10) = 1.67$, $\alpha(14) = 2.05$, all $\times10^{-4}\ \mathrm{K^{-1}}$. (a) Find $S_2$ by integrating the isopycnal slope with Simpson's rule. (b) Locate the 50:50 mixture, find where the isopycnal actually is at the mixture's temperature, and compute the cabbeling density anomaly. (c) State in one sentence what this implies about the fate of the mixture at an oceanic front.

**P3 (🔴, optional)** A sample off Portugal at 1200 m reads $(\theta,S) = (9.50\,^\circ\mathrm{C},\ 35.75)$. The three sources are Mediterranean Outflow Water $(13.0,\ 38.4)$, NADW $(3.50,\ 34.98)$ and AAIW $(4.80,\ 34.75)$. (a) Set up and solve the three-component system for the fractions. (b) Comment on whether the answer is physically acceptable. (c) The three end-members must not be collinear for the system to be solvable. Test collinearity by computing the area of the triangle they form on the T–S plane, and say what a near-zero area would have meant for the reliability of your answer.

<details>
<summary>Solutions</summary>

**P1** (a) Let $x$ be the NADW fraction.

From $\theta$: $$x = \frac{2.80-(-0.50)}{3.50-(-0.50)} = \frac{3.30}{4.00} = 0.825.$$

From $S$: $$x = \frac{34.93-34.65}{34.98-34.65} = \frac{0.28}{0.33} = 0.848.$$

(b) The two estimates agree to within 3 percent, so two components suffice. The sample is about **84 percent NADW and 16 percent AABW**, which is a typical composition for the lower North Atlantic Deep Water layer where the Antarctic contribution is beginning to be felt.

**P2** (a) The isopycnal satisfies $dS/d\theta = \alpha(\theta)/\beta$. Integrate $\alpha$ from 6 to 14 °C by Simpson's rule, using $\alpha(6)$, $\alpha(10)$ and $\alpha(14)$:

$$\int_6^{14}\alpha\,d\theta = \frac{8}{6}\left[1.24 + 4(1.67) + 2.05\right]\times10^{-4} = \frac{8}{6}(9.97)\times10^{-4} = 1.329\times10^{-3}.$$

$$\Delta S = \frac{1.329\times10^{-3}}{7.6\times10^{-4}} = 1.749, \qquad S_2 = 34.60 + 1.75 = 36.35.$$

(b) Both coordinates mix linearly, so the 50:50 mixture is at

$$\theta = 10.0\,^\circ\mathrm{C}, \qquad S = \tfrac12(34.60+36.35) = 35.475.$$

Where is the isopycnal at 10 °C? Integrate from 6 to 10, using $\alpha(6)$, $\alpha(8)$, $\alpha(10)$:

$$\int_6^{10}\alpha\,d\theta = \frac{4}{6}\left[1.24 + 4(1.45) + 1.67\right]\times10^{-4} = \frac{4}{6}(8.71)\times10^{-4} = 5.807\times10^{-4},$$
$$\Delta S = \frac{5.807\times10^{-4}}{7.6\times10^{-4}} = 0.764, \qquad S_{\text{isopycnal}}(10) = 34.60+0.764 = 35.364.$$

The mixture is **saltier than the isopycnal at its own temperature** by $35.475 - 35.364 = 0.111$, hence denser:

$$\Delta\rho = \rho\,\beta\,\Delta S = 1027\times7.6\times10^{-4}\times0.111 = 0.087\ \mathrm{kg\,m^{-3}}.$$

A positive anomaly of about $0.09\ \mathrm{kg\,m^{-3}}$ — the mixture of two equally dense parcels is denser than both. Note that this is almost exactly the value obtained in [1.2](01-02-density-equation-of-state.md) for a parcel pair spanning a similar 8 K contrast, which is the expected behaviour: the cabbeling anomaly scales with the *square* of the temperature separation and only weakly with where in the range you sit.

(c) At a front, the mixture is denser than the water on either side of it, so it sinks — which makes frontal stirring a continuous, if slow, pump of surface water into the interior, entirely independent of any surface buoyancy loss.

**P3** (a) With $m$, $n$, $a$ the Mediterranean, NADW and AAIW fractions:

$$13.0\,m + 3.50\,n + 4.80\,a = 9.50$$
$$38.4\,m + 34.98\,n + 34.75\,a = 35.75$$
$$m + n + a = 1$$

Substitute $a = 1-m-n$ into the first two:

$$13.0m + 3.50n + 4.80 - 4.80m - 4.80n = 9.50 \;\Longrightarrow\; 8.20m - 1.30n = 4.70$$
$$38.4m + 34.98n + 34.75 - 34.75m - 34.75n = 35.75 \;\Longrightarrow\; 3.65m + 0.23n = 1.00$$

From the second, $n = (1.00 - 3.65m)/0.23 = 4.348 - 15.87m$. Substitute:

$$8.20m - 1.30(4.348 - 15.87m) = 4.70$$
$$8.20m - 5.652 + 20.63m = 4.70$$
$$28.83m = 10.352 \;\Longrightarrow\; m = 0.359.$$

Then $n = 4.348 - 15.87(0.359) = 4.348 - 5.697 = -1.349$, and $a = 1 - 0.359 + 1.349 = 1.990$.

(b) **Not physically acceptable.** Two of the three fractions are outside $[0,1]$, one strongly negative. The arithmetic is fine; the model is wrong. The likeliest cause is a bad end-member: this sample almost certainly contains Mediterranean water that has *already* been diluted before reaching the site, so using the undiluted sill values $(13.0, 38.4)$ as an end-member forces the solver to subtract water elsewhere to compensate. Using a realistic diluted Mediterranean core — say $(11.0, 36.5)$ — would bring the fractions back into range. The general lesson: in a three-component solve, **negative fractions almost always indicate an end-member error rather than a measurement error.**

(c) The triangle area on the $(S,\theta)$ plane, with vertices $(38.4, 13.0)$, $(34.98, 3.50)$, $(34.75, 4.80)$:

$$A = \tfrac12\left|S_1(\theta_2-\theta_3) + S_2(\theta_3-\theta_1) + S_3(\theta_1-\theta_2)\right|$$
$$= \tfrac12\left|38.4(3.50-4.80) + 34.98(4.80-13.0) + 34.75(13.0-3.50)\right|$$
$$= \tfrac12\left|-49.92 - 286.84 + 330.13\right| = \tfrac12(6.63) = 3.32.$$

Non-zero, so the system is solvable in principle. But it is worth noting how the area is built: three terms of order 300 cancelling down to 6.6. That is a **near-degenerate** system — the determinant is the small difference of large numbers — and it means the solution amplifies end-member errors enormously, which is exactly the pathology (b) exhibited. A near-zero area would have meant the three sources lie on one line, the matrix is singular, and no unique decomposition exists at all; the sensible response in that case is to bring in a fourth tracer such as silicate or oxygen rather than to trust any answer the solver returns.

</details>

## Flashback

**From Lesson 1.1 (Temperature, salinity and pressure):** A CTD at a Southern Ocean station reports $T = 0.850\,^\circ\mathrm{C}$ at 4500 dbar. The depth-mean adiabatic lapse rate over the column is $\Gamma = 1.25\times10^{-4}\ \mathrm{K\,m^{-1}}$. (a) Compute $\theta$. (b) A second station 200 km away reports $T = 0.910\,^\circ\mathrm{C}$ at 4500 dbar with the same $\Gamma$. Which station holds the colder water, and by how much? (c) State in one sentence why the answer to (b) would have been the same had you skipped the conversion entirely, and what would have to differ between the two stations for that shortcut to fail.

<details>
<summary>Solution</summary>

(a) Depth: $z = 4500/1.005 = 4478\ \mathrm{m}$.

$$\Delta = \Gamma z = 1.25\times10^{-4}\times4478 = 0.560\ \mathrm{K}, \qquad \theta = 0.850 - 0.560 = 0.290\,^\circ\mathrm{C}.$$

(b) The second station: $\theta = 0.910 - 0.560 = 0.350\,^\circ\mathrm{C}$. The **first** station is colder, by $0.060$ K.

(c) Both samples are at the *same pressure* with the *same* assumed $\Gamma$, so the adiabatic correction is identical for both and cancels exactly in the difference — comparing in-situ temperatures would have given $0.910-0.850 = 0.060$ K, the same answer.

The shortcut fails as soon as the two samples are at **different pressures**, because then the corrections differ and the raw difference contains a spurious compression term. It also fails, more subtly, if the two stations are at the same pressure but have very different temperature profiles above, since $\Gamma$ depends on $\alpha$ and hence on the temperature history of the column — a warm-water column accumulates a larger adiabatic offset than a cold one at the same final pressure. The safe habit is to convert always and never rely on the cancellation.

</details>

## Connections

- **Backward:** the conservative property of $(\theta,S)$ established in [1.1](01-01-temperature-salinity-pressure.md) is what makes the mixing lines straight; the curved isopycnal background is [1.2](01-02-density-equation-of-state.md)'s nonlinear equation of state.
- **Forward:** [4.1](04-01-water-masses-world-ocean.md) uses this machinery to catalogue the whole world ocean; [4.2](04-02-deep-water-formation-convection.md) supplies the formation processes that set the end-members; and the mixing-fraction algebra reappears in [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) as the question of how fast the corners get rounded off.
- **Sideways (linear algebra):** the three-component solve is a $3\times3$ linear system whose conditioning is set by how far the end-members are from collinear, and P3 is a textbook demonstration that a nearly singular matrix returns a confident, precise, wrong answer. The same near-degeneracy diagnostic appears in [`linalg-refresher` 2.3](../../linalg-refresher/lessons/02-03-determinants.md).

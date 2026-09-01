# Planetary Science · Lesson 6.3: Mass, radius and composition

> ⏱ ~15 min · Module 6: Exoplanets and habitability · Builds on: [4.3](04-03-atmospheric-escape.md), [5.1](05-01-giant-ice-giant-interiors.md), [6.1](06-01-exoplanet-detection.md) · Unlocks: [6.4](06-04-exoplanet-atmospheres.md), [6.5](06-05-habitability-and-its-limits.md)

## Why this matters

A transit gives a radius and a Doppler wobble gives a mass. Put them together and you have a density — **the only compositional information available for a planet you cannot resolve, cannot image and cannot visit.**

The payoff is that the most common type of planet in the galaxy is one the solar system does not contain. Between Earth and Neptune in size, orbiting a large fraction of all stars, and split into **two distinct populations separated by a gap at 1.8 Earth radii.** That gap — the radius valley — was discovered in 2017 and is the sharpest structure in exoplanet demographics, and its explanation is atmospheric escape ([4.3](04-03-atmospheric-escape.md)) operating on a knife edge.

## The idea

**Density is the entry point, and it is degenerate.** A measured density is consistent with many compositions: silicate rock plus iron in various proportions, rock plus water, rock plus a thin hydrogen envelope. **Density constrains; it does not identify** — exactly as [3.1](03-01-mass-density-moment-of-inertia.md) found for solar-system bodies.

**But mass–radius *curves* do better than single densities.** Plot radius against mass and each composition traces a distinct line, because how a material compresses under its own weight is a property of the material. Iron is dense and stiff; rock less so; water ice less again; hydrogen enormously compressible. **A planet's position relative to those curves tells you what it can and cannot be made of.**

**And the exponent is small, which is the crucial and counterintuitive part.** For rocky planets $R\propto M^{0.27}$ — so a planet ten times Earth's mass is only 1.9 times its radius. **Self-compression eats most of the extra mass.** This is why radius is a poor proxy for mass, and why the two must be measured independently.

**Now the part with no solar-system analogue.** A tiny amount of hydrogen by mass makes an enormous difference to radius, because hydrogen is so light and so compressible that even a thin envelope is physically thick. **One percent of a planet's mass in hydrogen adds roughly 40 percent to its radius.** So the sub-Neptunes — 2 to 4 Earth radii, the most common planets known — are not intermediate objects. They are **rocky cores of a few Earth masses wearing a few percent of hydrogen.**

**Which sets up the radius valley.** Plot the radius distribution of close-in planets and there are two peaks — near 1.3 and 2.4 $R_\oplus$ — with a deep gap at **1.8 $R_\oplus$**. Planets in the gap are not merely rarer; they are strikingly scarce.

**The explanation is that there is nowhere in between to be.** Photoevaporation by the young star's extreme ultraviolet strips a hydrogen envelope, and the process is close to all-or-nothing: **once escape begins removing an envelope, the planet shrinks, which raises the escape rate, which removes more** — a runaway. So a planet either keeps its envelope (and sits at 2.4 $R_\oplus$) or loses it entirely (and sits at 1.3 $R_\oplus$, its bare core). Because 1 percent of hydrogen by mass spans 40 percent in radius, **there is no stable configuration at 1.8.**

**The gap is therefore a fossil of atmospheric escape**, and its position depends on stellar irradiation exactly as the theory predicts — the valley shifts to smaller radii around less luminous stars, and it moves with orbital period. That agreement is why photoevaporation is the leading explanation, though a competing mechanism — core-powered mass loss, driven by the planet's own formation heat rather than by the star — makes similar predictions and is not excluded.

## The formal version

**Density.**

$$\bar\rho = \frac{3M}{4\pi R^3} = 5513\ \mathrm{kg\,m^{-3}}\times\frac{M/M_\oplus}{(R/R_\oplus)^3}.$$

**Mass–radius relations.** For a self-gravitating body of fixed composition, hydrostatic equilibrium plus an equation of state gives a power law over a limited mass range:

$$\frac{R}{R_\oplus} \approx C\left(\frac{M}{M_\oplus}\right)^{\beta}.$$

| Composition | $C$ | $\beta$ | $R$ at $5\,M_\oplus$ |
|---|---|---|---|
| pure iron | 0.80 | 0.24 | 1.21 |
| Earth-like (33% Fe, 67% rock) | 1.00 | 0.27 | 1.54 |
| pure silicate rock | 1.10 | 0.27 | 1.70 |
| 50% water by mass | 1.42 | 0.30 | 2.28 |
| Earth core + 2% H$_2$ | ~2.10 | ~0.32 | ~3.5 |

*In words: the exponent is always well below $1/3$, because bigger planets compress themselves.* At $\beta = 1/3$ density would be constant; the actual exponents mean **density rises with mass** for solid planets — a $10\,M_\oplus$ rocky planet has $\bar\rho\approx8500\ \mathrm{kg\,m^{-3}}$ against Earth's 5513.

**The turnover.** Above about $0.5\,M_J$ the relation flattens and then *reverses*: adding mass to a gas giant compresses it, so Jupiter and a 5 $M_J$ planet have almost the same radius, and above about 70 $M_J$ (the brown-dwarf regime) radius decreases with mass as electron degeneracy takes over ([5.1](05-01-giant-ice-giant-interiors.md)).

**Why a little hydrogen goes so far.** Envelope thickness is set by scale height and the number of scale heights the atmosphere spans. For a core of radius $R_c$ with envelope mass fraction $f$:

$$\Delta R \sim H\ln\left(\frac{P_{\text{base}}}{P_{\text{photo}}}\right), \qquad H = \frac{kT}{\mu m_H g},$$

and with $\mu = 2.3$ for H$_2$/He against 29 for air, **$H$ is more than ten times larger for the same temperature and gravity.**

| $f$ (H$_2$ mass fraction) | $\Delta R/R_c$ |
|---|---|
| 0.1% | ~10% |
| 1% | ~40% |
| 3% | ~70% |
| 10% | ~150% |

**The middle row is the radius valley.** A $3\,M_\oplus$ core at $1.35\,R_\oplus$ with 1 percent hydrogen sits at $1.9\,R_\oplus$; strip it and the planet falls to 1.35. **Nothing occupies the space between**, because no stable envelope mass sits there.

**The radius valley, quantified.**

| Feature | Value |
|---|---|
| lower peak (bare cores) | $\sim1.3\,R_\oplus$ |
| **gap** | $\sim1.8\,R_\oplus$ |
| upper peak (with envelopes) | $\sim2.4\,R_\oplus$ |
| gap position vs insolation | shifts to larger $R$ at higher flux |
| gap position vs period | $R_{\text{gap}}\propto P^{-0.09}$ |

**Photoevaporation, quantitatively.** From [4.3](04-03-atmospheric-escape.md), the energy-limited rate is

$$\dot M = \frac{\varepsilon\,\pi R_p^3\,F_{\text{XUV}}}{GM_p},$$

so the timescale to lose an envelope of mass $fM_p$ is

$$t_{\text{loss}} = \frac{fM_p}{\dot M} = \frac{f\,GM_p^2}{\varepsilon\pi R_p^3F_{\text{XUV}}}.$$

**The instability is in the $R_p^3$.** As the envelope is lost the planet shrinks — but slowly at first, since a thick envelope loses radius gradually — and then, once $f$ drops below about 1 percent, the radius collapses toward the core value and $\dot M$ falls sharply. **The result is a sharp bifurcation**: planets whose $t_{\text{loss}}$ is shorter than the star's XUV-active lifetime (a few hundred Myr) end as bare cores, and those with longer $t_{\text{loss}}$ keep essentially everything.

**The competing explanation.** *Core-powered mass loss* uses the planet's own residual formation heat rather than stellar XUV to drive escape, operating over a gigayear rather than a few hundred Myr. **It predicts a valley in nearly the same place**, and distinguishing the two requires the dependence on stellar type and on age — an active area, and not settled.

**What density cannot resolve.** The degeneracy between a water-rich planet and a rock planet with a small hydrogen envelope is severe: both can produce the same $(M,R)$. **Breaking it requires atmospheric spectroscopy** ([6.4](06-04-exoplanet-atmospheres.md)), which sees the mean molecular weight directly through the scale height.

## Picture

![Left, a log-log mass-radius diagram, radius in Earth radii against mass in Earth masses. Four composition curves rise gently: pure iron lowest, then Earth-like rock, then pure water ice, then a curve for an Earth-like core with a 2 percent hydrogen envelope highest. Earth, Venus and Neptune are marked as points, with Earth on the Earth-like rock curve and Neptune far above it near the hydrogen-envelope curve. A caption notes that a radius alone is ambiguous — a 2 Earth-radius planet can be a dense rock of 10 Earth masses or a 3 Earth-mass core wrapped in 1 percent hydrogen — and that even with a mass, water and hydrogen mixtures stay degenerate. Right, a histogram of planet radius for planets with periods under 100 days, showing two distinct peaks near 1.3 and 2.4 Earth radii separated by a deep gap. A dashed coral line marks the gap at 1.8 Earth radii; the lower peak is labelled stripped cores and the upper one kept their envelopes. A caption explains that photoevaporation strips a few-percent hydrogen envelope entirely or not at all, and because 1 percent of hydrogen by mass is about 40 percent of the radius there is nothing in between, so the gap is the escape physics](assets/06-03-fig1.svg)

The left panel says a radius is ambiguous; the right panel says the ambiguity is not uniformly distributed, and the structure in it is informative.

## Worked examples

**Example 1 (mechanical — what is this planet?).** A transiting planet has $R_p = 2.0\,R_\oplus$ and a measured mass of $M_p = 9.0\,M_\oplus$. What is it made of?

$$\bar\rho = 5513\times\frac{9.0}{(2.0)^3} = 5513\times\frac{9.0}{8.0} = 5513\times1.125 = 6202\ \mathrm{kg\,m^{-3}}.$$

Compare with the composition curves at $9\,M_\oplus$:

$$\text{Earth-like: } R = 1.00\times9^{0.27} = e^{0.27\times2.1972} = e^{0.5933} = 1.81\,R_\oplus,$$
$$\text{pure rock: } R = 1.10\times1.81 = 1.99\,R_\oplus,$$
$$\text{50\% water: } R = 1.42\times9^{0.30} = 1.42\times e^{0.6592} = 1.42\times1.933 = 2.74\,R_\oplus.$$

**The observed $2.0\,R_\oplus$ falls essentially on the pure-silicate curve.** So this is a rocky planet with little or no iron core, and certainly no hydrogen envelope and no substantial water.

Note how much the mass bought. **Radius alone would have been consistent with a $3\,M_\oplus$ core plus 1 percent hydrogen, a $9\,M_\oplus$ rock, or a $5\,M_\oplus$ water world** — three completely different planets. Adding one number eliminated two of them.

**Example 2 (why you'd care — reading the radius valley).** A $3\,M_\oplus$ rocky core has $R_c = 1.35\,R_\oplus$. It forms with 1 percent of its mass in hydrogen, which adds about 40 percent to its radius. It sits at 0.1 AU around a Sun-like star, receiving $F_{\text{XUV}} = 0.3\ \mathrm{W\,m^{-2}}$ during the star's active first 500 Myr. Does it keep the envelope?

*Radius with the envelope:* $1.35\times1.40 = 1.89\,R_\oplus = 1.204\times10^{7}$ m.

*Envelope mass:* $0.01\times3\times5.972\times10^{24} = 1.79\times10^{23}$ kg.

*Escape rate* with $\varepsilon = 0.15$:

$$GM_p = 6.674\times10^{-11}\times1.792\times10^{25} = 1.196\times10^{15},$$
$$R_p^3 = (1.204\times10^{7})^3 = 1.745\times10^{21}\ \mathrm{m^3},$$
$$\dot M = \frac{0.15\times\pi\times1.745\times10^{21}\times0.3}{1.196\times10^{15}} = \frac{2.467\times10^{20}}{1.196\times10^{15}} = 2.06\times10^{5}\ \mathrm{kg\,s^{-1}}.$$

*Time to strip:*

$$t = \frac{1.79\times10^{23}}{2.06\times10^{5}} = 8.69\times10^{17}\ \mathrm{s} = \frac{8.69\times10^{17}}{3.156\times10^{7}} = 2.75\times10^{10}\ \mathrm{yr}.$$

**Twenty-seven billion years — far longer than the 500 Myr of XUV activity. The envelope survives**, and this planet ends up in the upper peak at about $1.9\,R_\oplus$.

*Now move it to 0.03 AU*, where $F_{\text{XUV}}$ is $(0.1/0.03)^2 = 11.1$ times larger, so $3.33\ \mathrm{W\,m^{-2}}$:

$$t = \frac{2.75\times10^{10}}{11.1} = 2.5\times10^{9}\ \mathrm{yr}.$$

Still longer than 500 Myr — but only by a factor of five, and the calculation is generous in several ways. It uses the *final* radius rather than the inflated early radius (a young planet is hotter and puffier, with $R_p$ perhaps 50 percent larger, which raises $\dot M$ by a factor of 3.4); it uses the time-averaged XUV rather than the much higher early value; and $\varepsilon$ may be larger.

**Push any of those and the planet crosses the threshold.** That is the point: **the outcome is decided by a comparison of two timescales that happen to be within a factor of a few of each other over the relevant range of orbital distances**, so a modest change in irradiation flips a planet from one peak to the other. The bifurcation is sharp precisely because the system sits near the boundary, and the valley's position — including its observed shift with stellar flux and orbital period — is the fingerprint of that comparison.

## Watch out

- **You might think radius scales as $M^{1/3}$, but it scales as $M^{0.27}$ for rock**, because self-compression absorbs most of the added mass. A $10\,M_\oplus$ rocky planet is under twice Earth's radius, and denser than Earth by 55 percent.
- **You might think a sub-Neptune is mostly volatile, but a $2.5\,R_\oplus$ planet is typically a rocky core carrying a few percent hydrogen by mass.** The envelope dominates the volume and is negligible in the mass budget.
- **You might think mass plus radius determines composition, but water-rich and hydrogen-envelope solutions are often degenerate.** Breaking that tie needs the mean molecular weight, which comes from transmission spectroscopy ([6.4](06-04-exoplanet-atmospheres.md)).
- **You might think a bigger giant is a bigger planet, but above about $0.5\,M_J$ the mass–radius relation flattens and then reverses.** Jupiter and a $5\,M_J$ planet are nearly the same size, and brown dwarfs are smaller than Jupiter.
- **You might think an inflated hot Jupiter's radius reflects composition, but strongly irradiated giants are systematically larger than any composition allows** ([5.1](05-01-giant-ice-giant-interiors.md) P3). The mass–radius diagram is a composition diagram only for modestly irradiated planets.
- **You might think the radius valley proves photoevaporation, but core-powered mass loss predicts a valley in nearly the same place.** The mechanism is not settled; the *existence* of an escape-driven bifurcation is.

## One-liner

> A percent of hydrogen by mass is forty percent of the radius, so a planet either keeps its envelope or loses it entirely — and the empty space between those two outcomes is the radius valley.

## Problems

**P1 (🟢)** A planet has $R_p = 1.6\,R_\oplus$ and $M_p = 6.0\,M_\oplus$. (a) Compute its mean density. (b) Compute the Earth-like-composition radius at $6\,M_\oplus$ using $R = M^{0.27}$. (c) Compare and state what the planet is likely made of.

**P2 (🟡)** Using the composition curves: iron $R = 0.80M^{0.24}$, Earth-like $R = 1.00M^{0.27}$, 50% water $R = 1.42M^{0.30}$. (a) Evaluate all three at $M = 4\,M_\oplus$. (b) A planet at $4\,M_\oplus$ has $R = 1.75\,R_\oplus$; which curve does it lie on? (c) A second planet at $4\,M_\oplus$ has $R = 2.6\,R_\oplus$; what does that require, and why can density alone not identify it?

**P3 (🔴, optional)** Use $\dot M = \varepsilon\pi R_p^3F_{\text{XUV}}/(GM_p)$ with $\varepsilon = 0.15$. A planet has a $4\,M_\oplus$ core, an envelope of 2 percent of its mass, and a radius of $2.2\,R_\oplus$, at a location where $F_{\text{XUV}} = 1.0\ \mathrm{W\,m^{-2}}$ for the first 300 Myr. (a) Compute $\dot M$. (b) Compute the stripping time. (c) Determine the outcome, then repeat assuming the planet's radius was 50 percent larger while young, and comment on which peak of the radius valley it ends in.

<details>
<summary>Solutions</summary>

**P1** (a) $$\bar\rho = 5513\times\frac{6.0}{(1.6)^3} = 5513\times\frac{6.0}{4.096} = 5513\times1.4648 = 8076\ \mathrm{kg\,m^{-3}}.$$

(b) $$R = 6^{0.27} = e^{0.27\times1.7918} = e^{0.4838} = 1.622\,R_\oplus.$$

(c) The observed $1.60\,R_\oplus$ is essentially exactly the Earth-like prediction of $1.62$ — **an Earth-composition rocky planet**, roughly one-third iron and two-thirds silicate, with no significant water or hydrogen.

Its density of $8076\ \mathrm{kg\,m^{-3}}$ is far above Earth's 5513, which is not a compositional difference but self-compression: **a six-Earth-mass planet of Earth's composition is 47 percent denser than Earth**, and quoting its density alone without the mass–radius context would make it look iron-rich.

**P2** (a) $$4^{0.24} = e^{0.24\times1.3863} = e^{0.3327} = 1.3947, \qquad R_{\text{Fe}} = 0.80\times1.3947 = 1.116\,R_\oplus.$$
$$4^{0.27} = e^{0.27\times1.3863} = e^{0.3743} = 1.4540, \qquad R_{\text{Earth-like}} = 1.454\,R_\oplus.$$
$$4^{0.30} = e^{0.30\times1.3863} = e^{0.4159} = 1.5157, \qquad R_{\text{water}} = 1.42\times1.5157 = 2.152\,R_\oplus.$$

(b) $R = 1.75\,R_\oplus$ lies **between the Earth-like curve (1.45) and the 50 percent water curve (2.15)**, closer to the former. It is consistent with a rock–water mixture of roughly 20–25 percent water by mass, or equivalently a rocky planet with a very thin (sub-percent) hydrogen envelope.

(c) $R = 2.6\,R_\oplus$ at $4\,M_\oplus$ is **above even the 50 percent water curve**, so it requires either a water fraction well above half, or — far more likely — a **hydrogen envelope of a percent or two by mass** on a rocky or mixed core.

Density alone cannot identify it because $\bar\rho = 5513\times4/2.6^3 = 1255\ \mathrm{kg\,m^{-3}}$ is compatible with both: a 70-percent-water world and a rocky core with 1.5 percent hydrogen have essentially the same bulk density, since both achieve low density by different routes — one by using a low-density material throughout, the other by wrapping a dense core in a very extended thin envelope.

**Breaking the degeneracy requires the mean molecular weight of the atmosphere.** A hydrogen envelope has $\mu\approx2.3$ and a correspondingly large scale height, producing a large transmission signal; a steam or high-metallicity atmosphere has $\mu\approx18$ or more and a signal roughly eight times smaller ([6.4](06-04-exoplanet-atmospheres.md)). That is a direct, model-light discriminator, and it is the single strongest argument for spending JWST time on sub-Neptunes.

**P3** (a) $$M_p = 4\times5.972\times10^{24} = 2.389\times10^{25}\ \mathrm{kg}, \qquad R_p = 2.2\times6.371\times10^{6} = 1.402\times10^{7}\ \mathrm{m}.$$

$$GM_p = 6.674\times10^{-11}\times2.389\times10^{25} = 1.594\times10^{15},$$
$$R_p^3 = (1.402\times10^{7})^3 = 2.756\times10^{21}\ \mathrm{m^3},$$
$$\dot M = \frac{0.15\times\pi\times2.756\times10^{21}\times1.0}{1.594\times10^{15}} = \frac{1.299\times10^{21}}{1.594\times10^{15}} = 8.15\times10^{5}\ \mathrm{kg\,s^{-1}}.$$

(b) Envelope mass $= 0.02\times2.389\times10^{25} = 4.78\times10^{23}$ kg.

$$t = \frac{4.78\times10^{23}}{8.15\times10^{5}} = 5.86\times10^{17}\ \mathrm{s} = \frac{5.86\times10^{17}}{3.156\times10^{7}} = 1.86\times10^{10}\ \mathrm{yr}.$$

(c) $1.86\times10^{10}$ yr against 300 Myr of XUV activity — **62 times longer, so the envelope survives comfortably** and the planet stays at $2.2\,R_\oplus$, in the upper peak.

*With a 50 percent larger young radius*, $R_p = 3.3\,R_\oplus = 2.102\times10^{7}$ m:

$$R_p^3 = 9.29\times10^{21}\ \mathrm{m^3}, \qquad \dot M = \frac{0.15\times\pi\times9.29\times10^{21}\times1.0}{1.594\times10^{15}} = 2.75\times10^{6}\ \mathrm{kg\,s^{-1}},$$
$$t = \frac{4.78\times10^{23}}{2.75\times10^{6}} = 1.74\times10^{17}\ \mathrm{s} = 5.5\times10^{9}\ \mathrm{yr}.$$

Still 18 times longer than 300 Myr. **The planet survives either way and ends in the upper peak at $2.2\,R_\oplus$.**

The comment worth making is about what the factor of 3.4 in $\dot M$ did and did not accomplish. It cut the stripping time by exactly that factor, as it must, but it did not change the outcome — because this planet started 60-odd times clear of the threshold. **The bifurcation only bites for planets already near the boundary**, which is why the valley is a *gap* rather than a general depletion: planets far from the threshold on either side are unaffected, and only those within a factor of a few of it are pushed decisively to one peak or the other.

Note also that this problem's planet has a 2 percent envelope on a $4\,M_\oplus$ core, putting it at $2.2\,R_\oplus$ — comfortably above the 1.8 valley. **A planet with a *smaller* envelope on a *smaller* core, sitting near 1.9, is where the physics is decisive**, and that is exactly where the observed gap is.

</details>

## Flashback

**From Lesson 6.1 (Exoplanet detection):** A star has $R_\star = 0.6\,R_\odot$ and $M_\star = 0.6\,M_\odot$. A planet transits with depth 0.15 percent and period 12 d. (a) Compute $R_p$ in Earth radii. (b) Compute $a$ in AU and the transit probability. (c) Compute the radial-velocity amplitude if the planet has $M_p = 7\,M_\oplus$, using $K = 28.4\,(M_p/M_J)(M_\star/M_\odot)^{-2/3}(P/\mathrm{yr})^{-1/3}$ m/s.

<details>
<summary>Solution</summary>

(a) $$\frac{R_p}{R_\star} = \sqrt{0.0015} = 0.03873, \qquad R_p = 0.03873\times0.6\times6.957\times10^{8} = 1.617\times10^{7}\ \mathrm{m},$$
$$\frac{R_p}{R_\oplus} = \frac{1.617\times10^{7}}{6.371\times10^{6}} = 2.54.$$

(b) $$a = (0.6)^{1/3}\left(\frac{12}{365.25}\right)^{2/3} = 0.8434\times(0.032854)^{2/3}.$$
$$(0.032854)^{2/3} = e^{(2/3)(-3.4162)} = e^{-2.2775} = 0.10256,$$
$$a = 0.8434\times0.10256 = 0.0865\ \mathrm{AU}.$$

$$p_{\text{tr}} = \frac{R_\star}{a} = \frac{0.6\times6.957\times10^{8}}{0.0865\times1.496\times10^{11}} = \frac{4.174\times10^{8}}{1.294\times10^{10}} = 0.0323 = 3.2\%.$$

(c) $$\frac{M_p}{M_J} = \frac{7}{317.8} = 0.02203, \qquad (0.6)^{-2/3} = e^{(2/3)(0.5108)} = 1.4057,$$
$$\left(\frac{12}{365.25}\right)^{-1/3} = e^{(1/3)(3.4162)} = e^{1.1387} = 3.1227,$$
$$K = 28.4\times0.02203\times1.4057\times3.1227 = 2.75\ \mathrm{m\,s^{-1}}.$$

**Comfortably detectable**, so this planet would have both a radius and a mass — and hence a density:

$$\bar\rho = 5513\times\frac{7}{(2.54)^3} = 5513\times\frac{7}{16.39} = 2355\ \mathrm{kg\,m^{-3}}.$$

At $2.54\,R_\oplus$ and $2355\ \mathrm{kg\,m^{-3}}$ this sits well above the Earth-like curve ($7^{0.27} = 1.70\,R_\oplus$) — **a sub-Neptune with a hydrogen envelope of a percent or so**, in the upper peak of the radius valley. It is exactly the kind of target this lesson's degeneracy discussion applies to, and exactly the kind for which transmission spectroscopy is needed to settle water versus hydrogen.

</details>

## Connections

- **Backward:** [6.1](06-01-exoplanet-detection.md) supplied the radius from transits and the mass from radial velocity, and stressed that only both together give a density; [4.3](04-03-atmospheric-escape.md) supplied the energy-limited escape rate that carves the valley; [5.1](05-01-giant-ice-giant-interiors.md) supplied the equations of state and the mass–radius turnover for giants.
- **Forward:** [6.4](06-04-exoplanet-atmospheres.md) breaks the water-versus-hydrogen degeneracy through the mean molecular weight; [6.5](06-05-habitability-and-its-limits.md) asks which of these compositions could plausibly be habitable.
- **Sideways:** the mass–radius relation for degenerate matter, where radius *decreases* with mass, is [`stat-mech`](../../stat-mech/syllabus.md)'s and [`astrophysics`](../../astrophysics/syllabus.md)'s white-dwarf problem — planets, brown dwarfs and white dwarfs lie on one continuous curve with a maximum near Jupiter's radius. High-pressure equations of state are [materials-science 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md)'s, and the bimodality produced by a runaway threshold is the same bifurcation structure as [`dynamical-systems`](../../dynamical-systems/syllabus.md)'s saddle-node.

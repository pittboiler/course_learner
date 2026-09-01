# Geology · Lesson 4.2: Radiometric Dating

> ⏱ ~15 min · Module 4: Geologic Time & the Rock Record · Builds on: [4.1](04-01-relative-dating-unconformities.md), [1.4](01-04-igneous-rocks-and-bodies.md) · Unlocks: [4.3](04-03-geologic-timescale.md) (building and calibrating the timescale)

## Why this matters

[4.1](04-01-relative-dating-unconformities.md) got the entire history of the Earth into the right *order* using nothing but geometry. What it could never give you is a **rate** — how long an ocean took to open, whether an extinction lasted a thousand years or a million, how fast a mountain range came up. Every one of those questions is a subtraction of two numbers, and radiometric dating is where the numbers come from.

The decay physics itself is not the hard part, and it is not this course's — [`intro-nuclear-engineering` 1.3](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) and [`nuclear-particle-physics` 2.1](../../nuclear-particle-physics/lessons/02-01-decay-law-chains.md) own the decay law and derive it properly. What geology owns is everything that happens between a rock and a number, and it contains two ideas that are genuinely surprising.

The first: **a radiometric age almost never dates "when the rock formed."** It dates the moment a particular mineral cooled through a particular temperature, so four minerals from one hand sample give four different ages and **all four are right**. The second: the method appears to require knowing how much daughter product was present at the start, which is unknowable — and the isochron **extracts that initial condition from the data instead of assuming it**, while simultaneously testing its own central assumption. That is one of the better pieces of inference in the physical sciences.

## The idea

**A radioactive clock is a box of atoms that empties at a rate proportional to how full it is.** Nothing else about it matters — not temperature, not pressure, not what the atom is chemically bonded to, not whether the rock was buried, squeezed or metamorphosed. Decay is a nuclear process and the crust's conditions are, from the nucleus's point of view, indistinguishable from a vacuum. **That indifference is the whole reason the method works**, and it is why no other geologic process can be trusted as a clock.

But there is a catch that the physics does not warn you about, and it is where all the geology lives.

**Decay does not care what the rock went through. Diffusion cares enormously.** The daughter atom produced inside a crystal is a stranger there — it has the wrong charge and the wrong size for the site it now occupies, and it will migrate out of the lattice if the lattice lets it. Whether it escapes depends on temperature, and because diffusion is Arrhenius-activated ([`materials-science` 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md)) the dependence is ferociously steep. Hot: the daughter leaks out as fast as it is made, and the clock reads zero forever. Cool: it is trapped, and the clock runs. **The switchover happens over a narrow temperature window, and that window is the closure temperature.**

So the operational statement is:

> A radiometric age is the time since a particular mineral, for a particular element, became a **closed box**.

Which raises the second problem. To read the clock you compare parent to daughter — but some of the daughter may have been in the crystal from the beginning, incorporated when it grew. You cannot dig up the rock from four billion years ago to check.

**The isochron solves this by refusing to date one sample.** Take several minerals that crystallized together from the same melt. They necessarily started with the *same* isotopic composition of the daughter element (chemistry cannot tell isotopes apart at the precision that matters), but they took in wildly *different* amounts of the parent, because minerals partition elements differently — biotite hoards rubidium, plagioclase hoards strontium. Plot daughter against parent for all of them and you get a straight line whose **slope is the age** and whose **intercept is the initial daughter composition you could not measure**. The unknown falls out of the geometry.

And the line does something more: **it audits itself.** Any sample that leaked, or gained, or was reset falls off the line. A method that both estimates its own nuisance parameter and flags its own failures is rare, and it is why isochrons are the standard of proof in geochronology.

## The formal version

**The decay law**, stated here and owned by [`nuclear-particle-physics` 2.1](../../nuclear-particle-physics/lessons/02-01-decay-law-chains.md). If $N$ is the number of surviving parent atoms and $\lambda$ the **decay constant** (probability per atom per unit time), then

$$\frac{dN}{dt} = -\lambda N \qquad \Longrightarrow \qquad N(t) = N_0 e^{-\lambda t}$$

*In words: a fixed fraction of what is left decays in each unit of time.* The **half-life** $t_{1/2}$ is the time to halve $N$:

$$t_{1/2} = \frac{\ln 2}{\lambda}, \qquad \lambda = \frac{\ln 2}{t_{1/2}}$$

**The age equation, form 1 — from surviving parent.** Invert the decay law:

$$t = \frac{1}{\lambda}\ln\!\left(\frac{N_0}{N}\right)$$

*In words: the age is set by what fraction of the original parent survives.* This is the textbook form and **it is nearly useless in the field**, because $N_0$ is exactly what you cannot measure.

**The age equation, form 2 — from the daughter.** Here is the move that makes the method operational. If the system was closed, every parent atom that vanished is still sitting there as a daughter atom. Writing $D^*$ for the **radiogenic** daughter (the atoms produced by decay, as distinct from any that were there at the start):

$$N_0 = N + D^* \qquad \Longrightarrow \qquad \boxed{\;t = \frac{1}{\lambda}\ln\!\left(1 + \frac{D^*}{N}\right)\;}$$

*In words: measure the daughter-to-parent ratio in the rock as it is today, and the age follows — no knowledge of the starting amount required.* The two forms are the same equation; the second one is written in terms of things a mass spectrometer can actually see ([`analytical-chemistry` 4.4](../../analytical-chemistry/lessons/04-04-mass-spectrometry.md)).

**Everything now rests on three assumptions**, and naming them is the same as naming the ways a date goes wrong:

1. **You know the initial daughter, $D_0$.** The isochron below removes this one.
2. **The system was closed** — no parent or daughter entered or left since closure. This is closure temperature's department.
3. **$\lambda$ is accurately known.** Less trivial than it sounds; $\lambda$ for ${}^{87}\text{Rb}$ and ${}^{40}\text{K}$ are known to roughly 1 percent, which caps the *accuracy* of any age from those systems even when the *precision* is far better ([`analytical-chemistry` 1.3](../../analytical-chemistry/lessons/01-03-propagation-of-uncertainty.md)).

### Closure temperature

Let $T_c$ be the temperature above which the daughter diffuses out of a given mineral faster than decay produces it, and below which it is retained. Because the diffusivity is Arrhenius, $D = D_0 e^{-E_a/RT}$, the transition from total loss to total retention spans only a few tens of degrees — narrow enough to treat as a threshold.

$$\text{measured age} \;=\; \text{time since the mineral cooled through } T_c$$

*In words: you are dating a thermal event, not a rock.* Different minerals hold different daughters with different tenacity, which turns an apparent nuisance into a **thermochronometer ladder**:

| Chronometer | Approximate $T_c$ | What its age means |
|---|---|---|
| U–Pb, zircon | $>900\ ^\circ\text{C}$ | crystallization — the zircon essentially never resets |
| Sm–Nd, garnet | $\sim700\ ^\circ\text{C}$ | growth of garnet during metamorphism |
| Ar–Ar, hornblende | $\sim525\ ^\circ\text{C}$ | cooling of the mid crust |
| Rb–Sr, muscovite | $\sim500\ ^\circ\text{C}$ | same window, different element |
| Ar–Ar, biotite | $\sim300\ ^\circ\text{C}$ | cooling through roughly 11 km depth |
| Zircon fission track | $\sim240\ ^\circ\text{C}$ | upper-crustal cooling |
| Apatite fission track | $\sim110\ ^\circ\text{C}$ | the last 3 to 4 km of exhumation |
| Apatite (U–Th)/He | $\sim70\ ^\circ\text{C}$ | the last 2 km — landscape-scale |

**A suite of these on one sample is a cooling curve, and a cooling curve is an exhumation history** — the direct quantitative payoff of [2.6](02-06-mountain-building.md). Two chronometers give a cooling rate; divide by the geothermal gradient and you get a rate of rock uplift relative to the surface:

$$\text{exhumation rate} \;=\; \frac{\Delta T/\Delta t}{dT/dz}$$

Take the figure's pluton: biotite closed at $300\ ^\circ\text{C}$ at $48.0\ \text{Ma}$ and apatite fission tracks at $110\ ^\circ\text{C}$ at $30.0\ \text{Ma}$.

$$\frac{\Delta T}{\Delta t} = \frac{300 - 110}{48.0 - 30.0} = \frac{190}{18.0} = 10.6\ ^\circ\text{C/Myr}$$

$$\text{exhumation} = \frac{10.6\ ^\circ\text{C/Myr}}{25\ ^\circ\text{C/km}} = 0.42\ \text{km/Myr} = 0.42\ \text{mm/yr}$$

**Keep the unit identity**: $1\ \text{km/Myr} = 1\ \text{mm/yr}$ exactly, which is why geologists quote million-year-scale erosion in millimetres per year without blinking.

### The isochron

Let the parent be $P$, the radiogenic daughter $D^*$, and — the key ingredient — let $D_s$ be a **stable, non-radiogenic isotope of the same element as the daughter**. Because $D_s$ is neither created nor destroyed, dividing by it cancels out how much of the daughter element the mineral happened to contain. Start from the closed-system bookkeeping,

$$D = D_0 + P\left(e^{\lambda t} - 1\right)$$

and divide throughout by $D_s$:

$$\boxed{\;\frac{D}{D_s} \;=\; \underbrace{\left(\frac{D}{D_s}\right)_{\!0}}_{\text{intercept}} \;+\; \frac{P}{D_s}\underbrace{\left(e^{\lambda t} - 1\right)}_{\text{slope}}\;}$$

*In words: plot the measured daughter ratio against the measured parent ratio for several cogenetic samples and you get a straight line — $y = b + mx$ — in which the slope carries the age and the intercept is the initial daughter ratio.* For the Rb–Sr system this reads

$$\frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}} = \left(\frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}}\right)_{\!0} + \frac{{}^{87}\text{Rb}}{{}^{86}\text{Sr}}\left(e^{\lambda t}-1\right), \qquad t = \frac{\ln(1+m)}{\lambda}$$

**Why the array is a line at all, and why it rotates.** At $t=0$ every mineral has the same $y$ (they grew from one melt) but different $x$ (they partition Rb and Sr differently), so the samples sit on a **horizontal** line. Thereafter each ${}^{87}\text{Rb}$ atom that decays becomes exactly one ${}^{87}\text{Sr}$ atom, so every point moves up and to the left along a trajectory of slope $-1$ — and **the array pivots about the intercept, staying straight**, tilting more steeply as time passes. That is what panel (a) draws.

**Three things the fit gives you that a single sample cannot:**

- **The age**, from the slope, with no assumption about $D_0$.
- **The initial ratio**, from the intercept — and this is not a nuisance parameter, it is a **provenance tracer**. A granite with an initial ${}^{87}\text{Sr}/{}^{86}\text{Sr}$ near 0.704 drew on a mantle-like source; one near 0.720 melted old continental crust that had spent a billion years accumulating radiogenic ${}^{87}\text{Sr}$ behind its high Rb/Sr.
- **A closed-system test.** Scatter about the line is not measurement noise; it is evidence that some sample was open. The formal statistic is the MSWD, the misfit measured against the analytical uncertainties, and a fit that fails it is demoted from *isochron* to *errorchron* — a line you do not report an age from. Fitting is a weighted least-squares problem with errors on both axes ([`numerical-analysis` 5.1](../../numerical-analysis/lessons/05-01-least-squares-normal-equations.md)).

**One further use of the same trick.** In a metamorphosed granite, a *mineral* isochron and a *whole-rock* isochron can give different ages, and both are meaningful: strontium re-equilibrates over centimetres during metamorphism but not over metres, so the mineral isochron dates the metamorphism while the whole-rock isochron survives it and dates the original intrusion.

### Which system for which job

| System | Parent → daughter | Half-life | Best used for |
|---|---|---|---|
| U–Pb | ${}^{238}\text{U}\to{}^{206}\text{Pb}$; ${}^{235}\text{U}\to{}^{207}\text{Pb}$ | $4.47\ \text{Ga}$; $0.704\ \text{Ga}$ | zircon: igneous crystallization, detrital provenance, the deep timescale |
| K–Ar / Ar–Ar | ${}^{40}\text{K}\to{}^{40}\text{Ar}$ | $1.25\ \text{Ga}$ | volcanic ash and lavas, cooling histories, hominin sites |
| Rb–Sr | ${}^{87}\text{Rb}\to{}^{87}\text{Sr}$ | $49.6\ \text{Ga}$ | whole-rock and mineral isochrons on granites; source tracing |
| Sm–Nd | ${}^{147}\text{Sm}\to{}^{143}\text{Nd}$ | $106\ \text{Ga}$ | garnet growth, meteorites, mantle versus crust |
| ${}^{14}\text{C}$ | ${}^{14}\text{C}\to{}^{14}\text{N}$ | $5730\ \text{yr}$ | organic carbon, the last 50,000 years |

Here $\text{Ma}$ means mega-annum, one million years, and $\text{Ga}$ giga-annum, one billion.

**U–Pb on zircon is the gold standard, for four separate reasons.** Zircon ($\text{ZrSiO}_4$) takes uranium into the $\text{Zr}^{4+}$ site readily and rejects lead almost completely, so $D_0 \approx 0$ before you do anything. It is mechanically and chemically tough enough to survive erosion, transport and even most metamorphism. Its closure temperature is above the temperature of most crustal melts. And uniquely, **it carries two independent clocks in the same crystal** — the two uranium decay chains ([`intro-nuclear-engineering` 1.4](../../intro-nuclear-engineering/lessons/01-04-decay-chains-equilibrium.md)) — so the two ages can be compared. When the ${}^{206}\text{Pb}/{}^{238}\text{U}$ and ${}^{207}\text{Pb}/{}^{235}\text{U}$ ages agree the grain plots on the **concordia** curve and is *concordant*; when they disagree it plots below, and the discordance itself is diagnostic of lead loss. A worked case:

$$\frac{{}^{206}\text{Pb}^*}{{}^{238}\text{U}} = 0.0983 \;\Rightarrow\; t = \frac{\ln(1.0983)}{1.55125\times10^{-10}\ \text{yr}^{-1}} = \frac{0.093764}{1.55125\times10^{-10}} = 604\ \text{Ma}$$

$$\frac{{}^{207}\text{Pb}^*}{{}^{235}\text{U}} = 0.8804 \;\Rightarrow\; t = \frac{\ln(1.8804)}{9.8485\times10^{-10}\ \text{yr}^{-1}} = \frac{0.631485}{9.8485\times10^{-10}} = 641\ \text{Ma}$$

**Discordant by 37 Myr, and the pattern is informative rather than fatal**: the faster-decaying ${}^{235}\text{U}$ system is less sensitive to a given amount of lead loss, so a leaky grain always reports its ${}^{207}\text{Pb}/{}^{235}\text{U}$ age as the older of the two. The true crystallization age is at least 641 Ma, and is recovered from where the line through a set of discordant grains intersects concordia.

**Radiocarbon is the odd one out** and should not be lumped in with the rest. Cosmic-ray neutrons make ${}^{14}\text{C}$ from atmospheric nitrogen; living tissue exchanges carbon with the atmosphere and holds the ambient ratio; death closes the system. So there is no closure *temperature* — the clock starts at death, or at the precipitation of a carbonate. Two consequences follow from the short half-life: after ten half-lives ($57{,}000$ years) only $2^{-10} \approx 0.1\ \%$ of the ${}^{14}\text{C}$ remains, which is the practical limit; and **the production rate has not been constant**, varying with solar activity, the geomagnetic field and ocean circulation, so raw "radiocarbon years" must be **calibrated** to calendar years against independently counted archives — tree rings, varves ([3.4](03-04-glaciers-ice-ages.md)) and speleothems.

### What you can and cannot date

**You date minerals, not rocks** — and that single sentence resolves most confusion about what an age means.

- **Igneous rocks date well.** Zircon or sanidine from a lava or an intrusion gives a crystallization age, and for a volcanic rock that is the eruption age to within the precision of the method.
- **Volcanic ash beds are the most valuable rocks in stratigraphy.** They are deposited essentially instantaneously, they are datable, and they are traceable across whole basins. A fossil-bearing sequence sandwiched between two dated ashes is **bracketed**: everything between them is younger than the lower date and older than the upper one. Add [4.1](04-01-relative-dating-unconformities.md)'s cross-cutting logic — an intrusion cutting a sequence gives a minimum age for the sequence, an unconformity-capping flow gives a maximum age for what lies above — and you have the entire calibration machinery of [4.3](04-03-geologic-timescale.md).
- **Metamorphic ages date a thermal event**, which is often exactly what you want but is never the protolith's age.
- **Detrital grains date the source, not the sediment.** Dating zircons from a sandstone gives you the ages of the mountains that shed them, which is a superb provenance tool ([4.4](04-04-stratigraphy-facies-correlation.md)). It bounds the sandstone's own age from one side only: the sandstone must be *younger* than its youngest grain, so a detrital suite gives a **maximum depositional age** and nothing more.

## Picture

![Two panels. The upper panel is a rubidium-strontium isochron diagram: four minerals from one granite plot on a straight blue line, a horizontal dashed line marks where all four sat at time zero, a dotted line shows the array partway through its rotation, green arrows show each sample climbing from the time-zero line as parent atoms convert to daughter atoms, and a red square well below the line marks an altered sample that failed the closed-system test. Annotations map slope to age and intercept to the initial ratio. The lower panel is a temperature versus time cooling path for one pluton, falling steeply at first and then flattening, crossing five closure temperatures at five different ages that are listed in an adjacent table, with one segment's slope read as a cooling rate and divided by the geothermal gradient to give an exhumation rate in millimetres per year.](assets/04-02-fig1.svg)

## Worked examples

### Example 1 — Dating an ash bed with K–Ar, and why you measure the daughter

Sanidine from a volcanic ash gives an atomic ratio ${}^{40}\text{Ar}^*/{}^{40}\text{K} = 0.0100$. For ${}^{40}\text{K}$ the total decay constant is $\lambda = 5.543\times10^{-10}\ \text{yr}^{-1}$. (a) Check the half-life. (b) Find the age. (c) What fraction of the original ${}^{40}\text{K}$ is left, and what does that tell you about the measurement?

**(a)** $$t_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693147}{5.543\times10^{-10}} = 1.2505\times10^{9}\ \text{yr} = 1.25\ \text{Ga} \quad \checkmark$$

**(b) One complication first, and it is a real one.** ${}^{40}\text{K}$ has a **branched decay**: about 89.5 percent goes by beta emission to ${}^{40}\text{Ca}$ and only 10.5 percent by electron capture to ${}^{40}\text{Ar}$ ([`nuclear-particle-physics` 2.3](../../nuclear-particle-physics/lessons/02-03-beta-decay-neutrino.md)). The parent disappears at the total rate $\lambda$, but argon accumulates at only the electron-capture rate $\lambda_{\text{EC}} = 0.581\times10^{-10}\ \text{yr}^{-1}$. So the age equation carries a branching factor:

$${}^{40}\text{Ar}^* = \frac{\lambda_{\text{EC}}}{\lambda}\,{}^{40}\text{K}\left(e^{\lambda t}-1\right) \qquad \Longrightarrow \qquad t = \frac{1}{\lambda}\ln\!\left(1 + \frac{\lambda}{\lambda_{\text{EC}}}\cdot\frac{{}^{40}\text{Ar}^*}{{}^{40}\text{K}}\right)$$

$$\frac{\lambda}{\lambda_{\text{EC}}} = \frac{5.543}{0.581} = 9.5405$$

$$t = \frac{\ln\left(1 + 9.5405 \times 0.0100\right)}{5.543\times10^{-10}} = \frac{\ln(1.09540)}{5.543\times10^{-10}} = \frac{0.091124}{5.543\times10^{-10}} = 1.644\times10^{8}\ \text{yr}$$

$$\boxed{t = 164\ \text{Ma}} \quad \text{(Middle Jurassic)}$$

**Forget the branching factor and you get $\ln(1.0100)/\lambda = 17.9\ \text{Ma}$** — an order of magnitude wrong, and wrong in the young direction, which is the direction that would not immediately look absurd.

**(c)** $$\frac{N}{N_0} = e^{-\lambda t} = e^{-0.091124} = 0.9129 \quad\Longrightarrow\quad \mathbf{91.3\ \text{percent of the}\ {}^{40}\text{K}\ \text{is still there}.}$$

*(Consistency check: form 1 and form 2 must agree, and $1/1.09540 = 0.9129$ ✓.)*

**This is the point of the example.** Only 8.7 percent of the potassium has decayed, and only a tenth of *that* became argon — so the radiogenic argon amounts to about 0.9 percent of the potassium now present. In a gram of sanidine with 10 percent potassium by mass, that is roughly $3\ \text{nanomoles}$ of ${}^{40}\text{Ar}$, about $6\times10^{-5}\ \text{cm}^3$ at standard conditions. **Nobody could date this rock by detecting an 8.7 percent decrease in potassium; measuring a nanomole of a noble gas against essentially zero background is easy by comparison.** Radiometric dating is a daughter-accumulation measurement, and it became possible when noble-gas mass spectrometry did.

*(In practice one further correction is unavoidable: atmospheric argon contaminates every sample, and it is subtracted using the known atmospheric ${}^{40}\text{Ar}/{}^{36}\text{Ar}$ of about 299. The modern **Ar–Ar** variant sidesteps the two-aliquot problem entirely — irradiate the sample so that ${}^{39}\text{K}$ becomes ${}^{39}\text{Ar}$, then measure both argon isotopes in one run, releasing the gas in temperature steps. A flat **age spectrum** across the steps means a well-behaved closed system; a staircase rising from young low-temperature steps means the rims lost argon. Like the isochron, it is a method that reports its own reliability.)*

### Example 2 — An isochron on a granite, read for age, source and honesty

Four cogenetic fractions from one granite pluton, plus a fifth sample of visibly chloritized biotite. Use $\lambda({}^{87}\text{Rb}) = 1.397\times10^{-11}\ \text{yr}^{-1}$.

| Sample | ${}^{87}\text{Rb}/{}^{86}\text{Sr}$ | ${}^{87}\text{Sr}/{}^{86}\text{Sr}$ |
|---|---|---|
| plagioclase | 0.10 | 0.7057 |
| whole rock | 2.00 | 0.7380 |
| K-feldspar | 5.00 | 0.7890 |
| biotite | 20.00 | 1.0440 |
| *chloritized biotite* | *12.00* | *0.8600* |

**(a) Age.** Take the two extreme good samples:

$$m = \frac{1.0440 - 0.7057}{20.00 - 0.10} = \frac{0.3383}{19.90} = 0.017000$$

Check with an independent pair — if the four are truly cogenetic and closed, any pair must give the same slope:

$$m = \frac{0.7890 - 0.7380}{5.00 - 2.00} = \frac{0.0510}{3.00} = 0.017000 \quad \checkmark$$

$$t = \frac{\ln(1+m)}{\lambda} = \frac{\ln(1.01700)}{1.397\times10^{-11}} = \frac{0.0168571}{1.397\times10^{-11}} = 1.207\times10^{9}\ \text{yr}$$

$$\boxed{t = 1.21\ \text{Ga}}$$

**(b) Intercept, and what it is worth.** Extrapolate to $x = 0$:

$$b = 0.7380 - 0.017000\times 2.00 = 0.7380 - 0.0340 = \mathbf{0.7040}$$

**That number was never assumed; it was measured, by a rock that no longer exists.** And it is diagnostic. Mantle-derived material at 1.2 Ga sat near ${}^{87}\text{Sr}/{}^{86}\text{Sr} \approx 0.703$, while continental crust of any antiquity has a high Rb/Sr and climbs well past 0.710. An initial ratio of 0.7040 says this granite was **juvenile** — differentiated from mantle-derived magma ([1.3](01-03-how-the-earth-melts.md)), not produced by remelting an old continental basement. So the isochron dated the pluton *and* identified where its material came from, from the same five numbers.

**(c) The fifth sample.** The line predicts, at $x = 12.00$:

$$y_{\text{predicted}} = 0.7040 + 0.017000\times12.00 = 0.7040 + 0.2040 = 0.9080$$

$$y_{\text{measured}} = 0.8600 \qquad \Longrightarrow \qquad \text{deficit} = 0.0480$$

**It is short of radiogenic ${}^{87}\text{Sr}$ by a wide margin — this sample was an open system.** Chloritization is a hydrous alteration of biotite, and strontium is mobile in aqueous fluid, so radiogenic ${}^{87}\text{Sr}$ was flushed out after closure. The correct action is to **exclude it and say so**, not to average it in. Including it would not merely add scatter; because it sits below the line, it would systematically tilt the fit and bias the age — a point P3 below makes numerically.

**Notice what just happened.** Assumption 1 (initial daughter) was eliminated by the intercept, and assumption 2 (closed system) was *tested* by the scatter. A single-sample "model age" would have required guessing $b$ and would have given no way at all to detect the altered grain.

## Watch out

- **You might think a radiometric age tells you when the rock formed.** It tells you when a specific mineral cooled through a specific temperature for a specific element. A hand sample yielding zircon at 88 Ma, hornblende at 84, biotite at 80 and apatite at 24 contains no contradiction — **it contains a cooling history**, and the disagreement is the data.
- **You might treat disagreement between two systems as one of them being broken.** Discordance is a measurement. Discordant zircons locate the timing of lead loss; a staircase Ar–Ar spectrum locates a reheating event. **The dangerous case is the opposite one: partial resetting that produces a smooth, plausible, meaningless intermediate age with no internal warning.** This is why methods with built-in checks — isochrons, concordia, step heating — are preferred over single-aliquot model ages.
- **You might think you can date a sandstone.** You can only date its grains, which crystallized in a source terrane before the sandstone existed. The youngest detrital grain gives a **maximum** depositional age; the sediment could be any amount younger. Bracketing it requires an ash bed or a cross-cutting intrusion.
- **You might think a straight line proves an isochron.** A two-component **mixing line** — magma contaminated by wall rock, say — also plots straight, with a slope that means nothing chronological. The standard discriminant is to plot the daughter ratio against $1/{}^{86}\text{Sr}$: a mixture is linear there too, a true isochron generally is not.
- **You might assume decay constants are exact.** ${}^{87}\text{Rb}$ and ${}^{40}\text{K}$ carry roughly 1 percent uncertainty in $\lambda$, so a 1.2 Ga Rb–Sr age is accurate to about $\pm12$ Myr no matter how precise the mass spectrometry. Two labs quoting $\pm2$ Myr on the same rock by different systems may still be 15 Myr apart and both correct — **precision is not accuracy** ([`analytical-chemistry` 1.1](../../analytical-chemistry/lessons/01-01-accuracy-precision-significant-figures.md)).
- **You might convert any cooling rate into an exhumation rate.** That step assumes the rock is riding a steady geotherm. A freshly emplaced pluton cools fast because it is dumping heat into cold country rock, not because it is being brought up; only the low-temperature legs of a cooling path can be divided by $dT/dz$.

## One-liner

> Decay is indifferent to everything the rock experiences, but diffusion is not — so an age dates the moment a mineral became a closed box, and the isochron reads the unknown starting condition off the slope-and-intercept of the samples themselves while flagging any that leaked.

## Problems

**P1 (🟢)** Zircon from a volcanic ash gives ${}^{206}\text{Pb}^*/{}^{238}\text{U} = 0.0716$, with $\lambda({}^{238}\text{U}) = 1.55125\times10^{-10}\ \text{yr}^{-1}$. (a) Compute the age. (b) What fraction of the original ${}^{238}\text{U}$ remains, and verify it two ways. (c) Biotite from the same ash bed gives an Ar–Ar age of 428 Ma. Which number is the eruption age, and what is the other one telling you?

**P2 (🟡 — inference from a data table)** A granite from an eroded orogen yields:

| Chronometer | $T_c$ (°C) | Age (Ma) |
|---|---|---|
| U–Pb zircon | 900 | 88.0 |
| Ar–Ar hornblende | 525 | 84.0 |
| Ar–Ar biotite | 300 | 80.0 |
| Apatite fission track | 110 | 24.0 |
| Apatite (U–Th)/He | 70 | 12.0 |

(a) Compute the cooling rate over each of the four intervals. (b) Taking a geothermal gradient of $25\ ^\circ\text{C/km}$ and a surface temperature of $10\ ^\circ\text{C}$, convert the last two intervals into exhumation rates. (c) Explain why doing the same conversion on the first interval would give a badly wrong answer. (d) Estimate the total exhumation since 80 Ma and check it against your answer to (b).

**P3 (🔴 — bridges to regression and to source tracing)** Five Rb–Sr analyses from a granite, $\lambda = 1.397\times10^{-11}\ \text{yr}^{-1}$:

| Sample | ${}^{87}\text{Rb}/{}^{86}\text{Sr}$ | ${}^{87}\text{Sr}/{}^{86}\text{Sr}$ |
|---|---|---|
| A | 1.00 | 0.72430 |
| B | 4.00 | 0.74320 |
| C | 10.00 | 0.78100 |
| D | 20.00 | 0.84400 |
| E | 6.00 | 0.74100 |

(a) Four of the five are collinear. Identify the outlier, and compute the slope, the intercept and the age from the good four, verifying the slope with two independent pairs. (b) Interpret the intercept: what kind of source did this granite melt, and how does it differ from the pluton in Example 2? (c) In which direction would including sample E bias the age, and why? (Optional: fit all five by least squares and quantify it.)

<details>
<summary>Solutions</summary>

**P1 (a)** Age equation, form 2:

$$t = \frac{\ln\left(1 + 0.0716\right)}{1.55125\times10^{-10}} = \frac{\ln(1.0716)}{1.55125\times10^{-10}} = \frac{0.0691529}{1.55125\times10^{-10}} = 4.458\times10^{8}\ \text{yr}$$

$$\boxed{t = 446\ \text{Ma}} \quad \text{(Late Ordovician)}$$

**(b)** Directly from the decay law:

$$\frac{N}{N_0} = e^{-\lambda t} = e^{-0.0691529} = 0.9332$$

Independently, from the bookkeeping $N_0 = N + D^*$:

$$\frac{N}{N_0} = \frac{1}{1 + D^*/N} = \frac{1}{1.0716} = 0.9332 \quad \checkmark$$

**93.3 percent of the original ${}^{238}\text{U}$ survives.** The two routes must agree; if they ever do not, an arithmetic slip has occurred.

**(c) The zircon age, 446 Ma, is the eruption age.** An ash bed is a thin blanket of hot fragments on a cold land surface — it cools to ambient in hours. So crystallization, eruption and closure of *every* mineral in it were simultaneous to well within the precision of either method, and the biotite should read 446 Ma too.

It reads 428 Ma, 18 Myr younger. Zircon's $T_c$ exceeds $900\ ^\circ\text{C}$ and biotite's is about $300\ ^\circ\text{C}$, so **the bed was later heated above roughly 300 °C but never near 900 °C** — deep burial under a subsiding basin, or a nearby intrusion. Two readings are possible and they should be distinguished, not conflated:

- **A complete reset**, in which case 428 Ma dates the cooling of that thermal event and is a real number about a real thing.
- **A partial reset**, in which case 428 Ma is an intermediate between 446 and the event and **means nothing at all**.

**Ar–Ar step heating separates them**: a flat age spectrum indicates a clean reset, a staircase indicates partial loss from grain rims. This is exactly why one dates ash beds with zircon and treats a discordant low-$T_c$ mineral as information about the burial history rather than as an error.

**P2 (a)** Cooling rate is $\Delta T/\Delta t$ across each pair:

| Interval | $\Delta T$ (°C) | $\Delta t$ (Myr) | Rate (°C/Myr) |
|---|---|---|---|
| zircon → hornblende | 375 | 4.0 | **93.8** |
| hornblende → biotite | 225 | 4.0 | **56.3** |
| biotite → apatite FT | 190 | 56.0 | **3.39** |
| apatite FT → apatite He | 40 | 12.0 | **3.33** |

**The history is strongly two-stage**: two very fast intervals, then a factor-of-seventeen drop to a slow, remarkably steady rate.

**(b)** $$\text{80–24 Ma:}\quad \frac{3.393\ ^\circ\text{C/Myr}}{25\ ^\circ\text{C/km}} = 0.136\ \text{km/Myr} = \mathbf{0.14\ \text{mm/yr}}$$

$$\text{24–12 Ma:}\quad \frac{3.333\ ^\circ\text{C/Myr}}{25\ ^\circ\text{C/km}} = 0.133\ \text{km/Myr} = \mathbf{0.13\ \text{mm/yr}}$$

**Essentially constant exhumation at about 0.13 mm/yr for the last 80 Myr** — a decaying orogen being quietly stripped, not an active one.

**(c)** Converting 93.8 °C/Myr the same way gives 3.8 mm/yr, which would be among the fastest exhumation rates on Earth. **It is an artefact.** At 88 Ma the rock was a newly emplaced pluton at magmatic temperature sitting inside cold country rock, and its early cooling is conductive heat loss to its surroundings — the rock is not moving anywhere. The conversion $\Delta T/\Delta t \div dT/dz$ presumes the sample is descending a *steady* geotherm, which only becomes true once the thermal anomaly has relaxed. **Only the low-temperature chronometers give trustworthy exhumation rates**, which is precisely why apatite fission track and (U–Th)/He exist as a subfield.

**(d)** At closure the biotite sat at the depth where the geotherm reads 300 °C:

$$z = \frac{300 - 10}{25} = 11.6\ \text{km}$$

It is at the surface now, so 11.6 km has been removed in 80 Myr:

$$\frac{11.6\ \text{km}}{80\ \text{Myr}} = 0.145\ \text{km/Myr} = \mathbf{0.15\ \text{mm/yr}}$$

Against the 0.13–0.14 mm/yr from the chronometer pairs — **agreement to about 10 percent, from two independent routes through the same data.** The residual difference is the last couple of kilometres, which the (U–Th)/He age constrains: 2.4 km of rock above the 70 °C isotherm removed in 12 Myr is 0.20 mm/yr, so the very recent rate is slightly higher. The consistency is the real result: **it tells you the assumed geotherm is not badly wrong**, which is the one input you had to guess.

**P3 (a)** Test collinearity pairwise. Using A and D:

$$m = \frac{0.84400 - 0.72430}{20.00 - 1.00} = \frac{0.11970}{19.00} = 0.0063000$$

Using B and C:

$$m = \frac{0.78100 - 0.74320}{10.00 - 4.00} = \frac{0.03780}{6.00} = 0.0063000 \quad \checkmark$$

Intercept from A: $b = 0.72430 - 0.0063000\times1.00 = \mathbf{0.71800}$.

Now test E: the line predicts $0.71800 + 0.0063000\times6.00 = 0.71800 + 0.03780 = 0.75580$, against a measured 0.74100 — **low by 0.0148, far outside any plausible analytical error on a fifth-decimal-place measurement. E is the outlier.**

$$t = \frac{\ln(1.00630)}{1.397\times10^{-11}} = \frac{0.0062802}{1.397\times10^{-11}} = 4.496\times10^{8}\ \text{yr} \qquad \boxed{t = 450\ \text{Ma}}$$

**(b)** The initial ratio is $0.7180$. Mantle-derived material at 450 Ma sat near 0.7045, so this granite starts **0.0135 above the mantle value** — a large excess in a quantity that only accumulates by ${}^{87}\text{Rb}$ decay.

**The excess had to be inherited.** Continental crust has a much higher Rb/Sr than the mantle (Rb follows K into feldspars and micas; Sr follows Ca into plagioclase and is progressively left behind), so old crust builds up radiogenic ${}^{87}\text{Sr}$ for as long as it sits there. An initial ratio of 0.7180 means the melt was made largely by **remelting long-lived continental crust** — a crustal anatectic granite, the sort produced in the thickened core of a collisional orogen ([2.6](02-06-mountain-building.md)).

**Contrast with Example 2's pluton at 0.7040**: same technique, same five numbers, opposite conclusion about where the rock came from. Example 2 was juvenile mantle-derived material adding new crust; this one is old crust being recycled. **The intercept is not a by-product of the age determination — it is an independent result of equal value.**

**(c)** E plots **below** the line at $x = 6.00$, which is below the mean of the five $x$ values ($\bar{x} = 8.2$). A least-squares fit passes through the centroid, so pulling a low-$x$ point downward rotates the line **counterclockwise — steeper slope, hence an older age.**

Quantitatively, with $\bar{x} = 8.2$ and $\bar{y} = 0.76670$:

$$m = \frac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sum (x_i-\bar{x})^2} = \frac{1.39840}{216.80} = 0.0064502$$

$$t = \frac{\ln(1.0064502)}{1.397\times10^{-11}} = \frac{0.0064295}{1.397\times10^{-11}} = 4.602\times10^{8}\ \text{yr} = 460\ \text{Ma}$$

**Ten million years too old — a 2.3 percent error, quietly, with no outward sign of trouble in the reported number.** The fitted line would look perfectly respectable; only the scatter about it (the MSWD) betrays the problem, which is why the goodness of fit is reported alongside every isochron age and why an array that fails it is called an errorchron and yields no age at all.

**The general lesson: in geochronology the residuals are not noise to be minimized away. They are the diagnostic.**

</details>

## Flashback

**From Lesson 2.8 (Volcanoes & Volcanic Hazards):** Two vents 40 km apart on the same continental arc. Vent A erupts lava with 50 weight percent $\text{SiO}_2$ at $1150\ ^\circ\text{C}$ and has built a broad cone with 4-degree flanks. Vent B erupts 68 weight percent $\text{SiO}_2$ at $800\ ^\circ\text{C}$ and consists of a lava dome inside an 8 km caldera.

(a) Name each magma type and predict its eruptive style, giving the mechanism rather than the label. (b) Vent B's last eruption produced $12\ \text{km}^3$ of tephra; an earlier one produced $0.012\ \text{km}^3$. How many VEI units apart are they? (c) A town downwind of B receives 18 cm of ash which is then soaked by rain to a bulk density of $1200\ \text{kg/m}^3$. Compute the roof load and compare it with a light roof's design load of about $100\ \text{kg/m}^2$.

<details>
<summary>Solution</summary>

**(a) Vent A is basalt; Vent B is rhyolite.** The mechanism runs through the silicate polymerization of [1.1](01-01-what-a-mineral-is.md): silica-rich melt has extensively linked $\text{Si}-\text{O}-\text{Si}$ networks, so its viscosity is many orders of magnitude higher than a silica-poor melt's — and viscosity decides whether exsolving gas can escape.

- **A (basalt, low viscosity):** bubbles nucleate, coalesce into a permeable network and vent freely, so gas pressure never builds. **Effusive** — fire fountains and long-running flows. Fluid lava travels far from the vent before congealing, which is exactly why the flanks are only 4 degrees: a **shield**.
- **B (rhyolite, high viscosity):** bubbles cannot migrate through the melt, so decompression during ascent builds an over-pressured foam until it fragments. **Explosive** — Plinian columns, pyroclastic density currents, and caldera collapse once the chamber is voided. Between explosive episodes the stiff melt extrudes as a dome that cannot flow away.

Note the trap: **B is the cooler magma.** Viscosity, not temperature, sets the style.

**(b)** VEI is logarithmic, one unit per factor of 10 in erupted volume:

$$\frac{12}{0.012} = 1000 = 10^{3} \qquad \Longrightarrow \qquad \mathbf{3\ \text{VEI units apart}}$$

(For example a VEI 6 and a VEI 3 — and 2.8's Ruiz-versus-Pinatubo comparison is the reminder that this ordering says nothing about the death toll.)

**(c)** $$\text{load} = \rho\, h = 1200\ \text{kg/m}^3 \times 0.18\ \text{m} = \mathbf{216\ \text{kg/m}^2}$$

**More than twice the design load — the roof fails.** Two things are worth extracting. First, dry ash has a bulk density around $500\text{–}700\ \text{kg/m}^3$, so **rain roughly doubles the load without another gram of ash falling**; this is precisely what happened at Pinatubo in 1991, where a typhoon arrived during the eruption and most of the roughly 800 deaths came from roof collapse rather than from anything volcanic. Second, the effective mitigation is not structural but behavioural: sweeping the roof between ash falls. Ash is the hazard with the largest footprint and the cheapest countermeasure.

</details>

## Connections

- **Backward:** [4.1](04-01-relative-dating-unconformities.md) supplied the *order* that this lesson attaches numbers to, and its cross-cutting logic is what turns two dated ash beds into a bracket. What a zircon age actually dates is the crystallization event of [1.4](01-04-igneous-rocks-and-bodies.md), and the exhumation rates read off a cooling path are the quantitative version of [2.6](02-06-mountain-building.md)'s erosion-and-rebound story.
- **Forward:** [4.3](04-03-geologic-timescale.md) is built entirely on the ash-bed bracketing workflow — the periods are defined by fossils and *calibrated* by these dates. [4.4](04-04-stratigraphy-facies-correlation.md) uses detrital ages for provenance and maximum depositional age. [5.2](05-02-earth-history-hadean-proterozoic.md) rests on a single class of measurement: the 4.4 Ga Jack Hills zircons that are the only physical evidence from the Hadean.
- **Sideways:** the decay law and decay chains belong to [`intro-nuclear-engineering` 1.3–1.4](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) and [`nuclear-particle-physics` 2.1](../../nuclear-particle-physics/lessons/02-01-decay-law-chains.md); the branching of ${}^{40}\text{K}$ is a beta-versus-electron-capture question from [`nuclear-particle-physics` 2.3](../../nuclear-particle-physics/lessons/02-03-beta-decay-neutrino.md). Closure temperature is Arrhenius diffusion out of a crystal ([`materials-science` 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md)). Fitting an isochron is errors-in-both-variables regression ([`numerical-analysis` 5.1](../../numerical-analysis/lessons/05-01-least-squares-normal-equations.md)), and the precision-versus-accuracy distinction that decay-constant uncertainty forces is [`analytical-chemistry` 1.1](../../analytical-chemistry/lessons/01-01-accuracy-precision-significant-figures.md). The heat-flow and geotherm machinery behind every exhumation conversion is [`geophysics`](../../geophysics/syllabus.md) 4.1.

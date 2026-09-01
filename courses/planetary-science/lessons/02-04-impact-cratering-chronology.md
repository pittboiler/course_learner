# Planetary Science · Lesson 2.4: Impact cratering and chronology

> ⏱ ~15 min · Module 2: Planetary interiors and surfaces · Builds on: [1.3](01-03-accretion-dust-to-planetesimals.md), [2.1](02-01-differentiation-interior-structure.md) · Unlocks: [2.5](02-05-volcanism-tectonics.md), [2.6](02-06-reading-planetary-surface.md), [2.7](02-07-moon-earth-moon-system.md)

## Why this matters

Almost every date you will ever see attached to a planetary surface — "the Tharsis lavas are 3.5 billion years old", "Europa's surface is 60 million years old", "Venus was resurfaced 700 million years ago" — was obtained by counting craters. There is no alternative. Radiometric dating needs samples, and samples exist from exactly four bodies: Earth, the Moon, and (as meteorites) Mars and Vesta.

So crater counting carries an enormous load, and it is worth knowing exactly how much weight it can bear. The method is sound in principle, calibrated on the Moon, and quietly dependent on assumptions that get shakier the further you carry it from the Moon.

## The idea

**Older surfaces have more craters, because craters accumulate and nothing removes them.** That is the entire principle, and it would be trivial if the impact rate were constant. It is not.

**The impact flux has fallen by orders of magnitude.** The early solar system was full of leftover planetesimals ([1.3](01-03-accretion-dust-to-planetesimals.md)); most were swept up or ejected within the first few hundred million years. The flux dropped steeply and then flattened into the slow, roughly steady trickle of the last 3 billion years. **The consequence is that crater density is a wildly nonlinear function of age.** The lunar highlands at 4.4 Gyr carry about 200 times the crater density of the maria at 3.5 Gyr — but a constant flux would predict a ratio of only $4.4/3.5 = 1.26$. Assuming constant flux does not introduce a small error; it is wrong by a factor of 160.

**Because of that steepness, crater dating has wildly uneven precision.** On a young surface the curve is nearly linear and crater density is a good clock. On an old surface the curve is nearly vertical: a small change in density corresponds to a tiny change in age, so ages saturate near 4 Gyr and cannot be resolved further. **Crater counting is precise for young surfaces and blunt for old ones**, which is the reverse of most geochronology.

**And there is a ceiling. Surfaces saturate.** Once craters are packed densely enough that each new one destroys an old one, the count stops rising. A saturated surface tells you only "old", with no upper bound. Much of the lunar highlands is at or near saturation at small diameters.

**How the calibration works.** Apollo and Luna returned samples from sites whose crater densities had been counted from orbit. Pairing radiometric ages with crater densities gives the **lunar chronology function** — a calibrated curve of density against age. Everything else in the solar system is dated by counting craters and reading off that lunar curve, after correcting for the different impact flux and impact velocity at the target body.

**That transfer is the weak link.** Mars sits next to the asteroid belt and is hit more often than the Moon, at lower velocities. Estimating the ratio requires a dynamical model of the impactor population — and published Martian chronologies disagree with each other by a factor of two in the derived ages of intermediate-age surfaces. **When you read a Martian crater age, the quoted error bars almost always describe counting statistics, not this systematic uncertainty, which is much larger.**

## The formal version

**What happens in an impact.** Three stages, taking seconds to minutes:

1. **Contact and compression.** The projectile and target are shocked to hundreds of GPa. The projectile is destroyed — vaporized or melted. *A crater contains almost nothing of the object that made it,* which is why identifying an impactor requires trace siderophile chemistry.
2. **Excavation.** A hemispherical shock wave expands, and material flows outward and upward, opening a transient cavity roughly 20–30 times the projectile's diameter.
3. **Modification.** Gravity collapses the walls. For small craters this just makes a bowl; for large ones the floor rebounds into a central peak and the rim collapses into terraces.

**Simple versus complex.** Below a threshold diameter, craters are simple bowls with depth/diameter $\approx 1/5$. Above it, they collapse into complex craters with central peaks, flat floors and terraced walls. The threshold is set by gravity, not by rock strength:

$$D_t \approx \frac{31\ \mathrm{km}}{g\ [\mathrm{m\,s^{-2}}]}.$$

| Body | $g$ | $D_t$ predicted | observed |
|---|---|---|---|
| Moon | 1.62 | 19 km | 15–20 km |
| Mercury | 3.70 | 8.5 km | ~10 km |
| Mars | 3.71 | 8.5 km | ~7 km |
| Venus | 8.87 | 3.5 km | ~3 km |
| Earth | 9.81 | 3.2 km | 2–4 km |

*In words: on a low-gravity body, craters stay simple to much larger sizes, because gravity is too weak to collapse them.* Icy bodies transition at smaller diameters still, because ice is weaker.

**Crater scaling.** In the gravity regime, crater diameter relates to impactor properties roughly as

$$D \propto \left(\frac{\rho_i}{\rho_t}\right)^{1/3} d_i^{\,0.78}\,v^{0.44}\,g^{-0.22},$$

with $d_i$ and $v$ the impactor diameter and speed. *In words: crater size grows only sublinearly with impactor size and weakly with speed.* Because $D$ depends on $v$ so weakly, most of the variation in crater size across a population comes from the impactor size distribution, not from velocities.

**The production function and the [chronology function](../reference.md#chronology-function).** The **production function** gives the shape of the crater size distribution — the relative number of craters of each diameter produced per unit time. It is close to a power law, $N(>D)\propto D^{-b}$ with $b\approx1.8$ at kilometre scales. The **chronology function** gives the absolute density as a function of age. For the Moon, with $N(1)$ the cumulative number of craters $\ge1$ km per km$^2$:

$$\boxed{\ N(1) = 5.44\times10^{-14}\left(e^{6.93\,T}-1\right) + 8.38\times10^{-4}\,T\ }$$

with $T$ in Gyr before present.

| $T$ (Gyr) | $N(1)$ |
|---|---|
| 1.0 | $8.4\times10^{-4}$ |
| 3.0 | $2.6\times10^{-3}$ |
| 3.5 | $4.8\times10^{-3}$ |
| 3.8 | $1.8\times10^{-2}$ |
| 4.1 | $1.2\times10^{-1}$ |
| 4.4 | $9.5\times10^{-1}$ |

*In words: the linear term is the steady modern flux; the exponential term is the early bombardment, and it takes over completely before about 3.5 Gyr.*

**Saturation equilibrium.** When craters overlap so densely that formation and destruction balance, the count plateaus at roughly

$$N_{\text{sat}}(>D) \approx 10^{-1.83}\,D^{-2},$$

and any surface at this level is undatable — it is "at least as old as saturation".

**The Late Heavy Bombardment, and why to be careful.** The steep rise in the chronology function near 3.9 Gyr, together with a clustering of lunar impact-melt ages near that date, was long read as a discrete **spike** in the impact rate — a cataclysm, tied to the Nice model's instability ([1.4](01-04-giant-planets-migration.md)). That reading has weakened substantially. The Apollo samples are heavily biased toward ejecta from the Imbrium basin, so a clustering of ages may record *one* large event rather than a solar-system-wide spike, and a smoothly declining flux fits the data about as well. **Treat "the Late Heavy Bombardment" as a contested hypothesis, not an established event.**

## Picture

![Left panel, a semi-log plot of N of 1, the cumulative number of craters at least one kilometre across per square kilometre, against surface age in billions of years. A blue curve rises gently from small values at young ages and then turns sharply upward beyond about 3.5 billion years, reaching nearly 1 at 4.4 billion years; dots mark the maria at 3.5 billion years and the highlands at 4.4 billion years. A coral dashed straight line labelled constant flux, drawn through the highlands point, lies far above the real curve at young ages. A note reads that highlands carry 200 times the maria's crater density, not the 1.26 times constant flux would predict. Right panel, a log-log plot of the simple-to-complex crater transition diameter in kilometres against surface gravity, showing a blue line of slope minus one with coral dots for the Moon, Mercury, Mars, Venus and Earth lying along it](assets/02-04-fig1.svg)

The left panel is why crater dating works and why it is so uneven; the right panel is a reminder that crater *morphology* is a gravimeter you can read from a photograph.

## Worked examples

**Example 1 (mechanical — dating a mare).** A mare surface has $N(1) = 3.0\times10^{-3}\ \mathrm{km^{-2}}$. How old is it?

Solve $5.44\times10^{-14}(e^{6.93T}-1) + 8.38\times10^{-4}T = 3.0\times10^{-3}$ by iteration. Try $T = 3.2$:

$$5.44\times10^{-14}(e^{22.176}-1) = 5.44\times10^{-14}\times4.28\times10^{9} = 2.33\times10^{-4},$$
$$8.38\times10^{-4}\times3.2 = 2.68\times10^{-3}, \qquad \text{total} = 2.91\times10^{-3}.$$

Slightly low. Try $T = 3.25$: exponential term $= 5.44\times10^{-14}\times6.05\times10^{9} = 3.29\times10^{-4}$; linear $= 2.72\times10^{-3}$; total $= 3.05\times10^{-3}$. So

$$T \approx 3.23\ \mathrm{Gyr}.$$

**Now the sensitivity check, which is the part that matters.** A 10 percent error in the count, $N(1) = 3.3\times10^{-3}$, gives $T\approx3.44$ Gyr — a shift of 0.21 Gyr, or 6 percent. Reasonable. But run the same 10 percent error on the highlands, $N(1) = 0.95$ versus $1.05$: the ages are 4.400 and 4.415 Gyr, a shift of 0.015 Gyr. **Ten percent in the count gives 6 percent in age on a mare and 0.3 percent on the highlands** — not because the highland age is better determined, but because the curve is so steep there that *no* crater count can distinguish 4.4 from 4.45 Gyr. The precision is illusory; the method has simply run out of resolution.

**Example 2 (why you'd care — the constant-flux trap).** A student counts craters on two lunar terrains and finds the second has one two-hundredth the density of the first, which is known from samples to be 4.4 Gyr old. They assume constant flux and report an age of $4.4/200 = 0.022$ Gyr. What is the right answer, and how wrong were they?

The highlands sit at $N(1) = 0.954$, so the maria are at

$$N(1) = \frac{0.954}{200} = 4.77\times10^{-3}\ \mathrm{km^{-2}}.$$

Solve the chronology function for that density. Try $T = 3.5$:

$$5.44\times10^{-14}\left(e^{24.255}-1\right) = 5.44\times10^{-14}\times3.42\times10^{10} = 1.861\times10^{-3},$$
$$8.38\times10^{-4}\times3.5 = 2.933\times10^{-3}, \qquad \text{total} = 4.79\times10^{-3}.$$

That is the target to three figures, so

$$T \approx 3.50\ \mathrm{Gyr}.$$

**The correct answer is 3.50 Gyr, not 0.022 Gyr — wrong by a factor of 159, and wrong in the direction that matters most.** A surface the student would call essentially brand new, younger than anything on the Moon, is in fact three and a half billion years old and among the older surfaces in the solar system.

The reason is worth stating precisely. Between 3.5 and 4.4 Gyr the crater density rises by a factor of 200, but the *age* changes by only 0.9 Gyr — 26 percent. In that part of the curve the density is governed by the exponential term, which multiplies by $e^{6.93\times0.9} = 512$ over that interval. **Dividing a crater density by 200 buys you 0.9 Gyr, not a factor of 200 in time.** Constant flux gets the answer wrong by more than two orders of magnitude, and always in the direction of making ancient terrain look young.

This is exactly the calculation Boss Problem 2(a) asks for, and it is the single most important piece of arithmetic in the lesson.

## Watch out

- **You might think crater density is proportional to age, but it is exponential in age before about 3.5 Gyr.** This is the single most common error in the subject, and it always makes old surfaces look young.
- **You might think more craters always means older, but saturated surfaces stop counting.** Above the saturation density the count is age-independent; all you learn is a lower bound.
- **You might think a lunar-calibrated chronology transfers cleanly to Mars, but the transfer requires modelling the impactor flux ratio, and published models disagree by a factor of two.** A Martian crater age of "3.6 Gyr" from one chronology can be "3.8 Gyr" or "1.8 Gyr" in another depending on where it falls on the curve.
- **You might think craters record the impactor, but the projectile is destroyed.** Crater size constrains the impactor's kinetic energy only through a scaling law with a weak velocity dependence, so inferring an impactor's size requires assuming a velocity.
- **You might think the Late Heavy Bombardment is established, but the sample bias toward Imbrium ejecta undermines the key evidence**, and a monotonically declining flux is currently at least as well supported.

## One-liner

> Counting craters dates a surface, but the flux fell exponentially, so a tenfold difference in crater density is a few hundred million years, not a factor of ten in age.

## Problems

**P1 (🟢)** Using $D_t \approx 31/g$ km: (a) Compute the simple-to-complex transition diameter on Ganymede ($g = 1.43\ \mathrm{m\,s^{-2}}$). (b) The observed value is about 2 km, far below your prediction. Give the reason. (c) What transition diameter would you predict on Titan ($g = 1.35$), and would you trust it?

**P2 (🟡)** A Martian plain has $N(1) = 2.0\times10^{-3}\ \mathrm{km^{-2}}$ after correcting to lunar-equivalent units. (a) Use the lunar chronology function to find its age. (b) A rival Martian chronology says the impact flux at Mars is $1.6$ times higher than assumed, so the true lunar-equivalent density is $2.0\times10^{-3}/1.6$. Recompute. (c) State the difference in Gyr and comment on whether the discrepancy matters for distinguishing a 1 Gyr from a 3 Gyr surface.

**P3 (🔴, optional)** A 100 km crater is found on a body with $g = 1.6\ \mathrm{m\,s^{-2}}$. Using $D\propto d_i^{0.78}v^{0.44}g^{-0.22}$ with the calibration that a 1 km impactor at $20\ \mathrm{km\,s^{-1}}$ makes a 15 km crater at $g = 1.6$: (a) Estimate the impactor diameter. (b) Estimate its kinetic energy, taking $\rho_i = 3000\ \mathrm{kg\,m^{-3}}$, and express it in megatons of TNT ($1\ \mathrm{Mt} = 4.184\times10^{15}$ J). (c) The same impactor hits Earth ($g = 9.81$) at $20\ \mathrm{km\,s^{-1}}$; what crater does it make, and what does the ratio tell you about comparing crater catalogues across bodies?

<details>
<summary>Solutions</summary>

**P1** (a) $$D_t = \frac{31}{1.43} = 21.7\ \mathrm{km}.$$

(b) The scaling $D_t \approx 31/g$ was calibrated on **rocky** bodies. Ganymede's surface is water ice, which is far weaker and less viscous near its melting point than silicate rock, so craters collapse at much smaller sizes. The gravity scaling is right in form; the constant in the numerator is a material property and is roughly ten times smaller for ice.

(c) The rocky formula gives $31/1.35 = 23$ km, and **no, it should not be trusted** — Titan's surface is also ice, so the same order-of-magnitude reduction applies, giving a few kilometres. Titan has the further complication of a thick atmosphere that filters out small impactors entirely and of active fluvial and aeolian erosion that erases craters, so its crater record is unusable for straightforward dating in any case.

**P2** (a) Solve $5.44\times10^{-14}(e^{6.93T}-1)+8.38\times10^{-4}T = 2.0\times10^{-3}$.

Try $T = 2.3$: exponential $= 5.44\times10^{-14}(e^{15.939}) = 5.44\times10^{-14}\times8.35\times10^{6} = 4.5\times10^{-7}$, negligible; linear $= 1.927\times10^{-3}$. Total $1.928\times10^{-3}$, slightly low.

Try $T = 2.39$: linear $= 2.003\times10^{-3}$; exponential $= 5.44\times10^{-14}\times1.56\times10^{7} = 8.5\times10^{-7}$. Total $= 2.004\times10^{-3}$.

$$T \approx 2.39\ \mathrm{Gyr}.$$

(b) $N(1) = 2.0\times10^{-3}/1.6 = 1.25\times10^{-3}$. In this regime the linear term dominates entirely:

$$T \approx \frac{1.25\times10^{-3}}{8.38\times10^{-4}} = 1.49\ \mathrm{Gyr}.$$

(c) The difference is $2.39 - 1.49 = 0.90$ Gyr — nearly a billion years, from a factor of 1.6 in an assumed flux ratio.

**Yes, it matters, and decisively.** On this part of the curve age is essentially proportional to crater density, so a systematic error in the flux ratio propagates straight through as the same fractional error in age. A surface reported as 2.4 Gyr under one chronology is 1.5 Gyr under the other, and the distinction between a 1 Gyr and a 3 Gyr surface — which is the difference between "geologically recent volcanism" and "ancient" — is precisely the distinction this uncertainty destroys.

Note the contrast with Example 1: for *old* surfaces the exponential term makes ages robust against density errors but unable to resolve anything; for *young* surfaces ages are resolvable but only as good as the flux calibration. There is no regime in which Martian crater dating is both precise and accurate.

**P3** (a) Holding $v$ and $g$ fixed, $D\propto d_i^{0.78}$:

$$\frac{100}{15} = \left(\frac{d_i}{1\ \mathrm{km}}\right)^{0.78}, \qquad 6.667 = d_i^{0.78},$$
$$d_i = 6.667^{1/0.78} = 6.667^{1.282} = e^{1.282\times1.8971} = e^{2.4321} = 11.4\ \mathrm{km}.$$

(b) $$m = \tfrac{4}{3}\pi\left(\frac{11{,}400}{2}\right)^3\times3000 = \tfrac43\pi(5700)^3\times3000 = \tfrac43\pi\times1.852\times10^{11}\times3000.$$
$$m = 7.758\times10^{11}\times3000 = 2.327\times10^{15}\ \mathrm{kg}.$$

$$E = \tfrac12mv^2 = 0.5\times2.327\times10^{15}\times(2\times10^{4})^2 = 0.5\times2.327\times10^{15}\times4\times10^{8} = 4.65\times10^{23}\ \mathrm{J}.$$

$$\frac{4.65\times10^{23}}{4.184\times10^{15}} = 1.11\times10^{8}\ \mathrm{Mt} = 111\ \text{million megatons}.$$

For scale, the Chicxulub impact is estimated at around $10^{8}$ Mt, so this is a comparable event.

(c) Only $g$ changes, and $D\propto g^{-0.22}$:

$$\frac{D_\oplus}{D} = \left(\frac{9.81}{1.6}\right)^{-0.22} = (6.131)^{-0.22} = e^{-0.22\times1.8134} = e^{-0.3990} = 0.671,$$
$$D_\oplus = 100\times0.671 = 67\ \mathrm{km}.$$

The same impactor makes a 100 km crater on a low-gravity body and a 67 km crater on Earth — a 33 percent difference.

What that tells you about comparing catalogues is a caution with two parts. **The direct effect is modest:** a factor of six in gravity produces only a third in crater diameter, because the exponent is small. So crater diameters *are* roughly comparable across bodies, and much of the literature treats them as such without disaster.

**But the indirect effects are not modest, and they are what actually breaks the comparison.** Impact velocities differ systematically between bodies — around $20\ \mathrm{km\,s^{-1}}$ at the Moon but only $10\ \mathrm{km\,s^{-1}}$ at Mars and over $40$ at Mercury — and the impactor *populations* differ too, since Mars is fed by the asteroid belt and the outer moons by comets, each with its own size distribution. Combine those with the flux-ratio uncertainty from P2 and the honest conclusion is that transferring a chronology between bodies is a modelling exercise whose systematic uncertainty dominates every measurement uncertainty in the count.

</details>

## Flashback

**From Lesson 2.1 (Differentiation and interior structure):** A satellite has $\bar\rho = 1940\ \mathrm{kg\,m^{-3}}$ and $R = 1560$ km, modelled as a rock core at $3300\ \mathrm{kg\,m^{-3}}$ beneath a water-and-ice shell at $1000\ \mathrm{kg\,m^{-3}}$. (a) Find the rock core's fractional radius. (b) Find its fraction of the total mass. (c) Compute the predicted $C/MR^2$ and say whether the body is strongly or weakly differentiated.

<details>
<summary>Solution</summary>

(a) $$x^3 = \frac{\bar\rho-\rho_{\text{shell}}}{\rho_{\text{core}}-\rho_{\text{shell}}} = \frac{1940-1000}{3300-1000} = \frac{940}{2300} = 0.4087, \qquad x = 0.7420.$$

So the rocky interior extends to $0.742\times1560 = 1158$ km, leaving a water-ice shell about 400 km thick.

(b) $$\frac{M_{\text{core}}}{M} = \frac{\rho_{\text{core}}x^3}{\bar\rho} = \frac{3300\times0.4087}{1940} = \frac{1348.7}{1940} = 0.695.$$

Nearly 70 percent of the mass is rock, in 41 percent of the volume.

(c) With $\rho_c/\rho_m = 3300/1000 = 3.3$, $x^3 = 0.4087$, $x^5 = 0.7420^5 = 0.2250$:

$$\frac{C}{MR^2} = \frac25\cdot\frac{3.3(0.2250)+(1-0.2250)}{3.3(0.4087)+(1-0.4087)} = \frac25\cdot\frac{0.7425+0.7750}{1.3487+0.5913} = \frac25\cdot\frac{1.5175}{1.9400}.$$

$$= 0.4\times0.7822 = 0.3129.$$

$C/MR^2 = 0.313$ is **well below 0.4 and lower than Earth's 0.3307** — this body is strongly differentiated, with a clean separation of rock from ice.

That is a large density contrast (3.3) doing the work, larger than any rock-metal planet manages, which is why an ice-over-rock body can reach such a low moment-of-inertia factor with a core that is only 74 percent of the radius.

Notice that $R$ never entered the calculation — $x$ is fixed by the mean density alone, and $C/MR^2$ depends only on $x$ and the density ratio. So this answer applies to *any* body of this bulk density and composition. Ganymede has $\bar\rho = 1936\ \mathrm{kg\,m^{-3}}$, essentially the value used here, and its measured $C/MR^2$ is $0.3115$ against this model's $0.3129$ — agreement to half a percent from a two-parameter model, and the reason Ganymede is confidently described as fully differentiated into rock, ice and a metallic core.

</details>

## Connections

- **Backward:** [1.3](01-03-accretion-dust-to-planetesimals.md) supplied the leftover planetesimals that do the cratering and explains why the flux declined; [2.1](02-01-differentiation-interior-structure.md) supplied the surface gravity that sets crater morphology.
- **Forward:** [2.5](02-05-volcanism-tectonics.md) explains what resets a crater clock; [2.6](02-06-reading-planetary-surface.md) combines crater counts with superposition to build a full geologic history; [2.7](02-07-moon-earth-moon-system.md) is the calibration itself — the lunar samples that make every number in this lesson possible.
- **Sideways:** [`geology`](../../geology/syllabus.md) owns terrestrial impact structures as field objects and relative dating as field practice; this lesson owns cratering as a *planetary* dating method applied where nobody can visit. The saturation ceiling is a birth–death equilibrium of exactly the kind that appears in [`evolution-ecology`](../../evolution-ecology/syllabus.md)'s species–area relations.

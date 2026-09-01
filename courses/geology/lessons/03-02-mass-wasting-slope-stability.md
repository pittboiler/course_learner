# Geology · Lesson 3.2: Mass Wasting & Slope Stability

> ⏱ ~15 min · Module 3: Surface Processes · Builds on: [3.1](03-01-weathering-soils.md), [2.4](02-04-how-rock-deforms.md) · Unlocks: [3.3](03-03-rivers-landscape-evolution.md) (rivers & landscape evolution)

## Why this matters

[3.1](03-01-weathering-soils.md) manufactured the raw material: a mantle of loose, chemically altered debris sitting on top of intact rock, everywhere on Earth that is not bare bedrock or ice. This lesson is about what gravity does to it, which is the only surface process that needs no transporting fluid at all. **Gravity is a geologic agent in its own right** — it moves more mass off hillslopes than rivers do, and rivers mostly just carry away what gravity has already delivered to the valley floor.

It is also the most quantitative thing in Module 3, and unusually satisfying: the entire question "will this slope fail?" collapses into a single dimensionless ratio you can compute from three numbers. Two results in that calculation are genuinely surprising.

**First, for a dry, cohesionless slope, stability does not depend on how thick the slab is or how heavy the material is.** Both cancel exactly. A slope of dry sand is equally stable at one metre and at one hundred.

**Second, water's dominant effect is not weight.** Everyone's intuition says rain makes the hillside heavier and so it slides. The arithmetic says the added weight very nearly cancels itself; the damage is done by pore pressure prying the slab off its base — the same effective-stress relation that let a wastewater well start an earthquake in [2.4](02-04-how-rock-deforms.md). That is why **drainage is the single most effective landslide mitigation there is**, and why a slope can fail days after the rain has stopped.

## The idea

**A slope is a block on an incline, and you already know how that works** ([mechanics-refresher 1.3](../../mechanics-refresher/lessons/01-03-applying-newtons-laws.md)). Gravity pulls the mass straight down. Resolve that pull into a component *along* the slope, which tries to slide it, and a component *into* the slope, which presses it against its base and generates friction. Tilt the incline far enough and the first beats the second.

Geology adds three complications, and each one is where the interesting behaviour lives:

1. **The base may be glued as well as clamped.** Roots, clay bonds, cement and the surface tension of pore water all supply **cohesion** — a resisting stress that is there whether or not anything is pressing down.
2. **Water sits in the pores and pushes back.** Pore pressure acts outward on every grain contact and on the failure plane itself, cancelling part of the clamping force. It does not lubricate anything; it **unclamps**.
3. **The "block" is not a block.** It is a slab of unknown thickness on a failure surface of unknown shape, and half the field skill is guessing both from what the ground looks like.

**The bookkeeping device is the factor of safety** — the ratio of what resists to what drives:

$$F = \frac{\text{resisting}}{\text{driving}}$$

$F > 1$ means stable; $F < 1$ is impossible, so a slope caught at $F<1$ is already moving; $F = 1$ is failure. **Every intervention in the rest of this lesson is an attempt to move one of those two numbers.**

Now the geometry. Real hillslopes are long and thin: hundreds of metres of slope carrying two metres of soil. So model the slab as **infinite in extent** — ignore what happens at the top and bottom edges, because in a long slope those end effects are a small fraction of the total. That single simplification is what makes the problem solvable on a napkin, and it turns out to be an excellent approximation for the shallow translational slides that dominate rainfall-triggered landsliding.

## The formal version

**Setup.** A slab of soil or regolith of thickness $z$ (metres, measured vertically) and bulk density $\rho$ ($\text{kg/m}^3$) rests on a planar failure surface inclined at **slope angle** $\beta$ (degrees from horizontal). Take a column of unit width across the slope and horizontal extent $b$. Its weight is $W = \rho g z b$ per unit width, with $g = 9.81\ \text{m/s}^2$.

That column meets the failure plane over a length $b/\cos\beta$ — longer than $b$, because the plane is tilted. So the two stresses on the base are:

$$\sigma_n = \frac{W\cos\beta}{b/\cos\beta} = \rho g z \cos^2\beta, \qquad \tau = \frac{W\sin\beta}{b/\cos\beta} = \rho g z \sin\beta\cos\beta$$

*In words: the normal stress clamping the base carries a $\cos^2$ because the weight component is resolved once and the area is stretched once; the driving shear stress carries the product $\sin\beta\cos\beta$ for the same reason.*

**The strength available.** This is the Coulomb criterion from [2.4](02-04-how-rock-deforms.md), written in soil-mechanics notation: the coefficient of internal friction $\mu_i$ becomes the **friction angle** $\phi$, with $\tan\phi = \mu_i$, and the pore pressure $u$ (Pa) enters exactly as it did there:

$$\tau_{\text{strength}} = c + (\sigma_n - u)\tan\phi$$

*In words: what holds the slab is glue plus friction, and friction acts only on the part of the clamping stress the pore water has not already cancelled.* Since $\mu_i \approx 0.6$–$0.85$ for most rock and sediment, $\phi$ runs about $30$–$40^\circ$.

**The factor of safety, in full:**

$$\boxed{\;F = \frac{c + (\rho g z\cos^2\beta - u)\tan\phi}{\rho g z \sin\beta\cos\beta}\;}$$

**Now the clean case: dry, cohesionless.** Set $u = 0$ and $c = 0$ — a slope of dry sand, gravel or fractured talus:

$$F = \frac{\rho g z\cos^2\beta\,\tan\phi}{\rho g z\sin\beta\cos\beta} = \frac{\cos\beta\,\tan\phi}{\sin\beta} = \boxed{\;\frac{\tan\phi}{\tan\beta}\;}$$

**Everything cancels except the two angles.** Thickness gone, density gone, $g$ gone. *In words: a dry cohesionless slope stands if and only if it is gentler than the friction angle of its material, no matter how deep the deposit or how heavy the grains.* Failure at $\beta = \phi$, full stop.

**That result is the angle of repose.** The steepest angle a pile of loose dry material will hold is $\phi$ itself, and it is a *material* property, not a size one — which is why a sand pile and a scree cone below a cliff have the same flank angle, and why cinder cones do too ([2.8](02-08-volcanoes-volcanic-hazards.md)).

| Material | Angle of repose |
|---|---|
| Well-rounded, well-sorted sand (dune, beach) | $30$–$32^\circ$ |
| Angular sand and gravel | $34$–$37^\circ$ |
| Angular, poorly sorted talus and rockfall debris | $37$–$42^\circ$ |

**Angularity and poor sorting both raise it**, for the same reason: grains that interlock must ride up over one another to move, and fines wedged into the gaps stop them rolling. Sorting and rounding therefore predict slope angle just as they predicted transport history in [1.5](01-05-sedimentary-rocks.md).

**Water, effect one: pore pressure.** With the water table at height $mz$ above the failure plane ($0 \le m \le 1$) and seepage running parallel to the slope — the normal situation in a hillslope during a storm — the pore pressure on the plane is $u = m\,\rho_w g z\cos^2\beta$, with $\rho_w = 1000\ \text{kg/m}^3$. Substituting into the cohesionless case:

$$\boxed{\;F = \left(1 - m\,\frac{\rho_w}{\rho}\right)\frac{\tan\phi}{\tan\beta}\;}$$

*In words: the water table eats a fixed fraction of your safety margin, in proportion to how high it stands.* For a saturated soil at $\rho = 2000\ \text{kg/m}^3$, $\rho_w/\rho = 0.5$ exactly, so **full saturation halves the factor of safety, and the critical slope angle drops from $\phi$ to roughly $\arctan(0.5\tan\phi)$** — from $35^\circ$ to $19^\circ$ for typical soil. That is an enormous change, and it is why hillsides that have stood for ten thousand years fail in a single night.

**Water, effect two: weight.** Notice what the boxed dry result already told you: **$\rho$ cancelled.** Making a cohesionless slab heavier increases the driving stress and the frictional resistance in exactly the same proportion. Added weight only matters when there is cohesion to dilute — $c$ is fixed while $\rho g z$ grows — or when you load the *head* of a finite slide mass without loading its toe.

**Water, effect three: it can also make you stronger.** In *unsaturated* granular material, water does not fill the pores; it sits as tiny rings at grain contacts. The curved air–water interface is in tension, so the water is at *negative* pressure, and negative $u$ makes $(\sigma_n - u)$ **larger** than $\sigma_n$. The suction is set by the Young–Laplace relation with surface tension $\sigma_s = 0.072\ \text{N/m}$ for water ([fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md)):

$$s = -u \approx \frac{2\sigma_s}{r}, \qquad c_{\text{app}} \approx \chi\, s\,\tan\phi$$

where $r$ is the meniscus radius (roughly a tenth of the grain diameter) and $\chi$ is the fraction of the contact area bridged by water. This is **apparent cohesion**, and Example 2 is the sandcastle.

**Seismic loading.** An earthquake ([2.7](02-07-earthquakes-seismic-hazard.md)) adds a horizontal acceleration $k_h g$, which pushes the slab out and lifts weight off its base at the same time:

$$F = \frac{(\cos\beta - k_h\sin\beta)\tan\phi}{\sin\beta + k_h\cos\beta}$$

For $\beta = 28^\circ$, $\phi = 35^\circ$, a modest $k_h = 0.2$ takes $F$ from $1.32$ to $0.86$. **Shaking of 0.2 g fails a dry slope that had a 30 percent margin** — which is why landslides, not collapsing buildings, are the leading cause of death in many mountain earthquakes.

## Picture

![Panel a is a free-body diagram of the infinite slope. A tan slab of thickness z rests on a red failure plane inclined at an angle beta below the horizontal. The slab's weight is drawn as a vertical arrow from the failure plane, resolved by dashed construction lines into a blue component perpendicular to the plane labelled as clamping the base and a red component parallel to the plane labelled as driving sliding. Two blue arrows on the failure plane point outward from it, labelled u, showing pore pressure pushing the slab off its base. Beneath the sketch a panel gives the normal and shear stresses, the full factor-of-safety expression, the dry cohesionless result that the factor of safety is the ratio of tangents of the friction angle and the slope angle, and the note that saturation multiplies it by about one half. Panel b plots seven mass-wasting types as horizontal bars against velocity on a logarithmic axis running from ten to the minus ten to one hundred metres per second, coloured by water content, from creep at the slow dry end through solifluction, slumps, slides and earthflows to debris flows and rockfalls at the fast end. Below the bars are three sketches: creep shown by tilted fence posts and a curved tree trunk with no failure plane, a rotational slump with a curved failure surface and a back-tilted head block, and a translational slide on a planar surface parallel to the hillside.](assets/03-02-fig1.svg)

The right panel is the classification, and it is organized by the two things that actually distinguish mass movements in the field: **how fast** and **how wet**. Note the span — twelve orders of magnitude, from creep at a centimetre a year to a rock avalanche at highway speed. Nothing else in geomorphology covers that range.

**Read the four families off it:**

- **Creep** — imperceptible, continuous, everywhere on every soil-covered slope. Driven by freeze–thaw and wet–dry cycles that heave each grain perpendicular to the surface and drop it vertically, netting a small downslope step each cycle. **You never see it happening and you always see that it has happened**: tilted fence posts and gravestones, bent retaining walls, and tree trunks with a downslope curve near the base. Integrated over whole landscapes and geologic time, creep moves more material than all the spectacular failures put together.
- **Slides** — a coherent mass moving on a discrete failure surface. **Translational** if the surface is planar (a bedding plane, a joint, or the soil–bedrock contact) — this is exactly the infinite-slope case, and it is the common rainfall-triggered failure. **Rotational** (a *slump*) if the surface is spoon-shaped, which happens in thick homogeneous material with no pre-existing plane of weakness; the diagnostic is the **back-tilted head block** and a curved scarp at the crown.
- **Flows** — the mass deforms internally, so no single failure plane exists. Earthflows creep along at centimetres per day; **debris flows** move at metres per second, carry boulders in a slurry with the consistency of wet concrete, and follow valleys for tens of kilometres. A **lahar** ([2.8](02-08-volcanoes-volcanic-hazards.md)) is a debris flow made of volcanic ash, and it is deadly for exactly this reason: it travels far beyond anything else the volcano produces.
- **Falls** — free fall from a cliff, followed by bouncing and rolling. The accumulating cone below is **talus**, resting at its angle of repose.

## Worked examples

**Example 1 (mechanical — a hillslope through a storm).** Colluvium $z = 2.0\ \text{m}$ thick on bedrock, slope $\beta = 28^\circ$, friction angle $\phi = 35^\circ$, cohesion negligible, saturated bulk density $\rho = 2000\ \text{kg/m}^3$. (a) Compute $F$ dry. (b) Compute $F$ fully saturated, showing the stresses. (c) At what water-table height does it fail? (d) What must a drainage system achieve for $F = 1.2$?

**(a)** $$F_{\text{dry}} = \frac{\tan 35^\circ}{\tan 28^\circ} = \frac{0.7002}{0.5317} = \mathbf{1.32}$$

Stable, with a 32 percent margin. Note that neither $z$ nor $\rho$ was used.

**(b)** Now do it the long way, to see where the cancellation goes. With $\cos 28^\circ = 0.8830$ and $\sin 28^\circ = 0.4695$:

$$\sigma_n = \rho g z\cos^2\beta = 2000(9.81)(2.0)(0.7796) = 30.6\ \text{kPa}$$

$$\tau = \rho g z\sin\beta\cos\beta = 2000(9.81)(2.0)(0.4145) = 16.3\ \text{kPa}$$

$$u = \rho_w g z\cos^2\beta = 1000(9.81)(2.0)(0.7796) = 15.3\ \text{kPa}$$

$$\sigma_n - u = 30.6 - 15.3 = 15.3\ \text{kPa} \quad \text{(exactly half, since } \rho = 2\rho_w)$$

$$F = \frac{15.3 \times 0.7002}{16.3} = \frac{10.7}{16.3} = \mathbf{0.66}$$

Check against the shortcut: $(1 - 1\times 0.5)(1.32) = 0.66\ \checkmark$. **Saturation removed exactly half the strength and the slope is gone.**

**(c)** Set $F = 1$ in the water-table form:

$$\left(1 - 0.5m\right)(1.317) = 1 \;\Longrightarrow\; 1 - 0.5m = 0.759 \;\Longrightarrow\; m = 0.48$$

$$z_w = 0.48 \times 2.0 = \mathbf{0.96\ \text{m}}$$

**The slope fails when the water table reaches about half the soil thickness** — under a metre of saturated ground. It does not need to be soaked through.

**(d)** $$\left(1 - 0.5m\right)(1.317) = 1.2 \;\Longrightarrow\; 1 - 0.5m = 0.911 \;\Longrightarrow\; m = 0.18$$

$$z_w = 0.18 \times 2.0 = \mathbf{0.36\ \text{m}}$$

So the drains must hold the water table below about $35\ \text{cm}$ above the bedrock contact, through the design storm. **That is a specification an engineer can build to, and it came out of three angles and a density.** Note also the honest reading: $F$ can never exceed $1.32$ here however good the drainage is, so if the client wants $1.5$ the answer is not more drains — it is regrading the slope or moving the house.

**Example 2 (why you'd care — the sandcastle, and why it is a size effect).** Damp medium sand: grain diameter $d = 0.3\ \text{mm}$, bulk density $\rho = 1800\ \text{kg/m}^3$, $\phi = 35^\circ$. Menisci at grain contacts have radius $r \approx 0.1d = 3\times10^{-5}\ \text{m}$; take the bridged-contact fraction $\chi = 0.45$. (a) Find the suction and the apparent cohesion. (b) How thick a wall of damp sand stands at $60^\circ$? (c) What happens dry, and what happens when the tide comes in?

**(a)** $$s \approx \frac{2\sigma_s}{r} = \frac{2(0.072)}{3\times10^{-5}} = 4800\ \text{Pa} = 4.8\ \text{kPa}$$

$$c_{\text{app}} \approx \chi\,s\,\tan\phi = 0.45(4800)(0.7002) = \mathbf{1.5\ \text{kPa}}$$

A pressure of $1.5\ \text{kPa}$ is about 1.5 percent of an atmosphere — feeble by any engineering standard, and measured values for damp sand are indeed a few kPa.

**(b)** At $\beta = 60^\circ$: $\cos^2\beta = 0.25$, $\sin\beta\cos\beta = 0.4330$, and $\rho g = 17{,}658\ \text{N/m}^3$.

$$\tau = 17{,}658\,z\,(0.4330) = 7646\,z \qquad \sigma_n\tan\phi = 17{,}658\,z\,(0.25)(0.7002) = 3091\,z$$

$$F = \frac{1512 + 3091z}{7646z} = 1 \;\Longrightarrow\; 1512 = 4555\,z \;\Longrightarrow\; z = \mathbf{0.33\ \text{m}}$$

**A wall of damp sand stands at 60 degrees up to about a third of a metre, and not beyond.** At $z = 0.20\ \text{m}$, $F = (1512+618)/1529 = 1.39$ — comfortably stable. At $z = 1.0\ \text{m}$, $F = 4603/7646 = 0.60$ — collapse.

**This is the whole point, and it is a scaling argument.** Cohesion is a *fixed* stress; both the driving stress and the frictional strength grow linearly with $z$. So cohesion's share of the resistance is $c/(\rho g z)$, which shrinks as the structure grows. For a beach sandcastle at $z = 0.2\ \text{m}$ that ratio is $1512/3532 = 0.43$ — cohesion is nearly half the story. For a $30\ \text{m}$ sea cliff of the same damp sand it is $1512/529{,}740 = 0.003$, utterly negligible. **You cannot build a sandcastle at cathedral scale, and the reason is not engineering skill.**

**(c)** Dry sand has no menisci at all, so $c_{\text{app}} = 0$ and

$$F = \frac{\tan 35^\circ}{\tan 60^\circ} = \frac{0.7002}{1.7321} = \mathbf{0.40}$$

— it slumps to its angle of repose at any size. Soaked sand also has no menisci (the air–water interfaces are gone once the pores are full), *and* it has pore pressure, so

$$F = 0.5 \times 0.40 = \mathbf{0.20}$$

**Dry fails, soaked fails worse, damp stands.** The non-monotonic behaviour is the signature of apparent cohesion, and it is the reason the fastest way to destroy a sandcastle is not to kick it but to flood it. It is also why an unsaturated road cut can stand vertically for a dry decade and collapse in the first week of a wet season — the strength it had was never friction, and it was never permanent.

## Watch out

- **You might think heavy rain destabilizes a slope by making it heavier.** In the cohesionless infinite slope, $\rho$ cancels exactly — added weight drives and resists in equal measure. The failure comes from the pore-pressure term, which is why the deadly variable is the *water table height*, not the rainfall total, and why failures often occur hours to days after the rain stops, as infiltration reaches the failure plane.
- **You might say water "lubricates" the failure plane.** It does not, any more than it did in [2.4](02-04-how-rock-deforms.md) — $\tan\phi$ is essentially the same wet or dry. Water **unclamps**: it reduces $\sigma_n - u$, so the same friction coefficient delivers less resistance.
- **You might treat $F = 1.0$ as safe.** It is the definition of failure. And $\phi$, $c$ and the design water table are all uncertain by tens of percent, so real practice designs to $F = 1.3$–$1.5$ for permanent slopes. A computed $F$ of $1.05$ means "we do not know."
- **You might read the angle of repose as the friction angle of the rock.** It is the friction angle of the *loose* aggregate — the residual value for a loosely packed granular mass, a few degrees below the peak strength of the same material densely packed. That is why a slope can be stable at rest yet run out much further once it has started moving.
- **You might expect the dramatic failures to move the most material.** Creep is invisible, ubiquitous and continuous, and integrated over a landscape it dominates the sediment budget. The landslide makes the news; the creep makes the hillslope.
- **You might think the failure surface is where the material is weakest.** It is where the ratio $\tau/\tau_{\text{strength}}$ is highest — which is usually a contact between two units (soil on bedrock, permeable on impermeable) because that is where the water perches and $u$ spikes, not because that layer is intrinsically feeble.
- **You might blame deforestation only for the loss of "soil binding."** The mechanism is specific and quantitative: roots supply real cohesion of order $1$–$10\ \text{kPa}$, and the P3 calculation below shows that many steep forested slopes stand *only* because of it.

## One-liner

> A slope is a block on an incline, so a dry cohesionless one fails when it is steeper than its friction angle regardless of thickness or density — and water's lethal contribution is not the weight it adds but the pore pressure that unclamps the base, which is why drainage is the cheapest landslide fix and why a sandcastle needs its sand damp rather than dry or soaked.

## Problems

**P1 (🟢)** A colluvial slope has $\beta = 32^\circ$, $\phi = 36^\circ$, negligible cohesion, and saturated density $\rho = 2000\ \text{kg/m}^3$. (a) Compute $F$ when dry and when fully saturated with slope-parallel seepage. (b) Give the critical slope angle in each case. (c) State in one sentence why the slab thickness was not needed.

**P2 (🟡 — data to conclusion)** A hillside above a village fails during a storm, sending $2.5\ \text{m}$ of colluvium down a $26^\circ$ slope on the bedrock contact. Afterwards, piezometers installed in an identical adjacent slope show the water table rising to $1.8\ \text{m}$ above the bedrock contact during comparable storms. Take $\rho = 2000\ \text{kg/m}^3$, $c = 0$. (a) Assuming the slope was exactly at failure, back-calculate the friction angle $\phi$. (b) Was this slope stable when dry, and by how much? (c) A consultant proposes horizontal drains. To what height must they hold the water table to achieve $F = 1.3$, and is that plausible?

**P3 (🔴 — the clear-cut problem)** A forested slope in the Pacific Northwest: $\beta = 34^\circ$, soil $z = 1.5\ \text{m}$, $\rho = 1900\ \text{kg/m}^3$, $\phi = 33^\circ$, root cohesion $c_r = 5\ \text{kPa}$. In a big storm the water table reaches $m = 0.6$. (a) Compute $F$ with the roots present. (b) Compute $F$ with $c_r = 0$ and the slope bone dry ($m = 0$), and interpret the result. (c) Logging kills the root network, which decays over roughly $3$–$8$ years, while replanted trees take $10$–$20$ years to rebuild it. Predict when landslide frequency peaks after a clear-cut, and say what mitigation follows from your answer to (b).

<details>
<summary>Solutions</summary>

**P1 (a)** Dry:

$$F = \frac{\tan 36^\circ}{\tan 32^\circ} = \frac{0.7265}{0.6249} = \mathbf{1.16}$$

Saturated, with $\rho_w/\rho = 1000/2000 = 0.5$ and $m = 1$:

$$F = (1 - 0.5)(1.163) = \mathbf{0.58}$$

**Stable dry, and gone once saturated** — and the margin when dry was only 16 percent to begin with, so this is a marginal slope in any weather.

**(b)** Dry: failure at $\beta = \phi = \mathbf{36^\circ}$.

Saturated: set $(1-0.5)\tan\phi/\tan\beta = 1$, so

$$\tan\beta_c = 0.5\tan 36^\circ = 0.5(0.7265) = 0.3633 \;\Longrightarrow\; \beta_c = \mathbf{20.0^\circ}$$

**Saturating the soil cuts the safe angle nearly in half**, from 36 degrees to 20. Every slope in this landscape between $20^\circ$ and $36^\circ$ is stable in dry weather and unstable in a storm — which is exactly the population of slopes people build on.

**(c)** Because in the cohesionless case both the driving stress and the frictional resistance are proportional to $\rho g z$, so the factor cancels and $F = \tan\phi/\tan\beta$ depends only on the two angles.

**P2 (a)** The water table stood at $m = 1.8/2.5 = 0.72$ of the slab thickness. At failure $F = 1$:

$$\left(1 - 0.72 \times 0.5\right)\frac{\tan\phi}{\tan 26^\circ} = 1 \;\Longrightarrow\; 0.64\,\tan\phi = \tan 26^\circ = 0.4877$$

$$\tan\phi = \frac{0.4877}{0.64} = 0.7621 \;\Longrightarrow\; \phi = \mathbf{37.3^\circ}$$

A perfectly ordinary value for a gravelly colluvium — which is the point of a back-analysis: **the landslide itself is the best strength test you will ever get**, because it is at full scale, in situ, and you know the answer was exactly $F = 1$.

**(b)** $$F_{\text{dry}} = \frac{0.7621}{0.4877} = \mathbf{1.56}$$

**A 56 percent margin when dry.** Nothing about this hillside looked dangerous. That is the characteristic trap of shallow translational failures: the slope angle is well below the friction angle, so the ground is stable for decades, and the entire hazard lives in a variable that is invisible from the surface.

**(c)** $$\left(1 - 0.5m\right)(1.5625) = 1.3 \;\Longrightarrow\; 1 - 0.5m = 0.832 \;\Longrightarrow\; m = 0.336$$

$$z_w = 0.336 \times 2.5 = \mathbf{0.84\ \text{m}}$$

The drains must hold the water table below about $0.84\ \text{m}$ above the bedrock contact — down from the $1.8\ \text{m}$ observed. **Plausible, and this is the standard fix**: a line of horizontal drains bored into the slope, plus surface ditches to stop runoff infiltrating at the head. Note how much easier this target is than the one in Example 1, because $F_{\text{dry}} = 1.56$ here leaves room to work with. **Drainage can only ever recover the margin the dry slope had**; if $F_{\text{dry}}$ is already near 1, drainage cannot save it and the answer is regrading or avoidance.

**P3 (a)** With $\cos 34^\circ = 0.8290$, $\cos^2 34^\circ = 0.6873$, $\sin 34^\circ\cos 34^\circ = 0.4636$, and $\rho g z = 1900(9.81)(1.5) = 27{,}958\ \text{Pa}$:

$$\sigma_n = 27{,}958(0.6873) = 19.22\ \text{kPa}$$

$$u = m\,\rho_w g z\cos^2\beta = 0.6(1000)(9.81)(1.5)(0.6873) = 6.07\ \text{kPa}$$

$$\tau = 27{,}958(0.4636) = 12.96\ \text{kPa}$$

$$F = \frac{5.00 + (19.22 - 6.07)(0.6494)}{12.96} = \frac{5.00 + 8.54}{12.96} = \frac{13.54}{12.96} = \mathbf{1.05}$$

**Stable — just.** And note the composition of the resistance: $5.0\ \text{kPa}$ from roots against $8.5\ \text{kPa}$ from friction. **The trees are supplying 37 percent of the strength holding this hillside up.**

**(b)** With $c_r = 0$ and $m = 0$, everything collapses to the dry cohesionless result:

$$F = \frac{\tan 33^\circ}{\tan 34^\circ} = \frac{0.6494}{0.6745} = \mathbf{0.96}$$

**Less than one — the slope cannot stand at all without root cohesion, even bone dry.** This is not a pathological example; it is the normal condition of steep forested terrain in wet mountain belts, where slopes routinely sit a degree or two *above* the friction angle of their soil. The forest is not decorating the hillside. **The forest is the reason the hillside exists at that angle**, and the soil there is best understood as a deposit that root cohesion has been holding in temporary suspension since the last failure.

**(c)** Superimpose the two timescales. Root strength decays from full to near zero over about $3$–$8$ years after cutting; replacement roots contribute little until year $10$ and are not comparable to mature ones until year $20$. Their sum has a **minimum roughly 5 to 15 years after the clear-cut**, and that is precisely when observed landslide frequency in logged catchments peaks — a well-documented result, and a nasty one politically, because the failures arrive long after the operation is over and the site has visibly greened up again.

**What follows from (b):** since $F < 1$ without roots even in dry weather, **no drainage scheme can stabilize this slope** — drainage attacks the $u$ term, and here the $u$ term is not the problem. The only interventions that work are the ones that keep the cohesion: do not cut these slopes at all, or harvest selectively so a continuous root network survives. Ranking the options honestly:

| Intervention | Attacks | Works here? |
|---|---|---|
| Horizontal drains | $u$ | No — fails dry as well |
| Regrading to a gentler $\beta$ | driving stress | Yes, but it is a whole mountainside |
| Retaining structures | adds $c$ | Only over tens of metres, not a catchment |
| Avoid cutting / selective harvest | preserves $c_r$ | **Yes — the only scalable option** |

Which is the general lesson of slope-stability practice: **land-use avoidance beats engineering, because engineering scales with area and hillsides are large.**

</details>

## Flashback

**From Lesson 3.1 (Weathering & Soils):** A New England cemetery. A **slate** headstone from 1720 has crisp, fully legible lettering. A **marble** headstone from 1850, a century and a third younger, is sugary-textured and its inscription is nearly gone. A **granite** headstone from 1870 is sharp overall, but its feldspar has gone chalky white while the quartz grains stand slightly proud of the surface. (a) Explain the marble-versus-slate contrast, naming the process and writing the reaction. (b) Explain the granite's differential weathering, naming the reaction and its solid product. (c) Which organizing principle from 3.1 predicts part (b)?

<details>
<summary>Solution</summary>

**(a) Dissolution, and composition beats age.** Marble is recrystallized $\text{CaCO}_3$. Rainwater is naturally acidic because it equilibrates with atmospheric $\text{CO}_2$:

$$\text{CO}_2 + \text{H}_2\text{O} \rightarrow \text{H}_2\text{CO}_3$$

$$\text{CaCO}_3 + \text{H}_2\text{CO}_3 \rightarrow \text{Ca}^{2+} + 2\,\text{HCO}_3^-$$

Both products are soluble, so the stone does not weather to a residue — **it leaves**, taking the inscription with it. Slate is a metamorphosed mudstone made of fine micas, chlorite and quartz: an assemblage that formed at low temperature and is already close to equilibrium with surface conditions, so it has almost nothing to react. **The 130-years-older stone is the fresher one, because the rate is set by mineralogy, not by exposure time.**

**(b) Hydrolysis, and it makes clay.** Feldspar is attacked by the same carbonic acid:

$$2\,\text{KAlSi}_3\text{O}_8 + 2\,\text{H}_2\text{CO}_3 + 9\,\text{H}_2\text{O} \rightarrow \text{Al}_2\text{Si}_2\text{O}_5(\text{OH})_4 + 2\,\text{K}^+ + 2\,\text{HCO}_3^- + 4\,\text{H}_4\text{SiO}_4$$

The solid product $\text{Al}_2\text{Si}_2\text{O}_5(\text{OH})_4$ is **kaolinite**, a clay — soft, white and dull, which is exactly what "chalky" means on a gravestone. Quartz, $\text{SiO}_2$, is a framework silicate with no cations to leach and negligible solubility at surface pH, so it is left behind untouched and stands in relief as the feldspar around it retreats.

**(c) The Goldich stability series, which is Bowen's series run backwards.** Minerals crystallize from magma in a temperature order, and their surface stability is the reverse of it: what formed hottest and furthest from surface conditions is least stable when it gets there. Feldspar crystallizes before quartz on the continuous branch, so feldspar weathers before quartz — and the gravestone is a two-mineral experiment confirming it.

This also predicts the sediment: the feldspar leaves as clay plus dissolved $\text{K}^+$ and silica, the quartz survives as sand grains. **Run that for long enough and you have made a quartz arenite** ([1.5](01-05-sedimentary-rocks.md)) — and a soil ([3.1](03-01-weathering-soils.md)) whose cohesion is precisely the clay this reaction produced, which is where this lesson started.

</details>

## Connections

- **Backward:** [3.1](03-01-weathering-soils.md) made the regolith that this lesson moves, and supplied the clay whose bonding is most of a natural soil's cohesion. The effective-stress relation $\sigma_n - u$ is imported unchanged from [2.4](02-04-how-rock-deforms.md), where it explained induced seismicity; here it explains landslides, and the physics is identical. The angle of repose was promised to this lesson by [2.8](02-08-volcanoes-volcanic-hazards.md) for cinder-cone slopes, and [1.5](01-05-sedimentary-rocks.md)'s sorting and rounding are what set it.
- **Forward:** [3.3](03-03-rivers-landscape-evolution.md) — rivers undercut valley walls, which is the commonest natural trigger there is, and hillslope failure is how a valley widens once the river has cut it deep. [3.5](03-05-deserts-wind-coasts.md) does the same job with waves at a sea cliff. [3.6](03-06-groundwater-aquifers-karst.md) supplies the machinery that actually sets $u$ — Darcy's law, hydraulic conductivity, and how fast a wetting front reaches a failure plane. [5.4](05-04-resources-geologic-hazards.md) puts mass wasting into a hazard-and-risk framework alongside earthquakes and eruptions.
- **Sideways:** the free-body diagram is the inclined-plane problem of [mechanics-refresher 1.3](../../mechanics-refresher/lessons/01-03-applying-newtons-laws.md) with a pore-pressure term added; the failure criterion is the Coulomb criterion whose material-science parent is [materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md); and the apparent cohesion of damp sand is the Young–Laplace pressure of the surface tension introduced in [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md). Once a debris flow is fully mobilized it stops being a slope-stability problem and becomes a non-Newtonian flow problem, which belongs to [`fluid-dynamics`](../../fluid-dynamics/syllabus.md).

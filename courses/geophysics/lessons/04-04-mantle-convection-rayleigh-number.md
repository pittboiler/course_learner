# Geophysics · Lesson 4.4: Mantle convection and the Rayleigh number

> ⏱ ~15 min · Module 4: Heat flow, rheology & geodynamics · Builds on: [4.1](04-01-conduction-and-the-geotherm.md), [4.3](04-03-cooling-oceanic-lithosphere.md), [fluid-dynamics 4.3](../../fluid-dynamics/lessons/04-03-instability-kh-rb.md) · Unlocks: [4.5](04-05-plate-driving-forces.md), [5.2](05-02-mineral-physics-transition-zone.md)

## Why this matters

[4.1](04-01-conduction-and-the-geotherm.md) proved the mantle must convect, by showing that conduction gives absurd temperatures. This lesson makes that quantitative: **how vigorously** does it convect, what does the flow look like, and how much heat does it move?

The answer reorganizes the whole picture. The lithosphere is not a lid sitting on top of a convecting mantle — **it is the convection's cold upper boundary layer**, and a subducting slab is that boundary layer falling off. Plate tectonics is not a separate phenomenon from mantle convection; it is the surface expression of it.

## The idea

**Convection is a competition, and one number scores it.** Heat a fluid layer from below and the hot bottom fluid is buoyant and wants to rise. Two things stop it: viscosity resists the motion, and thermal diffusion erases the temperature contrast before the parcel gets anywhere. The **Rayleigh number** is the ratio of the driving buoyancy to the two dissipative effects, and when it exceeds a critical value of about 1700, convection starts.

**The mantle's Rayleigh number is about $10^8$.** That is five orders of magnitude above critical. The mantle is not marginally convecting; it is convecting extremely vigorously, in a time-dependent, chaotic regime with narrow plumes and sheet-like downwellings — nothing like the tidy steady rolls of a textbook Bénard cell.

**Vigorous convection makes thin boundary layers.** Almost all of the temperature drop across the layer happens in narrow zones at the top and bottom; the interior is nearly isothermal (along an adiabat, [4.1](04-01-conduction-and-the-geotherm.md)). The thickness of those boundary layers falls as $Ra^{-1/3}$, and for the Earth it comes out near 70 km — **which is the lithosphere.**

**And that identification is the payoff.** The plate is not an independent object. It is the cold thermal boundary layer of mantle convection, thickening as it cools ([4.3](04-03-cooling-oceanic-lithosphere.md)) until it becomes dense enough to founder. Subduction is boundary-layer instability. The hot boundary layer at the bottom — the D″ region above the core — is where plumes are born.

**Whether the whole mantle convects as one layer was the great argument, and tomography settled it.** Geochemistry suggested two isolated reservoirs; the 660 km phase change offered a barrier. But seismic tomography ([1.5](01-05-seismic-tomography.md)) images slabs penetrating past 660 km all the way to the core–mantle boundary. **Material crosses.** The modern picture is whole-mantle circulation with the 660 acting as a partial impediment rather than a wall.

## The formal version

**The Rayleigh number.**

$$\boxed{\ Ra = \frac{\alpha g\,\Delta T\,d^3}{\kappa\nu}\ }$$

with $\alpha$ thermal expansivity, $\Delta T$ the temperature drop across the layer, $d$ its depth, $\kappa$ thermal diffusivity and $\nu$ kinematic viscosity ($\nu = \eta/\rho$). *In words: buoyancy driving, divided by the product of the two things that dissipate it.* The cube on $d$ makes $Ra$ ferociously sensitive to layer depth — a factor of 2 in $d$ is a factor of 8 in $Ra$.

**Critical Rayleigh number.**

| Boundary conditions | $Ra_c$ |
|---|---|
| both rigid | 1708 |
| both free-slip | 657 |
| one rigid, one free | 1101 |

Below $Ra_c$, a perturbation decays and heat moves by conduction alone. Above it, convection grows.

**Boundary-layer scalings.** For vigorous, bottom-heated convection the standard results are

$$\frac{\delta}{d} = \left(\frac{Ra_c}{Ra}\right)^{1/3}, \qquad \mathrm{Nu} = \frac{q_{\text{convective}}}{q_{\text{conductive}}} = \left(\frac{Ra}{Ra_c}\right)^{1/3}.$$

*In words: the boundary layers thin, and the heat transport improves, as the cube root of how supercritical you are.* The $1/3$ exponent has a clean physical origin: the boundary layer thickens until *its own* local Rayleigh number reaches critical, at which point it becomes unstable and falls off. That condition, $Ra_\delta = Ra_c$, gives $\delta \propto Ra^{-1/3}$ directly — and it makes the heat flux **independent of the layer depth**, which is why a thicker mantle would not lose heat any faster per unit area.

**The Nusselt number** is the factor by which convection beats conduction. $\mathrm{Nu} = 1$ means no convection.

**Aspect ratio.** Convection cells in a layer heated from below have a width comparable to the layer depth, so whole-mantle cells should be a few thousand kilometres across. Plates are much wider than that — the Pacific plate is 10,000 km — which is one of several signs that plate geometry is not set by convection cell size alone but by the strength and breakage of the plates themselves.

**Internal versus bottom heating.** The classical scalings assume all heat enters through the base. The Earth is mostly **internally heated** (radiogenic, [4.2](04-02-radiogenic-heat-budget.md)), which changes the picture: the interior is hotter relative to the boundaries, downwellings become stronger and more sheet-like than upwellings, and the bottom boundary layer is weaker. **This is why Earth has vigorous, plate-scale downwellings (slabs) and only narrow, sparse upwellings (plumes)** — an asymmetry that pure bottom heating would not produce.

**Layered versus whole-mantle convection.** The case for layering rested on the 660 km endothermic phase change ([5.2](05-02-mineral-physics-transition-zone.md)), whose negative Clapeyron slope resists material crossing, and on geochemical evidence for distinct reservoirs. The case against — now decisive — is tomographic imaging of slabs continuous through 660 to the core–mantle boundary, and of plumes rising from it.

## Picture

![Left: a rectangular box representing the mantle with a blue shaded strip along the top labelled cold top boundary layer, the lithosphere, 66 km, and a coral shaded strip along the bottom labelled hot bottom boundary layer, D double prime, source of plumes. Two convection cells are drawn inside as closed loops with arrows, their width roughly equal to the layer depth. Notes give the Rayleigh number formula and state that the Earth's whole mantle has a Rayleigh number near 1.5 times ten to the eighth against a critical value near 1700, supercritical by five orders of magnitude, and that the lithosphere is not a lid on top of the convection but is the convection's cold boundary layer. Right: a vertical scale of Rayleigh number with marks at ten cubed for critical where convection begins, ten to the fifth for steady rolls, ten to the seventh for time-dependent flow with plumes, and a bold coral mark at ten to the eighth labelled the Earth, hard turbulence. Below, the boundary-layer and Nusselt scalings, noting that vigorous convection makes thin boundary layers and carries heat about forty times better than conduction](assets/04-04-fig1.svg)

The plate on which you are sitting is the top of this diagram.

## Worked examples

**Example 1 (mechanical — how vigorous?).** For the whole mantle take $\alpha = 2\times10^{-5}\ \mathrm{K^{-1}}$, $g = 10\ \mathrm{m\,s^{-2}}$, $\Delta T = 3000$ K, $d = 2.9\times10^{6}$ m, $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$, $\nu = 10^{17}\ \mathrm{m^2\,s^{-1}}$. Find $Ra$, the boundary-layer thickness and the Nusselt number.

*Rayleigh number.*
$$d^3 = (2.9\times10^{6})^3 = 2.439\times10^{19}\ \mathrm{m^3}.$$
$$\text{numerator} = 2\times10^{-5}\times10\times3000\times2.439\times10^{19} = 0.6\times2.439\times10^{19} = 1.463\times10^{19}.$$
$$\text{denominator} = 10^{-6}\times10^{17} = 10^{11}.$$
$$Ra = \frac{1.463\times10^{19}}{10^{11}} = 1.46\times10^{8}.$$

**Five orders of magnitude above the critical 1708.**

*Boundary-layer thickness.*
$$\frac{\delta}{d} = \left(\frac{1708}{1.46\times10^{8}}\right)^{1/3} = (1.170\times10^{-5})^{1/3}.$$
$$\log_{10}(1.170\times10^{-5}) = -4.932, \quad /3 = -1.644, \quad \Rightarrow\ 2.27\times10^{-2}.$$
$$\delta = 0.0227\times2900 = 66\ \mathrm{km}.$$

**Sixty-six kilometres**, which is the thickness of oceanic lithosphere at intermediate age ([4.3](04-03-cooling-oceanic-lithosphere.md) gives 79 km at 50 Myr). The convection calculation, with no knowledge of plates, produces the plate.

*Nusselt number.*
$$\mathrm{Nu} = \left(\frac{1.46\times10^{8}}{1708}\right)^{1/3} = (8.55\times10^{4})^{1/3} = 44.$$

Convection carries heat about **forty-four times better** than conduction would through the same layer.

**Example 2 (why you'd care — was the mantle layered?).** For two decades the field was split over whether the upper and lower mantle convect separately. Set up the calculation and explain what settled it.

*First: does the upper mantle convect on its own?* Take $d = 660$ km, $\Delta T \approx 1000$ K across it, $\alpha = 3\times10^{-5}$, $\nu = 10^{17}$:

$$d^3 = (6.6\times10^{5})^3 = 2.875\times10^{17},$$
$$Ra = \frac{3\times10^{-5}\times10\times1000\times2.875\times10^{17}}{10^{-6}\times10^{17}} = \frac{8.63\times10^{16}}{10^{11}} = 8.6\times10^{5}.$$

Still 500 times supercritical. **So layered convection is dynamically possible** — each layer would convect on its own. The question was never whether it *could*; it was whether it *does*.

*The case for layering.* Geochemistry supplied the strongest argument: mid-ocean-ridge basalts are systematically depleted in incompatible elements, while ocean-island basalts sample a less depleted source. Two distinct reservoirs, apparently not mixing. And physics supplied a barrier: the 660 km transition is **endothermic**, with a negative Clapeyron slope ([5.2](05-02-mineral-physics-transition-zone.md)), so a cold downwelling arriving there encounters a buoyancy penalty that resists its passage.

*The case against, and what settled it.* Seismic tomography. By the early 1990s, high-resolution P-wave models were imaging fast anomalies — subducted slabs — that are continuous from trenches down through 660 and, in several cases, all the way to the core–mantle boundary beneath the Americas and southeast Asia. **You cannot have two isolated reservoirs when one of them is being fed a slab from the other.**

*But the old evidence did not evaporate, and that is the interesting part.* The geochemical distinction is real; the phase barrier is real. What changed is the interpretation. The modern picture is **whole-mantle circulation with impediments**: slabs are slowed and sometimes temporarily stalled at 660, buckling and pooling before eventually breaking through — exactly what the tomographic images show, with some slabs flattened above the discontinuity and others penetrating. Mixing is therefore incomplete and sluggish, which allows chemically distinct domains to persist for billions of years even in a mantle that circulates as one.

*The methodological lesson.* Two lines of evidence pointed in opposite directions, and the resolution was not that one was wrong. **The dispute was resolved by a third method with a different kind of sensitivity** — imaging rather than sampling or theory — which showed that the two were compatible under a picture neither camp had fully articulated. That is a common shape for scientific disputes, and it is worth resisting the urge to declare a winner when the honest answer is "both observations survive; the model changed."

## Watch out

- **You might think** $Ra \approx 10^8$ means the mantle is turbulent in the everyday sense. **Actually** its *Reynolds* number is about $10^{-20}$ — inertia is utterly negligible, and the flow is creeping Stokes flow ([fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md)). It is "vigorously convecting" and "completely non-turbulent" at the same time, because $Ra$ and $Re$ measure different things.
- **You might think** the viscosity in $Ra$ is a well-known number. **Actually** it is uncertain by more than an order of magnitude, varies by several orders of magnitude with depth and temperature, and is the least constrained quantity in the formula. Since $Ra \propto 1/\nu$, quoting $Ra$ to more than one significant figure is false precision. This is why the independent viscosity measurement of [4.6](04-06-mantle-rheology-post-glacial-rebound.md) matters so much.
- **You might think** convection cells should match plate sizes. **Actually** they do not: cells scale with layer depth (a few thousand km) while plates range from a few hundred to ten thousand km. Plate geometry is set by where the lithosphere is weak enough to break, not by the underlying flow — which is why plate tectonics is a property of the *lithosphere's* rheology as much as of the mantle's convection.

## One-liner

> The Rayleigh number weighs buoyancy against viscosity and diffusion, and the mantle's value of $10^8$ means convection is vigorous, its boundary layers are thin — and the cold one is the plate you are standing on.

## Problems

**P1 (🟢)** A fluid layer has $\alpha = 2.5\times10^{-5}\ \mathrm{K^{-1}}$, $g = 9.8\ \mathrm{m\,s^{-2}}$, $\Delta T = 500$ K, $d = 1.0\times10^{6}$ m, $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$, $\nu = 5\times10^{16}\ \mathrm{m^2\,s^{-1}}$. (a) Compute $Ra$. (b) Compare with $Ra_c = 1708$ and state whether it convects. (c) Compute the Nusselt number.

**P2 (🟡)** Using the mantle values of Example 1. (a) Recompute $Ra$ if the viscosity were $10^{18}$ rather than $10^{17}\ \mathrm{m^2\,s^{-1}}$. (b) Recompute the boundary-layer thickness. (c) Comment on how sensitive the inferred lithosphere thickness is to the viscosity, and on what that implies for using $\delta$ as a check on the model.

**P3 (🔴, bridges to [4.5](04-05-plate-driving-forces.md))** The boundary-layer instability criterion says the top boundary layer becomes unstable and founders when its *own* Rayleigh number reaches critical. (a) Write $Ra_\delta$ for a layer of thickness $\delta$ with the same $\Delta T$, and set it equal to $Ra_c$ to obtain $\delta$. (b) Using [4.3](04-03-cooling-oceanic-lithosphere.md)'s $\delta = 2\sqrt{\kappa t}$, convert your $\delta$ into an age at which oceanic lithosphere should become unstable. Use $\alpha = 3\times10^{-5}$, $g = 10$, $\Delta T = 1300$ K, $\kappa = 10^{-6}$, $\nu = 10^{17}\ \mathrm{m^2\,s^{-1}}$, $Ra_c = 1000$. (c) Compare with the observed maximum age of oceanic lithosphere (about 180 Myr) and with the age at which seafloor flattening begins (about 80 Myr). (d) Comment on what the comparison suggests about why old ocean floor subducts.

<details>
<summary>Solutions</summary>

**P1** (a) $$d^3 = 10^{18}\ \mathrm{m^3}.$$
$$Ra = \frac{2.5\times10^{-5}\times9.8\times500\times10^{18}}{10^{-6}\times5\times10^{16}} = \frac{1.225\times10^{17}}{5\times10^{10}} = 2.45\times10^{6}.$$

(b) $Ra/Ra_c = 2.45\times10^{6}/1708 = 1434$, so it is **1400 times supercritical** and convects vigorously.

(c) $$\mathrm{Nu} = (1434)^{1/3} = 11.3.$$

Convection carries about eleven times the heat that conduction would.

**P2** (a) $Ra \propto 1/\nu$, so a tenfold increase in viscosity gives

$$Ra = \frac{1.46\times10^{8}}{10} = 1.46\times10^{7}.$$

(b) $$\frac{\delta}{d} = \left(\frac{1708}{1.46\times10^{7}}\right)^{1/3} = (1.170\times10^{-4})^{1/3}.$$
$$\log_{10} = -3.932,\ /3 = -1.311, \quad \Rightarrow\ 4.89\times10^{-2}, \qquad \delta = 0.0489\times2900 = 142\ \mathrm{km}.$$

(c) $\delta \propto Ra^{-1/3} \propto \nu^{1/3}$, so **a factor of 10 in viscosity is only a factor of $10^{1/3} = 2.15$ in boundary-layer thickness.** The predicted lithosphere goes from 66 km to 142 km — a real change, but far less dramatic than the input.

That cube root cuts both ways. On the one hand it is reassuring: the qualitative conclusion, that the boundary layer is of order 100 km and therefore *is* the lithosphere, survives an order-of-magnitude uncertainty in the worst-known parameter. On the other hand it means $\delta$ is a **weak constraint on viscosity**: to pin $\nu$ to a factor of 2 you would need to know the boundary-layer thickness to 25 percent, which observations do not supply, since "the thickness of the lithosphere" is itself definition-dependent.

**This is why viscosity has to be measured independently** — by post-glacial rebound ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)) and by the geoid ([2.4](02-04-the-geoid.md)) — rather than inferred from convection scalings. A quantity that enters only as a cube root cannot be recovered from the observable it controls.

**P3** (a) For a layer of its own thickness $\delta$ carrying the full temperature contrast:

$$Ra_\delta = \frac{\alpha g\Delta T\,\delta^3}{\kappa\nu} = Ra_c \;\Longrightarrow\; \delta = \left(\frac{Ra_c\,\kappa\nu}{\alpha g\Delta T}\right)^{1/3}.$$

(b) $$\delta = \left(\frac{1000\times10^{-6}\times10^{17}}{3\times10^{-5}\times10\times1300}\right)^{1/3} = \left(\frac{10^{14}}{0.39}\right)^{1/3} = (2.564\times10^{14})^{1/3}.$$
$$\log_{10}(2.564\times10^{14}) = 14.409,\ /3 = 4.803, \quad \delta = 6.35\times10^{4}\ \mathrm{m} = 63.5\ \mathrm{km}.$$

Converting to an age via $\delta = 2\sqrt{\kappa t}$:

$$t = \frac{\delta^2}{4\kappa} = \frac{(6.35\times10^{4})^2}{4\times10^{-6}} = \frac{4.032\times10^{9}}{4\times10^{-6}} = 1.008\times10^{15}\ \mathrm{s} = 32\ \mathrm{Myr}.$$

(c) The prediction — instability at 32 Myr — is **much younger** than either observation. Real oceanic lithosphere survives to 180 Myr before subducting, and the flattening that signals *something* happening at the plate's base begins around 80 Myr.

(d) The comparison is informative precisely because the prediction is too early, and there are two distinct things to take from it.

First, **the simple criterion is not what governs subduction.** A boundary layer in an ordinary fluid falls off as soon as it is negatively buoyant enough; oceanic lithosphere does not, because it has *strength*. The cold upper part is elastic and brittle ([2.6](02-06-flexure-of-the-lithosphere.md)), and a strong plate resists the bending required to founder. Subduction begins where the plate is already broken or weakened — at a pre-existing boundary — rather than wherever the buoyancy condition is first met. **This is exactly why plate tectonics is rare in the solar system**: the buoyancy is generic, but a lithosphere that can break is not ([`planetary-science`](../../planetary-science/syllabus.md) 2.5 owns the comparison).

Second, **the calculation may nonetheless be describing something real, just not subduction.** A boundary layer that becomes unstable at a few tens of Myr, but is prevented from foundering wholesale by the plate's strength, might instead shed only its hot, weak *lower* portion in small-scale convective drips. That is precisely the mechanism usually invoked to explain seafloor flattening at 80 Myr ([4.3](04-03-cooling-oceanic-lithosphere.md), P3): small-scale convection stripping the base of the plate, keeping it from thickening further, while the strong upper part sails on intact until it reaches a trench.

So the right reading is that **the lithosphere is convectively unstable long before it subducts, and its strength is what postpones the reckoning** — with the instability expressing itself in the meantime as small-scale drips rather than as whole-plate foundering. The force balance that finally does the job is [4.5](04-05-plate-driving-forces.md).

</details>

## Flashback

**From Lesson 4.3 (Cooling of the oceanic lithosphere):** Using $d(t) = 2500 + 355\sqrt t$ m and $q(t) = 480/\sqrt t\ \mathrm{mW\,m^{-2}}$, $t$ in Myr, and $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$. (a) Find the depth and heat flow of 36 Myr crust. (b) Find its thermal thickness. (c) A site on 36 Myr crust measures 78 mW/m²; comment.

<details>
<summary>Solution</summary>

(a) $$d = 2500 + 355\times6 = 2500 + 2130 = 4630\ \mathrm{m}, \qquad q = \frac{480}{6} = 80\ \mathrm{mW\,m^{-2}}.$$

(b) $$t = 36\times3.156\times10^{13} = 1.136\times10^{15}\ \mathrm{s},$$
$$y_T = 2\sqrt{10^{-6}\times1.136\times10^{15}} = 2\sqrt{1.136\times10^{9}} = 2\times33{,}705 = 67\ \mathrm{km}.$$

(c) The measured 78 against a predicted 80 mW/m² is agreement to 2.5 percent — well within measurement scatter.

That agreement is itself the interesting part. At 36 Myr the crust is old enough that sediment has largely sealed it, so hydrothermal circulation no longer bypasses the probe and the conductive measurement captures essentially all the heat. Compare the 56 percent deficit at 2 Myr in Example 2 of [4.3](04-03-cooling-oceanic-lithosphere.md): **the same model, the same constants, and the discrepancy has vanished** — which is what identifies hydrothermal circulation as the cause rather than an error in the cooling model.

</details>

## Connections

- **Backward:** the necessity of convection was established in [4.1](04-01-conduction-and-the-geotherm.md); the cooling boundary layer whose thickness this lesson predicts is the plate of [4.3](04-03-cooling-oceanic-lithosphere.md); the Rayleigh–Bénard instability itself is [fluid-dynamics 4.3](../../fluid-dynamics/lessons/04-03-instability-kh-rb.md), and the zero-Reynolds-number regime is [fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md).
- **Forward:** [4.5](04-05-plate-driving-forces.md) turns the boundary-layer picture into a force balance on a plate; [4.6](04-06-mantle-rheology-post-glacial-rebound.md) supplies the independently measured viscosity that P2 showed cannot be recovered from $Ra$; [5.2](05-02-mineral-physics-transition-zone.md) covers the 660 phase change that the layering debate turned on, and [5.4](05-04-the-core.md) the D″ boundary layer at the bottom.
- **Sideways:** [`geology` 2.3](../../geology/lessons/02-03-driving-mechanism.md) owns the qualitative account of mantle convection as the engine of plate tectonics and cites this lesson for the numbers. The Rayleigh number and its boundary-layer scalings are the same physics as convection in the atmosphere ([atmospheric-science 2.4](../../atmospheric-science/lessons/02-04-stability-parcel-theory-cape.md)), in the ocean ([oceanography 4.3](../../oceanography/lessons/04-03-diapycnal-mixing-abyssal-recipe.md)) and in stellar interiors ([astrophysics 2.2](../../astrophysics/lessons/02-02-energy-transport-opacity.md)) — four fluids differing by thirty orders of magnitude in viscosity, obeying one criterion.

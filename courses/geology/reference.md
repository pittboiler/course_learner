# Geology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Geology is the science of reading a planet off its own debris, and almost every
question it asks is answered by **placing an observation in a table**: which
mineral, which rock, which boundary, which facies, which fault, which
unconformity, which epoch. So this card is mostly **classification grids and
diagnostic keys** — the silicate polymerization series, the igneous grid, the
Wentworth scale, the metamorphic facies, the plate-boundary table, Anderson's
fault classes, the map conventions, the isotope systems, the timescale. The
formulas are fewer than in a physics course but they carry real weight, and they
are grouped below by the job they do. Use the card for the tables first, the
numbers second, and the notation third — geology recycles $\rho$, $\phi$, $K$,
$h$, $T$ and $z$ across five modules that were written by different centuries.

## Scope discipline

`geology` owns **minerals, rocks and the rock cycle**, **structural geology**,
**geologic maps**, **stratigraphy**, **dating practice**, **surface processes**,
and **Earth history read from the rock record**.

It **cedes**, and cites rather than re-derives:

- the quantitative physics of the Earth — stress and strain tensors, seismic wave
  physics and the moment tensor, isostasy and gravity, heat flow and mantle
  convection, paleomagnetism — to [`geophysics`](../geophysics/syllabus.md);
- comparative planetology, differentiation, planetary thermal evolution and
  impact cratering to [`planetary-science`](../planetary-science/syllabus.md);
- crystal lattices, Miller indices, phase diagrams and the lever rule,
  dislocations and creep to [`materials-science`](../materials-science/syllabus.md);
- ionic solids and lattice energy to
  [`inorganic-chemistry`](../inorganic-chemistry/syllabus.md);
- the radioactive decay law itself to
  [`intro-nuclear-engineering`](../intro-nuclear-engineering/syllabus.md) and
  [`nuclear-particle-physics`](../nuclear-particle-physics/syllabus.md) —
  geology owns **dating practice**, not the decay law;
- mass extinctions and the biology of the fossil record to
  [`evolution-ecology`](../evolution-ecology/syllabus.md);
- the flux laws and open-channel flow to
  [`transport-phenomena`](../transport-phenomena/syllabus.md) and
  [`fluid-dynamics`](../fluid-dynamics/syllabus.md).

**A ceded topic is used freely here; it is just cited to its owner.** The
"Assumed, not taught here" table at the bottom is the complete list, and every
row points somewhere you can actually look it up.

## Notation

Symbols in first-appearance order. **Read the collisions section at the end of
this block before trusting any single letter** — this course reuses more glyphs
than any other in the library, because it inherited them from mineralogy,
hydrology, seismology and soil mechanics separately.

| Symbol | Means | First used |
|---|---|---|
| $b$ | **bridging oxygens** per silica tetrahedron, $0 \le b \le 4$ — the one number that organizes mineralogy | [1.1](lessons/01-01-what-a-mineral-is.md) |
| $\mathrm{CN}$, $r/R$ | coordination number; cation-to-oxygen radius ratio that predicts it | [1.1](lessons/01-01-what-a-mineral-is.md) |
| $z$ (charge) | charge per tetrahedron, $z = b - 4$ — **not** the depth $z$ used everywhere later | [1.1](lessons/01-01-what-a-mineral-is.md) |
| $\mathrm{An}$ | anorthite fraction of a plagioclase, $\text{Ca}/(\text{Ca}+\text{Na})$ — a crystallization thermometer | [1.1](lessons/01-01-what-a-mineral-is.md) |
| $\theta$, $\phi$ (cleavage) | angle between the two cleavage traces of a chain silicate | [1.1](lessons/01-01-what-a-mineral-is.md) · [1.2](lessons/01-02-identifying-minerals.md) |
| $H$ | Mohs hardness — an **ordinal rank**, never a measurement | [1.2](lessons/01-02-identifying-minerals.md) |
| $G$ | specific gravity, $\rho_s/\rho_w$ | [1.2](lessons/01-02-identifying-minerals.md) |
| $W_a$, $W_s$ | weight in air (dry) and weight suspended in water | [1.2](lessons/01-02-identifying-minerals.md) |
| $r$, $a$, $b$, $\beta$ (cell) | chain-column aspect ratio $b/(a\sin\beta)$ and the monoclinic cell edges and angle — here $a$ and $b$ are **unit-cell edges**, not half-width and bridging count | [1.2](lessons/01-02-identifying-minerals.md) |
| $T_s$, $T_l$ | solidus (first melt appears) and liquidus (last crystal disappears) | [1.3](lessons/01-03-how-the-earth-melts.md) |
| $T_a$, $T_p$ | mantle adiabat; **potential temperature** — the adiabat extrapolated to the surface | [1.3](lessons/01-03-how-the-earth-melts.md) |
| $F$ | melt fraction — liquid mass over total mass | [1.3](lessons/01-03-how-the-earth-melts.md) |
| $C_0$, $C_L$, $C_S$ | concentration of a component in the source, the liquid, the residual solid | [1.3](lessons/01-03-how-the-earth-melts.md) |
| $\kappa$ | thermal diffusivity of rock, $\approx 10^{-6}\ \text{m}^2/\text{s}$ (written $\alpha$ in heat-transfer) | [1.4](lessons/01-04-igneous-rocks-and-bodies.md) |
| $a$ (body) | **half**-width of an igneous body — always half, never the full thickness | [1.4](lessons/01-04-igneous-rocks-and-bodies.md) |
| $\delta$ | thermal penetration depth into wall rock, i.e. the aureole width | [1.4](lessons/01-04-igneous-rocks-and-bodies.md) |
| $\phi$ (grain size) | the **phi scale**, $-\log_2(d/1\ \text{mm})$ — coarse grains are negative | [1.5](lessons/01-05-sedimentary-rocks.md) |
| $\sigma_\phi$ | standard deviation of the grain-size distribution in phi units — **sorting** | [1.5](lessons/01-05-sedimentary-rocks.md) |
| $\phi_p$ | **porosity**, void fraction (subscripted precisely to escape the phi scale) | [1.5](lessons/01-05-sedimentary-rocks.md) |
| $k$ | intrinsic permeability, $\text{m}^2$ or darcy — a property of the rock alone | [1.5](lessons/01-05-sedimentary-rocks.md) |
| $c$ | Athy compaction coefficient, $\text{km}^{-1}$ | [1.5](lessons/01-05-sedimentary-rocks.md) |
| $P$ | **confining (lithostatic) pressure** — isotropic; never the directed stress that makes foliation | [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md) |
| $z$ (depth) | depth below the surface, km — the meaning $z$ carries from 1.5 onward | [1.5](lessons/01-05-sedimentary-rocks.md) · [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md) |
| $dT/dz$ | geothermal gradient, °C/km | [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md) |
| $\Delta S$, $\Delta V$ | entropy and molar-volume change across a metamorphic reaction; their ratio is the Clapeyron slope | [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md) |
| $u$ | spreading rate — **half-rate in 1.1–2.1, full rate in 2.2's area budget** (2.2 writes the half-rate $v_{1/2}$) | [2.1](lessons/02-01-evidence-for-drift.md) · [2.2](lessons/02-02-plate-boundaries.md) |
| $\tau$ | shear stress on a plane; $\tau_{\text{rock}}$ is the shear *strength* of lithosphere ($\sim 10^{8}$ Pa) | [2.1](lessons/02-01-evidence-for-drift.md) · [2.4](lessons/02-04-how-rock-deforms.md) |
| $d(t)$, $h_{\text{lith}}$ | seafloor depth and lithospheric thickness, both $\propto \sqrt{\text{age}}$ | [2.2](lessons/02-02-plate-boundaries.md) |
| $\delta$ (dip) | slab dip — **not** the aureole width $\delta$ of 1.4 | [2.2](lessons/02-02-plate-boundaries.md) |
| $L$ | trench-to-arc distance, *or* boundary length, *or* lithospheric thickness, *or* thrust-sheet length — **the module's worst symbol** | [2.2](lessons/02-02-plate-boundaries.md) · [2.3](lessons/02-03-driving-mechanism.md) · [2.4](lessons/02-04-how-rock-deforms.md) |
| $T_h = T/T_m$ | homologous temperature — how close a solid is to melting; the real control on creep | [2.3](lessons/02-03-driving-mechanism.md) |
| $Ra$, $Re$ | Rayleigh number (does it convect?) and Reynolds number (is there inertia? — in the mantle, no) | [2.3](lessons/02-03-driving-mechanism.md) |
| $F_{SP}$, $F_{RP}$ | slab pull and ridge push, both **per metre of plate boundary** | [2.3](lessons/02-03-driving-mechanism.md) |
| $\alpha$ | coefficient of thermal expansion, $3\times10^{-5}\ \text{K}^{-1}$ | [2.3](lessons/02-03-driving-mechanism.md) |
| $\sigma_1 \ge \sigma_2 \ge \sigma_3$ | principal stresses — **compression positive in geology**, the reverse of every engineering course | [2.4](lessons/02-04-how-rock-deforms.md) |
| $\sigma_d$ | differential stress $\sigma_1 - \sigma_3$ — the only part that changes shape | [2.4](lessons/02-04-how-rock-deforms.md) |
| $\sigma_v$, $\sigma_n$ | vertical (lithostatic) stress; normal stress across a plane | [2.4](lessons/02-04-how-rock-deforms.md) |
| $C$, $\mu_i$ | cohesion (10–50 MPa intact, $\approx 0$ on an old fault); coefficient of internal friction, 0.6–0.85 | [2.4](lessons/02-04-how-rock-deforms.md) |
| $P_f$, $\lambda$ | pore fluid pressure; pore pressure ratio $P_f/\sigma_v$, hydrostatic baseline **0.37** | [2.4](lessons/02-04-how-rock-deforms.md) |
| $e$, $\gamma$, $\dot e$ | elongation, shear strain, strain rate (written $\dot\varepsilon$ in 2.3) | [2.4](lessons/02-04-how-rock-deforms.md) |
| $\delta$ (dip), $\delta_{\text{app}}$ | true dip of a plane; the shallower **apparent dip** seen in an oblique section | [2.5](lessons/02-05-folds-faults-structures.md) |
| $\varphi$ | friction angle, $\mu_i = \tan\varphi$ — written $\phi$ in [2.7](lessons/02-07-earthquakes-seismic-hazard.md) and [3.2](lessons/03-02-mass-wasting-slope-stability.md) | [2.5](lessons/02-05-folds-faults-structures.md) |
| $s$ | net slip on a fault; throw $= s\sin\delta$, heave $= s\cos\delta$ | [2.5](lessons/02-05-folds-faults-structures.md) |
| $h$ (elevation), $r$, $T_0$, $T$ | mountain elevation; crustal root; reference crustal thickness (35 km); total crustal thickness | [2.6](lessons/02-06-mountain-building.md) |
| $\Delta e$, $\Delta h$ | thickness of rock **eroded**; the resulting drop in summit elevation — these differ by a factor of 6.6 | [2.6](lessons/02-06-mountain-building.md) |
| $M_0$, $M_w$, $M_L$ | seismic moment (N·m); moment magnitude (no ceiling); Richter local magnitude (**saturates near 7**) | [2.7](lessons/02-07-earthquakes-seismic-hazard.md) |
| $\mu$ (modulus) | shear modulus, $\approx 3\times10^{10}$ Pa — **not** the friction coefficient $\mu_i$ of 2.4/2.5 | [2.7](lessons/02-07-earthquakes-seismic-hazard.md) |
| $A$, $\bar d$ | ruptured fault area and average slip — but $A$ is also wave *amplitude* in the site-amplification ratio, in the same lesson | [2.7](lessons/02-07-earthquakes-seismic-hazard.md) |
| $T$ (interval) | **recurrence interval** $T \approx d/v$; and, three formulas later, the **resonant period** $4H/V_s$ | [2.7](lessons/02-07-earthquakes-seismic-hazard.md) |
| $Z = \rho V_s$ | seismic impedance — density times shear-wave speed; its contrast sets site amplification | [2.7](lessons/02-07-earthquakes-seismic-hazard.md) |
| $\sigma'$, $u$ | effective normal stress $\sigma - u$ on a granular contact; pore-water pressure (Terzaghi again, in soil notation) | [2.7](lessons/02-07-earthquakes-seismic-hazard.md) |
| $\eta$ | melt dynamic viscosity, Pa·s — spans ten orders of magnitude across magma types | [2.8](lessons/02-08-volcanoes-volcanic-hazards.md) |
| $\phi$ (gas) | gas **volume fraction** of an ascending magma; fragmentation at $\phi \approx 0.75$–0.80 | [2.8](lessons/02-08-volcanoes-volcanic-hazards.md) |
| $C_{\text{sat}}$, $\tau_0$ | water content at saturation, $\approx 0.41\sqrt{P}$ wt % with $P$ in MPa; lava yield strength | [2.8](lessons/02-08-volcanoes-volcanic-hazards.md) |
| $\mathrm{SSA}$ | specific surface area, $6/\rho d$ — the reason grain size dominates weathering rate | [3.1](lessons/03-01-weathering-soils.md) |
| $E_a$ | activation energy, $\approx 60$ kJ/mol for silicate hydrolysis (Arrhenius) | [3.1](lessons/03-01-weathering-soils.md) |
| $F$ | **factor of safety** — resisting stress over driving stress; $F = 1$ *is* failure | [3.2](lessons/03-02-mass-wasting-slope-stability.md) |
| $\beta$, $\beta_c$ | slope angle, and the critical angle at which $F = 1$ | [3.2](lessons/03-02-mass-wasting-slope-stability.md) |
| $\phi$ (friction) | **friction angle**, $\tan\phi = \mu_i$, typically 30–40° — the same letter as 1.5's grain-size scale | [3.2](lessons/03-02-mass-wasting-slope-stability.md) |
| $c$, $c_r$, $c_{\text{app}}$ | cohesion; **root** cohesion (1–10 kPa); apparent cohesion from meniscus suction | [3.2](lessons/03-02-mass-wasting-slope-stability.md) |
| $u$ | **pore pressure** in 3.2; **shear velocity** $u_*$ in 3.3; isostatic rebound in 3.3's flashback | [3.2](lessons/03-02-mass-wasting-slope-stability.md) · [3.3](lessons/03-03-rivers-landscape-evolution.md) |
| $m$ | water-table height as a fraction of slab thickness, $0 \le m \le 1$ | [3.2](lessons/03-02-mass-wasting-slope-stability.md) |
| $k_h$ | horizontal seismic coefficient, in units of $g$ (pseudo-static analysis) | [3.2](lessons/03-02-mass-wasting-slope-stability.md) |
| $Q$, $R$, $P$, $n$ | discharge; **hydraulic radius** $A/P$; wetted perimeter; **Manning's roughness** — and $P$ and $n$ are reused as probability and number of years in the flood formula on the same page | [3.3](lessons/03-03-rivers-landscape-evolution.md) |
| $\tau_0$, $\tau^*$ | bed shear stress $\rho g h S$; the dimensionless Shields parameter | [3.3](lessons/03-03-rivers-landscape-evolution.md) |
| $\delta_v$, $u_*$ | viscous sublayer thickness ($\approx 5\nu/u_*$, tens of microns); shear velocity $\sqrt{\tau_0/\rho}$ | [3.3](lessons/03-03-rivers-landscape-evolution.md) |
| $w_s$ | settling velocity; $\propto d^2$ by Stokes below about 0.1 mm, $\propto \sqrt{d}$ above | [3.3](lessons/03-03-rivers-landscape-evolution.md) |
| $T$ (flood) | **flood recurrence interval in years** — not temperature, and not 2.7's earthquake $T$ either | [3.3](lessons/03-03-rivers-landscape-evolution.md) |
| $b$ (balance), $B$ | specific net balance at a point (m water equivalent per year); glacier-wide net balance | [3.4](lessons/03-04-glaciers-ice-ages.md) |
| ELA | equilibrium line altitude — where accumulation and ablation exactly balance | [3.4](lessons/03-04-glaciers-ice-ages.md) |
| $H$, $\alpha$ | ice thickness; **ice-surface** slope (not the bed slope) | [3.4](lessons/03-04-glaciers-ice-ages.md) |
| $\tau_r$, $\tau_b$, $\tau$ | glacier response time; basal shear stress; and plain shear stress in Glen's law — **three $\tau$ in one lesson**, plus the mantle relaxation time | [3.4](lessons/03-04-glaciers-ice-ages.md) |
| $u_{*t}$, $z_0$, $\kappa$ | threshold friction velocity for grain motion; aerodynamic roughness length ($\approx 1$ mm); von Kármán constant 0.4 | [3.5](lessons/03-05-deserts-wind-coasts.md) |
| $Q$ (drift), $h_c$ | longshore sediment flux, $10^4$–$10^6\ \text{m}^3/\text{yr}$; active profile height (berm crest to depth of closure), 6–10 m | [3.5](lessons/03-05-deserts-wind-coasts.md) |
| RSL | relative sea level = eustatic change minus land motion | [3.5](lessons/03-05-deserts-wind-coasts.md) |
| $n$ (porosity) | **total porosity** — hydrogeologists write $n$ where [1.5](lessons/01-05-sedimentary-rocks.md) wrote $\phi_p$; same quantity | [3.6](lessons/03-06-groundwater-aquifers-karst.md) |
| $n_e$, $S_y$, $S_r$, $S$ | effective (flowing) porosity; specific yield; specific retention; storage coefficient | [3.6](lessons/03-06-groundwater-aquifers-karst.md) |
| $h$ (head) | **hydraulic head**, $z + p/\rho_w g$ — the water level in a piezometer, and the thing water actually flows down | [3.6](lessons/03-06-groundwater-aquifers-karst.md) |
| $K$, $k$ | hydraulic conductivity (m/day, rock **and** fluid) versus intrinsic permeability (m², rock alone) | [3.6](lessons/03-06-groundwater-aquifers-karst.md) |
| $Q$, $q$, $v$ | discharge (m³/day); **Darcy flux** $Q/A$ (velocity units, *not* a velocity); linear pore velocity $q/n_e$ | [3.6](lessons/03-06-groundwater-aquifers-karst.md) |
| $i$ | hydraulic gradient $-dh/dl$, dimensionless, typically of order $10^{-3}$ | [3.6](lessons/03-06-groundwater-aquifers-karst.md) |
| Ma / Ga / Myr / kyr | mega-annum and giga-annum are **dates** before present; Myr and kyr are **durations**. Keeping these apart prevents most of the sloppiness in Module 4 | [4.1](lessons/04-01-relative-dating-unconformities.md) |
| $f$, $R_s$ | stratigraphic completeness $H/(R_s T)$; **short-term** accumulation rate | [4.1](lessons/04-01-relative-dating-unconformities.md) |
| $\lambda$ | **decay constant** — probability per atom per unit time; $\lambda = \ln 2/t_{1/2}$ | [4.2](lessons/04-02-radiometric-dating.md) |
| $N$, $P$, $D$, $D^*$, $D_0$, $D_s$ | surviving parent (called $P$ in the isochron section); total daughter; **radiogenic** daughter; **initial** daughter; a stable non-radiogenic isotope of the daughter element | [4.2](lessons/04-02-radiometric-dating.md) |
| $T_c$ | **closure temperature** — above it the daughter diffuses out faster than decay makes it | [4.2](lessons/04-02-radiometric-dating.md) |
| $m$, $b$ (isochron) | isochron slope $e^{\lambda t}-1$; intercept, the initial daughter ratio | [4.2](lessons/04-02-radiometric-dating.md) |
| MSWD | goodness-of-fit of an isochron against analytical uncertainty; fails it and it is an **errorchron**, from which no age may be reported | [4.2](lessons/04-02-radiometric-dating.md) |
| FAD, LAD | first and last appearance datum — a taxon's lowest and highest occurrence | [4.3](lessons/04-03-geologic-timescale.md) |
| GSSP, GSSA | the golden spike (a marked point in a designated bed); and a Precambrian boundary defined by an arbitrary round number instead | [4.3](lessons/04-03-geologic-timescale.md) |
| $\sigma$ (subsidence), $\varepsilon$, $R$ | tectonic subsidence rate; **eustatic** sea-level rise rate; sediment accumulation rate — the three terms of the accommodation balance, and none of them is a stress or a strain here | [4.4](lessons/04-04-stratigraphy-facies-correlation.md) |
| $d$ (depth), $S$ | water depth; **shelf gradient**, order $10^{-4}$ to $10^{-3}$ — the amplifier that turns mm/yr into m/yr | [4.4](lessons/04-04-stratigraphy-facies-correlation.md) |
| $t$ (thickness), $w$ | **true stratigraphic thickness**; outcrop band width on the map — the one place in the course where $t$ is not a time | [4.5](lessons/04-05-reading-a-geologic-map.md) |
| $\Delta$, $D$, $s$ | downstream displacement of an outcrop trace at a valley; valley depth below the interfluve; **stream gradient** | [4.5](lessons/04-05-reading-a-geologic-map.md) |
| $\Delta z$, $d$ (map) | elevation difference between two structure contours; the perpendicular map distance between them — their ratio is $\tan\delta$ | [4.5](lessons/04-05-reading-a-geologic-map.md) |
| $V_p$, $V_s$ | P- and S-wave speed; $V_s = 0$ **defines** a liquid | [5.1](lessons/05-01-earths-internal-structure.md) |
| $K$ (modulus), $\mu$ | bulk modulus and shear modulus — **not** hydraulic conductivity, not Omori's productivity constant, not the friction coefficient | [5.1](lessons/05-01-earths-internal-structure.md) |
| $C/MR^2$ | moment-of-inertia factor — one dimensionless number saying how centrally the mass is piled (0.4 uniform, **0.3307** for Earth) | [5.1](lessons/05-01-earths-internal-structure.md) |
| $\Delta$ (angle) | **epicentral angle** — the central angle from earthquake to station | [5.1](lessons/05-01-earths-internal-structure.md) |
| $\Delta^{33}\text{S}$ | mass-independent sulfur anomaly, $\delta^{33}\text{S} - 0.515\,\delta^{34}\text{S}$ — the most sensitive oxygen proxy there is | [5.2](lessons/05-02-earth-history-hadean-proterozoic.md) |
| PAL | present atmospheric level (of $\text{O}_2$) | [5.2](lessons/05-02-earth-history-hadean-proterozoic.md) |
| $\delta^{18}\text{O}$, $\delta^{13}\text{C}$ | per-mil deviation of an isotope ratio from a standard — a **palaeothermometer plus ice-volume gauge**, and a carbon-cycle tracer | [5.2](lessons/05-02-earth-history-hadean-proterozoic.md) · [5.3](lessons/05-03-earth-history-phanerozoic.md) |
| $\mathrm{CF}$ | concentration factor — ore grade over crustal abundance | [5.4](lessons/05-04-resources-geologic-hazards.md) |
| $g$ (grade), $r$ | ore grade as a fraction; metallurgical recovery — **$g$ is not gravity here** | [5.4](lessons/05-04-resources-geologic-hazards.md) |
| $T$ (return), $\lambda$ (rate) | return period in years; annual exceedance rate $1/T$ — **and 5.4 also uses $T$ for temperature, in the oil-window calculation on the same page** | [5.4](lessons/05-04-resources-geologic-hazards.md) |
| $E$, $V$ | exposure (value at risk) and vulnerability (mean damage ratio) — the two policy terms of risk | [5.4](lessons/05-04-resources-geologic-hazards.md) |

### Collisions worth flagging

Seven glyphs carry most of the danger. Read this before trusting a letter you
half-remember.

| Symbol | Meanings across the course | The one that catches people |
|---|---|---|
| $\phi$ | **phi grain-size scale** ([1.5](lessons/01-05-sedimentary-rocks.md)); **porosity** as $\phi_p$ ([1.5](lessons/01-05-sedimentary-rocks.md), written $n$ in [3.6](lessons/03-06-groundwater-aquifers-karst.md)); **cleavage angle** ([1.1](lessons/01-01-what-a-mineral-is.md), [1.2](lessons/01-02-identifying-minerals.md)); **friction angle** ([3.2](lessons/03-02-mass-wasting-slope-stability.md), [2.7](lessons/02-07-earthquakes-seismic-hazard.md); written $\varphi$ in [2.5](lessons/02-05-folds-faults-structures.md)); **gas volume fraction** ([2.8](lessons/02-08-volcanoes-volcanic-hazards.md)) | **porosity versus friction angle** — both live in slope and groundwater problems, and 3.2's $\phi$ is *always* the friction angle |
| $\rho$ | density everywhere — but **bare $\rho$ flips between the sediment slab in [3.2](lessons/03-02-mass-wasting-slope-stability.md) and the water in [3.3](lessons/03-03-rivers-landscape-evolution.md)**; units switch between g/cm³ and kg/m³ between lessons | put $\tau_0 = \rho g h S$ next to $F = (1 - m\rho_w/\rho)\tan\phi/\tan\beta$ and subscript both |
| $K$ | **hydraulic conductivity** ([3.6](lessons/03-06-groundwater-aquifers-karst.md)); **bulk modulus** ([5.1](lessons/05-01-earths-internal-structure.md)); Omori's **aftershock productivity** ([2.7](lessons/02-07-earthquakes-seismic-hazard.md)); and **K = Cretaceous** on a map legend ([4.5](lessons/04-05-reading-a-geologic-map.md)) | $K$ is a conductivity everywhere in Module 3 and a modulus in Module 5. Note also **$K$ vs $k$**: conductivity carries the fluid, permeability does not |
| $h$ | **hydraulic head** ([3.6](lessons/03-06-groundwater-aquifers-karst.md)); mountain **elevation** ([2.6](lessons/02-06-mountain-building.md)); water depth and lava-flow thickness ([2.7](lessons/02-07-earthquakes-seismic-hazard.md), [2.8](lessons/02-08-volcanoes-volcanic-hazards.md)); flow depth ([3.3](lessons/03-03-rivers-landscape-evolution.md)); structure-contour elevation and **fault throw** ([4.5](lessons/04-05-reading-a-geologic-map.md)) | head versus thickness — check which lesson you are in before writing $\rho g h$ |
| $T$ | **temperature** ([1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md), [2.3](lessons/02-03-driving-mechanism.md), [5.1](lessons/05-01-earths-internal-structure.md)); **crustal thickness** ([2.6](lessons/02-06-mountain-building.md)); **recurrence interval** ([2.7](lessons/02-07-earthquakes-seismic-hazard.md), [3.3](lessons/03-03-rivers-landscape-evolution.md), [5.4](lessons/05-04-resources-geologic-hazards.md)); **resonant period** ([2.7](lessons/02-07-earthquakes-seismic-hazard.md)); maximum seafloor age ([2.2](lessons/02-02-plate-boundaries.md)); a bracketed duration ([4.1](lessons/04-01-relative-dating-unconformities.md)) | [5.4](lessons/05-04-resources-geologic-hazards.md) uses $T$ for **both** return period and temperature, pages apart |
| $\lambda$ | **decay constant** ([4.2](lessons/04-02-radiometric-dating.md), [5.2](lessons/05-02-earth-history-hadean-proterozoic.md)); **pore pressure ratio** $P_f/\sigma_v$ ([2.4](lessons/02-04-how-rock-deforms.md)); **annual exceedance rate** ([5.4](lessons/05-04-resources-geologic-hazards.md)); tsunami wavelength ([2.7](lessons/02-07-earthquakes-seismic-hazard.md)) | pore pressure ratio is the odd one — it is dimensionless and lives only in [2.4](lessons/02-04-how-rock-deforms.md) |
| $\sigma$ | **principal stress** ([2.4](lessons/02-04-how-rock-deforms.md), [2.5](lessons/02-05-folds-faults-structures.md), [4.5](lessons/04-05-reading-a-geologic-map.md)); **sorting** as $\sigma_\phi$ ([1.5](lessons/01-05-sedimentary-rocks.md)); **tectonic subsidence rate** ([4.4](lessons/04-04-stratigraphy-facies-correlation.md)); surface tension $\sigma_s$ ([3.2](lessons/03-02-mass-wasting-slope-stability.md)); an uncertainty ([4.3](lessons/04-03-geologic-timescale.md)) | 4.4's subsidence $\sigma$ is not a stress, and its $\varepsilon$ is not a strain |

Three more worth a glance: **$t$ is time everywhere except
[4.5](lessons/04-05-reading-a-geologic-map.md), where it is true stratigraphic
thickness**; **$u$** is pore pressure in [3.2](lessons/03-02-mass-wasting-slope-stability.md),
shear velocity ($u_*$) in [3.3](lessons/03-03-rivers-landscape-evolution.md), and
isostatic rebound in that lesson's flashback; and **$n$** is Manning's roughness,
a count of years, a porosity, Glen's flow-law exponent, a creep exponent and a
number of moles, depending on the page.

Finally, two conventions that flip at course boundaries: **geology takes
compression positive** where materials-science and mechanics-of-materials take
tension positive; and **Ma/Ga are dates while Myr/kyr are durations** —
[4.1](lessons/04-01-relative-dating-unconformities.md) makes the point that
keeping these apart prevents most of the sloppiness in Module 4.

## Definitions

### Mineral

A naturally occurring, inorganic, crystalline solid with a definite composition
and an ordered internal structure — and only the last clause does real work.
Diamond and graphite are one composition and two minerals; obsidian is
$\text{SiO}_2$ with no order and therefore no mineral at all (a **mineraloid**).
"Definite composition" means a definite *structure* with a range of allowed
occupants, not a fixed formula.

*Introduced:* [1.1](lessons/01-01-what-a-mineral-is.md)

### Silica tetrahedron

The building block of the crust: one $\text{Si}^{4+}$ in four-fold coordination
with four oxygens, carrying four units of unsatisfied charge, so it must either
grab cations or bond to another tetrahedron.

$$\text{SiO}_4^{4-}: \quad (+4) + 4(-2) = -4$$

*Introduced:* [1.1](lessons/01-01-what-a-mineral-is.md)

### Polymerization

How many corner oxygens each tetrahedron shares with a neighbour. One number,
$b$, fixes the formula, the charge, the density, the cleavage habit, the melting
order and the weathering order simultaneously.

$$\frac{n_{\mathrm{O}}}{n_{\mathrm{Si}}} = 4 - \frac{b}{2}, \qquad z = b - 4$$

*Introduced:* [1.1](lessons/01-01-what-a-mineral-is.md)

### Cleavage

The plane along which bonds are weakest — a map of bond geometry, not a way of
cutting. A cleavage never breaks a bridging Si–O bond; it threads between the
polymerized units and snaps only the weaker cation–oxygen bonds. **Fracture** is
breakage that ignores the structure (conchoidal, fibrous, irregular). Cleavage
and hardness are independent: diamond has four perfect cleavages.

*Introduced:* [1.1](lessons/01-01-what-a-mineral-is.md) · [1.2](lessons/01-02-identifying-minerals.md)

### Goldschmidt's rules

One ion substitutes freely for another when their radii differ by less than about
15 percent and their charges match. A charge mismatch can still be paid for by a
**coupled substitution** elsewhere in the structure:

$$\text{Na}^+ + \text{Si}^{4+} \rightleftharpoons \text{Ca}^{2+} + \text{Al}^{3+}$$

Mg/Fe (8 percent apart) give complete solid solution in olivine; Na/K (28 percent
apart) do not, which is why alkali feldspar unmixes into **perthite** on cooling
and why plagioclase and orthoclase are two minerals rather than a series.

*Introduced:* [1.1](lessons/01-01-what-a-mineral-is.md)

### Streak

The colour of a mineral's powder. Grinding cuts the light path from centimetres
to about $10\ \mu\text{m}$, three orders of magnitude, so only a strongly
absorbing mineral still shows colour — everything else streaks white. A white
streak is a datum, not a failure.

*Introduced:* [1.2](lessons/01-02-identifying-minerals.md)

### Idiochromatic vs allochromatic

Colour from an essential constituent (malachite green because it is a copper
carbonate) is reliable; colour from a trace substitution into a colourless host
(amethyst, rose, smoky — all quartz) is nearly meaningless. This is why colour is
run last and treated as a hint.

*Introduced:* [1.2](lessons/01-02-identifying-minerals.md)

### Solidus and liquidus

The **solidus** $T_s(P)$ is where the first drop of melt appears on heating; the
**liquidus** $T_l(P)$ is where the last crystal disappears. A rock does not have
a melting point, it has a melting interval, and nearly every natural magma is
drawn from between the two and erupted as crystal-bearing mush.

*Introduced:* [1.3](lessons/01-03-how-the-earth-melts.md)

### Partial melting

Rock is a mixture, so the first liquid out is not a small sample of the source —
it is systematically enriched in the low-melting components. **Partial melt is
always more silica-rich than the rock it came from**, and the smaller the melt
fraction, the more extreme the melt. Four billion years of this distilled a
granite crust out of a peridotite planet.

*Introduced:* [1.3](lessons/01-03-how-the-earth-melts.md)

### The three routes to magma

Melting is hard because both the geotherm and the solidus rise with depth and the
solidus rises ten times faster. Each route closes the gap by moving a different
variable: **decompression** moves the rock (ridges, hotspots — the largest
producer, and the rock melts while getting *colder*); **flux melting** moves the
solidus by adding water (subduction zones only); **heat transfer** moves the
temperature by injecting hot magma into cooler crust (aureoles, continental
granites).

*Introduced:* [1.3](lessons/01-03-how-the-earth-melts.md)

### Bowen's reaction series

The order minerals crystallize from a cooling melt — and, read down the structure
column, **exactly the polymerization series of 1.1**. The discontinuous branch
(olivine → pyroxene → amphibole → biotite) is discontinuous because each mineral
literally reacts with the melt to make the next; the continuous branch
(Ca-plagioclase → Na-plagioclase) is continuous because plagioclase is a solid
solution. Predictive consequence: **olivine and quartz do not coexist in an
equilibrium igneous rock.**

*Introduced:* [1.3](lessons/01-03-how-the-earth-melts.md); reversed as the
[Goldich series](#goldich-stability-series) in [3.1](lessons/03-01-weathering-soils.md)

### Fractional crystallization

Early crystals removed from contact with the melt cannot run the reactions, so
the residual liquid is driven relentlessly toward silica- and alkali-rich
compositions: basalt → andesite → rhyolite. Field evidence: cumulate layering,
and **normally zoned plagioclase** (Ca-rich core, Na-rich rim).

*Introduced:* [1.3](lessons/01-03-how-the-earth-melts.md)

### Colour index

The volume percent of dark ferromagnesian minerals in a rock — a field proxy for
silica content with no chemistry required. It fails on glass and froth, which
have no minerals to count: obsidian is black at 72 percent silica and pumice is
white at the same composition.

*Introduced:* [1.4](lessons/01-04-igneous-rocks-and-bodies.md)

### Texture as a cooling rate

Grain size measures growth achieved per nucleus, so it records **cooling rate,
not depth**. Aphanitic means fast, not necessarily extrusive — the chilled margin
of a dike a kilometre down is as fine as a lava flow. A **porphyritic** rock
records two cooling rates in that order, hence magma that moved.

*Introduced:* [1.4](lessons/01-04-igneous-rocks-and-bodies.md)

### Contact aureole

The baked, recrystallized halo around an intrusion. Because
$t \sim a^2/\kappa$ and $\delta \sim \sqrt{\kappa t}$, the two combine to give
$\delta \sim a$: **aureole width scales with the intrusion's half-width, not with
its temperature** — there is only one length in the problem.

*Introduced:* [1.4](lessons/01-04-igneous-rocks-and-bodies.md); as a facies,
[1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Sill vs buried lava flow

The one field question that decides whether a sheet's radiometric age dates the
enclosing sediments or merely puts a ceiling on them. **Only a sill can bake the
rock above it** — a flow has a baked base, a vesicular and weathered top, and
clasts of itself in the bed above.

*Introduced:* [1.4](lessons/01-04-igneous-rocks-and-bodies.md)

### Sorting and rounding

Two independent axes with different clocks. **Sorting** ($\sigma_\phi$) records
whether transport had *time to discriminate* by size; **rounding** records
abrasion. Poorly sorted does not mean high energy — glacial till is the least
sorted sediment on Earth and moves at metres per year.

*Introduced:* [1.5](lessons/01-05-sedimentary-rocks.md)

### Textural vs compositional maturity

Textural maturity (well sorted, well rounded, little matrix) records transport
energy and duration; compositional maturity (high quartz, no feldspar) records
chemical destruction of unstable minerals, hence climate and time. A quartz
arenite is mature on both axes; an **arkose** (over 25 percent feldspar) is
first-cycle from a granite source.

*Introduced:* [1.5](lessons/01-05-sedimentary-rocks.md)

### Porosity vs permeability

Porosity says how much fluid a rock **holds**; permeability says whether it will
**give it up**. Mud has the higher porosity and about a millionth of the
permeability — the single most consequential distinction in [3.6](lessons/03-06-groundwater-aquifers-karst.md).

*Introduced:* [1.5](lessons/01-05-sedimentary-rocks.md)

### Way-up indicator

A structure internal to a bed that records stratigraphic up independently of the
bed's present orientation — so it **rotates with the bed**, which is the entire
point of it. Graded bedding, cross-bed truncation, mud-crack taper, sole marks,
geopetal fill. Superposition without a way-up indicator reads an overturned limb
exactly backwards.

*Introduced:* [1.5](lessons/01-05-sedimentary-rocks.md); used in [4.1](lessons/04-01-relative-dating-unconformities.md)

### Metamorphism

A rock changing which minerals it is made of, **in the solid state, without ever
melting**. Below roughly 150–200 °C it is diagenesis; once melt appears it is a
**migmatite** and the rock has re-entered the igneous world.

*Introduced:* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Confining pressure vs directed stress

Confining pressure is equal from all sides: it changes volume and mineral
stability and produces **no fabric**. Only directed stress makes foliation, which
is why a deeply buried but undeformed sandstone becomes a massive quartzite
rather than a striped one.

*Introduced:* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Metamorphic grade and index minerals

Grade is essentially **peak temperature**. An index mineral appears when a
specific reaction runs in an aluminous protolith, so the sequence
chlorite → biotite → garnet → staurolite → kyanite → sillimanite is a
thermometer; an **isograd** is the mapped line where one first appears, i.e. a
contour of an ancient thermal structure. A quartzite has no aluminium, no
available reactions, and therefore records nothing about grade.

*Introduced:* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Metamorphic facies

A *field in P–T space*, named for the assemblage a basaltic protolith develops
there. Facies is the honest unit because it separates the two axes: **blueschist
is high-pressure and low-grade**, which is the whole reason the diagram is
two-dimensional and the reason glaucophane is the diagnostic of a fossil
subduction zone.

*Introduced:* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Thermobarometry

Crossing a pressure-blind curve with a temperature-blind one to fix peak
conditions. **Exchange reactions** (Fe–Mg swapping, $\Delta V \approx 0$) are
near-vertical in P–T and act as thermometers; **net-transfer reactions** (large
$\Delta V$) are near-horizontal and act as barometers.

*Introduced:* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Retrogression

Prograde metamorphic reactions are dehydration reactions and the water leaves, so
on the way back down there is no fluid to run them backwards. **A rock records
its hottest moment because it dried itself out getting there** — and retrogression
appears exactly where fluid re-entered, along fractures and shear zones.

*Introduced:* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Drift versus plate tectonics

Not the same theory, and the correction is not a detail. Wegener's continents
**ploughed through** a static seafloor, which is quantitatively impossible — the
available driving force falls short of the required force by a factor of a few
thousand. In plate tectonics **the seafloor is the moving thing** and continents
are passengers embedded in plates. Wegener had the reconstruction right, the
mechanism wrong, and the rate wrong by about a thousandfold.

*Introduced:* [2.1](lessons/02-01-evidence-for-drift.md)

### Magnetic stripes

Not bands of different rock — the same basalt throughout. What alternates is the
direction of the remanent magnetization frozen in below the Curie temperature:
where it parallels today's field it **adds** to the measured total, where it
opposes it **subtracts**. The stripes are anomalies in a measurement.
**Symmetry about the axis is the observation with no fixist escape**; widths
alone are soft.

*Introduced:* [2.1](lessons/02-01-evidence-for-drift.md)

### Apparent polar wander

Each continent's palaeomagnetic poles trace a path. The paths differ between
continents and converge when the continents are reassembled — which proves the
**continents** moved, not the pole.

*Introduced:* [2.1](lessons/02-01-evidence-for-drift.md)

### Transform fault vs fracture zone

**The most common error in the subject.** Only the segment *between the two
offset ridge crests* is a plate boundary; beyond the crests both sides belong to
the same plate, move identically, and are aseismic — that inactive scar is the
**fracture zone**. And the slip sense is **opposite to the apparent offset**: a
left-lateral-looking ridge offset is joined by a right-lateral transform.

*Introduced:* [2.2](lessons/02-02-plate-boundaries.md)

### Why the ocean plate is the one that subducts

Not strength, not being pushed under — **density**. Oceanic lithosphere becomes
negatively buoyant after 20–30 Ma and sinks under its own weight. Continental
crust at $2.7\ \text{g/cm}^3$ cannot be forced down at all, which is why
collision replaces subduction the moment the ocean between two continents runs
out.

*Introduced:* [2.2](lessons/02-02-plate-boundaries.md)

### Deep earthquakes

Below about 50 km, confining pressure makes ordinary frictional sliding
impossible, so deep events need a different mechanism: **dehydration
embrittlement** to about 300 km (a mineral releases water, pore pressure spikes,
effective stress collapses) and **transformational faulting** below (metastable
olivine → spinel in a runaway shear band). Both need cold metastable slab —
which is exactly why nothing is deeper than 670 km and why the deepest events are
in the oldest, coldest slabs.

*Introduced:* [2.2](lessons/02-02-plate-boundaries.md)

### The ridge is high because it is hot

Thermal expansion, not magma inflation. Depth follows $\sqrt{\text{age}}$ with no
reference to magma supply — which is also why the ridge is one continuous global
feature rather than a chain of edifices.

*Introduced:* [2.2](lessons/02-02-plate-boundaries.md)

### Lithosphere and asthenosphere

The **mechanical** layering, and the one that matters for plate motion: a strong
cold lid over a layer 3–5 orders of magnitude less viscous. The asthenosphere is
solid peridotite with under 1 percent melt; it is weak because
$T_h = T/T_m \approx 0.87$, not because it is liquid. A plate is *lithosphere* —
crust plus about 90 km of cold mantle — so **the Moho sits inside the plate** and
is irrelevant to plate dynamics.

*Introduced:* [2.3](lessons/02-03-driving-mechanism.md)

### Slab pull and ridge push

**Slab pull** is the weight of the cold dense slab, about 12 times larger, and it
is what sets a plate's speed: plates with long subducting edges move at 6–9 cm/yr
regardless of size, plates without them at 1–2. **Ridge push** is badly named —
it is gravitational sliding of the elevated, thickened plate off a topographic
high, a body force computable from topography alone, and it does **not** grow
with spreading rate.

$$\text{A plate's speed is set by what is hanging off its leading edge, not by what is behind it or beneath it.}$$

*Introduced:* [2.3](lessons/02-03-driving-mechanism.md)

### The plate is the boundary layer

The reframing that dissolves the "conveyor belt" picture: the plate is not a
passenger riding a convection cell, it **is** the cold upper thermal boundary
layer of the cell, and the slab is the descending limb. At
$Re \sim 10^{-20}$ there is no inertia at all, so driving and resisting forces
sum to zero at every instant and plates would stop the moment the forces did.

*Introduced:* [2.3](lessons/02-03-driving-mechanism.md)

### Brittle, ductile and elastic

**Conditions, not rock types.** The same granite fractures at the surface and
flows into gneiss at 20 km. Elastic bends and springs back (a locked fault
storing a century of plate motion); brittle fractures, loses cohesion and
localizes onto a surface; ductile flows permanently by **solid-state creep** —
dislocation motion and recrystallization, with **no melt present**.

*Introduced:* [2.4](lessons/02-04-how-rock-deforms.md)

### Confining pressure does not crush

Confining pressure changes volume and *inhibits* fracture by holding cracks shut.
Only **differential stress** $\sigma_d = \sigma_1 - \sigma_3$ changes shape. This
is the same distinction as [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)'s
confining pressure versus directed stress, and it is the reason depth is the
master variable for how rock deforms.

*Introduced:* [2.4](lessons/02-04-how-rock-deforms.md)

### Effective stress

Pore fluid does **not lubricate** — the friction coefficient stays near 0.6 wet
or dry. It **unclamps**: fluid pressure pushes outward on every crack wall and
cancels part of the confining squeeze, so the same friction yields less
resistance.

$$\sigma_n^{\text{eff}} = \sigma_n - P_f \;\Longrightarrow\; \tau = C + \mu_i(\sigma_n - P_f)$$

This one line explains induced seismicity, décollements, and the
Hubbert–Rubey thrust paradox.

*Introduced:* [2.4](lessons/02-04-how-rock-deforms.md)

### Brittle–ductile transition

Frictional strength rises with depth; creep strength falls with depth
exponentially. Where the branches cross — about **10–15 km** in typical
continental crust — is the transition, and it is also the depth of **maximum**
crustal strength and of earthquake nucleation. The crust does not weaken steadily
downward; it strengthens to its middle and then collapses. The brittle thickness
above it, the **seismogenic layer**, caps the maximum earthquake magnitude.

*Introduced:* [2.4](lessons/02-04-how-rock-deforms.md)

### Strike and dip

**Strike** is the compass bearing of the horizontal line lying in a tilted plane;
**dip** is the steepest angle that plane makes with horizontal, measured
perpendicular to strike. Strike alone is ambiguous by $180^\circ$, so a dip
direction must always be supplied — either by the right-hand rule (quote strike
so the dip lies $90^\circ$ clockwise: `307/27`) or by quadrant (`N53W, 27 NE`).

*Introduced:* [2.5](lessons/02-05-folds-faults-structures.md)

### Apparent dip

The shallower dip a plane shows in any section not cut along its true dip
direction. A section drawn **along strike shows flat-lying beds no matter how
steeply they dip**.

$$\tan\delta_{\text{app}} = \tan\delta\,\cos\theta$$

*Introduced:* [2.5](lessons/02-05-folds-faults-structures.md)

### Anticline vs antiform

**"Anticline" means oldest rock in the core, not "arch."** "Antiform" means arch.
Overturn a syncline and you get an *antiformal syncline* — arched upward with the
youngest rock inside. Shape does not settle it; way-up indicators do. Nor does an
arch imply compression: a **rollover anticline** forms purely by extension in the
hanging wall of a listric normal fault.

*Introduced:* [2.5](lessons/02-05-folds-faults-structures.md)

### Anderson's rule

At the free surface one principal stress must be vertical, and **which one it is
names the fault type** — plus predicts its dip, because the fault forms at
$\theta = 45^\circ - \varphi/2$ from $\sigma_1$ and Byerlee gives
$\varphi \approx 31^\circ$–$40^\circ$. It applies to faults that *formed* in the
current stress field; reactivated inherited structures (low-angle normal, steep
reverse) are common and their existence is itself informative.

*Introduced:* [2.5](lessons/02-05-folds-faults-structures.md)

### Separation vs slip

**Separation is what you see; slip is what happened.** A pure strike-slip fault
cutting dipping beds produces apparent *vertical* separation on a map. Only
slickenlines or a **piercing point** — an offset linear feature — pins the true
slip.

*Introduced:* [2.5](lessons/02-05-folds-faults-structures.md)

### Isostasy

Below the depth of compensation, every vertical column of rock weighs the same
per unit area. **Isostasy builds nothing** — convergence and crustal thickening
make the mountain; isostasy only decides how the excess crust is split between
root and relief. Real lithosphere has flexural strength, so compensation is
*regional*: loads narrower than 50–100 km are held by plate stiffness with no
root at all, and some high ground is held by low-**density** mantle instead
(the Pratt mechanism).

*Introduced:* [2.6](lessons/02-06-mountain-building.md)

### Gravitational collapse

Crust cannot thicken without limit: past about 5 km of elevation the plateau
spreads under its own weight, so orogens routinely extend at the crest while
still shortening at the toe. Its hot, weak lower crust flows sideways by creep.

*Introduced:* [2.6](lessons/02-06-mountain-building.md)

### Terrane

A **fault-bounded crustal block whose geologic history does not join its
neighbours'** — alien stratigraphy, fossils and palaeomagnetic latitude. Over 100
are mapped between the Rockies and the Pacific, docked over the last 200 Myr.
*A terrane is not terrain.*

*Introduced:* [2.6](lessons/02-06-mountain-building.md)

### Elastic rebound

Strain accumulates elastically in the rock around a locked fault while the plates
keep moving; the earthquake is the moment friction loses and the rock snaps back.
Everything about earthquake recurrence follows from the fault being a spring that
is slowly wound and abruptly released.

*Introduced:* [2.7](lessons/02-07-earthquakes-seismic-hazard.md)

### Magnitude vs intensity

**Magnitude is a property of the source** — one number for the whole earthquake.
**Intensity is a property of a place** — one number per location, ordinal (MMI
I–XII), assigned from what was felt and what broke. "Magnitude 8, intensity VII
at my house" is the correct sentence.

*Introduced:* [2.7](lessons/02-07-earthquakes-seismic-hazard.md)

### Site amplification

The single most consequential control on damage at one address versus its
neighbour's. Soft, slow ground has low impedance $Z = \rho V_s$, and a wave
entering it grows by roughly $\sqrt{Z_{\text{rock}}/Z_{\text{soft}}}$ — a factor
of 5.7 for Mexico City's lake clay. Worse, the column has a **resonant period**
$T = 4H/V_s$, and buildings whose own period ($T \approx 0.1N$ for $N$ storeys)
matches it are the ones that fall. This is why hazard maps are drawn from
measured $V_s$ in the top 30 m (**microzonation**), not from distance.

*Introduced:* [2.7](lessons/02-07-earthquakes-seismic-hazard.md)

### Liquefaction

Shaking raises pore pressure in saturated sand until $\sigma' = \sigma - u \to 0$
and $\tau = \sigma'\tan\phi$ vanishes. It is **not** the ground opening: the
ground becomes a heavy fluid, so dense things sink and buoyant things — buried
tanks, manholes — rise.

*Introduced:* [2.7](lessons/02-07-earthquakes-seismic-hazard.md)

### Hazard vs risk

Hazard is a property of the Earth; risk is what it does to people.

$$\text{Risk} = \text{hazard} \times \text{exposure} \times \text{vulnerability}$$

Chile 2010 ($M_w\,8.8$) killed about 500; Haiti 2010 ($M_w\,7.0$, 500 times less
energy) killed of order $10^5$. The difference was entirely the second and third
terms.

*Introduced:* [2.7](lessons/02-07-earthquakes-seismic-hazard.md); reused in
[5.4](lessons/05-04-resources-geologic-hazards.md)

### Fragmentation

The explosion itself. Ascending magma exsolves gas as pressure falls; when the
bubbles occupy $\phi \approx 0.75$–0.80 of the volume the walls tear and the melt
inverts into a gas carrying glass shards. **Decompression during ordinary ascent
is sufficient — no external trigger is needed** — and because
$C_{\text{sat}} \propto \sqrt{P}$ the exsolution rate is highest where pressure is
lowest, so the eruption builds its own accelerant in the last few hundred metres.

*Introduced:* [2.8](lessons/02-08-volcanoes-volcanic-hazards.md)

### Why silica decides eruptive style

Silica polymerizes the melt, viscosity spans **ten orders of magnitude** across
the magma series, and a stiff melt cannot let its bubbles escape. Two
counter-intuitive consequences: the explosive magma is the **cooler** one
(rhyolite at 750–900 °C against basalt at 1100–1200 °C), and **degassing thickens
the melt** — losing water restores the Si–O–Si bridges water had cut, a positive
feedback toward fragmentation.

*Introduced:* [2.8](lessons/02-08-volcanoes-volcanic-hazards.md)

### Weathering vs erosion

Weathering is decomposition **in place**; erosion is transport away. They
compete: where erosion wins you get bare rock and thin soil on steep slopes;
where weathering wins you get tens of metres of **saprolite** under a flat
ancient surface.

*Introduced:* [3.1](lessons/03-01-weathering-soils.md)

### Goldich stability series

The empirical (1938) order of resistance to surface weathering, and it is
**Bowen's crystallization series read backwards, mineral for mineral** — quartz
outlasts Ca-plagioclase by a factor of $3\times10^{5}$. The mechanism is
[polymerization](#polymerization): olivine ($b=0$) is held together entirely by
hydrolysable cation–oxygen bonds and quartz ($b=4$) has none at all.

*Introduced:* [3.1](lessons/03-01-weathering-soils.md); crystallization order in
[1.3](lessons/01-03-how-the-earth-melts.md)

### Hydrolysis

The most important chemical reaction on Earth's surface: acid strips cations from
a silicate and leaves clay behind.

$$\text{CaAl}_2\text{Si}_2\text{O}_8 + 2\,\text{CO}_2 + 3\,\text{H}_2\text{O} \longrightarrow \text{Al}_2\text{Si}_2\text{O}_5(\text{OH})_4 + \text{Ca}^{2+} + 2\,\text{HCO}_3^-$$

**Al is essentially immobile and stays behind in the clay; Ca, Na, K and Mg are
soluble and go to the sea.** That asymmetry makes soil, makes clay, and makes the
long-term carbon sink.

*Introduced:* [3.1](lessons/03-01-weathering-soils.md)

### Residual enrichment

A mineral's percentage rises in a soil profile because **everything else left**,
not because anything accumulated. Always convert percentages to masses using a
conserved component (quartz, Zr, Ti) — the **immobile-element method** — before
drawing a conclusion.

*Introduced:* [3.1](lessons/03-01-weathering-soils.md)

### The silicate thermostat

Only *silicate* weathering is a net carbon sink — carbonate weathering returns
its $\text{CO}_2$ when the carbonate re-precipitates. The net (Urey) reaction
buries carbon, and warmth speeds it up:

$$\text{warmer} \rightarrow \text{faster silicate weathering} \rightarrow \text{more CO}_2\text{ buried} \rightarrow \text{cooler}$$

It is a real negative feedback and a very slow one:
$\tau \sim 4\times10^{4}\ \text{Gt C} / 0.2\ \text{Gt C yr}^{-1} \approx 2\times10^{5}$ years.

*Introduced:* [3.1](lessons/03-01-weathering-soils.md)

### Factor of safety

$F = \text{resisting}/\text{driving}$. $F>1$ is stable, $F<1$ is impossible — a
slope caught at $F<1$ is already moving — and **$F=1$ is the definition of
failure, not the safe limit**. Because $\phi$, $c$ and the design water table are
each uncertain by tens of percent, practice designs to $F = 1.3$–1.5.

*Introduced:* [3.2](lessons/03-02-mass-wasting-slope-stability.md)

### Angle of repose

The steepest stable angle of a loose dry pile — and by the infinite-slope result
it is exactly the **friction angle of the loose aggregate**, a few degrees below
the peak strength of the same material densely packed. That gap is why a slope
can sit stable at rest and then run out far once it starts moving. It is a
material property, independent of pile size.

*Introduced:* [3.2](lessons/03-02-mass-wasting-slope-stability.md)

### Why rain makes slopes fail

Not weight — in the cohesionless infinite slope $\rho$ cancels exactly, so added
water drives and resists in equal measure. Failure comes from the **pore-pressure
term**, which is why the deadly variable is the *water-table height*, not the
rainfall total, and why slides often happen hours to days after the rain stops,
as infiltration reaches the failure plane.

*Introduced:* [3.2](lessons/03-02-mass-wasting-slope-stability.md)

### Where the failure surface goes

Not where the material is weakest, but where $\tau/\tau_{\text{strength}}$ is
highest — usually a **contact** between two units (soil on bedrock, permeable on
impermeable), because that is where water perches and $u$ spikes.

*Introduced:* [3.2](lessons/03-02-mass-wasting-slope-stability.md)

### Competence vs capacity

**Competence** is the largest particle a flow can move (it tracks velocity and
bed shear stress); **capacity** is the total mass it can carry (it tracks
discharge). A muddy river with a vast total load may be unable to move a pebble;
a clear flash flood may roll boulders.

*Introduced:* [3.3](lessons/03-03-rivers-landscape-evolution.md)

### The clay anomaly

Below about 0.2 mm the erosion threshold **rises** as grains get finer, so **fine
sand is the easiest grain on Earth to move**. Two reasons: cohesion, which scales
as $1/d^2$ relative to weight (sand to clay is a $4\times10^4$ shift), and the
**viscous sublayer**, tens of microns thick, which buries clay platelets where no
eddy reaches them. And once up, clay essentially never settles — it takes 6.4
days to fall 2 m and travels 560 km doing it.

*Introduced:* [3.3](lessons/03-03-rivers-landscape-evolution.md)

### Knickpoint

An oversteepened reach that migrates headward — **a message from base level,
travelling upstream**. A waterfall is more often this than a fault. Niagara has
retreated 11 km in 12,300 years, about 0.9 m/yr. Behind the retreating knickpoint
the river incises its own floodplain and abandons it as a **terrace**: paired
terraces record an episode of incision, a flight of them records a sequence.

*Introduced:* [3.3](lessons/03-03-rivers-landscape-evolution.md)

### The downstream paradox

Mean velocity stays flat or *rises* downstream even as the gradient collapses,
because hydraulic radius and smoothness gain faster than slope loses. So if you
want to know where erosion is happening, look at $\tau_0 = \rho g h S$, not at
velocity. And a gorge is fast because it is **narrow**, not because it is steep.

*Introduced:* [3.3](lessons/03-03-rivers-landscape-evolution.md)

### Ice flow vs terminus position

**Two independent quantities, and confusing them is the standard error.** The ice
always moves toward the snout; the snout advances or retreats purely on the sign
of accumulation minus ablation. A retreating glacier still flows, still erodes,
still builds moraines.

*Introduced:* [3.4](lessons/03-04-glaciers-ice-ages.md)

### Warm-based vs cold-based

A glacier at the pressure-melting point at its bed **slides** and erodes hard; one
frozen to its bed barely does either. Pressure lowers the melting point by
0.074 K per MPa, so 1000 m of ice depresses it by 0.67 K — which is why thick ice
is wet-bedded and thin ice is not, and why the same climate produces scoured rock
in one valley and preserved regolith in the next.

*Introduced:* [3.4](lessons/03-04-glaciers-ice-ages.md)

### Overdeepening

Ice flow follows the **ice-surface** slope, not the bed, so a glacier can erode
*below* base level and leave a basin behind a shallow sill — Sognefjord's floor
is 1300 m below sea level behind a 100 m sill. **Only ice does this**, which makes
an overdeepening a definitive glacial diagnosis.

*Introduced:* [3.4](lessons/03-04-glaciers-ice-ages.md)

### Ice-laid vs meltwater-laid

The right question at a glacial outcrop is never "glacial or fluvial" but
**"ice-laid or meltwater-laid"** — and the two sit metres apart in the same
section. Till is unsorted and unstratified; outwash, eskers, kames and varves are
sorted, because water sorted them. An esker running *uphill* is the giveaway that
the water was under pressure inside the ice.

*Introduced:* [3.4](lessons/03-04-glaciers-ice-ages.md)

### Milankovitch forcing

Orbital cycles almost entirely **redistribute** sunlight by season and latitude
rather than changing the total: the annual global mean shifts by under 0.2
percent while high-latitude summer insolation swings by roughly 100 W/m². It is a
**seasonality argument, not an energy-budget argument**, and the quantity that
matters is summer melt at high northern latitude.

*Introduced:* [3.4](lessons/03-04-glaciers-ice-ages.md)

### Glacial, interglacial, ice age

**We are in an ice age** — the Quaternary, defined by permanent ice sheets. What
ended about 11.7 kyr ago was the last *glacial*; the Holocene is an
*interglacial* within an ongoing ice age. Greenland and Antarctica are the
evidence in plain sight.

*Introduced:* [3.4](lessons/03-04-glaciers-ice-ages.md)

### Desert

Defined by **aridity** — potential evaporation exceeding precipitation,
conventionally under about 250 mm/yr — not by heat or sand. Antarctica is the
largest desert on Earth, and roughly three-quarters of the Sahara is rock and
gravel rather than dune sand. Five mechanisms make one: subtropical high, rain
shadow, continental interiority, cold coastal upwelling, and polar.

*Introduced:* [3.5](lessons/03-05-deserts-wind-coasts.md)

### Saltation and the deflation lag

Wind sorts more extremely than water because air is 800 times less dense: it
cannot lift gravel at all, hops sand below about a metre, and exports silt and
clay entirely. What is left behind is a one-clast armour — **desert pavement** —
and the sandblasting is confined to the lowest metre, which is why you see
ventifacts and undercut pedestals rather than high sculpting. **Water, not wind,
does most desert erosion**, in rare violent events.

*Introduced:* [3.5](lessons/03-05-deserts-wind-coasts.md)

### Longshore drift

Not a current that carries sand along: it is generated by **residual wave
obliquity** — oblique swash, shore-normal backwash, plus a longshore current in
the surf zone. Remove the obliquity and the drift stops, which is why a
breakwater that turns waves shore-parallel creates a depositional shadow behind
it. And a groyne **relocates** sand: every cubic metre held updrift is a cubic
metre missing downdrift.

*Introduced:* [3.5](lessons/03-05-deserts-wind-coasts.md)

### Relative sea level

$$\Delta(\text{RSL}) = \Delta(\text{eustatic sea level}) - \Delta(\text{land elevation})$$

and land elevation moves tectonically ([2.6](lessons/02-06-mountain-building.md))
and isostatically ([3.4](lessons/03-04-glaciers-ice-ages.md)). Scandinavia
emerges while Louisiana drowns under the *same* global curve — which is why
"sea-level rise" is never one number. **Emergent** coasts show flights of raised
marine terraces; **submergent** coasts show rias and fjords.

*Introduced:* [3.5](lessons/03-05-deserts-wind-coasts.md)

### Hydraulic head

$$h = z + \frac{p}{\rho_w g}$$

Elevation plus pressure head — mechanical energy per unit weight, and exactly the
water level in a piezometer. **Groundwater flows down the head gradient, not
downhill**: an artesian well drives water upward, and in any discharge area the
vertical gradient points up.

*Introduced:* [3.6](lessons/03-06-groundwater-aquifers-karst.md)

### Darcy flux vs pore velocity

The distinction that decides every contaminant travel-time problem. $q = Q/A$ is
spread over the **gross** area as though water flowed through the quartz too; it
has velocity units and **is not a velocity**. The water is confined to the
fraction $n_e$ of that area, so a tracer moves faster by exactly $1/n_e$ —
typically three to five times, and always in the direction that makes you
underestimate risk.

$$q = -K\frac{dh}{dl} = Ki, \qquad v = \frac{q}{n_e}, \qquad t = \frac{L n_e}{K i}$$

*Introduced:* [3.6](lessons/03-06-groundwater-aquifers-karst.md)

### Conductivity vs intrinsic permeability

$$K = \frac{k\rho_w g}{\mu}$$

$k$ (m²) is a property of the **rock alone**; $K$ (m/day) carries the fluid's
density and viscosity too — which is why the same rock conducts hot water faster
than cold, and oil far more slowly than water.

*Introduced:* [3.6](lessons/03-06-groundwater-aquifers-karst.md)

### Confined vs unconfined

An unconfined aquifer is bounded above by its own water table and yields water by
**draining pores**; a confined one is capped by an aquitard, recharged only at its
outcrop, and yields water by expansion of the water and compression of the matrix
— hence a storage coefficient three to five orders of magnitude smaller. A well
in a confined aquifer measures the **potentiometric surface**, not the water
table, and flows unpumped (**artesian**) wherever that surface lies above the
ground.

*Introduced:* [3.6](lessons/03-06-groundwater-aquifers-karst.md)

### Mining an aquifer

The water can be replaced given centuries; the **pore space** cannot. Dewatered
clay compacts irreversibly, so subsidence permanently destroys storage — San
Joaquin has dropped up to 9 m since 1925 and Mexico City more than 10. One of the
few genuinely one-way doors in surface geology.

*Introduced:* [3.6](lessons/03-06-groundwater-aquifers-karst.md)

### Karst

Terrain where the aquifer dissolves itself and flow moves in **conduits** rather
than pores, so Darcy's law fails outright ($\mathrm{Re} \sim 10^{5}$, fully
turbulent) and a dye tracer can surface kilometres away the same afternoon. The
same reversible carbonate equilibrium runs both ways: rightward in the
high-$\text{CO}_2$ soil zone to make caves, sinkholes, swallow holes and springs;
leftward when the water degasses in an air-filled cave to make speleothems.
**A stalactite is the reaction running backwards.**

*Introduced:* [3.6](lessons/03-06-groundwater-aquifers-karst.md); chemistry in
[3.1](lessons/03-01-weathering-soils.md)

### Unconformity

A contact across which time is missing — a buried erosion or non-depositional
surface. Crucially it is **diachronous**: the hiatus varies along it and it dies
out laterally into conformable strata, so *"this unconformity represents 54 Myr"
is a statement about one outcrop, not about a surface*. A **paraconformity** is
a disconformity with no visible erosion surface at all — a bedding plane with ten
million years in it.

*Introduced:* [4.1](lessons/04-01-relative-dating-unconformities.md)

### Stratigraphic completeness

$$f = \frac{H}{R_s T}$$

the fraction of elapsed time actually represented by rock, where $R_s$ is the
**short-term** accumulation rate. For ordinary shelf sections $f$ lands between
0.01 and 0.1. The companion is the **Sadler effect**, $R \propto T^{-\beta}$ with
$\beta \approx 0.4$–0.8 over ten orders of magnitude: measured accumulation rates
fall as the measurement window lengthens, because longer windows contain more
gaps.

$$\text{Most of geologic time, at any given place, is recorded by gaps rather than by rock.}$$

*Introduced:* [4.1](lessons/04-01-relative-dating-unconformities.md)

### Closure temperature

The temperature above which the daughter diffuses out of a mineral faster than
decay produces it, and below which it is trapped — and the transition spans only a
few tens of degrees, because diffusion is Arrhenius-activated. **So a radiometric
age is not "when the rock formed": it is when one mineral cooled through one
temperature for one element.** A sample giving zircon 88 Ma, hornblende 84,
biotite 80 and apatite 24 contains no contradiction — it contains a cooling
history, and the disagreement is the data.

*Introduced:* [4.2](lessons/04-02-radiometric-dating.md)

### Isochron

The device that eliminates the unknown initial daughter. Normalize everything to
a stable non-radiogenic isotope $D_s$ of the daughter element, plot several
cogenetic samples, and read a straight line:

$$\frac{D}{D_s} = \left(\frac{D}{D_s}\right)_{\!0} + \frac{P}{D_s}\left(e^{\lambda t}-1\right)$$

**Slope carries the age** ($t = \ln(1+m)/\lambda$); **intercept is the initial
daughter ratio**, and doubles as a provenance tracer — an initial
$^{87}\text{Sr}/^{86}\text{Sr}$ near 0.704 is juvenile mantle-derived magma, one
past 0.710 is remelted old continental crust. Scatter is not noise: it is the
closed-system assumption failing, and an array that fails its MSWD test is an
**errorchron** from which no age may be reported.

*Introduced:* [4.2](lessons/04-02-radiometric-dating.md)

### Maximum depositional age

You cannot date a sandstone — only its grains, which crystallized in a source
terrane before the sandstone existed. The youngest detrital grain gives a
**maximum** age and the sediment may be any amount younger. Bracketing it takes
an ash bed or a cross-cutting intrusion. (The mirror case: dating a dike that
cuts a bed gives that bed a **minimum** age and nothing else.)

*Introduced:* [4.2](lessons/04-02-radiometric-dating.md); the principle in
[4.1](lessons/04-01-relative-dating-unconformities.md)

### Concordia and discordance

Zircon carries two independent uranium clocks, so it checks itself: agreement
plots on concordia, disagreement plots below it and diagnoses lead loss.
**Discordance is a measurement, not a failure** — discordant zircons locate the
timing of lead loss, and a staircase Ar–Ar spectrum locates a reheating event.
The dangerous case is the opposite: partial resetting that yields a smooth,
plausible, meaningless intermediate age with no internal warning.

*Introduced:* [4.2](lessons/04-02-radiometric-dating.md)

### Mixing line

A two-component contamination array — magma plus wall rock — plots straight and
mimics an isochron with a slope that means nothing chronological. The standard
discriminant: plot the daughter ratio against $1/{}^{86}\text{Sr}$, where a
mixture is still linear and a true isochron generally is not.

*Introduced:* [4.2](lessons/04-02-radiometric-dating.md)

### GSSP

The golden spike: a boundary defined as a **physical marked point in a designated
bed at a designated outcrop**, not as a number.

$$\text{The GSSP is the definition; the age is a measurement of it.}$$

Revising the age moves the published number and nothing else — not the boundary,
not which species belong to the stage, not any correlation made by marker. But it
*does* invalidate correlations made by number. **Correlate by marker, never by
number.** A companion rule keeps the scale tiling: **only the base of a unit is
defined; its top is the base of the next unit**, so there can be no gap and no
overlap.

*Introduced:* [4.3](lessons/04-03-geologic-timescale.md)

### Signor–Lipps effect

Imperfect sampling truncates observed ranges inward, so first appearances look
too young and last appearances too old — and an instantaneous extinction is
smeared into a gradual-looking decline. Any claim about the *tempo* of an
extinction has to survive this artefact first.

*Introduced:* [4.3](lessons/04-03-geologic-timescale.md)

### Astrochronology

Counting Milankovitch cycles in the sediment as a direct clock. Over the Cenozoic
and much of the Mesozoic **it resolves time better than dating the ash beds
does** — the 405 kyr eccentricity cycle is stable over hundreds of millions of
years and is the metronome of the modern timescale. At 7.4 cm/kyr, precession
shows up as 1.5 m bundles and the 405 kyr cycle as 30 m ones.

*Introduced:* [4.3](lessons/04-03-geologic-timescale.md)

### Facies

A body of rock whose lithology, structures, geometry and fossils record **one
depositional environment**. Because environments migrate, a facies boundary is
the *track of a moving environment* and is therefore **diachronous** — which is
why a rock boundary and a time line are never parallel.

*Introduced:* [4.4](lessons/04-04-stratigraphy-facies-correlation.md)

### Walther's law

Facies found in a **conformable** vertical succession were deposited in
**laterally adjacent** environments — so a vertical core reads out a horizontal
map of environments. The conformability clause is load-bearing: applied across an
unconformity the law invents a history that never happened, and unconformities
are precisely where the interesting events hide.

*Introduced:* [4.4](lessons/04-04-stratigraphy-facies-correlation.md)

### Accommodation

Space available for sediment below sea level. Everything about transgression and
regression is one subtraction:

$$\frac{dd}{dt} = \underbrace{\sigma + \varepsilon}_{\text{accommodation created}} - \underbrace{R}_{\text{accommodation filled}}, \qquad \frac{dx_s}{dt} = \frac{\sigma + \varepsilon - R}{S}$$

**Transgression does not require sea level to rise** — it requires accommodation
to outpace supply, so cutting off the sediment supply drowns a coast as
effectively as raising the sea (which is why damming a river drowns its delta).
And because the shelf gradient $S$ is $10^{-4}$ to $10^{-3}$, the division
amplifies a millimetre per year into metres per year of shoreline movement.

*Introduced:* [4.4](lessons/04-04-stratigraphy-facies-correlation.md)

### Relative vs eustatic sea level

A section records **relative** sea level, $\sigma + \varepsilon$, and **cannot
decompose it** — subsidence, sediment supply and eustasy produce
identical-looking stacks. Recovering the eustatic part takes **backstripping**:
remove the sediment load, decompact, correct for isostasy.

*Introduced:* [4.4](lessons/04-04-stratigraphy-facies-correlation.md)

### Formation

**A map unit, not a time unit** — a rock body distinctive enough and thick enough
to be traced at the mapping scale. Not an age, not an environment. Its boundaries
are facies boundaries, hence diachronous, so a formation routinely spans
different time intervals in different places. *This is the single most common
error in reading a geologic map.* The nesting runs bed → member → formation →
group → supergroup.

*Introduced:* [4.4](lessons/04-04-stratigraphy-facies-correlation.md)

### Correlated is not the same age

Lithostratigraphic correlation asserts physical continuity or similarity and
nothing more. Only ashes, reversals, isotope excursions and annual layers assert
**simultaneity**; biostratigraphy asserts it over long distances, coarsely.

*Introduced:* [4.4](lessons/04-04-stratigraphy-facies-correlation.md)

### Structure contour

A level set of a geologic contact — for a planar contact, straight, parallel,
evenly spaced lines whose common bearing is the **strike**. Built with no compass
and no field visit: every place the contact crosses a topographic contour is a
point of known elevation on the contact; join the equal-elevation points. Then

$$\tan\delta = \frac{\Delta z}{d}$$

**Dip is an elevation drop divided by the map distance it took to get it** — a
slope measured on paper. Close spacing means steep dip; along strike the
elevation never changes.

*Introduced:* [4.5](lessons/04-05-reading-a-geologic-map.md)

### The V-rule

$$\text{The outcrop trace Vs in the direction of dip, except when the bed dips downstream more gently than the stream.}$$

Topographic contours always V **upstream**, so for downstream-dipping beds the
two families of Vs point in opposite directions — a free dip-direction reading
from three metres away. The exception needs $\tan\delta\cos\theta$ to sit in the
thin window between 0 and the stream gradient $s$, and it flags itself: the V
becomes enormously drawn out along the valley.

*Introduced:* [4.5](lessons/04-05-reading-a-geologic-map.md)

### Outcrop width is not thickness

$$t = w\left(\sin\delta - \cos\delta\tan\alpha\right)$$

Width is thickness divided by roughly the sine of the dip, and it is further
inflated when the ground slopes in the dip direction. A gently dipping 50 m
limestone on a gentle slope can outcrop over a wider band than a vertical 500 m
sandstone — and ignoring the ground-slope term overestimated the real thickness
by 39 and 48 percent in the lesson's two worked cases.

*Introduced:* [4.5](lessons/04-05-reading-a-geologic-map.md)

### Compositional vs mechanical layering

Two complete layerings of the same planet, sorted by different questions, with
their boundaries in different places.

| | **Compositional** | **Mechanical** |
|---|---|---|
| Sorted by | what it is made of | how it responds to stress |
| Divisions | crust / mantle / core | lithosphere / asthenosphere / mesosphere / outer core / inner core |
| Top boundary | **Moho**, 7–50 km | **base of the plate**, 100–250 km |
| Set by | chemistry, fixed once formed | temperature, so it *moves* |

**The Moho is a chemical boundary buried inside a mechanical layer**, and only one
of the two matters for plate tectonics. The core–mantle boundary is the single
place where the two schemes coincide.

*Introduced:* [5.1](lessons/05-01-earths-internal-structure.md)

### The shadow zones

$V_s = \sqrt{\mu/\rho}$, and a liquid has $\mu = 0$, so a fluid passes P and
blocks S. **No direct S has ever been recorded beyond $103^\circ$**, from any
earthquake at any station — that is the liquid outer core. P vanishes between
$103^\circ$ and $143^\circ$ and reappears beyond, refracted through the core; and
a faint P *inside* the shadow (Lehmann, 1936) requires a solid inner core.
Shadows are missing **phases**, not silence: S reflected off the core–mantle
boundary arrives fine.

*Introduced:* [5.1](lessons/05-01-earths-internal-structure.md)

### The four independent arguments for a metal core

None of them is seismic-only, and they agree. **Mean density** 5.51 against 2.8
for crustal rock. **Moment-of-inertia factor** 0.3307 against 0.4 for a uniform
sphere — the mass is piled inward. **The S shadow** — a liquid layer at 2891 km.
**Meteorites and the geodynamo** — chondrites supply the iron budget, and a field
generated above iron's 770 °C Curie temperature requires a convecting conducting
fluid, not a magnet.

*Introduced:* [5.1](lessons/05-01-earths-internal-structure.md)

### The 410 and 660

Not places where the rock changes — places where the **same** rock repacks into a
denser structure (olivine → wadsleyite; ringwoodite → bridgmanite plus
ferropericlase). The proof is that the 660 has a **negative Clapeyron slope** and
so shifts up and down with temperature, depressed under cold slabs and elevated
under hot upwellings; a compositional boundary could not do that.

*Introduced:* [5.1](lessons/05-01-earths-internal-structure.md)

### The detrital age rule

$$\text{A detrital age dates the \emph{source}, not the sediment}$$

so it is a **maximum** age for the host rock and a **minimum** age for
continental-type crust *somewhere* on Earth. Provenance and outcrop are different
claims — which is why a 4.4 Ga Jack Hills zircon sits in a 3.0 Ga quartzite, and
why "oldest rock" (Acasta gneiss, 4.03 Ga), "oldest mineral" (4.40 Ga) and "age
of Earth" (4.567 Ga, from meteorites) are three different questions with three
different answers.

*Introduced:* [5.2](lessons/05-02-earth-history-hadean-proterozoic.md)

### Banded iron formation

**Not proof that there was no oxygen — the opposite.** BIF requires *both* an
anoxic deep ocean to dissolve and transport $\text{Fe}^{2+}$ across a basin, and
an oxidant where it precipitated. It is the signature of a chemically
**stratified** ocean, which is why it ends around 1.85 Ga when the deep ocean
finally ventilates — and why essentially all the world's iron ore is a one-off
consequence of atmospheric oxygenation.

*Introduced:* [5.2](lessons/05-02-earth-history-hadean-proterozoic.md)

### The Great Oxidation Event

2.45–2.32 Ga, and it is established because **three unrelated proxies break
together**. It reached perhaps 1 percent of the present level and then stalled
for a billion years — breathable air is a Neoproterozoic-to-Palaeozoic
development, not an Archean one. The causal arrow to the Huronian glaciations
runs *from* oxygen: free $\text{O}_2$ destroyed the methane greenhouse, and the
ice followed within about 50 Myr.

*Introduced:* [5.2](lessons/05-02-earth-history-hadean-proterozoic.md)

### Craton

An ancient continental block that survived four billion years of recycling
because it sits on a **depleted mantle keel** — 200 km or more of low-density
residual harzburgite left behind by ancient melting, permanently buoyant and too
stiff to be entrained. Continents last because of what is *under* them.

*Introduced:* [5.2](lessons/05-02-earth-history-hadean-proterozoic.md)

### Reservoir versus flux

The structural argument that kills the "BIF absorbed the oxygen" explanation of
the GOE's delay: **a finite stock cannot hold back a steady flow for long.** All
the world's banded iron consumed about 3.6 percent of one present atmospheric
oxygen inventory, buying roughly 1.3 Myr against a 250–550 Myr gap. The same
reasoning is why an aquifer's storage is not a supply
([3.6](lessons/03-06-groundwater-aquifers-karst.md)) and why reserves are not a
countdown ([5.4](lessons/05-04-resources-geologic-hazards.md)).

*Introduced:* [5.2](lessons/05-02-earth-history-hadean-proterozoic.md)

### The supercontinent cycle as a four-output machine

$$\text{dispersed continents} \Rightarrow \text{young seafloor} \Rightarrow \text{shallow basins} \Rightarrow \text{high sea level} \Rightarrow \text{greenhouse}$$

Which is why **the Cretaceous sea-level high is not more water**: the water
budget barely changed and the basin got shallower, because fast spreading kept a
large fraction of the seafloor young, hot and thermally expanded. **Sea level is
as much a tectonic variable as a climatic one.**

*Introduced:* [5.3](lessons/05-03-earth-history-phanerozoic.md)

### Cyclothem

A repeating coal–shale–limestone cycle recording **glacio-eustatic** flooding of a
flat craton — the mechanism by which a local ice sheet becomes a global
stratigraphic signal. On a $10^{-4}$ craton slope, 60 m of eustatic change moves
the shoreline 600 km, which is why Kansas records Gondwanan ice from 8,000 km
away.

*Introduced:* [5.3](lessons/05-03-earth-history-phanerozoic.md)

### The two-signal problem in benthic isotopes

$$\Delta\delta^{18}\text{O}_{\text{calcite}} = \underbrace{-0.25\,\Delta T}_{\text{thermometer}} + \underbrace{\Delta\delta^{18}\text{O}_{\text{seawater}}}_{\text{ice volume}}$$

**One equation, two unknowns** — the benthic curve is temperature *plus* ice
volume, and after 34 Ma the ice term dominates the trend. Breaking the degeneracy
needs an independent thermometer (Mg/Ca). Calibrations: 0.25 per mil per °C; ice
sheets near $-40$ per mil; the modern cryosphere is 0.55 per mil of seawater,
equal to about 65 m of sea level.

*Introduced:* [5.3](lessons/05-03-earth-history-phanerozoic.md)

### Target rock

The country rock a magma intrudes or an impactor strikes — **part of the kill
mechanism, not a detail.** The Siberian Traps hit coal and evaporites; Chicxulub
hit anhydrite and carbonate. Comparable events in different geology did far less,
so eruption volume alone does not predict extinction severity: **twice, the
severity was set by what the magma or the impactor hit, not by how big it was.**

*Introduced:* [5.3](lessons/05-03-earth-history-phanerozoic.md)

### Ore deposit

**Not a place where the metal occurs — the metal occurs everywhere.** It is a
place where a process concentrated it by a factor of a hundred to ten thousand,
which is why exploration hunts the *process*: alteration halos, favourable
structures, ancient shorelines. The alteration halo around a hydrothermal system
can be a hundred times bigger than the orebody, and that is exactly why it is the
target.

$$\mathrm{CF} = \frac{\text{ore grade}}{\text{crustal abundance}}$$

*Introduced:* [5.4](lessons/05-04-resources-geologic-hazards.md)

### Rare earths are not rare

Cerium is more than twice as abundant in the crust as copper. Rare-earth ions
substitute comfortably into ordinary rock-forming minerals
([1.1](lessons/01-01-what-a-mineral-is.md)'s Goldschmidt rules), so they resist
being concentrated. **The scarcity is a scarcity of concentrating processes.**

*Introduced:* [5.4](lessons/05-04-resources-geologic-hazards.md)

### Resource versus reserve

What is there, versus what can be extracted at a profit at today's price with
today's technology. A 40-year reserve-to-production ratio is therefore **not a
countdown** — copper's has sat near 40 years for a century, because reserves are
an economic inventory restocked by price, technology and exploration. **The
constraint that does bite is energy per tonne of metal, which scales as $1/g$ and
only worsens.**

*Introduced:* [5.4](lessons/05-04-resources-geologic-hazards.md)

### A trap is a geometry

Oil does not sit in underground pools — it occupies pore space in a reservoir
rock exactly as groundwater does, and a "trap" is a geometry that **arrests
buoyant migration**, capped by a seal whose pore throats are too fine to push
through. And there is a sixth condition beyond the five obvious ones: **the trap
has to exist before the source rock matures**, or the oil migrated past and the
anticline is empty.

*Introduced:* [5.4](lessons/05-04-resources-geologic-hazards.md)

### Mitigation acts on exposure and vulnerability

$$\text{Risk} = \text{Hazard} \times \text{Exposure} \times \text{Vulnerability}$$

**Hazard is almost always fixed** — a property of the fault, the volcano, the
coast. Codes and zoning act on the other two terms. The exceptions are exactly
two: **slope drainage and pumping limits genuinely lower the hazard** — and not
coincidentally, those are the two hazards people partly created.

*Introduced:* [5.4](lessons/05-04-resources-geologic-hazards.md); the
decomposition first appears in [2.7](lessons/02-07-earthquakes-seismic-hazard.md)

### Memorylessness

$$P(\text{at least one exceedance in } n \text{ years}) = 1 - e^{-n/T}, \qquad \lambda = 1/T$$

A 475-year event is **never "due."** The return period is a mean waiting time and
the last event carries no information about the next. Likewise **expected annual
loss is a budgeting device, not a forecast** — nobody ever loses the average; the
town loses 1.4 billion dollars once and nothing in the other 474 years.

*Introduced:* [5.4](lessons/05-04-resources-geologic-hazards.md)

## Formulas and rules

### The silicate polymerization series

**The organizing table of the whole subject.** One parameter — shared oxygens per
tetrahedron — runs down every column at once. Density falls as $b$ rises because
the heavy cations (Mg, Fe, Ca) are what a low-$b$ structure needs to balance its
charge.

| Class | $b$ | $n_\mathrm{O}/n_\mathrm{Si}$ | Anion unit | Example | Cleavage | Density (g/cm³) |
|---|---|---|---|---|---|---|
| Isolated (nesosilicate) | 0 | 4 | $\text{SiO}_4^{4-}$ | olivine, garnet | **none** (isotropically weak-ish) | 3.3–4.4 |
| Single chain (inosilicate) | 2 | 3 | $\text{SiO}_3^{2-}$ | pyroxene | 2, at $87^\circ/93^\circ$ | 3.2–3.6 |
| Double chain | 2.5 | 2.75 | $\text{Si}_4\text{O}_{11}^{6-}$ | amphibole | 2, at $56^\circ/124^\circ$ | 3.0–3.4 |
| Sheet (phyllosilicate) | 3 | 2.5 | $\text{Si}_2\text{O}_5^{2-}$ | mica, clay, talc | **1 perfect** | 2.8–3.1 |
| Framework (tectosilicate) | 4 | 2 | $\text{SiO}_2$ | quartz, feldspar | none (quartz); 2 at $\approx 90^\circ$ (feldspar, via Al-for-Si) | 2.56–2.76 |

$$\frac{n_{\mathrm{O}}}{n_{\mathrm{Si}}} = 4 - \frac{b}{2}, \qquad z = (+4) + \left(4-\frac{b}{2}\right)(-2) = b - 4$$

Inverting is the standard exam move: $b = 2\left(4 - n_\mathrm{O}/n_\mathrm{Si}\right)$.
A non-integer $b$ is itself diagnostic — $b = 2.5$ means the tetrahedra are *not
all equivalent*, i.e. a double chain.

Chain cleavage angle from the column's cross-section aspect ratio $r$:

$$\tan\frac{\phi}{2} = r = \frac{b_{\text{cell}}}{a_{\text{cell}}\sin\beta}, \qquad \text{observed pair} = \phi \text{ and } 180^\circ - \phi$$

Single chain $r \approx 0.95 \Rightarrow 87^\circ/93^\circ$; double chain
$r \approx 1.91 \Rightarrow 124^\circ/56^\circ$. Silica trend for the Al-free Mg
end members: forsterite 42.7, enstatite 59.9, talc 63.4, quartz 100 (wt % $\text{SiO}_2$).

*From* [1.1](lessons/01-01-what-a-mineral-is.md) · [1.2](lessons/01-02-identifying-minerals.md)

### The rock-forming minerals — the diagnostic table

About a dozen minerals are more than 90 percent of the crust by volume. Feldspar
alone is roughly half.

| Mineral | Formula | $H$ | Cleavage | $G$ | Decisive test |
|---|---|---|---|---|---|
| Quartz | $\text{SiO}_2$ | 7 | none, conchoidal | 2.65 | scratches glass **and** no cleavage |
| Orthoclase (K-feldspar) | $\text{KAlSi}_3\text{O}_8$ | 6 | 2 at exactly $90^\circ$ | 2.56 | pink, **no** striations |
| Plagioclase | $\text{NaAlSi}_3\text{O}_8$–$\text{CaAl}_2\text{Si}_2\text{O}_8$ | 6 | 2 at $\approx 86^\circ$ | 2.62–2.76 | **fine parallel striations** (albite twinning) on one cleavage face |
| Muscovite / biotite | sheet silicates + K | 2.5–3 | **1 perfect** | 2.8–3.1 | splits into thin **elastic** flakes (chlorite's stay bent) |
| Amphibole (hornblende) | double chain, hydrous | 5–6 | 2 at $56^\circ/124^\circ$ | 3.0–3.4 | the cleavage angle — and it proves the melt was **wet** |
| Pyroxene (augite) | single chain | 5.5–6 | 2 at $87^\circ/93^\circ$ | 3.2–3.6 | the cleavage angle; stubby prisms |
| Olivine | $(\text{Mg},\text{Fe})_2\text{SiO}_4$ | 6.5–7 | none | 3.27 (Fo) – 4.39 (Fa) | green sugary grains, no cleavage, high density |
| Garnet | isolated tetrahedra | 7 | none | 3.5–4.3 | equant dodecahedra in schist |
| Calcite | $\text{CaCO}_3$ | 3 | **3 at $75^\circ$** (rhombs) | 2.71 | fizzes vigorously in cold dilute HCl; double refraction |
| Dolomite | $\text{CaMg(CO}_3)_2$ | 3.5–4 | 3, rhombs | 2.85 | fizzes **only when scratched to powder** |
| Halite | $\text{NaCl}$ | 2.5 | 3 cubic | 2.16 | salty |
| Gypsum | $\text{CaSO}_4\cdot2\text{H}_2\text{O}$ | 2 | — | 2.3 | scratched by a fingernail |
| Talc | $\text{Mg}_3\text{Si}_4\text{O}_{10}(\text{OH})_2$ | 1 | 1 perfect | 2.8 | softest known; neutral sheets, van der Waals only |
| Clays | sheet silicates | ~2 | 1 | 2.6 | earthy, dull — **hand-sample ID honestly fails here** |
| Pyrite | $\text{FeS}_2$ | 6–6.5 | **none** | 5.0 | brassy cubes, greenish-black streak, too hard for a knife |
| Magnetite | $\text{Fe}_3\text{O}_4$ | 6 | none | 5.2 | a hand magnet; nothing else common is attracted |
| Hematite | $\text{Fe}_2\text{O}_3$ | 5–6 | none | 5.3 | **red-brown streak** whatever the specimen colour |
| Galena | $\text{PbS}$ | 2.5 | 3 cubic | 7.6 | the heft — three times too heavy for its size |

*From* [1.1](lessons/01-01-what-a-mineral-is.md) · [1.2](lessons/01-02-identifying-minerals.md)

### The identification key, in order of information gained

Roughly a dozen candidates need about $\log_2 12 \approx 3.6$ well-chosen binary
splits. Run the ones that halve the population, not the ones that shave a
candidate off the end.

1. **Luster** — metallic or not. One glance, two nearly disjoint sets.
2. **Hardness bracket** — fingernail / knife / glass, four bins.
3. **Cleavage** — count the planes, measure the angle. **The single most diagnostic property**, because it is a direct picture of the bonding.
4. **One decisive test** — acid, magnet, streak plate, striations, heft.
5. **Colour** — last, as a hint.

| Mohs $H$ | Mineral | Knoop ($\text{kg/mm}^2$) | | Field tool | Effective $H$ |
|---|---|---|---|---|---|
| 1 | talc | $\approx 1$ | | fingernail | 2.5 |
| 2 | gypsum | 32 | | copper coin | 3.5 |
| 3 | calcite | 135 | | **pocket knife / glass** | **5.5 — the big split** |
| 4 | fluorite | 163 | | steel file | 6.5 |
| 5 | apatite | 430 | | streak plate | $\approx 6.5$ |
| 6 | orthoclase | 560 | | | |
| 7 | quartz | 820 | | | |
| 8 | topaz | 1340 | | | |
| 9 | corundum | 2100 | | | |
| 10 | diamond | $\approx 7000$ | | | |

**Mohs is ordinal.** Steps 1→9 span a factor of about 2100 in indentation
hardness and the single step 9→10 spans another 3.3. Never subtract, average or
interpolate; bracket only.

Specific gravity by Archimedes — subtract to kill the unknown volume:

$$G = \frac{W_a}{W_a - W_s}$$

*In words: the fraction of its weight a mineral keeps under water is the
reciprocal of its specific gravity.* A hand detects roughly a factor of 1.5 in
density, which is why "too heavy for its size" is a real observation. Note
$\partial G/\partial W_s \sim G^2/W_a$: **dense minerals are the hard ones to
weigh accurately**, and a big sample fixes it.

*From* [1.2](lessons/01-02-identifying-minerals.md)

### Melting: the geotherm, the solidus and the melt fraction

Both curves rise with depth and **the solidus rises ten times faster**, so the
gap is narrowest at the base of the lithosphere (60–100 km) and grows downward.
That is where the planet does almost all of its melting.

| Quantity | Value |
|---|---|
| Dry peridotite solidus | $T_s(z) = 1100 + 4z$ (°C, $z$ in km) |
| Mantle adiabat | $T_a(z) = T_p + 0.4z$, $T_p$ = potential temperature |
| Mantle lithostatic gradient | $dP/dz = \rho_m g = 0.0323\ \text{GPa/km}$ ($\rho_m = 3300\ \text{kg/m}^3$); 100 km $\approx 3.2$ GPa |
| Melt productivity | $\approx 0.4$ percent melt per km of ascent above the solidus |

$$z_{\text{melt}} = \frac{T_p - 1100}{3.6}$$

*In words: the depth at which upwelling mantle starts to melt depends only on how
hot the mantle is, and on nothing about the tectonics.* Integrating a linear
productivity over the melting column of height $h = z_{\text{melt}}$:

$$\bar F = \tfrac{1}{2}(0.004h), \qquad h_{\text{crust}} = \bar F h = 0.002\,h^2$$

**Crustal thickness goes as the square of the excess temperature.** $T_p = 1300$
gives 56 km and 6.2 km of crust (observed: 6–7 km); $T_p = 1450$ gives 97 km and
19 km (Iceland: about 20 km).

Partial melting is one mass balance, and it *is* the lever rule:

$$C_0 = F\,C_L + (1-F)\,C_S \qquad\Longleftrightarrow\qquad F = \frac{C_0 - C_S}{C_L - C_S}$$

Water works by **freezing-point depression**, and structurally by cutting the
melt's bridging oxygens, $\text{Si}-\text{O}-\text{Si} + \text{H}_2\text{O} \to 2(\text{Si}-\text{OH})$ —
the same reaction that collapses magma viscosity in [2.8](lessons/02-08-volcanoes-volcanic-hazards.md).
At 100 km the dry solidus is 1500 °C, the wet solidus near 1000 °C, and the
mantle wedge sits near 1250 °C: **250 °C too cold to melt dry, 250 °C hotter than
it needs to be once wet.**

*From* [1.3](lessons/01-03-how-the-earth-melts.md)

### Bowen's reaction series, and its reversal

| Crystallizes | Discontinuous branch | Structure ($b$) | Continuous branch | Weathers ([Goldich](#goldich-stability-series)) |
|---|---|---|---|---|
| first, ~1200 °C | olivine | isolated (0) | Ca-plagioclase | **first — least stable at the surface** |
| ↓ | pyroxene | single chain (2) | ↓ | ↓ |
| ↓ | amphibole | double chain (2.5) | ↓ | ↓ |
| ↓ | biotite | sheet (3) | Na-plagioclase | ↓ |
| last, ~700 °C | K-feldspar → muscovite → **quartz** | framework (4) | — | **last — survives to become sand** |

**Bowen's crystallization order is the polymerization series read in order**, and
the Goldich stability series is the same list read backwards: the first-formed
minerals crystallized hottest and driest, so they are furthest from equilibrium
with a wet, cold, oxidizing surface. Bowen is *not* a list of melting points —
pure quartz melts at 1713 °C and pure albite at 1118 °C, yet quartz crystallizes
last.

The three differentiation processes, and how you know which one ran:

| Process | What happens | Field signature |
|---|---|---|
| **Fractional crystallization** | early crystals removed from the melt | cumulate layering, **normally** zoned crystals, a trend within one suite |
| **Assimilation** | melt digests its wall rock | **inherited zircons far older than the eruption**, crustal isotopes, reaction-rimmed xenoliths |
| **Magma mixing** | mafic recharge meets a resident felsic body | mafic enclaves with crenulate margins, banded pumice, **reversely** zoned crystals |

*From* [1.3](lessons/01-03-how-the-earth-melts.md) · [3.1](lessons/03-01-weathering-soils.md)

### The igneous classification grid

Composition across, texture down. **It is four magmas and two endings, not eight
rocks** — granite and rhyolite have the same chemistry and differ only in where
they stopped.

| Class | $\text{SiO}_2$ (wt %) | Colour index | Density | Dominant minerals | Plutonic / volcanic |
|---|---|---|---|---|---|
| Felsic | $>65$ | 0–15 | $2.7\ \text{g/cm}^3$ | quartz, K-feldspar, Na-plagioclase | **granite / rhyolite** |
| Intermediate | 52–65 | 15–45 | $2.8\ \text{g/cm}^3$ | plagioclase, amphibole | **diorite / andesite** |
| Mafic | 45–52 | 45–85 | $3.0\ \text{g/cm}^3$ | Ca-plagioclase, pyroxene | **gabbro / basalt** |
| Ultramafic | $<45$ | $>85$ | $3.3\ \text{g/cm}^3$ | olivine, pyroxene | **peridotite / (komatiite)** |

> more silica $\Rightarrow$ more quartz and feldspar, fewer olivine and pyroxene
> $\Rightarrow$ lighter colour, lower density, lower melting temperature,
> **higher viscosity**

| Texture | Grain size | What it proves |
|---|---|---|
| Phaneritic | $>1\ \text{mm}$, visible unaided | slow cooling, insulated — **intrusive** |
| Aphanitic | $<1\ \text{mm}$ | fast cooling — extrusive, **or** a thin or marginal intrusion |
| Porphyritic | phenocrysts in a finer groundmass | **two** cooling rates, in that order |
| Glassy | no crystals at all | quenched faster than atoms could organize |
| Vesicular | frozen bubbles | dissolved gas exsolved at low pressure |
| Pyroclastic | angular fragments and shards | the magma was blown apart, not poured |

Silica by mineral, for computing a bulk composition from a mode: quartz 100,
albite 68.7, orthoclase 64.8, anorthite 43.2, amphibole $\approx 45$, biotite
$\approx 37$ (wt %). Weight the modal volume percentages by density before
summing if you want better than about half a percent.

*From* [1.4](lessons/01-04-igneous-rocks-and-bodies.md)

### Igneous bodies, cooling times and aureoles

| Body | Relation to host layering | Form | Scale |
|---|---|---|---|
| **Sill** | concordant | sheet | cm to hundreds of m |
| **Laccolith** | concordant, roof domed up | lens | 100 m to km |
| **Dike** | **discordant** | sheet | cm to tens of m |
| **Batholith** | discordant | massive, irregular | $>100\ \text{km}^2$ outcrop |
| **Stock** | discordant | massive | $<100\ \text{km}^2$ |
| **Volcanic neck** | discordant | pipe — the frozen conduit | tens to hundreds of m |

$$t_{\text{cool}} \sim \frac{a^{2}}{\kappa}, \qquad \delta \sim \sqrt{\kappa t} \;\Longrightarrow\; \delta \sim a, \qquad \kappa_{\text{rock}} \approx 1\times10^{-6}\ \text{m}^2/\text{s}$$

*In words: cooling time goes as the square of the half-width, and the aureole is
about as wide as the intrusion's half-width — there is only one length in the
problem.*

| Body | Half-width $a$ | $t = a^2/\kappa$ | Aureole |
|---|---|---|---|
| 1 m dike | 0.5 m | **3 days** | decimetres |
| 50 m sill | 25 m | **20 years** | tens of m |
| 10 km batholith | 5000 m | **800,000 years** | **kilometres** |

**Sill or buried flow?** Only a sill bakes the rock *above* it; only a flow has a
vesicular, oxidized, weathered top and leaves clasts of itself in the bed above.

*From* [1.4](lessons/01-04-igneous-rocks-and-bodies.md)

### Clastic grain size: the Wentworth and phi scales

$$\phi = -\log_2\!\left(\frac{d}{d_0}\right), \qquad d_0 = 1\ \text{mm}$$

Each whole phi unit is a halving of diameter; coarse grains are negative. The
scale exists because grain-size distributions are log-normal, so phi makes them
Gaussian and $\sigma_\phi$ meaningful.

| Class | Diameter | $\phi$ | Rock |
|---|---|---|---|
| Boulder / cobble / pebble / granule | $> 2\ \text{mm}$ | $< -1$ | **conglomerate** (rounded) or **breccia** (angular) |
| Sand | $\tfrac{1}{16}$ to $2\ \text{mm}$ | $4$ to $-1$ | **sandstone** |
| Silt | $\tfrac{1}{256}$ to $\tfrac{1}{16}\ \text{mm}$ | $8$ to $4$ | **siltstone** |
| Clay | $< \tfrac{1}{256}\ \text{mm}$ | $> 8$ | **shale** (fissile) / **mudstone** (not) |

Sorting: $\sigma_\phi < 0.5$ well sorted, $\sigma_\phi > 2$ very poorly sorted.
Sandstone names: **quartz arenite** over 95 percent quartz, **arkose** over 25
percent feldspar, **litharenite** rock-fragment dominated, **greywacke** poorly
sorted sand in a mud matrix (a turbidite).

Settling obeys Stokes while $\mathrm{Re} \ll 1$, which is true for silt and clay
and *not* for sand:

$$v = \frac{2}{9}\,\frac{(\rho_s-\rho_f)\,g\,R^{2}}{\mu}, \qquad \mathrm{Re} = \frac{\rho_f v d}{\mu}$$

In a 10 m lake with a 0.1 m/s residual current: sand settles in 44 s and travels
14 m; silt in 3.4 h and 1.2 km; clay in 14 days and **124 km**. That separation
is why mud ends up offshore and sand does not.

*From* [1.5](lessons/01-05-sedimentary-rocks.md)

### Chemical and organic sediments, and the evaporite sequence

Salts precipitate in strict order of increasing solubility as brine concentrates —
a solubility-product sequence, so the order never varies.

| Precipitate | Formula | Concentration factor | Brine volume remaining |
|---|---|---|---|
| Calcite / aragonite | $\text{CaCO}_3$ | $\sim 2\times$ | $\sim 50$ percent |
| Gypsum | $\text{CaSO}_4\cdot 2\text{H}_2\text{O}$ | $\sim 5\times$ | $\sim 19$ percent |
| **Halite** | $\text{NaCl}$ | $\sim 10\times$ | $\sim 10$ percent |
| Bitterns (sylvite, carnallite, epsomite) | K and Mg salts | $\sim 25\times$ | $\sim 4$ percent |

$$\text{1 m of seawater, evaporated to dryness, leaves about 1.3 cm of halite.}$$

So 2 km of Messinian evaporite requires 154 km of seawater column — the
Mediterranean, filled and evaporated roughly 100 times. Other non-clastic rocks:
**limestone** (overwhelmingly biogenic in the Phanerozoic), **dolostone** (mostly
replacement), **chert** (siliceous plankton), and the coal rank sequence
peat → lignite → bituminous → anthracite, which is really low-grade metamorphism.

*From* [1.5](lessons/01-05-sedimentary-rocks.md)

### Sedimentary structures — what each reads, and which way is up

| Structure | What it reads | **Way-up rule** |
|---|---|---|
| **Cross-bedding** | palaeocurrent: foresets dip *downcurrent* | foresets **truncated at the top**, tangential into the base |
| **Graded bedding** | one waning current; the turbidite signature | **coarse at base, fining upward** |
| **Ripple marks** | asymmetric = current (steep face downstream); symmetric = waves | **sharp crests point up**, rounded troughs down |
| **Mud cracks** | subaerial exposure, wetting and drying | wedges **taper downward**, filled from above |
| **Sole marks** (flute, groove casts) | palaeocurrent; flutes deepen upcurrent | casts **protrude from the underside** of a bed |
| **Geopetal fill** | the horizontal at the time of deposition | sediment on the **floor** of a shell cavity, sparry cement above |
| **Bioturbation, rootlets** | colonization from the sediment surface | burrows and roots penetrate **downward** |
| **Massive bedding** | deposition too fast to organize grains | no way-up information — debris flow or slump |

Three independent readouts of one hand sample: **composition** gives the source
rock and its climate, **texture** gives the journey, **structure** gives the final
environment and the current direction.

*From* [1.5](lessons/01-05-sedimentary-rocks.md)

### Porosity, permeability and compaction

$$\phi_p = \frac{V_{\text{void}}}{V_{\text{total}}}, \qquad k \approx \frac{d^{2}\phi_p^{3}}{180\,(1-\phi_p)^{2}} \quad\text{(Kozeny–Carman)}$$

*In words: permeability goes as the square of grain size and the cube of
porosity* — which is exactly why mud holds more water than sand and yields a
millionth as much.

$$\phi_p(z) = \phi_{p,0}\,e^{-cz} \quad\text{(Athy)}, \qquad h_1(1-\phi_{p,1}) = h_0(1-\phi_{p,0}) \quad\text{(decompaction)}$$

$c \approx 0.27\ \text{km}^{-1}$ for sand, $0.55\ \text{km}^{-1}$ for mud. Fresh
mud is 60–80 percent porous, sand about 40 percent; at 3 km both are near 12–18
percent. **Decompact before computing any subsidence or sedimentation rate** — a
2.0 m bed at 55 percent porosity is 1.1 m at 18 percent, having lost 45 percent
of its thickness.

*From* [1.5](lessons/01-05-sedimentary-rocks.md)

### Metamorphic rocks by grade and protolith

| Rock | Grade | Diagnostic | Roughly |
|---|---|---|---|
| **Slate** | very low | perfect slaty cleavage, grains invisible | 200–350 °C |
| **Phyllite** | low | silky sheen — micas just big enough to catch light | 350–450 °C |
| **Schist** | medium | visible platy micas define schistosity; garnet, staurolite | 450–650 °C |
| **Gneiss** | high | segregated light and dark **bands**; micas breaking down | 650 °C+ |
| **Migmatite** | melting begins | pale contorted leucosome in a darker host | ~700 °C+ |

Non-foliated (no directed stress, or no platy minerals to align): **quartzite**
from quartz sandstone, **marble** from limestone or dolostone, **hornfels** from
any fine protolith baked in an aureole, **anthracite** from coal.

Index minerals in a pelitic protolith, in increasing grade:

$$\text{chlorite} \to \text{biotite} \to \text{garnet} \to \text{staurolite} \to \text{kyanite} \to \text{sillimanite}$$

*From* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Metamorphic facies and the aluminosilicate triple point

A facies is a **field in P–T space**, so it reports the geothermal gradient — and
therefore the tectonic setting — rather than just "how cooked".

| Facies | Conditions | Gradient | Setting |
|---|---|---|---|
| Hornfels | low P, wide T | $>60$ °C/km | contact aureole beside an intrusion |
| Greenschist → amphibolite → granulite | moderate P, rising T | ~20–30 °C/km | regional, collisional belt |
| **Blueschist** | high P, low T | ~5–10 °C/km | **subduction zone** (glaucophane is the tell) |
| Eclogite | very high P | — | deep subduction, mantle depths |

The three $\text{Al}_2\text{SiO}_5$ polymorphs are a one-component phase diagram
whose triple point fixes **both** variables with nothing else known:

| Polymorph | Molar volume | Stable where | Means |
|---|---|---|---|
| **Kyanite** | $44.1\ \text{cm}^3/\text{mol}$ | high P | deep |
| **Andalusite** | $51.5\ \text{cm}^3/\text{mol}$ | low P, low T | shallow |
| **Sillimanite** | $49.9\ \text{cm}^3/\text{mol}$ | high T | hot |

$$T \approx 550\ ^\circ\text{C}, \qquad P \approx 0.45\ \text{GPa} \;\Longrightarrow\; z \approx 17\ \text{km}$$

Linearized boundaries, anchored on the triple point ($P$ in MPa, $T$ in °C):

$$\text{ky–sill:}\ P = 450 + 2.75\,(T-550), \qquad \text{and–sill:}\ P = 450 - 2.8\,(T-550)$$

The andalusite–sillimanite boundary leans **backwards** because
$dP/dT = \Delta S/\Delta V$ and that reaction has $\Delta V = -1.6\ \text{cm}^3/\text{mol} < 0$.
Kyanite is 14 percent denser than andalusite, and that is the entire reason it is
the deep one.

*From* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### Pressure, depth and the geothermal gradient

$$P = \rho g z, \qquad \frac{dP}{dz} = \rho g = 26.5\ \text{MPa/km} = 0.0265\ \text{GPa/km} \quad (\rho = 2700\ \text{kg/m}^3)$$

*In words: about 26–27 MPa per km of continental crust, so 1 GPa is roughly 38 km
of rock, and 1 kbar = 100 MPa $\approx$ 3.8 km.* Use $\rho_m = 3300\ \text{kg/m}^3$
and $0.0323\ \text{GPa/km}$ in the mantle, $2900\ \text{kg/m}^3$ and
28.4 MPa/km for a basaltic column.

The standard inference chain: assemblage → $P$ → $z$ → $dT/dz$ → tectonic setting.
An andalusite-bearing rock at 600 °C caps $P$ at 310 MPa, so $z \le 11.7$ km and
$dT/dz \ge 51$ °C/km — a contact aureole, not a mountain belt. A
kyanite–sillimanite rock at 660 °C sits at 0.75 GPa, 28.4 km, 23 °C/km — Barrovian
regional metamorphism, and at 1 mm/yr it took 28 Myr to exhume.

*From* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### The rock cycle as a budget

| Arrow | Driver | How common |
|---|---|---|
| magma → igneous | internal heat | universal |
| igneous → sediment | solar + gravity | universal |
| sediment → sedimentary rock | gravity (burial) | universal |
| sedimentary → metamorphic | internal heat + gravity | common — most metamorphic rock has this history |
| metamorphic → magma (migmatite) | internal heat | common in orogenic roots |
| metamorphic → sediment (exhumation) | solar + gravity | common — every shield does it |
| igneous → metamorphic directly | internal heat | common at ridges and aureoles, easy to overlook |
| sediment → magma directly | internal heat | **rare** — needs subduction past the solidus |
| metamorphic → metamorphic (overprinting) | internal heat | rare, and hard to read |

The two engines are wildly unequal in power and not at all unequal in
importance: the Sun delivers $\approx 1.2\times10^{17}\ \text{W}$ against Earth's
internal $4.7\times10^{13}\ \text{W}$ (47 TW), a ratio of about 2,600 — but the
internal heat arrives at 1300 °C and the solar heat arrives at 255 K, and
availability, not power, is what makes rock.

*From* [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md)

### The evidence for drift, and what each piece forces

| Evidence | The observation | What it forces | Its weakness in 1915 |
|---|---|---|---|
| **Fit** | Africa and South America interlock, and markedly better at the **1000 m contour** (the shelf edge) than at the coastline | the true edge of continental crust is the shelf break | shapes alone, eyeballed |
| **Fossils** | *Mesosaurus* (freshwater) in Permian Brazil and southwest Africa; *Glossopteris* across five southern continents | neither could cross an ocean; ranges are continuous only on the reconstruction | land bridges explain it too |
| **Mountain belts** | Appalachians = Caledonides: same age, structural grain, metamorphic history | one orogen, later torn in two | "similar" is a judgement call |
| **Palaeoclimate** | Permian glacial striations radiating from one centre across four continents; coal swamps in Antarctica | those continents sat together over the South Pole | requires the climate belts to have stayed put |

**The seafloor tape recorder** (Hess 1962, Vine–Matthews 1963): crust made at the
ridge, magnetized as it cools through the Curie temperature, carried outward.

$$t(x) = \frac{x}{u} \qquad\Longrightarrow\qquad \text{(i) stripe widths} \propto \text{chron durations}, \quad \text{(ii) the pattern is a \textbf{mirror image} about the axis}$$

Conversion worth having: $1\ \text{km/Myr} = 0.1\ \text{cm/yr}$.

*From* [2.1](lessons/02-01-evidence-for-drift.md)

### The plate-boundary prediction table

Give the boundary type and the plate densities, and everything else follows.

| Boundary | Landform | Quake depths | Volcanism | Diagnostic rock |
|---|---|---|---|---|
| **Mid-ocean ridge** | crest 2–3 km above the abyssal plain; axial valley if slow | **$<15$ km only** | copious, effusive, basaltic | pillow basalt / sheeted dikes / gabbro — the **ophiolite** sequence |
| **Continental rift** | fault-bounded grabens, rift lakes, half-graben tilt blocks | $<20$ km | **bimodal**: alkali basalt *and* rhyolite | basalt + rhyolite, immature arkose, rift-lake sediments |
| **Ocean–ocean convergent** | trench + island arc, often a back-arc basin | **0–670 km**, deepening away from the trench | explosive, basaltic andesite to andesite | andesite, ash tuff; **blueschist** in the wedge |
| **Ocean–continent convergent** | trench + accretionary wedge + forearc basin + continental arc | **0–670 km** | explosive, andesite to dacite/rhyolite | andesite/dacite over granodiorite batholiths |
| **Continent–continent** | double-thickness crust, fold-and-thrust belt, high plateau | mostly $<70$ km, over a **wide** zone | little; local anatectic leucogranite | schist, gneiss, migmatite; ophiolite slivers on the suture |
| **Transform** | linear valley or scarp offsetting older features | $<20$ km | **none** | gouge, mylonite, serpentinite; **no new crust** |

| Layer | Density |
|---|---|
| Continental crust | $\approx 2.7\ \text{g/cm}^3$ |
| Oceanic crust | $\approx 3.0\ \text{g/cm}^3$ |
| Mantle lithosphere | $\approx 3.3\ \text{g/cm}^3$ |
| Asthenosphere | $\approx 3.25\ \text{g/cm}^3$ |

**Half-space cooling** — one law behind ridge height, plate thickness and
subductability ($t$ in Ma):

$$h_{\text{lith}} \approx 10\sqrt{t}\ \text{km} \quad\text{or}\quad L(t) \approx 2.32\sqrt{\kappa t}, \qquad d(t) \approx 2500 + 350\sqrt{t}\ \text{m}$$

**Slab dip from the arc–trench gap**, taking the slab top beneath the volcanic
front at $h = 100$–130 km (use 110):

$$\tan\delta = \frac{h}{L}$$

A steep slab puts its arc close to the trench, a shallow one puts it far inland;
a **flat slab** closes the mantle wedge and leaves a volcanic gap. Age contrast
across a fracture zone: $\Delta t = \text{offset}/v_{1/2}$.

**The global area budget** — new seafloor must equal subducted seafloor:

$$\sum_{\text{ridges}} L_i u_i = \sum_{\text{trenches}} L_j c_j$$

65,000 km of ridge at 5 cm/yr makes $3.25\ \text{km}^2/\text{yr}$; over
$3.0\times10^{8}\ \text{km}^2$ of ocean floor that gives a mean age of 92 Ma, a
maximum of about 184 Ma (**observed 180–200**), and a mean convergence rate of
7.4 cm/yr across 44,000 km of trench (observed 6–8).

*From* [2.2](lessons/02-02-plate-boundaries.md)

### The force budget, and what sets a plate's speed

| Force | Magnitude (N per metre of boundary) | Sign |
|---|---|---|
| **Slab pull** (raw negative buoyancy) | $\mathbf{3}$–$\mathbf{5\times10^{13}}$ | driving |
| Ridge push (gravitational sliding) | $2$–$3.5\times10^{12}$ | driving |
| Basal drag | $\sim 10^{12}$ | **either** |
| Slab viscous + bending resistance | comparable to slab pull | resisting |
| Transform friction, collisional resistance | $\lesssim 10^{12}$ | resisting |

$$\Delta\rho = \rho_m\,\alpha\,\Delta T, \qquad F_{SP} = \Delta\rho\,g\,h\,L_s, \qquad F_{RP} \approx \tfrac{1}{2}(\rho_m - \rho_w)\,g\,\Delta h\,L$$

$h$ = slab thickness, $L_s$ = down-dip slab length, $\Delta h$ = ridge relief
above old seafloor, $L$ = lithospheric thickness. With
$\rho_m = 3300$, $\alpha = 3\times10^{-5}\ \text{K}^{-1}$, $\Delta T = 600$ K,
$h = 100$ km, $L_s = 700$ km: $\Delta\rho \approx 60\ \text{kg/m}^3$ (under 2
percent!), $F_{SP} = 4.1\times10^{13}$, $F_{RP} = 3.4\times10^{12}$ — a **ratio
of 12**. Because $Re \approx 5\times10^{-21}$ there is no inertia:

$$\sum F_{\text{driving}} + \sum F_{\text{resisting}} = 0$$

so the ratio ranks the driving terms and is *not* a net force. The decisive
observation is the speed table: every plate faster than 6 cm/yr (Cocos 8.6,
Pacific 8.0, Nazca 7.6, Philippine 6.4, Indo-Australian 6.0) has a long
subducting edge; every slow one (African 2.1, Antarctic 1.7, South American 1.3,
North American 1.1, Eurasian 0.7) does not. Nazca is 2.7 times smaller than South
America and moves 5.8 times faster.

| Layer | Viscosity (Pa·s) |
|---|---|
| Lithosphere | $10^{23}$–$10^{25}$ |
| **Asthenosphere** | $\mathbf{10^{19}}$–$\mathbf{10^{21}}$ |
| Lower mantle | $10^{21}$–$10^{23}$ |

*From* [2.3](lessons/02-03-driving-mechanism.md)

### Stress, strain and the strength of the crust

$$P = \frac{\sigma_1+\sigma_2+\sigma_3}{3} \quad\text{(confining)}, \qquad \sigma_d = \sigma_1 - \sigma_3 \quad\text{(differential)}$$

$$\sigma = E e \ \ (E \approx 50\text{–}100\ \text{GPa}), \qquad \tau = C + \mu_i \sigma_n \ \ \text{(Coulomb)}, \qquad \dot e = A\,\sigma_d^{\,n} \exp\!\left(-\frac{Q}{RT}\right)$$

with $n \approx 3$ and $Q \approx 150$–500 kJ/mol. **Friction strengthens with
depth, creep weakens with depth**, and where the branches cross is the
brittle–ductile transition (about 13 km, peak strength around 420 MPa).

| Regime | Arrangement | Result |
|---|---|---|
| **Compression** | $\sigma_1$ horizontal, $\sigma_3$ vertical | shortening: folds, reverse and thrust faults |
| **Tension** | $\sigma_1$ vertical, $\sigma_3$ horizontal | stretching: normal faults, rifts |
| **Shear** | $\sigma_1$ and $\sigma_3$ both horizontal | strike-slip faults |

The four controls on brittle versus ductile, in order of importance: **confining
pressure** (the master variable, because it rises with depth), **temperature**
(exponential, and it rises with depth too — which is why the changeover is
sharp), **strain rate** (fast breaks, slow flows), and **rock type and fluids**
(quartz creeps near 300 °C, feldspar near 450 °C).

$$\sigma_v = \rho g z = 26.5\ \text{MPa/km}, \qquad P_f^{\text{hydrostatic}} = 9.81\ \text{MPa/km}, \qquad \lambda = \frac{P_f}{\sigma_v} \approx 0.37$$

**The Hubbert–Rubey paradox** is the standard application: a dry 5 km thrust
sheet can be pushed at most 13 km before it crushes itself, yet real sheets run
100 km and more. Requiring $\tau_b = 10$ MPa instead of 76.5 forces
$\lambda = 0.87$ — near-lithostatic pore pressure — which is why décollements
nucleate in shale and evaporite, the rocks that can hold overpressure.

**Strain rates set the whole scale of the subject**: a plate boundary deforms at
$1.6\times10^{-14}\ \text{s}^{-1}$, a laboratory press at $10^{-5}$ — nearly nine
orders of magnitude apart, so a rock needing 200 MPa in a press may need 20 MPa
over ten million years.

*From* [2.4](lessons/02-04-how-rock-deforms.md)

### Faults and folds: classification, and Anderson's rule

| Vertical stress | Fault type | Crust is | Slip sense | Predicted dip | Observed |
|---|---|---|---|---|---|
| $\sigma_1$ (largest) | **normal** | extending | hanging wall down | $\approx 60^\circ$ | 55–65° |
| $\sigma_2$ (middle) | **strike-slip** | shearing | horizontal | $90^\circ$ | vertical |
| $\sigma_3$ (smallest) | **reverse / thrust** | shortening | hanging wall up | $\approx 30^\circ$ | 20–35° |

The dips are not conventions — they fall out of Mohr–Coulomb. The failure plane
makes an angle $\theta = 45^\circ - \varphi/2$ with $\sigma_1$, and Byerlee's
$\mu_i = 0.6$–0.85 gives $\varphi = 31^\circ$–$40^\circ$, hence
$\theta = 25^\circ$–$30^\circ$. **Reverse** above $45^\circ$ dip, **thrust**
below (commonly 20–30°). Slip components:

$$\text{throw} = s\sin\delta, \qquad \text{heave} = s\cos\delta$$

**Folds.** Anticline = oldest in the core, limbs dip *away*; syncline = youngest
in the core, limbs dip *toward* the hinge; antiform/synform are shape-only terms
for when way-up is unknown. Interlimb tightness: gentle 180–120°, open 120–70°,
close 70–30°, tight 30–0°, isoclinal 0°. A plunging fold's bands close around a
nose, and **the nose of a plunging anticline points in the plunge direction**.
Doubly plunging gives a **dome** (oldest in the centre) or a **basin** (youngest).
Axial-surface attitude runs upright → inclined → overturned (both limbs dip the
same way) → recumbent, and the axial surface is roughly perpendicular to
$\sigma_1$. Shortening from limb dip scales as $1 - \cos\delta$: 40° limbs give
23 percent, 60° limbs give 50 percent.

| Map observation | Candidate structures | How to decide |
|---|---|---|
| **Repeated** section, mirrored, dips reverse across a line | fold | mirror symmetry, no fault contact, ages symmetric about the hinge |
| **Repeated** section, same order, dips unchanged, older on younger | **thrust** | a discrete fault contact with breccia or gouge — a translation, not a reflection |
| **Missing** section | normal fault, **or** an unconformity | a fault trace *cuts across* contacts at an angle; an unconformity parallels bedding and its gap is regionally consistent |
| Units closing around a nose | plunging fold | anticline if the oldest unit is inside the nose |
| Roughly circular concentric bands | dome or basin | oldest in the centre means dome |

**The three-point problem** — strike and dip from three points on a surface, the
workhorse of drill-hole and outcrop data. Fit $z = z_0 - ax - by$ ($x$ east, $y$
north, $z$ up); then

$$\tan\delta = \sqrt{a^2+b^2}, \qquad \theta_{\text{dip}} = \operatorname{atan2}(a,b), \qquad \theta_{\text{strike}} = \theta_{\text{dip}} - 90^\circ$$

*In words: the dip vector is minus the gradient of the surface, its magnitude is
the tangent of the dip and its bearing is the dip direction.*

*From* [2.5](lessons/02-05-folds-faults-structures.md)

### Isostasy, mountain belts and erosion

With $\rho_c = 2.8$ and $\rho_m = 3.3\ \text{g/cm}^3$:

$$r = \frac{\rho_c}{\rho_m - \rho_c}\,h = 5.6\,h, \qquad h + r = \frac{\rho_m}{\rho_m-\rho_c}h = 6.6\,h, \qquad T = T_0 + 6.6\,h$$

*In words: every kilometre of mountain above the plain is held up by 5.6 km of
root below it, so crustal thickness is a linear readout of elevation.* With
$T_0 = 35$ km: Tibet's 5 km of elevation needs a 28 km root and 68 km of crust
(observed Moho 65–75 km).

$$\Delta h = \frac{\rho_m-\rho_c}{\rho_m}\,\Delta e = \frac{\Delta e}{6.6} = 0.152\,\Delta e$$

**Erode a kilometre and the summit falls 152 metres** — the other 848 are handed
back by the root floating up. Confusing $\Delta e$ with $\Delta h$ is the
commonest error in the module, and it is a factor of 6.6. It is also why 30-km
metamorphic rock reaches the surface after only about 4.5 km of lost elevation.

| Stage | What is happening | Example |
|---|---|---|
| Convergence and shortening | thrust stacking, arc or collision | Taiwan (2–4 Ma), Andes, Alps |
| Thickening and metamorphism | crust doubles, root grows, regional metamorphism | Himalaya–Tibet (50 Ma to now) |
| Gravitational collapse | over-thick crust extends, normal faults | Basin and Range, Aegean, north Tibet |
| Erosion and isostatic rebound | 6.6 km removed per km of lost relief | Appalachians (270 Ma), Urals, Caledonides |
| Peneplained shield | root gone, crust normal, topography flat | Trans-Hudson orogen, Canadian Shield (1.8 Ga) |

Three orogen types, each with one diagnostic: **Andean** — active andesitic
volcanoes sitting on the range; **collisional** — a suture with ocean-floor
slivers and *no* arc volcanism once subduction stops; **accretionary** — a
patchwork of terranes.

*From* [2.6](lessons/02-06-mountain-building.md)

### Earthquakes: size, energy, recurrence and probability

$$M_0 = \mu A \bar d, \qquad M_w = \tfrac{2}{3}\left(\log_{10}M_0 - 9.1\right), \qquad \log_{10}E_s = 1.5M + 4.8$$

with $\mu \approx 3\times10^{10}$ Pa, $A$ in m², $\bar d$ in m. **One magnitude
unit is ten times the amplitude and $10^{1.5} = 31.6$ times the energy; two units
is a thousandfold in energy.** Working rules:

$$\log_{10}A \approx M_w - 4.0 \ \ (A\ \text{in km}^2), \qquad \log_{10}N = a - bM \ \ (b \approx 1), \qquad n(t) = \frac{K}{(t+c)^p} \ \ (p \approx 1)$$

so a 10 km patch gives M6, a 1000 km megathrust gives M9, and because
$N(M)E(M) \propto 10^{0.5M}$, **all the smaller events together carry less than
half the energy of the top bin — small earthquakes cannot drain a region.**
Båth's law: the largest aftershock averages 1.2 magnitude units below the
mainshock.

$$T \approx \frac{d}{v}, \qquad P(\text{at least one in } t) = 1 - e^{-t/T}$$

Recurrence intervals are **statistics, not clocks** (Parkfield was forecast by
1993 and arrived in 2004). Building codes invert the Poisson form: 2 percent
exceedance in 50 years is a $-50/\ln(0.98) = 2475$-year return period.

**Shaking at a site**, in order of what actually matters:

| Control | Effect |
|---|---|
| Magnitude | more moment, more energy, longer duration |
| Distance $R$ | peak acceleration falls roughly as $1/R$ near the source |
| Focal depth | deeper spreads energy over a wider area and **reduces** peak shaking |
| **Local site conditions** | **can amplify several-fold relative to the next street** |
| Rupture directivity | motion focused ahead of a propagating rupture |

$$\frac{A_{\text{soft}}}{A_{\text{rock}}} \approx \sqrt{\frac{\rho_{\text{rock}}V_{s,\text{rock}}}{\rho_{\text{soft}}V_{s,\text{soft}}}}, \qquad T_{\text{site}} = \frac{4H}{V_s}, \qquad T_{\text{building}} \approx 0.1N$$

Tsunami: needs **vertical** seafloor displacement, so thrusts make them and pure
strike-slip largely does not. It travels at $c = \sqrt{gh}$ (185 m/s, 667 km/h in
3500 m of water) and shoals by Green's law, amplitude $\propto h^{-1/4}$ —
a factor of 4.3 from 3500 m to 10 m, before run-up adds another 2–3.

*From* [2.7](lessons/02-07-earthquakes-seismic-hazard.md)

### Volcanoes: composition to eruptive style to hazard

| Magma | $\text{SiO}_2$ | Eruption $T$ | Viscosity | Style | Landform |
|---|---|---|---|---|---|
| Basalt | ~50 percent | 1100–1200 °C | $\sim10^{2}\ \text{Pa}\cdot\text{s}$ | effusive | shield, cinder cone, flood basalt |
| Andesite | ~60 percent | 950–1100 °C | $\sim10^{5}\ \text{Pa}\cdot\text{s}$ | explosive | stratovolcano |
| Dacite | ~65 percent | 850–1000 °C | $\sim10^{7}\ \text{Pa}\cdot\text{s}$ | very explosive | dome, stratovolcano |
| Rhyolite | ~73 percent | 750–900 °C | $\sim10^{9}$–$10^{12}\ \text{Pa}\cdot\text{s}$ | catastrophic | dome, caldera |

**Five percentage points of silica buys two to three orders of magnitude of
viscosity.** The machinery:

$$u = \frac{2}{9}\frac{\Delta\rho\,g\,r^2}{\eta}, \qquad C_{\text{sat}} \approx 0.41\sqrt{P}\ \ (\text{wt \%}, P \text{ in MPa}), \qquad \phi = \frac{V_{\text{gas}}}{V_{\text{gas}}+V_{\text{melt}}}$$

A 1 mm bubble rises 5 m/day through basalt and 0.2 mm/yr through rhyolite — a
factor of $10^7$, which is the whole difference between venting and exploding.
Fragmentation at $\phi \approx 0.75$–0.80, typically in the last few hundred
metres of conduit; exit velocity 100–300 m/s.

Lava has a **yield strength**, so it stops on a slope rather than thinning
forever:

$$\sin\theta_{\min} = \frac{\tau_0}{\rho g h}$$

$\tau_0 \sim 10^2$ Pa for basalt (a 3 m flow keeps going on $0.22^\circ$) and
$\sim 10^5$ Pa for silicic lava (a 30 m flow needs $8^\circ$). **VEI**:
$V \ge 10^{n+4}\ \text{m}^3$, so each step is $\times 10$ in volume — VEI 5 = 1,
6 = 10, 7 = 100, 8 = 1000 km³.

| Hazard | Share of deaths | Speed / reach | What it does |
|---|---|---|---|
| **Pyroclastic density currents** | ~1 in 3 | 100–300 km/h, 5–30 km | 300–700 °C ground-hugging avalanche; **no one in the path survives** |
| **Volcanic tsunami** | ~1 in 5 | ocean-crossing | flank or caldera collapse (Krakatau 1883, ~36,000) |
| **Lahars** | ~1 in 5 | 30–60 km/h, **50–100+ km** | wet concrete down river valleys, far beyond any "volcanic" zone |
| **Famine and disease after** | comparable to all direct causes | continental | Tambora 1815: ~10,000 direct, 60,000+ after |
| Ash fall | small but widespread | regional | 10 cm wet ash $\approx 120\ \text{kg/m}^2$ — at or past a light roof's design load |
| Volcanic gases | small, occasionally acute | local to global | Lake Nyos 1986 (1,746 dead); Laki 1783 killed a fifth of Iceland |
| Lava flows | **under 1 percent** | walking pace | destroys property; you can leave |

Deposit diagnostics, which is how you read a section: **well sorted and mantling
topography at constant thickness** = ash/pumice fall (it fell out of the sky);
**unsorted, massive, valley-filling and ridge-thinning** = pyroclastic density
current; **unsorted but with rounded clasts, muddy matrix, flat top** = lahar.

*From* [2.8](lessons/02-08-volcanoes-volcanic-hazards.md)

### Weathering: rates, reactions and soils

$$A = 6L^2 n, \qquad \mathrm{SSA} = \frac{6}{\rho d}, \qquad k \propto e^{-E_a/RT}$$

*In words: breaking a block into $n$ pieces per edge multiplies its surface area
by exactly $n$ and its volume not at all.* A 1 mm quartz grain has
$2.3\ \text{m}^2/\text{kg}$; a 1 µm clay platelet has $2260$ — a thousandfold. On
temperature, $E_a \approx 60$ kJ/mol gives a factor of **5.7 from 5 °C to 25 °C**.

| Mineral | Lifetime of a 1 mm crystal (pH 5, 25 °C) |
|---|---|
| anorthite (Ca-plagioclase) | 112 years |
| forsterite (Mg-olivine) | 2,300 years |
| diopside (pyroxene) | 6,800 years |
| albite (Na-plagioclase) | 80,000 years |
| microcline (K-feldspar) | 921,000 years |
| muscovite | 2.7 million years |
| quartz | 34 million years |

Field rates run one to three orders slower than these lab extrapolations — **the
ranking survives, the absolute numbers do not.** The four reactions worth having:

$$\text{CaCO}_3 + \text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{Ca}^{2+} + 2\text{HCO}_3^- \quad \text{(dissolution — reversible, hence caves \emph{and} stalactites)}$$

$$2\,\text{Fe}_2\text{SiO}_4 + \text{O}_2 \longrightarrow 2\,\text{Fe}_2\text{O}_3 + 2\,\text{SiO}_2 \quad \text{(oxidation — olivine rusts)}$$

$$4\,\text{FeS}_2 + 15\,\text{O}_2 + 14\,\text{H}_2\text{O} \longrightarrow 4\,\text{Fe(OH)}_3 + 8\,\text{H}_2\text{SO}_4 \quad \text{(pyrite — acid mine drainage)}$$

plus [hydrolysis](#hydrolysis). Acidity comes from dissolved $\text{CO}_2$, and
$[\text{H}^+] = \sqrt{K_1 K_H P_{\text{CO}_2}}$ — so a hundredfold rise in
$P_{\text{CO}_2}$ is exactly one pH unit, which is why soil air at 1–10 percent
$\text{CO}_2$ (pH 4.6) attacks rock far faster than rain (pH 5.6).

| Horizon | What it is | What it records |
|---|---|---|
| **O** | organic litter, undecomposed | vegetation and how fast it rots |
| **A** | topsoil: mineral grains plus humus, dark | biological activity |
| **E** | **eluvial** — leached; clay, Fe, Al stripped out; pale | strong downward leaching |
| **B** | **illuvial** — accumulation of what E lost; clay and Fe/Al oxides, often red | how much has moved, and how far |
| **C** | broken, chemically rotted parent rock (saprolite) | the protolith |
| **R** | fresh bedrock | — |

**Soil by climate:** **podzol** (cool, wet, conifer) — organic acids chelate Fe
and Al out of a bleached E into a rust-coloured B; **laterite/oxisol** (hot, wet)
— leaching so intense that even silica leaves, giving red Fe/Al oxides and, when
aluminium is concentrated enough, **bauxite**; **aridisol** (dry) — evaporation
exceeds rainfall so net water movement is *upward* and $\text{CaCO}_3$
precipitates as **caliche** in the B horizon.

*From* [3.1](lessons/03-01-weathering-soils.md)

### Slope stability: the infinite-slope model

For a slab of thickness $z$ (measured vertically) on a slope $\beta$:

$$\sigma_n = \rho g z\cos^2\beta, \qquad \tau = \rho g z\sin\beta\cos\beta, \qquad \tau_{\text{strength}} = c + (\sigma_n - u)\tan\phi$$

$$F = \frac{c + (\rho g z\cos^2\beta - u)\tan\phi}{\rho g z\sin\beta\cos\beta}$$

**Dry and cohesionless, everything cancels but the angles:**

$$F = \frac{\tan\phi}{\tan\beta} \qquad\Longrightarrow\qquad \text{failure at } \beta = \phi$$

Thickness gone, density gone, $g$ gone — **and that result *is* the angle of
repose.** With slope-parallel seepage at height $mz$, $u = m\rho_w g z\cos^2\beta$:

$$F = \left(1 - m\,\frac{\rho_w}{\rho}\right)\frac{\tan\phi}{\tan\beta}$$

*In words: the water table eats a fixed fraction of your safety margin, in
proportion to how high it stands.* For typical soil ($\rho = 2\rho_w$), **full
saturation halves $F$** and the critical angle falls from $\phi$ to
$\arctan(0.5\tan\phi)$ — 35° down to 19°. Shaking adds a pseudo-static term, and
a modest $k_h = 0.2$ takes $F$ from 1.32 to 0.86:

$$F = \frac{(\cos\beta - k_h\sin\beta)\tan\phi}{\sin\beta + k_h\cos\beta}$$

Damp sand stands vertically only because of **apparent cohesion** from meniscus
suction, and only at small scale — cohesion is a fixed stress while both driving
and frictional terms grow with $z$:

$$s = -u \approx \frac{2\sigma_s}{r}, \qquad c_{\text{app}} \approx \chi\,s\,\tan\phi$$

$\sigma_s = 0.072$ N/m, $r \approx 0.1d$. A 0.3 mm sand gives $s = 4.8$ kPa and
$c_{\text{app}} \approx 1.5$ kPa — enough for a 0.33 m sandcastle wall at 60°, and
nothing at 30 m. **Back-analysis** exploits $F=1$: a failure that happened is a
full-scale in-situ strength test.

| Material | Angle of repose |
|---|---|
| Well-rounded, well-sorted sand (dune, beach) | $30$–$32^\circ$ |
| Angular sand and gravel | $34$–$37^\circ$ |
| Angular, poorly sorted talus and rockfall debris | $37$–$42^\circ$ |

**Angularity and poor sorting both raise it**, because interlocked grains must
ride up over one another to move.

*From* [3.2](lessons/03-02-mass-wasting-slope-stability.md)

### Mass-wasting classification — how fast, and how wet

Twelve orders of magnitude of velocity, from creep at $10^{-10}$ m/s to rockfall
at $10^2$.

| Type | Material and water | Speed | Diagnostic |
|---|---|---|---|
| **Creep** | soil, dry to damp | ~cm/yr | tilted fence posts and gravestones, curved tree trunks — **no failure plane at all** |
| **Solifluction** | saturated soil over frozen ground | slow | lobate sheets in periglacial ground |
| **Translational slide** | coherent mass on a **planar** surface (bedding, joint, soil–bedrock contact) | fast | the infinite-slope case; the common rainfall-triggered failure |
| **Rotational slide (slump)** | thick homogeneous material, **spoon-shaped** surface | fast | **back-tilted head block** and a curved crown scarp |
| **Earthflow** | wet, internally deforming | cm/day | no single failure plane; lobate toe |
| **Debris flow** | wet-concrete slurry with boulders | m/s | follows valleys **tens of km**; a **lahar** is the ash version |
| **Fall** | dry rock, free fall then bouncing | free-fall | **talus** cone at the angle of repose |

**Creep is invisible, ubiquitous and continuous, and integrated over a landscape
it moves more material than all the spectacular failures put together.** The
landslide makes the news; the creep makes the hillslope.

*From* [3.2](lessons/03-02-mass-wasting-slope-stability.md)

### Rivers: flow, erosion and floods

$$Q = Av \ \ (A = \text{width} \times \text{depth}), \qquad v = \frac{1}{n}R^{2/3}S^{1/2}, \qquad R = \frac{A}{P}$$

$$\tau_0 = \rho g h S, \qquad u_* = \sqrt{\tau_0/\rho}, \qquad \delta_v \approx \frac{5\nu}{u_*}, \qquad \tau^* = \frac{\tau_0}{(\rho_s - \rho)g d} \ge \tau^*_c \approx 0.045\text{–}0.06$$

$$w_s = \frac{(\rho_s-\rho)g d^2}{18\mu} \quad (\mathrm{Re} \ll 1), \qquad w_s \to \sqrt{\tfrac{4(s-1)gd}{3C_D}} \quad (d \gtrsim 0.1\ \text{mm})$$

The **Hjulström** picture that all of this assembles into: a U-shaped erosion
curve with its minimum at fine sand, 0.2–0.5 mm, at about 20 cm/s; the right limb
rises as $u_c \propto \sqrt{d}$ (Shields); the left limb rises much more steeply
into silt and clay, where 100–200 cm/s is needed — and a separate settling curve
far below divides erosion from transport from deposition.

| Load | What it is |
|---|---|
| **Bed load** | rolling, sliding, hopping in contact with the bed — the abrading fraction |
| **Suspended load** | held aloft by turbulence — usually the bulk of the mass |
| **Dissolved load** | ions in solution — the direct product of [3.1](lessons/03-01-weathering-soils.md)'s hydrolysis |

| Pattern | Looks like | What it tells you |
|---|---|---|
| **Dendritic** | tree branches, random angles | uniform, flat-lying, homogeneous rock — no structural control |
| **Trellis** | long parallel trunks, short right-angle tributaries | tilted or folded alternating resistant and weak beds |
| **Radial** | spokes off a high point | a dome or a volcanic cone |
| **Rectangular** | right-angle bends in the trunk itself | flow guided by two joint or fault sets |

A **superposed** stream was let down onto a structure from a since-stripped cover
and ignores it; an **antecedent** stream was already there and sawed through as
the structure rose. **Stream capture** leaves a beheaded valley far too large for
its trickle, a **wind gap**, and an elbow of capture.

**Meandering** is driven by helical flow: inertia piles water on the outside of a
bend, the pressure gradient drives near-bed water *inward*, so the outer bank
erodes (**cut bank**) and the coarse load drops inside (**point bar** — the source
of a great deal of the world's cross-bedding). Erosion and deposition are paired,
so the channel migrates sideways at **roughly constant width**. Sinuosity (channel
length over valley length) above about 1.5 counts as meandering. **Braiding is a
symptom of sediment overload** plus erodible banks and variable discharge — not
of steepness.

$$P(\text{at least one exceedance in } n \text{ years}) = 1 - \left(1 - \tfrac{1}{T}\right)^{n}$$

A 100-year flood has a 26 percent chance of appearing in any 30 years and 53
percent in 75. $T$ is the mean of a geometric waiting time whose **mode is one
year** — the single most likely wait for the next hundred-year flood is next year.
And the whole estimate assumes **stationarity**, which urbanisation and a changing
climate both break.

*From* [3.3](lessons/03-03-rivers-landscape-evolution.md)

### Glaciers: balance, flow and the landform key

$$B \approx \bar b_c A_c + \bar b_a A_a, \qquad \tau_r \approx \frac{H_{\max}}{|b_{\text{terminus}}|}, \qquad \tau_b = \rho_i g H\sin\alpha$$

$$\dot\varepsilon = A\tau^n\ (n\approx3) \quad\Longrightarrow\quad u_s = \frac{2A}{n+1}(\rho_i g\sin\alpha)^n H^{n+1} \propto H^4\sin^3\alpha$$

Basal driving stress depends on **thickness and ice-surface slope, nothing else**,
and sits at 50–150 kPa (about one bar) on almost every glacier on Earth. Glen's
law is strongly nonlinear: double the stress and the strain rate goes up about
eightfold, and because $u_s \propto H^4$, a glacier that thins by a third slows to
a fifth of its speed. Ice densities: fresh snow ~100, firn 400–830, glacier ice
917 kg/m³. The brittle–ductile transition in ice is at about **30 m** — 1/400 of
the crustal depth, which is why crevasses are shallow.

$$d = \frac{\rho_i}{\rho_m}H_i \approx 0.28\,H_i, \qquad \frac{dd}{dt} = -\frac{d}{\tau} \;\Longrightarrow\; d(t) = d_0e^{-t/\tau}$$

with $\tau$ a few thousand years. A 3 km Laurentide load depressed the crust
834 m; Hudson Bay is still rising at 10–13 mm/yr and its raised beaches climb
over 200 m.

| You see | It is | It proves |
|---|---|---|
| Parallel scratches and polish on bedrock | striations | ice flowed along that **line** (not which way) |
| Asymmetric knob: smooth up-ice, ragged down-ice | roche moutonnée | abrasion then plucking — gives the **direction** |
| Streamlined hill, blunt end up-ice | drumlin | flow direction, and a deforming soft bed |
| Amphitheatre bowl at a valley head | cirque | a glacier nucleated here |
| Knife ridge / pyramidal peak between cirques | arête / horn | cirques cutting back into one another |
| Parabolic (U) cross-section, truncated spurs | glacial trough | ice, not a river, shaped this valley |
| Tributary entering high on the wall | hanging valley | the trunk glacier was thicker and cut deeper |
| Trough floor below sea level behind a shallow sill | fjord / overdeepening | erosion below base level — **only ice does this** |
| Unsorted clay-to-boulder mix, faceted striated clasts | **till** | deposited directly by ice |
| Boulder of a rock type absent for tens of km | erratic | transport direction, traceable to source |
| Ridge of till at a former margin | moraine (terminal, recessional, lateral, medial) | the terminus **stood still** here long enough |
| Sorted cross-bedded sand and gravel in braided sheets | outwash | meltwater, not ice, deposited it |
| Sinuous sorted-gravel ridge, sometimes running uphill | esker | a **pressurized** subglacial meltwater tunnel |
| Enclosed depression in outwash, often a pond | kettle | a buried ice block melted out |
| Rhythmic couplets of pale silt and dark clay | **varves** | one couplet = one year in a proglacial lake |

| Parameter | What varies | Range | Period |
|---|---|---|---|
| **Eccentricity** $e$ | shape of the orbit | 0.000–0.058 (now 0.0167) | ~100 kyr and ~405 kyr |
| **Obliquity** | axial tilt | $22.1^\circ$–$24.5^\circ$ (now 23.44°) | ~41 kyr |
| **Precession** | tilt direction relative to perihelion | full circuit | ~23 kyr and ~19 kyr |

Ice cores show $\text{CO}_2$ falling 280 → 180 ppm into every glacial, and the
**Mid-Pleistocene Transition** (1.25–0.7 Ma) switched the rhythm from 41 kyr to
100 kyr with *no change in the orbital forcing* — still unexplained.

*From* [3.4](lessons/03-04-glaciers-ice-ages.md)

### Wind, dunes and coasts

$$u_{*t} = A\sqrt{\frac{(\rho_s-\rho_a)gd}{\rho_a}} \ (A \approx 0.1), \qquad u(z) = \frac{u_*}{\kappa}\ln\frac{z}{z_0}, \qquad w_s < u_* \Rightarrow \text{suspended}$$

$$L \approx U\frac{H}{w_s} \qquad (\text{and } w_s \propto d^2, \text{ so halving the grain quadruples the range})$$

Air is about 800 times less dense than water, so wind must blow roughly 28 times
faster to move the same grain — and the buoyancy-corrected density contrast is
1.65 in water against ~2200 in air, which is why aeolian sorting is the most
extreme on Earth.

| Grain size | Fate in wind | Result |
|---|---|---|
| Gravel, $>2\ \text{mm}$ | never moves | **deflation lag** — a one-grain pebble armour, i.e. *desert pavement* |
| Sand, 0.06–2 mm | **saltation**, hops below about 1 m | stays local; builds and migrates *dunes*; makes *ventifacts* in the lowest metre |
| Silt and clay, $<0.06\ \text{mm}$ | **suspension** | silt lands hundreds of km downwind as *loess*; clay crosses oceans |

Worked: 0.25 mm sand needs $u_* = 0.23$ m/s, a 5.4 m/s wind at 10 m; 4 mm
granules need 21 m/s. Silt at 0.03 mm lofted to 2 km travels **330 km** — the
loess belt; clay at 0.002 mm stays up 72 days and travels $7.5\times10^4$ km.

**Dune shape is a two-variable prediction, not a taxonomy** — sand supply against
wind directional variability: low supply plus one direction gives **barchans**
(horns pointing downwind); abundant supply plus one direction gives **transverse**
ridges; two competing directions give **linear (seif)** dunes along the resultant;
many directions give **star** dunes that grow upward instead of migrating.
**Foresets dip downwind**, so the dip azimuth of ancient aeolian cross-bedding
*is* the palaeowind. Dunes migrate at $c \approx q/(\gamma h)$ with
$\gamma \approx 0.5$–0.7, so **small dunes move faster than large ones**.

| | **Wind (desert)** | **Waves (coast)** |
|---|---|---|
| Fluid density | $1.2\ \text{kg/m}^3$ | $1025\ \text{kg/m}^3$ |
| Coarsest load | sand, ~2 mm | boulders, in a storm |
| Sorting produced | extreme — fines exported, coarse left as lag | good, but far less extreme |
| Transport direction | the resultant wind | shore-parallel, from residual obliquity |
| The landform is | a conveyor with a slip face (dune) | a conveyor along the shore (drift cell) |
| Diagnostic deposit | thick, steep, frosted, ultra-sorted cross-beds | well-rounded sand, shore-parallel bars, shell debris |
| How humans break it | cut the sand supply | cut $Q$ with a jetty, dam or seawall |

Waves refract by Snell's law with $c = \sqrt{gh}$, so crests turn shore-parallel,
rays converge on headlands and diverge in bays, and **coastlines straighten**.
Erosional suite of a headland: sea cliff, wave-cut platform, cave, arch, stack.
Constructional suite of the drift cell: **spit** where the shore bends, **barrier
island** where a spit is breached or a bar driven landward, **tombolo** in an
island's wave shadow, **beach** where supply and removal balance.

$$\frac{\Delta V}{\Delta t} = Q_{\text{in}} - Q_{\text{out}} + \text{(river and cliff supply)} - \text{(offshore and dune losses)}, \qquad r = \frac{\Delta Q}{L\,h_c}$$

with $h_c$ (depth of closure) 6–10 m. A jetty that intercepts 63,000 m³/yr along
12 km of shore drives 0.66 m/yr of retreat — 33 m in fifty years. Marine terraces
date uplift: $E = Ut + S$, so a 106 m terrace cut 125 kyr ago when sea level was
6 m higher gives $U = 0.8$ mm/yr.

**Aeolian versus fluvial cross-bedding:** aeolian sets are metres to tens of
metres thick, dip at or near the 34° repose angle, and the grains are **frosted**,
exceptionally well rounded and almost mud-free.

*From* [3.5](lessons/03-05-deserts-wind-coasts.md)

### Groundwater: Darcy, aquifers and karst

$$n = S_y + S_r, \qquad h = z + \frac{p}{\rho_w g}, \qquad Q = -KA\frac{dh}{dl}, \qquad K = \frac{k\rho_w g}{\mu}$$

$A$ is the **gross** cross-sectional area, grains included. Darcy's law holds only
while $\mathrm{Re} = \rho_w q d/\mu \lesssim 1$–10 (ordinary aquifers sit at
$10^{-2}$). Away from wells and recharge the steady head field satisfies
$\nabla^2 h = 0$, so head contours are equipotentials and flow lines cross them at
right angles.

| Material | $K$ (m/day) | $k$ (m²) |
|---|---|---|
| Cavernous limestone, clean gravel | $10^{3}$–$10^{5}$ | $10^{-9}$–$10^{-7}$ |
| Clean sand | $1$–$10^{3}$ | $10^{-12}$–$10^{-9}$ |
| Silty sand, fine sandstone | $10^{-2}$–$1$ | $10^{-14}$–$10^{-12}$ |
| Silt, loess, glacial till | $10^{-4}$–$10^{-2}$ | $10^{-16}$–$10^{-14}$ |
| Marine clay, shale | $10^{-8}$–$10^{-4}$ | $10^{-20}$–$10^{-16}$ |
| Unfractured granite | $10^{-8}$–$10^{-5}$ | $10^{-20}$–$10^{-17}$ |

**Thirteen orders of magnitude.** Rock density varies by a factor of two and
strength by perhaps three; $K$ varies by $10^{13}$, which is why hydrogeology is
about finding the one unit that matters.

| | Unconfined aquifer | Confined aquifer |
|---|---|---|
| Upper boundary | the water table itself | an overlying aquitard |
| Water level in a well | the water table | the **potentiometric surface** |
| Storage coefficient | $S \approx S_y \approx 0.05$–$0.30$ | $S \approx 10^{-5}$–$10^{-3}$ |
| Water comes from | draining pores | expansion of water, compression of the matrix |
| Recharged | directly from above | only where the aquifer outcrops |

$$Q = \frac{2\pi K b\,(h_2-h_1)}{\ln(r_2/r_1)} \quad \text{(Thiem — the cone of depression)}$$

$$\rho_f g(h+z) = \rho_s g z \;\Longrightarrow\; z = \frac{\rho_f}{\rho_s-\rho_f}h \approx 40\,h \quad \text{(Ghyben–Herzberg)}$$

*In words: for every metre the water table stands above sea level, fresh water
extends about forty metres below it — so drop the table one metre and the salt
water rises forty.* Lowering head also raises grain-to-grain stress by
$\rho_w g\,\Delta h$ (effective stress, from
[2.4](lessons/02-04-how-rock-deforms.md)), which is the subsidence mechanism.

$$\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{H}_2\text{CO}_3, \qquad \text{CaCO}_3 + \text{H}_2\text{CO}_3 \rightleftharpoons \text{Ca}^{2+} + 2\,\text{HCO}_3^-$$

Soil-zone $\text{CO}_2$ runs 10–100 times atmospheric, which is what drives the
reaction rightward into caves, sinkholes, swallow holes and karst springs;
degassing in an air-filled cave runs it leftward into speleothems. Draining a
cave also removes buoyant support from its roof: limestone weighs 14.7 kN/m³
submerged and 24.5 dry, **a 67 percent increase in the load the roof carries** —
which is why pumping triggers cover-collapse sinkholes.

*From* [3.6](lessons/03-06-groundwater-aquifers-karst.md)

### Relative dating: seven principles and their failure modes

| Principle | The logic | The failure mode |
|---|---|---|
| **Superposition** | younger is on top in an undisturbed pile | overturning and thrust repetition — fix with **way-up indicators**, which are internal to the bed |
| **Original horizontality** | a dipping bed has been tilted since deposition | **primary dips are real** — aeolian foresets reach 30–34°, fan beds up to 10° |
| **Lateral continuity** | matching beds across a canyon were once one bed | **facies change** — one time-plane can be limestone offshore and sandstone nearshore |
| **Cross-cutting** | the cutter is younger; the strongest principle in the set | reactivated faults date the *last* slip; a **sill** can masquerade as a bed |
| **Inclusions** | a clast is older than its host | confusing a clast with an **apophysis** — clasts are rounded and isolated, apophyses angular and, traced far enough, connected into a network |
| **Baked contacts** | an intrusion bakes **both** sides; a flow bakes only the floor | thin, cool or refractory hosts bake feebly — corroborate with chilled margins and xenoliths of the *overlying* unit |
| **Faunal succession** | assemblages follow a definite, worldwide, **non-repeating** order | **reworked** fossils (make rock look older, never younger), **facies control** (absence = wrong environment, not wrong time), **provincialism** |

**Relative dating gives order and nothing else** — never duration, never rate,
never how long an unconformity took. That gap is the entire reason
[4.2](lessons/04-02-radiometric-dating.md) exists.

| Type | Below | Above | Events it demands | How you spot it |
|---|---|---|---|---|
| **Angular unconformity** | tilted or folded strata, truncated | flat-lying strata | deposit → deform → uplift → erode → subside → deposit | obvious: discordant dips |
| **Nonconformity** | igneous or metamorphic rock | sedimentary strata | crystallize or metamorphose at depth → uplift **kilometres** → erode → deposit | obvious in kind, but it hides a huge exhumation: the rock below formed at 10–20 km |
| **Disconformity** | strata parallel to those above | parallel strata | deposit → pause and erode → deposit | **the hard one** — betrayed by erosional relief, channels, a basal lag of reworked clasts, palaeosols, borings, a mineral crust, or only by the fossils |

*From* [4.1](lessons/04-01-relative-dating-unconformities.md)

### Radiometric dating: the equations

$$\frac{dN}{dt} = -\lambda N \;\Longrightarrow\; N(t) = N_0e^{-\lambda t}, \qquad t_{1/2} = \frac{\ln 2}{\lambda}$$

$$t = \frac{1}{\lambda}\ln\!\left(\frac{N_0}{N}\right) \quad \text{(textbook, and nearly useless — } N_0 \text{ is what you cannot measure)}$$

$$t = \frac{1}{\lambda}\ln\!\left(1 + \frac{D^*}{N}\right) \quad \text{(the field form — today's daughter-to-parent ratio, no starting amount needed)}$$

$$D = D_0 + P\left(e^{\lambda t}-1\right) \quad\Longrightarrow\quad \frac{D}{D_s} = \left(\frac{D}{D_s}\right)_{\!0} + \frac{P}{D_s}\left(e^{\lambda t}-1\right), \qquad t = \frac{\ln(1+m)}{\lambda}$$

For $^{40}\text{K}$ only about 10.5 percent of decays go to argon, so a
**branching factor** is mandatory (omitting it turns 164 Ma into 17.9 Ma):

$$t = \frac{1}{\lambda}\ln\!\left(1 + \frac{\lambda}{\lambda_{\text{EC}}}\cdot\frac{{}^{40}\text{Ar}^*}{{}^{40}\text{K}}\right), \qquad \frac{\lambda}{\lambda_{\text{EC}}} = \frac{5.543}{0.581} = 9.5405$$

**Three assumptions, and they are the three ways a date goes wrong:** (1) you
know the initial daughter — the isochron removes this; (2) the system stayed
closed — closure temperature's department; (3) $\lambda$ is accurately known —
and for $^{87}\text{Rb}$ and $^{40}\text{K}$ it carries about 1 percent
uncertainty, so a 1.2 Ga Rb–Sr age is accurate to about $\pm 12$ Myr however
precise the mass spectrometry. **Precision is not accuracy.**

| System | Parent → daughter | Half-life | Decay constant (yr⁻¹) | Best used for |
|---|---|---|---|---|
| U–Pb | $^{238}\text{U}\to{}^{206}\text{Pb}$ | 4.47 Ga | $1.55125\times10^{-10}$ | zircon: igneous crystallization, detrital provenance, the deep timescale |
| U–Pb | $^{235}\text{U}\to{}^{207}\text{Pb}$ | 0.704 Ga | $9.8485\times10^{-10}$ | the second clock that makes concordia possible |
| K–Ar / Ar–Ar | $^{40}\text{K}\to{}^{40}\text{Ar}$ | 1.25 Ga | $5.543\times10^{-10}$ (total); $0.581\times10^{-10}$ EC branch | volcanic ash and lavas, cooling histories, hominin sites |
| Rb–Sr | $^{87}\text{Rb}\to{}^{87}\text{Sr}$ | 49.6 Ga | $1.397\times10^{-11}$ | whole-rock and mineral isochrons on granites; source tracing |
| Sm–Nd | $^{147}\text{Sm}\to{}^{143}\text{Nd}$ | 106 Ga | — | garnet growth, meteorites, mantle versus crust |
| $^{14}\text{C}$ | $^{14}\text{C}\to{}^{14}\text{N}$ | 5730 yr | — | organic carbon, the last 50,000 years (ten half-lives = 57 kyr) |

### The thermochronometer ladder

One sample, several minerals, one cooling curve — and hence an exhumation
history.

| Chronometer | $T_c$ | What its age means |
|---|---|---|
| U–Pb, zircon | $>900\ ^\circ\text{C}$ | crystallization — the zircon essentially never resets |
| Sm–Nd, garnet | $\sim700\ ^\circ\text{C}$ | growth of garnet during metamorphism |
| Ar–Ar, hornblende | $\sim525\ ^\circ\text{C}$ | cooling of the mid crust |
| Rb–Sr, muscovite | $\sim500\ ^\circ\text{C}$ | same window, different element |
| Ar–Ar, biotite | $\sim300\ ^\circ\text{C}$ | cooling through roughly 11 km depth |
| Zircon fission track | $\sim240\ ^\circ\text{C}$ | upper-crustal cooling |
| Apatite fission track | $\sim110\ ^\circ\text{C}$ | the last 3–4 km of exhumation |
| Apatite (U–Th)/He | $\sim70\ ^\circ\text{C}$ | the last 2 km — landscape scale |

$$\text{exhumation rate} = \frac{\Delta T/\Delta t}{dT/dz}, \qquad 1\ \text{km/Myr} = 1\ \text{mm/yr exactly}$$

Valid **only for the low-temperature legs** — a fresh pluton cools fast because
it is dumping heat into cold country rock, not because it is rising.

*From* [4.2](lessons/04-02-radiometric-dating.md)

### The geologic timescale

| Time unit (geochronology) | Rock unit (chronostratigraphy) | Typical span | Example |
|---|---|---|---|
| Eon | Eonothem | $10^{8}$–$10^{9}\ \text{yr}$ | Phanerozoic |
| Era | Erathem | $10^{8}\ \text{yr}$ | Mesozoic |
| Period | System | $10^{7}\ \text{yr}$ | Jurassic |
| Epoch | Series | $10^{6}$–$10^{7}\ \text{yr}$ | Late Jurassic (rock: **Upper** Jurassic) |
| Age | Stage | $10^{5}$–$10^{6}\ \text{yr}$ | Kimmeridgian |

**Upper/Lower for rock, Late/Early for time**: "Lower Jurassic mudstone deposited
in Early Jurassic time" is the correct pairing.

| Eon / Era | Period | Base (Ma) | What defines the base |
|---|---|---|---|
| **Hadean** | — | 4567 | accretion; no rocks, only recycled mineral grains |
| **Archean** | — | 4030 | a GSSA; the age of the oldest intact rock |
| **Proterozoic** | — | 2500 | a **GSSA** — an arbitrary round number, because nothing correlatable exists |
| | Ediacaran | 635 | the one Precambrian boundary defined by a rock: the cap carbonate above the Marinoan glacials |
| **Phanerozoic · Paleozoic** | Cambrian | **538.8** | the trace fossil *Treptichnus pedum* (moved from about 570) |
| | Ordovician | 485.4 | conodont FAD |
| | Silurian | 443.8 | after the **end-Ordovician** extinction |
| | Devonian | 419.2 | graptolite FAD |
| | Carboniferous | 358.9 | conodont FAD, after the late-Devonian extinction |
| | Permian | 298.9 | conodont FAD |
| **Mesozoic** | Triassic | **251.902 ± 0.024** | after the **end-Permian** extinction — the largest |
| | Jurassic | **201.4** | after the **end-Triassic** extinction (GSSP at Kuhjoch, Austria; it has moved twice in twenty years) |
| | Cretaceous | ~145.0 | ammonite/calpionellid criteria; the period runs 79 Myr |
| **Cenozoic** | Paleogene | **66.043 ± 0.043** | the **end-Cretaceous** extinction — GSSP is the base of the boundary clay at El Kef, Tunisia, at the iridium anomaly |
| | Neogene | 23.03 | |
| | Quaternary | 2.58 | onset of Northern Hemisphere glaciation; 2.6 Myr so far |

**Every number in that column is a versioned estimate, not a fact.** The
end-Permian was "245 Ma" in 1980s textbooks and the K–Pg has been 65, 65.5 and
66.043. Four of the twelve Phanerozoic period boundaries are extinction
boundaries — end-Ordovician, end-Permian, end-Triassic, end-Cretaceous — because
**the periods were laid out where the fossils changed**, in nineteenth-century
European sections, by people who could not date anything. Unequal lengths are the
signature of an event-based scheme, not sloppiness: the Cretaceous ran 79 Myr and
the Quaternary has managed 2.6.

| | Duration | Fraction of Earth history |
|---|---|---|
| Precambrian (Hadean + Archean + Proterozoic) | $4001\ \text{Myr}$ | $88.1$ percent |
| Phanerozoic | $538.8\ \text{Myr}$ | $11.9$ percent |
| Cenozoic | $66.0\ \text{Myr}$ | $1.45$ percent |
| Since the last glacial ended | $0.0117\ \text{Myr}$ | $2.6\times10^{-6}$ |

**Correlation and calibration.** An index fossil must be geographically
widespread, abundant, **short-ranged** (this alone sets your resolution), and
distinctive. Resolution comes from *overlaps*: $n$ staggered taxa give at most
$2n-1$ distinguishable concurrent-range zones. And **no boundary is ever dated
directly** — you locate it biostratigraphically, date ash beds bracketing it
(U–Pb on zircon, Ar–Ar on sanidine), interpolate on an assumed sedimentation
rate, and combine the analytical and interpolation uncertainties in quadrature.
Roughly half the uncertainty on a boundary age comes from the interpolation
model, not the isotopes.

*From* [4.3](lessons/04-03-geologic-timescale.md)

### Stratigraphy: stacking, and what correlates with what

| Sign of $dd/dt$ | Stacking | Shoreline | Vertical succession |
|---|---|---|---|
| $>0$ | retrogradational | moves landward — **transgression** | fining- and deepening-upward |
| $=0$ | aggradational | stationary | same facies repeats |
| $<0$ | progradational | moves seaward — **regression** | coarsening- and shallowing-upward |

A typical facies belt, land to sea: rooted swamp mud → lagoon → clean beach sand
→ offshore silty mud → carbonate (where terrigenous mud no longer reaches). Read
it vertically through a conformable core and you have Walther's law.

| Method | What is matched | Reach | Resolution | Is it a time line? |
|---|---|---|---|---|
| Lithostratigraphic | physical continuity, marker beds, log signatures | one basin | bed-scale locally | **No** — diachronous |
| Biostratigraphic | first and last appearances of taxa | intercontinental, within a realm | $\sim0.5$–$2\ \text{Myr}$ | nearly — appearances lag by migration time |
| Tephrostratigraphic | a volcanic ash, fingerprinted by glass chemistry | $10^2$–$10^3\ \text{km}$ | **years** | **Yes** |
| Magnetostratigraphic | the pattern of reversals | global | $10$–$10^2\ \text{kyr}$ | yes, but the pattern alone is non-unique |
| Chemostratigraphic | $\delta^{13}\text{C}$ excursions, the $^{87}\text{Sr}/^{86}\text{Sr}$ curve | global ocean | $0.1$–$1\ \text{Myr}$ | yes, to ocean-mixing time |
| Annual layers | varve or rhythmite thickness patterns | one basin | **1 year** | **Yes** |

Two families of surface, and keeping them apart is the whole lesson: **rock
boundaries** are diachronous trajectories of a moving environment; **time lines**
(ash fall, magnetic reversal, isotope excursion) are genuine instants that cut
across facies. A **Wheeler diagram** — the cross-section replotted with time on
the vertical axis — turns every hiatus into a visible blank.

*From* [4.4](lessons/04-04-stratigraphy-facies-correlation.md)

### Geologic map conventions

**The legend is a stratigraphic column in disguise**, ordered youngest at the top.
Letter codes give the period first: K = Cretaceous, J = Jurassic, Tr = Triassic,
P = Permian, Q = Quaternary.

| Line style | Contact type |
|---|---|
| plain line | **depositional** contact |
| heavier line | **fault** |
| line with the intrusive body's ornament | **intrusive** contact |
| wavy or specially annotated line | **unconformity** |
| **dashed** | inferred |
| **dotted** | concealed beneath cover |

| Symbol | Meaning |
|---|---|
| long strike line with a short **dip tick** on the down-dip side, plus the dip angle | inclined bedding — strike and dip |
| small **cross in a circle** | **horizontal** beds |
| plain **cross** | **vertical** beds |
| axial trace with a **plunge arrow** | fold axis and plunge direction |
| **hachures** on a fault | the **downthrown** block |
| **teeth** on a fault | the **upper plate of a thrust** (the hanging wall) |

**Without topography a geologic map is only half readable** — the contours are
half of every construction on it.

*From* [4.5](lessons/04-05-reading-a-geologic-map.md)

### The V-rule, in full

| Case | $m$ versus $s$ | Outcrop trace |
|---|---|---|
| Dips **upstream** | $m < 0$ | Vs **upstream** — which is the dip direction |
| Dips **downstream**, steeper than the stream | $m > s$ | Vs **downstream** — which is the dip direction |
| **Horizontal** bed | $m = 0$ | identical to a topographic contour |
| **Vertical** bed | $m \to \infty$ | straight line, no V at all |
| Dips **downstream, gentler than the stream** | $0 < m < s$ | Vs **upstream** — **the exception** |
| Bed parallel to the stream surface | $m = s$ | the trace never crosses; it runs along the valley |

where $m = \tan\delta\cos\theta$ is the rate at which the contact descends
downstream and $s$ is the stream gradient. The displacement of the trace, and its
inversion for dip:

$$\Delta = \frac{D}{\tan\delta\cos\theta - s} \qquad\Longleftrightarrow\qquad \tan\delta = s + \frac{D}{\Delta} \ \ (\theta = 0)$$

*From* [4.5](lessons/04-05-reading-a-geologic-map.md)

### The outcrop-pattern catalogue

| Map pattern | Structure | The diagnostic |
|---|---|---|
| Trace follows a topographic contour | **horizontal beds** | it closes around hilltops, and the same unit caps every summit at the same elevation |
| Trace dead straight across all relief | **vertical beds** | no deflection at valleys whatsoever |
| Trace Vs at valleys | **dipping beds** | V points down-dip; the size of the V gives the dip |
| Bands repeated in **mirror** order, dips reversing | **fold** | ages symmetric about the hinge; anticline if the oldest unit is in the middle |
| Bands repeated in the **same** order, dips unchanged, older-on-younger | **thrust** | a translation, not a reflection |
| Bands close around a **nose** | **plunging fold** | an **anticline's nose points in the plunge direction**; a **syncline's points the opposite way** and the fold opens down-plunge |
| Roughly circular concentric rings | **dome or basin** | **oldest ring in the centre means a dome** |
| Contacts terminate abruptly along a line that **cuts across** them | **fault** | hachures give the downthrown block; teeth give the thrust's upper plate |
| A unit **missing** from a traverse | **normal fault or unconformity** | a fault is a sharp line cutting contacts at an angle; an unconformity parallels bedding, is laterally persistent, and its gap is regionally consistent |
| One contact **truncates** several others at an angle | **angular unconformity** or an intrusive contact | an unconformity has sediment above it; an intrusion has a chilled margin and a baked aureole on *both* sides |

**The three first-minute rules of thumb:**

- **Repeated stratigraphy means folding or thrusting.**
- **Missing section means a normal fault or an unconformity.**
- **Older rock in the middle means an anticline or a dome.**

A strike-parallel normal fault removes a unit from the map entirely once its
throw exceeds $t/\cos\delta$; and throw follows from map shift as
$h = (\text{shift})\times\tan\delta$ on flat ground.

*From* [4.5](lessons/04-05-reading-a-geologic-map.md)

### Map geometry: the four formulas

$$\tan\delta = \frac{\Delta z}{d} \quad \text{(dip from structure contours)}$$

$$\tan\delta_{\text{app}} = \tan\delta\cos\theta \quad \text{(apparent dip; always shallower)}$$

$$t = w\left(\sin\delta - \cos\delta\tan\alpha\right) \quad \text{(true thickness from outcrop width; flip the sign of } \tan\alpha \text{ if the ground slopes against the dip)}$$

$$\text{depth below the site} = z_P - z_{oc} + L\tan\delta \quad \text{(how deep to drill)}$$

On flat ground the thickness formula reduces to $t = w\sin\delta$, and when
$\alpha = \delta$ the band is infinitely wide and the formula correctly returns
zero. **Drawing the cross-section:** choose the line perpendicular to strike;
draw the topographic profile first at the map's horizontal scale; use **no
vertical exaggeration**; drop every contact crossing onto the profile; extend
contacts downward at **constant unit thickness**; project the eroded structure
above ground with dashed lines as a consistency check on the two limbs; then
audit the faults so no unit is created or destroyed and bed lengths restore
(a **balanced section**).

**Map to history, in order:** deposition (legend order) → deformation (tilting and
folding precede whatever truncates them) → intrusion (dated by what it cuts and
what bakes it) → faulting (dated by what it offsets and what it fails to offset)
→ erosion and unconformities → surficial cover (youngest, and it obeys topography
rather than structure). *Where two events cannot be ordered, say so — that is a
result, not a failure.*

*From* [4.5](lessons/04-05-reading-a-geologic-map.md)

### Earth's layers, and the evidence for each boundary

| Boundary | Depth | What changes | Evidence |
|---|---|---|---|
| **Moho** | 7 km (ocean), 30–50 km (continent) | basalt/granodiorite → peridotite | $V_p$ jumps $6.8 \to 8.1$ km/s; Mohorovičić 1909 |
| Base of lithosphere | ~100 km (old ocean), 150–250 km (craton) | strong → weak, **same rock** | low-velocity zone; $V_s$ drops a few percent |
| **410 km** | 410 km | olivine → wadsleyite | jump matches the lab pressure for that transition |
| **660 km** | 660 km | ringwoodite → bridgmanite + ferropericlase | ~9 percent density jump; **deep quakes stop here** |
| D″ | 2700–2891 km | post-perovskite, chemical heterogeneity | scattered arrivals, tomographic blobs |
| **Core–mantle** | 2891 km | rock → liquid iron alloy | S shadow past $103^\circ$; $V_p$ drops $13.7 \to 8.1$; Gutenberg 1914 |
| **Inner core** | 5150 km | liquid → solid iron alloy | faint P inside the shadow; Lehmann 1936 |

$$V_p = \sqrt{\frac{K + \tfrac{4}{3}\mu}{\rho}}, \qquad V_s = \sqrt{\frac{\mu}{\rho}}, \qquad \frac{C}{MR^2} = 0.3307 \ \text{(0.4 for a uniform sphere)}$$

| | Oceanic crust | Continental crust |
|---|---|---|
| Thickness | 7 km | 35 km average, 70 km under Tibet |
| Composition | basalt over gabbro | granodiorite average, wildly heterogeneous |
| Density | $3.0\ \text{g/cm}^3$ | $2.7\ \text{g/cm}^3$ |
| Oldest | ~200 Ma | 4.03 Ga rock, 4.4 Ga zircons |

**The crust is under 1 percent of the volume and about 0.4 percent of the mass** —
essentially all of geology happens in the top half-percent, which is a fact about
our vantage point, not about the planet. And the geotherm cannot be extrapolated:
25 °C/km would put the base of the plate at 2515 °C instead of 1300, and the CMB
at 72,000 °C instead of ~4000. **The gradient collapses by two orders of magnitude
where convection takes over, and where it collapses is itself a boundary** — the
lithosphere's base is essentially the 1300 °C isotherm.

*From* [5.1](lessons/05-01-earths-internal-structure.md)

### Early Earth: the record, and the oxygen proxies

| Eon | Span | The record is… |
|---|---|---|
| **Hadean** | 4.567–4.03 Ga | no rocks — **isolated mineral grains** recycled into younger sediment, plus meteorites and the Moon |
| **Archean** | 4.03–2.5 Ga | a few shielded **cratons** — patchy, metamorphosed, but real rock with real chemistry |
| **Proterozoic** | 2.5–0.539 Ga | a **global geochemical record** — enough sediment on enough continents to read planet-scale signals |

Accretion alone releases $U = \tfrac{3}{5}GM^2/R = 2.24\times10^{32}$ J against
about $1.0\times10^{31}$ J to melt the whole planet — a factor of **22**, so
**a magma ocean is the default outcome of accretion, not a special hypothesis.**

| Record | What it is | Before | After | Why it tracks oxygen |
|---|---|---|---|---|
| **Banded iron formation** | mm-to-cm couplets of iron oxide and chert | abundant, peak 2.6–2.4 Ga | ends ~1.85 Ga | needs dissolved $\text{Fe}^{2+}$ transported basin-wide — an **anoxic deep ocean** |
| **Detrital pyrite, uraninite** | rounded grains in river gravels | present to 2.4 Ga | gone | survive only below roughly $10^{-3}$ PAL |
| **Red beds** | continental sandstones with hematite grain coatings | absent | from ~2.3 Ga | need free $\text{O}_2$ in the *air* to rust iron in situ |
| **Sulfur MIF** ($\Delta^{33}\text{S}$) | mass-independent S-isotope anomaly | up to several per mil, to 2.45 Ga | zero after 2.32 Ga | needs an **ozone-free** atmosphere |

$$\Delta^{33}\text{S} \approx \delta^{33}\text{S} - 0.515\,\delta^{34}\text{S}, \qquad \Delta^{33}\text{S} \text{ detects } 10^{-5}\ \text{PAL; red beds need } \sim10^{-2}\ \text{PAL}$$

| Event | Age |
|---|---|
| Accretion (meteorite-derived age of Earth) | 4.567 Ga |
| Core segregation (Hf–W) | within the first 30–50 Myr |
| Moon-forming giant impact | ~4.5 Ga |
| **Oldest mineral** — Jack Hills detrital zircon | **4.40 Ga** (in a 3.0 Ga host quartzite) |
| **Oldest intact rock** — Acasta gneiss, NW Canada | **4.03 Ga** |
| Oldest sedimentary rocks — Isua, Greenland | 3.7–3.8 Ga |
| Komatiites common (mantle 200–300 K hotter) | 3.5–2.7 Ga |
| **Great Oxidation Event** | 2.45–2.32 Ga, to ~1 percent PAL |
| Huronian glaciations | 2.45–2.22 Ga, at least three |
| Supercontinents: Kenorland / Nuna–Columbia / Rodinia / Pannotia | ~2.7–2.1 / ~1.8–1.35 / ~1.1–0.75 / ~0.63 Ga |
| The "boring billion" | 1.8–0.8 Ga |
| **Snowball Earth** (Cryogenian) | 717–635 Ma |
| Ediacaran | 635–539 Ma |

Blueschist appears only after about 0.8 Ga, ophiolites and passive margins around
2.0 Ga — which is why proposals for the onset of plate tectonics span 4.0 to
0.8 Ga.

*From* [5.2](lessons/05-02-earth-history-hadean-proterozoic.md)

### The Phanerozoic

| Orogeny | Age (Ma) | What collided |
|---|---|---|
| Taconic | ~470–440 | island arc onto eastern Laurentia |
| Caledonian | ~430–390 | Laurentia + Baltica; closes Iapetus |
| Acadian | ~390–360 | Avalonia onto Laurussia |
| Variscan / Hercynian | ~370–290 | Gondwana onto southern Europe |
| Alleghanian | ~325–260 | Gondwana onto Laurussia; **Pangaea complete** |

Pangaea assembled by about 320 Ma, held for ~120 Myr, and has been breaking up
since 200 Ma: central Atlantic from ~190 Ma, South Atlantic from ~130 Ma, North
Atlantic only at ~55 Ma. Sea level was high in the Ordovician (dispersed
continents), at its eon minimum in the Permian (Pangaea), and high again in the
Cretaceous — 170–250 m above present, with a deep ocean near 14 °C against
today's 2 °C. Other landmarks: the Carboniferous coal window (~320–300 Ma, with
atmospheric $\text{O}_2$ perhaps 30–35 percent against a 17 percent wildfire
threshold), the Late Palaeozoic Ice Age (~340–260 Ma), and the India–Asia
collision at 55–50 Ma, which dropped India from 15 to 5 cm/yr and doubled the
Tibetan crust to 70–80 km.

**The end-Cretaceous case, and what each piece excludes:**

| Observation | What it is | What it excludes |
|---|---|---|
| **Iridium anomaly** | ~9 ppb in the boundary clay against ~0.3 in the enclosing limestone | ordinary crustal sources — Ir is **siderophile**, so it went to the core and crustal rock is depleted ~1000-fold against chondrites |
| **Shocked quartz** | 2–4 sets of intersecting planar deformation features | **volcanism** — eruptions reach ~1 GPa, multiple PDF sets need above 10 GPa |
| **Ni-rich spinels, tektites** | quench products of a vapour plume | slow processes of any kind |
| **Thickness gradient** | mm in New Zealand, cm in Italy, **metres** around the Gulf of Mexico | a diffuse or multiple source — it points at a location |
| **Chicxulub** | ~180 km buried crater under Yucatán; melt rock at 66.05 Ma | coincidence — the age matches the boundary within error |

**The iridium made the case; the shocked quartz closed it**, because iridium is
also enriched in mantle-derived magmas.

| Age | Event | Independent physical evidence |
|---|---|---|
| 56 Ma | **PETM** — 5–8 °C in under 20 kyr | $-3$ per mil carbon isotope excursion; abrupt carbonate **dissolution horizon** as the CCD shoaled |
| 50 Ma | early Eocene optimum, the eon's last hothouse | crocodilians and palms in the Arctic |
| 34 Ma | **Eocene–Oligocene**: Antarctic ice sheet | $\delta^{18}\text{O}$ steps $+1.3$ per mil in ~300 kyr; ice-rafted debris in Southern Ocean cores; the CCD **deepens** ~1 km |
| 23, 15 Ma | Mi-1 glaciation; mid-Miocene optimum then cooling | Antarctic ice expands and stabilizes |
| 2.7 Ma | Northern Hemisphere glaciation intensifies | ice-rafted debris in North Atlantic cores; loess in China |
| 0.0117 Ma | the Holocene, our interglacial | orbital pacing in [3.4](lessons/03-04-glaciers-ice-ages.md) |

**On the Anthropocene:** rejected as a formal chronostratigraphic unit in March
2024 — a judgement about rank, duration and the existence of a correlatable
stratigraphic body, **not about the magnitude of human impact.** A 72-year epoch
against a Holocene of 11,700 years is 0.7 cm of shelf section, less than the
5–10 cm bioturbation depth. The most durable markers are fly ash, plastics,
technofossils and the $\sim2$ per mil $\delta^{13}\text{C}$ decline; the sharpest
one, the 1952–1963 plutonium spike, is the least durable — after 10 Myr, of
$10^{28}$ initial atoms, essentially zero remain.

*From* [5.3](lessons/05-03-earth-history-phanerozoic.md)

### Ore-forming processes, and the deposit each yields

| Process | Mechanism | Where you met it | Example deposit |
|---|---|---|---|
| **Magmatic segregation** | dense oxide and sulfide crystals settle out of a cooling magma | [1.3](lessons/01-03-how-the-earth-melts.md), fractional crystallization | Bushveld chromite and platinum, Sudbury Ni–Cu |
| **Hydrothermal** | hot water dissolves metals and dumps them where T, P or chemistry changes; **fractures are the plumbing** | [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md) fluids, [2.5](lessons/02-05-folds-faults-structures.md) structures, [2.2](lessons/02-02-plate-boundaries.md) settings | porphyry Cu–Mo above subduction zones, VMS at ridges, epithermal Au |
| **Placer** | flowing water sorts by density, so dense grains lag in traps | [3.3](lessons/03-03-rivers-landscape-evolution.md), competence and settling | alluvial gold on point bars, ilmenite beach sands |
| **Residual** | everything soluble is removed and the insoluble residue **is** the ore | [3.1](lessons/03-01-weathering-soils.md), extreme hydrolysis | bauxite, nickel laterite |
| **Evaporite** | brine evaporates, minerals precipitate in order of falling solubility | [1.5](lessons/01-05-sedimentary-rocks.md), the evaporite sequence | halite, gypsum, potash, lithium brines |
| **Chemical sedimentary** | a whole ocean's chemistry changes and precipitates | [5.2](lessons/05-02-earth-history-hadean-proterozoic.md), the Great Oxidation | banded iron formation |
| **Secondary (supergene) enrichment** | weathering strips a low-grade primary deposit and redeposits the metal below the water table | [3.1](lessons/03-01-weathering-soils.md) + [3.6](lessons/03-06-groundwater-aquifers-karst.md) | chalcocite blankets on porphyries |

| Element | Crustal abundance | Minable grade | Concentration factor |
|---|---|---|---|
| Aluminium | — | — | ~3 |
| Iron | — | — | ~14 |
| Copper | 28 ppm | 0.50 wt% = 5,000 ppm | **180** |
| Lithium | — | — | 270 |
| Neodymium | — | — | 370 |
| Gold | 1.5 ppb | 1.0 g/t = 1 ppm | **670** |
| Chromium | 92 ppm | 45 wt% $\text{Cr}_2\text{O}_3$ | **3,350** |
| Platinum | 0.5 ppb | 5.0 g/t | **10,000** |

$$\text{tonnes of ore per tonne of metal} = \frac{1}{g\,r}$$

At 0.50 percent Cu and 88 percent recovery that is 227 tonnes of ore — about 680
tonnes of rock at a strip ratio of 2. At 1 g/t gold and 90 percent recovery it is
**1.11 tonnes of rock per gram**, so a five-gram ring is 5.6 tonnes of processed
rock. **Halve the grade and the tonnage doubles** — that is the constraint that
actually bites, not the reserve life.

**The six conditions for a hydrocarbon accumulation:** (1) **source rock**,
organic mud at 2–10 wt% organic carbon laid down in stagnant water; (2)
**maturation** into the oil window, 60–150 °C — with a 27 °C/km gradient and a
15 °C surface that is a *depth* window of roughly 1.7–5.0 km, and 150–220 °C
gives gas; (3) **migration**, buoyancy-driven rather than head-driven; (4)
**reservoir**, the same porosity-and-permeability pair as an aquifer; (5) **trap
and seal**, anticlinal, fault, or stratigraphic (pinch-out, reef, unconformity
truncation); and (6) **timing** — the trap must predate maturation.

*From* [5.4](lessons/05-04-resources-geologic-hazards.md)

### Hazard assessment: where the leverage actually is

| Hazard | What sets the hazard | Where the leverage is |
|---|---|---|
| Earthquake shaking ([2.7](lessons/02-07-earthquakes-seismic-hazard.md)) | fault slip rate, distance, depth, **site soils** | vulnerability: building codes, retrofit |
| Pyroclastic currents, lahars, ash ([2.8](lessons/02-08-volcanoes-volcanic-hazards.md)) | magma composition, valley geometry | exposure: zoning and evacuation — and monitoring works |
| Landslides ([3.2](lessons/03-02-mass-wasting-slope-stability.md)) | slope angle against friction angle, **pore pressure** | **hazard** — drainage genuinely lowers it |
| Floods ([3.3](lessons/03-03-rivers-landscape-evolution.md)) | discharge distribution, floodplain geometry | exposure: zoning; hazard: storage, permeable surfaces |
| Subsidence and sinkholes ([3.6](lessons/03-06-groundwater-aquifers-karst.md)) | pumping against recharge, karst beneath | **hazard** — pumping limits lower it |
| Coastal erosion, sea-level rise ([3.5](lessons/03-05-deserts-wind-coasts.md)) | sediment budget, relative sea level | exposure: managed retreat |

$$\text{Risk} = \text{Hazard}\times\text{Exposure}\times\text{Vulnerability}, \qquad P = 1 - e^{-n/T}, \qquad \text{EAL} = \lambda E V$$

The benchmark worth memorizing: **"10 percent probability of exceedance in 50
years" is exactly a 475-year return period**, since
$1 - e^{-50/475} = 0.100$. And the retrofit arithmetic that follows is the whole
argument for codes: dropping the mean damage ratio from 0.35 to 0.10 on 4 billion
dollars of exposure saves 2.11 million dollars a year against a 60 million dollar
cost — a 28.5-year simple payback, and a positive NPV at 3 percent.

*From* [5.4](lessons/05-04-resources-geologic-hazards.md)

### Numbers worth having

The ones you would otherwise half-remember, gathered in one place.

| Quantity | Value | Note |
|---|---|---|
| **Densities** | | |
| Continental crust | $2.7\ \text{g/cm}^3$ | 2.8 in the isostasy calculations of [2.6](lessons/02-06-mountain-building.md) |
| Oceanic crust | $3.0\ \text{g/cm}^3$ | basalt over gabbro |
| Mantle lithosphere / asthenosphere | $3.3$ / $3.25\ \text{g/cm}^3$ | the 3.25 threshold decides what subducts |
| Whole Earth (mean) | $5.51\ \text{g/cm}^3$ | against 2.8 for crust — the first argument for a core |
| Quartz / calcite / feldspar | 2.65 / 2.71 / 2.56–2.76 | the hand-sample anchors |
| Galena / hematite / magnetite / pyrite | 7.6 / 5.3 / 5.2 / 5.0 | "too heavy for its size" starts around 5 |
| Ice / seawater / fresh water | 917 / 1025 / 1000 $\text{kg/m}^3$ | |
| **Crustal thickness** | | |
| Oceanic | 7 km | predicted from $T_p = 1300\ ^\circ\text{C}$ as 6.2 km |
| Continental | 35 km average, 70 km under Tibet | reference $T_0 = 35$ km in the isostasy formulas |
| Base of lithosphere | ~100 km (old ocean), 150–250 km (craton) | roughly the 1300 °C isotherm |
| **Gradients** | | |
| Lithostatic pressure | **26.5 MPa/km** ($\rho = 2700$); 27.5 at 2800; 0.0323 GPa/km in the mantle | 1 GPa $\approx$ 38 km; 1 kbar $\approx$ 3.8 km |
| Geothermal gradient | 20–30 °C/km continental (use 25); $>60$ in an aureole; 5–10 in a subduction zone | it collapses to ~0.3 °C/km below the plate |
| Hydrostatic pressure | 9.81 MPa/km, so $\lambda = P_f/\sigma_v \approx 0.37$ | |
| Mantle adiabat vs dry solidus | 0.4 vs 4 °C/km | the ten-to-one ratio that makes melting hard |
| **Hydraulic conductivity $K$** | $10^{-8}$ to $10^{5}$ m/day | **thirteen orders of magnitude**: gravel and cavernous limestone $10^3$–$10^5$, clean sand $1$–$10^3$, silt and till $10^{-4}$–$10^{-2}$, clay and shale $10^{-8}$–$10^{-4}$ |
| Typical hydraulic gradient | order $10^{-3}$ | |
| Storage coefficient | 0.05–0.30 unconfined, $10^{-5}$–$10^{-3}$ confined | |
| **Ages** | | |
| Age of the Earth | **4.567 Ga** (meteorites); 4.54 Ga in the timescale figure | |
| Oldest intact rock | **4.03 Ga** — Acasta gneiss | |
| Oldest mineral | **4.40 Ga** — Jack Hills detrital zircon | in a 3.0 Ga host |
| Oldest oceanic crust | 180–200 Ma | mean seafloor age 92 Ma |
| Base of the Phanerozoic | 538.8 Ma | Precambrian = 88.1 percent of Earth history |
| **Rates** | | |
| Plate speeds | 6–9 cm/yr with a subducting edge, 1–2 without; Pacific 8.0, Eurasia 0.7 | fastest measured 10.2 cm/yr, from the Hawaiian chain |
| Global mean full spreading rate | ~5 cm/yr over 65,000 km of ridge | $3.25\ \text{km}^2/\text{yr}$ of new seafloor |
| Exhumation | 0.1–1 mm/yr typical | **1 km/Myr = 1 mm/yr exactly** |
| Soil formation vs tillage erosion | 0.02–0.1 mm/yr vs ~1 mm/yr | a ten- to fiftyfold deficit |
| Post-glacial rebound | 10–13 mm/yr, Hudson Bay | |
| **Mohs scale** | 1 talc, 2 gypsum, 3 calcite, 4 fluorite, 5 apatite, 6 orthoclase, 7 quartz, 8 topaz, 9 corundum, 10 diamond | **ordinal**: 1→9 spans ×2100 in indentation hardness, 9→10 another ×3.3 |
| Field tools | fingernail 2.5, copper 3.5, **knife and glass 5.5**, steel file 6.5 | 5.5 is the big split |
| **Angle of repose** | 30–32° rounded sand, 34–37° angular sand and gravel, 37–42° talus | and it equals the friction angle of the loose aggregate |
| Friction angle $\phi$ / $\mu_i$ | 30–40° / 0.6–0.85 (Byerlee) | cohesion 10–50 MPa intact, ~0 on an old fault; root cohesion 1–10 kPa |
| **Cleavage angles** | pyroxene 87/93°, amphibole 56/124°, orthoclase 90°, plagioclase 86°, calcite 75° | the last two are unresolvable by hand lens — use striations |
| **Other constants** | | |
| Thermal diffusivity of rock $\kappa$ | $\approx 1\times10^{-6}\ \text{m}^2/\text{s}$ | written $\alpha$ in heat-transfer |
| Thermal expansivity $\alpha$ | $3\times10^{-5}\ \text{K}^{-1}$ | a 600 K slab is only 60 kg/m³ denser — under 2 percent, and it drives the planet |
| Shear modulus of crust $\mu$ | $3\times10^{10}$ Pa | for $M_0 = \mu A\bar d$ |
| Earth's heat output | **46–47 TW**, roughly half radiogenic | against $1.2\times10^{17}$ W of absorbed sunlight |
| Energy per magnitude unit | $10^{1.5} = 31.6$ | ×10 in amplitude |
| Isostatic root ratio | $r = 5.6h$, excess crust $6.6h$, rebound $\Delta h = \Delta e/6.6$ | |
| Ghyben–Herzberg lever | $z \approx 40h$ | |

*Assembled from all five modules; the individual sources are cited in the groups
above.*

## Assumed, not taught here

Every fact this course uses without deriving, and where it is derived. Five of
these courses — `geophysics`, `planetary-science`, `oceanography`,
`atmospheric-science` and `climate-science` — **have syllabi but no lessons yet**,
so those rows link the syllabus and name the lesson number in prose.

| Fact | Where it's taught |
|---|---|
| Stress and strain tensors, elastic moduli, the tension-positive sign convention | [geophysics](../geophysics/syllabus.md) 1.1 · [materials-science 4.1](../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) · [mechanics-of-materials 1.1](../mechanics-of-materials/lessons/01-01-normal-shear-stress.md) |
| Rotating the stress tensor; Mohr's circle | [mechanics-of-materials 4.2](../mechanics-of-materials/lessons/04-02-mohrs-circle.md) |
| The Mohr–Coulomb failure criterion, brittle fracture, fatigue | [materials-science 4.4](../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) |
| Dislocations, plastic deformation and power-law creep, $\dot\varepsilon \propto \exp(-Q/RT)$ | [materials-science 4.2](../materials-science/lessons/04-02-plastic-deformation-schmid.md) · [4.4](../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) |
| Seismic wave physics, ray theory, travel-time inversion (Herglotz–Wiechert), tomography, the moment tensor | [geophysics](../geophysics/syllabus.md) 1.2–1.6 |
| Isostasy quantitatively | [geophysics](../geophysics/syllabus.md) 2.3 |
| Flexure of the lithosphere, elastic thickness, regional compensation | [geophysics](../geophysics/syllabus.md) 2.6 |
| Gravity anomalies and reductions, the geoid | [geophysics](../geophysics/syllabus.md) 2.2, 2.4 |
| Heat flow, the conductive geotherm, mantle convection, plate driving-force balance | [geophysics](../geophysics/syllabus.md) 4.1–4.5 |
| Mantle viscosity, post-glacial rebound | [geophysics](../geophysics/syllabus.md) 4.6 |
| Rock magnetism, paleomagnetism, the reversal timescale quantitatively | [geophysics](../geophysics/syllabus.md) 3.3–3.4; the geodynamo, 3.2 |
| Ocean tides — the tidal potential, the equilibrium and dynamical tide | [oceanography 5.3](../oceanography/lessons/05-03-tides-equilibrium-dynamical.md) |
| The solid Earth's tidal response — Love numbers, the body tide, length-of-day | [geophysics](../geophysics/syllabus.md) 2.5 |
| Differentiation, planetary thermal evolution, impact cratering, comparative moment-of-inertia arguments | [planetary-science](../planetary-science/syllabus.md) 2.1–2.4 |
| Ocean circulation, the Antarctic Circumpolar Current, overturning | [oceanography](../oceanography/syllabus.md) |
| Hadley circulation and where rain falls | [atmospheric-science](../atmospheric-science/syllabus.md) |
| Milankovitch climate dynamics, ice–albedo feedback, the faint young Sun, sea-level projections | [climate-science](../climate-science/syllabus.md) |
| Crystal lattices, unit cells, long-range order | [materials-science 1.2](../materials-science/lessons/01-02-crystal-structures-unit-cells.md) |
| Miller indices and plane indexing | [materials-science 1.3](../materials-science/lessons/01-03-miller-indices-directions-planes.md) |
| Phase diagrams, eutectics and the lever rule | [materials-science 3.1](../materials-science/lessons/03-01-phase-diagrams-lever-rule.md) · [3.2](../materials-science/lessons/03-02-eutectics-microstructure.md) |
| Solid solutions, exsolution, point defects (and allochromatic colour) | [materials-science 2.1](../materials-science/lessons/02-01-point-defects-solid-solutions.md) |
| Nucleation versus growth, and what sets grain size | [materials-science 3.3](../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md) |
| Arrhenius diffusion — the machinery behind closure temperature and grain growth with grade | [materials-science 2.5](../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) |
| Structure-determines-properties in the band picture (diamond vs graphite) | [materials-science 5.1](../materials-science/lessons/05-01-electronic-properties-band-picture.md) |
| Ionic solids, lattice energy, radius ratio and coordination number | [inorganic-chemistry 1.2](../inorganic-chemistry/lessons/01-02-ionic-solids-lattice-energy.md) · [1.3](../inorganic-chemistry/lessons/01-03-born-haber-cycle.md) · [2.1](../inorganic-chemistry/lessons/02-01-complexes-ligands-coordination-number.md) |
| **The radioactive decay law** and decay chains | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) · [nuclear-particle-physics 2.1](../nuclear-particle-physics/lessons/02-01-decay-law-chains.md) — geology owns **dating practice**, not the law |
| Mass extinctions, radiations, the biology of the fossil record, biogeography | [evolution-ecology 2.4](../evolution-ecology/lessons/02-04-macroevolution-history-of-life.md) |
| The flux-law family — Darcy alongside Fourier and Fick | [transport-phenomena 1.1](../transport-phenomena/lessons/01-01-one-flux-law-three-transports.md) · [1.3](../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md) |
| Dynamic viscosity as momentum transport | [transport-phenomena 1.2](../transport-phenomena/lessons/01-02-momentum-transport-newton-viscosity.md) |
| Stokes flow and settling; the Reynolds number | [fluid-dynamics 3.3](../fluid-dynamics/lessons/03-03-stokes-flow.md) · [3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md) |
| Boundary layers and the viscous sublayer; the logarithmic wind profile | [fluid-dynamics 3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md) |
| Continuity, $Q = Av$; open-channel flow | [fluid-dynamics 1.3](../fluid-dynamics/lessons/01-03-continuity-equation.md) · [fluid-dynamics](../fluid-dynamics/syllabus.md) |
| Shallow-water waves, $c = \sqrt{gh}$, shoaling and surface tension | [fluid-dynamics 4.1](../fluid-dynamics/lessons/04-01-surface-waves.md) |
| Rayleigh–Bénard convection | [fluid-dynamics 4.3](../fluid-dynamics/lessons/04-03-instability-kh-rb.md) |
| Wave refraction as Snell's law | [waves-optics 3.1](../waves-optics/lessons/03-01-reflection-refraction-snell.md) |
| The block on an incline (free-body diagram) | [mechanics-refresher 1.3](../mechanics-refresher/lessons/01-03-applying-newtons-laws.md) |
| The gradient; level sets and why the dip vector is $-\nabla z$ | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| A plane through three points (the three-point problem) | [linalg-refresher 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) |
| The Poisson and geometric distributions — return periods and exceedance probability | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Combining systematic with statistical uncertainty | [prob-stat-refresher 4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md) · [analytical-chemistry 1.1](../analytical-chemistry/lessons/01-01-accuracy-precision-significant-figures.md) |
| Least-squares regression (isochron fitting) | [numerical-analysis 5.1](../numerical-analysis/lessons/05-01-least-squares-normal-equations.md) |
| Mass spectrometry — what an isotope ratio measurement actually is | [analytical-chemistry 4.4](../analytical-chemistry/lessons/04-04-mass-spectrometry.md) |
| The Clapeyron equation, $dP/dT = \Delta S/\Delta V$ | [physical-chemistry 2.2](../physical-chemistry/lessons/02-02-clapeyron-clausius-clapeyron.md) |
| One-component phase diagrams (the $\text{Al}_2\text{SiO}_5$ system); Gibbs energy minimization | [physical-chemistry 2.1](../physical-chemistry/lessons/02-01-phase-stability-one-component-diagrams.md) · [1.3](../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md) |
| Freezing-point depression (why water flux-melts rock) | [physical-chemistry 2.4](../physical-chemistry/lessons/02-04-colligative-properties.md) |
| Arrhenius rate law and transition-state theory | [physical-chemistry 3.4](../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) |
| Solubility products, acid–base chemistry, pH; equilibrium and Le Chatelier | [general-chemistry 2.3](../general-chemistry/lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md) · [4.1](../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) · [3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| Bragg's law and X-ray diffraction — the definitive mineral identification | [condensed-matter 1.4](../condensed-matter/lessons/01-04-xray-diffraction-bragg.md) |
| The $\sqrt{\kappa t}$ half-space cooling solution; Fourier's law; Laplace's equation as steady conduction | [heat-transfer 2.2](../heat-transfer/lessons/02-02-semi-infinite-solid.md) · [1.1](../heat-transfer/lessons/01-01-three-modes-fouriers-law.md) |
| $\nabla^2 h = 0$ as a boundary-value problem | [pdes 2.3](../pdes/lessons/02-03-laplace-poisson-equations.md) |
| First-order relaxation, $d(t) = d_0e^{-t/\tau}$ (post-glacial rebound) | [ode-refresher 1.3](../ode-refresher/lessons/01-03-first-order-models.md) |

## Pitfalls

### Minerals and rocks

- "Definite chemical composition" is **not** a fixed formula — it is a definite
  *structure* with a range of allowed occupants. Olivine and plagioclase are each
  one mineral spanning a whole series.
  *([1.1](lessons/01-01-what-a-mineral-is.md))*
- Weight-percent silica does not rise monotonically along the polymerization
  series the way the structural ratio does: Al-for-Si substitution drags real
  hornblende down to about 42 percent, below pyroxene. **Trust $n_\mathrm{O}/n_\mathrm{Si}$; treat wt % as a tendency.**
  *([1.1](lessons/01-01-what-a-mineral-is.md))*
- Cleavage is not softness. Diamond has four perfect cleavages and is the hardest
  mineral known. Cleavage says *where* the weakest bonds are; hardness says how
  strong the typical bond is — and hardness tracks the weakest **continuous** bond
  path, which is why olivine ($H \approx 6.5$) beats amphibole ($H \approx 5$).
  *([1.1](lessons/01-01-what-a-mineral-is.md), [1.2](lessons/01-02-identifying-minerals.md))*
- A flat **crystal face** is not a cleavage. A quartz prism has six gorgeous faces
  and zero cleavage; a cleavage repeats through the specimen and flashes at
  several parallel levels at once. If in doubt, break it.
  *([1.2](lessons/01-02-identifying-minerals.md))*
- Never do arithmetic with Mohs numbers, and never trust a scratch test run the
  wrong way — a soft mineral dragged over a hard one leaves a **smear** that wipes
  off with a finger. *([1.2](lessons/01-02-identifying-minerals.md))*
- Colour first is the beginner's move. Quartz is colourless, purple, pink, brown,
  black and milky; ruby and sapphire are the same mineral. Use streak; confirm
  colour. *([1.2](lessons/01-02-identifying-minerals.md))*
- "No fizz, not a carbonate" is wrong: dolomite barely reacts as a solid surface
  and must be **scratched to powder** first. That kinetic difference *is* the
  limestone-versus-dolostone test. *([1.2](lessons/01-02-identifying-minerals.md))*
- The mantle is not molten — it transmits S-waves. The asthenosphere is weak
  because it is *close* to its solidus, perhaps a percent of melt. **Magma is
  anomalous, local and hard to make.** *([1.3](lessons/01-03-how-the-earth-melts.md))*
- Decompression melting is not heating: the ascending parcel gets **cooler** all
  the way up and melts anyway, because the solidus falls at 4 °C/km while the rock
  cools at 0.4. And deeper is not closer to melting — the gap is smallest at the
  base of the lithosphere and grows downward.
  *([1.3](lessons/01-03-how-the-earth-melts.md))*
- Bowen's series is not a list of melting points, and a small melt does not
  resemble its source: **the smaller the melt fraction, the more extreme the
  melt.** *([1.3](lessons/01-03-how-the-earth-melts.md))*
- Big crystals usually mean slow cooling — but **pegmatites** are metre-scale
  crystals grown fast in a water-charged residual melt. Grain size measures growth
  per nucleus, and water raises growth without adding time.
  *([1.4](lessons/01-04-igneous-rocks-and-bodies.md))*
- Fine-grained does not mean volcanic. Aphanitic means *fast*, and a dike's
  chilled margin a kilometre underground is as fine as a lava flow. Read the body,
  not just the grain. *([1.4](lessons/01-04-igneous-rocks-and-bodies.md))*
- Colour index fails on glass and froth: obsidian is black and pumice white at the
  same 72 percent silica. *([1.4](lessons/01-04-igneous-rocks-and-bodies.md))*
- "Poorly sorted" usually means the *opposite* of selective — ice, a debris flow,
  or burial too fast to settle by size. Energy sets the maximum grain size;
  sorting records whether transport had time to discriminate. Sorting and rounding
  are separate axes with separate clocks.
  *([1.5](lessons/01-05-sedimentary-rocks.md))*
- Never measure a **cross-bed foreset** as the dip. Foresets sit at up to the
  angle of repose (30–34°); the true bedding is the flat surface that truncates
  them. This is a classic and expensive field error.
  *([1.5](lessons/01-05-sedimentary-rocks.md), [4.5](lessons/04-05-reading-a-geologic-map.md))*
- Grading is not always normal — debris and grain flows reverse-grade. Corroborate
  way-up with a second indicator when the stakes are high.
  *([1.5](lessons/01-05-sedimentary-rocks.md))*
- Porosity is not permeability. *([1.5](lessons/01-05-sedimentary-rocks.md), [3.6](lessons/03-06-groundwater-aquifers-karst.md))*
- Metamorphism is defined by the **absence** of melt; once melt appears you have a
  migmatite. And the assemblage usually records only the **peak**, because
  prograde reactions dehydrate the rock and leave no fluid to run them backwards.
  *([1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md))*
- Gneissic banding is not bedding — it is stress-driven compositional segregation
  and commonly cuts relict bedding at an angle. That angle is data.
  *([1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md))*
- "High grade" is not "high pressure": grade tracks temperature, and blueschist is
  a high-pressure, *low*-grade rock. Nor does confining pressure deform anything —
  **only directed stress makes foliation.** And a rock can only say what its
  chemistry allows: a quartzite has no aluminium and records no grade.
  *([1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md))*

### Tectonics, stress and structures

- Geologists did not reject drift out of dogmatism — they rejected it because its
  only proposed mechanism was quantitatively impossible by a factor of a few
  thousand, and a rival (land bridges) existed. And Wegener was not simply
  vindicated: the reconstruction was close, the mechanism wrong, the rate wrong
  by a thousandfold. *([2.1](lessons/02-01-evidence-for-drift.md))*
- The coastline fit is the **weakest** of the four drift arguments — coastlines
  are erosional accidents at whatever sea level happens to be. The force comes
  from what matches **across** the join, and from the **symmetry** of the stripes,
  not from their widths. *([2.1](lessons/02-01-evidence-for-drift.md))*
- A **fracture zone is not a plate boundary**; only the segment between the two
  offset ridge crests is. And the slip sense is the **opposite** of the apparent
  offset. *([2.2](lessons/02-02-plate-boundaries.md))*
- The ocean plate subducts because it is **denser**, not because it is weaker or
  is being pushed under. *([2.2](lessons/02-02-plate-boundaries.md))*
- Deep earthquakes are not ordinary friction — at 500 km confining pressure
  forbids frictional sliding, so they need dehydration embrittlement or
  transformational faulting, and they stop at 670 km.
  *([2.2](lessons/02-02-plate-boundaries.md))*
- The ridge is high because it is **hot**, not because magma inflates it; depth
  follows $\sqrt{\text{age}}$. *([2.2](lessons/02-02-plate-boundaries.md))*
- No boundary is purely one type. Oblique convergence **partitions** into a
  trench-normal thrust plus a trench-parallel strike-slip fault, and real
  boundaries are zones tens to hundreds of km wide, especially in continental
  crust. *([2.2](lessons/02-02-plate-boundaries.md))*
- Magma does not shove the plates apart — the ridge axis is under **extension**,
  floored by normal faults. Ridge push is gravitational sliding, and it depends
  on ridge *height* and plate thickness, **not on spreading rate**.
  *([2.3](lessons/02-03-driving-mechanism.md))*
- "Slab pull is 12 times ridge push" is a ranking of the **driving** terms, not a
  net force — at $Re \sim 10^{-20}$ the forces sum to zero and most of slab pull
  is eaten by viscous drag and hinge bending.
  *([2.3](lessons/02-03-driving-mechanism.md))*
- A plate is not the crust: it is lithosphere, and **the Moho sits inside it**.
  The asthenosphere is not molten; it is weak because $T/T_m \approx 0.87$. And
  the plate is not a passenger on a convection cell — it **is** the cell's cold
  upper boundary layer. *([2.3](lessons/02-03-driving-mechanism.md))*
- Brittle and ductile are **conditions, not rock types** — ask depth, temperature
  and strain rate before you ask what the rock is. And "ductile" never means
  partly melted. *([2.4](lessons/02-04-how-rock-deforms.md))*
- Confining pressure does not crush rock; it *inhibits* fracture. Only
  $\sigma_1 - \sigma_3$ deforms shape.
  *([2.4](lessons/02-04-how-rock-deforms.md), [1.6](lessons/01-06-metamorphic-rocks-rock-cycle.md))*
- Pore fluid **unclamps**, it does not lubricate: $\mu_i$ stays near 0.6 wet or
  dry. *([2.4](lessons/02-04-how-rock-deforms.md))*
- **Geology takes compression positive**; materials-science and
  mechanics-of-materials take tension positive. Do not carry a sign convention
  across a course boundary. *([2.4](lessons/02-04-how-rock-deforms.md))*
- Never trust a laboratory strength at face value — lab tests run nine orders of
  magnitude faster than the Earth. And the crust does **not** weaken steadily
  downward; it is strongest at its middle.
  *([2.4](lessons/02-04-how-rock-deforms.md))*
- "Anticline" means **oldest in the core**, not arch; an overturned syncline is an
  antiform with the youngest rock inside. And an arch is not a stress diagnosis —
  rollover anticlines form by pure extension.
  *([2.5](lessons/02-05-folds-faults-structures.md))*
- A cross-section's dip is a **true** dip only if the section is perpendicular to
  strike; otherwise it is always shallower. A section along strike shows flat beds
  no matter how steep they are. *([2.5](lessons/02-05-folds-faults-structures.md))*
- **Separation is not slip**: a pure strike-slip fault cutting dipping beds shows
  apparent vertical offset on a map. And a vertical fault has no hanging wall.
  *([2.5](lessons/02-05-folds-faults-structures.md))*
- Repeated stratigraphy is not proof of folding — a thrust repeats it too, as a
  **translation** (dips unchanged, fault contact, older on younger) rather than a
  **mirror**. *([2.5](lessons/02-05-folds-faults-structures.md), [4.5](lessons/04-05-reading-a-geologic-map.md))*
- Anderson's dips apply only to faults that **formed** in the present stress
  field; reactivated inherited structures are common, and are themselves evidence
  of pre-existing weakness. *([2.5](lessons/02-05-folds-faults-structures.md))*
- **Isostasy explains nothing about why mountains rise** — convergence builds
  them; isostasy only sets the root-to-relief ratio. And it is not exact:
  compensation is regional (flexure) below 50–100 km load widths, and some high
  ground is Pratt-compensated by hot, low-density mantle.
  *([2.6](lessons/02-06-mountain-building.md))*
- Eroding a kilometre lowers the summit by **152 m**, not a kilometre. Likewise a
  rising *surface* is not a thickening *crust* — most measured uplift in the Alps
  and Scandinavia is rebound.
  *([2.6](lessons/02-06-mountain-building.md))*
- Crust cannot thicken indefinitely: past about 5 km of elevation it spreads under
  its own weight. *([2.6](lessons/02-06-mountain-building.md))*
- **Magnitude belongs to the earthquake, intensity to the place.**
  *([2.7](lessons/02-07-earthquakes-seismic-hazard.md))*
- Aftershocks do not relieve pressure — a sequence **raises** the short-term
  probability of something larger (about 5 percent of earthquakes are followed by
  a bigger one, at which point the mainshock is demoted to a foreshock).
  *([2.7](lessons/02-07-earthquakes-seismic-hazard.md))*
- $T \approx d/v$ is a long-run average, not a timetable, and "overdue" does not
  mean "more dangerous this year."
  *([2.7](lessons/02-07-earthquakes-seismic-hazard.md))*
- Deep earthquakes are usually **less** damaging — depth spreads the energy.
  Depth and distance beat magnitude for any single site.
  *([2.7](lessons/02-07-earthquakes-seismic-hazard.md))*
- Liquefaction is not the ground opening and swallowing things: it loses strength
  and behaves as a heavy fluid, so buried tanks and manholes **rise**.
  *([2.7](lessons/02-07-earthquakes-seismic-hazard.md))*
- Not every large offshore earthquake makes a tsunami — it takes **vertical**
  seafloor displacement. *([2.7](lessons/02-07-earthquakes-seismic-hazard.md))*
- **Lava is the least lethal thing a volcano does** (under 1 percent of deaths).
  *([2.8](lessons/02-08-volcanoes-volcanic-hazards.md))*
- Dissolved gas thins magma, so **degassing thickens it** — a positive feedback
  toward fragmentation. And the explosive magma is the **cooler** one; viscosity
  decides, not temperature.
  *([2.8](lessons/02-08-volcanoes-volcanic-hazards.md))*
- VEI measures erupted volume, not deaths: VEI 3 Nevado del Ruiz killed 23,000
  and VEI 6 Pinatubo about 800. What matters is what the products meet — ice
  caps, river valleys, towns.
  *([2.8](lessons/02-08-volcanoes-volcanic-hazards.md))*
- A quiet volcano is not a safe one: lahars need no eruption (rain remobilizes
  tephra for years), and silicic repose intervals run $10^3$–$10^5$ years, so
  "nothing in recorded history" is no evidence of extinction.
  *([2.8](lessons/02-08-volcanoes-volcanic-hazards.md))*

### Surface processes

- Weathering is decomposition in place; **erosion** is transport. They compete,
  and which wins sets whether you see bare rock or 30 m of saprolite.
  *([3.1](lessons/03-01-weathering-soils.md))*
- Frost wedging needs **crossings** of the freezing point with liquid water
  available, not deep cold — maritime temperate mountains shatter faster than the
  Siberian interior. *([3.1](lessons/03-01-weathering-soils.md))*
- A rising quartz percentage in a soil is **residual enrichment**, not
  accumulation. Convert to masses with a conserved component first.
  *([3.1](lessons/03-01-weathering-soils.md))*
- Only **silicate** weathering draws down $\text{CO}_2$; carbonate weathering
  gives its molecule back on re-precipitation.
  *([3.1](lessons/03-01-weathering-soils.md))*
- Mineral-lifetime tables are laboratory extrapolations, one to three orders fast
  — natural surfaces armour with clay coatings and pore water sits near
  saturation. **The ranking survives; the numbers do not.**
  *([3.1](lessons/03-01-weathering-soils.md))*
- A soil that grows a rainforest is not fertile — laterites are among the poorest
  on Earth, and the nutrients are in the biomass. And soil is not renewable on
  human timescales: it forms at 0.02–0.1 mm/yr and erodes under tillage at about
  1 mm/yr. *([3.1](lessons/03-01-weathering-soils.md), [5.4](lessons/05-04-resources-geologic-hazards.md))*
- Rain does not destabilize a slope by adding **weight** — $\rho$ cancels. It is
  the pore pressure, so the variable to watch is the **water-table height**, and
  failures often come days after the rain stops.
  *([3.2](lessons/03-02-mass-wasting-slope-stability.md))*
- Water does not lubricate a failure plane any more than it lubricates a fault —
  $\tan\phi$ is the same wet or dry. It **unclamps**.
  *([3.2](lessons/03-02-mass-wasting-slope-stability.md), [2.4](lessons/02-04-how-rock-deforms.md))*
- $F = 1.0$ is **failure**, not safety; a computed $F = 1.05$ means "we do not
  know." Design to 1.3–1.5.
  *([3.2](lessons/03-02-mass-wasting-slope-stability.md))*
- The angle of repose is the friction angle of the **loose** aggregate, a few
  degrees below the densely packed peak — which is why a slope can be stable at
  rest and run out a long way once moving.
  *([3.2](lessons/03-02-mass-wasting-slope-stability.md))*
- The failure surface is where $\tau/\tau_{\text{strength}}$ is highest — usually
  a permeability contact where water perches — not where the material is weakest.
  *([3.2](lessons/03-02-mass-wasting-slope-stability.md))*
- Deforestation is not vague "soil binding": roots supply real cohesion of
  1–10 kPa, and many steep forested slopes stand **only** because of it, which is
  why landslide frequency peaks 5–15 years after a clear-cut.
  *([3.2](lessons/03-02-mass-wasting-slope-stability.md))*
- Finer is **not** easier to erode below about 0.2 mm — fine sand is the easiest
  grain on Earth to move. *([3.3](lessons/03-03-rivers-landscape-evolution.md))*
- A river usually speeds **up** as the country flattens. If you want to know where
  erosion happens, look at $\tau_0 = \rho g h S$, not velocity. And do not
  conflate competence with capacity.
  *([3.3](lessons/03-03-rivers-landscape-evolution.md))*
- A "hundred-year flood" is a 1 percent annual probability, not a schedule — two
  in consecutive years is unremarkable.
  *([3.3](lessons/03-03-rivers-landscape-evolution.md))*
- A waterfall is more often a migrating **knickpoint** than a fault, and braiding
  signals **overload**, not steepness. A meandering channel is never
  geometrically stable — only its width is.
  *([3.3](lessons/03-03-rivers-landscape-evolution.md))*
- A retreating glacier is not flowing backwards — **ice flow and terminus position
  are independent**. And a nested set of moraines usually records one **stepwise
  retreat**, not five advances; only the outermost marks the maximum extent.
  *([3.4](lessons/03-04-glaciers-ice-ages.md))*
- Not everything glacial is unsorted: till is, outwash and eskers and varves are
  not. Ask "ice-laid or meltwater-laid," never "glacial or fluvial."
  *([3.4](lessons/03-04-glaciers-ice-ages.md))*
- Orbital cycles **redistribute** sunlight rather than changing the total — under
  0.2 percent in the global annual mean against ~100 W/m² in high-latitude summer.
  *([3.4](lessons/03-04-glaciers-ice-ages.md))*
- The ice age did not end. The last **glacial** did; the Holocene is an
  interglacial inside the ongoing Quaternary ice age.
  *([3.4](lessons/03-04-glaciers-ice-ages.md))*
- A desert is defined by **aridity**, not heat or sand — Antarctica is the largest
  one, and three-quarters of the Sahara is rock and gravel. And **water**, not
  wind, does most of the erosion in it; wind's abrasion stops about a metre off
  the ground. *([3.5](lessons/03-05-deserts-wind-coasts.md))*
- A dune does not migrate by losing its sand — the grains recycle stoss to lee.
  And since $c \propto 1/h$, **small dunes move faster than large ones.**
  *([3.5](lessons/03-05-deserts-wind-coasts.md))*
- Longshore drift is generated by residual wave **obliquity**; remove the
  obliquity and it stops. A groyne does not create sand, it relocates it — the
  budget is conserved whether or not anyone accounts for it.
  *([3.5](lessons/03-05-deserts-wind-coasts.md))*
- "Sea-level rise" is never one number: relative sea level is eustatic change
  minus land motion. *([3.5](lessons/03-05-deserts-wind-coasts.md))*
- Not all cross-bedding is fluvial. **Aeolian sets are metres to tens of metres
  thick, dip near 34°, and the grains are frosted, superbly rounded and nearly
  mud-free.** *([3.5](lessons/03-05-deserts-wind-coasts.md), [1.5](lessons/01-05-sedimentary-rocks.md))*
- Groundwater flows down the **head** gradient, not downhill — downhill is a
  special case. *([3.6](lessons/03-06-groundwater-aquifers-karst.md))*
- The **Darcy flux is not a velocity**: a tracer moves $1/n_e$ times faster, three
  to five times in ordinary rock, always in the direction that makes you
  underestimate risk. *([3.6](lessons/03-06-groundwater-aquifers-karst.md))*
- A pumped aquifer does not simply refill: the water can be replaced in centuries,
  the **pore space** cannot. Dewatered clay compacts irreversibly.
  *([3.6](lessons/03-06-groundwater-aquifers-karst.md))*
- Do not apply Darcy's law to karst — conduit flow is turbulent
  ($\mathrm{Re}\sim10^5$) and the linear law fails outright.
  *([3.6](lessons/03-06-groundwater-aquifers-karst.md))*

### Time and the rock record

- **Superposition is not a way-up indicator** — it *assumes* way-up, and in folded
  or thrust ground it inverts silently and takes your whole history with it.
  *([4.1](lessons/04-01-relative-dating-unconformities.md))*
- A flat parallel contact is not proof of continuous deposition. **The most
  time-rich surface in a section is frequently its least conspicuous one.**
  *([4.1](lessons/04-01-relative-dating-unconformities.md))*
- An unconformity has no age — it is a surface whose hiatus varies along it and
  dies out laterally into conformable strata.
  *([4.1](lessons/04-01-relative-dating-unconformities.md))*
- Dating the dike that cuts a bed gives a **minimum** age for the bed and nothing
  else; dating the youngest detrital grain in a sandstone gives a **maximum** age.
  Every cross-cutting age is one-sided in a known direction — a feature, not a
  nuisance. *([4.1](lessons/04-01-relative-dating-unconformities.md), [4.2](lessons/04-02-radiometric-dating.md))*
- Relative dating gives **order only** — never duration, never rate.
  *([4.1](lessons/04-01-relative-dating-unconformities.md))*
- A radiometric age is not "when the rock formed" — it is when one mineral cooled
  through one temperature for one element.
  *([4.2](lessons/04-02-radiometric-dating.md))*
- Disagreement between two systems is a **measurement**, not a broken clock. The
  dangerous case is partial resetting that produces a smooth, plausible,
  meaningless intermediate age with no internal warning — which is why methods
  with built-in checks (isochrons, concordia, step heating) beat single-aliquot
  model ages. *([4.2](lessons/04-02-radiometric-dating.md))*
- A straight line does not prove an isochron — a two-component **mixing line**
  plots straight too, with a slope that means nothing chronological.
  *([4.2](lessons/04-02-radiometric-dating.md))*
- Decay constants are not exact: $\lambda$ for $^{87}\text{Rb}$ and $^{40}\text{K}$
  carries about 1 percent, which caps accuracy no matter how good the mass
  spectrometry. *([4.2](lessons/04-02-radiometric-dating.md))*
- Do not divide *any* cooling rate by the geothermal gradient — only the
  low-temperature legs of a cooling path are exhumation.
  *([4.2](lessons/04-02-radiometric-dating.md))*
- A **GSSP defines a point in a rock, not an age**; the number is a separate
  measurement and has been revised for essentially every boundary. Correlate by
  marker, never by number.
  *([4.3](lessons/04-03-geologic-timescale.md))*
- The periods were not laid out to divide time sensibly — they were laid out where
  the fossils changed. Unequal lengths are the signature of an event-based scheme.
  *([4.3](lessons/04-03-geologic-timescale.md))*
- An observed first or last occurrence is not the real one (**Signor–Lipps**), so
  a sudden extinction looks gradual.
  *([4.3](lessons/04-03-geologic-timescale.md))*
- Do not swap the rock and time vocabularies: **Upper/Lower** for rock,
  **Late/Early** for time. *([4.3](lessons/04-03-geologic-timescale.md))*
- Radiometric dating is not always the most precise clock available — over the
  Cenozoic and much of the Mesozoic, counting orbital cycles beats dating the ash.
  *([4.3](lessons/04-03-geologic-timescale.md))*
- **A formation is a map unit, not a time unit** — its boundaries are facies
  boundaries, hence diachronous, and it routinely spans different time intervals
  in different places. This is the single most common error in reading a geologic
  map. *([4.4](lessons/04-04-stratigraphy-facies-correlation.md), [4.5](lessons/04-05-reading-a-geologic-map.md))*
- Walther's law holds only across **conformable** contacts; applied across an
  unconformity it invents a history that never happened.
  *([4.4](lessons/04-04-stratigraphy-facies-correlation.md))*
- A deepening-upward section is not evidence of global sea-level rise — a section
  records **relative** sea level and cannot decompose it. And transgression does
  not require the sea to rise: cutting the sediment supply drowns a coast just as
  well. *([4.4](lessons/04-04-stratigraphy-facies-correlation.md))*
- "Correlated" is not "the same age."
  *([4.4](lessons/04-04-stratigraphy-facies-correlation.md))*
- Geologic contacts V in the direction of **dip**; topographic contours V
  **upstream**. On a real map the two families usually oppose, and that opposition
  is a free reading. But check the stream gradient first — a bed dipping
  downstream more gently than the stream falls Vs upstream instead.
  *([4.5](lessons/04-05-reading-a-geologic-map.md))*
- Map offset across a fault is **separation**, not slip — only a piercing point
  gives slip. *([4.5](lessons/04-05-reading-a-geologic-map.md), [2.5](lessons/02-05-folds-faults-structures.md))*
- Only an **anticline's** nose points down-plunge; a syncline's points the
  opposite way. Get it backwards and you drill in the wrong direction — the safe
  move is to use the ages, since the closure of a fold with an *older* core points
  down-plunge. *([4.5](lessons/04-05-reading-a-geologic-map.md))*
- The widest band is not the thickest unit — width is thickness over roughly
  $\sin\delta$, inflated further by ground slope.
  *([4.5](lessons/04-05-reading-a-geologic-map.md))*
- Never draw the section along the road or the valley because that is where the
  outcrops are: an oblique section shows apparent dips and a section along strike
  shows flat beds. *([4.5](lessons/04-05-reading-a-geologic-map.md))*

### Interior and history

- **The lithosphere is not the crust** — the Moho is a chemical boundary buried
  inside a mechanical layer, and under old ocean floor the plate is 7 km of crust
  on 93 km of mantle. *([5.1](lessons/05-01-earths-internal-structure.md), [2.3](lessons/02-03-driving-mechanism.md))*
- The mantle is not molten: S waves cross all 2891 km of it. **The one liquid
  layer is the outer core, and nothing has ever erupted from it.**
  *([5.1](lessons/05-01-earths-internal-structure.md), [1.3](lessons/01-03-how-the-earth-melts.md))*
- The 410 and 660 are not compositional boundaries — they are the same rock
  repacking, and the 660's temperature sensitivity proves it.
  *([5.1](lessons/05-01-earths-internal-structure.md))*
- A shadow zone is not silence: it is a **missing phase**. S reflected off the
  core–mantle boundary arrives fine, and P reappears beyond $143^\circ$.
  *([5.1](lessons/05-01-earths-internal-structure.md))*
- Do not extrapolate the surface geotherm — it collapses by two orders of
  magnitude where convection takes over, and **where it collapses is itself a
  boundary.** *([5.1](lessons/05-01-earths-internal-structure.md))*
- The GOE did not give Earth breathable air — it reached about 1 percent of the
  present level and then **stalled for a billion years**.
  *([5.2](lessons/05-02-earth-history-hadean-proterozoic.md))*
- Banded iron formations do not prove there was no oxygen; they prove the ocean
  was **stratified**, needing an anoxic deep and an oxidant at the site of
  deposition. *([5.2](lessons/05-02-earth-history-hadean-proterozoic.md))*
- Do not conflate **oldest rock** (4.03 Ga), **oldest mineral** (4.40 Ga) and
  **age of Earth** (4.567 Ga) — three questions, three answers. And a 4.4 Ga
  detrital zircon is not a 4.4 Ga rock at that locality.
  *([5.2](lessons/05-02-earth-history-hadean-proterozoic.md))*
- The late heavy bombardment is a hypothesis under active revision — the 3.9 Ga
  cluster may be an artefact of where Apollo landed. And Snowball Earth never
  meant an ocean frozen to the bottom.
  *([5.2](lessons/05-02-earth-history-hadean-proterozoic.md))*
- Glaciation did not cause the oxygen rise; **oxygen destroyed the methane
  greenhouse and the Huronian glaciations followed.**
  *([5.2](lessons/05-02-earth-history-hadean-proterozoic.md))*
- Pangaea was not the first supercontinent, only the best recorded. And the
  Cretaceous sea-level high was not more water — **the basin got shallower.**
  *([5.3](lessons/05-03-earth-history-phanerozoic.md))*
- The benthic $\delta^{18}\text{O}$ curve is **not a temperature record**: it is
  temperature plus ice volume, one equation with two unknowns.
  *([5.3](lessons/05-03-earth-history-phanerozoic.md))*
- The iridium anomaly did not prove the impact — the **shocked quartz** did, since
  iridium is also enriched in mantle magmas. And "impact versus Deccan" is not an
  argument about whether the impact happened; it is about the partition of the
  kill mechanism. *([5.3](lessons/05-03-earth-history-phanerozoic.md))*
- Eruption volume does not predict extinction severity — **target rock** does.
  And a coincidence in age is never a demonstration of cause; the argument has to
  run through a mechanism.
  *([5.3](lessons/05-03-earth-history-phanerozoic.md))*
- Rejecting the Anthropocene is a claim about stratigraphic housekeeping, not
  about human impact. *([5.3](lessons/05-03-earth-history-phanerozoic.md))*
- An ore deposit is not where the metal is — it is where a process concentrated
  it, so **exploration hunts the process**. And rare earths are not rare: the
  scarcity is a scarcity of concentrating processes.
  *([5.4](lessons/05-04-resources-geologic-hazards.md))*
- A 40-year reserve-to-production ratio is not a countdown; reserves are an
  economic inventory. **The real constraint is energy per tonne, which scales as
  $1/g$.** *([5.4](lessons/05-04-resources-geologic-hazards.md))*
- Oil does not sit in pools, and a trap is a **geometry**, not a container.
  *([5.4](lessons/05-04-resources-geologic-hazards.md))*
- Mitigation almost never reduces the **hazard** — codes and zoning act on
  vulnerability and exposure. The two exceptions, slope drainage and pumping
  limits, are the two hazards people helped create.
  *([5.4](lessons/05-04-resources-geologic-hazards.md))*
- A 475-year event is never "due": exceedances are memoryless.
  *([5.4](lessons/05-04-resources-geologic-hazards.md), [3.3](lessons/03-03-rivers-landscape-evolution.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links; the
  linter catches it, but prefer not to rename.
- **No prose dollar signs** — write "10 dollars", not the symbol.
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through. But every line still has to earn its place.

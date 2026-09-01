# Physical Oceanography · Lesson 2.5: Potential vorticity in a stratified ocean

> ⏱ ~15 min · Module 2: Rotating, stratified dynamics · Builds on: [1.4](01-04-stratification-buoyancy-frequency.md), [atmospheric-science 5.2](../../atmospheric-science/lessons/05-02-potential-vorticity.md) · Unlocks: [3.1](03-01-sverdrup-balance-interior-gyre.md), [4.1](04-01-water-masses-world-ocean.md)

## Why this matters

Potential vorticity is the conserved quantity of rotating stratified fluids, and [atmospheric-science 5.2](../../atmospheric-science/lessons/05-02-potential-vorticity.md) built the machinery: the definition, the conservation theorem, the vortex-stretching argument, and the invertibility principle. None of that is re-derived here.

What this lesson adds is what PV *does* in an ocean, where three things are true that are not true of the atmosphere. First, the ocean is layered by density into surfaces that water moves along rather than across, so PV becomes a **label on an isopycnal** — a map of it shows you where water was made, which is a tracer no chemical measurement provides. Second, because the ocean's deformation radius is tiny, its Rossby waves are glacially slow: a signal launched at the eastern boundary of the North Pacific takes a decade to reach Japan, and that delay is the memory that makes decadal climate variability possible. Third, PV can be **homogenized** — stirred flat over whole regions — which produces the strange, blank pools that occupy much of the subtropical thermocline.

## The idea

**PV is spin per unit stretch.** A column of fluid between two isopycnals has some absolute spin (planetary plus relative) and some thickness. Squash the column and it must spin more slowly; stretch it and it spins faster, exactly as a skater's arms control a pirouette. The ratio $(f+\zeta)/h$ is what stays fixed.

**In the ocean interior, relative vorticity barely matters.** Away from boundary currents and eddies, the Rossby number is about $10^{-2}$: $\zeta$ is a hundred times smaller than $f$. So $q \approx f/h$, and conservation says that **a water column moving to higher latitude must get thicker**, and one that thins must move equatorward. That single statement is the skeleton of the wind-driven circulation, and it is where the Sverdrup balance of [3.1](03-01-sverdrup-balance-interior-gyre.md) comes from.

**PV maps show you where water was made.** Because $q$ is conserved along an isopycnal in the interior, and because it is *set* at the surface where the layer last outcropped, a contour map of $q$ on an isopycnal is effectively a map of streamlines coming from the outcrop. Regions of low $q$ trace back to places where the surface layer was thick — deep winter mixed layers — which is exactly how **mode waters** are identified ([4.1](04-01-water-masses-world-ocean.md)). It is also how you can tell that some parts of the subtropical thermocline are ventilated and others are not.

**And where the flow recirculates, PV gets stirred flat.** If a closed circulation traps fluid on an isopycnal so that no streamline connects it to the surface, eddies stir the region for a long time without any source to maintain a gradient. The result is a **homogenized pool**: a large region of nearly uniform $q$, sitting under the ventilated thermocline. Rhines and Young showed in 1982 that this is what closed geostrophic contours must produce, and it is observed.

**Rossby waves: the $\beta$-effect made into a wave, and it only goes west.** Displace a chain of columns meridionally on a rotating sphere. The ones pushed north find themselves where $f$ is larger, so to conserve PV they must spin clockwise; the ones pushed south spin anticlockwise. Between neighbouring crests and troughs, both circulations push the fluid the same way — and that push always rebuilds the pattern one quarter-wavelength to the **west**. The restoring mechanism has a direction built into it, so the phase speed does too.

## The formal version

**Layered potential vorticity.** For a layer between two isopycnals of thickness $h$,

$$\boxed{\ q = \frac{f + \zeta}{h}, \qquad \frac{Dq}{Dt} = 0\ }$$

in the absence of friction and diabatic forcing, with $\zeta = \partial v/\partial x - \partial u/\partial y$. *In words: absolute spin divided by column thickness is carried unchanged with the fluid.* The conservation theorem is [atmospheric-science 5.2](../../atmospheric-science/lessons/05-02-potential-vorticity.md)'s; only the ocean's layered interpretation of $h$ is new.

**The planetary-geostrophic limit.** With $|\zeta| \ll |f|$,

$$q \approx \frac{f}{h} \qquad\Longrightarrow\qquad \frac{f}{h} = \text{constant along a trajectory}.$$

*In words: a column that moves poleward, where $f$ is bigger, must stretch in proportion.* Equivalently, in the continuously stratified form, $q \approx (f/\rho_0)\,\partial\rho/\partial z$, i.e. $q \propto fN^2$ — a quantity you can compute from any hydrographic station.

**Rossby waves.** Linearizing PV conservation about a state of rest on a $\beta$-plane, for a single baroclinic mode with deformation radius $L_d$, gives the dispersion relation

$$\omega = \frac{-\beta k}{k^2 + l^2 + L_d^{-2}},$$

with $(k,l)$ the zonal and meridional wavenumbers. *In words: the frequency is proportional to $\beta$ and to the zonal wavenumber, damped by the total wavenumber squared.*

The **zonal phase speed** is

$$c_p = \frac{\omega}{k} = \frac{-\beta}{k^2+l^2+L_d^{-2}},$$

which is **negative for every wavenumber**. There is no choice of $k$ and $l$ that makes it positive. Rossby wave crests move west, always, and this is one of the very few strictly universal statements in the subject.

In the **long-wave limit** $k^2 + l^2 \ll L_d^{-2}$ — waves much longer than the deformation radius, which is most of what the ocean actually contains — the speed becomes non-dispersive:

$$c_p \to -\beta L_d^2.$$

**Numbers, and why the ocean is slow.** With $L_d = c_1/|f|$ and the first-baroclinic gravity-wave speed $c_1 \approx 2$ to $3\ \mathrm{m\,s^{-1}}$:

| Latitude | $\beta$ (m⁻¹ s⁻¹) | $L_d$ | $|c_p| = \beta L_d^2$ | Time to cross 5000 km |
|---|---|---|---|---|
| 10° | $2.25\times10^{-11}$ | 110 km | 27 cm s⁻¹ | 0.6 yr |
| 30° | $1.98\times10^{-11}$ | 36 km | 2.6 cm s⁻¹ | 6.2 yr |
| 45° | $1.62\times10^{-11}$ | 19 km | 0.6 cm s⁻¹ | 27 yr |

Compare the **barotropic** mode, whose deformation radius is $\sqrt{gH}/f \approx 1900\ \mathrm{km}$ at 45°: $c_p = 60\ \mathrm{m\,s^{-1}}$, crossing a basin in about a day. **The two modes differ by a factor of ten thousand.** The barotropic mode adjusts the ocean's pressure field almost instantly; the baroclinic mode adjusts its density field over years to decades. That separation is the origin of ocean memory, and it is why decadal climate variability is an oceanic phenomenon.

**Group velocity, and the eastern-boundary asymmetry.** Differentiating,

$$c_{g,x} = \frac{\partial\omega}{\partial k} = \beta\,\frac{k^2 - l^2 - L_d^{-2}}{\left(k^2+l^2+L_d^{-2}\right)^2},$$

which is **negative (westward) for long waves** and **positive (eastward) for short waves**, with the switch at $k^2 = l^2 + L_d^{-2}$. Energy therefore leaves the eastern boundary westward as long waves and leaves the western boundary eastward as short waves — which is why disturbances generated at an eastern boundary propagate across the basin, while the western boundary reflects them into short, slow, easily dissipated waves. **This asymmetry is a second, independent route to the west-intensification of [3.2](03-02-western-boundary-currents-stommel-munk.md).**

## Picture

![A chain of fluid columns displaced into a wave shape about a rest latitude. Where the chain bulges north, a coral circle with a clockwise arrow marks the negative relative vorticity acquired because f is larger there; where it bulges south, an anticlockwise circle marks positive vorticity. Between each pair, blue arrows show that the two neighbouring circulations push the fluid the same way — southward between a northern crest and the southern trough to its east, northward between a trough and the crest to its east — so the next crest and trough are built one quarter wavelength to the west. A blue arrow at the bottom marks westward phase propagation](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — a column crossing a ridge).** A column of water 4000 m thick at 40°N flows over a submarine ridge that reduces its thickness to 3600 m. It starts with negligible relative vorticity. (a) What relative vorticity does it acquire if it stays at 40°N? (b) Alternatively, if it acquires no relative vorticity, what latitude must it move to?

Take $f_{40} = 9.37\times10^{-5}\ \mathrm{s^{-1}}$.

(a) Conserving $q$:
$$\frac{f_{40} + 0}{4000} = \frac{f_{40}+\zeta}{3600} \;\Longrightarrow\; \zeta = f_{40}\left(\frac{3600}{4000} - 1\right) = 9.37\times10^{-5}\times(-0.10) = -9.37\times10^{-6}\ \mathrm{s^{-1}}.$$

Negative: **anticyclonic**. Squashing a column slows its spin, and since it started with only planetary spin, it must acquire relative spin in the opposite sense.

Is that a lot? Compare with $f$: the Rossby number is $|\zeta|/f = 0.10$. That is large for the open ocean, and it means a 10 percent thickness change over a ridge is enough to generate vorticity comparable to a strong eddy. **Topography is a powerful vorticity source**, which is why the abyssal circulation follows bathymetry so faithfully.

(b) With $\zeta = 0$, conservation requires $f/h$ constant:
$$f_{\text{new}} = f_{40}\times\frac{3600}{4000} = 9.37\times10^{-5}\times0.90 = 8.43\times10^{-5}\ \mathrm{s^{-1}},$$
$$\sin\phi = \frac{8.43\times10^{-5}}{1.4584\times10^{-4}} = 0.578 \;\Longrightarrow\; \phi = 35.3^\circ\mathrm{N}.$$

The column must move about 5 degrees — 520 km — **equatorward**. Columns that get squashed head for the equator; columns that get stretched head for the pole.

**Example 2 (why you'd care — reading a decade of ocean memory off a delay).** In 1993 a wind anomaly over the eastern North Pacific at 30°N depresses the thermocline by 20 m. Estimate when the resulting sea-level anomaly reaches the Japanese coast, 9000 km to the west, and state what it does when it arrives.

*The propagation.* The disturbance is a long baroclinic Rossby wave. From the table, at 30°N with $L_d = 36$ km:

$$c_p = \beta L_d^2 = 1.982\times10^{-11}\times(3.6\times10^{4})^2 = 1.982\times10^{-11}\times1.296\times10^{9} = 2.57\times10^{-2}\ \mathrm{m\,s^{-1}}.$$

$$t = \frac{9\times10^{6}}{2.57\times10^{-2}} = 3.50\times10^{8}\ \mathrm{s} = 11.1\ \mathrm{yr}.$$

**It arrives around 2004.**

*What it does.* A depressed thermocline arriving at the western boundary means more warm light water in the upper layer there, which by thermal wind ([2.2](02-02-thermal-wind-acc.md)) strengthens the vertical shear at the Kuroshio's inshore edge. Observationally, Rossby waves arriving from the east are the accepted mechanism for the Kuroshio Extension's decadal changes in transport, latitude and stability, and the observed lag between North Pacific wind forcing and Kuroshio Extension response is indeed of order a decade.

*The point.* **The ocean is a delay line.** An atmospheric forcing event is stored as a density anomaly, carried west at centimetres per second, and delivered to the western boundary a decade later, where it changes a current that in turn changes the sea surface temperature that the atmosphere feels. A system with a lag that long, feeding back on its own forcing, is a candidate oscillator — which is precisely the structure of the Pacific Decadal Oscillation, and precisely the structure (with a much shorter lag) of the ENSO delayed oscillator in [5.5](05-05-walker-bjerknes-enso.md). Whenever you find a propagation time comparable to an observed period of variability, take the coincidence seriously.

## Watch out

- **You might think** $h$ in $q = (f+\zeta)/h$ is the depth of the ocean. **Actually** it is the thickness of the layer between two chosen isopycnals, which is a very different thing. Only for a homogeneous ocean over topography — as in Example 1 — do the two coincide.
- **You might think** conserved means constant. **Actually** $Dq/Dt = 0$ means constant *following a fluid parcel*. At a fixed point $q$ can change freely as different water arrives, and it does change wherever friction, mixing across isopycnals, or surface buoyancy forcing acts. PV is conserved in the interior and manufactured at the boundaries, which is precisely what makes it a useful tracer of where water has been.
- **You might think** the westward propagation means energy cannot travel east. **Actually** the *phase* always goes west while the *group velocity* goes east for waves shorter than the deformation radius. Reflection at a western boundary converts long waves into short ones, and the short ones carry energy back east — which is where it is dissipated.

## One-liner

> Potential vorticity is spin divided by column thickness, conserved along isopycnals so that a map of it reveals where water was made — and the wave it supports, uniquely among all waves in nature, propagates its phase westward at every wavelength, in the ocean so slowly that a basin crossing takes a decade.

## Problems

**P1 (🟢)** A water column 500 m thick between two isopycnals sits at 25°N ($f = 6.16\times10^{-5}\ \mathrm{s^{-1}}$) with $\zeta = 0$. It is advected to 40°N ($f = 9.37\times10^{-5}$). (a) Assuming $\zeta$ stays negligible, compute the new layer thickness. (b) Instead, suppose the thickness is held fixed at 500 m by the surrounding stratification. Compute the relative vorticity the column must acquire, and its sign. (c) Compute the Rossby number of the result and comment on whether the assumption $|\zeta|\ll f$ was safe.

**P2 (🟡)** At 20°N, $\beta = 2.15\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$ and $L_d = 70\ \mathrm{km}$. (a) Compute the long-wave Rossby phase speed. (b) Compute the phase speed for a wave with zonal wavelength 300 km and no meridional structure, using the full dispersion relation, and compare with (a). (c) Compute the zonal group velocity for the 300 km wave and state its direction. (d) Find the wavelength at which the group velocity changes sign.

**P3 (🔴, optional)** Antarctic Intermediate Water is identified in the South Atlantic partly by a minimum in potential vorticity on the $\sigma_\theta = 27.2$ surface. (a) Explain in two sentences why a PV *minimum* is the expected signature of a water mass formed in a deep winter mixed layer. (b) On that surface, $f = -8.4\times10^{-5}\ \mathrm{s^{-1}}$ at the formation region (35°S) and the layer between $\sigma_\theta = 27.1$ and $27.3$ is 400 m thick there; at a remote site at 10°S ($f = -2.5\times10^{-5}$) the same layer is 150 m thick. Compute $q$ at both, and state whether the remote water can have come from the formation region by PV-conserving advection alone. (c) If not, name the two processes that could account for the discrepancy and say which one you would expect to dominate at this depth.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{f_{25}}{h_{25}} = \frac{f_{40}}{h_{40}} \;\Longrightarrow\; h_{40} = h_{25}\frac{f_{40}}{f_{25}} = 500\times\frac{9.37\times10^{-5}}{6.16\times10^{-5}} = 500\times1.521 = 761\ \mathrm{m}.$$

The column must **stretch by 52 percent** to move that far poleward.

(b) With $h$ fixed, $q$ conservation requires $f + \zeta$ to be fixed at its initial value $f_{25}$:

$$\zeta = f_{25} - f_{40} = 6.16\times10^{-5} - 9.37\times10^{-5} = -3.21\times10^{-5}\ \mathrm{s^{-1}},$$

**negative: anticyclonic.**

(c) $$Ro = \frac{|\zeta|}{f_{40}} = \frac{3.21\times10^{-5}}{9.37\times10^{-5}} = 0.34.$$

**The assumption was not safe at all.** A Rossby number of 0.34 is far outside the geostrophic regime; the flow would be strongly nonlinear, and in practice such a column would not survive — it would become unstable and break up into eddies long before reaching 40°N. The physical content of this is important: **columns cannot travel large distances in latitude without changing thickness.** Either the stratification yields and the layer stretches, as in (a), or the column cannot make the journey. This is the constraint that forces the interior ocean's flow to follow contours of $f/h$, and it is why the abyssal circulation is so tightly steered by topography.

**P2** (a) $$c_p = -\beta L_d^2 = -2.15\times10^{-11}\times(7\times10^{4})^2 = -2.15\times10^{-11}\times4.9\times10^{9} = -0.105\ \mathrm{m\,s^{-1}},$$

i.e. **10.5 cm s⁻¹ westward**.

(b) $$k = \frac{2\pi}{3\times10^{5}} = 2.094\times10^{-5}\ \mathrm{m^{-1}}, \qquad k^2 = 4.386\times10^{-10}\ \mathrm{m^{-2}},$$
$$L_d^{-2} = \frac{1}{4.9\times10^{9}} = 2.041\times10^{-10}\ \mathrm{m^{-2}},$$
$$c_p = \frac{-2.15\times10^{-11}}{4.386\times10^{-10}+2.041\times10^{-10}} = \frac{-2.15\times10^{-11}}{6.427\times10^{-10}} = -0.0335\ \mathrm{m\,s^{-1}}.$$

**3.3 cm s⁻¹ westward** — only a third of the long-wave speed. A 300 km wave is not long compared with a 70 km deformation radius ($2\pi L_d = 440$ km), so it sits well into the dispersive regime.

(c) With $l = 0$:
$$c_{g,x} = \beta\frac{k^2 - L_d^{-2}}{\left(k^2+L_d^{-2}\right)^2} = 2.15\times10^{-11}\times\frac{4.386\times10^{-10}-2.041\times10^{-10}}{\left(6.427\times10^{-10}\right)^2}$$
$$= 2.15\times10^{-11}\times\frac{2.345\times10^{-10}}{4.131\times10^{-19}} = 2.15\times10^{-11}\times5.677\times10^{8} = +0.0122\ \mathrm{m\,s^{-1}}.$$

**Eastward**, at 1.2 cm s⁻¹ — the phase goes west and the energy goes east, which is the classic Rossby-wave signature.

(d) The group velocity vanishes when $k^2 = L_d^{-2}$, i.e. $k = 1/L_d$:

$$\lambda = 2\pi L_d = 2\pi\times7\times10^{4} = 4.40\times10^{5}\ \mathrm{m} = 440\ \mathrm{km}.$$

Waves longer than 440 km carry energy west; shorter ones carry it east. The 300 km wave in (b) and (c) is on the short side, hence the eastward group velocity.

**P3** (a) $q \approx f/h$, so a **thick** layer has **low** PV. A deep winter mixed layer is by definition a thick slab of nearly uniform density, so when it subducts and becomes an interior layer bounded by two isopycnals, that layer is anomalously thick and its PV is anomalously low. The anomaly is conserved as the water spreads, so it remains identifiable thousands of kilometres downstream — which is exactly what makes mode waters and intermediate waters recognizable at all.

(b) Formation region:
$$q_{\text{form}} = \frac{f}{h} = \frac{-8.4\times10^{-5}}{400} = -2.10\times10^{-7}\ \mathrm{m^{-1}\,s^{-1}}.$$

Remote site:
$$q_{\text{remote}} = \frac{-2.5\times10^{-5}}{150} = -1.67\times10^{-7}\ \mathrm{m^{-1}\,s^{-1}}.$$

The magnitudes differ by 21 percent, with the remote value **smaller in magnitude**. Pure PV-conserving advection would require them to be equal, so **the observed pair is not consistent with adiabatic, frictionless advection alone** — though the agreement to within 21 percent over 2800 km is good enough that PV conservation is clearly the dominant control, and the discrepancy is a correction rather than a refutation.

(c) Two candidates:

1. **Diapycnal mixing**, which transfers properties across isopycnals and erodes the thickness anomaly. This changes $h$ without changing $f$, and it always acts to move $q$ toward the value of the surroundings.
2. **Lateral eddy stirring along isopycnals**, which mixes the low-PV core with higher-PV water on either side of the flow path — again driving $q$ toward the ambient value.

At intermediate depths, **lateral eddy stirring dominates**, and by a wide margin. The measured diapycnal diffusivity in the open thermocline is about $10^{-5}\ \mathrm{m^2\,s^{-1}}$ ([4.3](04-03-diapycnal-mixing-abyssal-recipe.md)), whereas isopycnal eddy diffusivities are of order $10^{3}\ \mathrm{m^2\,s^{-1}}$ — eight orders of magnitude larger. Even allowing that the along-isopycnal distances are much greater than the across-isopycnal ones, lateral stirring erodes a core far faster. The general rule for the ocean interior: **water mixes along isopycnals easily and across them with enormous difficulty**, and any explanation that reaches for diapycnal mixing first should be checked against the lateral alternative.

</details>

## Flashback

**From Lesson 2.2 (Ocean thermal wind and the Antarctic Circumpolar Current):** A front at 50°S ($|f| = 1.117\times10^{-4}\ \mathrm{s^{-1}}$) has isopycnals sloping upward toward the pole with $|\partial z_{\text{iso}}/\partial y| = 8.0\times10^{-4}$, and stratification $N^2 = 6.0\times10^{-6}\ \mathrm{s^{-2}}$. (a) Compute the thermal-wind shear using the isopycnal-slope form. (b) Compute the surface speed if the flow vanishes at 2500 m. (c) Compute the transport through a section 400 km wide, in sverdrups, and comment on how it compares with the full ACC.

<details>
<summary>Solution</summary>

(a) $$\left|\frac{\partial u}{\partial z}\right| = \frac{N^2}{|f|}\left|\frac{\partial z_{\text{iso}}}{\partial y}\right| = \frac{6.0\times10^{-6}\times8.0\times10^{-4}}{1.117\times10^{-4}} = \frac{4.80\times10^{-9}}{1.117\times10^{-4}} = 4.30\times10^{-5}\ \mathrm{s^{-1}}.$$

(b) $$u_{\text{surf}} = 4.30\times10^{-5}\times2500 = 0.107\ \mathrm{m\,s^{-1}}.$$

(c) Mean speed over the column, for a linear profile, is $0.0537\ \mathrm{m\,s^{-1}}$:

$$T = 4\times10^{5}\times2500\times0.0537 = 5.37\times10^{7}\ \mathrm{m^3\,s^{-1}} = 53.7\ \mathrm{Sv}.$$

About a third of the ACC's full 137 to 173 Sv, from a single front 400 km wide. That proportion is realistic and is the main structural fact about the ACC: it is **not** a broad uniform stream but two or three narrow fronts, each carrying a few tens of sverdrups, separated by quieter water. The Subantarctic Front and the Polar Front together account for the large majority of the total transport, which is why a hydrographic section that happens to miss a front badly underestimates the total, and why Drake Passage — where the fronts are compressed into the narrowest gap — became the standard monitoring line.

</details>

## Connections

- **Backward:** the conservation theorem and vortex-stretching argument are [atmospheric-science 5.2](../../atmospheric-science/lessons/05-02-potential-vorticity.md)'s; the deformation radius depends on $N$ from [1.4](01-04-stratification-buoyancy-frequency.md); and the isopycnal layers that define $h$ are [1.2](01-02-density-equation-of-state.md)'s potential-density surfaces.
- **Forward:** the planetary-geostrophic limit $q \approx f/h$, combined with [2.4](02-04-ekman-pumping-wind-stress-curl.md)'s pumping, is the Sverdrup balance of [3.1](03-01-sverdrup-balance-interior-gyre.md); the group-velocity asymmetry is a second route to the western intensification of [3.2](03-02-western-boundary-currents-stommel-munk.md); the equatorial version of these waves drives ENSO in [5.4](05-04-equatorial-waves-undercurrent.md) and [5.5](05-05-walker-bjerknes-enso.md); and PV as a ventilation tracer is used throughout [4.1](04-01-water-masses-world-ocean.md).
- **Sideways (dynamical systems):** a system with a delayed negative feedback — forcing now, response a decade later — is the canonical route to self-sustained oscillation, and the delay differential equations that describe it are the same ones that appear in [`dynamical-systems`](../../dynamical-systems/syllabus.md). The Rossby-wave crossing time is the delay; [5.5](05-05-walker-bjerknes-enso.md) builds the oscillator explicitly.

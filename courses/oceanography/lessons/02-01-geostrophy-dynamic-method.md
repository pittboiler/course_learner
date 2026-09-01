# Physical Oceanography · Lesson 2.1: Geostrophy in the ocean and the dynamic method

> ⏱ ~15 min · Module 2: Rotating, stratified dynamics · Builds on: [1.2](01-02-density-equation-of-state.md), [atmospheric-science 4.3](../../atmospheric-science/lessons/04-03-geostrophic-gradient-wind.md) · Unlocks: [2.2](02-02-thermal-wind-acc.md), [6.5](06-05-observing-the-ocean.md)

## Why this matters

Geostrophic balance itself is not this course's to build — [atmospheric-science 4.3](../../atmospheric-science/lessons/04-03-geostrophic-gradient-wind.md) already derived it, and everything it established (the Rossby number, when the balance holds, the flow-along-isobars result) carries over unchanged. What does not carry over is the *measurement problem*, and it is severe enough to have defined the practice of oceanography for a century.

A meteorologist reads pressure off a barometer. An oceanographer cannot: the pressure at 1000 m depth is dominated by the 1000 m of water sitting on top, and the horizontal *differences* that drive currents are one part in $10^5$ of that. No pressure sensor on a wire is remotely good enough. And yet almost everything we know about the large-scale ocean circulation before 1992 came from geostrophic calculation. The trick is that you can get the **vertical derivative** of the pressure gradient from the density field alone, integrate it, and be left with a single unknown constant per station pair. This lesson is that trick, and what the constant costs you.

## The idea

**Pressure at depth is the weight of what is above.** Two things can make the pressure at a fixed depth differ between two locations: there might be *more* water above (a higher sea surface), or the water above might be *denser*. The first is the **barotropic** part, the second the **baroclinic** part, and in the real ocean they typically oppose each other.

**Which is why the pressure gradient decays with depth.** In a subtropical gyre, the sea surface is a metre or so higher over the warm side — that alone would push water poleward at every depth. But the warm side is also *lighter*, so as you descend you accumulate less weight there than on the cold side, and the surface-height advantage is progressively eaten away. Go deep enough and the two cancel: the pressure gradient vanishes, the geostrophic current vanishes, and you have found a **level of no motion**.

**So the density field gives you the current, up to a constant.** Measure $\rho$ everywhere on a section — which a CTD does beautifully — and you can compute how the geostrophic velocity *changes* with depth. What you cannot get is the depth-independent part. Assume it is zero at some deep level and you have absolute velocities everywhere. That assumption is the **dynamic method**, it is a century old, and it is the reason every classical ocean transport estimate carries a quiet asterisk.

**Satellite altimetry removed the asterisk — almost.** A radar altimeter measures sea surface height directly to a couple of centimetres, which gives the barotropic part with no assumption at all. The catch is that height must be measured relative to the **geoid**, the equipotential surface the ocean would take at rest, and the geoid has bumps of tens of metres from the Earth's uneven mass distribution. Until dedicated gravity missions mapped it, the geoid error swamped the ocean signal at short wavelengths. The modern combination — altimetry for the barotropic part, hydrography for the baroclinic part — is the best of both, and it is why [6.5](06-05-observing-the-ocean.md) treats the two as one system.

## The formal version

**Hydrostatic pressure with a free surface.** With $z$ upward and the sea surface at $z = \eta(x,y)$,

$$p(x,y,z) = p_{\text{atm}} + g\int_z^{\eta} \rho(x,y,z')\,dz'.$$

Differentiate horizontally (using Leibniz, and noting $p$ is continuous at the surface):

$$\boxed{\ \frac{\partial p}{\partial y}\bigg|_z = \underbrace{\rho_0\,g\,\frac{\partial\eta}{\partial y}}_{\text{barotropic}} \;+\; \underbrace{g\int_z^{0}\frac{\partial\rho}{\partial y}\,dz'}_{\text{baroclinic}}\ }$$

*In words: the horizontal pressure gradient at any depth is the sea-surface tilt plus the accumulated effect of horizontal density differences above that depth.* The first term is the same at every depth; the second grows with depth.

**Geostrophic balance**, taken from [atmospheric-science 4.3](../../atmospheric-science/lessons/04-03-geostrophic-gradient-wind.md):

$$f u = -\frac{1}{\rho_0}\frac{\partial p}{\partial y}, \qquad f v = +\frac{1}{\rho_0}\frac{\partial p}{\partial x}.$$

Substituting, the eastward geostrophic velocity is

$$u(z) = -\frac{g}{f}\frac{\partial\eta}{\partial y} \;-\; \frac{g}{\rho_0 f}\int_z^{0}\frac{\partial\rho}{\partial y}\,dz'.$$

*In words: a depth-independent piece set by the sea-surface slope, plus a depth-varying piece set by the density field.* Differentiating in $z$ kills the first term entirely and leaves the **thermal wind relation** (the ocean's version of which is [2.2](02-02-thermal-wind-acc.md)'s subject):

$$\frac{\partial u}{\partial z} = +\frac{g}{\rho_0 f}\frac{\partial\rho}{\partial y}.$$

*In words: eastward flow increases upward wherever denser water lies to the north.* The sign follows from combining geostrophy with hydrostatics — $\partial_z(\partial_y p) = \partial_y(-\rho g) = -g\,\partial_y\rho$, and the extra minus in $u = -(\rho_0f)^{-1}\partial_y p$ flips it back to positive. Check it physically every time: dense water to the north, in the northern hemisphere, gives a surface-intensified **eastward** jet, which is the Gulf Stream and the Antarctic Circumpolar Current.

**Scale check: how big is the sea-surface tilt?** Invert the barotropic term for a surface current $u$:

$$\left|\frac{\partial\eta}{\partial y}\right| = \frac{|u|\,|f|}{g}.$$

For $u = 1\ \mathrm{m\,s^{-1}}$ at 40° ($f = 9.37\times10^{-5}$): $\partial\eta/\partial y = 9.55\times10^{-6}$, which is **1 metre over 105 km**. That is the entire dynamic signal at the sea surface: a metre, spread over a hundred kilometres, on top of tides of several metres and waves of several metres. Extracting it is a real achievement of instrument engineering.

**Dynamic height.** The classical formulation replaces density with **specific volume anomaly**

$$\delta(S,\theta,p) = \frac{1}{\rho(S,\theta,p)} - \frac{1}{\rho(35,\,0\,^\circ\mathrm{C},\,p)},$$

*In words: how much roomier a given parcel is than a standard cold salty parcel at the same pressure.* The **geopotential anomaly** between two pressure levels at one station is

$$\Delta\Phi = \int_{p_2}^{p_1}\delta\,dp,$$

and the mean geostrophic velocity between those levels, normal to the line joining stations A and B a distance $L$ apart, is

$$\boxed{\ \bar v = \frac{\Delta\Phi_A - \Delta\Phi_B}{f\,L}\ }$$

*In words: the difference in "how much thicker the water column is" between two stations, divided by $f$ and the separation.* This is the same physics as thermal wind, packaged so that it can be evaluated from station data with a hand calculator — which is precisely what it was designed for in 1903.

**Units warning.** Geopotential anomaly is in $\mathrm{m^2\,s^{-2}}$; "dynamic metres" and "dynamic centimetres" divide by 10, an old convention that persists on published charts and is a reliable source of factor-of-ten errors.

## Picture

![A north-south section of the ocean from 0 to 2500 m depth with two stations 200 km apart. The blue sea surface line slopes downward toward the pole, 1.17 m higher on the warm equatorward side. Coral isopycnals slope the opposite way, shoaling toward the pole, and their tilt decreases with depth until the deepest one is flat at 2000 m — the level of no motion. Circles with dots show the current out of the page: 0.67 m per second at the surface, 0.33 at 1000 m, zero at 2000 m](assets/02-01-fig1.svg)

The two tilts fight, and the depth at which they draw is the level of no motion.

## Worked examples

**Example 1 (mechanical — a current from a density section).** Two stations at 36°N, 200 km apart on a north–south line. Between the surface and 2000 m, density at any fixed depth is greater at the northern station by $\Delta\rho = 0.6\ \mathrm{kg\,m^{-3}}$, uniformly with depth; below 2000 m the two stations are identical. Take $\rho_0 = 1027\ \mathrm{kg\,m^{-3}}$, $f = 8.57\times10^{-5}\ \mathrm{s^{-1}}$.

(a) *The shear.* Take $y$ northward and $u$ eastward. Density increases northward, so $\partial\rho/\partial y = +0.6/(2\times10^{5}) = +3.0\times10^{-6}\ \mathrm{kg\,m^{-4}}$, and

$$\frac{\partial u}{\partial z} = \frac{g}{\rho_0 f}\frac{\partial\rho}{\partial y} = \frac{9.81\times3.0\times10^{-6}}{1027\times8.57\times10^{-5}} = \frac{2.943\times10^{-5}}{0.08801} = +3.34\times10^{-4}\ \mathrm{s^{-1}}.$$

Positive, so the eastward flow strengthens upward: a surface-intensified eastward jet with cold dense water on its poleward side. That is the correct configuration, and checking it against a current you already know is the habit worth building — the algebra of geostrophic signs is unforgiving, and a physical check costs one sentence.

(b) *The surface velocity*, assuming zero at 2000 m:

$$u_{\text{surf}} = \left|\frac{\partial u}{\partial z}\right|\times 2000 = 3.34\times10^{-4}\times2000 = 0.67\ \mathrm{m\,s^{-1}}.$$

(c) *The sea-surface tilt this implies:*

$$\left|\frac{\partial\eta}{\partial y}\right| = \frac{u_{\text{surf}}f}{g} = \frac{0.67\times8.57\times10^{-5}}{9.81} = 5.85\times10^{-6},$$

$$\Delta\eta = 5.85\times10^{-6}\times2\times10^{5} = 1.17\ \mathrm{m}.$$

A metre and a bit across 200 km, high on the warm side. Every number in the figure is this calculation.

**Example 2 (why you'd care — what the level of no motion costs).** The same section is used to estimate transport through a 200 km wide, 4000 m deep section. The dynamic method with a level of no motion at 2000 m gives, for a velocity profile falling linearly from $0.67\ \mathrm{m\,s^{-1}}$ at the surface to zero at 2000 m and zero below,

$$T = L\int u\,dz = 2\times10^{5}\times\left(\tfrac12\times0.67\times2000\right) = 2\times10^{5}\times670 = 1.34\times10^{8}\ \mathrm{m^3\,s^{-1}} = 134\ \mathrm{Sv}.$$

Now suppose the true flow has an additional uniform $0.02\ \mathrm{m\,s^{-1}}$ at every depth — a barotropic current of two centimetres per second, which is below the detection threshold of any classical method.

$$\Delta T = 2\times10^{5}\times0.02\times4000 = 1.6\times10^{7}\ \mathrm{m^3\,s^{-1}} = 16\ \mathrm{Sv}.$$

**A 2 cm s⁻¹ error produces a 16 Sv error — 12 percent of the estimate — and there is nothing in the density data that could have revealed it.**

*The point.* The error does not come from a poor measurement. The density field was measured to $0.002\ \mathrm{kg\,m^{-3}}$; the CTD is not the problem. The error comes from the *unmeasured* degree of freedom, and it is amplified by the fact that the missing velocity multiplies the **full** depth of the ocean while the measured shear only contributes over the upper 2000 m. This is the general structure: **an integral constant that is small everywhere can dominate a depth-integrated quantity.** It is why the abyssal circulation was so badly constrained for so long, why the choice of reference level was a live controversy for decades, and why inverse methods — which fit the reference levels to satisfy global mass and property conservation rather than guessing them — became a whole subfield. Modern estimates pin the constant with altimetry, deep floats, or moored transport arrays like RAPID ([6.5](06-05-observing-the-ocean.md)).

## Watch out

- **You might think** a level of no motion is a physical feature you could locate in the data. **Actually** it is an assumption you impose. Sometimes there is good reason for it — a flat isopycnal, a known blocking sill, a deep float measurement — and often there is not, in which case the honest thing is to state the reference level chosen and report how sensitive the answer is to it.
- **You might think** the sea-surface slope is negligible because a metre over 100 km is nothing. **Actually** the barotropic term is the *only* term at depths below the density structure, so it is precisely what determines the deep flow — the part hardest to measure and largest in volume. Small slope, large consequence.
- **You might think** satellite altimetry gives absolute currents directly. **Actually** it gives sea surface height above a *reference ellipsoid*, which must then be corrected by the geoid to yield dynamic topography. The **time-varying** part needs no geoid at all (it differences out), which is why altimetric eddy and sea-level-change work matured a decade before altimetric mean-circulation work did.

## One-liner

> You cannot measure the ocean's pressure gradient directly, but you can measure how it changes with depth from the density field alone — leaving exactly one unknown constant per station pair, whose value is invisible to hydrography, negligible in the surface current, and decisive in the transport.

## Problems

**P1 (🟢)** A current of $0.40\ \mathrm{m\,s^{-1}}$ flows eastward at 30°N, where $f = 7.29\times10^{-5}\ \mathrm{s^{-1}}$. (a) Compute the required sea-surface slope. (b) Compute the sea-surface height difference across 300 km. (c) Given that a satellite altimeter measures height to about 3 cm, state what fraction of this signal that represents.

**P2 (🟡)** Two stations 150 km apart at 45°N ($f = 1.031\times10^{-4}\ \mathrm{s^{-1}}$) give geopotential anomalies relative to 1500 dbar of $\Delta\Phi_A = 12.40\ \mathrm{m^2\,s^{-2}}$ and $\Delta\Phi_B = 11.65\ \mathrm{m^2\,s^{-2}}$ at the surface. (a) Compute the mean geostrophic velocity between the surface and 1500 dbar normal to the station line. (b) Assuming the velocity falls linearly from its surface value to zero at 1500 dbar, find the surface velocity. (c) The reference level is later shown to be moving at $0.03\ \mathrm{m\,s^{-1}}$ in the same direction. Recompute the transport per unit width over the full 4500 m depth, with and without the correction, and state the percentage error.

**P3 (🔴, optional)** A hydrographic section across the Gulf Stream at 36°N ($f = 8.57\times10^{-5}$) shows the $\sigma_\theta = 27.0$ surface at 500 m on the offshore side and at 900 m on the inshore side, 100 km apart, with $N^2 = 4.0\times10^{-6}\ \mathrm{s^{-2}}$ and $\rho_0 = 1027\ \mathrm{kg\,m^{-3}}$ in that depth range. (a) Convert the isopycnal slope into a horizontal density gradient at fixed depth, using $\partial\rho/\partial y|_z = -\frac{d\rho}{dz}\frac{\partial z_{\text{isopycnal}}}{\partial y}$ and $\frac{d\rho}{dz} = -\rho_0N^2/g$. (b) Compute the thermal-wind shear. (c) Assuming the shear is uniform from the surface to 1500 m and the flow vanishes there, compute the surface velocity and compare with the Gulf Stream's observed 1.5 to 2 m s⁻¹. (d) Comment on what the comparison suggests about the level-of-no-motion assumption here.

<details>
<summary>Solutions</summary>

**P1** (a) $$\left|\frac{\partial\eta}{\partial y}\right| = \frac{u f}{g} = \frac{0.40\times7.29\times10^{-5}}{9.81} = 2.97\times10^{-6}.$$

(b) $$\Delta\eta = 2.97\times10^{-6}\times3\times10^{5} = 0.892\ \mathrm{m}.$$

(c) The altimeter's 3 cm error is $0.03/0.892 = 3.4$ percent of the signal — comfortably resolvable. Note this is why altimetry works at all: the dynamic signal across a basin is of order a metre, and the instrument resolves it to a few percent.

**P2** (a) $$\bar v = \frac{\Delta\Phi_A - \Delta\Phi_B}{fL} = \frac{12.40 - 11.65}{1.031\times10^{-4}\times1.5\times10^{5}} = \frac{0.75}{15.47} = 0.0485\ \mathrm{m\,s^{-1}}.$$

(b) If the profile is linear from $v_{\text{surf}}$ at the surface to zero at 1500 dbar, its mean is $v_{\text{surf}}/2$, so

$$v_{\text{surf}} = 2\times0.0485 = 0.0970\ \mathrm{m\,s^{-1}}.$$

(c) Transport per unit width without the correction — the flow is confined to the top 1500 m:

$$T_1 = \bar v\times1500 = 0.0485\times1500 = 72.8\ \mathrm{m^2\,s^{-1}}.$$

With a uniform $0.03\ \mathrm{m\,s^{-1}}$ added at every depth down to 4500 m:

$$T_2 = 72.8 + 0.03\times4500 = 72.8 + 135.0 = 207.8\ \mathrm{m^2\,s^{-1}}.$$

The uncorrected estimate is low by $135.0/207.8 = 65$ percent.

That is a startling number and it is not a contrivance: a 3 cm s⁻¹ reference-level velocity — undetectable by hydrography, comparable to the mean abyssal flow — carries nearly twice the transport of the entire baroclinic shear, because it acts over three times the depth. **In a deep ocean with weak baroclinic structure, the reference level is not a correction to the answer; it is the answer.**

**P3** (a) Take $y$ toward the inshore, warm side. The isopycnal lies at $z = -500\ \mathrm{m}$ offshore and $z = -900\ \mathrm{m}$ inshore — **deeper** in the $+y$ direction, so in $z$-coordinates (upward positive) its slope is *negative*:

$$\frac{\partial z_{\text{iso}}}{\partial y} = \frac{-900 - (-500)}{10^{5}} = -4.0\times10^{-3}.$$

The vertical density gradient:

$$\frac{d\rho}{dz} = -\frac{\rho_0N^2}{g} = -\frac{1027\times4.0\times10^{-6}}{9.81} = -4.19\times10^{-4}\ \mathrm{kg\,m^{-4}}.$$

Hence

$$\frac{\partial\rho}{\partial y}\bigg|_z = -\frac{d\rho}{dz}\frac{\partial z_{\text{iso}}}{\partial y} = -(-4.19\times10^{-4})(-4.0\times10^{-3}) = -1.68\times10^{-6}\ \mathrm{kg\,m^{-4}}.$$

Negative, as it must be: density *decreases* toward the warm inshore side. (Depth and $z$ have opposite signs, and this is the single most common place to lose a minus in the whole subject.)

(b) $$\left|\frac{\partial u}{\partial z}\right| = \frac{g}{\rho_0 f}\left|\frac{\partial\rho}{\partial y}\right| = \frac{9.81\times1.68\times10^{-6}}{1027\times8.57\times10^{-5}} = \frac{1.648\times10^{-5}}{0.08801} = 1.87\times10^{-4}\ \mathrm{s^{-1}}.$$

The negative $\partial\rho/\partial y$ with $y$ inshore means the along-shore flow strengthens upward in the $-y$-perpendicular sense — northeastward along the coast, which is the Gulf Stream's actual direction.

(c) $$u_{\text{surf}} = 1.87\times10^{-4}\times1500 = 0.281\ \mathrm{m\,s^{-1}}.$$

Against an observed 1.5 to 2 m s⁻¹, this is **low by a factor of five to seven**.

(d) The discrepancy is far too large to be a level-of-no-motion problem in the sense of P2 — adding a barotropic component of $1.5\ \mathrm{m\,s^{-1}}$ over the whole water column would give an absurd transport. The right diagnosis is that the **horizontal scale is wrong**: the Gulf Stream's isopycnal tilt is not spread over 100 km, it is concentrated in a front 40 to 60 km wide, and averaging the 400 m of isopycnal drop over 100 km underestimates the local gradient by roughly the ratio of those widths. Redoing the calculation over a 50 km front doubles the shear to $3.7\times10^{-4}\ \mathrm{s^{-1}}$ and the surface speed to $0.56\ \mathrm{m\,s^{-1}}$; concentrating it further into a 25 km core doubles it again.

The general lesson, and it applies to every geostrophic calculation from station data: **the dynamic method resolves only what the station spacing resolves.** A 100 km station spacing across a 50 km jet does not give you a slightly smeared jet, it gives you a systematically weakened one — the peak velocity is diluted in direct proportion to the over-wide averaging interval. This is why the classical hydrographic estimates of western boundary current transports were low, and why the modern practice is to close station spacing to 10 to 20 km across boundary currents. It also shows that the level-of-no-motion assumption is not the only, or even the largest, source of error in a real section.

</details>

## Flashback

**From Lesson 1.4 (Stratification, stability and the buoyancy frequency):** A profile in the eastern tropical Pacific has $d\theta/dz = 1.8\times10^{-2}\ \mathrm{K\,m^{-1}}$ and $dS/dz = 1.0\times10^{-3}\ \mathrm{m^{-1}}$ in the upper thermocline (both increasing upward). Take $\alpha = 2.4\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 7.6\times10^{-4}$. (a) Compute $N^2$ and $N$. (b) Compute the buoyancy period in minutes. (c) Compute $R_\rho$ and state whether double diffusion is important here, giving the reason in one sentence.

<details>
<summary>Solution</summary>

(a) $$N^2 = g\left(\alpha\frac{d\theta}{dz} - \beta\frac{dS}{dz}\right) = 9.81\left(2.4\times10^{-4}\times1.8\times10^{-2} - 7.6\times10^{-4}\times1.0\times10^{-3}\right)$$
$$= 9.81\left(4.32\times10^{-6} - 7.60\times10^{-7}\right) = 9.81\times3.56\times10^{-6} = 3.49\times10^{-5}\ \mathrm{s^{-2}},$$
$$N = 5.91\times10^{-3}\ \mathrm{s^{-1}}.$$

(b) $$\frac{2\pi}{N} = \frac{6.2832}{5.91\times10^{-3}} = 1063\ \mathrm{s} = 17.7\ \mathrm{min}.$$

(c) $$R_\rho = \frac{\alpha\,d\theta/dz}{\beta\,dS/dz} = \frac{4.32\times10^{-6}}{7.60\times10^{-7}} = 5.68.$$

Well above the fingering threshold of about 2, so **double diffusion is unimportant here**: temperature is doing nearly six times as much stratifying as salinity is doing destabilizing, so the two are nowhere near cancelling and molecular diffusivity has no near-balance to exploit.

*Check.* This is the expected contrast with the subtropical Atlantic case of [1.4](01-04-stratification-buoyancy-frequency.md), where $R_\rho = 1.05$. The equatorial Pacific thermocline is a *thermal* thermocline — a 20 K temperature drop over a couple of hundred metres with almost no salinity structure — whereas the subtropical Atlantic has a strong salinity maximum sitting on top of fresher water. Double diffusion needs a salinity structure to work with, and here there barely is one.

</details>

## Connections

- **Backward:** geostrophic balance and the Rossby number come wholesale from [atmospheric-science 4.3](../../atmospheric-science/lessons/04-03-geostrophic-gradient-wind.md); the density field being integrated is [1.2](01-02-density-equation-of-state.md)'s, and its accuracy is limited by exactly the potential-density subtleties of [1.1](01-01-temperature-salinity-pressure.md).
- **Forward:** differentiating this lesson's result in $z$ gives the thermal wind of [2.2](02-02-thermal-wind-acc.md), which is applied to the ACC; the reference-level problem is what altimetry and the RAPID array solve in [6.5](06-05-observing-the-ocean.md); and the depth-integrated transport computed here is the quantity the Sverdrup balance predicts independently in [3.1](03-01-sverdrup-balance-interior-gyre.md).
- **Sideways (atmospheric science):** the barotropic/baroclinic split is the same decomposition the atmosphere makes between surface-pressure and thickness terms — a weather map's 1000 to 500 hPa thickness chart is exactly the ocean's baroclinic term, and the surface pressure chart is exactly $\eta$. The ocean's difficulty is only that it has no barometer for the surface term.

# Atmospheric Science · Lesson 4.3: Geostrophic & gradient wind balance

> ⏱ ~15 min · Module 4: Dynamics & weather systems · Builds on: [4.2 The Coriolis effect](04-02-coriolis-effect.md), [4.1 The pressure-gradient force](04-01-pressure-gradient-force-equations-of-motion.md) · Unlocks: 4.4 (thermal wind), 4.5 (cyclones)

## Why this matters

This is the lesson that lets you read a weather map. Given nothing but a pressure field, geostrophic balance hands you the wind — its speed *and* its direction — with a one-line formula. That is an astonishing amount of leverage for a single approximation, and it is why upper-air charts are drawn the way they are: the contours *are* the streamlines, and their spacing *is* the wind speed. Add curvature and friction and you get the two refinements that turn the idealization into something that matches observation: the gradient wind, which explains why lows can be intense and highs cannot, and the friction-modified surface wind, which explains why air spirals *into* a low and makes it rain.

## The idea

**The balance.** Start air at rest in a pressure gradient. The pressure-gradient force pushes it toward low pressure, so it starts moving that way. But the moment it moves, Coriolis deflects it right (Northern Hemisphere). As it turns, the deflection turns with it, and it keeps turning until the Coriolis force points exactly *opposite* the pressure-gradient force. Now the two cancel, there is no net force, and the parcel continues in a straight line at constant speed — **along** the isobars, not across them.

That final state is **geostrophic balance**, and it explains the single most counter-intuitive fact about the atmosphere: air does not flow from high pressure to low. It flows *around*. Pressure systems can therefore persist for a week instead of collapsing in an afternoon.

**Which way around?** With low pressure to the left, in the Northern Hemisphere. That is **Buys-Ballot's law**: stand with your back to the wind and low pressure is on your left. It follows directly from the balance — Coriolis must point from low toward high to oppose the pressure-gradient force, and Coriolis points right of the motion, so low pressure sits on the wind's left. In the Southern Hemisphere everything mirrors.

**Adding curvature.** Real isobars curve. Around a low, the flow is turning continuously, and a turning parcel needs a *net inward* force to supply the centripetal acceleration — the two forces cannot cancel exactly. Around a **low**, the pressure-gradient force must exceed Coriolis, which means the wind is *slower* than geostrophic (subgeostrophic). Around a **high**, Coriolis must exceed the pressure gradient, so the wind is *faster* than geostrophic (supergeostrophic). And there is a hard limit on anticyclones: beyond a certain pressure gradient, no balanced solution exists at all. That asymmetry is why intense, tight lows are common and intense, tight highs are not.

**Adding friction.** Near the ground, drag slows the wind. Slower wind means weaker Coriolis, which no longer balances the pressure-gradient force — so the residual push turns the wind partly *across* the isobars, toward low pressure. Air therefore spirals **inward** to a surface low and **outward** from a surface high. Inward flow must go somewhere, so it rises: convergence, ascent, cloud, rain. This is why lows are stormy and highs are clear, and the reason is friction, not the pressure itself.

## The formal version

**Geostrophic wind.** Set the acceleration and friction to zero in [4.1](04-01-pressure-gradient-force-equations-of-motion.md)'s momentum equations. Writing $n$ for the coordinate pointing across the isobars from low toward high pressure, the balance $|\text{PGF}| = |fV|$ gives

$$\boxed{\ V_g = -\frac{1}{\rho f}\frac{\partial p}{\partial n}\ }$$

*In words: the geostrophic wind speed is the pressure gradient divided by density and by the Coriolis parameter, blowing along the isobars with low pressure on the left in the Northern Hemisphere.* In component form, $u_g = -(1/\rho f)\,\partial p/\partial y$ and $v_g = (1/\rho f)\,\partial p/\partial x$.

Two consequences follow immediately from the $f$ in the denominator:

- **Nearer the equator, the same pressure gradient drives a faster wind** — and at the equator $f = 0$ and the formula fails entirely. Geostrophic balance is a mid-latitude idea; within about 10 degrees of the equator it is useless.
- **A given wind requires a bigger gradient at high latitude.** A 20 m s⁻¹ wind needs twice the gradient at 60 degrees that it needs at 25 degrees.

**On pressure surfaces.** Upper-air charts plot the *height* $Z$ of a pressure surface rather than the pressure at a height. Rewriting the balance in that coordinate (using the hydrostatic equation) removes the density entirely:

$$V_g = -\frac{g}{f}\frac{\partial Z}{\partial n}.$$

*In words: on a constant-pressure chart, the wind is proportional to the slope of the height contours.* This is why forecasters work on pressure surfaces — the awkward $\rho$, which varies by a factor of three through the troposphere, drops out, and $g/f \approx 9.5\times10^{4}\ \mathrm{m\,s^{-1}}$ per unit slope is a single constant at a given latitude.

**Gradient wind.** For flow along a curved path of radius of curvature $R$ (positive for cyclonic curvature), the centripetal requirement $V^2/R$ must be supplied by the *imbalance*:

$$\frac{V^2}{R} + fV = \frac{1}{\rho}\left|\frac{\partial p}{\partial n}\right| = fV_g,$$

a quadratic in $V$ whose physically relevant root is

$$V = -\frac{fR}{2} + \sqrt{\frac{f^2R^2}{4} + fRV_g} \quad\text{(cyclonic)}, \qquad V = \frac{fR}{2} - \sqrt{\frac{f^2R^2}{4} - fRV_g} \quad\text{(anticyclonic)}.$$

The anticyclonic root requires $V_g \le fR/4$ — beyond that the discriminant is negative and **no balanced anticyclonic flow exists**. *In words: anticyclones are forbidden to have tight pressure gradients near their centres.* This is a real, observed constraint: the isobars in the middle of a high are always slack, while a hurricane's eyewall packs 50 hPa into 30 km.

**Cyclostrophic limit.** When $R$ is tiny, $V^2/R \gg fV$ and Coriolis drops out entirely:

$$V = \sqrt{\frac{R}{\rho}\left|\frac{\partial p}{\partial n}\right|}.$$

This is the tornado and dust-devil regime — the $\mathrm{Ro} \gg 1$ end of [4.1](04-01-pressure-gradient-force-equations-of-motion.md)'s scale analysis (the [regime table](../reference.md#which-balance-applies) collects all four), where the hemisphere is irrelevant and either sense of rotation is possible.

**Surface friction.** Add $-k\mathbf{V}$ to the balance and the three forces — pressure gradient, Coriolis, friction — close a triangle rather than a line. The wind ends up crossing the isobars toward low pressure by an angle of roughly 10 to 20 degrees over the ocean and 25 to 45 degrees over rough land, and its speed drops to perhaps 60 to 70 percent of geostrophic. The cross-isobar component is what produces **convergence into lows** (hence ascent and precipitation) and **divergence out of highs** (hence subsidence and clear skies).

## Picture

![Left, straight isobars from 996 up to 1012 hPa with an air parcel in geostrophic balance: the pressure-gradient force pointing toward low pressure, the Coriolis force pointing exactly opposite, and the resulting wind blowing along the isobars with low pressure on its left; right, a circular low with counterclockwise gradient-wind flow around it and a dashed surface trajectory spiralling inward across the isobars under friction](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — the wind from a map).** At 45°N, sea-level pressure falls by 4 hPa over 200 km. Take $\rho = 1.2\ \mathrm{kg\,m^{-3}}$ and $\Omega = 7.29\times10^{-5}\ \mathrm{s^{-1}}$. Find the geostrophic wind and its direction.

$$f = 2\Omega\sin45^\circ = 2\times7.29\times10^{-5}\times0.7071 = 1.031\times10^{-4}\ \mathrm{s^{-1}},$$

$$\left|\frac{\partial p}{\partial n}\right| = \frac{400\ \mathrm{Pa}}{2\times10^{5}\ \mathrm{m}} = 2.0\times10^{-3}\ \mathrm{Pa\,m^{-1}},$$

$$V_g = \frac{2.0\times10^{-3}}{1.2 \times 1.031\times10^{-4}} = \frac{2.0\times10^{-3}}{1.237\times10^{-4}} = 16.2\ \mathrm{m\,s^{-1}}.$$

*Direction:* along the isobars, with low pressure on the left (Buys-Ballot). If pressure falls toward the north, the wind blows from the west — a westerly of about 16 m s⁻¹, or 31 knots. This is an entirely typical mid-latitude wind from an entirely typical gradient.

*Check at the equator.* Redo with $\phi = 0$: $f = 0$, and $V_g = 2.0\times10^{-3}/0 \to \infty$. The formula does not merely become inaccurate, it breaks. Physically, there is nothing to turn the flow, so air accelerates straight down the gradient until friction or the gradient's own collapse stops it. Equatorial dynamics needs a different set of balances entirely.

**Example 2 (why you'd care — why hurricanes but not "antihurricanes").** At 45°N with $V_g = 16.2\ \mathrm{m\,s^{-1}}$, compare the gradient wind for cyclonic and anticyclonic curvature at $R = 500$ km and $R = 1000$ km.

*Cyclonic, $R = 500$ km:*
$$V = -\frac{fR}{2} + \sqrt{\frac{f^2R^2}{4} + fRV_g} = -25.8 + \sqrt{664.8 + 835.1} = -25.8 + 38.7 = 12.9\ \mathrm{m\,s^{-1}},$$

**subgeostrophic** by 20 percent, as promised.

*Anticyclonic, $R = 500$ km:* the requirement is $V_g \le fR/4 = 1.031\times10^{-4}\times5\times10^{5}/4 = 12.9\ \mathrm{m\,s^{-1}}$. But $V_g = 16.2 > 12.9$, so **there is no solution**. An anticyclone simply cannot sustain this pressure gradient at this radius.

*Anticyclonic, $R = 1000$ km:* now $fR/4 = 25.8 > 16.2$, so a solution exists:
$$V = \frac{fR}{2} - \sqrt{\frac{f^2R^2}{4} - fRV_g} = 51.6 - \sqrt{2659 - 1670} = 51.6 - 31.4 = 20.1\ \mathrm{m\,s^{-1}},$$

**supergeostrophic** by 24 percent.

*The asymmetry, in words.* Squeeze a low tighter and the balance always has a solution — the wind just runs slower than geostrophic and the storm intensifies. Squeeze a high and you eventually hit a wall: past $V_g = fR/4$ the flow cannot balance, and the pressure gradient simply relaxes. This is why the lowest sea-level pressure ever recorded is 870 hPa (Typhoon Tip) while the highest is 1084 hPa — a 143 hPa excursion below the mean against 71 hPa above, and the highs are all broad and slack while the lows are tight and violent.

## Watch out

- **You might think** you can use geostrophic balance anywhere. **Actually** it requires $\mathrm{Ro} \ll 1$, so it fails within about 10 degrees of the equator (where $f \to 0$), in small-scale flows (sea breezes, thunderstorms, tornadoes), and in rapidly-changing situations. It is a mid-latitude, large-scale, slowly-evolving approximation.
- **You might think** the geostrophic wind is the real wind. **Actually** it is the wind the pressure field *would* support in exact balance. The real wind differs by the ageostrophic component — small (10 to 20 percent) but crucial, since it is the ageostrophic flow that produces convergence, ascent, and therefore all the weather. Perfect geostrophic flow does nothing at all.
- **You might think** friction slows the wind and that is the end of it. **Actually** friction *changes the direction* too, and the direction change matters more: turning the wind across the isobars is what fills lows, empties highs, and drives the vertical motion that makes clouds. A frictionless atmosphere would have permanent, rainless pressure systems.
- **You might think** the sign conventions differ between hemispheres. **Actually** the equations are identical; the sign lives entirely in $f = 2\Omega\sin\phi$, which changes sign at the equator. Write $f$ signed and everything follows automatically — Southern-Hemisphere lows circulate clockwise without any new rule.

## One-liner

> When the pressure gradient and Coriolis cancel, the wind blows along the isobars at $V_g = -(1/\rho f)\,\partial p/\partial n$ with low pressure on its left — and the small departures from that balance, from curvature and friction, are where all the weather comes from.

## Problems

**P1 (🟢)** At 30°N, pressure falls by 6 hPa over 500 km. With $\rho = 1.2\ \mathrm{kg\,m^{-3}}$, compute the geostrophic wind speed. If pressure decreases toward the east, from which direction does the wind blow?

**P2 (🟡)** A 500 hPa chart at 50°N shows height contours falling by 120 m over 400 km. (a) Compute the geostrophic wind using the geopotential form. (b) Explain in one sentence why the density does not appear, and why that is convenient.

**P3 (🔴, optional)** A tornado has a pressure drop of 40 hPa over its 300 m radius, with $\rho = 1.1\ \mathrm{kg\,m^{-3}}$ at the surface. (a) Compute the cyclostrophic wind speed. (b) Compute the ratio of the centrifugal term to the Coriolis term at 40°N, and use it to justify dropping Coriolis. (c) What does your answer to (b) imply about which way tornadoes spin?

<details>
<summary>Solutions</summary>

**P1** $$f = 2\times7.292\times10^{-5}\times\sin30^\circ = 1.4584\times10^{-4}\times0.5 = 7.292\times10^{-5}\ \mathrm{s^{-1}},$$

$$\left|\frac{\partial p}{\partial n}\right| = \frac{600\ \mathrm{Pa}}{5\times10^{5}\ \mathrm{m}} = 1.2\times10^{-3}\ \mathrm{Pa\,m^{-1}},$$

$$V_g = \frac{1.2\times10^{-3}}{1.2\times7.292\times10^{-5}} = \frac{1.2\times10^{-3}}{8.750\times10^{-5}} = 13.7\ \mathrm{m\,s^{-1}}.$$

*Direction:* pressure falls toward the east, so low pressure lies to the east. In the Northern Hemisphere the wind must keep low pressure on its left, which means it blows toward the **south** — a northerly wind (winds are named for where they come *from*).

*Check.* Compare with Example 1: a gentler gradient ($1.2$ against $2.0\times10^{-3}$) at a lower latitude (smaller $f$). The two effects partly cancel, leaving a wind only 15 percent weaker.

**P2** (a) $$f = 1.4584\times10^{-4}\times\sin50^\circ = 1.4584\times10^{-4}\times0.7660 = 1.117\times10^{-4}\ \mathrm{s^{-1}},$$

$$V_g = \frac{g}{f}\left|\frac{\partial Z}{\partial n}\right| = \frac{9.81}{1.117\times10^{-4}} \times \frac{120}{4\times10^{5}} = 8.782\times10^{4} \times 3.0\times10^{-4} = 26.3\ \mathrm{m\,s^{-1}}.$$

(b) Density does not appear because it has been eliminated by the hydrostatic equation: on a *constant-pressure* surface, the horizontal pressure gradient at a fixed height is exactly $\rho g$ times the slope of that surface, and the $\rho$ cancels against the $1/\rho$ in the pressure-gradient force.

That is convenient because $\rho$ varies by a factor of three through the troposphere and is never measured directly, whereas the height of a pressure surface is exactly what a radiosonde reports. Using pressure as the vertical coordinate makes the geostrophic relation the *same equation at every level*, with only $f$ varying.

**P3** (a) $$V = \sqrt{\frac{R}{\rho}\left|\frac{\partial p}{\partial n}\right|} = \sqrt{\frac{300}{1.1}\times\frac{4000\ \mathrm{Pa}}{300\ \mathrm{m}}} = \sqrt{272.7 \times 13.33} = \sqrt{3636} = 60.3\ \mathrm{m\,s^{-1}}.$$

About 60 m s⁻¹, or 135 mph — a solid EF2/EF3 tornado.

(b) Centrifugal: $V^2/R = (60.3)^2/300 = 12.1\ \mathrm{m\,s^{-2}}$. Coriolis at 40°N: $fV = 9.37\times10^{-5}\times60.3 = 5.65\times10^{-3}\ \mathrm{m\,s^{-2}}$. The ratio is

$$\frac{12.1}{5.65\times10^{-3}} = 2140.$$

The centrifugal term is two thousand times larger, so dropping Coriolis introduces an error of about 0.05 percent — utterly negligible. (Equivalently, this ratio *is* the Rossby number $V/(fR)$.)

(c) It implies that **rotation direction is not determined by the hemisphere**. Nothing in the cyclostrophic balance prefers one sense over the other — the equation is even in $V$. Tornadoes spin the way their parent mesocyclone spins, and since mesocyclones are themselves generated by vertical wind shear tilted into the vertical by the storm updraft, they are usually but not always cyclonic. Roughly 1 to 2 percent of Northern-Hemisphere tornadoes are anticyclonic, which is exactly what a hemisphere-blind balance predicts.

*Check.* The same calculation for a mid-latitude cyclone ($V = 20$, $R = 10^{6}$ m) gives $V^2/R = 4\times10^{-4}$ against $fV = 2\times10^{-3}$ — Coriolis five times larger, so *there* it is the centrifugal term that may be neglected, recovering geostrophic balance. Same equation, opposite limit.

</details>

## Flashback

**From Lesson 3.3 (Radiative transfer & the vertical temperature profile):** A satellite channel with a vertical optical depth of $\tau = 2.5$ views a scene at a zenith angle of 45 degrees. (a) What fraction of the surface's radiation at that wavelength reaches the satellite? (b) Would this channel be useful for measuring sea-surface temperature? Why or why not?

<details>
<summary>Solution</summary>

(a) The airmass factor at 45 degrees is $1/\cos45^\circ = 1.414$, so the slant optical depth is $\tau_{\text{slant}} = 2.5\times1.414 = 3.54$, giving

$$\frac{I}{I_0} = e^{-3.54} = 0.029,$$

about 2.9 percent.

(b) **No.** With 97 percent of the surface's radiation absorbed before it escapes, essentially everything the satellite sees was emitted by the *atmosphere*, not the surface. The brightness temperature would report some mid- or upper-tropospheric level, not the sea. A sea-surface channel must sit in the atmospheric window (8 to 12 micrometres) where $\tau \ll 1$ and the emission level is the surface itself.

*Check.* Contrast a window channel with $\tau = 0.1$: at the same 45 degrees, $e^{-0.141} = 0.87$, so 87 percent of the surface signal survives — and the small remainder is corrected for using a second channel, which is exactly how operational sea-surface-temperature retrievals work.

</details>

## Connections

- **Backward:** the balance is the two large terms of [4.1](04-01-pressure-gradient-force-equations-of-motion.md)'s scale analysis set against each other, with $f$ from [4.2](04-02-coriolis-effect.md); the geopotential form uses the hydrostatic equation of [1.2](01-02-hydrostatic-equation-barometric-law.md).
- **Forward:** [4.4](04-04-thermal-wind-general-circulation.md) asks how $V_g$ changes with height and finds the thermal wind and the jet stream; [4.5](04-05-air-masses-fronts-cyclones.md) uses the frictional cross-isobar inflow to explain why lows are the rainy ones.
- **Sideways (oceanography):** identical balances govern the ocean, where the "pressure gradient" comes from the tilt of the sea surface. Measuring that tilt by satellite altimetry and applying $V_g = (g/f)\,\partial Z/\partial n$ is how the global surface circulation is mapped — the same equation as P2, applied to water. See [`oceanography`](../../oceanography/syllabus.md).

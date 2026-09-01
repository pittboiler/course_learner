# Atmospheric Science · Lesson 2.6: Cloud classification & what clouds tell you

> ⏱ ~15 min · Module 2: Moisture, clouds & stability · Builds on: [2.5 The skew-T log-p diagram](02-05-skew-t-log-p-diagram.md), [2.3 Cloud & precipitation formation](02-03-cloud-precipitation-formation.md) · Unlocks: 4.5 (fronts & cyclones), 6.4 (observing the atmosphere)

## Why this matters

A cloud is a *sounding you can see*. Everything Module 2 built — the LCL, the depth of the unstable layer, the equilibrium level, whether the water is liquid or ice, whether a layer is being lifted gently or overturning violently — leaves a visible signature in the shape and height of the cloud it produces. Learning the ten genera is not taxonomy for its own sake; it is learning to read the atmosphere's state without instruments, which is what every forecaster did before 1930 and what every pilot, sailor and mountaineer still does. It is also the observational half of [2.3](02-03-cloud-precipitation-formation.md): that lesson explained how a droplet forms, this one explains what the resulting cloud looks like and why.

## The idea

Luke Howard's 1802 scheme, still in use, needs only **two questions** and a handful of Latin roots.

**Question one: how high is it?** Three *étages*, and a prefix for each. **Cirro-** for high cloud (5 to 13 km in mid-latitudes) — so cold that it is made of ice, which is why it looks fibrous and translucent rather than sharp-edged. **Alto-** for middle cloud (2 to 7 km) — confusingly, *alto* means "high," but in this scheme it means the middle deck. And no prefix at all for low cloud (surface to 2 km).

**Question two: is it layered or heaped?** **Stratus** (Latin, "spread out") means a flat sheet, and a flat sheet means the air was lifted *gently over a wide area* — stable, forced ascent. **Cumulus** ("heap") means a lumpy, cauliflower-topped mass, and lumps mean *convection* — buoyant parcels rising individually. That single distinction is the most diagnostic thing about a sky: **layered means stable, heaped means unstable.** One extra root, **nimbus** ("rain"), marks the two that are actually precipitating.

Two questions, three answers each way, and you have the ten genera.

**Then read the geometry.** A field of cumulus all have their bases at the *same* flat altitude, because they share a surface dew-point depression and therefore an LCL ([2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)) — the flat base is the LCL made visible. The *vertical extent* is the depth of the buoyant layer: a shallow "fair-weather" cumulus means a shallow unstable layer; a cumulonimbus reaching 12 km means CAPE all the way to the tropopause. And when the top hits the EL it cannot rise further, so it spreads sideways into the **anvil** — the EL made visible.

## The formal version

**The ten genera.**

| Étage | Layered | Heaped | Precipitating |
|---|---|---|---|
| **High**, 5–13 km (ice) | Cirrostratus (Cs) | Cirrocumulus (Cc) | — (plus **Cirrus**, Ci: wispy filaments) |
| **Middle**, 2–7 km | Altostratus (As) | Altocumulus (Ac) | Nimbostratus (Ns) |
| **Low**, 0–2 km | Stratus (St) | Stratocumulus (Sc), **Cumulus** (Cu) | Cumulonimbus (Cb) |

Cumulus and cumulonimbus have *low bases* but great vertical extent, so they are classified by their base and are sometimes given a fourth category, "clouds of vertical development." Étage heights are latitude-dependent: high cloud starts near 3 km over the poles and near 6 km in the tropics, because the whole troposphere is shallower where it is colder.

**What each one diagnoses.**

| Cloud | Tells you |
|---|---|
| Cirrus, cirrostratus | ice at the tropopause; if thickening and lowering, a **warm front is approaching** — often 24 to 36 hours out ([4.5](04-05-air-masses-fronts-cyclones.md)) |
| Cirrostratus with a **22-degree halo** | hexagonal ice crystals, refracting through their 60-degree prism faces |
| Altocumulus **castellanus** (turreted) | *mid-level* instability — small convective turrets aloft; a classic same-day precursor to thunderstorms |
| Altostratus → nimbostratus | the warm-front sequence deepening; steady rain within hours |
| Stratocumulus | a **capped** boundary layer: convection is rising to an inversion and spreading out under it ([6.1](06-01-atmospheric-boundary-layer.md)) |
| Stratus, fog | saturation without convection — radiative cooling overnight, or warm moist air over a cold surface |
| Fair-weather cumulus | a shallow unstable layer with a low LCL; the flat base is that LCL |
| Cumulonimbus with anvil | CAPE released through the depth of the troposphere; the anvil marks the EL |
| **Mammatus** (pouches under an anvil) | sinking, evaporatively-cooled pockets on the underside of the anvil — an indicator of a vigorous storm, not of tornadoes |
| **Lenticularis** (lens-shaped, stationary) | a standing mountain wave |

**Two quantitative readings.** These clouds are not just qualitative signs.

*The 22-degree halo.* Hexagonal ice columns present 60-degree prism faces. Light passing through refracts, and the minimum deviation for a prism of apex angle $A$ and refractive index $n$ is

$$\delta_{\min} = 2\arcsin\!\left(n\sin\frac{A}{2}\right) - A.$$

For ice, $n = 1.31$ and $A = 60^\circ$: $\delta_{\min} = 2\arcsin(0.655) - 60^\circ = 81.8^\circ - 60^\circ = 21.8^\circ$. Light piles up at the minimum-deviation angle, so a bright ring appears **22 degrees** from the sun. The rarer 46-degree halo comes from the same crystals' 90-degree faces: $2\arcsin(1.31\sin45^\circ) - 90^\circ = 45.7^\circ$. Seeing a halo tells you the cloud is ice, not water — which tells you it is high and cold. (The refraction is Snell's law from [`waves-optics` 3.1](../../waves-optics/lessons/03-01-reflection-refraction-snell.md).)

*Lenticular wave spacing.* A stable airstream crossing a ridge oscillates at the Brunt–Väisälä frequency of [1.4](01-04-potential-temperature.md) while being carried downstream at speed $U$, so the standing waves have wavelength

$$\lambda = \frac{2\pi U}{N}.$$

With $U = 20\ \mathrm{m\,s^{-1}}$ and $N = 1.1\times10^{-2}\ \mathrm{s^{-1}}$, $\lambda = 11$ km. Lenticular clouds form at the *crests* of those waves, where air has risen above its LCL, and stay put while the air streams through them. Measuring the spacing of a lee-wave cloud train from a map gives you $N$, hence the stability of the airstream.

## Picture

![The ten cloud genera arranged with height on the vertical axis from 0 to 13 km and a layered-to-heaped axis horizontally: cirrostratus, cirrocumulus and cirrus in the high band, altostratus, altocumulus and nimbostratus in the middle band, stratus, stratocumulus and cumulus in the low band, and a cumulonimbus tower spanning the whole depth with its flat base marked as the LCL and its anvil as the equilibrium level](assets/02-06-fig1.svg)

## Worked examples

**Example 1 (mechanical — from a sounding to a sky).** A sounding has surface $T = 22$ °C, $T_d = 10$ °C, a lapse rate of 7 K km⁻¹ up to a sharp inversion at 1.8 km, and dry stable air above it. What cloud forms, and what does the sky look like?

*LCL:* depression $= 12$ K, so cloud base at $125 \times 12 = 1500$ m.

*Vertical extent:* the parcel becomes saturated at 1500 m and would continue rising — but the inversion at 1800 m is a lid. The cloud can only occupy 1500 to 1800 m, a **300 m deep layer**.

*Result:* shallow convection, spread out under a cap. That is **stratocumulus** — lumpy (it is convective) but flattened into a layer (it cannot grow up). Expect a grey, cellular overcast, no precipitation beyond drizzle, and it will burn off if the surface heats enough to lift the LCL or erode the inversion.

Change one number: remove the inversion and let 7 K km⁻¹ continue to 10 km, and the same parcel becomes a **cumulonimbus**. Same cloud base, same air mass, entirely different day — the difference is only what is above.

**Example 2 (why you'd care — the cloud sequence as a weather forecast).** You are at sea in 1890 with no radio. Over 30 hours you observe: high wispy cirrus appearing from the west; then a milky veil with a 22-degree halo around the sun; then a featureless grey sheet through which the sun is a dim disc; then steadily thickening cloud and continuous rain; then a wind shift and clearing.

*Read it.* Cirrus, cirrostratus (the halo confirms ice), altostratus, nimbostratus, then clearing. That is exactly the [4.5](04-05-air-masses-fronts-cyclones.md) warm-front sequence, seen from the ground as the front's shallow 1-in-200 sloping surface passes overhead — the highest, thinnest part of the cloud wedge arrives first because it extends furthest ahead.

*And it dates the front.* Example 1 of [4.5](04-05-air-masses-fronts-cyclones.md) put the cloud shield's leading edge about 1600 km ahead of the surface front. At a typical 15 m s⁻¹, that is $1.6\times10^{6}/15 = 1.07\times10^{5}\ \mathrm{s} \approx 30$ hours — matching the observed sequence, and giving a usable forecast: the halo means rain in roughly a day.

This is not folklore. "Ring around the moon means rain" is a correct inference from a shallow frontal slope, made two centuries before anyone could explain it.

## Watch out

- **You might think** *alto-* means high cloud. **Actually** it labels the **middle** étage, 2 to 7 km. The high étage takes *cirro-*. This is the single most common slip in the scheme, and it is purely historical.
- **You might think** mammatus clouds indicate tornadoes. **Actually** they indicate sinking, evaporatively cooled pockets under a vigorous anvil — they tell you a storm is *strong*, and they are usually seen on the *back* side of one that has already passed. There is no causal link to tornadogenesis.
- **You might think** a flat cloud base means a stable atmosphere. **Actually** a flat base means a well-mixed sub-cloud layer with a *uniform* dew-point depression, so every parcel saturates at the same height. Fair-weather cumulus have famously flat bases and are entirely convective. Flat *base* means uniform moisture; flat *top* means a lid.
- **You might think** you can tell cloud height by how grey it looks. **Actually** greyness is optical thickness — how much liquid water is in the path — not altitude. A thick low stratus and a thick mid-level altostratus both look grey; the give-away is whether you can see the sun's disc through it (altostratus, yes, dimly; nimbostratus, no).

## One-liner

> Height gives the prefix, shape gives the root, and between them a cloud reports its own LCL, the depth of the layer that lifted it, and whether that lifting was gentle or violent.

## Problems

**P1 (🟢)** Name the genus for each: (a) a flat grey sheet at 5 km through which the sun shows as a dim disc; (b) lumpy patches at 4 km with visible turrets on top; (c) a wispy fibrous streak at 10 km; (d) a towering cloud with a flat base at 1 km, a cauliflower top at 11 km, and a spreading flat top.

**P2 (🟡)** A stable airstream at 25 m s⁻¹ crosses a mountain ridge, and a train of lenticular clouds is observed with crests 14 km apart. (a) Compute the Brunt–Väisälä frequency of the airstream. (b) Compute the corresponding buoyancy oscillation period. (c) Compare with the standard tropospheric $N \approx 1.06\times10^{-2}\ \mathrm{s^{-1}}$ and say whether this airstream is more or less stable than average.

**P3 (🔴, optional)** Water has $n = 1.33$ and ice $n = 1.31$. (a) Compute the minimum deviation for a 60-degree prism of each. (b) A halo is observed at 22 degrees. Could it be made of water droplets? Explain both why the *number* nearly works and why the *physics* rules it out. (c) What optical phenomenon do spherical water droplets produce instead, and at roughly what angle?

<details>
<summary>Solutions</summary>

**P1** (a) **Altostratus** — middle étage (5 km), layered, and the sun visible as a dim disc is its signature (nimbostratus would block it entirely).

(b) **Altocumulus castellanus** — middle étage, heaped, and the turrets specifically mark mid-level instability. Worth noting as a same-day thunderstorm precursor.

(c) **Cirrus** — high étage, fibrous and wispy because it is falling ice crystals sheared by the wind.

(d) **Cumulonimbus** — low base, vertical development to the tropopause, and the spreading flat top is the anvil at the EL.

**P2** (a) From $\lambda = 2\pi U/N$,

$$N = \frac{2\pi U}{\lambda} = \frac{2\pi \times 25}{1.4\times10^{4}} = \frac{157.1}{1.4\times10^{4}} = 1.12\times10^{-2}\ \mathrm{s^{-1}}.$$

(b) $$\tau = \frac{2\pi}{N} = \frac{6.283}{1.12\times10^{-2}} = 561\ \mathrm{s} \approx 9.3\ \text{minutes}.$$

(c) At $1.12\times10^{-2}$ against a standard $1.06\times10^{-2}$, this airstream is **slightly more stable than average** — about 6 percent, which is a modest difference. Since $N^2 \propto d\theta/dz$, the stability itself (the quantity that matters) is up by $(1.12/1.06)^2 = 1.12$, about 12 percent.

*Check.* The period lands in the 5-to-15-minute band quoted in [1.4](01-04-potential-temperature.md) for atmospheric buoyancy waves, so a 14 km lee-wave spacing at 25 m s⁻¹ is entirely ordinary — as it should be, since lee-wave trains of roughly this spacing are seen downwind of most mountain ranges.

**P3** (a) Ice: $\delta_{\min} = 2\arcsin(1.31\sin30^\circ) - 60^\circ = 2\arcsin(0.655) - 60^\circ = 81.84^\circ - 60^\circ = 21.8^\circ$.

Water: $\delta_{\min} = 2\arcsin(1.333\times0.5) - 60^\circ = 2\arcsin(0.6665) - 60^\circ = 83.6^\circ - 60^\circ = 23.6^\circ$.

(b) The *number* nearly works — 23.6 degrees is not far from 22, because the refractive indices of ice and water differ by only 1.7 percent. But the **physics rules it out**: a halo requires a *prism*, that is, two flat faces at a fixed 60-degree angle. Liquid water droplets are held spherical by surface tension ([2.3](02-03-cloud-precipitation-formation.md)), and a sphere has no prism faces and no fixed deviation angle. Only a crystal with hexagonal symmetry — ice — can produce a halo. So a halo is a *positive identification of ice*, which is exactly why it is diagnostic of high cloud.

(c) Spherical droplets produce a **rainbow**, by internal reflection rather than simple refraction: light enters the drop, reflects once off the back, and exits, with a minimum deviation that puts the primary bow at about **42 degrees** from the antisolar point (and a secondary, from two internal reflections, near 51 degrees). Note the geometry differs too — a halo surrounds the sun, a rainbow sits opposite it. Seeing which side of the sky the arc is on identifies the phase of the water before you measure any angle.

*Check.* The two phenomena are distinguished by three independent facts — angle, direction relative to the sun, and the phase of water required — which is why they are never confused in practice despite both being coloured rings.

</details>

## Flashback

**From Lesson 2.3 (Cloud & precipitation formation):** At −15 °C the saturation vapor pressure over water is 1.91 hPa and over ice 1.65 hPa. A cloud at this temperature contains both supercooled droplets and a few ice crystals. (a) If the air is held at water saturation, what is the supersaturation with respect to ice? (b) Name the process and say what happens to the droplets.

<details>
<summary>Solution</summary>

(a) The air holds $e = 1.91$ hPa. Relative to the ice surface,

$$\frac{e}{e_{s,\text{ice}}} = \frac{1.91}{1.65} = 1.158,$$

a supersaturation of **15.8 percent** with respect to ice — enormous, since atmospheric supersaturations with respect to *water* rarely exceed 1 percent.

(b) This is the **Bergeron–Findeisen process**. The ice crystals grow rapidly in that supersaturated environment; as they consume vapor, $e$ falls below water saturation, and the supercooled droplets then **evaporate** to restore it. Vapor flows continuously from droplets to crystals, so a few crystals scavenge the water of many droplets and reach precipitable size within minutes.

*Check.* This is why the cirriform clouds of this lesson are pure ice while mid-level clouds are mixed-phase: above about −40 °C liquid can persist, but wherever ice nuclei happen to act, the ice wins the competition for vapor. It is also why the halo of P3 is a reliable ice indicator — by the time a cloud is cold enough to be all ice, no droplets survive to muddy the optics.

</details>

## Connections

- **Backward:** the flat base is [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)'s LCL, the vertical extent and anvil are [2.4](02-04-stability-parcel-theory-cape.md)'s buoyant layer and EL, the ice-versus-water distinction is [2.3](02-03-cloud-precipitation-formation.md)'s microphysics, and Example 1 is a [2.5](02-05-skew-t-log-p-diagram.md) sounding read as a sky.
- **Forward:** [4.5](04-05-air-masses-fronts-cyclones.md) explains the frontal geometry behind Example 2's cloud sequence; [6.1](06-01-atmospheric-boundary-layer.md) explains the capping inversion that makes stratocumulus; [6.4](06-04-observing-the-atmosphere.md) covers how satellites classify the same clouds from above.
- **Sideways (optics):** the halo is minimum-deviation refraction through a prism, and the rainbow is refraction plus internal reflection in a sphere — both are Snell's law from [`waves-optics` 3.1](../../waves-optics/lessons/03-01-reflection-refraction-snell.md), applied to the two phases of atmospheric water.

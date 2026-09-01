# Atmospheric Science · Lesson 2.3: Cloud & precipitation formation

> ⏱ ~15 min · Module 2: Moisture, clouds & stability · Builds on: [2.2 Saturation & the moist adiabatic lapse rate](02-02-saturation-moist-adiabatic-lapse-rate.md), [2.1 Humidity variables](02-01-humidity-variables.md) · Unlocks: 2.4 (CAPE), 4.5 (fronts & cyclones)

## Why this matters

Lesson 2.2 told you *when* water must condense. It said nothing about *how* — and the how contains two genuine puzzles that took atmospheric physics decades to solve. First: pure water vapor, cooled below its dew point in clean air, refuses to condense until it is supersaturated by several hundred percent, yet the atmosphere never exceeds about one percent. Second: even once cloud droplets form, the mechanism that grows them is far too slow to make rain — by a factor of a thousand. Rain falls within half an hour of a cumulus forming; diffusion alone would need a month. Both puzzles have the same shape of answer, and both matter practically: they are why cloud seeding works at all, why polluted clouds rain less, and why nearly all rain outside the tropics starts as ice.

## The idea

**Puzzle one: getting started.** A brand-new droplet is tiny, and a tiny droplet is a *strongly curved* surface. A molecule sitting on a sharply curved surface has fewer neighbours holding it in than one on a flat surface, so it escapes more easily — which means the equilibrium vapor pressure over a small droplet is *higher* than over a puddle. The smaller the droplet, the higher the bar. To make a droplet out of nothing you must first pass through the impossibly small sizes, where the required supersaturation is hundreds of percent. Pure-vapor (homogeneous) nucleation therefore never happens in the atmosphere.

Nature cheats twice. First, the air is full of **cloud condensation nuclei (CCN)** — sea salt, sulfate, dust, soot, a few hundred per cubic centimetre — which give water a ready-made surface a fraction of a micrometre across, skipping the worst of the curvature penalty. Second, most of those nuclei are *soluble*, and dissolving something in water **lowers** its vapor pressure (fewer water molecules at the surface are free to leave). The two effects fight: curvature pushes the required humidity up, solute pulls it down. Their sum is the **Köhler curve**, and it has a peak. Below the peak a droplet sits in stable equilibrium as a haze particle. Push it past the peak — the **critical radius** — and the curvature penalty is falling faster than the droplet grows, so the droplet's own growth makes growing easier. It runs away. That is **activation**, and it is what turns a hazy sky into a cloud, sharply, at a definite humidity.

**Puzzle two: making rain.** A cloud droplet is about 10 micrometres across; a raindrop is about 1 millimetre. That is a factor of 100 in radius and a **million in volume** — one raindrop is a million cloud droplets. Growth by vapor diffusion has the property that $r^2$ grows linearly in time, so $dr/dt \propto 1/r$: the bigger the droplet, the slower it grows. It gets a droplet to 20 micrometres in a quarter of an hour, and then essentially stalls. It would need a month to reach raindrop size.

The escape is **collision**. Once a few droplets are noticeably bigger than the rest, they fall noticeably faster, sweep through the smaller ones, and absorb them. Now growth is proportional to the droplet's *cross-sectional area* times its *speed difference*, both of which increase as it grows — a runaway. In the cold parts of clouds there is a second, even better trick: ice. Because ice holds its molecules more tightly than liquid water does, the saturation vapor pressure over ice is lower than over supercooled liquid at the same temperature. Put ice crystals and supercooled droplets side by side and the air is simultaneously supersaturated with respect to the ice and subsaturated with respect to the liquid — so the crystals grow while the droplets evaporate to feed them. That is the **Bergeron–Findeisen process**, and it is responsible for most precipitation in mid-latitudes, including summer rain that reaches the ground melted.

## The formal version

**The Kelvin (curvature) effect.** For a droplet of radius $r$ with surface tension $\sigma$ (about $0.0728\ \mathrm{N\,m^{-1}}$ for water at 20 °C) and liquid density $\rho_w$,

$$\frac{e_s(r)}{e_s(\infty)} = \exp\!\left(\frac{2\sigma}{\rho_w R_v T\,r}\right).$$

*In words: a curved water surface needs more vapor around it to stay in balance, and the penalty scales as $1/r$.* Evaluating at 20 °C: a 10 nm droplet needs 11 percent supersaturation; a 100 nm droplet needs 1.1 percent; a 1 micrometre droplet needs 0.11 percent. Since real clouds rarely exceed 1 percent, nothing smaller than about 0.1 micrometre can survive on curvature alone.

**The Köhler curve.** Add a dissolved mass of solute, and expanding both effects for small departures from saturation gives the standard two-term form for the equilibrium supersaturation $S - 1$:

$$S(r) - 1 \;\approx\; \underbrace{\frac{a}{r}}_{\text{curvature, Kelvin}} \;-\; \underbrace{\frac{b}{r^{3}}}_{\text{solute, Raoult}},$$

where $a = 2\sigma/(\rho_wR_vT)$ and $b$ is proportional to the mass of solute in the droplet. *In words: curvature raises the equilibrium humidity as $1/r$, dissolved salt lowers it as $1/r^3$, and the salt wins when the droplet is small.* Setting $dS/dr = 0$ gives the **critical radius** and **critical supersaturation**

$$r_c = \sqrt{\frac{3b}{a}}, \qquad S_c - 1 = \sqrt{\frac{4a^3}{27b}}.$$

Droplets smaller than $r_c$ are **haze**: stable, in equilibrium, and they shrink back if nudged. Droplets pushed past $r_c$ are **activated** and grow without limit. Note that $S_c$ falls as $b$ (solute mass) rises: bigger, more soluble nuclei activate at lower supersaturation. This is why sea-salt aerosol is such an effective CCN and why cloud seeding works — you supply the nuclei that activate first.

**Diffusional growth and its limit.** Vapor diffusing onto a droplet gives $r\,dr/dt = G(S-1)$ with $G$ an empirical coefficient of order $10^{-10}\ \mathrm{m^2\,s^{-1}}$, so

$$r^2(t) = r_0^2 + 2G(S-1)\,t.$$

*In words: the square of the radius grows linearly in time — so each doubling of radius takes four times as long as the last.* At a typical $S - 1 = 0.2$ percent:

| Target radius | Time by diffusion alone |
|---|---|
| 20 micrometres | 17 minutes |
| 100 micrometres | 7 hours |
| 1 millimetre | 29 days |

Rain from a cumulus arrives in about 20 to 30 minutes. Diffusion is out by three orders of magnitude, and the gap is the whole reason the next two mechanisms exist.

**Collision–coalescence (warm rain).** Terminal velocity follows Stokes' law for small drops,

$$v_t = \frac{2\rho_w g r^2}{9\mu},$$

with $\mu = 1.8\times10^{-5}\ \mathrm{Pa\,s}$ the air's dynamic viscosity — so a 5 micrometre droplet falls at 0.3 cm s⁻¹ and a 20 micrometre droplet at 4.8 cm s⁻¹, sixteen times faster. A large droplet therefore sweeps out a volume $\pi r^2 (v_{\text{big}} - v_{\text{small}})$ per second and collects what it meets, with a collection efficiency that becomes appreciable above about 20 micrometres radius (below that, small droplets are swept around the falling drop rather than into it). Growth by collection accelerates as the drop grows, which is exactly the runaway diffusion lacks. This process alone makes rain in warm tropical maritime clouds that never reach freezing.

**The Bergeron–Findeisen process (cold rain).** Between 0 and about −40 °C, cloud water is commonly **supercooled** liquid, because freezing needs its own nuclei and they are far scarcer than CCN. Where a few ice crystals do form, they exploit the gap between the two saturation curves:

| $T$ | $e_s$ over water | $e_s$ over ice | ratio |
|---|---|---|---|
| −5 °C | 4.22 hPa | 4.02 hPa | 1.05 |
| −12 °C | 2.45 hPa | 2.17 hPa | 1.13 |
| −20 °C | 1.26 hPa | 1.03 hPa | 1.22 |
| −40 °C | 0.19 hPa | 0.13 hPa | 1.48 |

*In words: at every subfreezing temperature, ice demands less vapor than liquid does.* Air held at water saturation is therefore *supersaturated* with respect to ice — by 13 percent at −12 °C, where the absolute vapor-pressure difference peaks. Ice crystals grow fast in that environment while the surrounding droplets evaporate to supply them, so a few crystals scavenge the water of many droplets and reach precipitable size in minutes. Most rain falling on mid-latitudes fell out of the cloud as snow and melted on the way down.

## Picture

![Left, the Kohler curve of equilibrium supersaturation against droplet radius on a log scale, rising to a peak at the critical radius then falling, with the haze region below the peak and the activated runaway region beyond it; right, a 1 mm raindrop drawn beside a 10 micrometre cloud droplet showing the million-to-one volume ratio and the difference in fall speed](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — the curvature barrier).** What supersaturation does a pure-water droplet of radius 20 nm require at 20 °C? Take $\sigma = 0.0728\ \mathrm{N\,m^{-1}}$, $\rho_w = 1000\ \mathrm{kg\,m^{-3}}$, $R_v = 461.5$, $T = 293$ K.

$$\frac{2\sigma}{\rho_wR_vT} = \frac{2 \times 0.0728}{1000 \times 461.5 \times 293} = \frac{0.1456}{1.352\times10^{8}} = 1.077\times10^{-9}\ \mathrm{m}.$$

That length is $a$. Then

$$\frac{e_s(r)}{e_s(\infty)} = \exp\!\left(\frac{1.077\times10^{-9}}{2.0\times10^{-8}}\right) = e^{0.0539} = 1.055,$$

a required supersaturation of **5.5 percent**. Real clouds reach at most about 1 percent, so this droplet cannot form or survive on curvature alone — it evaporates. Only a soluble nucleus, which drops the requirement via the $-b/r^3$ term, lets water condense at these sizes.

**Example 2 (why you'd care — pollution and rainfall).** A clean maritime cloud has 100 CCN per cm³; a polluted continental cloud over a city has 1000. Both clouds condense the same amount of liquid water, say 1 g per cubic metre. What is the droplet size in each?

The liquid water is shared out among the available nuclei, so the volume per droplet is inversely proportional to their number. With water content $M$ and number density $N$,

$$\frac{4}{3}\pi r^3 = \frac{M}{\rho_w N} \qquad\Longrightarrow\qquad r \propto N^{-1/3}.$$

The polluted cloud has ten times the droplets, so each is $10^{1/3} = 2.15$ times *smaller* in radius. Working the maritime case: $M/(\rho_wN) = 10^{-3}/(1000 \times 10^{8}) = 10^{-14}\ \mathrm{m^3}$ per droplet, giving $r = (3\times10^{-14}/4\pi)^{1/3} = 13.4$ micrometres. The polluted cloud's droplets are 6.2 micrometres.

Two consequences, both observed. **It rains less:** collection efficiency collapses below about 20 micrometres radius, so a cloud of 6-micrometre droplets is far worse at making rain than one of 13-micrometre droplets, and shipping lanes and urban plumes measurably suppress warm rain. **It is brighter:** for fixed water content, more and smaller droplets present more total cross-section, so the polluted cloud reflects more sunlight — the "cloud albedo effect," one of the largest single uncertainties in the radiative forcing budget that [`climate-science`](../../climate-science/syllabus.md) has to quantify.

## Watch out

- **You might think** clouds form when relative humidity reaches 100 percent, exactly. **Actually** a small supersaturation (a few tenths of a percent) is needed to activate CCN past their critical radius, and the peak supersaturation reached in an updraft is what selects *which* nuclei activate. Faster updraft, higher peak supersaturation, more droplets activated.
- **You might think** supercooled water is rare or exotic. **Actually** it is the normal state of cloud liquid between 0 and −20 °C, because ice nuclei are typically 10⁶ times scarcer than CCN. It is why aircraft icing is a hazard and why the Bergeron process has supercooled droplets available to consume.
- **You might think** more condensation nuclei means more rain. **Actually** the opposite, usually: the same water divided among more nuclei gives smaller droplets, which collide less efficiently. More CCN generally means brighter, longer-lived, less precipitating clouds.
- **You might think** the Köhler peak is an energy barrier the droplet must be pushed over by something external. **Actually** what pushes it over is the ambient supersaturation itself: raise $S$ above $S_c$ and the equilibrium at $r < r_c$ ceases to exist, so the haze droplet has nowhere to sit and grows without bound. Activation is a saddle-node bifurcation, not a random hop.

## One-liner

> Droplets cannot start without soluble nuclei to beat the curvature penalty, and cannot become rain without collisions or ice to beat the $1/r$ slowdown of diffusion — clouds are made of physics that only just works.

## Problems

**P1 (🟢)** Using $a = 1.08\times10^{-9}$ m from Example 1, find the equilibrium supersaturation over a pure droplet of radius 0.5 micrometres, expressed as a percentage. Would such a droplet survive in a cloud whose peak supersaturation is 0.3 percent?

**P2 (🟡)** A cloud droplet of radius 15 micrometres and a drizzle drop of radius 60 micrometres both fall through still air. (a) Use Stokes' law to find each terminal velocity. (b) Stokes' law over-predicts badly for the larger drop, whose measured fall speed is about 0.3 m s⁻¹. Explain what assumption breaks, and say whether Stokes over- or under-predicts.

**P3 (🔴, optional)** At −15 °C, $e_s$ over water is 1.91 hPa and over ice is 1.65 hPa. A cloud is held exactly at water saturation. (a) What is the supersaturation with respect to ice, in percent? (b) An ice crystal and a water droplet sit side by side. Describe what happens to each, and estimate the ratio of the number of droplets that must evaporate to build one 1 mm snowflake-sized ice particle out of 15-micrometre droplets.

<details>
<summary>Solutions</summary>

**P1** $$\frac{e_s(r)}{e_s(\infty)} = \exp\!\left(\frac{1.08\times10^{-9}}{5.0\times10^{-7}}\right) = e^{0.00216} = 1.00216,$$

a supersaturation of **0.216 percent**.

Yes, it survives: the ambient supersaturation of 0.3 percent exceeds the 0.216 percent this droplet requires, so vapor flows onto it and it grows. (And since the requirement *falls* as it grows, growth is self-sustaining — this droplet is already past any critical radius it might have had.)

*Check.* The exponent is small, so $e^x \approx 1 + x$ and the answer is essentially $a/r = 1.08\times10^{-9}/5\times10^{-7} = 0.00216$ directly. The linearization is excellent for anything above about 0.1 micrometres.

**P2** (a) Stokes' law, $v_t = 2\rho_wgr^2/(9\mu)$ with $2\rho_wg/(9\mu) = 2\times1000\times9.81/(9\times1.8\times10^{-5}) = 1.211\times10^{8}\ \mathrm{m^{-1}s^{-1}}$:

$$v_{15} = 1.211\times10^{8} \times (1.5\times10^{-5})^2 = 1.211\times10^{8}\times2.25\times10^{-10} = 0.027\ \mathrm{m\,s^{-1}} = 2.7\ \mathrm{cm\,s^{-1}},$$
$$v_{60} = 1.211\times10^{8} \times (6.0\times10^{-5})^2 = 1.211\times10^{8}\times3.6\times10^{-9} = 0.44\ \mathrm{m\,s^{-1}}.$$

(b) Stokes' law assumes **creeping flow** — that inertia in the air around the drop is negligible compared with viscosity, i.e. a Reynolds number well below 1. For the 60 micrometre drop, $\mathrm{Re} = 2rv\rho_{\text{air}}/\mu = (1.2\times10^{-4}\times0.44\times1.2)/1.8\times10^{-5} \approx 3.5$, which is not small: a wake has formed behind the drop and the drag is larger than the linear law predicts. Stokes therefore **over-predicts** the speed (0.44 against a measured 0.3 m s⁻¹), and the error grows fast — for a 1 mm raindrop Stokes gives 121 m s⁻¹ against a real 6.5 m s⁻¹, a factor of nearly 20.

*Check.* The 15 micrometre drop has $\mathrm{Re} \approx 0.05$, comfortably in the Stokes regime, so its 2.7 cm s⁻¹ can be trusted. The breakdown of Stokes flow with rising Reynolds number is exactly the transition studied in [`fluid-dynamics` 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md).

**P3** (a) The air holds $e = 1.91$ hPa (water saturation). Relative to ice,

$$\frac{e}{e_{s,\text{ice}}} = \frac{1.91}{1.65} = 1.158,$$

a supersaturation of **15.8 percent** with respect to ice — enormous by atmospheric standards, where 1 percent is a lot.

(b) The ice crystal sees 15.8 percent supersaturation and grows rapidly. The droplet sees exactly 100 percent relative humidity with respect to *water*, so it is in equilibrium — until the growing crystal draws vapor out of the air, dropping $e$ below water saturation, at which point the droplet evaporates to restore it. Net effect: vapor flows from droplets to crystal, continuously, and the droplets are consumed.

Volume ratio: $(1000\ \mathrm{\mu m}/15\ \mathrm{\mu m})^3 = (66.7)^3 = 2.96\times10^{5}$, so roughly **300,000 droplets** per millimetre-scale ice particle. (Ice particles are less dense than liquid water, so the true droplet count is somewhat lower — a factor of about 3 for typical snow-crystal densities near 0.3 that of water, giving about 10⁵.)

*Check.* The 15.8 percent figure is larger than the 13 percent at −12 °C quoted in the table, which looks inconsistent until you notice the table lists the ratio $e_{s,w}/e_{s,i}$ at −12 °C as 1.13 and this problem's numbers are at −15 °C, where the ratio has grown. The *ratio* rises monotonically as temperature falls, while the *absolute* vapor-pressure difference peaks near −12 °C — and it is the absolute difference that sets the diffusive growth rate, which is why the Bergeron process is most vigorous around −12 to −15 °C.

</details>

## Flashback

**From Lesson 2.1 (Humidity variables):** Air at 950 hPa and 18 °C has a mixing ratio of $w = 9.0\ \mathrm{g\,kg^{-1}}$. Given $e_s(18\ ^\circ\mathrm{C}) = 20.6$ hPa, compute the vapor pressure and the relative humidity.

<details>
<summary>Solution</summary>

Invert $w = \varepsilon e/(p-e)$ for $e$:

$$w(p - e) = \varepsilon e \quad\Longrightarrow\quad e = \frac{wp}{\varepsilon + w} = \frac{0.0090 \times 950}{0.622 + 0.0090} = \frac{8.55}{0.631} = 13.55\ \mathrm{hPa}.$$

Then

$$\mathrm{RH} = \frac{e}{e_s} = \frac{13.55}{20.6} = 0.658 \approx 66\ \text{percent}.$$

*Check.* The approximation $e \approx wp/\varepsilon = 8.55/0.622 = 13.75$ hPa overstates by 1.4 percent, consistent with the $O(w/\varepsilon)$ error the exact form corrects. Sixty-six percent relative humidity at 18 °C corresponds to a dew point near 11.5 °C, hence a depression of about 6.5 K and (by [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)) a cloud base around 800 m — a plausible fair-weather cumulus day.

</details>

## Connections

- **Backward:** the saturation curve $e_s(T)$ from [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md) is what the Kelvin and Raoult effects modify, and the mixing-ratio bookkeeping of [2.1](02-01-humidity-variables.md) supplies the water budget that Example 2 divides among nuclei.
- **Forward:** [2.4](02-04-stability-parcel-theory-cape.md) supplies the updraft that lifts parcels past their LCL and sets the peak supersaturation; [4.5](04-05-air-masses-fronts-cyclones.md) puts these microphysics inside the frontal ascent that produces stratiform rain.
- **Sideways (fluid dynamics):** the terminal-velocity calculation is Stokes flow past a sphere from [`fluid-dynamics` 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md), and its failure for large drops is the Reynolds-number transition of [`fluid-dynamics` 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md) — cloud physics is a low-Reynolds-number world that rain has to escape.

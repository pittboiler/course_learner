# Propulsion · Lesson 3.5: Mission $\Delta v$ and the propulsion budget

> ⏱ ~15 min · Module 3: Rockets and mission analysis · Builds on: [3.1 The rocket equation](03-01-rocket-equation.md), [3.3 Staging](03-03-staging-mass-ratio.md) · Unlocks: [4.4 Capstone: the propulsion design space](04-04-propulsion-design-space.md), [`orbital-mechanics`](../../orbital-mechanics/syllabus.md)

## Why this matters

Module 3 has built the machinery: the rocket equation, specific impulse, staging, and the propellants. **What it has not supplied is the input** — the $\Delta v$ that a mission actually demands.

That number is where propulsion meets astrodynamics, and it is the currency in which every space mission is quoted. **"How much $\Delta v$?" is the first question asked about any proposed mission**, because it converts, through one exponential, into propellant mass and therefore into launch vehicle, cost, and feasibility.

This lesson builds $\Delta v$ budgets: the standard manoeuvre costs, how to add them up, how to size propellant from them, and — importantly — **how much margin to carry**, because a budget that is exactly right is a mission that fails.

## The idea

**Every orbit change is a velocity change.** In orbital mechanics, position is cheap and velocity is expensive: you can wait to arrive somewhere, but you cannot wait to be going faster. **Propulsion buys velocity, and $\Delta v$ is the price list.**

**The cheapest transfer between two circular orbits is the Hohmann transfer** — two burns, at the two ends of an ellipse tangent to both orbits. It is slowest and cheapest; faster transfers cost more.

**Burns are cheapest where you are moving fastest.** The Oberth effect: a given $\Delta v$ applied at high speed adds more *energy* than the same $\Delta v$ applied slowly, because energy goes as $v^2$. **This is why escape burns are done at perigee, and why a low parking orbit beats a high one for departure.**

**Plane changes are brutally expensive.** Rotating a velocity vector by angle $i$ costs $2v\sin(i/2)$, which at LEO speeds is over 3.8 km/s for a 28.5° change — comparable to the whole launch. **Do plane changes where you are slowest**, which is why geostationary missions combine the plane change with the apogee burn.

**Budgets add.** Launch, transfer, insertion, station-keeping, disposal — each is a $\Delta v$, and the vehicle must carry the sum.

**And then add margin.** Navigation errors, off-nominal performance, missed windows, and unmodelled perturbations all demand reserve. **Typical practice is 5–10% on the deterministic budget plus explicit allocations for known statistical costs.**

## The formal version

**Circular orbit speed and vis-viva.**

$$\boxed{\;v_{\rm circ} = \sqrt{\frac{\mu}{r}}, \qquad v^2 = \mu\left(\frac{2}{r}-\frac{1}{a}\right),\;}$$

with $\mu_\oplus = 3.986\times10^{14}$ m³/s² and $R_\oplus = 6378$ km. *(Derived in [`orbital-mechanics`](../../orbital-mechanics/syllabus.md); used here.)*

**Hohmann transfer** between circular orbits $r_1$ and $r_2$, via an ellipse of semi-major axis $a_t = (r_1+r_2)/2$:

$$\boxed{\;\Delta v_1 = \sqrt{\mu\left(\frac{2}{r_1}-\frac{1}{a_t}\right)}-\sqrt{\frac{\mu}{r_1}}, \qquad \Delta v_2 = \sqrt{\frac{\mu}{r_2}}-\sqrt{\mu\left(\frac{2}{r_2}-\frac{1}{a_t}\right)}.\;}$$

**Plane change** of angle $i$ at speed $v$:

$$\boxed{\;\Delta v = 2v\sin\frac{i}{2}.\;}$$

**Combined manoeuvre** (change speed and plane at once):

$$\boxed{\;\Delta v = \sqrt{v_1^2+v_2^2-2v_1v_2\cos i}\;}$$

— always cheaper than doing them separately, and often much cheaper.

**Escape and hyperbolic departure.** From a circular orbit of speed $v_c$:

$$v_{\rm esc} = \sqrt2\,v_c, \qquad \Delta v_{\rm escape} = \left(\sqrt2-1\right)v_c = 0.4142\,v_c,$$

and for a departure with hyperbolic excess $v_\infty$:

$$\boxed{\;\Delta v = \sqrt{v_\infty^2+2\mu/r}-v_c.\;}$$

**Standard $\Delta v$ budget items** (Earth-centred unless noted):

| Manoeuvre | $\Delta v$ | Note |
|---|---|---|
| Surface → LEO (200 km) | 9.3–9.5 km/s | includes 1.5–1.8 km/s of losses |
| LEO circular speed | 7.78 km/s | reference |
| LEO → GTO (perigee burn) | 2.45 km/s | Hohmann first burn |
| GTO → GEO (apogee, no plane change) | 1.48 km/s | Hohmann second burn |
| GTO → GEO (apogee, with 28.5° plane change) | 1.84 km/s | combined; separate would cost 2.99 |
| Plane change 28.5° at GEO alone | 1.51 km/s | do it slow |
| Plane change 28.5° at LEO alone | 3.83 km/s | **never do it fast** |
| LEO → escape ($C_3 = 0$) | 3.22 km/s | |
| LEO → trans-lunar injection | 3.13 km/s | |
| Lunar orbit insertion | 0.82–0.90 km/s | |
| Lunar descent and landing | 1.87 km/s | |
| LEO → Mars transfer injection | 3.61 km/s | minimum-energy window |
| Mars orbit insertion | 0.9–2.1 km/s | aerobraking can reduce this |
| GEO station-keeping | 50 m/s per year | N–S dominates |
| LEO drag make-up | 25–100 m/s per year | altitude-dependent |
| End-of-life disposal (GEO) | 11 m/s | raise to graveyard |
| End-of-life deorbit (LEO) | 100–150 m/s | |

**Margin practice.**

| Category | Typical allocation |
|---|---|
| Deterministic budget | as computed |
| Navigation / trajectory-correction manoeuvres | 1–3% of the deterministic total |
| Performance dispersions ($3\sigma$) | 2–5% |
| Programme reserve | 5% |
| **Total carried** | **typically 8–15% above deterministic** |

**Sizing propellant from a budget.**

$$\boxed{\;m_p = m_f\left(e^{\Delta v/v_e}-1\right) = m_0\left(1-e^{-\Delta v/v_e}\right).\;}$$

## Picture

![A two-panel figure. Left: a delta-v map drawn as a network diagram, with nodes for Earth's surface, low Earth orbit, geostationary transfer orbit, geostationary orbit, escape, lunar orbit, the lunar surface, and Mars transfer; edges between them are labelled with their delta-v costs in kilometres per second, drawn with thickness proportional to cost so that the surface-to-LEO edge is by far the heaviest at 9.4 and the GEO station-keeping loop is a thin annual arrow at 0.05. A shaded region around the Earth-surface-to-LEO edge is annotated the first 9.4 is most of the fight. Right: a stacked bar showing a worked mission budget for a geostationary satellite, with segments for the perigee burn, the combined apogee burn with plane change, fifteen years of station-keeping, and disposal, and a final hatched segment on top labelled margin, about ten percent; beside the bar, a second axis converts total delta-v into propellant mass fraction through the rocket equation, with a curve showing how the last ten percent of delta-v costs disproportionately more propellant.](assets/03-05-fig1.svg)

Left: the solar system as a network of velocity costs.

Right: a real budget, and why the margin at the top is the most expensive part.

## Worked examples

**Example 1 (LEO to GEO, the standard commercial mission).** A satellite is delivered to a 200 km circular parking orbit at 28.5° inclination (a Cape Canaveral launch) and must reach geostationary orbit.

*Reference speeds.*

$$r_1 = 6578\ \mathrm{km}: \quad v_1 = \sqrt{\frac{3.986\times10^{14}}{6.578\times10^6}} = 7784\ \mathrm{m/s},$$

$$r_2 = 42{,}164\ \mathrm{km}: \quad v_2 = \sqrt{\frac{3.986\times10^{14}}{4.2164\times10^7}} = 3075\ \mathrm{m/s}.$$

*Transfer ellipse.*

$$a_t = \frac{6578+42{,}164}{2} = 24{,}371\ \mathrm{km}.$$

$$v_p = \sqrt{3.986\times10^{14}\left(\frac{2}{6.578\times10^6}-\frac{1}{2.4371\times10^7}\right)} = 10{,}239\ \mathrm{m/s},$$

$$v_a = \sqrt{3.986\times10^{14}\left(\frac{2}{4.2164\times10^7}-\frac{1}{2.4371\times10^7}\right)} = 1597\ \mathrm{m/s}.$$

*The two burns.*

$$\Delta v_1 = 10{,}239-7784 = 2455\ \mathrm{m/s}\quad\text{(perigee, into GTO)},$$

$$\Delta v_2 = 3075-1597 = 1478\ \mathrm{m/s}\quad\text{(apogee, circularize, no plane change)}.$$

*Now the plane change.* The parking orbit is inclined 28.5°; GEO must be equatorial.

**Done separately at GEO:** $\Delta v = 2(3075)\sin(14.25°) = 1514$ m/s, for a total of $1478+1514 = 2992$ m/s.

**Combined with the apogee burn:**

$$\Delta v_2 = \sqrt{v_a^2+v_2^2-2v_av_2\cos28.5°} = \sqrt{1597^2+3075^2-2(1597)(3075)(0.87882)}$$

$$= \sqrt{2.550\times10^6+9.456\times10^6-8.630\times10^6} = \sqrt{3.376\times10^6} = 1836\ \mathrm{m/s}.$$

**Combining saves 1154 m/s — 39%.** *(Every geostationary mission does this, and it is the single most important trick in the commercial launch business.)*

*The mission budget.*

| Item | $\Delta v$ (m/s) |
|---|---|
| Perigee burn (LEO → GTO) | 2455 |
| Apogee burn (GTO → GEO, combined with plane change) | 1836 |
| 15 years of station-keeping at 50 m/s/yr | 750 |
| End-of-life disposal to graveyard | 11 |
| **Deterministic total** | **5052** |
| Margin at 10% | 505 |
| **Carried** | **5557** |

*Sizing the propellant.* Suppose the satellite's dry mass (bus, payload, structure) is 2000 kg and the apogee engine is a storable bipropellant with $I_{sp} = 320$ s.

$$v_e = 9.80665(320) = 3138.1\ \mathrm{m/s}, \qquad e^{5557/3138.1} = e^{1.77084} = 5.8759,$$

$$m_p = m_f\left(e^{\Delta v/v_e}-1\right) = 2000(4.8759) = 9752\ \mathrm{kg},$$

$$m_0 = 2000+9752 = 11{,}752\ \mathrm{kg}.$$

**A 2-tonne satellite needs an 11.8-tonne wet mass** to fly this profile from LEO — which is why almost no commercial satellite does. **They are launched to GTO directly**, so the launcher's upper stage performs the 2455 m/s perigee burn and the satellite carries only the 1836 + 750 + 11 = 2597 m/s (plus margin):

$$e^{2857/3138.1} = e^{0.91043} = 2.4851, \qquad m_p = 2000(1.4851) = 2970\ \mathrm{kg}, \qquad m_0 = 4970\ \mathrm{kg}.$$

**Wet mass falls from 11.8 t to 5.0 t** — a factor of 2.4, from moving one burn onto the launcher.

*And that is why launchers quote GTO capability.* The commercial market is denominated in "kilograms to GTO" precisely because the split between launcher and satellite is made at that point, and moving it either way changes the satellite's mass by a large factor.

**Example 2 (electric propulsion changes the arithmetic).** The same 2000 kg satellite, now with a Hall thruster of $I_{sp} = 1800$ s instead of the 320 s chemical engine, doing the *full* 5558 m/s from LEO.

$$v_e = 9.80665(1800) = 17{,}652\ \mathrm{m/s}, \qquad e^{5557/17{,}652} = e^{0.31481} = 1.3700,$$

$$m_p = 2000(0.3701) = 740\ \mathrm{kg}, \qquad m_0 = 2740\ \mathrm{kg}.$$

*The comparison.*

| | Chemical (320 s), full profile from LEO | Chemical (320 s), from GTO | Electric (1800 s), full profile from LEO |
|---|---|---|---|
| $\Delta v$ carried | 5557 m/s | 2857 m/s | 5557 m/s |
| Propellant | 9752 kg | 2970 kg | **740 kg** |
| Wet mass | 11,752 kg | 4970 kg | **2740 kg** |

**The electric option does the harder mission with a quarter of the wet mass of the easier chemical one.**

*Reading it.* The exponential is what makes the difference so large. **$\Delta v/v_e$ falls from 1.77 to 0.31**, and $e^{0.31}-1 = 0.37$ against $e^{1.77}-1 = 4.88$ — a factor of 13 in propellant mass.

*So why is anyone still using chemical apogee engines?* **Time.** A Hall thruster produces perhaps 0.2 N. To deliver 5558 m/s to a 2740 kg spacecraft:

$$\Delta t\approx\frac{m\,\Delta v}{F}\approx\frac{2400(5557)}{0.2} = 6.7\times10^7\ \mathrm{s} = 2.1\ \mathrm{years},$$

using an average mass of 2400 kg. **Two years of spiralling out through the Van Allen belts**, during which the satellite earns no revenue and its solar arrays and electronics accumulate radiation damage.

**The chemical apogee burn takes forty minutes.**

*What the industry actually does.* A hybrid: **chemical for the apogee burn, electric for station-keeping.** The 750 m/s of 15-year station-keeping at $I_{sp} = 1800$ s costs

$$m_p = m_f\left(e^{750/17{,}652}-1\right) = 2000(0.04346) = 87\ \mathrm{kg},$$

against $2000\left(e^{750/3138.1}-1\right) = 2000(0.2701) = 540$ kg chemically — **a saving of 453 kg on a 2-tonne satellite**, with no schedule penalty because station-keeping is done in small increments over fifteen years anyway.

**And more recently, all-electric orbit raising has become common** for operators willing to trade six months of revenue for a much smaller, cheaper launch — which is exactly the trade [4.1](04-01-electric-propulsion.md) is about.

## Watch out

- **You might add plane change to a burn arithmetically.** Velocity changes are vectors; combine them with the cosine rule, which is always cheaper.
- **You might do a plane change at low altitude.** It costs $2v\sin(i/2)$, and $v$ is largest where you are lowest. **Do plane changes slow, at apogee.**
- **You might forget launch losses.** Orbital speed at LEO is 7.78 km/s but the launch budget is 9.3–9.5.
- **You might omit station-keeping.** Fifteen years at 50 m/s per year is 750 m/s — more than the apogee burn's plane-change component.
- **You might carry no margin.** Every real mission carries 8–15%, and it is spent.
- **You might assume Hohmann is always optimal.** For very large radius ratios ($r_2/r_1>11.94$) a bi-elliptic transfer is cheaper, and for time-constrained transfers a faster, more expensive trajectory is required.
- **You might quote a $\Delta v$ without saying where from.** "3.6 km/s to Mars" means from a 200 km LEO; from the surface, or from GTO, it is a different number.

## One-liner

> Missions are priced in $\Delta v$: launch dominates at 9.4 km/s, Hohmann transfers are the cheap way between circular orbits, plane changes cost $2v\sin(i/2)$ and must therefore be done where you are slowest and combined with other burns when possible — and the total, plus 8–15% margin, goes through one exponential to become the propellant mass that decides whether the mission exists.

## Problems

**P1 (🟢)** A spacecraft with a dry mass of 800 kg and $I_{sp} = 310$ s must perform a mission requiring 1800 m/s. (a) Find $v_e$ and the mass ratio. (b) Find the propellant mass. (c) Add a 10% margin to the $\Delta v$ and recompute. (d) By what percentage did the propellant grow?

**P2 (🟡)** Compute the Hohmann transfer from a 300 km circular Earth orbit to a 20,000 km circular orbit ($\mu = 3.986\times10^{14}$ m³/s², $R_\oplus = 6378$ km). (a) Find the two circular speeds. (b) Find the transfer ellipse's semi-major axis and the speeds at its ends. (c) Find $\Delta v_1$, $\Delta v_2$, and the total. (d) The initial orbit is inclined 51.6° (an ISS-like orbit) and the final must be equatorial. Find the cost of doing the plane change at the second burn, combined, and compare with doing it separately at the low orbit.

**P3 (🔴)** A Mars orbiter has a dry mass of 1200 kg and is launched to a 200 km LEO. Its budget is: trans-Mars injection 3610 m/s, two trajectory-correction manoeuvres of 30 m/s each, Mars orbit insertion 2100 m/s, and 100 m/s of orbit trim. (a) Find the deterministic total and add 10% margin. (b) With a storable bipropellant at $I_{sp} = 325$ s, find the propellant and wet mass. (c) Aerobraking can replace 1600 m/s of the insertion burn at the cost of six months and 40 kg of extra thermal protection. Recompute the wet mass and evaluate the trade. (d) Suppose instead the launcher performs the trans-Mars injection. Recompute the spacecraft wet mass for both the all-propulsive and the aerobraking cases, and comment on what this does to the launch vehicle requirement.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_e = 9.80665(310) = 3040.1\ \mathrm{m/s}, \qquad MR = e^{1800/3040.1} = e^{0.59209} = 1.8078.$$

(b) $$m_p = m_f\left(MR-1\right) = 800(0.8078) = 646\ \mathrm{kg}, \qquad m_0 = 1446\ \mathrm{kg}.$$

(c) $$\Delta v = 1.10(1800) = 1980\ \mathrm{m/s}, \qquad MR = e^{1980/3040.1} = e^{0.65130} = 1.9180,$$

$$m_p = 800(0.9180) = 734\ \mathrm{kg}, \qquad m_0 = 1534\ \mathrm{kg}.$$

(d) $$\frac{734-646}{646} = 0.137 = 13.7\%.$$

**A 10% margin on $\Delta v$ cost 13.7% more propellant** — the exponential again. **Margin is never proportional; it is always more expensive than it looks.**

**P2** (a) $$r_1 = 6378+300 = 6678\ \mathrm{km}, \qquad r_2 = 20{,}000\ \mathrm{km}.$$

$$v_1 = \sqrt{\frac{3.986\times10^{14}}{6.678\times10^6}} = \sqrt{5.9686\times10^7} = 7725.8\ \mathrm{m/s},$$

$$v_2 = \sqrt{\frac{3.986\times10^{14}}{2.0\times10^7}} = \sqrt{1.9930\times10^7} = 4464.3\ \mathrm{m/s}.$$

(b) $$a_t = \frac{6678+20{,}000}{2} = 13{,}339\ \mathrm{km}.$$

$$v_p = \sqrt{3.986\times10^{14}\left(\frac{2}{6.678\times10^6}-\frac{1}{1.3339\times10^7}\right)} = \sqrt{3.986\times10^{14}\left(2.9949\times10^{-7}-7.4970\times10^{-8}\right)}$$
$$= \sqrt{3.986\times10^{14}\left(2.2452\times10^{-7}\right)} = \sqrt{8.9496\times10^7} = 9460.2\ \mathrm{m/s},$$

$$v_a = \sqrt{3.986\times10^{14}\left(1.0\times10^{-7}-7.4970\times10^{-8}\right)} = \sqrt{3.986\times10^{14}\left(2.5030\times10^{-8}\right)}$$
$$= \sqrt{9.9774\times10^6} = 3158.7\ \mathrm{m/s}.$$

(c) $$\Delta v_1 = 9460.2-7725.8 = 1734.4\ \mathrm{m/s},$$
$$\Delta v_2 = 4464.3-3158.7 = 1305.6\ \mathrm{m/s},$$
$$\Delta v_{\rm total} = 3040.0\ \mathrm{m/s}.$$

(d) *Combined at the second burn:*

$$\Delta v_2 = \sqrt{v_a^2+v_2^2-2v_av_2\cos51.6°} = \sqrt{3158.7^2+4464.3^2-2(3158.7)(4464.3)(0.62115)}$$

$$= \sqrt{9.977\times10^6+1.9930\times10^7-1.7516\times10^7} = \sqrt{1.2391\times10^7} = 3519.8\ \mathrm{m/s}.$$

$$\Delta v_{\rm total} = 1734.4+3519.8 = 5254.2\ \mathrm{m/s}.$$

*Separately at the low orbit, before the transfer:*

$$\Delta v_{\rm plane} = 2(7725.8)\sin(25.8°) = 2(7725.8)(0.43523) = 6725.0\ \mathrm{m/s},$$

$$\Delta v_{\rm total} = 6725.0+1734.4+1305.6 = 9765.0\ \mathrm{m/s}.$$

*Comparison.*

| Strategy | Total $\Delta v$ |
|---|---|
| Plane change combined at the high orbit | **5254 m/s** |
| Plane change separately at the low orbit | 9765 m/s |

**The low-orbit plane change costs 4511 m/s more — 86% more than the whole combined mission.**

*Why the difference is so extreme.* Two effects compound:

**Speed.** The plane change costs $2v\sin(i/2)$, and $v$ at 6678 km is 7726 m/s against 4464 m/s at 20,000 km — a factor of 1.73 in the cost of the same rotation.

**Combining.** Rotating and accelerating in one burn uses the cosine rule rather than adding magnitudes, saving a further 1672 m/s (3520 against $1306+3886 = 5192$ done separately at the high orbit).

**Between them, doing the plane change late and combined is worth almost twice the mission.** This is why launch site latitude matters so much commercially — a Kourou launch at 5.2° inclination reaches GEO for roughly 200 m/s less than one from Cape Canaveral at 28.5°, which converts to about 5% more payload.

**P3** (a) $$\Delta v_{\rm det} = 3610+30+30+2100+100 = 5870\ \mathrm{m/s},$$

$$\Delta v_{\rm carried} = 1.10(5870) = 6457\ \mathrm{m/s}.$$

(b) $$v_e = 9.80665(325) = 3187.2\ \mathrm{m/s}, \qquad e^{6457/3187.2} = e^{2.02591} = 7.5832,$$

$$m_p = 1200(6.5832) = 7900\ \mathrm{kg}, \qquad m_0 = 1200+7900 = 9100\ \mathrm{kg}.$$

**A 1.2-tonne orbiter needs a 9.1-tonne wet spacecraft** — the propellant is 87% of it.

(c) *With aerobraking.* The insertion burn falls from 2100 to 500 m/s, and the dry mass rises by 40 kg:

$$\Delta v_{\rm det} = 3610+60+500+100 = 4270\ \mathrm{m/s}, \qquad \Delta v_{\rm carried} = 4697\ \mathrm{m/s},$$

$$m_f = 1240\ \mathrm{kg}, \qquad e^{4697/3187.2} = e^{1.47370} = 4.3655,$$

$$m_p = 1240(3.3655) = 4173\ \mathrm{kg}, \qquad m_0 = 1240+4173 = 5413\ \mathrm{kg}.$$

*The trade.*

| | All-propulsive | Aerobraking |
|---|---|---|
| $\Delta v$ carried | 6457 m/s | 4697 m/s |
| Dry mass | 1200 kg | 1240 kg |
| Propellant | 7900 kg | **4173 kg** |
| Wet mass | 9100 kg | **5413 kg** |

**Aerobraking saves 3687 kg — 41% of the spacecraft.** The 40 kg of thermal protection bought a 3727 kg propellant saving, a return of **93 to 1**.

*Is it worth six months?* **Almost always yes**, and the reasoning is not close:

**The mass saving is decisive.** A 9.1 t spacecraft needs a heavy-lift launcher; a 5.4 t one fits a medium-lift vehicle, which typically costs half as much.

**The six months are cheap.** A Mars cruise already takes 6–9 months, and an orbiter's science mission runs for years. Six months of aerobraking delays the science start but does not threaten the mission.

**The risk is manageable and proven.** Mars Global Surveyor, Mars Odyssey, MRO and ExoMars TGO all aerobraked successfully. **The technique is routine.**

*The one real cost.* Aerobraking requires hundreds of atmospheric passes with active navigation and daily commanding, so it is **operationally expensive** — a full flight team working for six months. On a cost-constrained mission that is a real budget line, and it is why some missions still choose all-propulsive insertion into a high, cheap orbit instead.

(d) *If the launcher performs the trans-Mars injection*, the spacecraft carries only 3610 m/s less:

*All-propulsive:* $\Delta v_{\rm det} = 60+2100+100 = 2260$ m/s, carried $= 2486$ m/s.

$$e^{2486/3187.2} = e^{0.78000} = 2.1815, \qquad m_p = 1200(1.1815) = 1418\ \mathrm{kg}, \qquad m_0 = 2618\ \mathrm{kg}.$$

*Aerobraking:* $\Delta v_{\rm det} = 60+500+100 = 660$ m/s, carried $= 726$ m/s.

$$e^{726/3187.2} = e^{0.22778} = 1.2558, \qquad m_p = 1240(0.2558) = 317\ \mathrm{kg}, \qquad m_0 = 1557\ \mathrm{kg}.$$

*The full picture.*

| | Spacecraft does TMI | Launcher does TMI |
|---|---|---|
| All-propulsive | 9100 kg (to LEO) | 2618 kg (to escape) |
| Aerobraking | 5413 kg (to LEO) | **1557 kg (to escape)** |

*What this does to the launch requirement.* **It moves the problem, it does not remove it.**

The launcher must now deliver the spacecraft onto a trans-Mars trajectory rather than to LEO, and that upper-stage burn costs the same 3610 m/s — **but the launcher's upper stage is a far better place to spend it.** Three reasons:

**Better $I_{sp}$.** A cryogenic upper stage runs at 450 s against the spacecraft's 325 s, so the same $\Delta v$ costs 28% less propellant per unit of mass moved.

**Better structural coefficient.** A launch stage achieves $\varepsilon\approx0.08$; a spacecraft carrying 7.9 t of propellant in tanks sized for a 1.2 t bus is far worse.

**The propellant is not stored for months.** Storable bipropellants are chosen for spacecraft precisely because they survive a nine-month cruise; that choice costs 100+ seconds of $I_{sp}$ relative to cryogens, and it need not be paid on a burn that happens minutes after launch.

**So the right architecture is: launcher does the injection, spacecraft does the insertion, and aerobraking does as much of the insertion as the schedule allows.** The 1557 kg result is a factor of **5.8 lighter** than the naive all-propulsive-from-LEO design — from nothing but deciding where each burn happens.

*This is the general lesson of $\Delta v$ budgeting.* **The number itself is astrodynamics; the allocation is engineering**, and the allocation is usually worth more than any amount of engine improvement.

</details>

## Flashback

**From Lesson 3.4 (Chemical rockets):** A storable bipropellant apogee engine has $c^* = 1720$ m/s, $C_{F,\rm vac} = 1.83$, and a dry spacecraft mass of 1500 kg. (a) Find $v_e$ and $I_{sp}$. (b) It must deliver 1840 m/s (a combined GTO-to-GEO burn); find the propellant mass. (c) Why is a storable rather than a cryogenic propellant used? (d) What would a 20 s improvement in $I_{sp}$ be worth?

<details>
<summary>Solution</summary>

(a) $$v_e = c^*C_F = 1720(1.83) = 3147.6\ \mathrm{m/s}, \qquad I_{sp} = \frac{3147.6}{9.80665} = 321.0\ \mathrm{s}.$$

(b) $$e^{1840/3147.6} = e^{0.58457} = 1.7942, \qquad m_p = 1500(0.7942) = 1191\ \mathrm{kg},$$

$$m_0 = 1500+1191 = 2691\ \mathrm{kg}.$$

(c) **Because the propellant must sit in the tanks for months and then work perfectly.** A geostationary satellite reaches GTO within hours of launch but performs its apogee burn over several days, and then keeps propellant for fifteen years of station-keeping.

**Cryogens boil off.** Liquid oxygen at 90 K and liquid hydrogen at 20 K require active insulation and venting; over fifteen years the losses are total. Storables (N₂O₄ with MMH or hydrazine) are liquid at room temperature, need no insulation, and are **hypergolic** — they ignite on contact, so there is no ignition system to fail after a decade in vacuum.

**The price is $I_{sp}$**: 321 s against a cryogenic 450 s. For a burn this size, that is worth about 500 kg on a 2.7 t spacecraft — **and it is paid willingly, because a cryogenic system that cannot restart after ten years is worth nothing at all.**

(d) $$I_{sp} = 341.0\ \mathrm{s}: \qquad v_e = 3343.1\ \mathrm{m/s}, \qquad e^{1840/3343.1} = e^{0.55039} = 1.7339,$$

$$m_p = 1500(0.7339) = 1101\ \mathrm{kg}, \qquad m_0 = 2601\ \mathrm{kg}.$$

**A saving of 90 kg on a 2691 kg spacecraft — 3.3%.**

*And what that 90 kg is worth.* It can be spent as extra propellant for station-keeping, buying roughly two and a half additional years of operational life on a fifteen-year satellite. **For a commercial communications satellite earning tens of millions per year, two extra years is worth far more than the engine.**

*The bridge to this lesson.* Notice that the same 20 s of $I_{sp}$ applied to the *full* LEO-to-GEO profile of Example 1 — 5558 m/s instead of 1840 — would save

$$1500\left(e^{5557/3147.6}-e^{5557/3343.1}\right) = 860\ \mathrm{kg},$$

**nearly ten times as much.** The value of an $I_{sp}$ improvement scales with $\Delta v/v_e$, so **the same engine improvement is worth ten times more on a high-$\Delta v$ mission than on a low-$\Delta v$ one.**

**Which is the propulsion designer's version of the budgeting lesson**: know which burn you are optimizing for, because the leverage is not the same everywhere.

</details>

## Connections

- **Backward:** the rocket equation converting $\Delta v$ to propellant is [3.1](03-01-rocket-equation.md)'s; the $I_{sp}$ that sets $v_e$ is [3.2](03-02-specific-impulse-rocket-performance.md)'s; the staging that distributes the budget is [3.3](03-03-staging-mass-ratio.md)'s; the propellant choice for long storage is [3.4](03-04-chemical-rockets-liquids-solids.md)'s.
- **Forward:** [4.1](04-01-electric-propulsion.md) shows what happens to these budgets at $I_{sp} = 3000$ s; [4.4](04-04-propulsion-design-space.md) maps the whole trade; [`orbital-mechanics`](../../orbital-mechanics/syllabus.md) derives the transfers this lesson has used.
- **Sideways:** a $\Delta v$ budget is an **energy budget in disguise**, and the practice of building one — enumerate the deterministic items, add statistical allowances, carry programme reserve — is identical to a mass budget, a power budget, or a link budget in communications. **The discipline is the same in every case: what is not budgeted is not carried, and what is not carried ends the mission.**

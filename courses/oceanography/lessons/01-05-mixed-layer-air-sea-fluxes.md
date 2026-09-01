# Physical Oceanography · Lesson 1.5: The mixed layer and air–sea fluxes

> ⏱ ~15 min · Module 1: Seawater and its structure · Builds on: [1.4](01-04-stratification-buoyancy-frequency.md) · Unlocks: [2.3](02-03-ekman-layer-transport.md), [4.2](04-02-deep-water-formation-convection.md), [6.2](06-02-ocean-heat-uptake-circulation.md)

## Why this matters

Every property the interior ocean has, it acquired at the surface. The whole apparatus of Modules 3 and 4 — water masses, the overturning, heat and carbon uptake — is downstream of what happens in the top hundred metres, where the ocean and atmosphere actually touch. This lesson closes the two budgets that set that exchange, heat and freshwater, and answers the one question that decides how much of the ocean the atmosphere can reach: **how deep does the stirring go?**

It also delivers a promise made by [atmospheric-science 6.3](../../atmospheric-science/lessons/06-03-tropical-cyclones-tropics.md), which described a hurricane as a heat engine running on warm sea surface but left the ocean's response as an outstanding item. The response is a **cold wake**, it is a genuine negative feedback on the storm, and by the end of this lesson you can estimate how deep it reaches.

## The idea

**A slab that the atmosphere can stir.** Wind and convection keep the top of the ocean turbulently mixed, so temperature, salinity and density are nearly uniform from the surface down to some depth $h$ and then change abruptly. That uniform slab is the **mixed layer**, and it behaves like a single well-stirred reservoir: heat added at the surface is instantly spread through the whole of it. Its depth $h$ is therefore the single most consequential number in air–sea interaction, because the same 100 watts per square metre warms a 20 m layer ten times faster than a 200 m one.

**Four fluxes cross the surface, and three of them cool.** Sunlight comes in. Infrared radiation goes out. Evaporation carries away latent heat — the dominant loss, and by a wide margin. Conduction to the air carries away sensible heat, usually a small term. The net is the ocean's heat forcing, and it is the *residual of large opposing terms*, which is why measuring it is hard.

**Freshwater forcing is a salinity forcing.** Evaporation removes water and leaves salt behind; precipitation and river runoff do the reverse. No salt actually crosses the surface, but the *concentration* changes, and that is what density cares about. So the freshwater budget $E - P - R$ is a salinity budget in disguise.

**Buoyancy is what the dynamics actually sees.** Heat and freshwater are two different physical fluxes and the ocean responds to only one combination of them: their effect on density. Combining them into a single **buoyancy flux** is what lets you say, in one number, whether the surface is stabilizing the column or trying to overturn it.

**And the depth is set by a competition between energy and stratification.** Wind stirring supplies turbulent kinetic energy; stratification demands potential energy to be mixed away. [1.4](01-04-stratification-buoyancy-frequency.md) showed that cost goes as $N^2h^3$. Setting the supply against the demand gives the mixed-layer depth, and it immediately explains the seasonal cycle: the summer thermocline is a cheap barrier to build and an expensive one to break, so summer heat gets trapped in a thin layer, and it takes autumn *cooling* — which destroys the barrier rather than overcoming it — to release the deepening.

## The formal version

**The surface heat budget.** With all terms as fluxes into the ocean (W m⁻²),

$$Q_{\text{net}} = Q_{\text{SW}} - Q_{\text{LW}} - Q_{\text{LH}} - Q_{\text{SH}}.$$

*In words: absorbed sunlight, minus net infrared loss, minus evaporative cooling, minus conduction to the air.* Global-mean magnitudes over the ocean:

| Term | Typical global-mean value | Range |
|---|---|---|
| $Q_{\text{SW}}$ absorbed shortwave | $+170\ \mathrm{W\,m^{-2}}$ | 80 to 250 |
| $Q_{\text{LW}}$ net longwave loss | $-50$ | 30 to 70 |
| $Q_{\text{LH}}$ latent (evaporative) | $-100$ | 20 to 200 |
| $Q_{\text{SH}}$ sensible | $-10$ | $-30$ to $+30$ |
| **Net** | **about 0** | $\pm200$ locally |

Two things to notice. The **net is the small difference of large terms**, so a 5 percent error in latent heat is a 10 W m⁻² error in the net — larger than the entire anthropogenic forcing. And **latent heat dominates the cooling**, which is why sea surface temperature is so tightly coupled to wind speed and air humidity.

The bulk formulae are

$$Q_{\text{LH}} = \rho_a L_v C_E U\,(q_s - q_a), \qquad Q_{\text{SH}} = \rho_a c_{pa} C_H U\,(T_s - T_a),$$

with $U$ the wind speed at 10 m, $q$ specific humidity, $C_E \approx C_H \approx 1.2\times10^{-3}$ the transfer coefficients, and $L_v = 2.5\times10^{6}\ \mathrm{J\,kg^{-1}}$. *In words: both scale as wind speed times the air–sea contrast in the quantity being transferred.*

**The mixed-layer temperature equation.** For a slab of depth $h$,

$$\boxed{\ \frac{dT}{dt} = \frac{Q_{\text{net}}}{\rho_0 c_p h} \;-\; \frac{w_e\,(T - T_{-h})}{h} \;-\; \mathbf{u}\cdot\nabla T\ }$$

*In words: surface heating spread over the slab, minus the cooling from entraining colder water from below at rate $w_e$, minus advection.* The first term is the one to have at your fingertips: $100\ \mathrm{W\,m^{-2}}$ into a 50 m layer gives

$$\frac{dT}{dt} = \frac{100}{1025\times3990\times50} = 4.9\times10^{-7}\ \mathrm{K\,s^{-1}} = 0.042\ \mathrm{K\,day^{-1}} = 1.3\ \mathrm{K\,month^{-1}}.$$

**The freshwater and salinity budget.** With $E$, $P$, $R$ as evaporation, precipitation and runoff in m s⁻¹, the mixed-layer salinity obeys

$$\frac{dS}{dt} = \frac{S\,(E - P - R)}{h}.$$

*In words: evaporating water concentrates the salt that stays behind, in proportion to how much salt is already there.* Note there is no salt flux at all — this is a **virtual salt flux**, which matters when you build a model and never when you build intuition. A useful conversion: a latent heat flux of $100\ \mathrm{W\,m^{-2}}$ corresponds to

$$E = \frac{Q_{\text{LH}}}{\rho_w L_v} = \frac{100}{1000\times2.5\times10^{6}} = 4.0\times10^{-8}\ \mathrm{m\,s^{-1}} = 1.26\ \mathrm{m\,yr^{-1}},$$

which is close to the observed global-mean ocean evaporation. Latent heat flux and evaporation rate are the same measurement in two units.

**The buoyancy flux.** Combining both into their density effect,

$$B = g\left(\frac{\alpha\,Q_{\text{net}}}{\rho_0 c_p} \;-\; \beta\,S\,(E-P-R)\right).$$

*In words: heating makes the surface lighter, evaporation makes it heavier, and only the sum decides whether the column convects.* $B > 0$ (buoyancy gain) stabilizes; $B < 0$ drives convection. Sign conventions here vary between textbooks with distressing freedom — always re-derive from "does this make the surface lighter?" rather than trusting a remembered sign.

**Mixed-layer depth, and how it is defined.** Operationally, $h$ is where the profile first departs from its surface value by a chosen threshold: $\Delta T = 0.2\ \mathrm{K}$ or, better, $\Delta\sigma_\theta = 0.03\ \mathrm{kg\,m^{-3}}$ relative to the value at 10 m. The density criterion is preferred because in the polar ocean a layer can be isothermal and strongly stratified by salt. Typical values: 20 to 40 m in the summer subtropics, 100 to 200 m in the winter mid-latitudes, and **over 1000 m** in the winter Labrador and Greenland Seas — which is deep convection and is [4.2](04-02-deep-water-formation-convection.md)'s subject.

**Wind-driven deepening.** The turbulent kinetic energy the wind delivers to the ocean scales as $\rho_0 u_*^3$ with the water-side friction velocity $u_* = \sqrt{\tau/\rho_0}$. Equating the accumulated supply to [1.4](01-04-stratification-buoyancy-frequency.md)'s cost $\rho_0N^2h^3/12$:

$$m\,\rho_0 u_*^3\,t = \frac{\rho_0 N^2 h^3}{12} \qquad\Longrightarrow\qquad h = \left(\frac{12\,m\,u_*^3\,t}{N^2}\right)^{1/3},$$

with $m$ an efficiency of order 1. *In words: mixing depth grows as the cube root of wind work and falls as the two-thirds power of stratification.* Both weak dependences — which is why mixed-layer depth is stubborn, and why a doubling of the wind does not double the mixing.

## Picture

![Four temperature profiles at one mid-latitude site, plotted with depth increasing downward from 0 to 200 m and temperature from 10 to 22 degrees. The February profile is uniform at 13 degrees down to 150 m. The May profile is uniform at 14.2 degrees to only 40 m. The August profile is warmest, uniform at 21 degrees to just 20 m, then falls steeply through a sharp seasonal thermocline. The November profile is uniform at 17 degrees to 80 m. All four converge onto the same curve below 150 m, where the season never reaches](assets/01-05-fig1.svg)

Note the asymmetry. Warming builds a shallow layer; cooling builds a deep one. The ocean's memory of summer lives in the water *between* the August and February mixed-layer depths — the seasonal thermocline — and is erased each winter.

## Worked examples

**Example 1 (mechanical — closing a budget).** At a subtropical site, $Q_{\text{SW}} = 220$, $Q_{\text{LW}} = 55$, $Q_{\text{LH}} = 145$, $Q_{\text{SH}} = 12\ \mathrm{W\,m^{-2}}$, all as magnitudes. The mixed layer is 30 m deep, $S = 36.4$, and precipitation is negligible. (a) Find $Q_{\text{net}}$. (b) Find $dT/dt$ in K per month. (c) Find the evaporation rate and $dS/dt$ per month.

(a) $$Q_{\text{net}} = 220 - 55 - 145 - 12 = +8\ \mathrm{W\,m^{-2}}.$$

Eight watts out of a 220 W gross input: a 4 percent residual. This is the small-difference-of-large-numbers problem in its purest form.

(b) $$\frac{dT}{dt} = \frac{8}{1025\times3990\times30} = 6.52\times10^{-8}\ \mathrm{K\,s^{-1}} = 0.171\ \mathrm{K\,month^{-1}}.$$

(c) $$E = \frac{145}{1000\times2.5\times10^{6}} = 5.80\times10^{-8}\ \mathrm{m\,s^{-1}} = 1.83\ \mathrm{m\,yr^{-1}},$$

$$\frac{dS}{dt} = \frac{S\,E}{h} = \frac{36.4\times5.80\times10^{-8}}{30} = 7.04\times10^{-8}\ \mathrm{s^{-1}} = 0.185\ \mathrm{month^{-1}}.$$

Salinity rising by 0.185 per month is enormous — it would add 2.2 in a year — which tells you immediately that something must be removing salt. It is: the Ekman and geostrophic circulation exports the salty water and imports fresher water from the tropics, and the subtropical salinity maximum is the steady state of that competition. **A budget that fails to balance locally is telling you that transport matters**, and quantifying that transport is Modules 2 and 3.

**Example 2 (why you'd care — a hurricane's cold wake).** A tropical cyclone imposes a wind stress of $\tau = 2\ \mathrm{N\,m^{-2}}$ for 12 hours over a column whose seasonal thermocline has $N = 1.0\times10^{-2}\ \mathrm{s^{-1}}$. Take $m = 1$ and $\rho_0 = 1027\ \mathrm{kg\,m^{-3}}$. (a) How deep does it mix? (b) The pre-storm mixed layer was 30 m at 29 °C and the water between 30 m and the new depth averages 25 °C. Estimate the sea surface temperature drop. (c) State the feedback on the storm.

(a) $$u_* = \sqrt{\frac{\tau}{\rho_0}} = \sqrt{\frac{2}{1027}} = 0.0441\ \mathrm{m\,s^{-1}},$$

$$\text{energy supplied} = m\rho_0u_*^3 t = 1\times1027\times(0.0441)^3\times43\,200 = 0.0882\times43\,200 = 3810\ \mathrm{J\,m^{-2}},$$

$$h = \left(\frac{12\times3810}{1027\times(1.0\times10^{-2})^2}\right)^{1/3} = \left(\frac{45\,720}{0.1027}\right)^{1/3} = (4.45\times10^{5})^{1/3} = 76\ \mathrm{m}.$$

(b) Conserving heat while homogenizing 0 to 76 m:

$$T_{\text{new}} = \frac{30\times29 + 46\times25}{76} = \frac{870 + 1150}{76} = \frac{2020}{76} = 26.6\,^\circ\mathrm{C}.$$

A surface cooling of about **2.4 K**, which is squarely in the observed range for cold wakes (1 to 6 K, with the larger values where the pre-storm layer was thin).

(c) The feedback is **negative and strong**. A tropical cyclone is a Carnot-like heat engine whose power supply is the latent heat flux from the sea surface ([atmospheric-science 6.3](../../atmospheric-science/lessons/06-03-tropical-cyclones-tropics.md)), and that flux depends on the saturation humidity at the sea surface, which by Clausius–Clapeyron rises about 7 percent per kelvin. Cooling the surface by 2.4 K cuts the air–sea humidity contrast by roughly 15 percent and the enthalpy flux with it. **The storm digs its own hole.**

*The point.* This is why forecasting intensity requires knowing the ocean's *subsurface* structure, not just its sea surface temperature. Two regions with identical SST but mixed-layer depths of 30 m and 100 m give completely different wakes — and it is why forecasters watch ocean heat content down to the 26 °C isotherm rather than SST, and why a storm crossing a warm-core eddy (a deep warm lens, [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)) can intensify explosively: there is no cold water within reach to entrain. The 2005 rapid intensification of Hurricane Katrina over a Loop Current warm eddy is the standard example.

## Watch out

- **You might think** the mixed layer and the thermocline are separated by a sharp interface you could point to. **Actually** "mixed layer depth" is a threshold-based definition, and different thresholds give answers differing by tens of metres in the same profile. Always state the criterion; comparisons between studies using different ones are not comparisons.
- **You might think** a positive net heat flux warms the ocean and that is that. **Actually** entrainment can cool a mixed layer that is being heated, if the layer is deepening into cold water. In autumn both terms are negative and reinforce; in spring they oppose. The sign of $dT/dt$ is not the sign of $Q_{\text{net}}$.
- **You might think** freshwater flux is unimportant compared with heat. **Actually** it is unimportant in the tropics, where $\alpha$ is large, and it is decisive at high latitudes, where $\alpha$ collapses toward $0.5\times10^{-4}$ and the ratio $\beta/\alpha$ exceeds 15. Every abrupt-climate-change mechanism in [6.4](06-04-amoc-stability-stommel-model.md) runs through the freshwater term, not the heat term.

## One-liner

> The mixed layer is the ocean's interface with everything: a well-stirred slab whose depth — set by wind energy fighting stratification, and therefore growing only as the cube root of the wind work — decides how fast the sea surface responds, how much heat a hurricane can reach, and how much of the ocean the atmosphere ever touches.

## Problems

**P1 (🟢)** A mid-latitude site in autumn has $Q_{\text{SW}} = 90$, $Q_{\text{LW}} = 60$, $Q_{\text{LH}} = 130$, $Q_{\text{SH}} = 40\ \mathrm{W\,m^{-2}}$ (magnitudes), and a mixed layer 80 m deep. (a) Compute $Q_{\text{net}}$. (b) Compute $dT/dt$ in K per month, ignoring entrainment and advection. (c) The observed cooling is 1.6 K per month. Reconcile, and name the missing term.

**P2 (🟡)** At 60 degrees north in winter, $Q_{\text{net}} = -250\ \mathrm{W\,m^{-2}}$ and $E - P = -0.5\ \mathrm{m\,yr^{-1}}$ (net precipitation exceeds evaporation). Take $\alpha = 0.9\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 7.8\times10^{-4}$, $S = 34.8$, $\rho_0 = 1027\ \mathrm{kg\,m^{-3}}$, $c_p = 3990\ \mathrm{J\,kg^{-1}\,K^{-1}}$. (a) Compute the thermal and haline contributions to the buoyancy flux $B$ separately. (b) Compute $B$ and state whether the surface is convecting. (c) Compute the freshwater flux, in metres per year, that would be needed to shut the convection off, and comment on whether that is a plausible amount.

**P3 (🔴, optional)** Two sites have identical sea surface temperature of 29.5 °C. Site A has a mixed layer 25 m deep over a seasonal thermocline with $N = 1.2\times10^{-2}\ \mathrm{s^{-1}}$; site B is a warm-core eddy with a mixed layer 90 m deep over $N = 6.0\times10^{-3}\ \mathrm{s^{-1}}$. Below each mixed layer, temperature falls linearly at $0.10\ \mathrm{K\,m^{-1}}$. A cyclone applies $\tau = 2.5\ \mathrm{N\,m^{-2}}$ for 18 hours; take $m = 1$, $\rho_0 = 1027$. (a) Compute the mixing depth at each site. (b) Compute the post-storm surface temperature at each. (c) The enthalpy flux driving the storm scales roughly as $\exp(0.07\,\Delta T)$ in the saturation humidity. Estimate the ratio of the storm's energy supply over the two sites after the wake forms, and state which site permits rapid intensification.

<details>
<summary>Solutions</summary>

**P1** (a) $$Q_{\text{net}} = 90 - 60 - 130 - 40 = -140\ \mathrm{W\,m^{-2}}.$$

Note the sensible heat flux is large and negative here — cold dry continental air over warm water, the classic autumn mid-latitude configuration, and the one that also makes $Q_{\text{LH}}$ large.

(b) $$\frac{dT}{dt} = \frac{-140}{1025\times3990\times80} = -4.28\times10^{-7}\ \mathrm{K\,s^{-1}}.$$

Per month ($2.63\times10^{6}$ s): $-1.13\ \mathrm{K\,month^{-1}}$.

(c) The observed cooling is 1.6 K per month, about 0.47 K per month more than the surface flux alone accounts for. The missing term is **entrainment**: the mixed layer is deepening through autumn, and each metre of deepening mixes in water colder than the layer. From the mixed-layer equation, the entrainment cooling is $w_e(T - T_{-h})/h$; with $h = 80$ m and a temperature jump of, say, 1.5 K at the base,

$$w_e = \frac{h}{T-T_{-h}}\times0.47\ \mathrm{K\,month^{-1}} = \frac{80}{1.5}\times0.47 = 25\ \mathrm{m\,month^{-1}},$$

a deepening rate of about 0.8 m per day — entirely typical for autumn. (Horizontal advection could also contribute, but at a mid-ocean site away from a boundary current it is usually the smaller term.)

**P2** (a) Thermal contribution:

$$B_{\text{thermal}} = \frac{g\,\alpha\,Q_{\text{net}}}{\rho_0c_p} = \frac{9.81\times0.9\times10^{-4}\times(-250)}{1027\times3990} = \frac{-0.2207}{4.098\times10^{6}} = -5.39\times10^{-8}\ \mathrm{m^2\,s^{-3}}.$$

Negative: cooling makes the surface denser, driving convection.

Haline contribution. First convert: $E-P = -0.5\ \mathrm{m\,yr^{-1}} = -0.5/3.156\times10^{7} = -1.584\times10^{-8}\ \mathrm{m\,s^{-1}}$.

$$B_{\text{haline}} = -g\beta S(E-P) = -9.81\times7.8\times10^{-4}\times34.8\times(-1.584\times10^{-8}) = +4.22\times10^{-9}\ \mathrm{m^2\,s^{-3}}.$$

Positive: net precipitation freshens and lightens the surface, stabilizing it.

(b) $$B = -5.39\times10^{-8} + 0.42\times10^{-8} = -4.97\times10^{-8}\ \mathrm{m^2\,s^{-3}}.$$

Strongly negative, so the surface is **losing buoyancy and convecting**. The freshwater term offsets only about 8 percent of the cooling.

(c) Shutting convection off requires $B = 0$, i.e. $B_{\text{haline}} = +5.39\times10^{-8}$, which is 12.8 times its present value. Since $B_{\text{haline}}$ is linear in $(E-P)$:

$$(E-P)_{\text{crit}} = -0.5\times12.8 = -6.4\ \mathrm{m\,yr^{-1}}.$$

Six and a half metres of net precipitation a year is **not** plausible as a rainfall change — that is a tropical-rainforest rate applied to a subpolar sea. But it is entirely plausible as a **freshwater release**: it corresponds to about $0.2\ \mathrm{Sv}$ spread over a $10^{6}\ \mathrm{km^2}$ subpolar region, which is the scale of a Greenland melt pulse or a glacial meltwater outburst. That is precisely the mechanism behind the abrupt-change scenarios of [6.4](06-04-amoc-stability-stommel-model.md), and this calculation is why those scenarios are stated in sverdrups of freshwater rather than in millimetres of rain.

**P3** (a) $$u_* = \sqrt{\frac{2.5}{1027}} = 0.0493\ \mathrm{m\,s^{-1}}, \qquad t = 64\,800\ \mathrm{s},$$
$$\text{energy} = 1027\times(0.0493)^3\times64\,800 = 1027\times1.199\times10^{-4}\times64\,800 = 7980\ \mathrm{J\,m^{-2}}.$$

Site A: $$h = \left(\frac{12\times7980}{1027\times(1.2\times10^{-2})^2}\right)^{1/3} = \left(\frac{95\,760}{0.1479}\right)^{1/3} = (6.475\times10^{5})^{1/3} = 86.5\ \mathrm{m}.$$

Site B: $$h = \left(\frac{95\,760}{1027\times(6.0\times10^{-3})^2}\right)^{1/3} = \left(\frac{95\,760}{0.03697}\right)^{1/3} = (2.590\times10^{6})^{1/3} = 137\ \mathrm{m}.$$

(b) Site A: the layer deepens from 25 m to 86.5 m. Below 25 m, $T(z) = 29.5 - 0.10(z-25)$. The mean temperature of the water from 25 to 86.5 m is the value at the midpoint, $z = 55.75$ m:

$$\bar T_{25\text{–}86.5} = 29.5 - 0.10(30.75) = 26.43\,^\circ\mathrm{C}.$$

$$T_{\text{new}} = \frac{25\times29.5 + 61.5\times26.43}{86.5} = \frac{737.5 + 1625.4}{86.5} = \frac{2362.9}{86.5} = 27.32\,^\circ\mathrm{C}.$$

A drop of **2.18 K**.

Site B: the layer deepens from 90 m to 137 m. Mean temperature from 90 to 137 m, midpoint $z = 113.5$:

$$\bar T = 29.5 - 0.10(113.5-90) = 29.5 - 2.35 = 27.15\,^\circ\mathrm{C}.$$

$$T_{\text{new}} = \frac{90\times29.5 + 47\times27.15}{137} = \frac{2655 + 1276.1}{137} = \frac{3931.1}{137} = 28.69\,^\circ\mathrm{C}.$$

A drop of only **0.81 K**.

(c) The ratio of enthalpy supply, taking the pre-storm value as the reference:

$$\frac{\text{site B}}{\text{site A}} = \frac{\exp(-0.07\times0.81)}{\exp(-0.07\times2.18)} = \exp\left(0.07\times1.37\right) = \exp(0.0959) = 1.10.$$

Site B delivers about **10 percent more energy** to the storm than site A after the wake forms, and the difference grows with storm duration since site A keeps cooling.

**Site B permits rapid intensification.** The point is worth stating carefully: the two sites had *identical* sea surface temperature, so any forecast based on SST alone would rate them the same. What separates them is that site B's warm water extends to 90 m and its stratification below is weak, so the storm cannot reach anything cold enough to hurt itself. This is exactly the warm-core-eddy configuration under Hurricane Katrina in the Gulf of Mexico in 2005, and it is why operational intensity forecasting assimilates satellite altimetry — sea surface height, from [6.5](06-05-observing-the-ocean.md), is a proxy for exactly this subsurface warm-layer thickness.

</details>

## Flashback

**From Lesson 1.3 (T–S diagrams and water-mass identification):** A sample at 700 m in the South Atlantic reads $(\theta,S) = (5.60\,^\circ\mathrm{C},\ 34.42)$. The two candidate end-members are Antarctic Intermediate Water $(3.20,\ 34.20)$ and upper South Atlantic Central Water $(9.00,\ 34.85)$. (a) Compute the AAIW fraction from temperature and from salinity. (b) State whether two components suffice. (c) Suppose instead the sample had read $(5.60,\ 34.55)$. Recompute the salinity-based fraction, and say what the disagreement with the temperature-based one implies and in which direction on the T–S plane the missing source must lie.

<details>
<summary>Solution</summary>

(a) With $x$ the AAIW fraction, from temperature:

$$x = \frac{\theta - \theta_{\text{SACW}}}{\theta_{\text{AAIW}} - \theta_{\text{SACW}}} = \frac{5.60 - 9.00}{3.20 - 9.00} = \frac{-3.40}{-5.80} = 0.586.$$

From salinity:

$$x = \frac{S - S_{\text{SACW}}}{S_{\text{AAIW}} - S_{\text{SACW}}} = \frac{34.42 - 34.85}{34.20 - 34.85} = \frac{-0.43}{-0.65} = 0.662.$$

(b) The two estimates differ by 0.076, about 12 percent of the mean. That is larger than the 3 percent agreement seen in [1.3](01-03-ts-diagrams-water-masses.md)'s Example 1 but still within the uncertainty of assumed end-member values, which are rarely known better than $\pm0.05$ in salinity. **Two components are adequate**, giving roughly 60 to 66 percent AAIW — though the discrepancy is large enough to be worth checking with a third tracer such as oxygen before relying on it.

(c) With $S = 34.55$:

$$x = \frac{34.55-34.85}{34.20-34.85} = \frac{-0.30}{-0.65} = 0.462.$$

Now the temperature says 0.586 and the salinity says 0.462 — a disagreement of 0.124 in the *opposite direction* from part (a), and too large to blame on end-member uncertainty.

The implication: the sample is **saltier than a two-component mixture at its temperature would be**, so a third source is present that is salty relative to the AAIW–SACW mixing line. On the T–S plane the missing source lies **to the right of the line**, at higher salinity for its temperature. At 700 m in the South Atlantic there is a well-known candidate in that direction: North Atlantic Deep Water, which arrives from above and to the north carrying the Atlantic's salinity maximum, and whose upper edge does reach this depth in the tropical South Atlantic.

*Check.* Note the general rule this illustrates. A two-component fit produces two independent estimates of one number; their **difference** carries the information about what is missing, and its **sign** points at where. Discarding one of the two estimates — say, always trusting temperature because thermometers are more accurate — throws that information away.

</details>

## Connections

- **Backward:** the mixing-energy cost $\rho_0N^2h^3/12$ is [1.4](01-04-stratification-buoyancy-frequency.md)'s, and the reason freshwater dominates at high latitudes and heat in the tropics is [1.2](01-02-density-equation-of-state.md)'s varying $\alpha$.
- **Forward:** the wind stress $\tau$ introduced here drives the Ekman layer in [2.3](02-03-ekman-layer-transport.md); surface buoyancy loss is the driver of deep convection in [4.2](04-02-deep-water-formation-convection.md); and the mixed layer's seasonal cycle is the mechanism by which the ocean *subducts* its properties into the interior in [6.2](06-02-ocean-heat-uptake-circulation.md).
- **Sideways (atmospheric science):** the cold-wake calculation discharges the debt left by [atmospheric-science 6.3](../../atmospheric-science/lessons/06-03-tropical-cyclones-tropics.md), which built the tropical cyclone as a heat engine drawing on the sea surface without asking what the sea surface does in response. It responds by cooling itself, which is why the coupled problem is the only correct one.

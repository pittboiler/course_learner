# Propulsion · Lesson 3.2: Specific impulse and rocket performance

> ⏱ ~15 min · Module 3: Rockets and mission analysis · Builds on: [1.4 Nozzle performance](01-04-nozzle-performance-cf-cstar.md), [3.1 The rocket equation](03-01-rocket-equation.md) · Unlocks: [3.4 Chemical rockets](03-04-chemical-rockets-liquids-solids.md), [4.1 Electric propulsion](04-01-electric-propulsion.md)

## Why this matters

[3.1](03-01-rocket-equation.md) showed that $\Delta v$ is *linear* in exhaust velocity and only logarithmic in mass. **So exhaust velocity is the lever, and specific impulse is how the industry quotes it.**

This lesson does three things. It defines $I_{sp}$ properly and explains the peculiar $g_0$ in the denominator. It connects $I_{sp}$ to the $c^*$ and $C_F$ split of [1.4](01-04-nozzle-performance-cf-cstar.md), so that a single performance number decomposes into a propellant part and a nozzle part. And it shows why the mixture ratio that maximizes $I_{sp}$ is **not** the stoichiometric one — a result that sounds like a mistake and is the single most important fact about propellant selection.

## The idea

**Specific impulse is impulse per unit weight of propellant.** $I_{sp} = F/(\dot mg_0)$, with units of seconds. **The seconds are not a time in any physical sense** — they are the consequence of dividing by a weight rather than a mass.

**The $g_0$ is historical and universal.** Dividing by weight rather than mass made the number identical in metric and imperial systems, which is why the convention survived. **$g_0 = 9.80665$ m/s² is a defined constant, not the local gravity** — an engine's $I_{sp}$ is the same on Mars.

**The physically meaningful quantity is $v_e = g_0I_{sp}$**, the effective exhaust velocity, and that is what goes into the rocket equation.

**It factors exactly as [1.4](01-04-nozzle-performance-cf-cstar.md) said.** $g_0I_{sp} = c^*C_F$ — chamber times nozzle, propellant times geometry-and-altitude. **A single measured $I_{sp}$ hides two independent stories, and the split recovers them.**

**Total impulse is the mission currency.** $I = \int F\,dt = I_{sp}g_0m_p$: how much propellant you carry times how good it is. **Two engines with the same total impulse do the same job, however differently they spread it in time.**

**Now the surprise about mixture ratio.** $c^*\propto\sqrt{T_0/\mathcal{M}}$, so performance wants a hot, light exhaust. **Stoichiometric burning maximizes $T_0$ — but it also maximizes $\mathcal{M}$**, because all the light fuel has been converted into heavier products.

**Running fuel-rich gives up temperature to buy molecular weight, and the trade is favourable.** For hydrogen/oxygen the optimum is near an oxidizer/fuel ratio of 4, against a stoichiometric 8 — **half as much oxygen as the chemistry wants.** The leftover hydrogen is not burned; it is *ballast that happens to be very light*, and it drags the mean molecular weight down.

**Real engines then run richer still than the $I_{sp}$ optimum would suggest** — or rather, less rich — because hydrogen is bulky and tank volume costs mass. **The chosen mixture ratio is an $I_{sp}$-versus-density compromise**, and every hydrolox engine sits at a slightly different point on it.

## The formal version

**Definitions.**

$$\boxed{\;I_{sp} = \frac{F}{\dot mg_0} = \frac{v_e}{g_0}, \qquad v_e = g_0I_{sp}, \qquad g_0 = 9.80665\ \mathrm{m/s^2}\ \text{(defined)}.\;}$$

**Factorization.**

$$\boxed{\;g_0I_{sp} = v_e = c^*C_F, \qquad c^* = \frac{\sqrt{RT_0}}{\Gamma} = \frac{1}{\Gamma}\sqrt{\frac{R_uT_0}{\mathcal{M}}}, \qquad \Gamma = \sqrt\gamma\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}}.\;}$$

**Total impulse.**

$$\boxed{\;I = \int F\,dt = v_em_p = I_{sp}g_0m_p.\;}$$

**Representative values** (vacuum $I_{sp}$, well-expanded nozzles):

| Propellant / system | $I_{sp}$ (s) | $v_e$ (m/s) | Notes |
|---|---|---|---|
| Cold gas (N₂) | 60–80 | 600–800 | attitude control, no combustion |
| Solid (APCP) | 250–290 | 2450–2840 | boosters, simple, not throttleable |
| Monopropellant hydrazine | 220–235 | 2160–2300 | satellite thrusters |
| Storable (N₂O₄/MMH) | 310–330 | 3040–3240 | long-duration, hypergolic |
| Kerolox (RP-1/LOX) | 340–360 | 3330–3530 | dense, first stages |
| Methalox (CH₄/LOX) | 360–380 | 3530–3730 | reusable, in-situ producible |
| Hydrolox (LH₂/LOX) | 440–465 | 4310–4560 | best chemical, bulky |
| Nuclear thermal (H₂) | 800–950 | 7850–9320 | [4.2](04-02-nuclear-thermal-advanced.md) |
| Hall thruster | 1500–2000 | 14,700–19,600 | [4.1](04-01-electric-propulsion.md) |
| Gridded ion | 3000–4500 | 29,400–44,100 | [4.1](04-01-electric-propulsion.md) |

**Mixture ratio.** Define $r = \dot m_{ox}/\dot m_{fuel}$. Stoichiometric hydrogen/oxygen is $r = 8$ (from $2\mathrm{H}_2+\mathrm{O}_2\to2\mathrm{H_2O}$: 32 g of O₂ per 4 g of H₂).

**Equilibrium chamber conditions and the resulting performance** (chamber 7 MPa, $\varepsilon = 40$, vacuum):

| $r$ | $T_0$ (K) | $\mathcal{M}$ | $\gamma$ | $c^*$ (m/s) | $I_{sp}$ (s) |
|---|---|---|---|---|---|
| 3.0 | 2570 | 8.9 | 1.26 | 2348 | 437 |
| **4.0** | 2977 | 10.0 | 1.24 | **2398** | **451** |
| 5.0 | 3252 | 11.6 | 1.23 | 2333 | 441 |
| 6.0 | 3396 | 13.3 | 1.22 | 2233 | 424 |
| 7.0 | 3457 | 15.0 | 1.21 | 2128 | 407 |
| 8.0 (stoich.) | 3468 | 16.6 | 1.20 | 2032 | 391 |

*($T_0$, $\mathcal{M}$ and $\gamma$ come from chemical-equilibrium calculations, which this course does not perform; the $c^*$ and $I_{sp}$ columns are computed from them here.)*

**The peak is at $r\approx4$, and stoichiometric is 13% worse.** $T_0$ rises monotonically with $r$, but $\mathcal{M}$ rises faster, and $c^*\propto\sqrt{T_0/\mathcal{M}}$.

**Bulk propellant density** — the competing consideration:

$$\rho_{\rm bulk} = \frac{1+r}{\dfrac{1}{\rho_f}+\dfrac{r}{\rho_{ox}}}, \qquad \rho_{\mathrm{LH_2}} = 71,\ \rho_{\mathrm{LOX}} = 1141\ \mathrm{kg/m^3}.$$

| $r$ | 4.0 | 5.5 | 6.0 | 8.0 |
|---|---|---|---|---|
| $\rho_{\rm bulk}$ (kg/m³) | 284 | 344 | 362 | 427 |

**Real hydrolox engines run $r = 5.5$–$6.0$**, sacrificing 2–6% of $I_{sp}$ for 20–27% more propellant density — because tank mass scales with volume.

## Picture

![A two-panel figure. Left: a factor tree, with a box at the top labelled specific impulse splitting into two branches, one labelled c star, the chamber and propellant, listing chamber temperature and molecular weight beneath it, and one labelled C sub F, the nozzle and altitude, listing area ratio and ambient pressure; a horizontal bar beneath shows a logarithmic specific-impulse scale from 60 to 4500 seconds with markers for cold gas, solid, storable, kerolox, hydrolox, nuclear thermal, Hall thruster and gridded ion, the chemical group clustered tightly between 250 and 465 and the electric group far to the right, with the gap between them annotated chemistry stops here. Right: the mixture-ratio trade for hydrogen and oxygen, plotting three curves against oxidizer-to-fuel ratio from 2 to 9 — chamber temperature rising steadily and flattening, mean molecular weight rising more steeply and nearly linearly, and specific impulse forming a broad hump peaking near ratio 4; a vertical dashed line at ratio 8 is labelled stoichiometric, a shaded band from 5.5 to 6.0 is labelled where engines actually run, and a fourth dotted curve rising to the right shows bulk propellant density, annotated the reason.](assets/03-02-fig1.svg)

Left: one number, two independent factors, and the enormous gap between chemical and electric propulsion.

Right: why the best mixture ratio is not the one chemistry would choose, and why real engines choose a third thing.

## Worked examples

**Example 1 (reading an engine's performance).** A vacuum-optimized engine is tested with $p_0 = 7.0$ MPa, $A_t = 0.040$ m², $\dot m = 150$ kg/s, and $F = 470$ kN.

*The two factors.*

$$c^* = \frac{p_0A_t}{\dot m} = \frac{7.0\times10^6(0.040)}{150} = \frac{280{,}000}{150} = 1867\ \mathrm{m/s},$$

$$C_F = \frac{F}{p_0A_t} = \frac{470{,}000}{280{,}000} = 1.679.$$

*Performance.*

$$v_e = c^*C_F = 1867(1.679) = 3134\ \mathrm{m/s}, \qquad I_{sp} = \frac{3134}{9.80665} = 319.5\ \mathrm{s}.$$

*Check directly:* $I_{sp} = F/(\dot mg_0) = 470{,}000/(150\times9.80665) = 319.5$ s ✓

*Total impulse for a 250-tonne propellant load.*

$$I = I_{sp}g_0m_p = 319.5(9.80665)(250{,}000) = 7.83\times10^8\ \mathrm{N\cdot s},$$

$$t_{\rm burn} = \frac{m_p}{\dot m} = \frac{250{,}000}{150} = 1667\ \mathrm{s}.$$

*Reading it.* **$c^* = 1867$ m/s identifies the propellant as kerolox** (hydrolox would be near 2350). **$C_F = 1.679$ identifies a moderately expanded nozzle** — a vacuum-optimized bell would reach 1.85–1.95.

**So this is a kerolox engine with a first-stage nozzle**, and its 319.5 s is exactly where such an engine should sit. **Two numbers, two conclusions, without opening anything** — which is the entire argument for the factorization.

**Example 2 (why fuel-rich wins).** Compare hydrogen/oxygen at the stoichiometric ratio $r = 8$ and at $r = 4$.

*What is in the exhaust.* Per kilogram of hydrogen:

**At $r = 8$:** exactly enough oxygen. $0.496$ kmol H₂ + $0.248$ kmol O₂ → $0.496$ kmol H₂O in $9$ kg, so $\mathcal{M} = 9/0.496 = 18.1$ — reduced to about 16.6 by dissociation, which also caps $T_0$ near 3470 K.

**At $r = 4$:** only half the oxygen. $0.248$ kmol O₂ burns $0.248$ kmol H₂, leaving $0.248$ kmol of H₂ unburned. The exhaust is $0.248$ kmol H₂O plus $0.248$ kmol H₂ — $0.496$ kmol in $5$ kg, so $\mathcal{M} = 10.1$.

**Half the exhaust, by mole count, is unburned hydrogen** — and hydrogen has a molecular weight of 2.

*The performance trade.*

$$c^*\propto\sqrt{\frac{T_0}{\mathcal{M}}}: \qquad r = 8:\ \sqrt{\frac{3468}{16.6}} = 14.5, \qquad r = 4:\ \sqrt{\frac{2977}{10.0}} = 17.3.$$

$$\frac{c^*(r = 4)}{c^*(r = 8)} = \frac{17.3}{14.5} = 1.19.$$

**A 19% gain in $c^*$, and 15% in $I_{sp}$** (451 s against 391 s), from burning *less* of the fuel.

*The accounting, stated plainly.* Going from $r = 8$ to $r = 4$:

**Temperature falls 14%** — from 3468 to 2977 K. That costs $\sqrt{0.86} = 0.927$, a 7% loss.

**Molecular weight falls 40%** — from 16.6 to 10.0. That gains $\sqrt{1/0.60} = 1.29$, a 29% win.

**The molecular-weight gain is four times the temperature loss**, because $\mathcal{M}$ responds much more strongly to the mixture ratio than $T_0$ does — the temperature curve has flattened by $r = 6$ while the molecular weight is still climbing linearly.

*So why do real engines run at $r = 5.5$–$6.0$?* **Density.** Liquid hydrogen is 71 kg/m³ — sixteen times lighter than liquid oxygen — so a hydrogen-rich mixture is extraordinarily bulky:

| $r$ | $I_{sp}$ | $\rho_{\rm bulk}$ | Tank volume for 100 t (m³) |
|---|---|---|---|
| 4.0 | 451 s | 284 kg/m³ | 352 |
| 5.5 | 445 s | 344 kg/m³ | 291 |
| 6.0 | 424 s | 362 kg/m³ | 276 |

**Going from $r = 4$ to $r = 5.5$ costs 1.3% of $I_{sp}$ and saves 17% of the tank volume** — and tank mass scales with volume, so it saves structural mass, which by [3.1](03-01-rocket-equation.md) is charged at the full exponential rate.

**The optimum for the *vehicle* is therefore richer in oxygen than the optimum for the *engine***, and where exactly depends on the stage. Upper stages, where $I_{sp}$ dominates, run leaner ($r\approx5.5$: the RL10 is at 5.5); boosters, where volume and thrust matter more, run richer ($r\approx6.0$: the SSME ran at 6.0).

*And a related trick worth naming.* Many engines run their **turbopump gas generator** extremely fuel-rich — $r$ below 1 — not for $I_{sp}$ but to keep the turbine inlet temperature survivable, exactly as an air-breather dilutes its combustor ([2.3](02-03-combustion-for-propulsion.md)). **The same physics, used for cooling rather than performance.**

## Watch out

- **You might read the "seconds" of $I_{sp}$ as a duration.** They are an artefact of dividing by weight. The physical quantity is $v_e = g_0I_{sp}$.
- **You might use local gravity in $g_0$.** It is a defined constant, 9.80665 m/s², everywhere.
- **You might quote one $I_{sp}$ for an engine.** It depends on ambient pressure; always state sea level or vacuum.
- **You might expect stoichiometric to be optimal.** It maximizes temperature and molecular weight together, and the second wins. Every high-performance chemical engine runs fuel-rich.
- **You might compare an air-breather's $I_{sp}$ with a rocket's.** The air-breather counts only fuel; the rocket counts fuel plus oxidizer.
- **You might ignore density.** For a launch vehicle, bulk propellant density is nearly as important as $I_{sp}$, which is why kerolox first stages persist despite hydrolox's 30% $I_{sp}$ advantage.
- **You might assume higher $I_{sp}$ always wins.** It wins on $\Delta v$ per kilogram of propellant; it can lose on $\Delta v$ per kilogram of *vehicle* once tanks are counted.

## One-liner

> $I_{sp} = F/(\dot mg_0)$ is exhaust velocity in disguise and factors exactly as $g_0I_{sp} = c^*C_F$ — propellant times nozzle — and because $c^*\propto\sqrt{T_0/\mathcal{M}}$ while burning stoichiometrically maximizes both, the best mixture ratio is fuel-rich: half the exhaust of a good hydrolox engine is unburned hydrogen, carried along purely because it is light.

## Problems

**P1 (🟢)** An engine produces $F = 890$ kN with $\dot m = 285$ kg/s in vacuum. (a) Find $v_e$ and $I_{sp}$. (b) It carries 400 t of propellant; find the total impulse and the burn time. (c) Applied to a 500 t vehicle with 80 t dry mass, find the ideal $\Delta v$. (d) Identify the likely propellant from the $I_{sp}$.

**P2 (🟡)** A test gives $p_0 = 9.0$ MPa, $A_t = 0.055$ m², $\dot m = 210$ kg/s, and vacuum thrust $F = 730$ kN. (a) Find $c^*$ and $C_F$. (b) Find $I_{sp}$ two ways. (c) The theoretical $c^*$ for this propellant is 2380 m/s and the theoretical vacuum $C_F$ for this nozzle is 1.86. Find $\eta_{c^*}$ and $\eta_{C_F}$. (d) Say which subsystem is underperforming and what you would check first.

**P3 (🔴)** For LH₂/LOX at chamber pressure 7 MPa and $\varepsilon = 40$, the equilibrium data are:

| $r$ | $T_0$ (K) | $\mathcal{M}$ | $\gamma$ |
|---|---|---|---|
| 4.0 | 2977 | 10.0 | 1.24 |
| 5.5 | 3330 | 12.5 | 1.225 |
| 6.0 | 3396 | 13.3 | 1.22 |

(a) Compute $R$, $\Gamma$, and $c^*$ for each. (b) Compute the bulk propellant density for each, given $\rho_{\mathrm{LH_2}} = 71$ and $\rho_{\mathrm{LOX}} = 1141$ kg/m³. (c) An upper stage carries 25 t of propellant. Estimate its tank volume for each ratio, and — using a tank mass of 12 kg per m³ of volume — the tank mass. (d) The stage has 3 t of other dry mass and must deliver $\Delta v = 4.5$ km/s. Taking $C_F = 1.85$ for all three, find the payload for each and recommend a mixture ratio.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_e = \frac{F}{\dot m} = \frac{890{,}000}{285} = 3122.8\ \mathrm{m/s}, \qquad I_{sp} = \frac{3122.8}{9.80665} = 318.4\ \mathrm{s}.$$

(b) $$I = v_em_p = 3122.8\left(400{,}000\right) = 1.249\times10^9\ \mathrm{N\cdot s},$$

$$t_{\rm burn} = \frac{400{,}000}{285} = 1404\ \mathrm{s}.$$

*(Or from $I = Ft$: $890{,}000(1404) = 1.249\times10^9$ N·s ✓)*

(c) The vehicle's 500 t comprises 400 t of propellant, 80 t of dry mass, and 20 t of payload, so the final mass is $m_f = 500-400 = 100$ t:

$$MR = \frac{500}{100} = 5.00, \qquad \Delta v = 3122.8\ln(5.00) = 3122.8(1.60944) = 5026\ \mathrm{m/s}.$$

(d) **$I_{sp} = 318$ s in vacuum places this in the kerolox or storable range.** A vacuum kerolox engine reaches 340–360 s, so 318 s suggests either a sea-level-optimized kerolox nozzle or a storable hypergolic propellant (N₂O₄/MMH, 310–330 s). **Given the 890 kN thrust and 400 t propellant load, a first-stage kerolox engine is much the likelier.**

**P2** (a) $$c^* = \frac{p_0A_t}{\dot m} = \frac{9.0\times10^6(0.055)}{210} = \frac{495{,}000}{210} = 2357.1\ \mathrm{m/s},$$

$$C_F = \frac{F}{p_0A_t} = \frac{730{,}000}{495{,}000} = 1.4747.$$

(b) *Route 1:* $v_e = c^*C_F = 2357.1(1.4747) = 3476.2$ m/s, $I_{sp} = 354.5$ s.

*Route 2:* $v_e = F/\dot m = 730{,}000/210 = 3476.2$ m/s, $I_{sp} = 354.5$ s ✓

(c) $$\eta_{c^*} = \frac{2357.1}{2380} = 0.9904, \qquad \eta_{C_F} = \frac{1.4747}{1.86} = 0.7929.$$

(d) **The nozzle is the problem, badly.** A 99.0% $c^*$ efficiency is excellent — the combustion is essentially complete and well mixed. A 79.3% $C_F$ efficiency is catastrophic; a healthy bell nozzle achieves 96–99%.

*What to check first, in order:*

**Flow separation.** A 21% $C_F$ shortfall is far too large for divergence and friction losses (which together account for 2–4%). The signature of separation is exactly this: the nozzle behaves as though it were much shorter than it is. **If the test was run at sea level with a vacuum-area-ratio nozzle, this is almost certainly the answer** — and the fix is to test in an altitude chamber, not to redesign anything.

**Nozzle geometry.** Confirm the area ratio actually built matches the one assumed in the theoretical $C_F$. A throat eroded oversize by even a few percent moves $C_F$ substantially and also depresses $c^*$ — but $c^*$ is fine here, which argues against throat erosion.

**Instrumentation.** A 21% discrepancy is large enough to suspect the thrust measurement itself: check the load cell calibration and whether propellant-line and gimbal restraints are carrying part of the load.

*The diagnostic logic is the point.* **Because $\eta_{c^*}$ and $\eta_{C_F}$ are independent, a fault in one exonerates the other.** Here the chamber is cleared and the entire investigation goes to the nozzle and the test setup — which is a very different (and much cheaper) programme than an injector redesign.

**P3** (a) $$R = \frac{8314}{\mathcal{M}}, \qquad \Gamma = \sqrt\gamma\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}}, \qquad c^* = \frac{\sqrt{RT_0}}{\Gamma}.$$

| $r$ | $R$ (J/kg·K) | $\Gamma$ | $\sqrt{RT_0}$ | $c^*$ (m/s) |
|---|---|---|---|---|
| 4.0 | 831.4 | 0.6562 | 1573.2 | 2398 |
| 5.5 | 665.1 | 0.6533 | 1488.2 | 2278 |
| 6.0 | 625.1 | 0.6524 | 1457.0 | 2233 |

(b) $$\rho_{\rm bulk} = \frac{1+r}{1/71+r/1141}.$$

| $r$ | $1/71$ | $r/1141$ | sum | $\rho_{\rm bulk}$ |
|---|---|---|---|---|
| 4.0 | 0.014085 | 0.003506 | 0.017591 | **284.2** kg/m³ |
| 5.5 | 0.014085 | 0.004820 | 0.018905 | **343.8** kg/m³ |
| 6.0 | 0.014085 | 0.005259 | 0.019344 | **361.9** kg/m³ |

(c) $$V_{\rm tank} = \frac{25{,}000}{\rho_{\rm bulk}}, \qquad m_{\rm tank} = 12\,V_{\rm tank}.$$

| $r$ | $V_{\rm tank}$ (m³) | $m_{\rm tank}$ (kg) |
|---|---|---|
| 4.0 | 87.95 | 1055 |
| 5.5 | 72.71 | 873 |
| 6.0 | 69.08 | 829 |

(d) $$v_e = c^*C_F, \qquad m_f = 3000+m_{\rm tank}+m_L, \qquad m_0 = m_f+25{,}000,$$

$$\Delta v = v_e\ln\frac{m_0}{m_f} = 4500 \quad\Longrightarrow\quad m_f = \frac{25{,}000}{e^{4500/v_e}-1}.$$

| $r$ | $c^*$ | $v_e = 1.85c^*$ | $I_{sp}$ | $e^{4500/v_e}$ | $m_f$ (kg) | dry + tank (kg) | $m_L$ (kg) |
|---|---|---|---|---|---|---|---|
| 4.0 | 2398 | 4435 | 452 s | 2.7581 | 14,220 | 4055 | **10,164** |
| 5.5 | 2278 | 4214 | 430 s | 2.9091 | 13,095 | 3873 | **9223** |
| 6.0 | 2233 | 4132 | 421 s | 2.9717 | 12,679 | 3829 | **8850** |

*(Working the $r = 4$ row: $4500/4435 = 1.01466$; $e^{1.01466} = 2.7581$; $m_f = 25{,}000/1.7581 = 14{,}220$ kg; dry plus tank $= 3000+1055 = 4055$ kg; payload $= 14{,}220-4055 = 10{,}164$ kg.)*

*The recommendation.* **$r = 4.0$, for this stage.**

The reasoning, and the numbers matter:

**The $I_{sp}$ advantage is decisive at this $\Delta v$.** 452 s against 422 s is 7%, and by the rocket equation a 7% gain in $v_e$ at $\Delta v/v_e\approx1$ is worth roughly 7% in the exponent — which here translates to about 1300 kg of extra payload, a 15% gain.

**The tank penalty is small.** The bulkier propellant costs 226 kg of extra tank (1055 against 829), which is only a fifth of the payload gained.

**Because this is an upper stage.** The tank-mass penalty scales with propellant *volume*, and 25 t is a modest load; on a first stage carrying 400 t, the same density difference would cost 3.6 t of tank, and the balance shifts.

*The general rule this illustrates.* **$I_{sp}$ dominates where the mass ratio is large and the propellant load is small — upper stages and in-space stages. Density dominates where the load is large and the $\Delta v$ per stage is modest — boosters and first stages.**

**Which is exactly what the industry does**: hydrolox upper stages (Centaur, DCSS, the RL10 at $r = 5.5$), and kerolox or methalox first stages, whose bulk densities of 1030 and 830 kg/m³ dwarf hydrolox's 340 despite 25% less $I_{sp}$.

*One caveat on this analysis.* The tank-mass model, 12 kg/m³, is crude and ignores the fact that **hydrogen tanks need insulation and have worse mass-per-volume than oxygen tanks.** A more careful model charges hydrogen volume more heavily, which pushes the optimum toward $r = 5$ — which is roughly where real hydrolox upper stages sit. **The direction of the answer is robust; the exact optimum needs a better tank model.**

</details>

## Flashback

**From Lesson 3.1 (The rocket equation):** A stage has $I_{sp} = 340$ s, $\varepsilon = 0.09$, and must deliver $\Delta v = 5.5$ km/s. (a) Find $v_e$ and the required mass ratio. (b) Find the payload fraction. (c) Find the maximum $\Delta v$ this stage could ever deliver. (d) If $I_{sp}$ rose to 380 s, find the new payload fraction.

<details>
<summary>Solution</summary>

(a) $$v_e = 9.80665(340) = 3334.3\ \mathrm{m/s}, \qquad MR = e^{5500/3334.3} = e^{1.64952} = 5.2046.$$

(b) $$\lambda = \frac{1/MR-\varepsilon}{1-\varepsilon} = \frac{0.19214-0.09}{0.91} = \frac{0.10214}{0.91} = 0.1122.$$

(c) $$MR_{\max} = \frac{1}{0.09} = 11.111, \qquad \Delta v_{\max} = 3334.3\ln(11.111) = 3334.3(2.40795) = 8029\ \mathrm{m/s}.$$

(d) $$v_e = 9.80665(380) = 3726.5\ \mathrm{m/s}, \qquad MR = e^{5500/3726.5} = e^{1.47591} = 4.3750,$$

$$\lambda = \frac{0.22858-0.09}{0.91} = \frac{0.13859}{0.91} = 0.1523.$$

**A 12% increase in $I_{sp}$ bought a 36% increase in payload fraction.**

*The bridge to this lesson.* That leverage — 12% in, 36% out — is why $I_{sp}$ is the number rocket engineers fight over, and it is what makes the fuel-rich mixture ratio worth understanding.

**The amplification comes from the exponential.** $\lambda$ depends on $1/MR = e^{-\Delta v/v_e}$, so

$$\frac{d\lambda}{\lambda}\approx\frac{1}{MR\lambda\left(1-\varepsilon\right)}\cdot\frac{\Delta v}{v_e}\cdot\frac{dv_e}{v_e},$$

and the factor $\Delta v/v_e$ — 1.65 here — multiplies the gain, while the small $\lambda$ in the denominator multiplies it again. **The closer a stage sits to its wall, the more violently it responds to $I_{sp}$.**

*Which is why Example 2's 15% mixture-ratio gain is not a marginal improvement.* On this stage it would be worth roughly 45% more payload — from nothing more than deciding to burn less of the fuel.

</details>

## Connections

- **Backward:** the $c^*$/$C_F$ split is [1.4](01-04-nozzle-performance-cf-cstar.md)'s; the $c^*\propto\sqrt{T_0/\mathcal{M}}$ scaling is [1.2](01-02-compressible-flow-nozzles.md)'s; the rocket equation that makes $I_{sp}$ so valuable is [3.1](03-01-rocket-equation.md)'s; the stoichiometry is [2.3](02-03-combustion-for-propulsion.md)'s.
- **Forward:** [3.4](03-04-chemical-rockets-liquids-solids.md) compares real propellant combinations and architectures; [4.1](04-01-electric-propulsion.md) and [4.2](04-02-nuclear-thermal-advanced.md) escape the chemical $I_{sp}$ ceiling by abandoning combustion.
- **Sideways:** "maximize $\sqrt{T/\mathcal{M}}$, not $T$" is the same optimization structure as maximizing power rather than voltage in a source with internal resistance, or maximizing throughput rather than speed in a queueing system: **the naive objective and the real one diverge because a second variable moves with the first**, and identifying that second variable is usually the whole of the insight.

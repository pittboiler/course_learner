# Propulsion · Lesson 1.3: Nozzle operating regimes — under- and over-expansion

> ⏱ ~15 min · Module 1: Thrust and nozzles · Builds on: [1.2 Compressible flow for nozzles](01-02-compressible-flow-nozzles.md) · Unlocks: [1.4 Nozzle performance: thrust coefficient and $c^*$](01-04-nozzle-performance-cf-cstar.md)

## Why this matters

A nozzle has one area ratio and an aircraft or launch vehicle flies through a hundredfold range of ambient pressure. **The nozzle is therefore wrong almost all the time**, and this lesson is about how wrong, in which direction, and what it costs.

The stakes are not academic. Over-expand a nozzle too far and the flow **separates from the bell**, producing side loads that have historically destroyed engines during startup. Under-expand it and you leave thrust on the table. Choosing the area ratio is the single most consequential decision in nozzle design, and it is a compromise over a trajectory rather than an optimum at a point.

**You can also read a nozzle's [operating regime](../reference.md#nozzle-operating-regimes) from its plume**, which is why the shock diamonds in a launch video are worth knowing how to interpret.

## The idea

**The design condition is $p_e = p_a$, and it happens at exactly one altitude.** A nozzle's exit pressure is fixed by its area ratio and chamber pressure alone ([1.2](01-02-compressible-flow-nozzles.md)); the ambient pressure is fixed by where you are. They match once.

**Below that altitude the nozzle is over-expanded.** The gas has been expanded to a pressure lower than ambient, so the atmosphere crushes the plume inward. The pressure-thrust term $(p_e-p_a)A_e$ is **negative** — you paid for a large nozzle and it is pushing backwards.

**Above it the nozzle is under-expanded.** The gas leaves at higher-than-ambient pressure and continues expanding outside, doing no useful work on the nozzle wall. The pressure term is positive but the expansion is wasted; a longer nozzle would have captured it.

**The plume tells you which.** Over-expansion turns the flow inward through **oblique shocks** from the lip, which cross, reflect, and form the repeating diamond pattern. Under-expansion turns it outward through **expansion fans**, giving a ballooning plume that later re-compresses through a barrel shock and a Mach disc.

**And there is a hard limit on over-expansion.** The lip shocks are an adverse pressure gradient acting on the nozzle's own boundary layer. Push $p_e$ below roughly $0.4p_a$ and the boundary layer separates *inside* the bell — the shock system moves up into the nozzle. **The separation is rarely symmetric, and the resulting side load is a structural, not a performance, problem.**

**So the design is a trajectory compromise.** A first stage sizes its nozzle to stay above the separation limit at sea level and accepts under-expansion later; an upper stage, which never sees an atmosphere, uses the biggest bell it can carry.

## The formal version

**Design (perfect expansion).**

$$\boxed{\;p_e = p_a: \qquad F = \dot mu_e, \qquad \text{maximum thrust for that }A_e/A_t.\;}$$

**The exit pressure ratio is set by geometry alone:**

$$\frac{p_e}{p_0} = \left(1+\frac{\gamma-1}{2}M_e^2\right)^{-\frac{\gamma}{\gamma-1}}, \qquad M_e\ \text{from}\ \frac{A_e}{A_t}.$$

For $\gamma = 1.20$ (representative rocket exhaust):

| $A_e/A_t$ | 4 | 8 | 10 | 16 | 40 | 165 |
|---|---|---|---|---|---|---|
| $M_e$ | 2.62 | 3.12 | 3.28 | 3.60 | 4.24 | 5.26 |
| $p_e/p_0$ | 0.0435 | 0.0169 | 0.0125 | 0.00677 | 0.00209 | 0.000352 |

**The three regimes.**

| Regime | Condition | Pressure thrust | Plume | External waves |
|---|---|---|---|---|
| **Over-expanded** | $p_e<p_a$ | negative | pinches inward | oblique shocks from the lip, then diamonds |
| **Design** | $p_e = p_a$ | zero | parallel | none |
| **Under-expanded** | $p_e>p_a$ | positive | balloons outward | expansion fan, then barrel shock and Mach disc |

**Summerfield separation criterion.** Flow separates from the nozzle wall when

$$\boxed{\;\frac{p_e}{p_a}\lesssim0.4.\;}$$

At sea level that is $p_e\lesssim40$ kPa. **The criterion is empirical and scattered** (values from 0.25 to 0.45 appear in the literature, depending on wall contour and boundary-layer state), but it is the working rule.

**Separation is not automatically catastrophic — asymmetry is.** A symmetric separation merely truncates the effective nozzle, and thrust is close to what a shorter nozzle would give. An asymmetric or unsteady one produces a lateral force on the bell:

$$F_{\rm side}\sim\left(p_a-p_e\right)A_{\rm sep}\times\left(\text{asymmetry fraction}\right),$$

which for a large first-stage engine can reach tens of kilonewtons applied to structure sized for none.

**Thrust versus altitude.** With $\dot m$, $u_e$, $p_e$, and $A_e$ all fixed by the engine,

$$\boxed{\;F(h) = \dot mu_e+p_eA_e-p_a(h)A_e,\;}$$

**a straight line in $p_a$.** The whole altitude dependence of a rocket engine's thrust is one linear term.

**Altitude compensation**, for completeness: dual-bell nozzles (two contours, the flow detaching from the first at altitude), extendible bells (deployed after staging — flown on the RL10B-2), and aerospikes (the plume boundary itself adapts). Only extendible bells are in operational use.

## Picture

![A three-panel figure. Left: three nozzle plumes side by side. The over-expanded one shows the exhaust pinching inward just past the lip with a pair of oblique shocks crossing on the axis and reflecting into a repeating diamond pattern; the perfectly expanded one shows a straight parallel plume; the under-expanded one shows the flow fanning outward through an expansion fan at the lip, then curving back into a barrel shock with a flat Mach disc across the axis. Each is labelled with its pressure condition. Middle: a nozzle bell in cross-section under severe over-expansion, with the flow attached along the first part of the wall and then separating, the separation point marked on each side at slightly different axial stations, a recirculating region drawn between the separated shear layer and the wall, and a large lateral arrow labelled side load, with the annotation p sub e below 0.4 p sub a. Right: thrust plotted against altitude for two nozzles of the same engine, one with a small area ratio and one with a large one; both curves rise and flatten, the small-ratio curve starting higher at sea level and ending lower in vacuum, the large-ratio curve starting much lower and ending higher, crossing at about ten kilometres, with the region below three kilometres shaded for the large nozzle and marked flow separation, do not operate here.](assets/01-03-fig1.svg)

Left: how to read a plume.

Middle: the failure mode that sets the design limit, and it is structural rather than thermodynamic.

Right: the trade. Neither nozzle is better; they are better at different altitudes, and the crossing point is where the design argument happens.

## Worked examples

**Example 1 (a first-stage nozzle through its trajectory).** An engine has chamber conditions $p_0 = 9.7$ MPa and $T_0 = 3500$ K, exhaust with $\gamma = 1.20$ and $R = 378$ J/(kg·K), throat area $A_t = 0.060$ m², and expansion ratio $A_e/A_t = 16$.

*Fixed quantities from the nozzle.* From the area–Mach relation at $\gamma = 1.20$:

$$M_e = 3.604, \qquad 1+0.1M_e^2 = 2.2991,$$

$$p_e = \frac{9.7\times10^6}{(2.2991)^6} = 65.67\ \mathrm{kPa}, \qquad T_e = \frac{3500}{2.2991} = 1522\ \mathrm{K},$$

$$u_e = M_e\sqrt{\gamma RT_e} = 3.604\sqrt{1.2(378)(1522)} = 3.604(831.0) = 2995\ \mathrm{m/s}, \qquad A_e = 16(0.060) = 0.960\ \mathrm{m^2}.$$

*Mass flow* (choked, with $\gamma = 1.20$ the coefficient is $0.03336$ rather than air's $0.0404$):

$$\dot m = 0.03336\frac{p_0A_t}{\sqrt{T_0}} = 0.03336\frac{9.7\times10^6(0.060)}{\sqrt{3500}} = 328.2\ \mathrm{kg/s}.$$

*Momentum thrust:* $\dot mu_e = 328.2(2995) = 983.0$ kN, at every altitude.

*The trajectory.*

| $h$ | $p_a$ (kPa) | $p_e/p_a$ | Regime | $F$ (kN) | $I_{sp}$ (s) |
|---|---|---|---|---|---|
| 0 km | 101.3 | 0.648 | over-expanded | 948.6 | 294.8 |
| 5 km | 54.0 | 1.215 | under-expanded | 994.0 | 308.9 |
| 10 km | 26.5 | 2.478 | under-expanded | 1020.5 | 317.1 |
| 20 km | 5.53 | 11.88 | under-expanded | 1040.6 | 323.4 |
| vacuum | 0 | — | under-expanded | 1045.9 | 325.0 |

*Reading it.* Four things:

**Design altitude is where $p_a = 65.67$ kPa — about 3.6 km.** Below that the engine is over-expanded, above it under-expanded, and it is perfectly expanded for a fraction of a second.

**Thrust rises 10% from sea level to vacuum**, and $I_{sp}$ rises the same 10%, from 295 s to 325 s. **These are realistic kerolox numbers.**

**The sea-level over-expansion is mild and safe.** $p_e/p_a = 0.648$ is comfortably above the 0.4 separation threshold, which is exactly how a first-stage nozzle is sized.

**Most of the gain arrives early.** Of the 97 kN available between sea level and vacuum, 72 kN is collected by 10 km — because $p_a$ falls exponentially and the thrust is linear in $p_a$. **The engine has essentially reached its vacuum performance before the vehicle is out of the troposphere.**

**Example 2 (the same engine with a vacuum bell, and why it must not be lit at sea level).** Keep everything but change the expansion ratio to $A_e/A_t = 60$.

*New exit conditions.*

$$M_e = 4.525, \qquad 1+0.1M_e^2 = 3.0471, \qquad p_e = \frac{9.7\times10^6}{(3.0471)^6} = 12.12\ \mathrm{kPa},$$

$$T_e = \frac{3500}{3.0471} = 1149\ \mathrm{K}, \qquad u_e = 3266\ \mathrm{m/s}, \qquad A_e = 3.60\ \mathrm{m^2}.$$

*The comparison.*

| | $A_e/A_t = 16$ | $A_e/A_t = 60$ |
|---|---|---|
| $u_e$ | 2995 m/s | 3266 m/s ($+9\%$) |
| $A_e$ | 0.96 m² | 3.60 m² ($\times3.75$) |
| $F$, sea level | **948.6 kN** | **750.6 kN** |
| $I_{sp}$, sea level | 294.8 s | 233.2 s |
| $F$, vacuum | 1045.9 kN | 1115.3 kN |
| $I_{sp}$, vacuum | 325.0 s | 346.6 s |
| $p_e/p_a$ at sea level | 0.648 | **0.120** |

*Reading it.*

**In vacuum the big bell wins by 6.6%** — 347 s against 325 s. Over an upper stage's mission that is worth several hundred metres per second of $\Delta v$, which is enormous.

**At sea level it loses by 21%**, and the reason is entirely the pressure term: $(12{,}120-101{,}325)(3.60) = -321$ kN, against $-34$ kN for the small bell.

**And it would not even achieve that**, because $p_e/p_a = 0.120$ is far below the Summerfield threshold of 0.4. **The flow would separate inside the bell**, the shock system would sit somewhere up the divergent section, and the separation would not be symmetric or steady.

*What the separation actually does.* Downstream of the separation point the wall sees roughly ambient pressure instead of the design pressure, so the nozzle behaves like a shorter one — thrust is not as catastrophic as the naive calculation suggests, perhaps 850 kN rather than 750. **But the side load is the real problem.** With, say, 1.5 m² of bell area separated and a 5% axial asymmetry in the separation line,

$$F_{\rm side}\sim\left(101.3-12.1\right)\times10^3\times1.5\times0.05\approx6.7\ \mathrm{kN}$$

applied laterally at the end of a long bell — a bending moment the gimbal actuators were never sized for, oscillating as the separation line wanders.

**This is a well-documented failure mode**, and it is why the largest expansion ratio on a nozzle that must start at sea level is roughly 25 ($p_e/p_a\approx0.36$, right at the edge), while upper-stage nozzles run 60–200.

*The engineering resolutions, in order of how common they are.*

**Two engine variants.** Build the same powerhead with two bells and use each where it belongs. Nearly every launch-vehicle family does this; the Merlin flies at $\varepsilon\approx16$ on the first stage and $\varepsilon\approx165$ on the second.

**Extendible bell.** Carry the vacuum extension stowed and deploy it after staging. The RL10B-2 does exactly this, with a carbon–carbon skirt that translates into place, achieving $\varepsilon = 280$ and $I_{sp} = 465$ s.

**Altitude compensation.** Dual-bell and aerospike nozzles adapt continuously. Aerospikes have been developed repeatedly since the 1960s and have never flown operationally — the cooling problem on the spike and the mass penalty have always exceeded the gain.

## Watch out

- **You might think over-expansion always means separation.** It means separation only below $p_e/p_a\approx0.4$; mild over-expansion is normal and safe.
- **You might read the 0.4 threshold as exact.** It is empirical and scatters between about 0.25 and 0.45 with contour and boundary-layer state.
- **You might think an under-expanded nozzle is wasting the pressure term.** The pressure term is positive and real; what is wasted is the *further* expansion that a longer nozzle would have converted to momentum.
- **You might expect thrust to vary nonlinearly with altitude.** $F$ is exactly linear in $p_a$; it is $p_a(h)$ that is exponential.
- **You might size the nozzle for the design altitude.** Size it for the *trajectory*, weighting where the vehicle spends its impulse, and check the sea-level separation limit.
- **You might use the air constants for exhaust.** With $\gamma = 1.20$ the choked-flow coefficient is $0.0334$, not $0.0404$, and the area–Mach table shifts.
- **You might assume separation is symmetric.** It is not, and the asymmetry — not the thrust loss — is what breaks hardware.

## One-liner

> A nozzle's exit pressure is fixed by its area ratio while ambient pressure is not, so it is over-expanded low down (negative pressure thrust, shock diamonds, and below $p_e/p_a\approx0.4$ a separated flow with side loads that break gimbals) and under-expanded high up (positive pressure thrust, ballooning plume, wasted expansion) — and the design is a trajectory compromise, not a point optimum.

## Problems

**P1 (🟢)** A nozzle has $p_0 = 6.0$ MPa and $p_e/p_0 = 0.0125$ ($A_e/A_t = 10$, $\gamma = 1.2$). (a) Find $p_e$. (b) State the regime at sea level, at 5 km ($p_a = 54.0$ kPa), and at 20 km ($p_a = 5.53$ kPa). (c) At which altitude is it perfectly expanded, given the standard atmosphere ($p = 101.3$, 54.0, 26.5, 12.1, 5.53 kPa at 0, 5, 10, 15, 20 km)? (d) Is it at risk of separation at sea level?

**P2 (🟡)** An engine has $\dot m = 280$ kg/s, $u_e = 3050$ m/s, $A_e = 1.10$ m², and $p_e = 48$ kPa. (a) Write $F(p_a)$ explicitly. (b) Find the thrust at sea level, at 10 km ($p_a = 26.5$ kPa), and in vacuum. (c) Find $I_{sp}$ at each. (d) Sketch (describe) the plume at each of the three conditions.

**P3 (🔴)** A first-stage engine has $p_0 = 10$ MPa, $T_0 = 3500$ K, $\gamma = 1.20$, $R = 378$ J/kg·K, and $A_t = 0.050$ m². The design team must choose $A_e/A_t$ from $\{16,\ 25,\ 40\}$. The relevant exit data are:

| $A_e/A_t$ | $M_e$ | $p_e/p_0$ | $u_e$ (m/s) |
|---|---|---|---|
| 16 | 3.604 | 0.00677 | 2995 |
| 25 | 3.913 | 0.00380 | 3099 |
| 40 | 4.239 | 0.00209 | 3194 |

(a) Find $\dot m$, $p_e$, and $A_e$ for each option. (b) Compute the sea-level and vacuum thrust for each. (c) Check each against the Summerfield criterion at sea level. (d) The stage's impulse is delivered roughly 30% below 5 km, 30% between 5 and 15 km, and 40% above 15 km. Using representative ambient pressures of 75, 25, and 3 kPa for those bands, compute a weighted mean $I_{sp}$ for each option and recommend one.

<details>
<summary>Solutions</summary>

**P1** (a) $$p_e = 0.0125(6.0\times10^6) = 75.0\ \mathrm{kPa}.$$

(b) | Altitude | $p_a$ | $p_e/p_a$ | Regime |
|---|---|---|---|
| Sea level | 101.3 kPa | 0.740 | **over-expanded** |
| 5 km | 54.0 kPa | 1.389 | **under-expanded** |
| 20 km | 5.53 kPa | 13.6 | **strongly under-expanded** |

(c) Perfect expansion requires $p_a = 75.0$ kPa, which lies between the sea-level 101.3 kPa and the 5 km value of 54.0 kPa. Interpolating logarithmically,

$$\frac{h}{5\ \mathrm{km}} = \frac{\ln(101.3/75.0)}{\ln(101.3/54.0)} = \frac{0.3010}{0.6289} = 0.4786 \quad\Longrightarrow\quad h\approx2.4\ \mathrm{km}.$$

(d) $$\frac{p_e}{p_a} = 0.740 \gg 0.4.$$

**No risk.** This nozzle is only mildly over-expanded at sea level, with a large margin to the separation threshold. If anything it is *under*-expanded for most of the flight, which suggests the area ratio could be increased.

**P2** (a) $$F(p_a) = \dot mu_e+\left(p_e-p_a\right)A_e = 280(3050)+\left(48{,}000-p_a\right)(1.10)$$
$$= 854{,}000+52{,}800-1.10\,p_a = 906{,}800-1.10\,p_a \quad\text{(N, with }p_a\text{ in Pa)}.$$

(b) | Condition | $p_a$ (Pa) | $F$ |
|---|---|---|
| Sea level | 101,325 | $906{,}800-111{,}458 = 795.3$ kN |
| 10 km | 26,500 | $906{,}800-29{,}150 = 877.7$ kN |
| Vacuum | 0 | $906.8$ kN |

(c) $$I_{sp} = \frac{F}{\dot mg_0} = \frac{F}{280(9.80665)} = \frac{F}{2745.9}.$$

| Condition | $I_{sp}$ |
|---|---|
| Sea level | 289.7 s |
| 10 km | 319.6 s |
| Vacuum | 330.2 s |

(d) *Plume descriptions.*

**Sea level** ($p_e/p_a = 0.474$): **over-expanded**. The plume necks inward immediately past the lip as a pair of oblique shocks turns the flow toward the axis; these cross, reflect off the plume boundary as expansion fans, and set up the repeating **shock-diamond** pattern, visible as bright nodes spaced a metre or so apart. The ratio 0.474 is above the separation threshold, so the flow stays attached inside the bell — but not by much, and startup transients would be watched carefully.

**10 km** ($p_e/p_a = 1.81$): **under-expanded**. The plume now spreads outward through a Prandtl–Meyer fan at the lip. Diamonds are still present but weaker and more widely spaced, and the plume is visibly wider than the nozzle exit.

**Vacuum** ($p_a = 0$): **infinitely under-expanded**. There is no ambient pressure to turn the flow back, so the plume expands continuously and without limit, spreading into a broad, faint cone with no shock structure at all. **The characteristic tight bright plume of an atmospheric launch simply does not exist in vacuum** — which is why upper-stage burns look so different on camera.

**P3** (a) With $\gamma = 1.20$ the choked-flow coefficient is $0.03336$:

$$\dot m = 0.03336\frac{(10\times10^6)(0.050)}{\sqrt{3500}} = 0.03336\frac{500{,}000}{59.16} = 281.9\ \mathrm{kg/s},$$

the same for all three options — **the throat sets the mass flow, and the throat is unchanged.**

| $A_e/A_t$ | $p_e = (p_e/p_0)p_0$ | $A_e = (A_e/A_t)A_t$ |
|---|---|---|
| 16 | 67.7 kPa | 0.800 m² |
| 25 | 38.0 kPa | 1.250 m² |
| 40 | 20.9 kPa | 2.000 m² |

(b) $$F = \dot mu_e+\left(p_e-p_a\right)A_e.$$

| $A_e/A_t$ | $\dot mu_e$ (kN) | $F_{SL}$ (kN) | $F_{\rm vac}$ (kN) |
|---|---|---|---|
| 16 | 844.5 | $844.5+(67.7-101.3)(0.800) = 817.6$ | $844.5+54.2 = 898.6$ |
| 25 | 873.7 | $873.7+(38.0-101.3)(1.250) = 794.6$ | $873.7+47.5 = 921.3$ |
| 40 | 900.5 | $900.5+(20.9-101.3)(2.000) = 739.6$ | $900.5+41.8 = 942.2$ |

**The ordering reverses between sea level and vacuum**, which is the whole problem.

(c) $$\frac{p_e}{p_a}\Big|_{SL} = \frac{p_e}{101.3}:$$

| $A_e/A_t$ | $p_e/p_a$ | Verdict |
|---|---|---|
| 16 | 0.668 | **safe** |
| 25 | 0.375 | **marginal — at or just below the threshold** |
| 40 | 0.206 | **separates** |

**Option 40 is eliminated on structural grounds alone.** Option 25 sits right on the empirical boundary, and given the scatter in the criterion (0.25–0.45) it might or might not separate — which in practice means it would need hot-fire testing at sea level before anyone committed to it.

(d) *Weighted mean $I_{sp}$.* Write the thrust in the form that makes the ambient dependence explicit:

$$F(p_a) = F_{\rm vac}-p_aA_e, \qquad I_{sp} = \frac{F}{\dot mg_0} = \frac{F}{281.9(9.80665)} = \frac{F}{2764.5}.$$

With weights $0.30/0.30/0.40$ at $p_a = 75$, $25$, $3$ kPa:

| $A_e/A_t$ | $F_{\rm vac}$ | $F(75)$ | $F(25)$ | $F(3)$ | weighted $F$ | $\bar I_{sp}$ |
|---|---|---|---|---|---|---|
| 16 | 898.6 kN | 838.6 | 878.6 | 896.2 | **873.7 kN** | **316.0 s** |
| 25 | 921.3 kN | 827.5 | 890.0 | 917.5 | **882.3 kN** | **319.1 s** |
| 40 | 942.2 kN | *(separated)* | 892.2 | 936.2 | *(879.8)* | *(318.2)* |

*(Option 40's low-altitude entry is not physical — the flow has separated — so its weighted figure is shown only to make the point that even ignoring separation it does not beat option 25.)*

*The recommendation.* **Option 25, if it can be shown not to separate; otherwise option 16.**

The reasoning:

**The performance gap is small.** 319.1 s against 316.0 s — a 1.0% advantage for the larger bell, worth perhaps 45 m/s of stage $\Delta v$. Real but not decisive.

**The risk gap is not small.** Option 25 sits at $p_e/p_a = 0.375$, inside the scatter band of a criterion that is itself empirical. A separation event during the first seconds of flight is a loss-of-vehicle failure, not a performance shortfall.

**And the mass penalty runs the other way.** Option 25's bell has 56% more surface area than option 16's, so it is heavier and needs more regenerative cooling — and dead mass on a first stage is charged at the full rocket-equation rate ([3.3](03-03-staging-mass-ratio.md)). Once nozzle mass is included, the 0.8% $I_{sp}$ advantage may vanish entirely.

**So the honest recommendation is option 16 unless hot-fire testing clears option 25** — and this is exactly how the decision is made in practice: the analysis narrows it to two, and a sea-level test stand decides.

*A closing observation.* Notice how flat the trade is. Across a 2.5× range of expansion ratio, the trajectory-weighted $I_{sp}$ varies by about 1%. **The area ratio is a decision dominated by constraints — separation, mass, packaging — rather than by optimization.** That is characteristic of nozzle design generally, and it is why the interesting engineering is in the chamber and the turbopump, not the bell.

</details>

## Flashback

**From Lesson 1.2 (Compressible flow for nozzles):** A nozzle with $A_e/A_t = 8$ is fed from $p_0 = 5.0$ MPa, $T_0 = 3200$ K, with $\gamma = 1.20$, $R = 378$ J/(kg·K), and $A_t = 0.035$ m². Take $M_e = 3.122$. (a) Find $p_e$ and $T_e$. (b) Find $u_e$. (c) Find $\dot m$ and $A_e$. (d) Find $V_{\max}$ and the fraction of it achieved.

<details>
<summary>Solution</summary>

(a) $$1+\frac{\gamma-1}{2}M_e^2 = 1+0.1(9.747) = 1.9747.$$

$$p_e = \frac{5.0\times10^6}{(1.9747)^6} = \frac{5.0\times10^6}{59.28} = 84.33\ \mathrm{kPa}, \qquad T_e = \frac{3200}{1.9747} = 1620.5\ \mathrm{K}.$$

(b) $$a_e = \sqrt{1.20(378)(1620.5)} = \sqrt{735{,}059} = 857.4\ \mathrm{m/s}, \qquad u_e = 3.122(857.4) = 2677\ \mathrm{m/s}.$$

(c) $$\dot m = 0.03336\frac{(5.0\times10^6)(0.035)}{\sqrt{3200}} = 0.03336\frac{175{,}000}{56.57} = 103.2\ \mathrm{kg/s},$$

$$A_e = 8(0.035) = 0.280\ \mathrm{m^2}.$$

(d) $$c_p = \frac{\gamma R}{\gamma-1} = \frac{1.20(378)}{0.20} = 2268\ \mathrm{J/(kg\cdot K)},$$

$$V_{\max} = \sqrt{2c_pT_0} = \sqrt{2(2268)(3200)} = \sqrt{14{,}515{,}200} = 3809.9\ \mathrm{m/s},$$

$$\frac{u_e}{V_{\max}} = \frac{2677}{3809.9} = 0.703.$$

*The bridge to this lesson.* Now ask where this nozzle is happy. Its exit pressure is 84.33 kPa, so:

$$\frac{p_e}{p_a}\Big|_{SL} = \frac{84.33}{101.3} = 0.832 \quad\text{— mildly over-expanded, and very safe},$$

and it is perfectly expanded at about **1.6 km**, then under-expanded for the entire rest of the flight.

**This is a nozzle that is too small.** It extracts only 70% of the available energy, and above 2 km it is throwing away pressure thrust that a longer bell would have turned into momentum. Its sea-level thrust is

$$F_{SL} = 103.2(2677)+\left(84{,}330-101{,}325\right)(0.280) = 276{,}266-4759 = 271.5\ \mathrm{kN},$$

against a vacuum value of $276{,}266+23{,}612 = 299.9$ kN — a 10% spread.

**Doubling the area ratio to 16 would raise $u_e$ to about 2860 m/s (a 7% gain) at the cost of a sea-level $p_e/p_a$ near 0.46** — still just above the separation limit, and probably the better design. **That is precisely the trade this lesson formalizes**, and it is why [1.2](01-02-compressible-flow-nozzles.md)'s calculation is never the end of the story.

</details>

## Connections

- **Backward:** the exit conditions come from [1.2](01-02-compressible-flow-nozzles.md); the pressure-thrust term being fought over is [1.1](01-01-thrust-momentum-equation.md)'s; the oblique shocks and expansion fans in the plume are [`aerodynamics` 4.4](../../aerodynamics/lessons/04-04-oblique-shocks-prandtl-meyer.md)'s, and the five internal operating regimes are [`aerodynamics` 4.5](../../aerodynamics/lessons/04-05-quasi-1d-nozzle-flow.md)'s; separation itself is [`aerodynamics` 3.3](../../aerodynamics/lessons/03-03-separation-stall-drag-polar.md)'s.
- **Forward:** [1.4](01-04-nozzle-performance-cf-cstar.md) packages all of this into $C_F$, whose altitude dependence is exactly the pressure term isolated; [3.2](03-02-specific-impulse-rocket-performance.md) turns the $I_{sp}$ spread into mission performance; [3.3](03-03-staging-mass-ratio.md) explains why bell mass is charged so heavily.
- **Sideways:** a nozzle that is optimal at one operating point and poor elsewhere is the propulsion instance of a **fixed-geometry device in a variable environment** — the same problem as a fixed-pitch propeller, a single-speed gearbox, or a laminar-flow airfoil off its design $C_L$ ([`aerodynamics` 3.3](../../aerodynamics/lessons/03-03-separation-stall-drag-polar.md)). The engineering answers are always the same three: accept the compromise, build variants, or add variable geometry.

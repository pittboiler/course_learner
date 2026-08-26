# Power Systems · Lesson 2.4: Transmission-line parameters

> ⏱ ~15 min · Module 2: Transformers and transmission lines · Builds on: [`em-refresher` 3.2](../../em-refresher/lessons/03-02-sources-of-magnetic-field.md), [`em-refresher` 2.1](../../em-refresher/lessons/02-01-capacitance.md) · Unlocks: [2.5 Short and medium-length line models](02-05-short-and-medium-line-models.md), [2.6 The long line and surge impedance](02-06-long-line-surge-impedance.md)

## Why this matters

A transmission line is three aluminium cables in air. Everything electrical about it — its impedance, its charging current, its surge impedance, how much power it can carry — comes from **geometry**: how thick the conductors are and how far apart they hang. This lesson turns that geometry into $R$, $L$ and $C$ per unit length, which the next two lessons assemble into circuit models.

The formulas contain two quantities that look intimidating and are not: **GMR** and **[GMD](../reference.md#geometric-mean-distance-gmd)**, geometric mean radius and geometric mean distance. Both are just averaged distances, and once you see what they average, the logarithms stop being mysterious.

## The idea

**Resistance** is the easy one, with two corrections. Aluminium's resistivity rises with temperature (about 0.4% per °C), and at 60 Hz current crowds toward the conductor surface — the **skin effect** — raising the effective resistance by a few percent. Utilities publish tabulated AC resistance at 25 °C and 50 °C, and you look it up rather than compute it.

**Inductance** comes from flux linkage. Current in a conductor creates flux both *inside* the conductor (linking part of the current) and *outside* it. The internal contribution is handled by a trick: replace the real conductor of radius $r$ by a fictitious hollow one of radius $r' = 0.7788r$ that carries no internal flux but produces the same total inductance. That fictitious radius is the **geometric mean radius**, and for stranded conductors it is tabulated directly.

The external contribution depends on the distance to the return conductors. If the three phases are not equally spaced, each has a different inductance — which would unbalance the line. Two fixes: **transposition** (rotating the phase positions along the route so each occupies each position for a third of the length) makes the *average* inductance equal, and the effective spacing becomes the **geometric mean distance** of the three pairwise separations. Modern lines are often untransposed and the small imbalance accepted, but the GMD formula is still used because it is the right average.

**Capacitance** works identically, with one difference that matters: capacitance depends on the *actual* conductor radius $r$, not on $r'$, because charge sits on the surface and there is no "internal flux" analogue.

**Bundling** — using two, three or four sub-conductors per phase — is the big lever on all three. It raises the effective GMR substantially, which lowers inductance and raises capacitance, and it reduces the surface electric field, which suppresses corona. Every line above about 230 kV is bundled.

## The formal version

**Resistance.**

$$R_{DC} = \frac{\rho\ell}{A}, \qquad R_{AC} = k_{\rm skin}R_{DC}(1+\alpha\Delta T),$$

with $k_{\rm skin}\approx1.02$–1.10 at 60 Hz for typical ACSR, and $\alpha\approx0.004$/°C for aluminium. In practice, read $R$ from the conductor table at the operating temperature.

**Inductance of a three-phase line (transposed).**

$$\boxed{\;L = 2\times10^{-7}\ln\frac{D_m}{D_s}\ \ \mathrm{H/m\ per\ phase},\;}$$

where

- $D_s$ = **geometric mean radius** of the conductor (or bundle), and
- $D_m$ = **geometric mean distance** between phases, $D_m = \sqrt[3]{D_{ab}D_{bc}D_{ca}}$.

*In words: inductance depends only on the logarithm of the ratio of phase spacing to conductor size.* The reactance at 60 Hz is $X_L = 2\pi(60)L$.

Because it is a logarithm, inductance is remarkably **insensitive** to geometry: doubling the spacing raises $X_L$ by only $\ln2/\ln(D_m/D_s)\approx14\%$ for typical values. That is why transmission-line reactance clusters near $0.5\ \Omega$/km regardless of voltage class — you cannot easily engineer it away, and it is the dominant limit on power transfer.

**Geometric mean radius.**

$$D_s = r' = 0.7788r \ \text{(solid round conductor)},$$

tabulated for stranded conductors (e.g. ACSR "Drake": $D_s = 0.0373$ ft). *In words: the radius of an equivalent hollow conductor with no internal flux.*

**Bundled conductors.** For $n$ sub-conductors of GMR $D_s$ on a circle, with bundle spacing $d$:

| Bundle | Equivalent $D_s^b$ |
|---|---|
| 2 | $\sqrt{D_s\,d}$ |
| 3 (triangle) | $\sqrt[3]{D_s\,d^2}$ |
| 4 (square) | $1.091\sqrt[4]{D_s\,d^3}$ |

*In words: bundling raises the effective radius toward the bundle's own size, which is far larger than a single conductor's.* A two-conductor bundle at 18 inches spacing can triple the effective GMR, cutting $X_L$ by 15–20%.

**Capacitance to neutral (transposed).**

$$\boxed{\;C = \frac{2\pi\varepsilon_0}{\ln(D_m/r)}\ \ \mathrm{F/m\ per\ phase},\qquad \varepsilon_0 = 8.854\times10^{-12}\ \mathrm{F/m}.\;}$$

**Note the $r$, not $r'$** — capacitance uses the actual outside radius, because surface charge has no internal analogue. Using $D_s$ here is a standard error worth guarding against.

The shunt susceptance is $B = 2\pi f C$ per unit length, and the **charging current** is

$$I_{\rm chg} = \frac{V_{LN}}{X_C} = V_{LN}\,\omega C\,\ell.$$

**Charging reactive power.** A line *generates* reactive power through its shunt capacitance:

$$Q_{\rm chg} = \frac{V_{LL}^2}{X_C} = V_{LL}^2\,\omega C\,\ell \quad\text{(three-phase, Mvar)}.$$

*In words: an energized line supplies vars just by being energized*, and the amount grows as $V^2$ and with length. For a 500 kV line this is roughly 1 Mvar per kilometre — which is why long EHV lines are switched with **shunt reactors** to absorb their own charging, and why energizing an unloaded long line raises the far-end voltage (the **Ferranti effect** of [2.6](02-06-long-line-surge-impedance.md)).

**Typical values worth recognizing** (60 Hz, per km, per phase):

| Quantity | Overhead line | Underground cable |
|---|---|---|
| $R$ | 0.03–0.15 Ω/km | similar |
| $X_L$ | 0.4–0.5 Ω/km | 0.1–0.2 Ω/km |
| $C$ | 8–12 nF/km | 200–400 nF/km |
| $X/R$ | 3–10 | 1–3 |

**Cables are electrically a different animal.** The conductor is millimetres from the sheath rather than metres from the next phase, so $L$ is small and $C$ is twenty to forty times larger. The consequence is severe: a cable's charging current is so large that at some length the cable is carrying nothing but its own charging current and can deliver no useful power. For a 400 kV cable that critical length is roughly 40–70 km — which is why long AC submarine links are impossible and why HVDC exists.

**Corona.** Above a critical surface gradient (about 21 kV/cm peak in fair weather) air ionizes around the conductor, causing audible noise, radio interference, and power loss that rises sharply in rain. Bundling is the primary defence, since spreading the charge over several sub-conductors lowers the surface field for the same voltage. This — not inductance — is usually the reason a 500 kV line is bundled four ways.

## Picture

![A two-panel figure. Left: a transmission tower cross-section showing three phase conductors at unequal spacings D_ab, D_bc and D_ca, with a note that the geometric mean distance is the cube root of their product, and beneath it a transposition diagram showing the three phases rotating positions over three equal sections of the route. Right: a single conductor and a two-conductor bundle side by side, with the actual radius r marked for capacitance and the geometric mean radius r prime marked for inductance, and the bundle's much larger equivalent GMR indicated, alongside a small table of how bundling changes X_L, C and surface field.](assets/02-04-fig1.svg)

Left: where $D_m$ comes from and why transposition matters. Unequal spacing gives the three phases different inductances; rotating them through all three positions makes the average equal, and that average is the geometric mean of the three separations.

Right: the two radii, and why they differ. Inductance uses $r' = 0.7788r$ because flux penetrates the conductor; capacitance uses $r$ because charge sits on the surface. Bundling raises the effective radius enormously — which lowers reactance, raises capacitance, and, most importantly at EHV, cuts the surface field that causes corona.

## Worked examples

**Example 1 (a complete 345 kV line).** A three-phase 60 Hz line uses ACSR "Drake" conductors ($D_s = 0.0373$ ft, outside radius $r = 0.0462$ ft) in a horizontal configuration with 25 ft between adjacent phases. It is transposed. Find $X_L$, $C$, the charging reactive power for a 200 km line at 345 kV, and the impact of two-conductor bundling at 18 inch spacing.

*Geometric mean distance.* Adjacent spacings 25 ft and 25 ft, outer spacing 50 ft:

$$D_m = \sqrt[3]{(25)(25)(50)} = \sqrt[3]{31{,}250} = 31.50\ \mathrm{ft}.$$

*Inductance.*

$$L = 2\times10^{-7}\ln\frac{31.50}{0.0373} = 2\times10^{-7}\ln(844.5) = 2\times10^{-7}(6.739) = 1.348\times10^{-6}\ \mathrm{H/m},$$

$$X_L = 2\pi(60)(1.348\times10^{-6}) = 5.081\times10^{-4}\ \Omega/\mathrm{m} = 0.508\ \Omega/\mathrm{km}.$$

*Capacitance* — using the **actual** radius:

$$C = \frac{2\pi(8.854\times10^{-12})}{\ln(31.50/0.0462)} = \frac{5.563\times10^{-11}}{\ln(681.8)} = \frac{5.563\times10^{-11}}{6.525} = 8.526\times10^{-12}\ \mathrm{F/m},$$

$$= 8.53\ \mathrm{nF/km}.$$

*Charging reactive power* for 200 km at 345 kV:

$$Q_{\rm chg} = V_{LL}^2\,\omega C\,\ell = (345\times10^{3})^2(2\pi\cdot60)(8.526\times10^{-12})(200{,}000)$$

$$= (1.190\times10^{11})(376.99)(1.705\times10^{-6}) = 76.5\times10^{6}\ \mathrm{var} = 76.5\ \mathrm{Mvar}.$$

**A 200 km line generates 76 Mvar just by being energized** — a substantial amount, comparable to a large capacitor bank, and it must be absorbed by something when the line is lightly loaded.

*With two-conductor bundling* at $d = 18$ in $= 1.5$ ft:

$$D_s^b = \sqrt{(0.0373)(1.5)} = \sqrt{0.05595} = 0.2365\ \mathrm{ft},$$

$$L = 2\times10^{-7}\ln\frac{31.50}{0.2365} = 2\times10^{-7}\ln(133.2) = 2\times10^{-7}(4.892) = 9.784\times10^{-7}\ \mathrm{H/m},$$

$$X_L = 2\pi(60)(9.784\times10^{-7}) = 3.688\times10^{-4}\ \Omega/\mathrm{m} = 0.369\ \Omega/\mathrm{km}.$$

**Bundling cut the reactance by 27%** (0.508 → 0.369 Ω/km), from raising the effective radius by a factor of 6.3. Since power transfer goes as $1/X$, that is a 38% increase in transfer capability from a purely mechanical change — plus the corona benefit, which at 345 kV is usually the deciding argument.

**Example 2 (why long AC cables are impossible).** A 400 kV underground cable has $C = 250$ nF/km and a thermal current rating of 1500 A. Find the length at which the cable's own charging current consumes its entire rating.

*Charging current per kilometre.* Per phase, with $V_{LN} = 400/\sqrt3 = 231$ kV:

$$I_{\rm chg}' = V_{LN}\,\omega C = (231\times10^{3})(376.99)(250\times10^{-9}) = 21.8\ \mathrm{A/km}.$$

*Critical length.* The charging current is distributed along the cable, so at the sending end it reaches its maximum. Taking the simple (uniform) estimate, the sending-end charging current for length $\ell$ is $21.8\ell$ amps, and it equals the rating when

$$21.8\,\ell = 1500 \quad\Longrightarrow\quad \ell = 68.8\ \mathrm{km}.$$

**At about 69 km the cable is full of nothing but its own charging current and can deliver zero real power.**

*The practical limit is shorter still.* Useful capacity falls well before that. At half the critical length (34 km) the charging current is 740 A, and the remaining thermal headroom for load current is $\sqrt{1500^2-740^2} = 1305$ A — a 13% loss of capacity. At 50 km it is 1090 A of charging and only 1030 A of useful current, i.e. **the cable has lost a third of its rating to its own capacitance.**

*The three responses, and why HVDC wins for long links:*

1. **Shunt reactors at both ends** absorb the charging locally. This works and is standard, but reactors must be sized for the full charging, and they cannot fix the *distributed* nature of the problem — the current is largest at the ends and reactors only help there. Intermediate compensation is impossible for a submarine cable.
2. **Lower the voltage**, since charging scales as $V^2$ — but so does transmitted power, so this loses more than it gains.
3. **Use DC.** At zero frequency there is no charging current at all: $\omega C = 0$. The cable carries only real current, and its length limit becomes purely thermal.

That is the whole reason **every long submarine link in the world is HVDC** — the North Sea interconnectors, the NorNed cable, every offshore wind connection beyond about 80 km. The converter stations cost hundreds of millions of dollars, and they are still cheaper than the alternative, which does not exist.

For overhead lines the same physics applies but with $C$ thirty times smaller, so the critical length is thirty times longer — well over 1000 km, beyond where other limits (stability, [4.6](04-06-transient-stability-equal-area.md)) bind first. **The overhead/cable distinction is entirely a capacitance story.**

## Watch out

- **You might use $D_s$ in the capacitance formula.** Inductance uses the GMR $r' = 0.7788r$; capacitance uses the actual radius $r$. The two differ by 28%, which propagates into the surge impedance.
- **You might expect large geometry changes to move the reactance much.** It is logarithmic — doubling the spacing changes $X_L$ by about 14%. Bundling is the only strong lever, and it works by changing the effective radius by a large factor.
- **You might neglect charging on a long or high-voltage line.** It scales as $V^2\ell$, and at 500 kV it approaches 1 Mvar/km. Ignoring it makes the line model wrong and misses the Ferranti effect entirely.
- **You might apply overhead-line intuition to cables.** A cable's capacitance is 20–40× higher and its inductance lower, which changes the surge impedance by an order of magnitude and imposes a hard length limit.
- **You might treat bundling as an inductance measure.** At EHV the primary reason is **corona** — surface gradient — and the reactance reduction is a welcome side effect.

## One-liner

> Line parameters are geometry in a logarithm: inductance from the ratio of phase spacing to the flux-corrected radius $0.7788r$, capacitance from the same spacing over the *actual* radius — and it is capacitance, not inductance, that makes long AC cables impossible.

## Problems

**P1 (🟢)** A single-circuit line has conductors of GMR 0.0244 ft and outside radius 0.0320 ft, spaced 20 ft, 20 ft and 40 ft. (a) Find $D_m$. (b) Find $L$ and $X_L$ per km at 60 Hz. (c) Find $C$ per km. (d) Find the charging Mvar for 150 km at 230 kV.

**P2 (🟡)** A 500 kV line uses a four-conductor bundle, each sub-conductor of GMR 0.0403 ft, arranged on an 18 inch square, with $D_m = 35$ ft. (a) Find the bundle's equivalent GMR. (b) Find $X_L$ per km. (c) Compare with a single conductor of the same GMR. (d) Estimate the percentage increase in power-transfer capability that the bundle provides.

**P3 (🔴)** A 230 kV overhead line ($C = 9$ nF/km, $X_L = 0.48\ \Omega$/km) and a 230 kV cable ($C = 280$ nF/km, $X_L = 0.15\ \Omega$/km) are both 60 km long and rated 800 A. (a) Find the charging current of each. (b) Find the remaining thermal headroom for load current in each. (c) Find the surge impedance $\sqrt{L/C}$ of each and the corresponding surge-impedance loading at 230 kV. (d) Explain, using these numbers, why a utility would use overhead for a 60 km link and what would change at 200 km.

<details>
<summary>Solutions</summary>

**P1** (a) $$D_m = \sqrt[3]{(20)(20)(40)} = \sqrt[3]{16{,}000} = 25.20\ \mathrm{ft}.$$

(b) $$L = 2\times10^{-7}\ln\frac{25.20}{0.0244} = 2\times10^{-7}\ln(1033) = 2\times10^{-7}(6.940) = 1.388\times10^{-6}\ \mathrm{H/m},$$

$$X_L = 2\pi(60)(1.388\times10^{-6}) = 5.233\times10^{-4}\ \Omega/\mathrm{m} = 0.523\ \Omega/\mathrm{km}.$$

(c) $$C = \frac{2\pi(8.854\times10^{-12})}{\ln(25.20/0.0320)} = \frac{5.563\times10^{-11}}{\ln(787.5)} = \frac{5.563\times10^{-11}}{6.669} = 8.342\times10^{-12}\ \mathrm{F/m} = 8.34\ \mathrm{nF/km}.$$

(d) $$Q_{\rm chg} = V_{LL}^2\omega C\ell = (230\times10^{3})^2(376.99)(8.342\times10^{-12})(150{,}000)$$
$$= (5.29\times10^{10})(376.99)(1.251\times10^{-6}) = 25.0\times10^{6} = 25.0\ \mathrm{Mvar}.$$

**P2** (a) Four-conductor square bundle with $d = 1.5$ ft:

$$D_s^b = 1.091\sqrt[4]{D_s\,d^3} = 1.091\sqrt[4]{(0.0403)(3.375)} = 1.091\sqrt[4]{0.1360} = 1.091(0.6072) = 0.6625\ \mathrm{ft}.$$

(b) $$L = 2\times10^{-7}\ln\frac{35}{0.6625} = 2\times10^{-7}\ln(52.83) = 2\times10^{-7}(3.967) = 7.934\times10^{-7}\ \mathrm{H/m},$$
$$X_L = 2\pi(60)(7.934\times10^{-7}) = 2.991\times10^{-4}\ \Omega/\mathrm{m} = 0.299\ \Omega/\mathrm{km}.$$

(c) Single conductor, $D_s = 0.0403$ ft:

$$L = 2\times10^{-7}\ln\frac{35}{0.0403} = 2\times10^{-7}\ln(868.5) = 2\times10^{-7}(6.767) = 1.353\times10^{-6}\ \mathrm{H/m},$$
$$X_L = 0.510\ \Omega/\mathrm{km}.$$

The bundle reduced reactance from 0.510 to 0.299 Ω/km — a **41% reduction**.

(d) Power transfer over a reactive line goes as $P = V_1V_2\sin\delta/X$, so at fixed voltages and angle:

$$\frac{P_{\rm bundle}}{P_{\rm single}} = \frac{X_{\rm single}}{X_{\rm bundle}} = \frac{0.510}{0.299} = 1.706,$$

a **71% increase** in transfer capability.

(And the corona benefit is the reason the bundle is really there: four sub-conductors spread the charge, cutting the surface gradient roughly fourfold and keeping a 500 kV line below the ionization threshold in fair weather. A single conductor at 500 kV would corona continuously.)

**P3** (a) $V_{LN} = 230/\sqrt3 = 132.8$ kV.

*Overhead:*
$$I_{\rm chg} = V_{LN}\omega C\ell = (132{,}800)(376.99)(9\times10^{-9})(60) = 27.0\ \mathrm{A}.$$

*Cable:*
$$I_{\rm chg} = (132{,}800)(376.99)(280\times10^{-9})(60) = 841\ \mathrm{A}.$$

(b) Thermal headroom for load current, $I_{\rm load} = \sqrt{I_{\rm rated}^2-I_{\rm chg}^2}$:

*Overhead:* $\sqrt{800^2-27^2} = \sqrt{640{,}000-729} = 799.5$ A — essentially full rating.

*Cable:* $841 > 800$. **The charging current alone already exceeds the cable's rating.** The cable cannot be energized at 230 kV over 60 km without compensation.

(c) *Overhead:* $L = X_L/\omega = 0.48/376.99 = 1.273\times10^{-3}$ H/km, $C = 9\times10^{-9}$ F/km:

$$Z_c = \sqrt{\frac{L}{C}} = \sqrt{\frac{1.273\times10^{-3}}{9\times10^{-9}}} = \sqrt{141{,}400} = 376\ \Omega,$$
$$\mathrm{SIL} = \frac{V_{LL}^2}{Z_c} = \frac{230^2}{376} = \frac{52{,}900}{376} = 141\ \mathrm{MW}.$$

*Cable:* $L = 0.15/376.99 = 3.979\times10^{-4}$ H/km, $C = 280\times10^{-9}$:

$$Z_c = \sqrt{\frac{3.979\times10^{-4}}{2.80\times10^{-7}}} = \sqrt{1421} = 37.7\ \Omega,$$
$$\mathrm{SIL} = \frac{52{,}900}{37.7} = 1403\ \mathrm{MW}.$$

The cable's surge impedance is **ten times lower** and its SIL ten times higher — cables are naturally "over-compensated," generating far more vars than they consume at any realistic loading.

(d) **At 60 km, overhead wins decisively.** The overhead line loses 0.06% of its rating to charging; the cable cannot even be energized without shunt reactors sized for 841 A, and even with them it operates with essentially no useful capacity margin. Overhead is also perhaps a tenth the capital cost per kilometre.

**At 200 km the picture does not improve for the cable — it collapses.** Charging current scales linearly with length, so the cable's would be $841(200/60) = 2803$ A, three and a half times its rating. No amount of end compensation fixes this, because the charging current is distributed along the cable and reactors only act at the ends; the middle of the cable would still be saturated with charging current.

Meanwhile the overhead line at 200 km carries $27(200/60) = 90$ A of charging against an 800 A rating — 1.3% — and remains entirely practical. Its binding constraint at that length shifts from thermal to **stability and voltage drop** ([2.6](02-06-long-line-surge-impedance.md), [4.6](04-06-transient-stability-equal-area.md)), which are managed with series compensation and reactive support.

**So: overhead for anything long, cable only where overhead is impossible** (urban rights-of-way, water crossings, environmental constraints) — and if the crossing is long *and* impossible to do overhead, the answer is not AC cable at all but HVDC, which removes $\omega C$ from the problem entirely.

</details>

## Flashback

**From Lesson 2.3 (Three-phase transformer connections):** A Δ-Y transformer bank steps 13.8 kV up to 230 kV to feed the line of P1. (a) Give the winding voltages. (b) If each of the three units is 100 MVA with 10% impedance, give the bank's rating and per-unit impedance. (c) State the phase shift.

<details>
<summary>Solution</summary>

(a) LV side is **delta**: winding voltage $= 13.8$ kV.

HV side is **wye**: winding voltage $= 230/\sqrt3 = 132.8$ kV.

(b) $$S_{3\phi} = 3(100) = 300\ \mathrm{MVA},$$

and the per-unit impedance is **10%, unchanged** — the connection factors cancel against the tripled MVA base, as established in [2.3](02-03-three-phase-transformer-connections.md) Example 1.

(c) $30°$, with the **high-voltage (230 kV) side leading** the low-voltage side for positive sequence, under the standard ANSI connection.

*A useful cross-check on scale:* a 300 MVA bank with 10% impedance feeding a line whose SIL is 141 MW (P3c) is well matched — the transformer can supply roughly twice the line's natural loading, which is the usual design relationship. A bank much smaller than the line's SIL would bottleneck it; much larger would be wasted capital and unnecessary fault duty.

</details>

## Connections

- **Backward:** the flux and field integrals behind $L$ and $C$ are [`em-refresher` 3.2](../../em-refresher/lessons/03-02-sources-of-magnetic-field.md) and [2.1](../../em-refresher/lessons/02-01-capacitance.md).
- **Forward:** [2.5](02-05-short-and-medium-line-models.md) lumps these per-km values into circuit models; [2.6](02-06-long-line-surge-impedance.md) keeps them distributed and produces the surge impedance that P3 previewed.
- **Sideways:** the logarithmic dependence on a ratio of radii is the same form as the capacitance of a coaxial cable and as the drag on a slender body in Stokes flow — whenever a field falls as $1/r$ between two scales, the integral produces a logarithm and the answer becomes insensitive to geometry.

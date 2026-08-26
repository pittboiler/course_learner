# Semiconductor Devices · Lesson 2.4: Reverse breakdown

> ⏱ ~15 min · Module 2: The p–n junction · Builds on: [2.1 Junction electrostatics](02-01-junction-electrostatics.md), [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md) · Unlocks: [2.5 Metal–semiconductor and heterojunctions](02-05-metal-semiconductor-heterojunctions.md), [3.6 Short-channel effects and scaling](03-06-short-channel-effects-scaling.md)

## Why this matters

[2.2](02-02-ideal-diode-equation.md) said reverse current saturates at $-I_0$ forever. It does not. Push the reverse voltage far enough and the current rises abruptly and almost vertically — **breakdown** — and where that happens is the single number that sizes every power device ever built.

Breakdown is also the reason [`electronics` 1.4](../../electronics/lessons/01-04-clippers-clampers-zener.md)'s Zener regulator works at all: run a diode *deliberately* in breakdown and it becomes a voltage reference, because the I–V there is nearly vertical. And it is the hard wall behind the scaling story of [3.6](03-06-short-channel-effects-scaling.md): you cannot keep shrinking a transistor without lowering its supply voltage, because the field would break the silicon.

There are two distinct mechanisms with opposite temperature coefficients, and telling them apart from a datasheet curve is a genuinely useful skill.

## The idea

**[Avalanche](../reference.md#avalanche-breakdown).** In a wide, lightly doped junction the depletion region is long enough that a carrier accelerating in the field picks up enough energy between collisions to knock a bound electron out of the lattice — **impact ionization**. Now there are two carriers, each of which accelerates and does it again. The population multiplies geometrically across the depletion width, exactly like a chain reaction, and the current runs away.

The key requirement is *distance*: a carrier needs about a mean free path's worth of acceleration to reach the ionization threshold, so avalanche needs a wide depletion region, which means light doping. And because the ionization coefficient rises steeply with field, the whole thing is well modelled by a single **critical field** $\mathcal{E}_{\rm crit}\approx3\times10^5$ V/cm for silicon: below it, negligible multiplication; above it, runaway.

**Zener (tunneling).** In a very heavily doped junction the depletion region is only a few nanometres wide. Now the bands bend so steeply that a valence-band electron on the $p$-side finds itself at the same *energy* as empty conduction-band states on the $n$-side, separated by a barrier only nanometres thick — and it **tunnels** straight through. No acceleration, no collisions, no chain reaction: just quantum mechanics through a thin triangular barrier.

**How to tell them apart.** Two fingerprints, and the second is the practical one.

*Voltage.* Below about $4E_g/q\approx4.5$ V, breakdown is Zener; above about $6E_g/q\approx6.7$ V it is avalanche; between, both contribute.

*Temperature coefficient.* This is the diagnostic you can measure in a minute:

- **Avalanche has a positive TC.** Heat the lattice, phonon scattering increases, carriers lose energy more often, so they need a *higher* field to reach ionization energy. $V_B$ rises with $T$.
- **Zener has a negative TC.** Heat the lattice, the band gap shrinks slightly, the tunneling barrier gets thinner, tunneling gets easier. $V_B$ falls with $T$.

And a lovely engineering consequence: **near 5–6 V the two mechanisms overlap and their temperature coefficients cancel.** A 5.6 V Zener diode has a near-zero temperature coefficient, which is why that value is standard for voltage references and appears in every parts catalogue.

## The formal version

**Multiplication factor.** Define $M$ as the ratio of output to input carrier current across the depletion region. An empirical form that fits well:

$$M = \frac{1}{1-\left(\dfrac{|V|}{V_B}\right)^m}, \qquad m\approx3\text{–}6,$$

with $M\to\infty$ at $V = -V_B$. *In words: multiplication is modest until you approach breakdown, then diverges.* The measured reverse current is $I = MI_0$.

**Ionization integral.** The exact condition for avalanche is that the multiplication integral reaches unity:

$$\int_0^W\alpha(\mathcal{E}(x))\,dx = 1,$$

where $\alpha$ is the **ionization coefficient** (ionizing collisions per centimetre), itself a steep function of field, $\alpha\approx A\,e^{-B/\mathcal{E}}$. *In words: breakdown occurs when one carrier crossing the depletion region creates, on average, one new pair.* Below that, the chain dies out; above, it diverges.

**The critical-field approximation.** Because $\alpha$ rises so steeply, the integral is dominated by the region near the field peak, and the whole condition collapses to "the peak field reached $\mathcal{E}_{\rm crit}$". Combined with [2.1](02-01-junction-electrostatics.md)'s $\mathcal{E}_{\max} = \sqrt{2qN(V_{bi}-V)/\varepsilon_s}$ for a one-sided junction:

$$\boxed{\;V_B \approx \frac{\varepsilon_s\mathcal{E}_{\rm crit}^2}{2qN_B}\;}$$

where $N_B$ is the **lightly doped side's** doping. *In words: breakdown voltage is inversely proportional to the light-side doping.* Also useful, the depletion width at breakdown:

$$W_B = \frac{2V_B}{\mathcal{E}_{\rm crit}}.$$

Silicon numbers with $\mathcal{E}_{\rm crit} = 3\times10^5$ V/cm:

| $N_B$ (cm$^{-3}$) | $V_B$ (V) | $W$ at breakdown |
|---|---|---|
| $10^{14}$ | 2920 | 195 µm |
| $10^{15}$ | 292 | 19.5 µm |
| $10^{16}$ | 29.2 | 1.95 µm |
| $10^{17}$ | 2.9 | 0.19 µm |

(The last row is below the Zener crossover, so the constant-$\mathcal{E}_{\rm crit}$ model does not apply there — tunneling takes over and the real breakdown is around 5 V.)

A refinement worth knowing: $\mathcal{E}_{\rm crit}$ is itself weakly doping-dependent (higher in more heavily doped material, because the depletion region is shorter and a carrier has less distance to gain energy). Empirically for silicon, $V_B\approx 5.34\times10^{13}N_B^{-3/4}$ V, which gives somewhat different numbers than the constant-field model at the extremes. Use the constant-field version for intuition and the empirical one for design.

**Zener tunneling.** The tunneling probability through a triangular barrier of height $E_g$ and field $\mathcal{E}$ is, from the WKB approximation ([`quantum-mechanics` 2.5](../../quantum-mechanics/lessons/02-05-scattering-barriers-tunneling.md)),

$$T\approx\exp\left(-\frac{4\sqrt{2m^*}E_g^{3/2}}{3q\hbar\mathcal{E}}\right).$$

*In words: tunneling turns on exponentially in $1/\mathcal{E}$, so it is negligible until the field reaches about $10^6$ V/cm and then explodes.* Reaching $10^6$ V/cm needs doping above about $5\times10^{17}$ on both sides, which is exactly the heavily doped regime.

**The power-device trade-off.** A high-voltage diode needs a wide, lightly doped drift region to hold off the field. But that same region has resistance:

$$R_{on}A = \frac{W_B}{q\mu N_B}.$$

Substituting $N_B = \varepsilon_s\mathcal{E}_{\rm crit}^2/(2qV_B)$ and $W_B = 2V_B/\mathcal{E}_{\rm crit}$:

$$\boxed{\;R_{on}A = \frac{4V_B^2}{\varepsilon_s\mu\,\mathcal{E}_{\rm crit}^3}.\;}$$

*In words: on-resistance grows as the square of the breakdown voltage, and falls as the cube of the critical field.* This is the **unipolar silicon limit**, and it is the equation that justified an entire industry. Since $\mathcal{E}_{\rm crit}$ enters *cubed*, a material with ten times silicon's critical field — silicon carbide, gallium nitride — gives a thousandfold lower on-resistance at the same voltage rating. That single exponent is why SiC and GaN power devices exist and why they command a price premium.

**Where breakdown actually happens.** Real junctions break down at edges and corners, not in the flat middle, because field lines crowd where the junction curves. A cylindrical junction edge of radius $r_j$ breaks down at a substantially lower voltage than a plane junction. The countermeasures — **guard rings**, **field plates**, **junction termination extension**, and beveled edges — are a whole sub-discipline, and they exist because the ideal one-dimensional analysis above is an *upper bound* that real geometry does not reach without help.

## Picture

![Two panels. Left: reverse I-V curves showing the flat saturation region and then the sharp near-vertical breakdown knee, drawn for three dopings so the knee moves to lower voltage as doping rises, with the Zener region marked below about 5 volts and avalanche above about 7 volts. Right: two band diagrams side by side under heavy reverse bias — the avalanche case showing a wide depletion region with a carrier accelerating and generating successive pairs in a branching cascade, and the Zener case showing a very narrow, steeply tilted gap with a horizontal arrow for an electron tunneling straight through from valence band to conduction band.](assets/02-04-fig1.svg)

Left: the knee moves left as doping rises, following $V_B\propto1/N_B$. Below about 5 V the mechanism is tunneling and the knee is softer; above about 7 V it is avalanche and the knee is very sharp. The near-vertical breakdown region is what makes a Zener diode a usable voltage reference.

Right: the two mechanisms are genuinely different physics. Avalanche needs *distance* — the cascade needs room to develop, so it happens in wide, lightly doped junctions. Zener needs *thinness* — the tunneling arrow is horizontal, meaning the electron crosses at constant energy, and it can only do that if the barrier is a few nanometres wide, which requires heavy doping on both sides.

## Worked examples

**Example 1 (designing a drift region to a voltage rating).** Design the light side of a silicon $p^+n$ diode to block 600 V, and compute its on-resistance.

*Doping.* From $V_B = \varepsilon_s\mathcal{E}_{\rm crit}^2/(2qN_B)$:

$$N_B = \frac{\varepsilon_s\mathcal{E}_{\rm crit}^2}{2qV_B} = \frac{(1.04\times10^{-12})(3\times10^5)^2}{2(1.602\times10^{-19})(600)} = \frac{(1.04\times10^{-12})(9\times10^{10})}{1.922\times10^{-16}} = \frac{9.36\times10^{-2}}{1.922\times10^{-16}}$$

$$N_B = 4.87\times10^{14}\ \mathrm{cm^{-3}}.$$

*Drift width.*

$$W_B = \frac{2V_B}{\mathcal{E}_{\rm crit}} = \frac{2(600)}{3\times10^5} = 4.0\times10^{-3}\ \mathrm{cm} = 40\ \mu\mathrm{m}.$$

*On-resistance.* At $N_B = 4.87\times10^{14}$ the electron mobility is near its lightly doped value, $\mu_n\approx1350$:

$$R_{on}A = \frac{W_B}{q\mu_nN_B} = \frac{4.0\times10^{-3}}{(1.602\times10^{-19})(1350)(4.87\times10^{14})} = \frac{4.0\times10^{-3}}{0.1053} = 3.80\times10^{-2}\ \Omega\cdot\mathrm{cm^2}.$$

*What that means for a real part.* A device carrying 10 A at a current density of 100 A/cm² needs 0.1 cm² of area, giving

$$R_{on} = \frac{3.80\times10^{-2}}{0.1} = 0.38\ \Omega, \qquad P_{\rm cond} = I^2R = (10)^2(0.38) = 38\ \mathrm{W}.$$

Thirty-eight watts of conduction loss in a 10 A part — which is why 600 V silicon *unipolar* devices are rare, and why real 600 V silicon rectifiers are **bipolar** PIN diodes that flood the drift region with injected carriers (conductivity modulation) to beat this limit, accepting the reverse-recovery penalty of [2.3](02-03-junction-diffusion-capacitance.md) in exchange.

**Example 2 (why SiC won the 600–1700 V market).** Repeat the calculation for 4H-silicon carbide, which has $\mathcal{E}_{\rm crit}\approx2.2\times10^6$ V/cm (about 7.3× silicon), $\varepsilon_s = 9.7\varepsilon_0 = 8.59\times10^{-13}$ F/cm, and $\mu_n\approx900\ \mathrm{cm^2/V\cdot s}$.

*Doping.*

$$N_B = \frac{(8.59\times10^{-13})(2.2\times10^6)^2}{2(1.602\times10^{-19})(600)} = \frac{(8.59\times10^{-13})(4.84\times10^{12})}{1.922\times10^{-16}} = \frac{4.158}{1.922\times10^{-16}} = 2.16\times10^{16}\ \mathrm{cm^{-3}}.$$

**Forty-four times more heavily doped** than silicon for the same rating.

*Drift width.*

$$W_B = \frac{2(600)}{2.2\times10^6} = 5.45\times10^{-4}\ \mathrm{cm} = 5.45\ \mu\mathrm{m}.$$

**Seven times thinner.**

*On-resistance.*

$$R_{on}A = \frac{5.45\times10^{-4}}{(1.602\times10^{-19})(900)(2.16\times10^{16})} = \frac{5.45\times10^{-4}}{3.114} = 1.75\times10^{-4}\ \Omega\cdot\mathrm{cm^2}.$$

*The comparison.*

$$\frac{R_{on}A|_{\rm Si}}{R_{on}A|_{\rm SiC}} = \frac{3.80\times10^{-2}}{1.75\times10^{-4}} = 217.$$

**Two hundred times lower on-resistance at the same blocking voltage.** The same 10 A device now dissipates $38/217 = 0.18$ W instead of 38 W — or, equivalently, needs 1/217 of the die area for the same loss.

*Where the factor comes from.* Track it through $R_{on}A\propto V_B^2/(\varepsilon_s\mu\mathcal{E}_{\rm crit}^3)$: the field ratio cubed is $7.3^3 = 389$, divided by the mobility ratio $1350/900 = 1.5$ and the permittivity ratio $11.7/9.7 = 1.21$, giving $389/(1.5\times1.21) = 214$ ✓. **The critical field, cubed, is doing all the work** — SiC's worse mobility and permittivity barely dent it.

*And why it took thirty years anyway.* The physics was understood in the 1980s; SiC power devices became commercially significant around 2015. The delay was entirely materials: growing SiC boules without micropipe defects, and — the harder problem — passivating the SiC/SiO₂ interface, whose trap density was initially so high that MOSFET channel mobility was a tenth of the bulk value. **The device physics was never the bottleneck; the interface was.** That pattern recurs across the field, and it is why [4.4](04-04-device-fabrication.md) exists.

## Watch out

- **You might call every reverse-breakdown diode a "Zener".** Most parts sold as Zener diodes above about 6 V actually break down by *avalanche*. The name is historical. Check the temperature coefficient on the datasheet: positive means avalanche, negative means true Zener.
- **You might expect a real junction to reach the plane-junction $V_B$.** It usually does not. Field crowding at curved edges and corners lowers the actual breakdown, sometimes by a factor of two, which is why guard rings and field plates exist.
- **You might think breakdown destroys the diode.** Breakdown itself is entirely non-destructive and reversible — a Zener regulator lives there permanently. What destroys the device is *power dissipation*, $V_BI$, if the current is not limited. Always ask whether the current is bounded.
- **You might use $V_B\propto1/N$ at high doping.** Below about $6E_g/q$ the mechanism switches to tunneling and the formula fails badly — it predicted 2.9 V for $N=10^{17}$, but the real value is near 5 V and set by different physics.
- **You might optimize a power device on $R_{on}$ alone.** The full figure of merit includes switching loss too, and a lifetime-killed fast silicon diode may beat a slow one at high frequency despite a worse $R_{on}$. [2.3](02-03-junction-diffusion-capacitance.md)'s reverse-recovery calculation is the other half of the budget.

## One-liner

> Avalanche needs a wide, lightly doped junction so the impact-ionization chain has room to run; Zener needs a junction so thin that electrons tunnel straight across — and $R_{on}A\propto V_B^2/\mathcal{E}_{\rm crit}^3$ is why wide-gap materials took the power market.

## Problems

**P1 (🟢)** A silicon $p^+n$ junction has $N_d = 5\times10^{15}\ \mathrm{cm^{-3}}$. (a) Estimate $V_B$ using $\mathcal{E}_{\rm crit} = 3\times10^5$ V/cm. (b) Find the depletion width at breakdown. (c) Would you expect avalanche or Zener? (d) What is the temperature coefficient's sign?

**P2 (🟡)** A Zener diode is specified at $V_Z = 5.6$ V with a temperature coefficient near zero. (a) Explain physically why that particular voltage. (b) A different part is rated 3.3 V. Predict the sign of its TC and the mechanism. (c) Another is rated 15 V; same questions. (d) A designer needs a 12 V reference with the lowest possible drift. Suggest a better approach than a single 12 V Zener, and justify it quantitatively.

**P3 (🔴)** Compare silicon and GaN for a 1200 V unipolar device. GaN has $\mathcal{E}_{\rm crit}\approx3.3\times10^6$ V/cm, $\varepsilon_s = 9.0\varepsilon_0$, $\mu_n\approx1500\ \mathrm{cm^2/V\cdot s}$. (a) Find $N_B$, $W_B$ and $R_{on}A$ for each. (b) Find the ratio and verify it against the figure-of-merit formula. (c) A silicon **superjunction** device evades the limit by alternating $n$ and $p$ pillars so the drift region depletes laterally; explain in two or three sentences why this breaks the $V_B^2$ scaling. (d) Estimate what critical field a hypothetical material would need to match a silicon superjunction that achieves $R_{on}A = 10\ \mathrm{m\Omega\cdot cm^2}$ at 600 V, and comment.

<details>
<summary>Solutions</summary>

**P1** (a) $$V_B = \frac{\varepsilon_s\mathcal{E}_{\rm crit}^2}{2qN_d} = \frac{(1.04\times10^{-12})(9\times10^{10})}{2(1.602\times10^{-19})(5\times10^{15})} = \frac{9.36\times10^{-2}}{1.602\times10^{-3}} = 58.4\ \mathrm{V}.$$

(b) $$W_B = \frac{2V_B}{\mathcal{E}_{\rm crit}} = \frac{2(58.4)}{3\times10^5} = 3.89\times10^{-4}\ \mathrm{cm} = 3.89\ \mu\mathrm{m}.$$

(c) **Avalanche.** 58 V is far above the $\sim6.7$ V crossover, and the depletion region is nearly 4 µm — plenty of room for an ionization cascade to develop. Tunneling is utterly negligible at the corresponding field.

(d) **Positive.** Avalanche breakdown voltage rises with temperature, because increased phonon scattering robs carriers of energy between collisions, so a higher field is needed to reach the ionization threshold.

**P2** (a) Around 5–6 V, the depletion width and field are such that **both mechanisms operate simultaneously**: the junction is thin enough for some tunneling and wide enough for some avalanche multiplication. Their temperature coefficients have opposite signs — Zener negative (shrinking gap thins the barrier), avalanche positive (more phonon scattering) — so at the voltage where their contributions are comparable, the coefficients **cancel**. For silicon that crossover lands near 5.6 V, which is why that value is a catalogue standard for temperature-stable references.

(b) 3.3 V is well below the crossover, so it is **true Zener tunneling**, and its TC is **negative** (roughly $-2$ mV/°C). The knee will also be noticeably softer than a high-voltage part's, because tunneling turns on exponentially rather than diverging.

(c) 15 V is well above the crossover, so it is **avalanche**, with a **positive** TC (roughly $+9$ mV/°C at that voltage — the coefficient grows with $V_Z$).

(d) A single 12 V Zener would drift at roughly $+7$ to $+9$ mV/°C, i.e. about $+0.07\%$/°C — over a 100 °C range that is a 0.8 V swing, far too much for a reference.

**Better: stack a 5.6 V Zener with a forward-biased silicon diode**, or better still use two 5.6 V references in series plus trimming. The forward diode has a TC of about $-2$ mV/°C ([2.2](02-02-ideal-diode-equation.md)'s $dV/dT$), so:

$$\text{Two 5.6 V Zeners in series:}\quad V = 11.2\ \mathrm{V}, \quad \mathrm{TC}\approx2\times(\approx0) \approx 0.$$

Adding a forward diode gives $11.2+0.7 = 11.9$ V with TC $\approx-2$ mV/°C — close to 12 V and thirty times more stable than the single part.

*The genuinely right answer in modern practice* is a **bandgap reference**: combine a $\Delta V_{BE}$ term (proportional to absolute temperature, $+0.085$ mV/°C per unit) with a $V_{BE}$ term ($-2$ mV/°C) in a ratio that cancels, giving a 1.25 V reference stable to a few ppm/°C, then amplify to 12 V. It works because the two terms' temperature dependences are *fundamental* (one is $k_BT/q$, the other tracks $E_g$), so the cancellation is far more reproducible than balancing two breakdown mechanisms. That is why every modern IC reference is a bandgap and not a Zener — see [`electronics`](../../electronics/syllabus.md).

**P3** (a) **Silicon**, $V_B = 1200$ V:

$$N_B = \frac{(1.04\times10^{-12})(9\times10^{10})}{2(1.602\times10^{-19})(1200)} = \frac{9.36\times10^{-2}}{3.845\times10^{-16}} = 2.43\times10^{14}\ \mathrm{cm^{-3}},$$
$$W_B = \frac{2(1200)}{3\times10^5} = 8.0\times10^{-3}\ \mathrm{cm} = 80\ \mu\mathrm{m},$$
$$R_{on}A = \frac{8.0\times10^{-3}}{(1.602\times10^{-19})(1350)(2.43\times10^{14})} = \frac{8.0\times10^{-3}}{5.256\times10^{-2}} = 0.152\ \Omega\cdot\mathrm{cm^2}.$$

**GaN**, $\varepsilon_s = 9.0(8.854\times10^{-14}) = 7.97\times10^{-13}$ F/cm:

$$N_B = \frac{(7.97\times10^{-13})(3.3\times10^6)^2}{3.845\times10^{-16}} = \frac{(7.97\times10^{-13})(1.089\times10^{13})}{3.845\times10^{-16}} = \frac{8.679}{3.845\times10^{-16}} = 2.26\times10^{16}\ \mathrm{cm^{-3}},$$
$$W_B = \frac{2(1200)}{3.3\times10^6} = 7.27\times10^{-4}\ \mathrm{cm} = 7.27\ \mu\mathrm{m},$$
$$R_{on}A = \frac{7.27\times10^{-4}}{(1.602\times10^{-19})(1500)(2.26\times10^{16})} = \frac{7.27\times10^{-4}}{5.431} = 1.34\times10^{-4}\ \Omega\cdot\mathrm{cm^2}.$$

(b) $$\text{Ratio} = \frac{0.152}{1.34\times10^{-4}} = 1133.$$

Check against $R_{on}A\propto V_B^2/(\varepsilon_s\mu\mathcal{E}_{\rm crit}^3)$, at equal $V_B$:

$$\frac{R_{\rm Si}}{R_{\rm GaN}} = \frac{\varepsilon_{\rm GaN}\mu_{\rm GaN}\mathcal{E}_{\rm GaN}^3}{\varepsilon_{\rm Si}\mu_{\rm Si}\mathcal{E}_{\rm Si}^3} = \frac{(7.97\times10^{-13})(1500)(3.3\times10^6)^3}{(1.04\times10^{-12})(1350)(3\times10^5)^3}.$$

Numerator: $(7.97\times10^{-13})(1500) = 1.196\times10^{-9}$; $(3.3\times10^6)^3 = 3.594\times10^{19}$; product $= 4.298\times10^{10}$.
Denominator: $(1.04\times10^{-12})(1350) = 1.404\times10^{-9}$; $(3\times10^5)^3 = 2.7\times10^{16}$; product $= 3.791\times10^{7}$.

$$\text{Ratio} = \frac{4.298\times10^{10}}{3.791\times10^{7}} = 1133 \ \checkmark.$$

(c) A **superjunction** replaces the uniform lightly doped drift region with alternating thin $n$ and $p$ pillars of *equal and opposite* charge. Under reverse bias the pillars deplete each other **laterally**, so the vertical field becomes nearly uniform along the drift length rather than triangular, and — crucially — the blocking capability no longer depends on the $n$-pillar doping being light, because the adjacent $p$ charge compensates it.

That breaks the coupling the limit relies on. In the conventional device, $N_B$ and $W_B$ are both dictated by $V_B$ (light doping *and* long drift), which is why $R_{on}\propto V_B^2$. In a superjunction you may dope the $n$ pillars 10–100× more heavily — cutting the resistance proportionally — while still blocking the same voltage, so $R_{on}$ becomes roughly *linear* in $V_B$ and depends on the pillar pitch instead. The cost is a much harder process (deep trenches or multi-epitaxy) and precise charge balance: a few percent charge imbalance between the pillars ruins the blocking voltage.

(d) A hypothetical uniform-drift material matching $R_{on}A = 10\ \mathrm{m\Omega\cdot cm^2} = 10^{-2}\ \Omega\cdot\mathrm{cm^2}$ at 600 V. Using silicon's $\varepsilon_s$ and $\mu$ for comparison:

$$\mathcal{E}_{\rm crit}^3 = \frac{4V_B^2}{\varepsilon_s\mu\,R_{on}A} = \frac{4(600)^2}{(1.04\times10^{-12})(1350)(10^{-2})} = \frac{1.44\times10^{6}}{1.404\times10^{-11}} = 1.026\times10^{17},$$

$$\mathcal{E}_{\rm crit} = (1.026\times10^{17})^{1/3} = 4.68\times10^{5}\ \mathrm{V/cm}.$$

*Comment.* Only about **1.6× silicon's critical field** — far below SiC's 7.3× or GaN's 11×. So a silicon superjunction at 600 V performs like a hypothetical material with a modestly better critical field, not like a wide-gap semiconductor. (Compare Example 1: the conventional silicon device needed $3.8\times10^{-2}$, so the superjunction is a 3.8× improvement, real but not revolutionary.)

The honest conclusion is that superjunction silicon competes well at 600 V and loses badly at 1200 V and above, where the pillar aspect ratio becomes unmanufacturable while SiC's advantage keeps growing as $V_B^2$. That is exactly the market split observed today: superjunction silicon owns 600 V consumer power supplies, SiC owns 1200 V traction inverters, and the boundary between them has been creeping downward as SiC wafer costs fall.

</details>

## Flashback

**From Lesson 2.2 (The ideal-diode equation):** A silicon diode has $I_0 = 10^{-14}$ A. (a) Find the reverse current at $-10$ V, ideally. (b) The junction has $V_B = 50$ V and $m = 4$ in the multiplication formula. Find $M$ and the actual reverse current at $-10$ V, at $-40$ V, and at $-49$ V. (c) Comment on where multiplication starts to matter.

<details>
<summary>Solution</summary>

(a) Ideally $I\to-I_0 = -10^{-14}$ A, independent of voltage.

(b) $M = \left[1-(|V|/V_B)^m\right]^{-1}$ with $m=4$, $V_B=50$:

- $|V| = 10$: $(10/50)^4 = (0.2)^4 = 1.6\times10^{-3}$, so $M = 1/(1-0.0016) = 1.0016$, and $I = 1.00\times10^{-14}$ A.
- $|V| = 40$: $(0.8)^4 = 0.4096$, $M = 1/0.5904 = 1.694$, $I = 1.69\times10^{-14}$ A.
- $|V| = 49$: $(0.98)^4 = 0.9224$, $M = 1/0.0776 = 12.9$, $I = 1.29\times10^{-13}$ A.

(c) Multiplication is utterly negligible below about half the breakdown voltage (0.16% at 20% of $V_B$), reaches a factor of ~1.7 at 80%, and then climbs very steeply — a factor of 13 at 98%, diverging at 100%.

The practical reading: **$M$ is a knee, not a gradual ramp.** A diode operated below about 70% of its rated $V_B$ behaves as if breakdown did not exist; above 90% the current starts running away and the device is in the danger zone. This is why datasheets specify a working reverse voltage well below the breakdown rating — typically 80% — and why the derating is not conservatism but a direct consequence of the $m$-th-power law.

(It is also the mechanism behind the **avalanche photodiode** of [4.1](04-01-light-absorption-emission-detection.md), which is deliberately biased at 90–99% of $V_B$ to get internal gains of 10–100 before the signal ever reaches an amplifier.)

</details>

## Connections

- **Backward:** the peak field is [2.1](02-01-junction-electrostatics.md)'s $\mathcal{E}_{\max} = 2(V_{bi}-V)/W$, and the current being multiplied is [2.2](02-02-ideal-diode-equation.md)'s $I_0$; the tunneling probability is the WKB result of [`quantum-mechanics` 2.5](../../quantum-mechanics/lessons/02-05-scattering-barriers-tunneling.md).
- **Forward:** [2.5](02-05-metal-semiconductor-heterojunctions.md) shows why Schottky diodes have lower breakdown; [3.6](03-06-short-channel-effects-scaling.md) hits the same field limit as the reason supply voltages had to scale with dimensions.
- **Sideways:** impact ionization is a **branching chain reaction**, mathematically the same criticality condition as neutron multiplication in [`reactor-physics` 2.1](../../reactor-physics/lessons/02-01-k-infinity-four-factor-formula.md) — the ionization integral equalling 1 is exactly $k=1$, and $M = 1/(1-k)$ is the same subcritical multiplication formula.

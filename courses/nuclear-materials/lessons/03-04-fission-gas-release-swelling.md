# Nuclear Materials · Lesson 3.4: Fission-gas release and gaseous swelling

> ⏱ ~15 min · Module 3: Nuclear fuels and fission-product behavior · Builds on: [3.3 Fission products and their fates](03-03-fission-products-fates.md), [3.2 The fuel temperature profile and restructuring](03-02-fuel-temperature-profile-restructuring.md) · Unlocks: [4.1 Zirconium alloys: the LWR cladding](04-01-zirconium-alloys-cladding.md) (the clad has to contain this pressure)

## Why this matters

Two of the fission fragments you inventoried in [3.3](03-03-fission-products-fates.md) — xenon and krypton — are **noble gases**. They dissolve in nothing, bond to nothing, and want out. Where they end up decides two of the most important numbers in fuel design: how hard the gas pushes on the cladding from inside (**plenum pressure**), and how much the pellet balloons outward (**gaseous swelling**). Get either wrong and the cladding lifts off, creeps, or is squeezed by the swelling fuel until it cracks. This lesson is where the fuel's chemistry becomes a mechanical load on the [cladding](04-01-zirconium-alloys-cladding.md) — and, crucially, where **fuel temperature** ([3.2](03-02-fuel-temperature-profile-restructuring.md)) turns a slow nuisance into a runaway.

## The idea

Picture a single UO₂ grain, a few micrometres across. Fission scatters lone Xe and Kr atoms all through it. Being insoluble, they'd rather clump than dissolve, so they **precipitate into tiny gas bubbles** inside the grain — *intra-granular* bubbles. As long as the gas stays locked in these bubbles, it does no harm to the pin: it's still inside the fuel.

Now warm the fuel up. Gas atoms **diffuse**, and diffusion is exponentially faster when it's hot ([materials-science 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md)). The atoms migrate to the **grain boundaries** — the internal surfaces between grains — and collect into bigger *inter-granular* bubbles that sit on those boundaries. So far, still trapped. But keep feeding gas in and those boundary bubbles grow, touch, and **interlink into a network of tunnels** along the grain edges. Once a tunnel reaches an open crack or the pellet surface, it's a pipe: the gas **vents** out of the fuel and into the pin's gas space (the **plenum**). That's *release*.

The punchline is a threshold. Below roughly **1000 °C** the diffusion is too slow for gas to reach the boundaries during the fuel's life, so almost nothing is released — you get only a tiny **athermal** trickle from atoms born close enough to a surface to be knocked straight out. Above ~1000 °C the diffusion "switches on" and release climbs steeply. Because [3.2](03-02-fuel-temperature-profile-restructuring.md) told us the pellet is hot in the center and cold at the rim, **only the hot central zones release gas** — a low-power pin keeps almost all of it, a high-power pin dumps a large fraction into the plenum.

## The formal version

**Two release channels.** Total release splits into a temperature-independent piece and a temperature-driven piece:

- **Athermal release** — recoil (a fresh fission fragment born within its ~10 µm range of a free surface flies straight out) and knockout (a passing fragment sputters gas from a surface layer). It's small, a **few percent at most**, and roughly flat in temperature because it doesn't rely on diffusion. It dominates only when the fuel is cold.
- **Thermal release** — diffusion-controlled. Gas atoms random-walk to grain boundaries with diffusion coefficient $D(T) = D_0\,e^{-Q/(k_B T)}$, where $Q$ is the migration activation energy (eV), $k_B$ is Boltzmann's constant, and $T$ is temperature (K). The Arrhenius factor makes $D$ — and hence release — rise by orders of magnitude across a few hundred degrees, producing a sharp effective **threshold near $T \approx 1000\,^\circ\mathrm{C}$**.

*In words: a small constant leak plus a diffusion leak that stays shut until the fuel is hot, then opens fast.*

**Release fraction.** Define

$$f = \frac{\text{gas atoms released to the plenum}}{\text{gas atoms produced}}, \qquad 0 \le f \le 1.$$

*In words: the fraction of the bred Xe+Kr that has escaped the fuel.* Because release is thermal, $f$ is set by how much of the pellet sits above the threshold. Using the parabolic temperature profile from [3.2](03-02-fuel-temperature-profile-restructuring.md), $T(r) = T_0 - (T_0 - T_s)\left(r/a\right)^2$ (centerline $T_0$, surface $T_s$, pellet radius $a$), the **volume fraction hotter than the release threshold** $T_{\mathrm{th}}$ is

$$\frac{V_{>T_{\mathrm{th}}}}{V} = \left(\frac{r_{\mathrm{th}}}{a}\right)^2 = \frac{T_0 - T_{\mathrm{th}}}{T_0 - T_s},$$

valid whenever $T_0 > T_{\mathrm{th}} > T_s$ (else the fraction is 0 or 1). *In words: raise the centerline temperature and a bigger core of the pellet crosses into the releasing zone.*

**Plenum pressure.** The released gas is an ideal gas filling the plenum volume $V$ (m³) at plenum temperature $T$ (K):

$$p = \frac{nRT}{V}, \qquad n = f\,n_{\text{prod}},$$

where $n$ is moles of *released* gas, $n_{\text{prod}}$ is moles produced (from [3.3](03-03-fission-products-fates.md)'s yield), and $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$. *In words: more release or more burnup means more moles in the same small volume, so the pressure climbs.* The design limit is the coolant pressure: a PWR runs at $\approx 15.5$ MPa. If internal pressure approaches that, the coolant no longer presses the cladding onto the fuel — the clad can **lift off** and, at end of life, creep outward.

**Gaseous swelling.** The gas that is *retained* (fraction $1-f$) sits in bubbles that occupy volume, so the pellet grows. This **gaseous swelling** adds to the **solid-fission-product swelling** from [3.3](03-03-fission-products-fates.md) (solid FPs are simply bulkier than the U atoms they replaced). Total pellet swelling closes the fuel–clad gap and eventually presses outward — **pellet–clad mechanical interaction (PCMI)**. Note the trade-off: hot fuel *releases* gas (less swelling, more plenum pressure); cold fuel *retains* it (more swelling, less pressure). You pay either way.

## Picture

![Left: a UO2 grain cluster with small intra-granular gas bubbles migrating to a highlighted grain boundary, where larger inter-granular bubbles link into tunnels and vent to the plenum. Right: release fraction versus fuel temperature, flat and small in the athermal region and rising sharply past a dashed threshold at about 1000 degrees C.](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (plenum pressure — is the clad in danger?).** In [3.3](03-03-fission-products-fates.md) we estimated that over its life this pin breeds about $n_{\text{prod}} = 0.045$ mol of stable fission gas (Xe + Kr). Suppose the fuel is hot enough to release a fraction $f = 0.30$ of it into a plenum of volume $V = 16\ \mathrm{cm^3} = 1.6\times10^{-5}\ \mathrm{m^3}$ sitting at $T = 700$ K. Find the plenum pressure and compare to the 15.5 MPa PWR coolant.

Released moles:

$$n = f\,n_{\text{prod}} = 0.30 \times 0.045 = 0.0135\ \mathrm{mol}.$$

Ideal gas:

$$p = \frac{nRT}{V} = \frac{0.0135 \times 8.314 \times 700}{1.6\times10^{-5}} \approx \frac{78.6}{1.6\times10^{-5}} \approx 4.9\times10^{6}\ \mathrm{Pa} = 4.9\ \mathrm{MPa}.$$

That's about **one-third of the 15.5 MPa coolant pressure**, so the coolant still presses inward — safe, for now. But notice how little headroom the design has: push $f$ toward 1 at high burnup and this number marches toward (and past) 15.5 MPa, at which point the clad lifts off.

*Check.* Units: $\mathrm{mol}\cdot\mathrm{J\,mol^{-1}K^{-1}}\cdot\mathrm{K}/\mathrm{m^3} = \mathrm{J/m^3} = \mathrm{Pa}$ ✓. Magnitude: a few $\times10^{-2}$ mol in ~$10^{-5}\ \mathrm{m^3}$ at ~700 K landing at a few MPa is the right order for a fuel pin.

**Example 2 (why more power is doubly bad — the qualitative half of Boss Problem 3(b)).** A pin runs with centerline $T_0 = 1400\,^\circ\mathrm{C}$, surface $T_s = 450\,^\circ\mathrm{C}$, threshold $T_{\mathrm{th}} = 1000\,^\circ\mathrm{C}$. How does raising the linear power $q'$ by 50% change the releasing fraction — and thus the plenum pressure?

Base case, releasing volume fraction:

$$\frac{V_{>T_{\mathrm{th}}}}{V} = \frac{T_0 - T_{\mathrm{th}}}{T_0 - T_s} = \frac{1400 - 1000}{1400 - 450} = \frac{400}{950} \approx 0.42.$$

For roughly constant conductivity, [3.2](03-02-fuel-temperature-profile-restructuring.md) gives $T_0 - T_s = q'/(4\pi k)$ — the temperature rise scales **linearly** with $q'$. Raising $q'$ by 50% raises the rise from 950 to $1.5 \times 950 = 1425$ °C, so $T_0 = 450 + 1425 = 1875\,^\circ\mathrm{C}$:

$$\frac{V_{>T_{\mathrm{th}}}}{V} = \frac{1875 - 1000}{1875 - 450} = \frac{875}{1425} \approx 0.61.$$

The releasing core grows from **42% to 61%** of the pellet volume, so the release fraction $f$ jumps. And the higher power also fissions more atoms, so $n_{\text{prod}}$ rises ~50% as well. Since $p \propto f\,n_{\text{prod}}$, **plenum pressure climbs faster than $q'$ does** — the two effects multiply. This is exactly why fuel vendors cap the peak linear power: gas release is the runaway.

*Check.* Both fractions lie in $(0,1)$ and the hotter case is larger ✓. Limiting sense: as $T_0 \to \infty$ the fraction $\to 1$ (whole pellet releases); as $T_0 \to T_{\mathrm{th}}$ it $\to 0$ (only the very center) ✓.

## Watch out

- **You might think athermal release also grows with temperature.** It barely does — recoil and knockout are geometric (born-near-a-surface) effects, independent of diffusion. What switches on at ~1000 °C is the *thermal* channel; the athermal few-percent floor is always there and dominates only when the fuel is cold.
- **You might think releasing gas is the dangerous outcome.** It's a trade, not a strict worse. Released gas *pressurizes* the plenum but *reduces* swelling; retained gas does the opposite (more gaseous swelling and PCMI). A fuel designer manages both, sizing the plenum for the pressure and the gap for the swelling.
- **You might treat 1000 °C as a hard wall.** It's the knee of a smooth Arrhenius curve, not a phase change. Release is already nonzero below it and doesn't complete just above it — but $D(T)$ climbs so steeply that "release" is effectively a threshold for engineering purposes.

## One-liner

> Xe and Kr precipitate into grain bubbles, diffuse to boundaries, interlink into tunnels, and vent once the fuel passes ~1000 °C — pressurizing the plenum on the way out and swelling the pellet if they stay in.

## Problems

**P1 (🟢)** A pin has released $n = 0.010$ mol of fission gas into a plenum of volume $V = 12\ \mathrm{cm^3}$ at $T = 650$ K. Find the plenum pressure and express it as a fraction of the 15.5 MPa PWR coolant pressure.

**P2 (🟡)** (a) A low-power pin runs with a centerline temperature of only 850 °C. Which release channel dominates, and roughly what release fraction do you expect? (b) The pin is uprated so its centerline reaches 1500 °C with a surface temperature of 450 °C. Using the parabolic profile, what volume fraction of the pellet now exceeds the 1000 °C release threshold?

**P3 (🔴)** A high-burnup pin has bred $n_{\text{prod}} = 0.060$ mol of fission gas. Its plenum has volume $V = 14\ \mathrm{cm^3}$ at $T = 720$ K. Early in life the release fraction is $f = 0.05$; near end of life, running hotter, it is $f = 0.45$. Compute the plenum pressure at both times, compare each to 15.5 MPa, and say when clad-liftoff risk appears.

<details>
<summary>Solutions</summary>

**P1** With $V = 12\ \mathrm{cm^3} = 1.2\times10^{-5}\ \mathrm{m^3}$:

$$p = \frac{nRT}{V} = \frac{0.010 \times 8.314 \times 650}{1.2\times10^{-5}} = \frac{54.0}{1.2\times10^{-5}} \approx 4.5\times10^{6}\ \mathrm{Pa} = 4.5\ \mathrm{MPa}.$$

As a fraction of coolant pressure: $4.5/15.5 \approx 0.29$, about **29%**. Coolant still presses inward — safe.

*Check.* Units give Pa ✓; a few $\times10^{-2}$ mol… this is $0.010$ mol, an order below Example 1's $0.0135$ mol but in a smaller volume, so a comparable few-MPa result ✓.

**P2** (a) At 850 °C the fuel is **below** the ~1000 °C thermal threshold everywhere, so diffusion to the boundaries is negligible on the fuel's timescale. The **athermal** (recoil/knockout) channel dominates, giving only a **few percent** release ($f \sim 0.01$–$0.02$). (b) With $T_0 = 1500$, $T_s = 450$, $T_{\mathrm{th}} = 1000$:

$$\frac{V_{>T_{\mathrm{th}}}}{V} = \frac{T_0 - T_{\mathrm{th}}}{T_0 - T_s} = \frac{1500 - 1000}{1500 - 450} = \frac{500}{1050} \approx 0.48.$$

About **48%** of the pellet volume — nearly half — now sits in the releasing zone, so $f$ leaps from a couple of percent to a large fraction. Uprating the pin transformed a gas-retaining pellet into a gas-dumping one.

*Check.* The fraction is in $(0,1)$ and larger than the cold case ($\approx 0$) ✓. Corresponding threshold radius: $r_{\mathrm{th}}/a = \sqrt{0.48} \approx 0.69$, i.e. the inner ~69% of the radius releases — plausible for a hot pin ✓.

**P3** $V = 14\ \mathrm{cm^3} = 1.4\times10^{-5}\ \mathrm{m^3}$. Early ($f = 0.05$): $n = 0.05 \times 0.060 = 0.0030$ mol,

$$p = \frac{0.0030 \times 8.314 \times 720}{1.4\times10^{-5}} = \frac{17.96}{1.4\times10^{-5}} \approx 1.3\ \mathrm{MPa}.$$

End of life ($f = 0.45$): $n = 0.45 \times 0.060 = 0.027$ mol,

$$p = \frac{0.027 \times 8.314 \times 720}{1.4\times10^{-5}} = \frac{161.6}{1.4\times10^{-5}} \approx 11.5\ \mathrm{MPa}.$$

Early in life 1.3 MPa is trivial against 15.5 MPa. By end of life 11.5 MPa is ~74% of coolant pressure — the inward squeeze has nearly vanished and further release (or a power spike raising the plenum temperature) would push internal pressure past coolant pressure, at which point **clad liftoff** becomes the concern. Risk appears at high burnup / high temperature, when $f$ is large — not at beginning of life.

*Check.* Pressure scales linearly with $f$: $11.5/1.3 \approx 8.8 \approx 0.45/0.05 = 9$ ✓ (small rounding). Both under 15.5 MPa, but the end-of-life margin is thin — the correct qualitative conclusion.

</details>

## Flashback

**From Lesson 3.2 (The fuel temperature profile):** A UO₂ pin runs at linear power $q' = 25$ kW/m with an outer-surface temperature $T_s = 400\,^\circ\mathrm{C}$. Model the conductivity as constant, $k = 3\ \mathrm{W\,m^{-1}K^{-1}}$. Using the cylindrical result $q' = 4\pi\!\int_{T_s}^{T_0} k\,dT$, find the centerline temperature $T_0$ and say whether the pin's core will release fission gas.

<details>
<summary>Solution</summary>

For constant $k$, the integral is just $k(T_0 - T_s)$, so $q' = 4\pi k (T_0 - T_s)$ and

$$T_0 - T_s = \frac{q'}{4\pi k} = \frac{25{,}000\ \mathrm{W/m}}{4\pi \times 3\ \mathrm{W\,m^{-1}K^{-1}}} = \frac{25{,}000}{37.70} \approx 663\ \mathrm{K}.$$

A temperature *difference* of 663 K equals a difference of 663 °C, so

$$T_0 = 400 + 663 = 1063\,^\circ\mathrm{C}.$$

The centerline (1063 °C) just clears the ~1000 °C release threshold, so a **thin central region releases fission gas** while the bulk of the pellet stays below threshold and retains its gas. Release fraction here is small but nonzero — exactly the low-power end of this lesson's story.

*Check.* Units: $\mathrm{(W/m)}/\mathrm{(W\,m^{-1}K^{-1})} = \mathrm{K}$ ✓. Sanity: 663 K centerline rise is modest for UO₂ (real pins can run 1000+ K hotter at full power), consistent with a low $q' = 25$ kW/m and the crude constant-$k$ model ✓.

</details>

## Connections

- **Backward:** the gas atoms are the noble-gas branch of [3.3](03-03-fission-products-fates.md)'s fission-product inventory, and *where* they release is dictated entirely by [3.2](03-02-fuel-temperature-profile-restructuring.md)'s radial temperature profile — this lesson is those two spliced together. The diffusion that carries gas to the boundaries is the Arrhenius, thermally-activated transport of [materials-science 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md); the retained bubbles that swell the pellet are cousins of the irradiation voids in [2.3](02-03-voids-void-swelling.md), driven by insoluble gas rather than vacancy supersaturation.
- **Forward:** the plenum pressure and PCMI computed here are the *loads* the cladding must survive — [4.1](04-01-zirconium-alloys-cladding.md) picks the Zircaloy that contains them, and Boss Problem 3 assembles the full pin (temperature profile → releasing zones → plenum pressure) from these pieces.
- **Sideways:** the release "threshold" is not a switch but the steep knee of an exponential rate law — the same shape as thermal-creep onset in metals, chemical-reaction rates in kinetics, and any other Arrhenius-governed process. Recognize the pattern and you can read a threshold off an activation energy.

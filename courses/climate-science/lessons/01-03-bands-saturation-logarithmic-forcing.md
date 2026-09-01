# Climate Physics · Lesson 1.3: Bands, saturation & why forcing is logarithmic

> ⏱ ~15 min · Module 1: Radiative foundations, past the slab · Builds on: [1.2](01-02-gray-atmosphere-radiative-equilibrium.md), [atmospheric-science 3.3](../../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md) · Unlocks: [1.4](01-04-radiative-forcing-defined.md) (forcing, properly defined)

## Why this matters

Everyone quotes $\Delta F = 5.35\ln(C/C_0)$, and almost nobody can say where the logarithm comes from. It is not a fit of convenience and it is not a coincidence — it is the direct signature of an absorption band whose strength falls off exponentially into the wings, and it is *why* the climate problem has the shape it does. If forcing were linear in concentration, the first 40 ppm of $\mathrm{CO_2}$ would matter as much as the next 40 and Earth would never have been habitable across the enormous $\mathrm{CO_2}$ swings of deep time. If it were square-root, carbon budgets would look completely different. This lesson derives the logarithm, and in the process explains why "the $\mathrm{CO_2}$ band is already saturated" — a true statement — does not imply what people think it implies.

## The idea

**Absorption is not gray; it lives in lines.** A molecule absorbs infrared at the discrete energies of its vibrational–rotational transitions. Each transition is a **line**, broadened into a narrow peak by molecular collisions. Thousands of lines from the rotational ladder cluster around a vibrational frequency to make a **band**. $\mathrm{CO_2}$'s workhorse is the bending mode at 667 cm⁻¹ (15 micrometres), sitting almost exactly on the peak of Earth's outgoing Planck curve — geological bad luck, from our point of view.

**The band centre really is saturated, and that really doesn't matter.** At the centre of the $\mathrm{CO_2}$ band the optical depth to space is of order $10^4$. Adding more $\mathrm{CO_2}$ there changes nothing: the radiation already escapes from the stratosphere and the emission level cannot go higher in any way that matters. If that were the whole story, $\mathrm{CO_2}$ would be a spent force.

**But the band has edges, and the edges are where the action is.** Away from the centre, line strengths fall off roughly **exponentially** with distance. So the optical depth at wavenumber $\nu$ looks like $\tau(\nu) \approx \tau_0 e^{-|\nu-\nu_0|/\Delta}$ for some width $\Delta$. Now ask where the band is opaque — that is, where $\tau > 1$. Take logarithms: the opaque region extends out to $|\nu - \nu_0| = \Delta\ln\tau_0$. Double the $\mathrm{CO_2}$ and $\tau_0$ doubles everywhere, so the edge moves out by $\Delta\ln 2$ — **on each side, and by the same amount every time you double.** The opaque width grows by equal increments per doubling, which is exactly what "logarithmic" means.

**Where the watts come from.** Inside the opaque width, Earth radiates to space at the cold temperature near the tropopause instead of the warm surface temperature. Each newly-opaque sliver of spectrum therefore costs the planet the difference $B_\nu(T_s) - B_\nu(T_{\text{cold}})$ times its width. Since the width grows by a fixed amount per doubling, **the forcing is a fixed number of watts per doubling.** That is the entire derivation, and it gives the right answer to within a few percent.

## The formal version

**Line broadening.** An isolated line at $\nu_0$ has, from collisional (pressure) broadening, the **Lorentz** shape

$$k(\nu) = \frac{S}{\pi}\frac{\gamma}{(\nu-\nu_0)^2 + \gamma^2}, \qquad \gamma \propto \frac{p}{p_0}\sqrt{\frac{T_0}{T}},$$

where $S$ is the line strength (integrated absorption, m² kg⁻¹ cm⁻¹) and $\gamma$ the half-width. *In words: collisions interrupt the emitting molecule, which smears the line; more collisions means a broader line.* Near the surface $\gamma \approx 0.07$ cm⁻¹; in the stratosphere, where $p$ is a hundredth of that, lines are correspondingly narrow and **Doppler broadening** — from the thermal motion of the molecules, a Gaussian of width $\propto \nu_0\sqrt{T/M}$ — takes over above roughly 30 km. The combination is the Voigt profile.

This is why pressure appears in radiative-transfer codes at all: the same amount of $\mathrm{CO_2}$ absorbs differently at 1000 hPa and at 100 hPa, because the lines have different shapes.

**Three regimes of a single line.** Define the absorber path $u$ (kg m⁻²) and the **equivalent width** $W$, the width of a perfectly black rectangle absorbing the same total energy as the real line:

| Regime | Condition | $W$ scales as | Forcing in concentration |
|---|---|---|---|
| Weak / linear | $Su \ll \gamma$, line optically thin | $W \propto S u$ | **linear** |
| Square-root (strong-line) | core black, Lorentz wings absorbing | $W \propto \sqrt{S\gamma u}$ | **square root** |
| Band-saturated | whole band core black, wings spreading | $W \propto \Delta\ln u$ | **logarithmic** |

*In words: a gas moves rightward through this table as you add more of it.* Which row a given gas sits in *today* is what sets the shape of its forcing formula. The standard simplified expressions used throughout climate science are exactly these three rows:

$$\Delta F_{\mathrm{CO_2}} = 5.35\ln\!\left(\frac{C}{C_0}\right), \qquad \Delta F_{\mathrm{CH_4}} \propto \sqrt{M}-\sqrt{M_0}, \qquad \Delta F_{\mathrm{CFC}} \propto X - X_0.$$

$\mathrm{CO_2}$ is logarithmic because we have a lot of it; $\mathrm{CH_4}$ and $\mathrm{N_2O}$ are square-root because their bands are partly saturated; the halocarbons are linear because there is so little of them, and because they absorb in the **atmospheric window** at 8–12 micrometres where nothing competes. That last point is why a CFC molecule can be thousands of times more potent than a $\mathrm{CO_2}$ molecule: it is operating on virgin spectrum.

**Deriving the logarithm.** Model the band as exponential wings about $\nu_0$:

$$\tau(\nu) = \tau_0\,e^{-|\nu-\nu_0|/\Delta}, \qquad \tau_0 \propto C.$$

The spectrum is opaque where $\tau > 1$, i.e. for $|\nu-\nu_0| < \Delta\ln\tau_0$. The total opaque width is

$$W = 2\Delta\ln\tau_0 = 2\Delta\ln C + \text{const} \quad\Longrightarrow\quad \frac{dW}{d\ln C} = 2\Delta.$$

Inside that width, space sees emission at the cold temperature $T_c$ near the tropopause rather than the surface temperature $T_s$. The outgoing longwave radiation is therefore reduced, relative to a $\mathrm{CO_2}$-free planet, by approximately $W\,\pi\left[B_\nu(T_s) - B_\nu(T_c)\right]$, and a doubling changes that by

$$\Delta F_{2\times} \approx 2\Delta\ln 2 \cdot \pi\left[B_\nu(T_s,\nu_0) - B_\nu(T_c,\nu_0)\right].$$

*In words: forcing equals the extra spectral width you just blacked out, times the brightness contrast between the surface and the level that now does the emitting.*

**Numbers.** At $\nu_0 = 667\ \mathrm{cm^{-1}}$, with $T_s = 288$ K and $T_c = 220$ K,

$$\pi B_\nu(288) = 0.412, \qquad \pi B_\nu(220) = 0.144 \qquad \mathrm{W\,m^{-2}\,(cm^{-1})^{-1}},$$

a contrast of $0.268$. The observed $e$-folding width of the $\mathrm{CO_2}$ band wings is $\Delta \approx 10.2\ \mathrm{cm^{-1}}$, so

$$\Delta F_{2\times} \approx 2(10.2)(0.693)(0.268) = 3.8\ \mathrm{W\,m^{-2}}.$$

*That is the number.* Line-by-line calculations give 3.7 W m⁻² for the pure radiative effect and 3.93 W m⁻² for the effective forcing ([1.4](01-04-radiative-forcing-defined.md) explains the difference). A two-line estimate from band shape lands within a few percent — and, importantly, it is an *estimate from physics*, not a quoted constant.

**Reading the coefficient 5.35.** Since each doubling gives $\Delta F_{2\times}$ and doublings are equal steps in $\ln C$,

$$\Delta F = \frac{\Delta F_{2\times}}{\ln 2}\ln\!\left(\frac{C}{C_0}\right) = \frac{3.71}{0.693}\ln\!\left(\frac{C}{C_0}\right) = 5.35\ln\!\left(\frac{C}{C_0}\right).$$

The 5.35 is not fundamental. It is $\Delta F_{2\times}/\ln 2$, and it inherits every assumption in the doubling number.

## Picture

![Optical depth on a logarithmic vertical axis plotted against wavenumber across the carbon dioxide band. The band forms a tent peaking at four decades of optical depth at 667 wavenumbers and falling off linearly in log space on both sides, which is the exponential wing decay. A dashed horizontal line marks optical depth one. Three coral bars mark the width of the opaque region for present-day, doubled and quadrupled carbon dioxide, and the outward steps between them are equal, which is the geometric content of logarithmic forcing. An annotation notes that the already-opaque band core contributes nothing when more gas is added](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — forcing from the observed rise).** Pre-industrial $\mathrm{CO_2}$ was 280 ppm; it is now about 420 ppm. (a) Compute the forcing to date. (b) How much more is needed to reach a doubling, and what fraction of the way there are we?

(a) $$\Delta F = 5.35\ln\!\left(\frac{420}{280}\right) = 5.35\ln(1.5) = 5.35 \times 0.4055 = 2.17\ \mathrm{W\,m^{-2}}.$$

(b) A doubling is 560 ppm and gives $5.35\ln 2 = 3.71\ \mathrm{W\,m^{-2}}$. The remaining forcing is $3.71 - 2.17 = 1.54\ \mathrm{W\,m^{-2}}$, so we are $2.17/3.71 = 58$ percent of the way to a doubling in *forcing*, having covered $140/280 = 50$ percent of the way in *concentration*.

*The point.* Those two percentages differ, and the direction is the useful part: because the logarithm is concave, the early ppm did more than the late ones will. The 140 ppm we have added produced more forcing than the next 140 ppm will. This is the one genuinely good piece of news in the whole subject, and it is entirely a statement about band shape.

**Example 2 (why you'd care — is methane "worse" than carbon dioxide?).** Methane is often called 80 times more potent than $\mathrm{CO_2}$. Yet its total forcing is about 0.5 W m⁻² against $\mathrm{CO_2}$'s 2.2. Reconcile these.

The potency claim is **per molecule added**, and it is true, for two reasons this lesson supplies. First, $\mathrm{CH_4}$ is on the square-root branch, not the logarithmic one: with $M \approx 1.9$ ppm today, $d(\sqrt M)/dM = 1/(2\sqrt M)$ is large because $M$ is small. Second, its bands at 7.7 micrometres are much less saturated and partly sit toward the window, so a new molecule finds unabsorbed spectrum to work on. A $\mathrm{CO_2}$ molecule added to 420 ppm finds almost none.

But the total forcing is potency **times amount**, and there is 220 000 times more $\mathrm{CO_2}$ in the atmosphere than $\mathrm{CH_4}$. Hence a large per-molecule number and a modest total.

*The general principle.* There is a third asymmetry that the shape of the curves hides and that matters enormously downstream: $\mathrm{CH_4}$ has an atmospheric lifetime of about a decade, while a substantial fraction of a $\mathrm{CO_2}$ pulse persists for millennia ([4.1](04-01-the-carbon-cycle.md)). Methane forcing is a *flow* — stop emitting and it decays away in a couple of decades. $\mathrm{CO_2}$ forcing is a *stock*. Comparing them with a single "equivalent" number necessarily throws that away, which is why the metric you choose changes the policy conclusion.

## Watch out

- **You might think** "the $\mathrm{CO_2}$ band is saturated" means further emissions do not matter. **Actually** saturation of the *core* is precisely the reason the forcing is logarithmic rather than zero — the action moved to the wings, and each doubling blackens the same extra width. Every doubling from here delivers the same 3.7 to 3.9 W m⁻², indefinitely, until the band merges with its neighbours.
- **You might think** the logarithm means "diminishing returns, so we can relax". **Actually** the logarithm is in *concentration*, and concentration responds to *cumulative* emissions, which grow. The composition of a logarithm with an exponential-ish emissions path is close to linear in time. Worse, warming turns out to be nearly linear in cumulative emissions ([4.4](04-04-tcre-carbon-budgets-net-zero.md)) — the logarithm here and the sublinear ocean uptake there very nearly cancel.
- **You might think** the coefficient 5.35 is a constant of nature. **Actually** it is $\Delta F_{2\times}/\ln 2$ and it drifts: it depends on the background state (temperature profile, humidity, clouds, overlapping $\mathrm{H_2O}$ absorption), and it breaks down badly outside roughly 100–1500 ppm. At very high $\mathrm{CO_2}$ the band widens into its neighbours and forcing grows *faster* than logarithmically, which matters for deep-time hothouses ([6.4](06-04-deep-time-slow-thermostat.md)).

## One-liner

> The logarithm is geometry, not curve-fitting: an exponentially decaying band wing means each doubling blackens the same extra sliver of spectrum, so each doubling costs the same 3.7 watts per square metre.

## Problems

**P1 (🟢)** Using $\Delta F = 5.35\ln(C/C_0)$ with $C_0 = 280$ ppm: (a) compute the forcing at 350 ppm, 560 ppm and 1120 ppm; (b) verify that the increments between consecutive doublings are equal, and state the value.

**P2 (🟡)** A hypothetical greenhouse gas has an absorption band with exponential wings of $e$-folding width $\Delta = 4\ \mathrm{cm^{-1}}$, centred at 1000 cm⁻¹ in the atmospheric window. Its band core is already opaque. Take the brightness contrast at that wavenumber to be $\pi[B_\nu(288) - B_\nu(220)] = 0.35\ \mathrm{W\,m^{-2}(cm^{-1})^{-1}}$. (a) Compute the forcing per doubling of this gas. (b) Compare with $\mathrm{CO_2}$'s and explain the two competing factors. (c) Why does the "in the window" detail push the answer in the direction it does?

**P3 (🔴, optional)** In the strong-line (square-root) regime, equivalent width scales as $W \propto \sqrt{u}$, so forcing scales as $\Delta F = a(\sqrt{M} - \sqrt{M_0})$. Methane rose from $M_0 = 0.72$ ppm to $M = 1.92$ ppm, producing about 0.54 W m⁻². (a) Determine $a$. (b) Compute the forcing from the *next* 1.20 ppm of methane (to 3.12 ppm) and compare with the first 1.20 ppm. (c) Do the same comparison for $\mathrm{CO_2}$ going 280 → 420 → 560 ppm, and state in one sentence which functional form saturates faster.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta F(350) = 5.35\ln(350/280) = 5.35\ln(1.25) = 5.35\times0.2231 = 1.19\ \mathrm{W\,m^{-2}},$$
$$\Delta F(560) = 5.35\ln 2 = 3.71\ \mathrm{W\,m^{-2}}, \qquad \Delta F(1120) = 5.35\ln 4 = 7.42\ \mathrm{W\,m^{-2}}.$$

(b) Increments: $280\to560$ gives $3.71 - 0 = 3.71$; $560\to1120$ gives $7.42 - 3.71 = 3.71$. Equal, at **3.71 W m⁻² per doubling** — which is the definition of logarithmic dependence, since $\ln(2C/C) = \ln 2$ regardless of $C$.

**P2** (a) $$\Delta F_{2\times} = 2\Delta\ln 2 \cdot \pi\Delta B = 2(4)(0.693)(0.35) = 1.94\ \mathrm{W\,m^{-2}}.$$

(b) Roughly half of $\mathrm{CO_2}$'s 3.8 W m⁻². Two factors pull in opposite directions. The band is **narrower** ($\Delta = 4$ against 10.2), which cuts the forcing by a factor 2.55 — this dominates. But the **brightness contrast is larger** (0.35 against 0.268), by a factor 1.31, because at 1000 cm⁻¹ the Planck curve is not yet far down its tail at 288 K while the 220 K emission is very weak there. Net: $2.55/1.31 = 1.95$, matching the ratio $3.8/1.94$.

(c) Being "in the window" means the *pre-existing* opacity from water vapour and $\mathrm{CO_2}$ at that wavenumber is small, so this gas's band is not overlapped by anything. Every square metre of spectrum it blackens is spectrum that was previously letting surface radiation straight out to space, so the full brightness contrast $B(T_s) - B(T_c)$ is realized. A band that overlapped an already-opaque $\mathrm{H_2O}$ region would deliver a fraction of that, because the escaping radiation was already coming from a cold level.

**P3** (a) $$a = \frac{0.54}{\sqrt{1.92}-\sqrt{0.72}} = \frac{0.54}{1.3856 - 0.8485} = \frac{0.54}{0.5371} = 1.005 \approx 1.01\ \mathrm{W\,m^{-2}\,ppm^{-1/2}}.$$

(b) Next 1.20 ppm, $1.92 \to 3.12$ ppm:

$$\Delta F = 1.005\left(\sqrt{3.12} - \sqrt{1.92}\right) = 1.005(1.7664 - 1.3856) = 1.005 \times 0.3808 = 0.383\ \mathrm{W\,m^{-2}}.$$

Against 0.54 W m⁻² for the first 1.20 ppm — a ratio of 0.71.

(c) $\mathrm{CO_2}$: first 140 ppm gives $5.35\ln(420/280) = 2.17$; next 140 ppm gives $5.35\ln(560/420) = 1.54$. Ratio 0.71 as well — coincidentally almost identical here, but the *asymptotics* differ sharply. The square-root form has $dF/dM \propto M^{-1/2}$ while the logarithm has $dF/dC \propto C^{-1}$, so **the logarithm saturates faster**. Push both further and the gap opens: another doubling of $\mathrm{CH_4}$ from 3.12 to 6.24 ppm gives $1.005(2.498-1.766) = 0.74$ W m⁻², *more* than the previous step, whereas every $\mathrm{CO_2}$ doubling is stuck at 3.71 forever. A square-root gas keeps rewarding doublings; a logarithmic one does not.

*Check.* The methane increments $0.54, 0.383, 0.74$ are not monotone because the first two are equal *absolute* increments (1.20 ppm each) while the third is a doubling. Comparing like with like: equal absolute additions give decreasing forcing (square-root is concave), equal doublings give increasing forcing (since $\sqrt{2M}-\sqrt{M} = (\sqrt2-1)\sqrt{M}$ grows with $M$).

</details>

## Flashback

**From Lesson 1.1 (The climate system and its timescales):** Ocean heat content in the top 2000 m rose by about $3.8\times10^{23}$ J over the 30 years 1993–2022. Earth's surface area is $5.1\times10^{14}\ \mathrm{m^2}$ and the atmosphere's heat capacity is $1.04\times10^{7}\ \mathrm{J\,m^{-2}\,K^{-1}}$. (a) Convert the ocean heat gain to a mean planetary energy imbalance in W m⁻². (b) Suppose that same energy had gone into the atmosphere instead. How much would it have warmed? (c) What does the comparison say about which reservoir to measure if you want to detect a small imbalance?

<details>
<summary>Solution</summary>

(a) Thirty years is $30 \times 3.156\times10^{7} = 9.47\times10^{8}$ s, so the mean power is

$$P = \frac{3.8\times10^{23}}{9.47\times10^{8}} = 4.01\times10^{14}\ \mathrm{W},$$

and per square metre of the whole planet,

$$N = \frac{4.01\times10^{14}}{5.1\times10^{14}} = 0.79\ \mathrm{W\,m^{-2}}.$$

(b) The atmosphere's total heat capacity is $1.04\times10^{7} \times 5.1\times10^{14} = 5.30\times10^{21}\ \mathrm{J\,K^{-1}}$, so

$$\Delta T = \frac{3.8\times10^{23}}{5.30\times10^{21}} = 72\ \mathrm{K}.$$

(c) Measure the **ocean**. The same energy that raises ocean temperature by a few hundredths of a kelvin would have cooked the atmosphere by 72 K — which is exactly why ocean heat content, not surface temperature, is the cleanest observational estimate of the planetary energy imbalance. It integrates the imbalance rather than reflecting it instantaneously, so internal variability that merely moves heat between ocean and atmosphere (an El Niño, say) barely registers, while a genuine top-of-atmosphere imbalance accumulates steadily. The price is that you need a global array of profiling floats to measure it, which is why the record only becomes reliable after Argo reached full deployment around 2005.

*Check.* The imbalance of 0.79 W m⁻² recovered here is essentially the 0.8 W m⁻² used as $\Delta N$ in the energy-budget sensitivity constraint of [3.3](03-03-constraining-sensitivity-observations.md) — and note it is small compared with the 2.17 W m⁻² of $\mathrm{CO_2}$ forcing computed in Example 1 above, which is the quantitative statement that most of the forcing is already being radiated away rather than stored.

</details>

## Connections

- **Backward:** [1.2](01-02-gray-atmosphere-radiative-equilibrium.md) showed the gray model gives the wrong functional form for forcing; this lesson supplies the band structure that fixes it. The emission-level framing is [atmospheric-science 3.3](../../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md)'s.
- **Forward:** the 3.7 W m⁻² computed here is the *instantaneous* forcing; [1.4](01-04-radiative-forcing-defined.md) shows why the number quoted by IPCC is 3.93, and [1.5](01-05-forcing-agents.md) puts every other agent alongside it.
- **Sideways (quantum chemistry):** which vibrational modes absorb, and at what frequency, is set by whether the mode changes the molecule's dipole moment — the infrared selection rule of [`general-chemistry` 1.5](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md). $\mathrm{CO_2}$ is linear and symmetric, so its *symmetric stretch* is infrared-inactive; the bending and asymmetric-stretch modes are active, and the bend is the one that lands at 667 cm⁻¹. The entire climate problem rides on a selection rule.

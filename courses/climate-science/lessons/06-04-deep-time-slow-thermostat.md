# Climate Physics · Lesson 6.4: Deep time and the slow thermostat

> ⏱ ~15 min · Module 6: Models, deep time and the long view · Builds on: [6.1](06-01-energy-balance-models-bistability.md), [4.1](04-01-the-carbon-cycle.md), [geology 3.1](../../geology/lessons/03-01-weathering-soils.md), [geology 5.2](../../geology/lessons/05-02-earth-history-hadean-proterozoic.md) · Unlocks: [6.5](06-05-scenarios-projections-intervention.md)

## Why this matters

The Sun was 25 percent fainter when life began, and the oceans did not freeze. Over four billion years, through a factor-of-1.3 change in solar luminosity, several near-total glaciations and $\mathrm{CO_2}$ swings of two orders of magnitude, Earth has kept liquid water essentially continuously. That is not luck — there is a thermostat, and it is the reaction between $\mathrm{CO_2}$ and silicate rock. Understanding it does two things: it resolves the faint young Sun paradox quantitatively, and it establishes, with a number, exactly why it cannot help us. **The thermostat's response time is $10^{5}$ years and its throughput is a fiftieth of our emissions.** It is the reason Earth is habitable and it is irrelevant on any timescale we care about.

## The idea

**Stars brighten as they age.** Hydrogen fusion converts four protons into one helium nucleus, reducing the number of particles in the core, so the core must contract and heat to maintain pressure — which raises the fusion rate. Standard solar models give about 70 percent of today's luminosity at 4.5 Gyr ago, rising roughly 7 percent per billion years.

**With today's greenhouse, the early Earth is a snowball.** $T_e$ scales as $L^{1/4}$, so a 26 percent luminosity deficit is a 7 percent drop in $T_e$ — about 18 K. Add today's 33 K greenhouse and the Archean surface is at $-4$ °C. The rock record shows liquid water from at least 3.8 Gyr ago, with sedimentary rocks, pillow lavas and probably life. **The paradox.**

**Resolution: the greenhouse was stronger, and something kept adjusting it.** More $\mathrm{CO_2}$, plus methane (which could accumulate to high concentrations in an anoxic atmosphere before the Great Oxidation), plus lower albedo from less continental area and fewer cloud condensation nuclei. But a fixed higher greenhouse would not do — as the Sun brightened, the planet would have overheated. **Something had to remove $\mathrm{CO_2}$ at just the rate the Sun brightened.**

**The [silicate weathering thermostat](../reference.md#silicate-weathering-thermostat) does exactly that.** Rain, made acidic by dissolved $\mathrm{CO_2}$, chemically weathers silicate rocks; the dissolved products are carried to the ocean and deposited as carbonate. Volcanoes return $\mathrm{CO_2}$ from the subducted carbonate. Weathering **speeds up when it is warmer and wetter**, so a warm planet draws down $\mathrm{CO_2}$ faster, which cools it. A negative feedback with a set point.

**And it is hopelessly slow for us.** The thermostat's throughput is about 0.2 PgC per year — roughly one fiftieth of human emissions. Its response time is of order $10^{5}$ years. The PETM, 56 Myr ago, is the direct observational confirmation: a comparable carbon release took about 150 000 years to clear.

## The formal version

**Solar brightening.** A convenient fit to the standard solar model:

$$\frac{L(t)}{L_0} = \left[1 + 0.4\left(1-\frac{t}{t_0}\right)\right]^{-1}, \qquad t_0 = 4.57\ \mathrm{Gyr},$$

with $t$ the Sun's age. At 3.8 Gyr *ago* ($t = 0.77$ Gyr), $L/L_0 = 0.75$.

**The paradox, computed.** $T_e = 254.58\,(L/L_0)^{1/4}$:

| Time (Gyr ago) | $L/L_0$ | $T_e$ (K) | $T_s$ with 33 K greenhouse |
|---|---|---|---|
| 4.0 | 0.741 | 236.2 | 269.2 K $= -4.0$ °C |
| 3.0 | 0.792 | 240.2 | 273.2 K $= 0.0$ °C |
| 2.0 | 0.851 | 244.5 | 277.5 K $= +4.4$ °C |
| 0 | 1.000 | 254.6 | 287.6 K $= +14.4$ °C |

*In words: with today's atmosphere, Earth's surface would have been below freezing until about 3.0 Gyr ago.* The record says otherwise — and there is a second, sharper form of the paradox: the *ocean* would have frozen, and once frozen, the ice–albedo bistability of [6.1](06-01-energy-balance-models-bistability.md) would have locked it in. The early Earth cannot have been briefly frozen and recovered; it must never have frozen.

**How much extra greenhouse?** To hold $T_s = 288$ K at 3.8 Gyr ago requires an extra

$$\Delta T = 288 - 269.9 = 18.1\ \mathrm{K},$$

hence $\Delta F = \lambda\,\Delta T = 1.3\times18.1 = 23.5\ \mathrm{W\,m^{-2}}$. In $\mathrm{CO_2}$ terms,

$$\frac{C}{C_0} = e^{23.5/5.35} = e^{4.39} = 81, \qquad C = 81\times280 = 22\,700\ \mathrm{ppm} \approx 2.3\ \text{percent of the atmosphere}.$$

*In words: about 0.02 bar of $\mathrm{CO_2}$, eighty times pre-industrial.* Two caveats. The logarithmic law is being extrapolated well past its range and understates the forcing at high concentration, so the true requirement is somewhat lower. And $\lambda$ itself is state-dependent. Take 0.01–0.03 bar as the order of magnitude.

**Is that consistent with the evidence?** Partly. Palaeosol and siderite constraints suggest Archean $\mathrm{CO_2}$ below about 10 to 30 times pre-industrial — less than needed. The shortfall is made up by:

- **Methane.** In an anoxic atmosphere (before the Great Oxidation at 2.4 Ga, [geology 5.2](../../geology/lessons/05-02-earth-history-hadean-proterozoic.md)), $\mathrm{CH_4}$ has no oxidative sink and can reach hundreds to thousands of ppm rather than today's 1.9. Methanogens were among the earliest metabolisms.
- **Lower albedo.** Less continental area (more dark ocean), and — a genuinely elegant argument — fewer biological sources of cloud condensation nuclei, giving optically thinner marine clouds and a lower planetary albedo ([1.5](01-05-forcing-agents.md)'s aerosol indirect effect, run backwards).

**And it is not a coincidence that the Huronian glaciation follows the Great Oxidation.** The rise of oxygen destroyed the atmospheric methane, removing a large greenhouse forcing, and Earth's first known global glaciations occurred immediately afterward — one of the clearest cause-and-effect sequences in Earth history.

**The silicate weathering thermostat.** The net reaction, summed over weathering on land and carbonate deposition in the ocean, is:

$$\mathrm{CaSiO_3} + \mathrm{CO_2} \longrightarrow \mathrm{CaCO_3} + \mathrm{SiO_2}.$$

In detail ([geology 3.1](../../geology/lessons/03-01-weathering-soils.md)): $\mathrm{CO_2}$ dissolves in rainwater to make carbonic acid; it attacks silicate minerals, releasing $\mathrm{Ca^{2+}}$ and $\mathrm{HCO_3^-}$; rivers carry these to the ocean; organisms precipitate $\mathrm{CaCO_3}$; the carbonate is buried and eventually subducted, where metamorphism returns $\mathrm{CO_2}$ to volcanoes.

The weathering rate rises with temperature and with $\mathrm{CO_2}$, through reaction kinetics, through runoff (a warmer world has a more vigorous hydrological cycle, [5.1](05-01-hydrological-cycle-response.md)), and through the acidity of rain:

$$W = W_0\left(\frac{p\mathrm{CO_2}}{p\mathrm{CO_2},0}\right)^{0.3}\exp\!\left(\frac{T-T_0}{13.7\ \mathrm{K}}\right).$$

*In words: weathering roughly doubles for every 10 K of warming, and rises as the 0.3 power of $\mathrm{CO_2}$.* Steady state requires weathering to balance volcanic outgassing:

$$W(T, p\mathrm{CO_2}) = V.$$

**That single equation is the thermostat.** Increase the solar constant and the planet warms; weathering accelerates; $\mathrm{CO_2}$ falls until weathering returns to $V$; the planet cools back. The equilibrium temperature is set by the *outgassing rate*, not by the solar constant — which is the remarkable part. As the Sun brightened 30 percent, $\mathrm{CO_2}$ fell by two orders of magnitude and the temperature barely moved.

**The thermostat's own feedback parameter.** Differentiating at fixed $V$:

$$0 = \frac{\partial W}{\partial T} + \frac{\partial W}{\partial p\mathrm{CO_2}}\frac{dp\mathrm{CO_2}}{dT} \quad\Longrightarrow\quad \frac{d\ln p\mathrm{CO_2}}{dT} = -\frac{1/13.7}{0.3} = -0.243\ \mathrm{K^{-1}}.$$

Each kelvin of warming costs 24 percent of the atmospheric $\mathrm{CO_2}$ at steady state — worth $5.35\times0.243 = 1.3\ \mathrm{W\,m^{-2}}$ per kelvin. **So the weathering thermostat has an effective feedback parameter of about $1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ — comparable to the entire fast-feedback $\lambda$.** In the very long run it roughly halves the sensitivity to any sustained forcing.

**And now the timescale, which is everything.** The response time is the reservoir divided by the flux:

$$\tau_{\text{weathering}} = \frac{C_{\text{atm}}+C_{\text{ocean}}}{W} \approx \frac{38\,900\ \mathrm{PgC}}{0.2\ \mathrm{PgC\,yr^{-1}}} \approx 2\times10^{5}\ \mathrm{yr}.$$

And the throughput comparison:

$$\frac{\text{anthropogenic emissions}}{\text{silicate weathering flux}} = \frac{10.8}{0.2} = 54.$$

*In words: we are emitting carbon fifty times faster than the thermostat can remove it, and the thermostat's response time is two thousand times longer than the century we care about.* **The thermostat is not slow in a way that could be waited out; it is slow in a way that makes it entirely absent from the problem.** This is the quantitative content of the syllabus's Boss Problem 6(d), and it is the single most important fact about geological carbon cycling for a modern reader.

**The PETM as the empirical check.** At 56 Ma the Palaeocene–Eocene Thermal Maximum saw 4 to 5 K of global warming in under 20 kyr, driven by the release of 3000 to 7000 PgC (source contested: methane hydrates, thermogenic methane from volcanic intrusion into organic sediments, or permafrost). Recovery took **about 150 000 years** — the direct measurement of the silicate-weathering timescale, and the reason we know the $10^{5}$-year figure is right rather than merely calculated.

Two differences from today matter. Our release is roughly **ten times faster** — a few centuries against a few millennia — which matters enormously for ocean chemistry, since a slow release lets carbonate sediment dissolution buffer the acidification ([4.3](04-03-ocean-acidification.md)) and a fast one does not. And the PETM began from a much warmer, ice-free baseline, so it is a good analogue for the carbon cycle and a poor one for ice sheets.

**Hothouse and icehouse.** The last 50 Myr have been a sustained cooling, from an ice-free Eocene at perhaps 1000 ppm to the Pleistocene at 180–280 ppm. Candidate drivers, all operating through the thermostat's set point: **increased weatherability** from Himalayan and Andean uplift (fresh rock, high relief, high runoff — the same weathering at lower $\mathrm{CO_2}$), and **reduced outgassing** from declining sea-floor spreading rates. Both lower the equilibrium $p\mathrm{CO_2}$, and the resulting cooling eventually crossed the threshold for permanent Antarctic ice at about 34 Ma and for Northern Hemisphere glaciation at about 3 Ma — which set the stage for [6.3](06-03-ice-ages-100-kyr-problem.md).

## Picture

![Surface temperature against time over the last four billion years. The blue curve shows what the temperature would have been with today's 33 K greenhouse effect and the Sun's actual increasing luminosity: below the dashed freezing line until about three billion years ago. The coral curve shows the temperature inferred from the rock record, remaining above freezing throughout apart from brief excursions labelled Huronian and Snowball. The gap between them at four billion years, marked with an arrow, is about 18 K of extra greenhouse effect that must have been present](assets/06-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the faint young Sun, fully).** At 3.8 Ga the Sun was 75 percent as luminous as today. (a) Compute $T_e$ and its drop from today's 254.6 K. (b) With today's 33 K greenhouse, compute the surface temperature. (c) Compute the $\mathrm{CO_2}$ concentration needed to hold 288 K, using $\lambda = 1.3$.

(a) $$T_e = 254.6\times(0.75)^{1/4} = 254.6\times0.9306 = 236.9\ \mathrm{K},$$

a drop of $254.6-236.9 = 17.7$ K.

(b) $$T_s = 236.9 + 33 = 269.9\ \mathrm{K} = -3.2\ ^\circ\mathrm{C}.$$

Below freezing — the paradox.

(c) $$\Delta T = 288 - 269.9 = 18.1\ \mathrm{K}, \qquad \Delta F = 1.3\times18.1 = 23.5\ \mathrm{W\,m^{-2}},$$
$$\frac{C}{C_0} = e^{23.5/5.35} = 81, \qquad C = 22\,700\ \mathrm{ppm}.$$

*The point.* Note the leverage in the quarter-power: a **25 percent** cut in luminosity gives only a **7 percent** cut in $T_e$. Stefan–Boltzmann is enormously forgiving of luminosity changes, which is a large part of why habitable zones are as wide as they are. The remaining 18 K still has to come from somewhere, and 80 times pre-industrial $\mathrm{CO_2}$ — 2 percent of the atmosphere — is a lot but not an outlandish amount for a young, vigorously outgassing planet with no land plants to accelerate weathering.

**Example 2 (why you'd care — can enhanced weathering help?).** Enhanced rock weathering — grinding basalt and spreading it on farmland to accelerate the reaction — is a proposed carbon removal method. Natural silicate weathering consumes 0.2 PgC per year. (a) By what factor must it be enhanced to remove 1 PgC per year? (b) Estimate the rock tonnage required, taking 1 tonne of basalt to capture 0.3 tonnes of $\mathrm{CO_2}$. (c) Compare with global mining.

(a) $$\frac{0.2 + 1.0}{0.2} = 6\times$$ the natural global rate — from a deliberate industrial operation.

(b) 1 PgC $= 3.664\ \mathrm{GtCO_2}$, so at 0.3 tonnes of $\mathrm{CO_2}$ per tonne of rock,

$$\frac{3.664\times10^{9}}{0.3} = 1.2\times10^{10}\ \mathrm{t\,yr^{-1}} = 12\ \mathrm{Gt\ of\ rock\ per\ year}.$$

(c) Total global mining of all materials — coal, ore, aggregate, everything — is roughly 60 Gt per year. So removing 1 PgC per year by enhanced weathering requires an operation about **20 percent the size of all mining on Earth**, and 1 PgC per year is under 10 percent of current emissions.

*The general principle.* **The thermostat is slow because the flux is small, and the flux is small because the rock has to be moved and ground.** Enhanced weathering multiplies the natural rate by brute force — which is why it is not obviously absurd (the chemistry is free and permanent, unlike biological storage, [4.1](04-01-the-carbon-cycle.md)) and why it does not scale easily. The energy cost of grinding, the land area, and the transport are the binding constraints, not the chemistry. It is a real option at the 0.1 to 1 PgC per year scale and not at the 10 PgC scale.

## Watch out

- **You might think** the weathering thermostat means the climate is self-correcting, so warming will fix itself. **Actually** its response time is $2\times10^{5}$ years and its throughput is a fiftieth of our emissions. It will remove the last fifth of our $\mathrm{CO_2}$ pulse ([4.1](04-01-the-carbon-cycle.md)'s $a_0$), on a timescale of a hundred thousand years. **It is why Earth stays habitable across geological time and it is completely absent from the human problem.**
- **You might think** the faint young Sun paradox is resolved by $\mathrm{CO_2}$ alone. **Actually** the palaeosol constraints do not permit enough of it. Methane in an anoxic atmosphere and a lower planetary albedo are both required, and the post-oxidation collapse of atmospheric methane is the likeliest trigger for the Huronian glaciations — which is a satisfying and testable consequence.
- **You might think** the PETM is a good analogue for today. **Actually** it is a good analogue for the carbon cycle's *recovery* and a poor one for the transient. Its release was roughly ten times slower, which allowed carbonate sediment dissolution to buffer the acidification; and it began from an ice-free world, so it says nothing about ice-sheet response. It is best used as the empirical measurement of the $10^{5}$-year recovery timescale, which is what it measures unambiguously.

## One-liner

> The silicate thermostat has kept Earth habitable across a thirty-percent brightening of the Sun, with a feedback strength comparable to all the fast feedbacks combined — and a response time of two hundred thousand years, which is why it is both the reason we exist and no help at all.

## Problems

**P1 (🟢)** At 2.5 Gyr ago the Sun's luminosity was 82 percent of today's. (a) Compute $T_e$. (b) With today's 33 K greenhouse, compute the surface temperature in °C. (c) Compute the extra forcing needed to reach 288 K with $\lambda = 1.3$, and the corresponding $\mathrm{CO_2}$ multiple of pre-industrial.

**P2 (🟡)** The weathering law is $W = W_0(p/p_0)^{0.3}\exp[(T-T_0)/13.7]$, and steady state requires $W = V$. (a) If volcanic outgassing $V$ doubles, and temperature responds to $\mathrm{CO_2}$ as $\Delta T = (5.35/\lambda)\ln(p/p_0)$ with $\lambda = 1.3$, find the new steady-state $p/p_0$ and $\Delta T$. (b) Repeat with the temperature dependence switched off (only the $p^{0.3}$ term). (c) Comment on which term does most of the regulating.

**P3 (🔴, optional)** The PETM released 4000 PgC over 5 kyr and recovered over 150 kyr. Humanity has released about 700 PgC over 270 years and may release 1500 PgC total. (a) Compute the mean release rate in PgC per year for each. (b) Compute the ratio. (c) Ocean acidification severity depends on the release rate relative to the ~10 kyr timescale of carbonate sediment dissolution; explain which event produces the more severe acidification and why, and state one observable consequence in the sedimentary record that distinguishes them.

<details>
<summary>Solutions</summary>

**P1** (a) $$T_e = 254.6\times(0.82)^{1/4} = 254.6\times0.9515 = 242.2\ \mathrm{K}.$$

(b) $$T_s = 242.2+33 = 275.2\ \mathrm{K} = +2.1\ ^\circ\mathrm{C}.$$

Just above freezing — the paradox is milder by 2.5 Ga but the planet would be at the edge, and given the ice–albedo bistability of [6.1](06-01-energy-balance-models-bistability.md), being at the edge is not a safe place to be.

(c) $$\Delta T = 288 - 275.2 = 12.8\ \mathrm{K}, \qquad \Delta F = 1.3\times12.8 = 16.6\ \mathrm{W\,m^{-2}},$$
$$\frac{C}{C_0} = e^{16.6/5.35} = e^{3.10} = 22.$$

About 22 times pre-industrial, or 6200 ppm. Note this is comfortably within the palaeosol constraints (which allow up to a few tens of times pre-industrial), so by 2.5 Ga $\mathrm{CO_2}$ alone can close the gap — the methane requirement is specific to the Archean.

**P2** (a) At steady state with the new outgassing, $W = 2V_0 = 2W_0$ (taking the old state as the reference where $p=p_0$, $T=T_0$):

$$2 = \left(\frac{p}{p_0}\right)^{0.3}\exp\!\left(\frac{\Delta T}{13.7}\right), \qquad \Delta T = \frac{5.35}{1.3}\ln\!\left(\frac{p}{p_0}\right) = 4.115\ln\!\left(\frac{p}{p_0}\right).$$

Let $u = \ln(p/p_0)$. Then

$$\ln 2 = 0.3u + \frac{4.115u}{13.7} = 0.3u + 0.3004u = 0.6004u,$$
$$u = \frac{0.6931}{0.6004} = 1.154 \quad\Longrightarrow\quad \frac{p}{p_0} = e^{1.154} = 3.17,$$
$$\Delta T = 4.115\times1.154 = 4.75\ \mathrm{K}.$$

(b) With only the $p^{0.3}$ term regulating (no temperature dependence of weathering):

$$\ln 2 = 0.3u \quad\Longrightarrow\quad u = 2.310, \qquad \frac{p}{p_0} = e^{2.310} = 10.1, \qquad \Delta T = 4.115\times2.310 = 9.51\ \mathrm{K}.$$

(c) The two terms contribute almost exactly equally — the coefficients are $0.300$ and $0.3004$ — but removing the temperature dependence *doubles* both the $\mathrm{CO_2}$ response (3.2× becomes 10×) and the warming (4.8 K becomes 9.5 K). So each term halves the response, and together they quarter it relative to no regulation at all.

The lesson: **the thermostat's strength is the sum of a direct chemical term and a climate-mediated term, and they happen to be comparable.** The temperature term is the one that makes it a *climate* thermostat rather than merely a $\mathrm{CO_2}$ buffer — without it, weathering would still respond to $\mathrm{CO_2}$ but would not care what the temperature was, and the planet's habitability would depend on outgassing far more sensitively.

**P3** (a) PETM: $$\frac{4000}{5000} = 0.8\ \mathrm{PgC\,yr^{-1}}.$$

Anthropogenic to date: $$\frac{700}{270} = 2.6\ \mathrm{PgC\,yr^{-1}}.$$

Projected total: $$\frac{1500}{350} \approx 4.3\ \mathrm{PgC\,yr^{-1}}\ \text{(if spread to 2100)},$$

and the *current* rate is 10.8 PgC per year.

(b) Current rate against PETM: $10.8/0.8 = 13.5$. Mean-to-date against PETM: $2.6/0.8 = 3.3$.

(c) **The modern event produces more severe acidification for a given total release.** The reason is a competition of timescales. When $\mathrm{CO_2}$ enters the ocean, the resulting drop in carbonate ion and saturation state ([4.3](04-03-ocean-acidification.md)) begins to dissolve carbonate sediments on the sea floor, which releases alkalinity and buffers the change — but that process takes 5 to 10 kyr to reach the sediments and act. A release spread over 5 kyr, as at the PETM, is partially buffered *as it happens*. A release over 300 years is not: the full acidification is realized before any sediment dissolution can respond.

The observable that distinguishes them is the **carbonate compensation depth** signature in deep-sea sediment cores. At the PETM the CCD shoaled by more than 2 km, dissolving carbonate that had already been deposited and leaving a distinctive clay layer in cores that is dated and mapped worldwide. That dissolution horizon *is* the buffering, recorded — and its thickness and geographic extent are used to invert for the size and rate of the carbon release. A modern equivalent will form, but the ocean's surface layers will have passed through a lower minimum $\Omega$ first, because the buffering arrives too late.

*Check.* Note the structural repetition: this is the same rate-versus-timescale argument as the ocean heat uptake of [3.1](03-01-ocean-heat-uptake-thermal-inertia.md) and the thermostat of this lesson. **A slow forcing lets a slow buffer act; a fast one does not** — and our defining characteristic, relative to every geological analogue, is speed rather than magnitude.

</details>

## Flashback

**From Lesson 5.2 (Extremes and event attribution):** A tropical region has summer temperature standard deviation $\sigma = 0.35$ K — much smaller than mid-latitude values — and has warmed by 1.2 K. An "extreme" summer is one exceeding the pre-industrial $+2\sigma$ level. (a) Express the warming in standard deviations. (b) Compute $P_0$ and $P_1$, using $\Pr(Z>2) = 0.0228$ and $\Pr(Z>-1.43) = 0.9236$. (c) Compute the risk ratio and explain why the tropics are hit hardest despite warming the least.

<details>
<summary>Solution</summary>

(a) $$\mu = \frac{1.2}{0.35} = 3.43\sigma.$$

(b) $$P_0 = \Pr(Z>2) = 0.0228, \qquad P_1 = \Pr(Z>2-3.43) = \Pr(Z>-1.43) = 0.9236.$$

(c) $$\mathrm{RR} = \frac{0.9236}{0.0228} = 40.5, \qquad \mathrm{FAR} = 1-\frac{1}{40.5} = 0.975.$$

What used to be a once-in-44-years summer now occurs in 92 percent of years.

Why the tropics suffer most despite warming least: **the relevant quantity is warming measured in units of local variability**, not in kelvin. The tropics warm about 0.8 times the global rate — the smallest amplification anywhere — but their interannual variability is three to five times smaller than the mid-latitudes', because the weak Coriolis parameter suppresses the large-scale temperature advection that drives mid-latitude swings ([atmospheric-science 4.2](../../atmospheric-science/lessons/04-02-coriolis-effect.md)). The ratio $\Delta T/\sigma$ is therefore largest there.

The consequence is that tropical climates have already departed further from their historical envelope than anywhere else, and this is the physical basis of "climate emergence" or "time of departure" analyses, which consistently place the tropics first despite the Arctic warming four times faster. It is also, unavoidably, the region with the least adaptive capacity and the smallest historical contribution to emissions.

*Check.* Compare with [5.2](05-02-extremes-event-attribution.md)'s Example 1, where a Mediterranean-like region with $\sigma = 0.8$ K and 1.6 K of warming gave $\mu = 2\sigma$ and RR $= 22$. The tropics get a *larger* risk ratio from *less* warming, purely because $\sigma$ is smaller. Two lessons: risk ratios cannot be compared between regions without knowing $\sigma$, and a region's exposure to extremes is set by a ratio, not by a temperature.

</details>

## Connections

- **Backward:** the ice–albedo bistability that makes an early freeze unrecoverable is [6.1](06-01-energy-balance-models-bistability.md)'s; the slow carbon cycle and the $a_0$ term of the impulse response are [4.1](04-01-the-carbon-cycle.md)'s; the weathering chemistry is [geology 3.1](../../geology/lessons/03-01-weathering-soils.md)'s and the early-Earth evidence [geology 5.2](../../geology/lessons/05-02-earth-history-hadean-proterozoic.md)'s.
- **Forward:** enhanced weathering as a deliberate intervention, and the thermodynamic limits on carbon removal generally, are [6.5](06-05-scenarios-projections-intervention.md)'s.
- **Sideways (stellar evolution):** the solar brightening comes from the main-sequence structure of a star burning hydrogen in its core — the mean molecular weight rises, so the core contracts and heats. See [`astrophysics` 2.5](../../astrophysics/lessons/02-05-main-sequence.md). The habitable-zone consequences, and the comparison with Venus and Mars, belong to [`planetary-science`](../../planetary-science/syllabus.md).

# Atmospheric Science · Lesson 3.6: Ozone photochemistry & the stratosphere

> ⏱ ~15 min · Module 3: Radiation & the atmospheric energy budget · Builds on: [3.3 Radiative transfer & the vertical temperature profile](03-03-radiative-transfer-vertical-profile.md), [1.1 Composition & vertical structure](01-01-composition-vertical-structure.md) · Unlocks: 4.4 (general circulation), 6.4 (observing the atmosphere)

## Why this matters

Lesson 1.1 opened this course by asserting that the stratosphere is warm because ozone absorbs ultraviolet light, and every lesson since has taken that on faith. It is time to pay the debt. Ozone is not a fixed feature of the atmosphere — it is a *steady state*, continuously manufactured and destroyed by sunlight, and understanding the balance explains three things at once: why the layer sits at the altitude it does, why the temperature reverses at the tropopause, and how a few parts per trillion of an industrial refrigerant could tear a hole in it. It is also the one place in this course where atmospheric physics is genuinely atmospheric *chemistry*, and the one environmental problem humanity has actually solved.

## The idea

**Ozone is made and destroyed by the same light it blocks.** Sydney Chapman worked out the cycle in 1930, and it needs four reactions and nothing else.

Ultraviolet light energetic enough to break the $\mathrm{O_2}$ bond splits an oxygen molecule into two atoms. Those atoms are reactive and stick onto other $\mathrm{O_2}$ molecules to make ozone, $\mathrm{O_3}$. But ozone itself absorbs ultraviolet — over a much broader and more useful band — and when it does, it splits back apart. And occasionally a loose oxygen atom meets an ozone molecule and both are destroyed.

Notice what this means: **ozone is not consumed by blocking UV.** The photon that splits an ozone molecule leaves an O atom that promptly recombines. The cycle spins, absorbing ultraviolet at every turn and dumping the energy as heat, without net loss of ozone. That is why the layer is stable, and it is why the stratosphere is warm — the ozone layer is a UV-to-heat converter with a very long service life.

**Why the layer sits where it does.** Making ozone needs two ingredients that vary oppositely with height. Ultraviolet light is abundant at the top of the atmosphere and gets absorbed away as it descends. Oxygen molecules are scarce at the top and abundant near the ground. The production rate is the *product* of the two, so it must peak somewhere in between — specifically, near where the optical depth to space reaches 1, exactly the emission-level logic of [3.3](03-03-radiative-transfer-vertical-profile.md) run in reverse. This structure is general enough to have a name: a **Chapman layer**, and the same reasoning locates the ionosphere's layers.

**Why a trace gas can wreck it.** A **catalyst** is not consumed. A single chlorine atom can destroy an ozone molecule, be regenerated, and destroy another — tens of thousands of times before something finally removes it. That leverage is why chlorofluorocarbons at parts-per-trillion concentrations could measurably deplete a layer built from the atmosphere's second most abundant gas.

## The formal version

**The Chapman cycle.**

$$\mathrm{O_2} + h\nu\ (\lambda < 242\ \mathrm{nm}) \longrightarrow 2\,\mathrm{O} \tag{1}$$
$$\mathrm{O} + \mathrm{O_2} + M \longrightarrow \mathrm{O_3} + M \tag{2}$$
$$\mathrm{O_3} + h\nu\ (\lambda < 320\ \mathrm{nm}) \longrightarrow \mathrm{O_2} + \mathrm{O} \tag{3}$$
$$\mathrm{O} + \mathrm{O_3} \longrightarrow 2\,\mathrm{O_2} \tag{4}$$

*In words: (1) makes oxygen atoms, (2) builds ozone from them, (3) takes ozone apart again without destroying the oxygen, and (4) is the only step that removes odd oxygen for good.* Here $M$ is any third body (usually $\mathrm{N_2}$) that carries away the excess energy so the new bond survives — which is why reaction (2) needs density and therefore fails at very high altitude.

The 242 nm threshold is the $\mathrm{O_2}$ bond energy converted to a wavelength: at 498 kJ mol⁻¹,

$$\lambda_{\max} = \frac{hc}{E} = \frac{1240\ \mathrm{eV\,nm}}{498/96.485\ \mathrm{eV}} = \frac{1240}{5.16} = 240\ \mathrm{nm}.$$

**Reactions (2) and (3) are fast; (1) and (4) are slow.** So O and $\mathrm{O_3}$ interconvert rapidly — thousands of times per ozone lifetime — while the *sum* of the two, called **odd oxygen**, changes only slowly, made by (1) and destroyed by (4). Every turn of the fast pair converts a UV photon into molecular kinetic energy, that is, into heat. **The heating is reaction (3), and it does not consume ozone.**

**The UV bands, and what gets through.**

| Band | Wavelength | Fate |
|---|---|---|
| UV-C | under 280 nm | absorbed completely by $\mathrm{O_2}$ and $\mathrm{O_3}$; none reaches the ground |
| UV-B | 280–315 nm | strongly absorbed by ozone; a few percent gets through — the sunburn and skin-cancer band |
| UV-A | 315–400 nm | barely absorbed; reaches the ground almost entirely |

The ozone layer's protective value lies almost entirely in UV-B, because UV-C never had a chance to reach us anyway and UV-A is not much affected by ozone at all.

**The Chapman layer.** Let oxygen fall off exponentially, $n(z) = n_0e^{-z/H}$, and let the UV intensity be attenuated by Beer's law, $I(z) = I_\infty e^{-\tau(z)}$ with $\tau \propto n(z)$. The production rate is

$$P(z) \propto n(z)\,I(z) = n_0e^{-z/H}\exp\!\left(-\tau_0e^{-z/H}\right).$$

Differentiating and setting $dP/dz = 0$ gives the peak exactly where $\boldsymbol{\tau = 1}$ — one absorption length from the top. *In words: the layer forms where the sunlight has just been used up.*

**Where the ozone actually is.** The production peak sits near 35 to 40 km; the observed ozone *number density* peaks near 22 km, and the discrepancy is real physics, not error. Two reasons: the loss reaction (4) is fast where O atoms are plentiful (high up), so ozone survives longer lower down; and the **Brewer–Dobson circulation** lifts air in the tropics, carries it poleward in the stratosphere, and pushes it down at mid and high latitudes, piling ozone up below its production altitude. Ozone is made over the equator and stored over the poles.

**Dobson units.** Column ozone is quoted as the thickness the whole column would have if brought to standard temperature and pressure:

$$1\ \mathrm{DU} = 0.01\ \mathrm{mm} = 2.687\times10^{20}\ \mathrm{molecules\,m^{-2}}.$$

A typical column is **300 DU**, which is a layer just **3 mm** thick. All of that UV shielding comes from three millimetres of gas.

**Catalytic destruction.** Any species $X$ that can do

$$X + \mathrm{O_3} \to X\mathrm{O} + \mathrm{O_2}, \qquad X\mathrm{O} + \mathrm{O} \to X + \mathrm{O_2}$$

nets $\mathrm{O} + \mathrm{O_3} \to 2\,\mathrm{O_2}$ — reaction (4), catalysed, with $X$ returned intact. The real atmosphere runs three such families: $\mathrm{NO}_x$, $\mathrm{HO}_x$ and $\mathrm{ClO}_x$. Chapman's cycle alone over-predicts ozone by roughly a factor of two; the catalytic cycles account for the difference. A single chlorine atom destroys of order $10^5$ ozone molecules before being locked up as HCl.

**The ozone hole.** Antarctic spring column ozone fell from about 300 DU to near 100 DU during the 1980s, and the mechanism is specifically polar:

1. The winter **polar vortex** isolates Antarctic stratospheric air for months.
2. Temperatures fall below about 195 K, cold enough to form **polar stratospheric clouds**.
3. On those cloud surfaces, *heterogeneous* reactions convert the inert chlorine reservoirs (HCl, $\mathrm{ClONO_2}$) into photolabile $\mathrm{Cl_2}$.
4. Spring sunlight returns, splits the $\mathrm{Cl_2}$, and the catalytic cycles run at full rate in air that has nowhere to mix.

The Montreal Protocol (1987) phased out CFCs, and stratospheric chlorine peaked around 1997 and has been falling since; the hole is now measurably recovering, with full closure expected around 2065. It is the clearest case of a global environmental problem identified, understood and fixed.

## Picture

![Left, a Chapman layer: ultraviolet flux increasing with height, oxygen density decreasing with height, and their product — the ozone production rate — peaking near 38 km where the optical depth reaches one; right, the observed ozone number-density profile peaking lower down near 22 km because transport and the altitude dependence of the loss reaction move it below the production peak](assets/03-06-fig1.svg)

## Worked examples

**Example 1 (mechanical — how thin the shield is).** A column of 300 DU protects the surface. Express it as a thickness at STP and as a number of molecules per square metre, and compare it with the total air column.

$$300\ \mathrm{DU} \times 2.687\times10^{20}\ \mathrm{m^{-2}\,DU^{-1}} = 8.06\times10^{22}\ \mathrm{molecules\,m^{-2}}.$$

At STP the number density is $2.687\times10^{25}\ \mathrm{m^{-3}}$, so the thickness is

$$\frac{8.06\times10^{22}}{2.687\times10^{25}} = 3.0\times10^{-3}\ \mathrm{m} = 3\ \mathrm{mm}.$$

Compare with the whole atmosphere, which from [1.1](01-01-composition-vertical-structure.md) is 8.4 km thick at sea-level density. The ozone is $3\times10^{-3}/8.4\times10^{3} = 3.6\times10^{-7}$ of the column — about **0.36 parts per million** by volume, averaged over the whole atmosphere.

*The point.* Three millimetres of gas, one third of a millionth of the atmosphere, is the entire difference between a habitable land surface and a sterilized one. That such a thin shield could be perturbed by trace industrial chemicals is much less surprising once you have done this arithmetic.

**Example 2 (why you'd care — catalytic leverage).** A chlorine atom destroys $10^5$ ozone molecules before removal. Estimate how much ozone one kilogram of CFC-12 ($\mathrm{CCl_2F_2}$, molar mass 121 g mol⁻¹, two chlorine atoms per molecule) can destroy.

Molecules of CFC in 1 kg:

$$N = \frac{1000\ \mathrm{g}}{121\ \mathrm{g\,mol^{-1}}} \times 6.022\times10^{23} = 8.26 \times 6.022\times10^{23} = 4.98\times10^{24}.$$

Each releases 2 chlorine atoms, each destroying $10^5$ ozone molecules:

$$N_{\mathrm{O_3}} = 4.98\times10^{24} \times 2 \times 10^{5} = 9.95\times10^{29}\ \text{molecules}.$$

As a mass of ozone (48 g mol⁻¹):

$$m = \frac{9.95\times10^{29}}{6.022\times10^{23}} \times 48\ \mathrm{g} = 1.65\times10^{6} \times 48\ \mathrm{g} = 7.9\times10^{4}\ \mathrm{kg}.$$

**One kilogram of CFC-12 can destroy about 80 tonnes of ozone** — a mass amplification of nearly $10^5$, which is simply the catalytic turnover number reappearing. This is why a Protocol banning a few hundred thousand tonnes per year of an apparently innocuous refrigerant was worth negotiating, and why the leverage runs the other way too: stopping emission stops the damage, because the catalyst is eventually removed.

## Watch out

- **You might think** ozone is used up when it absorbs UV. **Actually** reaction (3) splits it, but the resulting O atom promptly re-forms ozone through (2). The fast pair cycles indefinitely, converting UV to heat *without net loss*. Only reaction (4), and the catalytic cycles that imitate it, actually destroy odd oxygen.
- **You might think** the ozone layer sits where ozone is *produced*. **Actually** production peaks near 35 to 40 km while the ozone density peaks near 22 km. Transport by the Brewer–Dobson circulation and the altitude dependence of the loss rate move the reservoir well below its source.
- **You might think** the ozone hole and global warming are the same problem. **Actually** they are nearly independent: the hole is stratospheric chemistry driven by halogens, warming is tropospheric radiation driven by $\mathrm{CO_2}$. They interact only weakly — a cooler stratosphere (a *consequence* of greenhouse warming below) makes polar stratospheric clouds more likely and slightly delays ozone recovery. Confusing the two is the most common error in this area.
- **You might think** stratospheric ozone and ground-level ozone are different substances. **Actually** they are the same molecule in different places, and the value judgement flips entirely: aloft it is a shield, at the surface it is a pollutant and a respiratory irritant produced by photochemical smog. "Good up high, bad nearby."

## One-liner

> Three millimetres of ozone, made and unmade thousands of times a day by the very ultraviolet it absorbs, converts UV into the heat that reverses the atmosphere's temperature gradient — and a catalyst returned intact after every reaction is how a trace gas can undo it.

## Problems

**P1 (🟢)** A satellite measures 220 DU over Antarctica in October, against a pre-1980 normal of 300 DU. (a) Express both as thicknesses at STP. (b) What percentage of the column has been lost?

**P2 (🟡)** (a) The $\mathrm{O_2}$ bond energy is 498 kJ mol⁻¹. Verify the 242 nm photolysis threshold. (b) Ozone's weakest bond is 105 kJ mol⁻¹; compute the corresponding threshold wavelength. (c) Explain why the *observed* ozone photolysis threshold quoted in the lesson is 320 nm rather than your answer to (b), and what that tells you about which channel matters.

**P3 (🔴, optional)** Show that a Chapman layer peaks where the optical depth equals 1. Take the production rate $P(z) \propto n(z)I(z)$ with $n(z) = n_0e^{-z/H}$ and $I(z) = I_\infty e^{-\tau(z)}$, where for an overhead sun $\tau(z) = \sigma n(z)H$. (a) Write $P$ in terms of $\tau$ alone. (b) Maximize it and show the peak is at $\tau = 1$. (c) State in one sentence what the peak altitude does when the sun is low in the sky, and why.

<details>
<summary>Solutions</summary>

**P1** (a) Using $1\ \mathrm{DU} = 0.01$ mm:

$$300\ \mathrm{DU} = 3.00\ \mathrm{mm}, \qquad 220\ \mathrm{DU} = 2.20\ \mathrm{mm}.$$

(b) $$\frac{300-220}{300} = \frac{80}{300} = 0.267 \approx 27\ \text{percent}.$$

*Check.* The conventional threshold for calling something an "ozone hole" is 220 DU, which is why that number was chosen for this problem — it is the definition, not an arbitrary value. At the worst, in the early 2000s, Antarctic October minima reached about 100 DU, a two-thirds loss, or 1 mm of ozone remaining.

**P2** (a) Convert the bond energy per molecule and use $E = hc/\lambda$:

$$E = \frac{498\ \mathrm{kJ\,mol^{-1}}}{96.485\ \mathrm{kJ\,mol^{-1}\,eV^{-1}}} = 5.16\ \mathrm{eV}, \qquad \lambda = \frac{1240\ \mathrm{eV\,nm}}{5.16\ \mathrm{eV}} = 240\ \mathrm{nm}.$$

Confirmed — the 242 nm quoted in the lesson, to within the precision of the bond energy.

(b) $$E = \frac{105}{96.485} = 1.088\ \mathrm{eV}, \qquad \lambda = \frac{1240}{1.088} = 1140\ \mathrm{nm}.$$

That is in the **near infrared** — ozone is energetically easy to break apart compared with $\mathrm{O_2}$.

(c) Two things. First, energetic accessibility is not the same as absorption: a molecule only dissociates at wavelengths it actually *absorbs*, and ozone's strong Hartley band lies in the ultraviolet, not the infrared, so the 1140 nm channel is essentially never driven. Second, the 320 nm figure corresponds to the channel that produces an **electronically excited** oxygen atom, $\mathrm{O(^1D)}$, rather than a ground-state one — a higher-energy, and atmospherically far more important, outcome, because $\mathrm{O(^1D)}$ is reactive enough to attack water vapor and start the $\mathrm{HO}_x$ chemistry.

The lesson: a threshold computed from bond energy alone is a *lower bound on the photon energy*, not a prediction of what actually happens. Which channel matters is set by the absorption spectrum and by what the products go on to do.

**P3** (a) Since $\tau(z) = \sigma n(z)H$, we can write $n(z) = \tau/(\sigma H)$. Then

$$P \propto n\,I = \frac{\tau}{\sigma H}\,I_\infty e^{-\tau} \;\propto\; \tau e^{-\tau}.$$

All the altitude dependence has collapsed into a single variable.

(b) $$\frac{dP}{d\tau} \propto \frac{d}{d\tau}\left(\tau e^{-\tau}\right) = e^{-\tau} - \tau e^{-\tau} = e^{-\tau}(1-\tau).$$

This vanishes at $\boxed{\tau = 1}$, and since $e^{-\tau} > 0$ always, the derivative is positive for $\tau < 1$ and negative for $\tau > 1$ — so $\tau = 1$ is a maximum, not an inflection.

(c) **The peak moves higher.** A low sun means a longer slant path ([3.3](03-03-radiative-transfer-vertical-profile.md)'s airmass factor $1/\cos\theta$), so $\tau$ accumulates faster with depth and reaches 1 at a greater altitude. The layer effectively rides up and down with the solar zenith angle, which is directly observed in the ionosphere's daily behaviour — the same Chapman mathematics governs the E and F layers, and their altitudes swing between noon and dusk for exactly this reason.

*Check.* The function $\tau e^{-\tau}$ has maximum value $1/e = 0.368$, so the peak production rate is $1/e$ of what it would be if the full unattenuated flux met the full density — a factor that appears in every Chapman-layer problem and is worth recognizing.

</details>

## Flashback

**From Lesson 3.3 (Radiative transfer & the vertical temperature profile):** A greenhouse-gas increase raises the mean emission level by 220 m. Take $\sigma = 5.67\times10^{-8}$, $T_e = 254.6$ K and $\Gamma = 6.5\ \mathrm{K\,km^{-1}}$. (a) Compute the reduction in outgoing longwave radiation. (b) Compute the surface warming needed to restore balance, with no feedbacks.

<details>
<summary>Solution</summary>

(a) The emission level's temperature falls as it rises, so the flux it radiates falls too:

$$\delta F = 4\sigma T_e^3\,\Gamma\,\delta z.$$

Working the coefficient: $4\sigma T_e^3 = 4 \times 5.67\times10^{-8} \times (254.6)^3 = 4 \times 5.67\times10^{-8} \times 1.651\times10^{7} = 3.743\ \mathrm{W\,m^{-2}\,K^{-1}}$, and multiplying by the lapse rate, $3.743 \times 6.5\times10^{-3} = 0.02433\ \mathrm{W\,m^{-2}}$ per metre. So

$$\delta F = 0.02433 \times 220 = 5.35\ \mathrm{W\,m^{-2}}.$$

(b) The level rose 220 m and therefore cooled by $6.5\times0.220 = 1.43$ K; restoring balance requires warming it — and, if the whole profile shifts uniformly, the surface — by the same amount:

$$\delta T = \frac{\delta F}{4\sigma T_e^3} = \frac{5.35}{3.743} = 1.43\ \mathrm{K}.$$

*Check.* The two routes agree exactly, as they must: one asks how much the level cooled, the other how much flux that costs, and they differ only by the factor $4\sigma T_e^3$.

Connecting to this lesson: ozone is a greenhouse gas too, but its radiative role is split. In the *troposphere* it adds to the greenhouse effect in the usual way; in the *stratosphere*, where it absorbs solar ultraviolet directly, losing ozone actually **cools** the layer. So the observed stratospheric cooling of recent decades has two causes working the same direction — more $\mathrm{CO_2}$ radiating to space from above the emission level, and less ozone absorbing sunlight — which is why stratospheric cooling alongside tropospheric warming is treated as a fingerprint of greenhouse forcing rather than of solar change.

</details>

## Connections

- **Backward:** this closes the loop opened in [1.1](01-01-composition-vertical-structure.md), which asserted the stratosphere is warm because of ozone — the heating is reaction (3), and the Chapman-layer argument locates it. The $\tau = 1$ peak is [3.3](03-03-radiative-transfer-vertical-profile.md)'s emission-level reasoning applied to absorption instead of emission.
- **Forward:** the Brewer–Dobson circulation is a stratospheric cousin of [4.4](04-04-thermal-wind-general-circulation.md)'s Hadley cell, and the polar vortex reappears there; [6.4](06-04-observing-the-atmosphere.md) covers the satellite instruments that map column ozone daily.
- **Sideways (chemistry):** the catalytic cycle — a species consumed in one step and regenerated in the next, unchanged overall — is the defining structure of catalysis from [`physical-chemistry` 3.3](../../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md), and the fast-pair/slow-pair separation that defines odd oxygen is precisely that lesson's steady-state approximation.

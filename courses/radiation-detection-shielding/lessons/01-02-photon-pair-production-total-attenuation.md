# Radiation Detection & Shielding · Lesson 1.2: Photon interactions II — pair production & total attenuation

> ⏱ ~15 min · Module 1: Radiation interactions & detector physics · Builds on: [1.1 Photoelectric & Compton](01-01-photon-photoelectric-compton.md), [`intro-nuclear-engineering`](../../intro-nuclear-engineering/syllabus.md) · Unlocks: [1.3 Charged particles: stopping power & range](01-03-charged-particles-stopping-power-range.md), [4.1 Exponential attenuation & HVL](04-01-exponential-attenuation-hvl.md)

## Why this matters

A shield designer, a spectroscopist, and a dosimetrist all ask the same first question about a gamma: *how far does it get before it does something?* That "something" is one of three competing processes — and in [1.1](01-01-photon-photoelectric-compton.md) you met two of them. This lesson adds the third (pair production), then does the move that makes the whole subject usable: it **bundles all three into a single number**, the total attenuation coefficient $\mu$. Once you have $\mu$, the beam obeys one clean exponential law, and every shield calculation in Module 4 is downstream of it. As a bonus, pair production is what plants the tell-tale 0.511 MeV line and the "escape peaks" you'll hunt for in a gamma spectrum ([2.4](02-04-gamma-ray-spectroscopy.md)).

## The idea

At high enough energy a photon can do something that looks like magic: **vanish entirely and become matter** — an electron and a positron, created together out of the photon's energy in the electric field near a nucleus. Einstein's $E=mc^2$ sets the price of admission. Making one electron costs $m_ec^2 = 0.511$ MeV of rest energy; you must make *two* particles (charge has to balance), so the photon needs at least $2m_ec^2 = 1.022$ MeV just to exist as a pair. Anything above that becomes the pair's kinetic energy, split between them. This process turns on above 1.022 MeV and gets stronger with energy and with heavy nuclei — it's the high-energy end of the story.

The positron is antimatter, so it doesn't last. After it slows down it meets an electron and both **annihilate**, converting their rest mass back into two 0.511 MeV photons flying apart. Those two photons are why pair production leaves fingerprints in a detector.

The second big idea is bookkeeping. Photoelectric absorption, Compton scattering, and pair production are three independent ways to remove a photon from a beam. Probabilities of independent removals **add**, so their coefficients add too: one $\mu$ describes them all. Which one dominates is a tug-of-war between photon energy and the material's atomic number $Z$ — low energy and heavy elements favor photoelectric, the middle belongs to Compton, high energy and heavy elements favor pair production. That map is the picture below.

## The formal version

**Pair production.** A photon of energy $E$ converts to an electron–positron pair in the Coulomb field of a nucleus (which absorbs recoil momentum so energy and momentum both balance). It is forbidden below the threshold

$$E_{\text{th}} = 2m_ec^2 = 1.022\,\text{MeV}, \qquad m_ec^2 = 0.511\,\text{MeV}.$$

*In words: you can't make an electron–positron pair unless the photon carries at least their combined rest energy.* Above threshold, the leftover energy becomes the pair's shared kinetic energy,

$$T_{e^-} + T_{e^+} = E - 2m_ec^2 = E - 1.022\,\text{MeV}.$$

*In words: whatever the photon has beyond the 1.022 MeV entry fee is split as motion between the electron and positron.* The atomic cross section rises with energy above threshold and scales as $\sigma_{pp}\propto Z^2$ — heavy nuclei, with their strong fields, are far more effective. When the positron stops, it annihilates:

$$e^+ + e^- \;\longrightarrow\; \gamma\,(0.511\,\text{MeV}) + \gamma\,(0.511\,\text{MeV}),$$

*In words: the positron and an electron destroy each other, emitting two 0.511 MeV photons back-to-back* — the source of the ubiquitous 0.511 MeV annihilation line.

**Total linear attenuation coefficient.** Each process removes photons independently, so their linear attenuation coefficients (units: $\text{cm}^{-1}$) simply add:

$$\boxed{\;\mu = \mu_{pe} + \mu_{C} + \mu_{pp}\;}$$

*In words: the total chance per unit length of a photon being removed is the sum of the chances from the three processes.* This single $\mu$ is what feeds the exponential attenuation law $I = I_0 e^{-\mu x}$ of [4.1](04-01-exponential-attenuation-hvl.md), and the **half-value layer** — the thickness that cuts intensity in half —

$$\text{HVL} = \frac{\ln 2}{\mu}.$$

**Mass attenuation coefficient.** Dividing by density $\rho$ (g/cm³) removes the "how tightly packed" part and leaves the per-gram interaction probability:

$$\frac{\mu}{\rho}\quad(\text{cm}^2/\text{g}).$$

*In words: $\mu/\rho$ is attenuation per unit mass — it doesn't care whether the material is compressed or fluffed up.* Because Compton scattering depends only on electron count (nearly the same electrons-per-gram for most light elements), $\mu/\rho$ is almost material-independent in the Compton region — which makes **mixtures** easy. For a mixture with mass fractions $w_i$,

$$\frac{\mu}{\rho} = \sum_i w_i\left(\frac{\mu}{\rho}\right)_i.$$

*In words: a compound's mass attenuation coefficient is the weighted average of its ingredients', weighted by how much of each is present by mass.*

**The dominance map.** Photoelectric $\propto Z^{4\text{–}5}/E^3$ (low energy, high $Z$); Compton $\propto Z$ and falls slowly (the broad middle); pair production $\propto Z^2$ and rises above 1.022 MeV (high energy, high $Z$). The two crossovers depend on $Z$: in lead they sit near 0.5 MeV and 5 MeV; in light materials like tissue, Compton owns almost the entire diagnostic-to-MeV range.

## Picture

![Mass attenuation coefficient μ/ρ for lead versus photon energy on log–log axes: photoelectric falling steeply at low energy, a Compton plateau in the middle, pair production rising above 1.022 MeV, with the total as a bathtub-shaped blue envelope and coral bands marking which process dominates](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (sum the three → $\mu$, $\mu/\rho$, HVL).** A 2.0 MeV gamma passes through lead ($\rho = 11.35\,\text{g/cm}^3$). Tables give the three partial linear attenuation coefficients

$$\mu_{pe} = 0.056\,\text{cm}^{-1}, \quad \mu_{C} = 0.436\,\text{cm}^{-1}, \quad \mu_{pp} = 0.028\,\text{cm}^{-1}.$$

Add them (they're independent removal channels):

$$\mu = 0.056 + 0.436 + 0.028 = 0.520\,\text{cm}^{-1}.$$

Compton dominates here — as the map predicts for a few-MeV photon. The mass attenuation coefficient and half-value layer follow directly:

$$\frac{\mu}{\rho} = \frac{0.520}{11.35} = 0.0458\,\text{cm}^2/\text{g}, \qquad \text{HVL} = \frac{\ln 2}{\mu} = \frac{0.693}{0.520} = 1.33\,\text{cm}.$$

*In words: about 1.3 cm of lead halves a 2 MeV beam* — a number you'll build shields from in [4.1](04-01-exponential-attenuation-hvl.md).

**Example 2 (pair production and its escape peaks).** Does a 2.0 MeV gamma make pairs, and what does it leave in a spectrum?

First, threshold: $2.0\,\text{MeV} > 1.022\,\text{MeV}$, so **yes**, pair production is allowed. The pair shares the leftover kinetic energy

$$T_{e^-} + T_{e^+} = E - 1.022 = 2.0 - 1.022 = 0.978\,\text{MeV},$$

deposited promptly in the detector as the two charged particles slow down (that's [1.3](01-03-charged-particles-stopping-power-range.md)'s stopping power at work). The positron then annihilates into two 0.511 MeV photons. What the detector records depends on whether those escape:

- **Both annihilation photons absorbed:** full energy 2.0 MeV recorded → the **full-energy (photo)peak**.
- **One escapes:** the detector loses 0.511 MeV → a **single-escape peak** at $2.0 - 0.511 = 1.489\,\text{MeV}$.
- **Both escape:** it loses 1.022 MeV → a **double-escape peak** at $2.0 - 1.022 = 0.978\,\text{MeV}$.

Notice the double-escape peak lands at exactly the pair's shared kinetic energy — makes sense: if both 0.511 MeV photons leave, the only energy deposited *is* the pair's kinetic energy. And a free-standing **0.511 MeV annihilation line** appears whenever the annihilation happens outside the crystal or its partner photon is captured from elsewhere. These three features (peak, two escapes, 0.511 line) are the pair-production signature you'll name in [2.4](02-04-gamma-ray-spectroscopy.md).

## Watch out

- **You might think being above 1.022 MeV means pair production dominates.** It doesn't — at 1.5 or 2 MeV pair production is real but a small slice of $\mu$; Compton still rules until several MeV (in lead, past ~5 MeV). Crossing threshold turns the process *on*, not *up*.
- **You might add mass attenuation coefficients like linear ones without weighting.** For a mixture you weight each $(\mu/\rho)_i$ by mass fraction $w_i$; and $\mu/\rho$ is what's material-portable, not $\mu$. Two blocks of the same lead at different (hypothetical) densities share $\mu/\rho$ but not $\mu$.
- **You might place the double-escape peak at $E - 0.511$.** That's the *single*-escape peak. Single escape loses one 0.511 MeV photon ($E-0.511$); double escape loses two ($E-1.022$). Keeping them straight is the whole point of the signature.

## One-liner

> Add the three interaction coefficients into one $\mu = \mu_{pe}+\mu_C+\mu_{pp}$ — pair production being the high-energy, $Z^2$ channel that turns on at 1.022 MeV and litters the spectrum with 0.511 MeV escape features.

## Problems

**P1 (🟢)** A concrete-like shield is 60% by mass of element A with $(\mu/\rho)_A = 0.080\,\text{cm}^2/\text{g}$ and 40% by mass of element B with $(\mu/\rho)_B = 0.050\,\text{cm}^2/\text{g}$ at a given photon energy. The mixture's density is $\rho = 2.30\,\text{g/cm}^3$. Find the mixture's mass attenuation coefficient, its linear attenuation coefficient $\mu$, and its HVL.

**P2 (🟡)** The Tl-208 decay chain emits a 2.614 MeV gamma — one of the highest-energy common natural lines. (a) Confirm it exceeds the pair-production threshold and find the kinetic energy shared by the pair. (b) Give the energies of the single- and double-escape peaks it would produce in a detector. (c) In one sentence, why are escape peaks much more prominent for this line than for a 0.662 MeV Cs-137 line? (Connects to [2.4](02-04-gamma-ray-spectroscopy.md).)

**P3 (🔴)** The photoelectric-vs-Compton dominance boundary sits near 0.5 MeV in lead ($Z=82$). Model photoelectric per atom as $\propto Z^5/E^3$ and Compton per atom as $\propto Z$, so their ratio $\propto Z^4/E^3$. Estimate the boundary energy in aluminum ($Z=13$), and say in one line what this means for how much of the spectrum Compton owns in light materials.

<details>
<summary>Solutions</summary>

**P1** Weighted average by mass fraction:

$$\frac{\mu}{\rho} = w_A\left(\frac{\mu}{\rho}\right)_A + w_B\left(\frac{\mu}{\rho}\right)_B = 0.60(0.080) + 0.40(0.050) = 0.048 + 0.020 = 0.068\,\text{cm}^2/\text{g}.$$

Multiply by density for the linear coefficient, then take the HVL:

$$\mu = \frac{\mu}{\rho}\cdot\rho = 0.068 \times 2.30 = 0.156\,\text{cm}^{-1}, \qquad \text{HVL} = \frac{\ln 2}{\mu} = \frac{0.693}{0.156} = 4.4\,\text{cm}.$$

*Check.* Units: $(\text{cm}^2/\text{g})(\text{g/cm}^3) = \text{cm}^{-1}$ ✓, and $\ln2/\mu$ has units of cm ✓. The mixture's $\mu/\rho$ lies between the two ingredients' values (0.050 and 0.080), as any weighted average must. ✓

**P2** (a) $2.614\,\text{MeV} > 1.022\,\text{MeV}$, so pair production is allowed. Shared kinetic energy:

$$T_{e^-}+T_{e^+} = E - 1.022 = 2.614 - 1.022 = 1.592\,\text{MeV}.$$

(b) Single escape (lose one 0.511 MeV photon) and double escape (lose both):

$$E_{\text{SE}} = 2.614 - 0.511 = 2.103\,\text{MeV}, \qquad E_{\text{DE}} = 2.614 - 1.022 = 1.592\,\text{MeV}.$$

(As always, $E_{\text{DE}}$ equals the pair's kinetic energy.) (c) Pair production's cross section rises with energy, so a 2.614 MeV photon makes pairs far more often than a 0.662 MeV photon — which is *below* the 1.022 MeV threshold and makes **no** pairs at all, hence no escape peaks. More pair events means taller escape peaks.

*Check.* $E_{\text{SE}}$ sits 0.511 MeV below the full-energy peak and $E_{\text{DE}}$ another 0.511 MeV below that — three features spaced by $m_ec^2$, exactly the textbook pattern. ✓

**P3** Set the ratio to a constant at the boundary: $Z^4/E^3 = \text{const}$, so $E_{\text{boundary}} \propto Z^{4/3}$. Scaling from lead:

$$E_{\text{Al}} = E_{\text{Pb}}\left(\frac{Z_{\text{Al}}}{Z_{\text{Pb}}}\right)^{4/3} = 0.5\left(\frac{13}{82}\right)^{4/3}\,\text{MeV}.$$

Compute the factor: $13/82 = 0.1585$, and $0.1585^{4/3} = \exp\!\big(\tfrac{4}{3}\ln 0.1585\big) = \exp(\tfrac{4}{3}\times(-1.842)) = \exp(-2.456) = 0.086$. So

$$E_{\text{Al}} \approx 0.5 \times 0.086 = 0.043\,\text{MeV} \approx 43\,\text{keV}.$$

Meaning: in aluminum the photoelectric effect surrenders to Compton by ~40–50 keV, so Compton scattering dominates across essentially the entire diagnostic-through-MeV range in light materials (tissue, water, concrete). That's why tissue attenuation is "all Compton" for most practical energies — the reason $\mu/\rho$ is so nearly material-independent there.

*Check.* The estimate lands close to aluminum's true photoelectric–Compton crossover (~50 keV), and correctly predicts a *much* lower boundary than lead's 0.5 MeV, since $Z$ dropped by a factor of ~6. ✓

</details>

## Connections

- **Backward:** [1.1](01-01-photon-photoelectric-compton.md) gave you $\mu_{pe}$ and $\mu_C$; this lesson adds the third channel $\mu_{pp}$ and sums all three into the one $\mu$ that the rest of the course rides on. The Compton edge and backscatter peak from 1.1 now share a spectrum with the escape peaks from here.
- **Forward:** $\mu$ is the input to [4.1](04-01-exponential-attenuation-hvl.md)'s $I = I_0 e^{-\mu x}$ and HVL/TVL shield sizing; the pair's electron and positron hand off to [1.3](01-03-charged-particles-stopping-power-range.md), where stopping power dictates how they deposit that 0.978 MeV; and the escape/annihilation features are decoded in [2.4](02-04-gamma-ray-spectroscopy.md).
- **Sideways (nuclear interaction physics ↔ relativity):** pair production is $E=mc^2$ made literally visible — energy crossing the $2m_ec^2$ line to become mass, and annihilation running it back to two 0.511 MeV photons. The same interaction-coefficient framework and threshold reasoning appear across the [`intro-nuclear-engineering`](../../intro-nuclear-engineering/syllabus.md) photon material; the mass–energy threshold argument is the photon cousin of Q-value thresholds in nuclear reactions.

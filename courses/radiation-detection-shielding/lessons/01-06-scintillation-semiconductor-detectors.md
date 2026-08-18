# Radiation Detection & Shielding · Lesson 1.6: Scintillation & semiconductor detectors

> ⏱ ~15 min · Module 1: Radiation interactions & detector physics · Builds on: [1.5 Gas-filled detectors](01-05-gas-filled-detectors.md), [1.1 Photon interactions I](01-01-photon-photoelectric-compton.md) · Unlocks: [2.3 Energy resolution & pulse-height spectra](02-03-energy-resolution-pulse-height.md), [2.4 Gamma-ray spectroscopy](02-04-gamma-ray-spectroscopy.md)

## Why this matters

Gas detectors (1.5) tell you *that* radiation arrived and roughly how much ionization it made — but they are thin, low-density, and their pulses are noisy, so they make a poor **energy** meter for gammas. To read a spectrum — to say "that peak is 662 keV, so this is $\ce{^{137}Cs}$" — you need a detector where the pulse height faithfully tracks deposited energy *and* where the statistics are quiet enough to separate one line from its neighbor. This lesson introduces the two detector families that do this: scintillators (light, then huge amplification) and semiconductors (charge, tiny quanta, no amplification). The choice between them — **resolution vs efficiency** — is the single most common detector decision in the field, and it closes Module 1.

## The idea

Every detector plays the same game: **convert deposited energy into a countable number of information carriers, then measure that number.** The finer the "currency" — the less energy it costs to make one carrier — the more carriers you get per keV, and the smoother and more repeatable the pulse. That currency is the whole story of resolution.

Three families, three currencies:

- **Gas** (last lesson): make ion pairs. Costs about 30 eV each. A 1 keV deposit makes only ~30 carriers.
- **Scintillator + PMT:** the radiation makes a flash of visible light in a crystal; a photomultiplier tube converts a few of those photons to electrons and then multiplies them a million-fold. But the number of *original* carriers — photoelectrons off the tube's front window — costs roughly 100 eV each. Few carriers, so **coarse** energy resolution, but the crystal is dense and high-$Z$, so it **catches lots of gammas** (high efficiency).
- **Semiconductor** (Si, HPGe): the radiation promotes electrons across a band gap, making electron–hole pairs. Each pair costs only ~3 eV. That is ~30× cheaper than gas and ~30× cheaper than a scintillator's photoelectrons, so you get *tens of times more carriers per keV* — hence **excellent** resolution. The price: germanium must be cooled, and a practical crystal is smaller and lighter than a NaI block, so **lower efficiency**.

That's the trade in one breath: **NaI catches more, HPGe sees sharper.**

## The formal version

**Scintillation chain.** Radiation deposits energy $E$ in a scintillator, which re-emits a fraction as visible photons: $N_{ph} = Y\,E$, where $Y$ is the light yield (NaI(Tl): $Y \approx 38\ \text{photons/keV}$). Those photons strike the **photocathode** of a photomultiplier tube (PMT), ejecting photoelectrons with quantum efficiency $\eta \sim 0.2$–$0.25$. A chain of $n$ **dynodes**, each multiplying the electron count by a secondary-emission factor $\delta$, gives an overall gain

$$G_{PMT} = \delta^{\,n} \approx 10^6 \quad (\text{e.g. } \delta \approx 4,\ n=10).$$

In words: the crystal turns energy into light, the PMT turns a few photons into electrons and then avalanches them a million-fold into a measurable pulse whose **height is proportional to $E$**. The information-limiting number is *not* the million electrons at the anode — it's the modest number of photoelectrons at the *first* step, because the gain adds no new information, only amplitude. Effective cost: $w_{NaI}\approx 100\ \text{eV per photoelectron}$.

**Semiconductor diode.** A reverse-biased $p$–$n$ junction is depleted of free charge, so it behaves like a solid-state ion chamber. Radiation depositing energy $E$ creates

$$N = \frac{E}{w}, \qquad w_{Si}\approx 3.6\ \text{eV}, \quad w_{Ge}\approx 2.96\ \text{eV per e--h pair}.$$

In words: the reverse bias sweeps the electrons and holes to the electrodes; the collected charge $Q=Ne$ is your signal, with **no** internal multiplication needed because $w$ is already tiny. High-purity germanium (HPGe) is the workhorse for gamma spectroscopy; silicon serves for charged particles and X-rays.

**Why carrier count sets resolution.** If $N$ carriers are made and carrier creation were purely random (Poisson), the count fluctuates by $\sigma_N=\sqrt{N}$, so the *fractional* full-width-at-half-maximum resolution is

$$R = \frac{\text{FWHM}}{E} \approx \frac{2.35\,\sigma_N}{N} = \frac{2.35}{\sqrt{N}}.$$

In words: more carriers → smaller *relative* wobble → a narrower peak. Resolution improves only as $\sqrt{N}$, so a 30× carrier advantage buys about a $\sqrt{30}\approx 5.5\times$ sharper line. (Lesson 2.3 refines this with the **Fano factor**, which makes real semiconductors even better than Poisson predicts — carrier creation is partly correlated, not fully random.)

## Picture

![Left: gamma into a NaI scintillator makes a light flash, the PMT photocathode and dynode chain multiply it to a pulse. Right: a reverse-biased semiconductor diode where e-h pairs are swept to electrodes. A bottom bar contrasts ~10 photoelectrons/keV in NaI vs ~330 e-h pairs/keV in HPGe.](assets/01-06-fig1.svg)

## Worked examples

**Example 1 (carriers per keV, and the resolution floor).** A 662 keV photon (the $\ce{^{137}Cs}$ line) deposits its full energy. Count the information carriers in NaI vs HPGe and turn each into a Poisson resolution estimate.

*NaI(Tl)*, effective cost $w \approx 100\ \text{eV/photoelectron}$:

$$N_{NaI} = \frac{662{,}000\ \text{eV}}{100\ \text{eV}} \approx 6.6\times 10^3\ \text{photoelectrons}.$$

$$R_{NaI} \approx \frac{2.35}{\sqrt{6620}} = \frac{2.35}{81.4} = 0.029 = 2.9\%.$$

*HPGe*, $w \approx 3\ \text{eV per e--h pair}$:

$$N_{Ge} = \frac{662{,}000\ \text{eV}}{3\ \text{eV}} \approx 2.2\times 10^5\ \text{e--h pairs}.$$

$$R_{Ge} \approx \frac{2.35}{\sqrt{220{,}700}} = \frac{2.35}{470} = 0.0050 = 0.50\%.$$

HPGe makes $220{,}700/6620 \approx 33\times$ more carriers, so its statistical resolution is $\sqrt{33}\approx 5.7\times$ sharper — exactly the $\sqrt{N}$ law. **Reality check:** real NaI is *worse* than this (~$7\%$ at 662 keV) because light collection and PMT photoelectron statistics add noise the simple count ignores; real HPGe is *better* (~$0.2\%$) because the Fano factor beats Poisson. The carrier count sets the right *ballpark* and the right *ordering* — HPGe wins by more than an order of magnitude — which is all you need to choose a detector. (Full treatment: 2.3.)

**Example 2 (pick a detector and defend it).** Two jobs land on your bench. Choose NaI(Tl) or HPGe for each.

**Job A — find a lost source.** A weak sealed source is missing somewhere in a warehouse; you need a handheld instrument to sweep shelves and register *any* count rate above background.
→ **NaI(Tl).** You care about **efficiency and portability**, not resolution: a dense, high-$Z$ ($\ce{I}$, $Z=53$) crystal stops a large fraction of incident gammas (recall photoelectric $\propto Z^n$ from 1.1), giving a high count rate for a faint source. It runs at room temperature, survives being carried around, and its coarse ~$7\%$ resolution is irrelevant — you're detecting presence, not identifying lines.

**Job B — fingerprint an unknown.** In the lab you must decide whether a sample emits two gamma lines only ~30 keV apart near 1 MeV (two candidate isotopes) or just one.
→ **HPGe.** Now **resolution is everything**. NaI's FWHM near 1 MeV is roughly $0.07\times 1000 \sqrt{662/1000}\approx 57\ \text{keV}$ — *wider* than the 30 keV gap, so the two lines merge into one blurred hump: you cannot tell one isotope from two. HPGe's FWHM there is ~$1.5$–$2\ \text{keV}$, so the lines stand cleanly apart. You pay for it: the germanium crystal must be cooled (liquid nitrogen or an electric cooler) to suppress thermal e–h pairs that would otherwise swamp the signal, and its smaller crystal means lower efficiency and longer counts. For an *identification* job that price is worth paying.

The rule of thumb you'll reuse all course: **NaI to detect and survey; HPGe to identify and resolve.**

## Watch out

- You might think the PMT's million-fold gain is what makes NaI's spectrum good, but actually gain only makes the pulse *big*, not *precise* — resolution is fixed upstream by the ~thousands of photoelectrons at the first dynode. Amplifying a noisy number doesn't make it less noisy.
- You might think HPGe is simply "the better detector," but actually it's only better at *resolution*. For raw counting efficiency, a big dense NaI block beats a typical HPGe crystal, and it needs no cooling — which is why survey meters and well counters are usually scintillators, not germanium.
- You might think semiconductors win because they "amplify charge like a proportional counter," but actually they have **no internal multiplication** at all ($\text{gain}=1$, like an ion chamber). Their advantage is purely the tiny pair-creation energy $w\approx 3\ \text{eV}$, which manufactures a huge carrier count *before* any amplification.

## One-liner

> Resolution is set by how many carriers you make, efficiency by how much radiation you stop — NaI stops a lot with coarse currency, HPGe uses fine currency but stops less.

## Problems

**P1 (🟢)** A 1332 keV $\ce{^{60}Co}$ photon deposits all its energy in a HPGe detector with $w = 3.0\ \text{eV}$ per e–h pair. (a) How many electron–hole pairs are created? (b) Estimate the Poisson-limited fractional resolution $R = 2.35/\sqrt{N}$. (c) In one sentence, why is the *measured* HPGe resolution actually a bit better than this estimate?

**P2 (🟡)** A NaI(Tl) crystal has light yield $Y = 38\ \text{photons/keV}$ and is coupled to a PMT whose photocathode converts photons to photoelectrons with quantum efficiency $\eta = 0.22$. A 511 keV annihilation photon is fully absorbed. (a) How many scintillation photons are produced? (b) How many photoelectrons launch the PMT cascade? (c) Using the *photoelectron* count as the carrier number, estimate $R$, and explain why using the photon count in (a) would flatter the resolution unfairly.

**P3 (🔴, optional)** A coaxial HPGe detector has a $\sqrt{N}$-limited resolution of $0.30\%$ at 1332 keV. You must resolve two gamma lines separated by $\Delta E = 2.0\ \text{keV}$ at that energy, calling them "resolved" if their separation is at least one FWHM. (a) What is the FWHM in keV at 1332 keV? (b) Are the lines resolved? (c) A NaI(Tl) detector at the same energy has FWHM $\approx 60\ \text{keV}$ — by what factor does HPGe out-resolve it, and does that ratio roughly match the $\sqrt{N}$ carrier-count argument if NaI makes ~$100\times$ fewer carriers per keV?

<details>
<summary>Solutions</summary>

**P1.**
(a) $N = E/w = 1{,}332{,}000\ \text{eV} / 3.0\ \text{eV} = 4.44\times 10^5$ e–h pairs.

(b) $R = \dfrac{2.35}{\sqrt{4.44\times 10^5}} = \dfrac{2.35}{666} = 3.5\times 10^{-3} = 0.35\%.$ (FWHM $\approx 0.0035\times 1332 \approx 4.7\ \text{keV}$ — a good match to the ballpark of real coaxial detectors, which do a bit better still.)

(c) Carrier creation in a semiconductor is *not* fully random — energy conservation correlates successive ionizations — so the true variance is $F\,N$ with the **Fano factor** $F\approx 0.1 < 1$, i.e. sub-Poisson. That shrinks the fluctuation by $\sqrt{F}\approx 0.3$, narrowing the measured peak below the plain Poisson estimate. (This is exactly the refinement Lesson 2.3 makes.)

**P2.**
(a) $N_{ph} = Y\,E = 38\ \text{photons/keV} \times 511\ \text{keV} = 1.94\times 10^4$ scintillation photons.

(b) Photoelectrons: $N_{pe} = \eta\,N_{ph} = 0.22 \times 1.94\times 10^4 \approx 4.3\times 10^3$ photoelectrons. (Consistent with the ~100 eV/photoelectron rule of thumb: $511{,}000/4270 \approx 120\ \text{eV}$ each.)

(c) $R = \dfrac{2.35}{\sqrt{4270}} = \dfrac{2.35}{65.3} = 0.036 = 3.6\%.$ You must use the *smallest* carrier number in the chain — the photoelectrons — because that bottleneck sets the statistics. Using the $1.94\times10^4$ photons would give $R \approx 2.35/\sqrt{19400} = 1.7\%$, roughly $\sqrt{1/\eta}\approx 2.1\times$ too optimistic. The 78% of photons that never make a photoelectron carry no information; only the ones that convert count. (Real NaI at 511 keV is ~$8$–$9\%$ once light-collection non-uniformity is folded in.)

**P3.**
(a) FWHM $= R\times E = 0.0030 \times 1332\ \text{keV} = 4.0\ \text{keV}.$

(b) The two lines are $\Delta E = 2.0\ \text{keV}$ apart, which is *less* than the 4.0 keV FWHM — so by the one-FWHM criterion they are **not resolved**; they'd appear as one slightly broadened peak. (You'd need a lower-energy region or a sharper detector; note resolution improves toward lower $E$ because $R\propto 1/\sqrt{N}$ and $N\propto E$.)

(c) Ratio $= 60\ \text{keV} / 4.0\ \text{keV} = 15\times$ — HPGe's peak is 15 times narrower. Check against carriers: HPGe makes ~$100\times$ more carriers per keV than NaI (330 vs ~3–10 photoelectrons; here take the stated $100\times$), and resolution scales as $1/\sqrt{N}$, so the predicted advantage is $\sqrt{100}=10\times$. Same order of magnitude as the observed $15\times$ — the extra factor comes from HPGe's favorable Fano factor and NaI's added light-collection noise, both of which push in the same direction. The $\sqrt{N}$ carrier argument explains the bulk of the gap.

</details>

## Flashback

**From Lesson 1.5 (Gas-filled detectors):** A 5.0 MeV alpha particle stops completely inside a gas-filled detector whose fill gas has a mean ionization energy $W = 34\ \text{eV per ion pair}$. (a) How many ion pairs does it create? (b) If the detector is biased in the **ionization region**, what charge is collected (gas gain $M=1$)? (c) If instead it operates in the **proportional region** with gas multiplication $M = 500$, what charge is collected — and which region gives a pulse whose size still tracks the original energy? Take $e = 1.602\times 10^{-19}\ \text{C}$.

<details>
<summary>Solution</summary>

(a) $N = E/W = 5.0\times 10^6\ \text{eV} / 34\ \text{eV} = 1.47\times 10^5$ ion pairs.

(b) Ionization region: no multiplication, so $Q = N e = 1.47\times 10^5 \times 1.602\times 10^{-19}\ \text{C} = 2.36\times 10^{-14}\ \text{C} = 23.6\ \text{fC}.$

(c) Proportional region: $Q = M N e = 500 \times 2.36\times 10^{-14}\ \text{C} = 1.18\times 10^{-11}\ \text{C} = 11.8\ \text{pC}.$ **Both** regions give an energy-proportional pulse — the ionization region because it collects exactly the primary charge, the proportional region because every primary pair is amplified by the *same* factor $M$, so $Q\propto N \propto E$ is preserved. (It's the Geiger–Müller region that destroys the proportionality: there the avalanche saturates and every event gives the same big pulse regardless of $E$.) Notice the theme of this whole lesson already lurking here — the gas needs $W=34\ \text{eV}$ per carrier, whereas a semiconductor needs only ~3 eV, which is why the diode makes ~10× more carriers for the *same* energy and reads it far more precisely.

</details>

## Connections

- **Backward:** this reuses the "energy → carriers" picture from [1.5 gas-filled detectors](01-05-gas-filled-detectors.md) — same idea, finer currency — and leans on photoelectric absorption scaling as $Z^n$ from [1.1](01-01-photon-photoelectric-compton.md) to explain why dense, high-$Z$ NaI is so efficient at stopping gammas.
- **Forward:** the carrier-count → $\sqrt{N}$ resolution argument here is the seed of [2.3 Energy resolution & pulse-height spectra](02-03-energy-resolution-pulse-height.md) (which adds the Fano factor), and the NaI-vs-HPGe contrast is what lets you read every feature of the spectra in [2.4 Gamma-ray spectroscopy](02-04-gamma-ray-spectroscopy.md).
- **Sideways:** the whole scheme is applied solid-state physics — the semiconductor band gap and reverse-biased $p$–$n$ junction are the same devices studied in electronics and condensed-matter courses, and the Poisson $\sqrt{N}$ statistics that limit resolution are the counting statistics of [prob-stat-refresher](../../prob-stat-refresher/syllabus.md), which Module 2 builds on directly.

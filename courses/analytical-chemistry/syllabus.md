# Analytical & Instrumental Chemistry — Syllabus

> Chemistry · Tier 1 · ~17 lessons · Prereqs: [general-chemistry](../general-chemistry/syllabus.md) · Roadmap id: `analytical-chemistry`

## Goal

Turn a chemical question — *how much of what is in this sample?* — into a defensible number with an uncertainty attached. You learn the statistics of measurement, the equilibria that make titrations and gravimetry work, and the instrumental methods (spectroscopy, electrochemistry, chromatography, mass spectrometry) that dominate a modern lab, always asking what the signal physically means and how far to trust it. It deliberately skips instrument-engineering internals (electronics, optics design) and specialized bioanalytical assays; the aim is to read, run, and critique a method, not to build the hardware.

## Dangerous Checklist

When you finish, you can:

- [ ] Report a measurement with the right significant figures, a confidence interval, and an honest statement of what limits it
- [ ] Propagate uncertainty through a multi-step calculation and name the dominant error term
- [ ] Use a *t*-test, *F*-test, and Q-test to decide whether two results differ, a method is biased, or a point is an outlier
- [ ] Build a calibration curve by least squares and extract concentration, its uncertainty, and the detection limit
- [ ] Sketch any acid–base, EDTA, precipitation, or redox titration curve and choose the correct endpoint indicator
- [ ] Compute equilibrium concentrations (pH, pM, solubility, cell potential) for the systems a titration passes through
- [ ] Apply Beer's law — including standard addition — to quantify an absorbing species and diagnose matrix effects
- [ ] Read a potentiometric or ion-selective-electrode measurement through the Nernst equation
- [ ] Compute chromatographic resolution, plate number, and plate height, and use van Deemter to tune a separation
- [ ] Interpret a low-resolution mass spectrum to confirm molecular weight and read major fragments
- [ ] Validate a method: quantify accuracy, precision, linearity, LOD/LOQ, and defend a sampling plan

## Modules

### Module 1: Measurement, error & statistics

The bedrock: every later number inherits an uncertainty, so we learn to name, combine, and test it before touching a beaker.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Accuracy, precision & significant figures | Classify error and carry the right number of digits through a result | systematic vs. random error, absolute/relative error, sig-fig rules, rounding |
| 1.2 | The statistics of a measurement | Summarize repeated measurements and put a confidence interval on the mean | mean, standard deviation, Gaussian distribution, standard error, confidence interval, *t* |
| 1.3 | Propagation of uncertainty | Combine input uncertainties to get the uncertainty of a computed result | addition/multiplication rules, relative-uncertainty combination, dominant-term identification |
| 1.4 | Significance tests & calibration | Decide whether results differ, reject outliers, and fit a calibration line | *t*-test, *F*-test, Q-test, linear least squares, LOD/LOQ, calibration-based uncertainty |

**Boss problem 1:** Five Fe standards (1–5 ppm) give absorbances 0.102, 0.198, 0.303, 0.398, 0.501. Fit the calibration line by least squares; an unknown read three times gives 0.353, 0.361, 0.357. Report its concentration with a 95% confidence interval, then use a one-sample *t*-test to decide, at 95% confidence, whether it exceeds a 3.4 ppm regulatory limit.

### Module 2: Equilibria, titrimetry & gravimetry

Classical wet-chemical analysis, unified by one idea: a titration curve is just an equilibrium computed as you add reagent, and the endpoint is where the curve turns.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Acid–base equilibria & titration curves | Compute pH at every stage of a strong/weak titration and read the curve | $K_a$/$K_b$, buffers, Henderson–Hasselbalch, equivalence vs. endpoint, indicator choice |
| 2.2 | Complexometric (EDTA) titrations | Titrate a metal ion with EDTA and account for pH and side reactions | formation constant, conditional $K_f'$, $\alpha$ fractions, metal-ion indicators, water hardness |
| 2.3 | Solubility & gravimetric analysis | Predict precipitation and turn a weighed solid into an analyte amount | $K_{sp}$, common-ion effect, selective precipitation, gravimetric factor, coprecipitation |
| 2.4 | Redox equilibria & titrations | Use the Nernst equation to build and read a redox titration curve | half-reactions, $E^\circ$, Nernst equation, equivalence-point potential, redox indicators |

**Boss problem 2:** Titrate 50.00 mL of 0.1000 M acetic acid ($K_a = 1.8\times10^{-5}$) with 0.1000 M NaOH. Compute the pH at 0%, 50%, 100%, and 150% of the equivalence volume, explain in one sentence why the equivalence-point pH exceeds 7, and choose an indicator that matches it.

### Module 3: Spectroscopic & electroanalytical methods

Two families of instruments that report concentration through a physical law — Beer's law for light, the Nernst equation for potential — and the matrix effects that trip both up.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | UV–Vis absorption & Beer's law | Quantify an absorbing species and know when Beer's law breaks | absorbance vs. transmittance, molar absorptivity, linear range, stray light, deviations |
| 3.2 | Atomic & fluorescence spectroscopy | Choose atomic absorption, emission, or fluorescence for a trace metal | flame/graphite atomization, AAS vs. AES vs. ICP, fluorescence intensity, spectral interferences |
| 3.3 | Potentiometry & ion-selective electrodes | Read an ion activity from a measured cell potential | reference vs. indicator electrode, Nernstian slope, ISE selectivity, pH electrode, activity vs. concentration |
| 3.4 | Voltammetry & standard addition | Use current–potential curves and beat the matrix with standard addition | working/counter/reference electrodes, limiting current, cyclic/stripping voltammetry, standard addition |

**Boss problem 3:** An unknown metal ion gives absorbance 0.201; spiking the same final volume with an added 2.00 ppm of the metal raises it to 0.401. Find the original concentration by standard addition and explain in one sentence why standard addition, not an external calibration curve, is the right tool when the sample matrix is unknown.

### Module 4: Chromatography, mass spectrometry & validation

Separate the mixture, identify the pieces, then prove the whole method actually measures what it claims — the capstone that ties statistics back to instruments.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Separation theory: plates & resolution | Quantify how well two peaks separate and what controls it | retention factor, selectivity, resolution, plate number/height, van Deemter equation |
| 4.2 | Gas chromatography | Match a GC column and detector to a volatile analyte | carrier gas, stationary phases, temperature programming, FID/TCD, split/splitless injection |
| 4.3 | High-performance liquid chromatography | Choose an HPLC mode and gradient for a nonvolatile analyte | normal vs. reversed phase, mobile-phase gradient, isocratic elution, UV/DAD detection |
| 4.4 | Mass spectrometry | Read a mass spectrum to confirm molecular weight and fragments | ionization (EI/ESI), m/z, molecular ion, isotope patterns, fragmentation, GC-MS/LC-MS coupling |
| 4.5 | Sampling & method validation | Design a sampling plan and validate accuracy, precision, and linearity | representative sampling, sample prep, LOD/LOQ, recovery, ruggedness, validation report |

**Boss problem 4:** Two peaks elute at 5.00 and 5.40 min, each with a baseline width of 0.20 min, on a 30.0 cm column. Compute the resolution and decide whether baseline separation is achieved; compute the plate number and plate height for the later peak; then, using van Deemter, state whether increasing the flow rate would help or hurt and why.

## Sources of truth

- Harris, *Quantitative Chemical Analysis* — notation, equilibrium treatment, and titration/gravimetry rigor.
- Skoog, Holler & Crouch, *Principles of Instrumental Analysis* — spectroscopic, electroanalytical, and chromatographic methods.
- Miller & Miller, *Statistics and Chemometrics for Analytical Chemistry* — the statistics, significance tests, and calibration conventions.

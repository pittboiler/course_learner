# Radiation Detection & Shielding · Lesson 3.2: Equivalent & effective dose

> ⏱ ~15 min · Module 3: Dosimetry & biological effects · Builds on: [3.1 Absorbed dose, kerma & exposure](03-01-absorbed-dose-kerma-exposure.md), [intro-nuclear dose quantities](../../intro-nuclear-engineering/syllabus.md) · Unlocks: [3.3 Dose from a source](03-03-dose-from-a-source.md), [3.4 Biological effects & risk](03-04-biological-effects-risk.md)

## Why this matters

Your survey meter reads absorbed dose in grays, but the number a regulator writes on your record, the number that decides whether you can keep working this year, is an **effective dose in sieverts**. Getting from one to the other is not physics — it's a deliberate, committee-blessed weighting that encodes two biological facts: a gray of alpha wrecks more DNA than a gray of gamma, and a gray to your bone marrow buys more cancer risk than a gray to your skin. Lesson 3.1 gave you the honest joules-per-kilogram; this lesson turns them into the defensible risk number, and shows you exactly where the physics stops and the protection convention begins.

## The idea

Absorbed dose $D$ is the raw insult: energy per kilogram, blind to what delivered it or where it landed. To turn it into a risk currency you apply two corrections, in order.

**First correction — for the radiation.** From 3.1 and the interaction lessons, a gamma-liberated electron spreads its energy thinly over centimeters (sparse, mostly-repairable single hits), while an alpha crams the same energy into a few-micron track (a dense cluster of double-strand breaks the cell botches when it tries to repair). "How densely does this radiation ionize?" is captured by **linear energy transfer (LET)**, and the **radiation weighting factor** $w_R$ is a coarse step-function that scores it: $1$ for the sparse stuff (photons, electrons), up to $20$ for alphas. Multiply $D$ by $w_R$ and you get **equivalent dose** $H$ — a fair comparison across radiation types.

**Second correction — for the tissue.** Irradiating a hand is not irradiating red bone marrow. Different organs turn a sievert into different amounts of cancer risk, so a **tissue weighting factor** $w_T$ (they sum to $1$ across the whole body) rolls the separate organ doses into one **effective dose** $E$ — the whole-body-uniform exposure that would carry the *same* total stochastic risk as your actual patchy, partial-body exposure. That single number is what limits are written against.

Two rungs, two questions: *what kind of radiation?* ($w_R$), then *what got hit?* ($w_T$). And the punchline you must never forget: **both factors exist for radiation protection — estimating low-dose cancer risk — not for describing physics.**

## The formal version

**Equivalent dose.** For a tissue $T$ irradiated by radiation of type $R$,

$$H_T = \sum_R w_R\, D_{T,R}, \qquad [H_T] = \text{sievert (Sv)} = \text{J/kg}.$$

*In words: add up the tissue's absorbed dose from each radiation type, each scaled by how densely that radiation ionizes.* The sievert has the **same base units** as the gray ($w_R$ is dimensionless) — the new name only flags "already weighted for biological effectiveness." Representative ICRP-103 values:

| Radiation | $w_R$ |
|---|---|
| Photons ($\gamma$, X-rays), electrons ($\beta$), muons | 1 |
| Protons | 2 |
| Neutrons | 2.5–20, a **smooth function of energy**, peaking $\approx 20$ near 1 MeV |
| $\alpha$ particles, fission fragments, heavy ions | 20 |

Neutrons are energy-dependent because their damage runs through the recoil nuclei they knock loose: thermal neutrons ($w_R\approx 2.5$) barely recoil anything, fast neutrons near 1 MeV ($w_R\approx 20$) launch hard recoil protons, and very high-energy neutrons soften again. When you see "$w_R\approx 10$ for neutrons" it's a rough all-purpose stand-in — always use the energy-specific value if you have the spectrum.

**Effective dose.** Sum the organ equivalent doses weighted by each organ's risk share:

$$E = \sum_T w_T\, H_T, \qquad \sum_T w_T = 1.$$

*In words: add up the organ doses, giving more weight to organs where a sievert buys more cancer risk, so a partial-body exposure collapses to one whole-body-equivalent number.* ICRP-103 $w_T$: red bone marrow, colon, lung, stomach, breast, and the "remainder" grouping each $\approx 0.12$; gonads $\approx 0.08$; thyroid, bladder, liver, esophagus each $\approx 0.04$; skin, bone surface, brain, salivary glands each $\approx 0.01$. If a **uniform** whole-body field hits everything equally then every $H_T$ is the same $H$, the weights sum to 1, and $E = H$ — tissue weighting only bites for *partial-body* exposures.

**Committed dose (internal emitters).** An inhaled or ingested radionuclide keeps irradiating you as it decays and clears — the dose is not delivered all at once. So we integrate the organ's equivalent-dose *rate* $\dot H_T(t)$ forward from the intake at $t_0$ over a fixed commitment period $\tau$:

$$H_T(\tau) = \int_{t_0}^{t_0+\tau} \dot H_T(t)\,dt, \qquad \tau = 50\ \text{yr (adults)},\ \ 70\ \text{yr (to age 70 for children)}.$$

*In words: for something now lodged inside you, book the entire next 50 years of dose it will ever deliver against this year's record.* The **committed effective dose** is then $E(\tau)=\sum_T w_T H_T(\tau)$. This is why a single inhalation counts fully against the year of intake, even though most of its dose arrives decades later.

## Picture

![The dose ladder: absorbed dose D in gray, times the radiation weighting factor w_R gives equivalent dose H in sievert, then summed with tissue weighting factors w_T gives effective dose E in sievert. Below, a bar chart of w_R: about 1 for gamma and beta, about 10 for neutrons (range 2 to 20), and 20 for alpha, rising with ionization density (LET).](assets/03-02-equivalent-effective-dose-fig1.svg)

## Worked examples

**Example 1 (mixed field — the dense radiation dominates).** A small tissue volume in a reactor bay absorbs $D_\gamma = 0.80\ \text{mGy}$ from gamma rays ($w_R=1$) and, in the same interval, $D_n = 0.30\ \text{mGy}$ from fast neutrons, for which $w_R = 10$ at this energy. Find the equivalent dose and say which radiation controls it.

Weight each component, then add (equivalent doses in the same tissue are additive):

$$H_\gamma = w_R D_\gamma = 1 \times 0.80\,\text{mGy} = 0.80\ \text{mSv},$$
$$H_n = w_R D_n = 10 \times 0.30\,\text{mGy} = 3.0\ \text{mSv},$$
$$H = H_\gamma + H_n = 0.80 + 3.0 = \boxed{3.8\ \text{mSv}}.$$

The neutrons deposited **less absorbed dose** ($0.30$ vs $0.80\ \text{mGy}$) yet supply $3.0$ of the $3.8\ \text{mSv}$ — about 79 percent of the hazard. Their $w_R=10$ more than overturns the raw-energy deficit. This is the whole reason a mixed $n/\gamma$ field is dangerous to eyeball from a gamma-only survey meter: the biologically-dominant component can be the one your instrument barely sees.

**Example 2 (effective dose — partial body to whole-body-equivalent).** A diagnostic procedure delivers these organ equivalent doses (everything else negligible):

| Organ $T$ | $H_T$ (mSv) | $w_T$ |
|---|---|---|
| Lung | 40 | 0.12 |
| Stomach | 25 | 0.12 |
| Thyroid | 15 | 0.04 |

Find the effective dose.

$$E = \sum_T w_T H_T = (0.12)(40) + (0.12)(25) + (0.04)(15)$$
$$= 4.8 + 3.0 + 0.6 = \boxed{8.4\ \text{mSv}}.$$

Read what this means: the largest *local* dose was $40\ \text{mSv}$ to the lung, but the exposure as a whole carries the same stochastic (cancer) risk as **spreading $8.4\ \text{mSv}$ uniformly over the entire body**. The tissue weights shrink the headline organ number because the risk is distributed by where the radiation landed — that collapse of a messy dose map into one comparable number is exactly the job $w_T$ was invented to do. (For scale, $8.4\ \text{mSv}$ is roughly three years of natural background.)

## Watch out

- **You might think $w_R$ and $w_T$ are measured physical constants.** They are not — they're **protection quantities**: consensus values (ICRP) tuned to estimate *stochastic* risk from *low* doses. For deterministic effects (a radiotherapy tumor dose, an acute over-exposure) you quote absorbed dose in gray with a separate biological-effectiveness factor; effective dose in sieverts is meaningless there. A formal "$w_R=20$" on a 40 Gy tumor dose would give an absurd 800 Sv.
- **You might treat gray and sievert as convertible units.** Both are J/kg; the conversion is a *dimensionless* choice, not a physical measurement. Never quote a badge reading in Gy when you mean weighted risk, and never call a sievert "an amount of energy" — it's an amount of *hazard*.
- **You might expect the biggest organ dose to be the effective dose.** No — $E$ is almost always *smaller* than the largest $H_T$ (because $\sum w_T = 1$ splits the risk across organs). Only a truly uniform whole-body field gives $E = H$.
- **You might forget internal dose is front-loaded onto the intake year.** Committed dose integrates 50 years forward and books it all *now*, even though most of it hasn't been delivered yet — so one bad inhalation can blow a yearly limit on paper the day it happens.

## One-liner

> Equivalent dose $H=w_R D$ scales grays by how densely the radiation ionizes; effective dose $E=\sum_T w_T H_T$ collapses a partial-body exposure into the whole-body-uniform sievert that carries the same cancer risk — both weights are protection conventions, not physics.

## Problems

**P1 (🟢)** A tissue absorbs $D_\gamma = 1.2\ \text{mGy}$ from gamma rays ($w_R=1$) and $D_\alpha = 0.15\ \text{mGy}$ from alpha particles ($w_R=20$) from a nearby contamination. Find the total equivalent dose in mSv and state what fraction the alphas contribute.

**P2 (🟡)** A worker inhales a long-lived radionuclide. Dosimetry models the resulting **committed** equivalent doses over the 50-yr adult period as $H_\text{lung}=50\ \text{mSv}$ (with $w_T=0.12$) and $H_\text{bone surface}=20\ \text{mSv}$ (with $w_T=0.01$), everything else negligible. (a) Compute the committed effective dose. (b) In which year is it recorded, and why — even though most of the dose is delivered decades later?

**P3 (🔴, optional)** A whole-body field irradiates a worker **uniformly** with three components: gammas depositing $0.30\ \text{mGy}$ ($w_R=1$), thermal neutrons depositing $0.10\ \text{mGy}$ ($w_R=2.5$), and fast neutrons depositing $0.10\ \text{mGy}$ ($w_R=20$). Find the effective dose $E$ in mSv. (Hint: use $\sum_T w_T = 1$ for the uniform case — you should not need the individual $w_T$ values.)

<details>
<summary>Solutions</summary>

**P1** Weight each radiation and add:

$$H_\gamma = 1 \times 1.2 = 1.2\ \text{mSv}, \qquad H_\alpha = 20 \times 0.15 = 3.0\ \text{mSv},$$
$$H = 1.2 + 3.0 = \boxed{4.2\ \text{mSv}}.$$

Alpha fraction: $3.0/4.2 = 0.71$, so the alphas contribute about **71 percent** of the hazard from only 11 percent of the absorbed dose ($0.15/1.35$). *Check.* Densely-ionizing radiation punches far above its energy share — the same lesson as Example 1. ✓

**P2** (a) Committed effective dose sums the committed organ doses against their tissue weights:

$$E(50\,\text{yr}) = \sum_T w_T H_T(50\,\text{yr}) = (0.12)(50) + (0.01)(20) = 6.0 + 0.2 = \boxed{6.2\ \text{mSv}}.$$

The lung term dominates — same organ dose weight advantage ($0.12$ vs $0.01$) *and* a larger local dose.

(b) It is recorded in full against the **year of intake** ($t_0$). Because the material is now lodged inside the body, radiation-protection accounting integrates every gray it will ever deliver over the next 50 years ($\int_{t_0}^{t_0+50}\dot H_T\,dt$) and books that total to the present, so limits capture the commitment at the moment it is incurred rather than dribbling it out over decades where it could be lost or gamed. ✓

**P3** First get the equivalent dose (whole-body, so one $H$):

$$H = \sum_R w_R D_R = (1)(0.30) + (2.5)(0.10) + (20)(0.10) = 0.30 + 0.25 + 2.0 = 2.55\ \text{mSv}.$$

The field is **uniform**, so every organ receives the same $H$ and

$$E = \sum_T w_T H = H\sum_T w_T = H \times 1 = \boxed{2.55\ \text{mSv}}.$$

*Check.* Two lessons at once: neutron $w_R$ is energy-specific — the fast-neutron $0.10\ \text{mGy}$ ($2.0\ \text{mSv}$) dwarfs the thermal-neutron $0.10\ \text{mGy}$ ($0.25\ \text{mSv}$) at identical absorbed dose; and for uniform whole-body exposure $E=H$ because the tissue weights sum to 1. ✓

</details>

## Flashback

**From Lesson 3.1 (absorbed dose, kerma & exposure):** A monoenergetic photon beam delivers an energy fluence $\Psi = 3.0\times10^{9}\ \text{MeV/cm}^2$ to soft tissue whose mass energy-absorption coefficient at this energy is $\mu_{en}/\rho = 0.030\ \text{cm}^2/\text{g}$. Under charged-particle equilibrium (and negligible radiative loss, so $D \approx K$), the absorbed dose is $D = \Psi\,(\mu_{en}/\rho)$. Find $D$ in mGy. ($1\ \text{MeV} = 1.602\times10^{-13}\ \text{J}$.)

<details>
<summary>Solution</summary>

Multiply fluence by the mass energy-absorption coefficient, then convert to SI:

$$D = \Psi\frac{\mu_{en}}{\rho} = \left(3.0\times10^{9}\ \tfrac{\text{MeV}}{\text{cm}^2}\right)\!\left(0.030\ \tfrac{\text{cm}^2}{\text{g}}\right) = 9.0\times10^{7}\ \tfrac{\text{MeV}}{\text{g}} = 9.0\times10^{10}\ \tfrac{\text{MeV}}{\text{kg}}.$$

Convert MeV to joules:

$$D = 9.0\times10^{10}\ \tfrac{\text{MeV}}{\text{kg}} \times 1.602\times10^{-13}\ \tfrac{\text{J}}{\text{MeV}} = 1.44\times10^{-2}\ \tfrac{\text{J}}{\text{kg}} = 1.44\times10^{-2}\ \text{Gy} \approx \boxed{14\ \text{mGy}}.$$

*Check.* The $\text{cm}^2$ cancels, leaving energy per mass — the absorbed-dose definition from 3.1. If these were $\gamma$-rays ($w_R=1$), the equivalent dose is numerically the same $14\ \text{mSv}$; for anything denser you would first re-weight with this lesson's $w_R$. ✓

</details>

## Connections

- **Backward:** this sits directly on [3.1](03-01-absorbed-dose-kerma-exposure.md) — absorbed dose $D$ (and kerma, via the flashback's $\Psi\,\mu_{en}/\rho$) is the raw material; $w_R$ and $w_T$ are the two biological labels bolted on top. And $w_R$ itself is just the LET / track-structure story from the charged-particle and neutron interaction lessons, quantized into a step function.
- **Forward:** [3.3 Dose from a source](03-03-dose-from-a-source.md) computes the dose *rate* $\dot H$ at a distance from a real source (dose-rate constant, inverse-square), and [3.4 Biological effects & risk](03-04-biological-effects-risk.md) explains *why* the $w_T$ values are what they are — grounding them in the stochastic/LNT risk model this whole ladder was built to feed.
- **Sideways (radiation biophysics):** the leap from "high-LET dense track" to "$w_R=20$" is where dosimetry meets molecular biology — the weighting factors are ultimately calibrated against measured DNA double-strand-break yields and atomic-bomb-survivor epidemiology, the subject of radiation biophysics (see [`biophysics`](../../biophysics/syllabus.md)).

# Intro to Nuclear Engineering & Radiation · Lesson 4.4: Dose quantities

> ⏱ ~15 min · Module 4: Radiation interactions, dose & a reactor overview · Builds on: [4.2 Photons through matter](04-02-photons-through-matter.md), [4.3 Charged particles through matter](04-03-charged-particles-through-matter.md) · Unlocks: [`radiation-detection-shielding`](../../radiation-detection-shielding/syllabus.md) (dosimetry)

## Why this matters

Everything in the last two lessons — gammas Compton-scattering, alphas grinding to a halt in a Bragg peak — ends the same way: energy dumped into tissue. But a reactor operator, a radiologist, and a regulator don't care about joules; they care about *harm*. The bridge from physics to biology is **dose**, and it comes in a ladder of three quantities because a joule from an alpha does far more damage than a joule from a gamma. Get this ladder right and you can read a dosimeter badge, compare a chest CT to a year of background, and know when a field is merely annoying versus lethal.

## The idea

Start with the honest, physical fact: radiation deposits **energy per unit mass** in tissue. That's **absorbed dose** — joules per kilogram — and it's the same whether the energy came from an X-ray or a plutonium speck. It's the raw insult.

But equal energy is not equal damage. Recall [4.3](04-03-charged-particles-through-matter.md): an alpha is a slow, doubly-charged bruiser that dumps all its energy in a few microns, shredding DNA in a dense track it can't repair. A gamma-liberated electron is a lightweight that spreads the same energy over centimeters of sparse, mostly-repairable hits. So we multiply absorbed dose by a **radiation weighting factor** $w_R$ that scores "how densely does this radiation ionize?" — 1 for the sparse stuff (betas, gammas, X-rays), about 20 for alphas. That gives **equivalent dose**: the biologically-fair currency.

One more turn of the screw: irradiating a hand is not irradiating a gonad or bone marrow. Different tissues carry different cancer risk per sievert, so a **tissue weighting factor** $w_T$ (they sum to 1 over the body) rolls organ doses into one whole-body **effective dose** — the single number that answers "how much did this raise my lifetime risk?" Three rungs: raw energy, weighted for radiation type, weighted for what got hit.

## The formal version

**Exposure (historical).** The oldest quantity, measured only in *air*: the charge of ionization one photon field liberates per kilogram, once in units of the **roentgen** (R). *In words: how hard the radiation ionizes air.* It's a stand-in for dose from the days before we could measure energy in tissue directly — you'll still see it on old survey meters, but modern work uses the quantities below.

**Absorbed dose.** The energy $\Delta E$ deposited in a mass $\Delta m$ of any material:

$$D = \frac{\Delta E}{\Delta m}, \qquad [D] = \text{J/kg} \equiv \text{gray (Gy)}, \qquad 1\,\text{Gy} = 1\,\text{J/kg}.$$

*In words: dose is just deposited energy divided by the mass it landed in.* The old unit is the **rad**: $1\,\text{rad} = 0.01\,\text{Gy}$, so $1\,\text{Gy} = 100\,\text{rad}$. Absorbed dose is a pure physics quantity — no biology yet.

**Equivalent dose.** Weight the absorbed dose by the radiation's ionization density:

$$H = w_R\, D, \qquad [H] = \text{sievert (Sv)}, \qquad 1\,\text{Sv} = 100\,\text{rem}.$$

*In words: same energy, but scaled up for radiations that pack their damage into dense tracks.* The sievert has the **same base units** as the gray (J/kg) — $w_R$ is dimensionless — but the name flags "this number already accounts for biological effectiveness." Standard weighting factors:

| Radiation | $w_R$ |
|---|---|
| X-rays, $\gamma$, $\beta$ (electrons) | 1 |
| Protons | ~2 |
| Neutrons | ~2–20 (energy-dependent; peak ~20 near 1 MeV) |
| $\alpha$, fission fragments, heavy ions | 20 |

Neutrons vary because their damage runs through the recoil protons and heavy fragments they knock loose (a fast neutron near 1 MeV is worst; very slow or very fast ones are gentler).

**Effective dose.** Sum each tissue's equivalent dose weighted by that tissue's risk share:

$$E = \sum_T w_T\, H_T, \qquad \sum_T w_T = 1.$$

*In words: add up the organ doses, giving more weight to organs where a sievert buys more cancer risk.* Representative $w_T$: red bone marrow, lung, colon, stomach, breast each $\approx 0.12$; gonads $\approx 0.08$; thyroid, bladder, liver $\approx 0.04$; skin, bone surface $\approx 0.01$. If a *uniform* whole-body field hits everything equally, the weights sum to 1 and $E = H$ — the tissue weighting only bites for partial-body exposures.

**Dose rate and typical numbers.** Dose accumulates over time; a **dose rate** $\dot E$ (e.g. mSv/h or µSv/h) integrated over exposure time gives total dose. Anchors worth memorizing:

- Natural background: $\approx 3\ \text{mSv/yr}$ (cosmic rays, radon, potassium-40 in your own body).
- Occupational limit (radiation workers): $\approx 20\ \text{mSv/yr}$ (some regimes allow up to 50 in a single year).
- Public limit above background: $\approx 1\ \text{mSv/yr}$.
- Acute whole-body $\sim 1\ \text{Sv}$: radiation sickness; $\sim 4\text{–}5\ \text{Sv}$: roughly 50% lethal without treatment.

Note the factor of ~1000 between an annoying chronic dose (mSv) and an acute lethal one (Sv), and that dose *rate* matters as much as total: 3 mSv spread over a year is background; 3 Sv in an hour is an emergency.

## Picture

![Left: the dose ladder from absorbed dose D (gray) up through equivalent dose H (sievert, via times w_R) to effective dose E (sievert, via sum of w_T). Right: a bar chart of the radiation weighting factor w_R — 1 for beta/gamma/x-rays, 2 to 20 for neutrons, 20 for alpha.](assets/04-04-dose-quantities-fig1.svg)

## Worked examples

**Example 1 (the boss shape — equal dose, unequal harm).** A worker's tissue absorbs $2\ \text{mGy}$ from gamma rays and, separately, $2\ \text{mGy}$ from alpha particles. Find each equivalent dose and the total.

*Gamma* ($w_R = 1$): $\;H_\gamma = w_R D = 1 \times 2\,\text{mGy} = 2\ \text{mSv}.$

*Alpha* ($w_R = 20$): $\;H_\alpha = w_R D = 20 \times 2\,\text{mGy} = 40\ \text{mSv}.$

*Total equivalent dose:* $\;H = H_\gamma + H_\alpha = 2 + 40 = \boxed{42\ \text{mSv}}.$

The absorbed doses were *identical* — 2 mGy each, the same joules per kilogram — yet the alpha delivers **20× the biological insult**. Why? From [4.3](04-03-charged-particles-through-matter.md): the alpha's huge stopping power crams that energy into a few-micron track, so every cell it crosses takes a dense cluster of ionizations — the kind of double-strand DNA breaks cells botch when they try to repair. The gamma's electrons scatter their energy thinly over long paths, mostly single hits the cell fixes. Equal dose, unequal damage: that gap is exactly what $w_R$ exists to encode.

**Example 2 (the full ladder — an inhaled alpha emitter).** A worker inhales a speck of an alpha-emitting dust that lodges in the lungs and delivers an absorbed dose of $D = 5\ \text{mGy}$ of alpha radiation to lung tissue *only* (negligible elsewhere). Take $w_R = 20$ for alpha and the lung tissue weighting $w_T = 0.12$. Find the equivalent dose to the lung and the whole-body effective dose, and compare to the annual occupational limit.

*Rung 2 — equivalent dose to the lung:*

$$H_\text{lung} = w_R D = 20 \times 5\,\text{mGy} = 100\ \text{mSv}.$$

*Rung 3 — effective dose* (only the lung is irradiated, so the sum has one term):

$$E = w_T H_\text{lung} = 0.12 \times 100\,\text{mSv} = \boxed{12\ \text{mSv}}.$$

So a *local* lung dose of 100 mSv counts as a *whole-body* effective dose of 12 mSv — because the lung carries 12% of the body's radiation risk. That 12 mSv sits below the $\approx 20\ \text{mSv/yr}$ occupational limit but well above the $\approx 1\ \text{mSv/yr}$ public limit and the $\approx 3\ \text{mSv/yr}$ background: a single inhalation, quietly using up most of a year's allowance. This is precisely the radon-and-lung-cancer story — a bridge into radiation biophysics, where these tracks become measured DNA lesions (see [`biophysics`](../../biophysics/syllabus.md)).

## Watch out

- **You might think equal absorbed dose means equal harm.** It doesn't — that's the entire reason $w_R$ exists. 2 mGy of alpha (40 mSv) is 20× worse than 2 mGy of gamma (2 mSv), because dense ionization tracks overwhelm cellular repair. Gray measures energy; sievert measures hazard.
- **You might treat gray and sievert as different units.** Both are J/kg — $w_R$ and $w_T$ are dimensionless. The different *names* are a labeling convention: "Gy" says raw energy, "Sv" says already-weighted-for-biology. Never quote a badge reading in Gy when you mean the weighted risk.
- **Effective dose is a protection quantity, not a therapy quantity.** The $w_T$ machinery is built for estimating *stochastic* (cancer) risk from low, whole-body-ish exposures. For radiotherapy — deliberately delivering tens of grays to a tumor — you quote absorbed dose in Gy (with a separate biological effectiveness factor), not sieverts of effective dose.

## One-liner

> Absorbed dose (Gy) is the energy per kilogram; multiply by $w_R$ for the radiation's ionization density to get equivalent dose (Sv), then by tissue weights $w_T$ for whole-body effective dose — because a joule from an alpha is not a joule from a gamma.

## Problems

**P1 (🟢)** A radiation worker spends $2000$ hours a year in an area with a steady gamma dose rate of $0.8\ \mu\text{Sv/h}$. (a) What annual effective dose do they receive? (b) How does it compare to natural background ($\approx 3\ \text{mSv/yr}$) and the $\approx 20\ \text{mSv/yr}$ occupational limit?

**P2 (🟡)** A small tissue volume is exposed to a mixed field: it absorbs $1.0\ \text{mGy}$ from gamma rays ($w_R = 1$) and $0.4\ \text{mGy}$ from fast neutrons, for which $w_R = 10$ at this energy. Find the total equivalent dose in mSv, and state which component dominates.

**P3 (🔴)** A $2\ \text{g}$ tumor absorbs $1.0\times10^{11}$ alpha particles, each depositing all of its $5\ \text{MeV}$ locally. (a) Find the absorbed dose in Gy (use $1\ \text{MeV} = 1.602\times10^{-13}\ \text{J}$). (b) Express it in rad. (c) Would you report this exposure in Gy or Sv — and why?

<details>
<summary>Solutions</summary>

**P1** (a) Multiply the rate by the exposure time:

$$E = \dot E \times t = 0.8\ \tfrac{\mu\text{Sv}}{\text{h}} \times 2000\ \text{h} = 1600\ \mu\text{Sv} = \boxed{1.6\ \text{mSv/yr}}.$$

(b) That's about half of natural background (3 mSv/yr) and well under the 20 mSv/yr occupational limit — a low, routine occupational dose. *Check.* $1600\ \mu\text{Sv} = 1.6\ \text{mSv}$ ✓; gammas have $w_R = 1$, so the µSv reading already is the equivalent/effective dose here.

**P2** Weight each component by its $w_R$, then add:

$$H_\gamma = 1 \times 1.0 = 1.0\ \text{mSv}, \qquad H_n = 10 \times 0.4 = 4.0\ \text{mSv},$$
$$H = H_\gamma + H_n = 1.0 + 4.0 = \boxed{5.0\ \text{mSv}}.$$

The neutrons dominate ($4.0$ of $5.0$ mSv, 80%) even though they deposited *less* absorbed dose ($0.4$ vs $1.0$ mGy) — their $w_R = 10$ more than makes up the difference. *Check.* Same lesson as Example 1: densely-ionizing radiation punches above its energy. ✓

**P3** (a) Total energy deposited:

$$\Delta E = (1.0\times10^{11})(5\ \text{MeV})(1.602\times10^{-13}\ \tfrac{\text{J}}{\text{MeV}}) = 5.0\times10^{11}\times1.602\times10^{-13}\ \text{J} = 8.01\times10^{-2}\ \text{J}.$$

Divide by the mass $\Delta m = 2\ \text{g} = 2\times10^{-3}\ \text{kg}$:

$$D = \frac{\Delta E}{\Delta m} = \frac{8.01\times10^{-2}\ \text{J}}{2\times10^{-3}\ \text{kg}} \approx \boxed{40\ \text{Gy}}.$$

(b) $40\ \text{Gy} \times 100\ \tfrac{\text{rad}}{\text{Gy}} = 4000\ \text{rad} = 4\ \text{krad}.$

(c) Report it in **Gy**. This is a deliberate, localized therapy-scale dose meant to *kill* the tumor by direct cell destruction, so we quote absorbed energy (Gy); effective dose in Sv is a whole-body cancer-risk protection quantity and would be meaningless here (a formal $w_R = 20$ would give an absurd $800$ Sv). *Check.* 40 Gy is a realistic tumor dose; the arithmetic $8.01\times10^{-2}/2\times10^{-3} = 40.05$ ✓.

</details>

## Flashback

**From Lesson 4.3 (charged particles through matter):** At the *same speed*, compare the stopping power (energy lost per unit path length) of an alpha particle (charge $+2e$) to that of a proton (charge $+1e$) traversing the same material. By what factor do they differ, and how does this connect to why the alpha earns $w_R \approx 20$ while the proton gets only $\approx 2$?

<details>
<summary>Solution</summary>

Stopping power scales with the square of the projectile charge (the Bethe result, $-dE/dx \propto z^2/v^2$). At equal speed $v$, only the charge $z$ differs, so

$$\frac{(-dE/dx)_\alpha}{(-dE/dx)_p} = \frac{z_\alpha^2}{z_p^2} = \frac{2^2}{1^2} = 4.$$

The alpha loses energy **4× faster**, packing its ionizations into a shorter, denser track. That density of ionization is exactly what the radiation weighting factor scores: denser tracks make more clustered, harder-to-repair DNA damage, so the alpha ($w_R \approx 20$) is judged far more biologically harmful than the proton ($w_R \approx 2$) even at matched speed. Stopping power in 4.3 and $w_R$ here are two views of the same underlying fact. ✓

</details>

## Connections

- **Backward:** the whole ladder rests on [4.2](04-02-photons-through-matter.md) and [4.3](04-03-charged-particles-through-matter.md) — *how much* energy the radiation drops (attenuation, stopping power) sets absorbed dose, and *how densely* it drops it (Bragg-peak track structure) sets $w_R$. Dose is just interaction physics with a biology label bolted on.
- **Forward:** dosimetry and shielding design in [`radiation-detection-shielding`](../../radiation-detection-shielding/syllabus.md) turn these definitions into instruments and barriers — detectors that read out dose rate, and shield thicknesses (via [4.2](04-02-photons-through-matter.md)'s $\mu$) sized to keep $E$ under the limits above.
- **Sideways (radiation biology):** the leap from "dense ionization track" to "cancer risk" is the subject of radiation biophysics — see [`biophysics`](../../biophysics/syllabus.md), where $w_R$ and $w_T$ are grounded in measured DNA double-strand-break yields and epidemiological risk coefficients rather than taken as given.

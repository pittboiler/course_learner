# Human Physiology · Lesson 2.5: Gas exchange and transport

> ⏱ ~15 min · Module 2: The cardiovascular and respiratory systems · Builds on: [2.4](02-04-ventilation-lung-mechanics.md), [1.2](01-02-membrane-transport.md) · Unlocks: 3.3 (acid–base balance), 4.3 (exercise physiology)

## Why this matters

[2.4](02-04-ventilation-lung-mechanics.md) got air into the alveolus. That was the mechanical half. Now comes the part that actually keeps you alive: getting oxygen out of that air, into blood, and all the way to a mitochondrion — and pulling carbon dioxide back the other way.

Two equations do almost all the work: the alveolar gas equation tells you what oxygen pressure the lung *should* deliver, and the content equation tells you how much oxygen the blood *actually carries*. The gap between them — pressure versus content — is the most consequential confusion in the whole subject, and it gives the lesson its punchline: **a healthy person breathing pure oxygen raises their arterial oxygen pressure sevenfold and their oxygen content by about a tenth.**

Everything downstream needs this. Acid–base balance ([3.3](03-03-fluid-electrolyte-acid-base.md)) is the carbon dioxide half of this lesson; exercise ([4.3](04-03-exercise-integrative-physiology.md)) is all of it at five times the rate.

## The idea

**Gases move down partial-pressure gradients, not concentration gradients.** A gas dissolved in blood has a *partial pressure* — the pressure of the gas phase that would be in equilibrium with it — and diffusion is driven by that, and only that. Solubility then decides how many molecules a given pressure buys, and solubility differs wildly between gases.

**Oxygen is barely soluble in plasma** — so poorly that a person relying on dissolved oxygen alone would die in a minute. So blood cheats: it packs in hemoglobin, four oxygen sites per molecule. **Hemoglobin lets blood carry roughly seventy times more oxygen than plasma could dissolve while keeping the partial pressure low**, and the low pressure is the whole point, because it keeps the diffusion gradient from the alveolus steep.

That trick costs you the thing this lesson exists to fix: **partial pressure and content are now almost unrelated quantities.** An anemic patient can have a perfect oxygen pressure and dangerously little oxygen; a cyanotic patient with a low pressure may be carrying more.

**The journey has four steps**, each with its own limiting factor:

1. **Alveolus** — the alveolar gas equation sets the starting pressure.
2. **Blood–gas barrier** — diffusion across a huge, thin membrane; almost never limiting in health.
3. **Matching** — ventilation and blood flow must arrive at the *same* alveolus. This is where things actually go wrong.
4. **Carriage and release** — the sigmoid curve loads at the lung and unloads at the tissue.

**The strategic point: at rest in health, step 2 is not a bottleneck at all.** Diffusion is so fast relative to blood transit that the only variables left are how much gas arrives, how much blood arrives, and whether they meet. That is why **ventilation–perfusion matching, not diffusion, is the dominant cause of low blood oxygen.**

## The formal version

### The alveolar gas equation

Air at sea level has barometric pressure $P_B = 760$ mmHg. The first thing the airway does is **saturate it with water vapour at body temperature**, and water vapour at $37^\circ$C exerts $P_{H_2O} = 47$ mmHg regardless of what else is present. That vapour takes up space, so the other gases share only the dry remainder:

$$P_{I O_2} = F_{I O_2}\,(P_B - P_{H_2O})$$

*In words: the inspired oxygen pressure reaching the alveolus is the oxygen fraction times the __dry__ gas pressure, not the barometric pressure.* With $F_{I O_2} = 0.21$:

$$P_{I O_2} = 0.21 \times (760 - 47)\ \text{mmHg} = 0.21 \times 713 = 149.7 \approx 150\ \text{mmHg}$$

**Humidification costs you 10 mmHg of oxygen before any gas exchange happens at all** — proportionally more at altitude, since $P_{H_2O}$ stays at 47 mmHg while $P_B$ falls.

Inside the alveolus, oxygen leaves into blood and carbon dioxide arrives, but more slowly, in the ratio

$$R = \frac{\dot{V}_{CO_2}}{\dot{V}_{O_2}} \approx 0.8 \quad \text{on a mixed diet}$$

$R$ is the **respiratory exchange ratio** — carbon dioxide produced per oxygen consumed. It is set by which fuel you are burning (about 1.0 for pure carbohydrate, 0.7 for pure fat), not by the lung. Correcting for it:

$$\boxed{\;P_{A O_2} = P_{I O_2} - \frac{P_{a CO_2}}{R}\;}$$

*In words: alveolar oxygen pressure is the inspired pressure minus the oxygen displaced by the carbon dioxide that arrived in its place, scaled by how unequally the two gases are exchanged.*

Three things worth noticing:

- **We use $P_{a CO_2}$ — arterial, not alveolar.** Carbon dioxide diffuses so easily that the two are effectively identical, and arterial is the one you can measure.
- **$P_{a CO_2}$ is set by ventilation**, via [2.4](02-04-ventilation-lung-mechanics.md)'s $P_{a CO_2} \propto \dot{V}_{CO_2}/\dot{V}_A$. Hypoventilation raises $P_{a CO_2}$ and *necessarily* lowers $P_{A O_2}$: the two are locked together.
- Dividing by $R < 1$ means the penalty exceeds the carbon dioxide pressure — 40 mmHg of CO2 costs 50 mmHg of O2.

At rest, $P_{a CO_2} = 40$ mmHg:

$$P_{A O_2} = 150 - \frac{40}{0.8} = 150 - 50 = \mathbf{100\ \text{mmHg}}$$

### The alveolar–arterial gradient

Measured arterial oxygen is always a little lower than alveolar — around 95 mmHg in a young adult. The difference is the **A–a gradient**:

$$P_{(A-a) O_2} = P_{A O_2} - P_{a O_2} = 100 - 95 = 5\ \text{mmHg}$$

*In words: how much oxygen pressure is lost between the gas the lung holds and the blood it delivers.* Normal is under about 15 mmHg in a young adult on room air, widening with age.

**This is the most useful diagnostic quantity in respiratory physiology**, because it separates two causes of hypoxemia that look identical on a blood gas:

| A–a gradient | What it means |
|---|---|
| **Normal** | The lung is exchanging fine; the *whole* lung is under-ventilated. Hypoventilation (or low inspired oxygen, at altitude). |
| **Widened** | Gas and blood are failing to meet — V/Q mismatch, shunt, or a diffusion problem. |

**A widened A–a gradient says the exchanging surface itself is at fault.** Note the asymmetry: hypoventilation lowers $P_{A O_2}$ *and* $P_{a O_2}$ together, so the gradient stays normal. Everything else opens it.

### Diffusion across the blood–gas barrier

Fick's law of diffusion ([biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md)) applied to a sheet:

$$\dot{V}_{gas} = \frac{A}{T}\, D \,(P_1 - P_2), \qquad D \propto \frac{\text{solubility}}{\sqrt{MW}}$$

*In words: transfer rate goes up with surface area and the pressure difference, down with thickness, and depends on the gas through its solubility and molecular weight.*

The lung is built to make $A/T$ absurd: roughly **50–100 m² of surface** (a tennis court) over a barrier about **0.3 µm thick**. Both extremes are structural — this is what alveoli *are for*.

**Carbon dioxide diffuses about 20 times faster than oxygen** here, almost entirely because it is far more soluble — which is why **a failing lung becomes hypoxemic long before it becomes hypercapnic.**

**Diffusion-limited versus perfusion-limited.** A red cell spends about 0.75 s in a pulmonary capillary at rest. Two possible fates:

- **Perfusion-limited** — the gas equilibrates with alveolar gas partway along the capillary and nothing more can happen. **The only way to move more gas is to bring more blood.** Oxygen equilibrates in roughly 0.25 s, a third of the way along.
- **Diffusion-limited** — the gas never equilibrates, because blood keeps absorbing it. Carbon monoxide is the extreme: hemoglobin binds it so avidly that its blood partial pressure stays near zero and the gradient never closes, so transfer is set by the barrier itself. That is exactly why carbon monoxide uptake is the clinical test of diffusing capacity.

$$\boxed{\;\textbf{In health, at rest, oxygen is perfusion-limited.}\;}$$

**This is the licence for everything that follows.** With 0.5 s to spare, thickening the barrier a little changes nothing, and the only variables left are ventilation, perfusion, and their matching. (Two things spend that reserve: heavy exercise, which shortens transit time, and altitude, which flattens the gradient. Combine them and even healthy athletes desaturate.)

### Ventilation–perfusion matching

Define the local ratio $\dot{V}_A/\dot{Q}$ — alveolar ventilation to blood flow in one lung unit. Overall it is about 0.8, but **it is not the same everywhere, and the distribution is what matters.**

$$\dot{V}_A/\dot{Q} = 0 \;\longleftrightarrow\; \textbf{shunt} \qquad\qquad \dot{V}_A/\dot{Q} = \infty \;\longleftrightarrow\; \textbf{dead space}$$

| Unit | $\dot{V}_A/\dot{Q}$ | Gas in the alveolus | Blood leaving |
|---|---|---|---|
| **Shunt** (perfused, unventilated) | 0 | never refreshed | unchanged mixed venous |
| Low ratio | < 0.8 | low O2, high CO2 | under-oxygenated |
| Ideal | 0.8 | $P_{O_2}\ 100$, $P_{CO_2}\ 40$ | normal |
| High ratio | > 0.8 | high O2, low CO2 | fully saturated, wastefully |
| **Dead space** (ventilated, unperfused) | $\infty$ | inspired gas | none |

*In words: every lung unit sits somewhere on a line between "blood that never saw air" and "air that never saw blood".*

**Why a normal upright lung is already mismatched.** Gravity does two things at once. Blood is dense, so pressure at the base far exceeds that at the apex and **perfusion increases steeply down the lung**. Apical alveoli are held more expanded by the weight of the lung below them, sitting on a stiffer part of their pressure–volume curve, so **ventilation also increases down the lung, but less steeply.** Two gradients in the same direction with different slopes means their ratio must vary: **$\dot{V}_A/\dot{Q}$ is high at the apex (toward 3) and low at the base (toward 0.6).**

The alveolar gas equation shows the consequence. A high-ratio unit blows off CO2 efficiently — say $P_{CO_2} = 28$ mmHg — giving $P_{A O_2} = 150 - 28/0.8 = 115$ mmHg; a low-ratio unit at $P_{CO_2} = 45$ gives $150 - 45/0.8 = 94$ mmHg. **Regional oxygen pressure varies across a perfectly normal lung**, and mixing that blood is much of the 5 mmHg A–a gradient.

**Hypoxic pulmonary vasoconstriction is the local corrective.** When alveolar oxygen falls in a region, the pulmonary arterioles feeding it **constrict**, diverting blood toward better-ventilated regions — a local oxygen-sensing loop needing no nerves.

> **Contrast with [2.3](02-03-hemodynamics-blood-pressure.md): the sign is opposite to every systemic bed.** Systemic hypoxia causes *vasodilation* — the tissue is asking for more blood. Pulmonary hypoxia causes *vasoconstriction* — the region is announcing it is a bad place to send blood. Both are right: systemic vessels match supply to demand, pulmonary vessels match blood to gas.

**The asymmetry that matters most: supplemental oxygen fixes V/Q mismatch and barely touches a true shunt.** A low-ratio unit still gets *some* ventilation, so raising the inspired fraction raises its alveolar oxygen a great deal and its blood saturates. A shunt unit gets *none* — the oxygen never reaches it at any inspired fraction, and mixed venous blood pours into the arterial circulation unchanged. **Failure to improve on high-flow oxygen is the signature of a shunt**, and Example 2 makes the number brutal.

### Oxygen carriage

$$\boxed{\;C_{a O_2} = \underbrace{1.34 \times [\text{Hb}] \times S_{a O_2}}_{\text{bound to hemoglobin}} \;+\; \underbrace{0.003 \times P_{a O_2}}_{\text{dissolved}}\;}$$

with $[\text{Hb}]$ in g/dL, $S_{a O_2}$ the fractional saturation, $P_{a O_2}$ in mmHg, and $C_{a O_2}$ in mL oxygen per dL blood. 1.34 mL/g is hemoglobin's oxygen capacity; 0.003 mL/dL/mmHg is oxygen's plasma solubility.

*In words: almost all the oxygen is on hemoglobin, and the dissolved part is a rounding error visible only at extreme pressures.*

**The curve is sigmoid because hemoglobin is cooperative** — binding one oxygen shifts the whole tetramer toward its high-affinity form, so the sites are not independent. That is the MWC/Hill story of [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md), and it lets us write

$$S = \frac{P^{\,n}}{P^{\,n} + P_{50}^{\,n}}, \qquad n \approx 2.7,\quad P_{50} \approx 27\ \text{mmHg}$$

$P_{50}$ is the pressure at half saturation — **the standard measure of where the curve sits.** Two regions, two jobs:

- **The flat top (above 60 mmHg) is a safety margin.** From 100 to 60 mmHg, saturation falls only from 97.2 to 89.6 percent — lose 40 mmHg of alveolar oxygen to altitude or mild lung disease and give up eight points. **The loading end is deliberately insensitive.**
- **The steep bottom (below 60 mmHg) is an unloading mechanism.** From 40 to 20 mmHg, saturation falls from 74.3 to 30.8 percent — a working muscle drops its local pressure a little and hemoglobin dumps a large fraction of its cargo. **The delivery end is deliberately hypersensitive.**

**One molecule, two opposite sensitivities, because the curve bends.**

### Shifts: the Bohr effect and friends

**A right shift (higher $P_{50}$, lower affinity) means unloading more readily.** It is caused, all together, by exactly the conditions that mark a hard-working tissue:

| Right shift (unload) | Left shift (hold on) |
|---|---|
| ↑ $P_{CO_2}$, ↓ pH — the **Bohr effect** | ↓ $P_{CO_2}$, ↑ pH |
| ↑ temperature | ↓ temperature |
| ↑ 2,3-BPG (chronic hypoxia, altitude, anemia) | ↓ 2,3-BPG (stored blood) |
| — | **Fetal hemoglobin** (HbF binds 2,3-BPG poorly) |

**The Bohr effect is a signal, not a side effect.** A tissue producing carbon dioxide, acid and heat is a tissue that needs oxygen, and those three products directly loosen hemoglobin's grip exactly where the need is. Fetal hemoglobin runs it backwards: HbF binds 2,3-BPG poorly, so its curve sits *left*, and the fetus pulls oxygen across the placenta from maternal blood that is releasing it.

**Now the elegant part.** A right shift costs almost nothing at the lung and pays a great deal at the tissue — **because the curve is flat up there.** Shift $P_{50}$ from 27 to 34 mmHg, with $[\text{Hb}] = 15$ g/dL:

$$\text{at the lung } (P_{O_2}=95): \quad 96.8\% \to 94.1\%, \quad \Delta C = 1.34\times15\times0.027 = 0.53\ \text{mL/dL lost}$$

$$\text{at the tissue } (P_{O_2}=40): \quad 74.3\% \to 60.8\%, \quad \Delta C = 1.34\times15\times0.135 = 2.71\ \text{mL/dL released}$$

$$\text{net gain in oxygen delivered per dL} = 2.71 - 0.53 = \mathbf{2.18\ \text{mL/dL}}$$

The arteriovenous oxygen difference rises from 4.52 to 6.70 mL/dL — **a 48 percent increase in oxygen extraction, bought for a 2.7-point loss of arterial saturation.** The flat top is what makes the trade a bargain.

### Carbon dioxide carriage

Carbon dioxide leaves the tissues in three forms:

| Form | Share of total blood content | Mechanism |
|---|---|---|
| **Bicarbonate** | ~90% | $\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^+ + \text{HCO}_3^-$ |
| Carbamino compounds | ~5% | CO2 bound to terminal amino groups on hemoglobin |
| Dissolved | ~5% | 20× more soluble than oxygen |

**Bicarbonate dominates, and the red cell makes it possible.** The hydration reaction is far too slow uncatalysed; **carbonic anhydrase**, present in red cells and absent from plasma, accelerates it by orders of magnitude. So the reaction runs *inside* the cell, and two products must be handled:

- The $\text{H}^+$ is mopped up by **deoxygenated hemoglobin, a better proton buffer than the oxygenated form.**
- The $\text{HCO}_3^-$ would accumulate and stall the reaction, so band 3 exports it into plasma with $\text{Cl}^-$ moving in to preserve electroneutrality — the **chloride shift**, an antiport of exactly the class in [1.2](01-02-membrane-transport.md).

**The Haldane effect is the Bohr effect's mirror image**, resting on the same molecular fact:

$$\textbf{Bohr: } \text{CO}_2 \text{ and } \text{H}^+ \text{ push O}_2 \textbf{ off} \text{ Hb} \qquad \textbf{Haldane: } \text{O}_2 \text{ pushes CO}_2 \text{ and } \text{H}^+ \textbf{ off} \text{ Hb}$$

*In words: deoxygenated hemoglobin carries more carbon dioxide than oxygenated hemoglobin at the same pressure.*

**The two cooperate at both ends.** At the tissue, arriving CO2 unloads oxygen (Bohr) and unloading oxygen makes hemoglobin a better CO2 carrier (Haldane). At the lung, arriving oxygen drives CO2 off (Haldane) and departing CO2 tightens oxygen binding (Bohr). **Each gas helps the other move the way it needs to, in both organs** — one protein doing both jobs.

One more consequence: the CO2 dissociation curve is **steeper and nearly linear** across the physiological range, with no plateau. That is why ventilation can control $P_{a CO_2}$ so precisely, and why carbon dioxide is the variable the body actually regulates.

### Control of breathing

The respiratory rhythm is generated in the medulla, but the **controlled variable is $P_{a CO_2}$**, held near 40 mmHg.

- **Central chemoreceptors** (medullary, ventral surface) sense the **pH of cerebrospinal fluid**. The blood–brain barrier is nearly impermeable to $\text{H}^+$ and $\text{HCO}_3^-$ but freely permeable to CO2, so arterial CO2 crosses, is hydrated, acidifies the CSF, and is detected. **They sense carbon dioxide by way of pH, and supply most of the ventilatory response to it.**
- **Peripheral chemoreceptors** (carotid and aortic bodies) are the **only** oxygen sensors. Their response is flat until $P_{a O_2}$ falls below roughly 60 mmHg, then rises steeply. They also sense CO2 and pH, and they act within a single breath.

**The oxygen threshold is the knee of the dissociation curve.** Ventilation stays quiet exactly as long as saturation is protected by the flat top, and fires exactly when the curve turns steep. **The sensor's threshold is matched to the carrier's kinetics.**

**Why carbon dioxide is the minute-to-minute controller:** its response is steep and near-linear over the normal range, while the oxygen response is essentially zero until you are already in trouble. Oxygen is a backup alarm; carbon dioxide is the thermostat. And it is precisely [1.1](01-01-homeostasis-feedback-control.md)'s loop:

$$\underbrace{P_{a CO_2}\ \uparrow}_{\text{disturbance}} \to \underbrace{\text{chemoreceptors}}_{\text{sensor}} \to \underbrace{\text{medullary centres}}_{\text{controller}} \to \underbrace{\dot{V}_A\ \uparrow}_{\text{effector}} \to \underbrace{P_{a CO_2}\ \downarrow}_{\text{error corrected}}$$

**Negative feedback, with a gain high enough to hold arterial CO2 within a couple of mmHg through a tenfold change in metabolic rate.**

## Picture

![Panel a shows the oxygen hemoglobin dissociation curve, plotting hemoglobin saturation against oxygen partial pressure, with a normal curve at P-fifty of 27 mmHg and a right-shifted curve at 34 mmHg overlaid. The arterial point at 95 mmHg and 96.8 percent and the mixed venous point at 40 mmHg and 74.3 percent are marked, and the flat region above 60 mmHg is annotated as a safety margin while the steep region below 60 is annotated as the unloading mechanism. Panel b compares total arterial oxygen content on room air and on pure oxygen as stacked bars, splitting each into the hemoglobin-bound part and the much smaller dissolved part, showing 19.73 versus 22.07 millilitres per decilitre.](assets/02-05-fig1.svg)

## Worked examples

### Example 1 — the whole journey, in numbers (and why pure oxygen does so little)

A resting adult at sea level: $[\text{Hb}] = 15$ g/dL, $P_{a CO_2} = 40$ mmHg, $R = 0.8$, cardiac output 5 L/min, A–a gradient 5 mmHg. Take $P_{50} = 27$ mmHg and $n = 2.7$.

**(a) Alveolar and arterial oxygen on room air.**

$$P_{I O_2} = 0.21(760-47) = 149.7\ \text{mmHg}, \qquad P_{A O_2} = 149.7 - \frac{40}{0.8} = 99.7 \approx 100\ \text{mmHg}$$

$$P_{a O_2} = 100 - 5 = 95\ \text{mmHg} \;\Longrightarrow\; S_{a O_2} = \frac{95^{2.7}}{95^{2.7}+27^{2.7}} = 0.968$$

**(b) Arterial oxygen content.**

$$C_{a O_2} = 1.34(15)(0.968) + 0.003(95) = 19.45 + 0.29 = \mathbf{19.73\ \text{mL/dL}}$$

**Note the split: 19.45 bound, 0.29 dissolved. Dissolved oxygen is 1.4 percent of the total.**

**(c) Mixed venous, and a consistency check via Fick.** At $P_{\bar{v} O_2} = 40$ mmHg, $S = 40^{2.7}/(40^{2.7}+27^{2.7}) = 0.743$:

$$C_{\bar{v} O_2} = 1.34(15)(0.743) + 0.003(40) = 14.93 + 0.12 = 15.05\ \text{mL/dL}$$

$$\dot{V}_{O_2} = \dot{Q}\,(C_{a O_2} - C_{\bar{v} O_2}) = 5\ \tfrac{\text{L}}{\text{min}} \times 46.8\ \tfrac{\text{mL}}{\text{L}} = \mathbf{234\ \text{mL/min}}$$

A textbook resting oxygen consumption. ✓ Delivery is $19.73 \times 50\ \text{dL/min} = 987$ mL/min, so **the body extracts only about 24 percent of the oxygen it is offered** — the reserve that exercise cashes in.

**(d) Now breathe 100 percent oxygen.** $F_{I O_2} = 1.0$, everything else unchanged:

$$P_{I O_2} = 1.0(713) = 713\ \text{mmHg}, \qquad P_{A O_2} = 713 - 50 = 663\ \text{mmHg}, \qquad P_{a O_2} = 658\ \text{mmHg}$$

Saturation at 658 mmHg is 99.98 percent — call it 1.000.

$$C_{a O_2} = 1.34(15)(1.000) + 0.003(658) = 20.10 + 1.97 = \mathbf{22.07\ \text{mL/dL}}$$

**(e) Compare.**

| | room air | 100% oxygen | change |
|---|---|---|---|
| $P_{a O_2}$ | 95 mmHg | 658 mmHg | **×6.9** |
| bound | 19.45 mL/dL | 20.10 mL/dL | +0.65 |
| dissolved | 0.29 mL/dL | 1.97 mL/dL | +1.68 |
| **total content** | **19.73 mL/dL** | **22.07 mL/dL** | **+11.9 percent** |

**A sevenfold rise in partial pressure buys a twelfth more oxygen.** Two independent reasons, and you need both:

1. **Hemoglobin was already 96.8 percent full** — only 3.2 points of capacity left, worth 0.65 mL/dL, and no pressure can create more binding sites.
2. **The dissolved term stays small even at absurd pressures.** At 658 mmHg, plasma carries under 2 mL/dL — less than a tenth of what the hemoglobin holds.

**This is part (d) of the syllabus's Boss problem 2, and the reason oxygen therapy is for people whose saturation is actually low:** on the flat top of the curve there is nothing up there to buy. (The exception proves the rule — at 3 atmospheres in a hyperbaric chamber the dissolved term reaches roughly 6 mL/dL, enough to supply resting tissues with no hemoglobin at all, which is why hyperbaric oxygen treats severe carbon monoxide poisoning.)

### Example 2 — shunt versus mismatch, and why oxygen fails

The same person develops a **30 percent shunt**: three tenths of the cardiac output bypasses ventilated alveoli entirely, mixed venous content unchanged at 15.05 mL/dL. Does oxygen fix it?

**On room air.** Blood leaving normal units equilibrates with $P_{A O_2} = 100$ mmHg, so $S = 0.971$:

$$C_{c' O_2} = 1.34(15)(0.971) + 0.003(100) = 19.53 + 0.30 = 19.83\ \text{mL/dL}$$

Arterial blood is the flow-weighted mix — **and you must mix contents, never pressures:**

$$C_{a O_2} = 0.70(19.83) + 0.30(15.05) = 13.88 + 4.52 = 18.39\ \text{mL/dL}$$

Backing out the pressure (subtract dissolved, convert to saturation, invert the Hill equation) gives $P_{a O_2} \approx \mathbf{62\ \text{mmHg}}$, $S_{a O_2} \approx 90.6$ percent. **A–a gradient $= 100 - 62 = 38$ mmHg — grossly widened.** Hypoxemic.

**Now give 100 percent oxygen.** Normal units now leave at 22.09 mL/dL (from Example 1). Shunted blood is untouched — **it never sees the oxygen, because no gas reaches it.**

$$C_{a O_2} = 0.70(22.09) + 0.30(15.05) = 15.46 + 4.52 = 19.98\ \text{mL/dL}$$

$$\Longrightarrow \quad P_{a O_2} \approx \mathbf{109\ \text{mmHg}}$$

| | 30% shunt, room air | 30% shunt, 100% oxygen | healthy, 100% oxygen |
|---|---|---|---|
| $P_{a O_2}$ | 62 mmHg | **109 mmHg** | 658 mmHg |
| A–a gradient | 38 mmHg | **554 mmHg** | 5 mmHg |

**Flooding the lung with pure oxygen moved this patient from 62 to 109 mmHg — barely better than a healthy person on room air, and 549 mmHg short of where they should be.** The reason is arithmetic, not biology: **the well-ventilated units were already nearly saturated, so all the extra oxygen could add was dissolved gas in 70 percent of the blood, and that trickle is then diluted by unchanged venous blood.**

**Contrast a low-V/Q unit.** Had those units instead had $\dot{V}_A/\dot{Q} = 0.1$ — badly under-ventilated but not zero — their blood would leave on the steep part of the curve on room air. Raise $F_{I O_2}$ to 1.0 and even a trickle of ventilation now delivers oxygen at 713 mmHg into that alveolus, whose pressure climbs far past 100 mmHg, and its blood saturates fully.

$$\boxed{\;\text{Oxygen rescues } \dot{V}_A/\dot{Q} > 0. \text{ It cannot rescue } \dot{V}_A/\dot{Q} = 0.\;}$$

**The response to oxygen is therefore a diagnostic test, not just a treatment**: hypoxemia that corrects readily was mismatch, hypoxemia that refuses to correct is shunt — and shunt needs the alveoli reopened, not more oxygen poured at closed doors.

## Watch out

- **You might think oxygen diffuses down its concentration gradient.** It diffuses down its **partial pressure** gradient. Blood at 95 mmHg holds vastly more oxygen per unit volume than alveolar gas at 100 mmHg — yet oxygen still flows gas → blood. **Hemoglobin works precisely by hiding oxygen from the pressure gauge.**
- **You might read a pulse oximeter as a delivery meter.** Saturation is the *fraction of hemoglobin* occupied. A patient with $[\text{Hb}] = 7$ g/dL at $S_{a O_2} = 100$ percent carries 9.4 mL/dL — **less than half** of our subject's 19.7 — with a perfect-looking oximeter. **Content needs hemoglobin, saturation and pressure; delivery needs cardiac output too.**
- **You might average partial pressures across lung units.** You cannot: pressure and content are nonlinearly related, so **mix contents and convert back.** This is exactly why a few high-V/Q units cannot compensate for a few low ones — the good units are stuck on the flat top with nothing extra to contribute.
- **You might expect a widened A–a gradient whenever oxygen is low.** Hypoventilation and altitude lower $P_{A O_2}$ and $P_{a O_2}$ *together* and leave it normal. **The gradient asks whether the exchanging surface works, not whether oxygen is adequate.**
- **You might think the Bohr shift is a design flaw at the lung.** It costs 0.53 mL/dL of loading and returns 2.71 mL/dL of unloading, because the curve is flat at one end and steep at the other. **Curvature is what makes an asymmetric trade possible.**
- **You might expect lung disease to raise CO2 as readily as it lowers O2.** CO2 diffuses twenty times faster and sits on a steep linear curve, so ventilation clears it easily — and hypoxic drive pushes it *down*. **Hypoxemia comes first; hypercapnia means the pump itself is failing.**

## One-liner

> Partial pressure drives diffusion but hemoglobin carries the cargo, and because the dissociation curve is flat on top and steep at the bottom, the same curvature that makes a healthy person's oxygen therapy nearly useless is what makes the Bohr shift nearly free.

## Problems

**P1 (🟢)** A patient at sea level breathing room air is over-sedated. Arterial gas: $P_{a CO_2} = 50$ mmHg, $P_{a O_2} = 65$ mmHg. Take $R = 0.8$. (a) Compute $P_{I O_2}$. (b) Compute $P_{A O_2}$. (c) Compute the A–a gradient. (d) The team concludes "this is purely sedation-induced hypoventilation." Evaluate that, and say what the gradient would have been if they were right.

**P2 (🟡, bridges to hematology and to [4.3](04-03-exercise-integrative-physiology.md))** Two patients, each with cardiac output 5 L/min:

- **A:** $[\text{Hb}] = 9$ g/dL, $S_{a O_2} = 99$ percent, $P_{a O_2} = 100$ mmHg. Looks pink; oximeter reads 99.
- **B:** $[\text{Hb}] = 15$ g/dL, $S_{a O_2} = 70$ percent, $P_{a O_2} = 38$ mmHg. Visibly cyanotic.

(a) Compute each arterial oxygen content. (b) Compute each oxygen delivery in mL/min. (c) Which patient is in more trouble, and what does that say about using $P_{a O_2}$ or saturation alone? (d) Both start exercising, which requires extracting more oxygen per unit blood. Which one's dissociation curve helps more, and why?

**P3 (🔴, optional)** A patient has a 20 percent shunt. Mixed venous content is 14.0 mL/dL; $[\text{Hb}] = 15$ g/dL; on 100 percent oxygen the ventilated units leave at $P_{O_2} = 600$ mmHg with $S = 1.000$. (a) Compute end-capillary content of the ventilated units. (b) Compute arterial oxygen content. (c) Using $S = P^{2.7}/(P^{2.7} + 27^{2.7})$, estimate $P_{a O_2}$ — you may iterate, starting from a guess of 150 mmHg. (d) The shunt fraction is then reduced to 10 percent by re-expanding collapsed alveoli, with everything else unchanged. Recompute the arterial content and comment on which intervention — more oxygen or more open alveoli — was worth more.

<details>
<summary>Solutions</summary>

**P1 (a)** Humidified, dry gas pressure is $760 - 47 = 713$ mmHg:

$$P_{I O_2} = 0.21 \times 713 = \mathbf{149.7\ \text{mmHg}}$$

**(b)** $$P_{A O_2} = 149.7 - \frac{50}{0.8} = 149.7 - 62.5 = \mathbf{87.2\ \text{mmHg}}$$

Note the alveolar oxygen has already fallen from 100 to 87 mmHg **purely because carbon dioxide rose** — hypoventilation lowers oxygen even with a perfect lung.

**(c)** $$P_{(A-a) O_2} = 87.2 - 65 = \mathbf{22.2\ \text{mmHg}}$$

**(d) The conclusion is wrong.** Pure hypoventilation lowers alveolar and arterial oxygen **by the same amount**, leaving the gradient untouched. If sedation were the whole story, the gradient would still be the patient's baseline — about **5 mmHg** in a young adult, and under 15 in any case — giving $P_{a O_2} \approx 82$ mmHg.

Instead it is 22 mmHg, **widened**, so there is a *second* problem at the exchanging surface: V/Q mismatch, shunt (atelectasis from lying sedated and not taking deep breaths is the classic), or aspiration. **Reversing the sedation will fix the 62.5 mmHg of CO2 penalty but not the 17 mmHg of extra gradient.**

The diagnostic move in one line: *hypoventilation explains a low $P_{a O_2}$ only as far as the A–a gradient stays normal; whatever gradient is left over needs its own explanation.*

**P2 (a)** $$C_{a O_2}(\text{A}) = 1.34(9)(0.99) + 0.003(100) = 11.94 + 0.30 = \mathbf{12.24\ \text{mL/dL}}$$

$$C_{a O_2}(\text{B}) = 1.34(15)(0.70) + 0.003(38) = 14.07 + 0.11 = \mathbf{14.18\ \text{mL/dL}}$$

**(b)** With $\dot{Q} = 5$ L/min $= 50$ dL/min:

$$\dot{D}_{O_2}(\text{A}) = 12.24 \times 50 = \mathbf{612\ \text{mL/min}} \qquad \dot{D}_{O_2}(\text{B}) = 14.18 \times 50 = \mathbf{709\ \text{mL/min}}$$

**(c) Patient A — the one who looks fine — is carrying and delivering less oxygen**, roughly 14 percent less, despite a textbook-perfect blood gas and a reassuring oximeter.

The reason is that saturation and partial pressure both describe **hemoglobin's state**, not **how much hemoglobin there is**. Patient A's hemoglobin is nearly perfectly loaded; there just is not much of it. Patient B has plenty of hemoglobin only two-thirds loaded, and two-thirds of a lot beats all of a little.

Two lessons: **(i) $S_{a O_2}$ and $P_{a O_2}$ are blind to anemia**, so a pulse oximeter cannot detect a patient who has lost a third of their red cell mass; **(ii)** the same blindness applies to carbon monoxide poisoning, where saturation *measured by a standard oximeter* can read normal while functional hemoglobin is out of service. Content and delivery need $[\text{Hb}]$ and $\dot{Q}$ as well.

Both patients are also well above the resting consumption of about 234 mL/min, which is why neither is dying at rest — **it is the reserve, not the baseline, that anemia and hypoxemia eat.**

**(d) Patient B's curve helps far more, because B is sitting on the steep part of it.** At $P_{a O_2} = 38$ mmHg, B's blood is at the knee: dropping tissue oxygen pressure by 10 mmHg, to 28 mmHg, moves saturation from 71.6 to 52.5 percent, releasing $1.34(15)(0.191) = 3.84$ mL/dL. Patient A at 100 mmHg is on the flat top: the same 10 mmHg drop moves saturation only from 97.2 to 96.3 percent, releasing $1.34(15)(0.009) = 0.18$ mL/dL — **twenty times less for the same pressure drop.** A must fall much further down the curve before the cargo starts coming off.

So the sigmoid partially compensates for hypoxemia and does **nothing** for anemia. The anemic patient's only compensations are raising cardiac output (which is why chronic anemia produces a hyperdynamic circulation) and raising 2,3-BPG to shift the curve right ([4.3](04-03-exercise-integrative-physiology.md) revisits this under load).

**P3 (a)** $$C_{c' O_2} = 1.34(15)(1.000) + 0.003(600) = 20.10 + 1.80 = \mathbf{21.90\ \text{mL/dL}}$$

**(b)** Mix **contents**, weighted by flow — 80 percent through ventilated units, 20 percent shunted:

$$C_{a O_2} = 0.80(21.90) + 0.20(14.00) = 17.52 + 2.80 = \mathbf{20.32\ \text{mL/dL}}$$

**(c)** Split the content into bound and dissolved and iterate. Writing $S = (C_a - 0.003P)/(1.34 \times 15) = (20.32 - 0.003P)/20.10$ and inverting the Hill equation, $P = 27\left(\frac{S}{1-S}\right)^{1/2.7}$:

| guess $P$ | dissolved | bound | $S$ | new $P$ |
|---|---|---|---|---|
| 150 | 0.45 | 19.87 | 0.9886 | 141 |
| 141 | 0.42 | 19.90 | 0.9899 | 148 |
| 148 | 0.44 | 19.88 | 0.9889 | 142 |
| 145 | 0.44 | 19.88 | 0.9893 | 145 |

It converges near $P_{a O_2} \approx \mathbf{145\ \text{mmHg}}$ (check: $S(145) = 0.9894$, giving $1.34(15)(0.9894) + 0.003(145) = 19.89 + 0.44 = 20.32$ mL/dL ✓).

Against an alveolar pressure of about 663 mmHg, that is an **A–a gradient near 518 mmHg**. A 20 percent shunt on pure oxygen still costs you nearly four-fifths of the available oxygen pressure.

**(d)** Halving the shunt to 10 percent:

$$C_{a O_2} = 0.90(21.90) + 0.10(14.00) = 19.71 + 1.40 = \mathbf{21.11\ \text{mL/dL}}$$

$$\text{gain from halving the shunt} = 21.11 - 20.32 = \mathbf{0.79\ \text{mL/dL}}$$

Compare with the gain from oxygen therapy in Example 1's healthy subject: **2.34 mL/dL, and that was the *best case*, in a lung with nothing wrong with it.** In this patient the arithmetic runs differently again — the ventilated units were already nearly saturated on room air, so the extra inspired oxygen added little there, while every point of shunt fraction removed replaces mixed venous blood (14.0 mL/dL) with fully arterialized blood (21.9 mL/dL), a swing of 7.9 mL/dL per unit of flow redirected.

**The general result: once hemoglobin is nearly saturated in the units that work, the leverage is entirely in the fraction of blood that reaches working units — not in the inspired oxygen fraction.** This is exactly why the management of a collapsed or flooded lung is recruitment — positive end-expiratory pressure, prone positioning, drainage — and why simply turning the oxygen up is the intervention that plateaus fastest.

**One caution on the model:** at high inspired oxygen fractions, nitrogen is washed out of poorly-ventilated alveoli, which can let them collapse and *increase* the shunt (absorption atelectasis). So the real curve is worse than this calculation, not better.

</details>

## Flashback

**From Lesson 2.4 (ventilation and lung mechanics):** Two people each move exactly 6.0 L/min of air, with an anatomical dead space of 150 mL.

- **Rapid-shallow:** tidal volume 250 mL at 24 breaths/min.
- **Slow-deep:** tidal volume 750 mL at 8 breaths/min.

(a) Verify both minute ventilations and compute each dead-space fraction $V_D/V_T$. (b) Compute each alveolar ventilation. (c) The slow-deep breather has $P_{a CO_2} = 38$ mmHg. Using $P_{a CO_2} \propto \dot{V}_{CO_2}/\dot{V}_A$ at the same metabolic rate, find the rapid-shallow breather's $P_{a CO_2}$, then compute each person's $P_{A O_2}$ with $R = 0.8$ and $P_{I O_2} = 150$ mmHg.

<details>
<summary>Solution</summary>

**(a)** $$\dot{V}_E = V_T \times f: \qquad 250 \times 24 = 6000\ \text{mL/min}, \qquad 750 \times 8 = 6000\ \text{mL/min}$$

Both check out. ✓

$$\frac{V_D}{V_T}\bigg|_{\text{shallow}} = \frac{150}{250} = \mathbf{0.60} \qquad \frac{V_D}{V_T}\bigg|_{\text{deep}} = \frac{150}{750} = \mathbf{0.20}$$

**(b)** Dead space is wasted **on every breath**, so it is subtracted before multiplying by frequency:

$$\dot{V}_A = (V_T - V_D)\,f$$

$$\text{shallow: } (250-150)(24) = \mathbf{2400\ \text{mL/min}} \qquad \text{deep: } (750-150)(8) = \mathbf{4800\ \text{mL/min}}$$

**Identical minute ventilation; a factor of two in useful ventilation.** Breathing frequency multiplies the dead-space penalty.

**(c)** At fixed $\dot{V}_{CO_2}$, $P_{a CO_2}$ is inversely proportional to $\dot{V}_A$:

$$P_{a CO_2}^{\text{shallow}} = 38 \times \frac{4800}{2400} = \mathbf{76\ \text{mmHg}}$$

$$P_{A O_2}^{\text{deep}} = 150 - \frac{38}{0.8} = 150 - 47.5 = \mathbf{102.5\ \text{mmHg}}$$

$$P_{A O_2}^{\text{shallow}} = 150 - \frac{76}{0.8} = 150 - 95 = \mathbf{55\ \text{mmHg}}$$

**Same 6 L/min of air, and one of them is severely hypoxemic and severely hypercapnic — with a completely normal A–a gradient**, because nothing is wrong with the exchanging surface. This is the pure-hypoventilation pattern of P1, and it is why rapid shallow breathing is an ominous sign: the patient looks like they are working hard, and almost none of it reaches an alveolus.

(A useful sanity check on the pairing: 55 mmHg lands the shallow breather just below the knee of the dissociation curve — $S = 55^{2.7}/(55^{2.7}+27^{2.7}) = 0.872$ — so this is exactly where the flat top's protection runs out and the carotid bodies finally start to fire.)

</details>

## Connections

- **Backward:** [2.4](02-04-ventilation-lung-mechanics.md) supplied $\dot{V}_A$ and dead space, which set $P_{a CO_2}$ and hence, through the alveolar gas equation, $P_{A O_2}$ — the two lessons are one chain. The chloride shift is a band 3 antiporter, straight from [1.2](01-02-membrane-transport.md). Hypoxic pulmonary vasoconstriction inverts the local metabolic vasodilation of [2.3](02-03-hemodynamics-blood-pressure.md), and oxygen *delivery* multiplies this lesson's content by [2.2](02-02-cardiac-cycle-and-output.md)'s cardiac output.
- **Forward:** [3.3](03-03-fluid-electrolyte-acid-base.md) takes the bicarbonate system built here and makes it the body's main buffer — the Henderson–Hasselbalch equation is this lesson's hydration reaction rearranged, and "respiratory compensation" is the control-of-breathing loop deliberately displacing $P_{a CO_2}$. [4.3](04-03-exercise-integrative-physiology.md) runs everything here at five times the rate, where the 24 percent extraction reserve, the Bohr shift, and the perfusion limit all stop being comfortable margins.
- **Sideways:** the sigmoid is the Hill/MWC curve of [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md) — hemoglobin is that lesson's canonical example, and $n \approx 2.7$ is the same Hill coefficient. Fick's law of diffusion is [biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md). The chemoreceptor loop is [1.1](01-01-homeostasis-feedback-control.md)'s sensor–controller–effector diagram with $P_{a CO_2}$ as the regulated variable, and the reason its gain can be so high is that the CO2 dissociation curve, unlike oxygen's, never saturates.

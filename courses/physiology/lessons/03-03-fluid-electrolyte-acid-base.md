# Human Physiology · Lesson 3.3: Fluid, electrolyte, and acid–base balance

> ⏱ ~15 min · Module 3: Renal and endocrine regulation · Builds on: [3.2](03-02-tubular-transport-concentrating-urine.md), [2.5](02-05-gas-exchange-and-transport.md) · Unlocks: 3.4 (endocrine axes), 4.2 (thermoregulation)

## Why this matters

[3.1](03-01-glomerular-filtration-clearance.md) and [3.2](03-02-tubular-transport-concentrating-urine.md) built the machinery: filter 180 L a day, then claw back what you need. This lesson says what the machinery is *for*. The kidney is not conserving water and salt for their own sake — it is defending three numbers that every cell in your body depends on: **how much fluid there is, what is dissolved in it, and how acidic it is.**

Two payoffs. First, a framework that dissolves most of the confusion about fluid balance: **osmolality and volume are separate controlled variables with separate controllers**, and almost every wrong intuition here comes from treating them as one. Second, a genuinely useful skill — given three numbers from an arterial blood gas, you can classify any acid–base disturbance, say which organ is compensating, and say whether the compensation is doing its job. That is a real diagnostic procedure, and it falls out of one equation.

## The idea

**Body water lives in nested compartments.** For a 70 kg adult, total body water (TBW) is about 60 percent of body weight — 42 L. Two thirds of that is **intracellular** (ICF, 28 L); one third is **extracellular** (ECF, 14 L). The ECF splits again: three quarters **interstitial** (the fluid bathing cells, 10.5 L) and one quarter **plasma** (3.5 L). The famous 60-40-20 rule: TBW is 60 percent of body weight, ICF 40 percent, ECF 20 percent.

The membrane between ICF and ECF is water-permeable but not salt-permeable, so **the ICF/ECF boundary is set by osmolality**. The membrane between interstitium and plasma (the capillary wall) leaks salt freely but not protein, so **the interstitium/plasma boundary is set by Starling forces and albumin** ([2.3](02-03-hemodynamics-blood-pressure.md)). Different barriers, different rules.

**Now the organizing rule of the whole lesson:**

> **Osmolality is regulated by water. Volume is regulated by sodium.**

Two controlled variables, two controllers, two error signals:

| Controlled variable | Sensor | Controller | Effector | Timescale |
|---|---|---|---|---|
| **Osmolality** (~290 mOsm/kg) | hypothalamic osmoreceptors | **ADH** + thirst | water reabsorption in the collecting duct | minutes |
| **Volume** (effective circulating) | JG cells, macula densa, baroreceptors, atrial stretch | **RAAS**, sympathetics, ANP | Na⁺ reabsorption + vascular tone | hours to days |

**Almost every confusion in fluid balance comes from conflating these.** Plasma sodium *concentration* tells you about **water** balance — a low sodium means too much water for the salt present, not too little salt. Total body sodium *content* tells you about **volume**. You can be volume-depleted and hyponatremic simultaneously, which sounds paradoxical only if you insist on one variable.

**The three-infusion test.** Give someone 2 L of three different fluids and watch where it goes. This one comparison exercises the entire framework:

- **Isotonic saline** adds salt and water in the same proportion as the ECF already has. Osmolality does not change, so no water crosses cell membranes. **All 2 L stays extracellular.**
- **Pure water** adds no solute at all. Osmolality falls everywhere, and the water distributes in proportion to compartment size — **two thirds ends up inside cells.**
- **Hypertonic saline** adds more solute than water. ECF osmolality rises, water is *pulled out of cells*, and **the ECF expands by more than the volume infused.**

The pattern to keep: **salt determines the size of the extracellular box; water determines how the total is split between boxes.**

## The formal version

**Compartment measurement by tracer dilution.** Inject a known amount of a tracer that equilibrates in exactly one compartment and measure its concentration once it has:

$$V = \frac{\text{amount injected} - \text{amount excreted}}{\text{equilibrium concentration}}$$

*In words: a tracer confined to a compartment dilutes itself in proportion to how big that compartment is.* Deuterium oxide or tritiated water crosses every membrane and measures TBW; inulin or mannitol stays extracellular and measures ECF; Evans blue binds albumin and measures plasma. **ICF and interstitium are never measured directly** — they are obtained by subtraction, $\text{ICF} = \text{TBW} - \text{ECF}$ and $\text{interstitium} = \text{ECF} - \text{plasma}$.

**Compartment shifts.** Two conservation laws do all the work. Total body osmoles are conserved except for what you add; ICF osmoles are conserved *always*, because solute does not cross the cell membrane. So if $\text{Osm}_{\text{ICF}}$ is the fixed intracellular osmole content and $C$ the new body-wide osmolality,

$$C = \frac{\text{total osmoles}}{\text{total body water}}, \qquad V_{\text{ICF}} = \frac{\text{Osm}_{\text{ICF}}}{C}, \qquad V_{\text{ECF}} = \text{TBW} - V_{\text{ICF}}$$

*In words: compute the new osmolality first, then let the cells find the volume that matches it.*

**Sodium and volume: the renin–angiotensin–aldosterone system.** Renin is released from **juxtaglomerular (granular) cells** in the afferent arteriole in response to three independent signals:

1. **Falling perfusion pressure**, sensed by the JG cells themselves acting as stretch receptors.
2. **Falling NaCl delivery to the macula densa** — the same distal-tubule sensor that runs tubuloglomerular feedback in [3.1](03-01-glomerular-filtration-clearance.md), read in the opposite direction.
3. **Sympathetic tone** via β₁ receptors on the JG cells.

Renin then cleaves circulating angiotensinogen (from liver) to angiotensin I, and **angiotensin-converting enzyme** on pulmonary capillary endothelium clips that to **angiotensin II**. Angiotensin II is the workhorse and it acts in at least five places at once:

| Site | Action | Effect |
|---|---|---|
| Systemic arterioles | vasoconstriction | ↑ total peripheral resistance, ↑ arterial pressure |
| **Efferent arteriole** | preferential constriction | **holds glomerular capillary pressure and GFR up** when renal perfusion falls ([3.1](03-01-glomerular-filtration-clearance.md)) |
| Proximal tubule | stimulates the Na⁺/H⁺ exchanger | ↑ Na⁺ *and* HCO₃⁻ reabsorption |
| Adrenal zona glomerulosa | stimulates aldosterone release | see below |
| Hypothalamus | thirst + ADH release | water retention as well as salt |

**Aldosterone acts on the principal cell** of the late distal tubule and collecting duct. It is a steroid, so it works by transcription and takes hours: it inserts more apical **ENaC** sodium channels, more basolateral **Na⁺/K⁺-ATPase**, and more apical **ROMK** potassium channels. The result is a single coupled transaction — **Na⁺ in, K⁺ out** — plus stimulation of H⁺ secretion by the neighbouring α-intercalated cell. That coupling is why the volume controller and the potassium controller are permanently entangled.

**ANP is the opposing arm.** Atrial myocytes stretched by volume expansion release atrial natriuretic peptide, which dilates the afferent arteriole and constricts the efferent (raising GFR), inhibits Na⁺ reabsorption in the collecting duct, and directly suppresses renin, aldosterone and ADH. RAAS says "keep"; ANP says "dump."

**And the whole thing is the loop from [1.1](01-01-homeostasis-feedback-control.md).** Sensor (JG cells, macula densa, atrial stretch) → controller (RAAS/ANP) → effector (tubular Na⁺ handling, arteriolar tone) → the controlled variable moves back toward the set point → the error signal shrinks → renin release falls. **Negative feedback, with the kidney as the actuator and days as the time constant.**

**Potassium: 98 percent hidden.** Total body K⁺ is about 3500 mmol in a 70 kg adult, but only about $14\,\text{L} \times 4\,\text{mmol/L} = 56\,\text{mmol}$ — under 2 percent — is in the ECF. Everything else is intracellular at roughly 140 mmol/L.

**Why the plasma value is defended so tightly** is [1.3](01-03-resting-membrane-potential.md)'s argument: resting potential tracks $E_K$, and $E_K$ depends on the *ratio* of the two concentrations. Since $[\text{K}^+]_i$ barely moves, **plasma K⁺ sets the resting potential of every excitable cell in the body**:

$$E_K = 61\ \text{mV} \cdot \log_{10}\frac{[\text{K}^+]_o}{[\text{K}^+]_i}$$

At $[\text{K}^+]_o = 4$ and $[\text{K}^+]_i = 140$ mmol/L, $E_K = 61\log_{10}(0.0286) = -94\ \text{mV}$. Double the plasma value to 8 and $E_K = 61\log_{10}(0.0571) = -76\ \text{mV}$ — **an 18 mV depolarization from one number moving inside its own plausible range.** Cells first become hyperexcitable, then inexcitable as sustained depolarization inactivates voltage-gated Na⁺ channels ([1.4](01-04-action-potential.md)), and the heart stops. There is no other ion whose plasma concentration is that load-bearing.

**Two defences, two timescales.** A meal delivers 30–50 mmol of K⁺ into 14 L of ECF. Unbuffered, 40 mmol would raise plasma K⁺ by $40/14 = 2.9$ mmol/L — from 4.0 to 6.9, which is dangerous. It does not happen, because:

- **Internal shift (minutes).** Insulin and β₂-adrenergic stimulation both activate the Na⁺/K⁺-ATPase and drive K⁺ into cells. Insulin release triggered by the same meal that delivered the potassium is a lovely piece of feedforward control.
- **Renal excretion (hours).** Principal-cell secretion, set by aldosterone, distal flow rate, and plasma K⁺ itself.

**Potassium and hydrogen ion are reciprocally coupled**, and this is the non-obvious bit. In acidosis, excess H⁺ enters cells and is buffered on intracellular proteins; to preserve electroneutrality, **K⁺ leaves cells**, and plasma K⁺ rises. Alkalosis runs it backwards. As a rough rule, plasma K⁺ moves about 0.2–0.6 mmol/L per 0.1 unit change in pH — largest for mineral-acid (hyperchloremic) acidoses, much smaller for organic acidoses like lactate and ketones, whose anions accompany the H⁺ into the cell.

**Acid–base: two acid loads, three lines of defence.** Metabolism produces acid in two forms:

- **Volatile acid — CO₂.** At a resting CO₂ production of about 230 mL/min, that is $230 \times 1440 = 331{,}000\ \text{mL/day} = 331\ \text{L/day}$, and at 22.4 L/mol, **roughly 15,000 mmol/day**. It is called volatile because it can be exhaled, and the lung handles all of it.
- **Fixed (non-volatile) acid** — sulfuric acid from methionine and cysteine, phosphoric acid from phospholipids, about **1 mmol/kg/day, so 70 mmol/day**. It cannot be exhaled. The kidney is the only exit.

**The lung's job is over 200 times larger by quantity and vastly easier; the kidney's job is small and slow and there is no backup.**

Defence is layered on three timescales:

| Line | Mechanism | Onset | Capacity |
|---|---|---|---|
| 1 | **Buffering** — bicarbonate in ECF, haemoglobin in blood, phosphate and protein in ICF, carbonate in bone | seconds | limits the pH swing, fixes nothing |
| 2 | **Respiratory compensation** — chemoreceptors change ventilation, moving PaCO₂ | minutes, complete in 12–24 h | large but partial |
| 3 | **Renal correction** — excrete acid, regenerate bicarbonate | hours, complete in 3–5 days | the only true fix for a fixed-acid load |

**The bicarbonate buffer system.** Carbonic anhydrase makes the hydration step fast:

$$\text{CO}_2 + \text{H}_2\text{O} \; \rightleftharpoons \; \text{H}_2\text{CO}_3 \; \rightleftharpoons \; \text{H}^+ + \text{HCO}_3^-$$

$$\boxed{\;\text{pH} = 6.1 + \log_{10}\frac{[\text{HCO}_3^-]}{0.03 \times P_{aCO_2}}\;}$$

where $[\text{HCO}_3^-]$ is in mmol/L, $P_{aCO_2}$ in mmHg, and $0.03\ \text{mmol}\,\text{L}^{-1}\text{mmHg}^{-1}$ is the solubility of CO₂ converting a partial pressure into a dissolved concentration. Normally $24/(0.03 \times 40) = 24/1.2 = 20$, and $\text{pH} = 6.1 + \log_{10} 20 = 6.1 + 1.30 = 7.40$.

*In words: pH is set by the **ratio** of bicarbonate to dissolved CO₂, not by either number alone.* **This is the single most important sentence in acid–base.** A bicarbonate of 12 with a PaCO₂ of 20 gives the same ratio, and therefore the same pH, as 24 with 40 — the patient is profoundly abnormal and their pH is normal.

**Why an open system with a pK of 6.1 is a superb buffer — the non-obvious point.** Buffering power is maximal when pH equals pK. At pH 7.40 we sit 1.3 units above 6.1, at a 20:1 ratio, which for a *closed* buffer would be nearly useless. Two features rescue it:

1. **The system is open.** Add H⁺, and it consumes HCO₃⁻ and generates CO₂ — but that CO₂ is *blown off* rather than accumulating. In a sealed tube the denominator would rise and the pH would fall further; in the body it does not. This alone multiplies effective buffer capacity roughly tenfold.
2. **The two terms are independently regulated by two different organs.** The lung sets the denominator on a timescale of minutes; the kidney sets the numerator on a timescale of days. **A buffer whose numerator and denominator are each under active feedback control is not really a buffer at all — it is a controller**, and that is why bicarbonate carries the ECF despite an unpromising pK.

**A useful non-log form** (Henderson), for checking that a reported blood gas is internally consistent:

$$[\text{H}^+]\ (\text{nmol/L}) = 24 \times \frac{P_{aCO_2}}{[\text{HCO}_3^-]}$$

At 40 and 24 this gives 40 nmol/L, which is pH 7.40. Near 7.40, each 0.01 pH unit is about 1 nmol/L.

**What the kidney actually does.** Two distinct jobs, often confused:

- **Reclamation (proximal tubule, ~80 percent of the filtered load).** The filtered load of bicarbonate is $180\ \text{L/day} \times 24\ \text{mmol/L} = 4320\ \text{mmol/day}$ — sixty times the daily fixed-acid load. The Na⁺/H⁺ exchanger secretes H⁺, which combines with filtered HCO₃⁻ to make CO₂ and water; the CO₂ diffuses into the cell, is rehydrated, and the HCO₃⁻ leaves basolaterally. **No new bicarbonate is made and no net acid is excreted** — this is pure damage control, and losing even a few percent of it swamps everything else.
- **New bicarbonate generation (collecting duct α-intercalated cells).** An H⁺-ATPase pumps H⁺ into the lumen, and for every H⁺ that *leaves the body*, one new HCO₃⁻ enters the blood. But free H⁺ in urine is negligible: at a urine pH of 4.5, $[\text{H}^+] = 10^{-4.5} = 0.032\ \text{mmol/L}$, and in 1.5 L/day that is 0.05 mmol — under a tenth of a percent of the 70 mmol needed. **The H⁺ must be carried out on a buffer:**
  - **Titratable acid** — mostly phosphate, $\text{HPO}_4^{2-} + \text{H}^+ \to \text{H}_2\text{PO}_4^-$, about 20–30 mmol/day, capped by how much phosphate is filtered.
  - **Ammonium** — glutamine metabolized in the proximal tubule yields $\text{NH}_4^+$ and, per molecule, new bicarbonate; about 40–50 mmol/day at baseline and **up to four- or fivefold more in chronic acidosis**. Ammoniagenesis is the adjustable arm and is what "renal correction over days" actually means.

$$\text{net acid excretion} = \text{titratable acid} + \text{NH}_4^+ - \text{urinary HCO}_3^-$$

**Classifying a disturbance from three numbers.** Take pH, PaCO₂, and [HCO₃⁻]:

| Primary disorder | pH | Primary change | Compensation | By |
|---|---|---|---|---|
| Metabolic acidosis | ↓ | **↓ HCO₃⁻** | ↓ PaCO₂ | lung, minutes–hours |
| Metabolic alkalosis | ↑ | **↑ HCO₃⁻** | ↑ PaCO₂ | lung, limited by hypoxia |
| Respiratory acidosis | ↓ | **↑ PaCO₂** | ↑ HCO₃⁻ | kidney, 3–5 days |
| Respiratory alkalosis | ↑ | **↓ PaCO₂** | ↓ HCO₃⁻ | kidney, 3–5 days |

Three rules make this mechanical:

1. **The pH names the *emia*.** Below 7.40 is acidemia, above is alkalemia; whichever primary disorder would produce that direction is the one in charge.
2. **Compensation always moves the second variable the *same way* as the primary.** Both down, or both up. **If PaCO₂ and HCO₃⁻ move in opposite directions, that is two primary disorders, not one plus compensation.**
3. **Compensation never fully corrects pH.** So **a normal pH with abnormal components is a mixed disorder** — one of the highest-yield inferences in the whole subject.

Expected compensation, for testing whether the second organ is doing its job:

| Primary | Expected |
|---|---|
| Metabolic acidosis | $P_{aCO_2} = 1.5\,[\text{HCO}_3^-] + 8 \pm 2$ (Winter's formula) |
| Metabolic alkalosis | $P_{aCO_2}$ rises $\approx 0.7$ mmHg per 1 mmol/L rise in $[\text{HCO}_3^-]$ |
| Acute respiratory acidosis | $[\text{HCO}_3^-]$ rises 1 mmol/L per 10 mmHg rise in $P_{aCO_2}$ |
| Chronic respiratory acidosis | $[\text{HCO}_3^-]$ rises 3.5 mmol/L per 10 mmHg |
| Acute respiratory alkalosis | $[\text{HCO}_3^-]$ falls 2 mmol/L per 10 mmHg fall |
| Chronic respiratory alkalosis | $[\text{HCO}_3^-]$ falls 4–5 mmol/L per 10 mmHg |

Notice that the acute-versus-chronic gap for respiratory disorders is *diagnostic*: the same PaCO₂ with a higher bicarbonate means the kidney has had days to work.

**The anion gap.** Plasma is electroneutral, but routine labs measure only some of the ions. Define

$$\text{AG} = [\text{Na}^+] - \left([\text{Cl}^-] + [\text{HCO}_3^-]\right)$$

*In words: the gap is the unmeasured anions — mostly albumin, with phosphate, sulfate and organic acids.* Conventionally 8–12 mmol/L (modern chloride assays run lower, 3–11; take 12 as the reference for arithmetic below). It matters because it splits metabolic acidosis in two:

- **Raised anion gap** — an acid was *added*, and its conjugate base is an unmeasured anion that replaced the consumed bicarbonate. This narrows the field sharply to **lactate, ketoacids, uraemic anions (sulfate, phosphate), and ingested toxins** (methanol → formate, ethylene glycol → glycolate, salicylate).
- **Normal anion gap (hyperchloremic)** — bicarbonate was *lost* and chloride was retained one-for-one in its place, so the gap does not move: **diarrhoea, renal tubular acidosis, large-volume saline infusion.**

One refinement worth carrying: albumin is the dominant unmeasured anion, so a low albumin lowers the gap and can hide a real one. Add roughly 2.5 mmol/L to the gap for every 1 g/dL that albumin sits below 4 g/dL.

## Picture

![Panel a shows body fluid compartments for a 70 kg adult as proportional blocks: total body water 42 litres split into intracellular 28 litres and extracellular 14 litres, with the extracellular part divided into interstitial 10.5 litres and plasma 3.5 litres, followed by three bars showing where 2 litres of isotonic saline, pure water and 3 percent saline each end up, with the final osmolality of each case. Panel b is an acid-base map with plasma bicarbonate on the vertical axis and arterial carbon dioxide tension on the horizontal axis, the normal point marked at 40 millimetres of mercury and 24 millimoles per litre, a dashed diagonal line of constant pH 7.40 separating acidemia below from alkalemia above, and four two-segment arrows in which each primary disturbance is drawn as a solid segment and its compensation as a dashed arrow.](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — the three-infusion test, in numbers).** A 70 kg adult starts with TBW 42 L, ICF 28 L, ECF 14 L, and osmolality 290 mOsm/L. Give 2 L of each fluid in turn (independently, from the same starting point). Compute the new compartment volumes and osmolality.

Start by counting osmoles, since ICF osmoles never change:

$$\text{Osm}_{\text{ICF}} = 290 \times 28 = 8120\ \text{mOsm}, \qquad \text{Osm}_{\text{ECF}} = 290 \times 14 = 4060\ \text{mOsm},$$
$$\text{Osm}_{\text{total}} = 12{,}180\ \text{mOsm}.$$

**(a) 2 L isotonic saline (0.9 percent NaCl).** 9 g/L ÷ 58.44 g/mol = 0.154 mol/L, and NaCl gives two particles, so 308 mOsm/L. That looks hyperosmotic to 290, but sodium chloride's osmotic coefficient is about 0.93, making its *effective* osmolality about 286 mOsm/kg — genuinely isotonic. So osmolality is unchanged at 290, no water crosses any cell membrane, and

$$V_{\text{ICF}} = 28\ \text{L (unchanged)}, \qquad V_{\text{ECF}} = 14 + 2 = \mathbf{16\ L}.$$

**(b) 2 L pure water** (given clinically as 5 percent dextrose, since the glucose is metabolized and leaves free water behind). No osmoles added, TBW rises to 44 L:

$$C = \frac{12{,}180}{44} = 276.8\ \text{mOsm/L}.$$

$$V_{\text{ICF}} = \frac{8120}{276.8} = \mathbf{29.33\ L}, \qquad V_{\text{ECF}} = 44 - 29.33 = \mathbf{14.67\ L}.$$

The ICF gained 1.33 L and the ECF 0.67 L — **exactly the 2:1 split of the compartments themselves**, which is the general rule for free water.

**(c) 2 L of 3 percent saline.** 30 g/L ÷ 58.44 = 0.513 mol/L × 2 = 1027 mOsm/L, so 2 L delivers 2054 mOsm:

$$C = \frac{12{,}180 + 2054}{44} = \frac{14{,}234}{44} = 323.5\ \text{mOsm/L}.$$

$$V_{\text{ICF}} = \frac{8120}{323.5} = \mathbf{25.10\ L}, \qquad V_{\text{ECF}} = 44 - 25.10 = \mathbf{18.90\ L}.$$

**Two litres in, and the ECF grew by 4.9 L.** The extra 2.9 L was extracted from the cells. This is why hypertonic saline is the tool for symptomatic cerebral oedema — it shrinks brain cells — and why it is dangerous if used carelessly.

**The summary that makes the framework stick:**

| Infusion | Δ ICF | Δ ECF | Δ osmolality |
|---|---|---|---|
| Isotonic saline 2 L | 0 | **+2.0 L** | 0 |
| Pure water 2 L | +1.33 L | +0.67 L | **−13 mOsm/L** |
| 3 percent saline 2 L | **−2.9 L** | **+4.9 L** | **+33 mOsm/L** |

Same 2 L in every row. The ECF gain ranges from 0.67 to 4.9 L — **a sevenfold spread determined entirely by the salt content of the bag.**

**Example 2 (why you'd care — reading a blood gas end to end).** Arterial blood: $\text{pH} = 7.28$, $P_{aCO_2} = 22$ mmHg, $[\text{HCO}_3^-] = 10$ mmol/L. Electrolytes: $[\text{Na}^+] = 138$, $[\text{Cl}^-] = 102$ mmol/L, albumin normal.

**Step 0 — is the gas internally consistent?** Use the Henderson form:

$$[\text{H}^+] = 24 \times \frac{22}{10} = 52.8\ \text{nmol/L} \;\Rightarrow\; \text{pH} = 9 - \log_{10}(52.8) = 9 - 1.723 = 7.28$$

The three numbers agree, so none is a transcription error. Do this first, always; it costs five seconds.

**Step 1 — which way is the pH off?** 7.28 < 7.40, so **acidemia**.

**Step 2 — which variable explains it?** $[\text{HCO}_3^-] = 10$ is far below 24, and a low bicarbonate causes acidemia. $P_{aCO_2} = 22$ is also low, but a low PaCO₂ would cause *alkalemia*, so it cannot be the primary problem. **Primary metabolic acidosis.** Both variables moved down together — same direction, so this is compensation and not a second primary disorder.

**Step 3 — is the compensation appropriate?** Winter's formula:

$$P_{aCO_2}^{\text{expected}} = 1.5 \times 10 + 8 = 23 \pm 2 \;\Rightarrow\; 21\text{–}25\ \text{mmHg}.$$

Observed 22 lies inside the band. **The respiratory system is doing exactly what it should** — no superimposed respiratory disorder. Note also that it did not restore the pH to 7.40, and never could: hyperventilating is buying time, not fixing anything.

**Step 4 — anion gap.**

$$\text{AG} = 138 - (102 + 10) = \mathbf{26\ \text{mmol/L}}.$$

Badly elevated. **This is a raised-anion-gap metabolic acidosis**, so an acid was added rather than bicarbonate lost, and the differential collapses to lactate, ketoacids, renal failure, or a toxic ingestion. One anion-gap calculation eliminated half the possible causes.

**Step 5 — the delta ratio,** which asks whether the gap rise accounts for the whole bicarbonate fall:

$$\frac{\Delta \text{AG}}{\Delta [\text{HCO}_3^-]} = \frac{26 - 12}{24 - 10} = \frac{14}{14} = 1.0 .$$

Every millimole of bicarbonate consumed is matched by a millimole of new unmeasured anion. **A pure, single, high-gap metabolic acidosis with appropriate respiratory compensation** — and that full sentence came from five numbers and about ninety seconds of arithmetic.

## Watch out

- **You might think volume and osmolality are one thing.** They are two controlled variables with two controllers — **water/ADH defends osmolality, sodium/RAAS defends volume**. A patient can be volume-depleted and hyponatremic at once, and treating that as a contradiction is the single commonest error in this material.
- **You might read a low plasma sodium as low body sodium.** Sodium *concentration* is a statement about **water**: too much water for the salt present. Sodium *content* is the statement about volume, and you cannot read it off a lab value at all — you read it off blood pressure, jugular pressure, and oedema.
- **You might expect isotonic saline to rehydrate cells.** It does not enter cells at all. Only *free water* redistributes across the cell membrane, so a dehydrated-cell problem needs water, and a low-blood-pressure problem needs salt.
- **You might call the bicarbonate system a poor buffer because its pK is 6.1.** In a sealed tube it would be. In the body the CO₂ is continuously exhaled and both terms of the ratio are under independent feedback control — **that is what makes it the dominant extracellular buffer**, not its pK.
- **You might read compensation as correction.** It is neither complete nor curative: **a fully normal pH with an abnormal PaCO₂ and an abnormal bicarbonate is a mixed disorder**, not a well-compensated single one.
- **You might read hyperkalemia in acidosis as excess total-body potassium.** Often it is a transmembrane shift, with total body K⁺ actually *depleted*. The corollary bites harder: **a "normal" potassium during acidosis means severe depletion**, because the acidosis should have raised it.
- **You might trust the anion gap without checking albumin.** Albumin is most of the gap. At an albumin of 2 g/dL, a "normal" gap of 11 is really about 16 — a hidden high-gap acidosis.

## One-liner

> Water follows osmolality and is steered by ADH; sodium sets volume and is steered by RAAS; and pH is set by the **ratio** of a number the kidney controls over days to a number the lung controls in minutes — so three values, read against a normal pH of 7.40, classify every acid–base disturbance there is.

## Problems

**P1 (🟢)** A 60 kg woman has total body water equal to 50 percent of body weight, with the usual 2:1 ICF:ECF and 3:1 interstitial:plasma splits. (a) Compute TBW, ICF, ECF, interstitial volume and plasma volume. (b) She is given 5.0 g of inulin intravenously; none is excreted, and the equilibrium plasma inulin concentration is 0.50 g/L. Which compartment does this measure, and does the tracer agree with your answer to (a)? (c) Her haematocrit is 0.40. Compute her blood volume.

**P2 (🟡)** Classify each arterial blood gas, name the compensating system, and state whether the compensation is appropriate.

- **Case A:** $\text{pH} = 7.48$, $P_{aCO_2} = 30$ mmHg, $[\text{HCO}_3^-] = 22$ mmol/L.
- **Case B:** $\text{pH} = 7.40$, $P_{aCO_2} = 60$ mmHg, $[\text{HCO}_3^-] = 36$ mmol/L.

**P3 (🔴, optional — bridges to 3.4 and to exercise physiology)** After four days of severe diarrhoea, a patient has $\text{pH} = 7.32$, $P_{aCO_2} = 30$ mmHg, $[\text{HCO}_3^-] = 15$ mmol/L, $[\text{Na}^+] = 136$, $[\text{Cl}^-] = 112$, $[\text{K}^+] = 3.0$ mmol/L. (a) Classify the acid–base disturbance and check whether compensation is appropriate. (b) Compute the anion gap and say what it tells you about the mechanism. (c) The potassium is 3.0 despite an acidosis. Explain why that is more alarming than it looks, and name the two processes depleting it. (d) Trace the volume-defence loop from the stimulus to the effector, and say which of its actions is making (c) worse.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\text{TBW} = 0.50 \times 60 = \mathbf{30\ L}.$$

$$\text{ICF} = \tfrac{2}{3}(30) = \mathbf{20\ L}, \qquad \text{ECF} = \tfrac{1}{3}(30) = \mathbf{10\ L}.$$

$$\text{interstitial} = \tfrac{3}{4}(10) = \mathbf{7.5\ L}, \qquad \text{plasma} = \tfrac{1}{4}(10) = \mathbf{2.5\ L}.$$

(The 50 percent figure rather than 60 reflects a higher average body-fat fraction; fat holds little water, so **total body water tracks lean mass, not weight**.)

**(b)** Inulin is a polysaccharide that is filtered but neither reabsorbed nor secreted, and — the relevant property here — **it does not cross cell membranes**, so it equilibrates in the ECF only.

$$V = \frac{5.0\ \text{g}}{0.50\ \text{g/L}} = \mathbf{10\ L}.$$

This matches the 10 L predicted in (a). ✓ Note what you *cannot* do: there is no tracer for the ICF, so the intracellular volume is only ever obtained as $\text{TBW} - \text{ECF}$, and it inherits the error of both measurements.

**(c)** Plasma is the fluid fraction of blood; red cells occupy the rest.

$$\text{blood volume} = \frac{\text{plasma volume}}{1 - \text{Hct}} = \frac{2.5}{1 - 0.40} = \frac{2.5}{0.60} = \mathbf{4.17\ L}.$$

**P2 — Case A.** Consistency check first:

$$\text{pH} = 6.1 + \log_{10}\frac{22}{0.03 \times 30} = 6.1 + \log_{10}\frac{22}{0.9} = 6.1 + \log_{10}(24.44) = 6.1 + 1.388 = 7.49$$

pH 7.48 > 7.40 → **alkalemia**. Which variable explains it? $P_{aCO_2} = 30$ is low, and a low PaCO₂ raises pH — so the primary disturbance is **respiratory alkalosis**. The bicarbonate at 22 is slightly low, moving in the *same* direction as the PaCO₂, so it is compensation (renal) rather than a second disorder.

Is it appropriate, and is this acute or chronic? $\Delta P_{aCO_2} = -10$ mmHg.

$$\text{acute rule: } \Delta[\text{HCO}_3^-] = -2 \times \frac{10}{10} = -2 \;\Rightarrow\; \text{expected } 24 - 2 = \mathbf{22\ \text{mmol/L}}$$

$$\text{chronic rule: } \Delta[\text{HCO}_3^-] = -4.5 \times \frac{10}{10} = -4.5 \;\Rightarrow\; \text{expected } \approx 19.5\ \text{mmol/L}.$$

The observed 22 matches the acute prediction exactly. **Acute respiratory alkalosis, appropriately compensated for its duration** — the kidney has not yet had its three to five days. Causes are anything that drives ventilation above metabolic need: pain, anxiety, fever, early sepsis, pulmonary embolism, or ascent to altitude.

**P2 — Case B.** Consistency check:

$$\text{pH} = 6.1 + \log_{10}\frac{36}{0.03 \times 60} = 6.1 + \log_{10}\frac{36}{1.8} = 6.1 + \log_{10}(20) = 6.1 + 1.301 = \mathbf{7.40}$$

**The pH is exactly normal, and both components are grossly abnormal.** By rule 3, that is the signature of a **mixed disorder** — compensation never returns pH the whole way.

Unpack it. $P_{aCO_2} = 60$ is a respiratory acidosis. Its expected renal compensation:

$$\text{chronic: } \Delta[\text{HCO}_3^-] = 3.5 \times \frac{20}{10} = +7 \;\Rightarrow\; \text{expected } 24 + 7 = 31\ \text{mmol/L}.$$

$$\text{acute: } \Delta[\text{HCO}_3^-] = 1 \times \frac{20}{10} = +2 \;\Rightarrow\; \text{expected } 26\ \text{mmol/L}.$$

Observed is 36 — **5 mmol/L above even the maximal chronic prediction.** So there is a **chronic respiratory acidosis plus a superimposed metabolic alkalosis**, and the two happen to cancel in the ratio. The classic setting is chronic lung disease (CO₂ retention, renal bicarbonate retention over years) with a loop or thiazide diuretic added, which causes volume contraction, aldosterone excess and H⁺ loss — a metabolic alkalosis on top.

**The lesson: the normal pH is not reassurance, it is the finding.** Had you looked only at pH you would have called this blood gas normal.

**P3 (a)** Consistency: $\text{pH} = 6.1 + \log_{10}\!\big(15/(0.03 \times 30)\big) = 6.1 + \log_{10}(16.67) = 6.1 + 1.222 = 7.32$ ✓

pH 7.32 → acidemia. $[\text{HCO}_3^-] = 15$ is low and explains it → **metabolic acidosis**. PaCO₂ is low, same direction → respiratory compensation. Winter's:

$$P_{aCO_2}^{\text{expected}} = 1.5(15) + 8 = 30.5 \pm 2 \;\Rightarrow\; 28.5\text{–}32.5\ \text{mmHg}.$$

Observed 30. **Appropriate; no additional respiratory disorder.**

**(b)** $$\text{AG} = 136 - (112 + 15) = \mathbf{9\ \text{mmol/L}} \quad \text{— normal.}$$

**A normal-gap (hyperchloremic) metabolic acidosis**, which says bicarbonate was **lost**, not that acid was added. That is exactly right for diarrhoea: intestinal secretions below the stomach are bicarbonate-rich, so stool carries HCO₃⁻ out of the body. Electroneutrality is preserved by the kidney retaining Cl⁻ in its place — hence the chloride of 112 — which is why the gap does not move. Note that the gap alone distinguishes this from a lactic or ketoacidosis without any other information.

**(c)** Acidosis drives K⁺ *out* of cells (H⁺ in, K⁺ out, for electroneutrality), so at a pH of 7.32 the measured plasma K⁺ is **higher than the body's true potassium status warrants** — by roughly 0.2–0.6 mmol/L. Since this is a mineral-acid, hyperchloremic acidosis, the shift is at the large end of that range.

So a *measured* 3.0 corresponds to a potassium-depleted patient whose value would be lower still once the acidosis is corrected — and correcting the acidosis with bicarbonate will drive K⁺ back into cells and unmask it. **The number understates the problem, and treatment will make the number worse.**

Two processes are depleting it:
1. **Direct loss in stool** — diarrhoeal fluid is potassium-rich.
2. **Renal wasting** — volume depletion activates RAAS, and aldosterone's action on the principal cell is *coupled*: it inserts ENaC and ROMK together, so every extra Na⁺ reabsorbed costs K⁺ secreted.

**(d)** The loop, sensor to effector:

$$\text{volume loss} \to \begin{cases} \downarrow \text{ afferent arteriolar pressure (JG cells)}\\ \downarrow \text{ NaCl at the macula densa}\\ \uparrow \text{ sympathetic tone } (\beta_1)\end{cases} \to \text{renin} \to \text{Ang I} \xrightarrow{\text{ACE}} \text{Ang II}$$

Angiotensin II then (i) constricts systemic arterioles to hold arterial pressure, (ii) preferentially constricts the **efferent** arteriole to defend GFR at low renal perfusion ([3.1](03-01-glomerular-filtration-clearance.md)), (iii) stimulates proximal Na⁺/H⁺ exchange, (iv) drives thirst and ADH, and (v) releases **aldosterone**, which acts on the collecting-duct **principal cell** to reabsorb Na⁺ and secrete K⁺. Restored volume removes all three renin stimuli — **negative feedback, exactly the architecture of [1.1](01-01-homeostasis-feedback-control.md)**.

**The action making (c) worse is aldosterone's**, and unavoidably so: potassium secretion is the obligate counterpart of the sodium reabsorption that is saving this patient's blood pressure. **The volume controller and the potassium controller share an effector, so defending one necessarily disturbs the other** — a structural feature of the design, not a malfunction.

</details>

## Flashback

**From Lesson 2.5 (gas exchange and transport):** A climber rests at an altitude where barometric pressure is 500 mmHg. Inspired air is 21 percent oxygen; water vapour pressure in the fully humidified airway is 47 mmHg at body temperature; her measured $P_{aCO_2}$ is 25 mmHg and the respiratory exchange ratio is $R = 0.8$. (a) Compute inspired and alveolar $P_{O_2}$, and compare with the sea-level values for the same person breathing air at $P_{aCO_2} = 40$ mmHg. (b) At altitude her arterial saturation is 0.90 at a $P_{aO_2}$ of 60 mmHg; at sea level it is 0.98 at 100 mmHg. With haemoglobin 15 g/dL, a carrying capacity of 1.34 mL O₂ per gram, and dissolved oxygen of 0.003 mL/dL per mmHg, compute arterial oxygen content in both cases and comment. (c) Her PaCO₂ is 25 rather than 40. Name the acid–base disturbance that creates and the compensation that will follow.

<details>
<summary>Solution</summary>

**(a)** Humidification happens before any gas exchange, so subtract the water vapour pressure first:

$$P_{IO_2} = 0.21 \times (500 - 47) = 0.21 \times 453 = \mathbf{95.1\ \text{mmHg}}.$$

Alveolar gas equation:

$$P_{AO_2} = P_{IO_2} - \frac{P_{aCO_2}}{R} = 95.1 - \frac{25}{0.8} = 95.1 - 31.25 = \mathbf{63.9\ \text{mmHg}}.$$

At sea level for the same person:

$$P_{IO_2} = 0.21 \times (760 - 47) = 0.21 \times 713 = 149.7 \approx 150\ \text{mmHg},$$
$$P_{AO_2} = 150 - \frac{40}{0.8} = 150 - 50 = \mathbf{100\ \text{mmHg}}.$$

Notice what the hyperventilation bought her: at a PaCO₂ of 40 her alveolar $P_{O_2}$ would have been $95.1 - 50 = 45.1$ mmHg. **Blowing off CO₂ literally makes room for oxygen in the alveolus** — the alveolar gas equation is a statement about a fixed total pressure being shared, and that is the whole physiological point of hyperventilating at altitude.

**(b)** Oxygen content, in mL O₂ per dL of blood:

$$C_{aO_2} = 1.34 \times [\text{Hb}] \times S_{aO_2} + 0.003 \times P_{aO_2}$$

Altitude: $$1.34 \times 15 \times 0.90 + 0.003 \times 60 = 18.09 + 0.18 = \mathbf{18.3\ \text{mL/dL}}.$$

Sea level: $$1.34 \times 15 \times 0.98 + 0.003 \times 100 = 19.70 + 0.30 = \mathbf{20.0\ \text{mL/dL}}.$$

$$\frac{18.27}{20.0} = 0.913 .$$

**The $P_{aO_2}$ fell 40 percent and the oxygen content fell under 9 percent.** That is the flat upper plateau of the oxygen–haemoglobin dissociation curve doing its job: saturation is nearly maximal over a wide range of $P_{O_2}$, so partial pressure is a poor proxy for how much oxygen the blood is actually carrying. The dissolved term contributes 0.18 out of 18.3 — **one percent** — which is the same arithmetic that explains why breathing pure oxygen adds so little to a patient who is already well saturated: you can only add to the tiny dissolved term.

**(c)** A PaCO₂ of 25 with an initially normal bicarbonate of 24 gives

$$\text{pH} = 6.1 + \log_{10}\frac{24}{0.03 \times 25} = 6.1 + \log_{10}(32) = 6.1 + 1.505 = 7.61 .$$

**Acute respiratory alkalosis** — this is the hypoxic ventilatory drive from the peripheral chemoreceptors overriding the central CO₂ set point. The compensation is **renal**: over three to five days the kidney excretes bicarbonate (reducing proximal reclamation and net acid excretion), pulling $[\text{HCO}_3^-]$ down toward roughly $24 - 4.5 \times 1.5 \approx 17$ mmol/L and the pH back toward normal. **That is what acclimatization is** — and it is why the alkalosis, which itself restrains ventilation, has to be cleared before the climber can hyperventilate freely enough to tolerate the altitude.

</details>

## Connections

- **Backward:** this is [1.1](01-01-homeostasis-feedback-control.md)'s sensor–controller–effector loop instantiated three times over, with RAAS as the cleanest example in the course. Osmosis and tonicity are [1.2](01-02-membrane-transport.md); the reason plasma K⁺ is load-bearing is [1.3](01-03-resting-membrane-potential.md)'s $E_K$; the efferent-arteriole trick is [3.1](03-01-glomerular-filtration-clearance.md); ADH and aquaporins are [3.2](03-02-tubular-transport-concentrating-urine.md); the carbonic-anhydrase reaction and CO₂ transport are [2.5](02-05-gas-exchange-and-transport.md). The chemistry of Henderson–Hasselbalch and buffer capacity is [biochemistry 1.1](../../biochemistry/lessons/01-01-water-ph-buffers.md), and the Bohr effect that couples this lesson's H⁺ to oxygen unloading is [biochemistry 1.5](../../biochemistry/lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md).
- **Forward:** [3.4](03-04-endocrine-axes.md) puts aldosterone into the adrenal axis properly and adds PTH for calcium, the fourth ion with its own dedicated controller. [4.2](04-02-thermoregulation.md) needs the compartment model, because sweat is *hypotonic* — heat stress is a free-water problem before it is a salt problem, and the compartment arithmetic here tells you which compartment shrinks. [4.3](04-03-exercise-integrative-physiology.md) runs all of it under load: lactic acidosis with a raised anion gap, respiratory compensation as the ventilatory threshold, and plasma volume falling while potassium leaks out of contracting muscle.
- **Sideways:** the $[\text{K}^+]_o$–$E_K$ link is the physiological cash value of the Nernst derivation in [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md), and the depolarization-induced inexcitability of hyperkalemia is that course's [4.5](../../biophysics/lessons/04-05-excitable-membranes-action-potential.md) read backwards. Structurally, RAAS with ANP opposing it is a two-sided proportional controller with a long lag and a saturating actuator — the vocabulary for why that arrangement is stable, and when it is not, is [control-systems](../../control-systems/syllabus.md).

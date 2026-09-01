# Human Physiology · Lesson 4.3: Exercise physiology — the body under load

> ⏱ ~15 min · Module 4: Digestive and integrative physiology · Builds on: [2.2](02-02-cardiac-cycle-and-output.md), [2.5](02-05-gas-exchange-and-transport.md), [4.2](04-02-thermoregulation.md) · Unlocks: nothing — this is the course's capstone

## Why this matters

Every lesson so far has isolated one system and asked how it holds one variable steady. Exercise is the experiment that refuses to let you do that. A person going from a chair to a hard run raises oxygen consumption **seventeenfold in under two minutes**, and doing so requires the heart, the vasculature, the lungs, the gut, the kidney, the endocrine axes and the skin to change simultaneously — some of them in opposite directions, several of them at each other's expense.

This is the lesson where the course's organizing claim gets tested. [1.1](01-01-homeostasis-feedback-control.md) said every mechanism here is a controller correcting an error. That is true, and it is not the whole story. **Under load the controllers compete, and the body must arbitrate.** What follows is a single quantitative framework — the Fick principle — that lets you decompose the whole response, plus the honest account of what gets sacrificed and in what order.

There is also a practical payoff. Almost everything people believe about fitness is a claim about which term in the Fick equation limits them, and most of those claims are wrong.

## The idea

**Start with a conservation statement that is impossible to argue with.** Oxygen leaves the lungs in blood and is removed by tissues. So the oxygen consumed per minute must equal the blood delivered per minute times the oxygen removed from each unit of blood.

That is the **Fick principle**, and it is not a model — it is bookkeeping:

$$\dot V_{O_2} = \dot Q \times (C_a O_2 - C_{\bar v} O_2)$$

where $\dot V_{O_2}$ is oxygen uptake (mL/min), $\dot Q$ is cardiac output (L/min), $C_a O_2$ is the oxygen content of arterial blood (mL O₂ per L blood), and $C_{\bar v} O_2$ is that of mixed venous blood.

**Why this is the right organizing equation: it splits exercise capacity into exactly two independent terms, and they belong to different lessons.** $\dot Q$ is central delivery — the pump, [2.2](02-02-cardiac-cycle-and-output.md). The arteriovenous difference $(C_a O_2 - C_{\bar v}O_2)$ is peripheral extraction — hemoglobin unloading in the tissue, [2.5](02-05-gas-exchange-and-transport.md). **Any limitation on exercise capacity must show up in one of these two terms, and measuring them tells you which.**

**The idea underneath the whole lesson is that the body's response to load is not one control loop but a portfolio of them, run at different speeds, competing for the same finite cardiac output.** The heart can supply about 25 litres per minute. Muscle wants nearly all of it. Skin wants several litres of it to dump heat. Brain and heart will take theirs first. Gut and kidney lose. That sentence is most of exercise physiology.

## The formal version

### The Fick decomposition, worked from rest to maximum

Take a fit 70 kg 30-year-old. At rest and at maximal effort:

| Quantity | Rest | Maximum | Fold change |
|---|---|---|---|
| Heart rate $HR$ | 70 min⁻¹ | 190 min⁻¹ | 2.7 |
| Stroke volume $SV$ | 71 mL | 132 mL | 1.9 |
| **Cardiac output $\dot Q$** | **4.97 L/min** | **25.1 L/min** | **5.0** |
| $C_aO_2$ | 200 mL/L | 200 mL/L | 1.0 |
| $C_{\bar v}O_2$ | 150 mL/L | 30 mL/L | 0.2 |
| **$(C_a - C_{\bar v})O_2$** | **50 mL/L** | **170 mL/L** | **3.4** |
| **$\dot V_{O_2}$** | **249 mL/min** | **4264 mL/min** | **17.2** |

Check the arithmetic in both columns:

$$\dot Q_{\text{rest}} = 70\ \text{min}^{-1} \times 71\ \text{mL} = 4970\ \text{mL/min} = 4.97\ \text{L/min}$$
$$\dot V_{O_2,\text{rest}} = 4.97\ \tfrac{\text{L}}{\text{min}} \times 50\ \tfrac{\text{mL}}{\text{L}} = 249\ \text{mL/min}$$
$$\dot Q_{\max} = 190 \times 132 = 25{,}080\ \text{mL/min} = 25.1\ \text{L/min}$$
$$\dot V_{O_2\max} = 25.08 \times 170 = 4264\ \text{mL/min} = 60.9\ \text{mL}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}$$

And the fold changes multiply: $5.05 \times 3.40 = 17.2$. ✓

**Now the question the table answers.** Which term does more of the work? **Cardiac output rises 5.0-fold; extraction rises 3.4-fold.** Delivery wins on magnitude — but the deeper point is about *ceilings*:

$$\text{extraction fraction} = \frac{C_aO_2 - C_{\bar v}O_2}{C_aO_2}: \qquad \text{rest } \frac{50}{200} = 25\%, \qquad \text{max } \frac{170}{200} = 85\%$$

**Extraction is already at 85 percent at maximum, and 100 percent is a hard wall** — at most another 1.18-fold is physically available, and you cannot have all of it because some blood always perfuses non-working tissue. Cardiac output has no comparable wall. **This is why VO₂max is a cardiovascular measurement, why training raises it mainly by raising maximal stroke volume, and why blood doping (raising $C_aO_2$) works.**

### The cardiovascular response, and its mechanisms in order

**Heart rate rises roughly linearly with work rate, all the way to $HR_{\max}$.** The mechanism changes partway up:

- **First ~30 beats: vagal withdrawal.** The SA node's intrinsic rate, stripped of autonomic input, is about 100 min⁻¹ ([2.1](02-01-cardiac-electrophysiology.md)); resting tonic vagal drive holds it at 70. **Simply releasing the brake gets you to 100 with no sympathetic activation at all** — and because the muscarinic potassium channel is directly gated, this happens *within one beat*.
- **Above ~100 min⁻¹: sympathetic drive.** β₁ receptors, cAMP, a steeper funny current — slower to engage (seconds, since it runs through a second messenger) and slower to release.

**Stroke volume rises early, then plateaus at roughly 40–50 percent of VO₂max** — panel (a) of the figure. Two mechanisms push it up and one stops it:

1. **Increased venous return raises end-diastolic volume** — the skeletal muscle pump (contracting muscle squeezes veins, one-way valves make it a pump), the respiratory pump (deeper breathing swings intrathoracic pressure harder), and sympathetic venoconstriction squeezing roughly half a litre of blood out of the splanchnic venous reservoir. **This is the Frank–Starling law from [2.2](02-02-cardiac-cycle-and-output.md) doing real work rather than being demonstrated on a bench.**
2. **Increased contractility lowers end-systolic volume.** SV rises from both ends: EDV about 118 → 158 mL, ESV about 47 → 26 mL, so $SV = 71 \to 132$ mL and ejection fraction climbs from 60 percent to 84 percent.
3. **Then diastolic filling time runs out.** At $HR = 70$ the cycle is $60/70 = 0.857$ s with systole about 0.30 s, leaving **0.557 s to fill**. At $HR = 190$ the cycle is $60/190 = 0.316$ s and systole shortens only to about 0.15 s, leaving **0.166 s** — a 70 percent reduction in filling time. **The stroke-volume plateau is not a failure of the Starling mechanism; it is the Starling mechanism running out of diastole.**

### The pressure paradox, and why the baroreflex is not fighting you

Cardiac output rises fivefold. If resistance held constant, mean arterial pressure would rise fivefold too — to roughly 470 mmHg. It does not. Blood pressure goes from about 120/80 to about 200/78, and mean arterial pressure ($MAP \approx P_{dia} + \tfrac{1}{3}(P_{sys}-P_{dia})$, from [2.3](02-03-hemodynamics-blood-pressure.md)) goes from

$$MAP_{\text{rest}} = 80 + \tfrac{1}{3}(40) = 93.3\ \text{mmHg} \quad \longrightarrow \quad MAP_{\max} = 78 + \tfrac{1}{3}(122) = 118.7\ \text{mmHg}$$

a rise of only 27 percent. Rearranging $MAP = \dot Q \times TPR$:

$$TPR_{\text{rest}} = \frac{93.3}{4.97} = 18.8\ \tfrac{\text{mmHg}\cdot\text{min}}{\text{L}}, \qquad TPR_{\max} = \frac{118.7}{25.08} = 4.73\ \tfrac{\text{mmHg}\cdot\text{min}}{\text{L}}$$

$$\frac{TPR_{\max}}{TPR_{\text{rest}}} = 0.25$$

*In words: total peripheral resistance falls to a quarter of its resting value, and that fourfold fall is what absorbs the fivefold rise in flow.*

**The cause is metabolic vasodilation in active muscle** — local adenosine, K⁺, CO₂, H⁺, falling $P_{O_2}$, and shear-induced nitric oxide open the resistance vessels of a tissue that makes up 40 percent of body mass. A huge low-resistance bed opens in parallel with everything else, and parallel resistances add as reciprocals, so total resistance collapses.

**Here is the part that trips people up, and it is a genuinely important control-theory point.** [2.3](02-03-hemodynamics-blood-pressure.md) gave you a baroreflex that defends MAP: pressure up → baroreceptors fire → heart slows, vessels dilate. Exercise raises MAP by 27 percent and raises heart rate by 170 percent. **So is the baroreflex broken, or overridden?**

**Neither. It is reset.** Central command — feedforward drive from the motor cortex that descends to the cardiovascular centre at the same moment it descends to muscle — shifts the baroreflex's operating point to a higher pressure. Muscle metaboreceptors (group III and IV afferents) reinforce the shift. The reflex's **gain is preserved; only its reference input moves.** In [control-systems](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md) terms this is a setpoint change, not a loop-gain change — and it is exactly the feedforward control [1.1](01-01-homeostasis-feedback-control.md) introduced, acting before any error appears. The reflex still works: it is what raises your heart rate again if you stand up mid-run.

### Blood flow redistribution

Panel (c). Absolute flows, both columns summing to the stated cardiac output:

| Region | Rest (L/min) | Max (L/min) | Share at rest | Share at max |
|---|---|---|---|---|
| Skeletal muscle | 1.00 | 22.0 | 20% | 88% |
| Splanchnic (gut + liver) | 1.40 | 0.30 | 28% | 1.2% |
| Renal | 1.10 | 0.25 | 22% | 1.0% |
| Coronary | 0.25 | 1.00 | 5% | 4.0% |
| Cerebral | 0.75 | 0.75 | 15% | 3.0% |
| Skin | 0.30 | 0.60 | 6% | 2.4% |
| Other | 0.20 | 0.10 | 4% | 0.4% |
| **Total** | **5.00** | **25.0** | 100% | 100% |

**Muscle flow rises 22-fold. But work out where that blood actually came from:**

$$\Delta(\text{muscle flow}) = 22.0 - 1.0 = 21.0\ \text{L/min}, \qquad \Delta(\text{cardiac output}) = 25.0 - 5.0 = 20.0\ \text{L/min}$$

$$\text{contributed by redistribution} = 21.0 - 20.0 = 1.0\ \text{L/min} = 4.8\%$$

**Roughly 95 percent of muscle's extra blood is newly generated cardiac output; only about 5 percent is stolen from elsewhere.** Redistribution is real and it matters clinically, but **it is a rounding error next to the pump.** Anyone who tells you exercise capacity is about "shunting blood to muscle" has the emphasis backwards.

Four things about the redistribution itself:

- **Splanchnic and renal flow fall by roughly 79 and 77 percent**, via α₁ sympathetic vasoconstriction. Renal flow falls more than GFR does, because autoregulation and efferent arteriolar constriction defend filtration — so filtration fraction rises ([3.1](03-01-glomerular-filtration-clearance.md)). Splanchnic constriction is the sentence [4.1](04-01-gastrointestinal-system.md) set up, and it has a direct cost: **the gut cannot absorb well when it is not perfused**, which is why hard exercise causes GI distress and why carbohydrate feeding rates during racing are capped.
- **Coronary flow must rise fourfold, and it has no alternative.** The heart already extracts about 70 percent of the oxygen delivered to it *at rest* — the highest of any organ. Apply the Fick principle at the organ level: with the extraction term nearly maxed, **the only free variable left is flow.** This is the whole reason coronary artery disease presents as exertional chest pain rather than resting pain.
- **Cerebral flow is defended flat** by autoregulation. The honest nuance: at very high intensity it dips slightly, because hyperventilation lowers arterial $P_{CO_2}$ and cerebral vessels constrict when CO₂ falls.
- **How can one global sympathetic outflow constrict gut and dilate muscle?** Because in active muscle the local metabolic milieu blunts α-adrenergic vasoconstriction — **functional sympatholysis**. The sympathetic command is sent everywhere; only inactive beds obey it.

### The respiratory response, and why the lung is not the limit

Ventilation $\dot V_E$ rises from about $0.5\ \text{L} \times 12\ \text{min}^{-1} = 6$ L/min to about $2.8\ \text{L} \times 50\ \text{min}^{-1} = 140$ L/min. **What is it tracking?**

$$\dot V_{CO_2}: \ \text{rest } 249 \times 0.80 = 199\ \text{mL/min} \ \longrightarrow \ \text{max } 4264 \times 1.10 = 4690\ \text{mL/min}$$

$$\frac{\dot V_E \text{ rise}}{} = \frac{140}{6} = 23.3\times, \qquad \frac{\dot V_{CO_2} \text{ rise}}{} = \frac{4690}{199} = 23.6\times, \qquad \frac{\dot V_{O_2}\text{ rise}}{} = 17.2\times$$

**Ventilation tracks carbon dioxide production almost exactly, and oxygen uptake not at all.** The ventilatory equivalent for CO₂ is flat ($6/0.199 = 30.2$ at rest; $140/4.69 = 29.9$ at max) while the equivalent for O₂ climbs ($24.1 \to 32.8$). Breathing is a CO₂ controller, as [2.5](02-05-gas-exchange-and-transport.md) said.

**Why do arterial blood gases stay nearly constant through moderate exercise?** Use the alveolar ventilation relation $P_{aCO_2} = 863\,\dot V_{CO_2}/\dot V_A$ (both in L/min):

$$\text{rest: } \dot V_A = (0.5-0.15)(12) = 4.2, \qquad P_{aCO_2} = \frac{863 \times 0.199}{4.2} = 40.9\ \text{mmHg}$$

$$\text{max: } \dot V_A = (2.8-0.20)(50) = 130, \qquad P_{aCO_2} = \frac{863 \times 4.69}{130} = 31.1\ \text{mmHg}$$

Through moderate exercise the two terms rise in lockstep and $P_{aCO_2}$ barely moves; only at maximum does ventilation overshoot CO₂ production and drive $P_{aCO_2}$ down. **The remarkable thing is not that the error is corrected — it is that no error appears.** Exercise hyperpnea is largely feedforward: central command and limb mechanoreceptors raise ventilation at the instant movement begins, before any chemical signal could have changed. **It is the best example in the body of the feedforward control [1.1](01-01-homeostasis-feedback-control.md) defined.** (Breathing also gets *more efficient*: dead space fraction falls from $150/500 = 0.30$ to $200/2800 = 0.07$.)

**The ventilatory threshold** is the work rate above which $\dot V_E$ rises faster than $\dot V_{O_2}$ — panel (b). Its cause is buffering, not oxygen lack. Lactic acid dissociates, and the H⁺ is buffered by bicarbonate ([3.3](03-03-fluid-electrolyte-acid-base.md)):

$$\text{H}^+ + \text{HCO}_3^- \rightarrow \text{H}_2\text{CO}_3 \rightarrow \text{H}_2\text{O} + \text{CO}_2$$

**Every millimole of acid buffered liberates a millimole of CO₂ that was never made by metabolism.** If plasma bicarbonate falls from 24 to 18 mmol/L across a 15 L extracellular volume, that is $6 \times 15 = 90$ mmol of extra CO₂, or $90 \times 22.4 = 2016$ mL — two extra litres of gas to blow off. Ventilation rises to clear it, and that inflection is what a lab measures.

**And now the claim worth defending: in a healthy person, ventilation is not the limiting step.** At VO₂max the heart is at *exactly* its maximum rate, while ventilation sits at roughly 65–70 percent of maximum voluntary ventilation and arterial saturation is still about 96 percent. Pulmonary capillary transit time falls from about 0.75 s to 0.25 s, and equilibration needs about 0.25 s — the lung was built with a threefold diffusion reserve. **The lung is overbuilt relative to the heart.** The experimental confirmation is clean: lowering airway resistance (helium–oxygen breathing) does not raise VO₂max in normal subjects, while raising arterial oxygen content does. **That is why VO₂max is a cardiovascular measurement.** (The exception proves the rule: elite endurance athletes, whose cardiac outputs have outgrown their untrainable lungs, can desaturate at maximum.)

### Metabolic fuel use

**Three energy systems, three timescales, and a strict power-versus-capacity tradeoff:**

| System | Timescale | Relative power | Capacity |
|---|---|---|---|
| Phosphagen (ATP + creatine phosphate) | ~5–10 s | highest | tiny |
| Anaerobic glycolysis → lactate | ~30 s – 2 min | intermediate | small |
| Oxidative phosphorylation | minutes to hours | lowest | effectively unlimited |

Muscle holds roughly 25 mmol of immediately available high-energy phosphate per kg, and maximal ATP turnover is a few mmol·kg⁻¹·s⁻¹ — hence the handful of seconds. The ordering is not an accident: **fast ATP resynthesis and large stores are physically incompatible**, so the body carries all three.

**The crossover: as intensity rises, fuel shifts from fat to carbohydrate.** At low intensity most ATP comes from fat oxidation ([biochemistry 4.2](../../biochemistry/lessons/04-02-fatty-acid-oxidation.md)); above roughly 65 percent of VO₂max carbohydrate dominates; near maximum it is almost exclusively carbohydrate ([biochemistry 3.2](../../biochemistry/lessons/03-02-glycolysis.md)). Three reasons, and the third is the one to remember:

1. Type II glycolytic fibres are recruited as force demand rises ([1.6](01-06-muscle-contraction.md)).
2. Rising epinephrine ([3.4](03-04-endocrine-axes.md)) drives glycogenolysis, and high glycolytic flux inhibits fatty-acid entry into mitochondria.
3. **Carbohydrate is the better fuel per litre of oxygen** — about 5.05 kcal/L O₂ versus 4.69 for fat, roughly **8 percent more energy per litre**. When oxygen delivery is the binding constraint, the body switches to the fuel with the better oxygen economy. That is optimization, not accident.

**Glycogen is the limiting store, and it is small.** Roughly 400 g in muscle plus 100 g in liver is about 500 g, or 2000 kcal. Fat in the same lean person is roughly 8.4 kg, about 75,600 kcal — **38 times more energy, and it is not the constraint.** At marathon intensity, burning about 1000 kcal/hr with 70 percent from carbohydrate:

$$\frac{2000\ \text{kcal}}{0.70 \times 1000\ \text{kcal/hr}} = 2.9\ \text{hours}$$

**That number is "the wall," and it is why marathons hurt where they do.** Ingesting carbohydrate during exercise pushes it out — but only to about 60 g/hr, because intestinal SGLT1 saturates ([4.1](04-01-gastrointestinal-system.md)), which is a transport maximum in exactly the sense [3.2](03-02-tubular-transport-concentrating-urine.md) defined. **Gut absorption, splanchnic vasoconstriction, and endurance are one problem, not three.**

### Thermoregulatory conflict and cardiovascular drift

[4.2](04-02-thermoregulation.md) established the heat balance. Exercise makes it urgent. At $\dot V_{O_2} = 3.0$ L/min with about 23 percent mechanical efficiency, metabolic power is roughly 1030 W, of which about 240 W leaves as external work and **about 790 W becomes heat.** Body heat capacity is about $3.47\ \text{kJ}\cdot\text{kg}^{-1}\cdot{}^\circ\text{C}^{-1} \times 70\ \text{kg} = 243\ \text{kJ}/^\circ\text{C}$, so with no dissipation:

$$\frac{dT}{dt} = \frac{790\ \text{J/s}}{243{,}000\ \text{J}/^\circ\text{C}} = 0.0033\ ^\circ\text{C/s} = 0.20\ ^\circ\text{C/min}$$

$$\text{time to reach } 41\,^\circ\text{C from } 37\,^\circ\text{C} = \frac{4}{0.20} \approx 20\ \text{minutes}$$

**Without evaporative cooling, a hard run would be lethal in about twenty minutes.** So skin blood flow must rise — and **skin and muscle are now bidding for the same cardiac output.** In the heat, skin flow can claim several litres per minute that muscle wanted.

**Cardiovascular drift is what that conflict looks like over an hour at a fixed pace.** Name the chain explicitly:

$$\uparrow T_{\text{core}} \rightarrow \text{hypothalamic drive} \rightarrow \begin{cases}\text{cutaneous vasodilation} \rightarrow \text{venous pooling in skin} \\ \text{sweating} \rightarrow \downarrow \text{plasma volume}\end{cases} \rightarrow \ \downarrow \text{central blood volume}$$

$$\downarrow \text{central blood volume} \rightarrow \ \downarrow EDV \ \xrightarrow{\text{Frank–Starling}} \ \downarrow SV \rightarrow \ \downarrow \dot Q,\ \downarrow MAP \ \xrightarrow{\text{baroreflex}} \ \uparrow HR \rightarrow \dot Q \text{ restored}$$

*In words: sweating and skin vasodilation steal blood from ventricular filling; stroke volume falls by the Starling mechanism; the baroreflex raises heart rate to hold cardiac output constant.*

Numerically, at 60 percent of VO₂max ($\dot Q \approx 16.5$ L/min): at minute 10, $HR = 140$ and $SV = 118$ mL, giving $140 \times 118 = 16{,}520$ mL/min. Forty-five minutes later $SV$ has fallen to 100 mL, so holding output requires

$$HR = \frac{16{,}520}{100} = 165\ \text{min}^{-1}$$

**Twenty-five extra beats per minute at an unchanged running pace.** Note what this means: **the loop is working perfectly** — cardiac output is defended to the litre — and it is nonetheless a downward spiral, because heart rate is a finite resource. Once $HR$ reaches $HR_{\max}$, further falls in $SV$ must reduce $\dot Q$, which by the Fick principle reduces $\dot V_{O_2}$, and the pace becomes unsustainable. **Fatigue in the heat is a cardiovascular event with a thermal cause.**

## Picture

![Three panels showing the integrated response to exercise. Panel a plots heart rate, stroke volume and cardiac output against work rate from rest to 300 watts, with heart rate rising steadily to 190 beats per minute and cardiac output to 25 litres per minute, while stroke volume rises early and then flattens at about 132 millilitres. Panel b plots oxygen uptake against work rate as a straight line that abruptly flattens at a plateau of 4.26 litres per minute, the VO2max, with the ventilatory threshold marked at about 65 percent of that value. Panel c is a paired bar chart of absolute blood flow to skeletal muscle, splanchnic organs, kidney, coronary, cerebral, skin and other tissues at rest and at maximal exercise, showing muscle flow rising twentytwofold, splanchnic and renal flow falling by about three quarters, coronary flow rising fourfold, cerebral flow held constant, and total cardiac output rising from 5 to 25 litres per minute.](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — using Fick to diagnose which term limits a person).** Two 75 kg men are tested to exhaustion.

*Runner A:* $\dot Q_{\max} = 26.0$ L/min, $C_aO_2 = 200$ mL/L, $C_{\bar v}O_2 = 32$ mL/L.
*Runner B:* $\dot Q_{\max} = 19.0$ L/min, $C_aO_2 = 200$ mL/L, $C_{\bar v}O_2 = 30$ mL/L.

(a) Compute each VO₂max in L/min and mL·kg⁻¹·min⁻¹. (b) Compute each extraction fraction. (c) Say which term accounts for the difference, and what training should target.

**(a)**
$$A: \ (200-32) = 168\ \text{mL/L}; \quad \dot V_{O_2\max} = 26.0 \times 168 = 4368\ \text{mL/min} = 4.37\ \text{L/min}$$
$$\qquad \frac{4368}{75} = 58.2\ \text{mL}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}$$
$$B: \ (200-30) = 170\ \text{mL/L}; \quad \dot V_{O_2\max} = 19.0 \times 170 = 3230\ \text{mL/min} = 3.23\ \text{L/min}$$
$$\qquad \frac{3230}{75} = 43.1\ \text{mL}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}$$

**(b)** $A: 168/200 = 84.0$ percent. $B: 170/200 = 85.0$ percent.

**(c)** **B's extraction is not merely adequate — it is marginally better than A's.** The peripheral term is essentially identical and both men are within a few points of the physiological ceiling. The entire 35 percent difference in VO₂max lives in cardiac output: $26.0/19.0 = 1.37$, and $4.37/3.23 = 1.35$. ✓

**Training should target maximal cardiac output**, which in practice means maximal stroke volume, since $HR_{\max}$ is set by age and falls slightly with training. That is achieved by prolonged work at high stroke volume — expanded plasma volume, greater ventricular compliance and chamber size, better filling.

**The general diagnostic rule this establishes:** because extraction saturates near 85 percent in almost everybody, **differences in aerobic capacity between healthy people are almost entirely differences in the pump.** Peripheral limitation is real but it belongs to specific pathologies — peripheral arterial disease, mitochondrial myopathy, severe deconditioning of a single limb — not to the normal range.

**Example 2 (why you'd care — reading a fuel mixture off the breath, and predicting when someone runs out).** A cyclist rides at $\dot V_{O_2} = 3.10$ L/min with a respiratory exchange ratio $RER = \dot V_{CO_2}/\dot V_{O_2} = 0.88$. Complete carbohydrate oxidation gives $RER = 1.00$; palmitate gives $16/23 = 0.70$.

(a) Fraction of energy from carbohydrate. (b) Energy expenditure per hour. (c) Grams of carbohydrate per hour, and time to glycogen depletion from a 500 g store. (d) What the answer implies about pacing.

**(a)** RER interpolates linearly between the two pure fuels:

$$f_{\text{CHO}} = \frac{RER - 0.70}{1.00 - 0.70} = \frac{0.88-0.70}{0.30} = \frac{0.18}{0.30} = 0.60$$

**60 percent of the energy is coming from carbohydrate.**

**(b)** The caloric equivalent of oxygen interpolates the same way, between 4.69 kcal/L (fat) and 5.05 kcal/L (carbohydrate):

$$4.69 + 0.60\,(5.05-4.69) = 4.69 + 0.216 = 4.91\ \text{kcal per L O}_2$$

$$3.10\ \tfrac{\text{L}}{\text{min}} \times 4.91\ \tfrac{\text{kcal}}{\text{L}} = 15.2\ \text{kcal/min} \times 60 = 913\ \text{kcal/hr}$$

**(c)**
$$\text{carbohydrate energy} = 0.60 \times 913 = 548\ \text{kcal/hr}; \qquad \frac{548}{4\ \text{kcal/g}} = 137\ \text{g/hr}$$

$$\text{time to depletion} = \frac{500\ \text{g}}{137\ \text{g/hr}} = 3.65\ \text{hours}$$

**(d)** Now do the sensitivity analysis, which is where the physiology is. Suppose he rides 10 percent harder, so $\dot V_{O_2} = 3.41$ L/min and — because of the crossover — $RER$ rises to 0.94. Then $f_{\text{CHO}} = 0.24/0.30 = 0.80$, the caloric equivalent is $4.69 + 0.80(0.36) = 4.98$ kcal/L, expenditure is $3.41 \times 4.98 \times 60 = 1019$ kcal/hr, and

$$\text{carbohydrate} = \frac{0.80 \times 1019}{4} = 204\ \text{g/hr} \quad \Longrightarrow \quad \frac{500}{204} = 2.45\ \text{hours}$$

**A 10 percent increase in power cut endurance by a third — from 3.65 hours to 2.45.** The intensity rose 10 percent but the carbohydrate burn rate rose 49 percent, because the *rate* and the *fraction* both went up.

**This is the quantitative content of "don't go out too fast," and it is also why fuelling works.** Ingesting 60 g/hr at the original intensity leaves a net drain of $137-60 = 77$ g/hr and extends the ride to $500/77 = 6.5$ hours — but only if splanchnic blood flow is high enough to absorb it, which at 80 percent of VO₂max it is not. **Everything in that last sentence is a different lesson of this course arriving at the same limit.**

## Watch out

- **You might think VO₂max measures lung capacity.** It does not, in healthy people. At maximum the heart is at exactly its maximum rate while ventilation is at about two thirds of its ceiling and arterial blood is still 96 percent saturated. **The lung is overbuilt; the pump is the constraint.** Endurance training barely changes the lung and greatly changes maximal stroke volume.
- **You might think a modest rise in mean arterial pressure means the circulation is barely perturbed.** It means two enormous changes nearly cancelled: **flow up fivefold, resistance down fourfold.** MAP is a ratio, and a stable ratio tells you nothing about the size of its terms.
- **You might think the baroreflex is switched off during exercise.** It is **reset** — gain preserved, operating point raised by central command. The proof it is still running: stop sprinting abruptly and you may faint, because the muscle pump stops while the vasodilation persists, and the reflex is left defending pressure with no venous return to work with. Walk it off instead.
- **You might read cardiovascular drift as "the work is getting harder."** External power output is unchanged. **The heart rate rise is compensating for falling stroke volume, not tracking rising demand** — so heart rate is a poor intensity proxy late in a hot session, and pacing by it will make you go too slowly.
- **You might target the arteriovenous difference for training gains.** It is already 85 percent of the theoretical ceiling at maximum; at most 1.18-fold remains, and not all of that is reachable. **The headroom is in cardiac output.**
- **You might think lactate causes the ventilatory threshold by signalling oxygen debt.** The threshold's proximate cause is bicarbonate **buffering** the associated H⁺ and liberating non-metabolic CO₂ — which the CO₂ controller of [2.5](02-05-gas-exchange-and-transport.md) then blows off. Lactate itself is a fuel, shuttled to heart and other muscle and oxidised.

## One-liner

> $\dot V_{O_2} = \dot Q \times (C_a - C_{\bar v})O_2$ splits exercise into a pump term and an extraction term, and since extraction saturates near 85 percent the pump is the limit — so the whole response is a fivefold rise in cardiac output distributed by a fourfold fall in resistance, arbitrated between muscle and skin, with the loser being whichever loop the body has decided it can afford to lose.

## Problems

**P1 (🟢)** A cyclist at maximal effort has $\dot Q = 28.0$ L/min, $C_aO_2 = 195$ mL/L, $C_{\bar v}O_2 = 25$ mL/L, and a mass of 68 kg. (a) Compute VO₂max in L/min and in mL·kg⁻¹·min⁻¹. (b) Compute the extraction fraction. (c) After a training block his maximal cardiac output is 31.0 L/min with unchanged oxygen contents. Compute the new VO₂max and the percentage gain, and say why it equals the percentage gain in cardiac output.

**P2 (🟡)** At rest a subject has $\dot Q = 5.2$ L/min, $MAP = 95$ mmHg, and skeletal muscle receives 22 percent of cardiac output. At maximal exercise, $\dot Q = 24.0$ L/min, $MAP = 122$ mmHg, and muscle receives 86 percent. (a) Compute total peripheral resistance in $\text{mmHg}\cdot\text{min}/\text{L}$ at both points and the factor by which it changes. (b) Compute absolute muscle blood flow at both points and the fold increase. (c) Of the *extra* muscle blood flow, how much came from raising cardiac output and how much from redistribution away from other organs? (d) In one or two sentences, explain why the baroreflex does not prevent the rise in cardiac output.

**P3 (🔴, bridges to thermoregulation and to metabolic biochemistry)** A 72 kg runner holds a fixed pace requiring $\dot V_{O_2} = 3.10$ L/min at $RER = 0.90$ for one hour in hot conditions. His $HR_{\max}$ is 186 min⁻¹. At minute 10 his heart rate is 148 min⁻¹ and his stroke volume is 130 mL. At minute 55 his stroke volume has fallen to 112 mL, at the same pace.

(a) Compute the fraction of energy from carbohydrate, his energy expenditure in kcal/hr, his carbohydrate use in g/hr, and the time to deplete a 500 g glycogen store.
(b) Compute cardiac output at minute 10, and the heart rate needed at minute 55 to hold it constant.
(c) Compute the stroke volume at which he would be forced to reduce cardiac output, and name the full feedback chain — sensor to effector — that produced the drift.

<details>
<summary>Solutions</summary>

**P1 (a)** Arteriovenous oxygen difference:

$$C_aO_2 - C_{\bar v}O_2 = 195 - 25 = 170\ \text{mL O}_2\ \text{per L blood}$$

$$\dot V_{O_2\max} = 28.0\ \tfrac{\text{L}}{\text{min}} \times 170\ \tfrac{\text{mL}}{\text{L}} = 4760\ \text{mL/min} = \mathbf{4.76\ \text{L/min}}$$

$$\frac{4760\ \text{mL/min}}{68\ \text{kg}} = \mathbf{70.0\ \text{mL}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}}$$

**(b)**
$$\text{extraction} = \frac{170}{195} = 0.872 = \mathbf{87.2\ \text{percent}}$$

Note how little room is left: even perfect extraction would give $195/170 = 1.15$, a 15 percent gain, and complete extraction is not physiologically achievable.

**(c)**
$$\dot V_{O_2\max}' = 31.0 \times 170 = 5270\ \text{mL/min} = \mathbf{5.27\ \text{L/min}} = \frac{5270}{68} = 77.5\ \text{mL}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}$$

$$\text{gain} = \frac{5.27 - 4.76}{4.76} = \frac{0.51}{4.76} = 0.107 = \mathbf{10.7\ \text{percent}}$$

$$\text{cardiac output gain} = \frac{31.0-28.0}{28.0} = 0.107 = 10.7\ \text{percent}$$

Same number. ✓

**They are identical because the Fick principle is a product, and the extraction term was held fixed.** With $(C_a - C_{\bar v})O_2$ constant, $\dot V_{O_2}$ is exactly proportional to $\dot Q$, so a fractional change in one is the same fractional change in the other. **This is the arithmetic behind the claim that VO₂max is a cardiovascular measurement** — when the peripheral term is saturated, VO₂max *is* cardiac output in different units.

**P2 (a)** From $MAP = \dot Q \times TPR$:

$$TPR_{\text{rest}} = \frac{95}{5.2} = \mathbf{18.3\ \tfrac{\text{mmHg}\cdot\text{min}}{\text{L}}}, \qquad TPR_{\max} = \frac{122}{24.0} = \mathbf{5.08\ \tfrac{\text{mmHg}\cdot\text{min}}{\text{L}}}$$

$$\frac{TPR_{\max}}{TPR_{\text{rest}}} = \frac{5.08}{18.3} = 0.278$$

**Resistance falls to 27.8 percent of resting — a 3.6-fold fall.** Cross-check against the ratios: cardiac output rose $24.0/5.2 = 4.62$-fold and MAP rose $122/95 = 1.28$-fold, so $TPR$ must change by $1.28/4.62 = 0.278$. ✓

**(b)**
$$Q_{\text{muscle,rest}} = 0.22 \times 5.2 = \mathbf{1.14\ \text{L/min}}, \qquad Q_{\text{muscle,max}} = 0.86 \times 24.0 = \mathbf{20.6\ \text{L/min}}$$

$$\text{fold increase} = \frac{20.64}{1.144} = \mathbf{18.0\times}$$

**(c)**
$$\Delta Q_{\text{muscle}} = 20.64 - 1.14 = 19.50\ \text{L/min}$$
$$\Delta \dot Q_{\text{total}} = 24.0 - 5.2 = 18.80\ \text{L/min}$$
$$\text{from redistribution} = 19.50 - 18.80 = \mathbf{0.70\ \text{L/min}}$$

$$\frac{0.70}{19.50} = 3.6\ \text{percent from redistribution}, \qquad \mathbf{96.4\ \text{percent from raising cardiac output}}$$

**The pump did essentially all of it.** Redistribution matters enormously *to the organs that lose their flow* — the gut and kidney really are running at a quarter of normal perfusion — but as a source of muscle blood it is nearly negligible. Muscle's 18-fold flow increase is the pump's 4.6-fold output increase multiplied by its 3.9-fold larger share ($0.86/0.22 = 3.9$; $4.62 \times 3.91 = 18.1$ ✓).

**(d)** Two reasons, and both are needed.

First, **the baroreflex is reset, not overridden.** Central command — feedforward drive descending from motor cortex to the medullary cardiovascular centre in parallel with the drive to muscle, reinforced by metaboreceptor afferents from working muscle — raises the reflex's operating point. The loop retains its gain and continues to buffer perturbations; it is simply defending a higher pressure. In control terms the reference input changed, not the controller.

Second, **the reflex has nothing to object to.** The baroreceptors sense pressure, not flow. Massive metabolic vasodilation in muscle drops total peripheral resistance to 28 percent of resting, so a 4.6-fold rise in cardiac output produces only a 28 percent rise in mean pressure. **The pressure error the reflex would need to correct never becomes large.** If you could raise cardiac output fivefold *without* the vasodilation, the baroreflex would fight you hard — and pressure would be lethal.

**P3 (a)** Carbohydrate fraction from RER:

$$f_{\text{CHO}} = \frac{0.90 - 0.70}{1.00-0.70} = \frac{0.20}{0.30} = 0.667 = \mathbf{66.7\ \text{percent}}$$

Caloric equivalent of oxygen, interpolated between 4.69 (fat) and 5.05 (carbohydrate) kcal/L:

$$4.69 + 0.667(5.05-4.69) = 4.69 + 0.240 = 4.93\ \text{kcal per L O}_2$$

$$\text{expenditure} = 3.10 \times 4.93 = 15.28\ \text{kcal/min} \times 60 = \mathbf{917\ \text{kcal/hr}}$$

$$\text{carbohydrate} = \frac{0.667 \times 917}{4\ \text{kcal/g}} = \frac{611.6}{4} = \mathbf{153\ \text{g/hr}}$$

$$\text{time to depletion} = \frac{500\ \text{g}}{153\ \text{g/hr}} = \mathbf{3.3\ \text{hours}}$$

**(b)**
$$\dot Q = 148\ \text{min}^{-1} \times 130\ \text{mL} = 19{,}240\ \text{mL/min} = \mathbf{19.2\ \text{L/min}}$$

$$HR_{55} = \frac{19{,}240\ \text{mL/min}}{112\ \text{mL}} = 171.8 \approx \mathbf{172\ \text{min}^{-1}}$$

**A 24-beat rise at an unchanged pace.** Sanity check with Fick, which you should always run on a number like this:

$$C_aO_2 - C_{\bar v}O_2 = \frac{3100\ \text{mL/min}}{19.24\ \text{L/min}} = 161\ \text{mL/L} \ \Longrightarrow \ \text{extraction} = \frac{161}{200} = 80\ \text{percent}$$

Eighty percent whole-body extraction at a hard but submaximal pace is exactly what you would expect — **the cardiac output is consistent with the stated oxygen uptake**, which is the check worth doing before trusting any of the rest.

**(c)** The reserve runs out when the required heart rate reaches $HR_{\max} = 186$:

$$SV_{\text{floor}} = \frac{19{,}240\ \text{mL/min}}{186\ \text{min}^{-1}} = \mathbf{103\ \text{mL}}$$

**Below a stroke volume of about 103 mL, cardiac output must fall**, and by the Fick principle so must oxygen uptake — at which point the pace becomes unsustainable regardless of how the runner feels about it. He is at 112 mL at minute 55 and falling. He began the hour with 38 beats of heart-rate reserve and ends it with 14.

**The feedback chain, sensor to effector:**

1. **Sensor:** hypothalamic preoptic thermoreceptors plus skin thermoreceptors detect rising core and skin temperature ([4.2](04-02-thermoregulation.md)).
2. **Controller:** the hypothalamus compares against the thermal set point and increases the error signal.
3. **Effectors:** sympathetic cholinergic drive to sweat glands (evaporative loss) and withdrawal of cutaneous vasoconstrictor tone (skin vasodilation).
4. **Cost of those effectors:** sweating drains plasma volume; cutaneous vasodilation pools blood in compliant skin veins. **Both reduce central blood volume.**
5. **Consequence:** reduced ventricular filling lowers end-diastolic volume; **by the Frank–Starling relation ([2.2](02-02-cardiac-cycle-and-output.md)), stroke volume falls.**
6. **Second loop engages:** falling stroke volume transiently lowers cardiac output and mean arterial pressure; carotid and aortic **baroreceptors** detect it ([2.3](02-03-hemodynamics-blood-pressure.md)); the medullary cardiovascular centre increases sympathetic drive and withdraws vagal tone; **heart rate rises** until $\dot Q = HR \times SV$ is restored.
7. **Third loop, slower:** falling plasma volume and rising osmolarity trigger ADH release and renin–angiotensin–aldosterone activation ([3.3](03-03-fluid-electrolyte-acid-base.md)), conserving water and sodium — on a timescale of tens of minutes, too slow to rescue this hour.

**The lesson to extract: both loops are functioning perfectly, and the athlete is still headed for failure.** The thermoregulatory loop defends core temperature by spending cardiac filling. The baroreflex defends cardiac output by spending heart-rate reserve. **Neither is malfunctioning; they are competing for resources that the other one needs, and the body has prioritised temperature over performance.** Drinking to replace sweat losses attacks the chain at step 4 and is the only intervention that addresses the cause.

</details>

## Flashback

**From Lesson 2.2 (the cardiac cycle and cardiac output):** A resting left ventricle has end-diastolic volume 138 mL, end-systolic volume 62 mL, heart rate 58 min⁻¹, and a mean ejection pressure of 105 mmHg.

(a) Compute stroke volume, ejection fraction and cardiac output.
(b) Estimate the external stroke work in joules and the mean external power of the ventricle in watts. Use $1\ \text{mmHg} = 133.3$ Pa and $1\ \text{mL} = 10^{-6}\ \text{m}^3$.
(c) A rapid saline infusion raises end-diastolic volume to 160 mL with contractility and afterload unchanged. Predict the new stroke volume, ejection fraction and cardiac output, and name the law responsible.

<details>
<summary>Solution</summary>

**(a)**
$$SV = EDV - ESV = 138 - 62 = \mathbf{76\ \text{mL}}$$

$$EF = \frac{SV}{EDV} = \frac{76}{138} = 0.551 = \mathbf{55.1\ \text{percent}}$$

$$\dot Q = HR \times SV = 58\ \text{min}^{-1} \times 76\ \text{mL} = 4408\ \text{mL/min} = \mathbf{4.41\ \text{L/min}}$$

**(b)** External stroke work is the area of the pressure–volume loop, well approximated by mean ejection pressure times stroke volume:

$$P = 105\ \text{mmHg} \times 133.3\ \tfrac{\text{Pa}}{\text{mmHg}} = 13{,}997\ \text{Pa}$$
$$V = 76\ \text{mL} = 76 \times 10^{-6}\ \text{m}^3 = 7.60\times10^{-5}\ \text{m}^3$$
$$W = PV = 13{,}997 \times 7.60\times10^{-5} = \mathbf{1.06\ \text{J per beat}}$$

$$\text{power} = 1.06\ \text{J} \times \frac{58}{60\ \text{s}} = \mathbf{1.03\ \text{W}}$$

**About one watt of external hydraulic work** — a striking number, because the heart consumes roughly 25 times that in metabolic terms. Most cardiac energy goes into isovolumetric wall tension, not into moving blood, which is why afterload is so much more expensive than preload.

**(c)** **The Frank–Starling law.** Greater end-diastolic volume stretches sarcomeres toward optimal thin/thick filament overlap, increasing developed force at unchanged contractility.

The key structural point: **end-systolic volume is set by contractility and afterload, both unchanged here**, so the ventricle empties to the same end-systolic volume as before. The entire added preload therefore appears as extra ejection:

$$SV' = 160 - 62 = \mathbf{98\ \text{mL}} \qquad (+22\ \text{mL}, \ +29\ \text{percent})$$

$$EF' = \frac{98}{160} = 0.613 = \mathbf{61.3\ \text{percent}}$$

$$\dot Q' = 58 \times 98 = 5684\ \text{mL/min} = \mathbf{5.68\ \text{L/min}}$$

**Ejection fraction rose even though contractility did not change** — which is exactly why ejection fraction is a poor index of contractility, and why volumes and the end-systolic pressure–volume relationship are the honest measurements.

This is the mechanism doing real work in the lesson above: the muscle and respiratory pumps raise venous return at the start of exercise, and stroke volume rises for precisely this reason — until diastolic filling time runs out.

</details>

## Connections

- **Backward — this lesson is the course's assembly.** [2.2](02-02-cardiac-cycle-and-output.md) supplies $\dot Q = HR \times SV$ and Frank–Starling, which here explain both the rise in stroke volume and its later collapse. [2.5](02-05-gas-exchange-and-transport.md) supplies the arteriovenous difference and the Bohr effect that makes 85 percent extraction possible. [2.3](02-03-hemodynamics-blood-pressure.md) supplies $MAP = \dot Q \times TPR$ and the baroreflex, which turns out to be **reset rather than overridden**. [2.4](02-04-ventilation-lung-mechanics.md) supplies the ventilatory mechanics that never become limiting. [4.2](04-02-thermoregulation.md) supplies the competitor for cardiac output; [4.1](04-01-gastrointestinal-system.md) and [3.1](03-01-glomerular-filtration-clearance.md) supply the organs that lose it; [3.3](03-03-fluid-electrolyte-acid-base.md) supplies the buffering behind the ventilatory threshold; [3.4](03-04-endocrine-axes.md) supplies the catecholamine and cortisol drive behind the fuel shift; [1.6](01-06-muscle-contraction.md) supplies the fibre types that determine which fuel is burned.
- **Forward — the closing argument on [1.1](01-01-homeostasis-feedback-control.md).** The syllabus claimed every mechanism in this course is a controller correcting an error. That held for eighteen lessons and it holds here. **The addition exercise forces is that the controllers compete.** The baroreflex wants vasoconstriction; muscle demands vasodilation. Thermoregulation wants blood in the skin; the ventricle needs it in the chest. Ventilation defends pH by hyperventilating, at a metabolic cost that steals flow from the legs. The gut wants perfusion to absorb the carbohydrate the legs are burning, and does not get it. **Every one of these loops works. They cannot all be satisfied.** What emerges is a priority ordering — cerebral and coronary perfusion absolute, then arterial pressure, then core temperature, then muscle perfusion, then everything else — and **physiology is as much the study of that arbitration as it is of the individual loops.** The single most useful habit this course can leave you with is to meet any whole-body perturbation by asking: which loops are now in conflict, and which one does the body sacrifice?
- **Sideways.** The reset baroreflex is a reference-input change with unchanged loop gain, which is the distinction [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md) draws between servo and regulator problems. The fuel crossover is the whole-body reading of the reciprocal regulation in [biochemistry 3.2](../../biochemistry/lessons/03-02-glycolysis.md) and [biochemistry 4.2](../../biochemistry/lessons/04-02-fatty-acid-oxidation.md), and the ATP-per-oxygen accounting that makes carbohydrate the better fuel under an oxygen constraint is [biochemistry 3.4](../../biochemistry/lessons/03-04-oxidative-phosphorylation.md). The 85 percent extraction figure is the oxygen–hemoglobin curve of [biochemistry 1.5](../../biochemistry/lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md) operating on its steep limb with a rightward Bohr shift. And the 500 g glycogen ceiling is [biochemistry 3.1](../../biochemistry/lessons/03-01-carbohydrates-structure-storage.md)'s storage polymer meeting a real deadline.

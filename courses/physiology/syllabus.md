# Human Physiology — Syllabus

> Life Sciences · Tier 1 · ~18 lessons · Prereqs: [general-biology](../general-biology/syllabus.md) · Roadmap id: `physiology`

## Goal

Learn how the human body holds itself steady — how ten organ systems, each doing something mechanical or electrical or chemical, are wired together by feedback so that blood pressure, pH, temperature, and ion concentrations stay in a narrow livable band while everything around and inside them changes. The single organizing idea is **homeostasis through negative feedback**: nearly every mechanism in the course is a controller correcting an error, and once you see that pattern you can predict a system's behavior before memorizing its parts. You'll build from the cell membrane up — transport, the resting potential, the action potential — then use that machinery to understand nerve, muscle, heart, lungs, kidney, endocrine glands, and gut, and finish by watching all of them cooperate under the load of exercise and heat. We deliberately skip clinical diagnosis and pathophysiology depth (this is how the healthy body works, not how it breaks), and we push molecular-signaling detail to [`molecular-cell-biology`](../molecular-cell-biology/syllabus.md); here a hormone's job matters more than its second messenger's kinetics.

## Dangerous Checklist

When you finish, you can:

- [ ] Diagram any homeostatic loop as sensor → controller → effector, and predict whether a given feedback is stabilizing or runaway
- [ ] Compute an ion's equilibrium potential from the Nernst equation and estimate a resting potential from relative permeabilities
- [ ] Explain, phase by phase, which channels open during an action potential and why it is all-or-none and one-directional
- [ ] Trace a signal from a synapse through excitation–contraction coupling to a muscle's mechanical force
- [ ] Read a cardiac cycle off a pressure–volume loop and compute stroke volume, ejection fraction, and cardiac output
- [ ] Apply the flow = pressure ÷ resistance analogy to blood pressure and explain how the baroreflex defends it
- [ ] Compute alveolar $P_{O_2}$ from the alveolar gas equation and explain gas transport using the oxygen–hemoglobin curve
- [ ] Estimate glomerular filtration rate from a clearance measurement and quantify tubular reabsorption of a solute
- [ ] Classify a simple acid–base disturbance from pH, $P_{CO_2}$, and bicarbonate, and identify the compensating system
- [ ] Sketch a hormonal axis (hypothalamus → gland → target) and explain how negative feedback sets its output
- [ ] Explain how the gut coordinates motility, secretion, and absorption to extract nutrients from a meal
- [ ] Estimate the sweat rate needed to dissipate a given metabolic heat load, and describe how the body integrates all systems during exercise

## Modules

### Module 1: Homeostasis, cells, and excitable tissue

Start with the one idea that organizes everything — negative feedback — then build the electrical machinery of life from the membrane up, ending in the nerve and muscle that turn signals into force.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Homeostasis and feedback control | See every physiological mechanism as a controller fixing an error | internal environment, set point, sensor/controller/effector, negative vs positive feedback, gain, feedforward |
| 1.2 | Transport across the cell membrane | Predict which way a solute moves and whether it costs energy | lipid bilayer, diffusion, channels vs carriers, primary/secondary active transport, Na⁺/K⁺-ATPase, osmosis and tonicity |
| 1.3 | The resting membrane potential | Compute the voltage a cell holds at rest from its ion gradients | electrochemical gradient, Nernst equation, equilibrium potential, K⁺ leak, Goldman equation, electroneutrality |
| 1.4 | The action potential | Explain the all-or-none spike phase by phase in terms of channels | threshold, voltage-gated Na⁺/K⁺ channels, depolarization/repolarization, refractory period, propagation, myelin and saltatory conduction |
| 1.5 | Synaptic transmission | Trace how one cell's spike becomes another's graded signal | chemical synapse, Ca²⁺-triggered vesicle release, neurotransmitters, EPSP/IPSP, spatial/temporal summation, receptor types |
| 1.6 | Muscle contraction | Get from an action potential to mechanical tension | sarcomere, sliding-filament model, cross-bridge cycle, excitation–contraction coupling, Ca²⁺ and troponin, twitch/tetanus, length–tension |

**Boss problem 1:** A neuron has intracellular/extracellular concentrations $[\text{K}^+]_i=140$, $[\text{K}^+]_o=4$, $[\text{Na}^+]_i=15$, $[\text{Na}^+]_o=145$ (all mM) at $37^\circ\text{C}$ (use $61\,\text{mV}\cdot\log_{10}$). (a) Compute $E_K$ and $E_{Na}$. (b) With relative permeabilities $P_{Na}:P_K = 0.03:1$ at rest, estimate $V_{rest}$ from the Goldman equation; then with $P_{Na}:P_K = 15:1$ at the spike's peak, estimate the peak voltage. (c) Explain in one sentence why the peak falls short of $E_{Na}$. (d) The neuron's spike triggers a twitch, but a train of spikes produces a much larger sustained force — name the mechanism and say what is summing.

### Module 2: The cardiovascular and respiratory systems

The body's two transport networks. Build the heart as an electrically-timed pump, push blood through a resistance network, then load that blood with oxygen and unload its carbon dioxide.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Cardiac electrophysiology | Explain how the heart paces and coordinates its own beat | pacemaker (SA node) potentials, funny current, conduction pathway (AV node, Purkinje), plateau phase, ECG as a summed signal |
| 2.2 | The cardiac cycle and cardiac output | Read pressures, volumes, and valves through one heartbeat | systole/diastole, pressure–volume loop, stroke volume, ejection fraction, preload/afterload, Frank–Starling law, $CO = HR \times SV$ |
| 2.3 | Hemodynamics and blood pressure regulation | Apply flow = pressure ÷ resistance to the circulation | pressure–flow–resistance, Poiseuille intuition, mean arterial pressure, total peripheral resistance, baroreflex, capillary Starling forces |
| 2.4 | Pulmonary ventilation and lung mechanics | Explain what moves air in and out and what resists it | boyle's-law pressures, compliance, surfactant, airway resistance, lung volumes, dead space, work of breathing |
| 2.5 | Gas exchange and transport | Get O₂ from alveolus to tissue and CO₂ back, quantitatively | alveolar gas equation, diffusion and V̇/Q̇ matching, oxygen–hemoglobin dissociation curve, Bohr effect, CO₂ transport and bicarbonate, control of breathing |

**Boss problem 2:** A resting adult has $HR=70\,\text{min}^{-1}$, end-diastolic volume $120\,\text{mL}$, end-systolic volume $50\,\text{mL}$. (a) Compute stroke volume, ejection fraction, and cardiac output. (b) With mean arterial pressure $93$ mmHg and central venous pressure $3$ mmHg, compute total peripheral resistance in $\text{mmHg}\cdot\text{min}/\text{L}$ and state the electrical analogy. (c) Compute alveolar $P_{O_2}$ from $P_{A O_2} = P_{I O_2} - P_{a CO_2}/R$ with inspired $P_{I O_2}=150$ mmHg, $P_{a CO_2}=40$ mmHg, $R=0.8$. (d) Explain why having this person breathe 100% oxygen barely raises the oxygen carried in their blood.

### Module 3: Renal and endocrine regulation

The two long-timescale controllers. The kidney sets the volume, electrolytes, and pH of the internal sea; the endocrine system broadcasts slow chemical commands over hormonal axes. Both are feedback loops writ large.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Glomerular filtration and renal clearance | Measure how fast the kidney filters plasma and clears a solute | nephron layout, filtration barrier, filtration pressures, GFR, clearance $= UV/P$, inulin and creatinine, filtration fraction |
| 3.2 | Tubular transport and concentrating the urine | Follow how the tubule reclaims what filtration threw away | proximal reabsorption, transport maximum, loop countercurrent multiplier, medullary gradient, ADH and aquaporins, water vs solute handling |
| 3.3 | Fluid, electrolyte, and acid–base balance | Defend the body's volume, Na⁺/K⁺, and pH | body fluid compartments, RAAS and aldosterone, Na⁺/water and K⁺ balance, bicarbonate buffer, Henderson–Hasselbalch, respiratory vs metabolic disturbances |
| 3.4 | Endocrine control: hormone action and the major axes | Read any hormonal axis as a feedback-regulated broadcast | hormone classes and receptors, hypothalamic–pituitary axis, thyroid and HPA (cortisol) axes, insulin/glucagon glucose control, PTH and calcium, negative feedback |

**Boss problem 3:** Inulin is infused to steady state: urine $[\text{inulin}]=30\,\text{mg/mL}$, urine flow $1\,\text{mL/min}$, plasma $[\text{inulin}]=0.25\,\text{mg/mL}$. (a) Compute GFR. (b) With plasma $[\text{Na}^+]=140\,\text{mmol/L}$, compute the filtered load of Na⁺ per minute; if $0.1\,\text{mmol/min}$ is excreted, what fraction is reabsorbed? (c) This person is dehydrated — trace the ADH axis from stimulus to concentrated urine, and name the second hormone system defending blood volume. (d) Their arterial blood shows $\text{pH}=7.32$, $P_{a CO_2}=30$ mmHg, $[\text{HCO}_3^-]=15\,\text{mmol/L}$; name the primary acid–base disturbance and say which system is compensating.

### Module 4: Digestive and integrative physiology

The gut supplies the fuel; then we step back and watch every system in the course cooperate to hold the body steady under real load — heat and hard exercise.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The gastrointestinal system | Explain how a meal is moved, broken down, and absorbed | motility and peristalsis, secretion (acid, bile, enzymes), enteric nervous system, digestion and absorption of macronutrients, splanchnic circulation |
| 4.2 | Thermoregulation | Explain how the body holds core temperature against heat and cold | heat balance, hypothalamic set point, conduction/convection/radiation/evaporation, sweating and vasomotor control, latent heat of sweat |
| 4.3 | Exercise physiology: the body under load | Watch cardiovascular, respiratory, and metabolic systems integrate | oxygen uptake and V̇O₂max, cardiac output redistribution, ventilatory response, metabolic fuel use, cardiovascular drift, the integrated stress response |

**Boss problem 4:** An athlete runs in the heat, generating $800\,\text{W}$ of metabolic heat that must be dissipated. (a) If evaporation is the only cooling route and sweat's latent heat of vaporization is $2.43\,\text{kJ/g}$, estimate the required sweat rate in g/s and in L/hr. (b) Explain why splanchnic (gut) blood flow falls sharply during this run and what redirects it. (c) As sweating drains plasma volume, heart rate climbs even at constant pace — name this phenomenon and explain the feedback that drives it. (d) State the negative-feedback loop, sensor to effector, that is defending core temperature throughout.

## Sources of truth

- Boron & Boulpaep, *Medical Physiology* — primary reference for mechanism and rigor level.
- Guyton & Hall, *Textbook of Medical Physiology* — organizing homeostasis/feedback framing and organ-system structure.
- Costanzo, *Physiology* — level and scope calibration for a fast, essentials-first course.
- West, *Respiratory Physiology: The Essentials* — conventions for Module 2's respiratory lessons (alveolar gas equation, V̇/Q̇).

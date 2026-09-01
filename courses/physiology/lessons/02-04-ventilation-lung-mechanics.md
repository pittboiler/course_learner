# Human Physiology · Lesson 2.4: Pulmonary ventilation and lung mechanics

> ⏱ ~15 min · Module 2: The cardiovascular and respiratory systems · Builds on: [2.3](02-03-hemodynamics-blood-pressure.md) · Unlocks: 2.5 (gas exchange and transport)

## Why this matters

[2.3](02-03-hemodynamics-blood-pressure.md) treated the circulation as a pressure-driven flow problem: a pump makes a pressure difference, a network resists it, flow is the quotient. **Breathing is the same problem with a different working fluid**, and most of the machinery transfers.

But the lung is *elastic*, so much of what a breath costs goes into stretching tissue rather than pushing gas. That split — **elastic cost versus resistive cost** — is what makes respiratory mechanics its own subject, and it is why a person with stiff lungs and a person with narrowed airways adopt *opposite* breathing patterns. Both patterns are optimal; they minimize different terms.

The payoff at the end is one equation that overturns the most natural assumption about breathing: **the air you move and the air you ventilate with are different numbers, and you can double one while halving the other.**

## The idea

**Air moves because alveolar pressure differs from atmospheric.** That is all of ventilation; everything else is bookkeeping about how that difference is made and what opposes it.

**Inspiration is active.** The diaphragm — skeletal muscle running the cross-bridge cycle of [1.6](01-06-muscle-contraction.md) — descends, the external intercostals swing the ribs up and out, the thorax enlarges. Boyle's law does the rest: expanding a container at fixed gas amount drops its pressure. Alveolar pressure falls about 1 cm H₂O below atmospheric and half a litre of air flows in. **Expiration at rest is free**, powered entirely by the recoil of stretched elastic tissue: the inspiratory muscles simply stop. **You pay for inhaling and get exhaling as change** — which is why forced expiration (abdominals, internal intercostals) is a separate, effortful act reserved for exercise, coughing and speech.

**Now the fact that organizes the whole subject: intrapleural pressure is subatmospheric.** The pleural space is a thin fluid film between two membranes, one glued to the lung, one to the chest wall. The lung alone would collapse to a small ball; the chest wall alone would spring outward past where it sits. They are stuck together across that film, each holding the other away from its own resting position. **Two structures pulling in opposite directions across a sealed liquid film generate a suction between them** — about $-5$ cm H₂O at rest, falling to roughly $-7.5$ cm H₂O at the end of a quiet inspiration.

**This single fact explains two things at once.** It is why the lung stays inflated: nothing *pushes* air into the alveoli, they are held open by being pulled outward. And it is why a pneumothorax collapses the lung instantly — admit air to the pleural space, the pressure there jumps to atmospheric, the suction vanishes, the lung snaps to its own resting volume while the chest wall springs outward. **The lung was never held open by pressure inside it; it was held open by a pressure deficit outside it.**

**So the distending pressure is a difference, not a level.** Call it the transpulmonary pressure: alveolar minus intrapleural. **It is not the same as alveolar pressure** — at both ends of a quiet breath alveolar pressure is exactly zero (no flow means no gradient to the mouth), yet the lung holds two different volumes, because intrapleural pressure changed.

**Elasticity gets one number, compliance**: volume gained per unit distending pressure. And — a trap worth flagging now — **high compliance is not a healthy lung; it is a lung that has lost the recoil that drives its own exhalation.** **Resistance gets the other number**, and it behaves exactly like the network of [2.3](02-03-hemodynamics-blood-pressure.md), with the same counterintuitive answer: resistance does *not* live where the tubes are narrowest.

## The formal version

### Pressures

Let atmospheric pressure be the zero of the scale (all lung pressures are gauge pressures in cm H₂O; $1$ cm H₂O $= 98.1$ Pa $= 0.735$ mmHg). With $P_A$ the alveolar pressure and $P_{pl}$ the intrapleural pressure,

$$P_L \;=\; P_A - P_{pl} \qquad \text{(transpulmonary pressure)}$$

*In words: the pressure holding the lung open is the pressure inside the alveolus minus the pressure in the pleural space just outside it.*

Through one quiet breath (cm H₂O):

| | $P_A$ | $P_{pl}$ | $P_L$ | flow |
|---|---|---|---|---|
| End expiration (FRC) | $0$ | $-5$ | $+5$ | none |
| Mid inspiration | $-1$ | $-6.3$ | $+5.3$ | in |
| End inspiration | $0$ | $-7.5$ | $+7.5$ | none |
| Mid expiration | $+1$ | $-6.3$ | $+7.3$ | out |

**Read rows 1 and 3 together.** $P_A$ is zero in both, yet the lung holds 500 mL more in the third — because $P_L$, the pressure that matters, went from $5$ to $7.5$.

### Compliance

$$C \;=\; \frac{\Delta V}{\Delta P_L}$$

*In words: compliance is the slope of the pressure–volume curve — millilitres bought per centimetre of water of distending pressure.* For the numbers above, $C = 500/2.5 = 200\ \text{mL/cm H}_2\text{O}$, the standard adult value.

Three refinements:

- **The curve is not straight.** Compliance is highest in the tidal range and falls at high volumes where the lung is already stretched. Quiet breathing sits on the steepest part; that is not an accident.
- **Lung and chest wall are compliances in series**, adding reciprocally exactly as series capacitances do ([circuits 3.1](../../circuits/lessons/03-01-capacitors-and-inductors.md)): $1/C_{total} = 1/C_{lung} + 1/C_{wall}$. With each near $200$, the whole respiratory system has $C_{total} \approx 100\ \text{mL/cm H}_2\text{O}$.
- **Hysteresis:** inflation takes more pressure at every volume than deflation, because inflating must re-open collapsed alveoli against surface tension. The enclosed area of the loop is energy dissipated per breath.

| | Compliance | Cause | Consequence |
|---|---|---|---|
| Pulmonary fibrosis | **low** | scarred, thickened interstitium | inspiration is expensive; small stiff lungs |
| Emphysema | **high** | elastin destroyed, alveolar walls lost | recoil gone; air trapping, airway collapse |

### Surface tension and Laplace's law

The alveolar surface is wet. An air–liquid interface has surface tension $T$ (energy per unit area, N/m), and for a sphere of radius $r$ with one such interface, Laplace's law gives the pressure the surface generates:

$$P = \frac{2T}{r}$$

*In words: a curved liquid surface squeezes inward, and squeezes harder the tighter the curve.*

**This is a disaster in the making, because of the $r$ in the denominator.** Take two connected alveoli sharing $T = 20$ mN/m, radii $50\ \mu\text{m}$ and $150\ \mu\text{m}$:

$$P_{small} = \frac{2(0.020)}{50\times10^{-6}} = 800\ \text{Pa} = 8.2\ \text{cm H}_2\text{O}, \qquad P_{large} = \frac{2(0.020)}{150\times10^{-6}} = 267\ \text{Pa} = 2.7\ \text{cm H}_2\text{O}$$

**The small alveolus has three times the collapsing pressure**, so it empties into the large one — and shrinking raises its pressure further, so the process runs away. Repeat over 300 million alveoli and the lung becomes a few enormous bags and a lot of collapsed tissue.

**Surfactant is the fix, and the mechanism is subtler than "it lowers surface tension."** Type II alveolar cells secrete a phospholipid film at the interface — but a *uniform* reduction of $T$ would rescale both pressures by the same factor and change nothing about which alveolus empties into which.

**What saves the lung is that surfactant's effect is concentration-dependent.** A shrinking alveolus compresses its fixed quantity of surfactant into less area, so surface concentration rises and $T$ falls further; an expanding one thins its film and $T$ climbs back toward water's. So $T$ is small exactly where $r$ is small:

$$T = 10\ \text{mN/m},\, r = 50\ \mu\text{m} \;\Rightarrow\; P = 400\ \text{Pa}; \qquad T = 30\ \text{mN/m},\, r = 150\ \mu\text{m} \;\Rightarrow\; P = 400\ \text{Pa}$$

**Identical — neither empties into the other.** **It is the *gradient* of surface tension with alveolar size, not the mere lowering of it, that stabilizes the lung.** (Same interfacial physics as [biophysics 3.5](../../biophysics/lessons/03-05-membrane-mechanics.md), run in reverse: there, what a film costs to make; here, what it costs to keep from collapsing.)

**Surfactant's second job is quantitatively the bigger one.** Dropping $T$ from water's $70$ mN/m to about $10$ cuts the pressure needed to hold a $100\ \mu\text{m}$ alveolus open sevenfold, from $14$ to $2$ cm H₂O. **Roughly two-thirds of the lung's elastic recoil is surface tension, not tissue elasticity** — so surfactant is most of what makes breathing affordable at all.

**The natural experiment.** Surfactant production begins near week 24 of gestation and is adequate around week 34. A baby born before that has neonatal respiratory distress syndrome, and shows *both* failures at once: patchy alveolar collapse (the stability job) and exhausting work of breathing (the recoil job).

### Airway resistance

Airflow obeys the relation blood flow obeyed in [2.3](02-03-hemodynamics-blood-pressure.md):

$$\dot V = \frac{\Delta P}{R_{aw}}, \qquad R_{aw} = \frac{P_A - P_{atm}}{\dot V}$$

*In words: flow is the alveolus-to-mouth pressure difference divided by airway resistance.* At mid-inspiration $P_A = -1$ cm H₂O with flow about $0.5$ L/s, so $R_{aw} \approx 2\ \text{cm H}_2\text{O}\cdot\text{s/L}$ — normal.

**Where does that resistance live? Not where you would guess.** For laminar flow, Poiseuille ([fluid-dynamics 3.2](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md)) gives $R \propto L/r^4$, and $N$ tubes in parallel divide it ([circuits 1.2](../../circuits/lessons/01-02-ohms-law-equivalent-resistance.md)), so $R \propto L/(N r^4)$. Comparing the trachea with the whole terminal-bronchiole generation, in cm$^{-3}$:

| | $L$ | $r$ | $N$ | $L/(Nr^4)$ |
|---|---|---|---|---|
| Trachea | 10 cm | 0.9 cm | 1 | $10/0.656 = 15.2$ |
| Terminal bronchioles | 0.1 cm | 0.025 cm | $6.5\times10^{4}$ | $0.1/0.0254 = 3.9$ |

**One terminal bronchiole is $(0.9/0.025)^4 \approx 1.7$ million times more resistive per unit length than the trachea, yet the generation as a whole contributes about a quarter of what the trachea does** — they are 100 times shorter and there are 65,000 in parallel. **This is exactly the capillary argument from [2.3](02-03-hemodynamics-blood-pressure.md):** parallel conductances add, and number beats narrowness. In practice, airways wider than about 2 mm — the first eight generations — carry roughly 80 percent of the total.

**Two consequences.** The small airways are a **silent zone** — contributing under a fifth of the total, their resistance could double and $R_{aw}$ would rise under 20 percent, so early small-airway disease is nearly invisible and obstructive disease is well advanced before spirometry catches it. And **resistance depends steeply on lung volume**: the airways are tethered by surrounding parenchyma, so inflating the lung pulls them open and $R_{aw}$ falls roughly as $1/V$. Hence the instinct to hold the chest high when breathing is hard — elastically expensive, resistively cheap.

**Dynamic compression.** On forced expiration the muscles drive intrapleural pressure *positive*, say $+30$ cm H₂O; alveolar pressure is that plus elastic recoil, say $+10$, giving $P_A = +40$. Air flows toward a mouth at $0$, losing pressure to friction, and somewhere the pressure inside has fallen to $+30$ — equal to the pressure outside. **Downstream of that equal pressure point the airway is squeezed shut.** So **past a modest effort, blowing harder does not increase flow**: extra effort raises the compressing pressure exactly as much as the driving pressure, and maximal expiratory flow is *effort-independent*, set by recoil and calibre alone. **And in emphysema recoil is nearly gone** — with $P_{el} = 3$ instead of $10$, pressure need fall only $3$ before the equal pressure point is reached, landing it deep in small cartilage-free airways that collapse readily.

**Which is why obstructed patients exhale through pursed lips.** Pursing adds resistance *downstream*, holding mouth pressure at say $+5$; the whole pressure profile shifts up by 5 and the equal pressure point migrates toward the mouth, into cartilage-supported airways that cannot collapse. **They discover the fix without being taught it.**

### Volumes, capacities, and what a spirometer cannot see

Four **volumes** (non-overlapping) and four **capacities** (sums of volumes), typical young adult male:

| Volume | mL | | Capacity | Definition | mL |
|---|---|---|---|---|---|
| Tidal, $V_T$ | 500 | | Inspiratory capacity, IC | $V_T + IRV$ | 3500 |
| Inspiratory reserve, IRV | 3000 | | Functional residual capacity, FRC | $ERV + RV$ | 2300 |
| Expiratory reserve, ERV | 1100 | | Vital capacity, VC | $IRV + V_T + ERV$ | 4600 |
| Residual, RV | 1200 | | Total lung capacity, TLC | $VC + RV$ | 5800 |

**A spirometer measures air that moves, so it cannot measure residual volume** — by definition RV never leaves — and therefore cannot measure FRC or TLC either. Those need **helium dilution** (see how much an inhaled insoluble tracer is diluted) or **body plethysmography** (pant against a closed shutter in a sealed box, and apply Boyle's law to the box). Dilution sees only gas communicating with the airway, plethysmography sees all compressible gas, so the difference between them estimates trapped gas.

**FEV₁/FVC — the one ratio to remember.** FVC is the volume forcibly exhaled from TLC; FEV₁ is the part exhaled in the first second.

| | FVC | FEV₁ | FEV₁/FVC |
|---|---|---|---|
| Predicted | 4.6 L | 3.7 L | 0.80 |
| Obstructive (asthma, COPD) | 3.6 L | 1.8 L | **0.50** |
| Restrictive (fibrosis) | 2.5 L | 2.1 L | **0.84** |

*In words: obstruction empties a nearly normal volume slowly; restriction empties a small volume at normal speed.* **The ratio discriminates precisely because it divides out lung size.**

### Dead space, and the equation that pays for the lesson

The conducting airways have no capillaries, so gas that ends a breath sitting in them has gone nowhere useful: the **anatomic dead space**, about 150 mL (roughly 2.2 mL per kg). **Physiologic dead space** adds alveoli that are ventilated but not perfused — nearly equal to anatomic in health, far larger in pulmonary embolism. The Bohr equation measures it, using the fact that dead space contributes no CO₂:

$$\frac{V_D}{V_T} = \frac{P_{aCO_2} - P_{ECO_2}}{P_{aCO_2}}$$

with $P_{aCO_2}$ the arterial and $P_{ECO_2}$ the mixed-expired CO₂ partial pressure. At $40$ and $28$ mmHg, $V_D/V_T = 12/40 = 0.30$, so a 500 mL breath wastes 150 mL.

Now the payoff. With $f$ the respiratory frequency, **minute ventilation** is all the air moved, $\dot V_E = V_T f$, while **alveolar ventilation** is the part that reaches gas exchange:

$$\boxed{\;\dot V_A = (V_T - V_D)\,f\;}$$

*In words: subtract the dead space from every breath before counting it, because that gas is re-breathed and exchanges nothing.*

**Because $V_D$ is subtracted before multiplying by $f$, the two are not interchangeable.** Four ways to move exactly 6.0 L/min with $V_D = 150$ mL:

| Pattern | $V_T$ | $f$ | $\dot V_E$ | $\dot V_A$ | $P_{aCO_2}$ |
|---|---|---|---|---|---|
| Deep, slow | 1000 mL | 6 | 6.0 L/min | **5.1 L/min** | 34 mmHg |
| Normal | 500 mL | 12 | 6.0 L/min | **4.2 L/min** | 41 mmHg |
| Rapid, shallow | 250 mL | 24 | 6.0 L/min | **2.4 L/min** | 72 mmHg |
| Panting | 150 mL | 40 | 6.0 L/min | **0** | fatal |

(The last column uses $P_{aCO_2} = 863\,\dot V_{CO_2}/\dot V_A$ with $\dot V_{CO_2} = 0.20$ L/min, a relation [2.5](02-05-gas-exchange-and-transport.md) derives; 863 converts units.)

**Rapid shallow breathing can move plenty of air and ventilate almost nothing.** The last row is the reductio: at $V_T = V_D$ every breath fills and empties the dead space and not one molecule of fresh gas reaches an alveolus — while the monitor reports a perfectly normal minute ventilation. **Minute ventilation measures effort; alveolar ventilation measures result.**

### The work of breathing

Work is $\int P\,dV$, and the pressure has two parts — one stretching tissue, one pushing gas through tubes:

$$\dot W_{elastic} \approx f\,\frac{V_T^{\,2}}{2C}, \qquad \dot W_{resistive} \propto R_{aw}\,f^{\,2} V_T^{\,2}$$

*In words: the elastic cost is paid per breath and grows with the square of breath size; the resistive cost grows with flow, hence with rate as well.*

**These pull in opposite directions**, because at fixed alveolar ventilation $V_T = \dot V_A/f + V_D$: breathing slower forces bigger breaths (elastically expensive), breathing faster forces faster flows (resistively expensive). Holding $\dot V_A = 4.2$ L/min and $V_D = 150$ mL and evaluating both terms (sinusoidal flow, J/min, $C$ in mL/cm H₂O, $R_{aw}$ in cm H₂O·s/L):

| $f$ (min⁻¹) | Normal ($C=200$, $R=2$) | Stiff ($C=50$) | Obstructed ($R=8$) |
|---|---|---|---|
| 6 | 1.5 | 4.7 | **2.7** |
| 12 | **1.3** | 3.5 | 3.1 |
| 20 | 1.5 | **3.4** | 4.0 |
| optimum | $\approx 12$ | $\approx 20$ | $\approx 6$ |

**The normal optimum lands at 12 breaths per minute — the normal resting respiratory rate.** The two diseases move it in opposite directions:

- **Stiff lungs (low $C$)** blow up the elastic term, so minimize $V_T$: **rapid and shallow**, exactly how fibrosis patients breathe.
- **Obstructed airways (high $R$)** blow up the resistive term, so minimize flow: **slow and deep**, exactly how emphysema patients breathe — and why they also purse their lips.

**Neither pattern is a symptom. Both are solutions.**

## Picture

![Three stacked panels. Top: a pressure-volume curve for the lung with separate inflation and deflation limbs forming a hysteresis loop, a dashed tangent marking the tidal range where the slope is the compliance, and a much flatter red curve for a stiff fibrotic lung. Middle: a spirogram showing tidal breathing, a maximal inspiration and a maximal expiration, with brackets marking the four lung volumes and four capacities and residual volume shaded to show a spirometer cannot measure it. Bottom: alveolar pressure, intrapleural pressure and airflow through one quiet breath, with alveolar pressure returning to zero at both ends while intrapleural pressure stays negative throughout.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — compliance is a local slope).** A subject at FRC has $P_{pl} = -5$ cm H₂O. After a 600 mL inspiration, $P_{pl} = -9$; after a further 600 mL, $P_{pl} = -15$. Airflow is zero at each instant. Find the compliance over each 600 mL.

Zero flow means no gradient to the open mouth, so $P_A = 0$ and $P_L = -P_{pl}$ throughout: $P_L = +5,\ +9,\ +15$ cm H₂O.

$$C_1 = \frac{600}{9-5} = \mathbf{150\ \text{mL/cm H}_2\text{O}}, \qquad C_2 = \frac{600}{15-9} = \mathbf{100\ \text{mL/cm H}_2\text{O}}$$

**Compliance fell by a third for the same volume**, because at higher volumes the collagen and elastin fibres are already taut. **Compliance is a local slope, not a property of the lung** — always say at what volume it was measured. Likewise across body sizes: a child's lung is less compliant simply because it is smaller, so the size-free comparison is *specific compliance*, $C/\text{FRC} \approx 200/2300 = 0.087$ per cm H₂O.

**Example 2 (why you'd care — the ventilator that looked fine).** A patient is ventilated at $V_T = 700$ mL, $f = 10\ \text{min}^{-1}$, with $P_{aCO_2} = 40$ mmHg. To protect stiff lungs the team switches to $V_T = 420$ mL and raises $f$ to $17\ \text{min}^{-1}$, keeping minute ventilation roughly constant. Take $V_D = 150$ mL and unchanged CO₂ production.

$$\text{Before:}\quad \dot V_E = 700(10) = 7.0\ \text{L/min}, \qquad \dot V_A = 550(10) = \mathbf{5.5\ \text{L/min}}$$
$$\text{After:}\quad \dot V_E = 420(17) = 7.1\ \text{L/min}, \qquad \dot V_A = 270(17) = \mathbf{4.6\ \text{L/min}}$$

**Minute ventilation rose 2 percent and alveolar ventilation fell 17 percent.** Since $P_{aCO_2} \propto 1/\dot V_A$,

$$P_{aCO_2}^{new} = 40 \times \frac{5.5}{4.6} = \mathbf{48\ \text{mmHg}}.$$

**The dead space *fraction* is what changed**: from $150/700 = 21$ percent of each breath to $150/420 = 36$ percent. **Dead space is a fixed anatomical volume, so shrinking the breath makes it a larger share of every breath — the wasted fraction rises although the wasted volume does not.** Restoring $\dot V_A = 5.5$ L/min at $V_T = 420$ would need $f = 5500/270 \approx 20\ \text{min}^{-1}$, i.e. $8.4$ L/min — **20 percent more air moved for the same ventilation**, paid for in resistive work that scales as $f^2V_T^2$.

(The trade is deliberate: low tidal volumes reduce ventilator-induced lung injury enough that a raised $P_{aCO_2}$ is accepted. But it must be *anticipated*, and it will not be by anyone watching $\dot V_E$.)

## Watch out

- **You might think emphysema's high compliance is a silver lining** — easier to inflate, surely? **Compliance and recoil are reciprocal**, and recoil both powers passive exhalation and tethers the small airways open. Losing it means air trapping, an equal pressure point deep in collapsible airways, and far *more* total work.
- **You might treat intrapleural pressure as the distending pressure.** It is not; $P_L = P_A - P_{pl}$ is. On a ventilator, positive-pressure inflation makes $P_{pl}$ *positive* and the lung still distends, because $P_A$ is more positive still. The sign of the pleural pressure tells you nothing on its own.
- **You might think surfactant stabilizes alveoli by lowering surface tension.** Lowering it *uniformly* rescales every $2T/r$ identically and changes nothing about which alveolus empties into which. **The stabilization comes from the concentration-dependence**; the uniform lowering buys the *other* benefit, cheaper work of breathing.
- **You might expect resistance to be greatest in the smallest airways.** $R \propto L/(Nr^4)$, and $N$ grows faster than $r^4$ shrinks. Most resistance sits in medium bronchi, and the small airways are a silent zone where disease hides.
- **You might tell a wheezing person to blow harder.** Above modest effort, expiratory flow is effort-independent — extra force raises the compressing pressure as much as the driving pressure. Pursed lips, adding *downstream* resistance, genuinely help; more force does not.
- **You might read minute ventilation as ventilation.** $\dot V_E$ and $\dot V_A$ can move in opposite directions, and at $V_T = V_D$ alveolar ventilation is zero at any minute ventilation you like. **Always ask the tidal volume before believing a ventilation number.**

## One-liner

> The lung is held open by a pressure deficit outside it, not pressure inside it; what distends it is $P_A - P_{pl}$; the two costs of a breath — stretching tissue and pushing gas — pull the optimal breathing pattern in opposite directions; and because a fixed dead space is subtracted from every breath, $\dot V_A = (V_T - V_D)f$ can go to zero while $\dot V_E$ looks perfectly normal.

## Problems

**P1 (🟢)** A subject inhales 700 mL from FRC. Intrapleural pressure goes from $-5$ to $-8.5$ cm H₂O; airflow is zero at both ends of the measurement.

(a) Compute the transpulmonary pressure at each instant and the lung compliance.
(b) A patient with emphysema performs the same 700 mL inspiration, and their intrapleural pressure falls only from $-4$ to $-5.5$ cm H₂O. Compute their compliance.
(c) In one sentence each, name two ways this "easier" lung is harder to breathe with.

**P2 (🟡, bridges to [2.5](02-05-gas-exchange-and-transport.md))** A patient breathes $V_T = 400$ mL at $f = 20\ \text{min}^{-1}$; anatomic dead space is 150 mL and CO₂ production is 0.220 L/min.

(a) Compute minute ventilation and alveolar ventilation.
(b) After sedation the pattern becomes $V_T = 250$ mL at $f = 32\ \text{min}^{-1}$. Compute both again, and comment on what a monitor displaying only minute ventilation would show.
(c) Estimate $P_{aCO_2}$ for each pattern using $P_{aCO_2} = 863\,\dot V_{CO_2}/\dot V_A$ (mmHg, with volumes in L/min).
(d) At $f = 32\ \text{min}^{-1}$, what tidal volume would restore the original alveolar ventilation, and what minute ventilation does that require?

**P3 (🔴, bridges to surface physics)** Two alveoli of radii $60\ \mu\text{m}$ and $180\ \mu\text{m}$ open into the same alveolar duct. Take $1$ cm H₂O $= 98.1$ Pa.

(a) With surfactant absent and surface tension a uniform $T = 24$ mN/m, compute the collapsing pressure of each in Pa and cm H₂O, and state which way air flows.
(b) Surfactant is present, and the large alveolus's film is dilute enough that its tension stays at 24 mN/m. What tension must the small alveolus's film have for the two pressures to be equal? Express it as a fraction of the large one's.
(c) A neonate born at 27 weeks has no surfactant. During the first breath, an alveolus must be opened from a collapsed radius of $25\ \mu\text{m}$ against $T = 50$ mN/m. Compute the required pressure in cm H₂O and comment on it relative to the $5$–$10$ cm H₂O of a normal quiet breath. Then name both of surfactant's jobs and say which failure produces the neonate's patchy lung collapse and which produces their exhaustion.

<details>
<summary>Solutions</summary>

**P1 (a)** Zero flow means $P_A = 0$ (no gradient to the open mouth), so $P_L = 0 - P_{pl} = -P_{pl}$:

$$P_L(\text{start}) = +5\ \text{cm H}_2\text{O}, \qquad P_L(\text{end}) = +8.5\ \text{cm H}_2\text{O}, \qquad \Delta P_L = 3.5\ \text{cm H}_2\text{O}.$$

$$C = \frac{700\ \text{mL}}{3.5\ \text{cm H}_2\text{O}} = \mathbf{200\ \text{mL/cm H}_2\text{O}}$$

— a normal adult value.

**(b)** $$\Delta P_L = 5.5 - 4.0 = 1.5\ \text{cm H}_2\text{O}, \qquad C = \frac{700}{1.5} = \mathbf{467\ \text{mL/cm H}_2\text{O}}.$$

**More than twice normal.** Note also that their resting $P_{pl}$ is less negative ($-4$ rather than $-5$): with elastin destroyed there is less inward recoil to pull against the chest wall, so there is less suction to generate.

**(c)** Two independent reasons:

1. **Expiration is no longer free.** Passive exhalation is powered entirely by elastic recoil, and recoil is $1/C$. With recoil gone, emptying requires expiratory muscle effort — so a person who previously paid for half the breathing cycle now pays for all of it. Incomplete emptying leaves air trapped, FRC rises, and the lung is forced onto the flat upper part of its own pressure–volume curve, where compliance is low again.

2. **The airways collapse on expiration.** Airway calibre depends on radial traction from the surrounding parenchyma and on the elastic recoil pressure that keeps airway pressure above pleural pressure. With $P_{el}$ small, the equal pressure point sits close to the alveolus, in airways with no cartilage — so any expiratory effort compresses them shut. **Trying harder makes it worse**, which is why pursed-lip breathing (adding downstream resistance to shift the equal pressure point mouthward) is the useful manoeuvre.

**P2 (a)** $$\dot V_E = 400 \times 20 = 8000\ \text{mL/min} = \mathbf{8.0\ \text{L/min}}$$
$$\dot V_A = (400-150)\times 20 = 250\times 20 = 5000\ \text{mL/min} = \mathbf{5.0\ \text{L/min}}$$

**(b)** $$\dot V_E = 250\times 32 = 8000\ \text{mL/min} = \mathbf{8.0\ \text{L/min}} \quad \text{(unchanged)}$$
$$\dot V_A = (250-150)\times 32 = 100 \times 32 = 3200\ \text{mL/min} = \mathbf{3.2\ \text{L/min}} \quad \text{(down 36 percent)}$$

**A monitor showing minute ventilation would display exactly the same number before and after**, while more than a third of the patient's effective ventilation has disappeared. The dead space fraction went from $150/400 = 0.375$ to $150/250 = 0.60$ — **60 percent of every breath is now wasted.**

**(c)** $863 \times 0.220 = 189.9$ (mmHg·L/min).

$$P_{aCO_2}(\text{before}) = \frac{189.9}{5.0} = \mathbf{38\ \text{mmHg}} \qquad P_{aCO_2}(\text{after}) = \frac{189.9}{3.2} = \mathbf{59\ \text{mmHg}}$$

A rise from normal to marked hypercapnia, invisible on the ventilation display. (By the Henderson–Hasselbalch relation of [3.3](03-03-fluid-electrolyte-acid-base.md), a $P_{aCO_2}$ of 59 mmHg with no time for renal compensation gives an acute respiratory acidosis, pH roughly 7.25.)

**(d)** Require $(V_T - 150)\times 32 = 5000$ mL/min:

$$V_T - 150 = \frac{5000}{32} = 156.25, \qquad V_T = \mathbf{306\ \text{mL}}$$

$$\dot V_E = 306.25 \times 32 = 9800\ \text{mL/min} = \mathbf{9.8\ \text{L/min}}$$

**A 56 mL increase in tidal volume buys back all the lost ventilation** — because that 56 mL is *entirely* alveolar, arriving on top of a dead space already paid for. But it costs 1.8 L/min of extra air moved (a 22 percent rise in $\dot V_E$), and resistive work scales as $f^2V_T^2$. **The lesson: at a fixed rate, tidal volume is enormously leveraged, because only the amount above $V_D$ counts.**

**P3 (a)** Laplace for a single air–liquid interface, $P = 2T/r$, with $T = 0.024$ N/m:

$$P_{60} = \frac{2(0.024)}{60\times 10^{-6}} = \frac{0.048}{6\times10^{-5}} = 800\ \text{Pa} = \frac{800}{98.1} = \mathbf{8.2\ \text{cm H}_2\text{O}}$$

$$P_{180} = \frac{2(0.024)}{180\times 10^{-6}} = \frac{0.048}{1.8\times10^{-4}} = 267\ \text{Pa} = \mathbf{2.7\ \text{cm H}_2\text{O}}$$

**Air flows from high pressure to low: the small alveolus empties into the large one.** Since emptying makes $r$ smaller, which makes $P$ larger, which drives more emptying, **this is a positive feedback** — the small alveolus does not settle at a smaller size, it collapses completely. (Contrast the negative-feedback loops of [1.1](01-01-homeostasis-feedback-control.md): here the sign is wrong, and the outcome is runaway.)

**(b)** Set $P_{60} = P_{180} = 267$ Pa:

$$\frac{2T_{60}}{60\times10^{-6}} = 267 \;\Longrightarrow\; T_{60} = \frac{267 \times 60\times10^{-6}}{2} = 267 \times 3\times10^{-5} = 8.0\times10^{-3}\ \text{N/m} = \mathbf{8\ \text{mN/m}}$$

$$\frac{T_{60}}{T_{180}} = \frac{8}{24} = \mathbf{\tfrac{1}{3}}$$

**The tension must fall in exact proportion to the radius** — which is just $P = 2T/r$ read backwards: constant $P$ requires $T \propto r$. **That is precisely what a concentration-dependent film delivers**: a shrinking alveolus compresses its fixed quantity of surfactant into less area, raising surface concentration and lowering $T$. **Note what this means: uniform lowering of $T$ would not have helped at all.** Halving both tensions halves both pressures and leaves the ratio — and therefore the direction of flow — exactly as it was.

**(c)** $$P = \frac{2(0.050)}{25\times10^{-6}} = \frac{0.100}{2.5\times10^{-5}} = 4000\ \text{Pa} = \frac{4000}{98.1} = \mathbf{41\ \text{cm H}_2\text{O}}$$

**Four to eight times the transpulmonary pressure of a normal quiet breath**, and it must be generated by a newborn's diaphragm. (This is also why the first breaths of *any* newborn require 40–60 cm H₂O — the fluid-filled lung must be opened once against surface tension — and why resuscitation guidelines specify sustained inflation pressures in that range.)

**Surfactant's two jobs, and which failure causes what:**

| Job | Mechanism | Failure produces |
|---|---|---|
| **Stabilize alveoli of unequal size** | $T$ varies with surface concentration, so $T \propto r$ and $2T/r$ is equalized | **patchy atelectasis** — some regions collapsed, others over-distended, giving the classic ground-glass film and severe ventilation–perfusion mismatch |
| **Reduce total recoil** | $T$ drops from $\sim 70$ to $\sim 10$ mN/m, cutting about two-thirds of the lung's elastic recoil | **exhausting work of breathing** — grunting, retractions, and eventual respiratory muscle fatigue |

**Both failures are present simultaneously, and they compound**: every collapsed alveolus must be re-opened from a small radius on the next breath, so the stability failure keeps re-imposing the maximum possible work penalty. That vicious circle — not either failure alone — is what makes untreated neonatal RDS lethal, and it is why exogenous surfactant instilled into the airway is one of the most dramatic single interventions in medicine.

</details>

## Flashback

**From Lesson 2.3 (hemodynamics and blood pressure regulation):** In a systemic capillary, the Starling forces are: capillary hydrostatic pressure $P_c = 30$ mmHg at the arteriolar end and $14$ mmHg at the venular end; interstitial hydrostatic pressure $P_i = -2$ mmHg; plasma oncotic pressure $\pi_c = 26$ mmHg; interstitial oncotic pressure $\pi_i = 6$ mmHg. Take the reflection coefficient $\sigma = 1$ and the filtration coefficient $K_f = 0.30$ mL/(min·mmHg).

(a) Compute the net filtration pressure at each end and state the direction of fluid movement at each.
(b) This patient develops nephrotic syndrome and loses albumin in the urine; $\pi_c$ falls to 14 mmHg. Recompute both ends.
(c) Taking mean capillary hydrostatic pressure as 22 mmHg, compute net filtration in mL/min before and after, and explain the resulting edema.
(d) Name the analogous pressure that, when raised, floods the *lung* — and say why that connects this lesson to the next one.

<details>
<summary>Solution</summary>

**(a)** The Starling relation is $J_v = K_f\big[(P_c - P_i) - \sigma(\pi_c - \pi_i)\big]$, so the net filtration pressure (NFP) is the bracket.

Hydrostatic difference at the arteriolar end: $P_c - P_i = 30 - (-2) = 32$ mmHg.
Oncotic difference: $\pi_c - \pi_i = 26 - 6 = 20$ mmHg.

$$\text{NFP}_{art} = 32 - 20 = \mathbf{+12\ \text{mmHg}} \quad \Rightarrow \quad \textbf{filtration (out of the capillary)}$$

At the venular end $P_c - P_i = 14 - (-2) = 16$ mmHg:

$$\text{NFP}_{ven} = 16 - 20 = \mathbf{-4\ \text{mmHg}} \quad \Rightarrow \quad \textbf{reabsorption (into the capillary)}$$

**The classic picture: hydrostatic pressure falls along the capillary while oncotic pressure does not, so the balance reverses partway along.**

**(b)** Now $\pi_c - \pi_i = 14 - 6 = 8$ mmHg.

$$\text{NFP}_{art} = 32 - 8 = \mathbf{+24\ \text{mmHg}}, \qquad \text{NFP}_{ven} = 16 - 8 = \mathbf{+8\ \text{mmHg}}$$

**Both positive: filtration along the entire capillary length, with no reabsorbing segment at all.** The oncotic force that used to recover fluid is simply too weak.

**(c)** With mean $P_c = 22$ mmHg, mean hydrostatic difference $= 22 - (-2) = 24$ mmHg.

$$\text{Before: } J_v = 0.30 \times (24 - 20) = 0.30 \times 4 = \mathbf{1.2\ \text{mL/min}}$$
$$\text{After: } J_v = 0.30 \times (24 - 8) = 0.30 \times 16 = \mathbf{4.8\ \text{mL/min}}$$

**A fourfold rise in net filtration** — and note the leverage: a 46 percent fall in $\pi_c$ quadrupled $J_v$, because $J_v$ depends on the small *difference* between two large numbers. Lymphatics can absorb perhaps a two- to threefold increase; beyond that, fluid accumulates in the interstitium as **edema**. (The excess here is $4.8 - 1.2 = 3.6$ mL/min $= 5.2$ L/day of extra filtrate, which is why nephrotic edema is dramatic.)

**(d)** The analogous pressure is **pulmonary capillary hydrostatic pressure**, raised whenever left atrial pressure rises — most commonly in left heart failure, where the failing left ventricle backs up into the pulmonary circulation ([2.2](02-02-cardiac-cycle-and-output.md)).

**Why it connects forward:** the pulmonary circulation normally runs at a mean pressure near 15 mmHg, well below plasma oncotic pressure, so the lung sits far on the reabsorbing side and the alveolar walls stay dry. Push pulmonary capillary pressure above about 25 mmHg and filtration overwhelms the pulmonary lymphatics: fluid enters the interstitium and then the alveoli. **Pulmonary edema attacks this lesson and the next simultaneously** — it stiffens the lung (fluid-filled interstitium, lower compliance, more elastic work, hence the rapid shallow breathing of heart failure) *and* it thickens the barrier that oxygen must diffuse across, which is exactly the quantity Lesson [2.5](02-05-gas-exchange-and-transport.md) puts in the denominator of Fick's law. **One hydrostatic pressure, two failures: mechanical and diffusive.**

</details>

## Connections

- **Backward:** [2.3](02-03-hemodynamics-blood-pressure.md) gave the flow-equals-pressure-over-resistance template and the parallel-network argument for where resistance lives; both transfer verbatim, with air instead of blood. The diaphragm is skeletal muscle running the cross-bridge cycle of [1.6](01-06-muscle-contraction.md), and the runaway emptying of a small alveolus is a positive-feedback loop of the kind [1.1](01-01-homeostasis-feedback-control.md) warned about.
- **Forward:** [2.5](02-05-gas-exchange-and-transport.md) takes $\dot V_A$ from here as the numerator of the alveolar gas equation and as the denominator of ventilation–perfusion ratios — the dead space of this lesson *is* the high-$\dot V/\dot Q$ end of that spectrum. $P_{aCO_2}$, set by alveolar ventilation, is also one of the two levers on blood pH in [3.3](03-03-fluid-electrolyte-acid-base.md), and the ventilatory response to exercise in [4.3](04-03-exercise-integrative-physiology.md) is a controlled increase in $\dot V_A$ through both $V_T$ and $f$.
- **Sideways:** $R \propto L/r^4$ is Poiseuille's law from [fluid-dynamics 3.2](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md), and the $1/(Nr^4)$ combination is parallel resistors from [circuits 1.2](../../circuits/lessons/01-02-ohms-law-equivalent-resistance.md); compliance is capacitance, and lung-plus-chest-wall is two capacitors in series ([circuits 3.1](../../circuits/lessons/03-01-capacitors-and-inductors.md)). Surface tension as an energy per unit area, and films whose tension depends on packing density, are the subject of [biophysics 3.5](../../biophysics/lessons/03-05-membrane-mechanics.md).

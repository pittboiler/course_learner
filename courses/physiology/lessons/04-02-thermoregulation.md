# Human Physiology · Lesson 4.2: Thermoregulation

> ⏱ ~15 min · Module 4: Digestive and integrative physiology · Builds on: [1.1](01-01-homeostasis-feedback-control.md), [2.3](02-03-hemodynamics-blood-pressure.md) · Unlocks: 4.3 (exercise physiology)

## Why this matters

Every homeostatic loop in this course has been qualitative at the edges — you can *say* the baroreflex defends pressure, but writing down the pressure balance in watts is not something anyone does. Temperature is the exception. **The controlled variable obeys an exact conservation law**, so you can write a single equation, put numbers in every term, and predict how long a person has before their core temperature reaches a value that kills them. This is the cleanest quantitative homeostatic loop in physiology.

It also contains the course's best conceptual payoff. [1.1](01-01-homeostasis-feedback-control.md) promised that a controller can defend the *wrong* target and still be working perfectly. Fever is that case, and understanding it correctly changes what you do at the bedside: **the shivering patient with a temperature of 39 °C and the collapsed runner with a temperature of 39 °C need opposite treatments**, and the equation tells you which is which.

## The idea

**First: "body temperature" is a question about which tissue.**

The body is not one temperature. It is a **core** — brain, thoracic and abdominal viscera, deep muscle — held near 37.0 °C, wrapped in a **shell** of skin, subcutaneous fat and superficial muscle whose temperature is free to range from about 20 °C to 37 °C. Only the core is regulated. The shell is the *instrument* of regulation.

**And the shell is not a fixed layer.** It is a variable-conductance insulator whose thickness the body actively controls. In the cold, cutaneous vasoconstriction drives the shell inward until the "core" is little more than the trunk and head; in the heat, the shell thins until warm blood is running almost at the skin surface. **The body's chief insulation is not fat — it is blood flow, and it is adjustable.**

**Second: the core temperature is the balance of a ledger.**

Heat enters from metabolism and leaves by four physical routes: radiation, convection, conduction and evaporation. Whatever does not leave is *stored*, and stored heat is exactly what raises core temperature. This is the first law of thermodynamics applied to a 70 kg bag of water, and nothing more.

**Third — and this is the fact the whole lesson turns on.** Radiation, convection and conduction all move heat down a *temperature* gradient, from skin to environment. **Once the environment is hotter than the skin, all three run backwards and become heat sources.** Evaporation does not: it runs down a *water-vapour-pressure* gradient, and it never reverses (the body cannot condense water onto itself in any ordinary environment).

So above a skin temperature of roughly 35 °C, **evaporation is not the main avenue of heat loss; it is the only one** — and what defeats it is humidity, not temperature. That single asymmetry is why a 33 °C swamp is more dangerous than a 42 °C desert, why the wet-bulb temperature and not the air temperature is the survivability metric, and why every heat-stress catastrophe in history has a humidity number attached to it.

## The formal version

### The heat balance equation

$$\boxed{\;M - W \;=\; R + C + K + E \;\pm\; S\;}$$

*In words: the heat your metabolism makes, minus whatever leaves as useful external work, must either go out through the four physical routes or be stored in your tissue — and stored heat means a rising core temperature.*

Every term is a rate, in watts:

| Symbol | Name | Typical resting value | Sign convention |
|---|---|---|---|
| $M$ | metabolic heat production | 100 W at rest; 1000 W running | always positive |
| $W$ | external mechanical work | 0 at rest; ~120 W cycling hard | positive when doing work on the world |
| $R$ | radiative exchange | 60 W out at rest | **positive = loss**; negative when $T_{\text{amb}} > T_{sk}$ |
| $C$ | convective exchange | 15 W out at rest | **positive = loss**; negative when $T_{\text{air}} > T_{sk}$ |
| $K$ | conductive exchange | 3 W out at rest | **positive = loss**; negative in a hot bath |
| $E$ | evaporative loss | 22 W at rest (insensible) | **positive = loss**, essentially always |
| $S$ | rate of heat storage | 0 at steady state | **positive = body gaining heat** |

**The sign convention is the whole game, so state it once and never waver: $R$, $C$, $K$, $E$ are counted positive when heat leaves the body; $S$ is positive when the body gains heat.** Then $S > 0$ means the core is warming and $S < 0$ means it is cooling.

Note the resting numbers add up: $100 = 60 + 15 + 3 + 22$, with $W = 0$ and $S = 0$. **At rest in a comfortable room, radiation is the dominant route and evaporation is a minor one** — that is exactly the situation the rest of this lesson destroys.

### The dry routes, and why they reverse

Radiation, convection and conduction are all driven by the same thing — a temperature difference — and over the narrow range physiology cares about, all three are close to linear in it. Lump them:

$$R + C + K \;=\; h\,A\,(T_{sk} - T_{\text{amb}})$$

where $A$ is body surface area (about $1.8\ \text{m}^2$ for an adult), $T_{sk}$ is mean skin temperature, and $h$ is a combined heat-transfer coefficient, roughly $7\ \text{W}\,\text{m}^{-2}\,{}^\circ\text{C}^{-1}$ for a nude person in still air, rising to $20$–$25$ when air is moving fast over the skin.

*In words: dry heat loss is proportional to how much hotter your skin is than the room.*

$$\textbf{If } T_{\text{amb}} > T_{sk}, \text{ then } (T_{sk} - T_{\text{amb}}) < 0 \text{ and all three routes deliver heat } \textit{into} \text{ the body.}$$

**The crossover is not at 37 °C. It is at skin temperature, around 35 °C** — and lower than that in a lightly-clad person, because skin sits below core. A 36 °C room is already heating you.

### Evaporation, and the only gradient that matters

$$E \;=\; h_e\,A\,w\,\bigl(P_{sk}^{\text{sat}} - P_{\text{air}}\bigr)$$

$P_{sk}^{\text{sat}}$ is the saturated water-vapour pressure at skin temperature ($5.6\ \text{kPa}$ at 35 °C), $P_{\text{air}}$ is the ambient water-vapour pressure, $w$ is skin wettedness (fraction of skin covered by liquid sweat, 0 to 1), and $h_e \approx 60\ \text{W}\,\text{m}^{-2}\,\text{kPa}^{-1}$ in still air.

*In words: sweating cools you at a rate set by how much drier the air is than your skin, not by how cool it is.*

**This is the sentence to keep.** Air at 35 °C and 100 percent humidity has $P_{\text{air}} = 5.6\ \text{kPa}$, the gradient is exactly zero, and $E = 0$ **no matter how hard you sweat**. Air at 45 °C but 20 percent humidity has $P_{\text{air}} = 0.20 \times 9.6 = 1.9\ \text{kPa}$, a gradient of $3.7\ \text{kPa}$ — vigorous cooling in the *hotter* room. This is also why the survivability limit is quoted as a **wet-bulb temperature** of about 35 °C: the wet-bulb temperature is by definition the temperature a perfectly wet surface settles at, so skin cannot get below it, and above 35 °C wet-bulb no amount of sweating can hold a core of 37 °C (this is the same simultaneous heat-and-mass-transfer problem as [transport-phenomena 5.3](../../transport-phenomena/lessons/05-03-simultaneous-heat-mass-transfer.md)).

**Converting evaporation to a sweat rate.** Sweat is essentially water, and vaporizing it costs a latent heat of

$$\lambda \approx 2.43\ \text{kJ/g} \qquad\text{so}\qquad \dot m_{\text{sweat}} = \frac{E}{\lambda}.$$

**Sweat that drips removes no heat.** The latent heat is paid at the moment of the phase change, so a drop that rolls off your chin has cost you water and salt and bought you nothing ([thermodynamics-physics 3.3](../../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md) is where the latent heat itself comes from). The rate in the equation is the **evaporated** rate; in humid air, where the skin is fully wet and dripping, secreted sweat can be 1.5–2 times the evaporated sweat, so the fluid cost is worse precisely when the cooling benefit is least.

### Storage, and how fast a core temperature moves

$$S \;=\; m\,c\,\frac{dT_{\text{core}}}{dt}, \qquad c \approx 3.47\ \text{kJ}\,\text{kg}^{-1}\,{}^\circ\text{C}^{-1}$$

*In words: unbalanced heat raises core temperature at a rate set by body mass times the specific heat of tissue.*

For a 70 kg person, $mc = 243\ \text{kJ}/{}^\circ\text{C}$. **So 243 W of unbalanced heat raises the core by exactly 1 °C per 1000 s, about 17 minutes.** That single anchor lets you convert any imbalance into a clock.

### The controller

**Sensor.** Thermosensitive neurons in the **preoptic area** of the anterior hypothalamus fire in proportion to their own local (core) temperature — warm-sensitive neurons dominate. They receive, in addition, thermoreceptor input from skin (TRPM8 for cold, TRPV1 for warmth), spinal cord and abdominal viscera.

**The integration is a weighted sum, and the weights are the interesting part:**

$$\text{effector drive} \;\propto\; \alpha\,(T_{\text{core}} - T_{\text{set}}) \;+\; \beta\,(T_{sk} - T_{sk,\text{ref}}), \qquad \alpha \gg \beta$$

*In words: the controller mostly watches the core, but it also watches the skin.*

**The skin term is feedforward, and it is the callback [1.1](01-01-homeostasis-feedback-control.md) promised.** Skin temperature is not the regulated variable; it is a *measurement of the disturbance*. Step outside into cold air and you vasoconstrict and shiver within seconds — long before any heat has actually left your core. A pure negative-feedback controller could not do that; it would have to wait for an error to appear. **The body pre-empts the error instead of correcting it**, which is why you can stand in a blizzard for minutes with a core temperature that has not moved at all.

### The effectors, in order of what they cost

| Rank | Effector | Metabolic cost | Range |
|---|---|---|---|
| 1 | **Vasomotor** — skin blood flow | ~zero | under 50 mL/min to 7–8 L/min |
| 2 | **Sweating** | water and salt | 0 to ~1.5 L/hr (2–3 acclimatized) |
| 3 | **Shivering** | 2–5× resting metabolism | fuel-limited, fatigues |
| 4 | **Non-shivering thermogenesis** | fuel, plus slow to engage | brown fat, thyroid-set gain |
| 5 | **Behaviour** | ~zero, and unbounded | the largest of all |

**Vasomotor control is first because it is free**, and it is also the coupling that makes the core–shell distinction physical. Heat gets from core to skin mainly by **convection in blood**:

$$\dot Q_{\text{blood}} \;=\; \dot V \,\rho\, c_b \,(T_{\text{core}} - T_{sk}), \qquad \rho c_b \approx 4.08\ \text{kJ}\,\text{L}^{-1}\,{}^\circ\text{C}^{-1}$$

With a 2 °C core-to-skin drop, **each litre per minute of skin blood flow carries about 136 W to the surface** — so the 7 L/min a heat-stressed person can push through skin is worth roughly 950 W of heat transport. That flow is set by exactly the arteriolar resistance mechanism of [2.3](02-03-hemodynamics-blood-pressure.md): sympathetic adrenergic vasoconstrictor tone (the only control in acral skin — hands, feet, ears, nose, which are dense with arteriovenous anastomoses) plus, in the rest of the skin, an **active vasodilator** system released together with sweating. Note the consequence for 4.3: **skin at maximal vasodilation demands a flow comparable to the entire resting cardiac output**, and it takes it from somewhere.

**Sweating** is next, and it comes with a curiosity worth remembering from [1.5](01-05-neuromuscular-autonomic-transmission.md): eccrine sweat glands are **sympathetic but cholinergic**, the textbook exception to the sympathetic-equals-noradrenaline rule.

**Shivering** is skeletal muscle contracting antagonistically so that all the work degrades to heat — the $W$ term deliberately set to zero so that $M$ is entirely heat. **Non-shivering thermogenesis** is brown adipose tissue, where **UCP1** short-circuits the proton gradient across the inner mitochondrial membrane so that substrate oxidation runs without making ATP ([general-biology 2.2](../../general-biology/lessons/02-02-cellular-respiration.md)); it is driven by sympathetic noradrenaline on β₃ receptors, and its long-run *gain* is set by thyroid hormone through the HPT axis of [3.4](03-04-endocrine-axes.md) — chronic cold raises TRH, TSH and T₃, and T₃ raises basal metabolic rate over weeks.

**Behaviour is the most powerful effector, and physiology courses omit it.** Clothing, shelter, posture, shade, moving into the wind, a fan, a glass of ice water — humans defend core temperature across a 100 °C span of environments almost entirely behaviourally. Every autonomic effector above is a fallback for when behaviour has already failed.

### Countercurrent heat exchange — the same trick as the vasa recta

Deep limb arteries run flanked by paired veins (*venae comitantes*). Warm arterial blood heading for the hand hands its heat across to the cold venous blood coming back, so **heat short-circuits back to the core instead of being carried out to the skin**. Arterial blood can reach the fingers 10–20 °C below core temperature, and the limb becomes a long, cheap insulator.

**This is geometrically identical to the [vasa recta](03-02-tubular-transport-concentrating-urine.md) of the renal medulla** — antiparallel flow in adjacent tubes, so that what diffuses out of one is picked up by the other and never leaves the system. There it conserved a *solute* gradient; here it conserves *heat*. Same trick, different conserved quantity — and worth noticing that evolution found this geometry twice.

**And it is switchable.** In the heat, venous return is shunted to the *superficial* veins, bypassing the exchanger entirely, and the limb turns from an insulator into a radiator. The prominent veins on a hot person's forearm are that switch, visible.

### Fever is a raised set point, not failed regulation

Bacterial products (LPS) trigger macrophage release of IL-1, IL-6 and TNF-α, which cause **prostaglandin E₂** production at the hypothalamus. PGE₂ acts on the preoptic area and **raises $T_{\text{set}}$** — from 37.0 to, say, 39.0 °C.

**Everything that follows is a normal controller doing its job at a new target:**

- **The rising phase.** Core is 37, set point is 39, so the error says *too cold*. The person **feels cold, vasoconstricts, shivers, wraps up in blankets** — while their temperature climbs. This is the diagnostic observation. A person whose regulation had *failed* would not be actively generating heat.
- **The plateau.** Core reaches 39, error is zero, shivering stops, the person feels neither hot nor cold at a temperature that would be an emergency in anyone else.
- **The crisis.** Pyrogen clears, $T_{\text{set}}$ drops back to 37, and now core is 2 °C *too high*: sudden flushing, vasodilation and drenching sweat.

**And this is why antipyretics and ice packs are not two versions of the same idea.** Ibuprofen and aspirin inhibit cyclo-oxygenase, block PGE₂, and **lower the set point** — after which the patient's own vasodilation and sweating do the cooling. An ice pack **fights the controller**: it cools skin, the skin thermoreceptors report cold into the feedforward term, and a controller still defending 39 °C responds by shivering harder and vasoconstricting further, *raising* heat production while the patient is made miserable.

**Hyperthermia is the opposite situation and is not a fever at all.** In exertional heat illness and heat stroke the set point is normal at 37; the controller is at maximum output — maximally vasodilated, sweating at capacity — and the environment plus metabolism have simply out-run it. $S > 0$ because $E$ has hit a ceiling. **Here external cooling is exactly right and is the treatment**, and antipyretics are useless, because there is no raised set point to lower. Above roughly 40 °C the cellular damage begins (protein denaturation, gut barrier failure, a systemic inflammatory cascade), and the mortality curve is steep, so minutes matter.

### Acclimatization, and why size and shape matter

Ten to fourteen days of heat exposure produce three changes:

1. **Earlier onset** — sweating starts at a lower core temperature, so the defence begins before much heat is stored.
2. **Higher maximal rate** — up to 2–3 L/hr instead of 1–1.5.
3. **More dilute sweat** — aldosterone upregulates ENaC-mediated Na⁺ reabsorption in the sweat duct, dropping sweat $[\text{Na}^+]$ from ~60 to as low as 10–20 mmol/L.

(Plasma volume also expands by 10–12 percent in the first few days, which is the cardiovascular half of the adaptation and shows up again in 4.3.)

**The third change has a sting in it, and it belongs to [3.3](03-03-fluid-electrolyte-acid-base.md).** Conserving salt is good — it defends extracellular volume. But it means the acclimatized athlete is losing predominantly *free water*, so replacing large sweat losses with plain water dilutes the remaining sodium. Exercise-associated hyponatremia is a disease of the well-acclimatized and well-hydrating.

**Finally, geometry.** Heat production scales roughly with mass ($\propto M^{3/4}$ by Kleiber's law) while heat *loss* scales with surface area ($\propto M^{2/3}$), so heat produced per unit of skin scales as $M^{3/4 - 2/3} = M^{1/12}$. **Big bodies are heat-retention machines; small ones are heat-loss machines**, and shape modulates this at fixed mass — a tall, linear build maximizes area for a given volume, a short, stocky one minimizes it. This is Bergmann's and Allen's rules, and it is the reason a chihuahua shivers in a room where a mastiff pants.

## Picture

![Panel a is a stacked area plot of heat exchange in watts against ambient temperature from 20 to 44 degrees Celsius, at a fixed metabolic heat production of 100 watts. Radiation, convection and conduction fill most of the area at low ambient temperature and shrink steadily as the room warms, reaching zero at a skin temperature of 35 degrees, marked with a dashed crossover line, and going negative beyond it so that all three routes deliver heat into the body. Evaporation grows to fill the whole 100 watt requirement at the crossover and then rises above 200 watts to offset the reversed dry routes. Panel b is a heat balance diagram of a cyclist in a 30 degree room, with one thick arrow of 480 watts of metabolic heat entering the body and four arrows leaving, sized by the square root of their magnitude: radiation 29 watts, convection 75 watts, conduction 5 watts, and evaporation 371 watts, equal to 550 grams of sweat per hour, with storage zero so the core holds at 37 degrees.](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — reading the equation forwards and backwards).** A nude resting adult: $A = 1.8\ \text{m}^2$, $M = 100$ W, $W = 0$, mean skin temperature $T_{sk} = 33\ ^\circ\text{C}$, combined dry coefficient $h = 7.0\ \text{W}\,\text{m}^{-2}\,{}^\circ\text{C}^{-1}$ in still air, insensible evaporation 24 W. (a) At what ambient temperature does the balance close with no sweating and no shivering? (b) Now put the same person in a 39 °C room, where skin has risen to 35 °C. Compute the dry exchange and the required sweat rate.

**(a)** With $S = 0$ and $E$ fixed at its insensible value, the dry routes must carry the rest:

$$R + C + K = M - W - E = 100 - 0 - 24 = 76\ \text{W}.$$

$$hA(T_{sk} - T_{\text{amb}}) = 76 \;\Longrightarrow\; T_{sk} - T_{\text{amb}} = \frac{76}{7.0 \times 1.8} = \frac{76}{12.6} = 6.03\ ^\circ\text{C}$$

$$T_{\text{amb}} = 33 - 6.0 = \mathbf{27\ ^\circ\text{C}}.$$

**This is the thermoneutral zone**, and the number should surprise you: a naked adult is thermally neutral at about 27–28 °C, not at "room temperature." Everything cooler than that is defended by clothing and behaviour, which is why you can sit comfortably at 21 °C in a shirt.

**(b)** $$R + C + K = 7.0 \times 1.8 \times (35 - 39) = 12.6 \times (-4) = \mathbf{-50.4\ \text{W}}.$$

Negative, so the sign convention is telling you the truth: this is a **gain of 50.4 W**. The room is heating the person. Rearranging the balance for $E$ with $S = 0$:

$$E = M - W - (R+C+K) = 100 - 0 - (-50.4) = \mathbf{150.4\ \text{W}}.$$

$$\dot m_{\text{sweat}} = \frac{150.4\ \text{J/s}}{2430\ \text{J/g}} = 0.0619\ \text{g/s} = \mathbf{223\ \text{g/hr}} \approx 0.22\ \text{L/hr}.$$

**Sitting perfectly still in a hot room costs a fifth of a litre of water per hour** — six times the insensible loss of part (a) — and every gram of it must actually evaporate.

**Example 2 (why you'd care — a runner, and a clock).** A 70 kg runner: $A = 1.8\ \text{m}^2$, metabolic rate $M = 950$ W, external work $W \approx 0$ (level running does no net work on the world — all of it degrades to heat), $T_{sk} = 35\ ^\circ\text{C}$. Air and surroundings at 34 °C. Running at 4 m/s makes convection forced, so $h_c = 8.3\,v^{0.6} = 8.3 \times 2.30 = 19.1$, and with $h_r \approx 3.2$, the combined $h = 22.3\ \text{W}\,\text{m}^{-2}\,{}^\circ\text{C}^{-1}$.

**(a) Dry exchange.** $$R + C + K = 22.3 \times 1.8 \times (35 - 34) = \mathbf{40\ \text{W}}\ \text{out}.$$

Note what the wind bought him: a coefficient three times the still-air value, applied to a temperature difference of one degree. **In a hot environment, the fan is nearly worthless for dry cooling** — it works almost entirely by raising $h_e$ and drying the skin.

**(b) Required evaporation.** $$E = 950 - 0 - 40 = \mathbf{910\ \text{W}}, \qquad \dot m = \frac{910}{2430} = 0.374\ \text{g/s} = \mathbf{1.35\ \text{L/hr}}.$$

That is at the ceiling of an unacclimatized sweat rate, and it assumes **every drop evaporates**. If a quarter of it drips, he must *secrete* 1.8 L/hr to deliver 1.35 L/hr of cooling.

**(c) The circulation this demands.** To move 910 W from core to skin at a 2 °C gradient:

$$\dot V = \frac{910}{4.08 \times 10^{3} \times 2} = 0.112\ \text{L/s} = \mathbf{6.7\ \text{L/min of skin blood flow}}.$$

**That is more than a resting cardiac output, routed to skin, while working muscle is also demanding 15–20 L/min.** The competition between those two claims is the entire story of [4.3](04-03-exercise-integrative-physiology.md).

**(d) Now make it humid.** Suppose the vapour-pressure gradient caps evaporation at 600 W:

$$S = M - W - (R+C+K) - E = 950 - 0 - 40 - 600 = \mathbf{310\ \text{W}}.$$

$$mc = 70 \times 3.47 = 243\ \text{kJ}/{}^\circ\text{C} \;\Longrightarrow\; \frac{dT}{dt} = \frac{310}{243{,}000} = 1.28\times10^{-3}\ {}^\circ\text{C/s} = \mathbf{4.6\ ^\circ\text{C/hr}}.$$

From a running core of 37.5 °C to a dangerous 40.0 °C:

$$t = \frac{2.5}{1.28\times10^{-3}} = 1960\ \text{s} = \mathbf{33\ \text{minutes}}.$$

**Half an hour.** The environment did not change temperature — only its humidity — and the runner has half an hour. Nothing about $M$, $R$, $C$ or $K$ moved; a single term hit a ceiling.

## Watch out

- **You might think the dry routes reverse at 37 °C.** They reverse at **skin** temperature, around 33–35 °C. A 36 °C day is already a net heat *source* through radiation and convection, even though it is below core temperature.
- **You might think a hot day is more dangerous than a warm one.** What kills is the *wet-bulb* temperature. A 42 °C desert at 15 percent humidity has more than twice the heat-dumping capacity of a 32 °C swamp at 95 percent (P2 computes both). Evaporation does not care how hot the air is; it cares how dry.
- **You might count secreted sweat as cooling.** Only **evaporated** sweat carries the 2.43 kJ/g. Sweat that drips off costs you water and salt and buys nothing — and dripping is worst exactly when humidity is high, so the fluid cost and the cooling failure arrive together.
- **You might treat a fever as a regulation failure.** It is a controller defending a *higher* set point, and the shivering during the rise proves it. That is why antipyretics (which lower the set point) work, and why ice packs — which fight the controller through its own skin sensors — do not. **Hyperthermia is the genuine failure**, and there external cooling is the treatment.
- **You might think fat is the body's main insulation.** Subcutaneous fat is fixed; **skin blood flow varies over more than a hundredfold**, and it is the adjustable term. That is why vasomotor control is the first effector recruited in both directions.
- **You might read $S$ as a small correction.** For a 70 kg person, $mc = 243\ \text{kJ}/{}^\circ\text{C}$, so a modest 243 W imbalance moves the core 1 °C every 17 minutes. Storage is the fastest-acting term in the equation.

## One-liner

> $M - W = R + C + K + E \pm S$, and above skin temperature the first three routes run backwards — so evaporation becomes the only exit, humidity rather than heat is what closes it, and a fever is not that equation failing but the same controller defending a set point someone moved.

## Problems

**P1 (🟢)** A 75 kg person rests in a sealed room at 36 °C with air fully saturated (100 percent relative humidity). Metabolic heat $M = 105$ W, $W = 0$, $T_{sk} = 35\ ^\circ\text{C}$, $A = 1.8\ \text{m}^2$, $h = 7.0\ \text{W}\,\text{m}^{-2}\,{}^\circ\text{C}^{-1}$, tissue specific heat $c = 3.47\ \text{kJ}\,\text{kg}^{-1}\,{}^\circ\text{C}^{-1}$.
(a) Compute the dry exchange $R + C + K$ with its sign and say which way heat flows.
(b) Justify $E = 0$, then compute the storage rate $S$.
(c) How fast does core temperature rise, in °C per hour, and how long from 37.0 to 39.0 °C?

**P2 (🟡)** A resting person with $T_{sk} = 35\ ^\circ\text{C}$ (saturated vapour pressure at the skin $5.6$ kPa), $A = 1.8\ \text{m}^2$, dry coefficient $h = 7.0\ \text{W}\,\text{m}^{-2}\,{}^\circ\text{C}^{-1}$, evaporative coefficient $h_e = 60\ \text{W}\,\text{m}^{-2}\,\text{kPa}^{-1}$, skin fully wet ($w = 1$). Compare two environments:

| | $T_{\text{amb}}$ | relative humidity | saturated vapour pressure at $T_{\text{amb}}$ |
|---|---|---|---|
| **A** — desert | 42 °C | 15 percent | 8.2 kPa |
| **B** — swamp | 32 °C | 95 percent | 4.8 kPa |

(a) Compute $R + C + K$ in each, with sign.
(b) Compute the maximum evaporative loss $E_{\max}$ in each.
(c) Compute the total heat-dissipating capacity in each, and state the metabolic heat production above which each becomes untenable. Which environment is more dangerous, and why is the answer not the hotter one?

**P3 (🔴, bridges to 4.3 and to clinical practice)** Two 68 kg men both reach a core temperature of 39.0 °C. Use $c = 3.47\ \text{kJ}\,\text{kg}^{-1}\,{}^\circ\text{C}^{-1}$.
(a) Man 1 has influenza; PGE₂ has moved his set point from 37.0 to 39.0 °C. He shivers and vasoconstricts, giving a net storage rate of 90 W. How long does he take to reach the new set point?
(b) Man 2 is running: metabolic heat 780 W, external work negligible, dry exchange a **gain** of 40 W, evaporation capped at 520 W by humidity. Compute $S$, and the time from a core of 37.2 °C to 40.0 °C.
(c) One is given ibuprofen; one is packed in ice. Assign the treatments, and explain in controller language why swapping them is a mistake in *both* directions.

<details>
<summary>Solutions</summary>

**P1 (a)** $$R + C + K = hA(T_{sk} - T_{\text{amb}}) = 7.0 \times 1.8 \times (35 - 36) = 12.6 \times (-1) = \mathbf{-12.6\ \text{W}}.$$

Negative under our convention (positive = loss), so this is a **gain of 12.6 W**: heat flows *into* the body from the room, because the air is one degree above skin temperature.

**(b)** Saturated air at 36 °C has a water-vapour pressure at least as high as the saturated pressure at the skin's 35 °C, so

$$P_{sk}^{\text{sat}} - P_{\text{air}} \le 0 \;\Longrightarrow\; E = 0.$$

**No vapour-pressure gradient, no evaporation — however much the person sweats.** Then

$$S = M - W - (R+C+K) - E = 105 - 0 - (-12.6) - 0 = \mathbf{117.6\ \text{W}}.$$

**(c)** $$mc = 75 \times 3.47 = 260.25\ \text{kJ}/{}^\circ\text{C} = 260{,}250\ \text{J}/{}^\circ\text{C}$$

$$\frac{dT}{dt} = \frac{117.6}{260{,}250} = 4.52\times10^{-4}\ {}^\circ\text{C/s} = \mathbf{1.63\ ^\circ\text{C/hr}}.$$

$$t = \frac{2.0\ ^\circ\text{C}}{1.63\ ^\circ\text{C/hr}} = \mathbf{1.23\ \text{hr} = 74\ \text{minutes}}.$$

**The point of the problem: a person doing nothing, in a room only one degree above skin temperature, is on a fixed schedule to hyperthermia.** No heat-loss route is available at all, so the entire resting metabolic rate goes into storage. This is why 100 percent humidity at 36 °C — a wet-bulb temperature of 36 °C — is lethal regardless of fitness, hydration or acclimatization.

**P2 (a)** $$\textbf{A}: \; 7.0 \times 1.8 \times (35 - 42) = 12.6 \times (-7) = \mathbf{-88.2\ \text{W}} \quad \text{(a gain of 88 W)}$$

$$\textbf{B}: \; 7.0 \times 1.8 \times (35 - 32) = 12.6 \times (+3) = \mathbf{+37.8\ \text{W}} \quad \text{(a genuine loss)}$$

So far the swamp looks better: it is the only one of the two still taking heat away by the dry routes.

**(b)** Ambient vapour pressures first:

$$\textbf{A}: \; P_{\text{air}} = 0.15 \times 8.2 = 1.23\ \text{kPa} \;\Longrightarrow\; \Delta P = 5.6 - 1.23 = 4.37\ \text{kPa}$$

$$\textbf{B}: \; P_{\text{air}} = 0.95 \times 4.8 = 4.56\ \text{kPa} \;\Longrightarrow\; \Delta P = 5.6 - 4.56 = 1.04\ \text{kPa}$$

$$E_{\max} = h_e A w \,\Delta P = 60 \times 1.8 \times 1 \times \Delta P = 108\,\Delta P$$

$$\textbf{A}: \; 108 \times 4.37 = \mathbf{472\ \text{W}} \qquad\qquad \textbf{B}: \; 108 \times 1.04 = \mathbf{112\ \text{W}}$$

**(c)** Total capacity is evaporation plus (or minus) the dry term:

| | dry | $E_{\max}$ | total capacity |
|---|---|---|---|
| **A** — 42 °C desert | $-88$ W | $+472$ W | $\mathbf{384\ \text{W}}$ |
| **B** — 32 °C swamp | $+38$ W | $+112$ W | $\mathbf{150\ \text{W}}$ |

**The swamp, ten degrees cooler, has 39 percent of the desert's heat-dumping capacity.**

Untenability thresholds — the metabolic heat production above which $S > 0$ and core temperature must rise:

- **A:** anything above about **384 W**. Resting (100 W) is trivially safe; a brisk walk (~350 W) is marginal; jogging (~700 W) is not survivable indefinitely.
- **B:** anything above about **150 W**. That is barely above resting metabolism. **Light housework will overheat you in this environment**, and there is no behaviour short of leaving that fixes it.

**Why the answer is not the hotter one:** the dry term is linear in a temperature difference of a few degrees and is worth tens of watts either way. The evaporative term is proportional to a vapour-pressure difference and is worth *hundreds*. The desert's 88 W dry penalty is trivial next to the 360 W of evaporative capacity it buys by being dry. **Once you are above skin temperature, the only number that matters is the vapour-pressure gradient**, and that is set by humidity — which is why heat-wave mortality tracks wet-bulb temperature and not the headline number on the thermometer.

**P3 (a)** $$mc = 68 \times 3.47 = 235.96\ \text{kJ}/{}^\circ\text{C} = 235{,}960\ \text{J}/{}^\circ\text{C}$$

$$\text{heat needed} = 235{,}960 \times 2.0 = 471{,}920\ \text{J}$$

$$t = \frac{471{,}920}{90} = 5244\ \text{s} = \mathbf{87\ \text{minutes}}.$$

About an hour and a half of feeling cold, shivering and piling on blankets — **while his temperature climbs**. The subjective cold and the rising thermometer are not a contradiction; they are the signature of a controller chasing a target above its current state.

**(b)** $$S = M - W - (R+C+K) - E = 780 - 0 - (-40) - 520 = 780 + 40 - 520 = \mathbf{300\ \text{W}}.$$

(The dry term is a *gain*, so it enters as $-40$ and adds to storage.)

$$\Delta T = 40.0 - 37.2 = 2.8\ ^\circ\text{C} \;\Longrightarrow\; \text{heat} = 235{,}960 \times 2.8 = 660{,}690\ \text{J}$$

$$t = \frac{660{,}690}{300} = 2202\ \text{s} = \mathbf{37\ \text{minutes}}.$$

**(c) Man 1 (fever) gets the ibuprofen. Man 2 (exertional hyperthermia) gets the ice.**

**Why ibuprofen for man 1:** it inhibits cyclo-oxygenase, blocking hypothalamic PGE₂ synthesis, which **lowers $T_{\text{set}}$ back toward 37**. The moment the set point falls, his own core of 39 becomes a positive error, and his intact controller does the cooling itself — vasodilation and sweating. You are not removing heat; **you are moving the target and letting the loop close.**

**Why ice for man 2:** his set point was never raised. His controller is already at maximum output — maximally vasodilated, sweating at its ceiling — and it is losing on capacity, not on target. **The only remaining lever is the environment**, so rapid external cooling (ice-water immersion is the fastest) is the treatment, and it is time-critical: at 300 W of storage he gains a degree every 13 minutes, and the damage threshold is a few degrees away.

**Why swapping fails in both directions:**

- **Ice on man 1** cools skin, his skin thermoreceptors feed cold into the $\beta(T_{sk} - T_{sk,\text{ref}})$ feedforward term, and a controller still defending 39 °C responds correctly by **shivering harder and vasoconstricting further**. Heat production goes up, skin conductance goes down, core temperature is defended, and the patient is made wretched. **You have picked a fight with a working controller and it has more effectors than you do.**
- **Ibuprofen on man 2** lowers a set point that was never raised. The error signal was already saturating every effector; making the target notionally lower changes nothing about a controller already at full output, removes no heat, and costs 37 minutes he does not have. (Worse in practice: hepatic and renal injury are common in heat stroke, and NSAIDs are nephrotoxic.)

**The generalizable lesson, and the reason [1.1](01-01-homeostasis-feedback-control.md) set this up:** before you intervene in a homeostatic loop, decide whether the *set point* moved or the *effectors* failed. Those are different diagnoses with opposite treatments, and the same thermometer reading is consistent with both. The distinguishing observation is free: **ask which way the effectors are pointing.** Man 1 is shivering — his body is *adding* heat, so it thinks it is too cold, so the target must be above him. Man 2 is drenched and flushed — his body is dumping everything it can, and losing.

</details>

## Flashback

**From Lesson 3.3 (fluid, electrolyte and acid–base balance):** A 60 kg woman sweats 2.4 L over an afternoon and drinks nothing. Take total body water as 50 percent of body mass, split two-thirds intracellular and one-third extracellular; baseline plasma osmolality 285 mOsm/kg; sweat $[\text{Na}^+] = 40$ mmol/L, so with its accompanying anion the sweat has an effective osmolality of about 80 mOsm/kg. Treat 1 L of body water as 1 kg.

(a) Give her compartment volumes before the loss.
(b) Compute the new osmolality and the new ICF and ECF volumes, and say how the 2.4 L deficit is split between the compartments.
(c) She then drinks 2.4 L of plain water. Compute the resulting osmolality and name the risk if she over-drinks — including the hormonal reason her body will not simply excrete the excess.

<details>
<summary>Solution</summary>

**(a)** $$\text{TBW} = 0.50 \times 60 = 30\ \text{L}, \qquad \text{ICF} = \tfrac{2}{3}(30) = \mathbf{20\ \text{L}}, \qquad \text{ECF} = \tfrac{1}{3}(30) = \mathbf{10\ \text{L}}.$$

Total body osmoles: $30 \times 285 = 8550$ mOsm, of which $20 \times 285 = 5700$ mOsm are intracellular.

**(b)** Osmoles lost in the sweat:

$$2.4\ \text{L} \times 80\ \text{mOsm/L} = 192\ \text{mOsm}$$

$$\text{TBW}' = 30 - 2.4 = 27.6\ \text{L}, \qquad \text{osmoles}' = 8550 - 192 = 8358\ \text{mOsm}$$

$$\text{osmolality}' = \frac{8358}{27.6} = \mathbf{302.8\ \text{mOsm/kg}}$$

**She lost hypotonic fluid, so she is left more concentrated** — 285 up to 303.

Cell membranes are freely water-permeable, so ICF and ECF equilibrate to the same osmolality, and **the ICF's 5700 mOsm are unchanged** (sweat is lost from the extracellular space; no solute left the cells):

$$\text{ICF}' = \frac{5700}{302.8} = \mathbf{18.82\ \text{L}} \qquad \text{ECF}' = 27.6 - 18.82 = \mathbf{8.78\ \text{L}}$$

| | before | after | change |
|---|---|---|---|
| ICF | 20.00 L | 18.82 L | $-1.18$ L |
| ECF | 10.00 L | 8.78 L | $-1.22$ L |
| TBW | 30.00 L | 27.60 L | $-2.40$ L |

**Roughly half the loss came out of the cells**, pulled there osmotically after the sweat was drawn from the extracellular space. That is the signature of a hypotonic loss: it is shared between compartments. (A loss of *isotonic* fluid — haemorrhage, say — would have come entirely from the ECF, because it raises no osmotic gradient.)

**(c)** Drinking 2.4 L of plain water restores the volume but replaces none of the 192 mOsm of lost solute:

$$\text{osmolality}'' = \frac{8358}{30.0} = \mathbf{278.6\ \text{mOsm/kg}}$$

**She is now hypo-osmolar relative to her own baseline of 285**, having drunk exactly what she lost. Drink *more* than the loss and it falls further: this is **exercise-associated hyponatremia**, and it is a real cause of collapse and death in endurance events, distinct from and often mistaken for dehydration.

**Why her kidney will not just excrete the excess:** volume depletion is a **non-osmotic stimulus to ADH**, sensed by arterial baroreceptors and low-pressure atrial receptors, and it *overrides* the osmotic suppression that low osmolality would normally produce. So at exactly the moment she should be making dilute urine, she is retaining water — and the free water lands disproportionately in cells, which is why the dangerous symptom is cerebral oedema rather than anything cardiovascular. RAAS and aldosterone are simultaneously driving Na⁺ retention at the distal nephron (and, per this lesson, at the sweat duct), which limits the damage but does not prevent it.

**The practical rule this justifies: replace large sweat losses with a solution containing sodium, not with plain water** — the more so for the acclimatized athlete, whose sweat is the most dilute and whose losses are therefore the most nearly pure water.

</details>

## Connections

- **Backward:** this is [1.1](01-01-homeostasis-feedback-control.md)'s sensor–controller–effector loop with every term in watts, and it delivers on that lesson's promise about set points — fever is the set point moving, not the loop failing. The skin-temperature term is its **feedforward** channel. Skin blood flow is the arteriolar resistance control of [2.3](02-03-hemodynamics-blood-pressure.md) applied to heat rather than to pressure; countercurrent heat exchange in the limbs is the [vasa recta geometry](03-02-tubular-transport-concentrating-urine.md) of 3.2 conserving heat instead of solute; sweat's salt content and its consequences belong to [3.3](03-03-fluid-electrolyte-acid-base.md); the thyroid's setting of thermogenic gain is the HPT axis of [3.4](03-04-endocrine-axes.md); and the sympathetic-but-cholinergic sweat gland is the exception noted in [1.5](01-05-neuromuscular-autonomic-transmission.md).
- **Forward:** [4.3](04-03-exercise-integrative-physiology.md) is this lesson's heat balance colliding with a muscle blood-flow demand — cardiovascular drift is what happens when 6–7 L/min of skin flow and 15–20 L/min of muscle flow bid for the same cardiac output while plasma volume is draining into sweat.
- **Sideways:** the four routes are the three transport mechanisms of [transport-phenomena 1.3](../../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md) plus a phase change; still-air heat loss from a warm body is the textbook free-convection problem of [transport-phenomena 3.5](../../transport-phenomena/lessons/03-05-free-natural-convection.md); the wet-bulb limit is exactly the coupled heat-and-mass-transfer analysis of [transport-phenomena 5.3](../../transport-phenomena/lessons/05-03-simultaneous-heat-mass-transfer.md); the 2.43 kJ/g comes from the vapour-pressure curve of [thermodynamics-physics 3.3](../../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md); and the set point, the feedforward term and the distinction between a moved target and a saturated actuator are standard vocabulary in [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md).

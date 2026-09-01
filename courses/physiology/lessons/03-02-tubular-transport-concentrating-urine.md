# Human Physiology · Lesson 3.2: Tubular transport and concentrating the urine

> ⏱ ~15 min · Module 3: Renal and endocrine regulation · Builds on: [3.1](03-01-glomerular-filtration-clearance.md), [1.2](01-02-membrane-transport.md) · Unlocks: 3.3 (fluid, electrolyte and acid–base balance)

## Why this matters

[3.1](03-01-glomerular-filtration-clearance.md) established the kidney's opening move: shove 180 litres of plasma through a sieve every day and keep essentially nothing back except cells and protein. That is an absurd way to run an organ. **Filtration throws away roughly 1.5 kilograms of salt and 180 litres of water a day, and the tubule has to put almost all of it back** — which means the interesting physiology is not filtration at all, it is the reclamation.

Two payoffs. First, this is where [1.2](01-02-membrane-transport.md)'s abstractions become numbers you can measure in a patient: the carrier-saturation curve turns into the renal glucose threshold, and the $\text{Na}^+/\text{K}^+$-ATPase turns into the fact that the kidney is 0.5 percent of your mass and burns 7–10 percent of your resting oxygen.

Second, the kidney contains one genuinely clever mechanism — not a bigger pump or a better membrane, but a *geometry*. **The loop of Henle takes a pump that can only ever produce a 200 mOsm/kg difference and multiplies it into a 1200 mOsm/kg gradient**, using nothing but the shape of the tube. That trick is what lets a land animal drink less water than it excretes solute, and it is the reason you are not confined to a riverbank.

## The idea

**The tubule is organized as bulk-then-fine, and the split is architectural.**

- The **proximal tubule** is the bulk reabsorber. It takes back about two-thirds of the filtered water and sodium, plus *all* of the glucose and amino acids, and it does so **isosmotically** — water follows solute so closely that the fluid leaving it has essentially the same osmolality it came in with. **Much less fluid, same concentration.** Nothing is regulated here; it is a warehouse clearing a loading dock.
- The **loop of Henle** does something the proximal tubule cannot: it separates water from solute, building a salty medulla.
- The **distal tubule and collecting duct** are the regulated segment. They handle the last few percent, under hormonal control, and that last few percent is the entire dynamic range of renal output.

**Everything runs on one engine.** The $\text{Na}^+/\text{K}^+$-ATPase sits on the **basolateral** membrane (the blood side) of every tubule cell, pumping 3 $\text{Na}^+$ out for 2 $\text{K}^+$ in per ATP. It keeps intracellular $\text{Na}^+$ around 10–15 mmol/L against 140 mmol/L outside. **Every apical transporter is a way of spending that gradient** — SGLT for glucose, $\text{Na}^+/\text{H}^+$ exchange for acid secretion, cotransporters for amino acids and phosphate. Block the pump and every one of them stops, which is why a single enzyme accounts for most of the kidney's oxygen bill.

**Now the loop, and the one idea worth the price of the lesson.** The thick ascending limb has a pump that, working flat out, can make the fluid inside it only about 200 mOsm/kg more dilute than the fluid outside. That is the **single effect**, and it is modest. But the tube doubles back on itself: fluid that has just been concentrated on the way down gets pumped on the way up, right next to where it came from. **The same 200 mOsm/kg step, applied repeatedly to fluid that keeps flowing past, stacks into a gradient six times larger.** Each stair is short; the staircase is long.

*Analogy:* a multistage distillation column separates far better than any one tray can, because the trays are plumbed countercurrent and each one starts from the last one's output. The loop of Henle is that, built from one tube folded in half.

## The formal version

### 1. Bookkeeping: who reclaims what

With GFR $= 125$ mL/min (from [3.1](03-01-glomerular-filtration-clearance.md)) and plasma $[\text{Na}^+] = 140$ mmol/L, the **filtered load** — the amount delivered to the tubule per unit time — is

$$\text{filtered load} = \text{GFR} \times P_{\text{solute}} = 0.125\ \text{L/min} \times 140\ \text{mmol/L} = 17.5\ \text{mmol/min} = 25{,}200\ \text{mmol/day}.$$

*In words: the tubule is handed 25.2 moles of sodium a day — about 1.5 kg of NaCl — and a typical diet contains 10 g.* Excreting roughly 150 mmol/day means

$$\text{fractional reabsorption} = 1 - \frac{150}{25{,}200} = 0.994 \quad \Rightarrow \quad \mathbf{99.4\ \text{percent reclaimed}}.$$

| Segment | $\text{Na}^+$ reabsorbed | Water | Regulated? |
|---|---|---|---|
| Proximal tubule | ~67% | ~67%, **isosmotic** | no |
| Thin descending limb | — | ~15% (water only) | no |
| Thick ascending limb | ~25% | **none** (water-tight) | weakly |
| Distal convoluted tubule | ~5% | little | aldosterone |
| Collecting duct | ~3% | **0 to nearly all the rest** | **ADH, aldosterone** |

**Isosmotic does not mean nothing happened.** The proof is a marker that is filtered and then completely ignored — inulin. If a fraction $f$ of the water is reabsorbed, the inulin left behind is concentrated by

$$\frac{(\text{TF}/P)_{\text{inulin}}} {1} = \frac{1}{1-f} \quad\Longrightarrow\quad f = 0.67 \ \Rightarrow\ (\text{TF}/P)_{\text{inulin}} = \frac{1}{0.33} = 3.0 .$$

*In words: at the end of the proximal tubule the fluid is three times as rich in inulin as plasma but has the same osmolality as plasma — which is exactly what "two-thirds of the volume gone, concentration unchanged" looks like when you measure it.*

### 2. Transport maximum and threshold — [1.2](01-02-membrane-transport.md)'s saturation curve, cashed in

Carriers saturate; channels do not. Glucose is reabsorbed by **SGLT2** (early proximal tubule, low affinity, high capacity, 1 $\text{Na}^+$ : 1 glucose, ~90 percent of the job) and **SGLT1** (late proximal tubule, high affinity, low capacity, 2 $\text{Na}^+$ : 1 glucose, the cleanup). Together they have a ceiling, the **transport maximum** $T_m$, about $375$ mg/min in an adult.

$$\text{excretion} = \underbrace{\text{GFR}\times P_G}_{\text{filtered load}} - \underbrace{\min(\text{GFR}\times P_G,\; T_m)}_{\text{reabsorption}}$$

*In words: reabsorb everything you're given until you hit the ceiling; everything past the ceiling is urine.* The **theoretical threshold** is the plasma concentration at which the filtered load first equals $T_m$:

$$P_G^{\text{thresh}} = \frac{T_m}{\text{GFR}} = \frac{375\ \text{mg/min}}{125\ \text{mL/min}} = 3.0\ \text{mg/mL} = 300\ \text{mg/dL}.$$

**But glucose actually starts appearing in urine at about 180–200 mg/dL, not 300.** The transition is rounded, not a corner. That rounding is called **splay**, and it has two causes:

1. **Nephron heterogeneity.** Nephrons are not identical. A nephron with a high single-nephron GFR and a low $T_m$ hits its personal ceiling well before the population average does, and spills. The whole-kidney curve is a *sum over a distribution* of individual corners, which smears the corner out.
2. **Finite affinity.** The carrier obeys saturation kinetics — reabsorption rate $\approx T_m\,[G]/(K_m + [G])$, the same hyperbola as [biophysics 4.2](../../biophysics/lessons/04-02-michaelis-menten.md). A hyperbola *approaches* its asymptote; it never reaches it. So some glucose escapes even below $T_m$.

**The consequence that matters clinically:** glucosuria in diabetes is **not** a broken transporter. The transporters are normal and working at full capacity; the filtered load simply exceeded them. **Sugar in the urine is a statement about plasma glucose, not about the kidney.**

**And the consequence that became a drug class:** SGLT2 inhibitors (empagliflozin, dapagliflozin) do not fix anything — they *deliberately lower the threshold*, to roughly 40 mg/dL, so that a diabetic patient dumps on the order of 60 g of glucose (≈ 240 kcal) into the urine each day. A textbook pathology, reinterpreted as a therapeutic exit route.

### 3. The countercurrent multiplier, step by step

Two facts about the limbs, and everything follows:

- **Thin descending limb:** highly water-permeable (aquaporin-1, always on), nearly solute-impermeable. It is a passive osmometer — its contents equilibrate with whatever the interstitium is.
- **Thick ascending limb:** **water-impermeable**, and actively pumps NaCl out via the apical **NKCC2** cotransporter ($1\ \text{Na}^+ : 1\ \text{K}^+ : 2\ \text{Cl}^-$), powered by the basolateral $\text{Na}^+/\text{K}^+$-ATPase.

The **single effect** is the maximum osmotic difference NKCC2 can hold across the ascending limb wall at any one horizontal level, against backleak: **about 200 mOsm/kg.** That is all the pump can ever do.

Now watch what geometry does with it. Take a loop divided into four levels, cortex (1) to papilla (4), all starting at 300 mOsm/kg. Repeat two operations: **pump** (at each level, move solute from ascending to interstitium until ascending sits 200 below interstitium; the descending limb, being an osmometer, equilibrates with the interstitium) and **flow** (fresh 300 mOsm/kg fluid enters the top of the descending limb, everything advances one level, and the bottom of the descending limb rounds the bend into the ascending limb).

**Step 1 — pump, from a uniform start.**

| | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| descending = interstitium | 400 | 400 | 400 | 400 |
| ascending | 200 | 200 | 200 | 200 |

Horizontal difference 200 everywhere; **vertical difference still zero.** No gradient yet.

**Step 2 — flow.** New fluid at 300 enters the top; the 400 at the bottom of the descending limb turns the corner into the ascending limb.

| | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| descending | **300** | 400 | 400 | 400 |
| ascending | 200 | 200 | 200 | **400** |

**Step 3 — pump again.** At each level, split the average into interstitium $+100$ and ascending $-100$.

| | L1 | L2 | L3 | L4 |
|---|---|---|---|---|
| descending = interstitium | 350 | 400 | 400 | **500** |
| ascending | 150 | 200 | 200 | 300 |

**Look at what just happened.** The pump never did anything but its usual 200 mOsm/kg step — check any column. Yet the interstitium now runs 350 at the top and **500** at the bottom: a 150 mOsm/kg *vertical* gradient built out of a purely *horizontal* effect. Iterate and the papillary value climbs to 550, 600, and onward.

$$\boxed{\;\text{single effect (200 mOsm/kg)} \;\times\; \text{countercurrent geometry} \;=\; \text{corticopapillary gradient (up to 1200 mOsm/kg)}\;}$$

*In words: the loop converts a small difference repeated many times into a large difference maintained once.* How large depends on **loop length and flow rate** — long loops and slow flow allow more cycles per unit of fluid. Humans, with about 15 percent long-looped nephrons, reach 1200 mOsm/kg; desert rodents with far longer loops reach several thousand.

Note the **second, free product**: the fluid *leaving* the thick ascending limb is around 100 mOsm/kg — **more dilute than plasma**. The TAL is simultaneously the concentrating machine's engine and the nephron's **diluting segment**, because removing solute without water does both jobs at once.

**Loop diuretics (furosemide, bumetanide) block NKCC2.** They abolish the single effect, so the multiplier has nothing to multiply — and they simultaneously knock out reabsorption of the ~25 percent of filtered $\text{Na}^+$ that the TAL handles, which no downstream segment has the capacity to recapture. **That is why they are the most powerful diuretic class**: they attack the largest single reabsorptive step and the gradient at the same time.

### 4. Urea, and why the vasa recta are *not* a multiplier

**Urea supplies roughly half of the 1200 mOsm/kg at the papilla.** ADH inserts UT-A urea transporters in the inner medullary collecting duct; urea diffuses into the interstitium there, re-enters the loop, and cycles. This is free osmolality: urea is a waste product being excreted anyway, and recycling it means less NaCl pumping is needed for the same concentrating power. (It is also why severe protein malnutrition impairs urine concentration — no urea, no gradient.)

**The vasa recta are a countercurrent *exchanger*, and the distinction is the point.** Blood must perfuse the medulla, and a straight-through capillary would wash the gradient away in minutes. Instead the vessels hairpin: descending blood picks up solute and loses water as it dives into saltier territory; ascending blood gives it all back on the way out. **Solute is trapped by geometry.** Blood leaves only slightly hyperosmotic.

| | Countercurrent **multiplier** (loop of Henle) | Countercurrent **exchanger** (vasa recta) |
|---|---|---|
| Uses ATP? | **Yes** — NKCC2 in the TAL | **No** — entirely passive |
| What it does | **Creates** the gradient | **Preserves** the gradient |
| Remove it | no gradient exists | gradient is washed out |

### 5. ADH: the gradient is only *potential*

Here is the framing everyone skips. **A 1200 mOsm/kg medulla does not concentrate urine.** Water leaves the collecting duct only if the collecting duct is permeable to water, and by default it is not.

**Vasopressin (ADH)** binds **V2 receptors** on the basolateral membrane of principal cells → $G_s$ → cAMP → PKA → phosphorylation of **aquaporin-2**, which is then trafficked from cytoplasmic vesicles into the **apical** membrane (the second-messenger machinery is [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md)). AQP3/AQP4 sit constitutively on the basolateral side, so once AQP2 arrives there is a complete water path and osmosis does the rest.

**One hormone, one channel, the full dynamic range: 50 to 1200 mOsm/kg from the same nephron.**

Release stimuli, in order of sensitivity:

- **Osmolality — the primary controller.** Hypothalamic osmoreceptors have a threshold near 280–285 mOsm/kg; above it ADH rises steeply, and a change of about 1 percent is enough to move it. This is a fine, continuous, high-gain loop.
- **Volume/pressure — the override.** Baroreceptor-driven ADH release needs roughly a 7–10 percent fall in blood volume before it engages, but once it does it rises far higher than osmolality ever drives it, and it *wins*. **The body will accept a dilute, hyponatremic internal sea rather than an empty circulation** — a clean statement of physiological priority, and the reason severe hypovolemia produces hyponatremia.

**Diabetes insipidus** — "insipidus," tasteless, as opposed to the honeyed urine of diabetes mellitus — is failure at either end of this pathway:

| | Central (neurogenic) DI | Nephrogenic DI |
|---|---|---|
| Lesion | posterior pituitary/hypothalamus: **no ADH made** | V2 receptor or AQP2 defect; lithium, hypercalcemia: **no response** |
| Plasma ADH | low | **high** |
| Give desmopressin (a V2 agonist) | urine concentrates sharply | **nothing happens** |

Both produce litres of dilute urine; **the desmopressin challenge is the one test that separates them**, and it does so because it interrogates exactly the step each one breaks.

### 6. Free-water clearance: the quantitative version of "conserving or dumping?"

Split urine flow $\dot V$ (mL/min) conceptually into the volume needed to carry the excreted solute at plasma concentration, plus whatever pure water is left over. With $U_{\text{osm}}$ and $P_{\text{osm}}$ in mOsm/kg:

$$C_{\text{osm}} = \frac{U_{\text{osm}}\,\dot V}{P_{\text{osm}}}, \qquad \boxed{\;C_{\text{H}_2\text{O}} = \dot V - C_{\text{osm}} = \dot V\left(1 - \frac{U_{\text{osm}}}{P_{\text{osm}}}\right)\;}$$

*In words: $C_{\text{H}_2\text{O}}$ is the millilitres per minute of solute-free water the kidney is adding to the urine (positive) or clawing back from it (negative).*

- $C_{\text{H}_2\text{O}} > 0$: urine is dilute; **excreting free water**.
- $C_{\text{H}_2\text{O}} < 0$: urine is concentrated; **conserving free water**. (Some texts write this as $T^c_{\text{H}_2\text{O}} = -C_{\text{H}_2\text{O}}$, "free water reabsorption.")

**Two numbers, worked.**

*Dehydrated, maximal ADH:* $\dot V = 0.5$ mL/min, $U_{\text{osm}} = 1200$, $P_{\text{osm}} = 295$ mOsm/kg.

$$C_{\text{osm}} = \frac{1200 \times 0.5}{295} = \frac{600}{295} = 2.03\ \text{mL/min}, \qquad C_{\text{H}_2\text{O}} = 0.5 - 2.03 = \mathbf{-1.53\ \text{mL/min}}$$

which over a day is $-1.53 \times 1440 = -2200$ mL — **the kidney is reclaiming 2.2 L of pure water per day** relative to isosmotic excretion.

*After a large water load, ADH suppressed:* $\dot V = 15$ mL/min, $U_{\text{osm}} = 60$, $P_{\text{osm}} = 285$ mOsm/kg.

$$C_{\text{osm}} = \frac{60 \times 15}{285} = 3.16\ \text{mL/min}, \qquad C_{\text{H}_2\text{O}} = 15 - 3.16 = \mathbf{+11.8\ \text{mL/min}} \approx 17\ \text{L/day}.$$

**Same organ, same solute load, a 20-fold swing in water output.**

**And the reason this all exists.** You must excrete your daily solute load — call it 600 mOsm/day of urea, sodium and potassium salts. Since urine osmolality has a ceiling, so does your economy:

$$V_{\min} = \frac{\text{daily solute load}}{U_{\text{osm}}^{\max}} = \frac{600\ \text{mOsm/day}}{1200\ \text{mOsm/kg}} = \mathbf{0.5\ \text{L/day}}.$$

**That number is your obligatory water loss, and it is set entirely by the countercurrent multiplier.** Halve the maximum concentrating ability and you must drink an extra half-litre a day just to stand still. It is also why seawater does not work: at roughly 1100 mOsm/kg, a litre of seawater carries 1100 mOsm, which needs $1100/1200 = 0.92$ L of maximally concentrated urine to eliminate. **Net gain: 80 mL — before you have excreted any of your own solute.** An animal that could concentrate to 6000 mOsm/kg would net 0.82 L from that same litre. The difference between the two is the length of a loop.

## Picture

![Two panels. The upper panel shows a loop of Henle, a collecting duct and the vasa recta drawn against a vertical corticopapillary axis running from 300 milliosmoles per kilogram in the cortex down to 1200 at the papilla, with water leaving the blue descending limb, sodium chloride actively pumped out of the red thick ascending limb by NKCC2, water leaving the green collecting duct only when ADH is present, and the grey vasa recta hairpinning alongside without any pump. The lower panel plots tubular fluid osmolality along the nephron: flat at 300 through the proximal tubule, rising to 1200 at the loop tip, falling to about 100 at the end of the thick ascending limb, and then splitting into two collecting-duct curves from that same branch point, one climbing to 1200 under maximal ADH and one drifting down to about 50 with no ADH.](assets/03-02-fig1.svg)

**The two panels answer different questions.** Panel (a) is about the *interstitium* — who builds the gradient (the red pump), who spends it (the green duct), who protects it (the grey vessels). Panel (b) is about the *tubular fluid*, and its punchline is the branch point: **two curves, identical up to that instant, ending an order of magnitude apart because of one hormone.**

## Worked examples

**Example 1 (mechanical — following one minute of filtrate down the proximal tubule).** GFR $=125$ mL/min, plasma $[\text{Na}^+] = 140$ mmol/L, plasma glucose $= 90$ mg/dL, $T_m^{\text{glucose}} = 375$ mg/min. The proximal tubule reabsorbs 67 percent of filtered water and sodium and all filtered glucose. Find, at the end of the proximal tubule: (a) the flow rate, (b) the sodium delivery, (c) the glucose concentration, (d) the osmolality, (e) $(\text{TF}/P)$ for inulin and for sodium.

(a) $$\dot V_{\text{end PT}} = 125 \times (1 - 0.67) = 125 \times 0.33 = \mathbf{41.3\ \text{mL/min}}.$$

(b) Filtered load $= 0.125 \times 140 = 17.5$ mmol/min, of which 67 percent is gone:

$$17.5 \times 0.33 = \mathbf{5.78\ \text{mmol/min delivered to the loop}}.$$

(c) Filtered glucose $= 0.9\ \text{mg/mL} \times 125\ \text{mL/min} = 112.5$ mg/min, which is well under $T_m = 375$ mg/min, so **all of it is reabsorbed** and the concentration at the end of the proximal tubule is $\mathbf{0}$. (Note the margin: the filtered load would have to more than triple before a single milligram appeared in urine.)

(d) **Unchanged, 300 mOsm/kg** — this is what isosmotic means. Check it against (b): sodium concentration is $5.78\ \text{mmol/min} \div 0.0413\ \text{L/min} = 140$ mmol/L, exactly what it started at. Water and solute left in the same proportion.

(e) $$(\text{TF}/P)_{\text{inulin}} = \frac{1}{1-0.67} = \mathbf{3.0}, \qquad (\text{TF}/P)_{\text{Na}} = \frac{140}{140} = \mathbf{1.0}.$$

**Those two numbers together are the whole story of the proximal tubule.** Inulin says two-thirds of the volume is gone. Sodium says the concentration never moved. A segment that changes volume enormously and concentration not at all.

**Example 2 (why you'd care — uncontrolled diabetes, and a drug built out of the same equation).** A patient with untreated type 2 diabetes has plasma glucose $= 400$ mg/dL. Take GFR $=125$ mL/min and $T_m = 375$ mg/min. (a) How much glucose is excreted per day? (b) What does that cost in calories? (c) Why is this patient also polyuric and thirsty? (d) An SGLT2 inhibitor lowers the effective threshold to about 40 mg/dL. Explain in mechanism terms what the drug is doing.

(a) $$\text{filtered load} = 125\ \text{mL/min} \times 4.0\ \text{mg/mL} = 500\ \text{mg/min}.$$

$$\text{excreted} = 500 - 375 = 125\ \text{mg/min} \;\Rightarrow\; 125 \times 1440 = 180{,}000\ \text{mg} = \mathbf{180\ \text{g/day}}.$$

(b) At 4 kcal/g, $180 \times 4 = \mathbf{720\ \text{kcal/day}}$ leaving in the urine. **This is the classic "weight loss despite polyphagia"**, and it is a straight consequence of a saturating carrier, nothing more.

(c) **Osmotic diuresis.** 180 g of glucose is $180\ \text{g} \div 180\ \text{g/mol} = 1.0$ mol $= 1000$ mOsm/day of *non-reabsorbable* solute now sitting in the tubular lumen — on top of a normal 600 mOsm/day load. Even at a maximal 1200 mOsm/kg,

$$V_{\min} = \frac{600 + 1000}{1200} = 1.33\ \text{L/day},$$

and in practice much more, because glucose in the lumen also holds water back in the proximal tubule and washes out the medullary gradient. The obligatory water loss drives thirst; **polyuria causes the polydipsia, not the other way round.**

(d) The drug binds SGLT2 and **lowers $T_m$** — it does not change GFR, plasma glucose, or the shape of the relationship, only the height of the ceiling in $\text{excretion} = \text{GFR}\times P_G - T_m$. With the threshold at 40 mg/dL, a patient at 140 mg/dL now spills continuously.

$$\text{60 g/day} \times 4\ \text{kcal/g} = 240\ \text{kcal/day} \text{ discarded, plus an obligatory osmotic natriuresis and diuresis.}$$

**What is elegant here is the inversion.** Glucosuria was, for a century, purely a sign of disease. Recognizing that it is a *consequence of a saturable carrier* rather than a defect meant the same phenomenon could be induced on purpose — and the resulting drugs turned out to reduce heart-failure hospitalization and slow kidney disease progression, largely through the sodium and volume effects rather than the glucose ones.

## Watch out

- **You might think the vasa recta help build the medullary gradient.** They do the opposite job: they are a **passive exchanger** that keeps blood flow from destroying a gradient someone else made. The only ATP-driven step in the entire concentrating mechanism is NKCC2 in the thick ascending limb. **Multiplier creates; exchanger conserves.**
- **You might think "isosmotic reabsorption" means the proximal tubule did nothing interesting.** It removed two-thirds of the volume. Osmolality is a ratio and it stayed put; the numerator and denominator both fell. $(\text{TF}/P)_{\text{inulin}} = 3$ is the receipt.
- **You might think glucose in the urine means a broken glucose transporter.** In diabetes the transporters are intact and saturated — the filtered load exceeded a normal $T_m$. (Genuine transporter defects exist — familial renal glucosuria — and they show glucosuria at *normal* plasma glucose, which is exactly how you tell them apart.)
- **You might expect the $T_m$ curve to have a sharp corner at 300 mg/dL.** It has splay: nephrons are heterogeneous and carriers have finite affinity, so spilling starts near 180–200 mg/dL. **The theoretical threshold is a calculation; the actual threshold is a measurement, and they are allowed to differ.**
- **You might think a salty medulla concentrates the urine.** It makes concentration *possible*. Without ADH the collecting duct is a water-tight pipe running through a 1200 mOsm/kg interstitium and nothing crosses — which is precisely nephrogenic diabetes insipidus.
- **You might read urine volume as the measure of water handling.** It is not: a 3 mL/min urine at 900 mOsm/kg is water *conservation*, and a 3 mL/min urine at 100 mOsm/kg is water *excretion*. Only $C_{\text{H}_2\text{O}}$ tells you which, because only it compares urine against plasma.

## One-liner

> The proximal tubule takes back two-thirds of the volume without touching the concentration; the ascending limb's modest 200 mOsm/kg single effect, multiplied by countercurrent geometry, builds a 1200 mOsm/kg medulla — and that gradient is only *potential* until ADH inserts aquaporin-2 and lets the collecting duct spend it.

## Problems

**P1 (🟢)** Take GFR $= 125$ mL/min and $T_m^{\text{glucose}} = 375$ mg/min. (a) Compute the theoretical renal threshold for glucose in mg/dL. (b) A patient's plasma glucose is 350 mg/dL. Compute the rate of glucose excretion in mg/min and the daily loss in grams. (c) Their glucose actually first appeared in urine at a measured plasma level of 195 mg/dL. Is this evidence of renal disease? Explain.

**P2 (🟡, bridges to 3.3 and to endocrine control)** Two patients each have plasma osmolality $P_{\text{osm}} = 308$ mOsm/kg.

- Patient A: urine flow $0.6$ mL/min, $U_{\text{osm}} = 1150$ mOsm/kg.
- Patient B: urine flow $6.0$ mL/min, $U_{\text{osm}} = 90$ mOsm/kg.

(a) Compute $C_{\text{osm}}$ and $C_{\text{H}_2\text{O}}$ for each, in mL/min and L/day. (b) Compute each patient's daily osmolar excretion and comment on what it shows. (c) Both patients are hyperosmotic. Which kidney is behaving appropriately, what is wrong with the other, and what single test distinguishes the two forms of that disorder?

**P3 (🔴, optional)** (a) Continue the countercurrent multiplier from the state reached in Step 3 above — descending/interstitium $=350, 400, 400, 500$ and ascending $=150, 200, 200, 300$ at levels 1–4 — for **two more full flow-then-pump cycles**, using the same rules (fresh 300 mOsm/kg fluid enters the top; everything advances one level; the bottom of the descending limb becomes the bottom of the ascending limb; then at each level split the average into interstitium $+100$ and ascending $-100$). Report the papillary interstitial osmolality after each cycle, and verify the single effect never exceeds 200 mOsm/kg. (b) A patient on high-dose furosemide has a maximum achievable urine osmolality of 350 mOsm/kg. If they must excrete 700 mOsm/day, compute their minimum obligatory urine volume, and compare with the intact value at 1200 mOsm/kg. (c) Explain in one or two sentences why a loop diuretic abolishes the ability to *dilute* the urine as well as the ability to concentrate it.

<details>
<summary>Solutions</summary>

**P1 (a)** The threshold is the plasma concentration whose filtered load exactly equals $T_m$:

$$P_G^{\text{thresh}} = \frac{T_m}{\text{GFR}} = \frac{375\ \text{mg/min}}{125\ \text{mL/min}} = 3.0\ \text{mg/mL} = \mathbf{300\ \text{mg/dL}}.$$

**(b)** $P_G = 350$ mg/dL $= 3.5$ mg/mL.

$$\text{filtered load} = 125\ \text{mL/min} \times 3.5\ \text{mg/mL} = 437.5\ \text{mg/min}.$$

$$\text{excreted} = 437.5 - 375 = \mathbf{62.5\ \text{mg/min}}.$$

$$62.5 \times 1440 = 90{,}000\ \text{mg} = \mathbf{90\ \text{g/day}} \;(\approx 360\ \text{kcal/day}).$$

**(c) No — this is normal splay, not disease.** Spilling begins below the theoretical threshold in everyone, typically around 180–200 mg/dL, for two reasons: **nephron heterogeneity** (nephrons differ in single-nephron GFR and in $T_m$, so the ones with the highest load-to-capacity ratio spill first, and the whole-kidney curve is a smeared sum of many individual corners) and **finite carrier affinity** (reabsorption follows a saturating hyperbola that approaches $T_m$ asymptotically, so a little glucose slips past even below the ceiling).

**What would be evidence of renal disease:** glucosuria at a *normal* plasma glucose — say 95 mg/dL — which implies a genuinely reduced $T_m$ (familial renal glucosuria, or generalized proximal tubule failure as in Fanconi syndrome, where amino acids and phosphate spill too). **Test the plasma, not the urine.**

**P2 (a)** $C_{\text{osm}} = U_{\text{osm}}\dot V / P_{\text{osm}}$ and $C_{\text{H}_2\text{O}} = \dot V - C_{\text{osm}}$.

*Patient A:*

$$C_{\text{osm}} = \frac{1150 \times 0.6}{308} = \frac{690}{308} = 2.24\ \text{mL/min}, \qquad C_{\text{H}_2\text{O}} = 0.6 - 2.24 = \mathbf{-1.64\ \text{mL/min}}$$

$$-1.64\ \text{mL/min} \times 1440 = \mathbf{-2.36\ \text{L/day}} \;\text{(reclaiming free water)}.$$

*Patient B:*

$$C_{\text{osm}} = \frac{90 \times 6.0}{308} = \frac{540}{308} = 1.75\ \text{mL/min}, \qquad C_{\text{H}_2\text{O}} = 6.0 - 1.75 = \mathbf{+4.25\ \text{mL/min}}$$

$$+4.25 \times 1440 = \mathbf{+6.12\ \text{L/day}} \;\text{(dumping free water)}.$$

**(b)** Daily osmolar excretion $= U_{\text{osm}} \times$ daily urine volume.

$$A: \; 0.6\ \text{mL/min} \times 1440 = 0.864\ \text{L/day}; \quad 1150 \times 0.864 = \mathbf{994\ \text{mOsm/day}}.$$

$$B: \; 6.0\ \text{mL/min} \times 1440 = 8.64\ \text{L/day}; \quad 90 \times 8.64 = \mathbf{778\ \text{mOsm/day}}.$$

**Both are excreting a broadly normal solute load.** This is the key observation: the ten-fold difference in urine volume is **not** a difference in solute handling — it is *purely* a difference in water handling. Patient B does not have a solute problem; B has a water problem. (Contrast with the osmotic diuresis of Example 2, where the daily osmolar output would be roughly double normal.)

**(c)** $P_{\text{osm}} = 308$ mOsm/kg is above the normal 275–295 range, so both patients are **hyperosmotic**, and the correct renal response is maximal ADH, minimal urine volume, maximal $U_{\text{osm}}$.

- **Patient A is behaving correctly.** Urine at 1150 mOsm/kg and 0.86 L/day with strongly negative $C_{\text{H}_2\text{O}}$ is a kidney defending body water as hard as it can. The hyperosmolality is coming from somewhere else — inadequate intake, or extrarenal losses.
- **Patient B's kidney is failing to respond.** Excreting 6 L/day of 90 mOsm/kg urine while the plasma is already concentrated is exactly backwards; this is **diabetes insipidus**, and the ongoing positive free-water clearance is what is *driving* the hyperosmolality.

**The single distinguishing test: administer desmopressin (DDAVP, a selective V2 agonist) and re-measure urine osmolality.**

| | Central DI | Nephrogenic DI |
|---|---|---|
| Defect | no ADH secreted | V2 receptor / AQP2 unresponsive |
| Plasma ADH | low | high |
| $U_{\text{osm}}$ after DDAVP | **rises sharply** (typically > 50 percent) | **barely moves** |

This works because desmopressin supplies exactly the molecule that is missing in one disorder and irrelevant in the other — it tests the pathway at the precise point where the two lesions differ.

*(A third possibility worth ruling out first: primary polydipsia also gives high-volume dilute urine, but with a **low** plasma osmolality. Here $P_{\text{osm}} = 308$ excludes it — you cannot be hyperosmotic from drinking too much water.)*

**P3 (a)** Starting state: descending/interstitium $D = (350, 400, 400, 500)$, ascending $A = (150, 200, 200, 300)$.

**Cycle 1 — flow.** New 300 at the top, everything advances, old $d_4 = 500$ becomes $a_4$:

$$D = (300,\ 350,\ 400,\ 400), \qquad A = (200,\ 200,\ 300,\ 500).$$

**Cycle 1 — pump.** At each level the average is preserved and split $\pm 100$:

| level | average | interstitium/descending | ascending |
|---|---|---|---|
| 1 | $(300+200)/2 = 250$ | 350 | 150 |
| 2 | $(350+200)/2 = 275$ | 375 | 175 |
| 3 | $(400+300)/2 = 350$ | 450 | 250 |
| 4 | $(400+500)/2 = 450$ | **550** | 350 |

$$D = (350,\ 375,\ 450,\ \mathbf{550}), \qquad A = (150,\ 175,\ 250,\ 350).$$

**Papillary osmolality after cycle 1: 550 mOsm/kg.**

**Cycle 2 — flow.**

$$D = (300,\ 350,\ 375,\ 450), \qquad A = (175,\ 250,\ 350,\ 550).$$

**Cycle 2 — pump.**

| level | average | interstitium/descending | ascending |
|---|---|---|---|
| 1 | $(300+175)/2 = 237.5$ | 337.5 | 137.5 |
| 2 | $(350+250)/2 = 300$ | 400 | 200 |
| 3 | $(375+350)/2 = 362.5$ | 462.5 | 262.5 |
| 4 | $(450+550)/2 = 500$ | **600** | 400 |

$$D = (337.5,\ 400,\ 462.5,\ \mathbf{600}), \qquad A = (137.5,\ 200,\ 262.5,\ 400).$$

**Papillary osmolality after cycle 2: 600 mOsm/kg.**

**Verification of the single effect.** Subtract $A$ from $D$ at every level in every state above:

$$550 - 350 = 200, \quad 600 - 400 = 200, \quad 462.5 - 262.5 = 200, \quad \dots$$

**Exactly 200 mOsm/kg, everywhere, always.** The pump never once exceeded its capacity.

$$\text{Papillary value: } 400 \to 500 \to 550 \to 600 \to \cdots$$

**This is the whole trick.** The vertical gradient (top to papilla) has grown from 0 to $600 - 337.5 = 262.5$ mOsm/kg using a pump whose horizontal reach is fixed at 200. Continuing the iteration drives the papillary value toward a steady state set by **loop length and flow rate** — the number of pump-and-advance cycles a given parcel of fluid experiences before it leaves. (Note also the increments shrinking: $+100, +50, +50$. Approach to steady state is asymptotic, which is why doubling loop length does not double the achievable osmolality.)

**(b)** $$V_{\min} = \frac{\text{solute load}}{U_{\text{osm}}^{\max}}.$$

$$\text{On furosemide:} \quad V_{\min} = \frac{700\ \text{mOsm/day}}{350\ \text{mOsm/kg}} = \mathbf{2.0\ \text{L/day}}.$$

$$\text{Intact:} \quad V_{\min} = \frac{700}{1200} = \mathbf{0.58\ \text{L/day}}.$$

**A 3.4-fold increase in obligatory water loss**, before counting the extra solute the drug itself forces into the urine. This is why loop diuretics dehydrate so effectively — and why the same arithmetic makes them dangerous in a patient with limited access to water.

**(c)** The thick ascending limb performs **both** halves of the job with a single act: pumping NaCl out of a water-impermeable tube simultaneously **concentrates the interstitium** (making concentrated urine possible) and **dilutes the tubular fluid** to ~100 mOsm/kg (making dilute urine possible). Furosemide blocks that one act, so **both capacities vanish at once and urine osmolality is pinned near plasma (~300 mOsm/kg) regardless of ADH** — the state called *isosthenuria*.

**The deeper point:** the loop of Henle is not "the concentrating segment." It is the segment that **separates water from solute**, and both concentrating and diluting are downstream consequences of that one separation.

</details>

## Flashback

**From Lesson 3.1 (glomerular filtration and renal clearance):** A subject is infused with inulin and PAH to steady state. Urine flow is $\dot V = 2.0$ mL/min. Urine inulin is $16.5$ mg/mL against a plasma inulin of $0.30$ mg/mL; urine PAH is $4.4$ mg/mL against a plasma PAH of $0.016$ mg/mL.

(a) Compute GFR and the effective renal plasma flow, then the filtration fraction. Redo the filtration fraction using a PAH extraction ratio $E_{\text{PAH}} = 0.90$.
(b) A solute Z has plasma concentration $0.80$ mg/mL and urine concentration $11$ mg/mL. Compute $C_Z$ and the clearance ratio $C_Z/C_{\text{inulin}}$, then use mass balance to report the filtered load, the excretion rate, and the net rate at which the tubule reabsorbed or secreted Z, in mg/min. Could reabsorption alone have produced this ratio?
(c) A drug is given that selectively **dilates** the efferent arteriole, leaving the afferent alone. State what happens to renal plasma flow, to $P_{GC}$, to GFR and to the filtration fraction, and say in one sentence what that does to proximal reabsorption in today's lesson.

<details>
<summary>Solution</summary>

**(a)** Clearance is $C_X = U_X\dot V / P_X$ — an excretion rate divided by the concentration it came from, giving volume per time.

$$C_{\text{inulin}} = \frac{(16.5\ \text{mg/mL})(2.0\ \text{mL/min})}{0.30\ \text{mg/mL}} = \frac{33\ \text{mg/min}}{0.30\ \text{mg/mL}} = \mathbf{110\ \text{mL/min}} = \text{GFR}$$

Inulin is filtered and then neither reabsorbed nor secreted, so everything in the urine arrived by filtration and its clearance *is* the filtration rate.

$$C_{\text{PAH}} = \frac{(4.4)(2.0)}{0.016} = \frac{8.8\ \text{mg/min}}{0.016\ \text{mg/mL}} = \mathbf{550\ \text{mL/min}} = \text{effective RPF}$$

$$FF = \frac{\text{GFR}}{\text{RPF}} = \frac{110}{550} = \mathbf{0.20}$$

Correcting for incomplete extraction, true RPF $= 550/0.90 = 611$ mL/min, so the honest $FF = 110/611 = \mathbf{0.18}$. **PAH clearance always overstates the filtration fraction**, because it understates the flow it is standing in for.

**(b)**

$$C_Z = \frac{(11\ \text{mg/mL})(2.0\ \text{mL/min})}{0.80\ \text{mg/mL}} = \frac{22\ \text{mg/min}}{0.80\ \text{mg/mL}} = \mathbf{27.5\ \text{mL/min}}, \qquad \frac{C_Z}{C_{\text{inulin}}} = \frac{27.5}{110} = \mathbf{0.25}$$

Mass balance, $U_Z\dot V = \text{GFR}\times P_Z - R_Z + S_Z$:

$$\text{filtered load} = (110\ \text{mL/min})(0.80\ \text{mg/mL}) = 88\ \text{mg/min}$$
$$\text{excreted} = (11)(2.0) = 22\ \text{mg/min}$$
$$\text{net reabsorbed} = 88 - 22 = \mathbf{66\ \text{mg/min}}$$

The tubule reclaimed **75 percent of the filtered load** — which is the same statement as the clearance ratio, since $C_Z/C_{\text{inulin}}$ is exactly (amount excreted)/(amount filtered), and $1 - 0.25 = 0.75$.

**Yes — reabsorption alone accounts for this.** A ratio below 1 says only that less appeared in the urine than filtration delivered, which is what reabsorption does. The asymmetry runs the other way: a ratio *above* 1 could not have come from reabsorption and would be positive proof of secretion.

**(c)** Efferent dilation lowers $R_E$, so total resistance falls and **renal plasma flow rises**. But $P_{GC}$ is the pressure at the node *between* the two resistors, and lowering the downstream resistance drops that node pressure: **$P_{GC}$ falls**, so NFP falls and **GFR falls**. Flow up and filtration down means the filtration fraction falls sharply — it is the exact mirror of angiotensin II's efferent constriction, which buys filtration by spending flow.

*Why this matters for today's lesson:* a lower filtration fraction means less water was squeezed out of the plasma heading into the peritubular capillaries, so that blood is **less** protein-concentrated and its oncotic pressure is lower — and since peritubular oncotic pressure is what drives the proximal tubule's isosmotic reabsorption, **proximal reabsorption falls too.** The same knob that sets GFR also sets how eagerly capillary bed two takes the filtrate back.

</details>

## Connections

- **Backward:** [1.2](01-02-membrane-transport.md) supplied every mechanism used here — the $\text{Na}^+/\text{K}^+$-ATPase as the master gradient, secondary active transport as the way to spend it, carrier saturation (which is $T_m$), and osmosis (which is the entire collecting duct). [3.1](03-01-glomerular-filtration-clearance.md) supplied GFR, without which "filtered load" is meaningless.
- **Forward:** [3.3](03-03-fluid-electrolyte-acid-base.md) puts hormones on the segments named here — aldosterone on the distal tubule and collecting duct, RAAS on the whole thing — and uses proximal $\text{Na}^+/\text{H}^+$ exchange as the front end of bicarbonate handling. [3.4](03-04-endocrine-axes.md) treats ADH as one output of the hypothalamic–posterior pituitary axis. [4.3](04-03-exercise-integrative-physiology.md) runs this machinery under sweat-driven hypovolemia, where the volume override beats the osmotic controller.
- **Sideways:** $T_m$ is $V_{\max}$ with a renal accent — the saturating hyperbola of [biophysics 4.2](../../biophysics/lessons/04-02-michaelis-menten.md), and splay is what happens when you sum that hyperbola over a heterogeneous population. The V2 receptor is a $G_s$-coupled GPCR running the cAMP/PKA cascade of [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md). And the multiplier/exchanger distinction is a general engineering idea, not a renal one: countercurrent exchangers appear in fish gills, in the arteries and veins of a penguin's foot, and throughout process design (see the [transport-phenomena](../../transport-phenomena/syllabus.md) course) — everywhere the goal is to move something between two streams without paying for it.

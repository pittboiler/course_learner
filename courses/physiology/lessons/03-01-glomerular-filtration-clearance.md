# Human Physiology · Lesson 3.1: Glomerular filtration and renal clearance

> ⏱ ~15 min · Module 3: Renal and endocrine regulation · Builds on: [2.3](02-03-hemodynamics-blood-pressure.md) · Unlocks: 3.2 (tubular transport and concentrating the urine)

## Why this matters

The kidney is the only organ that regulates by **subtraction**. Everything else in the body works by adding a specific mechanism for a specific job — a transporter for glucose, a channel for $\text{Ca}^{2+}$, a receptor for a hormone. The kidney does the opposite: **it throws away a fifth of the plasma passing through it, indiscriminately, and then decides what to take back.**

That single design choice is why you can eat a novel drug, a novel toxin, or a metabolite your species has never encountered, and excrete it without owning any machinery that recognizes it. **A substance the kidney has no transporter for is excreted by default.** The body only had to evolve reclamation systems for the things it wants to keep — which is a much shorter list than the things it might encounter.

The cost is enormous throughput. And the payoff, for you, is that this same design makes kidney function *measurable from a urine sample*: because filtration is indiscriminate, any substance that is filtered and then ignored reports the filtration rate directly. That is the idea of clearance, and it is the most quantitative thing in organ physiology.

## The idea

**Filter everything small, then reclaim almost all of it.** The numbers are absurd and worth sitting with:

| | Rate | Per day |
|---|---|---|
| Plasma filtered (GFR) | 125 mL/min | **180 L** |
| Urine produced | ~1 mL/min | ~1.5 L |
| Fraction of filtered water reabsorbed | — | **99.2 percent** |

Your total plasma volume is about 3 L. **You filter your entire plasma volume roughly sixty times a day** and take back more than 99 percent of it. The kidneys are about 0.4 percent of your body mass and receive about 20–25 percent of resting cardiac output — not because they need the oxygen (they extract very little of it) but because **flow *is* the substrate here**: the kidney's job is to process plasma, so plasma delivery is the raw material.

**The anatomical fact everything else follows from: two capillary beds in series, with an adjustable resistor between them.** Blood enters a nephron through the **afferent arteriole**, passes through the **glomerulus** (capillary bed one), leaves through the **efferent arteriole**, and then passes through the **peritubular capillaries** (capillary bed two) that wrap the tubule before draining to the renal vein.

**No other organ is plumbed this way.** Everywhere else a capillary bed drains into a venule. Here, an arteriole sits *between* two capillary beds, and its tone can be set independently of the arteriole upstream. Two knobs, two capillary beds, and therefore independent control of *flow* and *filtration pressure* — which is exactly what a filtration organ needs and what the rest of this lesson exploits.

**The division of labour between the two beds is complete.** Bed one is at high hydrostatic pressure and does nothing but filter. Bed two is at low hydrostatic pressure and high oncotic pressure (its plasma just lost a fifth of its water and kept all its protein) — so it does nothing but *reabsorb*. **The efferent arteriole is what makes the second bed a sponge**, by converting pressure into flow resistance.

## The formal version

### The filtration barrier: size and charge

Filtrate crosses three layers:

1. **Fenestrated endothelium** — capillary cells riddled with pores ~70–100 nm across. Stops blood cells, nothing else.
2. **Glomerular basement membrane** — a collagen-IV mesh studded with heparan sulfate proteoglycans, which carry **fixed negative charge**.
3. **Podocyte foot processes**, interdigitating and bridged by **slit diaphragms** (nephrin, podocin) — the true size-selective step.

The result is a filter with two independent criteria:

$$\text{freely filtered if } r_{\text{eff}} \lesssim 2\ \text{nm } (\approx 7\ \text{kDa}); \qquad \text{essentially excluded if } r_{\text{eff}} \gtrsim 4\ \text{nm } (\approx 70\ \text{kDa})$$

*In words: water, ions, glucose, urea, amino acids and small peptides pass as if the barrier weren't there; proteins do not.*

**Charge matters as much as size.** Albumin has an effective radius of about 3.6 nm — inside the "restricted but not excluded" window — but it is also strongly anionic at blood pH, and the barrier's fixed negative charge repels it. **So albumin is doubly excluded, and the filtrate is essentially protein-free.**

**This is why proteinuria is diagnostic rather than incidental.** Albumin in the urine means the barrier itself has changed, and *which* protein appears tells you how: selective loss of albumin alone points at the charge barrier (the podocyte's anionic coat), while loss of larger proteins too means the structural, size-selective layer has failed.

### Filtration is Starling forces — 2.3, applied at 60 mmHg

[Lesson 2.3](02-03-hemodynamics-blood-pressure.md) gave the Starling equation for any capillary: net fluid movement is driven by hydrostatic pressure pushing out and oncotic pressure pulling back. The glomerulus is the same equation with one simplification and one exaggeration.

$$\text{NFP} = \underbrace{P_{GC}}_{\text{out}} - \underbrace{P_{BS}}_{\text{back}} - \underbrace{\pi_{GC}}_{\text{back}} \;+\; \underbrace{\pi_{BS}}_{\approx\,0}$$

where $P_{GC}$ is glomerular capillary hydrostatic pressure, $P_{BS}$ the hydrostatic pressure in Bowman's space, $\pi_{GC}$ the plasma oncotic pressure in the glomerular capillary, and $\pi_{BS}$ the oncotic pressure of the filtrate.

**The simplification:** $\pi_{BS} \approx 0$, because the filtrate is protein-free. In a systemic capillary this term is a nuisance; here it vanishes, and the balance has only three terms.

**The exaggeration:** $P_{GC} \approx 60$ mmHg, roughly double a systemic capillary's. That is what the efferent arteriole buys — a capillary bed held at arterial-ish pressure because its outflow is throttled.

$$\text{NFP} = 60 - 18 - 32 = 10\ \text{mmHg}$$

*In words: filtration is driven by a net push of only 10 mmHg — a small difference between three large numbers.* **Every perturbation in this lesson is a perturbation of a 10 mmHg margin, which is why the kidney is so sensitive and needs so much autoregulation.**

$$\boxed{\;\text{GFR} = K_f \times \text{NFP} = 12.5\ \tfrac{\text{mL/min}}{\text{mmHg}} \times 10\ \text{mmHg} = 125\ \text{mL/min}\;}$$

$K_f$, the **filtration coefficient**, is surface area times hydraulic permeability. It is enormous compared with a systemic capillary bed of the same size — the glomerulus is built to leak.

**Oncotic pressure rises along the capillary.** Filtration removes water and leaves protein behind, so plasma protein concentrates as blood traverses the tuft. If a fraction $FF$ of the plasma is filtered off, protein conservation gives approximately

$$\pi_{\text{efferent}} \approx \frac{\pi_{\text{afferent}}}{1 - FF}, \qquad \frac{28}{1-0.2} = 35\ \text{mmHg}$$

so $\pi_{GC}$ climbs from about 28 mmHg at the afferent end to about 36 at the efferent end, and **NFP falls from about 14 mmHg to about 6 along the length of a single capillary.** The 32 above is an average, not a constant.

**Push this far enough and you reach filtration equilibrium**: if $\pi_{GC}$ climbs all the way to $P_{GC}-P_{BS}$ before the efferent end, filtration simply stops partway along. When that happens, GFR is no longer pressure-limited but **flow-limited** — raising plasma flow raises GFR by delaying the point at which equilibrium is reached.

### The two arterioles: the single most useful piece of renal reasoning

Model the nephron's vasculature as two resistors in series between renal arterial pressure $P_a$ and renal venous pressure $P_v$, with the glomerulus sitting at the node between them. Renal plasma flow is Ohm's law from [2.3](02-03-hemodynamics-blood-pressure.md):

$$\text{RPF} = \frac{P_a - P_v}{R_A + R_E}, \qquad P_{GC} = P_a - \text{RPF}\cdot R_A$$

*In words: flow depends on the total resistance; the pressure at the glomerulus depends on how much of that resistance sits upstream of it.*

Now read off the two cases:

| Change | RPF (total resistance) | $P_{GC}$ | GFR |
|---|---|---|---|
| **Constrict afferent** ($R_A\uparrow$) | falls | **falls** (more drop upstream) | **falls** |
| **Constrict efferent** ($R_E\uparrow$) | falls | **rises** (more drop downstream) | **rises** |

$$\boxed{\;\text{Afferent constriction lowers flow and GFR together. Efferent constriction lowers flow but } \textbf{raises} \text{ GFR.}\;}$$

**This is the whole logic of angiotensin II at the kidney.** Angiotensin II preferentially constricts the **efferent** arteriole, which is a strange thing to do unless you understand the plumbing: it lets a volume-depleted body cut renal blood flow (sparing volume for the brain and heart) *while defending glomerular filtration*. It is a controller that trades flow for filtration.

**And it is why blocking angiotensin II can drop GFR sharply in exactly the patients who need it.** In someone whose renal perfusion pressure is already low — dehydration, heart failure, a narrowed renal artery — filtration is being held up entirely by angiotensin-II efferent tone. Remove that tone and $P_{GC}$ falls below the oncotic pressure, and filtration stops. P3 works the numbers.

### Autoregulation: feedback again, but on a surprising variable

Renal blood flow and GFR are held nearly constant across mean arterial pressures from roughly 80 to 180 mmHg. Two mechanisms do it, both acting on the **afferent** arteriole:

- **Myogenic response** — vascular smooth muscle contracts when stretched, so a pressure rise auto-constricts the vessel that feels it. Fast, local, and not specific to the kidney.
- **Tubuloglomerular feedback (TGF)** — the **macula densa**, a plaque of cells where each nephron's own distal tubule comes back and touches its own glomerulus, senses $\text{NaCl}$ arriving in the distal tubule (via the $\text{Na}^+\text{-K}^+\text{-2Cl}^-$ cotransporter). High distal $\text{NaCl}$ → paracrine signal (ATP/adenosine) → **afferent constriction** → GFR falls.

**TGF is [1.1](01-01-homeostasis-feedback-control.md)'s negative feedback loop with every part named:** sensor = macula densa, controlled variable = distal $\text{NaCl}$ delivery, effector = afferent arteriolar smooth muscle, and the loop is negative because the correction opposes the error.

**But notice what the controlled variable actually is.** TGF does not measure GFR. It measures *distal delivery* — how much filtrate is arriving at the end of the loop of Henle. GFR is regulated only as a side effect of regulating that. **This is the right design**, because the danger is not a high GFR as such; it is filtrate arriving downstream faster than the tubule can reclaim it. The kidney regulates the quantity that would actually hurt it. Each nephron runs its own private copy of this loop — 1.2 million independent controllers.

### Clearance: a virtual volume, not a concentration

**Definition.** The clearance of substance X is the volume of plasma that would have to be *completely stripped* of X per unit time to account for the amount appearing in the urine:

$$\boxed{\;C_X = \frac{U_X \dot{V}}{P_X}\;}$$

with $U_X$ the urine concentration of X, $\dot{V}$ the urine flow rate, and $P_X$ the plasma concentration.

*In words: divide the rate at which X is leaving in the urine by the concentration it came from, and you get a volume of plasma per unit time.*

**Check the units, because this is where the concept is usually lost:**

$$\frac{(\text{mg/mL})\times(\text{mL/min})}{(\text{mg/mL})} = \text{mL/min}$$

**Clearance is a rate with units of volume per time.** It is not a concentration, not a fraction, not a percentage. And the volume is *virtual* — no actual millilitre of plasma is ever fully stripped of anything. The real process is that a little X is removed from a lot of plasma; clearance is the equivalent bookkeeping.

**The GFR markers:**

| Marker | Filtered? | Reabsorbed? | Secreted? | $C$ equals |
|---|---|---|---|---|
| **Inulin** | freely | no | no | **GFR exactly** |
| **Creatinine** | freely | no | ~10–15 percent | GFR, overestimated ~10–20 percent |
| **PAH** | freely | no | heavily (~90 percent extracted per pass) | **renal plasma flow** (effective) |

**Inulin is the ideal marker for a reason you can now state precisely**: if a substance is filtered and then neither added to nor removed from the tubule, then everything appearing in the urine got there by filtration, so its clearance *is* the filtration rate. It requires a constant intravenous infusion, which is why it is a research method, not a clinic method.

**Creatinine is the practical one.** It is produced at a near-constant rate by muscle, needs no infusion, and is freely filtered. But proximal tubular organic-cation transporters secrete a little of it, so **more creatinine appears in the urine than filtration alone delivered, and $C_{cr}$ runs about 10–20 percent above true GFR.**

**PAH measures flow, not filtration.** Para-aminohippurate is filtered *and* avidly secreted, so that nearly all of it is removed in a single pass through the kidney. If essentially all the PAH entering is removed, then the volume of plasma cleared per minute is essentially the volume of plasma *entering* per minute:

$$C_{\text{PAH}} \approx \text{effective RPF}, \qquad \text{true RPF} = \frac{C_{\text{PAH}}}{E_{\text{PAH}}}, \quad E_{\text{PAH}}\approx 0.9$$

$$\textbf{Filtration fraction} \quad FF = \frac{\text{GFR}}{\text{RPF}} \approx \frac{125}{600} \approx 0.2$$

*In words: a fifth of the plasma entering the glomerulus is squeezed out as filtrate; four fifths continue into the peritubular capillaries.*

### The clearance ratio: a diagnostic in one division

Since $C_{\text{inulin}} = \text{GFR}$, dividing any substance's clearance by inulin's asks a sharp question: *did more or less of this substance appear in the urine than filtration alone would have delivered?*

$$\frac{C_X}{C_{\text{inulin}}} \;=\; \frac{\text{amount excreted}}{\text{amount filtered}}$$

| Ratio | Verdict | Examples |
|---|---|---|
| $\approx 0$ | completely reabsorbed | glucose, amino acids |
| $< 1$ | **net reabsorbed** | $\text{Na}^+$ (~0.006), urea (~0.5) |
| $= 1$ | filtered and ignored | inulin, mannitol |
| $> 1$ | **net secreted** | creatinine (~1.15), PAH (~5) |

**A ratio above 1 cannot be produced by reabsorption at all**, no matter how little of it there is — it is positive evidence of secretion. That asymmetry is what makes the ratio a diagnostic rather than a description.

### Mass balance closes the loop

Everything above is one identity applied to a single solute:

$$\boxed{\;\underbrace{U_X\dot{V}}_{\text{excreted}} \;=\; \underbrace{\text{GFR}\times P_X}_{\text{filtered}} \;-\; \underbrace{R_X}_{\text{reabsorbed}} \;+\; \underbrace{S_X}_{\text{secreted}}\;}$$

*In words: what leaves in the urine is what was filtered, minus what the tubule took back, plus what the tubule added.* Measure the two ends and you get the tubule's net action for free. $\text{GFR}\times P_X$ is called the **filtered load** — the delivery rate of X to the tubule, in amount per time.

**One consequence deserves stating on its own.** At steady state a substance produced at a constant rate is excreted at that same rate, so for creatinine:

$$\text{production} = \text{GFR}\times P_{cr} \quad\Longrightarrow\quad P_{cr} \propto \frac{1}{\text{GFR}}$$

**Plasma creatinine is a hyperbola in GFR, not a line.** Halving GFR from 120 to 60 mL/min merely doubles plasma creatinine from, say, 0.9 to 1.8 mg/dL — a number many reference ranges still call normal. **You can lose half your filtration capacity with a creatinine that never left the normal range**, which is why creatinine is a late and insensitive marker of early kidney injury, and why the first sign of trouble is more often albumin in the urine than creatinine in the blood.

## Picture

![Three stacked panels. The top panel is a nephron schematic drawn as one line: an afferent arteriole feeds the glomerulus inside Bowman's capsule, an efferent arteriole leaves it and continues as a wavy peritubular capillary bed running to the renal vein, while below it the tubule runs from Bowman's capsule through the proximal tubule, the loop of Henle, the distal tubule and the collecting duct to urine, with a blue filtration arrow into Bowman's space, green reabsorption arrows from tubule up to the peritubular capillaries, a red secretion arrow the other way, and a green macula densa marker on the distal tubule sending a dashed tubuloglomerular feedback arrow back to the afferent arteriole. The middle panel draws the Starling balance as opposing arrows from the filtration barrier: a long outward arrow for glomerular capillary pressure of 60 mmHg against shorter inward arrows for Bowman's space pressure of 18 and plasma oncotic pressure of 32, resolving to a small net filtration pressure of 10 mmHg, beside a plot of oncotic pressure rising from 28 at the afferent end toward 36 at the efferent end so the shaded net filtration pressure narrows along the capillary. The bottom panel is a horizontal bar chart of clearance ratios against a dashed reference line at inulin equals one, with glucose near zero and urea at 0.5 shown as reabsorbed, and creatinine at 1.15 and PAH at 5.0 shown as secreted.](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — a full clearance study).** A subject is infused with inulin and PAH to steady state. Urine flow is $\dot{V} = 0.5$ mL/min. Urine inulin is 60 mg/mL, plasma inulin 0.24 mg/mL; urine PAH is 12 mg/mL, plasma PAH 0.010 mg/mL. Haematocrit is 0.45; plasma glucose is 5.0 mmol/L.

**(a) GFR.**

$$C_{\text{inulin}} = \frac{U\dot{V}}{P} = \frac{(60\ \text{mg/mL})(0.5\ \text{mL/min})}{0.24\ \text{mg/mL}} = \frac{30\ \text{mg/min}}{0.24\ \text{mg/mL}} = \mathbf{125\ \text{mL/min}}$$

Note what happened dimensionally: $U\dot{V} = 30$ mg/min is the **excretion rate**, an amount per time; dividing by the plasma concentration converts it to a volume per time.

**(b) Renal plasma flow and filtration fraction.**

$$C_{\text{PAH}} = \frac{(12)(0.5)}{0.010} = \frac{6\ \text{mg/min}}{0.010\ \text{mg/mL}} = \mathbf{600\ \text{mL/min}} = \text{effective RPF}$$

$$FF = \frac{\text{GFR}}{\text{RPF}} = \frac{125}{600} = \mathbf{0.208}$$

Correcting for incomplete extraction ($E_{\text{PAH}} = 0.90$): true RPF $= 600/0.90 = 667$ mL/min, so the honest $FF = 125/667 = 0.19$.

**(c) Renal blood flow, and the sanity check.** Plasma is the non-cell fraction of blood:

$$\text{RBF} = \frac{\text{RPF}}{1-\text{Hct}} = \frac{600}{1-0.45} = \frac{600}{0.55} = \mathbf{1091\ \text{mL/min}} \approx 1.1\ \text{L/min}$$

Against a resting cardiac output of about 5 L/min ([2.2](02-02-cardiac-cycle-and-output.md)), that is **22 percent of the entire output going to 0.4 percent of the body mass** — the check that the arithmetic is physiological.

**(d) Filtered load of glucose.**

$$\text{filtered load} = \text{GFR}\times P_{\text{glucose}} = (0.125\ \text{L/min})(5.0\ \text{mmol/L}) = \mathbf{0.625\ \text{mmol/min}}$$

Over a day: $0.625 \times 1440 = 900$ mmol $= 162$ g of glucose filtered and — since urine glucose is normally zero — **162 g of glucose reabsorbed every day**, roughly a day's worth of dietary carbohydrate, recovered from a fluid the kidney threw away on purpose. That is regulation-by-subtraction billed at full price.

**Example 2 (why you'd care — turning the two knobs).** Take renal arterial pressure $P_a = 100$ mmHg, renal venous pressure $P_v = 8$ mmHg, baseline RPF $= 0.600$ L/min and baseline $P_{GC} = 60$ mmHg. Find the two resistances, then compare a 25 percent afferent constriction with a 50 percent efferent constriction.

**(a) Extract the resistances.** The pressure drop splits at the glomerulus:

$$R_A = \frac{P_a - P_{GC}}{\text{RPF}} = \frac{100-60}{0.600} = 66.7\ \tfrac{\text{mmHg}\cdot\text{min}}{\text{L}}, \qquad R_E = \frac{P_{GC}-P_v}{\text{RPF}} = \frac{60-8}{0.600} = 86.7\ \tfrac{\text{mmHg}\cdot\text{min}}{\text{L}}$$

Check: $\text{RPF} = 92/(66.7+86.7) = 92/153.4 = 0.600$ L/min ✓

**(b) Afferent constriction, $R_A \to 83.3$.**

$$\text{RPF} = \frac{92}{83.3+86.7} = \frac{92}{170.0} = 0.541\ \text{L/min}, \qquad P_{GC} = 100 - (0.541)(83.3) = \mathbf{54.9\ \text{mmHg}}$$

**(c) Efferent constriction, $R_E \to 130.0$.**

$$\text{RPF} = \frac{92}{66.7+130.0} = \frac{92}{196.7} = 0.468\ \text{L/min}, \qquad P_{GC} = 100 - (0.468)(66.7) = \mathbf{68.8\ \text{mmHg}}$$

**(d) Read it off.**

| | RPF (mL/min) | $P_{GC}$ (mmHg) | GFR |
|---|---|---|---|
| baseline | 600 | 60.0 | 125 |
| afferent $\times 1.25$ | 541 ↓ | 54.9 ↓ | **↓ hard** |
| efferent $\times 1.5$ | 468 ↓ | 68.8 ↑ | **↑** |

**Both manoeuvres cut renal plasma flow. They move GFR in opposite directions.** The reason is entirely geometric: $P_{GC}$ is the pressure at the *node between* the resistors, so raising the upstream resistance drops it and raising the downstream resistance lifts it.

**How big are the GFR swings?** Holding $\pi_{GC}$ at 32 as a first pass, the afferent case gives NFP $= 54.9-18-32 = 4.9$ mmHg, so GFR $\approx 61$ mL/min; the efferent case gives NFP $= 18.8$ mmHg, so GFR $\approx 235$ mL/min. **Both of those overstate the swing**, because $\pi_{GC}$ is not a constant: it tracks filtration fraction through $\pi_{\text{eff}} = \pi_{\text{aff}}/(1-FF)$. Solving self-consistently (P3 does this arithmetic in the harder direction) gives about **81 mL/min** for the afferent case and about **179 mL/min** for the efferent case.

**The oncotic term is itself a negative feedback**, and a fast one: filter more → concentrate the protein more → raise $\pi_{GC}$ → oppose further filtration. It damps every perturbation in this table before any nerve or hormone has heard about it. **The signs, though, are unaffected — and the signs are the whole clinical content.**

## Watch out

- **You might treat clearance as a concentration, or as "the fraction removed."** It is neither. It is a **volume of plasma per unit time** — a virtual volume, since no plasma is ever actually stripped clean. A clearance of 125 mL/min and a clearance of 600 mL/min are both rates; the second just means the kidney is emptying a larger notional volume each minute.
- **You might assume constricting an arteriole always lowers GFR.** It depends on *which* arteriole, because $P_{GC}$ is a node voltage: afferent constriction lowers flow and filtration together, **efferent constriction lowers flow but raises filtration.** Getting this backwards is the single most consequential error available in renal physiology.
- **You might hold $\pi_{GC}$ fixed while perturbing the glomerulus.** It rises along the capillary as the plasma concentrates, and it rises *further* whenever filtration fraction rises. Fixing it exaggerated the efferent-constriction GFR by about 30 percent in Example 2 (235 versus 179 mL/min).
- **You might read a normal creatinine as a normal kidney.** $P_{cr} \propto 1/\text{GFR}$, so GFR has to fall by roughly half before creatinine visibly leaves its range. And because creatinine is made by muscle, a frail person can have a "normal" creatinine with badly reduced GFR — the numerator fell along with the denominator.
- **You might expect proteinuria to mean physically bigger holes.** Albumin is excluded by charge as well as size, so **losing the anionic coat alone produces heavy albuminuria through a structurally intact-looking barrier** — which is exactly the minimal-change picture.
- **You might think GFR always follows $P_{GC}$.** Once $\pi_{GC}$ reaches $P_{GC}-P_{BS}$ partway along the capillary, filtration stops there and GFR becomes **flow-limited** rather than pressure-limited: from that regime, raising renal plasma flow raises GFR.

## One-liner

> The kidney filters 180 litres a day on a net push of 10 mmHg and takes back 99 percent of it — so filtration is Starling forces at a capillary whose outflow is throttled by an arteriole, GFR is whatever that arteriole and its partner decide the node pressure should be, and clearance $C = U\dot{V}/P$ converts a urine sample into a rate of volume per time that, divided by inulin's, tells you whether the tubule reabsorbed or secreted anything at all.

## Problems

**P1 (🟢)** Inulin is infused to steady state. Urine inulin is 30 mg/mL, urine flow is 1.2 mL/min, plasma inulin is 0.30 mg/mL. (a) Compute GFR, stating units. (b) Plasma $\text{Na}^+$ is 142 mmol/L. Compute the filtered load of $\text{Na}^+$ in mmol/min. (c) If 0.15 mmol/min of $\text{Na}^+$ is excreted, what fraction of the filtered load was reabsorbed? (d) Express the daily filtered $\text{Na}^+$ as a mass of NaCl (58.44 g/mol) and comment.

**P2 (🟡)** Same subject as P1 (GFR = 120 mL/min, $\dot{V} = 1.2$ mL/min). A drug X has plasma concentration 0.020 mg/mL and urine concentration 3.6 mg/mL. (a) Compute $C_X$ and the clearance ratio $C_X/C_{\text{inulin}}$. (b) Using mass balance, compute the filtered load, the excretion rate, and the net rate of tubular secretion or reabsorption, in mg/min. (c) Could this ratio have been produced by reabsorption? (d) A second drug Y, same plasma concentration, has urine concentration 0.60 mg/mL. Repeat (a) and (b) for Y and say what the tubule did.

**P3 (🔴, bridges to 3.3 and to control theory)** A patient has bilateral renal artery narrowing: renal arterial pressure is 75 mmHg instead of 100. Use Example 2's resistances ($R_A = 66.7$, $R_E = 86.7\ \text{mmHg}\cdot\text{min/L}$), $P_v = 8$ mmHg, $P_{BS} = 18$ mmHg, $\pi_{GC} = 32$ mmHg, $K_f = 12.5\ \text{mL}/(\text{min}\cdot\text{mmHg})$.

(a) With resistances unchanged, compute RPF, $P_{GC}$, NFP and GFR. Interpret the sign.
(b) Angiotensin II now doubles efferent resistance to $173.3$. Recompute RPF, $P_{GC}$, NFP, GFR and the filtration fraction.
(c) The patient is started on a drug that blocks angiotensin II, and their creatinine rises sharply within days. Explain the mechanism in two sentences.
(d) Identify the sensor, controlled variable, and effector of the loop angiotensin II is closing here, and say why this controller is dangerous to interrupt but useful to have.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$C_{\text{inulin}} = \frac{U\dot{V}}{P} = \frac{(30\ \text{mg/mL})(1.2\ \text{mL/min})}{0.30\ \text{mg/mL}} = \frac{36\ \text{mg/min}}{0.30\ \text{mg/mL}} = \mathbf{120\ \text{mL/min}}$$

Since inulin is filtered and then neither reabsorbed nor secreted, $\text{GFR} = 120$ mL/min. **The units are volume per time**, not a concentration.

**(b)**

$$\text{filtered load} = \text{GFR}\times P_{\text{Na}} = (0.120\ \text{L/min})(142\ \text{mmol/L}) = \mathbf{17.04\ \text{mmol/min}}$$

**(c)** Reabsorbed $= 17.04 - 0.15 = 16.89$ mmol/min.

$$\text{fraction reabsorbed} = \frac{16.89}{17.04} = 0.9912 = \mathbf{99.1\ \text{percent}}$$

**(d)**

$$17.04\ \tfrac{\text{mmol}}{\text{min}} \times 1440\ \tfrac{\text{min}}{\text{day}} = 24{,}538\ \text{mmol/day} = 24.5\ \text{mol/day}$$

$$24.5\ \text{mol} \times 58.44\ \text{g/mol} = \mathbf{1.43\ \text{kg of NaCl per day}}$$

**You filter and re-absorb about one and a half kilograms of salt a day.** Your entire extracellular fluid holds roughly 2 mol of $\text{Na}^+$ (14 L at 140 mmol/L), so **the filtered load is about twelve times your whole body's sodium, every day.**

Two things follow. First, this is what regulation-by-subtraction costs — most of the kidney's ATP budget goes on reabsorbing sodium it deliberately threw away. Second, **it gives extraordinary control resolution**: shifting reabsorption by 1 percent changes daily sodium excretion by 245 mmol, more than a typical day's intake. The kidney can retune whole-body sodium balance with a rounding error on a huge flux ([3.3](03-03-fluid-electrolyte-acid-base.md)).

**P2 (a)**

$$C_X = \frac{(3.6\ \text{mg/mL})(1.2\ \text{mL/min})}{0.020\ \text{mg/mL}} = \frac{4.32\ \text{mg/min}}{0.020\ \text{mg/mL}} = \mathbf{216\ \text{mL/min}}$$

$$\frac{C_X}{C_{\text{inulin}}} = \frac{216}{120} = \mathbf{1.8}$$

**(b)**

$$\text{filtered load} = (120\ \text{mL/min})(0.020\ \text{mg/mL}) = 2.40\ \text{mg/min}$$
$$\text{excretion} = U\dot{V} = (3.6)(1.2) = 4.32\ \text{mg/min}$$
$$\text{net secretion} = 4.32 - 2.40 = \mathbf{1.92\ \text{mg/min}}$$

The tubule added 1.92 mg/min — **80 percent more than filtration delivered.**

**(c) No.** Reabsorption can only remove solute from the tubule, so it can only push the excretion rate *below* the filtered load, i.e. the ratio below 1. **Any ratio above 1 is positive proof of secretion**, and no amount of simultaneous reabsorption changes that conclusion — the ratio reports only the *net* result, and the net here is addition.

(Two caveats worth knowing: a ratio of 1.8 means the drug is cleared faster than filtration, so its dosing depends on tubular secretory transporters, not just GFR — and a second drug competing for the same organic-anion transporter will raise its plasma level. This is the mechanism behind classic transporter-competition drug interactions, and it is the same transporter family that handles PAH.)

**(d)** For Y:

$$C_Y = \frac{(0.60)(1.2)}{0.020} = \frac{0.72\ \text{mg/min}}{0.020\ \text{mg/mL}} = \mathbf{36\ \text{mL/min}}, \qquad \frac{C_Y}{C_{\text{inulin}}} = \frac{36}{120} = \mathbf{0.3}$$

$$\text{filtered} = 2.40\ \text{mg/min}, \quad \text{excreted} = 0.72\ \text{mg/min}, \quad \text{net reabsorbed} = \mathbf{1.68\ \text{mg/min}}$$

**The tubule reclaimed 70 percent of the filtered load.** Same plasma concentration, same GFR, same urine flow — and opposite tubular verdicts, read off from one division.

**P3 (a)** With $\Delta P = 75 - 8 = 67$ mmHg and $R_A + R_E = 153.4\ \text{mmHg}\cdot\text{min/L}$:

$$\text{RPF} = \frac{67}{153.4} = 0.437\ \text{L/min} = 437\ \text{mL/min}$$

$$P_{GC} = 75 - (0.437)(66.7) = 75 - 29.1 = 45.9\ \text{mmHg}$$

$$\text{NFP} = 45.9 - 18 - 32 = \mathbf{-4.1\ \text{mmHg}}$$

**Negative net filtration pressure means no filtration at all: GFR = 0.** The oncotic pull now exceeds the hydrostatic push, so fluid would move *into* the capillary if anything moved. (The conclusion is robust to the fixed-$\pi$ approximation: even at the afferent value $\pi = 28$, the push $P_{GC}-P_{BS} = 27.9$ mmHg still fails to clear it.)

**A 25 percent fall in perfusion pressure abolished filtration** — because it was riding on a 10 mmHg margin.

**(b)** With $R_E = 173.3$, total resistance $= 66.7 + 173.3 = 240.0$:

$$\text{RPF} = \frac{67}{240.0} = 0.279\ \text{L/min} = \mathbf{279\ \text{mL/min}}$$

$$P_{GC} = 75 - (0.279)(66.7) = 75 - 18.6 = \mathbf{56.4\ \text{mmHg}}$$

$$\text{NFP} = 56.4 - 18 - 32 = 6.4\ \text{mmHg}, \qquad \text{GFR} = 12.5 \times 6.4 = \mathbf{80\ \text{mL/min}}$$

$$FF = \frac{80}{279} = \mathbf{0.29}$$

(Solving self-consistently with $\pi_{\text{eff}} = 28/(1-FF)$ instead of a fixed 32 gives about 71 mL/min at $FF \approx 0.25$ — same story, slightly damped.)

**Read the trade.** Renal plasma flow has fallen from 600 to 279 mL/min — **less than half** — while GFR has been restored from zero to about two-thirds of normal. **Angiotensin II bought filtration with flow.** That is the only currency available once perfusion pressure is fixed and low: total resistance must go up either way, and the efferent arteriole is the only place to put it that raises $P_{GC}$ instead of lowering it.

The rising filtration fraction is not a side effect but a second payoff: more filtration from less plasma means the blood entering the peritubular capillaries is unusually protein-rich, which raises *their* oncotic pressure and drives extra proximal reabsorption. **The same manoeuvre that defends GFR also defends volume**, downstream, by exactly the Starling logic of [2.3](02-03-hemodynamics-blood-pressure.md) applied to capillary bed two.

**(c)** **Filtration in this patient was being held up entirely by angiotensin-II efferent tone.** Blocking angiotensin II relaxes the efferent arteriole, $P_{GC}$ falls back toward the 45.9 mmHg of part (a) — below the oncotic pressure — and GFR collapses; since $P_{cr} \propto 1/\text{GFR}$, plasma creatinine climbs steeply within days.

**The apparent paradox is worth naming:** this class of drug is *protective* of kidneys in most people (it lowers $P_{GC}$, and chronically high $P_{GC}$ is what destroys glomeruli), and *harmful* in this patient — the same mechanism, opposite sign, decided entirely by whether the patient's filtration currently depends on efferent tone. **A drug's effect is not a property of the drug; it is a property of the loop it is inserted into.**

**(d)** The loop:

| Element | Identity |
|---|---|
| **Sensor** | juxtaglomerular granular cells (afferent arteriolar stretch) and the macula densa (low distal $\text{NaCl}$) |
| **Controlled variable** | effective arterial blood volume / renal perfusion, reported indirectly |
| **Controller signal** | renin → angiotensin I → angiotensin II |
| **Effector** | efferent arteriolar smooth muscle (plus vasoconstriction, aldosterone, thirst, ADH — [3.3](03-03-fluid-electrolyte-acid-base.md)) |

**Why it is useful:** it is a feedforward-plus-feedback controller for the one variable the body cannot afford to lose — circulating volume — and its renal arm lets the kidney keep filtering (and therefore keep excreting waste) while the rest of the body's blood flow is being rationed.

**Why interrupting it is dangerous here:** a controller working near its authority limit has no reserve. In a healthy person, efferent tone is a small correction on a large margin, and removing it costs little. In this patient it *is* the margin — the loop is saturated, running at full effort to hold GFR barely above zero — so removing it produces the full uncorrected error at once. **This is the general lesson of [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md): a well-regulated variable tells you nothing about how hard the controller is working, and the cost of opening the loop is invisible until you open it.**

</details>

## Flashback

**From Lesson 2.3 (hemodynamics and blood pressure regulation):** A 68-year-old has a blood pressure of 158/72 mmHg at a heart rate of 60/min, with a stroke volume of 82 mL and a right atrial pressure of 4 mmHg.

(a) Compute pulse pressure and mean arterial pressure (use $\text{MAP} \approx \text{DBP} + PP/3$).
(b) Estimate arterial compliance, and compare it with a young adult's value of about 1.75 mL/mmHg.
(c) Compute total peripheral resistance. Then say, in one sentence each, what is actually abnormal about this circulation and why the baroreflex is likely to be *less* effective in this person than in a 25-year-old.

<details>
<summary>Solution</summary>

**(a)**

$$PP = P_{\text{sys}} - P_{\text{dia}} = 158 - 72 = \mathbf{86\ \text{mmHg}}$$

$$\text{MAP} \approx 72 + \tfrac{86}{3} = 72 + 28.7 = \mathbf{100.7\ \text{mmHg}}$$

The weighting is one-third systolic, two-thirds diastolic because the heart spends about twice as long in diastole as in systole.

**(b)** Pulse pressure is the volume ejected divided by the compliance it is ejected into, $PP = SV/C_{\text{art}}$, so

$$C_{\text{art}} = \frac{SV}{PP} = \frac{82\ \text{mL}}{86\ \text{mmHg}} = \mathbf{0.95\ \text{mL/mmHg}}$$

$$\frac{0.95}{1.75} = 0.55 \quad\Longrightarrow\quad \textbf{about 45 percent stiffer than a young adult's aorta.}$$

**(c)** $\text{CO} = (60\ \text{min}^{-1})(82\ \text{mL}) = 4.92$ L/min, so

$$\text{TPR} = \frac{\text{MAP} - \text{RAP}}{\text{CO}} = \frac{100.7 - 4}{4.92} = \mathbf{19.7\ \tfrac{\text{mmHg}\cdot\text{min}}{\text{L}}}$$

**What is abnormal:** TPR is essentially normal and cardiac output is normal — so **this is isolated systolic hypertension, a compliance problem rather than a resistance problem.** The arteries are not too narrow; they are too stiff to absorb a normal stroke volume, so the same ejection produces double the pulse.

**Why the baroreflex weakens:** baroreceptors are **stretch** receptors, not pressure receptors, so a stiff artery deforms less for the same pressure and under-reports it — the reflex's gain falls exactly when the pressure it is meant to defend has become most volatile.

Note which quantity is *not* explained by any of this: the mean. Pulse pressure is set by compliance and stroke volume, but MAP is set over weeks by the kidney's control of blood volume ([3.3](03-03-fluid-electrolyte-acid-base.md)) — the slow, high-gain loop whose front end is the filtration machinery of this lesson.

</details>

## Connections

- **Backward:** the Starling equation and the pressure–flow–resistance law of [2.3](02-03-hemodynamics-blood-pressure.md) are used here verbatim — the glomerulus is just a capillary with $\pi_{BS} = 0$ and a resistor bolted to its outflow; [1.1](01-01-homeostasis-feedback-control.md)'s sensor–controller–effector template is what tubuloglomerular feedback instantiates; the cardiac output of [2.2](02-02-cardiac-cycle-and-output.md) is what the 22 percent renal share is measured against.
- **Forward:** [3.2](03-02-tubular-transport-concentrating-urine.md) takes the 180 L/day this lesson produced and explains how 99 percent of it is reclaimed — the filtered loads computed here are its inputs; [3.3](03-03-fluid-electrolyte-acid-base.md) closes the RAAS loop that P3 opened; [3.4](03-04-endocrine-axes.md) generalizes that loop into the shape every hormonal axis takes; [4.3](04-03-exercise-integrative-physiology.md) is where renal flow is sacrificed on purpose.
- **Sideways:** the two-resistor node argument is literally a voltage divider — the same algebra as a resistive divider in [circuits 1.4](../../circuits/lessons/01-04-voltage-current-dividers.md), with pressure for voltage and flow for current; the $r^4$ law behind arteriolar control comes out of the Hagen–Poiseuille solution derived in [transport-phenomena 2.2](../../transport-phenomena/lessons/02-02-shell-balances-tube-annulus.md); and P3's "a well-regulated variable hides how hard the controller is working" is the control-engineering notion of **controller authority and saturation** from [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md).

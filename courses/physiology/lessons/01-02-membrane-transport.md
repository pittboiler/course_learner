# Human Physiology · Lesson 1.2: Transport across the cell membrane

> ⏱ ~15 min · Module 1: Homeostasis, cells, and excitable tissue · Builds on: [1.1](01-01-homeostasis-feedback-control.md) · Unlocks: 1.3 (the resting membrane potential)

## Why this matters

[1.1](01-01-homeostasis-feedback-control.md) gave you the shape of every mechanism in this course — sensor, controller, effector. This lesson gives you the **effector that never switches off.** Nearly every controlled variable in the body (a voltage, a plasma sodium, a urine volume, a blood glucose) is ultimately defended by moving a solute across a membrane, and there are only a handful of ways to do that.

The goal is narrow and worth stating exactly: **given any solute and any membrane, you should be able to say which way it moves and whether it costs ATP.** That is three questions — is there a route, which way does the gradient point, and who paid for the gradient — and by the end of this lesson each has a one-line answer.

The payoff is immediate. Lesson [1.3](01-03-resting-membrane-potential.md) computes the resting voltage from ion gradients that *this* lesson explains the existence of. Module 3's kidney is one long exercise in transport maxima and osmosis. And the single most surprising fact here — **that a cell which stops making ATP swells until it bursts** — is the mechanism behind ischemic injury in every organ.

## The idea

**Start with the barrier.** The lipid bilayer is roughly 4 nm of oil ([biophysics 3.4](../../biophysics/lessons/03-04-self-assembly-hydrophobic.md), [3.5](../../biophysics/lessons/03-05-membrane-mechanics.md)). To cross it unaided, a molecule must first *dissolve in oil*. So the question "can it cross?" is really the question "how happily does it leave water for grease?" — and the answer sorts everything:

| Crosses unaided? | Examples | Why |
|---|---|---|
| Easily | O₂, CO₂, N₂, steroid hormones, anesthetics | nonpolar; oil is home |
| Slowly | water, urea, glycerol, ethanol | small and uncharged; squeeze through |
| Barely | glucose, amino acids | polar and bulky |
| Essentially never | Na⁺, K⁺, Ca²⁺, Cl⁻, H⁺ | charged; stripping the hydration shell costs a fortune |

**That last row is the whole reason physiology exists.** A bare bilayer's permeability to an ion is roughly ten orders of magnitude below its permeability to a lipophilic drug. The cell therefore gets to *choose* when ions move, by installing proteins — and a variable the cell controls is a variable it can regulate.

**There are exactly two kinds of protein route, and the distinction is structural.** A **channel** is a hole open at both ends at once: an ion falls through. A **carrier** is never open to both sides simultaneously — it binds the solute on one face, changes shape, and releases it on the other (*alternating access*). That single structural fact predicts everything else:

- A hole has no cycle time, so a channel passes $10^6$–$10^8$ ions per second and its flux stays **proportional to the driving force** no matter how large the gradient gets.
- A carrier must complete a conformational cycle for every few molecules, so it passes $10^2$–$10^4$ per second — **three to five orders of magnitude slower** — and, crucially, **it saturates**: once every carrier is busy, adding more solute adds no more flux.

**Saturation is the signature of a binding site**, and it brings its two companions with it: **competitive inhibition** (a lookalike solute occupying the site) and **stereospecificity** (D-glucose transported, L-glucose ignored). If a transport process saturates, something binds; if it doesn't, nothing does.

**Now the energetics.** Passive transport — through the bilayer or through a channel or a facilitating carrier — runs *downhill* and is free. Uphill transport needs a source of energy, and there are only two:

1. **Primary active transport** burns ATP directly. The dominant example is the **Na⁺/K⁺-ATPase**, which throws 3 Na⁺ out and hauls 2 K⁺ in per ATP.
2. **Secondary active transport** burns *nothing directly*. It lets Na⁺ fall back in down the gradient the pump just built, and harnesses that fall to drag something else uphill.

**Here is the sentence to remember: ATP is paid once, upstream, and then spent as a currency.** The pump converts ATP into a Na⁺ gradient; the Na⁺ gradient is then a rechargeable battery that a dozen different transporters draw on. This is why blocking the pump silently kills glucose absorption in the gut, calcium extrusion from a cardiac myocyte, and sodium reabsorption in the kidney — none of which touch ATP themselves.

**Finally, water.** Water goes where the solute is, always, and never costs energy. But *which* solutes count depends on the membrane, and that distinction — osmolarity versus tonicity — is where nearly everyone slips.

## The formal version

### Passive flux: Fick's law in membrane form

For a barrier of thickness $\Delta x$ separating concentrations $C_o$ (outside) and $C_i$ (inside), the steady-state profile inside the barrier is linear, so [Fick's first law](../../biophysics/lessons/01-03-diffusion-ficks-laws.md) collapses to

$$J = P\,(C_o - C_i), \qquad P \equiv \frac{K\,D_m}{\Delta x}$$

where $J$ is flux (mol per m² per second), $P$ is the **permeability** (m/s), $D_m$ is the solute's diffusion coefficient *inside the membrane*, and $K$ is the **partition coefficient** — the ratio of the solute's concentration in oil to its concentration in water at equilibrium.

*In words: flux is permeability times the concentration difference, and permeability is one number that hides three — how willing the solute is to enter the membrane, how fast it moves once inside, and how far it has to go.*

**The one to watch is $K$.** $D_m$ and $\Delta x$ vary over maybe one order of magnitude across biological solutes; $K$ varies over ten. **Permeability is essentially lipid solubility wearing a lab coat** — this is Overton's rule, noticed in 1899 and still the first thing a medicinal chemist checks.

Two consequences worth naming. First, $J = 0$ when $C_o = C_i$: **passive transport can only ever erase a gradient, never build one.** Second, for a charged solute the driving force is not $\Delta C$ alone but the *electrochemical* gradient, concentration plus voltage — that is [1.3](01-03-resting-membrane-potential.md)'s subject and [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) derives it properly.

### Carriers: the saturating curve

A carrier's flux follows the same hyperbola as an enzyme's rate, and for the same reason — a finite number of binding sites ([biophysics 4.2](../../biophysics/lessons/04-02-michaelis-menten.md)):

$$J = \frac{J_{\max}\,[S]}{K_m + [S]}$$

*In words: flux rises linearly at low concentration, bends over, and flattens at $J_{\max}$ once every carrier is occupied; $K_m$ is the concentration giving half-maximal flux.*

Scaled up from one membrane to a whole organ, $J_{\max}$ becomes the **transport maximum $T_m$** — the largest amount of solute per minute that a tissue can move. **This is not an abstraction: it is why a diabetic spills sugar into the urine.** Filtered glucose is reabsorbed by carriers with a finite $T_m$; exceed it and the surplus leaves in the urine. Lesson [3.2](03-02-tubular-transport-concentrating-urine.md) does this quantitatively, and P2 below gives you a preview.

### Primary active transport: the Na⁺/K⁺-ATPase

$$3\,\text{Na}^+_{\text{in}} + 2\,\text{K}^+_{\text{out}} + \text{ATP} \;\longrightarrow\; 3\,\text{Na}^+_{\text{out}} + 2\,\text{K}^+_{\text{in}} + \text{ADP} + \text{P}_i$$

Three facts, each load-bearing:

- **The stoichiometry is 3:2, not 1:1, so each cycle exports one net positive charge.** The pump is therefore **electrogenic** — it contributes a small direct hyperpolarization, typically a few millivolts. **Do not overrate this**: the pump's real contribution to the resting potential is *indirect*, through the K⁺ gradient it maintains ([1.3](01-03-resting-membrane-potential.md)).
- **It is expensive.** Roughly a fifth to a third of a resting cell's entire ATP budget goes to this one protein, and closer to half in neurons and kidney tubule cells — tissues whose job is to move ions. A large share of your basal metabolic rate is spent standing still, holding gradients against leak.
- **It is the engine for everything.** Every gradient you will use in this course — the Na⁺ gradient, the K⁺ gradient, and through them the Ca²⁺ and H⁺ gradients and the resting voltage itself — traces back here.

Its turnover is only about 100 cycles per second, which is fine: it is fighting a slow leak, not carrying a signal.

### Secondary active transport

Two flavors, distinguished by direction:

| Type | Directions | Example | Moves |
|---|---|---|---|
| **Symport** (cotransport) | same way | **SGLT** | Na⁺ in, glucose in (uphill) |
| **Antiport** (exchange) | opposite ways | **Na⁺/Ca²⁺ exchanger (NCX)** | 3 Na⁺ in, 1 Ca²⁺ out (uphill) |

*In words: both let sodium fall in down its electrochemical gradient and use the released energy to push a second solute where it does not want to go.* SGLT is how the gut and the proximal tubule recover glucose against a steep gradient; NCX is how a cardiac myocyte gets calcium back out after each beat ([2.1](02-01-cardiac-electrophysiology.md), [1.6](01-06-muscle-contraction.md)).

**Neither hydrolyzes ATP, and neither is free.** The energy came out of the Na⁺ battery, and the pump recharges it. P3 puts a number on how much energy one Na⁺ carries.

### Osmosis: osmolarity is not tonicity

Water crosses by simple diffusion and, much faster, through **aquaporins** — channels selective for water, of order $10^9$ molecules per second each, that pass water while excluding protons. AQP1 is constitutive in red cells and the proximal tubule; **AQP2 in the collecting duct is inserted on hormonal command, which is how ADH concentrates the urine** ([3.2](03-02-tubular-transport-concentrating-urine.md)).

The osmotic pressure of a solution is given by van 't Hoff's law, modified by one crucial factor:

$$\pi = \sigma\,R\,T\,C_{\text{osm}}$$

where $C_{\text{osm}}$ is the **osmolarity** (total concentration of dissolved *particles*, so 150 mM NaCl is 300 mOsm/L because it dissociates) and $\sigma$ is the **reflection coefficient**: the fraction of that solute the membrane bounces back, running from $\sigma = 1$ (completely impermeant) to $\sigma = 0$ (crosses as freely as water).

*In words: only the solutes a membrane can actually hold back are able to pull water across it.*

This gives the definition everyone misstates:

- **Osmolarity** counts *all* particles. It is a property of the solution alone.
- **Tonicity** counts only the *effective* osmoles, $\sum \sigma_j C_j$. **It is a property of the solution and the membrane together** — the same solution can be hypotonic to one cell and isotonic to another.

**Urea is the canonical trap.** Across a red cell or a proximal tubule cell, urea has $\sigma \approx 0$ — it walks straight through, so it exerts no lasting osmotic pull. Across the blood–brain barrier, $\sigma$ for urea is near 1. **Same molecule, opposite behavior, because tonicity is not a property of the molecule.**

Body fluids sit near 290–300 mOsm/L, which sounds gentle and is not: at 300 mOsm/L and 310 K, $\pi \approx 7.6$ atm, about 5800 mmHg. **That is roughly two hundred times a capillary's hydrostatic pressure**, which is why even small osmotic imbalances move water violently and instantly.

### The pump–leak steady state: why a dead cell swells

Here is the argument that ties the lesson together, and it is genuinely surprising.

A cell is full of **impermeant anions** — proteins, nucleic acids, organic phosphates — that cannot leave. By the Gibbs–Donnan effect, those trapped charges attract permeant cations and, with them, extra osmoles. **A cell with impermeant anions and a freely permeable membrane has strictly higher internal osmolarity than its surroundings at every equilibrium.** Water would enter without limit. The cell would swell and lyse. There is no passive arrangement that saves it.

**The escape is the double-Donnan, or pump–leak, solution: make Na⁺ behave as an impermeant *extracellular* solute.** Na⁺ does leak in continuously — the membrane is not perfect — but the Na⁺/K⁺-ATPase throws it back out just as fast. Sodium is therefore *functionally* excluded from the cell, and its extracellular osmoles balance the trapped intracellular anions.

**Read the consequence carefully: cell volume is not maintained by a wall or a structure. It is maintained by continuous ATP expenditure.** Stop the pump — ouabain, hypoxia, ischemia — and Na⁺ runs downhill into the cell, intracellular osmoles rise, water follows, and the cell swells. This is cytotoxic edema, and it is why every ischemic tissue in the body swells.

### One structural note: routes through an epithelium

An epithelium (gut lining, kidney tubule) is a *sheet*, and a solute crossing it has two options:

- **Transcellular** — in through the apical membrane, out through the basolateral membrane. **Two membranes in series, each with its own transporters**, which is exactly why epithelial cells are *polarized*: SGLT sits apical, the Na⁺/K⁺-ATPase sits basolateral, and the pump keeps intracellular Na⁺ low so the symporter has a gradient to spend.
- **Paracellular** — between the cells, through the tight junctions. Selectivity here is set by which claudin proteins the junction contains. Proximal tubule junctions are "leaky" and pass a great deal; collecting duct junctions are "tight" and pass almost nothing.

Hold onto this; [3.1](03-01-glomerular-filtration-clearance.md), [3.2](03-02-tubular-transport-concentrating-urine.md), and [4.1](04-01-gastrointestinal-system.md) all depend on it.

## Picture

![Panel a plots flux against driving gradient for two routes: simple diffusion and channels give a straight line with no ceiling, while a carrier gives a hyperbola that bends over and flattens at a dashed line marked transport maximum, the two curves crossing so that the carrier is faster at low concentration and slower at high. Panel b is a membrane cartoon with outside above and inside below, showing a channel through which sodium leaks inward, the sodium potassium ATPase pushing three sodium out and two potassium in per ATP for a net one positive charge exported, and an SGLT symporter carrying sodium downhill while dragging glucose uphill without using ATP. Panel c shows a red cell of internal osmolarity 300 in three baths: 200 mOsm where it swells to 1.5 times volume, 300 mOsm where it is unchanged, and 600 mOsm where it shrinks to half volume.](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — permeability is lipid solubility).** Two solutes of similar size cross the same membrane, thickness $\Delta x = 4\ \text{nm} = 4\times10^{-9}\ \text{m}$, both with in-membrane diffusivity $D_m = 2\times10^{-11}\ \text{m}^2/\text{s}$. Solute A is nonpolar, $K = 0.1$. Solute B is polar, $K = 10^{-4}$. (a) Find each permeability. (b) Find each flux for a concentration difference of 0.5 mM. (c) How long does each take to equilibrate a spherical cell of radius 10 μm?

**(a)** $$P_A = \frac{K D_m}{\Delta x} = \frac{(0.1)(2\times10^{-11})}{4\times10^{-9}} = \frac{2\times10^{-12}}{4\times10^{-9}} = 5\times10^{-4}\ \text{m/s}.$$

$$P_B = \frac{(10^{-4})(2\times10^{-11})}{4\times10^{-9}} = 5\times10^{-7}\ \text{m/s}.$$

**(b)** Using $1\ \text{mM} = 1\ \text{mol/m}^3$, so $\Delta C = 0.5\ \text{mol/m}^3$:

$$J_A = P_A \Delta C = (5\times10^{-4})(0.5) = 2.5\times10^{-4}\ \text{mol}\,\text{m}^{-2}\text{s}^{-1}, \qquad J_B = 2.5\times10^{-7}\ \text{mol}\,\text{m}^{-2}\text{s}^{-1}.$$

**(c)** The cell fills at rate $dC_i/dt = PA(C_o - C_i)/V$, so it relaxes exponentially with time constant

$$\tau = \frac{V}{PA} = \frac{(4/3)\pi r^3}{P\,4\pi r^2} = \frac{r}{3P}.$$

$$\tau_A = \frac{10^{-5}}{3(5\times10^{-4})} = 6.7\ \text{ms}, \qquad \tau_B = \frac{10^{-5}}{3(5\times10^{-7})} = 6.7\ \text{s}.$$

**Everything in that thousandfold gap came from $K$ alone** — same size, same membrane, same gradient. And extrapolate one row further: a bare bilayer's permeability to Na⁺ is around $10^{-14}$ m/s, giving

$$\tau_{\text{Na}} = \frac{10^{-5}}{3\times10^{-14}} \approx 3\times10^{8}\ \text{s} \approx \textbf{a decade}.$$

**That is the entire justification for channels and pumps.** Left alone, ions simply do not cross on any timescale a cell cares about — which is precisely what makes them useful as signals.

**Example 2 (why you'd care — a solution that is hyperosmotic and hypotonic at the same time).** A red cell has volume 90 fL and internal osmolarity 300 mOsm/L, all of it impermeant. Drop it into a large bath of **100 mM NaCl plus 150 mM urea**, with $\sigma_{\text{NaCl}} = 1$ and $\sigma_{\text{urea}} = 0$. (a) Bath osmolarity? (b) Bath tonicity? (c) Final cell volume? (d) Does it survive? Red cells hemolyze at about 1.4 times normal volume.

**(a)** NaCl dissociates, so it contributes $2 \times 100 = 200$ mOsm/L; urea contributes 150.

$$C_{\text{osm}} = 200 + 150 = \mathbf{350\ \text{mOsm/L}} \;>\; 300 \quad \Rightarrow \quad \textbf{hyperosmotic}.$$

**(b)** Tonicity counts only what the membrane reflects:

$$C_{\text{eff}} = \sigma_{\text{NaCl}}(200) + \sigma_{\text{urea}}(150) = 1(200) + 0(150) = \mathbf{200\ \text{mOsm/L}} \;<\; 300 \quad \Rightarrow \quad \textbf{hypotonic}.$$

**(c)** At equilibrium urea has equalized across the membrane, so it appears on both sides of the balance and cancels. Water moves until the *impermeant* intracellular osmoles are diluted to match the bath's effective osmolarity. Impermeant osmoles are conserved:

$$C_1 V_1 = C_2 V_2 \;\Longrightarrow\; (300)(90\ \text{fL}) = (200)\,V_2 \;\Longrightarrow\; V_2 = \mathbf{135\ \text{fL}} = 1.5\times \text{normal}.$$

**(d)** $1.5 > 1.4$, so **the cell lyses** — in a bath that is *more* concentrated than it is.

**The time course is worth watching, because it goes the wrong way first.** At $t = 0$ the bath's total osmolarity is 350 against the cell's 300, so water leaves and **the cell briefly shrinks.** Then urea diffuses in over seconds, raising internal osmolarity, and water follows it — the cell swells past its original volume to 135 fL and bursts.

**This is the clinical fact that osmolarity alone will not give you.** A measured plasma osmolarity of 350 in a uremic patient does not mean the cells are dehydrated; urea distributes through total body water and is close to osmotically inert across most cell membranes. **You must ask what the membrane reflects, and only then can you say which way the water goes.** ([3.3](03-03-fluid-electrolyte-acid-base.md) builds the whole fluid-compartment calculus on this.)

## Watch out

- **You might think isosmotic means isotonic.** They coincide only when $\sigma = 1$ for every solute present. Example 2 is *hyper*osmotic and *hypo*tonic simultaneously. **Osmolarity is measured in a machine; tonicity requires knowing the membrane.**
- **You might think urea is an ineffective osmole, full stop.** Its $\sigma$ is near 0 across a red cell and near 1 across the blood–brain barrier. **The reflection coefficient belongs to the solute–membrane *pair*, never to the solute.**
- **You might think secondary active transport is free because no ATP appears in its equation.** It spends the Na⁺ gradient, which the pump built with ATP. Poison the pump and every symporter and exchanger in the cell coasts to a stop within minutes as the gradient collapses. **The bill was paid upstream.**
- **You might think a carrier is just a slow channel.** It is a different mechanism: a channel is open at both ends at once, a carrier is never open at both ends at once. That is *why* carriers saturate, show competitive inhibition, and discriminate between stereoisomers, and why channels do none of those things.
- **You might think the pump's electrogenicity is what makes the inside of a cell negative.** Its direct contribution is a few millivolts out of about seventy. **The pump matters because of the gradients it maintains, not the charge it carries** — [1.3](01-03-resting-membrane-potential.md).
- **You might think cell volume is a structural property.** An animal cell has no wall. Its volume is a *dynamic steady state* held by continuous ATP hydrolysis against a leak, and it fails within minutes of losing ATP.

## One-liner

> The bilayer stops ions dead, so the cell installs channels (fast, linear, gated) and carriers (slow, saturating, specific); one ATPase pumps 3 Na⁺ out for 2 K⁺ in and everything else — symporters, exchangers, the resting voltage, even the cell's volume against the Donnan swelling of its own trapped anions — is paid for out of that single gradient.

## Problems

**P1 (🟢)** Two candidate drugs cross the same 4 nm membrane with the same in-membrane diffusivity $D_m = 1\times10^{-11}\ \text{m}^2/\text{s}$. Drug X has partition coefficient $K = 2\times10^{-2}$; drug Y has $K = 2\times10^{-5}$. (a) Compute each permeability. (b) Compute each flux for a concentration difference of 2 mM. (c) One of these can be given as a pill and absorbed across the gut lining without a transporter. Which, and by what factor does it beat the other?

**P2 (🟡, bridges to Lesson 3.2)** The kidney filters plasma at $\text{GFR} = 125\ \text{mL/min}$ and reabsorbs the filtered glucose using SGLT carriers with a transport maximum $T_m = 2.0\ \text{mmol/min}$. (a) At a normal plasma glucose of 5.0 mmol/L, compute the filtered load and the amount excreted. (b) In an untreated diabetic at 20 mmol/L, compute the filtered load, the rate of glucose excretion, and the total mass lost per day (glucose molar mass 180 g/mol). (c) Compute the plasma glucose at which glucosuria should first appear. The measured threshold is lower, around 11 mmol/L — give the reason. (d) Diabetics classically present with enormous urine volumes and unquenchable thirst. Explain that from this lesson's osmosis section.

**P3 (🔴, bridges to biophysics and to Lesson 1.3)** A cell has $[\text{Na}^+]_o = 145$, $[\text{Na}^+]_i = 15$, $[\text{K}^+]_o = 4$, $[\text{K}^+]_i = 140$ (all mM) and $V_m = -70$ mV, at $T = 310$ K. Use $R = 8.314\ \text{J}\,\text{mol}^{-1}\text{K}^{-1}$ and $F = 96{,}485\ \text{C/mol}$. The free energy to move one mole of ion of charge $z$ from side 1 to side 2 is $\Delta G = RT\ln(C_2/C_1) + zF(V_2 - V_1)$. (a) How much energy does one mole of Na⁺ release falling *into* the cell? (b) How much energy does one full pump cycle store, and how does that compare with the roughly 50 kJ/mol available from ATP under cellular conditions? (c) A cell is treated with a drug that blocks ATP synthesis. Predict what happens to its volume over the next hour, and give the mechanism in one sentence.

<details>
<summary>Solutions</summary>

**P1 (a)** $$P_X = \frac{K D_m}{\Delta x} = \frac{(2\times10^{-2})(1\times10^{-11})}{4\times10^{-9}} = \frac{2\times10^{-13}}{4\times10^{-9}} = \mathbf{5\times10^{-5}\ \text{m/s}}.$$

$$P_Y = \frac{(2\times10^{-5})(1\times10^{-11})}{4\times10^{-9}} = \frac{2\times10^{-16}}{4\times10^{-9}} = \mathbf{5\times10^{-8}\ \text{m/s}}.$$

**(b)** $\Delta C = 2\ \text{mM} = 2\ \text{mol/m}^3$:

$$J_X = (5\times10^{-5})(2) = \mathbf{1\times10^{-4}\ \text{mol}\,\text{m}^{-2}\text{s}^{-1}}, \qquad J_Y = (5\times10^{-8})(2) = \mathbf{1\times10^{-7}\ \text{mol}\,\text{m}^{-2}\text{s}^{-1}}.$$

**(c)** **Drug X, by a factor of exactly 1000** — the ratio of the partition coefficients, since $D_m$ and $\Delta x$ are identical. Drug Y would need a carrier to be absorbed at a useful rate, and there is no reason to expect one exists for it.

*The caveat a chemist would add:* raising $K$ indefinitely is not a free win. Very lipophilic compounds dissolve poorly in the gut lumen in the first place and tend to lodge in membranes rather than pass through them, so absorption peaks at intermediate lipophilicity rather than rising forever.

**P2 (a)** Filtered load is the filtration rate times the plasma concentration:

$$\text{load} = \text{GFR}\times P_{\text{glucose}} = (0.125\ \text{L/min})(5.0\ \text{mmol/L}) = \mathbf{0.625\ \text{mmol/min}}.$$

Since $0.625 < T_m = 2.0$, the carriers have spare capacity and **excretion is zero**. Normal urine is glucose-free not because glucose is not filtered — it is filtered freely — but because all of it is reabsorbed.

**(b)** $$\text{load} = (0.125)(20) = 2.5\ \text{mmol/min}.$$

$$\text{excreted} = \text{load} - T_m = 2.5 - 2.0 = \mathbf{0.5\ \text{mmol/min}}.$$

$$\text{per day} = (0.5\ \text{mmol/min})(1440\ \text{min/day}) = 720\ \text{mmol/day},$$

$$\text{mass} = (720\ \text{mmol})(180\ \text{mg/mmol}) = 129{,}600\ \text{mg} = \mathbf{130\ \text{g/day}}.$$

**About 130 grams of sugar per day — roughly 500 kcal — poured down the drain.** This is why untreated type 1 diabetics lose weight while eating ravenously: the calories are filtered and never come back.

**(c)** The ideal threshold is the plasma concentration at which the filtered load first equals $T_m$:

$$\text{GFR}\times P^* = T_m \;\Longrightarrow\; P^* = \frac{2.0}{0.125} = \mathbf{16\ \text{mmol/L}}.$$

**The measured threshold is lower (around 11 mmol/L) because of *splay*, and splay has two causes.** First, saturation is a *hyperbola*, not a corner: a carrier is already running at, say, 90 percent of $J_{\max}$ well before the concentration is formally saturating, so a trickle escapes before the ideal threshold. Second, **nephrons are not identical** — they differ in filtration rate and in carrier density, so the nephron with the worst load-to-$T_m$ ratio begins spilling while its neighbors are still coping. The whole-kidney curve is the sum over a heterogeneous population, and summing many corners at different positions rounds the corner.

**(d)** The unreabsorbed glucose stays in the tubule lumen, where the tubular epithelium reflects it ($\sigma \approx 1$) — **it is an effective osmole in exactly the sense of this lesson's osmosis section.** It therefore holds water in the lumen against the medullary gradient that would otherwise reclaim it, producing an **osmotic diuresis**: large urine volumes. The lost water contracts plasma volume and raises plasma osmolarity, both of which are the stimuli for thirst and ADH release. **Polyuria and polydipsia are not two symptoms; they are one symptom and its compensation** — a homeostatic loop of exactly the [1.1](01-01-homeostasis-feedback-control.md) shape, doing its job correctly against a load it cannot fix.

**P3 (a)** Na⁺ moving from outside to inside, with $z = +1$, $V_{\text{out}} = 0$, $V_{\text{in}} = -0.070$ V:

$$\Delta G = RT\ln\frac{[\text{Na}^+]_i}{[\text{Na}^+]_o} + zF(V_i - V_o) = (8.314)(310)\ln\frac{15}{145} + (1)(96{,}485)(-0.070).$$

$$RT = 2577\ \text{J/mol}, \qquad \ln(0.1034) = -2.269 \;\Rightarrow\; \text{chemical term} = -5.85\ \text{kJ/mol}.$$

$$\text{electrical term} = -6.75\ \text{kJ/mol}.$$

$$\Delta G = -5.85 - 6.75 = \mathbf{-12.6\ \text{kJ/mol}}.$$

**Notice the two terms are comparable in size** — the concentration gradient and the membrane voltage each contribute about half. This is why "the sodium gradient" is really the sodium *electrochemical* gradient, and why depolarizing a cell weakens every Na⁺-coupled transporter in it.

**(b)** Reverse the sign for the three Na⁺ going *out*: $+12.6$ kJ/mol each, so $3 \times 12.6 = +37.8$ kJ/mol.

For each K⁺ coming *in* ($z = +1$, uphill chemically, downhill electrically):

$$\Delta G = (2577)\ln\frac{140}{4} + (96{,}485)(-0.070) = (2577)(3.555) - 6754 = 9163 - 6754 = +2.41\ \text{kJ/mol},$$

so $2 \times 2.41 = +4.8$ kJ/mol. Total per cycle:

$$\Delta G_{\text{cycle}} = 37.8 + 4.8 = \mathbf{+42.6\ \text{kJ/mol}}.$$

Against roughly 50 kJ/mol from ATP hydrolysis under cellular conditions ([biophysics 2.1](../../biophysics/lessons/02-01-free-energy-cell-currency.md)), the pump stores about **85 percent** of the energy it consumes as gradient — and it is thermodynamically *feasible but not comfortably so*.

**Two things follow from how tight that margin is.** First, the 3:2 stoichiometry is not arbitrary: a 4:2 pump would need about 55 kJ/mol and would stall. Second, **when a cell's ATP falls the pump does not merely slow down, it can run backwards** — an ATPase near equilibrium is reversible, and the Na⁺/K⁺-ATPase in an ischemic cell will synthesize ATP while dissipating the very gradients it exists to build.

**(c) The cell swells, and in an hour it is likely dead.** The mechanism:

1. ATP falls, so the Na⁺/K⁺-ATPase stops.
2. Na⁺ continues to leak in down its electrochemical gradient — now with nothing removing it — and $[\text{Na}^+]_i$ rises.
3. The cell's impermeant anions (proteins, nucleotides, organic phosphates) were being osmotically balanced by Na⁺'s *exclusion* from the cytosol. With Na⁺ no longer excluded, total intracellular osmoles rise above extracellular.
4. Water follows osmotically. The cell swells; with no wall to stop it, it swells until the membrane fails.

**In one sentence: the pump was not just building gradients, it was keeping Na⁺ functionally impermeant, and Na⁺'s functional impermeance is the only thing balancing the Donnan excess of the cell's own trapped anions.**

This is the pump–leak model, and it is why **cell volume is an ongoing metabolic expense rather than a structural fact.** It is also the mechanism of cytotoxic edema in stroke and myocardial infarction: cells in the ischemic core swell within minutes of losing their ATP supply, long before any structural protein is damaged.

</details>

## Connections

- **Backward:** [1.1](01-01-homeostasis-feedback-control.md) framed physiology as controllers correcting errors; the Na⁺/K⁺-ATPase is the archetypal effector — always on, always opposing a leak, and the reason a "steady state" costs energy while an "equilibrium" does not. The bilayer itself comes from [general-biology 1.3](../../general-biology/lessons/01-03-cell-theory-two-kinds-of-cell.md) and [biophysics 3.4](../../biophysics/lessons/03-04-self-assembly-hydrophobic.md); ATP as the cell's currency from [general-biology 2.1](../../general-biology/lessons/02-01-energy-atp-enzymes.md).
- **Forward:** [1.3](01-03-resting-membrane-potential.md) takes the gradients built here and converts them into a voltage; [1.4](01-04-action-potential.md) and [1.6](01-06-muscle-contraction.md) spend that voltage. The Na⁺/Ca²⁺ exchanger returns in [2.1](02-01-cardiac-electrophysiology.md). $T_m$, aquaporins, and the transcellular/paracellular split are the working vocabulary of [3.1](03-01-glomerular-filtration-clearance.md), [3.2](03-02-tubular-transport-concentrating-urine.md), and [3.3](03-03-fluid-electrolyte-acid-base.md); SGLT reappears in the gut in [4.1](04-01-gastrointestinal-system.md).
- **Sideways:** $J = P\Delta C$ is [biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md)'s Fick's law with the geometry integrated out, and $P = KD_m/\Delta x$ is where the membrane's own material properties ([biophysics 3.5](../../biophysics/lessons/03-05-membrane-mechanics.md)) enter. **The carrier's saturating hyperbola and the enzyme's Michaelis–Menten curve are the same equation** ([biophysics 4.2](../../biophysics/lessons/04-02-michaelis-menten.md)) because they are the same physical situation: a finite number of binding sites. The electrochemical bookkeeping in P3 is the foundation of the Nernst and Goldman equations ([biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md)), which [1.3](01-03-resting-membrane-potential.md) will use rather than re-derive. Membrane proteins get to their correct face of a polarized epithelium by the sorting machinery of [molecular-cell-biology 1.4](../../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md).

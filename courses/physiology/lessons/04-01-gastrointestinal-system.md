# Human Physiology · Lesson 4.1: The gastrointestinal system

> ⏱ ~15 min · Module 4: Digestive and integrative physiology · Builds on: [3.4](03-04-endocrine-axes.md), [1.2](01-02-membrane-transport.md) · Unlocks: 4.3 (exercise physiology)

## Why this matters

Every other system in this course defends a variable it already has. The gut is the only one that goes and *gets* things — water, ions, fuel, vitamins — from a hostile, unsterile outside world, and it does it by running a chemical reactor at pH 1.5 without dissolving itself.

Two payoffs justify the lesson. First, **the gut is the cleanest possible demonstration that secondary active transport is not an abstraction**: the sodium gradient the Na⁺/K⁺-ATPase maintains ([1.2](01-02-membrane-transport.md)) is *spent* here, at SGLT1, to strip the last micromolar of glucose out of the lumen — and understanding that one transporter is why oral rehydration therapy, which has saved tens of millions of lives, works at all.

Second, **the gut is the body's blood reservoir.** It takes about a quarter of resting cardiac output. When something more urgent shows up — sprinting, bleeding, overheating — that flow is the first thing reallocated, which is the sentence [4.3](04-03-exercise-integrative-physiology.md) is built on.

## The idea

**Start with the topology, because it reframes everything.** You are a torus. The lumen of your gut is continuous with the outside air at both ends; it is a tunnel through you, not a chamber inside you. **Nothing you swallow has entered your body until it has crossed an epithelial cell.** A protein sitting in your jejunum is as external as a protein sitting on your skin.

That single fact organizes the whole system. The tube has exactly three jobs:

1. **Move contents at the right speed** — fast enough to keep up with the next meal, slow enough that chemistry finishes.
2. **Present the right chemistry at each station** — a pH-1.5 acid bath, then an alkaline enzyme bath, in that order, without mixing them.
3. **Hand the products across the epithelium** — the only step that counts as absorption.

And because the tunnel is outside, **it can be run locally.** The gut has its own nervous system with enough neurons to execute reflexes with the brainstem disconnected; the autonomic system ([1.5](01-05-neuromuscular-autonomic-transmission.md)) does not command it so much as bias it up or down. **The gut is a semi-autonomous organ that reports to the brain rather than taking orders from it.**

## The formal version

### Motility: pacemakers, reflexes, and a housekeeper

GI smooth muscle never truly rests. **Interstitial cells of Cajal (ICC)** — a network of non-muscle cells wired to the smooth muscle by gap junctions — generate rhythmic depolarizations called **slow waves**, at a rate fixed for each segment: about 3 per minute in the stomach, 12 in the duodenum, 8 in the ileum.

**This is the SA node story from [2.1](02-01-cardiac-electrophysiology.md), with one crucial difference.** In the heart, every pacemaker depolarization reaches threshold and every beat contracts. In the gut, **the slow wave is normally subthreshold**: it sets the *rhythm*, but contraction happens only where excitatory input (ACh, stretch) lifts the plateau far enough that Ca²⁺ spikes fire on its crest.

$$\text{contraction} = \underbrace{\text{slow wave}}_{\text{when}} \times \underbrace{\text{spikes on the crest}}_{\text{whether, and how hard}}$$

*In words: the ICC network decides when a contraction may happen; local excitation decides whether it does.* This is why gut motility is graded and food-dependent while heart rate is not.

Three motility programs share that clock:

| Pattern | What it does | When |
|---|---|---|
| **Peristalsis** | propels — a ring of contraction behind, relaxation ahead | fed, all segments |
| **Segmentation** | mixes — alternating rings chop and shuttle chyme without net movement | fed, small intestine |
| **Migrating motor complex (MMC)** | sweeps — a contraction front travels the whole tract every 90 min or so | **fasting only** |

**The peristaltic reflex** is the enteric nervous system's signature circuit, and it is genuinely a reflex: distension releases serotonin from mucosal enterochromaffin cells, which excites sensory neurons intrinsic to the gut wall, which drive **ascending excitation** (ACh, substance P → contraction *behind* the bolus) and **descending inhibition** (nitric oxide, VIP → relaxation *ahead* of it). Contract behind, relax ahead, and the bolus has nowhere to go but forward. **Cut every nerve to the gut and this still works** — the whole arc lives in the wall.

**The MMC is the housekeeper.** Between meals, motilin-triggered sweeps clear residue and, importantly, bacteria out of the small intestine. Lose the MMC and you get bacterial overgrowth — the rumbling you hear when hungry is this program running.

**Sphincters** are tonically contracted rings that convert the tube into a series of compartments; each relaxes only on the correct reflex. And **receptive relaxation** is the one that surprises people: as you swallow, a vago-vagal reflex releases NO and VIP in the gastric fundus, so **the stomach accepts more than a litre with almost no rise in internal pressure.** A rigid bag would spike its pressure and reflux; the stomach instead goes limp to receive.

### The enteric nervous system

Two ganglionated plexuses in the gut wall, with distinct jobs:

- **Myenteric (Auerbach's)** — between the longitudinal and circular muscle layers → **motility**.
- **Submucosal (Meissner's)** — inside the submucosa → **secretion and local blood flow**.

Together they hold on the order of a few hundred million neurons — comparable to the spinal cord — with full sensory, inter-, and motor neuron machinery. **Autonomic input modulates, it does not command:** parasympathetic (vagal) fibres mostly synapse onto enteric neurons and raise gain; sympathetic fibres inhibit motility and secretion and, decisively, constrict the splanchnic vessels. **The brain's main lever over the gut is turning it down and taking its blood.**

### Secretion, station by station

**Saliva** (roughly 1 to 1.5 L/day): α-amylase and lingual lipase start digestion, mucin lubricates, bicarbonate buffers. It is **hypotonic** because the ducts reclaim more NaCl than they let water follow — the same ductal trick the nephron plays in [3.2](03-02-tubular-transport-concentrating-urine.md).

**Gastric acid.** The parietal cell's apical **H⁺/K⁺-ATPase** exchanges one H⁺ out for one K⁺ in, burning ATP, and drives luminal pH to about 1.5. Chloride follows through apical channels; the bicarbonate generated inside the cell leaves basolaterally on a Cl⁻/HCO₃⁻ exchanger, which is why venous blood leaving the stomach after a meal is transiently alkaline (the "alkaline tide"). Acid does three jobs: it denatures protein, it converts pepsinogen to pepsin autocatalytically, and it sterilizes.

**Three stimuli converge on that pump**, and their arrangement is the point:

- **Gastrin** from antral G cells (CCK-B receptor, Gq → Ca²⁺)
- **ACh** from vagal fibres (M3 receptor, Gq → Ca²⁺)
- **Histamine** from mucosal ECL cells (H2 receptor, Gs → cAMP)

**They potentiate rather than add**, because two distinct second-messenger arms converge on one effector ([molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md)). And **gastrin and ACh also stimulate the ECL cell**, so a large part of their effect is delivered *through* histamine.

**That is the whole pharmacology in one sentence: histamine is the common amplifier, so an H2 blocker weakens all three inputs, while a proton-pump inhibitor stops the final effector regardless of input** — which is why PPIs suppress acid more completely and H2 blockers act faster and more gently. Two drugs, one pathway, different points.

**Why the stomach does not digest itself:** a **mucus–bicarbonate barrier**. Surface cells secrete a viscous mucus gel and trap bicarbonate underneath it, so the pH at the epithelial surface is near 7 while the lumen is at 1.5 — a gradient of more than five pH units across about 200 μm of gel. Prostaglandins maintain it, which is exactly why NSAIDs cause ulcers.

**Pancreatic juice** has two halves from two cell types:

- **Duct cells** secrete **bicarbonate** (CFTR-dependent) — up to about 140 mmol/L — which neutralizes gastric chyme. This is not optional housekeeping: **pancreatic enzymes are inactive below pH 4**, so the acid must be titrated away before digestion can proceed.
- **Acinar cells** secrete enzymes, and the proteases go out as **inactive zymogens** — trypsinogen, chymotrypsinogen, proelastase, procarboxypeptidase. **The safety catch is that only one activator exists, and it is not in the pancreas:** **enteropeptidase**, anchored in the duodenal brush border, cleaves trypsinogen to trypsin, and trypsin then activates everything else including more trypsinogen. Amylase and lipase, which cannot digest the pancreas, are secreted already active.

*In words: the pancreas ships a loaded weapon with the firing pin stored in the duodenum.* (Zymogen activation as a catalytic strategy: [biochemistry 2.1](../../biochemistry/lessons/02-01-enzymes-catalytic-strategy.md).)

**Bile.** Bile salts are cholesterol derivatives that are **amphipathic in an unusual way** — rigid, planar, hydrophilic on one face and hydrophobic on the other. Above their critical micelle concentration they self-assemble into **mixed micelles** with phospholipid and the products of fat digestion ([biophysics 3.4](../../biophysics/lessons/03-04-self-assembly-hydrophobic.md)). They are detergents, not enzymes: they emulsify fat into fine droplets, multiplying the surface area lipase can work on, and then ferry the products across the unstirred water layer at the brush border.

**The enterohepatic circulation** is what makes a small pool do a large job: bile salts secreted into the duodenum are actively reclaimed in the **terminal ileum** (transporter ASBT), returned to the liver in portal blood, and re-secreted. About 95 percent survives each pass, so the pool cycles several times per meal and the liver only has to replace what leaks (Worked Example 2).

### Hormonal control: three feedback loops, not three facts

Do not memorize these as a list. Each is a loop of exactly the form [3.4](03-04-endocrine-axes.md) drew — sensed disturbance → hormone → effector → disturbance corrected.

| Hormone | Source | **Stimulus** | Effect | **Loop closed by** |
|---|---|---|---|---|
| **Gastrin** | G cells, antrum | peptides, distension, vagal input | acid secretion, mucosal growth | acid itself: pH below ~3 triggers somatostatin from D cells, which shuts G cells off |
| **Secretin** | S cells, duodenum | **acid** arriving in the duodenum | pancreatic/biliary bicarbonate | the bicarbonate neutralizes the acid that released it |
| **CCK** | I cells, duodenum | **fatty acids and amino acids** | gallbladder contraction, sphincter of Oddi relaxation, pancreatic enzymes, **slowed gastric emptying** | the nutrients get digested and absorbed, so the signal disappears |

**Read the pattern:** each hormone is released by the *thing it will dispose of*. Acid calls for its own neutralizer; fat calls for its own detergent and lipase. **CCK's "slow gastric emptying" arm is the one to remember** — it is a rate controller, holding delivery from the stomach at whatever rate the duodenum can actually process. Eat a very fatty meal and you feel full for hours: that is CCK throttling the tap, and it is a proper negative feedback loop with the duodenum as the sensor.

### Digestion and absorption

**Surface area first.** The small intestine amplifies its area three ways, multiplicatively: circular folds (about ×3), villi (about ×10), microvilli (about ×20).

$$3 \times 10 \times 20 = 600$$

*In words: a smooth tube of the same dimensions would offer roughly one six-hundredth of the absorptive surface.* Since absorptive flux scales with area ([biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md)), this is the difference between absorbing a meal and starving with a full gut.

**Carbohydrate — the worked-out route.** Amylase (salivary, then pancreatic) hydrolyses starch to maltose, maltotriose, and α-limit dextrins ([biochemistry 3.1](../../biochemistry/lessons/03-01-carbohydrates-structure-storage.md)). **The final hydrolysis happens in the membrane itself**: brush-border maltase-glucoamylase, sucrase-isomaltase, and lactase are integral membrane enzymes, so monosaccharides are released millimetres — really nanometres — from their transporter. Then:

- **Apical: SGLT1**, a secondary active symporter carrying **2 Na⁺ per glucose** (or galactose), spending the sodium gradient.
- **Basolateral: GLUT2**, plain facilitated diffusion, glucose exits down its own gradient into portal blood.
- **Fructose is the exception**: apical **GLUT5**, facilitated, not sodium-coupled — no concentrating power, which is why fructose malabsorption is common and glucose malabsorption is not.

**The Na⁺/K⁺-ATPase on the basolateral membrane is the engine of the whole thing.** It keeps intracellular Na⁺ low; SGLT1 converts that gradient into a glucose gradient. **Not one ATP is spent on glucose directly.**

**Protein.** Pepsin starts it (and is dispensable); pancreatic endopeptidases chop internally, carboxypeptidases trim from the ends, brush-border peptidases finish. Absorption uses two parallel routes: Na⁺-coupled amino acid transporters, and **PepT1**, which carries di- and tripeptides and is **proton-coupled, not sodium-coupled** — it runs on the acidic microclimate just outside the brush border. **Peptides are absorbed faster than the equivalent free amino acids**, because PepT1 moves three residues per cycle.

**Fat — the route that is genuinely different.** Everything above ends in portal blood. Fat does not.

1. Bile salts emulsify; **pancreatic lipase with colipase** cleaves triacylglycerol to **2-monoacylglycerol plus two free fatty acids** ([biochemistry 4.1](../../biochemistry/lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md)).
2. Products partition into **mixed micelles**, which shuttle them across the unstirred water layer — the actual diffusion barrier — and release them at the membrane.
3. Inside the enterocyte they are **re-esterified back to triacylglycerol** in the smooth ER. (Note what this costs: the cell dismantles the fat and immediately rebuilds it.)
4. The triacylglycerol is packaged with apolipoprotein B-48 and phospholipid into a **chylomicron**, a particle up to about a micrometre across.
5. **The chylomicron is exocytosed into a lacteal — a lymphatic capillary — not into blood.**

**Why lymph?** Two reasons, and the first is mechanical. A chylomicron is far too large to cross the continuous basement membrane of a blood capillary; lymphatic capillaries have overlapping, loosely anchored endothelial flaps that open under pressure and admit particles of that size. The second is consequence, not cause: **lymph drains via the thoracic duct into the left subclavian vein, so dietary fat enters the systemic circulation directly and bypasses the liver's first pass.** Sugars and amino acids are inspected and buffered by the liver before reaching the body; fat is not.

**Where things are absorbed** (the figure has the full map): iron and calcium in the duodenum; sugars, amino acids and fats in the jejunum; **bile salts and vitamin B12 only in the terminal ileum**; water and sodium in the colon. That B12/bile-salt exception matters — the terminal ileum is the one stretch of gut with no backup, which is why resecting it causes both fat malabsorption and, eventually, B12 deficiency.

### Splanchnic circulation

The stomach, intestine, spleen, and pancreas drain into the **portal vein**, which delivers everything absorbed to the liver before it reaches the rest of you. Three quantitative facts to carry forward:

- **The splanchnic bed takes roughly 25 percent of resting cardiac output** — comparable to the brain, and larger than the heart's own supply.
- **Postprandial hyperemia**: after a meal, gut blood flow rises substantially for an hour or more, driven locally by absorbed nutrients and by enteric vasodilators — a metabolic-demand loop, exactly like the coronary and skeletal-muscle ones from [2.3](02-03-hemodynamics-blood-pressure.md).
- **And therefore: this is the body's largest reservoir of reallocatable flow.** Sympathetic vasoconstriction can cut splanchnic flow to a fraction of resting within seconds. Every time [4.3](04-03-exercise-integrative-physiology.md) or a hemorrhage needs blood somewhere urgent, this is where it comes from.

## Picture

![A tall vertical map of the digestive tract. Six segments run top to bottom from mouth and esophagus through stomach, duodenum, jejunum, ileum, to colon, connected as one continuous tube. Each segment carries a badge with its luminal pH, from 6.8 in the mouth down to 1.5 in the stomach, back up to 7.5 in the ileum, and three annotation lines giving what it secretes, its dominant motility pattern, and what is absorbed there. A footnote notes that interstitial cells of Cajal pace every segment with slow waves. An inset panel below shows the parietal cell with three stimuli converging on it: vagal acetylcholine onto the M3 receptor, gastrin onto the CCK-B receptor, and histamine from the ECL cell onto the H2 receptor, all feeding second messengers into the H plus K plus ATPase that pumps protons into the gastric lumen, with red bars marking where H2 blockers and proton pump inhibitors act.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — how hard can SGLT1 pull?).** A jejunal enterocyte has cytosolic $[\text{Na}^+]_i = 15$ mM, luminal $[\text{Na}^+]_o = 140$ mM, and membrane potential $V_m = -50$ mV. SGLT1 carries 2 Na⁺ per glucose. Body temperature is $T = 310$ K. **How far can it concentrate glucose against its own gradient?**

*Step 1 — the free energy released by one mole of Na⁺ entering.* Moving from lumen to cytosol,

$$\Delta G_{\text{Na}} = RT\ln\frac{[\text{Na}^+]_i}{[\text{Na}^+]_o} + zF\,\Delta V, \qquad \Delta V = V_{\text{in}} - V_{\text{out}} = -50\ \text{mV}$$

With $RT = (8.314)(310) = 2577\ \text{J/mol} = 2.577\ \text{kJ/mol}$:

$$\text{chemical term} = 2.577 \ln\!\left(\frac{15}{140}\right) = 2.577 \times (-2.234) = -5.76\ \text{kJ/mol}$$

$$\text{electrical term} = (1)(96.485\ \text{kJ}\,\text{mol}^{-1}\text{V}^{-1})(-0.050\ \text{V}) = -4.82\ \text{kJ/mol}$$

$$\Delta G_{\text{Na}} = -5.76 - 4.82 = -10.58\ \text{kJ/mol}$$

**Notice the split: nearly half the driving force is electrical.** The concentration gradient alone would be much weaker; it is the negative membrane potential — itself a product of the K⁺ leak from [1.3](01-03-resting-membrane-potential.md) — that supplies the rest.

*Step 2 — two Na⁺ per glucose, so the budget is doubled.*

$$\Delta G_{\text{available}} = 2 \times (-10.58) = -21.16\ \text{kJ/mol}$$

*Step 3 — set the glucose uphill cost equal to that budget.* Transport stalls when

$$RT\ln\frac{[G]_i}{[G]_o} = 21.16\ \text{kJ/mol} \;\Longrightarrow\; \ln\frac{[G]_i}{[G]_o} = \frac{21.16}{2.577} = 8.21$$

$$\boxed{\;\frac{[G]_i}{[G]_o} = e^{8.21} \approx 3.7\times 10^{3}\;}$$

**A roughly 3,700-fold gradient.** If the enterocyte holds glucose at 5 mM, SGLT1 can keep pulling until the lumen is down to $5/3700 \approx 1.4\ \mu\text{M}$. *In words: the small intestine can strip the lumen essentially clean of glucose* — you do not lose meaningful sugar in stool, and this is why.

**One-Na⁺ arithmetic for contrast:** a 1:1 symporter would manage $e^{10.58/2.577} = e^{4.11} \approx 61$-fold. **The second sodium is not a detail; it squares the concentrating power.**

**Example 2 (why you'd care — a small pool doing a large job).** The circulating bile salt pool is about $P = 3$ g. Roughly $S = 20$ g is delivered to the duodenum per day, and about $L = 0.5$ g/day is lost in stool. (a) How many times does the pool recycle per day? (b) What fraction survives each pass? (c) How long does one molecule last? (d) What happens if the terminal ileum is removed?

**(a)** $$n = \frac{S}{P} = \frac{20\ \text{g/day}}{3\ \text{g}} = \mathbf{6.7\ \text{cycles/day}}$$

**(b)** At steady state the liver's synthesis exactly matches fecal loss, so the loss per pass is

$$f_{\text{lost}} = \frac{L}{S} = \frac{0.5}{20} = 0.025 \;\Longrightarrow\; \mathbf{97.5\ \text{percent recovered per pass}}$$

**(c)** Each pass is an independent 2.5 percent chance of being lost, so a molecule makes on average

$$\frac{1}{0.025} = 40\ \text{passes}, \qquad \text{lifetime} = \frac{40\ \text{passes}}{6.7\ \text{passes/day}} = \mathbf{6.0\ \text{days}}$$

Check it the other way — residence time is pool over turnover: $P/L = 3/0.5 = 6.0$ days. **The two routes agree, which is the point of doing both.**

**(d) Now break it.** ASBT lives only in the terminal ileum. Resect it and suppose recovery falls from 97.5 percent to 50 percent per pass. The liver can raise synthesis, but only to a ceiling of roughly 5 g/day. At steady state synthesis must equal loss, so the largest sustainable delivery is

$$S_{\max} = \frac{5\ \text{g/day}}{0.50} = 10\ \text{g/day}$$

**Bile salt delivery halves, and it is delivery, not pool size, that sets luminal concentration during a meal.** Once that concentration approaches the critical micelle concentration, micelles stop forming — and micelle formation is a **threshold** phenomenon, not a graded one, so fat absorption does not degrade gently, it falls off a cliff. Result: steatorrhea and deficiency of the fat-soluble vitamins A, D, E, and K. The unabsorbed bile salts then reach the colon, where they stimulate secretion and add a diarrhoeal component of their own.

**The general lesson is a recycling one.** A system that reclaims 97.5 percent of a resource per pass behaves as though it had 40 times the resource. **Efficiency near 1 is worth enormously more than it looks**, because the amplification is $1/(1-f)$ and that function explodes near 1 — the same reason the nephron's reabsorption of 99 percent of filtered sodium ([3.2](03-02-tubular-transport-concentrating-urine.md)) is not a modest saving but the entire basis of filtration-then-reclamation as a design.

## Watch out

- **You might think swallowed food is "inside" you.** It is in a tunnel that is topologically outside. **Absorption is the crossing of an epithelium, and nothing before that step counts** — which is why a nonabsorbable solute in the lumen can hold litres of water hostage (P2) despite being nutritionally invisible.
- **You might treat slow waves as gut heartbeats.** They are subthreshold. **The rhythm is always running; whether any contraction occurs depends on excitatory input riding spikes on the crest** — unlike the SA node, where every pacemaker cycle produces a beat.
- **You might expect the three acid stimuli to add up.** They potentiate, because Ca²⁺ and cAMP arms converge on one pump. **This is exactly why blocking histamine alone knocks down the response to gastrin and ACh too** — most of their effect is routed through the ECL cell.
- **You might think segmentation moves food along.** It mixes. Net propulsion in the fed small intestine is slow and mostly comes from short peristaltic bursts; the actual long-distance sweeping happens between meals, in the MMC.
- **You might assume all absorbed nutrients go to the liver first.** Sugars and amino acids do, via the portal vein. **Chylomicrons enter lymph and reach the systemic circulation through the thoracic duct, bypassing hepatic first pass entirely** — because they are physically too large for a blood capillary wall.
- **You might read pancreatic bicarbonate as a mere buffer.** It is a permissive condition: pancreatic enzymes are inactive below about pH 4, so **without neutralization the enzymes arrive on time and do nothing.**

## One-liner

> The gut lumen is outside you, so the tube's whole job is to pace itself with Cajal slow waves, stage the chemistry (acid, then bicarbonate, then zymogens armed only by duodenal enteropeptidase), and hand the products across — sugars and amino acids to the portal vein on a sodium gradient it never pays for directly, fat to the lymph because chylomicrons are too big for a capillary — while holding a quarter of the cardiac output that anything more urgent will take away.

## Problems

**P1 (🟢)** A parietal cell holds cytosolic pH at 7.2 and drives luminal pH to 1.0. The H⁺/K⁺-ATPase is **electroneutral** (1 H⁺ out per 1 K⁺ in), and ATP hydrolysis in a cell yields about 50 kJ/mol. Use $RT = 2.577$ kJ/mol.

(a) What is the H⁺ concentration ratio across the apical membrane?
(b) What is the minimum free energy needed to move one mole of H⁺ up that gradient? Say why there is no electrical term.
(c) How many protons can one ATP move, at most? Compare with the Na⁺/K⁺-ATPase's 3 Na⁺ + 2 K⁺ per ATP and comment.
(d) An H2 blocker is given. Explain why it reduces the acid secretion driven by *gastrin*, even though gastrin has its own receptor.

**P2 (🟡)** A person chews sugar-free gum and ingests 30 g of **sorbitol** (molar mass 182 g/mol), which is neither digested nor absorbed. Plasma osmolarity is 290 mOsm/L.

(a) How much water must the sorbitol obligate in the lumen, assuming luminal contents equilibrate to plasma osmolarity?
(b) The colon can absorb several litres of water per day — far more than this. Explain why that spare capacity does not rescue the situation.
(c) In cholera, the toxin locks CFTR open and the crypts pour out chloride and water, but it leaves SGLT1 untouched. Explain in two sentences why adding **glucose** to an oral salt solution turns a lethal diarrhoea into a survivable one.

**P3 (🔴, bridges to [4.3](04-03-exercise-integrative-physiology.md))** At rest, cardiac output is 5.0 L/min and the splanchnic bed receives 25 percent of it. During heavy exercise, cardiac output rises to 22 L/min and the splanchnic share falls to 3 percent.

(a) Compute absolute splanchnic flow at rest and in exercise. By what percentage does it fall?
(b) How much flow does the reallocation free up, and what fraction of the *total* increase in cardiac output does that represent?
(c) Given your answer to (b), is splanchnic vasoconstriction worth doing? Argue both sides, and say what happens if the person ate a large meal an hour before the run.

<details>
<summary>Solutions</summary>

**P1 (a)** pH is $-\log_{10}[\text{H}^+]$, so the ratio is set by the pH difference:

$$\frac{[\text{H}^+]_{\text{lumen}}}{[\text{H}^+]_{\text{cyto}}} = 10^{\,7.2 - 1.0} = 10^{6.2} = \mathbf{1.6\times10^{6}}$$

**A 1.6-million-fold gradient — the steepest ion gradient any human cell maintains.**

**(b)** Because the pump exchanges one cation for one cation, it moves no net charge, so the electrical term $zF\Delta V$ drops out entirely and only the chemical term survives:

$$\Delta G = RT\ln(10^{6.2}) = 2.577 \times 6.2 \times \ln 10 = 2.577 \times 6.2 \times 2.3026$$

$$\Delta G = 2.577 \times 14.276 = \mathbf{36.8\ \text{kJ/mol}}$$

**(c)** $$\text{max H}^+\text{ per ATP} = \frac{50}{36.8} = 1.36$$

Since you cannot move a fraction of a proton per catalytic cycle, **the pump is limited to 1 H⁺ per ATP** — and indeed that is its measured stoichiometry at full acidity.

**The comparison is the interesting part.** The Na⁺/K⁺-ATPase moves five ions per ATP; this pump moves one. It is not a worse enzyme — **it is working against a gradient so steep that a single proton consumes nearly three-quarters of an ATP's usable energy.** There is simply no headroom for a second. (A useful corollary: if cellular ATP energy fell to 35 kJ/mol, the pump could not reach pH 1.0 at all, no matter how many copies the cell made. **Stoichiometry sets the ceiling; expression sets only the rate.**)

**(d)** Because **gastrin's effect is largely indirect.** Gastrin binds CCK-B receptors on **ECL cells** and makes them release histamine, which acts on the parietal cell's H2 receptor; gastrin's direct action on parietal CCK-B receptors is the smaller share. Block H2 and you sever the main line of gastrin's action as well as histamine's own — and you also lose the Gs/cAMP arm that potentiates the Gq/Ca²⁺ arm, so the residual direct gastrin and ACh signals are weaker than they would have been in isolation.

**This is the general shape of a shared amplifier: block the amplifier and every input through it drops, even the ones with their own receptors.**

**P2 (a)** $$n = \frac{30\ \text{g}}{182\ \text{g/mol}} = 0.165\ \text{mol} = 165\ \text{mmol}$$

Sorbitol is a non-electrolyte, so 165 mmol is 165 mOsm. Water is obligated until luminal osmolarity matches plasma:

$$V = \frac{165\ \text{mOsm}}{290\ \text{mOsm/L}} = \mathbf{0.57\ \text{L}}$$

**Nearly 600 mL of water held in the lumen by a substance with no calories and no toxicity.**

**(b)** **Because the colon absorbs water only by absorbing solute.** There are no water pumps; water follows osmotically behind Na⁺ reabsorption ([1.2](01-02-membrane-transport.md)). Sorbitol cannot be absorbed and cannot be pumped, so it stays, and **every litre of water the colon tries to reclaim would leave the remaining sorbitol more concentrated, raising luminal osmolarity above plasma and pulling the water straight back.** Absorption is self-limiting at the point where the lumen reaches 290 mOsm/L.

**Spare capacity is irrelevant when the obstacle is thermodynamic rather than kinetic.** This is the defining signature of osmotic diarrhoea, and it is why it stops when you stop eating the offending solute — unlike secretory diarrhoea, which continues while fasting.

**(c)** **SGLT1 is a separate pathway that the toxin never touched.** Put glucose and Na⁺ in the lumen together and SGLT1 absorbs both, the basolateral Na⁺/K⁺-ATPase clears the sodium onward, and **water follows the absorbed solute osmotically** — so absorption is restored in parallel with the ongoing secretion, and net fluid balance can be pushed positive even while the crypts keep pouring.

**Sodium alone would not do it**, because in the diseased gut the electroneutral Na⁺/H⁺-coupled absorption routes are impaired; **glucose supplies a driving force for sodium uptake that the disease has not disabled.** (Note also that SGLT1's 2:1 stoichiometry means glucose is not the limiting reagent — a roughly equimolar glucose-to-sodium solution is more than sufficient, and keeping the total osmolarity at or below plasma matters, since an over-sweetened drink becomes an osmotic load of the kind computed in part (a).)

**P3 (a)** $$Q_{\text{rest}} = 0.25 \times 5.0 = \mathbf{1.25\ \text{L/min}}, \qquad Q_{\text{ex}} = 0.03 \times 22 = \mathbf{0.66\ \text{L/min}}$$

$$\text{fall} = \frac{1.25 - 0.66}{1.25} = 0.47 \;\Rightarrow\; \mathbf{47\ \text{percent}}$$

**Note what just happened: cardiac output more than quadrupled, and splanchnic flow still fell by half.** A constant *fraction* would have given 5.5 L/min; the fraction collapsed from 25 percent to 3 percent, and that is active sympathetic vasoconstriction, not passive redistribution.

**(b)** $$\text{freed} = 1.25 - 0.66 = \mathbf{0.59\ \text{L/min}}$$

$$\Delta CO = 22 - 5 = 17\ \text{L/min}, \qquad \frac{0.59}{17} = 0.035 \;\Rightarrow\; \mathbf{3.5\ \text{percent}}$$

**(c) Against:** on these numbers, **96.5 percent of the extra muscle perfusion comes from pumping more blood, not from stealing it.** Raising cardiac output — via heart rate, contractility, and the muscle pump's boost to venous return ([2.2](02-02-cardiac-cycle-and-output.md)) — does essentially all the work. The gut steal contributes about a thirtieth.

**For:** three arguments, and together they win.

1. **It defends pressure, not just flow.** Splanchnic vessels are a large parallel conductance. Meanwhile muscle arterioles are dilating massively, which by itself would collapse total peripheral resistance and mean arterial pressure ([2.3](02-03-hemodynamics-blood-pressure.md)). **Constricting the splanchnic bed is how the system keeps TPR from falling too far while muscle opens up.**
2. **It is a volume reservoir, not only a flow reservoir.** The splanchnic veins are highly compliant and hold roughly a fifth of total blood volume. Constricting them **shifts blood centrally, raising preload and hence stroke volume via Frank–Starling** — so part of the "extra cardiac output" in (b) is itself financed by the splanchnic bed. The 3.5 percent undercounts the contribution.
3. **It matters most when cardiac output cannot rise further.** In prolonged heat exercise, plasma volume falls with sweating ([4.2](04-02-thermoregulation.md)) and the skin demands large flow for heat loss. Once cardiac output is capped, **the splanchnic bed is the only large donor left**, and this is exactly the regime where 4.3's cardiovascular drift appears.

**If they ate a large meal an hour before:** the gut is in postprandial hyperemia and its metabolic demand is high, so the sympathetic constriction is imposed on a bed that genuinely needs flow — **a demand-supply mismatch, i.e. relative gut ischemia.** Practical consequences: nausea, cramping, and in endurance athletes an increase in intestinal permeability. There is also competition for cardiac output that the athlete loses either way, which is why the standard advice is to leave hours between a large meal and hard exercise.

</details>

## Flashback

**From Lesson 3.2 (tubular transport and concentrating the urine):** A subject is producing urine at $\dot V = 2.0$ mL/min with urine osmolarity $U_{\text{osm}} = 145$ mOsm/L; plasma osmolarity is $P_{\text{osm}} = 290$ mOsm/L.

(a) Compute osmolar clearance $C_{\text{osm}}$ and free-water clearance $C_{\text{H}_2\text{O}}$, and say what the sign tells you about ADH.
(b) ADH is now administered. Solute excretion is unchanged, but urine osmolarity rises to 1160 mOsm/L. Compute the new urine flow, $C_{\text{osm}}$, and $C_{\text{H}_2\text{O}}$.
(c) In one sentence each, distinguish the countercurrent **multiplier** from the countercurrent **exchanger**, and say which one ADH acts on.

<details>
<summary>Solution</summary>

**(a)** Osmolar clearance is the virtual plasma volume cleared of solute per minute:

$$C_{\text{osm}} = \frac{U_{\text{osm}}\dot V}{P_{\text{osm}}} = \frac{(145)(2.0)}{290} = \mathbf{1.0\ \text{mL/min}}$$

$$C_{\text{H}_2\text{O}} = \dot V - C_{\text{osm}} = 2.0 - 1.0 = \mathbf{+1.0\ \text{mL/min}}$$

**Positive free-water clearance: the kidney is excreting pure water on top of the solute it must get rid of.** Urine is dilute (145 against a plasma 290), so **ADH is low or absent** — collecting-duct aquaporin-2 is largely withdrawn from the apical membrane and water cannot follow the medullary gradient out of the tubule.

**(b)** Solute excretion is the invariant here:

$$\dot n = U_{\text{osm}}\dot V = (145)(2.0) = 290\ \mu\text{Osm/min}$$

$$\dot V_{\text{new}} = \frac{290}{1160} = \mathbf{0.25\ \text{mL/min}}$$

$$C_{\text{osm}} = \frac{(1160)(0.25)}{290} = \mathbf{1.0\ \text{mL/min}} \quad \text{(unchanged, as it must be)}$$

$$C_{\text{H}_2\text{O}} = 0.25 - 1.0 = \mathbf{-0.75\ \text{mL/min}}$$

**Negative free-water clearance means the kidney is reclaiming free water — adding it back to the body.** Urine flow fell eightfold while solute excretion did not budge, which is the whole point: **ADH controls water independently of solute.** That $C_{\text{osm}}$ is identical in both states is the arithmetic proof.

**(c)** **Multiplier — the loop of Henle.** The thick ascending limb actively pumps NaCl out of a water-impermeable tube, creating a modest transverse gradient of about 200 mOsm/L at any level; the **hairpin geometry with countercurrent flow stacks that small step repeatedly along the axis**, multiplying it into a gradient reaching roughly 1200 mOsm/L at the papilla. **It builds the gradient, and it costs ATP.**

**Exchanger — the vasa recta.** These capillaries are passive. Their hairpin shape lets solute and water short-circuit between the descending and ascending limbs, so blood leaving the medulla is nearly isosmotic with blood entering it. **It builds nothing; it prevents the medulla's blood supply from washing the gradient away.**

**ADH acts on neither.** It acts on the **collecting duct**, inserting aquaporin-2 into the apical membrane so that tubular water can equilibrate with the medullary gradient the multiplier built and the exchanger preserved. *In words: the loop makes the gradient, the vasa recta protects it, and ADH decides whether the urine is allowed to see it.*

</details>

## Connections

- **Backward:** SGLT1 is [1.2](01-02-membrane-transport.md)'s secondary active transport with the numbers filled in, and the electrical half of its driving force is [1.3](01-03-resting-membrane-potential.md)'s resting potential doing work. The ICC/slow-wave pacemaker is [2.1](02-01-cardiac-electrophysiology.md)'s SA node with the threshold made conditional, and gastrin/secretin/CCK are [3.4](03-04-endocrine-axes.md)'s feedback axes on a fast, local timescale.
- **Forward:** [4.3](04-03-exercise-integrative-physiology.md) spends the splanchnic reservoir computed here; [4.2](04-02-thermoregulation.md) competes with it for the same cardiac output. The fluid and electrolyte fluxes of the gut are the input side of [3.3](03-03-fluid-electrolyte-acid-base.md)'s balance sheet — vomiting loses H⁺ and Cl⁻ (metabolic alkalosis), diarrhoea loses HCO₃⁻ and K⁺ (metabolic acidosis).
- **Sideways:** micelles and the critical micelle concentration are [biophysics 3.4](../../biophysics/lessons/03-04-self-assembly-hydrophobic.md); the lipids being dismantled and rebuilt are [biochemistry 4.1](../../biochemistry/lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md), the starch is [biochemistry 3.1](../../biochemistry/lessons/03-01-carbohydrates-structure-storage.md), and zymogen activation as a control strategy is [biochemistry 2.1](../../biochemistry/lessons/02-01-enzymes-catalytic-strategy.md). The potentiation of Ca²⁺ and cAMP arms onto one effector is [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md).

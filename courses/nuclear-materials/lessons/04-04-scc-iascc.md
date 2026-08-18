# Nuclear Materials · Lesson 4.4: Stress-corrosion cracking and IASCC

> ⏱ ~15 min · Module 4: Structural and cladding alloys · Builds on: [4.3 Corrosion in reactor coolant](04-03-corrosion-reactor-coolant.md), [4.2 Steels: austenitic, ferritic, martensitic](04-02-steels-austenitic-ferritic-martensitic.md), [2.1 Defect migration and RIS](02-01-defect-migration-radiation-enhanced-diffusion.md), [2.5 Radiation hardening](02-05-radiation-hardening.md) · Unlocks: [4.5 Materials for fusion](04-05-materials-for-fusion.md)

## Why this matters

A stainless steel component can pass every test — tough, ductile, corrosion-resistant in the lab — and then split open in service under a stress it should shrug off, growing a hairline crack for years until it lets go. That failure mode is **stress-corrosion cracking (SCC)**, and inside a reactor it is arguably *the* dominant life-limiter for core internals: the baffle bolts that hold the fuel shroud together, weld heat-affected zones, recirculation piping. Worse, irradiation doesn't just sit beside SCC — it actively *manufactures* the conditions SCC needs. This lesson shows how three separate weaknesses must line up for a crack to grow, and how a neutron flux quietly stacks all three at once.

## The idea

SCC is a conspiracy, not a single culprit. Cracking requires **three things present at the same time and place**:

1. a **susceptible material** — an alloy with a weak path for a crack to follow (often the grain boundaries),
2. a sufficient **tensile stress** — pulling the crack open (compression won't do it; you have to pull the faces apart),
3. an **aggressive environment** — a chemistry that attacks the freshly exposed metal at the crack tip.

Picture a triangle where each corner is one ingredient. Knock out *any one leg* and cracking stops cold — that is the single most useful fact in the whole subject, because it means you get **three independent chances to defeat it**. Swap to a cleaner alloy, or relieve the stress, or fix the water chemistry — any one is a valid mitigation.

The mechanism is a nasty feedback loop. Stress concentrates at a tiny flaw; the environment dissolves metal there, sharpening the flaw; the sharper flaw concentrates stress even more. The crack ratchets forward — corrode a little, tear a little, corrode a little — often along grain boundaries because that's the fastest-dissolving path.

Now the reactor twist: irradiation feeds every corner of the triangle. It changes the grain-boundary chemistry (attacking the material leg), it hardens the steel and forces deformation into narrow bands (loading the stress leg), and it splits water into aggressive species (poisoning the environment leg). When irradiation is the accelerant, we call it **irradiation-assisted stress-corrosion cracking (IASCC)**.

## The formal version

**The SCC triad.** SCC occurs if and only if, simultaneously:

$$\text{(susceptible material)} \;\cap\; \text{(tensile stress)} \;\cap\; \text{(aggressive environment)}.$$

*In words: all three conditions must overlap in the same spot at the same time; remove any one and the intersection is empty.*

**Crack path.** SCC comes in two geometries:

- **Intergranular SCC (IGSCC):** the crack runs *along grain boundaries*. This dominates when the boundaries are chemically or mechanically weaker than the grain interiors — the usual reactor case.
- **Transgranular SCC (TGSCC):** the crack cuts *straight through grains*, following crystallographic planes. More common with chloride attack.

*In words: IGSCC follows the grain seams; TGSCC ignores them and slices across.*

**Sensitization (the classic material-leg failure).** Heat an austenitic stainless steel (e.g. type 304) into the range roughly $500$–$800\ ^\circ\mathrm{C}$ — exactly what a weld does to the metal beside the bead, the **heat-affected zone (HAZ)** — and chromium carbides ($\mathrm{Cr_{23}C_6}$) precipitate *on the grain boundaries*. Chromium is what makes stainless steel stainless: it forms the passivating $\mathrm{Cr_2O_3}$ film ([4.3](04-03-corrosion-reactor-coolant.md)). Carbides greedily pull Cr out of the thin zone next to the boundary, dropping the local chromium below the passivation threshold (about $12$ wt%):

$$\underbrace{\mathrm{Cr}}_{\text{in solution}} + \mathrm{C} \;\longrightarrow\; \mathrm{Cr_{23}C_6}\ (\text{on boundary}) \;\Longrightarrow\; \text{Cr-depleted zone flanking the boundary.}$$

*In words: carbide precipitation starves the grain-boundary edges of chromium, so those edges can no longer passivate and corrode preferentially.* A sensitized steel therefore has a built-in susceptible material leg: pre-weakened boundaries running through the whole part.

**IASCC — irradiation feeds all three legs.** At a neutron fluence above a threshold of order **a few dpa** in light-water reactors (LWRs), previously immune 304/316 steels become IASCC-susceptible. The dose unit dpa (displacements per atom) is the one you built in [1.4](01-04-kinchin-pease-nrt-dpa.md). Irradiation contributes to each leg:

- **Material leg — radiation-induced segregation (RIS).** Under the point-defect fluxes of [2.1](02-01-defect-migration-radiation-enhanced-diffusion.md), the inverse-Kirkendall effect *depletes chromium* and *enriches silicon, phosphorus, and nickel* right at grain boundaries — a radiation-driven version of sensitization that needs no carbides and no weld heat, just fluence. The boundary chemistry ends up locally non-passivating.
- **Stress leg — radiation hardening and strain localization.** Irradiation raises the yield strength via the defect-cluster obstacles of [2.5](02-05-radiation-hardening.md), so operating loads and residual stresses sit closer to yield. Worse, deformation localizes into cleared **dislocation channels** ([2.5](02-05-radiation-hardening.md)): instead of spreading uniformly, plastic strain concentrates in narrow bands that pile up against grain boundaries, spiking the *local* stress right where RIS has weakened the chemistry.
- **Environment leg — radiolysis.** Ionizing radiation splits coolant water into oxidizing species — $\mathrm{H_2O_2}$, $\mathrm{O_2}$, radicals ([4.3](04-03-corrosion-reactor-coolant.md)) — which **raise the electrochemical corrosion potential (ECP)** of the metal. A higher ECP shifts the metal toward the regime where SCC crack growth is fast.

**Crack-growth rate.** Once a crack exists, its advance is characterized by the crack-growth rate $da/dt$ (m/s, $a$ = crack length) versus the **stress-intensity factor** $K$ (units $\mathrm{MPa\,\sqrt{m}}$), the fracture-mechanics measure of how hard the crack tip is being pulled (see materials-science [4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md)). A typical SCC curve has three parts:

$$\underbrace{K < K_{ISCC}}_{da/dt\,\approx\,0} \;\longrightarrow\; \underbrace{\text{Stage I: } da/dt \text{ rises steeply with } K}_{} \;\longrightarrow\; \underbrace{\text{Stage II plateau}}_{da/dt\,\approx\,\text{const}}.$$

*In words: below a threshold $K_{ISCC}$ the crack effectively doesn't grow; above it the rate climbs, then flattens into a plateau where the environment (not the mechanics) sets the pace.* Irradiation raises the whole curve — lower threshold, higher plateau.

## Picture

![The SCC triad as three overlapping circles — material, stress, environment — meeting at SCC in the center, annotated with what irradiation adds to each leg: RIS to the material leg, hardening and dislocation channeling to the stress leg, radiolysis raising the corrosion potential to the environment leg](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (Boss problem 4(b) — name the legs and what irradiation adds).** State the three legs of the SCC triad and, for each, the specific mechanism by which irradiation strengthens that leg.

| Triad leg | Requirement | What irradiation contributes |
|---|---|---|
| **Material** | a susceptible (weak-path) microstructure | **RIS** ([2.1](02-01-defect-migration-radiation-enhanced-diffusion.md)) depletes Cr and enriches Si/P/Ni at grain boundaries — non-passivating boundary chemistry without any weld heat |
| **Stress** | sufficient tensile stress at the crack tip | **radiation hardening** ([2.5](02-05-radiation-hardening.md)) raises $\sigma_y$ and **dislocation channeling** localizes strain into bands that pile up on boundaries, spiking local stress |
| **Environment** | an aggressive, corrosive chemistry | **radiolysis** ([4.3](04-03-corrosion-reactor-coolant.md)) makes oxidizing species ($\mathrm{H_2O_2},\ \mathrm{O_2}$) that raise the ECP into the fast-cracking regime |

The point that earns the marks: a single agent — neutron flux — pushes on all three legs *at once*, which is why IASCC appears above a fluence threshold rather than being avoidable by fixing one thing.

**Example 2 (why sensitized 304 is especially vulnerable, and one mitigation per leg).** A field weld in type 304 stainless leaves a sensitized HAZ. Explain the vulnerability, then give a mitigation targeting each leg.

*Vulnerability.* The weld does three bad things at once. (i) **Material:** the HAZ is thermally sensitized — Cr-carbides on the boundaries leave Cr-depleted, non-passivating grain-boundary edges. (ii) **Stress:** welding leaves large *residual tensile* stresses near yield as the bead cools and contracts. (iii) **Environment:** the part sits in hot oxygenated coolant. All three legs of the triad are satisfied in the same band of metal — that's a textbook IGSCC initiation site, and adding a neutron flux (RIS + radiolysis) turns it into IASCC.

*One mitigation per leg:*

- **Material leg:** use a **low-carbon (304L/316L) or stabilized (321/347, Ti/Nb-added) grade** so there is too little carbon — or it is tied up as Ti/Nb carbides — to form Cr-carbides and sensitize. No Cr-depleted boundaries, no weak path.
- **Stress leg:** **relieve or reverse the tensile stress** — post-weld stress-relief anneal, or **shot-peening** the surface to put it into residual *compression* (a crack can't open under compression).
- **Environment leg:** **hydrogen water chemistry (HWC)** — dose the coolant with dissolved $\mathrm{H_2}$ to recombine the radiolytic oxidants, lowering the ECP out of the SCC-active range.

Any *one* of these breaks the triad; defense-in-depth uses all three.

## Watch out

- **You might think compressive stress can drive SCC — but it can't; only tension opens a crack.** This is exactly why shot-peening (which imposes a compressive surface layer) is a legitimate stress-leg mitigation. Total stress is what matters, and it includes *residual* stress from welding and machining, not just the applied service load — residual stress alone has caused SCC in unloaded parts.
- **You might think sensitization and RIS are the same thing — they share a symptom but not a mechanism.** Both end in Cr-depleted grain boundaries, but sensitization is *thermal* (carbide precipitation, needs 500–800 °C and carbon) while RIS is *radiation-driven* (point-defect fluxes dragging solutes, needs fluence, happens even in carbon-free alloys). A low-carbon grade defeats sensitization but **not** RIS — which is why IASCC still afflicts 316L core internals.
- **You might think below the threshold fluence a steel is simply safe — but the threshold is a soft knee, not a wall.** "A few dpa" is where IASCC susceptibility becomes pronounced in LWRs; the underlying RIS, hardening, and radiolysis all build up gradually, and the exact onset depends on alloy, stress, and water chemistry. Treat it as an engineering guideline, not a bright line.

## One-liner

> SCC needs a susceptible material *and* tensile stress *and* an aggressive environment all at once — pull any leg and it stops; irradiation is dangerous because it pushes on all three legs simultaneously (RIS, hardening/channeling, radiolysis), which is IASCC.

## Problems

**P1 (🟢)** A pressure-vessel internal is made of sensitized 304 stainless, carries a large residual tensile stress from welding, and sits in hot oxygenated water. An engineer proposes switching to 304**L** (low-carbon) as the *only* change. Using the triad, will this by itself guarantee SCC is eliminated? Which leg does it address, and which two remain?

**P2 (🟡)** Two identical 316 stainless baffle bolts are installed in a reactor core. Bolt A is near the core midplane (high neutron flux); bolt B is near the axial edge (low flux). After several years, bolt A cracks intergranularly and bolt B does not, even though both carry the same clamping stress and see the same coolant. Explain, leg by leg, why the *flux difference* alone produces this outcome.

**P3 (🔴)** On a crack-growth-rate diagram ($da/dt$ vs stress-intensity $K$), sketch qualitatively how the curve for an *irradiated* 304 specimen differs from the *unirradiated* one, and connect each change to a specific leg of the triad. Name the threshold $K$ below which cracks don't grow.

<details>
<summary>Solutions</summary>

**P1** No — it does not *guarantee* elimination, but it is a genuine mitigation of one leg. Switching to 304L attacks the **material leg**: low carbon starves the boundaries of the carbon needed to form $\mathrm{Cr_{23}C_6}$, so the HAZ no longer thermally sensitizes and the grain boundaries stay passivating. But the **stress leg** (welding residual tension) and the **environment leg** (hot oxygenated water) are untouched — and if this component is in-core, RIS will eventually re-deplete the boundaries by irradiation regardless of carbon content. Because SCC requires *all three* legs, addressing one *reduces risk* but leaving two intact means the triad can still be completed (thermally by RIS, or if any residual sensitization remains). Robust practice pairs the grade change with stress relief and controlled water chemistry.

*Check.* Consistent with the triad logic: breaking one leg is sufficient *in principle*, but only if that leg stays broken. Here the material leg can be re-broken by irradiation (RIS), so the single change is necessary-not-sufficient. ✓

**P2** Bolt A sees a much higher neutron flux, hence higher accumulated dpa, and that difference feeds the triad on every leg:

- **Material:** higher fluence → more **RIS** → more Cr depletion (and Si/P enrichment) at bolt A's grain boundaries → a genuinely susceptible, non-passivating boundary. Bolt B's low-flux boundaries stay near bulk composition.
- **Stress:** higher fluence → more **radiation hardening** and **dislocation channeling** in bolt A → the same clamping load now sits closer to (localized) yield, with strain concentrated in channels impinging on the weakened boundaries. Bolt B is far less hardened, so its local stresses stay lower and more uniform.
- **Environment:** the coolant chemistry is nominally the same, but the higher local radiation field around bolt A drives more **radiolysis** at its surface, raising the local ECP into the SCC-active range. Bolt B's lower field produces fewer oxidants.

So even with identical nominal stress and coolant, bolt A alone crosses the IASCC threshold (a few dpa) on all three legs, and cracks intergranularly (along the RIS-depleted boundaries). This is precisely why IASCC is a *flux/fluence-driven* core-internals problem — the highest-dose components fail first.

*Check.* All three explanations trace to the single variable that changed (flux → dpa), and the intergranular path matches the fact that RIS acts on grain boundaries. ✓

**P3** The irradiated curve is shifted **up and to the left** of the unirradiated one:

- The **threshold shifts left** (lower onset $K$): cracks start growing at a *smaller* stress intensity. Threshold name: $K_{ISCC}$ (the SCC threshold stress intensity). This reflects the **material leg** (RIS-weakened boundaries need less mechanical driving force to part) reinforced by the **stress leg** (hardening/channeling concentrates local stress, so a given applied $K$ produces a larger crack-tip stress).
- The **Stage II plateau shifts up** (higher $da/dt$): the environment sets the plateau rate, and **radiolysis** (environment leg) raises the ECP, speeding the corrode-tear ratchet at the tip.

Qualitative sketch: both curves are flat-then-rising-then-plateau, but the irradiated one has its "knee" ($K_{ISCC}$) at smaller $K$ and its plateau at higher $da/dt$.

```
 da/dt (log)
   |                 irradiated  ____________  (higher plateau)
   |               ____________/
   |     _________/            unirradiated
   |    /        __________________________
   |   /       _/
   |__/______ /________________________________ K
      Kiscc(irr)  Kiscc(unirr)
```

*Check.* Every shift is attributed to a leg (threshold ← material+stress, plateau ← environment), and both changes make cracking *worse*, consistent with IASCC being an accelerant. ✓

</details>

## Flashback

**From Lesson 4.2 (Steels: austenitic, ferritic, martensitic) — swelling comparison:** A fast-reactor duct designer must choose between an **austenitic** 316 stainless (FCC) and a **ferritic/martensitic (F/M)** HT-9 steel (BCC) for a component that will reach $80$ dpa in the peak-swelling temperature window. Austenitic steel swells at a steady-state rate of about $1\%$ per dpa after an incubation dose of roughly $20$ dpa; the F/M steel has a much higher incubation dose (take $\sim 100$ dpa) and effectively negligible swelling below it. Estimate the volumetric swelling of each at $80$ dpa, and state which alloy you'd pick and why.

<details>
<summary>Solution</summary>

Swelling accumulates only *after* the incubation dose, at the steady rate:

$$\frac{\Delta V}{V} \approx \dot{S}\,\bigl(D - D_{\text{inc}}\bigr) \quad \text{for } D > D_{\text{inc}}, \quad \text{else } 0,$$

where $D$ is dose (dpa), $D_{\text{inc}}$ the incubation dose, and $\dot S$ the steady swelling rate (per dpa).

- **Austenitic 316:** $D_{\text{inc}} = 20$ dpa is exceeded, so
$$\frac{\Delta V}{V} \approx (0.01\ \text{dpa}^{-1})(80 - 20)\ \text{dpa} = 0.60 = 60\%.$$
A $60\%$ volume increase is catastrophic — the duct would grossly distort and jam the assembly.
- **F/M HT-9:** $80$ dpa is *below* its $\sim 100$ dpa incubation dose, so $\Delta V/V \approx 0$ (a fraction of a percent in practice).

**Pick the ferritic/martensitic HT-9.** Its BCC structure has a high dislocation-sink density and a much longer swelling incubation, so at $80$ dpa it is essentially dimensionally stable while the austenitic steel has swollen ruinously. This is exactly the trade — swelling resistance vs. the higher strength/ductility of austenitics — that makes F/M steels the reference structural choice for high-dose fast-reactor and fusion service ([4.5](04-05-materials-for-fusion.md)).

*Check.* Units: $(\text{dpa}^{-1})(\text{dpa}) = $ dimensionless volume fraction ✓. Limiting sense: below incubation, swelling is zero for both — the F/M advantage is precisely that its incubation dose sits above the service dose. ✓

</details>

## Connections

- **Backward:** IASCC is the convergence point of half of Module 2 — **RIS** from [2.1](02-01-defect-migration-radiation-enhanced-diffusion.md) supplies the material leg, **hardening and dislocation channeling** from [2.5](02-05-radiation-hardening.md) supply the stress leg, and the **radiolysis/corrosion** picture from [4.3](04-03-corrosion-reactor-coolant.md) supplies the environment leg. The dpa dose scale that sets the fluence threshold is from [1.4](01-04-kinchin-pease-nrt-dpa.md).
- **Forward:** [4.5 Materials for fusion](04-05-materials-for-fusion.md) inherits every one of these degradation modes and adds transmutation helium and tritium retention — the reason low-activation F/M steels (chosen partly for the swelling resistance in the flashback) are the leading fusion structural candidates.
- **Sideways (fracture mechanics):** the crack-growth-rate vs. stress-intensity $K$ framework is the same linear-elastic fracture mechanics used for fatigue and brittle fracture in materials-science [4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md); SCC is that machinery with the environment, not just cyclic load, driving the crack. It also connects to the ductile-to-brittle shift of [2.6](02-06-embrittlement-dbtt-shift.md): the same hardening that shifts the DBTT also loads the SCC stress leg.

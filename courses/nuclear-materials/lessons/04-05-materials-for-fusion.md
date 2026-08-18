# Nuclear Materials · Lesson 4.5: Materials for fusion

> ⏱ ~15 min · Module 4: Cladding, structural materials, and corrosion · Builds on: [1.4 dpa](01-04-kinchin-pease-nrt-dpa.md), [2.3 void swelling](02-03-voids-void-swelling.md), [2.6 embrittlement & helium](02-06-embrittlement-dbtt-shift.md), [4.1 Zr alloys](04-01-zirconium-alloys-cladding.md), [4.2 steels](04-02-steels-austenitic-ferritic-martensitic.md) · Unlocks: (course end — the whole damage chain, now aimed at the hardest wall in nuclear)

## Why this matters

Everything in this course was about a fission reactor, where the neutrons average roughly 2 MeV and the worst structural problem is a pressure vessel slowly embrittling over 40 years. Fusion changes the rules. A deuterium–tritium plasma throws out neutrons at **14.1 MeV** — seven times more energetic — and the component that catches them, the **first wall**, is the single most demanding material in all of nuclear engineering. It must survive a plasma scorching one face, a beam of the hardest neutrons anyone makes riddling its bulk, a torrent of transmutation gas bubbling up inside it, and a tritium-fuel-economy requirement that it *not* soak up the very fuel it contains. No material yet built survives a full power-plant lifetime there. This lesson is the capstone: it takes the whole damage chain you built — dpa, swelling, helium embrittlement, alloy selection — and points it at the wall that pushes every one of those mechanisms to its limit. It also connects to the plasma side of the problem, developed in the [`fusion-plasma`](../../fusion-plasma/syllabus.md) and [`plasma-physics`](../../plasma-physics/syllabus.md) courses, and to the reaction itself in [`intro-nuclear-engineering` 4.1](../../intro-nuclear-engineering/lessons/04-01-fusion-basics.md).

## The idea

Why is 14 MeV so much worse than 2 MeV? Two separate reasons, and it is important to keep them apart.

**Reason one: more displacement damage, harder cascades.** A 14 MeV neutron transfers more energy to the atom it hits, so each primary knock-on atom (PKA) is more energetic and each cascade is bigger. Per unit of fusion power you get more dpa than per unit of fission power — the wall wears out faster in the plain [dpa](01-04-kinchin-pease-nrt-dpa.md) sense you already know.

**Reason two — the signature fusion problem: transmutation.** This is the one with no fission analogue. Above about 1 MeV, neutrons can drive **threshold reactions** that don't just bounce the nucleus but *change* it: $(n,\alpha)$ spits out a helium nucleus, $(n,p)$ spits out a proton (which grabs an electron and becomes hydrogen). At 2 MeV most of these channels are closed or weak. At 14 MeV they are wide open. So the fusion wall doesn't just accumulate vacancies and interstitials — it accumulates **helium and hydrogen atoms**, manufactured in place, that were never in the alloy and can never chemically leave it.

The number that captures this is the **He/dpa ratio**, measured in appm of helium per dpa (appm = atomic parts per million). In a fission spectrum it is about **0.1–0.3 appm/dpa** — almost nothing. In a fusion first wall it is roughly **10–15 appm/dpa** — fifty to a hundred times higher. Recall from [2.6](02-06-embrittlement-dbtt-shift.md) what helium does: it is insoluble, it migrates to grain boundaries, it collects into bubbles, and those bubbles both **decohere the boundaries** (intergranular embrittlement) and **seed extra voids** (accelerated swelling, [2.3](02-03-voids-void-swelling.md)). The same dpa that a fission steel shrugs off arrives at a fusion wall carrying two orders of magnitude more grain-boundary poison. *This* is why you cannot just take a good fission steel and reuse it.

And that is only the neutron side. The plasma-facing surface takes a heat flux of megawatts per square metre and a rain of energetic ions that **sputter** atoms off it (erosion), while tritium — the fuel — tries to dissolve into and permeate through the hot wall, which is both a safety-inventory problem and a fuel-economy problem. Three loads, one component.

## The formal version

**Transmutation gas rate.** The in-service helium concentration grows linearly with dose:

$$C_{\text{He}} = \left(\frac{\text{He}}{\text{dpa}}\right)\times D,$$

where $C_{\text{He}}$ is in appm (atomic parts per million), $\text{He}/\text{dpa}$ is the spectrum-dependent generation ratio (appm/dpa), and $D$ is the accumulated dose in dpa. *In words: helium content is just the He-per-dpa rate times how many dpa you've soaked up.* Hydrogen follows the same form with its own (larger) ratio. The whole fusion-materials problem lives in that one ratio being ~$100\times$ a fission reactor's.

**The four loads on a first wall.** No single equation captures it, so hold the four in mind as design limits:

1. **Displacement damage** — dpa from [1.4](01-04-kinchin-pease-nrt-dpa.md), but at a harder spectrum, so more dpa per MW and bigger cascades.
2. **Transmutation gas** — He and H from $(n,\alpha)$, $(n,p)$; the He/dpa ratio drives grain-boundary [embrittlement](02-06-embrittlement-dbtt-shift.md) and enhanced [swelling](02-03-voids-void-swelling.md).
3. **Surface heat and erosion** — MW·m⁻² heat flux plus ion **sputtering** that erodes the plasma-facing surface and pollutes the plasma with impurities.
4. **Tritium retention and permeation** — the wall must not trap or leak the fuel; inventory limits are a safety cap, and every trapped tritium atom is fuel you have to breed again.

**Plasma-facing materials: why tungsten.** The surface that faces the plasma is chosen almost entirely for surviving load 3. **Tungsten (W)** wins on the merits that matter there:

- **Highest melting point of any metal** ($\approx 3422\,^\circ\text{C}$) — it tolerates the heat flux.
- **High threshold energy for sputtering and low sputter yield** — heavy atoms are hard to knock off, so erosion is slow, and any sputtered W radiates strongly, which also limits how much the plasma tolerates.
- **Low tritium retention** — hydrogen isotopes dissolve poorly in W, helping load 4.

*In words: tungsten is the frying-pan material — it takes the heat and the sputtering better than anything else.* The price is that tungsten is **brittle**: it has a high ductile-to-brittle transition temperature (the [DBTT](02-06-embrittlement-dbtt-shift.md) idea from module 2, but built into the metal rather than radiation-induced), it **recrystallizes** and loses strength if it runs too hot, and irradiation raises its DBTT further. **Beryllium (Be)** is the other classic plasma-facing choice (used as the first-wall armour in ITER's original design) — low atomic number, so it pollutes the plasma less, but low melting point and toxicity are drawbacks.

**Structural material: low-activation alloys.** Behind the armour sits the load-bearing structure, and here the governing requirement is different again — **activation**. When 14 MeV neutrons transmute ordinary alloying elements (Mo, Nb, Ni, Co), they breed **long-lived radioisotopes**: the component stays dangerously radioactive for thousands of years, an impossible waste and maintenance burden. The fix is **reduced-activation** design — deliberately substituting elements whose transmutation products decay *fast*:

- Replace **Mo → W**, **Nb → Ta**, **Ni → Mn**, and eliminate **Co**.
- The result is **RAFM steel** (Reduced-Activation Ferritic/Martensitic) — e.g. **EUROFER-97** (Europe) and **F82H** (Japan), which are chemically re-tuned versions of the [F/M steels from 4.2](04-02-steels-austenitic-ferritic-martensitic.md).
- The design target: after shutdown the activated structure decays to **hands-on ("low-level waste") levels in ~decades, not millennia** — recyclable within a plant's lifetime.
- The more advanced candidate is **SiC/SiC** (silicon-carbide-fibre-reinforced silicon carbide): very low activation, stable to high temperature, but immature as a structural material (fabrication, joining, and irradiation-stability questions remain).

*In words: pick RAFM/F82H (or SiC) not because they're the strongest, but because a wall you must replace and dispose of every few years has to decay to something you can handle in a human timescale.* Notice the through-line to [4.2](04-02-steels-austenitic-ferritic-martensitic.md): F/M steels were already the high-dose choice because they resist [swelling](02-03-voids-void-swelling.md); reduced-activation is the fusion-specific chemistry layered on top.

## Picture

![Left: bar comparison of appm helium per dpa, fission (~0.1–0.3) versus fusion (~10–15), a 50–100x jump, with the neutron energies (2 MeV vs 14 MeV) labelled. Right: a first-wall schematic taking plasma heat flux and 14 MeV neutrons on its plasma face, shedding sputtered atoms, and leaking tritium by permeation through its bulk.](assets/04-05-fig1.svg)

The left bars are the whole story in one glance: for the *same* dpa, a fusion wall makes ~50–100× the helium — that gas, not the raw displacement count, is what makes the fusion problem qualitatively new. The right panel is the four-load picture: heat and sputtering on the front face, hard neutrons through the bulk, tritium leaking out the back.

## Worked examples

**Example 1 — Boss Problem 4(c): why not reuse Zircaloy for the first wall?** Zircaloy is a triumph in a light-water reactor ([4.1](04-01-zirconium-alloys-cladding.md)): it barely absorbs thermal neutrons, resists waterside corrosion, and holds its shape. Give two reasons the *fusion* neutron spectrum makes it a poor first-wall choice anyway.

*Reason 1 — the spectrum makes far more displacement damage and transmutation gas.* Zircaloy's LWR virtue is a low **thermal**-neutron absorption cross section — but a fusion wall sees 14 MeV **fast** neutrons, where that thermal-absorption advantage is irrelevant. At 14 MeV each PKA is more energetic, so the dpa rate per unit power is higher (Reason one above), and the high-energy $(n,\alpha)$/$(n,p)$ threshold reactions are wide open, so the He/dpa ratio is ~50–100× a fission spectrum's. Zircaloy would embrittle by grain-boundary helium ([2.6](02-06-embrittlement-dbtt-shift.md)) and swell far faster than it ever does in an LWR. Its whole design was tuned for a spectrum that no longer applies.

*Reason 2 — activation and temperature/surface loads.* Zirconium transmutes under fast neutrons into isotopes that violate reduced-activation goals — it is not a low-activation element, so a Zircaloy wall would become long-lived waste. And Zircaloy is a *cladding* alloy sized for ~350 °C water, not a plasma-facing material: it cannot take a megawatt-per-square-metre heat flux or the ion sputtering, and hydrogen isotopes (including the tritium fuel) dissolve readily in zirconium — the same [hydride](04-01-zirconium-alloys-cladding.md) affinity that embrittles it in an LWR now becomes a tritium-inventory and permeation liability. Wrong spectrum, wrong activation, wrong surface, wrong hydrogen behaviour. (Either the He/dpa-and-spectrum argument *or* the activation/surface argument earns full marks; the strongest answer names both.)

**Example 2 — estimating helium, fusion vs fission.** A candidate RAFM first wall is designed for a lifetime dose of $D = 100$ dpa. Take the fusion generation ratio as $12\ \text{appm/dpa}$ and a fission-spectrum ratio of $0.2\ \text{appm/dpa}$. How much helium does each accumulate?

Apply $C_{\text{He}} = (\text{He}/\text{dpa})\times D$ directly:

$$C_{\text{He}}^{\text{fusion}} = 12\ \tfrac{\text{appm}}{\text{dpa}}\times 100\ \text{dpa} = 1200\ \text{appm} = 0.12\ \text{at.\%},$$

$$C_{\text{He}}^{\text{fission}} = 0.2\ \tfrac{\text{appm}}{\text{dpa}}\times 100\ \text{dpa} = 20\ \text{appm}.$$

*Sanity check.* Units: $(\text{appm}/\text{dpa})\times\text{dpa} = \text{appm}$ ✓. The fusion wall holds **1200 appm** of helium — more than one helium atom per thousand metal atoms, densely lining the grain boundaries — while an identically-damaged fission component holds only **20 appm**, a factor of 60 less. Same displacement dose, wildly different embrittlement risk: at 1200 appm, grain-boundary helium bubbles are a first-order design threat; at 20 appm they are a footnote. This single ratio is why fusion needs *purpose-built* structural steels and why 14 MeV neutron sources (like IFMIF/DONES) exist just to test materials at the right He/dpa.

## Watch out

- **You might think a fusion wall fails because 14 MeV neutrons "hit harder" — but the raw dpa is only half the story.** A harder spectrum does raise dpa per unit power, yes — but a fission fast reactor can also reach high dpa. What a fission reactor *cannot* reproduce is the He/dpa ratio. The qualitatively new fusion problem is **transmutation gas**, not displacement count; that's why you can't validate fusion steels in a fission reactor no matter how much dpa you rack up there.
- **You might think tungsten is chosen for its neutron-damage resistance — actually it's chosen for the *surface*.** Tungsten's job is to survive the plasma heat flux and sputtering (load 3); it is picked as the frying pan, not the load-bearing beam. In the bulk it is brittle and its DBTT only worsens under irradiation. The structural strength comes from the RAFM steel *behind* the tungsten, which is a different material solving a different load.
- **You might think "low-activation" means the material doesn't get radioactive — it means it doesn't *stay* radioactive.** RAFM steel activates just fine under 14 MeV neutrons; the point is that its transmutation products decay in **decades** rather than millennia, so the component becomes hands-on-manageable within a plant lifetime. It's a decay-time property, achieved by banishing elements (Mo, Nb, Ni, Co) whose products are long-lived, not a shielding property.

## One-liner

> Fusion's 14 MeV neutrons don't just displace atoms faster — they *transmute* the wall, breeding ~50–100× more helium per dpa, so the first wall is a game of managing grain-boundary gas embrittlement and plasma heat with tungsten armour over reduced-activation steel.

## Problems

**P1 (🟢)** A fusion structural steel is qualified to a lifetime dose of $D = 80$ dpa at a generation ratio of $10\ \text{appm He/dpa}$. (a) What helium concentration does it reach, in appm and in at.%? (b) The same steel in a fission fast reactor sees $0.3\ \text{appm He/dpa}$ to the same 80 dpa — how much helium there, and how many times less?

**P2 (🟡)** For each of the four first-wall loads (displacement damage, transmutation gas, surface heat/erosion, tritium retention), name the material choice that primarily addresses it, and the one course concept it draws on. (One line each.)

**P3 (🔴)** A colleague proposes using standard 316 austenitic stainless steel — Ni-bearing, non-reduced-activation — for a fusion first-wall structure, arguing "it's tough, weldable, and doesn't have a DBTT problem like ferritic steel." Give three distinct reasons this is a poor fusion choice, each tied to a different mechanism from this course.

<details>
<summary>Solutions</summary>

**P1** (a) $C_{\text{He}} = 10\ \tfrac{\text{appm}}{\text{dpa}}\times 80\ \text{dpa} = 800\ \text{appm}$. Converting, $800\ \text{appm} = 800\times10^{-6} = 8\times10^{-4} = 0.08\ \text{at.\%}$. (b) Fission: $0.3\times 80 = 24\ \text{appm}$. Ratio $800/24 \approx 33$ — about **33× less** helium in the fission case. *Check.* Units $(\text{appm}/\text{dpa})\times\text{dpa}=\text{appm}$ ✓; appm→at.% is a factor $10^{-4}$ ✓ (1 at.% = 10,000 appm). Same dose, a factor of tens more gas — the fusion signature.

**P2** One clean mapping:
- **Displacement damage** → **RAFM/F82H ferritic-martensitic steel**, chosen for its [swelling resistance](02-03-voids-void-swelling.md) at high [dpa](01-04-kinchin-pease-nrt-dpa.md) (the F/M-vs-austenitic argument of [4.2](04-02-steels-austenitic-ferritic-martensitic.md)).
- **Transmutation gas (He/H)** → again the *ferritic* structure plus a fine, high grain-boundary/sink density to distribute helium — draws on [helium embrittlement](02-06-embrittlement-dbtt-shift.md) ([2.6](02-06-embrittlement-dbtt-shift.md)); the point is to keep bubbles small and boundaries cohered.
- **Surface heat / erosion** → **tungsten (or Be) plasma-facing armour**, chosen for melting point and low sputter yield — draws on the DBTT/brittleness trade of [2.6](02-06-embrittlement-dbtt-shift.md) (tungsten is brittle, the cost of the choice).
- **Tritium retention/permeation** → low-solubility surface material (**tungsten**) and permeation barriers, plus a tritium **breeding blanket** to recover it — draws on the hydrogen-in-metal / [hydride](04-01-zirconium-alloys-cladding.md) behaviour of [4.1](04-01-zirconium-alloys-cladding.md).

(Any reasonable one-line-each answer that pairs the right material with the right course concept is fine.)

**P3** Three distinct mechanisms:
1. **Void swelling.** Austenitic (fcc) steels are the swelling-prone class ([2.3](02-03-voids-void-swelling.md), [4.2](04-02-steels-austenitic-ferritic-martensitic.md)); at fusion's high dpa they would swell by many percent and distort — exactly the reason F/M steels were chosen for high-dose service. Fusion's abundant helium *accelerates* the void nucleation, making 316 worse here than it already is in a fission fast reactor.
2. **Activation.** 316 is rich in **nickel** (and often trace **cobalt**), which transmute to long-lived radioisotopes under 14 MeV neutrons — it violates reduced-activation goals, so the component becomes millennia-scale waste rather than decades-scale.
3. **Helium embrittlement, amplified by nickel.** Nickel has a large two-step $(n,\gamma)(n,\alpha)$ helium-production channel, so a Ni-bearing steel makes *even more* helium per dpa than the wall would otherwise — driving intergranular [helium embrittlement](02-06-embrittlement-dbtt-shift.md) ([2.6](02-06-embrittlement-dbtt-shift.md)) precisely where the colleague thought fcc toughness would protect them. Its lack of a DBTT does not save it, because the failure mode here is high-temperature grain-boundary decohesion, not low-temperature cleavage. (The tritium-permeation and heat-flux points from Example 1 are valid extra credit.)

</details>

## Flashback

**From Lesson 1.4 (dpa from fluence):** A fusion first wall is exposed to a 14 MeV neutron fluence of $\Phi = 1.5\times10^{22}\ \text{n·cm}^{-2}$ over its service life, with a spectrum-averaged displacement cross section $\sigma_d = 3000\ \text{b}$. (a) Estimate the accumulated dpa. (b) At a generation ratio of $12\ \text{appm He/dpa}$, how much helium does that correspond to?

<details>
<summary>Solution</summary>

(a) dpa is the displacement cross section times the fluence (flux $\times$ time). Convert barns: $\sigma_d = 3000\ \text{b} = 3000\times10^{-24} = 3\times10^{-21}\ \text{cm}^2$. Then

$$\text{dpa} = \sigma_d\,\Phi = (3\times10^{-21}\ \text{cm}^2)(1.5\times10^{22}\ \text{cm}^{-2}) = 45\ \text{dpa}.$$

(b) $C_{\text{He}} = 12\ \tfrac{\text{appm}}{\text{dpa}}\times 45\ \text{dpa} = 540\ \text{appm}$.

*Check.* Units in (a): $\text{cm}^2\cdot\text{cm}^{-2} = 1$, dimensionless — a per-atom count, as dpa must be ✓. Magnitude: 45 dpa over a full campaign is a realistic first-wall target (DEMO-class walls aim for the tens-to-~100 dpa range), and it drags along ~540 appm of helium — squarely in the regime where grain-boundary gas is a first-order structural concern. That coupling of dpa *and* its helium companion, from one fluence, is the whole fusion-materials problem in a single calculation.

</details>

## Connections

- **Backward:** this lesson is the entire course aimed at one component. [dpa](01-04-kinchin-pease-nrt-dpa.md) sets the wear rate, [void swelling](02-03-voids-void-swelling.md) and [helium embrittlement](02-06-embrittlement-dbtt-shift.md) are the failure modes (now amplified by a ~100× He/dpa ratio), and the [F/M-vs-austenitic steel](04-02-steels-austenitic-ferritic-martensitic.md) selection logic reappears as RAFM design — with reduced-activation chemistry layered on. Even the [hydrogen-in-Zircaloy](04-01-zirconium-alloys-cladding.md) story returns as tritium retention.
- **Forward:** this is where the course ends — but the plasma that loads the wall is its own subject. The reaction and its 14 MeV neutron are set up in [`intro-nuclear-engineering` 4.1](../../intro-nuclear-engineering/lessons/04-01-fusion-basics.md), and the confinement, heat flux, and plasma–wall interaction that govern the surface loads are developed in the [`fusion-plasma`](../../fusion-plasma/syllabus.md) and [`plasma-physics`](../../plasma-physics/syllabus.md) courses.
- **Sideways:** the reduced-activation idea — engineering a material's *chemistry* so its eventual radioactive-waste burden decays on a human timescale — is a materials-selection criterion you rarely meet outside nuclear, where "what does it become after it's irradiated, and how long is it dangerous" sits alongside strength and toughness as a first-class design constraint.

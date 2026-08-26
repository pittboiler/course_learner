# Molecular & Cell Biology · Lesson 1.1: The crowded cell & biomolecular condensates

> ⏱ ~15 min · Module 1: The Cell as a Built, Moving Machine · Builds on: [biochemistry 1.4 (folding)](../../biochemistry/lessons/01-04-the-folding-problem.md), [biophysics 2.3 (ligand binding)](../../biophysics/lessons/02-03-ligand-binding-occupancy.md) · Unlocks: 1.2 (the cytoskeleton)

## Why this matters

Every binding constant you met in `biochemistry` was measured in a cuvette holding a few micromolar protein in clean buffer. The cytoplasm holds **300–400 grams per litre of macromolecule** — roughly 20–30 percent of its volume is *occupied*. A protein in there is not swimming; it is shouldering through a crowd.

That single fact changes two things. It shifts every association equilibrium toward the compact, bound state — so numbers measured in dilute buffer systematically understate binding in the cell. And it makes possible a form of organization the organelle tour of [general-biology 1.4](../../general-biology/lessons/01-04-tour-of-the-organelles.md) never mentioned: compartments with **no membrane at all**, held together because their contents demix from the cytoplasm like oil from vinegar.

## The idea

**Crowding, first.** Imagine a room so packed with people that you can only stand in the gaps. Now two friends want to meet. The volume actually *available* to each of them is tiny, so their effective concentration — molecules per unit of *accessible* volume — is far higher than the number on the bottle. Higher effective concentration means they meet more often, and once together they take up less room than they did apart, which the crowd rewards. **Crowding is a thermodynamic push toward whatever state is smaller.** It favours binding, folding, and polymerization, all for the same reason: they free up space.

**Condensates, second.** Some proteins carry several weak, sticky patches — a *multivalent* protein, like a strip of Velcro rather than a single hook. Any one contact is worthless; many contacts together are not. Raise the concentration of such a protein and, past a threshold, the solution suddenly splits in two: a dense, protein-rich liquid droplet floating in a dilute phase. That is **liquid–liquid phase separation**, and the droplets are **biomolecular condensates**. The nucleolus, stress granules, and P bodies are all condensates — real compartments that concentrate a chemistry, with no membrane and no import machinery, dissolving when conditions change.

## The formal version

**Excluded volume.** Model the crowders as hard spheres of radius $R$ at number density $n_c$ (crowders per unit volume). A test particle of radius $r$ cannot place its centre within $R + r$ of a crowder's centre, so each crowder denies it a volume

$$v_{\text{ex}}(r) = \tfrac{4}{3}\pi (R+r)^3 .$$

*In words: the forbidden zone is set by the sum of the radii, not by the crowder alone — a bigger test particle is excluded from more.*

To first order in crowder density, this raises the particle's **activity coefficient** $\gamma$ — the factor by which its thermodynamic "effective concentration" exceeds its actual concentration:

$$\gamma(r) \;\approx\; \exp\!\big[n_c\, v_{\text{ex}}(r)\big].$$

For an association $\mathrm{A} + \mathrm{B} \rightleftharpoons \mathrm{AB}$, the equilibrium constant in the crowded cell relative to dilute buffer is

$$\boxed{\;\frac{K_{\text{cell}}}{K_{\text{dilute}}} = \frac{\gamma_A \gamma_B}{\gamma_{AB}} \approx \exp\!\Big[n_c\big(v_{\text{ex}}^A + v_{\text{ex}}^B - v_{\text{ex}}^{AB}\big)\Big]\;}$$

*In words: crowding helps binding exactly to the extent that the complex excludes less volume than its two pieces did separately.* Since $v_{\text{ex}}^{AB} < v_{\text{ex}}^{A} + v_{\text{ex}}^{B}$ always, the exponent is positive: **crowding never disfavours association.**

**Phase separation.** A multivalent protein at total concentration $c_{\text{tot}}$ demixes above a **saturation concentration** $c_{\text{sat}}$. Below it, one phase. Above it, two phases coexist with *fixed* compositions — dilute at $c_{\text{dil}} = c_{\text{sat}}$, dense at $c_{\text{dense}}$ — and only the *amount* of each changes. Mass balance fixes the volume fraction $f$ of the dense phase:

$$c_{\text{tot}} = f\,c_{\text{dense}} + (1-f)\,c_{\text{dil}} \quad\Longrightarrow\quad \boxed{\;f = \frac{c_{\text{tot}} - c_{\text{sat}}}{c_{\text{dense}} - c_{\text{sat}}}\;}$$

*In words: once droplets exist, adding more protein makes more droplets, not a more concentrated solution.* This is the key property — **a condensate buffers the free concentration of its components at $c_{\text{sat}}$.**

**What tunes $c_{\text{sat}}$.** Valency (number of sticky modules), affinity per module, temperature, salt, and — crucially for the cell — **post-translational modification**. Phosphorylating a few residues in a condensate protein can raise $c_{\text{sat}}$ above $c_{\text{tot}}$ and dissolve the droplet within seconds. That makes condensates *switchable* by exactly the signalling machinery of Module 2.

## Picture

![Left: a box packed with large grey crowder spheres, two small particles shown with dashed exclusion shells around each crowder, illustrating that the volume available to a particle shrinks as its own radius grows. Right: a phase diagram of total concentration against interaction strength with a one-phase region below a saturation curve and a two-phase region above, plus a cartoon of dense droplets coexisting with a dilute phase whose concentration stays pinned at c-sat](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — how big is the crowding push?).** Crowders of radius $R = 3$ nm occupy $\varphi = 0.25$ of the volume. Two proteins of radius $r = 2$ nm associate; model the complex as a sphere of the same total volume. By how much does crowding raise $K$?

Crowder number density from the volume fraction:

$$n_c = \frac{\varphi}{\tfrac43 \pi R^3} = \frac{0.25}{\tfrac43\pi(3)^3} = \frac{0.25}{113.1} = 2.21\times10^{-3}\ \text{nm}^{-3}.$$

Complex radius: its volume is twice a monomer's, so $r_{AB} = 2^{1/3}\,r = 1.26 \times 2 = 2.52$ nm.

$$v_{\text{ex}}^{A} = v_{\text{ex}}^{B} = \tfrac43\pi(3+2)^3 = 523.6\ \text{nm}^3, \qquad v_{\text{ex}}^{AB} = \tfrac43\pi(3+2.52)^3 = 704.5\ \text{nm}^3.$$

$$n_c\big(523.6 + 523.6 - 704.5\big) = 2.21\times10^{-3} \times 342.7 = 0.757.$$

$$\frac{K_{\text{cell}}}{K_{\text{dilute}}} = e^{0.757} = \mathbf{2.1}.$$

In free-energy terms, $\Delta\Delta G = -RT\ln 2.1 = -(8.314)(310)(0.757)/1000 = -1.95$ kJ/mol — about $0.75\,k_BT$.

**Read the answer honestly.** This is a *first-order* estimate and at $\varphi = 0.25$ it is a **lower bound**; the neglected higher-order terms all push the same way, and measured crowding effects on association reach 10- to 100-fold. The lesson is directional and reliable even when the number is not: **binding constants from dilute buffer are systematically too weak.**

**Example 2 (why you'd care — a condensate as a concentration buffer).** A protein has $c_{\text{sat}} = 5\ \mu$M and forms droplets whose internal concentration is $c_{\text{dense}} = 5$ mM. The cell holds a total of $20\ \mu$M. (a) What fraction of the cell volume is droplet? (b) The cell doubles its total to $40\ \mu$M — what is the free concentration now?

(a) $$f = \frac{20 - 5}{5000 - 5} = \frac{15}{4995} = 3.0\times10^{-3}.$$

**0.3 percent of the volume** holds three-quarters of the protein.

(b) $$f = \frac{40-5}{4995} = 7.0\times10^{-3},$$

so the droplet volume more than doubles — and the free concentration is **still $5\ \mu$M**, unchanged.

**That is the payoff.** Any downstream partner that binds this protein from the dilute phase sees a concentration that is *immune* to a two-fold change in expression. The cell has built a buffer — the chemical analogue of the pH buffer from [biochemistry 1.1](../../biochemistry/lessons/01-01-water-ph-buffers.md), and it works by the same logic: a reservoir phase that absorbs additions without changing the free activity.

## Watch out

- **You might read "crowding" as "viscosity."** They are different and can point opposite ways. Crowding is a *thermodynamic* effect on equilibria (it favours compact states); it also *slows diffusion*, which is kinetic. A crowded cell binds more tightly and mixes more slowly at the same time.
- **You might think a condensate is a bag with a wall.** There is no barrier. Molecules exchange with the outside continuously — a condensate protein typically turns over its droplet in seconds. Concentration inside is maintained by *partitioning*, not by containment.
- **You might expect adding more protein to raise its free concentration.** Above $c_{\text{sat}}$ it does not. This is the single most useful and least intuitive property of a two-phase system, and it is why "expression level" is a poor proxy for "available concentration" in a condensate-forming pathway.
- **You might assume crowding always helps.** It helps *association and compaction*. It penalizes anything that makes a molecule effectively bigger — an extended, unfolded chain is disfavoured, which is one reason the cytoplasm is a folding-friendly place.

## One-liner

> The cell is 30 percent full, so everything that makes a molecule smaller is thermodynamically rewarded — and proteins with many weak sticky patches take that to its conclusion and demix into membraneless droplets that buffer their own free concentration.

## Problems

**P1 (🟢)** A condensate protein has $c_{\text{sat}} = 2\ \mu$M and $c_{\text{dense}} = 4$ mM. The cell's total is $50\ \mu$M. (a) What volume fraction is droplet? (b) What fraction of the protein molecules are inside droplets?

**P2 (🟡)** Repeat Example 1's calculation for a *larger* pair of proteins, $r = 4$ nm each, with the same crowders ($R = 3$ nm, $\varphi = 0.25$). Compute the fold-change in $K$, and explain in one sentence why the crowding effect grows with the size of the binding partners.

**P3 (🔴, bridges to Module 2)** A kinase phosphorylates three residues in a condensate protein, and each phosphate raises $c_{\text{sat}}$ by a factor of 1.6. The protein sits at $c_{\text{tot}} = 20\ \mu$M with an unphosphorylated $c_{\text{sat}} = 5\ \mu$M. (a) After how many phosphorylations does the condensate dissolve? (b) Explain why this makes condensate assembly a *switch* rather than a dial, and name the general property of the phase diagram responsible.

<details>
<summary>Solutions</summary>

**P1 (a)** $$f = \frac{c_{\text{tot}} - c_{\text{sat}}}{c_{\text{dense}} - c_{\text{sat}}} = \frac{50 - 2}{4000 - 2} = \frac{48}{3998} = 1.20\times10^{-2},$$ so **1.2 percent of the volume**.

**(b)** Protein inside droplets per unit total volume is $f\,c_{\text{dense}} = (1.20\times10^{-2})(4000\ \mu\mathrm{M}) = 48\ \mu$M out of $50\ \mu$M:

$$\frac{48}{50} = \mathbf{96\ \text{percent}}.$$

Note the pattern: with $c_{\text{dense}} \gg c_{\text{sat}}$, essentially everything above $c_{\text{sat}}$ ends up in the dense phase, and the free pool sits at $c_{\text{sat}}$ regardless.

**P2** Same $n_c = 2.21\times10^{-3}\ \text{nm}^{-3}$. Complex radius $r_{AB} = 2^{1/3}(4) = 5.04$ nm.

$$v_{\text{ex}}^{A} = v_{\text{ex}}^{B} = \tfrac43\pi(3+4)^3 = \tfrac43\pi(343) = 1436.8\ \text{nm}^3,$$
$$v_{\text{ex}}^{AB} = \tfrac43\pi(3+5.04)^3 = \tfrac43\pi(519.7) = 2177.0\ \text{nm}^3.$$

$$n_c\big(1436.8 + 1436.8 - 2177.0\big) = 2.21\times10^{-3}\times 696.6 = 1.54,$$
$$\frac{K_{\text{cell}}}{K_{\text{dilute}}} = e^{1.54} = \mathbf{4.7}\quad\text{(vs. 2.1 for the 2 nm pair).}$$

**Why it grows:** the excluded volume scales as $(R+r)^3$, so the *saving* on association — the volume the complex no longer denies to crowders — grows steeply with partner size. Big assemblies (ribosomes, spindles, filaments) feel crowding far more than small ones, which is why crowding matters most exactly where the cell builds its largest machines.

**P3 (a)** Each phosphate multiplies $c_{\text{sat}}$ by 1.6, starting from 5 μM:

| Phosphates | $c_{\text{sat}}$ |
|---|---|
| 0 | 5.0 μM |
| 1 | 8.0 μM |
| 2 | 12.8 μM |
| 3 | 20.5 μM |

Droplets exist only while $c_{\text{sat}} < c_{\text{tot}} = 20\ \mu$M. At two phosphates $c_{\text{sat}} = 12.8 < 20$ — droplets persist (shrunken). At **three phosphates** $c_{\text{sat}} = 20.5 > 20$, and the condensate **dissolves**.

**(b)** The behaviour is switch-like because the phase boundary is a *threshold*, not a slope. While $c_{\text{sat}} < c_{\text{tot}}$ the free concentration is pinned at $c_{\text{sat}}$ and only droplet *volume* responds; the moment $c_{\text{sat}}$ crosses $c_{\text{tot}}$ the dense phase vanishes entirely and every molecule that was concentrated inside is released at once. The responsible property is the **existence of a sharp saturation boundary** separating one-phase and two-phase regions — a first-order phase transition, which by construction has a discontinuity where a smooth dial would have none. Signalling exploits this constantly: a modest, graded kinase input produces an all-or-none change in compartment identity, which is the same "graded in, switch out" theme you will meet as ultrasensitivity in [2.3](02-03-kinase-cascades-switch.md).

</details>

## Connections

- **Backward:** the hydrophobic effect and marginal folding stability from [biochemistry 1.4](../../biochemistry/lessons/01-04-the-folding-problem.md) — crowding is a second, purely entropic push in the same direction, and the two add.
- **Forward:** [1.2](01-02-cytoskeleton-three-filaments.md) needs crowding to explain why filament assembly is favoured *in vivo* at concentrations that stay soluble *in vitro*; [4.2](04-02-eukaryotic-transcription-machine.md) returns to condensates as the current picture of what an enhancer hub physically is.
- **Sideways:** the two-phase buffering argument is the same mathematics as a saturated solution in equilibrium with its solid — and the same "reservoir pins the free activity" logic as a buffer in [biochemistry 1.1](../../biochemistry/lessons/01-01-water-ph-buffers.md).

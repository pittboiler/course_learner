# Immunology · Lesson 2.2: The B-cell receptor — affinity & avidity

> ⏱ ~15 min · Module 2: Antigen Recognition · Builds on: [2.1](02-01-antigens-antibody-structure.md), [1.5](01-05-complement-system.md) · Unlocks: [3.2](03-02-clonal-selection-b-cell-activation.md) (clonal selection & B-cell activation)

## Why this matters

[2.1](02-01-antigens-antibody-structure.md) established the shape: two arms, one hinge, a recognition end and an instruction end. This lesson asks the quantitative question that shape was built to answer — **how tightly does an antibody actually hold its antigen, and where does that grip come from?**

The answer is not what the word "affinity" suggests. A freshly rearranged B-cell receptor, straight out of the bone marrow and never yet improved by mutation, binds its antigen *badly* — micromolar, sometimes worse, which at physiological antigen concentrations means well under one percent occupancy. That receptor should be useless. It is not, and the reason is **avidity**: multiple weak grips on the same particle do not add, they **multiply**, and the multiplication is worth three to five orders of magnitude.

Three things fall out of that one fact. It is **why IgM — ten binding sites, terrible individual affinity — is the primary-response isotype** and why the immune system can afford to deploy an unmutated repertoire at all. It sets the target that affinity maturation ([3.3](03-03-germinal-centers-affinity-maturation.md)) has to hit before it is worth the two weeks it costs. And it explains why the B cell's activating signal is not "how many receptors are occupied" but "did one antigen bridge two of them" — which is the whole difference between a T-independent polysaccharide and a soluble monomer.

## The idea

**Affinity is one hand's grip. Avidity is what happens when you use both hands and the object cannot get away in between.**

Take an antibody arm whose single-site dissociation constant is $1\,\mu\text{M}$ — a weak grip, off in about ten seconds. Now suppose the antigen carries two copies of that epitope, close enough that both Fab arms can reach. Bind the first arm. The second arm is now **tethered a few nanometres from its target**. It is not searching a litre of solution for a partner; it is rattling around inside a sphere of radius perhaps 10 nm, which contains *one* epitope.

**That is a colossal effective concentration.** One molecule in the volume of a 10 nm sphere works out to about 0.4 millimolar — four hundred times the arm's own $K_d$. So the tethered arm is bathed in its ligand and rebinds almost instantly.

The consequence is a **ratchet**. For the whole antibody to fall off, both arms must be released *at the same time*. Each arm alone lets go every ten seconds, but whenever one does, it snaps back within about 25 milliseconds. The chance that the second arm releases during that window is roughly one in four hundred — so the complex survives four hundred times longer than either arm would alone.

**Nothing about the chemistry changed.** The bond is the same bond; the residues are the same residues. The entire gain came from geometry — from the fact that a bound arm holds its partner near the target.

Two corollaries, and both matter:

1. **Avidity is not a property of the antibody.** It is a property of the antibody *and* the antigen's epitope spacing. Move the epitopes 30 nm apart and the same IgG is just a monovalent binder again.
2. **Valency substitutes for affinity.** A hundred-fold worse arm, used four at a time instead of two, reaches the same apparent grip. **This is the entire design rationale for pentameric IgM.**

## The formal version

**Single-site binding — stated, not re-derived.** For one receptor site and free ligand at concentration $[L]$, the fractional occupancy is the Langmuir isotherm from [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md):

$$\theta = \frac{[L]}{K_d + [L]}, \qquad K_d = \frac{k_{\text{off}}}{k_{\text{on}}}$$

*In words: half the sites are filled when the free ligand concentration equals $K_d$; below that, occupancy is essentially linear in $[L]$.* Here $k_{\text{on}}$ (units $\text{M}^{-1}\text{s}^{-1}$) is the association rate constant and $k_{\text{off}}$ (units $\text{s}^{-1}$) the dissociation rate constant; $1/k_{\text{off}}$ is the mean **residence time** of a single bond.

Typical antibody numbers: $k_{\text{on}} \approx 10^{5}$–$10^{6}\ \text{M}^{-1}\text{s}^{-1}$, roughly fixed by diffusion and orientation. **Affinity differences are therefore almost entirely off-rate differences** — a point that will matter enormously for the TCR in [2.3](02-03-t-cell-receptor.md).

**Effective local concentration.** Let $r$ be the distance the second binding site can explore once the first arm is anchored — set by the hinge, the Fab arms' reach, and the antigen's epitope spacing. If exactly one partner epitope lies inside that volume,

$$\boxed{\;C_{\text{eff}} = \frac{1}{N_A V}, \qquad V = \tfrac{4}{3}\pi r^{3}\;}$$

with $N_A = 6.022\times10^{23}\ \text{mol}^{-1}$. *In words: a tethered binding partner behaves like a solution at the concentration you would get by putting one molecule in the volume the tether can reach.*

| reach $r$ | $C_{\text{eff}}$ |
|---|---|
| 5 nm | $3.2\times10^{-3}\ \text{M}$ |
| 10 nm | $4.0\times10^{-4}\ \text{M}$ |
| 20 nm | $5.0\times10^{-5}\ \text{M}$ |

**$C_{\text{eff}}$ falls as $r^{-3}$** — this is the same tethered-polymer bookkeeping as in [biophysics 3.2](../../biophysics/lessons/03-02-persistence-length-wlc.md), and it is why avidity is so brutally sensitive to epitope spacing.

**The bivalent result.** Write $F$ for free antibody, $M$ for one arm bound, $B$ for both bound. With two equivalent arms:

$$\frac{[M]}{[F]} = \frac{2[L]}{K_d}, \qquad \frac{[B]}{[M]} = \frac{C_{\text{eff}}}{2K_d}$$

(the 2 in the first is because either arm can make first contact; the 2 in the second because either bound arm can be the one that releases). Multiplying and defining the apparent constant by $[B]/[F] = [L]/K_d^{\text{app}}$:

$$\boxed{\;K_d^{\text{app}} = \frac{K_d^{2}}{C_{\text{eff}}}, \qquad \text{enhancement} = \frac{K_d}{K_d^{\text{app}}} = \frac{C_{\text{eff}}}{K_d}\;}$$

*In words: the two dissociation constants multiply, and the effective concentration sets the exchange rate between "a squared $K_d$" and "a usable one."* **The arms multiply; they do not add.** The statistical factors of 2 cancel exactly, which is a small piece of luck.

For $n$ arms simultaneously engaged, the same telescoping gives

$$K_d^{\text{app}} \approx K_d\left(\frac{K_d}{C_{\text{eff}}}\right)^{n-1}$$

*In words: every extra engaged arm multiplies the grip by the same factor $C_{\text{eff}}/K_d$.* **Note what this says: the enhancement per arm is larger for a better arm.** Avidity does not rescue arbitrarily bad binders efficiently — it rewards them geometrically but from a worse starting point.

**Where the ceiling is, honestly.** Three things cap this:

- **Geometry.** If the nearest identical epitope lies outside the arms' reach, $C_{\text{eff}} \to 0$, no second arm ever closes, and $K_d^{\text{app}} \to K_d/2$. The factor of two is then the *only* benefit of having two arms.
- **Strain.** The formula assumes the tethered arm is free. Forcing the hinge into a bad angle costs free energy and reduces $C_{\text{eff}}$ below the naive geometric value, often by an order of magnitude.
- **Meaning.** Past roughly three engaged arms the formula returns numbers like $10^{-15}\ \text{M}$. No such measurement exists and none is needed: the honest statement is **"effectively irreversible on the timescale of the response,"** not a $K_d$.

**What the receptor actually reads.** Membrane immunoglobulin has a cytoplasmic tail three residues long — it cannot signal. The signalling is done by the associated heterodimer **Igα/Igβ (CD79a/CD79b)**, whose tails carry **ITAMs** (immunoreceptor tyrosine-based activation motifs). Cross-linking of two or more receptors clusters the ITAMs, Src-family kinases (Lyn, Fyn, Blk) phosphorylate them, and Syk docks through its tandem SH2 domains onto the doubly-phosphorylated ITAM, launching BLNK → PLCγ2 → $\text{Ca}^{2+}$ and the NF-κB and ERK arms ([molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md) owns that cascade machinery).

$$\boxed{\;\text{signal} \propto \text{receptor aggregation, not receptor occupancy}\;}$$

*In words: a thousand receptors each holding one soluble monomer produce no signal; two receptors bridged by one polymer do.* This is why highly repetitive antigens — bacterial capsular polysaccharide, a viral capsid, flagellin polymers — are **T-independent** ([3.2](03-02-clonal-selection-b-cell-activation.md)), and why a soluble monomeric protein delivers signal 1 so weakly that on its own it is tolerogenic rather than activating.

**The coreceptor discount.** The **CD19/CD21/CD81** complex sits beside the BCR. CD21 (complement receptor 2) binds **C3d**, the terminal fragment left on any surface the alternative pathway has decorated ([1.5](01-05-complement-system.md)). When the same particle is gripped by both the BCR and CD21, CD19's cytoplasmic tail is drawn into the signalling cluster and the activation threshold falls by roughly $10^{2}$–$10^{3}$-fold (in the classic hen-egg-lysozyme experiments, fusing three copies of C3d to the antigen made it about $10^{4}$-fold more immunogenic).

**This is innate output licensing adaptive activation**, and it is worth pricing: a 1000-fold threshold reduction is worth exactly as much as three logs of affinity maturation — available in minutes rather than in two weeks.

## Picture

![Left panel: fractional occupancy plotted against free antigen concentration on a logarithmic axis. A single IgG Fab arm with a dissociation constant of one micromolar and a single germline IgM Fab arm at one hundred micromolar both reach half occupancy only at high concentration, but either antibody engaged multivalently shifts about three decades to the left, to an apparent constant near three nanomolar, so valency erases the hundred-fold gap between the two arms. Right panel: a schematic of two membrane immunoglobulin receptors bridged by a single repetitive multivalent antigen, with Ig-alpha and Ig-beta chains carrying ITAMs below the membrane, and a CD19 CD21 coreceptor engaging a C3d tag on the same antigen, both feeding one intracellular signalling pathway.](assets/02-02-fig1.svg)

A note on the shapes: the dominant effect of multivalency is the **leftward shift**, and a shift is all a strict two-state model gives. The mild extra steepness drawn on the blue curve is real but comes from something else — when singly-attached intermediates are short-lived, binding becomes closer to all-or-none, and the apparent Hill coefficient creeps above 1. Do not attribute that steepening to avidity per se.

## Worked examples

**Example 1 (mechanical — what affinity maturation has to deliver).** A germline BCR binds a soluble protein antigen with $K_d = 1\,\mu\text{M}$. Free antigen in the germinal-center light zone is around $[L] = 10\ \text{nM}$. (a) What fraction of the cell's binding sites are occupied? (b) After maturation to $K_d = 1\ \text{nM}$? (c) What would a *further* thousand-fold improvement, to $1\ \text{pM}$, buy? (d) Conclude.

(a) $$\theta = \frac{10^{-8}}{10^{-6} + 10^{-8}} = \frac{10^{-8}}{1.01\times10^{-6}} = 9.90\times10^{-3}.$$

**Under 1 percent.** On a B cell carrying $10^{5}$ surface receptors, that is about 990 occupied — which sounds like a lot and, as we will see, signals nothing.

(b) $$\theta = \frac{10^{-8}}{10^{-9} + 10^{-8}} = \frac{10^{-8}}{1.1\times10^{-8}} = 0.909.$$

$$\text{gain} = \frac{0.909}{0.00990} = \mathbf{92\text{-fold}}.$$

**A thousand-fold improvement in $K_d$ bought a ninety-two-fold improvement in occupancy.** The loss is not waste — it is saturation beginning to bite.

(c) $$\theta = \frac{10^{-8}}{10^{-12} + 10^{-8}} = 0.9999, \qquad \text{gain} = \frac{0.9999}{0.909} = \mathbf{1.10\text{-fold}}.$$

**The next thousand-fold buys ten percent.**

(d) **Occupancy saturates once $K_d \ll [L]$, so the useful target for affinity maturation is set by the antigen concentration, not by chemistry.** Germinal centers stop improving affinity at around $10^{-10}\ \text{M}$ for exactly this reason — and note the mechanism is self-consistent, because as the response clears antigen, $[L]$ falls and the target moves down with it. Selection in the light zone is competition for a *shrinking* resource ([3.3](03-03-germinal-centers-affinity-maturation.md)).

**Example 2 (why you'd care — valency buys what maturation would have to earn).** Compare two antibodies gripping a virus particle whose surface epitopes repeat every few nanometres.

**(a) A germline IgG, bivalent.** Arm $K_d = 1\,\mu\text{M}$; the two Fab tips can reach an epitope up to $r = 10$ nm from the anchored one.

$$V = \tfrac{4}{3}\pi (10\times10^{-9}\,\text{m})^{3} = 4.19\times10^{-24}\ \text{m}^3 = 4.19\times10^{-21}\ \text{L}$$

$$C_{\text{eff}} = \frac{1}{(6.022\times10^{23})(4.19\times10^{-21})} = \frac{1}{2522} = 4.0\times10^{-4}\ \text{M}$$

$$\text{enhancement} = \frac{C_{\text{eff}}}{K_d} = \frac{4.0\times10^{-4}}{10^{-6}} = 400, \qquad K_d^{\text{app}} = \frac{(10^{-6})^{2}}{4.0\times10^{-4}} = \mathbf{2.5\times10^{-9}\ \text{M}}$$

**(b) The same result in the time domain**, which is where the intuition lives. With $k_{\text{on}} = 10^{5}\ \text{M}^{-1}\text{s}^{-1}$:

$$k_{\text{off}} = k_{\text{on}}K_d = 10^{5}\times10^{-6} = 0.1\ \text{s}^{-1} \;\Rightarrow\; \tau_{\text{single arm}} = 10\ \text{s}$$

$$\text{rebinding rate of the tethered arm} = k_{\text{on}}C_{\text{eff}} = 10^{5}\times4.0\times10^{-4} = 40\ \text{s}^{-1}$$

From the doubly-bound state, one arm releases at $2k_{\text{off}} = 0.2\ \text{s}^{-1}$; the singly-bound intermediate then either rebinds (40 s⁻¹) or fully escapes (0.1 s⁻¹):

$$P(\text{escape}) = \frac{0.1}{0.1+40} = 2.5\times10^{-3}, \qquad k_{\text{off}}^{\text{app}} = 0.2 \times 2.5\times10^{-3} = 5.0\times10^{-4}\ \text{s}^{-1}$$

$$\tau_{\text{bivalent}} = \frac{1}{5.0\times10^{-4}} = 2000\ \text{s} \approx \mathbf{33\ \text{minutes}}$$

**Ten seconds becomes thirty-three minutes.** And the check closes: $K_d^{\text{app}} = k_{\text{off}}^{\text{app}}/(2k_{\text{on}}) = 5.0\times10^{-4}/(2\times10^{5}) = 2.5\times10^{-9}\ \text{M}$, exactly the equilibrium answer.

**(c) A germline IgM, four arms.** Now take a genuinely bad arm — $K_d = 100\,\mu\text{M}$, a hundred times worse than the IgG — on a densely repetitive surface where the reach to the next epitope is only $r = 5$ nm, so $C_{\text{eff}} = 3.2\times10^{-3}\ \text{M}$:

$$\frac{C_{\text{eff}}}{K_d} = \frac{3.2\times10^{-3}}{10^{-4}} = 32, \qquad K_d^{\text{app}} = K_d\left(\frac{K_d}{C_{\text{eff}}}\right)^{3} = \frac{10^{-4}}{32^{3}} = \frac{10^{-4}}{32768} = \mathbf{3.1\times10^{-9}\ \text{M}}$$

**Two antibodies, a hundred-fold apart in intrinsic affinity, end up within twenty percent of the same apparent $K_d$.** The IgM paid for its terrible arms with two extra arms and tighter epitope spacing.

**(d) Why this is the design.** IgM is the isotype the B cell makes *first*, before any germinal center has run, out of a repertoire assembled at random ([3.1](03-01-vdj-recombination.md)) and therefore mediocre by construction. Ten binding sites is not redundancy — **it is the mechanism by which an unmutated repertoire is useful on day one.** The system gets three orders of magnitude from geometry in zero days, and then spends two weeks in a germinal center earning three more from chemistry.

The same arithmetic explains the specialization: IgM's valency works only on **repetitive** surfaces, which is exactly what bacteria and viruses present and what host self-proteins mostly do not. Once affinity maturation has produced a good arm, that arm is switched onto IgG ([3.3](03-03-germinal-centers-affinity-maturation.md)) — a smaller, more diffusible, tissue-penetrating molecule that no longer needs ten sites, and whose freed-up Fc can be specialized instead ([3.4](03-04-antibody-effector-functions.md)).

## Watch out

- **You might think two arms give twice the affinity.** They give $K_d^{\text{app}} = K_d^{2}/C_{\text{eff}}$ — in the example above, four hundred times, not two. The arms **multiply**. Two-fold is what you get when the geometry *fails* and the second arm can never reach.
- **You might treat avidity as a property of the antibody.** It is a property of the antibody–antigen *pair*. The same IgG on a surface with 8 nm epitope spacing and on one with 30 nm spacing differs by three orders of magnitude in apparent $K_d$, with identical chemistry.
- **You might report an apparent $K_d$ as an affinity.** Any measurement made against a *surface* — ELISA, densely loaded SPR chips, cell-based staining — contains an unknown $C_{\text{eff}}$ baked in. It is not a molecular constant and it does not transfer to a different antigen density. This is a routine and consequential confusion in the literature.
- **You might think a highly occupied receptor is an activated receptor.** Occupancy and signalling are different variables. A thousand BCRs each holding a soluble monomer give no ITAM clustering and no signal; that engagement without cross-linking or help is what drives anergy rather than activation ([3.2](03-02-clonal-selection-b-cell-activation.md)).
- **You might expect affinity maturation to push $K_d$ toward zero.** Occupancy saturates once $K_d \ll [L]$, and $k_{\text{on}}$ is capped near the diffusion limit, so measured affinities plateau around $10^{-10}$–$10^{-11}\ \text{M}$. Improvement past the antigen concentration buys almost nothing.
- **You might carry the avidity logic over to T cells.** Do not. A TCR has **one** binding site and no bivalency to exploit ([2.3](02-03-t-cell-receptor.md)) — which is precisely why T cells had to solve the sensitivity problem a different way, with coreceptors, many low-affinity contacts, and kinetic proofreading.

## One-liner

> Affinity is one arm's grip and adds nothing when you have two; avidity multiplies grips against a ceiling set entirely by geometry — which is why ten mediocre germline IgM sites hold a repetitive microbial surface as tightly as a matured IgG, and why the signal the B cell actually reads is not how many receptors are filled but whether one antigen bridged two of them.

## Problems

**P1 (🟢)** A germline BCR has $K_d = 2\,\mu\text{M}$; after affinity maturation, $K_d = 4\ \text{nM}$. Free antigen in the light zone is $[L] = 5\ \text{nM}$. (a) Compute fractional occupancy before and after. (b) By what factor did the number of occupied receptors rise? (c) A further thousand-fold improvement, to $4\ \text{pM}$, would gain how much more? State the general rule your answer illustrates.

**P2 (🟡)** An IgG Fab arm has $K_d = 5\times10^{-7}\ \text{M}$. (a) Virus 1 displays identical epitopes 8 nm apart, and the second Fab site can explore a sphere of radius 9 nm. Compute $C_{\text{eff}}$ and the apparent bivalent $K_d$. (b) Virus 2 displays the same epitope but spaced 25 nm apart. What is the apparent $K_d$ now, and why? (c) How many orders of magnitude of affinity maturation would be needed for this antibody to hold virus 2 as tightly as the *unmatured* antibody holds virus 1? Comment on what that says about vaccine antigen design.

**P3 (🔴, optional — bridges to complement and to signalling)** A B cell with $10^{5}$ surface BCRs of germline affinity $K_d = 1\,\mu\text{M}$ meets a soluble **monomeric** protein antigen at $10\ \text{nM}$. (a) How many receptors are occupied? (b) The cell is not activated. Explain why, and state what the *polysaccharide* form of the same antigen does differently. (c) The antigen instead arrives from the tissue coated in C3d. If CD21 co-ligation lowers the activation threshold 1000-fold, express that gain in two currencies — logs of affinity maturation, and fold-change in antigen concentration — and say which is actually obtainable in the first six hours of an infection.

<details>
<summary>Solutions</summary>

**P1 (a)** Germline:

$$\theta = \frac{5\times10^{-9}}{2\times10^{-6} + 5\times10^{-9}} = \frac{5\times10^{-9}}{2.005\times10^{-6}} = 2.49\times10^{-3} \;\;(\mathbf{0.25\ \text{percent}}).$$

Matured:

$$\theta = \frac{5\times10^{-9}}{4\times10^{-9}+5\times10^{-9}} = \frac{5}{9} = 0.556 \;\;(\mathbf{55.6\ \text{percent}}).$$

**(b)** $$\frac{0.5556}{0.002494} = \mathbf{223\text{-fold}}.$$

A 500-fold improvement in $K_d$ produced a 223-fold improvement in occupancy — still in the near-linear regime, so most of the affinity gain converted.

**(c)** $$\theta = \frac{5\times10^{-9}}{4\times10^{-12}+5\times10^{-9}} = 0.99920, \qquad \frac{0.99920}{0.5556} = \mathbf{1.80\text{-fold}}.$$

**A further thousand-fold in $K_d$ buys 1.8-fold in occupancy.**

**The rule: affinity improvements convert roughly one-for-one into occupancy only while $K_d \gg [L]$, and stop converting once $K_d \ll [L]$.** The antigen concentration, not the chemistry, sets the point of diminishing returns — which is why germinal-center affinity maturation plateaus, and why the plateau moves *down* as the response clears antigen.

**P2 (a)** $$V = \tfrac{4}{3}\pi (9\times10^{-9})^{3} = 3.05\times10^{-24}\ \text{m}^{3} = 3.05\times10^{-21}\ \text{L}$$

$$C_{\text{eff}} = \frac{1}{(6.022\times10^{23})(3.05\times10^{-21})} = \frac{1}{1839} = 5.4\times10^{-4}\ \text{M}$$

Epitope spacing (8 nm) is inside the reach (9 nm), so the second arm can close.

$$K_d^{\text{app}} = \frac{K_d^{2}}{C_{\text{eff}}} = \frac{(5\times10^{-7})^{2}}{5.4\times10^{-4}} = \frac{2.5\times10^{-13}}{5.4\times10^{-4}} = \mathbf{4.6\times10^{-10}\ \text{M}}$$

an enhancement of $C_{\text{eff}}/K_d = \mathbf{1090\text{-fold}}$.

**(b)** 25 nm exceeds the 9 nm reach. **No second arm can ever engage a second epitope on the same particle**, so $C_{\text{eff}}$ is effectively zero, there is no doubly-bound state, and

$$K_d^{\text{app}} \approx \frac{K_d}{2} = \mathbf{2.5\times10^{-7}\ \text{M}}.$$

The factor of 2 is purely statistical — two arms, two chances to make the *first* contact — and is the only thing bivalency buys here. **A geometric change in the antigen, with no change whatsoever to the antibody, cost three orders of magnitude.**

**(c)** To match $4.6\times10^{-10}\ \text{M}$ with $K_d^{\text{app}} = K_d/2$, we need $K_d = 9.2\times10^{-10}\ \text{M}$:

$$\frac{5\times10^{-7}}{9.2\times10^{-10}} = 544 \approx \mathbf{2.7\ \text{orders of magnitude}}.$$

**That is essentially the entire output of a full germinal-center campaign — one to two weeks of somatic hypermutation and competitive selection — spent purely to replace a favourable epitope spacing.**

**The design lesson**, and it is a real one: an immunogen that displays its epitope in a dense, regular array — a virus-like particle, a nanoparticle scaffold, a polymerized carrier — extracts three logs of binding energy from geometry, for free, and does so with the *germline* repertoire, on day one. A soluble monomer offers none of it and must wait for maturation to earn the same grip. This is why particulate and multimerized antigen displays outperform their soluble counterparts so consistently ([4.2](04-02-immunological-memory-vaccines.md)), and it is a geometry argument before it is an immunology one.

**P3 (a)** $$\theta = \frac{10^{-8}}{10^{-6}+10^{-8}} = 9.90\times10^{-3}, \qquad 9.90\times10^{-3} \times 10^{5} = \mathbf{\approx 990\ \text{receptors occupied}}.$$

**(b)** Roughly a thousand engaged receptors, and no activation — because **occupancy is not the variable the receptor reads.** Membrane Ig has a three-residue cytoplasmic tail and transduces nothing itself; signalling requires the Igα/Igβ ITAMs to be **clustered** so that Src-family kinases phosphorylate them and Syk can dock through its tandem SH2 domains. A monomer carrying one copy of the epitope binds one receptor and cannot bridge to a second, so the 990 occupied receptors are 990 *isolated* receptors: no aggregation, no sustained ITAM phosphorylation, no signal. Worse than neutral, in fact — chronic signal-1 engagement without cross-linking or T-cell help is a tolerogenic input ([3.2](03-02-clonal-selection-b-cell-activation.md)).

The **polysaccharide** form of the same antigen carries the epitope tens to hundreds of times over, spaced a few nanometres apart. One polymer bridges many BCRs into an ordered array, ITAMs cluster and stay clustered, and the signal is strong and sustained — strong enough to activate without T-cell help at all (a TI-2 antigen). The cost of skipping help is that there is no germinal center: fast IgM, no class switching, no affinity maturation, no memory.

**(c)** Two currencies for the same 1000-fold:

- **In affinity terms:** three logs of $K_d$ — from $10^{-6}$ to $10^{-9}\ \text{M}$. That is the full yield of a germinal-center response: roughly one to two weeks of somatic hypermutation and Tfh-limited selection ([3.3](03-03-germinal-centers-affinity-maturation.md)).
- **In concentration terms:** a 1000-fold rise in antigen, from $10\ \text{nM}$ to $10\,\mu\text{M}$ — which for a protein antigen is an implausible tissue concentration and, in any case, would require the pathogen to have already won.

**Neither is available in the first six hours. The C3d tag is.** The alternative complement pathway is already running on the microbial surface before any lymphocyte has been recruited ([1.5](01-05-complement-system.md)) — spontaneous C3 tickover deposits C3b on anything without host regulators, and C3b is processed to C3d, which is precisely the CD21 ligand. The tag arrives with the pathogen.

**The general principle: complement tagging is how the innate system tells the adaptive system that a molecule is worth responding to.** It is a licensing step, not a binding step — the same architectural pattern as PRR-driven B7 upregulation on dendritic cells ([3.5](03-05-helper-t-cells-polarization.md)). In both cases an innate decision lowers an adaptive threshold, and in both cases the point is that **the expensive, dangerous adaptive machinery does not start on the strength of binding alone.**

</details>

## Flashback

**From Lesson 2.1 (antigens & antibody structure):** A rabbit is immunized with native hen-egg lysozyme and yields a high-titre antiserum.

(a) Tested against heat-denatured lysozyme, the serum's binding falls by about 90 percent. Explain what this says about the epitopes.

(b) The experimenter couples dinitrophenyl (DNP), a small chemical group, to lysozyme and immunizes with the conjugate; the serum contains abundant anti-DNP antibody. Immunizing with free DNP alone produces none — yet the anti-DNP antibody binds free DNP perfectly well. Name what DNP is here and resolve the apparent paradox.

(c) The anti-lysozyme serum is split: one half digested with papain, the other with pepsin. Each digest is tested for its ability to **agglutinate** lysozyme-coated beads. Predict both results and explain.

<details>
<summary>Solution</summary>

**(a)** Most epitopes on a native globular protein are **conformational (discontinuous)** — built from residues that are far apart in sequence but adjacent on the folded surface. Denaturation destroys the fold and therefore destroys the epitope, even though every residue is still present. The ~10 percent of binding that survives is against the minority of **linear (continuous)** epitopes, which are stretches of sequence recognized independently of fold.

**The practical consequence**, and it is a large one: antibodies raised against native protein often fail on denatured protein (and vice versa), which is why a monoclonal validated for western blot may be useless for immunoprecipitation, and why vaccines built from short linear peptides so often elicit antibodies that do not recognize the real pathogen.

**(b)** DNP is a **hapten**: a molecule small enough to be *bound* by an antibody but too small to be *immunogenic* on its own.

The resolution is that binding and immunogenicity are different requirements. Eliciting a T-dependent antibody response needs more than a B cell engaging its epitope — it needs the B cell to internalize the antigen, process it, present peptides on MHC class II, and receive help from a T cell recognizing a *linked* epitope from the same molecule. Free DNP supplies no peptides to present and cannot cross-link BCRs, so there is no signal 2 and no response. Coupled to lysozyme, the **carrier** supplies both the T-cell epitopes and the multivalency, and the anti-DNP B cell gets its help. The antibodies produced are then perfectly capable of binding free DNP — nothing about the *binding* required the carrier.

This is the **hapten–carrier effect**, and it is the direct ancestor of conjugate vaccines: a polysaccharide that would elicit only a poor T-independent response is coupled to a protein carrier and becomes T-dependent, with switching, maturation and memory ([3.2](03-02-clonal-selection-b-cell-activation.md)).

**(c)** **Papain** cleaves above the hinge disulfides, giving **two separate monovalent Fab fragments** plus an Fc. A monovalent fragment binds one bead and cannot bridge to a second — **no agglutination.**

**Pepsin** cleaves below the hinge disulfides, giving a single **bivalent $\text{F(ab')}_2$** (the Fc is degraded). Two linked arms can bridge two beads — **agglutination is preserved.**

**The two digests together separate binding from effector function**, which is exactly why they were the classic tool: $\text{F(ab')}_2$ still binds and still cross-links, but with no Fc it cannot fix complement, cannot engage Fcγ receptors, and cannot be recycled by FcRn ([3.4](03-04-antibody-effector-functions.md)). And note that this is the present lesson in miniature — agglutination is an avidity phenomenon, so it survives exactly as long as the fragment retains two arms.

</details>

## Connections

- **Backward:** [2.1](02-01-antigens-antibody-structure.md) gave the two-armed architecture and the hinge; this lesson prices them. [1.5](01-05-complement-system.md)'s C3d is the tag CD21 reads. The Langmuir isotherm and $K_d$ are stated from [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md), and the tethered-reach bookkeeping behind $C_{\text{eff}}$ is the polymer physics of [biophysics 3.2](../../biophysics/lessons/03-02-persistence-length-wlc.md). The ITAM → Syk → PLCγ2 cascade is machinery from [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md).
- **Forward:** [3.2](03-02-clonal-selection-b-cell-activation.md) turns the cross-linking requirement into the T-independent/T-dependent split and the two-signal rule; [3.3](03-03-germinal-centers-affinity-maturation.md) is the machine that delivers the three logs of affinity this lesson priced, and stops where Example 1(d) says it should; [3.4](03-04-antibody-effector-functions.md) shows complement fixation as another multivalency readout — clustered Fc regions, which is why pentameric IgM fixes complement so much better than monomeric IgG.
- **Sideways:** [2.3](02-03-t-cell-receptor.md) is the deliberate contrast — one binding site, no avidity available, so discrimination must come from **off-rate** through kinetic proofreading instead. The multiplicative-grip logic recurs wherever a molecule binds a surface rather than a partner: multivalent drug and chelate design, and the same "arms multiply" arithmetic that underlies cooperative binding in [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md), though there the coupling is allosteric rather than geometric.

# Molecular & Cell Biology · Lesson 1.2: The cytoskeleton — three filament systems

> ⏱ ~15 min · Module 1: The Cell as a Built, Moving Machine · Builds on: [1.1](01-01-crowded-cell-condensates.md), [general-biology 1.4](../../general-biology/lessons/01-04-tour-of-the-organelles.md) · Unlocks: 1.3 (motors & cargo logistics)

## Why this matters

An animal cell has no wall. It holds its shape, resists being squashed, crawls, pinches itself in two, and hauls cargo across distances a thousand times its own molecular scale — all with a scaffolding it builds and demolishes continuously out of three families of protein polymer.

The engineering trick is that this scaffolding is **not** built once. Two of the three systems are in constant flux, assembling and disassembling on a timescale of seconds to minutes. That is expensive — it burns nucleotide — and the cell pays because a structure that can dissolve is a structure that can be *reorganized on demand*. Every mitotic spindle in your body is assembled from scratch and destroyed within an hour.

## The idea

Three polymers, three jobs, and the differences all follow from two properties: **polarity** and **dynamics**.

- **Actin filaments (microfilaments)**, ~7 nm across. Thin, flexible, concentrated just under the plasma membrane. They set cell *shape* at the surface, drive crawling, and squeeze the cell in two at the end of division. Polar; bind ATP.
- **Microtubules**, ~25 nm across. Stiff hollow tubes radiating from a central organizing centre. They are the cell's *highways* and the machinery that segregates chromosomes. Polar; bind GTP.
- **Intermediate filaments**, ~10 nm across. Ropes of coiled-coil proteins. They bear *mechanical stress* — they are why your skin does not tear. **Not polar, no nucleotide, essentially not dynamic.**

That last one is the clean contrast: intermediate filaments are the passive tension cables, and the other two are active, nucleotide-burning machinery.

**Polarity is the load-bearing idea.** Actin and tubulin subunits are asymmetric and always add head-to-tail, so the resulting filament has two chemically distinct ends — a fast-growing **plus end** and a slow **minus end**. Polarity is what makes *directed* transport possible at all ([1.3](01-03-motors-cargo-logistics.md)): a motor that walks toward plus ends is a motor that moves cargo *outward*, and it knows which way that is because the track tells it.

## The formal version

**Critical concentration.** A filament in equilibrium with free subunits grows when subunits attach faster than they fall off. With on-rate $k_{\text{on}}[\text{S}]$ (proportional to free-subunit concentration $[\text{S}]$) and off-rate $k_{\text{off}}$, the net elongation rate at one end is

$$\frac{dn}{dt} = k_{\text{on}}[\text{S}] - k_{\text{off}}, \qquad \text{so growth stalls at} \quad \boxed{\;C_c = \frac{k_{\text{off}}}{k_{\text{on}}}\;}$$

*In words: below the critical concentration the filament shrinks, above it the filament grows, and $C_c$ is just the dissociation constant for adding one subunit.*

**Treadmilling (actin).** The two ends have *different* critical concentrations — $C_c^{+} < C_c^{-}$, because ATP hydrolysis after assembly weakens the subunit's grip and the ends differ in how fast they hydrolyse. If the free concentration sits *between* the two values,

$$C_c^{+} < [\text{S}] < C_c^{-},$$

the plus end grows while the minus end shrinks. The filament keeps a constant length while subunits flow through it from plus to minus. *In words: the filament walks forward through the cytoplasm while standing still.* Crowding ([1.1](01-01-crowded-cell-condensates.md)) lowers the effective $C_c$ *in vivo*, which is why cells polymerize at concentrations that stay soluble in a test tube.

**Dynamic instability (microtubules).** Microtubules do something stranger: individual tubes switch stochastically between steady growth and rapid shrinkage, with no intermediate steady state. The mechanism is a **GTP cap**. Tubulin adds in the GTP form; bound GTP hydrolyses shortly after incorporation. GTP-tubulin at the tip is a straight, stabilizing cap; GDP-tubulin underneath is strained and wants to peel outward.

- If addition outruns hydrolysis, the cap survives and the tube **grows**.
- If hydrolysis catches up and the cap is lost — a **catastrophe** — the strained GDP lattice peels apart at $\sim 20\ \mu$m/min.
- Regaining a cap is a **rescue**.

*In words: a microtubule is a race between adding fresh GTP-tubulin and hydrolysing what is already there; lose the race and the tube falls apart.*

The functional consequence is **search-and-capture**: a centrosome throwing out microtubules that grow and collapse at random will, by trial and error, find and stabilize any target that binds a plus end — a kinetochore, a cortical site. The cell searches space by dying repeatedly and cheaply.

| | Actin | Microtubule | Intermediate filament |
|---|---|---|---|
| Diameter | ~7 nm | ~25 nm | ~10 nm |
| Subunit | G-actin | α/β-tubulin dimer | e.g. keratin, lamin, vimentin |
| Nucleotide | ATP | GTP | none |
| Polar? | yes | yes | **no** |
| Dynamics | treadmilling | dynamic instability | stable |
| Stiffness ($\ell_p$) | ~17 μm | ~5 mm | ~1 μm |
| Nucleated by | Arp2/3, formins | γ-tubulin ring at the centrosome | self-assembly |
| Main jobs | cortex, crawling, cytokinesis | transport tracks, spindle, cilia | mechanical strength |
| Motors | myosins | kinesins, dyneins | none |

The persistence lengths $\ell_p$ are from the worm-like-chain treatment in [biophysics 3.2](../../biophysics/lessons/03-02-persistence-length-wlc.md): a microtubule is stiff over millimetres, so on the scale of a cell it is effectively a rigid rod, while actin is floppy enough to be bent by thermal energy over tens of microns.

## Picture

![Three panels. Left: an actin filament treadmilling, subunits adding at a plus end and leaving at a minus end with the free concentration sitting between the two critical concentrations. Centre: a microtubule with a green GTP cap growing, then losing its cap at a catastrophe and peeling into curled protofilaments. Right: an intermediate filament shown as an unpolarized rope of coiled coils bearing a tensile load.](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — find the treadmilling window).** Actin has $k_{\text{on}}^{+} = 12\ \mu\mathrm{M}^{-1}\mathrm{s}^{-1}$, $k_{\text{off}}^{+} = 1.4\ \mathrm{s}^{-1}$ at the plus end, and $k_{\text{on}}^{-} = 1.3\ \mu\mathrm{M}^{-1}\mathrm{s}^{-1}$, $k_{\text{off}}^{-} = 0.8\ \mathrm{s}^{-1}$ at the minus end. (a) Find both critical concentrations. (b) At $[\text{S}] = 0.4\ \mu$M, what does each end do, and what happens to filament length?

(a) $$C_c^{+} = \frac{1.4}{12} = 0.12\ \mu\mathrm{M}, \qquad C_c^{-} = \frac{0.8}{1.3} = 0.62\ \mu\mathrm{M}.$$

(b) $0.12 < 0.40 < 0.62$, so we are inside the treadmilling window. Plus end:

$$\frac{dn}{dt}\Big|_{+} = (12)(0.4) - 1.4 = +3.4\ \text{subunits/s} \quad \text{(grows)}.$$

Minus end:

$$\frac{dn}{dt}\Big|_{-} = (1.3)(0.4) - 0.8 = -0.28\ \text{subunits/s} \quad \text{(shrinks)}.$$

Net length change $= 3.4 - 0.28 = +3.1$ subunits/s, so this filament still **elongates** — treadmilling *per se* only means the two ends move the same direction in space. True steady-state treadmilling (constant length) happens at the $[\text{S}]$ where the two rates are equal and opposite:

$$12[\text{S}] - 1.4 = -(1.3[\text{S}] - 0.8) \;\Longrightarrow\; 13.3[\text{S}] = 2.2 \;\Longrightarrow\; [\text{S}] = 0.165\ \mu\mathrm{M},$$

at which each end moves at $12(0.165) - 1.4 = 0.58$ subunits/s. **In a real cell this is not left to chance**: capping, severing, and nucleating proteins hold the free pool where the cell wants it.

**Example 2 (why you'd care — how a spindle finds a chromosome).** A microtubule grows at $v_g = 2\ \mu$m/min, shrinks at $v_s = 20\ \mu$m/min, undergoes catastrophe at $f_{\text{cat}} = 0.4\ \mathrm{min}^{-1}$, and (say) is never rescued. How far does a typical microtubule reach, and what does that imply for search-and-capture?

Mean lifetime before catastrophe is $1/f_{\text{cat}} = 2.5$ min, so mean length reached:

$$\langle L \rangle = v_g \times \frac{1}{f_{\text{cat}}} = 2\ \frac{\mu\mathrm{m}}{\mathrm{min}} \times 2.5\ \mathrm{min} = \mathbf{5\ \mu\mathrm{m}}.$$

A typical animal cell is 15–20 μm across, so a centrosome at the centre sits 7–10 μm from the cortex — **beyond the mean reach**, but lengths are exponentially distributed, so a respectable tail *does* get there. The full growth-and-shrink cycle takes $2.5 + 5/20 = 2.75$ min, meaning each microtubule makes roughly **22 attempts per hour**, and a centrosome nucleating hundreds of them makes thousands.

**Now the payoff.** A kinetochore that binds and *stabilizes* a plus end — suppressing catastrophe — converts one lucky contact into a permanent attachment. The cell therefore does not need to aim: it needs a cheap random search plus a capture rule. **Dynamic instability is not a defect of microtubules, it is the search algorithm**, and its cost in GTP is the price of not having to know in advance where the chromosomes are.

## Watch out

- **You might think "dynamic" means "slowly turning over."** It means individual filaments live for *minutes*. Half the tubulin in a mitotic spindle exchanges with the free pool in under a minute; the spindle is a standing wave, not a structure.
- **You might read the plus end as "the growing end" absolutely.** Plus and minus are *chemical* identities fixed by subunit orientation. A plus end shrinks during catastrophe and is still the plus end. The names describe the geometry, not the current behaviour.
- **You might expect intermediate filaments to have a plus end too.** They do not — their subunits assemble into antiparallel, staggered tetramers, so the finished rope is symmetric end-to-end. That is exactly why no motor walks on them: there is no direction to walk in.
- **You might treat treadmilling and dynamic instability as the same idea.** Treadmilling is a *steady* flux with constant length; dynamic instability is *bistable* switching between growth and collapse. Different mechanisms, different signatures.

## One-liner

> Two of the three cytoskeletal polymers burn nucleotide to stay unstable — actin treadmills and microtubules gamble on a GTP cap — because a scaffold that can dissolve on cue is worth far more to a cell than one that cannot.

## Problems

**P1 (🟢)** A tubulin end has $k_{\text{on}} = 8\ \mu\mathrm{M}^{-1}\mathrm{s}^{-1}$ and $k_{\text{off}} = 24\ \mathrm{s}^{-1}$. (a) Find $C_c$. (b) At a free tubulin concentration of $10\ \mu$M, what is the net elongation rate in subunits per second? (c) Given 1625 dimers per micron of microtubule, convert that to μm/min.

**P2 (🟡)** A drug binds free tubulin and prevents it from polymerizing, lowering the free pool from $10\ \mu$M to $2\ \mu$M without changing $C_c = 3\ \mu$M. (a) What happens to existing microtubules? (b) Predict the consequence for a cell entering mitosis, and (c) explain why such drugs — taxanes and vinca alkaloids — are chemotherapy agents, and why their side effects fall on hair follicles, gut lining, and bone marrow.

**P3 (🔴, bridges to biophysics)** Persistence length $\ell_p$ measures how far a filament stays straight against thermal bending ([biophysics 3.2](../../biophysics/lessons/03-02-persistence-length-wlc.md)). Actin has $\ell_p \approx 17\ \mu$m, a microtubule $\ell_p \approx 5$ mm. (a) Over a 10 μm cell, which of the two is effectively a rigid rod and which is noticeably floppy? (b) Bending stiffness for a hollow tube scales as the fourth power of radius. Taking radii of 3.5 nm (actin) and 12.5 nm (microtubule), estimate the stiffness ratio from geometry alone and compare with the measured $\ell_p$ ratio. (c) Explain in one sentence why the cell uses the stiff polymer for long-range tracks and the floppy one for a surface cortex.

<details>
<summary>Solutions</summary>

**P1 (a)** $$C_c = \frac{k_{\text{off}}}{k_{\text{on}}} = \frac{24}{8} = \mathbf{3\ \mu\mathrm{M}}.$$

**(b)** $$\frac{dn}{dt} = (8)(10) - 24 = 80 - 24 = \mathbf{56\ \text{subunits/s}}.$$

**(c)** $$\frac{56\ \text{dimers/s}}{1625\ \text{dimers}/\mu\mathrm{m}} = 0.0345\ \mu\mathrm{m/s} \times 60 = \mathbf{2.1\ \mu\mathrm{m/min}},$$

which is right in the measured range for growing microtubules — a useful sanity check that the rate constants are physical.

**P2 (a)** With $[\text{S}] = 2\ \mu\mathrm{M} < C_c = 3\ \mu$M, every end is net-losing subunits: **existing microtubules depolymerize.** Net rate at the end from P1: $(8)(2) - 24 = -8$ subunits/s.

**(b)** Mitosis requires building a spindle from scratch. With the free pool below $C_c$ the cell cannot nucleate or maintain spindle microtubules, chromosomes are never attached to a bipolar array, and the **spindle-assembly checkpoint** holds the cell in metaphase. Prolonged arrest triggers apoptosis (the arrest logic is [3.1](03-01-cell-cycle-engine-irreversibility.md)).

**(c)** They kill *dividing* cells preferentially, because a non-dividing cell needs no spindle. Taxanes do the mirror-image trick — they *hyper*-stabilize microtubules, which is equally fatal, because a spindle that cannot depolymerize cannot pull chromosomes apart either. **Either direction is lethal to mitosis; only the dynamic middle works.** The side effects land exactly on the body's other fast-dividing populations — hair follicles (hair loss), intestinal epithelium (nausea, mucositis), and bone marrow (immunosuppression, anaemia) — because the drug's selectivity is for *division rate*, not for cancer.

**P3 (a)** Compare $\ell_p$ with the 10 μm length. Microtubule: $\ell_p = 5000\ \mu\mathrm{m} \gg 10\ \mu$m — thermal bending over a cell width is negligible, so it is **effectively rigid**. Actin: $\ell_p = 17\ \mu$m, only slightly more than the cell width, so a 10 μm actin filament is **visibly bent by thermal energy**.

**(b)** Bending stiffness $\propto r^4$:

$$\left(\frac{12.5}{3.5}\right)^{4} = (3.571)^4 = \mathbf{163}.$$

Measured ratio: $5000/17 = \mathbf{294}$. The geometric estimate gets within a factor of about 2 — good, given that it ignores the hollow cross-section (a tube of 13 protofilaments puts material at the maximum radius, which raises stiffness above the solid-rod scaling) and any difference in the material modulus. The point stands: **the microtubule is stiff mostly because it is thick**, not because tubulin is a stiffer material than actin.

**(c)** A long-range track must stay straight to be useful as a direction, so it needs $\ell_p \gg$ cell size; a surface cortex must conform to and deform with a changing cell shape, so a floppy, easily-crosslinked filament is exactly right.

</details>

## Connections

- **Backward:** [1.1](01-01-crowded-cell-condensates.md) — crowding lowers effective critical concentrations, which is part of why *in vivo* assembly runs at concentrations that stay soluble *in vitro*.
- **Forward:** [1.3](01-03-motors-cargo-logistics.md) puts motors on these tracks; filament polarity is the entire reason directed transport exists. [3.1](03-01-cell-cycle-engine-irreversibility.md) returns to the spindle as the structure the cycle exists to build.
- **Sideways:** the stiffness comparison is the worm-like chain of [biophysics 3.2](../../biophysics/lessons/03-02-persistence-length-wlc.md), and the $r^4$ scaling is the second moment of area from [mechanics-of-materials 2.1](../../mechanics-of-materials/syllabus.md) — a microtubule is a thin-walled tube for exactly the reason a bicycle frame is.

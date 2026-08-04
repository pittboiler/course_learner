# Polymer & Materials Chemistry — Syllabus

> Chemistry · Tier 2 · ~18 lessons · Prereqs: [organic-chemistry](../organic-chemistry/syllabus.md), [physical-chemistry](../physical-chemistry/syllabus.md) · Roadmap id: `polymer-chemistry`

## Goal

Learn to reason from a single monomer to bulk material behavior: how a polymer is built (which mechanism, what kinetics), why its molecular-weight *distribution* — not a single number — governs everything, and how a tangle of long chains produces glass transitions, crystallinity, rubber elasticity, and the strange solid-that-flows behavior of viscoelastic materials. You will connect chain statistics to thermodynamics via Flory–Huggins, and end able to explain why a plastic is stiff, a rubber snaps back, and a solution phase-separates. This course deliberately skips industrial reactor/processing engineering and the synthetic depth of biopolymer chemistry — it is the *chain-to-property* backbone.

## Dangerous Checklist

When you finish, you can:

- [ ] Classify any polymer by mechanism, architecture, and structure, and name it from its repeat unit
- [ ] Predict whether a monomer set polymerizes by step-growth or chain-growth, and explain how their molecular-weight-vs-conversion curves differ
- [ ] Apply the Carothers equation to compute degree of polymerization from conversion and stoichiometric imbalance
- [ ] Write the kinetic chain for radical polymerization and estimate kinetic chain length, and contrast ionic and Ziegler–Natta routes
- [ ] Use reactivity ratios to predict copolymer composition and sequence (random / alternating / block)
- [ ] Compute $M_n$, $M_w$, and the dispersity Đ of a sample, and read them off a GPC / light-scattering measurement
- [ ] Model a chain as a random coil and compute its end-to-end distance and radius of gyration, including good-solvent scaling
- [ ] Predict and explain the glass transition, and shift it with the Fox equation for blends and plasticizers
- [ ] Estimate degree of crystallinity from density and explain semicrystalline morphology (lamellae, spherulites)
- [ ] Derive rubber elasticity as an entropic spring and explain why a stretched rubber band contracts when heated
- [ ] Use Flory–Huggins theory to classify solvent quality, locate the theta point, and find the critical point for phase separation
- [ ] Explain viscoelasticity and the reptation picture, and use the $\eta \propto M^{3.4}$ scaling above the entanglement threshold

## Modules

### Module 1: Polymerization Mechanisms

How chains get built — the two great mechanisms (step vs. chain growth), their kinetics, and the levers (stoichiometry, chain stoppers, comonomers) that set the product.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What is a polymer? Classification & nomenclature | Classify and name a polymer from its repeat unit and architecture | Monomer/repeat unit, thermoplastic vs. thermoset, homopolymer/copolymer, linear/branched/network, source vs. structure naming |
| 1.2 | Step-growth polymerization & its kinetics | Set up the rate law for a condensation polymerization and see why high MW comes late | Condensation, functional-group reactivity (equal reactivity principle), second-order kinetics, conversion $p$ |
| 1.3 | The Carothers equation | Compute degree of polymerization from conversion and stoichiometric imbalance | $X_n = 1/(1-p)$, stoichiometric ratio $r$, chain stoppers, gelation & functionality |
| 1.4 | Chain-growth I: radical polymerization | Write initiation/propagation/termination and estimate kinetic chain length | Initiation, propagation, termination, steady-state approximation, kinetic chain length, chain transfer |
| 1.5 | Chain-growth II: ionic & coordination polymerization | Choose a mechanism for control (living, stereoregular) and explain tacticity | Cationic/anionic (living) polymerization, Ziegler–Natta & metallocene catalysis, tacticity, stereoregularity |
| 1.6 | Copolymers & reactivity ratios | Predict copolymer composition and sequence from monomer reactivities | Reactivity ratios $r_1,r_2$, copolymer equation, random/alternating/block/graft, azeotropic composition |

**Boss problem 1:** A linear polyester is made from a diol and a diacid; treat the mean molar mass of a monomer structural unit as $M_0 = 100\ \mathrm{g/mol}$. (a) With exact stoichiometry ($r=1$) driven to conversion $p=0.995$, find the number-average degree of polymerization $X_n$ and $M_n$. (b) Now use a 1 mol% excess of diol ($r=0.99$) and drive the reaction to *completion* ($p=1$); find $X_n$ and $M_n$, and explain why "full conversion" no longer means "infinite chains." (c) Instead, to the stoichiometric batch you add a small amount of a *monofunctional* acid. Explain qualitatively what it does to $X_n$ and why — and contrast the whole molecular-weight-vs-conversion story with what a radical chain-growth polymerization would give.

### Module 2: Molecular Weight & Chain Statistics

Why a polymer needs a *distribution*, how we measure it, and the single most important idealization in the field: the chain as a random walk.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Molecular-weight averages & dispersity | Compute $M_n$, $M_w$, and Đ for any distribution and say what each average "feels" | Number- vs. weight-average, dispersity $Đ=M_w/M_n$, moments of a distribution, most-probable distribution |
| 2.2 | Measuring molecular weight | Match a technique to the average it reports | GPC/SEC (calibration, hydrodynamic volume), light scattering ($M_w$), osmometry ($M_n$), dilute-solution viscometry (Mark–Houwink) |
| 2.3 | The random coil: end-to-end distance | Model an ideal chain as a random walk and compute its size | Freely jointed chain, mean-square end-to-end distance $\langle R^2\rangle = Nb^2$, Gaussian statistics |
| 2.4 | Real chains: radius of gyration & excluded volume | Correct the ideal picture for stiffness and self-avoidance | Radius of gyration $R_g$, characteristic ratio & persistence length, excluded volume, good-solvent scaling $R\sim N^{3/5}$ |

**Boss problem 2:** A polymer sample is an equimolar mixture of two populations of chains, one with $M=10{,}000$ g/mol and one with $M=100{,}000$ g/mol. (a) Compute $M_n$, $M_w$, and the dispersity Đ. (b) Model the shorter chains as ideal freely-jointed walks of $N=10{,}000$ segments with segment length $b=0.25$ nm; compute the RMS end-to-end distance and the radius of gyration $R_g$. (c) The same chains are now dissolved in a *good* solvent. Does $R_g$ grow, shrink, or stay the same, and how does its scaling with $N$ change? Give the exponents and the one-sentence physical reason.

### Module 3: Solid-State & Thermal Properties

What happens when millions of these coils are packed into a bulk solid: glasses, crystals, and the entropy-spring behavior that makes rubber rubbery.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The glass transition | Explain $T_g$ as a kinetic freezing of segmental motion and predict what shifts it | Free volume, segmental motion, $T_g$ vs. $T_m$, effect of chain stiffness/side groups, plasticizers, Fox equation |
| 3.2 | Crystallinity & melting in polymers | Estimate degree of crystallinity and explain why polymers never fully crystallize | Chain folding, lamellae, degree of crystallinity from density, melting point $T_m$, Gibbs–Thomson |
| 3.3 | Semicrystalline morphology | Read a polymer's microstructure from spherulite to lamella | Spherulites, amorphous tie chains, nucleation & growth, structure–property links |
| 3.4 | Rubber elasticity: the entropic spring | Derive retractive force from chain entropy and explain the heating paradox | Entropic elasticity, single-chain force $f=(3kT/Nb^2)x$, crosslink density, $f\propto T$, thermoelastic inversion |

**Boss problem 3:** (a) PVC has $T_g = 354$ K; a plasticizer has $T_g = 189$ K. Using the Fox equation $1/T_g = w_1/T_{g,1} + w_2/T_{g,2}$, find the $T_g$ of a blend with 30 wt% plasticizer, and comment on whether the material is glassy or rubbery at room temperature. (b) A semicrystalline sample has density $\rho = 1.05\ \mathrm{g/cm^3}$; the fully amorphous and fully crystalline densities are $\rho_a = 1.00$ and $\rho_c = 1.15\ \mathrm{g/cm^3}$. Find the mass degree of crystallinity. (c) A stretched rubber band is gently heated. Predict whether it contracts or expands under its load, and justify it from the entropic-spring result $f \propto T$.

### Module 4: Solutions, Rheology & Functional Polymers

Polymers in a solvent (the thermodynamics of mixing and phase separation), how melts flow, and a closing taste of designer chains that assemble themselves.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Polymer solutions & Flory–Huggins theory | Build the free energy of mixing and see why polymers barely mix | Lattice model, entropy of mixing (small for long chains), $\chi$ parameter, $\Delta G_{mix}/kT = \frac{\phi}{N}\ln\phi + (1-\phi)\ln(1-\phi) + \chi\phi(1-\phi)$ |
| 4.2 | Solvent quality, theta conditions & phase separation | Classify a solvent and locate the critical point for demixing | Good/theta/poor solvent, $\chi=1/2$ theta point, critical $\chi_c$ and $\phi_c$, swelling & coil–globule transition |
| 4.3 | Viscoelasticity & polymer rheology | Explain solid-and-liquid behavior and the entanglement/reptation scaling | Stress relaxation & creep, Maxwell/Kelvin–Voigt models, time–temperature superposition, entanglement, reptation, $\eta\propto M^{3.4}$ |
| 4.4 | Self-assembly & functional polymers (a taste) | Recognize how block architecture and stimuli-response create structure and function | Block-copolymer microphase separation, micelles/vesicles, conducting & stimuli-responsive polymers, gels |

**Boss problem 4:** Use Flory–Huggins theory for a polymer of $N=100$ lattice sites in a solvent. (a) The critical point for phase separation is $\chi_c = \tfrac{1}{2}\left(1 + N^{-1/2}\right)^2$ at $\phi_c = 1/(1+\sqrt{N})$. Compute $\chi_c$ and $\phi_c$, and state what $\chi_c$ tends to as $N\to\infty$ and why that means long chains phase-separate easily. (b) Classify the solvent as good, theta, or poor if $\chi = 0.45$, and say what that implies for the coil size relative to the ideal chain. (c) The polymer's molar mass is doubled, keeping it well above the entanglement molar mass. Using $\eta \propto M^{3.4}$, by what factor does the melt (zero-shear) viscosity change, and give the one-sentence reptation reason a chain slows so steeply with length.

## Sources of truth

- Young & Lovell, *Introduction to Polymers* — mechanisms, kinetics, and molecular-weight conventions.
- Rubinstein & Colby, *Polymer Physics* — chain statistics, Flory–Huggins, scaling, and reptation notation.
- Sperling, *Introduction to Physical Polymer Science* — glass transition, crystallinity, and viscoelasticity treatment.
- IUPAC recommendations for polymer nomenclature (structure-based naming).

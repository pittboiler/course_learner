# Biophysics — Syllabus

> Physics · Tier 2 · ~21 lessons · Prereqs: [stat-mech](../stat-mech/syllabus.md) · Roadmap id: `biophysics`

## Goal

Learn to reason quantitatively about living matter using nothing more exotic than statistical mechanics and a good sense of scale. The organizing idea: at the size of a molecule, the thermal energy $k_BT \approx 4.1\ \text{pN·nm}$ is the ruler against which every energy, force, and structure is measured — binding, folding, motion, and signaling are all stories about a few $k_BT$ competing with entropy. You will build the toolkit — random walks and diffusion, the Boltzmann distribution applied to binding and gating, polymer elasticity, self-assembly, molecular motors, and the electrochemistry of membranes — and use it to make order-of-magnitude estimates that actually match measurements. This course leans hard on `stat-mech` (Boltzmann factors, free energy, the partition function, the fluctuation–dissipation / Einstein relation) and on `prob-stat-refresher` (random walks, the central limit theorem, maximum likelihood). It deliberately skips structural-biology detail (how to read a crystal structure), heavy biochemistry (reaction mechanisms), and network-level systems biology — that last one gets its own course, [`systems-biology`](../systems-biology/syllabus.md). It sets up the physical foundations for [`biochemistry`](../biochemistry/syllabus.md) and [`neuroscience`](../neuroscience/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Use $k_BT$ as a ruler to estimate whether a given molecular energy, force, or bond will survive thermal jostling
- [ ] Convert a random walk into a diffusion coefficient and estimate diffusion times and lengths for real cellular structures
- [ ] Solve Fick's laws in simple geometries and explain the diffusion-limited reaction rate
- [ ] Compute the Reynolds number for a swimming microorganism and explain why life at low $Re$ has no coasting and no inertial swimming
- [ ] Derive the Einstein relation $D = k_BT/\gamma$ and say what it means physically
- [ ] Write the Boltzmann/two-state model for ligand binding and channel gating, and read off the dissociation constant and midpoint
- [ ] Derive the Hill function and explain cooperativity and allostery as a sharpening of a Boltzmann response
- [ ] Model DNA or a protein as an entropic spring, and use the worm-like chain to fit a single-molecule force–extension curve
- [ ] Explain self-assembly of a lipid bilayer from the hydrophobic effect, and estimate a membrane's bending stiffness
- [ ] Compute the Debye screening length in physiological salt and say when electrostatics matters
- [ ] Derive Michaelis–Menten kinetics from mass action, and explain how a molecular motor rectifies thermal noise
- [ ] Derive the Nernst and Goldman equations and estimate a resting membrane potential from ion concentrations
- [ ] Extract a rate or a $K_d$ from single-molecule data by maximum likelihood, with an honest error bar

## Modules

### Module 1: Scales, random walks, and diffusion

Set the ruler — $k_BT$ and the sizes of the cell — then build diffusion from a random walk and see why viscosity, not inertia, rules molecular life.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The ruler of the cell: $k_BT$ and scales | Estimate cellular energies, forces, and sizes in the right units | $k_BT \approx 4.1$ pN·nm, ATP $\approx 20\,k_BT$, molecular vs thermal energy, orders of magnitude |
| 1.2 | The random walk | Turn many small random steps into a predictable spread | unbiased/biased walk, $\langle x\rangle=0$, $\langle x^2\rangle = Nb^2$, central limit theorem, Gaussian profile |
| 1.3 | Diffusion and Fick's laws | Go from the microscopic walk to the macroscopic flux equations | diffusion coefficient $D$, Fick's first/second laws, $\langle x^2\rangle = 2Dt$, steady-state profiles |
| 1.4 | The Einstein relation | Connect random kicks to drag: fluctuation meets dissipation | mobility, Stokes drag, $D = k_BT/\gamma$, diffusion-limited (Smoluchowski) rate |
| 1.5 | Life at low Reynolds number | Explain why microscopic swimming has no glide and needs asymmetry | Reynolds number, viscous vs inertial forces, the scallop theorem, Purcell's world |

**Boss problem 1:** A signaling protein has $D \approx 10\ \mu\text{m}^2/\text{s}$. Using $t \sim L^2/(6D)$, estimate the time to diffuse across a $1\ \mu\text{m}$ bacterium versus down a $1\ \text{m}$ neuron's axon, and argue from the two numbers why bacteria can rely on diffusion but neurons must pay for active transport. Then compute the Reynolds number for a bacterium swimming at $30\ \mu\text{m}/\text{s}$ ($L\sim1\ \mu\text{m}$, water $\nu \approx 10^{-6}\ \text{m}^2/\text{s}$) and state, in one sentence, what that value forbids.

### Module 2: Free energy and the Boltzmann distribution in biology

The same Boltzmann factor that gave you thermodynamics now governs binding, occupancy, and cooperativity — biology as competition between energy and entropy at a few $k_BT$.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Free energy and the cell's currency | Use $\Delta G$ and chemical potential to say which way a process goes | enthalpy vs entropy, Gibbs free energy, chemical potential, ATP hydrolysis, $\Delta G = \Delta G^\circ + k_BT\ln Q$ |
| 2.2 | The Boltzmann distribution and two-state systems | Predict the occupancy of an open/closed or bound/unbound switch | two-state system, Boltzmann weights, occupancy $p = 1/(1+e^{\Delta E/k_BT})$, thermal switching |
| 2.3 | Ligand binding and receptor occupancy | Derive the binding curve and read off the dissociation constant | law of mass action from statistics, dissociation constant $K_d$, Langmuir isotherm, grand-canonical view |
| 2.4 | Cooperativity and allostery | Explain why real binding curves are sharper than a single site allows | Hill function, Hill coefficient, MWC model, hemoglobin, ultrasensitivity |

**Boss problem 2:** Starting from Boltzmann weights, derive the single-site occupancy $p = \dfrac{[L]/K_d}{1+[L]/K_d}$ and show it is the Langmuir isotherm. Then treat a cooperative receptor with the Hill function $p = \dfrac{([L]/K_d)^n}{1+([L]/K_d)^n}$: compute the fold-change in $[L]$ needed to move occupancy from 10% to 90% for $n=1$ versus $n=2$, and use the answer to explain in one sentence why cells build cooperative switches.

### Module 3: Polymers, membranes, and self-assembly

Biology's big molecules are floppy chains and its compartments are self-assembled sheets — both are entropy-dominated, and both can be predicted from statistical mechanics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Polymers as random walks: the entropic spring | See why a floppy chain resists stretching with no bonds involved | ideal/freely-jointed chain, end-to-end distance, entropic elasticity, $F = (3k_BT/Nb^2)\,x$ |
| 3.2 | Persistence length and the worm-like chain | Add stiffness and get the model that actually fits DNA and proteins | bending energy, persistence length $l_p$, worm-like chain, $l_p^{\text{DNA}}\approx 50$ nm |
| 3.3 | Stretching single molecules | Fit a real force–extension curve and extract $l_p$ and contour length | optical/magnetic tweezers, Marko–Siggia interpolation, force scales, overstretching |
| 3.4 | Self-assembly and the hydrophobic effect | Explain why lipids spontaneously form bilayers and micelles | hydrophobic effect, amphiphiles, critical micelle concentration, packing parameter, cooperativity of assembly |
| 3.5 | Membrane mechanics | Treat a bilayer as an elastic sheet and quantify its fluctuations | area stretch, bending modulus $\kappa$, Helfrich energy, tension, thermal undulations |
| 3.6 | Electrostatics in salt water | Compute how far a charge's influence reaches in a cell | Poisson–Boltzmann equation, Debye screening length, Bjerrum length, counterion screening |

**Boss problem 3:** Model a DNA molecule of contour length $L$ and persistence length $l_p$ as a worm-like chain. In the low-force (entropic) limit, derive the linear stiffness $F \approx \dfrac{3k_BT}{2\,l_p L}\,x$ and identify the effective spring constant. Then use the Marko–Siggia formula $F = \dfrac{k_BT}{l_p}\!\left[\dfrac{1}{4(1-x/L)^2} - \dfrac14 + \dfrac{x}{L}\right]$ to explain what happens to the required force as $x \to L$, and estimate the force (in pN) needed to hold $\lambda$-DNA ($l_p \approx 50$ nm) at 90% of its contour length.

### Module 4: Motors, kinetics, and membrane potentials

Put it in motion: rates from mass action, motors that rectify Brownian noise, and the electrochemistry that lets membranes hold a voltage and neurons fire.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Reaction kinetics and mass action | Write down rate equations and find their equilibria and timescales | law of mass action, rate constants, relaxation to equilibrium, detailed balance |
| 4.2 | Enzyme kinetics: Michaelis–Menten | Derive the saturating rate law and interpret its two constants | quasi-steady-state, $v = V_{\max}[S]/(K_M+[S])$, $k_{\text{cat}}$, catalytic efficiency, diffusion limit |
| 4.3 | Molecular motors and the Brownian ratchet | Explain how a motor turns ATP and thermal noise into directed motion | kinesin/myosin, power stroke vs ratchet, rectified diffusion, force–velocity relation, stall force |
| 4.4 | Membrane potentials: Nernst and Goldman | Compute the voltage a membrane holds from ion concentrations | electrochemical potential, Nernst equation, permeability, Goldman–Hodgkin–Katz equation |
| 4.5 | Excitable membranes and the action potential | Explain qualitatively how voltage-gated channels make a spike | voltage-gated channels, gating as a two-state Boltzmann switch, Hodgkin–Huxley picture, threshold, refractory period |
| 4.6 | Single-molecule statistical inference | Turn noisy single-molecule traces into rates and $K_d$ with error bars | dwell-time distributions, maximum likelihood, Poisson/exponential fits, uncertainty, model comparison |

**Boss problem 4:** For a membrane permeable mainly to $\text{K}^+$ ($[\text{K}^+]_{\text{in}}=140$ mM, $[\text{K}^+]_{\text{out}}=5$ mM), derive and evaluate the Nernst potential at body temperature ($k_BT/e \approx 26$ mV). Then, letting the membrane also pass some $\text{Na}^+$, write the two-ion Goldman equation and explain which way the resting potential shifts as $\text{Na}^+$ permeability rises. Finally, model a voltage-gated channel's open probability as a two-state Boltzmann switch $P_{\text{open}}(V) = 1/\big(1+e^{(V_{1/2}-V)/V_s}\big)$, connect $V_s$ to the gating charge, and say in one sentence how this links back to the two-state binding curves of Module 2.

## Sources of truth

- Phillips, Kondev, Theriot & Garcia, *Physical Biology of the Cell* (primary; the estimate-first, statistical-mechanics viewpoint and the scope of this course)
- Nelson, *Biological Physics: Energy, Information, Life* (intuition, diffusion, entropy, and molecular machines)
- Berg, *Random Walks in Biology* (diffusion and low-Reynolds-number life); Purcell, "Life at Low Reynolds Number" (the classic paper)
- Howard, *Mechanics of Motor Proteins and the Cytoskeleton* (polymers and motors); Bialek, *Biophysics: Searching for Principles* (the inference and physical-principles view)

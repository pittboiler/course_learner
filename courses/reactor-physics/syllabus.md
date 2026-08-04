# Reactor Physics & Neutron Transport — Syllabus

> Engineering · Tier 2 · ~25 lessons · Prereqs: [intro-nuclear-engineering](../intro-nuclear-engineering/syllabus.md), [pdes](../pdes/syllabus.md) · Roadmap id: `reactor-physics`

## Goal

A reactor is a controlled critical chain reaction, and the whole subject is one question asked with increasing honesty: *where do the neutrons go?* This course builds the neutron population from the exact transport (Boltzmann) equation, collapses it to the diffusion approximation you can actually solve, and uses it to answer the questions that matter — what size and composition go critical, how fast the power moves when you nudge it, and why the reactor doesn't run away or die on you. You will leave able to size a bare reactor, read the six-factor formula as a life story of one neutron generation, run the point-kinetics equations, and explain the xenon transient that shut down more than one startup. It leans on `intro-nuclear-engineering` for cross sections and fission, and on `pdes` for the separation-of-variables and eigenvalue machinery that *is* criticality theory. Deliberately skipped: production Monte-Carlo transport codes and detailed thermal-hydraulic coupling — the latter is the sister course [`reactor-thermal-hydraulics`](../reactor-thermal-hydraulics/syllabus.md), which this one hands the temperature field to.

## Dangerous Checklist

When you finish, you can:

- [ ] Write the neutron transport equation, name every term physically, and reduce it to the one-group diffusion equation — stating exactly which approximations you spent
- [ ] Compute macroscopic cross sections, mean free paths, and reaction rates from microscopic data and number densities
- [ ] Solve the diffusion equation for flux shapes, currents, and diffusion length in source and boundary-value problems
- [ ] Build $k_\infty$ from the four-factor formula and $k_{\text{eff}}$ from the six-factor formula, and explain each factor as one stage of a neutron's life
- [ ] Decide whether a bare reactor is critical by matching material and geometric buckling, and compute its critical size and mass
- [ ] Estimate how neutrons slow down — lethargy, $\xi$, collisions to thermal — and get resonance escape and Fermi age
- [ ] Set up two-group / migration-area theory and size a reactor that leaks in both the fast and thermal ranges
- [ ] Write and interpret the point-kinetics equations, and explain why delayed neutrons are the only reason a reactor is controllable
- [ ] Convert reactivity into reactor period via the prompt-jump and inhour equations, and recognize prompt criticality
- [ ] Estimate Doppler, moderator, and void reactivity coefficients and judge whether a design is inherently stable
- [ ] Model xenon-135 and samarium-149 transients — equilibrium poisoning, the iodine pit, and restart limits
- [ ] Explain fuel burnup, conversion and breeding, and how rods and burnable poisons manage reactivity over a fuel cycle

## Modules

### Module 1: Transport & the diffusion approximation

The exact equation for the neutron population, and the honest set of approximations that turns it into something you can solve by hand.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Neutron balance & the transport equation | Write the neutron Boltzmann equation and read every term as a gain or loss | angular flux $\psi(\mathbf r,\hat\Omega,E,t)$, streaming/leakage $\hat\Omega\!\cdot\!\nabla\psi$, collision loss $\Sigma_t\psi$, in-scatter & fission sources, the transport equation as a phase-space balance |
| 1.2 | Cross sections, flux & reaction rates | Turn microscopic nuclear data into macroscopic reaction rates | microscopic $\sigma$ vs macroscopic $\Sigma=N\sigma$, mean free path $\lambda=1/\Sigma$, scalar flux $\phi=\int\psi\,d\Omega$, reaction rate $R=\Sigma\phi$, the one-speed reduction |
| 1.3 | The diffusion approximation & Fick's law | Reduce transport to diffusion and know precisely when you may not | $P_1$/diffusion approximation, Fick's law $\mathbf J=-D\nabla\phi$, $D=1/3\Sigma_{tr}$, transport cross section, where diffusion fails (near sources, boundaries, voids, strong absorbers) |
| 1.4 | The one-group diffusion equation & boundary conditions | Assemble and close the steady-state diffusion problem | $D\nabla^2\phi-\Sigma_a\phi+S=0$, interface continuity of $\phi$ and $J$, vacuum & extrapolated boundary $\tilde a=a+0.71\lambda_{tr}$, symmetry & finiteness conditions |
| 1.5 | Diffusion length & source problems | Solve point/plane-source problems and read off what $L$ means | infinite-medium point & plane sources, diffusion length $L=\sqrt{D/\Sigma_a}$, $\langle r^2\rangle=6L^2$, $L$ as the crow-flight range of a neutron before capture |

**Boss problem 1:** A point source emits $S$ neutrons/s isotropically at the origin of an infinite non-multiplying medium ($D$, $\Sigma_a$, $L=\sqrt{D/\Sigma_a}$). (a) Solve the one-group diffusion equation for $r>0$ and show $\phi(r)=\dfrac{S\,e^{-r/L}}{4\pi D r}$. (b) From the absorption-rate density $\Sigma_a\phi$, show the mean-square crow-flight distance to capture is $\langle r^2\rangle=6L^2$ and that the fraction of neutrons absorbed within one diffusion length is $1-2/e\approx0.26$. (c) For thermal neutrons in graphite ($L\approx52$ cm), how thick must a surrounding shield be to capture 95% of the emitted neutrons? *(Solve it yourself first — the 95% condition is $(1+r/L)e^{-r/L}=0.05$, giving $r\approx4.7L\approx245$ cm.)*

### Module 2: The critical reactor — multiplication & buckling

The central bargain of reactor design: production must exactly balance absorption plus leakage. This module makes that a geometry problem.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | $k_\infty$ & the four-factor formula | Follow one fission generation around an infinite lattice | $k_\infty=\eta f p \varepsilon$, reproduction factor $\eta$, thermal utilization $f$, resonance escape $p$, fast-fission factor $\varepsilon$, the neutron life cycle |
| 2.2 | Leakage & the six-factor formula | Add finite size and get the number that actually runs the reactor | $k_{\text{eff}}=k_\infty\,P_{\!FNL}\,P_{\!TNL}$, fast & thermal non-leakage probabilities, criticality $k_{\text{eff}}=1$, sub- vs super-critical |
| 2.3 | The criticality condition & geometric buckling | Recast criticality as an eigenvalue problem set by shape | one-group critical equation, material buckling $B_m^2=(k_\infty-1)/L^2$, geometric buckling $B_g^2$, criticality as $B_m^2=B_g^2$ |
| 2.4 | Bare reactor geometries & flux shapes | Solve $\nabla^2\phi+B^2\phi=0$ in the slab, sphere, and cylinder | separable geometries, the fundamental mode, $B_g^2$ formulas, extrapolated dimensions, peak-to-average flux (form factor) |
| 2.5 | Material buckling, critical size & mass | Predict the size and mass that go critical, and what moves them | solving $B_m=B_g$ for the critical dimension, critical mass, sensitivity to $L$ and composition, limits of one-group theory |

**Boss problem 2:** A bare spherical reactor of homogeneous fuel–moderator mixture has $k_\infty=1.06$ and diffusion length $L=1.8$ cm. Using one-group theory: (a) find the material buckling $B_m^2$ and the critical extrapolated radius $R$. (b) Write the fundamental-mode flux $\phi(r)=A\,\dfrac{\sin(B_g r)}{r}$ and show the peak-to-average flux ratio is $\pi^2/3\approx3.29$. (c) The core is now wrapped in a reflector worth a reflector saving $\delta=6$ cm; give the new physical critical radius. *(Solve it yourself first — $B_m^2\approx0.0185\ \text{cm}^{-2}$, $R=\pi/B_m\approx23.1$ cm, reflected $\approx17.1$ cm.)*

### Module 3: Spectra, slowing-down & few-group methods

Neutrons are born fast and fission best when slow; the physics between is where real reactors are won or lost.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Slowing down: lethargy & the slowing-down density | Quantify how a neutron loses energy by elastic scattering | lethargy $u=\ln(E_0/E)$, average log energy loss $\xi$, moderating power $\xi\Sigma_s$ & moderating ratio, slowing-down density $q(E)$, collisions to thermalize |
| 3.2 | Resonance escape & Fermi age theory | Model continuous slowing-down and its spatial spread | resonance integral & escape probability $p$, Fermi age $\tau$, the age equation, $\tau=\tfrac16\langle r^2\rangle$ of slowing-down, thermal non-leakage $e^{-B^2\tau}$ |
| 3.3 | Two-group diffusion theory | Split neutrons into fast and thermal and couple them | fast & thermal groups, group constants, removal cross section, two coupled diffusion equations, $k_{\text{eff}}=\dfrac{k_\infty}{(1+L^2B^2)(1+\tau B^2)}$ |
| 3.4 | Migration area, reflectors & heterogeneity | Compress multigroup and add the features of a real core | migration area $M^2=L^2+\tau$, $k_{\text{eff}}\approx k_\infty/(1+M^2B^2)$, reflector savings, homogeneous vs heterogeneous lattices & self-shielding (a taste) |

**Boss problem 3:** Two-group theory gives the critical condition $\dfrac{k_\infty}{(1+L^2B^2)(1+\tau B^2)}=1$. (a) Show that for small $M^2B^2$ this collapses to $k_{\text{eff}}\approx k_\infty/(1+M^2B^2)$ with $M^2=L^2+\tau$. (b) For $k_\infty=1.20$, $L^2=60\ \text{cm}^2$, $\tau=40\ \text{cm}^2$, find the critical buckling $B^2$ and the critical radius of a bare sphere. (c) Split the leakage: what fraction of neutrons escape while fast vs while thermal? *(Solve it yourself first — $M^2B^2=k_\infty-1=0.20\Rightarrow B^2=0.002\ \text{cm}^{-2}$, $R=\pi/B\approx70$ cm; fast leakage $\approx7\%$, thermal $\approx11\%$.)*

### Module 4: Reactor kinetics & reactivity

Now let power move in time. The surprise is that the reactor is only controllable because a tiny fraction of neutrons are late.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Delayed neutrons & the point-kinetics equations | Write the equations that govern reactor power in time | prompt vs delayed neutrons, delayed fraction $\beta$ & precursor groups, mean generation time $\Lambda$, point-kinetics ODEs for $P(t)$ and $C_i(t)$ |
| 4.2 | Reactivity & the prompt jump | Define reactivity and solve a small step insertion | reactivity $\rho=(k-1)/k$, dollars & cents ($\rho/\beta$), prompt-jump approximation, stable asymptotic period |
| 4.3 | Prompt criticality — why $\beta$ is the speed limit | Explain the qualitative catastrophe at $\rho=\beta$ | prompt-critical condition $\rho=\beta$, prompt vs delayed timescales, why delayed neutrons buy control, the cautionary physics of a prompt excursion |
| 4.4 | The inhour equation & the reactor period | Turn reactivity into period, quantitatively | inhour equation, reactor period $T$, one-delayed-group approximation, asymmetry of positive vs negative insertions |
| 4.5 | Sources, subcritical multiplication & startup | Understand a shutdown or starting reactor | subcritical multiplication $M=1/(1-k)$, source-driven flux, $1/M$ plots, approach to critical, startup rate |

**Boss problem 4:** A reactor at steady power gets a step reactivity insertion $\rho=+0.0015$ (about 23 cents; $\beta=0.0065$). Use one-delayed-group point kinetics with $\bar\lambda=0.08\ \text{s}^{-1}$ and $\Lambda=5\times10^{-5}$ s. (a) Use the prompt-jump approximation to find the immediate fractional power jump. (b) Find the stable asymptotic period and the doubling time. (c) Now set $\rho=\beta$: explain what physically changes, and estimate the prompt period $\Lambda/(\rho-\beta)$ for $\rho=1.005\beta$. *(Solve it yourself first — jump $=\beta/(\beta-\rho)=1.30$; asymptotic $\omega=\bar\lambda\rho/(\beta-\rho)=0.024\ \text{s}^{-1}\Rightarrow T\approx42$ s, doubling $\approx29$ s; at $\rho\ge\beta$ delayed neutrons are no longer required and the period collapses toward the prompt scale.)*

### Module 5: Feedback, poisons & fuel evolution

Real cores talk back: temperature, fission products, and burnup all move reactivity on their own clocks. This is how you keep a reactor stable and running for a fuel cycle.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Reactivity feedback & temperature coefficients | Close the loop — power changes reactivity | the feedback loop, temperature coefficient $\alpha_T=d\rho/dT$, sign & stability, prompt vs delayed feedback, the power defect |
| 5.2 | The Doppler & moderator/void coefficients | Compute the two feedbacks that decide inherent safety | Doppler broadening of resonances (fuel, prompt, ~always negative), moderator temperature coefficient, void coefficient, why the sign matters (PWR vs RBMK) |
| 5.3 | Xenon-135 transients & the iodine pit | Model the most consequential fission-product poison | $^{135}$I $\to$ $^{135}$Xe chain, enormous $\sigma_a$, equilibrium xenon, post-shutdown peak (the iodine pit) & dead time, restart limits |
| 5.4 | Xenon oscillations & samarium-149 | Handle the slower poison dynamics | axial/spatial xenon oscillations & stability, $^{149}$Sm (a stable poison), equilibrium & post-shutdown buildup, lumped fission-product poisoning |
| 5.5 | Fuel burnup, conversion & breeding | Track the fuel over the cycle | burnup (MWd/kgU), depletion via Bateman equations, conversion ratio, breeding, plutonium & minor-actinide buildup |
| 5.6 | Reactor control & operation | Put it all together to run a core over its life | control-rod worth, chemical shim & burnable poisons, excess reactivity vs cycle length, shutdown margin, the operational picture |

**Boss problem 5:** A reactor runs at constant flux $\phi$ until $^{135}$I and $^{135}$Xe reach equilibrium, then scrams ($\phi\to0$). Use fission yields $\gamma_I,\gamma_X$, decay constants $\lambda_I,\lambda_X$, and xenon absorption $\sigma_X$. (a) Write the coupled Bateman equations for $I(t)$ and $X(t)$ and find the at-power equilibria $I_{\text{eq}}=\gamma_I\Sigma_f\phi/\lambda_I$ and $X_{\text{eq}}=(\gamma_I+\gamma_X)\Sigma_f\phi/(\lambda_X+\sigma_X\phi)$. (b) After shutdown, solve $X(t)$ and show it first *rises* — because iodine still feeds xenon while the flux that burned it is gone — then decays; find the time of the peak from $\lambda_I I=\lambda_X X$. (c) Explain physically why a reactor scrammed from high power may be unable to restart for ~10–20 hours. *(Solve it yourself first — with $\lambda_I$ faster than $\lambda_X$ the peak lands near $t\approx11$ h; the transient negative reactivity can exceed the available control-rod excess.)*

## Sources of truth

- Duderstadt & Hamilton, *Nuclear Reactor Analysis* — primary spine for transport, diffusion, criticality, and kinetics notation and rigor.
- Lamarsh & Baratta, *Introduction to Nuclear Engineering*, and Lamarsh, *Introduction to Nuclear Reactor Theory* — for the six-factor formula, slowing-down, and worked-problem style.
- Stacey, *Nuclear Reactor Physics* — for two-group/few-group methods, feedback, and the poison transients.
- SI units throughout; KaTeX-compatible LaTeX, no custom macros.

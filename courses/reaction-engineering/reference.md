# Chemical Reaction Engineering · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Every reactor in this course is one accounting identity — **in − out + generation
= accumulation** — with two terms crossed out, fed a rate law from the lab. The
card is organized around that: the reactor-comparison table is the spine, the
rate-law and stoichiometry machinery is what makes the integrand computable, the
energy balance is what happens when temperature stops being a number you declare,
and catalysis is what happens when the reaction lives on a surface the reactant
has to reach first.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $-r_A$ | rate $A$ disappears, **per unit volume** — a property of the local $T$ and composition, not of the vessel | [1.1](lessons/01-01-rate-of-reaction-rate-law.md) |
| $r_A$ | the **signed** generation rate of $A$; negative for a reactant, so $-r_A > 0$ | [1.1](lessons/01-01-rate-of-reaction-rate-law.md) |
| $-r_A'$ | catalytic rate **per kg of catalyst** (the prime means "per mass") | [1.1](lessons/01-01-rate-of-reaction-rate-law.md) |
| $-r_A''$ | molar **flux** to a pellet's outer surface, per unit external area | [4.4](lessons/04-04-external-mass-transfer-disguised-kinetics.md) |
| $k$ | rate constant — intrinsic speed at fixed $T$; its units expose the order | [1.1](lessons/01-01-rate-of-reaction-rate-law.md) |
| $\alpha,\ \beta,\ n$ | orders in $A$, in $B$, and overall — fitted exponents, not coefficients | [1.1](lessons/01-01-rate-of-reaction-rate-law.md) |
| $A$ (Arrhenius) | pre-exponential factor — the $k$ you'd get if every collision cleared the barrier | [1.2](lessons/01-02-arrhenius-temperature-dependence.md) |
| $E$ | activation energy, **per mole** ($\mathrm{J/mol}$) — the barrier height | [1.2](lessons/01-02-arrhenius-temperature-dependence.md) |
| $F_{A0},\ F_A$ | molar flow of $A$ in and out ($\mathrm{mol/s}$); the "0" always means feed | [1.3](lessons/01-03-general-mole-balance.md) |
| $N_A,\ N_{A0}$ | moles of $A$ inside a batch now, and at $t=0$ | [1.3](lessons/01-03-general-mole-balance.md) |
| $V,\ W$ | reactor volume (L) and catalyst mass (kg), linked by $W=\rho_b V$ | [1.6](lessons/01-06-pfr-packed-bed.md) |
| $\rho_b$ | bulk density — kg of catalyst per L of bed; the only bridge between $-r_A$ and $-r_A'$ | [1.1](lessons/01-01-rate-of-reaction-rate-law.md) |
| $X$ | conversion — fraction of the **fed** $A$ that has reacted, 0 to 1 | [1.4](lessons/01-04-batch-reactor.md) |
| $C_{A0},\ C_A$ | inlet and local concentration of $A$ ($\mathrm{mol/L}$) | [1.4](lessons/01-04-batch-reactor.md) |
| $v_0,\ v$ | volumetric flow at the inlet and locally (L/s) — equal only if density is constant | [1.5](lessons/01-05-cstr.md) |
| $\tau$ | **space time** $V/v_0$ — how long it takes to process one reactor-volume of feed | [1.5](lessons/01-05-cstr.md) |
| $\Theta_i$ | feed ratio $F_{i0}/F_{A0}$ — moles of $i$ fed per mole of $A$ fed; $\Theta_A=1$ | [2.3](lessons/02-03-stoichiometry-concentration-conversion.md) |
| $\nu_i$ | signed stoichiometric coefficient — negative for reactants | [2.3](lessons/02-03-stoichiometry-concentration-conversion.md) |
| $\delta$ | change in **total** moles per mole of $A$ reacted | [2.3](lessons/02-03-stoichiometry-concentration-conversion.md) |
| $\varepsilon$ | expansion factor $y_{A0}\delta$ — the fractional volume change at complete conversion | [2.3](lessons/02-03-stoichiometry-concentration-conversion.md) |
| $y_{A0}$ | inlet mole fraction of $A$, $F_{A0}/F_{T0}$ | [2.3](lessons/02-03-stoichiometry-concentration-conversion.md) |
| $p$ | dimensionless pressure $P/P_0$ along a packed bed | [2.4](lessons/02-04-isothermal-design-pressure-drop-ergun.md) |
| $\alpha$ (Ergun) | the lumped pressure-drop parameter ($\mathrm{kg^{-1}}$) — **not** the reaction order | [2.4](lessons/02-04-isothermal-design-pressure-drop-ergun.md) |
| $S_{D/U},\ \tilde S_{D/U}$ | instantaneous and overall selectivity — good product over junk | [2.6](lessons/02-06-multiple-reactions-yield-selectivity.md) |
| $Y_D$ | yield — moles of $D$ made per mole of $A$ actually consumed | [2.6](lessons/02-06-multiple-reactions-yield-selectivity.md) |
| $\Delta H_{rx}$ | heat of reaction per mole of $A$ reacted; **negative = exothermic** | [3.1](lessons/03-01-reactor-energy-balance.md) |
| $C_{p,i},\ C_{p0}$ | molar heat capacity of $i$, and the feed bundle $C_{p0}=\sum_i\Theta_i C_{p,i}$ | [3.1](lessons/03-01-reactor-energy-balance.md) |
| $\dot Q,\ \dot W_s$ | external heat duty through the wall, and shaft work by the fluid (usually dropped) | [3.1](lessons/03-01-reactor-energy-balance.md) |
| $\Delta T_{ad}$ | adiabatic temperature rise — the swing at $X=1$ | [3.2](lessons/03-02-adiabatic-operation.md) |
| $Ua,\ T_a$ | heat-transfer coefficient times area per unit volume, and coolant temperature | [3.3](lessons/03-03-reactors-with-heat-exchange.md) |
| $G(T),\ R(T)$ | heat generated (S-shaped) and heat removed (straight line), per mole of $A$ fed | [3.4](lessons/03-04-multiple-steady-states-cstr.md) |
| $\kappa,\ T_c$ | dimensionless cooling capacity, and the effective (blended) coolant temperature | [3.4](lessons/03-04-multiple-steady-states-cstr.md) |
| $\theta_A$ | fractional coverage — fraction of catalyst sites holding $A$ | [4.1](lessons/04-01-catalysis-langmuir-isotherm.md) |
| $K_A$ | adsorption equilibrium constant ($\mathrm{atm^{-1}}$) — how hard $A$ sticks | [4.1](lessons/04-01-catalysis-langmuir-isotherm.md) |
| $C_v,\ C_t$ | vacant and total site concentration (mol/kg catalyst) | [4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md) |
| $D_e$ | effective diffusivity inside a pellet — free diffusivity charged for pore geometry | [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md) |
| $\phi$ | Thiele modulus — reaction speed over diffusion speed inside the pellet | [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md) |
| $\eta$ | effectiveness factor — the fraction of the pellet you paid for and actually got | [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md) |
| $C_{WP}$ | Weisz–Prater number $\eta\phi^2$, computable from observables alone | [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md) |
| $k_c$ | film mass-transfer coefficient (m/s) — thinner film, bigger $k_c$ | [4.4](lessons/04-04-external-mass-transfer-disguised-kinetics.md) |
| $C_{Ab},\ C_{As}$ | bulk and pellet-surface concentration — the rate law lives on $C_{As}$ | [4.4](lessons/04-04-external-mass-transfer-disguised-kinetics.md) |
| $E(t),\ F(t)$ | exit-age density and its running integral (the RTD from a pulse / a step) | [4.5](lessons/04-05-residence-time-distribution.md) |
| $t_m,\ \sigma^2$ | mean residence time and RTD variance — the two numbers a tracer test buys you | [4.5](lessons/04-05-residence-time-distribution.md) |
| $N$ (tanks) | number of equal CSTRs the real vessel behaves like | [4.6](lessons/04-06-nonideal-reactor-models.md) |
| $D_a,\ Pe$ | axial dispersion coefficient and the Péclet number $uL/D_a$ | [4.6](lessons/04-06-nonideal-reactor-models.md) |
| $\mu,\ \mu_{max},\ K_s$ | specific growth rate, its ceiling, and the Monod half-saturation constant | [4.6](lessons/04-06-nonideal-reactor-models.md) |
| $D$ (dilution) | dilution rate $v_0/V = 1/\tau$ in a chemostat | [4.6](lessons/04-06-nonideal-reactor-models.md) |

**Symbols that collide — check the context before you trust one.** $A$ is a
species *and* the Arrhenius pre-exponential. $\alpha$ is a reaction order *and*
the lumped Ergun constant. $\tau$ is the space time *and* the pellet tortuosity
in $D_e$. $\varepsilon$ is the gas expansion factor while $\varepsilon_p$ is
pellet porosity and $\varepsilon_b$ is bed void fraction. $E$ is the activation
energy while $E(t)$ is the exit-age distribution. $D$ is a diffusivity everywhere
except the chemostat, where it is the dilution rate. $N$ is moles in Module 1 and
a tank count in 4.6. $R$ is the gas constant, the pellet radius, *and* the
heat-removal line $R(T)$.

## Definitions

### Rate of reaction

How many moles of $A$ disappear each second in each liter of reacting fluid — an
**intensive** property of the local state, which is exactly why you can measure it
in a flask and design a vessel a million times larger with it.

$$-r_A = f(T,\,C_A,\,C_B,\dots), \qquad [-r_A] = \frac{\mathrm{mol}}{\mathrm{L\cdot s}}, \qquad -r_A = \rho_b\,(-r_A')$$

*Introduced:* [1.1](lessons/01-01-rate-of-reaction-rate-law.md)

### Rate law

The algebraic statement of how the rate depends on composition — the one piece of
physics the design equations cannot derive for themselves. It comes from the lab.

$$-r_A = k\,C_A^{\alpha}C_B^{\beta}, \qquad \text{overall order } n = \alpha+\beta$$

*Introduced:* [1.1](lessons/01-01-rate-of-reaction-rate-law.md)

### Elementary reaction

The balanced equation *is* the molecular event: those molecules collide and react
in one step. This — and only this — licenses reading the orders straight off the
stoichiometric coefficients. Everything else is non-elementary, and its exponents
are measured, possibly fractional, zero, or negative.

*Introduced:* [1.1](lessons/01-01-rate-of-reaction-rate-law.md)

### Molecularity vs. order

**Molecularity** counts molecules in an elementary step (uni-, bi-, termolecular)
— a mechanistic whole number. **Order** is an empirical exponent fitted to data.
They coincide only for an elementary step. "Order 1.5" describes data, not
molecules.

*Introduced:* [1.1](lessons/01-01-rate-of-reaction-rate-law.md)

### Activation energy

The energy barrier a collision must clear, quoted **per mole** — which is why $R$
and not $k_B$ sits in the Arrhenius denominator. The fraction of molecules with
enough energy is $e^{-E/RT}$, so temperature multiplies the rate rather than
nudging it.

*Introduced:* [1.2](lessons/01-02-arrhenius-temperature-dependence.md)

### General mole balance

Draw a box around any region, pick species $A$, and audit it: in minus out plus
what reaction made equals what piled up. Every reactor in the course is this
sentence with two terms crossed out.

$$F_{A0} - F_A + \int_V r_A\,dV = \frac{dN_A}{dt}$$

*Introduced:* [1.3](lessons/01-03-general-mole-balance.md)

### Perfect mixing

The stirrer smears every entering molecule instantly across the whole tank, so the
interior has **one** composition and the exit stream carries exactly it. That is
the license to replace $\int_V r_A\,dV$ with $r_A V$ — and the reason a CSTR runs
its entire volume at the low *exit* rate.

*Introduced:* [1.5](lessons/01-05-cstr.md)

### Plug flow

Thin discs of fluid slide down the tube nose to tail and never mix with the disc
ahead or behind — each plug is a little batch reactor on a conveyor belt.
Conversion is a **profile along the length**, not one number. Note it still
assumes perfect mixing *across* each slice; only axial mixing is banned.

*Introduced:* [1.6](lessons/01-06-pfr-packed-bed.md)

### Conversion

The fraction of the $A$ you fed that has reacted — one dimensionless number from
0 to 1 that replaces "how much is left" with "$1-X$ of it."

$$X = \frac{\text{moles of }A\text{ reacted}}{\text{moles of }A\text{ fed}}, \qquad F_A = F_{A0}(1-X), \qquad N_A = N_{A0}(1-X)$$

*Introduced:* [1.4](lessons/01-04-batch-reactor.md), [2.1](lessons/02-01-conversion-design-equations.md)

### Space time

How long it takes to push one reactor-volume of feed through. It equals the mean
residence time **only** when the volumetric flow is constant — liquids, or gases
with no mole change and no $T$/$P$ shift.

$$\tau \equiv \frac{V}{v_0}$$

*Introduced:* [1.5](lessons/01-05-cstr.md)

### Stoichiometric table

One row per species — in, change, out — with every change written as a fixed
multiple of $F_{A0}X$. It is the machine that turns a rate law written in
concentrations into a rate written in $X$, which is the only form the design
equations can integrate.

$$F_i = F_{A0}\left(\Theta_i + \frac{\nu_i}{-\nu_A}X\right)$$

*Introduced:* [2.3](lessons/02-03-stoichiometry-concentration-conversion.md)

### Expansion factor

How much the gas swells (or shrinks) by the time the reaction is complete. It is
the reaction's mole change $\delta$ **diluted by how much of the feed is actually
$A$** — a reaction that doubles moles but rides in 90 percent inert barely expands
at all.

$$\delta = \frac{\sum_i \nu_i}{-\nu_A}, \qquad \varepsilon = y_{A0}\,\delta$$

*Introduced:* [2.3](lessons/02-03-stoichiometry-concentration-conversion.md)

### Levenspiel plot

Plot $F_{A0}/(-r_A)$ — a quantity with units of **volume** — against $X$. A PFR is
then the area under the curve and a CSTR is the rectangle up to it, so sizing a
reactor train becomes tiling that region with the least total area.

*Introduced:* [2.2](lessons/02-02-levenspiel-plots-reactors-in-series.md)

### Selectivity and yield

Conversion says how much reactant you spent; these say whether you spent it well.
**Selectivity** is desired product versus junk; **yield** is desired product per
mole of reactant burned.

$$S_{D/U} = \frac{r_D}{r_U}, \qquad \tilde S_{D/U} = \frac{F_D}{F_U}, \qquad Y_D = \frac{F_D}{F_{A0}-F_A}$$

*Introduced:* [2.6](lessons/02-06-multiple-reactions-yield-selectivity.md)

### Heat of reaction

Energy released or absorbed per mole of $A$ reacted, evaluated at the reaction
temperature. **Negative is exothermic** (the same convention as
`engineering-thermodynamics`), so the positive heat *liberated* is
$\dot Q_{rxn} = (-\Delta H_{rx})F_{A0}X$.

*Introduced:* [3.1](lessons/03-01-reactor-energy-balance.md)

### Adiabatic temperature rise

The biggest temperature swing the reaction can produce — all of its heat spread
across all of the stream's heat capacity. Inerts sit in the denominator, which is
why diluting the feed tames a hot reaction.

$$\Delta T_{ad} = \frac{-\Delta H_{rx}}{\sum_i\Theta_i C_{p,i}}$$

*Introduced:* [3.2](lessons/03-02-adiabatic-operation.md)

### Hot spot

The interior temperature maximum in a cooled tubular reactor: the one place where
the jacket pulls heat out exactly as fast as the reaction makes it. Downstream of
it, removal wins and $T$ falls. If no such balance is ever reached, the reactor
runs away.

$$\left.\frac{dT}{dV}\right|_{\text{hot spot}} = 0 \iff Ua\,(T-T_a) = (-\Delta H_{rx})(-r_A)$$

*Introduced:* [3.3](lessons/03-03-reactors-with-heat-exchange.md)

### Multiple steady states

A straight line can cut an S-curve either once or three times. Heat removal $R(T)$
is the line, heat generation $G(T)$ the S — so an exothermic CSTR can have three
temperatures at which the same equations balance: **extinguished** (low),
**unstable** (middle), **ignited** (high).

*Introduced:* [3.4](lessons/03-04-multiple-steady-states-cstr.md)

### Ignition, extinction, hysteresis

Slide the removal line right (hotter coolant) and the low and middle states merge
and vanish — the reactor **ignites**, jumping to the high branch. Slide it left
and the high and middle merge — it **extinguishes**. The two jumps happen at
*different* coolant temperatures, so between them the reactor remembers which
branch it is on: that gap is the hysteresis.

*Introduced:* [3.4](lessons/03-04-multiple-steady-states-cstr.md)

### Thermal runaway

Not a new reaction — a **heat-balance failure**. Temperature raises $k$
exponentially, which raises the rate, which raises the heat, which raises the
temperature, with no higher stable state to arrest the climb.

$$T\uparrow \Rightarrow k = Ae^{-E/RT}\uparrow \Rightarrow (-r_A)\uparrow \Rightarrow \text{heat}\uparrow \Rightarrow T\uparrow\uparrow$$

*Introduced:* [3.5](lessons/03-05-stability-runaway.md)

### Parametric sensitivity

Near the runaway boundary the peak temperature depends brutally on inputs: a few
kelvin in $T_a$, a few percent of fouling in $Ua$, or one concentrated slug of
feed can swing the peak by hundreds of degrees. "Barely stable" is not an
operating point.

*Introduced:* [3.5](lessons/03-05-stability-runaway.md)

### Active site

The specific spot on a catalyst — a metal atom, a defect, an acid site — where a
molecule binds, gets its barrier lowered, reacts, and leaves. The catalyst is
unchanged, so it changes the *speed* to equilibrium and never the equilibrium
itself. Sites are finite, which is the whole story of Module 4.

*Introduced:* [4.1](lessons/04-01-catalysis-langmuir-isotherm.md)

### Langmuir adsorption isotherm

A surface is a parking lot with a fixed number of spaces: coverage climbs linearly
with pressure until the lot fills, then flattens. Assumes fixed identical sites,
a monolayer only, and no interaction between neighbors.

$$\theta_A = \frac{K_AP_A}{1+K_AP_A}, \qquad \theta_A = \tfrac12 \text{ at } P_A = 1/K_A$$

*Introduced:* [4.1](lessons/04-01-catalysis-langmuir-isotherm.md)

### Site balance

Sites are conserved: every one is vacant, holding $A$, or holding something else.
This is the equation that puts the competition into the *denominator* of a
catalytic rate law.

$$C_t = C_v + \sum_i C_{i\cdot S} = C_v\big(1 + K_AP_A + K_BP_B + \cdots\big)$$

*Introduced:* [4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md)

### LHHW rate law

Langmuir–Hinshelwood–Hougen–Watson: a coverage story. The numerator is the slow
step's driving force, the denominator is everyone competing for the surface, and
the denominator's **exponent counts the sites the slow step needs**.

$$-r_A' = \frac{k\,K_AP_A}{\big(1+K_AP_A+K_BP_B\big)^m}, \qquad k = k_sC_t,\ \ m = \text{sites required}$$

*Introduced:* [4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md)

### Rate-limiting step

The one slow step in the adsorption–reaction–desorption cycle; the fast steps stay
at equilibrium and merely report how full the surface is. Which step is slow
rewrites the entire pressure dependence, so you diagnose the mechanism by fitting
each candidate form.

*Introduced:* [4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md)

### Effective diffusivity

The diffusivity a molecule actually feels once you charge it for pores being
narrow, winding, and mostly absent. Typically an order of magnitude below the
free-gas value.

$$D_e = \frac{D_{AB}\,\varepsilon_p\,\sigma_c}{\tau_{\text{tort}}}$$

*Introduced:* [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md)

### Thiele modulus

Does the reactant reach the core before it's eaten? It is reaction rate over
diffusion rate inside the pellet — large $\phi$ means a starved core with only a
thin reacting shell.

$$\phi = R\sqrt{\frac{k}{D_e}} \quad(\text{sphere, first order; dimensionless})$$

*Introduced:* [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md)

### Effectiveness factor

The fraction of your pellet's potential you actually get: actual rate over the
rate the whole pellet would give if it all sat at the surface concentration.

$$\eta = \frac{(-r_A)_{\text{observed}}}{(-r_A)_{\text{surface}}}, \qquad (-r_A)_{\text{obs}} = \eta\,k\,C_{As}$$

*Introduced:* [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md)

### Weisz–Prater criterion

The field test for a dead pellet core, built from **observables only** — measured
rate, pellet radius, density, surface concentration — with no intrinsic $k$
needed. Small means no internal limitation; large means diffusion-limited.

$$C_{WP} = \eta\phi^2 = \frac{(-r_A')_{\text{obs}}\,\rho_c R^2}{D_e\,C_{As}}$$

*Introduced:* [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md)

### Disguised (falsified) kinetics

When a transport leg controls, the measured rate takes on *transport's*
personality instead of chemistry's — the apparent order and the apparent
activation energy are both wrong, and the true kinetics is masked.

*Introduced:* [4.4](lessons/04-04-external-mass-transfer-disguised-kinetics.md)

### Residence-time distribution

The histogram of exit ages you read straight off a tracer test: $E(t)\,dt$ is the
fraction of the fluid now leaving that has been inside between $t$ and $t+dt$.
Dividing by the total area is normalization — it makes the answer independent of
how big your spoonful of dye was.

$$E(t) = \frac{C(t)}{\int_0^\infty C(t)\,dt}, \qquad \int_0^\infty E(t)\,dt = 1$$

*Introduced:* [4.5](lessons/04-05-residence-time-distribution.md)

### Bypass and dead volume

The two diagnoses an RTD hands you. An **early spike** in $E(t)$ means feed is
channeling straight to the outlet; a **long tail** (and $t_m < \tau$) means fluid
is trapped in stagnant zones it only slowly escapes.

*Introduced:* [4.5](lessons/04-05-residence-time-distribution.md)

### Segregation vs. maximum mixedness

The RTD says how long molecules stay, not *when* they mix. **Complete
segregation**: fluid travels as isolated packets, each its own batch reactor,
mixing only at the exit. **Maximum mixedness**: molecules mix as early as their
common fate allows. Real reactors sit between — so you get a bracket, not a point.

$$\bar X_{\text{seg}} = \int_0^\infty X(t)\,E(t)\,dt$$

*Introduced:* [4.6](lessons/04-06-nonideal-reactor-models.md)

### Monod kinetics

The biological twin of the Langmuir isotherm — the same saturating hyperbola, here
for cells feeding on substrate. $K_s$ is the substrate concentration at which
growth runs at half speed.

$$\mu = \frac{\mu_{max}\,S}{K_s+S}$$

*Introduced:* [4.6](lessons/04-06-nonideal-reactor-models.md)

## Formulas and rules

### The four ideal reactors — the comparison table

One mole balance, four costumes. Rows in the closed-form columns assume a
**liquid, first-order** reaction with $-r_A = kC_A$, so $\tau = V/v_0$ and, for
the PBR, $-r_A' = k'C_A$ with $k'$ in $\mathrm{L\,kg^{-1}s^{-1}}$.

| Reactor | What's switched off | Design equation | $X$ at fixed size | When it wins |
|---|---|---|---|---|
| **Batch** | no flow in or out | $\displaystyle t = N_{A0}\int_0^X\frac{dX}{(-r_A)V}$ | $X = 1-e^{-kt}$ | small volumes, many products on one vessel, slow or expensive chemistry; pay for it in turnaround time |
| **CSTR** | steady **and** perfectly mixed | $\displaystyle V = \frac{F_{A0}X}{(-r_A)_{\text{exit}}}$ — **algebra** | $X = \dfrac{\tau k}{1+\tau k}$ | when you *want* low $C_A$ (lower-order desired path), for viscous or solids-laden fluids, easy temperature control, and as a kinetics instrument (it reports $-r_A$ directly) |
| **PFR** | steady, rate varies down the tube | $\displaystyle V = F_{A0}\int_0^X\frac{dX}{-r_A}$ | $X = 1-e^{-\tau k}$ | ordinary decaying kinetics — smallest volume for a given $X$; and for a target intermediate, since every molecule gets the same clock |
| **PBR** | steady, catalytic — mass not volume | $\displaystyle W = F_{A0}\int_0^X\frac{dX}{-r_A'}$ | $X = 1-e^{-k'W/v_0}$ | anything on a solid catalyst; sized in kg, and you must watch pressure drop |

The one distinction worth memorizing: **can I treat the box as uniform?** Yes gives
an algebraic design equation (CSTR); no gives a differential one (PFR, PBR, batch).

*From* [1.3](lessons/01-03-general-mole-balance.md), [1.4](lessons/01-04-batch-reactor.md), [1.5](lessons/01-05-cstr.md), [1.6](lessons/01-06-pfr-packed-bed.md), [2.1](lessons/02-01-conversion-design-equations.md)

### Closed forms by order (liquid, constant density)

| Order | Batch $t$ | CSTR $\tau$ | PFR $\tau$ |
|---|---|---|---|
| $0$ | $\dfrac{C_{A0}X}{k}$ | $\dfrac{C_{A0}X}{k}$ | $\dfrac{C_{A0}X}{k}$ |
| $1$ | $\dfrac{1}{k}\ln\dfrac{1}{1-X}$ | $\dfrac{X}{k(1-X)}$ | $\dfrac{1}{k}\ln\dfrac{1}{1-X}$ |
| $2$ | $\dfrac{1}{kC_{A0}}\dfrac{X}{1-X}$ | $\dfrac{X}{kC_{A0}(1-X)^2}$ | $\dfrac{1}{kC_{A0}}\dfrac{X}{1-X}$ |

At zero order all three coincide — there is no rate gradient to exploit. The
first-order CSTR-to-PFR volume ratio is $\dfrac{X/(1-X)}{\ln[1/(1-X)]}$, which is
about $2.5$ at $X=0.8$ and diverges as $X\to1$: chasing the last few percent in a
stirred tank costs unbounded volume.

For a **gas** PFR, first order, isothermal and isobaric with expansion factor
$\varepsilon$:

$$V = \frac{v_0}{k}\int_0^X\frac{1+\varepsilon X}{1-X}\,dX = \frac{v_0}{k}\left[(1+\varepsilon)\ln\frac{1}{1-X} - \varepsilon X\right]$$

*From* [1.4](lessons/01-04-batch-reactor.md), [1.5](lessons/01-05-cstr.md), [1.6](lessons/01-06-pfr-packed-bed.md), [2.4](lessons/02-04-isothermal-design-pressure-drop-ergun.md)

### Sizing a train — the Levenspiel tiling rule

The exit conversion of one reactor is the inlet conversion of the next, so each
stage is just the shape drawn over its own slice of the $X$-axis:

$$V_{\text{PFR},i} = \int_{X_{i-1}}^{X_i}\frac{F_{A0}}{-r_A}\,dX, \qquad V_{\text{CSTR},i} = \left.\frac{F_{A0}}{-r_A}\right|_{X_i}\big(X_i - X_{i-1}\big)$$

Total volume is the tiles stacked side by side, so **sizing a train is tiling the
region under the curve with the least total area**. The rule that falls out:

- Where $F_{A0}/(-r_A)$ **rises**, the rectangle overshoots the area → **PFR wins**.
- Where it **falls or is flat**, the rectangle undershoots → **CSTR wins**.
- Ordinary decaying kinetics only rise, so one PFR beats one CSTR — but a *train*
  of CSTRs still beats a single CSTR, because each stage's rectangle is only as
  tall as its own exit.
- **Autocatalytic** kinetics dip to a minimum: put a CSTR across the low basin,
  then a PFR up the climb after it. That combination beats either single reactor.

*From* [2.2](lessons/02-02-levenspiel-plots-reactors-in-series.md)

### Rate constants: units and temperature

$$[k] = \left(\frac{\mathrm{mol}}{\mathrm{L}}\right)^{1-n}\mathrm{s^{-1}}$$

| Overall order $n$ | Rate law | Units of $k$ |
|---|---|---|
| $0$ | $-r_A = k$ | $\mathrm{mol\,L^{-1}\,s^{-1}}$ |
| $1$ | $-r_A = kC_A$ | $\mathrm{s^{-1}}$ |
| $2$ | $-r_A = kC_A^2$ | $\mathrm{L\,mol^{-1}\,s^{-1}}$ |
| $3/2$ | $-r_A = kC_A^{3/2}$ | $\mathrm{mol^{-1/2}\,L^{1/2}\,s^{-1}}$ |

Units are a free error-detector: a $k$ quoted in $\mathrm{L\,mol^{-1}s^{-1}}$ is
second order before you read another word. **Arrhenius**, with
$R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$ and $T$ in kelvin:

$$k = A\,e^{-E/(RT)}, \qquad \ln k = \ln A - \frac{E}{R}\cdot\frac{1}{T}, \qquad \ln\frac{k_2}{k_1} = -\frac{E}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)$$

Plot $\ln k$ against $1/T$: **slope** $=-E/R$, **intercept** $=\ln A$. Rule of
thumb: "rate doubles per 10 K near room temperature" is $E\approx50$–$55\ \mathrm{kJ/mol}$.

*From* [1.1](lessons/01-01-rate-of-reaction-rate-law.md), [1.2](lessons/01-02-arrhenius-temperature-dependence.md)

### Extracting a rate law from data

**Integral method** — exactly one of these linearizations comes out straight over
the *whole* dataset, and its slope gives $k$:

| Order $n$ | Integrated form | Plot that is straight | Slope |
|---|---|---|---|
| $0$ | $C_A = C_{A0}-kt$ | $C_A$ vs $t$ | $-k$ |
| $1$ | $\ln C_A = \ln C_{A0}-kt$ | $\ln C_A$ vs $t$ | $-k$ |
| $2$ | $1/C_A = 1/C_{A0}+kt$ | $1/C_A$ vs $t$ | $+k$ |

**Differential method** — central-difference the data, then log–log it; the slope
is the order and the intercept is $\ln k$:

$$-r_A(t_i) \approx -\frac{C_A(t_{i+1})-C_A(t_{i-1})}{t_{i+1}-t_{i-1}}, \qquad \ln(-r_A) = \ln k + n\ln C_A$$

**Method of initial rates** — vary one initial concentration, clock only $t\to0$:

$$\alpha = \frac{\ln\big(r_{A0,2}/r_{A0,1}\big)}{\ln\big(C_{A0,2}/C_{A0,1}\big)}$$

**A CSTR needs no calculus at all**: rearranging its design equation reports the
rate directly, $-r_A = F_{A0}X/V$, so run it at several feed rates and log–log the
measured pairs. **Nonlinear regression** on the whole curve is the catch-all you'd
actually use; the graphical methods give the solver its starting guess.

*From* [2.5](lessons/02-05-analysis-of-rate-data.md)

### Stoichiometry: concentration as a function of conversion

| Species | In | Change | Out |
|---|---|---|---|
| $A$ | $F_{A0}$ | $-F_{A0}X$ | $F_{A0}(1-X)$ |
| $B$ | $\Theta_BF_{A0}$ | $-\tfrac{b}{a}F_{A0}X$ | $F_{A0}(\Theta_B - \tfrac{b}{a}X)$ |
| $C$ | $\Theta_CF_{A0}$ | $+\tfrac{c}{a}F_{A0}X$ | $F_{A0}(\Theta_C + \tfrac{c}{a}X)$ |
| $I$ (inert) | $\Theta_IF_{A0}$ | $0$ | $\Theta_IF_{A0}$ |

**Liquid (constant density):**

$$C_i = C_{A0}\left(\Theta_i + \frac{\nu_i}{-\nu_A}X\right) \qquad\Rightarrow\qquad C_A = C_{A0}(1-X)$$

**Gas with mole change**, where $v = v_0(1+\varepsilon X)\dfrac{T}{T_0}\dfrac{P_0}{P}$:

$$C_A = C_{A0}\,\frac{1-X}{1+\varepsilon X}\,\frac{T_0}{T}\,\frac{P}{P_0}, \qquad C_i = C_{A0}\,\frac{\Theta_i + \tfrac{\nu_i}{-\nu_A}X}{1+\varepsilon X}\,\frac{T_0}{T}\,\frac{P}{P_0}$$

$\varepsilon > 0$ (more moles made) **dilutes** $A$ and makes the reactor bigger;
$\varepsilon < 0$ concentrates it. Isothermal and isobaric drops the last two
factors; $\varepsilon = 0$ recovers the liquid form.

*From* [2.3](lessons/02-03-stoichiometry-concentration-conversion.md)

### Pressure drop in a packed bed

The lessons lump the friction constants into a single $\alpha$; the correlation
behind that lump is the **Ergun equation**, stated nowhere else in the library:

$$\frac{dP}{dz} = -\left[\underbrace{\frac{150\,\mu\,(1-\varepsilon_b)^2}{\varepsilon_b^{3}D_p^{2}}\,u_s}_{\text{viscous, laminar}} + \underbrace{\frac{1.75\,(1-\varepsilon_b)\,\rho\,u_s^{2}}{\varepsilon_b^{3}D_p}}_{\text{inertial, turbulent}}\right]$$

with $u_s$ the superficial velocity, $D_p$ the pellet diameter, $\varepsilon_b$
the bed void fraction, $\mu$ the gas viscosity and $\rho$ its density. In the
dimensionless pressure $p = P/P_0$ for an isothermal bed this becomes

$$\frac{dp}{dW} = -\frac{\alpha}{2p}\,(1+\varepsilon X), \qquad C_A = C_{A0}\,\frac{1-X}{1+\varepsilon X}\,p$$

where $\alpha$ ($\mathrm{kg^{-1}}$) lumps viscosity, density, superficial
velocity, pellet size, void fraction and bed cross-section. This ODE and
$dX/dW = (-r_A')/F_{A0}$ are **coupled both ways** and must be marched together.
Only $\varepsilon = 0$ decouples, giving

$$p = \sqrt{1-\alpha W}, \qquad W_{\max} = \frac{1}{\alpha}$$

— a hard ceiling on how much catalyst the bed can hold before it chokes.

*From* [2.4](lessons/02-04-isothermal-design-pressure-drop-ergun.md)

### Steering multiple reactions

**Parallel** ($A\to D$ at order $a_D$, $A\to U$ at order $a_U$):

$$S_{D/U} = \frac{k_D}{k_U}\,C_A^{\,a_D-a_U}, \qquad \frac{k_D}{k_U} = \frac{A_D}{A_U}\,e^{-(E_D-E_U)/(RT)}$$

| Situation | Do this |
|---|---|
| $a_D > a_U$ | keep $C_A$ **high** — batch or PFR, high pressure, no dilution, low conversion per pass |
| $a_D < a_U$ | keep $C_A$ **low** — CSTR, dilute feed, product recycle |
| $E_D > E_U$ | run **hot** |
| $E_D < E_U$ | run **cold** and accept a slower reactor |

**Series** $A \xrightarrow{k_1} D \xrightarrow{k_2} U$, both first order (batch, or
a PFR reading $t$ as $\tau$):

$$C_A = C_{A0}e^{-k_1t}, \qquad C_D = C_{A0}\frac{k_1}{k_2-k_1}\left(e^{-k_1t}-e^{-k_2t}\right)$$

$$t_{\mathrm{opt}} = \frac{\ln(k_1/k_2)}{k_1-k_2}, \qquad \frac{C_{D,\max}}{C_{A0}} = \left(\frac{k_1}{k_2}\right)^{k_2/(k_2-k_1)}$$

Run shorter and $D$ is under-cooked; run longer and you over-cook it into $U$. A
PFR beats a CSTR here because every molecule sees the same clean $t_{\mathrm{opt}}$.

*From* [2.6](lessons/02-06-multiple-reactions-yield-selectivity.md)

### The energy balance

Steady-flow, single reaction, reference temperature $T_0$ = feed temperature:

$$\dot Q - \dot W_s - F_{A0}\sum_i\Theta_iC_{p,i}(T-T_0) - \Delta H_{rx}(T)\,F_{A0}X = 0$$

Batch is the transient twin, with the reaction heat accumulating in the vessel
instead of leaving with a product stream:

$$N_{A0}\sum_i\Theta_iC_{p,i}\,\frac{dT}{dt} = \dot Q - \dot W_s + (-\Delta H_{rx})(-r_AV)$$

**Adiabatic** ($\dot Q = \dot W_s = 0$) collapses it to a straight line in $X$ —
the same line for a batch, a CSTR, and a PFR, since it is fixed entirely by the
feed and by thermodynamics:

$$T = T_0 + \frac{(-\Delta H_{rx})X}{\sum_i\Theta_iC_{p,i}} = T_0 + \Delta T_{ad}X$$

**With heat exchange**, march these two ODEs together (never one then the other):

$$\frac{dT}{dV} = \frac{Ua(T_a-T) + (-\Delta H_{rx})(-r_A)}{F_{A0}\sum_i\Theta_iC_{p,i}}, \qquad \frac{dX}{dV} = \frac{-r_A}{F_{A0}}$$

The denominator is always positive, so it sets only the *magnitude* of $dT/dV$ —
the **sign** is decided upstairs, by the race between removal and generation. A
sensible coolant carries its own equation,
$dT_a/dV = Ua(T-T_a)/(\dot m_cC_{p,c})$.

| Coolant arrangement | Problem type | Behavior |
|---|---|---|
| Boiling utility | $T_a$ constant | simplest; no coolant ODE |
| **Co-current** | initial-value march from $V=0$ | coolant is warmest right at the hot spot — worst place to lose cooling |
| **Counter-current** | boundary-value; guess one end and iterate | coldest coolant sits at the hot spot, so it usually tames the peak better |

**Interstage cooling** exploits a falling equilibrium conversion $X_e$: run an
adiabatic bed up to the equilibrium curve, cool at constant $X$ (a horizontal move
left on the $X$–$T$ plot), then climb a fresh adiabatic line in the next bed. The
operating path is a staircase.

*From* [3.1](lessons/03-01-reactor-energy-balance.md), [3.2](lessons/03-02-adiabatic-operation.md), [3.3](lessons/03-03-reactors-with-heat-exchange.md)

### Multiple steady states and the stability test

$$G(T) = (-\Delta H_{rx})\,X(T), \qquad X(T) = \frac{\tau k(T)}{1+\tau k(T)} \quad\text{(CSTR, liquid, first order)}$$

$$R(T) = C_{p0}(1+\kappa)(T-T_c), \qquad \kappa = \frac{Ua}{C_{p0}F_{A0}}, \qquad T_c = \frac{\kappa T_a + T_0}{1+\kappa}$$

Steady states are the solutions of $G(T) = R(T)$ — an S-curve cut by a line, so
one or three of them. The stability test is a slope comparison:

$$\frac{dR}{dT} > \frac{dG}{dT} \quad\Longrightarrow\quad \textbf{stable}$$

| Crossing | Where on the S | Verdict |
|---|---|---|
| Low $T$ | flat lower foot | **stable** (extinguished) |
| Middle $T$ | steep rising middle | **unstable** — a knife-edge, and it decides which branch a disturbed reactor falls to |
| High $T$ | flat upper shoulder | **stable** (ignited) |

Note $dR/dT = C_{p0}(1+\kappa)$ is a constant — steeper cooling means a bigger
safety margin. **Defenses against runaway:** oversize $Ua$; dilute the feed
(inerts raise $C_{p0}$ and shrink $\Delta T_{ad}$); stage or meter the feed so heat
is released gradually; back it with pressure relief. Multiplicity needs the
exothermic-Arrhenius feedback loop — kill it (run isothermal, endothermic, or with
$\kappa\to\infty$) and the three states collapse to one. A PFR, lacking the CSTR's
instant back-mixing of hot product with cold feed, generally does not show this.

*From* [3.4](lessons/03-04-multiple-steady-states-cstr.md), [3.5](lessons/03-05-stability-runaway.md)

### Catalysis: coverage, LHHW forms, and deactivation

**Competitive adsorption** — every adsorbing species adds its own $KP$ term to the
denominator and crowds the others out:

$$\theta_A = \frac{K_AP_A}{1+K_AP_A+K_BP_B}, \qquad \theta_B = \frac{K_BP_B}{1+K_AP_A+K_BP_B}$$

Low pressure ($K_AP_A\ll1$): $\theta_A\approx K_AP_A$, so the rate looks **first
order**. High pressure ($K_AP_A\gg1$): $\theta_A\to1$, saturated, so the rate looks
**zero order**. Same reactor, same chemistry.

| Rate-limiting step | Signature in the rate law |
|---|---|
| Adsorption of $A$ | numerator $\propto P_A$; no $K_AP_A$ in the denominator |
| Surface reaction, **single** site | denominator to the power **1** |
| Surface reaction, **dual** site | denominator to the power **2** (the slow step needs an adjacent partner) |
| Desorption of $B$ | $P_B$ dominates; rate falls as product builds |

**Deactivation and site-loss vocabulary.** A catalyst loses activity by losing
*sites*, and the same denominator explains most of it:

- **Product inhibition** — the product adsorbs and eats vacant sites, giving a
  **negative order**. Negative order is a site-blocking statement, never a
  stoichiometric one; even an inert that adsorbs can do it. ([4.1](lessons/04-01-catalysis-langmuir-isotherm.md), [4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md))
- **Poisoning** — a strongly-sticking spectator ($K$ huge) hogs the parking lot and
  starves the reaction of sites even at trivial partial pressure. ([4.1](lessons/04-01-catalysis-langmuir-isotherm.md))
- **Sintering** — thermal damage: run too hot and the active phase coarsens,
  permanently destroying surface area. It is one of the reasons a hot spot has a
  ceiling and why operators ballast a feed with inerts. ([3.2](lessons/03-02-adiabatic-operation.md), [3.3](lessons/03-03-reactors-with-heat-exchange.md))
- **Sabatier principle** — the best catalyst binds the reactant *just enough*:
  strongly enough to grab it, weakly enough to let the product leave. A bigger $K_A$
  is not a faster catalyst. ([4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md))

*From* [4.1](lessons/04-01-catalysis-langmuir-isotherm.md), [4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md)

### Diffusion inside and outside the pellet

**Internal (pores).** For a sphere, first order:

$$\eta = \frac{3}{\phi^2}\big(\phi\coth\phi - 1\big)$$

| Regime | $\eta$ | Consequence |
|---|---|---|
| $\phi\ll1$, reaction-limited | $\eta\to1$ | pellet uniformly active; you get the full intrinsic rate |
| $\phi\gg1$, diffusion-limited | $\eta\approx3/\phi$ | only a shell of thickness $\sim R/\phi$ reacts; observed rate $\propto\sqrt{kD_e}/R$, so doubling activity buys $\sqrt2$ but halving $R$ buys $2$ |

Standard shape factors the lessons use implicitly (define the characteristic length
as $L = V_p/S_p$, which is $R/3$ for a sphere, and $\eta \to 1/\phi$ at large
$\phi$ for every geometry):

| Geometry | Thiele modulus (first order) | Effectiveness factor |
|---|---|---|
| Slab, sealed edges, thickness $2L$ | $\phi = L\sqrt{k/D_e}$ | $\eta = \tanh\phi/\phi$ |
| Sphere, radius $R$ | $\phi = R\sqrt{k/D_e}$ | $\eta = \tfrac{3}{\phi^2}(\phi\coth\phi-1)$ |

**External (film).** Resistances in series simply add, and the largest controls:

$$-r_A'' = k_c(C_{Ab}-C_{As}), \qquad C_{As} = \frac{k_c}{k_c+k''}\,C_{Ab}, \qquad -r_A'' = \frac{C_{Ab}}{\dfrac{1}{k_c}+\dfrac{1}{k''}}$$

**Disguised-kinetics diagnosis table** — what you measure versus what is true:

| Controlling regime | Apparent order | Apparent $E$ | Tell-tale |
|---|---|---|---|
| Reaction (kinetics) | $n$ (true) | $E$ (true) | responds to catalyst and to $T$; blind to flow and pellet size |
| Pore diffusion (internal) | $(n+1)/2$ | $\approx E/2$ | crush the pellet and the rate rises; blind to flow |
| Film (external) | $1$ | $\approx0$ (a few kJ/mol) | pump faster and the rate rises; nearly blind to $T$ |

A halved activation energy is pore diffusion's confession; a near-zero one is the
film's.

*From* [4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md), [4.4](lessons/04-04-external-mass-transfer-disguised-kinetics.md)

### Residence-time distributions and nonideal models

$$F(t) = \frac{C(t)}{C_0} = \int_0^tE(t')\,dt', \qquad E(t) = \frac{dF}{dt}$$

$$t_m = \int_0^\infty t\,E(t)\,dt, \qquad \sigma^2 = \int_0^\infty (t-t_m)^2E(t)\,dt$$

For constant density and a fully-used volume, $t_m = \tau = V/v_0$; a gap
$t_m < \tau$ *is* the measurement of dead volume.

| Reactor | $E(t)$ | $t_m$ | $\sigma^2$ |
|---|---|---|---|
| PFR | $\delta(t-\tau)$ | $\tau$ | $0$ |
| CSTR | $\dfrac{1}{\tau}e^{-t/\tau}$ | $\tau$ | $\tau^2$ |
| $N$ tanks in series | $\dfrac{t^{N-1}}{(N-1)!\,\tau_i^{N}}e^{-t/\tau_i}$ | $\tau$ | $\tau^2/N$ |

Every real reactor lives between $\sigma^2 = 0$ and $\sigma^2 = \tau^2$.

**Tanks-in-series**, with $\tau_i = \tau/N$:

$$N = \frac{\tau^2}{\sigma^2}, \qquad X = 1 - \frac{1}{(1+\tau_ik)^N} \quad\text{(first order)}$$

Check the ends: $N=1$ gives the CSTR result, and $N\to\infty$ gives
$X = 1-e^{-\tau k}$, the PFR.

**Dispersion model** — plug flow with back-mixing sprinkled in:

$$D_a\frac{d^2C_A}{dz^2} - u\frac{dC_A}{dz} + r_A = 0, \qquad \frac{\sigma^2}{\tau^2} = \frac{1}{N} \approx 2\,\frac{D_a}{uL}, \qquad N \approx \frac{Pe}{2}$$

Small $D_a/(uL)$ (large $Pe$) is near-PFR; large is heading toward a CSTR. The two
models cross-calibrate for *mild* non-ideality only.

**Chemostat (Monod).** At steady state the bugs must divide exactly as fast as they
are flushed out, so $\mu = D = 1/\tau$:

$$S = \frac{K_s\,D}{\mu_{max}-D}, \qquad \text{washout at } D \ge \mu_{max}$$

**Chain polymerization** runs on initiation, propagation, and termination; their
relative rates set the kinetic chain length and hence the molecular-weight
distribution — the property that decides whether the plastic is a film or a fiber.

*From* [4.5](lessons/04-05-residence-time-distribution.md), [4.6](lessons/04-06-nonideal-reactor-models.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Control-volume balances (draw a boundary, count what crosses) — this course adds only the generation term | [engineering-thermodynamics 2.3](../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md) |
| Sign convention for heat and work, and the meaning of a steady-flow energy balance | [engineering-thermodynamics 2.3](../engineering-thermodynamics/lessons/02-03-mass-energy-balance-control-volumes.md), [3.1](../engineering-thermodynamics/lessons/03-01-second-law-carnot-limit.md) |
| Ideal-gas law and when it fails — behind $v = v_0(1+\varepsilon X)(T/T_0)(P_0/P)$ | [engineering-thermodynamics 1.4](../engineering-thermodynamics/lessons/01-04-ideal-gas-model-limits.md), [general-chemistry 3.1](../general-chemistry/lessons/03-01-gases-ideal-gas-law-kinetic-theory.md) |
| $\Delta H_{rx}$ from enthalpies of formation; Hess's law | [general-chemistry 3.3](../general-chemistry/lessons/03-03-hess-law-enthalpies-formation.md) |
| Equilibrium constant, $X_e$, and why a catalyst can't move it | [general-chemistry 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| Balanced equations as mole ratios; limiting reagent | [general-chemistry 2.2](../general-chemistry/lessons/02-02-stoichiometry-limiting-reagents.md) |
| Rate laws, reaction order, and how orders are measured | [physical-chemistry 3.1](../physical-chemistry/lessons/03-01-rate-laws-reaction-order.md), [general-chemistry 4.3](../general-chemistry/lessons/04-03-taste-of-kinetics.md) |
| Integrated rate laws and half-lives (the constant-volume batch results, derived) | [physical-chemistry 3.2](../physical-chemistry/lessons/03-02-integrated-rate-laws-half-lives.md) |
| Pre-equilibrium and steady-state approximations — the licence for the LHHW derivation | [physical-chemistry 3.3](../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md) |
| Where the Arrhenius barrier comes from (transition-state theory) | [physical-chemistry 3.4](../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) |
| Catalysis and the Michaelis–Menten form Monod kinetics mirrors | [physical-chemistry 3.5](../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md) |
| Fick's law and molecular diffusivities | [transport-phenomena 1.3](../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md) |
| Diffusion through a stagnant film — the physics behind $k_c$ | [transport-phenomena 4.2](../transport-phenomena/lessons/04-02-diffusion-stagnant-film-stefan.md) |
| Solving the diffusion–reaction equation in a pellet (where $\eta(\phi)$ comes from) | [transport-phenomena 4.3](../transport-phenomena/lessons/04-03-diffusion-with-reaction-thiele.md) |
| Sherwood-number correlations that supply $k_c$ from Reynolds and Schmidt | [transport-phenomena 4.5](../transport-phenomena/lessons/04-05-mass-transfer-coefficients-correlations.md) |
| The overall heat-transfer coefficient $U$, and co- vs. counter-current exchangers | [heat-transfer 4.4](../heat-transfer/lessons/04-04-heat-exchangers-lmtd.md) |
| Separating and integrating a first-order ODE (every design equation) | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Partial fractions and substitution for the sizing integrals | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Central differences, and why they amplify noise | [numerical-analysis 2.3](../numerical-analysis/lessons/02-03-numerical-differentiation.md) |
| Runge–Kutta marching for the coupled $X$–$T$ and $X$–$p$ ODEs | [numerical-analysis 4.2](../numerical-analysis/lessons/04-02-runge-kutta.md) |
| Least-squares fitting behind "nonlinear regression on the whole curve" | [numerical-analysis 5.1](../numerical-analysis/lessons/05-01-least-squares-normal-equations.md) |
| Probability density, mean, and variance — what $E(t)$, $t_m$, $\sigma^2$ actually are | [prob-stat-refresher 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| The Dirac delta used for a PFR's RTD | [mathematical-methods-physics 4.2](../mathematical-methods-physics/lessons/04-02-dirac-delta-distributions.md) |
| Saddle-node bifurcation — the mathematics of ignition, extinction, and hysteresis | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) |
| **Ergun equation** — no course in the library derives packed-bed friction. It is stated in full above; the nearest relative is laminar pipe friction | [fluid-dynamics 3.2](../fluid-dynamics/lessons/03-02-couette-poiseuille.md) |

## Pitfalls

### What the rate is, and isn't

- $-r_A$ is a property of the local state, **not** a rate of change: in a flow reactor $C_A$ can be constant in time while $-r_A$ is large. The mole balance is what links it to any actual $dC_A/dt$. *([1.1](lessons/01-01-rate-of-reaction-rate-law.md))*
- Reading the rate law off the balanced equation is legal **only** if the reaction is elementary — a claim about mechanism you must justify, not assume. *([1.1](lessons/01-01-rate-of-reaction-rate-law.md))*
- Molecularity counts molecules in an elementary step; order is a fitted exponent. Don't trade one word for the other. *([1.1](lessons/01-01-rate-of-reaction-rate-law.md))*
- $-r_A$ (per volume) and $-r_A'$ (per catalyst mass) differ by $\rho_b$; mixing them silently rescales every reactor size. Same trap as treating $V$ and $W$ as interchangeable labels. *([1.1](lessons/01-01-rate-of-reaction-rate-law.md), [1.6](lessons/01-06-pfr-packed-bed.md))*
- $E$ is per **mole**, so $R$ (not $k_B$) belongs in the exponent; a per-molecule $E_a$ differs by Avogadro's number. *([1.2](lessons/01-02-arrhenius-temperature-dependence.md))*
- If the two-point Arrhenius formula hands you a negative $E$, you crossed subscripts on one side only. Ordinary reactions have $E > 0$. *([1.2](lessons/01-02-arrhenius-temperature-dependence.md))*
- $A$ drifts weakly with $T$ (collision theory gives $A\propto\sqrt T$); fine for design, but don't extrapolate hundreds of kelvin and expect three figures. *([1.2](lessons/01-02-arrhenius-temperature-dependence.md))*

### Writing the balance

- $r_A$ is **per unit volume**; it only joins a mole-per-time balance after $\times V$ or $\int dV$. Dropping that factor is an error the size of the reactor. *([1.3](lessons/01-03-general-mole-balance.md), [1.4](lessons/01-04-batch-reactor.md))*
- Writing generation as $r_AV$ is legal only when the interior is uniform. In a PFR the rate genuinely varies along the tube. *([1.3](lessons/01-03-general-mole-balance.md))*
- Keep $r_A$ **signed** and let the algebra pick the direction; don't hand-force a sign because "reaction produces things." *([1.3](lessons/01-03-general-mole-balance.md))*
- $dN_A/dt = 0$ means steady, not dead — reaction is roaring while in, out, and generation stay in balance. *([1.3](lessons/01-03-general-mole-balance.md))*

### Choosing and sizing a reactor

- The CSTR rate is evaluated at the **exit**, never the inlet or an average. Plugging in $C_{A0}$ is the single most common CSTR error and it undersizes the tank badly — and it is the same error as thinking the Levenspiel rectangle uses the fast inlet rate. *([1.5](lessons/01-05-cstr.md), [2.2](lessons/02-02-levenspiel-plots-reactors-in-series.md))*
- Don't integrate in a CSTR: there is no gradient to integrate over, so it is pure algebra. Conversely, don't evaluate a PFR at one point — that overshoots its volume. *([1.6](lessons/01-06-pfr-packed-bed.md), [2.1](lessons/02-01-conversion-design-equations.md))*
- Simple equation $\ne$ cheap reactor: for decaying kinetics the CSTR needs *more* volume than a PFR, precisely because it runs everywhere at the slowest rate. *([1.5](lessons/01-05-cstr.md))*
- But there is no universally best reactor. A CSTR is the *right* choice when the desired path is lower order, and a CSTR-then-PFR pair beats either single reactor on an autocatalytic curve. Match the shape to the curve. *([2.2](lessons/02-02-levenspiel-plots-reactors-in-series.md), [2.6](lessons/02-06-multiple-reactions-yield-selectivity.md))*
- The Levenspiel vertical axis is $F_{A0}/(-r_A)$, which has units of **volume** — the area is liters of reactor, not moles and not a rate. *([2.2](lessons/02-02-levenspiel-plots-reactors-in-series.md))*
- Batch conversion depends on the clock, not on where you stand in the tank; and "batch time" is not throughput — add the turnaround for filling, heating, cooling, and cleaning. *([1.4](lessons/01-04-batch-reactor.md))*
- You cannot integrate a design equation until you have written $-r_A$ as a function of $X$. The integrand is in $X$ while the rate law is in $C_A$; substitute $C_A(X)$ first. *([2.1](lessons/02-01-conversion-design-equations.md))*

### Gases, expansion, and pressure

- $C_A = C_{A0}(1-X)$ holds for a constant-density **liquid** only. For a mole-changing gas the volume moves and you need the $\varepsilon$ correction. *([2.1](lessons/02-01-conversion-design-equations.md), [2.3](lessons/02-03-stoichiometry-concentration-conversion.md))*
- Expansion is not a small correction: $\varepsilon = 1$ can inflate the required reactor by about 35 percent. Compute $\varepsilon$ before assuming anything. *([2.3](lessons/02-03-stoichiometry-concentration-conversion.md), [2.4](lessons/02-04-isothermal-design-pressure-drop-ergun.md))*
- $\varepsilon = y_{A0}\delta$, not $\delta$ — a feed that is mostly inert barely expands however dramatic the reaction's mole change. *([2.3](lessons/02-03-stoichiometry-concentration-conversion.md))*
- Partial pressures and concentrations are not interchangeable in a rate law: they differ by $RT$ and, when $\varepsilon\ne0$, by the volume-change factor too. Pick one and carry it. *([2.3](lessons/02-03-stoichiometry-concentration-conversion.md))*
- Keep $(1+\varepsilon X)$ in the Ergun equation and expect no closed form: $dp/dW$ and $dX/dW$ feed each other and must be marched together. Only $\varepsilon = 0$ decouples. *([2.4](lessons/02-04-isothermal-design-pressure-drop-ergun.md))*
- $\tau = V/v_0$ equals the mean residence time only at constant volumetric flow — the same caveat that makes $t_m \ne \tau$ for a mole-changing gas. *([1.5](lessons/01-05-cstr.md), [4.5](lessons/04-05-residence-time-distribution.md))*

### Reading data

- You cannot eyeball the order off a decaying curve. Test all three linearizations and demand straightness over the *whole* dataset. *([2.5](lessons/02-05-analysis-of-rate-data.md))*
- A central difference at $t_i$ divides by $t_{i+1}-t_{i-1}$, **not** by $\Delta t$ — and endpoints have no central difference at all, so their one-sided estimates bias the fit. *([2.5](lessons/02-05-analysis-of-rate-data.md))*
- Products lie: if the reaction reverses or the product inhibits, $-r_A = kC_A^n$ holds only early. That is what the initial-rate method is for. *([2.5](lessons/02-05-analysis-of-rate-data.md))*
- For a catalytic rate law "the order" is only the local log–log slope at your operating pressure. Quoting an order without the pressure range is meaningless. *([4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md))*

### Temperature

- Sizing a nonisothermal reactor from the mole balance alone is impossible — it needs $k(T)$, and $T$ comes from the energy balance. The two equations are a package. *([3.1](lessons/03-01-reactor-energy-balance.md))*
- $\Delta H_{rx} < 0$ is exothermic, and the adiabatic line carries $(-\Delta H_{rx})$. If your exothermic reactor comes out cooling, you dropped the minus. *([3.1](lessons/03-01-reactor-energy-balance.md), [3.2](lessons/03-02-adiabatic-operation.md))*
- $\dot Q$ is only the **external** duty through the wall; the reaction's own heat lives entirely in the $\Delta H_{rx}F_{A0}X$ term. *([3.1](lessons/03-01-reactor-energy-balance.md))*
- $C_{p0} = \sum\Theta_iC_{p,i}$ is the *whole feed's* heat capacity per mole of $A$ — inerts included. That is exactly why solvents and diluents tame runaway. *([3.1](lessons/03-01-reactor-energy-balance.md))*
- The adiabatic $T$–$X$ line is the same for a batch, a CSTR, and a PFR; what differs is *where on the line* the reactor sits (a CSTR jumps to the exit point, a PFR sweeps up). *([3.2](lessons/03-02-adiabatic-operation.md))*
- In an exothermic adiabatic reactor $-r_A$ is **not** monotonic: rising $k$ wins early, falling $C_A$ wins late, so the rate humps. Sizing that assumes monotonic gets the profile wrong. *([3.2](lessons/03-02-adiabatic-operation.md))*
- $Ua(T_a-T)$ is heat *added*; $Ua(T-T_a)$ is heat *removed*. Both appear in Module 3 — check which side of the balance you're on. *([3.3](lessons/03-03-reactors-with-heat-exchange.md))*
- Co-current and counter-current are not even the same *kind* of problem: one is an initial-value march, the other a boundary-value iteration. *([3.3](lessons/03-03-reactors-with-heat-exchange.md))*

### Stability

- Three steady states does not mean three operating choices — the middle one cannot be held. *([3.4](lessons/03-04-multiple-steady-states-cstr.md))*
- "Hot" and "unstable" are different words. The ignited state is stable and holdable; the dangerous state is the middle one, which may be at a moderate temperature. *([3.5](lessons/03-05-stability-runaway.md))*
- Multiplicity is not a property of the reaction — it needs the exothermic feedback loop. Run isothermal, endothermic, or with overwhelming cooling and it vanishes. *([3.4](lessons/03-04-multiple-steady-states-cstr.md))*
- The ignited branch is not automatically the goal: it can overshoot into runaway, decompose product, or exceed the vessel rating. *([3.4](lessons/03-04-multiple-steady-states-cstr.md))*
- Runaway is a heat-balance failure, not a new chemistry — and "barely stable" is never a design point, because parametric sensitivity near the boundary is enormous. *([3.5](lessons/03-05-stability-runaway.md))*

### Catalysis and diffusion

- A catalyst changes the speed to equilibrium, never the equilibrium — it lowers the barrier for forward and reverse equally. *([4.1](lessons/04-01-catalysis-langmuir-isotherm.md))*
- "Zero order" means the surface is **saturated**, not that chemistry stopped mattering. Drop the pressure and you slide back to first order. *([4.1](lessons/04-01-catalysis-langmuir-isotherm.md))*
- A big $K_A$ is not a fast catalyst — sticking hard and reacting fast are different things, and too-strong adsorption blocks the surface. *([4.1](lessons/04-01-catalysis-langmuir-isotherm.md), [4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md))*
- The denominator's exponent is a mechanistic fingerprint, not decoration: 1 site or 2. Fit the wrong power and every extrapolated pressure is wrong. *([4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md))*
- A negative order is a site-blocking statement, not a stoichiometric one. *([4.2](lessons/04-02-heterogeneous-rate-laws-lhhw.md))*
- Deep in diffusion limitation a more active catalyst barely helps — the observed rate goes as $\sqrt k$. Shrinking the pellet pays linearly; that is the lever to pull. *([4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md))*
- $\eta$ is not a catalyst property you look up: it moves with $R$, with $T$ (through $k$), and with $D_e$, so a pellet that is reaction-limited cold can be diffusion-limited hot. *([4.3](lessons/04-03-internal-diffusion-thiele-effectiveness.md))*
- Don't trust a low measured $E$ — about $E/2$ is pore diffusion's fingerprint and near zero is the film's. Crush the pellets and pump harder before believing it. *([4.4](lessons/04-04-external-mass-transfer-disguised-kinetics.md))*
- Heating a film-controlled reactor wastes energy; raise the *velocity* to thin the film instead. *([4.4](lessons/04-04-external-mass-transfer-disguised-kinetics.md))*
- The intrinsic rate law lives on $C_{As}$, not $C_{Ab}$ — back the surface concentration out of the steady-state balance first. *([4.4](lessons/04-04-external-mass-transfer-disguised-kinetics.md))*

### Nonideal flow

- The RTD is descriptive, not a grade: a CSTR is *supposed* to have $\sigma^2 = \tau^2$. "Good" only means anything against the reactor you intended to build. *([4.5](lessons/04-05-residence-time-distribution.md))*
- The RTD fixes conversion **only** for first-order kinetics. For any other order, micromixing matters and you get the segregation / maximum-mixedness bracket, not a number. *([4.5](lessons/04-05-residence-time-distribution.md), [4.6](lessons/04-06-nonideal-reactor-models.md))*
- $N$ measures flow *quality*, not size — two vessels of identical $V$ and $\tau$ can have $N=2$ and $N=50$. *([4.6](lessons/04-06-nonideal-reactor-models.md))*
- Tanks-in-series and dispersion agree only for *mild* non-ideality; badly behaved vessels need a compartment model with explicit dead zones and bypass. *([4.6](lessons/04-06-nonideal-reactor-models.md))*

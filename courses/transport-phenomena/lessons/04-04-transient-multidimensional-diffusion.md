# Transport Phenomena · Lesson 4.4: Transient and multidimensional diffusion

> ⏱ ~15 min · Module 4: Mass transport · Builds on: [2.6 Species-continuity equation](02-06-species-continuity-equation.md), [`heat-transfer` 2.2 (semi-infinite solid)](../../heat-transfer/lessons/02-02-semi-infinite-solid.md), [`heat-transfer` 2.3 (finite bodies / Heisler)](../../heat-transfer/lessons/02-03-finite-bodies-heisler.md), [`materials-science` 2.5 (transient diffusion)](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) · Unlocks: [4.5 Mass-transfer coefficients & correlations](04-05-mass-transfer-coefficients-correlations.md)

## Why this matters

Back in [2.6](02-06-species-continuity-equation.md) we noticed that Fick's second law, $\partial_t c_A = D_{AB}\nabla^2 c_A$, is *character-for-character* the transient heat equation with the single swap $\alpha \to D_{AB}$. That wasn't a curiosity — it's a promissory note, and this lesson cashes it in. Every tool you built for transient **conduction** — the semi-infinite $\operatorname{erfc}$ profile, the penetration depth, the Fourier number, the one-term / Heisler charts, the product solution for 2-D and 3-D bodies — transfers to **mass** with *zero* new derivation. Oxygen soaking into still water, carbon case-hardening a gear, a drug leaching out of a polymer bead, a pickle absorbing brine: all the same math you already solved. The one thing that changes is a number, and it changes the *feel* of the answer completely — because mass diffusivities are tiny, diffusion in liquids and solids is agonizingly slow.

## The idea

Here is the whole lesson in one move: **take any transient-conduction result and cross out $\alpha$, write $D_{AB}$, cross out $T$, write $c_A$.** Done. You are not learning a new subject — you are relabeling an old one.

Why is this legitimate? Because a partial differential equation doesn't know what its variable *means*. The heat equation and Fick's second law are the same equation; the solution depends only on the equation and the boundary/initial conditions, not on whether the diffusing quantity is thermal energy or molecules of species A. So the front-crawling-inward picture from [`heat-transfer` 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md) is *exactly* the picture for mass: at $t=0$ you change the surface concentration; the news that "the surface changed" diffuses inward as a fuzzy $\operatorname{erfc}$ front whose reach is the **penetration depth** $\delta \sim \sqrt{D_{AB}\,t}$, growing like $\sqrt{t}$ (a drunkard's walk — double the depth, quadruple the wait).

The **only** physical bookkeeping change is the size of the diffusivity. Thermal diffusivities of liquids run around $\alpha \sim 10^{-7}\ \mathrm{m^2/s}$; mass diffusivities in liquids are around $D_{AB}\sim 10^{-9}\ \mathrm{m^2/s}$, a factor of ~100–1000 smaller. That ratio is exactly the **Lewis number** $Le = \alpha/D_{AB}$ (from [1.5](01-05-three-diffusivities-pr-sc-le.md)), and it says mass fronts penetrate a factor of $\sqrt{Le}$ *less deep* than heat fronts in the same time — equivalently, mass equilibration takes $Le$ times *longer*. Heat a coffee bean in seconds; extract its flavor over minutes. Same slab, same $Fo$-math, timescales a thousand-fold apart.

## The formal version

**The equation.** With no bulk flow and no reaction, the species-continuity equation from [2.6](02-06-species-continuity-equation.md) collapses to

$$\frac{\partial c_A}{\partial t} = D_{AB}\,\nabla^2 c_A,$$

where $c_A$ is the molar concentration of species A ($\mathrm{mol\,m^{-3}}$), $t$ is time (s), and $D_{AB}$ is the binary diffusivity ($\mathrm{m^2\,s^{-1}}$). *In words: concentration at a point rises where the profile curves upward, at a rate set by $D_{AB}$.* This is identical to $\partial_t T = \alpha\nabla^2 T$. So we transplant results wholesale via the dictionary:

| Transient **conduction** | Transient **diffusion** | meaning |
|---|---|---|
| temperature $T$ | concentration $c_A$ | the diffusing field |
| thermal diffusivity $\alpha = k/(\rho c_p)$ | mass diffusivity $D_{AB}$ | how fast it spreads |
| $\displaystyle Fo = \frac{\alpha t}{L^2}$ | $\displaystyle Fo_m = \frac{D_{AB}\,t}{L^2}$ | dimensionless time |
| $\displaystyle Bi = \frac{hL}{k}$ | $\displaystyle Bi_m = \frac{k_c L}{D_{AB}}$ | surface vs. internal resistance |
| $\operatorname{erfc}\!\big(x/2\sqrt{\alpha t}\big)$ | $\operatorname{erfc}\!\big(x/2\sqrt{D_{AB}t}\big)$ | semi-infinite profile |
| $\delta \sim \sqrt{\alpha t}$ | $\delta \sim \sqrt{D_{AB}t}$ | penetration depth |
| Heisler / one-term $\zeta_n, C_n(Bi)$ | *same charts*, $Bi \to Bi_m$ | finite-body cooling/soaking |

*In words: the entire Module-2 toolkit of [`heat-transfer`](../../heat-transfer/syllabus.md) is yours for free — just change the diffusivity and rename the surface group $Bi \to Bi_m$.* Note $Bi_m$ uses the **convective mass-transfer coefficient** $k_c$ ($\mathrm{m\,s^{-1}}$, the subject of [4.5](04-05-mass-transfer-coefficients-correlations.md)) in place of the heat-transfer coefficient $h$.

**Semi-infinite medium, fixed surface concentration.** A medium filling $x \ge 0$, initially uniform at $c_{A0}$, has its face suddenly clamped to $c_{A,s}$ (a gas–liquid interface at Henry's-law equilibrium does exactly this). Then, lifted straight from [`heat-transfer` 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md):

$$\boxed{\;\frac{c_A(x,t) - c_{A0}}{c_{A,s} - c_{A0}} = \operatorname{erfc}\!\left(\frac{x}{2\sqrt{D_{AB}\,t}}\right)\;}$$

*In words: fractional progress from the old bulk value to the surface value depends only on the similarity variable $\eta = x/(2\sqrt{D_{AB}t})$ — depth measured in penetration lengths.* At the surface $\eta=0$, $\operatorname{erfc}=1$; deep or early, $\eta\to\infty$ and $\operatorname{erfc}\to 0$. The practical penetration depth (where the change falls below ~1%) is $\delta \approx 4\sqrt{D_{AB}\,t}$. (For a *dissolving-solid* or *carburizing* setup written with $\operatorname{erf}$, it's the same formula — [`materials-science` 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) — since $\operatorname{erfc} = 1-\operatorname{erf}$.)

**Finite bodies (one-term / Heisler).** A slab of half-thickness $L$ (or a cylinder / sphere), initially at $c_{A0}$, suddenly exposed at its surface. Define $\theta^* = \dfrac{c_{A,s}-c_A}{c_{A,s}-c_{A0}}$ (runs $1\to 0$ as it saturates). For $Fo_m > 0.2$ only the first mode survives, and the **center** value is

$$\theta_0^* = \frac{c_{A,s}-c_{A,0\text{-center}}}{c_{A,s}-c_{A0}} = C_1\,e^{-\zeta_1^2\,Fo_m},$$

with $\zeta_1(Bi_m), C_1(Bi_m)$ read from the *same* plane-wall table you used in [`heat-transfer` 2.3](../../heat-transfer/lessons/02-03-finite-bodies-heisler.md):

| $Bi_m$ | $\zeta_1$ (rad) | $C_1$ |
|---|---|---|
| 0.5 | 0.6533 | 1.0701 |
| 1.0 | 0.8603 | 1.1191 |
| 5.0 | 1.3138 | 1.2402 |
| $\infty$ (fixed surface $c_{A,s}$) | 1.5708 | 1.2732 |

The $Bi_m\to\infty$ row is the common mass case: an interface pinned at equilibrium concentration, no surface resistance.

**Multidimensional = product of 1-D solutions.** Because the operator $\nabla^2$ separates, a 2-D or 3-D body that is the *intersection* of 1-D shapes has a dimensionless concentration equal to the **product** of the 1-D answers — identical to the heat-transfer product rule:

$$\theta^*_{\text{2-D bar}}(x,y,t) = \theta^*_{\text{slab},L_x}(x,t)\,\cdot\,\theta^*_{\text{slab},L_y}(y,t).$$

*In words: a long rectangular bar soaking up a species is "slab-in-$x$" times "slab-in-$y$"; multiply the two chart readings.* Same trick as [`heat-transfer` 2.3](../../heat-transfer/lessons/02-03-finite-bodies-heisler.md).

The headline: **don't re-derive anything.** The mass problem is the thermal problem wearing a name tag.

## Picture

![Concentration erfc-fronts penetrating a semi-infinite medium at three increasing times t1 < t2 < t3; each is the same S-curve dropping from the surface value to the bulk, pushed deeper as time grows, with the penetration depth sqrt(D_AB t) marching rightward](assets/04-04-fig1.svg)

Each curve is the *same* $\operatorname{erfc}$ shape — later times just stretch it rightward, exactly as in the transient-conduction figure. The coral ticks mark the front position $\delta \sim \sqrt{D_{AB}t}$ advancing with time; because $D_{AB}$ is tiny, in a liquid these ticks creep only fractions of a millimeter over many seconds.

## Worked examples

**Example 1 (gas absorption into a still liquid — semi-infinite $\operatorname{erfc}$).** A deep, quiescent tank of water is initially oxygen-free ($c_{A0}=0$). At $t=0$ its surface is brought into contact with air, so the interface jumps to the saturation value $c_{A,s}$ and holds there. With $D_{AB}=2\times10^{-9}\ \mathrm{m^2/s}$ for O$_2$ in water, find the oxygen concentration (as a fraction of $c_{A,s}$) at depth $x = 0.1\ \mathrm{mm} = 1.0\times10^{-4}\ \mathrm{m}$ after $t = 10\ \mathrm{s}$, and the penetration depth.

Similarity variable:

$$\eta = \frac{x}{2\sqrt{D_{AB}t}} = \frac{1.0\times10^{-4}}{2\sqrt{(2\times10^{-9})(10)}} = \frac{1.0\times10^{-4}}{2\sqrt{2\times10^{-8}}} = \frac{1.0\times10^{-4}}{2(1.414\times10^{-4})} = 0.354.$$

From the $\operatorname{erfc}$ table below, interpolate between $\operatorname{erfc}(0.35)=0.6206$ and $\operatorname{erfc}(0.40)=0.5716$:

$$\operatorname{erfc}(0.354) \approx 0.6206 - \tfrac{0.004}{0.05}(0.0490) = 0.617.$$

So $c_A = 0.617\,c_{A,s}$ at that depth. Penetration depth: $\delta \approx 4\sqrt{D_{AB}t} = 4(1.414\times10^{-4}) = 5.7\times10^{-4}\ \mathrm{m} \approx 0.57\ \mathrm{mm}$.

*Check.* $\eta$ is dimensionless: $\mathrm{m}/\sqrt{(\mathrm{m^2/s})(\mathrm{s})} = \mathrm{m/m}$ ✓. The striking part: after a full 10 s, oxygen has meaningfully penetrated barely half a millimeter. Compare heat: with $\alpha_{\text{water}} \approx 1.4\times10^{-7}\ \mathrm{m^2/s}$, a thermal front would reach $4\sqrt{\alpha t} = 4.7\ \mathrm{mm}$ — about $\sqrt{Le} = \sqrt{\alpha/D_{AB}} = \sqrt{70} \approx 8.4$ times deeper. Molecular diffusion in liquids is *slow*; this is why stirring (convection, [4.5](04-05-mass-transfer-coefficients-correlations.md)) matters so much for real absorption.

Reference $\operatorname{erfc}$ table (used throughout):

| $z$ | 0.30 | 0.35 | 0.40 | 0.45 | 0.50 | 0.55 | 0.60 |
|---|---|---|---|---|---|---|---|
| $\operatorname{erfc}(z)$ | 0.6714 | 0.6206 | 0.5716 | 0.5245 | 0.4795 | 0.4367 | 0.3961 |

**Example 2 ($Fo_m$ one-term for a slab — and the $Le$ timescale gap).** A polymer sheet of half-thickness $L = 2\ \mathrm{mm} = 2\times10^{-3}\ \mathrm{m}$ is initially solute-free ($c_{A0}=0$). Both faces are suddenly exposed to a solute bath that fixes the surface concentration at $c_{A,s}$ (so $Bi_m\to\infty$). With $D_{AB} = 1\times10^{-10}\ \mathrm{m^2/s}$, how long until the **center** reaches 50% saturation, i.e. $c_A(\text{center}) = 0.5\,c_{A,s}$?

Center dimensionless concentration: $\theta_0^* = \dfrac{c_{A,s} - 0.5c_{A,s}}{c_{A,s} - 0} = 0.5$. Use the $Bi_m\to\infty$ row ($C_1 = 1.2732$, $\zeta_1 = 1.5708$, $\zeta_1^2 = 2.467$):

$$0.5 = 1.2732\,e^{-2.467\,Fo_m} \;\Rightarrow\; e^{-2.467\,Fo_m} = 0.3927 \;\Rightarrow\; Fo_m = \frac{-\ln 0.3927}{2.467} = \frac{0.9346}{2.467} = 0.379.$$

Since $Fo_m = 0.379 > 0.2$, one-term is valid. Convert to real time:

$$t = \frac{Fo_m\,L^2}{D_{AB}} = \frac{0.379\,(2\times10^{-3})^2}{1\times10^{-10}} = \frac{0.379\,(4\times10^{-6})}{1\times10^{-10}} = 1.5\times10^{4}\ \mathrm{s} \approx 4.2\ \text{hours}.$$

*Check.* $t = [\,]\cdot\mathrm{m^2}/(\mathrm{m^2/s}) = \mathrm{s}$ ✓. Now the punchline: suppose instead we were *heating* the same sheet, with $\alpha \approx 1\times10^{-7}\ \mathrm{m^2/s}$ (a typical polymer). The *same* $Fo$-math gives $t_{\text{thermal}} = Fo\,L^2/\alpha = 0.379(4\times10^{-6})/10^{-7} = 15\ \mathrm{s}$. The ratio is exactly $t_{\text{mass}}/t_{\text{thermal}} = \alpha/D_{AB} = Le = 1000$: thermal equilibration in 15 seconds, chemical equilibration in 4 hours — same slab, same chart reading, timescales a thousandfold apart. That factor *is* the Lewis number.

## Watch out

- **You might think you need a new theory for transient mass transfer.** You don't — it's transient conduction with $\alpha\to D_{AB}$. If you catch yourself re-deriving the $\operatorname{erfc}$ solution or resetting up separation of variables, stop and reach for the [`heat-transfer` 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md)/[2.3](../../heat-transfer/lessons/02-03-finite-bodies-heisler.md) result you already own.
- **You might use $Bi$ with the heat-transfer coefficient $h$.** For mass it's $Bi_m = k_cL/D_{AB}$, built from the *mass*-transfer coefficient $k_c$ and the *mass* diffusivity. Using $h$, $k$, or $\alpha$ here silently imports the thermal problem's numbers. Many mass problems fix the interface at equilibrium, which is $Bi_m\to\infty$ — the $C_1=1.2732$, $\zeta_1=\pi/2$ row.
- **You might expect mass and heat fronts to keep pace.** They don't. Because $D_{AB}\ll\alpha$ (large $Sc$, large $Le$), the concentration front lags the thermal front by $\sqrt{Le}$ in depth and $Le$ in time. In simultaneous heat-and-mass problems (drying, [5.3](05-03-simultaneous-heat-mass-transfer.md)) the temperature field effectively reaches steady state while the concentration field is still crawling.

## One-liner

> Transient diffusion *is* transient conduction with $\alpha\to D_{AB}$: same $\operatorname{erfc}$, same $Fo$, same Heisler charts, same product solutions — only slower, by the Lewis number.

## Problems

**P1 (🟢)** A deep tank of still water, initially CO$_2$-free, has its surface suddenly saturated with CO$_2$ at concentration $c_{A,s}$ and held there. With $D_{AB} = 1.8\times10^{-9}\ \mathrm{m^2/s}$, find the CO$_2$ concentration (as a fraction of $c_{A,s}$) at depth $x = 0.2\ \mathrm{mm}$ after $t = 20\ \mathrm{s}$, and the penetration depth $\delta \approx 4\sqrt{D_{AB}t}$.

**P2 (🟡)** A slab of half-thickness $L = 5\ \mathrm{mm}$, initially solute-free, has both faces suddenly held at surface concentration $c_{A,s}$ ($Bi_m\to\infty$). With $D_{AB} = 2\times10^{-10}\ \mathrm{m^2/s}$, find the time for the center to reach 30% saturation ($c_A = 0.3\,c_{A,s}$). Then state roughly how much longer this is than the *thermal* equilibration of the same slab if $\alpha = 1.3\times10^{-7}\ \mathrm{m^2/s}$.

**P3 (🔴)** A solute gas both diffuses through the gas above a liquid ($D_G = 2\times10^{-5}\ \mathrm{m^2/s}$) and dissolves into the stagnant liquid below ($D_L = 2\times10^{-9}\ \mathrm{m^2/s}$). (a) For the *same* exposure time, what is the ratio of penetration depths, liquid to gas? (b) How long must the liquid be exposed to reach the same penetration depth the gas reaches in 1 s?

<details>
<summary>Solutions</summary>

**P1** Similarity variable, with $x = 2\times10^{-4}\ \mathrm{m}$, $t=20\ \mathrm{s}$:

$$\eta = \frac{x}{2\sqrt{D_{AB}t}} = \frac{2\times10^{-4}}{2\sqrt{(1.8\times10^{-9})(20)}} = \frac{2\times10^{-4}}{2\sqrt{3.6\times10^{-8}}} = \frac{2\times10^{-4}}{2(1.897\times10^{-4})} = 0.527.$$

Interpolating the table between $\operatorname{erfc}(0.50)=0.4795$ and $\operatorname{erfc}(0.55)=0.4367$:

$$\operatorname{erfc}(0.527) \approx 0.4795 - \tfrac{0.027}{0.05}(0.0428) = 0.456.$$

So $c_A \approx 0.456\,c_{A,s}$. Penetration depth $\delta \approx 4\sqrt{D_{AB}t} = 4(1.897\times10^{-4}) = 7.6\times10^{-4}\ \mathrm{m} \approx 0.76\ \mathrm{mm}$.

*Check.* $\eta$ dimensionless ✓; the query depth ($0.2$ mm) sits well inside the $\approx 0.76$ mm front, so the concentration should be a sizeable fraction of $c_{A,s}$ — and $0.46$ is, matching $\operatorname{erfc}\approx 0.46$. ✓

**P2** Center saturation 30%: $\theta_0^* = \dfrac{c_{A,s}-0.3c_{A,s}}{c_{A,s}-0} = 0.7$. With $Bi_m\to\infty$ ($C_1 = 1.2732$, $\zeta_1^2 = 2.467$):

$$0.7 = 1.2732\,e^{-2.467\,Fo_m} \Rightarrow e^{-2.467\,Fo_m} = 0.5498 \Rightarrow Fo_m = \frac{-\ln 0.5498}{2.467} = \frac{0.598}{2.467} = 0.242.$$

$Fo_m = 0.242 > 0.2$ ✓ (one-term legal). Real time:

$$t = \frac{Fo_m L^2}{D_{AB}} = \frac{0.242\,(5\times10^{-3})^2}{2\times10^{-10}} = \frac{0.242\,(2.5\times10^{-5})}{2\times10^{-10}} = 3.0\times10^{4}\ \mathrm{s} \approx 8.4\ \text{hours}.$$

Thermal comparison: $Le = \alpha/D_{AB} = (1.3\times10^{-7})/(2\times10^{-10}) = 650$. Since the same $Fo$-value governs, $t_{\text{thermal}} = t/Le \approx 3.0\times10^{4}/650 \approx 46\ \mathrm{s}$. So the slab heats up in under a minute but takes about 8 hours to soak up solute — roughly $650\times$ longer.

*Check.* Units of $t$: $\mathrm{m^2/(m^2/s)} = \mathrm{s}$ ✓; $Fo_m$ dimensionless ✓; the $Le$-fold timescale gap is the expected consequence of $D_{AB}\ll\alpha$. ✓

**P3** Penetration depth scales as $\delta \sim \sqrt{D\,t}$.

(a) Same $t$: $\dfrac{\delta_L}{\delta_G} = \sqrt{\dfrac{D_L}{D_G}} = \sqrt{\dfrac{2\times10^{-9}}{2\times10^{-5}}} = \sqrt{10^{-4}} = 10^{-2}$. The liquid front penetrates only **1/100** as far as the gas front in the same time.

(b) Equal depth means equal $Dt$ (same $\eta$ at every depth): $D_L t_L = D_G t_G$, so

$$t_L = t_G\,\frac{D_G}{D_L} = (1\ \mathrm{s})\,\frac{2\times10^{-5}}{2\times10^{-9}} = 10^{4}\ \mathrm{s} \approx 2.8\ \text{hours}.$$

*Check.* Both results are powers of the diffusivity ratio $D_G/D_L = 10^4$: depth ratio $\sqrt{10^4}=100$, time ratio $10^4$ — consistent with $\delta\propto\sqrt{Dt}$. This ~$10^4$ gas-to-liquid gap is why the liquid film almost always sets the pace in gas absorption. ✓

</details>

## Flashback

**From Lesson 4.3 (Diffusion with reaction — the Thiele modulus):** A porous catalyst slab of half-thickness $L = 1\ \mathrm{mm}$ hosts a first-order reaction with rate constant $k_1 = 4\times10^{-3}\ \mathrm{s^{-1}}$ and effective diffusivity $D_e = 1\times10^{-9}\ \mathrm{m^2/s}$. Find the Thiele modulus $\phi$ and the effectiveness factor $\eta$, and say whether the pellet is reaction- or diffusion-limited.

<details>
<summary>Solution</summary>

Thiele modulus:

$$\phi = L\sqrt{\frac{k_1}{D_e}} = (1\times10^{-3})\sqrt{\frac{4\times10^{-3}}{1\times10^{-9}}} = (1\times10^{-3})\sqrt{4\times10^{6}} = (1\times10^{-3})(2000) = 2.0.$$

Effectiveness factor (first-order slab):

$$\eta = \frac{\tanh\phi}{\phi} = \frac{\tanh 2}{2} = \frac{0.964}{2} = 0.48.$$

Interpretation: $\phi = 2 > 1$ and $\eta = 0.48$ is close to the diffusion-limited asymptote $1/\phi = 0.50$, so the pellet is **diffusion-influenced** — only about half of the catalyst's interior is being fully used, because reactant is consumed faster than it can diffuse inward. To exploit more of the pellet you'd shrink $L$ (smaller $\phi$).

*Check.* $\phi$ dimensionless: $\mathrm{m}\sqrt{\mathrm{s^{-1}/(m^2 s^{-1})}} = \mathrm{m}\cdot\mathrm{m^{-1}} $ ✓. $\eta\in(0,1]$ ✓, and $\eta\to 1/\phi$ as $\phi$ grows, $\eta\to 1$ as $\phi\to 0$ — our value sits sensibly in the transition. ✓

</details>

## Connections

- **Backward:** this is the direct payoff of [2.6](02-06-species-continuity-equation.md)'s reduction of species-continuity to Fick's second law, and it re-imports the entire transient-conduction Module 2 of [`heat-transfer`](../../heat-transfer/syllabus.md) — [semi-infinite $\operatorname{erfc}$](../../heat-transfer/lessons/02-02-semi-infinite-solid.md) and [one-term / Heisler](../../heat-transfer/lessons/02-03-finite-bodies-heisler.md) — plus the carburizing $\operatorname{erf}$ solution from [`materials-science` 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md). The infinite-series origin of the one-term solution is a Fourier series (see [`fourier-analysis`](../../fourier-analysis/syllabus.md)).
- **Forward:** [4.5](04-05-mass-transfer-coefficients-correlations.md) replaces the "still medium" idealization with **convective** mass transfer — where a moving fluid sweeps the front away and $k_c$ (hence $Bi_m$) enters; penetration/surface-renewal theory even reuses this very $\operatorname{erfc}$ solution to model $k_c \propto \sqrt{D_{AB}}$. The $Le$-driven timescale split returns in [5.3 simultaneous heat & mass transfer](05-03-simultaneous-heat-mass-transfer.md).
- **Sideways:** the $\alpha \leftrightarrow D_{AB}$ swap is the mass-transport face of the grand momentum–heat–mass analogy ([1.5](01-05-three-diffusivities-pr-sc-le.md)) — the same "flux = −diffusivity × gradient" story that made $\nu$, $\alpha$, $D_{AB}$ interchangeable in the boundary-layer scalings of [3.3](03-03-thermal-concentration-boundary-layers.md).
</content>
</invoke>

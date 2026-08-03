# Statistical Mechanics · Lesson 5.2: Phase transitions and coexistence

> ⏱ ~15 min · Module 5: Interactions, phase transitions, and critical phenomena · Builds on: [5.1 Non-ideal gases: virial and van der Waals](#/lesson/stat-mech/05-01-virial-van-der-waals.md), [2.3 Thermodynamic potentials and Legendre transforms](#/lesson/stat-mech/02-03-thermodynamic-potentials-legendre.md) · Unlocks: 5.3 The Ising model and mean-field theory

## Why this matters

Water boils at 100°C at sea level but at 71°C on Everest, ice floats (unlike almost every other frozen liquid), and a pressure cooker works — all three are the *same* one-line equation, the Clausius–Clapeyron relation, read off a phase diagram. More deeply, this lesson draws the sharp line between the two ways matter reorganizes itself: the **first-order** transitions of everyday life (boiling, melting — you pour in heat and nothing warms up while it happens), and the **continuous** transitions (the critical point from [5.1](#/lesson/stat-mech/05-01-virial-van-der-waals.md), the magnet of [5.3](#/lesson/stat-mech/05-03-ising-mean-field.md)) where response functions diverge and universality lives. Knowing which kind you have tells you what to expect before you compute anything.

## The idea

Fix the pressure and slowly heat ice. It warms to 0°C, then *stops* — you keep pouring in energy and the temperature sits frozen while the solid turns to liquid. That stalled heat is the **latent heat**: energy spent rearranging the molecules, not speeding them up. The volume jumps too (ice → water shrinks; water → steam expands enormously). Discontinuous jumps in things like volume and entropy are the fingerprint of a **first-order** transition.

The right bookkeeping object is the Gibbs free energy per particle, $\mu = G/N$ (from [2.3](#/lesson/stat-mech/02-03-thermodynamic-potentials-legendre.md), $G = \mu N$), because $T$ and $p$ — the two things you actually control — are its natural variables. Each phase has its own $\mu(T,p)$ surface. **Nature picks the phase with the lower $\mu$.** Where two surfaces cross, the phases coexist; there $G$ has a *kink* (the two branches meet at an angle), and since the slope of $G$ is $-S$, a kink means a jump in entropy — latent heat again. Trace that crossing across the $p$–$T$ plane and you've drawn the coexistence curve. Its slope is forced by the sizes of the two jumps — that forcing *is* Clausius–Clapeyron.

A **continuous** transition is the exceptional case where the two phases become identical as you approach it — the volume jump, the entropy jump, all shrink to zero (the endpoint of the vaporization line, the critical point). No latent heat, no kink; instead the *curvature* misbehaves and response functions blow up.

## The formal version

**Classification (Ehrenfest, in spirit).** At a transition, $G$ (equivalently $\mu$) is always continuous — both phases share it on the coexistence curve. Ask about its *derivatives*:

- **First-order:** a **first** derivative of $G$ is discontinuous. Since $dG = -S\,dT + V\,dp + \mu\,dN$, the first derivatives are $-S$ and $V$; a jump in either means **latent heat** $L = T\,\Delta S$ and a **volume change** $\Delta V$. *In words: G bends sharply — the phases have genuinely different entropy and density at the transition.*
- **Continuous (second-order and beyond):** the first derivatives are continuous ($\Delta S = \Delta V = 0$), but a **second** derivative — a response function like $C_p = -T\,\partial^2 G/\partial T^2$ or the compressibility — is discontinuous or divergent. *In words: no latent heat; the order parameter slides continuously to zero and the system's "give" diverges.*

**Coexistence condition.** Two phases 1 and 2 are in equilibrium at $(T,p)$ iff

$$\mu_1(T,p) = \mu_2(T,p).$$

*In words: a molecule is indifferent to which phase it sits in — no free-energy incentive to switch, so neither phase grows at the other's expense.* This single equation, one constraint on two variables, carves out a **curve** $p(T)$ in the plane: the coexistence line.

**Clausius–Clapeyron.** Move a step $(dT, dp)$ *along* the coexistence curve. Equality of $\mu$ must be maintained, so $d\mu_1 = d\mu_2$. The per-particle Gibbs differential is $d\mu = -s\,dT + v\,dp$ (lowercase = per particle: $s = S/N$, $v = V/N$). Hence $-s_1\,dT + v_1\,dp = -s_2\,dT + v_2\,dp$, and rearranging,

$$\boxed{\ \frac{dp}{dT} = \frac{s_2 - s_1}{v_2 - v_1} = \frac{\Delta s}{\Delta v} = \frac{L}{T\,\Delta v}\ }$$

using $L = T\,\Delta s$ for the latent heat per particle. *In words: the steepness of a coexistence line is fixed entirely by the two jumps it separates — how much entropy versus how much volume you gain on crossing.* (Per mole instead of per particle, replace $k_B \to R$ and $L$ by the molar latent heat; the formula is unchanged.)

## Picture

![Left: a p–T phase diagram with solid, liquid, gas regions meeting at the triple point and the vaporization line ending at the critical point. Right: Gibbs free energy G(T) at fixed pressure — two branches whose lower envelope has a kink at the transition temperature, the signature of a first-order transition.](assets/05-02-fig1.svg)

The left panel is the map: three coexistence curves (sublimation, fusion, vaporization) meet at the **triple point** where all three phases coexist, and the vaporization curve *ends* at the **critical point** (beyond it, liquid and gas are one supercritical fluid — no boundary to cross). The right panel is the mechanism: at fixed $p$, each phase's $\mu(T)$ slopes downward (slope $-s < 0$), the physical state follows the *lower* branch, and at $T^{*}$ they cross with a kink — the slope jumps from $-s_1$ to $-s_2$, i.e. $\Delta s > 0$, latent heat.

## Worked examples

**Example 1 (the ice–water line has negative slope).** For the solid ↔ liquid transition of water, melting *absorbs* heat, so $\Delta s = s_{\text{liq}} - s_{\text{sol}} > 0$. But water is the oddball: liquid water is **denser** than ice, so $\Delta v = v_{\text{liq}} - v_{\text{sol}} < 0$. Therefore

$$\frac{dp}{dT} = \frac{\Delta s}{\Delta v} = \frac{(+)}{(-)} < 0.$$

The fusion line tilts *backward* (see the figure). Consequences: raise the pressure and the melting point *drops* — squeeze ice hard enough and it melts. This is why ice floats (less dense solid) and part of why a thin film of meltwater can lubricate the boundary under a loaded skate blade. Almost every other substance has $\Delta v > 0$ and a forward-leaning fusion line.

**Example 2 (boiling point vs. altitude).** For vaporization, $\Delta s > 0$ and $\Delta v = v_{\text{gas}} - v_{\text{liq}} > 0$ (huge), so $dp/dT > 0$: lower the ambient pressure and the boiling temperature drops. Estimate the size. Water's latent heat of vaporization is $L \approx 2.26\times 10^{6}\ \mathrm{J/kg}$; per mole ($M = 0.018\ \mathrm{kg}$), $L_{\text{mol}} \approx 4.07\times 10^{4}\ \mathrm{J/mol}$. Treat the vapor as ideal and neglect the liquid volume, so $\Delta v \approx v_{\text{gas}} = RT/p$ (molar). Then

$$\frac{dp}{dT} = \frac{L_{\text{mol}}}{T\,(RT/p)} = \frac{p\,L_{\text{mol}}}{RT^{2}} \quad\Longrightarrow\quad \frac{dT}{dp} = \frac{RT^{2}}{p\,L_{\text{mol}}}.$$

At $T = 373\ \mathrm{K}$, $p = 1.01\times 10^{5}\ \mathrm{Pa}$:

$$\frac{dT}{dp} = \frac{(8.314)(373)^{2}}{(1.01\times 10^{5})(4.07\times 10^{4})} \approx 2.8\times 10^{-4}\ \mathrm{K/Pa}.$$

Atop Everest the pressure is about $0.34\times 10^{5}\ \mathrm{Pa}$, a drop of $\Delta p \approx -0.67\times 10^{5}\ \mathrm{Pa}$. Linearly, $\Delta T \approx (2.8\times 10^{-4})(-0.67\times 10^{5}) \approx -19\ \mathrm{K}$ — water boils near 81°C, and the honest (integrated) answer is ≈71°C. The linear estimate has the right size and sign; P3 does the integration properly. Run it the other way — a sealed pressure cooker raises $p$, so boiling (and cooking) happens hotter.

## Watch out

- **You might think $G$ jumps at the transition — it doesn't.** $\mu_1 = \mu_2$ is the *whole point*: $G$ is continuous, and it's the *slope* (first-order) or *curvature* (continuous) that misbehaves. If $G$ itself jumped, one phase would be unconditionally favored and there'd be no coexistence.
- **Latent heat is not a temperature rise.** During a first-order transition, added heat converts phase at *constant* $T$ (the plateau on a heating curve). $L = T\Delta s$ is energy per particle to reorganize, not to warm.
- **"$dp/dT$" is a slope of the coexistence curve, not of any single phase's isotherm.** It's the constraint that keeps you *on* the $\mu_1 = \mu_2$ line as you move — that's why the derivation differentiates the *equality*, not one $\mu$ alone.
- **The critical point is where a first-order line dies, not a corner.** Approaching it, $\Delta v \to 0$ and $\Delta s \to 0$ together, so the latent heat vanishes and the transition turns continuous. Don't apply Clausius–Clapeyron *at* the critical point — $\Delta v = 0$ makes $dp/dT$ indeterminate (both jumps vanish).

## One-liner

> Phases coexist where their per-particle Gibbs energies tie, $\mu_1=\mu_2$; walk along that tie and the slope of the boundary is forced to be $dp/dT = L/(T\,\Delta v)$ — latent heat over volume change.

## Problems

**P1 (🟢)** Using the vaporization result $\dfrac{dT}{dp} = \dfrac{RT^{2}}{p\,L_{\text{mol}}}$ from Example 2, estimate the boiling temperature of water in Denver, where atmospheric pressure is about $0.84\times 10^{5}\ \mathrm{Pa}$. Use $L_{\text{mol}} = 4.07\times 10^{4}\ \mathrm{J/mol}$ and linearize about $(373\ \mathrm{K},\,1.01\times10^{5}\ \mathrm{Pa})$. Does the sign match your kitchen experience?

**P2 (🟡)** Derive $\dfrac{dp}{dT} = \dfrac{L}{T\,\Delta v}$ from scratch: start from $\mu_{\text{liq}}(T,p) = \mu_{\text{gas}}(T,p)$ holding along the coexistence curve, use $d\mu = -s\,dT + v\,dp$ per particle, and identify $L = T\,\Delta s$. State clearly where the coexistence condition (as opposed to a general state change) enters.

**P3 (🔴, optional)** Integrate Clausius–Clapeyron for the vapor-pressure curve. Assume (i) the vapor is an ideal gas, so $v_{\text{gas}} = k_B T / p$ per particle; (ii) $v_{\text{liq}} \ll v_{\text{gas}}$, so $\Delta v \approx v_{\text{gas}}$; (iii) the latent heat per particle $L$ is constant over the range. Show that

$$p(T) = p_0\, e^{-L/(k_B T)},$$

find what $p_0$ is, and comment on why the vapor pressure rises so steeply with $T$. (This exponential is the Boltzmann factor $e^{-\beta \varepsilon}$ of [3.1](#/lesson/stat-mech/03-01-canonical-ensemble-boltzmann-factor.md) in disguise — $L$ is the per-particle cost of leaving the liquid.)

<details>
<summary>Solutions</summary>

**P1** Linearize: $\Delta T \approx \dfrac{RT^{2}}{p\,L_{\text{mol}}}\,\Delta p$. Here $\Delta p = 0.84\times10^{5} - 1.01\times10^{5} = -0.17\times 10^{5}\ \mathrm{Pa}$. From Example 2, $\dfrac{RT^{2}}{p\,L_{\text{mol}}} \approx 2.8\times 10^{-4}\ \mathrm{K/Pa}$, so

$$\Delta T \approx (2.8\times 10^{-4})(-0.17\times 10^{5}) \approx -4.8\ \mathrm{K}.$$

Boiling point ≈ 95°C. Lower pressure ⇒ lower boiling point (sign matches: food takes longer to cook at altitude because the water is cooler). The integrated answer is ≈94°C, so the linearization is good over this modest pressure change.

**P2** On the coexistence curve the two chemical potentials are equal at *every* point: $\mu_{\text{liq}}(T,p) = \mu_{\text{gas}}(T,p)$. Take a differential step $(dT, dp)$ that *stays on the curve*. Equality is preserved along the whole curve, so the changes must match:

$$d\mu_{\text{liq}} = d\mu_{\text{gas}}.$$

**This is where coexistence enters** — for an arbitrary state change the two $d\mu$'s would differ; demanding they stay equal is exactly the statement that we move along the boundary. Using $d\mu = -s\,dT + v\,dp$ for each phase (per particle):

$$-s_{\text{liq}}\,dT + v_{\text{liq}}\,dp = -s_{\text{gas}}\,dT + v_{\text{gas}}\,dp.$$

Collect terms:

$$(v_{\text{gas}} - v_{\text{liq}})\,dp = (s_{\text{gas}} - s_{\text{liq}})\,dT \;\Longrightarrow\; \frac{dp}{dT} = \frac{\Delta s}{\Delta v}.$$

Finally $L \equiv T\,\Delta s$ (latent heat = $T$ times the entropy jump, since heat absorbed reversibly at fixed $T$ is $T\,\Delta s$), giving $\dfrac{dp}{dT} = \dfrac{L}{T\,\Delta v}$. $\blacksquare$

**P3** Start from $\dfrac{dp}{dT} = \dfrac{L}{T\,\Delta v}$ with $\Delta v \approx v_{\text{gas}} = \dfrac{k_B T}{p}$:

$$\frac{dp}{dT} = \frac{L}{T \cdot (k_B T/p)} = \frac{p\,L}{k_B T^{2}}.$$

Separate variables:

$$\frac{dp}{p} = \frac{L}{k_B}\,\frac{dT}{T^{2}}.$$

Integrate, treating $L$ as constant. Since $\displaystyle\int \frac{dT}{T^{2}} = -\frac{1}{T}$,

$$\ln p = -\frac{L}{k_B T} + C \;\Longrightarrow\; p(T) = p_0\, e^{-L/(k_B T)}, \qquad p_0 = e^{C}.$$

So $p_0$ is the (formal) prefactor set by the integration constant — the extrapolated pressure as $T \to \infty$; in practice you fix it by matching one known point (e.g. $p = 1$ atm at $T = 373\ \mathrm{K}$ for water), which also absorbs the mild $T$-dependence we ignored in $L$.

**Why so steep:** the vapor pressure is a **Boltzmann factor**. A molecule escaping the liquid pays a fixed energy $L$; the fraction with enough energy to leave is $\sim e^{-L/(k_B T)}$, which climbs explosively as $T$ rises because $L \gg k_B T$ (for water $L/k_B \approx 4900\ \mathrm{K}$, so near room temperature the exponent is $\sim -16$ and every few degrees roughly doubles $p$). This is the same $e^{-\beta \varepsilon}$ weighting that governs the canonical ensemble — coexistence is thermally activated escape, and $L$ is the activation energy. The neglected temperature dependence of $L$ and the $T^{0}$ vs. $T$ prefactor are the corrections real vapor-pressure tables (Antoine equation) restore.

</details>

## Flashback

**From Lesson 5.1 (Non-ideal gases: van der Waals):** The van der Waals equation is $\left(p + \dfrac{a}{v^{2}}\right)(v - b) = k_B T$ per particle. At the **critical point** the isotherm has an inflection with a horizontal tangent: $\left(\dfrac{\partial p}{\partial v}\right)_T = 0$ and $\left(\dfrac{\partial^{2} p}{\partial v^{2}}\right)_T = 0$. Solve these two conditions to find the critical volume $v_c$, temperature $T_c$, and pressure $p_c$ in terms of $a$ and $b$.

<details>
<summary>Solution</summary>

Write $p = \dfrac{k_B T}{v - b} - \dfrac{a}{v^{2}}$. Then

$$\left(\frac{\partial p}{\partial v}\right)_T = -\frac{k_B T}{(v-b)^{2}} + \frac{2a}{v^{3}} = 0, \qquad \left(\frac{\partial^{2} p}{\partial v^{2}}\right)_T = \frac{2k_B T}{(v-b)^{3}} - \frac{6a}{v^{4}} = 0.$$

From the first, $k_B T = \dfrac{2a(v-b)^{2}}{v^{3}}$. Substitute into the second:

$$\frac{2}{(v-b)^{3}}\cdot \frac{2a(v-b)^{2}}{v^{3}} = \frac{6a}{v^{4}} \;\Longrightarrow\; \frac{4a}{(v-b)\,v^{3}} = \frac{6a}{v^{4}} \;\Longrightarrow\; 4v = 6(v-b),$$

so $\boxed{v_c = 3b}$. Back-substitute: $k_B T_c = \dfrac{2a(3b-b)^{2}}{(3b)^{3}} = \dfrac{2a\cdot 4b^{2}}{27 b^{3}} = \dfrac{8a}{27 b}$, i.e. $\boxed{k_B T_c = \dfrac{8a}{27b}}$. Then

$$p_c = \frac{k_B T_c}{v_c - b} - \frac{a}{v_c^{2}} = \frac{8a/27b}{2b} - \frac{a}{9b^{2}} = \frac{4a}{27 b^{2}} - \frac{3a}{27 b^{2}} = \boxed{\frac{a}{27 b^{2}}}.$$

(Check: the dimensionless ratio $\dfrac{p_c v_c}{k_B T_c} = \dfrac{(a/27b^{2})(3b)}{8a/27b} = \dfrac{3}{8}$ — universal for every van der Waals fluid, the law of corresponding states. This is exactly the critical point where 5.2's vaporization line terminates.)

</details>

## Connections

- **Backward:** the coexistence condition is $G = \mu N$ from [2.3](#/lesson/stat-mech/02-03-thermodynamic-potentials-legendre.md) put to work — $G$'s natural variables $(T,p)$ are precisely what you dial in a phase diagram, which is *why* Gibbs (not $F$ or $U$) is the right potential here. The response functions that diverge at continuous transitions are the $C_p$, $\kappa_T$ built in [2.4](#/lesson/stat-mech/02-04-maxwell-relations-stability.md).
- **Forward:** the critical point where Clausius–Clapeyron breaks down ($\Delta v \to 0$) is the gateway to [5.3](#/lesson/stat-mech/05-03-ising-mean-field.md) and [5.4](#/lesson/stat-mech/05-04-critical-exponents-universality.md): the continuous transition, its order parameter, and the diverging susceptibility. The liquid–gas critical point and the ferromagnet's Curie point turn out to share critical exponents — universality.
- **Sideways (chemistry / atmospheric science):** the vapor-pressure law $p \propto e^{-L/k_B T}$ (P3) is the Boltzmann factor of [3.1](#/lesson/stat-mech/03-01-canonical-ensemble-boltzmann-factor.md) governing humidity, cloud formation, and the Clausius–Clapeyron scaling ($\sim 7\%$ more water vapor per °C) that sets how much extra moisture a warming atmosphere holds.

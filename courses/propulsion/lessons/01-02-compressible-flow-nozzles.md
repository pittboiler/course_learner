# Propulsion · Lesson 1.2: Compressible flow for nozzles — stagnation, isentropic, and choking

> ⏱ ~15 min · Module 1: Thrust and nozzles · Builds on: [1.1 Thrust and the momentum equation](01-01-thrust-momentum-equation.md) · Unlocks: [1.3 Nozzle operating regimes](01-03-nozzle-operating-regimes.md), [1.4 Nozzle performance](01-04-nozzle-performance-cf-cstar.md)

## Why this matters

[1.1](01-01-thrust-momentum-equation.md) said thrust is $\dot mu_e$ plus a pressure term. It did not say where $\dot m$, $u_e$, or $p_e$ come from. **They come from the nozzle**, and this lesson assembles the toolkit that computes them.

The whole toolkit is three relations plus one geometric constraint. Given a chamber pressure and temperature and a nozzle's area ratio, you can write down the exit Mach number, the exit velocity, the exit pressure, and the mass flow — and that is the entire input to the thrust equation.

**This is a reload, not a derivation.** The physics is built in [`aerodynamics` 4.1](../../aerodynamics/lessons/04-01-compressibility-sound-speed-energy.md)–[4.2](../../aerodynamics/lessons/04-02-isentropic-stagnation-relations.md) and [4.5](../../aerodynamics/lessons/04-05-quasi-1d-nozzle-flow.md); here it is stated as a working set, with the propulsion-specific facts that those lessons did not need — chiefly that **exhaust velocity depends on the propellant's molecular weight**, which is why hydrogen is the best chemical fuel there is.

## The idea

**A nozzle is an energy converter.** The gas arrives in the chamber hot, high-pressure, and slow; it leaves cold, low-pressure, and fast. Stagnation enthalpy is conserved, so every joule of enthalpy given up becomes kinetic energy.

**That immediately gives the exhaust velocity.** $c_pT_0 = c_pT_e+u_e^2/2$, so $u_e = \sqrt{2c_p(T_0-T_e)}$ — and the maximum conceivable value, expanding to absolute zero, is $\sqrt{2c_pT_0}$.

**And it explains the central fact of chemical propulsion.** Since $c_p = \gamma R/(\gamma-1)$ and $R = R_u/\mathcal{M}$, exhaust velocity goes as $\sqrt{T_0/\mathcal{M}}$. **Halving the molecular weight of the exhaust is worth as much as doubling the chamber temperature** — and it is far easier. That is the whole case for hydrogen.

**To go supersonic you need a throat.** The area–velocity relation flips sign at $M = 1$: converging accelerates subsonic flow, diverging accelerates supersonic flow. So the duct must converge to a sonic throat and then diverge.

**Then the area ratio fixes everything.** $A_e/A^*$ determines the exit Mach number, from which every property ratio follows by the isentropic relations. **Nozzle design is choosing one number.**

**And the throat sets the mass flow.** Once sonic, the throat passes $\dot m = 0.6847\,p_0A_t/\sqrt{RT_0}$ (for $\gamma = 1.4$), independent of anything downstream. **[Choking](../reference.md#choking) is what decouples the engine from the atmosphere.**

## The formal version

**Speed of sound and Mach number.**

$$\boxed{\;a = \sqrt{\gamma RT}, \qquad M = \frac{V}{a}, \qquad R = \frac{R_u}{\mathcal{M}},\ \ R_u = 8314\ \mathrm{J/(kmol\cdot K)}.\;}$$

**Stagnation (total) properties** — what the gas would have if brought to rest isentropically:

$$\boxed{\;\frac{T_0}{T} = 1+\frac{\gamma-1}{2}M^2, \qquad \frac{p_0}{p} = \left(\frac{T_0}{T}\right)^{\frac{\gamma}{\gamma-1}}, \qquad \frac{\rho_0}{\rho} = \left(\frac{T_0}{T}\right)^{\frac{1}{\gamma-1}}.\;}$$

*In words: one bracket, three exponents.* $T_0$ is conserved through any adiabatic process including a shock; $p_0$ only through an isentropic one.

**Energy equation and exhaust velocity.**

$$\boxed{\;u_e = \sqrt{2c_p\left(T_0-T_e\right)} = \sqrt{\frac{2\gamma}{\gamma-1}\frac{R_u T_0}{\mathcal{M}}\left[1-\left(\frac{p_e}{p_0}\right)^{\frac{\gamma-1}{\gamma}}\right]}.\;}$$

**This is the single most important formula in rocketry.** Read it as: exhaust velocity rises with chamber temperature, falls with molecular weight, and rises with pressure ratio — with diminishing returns, since the bracket approaches 1.

$$V_{\max} = \sqrt{2c_pT_0} \quad\text{(complete expansion to }p_e = 0).$$

**Sonic (critical) conditions**, for $\gamma = 1.4$:

$$\frac{T^*}{T_0} = \frac{2}{\gamma+1} = 0.8333, \qquad \frac{p^*}{p_0} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}} = 0.5283, \qquad \frac{\rho^*}{\rho_0} = 0.6339.$$

**Area–velocity and area–Mach relations.**

$$\frac{dA}{A} = \left(M^2-1\right)\frac{dV}{V}, \qquad \boxed{\;\left(\frac{A}{A^*}\right)^2 = \frac{1}{M^2}\left[\frac{2}{\gamma+1}\left(1+\frac{\gamma-1}{2}M^2\right)\right]^{\frac{\gamma+1}{\gamma-1}}.\;}$$

**Sonic conditions can occur only at a throat** ($dA = 0$ at $M = 1$), and the relation has two roots for every $A/A^*>1$ — a subsonic one and a supersonic one.

| $A_e/A_t$ | 2 | 4 | 6 | 10 | 25 | 50 |
|---|---|---|---|---|---|---|
| $M_e$ ($\gamma = 1.4$) | 2.197 | 2.940 | 3.368 | 3.923 | **5.000** | 5.976 |
| $p_e/p_0$ | 0.0939 | 0.0298 | 0.0139 | 0.00548 | 0.00189 | 0.000633 |

**Choked mass flow.**

$$\boxed{\;\dot m = \frac{p_0A_t}{\sqrt{T_0}}\sqrt{\frac{\gamma}{R}}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}} = 0.0404\,\frac{p_0A_t}{\sqrt{T_0}}\ \ \text{(SI, air)}.\;}$$

**Independent of everything downstream**, once the throat is sonic.

**A caution about $\gamma$ for real exhaust.** Air is $\gamma = 1.4$, $\mathcal{M} = 29$. Rocket exhaust is hot and polyatomic, with $\gamma\approx1.2$; kerosene/oxygen exhaust has $\mathcal{M}\approx22$, hydrogen/oxygen $\mathcal{M}\approx13$. **Every formula above holds with the local $\gamma$ and $R$ substituted**, but the numerical constants ($0.5283$, $0.0404$, and the area–Mach table) change.

## Picture

![A two-panel figure. Left: a converging-diverging nozzle in cross-section, with a chamber at the left labelled p nought and T nought, the throat marked with the note M equals one, the star conditions, and the diverging bell at the right; below the nozzle, four strip plots run along the axis showing Mach number rising monotonically through one at the throat, and pressure, temperature and density all falling, with the throat marked by a vertical line through all four. To the right of the throat a bracket labels the area ratio A sub e over A sub t and points to a small table giving exit Mach number for area ratios of 2, 10 and 25. Right: exhaust velocity plotted against chamber temperature, as a family of three curves for exhaust molecular weights of 29, 22 and 13, each rising like a square root; a horizontal dashed line at 3500 metres per second shows how the low-molecular-weight curve reaches it at about half the chamber temperature the heavy one needs, annotated halving the molecular weight is worth doubling the chamber temperature — and is far easier.](assets/01-02-fig1.svg)

Left: the nozzle as a state-conversion machine, with the area ratio as its only design parameter.

Right: why hydrogen wins. The exhaust velocity depends on $\sqrt{T_0/\mathcal{M}}$, and $\mathcal{M}$ is the cheaper of the two to move.

## Worked examples

**Example 1 (sizing a nozzle end to end).** A chamber holds gas at $p_0 = 4.0$ MPa and $T_0 = 3000$ K. The throat area is $A_t = 0.050$ m² and the expansion ratio is $A_e/A_t = 10$. Treat the exhaust as air ($\gamma = 1.4$, $R = 287$ J/kg·K).

*Exit Mach number.* From the area–Mach relation at $A/A^* = 10$ (supersonic root):

$$M_e = 3.923.$$

*The bracket.*

$$1+0.2M_e^2 = 1+0.2(15.39) = 4.077.$$

*Exit conditions.*

$$T_e = \frac{3000}{4.077} = 735.8\ \mathrm{K}, \qquad p_e = \frac{4.0\times10^6}{(4.077)^{3.5}} = \frac{4.0\times10^6}{137.0} = 29.2\ \mathrm{kPa}.$$

$$a_e = \sqrt{1.4(287)(735.8)} = 543.7\ \mathrm{m/s}, \qquad u_e = 3.923(543.7) = 2133\ \mathrm{m/s}.$$

*Cross-check via the energy equation:*

$$u_e = \sqrt{2c_p\left(T_0-T_e\right)} = \sqrt{2(1004.5)(3000-735.8)} = \sqrt{4{,}548{,}600} = 2133\ \mathrm{m/s} \quad\checkmark$$

*Mass flow.*

$$\dot m = 0.0404\frac{p_0A_t}{\sqrt{T_0}} = 0.0404\frac{4.0\times10^6(0.050)}{\sqrt{3000}} = 0.0404\frac{200{,}000}{54.77} = 147.6\ \mathrm{kg/s}.$$

*Throat conditions, for reference.*

$$T^* = 0.8333(3000) = 2500\ \mathrm{K}, \qquad p^* = 0.5283(4.0) = 2.113\ \mathrm{MPa}, \qquad a^* = \sqrt{1.4(287)(2500)} = 1002\ \mathrm{m/s}.$$

*Check the mass flow directly:* $\rho^* = p^*/(RT^*) = 2.113\times10^6/(287\cdot2500) = 2.945$ kg/m³, and $\rho^*a^*A_t = 2.945(1002)(0.050) = 147.6$ kg/s ✓

*Feeding the thrust equation.* With $A_e = 10(0.050) = 0.50$ m², at sea level:

$$F = \dot mu_e+\left(p_e-p_a\right)A_e = 147.6(2133)+\left(29{,}200-101{,}325\right)(0.50)$$
$$= 314{,}830-36{,}063 = 278.8\ \mathrm{kN},$$

and in vacuum

$$F = 314{,}830+29{,}200(0.50) = 329.4\ \mathrm{kN}.$$

**The nozzle geometry, plus two chamber numbers, gave the entire performance.** That is the point of the toolkit.

*One observation about the expansion.* $u_e = 2133$ m/s against $V_{\max} = \sqrt{2(1004.5)(3000)} = 2455$ m/s — **the nozzle has extracted 87% of the theoretical maximum with an area ratio of only 10.** Doubling the area ratio to 20 would raise $M_e$ to about 4.55 and $u_e$ to about 2240 m/s: a further 5%, for double the exit area. **The diminishing return is severe, and it is what caps practical expansion ratios.**

**Example 2 (why hydrogen).** The same nozzle ($A_e/A_t = 10$, $T_0 = 3000$ K) fed by three different exhaust compositions.

$$u_e = M_e\sqrt{\gamma RT_e}, \qquad R = \frac{8314}{\mathcal{M}}, \qquad V_{\max} = \sqrt{2c_pT_0},\ \ c_p = \frac{\gamma R}{\gamma-1}.$$

| Exhaust | $\gamma$ | $\mathcal{M}$ | $R$ (J/kg·K) | $M_e$ | $T_e$ (K) | $u_e$ (m/s) | $V_{\max}$ (m/s) |
|---|---|---|---|---|---|---|---|
| Air (reference) | 1.4 | 29 | 287 | 3.92 | 736 | 2133 | 2455 |
| Kerosene/oxygen | 1.2 | 22 | 378 | 3.28 | 1446 | 2655 | 3689 |
| Hydrogen/oxygen | 1.2 | 13 | 640 | 3.28 | 1446 | 3455 | 4800 |

*Reading it.* Three things, and the second is the whole reason hydrogen upper stages exist:

**$\gamma$ changes the Mach number but not much else.** Lowering $\gamma$ from 1.4 to 1.2 at fixed area ratio *reduces* $M_e$ from 3.92 to 3.28 — but raises the exit temperature and, through $R$, the sound speed. The two effects partly cancel.

**Molecular weight is decisive.** Kerolox and hydrolox have the same $\gamma$, the same chamber temperature here, and the same $M_e$ and $T_e$ — yet hydrolox delivers 30% more exhaust velocity, purely because $R = 8314/\mathcal{M}$ is 69% larger. **Thirty percent in $u_e$ is thirty percent in $I_{sp}$**, which compounds exponentially through the rocket equation ([3.1](03-01-rocket-equation.md)).

**And the scaling is explicit:** $u_e\propto\sqrt{T_0/\mathcal{M}}$. Cutting $\mathcal{M}$ from 22 to 13 is worth the same as raising $T_0$ from 3000 K to 5077 K — **which no chamber material could survive.** Molecular weight is the free lunch, and hydrogen is how you order it.

*The real numbers, for calibration.* A Merlin (kerolox) has a vacuum $I_{sp}$ of about 311 s; an RL10 (hydrolox) about 465 s. The ratio, 1.49, is larger than this table's 1.30 because the real comparison also involves different chamber temperatures and much larger expansion ratios — but the *mechanism* is exactly the one above.

*Why hydrogen is not used everywhere.* Liquid hydrogen has a density of 71 kg/m³ against kerosene's 810 — **eleven times bulkier for the same mass** — so hydrogen tanks are enormous, heavy, and must be insulated against a 20 K boiling point. On a first stage, where tank mass and aerodynamic drag dominate, the density penalty usually beats the $I_{sp}$ gain. **Hydrogen wins on upper stages, where the rocket equation's exponential dominates and volume is cheap.**

## Watch out

- **You might use $\gamma = 1.4$ for rocket exhaust.** It is nearer 1.2, and the constants $0.5283$, $0.0404$ and the whole area–Mach table shift with it.
- **You might use $R = 287$ for anything but air.** $R = R_u/\mathcal{M}$, and $\mathcal{M}$ is the exhaust's, not the propellant's.
- **You might take the subsonic root of the area–Mach relation.** For a nozzle running supersonic, take the supersonic one — the geometry offers both.
- **You might expect the mass flow to respond to back pressure.** Once choked it cannot; no signal travels upstream past a sonic throat.
- **You might think a bigger area ratio always helps.** $u_e$ approaches $V_{\max}$ asymptotically while $A_e$ grows without bound, and over-expansion penalties grow with it ([1.3](01-03-nozzle-operating-regimes.md)).
- **You might apply the isentropic relations across a shock.** They fail — use them separately on each side, with a different $p_0$.
- **You might confuse $A^*$ with $A_t$.** They are equal only when the throat is sonic and the flow between is isentropic; a shock downstream enlarges $A^*$.

## One-liner

> One bracket $\left(1+\tfrac{\gamma-1}{2}M^2\right)$ raised to three exponents gives every property ratio; the area ratio picks $M_e$; the throat chokes at $\dot m = 0.0404\,p_0A_t/\sqrt{T_0}$; and $u_e\propto\sqrt{T_0/\mathcal{M}}$ is why the best chemical fuel is the lightest one.

## Problems

**P1 (🟢)** Gas with $\gamma = 1.4$, $R = 287$ J/kg·K sits in a chamber at $p_0 = 2.5$ MPa and $T_0 = 2800$ K. For $M = 0.5$, $1.0$, and $2.0$, find the static temperature, static pressure, density, sound speed, and velocity.

**P2 (🟡)** A nozzle has $A_e/A_t = 25$ with $A_t = 0.040$ m², fed from $p_0 = 7.0$ MPa and $T_0 = 3400$ K (take $\gamma = 1.4$, $R = 287$). (a) Find $M_e$. (b) Find $p_e$, $T_e$, and $u_e$. (c) Find the mass flow and the exit area. (d) Find the vacuum thrust, and compare $u_e$ with $V_{\max}$.

**P3 (🔴)** A hydrolox upper stage burns at $T_0 = 3300$ K with exhaust $\gamma = 1.20$ and $\mathcal{M} = 13$ kg/kmol; a kerolox stage burns at $T_0 = 3600$ K with $\gamma = 1.20$ and $\mathcal{M} = 22$. Both use $A_e/A_t = 40$ and $p_0 = 8$ MPa. (a) Find $R$ and $c_p$ for each. (b) Find $V_{\max}$ for each and comment. (c) Using $u_e = \sqrt{2c_pT_0\left[1-(p_e/p_0)^{(\gamma-1)/\gamma}\right]}$ with $p_e/p_0 = 5.0\times10^{-4}$ for this area ratio, find $u_e$ and vacuum $I_{sp}$ for each. (d) The kerolox stage burns hotter yet performs worse. Quantify how much hotter it would have to burn to match hydrolox, and say why that is not an option.

<details>
<summary>Solutions</summary>

**P1** With $1+0.2M^2$ as the bracket:

| $M$ | bracket | $T = T_0/\text{br}$ | $p = p_0/\text{br}^{3.5}$ | $\rho = p/RT$ | $a = \sqrt{\gamma RT}$ | $V = Ma$ |
|---|---|---|---|---|---|---|
| 0.5 | 1.050 | 2666.7 K | 2107.5 kPa | 2.754 kg/m³ | 1035.1 m/s | 517.6 m/s |
| 1.0 | 1.200 | 2333.3 K | 1320.7 kPa | 1.972 kg/m³ | 968.3 m/s | 968.3 m/s |
| 2.0 | 1.800 | 1555.6 K | 319.5 kPa | 0.716 kg/m³ | 790.6 m/s | 1581.2 m/s |

*(Working the $M = 1$ row: $T = 2800/1.2 = 2333.3$ K; $p = 2.5\times10^6/1.2^{3.5} = 2.5\times10^6/1.8929 = 1320.7$ kPa; $\rho = 1{,}320{,}700/(287\cdot2333.3) = 1.972$; $a = \sqrt{1.4(287)(2333.3)} = 968.3$ m/s. And note $p/p_0 = 0.5283$ ✓ and $T/T_0 = 0.8333$ ✓ — the sonic ratios.)*

**P2** (a) At $A/A^* = 25$ the supersonic root is **exactly**

$$M_e = 5.000.$$

*(A pleasing exact case: $AR(5) = \tfrac15\left[\tfrac{2}{2.4}(1+0.2\cdot25)\right]^3 = \tfrac15(5)^3 = 25$.)*

(b) $$1+0.2(25) = 6.000.$$

$$T_e = \frac{3400}{6} = 566.7\ \mathrm{K}, \qquad p_e = \frac{7.0\times10^6}{6^{3.5}} = \frac{7.0\times10^6}{529.1} = 13.23\ \mathrm{kPa}.$$

$$a_e = \sqrt{1.4(287)(566.7)} = 477.2\ \mathrm{m/s}, \qquad u_e = 5(477.2) = 2386\ \mathrm{m/s}.$$

(c) $$\dot m = 0.0404\frac{7.0\times10^6(0.040)}{\sqrt{3400}} = 0.0404\frac{280{,}000}{58.31} = 194.0\ \mathrm{kg/s},$$

$$A_e = 25(0.040) = 1.000\ \mathrm{m^2}.$$

(d) $$F_{\rm vac} = \dot mu_e+p_eA_e = 194.0(2386)+13{,}230(1.000) = 462{,}884+13{,}230 = 476.1\ \mathrm{kN}.$$

$$V_{\max} = \sqrt{2(1004.5)(3400)} = \sqrt{6{,}830{,}600} = 2613.5\ \mathrm{m/s}, \qquad \frac{u_e}{V_{\max}} = \frac{2386}{2613.5} = 0.913.$$

**An area ratio of 25 extracts 91% of the theoretical maximum**, against 87% at a ratio of 10 — 4 points more, for 2.5 times the exit area. **The diminishing return, quantified.**

**P3** (a) $$R = \frac{R_u}{\mathcal{M}}, \qquad c_p = \frac{\gamma R}{\gamma-1} = 6R\ \ (\gamma = 1.20).$$

*Hydrolox:* $R = 8314/13 = 639.5$ J/(kg·K), $c_p = 6(639.5) = 3837$ J/(kg·K).

*Kerolox:* $R = 8314/22 = 377.9$ J/(kg·K), $c_p = 6(377.9) = 2267$ J/(kg·K).

(b) $$V_{\max} = \sqrt{2c_pT_0}.$$

*Hydrolox:* $\sqrt{2(3837)(3300)} = \sqrt{25{,}324{,}200} = 5032\ \mathrm{m/s}$.

*Kerolox:* $\sqrt{2(2267)(3600)} = \sqrt{16{,}322{,}400} = 4041\ \mathrm{m/s}$.

**Hydrolox's theoretical ceiling is 25% higher despite burning 300 K cooler**, entirely because its exhaust is 41% lighter.

(c) With $p_e/p_0 = 5.0\times10^{-4}$ and $(\gamma-1)/\gamma = 1/6$:

$$\left(5.0\times10^{-4}\right)^{1/6} = e^{\ln(5\times10^{-4})/6} = e^{-7.6009/6} = e^{-1.26682} = 0.28173,$$

$$1-0.28173 = 0.71830, \qquad \sqrt{0.71830} = 0.84751.$$

$$u_e = V_{\max}\sqrt{0.71830}:$$

*Hydrolox:* $u_e = 5032(0.84751) = 4265\ \mathrm{m/s}$, $\ I_{sp} = 4265/9.80665 = 435\ \mathrm{s}$.

*Kerolox:* $u_e = 4041(0.84751) = 3424\ \mathrm{m/s}$, $\ I_{sp} = 3424/9.80665 = 349\ \mathrm{s}$.

**A 25% advantage, and it is entirely the molecular weight** — the pressure-ratio bracket is identical for both, since $\gamma$ and $A_e/A_t$ are the same.

*(These figures are close to reality: the RL10's vacuum $I_{sp}$ is about 465 s and the Merlin Vacuum's about 348 s. The hydrolox estimate is low mainly because real hydrolox engines run fuel-rich, which lowers $\mathcal{M}$ below 13.)*

(d) *How much hotter.* Since $u_e\propto\sqrt{T_0/\mathcal{M}}$ at fixed $\gamma$ and pressure ratio, matching hydrolox requires

$$\frac{T_{0,\rm kero}}{22} = \frac{3300}{13} \quad\Longrightarrow\quad T_{0,\rm kero} = 3300\times\frac{22}{13} = 5585\ \mathrm{K}.$$

**The kerolox chamber would have to run at 5585 K — nearly 2000 K hotter than it does, and hotter than the surface of the Sun (5778 K) to within 3%.**

*Why that is not an option.* Four independent walls, any one of which is fatal:

**No material survives it.** The best regeneratively cooled copper-alloy chamber liners hold a wall temperature near 800 K with gas at 3600 K, and the heat flux scales steeply with gas temperature. At 5585 K the flux would roughly double while the coolant's capacity did not.

**The reaction will not go there.** A hydrocarbon–oxygen flame's adiabatic temperature peaks near 3800 K at stoichiometric, and *falls* on either side. Above about 3500 K, **dissociation** takes over: CO₂ and H₂O break apart, absorbing exactly the energy that would have raised the temperature. **Chemistry imposes its own ceiling well below 5585 K**, regardless of engineering.

**Dissociation also wrecks the assumed $\gamma$ and $\mathcal{M}$.** The calculation above holds $\gamma = 1.2$ and $\mathcal{M} = 22$ fixed; a dissociated exhaust has different values, and re-association in the nozzle releases energy in a way this frozen-flow model cannot represent.

**Even if it worked, it would erode.** Combustion at that temperature attacks injector faces, throat inserts, and turbine blades on timescales of seconds.

*The design conclusion.* **Chamber temperature is bounded by chemistry at roughly 3600–3800 K for any chemical propellant, so the only remaining lever is molecular weight** — and that is why the entire history of high-performance chemical propulsion is a history of running as hydrogen-rich as the mission's tank volume will allow.

*And why the lever runs out.* Even pure hydrogen exhaust at the chemical temperature ceiling gives $I_{sp}$ of about 500 s. Beating that requires abandoning chemistry: heat hydrogen with a nuclear reactor and $\mathcal{M} = 2$ gives 900 s ([4.2](04-02-nuclear-thermal-advanced.md)); abandon thermal expansion altogether and accelerate ions electrostatically for thousands of seconds ([4.1](04-01-electric-propulsion.md)).

</details>

## Flashback

**From Lesson 1.1 (Thrust and the momentum equation):** A rocket engine has $\dot m = 320$ kg/s, $u_e = 2950$ m/s, $A_e = 1.40$ m², and $p_e = 55$ kPa. (a) Find the sea-level and vacuum thrust. (b) Find $v_e$ and $I_{sp}$ in each case. (c) Name the three terms of the thrust equation and give their signs here. (d) Why does an air-breathing engine have a term this rocket does not?

<details>
<summary>Solution</summary>

(a) $$\dot mu_e = 320(2950) = 944{,}000\ \mathrm{N}.$$

$$F_{SL} = 944{,}000+\left(55{,}000-101{,}325\right)(1.40) = 944{,}000-64{,}855 = 879{,}145\ \mathrm{N} = 879.1\ \mathrm{kN}.$$

$$F_{\rm vac} = 944{,}000+55{,}000(1.40) = 944{,}000+77{,}000 = 1{,}021{,}000\ \mathrm{N} = 1021.0\ \mathrm{kN}.$$

(b) $$v_{e,SL} = \frac{879{,}145}{320} = 2747.3\ \mathrm{m/s}, \qquad I_{sp,SL} = \frac{2747.3}{9.80665} = 280.1\ \mathrm{s},$$

$$v_{e,\rm vac} = \frac{1{,}021{,}000}{320} = 3190.6\ \mathrm{m/s}, \qquad I_{sp,\rm vac} = \frac{3190.6}{9.80665} = 325.4\ \mathrm{s}.$$

(c) **Momentum thrust** $\dot mu_e = +944.0$ kN, always positive. **Pressure thrust** $(p_e-p_a)A_e$: $-64.9$ kN at sea level (over-expanded), $+77.0$ kN in vacuum. **Ram drag** $-\dot m_aV_\infty$: **absent**, because a rocket ingests no external mass.

(d) An air-breathing engine swallows atmospheric air that already carries momentum $\dot m_aV_\infty$ in the flight direction. It must "pay back" that momentum before any of its exhaust counts as thrust, so the term $-\dot m_aV_\infty$ appears. **A rocket carries its propellant, which is at rest relative to the vehicle before the burn, so there is nothing to pay back** — and its thrust is therefore independent of flight speed.

*The bridge to this lesson.* [1.1](01-01-thrust-momentum-equation.md) took $u_e$, $p_e$, and $A_e$ as given. This lesson supplies them.

For the engine above, working backwards: $u_e = 2950$ m/s with air-like properties would need

$$T_0-T_e = \frac{u_e^2}{2c_p} = \frac{8.7\times10^6}{2009} = 4332\ \mathrm{K},$$

**which is impossible for a chemical chamber** — no combustion produces a 4300 K temperature drop. So the exhaust cannot be air-like: with $\gamma = 1.2$ and $\mathcal{M} = 22$ ($c_p = 2267$ J/kg·K), the same $u_e$ needs only $T_0-T_e = 1920$ K, comfortably within reach of a 3600 K chamber.

**The exhaust's composition is not a detail; it decides whether the engine is possible at all** — and that is exactly what Example 2 was about.

</details>

## Connections

- **Backward:** every relation here is derived in [`aerodynamics` 4.1](../../aerodynamics/lessons/04-01-compressibility-sound-speed-energy.md), [4.2](../../aerodynamics/lessons/04-02-isentropic-stagnation-relations.md), and [4.5](../../aerodynamics/lessons/04-05-quasi-1d-nozzle-flow.md) and is *reloaded*, not re-derived; the thrust equation it feeds is [1.1](01-01-thrust-momentum-equation.md)'s; the isentropic relation $p\rho^{-\gamma} = $ const is [`engineering-thermodynamics`](../../engineering-thermodynamics/syllabus.md)'s.
- **Forward:** [1.3](01-03-nozzle-operating-regimes.md) asks what happens when $p_e\neq p_a$; [1.4](01-04-nozzle-performance-cf-cstar.md) repackages the whole calculation into $C_F$ and $c^*$; [3.2](03-02-specific-impulse-rocket-performance.md) turns $u_e$ into $I_{sp}$; [4.2](04-02-nuclear-thermal-advanced.md) exploits $u_e\propto1/\sqrt{\mathcal{M}}$ by heating pure hydrogen.
- **Sideways:** $u_e\propto\sqrt{T/\mathcal{M}}$ is the same scaling as the molecular thermal speed $\sqrt{3k_BT/m}$ from kinetic theory in [`stat-mech`](../../stat-mech/syllabus.md) — a nozzle is a device for converting the *random* thermal motion of light molecules into *directed* motion, and it can never do better than the thermal speed it started with.

# Propulsion · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Propulsion is the business of making thrust and accounting for what it costs. Four toolkits do the work: the control-volume thrust equation and the compressible relations that size a nozzle, the cycle analysis that grades an air-breathing engine, the rocket equation that converts exhaust velocity into mission capability, and the power constraint that organizes everything beyond chemistry. This card holds the station numbering, the conventions, the closed-form results, and the property tables the lessons use — so you never have to remember whether $I_{sp}$ is per unit mass or per unit weight.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $F$ | thrust (uninstalled unless stated) | [1.1](lessons/01-01-thrust-momentum-equation.md) |
| $\dot m_a$, $\dot m_f$, $\dot m_e$ | air, fuel, and exit mass flows; $\dot m_e = \dot m_a+\dot m_f$ | [1.1](lessons/01-01-thrust-momentum-equation.md) |
| $f$ | fuel/air ratio $\dot m_f/\dot m_a$ | [1.1](lessons/01-01-thrust-momentum-equation.md) |
| $u_e$ | actual gas velocity at the nozzle exit | [1.1](lessons/01-01-thrust-momentum-equation.md) |
| $v_e$ | **effective** exhaust velocity, the number making $F = \dot mv_e$ true including the pressure term | [1.1](lessons/01-01-thrust-momentum-equation.md) |
| $p_e$, $p_a$, $A_e$ | exit static pressure, ambient pressure, exit area (all absolute) | [1.1](lessons/01-01-thrust-momentum-equation.md) |
| $V_\infty$ | flight speed | [1.1](lessons/01-01-thrust-momentum-equation.md) |
| $p_0$, $T_0$ | chamber (rocket) or stagnation (air-breather) pressure and temperature | [1.2](lessons/01-02-compressible-flow-nozzles.md) |
| $\gamma$, $R$, $\mathcal{M}$ | ratio of specific heats, gas constant $R_u/\mathcal{M}$, molecular weight | [1.2](lessons/01-02-compressible-flow-nozzles.md) |
| $A_t$, $A^*$ | throat area; sonic reference area (equal only if the throat is sonic and the flow between is isentropic) | [1.2](lessons/01-02-compressible-flow-nozzles.md) |
| $\varepsilon$ (Module 1) | nozzle expansion ratio $A_e/A_t$ | [1.3](lessons/01-03-nozzle-operating-regimes.md) |
| $c^*$ | characteristic velocity $p_0A_t/\dot m$ — grades the **chamber and propellant** | [1.4](lessons/01-04-nozzle-performance-cf-cstar.md) |
| $C_F$ | thrust coefficient $F/(p_0A_t)$ — grades the **nozzle and altitude** | [1.4](lessons/01-04-nozzle-performance-cf-cstar.md) |
| $\Gamma$ | $\sqrt\gamma\left(\tfrac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}}$, the choked-flow constant | [1.4](lessons/01-04-nozzle-performance-cf-cstar.md) |
| $\eta_{\rm th}$, $\eta_p$, $\eta_o$ | thermal (fuel→jet), propulsive (jet→thrust work), overall (their product) | [2.1](lessons/02-01-propulsion-efficiencies-brayton.md) |
| $\mathrm{TSFC}$ | thrust-specific fuel consumption $\dot m_f/F$, usually kg/(N·h) | [2.1](lessons/02-01-propulsion-efficiencies-brayton.md) |
| $r_p$, $\pi_c$, $\pi_f$ | overall, compressor, and fan pressure ratios | [2.1](lessons/02-01-propulsion-efficiencies-brayton.md), [2.4](lessons/02-04-turbojet-cycle.md), [2.5](lessons/02-05-turbofan-bypass.md) |
| $\tau_r$, $\tau_c$ | ram and compressor temperature ratios | [2.2](lessons/02-02-ideal-ramjet.md), [2.4](lessons/02-04-turbojet-cycle.md) |
| $Q_R$ | fuel heating value (**lower** heating value) | [2.2](lessons/02-02-ideal-ramjet.md) |
| $\phi$ | equivalence ratio $f/f_{\rm stoich}$ | [2.3](lessons/02-03-combustion-for-propulsion.md) |
| $B$ | bypass ratio $\dot m_{\rm bypass}/\dot m_{\rm core}$ | [2.5](lessons/02-05-turbofan-bypass.md) |
| $\eta_{\rm pr}$, $\mathrm{PSFC}$ | propeller efficiency; power-specific fuel consumption $\dot m_f/P_{\rm shaft}$ | [2.6](lessons/02-06-turboprop-propeller.md) |
| $C_T$ | propeller disc loading $T/(\tfrac12\rho V_\infty^2A)$ | [2.6](lessons/02-06-turboprop-propeller.md) |
| $g_0$ | **defined** constant 9.80665 m/s², not local gravity | [3.1](lessons/03-01-rocket-equation.md) |
| $I_{sp}$ | specific impulse $F/(\dot mg_0) = v_e/g_0$, in seconds | [3.1](lessons/03-01-rocket-equation.md) |
| $MR$ | mass ratio $m_0/m_f$ | [3.1](lessons/03-01-rocket-equation.md) |
| $\varepsilon$ (Module 3) | **structural coefficient** $m_s/(m_s+m_p)$ — a different $\varepsilon$ from Module 1's | [3.1](lessons/03-01-rocket-equation.md) |
| $\lambda$ | payload fraction $m_L/m_0$ | [3.1](lessons/03-01-rocket-equation.md) |
| $r$ (Module 3) | oxidizer/fuel mixture ratio $\dot m_{ox}/\dot m_{fuel}$ | [3.2](lessons/03-02-specific-impulse-rocket-performance.md) |
| $a$, $n$, $K$ | solid-propellant burn-rate constant and exponent; $K = A_b/A_t$ | [3.4](lessons/03-04-chemical-rockets-liquids-solids.md) |
| $\alpha$ (Module 4) | power-plant specific mass, kg/W | [4.1](lessons/04-01-electric-propulsion.md) |
| $M_2$ | combustor-entry Mach number | [4.3](lessons/04-03-hypersonic-airbreathing-scramjet.md) |

**Symbol collisions worth flagging:** $\varepsilon$ is a nozzle expansion ratio in Module 1 and a structural coefficient in Module 3; $\Gamma$ is the choked-flow constant here (and a circulation in [`aerodynamics`](../aerodynamics/syllabus.md)); $r$ is a mixture ratio in Module 3 and a burn rate in [3.4](lessons/03-04-chemical-rockets-liquids-solids.md); $\alpha$ is a power-plant specific mass in Module 4 and a nozzle half-angle in [1.4](lessons/01-04-nozzle-performance-cf-cstar.md).

## Definitions

### Thrust equation

The control-volume momentum balance for an engine: what you throw out, minus what you swallowed, plus a pressure imbalance at the one place ambient pressure cannot reach.

$$F = \dot m_eu_e-\dot m_aV_\infty+\left(p_e-p_a\right)A_e$$

*Introduced:* [1.1](lessons/01-01-thrust-momentum-equation.md)

### Effective exhaust velocity

The fictitious speed that makes $F = \dot mv_e$ true including the pressure term. It is not the speed of anything; it is the number that goes into the rocket equation.

$$v_e = u_e+\frac{\left(p_e-p_a\right)A_e}{\dot m} = g_0I_{sp}$$

*Introduced:* [1.1](lessons/01-01-thrust-momentum-equation.md)

### Specific impulse

Impulse per unit **weight** of propellant. The seconds are an artefact of dividing by weight rather than mass; the physical quantity is $v_e$.

$$I_{sp} = \frac{F}{\dot mg_0} = \frac{v_e}{g_0}, \qquad g_0 = 9.80665\ \mathrm{m/s^2}\ \text{(defined)}$$

*Introduced:* [3.1](lessons/03-01-rocket-equation.md), [3.2](lessons/03-02-specific-impulse-rocket-performance.md)

### Characteristic velocity

$p_0A_t/\dot m$: a figure of merit with velocity units that measures the chamber and the propellant, and nothing about the nozzle.

$$c^* = \frac{p_0A_t}{\dot m} = \frac{\sqrt{RT_0}}{\Gamma} = \frac{1}{\Gamma}\sqrt{\frac{R_uT_0}{\mathcal{M}}}$$

*Introduced:* [1.4](lessons/01-04-nozzle-performance-cf-cstar.md)

### Thrust coefficient

$F/(p_0A_t)$: how much the nozzle multiplies the chamber's raw force. Depends only on $\gamma$, the area ratio, and $p_a/p_0$ — never on the propellant's energy.

$$C_F = \frac{F}{p_0A_t}, \qquad g_0I_{sp} = v_e = c^*C_F$$

*Introduced:* [1.4](lessons/01-04-nozzle-performance-cf-cstar.md)

### Choking

Once a throat reaches $M = 1$, no downstream change can propagate upstream: the mass flow is fixed by $p_0$, $T_0$, and $A^*$ alone.

$$\dot m = \frac{\Gamma p_0A^*}{\sqrt{RT_0}} = \frac{p_0A^*}{c^*}$$

*Introduced:* [1.2](lessons/01-02-compressible-flow-nozzles.md)

### Nozzle operating regimes

**Over-expanded** ($p_e<p_a$): pressure thrust negative, plume pinches, oblique shocks and diamonds. **Design** ($p_e = p_a$). **Under-expanded** ($p_e>p_a$): pressure thrust positive, plume balloons, expansion fan and Mach disc.

*Introduced:* [1.3](lessons/01-03-nozzle-operating-regimes.md)

### Propulsive efficiency

The fraction of jet kinetic energy that becomes useful thrust work. It equals 1 only where the thrust is zero.

$$\eta_p = \frac{FV_\infty}{\text{jet power added}} = \frac{2}{1+u_e/V_\infty}$$

*Introduced:* [2.1](lessons/02-01-propulsion-efficiencies-brayton.md)

### Bypass ratio

The mass of air the fan moves for every kilogram through the core. Raising it slows both jets toward flight speed and improves propulsive efficiency.

$$B = \frac{\dot m_{\rm bypass}}{\dot m_{\rm core}}$$

*Introduced:* [2.5](lessons/02-05-turbofan-bypass.md)

### Equivalence ratio

Fuel/air ratio relative to stoichiometric. Gas turbines run overall lean ($\phi\approx0.3$) because the turbine caps the temperature; ramjets run richer ($\phi\approx0.6$) because they have no turbine.

$$\phi = \frac{f}{f_{\rm stoich}}$$

*Introduced:* [2.3](lessons/02-03-combustion-for-propulsion.md)

### Rocket (Tsiolkovsky) equation

Velocity change is linear in exhaust velocity and only logarithmic in mass. It depends on neither thrust nor trajectory.

$$\Delta v = v_e\ln\frac{m_0}{m_f} = g_0I_{sp}\ln\frac{m_0}{m_f}$$

*Introduced:* [3.1](lessons/03-01-rocket-equation.md)

### Structural coefficient and payload fraction

$\varepsilon$ is dry mass as a fraction of stage mass; $\lambda$ is payload as a fraction of liftoff mass. **$\lambda>0$ requires $MR<1/\varepsilon$** — the single-stage wall.

$$\varepsilon = \frac{m_s}{m_s+m_p}, \qquad \lambda = \frac{m_L}{m_0} = \frac{1/MR-\varepsilon}{1-\varepsilon}$$

*Introduced:* [3.1](lessons/03-01-rocket-equation.md)

### Staging

Each stage's payload is the entire stack above it, so overall payload fractions **multiply** while $\Delta v$ adds.

$$\lambda_{\rm total} = \prod_i\lambda_i, \qquad \Delta v_{\rm total} = \sum_i\Delta v_i$$

*Introduced:* [3.3](lessons/03-03-staging-mass-ratio.md)

### Actuator disc (momentum theory)

A propeller or fan modelled as a disc adding velocity $v$; the far wake has $2v$. Light disc loading gives near-unit ideal efficiency.

$$T = 2\rho Av\left(V_\infty+v\right), \qquad \eta_i = \frac{V_\infty}{V_\infty+v} = \frac{2}{1+\sqrt{1+C_T}}$$

*Introduced:* [2.6](lessons/02-06-turboprop-propeller.md)

### Power-limited thrust

For any thruster whose power comes from a separate supply, thrust and exhaust velocity are reciprocal at fixed power.

$$F = \frac{2\eta P}{v_e} = \frac{2\eta P}{g_0I_{sp}}$$

*Introduced:* [4.1](lessons/04-01-electric-propulsion.md)

### Rayleigh choking

Adding heat to a duct flow drives it toward $M = 1$; there is a maximum heat addition, independent of materials.

$$\frac{T_0}{T_0^*} = \frac{\left(\gamma+1\right)M^2\left[2+\left(\gamma-1\right)M^2\right]}{\left(1+\gamma M^2\right)^2}$$

*Introduced:* [2.3](lessons/02-03-combustion-for-propulsion.md)

## Formulas and rules

### Constants and gas properties

| Quantity | Value |
|---|---|
| $g_0$ | 9.80665 m/s² (defined) |
| $R_u$ | 8314 J/(kmol·K) |
| Air | $\gamma = 1.4$, $\mathcal{M} = 29$, $R = 287$, $c_p = 1005$ J/(kg·K) |
| Hot combustion products (air-breather) | $c_p\approx1150$ J/(kg·K) |
| Rocket exhaust (kerolox) | $\gamma\approx1.20$, $\mathcal{M}\approx22$, $R\approx378$, $c_p\approx2268$ |
| Rocket exhaust (hydrolox) | $\gamma\approx1.20$, $\mathcal{M}\approx13$, $R\approx640$, $c_p\approx3837$ |
| Pure hydrogen (nuclear thermal) | $\gamma\approx1.4$, $\mathcal{M} = 2.016$, $R = 4124$, $c_p = 14{,}434$ |
| Sea level | $T = 288.15$ K, $p = 101{,}325$ Pa, $\rho = 1.225$ kg/m³, $a = 340.3$ m/s |
| 11 km | $T = 216.65$ K, $p = 22{,}632$ Pa, $a = 295.0$ m/s |

**Standard atmosphere pressures (kPa):** 0 km 101.3 · 5 km 54.0 · 10 km 26.5 · 15 km 12.1 · 20 km 5.53 · 30 km 1.20.

*From* [1.1](lessons/01-01-thrust-momentum-equation.md), [1.2](lessons/01-02-compressible-flow-nozzles.md), [1.3](lessons/01-03-nozzle-operating-regimes.md), [4.2](lessons/04-02-nuclear-thermal-advanced.md)

### Thrust and its accounting

| Want | Formula |
|---|---|
| General thrust | $F = \dot m_eu_e-\dot m_aV_\infty+(p_e-p_a)A_e$ |
| Rocket thrust | $F = \dot mu_e+(p_e-p_a)A_e = \dot mv_e = C_Fp_0A_t$ |
| Air-breather specific thrust | $\dfrac{F}{\dot m_a} = (1+f)u_e-V_\infty$ (m/s) |
| Turbofan specific thrust | $\dfrac{F}{\dot m_{\rm total}} = \dfrac{(1+f)u_{e,c}-V_\infty+B(u_{e,f}-V_\infty)}{1+B}$ |
| Fuel consumption | $\mathrm{TSFC} = \dfrac{\dot m_f}{F} = \dfrac{f/(1+B)}{F/\dot m_{\rm total}} = \dfrac{V_\infty}{\eta_oQ_R}$ |
| Air-breather $I_{sp}$ (fuel only) | $I_{sp} = \dfrac{F/\dot m_a}{fg_0}$ |
| Total impulse | $I = \displaystyle\int F\,dt = v_em_p = I_{sp}g_0m_p$ |

*From* [1.1](lessons/01-01-thrust-momentum-equation.md), [2.1](lessons/02-01-propulsion-efficiencies-brayton.md), [2.5](lessons/02-05-turbofan-bypass.md), [3.2](lessons/03-02-specific-impulse-rocket-performance.md)

### Compressible flow for nozzles

$$\frac{T_0}{T} = 1+\frac{\gamma-1}{2}M^2, \qquad \frac{p_0}{p} = \left(\frac{T_0}{T}\right)^{\frac{\gamma}{\gamma-1}}, \qquad \frac{\rho_0}{\rho} = \left(\frac{T_0}{T}\right)^{\frac{1}{\gamma-1}}$$

$$\left(\frac{A}{A^*}\right)^2 = \frac{1}{M^2}\left[\frac{2}{\gamma+1}\left(1+\frac{\gamma-1}{2}M^2\right)\right]^{\frac{\gamma+1}{\gamma-1}}, \qquad \frac{dA}{A} = \left(M^2-1\right)\frac{dV}{V}$$

$$u_e = \sqrt{2c_p\left(T_0-T_e\right)} = \sqrt{\frac{2\gamma}{\gamma-1}\frac{R_uT_0}{\mathcal{M}}\left[1-\left(\frac{p_e}{p_0}\right)^{\frac{\gamma-1}{\gamma}}\right]}, \qquad V_{\max} = \sqrt{2c_pT_0}$$

**Area ratio → exit Mach number:**

| $A_e/A_t$ | 2 | 4 | 8 | 10 | 16 | 25 | 40 | 60 |
|---|---|---|---|---|---|---|---|---|
| $M_e$ ($\gamma = 1.4$) | 2.197 | 2.940 | 3.665 | 3.923 | 4.459 | **5.000** | 5.609 | 6.111 |
| $M_e$ ($\gamma = 1.2$) | 1.995 | 2.619 | 3.122 | 3.278 | 3.604 | 3.913 | 4.239 | 4.525 |
| $p_e/p_0$ ($\gamma = 1.2$) | 0.1284 | 0.0435 | 0.0169 | 0.0125 | 0.00677 | 0.00380 | 0.00209 | 0.00125 |

**Choked-flow coefficients** $\Gamma/\sqrt{R}$: air ($\gamma = 1.4$, $R = 287$) **0.0404**; kerolox exhaust ($\gamma = 1.2$, $R = 378$) **0.0334**.

$$\dot m = 0.0404\frac{p_0A_t}{\sqrt{T_0}}\ \text{(air)}, \qquad \dot m = 0.0334\frac{p_0A_t}{\sqrt{T_0}}\ (\gamma = 1.2,\ R = 378)$$

**Sonic ratios:** $T^*/T_0 = \dfrac{2}{\gamma+1}$; for $\gamma = 1.4$ these are $0.8333$, $p^*/p_0 = 0.5283$, $\rho^*/\rho_0 = 0.6339$; for $\gamma = 1.2$, $0.9091$, $0.5644$, $0.6209$.

*From* [1.2](lessons/01-02-compressible-flow-nozzles.md), [1.3](lessons/01-03-nozzle-operating-regimes.md) *(derivations in [`aerodynamics` 4.1–4.5](../aerodynamics/lessons/04-01-compressibility-sound-speed-energy.md))*

### Nozzle performance

$$\Gamma = \sqrt\gamma\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}}, \qquad c^* = \frac{\sqrt{RT_0}}{\Gamma}$$

$$C_F = \underbrace{\sqrt{\frac{2\gamma^2}{\gamma-1}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\left[1-\left(\frac{p_e}{p_0}\right)^{\frac{\gamma-1}{\gamma}}\right]}}_{C_{F,\rm mom}}+\left(\frac{p_e}{p_0}-\frac{p_a}{p_0}\right)\frac{A_e}{A_t}$$

| $\gamma$ | $\Gamma$ | $C_{F,\max}$ (vacuum, infinite expansion) |
|---|---|---|
| 1.20 | 0.6485 | 2.211 |
| 1.30 | 0.6673 | 1.964 |
| 1.40 | 0.6847 | 1.809 |

**Optimum expansion:** $\partial C_F/\partial(A_e/A_t) = 0 \iff p_e = p_a$. **Separation (Summerfield):** $p_e/p_a\lesssim0.4$. **Divergence loss (conical, half-angle $\alpha_d$):** $\lambda = \tfrac12(1+\cos\alpha_d)$, $0.983$ at $15°$; bell nozzles reach $0.99$.

**Efficiencies:** $\eta_{c^*} = c^*_{\rm meas}/c^*_{\rm theo}$ (0.92–0.99, diagnoses **combustion**); $\eta_{C_F} = C_{F,\rm meas}/C_{F,\rm theo}$ (0.95–0.99, diagnoses the **nozzle**).

*From* [1.4](lessons/01-04-nozzle-performance-cf-cstar.md), [3.4](lessons/03-04-chemical-rockets-liquids-solids.md)

### Air-breathing efficiencies and cycles

$$\eta_{\rm th} = \frac{\tfrac12\dot m_eu_e^2-\tfrac12\dot m_aV_\infty^2}{\dot m_fQ_R}, \qquad \eta_p = \frac{2}{1+u_e/V_\infty}, \qquad \eta_o = \eta_{\rm th}\eta_p = \frac{FV_\infty}{\dot m_fQ_R}$$

$$\eta_{\rm Brayton} = 1-r_p^{-\frac{\gamma-1}{\gamma}}, \qquad r_p = \pi_f\pi_c\tau_r^{\frac{\gamma}{\gamma-1}}\ \text{(ram included)}$$

**Turbojet cycle, station by station** ($\infty\to2\to3\to4\to5\to e$):

| Step | Relation |
|---|---|
| Inlet | $\tau_r = 1+\tfrac{\gamma-1}{2}M_\infty^2$, $T_{02} = T_\infty\tau_r$, $p_{0\infty} = p_\infty\tau_r^{\gamma/(\gamma-1)}$ |
| Compressor | $T_{03} = T_{02}\pi_c^{(\gamma-1)/\gamma}$, $p_{03} = \pi_cp_{0\infty}$ |
| Burner | $f = c_p(T_{04}-T_{03})/Q_R$, $p_{04} = p_{03}$ |
| **Turbine (work match)** | $(1+f)c_p(T_{04}-T_{05}) = c_p(T_{03}-T_{02})$, $p_{05} = p_{04}(T_{05}/T_{04})^{\gamma/(\gamma-1)}$ |
| Nozzle | $T_e = T_{05}(p_\infty/p_{05})^{(\gamma-1)/\gamma}$, $u_e = \sqrt{2c_p(T_{05}-T_e)}$ |

**Turbofan** adds a fan before the compressor and enlarges the work match:

$$\left(1+f\right)c_p\left(T_{04}-T_{05}\right) = c_p\left(T_{03}-T_{021}\right)+\left(1+B\right)c_p\left(T_{021}-T_{02}\right)$$

**Optimum fan pressure ratio (ideal, separate exhausts):** $u_{e,\rm core} = u_{e,\rm fan}$.

**Ideal ramjet** (isentropic inlet and nozzle, $p_e = p_\infty$):

$$M_e = M_\infty, \qquad \frac{u_e}{V_\infty} = \sqrt{\frac{T_{04}}{T_{0\infty}}}, \qquad \frac{F}{\dot m_a} = V_\infty\left(\sqrt{\frac{T_{04}}{T_{0\infty}}}-1\right), \qquad \eta_{\rm th} = 1-\frac{T_\infty}{T_{0\infty}}$$

**Peak specific thrust at $\tau_r = \tau_\lambda^{1/3}$; zero thrust at $\tau_r = \tau_\lambda$** (where $\tau_\lambda = T_{04}/T_\infty$).

**Typical performance:**

| Engine | Specific thrust | TSFC (kg/(N·h)) | $\eta_o$ |
|---|---|---|---|
| Turbojet | 650–1000 m/s | 0.085–0.110 | 0.20–0.26 |
| Low-bypass turbofan ($B = 1$–3) | 300–530 | 0.065–0.080 | 0.27–0.33 |
| High-bypass turbofan ($B = 8$–12) | 130–180 | 0.049–0.055 | 0.40–0.44 |
| Turboprop | — | 0.041–0.046 | 0.25–0.28 |
| Ramjet at $M = 3$ | 870 | 0.17 | 0.43 |

*From* [2.1](lessons/02-01-propulsion-efficiencies-brayton.md), [2.2](lessons/02-02-ideal-ramjet.md), [2.4](lessons/02-04-turbojet-cycle.md), [2.5](lessons/02-05-turbofan-bypass.md), [2.6](lessons/02-06-turboprop-propeller.md)

### Propellers

$$T = 2\rho Av\left(V_\infty+v\right), \qquad u_e = V_\infty+2v, \qquad \dot m = \rho A\left(V_\infty+v\right)$$

$$C_T = \frac{T}{\tfrac12\rho V_\infty^2A}, \qquad \eta_i = \frac{2}{1+\sqrt{1+C_T}}, \qquad \eta_{\rm pr} = \frac{TV_\infty}{P_{\rm shaft}}\approx0.80\text{–}0.88$$

$$\mathrm{PSFC} = \frac{\dot m_f}{P_{\rm shaft}}, \qquad \eta_{\rm th,shaft} = \frac{1}{\mathrm{PSFC}\cdot Q_R}, \qquad \eta_o = \eta_{\rm th,shaft}\eta_{\rm pr}$$

$$\boxed{M_{\rm tip} = \frac{\sqrt{V_\infty^2+\left(\Omega R\right)^2}}{a}}\quad\text{— design limit }0.85\text{–}0.90$$

A modern turboprop: $\mathrm{PSFC}\approx0.27$ kg/(kW·h) $= 7.5\times10^{-8}$ kg/(W·s), $\eta_{\rm th,shaft} = 0.31$, $\eta_o\approx0.26$.

*From* [2.6](lessons/02-06-turboprop-propeller.md)

### Combustion

$$\mathrm{C}_n\mathrm{H}_m+\left(n+\tfrac{m}{4}\right)\left(\mathrm{O}_2+3.76\,\mathrm{N}_2\right)\to n\,\mathrm{CO}_2+\tfrac{m}{2}\,\mathrm{H_2O}+3.76\left(n+\tfrac{m}{4}\right)\mathrm{N}_2$$

$$f_{\rm stoich} = \frac{12.011n+1.008m}{137.3\left(n+\tfrac{m}{4}\right)}, \qquad \Delta T = \frac{fQ_R\eta_b}{\left(1+f\right)c_p}, \qquad f = \frac{c_p\left(T_{04}-T_{03}\right)}{\eta_bQ_R-c_pT_{04}}$$

| Fuel | Formula | $f_{\rm stoich}$ | $Q_R$ (LHV) |
|---|---|---|---|
| Kerosene / Jet-A | $\mathrm{C}_{12}\mathrm{H}_{23}$ | 0.0686 | 43 MJ/kg |
| Octane | $\mathrm{C}_8\mathrm{H}_{18}$ | 0.0666 | 44 MJ/kg |
| Methane | $\mathrm{CH}_4$ | 0.0584 | 50 MJ/kg |
| Hydrogen | $\mathrm{H}_2$ | 0.0294 | 120 MJ/kg |

**Rayleigh limit** — maximum $T_{04}$ from a given burner-entry Mach number ($T_{03} = 830$ K, $\gamma = 1.4$):

| $M_3$ | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 |
|---|---|---|---|---|---|
| $T_0/T_0^*$ | 0.0468 | 0.1736 | 0.3469 | 0.5290 | 0.6914 |
| Max $T_{04}$ | 17,700 K | 4780 K | 2390 K | 1570 K | 1200 K |

**Flame speeds:** laminar $S_L\approx0.4$ m/s, turbulent a few m/s, against a bulk flow of 30–60 m/s — hence flame holders and a residence time of 1–3 ms. **Adiabatic flame temperature:** simple $c_p$ arithmetic is good below 2000 K and progressively optimistic above it, because of **dissociation**.

*From* [2.3](lessons/02-03-combustion-for-propulsion.md)

### Rockets and missions

$$\Delta v = v_e\ln\frac{m_0}{m_f}, \qquad MR = e^{\Delta v/v_e}, \qquad m_p = m_f\left(MR-1\right) = m_0\left(1-\frac{1}{MR}\right)$$

$$\lambda = \frac{1/MR-\varepsilon}{1-\varepsilon}, \qquad \Delta v_{\max,\rm single} = v_e\ln\frac{1}{\varepsilon}, \qquad \lambda_{\rm total} = \prod_i\lambda_i$$

**Equal $\Delta v$ split is optimal for identical stages**; unequal stages give more $\Delta v$ to the better one.

| $\varepsilon$ | 0.15 | 0.10 | 0.06 | 0.03 |
|---|---|---|---|---|
| Max $MR$ | 6.67 | 10.0 | 16.7 | 33.3 |
| Max $\Delta v/v_e$ | 1.897 | 2.303 | 2.813 | 3.507 |

**Vacuum $I_{sp}$ by propellant:**

| System | $I_{sp}$ (s) | Bulk density (kg/m³) |
|---|---|---|
| Cold gas (N₂) | 60–80 | — |
| Monopropellant hydrazine | 220–235 | 1010 |
| Solid (APCP) | 250–290 | 1700–1800 |
| Storable (N₂O₄/MMH) | 310–330 | 1180 |
| Kerolox | 340–360 | 1030 |
| Methalox | 360–380 | 830 |
| Hydrolox | 440–465 | 340 |
| Nuclear thermal (H₂) | 800–900 | 71 |
| Hall thruster | 1500–2500 | — |
| Gridded ion | 3000–4500 | — |

**Mixture ratio:** $c^*\propto\sqrt{T_0/\mathcal{M}}$, so the optimum is **fuel-rich** — LH₂/LOX peaks near $r = 4$ against a stoichiometric 8; real engines run 5.5–6.0 for density.

**Solid motors:** $r = ap_0^{\,n}$, and

$$p_0 = \left(\rho_p\,a\,c^*\,K\right)^{\frac{1}{1-n}}, \qquad K = \frac{A_b}{A_t}, \qquad \frac{dp_0}{p_0} = \frac{1}{1-n}\frac{dK}{K}.$$

**Keep $n<0.5$** — the amplification $1/(1-n)$ is the stability criterion.

**Orbital mechanics used here** ($\mu_\oplus = 3.986\times10^{14}$ m³/s², $R_\oplus = 6378$ km):

$$v_{\rm circ} = \sqrt{\frac{\mu}{r}}, \qquad v^2 = \mu\left(\frac{2}{r}-\frac{1}{a}\right), \qquad \Delta v_{\rm plane} = 2v\sin\frac{i}{2}, \qquad \Delta v_{\rm comb} = \sqrt{v_1^2+v_2^2-2v_1v_2\cos i}$$

**$\Delta v$ budget items:**

| Manoeuvre | $\Delta v$ |
|---|---|
| Surface → LEO (200 km) | 9.3–9.5 km/s |
| LEO circular speed | 7.78 km/s |
| LEO → GTO | 2.45 km/s |
| GTO → GEO, no plane change | 1.48 km/s |
| GTO → GEO with 28.5° combined | 1.84 km/s |
| 28.5° plane change at LEO alone | 3.83 km/s |
| LEO → escape ($C_3 = 0$) | 3.22 km/s |
| LEO → trans-lunar injection | 3.13 km/s |
| Lunar orbit insertion | 0.82–0.90 km/s |
| Lunar descent | 1.87 km/s |
| LEO → Mars transfer injection | 3.61 km/s |
| Mars orbit insertion | 0.9–2.1 km/s |
| GEO station-keeping | 50 m/s per year |
| LEO deorbit | 100–150 m/s |

**Margin:** 8–15% above the deterministic total is standard practice.

*From* [3.1](lessons/03-01-rocket-equation.md), [3.2](lessons/03-02-specific-impulse-rocket-performance.md), [3.3](lessons/03-03-staging-mass-ratio.md), [3.4](lessons/03-04-chemical-rockets-liquids-solids.md), [3.5](lessons/03-05-mission-delta-v-budget.md)

### Advanced propulsion

**Electrostatic acceleration:**

$$v_e = \sqrt{\frac{2qV}{m}} = 1212.3\sqrt{V}\ \mathrm{m/s}\ \text{(singly charged xenon)}, \qquad F = \frac{2\eta P}{v_e}, \qquad \frac{P}{F} = \frac{g_0I_{sp}}{2\eta}$$

| Thruster | $I_{sp}$ (s) | $\eta$ |
|---|---|---|
| Resistojet | 300 | 0.8 |
| Arcjet | 500–700 | 0.35 |
| Hall effect | 1500–2500 | 0.45–0.60 |
| Gridded ion | 3000–4500 | 0.60–0.75 |
| MPD | 2000–5000 | 0.3–0.5 |

**Nuclear thermal:** $P_{\rm th} = \dot mc_p(T_0-T_{\rm in})$; $T_0\approx2700$–$2900$ K, limited by **fuel elements**, not by chemistry — and it wins on molecular weight, not temperature.

**Nuclear electric:** waste heat rejected by radiation only, $P_{\rm reject} = \varepsilon\sigma AT_{\rm rad}^4$; the radiator usually outmasses the reactor.

**Energy-density ceiling:** $v_e\leq\sqrt{2e}$ with $e$ the source's specific energy — chemical $1.2\times10^7$ J/kg gives $I_{sp}\leq500$ s.

**Scramjet:** slow the flow to $M_2\approx M_\infty/3$ rather than to subsonic, so

$$T_2 = \frac{T_{0\infty}}{1+\frac{\gamma-1}{2}M_2^2}\to9T_\infty\ \text{as }M_\infty\to\infty,$$

leaving headroom to $M = 12$. Residence time $\tau = L/V_2\approx0.8$ ms, which only **hydrogen** (ignition delay 0.1–0.5 ms) can use.

**Flight-regime bands:** turboprop $M<0.65$ · turbofan $M<0.9$ · turbojet $M<3$ · ramjet $3<M<5$ · scramjet $5<M<12$ · rocket everywhere.

*From* [4.1](lessons/04-01-electric-propulsion.md), [4.2](lessons/04-02-nuclear-thermal-advanced.md), [4.3](lessons/04-03-hypersonic-airbreathing-scramjet.md), [4.4](lessons/04-04-propulsion-design-space.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Control-volume momentum balance for a fluid | [`fluid-dynamics` 1.5](../fluid-dynamics/lessons/01-05-euler-equation.md) |
| Continuity and the divergence theorem in fluid form | [`fluid-dynamics` 1.3](../fluid-dynamics/lessons/01-03-continuity-equation.md) |
| Speed of sound, Mach number, stagnation relations | [`aerodynamics` 4.1](../aerodynamics/lessons/04-01-compressibility-sound-speed-energy.md), [4.2](../aerodynamics/lessons/04-02-isentropic-stagnation-relations.md) |
| Normal and oblique shocks, expansion fans | [`aerodynamics` 4.3](../aerodynamics/lessons/04-03-normal-shock-waves.md), [4.4](../aerodynamics/lessons/04-04-oblique-shocks-prandtl-meyer.md) |
| Area–Mach relation, choking, nozzle regimes | [`aerodynamics` 4.5](../aerodynamics/lessons/04-05-quasi-1d-nozzle-flow.md) |
| Ideal Brayton cycle and its efficiency | [`engineering-thermodynamics` 4.3](../engineering-thermodynamics/lessons/04-03-brayton-gas-turbine-cycle.md) |
| Enthalpy, entropy, isentropic relations, $\gamma = c_p/c_v$ | [`engineering-thermodynamics`](../engineering-thermodynamics/syllabus.md) |
| Stoichiometry, heating values, adiabatic flame temperature | [`general-chemistry`](../general-chemistry/syllabus.md), [`engineering-thermodynamics`](../engineering-thermodynamics/syllabus.md) |
| Boundary layers, separation, and skin friction | [`aerodynamics` 3.1–3.3](../aerodynamics/lessons/03-01-boundary-layers-momentum-integral.md) |
| Orbital elements, vis-viva, Hohmann transfers | [`orbital-mechanics`](../orbital-mechanics/syllabus.md) |
| Radiative heat transfer and the $T^4$ law | [`heat-transfer`](../heat-transfer/syllabus.md) |
| Reactor criticality, control, and fuel-element limits | [`reactor-physics`](../reactor-physics/syllabus.md), [`intro-nuclear-engineering`](../intro-nuclear-engineering/syllabus.md) |
| Ion motion in electric and magnetic fields; space charge | [`em-refresher`](../em-refresher/syllabus.md), [`plasma-physics`](../plasma-physics/syllabus.md) |

## Pitfalls

### Thrust and nozzles

- **You might drop the pressure term.** It is 18% of a first-stage rocket's thrust between sea level and vacuum. *([1.1](lessons/01-01-thrust-momentum-equation.md))*
- **You might add ram drag to a rocket.** A rocket ingests nothing; its thrust is independent of flight speed. *([1.1](lessons/01-01-thrust-momentum-equation.md))*
- **You might confuse $u_e$ with $v_e$.** $u_e$ is the gas speed; $v_e$ absorbs the pressure term. *([1.1](lessons/01-01-thrust-momentum-equation.md))*
- **You might use $\gamma = 1.4$ for rocket exhaust.** It is nearer 1.20, and the choked-flow coefficient becomes 0.0334. *([1.2](lessons/01-02-compressible-flow-nozzles.md))*
- **You might use $R = 287$ for anything but air.** $R = R_u/\mathcal{M}$, and $\mathcal{M}$ is the *exhaust's*. *([1.2](lessons/01-02-compressible-flow-nozzles.md))*
- **You might take the wrong root of the area–Mach relation.** Geometry offers two; the back pressure picks one. *([1.2](lessons/01-02-compressible-flow-nozzles.md))*
- **You might confuse $A^*$ with $A_t$.** They differ once a shock intervenes: $A^*$ grows in proportion to the $p_0$ loss. *([1.2](lessons/01-02-compressible-flow-nozzles.md))*
- **You might think over-expansion always means separation.** Only below $p_e/p_a\approx0.4$. *([1.3](lessons/01-03-nozzle-operating-regimes.md))*
- **You might expect thrust to vary nonlinearly with altitude.** $F$ is exactly linear in $p_a$; it is $p_a(h)$ that is exponential. *([1.3](lessons/01-03-nozzle-operating-regimes.md))*
- **You might expect chamber pressure to raise vacuum $I_{sp}$.** At fixed area ratio it does not — only sea-level $I_{sp}$ and engine size improve. *([1.4](lessons/01-04-nozzle-performance-cf-cstar.md), [3.4](lessons/03-04-chemical-rockets-liquids-solids.md))*
- **You might treat $c^*$ as a physical velocity.** It is $p_0A_t/\dot m$, a figure of merit. *([1.4](lessons/01-04-nozzle-performance-cf-cstar.md))*

### Air-breathing engines

- **You might read a low specific thrust as poor performance.** It is the symptom of high propulsive efficiency. *([2.1](lessons/02-01-propulsion-efficiencies-brayton.md), [2.5](lessons/02-05-turbofan-bypass.md))*
- **You might maximize $\eta_p$.** Its maximum is at zero thrust. Maximize $\eta_o$ or minimize TSFC. *([2.1](lessons/02-01-propulsion-efficiencies-brayton.md))*
- **You might compare TSFC across flight speeds.** $\mathrm{TSFC} = V_\infty/(\eta_oQ_R)$ rises with speed at constant efficiency. *([2.1](lessons/02-01-propulsion-efficiencies-brayton.md), [2.6](lessons/02-06-turboprop-propeller.md))*
- **You might use the compressor ratio alone in the Brayton formula.** Ram compression is part of the cycle — a factor of 1.6 at $M = 0.85$, 7.8 at $M = 2$. *([2.1](lessons/02-01-propulsion-efficiencies-brayton.md), [2.2](lessons/02-02-ideal-ramjet.md))*
- **You might think a ramjet can start from rest.** Its specific thrust is exactly zero at $M = 0$. *([2.2](lessons/02-02-ideal-ramjet.md))*
- **You might expect maximum ramjet thrust and efficiency at the same Mach number.** Specific thrust peaks near $M = 2.5$, $I_{sp}$ near 3.5, $\eta_o$ keeps rising past 6. *([2.2](lessons/02-02-ideal-ramjet.md))*
- **You might use cold-air $c_p$ in the combustor.** Use $\approx1150$ J/(kg·K) for hot products. *([2.3](lessons/02-03-combustion-for-propulsion.md))*
- **You might ignore Rayleigh choking.** It is a hard gas-dynamic limit and it is why every combustor has a diffuser in front of it. *([2.3](lessons/02-03-combustion-for-propulsion.md))*
- **You might think a gas turbine burns lean throughout.** It burns near stoichiometric in the primary zone and dilutes afterwards. *([2.3](lessons/02-03-combustion-for-propulsion.md))*
- **You might forget the work match.** The turbine's drop is set by the compressor's rise (plus the fan's, times $1+B$). *([2.4](lessons/02-04-turbojet-cycle.md), [2.5](lessons/02-05-turbofan-bypass.md))*
- **You might drop the $(1+B)$ in a turbofan's fan work.** It is what makes a turbofan a turbofan. *([2.5](lessons/02-05-turbofan-bypass.md))*
- **You might compute a turbofan's TSFC per unit core flow.** The fuel is $f\dot m_{\rm total}/(1+B)$. *([2.5](lessons/02-05-turbofan-bypass.md))*
- **You might compute a propeller's tip Mach from rotation alone.** It is the *vector sum* with flight speed. *([2.6](lessons/02-06-turboprop-propeller.md))*
- **You might treat momentum theory as the real propeller efficiency.** It is an upper bound; real propellers reach 0.80–0.88. *([2.6](lessons/02-06-turboprop-propeller.md))*

### Rockets and missions

- **You might read the "seconds" of $I_{sp}$ as a duration.** They come from dividing by weight. *([3.1](lessons/03-01-rocket-equation.md), [3.2](lessons/03-02-specific-impulse-rocket-performance.md))*
- **You might use local gravity in $g_0$.** It is a defined constant everywhere. *([3.2](lessons/03-02-specific-impulse-rocket-performance.md))*
- **You might think $\Delta v$ depends on thrust.** It does not — only through the losses, via burn time. *([3.1](lessons/03-01-rocket-equation.md))*
- **You might apply the ideal rocket equation to a launch.** Add 1.5–1.8 km/s of gravity, drag, and steering losses. *([3.1](lessons/03-01-rocket-equation.md))*
- **You might read a negative payload fraction as "a small payload".** It means the architecture is impossible. *([3.1](lessons/03-01-rocket-equation.md))*
- **You might expect stoichiometric to be the best mixture ratio.** It maximizes both $T_0$ and $\mathcal{M}$, and the second wins. *([3.2](lessons/03-02-specific-impulse-rocket-performance.md))*
- **You might ignore propellant density.** For a launch vehicle it is nearly as important as $I_{sp}$. *([3.2](lessons/03-02-specific-impulse-rocket-performance.md), [3.4](lessons/03-04-chemical-rockets-liquids-solids.md))*
- **You might add payload fractions.** They multiply; the $\Delta v$'s add. *([3.3](lessons/03-03-staging-mass-ratio.md))*
- **You might assume an equal $\Delta v$ split is always optimal.** Only for identical stages. *([3.3](lessons/03-03-staging-mass-ratio.md))*
- **You might treat parallel boosters as serial stages.** They buy thrust-to-weight, not mass ratio. *([3.3](lessons/03-03-staging-mass-ratio.md))*
- **You might assume a solid's thrust is constant.** It follows the burning area, which follows the grain geometry. *([3.4](lessons/03-04-chemical-rockets-liquids-solids.md))*
- **You might ignore the burn-rate exponent.** $n$ near 1 makes a motor unstable; it is a selection criterion. *([3.4](lessons/03-04-chemical-rockets-liquids-solids.md))*
- **You might add a plane change arithmetically.** Combine vectors with the cosine rule, and do plane changes where you are slowest. *([3.5](lessons/03-05-mission-delta-v-budget.md))*
- **You might carry no margin.** Every real mission carries 8–15%, and a 10% margin costs 13–14% more propellant. *([3.5](lessons/03-05-mission-delta-v-budget.md))*
- **You might quote a $\Delta v$ without saying where from.** "3.6 km/s to Mars" means from a 200 km LEO. *([3.5](lessons/03-05-mission-delta-v-budget.md))*

### Advanced propulsion

- **You might think higher $I_{sp}$ is always better.** At fixed power it costs thrust one-for-one, and time usually binds first. *([4.1](lessons/04-01-electric-propulsion.md), [4.4](lessons/04-04-propulsion-design-space.md))*
- **You might forget the power plant and radiator.** Electric propulsion trades propellant mass for power-plant mass and time. *([4.1](lessons/04-01-electric-propulsion.md), [4.2](lessons/04-02-nuclear-thermal-advanced.md))*
- **You might use solar-electric far from the Sun.** Power falls as $1/r^2$. *([4.1](lessons/04-01-electric-propulsion.md))*
- **You might expect a nuclear rocket to run hotter than a chemical one.** It runs *cooler* and wins on molecular weight. *([4.2](lessons/04-02-nuclear-thermal-advanced.md))*
- **You might confuse nuclear-thermal with nuclear-electric.** 850 s at 100 kN versus 5000 s at 30 N. *([4.2](lessons/04-02-nuclear-thermal-advanced.md))*
- **You might think a scramjet burns at flight Mach number.** It burns at $M\approx2$–3. *([4.3](lessons/04-03-hypersonic-airbreathing-scramjet.md))*
- **You might use hydrocarbon ignition delays in a scramjet.** They are 10–100 times too long. *([4.3](lessons/04-03-hypersonic-airbreathing-scramjet.md))*
- **You might quote a scramjet's gross thrust.** Net is gross minus vehicle drag, and the two are comparable. *([4.3](lessons/04-03-hypersonic-airbreathing-scramjet.md))*
- **You might compare an air-breather's $I_{sp}$ with a rocket's.** The air-breather counts fuel only. *([2.2](lessons/02-02-ideal-ramjet.md), [4.4](lessons/04-04-propulsion-design-space.md))*
- **You might treat $T/W>1$ as negotiable.** It is the one hard gate: only chemical rockets pass it. *([4.4](lessons/04-04-propulsion-design-space.md))*
- **You might expect a technology gap to yield to engineering.** The chemical $I_{sp}$ ceiling is bond energy; the thermal-rocket ceiling is a melting point. *([4.4](lessons/04-04-propulsion-design-space.md))*

---

*This card covers all 19 lessons of the course. If you find yourself needing a fact that is used in a lesson but is not on this card, that is a bug — flag it.*

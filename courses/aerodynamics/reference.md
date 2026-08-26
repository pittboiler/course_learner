# Aerodynamics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Aerodynamics is the business of predicting the force air exerts on a body, and of explaining where it comes from. Four toolkits do the work: potential flow and circulation for lift, thin-airfoil and lifting-line theory for real wings, boundary layers for drag and stall, and compressible gas dynamics above about Mach 0.3. This card holds the conventions, the closed-form results, and the tables that the lessons use — so you never have to remember whether the lift slope is per radian or per degree.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $V_\infty$ | free-stream speed, far ahead of the body | [1.1](lessons/01-01-forces-moments-coefficients.md) |
| $q_\infty$ | dynamic pressure $\tfrac12\rho_\infty V_\infty^2$ — the natural pressure scale of a flow | [1.1](lessons/01-01-forces-moments-coefficients.md) |
| $c$, $S$, $b$ | chord, wing planform area, span | [1.1](lessons/01-01-forces-moments-coefficients.md) |
| $C_L,C_D,C_M$ | 3-D (whole-wing) force and moment coefficients | [1.1](lessons/01-01-forces-moments-coefficients.md) |
| $c_l,c_d,c_m$ | 2-D (section, per unit span) coefficients — lowercase always means 2-D | [1.1](lessons/01-01-forces-moments-coefficients.md) |
| $N$, $A$ | normal and axial force — body axes, perpendicular and parallel to the chord | [1.1](lessons/01-01-forces-moments-coefficients.md) |
| $\alpha$ | angle of attack, between the chord line and the free stream | [1.1](lessons/01-01-forces-moments-coefficients.md) |
| $\phi$, $\psi$ | velocity potential and stream function | [1.2](lessons/01-02-potential-flow-elementary-flows.md) |
| $\Lambda$ (in Module 1) | source/sink strength, m²/s | [1.2](lessons/01-02-potential-flow-elementary-flows.md) |
| $\kappa$ | doublet strength | [1.2](lessons/01-02-potential-flow-elementary-flows.md) |
| $\Gamma$ | circulation; **positive clockwise** in this course, which gives upward lift on a left-to-right stream | [1.2](lessons/01-02-potential-flow-elementary-flows.md) |
| $C_p$ | pressure coefficient, $(p-p_\infty)/q_\infty$ | [1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md) |
| $z_c(x)$, $z_t(x)$ | camber line and thickness distribution | [2.1](lessons/02-01-airfoil-geometry-kutta-condition.md) |
| $\gamma(x)$ | vortex-sheet strength per unit length — units of **velocity**, not circulation | [2.2](lessons/02-02-vortex-sheet-thin-airfoil-equation.md) |
| $\theta,\theta_0$ (Module 2) | Glauert angle variables, $x = \tfrac{c}{2}(1-\cos\theta)$ | [2.2](lessons/02-02-vortex-sheet-thin-airfoil-equation.md) |
| $A_0,A_n$ | Glauert/Fourier coefficients — chordwise in [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md), spanwise in [2.6](lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md) | [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md) |
| $a_0$, $a$ (Module 2) | 2-D and finite-wing lift-curve slopes, per radian | [2.3](lessons/02-03-symmetric-thin-airfoil.md) |
| $\alpha_{L=0}$ | zero-lift angle of attack | [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md) |
| $x_{cp}$, $x_{ac}$ | centre of pressure (moves) and aerodynamic centre (does not) | [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md) |
| $w$, $\alpha_i$, $\alpha_{\rm eff}$ | downwash, induced angle $w/V_\infty$, effective angle $\alpha-\alpha_i$ | [2.5](lessons/02-05-finite-wings-downwash-lifting-line.md) |
| $AR$ | aspect ratio $b^2/S$ | [2.5](lessons/02-05-finite-wings-downwash-lifting-line.md) |
| $e$, $e_0$ | span efficiency (lift distribution only) and Oswald efficiency (whole polar) | [2.6](lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md), [3.3](lessons/03-03-separation-stall-drag-polar.md) |
| $\delta$, $\delta^*$, $\theta$ (Module 3) | boundary-layer 99% thickness, displacement thickness, momentum thickness | [3.1](lessons/03-01-boundary-layers-momentum-integral.md) |
| $H$ | shape factor $\delta^*/\theta$ — the health indicator of a boundary layer | [3.1](lessons/03-01-boundary-layers-momentum-integral.md) |
| $c_f$, $C_f$ | local and plate-averaged skin-friction coefficients | [3.1](lessons/03-01-boundary-layers-momentum-integral.md) |
| $\tau_w$ | wall shear stress | [3.1](lessons/03-01-boundary-layers-momentum-integral.md) |
| $\nu$ | kinematic viscosity; **this course uses $\nu = 1.5\times10^{-5}$ m²/s for air** | [3.1](lessons/03-01-boundary-layers-momentum-integral.md) |
| $k_{\rm adm}$ | admissible roughness height — below it, a surface is hydraulically smooth | [3.2](lessons/03-02-transition-turbulent-boundary-layers.md) |
| $C_{D,0}$ | profile (zero-lift) drag coefficient: friction plus form | [3.3](lessons/03-03-separation-stall-drag-polar.md) |
| $M$, $a$ | Mach number $V/a$ and speed of sound | [4.1](lessons/04-01-compressibility-sound-speed-energy.md) |
| $\gamma$ (Module 4), $R$ | ratio of specific heats (1.4 for air) and gas constant (287 J/kg·K) | [4.1](lessons/04-01-compressibility-sound-speed-energy.md) |
| $T_0,p_0,\rho_0$ | stagnation (total) properties | [4.1](lessons/04-01-compressibility-sound-speed-energy.md), [4.2](lessons/04-02-isentropic-stagnation-relations.md) |
| $T^*,p^*,\rho^*,a^*,A^*$ | sonic (critical) reference conditions — the values at $M = 1$ with the same $p_0$, $T_0$ | [4.2](lessons/04-02-isentropic-stagnation-relations.md) |
| $\pi_d$ | inlet pressure recovery $p_{0,\rm out}/p_{0,\rm in}$ | [4.3](lessons/04-03-normal-shock-waves.md) |
| $\beta$ (shock), $\theta$ (Module 4) | oblique-shock wave angle and flow deflection angle | [4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md) |
| $\mu$ | Mach angle $\arcsin(1/M)$ | [4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md) |
| $\nu(M)$ (Module 4) | Prandtl–Meyer function — how far a flow has turned since $M = 1$ | [4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md) |
| $M_{cr}$, $M_{dd}$ | critical and drag-divergence Mach numbers | [4.6](lessons/04-06-subsonic-compressibility-transonic.md) |
| $\beta$ (Prandtl–Glauert) | $\sqrt{1-M_\infty^2}$ subsonically, $\sqrt{M_\infty^2-1}$ supersonically | [4.6](lessons/04-06-subsonic-compressibility-transonic.md), [4.7](lessons/04-07-supersonic-airfoils-wave-drag-sweep.md) |

**Symbol collisions worth flagging:** $\Lambda$ is a source strength in Module 1 and a sweep angle in Module 4; $\theta$ is a polar angle in Module 1, a Glauert variable in Module 2, a momentum thickness in Module 3, and a flow-deflection angle in Module 4; $\gamma$ is a vortex-sheet strength in Module 2 and the specific-heat ratio in Module 4; $\beta$ is a shock angle and a compressibility factor. Context disambiguates, and the tables below always say which.

## Definitions

### Force and moment coefficients

Every aerodynamic force divided by dynamic pressure times a reference area — which strips out speed, size, and density and leaves a number that depends only on shape, attitude, Reynolds number and Mach number.

$$C_L = \frac{L}{q_\infty S}, \qquad C_D = \frac{D}{q_\infty S}, \qquad C_M = \frac{M}{q_\infty Sc}, \qquad q_\infty = \tfrac12\rho_\infty V_\infty^2$$

Lowercase $c_l,c_d,c_m$ are the 2-D versions, with $S\to c$ and $Sc\to c^2$ (forces per unit span).

*Introduced:* [1.1](lessons/01-01-forces-moments-coefficients.md)

### Pressure coefficient

The local pressure difference from free stream, in units of dynamic pressure. In incompressible potential flow it depends only on the local speed ratio, so one solved flow gives a universal curve.

$$C_p = \frac{p-p_\infty}{q_\infty} = 1-\left(\frac{V}{V_\infty}\right)^2$$

$C_p = +1$ exactly at a stagnation point, $0$ where the flow has recovered free-stream speed, negative wherever the flow is faster than free stream. Bounded above by $+1$; unbounded below.

*Introduced:* [1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md)

### Potential flow

An inviscid, incompressible, irrotational flow, in which the velocity is the gradient of a scalar potential and the governing equation is linear — so solutions superpose.

$$\mathbf{u} = \nabla\phi, \qquad \nabla^2\phi = 0$$

*Introduced:* [1.2](lessons/01-02-potential-flow-elementary-flows.md) *(built in [`fluid-dynamics` 2.4](../fluid-dynamics/lessons/02-04-irrotational-flow-velocity-potential.md))*

### Circulation

The line integral of velocity around a closed curve. It is the single quantity that determines lift in two dimensions, whatever the body's shape.

$$\Gamma = \oint_C\mathbf{u}\cdot d\mathbf{s}$$

**Sign convention in this course: $\Gamma>0$ is clockwise**, which produces upward lift on a left-to-right free stream. (Mathematics texts usually take counterclockwise positive.)

*Introduced:* [1.2](lessons/01-02-potential-flow-elementary-flows.md)

### Kutta–Joukowski theorem

Lift per unit span is density times free-stream speed times circulation — for any two-dimensional shape, and with exactly zero drag.

$$L' = \rho_\infty V_\infty\Gamma, \qquad D' = 0$$

*Introduced:* [1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md)

### d'Alembert's paradox

Steady inviscid incompressible flow past a closed two-dimensional body produces zero drag. It is exact within the theory and totally wrong in reality; the resolution is the boundary layer.

*Introduced:* [1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md), resolved in [3.3](lessons/03-03-separation-stall-drag-polar.md)

### Kutta condition

The flow cannot turn a sharp trailing edge at infinite speed, so it must leave smoothly — and only one circulation permits that. This is the selection rule that makes airfoil theory predictive.

$$\text{(i) the flow leaves the trailing edge smoothly} \iff \text{(ii) the velocity there is finite} \iff \text{(iii) } \gamma(\text{TE}) = 0$$

*Introduced:* [2.1](lessons/02-01-airfoil-geometry-kutta-condition.md)

### Kelvin's circulation theorem

The circulation around a material circuit in an inviscid barotropic flow never changes — so a wing that acquires bound circulation must shed an equal and opposite starting vortex.

$$\frac{D\Gamma}{Dt} = 0 \quad\Longrightarrow\quad \Gamma_{\rm bound}+\Gamma_{\rm starting} = 0$$

*Introduced:* [2.1](lessons/02-01-airfoil-geometry-kutta-condition.md) *(proved in [`fluid-dynamics` 2.3](../fluid-dynamics/lessons/02-03-kelvin-circulation-theorem.md))*

### Vortex sheet

A continuous line distribution of vorticity of strength $\gamma$ per unit length. The tangential velocity jumps across it by exactly $\gamma$, so a vortex sheet is a pressure difference wearing different notation.

$$\Gamma = \int\gamma\,ds, \qquad \gamma = u_{\rm upper}-u_{\rm lower}, \qquad \Delta p = \rho_\infty V_\infty\gamma$$

*Introduced:* [2.2](lessons/02-02-vortex-sheet-thin-airfoil-equation.md)

### Aerodynamic centre

The chordwise point about which the pitching-moment coefficient does not change with angle of attack. Thin-airfoil theory puts it at the quarter chord for every camber line; supersonically it moves to mid-chord.

$$\frac{dc_{m,ac}}{d\alpha} = 0 \quad\Longrightarrow\quad \frac{x_{ac}}{c} = \frac14\ (M<1), \qquad \frac12\ (M>1)$$

*Introduced:* [2.3](lessons/02-03-symmetric-thin-airfoil.md), [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md), [4.7](lessons/04-07-supersonic-airfoils-wave-drag-sweep.md)

### Centre of pressure

The point at which the resultant aerodynamic force acts. It is a derived quantity, it moves with lift, and it is singular at zero lift — which is why aerodynamics quotes the aerodynamic centre instead.

$$\frac{x_{cp}}{c} = \frac14-\frac{c_{m,c/4}}{c_l}$$

*Introduced:* [2.3](lessons/02-03-symmetric-thin-airfoil.md), [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md)

### Helmholtz's vortex theorems

(i) A vortex filament's strength is constant along its length. (ii) A filament cannot end in the fluid — it must close, reach a boundary, or extend to infinity. (iii) Fluid initially irrotational stays irrotational.

Theorem (ii) is $\nabla\cdot\boldsymbol\omega = 0$, and it is why a finite wing must trail vortices.

*Introduced:* [2.5](lessons/02-05-finite-wings-downwash-lifting-line.md)

### Induced drag

The component of lift that got tilted backwards by the wing's own downwash. It is entirely inviscid, exists only for a finite span, and is the price of making lift with an object of finite size.

$$D_i' = L'\sin\alpha_i\approx\rho_\infty V_\infty\Gamma\,\alpha_i, \qquad \alpha_i = \frac{w}{V_\infty}$$

*Introduced:* [2.5](lessons/02-05-finite-wings-downwash-lifting-line.md), [2.6](lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md)

### Displacement and momentum thickness

Two integral measures of what a boundary layer costs. $\delta^*$ is how much the body appears to have swollen as far as the outer flow is concerned; $\theta$ is the momentum the wall has stolen — and it *is* the drag.

$$\delta^* = \int_0^\infty\left(1-\frac{u}{U}\right)dy, \qquad \theta = \int_0^\infty\frac{u}{U}\left(1-\frac{u}{U}\right)dy, \qquad H = \frac{\delta^*}{\theta}$$

$$D' = \rho_\infty U^2\theta(L)\quad\text{(exact, one side, per unit width)}$$

*Introduced:* [3.1](lessons/03-01-boundary-layers-momentum-integral.md)

### Separation

The point at which the wall shear vanishes and the flow lifts off the surface. Everything downstream is a wake at roughly constant pressure, so the pressure recovery inviscid theory promised never arrives.

$$\left.\frac{\partial u}{\partial y}\right|_w = 0 \iff \tau_w = 0$$

*Introduced:* [3.3](lessons/03-03-separation-stall-drag-polar.md) *(reloaded from [`fluid-dynamics` 3.5](../fluid-dynamics/lessons/03-05-separation-drag.md))*

### Drag polar

The complete low-speed drag model of an aircraft: a constant profile term plus a term quadratic in lift. Range, endurance, climb, and best-glide speed all follow from it.

$$C_D = C_{D,0}+\frac{C_L^2}{\pi e_0AR}$$

Valid only for attached flow, below $M_{cr}$, and up to $C_{L,\max}$.

*Introduced:* [3.3](lessons/03-03-separation-stall-drag-polar.md)

### Stagnation (total) properties

The conditions a moving fluid would have if brought to rest isentropically. $T_0$ is protected by the first law and survives shocks; $p_0$ is protected only by reversibility and does not.

$$\frac{T_0}{T} = 1+\frac{\gamma-1}{2}M^2, \qquad \frac{p_0}{p} = \left(\frac{T_0}{T}\right)^{\frac{\gamma}{\gamma-1}}, \qquad \frac{\rho_0}{\rho} = \left(\frac{T_0}{T}\right)^{\frac{1}{\gamma-1}}$$

*Introduced:* [4.1](lessons/04-01-compressibility-sound-speed-energy.md), [4.2](lessons/04-02-isentropic-stagnation-relations.md)

### Choking

Once a throat reaches $M = 1$, no downstream change can propagate upstream, so the mass flow is fixed by $p_0$, $T_0$, and the throat area alone.

$$\dot m_{\max} = 0.0404\,\frac{p_0A^*}{\sqrt{T_0}}\quad\text{(SI, air)}$$

*Introduced:* [4.2](lessons/04-02-isentropic-stagnation-relations.md), [4.5](lessons/04-05-quasi-1d-nozzle-flow.md)

### Shock wave

A discontinuity across which supersonic flow becomes subsonic. Mass, momentum, and energy fix every jump from $M_1$ alone; the second law forbids the expansion shock the algebra would otherwise allow.

$$T_{0,2} = T_{0,1}, \qquad \frac{p_{0,2}}{p_{0,1}} = e^{-\Delta s/R}<1$$

*Introduced:* [4.3](lessons/04-03-normal-shock-waves.md), tilted in [4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md)

### Prandtl–Meyer expansion

A supersonic turn away from the flow. Each successive wave is slower than the last, so the waves spread into a fan rather than coalescing — and the turn is exactly isentropic.

$$\nu\left(M_2\right) = \nu\left(M_1\right)+\theta, \qquad p_{0,2} = p_{0,1}$$

*Introduced:* [4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md)

### Critical Mach number

The flight Mach number at which the flow somewhere on the body first reaches $M = 1$. Drag divergence follows 0.05–0.10 later, when the resulting supersonic pocket's terminating shock becomes strong enough to matter.

$$\frac{C_{p,0,\min}}{\sqrt{1-M_{cr}^2}} = C_{p,\rm crit}\left(M_{cr}\right)$$

*Introduced:* [4.6](lessons/04-06-subsonic-compressibility-transonic.md)

### Wave drag

Drag that exists in a perfectly inviscid fluid, on a body of zero thickness, at zero lift. It is the entropy generated by the body's shocks, cashed out as force — and it has no subsonic counterpart because supersonic flow has no leading-edge suction.

$$c_{d,w} = \frac{4}{\sqrt{M_\infty^2-1}}\left[\alpha^2+\overline{\left(\frac{dz_c}{dx}\right)^2}+\overline{\left(\frac{dz_t}{dx}\right)^2}\right]$$

*Introduced:* [4.7](lessons/04-07-supersonic-airfoils-wave-drag-sweep.md)

## Formulas and rules

### Standard atmosphere and air properties

| Quantity | Sea level | 11 km (tropopause) |
|---|---|---|
| $T$ | $288.15$ K | $216.65$ K |
| $p$ | $101{,}325$ Pa | $22{,}632$ Pa |
| $\rho$ | $1.225$ kg/m³ | $0.3639$ kg/m³ |
| $a = \sqrt{\gamma RT}$ | $340.3$ m/s | $295.0$ m/s |
| $\nu$ | $1.46\times10^{-5}$ m²/s | $3.9\times10^{-5}$ m²/s |

**This course uses $\nu = 1.5\times10^{-5}$ m²/s for sea-level air throughout**, matching [`fluid-dynamics` 3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md). Also $\gamma = 1.4$, $R = 287$ J/(kg·K), $c_p = 1004.5$ J/(kg·K).

*From* [1.1](lessons/01-01-forces-moments-coefficients.md), [4.1](lessons/04-01-compressibility-sound-speed-energy.md)

### Coefficient and axis conversions

| Want | Formula |
|---|---|
| Dynamic pressure | $q_\infty = \tfrac12\rho_\infty V_\infty^2 = \tfrac12\gamma p_\infty M_\infty^2$ |
| Body → wind axes | $L = N\cos\alpha-A\sin\alpha$, $D = N\sin\alpha+A\cos\alpha$ |
| Moment transfer | $c_{m,x} = c_{m,LE}+\dfrac{x}{c}c_l$ |
| Centre of pressure | $\dfrac{x_{cp}}{c} = -\dfrac{c_{m,LE}}{c_l} = \dfrac14-\dfrac{c_{m,c/4}}{c_l}$ |
| Circulation from $c_l$ | $\Gamma = \tfrac12V_\infty c\,c_l$ |
| Lift from a $C_p$ plot | $c_n = \dfrac{1}{c}\displaystyle\int_0^c\left(C_{p,l}-C_{p,u}\right)dx$, and $c_l\approx c_n$ at small $\alpha$ |
| Stall speed | $V_{\rm stall} = \sqrt{\dfrac{2W}{\rho_\infty S\,C_{L,\max}}}$ |

*From* [1.1](lessons/01-01-forces-moments-coefficients.md), [1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md), [2.1](lessons/02-01-airfoil-geometry-kutta-condition.md), [3.3](lessons/03-03-separation-stall-drag-polar.md)

### The elementary-flow kit

| Flow | $\phi$ | $\psi$ | Velocity |
|---|---|---|---|
| Uniform stream | $V_\infty x$ | $V_\infty y$ | $(V_\infty,\,0)$ |
| Source (strength $\Lambda$) | $\dfrac{\Lambda}{2\pi}\ln r$ | $\dfrac{\Lambda}{2\pi}\theta$ | $V_r = \dfrac{\Lambda}{2\pi r}$, $V_\theta = 0$ |
| Doublet (strength $\kappa$) | $-\dfrac{\kappa\cos\theta}{r}$ | $-\dfrac{\kappa\sin\theta}{r}$ | $V_r = -\dfrac{\kappa\cos\theta}{r^2}$, $V_\theta = -\dfrac{\kappa\sin\theta}{r^2}$ |
| Vortex (strength $\Gamma$, clockwise) | $-\dfrac{\Gamma}{2\pi}\theta$ | $\dfrac{\Gamma}{2\pi}\ln r$ | $V_r = 0$, $V_\theta = -\dfrac{\Gamma}{2\pi r}$ |

Superpose freely — Laplace's equation is linear.

*From* [1.2](lessons/01-02-potential-flow-elementary-flows.md)

### Flow past a cylinder

| Quantity | Non-lifting | With circulation $\Gamma$ |
|---|---|---|
| Surface speed | $\left|2V_\infty\sin\theta\right|$ | $\left|2V_\infty\sin\theta+\dfrac{\Gamma}{2\pi R}\right|$ |
| $C_p$ | $1-4\sin^2\theta$ | $1-\left(2\sin\theta+\dfrac{\Gamma}{2\pi RV_\infty}\right)^2$ |
| Stagnation points | $\theta = 0°,180°$ | $\sin\theta_s = -\dfrac{\Gamma}{4\pi V_\infty R}$ |
| Lift per span | 0 | $\rho_\infty V_\infty\Gamma$ |
| Drag per span | 0 | 0 |

Minimum $C_p$ on a non-lifting circular cylinder is exactly $-3$, at $\theta = 90°$. The two stagnation points merge at the bottom when $\Gamma = \Gamma_{\rm merge} = 4\pi V_\infty R$, giving $c_l = 4\pi$ on the diameter as chord.

*From* [1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md) *(flow field built in [`fluid-dynamics` 2.6](../fluid-dynamics/lessons/02-06-flow-past-cylinder-lift.md))*

### NACA four-digit sections

**NACA $MPXX$**: maximum camber $M$% of chord, at $P$ tenths of chord, thickness $XX$% of chord. With $m = M/100$, $p = P/10$, $\xi = x/c$:

$$\frac{z_c}{c} = \begin{cases}\dfrac{m}{p^2}\left(2p\xi-\xi^2\right), & \xi\leq p,\\[1.6ex] \dfrac{m}{(1-p)^2}\left(1-2p+2p\xi-\xi^2\right), & \xi\geq p,\end{cases} \qquad \frac{dz_c}{dx} = \begin{cases}\dfrac{2m}{p^2}(p-\xi),\\[1.6ex] \dfrac{2m}{(1-p)^2}(p-\xi).\end{cases}$$

$$\frac{z_t}{c} = \frac{t}{0.2}\left(0.2969\sqrt\xi-0.1260\xi-0.3516\xi^2+0.2843\xi^3-0.1015\xi^4\right)$$

**In Glauert variables** the slope is remarkably tidy: $\dfrac{dz_c}{dx} = \dfrac{k}{2}\left(\cos\theta-\cos\theta_p\right)$ with $\cos\theta_p = 1-2p$, $k_1 = 2m/p^2$, $k_2 = 2m/(1-p)^2$.

| Section | $\alpha_{L=0}$ (theory) | $c_{m,c/4}$ (theory) | $\alpha_{L=0}$ (measured) | $c_{m,c/4}$ (measured) |
|---|---|---|---|---|
| 0012 | $0°$ | 0 | $0°$ | $\approx-0.005$ |
| 2412 | $-2.08°$ | $-0.053$ | $\approx-2.1°$ | $\approx-0.05$ |
| 4412 | $-4.16°$ | $-0.106$ | $\approx-4.0°$ | $\approx-0.09$ |

**Scaling rule:** for the same $P$, everything camber-related is exactly proportional to $M$ — because the theory is linear in $dz_c/dx$ and the four-digit slope is proportional to $m$.

*From* [2.1](lessons/02-01-airfoil-geometry-kutta-condition.md), [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md)

### Thin-airfoil theory

**Fundamental equation** (vortex sheet on the chord, tangency on the chord):

$$\frac{1}{2\pi}\int_0^c\frac{\gamma(\xi)\,d\xi}{x-\xi} = V_\infty\left(\alpha-\frac{dz_c}{dx}\right), \qquad \gamma(c) = 0$$

**Glauert transformation:** $\xi = \tfrac{c}{2}(1-\cos\theta)$, $x = \tfrac{c}{2}(1-\cos\theta_0)$, giving

$$\frac{1}{2\pi}\int_0^\pi\frac{\gamma(\theta)\sin\theta\,d\theta}{\cos\theta-\cos\theta_0} = V_\infty\left(\alpha-\frac{dz_c}{dx}\right)$$

**Glauert's integral** — the identity that makes the method work:

$$\int_0^\pi\frac{\cos n\theta}{\cos\theta-\cos\theta_0}\,d\theta = \frac{\pi\sin n\theta_0}{\sin\theta_0}, \qquad n = 0,1,2,\dots$$

(so $n = 0$ gives $0$, $n = 1$ gives $\pi$ for every $\theta_0$).

**Glauert series and coefficients:**

$$\gamma(\theta) = 2V_\infty\left(A_0\frac{1+\cos\theta}{\sin\theta}+\sum_{n\ge1}A_n\sin n\theta\right)$$

$$A_0 = \alpha-\frac1\pi\int_0^\pi\frac{dz_c}{dx}\,d\theta_0, \qquad A_n = \frac2\pi\int_0^\pi\frac{dz_c}{dx}\cos n\theta_0\,d\theta_0$$

**Results:**

| Quantity | General camber | Symmetric |
|---|---|---|
| $c_l$ | $\pi\left(2A_0+A_1\right) = 2\pi\left(\alpha-\alpha_{L=0}\right)$ | $2\pi\alpha$ |
| $\alpha_{L=0}$ | $-\dfrac1\pi\displaystyle\int_0^\pi\frac{dz_c}{dx}\left(\cos\theta_0-1\right)d\theta_0$ | $0$ |
| $c_{m,c/4}$ | $\dfrac\pi4\left(A_2-A_1\right)$ | $0$ |
| $c_{m,LE}$ | $-\dfrac{c_l}{4}+c_{m,c/4}$ | $-\dfrac{c_l}{4}$ |
| $x_{ac}/c$ | $\tfrac14$ | $\tfrac14$ |
| $x_{cp}/c$ | $\tfrac14\left[1+\dfrac{\pi(A_1-A_2)}{c_l}\right]$ | $\tfrac14$ |

**Lift-curve slope:** $a_0 = 2\pi$ per radian $= 0.1097$ per degree. Measurement gives about 4% less.

**Parabolic camber** $z_c/c = 4\varepsilon\xi(1-\xi)$: $A_1 = 4\varepsilon$, $A_2 = 0$, $\alpha_{L=0} = -2\varepsilon$, $c_{m,c/4} = -\pi\varepsilon$.

**Flat plate:** $\gamma(\theta) = 2\alpha V_\infty\dfrac{1+\cos\theta}{\sin\theta}$, singular like $x^{-1/2}$ at the nose (integrable) and vanishing like $\sqrt{c-x}$ at the tail.

*From* [2.2](lessons/02-02-vortex-sheet-thin-airfoil-equation.md), [2.3](lessons/02-03-symmetric-thin-airfoil.md), [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md)

### Finite wings and lifting-line theory

**Prandtl's lifting-line equation** (for $a_0 = 2\pi$):

$$\alpha(y_0) = \frac{\Gamma(y_0)}{\pi V_\infty c(y_0)}+\alpha_{L=0}(y_0)+\frac{1}{4\pi V_\infty}\int_{-b/2}^{b/2}\frac{(d\Gamma/dy)\,dy}{y_0-y}$$

**Downwash from a trailing sheet** (the $4\pi$ is because the filaments are *semi*-infinite):

$$w(y_0) = \frac{1}{4\pi}\int_{-b/2}^{b/2}\frac{(d\Gamma/dy)\,dy}{y_0-y}$$

**Fourier solution:** $y = -\tfrac{b}{2}\cos\theta$, $\Gamma = 2bV_\infty\sum A_n\sin n\theta$, giving

$$\alpha_i(\theta_0) = \sum_{n\ge1}nA_n\frac{\sin n\theta_0}{\sin\theta_0}, \qquad C_L = \pi\,AR\,A_1, \qquad C_{D,i} = \pi\,AR\sum_{n\ge1}nA_n^2$$

**Key results:**

| Quantity | Formula |
|---|---|
| Aspect ratio | $AR = b^2/S$ |
| Induced drag | $C_{D,i} = \dfrac{C_L^2}{\pi e\,AR}$, with $e = \dfrac{1}{1+\delta}$, $\delta = \displaystyle\sum_{n\ge2}n\left(\frac{A_n}{A_1}\right)^2$ |
| Induced angle | $\alpha_i = \dfrac{C_L}{\pi e\,AR}$, and $C_{D,i} = C_L\alpha_i$ |
| Finite-wing lift slope | $a = \dfrac{a_0}{1+\dfrac{a_0}{\pi e_1AR}}$; for $a_0 = 2\pi$, $e_1 = 1$: $a = \dfrac{2\pi\,AR}{AR+2}$ |
| Single horseshoe (span $b$) | $w(y_0) = \dfrac{\Gamma}{4\pi}\dfrac{b}{(b/2)^2-y_0^2}$; at the centre, $\dfrac{\Gamma}{\pi b}$ |
| Elliptic loading | $\Gamma = \Gamma_0\sqrt{1-(2y/b)^2} = \Gamma_0\sin\theta$; $w = \dfrac{\Gamma_0}{2b}$ (uniform); $\displaystyle\int\Gamma\,dy = \frac{\pi b\Gamma_0}{4}$ |
| Span-loading form | $D_i = \dfrac{L^2}{q_\infty\pi e\,b^2}$ — **area cancels; only span matters** |

**Elliptic loading is the unique minimum-induced-drag distribution** ($e = 1$), because only $A_1$ makes lift while every $A_n$ makes drag. Typical real values: $e\approx0.85$–$0.95$ straight tapered, $\approx1.0$ elliptic planform.

*From* [2.5](lessons/02-05-finite-wings-downwash-lifting-line.md), [2.6](lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md)

### Boundary layers

**Von Kármán momentum integral** (exact):

$$\frac{d\theta}{dx}+\left(2\theta+\delta^*\right)\frac1U\frac{dU}{dx} = \frac{\tau_w}{\rho U^2} = \frac{c_f}{2}$$

For a flat plate ($dU/dx = 0$) this reduces to $d\theta/dx = c_f/2$, which holds **for laminar and turbulent layers alike** — only the closure for $\tau_w$ differs.

**Wall-curvature relation** (evaluate the momentum equation at $y = 0$):

$$\mu\left.\frac{\partial^2u}{\partial y^2}\right|_w = \frac{dp}{dx}$$

so an adverse gradient forces an inflection point, which by Rayleigh's theorem is also an inviscid instability.

**Flat-plate correlations:**

| | Laminar (Blasius) | Turbulent |
|---|---|---|
| $\delta/x$ | $5.0/\sqrt{Re_x}$ | $0.37/Re_x^{1/5}$ |
| $\delta^*/x$ | $1.721/\sqrt{Re_x}$ | $\approx0.046/Re_x^{1/5}$ |
| $\theta/x$ | $0.664/\sqrt{Re_x}$ | $\approx0.036/Re_x^{1/5}$ |
| $c_f$ | $0.664/\sqrt{Re_x}$ | $0.0592/Re_x^{1/5}$ |
| $C_f$ (plate of length $L$) | $1.328/\sqrt{Re_L}$ | $0.074/Re_L^{1/5}$ |
| Profile | $u/U\approx\sin(\pi y/2\delta)$ | $u/U\approx(y/\delta)^{1/7}$ |
| $H = \delta^*/\theta$ | $2.59$ | $\approx1.29$ |
| $H$ at separation | $\approx3.5$ | $\approx2.4$ |

**Mixed plate** (laminar to $Re_{x,\rm tr} = 5\times10^5$, then turbulent):

$$C_f = \frac{0.074}{Re_L^{1/5}}-\frac{1742}{Re_L}$$

**High-$Re$ turbulent** (better above $10^7$): $C_f = 0.455/\left(\log_{10}Re_L\right)^{2.58}$.

**Transition and roughness:**

$$x_{\rm tr} = \frac{5\times10^5\,\nu}{U}, \qquad k_{\rm adm}\approx\frac{100\,\nu}{U}$$

**Drag from a wake survey** (needs nothing but the profile): $c_d = 2\theta_\infty/c$.

**Guessed-profile results** (momentum integral, zero pressure gradient):

| Profile | $\theta/\delta$ | $\delta^*/\delta$ | $\delta\sqrt{Re_x}/x$ | $c_f\sqrt{Re_x}$ |
|---|---|---|---|---|
| $\sin(\pi\eta/2)$ | 0.1366 | 0.3634 | 4.795 | 0.6551 |
| $2\eta-\eta^2$ | 0.1333 | 0.3333 | 5.477 | 0.7303 |
| $\eta^{1/7}$ (turbulent) | 0.0972 | 0.1250 | $0.3707\,Re_x^{3/10}$ | $0.0577\,Re_x^{3/10}$ |
| Blasius (exact) | 0.1328 | — | 5.0 | 0.664 |

*From* [3.1](lessons/03-01-boundary-layers-momentum-integral.md), [3.2](lessons/03-02-transition-turbulent-boundary-layers.md), [3.3](lessons/03-03-separation-stall-drag-polar.md)

### Drag polar and performance

$$C_D = C_{D,0}+\frac{C_L^2}{\pi e_0AR}$$

| Want | Formula |
|---|---|
| Best-$L/D$ lift coefficient | $C_L^* = \sqrt{\pi e_0AR\,C_{D,0}}$ |
| Maximum lift-to-drag | $\left(\dfrac{L}{D}\right)_{\max} = \dfrac12\sqrt{\dfrac{\pi e_0AR}{C_{D,0}}} = \dfrac{C_L^*}{2C_{D,0}}$ |
| Best-glide speed | $V^* = \sqrt{\dfrac{2W}{\rho_\infty SC_L^*}}$ |
| Minimum drag | $D_{\min} = W/(L/D)_{\max}$ |

**At best $L/D$ the two drag terms are exactly equal.** $(L/D)_{\max}$ depends only on $\sqrt{AR/C_{D,0}}$ — not on weight, area, or altitude.

**Typical values:** $C_{D,0}\approx0.010$ (sailplane), $0.018$–$0.025$ (light aircraft), $e_0\approx0.7$–$0.85$; $c_{l,\max}\approx1.3$–$1.7$ plain, up to $3.0$–$3.5$ with full high-lift devices; $\alpha_{\rm stall}\approx12°$–$16°$.

*From* [3.3](lessons/03-03-separation-stall-drag-polar.md)

### Compressible flow: isentropic relations

$$\frac{T_0}{T} = 1+0.2M^2, \qquad \frac{p_0}{p} = \left(1+0.2M^2\right)^{3.5}, \qquad \frac{\rho_0}{\rho} = \left(1+0.2M^2\right)^{2.5}\qquad(\gamma = 1.4)$$

| $M$ | $T/T_0$ | $p/p_0$ | $\rho/\rho_0$ | $A/A^*$ |
|---|---|---|---|---|
| 0.2 | 0.9921 | 0.9725 | 0.9803 | 2.964 |
| 0.3 | 0.9823 | 0.9395 | 0.9564 | 2.035 |
| 0.5 | 0.9524 | 0.8430 | 0.8852 | 1.340 |
| 0.8 | 0.8865 | 0.6560 | 0.7400 | 1.038 |
| **1.0** | **0.8333** | **0.5283** | **0.6339** | **1.000** |
| 1.5 | 0.6897 | 0.2724 | 0.3950 | 1.176 |
| 2.0 | 0.5556 | 0.1278 | 0.2301 | 1.688 |
| 2.5 | 0.4444 | 0.0585 | 0.1317 | 2.637 |
| 3.0 | 0.3571 | 0.0272 | 0.0762 | 4.235 |

**Other compressible essentials:**

| Want | Formula |
|---|---|
| Speed of sound | $a = \sqrt{\gamma RT}$ — a function of temperature only |
| Compressibility estimate | $\Delta\rho/\rho\approx M^2/2$ (excellent to $M = 0.5$) |
| Kinetic heating | $T_0-T = V^2/(2c_p) = V^2/2010$ K for air |
| Adiabatic wall temperature | $T_{aw} = T\left(1+r\,\tfrac{\gamma-1}{2}M^2\right)$, $r\approx0.85$ laminar, $0.89$ turbulent |
| Maximum speed | $V_{\max} = \sqrt{2c_pT_0} = 2.236\,a_0$ |
| Dynamic pressure | $q_\infty = \tfrac12\gamma p_\infty M_\infty^2 = 0.7\,p_\infty M_\infty^2$ |
| Entropy ↔ stagnation pressure | $p_{0,2}/p_{0,1} = e^{-\Delta s/R}$ when $T_0$ is constant |
| Area–Mach relation | $\left(\dfrac{A}{A^*}\right)^2 = \dfrac{1}{M^2}\left[\dfrac{2}{\gamma+1}\left(1+\tfrac{\gamma-1}{2}M^2\right)\right]^{\frac{\gamma+1}{\gamma-1}}$ |
| Area–velocity relation | $\dfrac{dA}{A} = \left(M^2-1\right)\dfrac{dV}{V}$ |
| $A^*$ after a shock | $A^*_{\rm after}/A^*_{\rm before} = p_{0,\rm before}/p_{0,\rm after}>1$ |

*From* [4.1](lessons/04-01-compressibility-sound-speed-energy.md), [4.2](lessons/04-02-isentropic-stagnation-relations.md), [4.5](lessons/04-05-quasi-1d-nozzle-flow.md)

### Normal shocks

$$M_2^2 = \frac{1+\frac{\gamma-1}{2}M_1^2}{\gamma M_1^2-\frac{\gamma-1}{2}}, \qquad \frac{p_2}{p_1} = 1+\frac{2\gamma}{\gamma+1}\left(M_1^2-1\right), \qquad \frac{\rho_2}{\rho_1} = \frac{u_1}{u_2} = \frac{(\gamma+1)M_1^2}{(\gamma-1)M_1^2+2}$$

$$\frac{T_2}{T_1} = \frac{p_2}{p_1}\frac{\rho_1}{\rho_2}, \qquad u_1u_2 = a^{*2}\ \text{(Prandtl)}, \qquad T_{0,2} = T_{0,1}$$

| $M_1$ | $M_2$ | $p_2/p_1$ | $\rho_2/\rho_1$ | $T_2/T_1$ | $p_{0,2}/p_{0,1}$ |
|---|---|---|---|---|---|
| 1.2 | 0.8422 | 1.513 | 1.342 | 1.128 | 0.9928 |
| 1.5 | 0.7011 | 2.458 | 1.862 | 1.320 | 0.9298 |
| 2.0 | 0.5774 | 4.500 | 2.667 | 1.688 | 0.7209 |
| 2.5 | 0.5130 | 7.125 | 3.333 | 2.138 | 0.4990 |
| 3.0 | 0.4752 | 10.333 | 3.857 | 2.679 | 0.3283 |
| 5.0 | 0.4152 | 29.000 | 5.000 | 5.800 | 0.0617 |
| $\infty$ | 0.378 | $\infty$ | 6.000 | $\infty$ | 0 |

**Rayleigh pitot formula** (supersonic pitot, which reads $p_{0,2}$ behind its own bow shock):

$$\frac{p_{0,2}}{p_1} = \left[\frac{(\gamma+1)^2M_1^2}{4\gamma M_1^2-2(\gamma-1)}\right]^{\frac{\gamma}{\gamma-1}}\frac{2\gamma M_1^2-(\gamma-1)}{\gamma+1}$$

*From* [4.3](lessons/04-03-normal-shock-waves.md)

### Oblique shocks and expansions

**Decomposition:** $M_{n1} = M_1\sin\beta$; apply every normal-shock relation to $M_{n1}$; recover $M_2 = M_{n2}/\sin(\beta-\theta)$. The tangential velocity is unchanged.

**$\theta$–$\beta$–$M$ relation:**

$$\tan\theta = 2\cot\beta\,\frac{M_1^2\sin^2\beta-1}{M_1^2\left(\gamma+\cos2\beta\right)+2}$$

Two roots: weak (smaller $\beta$, usually supersonic downstream — this is what occurs in external flow) and strong.

| $M_1$ | $\theta_{\max}$ | $\beta$ there | $\mu = \arcsin(1/M)$ |
|---|---|---|---|
| 1.5 | $12.11°$ | $66.6°$ | $41.81°$ |
| 2.0 | $22.97°$ | $64.7°$ | $30.00°$ |
| 3.0 | $34.07°$ | $65.2°$ | $19.47°$ |
| 5.0 | $41.12°$ | $66.6°$ | $11.54°$ |
| $\infty$ | $45.58°$ | $67.8°$ | $0°$ |

Beyond $\theta_{\max}$ the shock **detaches** into a curved bow shock with a normal segment on the axis.

**Prandtl–Meyer function:**

$$\nu(M) = \sqrt{\frac{\gamma+1}{\gamma-1}}\arctan\sqrt{\frac{\gamma-1}{\gamma+1}\left(M^2-1\right)}-\arctan\sqrt{M^2-1}, \qquad \nu(M_2) = \nu(M_1)+\theta$$

| $M$ | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 4.0 | $\infty$ |
|---|---|---|---|---|---|---|---|
| $\nu(M)$ | $0°$ | $11.91°$ | $26.38°$ | $39.12°$ | $49.76°$ | $65.78°$ | $130.45°$ |

**Compressions coalesce (each wave heats the flow, so the next travels faster); expansions spread (each cools it).** That asymmetry is why shocks are always compressive and expansions always isentropic.

*From* [4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md)

### Nozzle operating regimes

For a fixed $A_e/A_t$ and reservoir $p_0$, as the back pressure $p_b$ falls:

| Regime | Condition | Behaviour |
|---|---|---|
| Venturi | $p_b$ just below $p_0$ | subsonic throughout, not choked |
| First critical | $p_b = p_{b,1}$ | throat exactly sonic; $p_{b,1}$ from the **subsonic** root of $A_e/A^*$ |
| Shock inside | $p_{b,2}<p_b<p_{b,1}$ | choked; normal shock in the divergent section, moving aft as $p_b$ falls |
| Over-expanded | $p_{b,3}<p_b<p_{b,2}$ | oblique shocks outside the exit (shock diamonds) |
| Design | $p_b = p_{b,3}$ | perfectly expanded; $p_{b,3}$ from the **supersonic** root |
| Under-expanded | $p_b<p_{b,3}$ | expansion fans outside; **nothing inside the nozzle changes** |

$p_{b,2}$ = $p_{b,3}$ multiplied by the normal-shock pressure ratio at $M_e$.

**To locate a shock inside:** iterate on $A_s/A_t$; get $M_s$ from the supersonic root, $p_{0,2}/p_{0,1}$ from the shock relations, then $A_e/A^*_{\rm after} = (A_e/A_t)\times(p_{0,2}/p_{0,1})$, take the **subsonic** root, and check $p_e = p_b$.

**Nozzle separation** (Summerfield criterion): expect the flow to separate from the bell when $p_e\lesssim0.4\,p_a$.

*From* [4.5](lessons/04-05-quasi-1d-nozzle-flow.md)

### Transonic and supersonic wings

**Prandtl–Glauert (subsonic, $M<M_{cr}$):**

$$C_p = \frac{C_{p,0}}{\sqrt{1-M_\infty^2}}, \qquad c_l = \frac{c_{l,0}}{\sqrt{1-M_\infty^2}}, \qquad \frac{dc_l}{d\alpha} = \frac{2\pi}{\sqrt{1-M_\infty^2}}$$

$\alpha_{L=0}$ and $x_{ac}$ are **unchanged** — the factor cancels in both.

**Critical pressure coefficient:**

$$C_{p,\rm crit} = \frac{2}{\gamma M_\infty^2}\left[\left(\frac{1+\frac{\gamma-1}{2}M_\infty^2}{1+\frac{\gamma-1}{2}}\right)^{\frac{\gamma}{\gamma-1}}-1\right]$$

| $M_\infty$ | 0.5 | 0.6 | 0.7 | 0.8 | 1.0 |
|---|---|---|---|---|---|
| $C_{p,\rm crit}$ | $-2.133$ | $-1.294$ | $-0.779$ | $-0.435$ | $0$ |

**Critical Mach number** — solve $C_{p,0,\min}/\sqrt{1-M_{cr}^2} = C_{p,\rm crit}(M_{cr})$:

| $C_{p,0,\min}$ | $-0.3$ | $-0.4$ | $-0.5$ | $-0.6$ | $-0.8$ | $-1.2$ |
|---|---|---|---|---|---|---|
| $M_{cr}$ | 0.784 | 0.747 | 0.716 | 0.689 | 0.643 | 0.575 |

$$M_{dd}\approx M_{cr}+0.05\ \text{to}\ 0.10, \qquad M_{cr,\rm swept}\approx\frac{M_{cr,\rm unswept}}{\cos\Lambda}$$

**Ackeret (linearized supersonic):**

$$C_p = \frac{2\theta}{\sqrt{M_\infty^2-1}}\quad(\theta = \text{local surface slope, positive into the flow})$$

| Quantity | Flat plate | General thin section |
|---|---|---|
| $c_l$ | $\dfrac{4\alpha}{\sqrt{M_\infty^2-1}}$ | same (camber does not change the slope) |
| $c_{d,w}$ | $\dfrac{4\alpha^2}{\sqrt{M_\infty^2-1}}$ | $\dfrac{4}{\sqrt{M_\infty^2-1}}\left[\alpha^2+\overline{g_c^2}+\overline{g_t^2}\right]$ |
| $l/d$ | $1/\alpha$ (radians), independent of $M$ | — |
| $x_{ac}/c$ | $\tfrac12$ | $\tfrac12$ |

For a symmetric diamond of thickness ratio $t/c$: $\overline{g_t^2} = (t/c)^2$, $\alpha_{\rm opt} = t/c$, and $(l/d)_{\max} = c/(2t)$.

**Subsonic leading edge** (rounded nose permitted, some leading-edge suction recovered): $\Lambda>90°-\mu$ — that is $>60°$ at $M = 2$.

*From* [4.6](lessons/04-06-subsonic-compressibility-transonic.md), [4.7](lessons/04-07-supersonic-airfoils-wave-drag-sweep.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Bernoulli's equation along a streamline, $p+\tfrac12\rho V^2 = $ const | [`fluid-dynamics` 2.1](../fluid-dynamics/lessons/02-01-bernoulli.md) |
| Vorticity, circulation, and $\nabla\cdot\boldsymbol\omega = 0$ | [`fluid-dynamics` 2.2](../fluid-dynamics/lessons/02-02-vorticity-circulation.md) |
| Kelvin's circulation theorem and its proof | [`fluid-dynamics` 2.3](../fluid-dynamics/lessons/02-03-kelvin-circulation-theorem.md) |
| Velocity potential, stream function, and $\nabla^2\phi = 0$ | [`fluid-dynamics` 2.4](../fluid-dynamics/lessons/02-04-irrotational-flow-velocity-potential.md) |
| The complex potential and the elementary-flow catalogue | [`fluid-dynamics` 2.5](../fluid-dynamics/lessons/02-05-complex-potential.md) |
| Flow past a circular cylinder, with and without circulation | [`fluid-dynamics` 2.6](../fluid-dynamics/lessons/02-06-flow-past-cylinder-lift.md) |
| The Reynolds number and what it compares | [`fluid-dynamics` 3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md) |
| The boundary-layer approximation and the Blasius solution | [`fluid-dynamics` 3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md) |
| Separation, the drag crisis, and bluff-body drag | [`fluid-dynamics` 3.5](../fluid-dynamics/lessons/03-05-separation-drag.md) |
| Transition to turbulence and Tollmien–Schlichting instability | [`fluid-dynamics` 4.4](../fluid-dynamics/lessons/04-04-transition-to-turbulence.md) |
| Sound waves and why the compression is isentropic | [`fluid-dynamics` 4.2](../fluid-dynamics/lessons/04-02-sound-waves.md) |
| Wall-bounded turbulence and the energy cascade | [`fluid-dynamics` 4.5](../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md) |
| Enthalpy, entropy, $\gamma = c_p/c_v$, and the isentropic relation $p\rho^{-\gamma} = $ const | [`engineering-thermodynamics`](../engineering-thermodynamics/syllabus.md) |
| The Biot–Savart law (used here with vorticity in place of current) | [`em-refresher`](../em-refresher/syllabus.md) |
| Cauchy principal-value integrals and Fourier series | [`fourier-analysis`](../fourier-analysis/syllabus.md), [`complex-analysis`](../complex-analysis/syllabus.md) |

## Pitfalls

### Coefficients and conventions

- **Uppercase vs lowercase.** $C_L$ is the whole wing (reference area $S$); $c_l$ is a section per unit span (reference length $c$). They are different numbers for the same aircraft. *([1.1](lessons/01-01-forces-moments-coefficients.md))*
- **Reference area is a convention, not a measurement.** Wing area includes the part buried in the fuselage; a "drag coefficient" is meaningless until you say what area it used. *([1.1](lessons/01-01-forces-moments-coefficients.md))*
- **$2\pi$ is per radian.** The lift slope is $2\pi$/rad $= 0.1097$/degree. This is the single most common slip in the subject. *([2.3](lessons/02-03-symmetric-thin-airfoil.md), [2.6](lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md))*
- **The vortex sign convention here is clockwise-positive**, opposite to the usual mathematical one. *([1.2](lessons/01-02-potential-flow-elementary-flows.md))*
- **$\gamma$ (sheet strength) has units of velocity**, not circulation; $\Gamma = \int\gamma\,dx$ restores them. *([2.2](lessons/02-02-vortex-sheet-thin-airfoil-equation.md))*

### Pressure and potential flow

- **$C_p$ is capped above at $+1$ and unbounded below.** A suction peak of $-6$ on a highly loaded airfoil is unremarkable. *([1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md))*
- **$C_p = 1-(V/V_\infty)^2$ is incompressible only.** Above $M\approx0.3$ use the compressible form. *([1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md), [4.6](lessons/04-06-subsonic-compressibility-transonic.md))*
- **Superposition works on $\phi$ and $\psi$, never on $C_p$ or pressure** — Bernoulli is quadratic in velocity. *([1.2](lessons/01-02-potential-flow-elementary-flows.md))*
- **$D' = 0$ is not an approximation.** It is exact within the theory and totally wrong in reality; the error is not small, it is complete. *([1.3](lessons/01-03-cylinder-pressure-coefficient-kutta-joukowski.md))*

### Airfoil theory

- **The Kutta condition is a selection rule, not a new law.** It restores the information the inviscid equations destroyed when they discarded viscosity. *([2.1](lessons/02-01-airfoil-geometry-kutta-condition.md))*
- **It applies only to a *sharp* trailing edge.** On a rounded one — a cylinder — the circulation is genuinely indeterminate, which is why cylinders must be spun to lift. *([2.1](lessons/02-01-airfoil-geometry-kutta-condition.md))*
- **$\gamma\to\infty$ at the leading edge is not a bug.** It is integrable, the lift is finite, and it is the shadow of a real suction peak. *([2.2](lessons/02-02-vortex-sheet-thin-airfoil-equation.md))*
- **The camber line enters only through its *slope*, and thickness never enters at all.** A NACA 0006 and a NACA 0018 have the same predicted lift curve — and measurement agrees to a few percent. *([2.2](lessons/02-02-vortex-sheet-thin-airfoil-equation.md), [2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md))*
- **Camber shifts the lift curve; it never tilts it.** $dc_l/d\alpha = 2\pi$ regardless. *([2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md))*
- **Split the NACA integrals at $\theta_p$.** The camber slope is discontinuous at the maximum-camber station. *([2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md))*
- **Don't chase the centre of pressure.** It wanders across half the chord and is singular at zero lift; quote the aerodynamic centre plus a constant couple. *([2.4](lessons/02-04-cambered-airfoil-aerodynamic-center.md))*
- **A symmetric section's $c_{m,c/4} = 0$ means *neutral*, not stable.** Aircraft stability comes from CG position relative to the neutral point. *([2.3](lessons/02-03-symmetric-thin-airfoil.md))*
- **The theory has no maximum.** $c_l = 2\pi\alpha$ never stalls; real sections peak near $c_l = 1.3$–$1.7$. *([2.3](lessons/02-03-symmetric-thin-airfoil.md))*

### Finite wings

- **The downwash integral has $4\pi$, not $2\pi$** — the trailing filaments are semi-infinite. *([2.5](lessons/02-05-finite-wings-downwash-lifting-line.md))*
- **Induced drag is inviscid.** It survives in a perfect fluid, which is why d'Alembert's paradox is a two-dimensional statement. *([2.5](lessons/02-05-finite-wings-downwash-lifting-line.md))*
- **Span efficiency $e$ ≠ Oswald efficiency $e_0$.** $e$ describes the lift distribution; $e_0$ is the whole polar's fit and is smaller. *([2.6](lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md), [3.3](lessons/03-03-separation-stall-drag-polar.md))*
- **Compare wings at the same *lift*, not the same $\alpha$.** A same-$\alpha$ comparison flatters the short wing because it is not doing as much work. *([2.6](lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md))*
- **Induced drag *rises* as speed falls** — the opposite of every other drag component, and the reason for the back side of the power curve. *([2.6](lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md), [3.3](lessons/03-03-separation-stall-drag-polar.md))*
- **Lifting-line theory needs a long, thin, unswept wing.** Below $AR\approx4$, or with much sweep, use lifting-surface methods. *([2.5](lessons/02-05-finite-wings-downwash-lifting-line.md))*

### Boundary layers and drag

- **$\delta$ is arbitrary** (a 99% convention). Quote $\delta^*$, $\theta$, or $c_f$ instead. *([3.1](lessons/03-01-boundary-layers-momentum-integral.md))*
- **Don't drop the $dU/dx$ term** outside a flat plate — it is what eventually causes separation. *([3.1](lessons/03-01-boundary-layers-momentum-integral.md))*
- **$Re_{x,\rm tr} = 5\times10^5$ is a convention**, spanning $10^5$ to $3\times10^6$ in reality. *([3.2](lessons/03-02-transition-turbulent-boundary-layers.md))*
- **You cannot get $\tau_w$ from the $1/7$ profile** — its wall slope is infinite. Turbulent wall stress always comes from a correlation. *([3.2](lessons/03-02-transition-turbulent-boundary-layers.md))*
- **A turbulent layer is thicker overall but *faster near the wall*.** That is exactly why it costs friction and buys separation resistance. *([3.2](lessons/03-02-transition-turbulent-boundary-layers.md), [3.3](lessons/03-03-separation-stall-drag-polar.md))*
- **Tripping the layer helps only on a bluff body**, or where it prevents separation. On an attached streamlined body it is pure loss. *([3.3](lessons/03-03-separation-stall-drag-polar.md))*
- **The polar assumes attached flow.** Past $C_{L,\max}$ it is meaningless, and $C_{D,0}$ is not really constant. *([3.3](lessons/03-03-separation-stall-drag-polar.md))*
- **Best $L/D$ is not the slowest speed.** $C_L^*$ is typically about 40% of $C_{L,\max}$. *([3.3](lessons/03-03-separation-stall-drag-polar.md))*

### Compressible flow

- **The speed of sound depends on temperature alone** — not on pressure or altitude except through $T$. *([4.1](lessons/04-01-compressibility-sound-speed-energy.md))*
- **$M<0.3$ is a 5%-error convention**, not a law. Pressure-sensitive work may need $M<0.15$. *([4.1](lessons/04-01-compressibility-sound-speed-energy.md))*
- **$p_0 = p+\tfrac12\rho V^2$ underestimates** the true stagnation pressure — by 2.2% at $M = 0.3$ and 6.0% at $M = 0.5$. *([4.1](lessons/04-01-compressibility-sound-speed-energy.md))*
- **$T_0$ survives a shock; $p_0$ does not.** The first law protects one, the second law taxes the other. *([4.1](lessons/04-01-compressibility-sound-speed-energy.md), [4.2](lessons/04-02-isentropic-stagnation-relations.md), [4.3](lessons/04-03-normal-shock-waves.md))*
- **Isentropic relations fail across a shock and inside a boundary layer.** Use them separately on each side, with a different $p_0$. *([4.2](lessons/04-02-isentropic-stagnation-relations.md))*
- **$p^*$ is a reference, not a location.** A flow that never reaches $M = 1$ still has a well-defined $p^*$. *([4.2](lessons/04-02-isentropic-stagnation-relations.md))*
- **$0.528$ is a property of $\gamma$, not of air** — it is $0.546$ for steam and $0.487$ for argon. *([4.2](lessons/04-02-isentropic-stagnation-relations.md))*
- **Use $M_{n1}$, not $M_1$, in the shock relations**, and recover $M_2$ with $\sin(\beta-\theta)$, not $\sin\beta$. *([4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md))*
- **Beyond $\theta_{\max}$ there is no solution to find.** Any $\beta$ you compute is spurious; the shock has detached. *([4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md))*
- **$\nu(M)$ is an absolute coordinate measured from $M = 1$**, not an increment. *([4.4](lessons/04-04-oblique-shocks-prandtl-meyer.md))*
- **A supersonic pitot needs the Rayleigh formula.** The isentropic one underestimates $M$ by 10% at $M = 2$ and 24% at $M = 3$. *([4.3](lessons/04-03-normal-shock-waves.md))*
- **A diverging duct accelerates supersonic flow**, and sonic conditions occur only at a throat. *([4.5](lessons/04-05-quasi-1d-nozzle-flow.md))*
- **Downstream of a shock, $A^*\neq A_t$** — it grows in proportion to the $p_0$ loss. *([4.5](lessons/04-05-quasi-1d-nozzle-flow.md))*
- **A choked nozzle's mass flow cannot respond to back pressure.** No signal travels upstream past a sonic throat. *([4.5](lessons/04-05-quasi-1d-nozzle-flow.md))*

### Transonic and supersonic

- **Prandtl–Glauert is invalid above $M_{cr}$**, and it diverges at $M = 1$ — that divergence is the theory announcing its own failure. *([4.6](lessons/04-06-subsonic-compressibility-transonic.md))*
- **$M_{cr}$ is not where drag rises.** $M_{dd}$ is, 0.05–0.10 later. *([4.6](lessons/04-06-subsonic-compressibility-transonic.md))*
- **A supercritical airfoil mainly weakens the shock**, raising $M_{dd}$ — or, at fixed $M_{dd}$, allowing a thicker wing. *([4.6](lessons/04-06-subsonic-compressibility-transonic.md))*
- **The $\cos\Lambda$ rule is for an infinite swept wing.** Real wings realize 60–80% of it, worst at root and tip. *([4.6](lessons/04-06-subsonic-compressibility-transonic.md))*
- **Above $M = 1$ the factor is $1/\sqrt{M^2-1}$**, the lift slope is $4/\beta$ not $2\pi/\beta$, and the aerodynamic centre is at $c/2$ not $c/4$. *([4.7](lessons/04-07-supersonic-airfoils-wave-drag-sweep.md))*
- **Wave drag is not induced drag.** It exists in two dimensions and at zero lift. *([4.7](lessons/04-07-supersonic-airfoils-wave-drag-sweep.md))*
- **Camber is a pure penalty supersonically**, and thickness costs drag as $(t/c)^2$. Supersonic sections are thin, symmetric, and sharp-nosed. *([4.7](lessons/04-07-supersonic-airfoils-wave-drag-sweep.md))*
- **Ackeret degrades with $\alpha$ and $M$.** At $M = 2$, $\alpha = 4°$ it is good to 0.2%; at $\alpha = 15°$, to about 8%. *([4.7](lessons/04-07-supersonic-airfoils-wave-drag-sweep.md))*

---

*This card covers all 19 lessons of the course. If you find yourself needing a fact that is used in a lesson but is not on this card, that is a bug — flag it.*

# Transport Phenomena · Lesson 2.5: The energy equation of change

> ⏱ ~15 min · Module 2: Shell balances and the equations of change · Builds on: [2.4 Equation of motion (Navier–Stokes)](02-04-equation-of-motion-navier-stokes.md), [`heat-transfer` 1.2 The heat equation](../../heat-transfer/lessons/01-02-heat-equation.md) · Unlocks: [2.6 Species-continuity equation](02-06-species-continuity-equation.md), Module 5 (simultaneous heat & mass), Boss problem 2

## Why this matters

You already own the heat equation — you derived it in [`heat-transfer` 1.2](../../heat-transfer/lessons/01-02-heat-equation.md) by doing energy bookkeeping on a stationary box. But that box was a *solid*: heat could only conduct in and out. The moment the medium is a **moving fluid**, two new things happen. First, the flow physically *carries* hot material from place to place — **convection**, the reason a fan cools you and a solid block just sits there. Second, the fluid's own internal friction dumps mechanical energy into heat — **viscous dissipation**, the reason a spinning bearing runs hot and a polymer melt can cook itself in an extruder. This lesson upgrades the heat equation to handle both. The payoff is one PDE that governs every convective heat-transfer problem in the rest of the course — and it's the heat equation you know, with exactly two terms switched on.

## The idea

Same tiny box, same accounting sentence as before:

> (energy in − energy out) + (energy generated) = (energy stored).

Nothing has changed about conservation. What changed is the list of ways energy gets *in and out*. In a solid, the only mechanism was conduction. In a fluid there are two:

- **Conduction** — heat diffuses down the temperature gradient, Fourier's law, exactly as before.
- **Convection** — the fluid *flows*, and moving fluid drags its thermal energy along with it. A parcel at temperature $T$ crossing the box face carries $\rho c_p T$ per unit volume with it.

And there's a new **source** term. Friction between fluid layers sliding past each other converts organized kinetic energy into disorganized heat — always irreversibly, always warming the fluid. Call it **viscous dissipation**. It sits in the equation exactly where a heat-generation term would, because from the thermal energy's point of view that's what it is: internal heat generation, manufactured by shear.

Put those pieces on the same box balance and you get the energy equation of change. Read it as the heat equation **plus convection plus dissipation** — and if you turn the flow off, both new terms vanish and you're staring at the heat equation again.

## The formal version

The compact statement, for a Newtonian fluid with constant $k$, $\rho$, $c_p$:

$$\boxed{\;\rho c_p\,\frac{DT}{Dt} = k\nabla^2 T + \mu\Phi_v + \dot q\;}$$

with symbols (SI units): $\rho$ density (kg/m³), $c_p$ specific heat (J/kg·K), $T$ temperature (K), $k$ thermal conductivity (W/m·K), $\mu$ dynamic viscosity (Pa·s), $\dot q$ any *external* volumetric heat generation (W/m³, e.g. a chemical reaction or resistive heating), and $\Phi_v$ the **viscous dissipation function** (units s⁻², defined below).

*In words: following a fluid parcel, its rate of storing heat equals what conduction delivers, plus the heat manufactured by its own friction, plus any external generation.*

The whole convection story hides inside that **substantial derivative** $D/Dt$ from [2.3](02-03-equation-of-continuity.md). Expand it:

$$\frac{DT}{Dt} = \underbrace{\frac{\partial T}{\partial t}}_{\text{storage}} + \underbrace{\mathbf v\cdot\nabla T}_{\text{convection}}.$$

*In words: the temperature a moving parcel feels changes both because the field is changing in time (storage) and because the parcel is being swept into regions of different temperature (convection).* Multiply through by $\rho c_p$ and move the convection term to the left, and you can literally see the equation as the heat equation with one extra transport term bolted on:

$$\underbrace{\rho c_p\frac{\partial T}{\partial t}}_{\text{storage}} + \underbrace{\rho c_p\,\mathbf v\cdot\nabla T}_{\text{convection (NEW)}} = \underbrace{k\nabla^2 T}_{\text{conduction}} + \underbrace{\mu\Phi_v}_{\text{dissipation (NEW)}} + \underbrace{\dot q}_{\text{generation}}.$$

**The bridge to heat-transfer, stated explicitly.** Set $\mathbf v = 0$ (no flow, so the convection term dies) and drop the frictional heating ($\Phi_v = 0$, nothing is shearing), and what remains is

$$\rho c_p\,\frac{\partial T}{\partial t} = k\nabla^2 T + \dot q,$$

**exactly** the heat equation from [`heat-transfer` 1.2](../../heat-transfer/lessons/01-02-heat-equation.md). The energy equation of change *is* that equation, with convection and dissipation switched on the instant the medium starts to move and shear.

**Viscous dissipation.** $\Phi_v$ is a sum of *squared* velocity gradients — for a general 3-D flow it's a mouthful, but the key facts are that (i) it is a sum of squares, so $\Phi_v \ge 0$ always: friction only ever *adds* heat, never removes it (this is the second law showing up), and (ii) for the **simple shear** flows we solve in this module, where only $v_x(y)$ varies, it collapses to one term:

$$\Phi_v = \left(\frac{dv_x}{dy}\right)^2.$$

*In words: the rate you turn mechanical work into heat scales with the square of the shear rate.* Units check on $\mu\Phi_v$: $\mathrm{(Pa\cdot s)(s^{-1})^2 = Pa/s = (J/m^3)/s = W/m^3}$ — a volumetric heating rate, exactly like $\dot q$. ✓

**Convection vs conduction — who wins?** The ratio of the convection term to the conduction term defines the **Péclet number**, $Pe = \dfrac{\rho c_p V L}{k} = Re\,Pr$ (we'll build it properly in [3.1](03-01-nondimensionalizing-equations-of-change.md)). $Pe \gg 1$: flow carries heat far faster than conduction spreads it (a river of hot fluid). $Pe \ll 1$: conduction dominates and you're nearly back to the pure heat equation. It's the thermal twin of the Reynolds number.

## Picture

![The energy equation of change split into five labeled terms — storage plus convection equals conduction plus viscous dissipation plus generation — with the two flow-only terms highlighted and a note that dropping them recovers the heat-transfer heat equation](assets/02-05-fig1.svg)

## Worked examples

**Example 1 — Boss problem 2(b,c): the Couette gap heats itself.** Fluid ($\mu$, $k$) fills the gap $0\le y\le b$ between two plates; the bottom plate ($y=0$) is fixed at $T_0$, the top plate ($y=b$) moves at speed $V$ at temperature $T_b$. From [2.4](02-04-equation-of-motion-navier-stokes.md) the velocity is pure Couette, $v_x = Vy/b$ (linear). Find $T(y)$, keeping viscous dissipation.

*Reduce the energy equation.* Steady ($\partial_t T=0$). The flow is fully developed and the plates are uniform, so $T=T(y)$ only, which kills convection: $\mathbf v\cdot\nabla T = v_x\,\partial T/\partial x = 0$ (nothing varies in $x$). No external generation ($\dot q=0$). Conduction survives as $k\,d^2T/dy^2$. The shear rate is $dv_x/dy = V/b$, so $\Phi_v = (V/b)^2$. What's left:

$$k\,\frac{d^2T}{dy^2} + \mu\left(\frac{V}{b}\right)^2 = 0.$$

*In words: heat is manufactured uniformly across the gap by shear, and conduction has to carry every watt of it out to the plates.* Solve — the source is constant, so integrate twice:

$$\frac{d^2T}{dy^2} = -\frac{\mu V^2}{k b^2}\;\Longrightarrow\; T(y) = -\frac{\mu V^2}{2kb^2}\,y^2 + C_1 y + C_2.$$

Apply $T(0)=T_0 \Rightarrow C_2=T_0$, then $T(b)=T_b$:

$$T_b = -\frac{\mu V^2}{2k} + C_1 b + T_0 \;\Longrightarrow\; C_1 = \frac{T_b-T_0}{b} + \frac{\mu V^2}{2kb}.$$

Writing $\xi = y/b$ and collecting, the profile is a straight line (pure conduction) plus a symmetric parabolic bump (dissipation):

$$\boxed{\;\frac{T-T_0}{T_b-T_0} = \xi + \frac{Br}{2}\,\xi(1-\xi)\;},\qquad Br \equiv \frac{\mu V^2}{k(T_b-T_0)}.$$

The **Brinkman number** $Br$ is the ratio of heat generated by friction to heat conducted along the imposed $\Delta T = T_b-T_0$. When $Br\to 0$ (feeble shear or a huge imposed $\Delta T$) the bump vanishes and you get the plain conduction line $\xi$; crank $Br$ up and the parabola swells.

*When does the interior get hotter than either plate?* Take $T_b\ge T_0$, so the top plate is the hotter one; ask when the peak temperature exceeds $T_b$. With $\theta(\xi)$ the boxed left side, $\theta'(\xi) = 1 + \tfrac{Br}{2}(1-2\xi)$, which vanishes at

$$\xi^* = \frac12 + \frac1{Br}.$$

That peak lies *inside* the gap ($\xi^*<1$) only when $\tfrac1{Br}<\tfrac12$, i.e. $\;Br>2$. Equivalently, the slope at the hot plate is $\theta'(1)=1-\tfrac{Br}{2}$, which turns negative — temperature still climbing as you step inward from the top plate — precisely when $Br>2$. So:

$$\boxed{\;Br>2 \;\Longrightarrow\; \text{the fluid inside the gap overshoots the hotter plate.}\;}$$

*In words: once frictional heating beats conduction by more than a factor of ~2, the gap can't shed its self-generated heat through the walls fast enough, and the interior runs hotter than anything bounding it.* *Sanity check:* if the plates are at the **same** temperature ($T_b=T_0$, $Br\to\infty$), the peak sits dead center ($\xi^*\to\tfrac12$) and the raw rise there is $\mu V^2/(8k)$ — always hotter than the walls, as it must be. ✓

**Example 2 — why this is a footnote for water and a design constraint for oil.** The characteristic viscous temperature rise is $\Delta T_{\text{visc}} \sim \mu V^2/k$ (it's the whole numerator of $Br$; the equal-plate peak is $\mu V^2/8k$). Compare a thin sheared film of water vs a lubricating oil at a bearing-like surface speed $V\approx 10\ \mathrm{m/s}$.

*Water:* $\mu\approx 1.0\times10^{-3}\ \mathrm{Pa\,s}$, $k\approx 0.6\ \mathrm{W/m\,K}$.

$$\Delta T_{\text{visc}} \sim \frac{(10^{-3})(10)^2}{0.6} = \frac{0.1}{0.6} \approx 0.17\ \mathrm{K}.$$

Utterly negligible — you would never notice it.

*Lubricating oil:* $\mu\approx 0.5\ \mathrm{Pa\,s}$ (500× water), $k\approx 0.15\ \mathrm{W/m\,K}$ (4× worse).

$$\Delta T_{\text{visc}} \sim \frac{(0.5)(10)^2}{0.15} = \frac{50}{0.15} \approx 330\ \mathrm{K}.$$

Three hundred kelvin of order-of-magnitude drive (the actual peak $\mu V^2/8k\approx 40\ \mathrm{K}$, still large). This is exactly why journal bearings need oil coolers, why lubricant viscosity is quoted *at operating temperature*, and why polymer extruders can melt-fracture or degrade their own feedstock through shear heating. The ~2000× swing between the two fluids is almost entirely $\mu$ (500×) times the worse $k$ (4×). *Units check:* $\mathrm{(Pa\,s)(m/s)^2/(W/m\,K)} = \mathrm{(W/m)/(W/m\,K)} = \mathrm{K}$. ✓

## Watch out

- **You might think convection is a new *force* or mechanism in the equation — it isn't; it's a bookkeeping term from the moving reference frame.** Convection enters only because we track a parcel with $D/Dt$; the physics of heat transport is still just Fourier conduction plus a generation term. Nothing new *happens to* the heat — it's the same heat, riding along with mass that flows.
- **You might expect the temperature profile in a sheared fluid to be linear like the velocity — but dissipation makes it parabolic.** Even with both plates conducting normally, the $\mu\Phi_v$ source bows the profile; a *linear* $T(y)$ only appears in the $Br\to0$ limit where friction is negligible.
- **You might carry viscous dissipation around in every problem "to be safe" — but it's almost always negligible, and knowing when it isn't is the skill.** For ordinary liquids and gases at everyday speeds $Br\ll1$ and you can drop it without a second thought. It earns its place only in high-shear, high-viscosity flows: lubrication films, polymer processing, high-speed (hypersonic) boundary layers, capillary and micro-gap flows.

## One-liner

> The energy equation of change is the heat equation with the flow turned on: $\rho c_p\,DT/Dt = k\nabla^2T + \mu\Phi_v + \dot q$ — conduction as before, plus convection hiding in $D/Dt$ and frictional heating in $\mu\Phi_v$.

## Problems

**P1 (🟢)** Planar Couette flow, gap $b$, top plate speed $V$, but now **both** plates are held at the *same* temperature $T_w$. Starting from $k\,d^2T/dy^2 + \mu(V/b)^2 = 0$, find $T(y)$, the location of the hottest point, and the maximum temperature rise above $T_w$.

**P2 (🟡)** Same Couette gap, but the **moving top plate is insulated** (adiabatic) while the fixed bottom plate stays at $T_0$. Find $T(y)$ and the temperature the top plate settles to. Which plate carries away all the dissipated heat, and why does that make physical sense?

**P3 (🔴)** An oil-film bearing has $\mu = 0.4\ \mathrm{Pa\,s}$, $k = 0.14\ \mathrm{W/m\,K}$, surface speed $V = 12\ \mathrm{m/s}$, with the two surfaces at $T_0 = 40^\circ\mathrm{C}$ (stationary) and $T_b = 60^\circ\mathrm{C}$ (moving). Compute the Brinkman number, decide whether the oil in the gap overshoots the hotter surface, and if so estimate the peak temperature and where it occurs.

<details>
<summary>Solutions</summary>

**P1** Integrate twice: $T(y) = -\dfrac{\mu V^2}{2kb^2}y^2 + C_1 y + C_2$. BCs $T(0)=T(b)=T_w$ give $C_2=T_w$ and $0 = -\dfrac{\mu V^2}{2k} + C_1 b \Rightarrow C_1 = \dfrac{\mu V^2}{2kb}$. With $\xi=y/b$:

$$T(y) = T_w + \frac{\mu V^2}{2k}\,\xi(1-\xi).$$

A symmetric parabola. The hottest point is at the **center** $\xi = 1/2$ (where $\xi(1-\xi)$ maxes at $1/4$), and

$$\Delta T_{\max} = \frac{\mu V^2}{2k}\cdot\frac14 = \frac{\mu V^2}{8k}.$$

*Check:* this is the $Br\to\infty$ / equal-plate limit quoted in Example 1; both walls at $T_w$ can only conduct heat *out*, so the peak must sit midway between them. Units: $\mathrm{(Pa\,s)(m/s)^2/(W/m\,K)=K}$ ✓.

**P2** Same ODE, so $T(y) = -\dfrac{\mu V^2}{2kb^2}y^2 + C_1 y + C_2$. Bottom plate fixed: $T(0)=T_0\Rightarrow C_2=T_0$. Top plate insulated means zero flux there, $dT/dy|_{y=b}=0$ (Neumann). Since $\dfrac{dT}{dy} = -\dfrac{\mu V^2}{kb^2}y + C_1$, setting $y=b$ gives $C_1 = \dfrac{\mu V^2}{kb}$. Thus, with $\xi=y/b$,

$$T(y) = T_0 + \frac{\mu V^2}{2k}\,\xi(2-\xi),\qquad T_{\text{top}} = T(b) = T_0 + \frac{\mu V^2}{2k}.$$

Temperature rises monotonically from the cold plate to a maximum at the **insulated top plate**. All the dissipated heat must leave through the **bottom (cold) plate**, because no heat can cross an insulated boundary — so every watt generated in the gap is funneled to the one wall that will take it. *Check:* the profile's slope is zero at the top ✓ (adiabatic), and a global balance confirms it: total generation per area $= \mu(V/b)^2\cdot b = \mu V^2/b$ must equal the conductive flux out the bottom, $-k\,dT/dy|_0 = -kC_1 = -\mu V^2/b$ (pointing in $-y$, i.e. out through $y=0$) ✓.

**P3** $Br = \dfrac{\mu V^2}{k(T_b-T_0)} = \dfrac{(0.4)(12)^2}{(0.14)(20)} = \dfrac{57.6}{2.8} \approx 20.6$. Since $Br > 2$, the interior **overshoots** the $60^\circ\mathrm{C}$ plate. Peak location: $\xi^* = \tfrac12 + \tfrac1{Br} = 0.5 + 0.049 \approx 0.55$ (just past mid-gap toward the hot plate). Peak value from $\theta(\xi)=\xi+\tfrac{Br}{2}\xi(1-\xi)$: $\theta(\xi^*) = 0.549 + 10.3(0.549)(0.451) \approx 0.549 + 2.55 \approx 3.10$. Converting, $T_{\max} = T_0 + 3.10(T_b-T_0) = 40 + 3.10(20) \approx 102^\circ\mathrm{C}$. *Check:* $Br\gg2$, so the peak should sit near mid-gap and tower over both plates — $\xi^*\approx0.55$ and $102^\circ\mathrm{C}\gg60^\circ\mathrm{C}$, both consistent. Frictional heating, not the plate temperatures, sets the interior. This is why such a bearing needs active cooling.

</details>

## Flashback

**From Lesson 2.4 (Equation of motion):** A fluid fills the gap $0\le y\le b$ between two plates. The bottom plate is fixed, the top moves at $V$, **and** a constant pressure gradient $dp/dx$ is imposed along the flow. Reduce the Navier–Stokes equation to an ODE for $v_x(y)$ and solve it. Show that with $dp/dx=0$ you recover the pure Couette profile $v_x=Vy/b$ used in this lesson.

<details>
<summary>Solution</summary>

Steady, fully developed ($v_x=v_x(y)$ only, $v_y=v_z=0$), incompressible. The $x$-component of Navier–Stokes $\rho\,Dv_x/Dt = -\partial p/\partial x + \mu\nabla^2 v_x$ collapses: the left side is zero (fully developed, no acceleration following the flow), leaving

$$0 = -\frac{dp}{dx} + \mu\frac{d^2 v_x}{dy^2}\;\Longrightarrow\;\frac{d^2v_x}{dy^2} = \frac{1}{\mu}\frac{dp}{dx}\ (\text{const}).$$

Integrate twice: $v_x(y) = \dfrac{1}{2\mu}\dfrac{dp}{dx}\,y^2 + C_1 y + C_2$. BCs $v_x(0)=0\Rightarrow C_2=0$ and $v_x(b)=V\Rightarrow C_1 = \dfrac{V}{b} - \dfrac{b}{2\mu}\dfrac{dp}{dx}$. So

$$v_x(y) = \frac{Vy}{b} + \frac{1}{2\mu}\left(-\frac{dp}{dx}\right)y(b-y).$$

*In words: the profile is a linear Couette part (dragged by the moving wall) superposed on a parabolic Poiseuille part (pushed by the pressure gradient).* Setting $dp/dx=0$ kills the parabola and leaves $v_x = Vy/b$ — exactly the input to this lesson's dissipation problem. ✓ (A favorable gradient $-dp/dx>0$ fattens the profile; a strong enough adverse gradient can drive back-flow near the fixed wall.)

</details>

## Connections

- **Backward:** this reuses the shell/control-volume energy bookkeeping of [`heat-transfer` 1.2](../../heat-transfer/lessons/01-02-heat-equation.md) and takes the velocity field straight from the equation of motion [2.4](02-04-equation-of-motion-navier-stokes.md); the reduced Couette problem sits alongside [`fluid-dynamics` 3.2](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md).
- **Forward:** [2.6](02-06-species-continuity-equation.md) writes the *fourth* equation of change — species continuity — completing the mass/momentum/energy/species family, each the same box balance for a different quantity. The convection term you just met becomes the Péclet number in [3.1](03-01-nondimensionalizing-equations-of-change.md), and this equation is the backbone of every convection result in Module 3 and the simultaneous heat-and-mass transfer of Module 5.
- **Sideways:** the momentum↔heat↔mass analogy in action — momentum's equation of motion ([2.4](02-04-equation-of-motion-navier-stokes.md)) and this energy equation are the *same* control-volume law applied to different conserved quantities (flux $= -$ diffusivity $\times$ gradient, plus a source). The Brinkman number is heat transport's version of asking "how big is the source term compared to diffusion?" — the same question the Thiele modulus asks for diffusion-with-reaction later in the course.

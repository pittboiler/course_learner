# Transport Phenomena · Lesson 1.2: Momentum transport and Newton's law of viscosity

> ⏱ ~15 min · Module 1: The grand analogy and molecular transport · Builds on: [1.1 One flux law, three transports](01-01-one-flux-law-three-transports.md), fluid-dynamics [1.4 stress tensor](../../fluid-dynamics/lessons/01-04-stress-tensor.md) & [3.2 Couette/Poiseuille](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md) · Unlocks: 2.1 (shell momentum balances)

## Why this matters

You already know viscosity as "thickness" — honey resists shearing more than water. That's the force picture, and it's fine. But this course lives or dies on a second reading of the *same* equation: **viscosity is how fast momentum diffuses.** When one layer of fluid slides past a slower one, the fast molecules wander into the slow layer and drag it along; the slow ones wander up and hold the fast layer back. Momentum leaks from fast to slow exactly the way heat leaks from hot to cold. Once you see Newton's law of viscosity as a *flux law* — the momentum twin of Fourier and Fick — every shell balance, every boundary layer, and every analogy in the rest of the course is the same machinery reused. This is the mental shift the whole course is built on.

## The idea

Picture two parallel plates with fluid between them ([Couette flow](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md)). Hold the bottom still, drag the top to the right at speed $V$. After things settle, the fluid sits in a stack of layers, each moving a little faster than the one below — top layer at $V$, bottom layer at rest, a straight-line ramp in between.

Now zoom into the molecules. They aren't marching in neat layers; they're jittering in every direction and constantly crossing from one layer into its neighbor. A molecule that hops *down* from a fast layer arrives in a slower layer carrying more forward ($x$) momentum than the locals — it speeds them up. A molecule hopping *up* from a slow layer arrives short on momentum — it slows the fast layer down. Net effect: forward momentum is continuously ferried **downward**, from the fast layers toward the slow ones, by nothing but molecular wandering.

That downward transport of $x$-momentum *is* the shear stress. The force you feel dragging the plate isn't mysterious "friction" — it's the rate at which momentum is being handed down the stack. Big velocity difference across a thin gap → steep gradient → brisk molecular handoff → large stress. That's Newton's law, and it says momentum flows downhill in velocity, just as heat flows downhill in temperature.

## The formal version

**Newton's law of viscosity.** For a fluid sheared so that $v_x$ depends only on $y$,

$$\tau_{yx} = -\mu\,\frac{dv_x}{dy}.$$

Symbols, with units:
- $v_x$ — fluid velocity in the $x$-direction (m/s), varying with height $y$ (m).
- $dv_x/dy$ — the **velocity gradient** or **shear rate** (1/s): how fast velocity ramps with height.
- $\mu$ — the **viscosity** (Pa·s $=$ kg·m⁻¹·s⁻¹): the proportionality constant, the fluid's resistance to shearing.
- $\tau_{yx}$ — read two ways below (Pa $=$ N/m² $=$ kg·m⁻¹·s⁻²).

**Reading (i): shear stress.** $\tau_{yx}$ is the $x$-directed force per unit area that the fluid on the lower-$y$ side exerts on the fluid on the higher-$y$ side (the two subscripts: the *plane* the force acts across has its normal along $y$; the *force* points along $x$). *In words: the tangential drag per area on a surface of constant $y$.* This is the entry $\tau_{yx}$ of the [stress tensor](../../fluid-dynamics/lessons/01-04-stress-tensor.md) you met in fluid dynamics.

**Reading (ii): momentum flux.** Watch the units. Momentum per unit volume in the $x$-direction is $\rho v_x$ (kg·m⁻²·s⁻¹). A *flux* of that quantity — amount crossing unit area per unit time — has units (kg·m⁻²·s⁻¹)(m/s) $=$ kg·m⁻¹·s⁻², **the same as pressure.** So $\tau_{yx}$ is literally the flux of $x$-momentum in the $y$-direction. *In words: $\tau_{yx}$ is how much $x$-momentum crosses a unit area of constant-$y$ plane each second.* Same number, same units, two names.

This snaps into the course's master template, flux $= -(\text{diffusivity})\times\nabla(\text{concentration})$, if we rewrite it with $\mu = \rho\nu$ (constant density):

$$\tau_{yx} = -\nu\,\frac{d(\rho v_x)}{dy}.$$

*In words: the flux of $x$-momentum equals minus a diffusivity times the gradient of momentum concentration $\rho v_x$* — exactly Fourier's $q_y'' = -\alpha\,d(\rho c_p T)/dy$ and Fick's $j_{A,y} = -D_{AB}\,d(\rho\omega_A)/dy$ with a different cargo.

**The minus sign.** Momentum flows from high $v_x$ to low $v_x$ — *down* the gradient, toward slower fluid. Where $dv_x/dy > 0$ (velocity rising with height), the flux is negative: momentum moves in the $-y$ direction, downward. The minus sign is the second law wearing work clothes: transport runs downhill.

**Kinematic viscosity — the momentum diffusivity.** Define

$$\nu \equiv \frac{\mu}{\rho}, \qquad [\nu] = \frac{\text{Pa·s}}{\text{kg/m}^3} = \frac{\mathrm{m^2}}{\mathrm{s}}.$$

Those units — m²/s — are the giveaway. They are *identical* to the thermal diffusivity $\alpha = k/\rho c_p$ and the mass diffusivity $D_{AB}$. $\nu$ answers "how fast does momentum spread out?" in exactly the sense $\alpha$ answers it for heat. This is why it, not $\mu$, is the honest member of the diffusivity trio, and why $Pr = \nu/\alpha$ and $Sc = \nu/D_{AB}$ (next two lessons) are pure numbers.

**The momentum-flux (stress) tensor.** In three dimensions a fluid element is sheared and squeezed on all faces at once, so the single number $\tau_{yx}$ becomes a $3\times3$ array $\boldsymbol\tau$ whose entry $\tau_{ij}$ is the flux of $j$-momentum in the $i$-direction. For a Newtonian fluid each entry is minus a viscosity times a velocity-gradient combination. We only need the one component $\tau_{yx}$ until [2.4](02-04-equation-of-motion-navier-stokes.md), where the full $\boldsymbol\tau$ assembles the Navier–Stokes equations; flag it and move on.

**Newtonian vs non-Newtonian.** A **Newtonian** fluid has $\mu$ *constant* — stress is strictly proportional to shear rate (water, air, most gases and small-molecule liquids). Many real fluids aren't: **shear-thinning** (pseudoplastic — paint, blood, ketchup) get less viscous as you shear them faster; **shear-thickening** (dilatant — cornstarch in water) stiffen; **Bingham plastics** (toothpaste, mayonnaise) don't flow at all until a yield stress is exceeded, then flow. All of these replace the constant $\mu$ with an apparent viscosity $\mu(\dot\gamma)$ that depends on shear rate $\dot\gamma = dv_x/dy$. This course stays Newtonian unless it says otherwise.

## Picture

![Two plates with a linear velocity profile between them; blue arrows show velocity growing with height, a fat coral arrow shows x-momentum being transported downward in the −y direction from fast to slow layers, with τ_yx = −μ dv_x/dy marked as both the shear stress on the plane and the momentum flux through it.](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (drag flow between plates — Couette).** Fluid fills a gap of thickness $b$; the bottom plate is fixed, the top moves at $V$, no pressure gradient. With no other forcing the momentum flux $\tau_{yx}$ is the same at every height (nothing along the way adds or removes momentum — you'll prove this with a shell balance in [2.1](02-01-shell-momentum-balance-falling-film.md)). Constant $\tau_{yx}$ with constant $\mu$ forces $dv_x/dy$ constant, so the profile is a straight line. Applying no-slip at both plates ($v_x=0$ at $y=0$, $v_x=V$ at $y=b$):

$$v_x(y) = V\,\frac{y}{b}, \qquad \frac{dv_x}{dy} = \frac{V}{b}\ (\text{constant}).$$

The momentum flux / shear stress everywhere:

$$\tau_{yx} = -\mu\,\frac{dv_x}{dy} = -\mu\,\frac{V}{b}.$$

Put numbers on it: water, $\mu = 1.0\times10^{-3}$ Pa·s, top plate $V = 0.30$ m/s, gap $b = 2.0$ mm $=2.0\times10^{-3}$ m.

$$|\tau_{yx}| = \mu\,\frac{V}{b} = (1.0\times10^{-3})\,\frac{0.30}{2.0\times10^{-3}} = 0.15\ \text{Pa}.$$

To keep the top plate moving you must push it with $0.15$ N per square meter of plate — that force per area *is* the rate at which $x$-momentum is being fed into the fluid at the top and drained at the bottom into the fixed plate. You inject momentum at the top, it diffuses down the gap, the bottom plate absorbs it. Steady state: what you push in at the top equals what the bottom soaks up. **Units check:** Pa·s × (m/s)/m $=$ Pa·s × s⁻¹ $=$ Pa. ✓ Sign: $dv_x/dy>0$, so $\tau_{yx}<0$ — momentum flux points in $-y$, downward, fast-to-slow, exactly as the picture shows. ✓

**Example 2 ($\nu$ as a diffusivity — air vs water).** The viscosities are $\mu_{\text{air}}\approx1.8\times10^{-5}$ Pa·s and $\mu_{\text{water}}\approx1.0\times10^{-3}$ Pa·s — water is about 55× "thicker." But watch what happens to the *diffusivity* once density enters ($\rho_{\text{air}}\approx1.2$ kg/m³, $\rho_{\text{water}}\approx1000$ kg/m³):

$$\nu_{\text{air}} = \frac{1.8\times10^{-5}}{1.2} \approx 1.5\times10^{-5}\ \mathrm{m^2/s}, \qquad \nu_{\text{water}} = \frac{1.0\times10^{-3}}{1000} = 1.0\times10^{-6}\ \mathrm{m^2/s}.$$

The ranking *flips*: **momentum diffuses about 15× faster through air than through water.** Water carries more momentum per unit volume (it's dense), so a given stress accelerates it more sluggishly; per unit mass, air passes momentum along more readily. To feel what "diffusivity" means, use the diffusion time-scale $t\sim L^2/\nu$ (the momentum twin of the heat penetration $t\sim L^2/\alpha$ from heat-transfer [2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md)). Suddenly start a wall moving; how long before fluid a distance $L=1$ cm away notices?

$$t_{\text{air}} \sim \frac{(0.01)^2}{1.5\times10^{-5}} \approx 6.7\ \text{s}, \qquad t_{\text{water}} \sim \frac{(0.01)^2}{1.0\times10^{-6}} \approx 100\ \text{s}.$$

Momentum's news travels to the 1 cm mark in seconds through air but takes a couple of minutes through water. **Units check:** m²/s matches $\alpha$ and $D_{AB}$ exactly, so $Pr=\nu/\alpha$ and $Sc=\nu/D_{AB}$ come out dimensionless. ✓

## Watch out

- **You might think a high-viscosity fluid diffuses momentum fast.** Backwards — that's confusing $\mu$ with $\nu$. Momentum *diffusivity* is $\nu = \mu/\rho$, and dense liquids like water have small $\nu$ despite large $\mu$. The correct reading of "water is viscous" is "water resists shearing hard," not "momentum spreads quickly in water."
- **You might think the minus sign is a bookkeeping nuisance.** It's the physics. It encodes that momentum (like heat, like mass) flows *down* its gradient, from fast to slow. Drop it and you've written a fluid that spontaneously sharpens velocity differences — a perpetual-motion machine.
- **You might read $\tau_{yx}$ as "the stress" and stop there.** In this course it is equally "the flux of $x$-momentum in $y$." Holding both readings at once is the entire point of Module 1 — it's what lets you copy every heat-transfer result into a momentum result and vice versa.

## One-liner

> Shear stress *is* a flux of momentum: $\tau_{yx}=-\mu\,dv_x/dy$ says $x$-momentum diffuses down the velocity gradient with diffusivity $\nu=\mu/\rho$, exactly as heat diffuses down a temperature gradient with $\alpha$.

## Problems

**P1 (🟢)** Glycerin ($\mu = 1.5$ Pa·s, $\rho = 1260$ kg/m³) fills a $1.0$ mm gap between two plates; the top plate moves at $0.20$ m/s, the bottom is fixed, no pressure gradient. (a) Find the shear stress $\tau_{yx}$, including its sign, and the force per area needed to move the top plate. (b) Find the kinematic viscosity $\nu$ and compare it to water's $\nu\approx1.0\times10^{-6}$ m²/s — does momentum diffuse faster in glycerin or water?

**P2 (🟡)** A fluid between plates has the velocity profile $v_x(y) = V\big[1 - (1 - y/b)^2\big]$ for $0\le y\le b$ (curved, not linear). (a) Compute $\tau_{yx}(y)$. (b) Where in the gap is the momentum flux largest in magnitude, and where does it vanish? (c) In one sentence, interpret the location of zero flux physically.

**P3 (🔴, optional)** The air over a lake surface is dragged along by wind; near the surface the profile is roughly $v_x(y) = A\sqrt{y}$ (with $y$ the height above the surface, $A$ a constant). Air: $\mu = 1.8\times10^{-5}$ Pa·s. (a) Find $\tau_{yx}(y)$ and note whether the momentum flux grows or shrinks with height. (b) The flux you found blows up as $y\to0$. What does that tell you about whether this profile can be physically valid *all the way down* to the surface?

<details>
<summary>Solutions</summary>

**P1.** (a) Linear drag flow, so $dv_x/dy = V/b = 0.20/(1.0\times10^{-3}) = 200\ \mathrm{s^{-1}}$ (constant).
$$\tau_{yx} = -\mu\frac{dv_x}{dy} = -(1.5)(200) = -300\ \text{Pa}.$$
The sign is negative: momentum flux points in $-y$ (down toward the fixed plate), as expected. The force per area to move the plate is the magnitude, $|\tau_{yx}| = 300$ Pa. (Units: Pa·s × s⁻¹ = Pa. ✓)
(b) $\nu = \mu/\rho = 1.5/1260 \approx 1.2\times10^{-3}\ \mathrm{m^2/s}$. That's about $1200\times$ larger than water's $1.0\times10^{-6}$ m²/s, so **momentum diffuses far faster in glycerin** — even though glycerin is enormously "thicker" ($\mu$ is 1500× water's), it's only ~1.3× denser, so the diffusivity $\nu=\mu/\rho$ is dominated by the huge $\mu$. Good reminder that "viscous" (large $\mu$) and "spreads momentum fast" (large $\nu$) are different statements.

**P2.** (a) $\dfrac{dv_x}{dy} = V\cdot\dfrac{d}{dy}\big[1-(1-y/b)^2\big] = V\cdot\big[-2(1-y/b)\cdot(-1/b)\big] = \dfrac{2V}{b}\Big(1-\dfrac{y}{b}\Big).$
$$\tau_{yx}(y) = -\mu\frac{dv_x}{dy} = -\frac{2\mu V}{b}\Big(1 - \frac{y}{b}\Big).$$
(b) The magnitude $\frac{2\mu V}{b}(1-y/b)$ is **largest at $y=0$** (the fixed bottom plate), where it equals $2\mu V/b$, and **vanishes at $y=b$** (the top). (c) Zero flux at the top means no $x$-momentum crosses that plane — the velocity gradient is flat there ($dv_x/dy=0$, the profile has levelled off), so neighboring layers move at the same speed and have nothing to hand each other. Physically this is a free/shear-free surface: the moving boundary imposes velocity but no drag.

**P3.** (a) $\dfrac{dv_x}{dy} = A\cdot\dfrac{d}{dy}\big(y^{1/2}\big) = \dfrac{A}{2\sqrt{y}}.$
$$\tau_{yx}(y) = -\mu\frac{dv_x}{dy} = -\frac{\mu A}{2\sqrt{y}}.$$
The magnitude $\propto 1/\sqrt{y}$ **shrinks with height** — momentum flux is intense near the surface and fades upward. (b) As $y\to0$, $\tau_{yx}\to-\infty$: the model predicts an infinite momentum flux (infinite drag per area) right at the surface, which is unphysical — no finite wind can transmit infinite stress. So $v_x = A\sqrt y$ cannot hold all the way to $y=0$; it's a decent fit for the outer region but must break down in a thin layer next to the surface where a different (finite-gradient) profile takes over. That thin near-wall region is a preview of the **momentum boundary layer** ([3.2](03-02-momentum-boundary-layer.md); fluid-dynamics [3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md)).

</details>

## Connections

- **Backward:** this is the momentum instance of the master flux law from [1.1](01-01-one-flux-law-three-transports.md); the force reading of $\tau_{yx}$ and the tensor $\boldsymbol\tau$ are the [stress tensor](../../fluid-dynamics/lessons/01-04-stress-tensor.md) and [Couette flow](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md) from fluid dynamics, re-read as transport.
- **Forward:** [1.3](01-03-heat-mass-fluxes-fourier-fick.md) writes Fourier and Fick in this exact mold; [1.4](01-04-transport-properties-kinetic-theory.md) derives $\mu$ (hence $\nu$) from molecular mean-free-path arguments; [1.5](01-05-three-diffusivities-pr-sc-le.md) compares $\nu,\alpha,D_{AB}$ through $Pr$, $Sc$, $Le$. The constant-flux argument here becomes the [2.1](02-01-shell-momentum-balance-falling-film.md) shell balance, and $\tau_{yx}$'s full tensor form drives [Navier–Stokes](02-04-equation-of-motion-navier-stokes.md).
- **Sideways:** $\nu$ (m²/s) is the momentum twin of heat's $\alpha=k/\rho c_p$ ([heat-transfer 1.1](../../heat-transfer/lessons/01-01-three-modes-fouriers-law.md)) — the penetration time $t\sim L^2/\nu$ is the momentum copy of the thermal penetration depth in [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md).

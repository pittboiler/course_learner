# Transport Phenomena · Lesson 2.1: Shell momentum balances — the recipe

> ⏱ ~15 min · Module 2: Shell balances and the equations of change · Builds on: [1.2 Momentum transport and Newton's law of viscosity](01-02-momentum-transport-newton-viscosity.md), [`fluid-dynamics` 3.2 Couette and Poiseuille flow](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md) · Unlocks: [2.2 Shell balances in tubes and annuli](02-02-shell-balances-tube-annulus.md), and the full equations of change (2.3–2.6, which are just this recipe in the limit)

## Why this matters

Module 1 gave you a flux law: momentum diffuses down a velocity gradient, $\tau_{yz}=-\mu\,dv_z/dy$. But a flux law alone doesn't tell you the velocity profile — for that you need a **balance**: a bookkeeping statement that momentum is conserved. This lesson is the master method of the whole module. Learn to draw one thin shell, tally what flows in and out, set it against the forces, and shrink the shell — and out drops a differential equation you can integrate by hand. It's how the falling film in a wetted-wall absorber, the flow in a capillary, and the drag on a fiber all get solved. And it's the *same* bookkeeping you'll use in Lesson 2.5 for heat (energy in − out + generation) and in 2.6 for mass. One recipe, three transports. Do it once here, slowly, and the rest of the course is variations.

## The idea

Picture a river of syrup running down a tilted glass plate. It doesn't accelerate forever — gravity pulls it down, but viscosity (the plate gripping the layer touching it, that layer gripping the next) holds it back, and the two settle into a steady balance. At every depth the flow is constant in time. That "constant in time" is the whole trick: at **steady state**, whatever momentum flows into any chunk of fluid must flow right back out, because nothing is piling up.

So take a thin slab of the fluid — a **shell** — and be an accountant. Momentum enters and leaves the shell two ways: **carried by the flow** (fluid physically streams in one face and out another — convection), and **transmitted by viscosity** (neighboring layers shear past and drag on the shell's faces — the $\tau$ flux from [1.2](01-02-momentum-transport-newton-viscosity.md)). Then there are **body/surface forces**: gravity, pressure. At steady state the ledger must balance to zero:

$$\text{(momentum in)} - \text{(momentum out)} + \text{(sum of forces)} = 0.$$

Divide the whole ledger by the shell's volume, let the shell get infinitely thin, and the difference quotient becomes a derivative. You get a first-order ODE for the **flux** $\tau$. Integrate once (one boundary condition) to get $\tau$; plug in Newton's law $\tau=-\mu\,dv/dy$ to turn it into a first-order ODE for $v$; integrate again (a second boundary condition) to get the velocity profile. Two integrations, two boundary conditions, done.

## The formal version — the recipe

For a **steady, laminar, fully developed, incompressible** flow in one direction, pick the coordinate $y$ across which the velocity changes and follow five steps.

1. **Choose the shell.** A slab perpendicular to $y$: thin in $y$ (thickness $\Delta y$), spanning the full extent $L$ and width $W$ in the other directions. Its volume is $LW\,\Delta y$.

2. **Write the momentum balance.** Over the shell, at steady state,
$$\big(\text{rate of momentum in}\big) - \big(\text{rate of momentum out}\big) + \sum \big(\text{forces}\big) = 0.$$
*In words: no accumulation, so inflow plus the push from forces must equal outflow.* Momentum enters/leaves by **convection** (flow carrying $\rho v_z$) across the inlet/outlet, and by **viscous flux** $\tau_{yz}$ across the faces at $y$ and $y+\Delta y$. Each rate is (a flux) × (the area it crosses). Because the flow is fully developed, $v_z$ is identical at inlet and outlet, so the two convective terms are equal and cancel — the viscous term and the forces carry the balance.

3. **Divide by the shell volume and take $\Delta y\to0$.** The terms at $y$ and $y+\Delta y$ become a difference quotient; in the limit it's a derivative. You get a first-order ODE for the momentum flux, of the generic form
$$\frac{d\tau_{yz}}{dy} = \text{(net driving force per unit volume)}.$$
*In words: the flux gradient equals the force density that drives the flow.*

4. **Insert Newton's law of viscosity** $\tau_{yz}=-\mu\,\dfrac{dv_z}{dy}$ (from [1.2](01-02-momentum-transport-newton-viscosity.md)). The first-order ODE for $\tau$ becomes a **second-order ODE for $v_z$**.

5. **Apply two boundary conditions** and integrate. The usual menu: **no-slip** at a solid wall ($v_z=0$ there), **zero shear** ($\tau=0$, i.e. $dv_z/dy=0$) at a free liquid–gas surface, **continuity of $v$ and $\tau$** at a liquid–liquid interface, and **symmetry** ($dv_z/dy=0$) at a centerline.

Here $\mu$ is the viscosity ($\mathrm{Pa\cdot s}$), $\rho$ the density ($\mathrm{kg/m^3}$), $v_z$ the velocity ($\mathrm{m/s}$), $\tau_{yz}$ the momentum flux / shear stress ($\mathrm{Pa}$), and $g$ gravity ($\mathrm{9.81\ m/s^2}$).

## Picture

![Left: a liquid film of thickness delta running down a plane inclined at angle beta, with the thin shell control volume, gravity, and flow direction marked. Right: the parabolic velocity profile v_z(y), zero-slope (zero shear) at the free surface and zero (no-slip) at the wall.](assets/02-01-fig1.svg)

## Worked examples

**Example 1 — the falling film, start to finish.** A liquid film of constant thickness $\delta$ (m) runs steadily down a flat plate tilted at angle $\beta$ *from the vertical*, so the component of gravity along the plate is $g\cos\beta$. Let $z$ point down the slope and $y$ be the distance **measured from the free surface** into the film, so $y=0$ is the gas–liquid surface and $y=\delta$ is the wall. Find $v_z(y)$.

*Shell.* A slab of thickness $\Delta y$, length $L$ down the slope, width $W$. Volume $LW\,\Delta y$.

*Balance.* Convection in at $z=0$ equals convection out at $z=L$ (fully developed — same profile), so they cancel. What's left is the viscous flux across the faces at $y$ and $y+\Delta y$, plus gravity:
$$\underbrace{(LW)\,\tau_{yz}\big|_{y}}_{\text{in at }y} - \underbrace{(LW)\,\tau_{yz}\big|_{y+\Delta y}}_{\text{out at }y+\Delta y} + \underbrace{(LW\,\Delta y)\,\rho g\cos\beta}_{\text{gravity along }z} = 0.$$

*Divide by $LW\,\Delta y$ and let $\Delta y\to0$:*
$$-\frac{\tau_{yz}\big|_{y+\Delta y}-\tau_{yz}\big|_{y}}{\Delta y} + \rho g\cos\beta = 0 \;\;\xrightarrow{\;\Delta y\to0\;}\;\; \boxed{\frac{d\tau_{yz}}{dy}=\rho g\cos\beta.}$$
*In words: the shear stress climbs linearly as you go deeper, because each layer must support the weight of all the fluid above it.* Integrate: $\tau_{yz}=\rho g\cos\beta\,y + C_1$. At the **free surface** $y=0$ the gas exerts negligible shear, so $\tau_{yz}=0$, giving $C_1=0$:
$$\tau_{yz}=\rho g\cos\beta\,y \quad(\text{linear in }y).$$

*Insert Newton's law* $\tau_{yz}=-\mu\,dv_z/dy$. Since $v_z$ falls as $y$ grows (fastest at the surface, zero at the wall), $dv_z/dy<0$ and the sign works out:
$$-\mu\frac{dv_z}{dy}=\rho g\cos\beta\,y \;\Longrightarrow\; \frac{dv_z}{dy}=-\frac{\rho g\cos\beta}{\mu}\,y.$$
Integrate: $v_z=-\dfrac{\rho g\cos\beta}{2\mu}y^2 + C_2$. Apply **no-slip** at the wall, $v_z(\delta)=0$: $C_2=\dfrac{\rho g\cos\beta}{2\mu}\delta^2$. Hence
$$\boxed{\,v_z(y)=\frac{\rho g\cos\beta\,\delta^2}{2\mu}\left[1-\left(\frac{y}{\delta}\right)^2\right]\,}$$
— a **parabola**, flat-topped at the free surface (zero slope = zero shear, exactly the BC we imposed) and pinned to zero at the wall.

Now read off the three numbers everyone wants:
- **Maximum velocity**, at the free surface $y=0$: $\displaystyle v_{\max}=\frac{\rho g\cos\beta\,\delta^2}{2\mu}.$
- **Average velocity**: $\displaystyle \langle v\rangle=\frac1\delta\int_0^\delta v_z\,dy=\frac{\rho g\cos\beta}{2\mu\,\delta}\Big[\delta^2 y-\tfrac{y^3}{3}\Big]_0^\delta=\frac{\rho g\cos\beta\,\delta^2}{3\mu}=\tfrac23\,v_{\max}.$
- **Volumetric flow per unit width**: $\displaystyle \frac{Q}{W}=\langle v\rangle\,\delta=\frac{\rho g\cos\beta\,\delta^3}{3\mu}.$

*Numeric plug-in (water film on a vertical wall).* Water at 25 °C: $\rho=1000\ \mathrm{kg/m^3}$, $\mu=1.0\times10^{-3}\ \mathrm{Pa\cdot s}$. Vertical wall $\Rightarrow\beta=0$, $\cos\beta=1$. Take $\delta=0.10\ \mathrm{mm}=1.0\times10^{-4}\ \mathrm{m}$:
$$v_{\max}=\frac{(1000)(9.81)(1.0\times10^{-4})^2}{2(1.0\times10^{-3})}=0.049\ \mathrm{m/s},\quad \langle v\rangle=\tfrac23 v_{\max}=0.033\ \mathrm{m/s},$$
$$\frac{Q}{W}=\frac{(1000)(9.81)(1.0\times10^{-4})^3}{3(1.0\times10^{-3})}=3.3\times10^{-6}\ \mathrm{m^2/s}.$$
*Check.* Units of $v_{\max}$: $\dfrac{(\mathrm{kg/m^3})(\mathrm{m/s^2})(\mathrm{m^2})}{\mathrm{Pa\cdot s}}=\dfrac{\mathrm{kg/(m\,s^2)}}{\mathrm{kg/(m\,s)}}=\mathrm{m/s}$ ✓ (used $\mathrm{Pa}=\mathrm{kg/(m\,s^2)}$). Is it laminar? The film Reynolds number $Re=4\rho\,(Q/W)/\mu=4(1000)(3.3\times10^{-6})/(10^{-3})\approx13$, well under the $\approx20$–25 for smooth laminar film flow, so the derivation holds. ✓

**Example 2 — inverting for the film thickness (a design use).** A wetted-wall column runs water down a vertical wall to absorb a gas. You need a smooth laminar film and you set the liquid feed at $Q/W=5.0\times10^{-6}\ \mathrm{m^2/s}$. How thick is the resulting film?

Solve the $Q/W$ formula for $\delta$ (vertical wall, $\cos\beta=1$):
$$\delta=\left[\frac{3\mu\,(Q/W)}{\rho g}\right]^{1/3}=\left[\frac{3(1.0\times10^{-3})(5.0\times10^{-6})}{(1000)(9.81)}\right]^{1/3}=\big(1.53\times10^{-12}\big)^{1/3}\ \mathrm{m}.$$
$$\delta\approx1.15\times10^{-4}\ \mathrm{m}=0.115\ \mathrm{mm}.$$
*Check.* Units: $\big[(\mathrm{Pa\cdot s})(\mathrm{m^2/s})/((\mathrm{kg/m^3})(\mathrm{m/s^2}))\big]^{1/3}=[\mathrm{m^3}]^{1/3}=\mathrm{m}$ ✓. Sanity: $Re=4\rho(Q/W)/\mu=4(1000)(5.0\times10^{-6})/10^{-3}=20$, right at the smooth-laminar boundary — consistent with wanting a well-behaved film. Note the cube-root sensitivity: the thickness scales as $(Q/W)^{1/3}$, so doubling the feed thickens the film only about 26%. This is exactly why the $\delta^3$ law is worth carrying around — flow rate is a *stiff* lever on thickness.

## Watch out

- **You might think the convective terms always cancel.** They cancel here only because the flow is *fully developed* — the same $v_z(y)$ at inlet and outlet. In an entrance region, or where the cross-section changes, convection in $\neq$ convection out and you cannot drop those terms. Shell balances live on the "fully developed, one-directional" assumption; check it before you cancel.
- **You might put no-slip at the free surface.** No — a free liquid surface against gas has almost no one to grip, so the condition there is **zero shear** ($\tau=0$, hence $dv_z/dy=0$, the flat top of the parabola), not $v=0$. No-slip belongs at the *solid wall*. Swapping the two BCs gives a profile that's fast at the wall and stuck at the surface — physically backwards.
- **You might lose the sign in Newton's law.** With $y$ measured from the free surface, velocity *decreases* into the film, so $dv_z/dy<0$; the minus sign in $\tau=-\mu\,dv_z/dy$ makes $\tau>0$, matching the downhill-positive stress from gravity. If your $\tau$ comes out negative where physics says positive, re-examine which way your coordinate points.

## One-liner

> Draw a thin shell, balance momentum-in against momentum-out plus forces at steady state, shrink the shell to get $d\tau/dy=$ (force density), then feed in $\tau=-\mu\,dv/dy$ and integrate twice — the falling film's parabola falls right out.

## Problems

**P1 (🟢)** For the falling film of Example 1, at what depth $y$ (as a fraction of $\delta$) is the local velocity equal to the *average* velocity $\langle v\rangle$? (Use $\langle v\rangle=\tfrac23 v_{\max}$.)

**P2 (🟡)** Glycerin ($\rho=1260\ \mathrm{kg/m^3}$, $\mu=1.0\ \mathrm{Pa\cdot s}$) flows as a film $\delta=2.0\ \mathrm{mm}$ thick down a plate tilted $\beta=30^\circ$ from the vertical. Find $\langle v\rangle$ and the flow per width $Q/W$. Then confirm the film is laminar via $Re=4\rho(Q/W)/\mu$.

**P3 (🔴)** Redo the shell balance for a film running down a **vertical wall** but now driven partly by an external gas that drags the free surface downward with a known shear stress $\tau_0>0$ (so the surface BC is $\tau_{yz}(0)=\tau_0$ instead of $0$; keep no-slip at the wall). Find $v_z(y)$ and show it reduces to Example 1's result when $\tau_0=0$.

<details>
<summary>Solutions</summary>

**P1** Set $v_z(y)=\langle v\rangle=\tfrac23 v_{\max}$ with $v_z=v_{\max}[1-(y/\delta)^2]$:
$$1-\left(\frac{y}{\delta}\right)^2=\frac23 \;\Longrightarrow\; \left(\frac{y}{\delta}\right)^2=\frac13 \;\Longrightarrow\; \frac{y}{\delta}=\frac{1}{\sqrt3}\approx0.577.$$
So the fluid moves at exactly the average speed about 58% of the way down from the free surface. *Check:* $0<0.577<1$, i.e. somewhere inside the film, between the fast surface and the stuck wall — as it must be. ✓

**P2** With $\cos30^\circ=0.8660$, $\delta=2.0\times10^{-3}\ \mathrm{m}$:
$$\langle v\rangle=\frac{\rho g\cos\beta\,\delta^2}{3\mu}=\frac{(1260)(9.81)(0.8660)(2.0\times10^{-3})^2}{3(1.0)}=\frac{(1260)(9.81)(0.8660)(4.0\times10^{-6})}{3}.$$
Numerator $=1260\times9.81=12{,}361$; $\times0.8660=10{,}704$; $\times4.0\times10^{-6}=0.04282$. Divide by 3: $\langle v\rangle\approx0.0143\ \mathrm{m/s}=1.43\ \mathrm{cm/s}$.
$$\frac{Q}{W}=\langle v\rangle\,\delta=(0.0143)(2.0\times10^{-3})=2.86\times10^{-5}\ \mathrm{m^2/s}.$$
$$Re=\frac{4\rho(Q/W)}{\mu}=\frac{4(1260)(2.86\times10^{-5})}{1.0}=0.144.$$
*Check:* $Re\approx0.14\ll20$ — deeply laminar (glycerin's huge $\mu$ makes it crawl), so the parabolic result is valid. Units of $Q/W$: $(\mathrm{m/s})(\mathrm{m})=\mathrm{m^2/s}$ ✓. ✓

**P3** Same shell balance, vertical wall ($\cos\beta=1$): $\dfrac{d\tau_{yz}}{dy}=\rho g$, so $\tau_{yz}=\rho g\,y+C_1$. Surface BC $\tau_{yz}(0)=\tau_0$ gives $C_1=\tau_0$:
$$\tau_{yz}=\rho g\,y+\tau_0.$$
Newton's law $-\mu\,dv_z/dy=\rho g\,y+\tau_0$:
$$\frac{dv_z}{dy}=-\frac{\rho g}{\mu}y-\frac{\tau_0}{\mu}\;\Longrightarrow\; v_z=-\frac{\rho g}{2\mu}y^2-\frac{\tau_0}{\mu}y+C_2.$$
No-slip $v_z(\delta)=0$: $C_2=\dfrac{\rho g}{2\mu}\delta^2+\dfrac{\tau_0}{\mu}\delta$. Therefore
$$v_z(y)=\frac{\rho g\,\delta^2}{2\mu}\left[1-\left(\frac{y}{\delta}\right)^2\right]+\frac{\tau_0\,\delta}{\mu}\left[1-\frac{y}{\delta}\right].$$
*Check:* setting $\tau_0=0$ kills the second term and recovers Example 1's parabola exactly. ✓ The added term is *linear* in $y$ — precisely a Couette-type shear contribution from the interfacial drag, superposed on the gravity parabola (superposition works because the ODE is linear). This is the same gravity-parabola-plus-linear-shear split you saw in [`fluid-dynamics` 3.2](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md). ✓

</details>

## Flashback

**From Lesson 1.4 (Transport properties from kinetic theory):** A dilute gas is heated from 300 K to 600 K at constant pressure. By what factor does its viscosity change? And if instead you compress it to double the pressure at fixed temperature, what happens to $\mu$?

<details>
<summary>Solution</summary>

Kinetic theory of hard spheres gives $\mu\approx\tfrac13\rho\bar c\lambda$. The pressure-dependence cancels: density $\rho\propto P$ but mean free path $\lambda\propto1/P$ (a denser gas has more collisions), so their product is **pressure-independent**. The temperature-dependence survives through the mean speed $\bar c=\sqrt{8k_BT/\pi m}\propto\sqrt T$, giving
$$\mu\propto\sqrt T,\qquad \mu\ \text{independent of }P.$$
Heating $300\to600$ K: $\mu$ grows by $\sqrt{600/300}=\sqrt2\approx1.41$. Doubling the pressure at fixed $T$: **no change**. *Check:* this is the famously counterintuitive result — a gas's viscosity *rises* with temperature (opposite to a liquid) and ignores pressure entirely, both confirmed experimentally over wide ranges. It's why $\mu$ for the falling-film problem above (a liquid) behaves so differently from a gas. ✓

</details>

## Connections

- **Backward:** the balance runs on the momentum flux $\tau_{yz}=-\mu\,dv_z/dy$ from [1.2](01-02-momentum-transport-newton-viscosity.md) — the shell is just the conservation law that flux was waiting for. The falling-film parabola is a cousin of the pressure-driven parabola in [`fluid-dynamics` 3.2](../../fluid-dynamics/lessons/03-02-couette-poiseuille.md); there the driving "force density" is a pressure gradient $-dp/dz$ instead of gravity $\rho g\cos\beta$, and the free-surface BC becomes a centerline-symmetry BC.
- **Forward:** [2.2](02-02-shell-balances-tube-annulus.md) runs the identical recipe in cylindrical shells (tube and annulus) to get Hagen–Poiseuille flow. Taking the shell limit in *all three* directions at once, rather than one, gives the full **equation of motion** (Navier–Stokes) in [2.4](02-04-equation-of-motion-navier-stokes.md) — the differential equations of 2.3–2.6 are literally this lesson's thin-shell limit generalized.
- **Sideways (the grand analogy):** the very same "in − out + source = 0 over a thin shell, then take the limit" bookkeeping produces the **heat equation** in [2.5](02-05-energy-equation-of-change.md) (replace momentum flux $\tau$ with heat flux $q''=-k\,dT/dy$) and the **species equation** in [2.6](02-06-species-continuity-equation.md) (replace it with molar flux $J_A^*=-cD_{AB}\,dx_A/dy$). Momentum, heat, and mass are one accounting problem with three different fluxes — and this lesson is where you learned to keep the books.

# Aerodynamics · Lesson 4.6: Subsonic compressibility and the transonic barrier

> ⏱ ~15 min · Module 4: Compressible and supersonic flow · Builds on: [4.2 Isentropic and stagnation relations](04-02-isentropic-stagnation-relations.md), [2.3 The symmetric thin airfoil](02-03-symmetric-thin-airfoil.md) · Unlocks: [4.7 Supersonic airfoils, wave drag, and wing sweep](04-07-supersonic-airfoils-wave-drag-sweep.md)

## Why this matters

Modules 1–3 built an incompressible theory of wings. Module 4 has so far built a compressible theory of ducts and shocks. **This lesson joins them**, and the joining place is exactly where every airliner in the world flies.

Two results come out. The **Prandtl–Glauert rule** corrects incompressible airfoil results for Mach number with a single factor $1/\sqrt{1-M_\infty^2}$ — so all of Module 2 remains usable up to about $M = 0.7$. And the **critical Mach number** identifies where that correction dies: the flight Mach number at which the flow somewhere on the wing first reaches $M = 1$.

**Just above $M_{cr}$, drag rises catastrophically.** A supersonic pocket forms on the upper surface, terminated by a shock; the shock destroys stagnation pressure and its adverse gradient separates the boundary layer. Between $M = 0.75$ and $M = 0.85$ an unswept 1940s wing could see its drag coefficient quadruple. **That was the "sound barrier"** — not a wall in the air, but a drag rise steep enough that no propeller aircraft could push through it.

Three inventions defeated it, and all three are still on every airliner: **wing sweep**, the **supercritical airfoil**, and the **area rule**.

## The idea

**Compressibility amplifies whatever the incompressible flow was already doing.** Where an incompressible flow speeds up, the density falls; falling density means the flow must speed up *further* to pass the same mass. The effect is self-reinforcing, and linearized theory says the amplification factor is exactly $1/\sqrt{1-M_\infty^2}$.

**So suction peaks get deeper and lift gets larger, by the same factor.** $C_p$, $c_l$, and $dc_l/d\alpha$ are all multiplied by $1/\beta$ where $\beta = \sqrt{1-M_\infty^2}$. **At $M = 0.6$ that is a 25% increase; at $M = 0.8$, 67%.**

**And the factor blows up at $M = 1$**, which is the theory announcing its own failure. Linearized theory assumes small perturbations; near $M = 1$ the perturbations are not small, and the equation type changes from elliptic to hyperbolic.

**Long before that, the local flow goes sonic.** The free stream may be at $M = 0.7$ while the flow over the suction peak is at $M = 1.0$. **That flight Mach number is $M_{cr}$**, the critical Mach number, and it is found by asking when the amplified $C_p$ peak reaches the value that corresponds to sonic flow.

**Past $M_{cr}$ a supersonic pocket grows on the wing.** It is a converging–diverging nozzle in disguise: the airfoil's curvature is the throat, the flow accelerates past $M = 1$, and it must return to subsonic before the trailing edge. **It does so through a shock** — the same normal shock as [4.3](04-03-normal-shock-waves.md), standing on the wing.

**The shock is doubly expensive.** It destroys stagnation pressure directly (wave drag), and its pressure jump is a severe adverse gradient that separates the boundary layer behind it (shock-induced separation, and with it a large pressure drag). **The two together produce the drag-divergence rise.**

**Every fix works by delaying $M_{cr}$ or weakening the shock.** Sweep the wing so the component of flow normal to it is slower; reshape the airfoil so the suction is spread out rather than peaked; reshape the *fuselage* so the whole aircraft's cross-sectional area varies smoothly.

## The formal version

**Prandtl–Glauert rule.**

$$\boxed{\;C_p = \frac{C_{p,0}}{\sqrt{1-M_\infty^2}}, \qquad c_l = \frac{c_{l,0}}{\sqrt{1-M_\infty^2}}, \qquad \frac{dc_l}{d\alpha} = \frac{2\pi}{\sqrt{1-M_\infty^2}},\;}$$

where subscript 0 denotes the incompressible value. *In words: compressibility multiplies every pressure and force coefficient by the same factor.*

| $M_\infty$ | $\beta = \sqrt{1-M_\infty^2}$ | $1/\beta$ |
|---|---|---|
| 0.3 | 0.9539 | 1.048 |
| 0.5 | 0.8660 | 1.155 |
| 0.6 | 0.8000 | 1.250 |
| 0.7 | 0.7141 | 1.400 |
| 0.8 | 0.6000 | 1.667 |

**Validity:** thin airfoils, small angles, attached flow, and $M_\infty\lesssim0.7$ — and always below $M_{cr}$. Above about $M = 0.7$ the more accurate **Karman–Tsien** or **Laitone** corrections are used; all of them diverge at $M = 1$.

**Note what is *not* corrected.** $\alpha_{L=0}$ and the aerodynamic-centre location are unchanged by Prandtl–Glauert, since both are ratios in which the factor cancels. **Compressibility changes the lift, not where it acts** — until shocks appear, at which point the aerodynamic centre moves sharply aft ([4.7](04-07-supersonic-airfoils-wave-drag-sweep.md)).

**Critical pressure coefficient.** The value of $C_p$ corresponding to local sonic flow, from the isentropic relations of [4.2](04-02-isentropic-stagnation-relations.md):

$$\boxed{\;C_{p,\rm crit} = \frac{2}{\gamma M_\infty^2}\left[\left(\frac{1+\frac{\gamma-1}{2}M_\infty^2}{1+\frac{\gamma-1}{2}}\right)^{\frac{\gamma}{\gamma-1}}-1\right].\;}$$

| $M_\infty$ | $C_{p,\rm crit}$ |
|---|---|
| 0.5 | $-2.133$ |
| 0.6 | $-1.294$ |
| 0.7 | $-0.779$ |
| 0.8 | $-0.435$ |
| 1.0 | 0 |

**Critical Mach number.** $M_{cr}$ is the $M_\infty$ at which the Prandtl–Glauert-corrected minimum pressure coefficient equals $C_{p,\rm crit}$:

$$\boxed{\;\frac{C_{p,0,\min}}{\sqrt{1-M_{cr}^2}} = C_{p,\rm crit}\left(M_{cr}\right).\;}$$

Solve by iteration or graphically. Typical results:

| $C_{p,0,\min}$ (low-speed) | $M_{cr}$ |
|---|---|
| $-0.3$ | 0.784 |
| $-0.4$ | 0.747 |
| $-0.5$ | 0.716 |
| $-0.6$ | 0.689 |
| $-0.8$ | 0.643 |
| $-1.2$ | 0.575 |

**A thinner, less heavily loaded airfoil has a shallower suction peak and hence a higher $M_{cr}$.**

**Drag divergence.**

$$\boxed{\;M_{dd}\approx M_{cr}+0.05\ \text{to}\ 0.10,\;}$$

conventionally defined as the Mach number at which $dC_D/dM = 0.1$, or where $C_D$ has risen $0.002$ above its subsonic value.

**The three fixes.**

**Wing sweep.** Only the velocity component normal to the leading edge governs the pressure distribution, so

$$\boxed{\;M_{cr,\rm swept}\approx\frac{M_{cr,\rm unswept}}{\cos\Lambda}.\;}$$

**Supercritical airfoil.** A flattened upper surface spreads the suction over a long, nearly constant plateau rather than a peak, and an aft-loaded, cambered rear recovers the lift. This does not raise $M_{cr}$ much — it makes the *supersonic pocket weaker*, so the terminating shock is milder and $M_{dd}$ is pushed up by roughly 0.05–0.10 for the same thickness. **Equivalently, it allows a thicker wing at the same $M_{dd}$**, which is lighter and holds more fuel.

**Area rule.** Transonic wave drag depends on the *whole aircraft's* cross-sectional area distribution $A(x)$, not on components separately. Making $A(x)$ vary smoothly — by waisting the fuselage where the wing joins — can cut transonic drag by a quarter or more.

## Picture

![A two-panel figure. Left panel: the critical Mach number construction, plotting pressure coefficient against free-stream Mach number. A rising family of curves shows the Prandtl-Glauert amplification of three different low-speed minimum pressure coefficients, minus 0.4, minus 0.6, and minus 0.8, each becoming more negative as Mach number rises and diverging toward the right edge; crossing them is the single critical pressure coefficient curve, which starts steeply negative at low Mach number and rises to zero at Mach one. Three dots mark the intersections, labelled with their critical Mach numbers 0.75, 0.69, and 0.64, with the annotation the flatter the suction peak, the later the flow goes sonic. Right panel: drag coefficient plotted against free-stream Mach number for three wings, all flat and low until they rise. The first, labelled unswept conventional airfoil, stays flat to about Mach 0.72 then rises steeply. The second, labelled supercritical airfoil, holds flat to about Mach 0.80 before rising. The third, labelled swept plus supercritical, holds to about Mach 0.87. Small inset sketches above the curves show the airfoil upper surface at three conditions: attached subsonic flow, a small supersonic pocket closed by a weak shock, and a large pocket closed by a strong shock with the boundary layer separating behind it.](assets/04-06-fig1.svg)

Left: how $M_{cr}$ is found — where the amplified suction peak meets the sonic threshold.

Right: the drag-divergence curve, and what the three transonic inventions buy. The horizontal shift from the first curve to the third is roughly 0.15 in Mach number, which is the difference between a 1945 aircraft and a 1970 one.

## Worked examples

**Example 1 (finding a wing's critical Mach number).** An airfoil section has a measured low-speed minimum pressure coefficient of $C_{p,0,\min} = -0.60$.

*Set up the crossing condition.*

$$\frac{-0.60}{\sqrt{1-M^2}} = \frac{2}{1.4M^2}\left[\left(\frac{1+0.2M^2}{1.2}\right)^{3.5}-1\right].$$

*Iterate.*

| $M$ | Left side (PG) | Right side ($C_{p,\rm crit}$) |
|---|---|---|
| 0.60 | $-0.750$ | $-1.294$ |
| 0.70 | $-0.840$ | $-0.779$ |
| 0.68 | $-0.818$ | $-0.865$ |
| 0.689 | $-0.828$ | $-0.826$ |

$$\boxed{M_{cr} = 0.689.}$$

**At $M_\infty = 0.689$, the flow at the suction peak first touches $M = 1$**, with a local $C_p$ of $-0.827$.

*Drag divergence.*

$$M_{dd}\approx0.689+0.06\approx0.75.$$

**This section cannot be flown above about $M = 0.75$ without a serious drag penalty** — which is exactly the limit that trapped late-1940s aircraft.

*Now thin the airfoil.* Reducing the thickness reduces the suction peak. Suppose $C_{p,0,\min}$ falls from $-0.60$ to $-0.40$:

$$M_{cr}: 0.689\to0.747, \qquad M_{dd}\approx0.81.$$

**A 0.06 gain in $M_{dd}$**, and it is worth having — but at the cost of a thinner wing, which is heavier for the same strength and holds less fuel.

*And the sensitivity is worth noting.* Going from $C_{p,0,\min} = -0.3$ to $-1.2$ — a factor of four in suction peak — moves $M_{cr}$ only from 0.784 to 0.575. **$M_{cr}$ is a weak function of the pressure peak**, which is why thinning alone was never going to solve the transonic problem, and why sweep, which attacks the Mach number directly, was the breakthrough.

**Example 2 (why airliners are swept about 30°).** A design team has an airfoil section with $M_{cr} = 0.72$ unswept, and wants to cruise at $M_\infty = 0.85$.

*Required sweep.*

$$M_{cr,\rm swept} = \frac{M_{cr,\rm unswept}}{\cos\Lambda}\geq0.85 \quad\Longrightarrow\quad \cos\Lambda\leq\frac{0.72}{0.85} = 0.8471,$$

$$\Lambda\geq32.1°.$$

*The sweep ladder.*

| $\Lambda$ | $M_{cr,\rm swept}$ |
|---|---|
| $0°$ | 0.720 |
| $20°$ | 0.766 |
| $25°$ | 0.794 |
| $30°$ | 0.831 |
| $35°$ | 0.879 |

**And that is why the sweep angle of almost every jet airliner is between 25° and 35°.** The Boeing 737 is swept 25° and cruises at $M = 0.78$; the 787 is swept 32.2° and cruises at $M = 0.85$; the 747, swept 37.5°, cruises at $M = 0.855$.

*Why the $\cos\Lambda$ rule works.* Decompose the free stream into components normal and parallel to the leading edge. **The parallel component does nothing to the pressure distribution** — it simply slides along the constant-pressure lines of an infinite swept wing. Only the normal component, $V_\infty\cos\Lambda$, compresses and accelerates over the section, so the section "feels" a Mach number of $M_\infty\cos\Lambda$.

**The wing therefore goes critical when $M_\infty\cos\Lambda = M_{cr,\rm unswept}$**, which is the rule.

*The price of sweep, and it is substantial.* Four costs, all real:

**Lift is reduced.** The section works at a lower effective Mach number *and* a lower effective dynamic pressure, so $C_L$ for a given $\alpha$ falls roughly as $\cos^2\Lambda$ — 25% at $\Lambda = 30°$. The wing needs more area or more incidence.

**Spanwise flow and tip stall.** The boundary layer drifts outboard along the swept span, thickening near the tips and making them stall first. **A tip stall on a swept wing is a pitch-*up*** — the lost lift is behind the centre of gravity — which is dangerous. Fences, vortilons, and washout exist to fight it.

**Structural weight.** A swept wing's spar is longer for the same span and carries a twisting load, so it is heavier — typically 10–20% for a 30° sweep.

**Low-speed handling.** $C_{L,\max}$ falls, so the aircraft needs elaborate high-lift devices for takeoff and landing. **The leading-edge slats and triple-slotted flaps of an airliner exist largely to undo what sweep did.**

*The design trade in one sentence.* Sweep buys Mach number and costs everything else — so aircraft use exactly as much as they need and not one degree more, which is why cruise Mach number and sweep angle track each other so closely across the whole fleet.

## Watch out

- **You might use Prandtl–Glauert above $M_{cr}$.** It is invalid there — the flow is no longer everywhere subsonic, and the linearization has failed.
- **You might think $M_{cr}$ is where drag rises.** Drag rises at $M_{dd}$, typically 0.05–0.10 higher. Between them there is a small supersonic pocket with a shock too weak to cost much.
- **You might expect Prandtl–Glauert to shift $\alpha_{L=0}$.** It does not — the factor multiplies the whole lift curve, so the zero crossing stays put.
- **You might think a supercritical airfoil raises $M_{cr}$.** It mainly weakens the shock, raising $M_{dd}$ — or, at fixed $M_{dd}$, allowing a thicker wing.
- **You might apply $\cos\Lambda$ to a low-aspect-ratio or highly tapered wing.** The rule is derived for an infinite swept wing; real wings recover only 60–80% of the predicted benefit near the root and tip.
- **You might forget that sweep works for supersonic flight too, for a different reason.** Subsonically it delays $M_{cr}$; supersonically it keeps the wing inside the Mach cone ([4.7](04-07-supersonic-airfoils-wave-drag-sweep.md)).
- **You might treat the area rule as a fuselage trick.** It applies to the whole aircraft's cross-section — engines, tails, and stores all count.

## One-liner

> Compressibility multiplies every incompressible pressure and force coefficient by $1/\sqrt{1-M_\infty^2}$, which works until the amplified suction peak reaches sonic conditions at $M_{cr}$; past that a supersonic pocket forms and closes with a shock whose losses and separation produce the drag-divergence rise — and sweep, supercritical sections, and the area rule are the three ways of postponing it.

## Problems

**P1 (🟢)** A thin airfoil has an incompressible lift coefficient of $c_{l,0} = 0.45$ at some angle of attack, and an incompressible minimum pressure coefficient of $-0.85$. (a) Find the Prandtl–Glauert factor at $M_\infty = 0.60$. (b) Find $c_l$ and $C_{p,\min}$ there. (c) Find the lift-curve slope in per-radian. (d) Compare $C_{p,\min}$ with $C_{p,\rm crit}$ at $M = 0.6$ and state whether the flow is critical.

**P2 (🟡)** An airfoil has $C_{p,0,\min} = -0.50$. (a) Find $M_{cr}$. (b) Estimate $M_{dd}$. (c) The design is thickened, raising $|C_{p,0,\min}|$ to $0.80$. Find the new $M_{cr}$ and $M_{dd}$. (d) Explain in terms of the physics why the thicker wing goes critical earlier, and name one advantage it has anyway.

**P3 (🔴)** A transport aircraft is to cruise at $M_\infty = 0.82$. Its unswept airfoil section has $M_{cr} = 0.70$. (a) Find the sweep angle required to make the wing critical exactly at cruise. (b) Explain the $\cos\Lambda$ rule from the velocity decomposition, and state its main limitation. (c) The team instead adopts a supercritical section, which allows $M_{dd}$ to rise 0.06 for the same thickness. Recompute the required sweep if $M_{dd}\approx M_{cr}+0.06$ and cruise must be at $M_{dd}$. (d) Discuss the full trade: what does the team gain and lose by choosing supercritical-plus-less-sweep over conventional-plus-more-sweep?

<details>
<summary>Solutions</summary>

**P1** (a) $$\beta = \sqrt{1-0.36} = \sqrt{0.64} = 0.800, \qquad \frac{1}{\beta} = 1.250.$$

(b) $$c_l = \frac{0.45}{0.800} = 0.5625, \qquad C_{p,\min} = \frac{-0.85}{0.800} = -1.0625.$$

(c) $$\frac{dc_l}{d\alpha} = \frac{2\pi}{0.800} = 7.854\ \mathrm{per\ radian} \quad(0.1371\ \mathrm{per\ degree}).$$

(d) $$C_{p,\rm crit}(0.6) = \frac{2}{1.4(0.36)}\left[\left(\frac{1.072}{1.2}\right)^{3.5}-1\right] = -1.294.$$

$$C_{p,\min} = -1.0625 > C_{p,\rm crit} = -1.294.$$

**The flow is not yet critical.** The suction peak is less negative than the sonic threshold, so the local flow is still everywhere subsonic — with a comfortable margin, since it would need to reach $-1.294$.

*(Consistency check: this section has $C_{p,0,\min} = -0.85$, so from the table $M_{cr}\approx0.63$… interpolating between $-0.8\to0.643$ and $-1.0\to0.606$ gives $M_{cr}\approx0.633$. But $M_\infty = 0.60<0.634$ ✓ — consistent, and the margin is thin. Half a Mach-hundredth more and this wing goes critical.)*

**P2** (a) Solving $-0.50/\sqrt{1-M^2} = C_{p,\rm crit}(M)$:

$$M_{cr} = 0.716, \qquad\text{with } C_p = -0.716 \text{ at that point}.$$

*(A pleasing numerical coincidence: at this condition $C_{p,\rm crit}$ and $M_{cr}$ happen to share the value 0.716.)*

(b) $$M_{dd}\approx0.716+0.06 = 0.78.$$

(c) With $C_{p,0,\min} = -0.80$:

$$M_{cr} = 0.643, \qquad M_{dd}\approx0.70.$$

**A loss of 0.073 in $M_{cr}$ and about 0.08 in $M_{dd}$** — a substantial penalty, equivalent to roughly 90 km/h of cruise speed at altitude.

(d) *Why the thicker wing goes critical earlier.* A thicker section forces the flow to accelerate more to get around it. Greater local velocity means a lower local pressure — a more negative $C_{p,\min}$ — so the flow starts closer to sonic even at low speed. Compressibility then amplifies that already-deeper peak by the same $1/\beta$ factor, so it reaches the sonic threshold at a lower free-stream Mach number.

**In one line: thickness makes the flow work harder locally, and going critical is a local phenomenon.**

*The advantage the thicker wing keeps.* Several, and they are why aircraft are not built with wings as thin as possible:

**Structural depth.** Spar bending strength goes roughly as the square of the depth, so a thicker wing is dramatically lighter for the same load. A wing 20% thicker can be perhaps 15% lighter.

**Fuel volume.** Tank volume scales with $t/c$, and on a long-range transport wing fuel volume is often the binding constraint.

**Higher $C_{L,\max}$ and gentler stall.** A thicker section has a larger nose radius, stalls from the trailing edge rather than the leading edge ([3.3](03-03-separation-stall-drag-polar.md)), and gives more warning.

**And this is exactly the trade the supercritical airfoil resolves.** By flattening the upper surface into a suction *plateau* rather than a peak, it achieves a given $M_{dd}$ at 20–40% greater thickness than a conventional section — which is why it was one of the most consequential aerodynamic inventions of the twentieth century.

**P3** (a) $$\cos\Lambda = \frac{M_{cr,\rm unswept}}{M_\infty} = \frac{0.70}{0.82} = 0.85366,$$

$$\Lambda = \arccos(0.85366) = 31.4°.$$

(b) *The decomposition.* On an infinite wing swept back by $\Lambda$, resolve the free stream into a component **normal** to the leading edge, $V_n = V_\infty\cos\Lambda$, and a component **parallel** to it, $V_p = V_\infty\sin\Lambda$.

The wing's geometry is invariant along its span, so nothing in the flow varies in the spanwise direction. **The parallel component therefore encounters no pressure gradient and simply slides along**, unchanged, from root to tip. It carries kinetic energy but does no aerodynamic work.

Only $V_n$ has to negotiate the section's thickness and camber. The section's pressure distribution, its suction peak, and its critical condition are all governed by

$$M_n = M_\infty\cos\Lambda,$$

so the wing goes critical when $M_\infty\cos\Lambda = M_{cr,\rm unswept}$, giving the rule.

*The main limitation.* **The argument requires an infinite wing.** A real wing has a root and a tip, where spanwise invariance fails badly:

At the **root**, the fuselage enforces a symmetry plane, straightening the flow and destroying the sweep effect locally. The pressure distribution reverts toward the unswept one, and the root goes critical early — which is why airliners have carefully shaped wing–body fairings and why the root section is often locally modified.

At the **tip**, the flow spills around and the isobars unsweep in the opposite sense.

The result is that a real wing realizes perhaps **60–80% of the theoretical sweep benefit**, and designers compensate by locally increasing sweep or reducing thickness near the root — the "isobar tailoring" that gives modern wings their subtly varying section.

(c) With a supercritical section, cruise is set by $M_{dd}$ rather than $M_{cr}$, and $M_{dd} = M_{cr}+0.06$. Requiring $M_{dd} = 0.82$ at cruise means the *swept* critical Mach number need only be

$$M_{cr,\rm swept} = 0.82-0.06 = 0.76,$$

$$\cos\Lambda = \frac{0.70}{0.76} = 0.92105, \qquad \Lambda = 22.9°.$$

**Sweep drops from 31.4° to 22.9°** — a saving of 8.5°.

(d) *What the team gains by choosing supercritical-plus-less-sweep.*

**Lower structural weight.** Sweep costs roughly 10–20% wing weight at 30°; dropping to 23° recovers a meaningful fraction of that. The spar is shorter and carries less torsion.

**Better low-speed performance.** $C_{L,\max}$ scales roughly with $\cos^2\Lambda$, so less sweep means a higher stalling lift coefficient — shorter takeoff, lower approach speed, and less demanding high-lift machinery. The flap and slat system on a 23°-swept wing is materially simpler than on a 31°-swept one.

**Reduced tip-stall and pitch-up tendency.** Spanwise boundary-layer drift scales with $\sin\Lambda$; less sweep means a more benign stall and less need for fences and vortex generators.

**A thicker wing is possible.** The supercritical section tolerates greater $t/c$ at the same $M_{dd}$, giving more fuel volume and more spar depth — compounding the weight saving.

*What the team loses.*

**A nose-down pitching moment.** The supercritical airfoil's aft loading produces a large negative $c_{m,c/4}$ — typically $-0.10$ or worse against a conventional section's $-0.05$. **That must be trimmed by a download on the tail**, which subtracts from lift and adds trim drag, and it drives the horizontal tail bigger.

**A thin, structurally awkward trailing edge.** The aft camber concentrates load on a region that is hard to make stiff, and it constrains where control surfaces and flap mechanisms can go.

**A narrower design point.** The supercritical benefit depends on maintaining the suction plateau, which is sensitive to $C_L$ and Mach number. **Off-design — climb, descent, high or low weight — the plateau breaks down** and the section behaves more like a conventional one. Sweep, by contrast, works at every condition.

**Manufacturing precision.** The plateau's performance depends on surface accuracy of a few tenths of a millimetre, so the wing skin's tolerances and waviness limits are tighter and costlier.

*The verdict, and what industry actually did.* **Both**, and in a specific order. The supercritical section came first, and its benefit was taken partly as reduced sweep and mostly as *increased thickness* at the same sweep — because thickness buys weight and fuel volume, and those dominate airline economics.

**The Boeing 787 is a fair example**: 32.2° of sweep with a supercritical section, cruising at $M = 0.85$. A 1960s conventional section would have needed roughly 40° of sweep for the same speed, with a thinner, heavier wing. **The invention was spent on capability, not on simplification** — which is the usual fate of an aerodynamic advance.

</details>

## Flashback

**From Lesson 4.5 (Quasi-one-dimensional nozzle flow):** A converging–diverging nozzle has $A_e/A_t = 3.0$, with $p_0 = 700$ kPa and $T_0 = 400$ K. (a) Find the design exit Mach number and pressure. (b) Find the back pressure that puts a normal shock exactly at the exit plane. (c) Find the choked mass flow for $A_t = 0.005$ m². (d) At a back pressure of 400 kPa, what regime is the nozzle in?

<details>
<summary>Solution</summary>

(a) At $A_e/A^* = 3.0$, the supersonic root is

$$M_e = 2.637.$$

$$\frac{p_e}{p_0} = \left(1+0.2(6.956)\right)^{-3.5} = (2.3912)^{-3.5} = 0.047299,$$

$$p_e = 0.047299(700) = 33.11\ \mathrm{kPa}.$$

(b) Normal-shock pressure ratio at $M = 2.637$:

$$\frac{p_2}{p_1} = 1+1.16667\left(6.956-1\right) = 1+6.9487 = 7.9487,$$

$$p_{b,2} = 7.9487(33.11) = 263.2\ \mathrm{kPa}.$$

(c) $$\dot m = 0.0404\frac{p_0A_t}{\sqrt{T_0}} = 0.0404\frac{700{,}000(0.005)}{\sqrt{400}} = 0.0404\frac{3500}{20} = 7.07\ \mathrm{kg/s}.$$

(d) The subsonic root at $A/A^* = 3.0$ is $M = 0.1975$, giving the first critical

$$p_{b,1} = \frac{700}{\left(1+0.2(0.03900)\right)^{3.5}} = \frac{700}{1.02755} = 681.2\ \mathrm{kPa}.$$

Since $263.2<400<681.2$, the nozzle is **choked with a normal shock standing inside the divergent section**.

*The bridge to this lesson.* A shock standing inside a diverging duct, terminating a supersonic pocket and returning the flow to subsonic — that is exactly what happens on the upper surface of a transonic wing.

**The correspondence is complete:**

| Nozzle | Transonic wing |
|---|---|
| throat | point of maximum thickness / suction peak |
| divergent section | rear upper surface |
| supersonic region | supersonic pocket |
| normal shock inside | shock on the wing |
| back pressure $p_b$ | trailing-edge pressure |
| shock moves aft as $p_b$ falls | shock moves aft as $M_\infty$ rises |

**And the consequences transfer too.** In the nozzle, the shock's $p_0$ loss is thrust thrown away, and its adverse gradient can separate the boundary layer from the bell — with side loads violent enough to break hardware. On the wing, the same $p_0$ loss is **wave drag**, and the same separation is **shock stall**, which at its worst produces the buffet and control reversal that made early transonic flight lethal.

*One important difference.* The nozzle's shock is held in place by a fixed back pressure and sits still. **The wing's shock has no such anchor**, and when it interacts with a separating boundary layer it can oscillate — a self-sustaining instability called **transonic buffet**, which sets the practical upper limit on an airliner's cruise Mach number quite apart from drag.

</details>

## Connections

- **Backward:** the incompressible airfoil results being corrected are [2.3](02-03-symmetric-thin-airfoil.md)'s and [2.4](02-04-cambered-airfoil-aerodynamic-center.md)'s; $C_{p,\rm crit}$ comes straight from the isentropic relations of [4.2](04-02-isentropic-stagnation-relations.md); the shock on the wing is [4.3](04-03-normal-shock-waves.md)'s, and the separation it causes is [3.3](03-03-separation-stall-drag-polar.md)'s; the supersonic pocket is [4.5](04-05-quasi-1d-nozzle-flow.md)'s nozzle in disguise.
- **Forward:** [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md) crosses $M = 1$ entirely, where $1/\sqrt{1-M^2}$ becomes $1/\sqrt{M^2-1}$ and sweep acquires a second, different justification.
- **Sideways:** the $1/\sqrt{1-M^2}$ factor and its divergence at $M = 1$ is a **critical-point singularity**: a linear response function blowing up as a control parameter approaches a threshold, exactly as susceptibility diverges at a phase transition in [`stat-mech`](../../stat-mech/syllabus.md). And the change of the governing equation's type from elliptic ($M<1$, disturbances felt everywhere) to hyperbolic ($M>1$, disturbances confined to a cone) is the same classification that separates Laplace's equation from the wave equation in [`pdes`](../../pdes/syllabus.md).

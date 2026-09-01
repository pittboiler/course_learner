# Atmospheric Science · Lesson 4.1: The pressure-gradient force & the equations of motion

> ⏱ ~15 min · Module 4: Dynamics & weather systems · Builds on: [1.2 The hydrostatic equation](01-02-hydrostatic-equation-barometric-law.md), [`fluid-dynamics` 1.5](../../fluid-dynamics/lessons/01-05-euler-equation.md) · Unlocks: 4.2 (Coriolis), 4.3 (geostrophic wind)

## Why this matters

Module 4 is where the atmosphere starts moving. Everything so far has been vertical and thermodynamic; from here on it is horizontal and mechanical, and the whole subject rests on writing Newton's second law for a parcel of air on a spinning planet. That equation has exactly three terms that matter for weather — a push from pressure, a deflection from rotation, and a drag from the surface — and the entire art of dynamic meteorology is knowing which of the three to keep. This lesson introduces the first, sets up the full equation, and then does the single most valuable thing in the subject: a **scale analysis** that shows which terms are big and which can be thrown away. That analysis is why "geostrophic balance" is a useful idea at all.

## The idea

**Pressure does not push; pressure *differences* push.** A parcel deep in a uniform-pressure atmosphere is squeezed equally from all sides and feels nothing, even at 100,000 pascals. Put more pressure on one side than the other and the imbalance is a net force. So the quantity that matters is the *gradient* — how fast pressure changes with distance — and on a weather map that is simply how tightly packed the isobars are. Tight isobars, strong wind. That is the first thing any forecaster learns to read, and it is a direct statement of Newton's second law.

Two features of the resulting force are worth noticing before the algebra. It points **from high pressure toward low** — down the gradient, perpendicular to the isobars. And it is divided by density, so the *same* pressure gradient accelerates thin air aloft harder than dense air at the surface. That is part of why winds are stronger at altitude.

**The other two terms.** On a rotating planet a parcel moving in a straight line as seen from space appears to curve when seen from the ground, and we account for that apparent curvature with a fictitious **Coriolis force** — Lesson 4.2's entire subject. And near the ground, turbulent eddies rub the air against the surface, giving a **friction** force opposing the motion. Above about 1 km — the top of the boundary layer — friction is negligible, and the free atmosphere runs on pressure and rotation alone.

**Which terms survive?** Put in typical mid-latitude numbers — a 10 m s⁻¹ wind over a 1000 km weather system — and the four candidate terms come out at wildly different sizes. The pressure gradient and Coriolis terms are both around $10^{-3}\ \mathrm{m\,s^{-2}}$; the parcel's own acceleration is ten times smaller; friction in the free atmosphere is smaller still. **The two big terms must therefore nearly cancel.** That near-cancellation is *geostrophic balance*, and the fact that it emerges from a scale analysis rather than an assumption is what makes it trustworthy.

## The formal version

**Deriving the pressure-gradient force.** Take a box of air with cross-section $A$ and length $\delta x$ along the $x$-axis. Pressure $p$ pushes on the left face with force $pA$ to the right; pressure $p + \delta p$ pushes on the right face with force $(p+\delta p)A$ to the left. The net is $-\delta p\,A$. The mass is $\rho A\,\delta x$, so the force per unit mass is

$$\frac{-\delta p\,A}{\rho A\,\delta x} = -\frac{1}{\rho}\frac{\delta p}{\delta x} \;\longrightarrow\; -\frac{1}{\rho}\frac{\partial p}{\partial x}.$$

In vector form, the horizontal **pressure-gradient force (PGF)** per unit mass is

$$\boxed{\ \mathbf{F}_{\text{PGF}} = -\frac{1}{\rho}\nabla_H p\ }$$

*In words: air accelerates down the pressure gradient, at a rate equal to the gradient divided by the density.* The area cancelled — only the gradient survives — which is why absolute pressure never appears in the horizontal equations.

**The horizontal momentum equations.** Newton's second law for a parcel in a frame rotating with the Earth, with $u$ the eastward and $v$ the northward wind component (m s⁻¹):

$$\boxed{\ \frac{Du}{Dt} = -\frac{1}{\rho}\frac{\partial p}{\partial x} + fv + F_x, \qquad \frac{Dv}{Dt} = -\frac{1}{\rho}\frac{\partial p}{\partial y} - fu + F_y\ }$$

where $f = 2\Omega\sin\phi$ is the **Coriolis parameter** (derived in [4.2](04-02-coriolis-effect.md)), $F_x, F_y$ are friction, and $D/Dt = \partial/\partial t + u\,\partial/\partial x + v\,\partial/\partial y + w\,\partial/\partial z$ is the material derivative of [`fluid-dynamics` 1.2](../../fluid-dynamics/lessons/01-02-lagrangian-eulerian-material-derivative.md) — the rate of change *following the parcel*, not at a fixed point. The vertical equation is not a third partner: as [1.2](01-02-hydrostatic-equation-barometric-law.md) showed, vertical accelerations are $10^{-4}$ of $g$, so it collapses to the hydrostatic balance $\partial p/\partial z = -\rho g$.

**Scale analysis.** Substitute mid-latitude synoptic values: horizontal speed $U \sim 10\ \mathrm{m\,s^{-1}}$, length scale $L \sim 10^{6}$ m (1000 km), $f \sim 10^{-4}\ \mathrm{s^{-1}}$, $\rho \sim 1.2\ \mathrm{kg\,m^{-3}}$, a pressure change of about 10 hPa across the system, and a boundary layer 1 km deep.

| Term | Scale | Value (m s⁻²) |
|---|---|---|
| Pressure gradient | $\delta p/(\rho L)$ | $8\times10^{-4}$ |
| Coriolis | $fU$ | $1.0\times10^{-3}$ |
| Acceleration (advective) | $U^2/L$ | $1\times10^{-4}$ |
| Friction (free atmosphere) | — | $\lesssim10^{-5}$ |
| Friction (boundary layer) | $C_dU^2/h$ | $1\times10^{-4}$ |

*In words: two terms are ten times larger than everything else, so to a first approximation they must balance each other.* The ratio of the acceleration term to the Coriolis term is the **Rossby number**,

$$\mathrm{Ro} \equiv \frac{U}{fL} = \frac{10}{10^{-4}\times10^{6}} = 0.1,$$

and it is *the* dimensionless number of large-scale atmospheric dynamics. $\mathrm{Ro} \ll 1$ means rotation dominates and the flow is geostrophic. $\mathrm{Ro} \gtrsim 1$ means rotation is irrelevant: for a tornado ($U \sim 50$, $L \sim 100$ m), $\mathrm{Ro} = 5000$, which is why a tornado's rotation direction is set by its parent storm rather than by the hemisphere.

**Friction.** Near the surface, turbulent eddies transfer momentum downward and the net effect on the layer-mean wind is well modelled as a drag opposing the flow,

$$\mathbf{F} = -k\,\mathbf{V},$$

with $k^{-1}$ of order a day over the ocean and a few hours over rough land. The consequence, which [4.3](04-03-geostrophic-gradient-wind.md) develops, is that surface winds are *not* geostrophic: they blow across the isobars toward low pressure, which is why air spirals inward into a surface low and outward from a high.

## Picture

![Left, evenly spaced isobars from 1012 down to 992 hPa with an air parcel between them and the pressure-gradient force arrow pointing perpendicular to the isobars toward lower pressure; right, the slab derivation showing pressure times area pushing on each face of a box, the net force being minus the pressure difference times area, and the area cancelling when divided by the mass](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — sizing the pressure-gradient force).** A weather map shows sea-level pressure falling by 8 hPa over 400 km. With $\rho = 1.2\ \mathrm{kg\,m^{-3}}$, what is the pressure-gradient force per unit mass?

Convert: $8\ \mathrm{hPa} = 800$ Pa, over $4\times10^{5}$ m.

$$\left|\frac{1}{\rho}\frac{\partial p}{\partial n}\right| = \frac{1}{1.2}\times\frac{800}{4\times10^{5}} = \frac{1}{1.2}\times2.0\times10^{-3} = 1.67\times10^{-3}\ \mathrm{m\,s^{-2}}.$$

*Check on the size.* That is $1.7\times10^{-4}$ of gravity — tiny. But applied continuously for six hours it would accelerate air from rest to $1.67\times10^{-3}\times21\,600 = 36\ \mathrm{m\,s^{-1}}$. Observed winds under such a gradient are around 16 m s⁻¹ and *steady*, not accelerating. Something must be cancelling the push almost exactly; the scale analysis says it is the Coriolis term, and [4.3](04-03-geostrophic-gradient-wind.md) makes it quantitative.

**Example 2 (why you'd care — when does rotation matter?).** Compute the Rossby number for three flows and say what each implies.

*A mid-latitude cyclone:* $U = 15\ \mathrm{m\,s^{-1}}$, $L = 10^{6}$ m, $f = 10^{-4}$.
$$\mathrm{Ro} = \frac{15}{10^{-4}\times10^{6}} = 0.15.$$
Rotation dominates. The flow is near-geostrophic, it circulates around the low rather than filling it, and it lasts for days.

*A sea breeze:* $U = 5\ \mathrm{m\,s^{-1}}$, $L = 2\times10^{4}$ m.
$$\mathrm{Ro} = \frac{5}{10^{-4}\times2\times10^{4}} = 2.5.$$
Comparable to 1: rotation is a modifier, not a controller. The sea breeze does blow more or less straight onshore as the pressure gradient demands, but over a long afternoon it veers noticeably — a partial Coriolis turn, exactly what $\mathrm{Ro} \sim 1$ predicts.

*A tornado:* $U = 60\ \mathrm{m\,s^{-1}}$, $L = 10^{2}$ m.
$$\mathrm{Ro} = \frac{60}{10^{-4}\times10^{2}} = 6000.$$
Rotation is irrelevant; the balance is between the pressure gradient and the *centrifugal* term. This is the cyclostrophic limit of [4.3](04-03-geostrophic-gradient-wind.md), and it is why the folklore that tornadoes must spin cyclonically is wrong — a small fraction of them spin the other way.

## Watch out

- **You might think** high pressure "pushes harder" than low pressure. **Actually** absolute pressure exerts no net force at all; only its *gradient* does. A 1030 hPa high with slack isobars produces calm; a 1010 hPa region with tight isobars produces a gale. Read spacing, not values.
- **You might think** the pressure-gradient force makes air flow from high to low pressure. **Actually** it *accelerates* air that way, but Coriolis turns the resulting motion until, in the free atmosphere, the wind blows *along* the isobars rather than across them. Force and velocity are not parallel in a rotating frame — that is the central strangeness of [4.2](04-02-coriolis-effect.md).
- **You might think** $D/Dt$ is $\partial/\partial t$. **Actually** it includes advection: a parcel's temperature or velocity can change either because conditions at its location are changing or because it has moved somewhere different. Confusing the two is the classic error, and [`fluid-dynamics` 1.2](../../fluid-dynamics/lessons/01-02-lagrangian-eulerian-material-derivative.md) is the place it is sorted out properly.
- **You might think** the scale analysis is an approximation you might skip for accuracy. **Actually** it is the reason the subject is tractable: keeping every term gives equations no one can solve or interpret. Knowing that $\mathrm{Ro} = 0.1$ for weather systems tells you *in advance* which physics matters, and that judgement is the skill.

## One-liner

> Air is pushed by the pressure gradient, not the pressure — and on a rotating planet at $\mathrm{Ro} = 0.1$ that push is almost exactly cancelled by the Coriolis term, so the wind blows steadily along the isobars instead of accelerating across them.

## Problems

**P1 (🟢)** Sea-level pressure falls by 12 hPa over 300 km. Taking $\rho = 1.25\ \mathrm{kg\,m^{-3}}$, compute the pressure-gradient force per unit mass, and express it as a fraction of $g$.

**P2 (🟡)** Compute the Rossby number for (a) a hurricane, $U = 50\ \mathrm{m\,s^{-1}}$, $L = 3\times10^{5}$ m, $f = 5\times10^{-5}\ \mathrm{s^{-1}}$ (latitude 20 degrees); (b) a dust devil, $U = 10\ \mathrm{m\,s^{-1}}$, $L = 5$ m. For each, state which force balances the pressure gradient.

**P3 (🔴, optional)** Aloft, air is less dense. Consider the same horizontal pressure gradient of $2.0\times10^{-3}\ \mathrm{Pa\,m^{-1}}$ at the surface ($\rho = 1.2$) and at 300 hPa ($\rho = 0.45\ \mathrm{kg\,m^{-3}}$). (a) Compute the pressure-gradient force per unit mass at each level. (b) Comment on what this contributes to the observation that winds are stronger aloft. (c) Explain why this is *not* the main reason for the jet stream, and name what is.

<details>
<summary>Solutions</summary>

**P1** $$\left|\frac{1}{\rho}\frac{\partial p}{\partial n}\right| = \frac{1}{1.25}\times\frac{1200\ \mathrm{Pa}}{3\times10^{5}\ \mathrm{m}} = \frac{4.0\times10^{-3}}{1.25} = 3.2\times10^{-3}\ \mathrm{m\,s^{-2}}.$$

As a fraction of gravity: $3.2\times10^{-3}/9.81 = 3.3\times10^{-4}$, about one three-thousandth of $g$.

*Check.* This is a very tight gradient — 12 hPa in 300 km is storm-force packing — and even so the force is a ten-thousandth of gravity. Horizontal atmospheric dynamics is a story about extremely small forces acting over extremely long times.

**P2** (a) Hurricane: $$\mathrm{Ro} = \frac{50}{5\times10^{-5}\times3\times10^{5}} = \frac{50}{15} = 3.3.$$

Greater than 1, so the *centrifugal* term (the curvature of the flow) is the main balance against the pressure gradient, with Coriolis a significant but secondary player. This is the **gradient wind** regime of [4.3](04-03-geostrophic-gradient-wind.md). Rotation still matters enough to fix the direction of spin — hurricanes are reliably cyclonic — and to require that they form at least a few degrees from the equator, where $f$ is not zero.

(b) Dust devil: $$\mathrm{Ro} = \frac{10}{10^{-4}\times5} = 2\times10^{4}.$$

Rotation is utterly negligible. The balance is purely cyclostrophic — pressure gradient against centrifugal force — and dust devils spin either way with roughly equal frequency, which is exactly what is observed.

**P3** (a) Surface: $$\frac{1}{1.2}\times2.0\times10^{-3} = 1.67\times10^{-3}\ \mathrm{m\,s^{-2}}.$$
At 300 hPa: $$\frac{1}{0.45}\times2.0\times10^{-3} = 4.44\times10^{-3}\ \mathrm{m\,s^{-2}},$$

2.7 times larger — exactly the density ratio, since the gradient is the same.

(b) The same isobaric packing produces a much larger acceleration aloft, because the air being pushed is thinner. Combined with the absence of surface friction above the boundary layer, this contributes to winds being stronger at altitude.

(c) It is *not* the main reason for the jet stream, for a simple reason: the horizontal pressure gradient is not the same at all levels. It **grows with height**, because a warm air column is thicker than a cold one ([1.2](01-02-hydrostatic-equation-barometric-law.md), Example 2), so a horizontal temperature contrast makes the height difference between pressure surfaces accumulate upward. That accumulation is the **thermal wind**, the subject of [4.4](04-04-thermal-wind-general-circulation.md), and it is what actually builds the jet: the equator-to-pole temperature gradient, integrated through the depth of the troposphere.

*Check.* Notice the logic of the elimination. Density falls by a factor of 2.7 from the surface to 300 hPa, which alone could not turn a 15 m s⁻¹ surface wind into a 60 m s⁻¹ jet even if it acted on the wind directly (which it does not — it acts on the acceleration). The temperature-gradient mechanism, by contrast, gives about 30 m s⁻¹ of extra wind over 10 km for a realistic pole-to-equator contrast, which is the right size.

</details>

## Flashback

**From Lesson 3.2 (The greenhouse effect & the global energy budget):** A planet's atmosphere has infrared emissivity $\epsilon = 0.5$ and its effective emission temperature is $T_e = 230$ K. (a) Use $T_s = T_e[2/(2-\epsilon)]^{1/4}$ to find the surface temperature. (b) By how much does the greenhouse effect warm this planet, and how does that compare with Earth's 33 K?

<details>
<summary>Solution</summary>

(a) $$T_s = 230\left(\frac{2}{2 - 0.5}\right)^{1/4} = 230\,(1.3333)^{1/4} = 230 \times 1.0746 = 247.2\ \mathrm{K}.$$

(b) The greenhouse warming is $247.2 - 230 = 17.2$ K, about half of Earth's 33 K — which makes sense, since this atmosphere absorbs only 50 percent of the surface's infrared against Earth's 78 percent.

*Check.* The relationship is not linear in $\epsilon$: Earth's $\epsilon = 0.78$ buys 33 K while $\epsilon = 0.5$ buys 17 K, a ratio of 1.94 for an emissivity ratio of only 1.56. The factor $2/(2-\epsilon)$ steepens as $\epsilon \to 1$, which is the same diminishing-transparency effect that makes each added greenhouse-gas doubling matter at the band edges rather than the centre ([3.3](03-03-radiative-transfer-vertical-profile.md)).

</details>

## Connections

- **Backward:** the vertical component of this same momentum equation is [1.2](01-02-hydrostatic-equation-barometric-law.md)'s hydrostatic balance, obtained by throwing away everything but $\partial p/\partial z$ and $g$; the full equation is the rotating-frame version of [`fluid-dynamics` 1.5](../../fluid-dynamics/lessons/01-05-euler-equation.md)'s Euler equation.
- **Forward:** [4.2](04-02-coriolis-effect.md) derives the $f$ that appears here; [4.3](04-03-geostrophic-gradient-wind.md) exploits the near-cancellation the scale analysis found, to get the wind straight off a pressure map.
- **Sideways (fluid dynamics):** the scale-analysis method — non-dimensionalize, form a ratio, throw away the small terms — is the same reasoning that produces the Reynolds number in [`fluid-dynamics` 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md). Rossby is to rotation what Reynolds is to viscosity: a single number telling you which physics is in charge.

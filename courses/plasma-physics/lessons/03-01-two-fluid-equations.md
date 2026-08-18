# Plasma Physics · Lesson 3.1: From kinetic to fluid — the two-fluid equations

> ⏱ ~15 min · Module 3: The fluid picture & MHD · Builds on: [2.4 Landau damping](02-04-landau-damping.md), [`fluid-dynamics` syllabus](../../fluid-dynamics/syllabus.md) · Unlocks: [3.2 The ideal-MHD equations & frozen-in flux](03-02-ideal-mhd-frozen-flux.md)

## Why this matters

The Vlasov equation ([2.2](02-02-vlasov-equation.md)) is exact but merciless: it lives in six-dimensional phase space and tracks a whole function $f(\mathbf{x},\mathbf{v},t)$. Most of the time you don't care about the full velocity spread at each point — you want the everyday quantities you can measure with a probe: *how dense* the plasma is, *which way* it's flowing, *how hot* it is. Those are **averages over velocity**, and averaging Vlasov turns kinetic theory into fluid dynamics — the same continuity and momentum equations you'd write for water or air, now with the Lorentz force bolted on. This is the doorway to MHD, the workhorse of fusion and astrophysics. But averaging costs you something, and the price — the **closure problem** — is the whole point of this lesson.

## The idea

Here is the trick in one sentence: **stop asking where every particle is in velocity space, and just ask for the running totals.** Integrate $f$ over all velocities and you get the number density $n$. Weight by $\mathbf{v}$ before integrating and you get the flow $\mathbf{u}$. Weight by $\mathbf{v}\mathbf{v}$ and you get the pressure $P$. These weighted integrals are called **moments** — the same word as "moment of inertia," and the same idea: a low-order summary of a distribution.

Now apply the *same* weighting to the whole Vlasov equation, not just to $f$. Each weight produces one fluid equation. The zeroth moment (just integrate) gives **conservation of particles** — continuity. The first moment (weight by $\mathbf{v}$) gives **Newton's second law for a blob of fluid** — the momentum equation. Higher moments give energy, heat flow, and so on.

But there's a catch, and it's structural, not accidental. Watch the ladder: the continuity equation for $n$ contains the flow $\mathbf{u}$ — a *higher* moment. The momentum equation for $\mathbf{u}$ contains the pressure $P$ — a *higher* moment still. The pressure equation contains the heat flux — higher again. **Every rung of the ladder reaches up to the next rung.** You can never close the system with a finite number of equations by moments alone; there's always one more unknown than you have equations. That's the **closure problem**, and you defeat it not with more math but with a *physical assumption* — usually an equation of state that says "pressure is just this function of density," snapping the chain.

Do all this for electrons and ions *separately* and you get the **two-fluid model**: two interpenetrating charged fluids, coupled only through the fields $\mathbf{E},\mathbf{B}$ they jointly create and through the friction of collisions between them. Add them up cleverly and the two fluids collapse into one — single-fluid MHD, next lesson.

## The formal version

**The moments of $f$.** Recall from [2.1](02-01-distribution-function-moments.md) that for a species $s$ (electrons or ions) with distribution $f_s(\mathbf{x},\mathbf{v},t)$, the fluid quantities are velocity integrals:

$$n_s = \int f_s \, d^3v, \qquad \mathbf{u}_s = \frac{1}{n_s}\int \mathbf{v}\, f_s \, d^3v, \qquad \mathsf{P}_s = m_s\!\int (\mathbf{v}-\mathbf{u}_s)(\mathbf{v}-\mathbf{u}_s)\, f_s \, d^3v.$$

*In words: density is the count, flow $\mathbf{u}_s$ is the average velocity, and the pressure tensor $\mathsf{P}_s$ is the spread of velocities about that average — the random (thermal) motion.* Here $m_s$ is the species mass and $q_s$ its charge.

**The Vlasov equation** we take moments of ([2.2](02-02-vlasov-equation.md)):

$$\frac{\partial f_s}{\partial t} + \mathbf{v}\cdot\nabla f_s + \frac{q_s}{m_s}(\mathbf{E}+\mathbf{v}\times\mathbf{B})\cdot\nabla_{\!v} f_s = \left(\frac{\partial f_s}{\partial t}\right)_{\!\text{coll}}.$$

*In words: $f_s$ is carried along the particle orbits in phase space; the right side is the collisions we neglected in pure Vlasov but keep here as the source of inter-species friction.*

**Zeroth moment → continuity.** Integrate the whole equation over $d^3v$. The time and space terms pass straight through the integral; the force term integrates to zero (a perfect divergence in velocity space, with $f\to 0$ as $|\mathbf{v}|\to\infty$); and collisions conserve particles, so their integral vanishes too. What survives is

$$\boxed{\;\frac{\partial n_s}{\partial t} + \nabla\cdot(n_s \mathbf{u}_s) = 0\;}$$

*In words: particles are neither created nor destroyed — the density in a region changes only by flow across its boundary.* This is **identical in form** to the continuity equation of ordinary fluids in the [`fluid-dynamics` syllabus](../../fluid-dynamics/syllabus.md); a plasma species is, for this equation, just a fluid. (We derive it term-by-term in Example 1.)

**First moment → momentum.** Now multiply by $m_s\mathbf{v}$ and integrate. After using the continuity result to simplify, you get the momentum equation:

$$\boxed{\;m_s n_s\!\left(\frac{\partial \mathbf{u}_s}{\partial t} + \mathbf{u}_s\cdot\nabla\mathbf{u}_s\right) = q_s n_s(\mathbf{E}+\mathbf{u}_s\times\mathbf{B}) - \nabla\cdot\mathsf{P}_s + \mathbf{R}_s\;}$$

*In words: mass-times-acceleration of a fluid parcel equals the Lorentz force density, plus the push from pressure imbalances, plus friction from the other species.* Term by term:

- $m_s n_s\,(\partial_t \mathbf{u}_s + \mathbf{u}_s\cdot\nabla\mathbf{u}_s)$ — mass density times the **convective (material) acceleration**: the acceleration you'd feel riding along with the parcel.
- $q_s n_s(\mathbf{E}+\mathbf{u}_s\times\mathbf{B})$ — the **Lorentz force per unit volume**. This is the term ordinary fluids don't have; it is the whole reason plasma physics is its own subject.
- $-\nabla\cdot\mathsf{P}_s$ — the **pressure-gradient force**. If the pressure is isotropic, $\mathsf{P}_s = p_s\mathsf{I}$ and this becomes the familiar $-\nabla p_s$.
- $\mathbf{R}_s$ — the **friction** (momentum exchange) from collisions with the other species; $\mathbf{R}_e = -\mathbf{R}_i$ so total momentum is conserved. It is what will give MHD its finite resistivity.

Drop the Lorentz and friction terms and this is **exactly the Navier–Stokes momentum equation** from the [`fluid-dynamics` syllabus](../../fluid-dynamics/syllabus.md).

**The closure problem, stated.** Count the unknowns in the electron equations: $n_e$ (1), $\mathbf{u}_e$ (3), $\mathsf{P}_e$ (6) — and the pressure obeys *its own* moment equation that introduces the heat flux $\mathbf{q}_e$, which obeys *its own* equation introducing the next moment, forever. Continuity gives you $n_e$ but needs $\mathbf{u}_e$; momentum gives you $\mathbf{u}_e$ but needs $\mathsf{P}_e$. **At every level there are more unknowns than equations.** You break the regress with a **closure** — a physical statement that expresses a high moment in terms of low ones. The common choices:

$$\text{isothermal: } p_s = n_s k_B T_s \ (T_s\ \text{fixed}), \qquad \text{adiabatic: } p_s \propto n_s^{\gamma},$$

with $\gamma$ the ratio of specific heats (e.g. $\gamma=5/3$ for a monatomic gas). *In words: assume something about the thermodynamics — the temperature is held fixed, or entropy is conserved — so pressure is a known function of density, and the momentum equation closes on $(n_s,\mathbf{u}_s)$ alone.* Which closure is right depends on ordering: fast compressions are adiabatic, slow ones isothermal.

**Two-fluid → single-fluid.** Keeping electron and ion equations separate — the **two-fluid model** — captures charge separation, two-stream instability, and the difference between electron and ion dynamics. Coupling is through Maxwell's equations (the fields respond to the charge density $\sum_s q_s n_s$ and current $\mathbf{J}=\sum_s q_s n_s \mathbf{u}_s$) and through $\mathbf{R}_s$. If instead you only care about the *bulk* behavior, add the two momentum equations (mass motion) and subtract them weighted by charge (current) to get **single-fluid MHD** — [3.2](03-02-ideal-mhd-frozen-flux.md). MHD is the low-frequency, large-scale limit: valid for $\omega \ll \Omega_{ci}$ (slower than an ion gyration) and $L \gg r_{Li}$ (bigger than an ion Larmor radius), where electrons and ions move together as one conducting fluid.

## Picture

![A vertical ladder of equations: the Vlasov equation at top, then continuity, momentum, and energy equations as successive velocity moments; coral annotations show each equation needs the next higher moment (the closure gap), snapped shut by an equation of state box](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (derive continuity from the zeroth moment).** Integrate each term of Vlasov over all velocities. Because $\mathbf{x},t$ and $\mathbf{v}$ are independent coordinates, time and space derivatives commute with $\int d^3v$:

$$\int \frac{\partial f_s}{\partial t}\,d^3v = \frac{\partial}{\partial t}\!\int f_s\,d^3v = \frac{\partial n_s}{\partial t},$$

$$\int \mathbf{v}\cdot\nabla f_s\,d^3v = \nabla\cdot\!\int \mathbf{v} f_s\,d^3v = \nabla\cdot(n_s\mathbf{u}_s),$$

where the second line pulled $\nabla$ (an $\mathbf{x}$-derivative) out past the $\mathbf{v}$-integral and used the definition $n_s\mathbf{u}_s=\int\mathbf{v}f_s\,d^3v$. The force term is a divergence in velocity space:

$$\int \frac{q_s}{m_s}(\mathbf{E}+\mathbf{v}\times\mathbf{B})\cdot\nabla_{\!v} f_s\,d^3v = \frac{q_s}{m_s}\int \nabla_{\!v}\!\cdot\big[(\mathbf{E}+\mathbf{v}\times\mathbf{B})f_s\big]\,d^3v = 0.$$

Two facts make it vanish: $\nabla_{\!v}\cdot(\mathbf{E}+\mathbf{v}\times\mathbf{B})=0$ (since $\mathbf{E}$ is independent of $\mathbf{v}$, and $\nabla_{\!v}\cdot(\mathbf{v}\times\mathbf{B})=\mathbf{B}\cdot(\nabla_{\!v}\times\mathbf{v})-\mathbf{v}\cdot(\nabla_{\!v}\times\mathbf{B})=0$), so the force can be moved inside the velocity divergence; then the divergence theorem in velocity space turns it into a surface integral at $|\mathbf{v}|=\infty$, where $f_s\to 0$. The collision term integrates to zero because collisions move particles around in velocity but never change their number. Summing the survivors:

$$\frac{\partial n_s}{\partial t} + \nabla\cdot(n_s\mathbf{u}_s) = 0. \qquad\checkmark$$

*Check.* Dimensions: $\partial_t n_s$ is $[\mathrm{m^{-3}\,s^{-1}}]$; $\nabla\cdot(n_s\mathbf{u}_s)$ is $[\mathrm{m^{-1}}][\mathrm{m^{-3}}][\mathrm{m\,s^{-1}}]=[\mathrm{m^{-3}\,s^{-1}}]$ ✓ — same units, as any valid equation demands.

**Example 2 (a closure in action — the ion-acoustic pressure term).** Suppose ions are compressed slowly enough that heat can't escape a parcel: use the adiabatic closure $p_i \propto n_i^{\gamma}$. Then the pressure-gradient force in the momentum equation becomes computable from density alone:

$$-\nabla p_i = -\frac{dp_i}{dn_i}\,\nabla n_i = -\gamma\,\frac{p_i}{n_i}\,\nabla n_i = -\gamma k_B T_i\,\nabla n_i,$$

using $p_i=n_i k_B T_i$ for the last step. The momentum equation now involves only $n_i$ and $\mathbf{u}_i$ (plus the fields) — the pressure unknown is gone, the chain is cut. This exact term, with the electron version $-k_B T_e\nabla n_e$ (electrons isothermal, $\gamma_e=1$, because they equilibrate fast), sets the ion-acoustic speed $c_s=\sqrt{k_B T_e/m_i}$ you'll derive in [4.2 Ion-acoustic waves](04-02-ion-acoustic-waves.md). *In words: choosing the closure is choosing the physics — adiabatic vs isothermal changes the sound speed by a factor $\sqrt{\gamma}$.*

*Check.* $[\gamma k_B T_i\,\nabla n_i] = [\mathrm{J}][\mathrm{m^{-1}\,m^{-3}}] = [\mathrm{J\,m^{-4}}] = [\mathrm{N\,m^{-3}}]$, a force per unit volume ✓ — matching $q_i n_i E$ term-for-term.

## Watch out

- **You might think taking more moments eventually closes the system.** It never does. Moment $k$'s equation always contains moment $k{+}1$; the hierarchy is infinite by construction. Closure is an *external physical assumption*, not a moment you haven't taken yet.
- **You might treat $\mathbf{u}\cdot\nabla\mathbf{u}$ as negligible "because it's small."** It's the *nonlinear* convective term, and it is exactly what makes fluid dynamics hard (turbulence, shocks). Linear wave analysis drops it; equilibrium and instability analysis often cannot.
- **You might forget that two-fluid ≠ MHD.** MHD is what you get *after* summing the two fluids and taking the low-frequency, large-scale limit ($\omega\ll\Omega_{ci}$, $L\gg r_{Li}$). Phenomena faster than an ion gyration or smaller than a Larmor radius — Langmuir oscillations, two-stream — need the two-fluid (or kinetic) picture; MHD is blind to them.

## One-liner

> Velocity moments turn Vlasov into fluid equations — continuity, then momentum with the Lorentz force added — but each moment needs the next, so you must *close* the ladder with an equation of state.

## Problems

**P1 (🟢)** Take the zeroth moment of the 1-D Vlasov equation $\partial_t f + v\,\partial_x f + (q/m)E\,\partial_v f = 0$ (fields uniform, $E=E(t)$) and derive the 1-D continuity equation. State explicitly why the $E$-term drops out.

**P2 (🟡)** In the electron momentum equation, list the four force-density terms and give the SI dimensions of each. Verify they all reduce to $\mathrm{N\,m^{-3}}$ (equivalently $\mathrm{kg\,m^{-2}\,s^{-2}}$).

**P3 (🔴, optional)** A single species has these unknown fields: $n$, the three components of $\mathbf{u}$, and the pressure $p$ (assume isotropic). You have the continuity equation and the three momentum equations. (a) Count unknowns vs equations. (b) How many more equations do you need, and what single physical assumption supplies them? (c) If instead you kept the *full* pressure tensor $\mathsf{P}$ (6 independent components), how does the count change?

<details>
<summary>Solutions</summary>

**P1** Integrate over $dv$ from $-\infty$ to $\infty$. Term 1: $\int \partial_t f\,dv = \partial_t\!\int f\,dv = \partial_t n$. Term 2: $\int v\,\partial_x f\,dv = \partial_x\!\int v f\,dv = \partial_x(n u)$, using $nu\equiv\int v f\,dv$. Term 3: since $E$ does not depend on $v$,

$$\int \frac{q}{m}E\,\partial_v f\,dv = \frac{q}{m}E\int \partial_v f\,dv = \frac{q}{m}E\,[\,f\,]_{-\infty}^{+\infty} = 0,$$

because $f\to 0$ at $v\to\pm\infty$ (a physical distribution has no particles at infinite speed). Result:

$$\frac{\partial n}{\partial t} + \frac{\partial (n u)}{\partial x} = 0.$$

*Check.* This is the 1-D case of the boxed continuity equation; units $[\mathrm{m^{-1}\,s^{-1}}]$ on both terms (here $n$ is a 1-D density $[\mathrm{m^{-1}}]$) ✓.

**P2** The four terms of $q_e n_e(\mathbf{E}+\mathbf{u}_e\times\mathbf{B}) - \nabla\cdot\mathsf{P}_e + \mathbf{R}_e$:

- **Electric force** $q_e n_e \mathbf{E}$: $[\mathrm{C}][\mathrm{m^{-3}}][\mathrm{V\,m^{-1}}] = [\mathrm{C\,V\,m^{-4}}] = [\mathrm{J\,m^{-4}}] = \mathrm{N\,m^{-3}}$ ✓.
- **Magnetic force** $q_e n_e\,\mathbf{u}_e\times\mathbf{B}$: $[\mathrm{C}][\mathrm{m^{-3}}][\mathrm{m\,s^{-1}}][\mathrm{T}]$. With $\mathrm{T}=\mathrm{kg\,s^{-2}\,A^{-1}}$ and $\mathrm{C=A\,s}$: $[\mathrm{A\,s\cdot m^{-3}\cdot m\,s^{-1}\cdot kg\,s^{-2}A^{-1}}] = \mathrm{kg\,m^{-2}\,s^{-2}} = \mathrm{N\,m^{-3}}$ ✓.
- **Pressure force** $\nabla\cdot\mathsf{P}_e$: $[\mathrm{m^{-1}}][\mathrm{Pa}] = [\mathrm{m^{-1}}][\mathrm{N\,m^{-2}}] = \mathrm{N\,m^{-3}}$ ✓.
- **Friction** $\mathbf{R}_e$: it must match the others, $\mathrm{N\,m^{-3}}$ ✓ (it is a momentum-transfer rate per unit volume, $[\mathrm{kg\,m^{-2}\,s^{-2}}]$).

All four are force per unit volume, as they must be to sum. *Check.* The left side $m_e n_e\,\partial_t\mathbf{u}_e$ is $[\mathrm{kg}][\mathrm{m^{-3}}][\mathrm{m\,s^{-1}\,s^{-1}}]=\mathrm{kg\,m^{-2}\,s^{-2}}=\mathrm{N\,m^{-3}}$ ✓ — consistent.

**P3** (a) Unknowns: $n$ (1) $+$ $\mathbf{u}$ (3) $+$ $p$ (1) $=$ **5**. Equations: continuity (1) $+$ momentum (3) $=$ **4**. One short. (b) You need **1** more equation, supplied by a single assumption: an **equation of state / closure** relating $p$ to $n$ (e.g. adiabatic $p\propto n^\gamma$ or isothermal $p=nk_BT$). That closes the count at $5=5$. (c) With the full tensor $\mathsf{P}$ (6 components) the unknowns become $1+3+6=10$ while equations stay at 4 (continuity + momentum) — a shortfall of 6, requiring six closure relations (or a full energy/heat-flux treatment). *Check.* More retained moments $\Rightarrow$ more unknowns $\Rightarrow$ a bigger closure gap — the hierarchy penalizes you for keeping detail, exactly the tension the diagram shows.

</details>

## Flashback

**From Lesson 2.1 (The distribution function & its moments):** A 1-D electron gas has the Maxwellian $f(v) = n_0\left(\dfrac{m}{2\pi k_B T}\right)^{1/2} e^{-mv^2/2k_BT}$. Compute the **second moment about the mean**, $m\!\int (v-\bar v)^2 f\,dv$ with $\bar v = 0$, and confirm it equals the scalar pressure $p = n_0 k_B T$.

<details>
<summary>Solution</summary>

With $\bar v=0$ the second moment is $p = m\int_{-\infty}^{\infty} v^2 f(v)\,dv$. Write $a \equiv m/2k_BT$, so $f = n_0\sqrt{a/\pi}\,e^{-av^2}$. Use the Gaussian integral $\int_{-\infty}^{\infty} v^2 e^{-av^2}\,dv = \tfrac12\sqrt{\pi}\,a^{-3/2}$:

$$p = m\,n_0\sqrt{\tfrac{a}{\pi}}\cdot \tfrac12\sqrt{\pi}\,a^{-3/2} = m\,n_0\cdot\tfrac12 a^{-1} = m\,n_0\cdot\tfrac12\cdot\frac{2k_BT}{m} = n_0 k_B T. \qquad\checkmark$$

*In words: pressure is literally the mean thermal kinetic energy density — the spread of the distribution, weighted by mass.* *Check.* Recovers $p=n_0k_BT$, the ideal-gas law, and the temperature appears exactly as the width of the Maxwellian — the moment definition of $T$ from [`stat-mech`](../../stat-mech/syllabus.md). Units: $[\mathrm{kg}][\mathrm{m^{-1}}][\mathrm{m^2\,s^{-2}}]=[\mathrm{kg\,m\,s^{-2}\,m^{-2}}]=\mathrm{Pa}$ (1-D density $n_0$ is $\mathrm{m^{-1}}$) ✓.

</details>

## Connections

- **Backward:** the fluid quantities $n,\mathbf{u},\mathsf{P}$ are the very moments of $f$ built in [2.1](02-01-distribution-function-moments.md), and the equation we averaged is the Vlasov equation of [2.2](02-02-vlasov-equation.md). Landau damping ([2.4](02-04-landau-damping.md)) is a warning shot: it lives in the fine velocity structure of $f$ near $v\approx\omega/k$ that moments *throw away* — so no purely fluid theory can reproduce it. That is the cost of averaging.
- **Forward:** [3.2](03-02-ideal-mhd-frozen-flux.md) adds and subtracts the two species' momentum equations to build single-fluid MHD and a generalized Ohm's law; the friction $\mathbf{R}_s$ you met here becomes resistivity, and the pressure closure becomes the MHD equation of state.
- **Sideways (fluid dynamics):** the continuity and momentum equations are structurally *identical* to those in the [`fluid-dynamics` syllabus](../../fluid-dynamics/syllabus.md) — same $\partial_t n+\nabla\cdot(n\mathbf{u})=0$, same convective derivative $\partial_t\mathbf{u}+\mathbf{u}\cdot\nabla\mathbf{u}$ — with one addition: the Lorentz force $qn(\mathbf{E}+\mathbf{u}\times\mathbf{B})$. Plasma fluid theory is Navier–Stokes that carries a charge. The closure problem is likewise shared: ordinary fluids close the same hierarchy with their own equation of state.

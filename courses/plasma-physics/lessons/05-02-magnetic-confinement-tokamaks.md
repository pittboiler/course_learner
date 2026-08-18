# Plasma Physics · Lesson 5.2: Magnetic confinement — tokamaks & mirrors

> ⏱ ~15 min · Module 5: Fusion & astrophysical plasmas · Builds on: [5.1 Fusion reactions & the Lawson criterion](05-01-fusion-lawson-criterion.md), [1.4 Grad-B, curvature & polarization drifts](01-04-gradb-curvature-polarization-drifts.md) · Unlocks: [5.3 The solar wind & magnetospheres](05-03-solar-wind-magnetospheres.md)

## Why this matters

[Lesson 5.1](05-01-fusion-lawson-criterion.md) set the bar: to ignite, a D–T plasma must hold $n T \tau_E$ above the Lawson threshold, which above all means holding a 100-million-kelvin gas together long enough for fusion to pay off. No solid wall survives contact with that plasma, so the only container is a **magnetic bottle** — a field arranged so charged particles orbit *inside* it and never reach the wall. This lesson is how that bottle is actually built, why the obvious designs fail, and why the winning one is a twisted doughnut. Every fact you need was already derived back in Module 1; here we finally assemble them into a reactor.

## The idea

A magnetic field is a great sideways cage and a terrible endways one. A charged particle spirals tightly around a field line ([1.3](01-03-gyration-exb-drift.md)) with a Larmor radius of millimetres — so **across** $\mathbf{B}$ it is pinned. But **along** $\mathbf{B}$ nothing stops it: it streams freely down the line like a bead on a wire. So the whole game of confinement is: what do you do about motion *along* the field?

Three answers, in order of cleverness:

- **A straight solenoid.** Field lines run down a tube; particles gyrate across and stream along — straight out the two ends. It leaks instantly. A **magnetic mirror** ([1.5](01-05-adiabatic-invariants-mirrors.md)) plugs the ends by making $B$ stronger there, reflecting particles via conservation of the magnetic moment $\mu$ — but only those outside the **loss cone** are reflected; the rest escape. A mirror is a leaky bottle, and the leak is built into its geometry.
- **Bend the tube into a doughnut (a torus).** Now the field lines close on themselves — *no ends to leak from.* This feels like the whole solution. It isn't: a purely toroidal field is stronger on the inside of the doughnut than the outside ($B \propto 1/R$), and that non-uniformity plus the field-line curvature sets off the **drift chain** from [1.4](01-04-gradb-curvature-polarization-drifts.md) that hurls the plasma into the wall. A plain torus does **not** confine.
- **Twist the field lines** so each one spirals from the top of the doughnut to the bottom and back as it goes around. Now a particle drifting "up" while it's on top finds itself drifting "down" once the twist carries it underneath — the drifts *cancel over a lap* and the charge separation that killed the plain torus never builds. This twist is the **rotational transform**, and the machine that produces it with a plasma current is the **tokamak**.

## The formal version

**Why a plain torus fails — the drift chain.** In a purely toroidal field the lines are circles the long way around, so they curve, and Ampère's law forces $B \propto 1/R$ (stronger toward the central hole). Both effects drive charge-dependent guiding-center drifts from [1.4](01-04-gradb-curvature-polarization-drifts.md). Their combined vertical velocity is

$$v_{\nabla B + R} = \frac{m}{qB}\,\frac{v_\parallel^2 + \tfrac12 v_\perp^2}{R},$$

where $q$ is the signed charge, $m$ the mass, $R$ the major radius (distance from the doughnut's central axis), and $v_\parallel, v_\perp$ the speeds along and across $\mathbf{B}$. *In words: curvature and grad-B together push each particle vertically, at a speed set by its energy and how tight the doughnut is.* The $1/q$ is the whole disaster: **ions drift up, electrons drift down** (or vice versa). Charge piles up top and bottom → a vertical electric field $\mathbf{E}$ grows → and now the charge-*independent* $\mathbf{E}\times\mathbf{B}$ drift ([1.3](01-03-gyration-exb-drift.md)),

$$\mathbf{v}_E = \frac{\mathbf{E}\times\mathbf{B}}{B^2},$$

points radially **outward** and sweeps the *entire* plasma — ions and electrons alike — straight into the outer wall in microseconds. The killer is not the vertical drift itself but the $\mathbf{E}\times\mathbf{B}$ it triggers.

**The fix — rotational transform.** Add a **poloidal** field $B_\theta$ (the short way around the tube) on top of the **toroidal** field $B_\phi$ (the long way). The total field line is now a helix: it winds around the tube's little circle as it travels around the big circle, threading top *and* bottom. A particle riding that line spends half its lap in the "drift-up" region and half in the "drift-down" region, so the vertical drift integrates to zero and — more importantly — the twist lets charge flow *along the field* from top to bottom, **shorting out** the vertical $\mathbf{E}$ before it can build. Confinement is restored not by stopping the drift but by short-circuiting its consequence.

The amount of twist is the **rotational transform** $\iota$ (iota) — the poloidal angle a line advances per toroidal lap — or, more commonly, its reciprocal the **safety factor**

$$\boxed{\;q = \frac{\text{toroidal turns the line makes}}{\text{poloidal turns the line makes}} \approx \frac{r\,B_\phi}{R\,B_\theta}\;}$$

where $r$ is the minor radius (the tube's own radius) and $R$ the major radius. *In words: $q$ counts how many times the line goes the long way for each time it goes the short way; large $q$ = a gently twisting, mostly-toroidal line.* The name "safety factor" is literal: MHD stability ([Module 3](03-04-mhd-equilibrium-pinches.md)) requires

$$q > 1 \quad(\text{Kruskal–Shafranov limit}),$$

or the column buckles sideways in the $m=1$ **kink** instability. Too little twist and the plasma writhes apart; the field must spiral *enough*, but a full poloidal turn per toroidal lap ($q<1$) is too much.

**How the twist is made — tokamak vs stellarator.**

- **Tokamak** (*toroidalnaya kamera*): drive a large **toroidal current** through the plasma itself — the plasma is the secondary winding of a transformer. By Ampère's law that current wraps a poloidal field around it, exactly the $B_\theta$ we need. Elegant, but the transformer can only push current while its flux is *changing*, so the basic tokamak is inherently **pulsed** (hence the hunt for steady-state current drive). The nested helical field lines sweep out **flux surfaces** — nested toroidal shells of constant pressure, the equilibrium of [3.4](03-04-mhd-equilibrium-pinches.md)'s Grad–Shafranov picture.
- **Stellarator**: make the twist entirely with **external, non-planar coils** — no plasma current at all. Steady-state and kink-free by construction, but the coils are fiendish to design and build (Wendelstein 7-X is the modern example).
- **Mirror machine**: the open-ended alternative — two magnetic plugs on a straight tube ([1.5](01-05-adiabatic-invariants-mirrors.md)). Mechanically simple, no toroidal drift problem, but it leaks continuously through the loss cone. That end-loss is why mirrors lost the confinement race to tokamaks.

## Picture

![A perspective tokamak torus: the toroidal field runs the long way around (grey), a poloidal field circles the short way around the tube cross-section (coral), and their sum is a helical field line spiraling over a nested flux surface; the cross-section inset marks the safety factor q](assets/05-02-fig1.svg)

## Worked examples

**Example 1 (the drift chain — a plain torus loses its plasma).** A tokamak-scale deuteron ($m = 3.34\times10^{-27}$ kg, $q = +1.6\times10^{-19}$ C) has $v_\parallel = v_\perp = 5\times10^5$ m/s in a *purely toroidal* field $B = 5$ T at major radius $R = 3$ m. (a) Find its vertical drift. (b) That drift builds a vertical field $E \approx 1$ V/m before anything shorts it out; find the resulting outward $\mathbf{E}\times\mathbf{B}$ speed and compare.

(a) Combined grad-B + curvature drift:

$$v_{\nabla B+R} = \frac{m}{qBR}\left(v_\parallel^2 + \tfrac12 v_\perp^2\right) = \frac{3.34\times10^{-27}}{(1.6\times10^{-19})(5)(3)}\left[(5\times10^5)^2 + \tfrac12(5\times10^5)^2\right].$$

The bracket is $1.5\times(2.5\times10^{11}) = 3.75\times10^{11}\ \mathrm{m^2/s^2}$, and the prefactor is $3.34\times10^{-27}/(2.4\times10^{-18}) = 1.39\times10^{-9}$, so

$$v_{\nabla B+R} \approx (1.39\times10^{-9})(3.75\times10^{11}) \approx 5.2\times10^{2}\ \mathrm{m/s}.$$

Electrons drift the opposite way — charge separates.

(b) An early $E = 1$ V/m gives an outward drift

$$v_E = \frac{E}{B} = \frac{1}{5} = 0.2\ \mathrm{m/s},$$

which sounds harmless — but $E$ does not stop there. The vertical drift keeps pumping charge to top and bottom, so $E$ climbs: at a few hundred V/m, $v_E = 300/5 = 60$ m/s outward *and still rising*, and unchecked it reaches thousands of m/s, carrying the plasma across the half-metre to the wall in well under a millisecond. **The point:** the vertical drift (500 m/s) is trivial on its own, but the $\mathbf{E}$ it charges up becomes an unbounded outward sweep. Only the rotational transform, by letting charge drain along $\mathbf{B}$, stops $E$ from ever getting there.

*Check.* Units of (a): $\frac{\mathrm{kg}}{\mathrm{C\cdot T\cdot m}}\cdot\frac{\mathrm{m^2}}{\mathrm{s^2}} = \frac{\mathrm{kg\,m^2/s^2}}{\mathrm{C\cdot T\cdot m}}$, and $\mathrm{C\cdot T = kg/s}$, so this is $\frac{\mathrm{kg\,m^2/s^2}}{(\mathrm{kg/s})\,\mathrm{m}} = \mathrm{m/s}$ ✓. And $500\ \mathrm{m/s} \ll v_\perp = 5\times10^5$ m/s, so the guiding-center picture holds. ✓

**Example 2 (safety factor from the field ratio).** A tokamak has toroidal field $B_\phi = 5$ T on axis, poloidal field $B_\theta = 0.5$ T at the plasma edge, major radius $R = 3$ m, minor radius $r = 1$ m. (a) Find the edge safety factor $q$. (b) Is it Kruskal–Shafranov stable? (c) How many times does an edge field line wind the long way for each time it winds the short way?

(a)

$$q = \frac{r\,B_\phi}{R\,B_\theta} = \frac{(1)(5)}{(3)(0.5)} = \frac{5}{1.5} \approx 3.3.$$

(b) $q \approx 3.3 > 1$, comfortably above the Kruskal–Shafranov limit — stable against the $m=1$ kink. (Real tokamaks aim for $q \gtrsim 3$ at the edge for exactly this margin.)

(c) $q \approx 3.3$ means the line makes about **3.3 toroidal laps for every single poloidal lap** — a gently rising helix, mostly going the long way, with just enough twist to thread top and bottom.

*Check.* $q$ is a ratio of fields times a ratio of lengths — dimensionless ✓, as a "number of turns per turn" must be. Cranking $B_\theta$ up (more plasma current) *lowers* $q$ toward the danger zone; that is why you cannot simply pour in current to improve confinement — the kink limit caps it. ✓

## Watch out

- **You might think closing the tube into a torus is enough** because it removes the ends. It removes end-*loss*, but it *creates* the curvature/grad-B drift problem. A torus without a poloidal twist confines *worse* than you'd hope — the plasma is gone in microseconds. Ends and drifts are two separate leaks; the torus fixes one and opens the other.
- **You might think the vertical drift itself throws the plasma out.** It doesn't — 500 m/s is trivial. The damage is done by the $\mathbf{E}\times\mathbf{B}$ drift that the resulting charge separation triggers, which is charge-*independent* and unbounded. The transform's job is to kill the *charge separation*, not the drift.
- **You might read "safety factor" as "bigger is safer, so maximize it."** Not quite: you need $q>1$ for kink stability, but the useful confinement (and the plasma current that heats and shapes the plasma) wants $q$ not *too* large. Tokamaks live in a window, typically $q\sim 1$ on axis rising to $q\sim 3$–$4$ at the edge.

## One-liner

> A straight field leaks out its ends and a plain torus drifts into its wall; twist the field lines just enough ($q>1$) and the up-drift and down-drift short each other out — that rotational transform *is* magnetic confinement.

## Problems

**P1 (🟢)** A tokamak has $B_\phi = 4$ T, $B_\theta = 0.8$ T at the edge, major radius $R = 2.5$ m, minor radius $r = 0.8$ m. (a) Find the edge safety factor $q$. (b) Is it above the Kruskal–Shafranov limit? (c) Roughly how many toroidal laps per poloidal lap does an edge field line make?

**P2 (🟡)** In one or two sentences each, explain physically: (a) why a *purely* toroidal field cannot confine a plasma even though it has no ends; (b) why adding a poloidal field (rotational transform) fixes it — name the specific quantity the twist prevents from building up.

**P3 (🔴, optional)** A proton in a purely toroidal field has $v_\parallel = 1\times10^6$ m/s, $v_\perp = 1\times10^6$ m/s, in $B = 4$ T at $R = 2$ m. (a) Find its combined grad-B + curvature vertical drift speed. (b) The stray vertical field grows to $E = 200$ V/m before charge drains; find the outward $\mathbf{E}\times\mathbf{B}$ speed and the time to cross $r = 0.5$ m to the wall, and comment on whether the plain torus confines.

<details>
<summary>Solutions</summary>

**P1** (a)

$$q = \frac{r B_\phi}{R B_\theta} = \frac{(0.8)(4)}{(2.5)(0.8)} = \frac{3.2}{2.0} = 1.6.$$

(b) $q = 1.6 > 1$, so yes — above Kruskal–Shafranov, kink-stable (though with less margin than a $q\approx3$ machine). (c) About **1.6 toroidal laps for each poloidal lap** — a fairly tight twist.

*Check.* Dimensionless ✓. Note the smaller $q$ here comes from the larger $B_\theta$ (more current) — closer to the kink boundary, as expected. ✓

**P2** (a) Closing the tube removes the ends, but a purely toroidal field is stronger on the inboard side ($B\propto1/R$) and its lines are curved, so grad-B and curvature drifts — both carrying $1/q$ — push ions and electrons in *opposite* vertical directions. That charge separation builds a vertical $\mathbf{E}$, and the resulting $\mathbf{E}\times\mathbf{B}$ drift (charge-independent) sweeps the whole plasma radially outward into the wall. (b) The poloidal field twists each line into a helix threading top and bottom, so charge can flow *along* $\mathbf{B}$ from the top pile to the bottom pile — this **shorts out the vertical electric field** before it can grow, and without that $\mathbf{E}$ there is no outward $\mathbf{E}\times\mathbf{B}$ sweep. The specific thing the twist prevents is the **vertical charge separation / vertical $\mathbf{E}$**.

**P3** (a) Combined drift, with $v_\parallel^2 + \tfrac12 v_\perp^2 = (10^{12}) + \tfrac12(10^{12}) = 1.5\times10^{12}\ \mathrm{m^2/s^2}$:

$$v_{\nabla B+R} = \frac{m}{qBR}\left(v_\parallel^2 + \tfrac12 v_\perp^2\right) = \frac{1.67\times10^{-27}}{(1.6\times10^{-19})(4)(2)}(1.5\times10^{12}).$$

Prefactor $= 1.67\times10^{-27}/(1.28\times10^{-18}) = 1.30\times10^{-9}$, so $v_{\nabla B+R} = (1.30\times10^{-9})(1.5\times10^{12}) \approx 2.0\times10^{3}\ \mathrm{m/s}$.

(b) Outward $\mathbf{E}\times\mathbf{B}$ speed: $v_E = E/B = 200/4 = 50\ \mathrm{m/s}$. Time to cross $r = 0.5$ m: $t = 0.5/50 = 0.01\ \mathrm{s} = 10\ \mathrm{ms}$ — and that is with $E$ frozen at 200 V/m; unchecked, $E$ keeps growing and the real time is far shorter. Either way the plasma reaches the wall on a timescale set by the drift, not by anything confining it: **the plain torus does not confine.** Only the rotational transform, by draining the charge along $\mathbf{B}$, prevents $E$ from ever reaching even this value.

*Check.* (a) $2\times10^3\ \mathrm{m/s} \ll v_\perp = 10^6$ m/s, guiding-center valid ✓. (b) $v_E = (\mathrm{V/m})/\mathrm{T} = \mathrm{m/s}$ ✓; 10 ms is catastrophically short next to the $\gtrsim 1$ s energy confinement a reactor needs ([5.1](05-01-fusion-lawson-criterion.md)). ✓

</details>

## Flashback

**From Lesson 5.1 (Fusion & the Lawson criterion):** A D–T plasma runs at density $n = 1\times10^{20}\ \mathrm{m^{-3}}$, temperature $T = 10$ keV, with an energy confinement time $\tau_E = 3$ s. Compute the triple product $n T \tau_E$ (in keV·s·m⁻³) and compare it to the rough D–T ignition target of $3\times10^{21}\ \mathrm{keV\,s\,m^{-3}}$. Does this plasma ignite?

<details>
<summary>Solution</summary>

$$n T \tau_E = (1\times10^{20})(10)(3) = 3\times10^{21}\ \mathrm{keV\,s\,m^{-3}}.$$

That sits right at the $\sim 3\times10^{21}\ \mathrm{keV\,s\,m^{-3}}$ D–T ignition target — so this plasma is **marginally at ignition**: alpha self-heating roughly balances losses. A little more density, temperature, or confinement and it burns.

*Check.* Units: $\mathrm{m^{-3}\cdot keV\cdot s} = \mathrm{keV\,s\,m^{-3}}$ ✓. This is exactly the quantity tokamak design ([this lesson](05-02-magnetic-confinement-tokamaks.md)) exists to maximize — the rotational transform buys the $\tau_E$ factor by keeping the plasma off the wall. ✓

</details>

## Connections

- **Backward:** the entire failure mode of the plain torus *is* the grad-B + curvature drift chain of [1.4](01-04-gradb-curvature-polarization-drifts.md) — charge-dependent drifts building a vertical $\mathbf{E}$, then a charge-independent $\mathbf{E}\times\mathbf{B}$ ([1.3](01-03-gyration-exb-drift.md)) sweeping everything out. The mirror alternative is the loss-cone confinement of [1.5](01-05-adiabatic-invariants-mirrors.md). The nested helical flux surfaces are the MHD equilibrium of [3.4 (pinches & flux surfaces)](03-04-mhd-equilibrium-pinches.md), and the $q>1$ Kruskal–Shafranov condition is the kink stability of Module 3's energy principle.
- **Forward:** [5.3 (solar wind & magnetospheres)](05-03-solar-wind-magnetospheres.md) reuses these same single-particle drifts to explain the ring current and radiation belts — nature's own magnetic bottle around a planet. The engineering side of confinement — heating, divertors, steady-state current drive, materials — is the subject of the future [`fusion-plasma`](../../fusion-plasma/syllabus.md) course.
- **Sideways:** the safety factor and rotational transform are the practical face of the flux-surface topology in [3.4](03-04-mhd-equilibrium-pinches.md); and the "twist to stabilize" idea is the toroidal cousin of adding an axial field to stabilize a Z-pinch against the kink (Module 3's Boss problem).

# Semiconductor Devices · Lesson 1.4: The continuity equations

> ⏱ ~15 min · Module 1: Carriers and transport · Builds on: [1.2 Drift, diffusion and the Einstein relation](01-02-drift-diffusion-einstein.md), [1.3 Generation and recombination](01-03-generation-recombination.md) · Unlocks: [2.1 Junction electrostatics](02-01-junction-electrostatics.md), [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md)

## Why this matters

This lesson assembles the last three into one equation, and that equation is the engine of the whole course. Every device result from here — the diode's $I_0$, the BJT's current gain, the solar cell's collection efficiency — comes from solving it in a particular region with particular boundary conditions.

The assembly is nothing more than conservation: carriers in a slab change because they flow in, flow out, are born, or die. But the *form* the equation takes under low-level injection is worth the lesson on its own. It collapses to a linear second-order ODE whose solutions are exponentials with a single characteristic length, $L = \sqrt{D\tau}$ — the [diffusion length](../reference.md#diffusion-length) — which becomes the natural ruler for every bipolar device. Whether a region is "long" or "short" compared with $L$ decides which of two completely different formulas applies, and that comparison is the most consequential design decision in bipolar engineering.

## The idea

Draw a thin slab of semiconductor between $x$ and $x+dx$ and count holes.

The number inside changes for exactly four reasons: some flow in the left face, some flow out the right face, some are generated inside, some recombine inside. Write that down and divide by the volume, and you have the continuity equation. It is bookkeeping — the same bookkeeping as the mass conservation of [`fluid-dynamics` 1.3](../../fluid-dynamics/lessons/01-03-continuity-equation.md), with recombination playing the role of a chemical sink.

Then three simplifications turn it into something solvable, and each is worth understanding because knowing when they fail is how you know when a device model breaks.

**Track the minority carrier only.** The majority carrier is barely perturbed under low-level injection, so its equation is uninformative; all the physics is in the minority.

**Drop drift in the neutral regions.** Outside the depletion region the material is quasi-neutral and highly conductive, so it takes almost no field to carry the current. Minority transport is essentially pure diffusion — exactly the estimate you made in [1.2](01-02-drift-diffusion-einstein.md) Example 1.

**Linearize the recombination.** Low-level injection gives $U = \delta p/\tau_p$, which is linear in the unknown. That is what makes the equation solvable in closed form.

What emerges is the **minority-carrier diffusion equation**, and in steady state it is about as simple as a differential equation gets: the second derivative of the excess equals the excess divided by $L^2$. Its solutions are $e^{\pm x/L}$, and $L$ — a few microns to a millimetre in silicon — is how far a minority carrier gets before recombining. Everything downstream is a matter of picking the right boundary conditions.

## The formal version

**Continuity equations.** Counting carriers in a slab:

$$\boxed{\;\frac{\partial p}{\partial t} = -\frac{1}{q}\frac{\partial J_p}{\partial x}+G_p-R_p, \qquad \frac{\partial n}{\partial t} = +\frac{1}{q}\frac{\partial J_n}{\partial x}+G_n-R_n.\;}$$

*In words: the carrier density at a point changes at a rate set by the imbalance of flux in and out, plus whatever is created there, minus whatever is destroyed there.* The sign difference is the charge sign again: a divergence of *hole current* removes holes, while a divergence of *electron current* adds electrons.

**Substituting transport.** Insert $J_p = qp\mu_p\mathcal{E}-qD_p\,\partial p/\partial x$ and write $U_p = R_p-G_p^{\rm thermal} = \delta p/\tau_p$:

$$\frac{\partial\,\delta p}{\partial t} = -\mu_p\frac{\partial(p\mathcal{E})}{\partial x}+D_p\frac{\partial^2 p}{\partial x^2}+G_L-\frac{\delta p}{\tau_p},$$

with $G_L$ any external generation (light, for instance).

**The minority-carrier diffusion equation.** In a quasi-neutral region with negligible field:

$$\boxed{\;\frac{\partial\,\delta p}{\partial t} = D_p\frac{\partial^2\,\delta p}{\partial x^2}-\frac{\delta p}{\tau_p}+G_L.\;}$$

*In words: the excess spreads by diffusion, decays by recombination, and is topped up by generation.* This is the diffusion equation of [`transport-phenomena`](../../transport-phenomena/syllabus.md) with a first-order sink — mathematically identical to a reacting species diffusing through a catalyst pellet.

**Steady state, no external generation.** Setting $\partial/\partial t = 0$ and $G_L=0$:

$$\frac{d^2\,\delta p}{dx^2} = \frac{\delta p}{L_p^2}, \qquad \boxed{\;L_p \equiv \sqrt{D_p\tau_p}\;}$$

with general solution

$$\delta p(x) = Ae^{-x/L_p}+Be^{+x/L_p}.$$

**The diffusion length, physically.** $L = \sqrt{D\tau}$ is the distance a minority carrier diffuses, on average, before recombining. It is the random-walk relation: a walker with diffusivity $D$ covers $\sqrt{Dt}$ in time $t$, and here the available time is the lifetime. Typical silicon values:

| $\tau$ | $L_p$ (in $N_d=10^{16}$, $D_p = 10.4$) |
|---|---|
| 1 ns | 0.1 µm |
| 100 ns | 1.0 µm |
| 1 µs | 3.2 µm |
| 10 µs | 10 µm |
| 1 ms | 102 µm |

**Two canonical solutions.** Everything in Modules 2–4 is one of these.

*Long region* ($W\gg L_p$). Boundary conditions $\delta p(0) = \delta p_0$ and $\delta p(\infty)=0$ force $B=0$:

$$\delta p(x) = \delta p_0\,e^{-x/L_p}, \qquad J_p(0) = -qD_p\frac{d\,\delta p}{dx}\bigg|_0 = \frac{qD_p\,\delta p_0}{L_p}.$$

*In words: the excess decays exponentially over one diffusion length, and the injected current is set by $D_p/L_p$.* Note $D_p/L_p = D_p/\sqrt{D_p\tau_p} = \sqrt{D_p/\tau_p}$ — a **velocity**, and a useful way to think of it: injection current is charge density times an effective diffusion velocity.

*Short region* ($W\ll L_p$). Boundary conditions $\delta p(0)=\delta p_0$, $\delta p(W)=0$ (an ohmic contact holds the excess at zero). With $W\ll L_p$ the exponentials linearize, and

$$\delta p(x) = \delta p_0\left(1-\frac{x}{W}\right), \qquad J_p(0) = \frac{qD_p\,\delta p_0}{W}.$$

*In words: a linear ramp, and the current is set by the physical width instead of the diffusion length.* Almost no carriers recombine on the way — they all reach the contact.

**Why the short-base case matters so much.** Compare the two currents:

$$\frac{J^{\rm short}}{J^{\rm long}} = \frac{L_p}{W}.$$

A region ten times shorter than a diffusion length passes **ten times** the current for the same injection level. That is not a small effect, and it is the design principle behind:

- the **BJT**, whose thin base is precisely a short-base region — its gain is essentially $L/W$ ([3.2](03-02-bjt-currents-and-gain.md));
- **short-base diodes**, which get a lower forward voltage for the same current;
- and, read the other way, the reason a solar cell wants the *opposite* — a long diffusion length compared with the wafer thickness, so photogenerated carriers reach the junction instead of recombining ([4.3](04-03-solar-cell.md)).

**Boundary conditions you will use.**

| Situation | Condition |
|---|---|
| Ohmic contact | $\delta p = 0$ (contact pins carriers at equilibrium) |
| Edge of a biased junction | $\delta p = p_0(e^{qV/k_BT}-1)$ — the *law of the junction*, derived in [2.2](02-02-ideal-diode-equation.md) |
| Semi-infinite region | $\delta p\to0$ as $x\to\infty$ |
| Surface with recombination velocity $S$ | $D_p\,\dfrac{d\,\delta p}{dx} = S\,\delta p$ |
| Reflecting (perfectly passivated) surface | $\dfrac{d\,\delta p}{dx} = 0$ |

**Transient solutions.** With no field and uniform excess, the spatial term drops and

$$\frac{d\,\delta p}{dt} = -\frac{\delta p}{\tau_p} \quad\Longrightarrow\quad \delta p(t) = \delta p(0)e^{-t/\tau_p},$$

which is how lifetime is actually measured (photoconductive decay: flash the sample, watch the conductivity relax).

## Picture

![Two panels sharing a horizontal position axis. Left: the long-base case, showing an exponentially decaying excess hole profile from delta p at x equals zero, with the one over e point marked at one diffusion length L_p, and the region extending far beyond. Right: the short-base case, with the same injected value at x equals zero falling linearly to zero at a contact at width W much less than L_p, with the steeper initial slope highlighted and both slopes compared by dashed tangent lines.](assets/01-04-fig1.svg)

The two panels differ only in where the far boundary sits, and everything about the device follows from that. On the left the profile decays exponentially and most carriers recombine before going far; the slope at the origin — which *is* the current — is $\delta p_0/L_p$. On the right a contact at $W\ll L_p$ forces the profile to zero much sooner, so the slope is $\delta p_0/W$: steeper by the factor $L_p/W$, and the current is larger by that same factor. **The tangent at the origin is the whole story**, because $J\propto d\,\delta p/dx|_0$.

## Worked examples

**Example 1 (the boss-problem calculation: injection into a long bar).** An $n$-type silicon bar has $N_d = 5\times10^{16}\ \mathrm{cm^{-3}}$ and hole lifetime $\tau_p = 1\ \mu$s. It is long and field-free, and illumination at $x=0$ maintains $\delta p(0) = 10^{13}\ \mathrm{cm^{-3}}$.

*Equilibrium minority density.*

$$p_0 = \frac{n_i^2}{N_d} = \frac{10^{20}}{5\times10^{16}} = 2\times10^{3}\ \mathrm{cm^{-3}}.$$

The injected $10^{13}$ exceeds this by $5\times10^9$ — and yet is only $2\times10^{-4}$ of the majority density. Low-level injection ✓.

*Transport parameters.* At $N_d = 5\times10^{16}$, interpolating the [1.2](01-02-drift-diffusion-einstein.md) table, $\mu_p\approx 350\ \mathrm{cm^2/V\cdot s}$:

$$D_p = V_T\mu_p = 0.0259\times350 = 9.07\ \mathrm{cm^2/s}.$$

*Diffusion length.*

$$L_p = \sqrt{D_p\tau_p} = \sqrt{(9.07)(10^{-6})} = \sqrt{9.07\times10^{-6}} = 3.01\times10^{-3}\ \mathrm{cm} = 30.1\ \mu\mathrm{m}.$$

*Profile and current.*

$$\delta p(x) = 10^{13}e^{-x/30.1\,\mu\mathrm{m}}\ \mathrm{cm^{-3}},$$

$$J_p(0) = \frac{qD_p\,\delta p(0)}{L_p} = \frac{(1.602\times10^{-19})(9.07)(10^{13})}{3.01\times10^{-3}} = \frac{1.453\times10^{-5}}{3.01\times10^{-3}} = 4.83\times10^{-3}\ \mathrm{A/cm^2}.$$

*The field that would make drift matter.* Using [1.2](01-02-drift-diffusion-einstein.md)'s result that an exponential has a single characteristic field:

$$\mathcal{E}_{\rm tie} = \frac{V_T}{L_p} = \frac{0.0259}{3.01\times10^{-3}} = 8.6\ \mathrm{V/cm}.$$

*Which dominates in a real diode?* In the quasi-neutral region of a forward-biased diode the field is far below 8.6 V/cm — the region is a good conductor carrying a modest current, so the ohmic drop across tens of microns is millivolts, giving fields of order 0.1–1 V/cm. **Diffusion dominates by an order of magnitude or more**, which is exactly the licence [2.2](02-02-ideal-diode-equation.md) needs to drop the drift term. (Inside the depletion region the reverse is true by a factor of $10^4$.)

**Example 2 (short base versus long base, and why a BJT exists).** The same material and injection level, but now the bar is terminated by an ohmic contact at $W = 3\ \mu$m — a tenth of a diffusion length.

*Profile.* With $\delta p(0) = 10^{13}$ and $\delta p(W) = 0$, the exact solution is the hyperbolic-sine form

$$\delta p(x) = \delta p_0\frac{\sinh[(W-x)/L_p]}{\sinh(W/L_p)},$$

but with $W/L_p = 3/30.1 = 0.0997\ll1$ we can expand $\sinh u\approx u$:

$$\delta p(x)\approx \delta p_0\left(1-\frac{x}{W}\right)$$

— a straight line, to better than 0.2%.

*Current.*

$$J_p^{\rm short}(0) = \frac{qD_p\delta p_0}{W} = \frac{1.453\times10^{-5}}{3\times10^{-4}} = 4.84\times10^{-2}\ \mathrm{A/cm^2}.$$

**Ten times the long-base current**, for the same injection level — exactly the ratio $L_p/W = 30.1/3 = 10.0$ ✓.

*Where did the extra current come from?* Not from more injection; $\delta p(0)$ is identical. It comes from the *slope*. In the long bar the profile has 30 µm to fall over; in the short one it must reach zero in 3 µm, so it falls ten times as steeply, and current is proportional to slope.

*And what fraction recombines on the way?* In the long case, essentially all of them — every carrier injected eventually recombines somewhere in the bar. In the short case, the recombination current is the integral of $\delta p/\tau_p$ over the region:

$$J_{\rm rec} = q\int_0^W\frac{\delta p}{\tau_p}dx = \frac{q\,\delta p_0 W}{2\tau_p} = \frac{(1.602\times10^{-19})(10^{13})(3\times10^{-4})}{2\times10^{-6}} = 2.4\times10^{-4}\ \mathrm{A/cm^2},$$

which is $2.4\times10^{-4}/4.84\times10^{-2} = 0.5\%$ of the injected current. **99.5% of the injected holes make it across.**

*That number is a BJT's base transport factor.* Turn the bar into the base of a transistor — inject at one side from the emitter, collect at the other with a reverse-biased collector junction instead of an ohmic contact — and 99.5% of the injected carriers arrive. The 0.5% that recombine must be resupplied through the base terminal, so

$$\beta \approx \frac{99.5\%}{0.5\%} \approx 200.$$

A current gain of 200 from nothing but the geometric fact that $W\ll L_p$. The general result, derived properly in [3.2](03-02-bjt-currents-and-gain.md), is

$$\beta_{\rm transport}\approx\frac{2L_p^2}{W^2} = \frac{2}{(0.0997)^2} = 201 \ \checkmark.$$

**The whole bipolar transistor is the short-base diffusion problem with a different boundary condition on the right.**

## Watch out

- **You might keep the drift term everywhere.** It is negligible for *minority* carriers in *quasi-neutral* regions, and dominant inside depletion regions. Know which region you are in. (The majority carrier always carries a drift current, but you rarely need to track it.)
- **You might use the long-base formula on a short region.** The error is the factor $L/W$, which is routinely 10–100 in a real BJT — not a correction, a different answer. Always compute $W/L$ first and pick the formula.
- **You might think a short base is a compromise.** It gives *more* current and *less* stored charge (hence faster switching), so it is better on both axes. What limits it is manufacturability and punch-through ([3.2](03-02-bjt-currents-and-gain.md)), not physics.
- **You might forget that $L$ depends on doping through $D$.** Heavier doping lowers mobility, lowers $D$, and shortens $L$ — on top of any lifetime reduction from Auger recombination ([1.3](01-03-generation-recombination.md)). A $10^{19}$ emitter has a diffusion length of a micron or two, not a hundred.
- **You might solve for $\delta p$ and forget it is an excess.** The physical density is $p = p_0+\delta p$; the boundary condition at a contact is $\delta p = 0$, i.e. $p = p_0$, not $p=0$.

## One-liner

> Conservation plus diffusion plus a linear sink gives $d^2\delta p/dx^2 = \delta p/L^2$ with $L = \sqrt{D\tau}$ — and whether your region is long or short compared with $L$ decides both the formula and, in a BJT, the gain.

## Problems

**P1 (🟢)** A $p$-type region has $N_a = 10^{17}\ \mathrm{cm^{-3}}$ and $\tau_n = 0.5\ \mu$s. It is long, field-free, with $\delta n(0) = 5\times10^{12}\ \mathrm{cm^{-3}}$. (a) Find $D_n$ and $L_n$. (b) Write $\delta n(x)$. (c) Find the electron diffusion current at $x=0$. (d) At what depth has the excess fallen to 1% of its surface value?

**P2 (🟡)** An $n$-type region with $D_p = 12\ \mathrm{cm^2/s}$ and $\tau_p = 2\ \mu$s is terminated by an ohmic contact at $W$. (a) Find $L_p$. (b) Write the exact $\delta p(x)$ for arbitrary $W$ using the $\sinh$ form, and derive $J_p(0)$. (c) Show it reduces to the long-base and short-base results in the appropriate limits. (d) At $W = L_p$ exactly, compute $J_p(0)$ and compare with both limiting formulas — which is closer, and by how much?

**P3 (🔴)** A silicon wafer of thickness $W = 200\ \mu$m is uniformly illuminated, generating $G_L = 10^{19}\ \mathrm{cm^{-3}s^{-1}}$ throughout. It is $p$-type with $N_a = 10^{16}$, $D_n = 27\ \mathrm{cm^2/s}$, $\tau_n = 10\ \mu$s. The front surface ($x=0$) is a collecting junction holding $\delta n(0) = 0$; the back surface ($x=W$) has recombination velocity $S$. (a) Find $L_n$ and write the general steady-state solution with $G_L$ present. (b) Solve for the case of a perfectly passivated back surface ($S=0$). (c) Find the collected current at $x=0$. (d) Repeat for $S\to\infty$ (a bare, unpassivated back contact) and compute the fractional loss in collected current. Comment on what this means for solar-cell design.

<details>
<summary>Solutions</summary>

**P1** (a) At $N_a = 10^{17}$, $\mu_n = 800$, so $D_n = 0.0259\times800 = 20.7\ \mathrm{cm^2/s}$.

$$L_n = \sqrt{D_n\tau_n} = \sqrt{(20.7)(0.5\times10^{-6})} = \sqrt{1.035\times10^{-5}} = 3.22\times10^{-3}\ \mathrm{cm} = 32.2\ \mu\mathrm{m}.$$

(b) $$\delta n(x) = 5\times10^{12}\,e^{-x/32.2\,\mu\mathrm{m}}\ \mathrm{cm^{-3}}.$$

(c) $$J_n(0) = \frac{qD_n\,\delta n(0)}{L_n} = \frac{(1.602\times10^{-19})(20.7)(5\times10^{12})}{3.22\times10^{-3}} = \frac{1.658\times10^{-5}}{3.22\times10^{-3}} = 5.15\times10^{-3}\ \mathrm{A/cm^2}.$$

(d) $e^{-x/L_n} = 0.01 \Rightarrow x = L_n\ln100 = 32.2\times4.605 = 148\ \mu$m.

(A useful reflex: the excess is essentially gone after about 5 diffusion lengths — which is what "long-base" means in practice, and why a 200 µm wafer counts as long for a 32 µm diffusion length.)

**P2** (a) $L_p = \sqrt{(12)(2\times10^{-6})} = \sqrt{2.4\times10^{-5}} = 4.90\times10^{-3}\ \mathrm{cm} = 49.0\ \mu$m.

(b) The general solution $Ae^{-x/L}+Be^{x/L}$ with $\delta p(0)=\delta p_0$, $\delta p(W)=0$ is most compactly written

$$\delta p(x) = \delta p_0\,\frac{\sinh\!\big[(W-x)/L_p\big]}{\sinh(W/L_p)},$$

which manifestly satisfies both conditions. Differentiating:

$$\frac{d\,\delta p}{dx} = -\frac{\delta p_0}{L_p}\frac{\cosh[(W-x)/L_p]}{\sinh(W/L_p)},$$

$$J_p(0) = -qD_p\frac{d\,\delta p}{dx}\bigg|_0 = \frac{qD_p\,\delta p_0}{L_p}\coth\!\left(\frac{W}{L_p}\right).$$

(c) *Long base*, $W/L_p\to\infty$: $\coth\to1$, giving $J_p = qD_p\delta p_0/L_p$ ✓.

*Short base*, $W/L_p\to0$: $\coth u\to 1/u$, so

$$J_p \to \frac{qD_p\delta p_0}{L_p}\cdot\frac{L_p}{W} = \frac{qD_p\delta p_0}{W} \ \checkmark.$$

The single formula $\coth(W/L)$ interpolates between them — worth remembering, because real devices are often at neither extreme.

(d) At $W = L_p$: $\coth(1) = 1.3130$, so the exact result is

$$J_p(0) = \frac{qD_p\delta p_0}{L_p}(1.3130).$$

Both limiting formulas give the same thing here, and both are wrong by the same amount:

- long-base, $qD_p\delta p_0/L_p$ — a prefactor of 1.000;
- short-base, $qD_p\delta p_0/W = qD_p\delta p_0/L_p$ — also 1.000, since $W=L_p$.

$$\text{error} = \frac{1.3130-1.000}{1.3130} = 23.8\%\ \text{low, for both}.$$

Neither is "closer" — they coincide at the crossover, and both underestimate the current by about a quarter. The lesson is that $W/L\approx1$ is exactly where you must use the full $\coth$ form. (For calibration: the short-base formula is accurate to 0.3% at $W/L = 0.1$, and the long-base formula to 0.5% at $W/L = 3$. Between roughly 0.3 and 3, use $\coth$.)

**P3** (a) $$L_n = \sqrt{D_n\tau_n} = \sqrt{(27)(10^{-5})} = \sqrt{2.7\times10^{-4}} = 1.64\times10^{-2}\ \mathrm{cm} = 164\ \mu\mathrm{m}.$$

With uniform generation the steady-state equation is

$$D_n\frac{d^2\delta n}{dx^2}-\frac{\delta n}{\tau_n}+G_L = 0,$$

whose general solution is a particular solution plus the homogeneous pair:

$$\delta n(x) = G_L\tau_n + Ae^{-x/L_n}+Be^{+x/L_n}.$$

The particular part $G_L\tau_n = (10^{19})(10^{-5}) = 10^{14}\ \mathrm{cm^{-3}}$ is the equilibrium the bulk would reach with no boundaries — generation balanced by recombination.

(b) **Passivated back, $S=0$**: conditions are $\delta n(0)=0$ and $d\delta n/dx|_W = 0$.

From the first: $A+B = -G_L\tau_n$.
From the second: $-\frac{A}{L}e^{-W/L}+\frac{B}{L}e^{W/L} = 0 \Rightarrow B = Ae^{-2W/L}$.

So $A(1+e^{-2W/L}) = -G_L\tau_n$, giving with $W/L = 200/164.3 = 1.217$:

$$e^{-2W/L} = e^{-2.434} = 0.0877, \qquad A = \frac{-10^{14}}{1.0877} = -9.194\times10^{13}, \qquad B = -8.059\times10^{12}.$$

$$\delta n(x) = 10^{14}-9.194\times10^{13}e^{-x/L_n}-8.059\times10^{12}e^{+x/L_n}.$$

(c) $$J_n(0) = qD_n\frac{d\,\delta n}{dx}\bigg|_0 = qD_n\left[\frac{9.194\times10^{13}}{L_n}-\frac{8.059\times10^{12}}{L_n}\right] = \frac{qD_n(8.388\times10^{13})}{1.643\times10^{-2}}.$$

$$= \frac{(1.602\times10^{-19})(27)(8.388\times10^{13})}{1.643\times10^{-2}} = \frac{3.628\times10^{-4}}{1.643\times10^{-2}} = 2.21\times10^{-2}\ \mathrm{A/cm^2} = 22.1\ \mathrm{mA/cm^2}.$$

*Sanity check against the ideal ceiling:* if every generated carrier were collected, $J = qG_LW = (1.602\times10^{-19})(10^{19})(0.02) = 3.20\times10^{-2} = 32.0\ \mathrm{mA/cm^2}$. We collect 68.9% of that; the other 31% recombines in the bulk, which is expected since $W/L = 1.22$ is not small.

(d) **Bare back, $S\to\infty$**: this forces $\delta n(W) = 0$ (infinite recombination velocity pins the excess to zero, exactly like an ohmic contact).

Conditions $\delta n(0)=\delta n(W)=0$ give $A+B = -G_L\tau_n$ and $Ae^{-W/L}+Be^{W/L} = -G_L\tau_n$. Solving with $e^{-1.217} = 0.2962$, $e^{1.217} = 3.3766$:

$$A+B = -10^{14}, \qquad 0.2962A+3.3766B = -10^{14}.$$

Subtracting $0.2962\times$ the first from the second: $3.0804B = -10^{14}(1-0.2962) = -7.038\times10^{13}$, so

$$B = -2.284\times10^{13}, \qquad A = -7.716\times10^{13}.$$

$$J_n(0) = \frac{qD_n}{L_n}\left[7.716\times10^{13}-2.284\times10^{13}\right] = \frac{(1.602\times10^{-19})(27)(5.432\times10^{13})}{1.643\times10^{-2}} = 1.43\times10^{-2}\ \mathrm{A/cm^2} = 14.3\ \mathrm{mA/cm^2}.$$

*Fractional loss:*

$$\frac{22.1-14.3}{22.1} = 35\%.$$

**Passivating the back surface is worth 35% of the collected current** — from a single thin dielectric layer that costs a fraction of a percent of the cell's manufacturing cost.

*What it means for design.* The physics is that with $S\to\infty$ the back surface is a perfect sink competing with the front junction for carriers; carriers generated in the back half are more likely to die at the rear than to diffuse forward to the junction. Passivation removes that competitor, and the reflecting boundary condition $d\delta n/dx = 0$ actively pushes carriers forward.

This is why the dominant commercial solar-cell architecture changed. Conventional cells had an aluminium back contact over the whole rear surface — effectively $S\to\infty$ across the entire area. **PERC** cells (Passivated Emitter and Rear Cell), which took over the industry after about 2015, add a rear dielectric with only small contact openings, cutting the effective $S$ by orders of magnitude. The gain is a couple of absolute efficiency points — worth billions of dollars a year across global production, and it comes directly out of this boundary condition.

Note also the interaction with thickness: the loss would be far smaller if $W\ll L_n$ (few carriers reach the back) or far larger if $W\gg L_n$ — no, in that case the back is irrelevant because nothing reaches it. The rear surface matters most precisely when $W\sim L_n$, which is exactly where silicon cells operate. Design decisions cluster at the crossover, as they did in P2.

</details>

## Flashback

**From Lesson 1.3 (Generation and recombination):** An $n$-type region has traps giving $\tau_p = 5\ \mu$s, with $D_p = 12\ \mathrm{cm^2/s}$. (a) Find $L_p$. (b) The silicon is contaminated so the trap density rises tenfold. Find the new $\tau_p$ and $L_p$. (c) By what factor does the injected current of a long-base region change?

<details>
<summary>Solution</summary>

(a) $L_p = \sqrt{(12)(5\times10^{-6})} = \sqrt{6\times10^{-5}} = 7.75\times10^{-3}\ \mathrm{cm} = 77.5\ \mu$m.

(b) SRH lifetime is inversely proportional to trap density, so $\tau_p$ falls tenfold to $0.5\ \mu$s:

$$L_p = \sqrt{(12)(5\times10^{-7})} = \sqrt{6\times10^{-6}} = 2.45\times10^{-3}\ \mathrm{cm} = 24.5\ \mu\mathrm{m}.$$

Ten times the traps, one tenth the lifetime, but only $\sqrt{10} = 3.16$ times shorter diffusion length.

(c) The long-base injected current is $J = qD_p\delta p_0/L_p$, inversely proportional to $L_p$:

$$\frac{J_{\rm new}}{J_{\rm old}} = \frac{L_{p,\rm old}}{L_{p,\rm new}} = \frac{77.5}{24.5} = 3.16 = \sqrt{10}.$$

The current **rises** by $\sqrt{10}$. That is worth pausing on: contaminating the silicon *increased* the diode's saturation current. It is not a benefit — a larger $I_0$ means a lower forward voltage for a given current but also more reverse leakage and worse rectification ([2.2](02-02-ideal-diode-equation.md)) — but it shows that "shorter lifetime" does not simply mean "less current". It means carriers do not travel as far, so the gradient at the injecting boundary is steeper.

</details>

## Connections

- **Backward:** the current expressions are [1.2](01-02-drift-diffusion-einstein.md)'s and the sink term is [1.3](01-03-generation-recombination.md)'s; the equation itself is conservation, the same bookkeeping as [`fluid-dynamics` 1.3](../../fluid-dynamics/lessons/01-03-continuity-equation.md).
- **Forward:** [2.2](02-02-ideal-diode-equation.md) solves this equation on both sides of a junction with the law of the junction as the boundary condition — that single calculation *is* the ideal-diode equation. [3.2](03-02-bjt-currents-and-gain.md) solves it in a short base; [4.3](04-03-solar-cell.md) solves it with $G_L$ present, exactly as P3 does.
- **Sideways:** "diffusion with a first-order sink" is the identical mathematics to [`transport-phenomena` 4.3](../../transport-phenomena/lessons/04-03-diffusion-with-reaction-thiele.md), where $W/L$ appears as the **Thiele modulus** and the collection efficiency is the effectiveness factor. It is also the one-group diffusion equation of [`reactor-physics` 1.3](../../reactor-physics/lessons/01-03-diffusion-approximation-ficks-law.md), where $L$ is the neutron diffusion length and the same $\coth$ appears in slab reactor problems.

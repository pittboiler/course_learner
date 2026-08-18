# Cosmology · Lesson 4.2: The inflationary mechanism

> ⏱ ~15 min · Module 4: Inflation, dark energy, and observational cosmology · Builds on: [4.1 The horizon and flatness problems](04-01-horizon-flatness-problems.md), [1.4 The Friedmann, fluid, and acceleration equations](01-04-friedmann-fluid-acceleration-equations.md) · Unlocks: [4.3 Primordial perturbations from inflation](04-03-primordial-perturbations-inflation.md)

## Why this matters

[4.1](04-01-horizon-flatness-problems.md) left us with a scandal: the universe is too uniform (regions that never touched share a temperature) and too flat (its geometry is fine-tuned to absurd precision) for the standard hot Big Bang to explain. Inflation is the fix, and it is astonishingly economical — a single new ingredient, a brief burst of accelerated expansion in the first $10^{-34}$ seconds, dissolves *both* problems at once and throws in a bonus: it dilutes away unwanted relics and, as [4.3](04-03-primordial-perturbations-inflation.md) will show, seeds every galaxy from quantum noise. This lesson is the mechanism: what drives the burst, how it ends, and why "60 e-folds" is the magic number.

## The idea

The cure and the disease share one quantity: the **comoving Hubble radius** $1/(aH)$, the patch of the universe in causal contact today. In the standard Big Bang, ordinary matter and radiation *decelerate* the expansion, so $aH$ shrinks with time — causal patches were *bigger* in the past, and two points on today's sky were never in contact. Every problem in 4.1 is really this one fact.

Inflation flips it. Suppose that for a brief early spell the expansion *accelerates* ($\ddot a > 0$). Then $aH = \dot a$ *grows*, and $1/(aH)$ **shrinks dramatically**. A single tiny patch that *was* in causal contact gets stretched larger than the entire observable universe — so the whole sky came from one thermalized speck (horizon problem gone). At the same time any spatial curvature gets ironed flat, like the wrinkles on a balloon vanishing as you inflate it (flatness problem gone). And any pre-existing relics get diluted into oblivion.

What could accelerate the early universe? From [1.4](01-04-friedmann-fluid-acceleration-equations.md) we know the culprit must have **strongly negative pressure** — $w < -\tfrac13$, vacuum-like energy. The trick is to arrange something that *acts* like a cosmological constant for a while and then switches off. That something is a scalar field, the **inflaton**, poised high on a nearly flat energy landscape: while it sits there its energy is almost pure "vacuum," driving exponential expansion; as it slowly rolls off the edge, inflation winds down and ends.

## The formal version

**The condition for inflation.** Recall the acceleration equation from [1.4](01-04-friedmann-fluid-acceleration-equations.md):

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\!\left(\rho + \frac{3p}{c^2}\right).$$

Accelerated expansion $\ddot a > 0$ requires $\rho + 3p/c^2 < 0$, i.e. with $w \equiv p/(\rho c^2)$,

$$w < -\tfrac13.$$

*In words: to push the universe apart you need pressure so negative it overwhelms the energy density's own gravity.* The clean limit is $w = -1$ (pure vacuum), which makes $\rho$ constant and the Friedmann equation $H^2 = \tfrac{8\pi G}{3}\rho$ give a constant $H$. Integrating $\dot a/a = H$:

$$a(t) \approx a_0\,e^{Ht}, \qquad H \approx \text{const}.$$

*In words: constant-$H$ expansion is exponential growth.* This is **quasi–de Sitter** space ("quasi" because $H$ drifts slowly rather than being exactly constant). Notice $aH = \dot a = a_0 H e^{Ht}$ **grows** — the engine that shrinks the comoving Hubble radius.

**Why it solves 4.1.** Track the flatness measure from [4.1](04-01-horizon-flatness-problems.md),

$$|\Omega - 1| = \frac{|k|c^2}{(aH)^2}.$$

During inflation $aH \propto e^{Ht}$, so $|\Omega - 1| \propto e^{-2Ht} \to 0$ **exponentially fast**. *Inflation doesn't just permit flatness — it actively drives $\Omega \to 1$*, which is why "the universe is flat" is a genuine prediction, not a coincidence. The horizon problem falls the same way: a causal patch of physical size $\sim c/H$ is blown up by $e^{Ht}$, easily engulfing today's observable universe, so one thermalized region explains the uniform sky. And any relic density $\rho_X \propto a^{-3}$ (or faster) is crushed by $e^{-3Ht}$ — monopoles, defects, and other unwanted junk are simply diluted away.

**How much is enough — e-folds.** The natural clock is the number of $e$-foldings of growth,

$$N \equiv \int H\,dt = \ln\frac{a_\text{end}}{a_\text{start}}.$$

*In words: $N$ counts how many times the universe multiplied by $e$ in size.* Solving the horizon and flatness problems needs the observable universe to fit inside one pre-inflation causal patch, which works out to

$$\boxed{\,N \gtrsim 60\,}$$

(the exact number depends mildly on the energy scale; 50–60 is the standard range).

**The inflaton.** Model the vacuum-like energy as a single scalar field $\phi(t)$ (units of mass/energy) with a **potential** $V(\phi)$ — its stored energy as a function of value. A homogeneous scalar field has energy density and pressure

$$\rho c^2 = \tfrac12\dot\phi^2 + V(\phi), \qquad p = \tfrac12\dot\phi^2 - V(\phi).$$

*In words: kinetic energy $\tfrac12\dot\phi^2$ (the field changing in time) plus potential energy $V$; pressure is kinetic minus potential.* The equation of state is then

$$w = \frac{p}{\rho c^2} = \frac{\tfrac12\dot\phi^2 - V}{\tfrac12\dot\phi^2 + V}.$$

When the potential dominates, $\tfrac12\dot\phi^2 \ll V$, this gives $p \approx -\rho c^2$, so $w \approx -1$ — **exactly the vacuum-like fluid that inflates.** The field's equation of motion (from its wave equation in the expanding FLRW background) is

$$\ddot\phi + 3H\dot\phi + V'(\phi) = 0, \qquad V' \equiv \frac{dV}{d\phi}.$$

*In words: a ball of "position" $\phi$ rolling in the landscape $V$, driven downhill by the slope $-V'$ and slowed by a friction term $3H\dot\phi$* — **Hubble friction**, the expansion itself acting like molasses. This is the same $\ddot x + (\text{drag})\dot x + (\text{restoring}) = 0$ shape as the damped oscillator you met in mechanics, but here the "drag" $3H$ is what keeps the roll slow.

**Slow roll.** Inflation needs $\tfrac12\dot\phi^2 \ll V$ to *persist*, which means the field must creep, not plunge, down a nearly flat potential. Two dimensionless **slow-roll parameters** measure the flatness (using the reduced Planck mass $M_\text{Pl} = \sqrt{\hbar c/8\pi G} \approx 2.4\times10^{18}\,\text{GeV}$; below we set $M_\text{Pl} = 1$):

$$\epsilon = \frac{M_\text{Pl}^2}{2}\!\left(\frac{V'}{V}\right)^2 \;\xrightarrow{M_\text{Pl}=1}\; \tfrac12\!\left(\frac{V'}{V}\right)^2, \qquad \eta = M_\text{Pl}^2\,\frac{V''}{V} \;\xrightarrow{M_\text{Pl}=1}\; \frac{V''}{V}.$$

*In words: $\epsilon$ is the squared steepness of the slope and $\eta$ the curvature of the potential, both relative to its height.* Inflation happens when the potential is flat enough that

$$\epsilon,\ |\eta| \ll 1,$$

and it **ends** when the slope grows steep enough that

$$\epsilon \approx 1$$

— at which point $\tfrac12\dot\phi^2$ catches up to $V$, $w$ climbs back above $-\tfrac13$, and acceleration stops.

**E-folds from the potential.** In slow roll one can trade the time integral for a field integral (using $H\,dt = \tfrac{H}{\dot\phi}d\phi$ and the slow-roll relations $3H\dot\phi \approx -V'$, $3H^2 \approx V$ in $M_\text{Pl}=1$ units):

$$N = \int H\,dt = \int_{\phi_\text{end}}^{\phi}\frac{V}{V'}\,d\phi'.$$

*In words: the flatter and taller the potential over the field's journey, the more e-folds you bank.* Demanding $N \gtrsim 60$ fixes how far up the potential the field must start.

**Graceful exit and reheating.** When $\epsilon \to 1$ the field reaches the steep bottom of the potential and inflation ends. But the universe is now cold and empty — everything was diluted away. The inflaton then **oscillates** about the minimum of $V$ and its energy decays into a thermal bath of particles: this is **reheating**, which converts the inflaton's stored energy into the hot, dense plasma that begins the standard thermal history of [2.1](02-01-hot-big-bang-thermal-equilibrium.md). Inflation resets the clock and hands the hot Big Bang a universe that is uniform, flat, and studded with the tiny perturbations of [4.3](04-03-primordial-perturbations-inflation.md).

## Picture

![The inflaton potential V(phi): a flat plateau on the left where a ball rolls slowly (inflation, with epsilon and eta small), steepening down to a valley where epsilon reaches 1 and the field oscillates and reheats; inset shows a(t) growing exponentially as e to the Ht](assets/04-02-fig1.svg)

The plateau is where $V$ dominates and $w \approx -1$ — the field inches along and space doubles again and again (inset: $a \propto e^{Ht}$). Where the slope steepens, $\epsilon$ hits 1, inflation ends, and the field tumbles into the valley to oscillate and reheat.

## Worked examples

**Example 1 (how much stretching is 60 e-folds?).** Suppose $H \approx 10^{36}\ \mathrm{s^{-1}}$ during inflation and the burst lasts $\Delta t = 6\times10^{-35}\ \mathrm{s}$. With $H$ constant, $N = H\Delta t = 10^{36}\times 6\times10^{-35} = 60$. The linear size of any patch grows by

$$e^N = e^{60} \approx 1.1\times10^{26}.$$

A patch the size of a proton ($10^{-15}\ \mathrm{m}$) becomes $\sim 10^{11}\ \mathrm{m}$ — larger than the Sun — in $6\times10^{-35}$ seconds. That is why one causally-connected speck can cover the whole sky.

**Example 2 (why the potential must be flat).** Take $V = \tfrac12 m^2\phi^2$ (a "mass term," the simplest inflaton). Then $V' = m^2\phi$ and in $M_\text{Pl}=1$ units

$$\epsilon = \tfrac12\!\left(\frac{V'}{V}\right)^2 = \tfrac12\!\left(\frac{m^2\phi}{\tfrac12 m^2\phi^2}\right)^2 = \tfrac12\!\left(\frac{2}{\phi}\right)^2 = \frac{2}{\phi^2}.$$

Slow roll ($\epsilon \ll 1$) demands $\phi \gg \sqrt2$ — the field must sit *far up* the parabola, many Planck masses out, where the slope-to-height ratio is gentle. Roll down to $\phi \sim \sqrt2$ and $\epsilon \sim 1$: inflation is over. Notice $m$ (the energy scale) sets *how fast* things happen but drops out of $\epsilon$ entirely — flatness is about the *shape*, not the height.

## Watch out

- **You might think inflation needs a literal cosmological constant.** It only needs something that *behaves* like one temporarily. The inflaton mimics $w \approx -1$ while $V$ dominates, then peels away to $w > -\tfrac13$ so inflation can end — a true constant $\Lambda$ never turns off, which is exactly why it can't have run the early universe.
- **You might read $|\Omega-1| \to 0$ as "the universe is exactly flat."** Inflation drives $\Omega$ exponentially *toward* 1 but stops after finitely many e-folds, leaving a tiny residual $|\Omega-1| \sim e^{-2N}$. The prediction is "flat to observational precision," and a future detection of small curvature would constrain $N$, not refute inflation.
- **You might confuse the two slow-roll parameters.** $\epsilon$ (slope-squared) controls whether $\ddot a > 0$ *and* triggers the end ($\epsilon = 1$); $\eta$ (curvature) controls how *long* slow roll lasts and shapes the perturbation spectrum in [4.3](04-03-primordial-perturbations-inflation.md). You need *both* small, but only $\epsilon = 1$ marks the exit.
- **Hubble friction is not real friction.** No energy is lost to heat; $3H\dot\phi$ is the expansion redshifting the field's kinetic energy away. It's what lets a ball "roll slowly" down a steep-looking hill.

## One-liner

> A scalar field stuck high on a flat potential acts like vacuum energy ($w\approx-1$), driving $a\propto e^{Ht}$; ~60 e-folds of that stretch one causal patch across the whole sky and iron space flat, before the field rolls off ($\epsilon\to1$), oscillates, and reheats the hot Big Bang.

## Problems

**P1 (🟢)** During inflation $H = 10^{37}\ \mathrm{s^{-1}}$ and the burst lasts $\Delta t = 5.5\times10^{-36}\ \mathrm{s}$. (a) Compute the number of e-folds $N = H\Delta t$. (b) By what linear factor $e^N$ does a patch expand? (c) Roughly how large does an initial patch of size $10^{-27}\ \mathrm{m}$ become, and how does that compare to the observable universe ($\sim 10^{27}\ \mathrm{m}$)?

**P2 (🟡)** For the potential $V = \tfrac12 m^2\phi^2$ (in $M_\text{Pl}=1$ units), compute the slow-roll parameters $\epsilon(\phi)$ and $\eta(\phi)$, and find the field value $\phi_\text{end}$ where inflation ends ($\epsilon = 1$).

**P3 (🔴)** Still with $V = \tfrac12 m^2\phi^2$, compute the number of e-folds accumulated as the field rolls from $\phi$ down to $\phi_\text{end}$:

$$N(\phi) = \int_{\phi_\text{end}}^{\phi}\frac{V}{V'}\,d\phi'.$$

Then find the starting value $\phi$ that yields $N = 60$. (This is the setup for Boss Problem 4.)

<details>
<summary>Solutions</summary>

**P1** (a) With $H$ constant, $N = H\Delta t = 10^{37}\times 5.5\times10^{-36} = 55$.

(b) $e^N = e^{55} \approx 7.7\times10^{23}$.

(c) Final size $\approx 10^{-27}\,\mathrm{m}\times 7.7\times10^{23} \approx 7.7\times10^{-4}\ \mathrm{m}$, under a millimeter — *at the end of inflation*. That sub-millimeter patch then rides the subsequent 13.8 billion years of ordinary expansion (a further factor $\sim 10^{27}$–$10^{28}$ in scale factor) to grow into today's $\sim 10^{27}\ \mathrm{m}$ observable universe. The point of the e-folds: even a microscopic causal patch is inflated past the scale that later becomes everything we can see.

*Check.* $\ln(7.7\times10^{23}) = 23\times\ln 10 + \ln 7.7 \approx 52.96 + 2.04 = 55$ ✓.

**P2** With $V = \tfrac12 m^2\phi^2$: $V' = m^2\phi$, $V'' = m^2$. In $M_\text{Pl}=1$ units,

$$\epsilon = \tfrac12\!\left(\frac{V'}{V}\right)^2 = \tfrac12\!\left(\frac{m^2\phi}{\tfrac12 m^2\phi^2}\right)^2 = \tfrac12\cdot\frac{4}{\phi^2} = \frac{2}{\phi^2}, \qquad \eta = \frac{V''}{V} = \frac{m^2}{\tfrac12 m^2\phi^2} = \frac{2}{\phi^2}.$$

So $\epsilon = \eta = 2/\phi^2$ (they coincide for a quadratic). Inflation ends at

$$\epsilon = 1 \;\Longrightarrow\; \frac{2}{\phi_\text{end}^2} = 1 \;\Longrightarrow\; \phi_\text{end} = \sqrt2 \approx 1.41\ M_\text{Pl}.$$

*Check.* $\epsilon,\eta \ll 1$ requires $\phi \gg \sqrt2$, i.e. the field must start many Planck masses up the parabola — consistent with Example 2. ✓

**P3** The integrand simplifies because $V/V' = \tfrac12 m^2\phi'^2 / (m^2\phi') = \phi'/2$:

$$N(\phi) = \int_{\phi_\text{end}}^{\phi}\frac{\phi'}{2}\,d\phi' = \left[\frac{\phi'^2}{4}\right]_{\phi_\text{end}}^{\phi} = \frac{\phi^2 - \phi_\text{end}^2}{4}.$$

With $\phi_\text{end}^2 = 2$, this is $N = (\phi^2 - 2)/4$. Setting $N = 60$:

$$\phi^2 = 4N + 2 = 240 + 2 = 242 \;\Longrightarrow\; \phi = \sqrt{242} \approx 15.6\ M_\text{Pl}.$$

*Check.* Since $\phi_\text{end}^2 = 2 \ll 242$, dropping it gives the quick estimate $\phi \approx \sqrt{4N} = \sqrt{240} \approx 15.5\ M_\text{Pl}$ — the field starts about 15 Planck masses out and rolls in to $\sqrt2$. The large field excursion ($\phi > M_\text{Pl}$) is characteristic of this "large-field" model. ✓

</details>

## Flashback

**From Lesson 1.4 (The acceleration equation):** A hypothetical fluid fills the universe with equation-of-state parameter $w = -\tfrac23$. (a) Does it cause the expansion to accelerate or decelerate? (b) What is the sign of its pressure? Justify both from the acceleration equation.

<details>
<summary>Solution</summary>

The acceleration equation is $\ddot a/a = -\tfrac{4\pi G}{3}\big(\rho + 3p/c^2\big)$. Writing $p = w\rho c^2$,

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\rho\,(1 + 3w).$$

(a) With $w = -\tfrac23$: $1 + 3w = 1 - 2 = -1 < 0$, so $\ddot a/a = +\tfrac{4\pi G}{3}\rho > 0$ — the expansion **accelerates**. This clears the threshold $w < -\tfrac13$ that defines cosmic acceleration, so such a fluid could in principle drive inflation (though $w=-1$ is the ideal).

(b) $p = w\rho c^2 = -\tfrac23\rho c^2 < 0$ (assuming $\rho > 0$): the pressure is **negative**. It is precisely this negative pressure, tripled and outweighing $\rho$ in the source term, that flips gravity from attractive to repulsive.

*Check.* At $w = -\tfrac13$ exactly, $1+3w = 0$ and $\ddot a = 0$ (coasting) — the boundary, consistent with $w < -\tfrac13$ being the acceleration condition. ✓

</details>

## Connections

- **Backward:** the whole mechanism runs on [1.4](01-04-friedmann-fluid-acceleration-equations.md)'s acceleration equation — $w < -\tfrac13$ is the entry ticket — and it exists to answer the two puzzles posed in [4.1](04-01-horizon-flatness-problems.md), both of which are really statements about the comoving Hubble radius $1/(aH)$. The reheating hand-off restarts the thermal history of [2.1](02-01-hot-big-bang-thermal-equilibrium.md).
- **Forward:** [4.3 Primordial perturbations](04-03-primordial-perturbations-inflation.md) takes the same slow-rolling field and quantizes it — the tiny quantum jitters in $\phi$ become the density fluctuations that grow into galaxies and imprint the CMB, with $\epsilon$ and $\eta$ setting the spectrum's tilt. The $N(\phi)$ integral you built in P3 is the engine of **Boss Problem 4**.
- **Sideways (mechanics):** the inflaton's equation of motion $\ddot\phi + 3H\dot\phi + V'(\phi) = 0$ is the damped-oscillator equation in disguise — position $\phi$, restoring force $-V'$, and a velocity-proportional drag $3H\dot\phi$. Slow roll is the *overdamped* limit where friction dominates inertia and the "particle" drifts at terminal velocity, exactly as an overdamped mass creeps to equilibrium without ringing.

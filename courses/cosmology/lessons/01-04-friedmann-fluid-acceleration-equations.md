# Cosmology · Lesson 1.4: The Friedmann, fluid, and acceleration equations

> ⏱ ~15 min · Module 1: The expanding universe and the Friedmann equations · Builds on: [1.3 Redshift and cosmic distances](01-03-redshift-cosmic-distances.md), [relativity](../../relativity/syllabus.md) · Unlocks: [1.5 The cosmic energy budget and ΛCDM](01-05-cosmic-energy-budget-lambda-cdm.md)

## Why this matters

So far the scale factor $a(t)$ has been a free function — we wrote redshift and distances *in terms of* it but never said what makes it grow. This lesson gives the universe its **equations of motion**. Three of them: one for how fast it expands (Friedmann), one for how its contents dilute as it does (the fluid equation), and one for whether the expansion speeds up or slows down (acceleration). Together they turn "the universe expands" into a dynamical system you can integrate — and they deliver the single most surprising fact in cosmology: pressure gravitates, so a substance with enough *negative* pressure pushes the universe apart instead of pulling it together. That is dark energy, and it falls straight out of the third equation.

## The idea

Picture the universe as a uniform fluid filling all space — the same density $\rho$ everywhere (the cosmological principle from [1.1](01-01-cosmological-principle-hubble-law.md)). Gravity from all that stuff wants to pull it back together, so the expansion should *decelerate*, like a ball thrown upward slowing under gravity. That analogy is almost the whole story.

Throw a ball up: whether it escapes or falls back is fixed by its total energy — kinetic plus (negative) potential. Do the same bookkeeping for a shell of the cosmic fluid and you get the **Friedmann equation**: expansion rate squared = a gravity term (from the density) minus an "energy constant" that turns out to *be* the spatial curvature. That is the Newtonian shortcut, and remarkably it lands on the right answer; general relativity justifies it and supplies the pieces Newton can't see.

Two things Newton misses. First, as the universe expands, its contents thin out — but *how* they thin depends on what they are. Galaxies (matter) just spread through a bigger volume; light (radiation) spreads *and* gets stretched to lower energy, so it thins faster. That accounting is the **fluid equation**, and it comes from the first law of thermodynamics applied to an expanding box. Second — and this is pure GR — *pressure has weight*. In Einstein's gravity the source is not just density but density plus three times pressure. Ordinary stuff has positive pressure, which adds to the pull. But something with strongly negative pressure flips the sign of gravity itself. That is the **acceleration equation**, and it is why the cosmos is speeding up.

## The formal version

**The Friedmann equation.** From the Einstein field equations applied to the FLRW metric (the geometry set up in [1.2](01-02-flrw-metric-comoving-coordinates.md) and derived in [relativity](../../relativity/syllabus.md)), the expansion rate obeys

$$\left(\frac{\dot a}{a}\right)^2 = H^2 = \frac{8\pi G}{3}\,\rho \;-\; \frac{kc^2}{a^2} \;+\; \frac{\Lambda c^2}{3}.$$

*In words: the fractional expansion rate, squared, is set by how much stuff there is, minus the curvature, plus a constant.* Here $\dot a = da/dt$; $H \equiv \dot a/a$ is the Hubble parameter (units $\mathrm{s^{-1}}$); $\rho$ is the **total mass density** — energy density divided by $c^2$, in $\mathrm{kg\,m^{-3}}$, summed over every component (matter, radiation, …); $G$ is Newton's constant; $k$ is the **curvature constant** ($k>0$ closed, $k=0$ flat, $k<0$ open) from the FLRW metric; and $\Lambda$ (units $\mathrm{m^{-2}}$) is the **cosmological constant**. The $\Lambda$ term is optional bookkeeping: define a **dark-energy density**

$$\rho_\Lambda \equiv \frac{\Lambda c^2}{8\pi G},$$

and it folds into the first term as just another contribution to $\rho$. From here on "$\rho$ includes $\rho_\Lambda$" unless we show $\Lambda$ explicitly.

**The Newtonian intuition (heuristic).** Take a test galaxy of mass $m$ on the edge of a sphere of comoving radius, physical radius $r = a(t)\,x$ with $x$ fixed. Only the mass *inside* the sphere pulls on it (Newton's shell theorem): $M = \tfrac{4}{3}\pi r^3 \rho$. Conservation of its energy reads

$$\tfrac12 m\dot r^2 - \frac{GMm}{r} = \tfrac12 m\dot r^2 - \frac{4\pi G}{3}\rho\, r^2 m = E = \text{const}.$$

Substitute $r = ax$ and divide by $\tfrac12 m x^2 a^2$:

$$\frac{\dot a^2}{a^2} - \frac{8\pi G}{3}\rho = \frac{2E}{m x^2}\frac{1}{a^2} \equiv -\frac{kc^2}{a^2}.$$

*In words: the ball's total energy $E$ reappears as the curvature $k$* — a bound shell ($E<0$) is a closed universe ($k>0$) that recollapses; an unbound shell ($E>0$) is an open universe ($k<0$) that expands forever. This is heuristic (a Newtonian sphere isn't a relativistic universe, and it can't produce the $\Lambda$ term), but GR returns exactly this equation.

**The fluid (continuity) equation.** Apply the first law of thermodynamics, $dU = -p\,dV$ (adiabatic — no heat flows in or out of a comoving volume, since every region is identical), to a patch of volume $V \propto a^3$ holding energy $U = \rho c^2 V$. With $p$ the pressure ($\mathrm{Pa}$):

$$\dot U = c^2\big(\dot\rho V + \rho \dot V\big) = c^2 V\Big(\dot\rho + 3\rho\,\tfrac{\dot a}{a}\Big), \qquad -p\dot V = -3p\,\tfrac{\dot a}{a}\,V.$$

Setting $\dot U = -p\dot V$ and cancelling $V$:

$$\boxed{\;\dot\rho + 3H\!\left(\rho + \frac{p}{c^2}\right) = 0.\;}$$

*In words: density falls off both because expansion dilutes it ($3H\rho$) and because pressure does work pushing the boundary out ($3Hp/c^2$).*

**The equation of state.** Relate pressure to density by a single number $w$:

$$w \equiv \frac{p}{\rho c^2} \quad\Longrightarrow\quad p = w\rho c^2.$$

The three actors: pressureless **matter** ("dust" — galaxies, cold dark matter) has $w = 0$; **radiation** (photons, anything relativistic) has $w = \tfrac13$; the **cosmological constant / vacuum** has $w = -1$. Plug $p = w\rho c^2$ into the fluid equation:

$$\dot\rho + 3H\rho(1+w) = 0 \;\Longrightarrow\; \frac{\dot\rho}{\rho} = -3(1+w)\frac{\dot a}{a} \;\Longrightarrow\; \boxed{\;\rho \propto a^{-3(1+w)}.\;}$$

So matter $\rho_m \propto a^{-3}$ (dilutes with volume), radiation $\rho_r \propto a^{-4}$ (volume *and* redshift, one extra power of $a$), and $\Lambda$ $\rho_\Lambda \propto a^{0} = \text{const}$ (adding volume adds vacuum, so its density never drops). *In words: expand the universe and matter thins as $1/\text{volume}$, light thins faster, and dark energy doesn't thin at all.*

**The acceleration equation.** Differentiate Friedmann and eliminate $\dot\rho$ with the fluid equation (done in full in P3) to get an equation for $\ddot a$ directly:

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\!\left(\rho + \frac{3p}{c^2}\right) + \frac{\Lambda c^2}{3}.$$

*In words: what decelerates the universe is not density alone but density **plus three times pressure**.* Ordinary matter and radiation ($\rho, p \ge 0$) make $\ddot a < 0$ — gravity brakes the expansion, as intuition demands. But anything with $\rho + 3p/c^2 < 0$, i.e. $w < -\tfrac13$, makes $\ddot a > 0$: the expansion **accelerates**. The cosmological constant ($w=-1$) is the extreme case, and this term is exactly the $+\Lambda c^2/3$ written separately above. That sign flip — negative pressure producing repulsive gravity — is the physics of dark energy.

## Picture

![Log-log plot of density versus scale factor: radiation falls as a to the minus four (steepest, coral), matter as a to the minus three (blue), the cosmological constant is a flat dashed grey line; the curves cross at the radiation-matter and matter-Lambda equality epochs](assets/01-04-fig1.svg)

Reading right to left is running the clock backward. Today ($a=1$) dark energy dominates, but because matter and radiation climb steeply into the past while $\Lambda$ stays flat, earlier epochs were matter-dominated, and earlier still radiation-dominated. The two crossings are the **equality epochs** — the subject of [1.5](01-05-cosmic-energy-budget-lambda-cdm.md).

## Worked examples

**Example 1 (the dilution laws in action).** By what factor does each component's density change when the universe doubles in size ($a \to 2a$)? Using $\rho \propto a^{-3(1+w)}$:

- Matter ($w=0$): $\rho \to 2^{-3}\rho = \rho/8$. Eight times the volume, one-eighth the density. ✓
- Radiation ($w=\tfrac13$): $\rho \to 2^{-4}\rho = \rho/16$. One-eighth from volume, one more factor of $2$ because every photon's wavelength doubled and its energy halved (this is the redshift of [1.3](01-03-redshift-cosmic-distances.md), $E = hc/\lambda \propto 1/a$).
- $\Lambda$ ($w=-1$): $\rho \to 2^{0}\rho = \rho$. Unchanged.

So even a universe born radiation-dominated must end up matter-then-$\Lambda$ dominated: the steep curves fall below the flat one. Composition is destiny only temporarily.

**Example 2 (why negative pressure pushes).** Is a universe made purely of a cosmological constant accelerating, and how fast? Set $\rho = \rho_\Lambda$, $p = -\rho_\Lambda c^2$ (that's $w=-1$), and drop the separate $\Lambda$ term (it's already in $\rho$). The acceleration equation gives

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\!\left(\rho_\Lambda + \frac{3(-\rho_\Lambda c^2)}{c^2}\right) = -\frac{4\pi G}{3}\big(\rho_\Lambda - 3\rho_\Lambda\big) = +\frac{8\pi G}{3}\rho_\Lambda > 0.$$

Positive — it accelerates. And since $\rho_\Lambda$ is constant, Friedmann reads $H^2 = \tfrac{8\pi G}{3}\rho_\Lambda = \text{const}$, so $H$ is fixed and $a \propto e^{Ht}$: **exponential expansion**. This is de Sitter space, the late-time fate of our universe and (run at enormous energy) the engine of inflation in [4.2](04-02-inflationary-mechanism.md).

## Watch out

- **You might think expansion is fueled by pressure pushing outward, like gas in a balloon.** It isn't. In the acceleration equation pressure appears with a *minus* sign — positive pressure *decelerates* the universe. There's no "outside" for pressure to push against; cosmic pressure acts only through its gravity, and ordinary (positive) pressure gravitates *attractively*.
- **You might read $k$ as a length or a density.** It's a discrete-ish curvature label fixed once and for all; the whole $a$-dependence of the curvature term lives in the $1/a^2$. As the universe grows, the curvature term dies as $a^{-2}$ — slower than matter ($a^{-3}$) or radiation ($a^{-4}$) but faster than $\Lambda$ ($a^0$).
- **You might treat the three equations as independent.** They aren't — any two imply the third (that's exactly P3). Friedmann + fluid $\Rightarrow$ acceleration. This consistency is why you can pick whichever pair is convenient.
- **You might forget the $c^2$ in $p/c^2$.** $\rho$ here is a *mass* density; pressure has units of energy density ($\mathrm{Pa} = \mathrm{J\,m^{-3}}$), so it must be divided by $c^2$ to be added to $\rho$. Keeping $w = p/(\rho c^2)$ dimensionless is the bookkeeping check.

## One-liner

> Friedmann sets the expansion rate from the density, the fluid equation dilutes each component as $\rho \propto a^{-3(1+w)}$, and the acceleration equation — sourced by $\rho + 3p/c^2$ — says negative pressure ($w<-\tfrac13$) makes gravity repel.

## Problems

**P1 (🟢)** Starting from the fluid equation $\dot\rho + 3H(\rho + p/c^2) = 0$ with a constant equation of state $p = w\rho c^2$, derive $\rho \propto a^{-3(1+w)}$. Specialize to matter ($w=0$), radiation ($w=\tfrac13$), and a cosmological constant ($w=-1$), and state how each scales with $a$.

**P2 (🟡)** Using the acceleration equation with a single fluid of equation of state $w$ (fold any $\Lambda$ into $\rho$), find the condition on $w$ for the expansion to accelerate ($\ddot a > 0$). Confirm that a cosmological constant ($w=-1$) satisfies it and that matter and radiation do not.

**P3 (🔴)** Show the acceleration equation follows from the Friedmann and fluid equations. Differentiate the Friedmann equation (written without the separate $\Lambda$ term, absorbing it into $\rho$) with respect to time, then use the fluid equation to eliminate $\dot\rho$, and simplify to $\ddot a/a = -\tfrac{4\pi G}{3}(\rho + 3p/c^2)$.

<details>
<summary>Solutions</summary>

**P1** Insert $p = w\rho c^2$ into the fluid equation:

$$\dot\rho + 3H\Big(\rho + \frac{w\rho c^2}{c^2}\Big) = \dot\rho + 3H\rho(1+w) = 0.$$

Write $H = \dot a/a$ and separate variables:

$$\frac{\dot\rho}{\rho} = -3(1+w)\frac{\dot a}{a}.$$

Integrate both sides (with $w$ constant): $\ln\rho = -3(1+w)\ln a + \text{const}$, so

$$\rho = \rho_0\, a^{-3(1+w)}$$

(taking $a_0 = 1$ today, $\rho_0$ the present value). Specializing:

- Matter, $w=0$: $\rho \propto a^{-3}$.
- Radiation, $w=\tfrac13$: exponent $-3(1+\tfrac13) = -4$, so $\rho \propto a^{-4}$.
- Cosmological constant, $w=-1$: exponent $-3(1-1) = 0$, so $\rho \propto a^{0} = \text{const}$.

*Check.* The matter and radiation exponents match the log-log slopes in the figure ($-3$ and $-4$), and the constant-density $\Lambda$ is the flat line. ✓

**P2** With one fluid, $p = w\rho c^2$, and $\Lambda$ absorbed into $\rho$, the acceleration equation is

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\Big(\rho + \frac{3p}{c^2}\Big) = -\frac{4\pi G}{3}\big(\rho + 3w\rho\big) = -\frac{4\pi G}{3}\,\rho\,(1 + 3w).$$

Since $\tfrac{4\pi G}{3}\rho > 0$ (positive density), $\ddot a > 0$ requires the bracket to be negative:

$$1 + 3w < 0 \quad\Longleftrightarrow\quad w < -\frac13.$$

Check the actors: matter $w=0 \Rightarrow 1+3w = 1 > 0$ (decelerates); radiation $w=\tfrac13 \Rightarrow 1+3w = 2 > 0$ (decelerates); cosmological constant $w=-1 \Rightarrow 1+3w = -2 < 0$, so $\ddot a > 0$ — it accelerates. ✓

*Interpretation.* $w < -\tfrac13$ is the definition of dark energy: any component that repels rather than attracts.

**P3** Write the Friedmann equation, multiply through by $a^2$:

$$\dot a^2 = \frac{8\pi G}{3}\rho\, a^2 - kc^2.$$

Differentiate with respect to $t$ (note $kc^2$ is constant, and use the product rule on $\rho a^2$):

$$2\dot a\, \ddot a = \frac{8\pi G}{3}\big(\dot\rho\, a^2 + \rho\cdot 2a\dot a\big).$$

Divide both sides by $2a\dot a$:

$$\frac{\ddot a}{a} = \frac{8\pi G}{3}\left(\frac{\dot\rho\, a}{2\dot a} + \rho\right) = \frac{8\pi G}{3}\left(\frac{\dot\rho}{2H} + \rho\right),$$

using $\dot a/a = H$. Now bring in the fluid equation, $\dot\rho = -3H(\rho + p/c^2)$, so $\dot\rho/(2H) = -\tfrac32(\rho + p/c^2)$:

$$\frac{\ddot a}{a} = \frac{8\pi G}{3}\left(-\frac32\Big(\rho + \frac{p}{c^2}\Big) + \rho\right) = \frac{8\pi G}{3}\left(-\frac12\rho - \frac{3p}{2c^2}\right) = -\frac{4\pi G}{3}\Big(\rho + \frac{3p}{c^2}\Big).$$

Restoring an explicit $\Lambda$ (undoing the absorption $\rho \to \rho + \rho_\Lambda$, with $p_\Lambda = -\rho_\Lambda c^2$) reinstates the $+\Lambda c^2/3$ term. This is the acceleration equation — the three equations are mutually consistent, and any two determine the third. ✓

</details>

## Flashback

**From Lesson 1.3 (Redshift and cosmic distances):** A quasar's light is observed at redshift $z = 3$. By what factor has the universe expanded since that light was emitted, and what was the radiation density then compared with now (in terms of the present radiation density $\rho_{r,0}$)?

<details>
<summary>Solution</summary>

The cosmological redshift relation is $1 + z = a_0/a$ with $a_0 = 1$ today. At $z=3$:

$$1 + z = 4 \;\Longrightarrow\; a = \frac{1}{1+z} = \frac14.$$

So the universe has expanded by a factor $a_0/a = 4$ since emission. For the radiation density, use $\rho_r \propto a^{-4}$ (from this lesson's P1):

$$\frac{\rho_r(\text{then})}{\rho_{r,0}} = \left(\frac{a_0}{a}\right)^{4} = 4^{4} = 256,$$

so $\rho_r(\text{then}) = 256\,\rho_{r,0}$.

*Check.* Higher redshift = smaller $a$ = denser past, and radiation's steep $a^{-4}$ makes it $256\times$ denser at $z=3$ even though the universe was only $4\times$ smaller — the same steepness that makes radiation dominate the early universe in the figure. ✓

</details>

## Connections

- **Backward:** the scale factor $a(t)$ and curvature $k$ come from the FLRW metric of [1.2](01-02-flrw-metric-comoving-coordinates.md); the $a^{-4}$ dilution of radiation is the [1.3](01-03-redshift-cosmic-distances.md) redshift ($E \propto 1/a$) times the $a^{-3}$ volume dilution. The Friedmann equation is the Einstein field equations specialized to FLRW — the coda of [relativity](../../relativity/syllabus.md).
- **Forward:** [1.5](01-05-cosmic-energy-budget-lambda-cdm.md) recasts these as density parameters $\Omega_i$, finds the equality epochs where the curves in the figure cross, and integrates Friedmann era by era for $a(t)$. The exponential-expansion solution of Example 2 is the seed of inflation in [4.2](04-02-inflationary-mechanism.md), and the $w<-\tfrac13$ acceleration condition is the whole subject of dark energy in [4.4](04-04-dark-energy-cosmic-acceleration.md).
- **Sideways:** the fluid equation is nothing but the first law of thermodynamics $dU = -p\,dV$ applied to an expanding comoving box — the same energy accounting from stat-mech and thermodynamics, here with the volume set by $a^3$. The equation of state $w = p/\rho c^2$ is the cosmologist's version of the $p$–$\rho$ relations you meet for ideal gases and radiation there.

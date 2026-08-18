# Reactor Physics & Neutron Transport · Lesson 1.1: Neutron balance & the transport equation

> ⏱ ~15 min · Module 1: Transport & the diffusion approximation · Builds on: [`intro-nuclear-engineering`](../../intro-nuclear-engineering/syllabus.md), [`pdes`](../../pdes/syllabus.md) · Unlocks: [1.2 Cross sections, flux & reaction rates](01-02-cross-sections-flux-reaction-rates.md)

## Why this matters

Every question in reactor physics is one question in disguise: *where do the neutrons go?* Get more of them causing fissions than getting lost, and the chain reaction grows; balance the books exactly, and the reactor is critical and holds power; fall short, and it dies. This lesson writes down the one equation that keeps that ledger honestly — the **neutron transport (Boltzmann) equation**. Everything else in the course, from the diffusion equation to the four-factor formula to the xenon transient, is an *approximation* to this. You will rarely solve it by hand, but you must be able to read every term as a gain or a loss, because that reading is the physics.

## The idea

Forget equations for a moment. Picture a single neutron: it flies in a straight line — it "streams" — until it slams into a nucleus. At that collision it is absorbed (gone), or it scatters (flies off in a new direction with less energy), or it triggers a fission (which spits out two or three *new* neutrons). Between collisions it is a tiny point particle in free flight; all the physics happens at the collisions.

Now zoom out to the whole population. Draw an imaginary little box — not just a box in space, but a box in **phase space**: a specific spot $\mathbf r$, neutrons heading in a specific direction $\hat\Omega$, at a specific energy $E$. We want the rate at which the neutron count in that box changes. It is pure bookkeeping — *rate of change = (everything flowing in) − (everything flowing out):*

- **out** — neutrons stream across the box's boundary and leave (**leakage**); neutrons hit a nucleus and get knocked out of this energy-and-direction slot (**collision loss**);
- **in** — neutrons that were elsewhere in direction or energy scatter *into* our slot (**in-scattering**); fresh neutrons are born here by **fission**; and any **external source** we placed (a startup source) coughs some up.

Five arrows, one box. The transport equation is just those five arrows written in symbols. Nothing more.

## The formal version

Track neutrons with the **angular flux**

$$\psi(\mathbf r,\hat\Omega,E,t) = v\, n(\mathbf r,\hat\Omega,E,t),$$

where $n$ is the **angular neutron density** — the expected number of neutrons per unit volume at position $\mathbf r$, heading within a unit solid angle about the unit direction $\hat\Omega$, with energy in a unit interval about $E$, at time $t$ — and $v$ is the neutron speed ($E = \tfrac12 m v^2$). *In words: $\psi$ counts the neutrons in one phase-space cell, weighted by how fast they're moving.* We track $\psi$ rather than $n$ because reaction rates are $\psi$ times a cross section (next lesson), so $\psi$ is what the physics actually asks for.

The bookkeeping balance on the density $n = \psi/v$ is

$$\underbrace{\frac{1}{v}\frac{\partial \psi}{\partial t}}_{\text{rate of change}} \;=\; -\underbrace{\hat\Omega\cdot\nabla\psi}_{\text{streaming/leakage}} \;-\; \underbrace{\Sigma_t\,\psi}_{\text{collision loss}} \;+\; \underbrace{\int\!\!\int \Sigma_s\,\psi'\,dE'd\Omega'}_{\text{in-scatter}} \;+\; \underbrace{\frac{\chi(E)}{4\pi}\int \nu\Sigma_f\,\phi'\,dE'}_{\text{fission}} \;+\; \underbrace{S}_{\text{external}}.$$

*In words: the neutron count in this cell rises by whatever scatters or is born into it, and falls by whatever streams out or collides away.* Written in full, term by term:

$$\frac{1}{v}\frac{\partial \psi}{\partial t} + \hat\Omega\cdot\nabla\psi + \Sigma_t\,\psi = \int_{4\pi}\!\!\int_0^\infty \Sigma_s(\hat\Omega'\!\to\hat\Omega,\,E'\!\to E)\,\psi(\mathbf r,\hat\Omega',E',t)\,dE'\,d\Omega' + \frac{\chi(E)}{4\pi}\int_0^\infty \nu\Sigma_f(E')\,\phi(\mathbf r,E',t)\,dE' + S(\mathbf r,\hat\Omega,E,t).$$

Read each piece as a rate density (neutrons per cm³ per unit direction per unit energy per second):

- **$\hat\Omega\cdot\nabla\psi$ — streaming / leakage.** Since a streaming neutron keeps its direction, the flow of neutrons is $\psi\hat\Omega$, and its divergence is just $\hat\Omega\cdot\nabla\psi$. *In words: the net rate neutrons flow out of the cell because more head out one face than in the opposite one.* A loss where the flux is thinning in the direction of travel. This is the **only** term that couples neighboring points in space — it is why a reactor has a size.
- **$\Sigma_t\,\psi$ — collision (removal) loss.** $\Sigma_t$ is the **macroscopic total cross section** (units cm⁻¹): the probability per unit path length that a neutron interacts (from [`intro-nuclear-engineering`](../../intro-nuclear-engineering/syllabus.md); we rebuild it in [1.2](01-02-cross-sections-flux-reaction-rates.md)). *In words: any collision — absorption or scatter — kicks the neutron out of this exact $(\hat\Omega,E)$ slot, so it counts as a loss here.* Its reciprocal $\lambda = 1/\Sigma_t$ is the **mean free path**, the average straight-line flight between collisions.
- **In-scatter, $\int\!\int \Sigma_s(\hat\Omega'\!\to\hat\Omega, E'\!\to E)\,\psi'\,dE'd\Omega'$ — a gain.** The scattering kernel $\Sigma_s(\hat\Omega'\!\to\hat\Omega, E'\!\to E)$ is the rate density for a neutron at $(\hat\Omega', E')$ to scatter into our $(\hat\Omega, E)$. *In words: neutrons that were headed elsewhere at other energies bounce and land in our cell.* The double integral sweeps over every donor direction $\hat\Omega'$ and energy $E'$. Note the neutron *removed* from $(\hat\Omega',E')$ was already counted as a loss in that cell's $\Sigma_t\psi$ — scattering is a loss there and a gain here.
- **Fission, $\dfrac{\chi(E)}{4\pi}\displaystyle\int \nu\Sigma_f\,\phi'\,dE'$ — a gain.** $\Sigma_f$ is the fission cross section, $\nu\approx 2.4$ the neutrons released per fission, and $\phi(\mathbf r,E',t)=\int_{4\pi}\psi\,d\Omega'$ is the **scalar flux** (angular flux summed over all directions — the total fission rate doesn't care which way the incoming neutron went). $\chi(E)$ is the **fission spectrum**: the probability a fission neutron is born with energy $E$ (it integrates to 1), and $1/4\pi$ spreads those births equally over all directions because fission is isotropic. *In words: every fission anywhere in energy makes $\nu$ fresh neutrons, born fast and in all directions, and this is where the chain reaction lives.*
- **$S(\mathbf r,\hat\Omega,E,t)$ — external source.** Anything not made by the chain reaction: a startup neutron source (Cf-252, Am–Be), a calibration source, spontaneous fission. *In words: neutrons injected by hand.*

Seven independent variables — three of space, two of angle, one of energy, one of time — one linear integro-differential equation. It is the **linear Boltzmann equation**; "linear" because neutrons interact with nuclei, essentially never with each other, so no term is quadratic in $\psi$. That linearity is a gift the rest of the course keeps cashing.

## Picture

![A phase-space control-volume box with five labeled arrows: streaming in and leakage out through the side faces, in-scatter and fission entering from above, an external source entering from below, and collision loss leaving; blue arrows are gains, coral are losses](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (term-by-term — a purely absorbing medium).** Send a steady, monoenergetic beam of neutrons along the $x$-axis into a slab of material that only *absorbs* — no scattering ($\Sigma_s = 0$), no fission ($\Sigma_f = 0$), no source ($S = 0$). What survives of the transport equation?

Kill every dead term. Steady state drops $\partial\psi/\partial t$. No scatter, fission, or source zeroes the entire right-hand side. With no scattering, $\Sigma_t = \Sigma_a$ (total = absorption). All neutrons share one direction $\hat\Omega = \hat x$, so $\hat\Omega\cdot\nabla\psi = d\psi/dx$. What's left is a standoff between the two loss terms:

$$\frac{d\psi}{dx} + \Sigma_a\,\psi = 0 \qquad\Longrightarrow\qquad \psi(x) = \psi_0\,e^{-\Sigma_a x}.$$

*The reading:* streaming loss exactly feeds absorption loss. The beam thins exponentially, losing $1/e$ of its neutrons every mean free path $\lambda = 1/\Sigma_a$. This is **Beer's law** / exponential attenuation — the simplest thing the transport equation can say, and it falls straight out by crossing off terms. Attenuation of a beam is *transport with only streaming and absorption left standing.*

**Example 2 (steady-state one-speed reduction — previewing diffusion).** Now keep everything but collapse the energy variable: assume all neutrons share one speed (**one-group** theory) and hold steady. To get a balance of totals, **integrate the whole equation over all directions** $\int_{4\pi}(\cdots)\,d\Omega$. Take it term by term, using $\phi = \int_{4\pi}\psi\,d\Omega$ (scalar flux) and defining the **net current** $\mathbf J \equiv \int_{4\pi}\hat\Omega\,\psi\,d\Omega$:

- Streaming: $\displaystyle\int_{4\pi}\hat\Omega\cdot\nabla\psi\,d\Omega = \nabla\cdot\!\int_{4\pi}\hat\Omega\,\psi\,d\Omega = \nabla\cdot\mathbf J.$ The leakage term becomes the divergence of the current.
- Collision: $\displaystyle\int_{4\pi}\Sigma_t\psi\,d\Omega = \Sigma_t\phi.$
- In-scatter: integrating the kernel over all outgoing directions gives the total scatter rate, $\Sigma_s\phi.$
- Fission: $\chi$ integrates to 1 and $\int d\Omega/4\pi = 1$, leaving $\nu\Sigma_f\phi.$
- Source: $\int_{4\pi} S\,d\Omega \equiv S_0.$

Assemble, then use $\Sigma_t - \Sigma_s = \Sigma_a$ (total minus scatter is absorption):

$$\nabla\cdot\mathbf J + \Sigma_t\phi = \Sigma_s\phi + \nu\Sigma_f\phi + S_0 \quad\Longrightarrow\quad \boxed{\;\nabla\cdot\mathbf J + \Sigma_a\phi = \nu\Sigma_f\phi + S_0\;}$$

*The reading — this is THE neutron balance:* **leakage** ($\nabla\cdot\mathbf J$) **plus absorption** ($\Sigma_a\phi$) **equals production** ($\nu\Sigma_f\phi$) **plus source**. Every reactor is a fight to make the right side match the left. We haven't approximated anything yet — this is exact for one speed. The diffusion equation of [1.3](01-03-diffusion-approximation-ficks-law.md) arrives the moment we dare to write $\mathbf J = -D\nabla\phi$ (**Fick's law**), which turns leakage into $-D\nabla^2\phi$ and gives the solvable $-D\nabla^2\phi + \Sigma_a\phi = \nu\Sigma_f\phi + S_0$.

## Watch out

- **You might think a scattering collision is a loss, full stop.** It's a loss *from the cell it left* and an equal gain *to the cell it enters* — that's why $\Sigma_s$ appears once in $\Sigma_t\psi$ (removal) and again in the in-scatter integral (arrival). Only **absorption** is a true loss to the whole neutron population; scattering just relabels a neutron's direction and energy.
- **You might read $\hat\Omega\cdot\nabla\psi$ as "neutrons are moving, so it's motion."** It's specifically *net* motion across the cell boundary — a **spatial imbalance**, not the fact that neutrons have velocity. In a perfectly uniform infinite medium $\nabla\psi = 0$ and leakage vanishes even though every neutron is flying. Leakage needs an *edge* or a *gradient*; it is the term that makes size matter.
- **You might expect a $\phi$ where the equation has $\psi$, or vice versa.** Streaming and collision act on the *directional* $\psi$ (direction is of the essence there); fission and the total scatter rate depend only on the *direction-summed* $\phi$ (the nucleus doesn't care where the incoming neutron was pointed). Mixing them up is the classic transport slip.

## One-liner

> The transport equation is a phase-space ledger — time-rate = in-scatter + fission + source − streaming − collision — and every approximation in reactor physics is a cheaper way to keep those same books.

## Problems

**P1 (🟢)** A monoenergetic neutron beam enters a pure absorber with $\Sigma_a = 0.20\,\text{cm}^{-1}$ and no scattering, fission, or source. (a) Which single balance survives from the full transport equation? (b) What fraction of the beam makes it through a $5\,\text{cm}$ slab? (c) What is the mean free path?

**P2 (🟡)** Starting from the steady one-speed transport equation, integrate over all directions to derive the neutron balance $\nabla\cdot\mathbf J + \Sigma_a\phi = \nu\Sigma_f\phi + S_0$. Show the streaming term becomes $\nabla\cdot\mathbf J$ and the collision minus in-scatter terms combine into $\Sigma_a\phi$. Then read off, in one sentence each, what "leakage," "absorption," and "production" mean physically.

**P3 (🔴, optional)** A neutron is a point particle streaming between collisions in a medium with total cross section $\Sigma_t$. The probability it flies a distance $x$ *without* colliding and then collides in $dx$ is $\Sigma_t e^{-\Sigma_t x}\,dx$. (a) Show the mean free path is $\langle x\rangle = 1/\Sigma_t$. (b) For thermal neutrons in light water, $\Sigma_t \approx 3.5\,\text{cm}^{-1}$; find $\lambda$ and the probability a neutron streams more than $2\,\text{cm}$ before its first collision.

<details>
<summary>Solutions</summary>

**P1** (a) Steady state kills $\partial\psi/\partial t$; no scatter/fission/source empties the right-hand side; with no scattering $\Sigma_t = \Sigma_a$; a single beam direction makes $\hat\Omega\cdot\nabla\psi = d\psi/dx$. What survives is streaming balanced against absorption:
$$\frac{d\psi}{dx} + \Sigma_a\psi = 0 \quad\Longrightarrow\quad \psi(x) = \psi_0 e^{-\Sigma_a x}.$$
(b) Transmitted fraction through $5\,\text{cm}$:
$$\frac{\psi(5)}{\psi_0} = e^{-\Sigma_a x} = e^{-(0.20)(5)} = e^{-1} \approx 0.368,$$
so about **37%** get through (and 63% are absorbed). (c) Mean free path $\lambda = 1/\Sigma_a = 1/0.20 = 5\,\text{cm}$ — note the slab is exactly one mean free path thick, which is why the survivor fraction is precisely $1/e$. *Check:* $\Sigma_a x = 0.20\,\text{cm}^{-1}\times 5\,\text{cm} = 1$ is dimensionless, as an exponent must be. ✓

**P2** Apply $\int_{4\pi}(\cdots)\,d\Omega$ to $\hat\Omega\cdot\nabla\psi + \Sigma_t\psi = \displaystyle\int\Sigma_s(\hat\Omega'\!\to\hat\Omega)\psi'\,d\Omega' + \nu\Sigma_f\phi + S$ (steady, one speed, so the energy integrals are gone and $\chi$ is absent).

*Streaming.* The gradient operator doesn't touch the direction variable, so it passes outside the angular integral:
$$\int_{4\pi}\hat\Omega\cdot\nabla\psi\,d\Omega = \nabla\cdot\int_{4\pi}\hat\Omega\,\psi\,d\Omega = \nabla\cdot\mathbf J, \qquad \mathbf J \equiv \int_{4\pi}\hat\Omega\,\psi\,d\Omega.$$

*Collision.* $\displaystyle\int_{4\pi}\Sigma_t\psi\,d\Omega = \Sigma_t\phi$ with $\phi \equiv \int_{4\pi}\psi\,d\Omega.$

*In-scatter.* Integrating the kernel over every outgoing direction $\hat\Omega$ gives the total scattering cross section, $\int_{4\pi}\Sigma_s(\hat\Omega'\!\to\hat\Omega)\,d\Omega = \Sigma_s$, so the double angular integral collapses to $\int_{4\pi}\Sigma_s\psi(\hat\Omega')\,d\Omega' = \Sigma_s\phi.$

*Fission and source.* In one speed the fission term is already $\nu\Sigma_f\phi$ with no direction dependence and no $\chi/4\pi$ splitting to undo, so integrating over $\int_{4\pi}d\Omega/4\pi = 1$ leaves it unchanged as $\nu\Sigma_f\phi$; and $\int_{4\pi}S\,d\Omega \equiv S_0.$

Collecting, then subtracting the in-scatter gain from the collision loss:
$$\nabla\cdot\mathbf J + \Sigma_t\phi = \Sigma_s\phi + \nu\Sigma_f\phi + S_0 \;\Longrightarrow\; \nabla\cdot\mathbf J + \underbrace{(\Sigma_t-\Sigma_s)}_{=\,\Sigma_a}\phi = \nu\Sigma_f\phi + S_0.$$

*Readings.* **Leakage** $\nabla\cdot\mathbf J$: the net rate neutrons drain out of a volume through its surface (nonzero only where the flux has an edge or gradient). **Absorption** $\Sigma_a\phi$: the rate neutrons are captured or cause fission and thus permanently leave the population. **Production** $\nu\Sigma_f\phi$: the rate fission makes new neutrons. Balance = production feeds absorption plus leakage. ✓

**P3** (a) The mean free path is the expected flight distance,
$$\langle x\rangle = \int_0^\infty x\,\Sigma_t e^{-\Sigma_t x}\,dx.$$
This is the mean of an exponential distribution with rate $\Sigma_t$. Integrate by parts (or recall $\int_0^\infty x\,a e^{-ax}dx = 1/a$): with $a = \Sigma_t$,
$$\langle x\rangle = \frac{1}{\Sigma_t}.$$
*(By parts: $\int_0^\infty x\Sigma_t e^{-\Sigma_t x}dx = \big[-x e^{-\Sigma_t x}\big]_0^\infty + \int_0^\infty e^{-\Sigma_t x}dx = 0 + 1/\Sigma_t.$)*

(b) With $\Sigma_t = 3.5\,\text{cm}^{-1}$: $\lambda = 1/3.5 \approx 0.29\,\text{cm}.$ The probability of streaming more than $2\,\text{cm}$ with no collision is the survival function
$$P(x > 2) = e^{-\Sigma_t x} = e^{-(3.5)(2)} = e^{-7} \approx 9.1\times10^{-4}.$$
*Reading:* thermal neutrons in water collide every ~3 mm, so surviving a full centimeter untouched is already rare and $2\,\text{cm}$ almost never happens — this short mean free path is exactly why water is such a good moderator and why diffusion theory (many collisions over a reactor's size) will work well there. ✓

</details>

## Connections

- **Backward:** the cross sections $\Sigma_t,\Sigma_s,\Sigma_f$, the yield $\nu$, and the fission spectrum $\chi$ are all from [`intro-nuclear-engineering`](../../intro-nuclear-engineering/syllabus.md); [1.2](01-02-cross-sections-flux-reaction-rates.md) rebuilds them as $\Sigma = N\sigma$ and turns $\psi$ into reaction rates. This whole equation is the honest version of the "neutron economy" that intro course sketched with the four-factor formula.
- **Forward:** the one-speed balance $\nabla\cdot\mathbf J + \Sigma_a\phi = \nu\Sigma_f\phi + S_0$ is one bold assumption ($\mathbf J = -D\nabla\phi$) away from the diffusion equation of [1.3](01-03-diffusion-approximation-ficks-law.md) — the workhorse for the rest of Modules 1–3. Criticality (Module 2) is what happens to this balance when $S_0 = 0$ and production, absorption, and leakage must square off alone.
- **Sideways (kinetic theory & PDEs):** this *is* the linear Boltzmann equation that also governs radiative transfer (photons through a star or atmosphere) and rarefied gas flow — swap "neutron" for "photon" or "molecule" and the streaming-plus-collision structure is identical. And the angular-integration trick that turned leakage into $\nabla\cdot\mathbf J$, then into $-D\nabla^2\phi$, is the same reduction that produces the diffusion/heat equation whose Laplacian eigenvalue problems you met in [`pdes`](../../pdes/syllabus.md) — those eigenvalues will literally become criticality in [2.3](02-03-criticality-condition-geometric-buckling.md).

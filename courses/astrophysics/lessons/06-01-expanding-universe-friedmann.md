# Astrophysics · Lesson 6.1: The expanding universe and the Friedmann equations

> ⏱ ~15 min · Module 6: Cosmology · Builds on: [1.4 Gravitational dynamics & the virial theorem](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md), and the FLRW metric & Friedmann equations from general relativity ([relativity course](#/course/relativity)) · Unlocks: 6.2 (thermal history & Big Bang nucleosynthesis) — and Boss Problem 6

## Why this matters

Every previous lesson lived *inside* the universe — a star, a cloud, a galaxy. This one is about the container itself, treated as a single physical system with an equation of motion. In 1929 Hubble found that distant galaxies recede, faster the farther they are: the universe is expanding, which run backward means it was once hot and dense — a Big Bang. The **Friedmann equations** are the "$F=ma$" of the whole cosmos: feed in what the universe is made of (matter, radiation, a cosmological constant) and they tell you how fast it expands and what its fate is. They are the foundation for everything left in this course — the thermal history and light-element abundances (6.2), the microwave background (6.3), structure growth (6.4), and the discovery of cosmic acceleration (6.5). The full derivation is general relativity's (the FLRW metric, from the relativity course); the beautiful surprise is that **Newton plus energy conservation already gives you the first Friedmann equation exactly** — and we'll do that here.

## The idea

Two moves build all of cosmology.

**1. The cosmological principle.** On large enough scales (bigger than $\sim100$ Mpc, past individual galaxies and clusters), the universe looks the *same everywhere* (homogeneous) and the *same in every direction* (isotropic). No special place, no center, no edge. This is a statement about averages — locally there are stars and voids — but averaged over a huge box, every box looks like every other. It is an assumption, and it is spectacularly confirmed by the smoothness of the microwave background (6.3).

**2. One number describes all of expansion: the scale factor $a(t)$.** If the universe is homogeneous and expanding, it can't expand *differently* in different places — so the only freedom is a single, universal stretch factor. Picture galaxies painted on a rising loaf of raisin bread, or dots on an inflating balloon: the dough (space) swells, carrying the raisins apart, but the raisins themselves don't move *through* the dough. Assign each galaxy a fixed **comoving** coordinate $x$ that never changes; its actual physical distance from you is

$$d(t) = a(t)\,x,$$

where $a(t)$ is the scale factor (dimensionless, set to $a=1$ today). All distances scale together by $a(t)$.

**Hubble's law falls right out.** Differentiate: the recession speed is $v=\dot d = \dot a\,x = \frac{\dot a}{a}\,(a x) = \frac{\dot a}{a}\,d$. Define the **Hubble parameter** $H \equiv \dot a/a$, and

$$\boxed{\,v = H\,d\,}$$

Recession speed is proportional to distance — and this holds for *every* observer, with no center. (Every raisin sees all the others fleeing, itself apparently at the middle; homogeneity guarantees the view is identical from each.) That "no center" is the whole content of the left panel below.

**Why the Friedmann equation is just energy conservation.** Carve out a sphere of radius $r=a\,x$ around any point. By homogeneity, only mass *inside* the sphere pulls on a test galaxy at its edge (a spherically symmetric shell exerts no net force inside it — Newton's theorem). That test galaxy is a projectile: its kinetic-plus-gravitational energy is conserved, exactly like a ball thrown upward. Whether it escapes (expands forever), turns around (recollapses), or just barely coasts to a halt is decided by whether its total energy is positive, negative, or zero — and *that* is the spatial curvature $k$. The escape-velocity borderline defines the **critical density**. We'll derive it as Problem 2; the equation you get, term for term, is the relativistic Friedmann equation.

## The formal version

**The FLRW metric (stated — this is general relativity's result).** For a homogeneous, isotropic universe, spacetime intervals take the Friedmann–Lemaître–Robertson–Walker form

$$ds^2 = -c^2\,dt^2 + a(t)^2\!\left[\frac{dr^2}{1-k r^2} + r^2\,d\Omega^2\right],$$

with $a(t)$ the scale factor and $k$ the (constant) spatial curvature, normalizable to $k\in\{-1,0,+1\}$: **open** (negatively curved, saddle-like, infinite), **flat** (Euclidean, $k=0$), or **closed** (positively curved, a 3-sphere, finite). *In words:* time is universal, and a single function $a(t)$ stretches all spatial separations; $k$ sets the geometry of space. Feeding this metric into Einstein's field equations (the relativity course) yields the equations of motion below — we state them and interpret them; we do not derive them from GR here.

**The Friedmann equation (first).**

$$\boxed{\,H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\,\rho \;-\; \frac{k c^2}{a^2} \;+\; \frac{\Lambda c^2}{3}\,}$$

*In words:* the expansion rate squared is set by three things — the **energy density $\rho$** (all matter and radiation; gravity's pull, which drives and decelerates expansion), the **curvature term $-kc^2/a^2$** (geometry; the "total energy" of the expanding sphere), and the **cosmological constant $\Lambda$** (a constant energy of empty space that pushes outward). Here $G$ is Newton's constant, $c$ the speed of light. $\Lambda$ can equivalently be folded into $\rho$ as a "dark energy" density $\rho_\Lambda=\Lambda c^2/8\pi G$ with the strange property that it does not dilute.

**The acceleration equation (second Friedmann).** Combining the first with GR's energy equation gives

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3p}{c^2}\right) + \frac{\Lambda c^2}{3}.$$

*In words:* **pressure gravitates.** Ordinary matter and radiation ($p\ge0$) decelerate the expansion; only something with sufficiently *negative* pressure ($p<-\tfrac13\rho c^2$, e.g. $\Lambda$) can make $\ddot a>0$ and accelerate it. This is the equation behind dark energy (6.5).

**The fluid (continuity) equation.** Energy conservation in an expanding volume — the first law of thermodynamics, $dE=-p\,dV$, applied to a comoving box — gives

$$\dot\rho + 3\frac{\dot a}{a}\left(\rho + \frac{p}{c^2}\right)=0.$$

With an equation of state $p = w\rho c^2$, this integrates to $\rho \propto a^{-3(1+w)}$. So the three cosmic ingredients dilute differently as space stretches:

| Component | $w$ | Dilution | Why |
|---|---|---|---|
| Matter (dust) | $0$ | $\rho \propto a^{-3}$ | fixed particle count spread over volume $\propto a^{3}$ |
| Radiation | $1/3$ | $\rho \propto a^{-4}$ | volume dilution **plus** each photon redshifts, energy $\propto a^{-1}$ |
| Cosmological constant $\Lambda$ | $-1$ | $\rho = \text{const}$ | energy of the vacuum itself |

*In words:* rewind the film and radiation grows fastest ($a^{-4}$), so the early universe was radiation-dominated; matter takes over later; $\Lambda$, never diluting, wins in the end. That ordering is the skeleton of every "era" in 6.2 and Boss Problem 6.

**Critical density and the density parameter.** Set $\Lambda=0$ and ask: what density makes space flat ($k=0$)? From Friedmann, $H^2=\tfrac{8\pi G}{3}\rho$, so

$$\boxed{\,\rho_c = \frac{3H^2}{8\pi G}\,},\qquad \Omega \equiv \frac{\rho}{\rho_c}.$$

*In words:* $\rho_c$ is the density that exactly balances the expansion at the escape-velocity borderline. The **density parameter** $\Omega$ compares the actual density to it, and its value picks the geometry and fate:

$$\Omega>1 \ (\rho>\rho_c)\Rightarrow k>0,\ \text{closed, recollapses};\quad \Omega=1 \Rightarrow k=0,\ \text{flat};\quad \Omega<1 \Rightarrow k<0,\ \text{open, expands forever}.$$

(Once $\Lambda$ is included, "fate" and "geometry" decouple — the total $\Omega_{\rm tot}=\Omega_m+\Omega_r+\Omega_\Lambda=1$ still flags flatness, but a flat, $\Lambda$-dominated universe expands forever and accelerating. Our universe is that case; 6.5–6.6.)

**A note on the age.** If nothing decelerated expansion, a galaxy at distance $d$ receding at $v=H_0 d$ has been travelling for $t=d/v=1/H_0$. So the **Hubble time** $t_H=1/H_0$ is a first estimate of the age of the universe, and the **Hubble distance** $D_H=c/H_0$ marks the scale where naive recession approaches light speed. With $H_0\approx70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$, $t_H\approx14$ Gyr — reassuringly close to the true 13.8 Gyr.

## Picture

![Left: two snapshots of galaxies on an expanding line — the scale factor doubles, each galaxy drifts away at a speed proportional to its distance, with no center. Right: scale factor a(t) versus cosmic time for closed, flat, open, and Lambda-dominated universes, all passing through a=1 today with the same slope H_0 but diverging into different fates.](assets/06-01-fig1.svg)

**Left:** the same three galaxies at two times, with "home" held fixed. When $a$ doubles, every gap doubles — so the galaxy that started twice as far drifts twice as far in the same interval, i.e. moves twice as fast. That is $v=Hd$, drawn. Slide "home" to any other galaxy and the picture is identical: no center. **Right:** four histories of $a(t)$, all normalized to $a=1$ *now* with the same present slope (same $H_0$), so they agree on today's expansion rate but split on the future. More density (closed) bends the curve back down to a Big Crunch; less (open) coasts outward; a cosmological constant (purple) curves *upward* — accelerating expansion, our universe.

## Worked examples

**Example 1 (the Newtonian derivation, with curvature as energy).** Take a test galaxy of mass $m$ on the surface of a homogeneous expanding sphere of comoving radius $x$, physical radius $r(t)=a(t)x$ and uniform density $\rho(t)$. The enclosed mass is $M=\tfrac43\pi r^3\rho$, and only it pulls (shell theorem). Total energy of the test galaxy is conserved:

$$E = \tfrac12 m\dot r^2 - \frac{GMm}{r} = \tfrac12 m\dot r^2 - \frac{4\pi G}{3}\rho\, r^2 m = \text{const}.$$

Substitute $r=ax$ (so $\dot r=\dot a\,x$), divide by $\tfrac12 m a^2 x^2$:

$$\frac{\dot a^2}{a^2} = \frac{8\pi G}{3}\rho + \frac{2E}{m x^2}\cdot\frac{1}{a^2}.$$

The left side is $H^2$; the last term falls as $1/a^2$ and carries the *sign of the total energy*. Writing $2E/(mx^2)\equiv -kc^2$ reproduces the Friedmann equation exactly:

$$H^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2}.$$

**So curvature *is* the total energy of the expanding sphere.** $E<0$ (bound, $k>0$): gravity wins, recollapse — a closed universe. $E>0$ ($k<0$): unbound, expands forever — open. $E=0$ ($k=0$): the escape-velocity knife-edge — flat. The $\Lambda$ term is the one piece Newton can't supply; everything else GR merely confirms. (This is the virial/energy bookkeeping of [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md) applied to the whole universe.)

**Example 2 (which ingredient rules when — setup for the eras).** Because radiation dilutes as $a^{-4}$ and matter as $a^{-3}$, their ratio scales as $\rho_r/\rho_m \propto a^{-1}=(1+z)$, where redshift $z$ is defined by $1+z=1/a$ (light emitted when the universe was $a$ times smaller is stretched by $1/a$). Today the density parameters are roughly $\Omega_m\approx0.30$ and $\Omega_r\approx9\times10^{-5}$ (photons plus neutrinos). Radiation equalled matter when

$$\frac{\rho_r}{\rho_m}=\frac{\Omega_r}{\Omega_m}(1+z)=1 \;\Rightarrow\; 1+z_{\rm eq}=\frac{\Omega_m}{\Omega_r}=\frac{0.30}{9\times10^{-5}}\approx 3300.$$

Before $z\approx3300$ the universe was radiation-dominated; after, matter-dominated. Now compare matter to the cosmological constant, $\rho_\Lambda=$ const with $\Omega_\Lambda\approx0.70$: matter (falling as $a^{-3}$) dropped below $\Lambda$ when

$$\Omega_m(1+z)^3 = \Omega_\Lambda \;\Rightarrow\; 1+z_{m\Lambda}=\left(\frac{0.70}{0.30}\right)^{1/3}\approx1.33,\quad z_{m\Lambda}\approx0.33.$$

So $\Lambda$ took over only recently (a redshift of $\sim0.3$, a few billion years ago) — which is exactly why cosmic acceleration was hard to find and why "why *now*?" is a real puzzle (the coincidence problem, 6.5). Three eras, read straight off the dilution laws.

## Watch out

- **Galaxies are not flying *through* space.** Recession is space itself stretching between comoving points, not motion through a pre-existing void. That's why $v=Hd$ can exceed $c$ for distant enough galaxies with no contradiction — special relativity's speed limit governs motion *through* space, not the expansion *of* space. The redshift is a stretching of wavelength by $a$, not a Doppler shift through a medium.
- **"The Big Bang happened somewhere" is wrong.** It happened *everywhere* — every point was in the hot dense state. There is no center of expansion and no edge; the left panel's "no center" is literal.
- **You might think $\Omega>1$ always means recollapse.** True only for $\Lambda=0$. With dark energy, geometry (set by total $\Omega=1$ for flatness) and destiny (set by whether $\Lambda$ dominates) come apart — our universe is flat *and* expands forever.
- **$H_0$ is not a velocity and not constant in time.** It's an inverse time (a rate), $[H]=\mathrm{s^{-1}}$; the "km/s/Mpc" units hide that. And $H=\dot a/a$ changes as the universe evolves — the subscript $0$ means "its value today."
- **Curvature $k$ and $a$ carry a scale convention.** With $k\in\{-1,0,+1\}$, $a$ has units of length; many texts set $a_0=1$ today and let $k$ absorb the scale. Keep one convention.

## One-liner

> A single stretch factor $a(t)$ turns homogeneity into $v=Hd$, and energy conservation of an expanding sphere turns gravity into the Friedmann equation $H^2=\tfrac{8\pi G}{3}\rho-\tfrac{kc^2}{a^2}+\tfrac{\Lambda c^2}{3}$ — where curvature is total energy, and matter, radiation, and $\Lambda$ dilute as $a^{-3},a^{-4},a^0$.

## Problems

**P1 (🟢)** Take $H_0 = 70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$ (and $1\ \mathrm{Mpc}=3.086\times10^{19}\ \mathrm{km}=3.086\times10^{22}\ \mathrm m$, $c=3.0\times10^{5}\ \mathrm{km/s}$).
(a) Compute the Hubble time $t_H=1/H_0$ in seconds and in Gyr.
(b) Compute the Hubble distance $D_H=c/H_0$ in Mpc.
(c) Estimate the recession velocity of a galaxy at $d=100$ Mpc.

**P2 (🟡)** Derive the flat, $\Lambda=0$ first Friedmann equation $H^2=\tfrac{8\pi G}{3}\rho$ from Newtonian energy conservation. Consider a test galaxy of mass $m$ at the edge of a uniform expanding sphere of physical radius $r(t)$ and density $\rho(t)$, on the escape-velocity knife-edge (total energy $E=0$). Write down its energy, substitute the enclosed mass, and show the expansion rate obeys the Friedmann equation. Explain in one line why $E=0$ corresponds to the *critical* density.

**P3 (🔴, optional)** Compute the critical density today, $\rho_c=3H_0^2/8\pi G$, with $H_0=70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$ and $G=6.674\times10^{-11}\ \mathrm{N\,m^2/kg^2}$. Express your answer (i) in $\mathrm{kg/m^3}$ and (ii) as a number of hydrogen atoms per cubic meter (hydrogen mass $m_H=1.673\times10^{-27}\ \mathrm{kg}$). Comment on how this compares to a good laboratory vacuum, and note that only $\sim5\%$ of it is ordinary atoms.

<details>
<summary>Solutions</summary>

**P1** First convert $H_0$ to SI: $H_0 = \dfrac{70\ \mathrm{km/s}}{3.086\times10^{19}\ \mathrm{km}} = 2.27\times10^{-18}\ \mathrm{s^{-1}}$.

(a) $t_H = 1/H_0 = \dfrac{1}{2.27\times10^{-18}} = 4.41\times10^{17}\ \mathrm{s}$. In years: $4.41\times10^{17}/3.156\times10^{7} = 1.40\times10^{10}\ \mathrm{yr} \approx \mathbf{14\ Gyr}$ — the right ballpark for the age of the universe (true value 13.8 Gyr; the closeness is a near-cancellation of early deceleration against late acceleration).

(b) $D_H = c/H_0 = \dfrac{3.0\times10^{5}\ \mathrm{km/s}}{70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}} = \mathbf{4290\ Mpc} \approx 4.3\ \mathrm{Gpc}$ ($\approx 1.3\times10^{26}\ \mathrm m \approx 14$ billion light-years).

(c) $v = H_0 d = 70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}\times 100\ \mathrm{Mpc} = \mathbf{7000\ km/s}$ ($\approx0.023\,c$). Comfortably nonrelativistic, so Hubble's law applies cleanly.

**P2** The test galaxy's conserved total energy (kinetic + gravitational, with $M=\tfrac43\pi r^3\rho$ the enclosed mass) is
$$E = \tfrac12 m\dot r^2 - \frac{GMm}{r} = \tfrac12 m\dot r^2 - \frac{4\pi G}{3}\rho\,r^2 m.$$
On the knife-edge $E=0$:
$$\tfrac12 m\dot r^2 = \frac{4\pi G}{3}\rho\,r^2 m \;\Longrightarrow\; \dot r^2 = \frac{8\pi G}{3}\rho\,r^2.$$
Divide by $r^2$ and use $H=\dot r/r=\dot a/a$ (since $r=ax$ and $x$ is constant, $\dot r/r=\dot a/a$):
$$\left(\frac{\dot r}{r}\right)^2 = H^2 = \frac{8\pi G}{3}\rho. \qquad\checkmark$$
Rearranged, $\rho = 3H^2/8\pi G \equiv \rho_c$. **Why "critical":** $E=0$ is exactly the escape-velocity condition — the expansion has precisely the kinetic energy needed to coast to rest at infinity, neither recollapsing ($E<0$, over-dense) nor flying free with energy to spare ($E>0$, under-dense). The density that sits on that boundary is the critical density, and it makes space flat.

**P3** Reuse $H_0 = 2.27\times10^{-18}\ \mathrm{s^{-1}}$, so $H_0^2 = 5.14\times10^{-36}\ \mathrm{s^{-2}}$.
$$\rho_c = \frac{3H_0^2}{8\pi G} = \frac{3(5.14\times10^{-36})}{8\pi(6.674\times10^{-11})} = \frac{1.543\times10^{-35}}{1.677\times10^{-9}} = \mathbf{9.2\times10^{-27}\ kg/m^3}.$$
(i) $9.2\times10^{-27}\ \mathrm{kg/m^3}$.
(ii) Per cubic meter: $\dfrac{9.2\times10^{-27}}{1.673\times10^{-27}} \approx \mathbf{5.5\ hydrogen\ atoms/m^3}$.

Comment: about **5–6 hydrogen atoms in every cubic meter** is the *entire* mean density of the universe — and a good laboratory vacuum ($\sim10^{-10}$ Pa) still holds millions of molecules per cubic meter, so the cosmos averaged over the largest scales is far emptier than anything we can pump down to. Worse: only $\Omega_b\approx0.05$ of $\rho_c$ is ordinary (baryonic) matter, so real atoms average about $0.05\times5.5\approx0.3$ per cubic meter — roughly *one hydrogen atom per three cubic meters*. The rest is dark matter ($\sim27\%$) and dark energy ($\sim68\%$). The universe is overwhelmingly, structurally empty.

</details>

## Flashback

**From Lesson 1.4 (Gravitational dynamics & the virial theorem):** the collapse (dynamical) time of a self-gravitating system of mean density $\rho$ is $t_{\rm dyn}\sim 1/\sqrt{G\rho}$. Evaluate it for the mean density of the universe, $\rho=\rho_c\approx9.2\times10^{-27}\ \mathrm{kg/m^3}$, and compare it to the Hubble time $1/H_0\approx4.4\times10^{17}$ s. Is the closeness a coincidence?

<details>
<summary>Solution</summary>

$$t_{\rm dyn}\sim\frac{1}{\sqrt{G\rho_c}} = \frac{1}{\sqrt{(6.674\times10^{-11})(9.2\times10^{-27})}} = \frac{1}{\sqrt{6.1\times10^{-37}}} = \frac{1}{7.8\times10^{-19}} \approx 1.3\times10^{18}\ \mathrm{s}\approx 40\ \mathrm{Gyr}.$$

That's within a factor of $\sim3$ of the Hubble time $1/H_0\approx4.4\times10^{17}\ \mathrm{s}$ — the **same order of magnitude**, and *not* a coincidence. The Friedmann equation $H^2=\tfrac{8\pi G}{3}\rho_c$ says exactly $H_0=\sqrt{8\pi G\rho_c/3}$, i.e. $H_0=\sqrt{8\pi/3}\,\sqrt{G\rho_c}\approx2.9\sqrt{G\rho_c}$, so $t_{\rm dyn}=1/\sqrt{G\rho_c}\approx2.9/H_0$. The cosmic expansion clock and the gravitational collapse clock are the *same clock*: at the critical density, the universe expands on precisely its own free-fall timescale — the borderline where gravity can just barely halt the flight. *Check:* the ratio $\sqrt{8\pi/3}=2.9$ matches $40/13.9\approx2.9$. ✓

</details>

## Connections

- **Backward:** the derivation is [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md)'s energy-and-timescale bookkeeping ($E=K+U$, $t_{\rm dyn}\sim1/\sqrt{G\rho}$) scaled up to the entire universe — the expanding sphere is one giant self-gravitating system, and curvature is its total energy. The escape-velocity logic is [mechanics 2.2](#/lesson/mechanics-refresher/02-02-potential-energy-conservation.md) verbatim.
- **Forward:** the dilution laws ($\rho_m\propto a^{-3}$, $\rho_r\propto a^{-4}$, $\rho_\Lambda=$ const) and the era ordering drive the thermal history and Big Bang nucleosynthesis ([6.2](#/lesson/astrophysics/06-02-thermal-history-bbn.md)), the last-scattering surface of the CMB ([6.3](#/lesson/astrophysics/06-03-cosmic-microwave-background.md)), and Boss Problem 6 (solve $a(t)$ era by era and find matter–$\Lambda$ equality). The acceleration equation is the launch point for dark energy ([6.5](#/lesson/astrophysics/06-05-dark-energy-acceleration.md)).
- **Sideways (general relativity):** the FLRW metric and Friedmann equations are the relativity course's cosmology — space stretching is the same geometry that curves light near a mass. That the Newtonian energy argument reproduces the relativistic result exactly (bar the $\Lambda$ term) is a genuine and slightly lucky gift of the $1/r^2$ force. See [relativity](#/course/relativity).
- **Sideways (stat-mech / thermodynamics):** the fluid equation $\dot\rho+3H(\rho+p/c^2)=0$ is just $dE=-p\,dV$ — the first law — applied to a comoving volume $V\propto a^3$; the equation of state $p=w\rho c^2$ is the same $p$–$\rho$ relation stat-mech supplies for a gas or a photon field ([stat-mech 4.3, the photon gas](#/lesson/stat-mech/04-03-photon-gas-blackbody.md), whose $p=\tfrac13 u$ is exactly radiation's $w=\tfrac13$).

# Relativity (SR + GR) · Lesson 6.1: The Schwarzschild solution

> ⏱ ~15 min · Module 6: Solutions — black holes & cosmology · Builds on: [5.3 The Einstein field equations](#/lesson/relativity/05-03-einstein-field-equations.md), [5.5 Newtonian limit & redshift](#/lesson/relativity/05-05-newtonian-limit-redshift.md), [5.6 Linearized gravity & waves](#/lesson/relativity/05-06-linearized-gravity-waves.md), [4.3 The metric & proper time](#/lesson/relativity/04-03-metric-proper-time.md) · Unlocks: Schwarzschild orbits & light bending (6.2), black-hole horizons (6.3)

## Why this matters

The Einstein equations are ten coupled nonlinear PDEs for $g_{\mu\nu}(x)$ — the kind of system you do not expect to solve in closed form. Yet within *months* of the field equations being published, Karl Schwarzschild (computing from a WWI trench, 1916) wrote down an exact vacuum solution for the geometry outside a spherical mass. It is the single most important solution in all of GR: it governs the orbit of Mercury, the bending of starlight, GPS timing, the geometry around every star and planet, and — when the mass is compact enough — the event horizon of a black hole. Almost every experimental test of GR, and the entire physics of black holes, lives inside this one metric. This lesson derives it, reads its physics, and locates its two famous radii.

## The idea

Look for the simplest interesting gravitational field: the spacetime *outside* a single, isolated, non-rotating, spherical mass — the Sun, the Earth, a lone star. "Outside" means **vacuum**, no matter present, so [5.3](#/lesson/relativity/05-03-einstein-field-equations.md)'s field equations $G_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}$ collapse (with $T_{\mu\nu}=0$) to the clean statement $R_{\mu\nu}=0$: **empty space is Ricci-flat.**

Now impose the symmetry. The source is a round ball that just sits there, so the geometry should look the same from every direction (spherically symmetric) and never change (static). That is an enormous constraint — it forces the metric into a form with just *two* unknown functions of the radius, and $R_{\mu\nu}=0$ pins both of them down completely. The answer is startlingly simple: a single dimensionful constant, the **Schwarzschild radius** $r_s$, controls everything, and far from the mass the geometry melts back into flat Minkowski space.

Two things then jump out of the solution, and they are the seeds of the next several lessons. First, one special radius — $r=r_s$ — is where a stationary clock appears to freeze and the radial metric coefficient blows up: the **event horizon**. Second, the very center, $r=0$, is where curvature itself becomes infinite: the **true singularity**. For everyday objects $r_s$ is microscopic and buried harmlessly inside the mass; only for a genuinely compact object does the horizon see the light of day and a black hole form.

## The formal version

**Signature $(-,+,+,+)$ throughout; $c$ and $G$ kept explicit.**

**The vacuum field equations.** With no matter ($T_{\mu\nu}=0$), taking the trace of $G_{\mu\nu}=R_{\mu\nu}-\tfrac12 g_{\mu\nu}R=0$ gives $R=0$, so the equations reduce to

$$R_{\mu\nu}=0 .$$

*In words:* outside all the matter, spacetime is **Ricci-flat** — the trace-part of curvature vanishes, though the full Riemann tensor (tidal forces) need not. This is the equation Schwarzschild solved. (Ricci-flat is *not* flat: empty space around the Sun is genuinely curved — that curvature is gravity.)

**The symmetry ansatz.** "Static, spherically symmetric" forces the line element into the form

$$ds^2 = -A(r)\,c^2 dt^2 + B(r)\,dr^2 + r^2\big(d\theta^2+\sin^2\theta\,d\phi^2\big),$$

for two unknown functions $A(r),B(r)$. Feeding this into $R_{\mu\nu}=0$ yields ordinary differential equations whose solution is $A(r)=1-r_s/r$ and $B(r)=1/A(r)$, with $r_s$ an integration constant.

**The Schwarzschild metric.**

$$\boxed{\,ds^2 = -\Big(1-\frac{r_s}{r}\Big)c^2\,dt^2 + \Big(1-\frac{r_s}{r}\Big)^{-1}dr^2 + r^2\big(d\theta^2+\sin^2\theta\,d\phi^2\big)\,}$$

*In words:* the geometry outside a spherical mass, encoded in one factor $f(r)=1-r_s/r$ that multiplies the time part and divides the radial part; the angular part $r^2 d\Omega^2$ is the ordinary round sphere. The coordinate $r$ is defined so that a sphere at "radius $r$" has area $4\pi r^2$ — it is an *area* coordinate, not a measured distance from the center (Problem 3).

**Fixing $r_s$ — the Newtonian limit.** The constant $r_s$ is fixed by demanding that far away, where gravity is weak, the metric reproduce Newton. From [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md), the weak-field time–time component is $g_{00}=-\big(1+2\Phi/c^2\big)c^2$ with $\Phi$ the Newtonian potential. Matching to the Schwarzschild coefficient $-\big(1-r_s/r\big)c^2$:

$$1-\frac{r_s}{r}=1+\frac{2\Phi}{c^2}\ \Rightarrow\ \Phi=-\frac{r_s c^2}{2r}.$$

For this to equal the Newtonian $\Phi=-GM/r$ of a point mass $M$, we need

$$\boxed{\,r_s=\frac{2GM}{c^2}\,}$$

the **Schwarzschild radius**. *In words:* the one free constant is not arbitrary — it is set by the mass, through the requirement that Schwarzschild reduce to Newtonian gravity where Newton is known to work.

**Birkhoff's theorem.** *Any* spherically symmetric solution of the vacuum equations is necessarily static and equal to the Schwarzschild metric (for some $M$). *In words:* spherical symmetry alone forces staticity — you get no extra freedom by allowing time dependence. Two physical payoffs: (i) a radially pulsating or collapsing spherical star has a **completely static external field** — a breathing star broadcasts *nothing* to the outside; (ii) there is **no monopole gravitational radiation** — the lowest radiating multipole is the quadrupole ([5.6](#/lesson/relativity/05-06-linearized-gravity-waves.md)), which is exactly why detectable gravitational waves need *asymmetric*, non-spherical sources like inspiralling binaries.

**Reading the physics.**
- **Asymptotic flatness.** As $r\to\infty$, $r_s/r\to0$ and $ds^2\to -c^2dt^2+dr^2+r^2d\Omega^2$ — flat Minkowski in spherical coordinates. Far from the mass, special relativity is restored.
- **Gravitational time dilation / redshift.** For a clock at rest ($dr=d\theta=d\phi=0$), $d\tau=\sqrt{-g_{00}}\,dt=\sqrt{1-r_s/r}\;dt<dt$: clocks run slow near mass, and light climbing out is redshifted ([5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md); [4.3](#/lesson/relativity/04-03-metric-proper-time.md) Example 2).
- **Universality.** This metric describes spacetime outside *any* spherical mass — Sun, Earth, neutron star, or black hole. What differs between them is only whether the surface sits outside or inside $r_s$.

**The two special radii.**
- $r=r_s$: here $g_{00}=-(1-r_s/r)\to0$ and $g_{rr}=(1-r_s/r)^{-1}\to\infty$. This is the **event horizon**. The blow-up is a *coordinate* artifact — a bad chart, removable by better coordinates — not a real infinity (explored in [6.3](#/lesson/relativity/06-03-black-holes-horizons.md)).
- $r=0$: here the curvature scalar $R_{\rho\sigma\mu\nu}R^{\rho\sigma\mu\nu}=12\,r_s^2/r^6$ diverges — a **true, coordinate-independent curvature singularity**. No chart removes it; geometry genuinely breaks down.

For ordinary bodies $r_s$ is tiny and lies *deep inside* the mass, where the vacuum solution does not even apply (there's matter there): $r_s^{\odot}\approx 3\ \mathrm{km}$ (Sun), $r_s^{\oplus}\approx 9\ \mathrm{mm}$ (Earth). The horizon only becomes physical for an object compressed inside its own $r_s$ — a black hole ([6.3](#/lesson/relativity/06-03-black-holes-horizons.md); astrophysically, [black holes](#/lesson/astrophysics/04-03-black-holes-astrophysics.md)).

## Picture

![Left: an embedding-diagram funnel — a flat sheet far away that dips into a well, with the throat marked as the Schwarzschild radius r_s (event horizon) and the very bottom as the r=0 curvature singularity. Right: the two metric factors plotted against r: the g00 factor (1 - r_s/r) rising from 0 at r_s toward 1 far away, and the g_rr factor 1/(1 - r_s/r) blowing up to infinity at r_s and settling to 1 far away.](assets/06-01-fig1.svg)

The funnel (an *embedding diagram*: the curved 2D spatial geometry drawn as a surface in ordinary 3D so you can see its shape) is flat far out and dips into a well near the mass. The throat is $r_s$; the bottom is the $r=0$ singularity. On the right, the two coefficients tell the whole story: $-g_{00}=1-r_s/r$ dies to $0$ at the horizon (clocks freeze), while $g_{rr}=1/(1-r_s/r)$ blows up (space "stretches"). Both return to $1$ far away — asymptotic flatness. The blow-up at $r_s$ is a coordinate glitch; the real trouble is at $r=0$.

## Worked examples

**Example 1 (mechanical — the size of a horizon).** How compressed must the Sun be to become a black hole? Its Schwarzschild radius is

$$r_s^{\odot}=\frac{2GM_\odot}{c^2}=\frac{2(6.674\times10^{-11})(1.989\times10^{30})}{(2.998\times10^{8})^2}\ \mathrm{m}\approx 2.95\times10^3\ \mathrm{m}\approx 3\ \mathrm{km}.$$

The Sun's actual radius is $6.96\times10^{5}\ \mathrm{km}$, so $r_s/R_\odot\approx4\times10^{-6}$: the 3-km Schwarzschild radius is buried nearly 700,000 km deep, well inside solar plasma where the vacuum solution doesn't even apply. The Sun is in no danger of being a black hole; you would have to crush it into a 3-km ball first. A convenient scaling to memorize: $r_s\approx 2.95\ \mathrm{km}\times (M/M_\odot)$, since $r_s\propto M$.

**Example 2 (why you'd care — Birkhoff kills a would-be signal).** Suppose a spherical star pulsates radially — expanding and contracting like a beating heart, its radius $R(t)$ oscillating in time. Naively you might expect its external gravitational field to oscillate too, radiating gravitational waves you could detect. **Birkhoff's theorem forbids it.** The exterior is spherically symmetric at every instant, so it must be *exactly* the static Schwarzschild field for the enclosed mass $M$ — with no $t$-dependence whatsoever. A distant planet feels a perfectly constant pull; a detector sees nothing. This is the gravitational analogue of the electromagnetic fact that a spherically pulsating charge distribution produces no radiation (no monopole radiation), and it is *why* gravitational-wave sources must be non-spherical — the asymmetric, orbiting binaries of [gravitational waves](#/lesson/astrophysics/04-05-gravitational-waves-mergers.md), whose quadrupole moment changes in time.

## Watch out

- **You might think $r_s$ is the physical "size" of an object.** For the Sun and Earth, $r_s$ (3 km, 9 mm) is a fictitious radius buried far inside real matter — no horizon exists there, because the vacuum Schwarzschild solution only holds *outside* the mass. A horizon is physical only when the object is smaller than its own $r_s$.
- **You might think the blow-up at $r=r_s$ is a real singularity.** It is not — $g_{rr}\to\infty$ is a **coordinate** singularity (a failure of the $t,r$ chart, like the longitude coordinate exploding at the North Pole), removable by better coordinates ([6.3](#/lesson/relativity/06-03-black-holes-horizons.md)). The genuine, curvature-scalar-diverging singularity is at $r=0$, and *that* one is real. Distinguishing the two is the central lesson of horizons.
- **You might read Birkhoff as "spherical stars emit no gravitational waves ever."** Sharper: a *spherically symmetric* mass distribution has a static exterior and radiates no waves. Real stars that radiate (merging binaries, non-radial oscillations) do so precisely by *breaking* spherical symmetry — Birkhoff says the monopole channel is silent, not that gravity is.
- **You might mix up the two factors.** The time coefficient is $-(1-r_s/r)c^2$ and the radial coefficient is $+(1-r_s/r)^{-1}$ — **reciprocal** factors, plus don't drop the $c^2$ on the $dt^2$ term. Swapping them corrupts every redshift and horizon statement.

## One-liner

> Outside any spherical mass, spacetime is the Schwarzschild metric — one factor $1-r_s/r$ with $r_s=2GM/c^2$ — flat far away, redshifting clocks near the mass, with a coordinate horizon at $r_s$ and a true singularity at $r=0$; and by Birkhoff, that's the *only* spherical vacuum, so pulsating stars broadcast nothing.

## Problems

Useful constants: $G=6.674\times10^{-11}\ \mathrm{N\,m^2/kg^2}$, $c=2.998\times10^{8}\ \mathrm{m/s}$, $M_\odot=1.989\times10^{30}\ \mathrm{kg}$, $M_\oplus=5.972\times10^{24}\ \mathrm{kg}$; $R_\odot=6.96\times10^{5}\ \mathrm{km}$, $R_\oplus=6371\ \mathrm{km}$, $1\ \mathrm{AU}=1.496\times10^{8}\ \mathrm{km}$.

**P1 (🟢)** Compute the Schwarzschild radius $r_s=2GM/c^2$ for (a) the Sun, (b) the Earth, and (c) a supermassive black hole of $M=10^{9}M_\odot$. For each, compare $r_s$ to the object's physical size and say whether a horizon is exposed.

**P2 (🟡)** (a) Show that as $r\to\infty$ the Schwarzschild metric reduces to flat Minkowski space in spherical coordinates. (b) Using $g_{00}=-\big(1+2\Phi/c^2\big)c^2$ from the Newtonian limit, extract $\Phi(r)$ from the Schwarzschild $g_{00}$ and confirm it equals the Newtonian potential $\Phi=-GM/r$ of a point mass.

**P3 (🔴, optional)** The *proper* radial distance between two radii (at fixed $t,\theta,\phi$) is $\ell=\int_{r_1}^{r_2}\sqrt{g_{rr}}\,dr=\int_{r_1}^{r_2}\dfrac{dr}{\sqrt{1-r_s/r}}$. (a) Argue in one line that $\ell>r_2-r_1$, i.e. the measured distance always *exceeds* the coordinate difference. (b) Evaluate $\ell$ between $r_1=2r_s$ and $r_2=3r_s$ and compare to the coordinate gap $r_2-r_1=r_s$. (Antiderivative: $\int\frac{dr}{\sqrt{1-r_s/r}}=\sqrt{r(r-r_s)}+r_s\ln\!\big(\sqrt r+\sqrt{r-r_s}\big)+C$.)

<details>
<summary>Solutions</summary>

**P1** Use $r_s\approx 2.95\ \mathrm{km}\times(M/M_\odot)$ (since $r_s^\odot=2GM_\odot/c^2\approx2.95$ km and $r_s\propto M$).

(a) **Sun:** $r_s^\odot\approx 2.95\ \mathrm{km}$. Physical radius $R_\odot=6.96\times10^{5}\ \mathrm{km}$, so $r_s/R_\odot\approx 4\times10^{-6}$ — the "horizon" is buried $\sim$235,000 km inside the Sun, deep in matter where vacuum Schwarzschild doesn't apply. **No exposed horizon.**

(b) **Earth:** $r_s^\oplus=2.95\ \mathrm{km}\times\frac{5.972\times10^{24}}{1.989\times10^{30}}=2.95\ \mathrm{km}\times3.00\times10^{-6}\approx 8.9\times10^{-6}\ \mathrm{km}=8.9\ \mathrm{mm}$. (Direct check: $2GM_\oplus/c^2=2(6.674\times10^{-11})(5.972\times10^{24})/(2.998\times10^{8})^2\approx8.87\times10^{-3}$ m.) Compared to $R_\oplus=6371$ km, $r_s/R_\oplus\approx1.4\times10^{-9}$: a marble-sized horizon buried at Earth's center. **No exposed horizon.**

(c) **Supermassive BH:** $r_s=2.95\ \mathrm{km}\times10^{9}=2.95\times10^{9}\ \mathrm{km}=\dfrac{2.95\times10^{9}}{1.496\times10^{8}}\ \mathrm{AU}\approx 19.7\ \mathrm{AU}$ — roughly the radius of Uranus's orbit ($\approx19.2$ AU). Here there is no "surface" outside the horizon; the object *is* the black hole, so **the horizon is exposed and is the object's size.** The lesson of the three cases: $r_s$ is buried and irrelevant for ordinary bodies, but *is* the boundary for a black hole.

**P2** (a) As $r\to\infty$, $r_s/r\to0$, so $1-r_s/r\to1$ and $(1-r_s/r)^{-1}\to1$. The metric becomes
$$ds^2\to -c^2dt^2+dr^2+r^2\big(d\theta^2+\sin^2\theta\,d\phi^2\big),$$
which is exactly flat Minkowski space $\eta_{\mu\nu}$ written in spherical spatial coordinates (the spatial part $dr^2+r^2d\Omega^2$ is ordinary Euclidean $dx^2+dy^2+dz^2$ in spherical form). Asymptotic flatness. ✓

(b) The Schwarzschild time coefficient is $g_{00}=-\big(1-r_s/r\big)c^2$. Setting this equal to the weak-field form $-\big(1+2\Phi/c^2\big)c^2$:
$$1-\frac{r_s}{r}=1+\frac{2\Phi}{c^2}\ \Rightarrow\ \frac{2\Phi}{c^2}=-\frac{r_s}{r}\ \Rightarrow\ \Phi=-\frac{r_s c^2}{2r}.$$
Substitute $r_s=2GM/c^2$:
$$\Phi=-\frac{(2GM/c^2)c^2}{2r}=-\frac{GM}{r},$$
the Newtonian potential of a point mass $M$. ✓ (This is the matching that *fixed* $r_s$ in the first place, run in reverse — a consistency check.)

**P3** (a) Since $r>r_s$ on the integration range, $0<1-r_s/r<1$, so the integrand $\dfrac{1}{\sqrt{1-r_s/r}}>1$ everywhere. Integrating a function that is strictly greater than 1 over $[r_1,r_2]$ gives more than integrating 1: $\ell>\int_{r_1}^{r_2}dr=r_2-r_1$. Space is "stretched" radially — you must walk farther than the coordinate labels suggest.

(b) With the given antiderivative $F(r)=\sqrt{r(r-r_s)}+r_s\ln\!\big(\sqrt r+\sqrt{r-r_s}\big)$:
$$F(3r_s)=\sqrt{3r_s\cdot2r_s}+r_s\ln\!\big(\sqrt{3r_s}+\sqrt{2r_s}\big)=\sqrt6\,r_s+r_s\Big[\tfrac12\ln r_s+\ln(\sqrt3+\sqrt2)\Big],$$
$$F(2r_s)=\sqrt{2r_s\cdot r_s}+r_s\ln\!\big(\sqrt{2r_s}+\sqrt{r_s}\big)=\sqrt2\,r_s+r_s\Big[\tfrac12\ln r_s+\ln(\sqrt2+1)\Big].$$
The $\tfrac12\ln r_s$ pieces cancel in the difference:
$$\ell=F(3r_s)-F(2r_s)=(\sqrt6-\sqrt2)\,r_s+r_s\ln\frac{\sqrt3+\sqrt2}{\sqrt2+1}.$$
Numerically: $\sqrt6-\sqrt2=2.449-1.414=1.035$; $\dfrac{\sqrt3+\sqrt2}{\sqrt2+1}=\dfrac{3.146}{2.414}=1.303$, $\ln(1.303)=0.265$. So
$$\ell=(1.035+0.265)\,r_s\approx 1.30\,r_s.$$
The coordinate gap is $r_2-r_1=r_s$, so the proper distance is about **30% larger** than the naive $\Delta r$ — the radial stretching of Schwarzschild space, and it grows without bound as $r_1\to r_s^{+}$ (the throat of the funnel in the figure).

</details>

## Flashback

**From Lesson 4.3 (The metric & proper time):** A clock hovers at fixed position at radius $r=4r_s$ outside a Schwarzschild mass; a second clock sits far away ($r\to\infty$). (a) What fraction of the distant clock's rate does the close clock tick at? (b) Light of wavelength $\lambda_e$ is emitted at $r=4r_s$ and received far away — find the redshift factor $\lambda_\infty/\lambda_e$ and the value of $z$ (where $1+z=\lambda_\infty/\lambda_e$).

<details>
<summary>Solution</summary>

(a) A stationary clock reads $d\tau=\sqrt{-g_{00}}\,dt=\sqrt{1-r_s/r}\,dt$ (only the $dt^2$ term survives at fixed $r,\theta,\phi$). At $r=4r_s$: $r_s/r=\tfrac14$, so
$$\frac{d\tau}{dt}=\sqrt{1-\tfrac14}=\sqrt{\tfrac34}=\frac{\sqrt3}{2}\approx0.866.$$
The close clock ticks at $\approx86.6\%$ of the far clock's rate — it runs slow, as expected nearer the mass.

(b) Frequency scales like clock rate, so a wave crest emitted every $d\tau_e$ of local time arrives with the emitter's slower cadence stamped on it: $\dfrac{\lambda_\infty}{\lambda_e}=\dfrac{1}{\sqrt{1-r_s/r_e}}=\dfrac{1}{\sqrt{3}/2}=\dfrac{2}{\sqrt3}\approx1.155.$
So $1+z\approx1.155$, giving $z\approx0.155$ — light climbing out of the well is redshifted by about 15%. (This is the same $g_{00}$-read-off as [4.3](#/lesson/relativity/04-03-metric-proper-time.md), now recognized as gravitational redshift; the full treatment is [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md).)

</details>

## Connections

- **Backward:** this is the payoff of Module 5 — the vacuum field equations $R_{\mu\nu}=0$ from [5.3](#/lesson/relativity/05-03-einstein-field-equations.md), solved under symmetry; $r_s$ fixed by the Newtonian-limit matching $g_{00}=-(1+2\Phi/c^2)$ of [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md); Birkhoff's "no monopole radiation" is the sharp complement to the quadrupole waves of [5.6](#/lesson/relativity/05-06-linearized-gravity-waves.md). Reading $ds^2$, $g_{00}$, and proper distance off the metric is the skill built in [4.3](#/lesson/relativity/04-03-metric-proper-time.md).
- **Forward:** the geodesics of this metric give Mercury's perihelion precession and the bending of light — the classic tests — in [6.2](#/lesson/relativity/06-02-orbits-precession-light-bending.md); the coordinate singularity at $r_s$ is resolved into a true event horizon in [6.3](#/lesson/relativity/06-03-black-holes-horizons.md); adding rotation gives the Kerr metric ([6.4](#/lesson/relativity/06-04-kerr-charged-holes.md)); horizon area and entropy in [6.5](#/lesson/relativity/06-05-black-hole-thermodynamics.md).
- **Sideways (astrophysics):** the observational life of this metric — stellar-mass and supermassive black holes, accretion, imaging the horizon — lives in [astrophysics: black holes](#/lesson/astrophysics/04-03-black-holes-astrophysics.md), and Birkhoff's exclusion of monopole radiation is why detectable sources are the asymmetric binaries of [gravitational waves & mergers](#/lesson/astrophysics/04-05-gravitational-waves-mergers.md).

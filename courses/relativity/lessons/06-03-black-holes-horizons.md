# Relativity (SR + GR) · Lesson 6.3: Black holes I — horizons, coordinates, and the interior

> ⏱ ~15 min · Module 6: Solutions — black holes & cosmology · Builds on: [6.1 The Schwarzschild solution](#/lesson/relativity/06-01-schwarzschild-solution.md), [6.2 Orbits, precession & light bending](#/lesson/relativity/06-02-orbits-precession-light-bending.md), [5.5 Newtonian limit & redshift](#/lesson/relativity/05-05-newtonian-limit-redshift.md), [4.3 The metric & proper time](#/lesson/relativity/04-03-metric-proper-time.md) · Unlocks: rotating & charged holes (6.4), black-hole thermodynamics (6.5)

## Why this matters

The Schwarzschild metric of [6.1](#/lesson/relativity/06-01-schwarzschild-solution.md) has two places where its components misbehave: $r=r_s=2GM/c^2$ (where $g_{tt}\to0$ and $g_{rr}\to\infty$) and $r=0$ (where they blow up too). For decades even good physicists conflated the two and thought the surface $r=r_s$ was a physical wall. It is not. One of these is a **coordinate singularity** — an artifact of a bad map, like the way every meridian on Earth crashes into a single "point" at the north pole even though the pole is perfectly ordinary ground. The other is a **real** singularity, where the geometry itself is torn. Telling them apart is the whole game, and it is what turns a confusing metric into the most extreme object in nature: a region of spacetime you can fall into but never climb out of, whose interior hides a moment — not a place — where physics as we know it ends.

## The idea

Picture the light cones of [1.4](#/lesson/relativity/01-04-spacetime-interval-causality.md): at every event, the future you can reach lies *inside* your forward light cone, because nothing outruns light. In flat space those cones stand straight up. Near a mass, gravity tips them. Far from a black hole the tipping is gentle. As you approach $r_s$ the cones lean inward — toward smaller $r$ — more and more steeply. **Exactly at $r_s$ the outward edge of the cone becomes vertical:** the best an outward-racing light ray can do is hover, frozen at that radius. One step inside, the cone has tipped over completely, so that *both* edges point toward smaller $r$. Now every future-directed path — light, rocket, screaming astronaut — is forced to smaller and smaller $r$. That surface of no return is the **event horizon**. It is not a wall you hit; it is a one-way membrane in the causal structure. You cross it without any local drama and simply find that "outward" has stopped being a direction you can travel.

Two observers watching the same fall disagree completely, and both are right. A **distant** observer, reading the far-away clock $t$, sees the infalling astronaut slow down, redden, and *freeze* just above the horizon — never quite crossing, taking infinite $t$ to arrive. The **infalling** astronaut feels nothing special at the horizon (locally it's ordinary vacuum — the equivalence principle of [5.1](#/lesson/relativity/05-01-equivalence-principle.md) guarantees a freely-falling frame looks like flat space), sails across in finite time on their own wristwatch, and only later meets the genuine catastrophe at $r=0$.

## The formal version

**Signature $(-,+,+,+)$; $c$ and $G$ kept explicit.** The Schwarzschild line element outside a spherical mass $M$ ([6.1](#/lesson/relativity/06-01-schwarzschild-solution.md)):

$$ds^2=-\Big(1-\frac{r_s}{r}\Big)c^2\,dt^2+\Big(1-\frac{r_s}{r}\Big)^{-1}dr^2+r^2\,d\Omega^2,\qquad r_s=\frac{2GM}{c^2}.$$

**The event horizon.** The surface $r=r_s$ where $g_{tt}=-(1-r_s/r)c^2$ vanishes and $g_{rr}=(1-r_s/r)^{-1}$ diverges. *In words:* the boundary of the region from which no signal — not even light — can reach infinity. It is a **null surface** (built from the frozen outgoing light rays), which is why it acts as a one-way gate.

**Coordinate vs. true singularity — the invariant test.** The metric *components* blowing up proves nothing: components depend on your coordinate chart, and a bad chart can manufacture infinities (polar coordinates make $g_{\phi\phi}=r^2\to\infty$ far out, yet the plane is flat — [4.3](#/lesson/relativity/04-03-metric-proper-time.md)). To ask whether the *geometry* is singular, compute a **curvature scalar** — a coordinate-independent number. The standard one is the **Kretschmann scalar**, the full contraction of the Riemann tensor ([4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md)) with itself. For Schwarzschild:

$$K \equiv R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma}=\frac{48\,G^2M^2}{c^4\,r^6}.$$

*In words:* one honest number that measures how curved spacetime really is at radius $r$, the same in every coordinate system. Read off the verdict directly:

- **At $r=r_s$:** $K=\dfrac{48G^2M^2}{c^4 r_s^6}=\dfrac{3c^8}{4G^4M^4}$ — perfectly **finite**. The horizon is *not* a curvature singularity; the blowup of $g_{rr}$ there is a **coordinate singularity**, removable by a better chart.
- **As $r\to0$:** $K\propto r^{-6}\to\infty$ — a **genuine** curvature singularity. No coordinate change can cure a divergent invariant.

**Better coordinates cross the horizon smoothly.** The cure for the coordinate singularity is a chart adapted to *infalling* rays instead of the static clock $t$ that stalls at the horizon. **Eddington–Finkelstein** coordinates replace $t$ by the advanced time $v=ct+r_{*}$, where the "tortoise" coordinate $r_{*}$ is defined by $dr_{*}=dr/(1-r_s/r)$ (so $r_{*}=r+r_s\ln|r/r_s-1|$); in the $(v,r)$ chart every metric component is finite and smooth right across $r=r_s$, and infalling light rays are straight 45° lines. **Kruskal–Szekeres** coordinates go further and cover the *entire* geometry (interior and exterior) in one non-singular chart. *In words:* the horizon was never broken; only the map was, and a map drawn from the infaller's point of view sails across it without a hiccup.

**Inside the horizon, $r$ and $t$ swap roles.** For $r<r_s$ the factor $(1-r_s/r)$ turns **negative**, so $g_{tt}>0$ (the $t$-direction becomes *spacelike*) and $g_{rr}<0$ (the $r$-direction becomes *timelike*). *In words:* inside, $r$ is a time, not a place — and because the metric fixes its future direction as *decreasing* $r$, moving toward $r=0$ is as unavoidable as moving toward next Tuesday. **The singularity is a moment in your future, not a location in space.** You can no more steer away from it than you can steer away from tomorrow.

**Two observers, two clocks.** A clock static at radius $r$ ages $d\tau=\sqrt{1-r_s/r}\,dt$ ([4.3](#/lesson/relativity/04-03-metric-proper-time.md), [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md)). As the emitter approaches $r_s$ this factor $\to0$: the distant observer sees its light infinitely **redshifted** and its clock **frozen** — infinite coordinate time $t$ to reach the horizon. But the infaller's own **proper time** $\tau$ to cross and to hit $r=0$ is **finite** (Problem 2). Both statements come from the same metric; they are answers to two different questions.

## Picture

![Eddington–Finkelstein-style diagram: light cones plotted at several radii. Far from the black hole the cones stand upright and light escapes outward; approaching the event horizon at r = r_s (dashed vertical line) the cones tip inward until, exactly at r_s, the outgoing edge is vertical; inside the horizon the cones have tipped fully over so both edges point toward smaller r, forcing every future-directed path to the r = 0 singularity (jagged red line). An infalling worldline threads through, staying inside its cones all the way to r = 0.](assets/06-03-fig1.svg)

The horizon is drawn as what it is: the radius where the cone's outgoing edge stands straight up. Outside, the cone's future still contains outward directions — light can climb away. Inside, the cone has rotated so far that *its entire future lies at smaller $r$*. The infalling worldline never leaves its own light cones (it is always sub-luminal), yet those cones march it inexorably to $r=0$. Notice there is **nothing** locally strange at $r_s$ itself: the cone there is a perfectly good cone, just tilted — which is exactly why the falling observer feels no jolt on crossing.

## Worked examples

**Example 1 (the horizon is smooth — tidal forces at $r_s$).** Would crossing the horizon rip you apart? Tidal stretching is governed by curvature, i.e. by $K\sim G^2M^2/c^4r^6$, evaluated at $r=r_s=2GM/c^2$. Because $K(r_s)=\tfrac{3c^8}{4G^4M^4}\propto M^{-4}$, **bigger black holes have gentler horizons.** For a stellar hole ($M\sim10\,M_\odot$, $r_s\sim30$ km) the tidal gradient at $r_s$ is lethal — "spaghettification" before you arrive. For a supermassive hole ($M\sim10^9\,M_\odot$, $r_s\sim20$ AU) the curvature at the horizon is so mild you would cross it without noticing, coffee unspilled, and only be torn apart much later near $r=0$. Same *type* of surface, wildly different comfort — precisely because the horizon's badness in the metric was an illusion, and the *real* curvature there is finite and $M$-dependent.

**Example 2 (why the distant observer sees freezing — gravitational redshift → $\infty$).** A photon of emitted frequency $\nu_{\rm em}$ leaves an emitter static at radius $r$ and climbs to a distant receiver. From the static-clock relation $d\tau=\sqrt{1-r_s/r}\,dt$, ticks at $r$ are stretched by $1/\sqrt{1-r_s/r}$ when read on the far clock, so the received frequency is

$$\nu_{\rm rec}=\sqrt{1-\frac{r_s}{r}}\;\nu_{\rm em}.$$

As the emitter is lowered toward the horizon, $r\to r_s$ and $\nu_{\rm rec}\to0$: the light is redshifted to zero frequency and infinite wavelength — it fades out, and the last photons take ever longer to arrive. That is *why* a distant camera sees an infalling object dim, redden, and freeze at $r_s$ rather than cross: this is the gravitational redshift of [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md) pushed to its extreme. The freezing is a fact about *signals we receive*, not about the infaller, who has long since crossed.

## Watch out

- **You might think the horizon is a physical surface — a shell of stuff, or a wall.** It is a *location in the causal structure*, empty vacuum, defined only globally (by where light can and cannot escape to infinity). The diverging $g_{rr}$ is a coordinate artifact; the invariant $K$ is finite there. A local experiment at $r_s$ can't even detect that you're at the horizon.
- **You might think the frozen, infinitely-redshifted image means the object never really falls in.** That's the *distant* coordinate description ($t\to\infty$). In the object's *own* proper time it crosses in a finite, unremarkable interval and reaches $r=0$ shortly after. "Never crosses" and "crosses in 15 microseconds" are the same physics answered in two clocks.
- **You might think you could fire your engines and hover just inside $r_s$.** Inside, $r$ is *timelike* — decreasing $r$ is your future. Thrusting is like trying to stop time from advancing; the most powerful rocket only changes *how soon* you hit $r=0$ (and, perversely, hard acceleration gets you there *sooner*). There is no "staying put."
- **You might conflate $r=0$ with a point at the center you could orbit or dodge.** Inside the horizon $r=0$ is a *time* in everyone's future, reached by all worldlines — not a place with a location. There is no "around" it.

## One-liner

> The horizon at $r_s$ is a coordinate mirage over smooth (finite-$K$) spacetime — a one-way causal membrane where cones tip over; only $r=0$, where the curvature invariant truly diverges, is a real singularity, and inside the horizon it is not a place but an unavoidable moment in your future.

## Problems

**P1 (🟢)** Using the Kretschmann scalar $K(r)=\dfrac{48\,G^2M^2}{c^4 r^6}$, (a) evaluate $K$ at the horizon $r=r_s=2GM/c^2$ and show it is finite; (b) describe the behavior as $r\to0$. State which of the two "singularities" of the Schwarzschild metric is real and which is a coordinate artifact, and why $K$ (rather than $g_{rr}$) is the right thing to look at.

**P2 (🟡)** For an observer released from rest far away, radial infall obeys $\dfrac{dr}{d\tau}=-c\sqrt{\dfrac{r_s}{r}}$ (from the geodesic equation of [4.5](#/lesson/relativity/04-05-geodesics.md); take it as given). (a) Compute the **proper time** to fall from the horizon $r=r_s$ to $r=0$ and show it is finite. (b) For the **distant** observer, $\dfrac{dt}{dr}=-\dfrac{1}{c\sqrt{r_s/r}\,(1-r_s/r)}$; show that the coordinate time $t$ to reach $r=r_s$ **diverges** by finding the logarithmic behavior of the integrand near $r=r_s$.

**P3 (🔴, optional)** Explain, using the sign of $(1-r_s/r)$ in the metric and the tipping of light cones, why for $r<r_s$ *every* future-directed timelike worldline must reach $r=0$ — i.e. why the singularity is "a moment in time, not a place in space." Identify which coordinate becomes timelike inside the horizon and what fixes the direction of its future.

<details>
<summary>Solutions</summary>

**P1** (a) Substitute $r=r_s=2GM/c^2$, so $r_s^6=\dfrac{64\,G^6M^6}{c^{12}}$:

$$K(r_s)=\frac{48\,G^2M^2}{c^4}\cdot\frac{c^{12}}{64\,G^6M^6}=\frac{48}{64}\cdot\frac{c^8}{G^4M^4}=\frac{3c^8}{4G^4M^4}.$$

A finite number (and, interestingly, $\propto M^{-4}$ — the horizon of a more massive hole is *less* curved).

(b) As $r\to0$, $K\propto r^{-6}\to+\infty$: the curvature invariant diverges without bound.

**Verdict.** $r=0$ is a **true (curvature) singularity** — an invariant, coordinate-free scalar blows up, so *no* choice of coordinates can make the geometry regular there; spacetime genuinely ends. $r=r_s$ is only a **coordinate singularity**: $K$ is finite, so the geometry is smooth, and the divergence of the metric *component* $g_{rr}=(1-r_s/r)^{-1}$ merely signals that the static $(t,r)$ chart breaks down at the horizon (like the pole of a polar-coordinate map). Eddington–Finkelstein or Kruskal coordinates remove it. Why $K$ and not $g_{rr}$: metric components are chart-dependent and can be made finite or infinite by a coordinate change, whereas $K$ is a **scalar** — the same in every frame — so only $K$ (or another invariant) certifies a *physical* singularity.

**P2** (a) Separate and integrate the proper-time relation, taking the magnitude of $dr$ (falling inward):

$$\tau=\int_{0}^{r_s}\frac{dr}{c\sqrt{r_s/r}}=\frac{1}{c\sqrt{r_s}}\int_0^{r_s}\sqrt{r}\,dr=\frac{1}{c\sqrt{r_s}}\cdot\frac{2}{3}\,r_s^{3/2}=\frac{2r_s}{3c}=\frac{4GM}{3c^3}.$$

Finite — the integrand $\propto\sqrt r$ is perfectly well-behaved at both ends (and nothing special happens at the horizon $r=r_s$, which isn't even an endpoint of interest here). The infaller crosses and reaches the singularity in a short, finite wristwatch time. For a solar-mass hole, $\tfrac{4GM}{3c^3}\sim10^{-5}$ s.

(b) Near the horizon write $r=r_s+\epsilon$ with $\epsilon\to0^+$. Then $\sqrt{r_s/r}\to1$ and

$$1-\frac{r_s}{r}=\frac{r-r_s}{r}\approx\frac{\epsilon}{r_s},$$

so the coordinate-time integrand behaves as

$$\left|\frac{dt}{dr}\right|=\frac{1}{c\sqrt{r_s/r}\,(1-r_s/r)}\approx\frac{r_s}{c\,\epsilon}=\frac{r_s}{c\,(r-r_s)}.$$

Integrating,

$$t\approx\frac{r_s}{c}\int\frac{dr}{r-r_s}=\frac{r_s}{c}\ln|r-r_s|+\text{const}\;\longrightarrow\;-\infty\ \text{as}\ (r-r_s)\to0^+,$$

i.e. $t\to+\infty$ as the emitter approaches $r_s$ from outside (the accumulated $t$ grows like $-\tfrac{r_s}{c}\ln(r/r_s-1)$). The divergence is **logarithmic**: the distant observer assigns *infinite* coordinate time to the crossing and therefore never sees it happen — the object appears to freeze and redshift away at the horizon, exactly the picture of Example 2.

**P3** Split into the two regimes by the sign of $(1-r_s/r)$.

*Outside* ($r>r_s$): $1-r_s/r>0$, so $g_{tt}=-(1-r_s/r)c^2<0$ ($t$ timelike) and $g_{rr}=(1-r_s/r)^{-1}>0$ ($r$ spacelike). Ordinary: $t$ measures time, $r$ measures a spatial radius you can move in or out of.

*Inside* ($r<r_s$): $1-r_s/r<0$, so the signs flip — $g_{tt}>0$ (the $t$-direction is now **spacelike**) and $g_{rr}<0$ (the **$r$-direction is now timelike**). So $r$ has become a time coordinate. A future-directed timelike worldline must advance in the timelike direction; the metric's time-orientation (inherited continuously from the infalling cones outside, which all tipped toward smaller $r$) fixes the future as **decreasing $r$**. Hence along every future-directed path $dr<0$: $r$ falls monotonically and must reach $r=0$. In light-cone language (the figure): inside $r_s$ both null edges of every cone point toward smaller $r$, so the *entire* future light cone — and therefore every timelike path inside it — is squeezed toward $r=0$. There is no future-directed direction with $dr\ge0$; "outward" is not merely hard, it is *not a direction in time you can go*, any more than you can travel into yesterday. That is the precise sense in which $r=0$ is **a moment in the future, not a place in space**: it is reached by all observers at a definite proper time ahead, like an appointment you cannot miss, and it has no spatial location to steer around.

</details>

## Flashback

**From Lesson 6.1 (The Schwarzschild solution):** The supermassive black hole Sagittarius A* at the center of our galaxy has mass $M\approx4.3\times10^{6}\,M_\odot$, with $M_\odot=1.99\times10^{30}$ kg, $G=6.67\times10^{-11}\ \mathrm{N\,m^2/kg^2}$, $c=3.0\times10^{8}$ m/s. (a) Compute its Schwarzschild radius $r_s=2GM/c^2$. (b) Using this lesson's result $K(r_s)=\tfrac{3c^8}{4G^4M^4}\propto M^{-4}$, argue in one line whether an astronaut would be spaghettified *at* its horizon.

<details>
<summary>Solution</summary>

(a) $M=4.3\times10^{6}\times1.99\times10^{30}=8.6\times10^{36}$ kg. Then

$$r_s=\frac{2GM}{c^2}=\frac{2(6.67\times10^{-11})(8.6\times10^{36})}{(3.0\times10^8)^2}=\frac{1.14\times10^{27}}{9.0\times10^{16}}\approx1.3\times10^{10}\ \text{m}.$$

That's about $1.3\times10^{10}$ m $\approx0.085$ AU — roughly a fifth of Mercury's orbital radius, i.e. horizon comfortably larger than many stars.

(b) Because $K(r_s)\propto M^{-4}$ and this $M$ is millions of solar masses, the curvature at the horizon is minuscule: the astronaut crosses Sgr A*'s horizon with negligible tidal stretching and feels nothing locally special (the equivalence principle at work) — spaghettification is deferred until far deeper, near the true singularity at $r=0$. Contrast a $10\,M_\odot$ stellar hole, whose horizon curvature is $\sim(4.3\times10^5)^4\sim10^{22}$ times larger — lethal before arrival.

</details>

## Connections

- **Backward:** the horizon is the extreme of the gravitational time dilation / redshift you first read off $g_{00}$ in [4.3](#/lesson/relativity/04-03-metric-proper-time.md) and derived in [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md) — where $\sqrt{-g_{00}}\to0$. The coordinate-vs-true-singularity distinction is [4.3](#/lesson/relativity/04-03-metric-proper-time.md)'s "complicated components $\ne$ curved space" made decisive by the curvature invariant of [4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md); the infaller's smooth crossing is the equivalence principle of [5.1](#/lesson/relativity/05-01-equivalence-principle.md); the cones are those of [1.4](#/lesson/relativity/01-04-spacetime-interval-causality.md), now tipped by curvature.
- **Forward:** real black holes spin, so the astrophysically relevant metric is Kerr — with an *ergosphere* and frame dragging, and a subtler horizon structure — taken up in [6.4](#/lesson/relativity/06-04-kerr-charged-holes.md). Classically the horizon can only grow; that area law becomes an *entropy* law, and the classical "nothing escapes" picture is modified by quantum effects (Hawking radiation) in [6.5](#/lesson/relativity/06-05-black-hole-thermodynamics.md). One line on the deepest open puzzle: if a hole slowly radiates away, what happens to the information about everything that fell in? — the **information paradox**, still unresolved, sits at the seam between GR and quantum theory that [6.5](#/lesson/relativity/06-05-black-hole-thermodynamics.md) opens.
- **Sideways (astrophysics):** *how* black holes actually form (stellar collapse past the neutron-star limit), and how we detect them (X-ray binaries, stellar orbits at the galactic center, the Event Horizon Telescope image, ringdown in merger waveforms) is the subject of [astrophysics: black holes](#/lesson/astrophysics/04-03-black-holes-astrophysics.md) and, for the merger signals, [gravitational waves & mergers](#/lesson/astrophysics/04-05-gravitational-waves-mergers.md). This lesson supplies the geometry those observations are reading.

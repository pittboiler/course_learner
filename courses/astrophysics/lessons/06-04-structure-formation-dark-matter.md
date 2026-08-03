# Astrophysics · Lesson 6.4: Structure formation and dark matter

> ⏱ ~15 min · Module 6: Cosmology · Builds on: [6.3 The cosmic microwave background](#/lesson/astrophysics/06-03-cosmic-microwave-background.md), [5.5 Clusters and large-scale structure](#/lesson/astrophysics/05-05-clusters-large-scale-structure.md), [3.1 Star formation and the Jeans instability](#/lesson/astrophysics/03-01-star-formation-jeans.md) · Unlocks: dark energy and cosmic acceleration (6.5), the concordance model (6.6)

## Why this matters

The [CMB](#/lesson/astrophysics/06-03-cosmic-microwave-background.md) shows a universe that was almost perfectly smooth: the temperature ripples are $\Delta T/T \sim 10^{-5}$, meaning the density varied from place to place by only about one part in a hundred thousand. Yet today you live inside a galaxy where the density is $\sim 10^{5}$ times the cosmic average, strung along a [cosmic web](#/lesson/astrophysics/05-05-clusters-large-scale-structure.md) of filaments and voids. How did a nearly featureless plasma grow ten billion years' worth of galaxies?

The engine is **gravitational instability** — overdense regions pull themselves together, the rich getting richer. But there are two surprises. First, in an *expanding* universe the growth is agonizingly slow — a power law, not the runaway exponential of stellar collapse. Second, the arithmetic only closes if most of the matter is **dark**: ordinary matter physically could not have started clumping early enough. This lesson is where dark matter stops being a rotation-curve anomaly ([5.3](#/lesson/astrophysics/05-03-galaxies-dark-matter.md)) and becomes structurally necessary — the universe as we see it does not form without it.

## The idea

Picture the early universe as a nearly uniform sea with tiny bumps. A region that happens to be slightly denser than average gravitates slightly harder, so it pulls in surrounding matter, becomes denser still, and pulls even harder. That feedback — **overdensity feeds on its own gravity** — is gravitational instability. Left alone, it runs away.

But the universe is *expanding*, and expansion is the enemy of collapse. As space stretches, it dilutes the very matter an overdense region is trying to gather; the background is running away from it. The result is a tug-of-war: gravity concentrates, expansion disperses. Gravity wins — but only just, and only slowly. Instead of the exponential runaway of a collapsing gas cloud ([3.1](#/lesson/astrophysics/03-01-star-formation-jeans.md)), the contrast grows merely **in proportion to the size of the universe**. Structure formation is a slow race, and there is barely enough cosmic time to reach the finish line.

That tight timing is what forces dark matter onto the stage. Before recombination, ordinary matter (baryons) was welded to the radiation field, and radiation pressure — the same springiness that makes the CMB's [acoustic peaks](#/lesson/astrophysics/06-03-cosmic-microwave-background.md) — flatly refused to let it collapse. So baryons couldn't even *begin* clumping until the universe was 380,000 years old. Dark matter feels no radiation pressure. It began collapsing far earlier, quietly digging deep gravitational wells; when baryons were finally released, they simply fell into wells that were already waiting. Without that head start, there has not been enough time to build a single galaxy.

## The formal version

**Density contrast.** Measure lumpiness by the fractional overdensity
$$\delta(\mathbf{x}) \equiv \frac{\rho(\mathbf{x}) - \bar\rho}{\bar\rho},$$
where $\bar\rho$ is the mean matter density. *In words:* $\delta = 0$ is perfectly smooth, $\delta = -1$ is empty (a void), and $\delta \gtrsim 1$ means the region has broken away from the expansion and is collapsing. The CMB tells us $\delta \sim 10^{-5}$ at recombination; a galaxy today has $\delta \sim 10^{5}$.

**The growth equation.** For a perturbation larger than the Jeans length (so pressure is negligible) in an expanding universe, linear theory gives
$$\ddot\delta + 2H\dot\delta = 4\pi G\bar\rho\,\delta,$$
where $H = \dot a/a$ is the Hubble rate and $a(t)$ is the scale factor (from the [Friedmann equations](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md)). *In words:* the right side is gravity driving growth; the middle term $2H\dot\delta$ is **Hubble friction** — the expansion acting like a drag that bleeds energy out of the collapse. Set $H = 0$ and you recover the static Jeans problem of [3.1](#/lesson/astrophysics/03-01-star-formation-jeans.md), whose solution is exponential, $\delta \propto e^{t/\tau}$ with $\tau = (4\pi G\bar\rho)^{-1/2}$ — the free-fall runaway. The friction term is what tames it.

**Growth during matter domination.** In a flat matter-dominated universe $a \propto t^{2/3}$, $H = 2/3t$, and $\bar\rho = 1/(6\pi G t^2)$. Substituting a power law $\delta \propto t^{p}$ (worked below) gives two modes:
$$\delta_{+} \propto t^{2/3} \propto a \qquad(\text{growing}), \qquad \delta_{-} \propto t^{-1}\quad(\text{decaying}).$$
The one that matters is
$$\boxed{\;\delta \propto a\;}$$
*In words:* overdensities grow only **algebraically** — in lockstep with the scale factor. Double the size of the universe and you double the contrast; that is all expansion allows. This is the central fact of structure formation, and it is far weaker than exponential growth. Between recombination ($a \approx 1/1100$) and today ($a=1$), perturbations grow by a factor of only $\sim 1100$ — a hard ceiling that the numbers will have to fit under.

**Why baryons need dark matter.** The Jeans criterion still governs *what* can collapse, but the sound speed sets the bar. Before recombination the baryons share the photons' pressure, so their sound speed is enormous, $c_s \approx c/\sqrt{3}$; the corresponding Jeans mass exceeds anything in the universe, and baryon perturbations don't grow — they **oscillate** (those are the acoustic peaks). Dark matter is pressureless: no Jeans barrier, so it starts growing as soon as matter dominates over radiation, at $z_{\rm eq}\approx 3400$. By recombination the dark-matter contrast has reached $\delta_{\rm dm}\sim 10^{-3}$, while the baryons are still stuck at $\delta_b \sim 10^{-5}$. After recombination the baryon sound speed collapses to a few km/s, the baryon Jeans mass plummets, and baryons pour into the dark-matter wells — catching up to $\delta_{\rm dm}$ within a few expansion times. Dark matter built the scaffolding; baryons are the decoration.

**Cold vs hot dark matter.** *Cold* means the particles are slow (heavy, non-relativistic early on); *hot* means fast (light, relativistic — e.g. light neutrinos). A fast particle **free-streams**: it flies out of any small overdensity before it can collapse, smearing it flat. Hot dark matter therefore erases all structure below its free-streaming scale — for eV-mass neutrinos that scale encloses $\sim 10^{15}\,M_\odot$, a supercluster. It would build only the biggest structures first, which then fragment into galaxies (**top-down**). Cold dark matter free-streams negligibly, preserves small-scale bumps, so tiny halos form first and merge into bigger ones (**bottom-up**, hierarchical). Observations — galaxies already in place at $z>6$, older than the clusters that contain them, plus small-scale power in the Lyman-$\alpha$ forest — decisively favor bottom-up. **Dark matter is cold** (the "C" in $\Lambda$CDM).

**The power spectrum.** All of this is packaged statistically in the **matter power spectrum** $P(k) = \langle |\delta_k|^2\rangle$, the variance of the density field as a function of scale $k$ (small $k$ = large scales). Inflation predicts a nearly scale-invariant primordial $P(k)\propto k^{\,n_s}$ with $n_s\approx 0.96$; gravity and the radiation era then bend it, producing a turnover at the scale that entered the horizon at matter–radiation equality. The same $P(k)$ is measured two ways — in the CMB acoustic peaks at $z=1100$ and in galaxy redshift surveys today (including the baryon-acoustic-oscillation "standard ruler") — and the two agree, pinning down $\Omega_m$, $\Omega_b$, and the rest. That concordance is the quantitative triumph tying the [CMB](#/lesson/astrophysics/06-03-cosmic-microwave-background.md), [large-scale structure](#/lesson/astrophysics/05-05-clusters-large-scale-structure.md), and cosmological parameters into one story.

## Picture

![Left: dark matter digs potential wells first while radiation pressure keeps baryons smooth, then baryons fall in after recombination. Right: cold dark matter yields a finely structured cosmic web (bottom-up), while hot dark matter's free-streaming erases small scales, leaving only huge smooth blobs (top-down, ruled out).](assets/06-04-fig1.svg)

The left column is the timeline that makes galaxies possible: dark matter's well deepens ($\delta\propto a$) through recombination while baryons are held smooth by radiation pressure, and only afterward do baryons fall into the ready-made well. The right column is why the dark matter must be *cold*: free-streaming would smear out exactly the small-scale structure the real universe is full of.

## Worked examples

**Example 1 (mechanical — solving the growth equation).** Take the matter-dominated growth equation and plug in the background: $\bar\rho = 1/(6\pi G t^2)$ gives $4\pi G\bar\rho = 2/(3t^2)$, and $2H = 4/(3t)$. So
$$\ddot\delta + \frac{4}{3t}\dot\delta - \frac{2}{3t^2}\delta = 0.$$
Try $\delta = t^{p}$: $\dot\delta = p\,t^{p-1}$, $\ddot\delta = p(p-1)t^{p-2}$. Every term carries $t^{p-2}$, leaving the indicial equation
$$p(p-1) + \frac{4}{3}p - \frac{2}{3} = 0 \;\Longrightarrow\; 3p^2 + p - 2 = 0 \;\Longrightarrow\; (3p-2)(p+1)=0,$$
so $p = \tfrac{2}{3}$ or $p=-1$. Since $a\propto t^{2/3}$, the growing mode is $\delta \propto t^{2/3}\propto a$; the other, $\delta\propto t^{-1}$, decays away. Compare the static case ($H=0$): $\ddot\delta = 4\pi G\bar\rho\,\delta$ has solution $\delta \propto e^{t/\tau}$. **Hubble friction has demoted an exponential to a power law** — the single most important effect in structure formation.

**Example 2 (why you'd care — the dark-matter head start, by the numbers).** Suppose there were *no* dark matter, so nothing can grow until baryons decouple at $z\approx 1100$ with $\delta_b \sim 10^{-5}$. With $\delta\propto a$, by today they reach
$$\delta_{\rm today} \sim 10^{-5}\times(1+z) = 10^{-5}\times 1100 \approx 10^{-2}.$$
Still smooth — no collapse, no galaxies, no us. Now restore dark matter. It decoupled from radiation and began growing at $z_{\rm eq}\approx 3400$, reaching $\delta_{\rm dm}\sim 10^{-3}$ by recombination. From there,
$$\delta_{\rm today} \sim 10^{-3}\times 1100 \approx 1 \;\Rightarrow\; \text{collapse, just in time.}$$
The factor of 100 between $10^{-5}$ and $10^{-3}$ — dark matter's head start — is the difference between an empty universe and a full one. (Dark energy's late takeover, [6.5](#/lesson/astrophysics/06-05-dark-energy-acceleration.md), slightly *suppresses* growth after $z\sim 0.3$, tightening the race further.)

## Watch out

- You might think $\delta \propto a$ *is* collapse. It's only **linear** growth — the gentle first act. Real collapse begins when $\delta\sim 1$, where linear theory breaks down and the region turns around, virializes, and settles as a halo — back to the virial theorem of [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md), not to $\delta\propto a$.
- You might think expansion *stops* growth. It doesn't stop it, it **slows** it — from the exponential of the static Jeans collapse ([3.1](#/lesson/astrophysics/03-01-star-formation-jeans.md)) to a mere power law. That slowdown is exactly why cosmic timing is so tight and why dark matter's early start is decisive.
- You might think dark matter is just "extra gravity you can fold into the baryons." It's not interchangeable: baryons were *physically forbidden* to grow before recombination by radiation pressure. Remove dark matter and you don't just lose mass, you lose the head start — the timeline fails outright.
- "Hot" and "cold" dark matter refer to particle **speed** (free-streaming length), not to any gas temperature. Cold = slow = small-scale structure survives.

## One-liner

> Structure grew by gravitational instability in a losing race against expansion — only $\delta\propto a$, a factor of $\sim\!1100$ since recombination — so galaxies exist only because cold dark matter, immune to radiation pressure, dug the wells early and let the baryons fall in.

## Problems

**P1 (🟢)** In a matter-dominated universe perturbations grow as $\delta\propto a = 1/(1+z)$. (a) By what factor does a perturbation grow between recombination ($z\approx 1100$) and today ($z=0$)? (b) Starting from the CMB level $\delta\sim 10^{-5}$, what contrast does it reach today — is that enough to collapse ($\delta\sim 1$)? (c) What starting amplitude at recombination is needed to *just barely* reach $\delta\sim 1$, and which component of the universe actually had it?

**P2 (🟡)** Explain, without heavy algebra, why a universe made only of baryons (which cannot begin clumping until $z\approx 1100$) would fail to form galaxies by now, whereas adding dark matter fixes it. Your answer should use two facts: the $\delta\propto a$ growth ceiling, and *why* baryons — but not dark matter — are held smooth before recombination.

**P3 (🔴, optional)** Cold vs hot dark matter via free-streaming. (a) Explain physically why a fast-moving ("hot") dark-matter particle erases overdensities smaller than its free-streaming length. (b) For light neutrinos the free-streaming scale encloses $\sim 10^{15}\,M_\odot$; a galaxy is $\sim 10^{11}$–$10^{12}\,M_\odot$. What does this imply about the *order* in which structures form with hot dark matter (top-down vs bottom-up)? (c) Which observation of the real universe rules that out and points to cold dark matter?

<details>
<summary>Solutions</summary>

**P1** (a) $\delta\propto a$ and $a = 1/(1+z)$, so the growth factor is
$$\frac{a_0}{a_{\rm rec}} = \frac{1+z_{\rm rec}}{1+0} = 1+1100 \approx 1.1\times 10^{3}.$$
(b) $\delta_{\rm today} \sim 10^{-5}\times 1100 \approx 1.1\times 10^{-2} \approx 10^{-2}$. That is **not** enough — it's still a smooth universe, short of collapse by a factor of $\sim 100$. (c) To reach $\delta\sim 1$ you need
$$\delta_{\rm rec} \sim \frac{1}{1100} \approx 10^{-3}.$$
The photons and baryons only had $\sim 10^{-5}$ (that's the measured $\Delta T/T$). The component that had already grown to $\sim 10^{-3}$ by recombination is the **dark matter**, which started collapsing at $z_{\rm eq}\approx 3400$. So the "just barely enough" story works only for dark matter's head-start amplitude — the quantitative case for its existence.

**P2** Two ingredients. (i) *The growth ceiling:* since $\delta\propto a$, whatever amplitude a perturbation has at recombination grows by at most $\sim(1+z_{\rm rec})\approx 1100$ by today. To end at $\delta\sim 1$ you must *start* at $\sim 10^{-3}$. (ii) *Why baryons fall short:* before recombination baryons are tightly coupled to photons, and radiation pressure (sound speed $c_s\approx c/\sqrt{3}$) gives them a Jeans mass larger than any structure — so their perturbations oscillate as sound waves rather than growing, and they emerge at recombination stuck at the photons' $\delta\sim 10^{-5}$. Grown by 1100, that's only $\sim 10^{-2}$: no galaxies. Dark matter feels no radiation pressure, so it is free to grow from $z_{\rm eq}\approx 3400$ onward and reaches $\sim 10^{-3}$ by recombination; $\times 1100 \approx 1$. It builds deep potential wells while baryons are still smooth, and after recombination the pressure-freed baryons fall straight into those ready-made wells and catch up. No dark matter → no head start → not enough cosmic time → no galaxies.

**P3** (a) A perturbation is a shallow potential well. A slow particle is trapped and helps deepen it; a *fast* particle simply flies across and out before the well can grow — it "free-streams" a distance $\sim v\,t$ per expansion time. Any overdensity smaller than that streaming length loses its particles as fast as it gathers them, so it is smeared back to smoothness. Hot (relativistic, $v\sim c$) dark matter thus wipes out all structure below its large free-streaming scale. (b) If the smallest surviving lump already encloses $\sim 10^{15}\,M_\odot$ — a supercluster — while galaxies are $10^{11}$–$10^{12}\,M_\odot$, then galaxy-scale perturbations are erased and cannot collapse on their own. The first objects to form are the huge supercluster-scale "pancakes," which must later fragment into galaxies: **top-down** formation. (c) Observation kills it: we see mature galaxies and quasars already at $z>6$, *older* than the clusters they now sit in, and small-scale power is directly measured in the Lyman-$\alpha$ forest and in the abundance of small satellite halos. Small things formed first and merged upward — **bottom-up**, hierarchical — which requires that small-scale perturbations survived. Only slow-moving **cold** dark matter preserves them. Hence $\Lambda$CDM.

</details>

## Flashback

**From Lesson 3.1 (Star formation and the Jeans instability):** The free-fall (collapse) time of a region of density $\rho$ is $t_{\rm ff} = \sqrt{3\pi/(32 G\rho)}$. Evaluate it for the *mean matter density of the universe today*, $\rho_m \approx \Omega_m\,\rho_{\rm crit}$ with $\Omega_m\approx 0.3$ and $\rho_{\rm crit}\approx 9.2\times10^{-27}\ \mathrm{kg/m^3}$, and compare to the Hubble time $t_H = 1/H_0 \approx 14$ Gyr. What does the comparison say about which regions can have collapsed by now?

<details>
<summary>Solution</summary>

$\rho_m = 0.3\times 9.2\times10^{-27} \approx 2.8\times10^{-27}\ \mathrm{kg/m^3}$. Then
$$32\,G\rho_m = 32(6.67\times10^{-11})(2.8\times10^{-27}) \approx 5.9\times10^{-36}\ \mathrm{s^{-2}},$$
$$t_{\rm ff} = \sqrt{\frac{3\pi}{5.9\times10^{-36}}} = \sqrt{1.6\times10^{36}} \approx 1.3\times10^{18}\ \mathrm{s} \approx 40\ \text{Gyr}.$$
That is about **three times the Hubble time** ($\approx 14$ Gyr). So a region sitting at exactly the cosmic mean density could not have collapsed yet — there hasn't been time. Only regions denser than average (which have a shorter $t_{\rm ff}$, and a head start in $\delta$) have turned around and formed halos. This is the "rich get richer" of gravitational instability read off a stopwatch, and one more way of seeing why the timing is tight: at mean density the clock runs slower than the age of the universe. ✓

</details>

## Connections

- **Backward:** this is the [3.1](#/lesson/astrophysics/03-01-star-formation-jeans.md) Jeans/free-fall competition set in an expanding background — the same gravity-vs-pressure fight, but now with Hubble friction turning exponential collapse into $\delta\propto a$. The endpoint of collapse ($\delta\gtrsim1$, virialization) hands off to the virial theorem of [1.4](#/lesson/astrophysics/01-04-gravitational-dynamics-virial.md), and the dark-matter halos built here are the ones whose flat rotation curves you diagnosed dynamically in [5.3](#/lesson/astrophysics/05-03-galaxies-dark-matter.md). The initial $\delta\sim10^{-5}$ seeds are literally the [CMB anisotropies](#/lesson/astrophysics/06-03-cosmic-microwave-background.md) of 6.3.
- **Forward:** the halos assembled here are the sites where gas cools and lights up as galaxies ([5.4](#/lesson/astrophysics/05-04-galaxy-formation-agn.md)), and the growth rate of structure is itself a probe of [dark energy](#/lesson/astrophysics/06-05-dark-energy-acceleration.md) (6.5), which slows it. The whole picture — cold dark matter seeding hierarchical structure, matched to the CMB power spectrum — is the "CDM" half of the [concordance $\Lambda$CDM model](#/lesson/astrophysics/06-06-concordance-model-frontiers.md) (6.6).
- **Sideways (relativity / stat-mech):** the growth equation lives on the [FLRW background](#/course/relativity) whose $a(t)$ comes from the Friedmann equations; the radiation pressure that forbade early baryon collapse is the [photon gas](#/lesson/stat-mech/04-03-photon-gas-blackbody.md) of `stat-mech`, and "hot vs cold" is exactly a statement about whether the dark-matter particles were relativistic — a Fermi/Bose-gas question about when $k_BT$ fell below $mc^2$.

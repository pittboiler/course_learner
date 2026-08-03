# Astrophysics · Lesson 6.5: Dark energy and the accelerating universe

> ⏱ ~15 min · Module 6: Cosmology · Builds on: [6.1 The expanding universe & Friedmann equations](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md), [6.3 The cosmic microwave background](#/lesson/astrophysics/06-03-cosmic-microwave-background.md), [3.4 Stellar death & Type Ia supernovae](#/lesson/astrophysics/03-04-stellar-death-supernovae.md) · Unlocks: the concordance model & frontiers (6.6)

## Why this matters

For most of the 20th century the only question in cosmology seemed to be *how fast is gravity slowing the expansion down?* Everyone knew the answer had to be "slowing" — gravity pulls, and there's nothing in the universe but matter to pull. Then in 1998 two teams pointed at the faintest, most distant Type Ia supernovae they could find, expecting to measure the deceleration, and found the opposite: **the expansion is speeding up.** That single result forced a component into the cosmic inventory that behaves like nothing in a lab — it has *negative pressure*, it doesn't dilute as the universe grows, and it now makes up about 68% of everything. It also handed physics its worst quantitative embarrassment. This is the lesson where the standard model of cosmology gets its dominant, and least understood, ingredient.

## The idea

Start with the observation, because the whole edifice rests on it. A Type Ia supernova is a **standardizable candle** ([3.4](#/lesson/astrophysics/03-04-stellar-death-supernovae.md)): every one detonates a white dwarf at essentially the Chandrasekhar mass, so they all peak at nearly the same intrinsic luminosity. Measure how *faint* one looks, and the inverse-square law tells you how *far* it is. Measure its redshift, and you know how much the universe has expanded since the light left. Plot distance against redshift for hundreds of them and you've drawn the expansion history itself.

Here's what shocked everyone. In a universe decelerating under its own gravity, a supernova at a given redshift should sit at a certain distance. The 1998 supernovae came in **fainter than that** — about 0.25 magnitudes fainter, roughly 12% farther away than a decelerating universe allows. Farther means the light took longer to arrive, which means the universe expanded *more* between then and now than deceleration would give. The expansion isn't coasting to a stop; it's on the gas. (Perlmutter, Schmidt, and Riess shared the 2011 Nobel Prize for it.)

Now the physics. What could make expansion accelerate? Newtonian gravity says everything with mass pulls, so more stuff means more deceleration. The escape is that in general relativity, **pressure gravitates too** — and a component with sufficiently *negative* pressure produces repulsive gravity on cosmic scales. The leading candidate is the simplest thing imaginable: the energy of empty space itself, a **cosmological constant** $\Lambda$, whose density stays fixed no matter how much the universe expands. Matter thins out as the cosmos grows; the energy of the vacuum does not. So even if $\Lambda$ starts negligible, it is destined to win.

## The formal version

**The acceleration equation.** Alongside the Friedmann equation from [6.1](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md), Einstein's equations give a second relation for the scale factor $a(t)$ (the size of the universe relative to today, with $a=1$ now):

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3p}{c^2}\right),$$

where $\rho$ is the total mass-energy density (energy density divided by $c^2$), $p$ is the total pressure, $G=6.67\times10^{-11}\ \mathrm{N\,m^2/kg^2}$, and $c$ is the speed of light. **In words: what decelerates the expansion is not just density but density *plus three times pressure* — so pressure, like mass, gravitates.**

The sign is everything. To get $\ddot a > 0$ (acceleration) you need

$$\rho + \frac{3p}{c^2} < 0 \quad\Longleftrightarrow\quad p < -\frac{\rho c^2}{3}.$$

**In words: any component whose pressure is negative enough — more negative than $-\tfrac{1}{3}$ of its energy density — pushes the universe apart.** Ordinary matter ($p\approx 0$) and radiation ($p=\tfrac13\rho c^2>0$) both decelerate. You need something exotic.

**Equation of state.** Package a component's pressure–density relation as

$$w \equiv \frac{p}{\rho c^2},$$

the **equation-of-state parameter**. Matter (dust) has $w=0$; radiation has $w=+\tfrac13$; acceleration requires $w<-\tfrac13$. A **cosmological constant** — vacuum energy — has

$$w = -1, \qquad p = -\rho c^2.$$

**How each component dilutes.** The energy-conservation (fluid) equation from [6.1](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md), $\dot\rho + 3\frac{\dot a}{a}\!\left(\rho+\frac{p}{c^2}\right)=0$, with $p=w\rho c^2$ integrates to

$$\rho \propto a^{-3(1+w)}.$$

**In words: how a component thins out as the universe grows is fixed entirely by its $w$.** Read off the three cases:

| Component | $w$ | scaling | behavior as $a\to\infty$ |
|---|---|---|---|
| Matter | $0$ | $\rho_m \propto a^{-3}$ | dilutes (volume grows) |
| Radiation | $+\tfrac13$ | $\rho_r \propto a^{-4}$ | dilutes faster (also redshifts) |
| $\Lambda$ / dark energy | $-1$ | $\rho_\Lambda \propto a^{0} = \text{const}$ | **never dilutes** |

The $w=-1$ row is the punchline: put $w=-1$ into $-3(1+w)=0$, and the density is **constant**. As new space appears, it comes pre-filled with vacuum energy at the same density — the hallmark of a cosmological constant.

**Why $\Lambda$ comes to dominate — and when.** Matter falls as $a^{-3}$ while $\rho_\Lambda$ holds fixed, so their ratio

$$\frac{\rho_\Lambda}{\rho_m} \propto a^{3}$$

grows without bound. Whatever tiny value $\Lambda$ starts with, it eventually overtakes matter. Feeding matter ($p\approx0$) and $\Lambda$ ($p=-\rho_\Lambda c^2$) into the acceleration equation, the bracket is $\rho_m - 2\rho_\Lambda$, so **the expansion switches from decelerating to accelerating when $\rho_m = 2\rho_\Lambda$.** For the measured densities that onset is around redshift $z\approx0.6$–$0.7$ — a few billion years ago. (Note the subtlety: acceleration *begins* at $z\sim0.6$, while the two densities become *equal* only later, at $z\sim0.3$ — dark energy tips the acceleration before it even dominates the budget.)

**The concordance budget.** Combining the supernova distances, the flatness measured from the CMB acoustic peaks ([6.3](#/lesson/astrophysics/06-03-cosmic-microwave-background.md)), and galaxy clustering yields a remarkably consistent inventory of the present universe:

$$\Omega_\Lambda \approx 0.68,\quad \Omega_{\rm DM}\approx 0.27,\quad \Omega_{\rm baryon}\approx 0.05,\qquad \Omega_{\rm total}\approx 1.$$

Here $\Omega_i = \rho_i/\rho_{\rm crit}$ is each component's density in units of the critical density from [6.1](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md). **In words: the universe is ~68% dark energy, ~27% dark matter, ~5% ordinary atoms — and it is spatially flat, the three numbers summing to one.** Everything you have ever seen or touched is the 5%. Measurements pin the dark-energy equation of state at $w=-1.03\pm0.03$: fully consistent with a pure cosmological constant.

**Two deep problems.** $\Lambda$ works spectacularly as a fit and fails spectacularly as physics:

- **The cosmological constant problem.** Quantum field theory says empty space is full of zero-point energy. Summing those vacuum fluctuations up to the Planck scale predicts a vacuum energy density about **$10^{120}$ times larger** than what we observe — often called the worst quantitative prediction in the history of physics. Something must cancel it to 120 decimal places and then stop, and no one knows what.
- **The coincidence problem.** Because $\rho_\Lambda/\rho_m\propto a^3$ sweeps across an enormous range over cosmic history, the epoch when $\rho_\Lambda \sim \rho_m$ is a fleeting instant on a logarithmic timeline. Yet we happen to live essentially *at* that crossover. Why now?

## Picture

![Left: a Type Ia supernova Hubble diagram — distant supernovae (data points) fall fainter than a decelerating universe predicts (dashed curve) and track the accelerating LambdaCDM curve (solid). Right: the cosmic energy budget as a pie chart, 68% dark energy, 27% dark matter, 5% ordinary matter, plus a scale-factor curve that decelerates and then turns upward.](assets/06-05-fig1.svg)

## Worked examples

**Example 1 (the discovery, in one number).** The supernovae came in about $\Delta m \approx 0.25$ magnitudes fainter than a decelerating (matter-only) universe predicts. How much farther away is that?

Magnitudes are logarithmic in flux, and flux goes as $1/d^2$, so a difference in distance modulus is $\Delta m = 5\log_{10}(d_{\rm obs}/d_{\rm pred})$. Solve:

$$\log_{10}\!\frac{d_{\rm obs}}{d_{\rm pred}} = \frac{0.25}{5}=0.05 \;\Rightarrow\; \frac{d_{\rm obs}}{d_{\rm pred}} = 10^{0.05} \approx 1.12.$$

The supernovae are ~12% farther than deceleration allows. A 12% distance discrepancy, measured on candles a few billion light-years away, is the entire evidentiary basis for 68% of the universe — which is why the standardization of Type Ia had to be nailed down first ([3.4](#/lesson/astrophysics/03-04-stellar-death-supernovae.md)).

**Example 2 (why you'd care — the fate of a $\Lambda$-dominated universe).** Once $\Lambda$ dominates, matter and radiation are negligible and the Friedmann equation for a flat universe becomes

$$\left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho_\Lambda = \text{const} \equiv H_\Lambda^2 \;\Rightarrow\; a(t) \propto e^{H_\Lambda t}.$$

**In words: constant density forces a constant Hubble rate, and a constant Hubble rate is exponential growth** — this is **de Sitter** expansion, the far-future state of our universe (the fate traced in Boss Problem 6). With $H_\Lambda = H_0\sqrt{\Omega_\Lambda}\approx 70\sqrt{0.68}\approx 58\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$, the expansion doubles the universe's size every $t_2 = \ln2/H_\Lambda \approx 12$ billion years, forever. Distant galaxies redshift away and cross our horizon; eventually everything beyond the Local Group is gone from view, leaving a cold, empty, exponentially stretching space. The universe does not end in a crunch — it ends in isolation.

## Watch out

- You might think negative pressure means "suction pulling things in." On cosmic scales the opposite: in the acceleration equation it's the combination $\rho + 3p/c^2$ that sources gravity, and a large negative $p$ flips that sum negative, making gravity *repulsive*. Pressure gravitates; negative pressure anti-gravitates.
- You might think dark energy and dark matter are two names for one mystery. They are opposites. Dark matter clumps, has $w\approx0$, dilutes as $a^{-3}$, and *helps* gravity build structure ([6.4](#/lesson/astrophysics/06-04-structure-formation-dark-matter.md)); dark energy is smooth, has $w\approx-1$, never dilutes, and *pulls structure apart*.
- You might think the supernovae were literally brighter or dimmer intrinsically. No — the standardized peak luminosity is the same; they look fainter only because they are *farther* than expected. The physics lives entirely in the distance–redshift relation, not in the candle.
- You might read $\Omega_{\rm total}\approx1$ as "we added up the matter and it came to critical." It didn't — matter alone is only $\Omega_m\approx0.32$. Flatness closes *because* dark energy supplies the missing $\sim0.68$; that agreement between an independent CMB flatness measurement and the supernova result is the concordance.

## One-liner

> Distant supernovae look too faint because the expansion is accelerating, driven by a vacuum energy with $w\approx-1$ whose constant density (unlike matter's $a^{-3}$ dilution) inevitably comes to dominate — 68% of the universe, and the worst-predicted number in physics.

## Problems

**P1 (🟢)** Use the flat-universe budget $\Omega_\Lambda\approx0.68$, $\Omega_{\rm DM}\approx0.27$, $\Omega_{\rm baryon}\approx0.05$.
(a) Verify $\Omega_{\rm total}\approx1$ and give the total matter fraction $\Omega_m$.
(b) Matter density scales as $\rho_m\propto a^{-3}$ while $\rho_\Lambda$ is constant. Find the scale factor $a$ and redshift $z$ of matter–$\Lambda$ *equality* by setting $\Omega_m\,a^{-3}=\Omega_\Lambda$. (Recall $a=1/(1+z)$.)

**P2 (🟡)** Starting from the acceleration equation with a single component of equation of state $p=w\rho c^2$:
(a) Show that $\ddot a>0$ requires $w<-\tfrac13$.
(b) Using the fluid equation $\dot\rho + 3\frac{\dot a}{a}(\rho+p/c^2)=0$, show that $\rho\propto a^{-3(1+w)}$, and confirm that $w=-1$ gives constant energy density.

**P3 (🔴, optional)** Argue that a cosmological constant with *any* positive density $\rho_\Lambda$, however small, must eventually dominate a universe that also contains matter ($\rho_m\propto a^{-3}$) and radiation ($\rho_r\propto a^{-4}$), and describe the resulting far future. Address explicitly: (i) why the *smallness* of $\rho_\Lambda$ only delays but cannot prevent its dominance, and (ii) what the expansion history $a(t)$ looks like once $\Lambda$ has won.

<details>
<summary>Solutions</summary>

**P1** (a) $\Omega_{\rm total} = 0.68 + 0.27 + 0.05 = 1.00$. ✓ The matter fraction is dark matter plus baryons: $\Omega_m = 0.27+0.05 = 0.32$.

(b) Set $\Omega_m a^{-3} = \Omega_\Lambda$:

$$a^{-3} = \frac{\Omega_\Lambda}{\Omega_m} = \frac{0.68}{0.32} = 2.125 \;\Rightarrow\; a^3 = \frac{1}{2.125}=0.4706 \;\Rightarrow\; a = 0.4706^{1/3} = 0.778.$$

Then $z = \tfrac{1}{a}-1 = \tfrac{1}{0.778}-1 = 1.286-1 \approx 0.29$. So the densities were equal at $z\approx0.3$ — a few billion years ago. (The onset of *acceleration*, set by $\rho_m = 2\rho_\Lambda$, comes earlier: $a^3 = \Omega_m/2\Omega_\Lambda = 0.235$, $a=0.617$, $z\approx0.6$. Acceleration switches on before dark energy actually dominates the budget.)

**P2** (a) The acceleration equation is $\dfrac{\ddot a}{a} = -\dfrac{4\pi G}{3}\left(\rho + \dfrac{3p}{c^2}\right)$. With $p=w\rho c^2$,

$$\rho + \frac{3p}{c^2} = \rho + 3w\rho = \rho(1+3w).$$

Since $\rho>0$ and $G>0$, the sign of $\ddot a$ is the sign of $-(1+3w)$. Thus $\ddot a>0 \iff 1+3w<0 \iff w<-\tfrac13$. ∎

(b) With $p=w\rho c^2$, the fluid equation becomes

$$\dot\rho = -3\frac{\dot a}{a}\big(\rho + w\rho\big) = -3(1+w)\,\rho\,\frac{\dot a}{a}.$$

Separate variables: $\dfrac{d\rho}{\rho} = -3(1+w)\dfrac{da}{a}$. Integrate:

$$\ln\rho = -3(1+w)\ln a + \text{const} \;\Rightarrow\; \rho \propto a^{-3(1+w)}.$$

For $w=-1$: the exponent is $-3(1-1)=0$, so $\rho\propto a^0 = \text{const}$ — the vacuum energy density is unchanged as the universe expands. ∎

**P3** (i) The three densities evolve as $\rho_r\propto a^{-4}$, $\rho_m\propto a^{-3}$, and $\rho_\Lambda = \text{const}$. As $a$ grows, both $\rho_r$ and $\rho_m$ head to zero, while $\rho_\Lambda$ stays put. Form the ratios: $\rho_\Lambda/\rho_m \propto a^{3}$ and $\rho_\Lambda/\rho_r\propto a^{4}$, each diverging as $a\to\infty$. A *smaller* $\rho_\Lambda$ only means the crossover happens at a larger $a$ (later time) — it rescales *when*, never *whether*. Because matter and radiation dilute toward zero and $\Lambda$ does not, dominance is inevitable for any $\rho_\Lambda>0$; smallness buys delay, not escape.

(ii) Once $\Lambda$ dominates, the flat Friedmann equation reads $(\dot a/a)^2 = \tfrac{8\pi G}{3}\rho_\Lambda = H_\Lambda^2 = \text{const}$, giving $a(t)\propto e^{H_\Lambda t}$ — eternal exponential (de Sitter) expansion. The Hubble rate asymptotes to a constant, structures beyond the gravitationally bound Local Group accelerate away and redshift out of sight past a cosmic horizon, and the observable universe empties into a cold, dark, exponentially stretching de Sitter space. This is the fate assembled in Boss Problem 6: no Big Crunch — a Big Freeze into isolation.

</details>

## Flashback

**From Lesson 1.1 (Scales, luminosity, and the distance ladder):** Two identical Type Ia supernovae are observed. Supernova B appears $0.5$ magnitudes fainter than supernova A. Using the fact that a magnitude difference relates to fluxes by $\Delta m = -2.5\log_{10}(F_B/F_A)$ and that flux follows the inverse-square law $F\propto 1/d^2$, how many times farther away is B than A?

<details>
<summary>Solution</summary>

Fainter means smaller flux, so $\Delta m = m_B - m_A = +0.5$. Invert the magnitude relation:

$$\frac{F_B}{F_A} = 10^{-\Delta m/2.5} = 10^{-0.5/2.5} = 10^{-0.2} = 0.631.$$

By the inverse-square law $F\propto d^{-2}$, so $\dfrac{F_B}{F_A} = \left(\dfrac{d_A}{d_B}\right)^2$, giving

$$\frac{d_B}{d_A} = \sqrt{\frac{F_A}{F_B}} = \sqrt{\frac{1}{0.631}} = \sqrt{1.585} \approx 1.26.$$

B is about 1.26 times farther. (Equivalently: every $5$ magnitudes is a factor of $10$ in distance, so $0.5$ mag is a factor $10^{0.1}\approx1.26$.) This is exactly the reasoning the 1998 teams ran in reverse — "fainter than expected" was read directly as "farther than a decelerating universe allows."

</details>

## Connections

- **Backward:** the whole result stands on Type Ia being standardizable candles ([3.4](#/lesson/astrophysics/03-04-stellar-death-supernovae.md)) at the top of the distance ladder ([1.1](#/lesson/astrophysics/01-01-scales-luminosity-distance-ladder.md)), and on the density scaling $\rho\propto a^{-3(1+w)}$ from the Friedmann framework ([6.1](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md)). The flatness $\Omega_{\rm total}\approx1$ that makes the budget close is measured independently from the CMB acoustic peaks ([6.3](#/lesson/astrophysics/06-03-cosmic-microwave-background.md)).
- **Forward:** $\Lambda$ plus cold dark matter is the concordance **$\Lambda$CDM** model assembled in [6.6](#/lesson/astrophysics/06-06-concordance-model-frontiers.md); the cosmological-constant and coincidence problems are the open frontiers that lesson confronts head-on. Dark energy also caps the growth of structure — once it dominates, the clustering of [6.4](#/lesson/astrophysics/06-04-structure-formation-dark-matter.md) freezes out.
- **Sideways (relativity):** the acceleration equation is the second Friedmann equation from the FLRW cosmology of general relativity — the same framework, not yet built as its own course, that gives the Schwarzschild and TOV structure used in Module 4. That pressure appears alongside density as a source of gravity is a purely relativistic effect with no Newtonian analog.
- **Sideways (stat-mech / QFT):** the cosmological constant problem is a collision between cosmology and the zero-point energy of quantum fields — the same vacuum fluctuations that, summed over modes, give the photon-gas and blackbody physics of [stat-mech 4.3](#/lesson/stat-mech/04-03-photon-gas-blackbody.md), here producing a prediction wrong by $10^{120}$.

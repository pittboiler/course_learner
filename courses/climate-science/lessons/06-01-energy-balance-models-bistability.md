# Climate Physics · Lesson 6.1: Energy-balance models and bistability

> ⏱ ~15 min · Module 6: Models, deep time and the long view · Builds on: [5.6](05-06-tipping-elements-thresholds.md), [2.3](02-03-surface-albedo-cryosphere-feedback.md), [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) · Unlocks: [6.2](06-02-model-hierarchy.md), [6.4](06-04-deep-time-slow-thermostat.md)

## Why this matters

Take the simplest possible climate model — one equation, one variable — put in an albedo that depends on temperature, and something remarkable happens: **the equation has three solutions.** Two are stable and one is not. That means the same planet, with the same sunlight and the same atmosphere, has more than one climate available to it. This is not a curiosity: it is why Snowball Earth happened, twice, and why escaping it required $\mathrm{CO_2}$ concentrations of order 0.1 bar. It is also the cleanest demonstration in this course that a model with almost nothing in it can predict something a model with everything in it would not obviously reveal.

## The idea

**Balance in, balance out.** Absorbed sunlight is $S(1-\alpha)/4$; emitted infrared is some increasing function of temperature. Equate them and you have an equilibrium. With $\alpha$ constant there is exactly one, and it is stable.

**Now let the albedo depend on temperature.** Cold planet, ice-covered, bright: $\alpha \approx 0.6$. Warm planet, ice-free, dark: $\alpha \approx 0.3$. In between, $\alpha$ falls with temperature. The absorbed-sunlight curve is no longer a horizontal line — it *rises* with $T$ over the intermediate range, and it can rise faster than the emitted infrared does.

**Where it rises faster, there is no restoring force.** That is the runaway of [2.1](02-01-feedbacks-gain-factor.md): $\lambda < 0$. So the intermediate equilibrium is unstable, and the system is pushed to one of the two stable ones on either side. Three intersections; two states.

**Vary the sunlight and you get a hysteresis loop.** Reduce $S$ and the warm branch shortens until, at about 5 percent below today's value, it disappears — a fold, and the planet falls to the snowball state. Now try to get back: the snowball branch survives until $S$ is *34 percent above* today's value. The loop is enormous.

**Which is why escaping a snowball took $\mathrm{CO_2}$, not sunlight.** Ice covers the continents, so silicate weathering — the sink for volcanic $\mathrm{CO_2}$ ([6.4](06-04-deep-time-slow-thermostat.md)) — stops. Volcanoes keep degassing. Over millions of years $\mathrm{CO_2}$ builds to of order 0.1 bar, which is finally enough forcing to reach the far fold, and the planet deglaciates catastrophically.

## The formal version

**The model.** Zero-dimensional, one prognostic variable:

$$C\frac{dT}{dt} = \underbrace{\frac{S\left(1-\alpha(T)\right)}{4}}_{\text{absorbed}} - \underbrace{\left(A + BT\right)}_{\text{emitted}}.$$

The linear outgoing-longwave parameterization $A + BT$ (with $T$ in °C) is Budyko's, fitted to satellite data: $A = 204\ \mathrm{W\,m^{-2}}$, $B = 2.17\ \mathrm{W\,m^{-2}\,^\circ C^{-1}}$. *In words: it stands in for the whole greenhouse effect with two numbers, and $B$ plays the role of the feedback parameter $\lambda$ from Module 2 — note $B = 2.17$ is between the Planck value 3.2 and the full-feedback 1.3, because it includes water vapour but not clouds or ice.*

The albedo:

$$\alpha(T) = \begin{cases} 0.60 & T < -10\ ^\circ\mathrm{C} \quad\text{(ice-covered)}\\[2pt] 0.45 - 0.015\,T & -10 \le T \le +10 \\[2pt] 0.30 & T > +10\ ^\circ\mathrm{C} \quad\text{(ice-free)} \end{cases}$$

**Solving for equilibria.** Set $dT/dt = 0$ on each branch, with $S = 1361\ \mathrm{W\,m^{-2}}$ so $S/4 = 340.25$.

*Ice-free branch* ($\alpha = 0.30$):
$$340.25\times0.70 = 204 + 2.17T \quad\Longrightarrow\quad T = \frac{238.18-204}{2.17} = 15.7\ ^\circ\mathrm{C}. \quad\checkmark\ (>10)$$

*Ice-covered branch* ($\alpha = 0.60$):
$$340.25\times0.40 = 204 + 2.17T \quad\Longrightarrow\quad T = \frac{136.10-204}{2.17} = -31.3\ ^\circ\mathrm{C}. \quad\checkmark\ (<-10)$$

*Intermediate branch:*
$$340.25\left(0.55+0.015T\right) = 204+2.17T \quad\Longrightarrow\quad 187.14 + 5.104T = 204 + 2.17T,$$
$$T = \frac{16.86}{2.934} = 5.7\ ^\circ\mathrm{C}. \quad\checkmark\ (\text{in } [-10,10])$$

**Three equilibria: $+15.7$, $+5.7$ and $-31.3\ ^\circ\mathrm{C}$.** The first is close to Earth's actual 15 °C, from a model with two fitted radiation constants and a piecewise-linear albedo.

**Stability.** Linearize: perturbations grow or decay at a rate set by

$$\frac{d}{dT}\left[\frac{S(1-\alpha)}{4} - (A+BT)\right] = -\frac{S}{4}\frac{d\alpha}{dT} - B.$$

*In words: stable if the net outgoing radiation increases with temperature — which is exactly $\lambda > 0$ from [2.1](02-01-feedbacks-gain-factor.md).*

| Branch | $d\alpha/dT$ | Rate | Stability |
|---|---|---|---|
| Ice-free | 0 | $-2.17$ | **stable** |
| Ice-covered | 0 | $-2.17$ | **stable** |
| Intermediate | $-0.015$ | $+5.104 - 2.17 = +2.93$ | **unstable** |

The middle branch is unstable precisely because the albedo feedback ($5.10\ \mathrm{W\,m^{-2}\,K^{-1}}$) exceeds the radiative damping ($2.17$). **That is the runaway condition of [2.1](02-01-feedbacks-gain-factor.md), realized.** The feedback is enormous here because in this caricature the entire planet's albedo changes over a 20 °C range; the real state-dependence is the one worked out in [2.3](02-03-surface-albedo-cryosphere-feedback.md), P3.

**The bifurcation diagram.** Solve for the equilibrium temperature as a function of $S$ on each branch:

$$T_{\text{warm}}(S) = \frac{0.175S-204}{2.17}, \qquad T_{\text{snow}}(S) = \frac{0.100S-204}{2.17},$$
$$T_{\text{mid}}(S) = \frac{204-0.1375S}{0.00375S-2.17}.$$

The warm branch exists only while $T_{\text{warm}} \ge 10$:

$$S \ge \frac{204+21.7}{0.175} = 1290\ \mathrm{W\,m^{-2}} = 0.948\,S_0.$$

The snowball branch exists only while $T_{\text{snow}} \le -10$:

$$S \le \frac{204-21.7}{0.100} = 1823\ \mathrm{W\,m^{-2}} = 1.34\,S_0.$$

$$\boxed{\ \text{bistable for } 1290 \le S \le 1823\ \mathrm{W\,m^{-2}}\ }$$

*In words: reduce the sunlight by 5 percent and the warm state ceases to exist; to get back out of the snowball you need 34 percent more sunlight than today.* The hysteresis width is 533 W m⁻² — 39 percent of the present solar constant.

**Snowball Earth.** The geological record shows two intervals of near-global glaciation in the Cryogenian, around 717 and 640 Myr ago, with glacial deposits at tropical palaeolatitudes ([geology 5.2](../../geology/lessons/05-02-earth-history-hadean-proterozoic.md)). The mechanism above supplies both the entry and the exit.

*Entry.* The Sun was about 6 percent fainter then, and continental configuration (a supercontinent at low latitudes, maximizing weathering and hence drawing down $\mathrm{CO_2}$) pushed the system past the fold. The runaway is the **large ice-cap instability**: once the ice line reaches roughly 30° of latitude, where insolation is strong and the area per degree of latitude is largest, the feedback overwhelms the damping and the ice reaches the equator in a few thousand years.

*Exit.* On a frozen planet, silicate weathering — which requires liquid water and exposed rock — essentially stops, removing the $\mathrm{CO_2}$ sink. Volcanic outgassing continues at roughly $0.1\ \mathrm{PgC\,yr^{-1}}$. Over 10 to 100 Myr, $\mathrm{CO_2}$ accumulates to of order **0.1 bar** — roughly 350 times pre-industrial. That is enough forcing to reach the far fold, and the deglaciation is violent: the planet emerges into an ice-free state with a massive greenhouse, surface temperatures perhaps 50 °C, and the extreme chemical weathering that produced the "cap carbonate" layers found directly above the glacial deposits worldwide.

**Why the real Earth is harder to snowball than Budyko's is.** The model exaggerates. Full general circulation models find the fold at a lower solar constant and require more forcing to trigger, because: the ocean transports heat toward the ice line, opposing its advance; clouds over ice reduce the effective albedo contrast (a bright surface under a bright cloud gains little from further brightening); and sea ice is not uniformly bright. The **existence** of the instability is robust and confirmed in GCMs; its **location** in parameter space is not something a one-equation model can pin down. That is the general lesson about EBMs, and it leads directly to [6.2](06-02-model-hierarchy.md).

## Picture

![Bifurcation diagram of the energy-balance model: equilibrium surface temperature against solar constant. An upper blue branch, the ice-free stable state, runs from a fold at 1290 watts per square metre upward to the right, passing through today's value of 1361 at 15.7 degrees Celsius. A lower blue branch, the snowball stable state, runs from low solar constant up to a fold at 1823. A dashed grey unstable branch connects the two folds. Coral arrows show the collapse into the snowball at the lower fold and the escape at the upper fold, which requires 34 percent more sunlight than today](assets/06-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — how much forcing to escape a snowball?).** A snowball Earth sits on the ice-covered branch with $S = 1361$. Escaping requires reaching the fold. Instead of increasing $S$, increase the greenhouse effect by reducing $A$. (a) How much must $A$ fall? (b) Express as a radiative forcing. (c) Convert to a $\mathrm{CO_2}$ concentration using $\Delta F = 5.35\ln(C/C_0)$, and comment.

(a) On the ice-covered branch, $T = (0.1S - A)/B$, and escape needs $T \ge -10$:

$$\frac{136.1 - A}{2.17} \ge -10 \quad\Longrightarrow\quad A \le 136.1 + 21.7 = 157.8\ \mathrm{W\,m^{-2}}.$$

So $A$ must fall from 204 to 157.8, a reduction of $46.2\ \mathrm{W\,m^{-2}}$.

(b) A reduction in $A$ at fixed $T$ *is* a radiative forcing: $\Delta F = 46.2\ \mathrm{W\,m^{-2}}$ — more than twelve doublings of $\mathrm{CO_2}$.

(c) $$\frac{C}{C_0} = e^{46.2/5.35} = e^{8.64} = 5600, \qquad C = 5600\times280 = 1.6\times10^{6}\ \mathrm{ppm}.$$

That is 1.6 bar, and it is **too large** — the accepted figure is nearer 0.1 bar.

*The point.* The discrepancy is instructive rather than embarrassing, and it has two sources. First, the logarithmic law is badly wrong at these concentrations: $\Delta F = 5.35\ln(C/C_0)$ was fitted around 300 ppm, and at $10^5$ ppm the band has widened into its neighbours and forcing grows *faster* than logarithmically ([1.3](01-03-bands-saturation-logarithmic-forcing.md), and [2.1](02-01-feedbacks-gain-factor.md) Flashback). Using the log law therefore *overestimates* the concentration needed. Second, Budyko's $A$ and $B$ are fitted to the present climate and have no business being extrapolated 45 W m⁻² away. **Both errors are extrapolation errors, and both are of the kind a one-equation model cannot warn you about.**

**Example 2 (why you'd care — is Earth close to a fold today?).** Compute the fractional reduction in solar constant needed to snowball the present Earth, and compare with (a) the eleven-year solar cycle, (b) the faint young Sun 3.8 Gyr ago, (c) a Milankovitch-scale change in high-latitude summer insolation.

The fold is at $S = 1290$ against today's 1361: a **5.2 percent** reduction.

(a) Solar cycle: about $\pm0.04$ percent. Two orders of magnitude too small. Irrelevant.

(b) Faint young Sun: 25 percent below today ([6.4](06-04-deep-time-slow-thermostat.md)) — **five times more than enough**. Which is precisely the faint-young-Sun paradox: on this model the early Earth should have been a snowball, and the geological record says it was not.

(c) Milankovitch: changes global-mean annual insolation by well under 1 percent, but changes *high-latitude summer* insolation by up to 20 percent ([atmospheric-science 3.5](../../atmospheric-science/lessons/03-05-solar-geometry-seasons-insolation.md)). The zero-dimensional model cannot represent this at all, because it has no latitude.

*The general principle.* **The model's answer to (b) is wrong, and that is what makes it useful.** It says a planet with today's greenhouse effect and 25 percent less sunlight must be frozen; the rocks say liquid water. Something must have differed, and the only available candidate is the greenhouse — which is the whole faint-young-Sun argument, delivered by a model simple enough that no other explanation can hide in it. And its failure on (c) is equally informative: it identifies exactly what the next model up the hierarchy needs, namely latitude. That is how a hierarchy is supposed to work ([6.2](06-02-model-hierarchy.md)).

## Watch out

- **You might think** three equilibria means the climate is precariously balanced. **Actually** the warm state is robustly stable — the fold is 5 percent of solar constant away, which is not reachable by any process operating today. What the bistability tells you is about *deep time* and about the extreme hysteresis, not about the present.
- **You might think** the model's 15.7 °C prediction validates it. **Actually** $A$ and $B$ were fitted to reproduce the present climate, so that agreement is guaranteed by construction and tests nothing. What the model genuinely predicts — and what is worth taking seriously — is the *structure*: three solutions, a large hysteresis loop, an instability at intermediate ice cover. Fitted models must be judged on what they were not fitted to.
- **You might think** the ice-albedo feedback of $5.1\ \mathrm{W\,m^{-2}\,K^{-1}}$ here contradicts the $0.35$ of [2.3](02-03-surface-albedo-cryosphere-feedback.md). **Actually** both are right for their state: 0.35 is the feedback with the ice line at 70°, and this is the feedback with the ice line sweeping across the mid-latitudes. **The state-dependence is not a discrepancy; it is the entire mechanism.**

## One-liner

> One equation with a temperature-dependent albedo has three solutions and a hysteresis loop 39 percent of the solar constant wide — which is why Earth froze to the equator twice and needed a tenth of a bar of $\mathrm{CO_2}$ to get back out.

## Problems

**P1 (🟢)** Using $C\,dT/dt = S(1-\alpha)/4 - (204+2.17T)$ with $S = 1361$: (a) find the equilibrium temperature for a constant albedo of 0.35; (b) repeat for 0.25; (c) compute the implied sensitivity in °C per unit albedo and compare with $-S/(4B)$.

**P2 (🟡)** Consider a planet with $S = 1200\ \mathrm{W\,m^{-2}}$ and the same $A$, $B$ and $\alpha(T)$ as in the lesson. (a) Determine which branches admit equilibria. (b) Compute the equilibrium temperature(s). (c) State what climate this planet has, and whether it has any choice about it.

**P3 (🔴, optional)** Modify the model so the ice-free albedo is 0.28 and the ice-covered albedo is 0.65, with a linear ramp between $-8$ and $+8$ °C. Keep $A = 204$, $B = 2.17$. (a) Write $\alpha(T)$ on the ramp. (b) Find the two folds in $S$. (c) Compute the hysteresis width as a fraction of $S_0 = 1361$, and compare with the lesson's 39 percent. Explain in one sentence which change — the wider albedo contrast or the narrower temperature ramp — did more, and why.

<details>
<summary>Solutions</summary>

**P1** (a) $$340.25\times0.65 = 221.16 = 204+2.17T \quad\Longrightarrow\quad T = \frac{17.16}{2.17} = 7.9\ ^\circ\mathrm{C}.$$

(b) $$340.25\times0.75 = 255.19 = 204+2.17T \quad\Longrightarrow\quad T = \frac{51.19}{2.17} = 23.6\ ^\circ\mathrm{C}.$$

(c) $$\frac{\Delta T}{\Delta\alpha} = \frac{23.6-7.9}{0.25-0.35} = \frac{15.7}{-0.10} = -157\ ^\circ\mathrm{C}\ \text{per unit albedo}.$$

Compare: $$-\frac{S}{4B} = -\frac{340.25}{2.17} = -157.$$ ✓ Exact, since the model is linear in $\alpha$ at fixed branch.

Sanity: a 0.01 change in planetary albedo is worth 1.6 °C in this model. Recall from [2.3](02-03-surface-albedo-cryosphere-feedback.md) that the ice–albedo feedback corresponds to $d\alpha/dT \approx -0.001\ \mathrm{K^{-1}}$, which gives a feedback of $0.157\ \mathrm{K}$ of extra warming per kelvin — a gain of 0.157, consistent with the modest albedo feedback of the present state.

**P2** (a) Test each branch.

*Ice-free* ($\alpha=0.30$): $T = (0.175\times1200-204)/2.17 = (210-204)/2.17 = 2.76\ ^\circ\mathrm{C}$. But this branch requires $T > 10$. **Not valid** — no ice-free equilibrium exists.

*Ice-covered* ($\alpha=0.60$): $T = (0.100\times1200-204)/2.17 = (120-204)/2.17 = -38.7\ ^\circ\mathrm{C}$. Requires $T < -10$. **Valid.**

*Intermediate:* $T = (204-0.1375\times1200)/(0.00375\times1200-2.17) = (204-165)/(4.5-2.17) = 39/2.33 = 16.7\ ^\circ\mathrm{C}$. Requires $-10 \le T \le 10$. **Not valid.**

(b) The only equilibrium is $T = -38.7\ ^\circ\mathrm{C}$.

(c) The planet is a **snowball, with no alternative**. $S = 1200$ is below the warm-branch fold at 1290, so the ice-free state does not exist at all — this is not a case of two available states with the planet happening to occupy the cold one. There is nothing to tip; there is only one climate. Note the contrast with the present Earth, where two states exist and we occupy the warm one, and with a planet at $S = 1900$, where only the warm state exists.

**P3** (a) On the ramp from $-8$ to $+8$ °C, $\alpha$ goes linearly from 0.65 to 0.28:

$$\alpha(T) = \frac{0.65+0.28}{2} - \frac{0.65-0.28}{16}T = 0.465 - 0.023125\,T.$$

(b) *Warm fold:* the ice-free branch requires $T \ge 8$, and $T = (0.25S(1-0.28)-204)/2.17 = (0.18S-204)/2.17$:

$$0.18S - 204 \ge 8\times2.17 = 17.36 \quad\Longrightarrow\quad S \ge \frac{221.36}{0.18} = 1230\ \mathrm{W\,m^{-2}}.$$

*Cold fold:* the ice-covered branch requires $T \le -8$, and $T = (0.25S(0.35)-204)/2.17 = (0.0875S-204)/2.17$:

$$0.0875S - 204 \le -17.36 \quad\Longrightarrow\quad S \le \frac{186.64}{0.0875} = 2133\ \mathrm{W\,m^{-2}}.$$

(c) Hysteresis width: $$2133-1230 = 903\ \mathrm{W\,m^{-2}}, \qquad \frac{903}{1361} = 66\ \text{percent},$$

against the lesson's 39 percent — substantially wider.

**The wider albedo contrast did most of it.** The fold positions depend on the two *branch* albedos through the coefficients $0.18$ and $0.0875$ (versus $0.175$ and $0.100$): widening the contrast from $0.30$–$0.60$ to $0.28$–$0.65$ spreads those coefficients apart, which spreads the two folds apart. The narrower ramp ($\pm8$ instead of $\pm10$) only shifts each fold slightly inward via the $\pm8B$ term, and it moves both folds in the *same* direction, so it barely changes the width.

*Check.* This is worth extracting as a rule: **the hysteresis width is set by the difference between the two stable-branch albedos; the ramp width sets how steep the unstable branch is, and hence how fast the transition proceeds, not how wide the loop is.** The general version — that the size of a hysteresis loop is controlled by the separation of the two stable states and not by the sharpness of the switch between them — holds for any fold system, and it is why the "ice-covered versus ice-free" contrast is the number to argue about when assessing snowball plausibility.

</details>

## Flashback

**From Lesson 2.3 (Surface albedo and the cryosphere feedback):** Melt ponds cover 15 percent of the Arctic Ocean ($14\times10^{6}\ \mathrm{km^2}$) during July, replacing snow-covered ice of albedo 0.65 with ponded ice of albedo 0.30. July insolation there is 400 W m⁻². Earth's surface area is $510\times10^{6}\ \mathrm{km^2}$. (a) Compute the extra locally absorbed flux. (b) Compute the annual-mean global forcing, treating July as one month in twelve. (c) Compare with the ice–albedo feedback of $0.35\ \mathrm{W\,m^{-2}\,K^{-1}}$ and comment.

<details>
<summary>Solution</summary>

(a) Ponded area: $0.15\times14\times10^{6} = 2.1\times10^{6}\ \mathrm{km^2}$. Albedo change $0.65-0.30 = 0.35$, so

$$\Delta(\text{absorbed}) = 0.35\times400 = 140\ \mathrm{W\,m^{-2}}\ \text{locally, during July}.$$

(b) One month in twelve, spread over the globe:

$$\Delta F = \frac{140}{12}\times\frac{2.1\times10^{6}}{510\times10^{6}} = 11.67\times4.12\times10^{-3} = 0.048\ \mathrm{W\,m^{-2}}.$$

(c) Five hundredths of a watt per square metre — about a seventh of what the entire ice–albedo feedback delivers per kelvin, from a process that locally changes the surface energy budget by 140 W m⁻². The three factors that shrink it are exactly the ones [2.3](02-03-surface-albedo-cryosphere-feedback.md) identified: **small area** (0.4 percent of the globe), **short season** (one month in twelve), and — implicit in the 400 W m⁻² figure — the fact that even peak Arctic insolation is only slightly above the global-mean 340.

*Check.* Melt ponds are nevertheless taken seriously in sea-ice modelling, and the reason is not their global radiative effect but their *local* one: 140 W m⁻² of extra absorption at the ice surface drives further melt, deepens the ponds, and lowers the albedo further — a strong local positive feedback that controls the *rate* of summer ice loss even though its global forcing is negligible. **Local feedback strength and global radiative importance are different quantities**, which is the same distinction this lesson draws between the Budyko model's $5.1\ \mathrm{W\,m^{-2}\,K^{-1}}$ (a feedback in a state with ice at mid-latitudes) and the real 0.35.

</details>

## Connections

- **Backward:** the instability condition is [2.1](02-01-feedbacks-gain-factor.md)'s $\lambda < 0$; the state-dependence of the albedo feedback is [2.3](02-03-surface-albedo-cryosphere-feedback.md)'s; the fold structure and hysteresis are [5.6](05-06-tipping-elements-thresholds.md)'s, now derived rather than described.
- **Forward:** [6.2](06-02-model-hierarchy.md) asks what this model is good for and what the next rung up buys; [6.4](06-04-deep-time-slow-thermostat.md) supplies the silicate weathering that shut off during the snowball and eventually ended it.
- **Sideways (dynamical systems):** this is a one-dimensional flow with a cubic-like nullcline undergoing two saddle-node bifurcations as a parameter varies — [`dynamical-systems` 1.1](../../dynamical-systems/lessons/01-01-flows-on-the-line.md) for the flow and [3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) for the bifurcation. The geological evidence for the two Cryogenian snowballs is [geology 5.2](../../geology/lessons/05-02-earth-history-hadean-proterozoic.md)'s.

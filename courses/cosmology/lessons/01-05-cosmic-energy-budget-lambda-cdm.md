# Cosmology · Lesson 1.5: The cosmic energy budget and ΛCDM

> ⏱ ~15 min · Module 1: The expanding universe and the Friedmann equations · Builds on: [1.4 The Friedmann, fluid, and acceleration equations](01-04-friedmann-fluid-acceleration-equations.md), [1.3 Redshift and cosmic distances](01-03-redshift-cosmic-distances.md) · Unlocks: [2.1 The hot Big Bang and thermal equilibrium](02-01-hot-big-bang-thermal-equilibrium.md)

## Why this matters

You now have the universe's equations of motion. This lesson tells you what to *put in them* — the actual inventory of what the universe is made of — and then reads the whole cosmic history off a single equation. That inventory is startling: about 69% dark energy, 26% invisible dark matter, 5% ordinary atoms, and a whisper of radiation. Once you know how each ingredient dilutes as space stretches, one master equation, $H(z)$, gives you the expansion rate at every moment, the two great turning points of cosmic history (when matter overtook radiation, when dark energy overtook matter), the age of the universe, and its fate. This is $\Lambda$CDM — the "concordance model" — and this lesson is where it stops being a list of names and becomes a working machine. It closes Module 1 and sets up Boss Problem 1.

## The idea

Here's the whole story in one sentence: **different ingredients dilute at different rates as the universe expands, so whoever dilutes slowest eventually wins.**

Picture a box of gas that doubles in size. Ordinary **matter** (atoms, dark matter — anything slow and heavy) just spreads out: same number of particles in more volume, so its density falls like $1/\text{volume} \propto a^{-3}$, where $a$ is the scale factor (the "size" of the universe from [1.2](01-02-flrw-metric-comoving-coordinates.md), with $a=1$ today). **Radiation** (photons, anything moving at or near light speed) does worse: it spreads out *and* each photon's wavelength stretches with the expansion, robbing it of energy — an extra factor of $a$ — so its density falls like $a^{-4}$. And **dark energy**, the cosmological constant $\Lambda$, is the strange one: its density *doesn't dilute at all*. Stretch space and you get more of it, at the same density forever.

So run the movie forward. Early on, when $a$ was tiny, the steep $a^{-4}$ radiation term towered over everything — the **radiation era**. As space grew, radiation faded fastest and matter took over — the **matter era**, the epoch that built galaxies. And in the last few billion years matter has thinned enough that the never-diluting $\Lambda$ has risen to the top — the **dark-energy era** we're just entering, the one that will expand the universe forever. Same universe, three regimes, decided entirely by who dilutes slowest.

## The formal version

**Critical density.** The Friedmann equation from [1.4](01-04-friedmann-fluid-acceleration-equations.md) is

$$H^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2},$$

where $H = \dot a/a$ is the Hubble parameter (expansion rate), $G$ is Newton's constant, $\rho$ the total energy density (as mass density), $k$ the spatial curvature constant, and $c$ the speed of light. Set the curvature to zero ($k=0$) and solve for the density that makes the universe exactly flat:

$$\boxed{\;\rho_c = \frac{3H^2}{8\pi G}\;}$$

*In words: the critical density is the exact amount of stuff whose gravity makes space flat — more and it curves closed, less and it curves open.* Today, with $H_0 \approx 70$ km/s/Mpc, this is $\rho_{c,0} \approx 9\times10^{-27}\ \mathrm{kg/m^3}$ — about **5 protons per cubic meter**. The emptiest vacuum you can imagine, and yet that is the whole cosmic average.

**Density parameters.** Now measure every ingredient as a *fraction* of critical:

$$\Omega_i \equiv \frac{\rho_i}{\rho_c},$$

one dimensionless number per component $i$. Divide the Friedmann equation through by $H^2 = 8\pi G\rho_c/3$ and define a curvature term $\Omega_k \equiv -kc^2/(a^2 H^2)$. Everything collapses to a bookkeeping identity:

$$\boxed{\;\Omega_m + \Omega_r + \Omega_\Lambda + \Omega_k = 1\;}$$

*In words: the fractions of matter, radiation, dark energy, and curvature must add to one — always, by construction.* The measured **concordance values** today:

| Component | Symbol | Value today |
|---|---|---|
| Matter (total) | $\Omega_m$ | $\approx 0.31$ |
| &nbsp;&nbsp;— baryons (atoms) | $\Omega_b$ | $\approx 0.05$ |
| &nbsp;&nbsp;— cold dark matter | $\Omega_c$ | $\approx 0.26$ |
| Dark energy | $\Omega_\Lambda$ | $\approx 0.69$ |
| Radiation | $\Omega_r$ | $\approx 9\times10^{-5}$ |
| Curvature | $\Omega_k$ | $\approx 0$ (flat) |

The "CDM" in $\Lambda$CDM is that **cold dark matter** — five times more abundant than atoms, and the subject of Module 3. "Cold" means slow-moving (non-relativistic), so it counts as matter, scaling $a^{-3}$.

**The master equation.** Each component obeys $\rho_i \propto a^{-3(1+w_i)}$, the dilution law from [1.4](01-04-friedmann-fluid-acceleration-equations.md), where $w_i = p_i/(\rho_i c^2)$ is the equation-of-state parameter: $w=0$ for matter, $w=\tfrac13$ for radiation, $w=-1$ for $\Lambda$. Plug in and you recover exactly the scalings from *The idea*: $a^{-3},\ a^{-4},\ a^{0}$. Using $1+z = 1/a$ from [1.3](01-03-redshift-cosmic-distances.md) (so $a = 1/(1+z)$, and small $a$ = high redshift = long ago), the Friedmann equation becomes the **workhorse of all of cosmology**:

$$\boxed{\;H(z) = H_0\sqrt{\Omega_r(1+z)^4 + \Omega_m(1+z)^3 + \Omega_k(1+z)^2 + \Omega_\Lambda}\;}$$

*In words: to get the expansion rate at any redshift, take each ingredient's present fraction, redshift it up by its dilution power, add, and square-root.* Give me the four $\Omega$'s and $H_0$ and I can tell you how fast the universe was expanding at any moment in its history. Every distance, age, and growth calculation in this course runs on this equation.

**The two equality epochs.** A component *dominates* when its term in $H(z)$ is largest. The crossovers happen where two terms are equal:

- **Matter–radiation equality**: $\Omega_m(1+z)^3 = \Omega_r(1+z)^4$, i.e. $1+z_\text{eq} = \Omega_m/\Omega_r \approx 0.31/(9\times10^{-5}) \approx 3400$. Before this ($z > 3400$), radiation ruled; after, matter did.
- **Matter–$\Lambda$ equality**: $\Omega_m(1+z)^3 = \Omega_\Lambda$, i.e. $1+z_{m\Lambda} = (\Omega_\Lambda/\Omega_m)^{1/3} \approx (0.69/0.31)^{1/3} \approx 1.3$, so $z \approx 0.3$ — just a few billion years ago. We live right at this handover.

**Era-by-era $a(t)$.** When one component dominates, keep only its term ($\Omega_k=0$) and solve $\dot a/a = H_0\sqrt{\Omega_i}\,a^{-3(1+w_i)/2}$:

$$\text{radiation: } a \propto t^{1/2}, \qquad \text{matter: } a \propto t^{2/3}, \qquad \Lambda\text{: } a \propto e^{H_\Lambda t}.$$

*In words: radiation and matter expand as decelerating power laws; dark energy drives runaway exponential (de Sitter) growth.* The first two come from integrating $\dot a \propto a^{-1}$ and $\dot a \propto a^{-1/2}$; the last from $\dot a \propto a$, whose solution is a pure exponential with $H_\Lambda = H_0\sqrt{\Omega_\Lambda}$ constant.

**Age and fate.** Rearranging $H = \dot a/a$ gives $dt = da/(aH)$, so the present age is

$$t_0 = \int_0^1 \frac{da}{a\,H(a)}.$$

For $\Lambda$CDM this evaluates to $t_0 \approx 13.8$ **billion years**. And because $\Lambda$ was subdominant until recently, the expansion switched from *decelerating* (matter's gravity braking it) to *accelerating* around $z \sim 0.6$. The fate: matter and radiation thin toward nothing, $\Lambda$ takes over completely, and $a(t)$ becomes pure exponential — **eternal de Sitter expansion**.

## Picture

![Log-log plot of density versus scale factor: radiation (∝a⁻⁴, coral) is steepest and dominates at small a, matter (∝a⁻³, blue) dominates in the middle, and Λ (constant, dashed coral) dominates at large a; the two crossings mark matter–radiation equality at 1+z≈3400 and matter–Λ equality at 1+z≈1.3](assets/01-05-fig1.svg)

Three straight lines on a log-log plot, one per ingredient. The **steepest always wins at small $a$** (early times): radiation on the far left, then matter, then the flat $\Lambda$ line on the right. The two circles are the equality epochs — the only two turning points cosmic history has.

## Worked examples

**Example 1 (mechanical — locate an equality epoch).** When did matter overtake radiation? Set the two densities equal. Since $\rho_m \propto a^{-3}$ and $\rho_r \propto a^{-4}$, their ratio is $\rho_m/\rho_r \propto a$, so it was small (radiation-dominated) early and grew. Equality at

$$\frac{\rho_m}{\rho_r} = \frac{\Omega_m a^{-3}}{\Omega_r a^{-4}} = \frac{\Omega_m}{\Omega_r}\,a = 1 \;\Longrightarrow\; a_\text{eq} = \frac{\Omega_r}{\Omega_m} = \frac{9\times10^{-5}}{0.31} \approx 2.9\times10^{-4},$$

i.e. $1+z_\text{eq} = 1/a_\text{eq} = \Omega_m/\Omega_r \approx 3400$. The universe was about 3400 times smaller than today, roughly 50,000 years old. Everything before this — including the physics of Module 2 — happened in the radiation era.

**Example 2 (why you'd care — expansion rate at recombination).** The CMB (Module 3) formed at $z \approx 1100$. How much faster was the universe expanding then? Since $z \gg z_{m\Lambda}$ but $z \ll z_\text{eq}$, we're deep in the matter era; keep the matter term:

$$H(z) \approx H_0\sqrt{\Omega_m}\,(1+z)^{3/2} = 70\sqrt{0.31}\,(1101)^{3/2}\ \mathrm{km/s/Mpc}.$$

Now $(1101)^{3/2} = 1101\sqrt{1101} \approx 1101 \times 33.2 \approx 3.65\times10^4$, and $\sqrt{0.31} \approx 0.557$, so $H \approx 70 \times 0.557 \times 3.65\times10^4 \approx 1.4\times10^6$ km/s/Mpc — about **20,000 times** today's rate. That enormous $H$ is exactly what the freeze-out arguments of [2.2](02-02-decoupling-freeze-out.md) will race reaction rates against: whether a reaction "keeps up" is a comparison to this $H(z)$.

## Watch out

- **You might think $\Omega_k$ is a real substance like the others.** It isn't — there's no "curvature fluid." $\Omega_k \equiv -kc^2/(a^2H^2)$ is a *bookkeeping term* that makes the fractions sum to exactly 1 by definition. Setting $\Omega_k = 0$ is the statement that the *other* three already add to 1 (flat universe). Its $(1+z)^2$ scaling just reflects the $a^{-2}$ curvature term in Friedmann.
- **You might think "dark energy is 69% of the universe" is a timeless fact.** Those percentages are *today's* only. Because $\Omega_\Lambda$ stays put while $\Omega_m, \Omega_r$ redshift up steeply, at $z=1$ matter already dominates, and at recombination dark energy is utterly negligible. The budget is a snapshot, not a constant.
- **You might mix up "cold" dark matter with radiation because both are invisible.** "Cold" means non-relativistic (slow), so dark matter scales as *matter*, $a^{-3}$, and clumps to form structure. Hot, fast particles (photons, and to good approximation neutrinos early on) scale as *radiation*, $a^{-4}$, and resist clumping. The scaling power, not the visibility, is what sorts the budget.

## One-liner

> Each ingredient dilutes as $a^{-3(1+w)}$, so $H(z) = H_0\sqrt{\Omega_r(1+z)^4 + \Omega_m(1+z)^3 + \Omega_k(1+z)^2 + \Omega_\Lambda}$ replays all of cosmic history — radiation, then matter, then $\Lambda$ — from four numbers.

## Problems

**P1 (🟢)** (a) Compute the matter–radiation equality redshift from $\Omega_m = 0.31$, $\Omega_r = 9\times10^{-5}$, and the matter–$\Lambda$ equality redshift from $\Omega_\Lambda = 0.69$, $\Omega_m = 0.31$. (b) Find the critical density today for $H_0 = 70$ km/s/Mpc $= 2.27\times10^{-18}\ \mathrm{s^{-1}}$, using $G = 6.67\times10^{-11}\ \mathrm{N\,m^2/kg^2}$. Roughly how many protons per cubic meter is that ($m_p = 1.67\times10^{-27}$ kg)?

**P2 (🟡)** Using the master equation with concordance values ($\Omega_r = 9\times10^{-5}$, $\Omega_m = 0.31$, $\Omega_\Lambda = 0.69$, $\Omega_k = 0$), find the expansion rate $H$ as a multiple of $H_0$ at (a) $z = 1$ and (b) $z = 1000$. Which component dominates in each case?

**P3 (🔴, Boss-1 rehearsal)** For a flat universe of matter plus a cosmological constant ($\Omega_m + \Omega_\Lambda = 1$, ignore radiation), the Friedmann equation is $\dot a = H_0\sqrt{\Omega_m a^{-1} + \Omega_\Lambda a^2}$ (with $a_0 = 1$). Verify by substitution that

$$a(t) = \left(\frac{\Omega_m}{\Omega_\Lambda}\right)^{1/3}\sinh^{2/3}\!\left(\tfrac{3}{2}\sqrt{\Omega_\Lambda}\,H_0 t\right)$$

solves it, then set $a = 1$ to read off the present age $t_0$. Evaluate $t_0$ for $\Omega_m = 0.3$, $\Omega_\Lambda = 0.7$, $H_0 = 70$ km/s/Mpc (Hubble time $1/H_0 \approx 14.0$ Gyr).

<details>
<summary>Solutions</summary>

**P1** (a) Matter–radiation: $1 + z_\text{eq} = \Omega_m/\Omega_r = 0.31/(9\times10^{-5}) = 3444$, so $z_\text{eq} \approx 3400$. Matter–$\Lambda$: $1 + z_{m\Lambda} = (\Omega_\Lambda/\Omega_m)^{1/3} = (0.69/0.31)^{1/3} = (2.226)^{1/3} \approx 1.31$, so $z_{m\Lambda} \approx 0.3$.

(b) $\displaystyle \rho_{c,0} = \frac{3H_0^2}{8\pi G} = \frac{3(2.27\times10^{-18})^2}{8\pi(6.67\times10^{-11})} = \frac{3\times5.15\times10^{-36}}{1.676\times10^{-9}} = \frac{1.546\times10^{-35}}{1.676\times10^{-9}} \approx 9.2\times10^{-27}\ \mathrm{kg/m^3}.$

Protons per cubic meter: $9.2\times10^{-27}/1.67\times10^{-27} \approx 5.5$, i.e. about **5 protons/m³**.

*Check.* Units: $H^2/G$ has units $\mathrm{s^{-2}}/(\mathrm{m^3\,kg^{-1}\,s^{-2}}) = \mathrm{kg/m^3}$ ✓.

**P2** Master equation: $H/H_0 = \sqrt{\Omega_r(1+z)^4 + \Omega_m(1+z)^3 + \Omega_\Lambda}$.

(a) $z=1$, so $1+z = 2$:
$$\Omega_r\cdot 16 = 1.4\times10^{-3},\quad \Omega_m\cdot 8 = 2.48,\quad \Omega_\Lambda = 0.69.$$
Sum $= 3.17$, so $H/H_0 = \sqrt{3.17} \approx 1.78$. **Matter dominates** (2.48 is the largest term), with $\Lambda$ a substantial 0.69 — consistent with $z=1$ being well past matter–$\Lambda$ equality but still matter-led.

(b) $z=1000$, so $1+z = 1001$:
$$\Omega_r(1001)^4 = 9\times10^{-5}\times1.004\times10^{12} = 9.0\times10^{7},$$
$$\Omega_m(1001)^3 = 0.31\times1.003\times10^{9} = 3.11\times10^{8},\qquad \Omega_\Lambda = 0.69\ (\text{negligible}).$$
Sum $\approx 4.01\times10^{8}$, so $H/H_0 = \sqrt{4.01\times10^8} \approx 2.0\times10^{4}$. **Matter still dominates** (radiation is a factor ~3.4 smaller) — as expected, since $z=1000 < z_\text{eq}=3400$, we're still just inside the matter era.

*Check.* $H/H_0 \approx 2\times10^4$ at $z=1000$ matches Example 2's estimate at $z\approx1100$ (there $\approx 2\times10^4$) ✓.

**P3** *Verify.* Let $u = \tfrac32\sqrt{\Omega_\Lambda}\,H_0 t$ and $C = (\Omega_m/\Omega_\Lambda)^{1/3}$, so $a = C\sinh^{2/3}u$. Differentiate ($du/dt = \tfrac32\sqrt{\Omega_\Lambda}H_0$):

$$\dot a = C\cdot\tfrac23\sinh^{-1/3}u\,\cosh u\cdot\tfrac32\sqrt{\Omega_\Lambda}H_0 = C\sqrt{\Omega_\Lambda}\,H_0\,\sinh^{-1/3}u\,\cosh u.$$

Square it: $\dot a^2 = C^2\Omega_\Lambda H_0^2\,\sinh^{-2/3}u\,\cosh^2 u$. Now the right side of Friedmann, using $a^{-1} = C^{-1}\sinh^{-2/3}u$ and $a^2 = C^2\sinh^{4/3}u$:

$$H_0^2\big(\Omega_m a^{-1} + \Omega_\Lambda a^2\big) = H_0^2\big(\Omega_m C^{-1}\sinh^{-2/3}u + \Omega_\Lambda C^2\sinh^{4/3}u\big).$$

Both coefficients equal $\Omega_m^{2/3}\Omega_\Lambda^{1/3}$ (since $\Omega_m C^{-1} = \Omega_m^{2/3}\Omega_\Lambda^{1/3}$ and $\Omega_\Lambda C^2 = \Omega_m^{2/3}\Omega_\Lambda^{1/3}$), so factor it out:

$$= H_0^2\,\Omega_m^{2/3}\Omega_\Lambda^{1/3}\,\sinh^{-2/3}u\,(1 + \sinh^2 u) = H_0^2\,\Omega_m^{2/3}\Omega_\Lambda^{1/3}\,\sinh^{-2/3}u\,\cosh^2 u,$$

using $1 + \sinh^2 = \cosh^2$. Since $C^2\Omega_\Lambda = \Omega_m^{2/3}\Omega_\Lambda^{1/3}$, this matches $\dot a^2$ exactly. ✓

*Age.* Set $a = 1$: $\sinh^{2/3}u_0 = C^{-1} = (\Omega_\Lambda/\Omega_m)^{1/3}$, so $\sinh u_0 = (\Omega_\Lambda/\Omega_m)^{1/2}$. Then $u_0 = \tfrac32\sqrt{\Omega_\Lambda}H_0 t_0 = \operatorname{arcsinh}\sqrt{\Omega_\Lambda/\Omega_m}$, giving

$$t_0 = \frac{2}{3H_0\sqrt{\Omega_\Lambda}}\,\operatorname{arcsinh}\sqrt{\frac{\Omega_\Lambda}{\Omega_m}}.$$

For $\Omega_m=0.3,\ \Omega_\Lambda=0.7$: $\sqrt{\Omega_\Lambda/\Omega_m} = \sqrt{2.333} = 1.528$, and $\operatorname{arcsinh}(1.528) = \ln(1.528 + \sqrt{1.528^2+1}) = \ln(1.528 + 1.826) = \ln(3.354) = 1.210$. The prefactor is $\tfrac{2}{3\sqrt{0.7}} = 0.797$, so

$$H_0 t_0 = 0.797 \times 1.210 = 0.964 \;\Longrightarrow\; t_0 = 0.964 \times 14.0\ \mathrm{Gyr} \approx 13.5\ \mathrm{Gyr}.$$

*Check.* Just under the Hubble time $1/H_0 = 14.0$ Gyr, and close to the full $\Lambda$CDM value 13.8 Gyr (the small gap is the neglected radiation era) ✓. This is Boss Problem 1 — you've now done its core.

</details>

## Flashback

**From Lesson 1.4 (The Friedmann, fluid, and acceleration equations):** A hypothetical fluid has equation of state $w = -\tfrac13$ (sometimes called "curvature-like" or a gas of cosmic strings). (a) How does its density scale with $a$? (b) Using the acceleration equation $\ddot a/a = -\tfrac{4\pi G}{3}(\rho + 3p/c^2)$, does this fluid, on its own, accelerate or decelerate the expansion, or neither?

<details>
<summary>Solution</summary>

(a) Dilution law: $\rho \propto a^{-3(1+w)} = a^{-3(1 - 1/3)} = a^{-3(2/3)} = a^{-2}$. (It scales exactly like the curvature term — hence the nickname.)

(b) The acceleration equation's driver is $\rho + 3p/c^2$. With $p = w\rho c^2 = -\tfrac13\rho c^2$, we get $\rho + 3(-\tfrac13\rho) = \rho - \rho = 0$. So $\ddot a = 0$: this fluid produces **neither acceleration nor deceleration** — it coasts. This is the borderline case: $w < -\tfrac13$ accelerates (dark energy, $w=-1$, sits below it), $w > -\tfrac13$ decelerates (matter and radiation). $w = -\tfrac13$ is exactly the dividing line, which is why it plays the role of "curvature" in the budget.

*Check.* Consistent with the master equation: a $w=-\tfrac13$ term scales as $(1+z)^{3(1+w)} = (1+z)^2$, identical to the $\Omega_k$ term — the same borderline behavior seen from the $H(z)$ side. ✓

</details>

## Connections

- **Backward:** this lesson runs on the dilution law $\rho \propto a^{-3(1+w)}$ and the equation of state $w$ from [1.4](01-04-friedmann-fluid-acceleration-equations.md), and on the redshift–scale-factor bridge $1+z = 1/a$ from [1.3](01-03-redshift-cosmic-distances.md). The critical density is just the flat ($k=0$) Friedmann equation solved for $\rho$. The whole framework rests on the FLRW metric and Friedmann equations imported from [relativity](../../relativity/syllabus.md).
- **Forward:** [Boss Problem 1] is P3 above, finished. The master equation $H(z)$ is the engine of everything downstream: the thermal history of [2.1](02-01-hot-big-bang-thermal-equilibrium.md) (which converts temperature to scale factor and runs the clock through the radiation era located here), the freeze-out races of [2.2](02-02-decoupling-freeze-out.md) (reaction rate vs. this exact $H$), and the structure growth of Module 3 (density contrasts grow differently in the radiation, matter, and $\Lambda$ eras this lesson delineates).
- **Sideways:** the equality-epoch logic — "whoever scales slowest with $a$ wins at large $a$" — is the same competition-of-rates reasoning as freeze-out (reaction rate $\Gamma$ vs. expansion rate $H$) and as chemical decoupling; it's a recurring pattern, not a one-off. The $a^{-4}$ radiation scaling comes straight from the photon-gas thermodynamics you'll meet again through Boltzmann/blackbody arguments bridging to statistical mechanics.

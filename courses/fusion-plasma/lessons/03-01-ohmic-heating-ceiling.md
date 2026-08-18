# Fusion & Plasma Engineering · Lesson 3.1: Ohmic heating & its ceiling

> ⏱ ~15 min · Module 3: Heating, Transport & Plasma–Wall Interaction · Builds on: [2.6 Operational limits](02-06-operational-limits.md), [2.3 The tokamak recipe](02-03-the-tokamak-recipe.md) · Unlocks: [3.2 Neutral-beam injection](03-02-neutral-beam-injection.md), [3.3 RF heating & current drive](03-03-rf-heating-current-drive.md)

## Why this matters

A tokamak already drives a huge current through its plasma to make the poloidal field ([2.3](02-03-the-tokamak-recipe.md)). That current runs into resistance, and resistance dissipates power — so the machine gets a big slug of heating *for free*, with no extra hardware. It sounds like the whole heating problem is solved. It isn't: this free heater has a built-in cutout. As the plasma warms it becomes a *better* conductor, its resistance collapses, and the heating fades — stalling out around 1–2 keV, roughly a tenth of the ~10–15 keV needed for ignition ([1.5](01-05-ignition-breakeven-gain.md)). That gap is exactly why ITER and SPARC carry tens of megawatts of neutral-beam and radio-frequency heating. This lesson explains the free heater and why it can't finish the job.

## The idea

Push current through any conductor and it heats up — a toaster coil, a plasma, the same physics. This is **ohmic** (or Joule) heating, the $I^2R$ you already met in [circuits](../../circuits/syllabus.md). In a tokamak the plasma *is* the resistor: the transformer-driven plasma current $I_p$ that gives you the poloidal field also pours power into the gas as it fights the plasma's electrical resistance. Free heat, riding along with a current you had to drive anyway.

Here is the twist that dooms it. In a metal wire, resistance comes from electrons scattering off vibrating atoms — hotter wire, more vibration, *more* resistance. A plasma is the opposite. Its resistance comes from electrons being deflected by ions through the Coulomb force, and a hotter electron is moving so fast it barely feels the ion as it whips past — less deflection, *less* resistance. Quantitatively the resistivity falls as $\eta\propto T^{-3/2}$: quadruple the temperature and the resistivity drops eightfold.

So ohmic heating is a self-defeating heater. It works great when the plasma is cold, which is exactly how every tokamak *starts* — breakdown, then ohmic heating to ~1 keV. But the better it does its job, the weaker it gets. By ~1 keV the plasma is about as conductive as copper, the resistance has nearly vanished, and the heating you can still wring out of it is a rounding error against ignition. Concretely: ITER's plasma at 1 keV has a loop resistance around $10^{-7}\,\Omega$, so its 7.5 MA delivers only about 5 MW of ohmic power — while reaching ignition takes roughly ten times that. The free heater gets you off the ground; something else has to fly the plane.

## The formal version

**Ohmic power density.** In a plasma carrying current density $j$ with (Spitzer) resistivity $\eta$, the power dissipated per unit volume is

$$P_\Omega = \eta\,j^2.$$

In words: the same $I^2R$ Joule heating as a wire, written per cubic metre — $j$ is the current per unit area (A/m²), $\eta$ the resistivity ($\Omega\cdot\text{m}$). Multiply by the plasma volume and you recover the total ohmic power $P = I_p^2 R_p$.

**Spitzer resistivity.** For a hydrogenic plasma the (parallel) resistivity is

$$\eta \;=\; \eta_0\, T_e^{-3/2}, \qquad \eta_0 \approx 5.2\times10^{-5}\,Z\,\ln\Lambda\ \ \Omega\cdot\text{m}\cdot\text{eV}^{3/2},$$

with $T_e$ the electron temperature *in eV*, $Z$ the ion charge, and $\ln\Lambda$ the **Coulomb logarithm** — a slowly varying factor (about 15–20 in a fusion plasma) that bundles up the many small-angle Coulomb collisions an electron suffers; take $\ln\Lambda\approx17$, $Z=1$, so $\eta_0\approx8.9\times10^{-4}$. In words: hotter plasma conducts better, and the $T^{-3/2}$ is the whole story of this lesson — it comes from the [plasma-physics](../../plasma-physics/syllabus.md) treatment of electron–ion collisions. Numerically $\eta(1\,\text{keV})\approx2.8\times10^{-8}\,\Omega\cdot\text{m}$, roughly copper's resistivity.

**Steady-state power balance.** In steady state the heating in equals the energy leaking out. The plasma stores thermal energy density $W = 3nT$ (that is $\tfrac{3}{2}nT$ for electrons plus $\tfrac{3}{2}nT$ for ions, with density $n$ and $T_e=T_i=T$) and loses it on the energy-confinement time $\tau_E$, so

$$\underbrace{\eta_0\,T^{-3/2}\,j^2}_{\text{ohmic in}} \;=\; \underbrace{\frac{3nT}{\tau_E}}_{\text{loss out}}.$$

In words: heating falls as temperature rises while the loss climbs, so they meet at one temperature — the **ohmic ceiling**. Solving for it (with $T$ in eV and $e=1.602\times10^{-19}$ converting eV to joules in $W$),

$$T_{\text{ceil}} \;=\; \left(\frac{\eta_0\, j^2\, \tau_E}{3\,n\,e}\right)^{2/5}.$$

That $2/5$ exponent is the punchline: the ceiling is stuck. Every knob you can turn — current density, density, confinement — enters under a weak $2/5$ power, so no realistic push moves the ceiling from ~1 keV to the ~10 keV ignition band.

## Picture

![Power density versus plasma temperature: the blue ohmic heating curve falls as T to the minus three-halves and crosses a rising grey loss line at an ohmic ceiling near 1 keV, while a coral vertical line marks the ignition temperature of 10 to 15 keV far to the right; a grey arrow spans the gap that neutral-beam and RF heating must close](assets/03-01-fig1.svg)

The blue curve is ohmic heating, $P_\Omega=\eta j^2\propto T^{-3/2}$, plunging as the plasma warms. The dashed grey line is the loss $W/\tau_E\propto T$, climbing. They cross at the coral dot — the ohmic ceiling near 1–2 keV, and a *stable* operating point: nudge below it and heating beats loss so $T$ climbs back up; nudge above and loss wins so $T$ falls back down. The coral vertical line is the ignition temperature, sitting far to the right. The grey arrow is the whole reason Module 3 exists — the temperature gap that auxiliary heating (NBI in [3.2](03-02-neutral-beam-injection.md), RF in [3.3](03-03-rf-heating-current-drive.md)) has to bridge.

## Worked examples

**Example 1 (why the heater fades — resistivity scaling).** Ohmic breakdown gets a plasma to 100 eV. Auxiliary systems then help carry it to 1 keV. By what factor has the *ohmic* heating (at fixed current density $j$) changed between those two temperatures?

Only $\eta$ depends on $T$, and $P_\Omega=\eta j^2\propto\eta\propto T^{-3/2}$. The temperature rose by a factor 10, so

$$\frac{P_\Omega(1\,\text{keV})}{P_\Omega(100\,\text{eV})} = \left(\frac{1000}{100}\right)^{-3/2} = 10^{-3/2} = \frac{1}{31.6}.$$

In words: heating the plasma tenfold cut its own ohmic power by a factor of about **31**. The heater doesn't just fail to keep up — it actively shuts itself off as it succeeds. This is precisely why ohmic power alone flattens out: each step up in $T$ starves the very source doing the heating, so long before ignition the ohmic contribution has dwindled to noise.

**Example 2 (where it stalls — the ceiling).** Estimate the ohmic ceiling for a plasma with core current density $j=1.5\times10^{6}\,\text{A/m}^2$, density $n=10^{20}\,\text{m}^{-3}$, and confinement time $\tau_E=1\,\text{s}$. Use $\eta_0=8.9\times10^{-4}$ ($\ln\Lambda=17$, $Z=1$).

Set heating equal to loss and solve for $T^{5/2}$ (keeping $T$ in eV; convert $W$ to joules with $e$):

$$T_{\text{ceil}}^{5/2} = \frac{\eta_0\, j^2\, \tau_E}{3\,n\,e}.$$

Numerator: $\eta_0 j^2\tau_E = (8.9\times10^{-4})(1.5\times10^{6})^2(1) = (8.9\times10^{-4})(2.25\times10^{12}) = 2.0\times10^{9}$.

Denominator: $3ne = 3(10^{20})(1.602\times10^{-19}) = 48.1$.

$$T_{\text{ceil}}^{5/2} = \frac{2.0\times10^{9}}{48.1} = 4.2\times10^{7} \;\Rightarrow\; T_{\text{ceil}} = (4.2\times10^{7})^{2/5} \approx 1.1\times10^{3}\,\text{eV} \approx 1.1\,\text{keV}.$$

In words: this plasma ohmically self-heats to about **1.1 keV** and then sits there — right in the observed 1–2 keV band, and about a tenth of the ~10–15 keV ignition target. Notice how little the weak $2/5$ power lets you gain: multiply $j^2\tau_E/n$ by 10 and $T_{\text{ceil}}$ rises only by $10^{2/5}\approx2.5$, to ~2.8 keV. There is no combination of realistic knobs that ohmically reaches ignition — which is the entire justification for auxiliary heating.

## Watch out

- **You might think** a hotter plasma is easier to keep heating ohmically, the way a hotter wire dissipates more. **Actually** it's the reverse: a plasma's resistivity *falls* as $T^{-3/2}$ (a copper wire's *rises* with $T$), so ohmic heating weakens as it works. Same $I^2R$ formula, opposite temperature dependence — a genuinely counterintuitive sign flip worth carrying over from [circuits](../../circuits/syllabus.md).
- **You might think** you can beat the ceiling by simply cranking the plasma current for more $\eta j^2$. **Actually** $j$ is capped from above — too much current drops the safety factor $q$ below the kink limit ([2.3](02-03-the-tokamak-recipe.md)) and $n$ is capped by the Greenwald limit ([2.6](02-06-operational-limits.md)) — and even if you could push them, the $2/5$ power means it barely moves the ceiling.
- **You might think** ohmic heating is therefore useless. **Actually** it's indispensable: it's how every tokamak *starts*, carrying the plasma from breakdown to ~1 keV essentially for free. It just can't finish — the last factor of ten in temperature belongs to NBI, RF, and eventually alpha self-heating.

## One-liner

> Ohmic heating rides free on the plasma current, but Spitzer resistivity's $\eta\propto T^{-3/2}$ collapse throttles it near 1–2 keV — an order of magnitude short of ignition, so auxiliary heating is mandatory.

## Problems

**P1 (🟢)** A plasma is heated from 500 eV to 4 keV. By what factor does its Spitzer resistivity change, and — at fixed current density — by what factor does the ohmic heating power density change? State in one sentence what this says about the heater.

**P2 (🟡)** A modest tokamak has major radius $R=3\,\text{m}$, minor radius $a=1\,\text{m}$, and plasma current $I_p=2\,\text{MA}$, at $T_e=1\,\text{keV}$ where $\eta=2.8\times10^{-8}\,\Omega\cdot\text{m}$. Model the plasma as a loop of length $2\pi R$ and cross-section $\pi a^2$. (a) Find the plasma loop resistance $R_p=\eta\,(2\pi R)/(\pi a^2)$. (b) Find the total ohmic power $P=I_p^2 R_p$. (c) Ignition-class heating is tens of MW — is ohmic heating enough on its own?

**P3 (🔴, optional)** Using the ceiling scaling $T_{\text{ceil}}\propto\big(j^2\tau_E/n\big)^{2/5}$, by what factor would you have to raise the combination $j^2\tau_E/n$ to lift the ohmic ceiling from 1 keV to the 10 keV ignition regime? Given the limits on $j$ (safety factor, [2.3](02-03-the-tokamak-recipe.md)) and $n$ (Greenwald, [2.6](02-06-operational-limits.md)), what does your number imply?

<details>
<summary>Solutions</summary>

**P1** The temperature rises by a factor $4000/500 = 8$. Resistivity scales as $\eta\propto T^{-3/2}$, so

$$\frac{\eta(4\,\text{keV})}{\eta(500\,\text{eV})} = 8^{-3/2} = \frac{1}{8^{3/2}} = \frac{1}{22.6}.$$

Since $P_\Omega=\eta j^2\propto\eta$ at fixed $j$, the ohmic power density also drops by the same factor $\approx 22.6$. In words: heating the plasma eightfold slashed its own ohmic heating by more than twenty times — the heater throttles itself as the plasma warms, which is why ohmic power cannot carry a plasma to ignition temperatures.

**P2** (a) Loop resistance:

$$R_p = \eta\,\frac{2\pi R}{\pi a^2} = \eta\,\frac{2R}{a^2} = (2.8\times10^{-8})\,\frac{2(3)}{1^2} = (2.8\times10^{-8})(6) = 1.68\times10^{-7}\,\Omega.$$

(b) Total ohmic power:

$$P = I_p^2 R_p = (2\times10^{6})^2 (1.68\times10^{-7}) = (4\times10^{12})(1.68\times10^{-7}) = 6.7\times10^{5}\,\text{W} \approx 0.7\,\text{MW}.$$

(c) About 0.7 MW — well under a megawatt, versus the tens of MW needed to reach ignition. Ohmic heating alone falls short by more than an order of magnitude, and it only gets weaker as $T$ climbs and $\eta$ falls. Auxiliary heating is mandatory. (This is the microscopic $\eta j^2$ of Example 2 re-expressed as the circuit-level $I^2R$ — same physics, integrated over the plasma volume.)

**P3** With $T\propto X^{2/5}$ where $X=j^2\tau_E/n$, raising $T$ by a factor $10$ (1 keV → 10 keV) needs

$$X_{\text{new}}/X_{\text{old}} = 10^{5/2} = 10^{2.5} \approx 316.$$

You would have to increase $j^2\tau_E/n$ by a factor of roughly **300**. But $j$ can't grow much before $q$ drops through the kink limit, $n$ is pinned below the Greenwald density, and $\tau_E$ is largely fixed by machine size — so a 300-fold increase is flatly impossible. The ohmic ceiling is a genuine wall, not a soft target you can lean on: reaching ignition temperature *requires* a different heating mechanism, which is the entire subject of the rest of Module 3.

</details>

## Flashback

**From Lesson 2.3 (The tokamak recipe):** A tokamak has major radius $R=3\,\text{m}$, minor radius $a=1\,\text{m}$, toroidal field $B_t=3\,\text{T}$, and plasma current $I_p=2\,\text{MA}$. Compute the edge safety factor $q_a=\dfrac{2\pi a^2 B_t}{\mu_0 R\,I_p}$ and say whether it clears the $q_a>2$ rule of thumb.

<details>
<summary>Solution</summary>

Plug in with $\mu_0=4\pi\times10^{-7}$:

$$q_a = \frac{2\pi a^2 B_t}{\mu_0 R\,I_p} = \frac{2\pi (1)^2(3)}{(4\pi\times10^{-7})(3)(2\times10^{6})}.$$

Numerator: $2\pi(3) = 6\pi$. Denominator: $(4\pi\times10^{-7})(6\times10^{6}) = 4\pi(0.6) = 2.4\pi$. So

$$q_a = \frac{6\pi}{2.4\pi} = 2.5.$$

The $\pi$ cancels (a clean-factor check). So $q_a=2.5$: it clears the kink floor $q_a>1$ **and** the operational $q_a>2$ margin — a comfortable, stable design. Note this is the *same* $I_p$ whose resistance drives the ohmic heating of this lesson: the one plasma current supplies both the twist ($q$) and the free heat ($\eta j^2$).

</details>

## Connections

- **Backward:** the heater here *is* the transformer-driven plasma current $I_p$ of [2.3](02-03-the-tokamak-recipe.md) — the same current that makes the poloidal field and sets $q$ also dissipates as $\eta j^2$. The target it falls short of is the ignition temperature from [1.5](01-05-ignition-breakeven-gain.md), fixed by the D–T reactivity of [1.3](01-03-reactivity-power-density.md).
- **Forward:** the temperature gap this lesson opens up is closed by the auxiliary heating of [3.2](03-02-neutral-beam-injection.md) (neutral beams) and [3.3](03-03-rf-heating-current-drive.md) (RF waves); the power-balance bookkeeping ($W=3nT$ lost on $\tau_E$) becomes the whole subject of [3.4](03-04-transport-confinement-scaling.md) on confinement scaling.
- **Sideways:** ohmic heating is the $I^2R$ Joule heating of [circuits](../../circuits/syllabus.md) — but with the temperature dependence *flipped*, because a plasma's resistance comes from Coulomb collisions ([plasma-physics](../../plasma-physics/syllabus.md)) that weaken with heat, whereas a metal's comes from lattice scattering that strengthens with heat. The $W/\tau_E$ loss term is the same energy-confinement accounting behind the Lawson criterion ([1.4](01-04-lawson-criterion-triple-product.md)).

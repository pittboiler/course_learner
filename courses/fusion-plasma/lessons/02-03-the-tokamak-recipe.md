# Fusion & Plasma Engineering · Lesson 2.3: The tokamak recipe

> ⏱ ~15 min · Module 2: Magnetic Confinement & MHD · Builds on: [2.1 From bottles to tori](02-01-bottles-to-tori.md), [2.2 MHD equilibrium & flux surfaces](02-02-mhd-equilibrium-flux-surfaces.md) · Unlocks: [2.4 MHD instabilities](02-04-mhd-instabilities.md), [2.6 Operational limits](02-06-operational-limits.md)

## Why this matters

Lesson 2.1 left us with a demand and no device: a torus needs its field lines to *twist* (rotational transform), or the curvature and grad-B drifts pull ions and electrons apart and the plasma dumps itself on the wall in microseconds. The tokamak is the most successful answer ever built — ITER, SPARC, JET, EAST are all tokamaks. Its recipe is only three ingredients, and two numbers decide whether the machine lives: the **safety factor** $q$ (does it stay stable?) and **beta** $\beta$ (is it economically worth building?). Get $q$ and $\beta$ on the back of an envelope and you can read almost any tokamak design choice.

## The idea

A tokamak twists the field with two crossed magnets stacked on the same doughnut.

1. **Toroidal field $B_t$** — strong, the-long-way-around field, made by external coils threaded through the hole of the doughnut (like beads on a ring). This alone gives you 2.1's plain torus: pure toroidal field, no twist, doesn't confine.

2. **Plasma current $I_p$** — you drive a large electric current *through the plasma itself*, the long way around. The trick: the plasma is the secondary winding of a transformer. A **central solenoid** up the middle ramps its current, and the changing flux induces $I_p$ in the plasma loop (Faraday's law — a plasma is just a conducting wire bent into a circle).

3. That current makes its own **poloidal field $B_p$** — the short-way-around field, wrapping the plasma's cross-section (Ampère's law: current down the axis, field circling it).

Add the strong toroidal field and the weaker poloidal field and a field line no longer closes on itself the long way — it **spirals**, advancing a little the short way each time it goes the long way. That spiral is the rotational transform 2.1 demanded. As a field line drifts up on the outboard side, the twist carries it around to where the drift points down, and the two cancel over a lap.

The one number that captures the twist is the **safety factor** $q$: how many times a field line goes the long way (toroidal) for each single trip the short way (poloidal). Big $q$ = gentle twist; small $q$ = tight twist. And "safety" is literal — twist it too tightly (small $q$) and the whole current channel kinks and disrupts.

## The formal version

**The safety factor (geometric definition).** For a field line on a flux surface at minor radius $r$ in a torus of major radius $R$,

$$q(r) = \frac{r\,B_t}{R\,B_p}.$$

In words: $q$ is the ratio of how fast the field line runs toroidally ($B_t$, over the long circumference $\sim 2\pi R$) to how fast it climbs poloidally ($B_p$, over the short circumference $\sim 2\pi r$) — the toroidal-turns-per-poloidal-turn count. Here $B_t$ is the toroidal field, $B_p$ the poloidal field, $R$ the major radius (torus centre to plasma centre), $r$ the minor radius of the flux surface.

**The cylindrical edge estimate.** The plasma current $I_p$ sets the edge poloidal field by Ampère's law, $B_p(a) = \mu_0 I_p / (2\pi a)$, where $a$ is the plasma minor radius (the edge) and $\mu_0 = 4\pi\times10^{-7}$ the vacuum permeability. Substitute into $q(a)$:

$$q_a = \frac{a\,B_t}{R\,B_p(a)} = \frac{2\pi a^2 B_t}{\mu_0 R\, I_p}.$$

In words: the edge safety factor rises with toroidal field and plasma size, and falls as you push more current — more current means more poloidal field, tighter twist, smaller $q$. The **Kruskal–Shafranov limit** says $q_a > 1$ is the bare minimum for stability against the disruptive kink; operators keep $q_a \gtrsim 2$–$3$ for margin. (Its inverse, the rotational transform $\iota = 1/q$, is the more natural variable for stellarators in 2.5.)

**Plasma beta.** Define

$$\beta = \frac{p}{B^2/2\mu_0},$$

with $p$ the plasma pressure and $B^2/2\mu_0$ the magnetic pressure. In words: $\beta$ is the fraction of the magnetic field's pressure that the plasma manages to hold as thermal pressure. It is the **economic efficiency of confinement** — magnets are the cost, plasma pressure is the product, and $\beta$ is product-per-cost. It is also a hard stability ceiling (the Troyon limit, lesson 2.6): push $\beta$ too high and the plasma balloons through its bottle.

## Picture

![Tokamak field construction: a poloidal cross-section showing toroidal field out of the page, plasma current into the page and its circulating poloidal field, and a straightened tube showing the resulting helical field line with q = toroidal laps per poloidal lap](assets/02-03-fig1.svg)

Panel A is one poloidal cross-section: the toroidal field $B_t$ comes out of the page (blue dots), the plasma current $I_p$ goes into the page (coral cross), and $I_p$'s own poloidal field $B_p$ circles around it (coral dashed). Panel B straightens the flux-surface tube out flat: adding a strong along-the-tube $B_t$ to the wrap-around $B_p$ gives a field line that spirals — and $q$ is exactly how many toroidal laps it takes to come back around poloidally.

## Worked examples

**Example 1 (the boss shape — edge safety factor).** Take ITER-like numbers: $R = 6\,\text{m}$, $a = 2\,\text{m}$, $B_t = 5\,\text{T}$, $I_p = 7.5\,\text{MA} = 7.5\times10^6\,\text{A}$. Does it clear the kink rule of thumb?

$$q_a = \frac{2\pi a^2 B_t}{\mu_0 R\, I_p} = \frac{2\pi (2)^2 (5)}{(4\pi\times10^{-7})(6)(7.5\times10^6)}.$$

Do it in pieces. Numerator: $2\pi \cdot 4 \cdot 5 = 40\pi$. Denominator: $(4\pi\times10^{-7})(6)(7.5\times10^6) = 4\pi \cdot 45 \cdot 10^{-1} = 18\pi$. So

$$q_a = \frac{40\pi}{18\pi} = \frac{40}{18} \approx 2.2.$$

The $\pi$ cancels — a nice check that the numeric factor is clean. So $q_a \approx 2.2$: it clears $q_a > 2$, but only just. This is deliberate. Confinement improves as you crank $I_p$ (more current, more poloidal field, better rotational transform, and — lesson 2.6 — a higher density limit), so designers push current right up until $q_a$ approaches the kink floor, then stop. A tokamak lives with its back against the $q$ wall.

**Example 2 (plasma beta — the efficiency reality check).** Same machine, $B = 5\,\text{T}$. Plasma at $n = 10^{20}\,\text{m}^{-3}$ and $T = 10\,\text{keV}$. What fraction of the magnetic pressure is the plasma actually holding?

First the plasma pressure, $p = nT$ — and units are the whole game. $T$ in energy units is $10\,\text{keV} = 10^4 \times 1.602\times10^{-19}\,\text{J} = 1.602\times10^{-15}\,\text{J}$. Then

$$p = nT = (10^{20})(1.602\times10^{-15}) \approx 1.6\times10^{5}\,\text{Pa}.$$

That is already about 1.6 atmospheres of thermal pressure — a real, pushy gas. Now the magnetic pressure:

$$\frac{B^2}{2\mu_0} = \frac{(5)^2}{2(4\pi\times10^{-7})} = \frac{25}{2.513\times10^{-6}} \approx 9.9\times10^{6}\,\text{Pa}.$$

So

$$\beta = \frac{p}{B^2/2\mu_0} = \frac{1.6\times10^{5}}{9.9\times10^{6}} \approx 0.016,$$

about **1.6 percent**. (Count both electrons and ions, $p = n_eT_e + n_iT_i \approx 2nT$, and it roughly doubles to about 3 percent — either way, a few percent.) A 5-tesla magnet stores a hundred atmospheres of magnetic pressure and the plasma uses one or two of them. Magnetic confinement is *pressure-inefficient*: you pay for a huge field to hold a whisper of gas. That single fact — $\beta$ of a few percent — is why tokamak magnets are enormous and why raising $\beta$ (at fixed field) is the central economic lever of the whole field.

## Watch out

- **You might think** $q_a > 1$ is the safety target, since Kruskal–Shafranov says $q_a = 1$ is where the kink turns unstable. **Actually** operators demand $q_a \gtrsim 2$: real plasmas have pressure and current profiles that go unstable well before the idealized $q_a = 1$, so $q > 1$ is the theorem and $q > 2$ is the engineering rule of thumb with margin. Our boss machine at $q_a \approx 2.2$ sits right at that practical floor.
- **You might think** high $q$ is unambiguously "safer, so better." **Actually** you *want* $q$ as small as safety allows: lower $q$ means more plasma current, which means better confinement and a higher Greenwald density limit (2.6). The design pushes current *down* toward the $q$ floor, not away from it. "Safety factor" names the danger, not the goal.
- **You might think** the toroidal field does the confining, since it is by far the largest field. **Actually** $B_t$ alone confines nothing in a torus (that was 2.1's whole failure) — it is the small poloidal field $B_p$ from the plasma current that supplies the twist. The strong field is the scaffold; the weak field is the glue.

## One-liner

> A tokamak crosses a strong toroidal field with the poloidal field of its own plasma current to make helical field lines; $q$ counts the twist and must stay above ~2, while $\beta$ — the pressure the plasma holds per unit magnetic pressure — is only a few percent.

## Problems

**P1 (🟢)** A compact, high-field tokamak (SPARC-like) has $R = 1.85\,\text{m}$, $a = 0.57\,\text{m}$, $B_t = 12\,\text{T}$, $I_p = 8.7\,\text{MA}$. Compute $q_a$ and say whether it clears the $q_a > 2$ rule.

**P2 (🟡)** Hold $R$, $a$, $B_t$ fixed at the Example-1 values ($R=6$, $a=2$, $B_t=5\,\text{T}$) but ask: what is the *largest* plasma current $I_p$ you may run before hitting the hard kink floor $q_a = 1$? Interpret why a designer chooses a current well below this.

**P3 (🔴, optional)** For the Example-2 plasma ($n = 10^{20}\,\text{m}^{-3}$, $B = 5\,\text{T}$), suppose the Troyon $\beta$ limit for this machine is $\beta_{\max} = 3\%$ (single-species convention, $p=nT$). At $T = 10\,\text{keV}$, how much room is left — by what factor could you raise the pressure before hitting the limit, and what does that buy you for fusion power? (Recall fusion power density $\propto n^2\langle\sigma v\rangle$ from [1.3](01-03-reactivity-power-density.md).)

<details>
<summary>Solutions</summary>

**P1** Using $q_a = \dfrac{2\pi a^2 B_t}{\mu_0 R I_p}$ with $a^2 = 0.57^2 = 0.3249\,\text{m}^2$, $I_p = 8.7\times10^6\,\text{A}$:

- Numerator: $2\pi (0.3249)(12) = 2\pi (3.899) = 24.49$.
- Denominator: $(4\pi\times10^{-7})(1.85)(8.7\times10^6) = (4\pi\times10^{-7})(1.61\times10^7) = 4\pi (1.61) = 20.23$.

$$q_a = \frac{24.49}{20.23} \approx 1.21.$$

So $q_a \approx 1.2$ — it clears the absolute kink floor $q_a > 1$ but does **not** clear the $q_a > 2$ rule of thumb. This is real: high-field compact tokamaks run at aggressive (low) $q_a$, buying confinement and density headroom from very high $B_t$ and $I_p$ while accepting a tighter stability margin — which is why active control and careful profile shaping matter more in those machines. (A sanity check: same current as ITER-class but a much smaller, much higher-field device, so a lower $q_a$ is expected.)

**P2** Set $q_a = 1$ and solve for $I_p$:

$$1 = \frac{2\pi a^2 B_t}{\mu_0 R\, I_p} \;\Rightarrow\; I_p = \frac{2\pi a^2 B_t}{\mu_0 R} = \frac{2\pi (4)(5)}{(4\pi\times10^{-7})(6)}.$$

Numerator $= 40\pi$; denominator $= 24\pi\times10^{-7}$. So

$$I_p = \frac{40\pi}{24\pi\times10^{-7}} = \frac{40}{24}\times10^{7} \approx 1.67\times10^{7}\,\text{A} = 16.7\,\text{MA}.$$

Equivalently, since $q_a \propto 1/I_p$, this is just Example 1's $7.5\,\text{MA}$ scaled by $q_a = 2.2$: $7.5 \times 2.2 \approx 16.5\,\text{MA}$ (rounding). At $16.7\,\text{MA}$ you sit exactly on the kink threshold — the plasma is one perturbation from a disruption. A designer runs at $7.5\,\text{MA}$ ($q_a \approx 2.2$) to keep a factor-of-two current margin below the cliff, because real profiles go unstable before the ideal limit and a disruption dumps the full magnetic and thermal energy into the wall.

**P3** Current pressure (single-species, as in Example 2): $p = nT \approx 1.6\times10^5\,\text{Pa}$, giving $\beta \approx 1.6\%$. The limit is $\beta_{\max} = 3\%$, so there is room to roughly **double** the pressure ($3\%/1.6\% \approx 1.9\times$). At fixed field, doubling $\beta$ means doubling $p = nT$. If you spend it on density at fixed $T$ (staying near the reactivity-optimal ~15 keV of [1.3](01-03-reactivity-power-density.md)), then $n$ doubles and fusion power density $\propto n^2$ goes up by about $4\times$ — a huge payoff. This is exactly why $\beta$ is the economic knob: a factor of ~2 in allowed pressure is a factor of ~4 in power out of the same magnets. (You would then need to check the Greenwald density limit too — that is the job of 2.6.)

</details>

## Flashback

**From Lesson 2.2 (MHD equilibrium & flux surfaces):** Static MHD equilibrium is force balance $\mathbf{J}\times\mathbf{B} = \nabla p$. A plasma column has field $B = 5\,\text{T}$ and its pressure falls from $p_0 = 1.6\times10^5\,\text{Pa}$ at the centre to ~0 at the edge, over a minor radius $a = 2\,\text{m}$. Estimate the magnitude of the perpendicular ("diamagnetic") current density $J_\perp$ that holds this pressure up.

<details>
<summary>Solution</summary>

Take magnitudes with $\mathbf{J}\perp\mathbf{B}$, so $J_\perp B \approx |\nabla p|$. Estimate the gradient as $|\nabla p| \approx p_0/a = (1.6\times10^5)/2 = 8\times10^4\,\text{Pa/m}$. Then

$$J_\perp \approx \frac{|\nabla p|}{B} = \frac{8\times10^4}{5} = 1.6\times10^{4}\,\text{A/m}^2.$$

In words: to hold a pressure hill in place, the plasma must carry a current across the field of order (pressure gradient)/(field) — this is the diamagnetic current, and it is a direct rearrangement of $\mathbf{J}\times\mathbf{B} = \nabla p$. Note this is the *perpendicular* current that confines pressure; it is distinct from the *toroidal* plasma current $I_p$ of this lesson, which supplies the poloidal field and the twist.

</details>

## Connections

- **Backward:** this is 2.1's rotational transform made real — the poloidal field $B_p$ from $I_p$ is precisely the twist that cancels the curvature/grad-B drifts, and it lives on the nested flux surfaces of [2.2](02-02-mhd-equilibrium-flux-surfaces.md). The plasma current here *is* the toroidal current whose $\mathbf{J}\times\mathbf{B}$ balances pressure in 2.2.
- **Forward:** $q$ is the trigger variable for [2.4](02-04-mhd-instabilities.md)'s kink and tearing modes (rational surfaces where $q = m/n$), and both $q$ and $\beta$ become hard operating walls in [2.6](02-06-operational-limits.md) (Kruskal–Shafranov, Troyon, Greenwald). The inductively driven $I_p$ also cannot last forever — its transformer runs out of volt-seconds, motivating the non-inductive current drive of [3.2](03-02-neutral-beam-injection.md)–[3.3](03-03-rf-heating-current-drive.md).
- **Sideways (E&M / fluids):** $B_p(a) = \mu_0 I_p/2\pi a$ is Ampère's law for a straight wire, and the transformer that drives $I_p$ is Faraday's law — see the [em-refresher](../../em-refresher/syllabus.md). The force-balance picture that $q$ and $\beta$ summarize is magnetohydrodynamics, the same conducting-fluid framework the [plasma-physics](../../plasma-physics/syllabus.md) course develops from the two-fluid equations and that borrows its intuition from [fluid-dynamics](../../fluid-dynamics/syllabus.md).

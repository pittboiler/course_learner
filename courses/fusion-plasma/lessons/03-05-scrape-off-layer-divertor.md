# Fusion & Plasma Engineering · Lesson 3.5: The scrape-off layer & divertor

> ⏱ ~15 min · Module 3: Heating, Transport & Plasma–Wall Interaction · Builds on: [3.4 Transport & confinement scaling](03-04-transport-confinement-scaling.md), [2.2 MHD equilibrium & flux surfaces](02-02-mhd-equilibrium-flux-surfaces.md) · Unlocks: [3.6 First-wall & plasma–wall interaction](03-06-first-wall-plasma-wall-interaction.md)

## Why this matters

A burning D-T plasma dumps roughly a fifth of its fusion power — the 3.5 MeV alphas, tens to hundreds of megawatts — as heat that has to *leave* through the plasma edge. In ITER about 100 MW will cross the plasma boundary and has to land somewhere solid. The catch: it arrives compressed into a channel a few millimetres thick, so the raw heat flux onto a wall would be **hundreds of MW/m²** — a blowtorch that no material survives (engineering limits sit near 10 MW/m²). The divertor is the machine's answer, and getting it wrong is one of the two or three things most likely to stop a reactor from ever running. This is the exhaust problem, and it is as hard as ignition.

## The idea

Every closed magnetic surface inside the plasma keeps particles circulating forever ([2.2](02-02-mhd-equilibrium-flux-surfaces.md)). There is a *last* such surface — the **separatrix** — and it's the border between "confined" and "gone." Just outside it, the field lines are **open**: follow one and it eventually runs into a material surface. That thin outer shell of open field lines is the **scrape-off layer (SOL)** — it "scrapes off" whatever leaks across the separatrix.

Here's the design choice. If you do nothing, those open lines hit the nearest wall — right next to the hot core, spraying eroded wall atoms straight back into the plasma. Instead you shape the poloidal field with extra coils to create an **X-point**: a spot where the poloidal field vanishes and the separatrix crosses itself. Below the X-point the SOL field lines peel away into two **legs** that lead down to a dedicated, remote, actively cooled **divertor target**, far from the core. Now the exhaust — heat, eroded impurities, and the helium "ash" left by fusion — is deposited and pumped away in a spot you built for punishment, not next to your fuel.

The problem that remains is concentration. Cross-field transport is slow ([3.4](03-04-transport-confinement-scaling.md)), so power leaks across the separatrix into a SOL only a few millimetres wide — call that width $\lambda_q$ — and then streams *fast* along the field down the legs. All of it lands on a footprint set by that millimetre-scale width. Spread even 100 MW over a few square metres and you're already at tens of MW/m². The fix of last resort is to not let the power reach the target as heat at all: seed a trace impurity (nitrogen, neon) into the divertor so it **radiates** most of the power away as light onto the whole surrounding wall before it can hit the target — a regime called **detachment**.

## The formal version

**The parallel heat flux.** Power $P_{\text{SOL}}$ (W) crossing the separatrix flows along the field into a channel of width $\lambda_q$ (m), the **SOL power-decay width**. Wrapped toroidally around major radius $R$ (m), that channel has cross-sectional area $A_\parallel \approx 2\pi R\,\lambda_q$, so the heat flux flowing *along* the field is

$$q_\parallel \approx \frac{P_{\text{SOL}}}{2\pi R\,\lambda_q}.$$

*In words: the exhaust power is squeezed into a toroidal ribbon a few millimetres tall, so the flux running down the field lines is enormous.* With $\lambda_q$ of order 1 mm, $q_\parallel$ reaches hundreds to thousands of MW/m² — you cannot point that straight at a wall.

**Spreading it onto the target.** Two geometric tricks cut the flux the target actually *feels*, $q_\perp$:

1. **Flux expansion** near the X-point spreads the legs so the wetted band is wider than $\lambda_q$.
2. **Grazing incidence** — tilt the target so field lines strike at a shallow angle $\alpha$ (a couple of degrees), and only the component normal to the surface deposits:

$$q_\perp = q_\parallel \sin\alpha.$$

*In words: hit the plate almost edge-on, and each square metre of plate soaks up the heat of many square metres of field-line channel.* The **average** target flux, once power $P_{\text{target}}$ is spread over total wetted area $A_{\text{wet}}$, is simply

$$q_\perp^{\text{avg}} = \frac{P_{\text{target}}}{A_{\text{wet}}}, \qquad A_{\text{wet}} = N_{\text{targets}}\times 2\pi R\,w,$$

where $w$ (m) is the poloidal width of the heat footprint on each of $N_{\text{targets}}$ targets. The engineering ceiling for steadily cooled tungsten is roughly $q_\perp^{\text{lim}} \approx 10\ \text{MW/m}^2$.

**Radiative dissipation / detachment.** Let a fraction $f_{\text{rad}}$ of the exhaust power be radiated away in the SOL and divertor volume before it reaches the plate. Then only $(1-f_{\text{rad}})$ lands as heat:

$$q_\perp^{\text{avg}} = \frac{(1-f_{\text{rad}})\,P_{\text{SOL}}}{A_{\text{wet}}}.$$

*In words: turn most of the exhaust into light, which spreads harmlessly over the whole chamber, and only the leftover fraction stresses the target.* Demanding $q_\perp^{\text{avg}} \le q_\perp^{\text{lim}}$ gives the required radiated fraction

$$f_{\text{rad}} \ge 1 - \frac{q_\perp^{\text{lim}}\,A_{\text{wet}}}{P_{\text{SOL}}}.$$

Reactor divertors are designed to run at $f_{\text{rad}} \approx 0.9$ — a **radiative / detached divertor**, where a cold, dense, radiating cloud sits between the plasma and the plate and the heat flux (and the plasma pressure) largely "detaches" from the surface.

## Picture

![Poloidal cross-section of a single-null divertor: blue nested core flux surfaces and separatrix meeting at an X-point, a thin coral scrape-off layer of width lambda-q, two divertor legs carrying exhaust down to grey cooled targets, a coral heat-flux footprint on the targets, and coral radiation squiggles showing seed-impurity dissipation](assets/03-05-fig1.svg)

## Worked examples

**Example 1 — the boss shape: how bad is the raw target flux?** 100 MW crosses the separatrix and is shared between two divertor targets. Each target's heat footprint wraps toroidally around $R = 6$ m with poloidal width $w = 0.05$ m, so its wetted area is $2\pi R\,w$. Find the average target heat flux and compare it to the 10 MW/m² limit.

Wetted area per target:

$$2\pi R\,w = 2\pi (6)(0.05) = 1.885\ \text{m}^2.$$

Two targets share the load, so total wetted area is $A_{\text{wet}} = 2\times 1.885 = 3.77\ \text{m}^2$. With all 100 MW deposited (no radiation yet):

$$q_\perp^{\text{avg}} = \frac{P_{\text{target}}}{A_{\text{wet}}} = \frac{100\ \text{MW}}{3.77\ \text{m}^2} \approx 26.5\ \text{MW/m}^2.$$

Units check: MW/m² ✓. That's **2.6× over** the ~10 MW/m² tungsten limit — and this is *already* after diverting to a big remote target with two strike points and flux expansion baked into $w$. Geometry alone doesn't get you there. Something has to give.

**Example 2 — radiate your way under the limit.** For the same machine, what fraction of the 100 MW must be radiated away before it reaches the plate to hold $q_\perp^{\text{avg}} \le 10\ \text{MW/m}^2$?

Only $(1-f_{\text{rad}})$ of the power lands as heat, so set the deposited flux to the limit:

$$\frac{(1-f_{\text{rad}})(100\ \text{MW})}{3.77\ \text{m}^2} \le 10\ \text{MW/m}^2 \;\Longrightarrow\; 1-f_{\text{rad}} \le \frac{10\times 3.77}{100} = 0.377.$$

$$\boxed{f_{\text{rad}} \ge 1 - 0.377 = 0.62.}$$

You must radiate **at least 62%** of the exhaust power away as light before it touches the target. In words: turn most of the blowtorch into a glow. The regime that does this — a cold, dense, impurity-seeded, radiating divertor plasma — is **detachment**, and it's the baseline operating point for every reactor design (ITER, DEMO, SPARC all plan for $f_{\text{rad}} \gtrsim 0.7$, often $\sim 0.9$, for margin). Note the trap this sets up: you need the radiation concentrated in the divertor, not in the core, or you cool the fuel and lose confinement — the tension we flag below.

## Watch out

- **You might think a bigger machine automatically fixes the heat flux.** It helps only weakly. Doubling $R$ doubles $2\pi R\,w$, but a bigger, higher-power reactor also produces *more* exhaust power, and the SOL width $\lambda_q$ stubbornly stays around a millimetre (empirically it barely grows with size). This is why the exhaust problem gets *harder* at reactor scale, not easier — and why every reactor leans on radiation, not geometry alone.
- **You might think the divertor is just "the wall where the plasma hits."** The point is *remoteness and control*: the X-point routes the strike point far from the confined plasma so eroded material and helium ash can be pumped out without contaminating the core, and so the target can be a purpose-built, replaceable, water-cooled cassette rather than your main chamber wall ([3.6](03-06-first-wall-plasma-wall-interaction.md)).
- **You might think you should just crank $f_{\text{rad}} \to 1$ and forget the target.** You can't radiate freely: push the radiating, detached front too far up the leg toward the X-point and it can move onto the confined plasma, cooling the edge, collapsing the pedestal, dropping you out of H-mode ([3.4](03-04-transport-confinement-scaling.md)), or triggering a radiative instability (a MARFE). The divertor lives in a narrow window — radiate *most* of the power, but keep the cold cloud parked below the X-point.

## One-liner

> Outside the separatrix, open field lines carry a millimetre-thin torrent of exhaust power down to a remote cooled target — and the only way to keep that target from melting is to radiate most of the power away as light before it lands.

## Problems

**P1 (🟢) — why not just use the wall?** Suppose 50 MW of exhaust power crossed the separatrix and, with *no* divertor, smeared onto the first wall in a band of width $\lambda_q = 3\ \text{mm}$ running around the outboard circumference at $R = 6$ m. (a) Compute the wetted area $2\pi R\,\lambda_q$ and the resulting heat flux. (b) In one sentence, say what the divertor buys you.

**P2 (🟡) — geometry plus a little radiation.** The same 50 MW is now diverted to two targets. Flux expansion and tilt widen each target's footprint to $w = 0.07$ m, still wrapping $R = 6$ m. (a) Compute the total wetted area and the average target flux with no radiation. (b) You want margin — hold the target under 5 MW/m². What radiated fraction $f_{\text{rad}}$ does that require?

**P3 (🔴) — grazing incidence and its limit.** Power streaming down a leg arrives with parallel heat flux $q_\parallel = 500\ \text{MW/m}^2$. The target is tilted so field lines strike at $\alpha = 1.5^\circ$. (a) Compute the deposited flux $q_\perp = q_\parallel \sin\alpha$. (b) It's still over 10 MW/m² — find the $f_{\text{rad}}$ needed to reach 8 MW/m². (c) Name the two knobs you used and give one reason you can't just tilt the plate to $\alpha \to 0$. *(Ties to material limits in [3.6](03-06-first-wall-plasma-wall-interaction.md).)*

<details>
<summary>Solutions</summary>

**P1.** (a) Wetted area:

$$2\pi R\,\lambda_q = 2\pi (6)(0.003) = 0.113\ \text{m}^2.$$

Heat flux:

$$q_\perp = \frac{50\ \text{MW}}{0.113\ \text{m}^2} \approx 442\ \text{MW/m}^2.$$

Units: MW/m² ✓. That's ~44× the 10 MW/m² limit — instant destruction, right next to the core.

(b) The divertor spreads that same power over a far larger wetted area (flux expansion + grazing incidence + two strike points) at a spot remote from the plasma — dropping the raw flux by one to two orders of magnitude and letting you pump away impurities where they can't reach the fuel. *(Compare to P2: the same 50 MW lands at ~9 MW/m² once diverted.)*

**P2.** (a) Per-target wetted area $2\pi(6)(0.07) = 2.639\ \text{m}^2$; two targets give $A_{\text{wet}} = 5.28\ \text{m}^2$.

$$q_\perp^{\text{avg}} = \frac{50\ \text{MW}}{5.28\ \text{m}^2} \approx 9.5\ \text{MW/m}^2.$$

Geometry alone squeaks it just under the 10 MW/m² limit here — but only barely, and with zero margin for transients like ELMs.

(b) For a 5 MW/m² target:

$$f_{\text{rad}} \ge 1 - \frac{q_\perp^{\text{lim}} A_{\text{wet}}}{P_{\text{SOL}}} = 1 - \frac{(5)(5.28)}{50} = 1 - 0.528 = 0.47.$$

Radiate about **47%** of the exhaust to get a comfortable 2× margin. (Check: $(1-0.47)\times 50 / 5.28 = 26.5/5.28 = 5.0$ MW/m² ✓.)

**P3.** (a) $\sin(1.5^\circ) = 0.0262$, so

$$q_\perp = q_\parallel \sin\alpha = 500 \times 0.0262 = 13.1\ \text{MW/m}^2.$$

Grazing incidence already knocked 500 MW/m² down to 13 — a factor of ~38 — but it's still over the limit.

(b) Require $(1-f_{\text{rad}})\times 13.1 \le 8$:

$$f_{\text{rad}} \ge 1 - \frac{8}{13.1} = 1 - 0.611 = 0.39.$$

Radiate ~**39%** to reach 8 MW/m².

(c) The two knobs: **target tilt** (grazing incidence $q_\perp = q_\parallel\sin\alpha$) and **radiative dissipation** ($f_{\text{rad}}$). You can't take $\alpha \to 0$ because the wetted footprint length scales as $1/\sin\alpha$ and would run off the target; near-tangential lines also make the leading edges of tile gaps catch nearly the full $q_\parallel$ (a monoblock leading-edge meltdown), and small misalignments or plasma shifts become catastrophic. Real targets sit around $1$–$3^\circ$ — shallow, but not zero.

</details>

## Flashback

**From Lesson 3.4 (τ_E scaling / power degradation).** The ITER-98(y,2) scaling law says the energy confinement time degrades with heating power as $\tau_E \propto P^{-0.69}$ — the notorious **power degradation** of tokamak confinement. A tokamak runs at heating power $P = 40\ \text{MW}$ with $\tau_E = 0.9\ \text{s}$. (a) You double the heating power to $80\ \text{MW}$ to push toward ignition; find the new $\tau_E$. (b) The stored energy is $W = P\,\tau_E$ — did doubling the power double the stored energy? What does this say about brute-forcing your way to better confinement?

<details>
<summary>Solution</summary>

(a) Confinement scales as $\tau_E \propto P^{-0.69}$, so doubling $P$ multiplies $\tau_E$ by $2^{-0.69}$:

$$2^{-0.69} = 0.62, \qquad \tau_E^{\text{new}} = 0.9 \times 0.62 = 0.56\ \text{s}.$$

The confinement time *drops* by 38% when you double the power.

(b) Stored energy $W = P\,\tau_E$:

$$W_{\text{old}} = 40 \times 0.9 = 36\ \text{MJ}, \qquad W_{\text{new}} = 80 \times 0.56 = 45\ \text{MJ}.$$

Doubling the heating power raised the stored energy by only ~24% (36 → 45 MJ), not 100%: power degradation eats most of the gain. *In words: you can't simply blast your way to a hotter, better-confined plasma — each extra megawatt of heating buys steadily less confinement.* This is exactly why the field prizes the **L→H transition** ([3.4](03-04-transport-confinement-scaling.md)), which improves confinement by a factor of ~2 at fixed power instead of fighting the $P^{-0.69}$ penalty — and, relevant to this lesson, why so much exhaust power ($\propto P$) still has to be handled at the divertor.

</details>

## Connections

- **Backward:** the separatrix and X-point are the open-field-line edge of the nested flux surfaces from [2.2](02-02-mhd-equilibrium-flux-surfaces.md), and the millimetre SOL width is set by the same slow cross-field transport that fixes the global confinement time in [3.4](03-04-transport-confinement-scaling.md) — good confinement and a narrow SOL are two faces of one coin.
- **Forward:** [3.6 First-wall & plasma–wall interaction](03-06-first-wall-plasma-wall-interaction.md) takes over at the target surface — why tungsten, how sputtering and erosion respond to these fluxes, and what transient ELM and disruption loads do on top of the steady $q_\perp$ computed here.
- **Sideways (heat transfer / thermal engineering):** the divertor target is a classic conjugate heat-transfer problem — a $\sim$10 MW/m² surface flux conducted through a few millimetres of tungsten into high-pressure water or helium coolant channels, limited by the coolant's critical heat flux. The radiating detached plasma, meanwhile, is an atomic-physics radiation-transport problem (impurity line emission cooling a partially ionized gas), a bridge to the same collisional-radiative modeling the [`plasma-physics` syllabus](../../plasma-physics/syllabus.md) develops.

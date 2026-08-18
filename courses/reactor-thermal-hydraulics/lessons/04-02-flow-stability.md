# Reactor Thermal-Hydraulics · Lesson 4.2: Flow stability

> ⏱ ~15 min · Module 4: Natural circulation, neutronic coupling, and safety margins · Builds on: [3.5 Two-phase pressure drop](03-05-two-phase-pressure-drop.md), [4.1 Natural circulation and driving head](04-01-natural-circulation-driving-head.md) · Unlocks: [4.4 Coupled thermal-hydraulic / neutronic feedback](04-04-coupled-th-neutronic-feedback.md)

## Why this matters

Everything so far assumed the flow up a channel sits still — a steady $G$ you can plug into a friction factor. But a *boiling* channel can refuse to hold a steady flow. Nudge it and it either jumps to a wildly different flow rate and stays there, or it starts breathing — flow, quality, and (in a reactor) power oscillating on their own, with nobody driving them. Both are bad: the first can slam a channel down to a starved, dryout-prone trickle; the second rattles the fuel and the neutronics until a protection system trips the plant. This is a real operating boundary. In 1988 the LaSalle-2 BWR settled into a growing power-and-flow oscillation after a pump trip and had to be scrammed. This lesson is about *why* boiling flow goes unstable and the two cheap fixes — avoid the bad region, and orifice the inlet.

## The idea

The root of the trouble is a fact you already met in [3.5](03-05-two-phase-pressure-drop.md): **at low flow a channel boils *more*, and more vapor means a bigger pressure drop.** Push the same power into a slower stream and a larger fraction flashes to steam; the two-phase multiplier climbs, and the channel demands a *higher* $\Delta p$ to push that frothier mixture through. So over some range, **slowing the flow down raises the pressure drop it needs** — exactly backwards from an ordinary pipe, where less flow always means less drop.

Plot the pressure drop a channel *demands* against its flow $G$ and that backwardness shows up as a dent: the curve rises (single-phase-ish at very low flow), then bends *down* as boiling takes over (the negative-slope region), then rises again once the flow is fast enough to stay mostly liquid. An **N lying on its side.** Now the pump (or the loop, or the neighboring channels) supplies pressure along its *own* curve — often nearly a flat horizontal line, "here's your $\Delta p$, take whatever flow you want." A flat line can cut that N in **three** places. Two of those crossings are stable resting points. The middle one, sitting on the downhill part of the N, is a marble balanced on a dome: the tiniest nudge and it rolls off. That's **Ledinegg instability** — a static, once-and-done jump. Its dynamic cousin, the **density-wave oscillation**, is the same backwardness expressed *in time*, with a delay that turns the dent into a self-sustaining wobble.

## The formal version

Two channel curves are in play. The **demand** (or "internal") characteristic $\Delta p_{ch}(G)$ is what the channel *needs* to pass flow $G$ — friction + form + acceleration + gravity, all with two-phase multipliers once it boils ([3.5](03-05-two-phase-pressure-drop.md)). The **supply** (or "external") characteristic $\Delta p_{sup}(G)$ is what the driver *delivers* at that flow — a centrifugal pump's head-vs-flow curve, or in a parallel-channel bundle the common plenum-to-plenum $\Delta p$ that every channel must match. Here $G$ is the mass flux (kg·m⁻²·s⁻¹) and both $\Delta p$ in Pa.

**Ledinegg (static / flow-excursion) criterion.** An operating point (a crossing where $\Delta p_{ch}=\Delta p_{sup}$) is *statically unstable* when

$$\frac{\partial (\Delta p_{ch})}{\partial G} \;<\; \frac{\partial (\Delta p_{sup})}{\partial G}.$$

*In words: if a small drop in flow makes the channel demand more than the supply is willing to give at that lower flow, the flow keeps falling — it runs away.* Read it as a restoring test. Perturb $G$ down by $\delta G$. The demand changes by $\frac{\partial \Delta p_{ch}}{\partial G}\delta G$ and the supply by $\frac{\partial \Delta p_{sup}}{\partial G}\delta G$. If demand now exceeds supply, the channel is under-pushed, decelerates further, and excursions away; if supply wins, it's shoved back. For a **constant-pressure supply** ($\partial\Delta p_{sup}/\partial G = 0$, the flat line), the criterion collapses to the clean statement

$$\boxed{\ \frac{\partial (\Delta p_{ch})}{\partial G} < 0 \ \Longrightarrow\ \text{Ledinegg-unstable}\ }$$

— unstable **everywhere the demand curve slopes downhill**, i.e. the whole middle branch of the N. The excursion is not gentle: the flow jumps all the way to another branch, typically collapsing to the low-flow, high-quality point where the wall is starved and racing toward critical heat flux ([3.6](03-06-critical-heat-flux-dnb.md)).

**Density-wave oscillation (dynamic).** Ledinegg asks only whether a *steady* point is stable; it ignores that pressure feedback takes *time* to travel the channel. Track that delay and a second instability appears even where the demand slope is positive. The mechanism, in words:

1. A small dip in inlet flow lets the fluid in the boiling region heat up more, so a **lighter (higher-enthalpy, lower-density) slug** is created near the boiling boundary.
2. That low-density slug travels *up* the channel at the flow speed — a **wave of density (and quality)** — taking a **transit time** $\tau \approx L/u$ to clear the heated length, where $u$ is a characteristic flow velocity (m/s) and $L$ the heated length (m).
3. As it moves, it changes the local two-phase pressure drop (the acceleration and frictional terms depend strongly on density). Because the channel's *total* $\Delta p$ is pinned by the plenums, this lagged pressure-drop swing feeds back onto the **inlet** flow.
4. If the feedback arrives roughly **half a period out of phase** with the original dip — which happens when the oscillation period is on the order of the transit time — it *reinforces* the perturbation. Self-sustained oscillations of flow, quality, and $\Delta p$ grow, with period typically $\tau_{osc} \sim (1\text{–}2)\,\tau$.

*In words: it rings because the density wave's pressure feedback comes back late — lagged by the time it takes coolant to climb the channel — and a late push can pump a swing instead of damping it.* Whether it grows or decays is captured by dimensionless **subcooling** and **phase-change (Zuber)** numbers on a stability map; we stop at the intuition and skip the full transfer function.

## Picture

![The N-shaped channel demand curve (Delta p versus mass flux G) crossed by a nearly-flat supply line at three points; the two outer crossings are stable, the middle crossing on the downhill branch is Ledinegg-unstable, with excursion arrows running out to the stable points](assets/04-02-fig1.svg)

## Worked examples

**Example 1 — spot the unstable crossing, and say what breaks.** A boiling channel at fixed power and inlet subcooling has the tabulated demand curve below. The supply is a constant $\Delta p_{sup} = 55\ \mathrm{kPa}$ (a large plenum-fed bundle — essentially a flat line).

| $G$ (kg·m⁻²·s⁻¹) | 150 | 300 | 500 | 800 | 1100 | 1500 | 2000 | 2600 |
|---|---|---|---|---|---|---|---|---|
| $\Delta p_{ch}$ (kPa) | 20 | 58 | 72 | 60 | 52 | 50 | 58 | 80 |

Find where demand equals the 55 kPa supply, and classify each crossing.

*Crossings* (where $\Delta p_{ch}$ passes through 55): between $G=150$ and $300$ (rising through 55, call it $G_a\approx 290$); between $G=800$ and $1100$ (falling through 55, $G_b\approx 980$); between $G=1500$ and $2000$ (rising through 55, $G_c\approx 1800$). Three operating points, as the N promises.

*Local slopes* (secants straddling each crossing):

$$\left.\frac{\partial \Delta p_{ch}}{\partial G}\right|_{a} \approx \frac{58-20}{300-150} = +0.25\ \tfrac{\mathrm{kPa}}{\mathrm{kg\,m^{-2}s^{-1}}}, \quad \left.\frac{\partial \Delta p_{ch}}{\partial G}\right|_{b} \approx \frac{52-60}{1100-800} = -0.027, \quad \left.\frac{\partial \Delta p_{ch}}{\partial G}\right|_{c} \approx \frac{58-50}{2000-1500} = +0.016.$$

Against a flat supply ($\partial\Delta p_{sup}/\partial G = 0$), the criterion $\partial\Delta p_{ch}/\partial G < 0$ flags **only the middle crossing $G_b\approx 980$** as unstable; $G_a$ and $G_c$ are stable.

*What happens.* Sit the channel at $G_b\approx 980$ and nudge the flow down slightly. On this downhill branch the demand *rises* above the 55 kPa on offer, so the channel is under-pushed, decelerates, demands still more, and **excursions down to the low-flow stable point** near $G_a\approx 290$ — a better-than-3× collapse in flow. At $G_a$ the same power boils a far larger fraction of a much smaller stream: exit quality soars, the wall approaches dryout, and DNBR falls toward 1 ([3.6](03-06-critical-heat-flux-dnb.md)). A nudge the other way runs it up to the safe high-flow point $G_c\approx 1800$. The lesson: never let a channel's design point land on the downhill branch.

*Check.* Units of the slope are kPa per (kg·m⁻²·s⁻¹); the sign is what matters and only $G_b$ is negative ✓. Sanity: the two stable points bracket the unstable one, and the excursion always ejects *toward* a stable branch — a marble leaving a dome for a valley ✓.

**Example 2 — orifice the inlet to kill the dent.** Take the steepest downhill segment of that same curve, $G:500\to800$, where $\Delta p_{ch}$ falls from 72 to 60 kPa (a drop of 12 kPa — the guts of the instability). Add an **inlet orifice**: a single-phase form loss on the cold, dense entering liquid,

$$\Delta p_{orf} = K\,\frac{G^2}{2\rho_f}, \qquad \rho_f \approx 740\ \mathrm{kg/m^3}\ (\text{subcooled inlet water},\ \sim 7\ \mathrm{MPa}),$$

with $K$ the orifice loss coefficient (dimensionless). This term is single-phase and **monotonically increasing** in $G$ — it adds *more* $\Delta p$ at *higher* flow, exactly the positive slope the boiling region is missing. Its increment across the segment is

$$\Delta p_{orf}(800) - \Delta p_{orf}(500) = \frac{K}{2\rho_f}\big(800^2 - 500^2\big) = \frac{K}{1480}(3.9\times10^{5}) = 0.264\,K\ \ [\mathrm{kPa}].$$

For the *total* demand (two-phase + orifice) to stop falling across this segment, the orifice's rise must cancel the 12 kPa drop:

$$-12 + 0.264\,K \ge 0 \quad\Longrightarrow\quad K_{crit} \approx \frac{12}{0.264} \approx 46.$$

Install a generous $K = 50$. Orifice adds $50\times\tfrac{500^2}{2(740)} = 8.4\ \mathrm{kPa}$ at $G=500$ and $50\times\tfrac{800^2}{2(740)} = 21.6\ \mathrm{kPa}$ at $G=800$. New totals: $72+8.4 = 80.4$ kPa and $60+21.6 = 81.6$ kPa — the segment now **rises** ($+1.2$ kPa) instead of falling. The N's downhill branch is gone; the demand curve is monotonic, the flat supply crosses it **once**, and Ledinegg has nothing to grab. The same steep, in-phase inlet $\Delta p$ also damps density-wave oscillations, which is why BWR fuel bundles carry an orifice at the lower tie plate.

*Check.* Units: $K\frac{G^2}{2\rho} = \frac{(\mathrm{kg\,m^{-2}s^{-1}})^2}{\mathrm{kg\,m^{-3}}} = \mathrm{kg\,m^{-1}s^{-2}} = \mathrm{Pa}$ ✓. Sense: the fix costs pump power — you *added* $\sim$20 kPa of pressure drop — so it's the pressure-drop/stability trade from [2.5](02-05-pressure-drop-core.md) again, buying stability with head. And it must go at the *inlet* (cold liquid): an orifice in the boiling region would just amplify the two-phase drop and could make things worse ✓.

## Watch out

- **You might think less flow always means less pressure drop — it does in a cold pipe, but not in a boiling channel.** That single reversal (slow the flow, boil more, demand *more* $\Delta p$) is the entire origin of the N and of both instabilities. If the channel never boiled, $\Delta p_{ch}\propto G^2$ would be monotonic and none of this would happen.
- **You might treat Ledinegg and density waves as the same thing — they're cousins, not twins.** Ledinegg is *static*: it needs only the shape of the steady demand curve, and its failure is a one-time jump to a new flow. Density-wave is *dynamic*: it needs the *time lag* of the traveling density front, and it can oscillate even on a positively-sloped branch where Ledinegg is perfectly happy.
- **You might read the criterion with the wrong supply slope.** Against a *rising* pump curve ($\partial\Delta p_{sup}/\partial G$ steeply negative — pump head falls as flow rises), the channel can be stable even on a mildly downhill branch, because it's the *difference* $\partial\Delta p_{ch}/\partial G - \partial\Delta p_{sup}/\partial G$ that must be negative. The flat-supply case ("unstable wherever the channel slopes down") is the common special case, not the whole rule. A stiff (steep) supply stabilizes; a soft (flat) one exposes the N.

## One-liner

> A boiling channel demands *more* pressure drop when you slow it down, bending its $\Delta p$–vs-$G$ curve into an N; wherever that curve slopes down under the supply line the flow won't hold — so you avoid that branch and orifice the inlet to erase it.

## Problems

**P1 (🟢)** A boiling channel's demand curve has a local maximum at $G = 600\ \mathrm{kg\,m^{-2}s^{-1}}$ and a local minimum at $G = 1400\ \mathrm{kg\,m^{-2}s^{-1}}$. A pump supplies a constant $\Delta p$ that intersects the demand curve at $G = 400$, $G = 1000$, and $G = 1900\ \mathrm{kg\,m^{-2}s^{-1}}$. Which operating point(s) are Ledinegg-unstable, and why? What is special about the $G$-range $600 < G < 1400$?

**P2 (🟡)** For the channel in Example 2, an engineer proposes $K = 30$ instead of $K = 50$ for the inlet orifice. Does that eliminate the downhill segment $G:500\to800$? Compute the new total-demand change across the segment and decide. ($\rho_f = 740\ \mathrm{kg/m^3}$; two-phase part still drops 12 kPa.)

**P3 (🔴)** A channel oscillates by the density-wave mechanism. The heated length is $L = 3.6\ \mathrm{m}$ and a fluid particle's mean speed through the two-phase region is $u \approx 4.5\ \mathrm{m/s}$. Estimate the transit time $\tau$ and, taking the oscillation period as $\tau_{osc}\approx 2\tau$, the oscillation frequency in Hz. Is this the sub-Hz "chugging" range BWRs worry about?

<details>
<summary>Solutions</summary>

**P1** Ledinegg (flat supply) flags an operating point when the demand curve slopes *downhill* there, $\partial\Delta p_{ch}/\partial G < 0$. The demand curve rises to its local max at $G=600$, falls between $G=600$ and $G=1400$, then rises again past $G=1400$ — so it is downhill **only for $600 < G < 1400$**. Of the three crossings, $G=400$ (before the max, uphill) and $G=1900$ (after the min, uphill) are **stable**; $G=1000$ lies inside the downhill window and is **Ledinegg-unstable**. The range $600<G<1400$ is exactly the **negative-slope (unstable) band**: any steady point that lands there will excursion out to one of the stable branches.

*Check.* Local max then local min in $\Delta p_{ch}(G)$ is the signature of the N; the unstable band is the interval between them, and the middle of three crossings always falls inside it ✓.

**P2** Orifice increment across the segment is $\frac{K}{2\rho_f}(800^2-500^2) = \frac{K}{1480}(3.9\times10^5) = 0.264\,K$ kPa. With $K=30$: $0.264\times30 = 7.9$ kPa. Net change of the *total* demand across the segment:

$$\Delta(\Delta p_{tot}) = -12 + 7.9 = -4.1\ \mathrm{kPa}.$$

Still **negative** — the segment keeps sloping downhill, so $K=30$ does **not** eliminate the instability (it only softens it). You need $K \ge K_{crit}\approx 46$; $K=30$ falls short.

*Check.* $K=30 < 46$, so failure is expected, and the residual $-4.1$ kPa is smaller in magnitude than the un-orificed $-12$ kPa — partial help, not a cure ✓. Units: kPa throughout ✓.

**P3** Transit time:

$$\tau = \frac{L}{u} = \frac{3.6\ \mathrm{m}}{4.5\ \mathrm{m/s}} = 0.80\ \mathrm{s}.$$

Oscillation period $\tau_{osc} \approx 2\tau = 1.6\ \mathrm{s}$, so

$$f = \frac{1}{\tau_{osc}} = \frac{1}{1.6\ \mathrm{s}} \approx 0.63\ \mathrm{Hz}.$$

Yes — sub-Hz, squarely in the $\sim$0.1–1 Hz band where BWR density-wave (and coupled neutronic-density-wave) oscillations live. The period being a small multiple of the coolant transit time is the fingerprint of a density-wave, not a Ledinegg, event.

*Check.* Units: $\mathrm{m}/(\mathrm{m/s}) = \mathrm{s}$ ✓, $1/\mathrm{s} = \mathrm{Hz}$ ✓. A $\sim$0.6 Hz wobble is exactly the timescale a scram-worthy oscillation shows on plant instrumentation, matching the LaSalle-type events ✓.

</details>

## Flashback

**From Lesson 4.1 (Natural circulation and driving head):** A natural-circulation loop has a heated core in the up-leg and a cooler downcomer. Cold-leg water is $\rho_{cold} = 745\ \mathrm{kg/m^3}$, hot-leg water $\rho_{hot} = 712\ \mathrm{kg/m^3}$, and the thermal centers of the heat source and heat sink are separated by a height $H = 7.0\ \mathrm{m}$. Find the buoyancy driving head $\Delta p_{dr}$ (use $g = 9.81\ \mathrm{m/s^2}$). (Fresh variant — new densities and height.)

<details>
<summary>Solution</summary>

The driving head is the weight difference of the two columns over the elevation between source and sink:

$$\Delta p_{dr} = (\rho_{cold} - \rho_{hot})\,g\,H = (745 - 712)\times 9.81 \times 7.0 = 33 \times 9.81 \times 7.0 \approx 2.27\times10^{3}\ \mathrm{Pa} \approx 2.3\ \mathrm{kPa}.$$

*Check.* Units: $\mathrm{(kg\,m^{-3})(m\,s^{-2})(m)} = \mathrm{kg\,m^{-1}s^{-2}} = \mathrm{Pa}$ ✓. A couple of kPa is the right order for natural circulation — roughly 40× smaller than the $\sim$0.1 MPa a pump delivers ([2.5](02-05-pressure-drop-core.md)), which is why natural-circulation loops run at modest flow. As a cross-check on the linearized form, $\rho\beta\Delta T \approx \rho_{cold}-\rho_{hot} = 33\ \mathrm{kg/m^3}$, so $\Delta p_{dr}\approx\rho\beta\Delta T\,gH$ gives the same number ✓.

</details>

## Connections

- **Backward:** the N is inherited straight from [3.5 Two-phase pressure drop](03-05-two-phase-pressure-drop.md) — the two-phase multiplier's climb at low flow is what bends $\Delta p_{ch}(G)$ downhill — and the stabilizing orifice is a single-phase form loss $K\frac{G^2}{2\rho}$ from [2.5](02-05-pressure-drop-core.md). The stakes come from [3.6 CHF/DNB](03-06-critical-heat-flux-dnb.md): a flow excursion is dangerous precisely because it dumps the channel toward dryout.
- **Forward:** density-wave oscillations are only half the BWR story. [4.4 Coupled thermal-hydraulic / neutronic feedback](04-04-coupled-th-neutronic-feedback.md) closes the other half — voids change reactivity ([`reactor-physics` 5.2 Doppler & void coefficients](../../reactor-physics/lessons/05-02-doppler-moderator-void-coefficients.md)), so a density wave becomes a *power* wave, and the two can lock into the coupled neutronic-thermalhydraulic instability that scrammed LaSalle-2.
- **Sideways:** the demand-vs-supply crossing test is the same graphical stability idea as a load line meeting a device curve in electronics, or a fold in a dynamical system's steady-state locus — three fixed points with the middle one unstable is the generic signature of a saddle-node fold, which you'll recognize again in any bistable feedback system.

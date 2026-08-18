# Plasma Physics · Lesson 5.4: Magnetic reconnection & astrophysical plasmas

> ⏱ ~15 min · Module 5: Fusion & astrophysical plasmas · Builds on: [5.3 The solar wind & magnetospheres](05-03-solar-wind-magnetospheres.md), [3.2 The ideal-MHD equations & frozen-in flux](03-02-ideal-mhd-frozen-flux.md) · Unlocks: **course finale** — bridges forward to the [`astrophysics`](../../astrophysics/syllabus.md) course

## Why this matters

Ideal MHD ([3.2](03-02-ideal-mhd-frozen-flux.md)) hands you a beautiful law and an iron prohibition in the same breath: the magnetic field is *frozen* into the plasma, so field lines can be stretched, twisted, and dragged — but never cut, never re-joined, never allowed to change their topology. Yet the Sun does exactly the forbidden thing several times a day. A solar flare dumps up to $10^{25}$ J in minutes; a coronal mass ejection hurls a billion tonnes of plasma at the Earth; a magnetospheric substorm lights the aurora. All of that energy was stored in the magnetic field, and all of it is released by the field re-routing itself into a lower-energy shape. The only way out of the contradiction is that frozen-in must *break* — locally, briefly, violently. That breaking is **magnetic reconnection**, and it is the engine behind space weather, tokamak sawtooth crashes, and the dynamos that keep stars and galaxies magnetized. This lesson closes the course by tracing the arc from one gyrating particle (Module 1) to the magnetic engines of the cosmos.

## The idea

Ideal MHD is an *excellent* approximation almost everywhere, because the magnetic Reynolds number $R_m = \mu_0 u L/\eta$ ([3.2](03-02-ideal-mhd-frozen-flux.md)) is astronomically large when the length scale $L$ is astronomical. The one place the argument fails is where $L$ collapses. Push two regions of **oppositely-directed field** toward each other — say the Sun's convection shoves a new loop up against an old one — and the field can't cancel by superposition, because frozen-in won't let the lines cross. Instead the plasma piles up into a razor-thin boundary layer where the field reverses across a tiny distance. That is a **current sheet** (Ampère's law: a sharp field reversal *is* a sheet of current, $\mathbf{J}=\nabla\times\mathbf{B}/\mu_0$).

Inside that thin layer the gradients are so steep — $\nabla^2\mathbf{B}\sim B/\delta^2$ with $\delta$ tiny — that the resistive diffusion term $\tfrac{\eta}{\mu_0}\nabla^2\mathbf{B}$, utterly negligible in the bulk, suddenly wins. Frozen-in breaks *locally*. The field lines snap and re-join into a new topology, crossing at an **X-point**. And the moment they re-join, the sharply bent reconnected lines are under enormous tension ([3.3](03-03-magnetic-pressure-tension-beta.md)) — like a stretched rubber band released — so they *slingshot* outward, flinging plasma along the sheet at the Alfvén speed and converting the stored magnetic energy into kinetic and thermal energy.

**In words:** anti-parallel field lines, pressed together, form a thin current sheet where the tiny resistivity finally matters; the lines snap and re-join at an X-point, and their tension flings out plasma and dumps magnetic energy. The rest of the lesson is one question — *how fast?* — because the answer decides whether reconnection can explain a flare.

## The formal version

**The current sheet and the X-point.** Two regions carry field $+B\,\hat{\mathbf{x}}$ (above) and $-B\,\hat{\mathbf{x}}$ (below), separated by a sheet of length $L$ (along the flow) and thickness $\delta$ (across the reversal), with $\delta \ll L$. Plasma flows *in* across the two long faces at speed $v_{\mathrm{in}}$ and is ejected *out* the two short ends at speed $v_{\mathrm{out}}$. Three balances pin down the whole flow.

**(1) Mass conservation.** Incompressible steady flow: what comes in the sides goes out the ends,

$$v_{\mathrm{in}}\, L = v_{\mathrm{out}}\, \delta.$$

*In words: the sheet is a funnel — a slow wide inflow becomes a fast narrow outflow, by the sheet's aspect ratio $L/\delta$.*

**(2) Pressure balance sets the outflow speed.** Upstream the magnetic pressure is $B^2/2\mu_0$ ([3.3](03-03-magnetic-pressure-tension-beta.md)); at the sheet the field has vanished, so that pressure is spent accelerating the outflow. Setting the magnetic pressure drop equal to the outflow ram pressure $\tfrac12\rho v_{\mathrm{out}}^2$ (with $\rho$ the mass density):

$$\tfrac12\rho v_{\mathrm{out}}^2 = \frac{B^2}{2\mu_0} \quad\Longrightarrow\quad v_{\mathrm{out}} = \frac{B}{\sqrt{\mu_0\rho}} \equiv v_A.$$

*In words: reconnection outflow always comes out at the Alfvén speed $v_A$ — the magnetic tension is a fixed slingshot, and it hands the plasma exactly the Alfvénic exit speed.*

**(3) Resistive balance sets the inflow speed.** Inside the sheet the field is carried in by the flow and destroyed by diffusion. Steady state means the inflow speed matches the resistive diffusion speed across the thickness, $v_{\mathrm{in}} = \eta/(\mu_0\delta)$. Combine all three (eliminate $\delta$ using (1) and $v_{\mathrm{out}}=v_A$):

$$v_{\mathrm{in}} = \frac{\eta}{\mu_0\delta},\quad \delta = \frac{v_{\mathrm{in}}L}{v_A} \;\Longrightarrow\; v_{\mathrm{in}}^2 = \frac{\eta\, v_A}{\mu_0 L}.$$

Now define the **Lundquist number** — the magnetic Reynolds number built on the Alfvén speed,

$$S \equiv \frac{\mu_0 L v_A}{\eta},$$

so that $\eta/(\mu_0 L) = v_A/S$, and the results collapse to the **Sweet–Parker scalings**:

$$\boxed{\;\frac{v_{\mathrm{in}}}{v_A} = \frac{\delta}{L} = \frac{1}{\sqrt{S}},\qquad \tau_{\mathrm{SP}} = \frac{L}{v_{\mathrm{in}}} = \sqrt{S}\,\frac{L}{v_A} = \sqrt{S}\,\tau_A\;}$$

where $\tau_A = L/v_A$ is the Alfvén crossing time. *In words: reconnection does happen — the outflow is fast ($v_A$) — but the **rate** at which flux is fed in is slow, throttled by $1/\sqrt{S}$, because the sheet has to be thin ($\delta = L/\sqrt{S}$) for resistivity to bite.*

**Why this is a problem.** For the solar corona $S\sim 10^{12}$–$10^{14}$, so $\sqrt{S}\sim 10^6$–$10^7$. Sweet–Parker predicts a flare timescale of *months*, but flares release their energy in *minutes* — Sweet–Parker is too slow by four or five orders of magnitude. The resolution is **fast reconnection**: the Petschek model (standing shocks that shrink the diffusion region), and — the modern answer — the **plasmoid instability** and turbulence, which shred a long thin sheet into a chain of magnetic islands so the effective rate becomes nearly independent of $S$. Exactly *how* nature reconnects fast enough remains one of the central open problems of plasma physics. This is the honest edge of the subject.

## Picture

![An X-point reconnection geometry: grey anti-parallel field lines converge into a coral-shaded current sheet of length L and thickness delta, break and reconnect at a central X-point, and blue outflow jets carry plasma out along the sheet at the Alfven speed](assets/05-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the Sweet–Parker rate and why it's too slow).** Take a coronal flare region with $L = 10^7\,\mathrm{m}$ (a 10-Mm loop), $v_A = 10^6\,\mathrm{m/s}$, and a Lundquist number $S = 10^{12}$. The reconnection inflow speed is

$$v_{\mathrm{in}} = \frac{v_A}{\sqrt{S}} = \frac{10^6}{10^6} = 1\ \mathrm{m/s},$$

a crawl compared with the megametre-per-second outflow. The sheet aspect ratio is $\delta/L = 1/\sqrt{S}=10^{-6}$, so $\delta = 10\,\mathrm{m}$ — a ten-metre-thin sheet inside a ten-thousand-kilometre loop. The reconnection time is

$$\tau_{\mathrm{SP}} = \sqrt{S}\,\frac{L}{v_A} = 10^6 \times \frac{10^7}{10^6} = 10^6\times 10\ \mathrm{s} = 10^7\ \mathrm{s} \approx 4\ \text{months}.$$

Observed flares release their energy in $\sim 10^2$–$10^3\,\mathrm{s}$. Sweet–Parker is too slow by a factor $\sim 10^4$–$10^5$: the mechanism is right (a thin resistive sheet), the rate is wrong. That gap is precisely what fast/Petschek/plasmoid reconnection exists to close.

**Example 2 (why you'd care — where the energy goes, and how much).** Reconnection is an energy converter, and the accounting is clean. The magnetic energy density consumed is $u_B = B^2/2\mu_0$. From pressure balance (2), the outflow kinetic energy density is

$$\tfrac12\rho v_{\mathrm{out}}^2 = \tfrac12\rho v_A^2 = \tfrac12\rho\cdot\frac{B^2}{\mu_0\rho} = \frac{B^2}{2\mu_0} = u_B.$$

*The outflow kinetic energy exactly equals the magnetic energy released* — equipartition. (The remaining stored energy shows up as heat and accelerated particles; observed flares split their budget roughly between bulk flow, thermal plasma, and non-thermal particles.) Now put numbers on a flare: an active-region field $B = 10^{-2}\,\mathrm{T}$ (100 G) over a volume $V\sim(3\times10^7\,\mathrm{m})^3\approx 3\times10^{22}\,\mathrm{m}^3$ releases

$$E \approx \frac{B^2}{2\mu_0}V = \frac{(10^{-2})^2}{2(1.26\times10^{-6})}\,(3\times10^{22}) \approx (40)(3\times10^{22}) \approx 10^{24}\ \mathrm{J},$$

right in the observed range for a large flare ($10^{24}$–$10^{25}\,\mathrm{J}$, i.e. billions of megatons). The *same* mechanism, run in the Earth's magnetotail, powers substorms and the aurora: dayside reconnection ([5.3](05-03-solar-wind-magnetospheres.md)) peels open the magnetosphere and loads flux into the tail, and tail reconnection then releases it, injecting the particles that light the polar sky.

## Watch out

- **You might think a large resistivity is what drives reconnection.** It isn't — $\eta$ is tiny and stays tiny. What changes is the *length scale*: the current sheet makes $\delta$ so small that the **local** $R_m=\mu_0 v_{\mathrm{in}}\delta/\eta$ falls to order unity even though the global $S$ is $10^{12}$. Resistivity was always there; the thin sheet is what finally lets it act. (This is the "thin current sheet" caveat from [3.2](03-02-ideal-mhd-frozen-flux.md)'s Watch-out, made quantitative.)
- **You might think reconnection is slow because the outflow is slow.** Opposite: the outflow screams out at $v_A$. The *inflow* is slow — the rate is throttled by how fast flux can be fed into a sheet that must stay thin. Fast reconnection is about widening or fragmenting the outflow throat, not speeding up the jet.
- **You might think ideal MHD was simply "wrong."** No — it is superbly accurate over $99.99\%$ of the volume. Reconnection is a *singular* correction: an infinitesimal resistivity, acting in an infinitesimally thin layer, changes the global topology and releases energy stored over vast scales. Small cause, enormous effect — the hallmark of a boundary layer.

## One-liner

> Where anti-parallel fields are forced together they build a thin current sheet in which tiny resistivity breaks frozen-in flux; the lines snap, re-join at an X-point, and their tension slingshots plasma out at $v_A$ — Sweet–Parker gives a real but too-slow rate $v_{\mathrm{in}}/v_A = 1/\sqrt{S}$, and beating it is an open problem.

## Problems

**P1 (🟢)** A substorm reconnects field in the Earth's magnetotail current sheet with $L = 10^8\,\mathrm{m}$, $v_A = 10^6\,\mathrm{m/s}$, and Lundquist number $S = 10^{14}$. Find the Sweet–Parker inflow speed $v_{\mathrm{in}}$, the sheet thickness $\delta$, and the reconnection time $\tau_{\mathrm{SP}}$. Compare $\tau_{\mathrm{SP}}$ to the observed substorm onset time of $\sim 10^3\,\mathrm{s}$ and state the conclusion. *Check your $\tau_{\mathrm{SP}}$ against $\sqrt{S}\,\tau_A$.*

**P2 (🟡)** Starting only from magnetic pressure balance, $\tfrac12\rho v_{\mathrm{out}}^2 = B^2/2\mu_0$, (a) show the outflow is Alfvénic, and (b) show that the outflow kinetic energy density equals the magnetic energy density released. (c) For a coronal sheet with $B = 5\times10^{-3}\,\mathrm{T}$ and number density $n = 10^{15}\,\mathrm{m^{-3}}$ of protons ($m_p = 1.67\times10^{-27}\,\mathrm{kg}$), evaluate $v_A$. *Check the units of $v_A$ and confirm your number is a small fraction of $c$.*

**P3 (🔴, optional)** For the coronal case of Example 1 ($L=10^7\,\mathrm{m}$, $S=10^{12}$, so $\delta = 10\,\mathrm{m}$), show that the resistive diffusion time *across the thin sheet*, $\tau_{\mathrm{diff}}(\delta) = \mu_0\delta^2/\eta$, equals one Alfvén crossing time $\tau_A = L/v_A$, whereas diffusion across the full length $L$ would take $S$ times as long. Explain in one sentence why this makes resistivity decisive in the sheet but irrelevant in the bulk.

<details>
<summary>Solutions</summary>

**P1** With $S = 10^{14}$, $\sqrt{S} = 10^7$.

$$v_{\mathrm{in}} = \frac{v_A}{\sqrt{S}} = \frac{10^6}{10^7} = 0.1\ \mathrm{m/s},\qquad \delta = \frac{L}{\sqrt{S}} = \frac{10^8}{10^7} = 10\ \mathrm{m}.$$

The Alfvén time is $\tau_A = L/v_A = 10^8/10^6 = 100\,\mathrm{s}$, so

$$\tau_{\mathrm{SP}} = \sqrt{S}\,\tau_A = 10^7 \times 100 = 10^9\ \mathrm{s} \approx 30\ \text{years}.$$

Observed substorms erupt in $\sim 10^3\,\mathrm{s}$ (tens of minutes), so Sweet–Parker is too slow by a factor $\sim 10^6$. Conclusion: classical Sweet–Parker cannot explain substorm timescales — nature reconnects *fast* (via the plasmoid/tearing instability of the stretched tail sheet).

*Check.* $\tau_{\mathrm{SP}} = \sqrt{S}\,\tau_A = 10^7\times10^2 = 10^9\,\mathrm{s}$ ✓, and $v_{\mathrm{in}}=L/\tau_{\mathrm{SP}}=10^8/10^9=0.1\,\mathrm{m/s}$ ✓ — consistent.

**P2** (a) Solve the pressure balance for $v_{\mathrm{out}}$:

$$\tfrac12\rho v_{\mathrm{out}}^2 = \frac{B^2}{2\mu_0}\;\Longrightarrow\; v_{\mathrm{out}}^2 = \frac{B^2}{\mu_0\rho}\;\Longrightarrow\; v_{\mathrm{out}} = \frac{B}{\sqrt{\mu_0\rho}} = v_A.$$

(b) The outflow kinetic energy density is $\tfrac12\rho v_{\mathrm{out}}^2$, which is *by construction* equal to $B^2/2\mu_0$ — the magnetic energy density that disappeared. So exactly half the consumed magnetic energy reappears as bulk flow; the other half goes to heat and energetic particles (an ideal Sweet–Parker sheet splits it 50/50 between flow and heating).

(c) $\rho = n m_p = 10^{15}\times 1.67\times10^{-27} = 1.67\times10^{-12}\,\mathrm{kg/m^3}$.

$$v_A = \frac{B}{\sqrt{\mu_0\rho}} = \frac{5\times10^{-3}}{\sqrt{(1.26\times10^{-6})(1.67\times10^{-12})}} = \frac{5\times10^{-3}}{\sqrt{2.1\times10^{-18}}} = \frac{5\times10^{-3}}{1.45\times10^{-9}} \approx 3.4\times10^{6}\ \mathrm{m/s}.$$

*Check.* Units: $\mathrm{T}/\sqrt{(\mathrm{T\,m/A})(\mathrm{kg/m^3})}$ reduces to $\mathrm{m/s}$ (recall $\mathrm{T}=\mathrm{kg/(A\,s^2)}$). And $3.4\times10^6\,\mathrm{m/s}\approx 0.01c$ — fast but safely non-relativistic, as coronal Alfvén speeds should be. ✓

**P3** The magnetic diffusivity is $D = \eta/\mu_0$, so a diffusion time over a scale $\ell$ is $\tau_{\mathrm{diff}}(\ell) = \ell^2/D = \mu_0\ell^2/\eta$. Write it using $S = \mu_0 L v_A/\eta$, i.e. $\eta = \mu_0 L v_A/S$:

$$\tau_{\mathrm{diff}}(\ell) = \frac{\mu_0\ell^2}{\eta} = \frac{\mu_0\ell^2 S}{\mu_0 L v_A} = \frac{S\,\ell^2}{L v_A}.$$

Across the sheet, $\ell = \delta = L/\sqrt{S}$, so $\delta^2 = L^2/S$ and

$$\tau_{\mathrm{diff}}(\delta) = \frac{S}{L v_A}\cdot\frac{L^2}{S} = \frac{L}{v_A} = \tau_A.$$

Numerically: $\tau_A = L/v_A = 10^7/10^6 = 10\,\mathrm{s}$, so resistive diffusion crosses the 10-m sheet in $\sim 10\,\mathrm{s}$ — the same as the Alfvénic transit. Across the full length, $\tau_{\mathrm{diff}}(L) = \mu_0 L^2/\eta = S\,\tau_A = 10^{12}\times10 = 10^{13}\,\mathrm{s}$ (300,000 years).

*Check.* The ratio $\tau_{\mathrm{diff}}(L)/\tau_{\mathrm{diff}}(\delta) = (L/\delta)^2 = S = 10^{12}$ ✓. One sentence: because diffusion time scales as $\ell^2$, shrinking the scale from $L$ to $L/\sqrt{S}$ speeds diffusion by $S$, turning a 300,000-year non-event in the bulk into a 10-second reconnection in the sheet — resistivity was never the villain, the thin sheet was the enabler.

</details>

## Flashback

**From Lesson 3.2 (Ideal MHD & frozen-in flux):** A stellar dynamo stretches a magnetic flux tube so its length **doubles** while its plasma is incompressible (volume conserved). Using frozen-in flux, find how the field strength $B$ inside the tube changes, and connect the result to why reconnection is needed *alongside* stretching to sustain a dynamo.

<details>
<summary>Solution</summary>

Frozen-in flux fixes the flux $\Phi = B A$ through the tube's cross-section $A$. Incompressibility fixes the volume $V = A\ell$ with $\ell$ the length. Doubling the length at constant volume halves the cross-section, $A \to A/2$; then constant flux forces

$$B = \frac{\Phi}{A} \;\longrightarrow\; \frac{\Phi}{A/2} = 2B.$$

Stretching the tube **doubles** its field — the stretching-amplifies-$B$ half of a dynamo (the frozen-in compression of [3.2](03-02-ideal-mhd-frozen-flux.md), run as elongation instead of squeezing). But pure stretching just makes ever-longer, ever-stronger, ever-more-tangled tubes; a real dynamo must also *re-organize* that field back into large-scale structure and shed the small-scale tangle — and that topological surgery is exactly what reconnection provides. Stretch-and-reconnect together is how stars and galaxies regenerate their fields.

*Check.* $B\propto 1/A \propto \ell$ at constant volume, so the field grows in proportion to the stretch — the same "$B$ up when the tube thins" scaling as [3.2](03-02-ideal-mhd-frozen-flux.md)'s compression example, here driven by elongation. ✓

</details>

## Connections

- **Backward:** this lesson is the promised *breaking* of [3.2](03-02-ideal-mhd-frozen-flux.md)'s frozen-in flux — the resistive diffusion term $\tfrac{\eta}{\mu_0}\nabla^2\mathbf{B}$, negligible when $R_m$ is large, becomes decisive once a thin current sheet drives the local scale down. The slingshot that ejects the plasma is the **magnetic tension** of [3.3](03-03-magnetic-pressure-tension-beta.md), and the outflow speed is the **Alfvén speed** of [4.3](04-03-em-alfven-waves.md). It reconnects the whole course: one particle's orbit (Module 1) → the fluid and its frozen field (Module 3) → the magnetic engines of space (Module 5).
- **Forward / bridge to [`astrophysics`](../../astrophysics/syllabus.md):** reconnection powers **solar flares and coronal mass ejections**, magnetospheric **substorms and aurorae** (coupled to the solar wind of [5.3](05-03-solar-wind-magnetospheres.md)), tokamak **sawtooth crashes** ([5.2](05-02-magnetic-confinement-tokamaks.md)), and, paired with flux-freezing stretching, the **dynamos** that magnetize stars, disks, and galaxies. Flares, dynamos, and accretion-disk heating are where the [`astrophysics`](../../astrophysics/syllabus.md) course picks up this thread.
- **Sideways:** the current sheet is a **boundary layer** — an infinitesimal diffusivity acting in an infinitesimally thin region to change the global solution, mathematically the same singular-perturbation structure as viscous boundary layers in [`fluid-dynamics`](../../fluid-dynamics/syllabus.md). And the $S$-independent "fast" reconnection rate emerges from the plasmoid/tearing instability — a resistive cousin of the ideal instabilities of [3.5](03-05-mhd-stability-energy-principle.md).

# Aerodynamics · Lesson 2.5: Finite wings — downwash and lifting-line theory

> ⏱ ~15 min · Module 2: Airfoils and finite wings · Builds on: [2.4 Cambered airfoil and aerodynamic centre](02-04-cambered-airfoil-aerodynamic-center.md) · Unlocks: [2.6 Elliptical loading, induced drag and aspect ratio](02-06-elliptical-loading-induced-drag-aspect-ratio.md)

## Why this matters

Everything so far has been two-dimensional — an airfoil of infinite span, with no ends. Real wings have tips, and the tips change everything.

At the tip, the high pressure underneath and the low pressure on top are separated by nothing at all. Air leaks around, spanwise flow develops, and the wing trails a pair of vortices that persist for miles behind it. **Those vortices push air downward at the wing itself**, which tilts the local relative wind, which tilts the lift vector backwards — and a backward component of lift is *drag*.

This is **induced drag**, and it is the price of making lift with a finite object. On an airliner at cruise it is roughly 40% of total drag; on takeoff, most of it. It is why wings are long and thin, why gliders have enormous spans, and why winglets exist.

**This lesson builds the theory; [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md) extracts the numbers.**

## The idea

**A vortex filament cannot end in the fluid.** This is Helmholtz's theorem, and it is a direct consequence of $\nabla\cdot\boldsymbol{\omega} = 0$ — vorticity is divergence-free, so its "field lines" close on themselves or end on a boundary. The bound vortex representing the wing therefore *cannot* simply stop at the tips.

**So it turns downstream.** The bound vortex bends at each tip and trails away behind the aircraft, closing far downstream through the starting vortex of [2.1](02-01-airfoil-geometry-kutta-condition.md). The result is a closed **vortex ring** — bound segment, two trailing legs, starting segment — of which the aircraft carries the front edge with it forever.

**One horseshoe is too crude.** A single horseshoe implies uniform loading across the span, which would require the lift to drop discontinuously to zero at the tips. Real loading tapers smoothly, so the bound circulation $\Gamma(y)$ varies along the span — and wherever $\Gamma$ changes, the difference must be shed.

**Hence a continuous sheet.** Between $y$ and $y+dy$ the bound circulation changes by $(d\Gamma/dy)dy$, and exactly that much vorticity trails downstream. The wake is not two discrete vortices but a **sheet** of strength $d\Gamma/dy$, which subsequently rolls up into the two visible tip vortices some distance behind.

**The sheet blows downward on the wing.** Every element of the trailing sheet induces a downward velocity at every station on the wing, by Biot–Savart. The total is the **downwash** $w(y)$.

**Downwash tilts the wind, and tilting the wind tilts the lift.** The section at station $y$ does not see the free stream; it sees a flow inclined downward by the **induced angle** $\alpha_i = w/V_\infty$. Its lift is perpendicular to *that* flow, hence tilted back from vertical by $\alpha_i$ — and the backward component is induced drag. **The section is still doing perfect frictionless 2-D aerodynamics; the wing as a whole is nonetheless dragging.**

**Then close the loop.** The section's lift determines $\Gamma(y)$; $\Gamma(y)$ determines the shed vorticity; the shed vorticity determines the downwash; the downwash determines the section's effective angle, which determines its lift. That circularity, written out, is **Prandtl's lifting-line equation**.

## The formal version

**Helmholtz's vortex theorems.** (i) The strength of a vortex filament is constant along its length. (ii) A filament cannot end in the fluid — it must close, extend to infinity, or end on a boundary. (iii) Fluid elements initially irrotational stay irrotational.

**Trailing-sheet strength.** If the bound circulation is $\Gamma(y)$, the trailing sheet has strength per unit span

$$\boxed{\;\gamma_{\rm trail}(y) = -\frac{d\Gamma}{dy}.\;}$$

**Downwash by Biot–Savart.** A semi-infinite trailing filament of strength $d\Gamma$ at spanwise station $y$ induces at station $y_0$ on the lifting line a downward velocity $d\Gamma/[4\pi(y_0-y)]$, so

$$\boxed{\;w(y_0) = \frac{1}{4\pi}\int_{-b/2}^{b/2}\frac{(d\Gamma/dy)\,dy}{y_0-y}\;}$$

(principal value). **The factor $4\pi$ rather than $2\pi$ is because the filament is semi-infinite** — it extends only downstream, so it contributes half what a doubly infinite line vortex would.

**Induced and effective angles.**

$$\boxed{\;\alpha_i(y_0) = \frac{w(y_0)}{V_\infty}, \qquad \alpha_{\rm eff}(y_0) = \alpha(y_0)-\alpha_i(y_0).\;}$$

**Induced drag.** The section lift $L' = \rho_\infty V_\infty\Gamma$ acts perpendicular to the *local* wind, hence at $\alpha_i$ to the vertical:

$$\boxed{\;D_i' = L'\sin\alpha_i\approx L'\alpha_i = \rho_\infty V_\infty\Gamma(y)\,\alpha_i(y).\;}$$

*In words: induced drag is the component of lift that got tilted backwards.*

**Prandtl's lifting-line equation.** Apply the 2-D result $c_l = a_0(\alpha_{\rm eff}-\alpha_{L=0})$ at each station, with $c_l = 2\Gamma/(V_\infty c)$ from Kutta–Joukowski, and substitute:

$$\boxed{\;\alpha(y_0) = \frac{\Gamma(y_0)}{\pi V_\infty c(y_0)}+\alpha_{L=0}(y_0)+\frac{1}{4\pi V_\infty}\int_{-b/2}^{b/2}\frac{(d\Gamma/dy)\,dy}{y_0-y}\;}$$

(for $a_0 = 2\pi$). *In words: the geometric angle at each station equals the angle the section needs to make its share of the lift, plus its zero-lift angle, plus the angle the rest of the wing has stolen through downwash.*

**This is an integro-differential equation for $\Gamma(y)$** — the unknown appears inside an integral and as a derivative under it. Everything else in the equation is wing geometry.

**The Fourier substitution.** Exactly as in [2.2](02-02-vortex-sheet-thin-airfoil-equation.md), but spanwise:

$$y = -\frac{b}{2}\cos\theta, \qquad \Gamma(\theta) = 2bV_\infty\sum_{n=1}^{N}A_n\sin n\theta,$$

with $\theta = 0$ at the left tip, $\pi$ at the right. Each term vanishes at both tips automatically, as $\Gamma$ must. [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md) solves for the $A_n$.

**Wing planform parameters.**

$$S = \int_{-b/2}^{b/2}c(y)\,dy, \qquad \boxed{\;AR = \frac{b^2}{S}\;}$$

— the **aspect ratio**, the single most important number describing a wing's efficiency.

## Picture

![A two-panel figure. Left panel: a three-dimensional sketch of a finite wing seen from behind and above, with a curved spanwise circulation distribution Gamma of y drawn above the wing peaking at the centreline and falling to zero at both tips; a fan of small trailing filaments leaves the trailing edge along the whole span, with density proportional to the local slope of Gamma, and these roll up into two large counter-rotating tip vortices behind the wing. Small downward arrows between the tips indicate downwash at the wing, and upward arrows outboard of the tips indicate upwash. Right panel: the velocity triangle at a single wing section, showing the free stream V infinity arriving horizontally, the induced downwash w added vertically downward, their resultant the local relative wind inclined downward by the induced angle alpha sub i, the section lift drawn perpendicular to that local wind and therefore tilted backwards from vertical, and its two components resolved along and perpendicular to the free stream — labelled lift and induced drag — with the annotation the drag is lift, pointing the wrong way.](assets/02-05-fig1.svg)

Left: the wake is a sheet, not two lines — the two lines are what the sheet rolls up into. Note the upwash outside the tips: that is why formation flight saves fuel, and why a following aircraft must avoid the region between them.

Right: the entire origin of induced drag, in one triangle. Nothing here involves viscosity.

## Worked examples

**Example 1 (a single horseshoe, and why it fails at the tips).** A horseshoe vortex of strength $\Gamma = 50$ m²/s spans $b = 10$ m in a stream of $V_\infty = 60$ m/s.

*Downwash at the centre.* Each trailing leg is semi-infinite and lies a distance $b/2$ away, so each contributes $\Gamma/[4\pi(b/2)] = \Gamma/(2\pi b)$, and together

$$w(0) = \frac{\Gamma}{\pi b} = \frac{50}{\pi(10)} = 1.5915\ \mathrm{m/s}.$$

$$\alpha_i = \frac{w}{V_\infty} = \frac{1.5915}{60} = 0.026526\ \mathrm{rad} = 1.520°.$$

**A degree and a half of the wing's incidence has been eaten by its own wake** — modest, but not negligible when the whole operating range is perhaps ten degrees.

*Downwash at a general station.* Summing the two legs at distances $b/2\mp y_0$:

$$w(y_0) = \frac{\Gamma}{4\pi}\left[\frac{1}{b/2-y_0}+\frac{1}{b/2+y_0}\right] = \frac{\Gamma}{4\pi}\cdot\frac{b}{(b/2)^2-y_0^2}.$$

**This diverges as $y_0\to\pm b/2$.** At the tip the model predicts infinite downwash, infinite induced angle, and a section flying at large negative effective incidence.

*Why the model breaks.* A single horseshoe means $\Gamma$ is *constant* across the span and then drops abruptly to zero at the tips — an infinitely concentrated shed vortex sitting exactly on the wing. A real wing's $\Gamma$ tapers smoothly to zero, spreading the shed vorticity over the whole span, and the resulting downwash is finite everywhere.

**The fix is the lifting line: replace one horseshoe by a continuum of them.** This is exactly the move of [2.2](02-02-vortex-sheet-thin-airfoil-equation.md) — one vortex became a sheet — performed in the spanwise direction instead of the chordwise one.

**Example 2 (elliptic loading gives constant downwash).** Take the elliptic circulation distribution

$$\Gamma(y) = \Gamma_0\sqrt{1-\left(\frac{2y}{b}\right)^2},$$

with $\Gamma_0 = 45$ m²/s on a span $b = 12$ m at $V_\infty = 70$ m/s.

*In $\theta$.* With $y = -\tfrac{b}{2}\cos\theta$, the square root becomes $\sqrt{1-\cos^2\theta} = \sin\theta$, so

$$\Gamma(\theta) = \Gamma_0\sin\theta$$

— **the elliptic distribution is precisely the first term of the Fourier series**, which is why it plays the role that the flat plate played in [2.3](02-03-symmetric-thin-airfoil.md).

*The downwash.* Change variables in the Biot–Savart integral. Since $d\Gamma = \Gamma_0\cos\theta\,d\theta$ and $y_0-y = \tfrac{b}{2}(\cos\theta-\cos\theta_0)$,

$$w(\theta_0) = \frac{1}{4\pi}\int_0^\pi\frac{\Gamma_0\cos\theta\,d\theta}{\tfrac{b}{2}(\cos\theta-\cos\theta_0)} = \frac{\Gamma_0}{2\pi b}\int_0^\pi\frac{\cos\theta}{\cos\theta-\cos\theta_0}\,d\theta.$$

**That integral is Glauert's, with $n = 1$** — the same identity that produced $c_l = 2\pi\alpha$ in [2.2](02-02-vortex-sheet-thin-airfoil-equation.md) — and it equals $\pi\sin\theta_0/\sin\theta_0 = \pi$, independent of $\theta_0$. Hence

$$\boxed{\;w = \frac{\Gamma_0}{2b}\quad\text{— the same at every station.}\;}$$

*(Numerically confirmed: evaluating the integral at $\theta_0 = 30°,\ 60°,\ 90°,\ 150°$ gives $1.875000$ m/s in every case, against $\Gamma_0/(2b) = 45/24 = 1.875$ m/s.)*

*The numbers.*

$$w = 1.875\ \mathrm{m/s}, \qquad \alpha_i = \frac{1.875}{70} = 0.026786\ \mathrm{rad} = 1.535°,\ \text{uniform across the span}.$$

*Total lift.*

$$L = \rho_\infty V_\infty\int_{-b/2}^{b/2}\Gamma\,dy = \rho_\infty V_\infty\Gamma_0\frac{\pi b}{4} = 1.225(70)(45)\frac{\pi(12)}{4} = 1.225(70)(424.12) = 36{,}368\ \mathrm{N},$$

using $\int\Gamma\,dy = \Gamma_0\pi b/4$ (the area of a half-ellipse of semi-axes $b/2$ and $\Gamma_0$).

*And with a chord.* If the wing has $c = 1.5$ m, then $S = 18$ m², $AR = b^2/S = 144/18 = 8.00$, $q_\infty = 3001$ Pa, and

$$C_L = \frac{L}{q_\infty S} = \frac{36{,}368}{3001(18)} = 0.6732.$$

*The check that matters.*

$$\frac{C_L}{\pi AR} = \frac{0.6732}{\pi(8)} = 0.026786\ \mathrm{rad} = \alpha_i \quad\checkmark$$

**The induced angle equals $C_L/(\pi AR)$ exactly** — computed here two entirely different ways, once from Biot–Savart and once from the lift and planform. That identity is the whole of [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md) in embryo, and the induced drag follows immediately:

$$C_{D,i} = C_L\alpha_i = \frac{C_L^2}{\pi AR} = \frac{0.6732^2}{\pi(8)} = 0.01803, \qquad D_i = 974\ \mathrm{N}.$$

*Why constant downwash is special.* Uniform $\alpha_i$ means every section is tilted back by the same angle, so the drag penalty is distributed as evenly as it can be. Any other distribution concentrates downwash somewhere and — for the same total lift — produces more drag. **Elliptic loading is the minimum-induced-drag distribution**, proved in [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md), and this constancy is why.

## Watch out

- **You might use $2\pi$ instead of $4\pi$ in the downwash integral.** The trailing filaments are *semi*-infinite, giving half the induced velocity of a full line vortex.
- **You might think induced drag is a viscous effect.** It is entirely inviscid. It survives in a perfect fluid, which is why d'Alembert's paradox applies only in two dimensions.
- **You might confuse $\alpha$, $\alpha_{\rm eff}$, and $\alpha_{L=0}$.** Geometric, effective, and zero-lift; $\alpha_{\rm eff} = \alpha-\alpha_i$ and the section responds to $\alpha_{\rm eff}-\alpha_{L=0}$.
- **You might expect downwash only behind the wing.** At the lifting line itself the downwash is half its far-downstream value — the trailing legs there are semi-infinite, but far behind they are effectively doubly infinite.
- **You might apply lifting-line theory to a low-aspect-ratio or highly swept wing.** It assumes the wing is long and thin and the wake leaves straight back. Below about $AR = 4$, or with much sweep, it fails and you need lifting-*surface* methods.
- **You might forget the upwash outside the tips.** It is real, it is why birds fly in V-formation, and it is the reason a wake encounter can roll an aircraft.

## One-liner

> A finite wing cannot let its bound vortex simply stop at the tips, so it trails a sheet of vorticity that blows downward on the wing itself, tilting the local wind and hence the lift vector backwards — and Prandtl's lifting-line equation is the statement that the wing's own downwash and its own loading must be mutually consistent.

## Problems

**P1 (🟢)** A horseshoe vortex of strength $\Gamma = 80$ m²/s spans $b = 16$ m at $V_\infty = 55$ m/s at sea level. (a) Find the downwash at the centre of the bound vortex. (b) Find the induced angle in degrees. (c) Find the lift per unit span at the centre. (d) State the Helmholtz theorem that forbids the bound vortex from ending at the tips.

**P2 (🟡)** A wing of span $b = 15$ m carries elliptic loading with $\Gamma_0 = 60$ m²/s at $V_\infty = 80$ m/s at sea level. Its area is $S = 25$ m². (a) Find the total lift and $C_L$. (b) Find the aspect ratio, the downwash, and the induced angle. (c) Find the induced drag coefficient and the induced drag force. (d) If the sections have $\alpha_{L=0} = -2°$ and $a_0 = 2\pi$, find the geometric angle of attack required at mid-span.

**P3 (🔴)** A single horseshoe vortex of strength $\Gamma = 60$ m²/s spans $b = 14$ m at $V_\infty = 50$ m/s. (a) Derive $w(y_0)$ along the bound vortex and evaluate it at $y_0 = 0,\ 4,\ 6,$ and $6.9$ m. (b) Convert each to an induced angle in degrees. (c) Explain what goes wrong at the tips and why the model produces it. (d) An elliptically loaded wing of the same span carries the same total lift. Find its $\Gamma_0$, its uniform downwash, and its induced angle, and compare with the horseshoe's centre value. Which model would you trust for computing induced drag, and why?

<details>
<summary>Solutions</summary>

**P1** (a) $$w(0) = \frac{\Gamma}{\pi b} = \frac{80}{\pi(16)} = \frac{80}{50.265} = 1.5915\ \mathrm{m/s}.$$

(b) $$\alpha_i = \frac{w}{V_\infty} = \frac{1.5915}{55} = 0.028937\ \mathrm{rad} = 1.658°.$$

(c) $$L' = \rho_\infty V_\infty\Gamma = 1.225(55)(80) = 5390\ \mathrm{N/m}.$$

(d) **Helmholtz's second theorem:** a vortex filament cannot end in the fluid — it must form a closed loop, extend to the boundaries of the fluid, or extend to infinity. It follows from $\nabla\cdot\boldsymbol\omega = 0$: since vorticity is the curl of a vector field it is divergence-free, so its field lines have no sources or sinks.

Consequently the bound vortex turns downstream at each tip and trails away, closing far behind through the starting vortex.

**P2** (a) $$\int_{-b/2}^{b/2}\Gamma\,dy = \Gamma_0\frac{\pi b}{4} = 60\frac{\pi(15)}{4} = 60(11.781) = 706.86\ \mathrm{m^3/s}.$$

$$L = \rho_\infty V_\infty(706.86) = 1.225(80)(706.86) = 69{,}272\ \mathrm{N} = 69.3\ \mathrm{kN}.$$

$$q_\infty = \tfrac12(1.225)(80)^2 = 3920\ \mathrm{Pa}, \qquad C_L = \frac{69{,}272}{3920(25)} = \frac{69{,}272}{98{,}000} = 0.7069.$$

(b) $$AR = \frac{b^2}{S} = \frac{225}{25} = 9.00.$$

$$w = \frac{\Gamma_0}{2b} = \frac{60}{30} = 2.00\ \mathrm{m/s},$$

$$\alpha_i = \frac{2.00}{80} = 0.02500\ \mathrm{rad} = 1.432°.$$

*Check against the planform formula:* $C_L/(\pi AR) = 0.7069/(\pi\cdot9) = 0.7069/28.274 = 0.025002$ ✓

(c) $$C_{D,i} = \frac{C_L^2}{\pi AR} = \frac{0.7069^2}{28.274} = \frac{0.49971}{28.274} = 0.017671.$$

$$D_i = C_{D,i}q_\infty S = 0.017671(3920)(25) = 1732\ \mathrm{N}.$$

*As a fraction of lift:* $D_i/L = 1732/69{,}272 = 0.0250 = \alpha_i$ ✓ — exactly the induced angle, as the tilted-lift picture requires.

(d) At mid-span ($y = 0$, $\theta = \pi/2$), the local circulation is $\Gamma_0 = 60$ m²/s, so with the local chord $c_0$ found from the elliptic planform ($c_0 = 4S/(\pi b) = 100/(\pi\cdot15) = 2.1221$ m):

$$c_l(0) = \frac{2\Gamma_0}{V_\infty c_0} = \frac{2(60)}{80(2.1221)} = \frac{120}{169.77} = 0.70686.$$

*(Equal to $C_L$, as it must be — elliptic loading on an elliptic planform gives the same $c_l$ at every station.)*

$$\alpha_{\rm eff} = \alpha_{L=0}+\frac{c_l}{a_0} = -2°+\frac{0.70686}{2\pi}\ \mathrm{rad} = -2°+0.11250\ \mathrm{rad} = -2°+6.446° = 4.446°.$$

$$\alpha = \alpha_{\rm eff}+\alpha_i = 4.446°+1.432° = 5.878°.$$

**The wing must be set at $5.88°$ to achieve what a 2-D section would achieve at $4.45°$** — the extra $1.43°$ is pure tax on being finite.

**P3** (a) The two trailing legs are semi-infinite, at distances $b/2-y_0$ and $b/2+y_0$:

$$w(y_0) = \frac{\Gamma}{4\pi}\left[\frac{1}{b/2-y_0}+\frac{1}{b/2+y_0}\right] = \frac{\Gamma}{4\pi}\cdot\frac{b}{(b/2)^2-y_0^2} = \frac{\Gamma b}{4\pi\left(49-y_0^2\right)}$$

for $b = 14$. With $\Gamma b/(4\pi) = 60(14)/(4\pi) = 840/12.566 = 66.845$:

| $y_0$ (m) | $49-y_0^2$ | $w$ (m/s) |
|---|---|---|
| 0 | 49 | 1.3642 |
| 4 | 33 | 2.0256 |
| 6 | 13 | 5.1419 |
| 6.9 | 1.39 | 48.09 |

*(Check the centre value against the simple formula: $\Gamma/(\pi b) = 60/(\pi\cdot14) = 1.3642$ ✓)*

(b) $$\alpha_i = \frac{w}{50}:$$

| $y_0$ (m) | $\alpha_i$ (rad) | $\alpha_i$ (deg) |
|---|---|---|
| 0 | 0.027284 | $1.563°$ |
| 4 | 0.040512 | $2.321°$ |
| 6 | 0.102838 | $5.892°$ |
| 6.9 | 0.96181 | $55.1°$ |

(c) *What goes wrong.* As $y_0\to b/2$ the downwash diverges, and by $y_0 = 6.9$ m the model claims an induced angle of $55°$ — larger than any angle at which an airfoil functions, and larger than the small-angle approximation $\alpha_i = w/V_\infty$ can even represent. Physically it says the outboard sections are flying at large negative effective incidence and generating *negative* lift, which contradicts the assumption of uniform $\Gamma$ that the model started from.

*Why the model produces it.* A single horseshoe means $\Gamma(y) = $ constant across the span and zero outside it — a step discontinuity at each tip. The shed vorticity is $-d\Gamma/dy$, and the derivative of a step is a **delta function**: all of the wing's shed vorticity is concentrated into two infinitely thin filaments sitting exactly at $y = \pm b/2$, on the lifting line itself. A point vortex has infinite induced velocity at its own location, and $y_0\to b/2$ approaches it.

**The model is self-inconsistent, not merely inaccurate.** It assumes a loading that requires a downwash that would destroy that loading.

*The fix.* Let $\Gamma(y)$ taper smoothly to zero at the tips. Then $d\Gamma/dy$ is finite everywhere, the shed vorticity is spread as a continuous sheet across the whole span, and the downwash integral converges. That is the lifting line.

(d) *Matching the lift.* The horseshoe carries $L = \rho V_\infty\Gamma b$ (uniform $\Gamma$ over span $b$):

$$L = 1.225(50)(60)(14) = 51{,}450\ \mathrm{N}.$$

For the elliptic wing, $L = \rho V_\infty\Gamma_0\pi b/4$, so

$$\Gamma_0 = \frac{4\Gamma b}{\pi b} = \frac{4\Gamma}{\pi} = \frac{4(60)}{\pi} = 76.394\ \mathrm{m^2/s}.$$

*Check:* $1.225(50)(76.394)\pi(14)/4 = 1.225(50)(76.394)(10.996) = 51{,}450$ N ✓

*Its downwash and induced angle.*

$$w = \frac{\Gamma_0}{2b} = \frac{76.394}{28} = 2.7284\ \mathrm{m/s}, \qquad \alpha_i = \frac{2.7284}{50} = 0.054567\ \mathrm{rad} = 3.126°,$$

**uniform across the entire span.**

*Comparison.* The horseshoe's centre value was $1.563°$, exactly **half** the elliptic wing's uniform $3.126°$. (Not a coincidence: $w_{\rm horseshoe}(0) = \Gamma/(\pi b)$ and $w_{\rm elliptic} = \Gamma_0/(2b) = 2\Gamma/(\pi b)$ once the lifts are matched.) But the horseshoe's *average* over the span is much larger than its centre value — and formally infinite, since the integral of $1/((b/2)^2-y_0^2)$ diverges.

*Which to trust.* **The elliptic model, without hesitation.** Three reasons:

**It is self-consistent.** Its downwash is finite everywhere, and the loading it assumes is compatible with the downwash it produces.

**Its total is meaningful.** Induced drag is $\int\rho V_\infty\Gamma\alpha_i\,dy$; the horseshoe's integrand diverges at both tips, so it does not predict an induced drag at all — not a wrong one, none.

**It matches reality.** Measured spanwise loadings on unswept wings are close to elliptic, and measured induced drag matches $C_L^2/(\pi eAR)$ with $e$ between about 0.85 and 1.0.

*What the horseshoe is still good for.* It is the correct picture of the wake's *topology* — a closed vortex ring — and the right tool for far-field questions such as wake-encounter separation standards, where the sheet has long since rolled up into two discrete vortices and the details of the loading no longer matter. **Use it for the wake, not for the wing.**

</details>

## Flashback

**From Lesson 2.4 (The cambered airfoil and the aerodynamic centre):** A parabolic-arc camber line has maximum camber $\varepsilon = 0.025$ at mid-chord. (a) Find $A_1$, $\alpha_{L=0}$, and $c_{m,c/4}$. (b) Find $c_l$ at $\alpha = 4°$. (c) Find $x_{cp}/c$ there. (d) The same section is now used on a finite wing where the local induced angle is $1.6°$. What lift coefficient does the section actually produce at a geometric angle of $4°$?

<details>
<summary>Solution</summary>

(a) For parabolic camber, $dz_c/dx = 4\varepsilon\cos\theta$, so

$$A_1 = 4\varepsilon = 0.100, \qquad A_2 = 0,$$

$$\alpha_{L=0} = -2\varepsilon = -0.050\ \mathrm{rad} = -2.865°,$$

$$c_{m,c/4} = \frac{\pi}{4}(A_2-A_1) = -\pi\varepsilon = -0.078540.$$

(b) $$\alpha-\alpha_{L=0} = 4°+2.865° = 6.865° = 0.119821\ \mathrm{rad},$$
$$c_l = 2\pi(0.119821) = 0.75281.$$

(c) $$\frac{x_{cp}}{c} = \frac14-\frac{c_{m,c/4}}{c_l} = 0.25+\frac{0.078540}{0.75281} = 0.25+0.10433 = 0.3543.$$

(d) The section responds to the **effective** angle:

$$\alpha_{\rm eff} = \alpha-\alpha_i = 4°-1.6° = 2.4°,$$

$$c_l = 2\pi\left(2.4°+2.865°\right)\frac{\pi}{180} = 2\pi(0.091893) = 0.57735.$$

**A 23% loss of section lift**, from an induced angle of only $1.6°$.

*Reading the connection between the two lessons.* [2.4](02-04-cambered-airfoil-aerodynamic-center.md) said the lift curve is $c_l = 2\pi(\alpha-\alpha_{L=0})$, with camber controlling where it crosses zero. This lesson adds that on a *finite* wing the abscissa of that curve is not the angle you set — it is the angle you set minus the angle your own wake steals.

**So there are now two independent shifts of the same straight line:** camber moves it left by $\alpha_{L=0}$ (a gift), and downwash moves it right by $\alpha_i$ (a tax). Here they nearly cancel: $-2.865°+1.6° = -1.265°$, so this finite wing behaves like a 2-D section with only $1.27°$ of effective camber.

*And the moment is untouched.* $c_{m,c/4} = -\pi\varepsilon$ is a property of the camber line alone; downwash does not change it, because tilting the local wind by $1.6°$ tilts the force but not the couple, to first order. **Camber's trim penalty is paid in full whether or not the wing is efficient at collecting the lift.**

</details>

## Connections

- **Backward:** the bound vortex and its starting vortex are [2.1](02-01-airfoil-geometry-kutta-condition.md)'s; the section relation $c_l = a_0(\alpha_{\rm eff}-\alpha_{L=0})$ substituted at each station is [2.4](02-04-cambered-airfoil-aerodynamic-center.md)'s; the Glauert integral that made the elliptic downwash constant is [2.2](02-02-vortex-sheet-thin-airfoil-equation.md)'s; Helmholtz's theorems and $\nabla\cdot\boldsymbol\omega = 0$ come from [`fluid-dynamics` 2.2](../../fluid-dynamics/lessons/02-02-vorticity-circulation.md).
- **Forward:** [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md) solves the lifting-line equation in Fourier modes and extracts $C_{D,i} = C_L^2/(\pi eAR)$; [3.3](03-03-separation-stall-drag-polar.md) adds induced drag to the viscous terms to build the full drag polar; [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md) shows why the whole picture must be rebuilt above $M = 1$.
- **Sideways:** the Biot–Savart law used here is *literally* the magnetostatic Biot–Savart law of [`em-refresher`](../../em-refresher/syllabus.md), with vorticity in place of current density — $\nabla\times\mathbf{u} = \boldsymbol\omega$ and $\nabla\times\mathbf{B} = \mu_0\mathbf{J}$ are the same equation, so a vortex filament and a current-carrying wire have identical fields. Helmholtz's "a filament cannot end" is $\nabla\cdot\boldsymbol\omega = 0$, the exact counterpart of "there are no magnetic monopoles."

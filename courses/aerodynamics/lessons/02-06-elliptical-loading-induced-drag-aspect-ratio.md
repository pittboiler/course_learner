# Aerodynamics · Lesson 2.6: Elliptical loading, induced drag, and aspect ratio

> ⏱ ~15 min · Module 2: Airfoils and finite wings · Builds on: [2.5 Finite wings: downwash and lifting-line theory](02-05-finite-wings-downwash-lifting-line.md) · Unlocks: [3.3 Separation, stall, and the drag polar](03-03-separation-stall-drag-polar.md)

## Why this matters

One formula comes out of this lesson and it governs aircraft design:

$$C_{D,i} = \frac{C_L^2}{\pi e\,AR}.$$

Read it slowly. Induced drag grows as the **square** of lift coefficient — so it dominates when flying slowly, heavily, or in a turn. It falls as $1/AR$ — so long thin wings are efficient and short stubby ones are not. And $e\leq1$ with equality only for elliptic loading — so there is a best possible spanwise lift distribution, and everything else is a penalty.

**These three facts explain the shape of nearly every aircraft ever built.** A glider has $AR = 30$ because its whole job is to minimize $C_{D,i}$ at high $C_L$. A fighter has $AR = 3$ because it needs to survive supersonic flight and roll fast, and accepts terrible induced drag in exchange. An airliner sits between, at $AR\approx9$, with winglets bolted on to buy back a little more.

## The idea

**Solve the lifting-line equation in Fourier modes.** [2.5](02-05-finite-wings-downwash-lifting-line.md) set up the substitution $y = -\tfrac{b}{2}\cos\theta$ and $\Gamma = 2bV_\infty\sum A_n\sin n\theta$. Feeding it through Glauert's integral turns the integro-differential equation into a set of algebraic equations for the $A_n$ — solvable exactly for special planforms and numerically in a few lines for any planform.

**Only $A_1$ makes lift.** Integrating $\Gamma$ across the span, every mode with $n\geq2$ integrates to zero: those modes move lift from one part of the span to another without changing the total. So $C_L$ depends on $A_1$ alone.

**But every mode makes drag.** The induced drag is a *quadratic* functional — it involves the product of the loading and the downwash it generates, and quadratic forms do not kill the higher modes. Instead each contributes $nA_n^2$, positive-definite.

**So the minimum-drag distribution is the one with no higher modes at all** — the pure $A_1\sin\theta$, which is exactly the elliptic distribution. Any deviation from elliptic adds drag while contributing nothing to lift. **That is the entire optimality proof, and it takes one line once the algebra is set up.**

**Then a second penalty appears, on lift.** Downwash reduces the effective angle of attack at every station, so a finite wing needs more geometric incidence than a 2-D section for the same lift. The lift-curve slope falls from $a_0$ to something smaller, and it falls further the shorter the wing.

**Aspect ratio governs both effects.** More span for the same area means the trailing vortices are further apart, so they induce less downwash, so both penalties shrink. **Span is what matters, not area** — a fact that has driven wing design since Prandtl.

## The formal version

**The Fourier solution.**

$$\Gamma(\theta) = 2bV_\infty\sum_{n=1}^{\infty}A_n\sin n\theta, \qquad y = -\frac{b}{2}\cos\theta.$$

Substituting into the downwash integral and applying Glauert's identity mode by mode:

$$\boxed{\;\alpha_i(\theta_0) = \sum_{n=1}^\infty nA_n\frac{\sin n\theta_0}{\sin\theta_0}.\;}$$

**Note $n = 1$ alone gives $\alpha_i = A_1$, a constant** — the elliptic result of [2.5](02-05-finite-wings-downwash-lifting-line.md), recovered.

**Lift.**

$$C_L = \frac{2}{V_\infty S}\int_{-b/2}^{b/2}\Gamma\,dy = \frac{2b^2}{S}\sum A_n\int_0^\pi\sin n\theta\sin\theta\,d\theta = \frac{2b^2}{S}A_1\frac{\pi}{2},$$

$$\boxed{\;C_L = \pi\,AR\,A_1.\;}$$

**Only $A_1$**, because $\int_0^\pi\sin n\theta\sin\theta\,d\theta = 0$ for $n\neq1$ by orthogonality.

**Induced drag.**

$$C_{D,i} = \frac{2}{V_\infty S}\int_{-b/2}^{b/2}\Gamma\alpha_i\,dy = \pi\,AR\sum_{n=1}^\infty nA_n^2,$$

$$\boxed{\;C_{D,i} = \pi\,AR\,A_1^2\left(1+\delta\right) = \frac{C_L^2}{\pi\,AR}\left(1+\delta\right), \qquad \delta = \sum_{n=2}^\infty n\left(\frac{A_n}{A_1}\right)^2\geq0.\;}$$

**Span efficiency factor.** Define $e = 1/(1+\delta)$:

$$\boxed{\;C_{D,i} = \frac{C_L^2}{\pi e\,AR}, \qquad 0<e\leq1.\;}$$

**$e = 1$ if and only if every $A_n = 0$ for $n\geq2$** — that is, elliptic loading. *In words: elliptic loading is the unique minimum-induced-drag distribution for a given lift and span.*

Typical values: $e\approx0.85$–$0.95$ for a straight tapered wing, $e\approx1.0$ for an elliptic planform, lower for a swept or heavily flapped wing.

**Finite-wing lift-curve slope.** From $\alpha = \alpha_{\rm eff}+\alpha_i$, $C_L = a_0(\alpha_{\rm eff}-\alpha_{L=0})$, and $\alpha_i = C_L/(\pi e_1AR)$:

$$\boxed{\;a = \frac{dC_L}{d\alpha} = \frac{a_0}{1+\dfrac{a_0}{\pi e_1AR}}.\;}$$

Here $e_1$ is a *lift*-slope efficiency factor, close to but not identical to $e$; taking $e_1 = e$ is standard practice and accurate enough. For $a_0 = 2\pi$ and $e_1 = 1$ this reduces to the memorable form

$$a = \frac{2\pi\,AR}{AR+2}.$$

**Elliptic planform gives elliptic loading.** For an untwisted wing of constant section, elliptic *chord* distribution $c(y) = c_0\sqrt{1-(2y/b)^2}$ produces elliptic *loading* exactly. This is the Spitfire's wing, and it is why.

## Picture

![A two-panel figure. Left panel: spanwise lift distributions compared. Three curves of local lift coefficient times chord plotted against spanwise position from tip to tip, all enclosing the same total area: a smooth elliptic half-ellipse labelled e equals one, minimum drag; a slightly fuller rectangular-planform curve that stays high further outboard before dropping steeply near the tip, labelled e about 0.88; and a more triangular highly tapered curve that peaks inboard, labelled e about 0.90. Below the curves, a small inset shows the corresponding induced angle across the span — flat for the elliptic case, and varying for the others, with the annotation uniform downwash is what makes elliptic optimal. Right panel: induced drag coefficient plotted against aspect ratio at a fixed lift coefficient of 0.8, a hyperbola falling steeply from about 0.034 at aspect ratio six to about 0.007 at aspect ratio thirty, with three aircraft marked on the curve — a fighter at aspect ratio three, an airliner at nine, and a sailplane at thirty — and a second dashed curve just above it showing the same relation with span efficiency 0.85.](assets/02-06-fig1.svg)

Left: three distributions carrying the same total lift. Their difference in drag comes entirely from how far each departs from the half-ellipse.

Right: why the sailplane looks the way it does. At $C_L = 0.8$, going from $AR = 6$ to $AR = 30$ cuts induced drag by a factor of five.

## Worked examples

**Example 1 (why higher modes cost drag but earn nothing).** Consider a symmetric wing with $A_1 = 0.0200$ and $A_3 = 0.0015$ (symmetric wings have only odd modes — even modes would make the loading antisymmetric), on an aspect ratio of $AR = 7$.

*Lift.*

$$C_L = \pi\,AR\,A_1 = \pi(7)(0.0200) = 0.43982.$$

**$A_3$ contributes nothing.** The $\sin3\theta$ mode adds lift over part of the span and removes exactly as much elsewhere.

*Drag.*

$$C_{D,i} = \pi\,AR\sum nA_n^2 = \pi(7)\left[(0.0200)^2+3(0.0015)^2\right] = \pi(7)\left[4.000\times10^{-4}+6.75\times10^{-6}\right]$$
$$= \pi(7)(4.0675\times10^{-4}) = 0.0089449.$$

*Span efficiency.*

$$\delta = 3\left(\frac{A_3}{A_1}\right)^2 = 3(0.075)^2 = 0.016875, \qquad e = \frac{1}{1.016875} = 0.98341.$$

*Check the two routes agree.*

$$\frac{C_L^2}{\pi eAR} = \frac{0.43982^2}{\pi(0.98341)(7)} = \frac{0.19344}{21.625} = 0.0089449 \quad\checkmark$$

*Reading it.* The third mode is 7.5% of the first — a visible distortion of the loading — and it costs **1.7% extra induced drag while producing zero extra lift**.

**Note how gentle the penalty is.** Because $\delta$ is *quadratic* in the mode ratio, a 7.5% distortion costs 1.7% and a 15% distortion would cost 6.8%. This is why real wings, which are rectangular or tapered rather than elliptic, still achieve $e = 0.85$–$0.95$: **you have to depart quite far from elliptic before the drag penalty becomes serious.**

That is a fortunate fact of engineering. Elliptic planforms are expensive to build — every rib is a different size, and the Spitfire's wing was notoriously labour-intensive — while a linearly tapered wing with a taper ratio around 0.4 gets within a couple of percent of the optimum for a fraction of the cost. **Almost every aircraft since 1945 has made that trade.**

**Example 2 (why gliders are long and fighters are short).** Compare induced drag at $C_L = 0.8$ — a representative climbing or thermalling condition.

| Aircraft type | $AR$ | $e$ | $C_{D,i} = C_L^2/(\pi eAR)$ |
|---|---|---|---|
| Sailplane | 30 | 0.95 | 0.00715 |
| Airliner | 9 | 0.85 | 0.02664 |
| Trainer | 6 | 0.85 | 0.03994 |
| Fighter (delta) | 3 | 0.80 | 0.08488 |

**A factor of twelve between the sailplane and the fighter**, at the same lift coefficient.

*What that means for glide performance.* A sailplane's zero-lift drag is roughly $C_{D,0}\approx0.010$, so at $C_L = 0.8$ its total is $C_D\approx0.0172$ and

$$\frac{L}{D} = \frac{0.8}{0.0172} = 46.5,$$

close to the 50-plus that modern competition sailplanes achieve. A trainer with $C_{D,0}\approx0.025$ gets $C_D\approx0.065$ and $L/D = 12.3$.

**The whole difference is aspect ratio.** Both aircraft use similar airfoils, and both are clean; one simply spreads its lift over five times the span.

*Why a fighter accepts $AR = 3$.* Three reasons, none aerodynamic in the induced-drag sense:

**Wave drag.** Above $M = 1$ a long straight wing is catastrophic; a low-aspect-ratio delta keeps the whole wing inside the Mach cone ([4.7](04-07-supersonic-airfoils-wave-drag-sweep.md)).

**Structure.** Induced drag scales as $1/AR$, but wing bending moment scales roughly as span, and structural weight worse than that. A long wing that must survive $9g$ is very heavy.

**Roll rate.** Roll inertia scales as $b^2$ and roll damping opposes the motion; short wings roll fast.

*And the design lesson hidden in the formula.* Since $C_{D,i} = C_L^2/(\pi eAR)$ and $AR = b^2/S$,

$$D_i = \frac{L^2}{q_\infty\pi e\,b^2}.$$

**The area cancels.** Induced drag depends on lift, dynamic pressure, and **span** — not on wing area at all. That is why designers speak of "span loading" $L/b$ rather than wing loading when discussing induced drag, and why a winglet, which adds effective span for very little area, is worth its weight.

## Watch out

- **You might think $e$ is the Oswald efficiency factor.** Not quite: $e$ here is the *span* efficiency of the lift distribution alone. The **Oswald factor** $e_0$ in the full aircraft polar $C_D = C_{D,0}+C_L^2/(\pi e_0AR)$ is smaller, because it also absorbs the $C_L$-dependence of the viscous drag. Typical $e_0\approx0.7$–$0.85$.
- **You might apply $a = a_0/(1+a_0/(\pi eAR))$ with $a_0$ in per-degree.** Everything in that formula is per radian.
- **You might expect low aspect ratio to reduce $C_{L,\max}$.** It does not — it usually *raises* the stalling angle, because the wing needs more geometric incidence for the same effective incidence. Low-$AR$ wings stall late and gently.
- **You might assume elliptic loading needs an elliptic planform.** It is the most direct route, but twist, taper, and washout can produce near-elliptic loading on a straight-tapered wing.
- **You might treat $e$ as fixed for an aircraft.** It changes with flap deflection, with sideslip, and with any change to the spanwise loading.
- **You might forget that induced drag *rises* as speed falls.** $C_L\propto1/V^2$ at fixed weight, so $D_i\propto1/V^2$. Induced drag is the dominant drag at low speed and nearly negligible at high speed — the opposite of every other drag component.

## One-liner

> Expand the spanwise loading in Fourier modes: the first mode alone makes the lift, every mode makes drag, so elliptic loading is optimal and everything else pays $C_{D,i} = C_L^2/(\pi eAR)$ — a penalty that grows as the square of lift and falls as span squared, which is why gliders are long and fighters are not.

## Problems

**P1 (🟢)** A wing has elliptic loading, $AR = 10$, and flies at $C_L = 0.75$, $V_\infty = 60$ m/s at sea level, with $S = 16$ m². (a) Find $C_{D,i}$. (b) Find the induced drag force. (c) Find the induced angle in degrees. (d) Repeat (a) for $AR = 5$ at the same $C_L$, and state the factor.

**P2 (🟡)** A symmetric wing has $A_1 = 0.0240$, $A_3 = 0.0028$, $A_5 = 0.0009$, and $AR = 8$. (a) Find $C_L$. (b) Find $\delta$ and $e$. (c) Find $C_{D,i}$ two ways and confirm they agree. (d) The wing's 2-D sections have $a_0 = 2\pi$ and $\alpha_{L=0} = -1.5°$. Find the finite-wing lift-curve slope and the geometric angle of attack needed.

**P3 (🔴)** *(Boss problem 2.)* A wing has a symmetric airfoil, $AR = 8$, $e = 0.9$, and a 2-D lift-curve slope of $2\pi$ per radian. (a) Correct the lift-curve slope for finite span and find $C_L$ at $\alpha = 5°$. (b) Compute the induced drag coefficient there. (c) Now halve the aspect ratio to $AR = 4$ and recompute both — by what factor does induced drag change at the *same* $C_L$, and by what factor at the *same* geometric $\alpha$? Explain the difference physically.

<details>
<summary>Solutions</summary>

**P1** (a) Elliptic loading means $e = 1$:

$$C_{D,i} = \frac{C_L^2}{\pi AR} = \frac{0.75^2}{\pi(10)} = \frac{0.5625}{31.416} = 0.017905.$$

(b) $$q_\infty = \tfrac12(1.225)(60)^2 = 2205\ \mathrm{Pa},$$
$$D_i = C_{D,i}q_\infty S = 0.017905(2205)(16) = 631.7\ \mathrm{N}.$$

(c) $$\alpha_i = \frac{C_L}{\pi AR} = \frac{0.75}{31.416} = 0.023873\ \mathrm{rad} = 1.368°.$$

*Check:* $C_{D,i} = C_L\alpha_i = 0.75(0.023873) = 0.017905$ ✓

(d) $$C_{D,i} = \frac{0.5625}{\pi(5)} = \frac{0.5625}{15.708} = 0.035810.$$

**Exactly twice** — at fixed $C_L$, induced drag is inversely proportional to aspect ratio, so halving $AR$ doubles it.

**P2** (a) $$C_L = \pi\,AR\,A_1 = \pi(8)(0.0240) = 0.60319.$$

(b) $$\delta = \sum_{n\geq2}n\left(\frac{A_n}{A_1}\right)^2 = 3\left(\frac{0.0028}{0.0240}\right)^2+5\left(\frac{0.0009}{0.0240}\right)^2$$
$$= 3(0.116667)^2+5(0.037500)^2 = 3(0.0136111)+5(0.00140625) = 0.0408333+0.00703125 = 0.047865.$$

$$e = \frac{1}{1+\delta} = \frac{1}{1.047865} = 0.95432.$$

(c) *Route 1 — direct sum:*

$$C_{D,i} = \pi\,AR\sum nA_n^2 = \pi(8)\left[(0.024)^2+3(0.0028)^2+5(0.0009)^2\right]$$
$$= \pi(8)\left[5.76\times10^{-4}+2.352\times10^{-5}+4.05\times10^{-6}\right] = \pi(8)(6.0357\times10^{-4}) = 0.015169.$$

*Route 2 — via $e$:*

$$\frac{C_L^2}{\pi eAR} = \frac{0.60319^2}{\pi(0.95432)(8)} = \frac{0.363839}{23.987} = 0.015169 \quad\checkmark$$

(d) $$a = \frac{a_0}{1+\dfrac{a_0}{\pi eAR}} = \frac{6.28319}{1+\dfrac{6.28319}{\pi(0.95432)(8)}} = \frac{6.28319}{1+\dfrac{6.28319}{23.987}} = \frac{6.28319}{1.26195} = 4.97889\ \mathrm{/rad},$$

$$= 0.086898\ \mathrm{/deg}.$$

$$\alpha-\alpha_{L=0} = \frac{C_L}{a} = \frac{0.60319}{4.97889} = 0.121148\ \mathrm{rad} = 6.941°,$$

$$\alpha = 6.941°+(-1.5°) = 5.441°.$$

*The tax made explicit.* A 2-D section would need $C_L/a_0-1.5° = 0.60319/6.28319 = 0.09600$ rad $= 5.500°$, then $5.500-1.5 = 4.000°$. The finite wing needs $5.441°$ — **$1.44°$ more**, which is the induced angle $\alpha_i = C_L/(\pi eAR) = 0.60319/23.987 = 0.025149$ rad $= 1.4409°$ ✓

**P3** (a) $$a = \frac{a_0}{1+\dfrac{a_0}{\pi eAR}} = \frac{6.28319}{1+\dfrac{6.28319}{\pi(0.9)(8)}} = \frac{6.28319}{1+\dfrac{6.28319}{22.6195}} = \frac{6.28319}{1.27778} = 4.91728\ \mathrm{/rad}$$

$$= 0.085823\ \mathrm{per\ degree}.$$

$$C_L = a\left(\alpha-\alpha_{L=0}\right) = 4.91728(0.0872665) = 0.42911 \qquad (\alpha_{L=0} = 0\ \text{for a symmetric section}).$$

*(A 2-D section at the same $5°$ would give $c_l = 2\pi(0.0872665) = 0.54831$ — the finite wing gets 78% of it.)*

(b) $$C_{D,i} = \frac{C_L^2}{\pi eAR} = \frac{0.42911^2}{22.6195} = \frac{0.184135}{22.6195} = 0.0081405.$$

(c) *Recompute at $AR = 4$, $e = 0.9$:*

$$a = \frac{6.28319}{1+\dfrac{6.28319}{\pi(0.9)(4)}} = \frac{6.28319}{1+\dfrac{6.28319}{11.3097}} = \frac{6.28319}{1.55556} = 4.03919\ \mathrm{/rad} = 0.070497\ \mathrm{/deg},$$

$$C_L = 4.03919(0.0872665) = 0.35249,$$

$$C_{D,i} = \frac{0.35249^2}{11.3097} = \frac{0.124249}{11.3097} = 0.010986.$$

*Comparison at the **same $C_L$** ($C_L = 0.42911$):*

$$C_{D,i}(AR = 4) = \frac{0.184135}{11.3097} = 0.016281, \qquad \frac{0.016281}{0.0081405} = \boxed{2.000}$$

**Exactly a factor of two.**

*Comparison at the **same $\alpha$** ($\alpha = 5°$):*

$$\frac{0.010986}{0.0081405} = \boxed{1.3495}$$

**Only a factor of 1.35.**

*The physical explanation.* The two comparisons ask different questions, and the gap between them is one of the most useful things in this lesson.

**At the same $C_L$**, the formula $C_{D,i} = C_L^2/(\pi eAR)$ has $C_L$ held fixed, so the only thing that changes is $AR$ in the denominator: halving it doubles the drag, exactly. This is the honest comparison for a *cruise* condition, where an aircraft must produce a lift equal to its weight regardless of its wing shape. **A short-span aircraft carrying the same weight at the same speed genuinely pays twice the induced drag.**

**At the same $\alpha$**, the shorter wing also *makes less lift* — the increased downwash has eaten more of its effective incidence, dropping $C_L$ from 0.429 to 0.352, a factor of 0.821. Since induced drag goes as $C_L^2$, that reduction alone divides the drag by $0.821^2 = 0.675$, partly offsetting the $\times2$ from the aspect ratio:

$$2.000\times0.675 = 1.350\quad\checkmark$$

**So the same-$\alpha$ comparison flatters the short wing, and it does so dishonestly** — the short wing looks better only because it is not doing as much work. Any comparison of wings must hold the *lift* fixed, not the attitude.

*A memorable way to hold onto it.* The lift equation and the drag equation respond to aspect ratio in opposite directions and at different rates:

$$C_L\ \text{falls like}\ \frac{AR}{AR+2/e}\ (\text{gently}), \qquad C_{D,i}\ \text{rises like}\ \frac{1}{AR}\ (\text{sharply}).$$

**Short wings lose a little lift and gain a lot of drag.** That asymmetry is the aerodynamic case for span, and only structural weight, wave drag, roll rate, and hangar doors argue the other way.

</details>

## Flashback

**From Lesson 2.5 (Finite wings: downwash and lifting-line theory):** A wing of span $b = 18$ m carries elliptic loading with $\Gamma_0 = 70$ m²/s at $V_\infty = 90$ m/s at sea level, with $S = 30$ m². (a) Find the downwash and the induced angle. (b) Find the total lift and $C_L$. (c) Verify that $\alpha_i = C_L/(\pi AR)$. (d) State the Helmholtz theorem that makes the trailing vortices necessary.

<details>
<summary>Solution</summary>

(a) $$w = \frac{\Gamma_0}{2b} = \frac{70}{36} = 1.9444\ \mathrm{m/s}, \qquad \alpha_i = \frac{1.9444}{90} = 0.021605\ \mathrm{rad} = 1.238°,$$

uniform across the span.

(b) $$\int\Gamma\,dy = \Gamma_0\frac{\pi b}{4} = 70\frac{\pi(18)}{4} = 70(14.137) = 989.60\ \mathrm{m^3/s},$$

$$L = \rho_\infty V_\infty(989.60) = 1.225(90)(989.60) = 109{,}104\ \mathrm{N} = 109.1\ \mathrm{kN}.$$

$$q_\infty = \tfrac12(1.225)(90)^2 = 4961.3\ \mathrm{Pa}, \qquad C_L = \frac{109{,}104}{4961.3(30)} = \frac{109{,}104}{148{,}838} = 0.73304.$$

(c) $$AR = \frac{b^2}{S} = \frac{324}{30} = 10.80,$$

$$\frac{C_L}{\pi AR} = \frac{0.73304}{\pi(10.8)} = \frac{0.73304}{33.929} = 0.021605\ \mathrm{rad} \quad\checkmark$$

**Identical to (a) to five figures**, from a completely independent route — Biot–Savart on the trailing sheet versus lift and planform geometry.

(d) **Helmholtz's second theorem:** a vortex filament cannot end in the fluid. The bound vortex representing the wing must therefore turn downstream at each tip and trail away, and it is those trailing filaments that generate the downwash.

*The bridge to this lesson.* [2.5](02-05-finite-wings-downwash-lifting-line.md) established that elliptic loading gives **uniform** downwash; this lesson explains why that matters. Uniform $\alpha_i$ is the signature of a loading with a single Fourier mode, and induced drag

$$C_{D,i} = \pi AR\sum nA_n^2$$

is minimized when all but that one mode vanish. Every non-uniformity in the downwash corresponds to a higher mode, and every higher mode is drag you paid for and got no lift from.

*And a number worth having.* This wing's induced drag is

$$C_{D,i} = \frac{C_L^2}{\pi AR} = \frac{0.53735}{33.929} = 0.015837, \qquad D_i = 0.015837(4961.3)(30) = 2357\ \mathrm{N},$$

which is $2.16\%$ of the lift — exactly $\alpha_i$ in radians, as the tilted-lift picture demands. **Induced drag as a fraction of lift *is* the induced angle**, which is the most compact statement of the whole of Module 2's finite-wing story.

</details>

## Connections

- **Backward:** the lifting-line equation being solved is [2.5](02-05-finite-wings-downwash-lifting-line.md)'s; the Fourier-plus-Glauert method is [2.4](02-04-cambered-airfoil-aerodynamic-center.md)'s, applied spanwise instead of chordwise; the section relation $c_l = a_0(\alpha_{\rm eff}-\alpha_{L=0})$ is [2.3](02-03-symmetric-thin-airfoil.md)'s and [2.4](02-04-cambered-airfoil-aerodynamic-center.md)'s.
- **Forward:** [3.3](03-03-separation-stall-drag-polar.md) adds $C_{D,0}$ to this term to build the complete drag polar $C_D = C_{D,0}+C_L^2/(\pi e_0AR)$ and finds the speed for best $L/D$; [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md) shows that at supersonic speed a *third* drag mechanism appears that this theory cannot see.
- **Sideways:** the structure "one mode carries the conserved quantity, all modes carry the quadratic cost, therefore the single-mode solution is optimal" is a **variational principle in disguise** — the same argument that makes the ground state of a quantum system the single lowest eigenmode, and the same as minimizing $\sum I_k^2R_k$ subject to fixed $\sum I_k$ in a resistor network. The elliptic distribution is the aerodynamic analogue of a uniform current density.

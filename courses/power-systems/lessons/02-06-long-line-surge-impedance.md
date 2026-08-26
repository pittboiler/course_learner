# Power Systems · Lesson 2.6: The long line and surge impedance

> ⏱ ~15 min · Module 2: Transformers and transmission lines · Builds on: [2.5 Short and medium-length line models](02-05-short-and-medium-line-models.md), [2.4 Transmission-line parameters](02-04-transmission-line-parameters.md) · Unlocks: [3.1 The bus admittance matrix](03-01-bus-admittance-matrix.md), [4.6 Transient stability and the equal-area criterion](04-06-transient-stability-equal-area.md)

## Why this matters

Past about 250 km, lumping a line's shunt capacitance stops being accurate. The line is genuinely distributed — voltage and current vary continuously along it, and the governing equations are the same wave equations that describe any transmission structure.

Solving them exactly produces two things worth having. The **ABCD parameters** with hyperbolic functions, which are the reference against which the lumped models of [2.5](02-05-short-and-medium-line-models.md) are approximations. And the **[surge impedance](../reference.md#surge-impedance)** $Z_c = \sqrt{L/C}$, together with the **surge-impedance loading** it defines — the single most useful number for characterizing a transmission line, because it is the loading at which the line's voltage profile is perfectly flat.

It also explains a phenomenon that surprises people: an unloaded long line has a **higher** voltage at its far end than at its source. The Ferranti effect is not a fault; it is what a distributed capacitance does, and it sizes the shunt reactors on every long EHV line.

## The idea

Take a differential slice of line of length $dx$. It has series impedance $z\,dx$ and shunt admittance $y\,dx$. Write KVL and KCL across the slice:

$$\frac{dV}{dx} = zI, \qquad \frac{dI}{dx} = yV.$$

Differentiate one and substitute the other and you get the wave equation:

$$\frac{d^2V}{dx^2} = zyV = \gamma^2V, \qquad \gamma = \sqrt{zy}.$$

Its solutions are exponentials in $\gamma x$ — a wave travelling toward the load and one reflected back. The **propagation constant** $\gamma = \alpha+j\beta$ has a real part that attenuates and an imaginary part that shifts phase, and the ratio of voltage to current in a single travelling wave is the **characteristic (surge) impedance** $Z_c = \sqrt{z/y}$.

Now the key idea, and it is worth dwelling on. Terminate the line in exactly $Z_c$ and there is **no reflected wave** — the load looks like more line. The voltage magnitude is then constant along the whole length, the phase rotates uniformly, and the line neither generates nor absorbs net reactive power. Its own capacitance supplies exactly what its own inductance consumes.

That loading is the **surge-impedance loading**, $\mathrm{SIL} = V_{LL}^2/Z_c$, and it is the natural operating point of a line. Below SIL the capacitance dominates and the line generates vars, raising the far-end voltage; above SIL the inductance dominates and the line absorbs vars, dropping it. Every transmission line in the world is characterized by where its loading sits relative to SIL.

## The formal version

**Distributed equations and their solution.** With $x$ measured from the receiving end:

$$V(x) = \frac{V_R+Z_cI_R}{2}e^{\gamma x}+\frac{V_R-Z_cI_R}{2}e^{-\gamma x},$$
$$I(x) = \frac{V_R/Z_c+I_R}{2}e^{\gamma x}-\frac{V_R/Z_c-I_R}{2}e^{-\gamma x},$$

where

$$\boxed{\;\gamma = \sqrt{zy} = \alpha+j\beta \ \ (\text{per unit length}), \qquad Z_c = \sqrt{\frac{z}{y}}.\;}$$

*In words: an incident wave and a reflected wave, each attenuating and rotating as it travels.*

**Exact ABCD parameters.** Evaluating at $x=\ell$ and writing in hyperbolic form:

$$\boxed{\;A = D = \cosh\gamma\ell, \qquad B = Z_c\sinh\gamma\ell, \qquad C = \frac{\sinh\gamma\ell}{Z_c}.\;}$$

*In words: the same two-port description as [2.5](02-05-short-and-medium-line-models.md), with hyperbolic functions of the electrical length replacing the lumped approximations.* Reciprocity is automatic: $AD-BC = \cosh^2-\sinh^2 = 1$.

**Recovering the lumped models.** Expand for small $\gamma\ell$:

$$\cosh\gamma\ell = 1+\frac{(\gamma\ell)^2}{2}+\cdots = 1+\frac{ZY}{2}+\cdots,$$
$$Z_c\sinh\gamma\ell = Z_c\left(\gamma\ell+\frac{(\gamma\ell)^3}{6}+\cdots\right) = Z\left(1+\frac{ZY}{6}+\cdots\right).$$

The leading terms are exactly the nominal-π parameters, confirming it as the second-order approximation, with the first neglected term of order $(\gamma\ell)^3$. **That is why nominal-π is good to a couple of percent at $\gamma\ell\approx0.4$ and poor beyond it.**

**Equivalent-π.** For an exact lumped representation of a long line (useful for putting it into $Y_{bus}$):

$$Z' = Z_c\sinh\gamma\ell = B, \qquad \frac{Y'}{2} = \frac{1}{Z_c}\tanh\frac{\gamma\ell}{2} = \frac{A-1}{B}.$$

*In words: correct the nominal-π values by hyperbolic factors and the π-model becomes exact.* This is what commercial software stores for a long line — a π-model with corrected parameters, so the rest of the network solution is unchanged.

**Lossless approximation.** For a transmission line, $R\ll\omega L$ and $G\approx0$, so:

$$\gamma \approx j\beta = j\omega\sqrt{LC}, \qquad Z_c\approx\sqrt{\frac{L}{C}}\ \ \text{(real)}.$$

$$\text{wavelength } \lambda = \frac{2\pi}{\beta} = \frac{1}{f\sqrt{LC}}, \qquad \text{velocity } v = \frac{1}{\sqrt{LC}}.$$

For an overhead line the velocity is close to the speed of light (the fields are mostly in air), giving

$$\lambda \approx \frac{3\times10^{8}}{60} = 5000\ \mathrm{km}, \qquad \beta\approx0.072°/\mathrm{km}.$$

*In words: a quarter wavelength is 1250 km, so a 400 km line is about $29°$ electrically long.* That number is the right way to think about line length — not in kilometres but in degrees.

**Surge impedance and SIL.**

$$\boxed{\;Z_c = \sqrt{\frac{L}{C}}\approx250\text{–}400\ \Omega\ \text{(overhead)}, \qquad \mathrm{SIL} = \frac{V_{LL}^2}{Z_c}\ \ \mathrm{(MW\ with\ } V \text{ in kV)}.\;}$$

| Voltage | $Z_c$ | SIL |
|---|---|---|
| 138 kV | 400 Ω | 48 MW |
| 230 kV | 380 Ω | 139 MW |
| 345 kV | 285 Ω (bundled) | 418 MW |
| 500 kV | 250 Ω | 1000 MW |
| 765 kV | 260 Ω | 2250 MW |

*In words: SIL rises as the square of voltage, which is the whole economic argument for EHV.*

**At SIL the line is perfectly behaved.** Terminating in $Z_c$ gives:

- $|V|$ constant along the line — a **flat voltage profile**
- Net reactive power exchange **zero**: $Q_{\rm generated} = Q_{\rm absorbed}$
- Unity power factor at every point
- Efficiency at its practical best

Real lines run at 0.3–1.5 times SIL depending on length: short lines well above (thermally limited), long lines below (stability limited).

**The Ferranti effect.** At no load, $I_R = 0$, so

$$V_S = AV_R = V_R\cosh\gamma\ell \quad\Longrightarrow\quad V_R = \frac{V_S}{\cosh\gamma\ell}.$$

For a lossless line $\cosh(j\beta\ell) = \cos\beta\ell$, which is **less than 1**, so

$$\boxed{\;V_R = \frac{V_S}{\cos\beta\ell} > V_S.\;}$$

*In words: an open-ended line's far-end voltage exceeds its source voltage, by a factor $1/\cos\beta\ell$ that grows with length.* Physically, the line's distributed capacitance draws a leading current through the line's inductance, and a leading current through an inductance *raises* the voltage — the negative-regulation case of [2.2](02-02-transformer-performance-per-unit.md), taken to its extreme.

At $\beta\ell = 90°$ (1250 km) the factor is infinite — the quarter-wave resonance. Real lines never approach it, but the rise is significant well before: 5% at 500 km, 13% at 800 km. **Shunt reactors** are switched in to absorb the charging and hold the far end down, and energizing a long line without them can produce damaging overvoltage.

## Picture

![A two-panel figure. Left: voltage magnitude plotted along a long line for three loadings — below SIL, showing the voltage rising toward the receiving end; at SIL, showing a perfectly flat profile; and above SIL, showing the voltage sagging toward the receiving end — with the three curves labelled and the flat one highlighted. Right: the no-load voltage ratio V_R over V_S plotted against line length in kilometres, following one over cosine beta L, rising gently from one at short lengths and climbing steeply toward the quarter-wave resonance at twelve hundred fifty kilometres, with typical line lengths shaded and the five percent rise at five hundred kilometres marked.](assets/02-06-fig1.svg)

Left: SIL as the balance point. Below it the line's capacitance wins and the far end rises; above it the inductive drop wins and the far end sags; exactly at it the two cancel at every point and the profile is flat. This is why SIL is the natural yardstick for a line's loading.

Right: the Ferranti effect. The rise is modest at ordinary lengths but accelerates, and the quarter-wave pole at 1250 km is why no AC line is built anywhere near that length without intermediate compensation.

## Worked examples

**Example 1 (exact versus lumped on a 300 km line).** A 300 km, 345 kV line has $z = 0.05+j0.45\ \Omega$/km and $y = j3.4\times10^{-6}$ S/km. Find $\gamma$, $Z_c$, the exact ABCD parameters, and compare with nominal-π.

*Propagation constant.*

$$zy = (0.4528\angle83.66°)(3.4\times10^{-6}\angle90°) = 1.5395\times10^{-6}\angle173.66°,$$
$$\gamma = \sqrt{zy} = 1.2408\times10^{-3}\angle86.83°\ \mathrm{per\ km} = (6.86\times10^{-5}+j1.2389\times10^{-3}).$$

$$\gamma\ell = 0.02058+j0.37165, \qquad |\gamma\ell| = 0.3722\ \mathrm{rad} = 21.3°.$$

*Surge impedance.*

$$Z_c = \sqrt{\frac{z}{y}} = \sqrt{\frac{0.4528\angle83.66°}{3.4\times10^{-6}\angle90°}} = \sqrt{133{,}176\angle{-6.34°}} = 364.9\angle{-3.17°}\ \Omega.$$

Nearly real, as expected for a low-loss line.

*Exact ABCD.*

$$A = \cosh(0.02058+j0.37165) = \cosh(0.02058)\cos(0.37165)+j\sinh(0.02058)\sin(0.37165)$$
$$= (1.000212)(0.93172)+j(0.020581)(0.36315) = 0.93192+j0.00747 = 0.93195\angle0.46°.$$

$$B = Z_c\sinh\gamma\ell.$$

$\sinh\gamma\ell = \sinh(0.02058)\cos(0.37165)+j\cosh(0.02058)\sin(0.37165) = 0.019175+j0.363227 = 0.36373\angle86.98°$, so

$$B = (364.9\angle{-3.17°})(0.36373\angle86.98°) = 132.7\angle83.81°\ \Omega.$$

$$C = \frac{\sinh\gamma\ell}{Z_c} = \frac{0.36373\angle86.98°}{364.9\angle{-3.17°}} = 9.968\times10^{-4}\angle90.15°\ \mathrm{S}.$$

*Nominal-π for comparison.* $Z = 15+j135 = 135.83\angle83.66°$, $Y = j1.02\times10^{-3}$:

$$A_\pi = 1+\frac{ZY}{2} = 1+\frac{0.13855\angle173.66°}{2} = 1-0.06885+j0.00767 = 0.93118\angle0.47°,$$
$$B_\pi = 135.8\angle83.66°, \qquad C_\pi = 9.849\times10^{-4}\angle90.23°.$$

*The comparison.*

| | exact | nominal-π | error |
|---|---|---|---|
| $|A|$ | 0.93195 | 0.93118 | 0.08% |
| $|B|$ | 132.7 Ω | 135.8 Ω | **2.3%** |
| $|C|$ | $9.968\times10^{-4}$ | $9.849\times10^{-4}$ | 1.2% |

**The series parameter $B$ is off by 2.3% at 300 km** — small but not negligible, and it grows rapidly: at 500 km the $B$ error exceeds 6%. Note that $A$ is far more accurate than $B$, because the nominal-π gets the $(\gamma\ell)^2$ term in $A$ exactly right and only misses at fourth order, while $B$'s first error is third order.

*Surge-impedance loading.*

$$\mathrm{SIL} = \frac{V_{LL}^2}{|Z_c|} = \frac{345^2}{364.9} = \frac{119{,}025}{364.9} = 326\ \mathrm{MW}.$$

**Example 2 (the Ferranti effect and sizing a shunt reactor).** The same 300 km line is energized at 345 kV with the far end open. Find the receiving-end voltage, then determine the shunt reactor needed to hold it at 345 kV.

*Open-end voltage.* With $I_R = 0$, $V_S = AV_R$:

$$|V_R| = \frac{|V_S|}{|A|} = \frac{345}{0.93195} = 370.2\ \mathrm{kV}.$$

**The far end sits 7.3% above the source** — 370 kV on a 345 kV line, which is above the normal 5% operating limit and near the equipment's continuous rating.

*Cross-check with the lossless formula.* $\beta\ell = 0.37165$ rad $= 21.29°$, so

$$\frac{1}{\cos(21.29°)} = \frac{1}{0.93195} = 1.0730\ \checkmark$$

— the loss term contributes almost nothing, confirming that Ferranti is a purely reactive phenomenon.

*Sizing the reactor.* The line's charging must be absorbed. Total charging at 345 kV:

$$Q_{\rm chg} = V_{LL}^2\,|Y| = (345\times10^{3})^2(1.02\times10^{-3}) = 121.4\ \mathrm{Mvar}.$$

A shunt reactor at the receiving end absorbing this much would hold the far end near nominal. In practice reactors are sized at 60–100% of the line charging, often split between the two ends, so this line would carry roughly **two 40–60 Mvar reactors**, one at each end.

*Checking the effect.* A shunt reactor of susceptance $B_r$ at the receiving end draws a **lagging** current, $I_R = -jB_rV_R$, so the open-end relation becomes

$$V_S = AV_R+BI_R = V_R\left(A-jB_rB\right).$$

In rectangular form $B = 132.7\angle83.81° = 14.31+j131.93\ \Omega$, so

$$-jB_rB = -jB_r(14.31+j131.93) = B_r(131.93-j14.31).$$

*Full compensation* ($B_r = 1.02\times10^{-3}$ S, absorbing the entire 121.4 Mvar):

$$A-jB_rB = (0.93192+0.13457)+j(0.00747-0.01460) = 1.06649-j0.00712, \qquad |{\cdot}| = 1.0665,$$
$$|V_R| = \frac{345}{1.0665} = 323.5\ \mathrm{kV}.$$

**Full compensation overshoots**, pulling the far end 6.2% *below* nominal. The reactor is oversized.

*Solving for the right size.* Require $|A-jB_rB| = 1$. The real part dominates, so

$$0.93192+131.93\,B_r \approx 1 \quad\Longrightarrow\quad B_r = \frac{0.06808}{131.93} = 5.16\times10^{-4}\ \mathrm{S},$$

which gives $A-jB_rB = 0.99999+j0.00009$ and

$$|V_R| = \frac{345}{0.99999} = 345.0\ \mathrm{kV}\ \checkmark.$$

$$Q_r = V_{LL}^2B_r = (345\times10^{3})^2(5.16\times10^{-4}) = 61.4\ \mathrm{Mvar},$$

i.e. **51% compensation** — inside the usual band once you account for real installations splitting the reactors between both ends, which is more effective per Mvar than putting them all at one end.

*The general lesson.* Shunt reactors are sized by the voltage they must hold, not simply by matching the charging Mvar. Over-compensation depresses the far end and, at light load with the reactors in, can make the line consume vars the system must then supply. This is why large reactors are **switched** — in when the line is lightly loaded, out when it is loaded near SIL — and why their control is a standard part of EHV line operation.

## Watch out

- **You might use $\gamma$ and $\ell$ in inconsistent units.** $\gamma$ is per unit length; if $z$ and $y$ are per km then $\ell$ must be in km. Mixing metres and kilometres gives $\gamma\ell$ off by 1000 and nonsense hyperbolics.
- **You might expect $|A|>1$.** For a line $|A| = |\cosh\gamma\ell| < 1$, which is exactly what produces the Ferranti rise.
- **You might treat the surge impedance as an impedance you can measure with an ohmmeter.** It is the ratio of voltage to current in a *travelling wave*, and it is what the line looks like before any reflection returns — which is why it governs switching surges and lightning as well as steady state.
- **You might size a shunt reactor at 100% of charging.** That over-compensates and depresses the far end. Typical compensation is 50–80%, split between the ends, and switched.
- **You might use the lumped model past 250 km.** The $B$ error is 2.3% at 300 km and grows as $(\gamma\ell)^2$. Use the equivalent-π corrections instead — they cost two hyperbolic evaluations and are exact.

## One-liner

> A long line is a wave equation whose solutions give $\cosh$ and $\sinh$ ABCD parameters, a surge impedance $\sqrt{L/C}$ at whose loading the voltage profile is flat, and — when unloaded — a far-end voltage *above* the source by $1/\cos\beta\ell$.

## Problems

**P1 (🟢)** A line has $L = 1.3$ mH/km and $C = 9$ nF/km. (a) Find the surge impedance. (b) Find the propagation velocity and the 60 Hz wavelength. (c) Find $\beta$ in degrees per km. (d) Find the SIL at 500 kV.

**P2 (🟡)** A 400 km, 500 kV line has $z = 0.028+j0.325\ \Omega$/km and $y = j5.2\times10^{-6}$ S/km. (a) Find $\gamma$, $\gamma\ell$ and $Z_c$. (b) Find the exact $A$ and $B$. (c) Find the no-load receiving voltage if the sending end is at 500 kV. (d) Find the SIL and comment on the line's likely operating range.

**P3 (🔴)** A 600 km, 765 kV line has $\beta = 0.0725°$/km and $Z_c = 260\ \Omega$, with negligible loss. (a) Find the electrical length in degrees. (b) Find the no-load voltage rise. (c) Find the maximum power transfer if both ends are held at 1.0 pu, using the lossless relation $P_{\max} = V_SV_R/(Z_c\sin\beta\ell)$. (d) Compare with SIL and with a naive $V^2/X$ calculation using the total series reactance, and explain the discrepancy.

<details>
<summary>Solutions</summary>

**P1** (a) $$Z_c = \sqrt{\frac{L}{C}} = \sqrt{\frac{1.3\times10^{-3}}{9\times10^{-9}}} = \sqrt{144{,}444} = 380\ \Omega.$$

(b) $$v = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{(1.3\times10^{-3})(9\times10^{-9})}} = \frac{1}{\sqrt{1.17\times10^{-11}}} = \frac{1}{3.421\times10^{-6}} = 2.923\times10^{5}\ \mathrm{km/s}.$$

(That is 97.4% of the speed of light — as expected for an overhead line, whose fields are almost entirely in air.)

$$\lambda = \frac{v}{f} = \frac{2.923\times10^{5}}{60} = 4872\ \mathrm{km}.$$

(c) $$\beta = \frac{360°}{\lambda} = \frac{360}{4872} = 0.0739°/\mathrm{km}.$$

(d) $$\mathrm{SIL} = \frac{V_{LL}^2}{Z_c} = \frac{500^2}{380} = \frac{250{,}000}{380} = 658\ \mathrm{MW}.$$

**P2** (a) $$z = 0.028+j0.325 = 0.32620\angle85.07°, \qquad y = 5.2\times10^{-6}\angle90°,$$
$$zy = 1.6962\times10^{-6}\angle175.07°, \qquad \gamma = 1.3024\times10^{-3}\angle87.54°\ \mathrm{per\ km}.$$

$$\gamma\ell = 0.52096\angle87.54° = 0.02236+j0.52048.$$

$$Z_c = \sqrt{\frac{0.32620\angle85.07°}{5.2\times10^{-6}\angle90°}} = \sqrt{62{,}731\angle{-4.93°}} = 250.5\angle{-2.47°}\ \Omega.$$

(b) $$A = \cosh(0.02236+j0.52048) = \cosh(0.02236)\cos(0.52048)+j\sinh(0.02236)\sin(0.52048)$$
$$= (1.00025)(0.86768)+j(0.022362)(0.49712) = 0.86780+j0.01113 = 0.86787\angle0.73°.$$

$$\sinh\gamma\ell = \sinh(0.02236)\cos(0.52048)+j\cosh(0.02236)\sin(0.52048) = 0.019403+j0.497244 = 0.49762\angle87.77°,$$
$$B = (250.5\angle{-2.47°})(0.49762\angle87.77°) = 124.7\angle85.30°\ \Omega.$$

(c) $$|V_R| = \frac{|V_S|}{|A|} = \frac{500}{0.86787} = 576.1\ \mathrm{kV}.$$

**A 15.2% rise** — far outside acceptable limits, so this line absolutely requires shunt reactors and would never be energized unloaded without them.

(d) $$\mathrm{SIL} = \frac{500^2}{250.5} = 998\ \mathrm{MW}.$$

*Operating range.* At 400 km this is a long line, so it is **stability limited**, not thermally. Using the lossless estimate,

$$P_{\max} = \frac{V_SV_R}{Z_c\sin\beta\ell} = \frac{500^2}{250.5\sin(29.82°)} = \frac{250{,}000}{250.5(0.4973)} = 2007\ \mathrm{MW},$$

so operating at $\delta = 30°$ gives $2007\sin30° = 1004$ MW — almost exactly SIL. **A 400 km line at a $30°$ angle carries about its SIL**, which is a useful rule of thumb and explains why SIL is such a good characterization: for long lines the stability-limited operating point lands near it naturally.

The practical range would be roughly 0.7–1.2 × SIL, i.e. 700–1200 MW, with shunt reactors in at the low end and possibly series compensation to extend the high end.

**P3** (a) $$\beta\ell = 0.0725(600) = 43.5°.$$

(b) $$\frac{V_R}{V_S} = \frac{1}{\cos\beta\ell} = \frac{1}{\cos(43.5°)} = \frac{1}{0.72537} = 1.379.$$

**A 37.9% rise** — completely unacceptable, and a line of this length would have substantial shunt compensation distributed along it, not merely at the ends.

(c) $$P_{\max} = \frac{V_SV_R}{Z_c\sin\beta\ell} = \frac{765^2}{260\sin(43.5°)} = \frac{585{,}225}{260(0.68835)} = \frac{585{,}225}{178.97} = 3270\ \mathrm{MW}.$$

(d) $$\mathrm{SIL} = \frac{765^2}{260} = \frac{585{,}225}{260} = 2251\ \mathrm{MW}.$$

$$\frac{P_{\max}}{\mathrm{SIL}} = \frac{3270}{2251} = 1.453 = \frac{1}{\sin(43.5°)}\ \checkmark.$$

*Naive lumped calculation.* The total series reactance is $X = Z_c\beta\ell$ in radians $= 260(0.75920) = 197.4\ \Omega$, giving

$$P_{\max}^{\rm naive} = \frac{V^2}{X} = \frac{585{,}225}{197.4} = 2965\ \mathrm{MW}.$$

*The discrepancy:* $3270$ versus $2965$ MW — the lumped calculation **understates** the maximum by 9.3%.

*Why.* The exact relation has $Z_c\sin\beta\ell$ where the lumped one has $Z_c\beta\ell$, and $\sin\theta<\theta$, so the effective transfer reactance of a distributed line is **less** than its total series reactance. Physically, the line's distributed shunt capacitance provides reactive support along its length — a form of self-compensation that a lumped series reactance cannot represent.

The ratio is $\beta\ell/\sin\beta\ell$, which is 1.006 at $10°$, 1.047 at $30°$, and 1.103 at $43.5°$. So the error is negligible for short lines and grows to about 10% at this length — the same $(\gamma\ell)^2$ story as everywhere else in this lesson.

*The practical consequence.* Using the lumped reactance for a long line's stability limit is **conservative**, which is why it survives as a screening calculation. But designing series compensation or setting an operating limit on a 600 km line with it would leave nearly 10% of the transfer capability unused — worth several hundred megawatts here, and enough to justify the exact calculation.

</details>

## Flashback

**From Lesson 2.5 (Short and medium-length line models):** A 150 km line has nominal-π parameters $A = 0.98279\angle0.11°$, $B = 67.9\angle83.66°\ \Omega$. (a) Find the no-load receiving voltage for a 230 kV sending end. (b) Find the percentage rise. (c) Compare with the exact $\cosh\gamma\ell$ if $\gamma\ell = 0.01029+j0.18583$.

<details>
<summary>Solution</summary>

(a) $$|V_R| = \frac{230}{0.98279} = 234.0\ \mathrm{kV}.$$

(b) $$\text{rise} = \frac{234.0-230}{230} = 1.75\%.$$

(c) $$A_{\rm exact} = \cosh(0.01029+j0.18583) = \cosh(0.01029)\cos(0.18583)+j\sinh(0.01029)\sin(0.18583)$$
$$= (1.0000529)(0.98280)+j(0.010290)(0.18476) = 0.98285+j0.00190,$$
$$|A_{\rm exact}| = 0.98285.$$

Against the nominal-π value of 0.98279 — a difference of 0.006%, utterly negligible.

**At 150 km the nominal-π model is essentially exact for $A$**, which is why a 1.75% Ferranti rise computed either way is trustworthy. Contrast Example 1's 300 km line, where $A$ was still accurate to 0.08% but $B$ had drifted 2.3% — the two parameters degrade at different rates, and $A$ (hence the Ferranti calculation) stays good far longer than $B$ (hence the loaded voltage drop).

</details>

## Connections

- **Backward:** the per-km $z$ and $y$ are [2.4](02-04-transmission-line-parameters.md)'s, and the ABCD framing and lumped models are [2.5](02-05-short-and-medium-line-models.md)'s, now shown to be truncations of these.
- **Forward:** [3.1](03-01-bus-admittance-matrix.md) uses the equivalent-π form to place a long line into $Y_{bus}$; [4.6](04-06-transient-stability-equal-area.md) uses the transfer reactance derived here in the power-angle curve.
- **Sideways:** this is the telegrapher's equation, identical to the transmission-line theory of [`signals-systems`](../../signals-systems/syllabus.md) and to the impedance-matching problem in optics and RF — "terminate in the characteristic impedance and there is no reflection" is the same statement as an antireflection coating in [`semiconductor-devices` 4.1](../../semiconductor-devices/lessons/04-01-light-absorption-emission-detection.md).

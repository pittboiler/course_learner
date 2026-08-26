# Semiconductor Devices · Lesson 2.2: The ideal-diode equation

> ⏱ ~15 min · Module 2: The p–n junction · Builds on: [1.4 The continuity equations](01-04-continuity-equations.md), [2.1 Junction electrostatics](02-01-junction-electrostatics.md) · Unlocks: [2.3 Junction and diffusion capacitance](02-03-junction-diffusion-capacitance.md), [3.1 The BJT: transistor action](03-01-bjt-transistor-action.md)

## Why this matters

This is the derivation the course has been building toward. [`electronics` 1.2](../../electronics/lessons/01-02-pn-junction-diode-models.md) *gave* you $I = I_0(e^{qV/k_BT}-1)$ and taught you to use it. Here you find out where it comes from — and, more importantly, what $I_0$ actually is, because $I_0$ is the parameter every real design decision moves.

The result is also the most reused equation in the subject. The same exponential, with different prefactors, is the BJT's collector current, the solar cell's dark current, the LED's I–V, and the subthreshold current of a MOSFET. Derive it once carefully here and four later lessons become bookkeeping.

## The idea

Forward bias lowers the barrier. That is the entire mechanism, and everything else is careful accounting.

In equilibrium, the built-in potential holds back a colossal number of majority carriers. Only the exponential tail of the distribution has enough energy to climb it, and that trickle exactly balances the trickle of minority carriers falling *down* the barrier from the other side. Net current: zero.

Now apply a forward bias $V$. Almost all of it appears across the depletion region (the neutral regions are good conductors), so the barrier drops from $V_{bi}$ to $V_{bi}-V$. The number of majority carriers that can climb it is a Boltzmann factor, so it multiplies by $e^{qV/k_BT}$ — but the reverse trickle, carriers falling downhill, does not change at all, because falling downhill was never the hard part.

That asymmetry is the diode. One direction is exponentially sensitive to bias; the other is stuck at whatever the minority-carrier supply happens to be. Subtract and you get $I_0(e^{qV/k_BT}-1)$.

The final step is turning that statement into a number. The carriers that climb the barrier are injected into the neutral region on the far side, where they become *excess minority carriers* — and [1.4](01-04-continuity-equations.md) already solved exactly that problem. The [law of the junction](../reference.md#law-of-the-junction) supplies the boundary condition, the diffusion equation supplies the profile, and its slope at the depletion edge is the current.

## The formal version

**The law of the junction.** At the edges of the depletion region under bias $V$, the minority carrier concentrations are their equilibrium values multiplied by the Boltzmann factor:

$$\boxed{\;p_n(x_n) = p_{n0}\,e^{qV/k_BT}, \qquad n_p(-x_p) = n_{p0}\,e^{qV/k_BT}.\;}$$

*In words: forward bias multiplies the minority carrier density at the depletion edge by $e^{V/V_T}$.*

*Where it comes from.* In equilibrium the barrier $V_{bi}$ sustains the ratio $p_{p0}/p_{n0} = e^{qV_{bi}/k_BT}$ (this is exactly the flashback in [2.1](02-01-junction-electrostatics.md)). Under bias the barrier is $V_{bi}-V$, and — assuming the depletion region is thin enough that carriers cross it without recombining, so the quasi-Fermi levels are flat across it — the same Boltzmann relation holds with the new barrier:

$$\frac{p_p}{p_n(x_n)} = e^{q(V_{bi}-V)/k_BT}.$$

Under low-level injection the majority density $p_p\approx p_{p0}$ is unchanged, so dividing by the equilibrium relation gives the boxed result.

The **excess** at the edge is what drives diffusion:

$$\delta p_n(x_n) = p_{n0}\left(e^{qV/k_BT}-1\right).$$

**Solve the diffusion equation on each side.** Take a long-base diode. From [1.4](01-04-continuity-equations.md), on the $n$-side:

$$\delta p_n(x) = p_{n0}\left(e^{qV/k_BT}-1\right)e^{-(x-x_n)/L_p},$$

$$J_p(x_n) = \frac{qD_p\,\delta p_n(x_n)}{L_p} = \frac{qD_pp_{n0}}{L_p}\left(e^{qV/k_BT}-1\right).$$

Symmetrically on the $p$-side with electrons.

**Add the two currents.** Here is the step that makes the whole thing work: the hole current at $x_n$ and the electron current at $-x_p$ are evaluated at *different places*, yet we add them. The justification is that in the ideal case **no recombination occurs inside the depletion region**, so each carrier current is constant across it — whatever hole current enters at $-x_p$ exits at $x_n$. Total current is therefore the sum, and it is the same everywhere in the device:

$$\boxed{\;I = I_0\left(e^{qV/k_BT}-1\right), \qquad I_0 = qA\left[\frac{D_pp_{n0}}{L_p}+\frac{D_nn_{p0}}{L_n}\right].\;}$$

Substituting $p_{n0} = n_i^2/N_d$ and $n_{p0} = n_i^2/N_a$:

$$\boxed{\;I_0 = qAn_i^2\left[\frac{D_p}{L_pN_d}+\frac{D_n}{L_nN_a}\right] = qAn_i^2\left[\frac{1}{N_d}\sqrt{\frac{D_p}{\tau_p}}+\frac{1}{N_a}\sqrt{\frac{D_n}{\tau_n}}\right].\;}$$

*In words: the saturation current is set by how many minority carriers exist ($n_i^2/N$) times how fast they can be delivered ($D/L$, a velocity).*

**Reading $I_0$ — five design levers.**

| Factor | Effect | Why it matters |
|---|---|---|
| $n_i^2$ | $\propto e^{-E_g/k_BT}$ | **doubles every ~10 °C** in silicon; the origin of all thermal drift |
| $1/N$ | heavier doping → smaller $I_0$ | why heavily doped diodes have higher $V_F$ |
| $A$ | area | bigger diode, more current, same $V_F$ per unit area |
| $D/L = \sqrt{D/\tau}$ | shorter lifetime → larger $I_0$ | why gold-doping raises $V_F$ |
| $E_g$ | in $n_i^2$ | Si $V_F\approx0.7$ V, Ge $\approx0.3$ V, GaAs $\approx1.2$ V |

**The short-base version.** If the neutral region is shorter than a diffusion length (the usual case in an integrated diode), [1.4](01-04-continuity-equations.md) says replace $L$ by the neutral width $W_B$:

$$I_0^{\rm short} = qAn_i^2\left[\frac{D_p}{W_nN_d}+\frac{D_n}{W_pN_a}\right],$$

which is **larger** by $L/W$ — a factor of 10–100 in practice. Real integrated diodes are short-base, and using the long-base formula underestimates their current badly.

**Forward-bias behaviour.** For $V\gtrsim3V_T = 78$ mV the $-1$ is negligible:

$$I\approx I_0e^{V/V_T} \quad\Longrightarrow\quad V = V_T\ln\frac{I}{I_0}.$$

*In words: current is exponential in voltage, so voltage is only logarithmic in current* — which is why a diode looks like a fixed 0.7 V drop. Two useful reflexes:

$$\frac{dV}{d(\log_{10}I)} = V_T\ln10 = 60\ \mathrm{mV/decade}, \qquad r_d = \frac{dV}{dI} = \frac{V_T}{I} = \frac{26\ \mathrm{mV}}{I}.$$

Sixty millivolts per decade of current is the fundamental exponential slope, and it reappears as the **subthreshold swing limit** of every MOSFET ([3.6](03-06-short-channel-effects-scaling.md)) — the same Boltzmann statistics, the same 60 mV, the reason CMOS supply voltages stopped scaling.

**Reverse bias.** For $V\lesssim-3V_T$, $I\to-I_0$: a constant, tiny, voltage-independent leakage. *In words: reverse current saturates because it is limited by how many minority carriers exist to be swept, not by how hard you pull.*

**Departures from ideality (which are the rule, not the exception).** Real diodes are written

$$I = I_0\left(e^{qV/nk_BT}-1\right)$$

with an **ideality factor** $n$ between 1 and 2.

- $n\approx1$: diffusion-dominated, the ideal case above. Moderate forward bias.
- $n\approx2$: **recombination in the depletion region** dominates. We assumed none; in reality SRH recombination there contributes a current $\propto n_ie^{qV/2k_BT}$ — note $n_i$, not $n_i^2$, and the factor 2 in the exponent, both because the recombination rate peaks where $n\approx p\approx n_ie^{qV/2k_BT}$. This term dominates at *low* forward bias, where it is larger than the $n_i^2$ diffusion term.
- At *high* forward bias, high-level injection and series resistance both flatten the curve further.

So a real silicon diode's log-I–V has three regions: slope 120 mV/decade at low bias (recombination), 60 mV/decade in the middle (diffusion), and a resistive roll-off at high current. Measuring those slopes is standard diode characterization.

**Reverse leakage, honestly.** The same depletion-region generation gives a reverse current

$$I_{\rm gen} = \frac{qAn_iW}{2\tau},$$

which for silicon at room temperature is typically **orders of magnitude larger** than the ideal $I_0$. Two fingerprints distinguish them: $I_{\rm gen}\propto n_i\propto e^{-E_g/2k_BT}$ while $I_0\propto n_i^2\propto e^{-E_g/k_BT}$ (so the diffusion term has twice the activation energy and takes over at high temperature), and $I_{\rm gen}\propto W\propto\sqrt{V_{bi}-V}$ so it *grows* with reverse bias rather than saturating. A real silicon diode's reverse current visibly rises with voltage for exactly this reason.

## Picture

![Two panels. Left: minority carrier concentration profiles across a forward-biased junction on a log scale, showing the equilibrium levels p_n0 and n_p0 far from the junction, the enormous injected peaks at the depletion edges raised by the Boltzmann factor, and exponential decays over one diffusion length on each side, with the slopes at the depletion edges marked as the two current components. Right: a semilog plot of diode current against voltage showing three straight-line regions — a shallow 120 mV per decade recombination region at low bias, a 60 mV per decade diffusion region in the middle, and a series-resistance roll-off at high current — with the reverse saturation region flat and slightly rising.](assets/02-02-fig1.svg)

Left: the derivation in one picture. The law of the junction sets the two peaks; the diffusion equation sets the two exponential tails; the **slopes at the depletion edges** are the two current components, and their sum is the diode current. Note the vertical scale is logarithmic — the injected peaks are many orders of magnitude above the equilibrium minority levels, yet still far below the majority density, which is what "low-level injection" buys.

Right: what you actually measure. The middle region is the ideal-diode equation, and its 60 mV/decade slope is the signature of Boltzmann statistics. Neither of the flanking regions is in the derivation above, and both matter in practice.

## Worked examples

**Example 1 (a complete $I_0$ calculation, and the turn-on voltage).** A silicon $p^+n$ diode has $N_a = 10^{18}$, $N_d = 10^{16}\ \mathrm{cm^{-3}}$, area $A = 10^{-4}\ \mathrm{cm^2}$, and lifetimes $\tau_p = \tau_n = 1\ \mu$s. Long-base. Find $I_0$ and the forward voltage at 1 mA.

*Minority densities.*

$$p_{n0} = \frac{n_i^2}{N_d} = \frac{10^{20}}{10^{16}} = 10^{4}\ \mathrm{cm^{-3}}, \qquad n_{p0} = \frac{n_i^2}{N_a} = \frac{10^{20}}{10^{18}} = 10^{2}\ \mathrm{cm^{-3}}.$$

*Transport parameters* (from the [1.2](01-02-drift-diffusion-einstein.md) table): at $N_d=10^{16}$, $D_p = 10.4$; at $N_a = 10^{18}$, $D_n = 9.1$.

$$L_p = \sqrt{(10.4)(10^{-6})} = 3.22\times10^{-3}\ \mathrm{cm}, \qquad L_n = \sqrt{(9.1)(10^{-6})} = 3.02\times10^{-3}\ \mathrm{cm}.$$

*The two terms.*

$$\frac{D_pp_{n0}}{L_p} = \frac{(10.4)(10^{4})}{3.22\times10^{-3}} = 3.23\times10^{7}, \qquad \frac{D_nn_{p0}}{L_n} = \frac{(9.1)(10^{2})}{3.02\times10^{-3}} = 3.01\times10^{5}.$$

**The $n$-side hole term is 107 times larger.** That is the one-sided junction showing up again: injection happens overwhelmingly into the *lightly doped* side, because that side has more minority carriers to spare. Real diodes are designed this way on purpose, and it is the same asymmetry that gives a BJT its emitter injection efficiency ([3.2](03-02-bjt-currents-and-gain.md)).

$$I_0 = qA(3.23\times10^{7}+3.01\times10^{5}) = (1.602\times10^{-19})(10^{-4})(3.26\times10^{7}) = 5.22\times10^{-16}\ \mathrm{A}.$$

About half a femtoamp.

*Forward voltage at 1 mA.*

$$V = V_T\ln\frac{I}{I_0} = 0.0259\ln\frac{10^{-3}}{5.22\times10^{-16}} = 0.0259\ln(1.92\times10^{12}) = 0.0259(28.28) = 0.732\ \mathrm{V}.$$

**0.73 V** — the familiar silicon diode drop, derived from doping, geometry and lifetime rather than asserted.

*And at 10 mA?* $V = 0.0259\ln(1.92\times10^{13}) = 0.792$ V. A tenfold current increase costs exactly 60 mV ✓.

**Example 2 (why germanium turns on at 0.3 V and GaAs at 1.2 V).** Compare the same geometry in three materials, at 1 mA.

The whole difference is $n_i^2 = N_cN_ve^{-E_g/k_BT}$. Taking representative values:

| Material | $E_g$ (eV) | $n_i$ (cm$^{-3}$) | $n_i^2$ |
|---|---|---|---|
| Ge | 0.66 | $2.4\times10^{13}$ | $5.8\times10^{26}$ |
| Si | 1.12 | $1.0\times10^{10}$ | $1.0\times10^{20}$ |
| GaAs | 1.42 | $2.1\times10^{6}$ | $4.4\times10^{12}$ |

Holding everything else fixed at the Example 1 values, $I_0\propto n_i^2$:

$$I_0^{\rm Ge} = 5.22\times10^{-16}\times\frac{5.8\times10^{26}}{10^{20}} = 3.0\times10^{-9}\ \mathrm{A},$$
$$I_0^{\rm GaAs} = 5.22\times10^{-16}\times\frac{4.4\times10^{12}}{10^{20}} = 2.3\times10^{-23}\ \mathrm{A}.$$

Forward voltage at 1 mA:

$$V_{\rm Ge} = 0.0259\ln\frac{10^{-3}}{3.0\times10^{-9}} = 0.0259(12.72) = 0.329\ \mathrm{V},$$
$$V_{\rm Si} = 0.732\ \mathrm{V}\ \text{(above)},$$
$$V_{\rm GaAs} = 0.0259\ln\frac{10^{-3}}{2.3\times10^{-23}} = 0.0259(45.23) = 1.171\ \mathrm{V}.$$

**0.33 V, 0.73 V, 1.17 V** — the textbook numbers, and now visibly a consequence of one thing: the band gap, entering exponentially through $n_i^2$.

*The general rule.* $V_F$ tracks $E_g$ almost linearly, because $\ln I_0$ contains $-E_g/k_BT$ and $V = V_T\ln(I/I_0)$ multiplies it back by $V_T$. Roughly, $V_F\approx E_g/q - 0.4$ V at ordinary currents.

*Why this matters beyond diodes.* The same relation caps a solar cell's open-circuit voltage at roughly $E_g/q-0.4$ V ([4.3](04-03-solar-cell.md)) — so a wide-gap cell gives high voltage but absorbs less of the spectrum, and a narrow-gap cell does the reverse. That trade-off, visible right here in $I_0$, is what produces the Shockley–Queisser efficiency limit and its optimum near 1.3 eV. It is also why a Schottky diode ([2.5](02-05-metal-semiconductor-heterojunctions.md)), whose current comes from a *barrier height* rather than from $n_i^2$, can turn on at 0.3 V in silicon — it sidesteps the band gap entirely.

## Watch out

- **You might think $I_0$ is a constant of the diode.** It doubles roughly every 10 °C, because $n_i^2\propto e^{-E_g/k_BT}$. That is why a forward-biased diode at fixed current has $dV/dT\approx-2$ mV/°C, and why bipolar circuits need temperature compensation.
- **You might apply the long-base formula to an integrated diode.** Almost every real diode is short-base, giving $I_0$ larger by $L/W$ — often 10–100×, i.e. 60–120 mV of forward voltage. Check $W$ against $L$ first.
- **You might expect the measured reverse current to equal $I_0$.** In silicon it is usually far larger, dominated by depletion-region generation, and it *rises* with reverse bias (as $\sqrt{V}$, through $W$) instead of saturating. The ideal $I_0$ is the diffusion floor, not the observed leakage.
- **You might use $n=1$ everywhere.** At low forward bias recombination gives $n\approx2$ and 120 mV/decade. Fitting a single ideality factor across the whole curve gives a meaningless average; fit the regions separately.
- **You might forget the $-1$.** It matters only for $|V|\lesssim3V_T$, but that region includes zero bias — and it is what makes $I(0)=0$, as it must be. Dropping it too early gives a diode that conducts at zero volts.

## One-liner

> Forward bias lowers the barrier by $V$, so the uphill flux multiplies by $e^{qV/k_BT}$ while the downhill flux does not move — and the injected minority carriers diffusing away set the prefactor $I_0 = qAn_i^2\sum D/(LN)$.

## Problems

**P1 (🟢)** A silicon diode has $I_0 = 10^{-14}$ A at 300 K. (a) Find the forward voltage at 1 mA. (b) At 10 mA. (c) Find the small-signal resistance at 1 mA. (d) Find the reverse current at $-5$ V, ideally.

**P2 (🟡)** A $p^+n$ silicon diode has $N_d = 5\times10^{15}\ \mathrm{cm^{-3}}$, $A = 5\times10^{-4}\ \mathrm{cm^2}$, $\tau_p = 2\ \mu$s, $D_p = 12\ \mathrm{cm^2/s}$, and the $p^+$ side contributes negligibly. (a) Find $p_{n0}$, $L_p$, and $I_0$ for a long-base diode. (b) Find the current at $V = 0.6$ V. (c) The diode is actually short-base with $W_n = 2\ \mu$m. Recompute $I_0$ and the current at 0.6 V. (d) By how many millivolts does the short-base geometry shift the forward voltage at fixed current?

**P3 (🔴)** A silicon diode at 300 K has $I_0 = 10^{-15}$ A (diffusion) and a depletion-region generation/recombination component with $I_{02} = 10^{-9}$ A and ideality 2, so that $I = I_{0}(e^{V/V_T}-1)+I_{02}(e^{V/2V_T}-1)$. (a) At what forward voltage do the two terms contribute equally? (b) Sketch (describe) the semilog I–V and give the slope in each region. (c) At 1 mA, what fraction of the current is the recombination component? (d) The temperature rises to 350 K. Estimate how each component scales and comment on which dominates at low bias then.

<details>
<summary>Solutions</summary>

**P1** (a) $$V = V_T\ln\frac{I}{I_0} = 0.0259\ln\frac{10^{-3}}{10^{-14}} = 0.0259\ln(10^{11}) = 0.0259(25.33) = 0.656\ \mathrm{V}.$$

(b) A decade more current costs $V_T\ln10 = 59.6$ mV:

$$V = 0.656+0.060 = 0.716\ \mathrm{V}.$$

(c) $$r_d = \frac{V_T}{I} = \frac{0.0259}{10^{-3}} = 25.9\ \Omega.$$

(d) Ideally the reverse current saturates: $I\to-I_0 = -10^{-14}$ A = $-10$ fA. (In a real silicon diode, generation in the depletion region would make the measured value orders of magnitude larger and visibly bias-dependent — see P3.)

**P2** (a) $$p_{n0} = \frac{n_i^2}{N_d} = \frac{10^{20}}{5\times10^{15}} = 2\times10^{4}\ \mathrm{cm^{-3}}.$$

$$L_p = \sqrt{D_p\tau_p} = \sqrt{(12)(2\times10^{-6})} = \sqrt{2.4\times10^{-5}} = 4.90\times10^{-3}\ \mathrm{cm} = 49.0\ \mu\mathrm{m}.$$

$$I_0 = \frac{qAD_pp_{n0}}{L_p} = \frac{(1.602\times10^{-19})(5\times10^{-4})(12)(2\times10^{4})}{4.90\times10^{-3}} = \frac{1.922\times10^{-17}}{4.90\times10^{-3}} = 3.92\times10^{-15}\ \mathrm{A}.$$

(b) $$I = I_0e^{V/V_T} = 3.92\times10^{-15}\,e^{0.6/0.0259} = 3.92\times10^{-15}\,e^{23.17} = 3.92\times10^{-15}(1.157\times10^{10}) = 4.54\times10^{-5}\ \mathrm{A} = 45.4\ \mu\mathrm{A}.$$

(c) Short base: replace $L_p$ by $W_n = 2\times10^{-4}$ cm:

$$I_0^{\rm short} = \frac{1.922\times10^{-17}}{2\times10^{-4}} = 9.61\times10^{-14}\ \mathrm{A},$$

larger by $L_p/W_n = 49.0/2 = 24.5\times$ ✓.

$$I = 9.61\times10^{-14}(1.157\times10^{10}) = 1.11\times10^{-3}\ \mathrm{A} = 1.11\ \mathrm{mA}.$$

(d) At fixed current, $\Delta V = V_T\ln(I_0^{\rm short}/I_0^{\rm long}) = 0.0259\ln(24.5) = 0.0259(3.20) = 0.083$ V.

**The short-base diode turns on 83 mV lower** — a large, easily measurable difference, and a good reason to know which geometry you have. (Physically: the carriers are extracted before they can recombine, so the same injection level delivers 24.5× the current.)

**P3** (a) Set the two terms equal (dropping the $-1$s):

$$I_0e^{V/V_T} = I_{02}e^{V/2V_T} \quad\Longrightarrow\quad e^{V/2V_T} = \frac{I_{02}}{I_0} = \frac{10^{-9}}{10^{-15}} = 10^{6}.$$

$$\frac{V}{2V_T} = \ln(10^6) = 13.82 \quad\Longrightarrow\quad V = 2(0.0259)(13.82) = 0.716\ \mathrm{V}.$$

At that crossover the total current is $2I_0e^{V/V_T} = 2(10^{-15})e^{27.64} = 2(10^{-15})(1.0\times10^{12}) = 2.0\times10^{-3}$ A = 2.0 mA.

(b) Three straight regions on a semilog plot:

- **$V\lesssim0.72$ V:** recombination dominates, $I\approx I_{02}e^{V/2V_T}$. Slope $2V_T\ln10 = 119$ mV/decade.
- **$V\gtrsim0.72$ V:** diffusion dominates, $I\approx I_0e^{V/V_T}$. Slope $V_T\ln10 = 60$ mV/decade.
- **High current:** series resistance $R_s$ adds $IR_s$ to the applied voltage, bending the curve over and eventually making it linear.

The change of slope at 0.72 V is the visible knee, and the two extrapolated intercepts give $I_{02}$ and $I_0$ separately — which is exactly how these parameters are extracted from a measured device.

(c) At 1 mA we are just below the crossover. Solve $I_{\rm tot} = 10^{-3}$ numerically. Trying $V = 0.700$ V:

$$I_{\rm diff} = 10^{-15}e^{0.700/0.0259} = 10^{-15}e^{27.03} = 10^{-15}(5.47\times10^{11}) = 5.47\times10^{-4},$$
$$I_{\rm rec} = 10^{-9}e^{0.350/0.0259} = 10^{-9}e^{13.51} = 10^{-9}(7.39\times10^{5}) = 7.39\times10^{-4}.$$

Total $1.29\times10^{-3}$ — slightly high. Trying $V = 0.694$:

$$I_{\rm diff} = 10^{-15}e^{26.80} = 4.34\times10^{-4}, \qquad I_{\rm rec} = 10^{-9}e^{13.40} = 6.59\times10^{-4},$$

total $1.09\times10^{-3}$. At $V = 0.689$: $I_{\rm diff} = 3.58\times10^{-4}$, $I_{\rm rec} = 5.98\times10^{-4}$, total $9.55\times10^{-4}$. Interpolating, $V\approx0.691$ V and

$$\text{recombination fraction} \approx \frac{6.21\times10^{-4}}{1.01\times10^{-3}} \approx 62\%.$$

So even at 1 mA — a perfectly ordinary operating current — the majority of the current in this diode is depletion-region recombination, not the ideal diffusion term. Real diodes are frequently like this, which is why measured ideality factors of 1.2–1.5 are common: they are a *blend* of the two mechanisms, not a physical constant.

(d) Temperature scaling from 300 K to 350 K, with $V_T$ rising from 0.0259 to $0.0259\times(350/300) = 0.0302$ V:

- **Diffusion:** $I_0\propto n_i^2\propto e^{-E_g/k_BT}$. The ratio is $e^{-1.12/(8.617\times10^{-5}\times350)}/e^{-1.12/(8.617\times10^{-5}\times300)} = e^{-37.13+43.32} = e^{6.19} = 488$.
- **Recombination:** $I_{02}\propto n_i\propto e^{-E_g/2k_BT}$, so the ratio is $e^{6.19/2} = e^{3.10} = 22$.

**The diffusion term grows 488-fold while the recombination term grows only 22-fold** — a factor of 22 shift in their relative weight. Redoing part (a) at 350 K:

$$e^{V/2V_T} = \frac{I_{02}'}{I_0'} = \frac{10^{-9}(22)}{10^{-15}(488)} = \frac{2.2\times10^{-8}}{4.88\times10^{-13}} = 4.51\times10^{4},$$

$$V = 2(0.0302)\ln(4.51\times10^4) = 2(0.0302)(10.72) = 0.647\ \mathrm{V}.$$

The crossover moves **down** from 0.716 V to 0.647 V, so the ideal diffusion region occupies a larger share of the useful bias range. The general rule: **recombination current dominates at low temperature and low bias; diffusion current dominates at high temperature and high bias**, because the diffusion term carries twice the activation energy. That factor-of-two in activation energy is the cleanest experimental signature separating the two mechanisms, and the same logic distinguishes generation leakage from diffusion leakage under reverse bias.

</details>

## Flashback

**From Lesson 1.4 (The continuity equations):** An $n$-side has $p_{n0} = 10^4\ \mathrm{cm^{-3}}$, $D_p = 12\ \mathrm{cm^2/s}$, $\tau_p = 1\ \mu$s, and is forward-biased to $V = 0.5$ V. (a) Find the excess hole density at the depletion edge. (b) Find $L_p$. (c) Find the hole diffusion current density there. (d) Confirm low-level injection holds if $N_d = 10^{16}$.

<details>
<summary>Solution</summary>

(a) By the law of the junction,

$$\delta p_n(x_n) = p_{n0}\left(e^{V/V_T}-1\right) = 10^4\left(e^{0.5/0.0259}-1\right) = 10^4(e^{19.31}-1) = 10^4(2.43\times10^{8}) = 2.43\times10^{12}\ \mathrm{cm^{-3}}.$$

(b) $L_p = \sqrt{(12)(10^{-6})} = 3.46\times10^{-3}$ cm = 34.6 µm.

(c) $$J_p = \frac{qD_p\,\delta p_n}{L_p} = \frac{(1.602\times10^{-19})(12)(2.43\times10^{12})}{3.46\times10^{-3}} = \frac{4.67\times10^{-6}}{3.46\times10^{-3}} = 1.35\times10^{-3}\ \mathrm{A/cm^2}.$$

(d) $\delta p = 2.43\times10^{12}$ against $N_d = 10^{16}$: the ratio is $2.4\times10^{-4}$ ✓, comfortably low-level.

Worth noting where it *would* fail: at $V = 0.7$ V the excess would be $10^4e^{27.03} = 5.5\times10^{15}$, over half the doping — high-level injection, where the ideal-diode derivation breaks down and the current grows as $e^{V/2V_T}$ instead. That is the third region of the P3 curve, and it is why power diodes running at high current density need a different model entirely.

</details>

## Connections

- **Backward:** the boundary condition is [2.1](02-01-junction-electrostatics.md)'s barrier lowering, and the profile it feeds is [1.4](01-04-continuity-equations.md)'s diffusion solution; the recombination term uses [1.3](01-03-generation-recombination.md)'s SRH rate in the depleted limit.
- **Forward:** [2.3](02-03-junction-diffusion-capacitance.md) differentiates the stored charge behind this current; [3.1](03-01-bjt-transistor-action.md) puts a second junction next to the first and collects the injected carriers before they recombine; [4.3](04-03-solar-cell.md) adds a photogenerated term and runs the same equation in the fourth quadrant.
- **Sideways:** the 60 mV/decade slope is the Boltzmann factor showing up as a measurable circuit parameter, the same statistics as the Arrhenius rate law in [`reaction-engineering`](../../reaction-engineering/syllabus.md); the exponential I–V is what makes the diode a logarithmic element, exploited in log amplifiers and in the translinear circuits of [`electronics`](../../electronics/syllabus.md).

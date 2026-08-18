# Engineering Thermodynamics · Lesson 3.4: Isentropic processes & efficiency

> ⏱ ~15 min · Module 3: The Second Law & Entropy · Builds on: [3.3 Entropy balance & Tds relations](03-03-entropy-balance-tds-relations.md), [2.4 Steady-flow devices that do work](02-04-steady-flow-devices-work.md) · Unlocks: Module 4 — every cycle scores its devices this way

## Why this matters

A real turbine, compressor, or nozzle is a black box: fluid goes in, fluid comes out, and you want to know how good the machine is. But "good" needs a yardstick. The Second Law hands you one for free — the **best a smooth, adiabatic device could ever do** is run reversibly, which (from [3.3](03-03-entropy-balance-tds-relations.md)) means the exit entropy equals the inlet entropy. That ideal machine is the benchmark; the real one always falls short by exactly the entropy it generates. Every power and refrigeration cycle in Module 4 is built from these four devices, and each one gets graded against its isentropic ideal — so this single idea is how you'll turn "the plant makes 40 MW" into "the turbine is 88% efficient." Master the scoring rule here and the cycles become bookkeeping.

## The idea

Take an adiabatic device — no heat crosses its walls (it's fast, or well-insulated). The entropy balance from [3.3](03-03-entropy-balance-tds-relations.md) says the entropy leaving equals the entropy entering plus whatever the device *generates* through friction, mixing, and unrestrained expansion. Kill all that irreversibility and you kill the generated entropy: the fluid comes out at the *same entropy* it went in. That's an **isentropic** process — "iso" (same) + "entropic" (entropy). It is the perfect, loss-free version of the device.

Here's the payoff. Squeeze water through a real turbine and friction reheats the steam slightly on the way out — it leaves a little warmer, a little higher in enthalpy, and you extract *less* work than you could have. The isentropic machine leaves the fluid as cold and low-enthalpy as physics permits at the exit pressure, wringing out the maximum work. So the honest grade for a turbine is a ratio: **the work you actually got, divided by the work the ideal machine would have gotten**, both fed the same inlet and dumping to the same exit pressure. For a compressor or pump — where you *pay* work rather than harvest it — the ratio flips: irreversibility makes you pay *more*, so you compare the ideal (cheap) cost to your actual (expensive) one.

## The formal version

**Isentropic process.** A process is isentropic if $s_2 = s_1$ (units of $s$: $\mathrm{kJ/(kg\cdot K)}$). It is the ideal limit of an adiabatic device: reversible ($s_{\text{gen}} = 0$) **and** adiabatic ($q = 0$) together force, via the entropy balance $s_2 = s_1 + s_{\text{gen}}$, exactly $s_2 = s_1$. *In words: no heat in or out and no internal friction means the entropy you started with is the entropy you finish with.*

**Isentropic relations for an ideal gas (constant $k$).** Setting $\Delta s = 0$ in the ideal-gas entropy formula from [3.3](03-03-entropy-balance-tds-relations.md) and solving gives, with the specific-heat ratio $k = c_p/c_v$ (for air $k = 1.4$),

$$\frac{T_2}{T_1} = \left(\frac{p_2}{p_1}\right)^{(k-1)/k} = \left(\frac{v_1}{v_2}\right)^{k-1}.$$

Here $T$ is absolute temperature (K), $p$ is pressure (kPa), $v$ is specific volume ($\mathrm{m^3/kg}$). *In words: for a loss-free ideal-gas process, temperature, pressure, and volume are locked together by these power laws — drop the pressure and the temperature drops in lockstep.* (These only hold for an ideal gas with roughly constant specific heats; for steam you go to the tables instead.)

**Isentropic process for steam.** No shortcut formula — use the property tables. Set $s_{2s} = s_1$ at the exit pressure $p_2$. If that entropy lands under the vapor dome, the ideal exit is a wet mixture whose quality solves

$$s_{2s} = s_1 \;\Longrightarrow\; x_{2s} = \frac{s_1 - s_f}{s_{fg}}, \qquad h_{2s} = h_f + x_{2s}\,h_{fg},$$

with $s_f, s_{fg}, h_f, h_{fg}$ the saturation values at $p_2$ and $h$ the specific enthalpy (kJ/kg). The subscript "$2s$" flags the *ideal* (isentropic) exit state; "$2a$" is the *actual* one. *In words: the ideal exit sits straight below the inlet on an $h$–$s$ chart at the same entropy, and its quality tells you how wet the steam gets.*

**Isentropic efficiency** compares the real device to that ideal, at the **same inlet state and same exit pressure**:

$$\eta_T = \frac{h_1 - h_{2a}}{h_1 - h_{2s}}\ \text{(turbine)}, \qquad \eta_C = \frac{h_{2s} - h_1}{h_{2a} - h_1}\ \text{(compressor/pump)}, \qquad \eta_N = \frac{V_{2a}^2}{V_{2s}^2}\ \text{(nozzle)}.$$

The turbine ratio is *actual work over ideal work* (both are enthalpy drops, since an adiabatic turbine's work is $w = h_1 - h_2$ from [2.4](02-04-steady-flow-devices-work.md)). The compressor ratio is **inverted** — *ideal work over actual work* — because there the numerator and denominator are work *inputs*, and the ideal input is the smaller one, so flipping keeps $\eta \le 1$. The nozzle produces no work; it converts enthalpy to kinetic energy, so it's graded on exit velocity $V$ (m/s) squared, i.e. actual kinetic energy over ideal. *In words: all three are (what you got) / (what perfection would give), arranged so the number always lands between 0 and 1.*

## Picture

![h–s diagram of a turbine expansion: a vertical ideal path from state 1 down to 2s at constant entropy, and an actual path curving right to 2a at higher entropy, with brackets marking the ideal work drop, the smaller actual work drop, and the lost work between them](assets/03-04-fig1.svg)

The vertical blue path is the ideal expansion — same entropy, biggest enthalpy drop, most work ($w_s$). The coral path slants right because the real device *generates* entropy; it ends higher up at $2a$, so its drop $w_a$ is smaller. The grey "lost" gap between $2a$ and $2s$ is the work friction stole. Both exits sit at the same pressure $p_2$ — that's the fair-comparison rule made visual.

## Worked examples

**Example 1 (steam turbine — the full table workflow).** Steam enters a turbine at 4 MPa, 400 °C and exhausts to 50 kPa. Superheated tables give the inlet: $h_1 = 3213.6\ \mathrm{kJ/kg}$, $s_1 = 6.7714\ \mathrm{kJ/(kg\cdot K)}$. The measured actual exit is a wet mixture of quality $x_{2a} = 0.90$. Find the isentropic efficiency.

*Step 1 — the ideal exit.* Set $s_{2s} = s_1 = 6.7714$. At 50 kPa, saturation values are $s_f = 1.0912$, $s_{fg} = 6.5019$, $h_f = 340.5$, $h_{fg} = 2304.7$. Since $6.7714$ lies between $s_f$ and $s_g = s_f + s_{fg} = 7.5931$, the ideal exit is wet:

$$x_{2s} = \frac{s_1 - s_f}{s_{fg}} = \frac{6.7714 - 1.0912}{6.5019} = \frac{5.6802}{6.5019} = 0.874.$$

$$h_{2s} = h_f + x_{2s}\,h_{fg} = 340.5 + 0.874(2304.7) = 340.5 + 2014.3 = 2354.8\ \mathrm{kJ/kg}.$$

*Step 2 — the actual exit* at the same 50 kPa, $x_{2a} = 0.90$:

$$h_{2a} = 340.5 + 0.90(2304.7) = 340.5 + 2074.2 = 2414.7\ \mathrm{kJ/kg}.$$

*Step 3 — the efficiency:*

$$\eta_T = \frac{h_1 - h_{2a}}{h_1 - h_{2s}} = \frac{3213.6 - 2414.7}{3213.6 - 2354.8} = \frac{798.9}{858.8} = 0.930.$$

So the turbine is **93% efficient** — it captures 798.9 of the 858.8 kJ/kg the ideal machine would. *Check.* $x_{2a} > x_{2s}$ (0.90 vs 0.874): the real steam comes out *drier and warmer*, exactly as friction-reheat predicts, and higher $h_{2a}$ means a smaller drop and $\eta_T < 1$. ✓ Units: enthalpy ratio is dimensionless. ✓

**Example 2 (ideal gas — the shortcut formula).** Air (ideal gas, $k = 1.4$) expands isentropically through a turbine from 500 K, 500 kPa to 100 kPa. Find the ideal exit temperature $T_{2s}$ and the ideal work per kg ($c_p = 1.005\ \mathrm{kJ/(kg\cdot K)}$).

Use the pressure–temperature isentropic relation — no tables needed for an ideal gas:

$$T_{2s} = T_1\left(\frac{p_2}{p_1}\right)^{(k-1)/k} = 500\left(\frac{100}{500}\right)^{0.4/1.4} = 500\,(0.2)^{0.2857} = 500(0.6314) = 315.7\ \mathrm{K}.$$

The ideal work is the enthalpy drop, $w_s = c_p(T_1 - T_{2s}) = 1.005(500 - 315.7) = 1.005(184.3) = 185.2\ \mathrm{kJ/kg}$.

*Check.* Expansion drops the pressure, so it must drop the temperature — and it did, 500 → 316 K. ✓ The exponent $(k-1)/k = 0.2857$ is positive and less than 1, so temperature falls *gentler* than pressure (pressure fell to 20%, temperature only to 63%) — the hallmark of an isentrope. ✓ Units: $c_p \cdot \Delta T = \mathrm{kJ/(kg\cdot K)} \cdot \mathrm{K} = \mathrm{kJ/kg}$. ✓

## Watch out

- **You might think isentropic just means adiabatic.** It's *adiabatic and reversible*. A real turbine is adiabatic ($q = 0$) but still generates entropy, so its exit entropy is *higher* than the inlet — it's adiabatic but **not** isentropic. Isentropic is the friction-free idealization you compare against, never the real machine.
- **You might invert the compressor formula the wrong way.** For a turbine you divide actual work by ideal; for a compressor or pump you divide *ideal* by actual — $\eta_C = (h_{2s}-h_1)/(h_{2a}-h_1)$. The rule that never lies: arrange the ratio so the answer sits below 1. Since irreversibility makes a compressor cost *more* work, the ideal (smaller) input goes on top.
- **You might compare the real and ideal exits at different pressures.** The efficiency is only meaningful when $2a$ and $2s$ share the same exit pressure $p_2$ — that's what "the best you could do *to that back-pressure*" means. Change $p_2$ and you've changed the benchmark. (Their temperatures and entropies differ; only the pressure must match.)

## One-liner

> Isentropic ($s_2 = s_1$) is the reversible-adiabatic ideal every real turbine, compressor, and nozzle is graded against — efficiency is always (what you got) / (what perfection gives), flipped for work-consumers so it lands under 1.

## Problems

**P1 (🟢)** Air ($k = 1.4$) is compressed isentropically from 300 K, 100 kPa to 800 kPa. Find the ideal exit temperature $T_{2s}$.

**P2 (🟡)** Steam enters a turbine at 8 MPa, 480 °C ($h_1 = 3347.5\ \mathrm{kJ/kg}$, $s_1 = 6.6586\ \mathrm{kJ/(kg\cdot K)}$) and exhausts to 10 kPa. At 10 kPa: $h_f = 191.8$, $h_{fg} = 2392.8$, $s_f = 0.6493$, $s_{fg} = 7.5009$. (a) Find the ideal exit state $h_{2s}$. (b) If the turbine's isentropic efficiency is $\eta_T = 0.85$, find the actual work output per kg.

**P3 (🔴)** Air ($k = 1.4$, $c_p = 1.005$) enters a compressor at 100 kPa, 300 K and is compressed to 600 kPa with isentropic efficiency $\eta_C = 0.80$. Find (a) the ideal work input per kg and (b) the actual work input per kg.

<details>
<summary>Solutions</summary>

**P1** Compression raises pressure by a factor of 8, so temperature rises:

$$T_{2s} = T_1\left(\frac{p_2}{p_1}\right)^{(k-1)/k} = 300\,(8)^{0.2857} = 300(1.811) = 543.4\ \mathrm{K}.$$

*Check.* Compressing *heats* an ideal gas, so $T_{2s} > T_1$ — it climbed from 300 to 543 K. ✓ Pressure went up 8×, temperature only 1.81× (the $(k-1)/k = 0.2857$ power softens it). ✓

**P2** (a) Set $s_{2s} = s_1 = 6.6586$ at 10 kPa. It lies between $s_f = 0.6493$ and $s_g = 0.6493 + 7.5009 = 8.1502$, so the exit is wet:

$$x_{2s} = \frac{s_1 - s_f}{s_{fg}} = \frac{6.6586 - 0.6493}{7.5009} = \frac{6.0093}{7.5009} = 0.801.$$

$$h_{2s} = h_f + x_{2s}\,h_{fg} = 191.8 + 0.801(2392.8) = 191.8 + 1917.2 = 2109.0\ \mathrm{kJ/kg}.$$

(b) Ideal work $w_s = h_1 - h_{2s} = 3347.5 - 2109.0 = 1238.5\ \mathrm{kJ/kg}$. Actual work is $\eta_T$ times ideal:

$$w_a = \eta_T\,w_s = 0.85(1238.5) = 1052.7\ \mathrm{kJ/kg}.$$

*Check.* $\eta_T < 1$ so $w_a < w_s$ — the real turbine delivers less, 1053 vs 1238 kJ/kg. ✓ Equivalently the actual exit is $h_{2a} = h_1 - w_a = 3347.5 - 1052.7 = 2294.8\ \mathrm{kJ/kg} > h_{2s}$, drier steam, as expected. ✓

**P3** (a) Ideal exit temperature first:

$$T_{2s} = 300\,(6)^{0.2857} = 300(1.669) = 500.6\ \mathrm{K}, \qquad w_{s} = c_p(T_{2s} - T_1) = 1.005(500.6 - 300) = 201.6\ \mathrm{kJ/kg}.$$

(b) The compressor efficiency is $\eta_C = w_s/w_a$ (ideal over actual for a work-consumer), so

$$w_a = \frac{w_s}{\eta_C} = \frac{201.6}{0.80} = 252.0\ \mathrm{kJ/kg}.$$

*Check.* Irreversibility makes you pay *more*: $w_a > w_s$ (252 vs 202 kJ/kg). ✓ The extra work reappears as a hotter exit — $T_{2a} = T_1 + w_a/c_p = 300 + 252.0/1.005 = 550.7\ \mathrm{K}$, above the ideal 500.6 K, matching the "friction reheats" picture. ✓

</details>

## Flashback

**From Lesson 3.3 (Entropy balance & Tds relations):** One kg of air (ideal gas, $c_p = 1.005$, $R = 0.287\ \mathrm{kJ/(kg\cdot K)}$) is heated and pressurized from 300 K, 100 kPa to 600 K, 300 kPa. Find the change in specific entropy $\Delta s$. Is this process isentropic?

<details>
<summary>Solution</summary>

Use the ideal-gas entropy-change formula from [3.3](03-03-entropy-balance-tds-relations.md):

$$\Delta s = c_p\ln\frac{T_2}{T_1} - R\ln\frac{p_2}{p_1} = 1.005\ln\frac{600}{300} - 0.287\ln\frac{300}{100}.$$

$$\Delta s = 1.005(0.6931) - 0.287(1.0986) = 0.6966 - 0.3153 = 0.381\ \mathrm{kJ/(kg\cdot K)}.$$

Since $\Delta s = 0.381 \neq 0$, the process is **not** isentropic. *Check.* Heating pushes entropy up ($+0.697$), while raising the pressure pulls it down ($-0.315$); the temperature effect wins, so $\Delta s > 0$. ✓ Had we instead demanded $\Delta s = 0$, the pressure ratio would be pinned to the temperature ratio by the isentropic relation of this lesson — which is exactly where those power laws come from. ✓

</details>

## Connections

- **Backward:** the whole construction rests on [3.3](03-03-entropy-balance-tds-relations.md)'s entropy balance ($s_2 = s_1 + s_{\text{gen}}$) — zeroing $s_{\text{gen}}$ *is* the isentropic ideal — and on [2.4](02-04-steady-flow-devices-work.md)'s device work $w = h_1 - h_2$, which turns the enthalpy drops here into actual kilowatts. The ideal-gas isentropic relations are just [3.3](03-03-entropy-balance-tds-relations.md)'s $\Delta s$ formula set to zero.
- **Forward:** every device in Module 4 is scored this way — the [Rankine cycle](04-01-rankine-vapor-power-cycle.md) turbine and pump, the [Brayton](04-03-brayton-gas-turbine-cycle.md) compressor and turbine, the [refrigeration](04-04-refrigeration-heat-pump-cycles.md) compressor. Isentropic efficiencies are the single biggest lever between a textbook cycle and a real plant's numbers.
- **Sideways (where entropy comes from):** this course treats entropy as bookkeeping — a quantity that only grows when the machine is sloppy. The *microscopic* reason a real expansion generates entropy (molecular disorder, lost information) is the story told in [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md) and [`stat-mech`](../../stat-mech/syllabus.md); the "friction reheats the steam" intuition here is that same Second Law seen from the engineer's side.

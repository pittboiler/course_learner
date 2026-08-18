# Heat Transfer · Lesson 4.5: Heat exchangers II — effectiveness–NTU

> ⏱ ~15 min · Module 4: Radiation & Exchangers · Builds on: [4.4 Heat exchangers I: LMTD](04-04-heat-exchangers-lmtd.md) · Unlocks: rating real exchangers; the design tool carried into reactor thermal-hydraulics and transport-phenomena (future courses)

## Why this matters

You built a heat exchanger last lesson and sized it with the LMTD method — but there was a catch you may have felt. LMTD needs the outlet temperatures to compute $\Delta T_{lm}$. That's fine when you're *designing* ("I want water to leave at 60 °C — how big must the exchanger be?"). But the far more common field question is the reverse: "I already own this exchanger with a known $UA$. Feed it these two inlet streams — what comes out, and how much heat moves?" Now the outlets are the unknowns, and LMTD becomes an ugly loop: guess an outlet, compute LMTD, compute $q$, back out the outlets, check, repeat. The **effectiveness–NTU method** kills the loop. It answers the rating question in one pass — no iteration, no guessing — and it's the tool every plant engineer actually reaches for.

## The idea

Forget temperatures for a moment and ask a blunter question: *how well is this exchanger doing, out of the best it could possibly do?* That's a fraction between 0 and 1, and it's the whole idea. Call it the **effectiveness** $\varepsilon$.

To make "best possible" precise, notice the two streams don't respond equally to a given heat flow. A stream that's a thin trickle heats up fast; a fat stream barely budges. What matters is its **heat-capacity rate** $C = \dot m c_p$ — watts of heat per degree of temperature change. The stream with the *smaller* $C$ is the weak link: it's the one that swings the most, and it hits its temperature limit first. The absolute best any exchanger could do is bring that weak stream all the way across the full inlet gap — from its own inlet temperature clear to the *other* stream's inlet. No exchanger, however enormous, can beat that (the weak stream would have to leave hotter than the hot inlet, which is forbidden). That best-case heat is $q_{max}$, and $\varepsilon = q/q_{max}$ is simply how much of it you actually got.

The beauty: once you know $\varepsilon$, the heat is $q = \varepsilon\, q_{max}$ — and $q_{max}$ depends only on **inlet** temperatures, which you always know. So if you can get $\varepsilon$ without knowing the outlets, you've broken the loop. And you can: $\varepsilon$ turns out to depend only on the exchanger's dimensionless *size* (the **NTU**) and the *ratio* of the two stream strengths — never on the actual temperatures. One chart, or one formula, and you're done.

## The formal version

**Heat-capacity rate.** For each stream,

$$C = \dot m\, c_p \qquad (\mathrm{W/K}),$$

with $\dot m$ the mass flow rate (kg/s) and $c_p$ the specific heat (J/(kg·K)). *In words: $C$ is how many watts it takes to warm that stream by one kelvin.* This is the same $\dot q = \dot m c_p \Delta T$ steady-flow energy balance you met as the SFEE in engineering thermodynamics — here $q = C\,\Delta T$ per stream. Label the smaller and larger:

$$C_{min} = \min(C_h, C_c), \qquad C_{max} = \max(C_h, C_c), \qquad C_r = \frac{C_{min}}{C_{max}} \in [0,1].$$

$C_r$ is the **capacity ratio** — how evenly matched the two streams are (1 = perfectly matched, 0 = one stream is effectively infinite).

**Maximum possible heat.** The weak ($C_{min}$) stream can at most traverse the entire inlet temperature difference:

$$q_{max} = C_{min}\,(T_{h,i} - T_{c,i}),$$

where $T_{h,i}, T_{c,i}$ are the hot and cold **inlet** temperatures (°C or K — only the difference matters). *In words: the best case is the weak stream leaving at the opposite stream's inlet temperature.* Why $C_{min}$ and not $C_{max}$? If the strong stream tried to traverse the full gap, an energy balance $C_{max}\Delta T_{max} = C_{min}\Delta T_{min}$ would force the weak stream *past* the far inlet — thermodynamically impossible. The weak stream is the binding constraint.

**Effectiveness.**

$$\varepsilon = \frac{q}{q_{max}} \in [0,1] \qquad\Longrightarrow\qquad \boxed{\,q = \varepsilon\, C_{min}\,(T_{h,i} - T_{c,i})\,}$$

*In words: effectiveness is the fraction of the thermodynamic best you achieved; multiply it by the (known) $q_{max}$ to get the actual heat.* Once you have $q$, the outlets fall out of the per-stream balances $q = C_h(T_{h,i} - T_{h,o}) = C_c(T_{c,o} - T_{c,i})$.

**NTU — the dimensionless size.**

$$NTU = \frac{UA}{C_{min}} \qquad (\text{dimensionless}),$$

with $UA$ the overall conductance (W/K) from [4.4](04-04-heat-exchangers-lmtd.md). *In words: NTU compares how fast the exchanger can move heat ($UA$) to how fast the weak stream carries it away ($C_{min}$) — a "number of transfer units," i.e. how many stream-warming-widths of area you've installed.* Bigger $UA$ or a weaker stream → more NTU → higher effectiveness.

**The relation.** For a given flow arrangement, $\varepsilon = f(NTU, C_r)$. For **counterflow**:

$$\varepsilon = \frac{1 - e^{-NTU(1-C_r)}}{1 - C_r\,e^{-NTU(1-C_r)}}.$$

Two limits are worth memorizing:

- **$C_r = 0$** (one stream infinite — a **boiler or condenser**, where the phase-changing side holds constant temperature so its effective $C\to\infty$): the formula collapses to $\varepsilon = 1 - e^{-NTU}$. This is the *same* exponential-approach shape you'd get for any arrangement, because with one stream pinned, flow direction stops mattering.
- **$C_r = 1$** (perfectly matched streams): take the limit carefully (l'Hôpital) to get $\varepsilon = \dfrac{NTU}{1 + NTU}$ for counterflow — the hardest case, saturating slowest.

**When to use which method:**

| Situation | Knowns | Unknowns | Method |
|---|---|---|---|
| **Sizing** (design) | both inlets **and** both outlets | area / $UA$ | **LMTD** — direct |
| **Rating** (performance) | both inlets, $UA$, flows | outlets, $q$ | **ε–NTU** — direct |

Use LMTD when outlets are known; use ε–NTU when they're not. They describe the *same* exchanger and must agree — Example 2 checks exactly that.

## Picture

![Effectiveness epsilon versus NTU for counterflow, plotted for capacity ratios Cr = 0, 0.5, and 1. All curves rise from the origin and saturate below the epsilon = 1 ceiling; Cr = 0 (a boiler/condenser) climbs highest, Cr = 1 lowest. A marker shows the worked example: NTU = 1.5, Cr = 0.5 gives epsilon approx 0.69.](assets/04-05-fig1.svg)

Read it like a diminishing-returns curve: the first units of NTU buy a lot of effectiveness; past $NTU \approx 3$–$5$ the curve flattens and more area barely helps — you're near the thermodynamic ceiling $\varepsilon = 1$. A well-matched exchanger ($C_r = 1$) always sits lowest; a condenser ($C_r = 0$) always sits highest.

## Worked examples

**Boss problem 4 — rating a counterflow oil/water heater.** Hot oil ($C_h = \dot m_h c_{p,h} = 1000\ \mathrm{W/K}$) heats water ($C_c = 2000\ \mathrm{W/K}$) in a **counterflow** exchanger with $UA = 1500\ \mathrm{W/K}$. Inlets: oil at $T_{h,i} = 150\,^\circ\mathrm{C}$, water at $T_{c,i} = 30\,^\circ\mathrm{C}$. Both outlets are **unknown** — a rating problem, so reach for ε–NTU.

**(a) Find $q$ and both outlet temperatures.**

*Step 1 — capacity rates.* $C_{min} = \min(1000, 2000) = 1000\ \mathrm{W/K}$ (the oil), $C_{max} = 2000\ \mathrm{W/K}$, so

$$C_r = \frac{C_{min}}{C_{max}} = \frac{1000}{2000} = 0.5.$$

*Step 2 — NTU.*

$$NTU = \frac{UA}{C_{min}} = \frac{1500}{1000} = 1.5.$$

*Step 3 — effectiveness* from the counterflow formula, with $NTU(1-C_r) = 1.5 \times 0.5 = 0.75$ and $e^{-0.75} = 0.4724$:

$$\varepsilon = \frac{1 - e^{-0.75}}{1 - 0.5\,e^{-0.75}} = \frac{1 - 0.4724}{1 - 0.5(0.4724)} = \frac{0.5276}{0.7638} = 0.691.$$

(This is the coral dot in the figure: $NTU=1.5$, $C_r=0.5$.)

*Step 4 — heat transferred.* $q_{max} = C_{min}(T_{h,i} - T_{c,i}) = 1000 \times (150 - 30) = 120{,}000\ \mathrm{W}$, so

$$q = \varepsilon\, q_{max} = 0.691 \times 120{,}000 = 82{,}900\ \mathrm{W} \approx 82.9\ \mathrm{kW}.$$

*Step 5 — outlets* from the per-stream energy balances:

$$T_{h,o} = T_{h,i} - \frac{q}{C_h} = 150 - \frac{82{,}900}{1000} = 67.1\,^\circ\mathrm{C},$$

$$T_{c,o} = T_{c,i} + \frac{q}{C_c} = 30 + \frac{82{,}900}{2000} = 71.4\,^\circ\mathrm{C}.$$

*Check.* The water leaves at 71.4 °C — **hotter** than the oil's 67.1 °C exit. That "temperature cross" is impossible in a parallel-flow exchanger but perfectly legal in counterflow, one of its selling points from [4.4](04-04-heat-exchangers-lmtd.md). Both outlets sit between the two inlets (30–150 °C) ✓, and no iteration was needed ✓.

**(b) Cross-check with LMTD.** Now that we *know* the outlets, feed them into last lesson's method and confirm we get the same exchanger. Counterflow end differences:

$$\Delta T_1 = T_{h,i} - T_{c,o} = 150 - 71.4 = 78.6\,^\circ\mathrm{C}, \qquad \Delta T_2 = T_{h,o} - T_{c,i} = 67.1 - 30 = 37.1\,^\circ\mathrm{C}.$$

$$\Delta T_{lm} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)} = \frac{78.6 - 37.1}{\ln(78.6/37.1)} = \frac{41.5}{\ln(2.118)} = \frac{41.5}{0.750} = 55.3\,^\circ\mathrm{C}.$$

Then

$$q = UA\,\Delta T_{lm} = 1500 \times 55.3 = 82{,}900\ \mathrm{W} \approx 82.9\ \mathrm{kW}. \checkmark$$

Identical to part (a). Equivalently, solving for the size, $UA = q/\Delta T_{lm} = 82{,}900/55.3 = 1500\ \mathrm{W/K}$ — back to the given value. The two methods are the same physics wearing different clothes: ε–NTU is built for unknown outlets, LMTD for unknown area, and on the same exchanger they must agree.

*Check.* Notice $\ln(\Delta T_1/\Delta T_2) = 0.750 = NTU(1-C_r)$ exactly — not a coincidence: integrating the counterflow balance is precisely what produces both the LMTD log and the ε–NTU exponential.

## Watch out

- **You might think $q_{max}$ uses the log-mean or the outlet temperatures.** It doesn't — $q_{max} = C_{min}(T_{h,i} - T_{c,i})$ uses only the two **inlet** temperatures and the **minimum** capacity rate. That's the entire point: it's computable before you know anything about the outlets.
- **You might grab $C_{max}$ for $q_{max}$ because "maximum."** The *max* heat is set by the *min* capacity stream — it's the one that saturates first. Using $C_{max}$ would let the weak stream overshoot the opposite inlet, violating the second law.
- **You might reuse the counterflow ε formula for any exchanger.** The $\varepsilon = f(NTU, C_r)$ relation is **arrangement-specific** — parallel-flow, cross-flow, and shell-and-tube each have their own formula (or chart). Only the two limits are universal: $C_r = 0$ always gives $\varepsilon = 1 - e^{-NTU}$ (flow direction is irrelevant when one stream never changes temperature).

## One-liner

> Effectiveness–NTU rates an exchanger you already own: $q = \varepsilon\, C_{min}(T_{h,i}-T_{c,i})$ with $\varepsilon = f(NTU, C_r)$ — no outlet temperatures, no iteration, same physics as LMTD.

## Problems

**P1 (🟢)** A condenser holds saturated steam at $100\,^\circ\mathrm{C}$ on one side (so that side's $C \to \infty$, i.e. $C_r = 0$) while cooling water ($C_c = 4000\ \mathrm{W/K}$) enters at $20\,^\circ\mathrm{C}$. The unit has $UA = 6000\ \mathrm{W/K}$. Find $NTU$, $\varepsilon$, the heat rate $q$, and the water outlet temperature.

**P2 (🟡)** In the boss problem, someone proposes doubling the exchanger area, so $UA = 3000\ \mathrm{W/K}$ (everything else unchanged: $C_{min} = 1000$, $C_r = 0.5$, inlets 150/30 °C). Recompute $\varepsilon$ and $q$. By what percentage did $q$ rise? Comment on whether doubling the hardware was worth it.

**P3 (🔴)** A counterflow exchanger has *matched* streams, $C_h = C_c = C$ (so $C_r = 1$), and you want $\varepsilon = 0.80$. What $NTU$ is required? Now compare: for $C_r = 0$ (a condenser), what $NTU$ gives the *same* $\varepsilon = 0.80$? What does the gap tell you about matched-stream exchangers?

<details>
<summary>Solutions</summary>

**P1** With $C_r = 0$ the arrangement doesn't matter and $\varepsilon = 1 - e^{-NTU}$. Here $C_{min} = C_c = 4000\ \mathrm{W/K}$ (the water — the steam side is effectively infinite):

$$NTU = \frac{UA}{C_{min}} = \frac{6000}{4000} = 1.5, \qquad \varepsilon = 1 - e^{-1.5} = 1 - 0.2231 = 0.777.$$

$$q_{max} = C_{min}(T_{h,i} - T_{c,i}) = 4000(100 - 20) = 320{,}000\ \mathrm{W}, \qquad q = \varepsilon q_{max} = 0.777 \times 320{,}000 = 248{,}700\ \mathrm{W} \approx 249\ \mathrm{kW}.$$

$$T_{c,o} = T_{c,i} + \frac{q}{C_c} = 20 + \frac{248{,}700}{4000} = 20 + 62.2 = 82.2\,^\circ\mathrm{C}.$$

*Check.* The water outlet (82.2 °C) sits below the steam temperature (100 °C) ✓ — it can approach but never reach it, exactly what $\varepsilon < 1$ enforces. Units: $q$ in W, $q/C$ in W/(W/K) = K ✓.

**P2** $NTU = UA/C_{min} = 3000/1000 = 3.0$; $C_r = 0.5$ unchanged, so $NTU(1-C_r) = 3.0 \times 0.5 = 1.5$ and $e^{-1.5} = 0.2231$:

$$\varepsilon = \frac{1 - 0.2231}{1 - 0.5(0.2231)} = \frac{0.7769}{0.8884} = 0.874.$$

$$q = \varepsilon q_{max} = 0.874 \times 120{,}000 = 104{,}900\ \mathrm{W} \approx 104.9\ \mathrm{kW}.$$

Rise in $q$: from 82.9 kW to 104.9 kW, an increase of $(104.9 - 82.9)/82.9 = 0.265$, about **27 %**.

*Comment.* You **doubled the hardware** ($UA$) but heat duty rose only ~27 % — textbook diminishing returns. At $NTU = 1.5$ you were already on the flattening part of the curve; pushing to $NTU = 3$ climbs toward the ceiling but each added unit of area buys less. Doubling area to gain a quarter more heat is rarely worth the capital cost.

*Check.* $\varepsilon$ rose from 0.691 to 0.874 (still $< 1$) as NTU grew ✓, consistent with the figure's $C_r = 0.5$ curve at $NTU = 3$.

**P3** *Matched streams, $C_r = 1$:* the counterflow formula limits to $\varepsilon = NTU/(1 + NTU)$. Solve for $NTU$:

$$0.80 = \frac{NTU}{1 + NTU} \;\Longrightarrow\; 0.80(1 + NTU) = NTU \;\Longrightarrow\; 0.80 = 0.20\,NTU \;\Longrightarrow\; NTU = 4.0.$$

*Condenser, $C_r = 0$:* $\varepsilon = 1 - e^{-NTU}$, so

$$e^{-NTU} = 1 - 0.80 = 0.20 \;\Longrightarrow\; NTU = -\ln(0.20) = 1.61.$$

*Interpretation.* The matched exchanger needs $NTU = 4.0$ versus only $1.61$ for the condenser — about **2.5× more area** for the same effectiveness. Matched streams ($C_r = 1$) are the *worst case*: both streams change temperature by comparable amounts, so the driving $\Delta T$ shrinks along the whole length, and you must install a lot of area to squeeze out the last degrees. A condenser, with one stream pinned, keeps a fatter driving difference and reaches the same $\varepsilon$ cheaply.

*Check.* Both NTU values are positive and the $C_r = 1$ case is larger, matching the figure where the $C_r = 1$ curve lies below $C_r = 0$ everywhere (needs more NTU to reach a given $\varepsilon$) ✓.

</details>

## Flashback

**From Lesson 4.4 (LMTD sizing):** A counterflow exchanger cools a hot stream from $100\,^\circ\mathrm{C}$ to $60\,^\circ\mathrm{C}$ while heating a cold stream from $20\,^\circ\mathrm{C}$ to $40\,^\circ\mathrm{C}$. The duty is $q = 50\ \mathrm{kW}$ and the overall coefficient is $U = 500\ \mathrm{W/(m^2 K)}$. What heat-transfer **area** $A$ is required? (Fresh variant — outlets are known, so this is a sizing problem.)

<details>
<summary>Solution</summary>

Outlets are known → LMTD method. Counterflow end differences:

$$\Delta T_1 = T_{h,i} - T_{c,o} = 100 - 40 = 60\,^\circ\mathrm{C}, \qquad \Delta T_2 = T_{h,o} - T_{c,i} = 60 - 20 = 40\,^\circ\mathrm{C}.$$

$$\Delta T_{lm} = \frac{60 - 40}{\ln(60/40)} = \frac{20}{\ln 1.5} = \frac{20}{0.4055} = 49.3\,^\circ\mathrm{C}.$$

From $q = UA\,\Delta T_{lm}$, solve for area:

$$A = \frac{q}{U\,\Delta T_{lm}} = \frac{50{,}000}{500 \times 49.3} = \frac{50{,}000}{24{,}650} = 2.03\ \mathrm{m^2}.$$

*Check.* $\Delta T_{lm} = 49.3\,^\circ\mathrm{C}$ lies between $\Delta T_2 = 40$ and $\Delta T_1 = 60$ and below their arithmetic mean of 50 — exactly where the log-mean should sit ✓. Units: $\mathrm{W}/[\mathrm{W/(m^2 K)} \cdot \mathrm{K}] = \mathrm{m^2}$ ✓.

</details>

## Connections

- **Backward:** the per-stream balance $q = C\,\Delta T$ is [4.4](04-04-heat-exchangers-lmtd.md)'s energy accounting with $C = \dot m c_p$ named explicitly; the counterflow log $\ln(\Delta T_1/\Delta T_2)$ from LMTD is the *same* integral that generates the ε–NTU exponential (Example 2's coincidence). Both trace back to the steady-flow energy equation (SFEE, $\dot q = \dot m c_p \Delta T$) from engineering thermodynamics.
- **Forward:** ε–NTU is the standard tool for *rating* installed equipment. In a future **reactor thermal-hydraulics** course it sizes and rates steam generators and intermediate heat exchangers; in **transport phenomena** the same $UA$ decomposes into convective and conductive resistances (from [1.4](01-04-thermal-resistance-networks.md) and Module 3) that you'd predict from correlations rather than measure.
- **Sideways:** the diminishing-returns shape of $\varepsilon(NTU)$ is the same exponential-approach-to-a-ceiling you saw in transient lumped cooling ([2.1](02-01-lumped-capacitance-biot.md), $\theta/\theta_i = e^{-t/\tau}$) — there time buys you approach to ambient; here area buys you approach to the thermodynamic limit. Same math, $1 - e^{-(\text{size})}$, different axis.

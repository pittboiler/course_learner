# Engineering Thermodynamics · Lesson 4.2: Gas power cycles — Otto & Diesel

> ⏱ ~15 min · Module 4: Power & Refrigeration Cycles · Builds on: [2.2 Closed-system processes](02-02-closed-system-processes.md), [3.4 Isentropic processes & efficiency](03-04-isentropic-processes-efficiency.md), [1.4 The ideal-gas model & its limits](01-04-ideal-gas-model-limits.md) · Unlocks: [4.3 Brayton gas-turbine cycle](04-03-brayton-gas-turbine-cycle.md)

## Why this matters

Every gasoline car and almost every truck, ship, and backup generator burns fuel inside a cylinder and pushes a piston. To a first cut you can predict how efficient such an engine *can* be — and why a diesel gets better mileage than a gas engine — with nothing more than the ideal-gas law and the isentropic relations you already have. This lesson gives you the two workhorse idealizations: the **Otto cycle** (spark ignition, your car) and the **Diesel cycle** (compression ignition, the truck). The headline result is startlingly simple: for a spark engine, efficiency depends on *one* number, the compression ratio.

## The idea

A real four-stroke engine is a mess of intake valves, combustion chemistry, and exhaust — a gas that changes composition and flows in and out. We tame it with the **air-standard assumptions**: pretend a *fixed* lump of air (a closed system, [2.2](02-02-closed-system-processes.md)) is sealed in the cylinder for the whole cycle; replace burning fuel with **heat added from outside**; replace the exhaust-and-refill with **heat rejected** back to the surroundings; and treat every compression and expansion as **reversible and adiabatic** — i.e. isentropic ([3.4](03-04-isentropic-processes-efficiency.md)). Add the **cold-air-standard** simplification — the air is an ideal gas with *constant* specific heats fixed at room temperature, so $k = c_p/c_v = 1.4$ — and the whole engine collapses to four clean process legs on a $p$–$V$ diagram.

Both cycles share the same skeleton: squeeze the air (compression stroke), dump heat in (combustion), let it push the piston back out (power stroke), then throw the leftover heat away. The *only* difference is **how the heat goes in**. In the Otto cycle the spark fires at the top of the stroke and burns so fast the piston barely moves — heat goes in at **constant volume**. In the Diesel cycle fuel sprays into air already hot enough to ignite it, and it burns as the piston starts descending — heat goes in at **constant pressure**. That one change is the whole story of why the two engines behave differently.

## The formal version

**The Otto cycle** runs four legs, using state numbers 1→2→3→4→1:

- **1→2** isentropic **compression** (piston squeezes the air): $V$ down, $T$ and $p$ up.
- **2→3** constant-**volume** heat addition $q_{in}$ (spark, instant burn): $p$ and $T$ jump, $V$ fixed.
- **3→4** isentropic **expansion** (the power stroke): $V$ up, $T$ and $p$ down.
- **4→1** constant-**volume** heat rejection $q_{out}$ (exhaust): $p$ and $T$ drop back, $V$ fixed.

Here $V$ is cylinder volume (m³), $p$ pressure (kPa), $T$ absolute temperature (K). Because both heat legs are at constant volume, the closed-system energy balance ([2.1](02-01-first-law-closed-systems.md)) with no boundary work gives $q = c_v\,\Delta T$, with $c_v = 0.718\ \mathrm{kJ/(kg\cdot K)}$ the constant-volume specific heat:

$$q_{in} = c_v (T_3 - T_2), \qquad q_{out} = c_v (T_4 - T_1).$$

Thermal efficiency is net work over heat in, and net work equals heat in minus heat out ([3.1](03-01-second-law-carnot-limit.md)):

$$\eta = \frac{w_{net}}{q_{in}} = 1 - \frac{q_{out}}{q_{in}} = 1 - \frac{c_v(T_4 - T_1)}{c_v(T_3 - T_2)} = 1 - \frac{T_1}{T_2}\cdot\frac{T_4/T_1 - 1}{T_3/T_2 - 1}.$$

Now use the isentropic ideal-gas relation from [3.4](03-04-isentropic-processes-efficiency.md), $T V^{k-1} = \text{const}$, on the two adiabatic legs. Legs 1→2 and 3→4 span the *same* two volumes ($V_1$ and $V_2$), so $T_2/T_1 = (V_1/V_2)^{k-1} = T_3/T_4$. That forces $T_4/T_1 = T_3/T_2$, the two bracket ratios cancel, and everything collapses to

$$\boxed{\;\eta_{Otto} = 1 - \frac{T_1}{T_2} = 1 - \frac{1}{r^{\,k-1}}\;} \qquad r \equiv \frac{V_1}{V_2} = \frac{V_{max}}{V_{min}}.$$

*In words: the efficiency of an ideal spark engine depends on nothing but the **compression ratio** $r$ (how many times smaller you squeeze the air) and $k$.* Squeeze harder → run hotter before combustion → waste less heat → higher $\eta$. The catch is **knock**: compress a gasoline–air mix too far and it self-ignites before the spark, hammering the engine — which caps real spark engines around $r \approx 8$–$11$.

**The Diesel cycle** is identical except leg **2→3 is constant *pressure*** — the piston moves out while heat is added, so $q_{in}$ now includes boundary work and is governed by $c_p$:

$$q_{in} = c_p(T_3 - T_2), \qquad q_{out} = c_v(T_4 - T_1), \qquad c_p = 1.005\ \mathrm{kJ/(kg\cdot K)}.$$

Define the **cutoff ratio** $r_c \equiv V_3/V_2$ — how far the volume expands *during* combustion (in Otto it was 1, since $V$ was fixed). Grinding through the same isentropic bookkeeping (algebra omitted; it's the Otto derivation with the constant-$p$ leg) gives

$$\boxed{\;\eta_{Diesel} = 1 - \frac{1}{r^{\,k-1}}\left[\frac{r_c^{\,k} - 1}{k\,(r_c - 1)}\right]\;}$$

*In words: same $1 - 1/r^{k-1}$ as Otto, but multiplied by a bracket that is **always greater than 1** for $r_c > 1$.* So **at the same compression ratio, Diesel is less efficient than Otto** — the constant-pressure burn is thermodynamically clumsier. The reason diesels win in practice: they have no fuel in the cylinder during compression, so there's nothing to knock, and they run at $r \approx 14$–$24$ where a spark engine can't go. The high $r$ more than pays back the bracket penalty. (As $r_c \to 1$ the bracket $\to 1$ and the Diesel formula reduces to Otto — a constant-pressure burn with no volume change *is* a constant-volume burn.)

## Picture

![p-V diagrams of the Otto and Diesel cycles side by side; both share the isentropic compression stroke 1 to 2, but Otto adds heat on a vertical constant-volume leg 2 to 3 while Diesel adds heat on a horizontal constant-pressure leg; the enclosed loop area is the net work](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (Otto — one number does it).** A spark engine has compression ratio $r = 8$, air-standard, $k = 1.4$. Find the thermal efficiency.

Straight into the boxed formula:

$$\eta_{Otto} = 1 - \frac{1}{r^{\,k-1}} = 1 - \frac{1}{8^{\,0.4}} = 1 - \frac{1}{2.297} = 1 - 0.435 = 0.565.$$

So **56.5%** — the ideal ceiling. We never touched a temperature or a pressure; the efficiency of the *ideal* Otto cycle is fixed by $r$ and $k$ alone. A real engine at $r = 8$ lands closer to 25–30%: friction, heat leaking through the cylinder walls, incomplete combustion, and finite-rate (non-isentropic) processes all bleed it away. The air-standard number is the *best you could hope for*, not a prediction of the dyno reading.

*Sanity check.* $\eta$ is a pure ratio (dimensionless) ✓, it sits strictly between 0 and 1 ✓, and pushing $r$ up to 10 would raise it to $1 - 10^{-0.4} = 0.602$ — higher, as the "squeeze harder" intuition demands ✓.

**Example 2 (Diesel — and the head-to-head).** A compression-ignition engine has $r = 18$, cutoff ratio $r_c = 2$, $k = 1.4$. Find $\eta_{Diesel}$, then compare with an Otto cycle at the *same* $r$.

First the bracket:

$$\frac{r_c^{\,k} - 1}{k(r_c - 1)} = \frac{2^{\,1.4} - 1}{1.4\,(2 - 1)} = \frac{2.639 - 1}{1.4} = \frac{1.639}{1.4} = 1.171.$$

Then the base factor $1/r^{k-1} = 1/18^{0.4} = 1/3.178 = 0.3147$, so

$$\eta_{Diesel} = 1 - (0.3147)(1.171) = 1 - 0.368 = 0.632 \;\;(\textbf{63.2\%}).$$

Now Otto at the *same* $r = 18$: $\eta_{Otto} = 1 - 0.3147 = 0.685$ (**68.5%**). At equal compression ratio the Otto cycle wins by 5.3 points — exactly the bracket penalty (multiply 0.685's "loss" $0.3147$ by $1.171$ to get the Diesel's larger loss). But no gasoline engine can *run* at $r = 18$ without knocking, whereas the diesel does it routinely — which is why real diesels still out-efficiency real gas engines despite the handicap in this formula.

*Sanity check.* The bracket $1.171 > 1$, so Diesel < Otto at fixed $r$ ✓. Both efficiencies are dimensionless and in $(0,1)$ ✓. If we shrank the cutoff to $r_c \to 1$ (a vanishingly short burn), the bracket $\to 1$ and $\eta_{Diesel} \to \eta_{Otto}$, as the formula demands ✓.

## Watch out

- **You might think a diesel is more efficient because the formula gives a bigger number here.** It doesn't at the same compression ratio — the bracket is always $\ge 1$, so **Diesel $\le$ Otto for equal $r$**. Diesels win in the real world only because they *use a much higher $r$* (no knock limit). Compare cycles fairly by asking "at what $r$?" before quoting efficiencies.
- **You might think higher cutoff ratio helps the diesel.** The opposite: a longer constant-pressure burn (bigger $r_c$) *raises* the bracket and *lowers* $\eta$. More fuel per cycle buys more work, but each increment is less efficient. Low $r_c$ (short, sharp burn) is thermodynamically better — it's edging back toward the Otto shape.
- **You might reach for $q_{in} = c_v\,\Delta T$ on the Diesel heat-addition leg.** No — that leg is constant *pressure*, so the gas does boundary work as it expands and you must use $c_p$, not $c_v$. Constant-volume legs (both of Otto's heat exchanges, and Diesel's heat *rejection*) use $c_v$; the constant-pressure leg uses $c_p$. Matching the specific heat to the process is the single most common slip here.

## One-liner

> An ideal spark engine's efficiency is $1 - r^{-(k-1)}$ — compression ratio is everything; the diesel trades a constant-pressure-burn penalty for the freedom to compress much harder.

## Problems

**P1 (🟢)** An air-standard Otto cycle has a compression ratio of $r = 10$ ($k = 1.4$). Find the thermal efficiency. If a manufacturer raised $r$ to 12, how many percentage points does the ideal efficiency gain?

**P2 (🟡)** An air-standard Diesel cycle operates with $r = 20$ and cutoff ratio $r_c = 2.5$ ($k = 1.4$). Compute $\eta_{Diesel}$. Then find the efficiency of an Otto cycle at the same $r = 20$ and state which is higher and why.

**P3 (🔴)** In an Otto cycle the air enters compression at $T_1 = 300\ \mathrm{K}$, and the compression ratio is $r = 8$. During the constant-volume heat addition the temperature rises to $T_3 = 1800\ \mathrm{K}$. Using $c_v = 0.718\ \mathrm{kJ/(kg\cdot K)}$, find the heat added per unit mass $q_{in}$ and the net work $w_{net}$, and confirm $w_{net}/q_{in}$ matches the boxed efficiency formula.

<details>
<summary>Solutions</summary>

**P1** Direct substitution:

$$\eta(r{=}10) = 1 - \frac{1}{10^{\,0.4}} = 1 - \frac{1}{2.512} = 1 - 0.398 = 0.602 \;\;(60.2\%).$$

$$\eta(r{=}12) = 1 - \frac{1}{12^{\,0.4}} = 1 - \frac{1}{2.703} = 1 - 0.370 = 0.630 \;\;(63.0\%).$$

Gain $= 63.0 - 60.2 = \mathbf{2.8}$ **percentage points**. *Check:* dimensionless, in $(0,1)$, and rises with $r$ ✓. Note the *diminishing* return — the same two-unit bump in $r$ lower down would have bought more; $\eta$ curves over as $r$ grows.

**P2** Bracket first:

$$\frac{r_c^{\,k}-1}{k(r_c-1)} = \frac{2.5^{\,1.4} - 1}{1.4\,(2.5-1)} = \frac{3.612 - 1}{1.4\times 1.5} = \frac{2.612}{2.1} = 1.244.$$

Base factor $1/r^{k-1} = 1/20^{0.4} = 1/3.314 = 0.3017$. Then

$$\eta_{Diesel} = 1 - (0.3017)(1.244) = 1 - 0.3754 = 0.625 \;\;(\textbf{62.5\%}).$$

Otto at $r = 20$: $\eta_{Otto} = 1 - 0.3017 = 0.698$ (**69.8%**). **Otto is higher** (by 7.3 points) because the bracket $1.244 > 1$ inflates the Diesel's heat-rejection fraction — the constant-pressure burn is less efficient than an instantaneous constant-volume burn at the same compression ratio. *Check:* both in $(0,1)$; larger $r_c$ here (2.5 vs. Example 2's 2.0) gives a bigger bracket and a slightly lower $\eta$, consistent with "longer burn hurts." ✓

**P3** The compression leg is isentropic, so from [3.4](03-04-isentropic-processes-efficiency.md), $T_2 = T_1\, r^{k-1} = 300 \times 8^{0.4} = 300 \times 2.297 = 689.2\ \mathrm{K}$.

Heat added on the constant-volume leg 2→3:

$$q_{in} = c_v(T_3 - T_2) = 0.718\,(1800 - 689.2) = 0.718 \times 1110.8 = 797.5\ \mathrm{kJ/kg}.$$

Efficiency from the boxed formula: $\eta = 1 - 8^{-0.4} = 1 - 0.435 = 0.565$. Net work:

$$w_{net} = \eta\,q_{in} = 0.565 \times 797.5 = 450.6\ \mathrm{kJ/kg}.$$

*Check the loop the long way.* Isentropic expansion 3→4 spans the same volume ratio, so $T_4 = T_3/r^{k-1} = 1800/2.297 = 783.6\ \mathrm{K}$. Then $q_{out} = c_v(T_4 - T_1) = 0.718(783.6 - 300) = 347.2\ \mathrm{kJ/kg}$, and $w_{net} = q_{in} - q_{out} = 797.5 - 347.2 = 450.3\ \mathrm{kJ/kg}$ — matching to rounding ✓. And $w_{net}/q_{in} = 450.3/797.5 = 0.565 = \eta$ ✓. Units: $\mathrm{kJ/(kg\cdot K)} \times \mathrm{K} = \mathrm{kJ/kg}$ throughout ✓.

</details>

## Flashback

**From Lesson 3.4 (Isentropic processes & efficiency):** Air at $T_1 = 310\ \mathrm{K}$ is compressed isentropically in a closed cylinder through a volume ratio $V_1/V_2 = 9$ (a single compression stroke). Treating air as an ideal gas with $k = 1.4$ and $c_v = 0.718\ \mathrm{kJ/(kg\cdot K)}$, find the final temperature $T_2$ and the specific work required. Is the work into or out of the gas?

<details>
<summary>Solution</summary>

Isentropic ideal-gas relation ([3.4](03-04-isentropic-processes-efficiency.md)): $T_2 = T_1 (V_1/V_2)^{k-1} = 310 \times 9^{0.4} = 310 \times 2.408 = 746.5\ \mathrm{K}$.

The process is adiabatic ($q = 0$), so the closed-system first law ([2.1](02-01-first-law-closed-systems.md)) gives $q - w = \Delta u \Rightarrow w = -\Delta u = -c_v(T_2 - T_1)$:

$$w = -0.718\,(746.5 - 310) = -0.718 \times 436.5 = -313.4\ \mathrm{kJ/kg}.$$

The sign is **negative**, so with the standard convention (work done *by* the gas is positive) this is work done **on** the gas — you spend $313.4\ \mathrm{kJ/kg}$ to compress it. *Check:* compressing a gas must cost work and must heat it, so $w < 0$ and $T_2 > T_1$ are both the right signs ✓; units $\mathrm{kJ/(kg\cdot K)}\times\mathrm{K} = \mathrm{kJ/kg}$ ✓. This is exactly leg 1→2 of the Otto cycle above — the flashback *is* the compression stroke.

</details>

## Connections

- **Backward:** the whole analysis rides on [3.4](03-04-isentropic-processes-efficiency.md)'s $TV^{k-1} = \text{const}$ for the adiabatic legs and [1.4](01-04-ideal-gas-model-limits.md)'s ideal-gas model with constant $k$; the constant-volume vs. constant-pressure heat legs are the closed-system processes of [2.2](02-02-closed-system-processes.md), and $\eta = 1 - q_{out}/q_{in}$ is the second-law bookkeeping from [3.1](03-01-second-law-carnot-limit.md).
- **Forward:** [4.3 Brayton](04-03-brayton-gas-turbine-cycle.md) is the *open*, steady-flow cousin — the same isentropic-compress / heat-add / isentropic-expand skeleton, but in a turbine where compression and expansion happen in separate devices and the governing ratio is *pressure* rather than *volume*. Contrast both with the vapor-power **Rankine cycle** (lesson 4.1), which does the same job with a fluid that changes phase.
- **Sideways (statistical origin of $k$):** we treated $k = 1.4$ as a given constant, but that number is the ratio $c_p/c_v$ set by air's molecular degrees of freedom (diatomic → 5 active modes → $k = 7/5$). Where that comes from — and why $k$ drifts as combustion temperatures rise — is the microscopic story told in [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md) and [`stat-mech`](../../stat-mech/syllabus.md); this course just uses entropy and $k$ as bookkeeping, those courses explain them.

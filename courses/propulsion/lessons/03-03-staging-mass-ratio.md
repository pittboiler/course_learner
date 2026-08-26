# Propulsion · Lesson 3.3: Staging and the mass ratio

> ⏱ ~15 min · Module 3: Rockets and mission analysis · Builds on: [3.1 The rocket equation](03-01-rocket-equation.md), [3.2 Specific impulse](03-02-specific-impulse-rocket-performance.md) · Unlocks: [3.5 Mission $\Delta v$ and the propulsion budget](03-05-mission-delta-v-budget.md)

## Why this matters

[3.1](03-01-rocket-equation.md) ended on a wall: a single stage with structural coefficient $\varepsilon$ can never exceed $\Delta v = v_e\ln(1/\varepsilon)$, and a launch to orbit sits beyond it for every realistic chemical stage. **The payload fraction is not small; it is negative.**

Staging climbs the wall, and it does so by exploiting a fact the rocket equation makes obvious once you look for it: **the empty tanks of a burned-out stage are still being accelerated.** Drop them and the remaining vehicle has a much better mass ratio.

**The result is multiplicative.** Each stage's payload is the *entire* stage above it, so the overall payload fraction is a product of individual payload fractions — and a product of two moderate numbers beats one impossible one.

This lesson makes the argument quantitative, finds the optimum split, and shows why the returns from adding stages die out after three.

## The idea

**Dead mass is charged for the whole journey.** In $\Delta v = v_e\ln(m_0/m_f)$, everything in $m_f$ — payload, engines, and empty tanks — is dragged all the way to the final velocity. **The tanks did their job in the first minute and are then pure ballast.**

**So throw them away.** After the first stage burns out, discard its tanks, engines, and residuals. The second stage starts with a small $m_0$ and a much smaller $m_f$, and its mass ratio is excellent even though it is a tiny vehicle.

**Each stage's payload is the next stage, entire.** That is the key bookkeeping. Stage 1 lifts stage 2 plus the real payload; stage 2 lifts only the real payload.

**Hence [multiplication](../reference.md#staging).** $\lambda_{\rm total} = \lambda_1\lambda_2\cdots$, and each $\lambda_i$ is computed from that stage's own $\Delta v$ and $\varepsilon$.

**And two moderate factors beat one impossible one.** A stage doing 9.4 km/s alone gives $\lambda = -0.04$; two stages doing 4.7 km/s each give $0.171$ apiece, and $0.171^2 = 0.029$. **From impossible to 2.9% by changing nothing but the architecture.**

**The optimum split is equal, when the stages are identical.** Anything else concentrates the $\Delta v$ in one stage, pushing it toward its own wall, and the product falls.

**But the returns die out.** Two stages buy everything; a third buys 28% more payload; a fourth buys a few percent while adding a separation event, an interstage, and a set of engines. **Almost every launch vehicle has two or three stages, and that is not a coincidence.**

## The formal version

**Single stage, from [3.1](03-01-rocket-equation.md).**

$$\lambda = \frac{m_L}{m_0} = \frac{1/MR-\varepsilon}{1-\varepsilon}, \qquad MR = e^{\Delta v/v_e}, \qquad \varepsilon = \frac{m_s}{m_s+m_p}.$$

**Multi-stage.** With $n$ stages, the $i$-th stage's "payload" is everything above it:

$$\boxed{\;\lambda_{\rm total} = \prod_{i=1}^n\lambda_i = \prod_{i=1}^n\frac{1/MR_i-\varepsilon_i}{1-\varepsilon_i}, \qquad \Delta v_{\rm total} = \sum_{i=1}^n\Delta v_i.\;}$$

**Mass build-up, from the top down.** Given a real payload $m_L$:

$$m_{0,n} = \frac{m_L}{\lambda_n}, \qquad m_{0,n-1} = \frac{m_{0,n}}{\lambda_{n-1}}, \qquad \dots, \qquad m_{0,1} = \text{gross liftoff mass}.$$

**Optimal split for identical stages.** With the same $v_e$ and $\varepsilon$ in every stage, maximizing $\prod\lambda_i$ subject to $\sum\Delta v_i = \Delta v$ gives

$$\boxed{\;\Delta v_i = \frac{\Delta v}{n}\quad\text{for every }i,\;}$$

**an equal split.** *(For stages with different $v_e$ or $\varepsilon$, the optimum is unequal and is found by Lagrange multipliers — the high-$I_{sp}$ stage takes a larger share.)*

**Diminishing returns** ($\Delta v = 9.4$ km/s, $I_{sp} = 350$ s, $\varepsilon = 0.10$):

| $n$ | $\Delta v$ per stage | $\lambda_i$ | $\lambda_{\rm total}$ | Gain over $n-1$ |
|---|---|---|---|---|
| 1 | 9400 m/s | $-0.039$ | **impossible** | — |
| 2 | 4700 | 0.1714 | 0.0294 | ∞ |
| 3 | 3133 | 0.3349 | 0.0375 | $+28\%$ |
| 4 | 2350 | 0.4448 | 0.0391 | $+4.3\%$ |
| 5 | 1880 | 0.5209 | 0.0384 | $-1.9\%$ |

**The fourth stage is barely worth it and the fifth is a net loss**, once the extra interstages, separation systems, and engines are charged — and this table does not even include those, which is why the real optimum is two or three.

**The single-stage wall, restated.**

$$\Delta v_{\max,\rm single} = v_e\ln\frac{1}{\varepsilon}, \qquad \Delta v_{\max,n\rm -stage} = n\,v_e\ln\frac{1}{\varepsilon}.$$

**$n$ stages multiply the reachable $\Delta v$ by $n$** — but the payload fraction falls as roughly $\varepsilon^{\,\text{something}}$ along the way, so the gain is in *capability*, not in efficiency.

## Picture

![A two-panel figure. Left: a two-stage vehicle drawn as a vertical stack, with the first stage's propellant, structure, engines, interstage, second stage and payload each in a labelled block, beside a second identical stack shown after separation with the first stage's blocks greyed out and falling away; arrows show that the second stage's mass ratio is computed only from what remains. Beneath the two stacks, two horizontal bars compare the effective mass ratios — a single stage's bar dominated by structure that must be carried the whole way, and the staged version's two short bars, with the annotation the empty tanks stop being payload. Right: overall payload fraction plotted against number of stages for a fixed total delta-v of 9.4 kilometres per second, as points at one through five stages; the single-stage point sits below zero and is marked impossible, the two-stage point jumps to about 0.029, the three-stage point to 0.0375, and the four and five-stage points flatten and turn down, with a dashed curve showing the same trend once a mass penalty per stage is included, which turns over earlier and marks the practical optimum at two to three stages.](assets/03-03-fig1.svg)

Left: what staging actually does — it stops charging the first stage's structure against the second stage's mass ratio.

Right: why the answer is two or three, never eight.

## Worked examples

**Example 1 (a two-stage vehicle, sized from the payload down).** A mission requires $\Delta v = 9.4$ km/s with $I_{sp} = 350$ s and $\varepsilon = 0.10$ in both stages, and must deliver $m_L = 5000$ kg.

*Per-stage numbers.*

$$v_e = 9.80665(350) = 3432.3\ \mathrm{m/s}, \qquad \Delta v_i = 4700\ \mathrm{m/s},$$

$$MR_i = e^{4700/3432.3} = e^{1.36940} = 3.9327, \qquad \lambda_i = \frac{1/3.9327-0.10}{0.90} = \frac{0.25428-0.10}{0.90} = 0.17142.$$

*Build up from the top.*

$$m_{0,2} = \frac{m_L}{\lambda_2} = \frac{5000}{0.17142} = 29{,}168\ \mathrm{kg},$$

$$m_{0,1} = \frac{m_{0,2}}{\lambda_1} = \frac{29{,}168}{0.17142} = 170{,}159\ \mathrm{kg}.$$

**A 170-tonne vehicle for a 5-tonne payload** — an overall payload fraction of

$$\lambda_{\rm total} = \left(0.17142\right)^2 = 0.02938 = 2.94\%.$$

*The full mass breakdown.*

| | Stage 1 | Stage 2 |
|---|---|---|
| Gross mass $m_0$ | 170,159 kg | 29,168 kg |
| Burnout mass $m_f = m_0/MR$ | 43,268 kg | 7417 kg |
| Structure $m_s = m_f-m_{\rm payload}$ | 14,099 kg | 2417 kg |
| Propellant $m_p = m_0-m_f$ | 126,892 kg | 21,752 kg |
| "Payload" | 29,168 kg (stage 2) | 5000 kg (real) |

*Checks.* $\varepsilon_1 = 14{,}099/(14{,}099+126{,}892) = 0.1000$ ✓ and $\varepsilon_2 = 2417/(2417+21{,}752) = 0.1000$ ✓

*Reading it.* Three observations:

**The first stage is 86% of the vehicle** — 170 t of which 141 t is stage 1. That is the usual proportion, and it is why first-stage recovery is where the economics are.

**The payload is 2.9% of liftoff mass**, and that is a *good* number for a two-stage chemical vehicle to LEO. Real vehicles achieve 2–4%.

**And the same technology as a single stage gave a negative answer.** $\lambda_{\rm single} = -0.039$ against $\lambda_{\rm two} = +0.029$. **Nothing changed but where the tanks are thrown away.**

**Example 2 (how many stages, and how to split).** Same mission, $\Delta v = 9.4$ km/s, $I_{sp} = 350$ s, $\varepsilon = 0.10$.

*Is the equal split really optimal?* Try shifting $\Delta v$ between two stages:

| Fraction to stage 1 | $\lambda_1$ | $\lambda_2$ | $\lambda_{\rm total}$ |
|---|---|---|---|
| 0.40 | 0.26043 | 0.10373 | 0.02701 |
| 0.45 | 0.21288 | 0.13526 | 0.02879 |
| **0.50** | **0.17142** | **0.17142** | **0.02938** |
| 0.55 | 0.13526 | 0.21288 | 0.02879 |
| 0.60 | 0.10373 | 0.26043 | 0.02701 |

**The equal split is optimal and the curve is symmetric**, as it must be when the stages are identical. **And it is flat**: a 10% misallocation costs only 2% of payload, which is why real vehicles can deviate substantially from the theoretical optimum for practical reasons without much penalty.

*Why equal is optimal, in one line.* Maximizing $\ln\lambda_1+\ln\lambda_2$ subject to $\Delta v_1+\Delta v_2$ fixed requires $\partial\ln\lambda_1/\partial\Delta v_1 = \partial\ln\lambda_2/\partial\Delta v_2$. For identical stages the two functions are the same, so the arguments must be equal.

*How many stages?*

| $n$ | $\Delta v_i$ | $\lambda_i$ | $\lambda_{\rm total}$ | Liftoff mass for 5 t |
|---|---|---|---|---|
| 1 | 9400 | $-0.039$ | impossible | — |
| 2 | 4700 | 0.1714 | 0.02938 | 170.2 t |
| 3 | 3133 | 0.3349 | 0.03754 | 133.2 t |
| 4 | 2350 | 0.4448 | 0.03910 | 127.9 t |
| 5 | 1880 | 0.5209 | 0.03842 | 130.1 t |

*Reading it.* **The second stage is transformative; the third is worth 28%; the fourth is worth 4%; the fifth is negative.**

*Why the returns die.* As $n$ grows, each stage's $\Delta v_i$ falls and its mass ratio approaches 1 — at which point almost none of its mass is propellant and nearly all of it is structure. **You are increasingly paying the $\varepsilon$ penalty on stages that barely do anything.** In the limit $n\to\infty$ with $\Delta v_i\to0$,

$$\lambda_i\to1-\varepsilon\cdot\text{(something)},\qquad \lambda_{\rm total}\to e^{-\Delta v/[v_e(1-\varepsilon)]}\cdot\text{const},$$

which is finite — **infinitely many stages does not give infinite payload.**

*And the real penalty this table omits.* Every stage adds:

**An interstage structure** — typically 1–3% of the upper stage's mass.

**A separation system** — pyrotechnics or pneumatics, plus the qualification and the reliability cost of one more event that must work.

**A complete engine set** — and engines are the densest, most expensive part of a stage.

**Charging even a modest 2% mass penalty per additional stage moves the optimum from 4 to about 2–3**, which is exactly what flies. The Falcon 9 and Electron are two-stage; the Saturn V, Delta IV Heavy with an upper stage, and most GTO missions are effectively three.

*A note on the boosters that seem to break the rule.* Strap-on solid boosters are sometimes called "stage zero" and can push the effective count to four. **They are a different device**: they burn in *parallel* with the first stage rather than in series, which is a way of raising liftoff thrust-to-weight (reducing gravity loss, [3.1](03-01-rocket-equation.md)) rather than of improving the mass ratio. **Parallel staging trades differently from serial staging**, and its analysis requires tracking two simultaneous mass flows.

## Watch out

- **You might add payload fractions.** They multiply — each stage's payload is the whole stack above it.
- **You might add mass ratios.** The $\Delta v$'s add; the mass ratios multiply.
- **You might assume equal split is always optimal.** It is optimal only for identical stages. With different $I_{sp}$ or $\varepsilon$, the better stage takes more $\Delta v$.
- **You might forget that the interstage belongs to the lower stage.** Where you draw the boundary changes both stages' $\varepsilon$; be consistent.
- **You might add stages indefinitely.** The returns die after three, and the real penalty per stage kills it sooner than the ideal table suggests.
- **You might treat parallel boosters as serial stages.** They burn simultaneously with the core, and their benefit is thrust-to-weight rather than mass ratio.
- **You might ignore that upper stages usually have better $\varepsilon$ and $I_{sp}$.** Vacuum nozzles, no atmospheric loads, and often hydrogen — which is exactly why the optimum split favours giving them more $\Delta v$ than the equal-stage rule says.

## One-liner

> Empty tanks are payload you are still accelerating, so drop them: each stage's payload is the entire stack above it, the overall payload fraction is the *product* of the stages' fractions, an equal $\Delta v$ split is optimal for identical stages, and two moderate factors beat one impossible one — turning a negative single-stage payload into a positive 3%.

## Problems

**P1 (🟢)** A two-stage vehicle has $I_{sp} = 320$ s and $\varepsilon = 0.12$ in both stages, splitting $\Delta v = 8.0$ km/s equally. (a) Find $v_e$ and each stage's mass ratio. (b) Find each stage's payload fraction. (c) Find the overall payload fraction. (d) Find the gross liftoff mass for a 2000 kg payload.

**P2 (🟡)** A vehicle must deliver $\Delta v = 10.0$ km/s with $I_{sp} = 360$ s and $\varepsilon = 0.09$. (a) Show that one stage cannot do it. (b) Find the two-stage and three-stage overall payload fractions with equal splits. (c) Find the liftoff mass for a 1500 kg payload in each case. (d) If each additional stage costs 3% of the stack mass above it, does the third stage still win?

**P3 (🔴)** *(Boss problem 3.)* A launch vehicle must deliver a $\Delta v$ of $9.4$ km/s. (a) For a single stage with $I_{sp} = 350$ s and a structural coefficient of $0.10$ (structure = 10% of stage-plus-propellant mass), show that no positive payload fraction exists. (b) Split the mission evenly across two identical such stages and compute the overall payload fraction. (c) Explain in one paragraph, using the rocket equation, why the two-stage vehicle can carry payload where the single stage cannot.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_e = 9.80665(320) = 3138.1\ \mathrm{m/s}, \qquad \Delta v_i = 4000\ \mathrm{m/s},$$

$$MR_i = e^{4000/3138.1} = e^{1.27466} = 3.5774.$$

(b) $$\lambda_i = \frac{1/3.5774-0.12}{1-0.12} = \frac{0.27954-0.12}{0.88} = \frac{0.15954}{0.88} = 0.18128.$$

(c) $$\lambda_{\rm total} = \left(0.18128\right)^2 = 0.032864 = 3.29\%.$$

(d) $$m_{0,1} = \frac{2000}{0.032864} = 60{,}857\ \mathrm{kg} = 60.9\ \mathrm{t}.$$

*(And the intermediate stage: $m_{0,2} = 2000/0.18128 = 11{,}032$ kg.)*

**P2** (a) $$v_e = 9.80665(360) = 3530.4\ \mathrm{m/s}, \qquad MR = e^{10{,}000/3530.4} = e^{2.83254} = 16.989.$$

$$\lambda = \frac{1/16.989-0.09}{0.91} = \frac{0.058861-0.09}{0.91} = \frac{-0.031139}{0.91} = -0.03422.$$

**Negative — impossible.** Equivalently, the maximum single-stage mass ratio is $1/\varepsilon = 11.11$, giving

$$\Delta v_{\max} = 3530.4\ln(11.11) = 3530.4(2.40795) = 8501\ \mathrm{m/s}<10{,}000\ \mathrm{m/s}.$$

(b) *Two stages, 5000 m/s each:*

$$MR = e^{5000/3530.4} = e^{1.41627} = 4.1217, \qquad \lambda_i = \frac{0.24262-0.09}{0.91} = \frac{0.15262}{0.91} = 0.16771,$$

$$\lambda_{\rm total} = \left(0.16771\right)^2 = 0.028127 = 2.81\%.$$

*Three stages, 3333 m/s each:*

$$MR = e^{3333/3530.4} = e^{0.94408} = 2.5707, \qquad \lambda_i = \frac{0.38900-0.09}{0.91} = \frac{0.29900}{0.91} = 0.32857,$$

$$\lambda_{\rm total} = \left(0.32857\right)^3 = 0.035472 = 3.55\%.$$

(c) $$m_{0,\rm two} = \frac{1500}{0.028127} = 53{,}330\ \mathrm{kg} = 53.3\ \mathrm{t},$$

$$m_{0,\rm three} = \frac{1500}{0.035472} = 42{,}287\ \mathrm{kg} = 42.3\ \mathrm{t}.$$

**The three-stage vehicle is 21% lighter** for the same payload.

(d) *With a 3% penalty per additional stage.* The third stage adds one extra interstage and separation system, charged at 3% of the mass above it. Model this as an effective payload penalty: the two lower stages must each carry 3% more than the ideal analysis assumes, so

$$\lambda_{\rm total}^{\rm penalized}\approx\left(0.32857\right)^3\times\left(0.97\right)^2 = 0.035472(0.9409) = 0.033375 = 3.34\%.$$

$$m_0 = \frac{1500}{0.033375} = 44{,}944\ \mathrm{kg} = 44.9\ \mathrm{t}.$$

**Still better than the two-stage 53.3 t — by 16% rather than 21%.** *(The two-stage vehicle carries one interstage of its own, which this comparison charges to both equally.)*

**So yes, the third stage still wins**, but the margin has shrunk by a quarter. **Push the penalty to 8% per stage and the advantage falls to about 8%**, at which point the extra separation event's reliability cost — one more thing that must work, on a vehicle where a failure loses everything — plausibly outweighs it.

*The general shape of the answer.* The ideal analysis says "more stages, up to about four"; every real cost — structure, separation hardware, engines, reliability, integration labour — pushes the other way, and the two curves cross between two and three. **That is why essentially every launch vehicle ever flown has two or three serial stages.**

**P3** *(a) The single stage.*

$$v_e = g_0I_{sp} = 9.80665(350) = 3432.3\ \mathrm{m/s}.$$

$$MR = e^{\Delta v/v_e} = e^{9400/3432.3} = e^{2.73872} = 15.466.$$

The payload fraction for a stage of structural coefficient $\varepsilon$ is

$$\lambda = \frac{m_L}{m_0} = \frac{1/MR-\varepsilon}{1-\varepsilon} = \frac{1/15.466-0.10}{1-0.10} = \frac{0.064658-0.10}{0.90} = \frac{-0.035342}{0.90} = \boxed{-0.0393.}$$

**Negative, so no positive payload exists.**

*The same statement without algebra.* A mass ratio of 15.466 means the burnout mass is $1/15.466 = 6.47\%$ of the liftoff mass. But the structure alone, at $\varepsilon = 0.10$ of the stage's propellant-plus-structure mass, is

$$\frac{m_s}{m_0}\geq\varepsilon\left(1-\lambda\right)\approx0.10 \quad\text{— i.e. at least 10\% of liftoff mass}.$$

**The tanks and engines weigh 10% of the vehicle, and the rocket equation only leaves 6.5% at burnout.** The stage cannot even carry itself, let alone a payload.

*The hard ceiling, stated directly.* $\lambda>0$ requires $MR<1/\varepsilon = 10$, so

$$\Delta v_{\max} = v_e\ln(10) = 3432.3(2.30259) = 7903\ \mathrm{m/s},$$

**1.5 km/s short of the requirement — and adding propellant cannot close the gap**, because the tanks to hold it grow proportionally.

*(b) Two identical stages.*

$$\Delta v_i = \frac{9400}{2} = 4700\ \mathrm{m/s}, \qquad MR_i = e^{4700/3432.3} = e^{1.36936} = 3.9327,$$

$$\lambda_i = \frac{1/3.9327-0.10}{0.90} = \frac{0.254278-0.10}{0.90} = \frac{0.154278}{0.90} = 0.17142.$$

Since each stage's payload is the entire stack above it,

$$\boxed{\lambda_{\rm total} = \lambda_1\lambda_2 = \left(0.17142\right)^2 = 0.02938 = 2.94\%.}$$

*For a 5-tonne payload that is a 170-tonne vehicle* — 170.2 t, from Example 1 — **which is entirely ordinary.** A Falcon 9 lifts about 22.8 t to LEO from 549 t, a payload fraction of 4.2%, achieved with better $I_{sp}$ and better $\varepsilon$ than assumed here.

*(c) Why staging works.*

The rocket equation charges every kilogram of $m_f$ against the *whole* $\Delta v$: whatever is still attached at the end has been accelerated all the way. In a single stage, the tanks and engines needed to hold 9.4 km/s worth of propellant are enormous — and they remain attached, so they must themselves be accelerated to 9.4 km/s. The mass ratio required, $e^{9400/v_e} = 15.5$, demands that the burnout mass be under 6.5% of liftoff, while the structure alone is 10%; the requirement is self-contradictory, which is what the negative $\lambda$ reports. Staging breaks the contradiction by **discarding structure the moment it stops being useful**. The first stage's tanks are accelerated only to 4.7 km/s and then dropped; the second stage begins as a small, light vehicle that needs a mass ratio of only 3.93 to add the remaining 4.7 km/s — a ratio comfortably below the $1/\varepsilon = 10$ ceiling. Because each stage now faces a modest, achievable mass ratio, each has a healthy positive payload fraction of 17%, and because each stage's payload is the whole stage above it, those fractions **multiply**: $0.171\times0.171 = 0.029$. **The exponential that made a single stage impossible is split into two smaller exponentials whose product is finite** — and that is the entire content of staging. Nothing about the propellant, the engines, or the materials changed; only the decision to stop carrying what is no longer needed.

</details>

## Flashback

**From Lesson 3.2 (Specific impulse and rocket performance):** An engine has $c^* = 1780$ m/s and vacuum $C_F = 1.88$. (a) Find $v_e$ and $I_{sp}$. (b) A stage using it has $\varepsilon = 0.08$; find its maximum $\Delta v$. (c) Two such stages split 9.0 km/s equally; find the overall payload fraction. (d) What single change would most improve (c)?

<details>
<summary>Solution</summary>

(a) $$v_e = c^*C_F = 1780(1.88) = 3346.4\ \mathrm{m/s}, \qquad I_{sp} = \frac{3346.4}{9.80665} = 341.2\ \mathrm{s}.$$

(b) $$\Delta v_{\max} = v_e\ln\frac{1}{\varepsilon} = 3346.4\ln(12.5) = 3346.4(2.52573) = 8452\ \mathrm{m/s}.$$

(c) $$\Delta v_i = 4500\ \mathrm{m/s}, \qquad MR_i = e^{4500/3346.4} = e^{1.34472} = 3.8371,$$

$$\lambda_i = \frac{1/3.8371-0.08}{0.92} = \frac{0.260613-0.08}{0.92} = \frac{0.180613}{0.92} = 0.19632,$$

$$\lambda_{\rm total} = \left(0.19632\right)^2 = 0.038540 = 3.85\%.$$

(d) *Comparing the three available levers,* each applied to the two-stage vehicle:

| Change | New value | $\lambda_{\rm total}$ | Gain |
|---|---|---|---|
| Baseline | — | 0.03854 | — |
| $c^*$ up 10% (better propellant) | $v_e = 3681$ m/s | 0.05436 | $+41\%$ |
| $\varepsilon$ down to 0.06 | $v_e$ unchanged | 0.04555 | $+18\%$ |
| Add a third stage | $\Delta v_i = 3000$ m/s | 0.04532 | $+18\%$ |
| $C_F$ up 4% (bigger nozzle) | $v_e = 3480$ m/s | 0.04467 | $+16\%$ |

**Improving $c^*$ — that is, switching to a higher-energy propellant — is much the largest single gain**, and lightening the structure and adding a third stage are roughly tied behind it.

*But the honest answer depends on what is actually available.* A 10% gain in $c^*$ means changing propellant (kerolox to hydrolox, say), which changes the tanks, the density, the ground handling, and the whole vehicle. A third stage means another set of engines and a separation event. Cutting $\varepsilon$ from 0.08 to 0.06 means a generation of structural technology. **$C_F$ is the cheap lever — a larger nozzle on the upper stage costs almost nothing** — and it is the smallest gain, which is the usual relationship.

*The bridge between the two lessons.* [3.2](03-02-specific-impulse-rocket-performance.md) showed that $I_{sp}$ enters the rocket equation *linearly through $v_e$*, and this lesson shows that stage count enters *multiplicatively through the product of $\lambda_i$*. **They are different kinds of lever**: $I_{sp}$ improves every stage at once and is bounded by chemistry; staging improves the architecture and is bounded by hardware count. **A launch vehicle designer pulls both, and the second is usually the one that is actually available.**

</details>

## Connections

- **Backward:** the single-stage wall being climbed is [3.1](03-01-rocket-equation.md)'s; the $v_e$ each stage uses comes from [3.2](03-02-specific-impulse-rocket-performance.md); the dry-mass penalty that $\varepsilon$ encodes is what made nozzle mass matter in [1.3](01-03-nozzle-operating-regimes.md).
- **Forward:** [3.5](03-05-mission-delta-v-budget.md) supplies the $\Delta v$ budgets these stages must meet; [3.4](03-04-chemical-rockets-liquids-solids.md) explains why first and upper stages usually use different propellants.
- **Sideways:** "the product of several moderate factors beats one extreme factor" is the same structure as **compound interest against a single lump payment**, as multi-stage compression in a gas plant (where intercooling between stages beats one high-ratio compressor for exactly the analogous reason), and as cascaded amplification in electronics. In every case a nonlinear penalty on a single large step is avoided by taking several small ones.

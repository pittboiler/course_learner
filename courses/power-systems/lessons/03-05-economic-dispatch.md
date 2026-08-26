# Power Systems · Lesson 3.5: Economic dispatch and a taste of unit commitment

> ⏱ ~15 min · Module 3: Power flow and economic dispatch · Builds on: [3.4 Newton–Raphson power flow](03-04-newton-raphson-power-flow.md) · Unlocks: [4.5 The swing equation and rotor dynamics](04-05-swing-equation-rotor-dynamics.md)

## Why this matters

Power flow answers "given these generator outputs, what are the voltages and flows?" It never asks whether those outputs were the *right* ones. Choosing them is **economic dispatch**, and it runs every five minutes in every control room on Earth.

The stakes are large and entirely unglamorous. A mid-sized utility burns several million dollars of fuel a day; a 1% dispatch improvement is tens of millions a year. And the answer turns out to be governed by a single elegant criterion — all running generators should operate at **equal [incremental cost](../reference.md#incremental-cost)** — which is nothing but a Lagrange multiplier, and which reappears as the market-clearing price in every electricity market.

## The idea

Each generator has a **cost curve** $C_i(P_i)$ in dollars per hour, conventionally quadratic. Its derivative $\lambda_i = dC_i/dP_i$ is the **incremental cost**: what the next megawatt costs from that unit.

Now suppose two units are running at different incremental costs — unit A at 8 dollars/MWh, unit B at 12. Shift one megawatt from B to A: you spend 8 more and save 12, netting 4 dollars an hour. **Any difference in incremental cost is an arbitrage opportunity.** Keep shifting until they are equal, and there is nothing left to gain.

That is the entire argument:

$$\boxed{\;\lambda_1 = \lambda_2 = \cdots = \lambda_n = \lambda.\;}$$

The common value $\lambda$ is the **system incremental cost** — the cost of the next megawatt of load from anywhere. In a market it *is* the price, which is why the equal-$\lambda$ condition and the market-clearing price are the same object.

Two refinements make it realistic.

**Limits.** A unit that wants to run above $P_{\max}$ is held there, and its incremental cost falls *below* $\lambda$ — the system would like more of it but cannot have it. Symmetrically, a unit pinned at $P_{\min}$ has $\lambda_i>\lambda$.

**Losses.** A megawatt delivered from a remote unit is worth less than one from a nearby unit, because some of it is lost in transit. **Penalty factors** correct for this, and they are why "cheapest unit" and "best unit to dispatch" are not the same thing.

## The formal version

**Cost curves.**

$$C_i(P_i) = a_i+b_iP_i+c_iP_i^2\ \ \text{dollars/hour}, \qquad \lambda_i = \frac{dC_i}{dP_i} = b_i+2c_iP_i.$$

*In words: the incremental cost rises linearly with output, so a unit gets more expensive the harder you push it.* That convexity is what makes the problem well behaved and the equal-$\lambda$ solution unique.

**The optimization.**

$$\min\sum_iC_i(P_i) \quad\text{subject to}\quad \sum_iP_i = P_D+P_L, \qquad P_i^{\min}\leq P_i\leq P_i^{\max}.$$

**Lagrangian and the equal-$\lambda$ condition.** Neglecting losses and limits:

$$\mathcal{L} = \sum_iC_i(P_i)-\lambda\left(\sum_iP_i-P_D\right), \qquad \frac{\partial\mathcal{L}}{\partial P_i} = \frac{dC_i}{dP_i}-\lambda = 0,$$

$$\boxed{\;\frac{dC_i}{dP_i} = \lambda \ \text{for every dispatched unit}.\;}$$

*In words: the Lagrange multiplier on the power-balance constraint is the system incremental cost.* This is the same $\lambda$ that appears in [`micro-refresher`](../../micro-refresher/syllabus.md) as the shadow price of a resource constraint and in [`analytical-mechanics`](../../analytical-mechanics/syllabus.md) as a constraint force — the multiplier always prices the constraint.

**Solving it.** With $\lambda_i = b_i+2c_iP_i$, invert and sum:

$$P_i = \frac{\lambda-b_i}{2c_i} \quad\Longrightarrow\quad \sum_i\frac{\lambda-b_i}{2c_i} = P_D \quad\Longrightarrow\quad \boxed{\;\lambda = \frac{P_D+\sum_i\dfrac{b_i}{2c_i}}{\sum_i\dfrac{1}{2c_i}}.\;}$$

One formula, no iteration — provided no limits bind.

**With limits (the KKT conditions).**

$$\frac{dC_i}{dP_i} = \lambda \quad\text{if}\quad P_i^{\min}<P_i<P_i^{\max},$$
$$\frac{dC_i}{dP_i}\leq\lambda \quad\text{if}\quad P_i = P_i^{\max}, \qquad \frac{dC_i}{dP_i}\geq\lambda \quad\text{if}\quad P_i = P_i^{\min}.$$

*In words: a unit at its ceiling is cheaper than the margin (you want more but can't have it); a unit at its floor is dearer (you'd run it less if you could).*

The algorithm: solve ignoring limits; clamp any violator to its bound; remove it from the free set and re-solve for the remainder; repeat until no new violations appear.

**With losses: penalty factors.** Adding the loss term $P_L(\mathbf{P})$ to the balance constraint gives

$$\frac{dC_i}{dP_i} = \lambda\left(1-\frac{\partial P_L}{\partial P_i}\right) \quad\Longleftrightarrow\quad \boxed{\;L_i\frac{dC_i}{dP_i} = \lambda, \qquad L_i = \frac{1}{1-\dfrac{\partial P_L}{\partial P_i}}.\;}$$

*In words: multiply each unit's incremental cost by its penalty factor and equalize those instead.* A unit whose extra output increases losses has $L_i>1$ and is effectively more expensive; one that *reduces* losses (by displacing a distant unit) has $L_i<1$ and is favoured.

Losses are usually modelled by the **B-coefficient** (Kron) loss formula, $P_L = \sum_i\sum_jP_iB_{ij}P_j$, fitted to power-flow results.

**Unit commitment.** Economic dispatch assumes the set of running units is fixed. Deciding **which units to run** over the coming hours or days is unit commitment, and it is a much harder problem:

| | Economic dispatch | Unit commitment |
|---|---|---|
| Variables | continuous $P_i$ | binary on/off, plus $P_i$ |
| Horizon | one instant | 24–168 hours |
| Structure | convex, closed form | mixed-integer, NP-hard |
| Extra costs | none | start-up, no-load, shutdown |
| Extra constraints | none | min up/down time, ramp rates, reserve |
| Solved by | formula | MILP branch-and-cut, ~minutes |

The decisive new feature is that decisions are **coupled across time**. Shutting a unit down saves money this hour but costs a start-up (thousands of dollars, and hours of minimum-down-time) later. A unit with a minimum up time of eight hours cannot be started for a two-hour peak. Example 3 below shows this trade-off explicitly.

Modern practice solves unit commitment as a mixed-integer linear program, typically for a 24-hour horizon in five-minute market intervals, subject to reserve requirements and transmission limits. It is the largest optimization problem an ISO solves routinely.

## Picture

![A two-panel figure. Left: three incremental cost curves plotted as straight rising lines against each unit's output, with a horizontal line at the system lambda cutting all three, and the intercepts dropped to the axis to show each unit's dispatch, with one curve's intercept beyond a vertical dashed maximum limit line and that unit clamped at the limit with its lower incremental cost marked. Right: a daily load profile drawn as a curve over twenty-four hours with horizontal bands beneath showing which units are committed in each hour — a baseload unit running flat across the whole day, an intermediate unit on from morning to evening, and a peaking unit on only during the afternoon peak — with small arrows marking a start-up and its cost.](assets/03-05-fig1.svg)

Left: the equal-$\lambda$ construction. Slide the horizontal line until the outputs sum to the load. A unit that would want to run past its limit is clamped, and its incremental cost sits *below* $\lambda$ — the system wants more of that cheap unit and cannot have it.

Right: unit commitment as a scheduling problem in time. The baseload unit never cycles; the peaker runs only a few hours and must earn its start-up cost in that window.

## Worked examples

**Example 1 (three units, no binding limits).** Three units with

$$C_1 = 500+5.3P_1+0.004P_1^2, \qquad C_2 = 400+5.5P_2+0.006P_2^2, \qquad C_3 = 200+5.8P_3+0.009P_3^2$$

(dollars/hour, $P$ in MW) serve a 800 MW load. All limits are 50–450 MW. Find the dispatch.

*Incremental costs.*

$$\lambda_1 = 5.3+0.008P_1, \qquad \lambda_2 = 5.5+0.012P_2, \qquad \lambda_3 = 5.8+0.018P_3.$$

*Apply the formula.*

$$\sum_i\frac{1}{2c_i} = \frac{1}{0.008}+\frac{1}{0.012}+\frac{1}{0.018} = 125+83.333+55.556 = 263.889,$$
$$\sum_i\frac{b_i}{2c_i} = \frac{5.3}{0.008}+\frac{5.5}{0.012}+\frac{5.8}{0.018} = 662.5+458.333+322.222 = 1443.056.$$

$$\lambda = \frac{800+1443.056}{263.889} = \frac{2243.056}{263.889} = 8.500\ \text{dollars/MWh}.$$

*Outputs.*

$$P_1 = \frac{8.5-5.3}{0.008} = 400\ \mathrm{MW}, \quad P_2 = \frac{8.5-5.5}{0.012} = 250\ \mathrm{MW}, \quad P_3 = \frac{8.5-5.8}{0.018} = 150\ \mathrm{MW}.$$

Sum: $400+250+150 = 800$ ✓. All within 50–450 ✓.

*Total cost.*

$$C_1 = 500+2120+640 = 3260, \quad C_2 = 400+1375+375 = 2150, \quad C_3 = 200+870+202.5 = 1272.50,$$
$$C_{\rm total} = 6682.50\ \text{dollars/hour}.$$

*What it is worth.* Compare with splitting the load equally, 266.67 MW each:

$$C = 2197.7+2293.3+2386.7 = 6877.78\ \text{dollars/hour}.$$

Economic dispatch saves **195.28 dollars/hour**, or

$$195.28\times8760 = 1.71\ \text{million dollars/year}$$

on three units and 800 MW. A real utility has dozens of units and tens of gigawatts, and the same 3% margin scales accordingly. **This is why the five-minute dispatch cycle exists.**

**Example 2 (a binding limit).** The same three units, but unit 1 is derated to $P_1^{\max} = 300$ MW for a boiler-tube repair. Redispatch.

*Step 1: solve ignoring the new limit.* Already done — $P_1 = 400$ MW, which violates the 300 MW ceiling.

*Step 2: clamp unit 1 at 300 MW and re-solve for the rest.* Units 2 and 3 must now supply $800-300 = 500$ MW:

$$\sum\frac{1}{2c_i} = 83.333+55.556 = 138.889, \qquad \sum\frac{b_i}{2c_i} = 458.333+322.222 = 780.556,$$
$$\lambda = \frac{500+780.556}{138.889} = \frac{1280.556}{138.889} = 9.220\ \text{dollars/MWh}.$$

$$P_2 = \frac{9.22-5.5}{0.012} = 310\ \mathrm{MW}, \qquad P_3 = \frac{9.22-5.8}{0.018} = 190\ \mathrm{MW}.$$

Both within limits ✓, and $300+310+190 = 800$ ✓.

*Verify the KKT condition on the clamped unit.*

$$\lambda_1(300) = 5.3+0.008(300) = 7.70 < \lambda = 9.22\ \checkmark.$$

Unit 1's next megawatt would cost 7.70 while the system is paying 9.22 — the system *wants* more of unit 1 and cannot have it. **That inequality is the check that the clamping was correct**, and if it came out the other way the unit should not have been clamped.

*The cost of the outage.*

$$C_1 = 500+1590+360 = 2450, \quad C_2 = 400+1705+576.6 = 2681.60, \quad C_3 = 200+1102+324.9 = 1626.90,$$
$$C_{\rm total} = 6758.50\ \text{dollars/hour},$$

against 6682.50 before — a penalty of **76.00 dollars/hour**, or 1824 dollars a day. That number is exactly what a maintenance planner weighs against the risk of deferring the repair, and it is why outages are scheduled for low-load seasons when $\lambda$ is low and the redispatch penalty is small.

*Note also that $\lambda$ rose from 8.50 to 9.22.* In a market that is the price rising by 8.5% because a cheap unit became unavailable — the mechanism behind most price spikes, which are far more often a supply-side outage than a demand surge.

**Example 3 (unit commitment, and why it is not just dispatch repeated).** Three units:

| Unit | $C_0$ | $b$ | $c$ | $P_{\min}$ | $P_{\max}$ | Start-up |
|---|---|---|---|---|---|---|
| 1 | 600 | 7.0 | 0.004 | 100 | 600 | 3000 |
| 2 | 500 | 6.5 | 0.005 | 100 | 500 | 2000 |
| 3 | 300 | 8.0 | 0.010 | 50 | 300 | 800 |

serve a three-hour profile: 900 MW, then 600 MW, then 300 MW.

*Dispatch cost for each candidate commitment* (found by running the equal-$\lambda$ procedure for every feasible on/off combination):

| Load | All three on | Units 1+2 | Unit 2 only | Best |
|---|---|---|---|---|
| 900 MW | 9135.23 | **8993.06** | infeasible | 1+2 |
| 600 MW | 6217.05 | **5959.72** | infeasible | 1+2 |
| 300 MW | 3651.39 | 3326.39 | **2900.00** | 2 only |

*Two observations.*

**Unit 3 is never committed.** Its incremental cost curve starts high (8.0) and rises fast (0.010), so it is dominated at every load in this range. A unit like this exists only for peaks well above 900 MW, or for reserve.

**Running fewer units is often cheaper**, even at high load — the all-three-on dispatch is worse at every hour, because each committed unit carries a fixed no-load cost $C_0$ whether or not it produces anything useful.

*Total over three hours.*

$$\text{all three on: } 9135.23+6217.05+3651.39 = 19{,}003.67,$$
$$\text{best per hour: } 8993.06+5959.72+2900.00 = 17{,}852.78,$$

a saving of **1150.89 dollars** over three hours.

*But now the intertemporal catch.* The "best per hour" schedule shuts unit 1 down in hour 3. What does that actually save, and what does it cost?

$$\text{hour-3 saving from shutting unit 1} = 3326.39-2900.00 = 426.39\ \text{dollars}.$$

$$\text{cost to restart unit 1 next morning} = 3000\ \text{dollars}.$$

**Shutting it down loses 2574 dollars.** The right decision is to keep unit 1 running through hour 3 at its minimum, accepting the 426 dollars of inefficiency, because the alternative costs seven times as much.

*Why this is the whole point.* Economic dispatch is a *static* optimization — it can be solved hour by hour with no memory. Unit commitment is *dynamic*: the decision in hour 3 depends on the load in hour 4, which depends on a forecast, and on minimum-up/down times that may forbid the cycling entirely. That coupling is what turns a closed-form problem into an NP-hard mixed-integer program.

It also explains a fact that puzzles people about electricity markets: **generators sometimes run at a loss on energy alone**. A unit kept online overnight below its efficient point is losing money each hour, but losing less than a shutdown-and-restart would cost. Markets handle this with make-whole payments and start-up cost recovery — mechanisms that exist purely because commitment is intertemporal.

## Watch out

- **You might equalize average cost instead of incremental cost.** The criterion is on $dC/dP$. Average cost $C/P$ is the wrong quantity and gives a different, worse answer.
- **You might forget to check limits after solving.** Always verify every $P_i$ is inside its bounds; if not, clamp and re-solve, then verify the KKT inequality on the clamped unit.
- **You might clamp and forget to re-solve.** After clamping, $\lambda$ changes for everyone. The remaining free units must be redispatched.
- **You might apply penalty factors backwards.** $L_i = 1/(1-\partial P_L/\partial P_i)$, and the condition is $L_i\lambda_i = \lambda$. A unit that increases losses gets $L_i>1$ and is *penalized*.
- **You might ignore the no-load cost when comparing commitments.** The constant $a_i$ in $C_i$ is paid whenever the unit is on, and it is often what decides whether to commit it at all.
- **You might treat unit commitment as dispatch repeated hourly.** It is not, and Example 3 shows why: a locally optimal hourly decision can be globally expensive once start-up costs and minimum times are counted.

## One-liner

> Equalize incremental cost across all free units — $\lambda$ is the Lagrange multiplier on power balance and the market price — clamp violators and re-solve, weight by penalty factors when losses matter, and remember that *which* units to run is a separate, much harder, time-coupled problem.

## Problems

**P1 (🟢)** Two units have $\lambda_1 = 0.02P_1+8$ and $\lambda_2 = 0.04P_2+6$ dollars/MWh, with limits 50–400 MW, serving 500 MW with losses neglected. (a) Find the economic dispatch and $\lambda$. (b) Verify both units are within limits. (c) Find the extra hourly cost of instead splitting the load equally, given $C_1 = 0.01P_1^2+8P_1$ and $C_2 = 0.02P_2^2+6P_2$.

**P2 (🟡)** Three units: $\lambda_1 = 7.0+0.008P_1$, $\lambda_2 = 6.5+0.010P_2$, $\lambda_3 = 8.0+0.020P_3$, serving 950 MW. Limits are $100\leq P_1\leq600$, $100\leq P_2\leq500$, $50\leq P_3\leq300$. (a) Solve ignoring limits. (b) Now unit 2 is derated to $P_2^{\max} = 350$ MW; redispatch and verify the KKT condition. (c) The full cost functions are $C_i = C_{0i}+b_iP_i+\tfrac{1}{2}(\text{slope}_i)P_i^2$ with $C_0 = 600, 500, 300$. Find the hourly cost penalty of the derating.

**P3 (🔴)** Two units serve a 500 MW load, with $\lambda_1 = 8+0.02P_1$, $\lambda_2 = 6+0.04P_2$ dollars/MWh and cost functions $C_1 = 0.01P_1^2+8P_1$, $C_2 = 0.02P_2^2+6P_2$. Unit 1 is remote, and the transmission loss is $P_L = 0.0002P_1^2$ MW (unit 2 is at the load centre and contributes no loss). (a) Write the penalty factor $L_1$ and state $L_2$. (b) Set up and solve the loss-aware dispatch, finding $P_1$, $P_2$, $\lambda$ and $P_L$. (c) Compare with the naive dispatch that ignores losses in the optimization but must still cover them, and quantify the saving. (d) Explain why $\lambda$ in the loss-aware solution is so much larger than the naive $\lambda = 14$, and what that number means in a market.

<details>
<summary>Solutions</summary>

**P1** (a) $$P_1 = \frac{\lambda-8}{0.02}, \qquad P_2 = \frac{\lambda-6}{0.04}, \qquad P_1+P_2 = 500.$$

$$\frac{\lambda-8}{0.02}+\frac{\lambda-6}{0.04} = 500 \quad\Longrightarrow\quad 50(\lambda-8)+25(\lambda-6) = 500,$$
$$50\lambda-400+25\lambda-150 = 500 \quad\Longrightarrow\quad 75\lambda = 1050 \quad\Longrightarrow\quad \lambda = 14\ \text{dollars/MWh}.$$

$$P_1 = \frac{14-8}{0.02} = 300\ \mathrm{MW}, \qquad P_2 = \frac{14-6}{0.04} = 200\ \mathrm{MW}.$$

(b) Both inside 50–400 ✓, and $300+200 = 500$ ✓.

(c) *Optimal cost:*

$$C_1 = 0.01(300)^2+8(300) = 900+2400 = 3300,$$
$$C_2 = 0.02(200)^2+6(200) = 800+1200 = 2000,$$
$$C_{\rm total} = 5300\ \text{dollars/hour}.$$

*Equal split, 250 MW each:*

$$C_1 = 0.01(62{,}500)+8(250) = 625+2000 = 2625,$$
$$C_2 = 0.02(62{,}500)+6(250) = 1250+1500 = 2750,$$
$$C_{\rm total} = 5375\ \text{dollars/hour}.$$

**Extra cost: 75 dollars/hour**, or 657,000 dollars a year. On two units.

**P2** (a) $$\sum\frac{1}{2c_i} = \frac{1}{0.008}+\frac{1}{0.010}+\frac{1}{0.020} = 125+100+50 = 275,$$
$$\sum\frac{b_i}{2c_i} = \frac{7.0}{0.008}+\frac{6.5}{0.010}+\frac{8.0}{0.020} = 875+650+400 = 1925.$$

$$\lambda = \frac{950+1925}{275} = \frac{2875}{275} = 10.4545\ \text{dollars/MWh}.$$

$$P_1 = \frac{10.4545-7.0}{0.008} = 431.82\ \mathrm{MW}, \quad P_2 = \frac{10.4545-6.5}{0.010} = 395.45\ \mathrm{MW}, \quad P_3 = \frac{10.4545-8.0}{0.020} = 122.73\ \mathrm{MW}.$$

Sum $= 950.00$ ✓, all within limits ✓.

(b) With $P_2^{\max} = 350$, the unconstrained $P_2 = 395.45$ violates. Clamp $P_2 = 350$ and redispatch units 1 and 3 for $950-350 = 600$ MW:

$$\sum\frac{1}{2c_i} = 125+50 = 175, \qquad \sum\frac{b_i}{2c_i} = 875+400 = 1275,$$
$$\lambda = \frac{600+1275}{175} = \frac{1875}{175} = 10.7143\ \text{dollars/MWh}.$$

$$P_1 = \frac{10.7143-7.0}{0.008} = 464.29\ \mathrm{MW}, \qquad P_3 = \frac{10.7143-8.0}{0.020} = 135.71\ \mathrm{MW}.$$

Both within limits ✓; $464.29+350+135.71 = 950.00$ ✓.

*KKT check on the clamped unit:*

$$\lambda_2(350) = 6.5+0.010(350) = 10.00 < \lambda = 10.7143\ \checkmark.$$

Unit 2 at its ceiling is cheaper than the margin — correct for a unit clamped at $P_{\max}$.

(c) With $C_i = C_{0i}+b_iP_i+\tfrac{1}{2}(\text{slope}_i)P_i^2$, i.e. slopes 0.008, 0.010, 0.020 giving quadratic coefficients 0.004, 0.005, 0.010:

*Unconstrained:*
$$C_1 = 600+7(431.82)+0.004(431.82)^2 = 600+3022.7+745.8 = 4368.5,$$
$$C_2 = 500+6.5(395.45)+0.005(395.45)^2 = 500+2570.5+781.9 = 3852.4,$$
$$C_3 = 300+8(122.73)+0.010(122.73)^2 = 300+981.8+150.6 = 1432.4,$$
$$C_{\rm total} = 9653.41\ \text{dollars/hour}.$$

*Derated:*
$$C_1 = 600+7(464.29)+0.004(464.29)^2 = 600+3250.0+862.3 = 4712.3,$$
$$C_2 = 500+6.5(350)+0.005(350)^2 = 500+2275+612.5 = 3387.5,$$
$$C_3 = 300+8(135.71)+0.010(135.71)^2 = 300+1085.7+184.2 = 1569.9,$$
$$C_{\rm total} = 9669.64\ \text{dollars/hour}.$$

**Penalty: 16.23 dollars/hour** — small, because the derating is modest (45 MW) and unit 1 has a shallow incremental cost curve, so absorbing the shortfall is cheap. Compare Example 2, where a 100 MW derating of the *cheapest* unit cost 76 dollars/hour. The penalty scales with both the size of the derating and how much steeper the replacement unit's curve is.

**P3** (a) $$\frac{\partial P_L}{\partial P_1} = 0.0004P_1, \qquad \frac{\partial P_L}{\partial P_2} = 0,$$

$$L_1 = \frac{1}{1-0.0004P_1}, \qquad L_2 = \frac{1}{1-0} = 1.$$

(b) The conditions are

$$L_1\lambda_1 = \lambda, \qquad L_2\lambda_2 = \lambda \ \Longrightarrow\ \lambda = \lambda_2 = 6+0.04P_2,$$

with the balance constraint

$$P_1+P_2 = 500+0.0002P_1^2.$$

So:

$$\frac{8+0.02P_1}{1-0.0004P_1} = 6+0.04P_2, \qquad P_2 = 500+0.0002P_1^2-P_1.$$

Substituting and solving (one nonlinear equation in $P_1$) gives

$$\boxed{P_1 = 281.72\ \mathrm{MW}, \qquad P_2 = 234.15\ \mathrm{MW}, \qquad \lambda = 15.366\ \text{dollars/MWh}.}$$

*Verification:*

$$P_L = 0.0002(281.72)^2 = 15.87\ \mathrm{MW},$$
$$P_1+P_2 = 515.87 = 500+15.87\ \checkmark.$$

$$L_1 = \frac{1}{1-0.0004(281.72)} = \frac{1}{1-0.11269} = 1.1270,$$
$$\lambda_1 = 8+0.02(281.72) = 13.634, \qquad L_1\lambda_1 = 1.1270(13.634) = 15.366\ \checkmark,$$
$$\lambda_2 = 6+0.04(234.15) = 15.366\ \checkmark.$$

Both penalty-weighted incremental costs equal $\lambda$ ✓.

*Note that $\lambda_1 = 13.63 < \lambda_2 = 15.37$.* Unit 1 is genuinely the cheaper producer at the margin, yet it is dispatched *less* than the loss-blind answer would suggest — because 11.3% of its next megawatt is lost in transit.

(c) *Naive dispatch.* Ignoring losses, P1 gives $P_1 = 300$, $P_2 = 200$, $\lambda = 14$. But the actual loss at $P_1 = 300$ is

$$P_L = 0.0002(300)^2 = 18.0\ \mathrm{MW},$$

so generation is 18 MW short. Making it up from the local unit (the operational response, since the loss appears at the load centre):

$$P_1 = 300, \qquad P_2 = 218.0\ \mathrm{MW}.$$

*Costs.*

$$C_{\rm naive} = \left[0.01(300)^2+8(300)\right]+\left[0.02(218)^2+6(218)\right] = 3300+(950.5+1308) = 5558.48,$$

$$C_{\rm optimal} = \left[0.01(281.72)^2+8(281.72)\right]+\left[0.02(234.15)^2+6(234.15)\right]$$
$$= (793.7+2253.8)+(1096.6+1404.9) = 5548.90.$$

**Saving: 9.58 dollars/hour**, about 84,000 dollars a year.

Modest in relative terms (0.17%), and that is honest — penalty factors are a refinement, not a revolution. But note two things. The saving is essentially free, since it costs only a slightly different set-point. And on a real system with a 3–5% loss factor and heavy geographic spread, the effect is an order of magnitude larger; loss-aware dispatch is standard practice for exactly that reason.

*Also note the optimal solution has lower total generation:* 515.87 MW versus the naive 518.0 MW. Backing off the remote unit reduced the losses by 2.1 MW, which is where much of the saving comes from.

(d) *Why $\lambda$ jumped from 14 to 15.37.* The two numbers **measure different things**, and conflating them is a common error.

The naive $\lambda = 14$ is the cost of the next megawatt *generated*. The loss-aware $\lambda = 15.37$ is the cost of the next megawatt *delivered to the load* — and delivering one megawatt requires generating more than one, because part is lost.

The ratio is instructive: $15.37/14 = 1.098$, roughly the 11.3% marginal loss rate at unit 1's operating point. **Marginal losses, not average losses**, set the gap — and marginal loss is about twice average loss for a quadratic loss function, since $\partial P_L/\partial P_1 = 2(P_L/P_1)$. Here average loss is 5.6% of $P_1$ while marginal loss is 11.3%.

*What it means in a market.* $\lambda = 15.37$ is the **locational marginal price (LMP) at the load bus**. Unit 1, sitting behind the lossy path, is paid the LMP at *its* bus, which is lower:

$$\text{LMP at unit 1's bus} = \lambda(1-\partial P_L/\partial P_1) = \lambda/L_1 = \lambda_1 = 13.63\ \text{dollars/MWh}.$$

The 1.73 dollars/MWh difference is the **marginal loss component of the LMP spread**, and it is real money — it flows to the transmission operator as loss surplus. In a full LMP market the spread between buses also includes a congestion component when a line binds, and together those two components are why prices differ from bus to bus at the same instant.

**The dispatch and the prices are the same calculation.** The Lagrange multiplier that solves the optimization *is* the price, which is the deepest connection in this lesson: the equal-$\lambda$ criterion is not merely a cost-minimizing heuristic, it is the mechanism by which a competitive market reaches the efficient dispatch on its own. Each generator bidding its true incremental cost and being dispatched by a merit order produces exactly the solution the central optimizer would compute.

</details>

## Flashback

**From Lesson 3.4 (Newton–Raphson power flow):** A power flow with 200 buses, 40 PV buses and one slack converges in 5 Newton iterations. (a) Give the Jacobian dimensions. (b) Explain why economic dispatch and power flow must be run together rather than separately.

<details>
<summary>Solution</summary>

(a) $N_{PQ} = 200-1-40 = 159$.

- $\Delta\mathbf{P}$ rows: $N-1 = 199$
- $\Delta\mathbf{Q}$ rows: $N_{PQ} = 159$

$$\mathbf{J} \text{ is } 358\times358.$$

(b) *Because each needs the other's answer.*

**Dispatch needs power flow** to know the losses. The equal-$\lambda$ condition balances $\sum P_i = P_D+P_L$, but $P_L$ depends on the flows, which depend on the dispatch. And the penalty factors $L_i$ are derivatives of the loss with respect to each injection — quantities only a power flow can supply.

**Power flow needs dispatch** to know the $P_i$ at every PV bus. Those are inputs to the power flow, not outputs.

The practical resolution is an **outer iteration**: dispatch with current penalty factors → run power flow → recompute losses and penalty factors → redispatch → repeat. It converges in two or three passes because the coupling is weak (losses are a few percent and penalty factors change slowly).

*The modern version.* **Optimal power flow (OPF)** merges the two into a single constrained optimization: minimize total cost subject to the *full* power-flow equations plus voltage limits, line-flow limits, and generator limits. It is what actually runs in a control room, and its Lagrange multipliers on each bus's power-balance constraint are precisely the locational marginal prices of P3(d) — with congestion and loss components falling out automatically rather than being bolted on.

OPF is the natural endpoint of this whole module: [3.1](03-01-bus-admittance-matrix.md) built the network, [3.2](03-02-power-flow-problem-bus-types.md)–[3.4](03-04-newton-raphson-power-flow.md) solved it, and this lesson optimized over it. Putting them together is one problem, not three.

</details>

## Connections

- **Backward:** the losses and flows that dispatch must respect come from [3.4](03-04-newton-raphson-power-flow.md)'s power flow; the per-unit and MW conventions are [1.3](01-03-the-per-unit-system.md)'s.
- **Forward:** [4.5](04-05-swing-equation-rotor-dynamics.md) takes each generator's dispatched $P$ as its mechanical input and asks what happens when the electrical output suddenly changes.
- **Sideways:** this is constrained optimization with KKT conditions from [`convex-optimization`](../../convex-optimization/syllabus.md); the equal-$\lambda$ criterion is the equimarginal principle of [`micro-refresher`](../../micro-refresher/syllabus.md); unit commitment is a mixed-integer program of the kind [`operations-research`](../../operations-research/syllabus.md) treats; and the Lagrange multiplier as a shadow price is the same object as the constraint force in [`analytical-mechanics`](../../analytical-mechanics/syllabus.md).

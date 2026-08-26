# Operations Research · Lesson 4.2: The M/M/1 queue

> ⏱ ~15 min · Module 4: Queueing & Inventory · Builds on: [4.1 Poisson arrivals & Little's law](04-01-poisson-arrivals-littles-law.md), [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md) · Unlocks: 4.3 (M/M/c, pooling, networks)

## Why this matters

Every service system you've ever stood in — a checkout lane, a help desk, a CPU's run queue, an emergency room, a toll booth — is a server eating randomly-arriving work. The M/M/1 queue is the simplest honest model of one, and it delivers a result that reshapes how you run operations: **the wait does not grow gracefully with load, it explodes.** Push a server from 90 to 95 percent busy and you roughly double every customer's wait, for a 5-point gain in "efficiency." Managers who don't know this staff to high utilization and are baffled when service collapses. You will know why.

## The idea

Picture one clerk and one line. Customers show up at random moments, at an average rate $\lambda$. The clerk takes a random amount of time on each one, finishing at average rate $\mu$ when busy. If $\lambda < \mu$ the clerk can keep up *on average* — but "on average" isn't "always." Randomness means arrivals sometimes bunch up while the clerk is stuck on a long job, and a backlog forms. When the lull comes, the clerk can only work down the backlog at rate $\mu$; the clerk can never work *ahead*, because you can't serve a customer who hasn't arrived yet.

That asymmetry is the whole story. **Idle time is lost forever; backlog is not.** The closer $\lambda$ creeps to $\mu$, the less spare capacity there is to absorb the bad stretches, and the longer the backlog takes to drain. At $\lambda = \mu$ the drain rate matches the fill rate exactly and the queue wanders off to infinity.

Everything below is bookkeeping on that one insight. And it gives us a slogan worth carrying: **queues are caused by variability, not by load.**

## The formal version

**Kendall notation.** A queue is labelled $A/B/c$: arrival process / service-time distribution / number of servers. **M** stands for *Markovian* (memoryless) — Poisson arrivals or exponential service times. So **M/M/1** is: Poisson arrivals, exponential service, one server. Implicitly the waiting room is infinite and the discipline is first-come-first-served (FCFS).

The model, symbol by symbol:

- $\lambda$ — arrival rate, customers per unit time (Poisson process, from [4.1](04-01-poisson-arrivals-littles-law.md)).
- $\mu$ — service rate, customers per unit time; each service time is exponential with mean $1/\mu$.
- one server, infinite waiting room, FCFS.

*A note on FCFS:* the discipline changes **who** waits how long — it fixes the *distribution* of individual waiting times — but as long as the server is never idle while work is waiting, it does **not** change the averages $L$ and $W$. That's [4.1](04-01-poisson-arrivals-littles-law.md)'s Little's law doing real work: $L = \lambda W$ holds for *any* queue discipline, so shuffling the order redistributes waiting without changing the mean.

### The birth–death chain

Let the **state** $n$ be the number of customers *in the system* (in service plus in line). Memorylessness (see [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md)) means the future depends only on $n$, not on how long anyone has been waiting. So the system is a continuous-time Markov chain on $n = 0, 1, 2, \dots$ with only two moves:

- an arrival: $n \to n+1$ at rate $\lambda$ (always available);
- a service completion: $n \to n-1$ at rate $\mu$ (only when $n \ge 1$).

Let $p_n$ be the long-run fraction of time the system holds $n$ customers. In steady state, the chain crosses the boundary between "$\le n$" and "$\ge n+1$" equally often in each direction — every up-crossing must be matched by a down-crossing. That gives the **balance equations**:

$$\lambda\, p_n = \mu\, p_{n+1} \qquad \Longrightarrow \qquad p_{n+1} = \rho\, p_n, \qquad \rho \equiv \frac{\lambda}{\mu}.$$

*In words: the flow of probability up across each cut equals the flow back down.* Iterating from $p_0$:

$$p_n = \rho^n p_0.$$

Now normalize, $\sum_{n=0}^{\infty} p_n = 1$. The geometric series $\sum \rho^n = 1/(1-\rho)$ **converges only if $\rho < 1$** — and that convergence condition *is* the stability condition. Assuming it,

$$p_0 \cdot \frac{1}{1-\rho} = 1 \qquad \Longrightarrow \qquad \boxed{\,p_n = (1-\rho)\rho^n\,}$$

*In words: the number in an M/M/1 system is geometrically distributed with parameter $\rho$.* Two readings of $p_0 = 1-\rho$: it is the probability the server is **idle**, so $\rho$ is simultaneously the **utilization** (fraction of time busy) and the probability an arriving customer finds the server busy.

### The performance measures

Get $L$ (mean number in system) from the distribution, using the standard identity $\sum_{n\ge1} n x^{n-1} = 1/(1-x)^2$:

$$L = \sum_{n=0}^{\infty} n\,(1-\rho)\rho^n = (1-\rho)\rho\sum_{n=1}^{\infty} n\rho^{\,n-1} = (1-\rho)\rho \cdot \frac{1}{(1-\rho)^2} = \frac{\rho}{1-\rho}.$$

Everything else follows **without another series**, which is exactly why Little's law is worth having:

$$\rho = \frac{\lambda}{\mu}, \qquad L = \frac{\rho}{1-\rho} = \frac{\lambda}{\mu-\lambda}, \qquad W = \frac{L}{\lambda} = \frac{1}{\mu-\lambda},$$

$$L_q = L - \rho = \frac{\rho^2}{1-\rho}, \qquad W_q = \frac{L_q}{\lambda} = \frac{\rho}{\mu-\lambda} = W - \frac{1}{\mu}.$$

*In words:* $W$ is total time in system, $W_q$ is time spent waiting in line, and they differ by exactly one mean service time $1/\mu$. The subtraction $L_q = L - \rho$ says: of the customers in the system, on average $\rho$ of them are *in service* (the server holds one customer a fraction $\rho$ of the time) and the rest are queued. Apply Little's law to the line alone to get $W_q$, to the whole system to get $W$, and to the server alone to get $\rho = \lambda \cdot (1/\mu)$ — three applications, one law.

## Picture

![Panel a shows the birth-death chain: circles for states 0, 1, 2, 3 and a general state n, with blue arrows to the right labelled lambda and coral arrows to the left labelled mu. Panel b plots mean queueing wait against utilization for a 6-minute mean service time: nearly flat out to rho = 0.5, then curving up through 24 minutes at 0.8 and 54 minutes at 0.9, then rocketing through 114 minutes at 0.95 toward a vertical asymptote at rho = 1, with the region past 0.9 shaded coral](assets/04-02-fig1.svg)

## The blow-up as $\rho \to 1$

This is the single most important qualitative fact in queueing, so it gets its own section. Fix the mean service time at 6 minutes ($\mu = 10$/hour) and dial up the arrival rate:

| $\rho$ | $L$ | $L_q$ | $W_q$ (min) | $W$ (min) |
|---|---|---|---|---|
| 0.50 | 1 | 0.50 | 6 | 12 |
| 0.80 | 4 | 3.20 | 24 | 30 |
| 0.90 | 9 | 8.10 | 54 | 60 |
| 0.95 | 19 | 18.05 | 114 | 120 |
| 0.99 | 99 | 98.01 | 594 | 600 |

*(Verified twice: $L = \rho/(1-\rho)$ against $L_q = L - \rho$, and $W_q = L_q/\lambda$ against $W_q = W - 1/\mu$. Both agree in every row.)*

Read the last column. A job that takes **6 minutes of actual work** sits in the system for **10 hours** at 99 percent utilization. Three consequences:

- **"90 percent utilized" sounds efficient and is near the cliff edge.** At $\rho = 0.9$ a customer already waits nine times the work content of their own job. Utilization targets that would please a factory accountant are, in a service system, an alarm.
- **The marginal cost of load is not constant — it accelerates.** Going 0.90 → 0.95 costs you 60 extra minutes of wait; the previous five points (0.85 → 0.90) cost about 20. Because $W_q = \rho/(\mu(1-\rho))$, the wait scales like $1/(1-\rho)$: it is *hyperbolic* in the spare capacity, not linear in the load. Halve the slack, more than double the wait.
- **Variability, not average load, is what creates queues.** This is the deep one. Imagine a deterministic system: customers arrive exactly every 6.67 minutes and each takes exactly 6 minutes. That is $\rho = 0.9$ — and the queue is **empty at all times**, because every customer finds the server free. Same load, zero wait. The entire M/M/1 delay is the price of randomness. High utilization doesn't *cause* the queue; it removes the slack that was absorbing the randomness.

## Worked examples

**Example 1 — the repair shop (boss problem 4(a)).** Jobs arrive Poisson at $\lambda = 15$/hour; one technician works at $\mu = 20$/hour.

$$\rho = \frac{15}{20} = 0.75, \qquad p_0 = 1 - 0.75 = 0.25,$$
$$L = \frac{0.75}{0.25} = 3 \text{ jobs}, \qquad L_q = \frac{0.75^2}{0.25} = \frac{0.5625}{0.25} = 2.25 \text{ jobs},$$
$$W = \frac{1}{20-15} = 0.2\ \text{h} = 12\ \text{min}, \qquad W_q = \frac{0.75}{5} = 0.15\ \text{h} = 9\ \text{min}.$$

*Three independent checks.* (i) Little's law: $\lambda W = 15 \times 0.2 = 3 = L$. (ii) Composition: $L_q + \rho = 2.25 + 0.75 = 3 = L$. (iii) Time split: $W_q + 1/\mu = 0.15 + 0.05 = 0.2 = W$. All consistent. The technician is idle 25 percent of the time and there are still 3 jobs in the shop on average — that is the randomness tax.

**Example 2 — should we buy the faster machine?** This is what a queueing model is *for*. A print shop takes $\lambda = 18$ jobs/hour. Each job sitting in the shop costs 40 dollars per job-hour (tied-up materials plus customer goodwill). The current press runs at $\mu = 20$/hour. Faster presses are available; each extra unit of $\mu$ above 20 costs 20 dollars per hour to lease. Total cost rate is

$$C(\mu) = 40\,L(\mu) + 20(\mu - 20) = \frac{40 \times 18}{\mu - 18} + 20(\mu - 20).$$

| $\mu$ | $L = 18/(\mu-18)$ | waiting cost (dollars/h) | lease premium (dollars/h) | **total** |
|---|---|---|---|---|
| 20 | 9.00 | 360 | 0 | **360** |
| 22 | 4.50 | 180 | 40 | **220** |
| 24 | 3.00 | 120 | 80 | **200** |
| 26 | 2.25 | 90 | 120 | **210** |
| 28 | 1.80 | 72 | 160 | **232** |

Buy the $\mu = 24$ press: 200 dollars/hour versus 360 today, a saving of 160 dollars/hour. *Check by calculus:* $C'(\mu) = -720/(\mu-18)^2 + 20 = 0$ gives $(\mu-18)^2 = 36$, so $\mu^* = 24$ exactly, with $C(24) = 120 + 80 = 200$ — matching the table. *Check by Little's law:* at $\mu = 24$, $W = 1/6$ h and $\lambda W = 18/6 = 3 = L$.

Notice the shape: the first upgrade buys a huge amount (360 → 220) because it pulls $\rho$ off the cliff from 0.90 to 0.818; the next buys much less. **Capacity is worth most when you have least of it.**

## The distribution of the wait

Averages aren't service levels. For M/M/1 with FCFS the *total time in system* $T$ turns out to be exponentially distributed with rate $\mu - \lambda$:

$$P(T > t) = e^{-(\mu - \lambda)t}.$$

*In words: the tail decays at the rate of your spare capacity.* Sanity check: its mean is $1/(\mu-\lambda) = W$, as it must be.

For the repair shop ($\lambda = 15$, $\mu = 20$, so $\mu - \lambda = 5$/hour), the chance a job takes over 30 minutes is

$$P(T > 0.5) = e^{-5 \times 0.5} = e^{-2.5} = 0.082,$$

about 8 percent of jobs. Inverting instead: to promise a turnaround met 95 percent of the time, solve $e^{-5t} = 0.05$, giving $t = \ln(20)/5 = 0.599$ h ≈ **36 minutes**. *Check:* $e^{-5(0.599)} = e^{-2.996} = 0.050$. So "average 12 minutes" and "36 minutes for 95 percent of jobs" describe the same shop — always quote the percentile, never the mean, in a service-level agreement.

## Watch out

- **You might think $\rho < 1$ means "fine."** It only means *stable* — the queue doesn't grow without bound. $\rho = 0.99$ is perfectly stable and completely unusable. Stability is a floor, not a goal.
- **You might confuse $L$ with $L_q$, or $W$ with $W_q$.** $L$ and $W$ count the customer *being served*; $L_q$ and $W_q$ do not. They differ by exactly $\rho$ and $1/\mu$ respectively. Read the question: "how long in line" is $W_q$; "how long until I walk out" is $W$.
- **You might mix time units.** $\lambda$ and $\mu$ must share units before you subtract them. "20 per hour" and "3 minutes per job" cannot be combined until the latter becomes $\mu = 20$/hour.
- **You might average two periods' utilizations.** Because $W_q$ is convex in $\rho$, a shop at $\rho = 0.5$ for half the day and $\rho = 0.9$ for the other half is *far worse* than a steady $\rho = 0.7$ — averaging the load underestimates the wait. (Steady-state formulas describe a system at one fixed load; peaks need their own calculation.)

## Assumptions, and when they fail

Stated honestly, because M/M/1 is often applied where it doesn't belong:

- **Poisson arrivals.** Good for many independent customers acting on their own. Bad for *scheduled* arrivals (appointments, timetabled flights, batch jobs) — those are far less variable, so M/M/1 badly overstates the queue.
- **Exponential service.** Exponential service times are highly variable (standard deviation equals the mean) — an assumption of maximum ignorance. When service is nearly *constant*, the model is pessimistic in a precisely known way: the **M/D/1** queue (deterministic service) has $L_q = \rho^2 / \bigl(2(1-\rho)\bigr)$ — **exactly half** the M/M/1 queueing delay, at every load. Striking, and useful: standardizing service times buys you a 50 percent cut in waiting at no cost in capacity.
- **General service.** For any service distribution with mean $1/\mu$ and standard deviation $\sigma$, the **M/G/1** queue obeys the *Pollaczek–Khinchine formula*, $L_q = \bigl(\rho^2 + \lambda^2\sigma^2\bigr)/\bigl(2(1-\rho)\bigr)$, which reproduces M/M/1 at $\sigma = 1/\mu$ and M/D/1 at $\sigma = 0$ — making explicit that **delay is driven by $\sigma$, not just by $\rho$.**
- **Infinite waiting room, one customer class.** Real customers *balk* (refuse to join a long line) and *renege* (leave after waiting), both of which cap the queue and make M/M/1 pessimistic. And real systems triage — priority classes change who waits, though by Little's law not the overall average.

## One-liner

> In M/M/1 the queue length is geometric, $p_n = (1-\rho)\rho^n$, so $L = \rho/(1-\rho)$ and every wait scales like $1/(1-\rho)$ — meaning the wait is set by your *spare* capacity, and randomness, not load, is what fills the line.

## Problems

**P1 (🟢)** A single-window coffee counter gets customers as a Poisson process at $\lambda = 24$/hour; the barista's service times are exponential with mean 2 minutes. Find $\rho$, $p_0$, $L$, $L_q$, $W$, and $W_q$ (give the times in minutes). Verify $L$ and $L_q$ a second way using Little's law.

**P2 (🟡)** Same counter. The manager wants at most 10 percent of customers to spend more than 15 minutes in the shop. (a) Is the current setup meeting that? (b) What service rate $\mu$ would just meet it, and what mean service time is that?

**P3 (🔴)** A factory tool crib is staffed by one clerk; mechanics arrive to draw tools as a Poisson process at $\lambda = 8$/hour. A mechanic standing at the crib is not fixing machines, which costs the plant 30 dollars per mechanic-hour. Two candidates: clerk A serves at $\mu = 10$/hour for 12 dollars/hour; clerk B serves at $\mu = 12$/hour for 20 dollars/hour. (a) Which minimizes total cost per hour? (b) What is the highest wage at which B is still worth hiring over A? (c) What fraction of the time would B be idle — and why is that not an argument against hiring B?

<details>
<summary>Solutions</summary>

**P1** Mean service 2 minutes means $\mu = 60/2 = 30$/hour. Same units as $\lambda = 24$/hour, so:

$$\rho = \frac{24}{30} = 0.8, \qquad p_0 = 1 - 0.8 = 0.2.$$

$$L = \frac{0.8}{0.2} = 4 \text{ customers}, \qquad L_q = \frac{0.8^2}{0.2} = \frac{0.64}{0.2} = 3.2 \text{ customers}.$$

$$W = \frac{1}{30-24} = \frac{1}{6}\ \text{h} = 10\ \text{min}, \qquad W_q = \frac{\rho}{\mu-\lambda} = \frac{0.8}{6} = \frac{2}{15}\ \text{h} = 8\ \text{min}.$$

*Check (Little's law, applied twice).* $\lambda W = 24 \times \tfrac16 = 4 = L$ ✓ and $\lambda W_q = 24 \times \tfrac{2}{15} = 3.2 = L_q$ ✓. *Third check:* $W - W_q = 10 - 8 = 2$ min $= 1/\mu$ ✓, and $L - L_q = 4 - 3.2 = 0.8 = \rho$ ✓.

**P2** Time in system is exponential with rate $\mu - \lambda$.

(a) Currently $\mu - \lambda = 30 - 24 = 6$/hour, and 15 min $= 0.25$ h:

$$P(T > 0.25) = e^{-6 \times 0.25} = e^{-1.5} = 0.223.$$

About 22 percent exceed 15 minutes — more than double the 10 percent target, so **no**.

(b) Require $e^{-(\mu - 24)(0.25)} \le 0.10$, i.e. $(\mu - 24)(0.25) \ge \ln 10 = 2.3026$, so

$$\mu \ge 24 + \frac{2.3026}{0.25} = 24 + 9.21 = 33.21 \text{ per hour},$$

a mean service time of $60/33.21 \approx 1.81$ minutes (down from 2.00).

*Check.* At $\mu = 33.21$: $\mu - \lambda = 9.21$, and $e^{-9.21 \times 0.25} = e^{-2.303} = 0.100$ ✓. *Sanity:* shaving 0.19 min (about 10 percent) off the mean service time cuts the over-15-minute fraction from 22 percent to 10 percent — the leverage of a small capacity gain near a high $\rho$, exactly the blow-up section's point ($\rho$ falls only from 0.800 to 0.723).

**P3** Total cost per hour = (30 dollars per mechanic-hour) $\times L$ + clerk's wage, where $L = \lambda/(\mu - \lambda)$ counts mechanics tied up at the crib.

(a) Clerk A: $L = 8/(10-8) = 4$ mechanics, so $30(4) + 12 = 120 + 12 = 132$ dollars/hour.
Clerk B: $L = 8/(12-8) = 2$ mechanics, so $30(2) + 20 = 60 + 20 = 80$ dollars/hour.
**Hire B**, saving 52 dollars/hour — roughly 100,000 dollars a year on a 2,000-hour schedule.

*Check via Little's law.* A: $W = 1/(10-8) = 0.5$ h, $\lambda W = 8(0.5) = 4 = L$ ✓. B: $W = 1/(12-8) = 0.25$ h, $\lambda W = 8(0.25) = 2 = L$ ✓. B halves the wait, from 30 minutes to 15.

(b) Break-even wage $w$ for B solves $30(2) + w = 132$, so $w = 72$ dollars/hour. B is worth up to **72 dollars/hour** — six times A's wage, and 3.6 times B's actual wage. *Check:* at $w = 72$, B costs $60 + 72 = 132 =$ A's cost ✓.

(c) $p_0 = 1 - \rho = 1 - 8/12 = 1/3$: B is idle **one-third** of the time, versus $1 - 0.8 = 20$ percent for A. That is not a defect, it is the product being purchased. The idle time *is* the slack that absorbs randomness, and it saves 60 dollars/hour of mechanic time for 8 dollars/hour of extra wage. Judging a server by its utilization rather than by the cost of the queue behind it is the classic operations error — the busiest-looking clerk here is the expensive one.

</details>

## Flashback

**From Lesson 4.1 (Poisson arrivals & Little's law)** — fresh variant, with a unit conversion: An airport security checkpoint clears 900 passengers per hour during the morning peak. A time study finds the average passenger spends 8 minutes from joining the line to collecting their bag past the scanner. (a) How many passengers are inside the checkpoint on average? (b) The holding area physically fits 80 people before the line spills into the terminal. What average time in the checkpoint would keep it within capacity at the same throughput?

<details>
<summary>Solution</summary>

Little's law, $L = \lambda W$ — but the units must agree first. Throughput is per **hour**, the time is in **minutes**.

(a) $W = 8 \text{ min} = \tfrac{8}{60} = \tfrac{2}{15}$ h. Then

$$L = \lambda W = 900 \times \tfrac{2}{15} = 120 \text{ passengers}.$$

Over capacity by 40 people — the line is already spilling out.

(b) Solve for $W$ at $L = 80$:

$$W = \frac{L}{\lambda} = \frac{80}{900} = 0.0889\ \text{h} = 5.33 \text{ min}.$$

*Check.* $900 \times 0.0889 = 80$ ✓. Equivalently, at 900/hour a passenger enters every 4 seconds, so 120 passengers inside $\times$ 4 s each = 480 s = 8 min ✓.

*Why this is legitimate:* a checkpoint is emphatically **not** M/M/1 — many parallel lanes, decidedly non-exponential service, arrivals driven by flight schedules rather than a Poisson process. Little's law doesn't care. It needs only a stable system with a well-defined long-run throughput, which is precisely what makes it the one queueing result you can use on anything.

</details>

## Connections

- **Backward:** the arrival process and memorylessness come from [4.1](04-01-poisson-arrivals-littles-law.md); this lesson's whole derivation rests on the exponential distribution's memoryless property ([`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md)), which is what makes "number in system" a sufficient state. And Little's law is doing the heavy lifting — we derived exactly one quantity from the distribution and got four more for free.
- **Forward:** [4.3](04-03-mmc-pooling-networks.md) adds servers. Balance equations of the same form, but with a state-dependent service rate $\min(n,c)\mu$, giving Erlang-C — and the reason one pooled queue of $c$ servers beats $c$ separate M/M/1 queues is exactly the convexity you saw in panel (b) of the figure. [4.5](04-05-simulation-nonlinear-taste.md) simulates queues whose assumptions break the closed forms above.
- **Sideways:** the birth–death chain is a continuous-time Markov chain, the same object [3.4](03-04-stochastic-dynamic-programming.md) optimizes over when it turns a Markov chain into a Markov decision process — there we *chose* actions to shape transitions, here we only observe them. Deciding when to add capacity is the natural MDP on top of this chain. The convexity of $C(\mu)$ in Example 2 is a one-variable instance of the convex programs in [convex-optimization](../../convex-optimization/syllabus.md); the first-order condition $C'(\mu^*) = 0$ is its KKT condition with no active constraints.

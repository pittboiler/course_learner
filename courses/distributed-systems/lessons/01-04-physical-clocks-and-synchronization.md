# Distributed Systems · Lesson 1.4: Physical clocks

> ⏱ ~15 min · Module 1: Models, Time, and Global State · Builds on: [1.1 (why it's hard)](01-01-why-distributed-systems-are-hard.md), [1.3 (RPC and delivery semantics)](01-03-rpc-and-delivery-semantics.md) · Unlocks: [1.5 (logical time)](01-05-logical-time-lamport-and-vector-clocks.md)

## Why this matters

Sooner or later somebody resolves a conflict between two replicas by comparing timestamps and keeping the newer one. It is the most natural thing in the world and it silently drops data, because the two timestamps came from two different clocks that were never the same clock.

This lesson is about how far apart real clocks get, what synchronization can and cannot buy back, and — the part that matters most — why the answer is an **interval**, never an instant. Every wall-clock reading in a distributed system is "some time in this range", and a system that forgets the range is a system that will order two events wrongly and never find out.

## The idea

A computer's clock is a quartz crystal counting oscillations, and quartz is temperature-sensitive and imperfectly cut. A typical crystal is specified at around **50 parts per million**, which means it gains or loses up to 50 microseconds per second. That sounds negligible until you scale it: 180 milliseconds an hour, **4.3 seconds a day**.

Two definitions keep this straight. **Skew** is how far apart two clocks read *right now*. **Drift** is the *rate* at which that gap grows. Skew is the problem; drift is the mechanism, and it is why synchronizing once is useless — the clocks immediately begin separating again, so synchronization is a rate, not an event.

Now the difficulty. To learn the time from a better clock, you ask it, and the answer travels over a network. It leaves the server at some instant and reaches you later, and **you cannot measure how much later**, because measuring it would require the synchronized clocks you are trying to obtain. All you can observe is the round trip.

So you split the round trip in half and assume symmetry. That assumption is usually roughly right and occasionally badly wrong — a congested outbound path with an empty return path breaks it, and asymmetric routing breaks it systematically. **The residual uncertainty is bounded by the round-trip time**, and the only way to a tight clock is a short, symmetric path.

The honest conclusion: physical time gives you an *approximate* ordering, good to milliseconds on a LAN and tens of milliseconds across the internet, and it cannot certify that one event preceded another when they are closer together than that. That gap is what [1.5](01-05-logical-time-lamport-and-vector-clocks.md) exists to fill.

## The formal version

> **Drift rate.** A clock $C$ has drift bounded by $\rho$ if $1 - \rho \le \frac{dC}{dt} \le 1 + \rho$ for real time $t$.

In words: one second of real time advances the clock by between $1-\rho$ and $1+\rho$ seconds. Two clocks drifting in opposite directions separate at up to $2\rho$, so to hold skew below $\delta$ you must resynchronize at least every

$$\Delta t = \frac{\delta}{2\rho}.$$

> **Cristian's algorithm.** The client records $T_1$, receives the server's time $T_s$, records $T_4$. It sets its clock to $T_s + \frac{T_4 - T_1}{2}$.

The accuracy is $\pm\left(\frac{\mathrm{RTT}}{2} - \ell_{\min}\right)$ where $\ell_{\min}$ is the minimum possible one-way latency: the reply could have been generated anywhere in the window between the earliest it could have arrived and the latest it could have been sent.

> **NTP's four timestamps.** $T_1$ client send, $T_2$ server receive, $T_3$ server send, $T_4$ client receive. Then
> $$\delta = (T_4 - T_1) - (T_3 - T_2), \qquad \theta = \frac{(T_2 - T_1) + (T_3 - T_4)}{2}.$$

In words: $\delta$ is the total time on the wire, obtained by subtracting the server's own processing time from the round trip — and note it uses only *differences* measured on a single clock, so it is immune to the offset it is trying to find. Then $\theta$ estimates how far the server's clock is ahead of the client's, and **the true offset is guaranteed to lie within $\theta \pm \delta/2$.** That interval is the deliverable; $\theta$ alone is a point estimate with the error bar thrown away.

> **Berkeley algorithm.** A coordinator polls every node, discards outliers, averages the remaining offsets, and tells each node how much to adjust.

The contrast with Cristian and NTP is the point: those pull time *from an authority*; Berkeley computes an *internally agreed* time with no external reference. It gives a cluster that agrees with itself and may be arbitrarily far from UTC — which is exactly right when you care about mutual consistency and not about the actual date.

**Never set a clock backwards.** Correcting a fast clock by stepping it back makes time non-monotonic: a later event gets an earlier timestamp, durations come out negative, and anything keyed on timestamp ordering breaks. The correct fix is **slewing** — running the clock slightly slow until the error is absorbed. This is why every operating system exposes two clocks: a **wall-clock** that may jump (for dates) and a **monotonic** clock that never goes backwards (for durations). Measuring an elapsed time with the wall clock is a bug, and it is a bug that only appears on the days NTP made a correction.

## Picture

![A space-time diagram with a client lifeline above a server lifeline. A request leaves the client at T1 equals 100.000 and arrives at the server at T2 equals 100.030; a reply leaves at T3 equals 100.032 and arrives back at the client at T4 equals 100.050. Below, the round-trip delay is computed as 48 milliseconds and the offset estimate as plus 6 milliseconds. To the right, a horizontal bar shows the true offset lying anywhere between minus 18 and plus 30 milliseconds, a window as wide as the delay itself.](assets/01-04-fig1.svg)

The bar on the right is the whole lesson. The estimate is $+6$ ms and the truth is somewhere in a 48 ms window — so this measurement **cannot** order two events that occurred 20 ms apart on the two machines. Shrinking the window means shrinking the round trip, and nothing else.

## Worked examples

**Example 1 — how often must you resynchronize?**

Two servers have clocks specified at $\rho = 50$ ppm. Their relative drift is up to $2\rho = 100$ ppm, or $10^{-4}$ seconds per second.

To hold skew under **1 millisecond**:

$$\Delta t = \frac{10^{-3}}{10^{-4}} = 10 \text{ seconds}.$$

To hold it under **100 milliseconds**:

$$\Delta t = \frac{10^{-1}}{10^{-4}} = 1000 \text{ seconds} \approx 17 \text{ minutes}.$$

Two things to read off. First, **the relationship is linear**, so demanding ten times tighter skew means synchronizing ten times as often — there is no regime where tight synchronization is cheap. Second, and more important: the 1 ms target is **not achievable** by this calculation alone, because a typical LAN round trip already leaves $\pm 1$ ms of *measurement* uncertainty. Synchronizing every 10 seconds bounds the drift you accumulate between corrections; it does not make each correction accurate.

**Total error is drift-since-last-sync plus per-sync measurement error**, and past a point only the second term matters. That is why sub-millisecond clock agreement requires better hardware — GPS receivers or atomic clocks on the local network — rather than more frequent NTP polls.

**Example 2 — reading a real NTP exchange, and what it forbids.**

A client obtains $T_1 = 100.000$, $T_2 = 100.030$, $T_3 = 100.032$, $T_4 = 100.050$ (seconds on the respective clocks).

$$\delta = (100.050 - 100.000) - (100.032 - 100.030) = 0.050 - 0.002 = 0.048 = 48 \text{ ms}$$

$$\theta = \frac{(100.030 - 100.000) + (100.032 - 100.050)}{2} = \frac{0.030 + (-0.018)}{2} = +6 \text{ ms}$$

The server's clock is about 6 ms ahead of the client's, and the true offset lies in $[-18, +30]$ ms.

Now use it. The client timestamps a write at its local 200.000; the server timestamps a competing write at its local 200.010. **Which came first?**

Converting the server's reading to the client's frame gives $200.010 - \theta = 200.004$, so the server's write "came later" by 4 ms. But 4 ms is far inside the $\pm 24$ ms window, so **the ordering is not determined by the data**. Both orders are consistent with everything measured.

**A last-writer-wins conflict resolution would nonetheless pick one, confidently, and discard the other write.** That is not a bug in the implementation — it is the design working exactly as specified, on inputs that do not support the conclusion. It is the concrete reason [2.3](02-03-eventual-consistency-and-anti-entropy.md) treats last-writer-wins as a lossy choice rather than a conflict *resolution*, and the reason [1.5](01-05-logical-time-lamport-and-vector-clocks.md) abandons physical time for ordering altogether.

## Watch out

- **You might think a synchronized clock gives you a usable event order.** It gives you an order with an error bar, and comparisons inside the error bar are coin flips. A useful discipline: never compare two timestamps from different machines without asking whether the difference exceeds the synchronization uncertainty — and if your system does not track that uncertainty, it cannot ask.
- **You might think NTP's offset formula is spoiled by the clocks being wrong.** It is not, and this is the elegant part: $\delta$ uses $(T_4 - T_1)$ measured entirely on the client and $(T_3 - T_2)$ measured entirely on the server, so each difference is taken within one clock's own frame. What the formula assumes is not synchronization but **symmetry** — that the two one-way delays are equal. That assumption is the one that fails.
- **You might think stepping a clock backwards is a harmless correction.** It makes a later event carry an earlier timestamp. Use the monotonic clock for durations, timeouts and rate limits; reserve the wall clock for things humans read. This is the source of the classic outage where a leap-second correction made every timeout fire at once.

## One-liner

> A clock reading in a distributed system is an interval, not an instant, and the interval is about as wide as the round trip you used to obtain it — so any decision that turns on two timestamps closer together than that is not a decision, it is a coin flip with extra steps.

## Problems

**P1 (🟢)** Two machines have clocks with drift bounded by 30 ppm each.

(a) Give the maximum rate at which their readings can separate, in ppm and in milliseconds per minute.
(b) Give the longest resynchronization interval that holds their skew under 50 ms, assuming each synchronization is exact.
(c) The machines run for 6 hours with no synchronization. Give the worst-case skew, in seconds.
(d) State why the answer to (b) is optimistic in practice, in one clause.

**P2 (🟡)** A client and a server exchange NTP timestamps: $T_1 = 500.000$, $T_2 = 500.118$, $T_3 = 500.123$, $T_4 = 500.155$, all in seconds on the respective clocks.

(a) Give the round-trip delay $\delta$, in milliseconds.
(b) Give the offset estimate $\theta$, in milliseconds, and state which clock is ahead.
(c) Give the interval in which the true offset is guaranteed to lie.
(d) The client logs an event at its local 501.000 and the server logs one at its local 501.050. State whether the data determine which happened first, with the comparison that decides it.

**P3 (🔴, optional)** A cluster of four nodes runs the Berkeley algorithm. The coordinator polls and finds these offsets relative to its own clock, in milliseconds: coordinator $0$, node B $-40$, node C $+22$, node D $+2400$.

(a) State which reading should be discarded and why, in terms of the failure models of [1.2](01-02-failure-models-and-the-network.md).
(b) Give the average offset over the surviving nodes, and the adjustment the coordinator tells each surviving node to apply.
(c) State whether the resulting cluster time is closer to UTC than before, and justify the answer.
(d) Node D's adjustment would require setting its clock back by more than two seconds. Give the correct way to apply it and name one concrete failure that a direct step would cause.

<details>
<summary>Solutions</summary>

**P1**

(a) Two clocks drifting in opposite directions separate at up to $2\rho = 60$ ppm $= 6 \times 10^{-5}$ s/s.

Per minute: $6 \times 10^{-5} \times 60 = 3.6 \times 10^{-3}$ s $= \mathbf{3.6 \text{ ms per minute}}$.

(b) $\Delta t = \dfrac{\delta}{2\rho} = \dfrac{0.050}{6\times 10^{-5}} = 833 \text{ seconds} \approx \mathbf{13.9 \text{ minutes}}$.

(c) Six hours is 21,600 seconds: $21{,}600 \times 6\times 10^{-5} = \mathbf{1.30 \text{ seconds}}$.

Worth noticing how large that is. Two machines left alone for a working day disagree by over a second — far more than enough to reverse the order of two events a human would call simultaneous.

(d) **Because each synchronization is not exact**: it carries a measurement error of up to $\pm\delta/2$ from the round trip, so the real skew is the accumulated drift *plus* the residual error of the last correction, and below a few milliseconds the second term dominates.

**P2**

(a) $\delta = (T_4 - T_1) - (T_3 - T_2) = (0.155) - (0.005) = 0.150$ s $= \mathbf{150 \text{ ms}}$.

(b) $$\theta = \frac{(T_2 - T_1) + (T_3 - T_4)}{2} = \frac{0.118 + (-0.032)}{2} = \frac{0.086}{2} = +0.043 \text{ s} = \mathbf{+43 \text{ ms}}$$

Positive $\theta$ means the **server's clock is ahead** of the client's, by about 43 ms.

(c) $\theta \pm \delta/2 = 43 \pm 75$ ms, so the true offset lies in $\mathbf{[-32, +118] \text{ ms}}$.

Note that the interval **contains zero**: the data are consistent with the two clocks being perfectly synchronized. A 150 ms round trip simply cannot resolve a 43 ms offset.

(d) Correcting the server's reading into the client's frame: $501.050 - 0.043 = 501.007$, so the server's event appears **7 ms later** than the client's.

The deciding comparison is $7 \text{ ms}$ against the half-width $\delta/2 = 75 \text{ ms}$. Since $7 < 75$, **the data do not determine the order.** Both orderings are consistent with the measurements, and the gap would have to exceed 75 ms before this exchange could settle it.

**P3**

(a) **Discard node D's $+2400$ ms.** It is an outlier by two orders of magnitude, and averaging it in would drag every node's clock by hundreds of milliseconds on the strength of one bad reading.

In the vocabulary of [1.2](01-02-failure-models-and-the-network.md), a node reporting a wildly wrong value while remaining responsive is a **timing fault**, and if the cause is a corrupted reading rather than a slow clock it is **Byzantine** — arbitrary content, delivered promptly and confidently. Outlier rejection is the cheapest possible defence against exactly this, and it is why the algorithm specifies it rather than a plain mean.

(b) Surviving offsets: $0$, $-40$, $+22$.

$$\bar\theta = \frac{0 + (-40) + 22}{3} = \frac{-18}{3} = \mathbf{-6 \text{ ms}}$$

The agreed cluster time is 6 ms behind the coordinator. Each node is told to move by $\bar\theta$ minus its own offset:

| node | offset | adjustment |
|---|---|---|
| coordinator | $0$ | $-6$ ms |
| B | $-40$ | $+34$ ms |
| C | $+22$ | $-28$ ms |

Check: afterwards all three read $-6$ relative to the coordinator's original clock — they **agree**.

(c) **Not necessarily, and the algorithm does not claim it is.** Berkeley has no external reference; it averages the cluster's own opinions. If every clock in the cluster is 3 seconds fast, the average is 3 seconds fast and the nodes now agree precisely on the wrong time.

**This is the right trade when what you need is mutual consistency** — comparable timestamps across the cluster, coherent log ordering — and the wrong one when you need actual UTC, for which you want Cristian or NTP against an external stratum.

(d) **Slew it, do not step it**: run node D's clock slow (a few percent off nominal) until the 2.4 seconds are absorbed, so that time remains monotonically increasing throughout.

A concrete failure a direct backward step causes: **every timeout and lease held on that node instantly gains 2.4 seconds of apparent life.** A lock lease due to expire at wall-clock $t$ is now, after the step, 2.4 seconds from expiry again — so the node keeps behaving as lease-holder past the moment the rest of the cluster considers the lease dead, and two nodes act as owner at once. A second, quieter failure: any duration computed as `end - start` across the step comes out negative, which typically surfaces as a huge unsigned number rather than an error.

</details>

## Flashback

**From Lesson 1.2 (failure models):** A 9-node cluster is deployed. For each of the following, give the largest number of simultaneous faults of that kind it tolerates, and state the bound you used.

(a) Crash faults.
(b) Byzantine faults.
(c) The team then argues that adding a tenth node improves crash tolerance. State whether it does, with the arithmetic.

<details>
<summary>Solution</summary>

(a) Crash faults need $n \ge 2f+1$, so $9 \ge 2f+1$ gives $f \le 4$: **$f = 4$**.

(b) Byzantine faults need $n \ge 3f+1$, so $9 \ge 3f+1$ gives $f \le 8/3 = 2.67$: **$f = 2$**.

Note 9 is not tight for the Byzantine bound — $3(2)+1 = 7$ would do — so two of the nine nodes are buying nothing against Byzantine faults, though they do raise crash tolerance from 3 to 4.

(c) **It does not.** With $n = 10$: $10 \ge 2f+1$ gives $f \le 4.5$, so $f = 4$ — the same as with nine nodes.

**Even-sized clusters are the standard waste.** A majority of 10 is 6, and a majority of 9 is 5, so the tenth node raises the quorum size by one while raising the failure budget by zero. It costs a machine, adds a message to every round, and buys nothing — which is why consensus clusters are almost always sized 3, 5 or 7.

</details>

## Connections

- **Forward:** [1.5](01-05-logical-time-lamport-and-vector-clocks.md) gives up on physical time entirely and orders events by causality instead, which is exact where this lesson is approximate — at the cost of ordering fewer pairs.
- **Forward:** the uncertainty interval reappears twice more. [2.3](02-03-eventual-consistency-and-anti-entropy.md) shows what last-writer-wins does with timestamps inside the interval, and [3.6](03-06-state-machine-replication.md) uses a *bounded* interval deliberately: a leader lease is safe precisely because the leader waits out the clock uncertainty before assuming the old lease has expired.
- **Backward:** the symmetry assumption in Cristian's algorithm is the same round-trip-halving used to estimate RTT in [`computer-networks` 2.3](../../computer-networks/lessons/02-03-tcp-segments-connections-flow-control.md), and it fails in the same way — asymmetric paths — in both places.
- **Sideways:** reporting a measurement as an interval rather than a point is ordinary experimental practice, and the failure mode here is the familiar one of quoting a result without its error bar and then drawing a conclusion the bar does not support.

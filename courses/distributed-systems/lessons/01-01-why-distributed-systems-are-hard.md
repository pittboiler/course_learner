# Distributed Systems · Lesson 1.1: Why it's hard

> ⏱ ~15 min · Module 1: Models, Time, and Global State · Builds on: [`operating-systems` 1.4 (threads and concurrency)](../../operating-systems/lessons/01-04-threads-and-concurrency.md), [`computer-networks` 2.2 (reliable data transfer)](../../computer-networks/lessons/02-02-building-reliable-data-transfer.md) · Unlocks: [1.2 (failure models)](01-02-failure-models-and-the-network.md)

## Why this matters

You already know how to write a correct concurrent program on one machine. Locks, condition variables, the memory model — all of it assumed something so basic it was never stated: **every participant either works or is gone, and you can tell which.** A thread does not half-execute. Memory does not answer some reads and not others. The clock is the same clock for everybody.

Take those away and almost every technique you have breaks. Not "gets slower" — *breaks*, in the sense that the code is wrong and the bug appears once a month at 3am.

This lesson is about naming exactly what was taken away, because every result in the rest of the course is a consequence of one of three things.

## The idea

A distributed system is a set of machines that appear to their users as one system, and it has three defining afflictions.

**Partial failure.** On one machine, a crash takes everything with it. Across ten machines, any subset can be down while the rest run — and, crucially, the survivors **cannot tell which**. A single computer gives you an all-or-nothing failure model for free. A distributed system charges you for it, and the price is most of this course.

**No shared clock.** Two machines' clocks disagree, drift apart, and occasionally jump backwards. So "which of these two events happened first?" has no cheap answer, and any algorithm that quietly assumes one is broken.

**Unbounded message delay.** A message may take a microsecond or a minute, and there is no way to know from the outside whether a slow reply means "busy" or "gone". This is the sharpest of the three, because it is what makes the other two unfixable rather than merely annoying.

Here is the whole subject in one observation. **You send a request and no reply comes back. What happened?**

Maybe the request never arrived. Maybe it arrived, the server did the work, and then crashed before replying. Maybe it arrived, the work was done, the reply was sent, and *the reply* was lost. From where you sit, these are the same event. You waited, and nothing came.

They are not the same event on the server. In one case nothing happened; in two, your money moved. **And no amount of waiting distinguishes them.**

## The formal version

The choices that fix what you're allowed to assume are the **system model**. Two axes matter, and this lesson sets the timing axis; [1.2](01-02-failure-models-and-the-network.md) sets the failure axis.

> **Synchronous model.** There are known bounds: message delay is at most $d$, a processing step takes at most $p$, and clock drift rate is at most $\rho$. All three are known to the algorithm designer.

In words: you may set a timeout and be *right*. If a healthy node would have replied within $2d + p$, then silence past that instant proves the node is dead.

> **Asynchronous model.** There are no bounds at all. Messages arrive eventually but arbitrarily late; a process may take arbitrarily long between steps; there are no usable clocks.

In words: no timeout is ever correct, because any silence you observe is consistent with a healthy node that is merely slow. This is the model most impossibility results are proved in, and it is the model the real internet most resembles.

> **Partially synchronous model.** Bounds $d$ and $p$ exist but are unknown; or they are known but only hold after some unknown **global stabilization time** (GST).

In words: the network behaves badly for a while and then settles, and you don't get told when. This is the honest model for a real data centre, and it is precisely the assumption that lets Paxos and Raft terminate ([3.2](03-02-failure-detectors-and-escaping-flp.md)).

> **Indistinguishability.** Two executions are indistinguishable to a process if it receives the same messages in the same order in both. A process cannot behave differently in executions it cannot distinguish.

In words: this one sentence is the proof technique behind FLP ([3.1](03-01-the-consensus-problem-and-flp.md)), CAP ([3.5](03-05-the-cap-theorem-and-pacelc.md)), and the 2PC blocking result ([4.1](04-01-distributed-transactions-and-2pc.md)). It is worth learning now as a habit: when a protocol claims to decide something, ask which two worlds it is claiming to tell apart, and check that it can.

**The eight fallacies of distributed computing** (Deutsch and Gosling) are the list of assumptions people import from single-machine programming without noticing: the network is reliable; latency is zero; bandwidth is infinite; the network is secure; topology doesn't change; there is one administrator; transport cost is zero; the network is homogeneous. Every one is false, and each has a lesson in this course attached to it.

## Picture

![Three stacked space-time diagrams sharing one client and one server lifeline. In the first, the request is lost before reaching the server. In the second, the request arrives and is applied and then the server crashes. In the third, the request arrives, is applied, and the reply is lost on the way back. In all three the client observes only that it sent a request and received no reply.](assets/01-01-fig1.svg)

The three worlds differ in whether the work was done — the difference that matters most — and the client's observation is byte-for-byte identical in all of them. Everything in [1.3](01-03-rpc-and-delivery-semantics.md) is an attempt to make this survivable rather than to make it go away.

## Worked examples

**Example 1 — adding machines can make you less available.**

A request path runs through five services, each independently up 99.9 percent of the time, and **all five must work** for the request to succeed.

$$A_{\text{serial}} = 0.999^5 = 0.99501$$

That is 99.50 percent, not 99.9. In downtime: one service alone is out $0.001 \times 8760 = 8.76$ hours per year; the chain of five is out **43.7 hours** per year. Five nines' worth of engineering on each component bought you fewer nines than any component has.

**Components in series multiply, and multiplying numbers below one makes them smaller.** This is the single most useful piece of arithmetic in system design and it points the wrong way from intuition: decomposing a monolith into five microservices, changing nothing else, makes the system strictly less available.

Now replicate instead. Three copies of one service, each 99.9 percent up, and the request succeeds if **any one** is up:

$$A_{\text{parallel}} = 1 - (0.001)^3 = 1 - 10^{-9} = 0.999999999$$

Nine nines, from the same components. **Series multiplies unavailability away from you; parallel multiplies it toward zero.** The rest of Module 2 is about the fact that "any one is up" is far easier to arrange for a read than for a write.

**Example 2 — when is a timeout a proof?**

A monitoring service wants to declare a node dead. Under a **synchronous** model with message delay at most $d = 50$ ms and processing at most $p = 10$ ms, a ping sent at time $t$ to a live node produces a reply by

$$t + d + p + d = t + 2d + p = t + 110 \text{ ms}.$$

So a timeout of 110 ms is a **proof of death**: no live node can be silent that long. A failure detector built this way never makes a mistake — it is what [1.2](01-02-failure-models-and-the-network.md) will call *perfect*.

Now drop to the **asynchronous** model. The same ping, the same silence at 110 ms, and now — nothing follows. The node may be garbage-collecting for 400 ms, or descheduled by its hypervisor, or behind a congested link. Raise the timeout to 10 seconds and the situation is unchanged in kind: you have made a mistake less likely, not impossible.

**The timeout did not become unreliable because the network got worse. It became unreliable because you removed a bound you were previously allowed to assume.** That is what choosing a system model does, and it is why the first question about any distributed algorithm is which model it was proved in.

## Watch out

- **You might think a timeout tells you a node is down.** In an asynchronous system it tells you the node has not answered *yet*, which is a statement about you, not about it. Every protocol in Module 3 is built to stay *safe* when this guess is wrong, and to make progress only when it happens to be right.
- **You might think more replicas always means more availability.** Only if the requirement is "at least one works". If every replica must participate — a write that waits for all $N$ acknowledgements, a query that must reach every shard — then you have built a *series* system out of replicas, and each one you add makes it worse.
- **You might think these problems go away inside one data centre.** They get rarer, not different. A rack-top switch reboot is a partition; a long garbage-collection pause is indistinguishable from a crash; a machine whose clock was stepped by NTP has just seen time run backwards. The failure modes are identical to the internet's, only less frequent — which makes them harder to find, not easier.

## One-liner

> A distributed system is one where a component you didn't know existed can fail and leave you unable to tell whether your request happened — and the reason no clever protocol fixes that is that the three worlds it would have to distinguish look identical from where you stand.

## Problems

**P1 (🟢)** A checkout request passes through 6 services. Each is independently available 99.95 percent of the time and all 6 are required.

(a) Give the end-to-end availability, to four decimal places as a percentage.
(b) Give the expected downtime in hours per year.
(c) The team replaces the least reliable service with 3 independent replicas behind a load balancer, the request succeeding if any replica is up. Give the new availability of that one service.
(d) State, in one clause, the general rule for when adding a machine helps and when it hurts.

**P2 (🟡)** A system is specified as follows: "messages between nodes are delivered within 200 ms or not at all; each node completes a request in under 30 ms; clocks are synchronized to within 5 ms."

(a) Name the timing model this describes.
(b) Give the smallest timeout that lets a node conclude with certainty that a peer it pinged has crashed, and show the terms.
(c) The operations team removes the 200 ms delivery guarantee, replacing it with "messages are delivered eventually." Name the new timing model, and state what happens to your answer in (b).
(d) A third engineer says: "the network is fine 99.99 percent of the time, so 200 ms is a safe bound in practice." State which model this actually describes, and name the one thing an algorithm may still rely on in it.

**P3 (🔴, optional)** A client sends "transfer 100 dollars" to a server, waits, and receives nothing.

(a) List the three distinct worlds the client cannot distinguish, stating for each whether the transfer happened.
(b) The client retries. For each of the three worlds, state what the *server* now sees and what the resulting balance is if the server simply applies every request it receives.
(c) Give the single change to the request that makes retrying safe in all three worlds, and state the property it gives the operation.
(d) An engineer proposes instead: "before retrying, query the server to ask whether the transfer happened." Explain why this does not solve the problem, in terms of indistinguishability.

<details>
<summary>Solutions</summary>

**P1**

(a) Six components in series multiply:

$$0.9995^6 = 0.99700\ldots$$

To four decimal places, **99.7004 percent**.

(b) Unavailability is $1 - 0.997004 = 0.002996$. A year is 8760 hours, so

$$0.002996 \times 8760 = \mathbf{26.2 \text{ hours per year}}.$$

Each individual service is down $0.0005 \times 8760 = 4.38$ hours per year, so the chain is out roughly six times as long as any one part — which is the point.

(c) Three independent replicas, succeeding if any is up:

$$1 - (0.0005)^3 = 1 - 1.25 \times 10^{-10} = 0.999999999875$$

Effectively **100 percent** for this purpose — about 4 milliseconds of downtime per year.

(d) **Adding a machine helps when it is an alternative and hurts when it is a dependency.** Formally: parallel components multiply *unavailabilities* (driving the product toward zero), series components multiply *availabilities* (driving the product below every term).

**P2**

(a) **Synchronous.** All three bounds — message delay, processing time, and clock drift — are stated and known.

(b) A ping must travel out (up to 200 ms), be processed (up to 30 ms), and the reply must travel back (up to 200 ms):

$$2d + p = 2(200) + 30 = \mathbf{430 \text{ ms}}.$$

Silence past 430 ms is a proof of failure, because no live peer is permitted to be that slow. The 5 ms clock bound does not enter, since the timeout is measured on one node's own clock over an interval — but it would matter if the two nodes compared timestamps rather than elapsed times.

(c) **Asynchronous.** The answer to (b) is destroyed: **no finite timeout is a proof.** Any silence, however long, is consistent with a live peer whose message is still in flight, so a detector built on timeouts can now be wrong in both directions.

(d) This is the **partially synchronous** model: a bound exists and usually holds, but is not guaranteed at every instant, and nothing signals when it has been violated.

**What an algorithm may still rely on is safety, never liveness.** It must be designed so that when the bound is violated and a timeout fires wrongly, nothing *incorrect* happens — no two nodes decide different values, no committed data is lost. It is allowed to stop making progress during the bad period and resume afterwards. This division is the design principle behind every protocol in Module 3: **safety always, liveness when the network cooperates.**

**P3**

*Accept criterion: any three worlds that (i) differ in whether the server applied the transfer, and (ii) produce an identical observation at the client — namely "request sent, no reply". The three below are the standard partition of the possibilities.*

(a)

| world | transfer happened? |
|---|---|
| the request was lost in the network | **no** |
| the request arrived and was applied, then the server crashed before replying | **yes** |
| the request arrived, was applied, the reply was sent and lost | **yes** |

(b) On a retry, if the server applies every request it receives:

| world | what the server sees | resulting effect |
|---|---|---|
| request lost | the retry is the **first** request it has seen | 100 transferred — correct |
| crash after applying | on restart, the retry is a **second** request | **200 transferred — wrong** |
| reply lost | the retry is a **second** request | **200 transferred — wrong** |

So the naive retry is correct in exactly one of the three worlds, and the client cannot tell which one it is in. **Retrying is unsafe and not retrying is also unsafe** — this is the whole problem, and it is why [1.3](01-03-rpc-and-delivery-semantics.md) exists.

(c) **Attach a unique request identifier** that stays the same across retries, and have the server record which identifiers it has already applied, rejecting duplicates.

The property this gives is **idempotency**: applying the operation twice has the same effect as applying it once. With it, the client may retry freely — in world 1 the retry is the first application, and in worlds 2 and 3 it is recognised as a duplicate and ignored. **The client still cannot tell the worlds apart; it no longer needs to.** That is the move the entire course makes over and over: stop trying to learn what happened, and make the thing you do next correct in every world consistent with what you observed.

(d) A query is just another request, and it is subject to exactly the same three failures. If the query gets no reply you have learned nothing new; if it does get a reply you have learned the state at the moment the server answered, which says nothing about a retry you send afterwards.

More sharply, in terms of indistinguishability: **the query cannot distinguish a server that never saw your transfer from one that saw it, applied it, and lost its record in a crash before it could be durable.** You have replaced one unanswerable question with another, and paid a round trip for it. The only way out is to change what the *operation* means, not to gather more evidence about it.

</details>

## Connections

- **Forward:** [1.2](01-02-failure-models-and-the-network.md) fixes the second axis of the system model — *how* nodes fail — and [1.3](01-03-rpc-and-delivery-semantics.md) turns Example 2's unanswerable question into a delivery guarantee you can actually build on.
- **Forward:** the asynchronous model defined here is the exact setting of [3.1](03-01-the-consensus-problem-and-flp.md)'s FLP impossibility, and partial synchrony is the assumption [3.2](03-02-failure-detectors-and-escaping-flp.md) adds to escape it.
- **Backward:** [`operating-systems` 1.4](../../operating-systems/lessons/01-04-threads-and-concurrency.md) gave you concurrency with shared memory and a shared fate. Everything harder here traces to removing the shared fate; [`computer-architecture` 5.3](../../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) is the hardware that provides it, and its loss is what makes consensus expensive and a shared variable free.
- **Sideways:** the series/parallel availability arithmetic of Example 1 is reliability block analysis, the same structure as component reliability in engineering — and the indistinguishability argument is the distributed-systems cousin of an identification problem in econometrics: two different worlds generating the same observations means no procedure, however clever, can separate them.

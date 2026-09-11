# Distributed Systems · Lesson 1.3: RPC and delivery semantics

> ⏱ ~15 min · Module 1: Models, Time, and Global State · Builds on: [1.1 (why it's hard)](01-01-why-distributed-systems-are-hard.md), [1.2 (failure models)](01-02-failure-models-and-the-network.md) · Unlocks: [1.7 (ordered broadcast)](01-07-ordered-broadcast-fifo-causal-total.md), [4.1 (2PC)](04-01-distributed-transactions-and-2pc.md)

## Why this matters

A remote procedure call is the most successful abstraction in distributed computing and the most dangerous, for the same reason: it makes a network round trip look like a function call. Local calls always return. Remote calls have a third outcome — **no answer** — and there is no syntax for it.

The practical question this lesson answers is the one you face every time you write a retry: **is it safe to send this again?** The answer is a property of the operation, not of the network, and knowing which operations have it is most of what separates a system that survives a bad afternoon from one that double-charges a thousand customers.

## The idea

Strip an RPC down. The caller **marshals** its arguments into bytes, the bytes cross a network, the callee unmarshals them, runs the procedure, marshals the result, and sends it back. Four translations and two network traversals hiding behind a function-call syntax.

Every one of those steps can fail, but only one failure is interesting: the one from [1.1](01-01-why-distributed-systems-are-hard.md) where **no reply comes and you cannot tell why**. Your two options are stark.

**Give up.** Report an error to the application and never retry. Then the operation ran **at most once** — possibly zero times, possibly one, and you will never know which.

**Retry.** Send it again, and again, until something comes back. Then the operation ran **at least once** — and if the original attempt did in fact land, it ran twice.

There is no third option that involves trying harder, because the third option would require knowing which world you are in, and you cannot. **The way out is not to learn what happened but to change the operation so that it does not matter.** Give each logical request a unique identifier that stays fixed across retries, have the server remember which identifiers it has already executed, and drop repeats. Now retry freely: the first copy to arrive runs, every later copy is discarded, and the effect is **exactly once** regardless of which world you were in.

That combination — retry on the client, deduplicate on the server — is what "exactly-once" means in every system that honestly claims it. It is a statement about *effects*, achieved by the receiver, not about *deliveries*, and the distinction matters because the delivery version is impossible.

## The formal version

> **At-most-once.** Every request is executed zero or one times. Achieved by never retrying (or by deduplicating without retrying). The caller may be left not knowing which.

> **At-least-once.** Every request is executed one or more times, provided the caller retries until it gets a reply. Safe only if the operation is idempotent.

> **Exactly-once.** Every request has the effect of exactly one execution. Achieved as *at-least-once delivery plus deduplicated, durable execution*, never as a delivery guarantee on its own.

> **Idempotency.** An operation $f$ applied to state $s$ is idempotent when $f(f(s)) = f(s)$ — running it twice leaves the same state as running it once.

In words: `set balance to 50` is idempotent; `add 50 to balance` is not. The second becomes idempotent once you attach a request id and record it, which is exactly what the dedup table buys you — you are not making the operation idempotent, you are wrapping it in something that is.

**The impossibility that rules out exactly-once delivery.** Two generals on opposite hills must attack simultaneously, and the only channel between them runs through a valley where messengers are captured.

> **Two Generals.** Over a channel that may lose messages, no finite protocol lets two parties reach common knowledge of a decision.

The argument is short and worth holding on to. Suppose some protocol works and let $\pi$ be a shortest such protocol, with a last message $m$. Since $m$ may be lost, and since the protocol must still work when it is lost, the sender's and receiver's decisions cannot depend on $m$ arriving — so deleting $m$ yields a shorter working protocol, contradicting minimality. **Hence no last message can be necessary, hence no message can be, hence there is no protocol.**

Read the consequence carefully: it is not that delivery is unreliable, it is that **certainty of delivery** is unattainable. You can make the probability of an undelivered message as small as you like by retrying; you can never make either party *certain*. Systems live with this by making the uncertainty harmless — which is precisely the dedup move — rather than by removing it.

**Sizing the dedup table.** The server must remember request ids for a **retention window** $T$. At a request rate $\lambda$ and $b$ bytes per entry,

$$\text{table size} = \lambda \, T \, b.$$

The window must exceed the client's total retry horizon, or a late retry arrives after its record was evicted and is executed a second time.

## Picture

![A three-by-three grid. The columns are the three indistinguishable worlds from lesson 1.1: request lost, crash after applying, and reply lost. The rows are at-most-once, at-least-once, and at-least-once with deduplication. Each cell gives the number of times the operation actually runs. The top row gives zero, one, one; the middle row gives one, two, two; the bottom row gives one, one, one.](assets/01-03-fig1.svg)

Read down a column: the same physical failure produces a different number of executions depending only on what the client and server agreed to do about it. Read across the bottom row: **one execution in every world** is achievable, and the caption's caveat is the one people miss — if the server's record of executed request ids is lost in the same crash that interrupted the reply, the bottom row degrades to the middle one.

## Worked examples

**Example 1 — sizing a dedup table, and why the window is the hard parameter.**

A payments API takes $\lambda = 10{,}000$ requests per second. Each dedup entry is a 16-byte request id plus the response status; call it $b = 24$ bytes with overhead.

**A five-minute window**, covering a client that retries with backoff for a few minutes:

$$10{,}000 \times 300 \times 24 = 7.2 \times 10^7 \text{ bytes} = \mathbf{72 \text{ MB}}.$$

Comfortably in memory, and cheap enough to keep durable.

**A twenty-four-hour window**, covering a client that queues failed requests and drains the queue the next morning:

$$10{,}000 \times 86{,}400 \times 24 = 2.07 \times 10^{10} \text{ bytes} = \mathbf{20.7 \text{ GB}}.$$

Still feasible, but now it is a database rather than a hash map, and it must be replicated, or a server failover loses the dedup state and the guarantee with it.

**The lesson is that the expensive parameter is $T$, and $T$ is set by the client's behaviour, not the server's.** A server cannot promise exactly-once semantics without knowing how long its callers might retry — which is why every serious idempotency API *publishes* the window ("keys are retained for 24 hours") and treats a request outside it as a new request.

**Example 2 — making a non-idempotent operation safe.**

`POST /transfer {from: A, to: B, amount: 100}` is not idempotent: running it twice moves 200.

**Fix 1 — client-supplied idempotency key.** The client generates a key once, before the first attempt, and sends it with every retry:

```
POST /transfer
Idempotency-Key: 7f3a-91e2
{from: A, to: B, amount: 100}
```

The server, inside the same transaction that moves the money, inserts the key into a table with a uniqueness constraint. A duplicate insert fails, the transaction aborts, and the server returns the stored response from the first attempt.

**The two details that are always the bug.** First, the key must be generated **before** the first attempt and reused, not regenerated per attempt — a fresh key per retry is not an idempotency key, it is a fresh transfer. Second, the key insert and the money movement must be **atomic**; if the server records the key and then crashes before moving the money, the retry is refused and the transfer is silently lost.

**Fix 2 — make the state transition conditional.** `PUT /transfer/7f3a-91e2 {from: A, to: B, amount: 100}` names the transfer resource itself. Creating a resource that already exists is a no-op that returns the existing one, so the operation is idempotent by construction rather than by bookkeeping.

**This is why HTTP's method semantics are what they are.** `GET`, `PUT` and `DELETE` are specified as idempotent and `POST` is not — and the practical advice "use `PUT` with a client-chosen id for creates" is precisely the transformation above. The interesting case is `DELETE`: deleting twice leaves the same state, so it is idempotent even though the second call returns a different status code. **Idempotency is about the state, not about the response.**

## Watch out

- **You might think exactly-once delivery is a feature a message system can offer.** It cannot; Two Generals forbids it. Every product that advertises exactly-once is doing at-least-once delivery plus deduplication somewhere, and the honest question to ask is *where* the dedup state lives and what happens when that component fails.
- **You might think a read-only call is always safe to retry.** It is safe for the *server*, but the two replies may differ, and a client that retries a read and merges both answers can see a state that never existed. Idempotency makes retrying harmless to the callee; it says nothing about what the caller does with two answers.
- **You might think the dedup table can be kept in memory.** Only if you are willing to lose the guarantee on a crash — which is the exact moment the client is most likely to retry. The dedup record must be as durable as the effect it is protecting, and committed in the same atomic step ([`databases` 4.1](../../databases/lessons/04-01-transactions-and-the-acid-properties.md)).

## One-liner

> The network gives you at-most-once or at-least-once and nothing else; exactly-once is something the receiver manufactures by remembering what it has already done, which is why the real design question is never "is delivery reliable" but "how long must the server remember, and where does that memory live when it crashes."

## Problems

**P1 (🟢)** A service handles 4,000 requests per second. Each dedup entry costs 20 bytes.

(a) Give the table size for a 10-minute retention window, in megabytes.
(b) Clients are configured to retry with exponential backoff for up to 90 minutes. State whether the 10-minute window is sufficient, and give the consequence if it is not.
(c) Give the table size for a window that covers the client's retry horizon with a 2x safety margin.
(d) Classify the delivery semantics the service provides if the dedup table is held in memory only and the server restarts, and name the failure model from [1.2](01-02-failure-models-and-the-network.md) that makes this matter.

**P2 (🟡)** For each operation, state whether it is idempotent as written, and if not, give the smallest change that makes retrying safe.

(a) `SET counter = 7`
(b) `INCREMENT counter BY 1`
(c) `DELETE user WHERE id = 42`
(d) `APPEND "line" TO log`
(e) `CHARGE card FOR 50 DOLLARS`

**P3 (🔴, optional)** A queue consumer reads a message, processes it, and acknowledges it. The broker redelivers any message not acknowledged within 30 seconds.

(a) Give an ordered step list in which one message is processed twice, with no component behaving incorrectly.
(b) The team moves the acknowledgement to *before* processing instead of after. Give an ordered step list in which a message is now processed zero times, and name the delivery semantics each ordering provides.
(c) State whether any ordering of "acknowledge" and "process" gives exactly-once processing, and justify the answer in one sentence using Two Generals.
(d) Give the design that does achieve exactly-once *effects* here, and state the one property the processing step must have for it to work.

<details>
<summary>Solutions</summary>

**P1**

(a) $4000 \times 600 \times 20 = 4.8 \times 10^7$ bytes $= \mathbf{48 \text{ MB}}$.

(b) **Not sufficient.** A retry arriving at, say, 40 minutes finds its id already evicted, so the server treats it as a new request and **executes it a second time**. The service silently degrades from exactly-once to at-least-once, and it does so only for the slowest retries — which is to say, only in the incidents where it matters.

(c) A 180-minute window: $4000 \times 10{,}800 \times 20 = 8.64 \times 10^8$ bytes $= \mathbf{864 \text{ MB}}$.

Worth noting what this buys and costs: 864 MB of durable, replicated state exists solely so that a client retrying three hours late is not charged twice. That is usually the right trade, and it should be a decision rather than an accident.

(d) With an in-memory table, a restart loses every id, so every retry that arrives after the restart re-executes. The service provides **at-least-once**, not exactly-once.

The relevant failure model is **crash-recovery** ([1.2](01-02-failure-models-and-the-network.md)): the node comes back, and it comes back having forgotten something its correctness argument depended on. The rule from 1.2 applies unchanged — anything the safety argument says the server "has already done" must be durable before it acts on it.

**P2**

(a) **Idempotent.** Setting an absolute value twice leaves the same state: $f(f(s)) = f(s)$. No change needed.

(b) **Not idempotent** — two executions increment by 2. Smallest change: attach a **request id and dedup**, so the second copy is discarded. (Alternatively, express the update as an absolute write `SET counter = 8` computed by the client — but that is a different operation, and it is unsafe under concurrency for the reasons [2.4](02-04-crdts-and-strong-eventual-consistency.md) takes up.)

(c) **Idempotent.** After the first delete the row is gone; the second delete matches nothing and changes nothing. The response differs (perhaps 200 then 404), but the *state* does not, and idempotency is a property of the state.

(d) **Not idempotent** — the log grows by one line per execution. Smallest change: give each line a **client-chosen sequence number or id** and make the append conditional on that id not already being present. This is the same move as (b), and it is how a replicated log ([3.6](03-06-state-machine-replication.md)) tolerates a leader retrying an entry it already sent.

(e) **Not idempotent**, and the most expensive one to get wrong. Smallest change: a **client-generated idempotency key**, recorded atomically with the charge — precisely the payments-API pattern of Example 2. Note that a fresh key per attempt does not work; the key must be generated once, before the first attempt, and reused on every retry.

**P3**

*Accept criterion for (a) and (b): any ordered step list in which the broker's redelivery timer fires while the consumer is still healthy, or in which the consumer dies between the acknowledgement and the processing. Exact timings are free; the ordering of acknowledge and process is what is being tested.*

(a) Acknowledge-after-processing, duplicate execution:

1. Broker delivers message $m$ at $t = 0$.
2. Consumer begins processing. The work is slow — a downstream call stalls — and takes 35 seconds.
3. At $t = 30$ the broker's timer expires. It has seen no acknowledgement, so it **redelivers $m$** to a second consumer.
4. The second consumer processes $m$ fully and acknowledges at $t = 33$.
5. The first consumer finishes at $t = 35$ and acknowledges.

$m$ was processed **twice**, and neither the broker nor either consumer did anything wrong. The broker cannot distinguish "still working" from "dead" — [1.1](01-01-why-distributed-systems-are-hard.md) again.

(b) Acknowledge-before-processing, zero executions:

1. Broker delivers $m$.
2. Consumer acknowledges immediately. The broker deletes $m$; it now exists nowhere else.
3. Consumer crashes before processing begins.
4. Nothing redelivers $m$, because from the broker's point of view it was handled.

$m$ is processed **zero times** and is gone.

The semantics: **acknowledge-after-processing gives at-least-once** (redelivery is possible, loss is not); **acknowledge-before-processing gives at-most-once** (loss is possible, duplication is not).

(c) **No ordering gives exactly-once processing.**

By Two Generals: the acknowledgement is the last message of a protocol by which the broker and the consumer would have to reach common knowledge that $m$ was processed. That last message can be lost, so neither party can ever be certain, and the choice of which side of the processing step to put the acknowledgement on merely selects *which* uncertainty you accept — duplication or loss.

(d) **At-least-once delivery plus idempotent processing.**

Keep acknowledge-after-processing, so nothing is ever lost, and make the processing step deduplicate on the message's own id: record the id in the same atomic write as the effect, and discard any message whose id is already recorded.

**The property the processing step must have is that its effect and its record of having run are committed atomically** — one durable write, not two. If the effect lands and the id does not, a redelivery repeats the effect; if the id lands and the effect does not, a redelivery is refused and the work is lost. This is the same requirement as Example 2's "the key insert and the money movement must be atomic", and it is why exactly-once processing is easy when the effect is a database row and genuinely hard when the effect is an email.

</details>

## Flashback

**From Lesson 1.1 (why it's hard):** A read request is served by fanning out to all 12 shards of a partitioned index and merging the results, so **every shard must respond**. Each shard is independently available 99.8 percent of the time.

(a) Give the availability of the fan-out read.
(b) The team adds a second replica of each shard, and a shard counts as up if **either** replica is up. Give the new availability of the fan-out read.
(c) State in one clause which of the two structures — the 12-way fan-out and the 2-way replication — is series and which is parallel.

<details>
<summary>Solution</summary>

(a) All 12 must respond, so the availabilities multiply:

$$0.998^{12} = 0.97625\ldots \approx \mathbf{97.6\%}$$

Twelve components at "three nines minus a bit" produce a read path that is down about **210 hours a year** — $(1 - 0.97625) \times 8760 = 208$ hours. The fan-out, not any component, is the problem.

(b) A shard is now unavailable only if both its replicas are down: $(0.002)^2 = 4 \times 10^{-6}$, so each shard is up with probability $0.999996$. Twelve of those in series:

$$(0.999996)^{12} = 0.999952 \approx \mathbf{99.995\%}$$

Downtime falls from 208 hours a year to about **0.42 hours**, a factor of roughly 500, from doubling the hardware.

(c) The **12-way fan-out is series** — every shard is required, so unavailabilities add up and availabilities multiply downward. The **2-way replication is parallel** — either replica suffices, so the unavailabilities multiply toward zero.

The structural point is that these compose: replication acts *inside* each series element, shrinking each term before the product is taken. That is why sharding a dataset makes availability worse and replicating each shard makes it better, and why systems do both.

</details>

## Connections

- **Backward:** the three worlds in the figure are exactly [1.1](01-01-why-distributed-systems-are-hard.md)'s indistinguishable executions, and the durability requirement on the dedup table is [1.2](01-02-failure-models-and-the-network.md)'s crash-recovery discipline applied to one specific piece of state.
- **Forward:** [1.7](01-07-ordered-broadcast-fifo-causal-total.md) builds reliable and ordered broadcast on top of exactly this retry-and-deduplicate machinery, and [4.1](04-01-distributed-transactions-and-2pc.md)'s two-phase commit is a request-reply protocol whose participants must survive precisely the reply-lost case.
- **Sideways:** [`computer-networks` 2.2](../../computer-networks/lessons/02-02-building-reliable-data-transfer.md) solves the *same* duplicate problem one layer down, with sequence numbers over a single link, and the reason it does not solve this one is scope: TCP guarantees bytes arrive once at the far socket, and says nothing about whether the application processed them before crashing. **Reliability at one layer is not reliability at the one above it** — that gap is why end-to-end request ids exist.

# Networking · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is about how a message crosses a network nobody controls. The card holds the arithmetic you would otherwise hunt for mid-problem: the delay and utilisation formulas, the congestion-window rules, the address and fragmentation math, the CRC divisibility criteria, and the latency table that makes every trade-off in the course decidable in one line.

## Scope and ownership

| Topic | Owned by | Note |
|---|---|---|
| Dijkstra's algorithm; Bellman-Ford | [`algorithms` 3.3](../algorithms/lessons/03-03-dijkstras-shortest-paths.md), [3.4](../algorithms/lessons/03-04-bellman-ford-and-floyd-warshall.md) | assumed here; [3.3](lessons/03-03-routing-algorithms-link-state-and-distance-vector.md) owns only the **distributed** setting and its pathologies |
| Channel partitioning: FDMA, TDMA, CDMA, OFDM | [`communications` 4.5](../communications/lessons/04-05-multiplexing-multiple-access.md) | this course owns **random access** only |
| Error **correction**: Hamming codes, syndromes, block codes | [`information-theory` 3.5](../information-theory/lessons/03-05-codes-in-practice.md), [`communications` 4.3](../communications/lessons/04-03-block-codes.md) | this course owns **detection** only: parity, checksum, CRC |
| Finite fields, primitivity, order of an element | [`abstract-algebra` 4.3](../abstract-algebra/lessons/04-03-finite-fields.md) | used to state the CRC guarantees; not re-derived |
| Little's law, M/M/1, utilisation blow-up | [`operations-research` 4.1](../operations-research/lessons/04-01-poisson-arrivals-littles-law.md), [4.2](../operations-research/lessons/04-02-the-mm1-queue.md) | cited for queueing delay |
| Modulation, coding, capacity, the physical layer | [`communications`](../communications/syllabus.md) | out of scope: this course stops at bits-on-the-link |
| AES, RSA, elliptic curves, key exchange internals | [`cryptography`](../cryptography/syllabus.md), [`number-theory` 5.4](../number-theory/lessons/05-04-the-rsa-cryptosystem.md) | [4.4](lessons/04-04-network-security-tls-firewalls-attacks.md) treats them as black boxes |
| Layering, HTTP, DNS, transport, IP, routing, link layer, wireless, network security | **this course** | |
| Consensus, replication, CAP, distributed time | [`distributed-systems`](../distributed-systems/syllabus.md) | out of scope; this course supplies its substrate |
| Transactions, serializability, recovery | [`databases`](../databases/syllabus.md) | out of scope |

**Convention warning.** [3.3](lessons/03-03-routing-algorithms-link-state-and-distance-vector.md) does not re-derive Dijkstra or Bellman-Ford. What it owns is what changes when the algorithms run with no global view, no synchronisation and a graph that changes underneath them: count to infinity, poisoned reverse, and why a path vector is needed. Likewise [4.2](lessons/04-02-multiple-access-ethernet-and-switching.md) owns ALOHA, CSMA, CSMA/CD and switching, and cedes every partitioning scheme to `communications`.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $L$, $R$ | packet length in bits; link rate in bits per second | [1.1](lessons/01-01-packet-switching-and-layers.md) |
| $d$, $s$ | physical distance; propagation speed in the medium | [1.1](lessons/01-01-packet-switching-and-layers.md) |
| $\rho$ | traffic intensity, $La/R$, with $a$ the arrival rate | [1.1](lessons/01-01-packet-switching-and-layers.md) |
| RTT | round-trip time | [1.1](lessons/01-01-packet-switching-and-layers.md) |
| $T$ (Module 1) | a DNS record's time to live | [1.3](lessons/01-03-dns-the-internets-directory.md) |
| $F$, $u_s$, $u_i$, $d_{\min}$ | file size; server uplink; peer uplinks; slowest client downlink | [1.4](lessons/01-04-email-and-peer-to-peer.md) |
| $U$ | link utilisation | [2.2](lessons/02-02-building-reliable-data-transfer.md) |
| $N$, $M$ | window size in packets; size of the sequence-number space | [2.2](lessons/02-02-building-reliable-data-transfer.md) |
| Est, Dev | smoothed round-trip estimate and its smoothed deviation | [2.3](lessons/02-03-tcp-segments-connections-flow-control.md) |
| $\alpha$, $\beta$ | the smoothing constants $1/8$ and $1/4$ | [2.3](lessons/02-03-tcp-segments-connections-flow-control.md) |
| `cwnd`, `ssthresh` | congestion window; slow-start threshold | [2.4](lessons/02-04-tcp-congestion-control.md) |
| MSS | maximum segment size | [2.4](lessons/02-04-tcp-congestion-control.md) |
| $a$, $b$ (Module 2) | the additive increase and multiplicative decrease constants | [2.4](lessons/02-04-tcp-congestion-control.md) |
| MTU | maximum transmission unit, the largest frame a link carries | [3.1](lessons/03-01-forwarding-routing-and-the-ip-datagram.md) |
| $p$ (Module 3) | prefix length in bits, as in a `/24` | [3.2](lessons/03-02-ip-addressing-subnets-cidr-and-nat.md) |
| $D_x(y)$ | node $x$'s estimated least cost to $y$ | [3.3](lessons/03-03-routing-algorithms-link-state-and-distance-vector.md) |
| $c(x,v)$ | the cost of the direct link from $x$ to $v$ | [3.3](lessons/03-03-routing-algorithms-link-state-and-distance-vector.md) |
| $G(x)$, $D(x)$, $E(x)$, $r$ | CRC generator, data, error pattern, generator degree | [4.1](lessons/04-01-framing-and-error-detection.md) |
| $t_{\text{prop}}$, $t_{\text{trans}}$ | propagation delay; time to transmit one frame | [4.2](lessons/04-02-multiple-access-ethernet-and-switching.md) |

$p$ is overloaded — loss probability in Module 2, prefix length in Module 3, transmission probability in [4.2](lessons/04-02-multiple-access-ethernet-and-switching.md). Context separates them and all three are given above.

## Definitions

### Packet switching

Break every conversation into independent chunks, each carrying a destination, and share every link on demand with no reservation.

The alternative, **circuit switching**, reserves capacity for the duration and wastes it when idle. Packet switching's cost is queueing, variable delay and loss; its benefit is statistical multiplexing, worth roughly a factor of the duty cycle.

*Introduced:* [1.1](lessons/01-01-packet-switching-and-layers.md)

### The five layers

Application, transport, network, link, physical — each offering a service to the one above and using the one below.

*Introduced:* [1.1](lessons/01-01-packet-switching-and-layers.md)

### Encapsulation

Each layer wraps what it receives from above in its own header. A message travels inside a segment inside a datagram inside a frame, and each header is stripped by its counterpart at the far end.

*Introduced:* [1.1](lessons/01-01-packet-switching-and-layers.md)

### The end-to-end principle

Put function at the edges and keep the middle simple. IP promises nothing so that endpoints may promise whatever they choose.

This is why the Internet absorbed the web, video and everything since without changing the middle, and why every middlebox that inspects more than the network header makes the next change harder.

*Introduced:* [1.1](lessons/01-01-packet-switching-and-layers.md), revisited in [2.1](lessons/02-01-transport-services-multiplexing-and-udp.md) and [3.2](lessons/03-02-ip-addressing-subnets-cidr-and-nat.md)

### Bottleneck link

The minimum rate along a path, which sets the achievable throughput regardless of how fast every other link is.

*Introduced:* [1.1](lessons/01-01-packet-switching-and-layers.md)

### Persistent connection and pipelining

A persistent connection reuses one TCP connection for many objects, paying the handshake once. Pipelining sends the requests without waiting for each response.

*Introduced:* [1.2](lessons/01-02-the-web-and-http.md)

### Head-of-line blocking

The item at the front of a queue holds up everything behind it, whether or not those items are ready.

It appears twice in the stack: in HTTP/1.1 pipelining, where responses must return in request order, and inside TCP, where in-order byte delivery stalls on one lost segment. HTTP/2 multiplexing fixes the first; only a new transport fixes the second, which is why HTTP/3 abandoned TCP.

*Introduced:* [1.2](lessons/01-02-the-web-and-http.md)

### Conditional GET

Revalidate a cached object with `If-Modified-Since`; a `304 Not Modified` costs one round trip and no body.

*Introduced:* [1.2](lessons/01-02-the-web-and-http.md)

### Recursive versus iterative resolution

Recursive: ask one server for the final answer and wait. Iterative: each server replies with a **referral** to the next one down, and the asker walks the hierarchy.

Your host queries its resolver recursively, once; the resolver walks the hierarchy iteratively. The split exists because making the root servers do recursive work for everyone is impossible.

*Introduced:* [1.3](lessons/01-03-dns-the-internets-directory.md)

### DNS time to live

The interval for which a DNS answer may be cached. The central operational trade: long gives a high hit rate and slow propagation of changes; short gives fast failover and makes every client depend on the DNS infrastructure being reachable.

*Introduced:* [1.3](lessons/01-03-dns-the-internets-directory.md)

### DNS as indirection

Because the answer is computed per query rather than stored, the authoritative server can answer differently depending on who asked — which is how content delivery networks, load balancing and failover are implemented.

*Introduced:* [1.3](lessons/01-03-dns-the-internets-directory.md)

### Push versus pull

Push when the sender knows the recipient and the recipient is continuously available; pull when the receiver is intermittent or unknown in advance.

SMTP pushes between always-on mail servers; IMAP and HTTP pull, because laptops and browsers are neither.

*Introduced:* [1.4](lessons/01-04-email-and-peer-to-peer.md)

### Peer-to-peer scaling

Each new participant brings upload capacity as well as demand, so the total distribution time approaches a ceiling rather than growing linearly.

It holds only for **bulk distribution of identical content** where peers upload while they download and stay afterwards. Personalised content gets none of it.

*Introduced:* [1.4](lessons/01-04-email-and-peer-to-peer.md)

### Multiplexing and demultiplexing

Gathering data from many sockets and adding headers; reading those headers and delivering to the right socket. The port number is the key.

**UDP demultiplexes on two fields** — destination address and port — so every datagram to one port lands in one socket. **TCP demultiplexes on four**, so each source address and port pair gets its own connection socket.

*Introduced:* [2.1](lessons/02-01-transport-services-multiplexing-and-udp.md)

### The four-tuple

Source address, source port, destination address, destination port. It *is* the connection: an entry in a table keyed by four numbers.

*Introduced:* [2.1](lessons/02-01-transport-services-multiplexing-and-udp.md)

### The Internet checksum

Sum the data as 16-bit words with end-around carry and transmit the complement; the receiver sums everything and expects all ones.

Deliberately weak and cheap. **Any set of errors that cancels in the sum is invisible**, the simplest instance being opposite flips at the same bit position in two words.

*Introduced:* [2.1](lessons/02-01-transport-services-multiplexing-and-udp.md)

### The four mechanisms of reliable transfer

**Checksum** for corruption, **acknowledgement** to report arrival, **sequence number** to recognise a duplicate, **timer** to detect total loss. Each is forced by a specific failure and every reliable protocol has all four.

*Introduced:* [2.2](lessons/02-02-building-reliable-data-transfer.md)

### Go-Back-N versus Selective Repeat

Go-Back-N accepts only in-order packets, acknowledges cumulatively, and on a timeout retransmits the whole window. Selective Repeat buffers out of order, acknowledges individually, and retransmits only what was lost.

Go-Back-N's waste per loss is proportional to the window, which is exactly what must be large when the bandwidth-delay product is large.

*Introduced:* [2.2](lessons/02-02-building-reliable-data-transfer.md)

### Bandwidth-delay product

$\text{RTT}\times R$ — how many bits fit in the pipe, and therefore how much data must be unacknowledged and in flight to keep a link busy.

*Introduced:* [2.2](lessons/02-02-building-reliable-data-transfer.md)

### Cumulative acknowledgement

An acknowledgement number names **the next byte expected**, so it reports that everything before it arrived and says nothing about bytes after a gap.

An out-of-order segment therefore produces a **duplicate** acknowledgement of the last in-order byte, which is TCP's only signal that something is missing.

*Introduced:* [2.3](lessons/02-03-tcp-segments-connections-flow-control.md)

### Flow control versus congestion control

Flow control protects the **receiver's buffer** and is advertised explicitly in the window field. Congestion control protects the **network** and is inferred, never told. A sender obeys both and is limited by the smaller.

*Introduced:* [2.3](lessons/02-03-tcp-segments-connections-flow-control.md)

### The three-way handshake

`SYN` with the client's initial sequence number, `SYN ACK` with the server's and an acknowledgement, `ACK` of the server's.

Three because **both directions must be opened** and each side needs proof its own number arrived. Two would let a delayed duplicate `SYN` open a connection the client is not part of.

*Introduced:* [2.3](lessons/02-03-tcp-segments-connections-flow-control.md)

### SYN flood and SYN cookies

Because the server allocates state on the `SYN`, an attacker can exhaust its backlog with spoofed sources and never complete the handshake.

**SYN cookies** allocate no state: the server derives its initial sequence number cryptographically from the four-tuple and a secret, and validates the returned acknowledgement instead of remembering anything.

*Introduced:* [2.3](lessons/02-03-tcp-segments-connections-flow-control.md)

### Slow start and congestion avoidance

Slow start doubles `cwnd` every round trip until it reaches `ssthresh`; congestion avoidance then adds one MSS per round trip.

*Introduced:* [2.4](lessons/02-04-tcp-congestion-control.md)

### The two loss signals

**Three duplicate acknowledgements** mean later segments are arriving, so the path works and one packet was dropped — halve and continue. **A timeout** means nothing is getting through — drop to 1 and restart slow start.

The response is proportionate to the strength of the evidence, which is the design.

*Introduced:* [2.4](lessons/02-04-tcp-congestion-control.md)

### AIMD

Additive increase, multiplicative decrease. Increase preserves the difference between two flows' rates and decrease shrinks it by the factor $b$, so the difference decays to zero and the allocation converges to an equal share.

It is the **only** one of the four increase-decrease combinations that converges, which is why it is the one in use.

*Introduced:* [2.4](lessons/02-04-tcp-congestion-control.md)

### Forwarding versus routing

**Forwarding** is the per-packet action at one router — look up the destination, send it out an interface — in nanoseconds, in hardware. **Routing** is computing what those tables should contain, in seconds, in software. The data plane and the control plane.

*Introduced:* [3.1](lessons/03-01-forwarding-routing-and-the-ip-datagram.md)

### Best effort

IP promises nothing: a datagram may be lost, delayed, reordered or duplicated, with no acknowledgement and no rate guarantee.

*Introduced:* [3.1](lessons/03-01-forwarding-routing-and-the-ip-datagram.md)

### IP time to live

Decremented at every hop and dropped at zero. It exists because forwarding tables are **not guaranteed to be consistent with each other at any instant**, so transient loops occur and must be bounded.

*Introduced:* [3.1](lessons/03-01-forwarding-routing-and-the-ip-datagram.md)

### Fragmentation

Splitting a datagram too large for a link's MTU, with reassembly **only at the destination**. Loss is amplified by the fragment count, since the datagram survives only if every piece does.

IPv6 removed router fragmentation for that reason, plus the cost to the router and the fact that only the first fragment carries transport ports.

*Introduced:* [3.1](lessons/03-01-forwarding-routing-and-the-ip-datagram.md)

### CIDR and longest-prefix matching

Addresses split into a network part and a host part at any prefix length, and a destination matching several table entries is forwarded by the **most specific** one.

Longest-prefix matching is what makes **aggregation** possible: a provider advertises one short prefix, its customers sit on longer ones inside it, and adding a customer changes nothing elsewhere.

*Introduced:* [3.2](lessons/03-02-ip-addressing-subnets-cidr-and-nat.md)

### Network address translation

One public address serving many private hosts, with the router rewriting the source address and **port** on the way out and reversing it on the way back.

A host behind it has no address anyone outside can reach: it can initiate connections and cannot receive them. It violates layer independence twice — a network-layer device rewriting transport ports, and application-level gateways parsing payloads to fix the protocols that breaks.

*Introduced:* [3.2](lessons/03-02-ip-addressing-subnets-cidr-and-nat.md)

### Link state versus distance vector

**Link state** floods the topology so every router holds the same map and runs Dijkstra alone. **Distance vector** exchanges only distance vectors with neighbours and runs Bellman-Ford, distributed and asynchronously.

*Introduced:* [3.3](lessons/03-03-routing-algorithms-link-state-and-distance-vector.md)

### Count to infinity

A distance vector reports a **number and not a path**, so a node can adopt a route that comes straight back through itself, and two nodes' estimates then creep upward together until they exceed the true cost.

**Poisoned reverse** — advertising infinity to the neighbour you route through — eliminates two-node cycles and nothing longer.

*Introduced:* [3.3](lessons/03-03-routing-algorithms-link-state-and-distance-vector.md)

### Autonomous system

A set of routers under one administration, with its own number. Routing is two-tiered: an interior protocol inside, BGP between.

*Introduced:* [3.4](lessons/03-04-routing-in-the-internet-ospf-and-bgp.md)

### Path vector

A BGP advertisement carries the entire sequence of autonomous systems traversed. Loop prevention becomes a membership test, and policy becomes expressible because you can decide based on who a route came through.

*Introduced:* [3.4](lessons/03-04-routing-in-the-internet-ospf-and-bgp.md)

### The BGP export rule

**Advertise a route to a peer or a provider only if you learned it from a customer**, or it is your own. Anything else is free transit.

This is why a shortest path can exist physically and never be advertised, and it is the reason inter-domain routing is not a shortest-path problem.

*Introduced:* [3.4](lessons/03-04-routing-in-the-internet-ospf-and-bgp.md)

### Hot-potato routing

Among equally good routes, choose the egress with the lowest **interior** cost — get the traffic out of your own network soonest. Both ends doing it makes asymmetric paths the norm.

*Introduced:* [3.4](lessons/03-04-routing-in-the-internet-ospf-and-bgp.md)

### Cyclic redundancy check

Treat the data as a polynomial over $\mathrm{GF}(2)$, divide by a generator, and append the remainder so the transmitted word is an exact multiple. The receiver divides and accepts on a zero remainder.

*Introduced:* [4.1](lessons/04-01-framing-and-error-detection.md)

### The CRC divisibility criterion

An error pattern $E(x)$ escapes detection **exactly when $G(x) \mid E(x)$**. Every guarantee about which errors are caught is a divisibility statement, and nothing else is needed to derive them.

*Introduced:* [4.1](lessons/04-01-framing-and-error-detection.md)

### Random access

Transmit when you like and resolve collisions afterwards. Efficient at low load, degrades under contention, and requires no coordination at all — which is why it won over partitioning and token passing.

*Introduced:* [4.2](lessons/04-02-multiple-access-ethernet-and-switching.md)

### Binary exponential backoff

After each successive collision, draw the retry delay from a range that **doubles**. It estimates contention without measuring it: each collision is evidence that more stations are competing.

*Introduced:* [4.2](lessons/04-02-multiple-access-ethernet-and-switching.md)

### Self-learning switch

On every frame, record its **source** address as reachable on the arriving port; then forward if the destination is known on another port, **filter** if it is known on the same port, and **flood** otherwise.

No configuration and no protocol. The learning rule believes every source address unconditionally, which is why MAC spoofing and table overflow have no defence inside the protocol.

*Introduced:* [4.2](lessons/04-02-multiple-access-ethernet-and-switching.md)

### The hidden terminal problem

Two stations both reach the access point and cannot hear each other, so both sense idle — correctly — and collide where it matters.

Carrier sense fails not because information is late but because **there is no single channel state**: it is a different quantity at every point in space.

*Introduced:* [4.3](lessons/04-03-wireless-and-mobility.md)

### CSMA/CA

Collision **avoidance**, since a radio cannot hear while transmitting: unconditional random backoff even on an idle channel, a mandatory acknowledgement for every frame, and a backoff counter that freezes while the channel is busy.

*Introduced:* [4.3](lessons/04-03-wireless-and-mobility.md)

### RTS and CTS

A short request-to-send answered by a clear-to-send from the access point, which **every associated station hears**. The reservation reaches stations the sender could never inform, which is exactly the hidden-terminal case.

*Introduced:* [4.3](lessons/04-03-wireless-and-mobility.md)

### The four security properties

**Confidentiality** — nobody else can read it. **Integrity** — nobody can alter it undetected. **Authentication** — you know who you are talking to. **Availability** — the service responds at all.

They are independent, and the standard error is assuming one implies another.

*Introduced:* [4.4](lessons/04-04-network-security-tls-firewalls-attacks.md)

### Error detection versus integrity

A CRC or checksum is a **public function of the data**, so an attacker who alters the message recomputes it instantly. It detects a noisy channel and provides nothing against an adversarial one.

A message authentication code is a function of the data **and a secret key**, which is the entire difference.

*Introduced:* [4.4](lessons/04-04-network-security-tls-firewalls-attacks.md)

### Reflection and amplification

Send a small request with a forged source to a server whose response is large; the response goes to the victim and the attacker pays only for the request.

Undetectable at the reflectors, unfilterable at the victim, and stoppable only by ingress filtering at the attacker's own provider.

*Introduced:* [4.4](lessons/04-04-network-security-tls-firewalls-attacks.md)

## Formulas and rules

### Delay and throughput formulas

$$d_{\text{nodal}} = d_{\text{proc}} + d_{\text{queue}} + d_{\text{trans}} + d_{\text{prop}}$$
$$d_{\text{trans}} = \frac{L}{R}, \qquad d_{\text{prop}} = \frac{d}{s}, \qquad \rho = \frac{La}{R}$$

Transmission depends on size and rate, **never** on distance. Propagation depends on distance, **never** on size or rate.

Store and forward across $N$ links with $P$ packets:
$$t = (N + P - 1)\frac{L}{R}$$

Throughput is the **minimum** link rate on the path.

*From* [1.1](lessons/01-01-packet-switching-and-layers.md)

### Page load in round trips

$$T_{\text{non-persistent}} = \underbrace{1}_{\text{DNS}} + \underbrace{2}_{\text{base}} + 2n$$
$$T_{\text{persistent, pipelined}} = 1 + 1 + 1 + 1 = 4 \text{ regardless of } n$$
$$T_{k \text{ parallel, non-persistent}} = 1 + 2 + 2\left\lceil\frac{n}{k}\right\rceil$$

*From* [1.2](lessons/01-02-the-web-and-http.md)

### DNS cache hit rate

$$\text{misses per unit time} = \frac{1}{T}, \qquad \text{hit rate} = 1 - \frac{1}{qT}$$

The hit rate depends on the **product** $qT$, so it flattens once $qT$ is large. The shortest TTL costing under a fraction $f$ of queries is $T \ge 1/(qf)$.

*From* [1.3](lessons/01-03-dns-the-internets-directory.md)

### Distribution time

$$D_{\text{cs}} = \max\left\{\frac{NF}{u_s},\ \frac{F}{d_{\min}}\right\}, \qquad D_{\text{p2p}} = \max\left\{\frac{F}{u_s},\ \frac{F}{d_{\min}},\ \frac{NF}{u_s + \sum_i u_i}\right\}$$

Client-server grows **linearly** in $N$. Peer-to-peer approaches the ceiling $F/u$ and never exceeds it. The crossover, where the server uplink starts to bind, is $N > u_s/d_{\min}$.

*From* [1.4](lessons/01-04-email-and-peer-to-peer.md)

### Utilisation and window

$$U_{\text{stop-and-wait}} = \frac{L/R}{\text{RTT} + L/R}, \qquad U_{\text{window }N} = \frac{N\,L/R}{\text{RTT} + L/R}$$
$$N^{*} = \left\lceil\frac{\text{RTT} + L/R}{L/R}\right\rceil, \qquad \text{BDP} = \text{RTT}\times R$$

Sequence-space bounds: Go-Back-N needs $N \le M-1$; Selective Repeat needs $N \le M/2$, because the sender's old window and the receiver's current window together span $2N$ consecutive numbers and must be disjoint modulo $M$.

*From* [2.2](lessons/02-02-building-reliable-data-transfer.md)

### Round-trip estimation

$$\text{Dev} \leftarrow (1-\beta)\,\text{Dev} + \beta\left|\text{Sample} - \text{Est}\right|$$
$$\text{Est} \leftarrow (1-\alpha)\,\text{Est} + \alpha\,\text{Sample}$$
$$\text{Timeout} = \text{Est} + 4\,\text{Dev}, \qquad \alpha = \tfrac18,\ \beta = \tfrac14$$

Update Dev **first**, using the old Est. The deviation reacts fast and the mean reacts slowly, so one erratic sample widens the margin immediately.

*From* [2.3](lessons/02-03-tcp-segments-connections-flow-control.md)

### Congestion window rules

| event | `ssthresh` | `cwnd` | then |
|---|---|---|---|
| ACK in slow start | unchanged | $\times 2$ per round | until `cwnd` reaches `ssthresh` |
| ACK in congestion avoidance | unchanged | $+1$ MSS per round | |
| three duplicate ACKs (Reno) | $\text{cwnd}/2$ | $\text{cwnd}/2$ | congestion avoidance |
| timeout | $\text{cwnd}/2$ | $1$ MSS | slow start |

$$\text{throughput} \approx \frac{0.75\,W\,\text{MSS}}{\text{RTT}}, \qquad \text{throughput} \approx \frac{1.22\,\text{MSS}}{\text{RTT}\sqrt{L}}$$

Two consequences: throughput falls only as $\sqrt{L}$, so a fast long path needs an unattainably small loss rate; and throughput goes as $1/\text{RTT}$, so flows with short round trips get systematically larger shares.

*From* [2.4](lessons/02-04-tcp-congestion-control.md)

### Fragmentation arithmetic

$$D = 8\left\lfloor\frac{M - h}{8}\right\rfloor \text{ data bytes per fragment}$$

Offsets are in **8-byte units**: $0, D/8, 2D/8, \ldots$, with the more-fragments flag set on all but the last. Reassembly happens only at the destination.

$$P(\text{datagram lost}) = 1 - (1-p)^k \approx kp$$

*From* [3.1](lessons/03-01-forwarding-routing-and-the-ip-datagram.md)

### Addressing

$$\text{addresses in a } /p = 2^{32-p}, \qquad \text{usable hosts} = 2^{32-p} - 2$$

To fit $H$ hosts: host bits $h = \lceil\log_2(H+2)\rceil$, prefix $= 32 - h$. Splitting a $/P$ into $/p$ gives $2^{p-P}$ subnets.

$$\text{IPv4} = 2^{32} = 4.29\times 10^9, \qquad \text{IPv6} = 2^{128} = 3.4\times 10^{38}$$

*From* [3.2](lessons/03-02-ip-addressing-subnets-cidr-and-nat.md)

### The Bellman-Ford update

$$D_x(y) = \min_{v \in N(x)}\left\{c(x,v) + D_v(y)\right\}$$

Take the minimum over **every** neighbour including the destination itself: a direct link is not necessarily the best route to the node at its far end.

*From* [3.3](lessons/03-03-routing-algorithms-link-state-and-distance-vector.md)

### The BGP decision process

1. highest **local preference** — policy, and it comes first deliberately
2. shortest AS path
3. lowest origin type
4. lowest multi-exit discriminator
5. prefer eBGP over iBGP
6. lowest interior cost to the egress — **hot potato**
7. tie-breakers

*From* [3.4](lessons/03-04-routing-in-the-internet-ospf-and-bgp.md)

### CRC guarantees

| error pattern | detected when |
|---|---|
| single bit, $E = x^i$ | $G$ has at least two terms, i.e. a nonzero constant term |
| two bits, $E = x^j(x^k+1)$ | $G \nmid x^k+1$ for every $k$ up to the frame length |
| any odd number of bits | $(x+1) \mid G$ |
| any burst shorter than $r+1$ bits | always |

A **primitive** generator of degree $r$ has $x$ of order $2^r - 1$, so no double error escapes in a frame of at most $2^r-1$ bits. A reducible one of the same degree misses double errors at the spacing of its smaller order.

*From* [4.1](lessons/04-01-framing-and-error-detection.md), with the field theory in [`abstract-algebra` 4.3](../abstract-algebra/lessons/04-03-finite-fields.md)

### Multiple access

$$\text{slotted ALOHA} = Np(1-p)^{N-1}, \quad \text{max at } p = \frac1N, \quad \to \frac1e \approx 0.37$$
$$\text{pure ALOHA} \to \frac{1}{2e} \approx 0.18 \quad(\text{the vulnerable window is twice as long})$$
$$\text{CSMA/CD efficiency} \approx \frac{1}{1 + 5\,t_{\text{prop}}/t_{\text{trans}}}, \qquad L_{\min} \ge 2\,t_{\text{prop}}\,R$$

Efficiency collapses as the rate rises, because $t_{\text{trans}}$ shrinks while $t_{\text{prop}}$ does not. Shared 1500-byte Ethernet over 500 m: 99 percent at 10 Mb/s, 91 at 100 Mb/s, 49 at 1 Gb/s, 9 at 10 Gb/s.

*From* [4.2](lessons/04-02-multiple-access-ethernet-and-switching.md)

### CSMA/CA frame time

$$T = \text{DIFS} + \overline{B} + T_{\text{preamble}} + T_{\text{data}} + \text{SIFS} + T_{\text{preamble}} + T_{\text{ack}}$$

Everything but $T_{\text{data}}$ is a fixed overhead that does not shrink with the rate, so efficiency falls as the nominal rate rises and larger frames are always more efficient. RTS/CTS is worthwhile only when $p\,T_{\text{data}}$ exceeds the handshake's cost, which for short frames is never — hence a frame-size threshold rather than a probability, since the probability is unmeasurable.

*From* [4.3](lessons/04-03-wireless-and-mobility.md)

### Amplification

$$\text{amplification} = \frac{\text{response size}}{\text{request size}}, \qquad \text{traffic at victim} = \text{amplification}\times\text{attacker capacity}$$

$$\text{request rate} = \frac{\text{attacker capacity}}{8\times\text{request bytes}}$$

*From* [4.4](lessons/04-04-network-security-tls-firewalls-attacks.md)

### Latency at a glance

| operation | time |
|---|---|
| transmit 1500 bytes at 1 Gb/s | 12 us |
| transmit 1500 bytes at 100 Mb/s | 120 us |
| cross a data centre | under 1 ms |
| cross a continent, one way | 15 to 20 ms |
| cross an ocean, round trip | 80 to 150 ms |
| TCP handshake plus one request | 2 round trips |
| a cold DNS resolution | 3 wide-area round trips |
| a page load, non-persistent, 3 objects | 9 round trips |

**Round trips are the unit that matters**, and the reason almost every optimisation in the course reduces their count rather than the bytes.

*From* [1.1](lessons/01-01-packet-switching-and-layers.md), [1.2](lessons/01-02-the-web-and-http.md), [1.3](lessons/01-03-dns-the-internets-directory.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Dijkstra's shortest-path algorithm and its correctness | [`algorithms` 3.3](../algorithms/lessons/03-03-dijkstras-shortest-paths.md) |
| Bellman-Ford and its correctness on a static graph | [`algorithms` 3.4](../algorithms/lessons/03-04-bellman-ford-and-floyd-warshall.md) |
| Depth-first and breadth-first search on a graph | [`algorithms` 3.1](../algorithms/lessons/03-01-graph-search-bfs-and-dfs.md) |
| Big-O reasoning and counting operations | [`programming-foundations` 1.4](../programming-foundations/lessons/01-04-big-o-counting-operations.md) |
| Finite fields, irreducibility, primitive elements, the order of an element | [`abstract-algebra` 4.3](../abstract-algebra/lessons/04-03-finite-fields.md) |
| Polynomial long division | [`algebra-foundations` 3.3](../algebra-foundations/lessons/03-03-polynomial-division.md) |
| Modular arithmetic and congruences | [`discrete-mathematics` 4.3](../discrete-mathematics/lessons/04-03-modular-arithmetic-and-congruences.md) |
| The binomial distribution and its tail | [`prob-stat-refresher` 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Little's law; the M/M/1 queue and why waiting diverges as utilisation approaches 1 | [`operations-research` 4.1](../operations-research/lessons/04-01-poisson-arrivals-littles-law.md), [4.2](../operations-research/lessons/04-02-the-mm1-queue.md) |
| Feedback control, error signals, stability of a loop | [`control-systems` 1.1](../control-systems/lessons/01-01-feedback-and-the-control-problem.md) |
| Repeated games and why tit-for-tat sustains cooperation | [`game-theory-refresher` 2.3](../game-theory-refresher/lessons/02-03-repeated-games-folk-theorem.md) |
| Modulation, channel capacity, error-correcting codes | [`communications` 4.2](../communications/lessons/04-02-channel-capacity-shannon-limit.md), [4.3](../communications/lessons/04-03-block-codes.md) |
| RSA and public-key cryptography | [`number-theory` 5.4](../number-theory/lessons/05-04-the-rsa-cryptosystem.md) |
| File descriptors, sockets as kernel objects, the syscall boundary | [`operating-systems` 1.2](../operating-systems/lessons/01-02-system-calls-and-the-kernel-interface.md), [4.1](../operating-systems/lessons/04-01-files-directories-and-inodes.md) |

## Pitfalls

### Delay and throughput

- A faster link does not reduce propagation delay. Rate changes how fast bits leave; distance decides when the first one arrives.
- Throughput on a path is the **minimum** link rate, not an average.
- Traffic intensity near 1 is not slightly worse than 0.5. Mean queue length is $\rho/(1-\rho)$, which diverges.
- Statistical multiplexing is a bet on **independence**. Correlated users defeat the binomial argument entirely.

### Application layer

- Persistence and pipelining are different things, and pipelining still forces responses back in order.
- A `304` costs a round trip. For a small object on a long path, fetching may be cheaper than revalidating.
- A short TTL is not safer. It makes every client depend on your DNS infrastructure being reachable every few seconds.
- A DNS cache cannot be invalidated by the origin. The TTL is a promise you cannot withdraw.
- Peer-to-peer buys nothing below the crossover, and nothing at all for personalised content.

### Transport

- A port identifies a **socket**, not a process, and one process may hold many.
- UDP does not remove the bookkeeping; it moves it into your program.
- The Internet checksum misses any error set that cancels in the sum, which is why the link layer runs a CRC underneath.
- An acknowledgement number is the **next byte expected**, one past the end.
- TCP does not preserve write boundaries. Anything needing framing must carry its own length.
- A timeout that is too short is worse than one that is too long: it injects duplicates into a congested network.
- Slow start is the fastest thing TCP does. It is slow only in where it starts.
- TCP fairness means equal shares among flows with **equal round-trip times**, and six connections get roughly six shares.

### Network layer

- Best effort is a statement about what is promised, not about what usually happens.
- Only the destination reassembles fragments; a router that fragments never sees the pieces again.
- The IP header checksum covers the header only.
- Longest prefix means the numerically longest, not the entry listed first or last.
- A `/24` gives 254 usable addresses, not 256.
- NAT is not a firewall; its inbound default-deny is a side effect of having no mapping.
- Count to infinity is not a bug in Bellman-Ford. It comes from running it distributed on a changing graph where a distance carries no evidence of its path.
- Poisoned reverse fixes two-node loops and nothing longer.
- BGP finds **permitted** paths, and AS-path length counts administrative boundaries rather than anything physical.

### Link layer, wireless and security

- A longer CRC is not automatically stronger; the polynomial decides whether you get the length's worth.
- A generator with a zero constant term wastes a degree and misses almost every double error.
- Collisions no longer occur on a switched full-duplex network; CSMA/CD is disabled there.
- Exponential backoff estimates contention rather than enforcing fairness.
- 802.11 cannot detect collisions at all; every difference from Ethernet compensates for that.
- Expect a little over half the advertised wireless rate at best, and the gap widens as rates rise.
- A CRC is not integrity. It is a public function, recomputable by anyone who alters the data.
- Encryption alone gives no integrity, and integrity alone gives no confidentiality. Authenticate and encrypt together.
- HTTPS means the connection is private and the certificate matches the name you typed. It says nothing about who runs the site.
- No cryptographic mechanism provides **availability**.

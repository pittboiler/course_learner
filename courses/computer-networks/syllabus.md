# Networking — Syllabus

> Computer Science · Tier 1 · ~16 lessons · Prereqs: [programming-foundations](../programming-foundations/syllabus.md) · Roadmap id: `computer-networks`

## Goal

Understand how a message actually crosses the Internet — from the browser call down to the wire and back up — by learning the layered design that makes an unreliable, decentralized network behave like a reliable pipe. You'll work top-down (Kurose–Ross style): start where you already live (HTTP, DNS, sockets), then descend through reliable transport and congestion control, IP addressing and routing, and finally framing and Ethernet, closing with a working picture of TLS and common attacks. Deliberately skipped: physical-layer signal engineering, modulation, and channel coding — that's [`communications`](../communications/syllabus.md); this course stops at the bits-on-the-link abstraction.

## Dangerous Checklist

When you finish, you can:

- [ ] Name the five layers, say what each adds, and trace a packet's encapsulation and de-encapsulation across a path
- [ ] Estimate end-to-end delay (transmission + propagation + queueing) and throughput for a given path
- [ ] Trace a full web-page load — DNS lookup, TCP setup, HTTP exchange — and compute its time with and without persistent connections and caching
- [ ] Explain how DNS resolves a name and why caching keeps the system fast
- [ ] Build a reliable channel over an unreliable one using sequence numbers, ACKs, and timeouts, and compare stop-and-wait to pipelined protocols
- [ ] Read a TCP segment, walk the three-way handshake and teardown, and explain flow control
- [ ] Trace TCP's congestion window through slow start, congestion avoidance, and loss recovery, and explain AIMD fairness
- [ ] Subnet an address block, apply CIDR longest-prefix matching to pick a forwarding entry, and say what NAT and DHCP do
- [ ] Run Dijkstra (link-state) and distance-vector (Bellman–Ford) on a weighted graph to build a forwarding table, and explain the count-to-infinity problem
- [ ] Explain the difference between intra- and inter-AS routing and what BGP optimizes for
- [ ] Compute a CRC checksum, decide when a frame's error is caught, and trace a self-learning switch's forwarding table
- [ ] Explain what TLS guarantees, how a firewall filters, and how spoofing, DoS/DDoS, and DNS attacks work

## Modules

### Module 1: The Internet and the application layer

Start at the top of the stack, where programs talk, and build the vocabulary — layering, encapsulation, delay — that the rest of the course descends through.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What a network is: packet switching and layers | See the Internet as layers of protocols and estimate a path's delay | packet vs circuit switching, the 5-layer model, encapsulation, end-to-end principle, transmission/propagation/queueing delay, throughput |
| 1.2 | The Web and HTTP | Read an HTTP exchange and reason about page-load performance | client–server model, HTTP request/response, persistent vs non-persistent connections, cookies, web caching, a nod to HTTPS/HTTP/2 |
| 1.3 | DNS: the Internet's directory | Explain how a name becomes an address, quickly | name hierarchy, root/TLD/authoritative servers, recursive vs iterative resolution, resource records, caching and TTL |
| 1.4 | Email and the peer-to-peer model | Contrast client–server with P2P and see why P2P scales | SMTP and mail delivery, the client–server vs P2P architectures, BitTorrent, distribution time and scalability |

**Boss problem 1:** A client loads `http://example.com/index.html`, which references three small objects on the same server; the DNS record must be fetched first, and every round trip costs one RTT (transmission time negligible). Compute total page-load time (a) with non-persistent HTTP and no parallel connections, and (b) with a single persistent connection that pipelines the object requests; then say how the answer changes if the DNS record and the base HTML are already cached, and explain in one sentence why persistent connections help.

### Module 2: The transport layer

The layer that turns IP's best-effort delivery into the reliable, well-behaved byte stream every application quietly assumes — reliability and congestion control built from scratch.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Transport services, multiplexing, and UDP | Deliver data to the right process and know when UDP is enough | process-to-process delivery, sockets and ports, multiplexing/demultiplexing, UDP, the checksum |
| 2.2 | Building reliable data transfer | Construct reliability over a lossy channel, step by step | checksums, ACKs/NAKs, sequence numbers, timeouts, stop-and-wait, pipelining, Go-Back-N vs Selective Repeat |
| 2.3 | TCP: segments, connections, and flow control | Read a TCP segment and walk a connection's life | segment structure, sequence/ACK numbers, RTT estimation and timeout, three-way handshake and teardown, flow control (receive window) |
| 2.4 | TCP congestion control | Trace the congestion window and explain why TCP is fair | congestion signals, slow start, congestion avoidance (AIMD), fast retransmit/recovery, the sawtooth, fairness, a taste of CUBIC/BBR |

**Boss problem 2:** A TCP Reno sender starts with `cwnd = 1 MSS` and `ssthresh = 8 MSS`. Trace `cwnd` round by round through slow start into congestion avoidance; at `cwnd = 12` a triple-duplicate-ACK loss occurs, and eight rounds later a timeout occurs. Draw the resulting sawtooth, label every phase transition with the rule that fired, and state each new `ssthresh`. Then explain, using AIMD, why two long-lived flows sharing a bottleneck converge toward an equal share.

### Module 3: The network layer

How a packet finds its way across the globe with no central map: the data plane that forwards each packet, and the control plane that computes where forwarding should send it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Forwarding, routing, and the IP datagram | Separate the data plane from the control plane and read an IP header | forwarding vs routing, data vs control plane, IPv4 datagram, TTL, fragmentation, a nod to IPv6 |
| 3.2 | IP addressing, subnets, CIDR, and NAT | Subnet a block and choose a forwarding entry by longest prefix | dotted-decimal addresses, subnet masks, CIDR, longest-prefix match, NAT, DHCP |
| 3.3 | Routing algorithms: link-state and distance-vector | Compute least-cost paths two different ways | graph abstraction, Dijkstra (link-state), Bellman–Ford (distance-vector), count-to-infinity, poisoned reverse |
| 3.4 | Routing in the Internet: OSPF, and a taste of BGP | Explain why the Internet routes in two tiers | autonomous systems, intra-AS (OSPF/RIP) vs inter-AS, BGP as policy-driven path-vector routing |

**Boss problem 3:** Given a weighted graph of six routers, run Dijkstra from a chosen source to produce its full forwarding table (next hop per destination); then run one distance-vector update round at a single node and show what it learns from its neighbors' vectors. Finally, given a forwarding table of CIDR prefixes, resolve which entry three sample destination addresses match by longest-prefix rule.

### Module 4: The link layer, wireless, and security

The bottom of the stack — moving frames across one physical hop, arbitrating a shared medium — and then the security layer that has to assume the whole path is hostile.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The link layer: framing and error detection | Frame bits and catch corruption on the wire | link-layer services, framing, parity, Internet checksum, cyclic redundancy check (CRC), error detection vs correction |
| 4.2 | Multiple access, Ethernet, and switching | Arbitrate a shared link and forward frames within a LAN | multiple-access protocols, ALOHA, CSMA/CD, MAC addresses, ARP, Ethernet, self-learning switches, switch vs router |
| 4.3 | A taste of wireless and mobility | See why wireless breaks the wired assumptions | wireless link characteristics, CSMA/CA and 802.11 (Wi-Fi), the hidden-terminal problem, a nod to cellular and mobility |
| 4.4 | Network security: TLS, firewalls, and attacks | Say what each defense guarantees and how common attacks work | confidentiality/integrity/authentication, symmetric vs public-key (pointer to `cryptography`), the TLS handshake, firewalls, spoofing, DoS/DDoS, DNS attacks |

**Boss problem 4:** For a given data word and generator polynomial, compute the CRC bits the sender appends; verify the receiver's division yields a zero remainder, then flip one bit and show the remainder becomes nonzero. Next, trace a self-learning Ethernet switch's forwarding table as four frames pass between hosts on its ports, noting for each frame whether the switch forwards, floods, or filters. Close by stating, in one sentence each, which security property (confidentiality, integrity, or authentication) a CRC does *not* provide and which part of the TLS handshake supplies it.

## Sources of truth

- Kurose & Ross, *Computer Networking: A Top-Down Approach* (primary — the top-down organization, notation, and rigor level this course follows)
- Tanenbaum & Wetherall, *Computer Networks* (the bottom-up counterpoint; link-layer and Ethernet detail)
- Peterson & Davie, *Computer Networks: A Systems Approach* (systems framing, congestion control)
- The defining RFCs for conventions: 791 (IP), 793 (TCP), 1034/1035 (DNS), 7230–7231 (HTTP/1.1), 8446 (TLS 1.3)

## Notes

- **The prerequisite.** This course assumes the socket programming, byte/bit manipulation, and Big-O reasoning from [`programming-foundations`](../programming-foundations/syllabus.md); routing tables and switch learning are just data structures under load.
- **The graph-algorithms bridge (headline).** Link-state routing *is* Dijkstra's shortest-path algorithm and distance-vector routing *is* distributed Bellman–Ford — the same algorithms studied in [`algorithms`](../algorithms/syllabus.md) and [`graph-theory`](../graph-theory/syllabus.md), here run on a live, changing graph with no global view.
- **The coding/algebra bridge.** The CRC of Lesson 4.1 is polynomial division over $\mathrm{GF}(2)$; the error-detecting and error-correcting codes it gestures at are the finite-field constructions of [`information-theory`](../information-theory/syllabus.md) and [`abstract-algebra`](../abstract-algebra/syllabus.md).
- **The cryptography bridge.** Lesson 4.4 treats TLS's symmetric and public-key primitives as black boxes; [`cryptography`](../cryptography/syllabus.md) opens them (AES, RSA/ECC, key exchange).
- **The control-theory bridge.** TCP congestion control is a distributed feedback loop — AIMD is a control law tuned for stability and fairness, the same lens as [`control-systems`](../control-systems/syllabus.md).
- **Feeds forward.** This course is a prerequisite for [`distributed-systems`](../distributed-systems/syllabus.md): reliable transport, the CAP-relevant realities of latency and partition, and the client–server/P2P models here are the substrate consensus and replication build on.

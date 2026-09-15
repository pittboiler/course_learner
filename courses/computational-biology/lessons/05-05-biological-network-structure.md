# Computational Biology · Lesson 5.5: Biological network structure

> ⏱ ~15 min · Module 5: Expression, structure & networks · Builds on: [graph-theory 1.1](../../graph-theory/lessons/01-01-degree-and-handshake-lemma.md) (degree, handshake lemma), [systems-biology 2.2](../../systems-biology/lessons/02-02-negative-autoregulation.md) (motif Z-scores against randomized networks), [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md) (Poisson) · Unlocks: [5.6](05-06-inferring-networks-from-data.md) (inferring networks)

## Why this matters

A cell's molecules act in webs: proteins bind proteins, transcription factors regulate genes, enzymes pass metabolites along. High-throughput assays map these webs at genome scale — yeast two-hybrid and affinity purification for protein interactions, ChIP-seq for regulation, metabolic reconstructions for chemistry. The result is a graph with thousands of nodes. What can its **shape** tell you that a list of edges can't?

Quite a lot, if you ask carefully. Degree distributions point to **hubs**, which are often essential genes and drug targets. Clustering and **modules** mark protein complexes and pathways. Over-represented small patterns (**motifs**) are circuits with jobs, as [systems-biology 2.2](../../systems-biology/lessons/02-02-negative-autoregulation.md) showed for negative autoregulation and the feed-forward loop. This lesson adds the whole-network statistics, and the null models that stop you over-reading them.

## The idea

**Degree: how connected is each node?** In a protein interaction network, degree is the number of partners. The **degree distribution** — what fraction of nodes have $k$ partners — is the first thing to look at. In a random graph where every pair is connected with the same small probability, degrees cluster tightly around the mean (Poisson). Biological networks look very different: most proteins have a few partners, and a few **hubs** have hundreds. The distribution has a heavy tail, often summarized (and over-summarized) as a **power law**.

**Where do hubs come from?** One simple story is **preferential attachment**. Networks grow by gene duplication and new interactions, and new edges tend to attach to nodes that already have many. "The rich get richer" produces a power-law tail. It's a plausible mechanism, not a proven history, and other processes produce heavy tails too.

**Clustering: are your partners partners of each other?** A node's clustering coefficient is the fraction of pairs of its neighbours that are themselves connected. Proteins in a complex all bind each other, giving clustering near 1. Random graphs have clustering about equal to the edge density, which is tiny.

**Modules: does the network break into communities?** A module has many edges inside and few to the rest of the network. **Modularity** $Q$ scores a partition by comparing within-module edges with what you'd expect if edges were placed at random, preserving each node's degree. High $Q$ means real community structure.

**Always ask: compared with what?** A statistic means something only against a **null model**. Hubs are "surprising" relative to a random graph, but the real question is usually whether they're surprising given the degrees you already observed. That's why motif counts are compared with degree-preserving randomizations ([systems-biology 2.2](../../systems-biology/lessons/02-02-negative-autoregulation.md)).

## The formal version

For an undirected graph with $N$ nodes, $m$ edges, adjacency matrix $A$ and degrees $k_i = \sum_j A_{ij}$:

**Average degree** (handshake lemma, [graph-theory 1.1](../../graph-theory/lessons/01-01-degree-and-handshake-lemma.md)): $\langle k\rangle = 2m/N$.

**Degree distribution.** $P(k)$, the fraction of nodes with degree $k$. In an Erdős–Rényi random graph with edge probability $p$, $P(k)$ is Binomial$(N-1, p)$, approximately Poisson with mean $\langle k\rangle$. A **power law** has $P(k) \propto k^{-\gamma}$, typically with $2 < \gamma < 3$ in claimed biological cases. Preferential attachment (Barabási–Albert) gives $\gamma = 3$.

**Clustering coefficient.** For node $i$ with $k_i \ge 2$ neighbours among which $e_i$ edges exist,

$$C_i = \frac{2\,e_i}{k_i(k_i - 1)}.$$

This is the [clustering coefficient](../reference.md#clustering-coefficient). *In words: the fraction of possible triangles through $i$ that actually exist.* In an Erdős–Rényi graph, $\mathbb{E}[C_i] = p$.

**Modularity** of a partition into communities $c$:

$$Q = \frac{1}{2m}\sum_{i,j}\left[A_{ij} - \frac{k_i k_j}{2m}\right]\delta(c_i, c_j) = \sum_{c}\left[\frac{L_c}{m} - \left(\frac{d_c}{2m}\right)^2\right],$$

where $L_c$ is the number of edges inside community $c$ and $d_c$ is the total degree of its nodes. This is [modularity](../reference.md#network-modularity). *In words: the fraction of edges inside communities, minus the fraction expected if edges were rewired at random with the same degrees.* $Q = 0$ for one community containing everything; values above about 0.3 usually indicate real structure.

**Largest degree.** With $N$ nodes drawn from a power law with minimum degree $k_{\min}$, the largest degree scales as $k_{\max} \approx k_{\min} N^{1/(\gamma - 1)}$. Under a Poisson distribution it grows only logarithmically slowly with $N$.

## Picture

![Left: an eight-node network with two dashed modules joined by a single coral edge from D to E. The blue module A, B, C, D has edges A-B, A-C, B-C, B-D and C-D; the coral module E, F, G, H is fully connected. A legend lists degree and clustering: A 2 and 1, B 3 and 0.67, C 3 and 0.67, D 3 and 0.33, E 4 and 0.5, F 3 and 1, G 3 and 1, H 3 and 1, with modularity 0.41 for this split. Right: a log-log plot of degree probability, where a Poisson distribution with mean 6 rises to a peak near 6 and then collapses below one in a hundred million by degree 30, while a power law with exponent 2.5 falls in a straight line and still gives a probability of about two in a hundred thousand at degree 100.](assets/05-05-fig1.svg)

On the left, clustering tells the modules apart. F, G and H sit inside a complete cluster ($C = 1$). D and E are the bridge ends, and their clustering drops because one of their neighbours lives in the other module. On the right, the difference between the two curves is the whole "scale-free" story. A random graph essentially never produces a node with 100 partners. A heavy-tailed network produces them routinely, and those are the hubs.

## Worked examples

**Example 1 (mechanical): degree, clustering and modularity.** The picture's network has $N = 8$ and $m = 12$.

*Average degree:* $2m/N = 24/8 = 3$.

*Clustering of D.* Its neighbours are B, C and E. Among them only B–C is an edge: $e_D = 1$, $k_D = 3$, so $C_D = 2(1)/(3 \cdot 2) = \mathbf{0.33}$. *Of E:* neighbours D, F, G, H, with edges F–G, F–H and G–H: $C_E = 2(3)/(4 \cdot 3) = \mathbf{0.5}$.

*Modularity of the split* {A, B, C, D} | {E, F, G, H}. The first community has $L_1 = 5$ internal edges and total degree $d_1 = 2 + 3 + 3 + 3 = 11$. The second has $L_2 = 6$ and $d_2 = 4 + 3 + 3 + 3 = 13$.

$$\begin{aligned}Q &= \left[\frac{5}{12} - \left(\frac{11}{24}\right)^2\right] + \left[\frac{6}{12} - \left(\frac{13}{24}\right)^2\right] \\ &= (0.417 - 0.210) + (0.500 - 0.293) \\ &= \mathbf{0.413}.\end{aligned}$$

Moving E into the first community — {A, B, C, D, E} | {F, G, H} — gives $L_1 = 6$, $d_1 = 15$, $L_2 = 3$, $d_2 = 9$, and $Q = (0.5 - 0.391) + (0.25 - 0.141) = 0.219$. The natural split scores almost twice as high.

**Example 2 (why you'd care): hubs a random graph can't make.** A protein network has $N = 5{,}000$ nodes and average degree 6.

*If it were an Erdős–Rényi graph*, degrees would be close to Poisson with mean 6. The expected number of nodes with degree at least $k$ is $N \times P(K \ge k)$: about 2.5 nodes at $k \ge 16$, 0.9 at $k \ge 17$, and 0.03 at $k \ge 20$. **The largest hub would have about 16 or 17 partners.** Clustering would be about $p = 6/4{,}999 = 0.0012$.

*If the degrees follow a power law* with $\gamma = 2.5$ and minimum degree 2, the largest degree is around

$$k_{\max} \approx 2 \times 5{,}000^{1/1.5} = 2 \times 292 \approx \mathbf{580}.$$

Real interaction networks have hubs with hundreds of partners and clustering coefficients around 0.1 or more, so they're clearly not random graphs. Hubs are enriched among essential genes, and removing a few hubs fragments a heavy-tailed network much faster than removing random nodes. But whether a particular degree distribution is truly a power law, rather than a log-normal or a power law with a cutoff, is often not supported by careful fits. "Heavy-tailed, with hubs" is the defensible claim.

## Watch out

- **You might call** a network scale-free because its log-log degree plot looks roughly straight — **but actually** eyeballed straight lines on log-log plots are weak evidence. Proper maximum-likelihood fits frequently prefer other heavy-tailed distributions, and many published "scale-free" biological networks don't pass.
- **You might interpret** a hub as biologically central — **but actually** interaction maps are biased by study effort. Well-studied proteins, and "sticky" proteins that give false-positive interactions in assays, get more edges. Check whether degree correlates with the number of papers before building a story on it.
- **You might compare** a clustering coefficient or motif count with an Erdős–Rényi graph — **but actually** heavy-tailed degrees alone create more triangles and motifs than a Poisson graph has. The meaningful null keeps each node's degree and rewires the rest ([systems-biology 2.2](../../systems-biology/lessons/02-02-negative-autoregulation.md)).

## One-liner

> Read a biological network through its degree distribution (hubs), clustering (tight neighbourhoods) and modularity (communities), always against a degree-preserving null — heavy tails and high clustering are real signals, "scale-free" is usually an overclaim.

## Problems

**P1 (🟢)** A network has edges 1–2, 1–3, 1–4, 1–5, 2–3, 3–4, 4–5. (a) Give each node's degree and the average degree, and check the handshake lemma. (b) Compute the clustering coefficient of nodes 1 and 3. (c) Which node is the hub, and is it in a tight neighbourhood?

**P2 (🟡)** For the picture's network, compute the modularity of the partition {A, B} | {C, D} | {E, F, G, H}. Compare it with Example 1's two-module split, and explain why splitting further lowered $Q$.

**P3 (🔴)** (a) Derive $k_{\max} \approx k_{\min} N^{1/(\gamma - 1)}$ from the continuous power law $p(k) = (\gamma - 1)k_{\min}^{\gamma - 1}k^{-\gamma}$ for $k \ge k_{\min}$, by requiring that about one node in $N$ exceeds $k_{\max}$. (b) Evaluate it for $N = 5{,}000$, $k_{\min} = 2$ and $\gamma = 2.5$ and $3$. (c) A lab reports a 5,000-node network whose largest hub has 60 partners and claims $\gamma = 2.2$. Is that consistent? What else might explain the discrepancy?

<details>
<summary>Solutions</summary>

**P1** (a) Degrees: node 1: 4 (2, 3, 4, 5); node 2: 2; node 3: 3; node 4: 3; node 5: 2. Average $14/5 = 2.8$. Handshake check: $\sum k = 14 = 2m$ with $m = 7$.

(b) Node 1: neighbours 2, 3, 4, 5. Edges among them: 2–3, 3–4, 4–5, so $e = 3$ of $\binom42 = 6$ possible: $C_1 = 2(3)/(4 \cdot 3) = \mathbf{0.5}$. Node 3: neighbours 1, 2, 4, with edges 1–2 and 1–4, so $e = 2$ of 3: $C_3 = 2(2)/(3 \cdot 2) = \mathbf{0.67}$.

(c) **Node 1** (degree 4) is the hub. Its clustering is 0.5, moderately tight: half of its partner pairs interact. It's a "party hub" sitting inside a dense neighbourhood rather than a bridge between otherwise separate groups.

**P2** Communities: {A, B}: internal edges A–B, $L = 1$, $d = 2 + 3 = 5$. {C, D}: C–D, $L = 1$, $d = 6$. {E, F, G, H}: $L = 6$, $d = 13$. With $m = 12$:

$$\begin{aligned}Q &= \left[\tfrac{1}{12} - \left(\tfrac{5}{24}\right)^2\right] + \left[\tfrac{1}{12} - \left(\tfrac{6}{24}\right)^2\right] + \left[\tfrac{6}{12} - \left(\tfrac{13}{24}\right)^2\right] \\ &= (0.0833 - 0.0434) + (0.0833 - 0.0625) + (0.5 - 0.2934) \\ &= \mathbf{0.267}.\end{aligned}$$

Lower than 0.413. Splitting {A, B, C, D} cuts the edges A–C, B–C and B–D, which were inside a community. Modularity only rewards edges *inside* communities beyond chance, so losing three internal edges costs more than the smaller expected-edge penalty saves.

**P3** (a) The fraction of nodes with degree above $K$ is $\int_K^\infty p(k)\,dk = k_{\min}^{\gamma - 1}K^{1-\gamma} = (K/k_{\min})^{1-\gamma}$. Setting $N (k_{\max}/k_{\min})^{1-\gamma} = 1$ gives $(k_{\max}/k_{\min})^{\gamma - 1} = N$, so $k_{\max} = k_{\min}N^{1/(\gamma - 1)}$.

(b) $\gamma = 2.5$: $2 \times 5{,}000^{2/3} = 2 \times 292 = \mathbf{585}$. $\gamma = 3$: $2 \times 5{,}000^{1/2} = 2 \times 70.7 = \mathbf{141}$.

(c) For $\gamma = 2.2$: $2 \times 5{,}000^{1/1.2} = 2 \times 1{,}200 \approx 2{,}400$. **A largest hub of 60 is far below that**, so it's inconsistent with a pure power law at this exponent. More likely explanations: the distribution has an **exponential cutoff** or is closer to log-normal; the exponent was estimated from an eyeballed log-log slope; or **incomplete sampling** (a partial interactome) truncates high degrees. Real hubs also have physical limits on how many partners they can bind at once.

</details>

## Flashback

**From Lesson 5.2 (Differential expression & multiple testing):** Eight genes have p-values 0.0001, 0.003, 0.004, 0.012, 0.02, 0.03, 0.2 and 0.5. (a) Apply Benjamini–Hochberg at $q = 0.05$. (b) Apply Bonferroni at family-wise level 0.05. (c) Give the q-value of the gene with $p = 0.03$.

<details>
<summary>Solution</summary>

(a) Lines $j \times 0.05/8 = j \times 0.00625$: 0.00625, 0.0125, 0.01875, 0.025, 0.03125, 0.0375, 0.04375, 0.05. Compare in order: 0.0001 yes; 0.003 yes; 0.004 yes; 0.012 yes ($\le 0.025$); 0.02 yes ($\le 0.03125$); 0.03 yes ($\le 0.0375$); 0.2 no; 0.5 no. **Six discoveries.**

(b) Threshold $0.05/8 = 0.00625$: **three** (0.0001, 0.003, 0.004).

(c) $q_{(6)} = \min_{i \ge 6} 8p_{(i)}/i = \min(8 \times 0.03/6,\ 8 \times 0.2/7,\ 8 \times 0.5/8) = \min(0.040,\ 0.229,\ 0.5) = \mathbf{0.040}$.

</details>

## Connections

- **Backward:** degree and the handshake lemma are [graph-theory 1.1](../../graph-theory/lessons/01-01-degree-and-handshake-lemma.md)'s; motifs and the degree-preserving null are [systems-biology 2.2](../../systems-biology/lessons/02-02-negative-autoregulation.md)'s; the Poisson degree distribution is [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)'s.
- **Forward:** [5.6](05-06-inferring-networks-from-data.md) asks where the edges come from when they're inferred from expression data, and why correlation networks acquire false edges and inflated clustering.
- **Sideways:** modularity maximization is graph partitioning, closely related to spectral clustering with the graph Laplacian of [graph-theory 5.2](../../graph-theory/lessons/05-02-laplacian-matrix-tree.md); preferential attachment is the same "rich get richer" mechanism as city sizes and citation counts.

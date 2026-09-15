# Computational Biology · Lesson 4.3: Genome assembly

> ⏱ ~15 min · Module 4: Genomics — from reads to variants · Builds on: [4.1](04-01-sequencing-reads-and-errors.md) (reads, coverage, repeats), [graph-theory 1.4](../../graph-theory/lessons/01-04-eulerian-hamiltonian.md) (Eulerian and Hamiltonian paths), [1.4](01-04-smith-waterman-local-alignment.md) (overlap alignment) · Unlocks: [4.4](04-04-variant-calling-genotype-likelihoods.md) (variants against a reference), [4.5](04-05-imputation-and-fine-mapping.md) (haplotypes)

## Why this matters

Read mapping ([4.2](04-02-read-mapping-bwt-fm-index.md)) needs a reference genome, and someone had to build that reference from reads alone. So does anyone sequencing a new species, a tumour with rearranged chromosomes, or a bacterial outbreak strain. That is **assembly**: reconstructing a long string from millions of short, overlapping, error-containing substrings, with no idea where any of them came from.

The field's key move was a change of graph. The obvious formulation — reads as nodes, overlaps as edges, find a path visiting every read — is a Hamiltonian path problem, NP-hard. Breaking reads into $k$-mers and building a **de Bruijn graph** turns assembly into an **Eulerian path** problem, solvable in linear time. That's Boss problem 4's first half. The second half of the story is why repeats still defeat it.

## The idea

**Overlap graph.** Make each read a node, and draw an edge from read $a$ to read $b$ when a suffix of $a$ matches a prefix of $b$ (the overlap alignment of [1.4](01-04-smith-waterman-local-alignment.md)). The genome is a path visiting **every node once**: a Hamiltonian path. No efficient algorithm is known for that in general, and with $10^8$ reads, just computing all pairwise overlaps is enormous. Overlap-based assemblers survive with heuristics, and they're still the method of choice for long reads, where there are fewer reads and overlaps are long.

**De Bruijn graph.** Chop every read into its $k$-mers. Make each distinct $(k-1)$-mer a **node**, and make each $k$-mer an **edge** from its prefix $(k-1)$-mer to its suffix $(k-1)$-mer. Walking along the genome, each successive $k$-mer steps to the next node. So the genome is a path that uses **every edge once**: an Eulerian path.

Euler settled when such a path exists, for undirected graphs, in 1736 ([graph-theory 1.4](../../graph-theory/lessons/01-04-eulerian-hamiltonian.md)). The directed version is just as simple: every node must have equal in-degree and out-degree, except the start (one more out than in) and the end (one more in than out). Hierholzer's algorithm finds such a path in time linear in the number of edges.

**Repeats are the catch.** If a $(k-1)$-mer occurs twice in the genome, its node is visited twice, and the walk can leave it by either exit on either visit. Different choices give **different Eulerian paths, different genomes**, all equally consistent with the $k$-mers. Assemblers don't guess. They report **contigs**: the unambiguous, non-branching stretches between the branch points.

**Choosing $k$.** A larger $k$ resolves longer repeats, because fewer $(k-1)$-mers occur twice. But longer $k$-mers are more likely to contain a sequencing error, and each read contributes fewer of them, so coverage of true $k$-mers falls. Every error creates up to $k$ false $k$-mers that grow spurious tips and bubbles. Assemblers often try several $k$ values.

## The formal version

**De Bruijn graph of a $k$-mer multiset** $K$: nodes are the $(k-1)$-mers occurring as prefixes or suffixes of elements of $K$; each $w = w_1 \ldots w_k \in K$ contributes a directed edge $w_1\ldots w_{k-1} \to w_2 \ldots w_k$. This is the [de Bruijn graph](../reference.md#de-bruijn-graph).

**Directed Eulerian path condition.** A connected directed graph has an Eulerian path iff either every node has $\text{in} = \text{out}$ (then the path is a cycle), or exactly one node has $\text{out} - \text{in} = 1$ (the start), exactly one has $\text{in} - \text{out} = 1$ (the end), and all others have $\text{in} = \text{out}$. This is the [directed Eulerian path condition](../reference.md#directed-eulerian-path-condition). *In words: every visit to a middle node enters once and leaves once, so its in and out counts must match.*

**Hierholzer's algorithm.**

```
HIERHOLZER(G, start):
    stack <- [start];  path <- []
    while stack not empty:
        u <- top(stack)
        if u has an unused out-edge (u, v):
            mark (u, v) used;  push v
        else:
            pop u;  prepend u to path
    return path
```

Each edge is pushed and popped once, so the time is $O(|E|)$. *In words: walk until stuck, then back up and splice in detours from nodes that still have unused edges.*

**Spelling the genome.** A path of nodes $v_0, v_1, \ldots, v_m$ spells $v_0$ followed by the last letter of each $v_1, \ldots, v_m$: length $(k-1) + m$.

**$k$-mer coverage.** With read coverage $c$, read length $L$ and per-base error rate $e$, the expected number of **error-free** copies of each genomic $k$-mer is about

$$c_k = c\,\frac{L-k+1}{L}\,(1-e)^k.$$

This is [$k$-mer coverage](../reference.md#k-mer-coverage). *In words: fewer $k$-mers fit in each read, and fewer of those are clean, as $k$ grows.*

## Picture

![A de Bruijn graph for the 3-mers of ATGGCGTGCA. Seven 2-mer nodes: AT, TG, GG, GC, CG, GT and CA. Edges labelled with 3-mers run AT to TG (ATG), TG to GG (TGG), GG to GC (GGC), TG to GC directly (TGC), GC to CG (GCG), CG to GT (CGT), GT back to TG (GTG), and GC to CA (GCA). AT has zero in and one out, CA one in and zero out, and TG and GC each two in and two out. Two genomes spell Eulerian paths: ATGGCGTGCA through GG first, and ATGCGTGGCA through TGC first.](assets/04-03-fig1.svg)

Check the degrees. AT is the start (out one more than in), CA is the end, every other node balances, so an Eulerian path exists. But TG and GC are each entered twice and left twice, because the 2-mers TG and GC each occur twice in the genome. On the first visit to TG, the walk can take the top route through GG or the direct TGC edge, and either choice can be completed. The $k$-mers can't tell those two genomes apart. An assembler would report the unambiguous pieces — ATG, TGGC, TGC, GCGTG, GCA — as contigs instead.

## Worked examples

**Example 1 (mechanical): reconstruct from 3-mers.** The 3-mers, in arbitrary order: GTA, TAC, ACG, TTA, TAG, CTT, CGT.

*Edges (prefix → suffix):* GT→TA, TA→AC, AC→CG, TT→TA, TA→AG, CT→TT, CG→GT.

*Degrees:*

| node | in | out | |
|---|---|---|---|
| CT | 0 | 1 | start (out − in = 1) |
| TT | 1 | 1 | |
| TA | 2 | 2 | visited twice |
| AC | 1 | 1 | |
| CG | 1 | 1 | |
| GT | 1 | 1 | |
| AG | 1 | 0 | end (in − out = 1) |

The condition holds, so an Eulerian path exists.

*Walk from CT:* CT → TT → TA. Now TA has two exits, AC and AG. Taking AG would end the walk with four edges unused, so take TA → AC → CG → GT → TA, then the remaining TA → AG. (Hierholzer would find the same path even from the wrong first choice, by splicing the unused cycle in.)

*Path:* CT, TT, TA, AC, CG, GT, TA, AG. *Spell:* CT, then T, A, C, G, T, A, G:

$$\texttt{CTTACGTAG}.$$

It's the only Eulerian path here. TA occurs twice, but one of its exits leads to a dead end, so the order is forced.

**Example 2 (why you'd care): when $k$ is too small, and too large.** The picture's 3-mers of `ATGGCGTGCA` admit **two** Eulerian paths. With $k = 4$, the nodes become 3-mers. `TGG`, `TGC`, `GCG` and `GCA` are all distinct, no node repeats, and there is exactly **one** Eulerian path, `ATGGCGTGCA`. Raising $k$ past the repeat resolved it.

Real data make the other side of the trade visible. With 150-base reads at 30× coverage and a 1 percent error rate:

| $k$ | $k$-mers per read, relative | P($k$-mer error-free) | error-free coverage $c_k$ |
|---|---|---|---|
| 21 | $130/150$ | 0.81 | 21 |
| 31 | $120/150$ | 0.73 | 17.6 |
| 55 | $96/150$ | 0.58 | 11.1 |
| 101 | $50/150$ | 0.36 | 3.6 |

At $k = 101$ many true $k$-mers would be seen once or never, and the graph breaks into pieces. At $k = 21$ every repeat longer than 20 bases tangles the graph. Practical short-read assemblers work around $k \approx 21$–$77$, often combining several values.

## Watch out

- **You might build** the graph with $k$-mers as nodes — **but actually** in the de Bruijn formulation the **$k$-mers are edges** and the $(k-1)$-mers are nodes. $k$-mers as nodes with overlap edges gives back a Hamiltonian problem.
- **You might think** an Eulerian path is the genome — **but actually** it's *a* genome consistent with the $k$-mers. When repeats create several Eulerian paths, choosing one is guessing. Assemblers output contigs that stop at branch points, and use read pairs or long reads to resolve them.
- **You might forget** duplicate $k$-mers — **but actually** a $k$-mer that occurs twice in the genome must be **two edges**. Collapsing them to one edge (from counting distinct $k$-mers) makes the degrees unbalance. Real assemblers estimate multiplicity from $k$-mer counts, which sequencing noise makes hard.

## One-liner

> Cut reads into $k$-mers, make each $k$-mer an edge between its $(k-1)$-mer prefix and suffix, and the genome becomes an Eulerian path found in linear time — unique only when no repeat is longer than $k - 1$, which is why assemblies end at repeats.

## Problems

**P1 (🟢)** The 3-mers of an unknown string, in arbitrary order: CTT, TTA, ACT, TAG, AGC, GAC, GCA. (a) List the edges and each node's in- and out-degree. (b) Identify the start and end nodes. (c) Reconstruct the string.

**P2 (🟡)** The 3-mers: TAC, TTA, CGG, GGA, ACG, GAC. (a) Compute the degrees and check the Eulerian path condition. (b) Reconstruct the string. (c) One node is visited twice. Which, and why doesn't it create a second reconstruction?

**P3 (🔴)** (a) From the picture's graph, list the contigs, meaning maximal paths whose internal nodes have in-degree 1 and out-degree 1. (b) Rebuild the graph for `ATGGCGTGCA` with $k = 4$: how many nodes have in-degree or out-degree greater than 1? (c) For 150-base reads at 30× with a 1 percent error rate, the table in Example 2 gives error-free coverage 17.6 at $k = 31$. Treating the count of error-free copies of a genomic 31-mer as Poisson, what fraction of genomic 31-mers are never seen error-free? What does that imply for the assembly?

<details>
<summary>Solutions</summary>

**P1** (a) Edges: CT→TT, TT→TA, AC→CT, TA→AG, AG→GC, GA→AC, GC→CA.

| node | in | out |
|---|---|---|
| GA | 0 | 1 |
| AC | 1 | 1 |
| CT | 1 | 1 |
| TT | 1 | 1 |
| TA | 1 | 1 |
| AG | 1 | 1 |
| GC | 1 | 1 |
| CA | 1 | 0 |

(b) Start **GA** (out − in = 1), end **CA** (in − out = 1).

(c) GA → AC → CT → TT → TA → AG → GC → CA, spelling **`GACTTAGCA`**. Every node has one exit, so the path is unique.

**P2** (a) Edges: TA→AC, TT→TA, CG→GG, GG→GA, AC→CG, GA→AC. Degrees: TT (0 in, 1 out), TA (1, 1), AC (**2 in, 1 out**), CG (1, 1), GG (1, 1), GA (1, 1). TT has out − in = 1, the start; AC has in − out = 1, the end; all others balance. The condition holds.

(b) TT → TA → AC → CG → GG → GA → AC, spelling **`TTACGGAC`**.

(c) **AC** is visited twice: once in the middle (entered from TA, left to CG) and once at the end (entered from GA). It has only one out-edge, so there's no choice to make at either visit. The second visit is simply where the path ends. A repeat creates ambiguity only when a repeated node offers more than one way out.

**P3** (a) Branch nodes: TG (in 2, out 2) and GC (in 2, out 2). AT is the start and CA the end. Walking between branch points: **ATG** (AT→TG), **TGGC** (TG→GG→GC), **TGC** (TG→GC), **GCGTG** (GC→CG→GT→TG), **GCA** (GC→CA). Five contigs.

(b) 4-mers of `ATGGCGTGCA`: ATGG, TGGC, GGCG, GCGT, CGTG, GTGC, TGCA — seven edges on eight 3-mer nodes ATG, TGG, GGC, GCG, CGT, GTG, TGC, GCA. Each node is distinct and has at most one in and one out. **None** branch: the graph is one path, and the whole genome is one contig.

(c) $P(0) = e^{-17.6} \approx 2.3\times10^{-8}$. With a few million 31-mers in a bacterial genome, that's well under one missing $k$-mer per genome on average: coverage gaps aren't the problem at this $k$. What remains are the error $k$-mers (each 1 percent error spawns up to 31 false ones, most seen once and prunable by count), and repeats longer than 30 bases, which still tangle the graph.

</details>

## Flashback

**From Lesson 4.1 (Sequencing reads & their errors):** In FASTQ, each quality character encodes $Q$ as the character with ASCII code $Q + 33$. The characters `I`, `5` and `+` have codes 73, 53 and 43. (a) Decode each to $Q$ and to an error probability. (b) A 10-base read has quality string `IIIII55555`. What is its expected number of errors? (c) A quality filter keeps reads with at most 0.05 expected errors. Does this read pass, and which single change to its qualities would decide it?

<details>
<summary>Solution</summary>

(a) `I`: $73 - 33 = 40$, $p = 10^{-4}$. `5`: $53 - 33 = 20$, $p = 0.01$. `+`: $43 - 33 = 10$, $p = 0.1$.

(b) $5 \times 10^{-4} + 5 \times 0.01 = 0.0005 + 0.05 = \mathbf{0.0505}$.

(c) **It just fails**: $0.0505 > 0.05$. The Q20 bases dominate. Raising a single `5` to `I` drops the total to $6(10^{-4}) + 4(0.01) = 0.0406$, which passes. Trimming the last base achieves nearly the same, $0.0405$. The read's fate hangs on one base, which is typical of hard thresholds on expected errors.

</details>

## Connections

- **Backward:** the undirected Euler theorem and the Hamiltonian contrast are [graph-theory 1.4](../../graph-theory/lessons/01-04-eulerian-hamiltonian.md)'s; the directed degree condition and Hierholzer's algorithm are added here; overlap graphs use [1.4](01-04-smith-waterman-local-alignment.md)'s overlap alignment; the repeat limit is [4.1](04-01-sequencing-reads-and-errors.md)'s.
- **Forward:** a finished assembly becomes the reference for mapping ([4.2](04-02-read-mapping-bwt-fm-index.md)) and variant calling ([4.4](04-04-variant-calling-genotype-likelihoods.md)); heterozygous sites appear in assembly graphs as bubbles, the same haplotype structure [4.5](04-05-imputation-and-fine-mapping.md) models statistically.
- **Sideways:** de Bruijn sequences — cyclic strings containing every $k$-mer exactly once — are Eulerian cycles in the complete de Bruijn graph, which is where the graph gets its name; "Hamiltonian is hard, Eulerian is easy" is the contrast [graph-theory 1.4](../../graph-theory/lessons/01-04-eulerian-hamiltonian.md) states, and its complexity-theoretic side is [computational-complexity](../../computational-complexity/syllabus.md)'s.

# Computer Architecture · Lesson 4.2: Associativity, misses, and write policy

> ⏱ ~15 min · Module 4: The memory hierarchy · Builds on: [4.1 (caches and locality)](04-01-caches-and-locality.md) · Unlocks: 4.3 (virtual memory), 5.3 (cache coherence)

## Why this matters

[4.1](04-01-caches-and-locality.md) ended with a specific pathology: two addresses exactly one cache-size apart evict each other endlessly, even in a cache holding hundreds of blocks that are otherwise idle. That is a conflict miss, and it is entirely an artefact of the placement rule rather than of capacity or locality.

Associativity fixes it, at a cost. This lesson is about that trade, about a taxonomy — the three C's — that tells you *which* fix will help a given program, and about writes, which [4.1](04-01-caches-and-locality.md) quietly ignored and which turn out to need their own policy decisions.

The payoff is diagnostic. When a program is slow because of memory, "add more cache" is usually the wrong answer, and the three C's tell you what the right one is.

## The idea

Direct-mapped placement gives each block exactly one home. That makes lookup trivial — compute the index, check one tag — and creates the conflict problem.

The opposite extreme, **fully associative**, lets any block go anywhere. No conflicts ever, but finding a block means comparing its tag against *every* entry simultaneously, which is expensive in area and power and slow enough to lengthen the hit time.

**Set-associative** is the compromise: divide the cache into sets, map each block to exactly one set, and allow it any way within that set. An $n$-way cache compares $n$ tags in parallel — cheap when $n$ is 2, 4 or 8.

Once a set can hold several blocks you need a **replacement policy** to decide which to evict, and once you allow writes you need to decide when they reach memory and what happens on a write miss. None of these is forced; each is a design choice with measurable consequences.

## The formal version

**Set-associative address split.** For a cache of $S$ bytes, $B$-byte blocks, $n$-way associative:
$$\text{sets} = \frac{S}{B\times n}, \qquad \text{index bits} = \log_2(\text{sets}), \qquad \text{offset} = \log_2 B, \qquad \text{tag} = 32 - \text{index} - \text{offset} .$$

**Raising associativity shrinks the index and grows the tag**, at constant cache size — because there are fewer sets to choose among. Fully associative is the limit: zero index bits, one set, the tag is everything above the offset.

*Instance.* 32 KiB, 64-byte blocks, 4-way:
$$\text{sets} = \frac{32768}{64\times 4} = 128, \qquad \text{index} = 7, \qquad \text{offset} = 6, \qquad \text{tag} = 32-7-6 = 19 .$$

Compare the same cache direct-mapped: 512 sets, 9 index bits, 17 tag bits. Two index bits moved into the tag.

**Replacement policies.** Only needed when a set has more than one way.

| Policy | Behaviour | Cost |
|---|---|---|
| **LRU** | evict the least recently used | exact LRU needs $\log_2(n!)$ bits per set; approximated in practice |
| **Random** | evict a random way | trivial; surprisingly competitive above 4-way |
| **FIFO** | evict the oldest | cheap; ignores reuse |

LRU beats random noticeably at 2-way and marginally at 8-way, which is why real caches use pseudo-LRU approximations rather than exact LRU.

**The three C's.** Every miss is exactly one of these, and the classification tells you what would fix it.

| Type | Definition | What helps |
|---|---|---|
| **Compulsory** | first-ever reference to a block | larger blocks; prefetching |
| **Capacity** | the working set exceeds the cache | a larger cache; better locality (blocking) |
| **Conflict** | too many active blocks map to one set | higher associativity |

Formally: run the trace on an *infinite* cache — the misses that remain are compulsory. Run it on a *fully associative* cache of the real size — the additional misses are capacity. Any further misses in the real cache are conflict.

**This taxonomy is a diagnostic tool, not trivia.** A program dominated by compulsory misses will not improve with a bigger cache; one dominated by conflict misses will not improve with better locality. Measuring which kind you have tells you which lever to pull.

**Write policy: when does memory get updated?**

> **Write-through.** Write to the cache and to the next level simultaneously. Memory is always current; the cache is never "dirty".
> **Write-back.** Write only to the cache and mark the block **dirty**; write it to memory only when it is evicted.

| | Write-through | Write-back |
|---|---|---|
| memory traffic | every write | only dirty evictions |
| complexity | simple | needs a dirty bit and eviction logic |
| multiprocessor coherence | easier | harder ([5.3](05-03-multiprocessors-cache-coherence.md)) |
| repeated writes to one location | pays every time | pays once |

Write-back wins on traffic — a loop writing the same variable a million times costs one memory write instead of a million — and is what modern L1 caches use. Write-through survives in some L1 designs backed by a **write buffer**, which absorbs the stores so the processor need not wait.

**Write miss policy: what if the block is not there?**

> **Write-allocate.** Fetch the block into the cache, then write. Pairs naturally with write-back.
> **No-write-allocate.** Write straight to memory, leaving the cache untouched. Pairs with write-through.

Write-allocate pays off when a write is followed by more accesses to the same block — which spatial locality makes common. It is wasteful when a program writes a large array once and never reads it, which is why some ISAs offer non-temporal store instructions that bypass the cache deliberately.

**The AMAT extension.** With multiple levels, apply the formula recursively:
$$\mathrm{AMAT} = t_{L1} + m_{L1}\bigl(t_{L2} + m_{L2}\cdot t_{\text{mem}}\bigr)$$
where $m_{L2}$ is the **local** miss rate — misses in L2 divided by *accesses to L2*, not by total accesses. Confusing local and global miss rates is the standard error here; the global L2 miss rate is $m_{L1}\times m_{L2}$.

## Picture

![Three cache organisations drawn as grids: a direct-mapped cache as eight single-block rows, a two-way cache as four rows of two, and a fully associative cache as one group of eight, above a table classifying compulsory, capacity and conflict misses with their causes and remedies](assets/04-02-fig1.svg)

The three grids all hold eight blocks; they differ only in how much freedom a block has about where to sit. The table beneath is the diagnostic — matching a miss type to the fix that addresses it, and noting that each fix is useless against the other two kinds.

## Worked examples

**Example 1 (mechanical): associativity resolves the conflict.** Return to [4.1](04-01-caches-and-locality.md)'s failing trace — addresses `0x0000`, `0x0010`, `0x2000`, `0x0000`, `0x0020` on an 8 KiB cache with 32-byte blocks.

*Direct-mapped* (256 sets, index bits 12:5): `0x0000` and `0x2000` both map to set 0 and evict each other. Result: 4 misses, 1 hit.

*2-way set-associative* — same 8 KiB, same 32-byte blocks:
$$\text{sets} = \frac{8192}{32\times 2} = 128, \qquad \text{index} = 7 \ (\text{bits } 11{:}5), \qquad \text{tag} = 20 .$$

Now `0x0000` has index 0 and tag `0x00000`; `0x2000` has index 0 and tag `0x00001`. **Same set, but the set holds two blocks**, so both fit:

| Address | set | Result |
|---|---|---|
| `0x0000` | 0 | miss (cold) — way 0 |
| `0x0010` | 0 | **hit** — same block |
| `0x2000` | 0 | miss (cold) — way 1, evicts nothing |
| `0x0000` | 0 | **hit** — still resident in way 0 |
| `0x0020` | 1 | miss (cold) |

**Three misses instead of four, and all three are now compulsory** — the conflict misses are gone entirely. Every remaining miss is a first-ever touch, which no amount of associativity can remove.

**Example 2 (why you'd care): choosing the fix from the miss breakdown.** A program runs slowly. Profiling gives a 12 percent L1 miss rate. You measure the three C's by simulation:

| Type | Share of misses |
|---|---|
| compulsory | 2% |
| capacity | 15% |
| conflict | **83%** |

*What not to do.* Doubling the cache size attacks capacity misses, which are 15 percent of the problem — Amdahl's law ([5.1](05-01-measuring-performance-cpi-amdahl.md)) caps the benefit at a fraction of that. Prefetching attacks compulsory misses, 2 percent of the problem. Both are expensive and nearly useless here.

*What to do.* Conflict misses dominate, so **raise associativity**. Going from direct-mapped to 4-way typically removes the large majority of conflict misses. If the miss rate falls from 12 percent to, say, 3 percent, then with a 1-cycle hit and a 100-cycle penalty:
$$\mathrm{AMAT}_{\text{before}} = 1 + 0.12(100) = 13.0 , \qquad \mathrm{AMAT}_{\text{after}} = 1 + 0.03(100) = 4.0 .$$
A $3.25\times$ improvement in average memory access time.

*The cheaper alternative.* An 83 percent conflict share usually means a **power-of-two stride or array dimension** — exactly [4.1](04-01-caches-and-locality.md) P3's pathology. Padding an array from `[1024][1024]` to `[1024][1025]` changes the stride to a non-power-of-two, scattering the accesses across sets, and can eliminate most conflict misses **with a one-character source change and no hardware at all.**

That is the practical value of the taxonomy: it does not merely say "memory is slow", it says *which* of three quite different interventions will work. Measuring the breakdown before optimising is the difference between a 3x speedup and wasted effort.

## Watch out

- **You might think** higher associativity is always better — **but actually** it lengthens the hit time (more tags to compare and a multiplexer to select the way), costs power, and shows steeply diminishing returns past 8-way. A slower hit on every access can outweigh a lower miss rate, which is why L1 caches are typically 4- or 8-way rather than fully associative.
- **You might think** the global and local L2 miss rates are interchangeable — **but actually** the local rate is measured against L2 *accesses* (already filtered by L1) and is much higher than the global rate. Using the wrong one in the AMAT formula is the standard arithmetic mistake in this material.
- **You might think** write-back is strictly better than write-through — **but actually** write-back complicates multiprocessor coherence considerably, since memory is no longer authoritative and a dirty block may live in one core's private cache. [5.3](05-03-multiprocessors-cache-coherence.md) is entirely about the machinery that problem requires.

## One-liner

> Set-associativity gives a block several homes within one set, which converts conflict misses into hits at the cost of a slower lookup — and the three C's tell you which of associativity, capacity or prefetching is the fix your particular program actually needs.

## Problems

**P1 (🟢)** A 64 KiB cache has 64-byte blocks and is 8-way set-associative, with 32-bit addresses. Give the number of sets, and the offset, index and tag widths. Then give the same three widths if it were direct-mapped, and state which field grew.

**P2 (🟡)** A two-level hierarchy has L1 hit time 1 cycle with a 5 percent miss rate; L2 hit time 12 cycles with a 40 percent **local** miss rate; memory 200 cycles. (a) Compute the AMAT. (b) Give the **global** L2 miss rate. (c) Recompute the AMAT if the L2 local miss rate is halved to 20 percent, and give the improvement.

**P3 (🔴, optional)** A loop reads `A[i]` and writes `B[i]` for a million elements; both arrays are far larger than the cache, 4-byte elements, 64-byte blocks. (a) Give the read miss rate and the write miss rate. (b) Compute the memory traffic in bytes under write-through with no-write-allocate, and under write-back with write-allocate. (c) Which policy is better here, and how does the answer change if the loop instead reads and writes the *same* array element repeatedly?

<details>
<summary>Solutions</summary>

**P1** *8-way set-associative.*
$$\text{sets} = \frac{65536}{64\times 8} = \frac{65536}{512} = \boxed{128}$$
$$\text{offset} = \log_2 64 = \boxed{6}, \qquad \text{index} = \log_2 128 = \boxed{7}, \qquad \text{tag} = 32-7-6 = \boxed{19}$$

*Direct-mapped, same size and block size.*
$$\text{sets} = \frac{65536}{64} = 1024, \qquad \text{offset} = 6, \qquad \text{index} = 10, \qquad \text{tag} = 32-10-6 = 16$$

*Which field grew.* The **tag**, from 16 bits to 19. Raising associativity from 1-way to 8-way divides the number of sets by 8, removing $\log_2 8 = 3$ index bits — and those three bits move into the tag, since the offset is unchanged and the three fields must total 32.

That is a real hardware cost, and it is easy to overlook: an 8-way cache stores 3 extra tag bits **per block**, and compares 8 tags in parallel instead of 1. For 1024 blocks that is 3072 extra bits of tag storage plus eight comparators and a way-select multiplexer — which is exactly why associativity lengthens the hit time and burns more power.

**P2** *(a) AMAT.* Apply the formula recursively, remembering that the L2 miss rate given is **local** — measured against accesses that reach L2:
$$\mathrm{AMAT} = t_{L1} + m_{L1}\bigl(t_{L2} + m_{L2}\,t_{\text{mem}}\bigr)$$
$$= 1 + 0.05\bigl(12 + 0.40(200)\bigr) = 1 + 0.05(12 + 80) = 1 + 0.05(92) = 1 + 4.6 = \boxed{5.6 \text{ cycles}}$$

*(b) Global L2 miss rate.* The fraction of **all** accesses that miss in both levels:
$$m_{\text{global}} = m_{L1}\times m_{L2} = 0.05 \times 0.40 = 0.02 = \boxed{2\%}$$

So only 2 percent of the program's memory accesses actually reach DRAM, even though 40 percent of the ones that reach L2 do. The local rate looks alarming and the global rate is what determines memory traffic — reporting one when you mean the other is the classic error.

*(c) With the L2 local miss rate halved to 20 percent.*
$$\mathrm{AMAT} = 1 + 0.05\bigl(12 + 0.20(200)\bigr) = 1 + 0.05(12+40) = 1 + 0.05(52) = 1 + 2.6 = \boxed{3.6 \text{ cycles}}$$
$$\text{improvement} = \frac{5.6}{3.6} = \boxed{1.56\times} \quad (\text{about } 36\% \text{ less time})$$

Worth noting how leveraged the L2 improvement is: halving one miss rate cut overall AMAT by more than a third, because the 200-cycle memory penalty is so much larger than everything else. The largest term in the original AMAT was $0.05 \times 0.40 \times 200 = 4.0$ cycles — DRAM accesses alone, 71 percent of the total, from just 2 percent of accesses.

**P3** *(a) Miss rates.* Both arrays are walked with unit stride, 4-byte elements, 64-byte blocks, so 16 elements per block:
$$\text{read miss rate (A)} = \frac{1}{16} = \boxed{6.25\%}, \qquad \text{write miss rate (B)} = \frac{1}{16} = \boxed{6.25\%}$$
Both arrays exceed the cache, but that does not matter for a single streaming pass — every block is touched once and the misses are **compulsory**, not capacity.

*(b) Memory traffic for $10^6$ iterations.*

**Write-through, no-write-allocate.**
- Reads of `A`: one miss per 16 elements, each fetching a 64-byte block:
$$\frac{10^6}{16}\times 64 = 62500 \times 64 = 4{,}000{,}000 \text{ bytes read} .$$
- Writes of `B`: every write goes straight to memory, 4 bytes each, and no block is fetched:
$$10^6 \times 4 = 4{,}000{,}000 \text{ bytes written} .$$
$$\text{total} = \boxed{8.0 \text{ MB}}$$

**Write-back, write-allocate.**
- Reads of `A`: same, $4{,}000{,}000$ bytes read.
- Writes of `B`: on each write miss the block is **fetched** (write-allocate), then later written back dirty when evicted:
$$\text{fetch: } 62500\times 64 = 4{,}000{,}000 \text{ bytes read}$$
$$\text{writeback: } 62500\times 64 = 4{,}000{,}000 \text{ bytes written}$$
$$\text{total} = 4 + 4 + 4 = \boxed{12.0 \text{ MB}}$$

*(c) Which is better here.* **Write-through with no-write-allocate**, by a wide margin — 8 MB against 12 MB, a 50 percent traffic increase for write-back.

The reason is specific and worth naming: `B` is **write-only and streamed**. Write-allocate fetches each block from memory before overwriting it entirely, which is pure waste — every one of those 4 MB of fetched bytes is discarded without ever being read. This is exactly the case that motivates **non-temporal store** instructions, which write to memory while bypassing the cache, and the compiler idiom of using them for large output arrays.

*If the loop repeatedly reads and writes the same element instead*, the answer reverses completely. Say it writes one location a million times:

- **Write-through**: $10^6$ writes reach memory, $4$ MB of traffic.
- **Write-back**: the block is fetched once (64 bytes) and written back once when evicted (64 bytes) — **128 bytes total.**

A factor of about 30,000. Write-back's advantage comes entirely from **temporal locality in writes**, absorbing repeated updates in the cache; write-through's advantage comes from avoiding useless fetches when there is no reuse. Neither policy dominates, which is why the pairing matters: write-back with write-allocate for general code with reuse, write-through or non-temporal stores for streaming output.

</details>

## Flashback

**From Lesson 4.1 (caches and the principle of locality):** A 16 KiB direct-mapped cache has 32-byte blocks and 32-bit addresses. (a) Give the offset, index and tag widths. (b) Give the steady-state miss rate for a unit-stride walk over 4-byte `int`s. (c) With a 1-cycle hit and a 100-cycle penalty, give the AMAT — and then the AMAT if the block size were doubled to 64 bytes with the penalty rising to 120 cycles.

<details>
<summary>Solution</summary>

*(a) Address split.*
$$\text{offset} = \log_2 32 = \boxed{5}, \qquad \text{blocks} = \frac{16384}{32} = 512, \qquad \text{index} = \log_2 512 = \boxed{9}, \qquad \text{tag} = 32-9-5 = \boxed{18}$$

*(b) Miss rate.* With 4-byte elements and 32-byte blocks, a block holds 8 elements:
$$\text{miss rate} = \frac18 = \boxed{12.5\%}$$

*(c) AMAT at 32-byte blocks.*
$$\mathrm{AMAT} = 1 + 0.125(100) = \boxed{13.5 \text{ cycles}}$$

*With 64-byte blocks.* The block now holds 16 elements, halving the miss rate, but the penalty rises because more bytes must be transferred:
$$\text{miss rate} = \frac{1}{16} = 6.25\% , \qquad \mathrm{AMAT} = 1 + 0.0625(120) = 1 + 7.5 = \boxed{8.5 \text{ cycles}}$$

$$\text{improvement} = \frac{13.5}{8.5} = 1.59\times$$

**The larger block wins clearly here** — halving the miss rate more than compensates for the 20 percent higher penalty.

But that conclusion is workload-specific, and it is worth seeing where it reverses. This trace is a pure unit-stride walk with perfect spatial locality, which is the best possible case for large blocks: every one of the 16 elements fetched is used. Run the same experiment on a **stride-16 walk**, where only one element per 64-byte block is used, and the miss rate stays at 100 percent regardless of block size while the penalty rises:
$$\mathrm{AMAT}_{32} = 1 + 1.0(100) = 101 , \qquad \mathrm{AMAT}_{64} = 1 + 1.0(120) = 121 .$$
Now the larger block is **20 percent worse**.

That is [4.1](04-01-caches-and-locality.md)'s U-shaped block-size curve in two data points, and it connects to this lesson's taxonomy: enlarging blocks attacks **compulsory** misses by fetching neighbours in advance, and does nothing whatever for capacity or conflict misses while making both slightly worse (fewer blocks fit, and the penalty grows). Knowing which of the three C's dominates is what tells you whether the trade is worth taking.

</details>

## Connections

- **Backward:** this fixes the conflict pathology [4.1](04-01-caches-and-locality.md) Example 1 exposed, and refines its AMAT formula to multiple levels. The address split is the same three fields with the boundary moved, and the U-shaped block-size trade-off from that lesson gets its explanation here in terms of which miss type each change attacks.
- **Forward:** [4.3](04-03-virtual-memory-and-the-tlb.md) adds address translation and applies the identical caching idea to page-table entries — the TLB is a small, highly associative cache of translations, chosen fully associative precisely because conflict misses would be intolerable there. Write-back's complications are the starting point of [5.3](05-03-multiprocessors-cache-coherence.md).
- **Sideways:** the three C's are a general diagnostic pattern, not a hardware curiosity — the same decomposition applies to any caching system, and asking "is this miss compulsory, capacity, or conflict?" is as useful for a database buffer pool or a CDN as for an L1 cache. The discipline of measuring *which* kind before choosing a fix is the transferable part.

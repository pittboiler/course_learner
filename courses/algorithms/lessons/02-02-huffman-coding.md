# Algorithms · Lesson 2.2: Huffman coding

> ⏱ ~15 min · Module 2: Greedy & dynamic programming · Builds on: [1.5 (divide-and-conquer)](01-05-divide-and-conquer-beyond-sorting.md), [2.1 (the greedy method)](02-01-the-greedy-method-and-interval-scheduling.md) · Unlocks: 2.3 (minimum spanning trees)

## Why this matters

Interval scheduling had one greedy rule that worked and three that did not, and the moral was that greedy needs a proof. Huffman coding is the same paradigm with a much more surprising rule: **build the tree from the two rarest symbols upward**, which is the opposite of where your attention naturally goes.

It is also a genuinely optimal algorithm for a real problem — this is the compression inside ZIP, JPEG, MP3 and every DEFLATE stream — and its optimality is not "pretty good in practice" but a theorem: *no* prefix-free code assigns a shorter expected length. That is rare. Most practical algorithms are heuristics; this one is provably the best in its class.

The judgement content is knowing what "its class" means. Huffman is optimal among **prefix-free codes with per-symbol integer lengths**, and beating it requires leaving that class — which is exactly what arithmetic coding does. Being able to say *what a theorem's optimality is relative to* is the difference between using a result and being misled by it.

## The idea

You want to write a message over an alphabet where some symbols are far more common than others. A fixed-length code spends the same bits on every symbol, which is obviously wasteful when `A` appears 45% of the time and `F` appears 5%.

So use a **variable-length** code: short codewords for common symbols, long ones for rare. The immediate problem is ambiguity — if `A` is `0` and `B` is `01`, then `01` could be `B` or `A` followed by something. The fix is to require the code be **[prefix-free](../reference.md#prefix-free-code)**: no codeword is a prefix of another. Then decoding is unambiguous and needs no delimiters, because as soon as you have read a codeword you know it is complete.

Here is the reframing that makes the whole problem tractable:

> **A prefix-free code is exactly a binary tree with the symbols at the leaves.**

Follow `0` to the left child and `1` to the right; a symbol's codeword is the path to its leaf. Prefix-freeness is automatic because no leaf is on the path to another leaf. And the codeword's *length* is the leaf's *depth*. So the problem becomes:

> Build a binary tree with these symbols as leaves, minimizing $\sum_s (\text{frequency of } s)\times(\text{depth of } s)$.

Now the greedy insight. In an optimal tree, **the two least frequent symbols must be siblings at the greatest depth.** Why: the deepest level has at least two leaves (a deepest leaf's parent has two children in an optimal tree, or you could promote it), and if a deep leaf held a common symbol while a rare symbol sat higher, swapping them would reduce the total — you would be moving a big frequency up and a small one down.

That gives the algorithm: take the two rarest symbols, make them siblings, and replace the pair by a single "merged" symbol whose frequency is their sum. Repeat until one symbol remains. The merges, run in reverse, are the tree.

## The formal version

**Setup.** Symbols $s_1,\dots,s_k$ with frequencies (or probabilities) $w_1,\dots,w_k > 0$. A **binary prefix-free code** assigns each $s_i$ a binary string $c_i$ such that no $c_i$ is a prefix of any $c_j$. Its **expected length** is

$$L(C) \;=\; \frac{1}{W}\sum_{i=1}^{k} w_i\,|c_i|, \qquad W = \sum_i w_i,$$

equivalently $\sum_i w_i \cdot \operatorname{depth}(s_i)$ in the corresponding tree, divided by $W$.

**The algorithm.**

```
HUFFMAN(symbols with weights):
    Q <- min-priority queue of all symbols, keyed by weight
    while Q has more than one element:
        x <- EXTRACT-MIN(Q)
        y <- EXTRACT-MIN(Q)
        z <- new node with children x, y and weight w(x) + w(y)
        INSERT(Q, z)
    return the single remaining node as the tree root
```

With a binary heap, $k-1$ iterations each doing $O(\log k)$ work: $\Theta(k\log k)$. (If the weights arrive already sorted, two queues give $\Theta(k)$.)

**Theorem (Huffman optimality).** The tree built by `HUFFMAN` minimizes expected codeword length over all prefix-free codes for those frequencies.

The proof is two lemmas, and both are exchange arguments in the style of [Lesson 2.1](02-01-the-greedy-method-and-interval-scheduling.md).

**Lemma 1 (the greedy choice is safe).** Let $x, y$ be two symbols of lowest weight. There is an optimal tree in which $x$ and $y$ are siblings at maximum depth.

*Proof.* Take any optimal tree $T$ and let $a, b$ be two sibling leaves at maximum depth (they exist: in an optimal tree every internal node has two children, so a deepest leaf has a sibling, which is also a leaf). Assume WLOG $w(a) \le w(b)$ and $w(x) \le w(y)$. Swap $x$ with $a$ to get $T'$. The cost change is

$$\operatorname{cost}(T') - \operatorname{cost}(T) \;=\; \big(w(x) - w(a)\big)\big(d(a) - d(x)\big) \;\le\; 0,$$

because $w(x) \le w(a)$ ($x$ is a minimum-weight symbol) and $d(a) \ge d(x)$ ($a$ is at maximum depth). So $T'$ is no worse, hence also optimal. Swap $y$ with $b$ likewise. The result is an optimal tree with $x, y$ as sibling leaves at maximum depth. $\blacksquare$

**Lemma 2 (optimal substructure).** Let $T$ be a tree for the alphabet with $x,y$ replaced by a merged symbol $z$ of weight $w(x)+w(y)$, and let $T'$ be $T$ with $z$'s leaf expanded into an internal node with children $x, y$. Then

$$\operatorname{cost}(T') \;=\; \operatorname{cost}(T) + w(x) + w(y),$$

a constant independent of $T$. *(Each of $x,y$ sits one level below where $z$ was, contributing $(w(x)+w(y))\cdot(d(z)+1)$ in place of $(w(x)+w(y))\cdot d(z)$.)*

So minimizing $\operatorname{cost}(T')$ is the same as minimizing $\operatorname{cost}(T)$: **an optimal tree for the merged alphabet expands to an optimal tree for the original.**

*Optimality follows by induction on $k$*: Lemma 1 says the greedy first merge is consistent with some optimum, Lemma 2 says the rest of the problem is an identical problem on $k-1$ symbols, and the base case $k=1$ is trivial. $\blacksquare$

**How good is it?** With $H$ the entropy $-\sum_i p_i\log_2 p_i$ of the frequency distribution,

$$H \;\le\; L(\text{Huffman}) \;<\; H + 1.$$

The lower bound is Shannon's source-coding theorem: no uniquely decodable code beats entropy. The upper bound is the price of **integer** codeword lengths — you cannot spend 2.22 bits on a symbol, only 2 or 3.

## Picture

![A Huffman tree for frequencies A 45, B 13, C 12, D 16, E 9, F 5. The root splits into leaf A and an internal node of weight 55; that splits into nodes of weight 25 and 30; the codes are listed beside the tree, with A getting a single bit and the rarest symbols E and F getting four bits each.](assets/02-02-fig1.svg)

Read the depths against the frequencies: `A` at 45% sits one level down and costs 1 bit; `E` and `F`, together 14%, sit four levels down. That inverse relationship *is* the optimization, and the greedy merge produces it without ever explicitly aiming at it.

Notice the merged weights along the way — 14, 25, 30, 55, 100. Each is the total frequency of the subtree beneath it, and the algorithm's whole state is these running sums. That is why a priority queue is the right data structure and why the algorithm never revisits a decision: a merged node's internal structure can no longer affect anything above it.

## Worked examples

**Example 1 (mechanical): building the code.** Frequencies (out of 100):

$$A: 45,\quad B: 13,\quad C: 12,\quad D: 16,\quad E: 9,\quad F: 5.$$

Repeatedly merge the two smallest:

| step | two smallest | merged weight | queue after |
|---|---|---|---|
| 1 | $F{:}5$, $E{:}9$ | $14$ | $12, 13, 14, 16, 45$ |
| 2 | $C{:}12$, $B{:}13$ | $25$ | $14, 16, 25, 45$ |
| 3 | $(FE){:}14$, $D{:}16$ | $30$ | $25, 30, 45$ |
| 4 | $(CB){:}25$, $((FE)D){:}30$ | $55$ | $45, 55$ |
| 5 | $A{:}45$, $\ldots{:}55$ | $100$ | done |

Reading the tree (left $=0$, right $=1$):

$$A \to 0, \quad C \to 100, \quad B \to 101, \quad F \to 1100, \quad E \to 1101, \quad D \to 111.$$

Prefix-free ✓ (verified pairwise). Expected length:

$$L = \frac{45(1) + 12(3) + 13(3) + 5(4) + 9(4) + 16(3)}{100} = \frac{45+36+39+20+36+48}{100} = \frac{224}{100} = \mathbf{2.24 \text{ bits/symbol}}.$$

A fixed-length code needs $\lceil\log_2 6\rceil = 3$ bits, so $300$ bits for the same 100 symbols against Huffman's $224$ — a **25% saving**. And the entropy is $2.2199$ bits, so Huffman is within $0.021$ bits of the information-theoretic floor. (All figures machine-verified.)

**Example 2 (why you'd care): what "optimal" is relative to.** Huffman is optimal, and yet real compressors often do better. Both statements are true, and reconciling them is the useful skill.

**What the theorem says:** among codes that (i) are prefix-free and (ii) assign each symbol a whole number of bits, and (iii) treat symbols as independent draws from a fixed distribution, Huffman minimizes expected length. Nothing beats it in that class.

**Where the gains come from, then:** by leaving the class.

- *Fractional bits.* When one symbol dominates, integer lengths hurt badly. Take $P(A) = 0.9$, $P(B) = 0.1$: entropy is $0.469$ bits, but Huffman must give each symbol at least 1 bit, so $L = 1.0$ — **more than double** the floor. **Arithmetic coding** encodes the whole message as one number and effectively spends fractional bits, approaching entropy. This is why JPEG's arithmetic-coding mode beats its Huffman mode.
- *Context.* Real text is not independent draws — `u` after `q` is nearly certain. Modelling symbols conditionally lowers the entropy itself, which is a bigger win than coding efficiency. That is what makes modern compressors good, and it is orthogonal to Huffman.
- *Repetition.* LZ77-style methods replace repeated substrings with back-references, changing what the symbols *are*. DEFLATE does exactly this and *then* Huffman-codes the result — the two are complementary, not competing.

**The habit.** When you meet a claim of optimality, ask what the class is. "Optimal prefix-free code" is a strong theorem with a narrow scope; reading it as "optimal compression" would be a serious error, and it is one that citing the theorem correctly prevents.

## Watch out

- **You might think** the Huffman code for a given set of frequencies is unique — **but actually** ties in the priority queue and the arbitrary left/right assignment of `0` and `1` produce many codes, all with the same expected length. Two correct implementations can emit different codebooks. This is why compressed formats **transmit the codebook** (or a canonical form of it) rather than assuming the decoder rebuilds the same tree.
- **You might think** Huffman needs sorted input, since it always wants the two smallest — **but actually** it needs a *priority queue*, and the crucial point is that merged nodes re-enter it: a merged weight can be larger than symbols not yet used, so the extraction order is not the initial sorted order. In Example 1, $(FE){:}14$ is created after $C{:}12$ and $B{:}13$ exist and is extracted before $D{:}16$.
- **You might think** the greedy choice is "give the most frequent symbol the shortest code" — **but actually** the algorithm never looks at the most frequent symbol until the end. It works from the **rare** end, and the common symbols get short codes as a *consequence* of never being merged early. Building from the frequent end down is not a correct algorithm, and this inversion is the thing to remember about Huffman.

## One-liner

> A prefix-free code is a binary tree with symbols at the leaves, so minimizing expected length means minimizing weighted depth — and repeatedly merging the two rarest symbols is provably the right way to build it.

## Problems

**P1 (🟢)** Build a Huffman code for

$$A: 30,\quad B: 25,\quad C: 20,\quad D: 15,\quad E: 10.$$

(a) Give the merge order as a table. (b) Give the codeword for each symbol. (c) Compute the expected length and compare it with the fixed-length cost.

**P2 (🟡)** Consider the two-symbol distribution $P(A) = 0.9$, $P(B) = 0.1$.

(a) What code does Huffman produce, and what is its expected length? (b) Compute the entropy. (c) State the ratio of the two and explain in one sentence where the waste goes. (d) Now consider coding **pairs** of symbols ($AA$, $AB$, $BA$, $BB$) as a four-symbol alphabet with the induced independent probabilities. Build the Huffman code, compute the expected bits *per original symbol*, and say whether it improved.

**P3 (🔴)** A colleague argues:

> "Huffman is provably optimal, so any compressor that beats it on real files must contain a bug, or must be exploiting something outside the data."

(a) Say precisely which class of codes the optimality theorem covers, listing the hypotheses. (b) For each of the following, say which hypothesis it violates and roughly how much it can gain: arithmetic coding; a context model that conditions on the previous character; LZ77 back-references. (c) Give a concrete frequency distribution on which Huffman's expected length is more than $1.9\times$ the entropy, and state the general condition on the distribution that makes Huffman inefficient.

<details>
<summary>Solutions</summary>

**P1** (a) Merges, always taking the two smallest:

| step | two smallest | merged | queue after |
|---|---|---|---|
| 1 | $E{:}10$, $D{:}15$ | $25$ | $20, 25, 25, 30$ |
| 2 | $C{:}20$, $(ED){:}25$ | $45$ | $25, 30, 45$ |
| 3 | $B{:}25$, $A{:}30$ | $55$ | $45, 55$ |
| 4 | $45$, $55$ | $100$ | done |

(Step 2 has a tie between $(ED){:}25$ and $B{:}25$; taking either is correct and gives the same expected length. This solution takes the merged node.)

(b) The tree: root splits into $(C(ED))$ of weight 45 and $(BA)$ of weight 55. Reading left $=0$, right $=1$:

$$C \to 00, \quad E \to 010, \quad D \to 011, \quad B \to 10, \quad A \to 11.$$

(c) Expected length:

$$L = \frac{30(2) + 25(2) + 20(2) + 15(3) + 10(3)}{100} = \frac{60+50+40+45+30}{100} = \frac{225}{100} = \mathbf{2.25 \text{ bits}}.$$

Fixed-length needs $\lceil\log_2 5\rceil = 3$ bits, so $300$ bits versus $225$ — a **25% saving**. (Entropy here is $2.228$ bits, so Huffman is within $0.022$.)

**P2** (a) With two symbols there is only one prefix-free tree shape: $A \to 0$, $B \to 1$. Expected length

$$L = 0.9(1) + 0.1(1) = \mathbf{1.0 \text{ bit/symbol}}.$$

(b) Entropy:

$$H = -0.9\log_2 0.9 - 0.1\log_2 0.1 = 0.9(0.152) + 0.1(3.322) = 0.1368 + 0.3322 = \mathbf{0.469 \text{ bits}}.$$

(c) Ratio $1.0 / 0.469 = \mathbf{2.13}$ — Huffman spends more than **twice** the information-theoretic minimum.

The waste is entirely the **integer-length constraint**: the symbol $A$ "deserves" $-\log_2 0.9 = 0.152$ bits and the shortest codeword available is 1 bit, so almost 0.85 bits are wasted on 90% of the symbols. With only two symbols, no prefix-free code can do better — the theorem is not violated, it is just that the class is too poor.

(d) Pair probabilities (independent): $AA = 0.81$, $AB = 0.09$, $BA = 0.09$, $BB = 0.01$.

Merges: $BB{:}0.01 + AB{:}0.09 \to 0.10$; then $0.10 + BA{:}0.09 \to 0.19$; then $0.19 + AA{:}0.81 \to 1.0$. Codes:

$$AA \to 0, \quad BA \to 10, \quad AB \to 110, \quad BB \to 111.$$

Expected length **per pair**:

$$L_2 = 0.81(1) + 0.09(2) + 0.09(3) + 0.01(3) = 0.81 + 0.18 + 0.27 + 0.03 = 1.29 \text{ bits per pair},$$

so **$0.645$ bits per original symbol** — down from $1.0$, and now only $1.38\times$ the entropy instead of $2.13\times$.

**Yes, it improved**, and the mechanism is worth naming: blocking $n$ symbols together lets the integer-length granularity be amortized over $n$ symbols, so the overhead falls from $<1$ bit per symbol to $<1/n$ bits per symbol. This is the standard fix, and taking $n \to \infty$ is one way to see why arithmetic coding reaches entropy.

**P3** (a) The theorem covers codes that are:

1. **prefix-free** (equivalently, uniquely decodable — by Kraft's inequality the achievable length-vectors are the same);
2. **symbol-by-symbol with integer lengths** — each symbol gets a whole number of bits;
3. **memoryless with respect to a fixed distribution** — the frequencies are given and fixed, and symbols are coded independently of context.

Within that class, Huffman attains the minimum expected length. The theorem says nothing about codes outside it.

(b)

| method | hypothesis violated | rough gain |
|---|---|---|
| **arithmetic coding** | (2), integer lengths — encodes the whole message as one number, spending effectively fractional bits | up to the $<1$ bit/symbol Huffman overhead; large when one symbol dominates (P2: $1.0 \to 0.469$, a 53% gain), negligible when the distribution is flat |
| **context model** | (3), memorylessness — conditions on preceding symbols, lowering the *entropy itself* | usually the biggest win on real data; English text drops from ~4.1 bits/char (order-0) to under 2 bits/char with a modest context model |
| **LZ77 back-references** | (3), and arguably the alphabet itself — replaces repeated substrings with (distance, length) pairs, changing what is being coded | very large on repetitive data; complementary to Huffman, which is why DEFLATE applies both |

None of these is a bug or "exploiting something outside the data." Each leaves the class the theorem is about.

(c) Take a highly skewed distribution, e.g.

$$P(A) = 0.95, \qquad P(B) = 0.05.$$

Huffman must give both symbols 1 bit, so $L = 1.0$. The entropy is

$$H = -0.95\log_2 0.95 - 0.05\log_2 0.05 = 0.0703 + 0.2161 = 0.286 \text{ bits},$$

giving a ratio of $1.0 / 0.286 = \mathbf{3.5\times}$ — well past $1.9$. (The $P(A)=0.9$ case from P2 already gives $2.13\times$.)

**The general condition:** Huffman is inefficient when the entropy is **much less than 1 bit per symbol**, which happens when one symbol has probability close to 1. The absolute overhead is bounded by $<1$ bit per symbol; that is negligible when $H$ is 4 or 5 bits and catastrophic when $H$ is 0.3. More precisely, the ratio $L/H$ is at worst about $1 + 1/H$, so the danger zone is small $H$ — i.e. **small alphabets with skewed distributions**, exactly where you should reach for arithmetic coding or for blocking symbols as in P2(d).

</details>

## Flashback

**From Lesson 1.5 (Divide-and-conquer beyond sorting):** Give the $\Theta$ class for each and name the lever that produced it.

(a) An algorithm splits an $n$-element problem into 2 halves and combines in $\Theta(n^2)$.
(b) The same, but a cleverer combine step runs in $\Theta(n)$.
(c) A matrix algorithm that does 6 products of $n/2$ blocks plus $\Theta(n^2)$ additions — better or worse than Strassen's 7?

<details>
<summary>Solution</summary>

(a) $T(n) = 2T(n/2) + \Theta(n^2)$. Watershed $n^{\log_2 2} = n$; $f(n) = n^2$ is polynomially larger. **Case 3** (regularity: $2(n/2)^2 = n^2/2 \le \tfrac12 f(n)$ ✓), so

$$T(n) = \Theta(n^2).$$

Root-dominated — the combine step is the entire cost.

(b) $T(n) = 2T(n/2) + \Theta(n)$. Watershed $n$, $f(n) = n$: they tie. **Case 2**, so

$$T(n) = \Theta(n\log n).$$

**The lever was $f$**, because case 3 says the root dominates: speeding up the combine is the only thing that helps, and it moved the whole algorithm from $n^2$ to $n\log n$. This is exactly the closest-pair story from [Lesson 1.5](01-05-divide-and-conquer-beyond-sorting.md).

(c) $T(n) = 6T(n/2) + \Theta(n^2)$. Watershed $n^{\log_2 6} \approx n^{2.585}$, which is polynomially larger than $f(n) = n^2$. **Case 1**, so

$$T(n) = \Theta\!\left(n^{\log_2 6}\right) = \Theta(n^{2.585}).$$

**Better than Strassen**, whose exponent is $\log_2 7 \approx 2.807$. **The lever was $a$** — in case 1 the leaves dominate, so only the number of subproblems matters and the $\Theta(n^2)$ additions are free.

(No such 6-multiplication algorithm for $2\times2$ blocks exists — Winograd proved 7 is optimal for $2\times2$ — but the arithmetic shows exactly what one would be worth, and that is how the search for better matrix-multiplication exponents is framed.)

</details>

## Connections

- **Backward:** both lemmas are exchange arguments in the [Lesson 2.1](02-01-the-greedy-method-and-interval-scheduling.md) style — modify an optimum toward greedy without making it worse. The tree is a rooted binary tree from [discrete-mathematics 5.3](../../discrete-mathematics/lessons/05-03-trees-and-graph-coloring.md), and the depth-versus-leaf-count reasoning is the same as [Lesson 1.4's](01-04-sorting-and-the-comparison-lower-bound.md) decision tree — there bounding height from below, here minimizing weighted depth.
- **Forward:** Lesson 2.3's cut property is the third exchange argument in a row, and by then the pattern should be automatic. The priority queue used here is built and analysed in Lesson 3.3 for Dijkstra.
- **Sideways:** the entropy bound $H \le L < H+1$ is Shannon's source-coding theorem from [information-theory](../../information-theory/syllabus.md), where entropy is defined and the lower bound proved; this lesson supplies the constructive upper half. The decision-tree lower bound of [Lesson 1.4](01-04-sorting-and-the-comparison-lower-bound.md) is the same counting idea — a comparison yields one bit, a codeword bit carries one bit, and in both cases you divide the total information needed by the information per step.

# Deep Learning · Lesson 1.2: Universal approximation

> ⏱ ~15 min · Module 1: Neural nets, backpropagation & training · Builds on: [1.1 (from linear models to the MLP)](01-01-from-linear-models-to-the-mlp.md), [`statistical-learning` 5.4 (neural networks as a hypothesis class)](../../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md) · Unlocks: [1.3 (backpropagation and automatic differentiation)](01-03-backpropagation-and-automatic-differentiation.md)

## Why this matters

"A neural network with one hidden layer can approximate any continuous function." It is the most quoted theorem in the field and the most misread.

[`statistical-learning` 5.4](../../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md) owns the theorem and its three silences — that it says nothing about how many units, nothing about whether training finds them, and nothing about generalization. That analysis is not repeated here. Open [its card](../../statistical-learning/reference.md) if the statement is cold.

This lesson asks the question a practitioner has instead: **if one hidden layer suffices in principle, why is every network you will ever build deep?** The answer is a proved separation. There are functions a depth-$k$ network computes with a few dozen units that any one-hidden-layer network needs exponentially many units to match. Depth is not a heuristic preference; it buys something width cannot.

## The idea

First, why one layer is enough in principle, constructively and in one dimension.

Take two ReLUs with different offsets and subtract: $\mathrm{ReLU}(x-1) - \mathrm{ReLU}(x-2)$ rises from 0 to 1 between $x=1$ and $x=2$ and then stays at 1. Subtract a second such pair further along and it comes back down. Four ReLUs, one bump. Place bumps wherever you like, scale each by the function's height there, and sum. **Any continuous function on an interval is a sum of enough bumps**, and a single hidden layer can hold all of them side by side.

Now the catch, and it is the one that matters. To cover $[0,1]^{d}$ with bumps of side $\epsilon$ you need about $(1/\epsilon)^{d}$ of them. At $d=10$ and $\epsilon = 0.1$ that is $10^{10}$ units. **The theorem is true and the construction is useless**, because the number of pieces needed to tile a space grows exponentially with its dimension.

So what does depth do differently? It **composes** rather than adds.

Here is the construction that makes it concrete. Let $g$ be the triangle map on $[0,1]$: it rises from 0 to 1 over the first half and falls back over the second. It is three ReLUs. Now feed $g$'s output into another copy of $g$. Each half of the input interval gets stretched across the full range of the second triangle, so **the composite has two teeth instead of one**. Compose again: four teeth. After $k$ layers: $2^{k-1}$ teeth and $2^{k}$ linear pieces, from $3k$ units.

A single hidden layer of $m$ ReLU units is piecewise linear with at most $m+1$ pieces, so matching that function needs at least $2^{k}-1$ units. At $k=10$: **30 units with depth, 1,023 without**. At $k=20$: 60 against about a million.

The mechanism is worth naming, because it recurs everywhere in this course. **Addition accumulates features linearly in the parameter count; composition multiplies them.** Convolutional stacks grow their receptive field the same way ([2.2](02-02-building-a-convolutional-network.md)), and transformer depth compounds attention the same way ([3.6](03-06-full-transformer-architectures.md)).

## The formal version

> **Universal approximation theorem (statement only).** Let $\phi$ be a non-polynomial continuous activation. For any continuous $f$ on a compact $K \subset \mathbb{R}^{d}$ and any $\epsilon > 0$, there exist a width $m$ and parameters such that the one-hidden-layer network $\hat f(x) = \sum_{i=1}^{m} c_i\,\phi(w_i^{\top}x + b_i)$ satisfies $\sup_{x \in K}|f(x) - \hat f(x)| < \epsilon$.

In words: wide enough, one hidden layer gets as close as you like. **The theorem is existential in $m$**, and what it does and does not license is worked out in [`statistical-learning` 5.4](../../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md).

> **Linear-region count (one dimension).** A one-hidden-layer ReLU network of width $m$ on a scalar input is continuous piecewise linear with at most $m+1$ pieces, since each unit contributes at most one breakpoint at $w_i x + b_i = 0$.

> **The triangle map.** $g(x) = 2\,\mathrm{ReLU}(x) - 4\,\mathrm{ReLU}(x - \tfrac12) + 2\,\mathrm{ReLU}(x-1)$, which on $[0,1]$ equals $2x$ up to $\tfrac12$ and $2-2x$ after.

Check the corners: $g(0)=0$, $g(\tfrac12)=1$, $g(1)=0$, and $g(\tfrac14) = \tfrac12$.

> **Depth separation (Telgarsky).** Let $g^{(k)}$ be $g$ composed with itself $k$ times. Then $g^{(k)}$ has $2^{k}$ linear pieces on $[0,1]$ and is computed by a network of depth $k$ with $3$ units per layer, so $3k$ units in total. Any one-hidden-layer ReLU network matching it requires at least $2^{k}-1$ units.

In words: **the cost of the function is linear in depth and exponential in width.** This is a theorem about representation, proved by counting pieces, and it is the rigorous form of "deep is better".

| $k$ | pieces $2^{k}$ | units at depth $k$ | units at depth 1 |
|---|---|---|---|
| 3 | 8 | 9 | 7 |
| 10 | 1,024 | 30 | 1,023 |
| 20 | 1,048,576 | 60 | 1,048,575 |

> **Region growth in higher dimensions.** For a ReLU network on $d$ inputs with $L$ hidden layers of width $n$, the number of linear regions can grow like $\big(n/d\big)^{d(L-1)} n^{d}$ — polynomial in width, **exponential in depth**.

> **The curse of dimensionality.** Approximating a Lipschitz $f$ on $[0,1]^{d}$ to uniform accuracy $\epsilon$ by a bump construction needs on the order of $(1/\epsilon)^{d}$ units.

Three cautions on how much any of this proves.

**Region counts are an upper bound on expressiveness, not a measure of it.** A network can have $10^{9}$ available regions and use them to represent something trivial.

**Separation results exhibit particular functions.** They show *some* function is exponentially cheaper with depth; they do not show that the function you care about is.

**None of this is about learnability.** Every statement here says a set of weights exists. Whether gradient descent finds it is the subject of the rest of the module, and whether the result generalizes is the subject of [`statistical-learning` 5.5](../../statistical-learning/lessons/05-05-why-does-deep-learning-generalize.md), whose honest answer is that nobody knows.

## Picture

![Two panels. On the left, four dashed ramps are the individual ReLU units and a solid blue curve is their sum, a single bump rising from one to two, flat from two to three, and falling back by four; a caption notes that in d dimensions the number of bumps needed is one over epsilon to the power d. On the right, three curves over the unit interval show the triangle map, then the map composed with itself giving two teeth, then composed three times giving four teeth; captions give the piece counts as two, four and eight and note that a single hidden layer needs at least two-to-the-k minus one units to match.](assets/01-02-fig1.svg)

The two panels are the two strategies, drawn to the same scale. **On the left, each new feature costs new units.** On the right, each new layer **doubles** what the previous layers built, at a fixed cost of three units.

That is the entire argument for depth in one image. The left panel is what the universal approximation theorem constructs, and it is why the theorem is true. The right panel is why nobody builds networks that way.

## Worked examples

**Example 1 — building the bump, and pricing it in higher dimensions.**

Define $b(x) = \mathrm{ReLU}(x-1) - \mathrm{ReLU}(x-2) - \mathrm{ReLU}(x-3) + \mathrm{ReLU}(x-4)$ and evaluate:

| $x$ | 0 | 1 | 1.5 | 2 | 3 | 3.5 | 4 | 5 |
|---|---|---|---|---|---|---|---|---|
| $b(x)$ | 0 | 0 | 0.5 | 1 | 1 | 0.5 | 0 | 0 |

Check $x = 3.5$ by hand: $\mathrm{ReLU}(2.5) - \mathrm{ReLU}(1.5) - \mathrm{ReLU}(0.5) + \mathrm{ReLU}(-0.5) = 2.5 - 1.5 - 0.5 + 0 = 0.5$. A trapezoidal bump from four units, as claimed, and the fourth unit is what brings it back to zero rather than leaving it climbing.

Now price the general construction. To approximate a function on $[0,1]^{d}$ to accuracy $\epsilon$, tile the cube with cells of side $\epsilon$ and put a bump on each:

$$\#\text{cells} = \left(\frac{1}{\epsilon}\right)^{d}.$$

| $d$ | $\epsilon = 0.1$ | $\epsilon = 0.01$ |
|---|---|---|
| 1 | 10 | 100 |
| 3 | 1,000 | $10^{6}$ |
| 10 | $10^{10}$ | $10^{20}$ |
| 100 | $10^{100}$ | $10^{200}$ |

A $224 \times 224$ colour image has $d \approx 150{,}000$. **The bump construction is not merely impractical at that dimension; the numbers are not physical.** Yet networks learn on such inputs with $10^{8}$ parameters, which tells you they are exploiting structure — locality, compositionality, low intrinsic dimension — rather than tiling the space. Finding architectures that encode that structure is what Modules 2 and 3 are about.

**Example 2 — the separation, counted explicitly.**

Take $k = 3$. The depth-3 network is $g \circ g \circ g$, using 3 units per layer, so **9 units and 12 weights plus 9 biases**. Its output on $[0,1]$ has $2^{3} = 8$ linear pieces and 4 teeth.

Verify one value. $g(0.3) = 0.6$; $g(0.6) = 2 - 1.2 = 0.8$; $g(0.8) = 2 - 1.6 = 0.4$. So $g^{(3)}(0.3) = 0.4$. Two very close inputs land far apart after three compositions, which is exactly what "many teeth" means.

Now the shallow requirement. A one-hidden-layer ReLU network of width $m$ has at most $m+1$ linear pieces, so to produce 8 pieces it needs $m \ge 7$. At $k=3$ the comparison is 9 units against 7 — **the shallow net actually wins**, which is worth noticing rather than hiding. The separation is asymptotic.

Follow it out:

$$\text{depth}: 3k \quad \text{versus} \quad \text{width}: 2^{k}-1.$$

They cross at $k = 4$ (12 against 15), and after that the gap explodes: at $k = 10$ it is 30 against 1,023, and at $k = 20$ it is 60 against 1,048,575. **Linear against exponential always looks unimpressive until it does not**, and the practical regime for real networks is far past the crossover.

One honest caveat. This particular function is a sawtooth, chosen because its piece count is easy to prove. Nobody needs to approximate a sawtooth. What the theorem establishes is that the *class* of functions cheap for deep nets and expensive for shallow ones is non-empty — which refutes "depth is only a convenience" without establishing that your problem lives in that class.

## Watch out

- You might think universal approximation makes architecture choice unimportant. It makes it *maximally* important: every architecture is universal, so the only thing distinguishing them is how many parameters and how much data they need, which is where all the engineering lives.
- You might think more linear regions means a better network. Region count is capacity, not quality — and by [`statistical-learning` 5.5](../../statistical-learning/lessons/05-05-why-does-deep-learning-generalize.md) capacity counts have failed comprehensively as predictors of how a deep network actually performs.
- You might think depth is always better. Beyond a point it is not: deeper nets are harder to optimise, and the entire content of [2.3](02-03-deep-architectures-and-residual-connections.md) is that plain deep stacks *degrade* until residual connections rescue them. The representation argument says depth is worth wanting; it does not say it is free.

## One-liner

> One hidden layer can approximate anything by summing bumps, and needs exponentially many of them; depth composes instead of sums, turning an exponential width into a linear depth.

## Problems

**P1 (🟢)** Using only ReLU units, write a one-hidden-layer network computing a bump that is 0 for $x \le 2$, rises linearly to height 3 at $x = 4$, stays at 3 until $x = 7$, and falls linearly back to 0 at $x = 9$. Give the four units with their weights and offsets, and the output weights. Verify your answer at $x = 3$ and $x = 8$.

**P2 (🟡)** A one-hidden-layer ReLU network of width $m$ takes a scalar input. (a) Give the maximum number of linear pieces its output can have, with a one-line reason. (b) A team needs to fit a function with 500 distinct linear pieces. Give the minimum width of a one-hidden-layer network, and the depth of a network built from the triangle map $g$ that produces at least that many pieces, along with its total unit count. (c) State which of the two you would build and one risk of that choice.

**P3 (🔴, optional)** A colleague argues: "universal approximation says one hidden layer suffices, and the depth-separation theorem exhibits one contrived sawtooth, so in practice depth is just a convenience." (a) State precisely what the separation theorem establishes and what it does not. (b) Give the strongest *empirical* fact from this course that argues against the colleague, and name the lesson it comes from. (c) Give the strongest point in the colleague's favour, being specific about what depth costs.

<details>
<summary>Solutions</summary>

**P1** The bump has breakpoints at $2, 4, 7, 9$ and height 3, with ramps of horizontal length 2 on each side, so each ramp has slope $3/2 = 1.5$.

$$b(x) = 1.5\,\mathrm{ReLU}(x-2) - 1.5\,\mathrm{ReLU}(x-4) - 1.5\,\mathrm{ReLU}(x-7) + 1.5\,\mathrm{ReLU}(x-9).$$

The four hidden units are $\mathrm{ReLU}(x - 2)$, $\mathrm{ReLU}(x-4)$, $\mathrm{ReLU}(x-7)$, $\mathrm{ReLU}(x-9)$ — each with input weight 1 and biases $-2, -4, -7, -9$ — and the output weights are $(1.5, -1.5, -1.5, 1.5)$ with output bias 0.

Verify at $x = 3$: only the first unit is active, giving $1.5(1) = 1.5$. The target is halfway up a ramp from 0 to 3, so 1.5 is correct.

Verify at $x = 8$: the first three units are active, giving $1.5(6) - 1.5(4) - 1.5(1) = 9 - 6 - 1.5 = 1.5$. The target at $x=8$ is halfway down the falling ramp from 3 to 0, so 1.5 again. Correct.

The pattern generalises: **each breakpoint costs exactly one unit**, and the output weight at each is the *change* in slope there.

**P2** (a) At most $m + 1$ pieces. Each unit $\mathrm{ReLU}(w_i x + b_i)$ contributes one breakpoint, at $x = -b_i/w_i$, and the output is a linear combination of the units plus a bias, so it is linear between consecutive breakpoints. With $m$ breakpoints the line is cut into $m+1$ segments. (Units can share a breakpoint, which only reduces the count.)

(b) *Width:* $m + 1 \ge 500$ gives $m \ge 499$ units.

*Depth:* $g^{(k)}$ has $2^{k}$ pieces, so $2^{k} \ge 500$ gives $k \ge 9$, since $2^{9} = 512$. At 3 units per layer that is $27$ units across 9 layers.

So **499 units shallow against 27 units deep**, a factor of about 18.

(c) I would build the **deep** one for the parameter saving, and the risk is optimization rather than representation: a 9-layer plain stack has nine activation derivatives between the loss and the first layer, so it is exposed to the vanishing-gradient behaviour of [1.1](01-01-from-linear-models-to-the-mlp.md) and needs careful initialization ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)), possibly normalization ([1.6](01-06-normalization.md)), and quite possibly residual connections ([2.3](02-03-deep-architectures-and-residual-connections.md)) to train at all.

The honest framing: **the theorem says the deep network can represent the function with 27 units; it says nothing about whether gradient descent will find those 27 units.** The wide network is bigger and easier to optimise. That trade is the real content of the choice, and it is why the answer changes with depth — at $k=3$, as Example 2 shows, the shallow net is simply better.

**P3** (a) The separation theorem establishes that there **exists** a family of functions — the $k$-fold compositions of the triangle map — computed by depth-$k$ networks with $O(k)$ units, for which any depth-1 network needs $\Omega(2^{k})$ units. That is an existence statement about the function class, proved by counting linear pieces, and it is airtight.

It does **not** establish that functions of practical interest lie in that family, that depth helps on any particular dataset, or anything at all about optimization or generalization. Two statements that go beyond it and are false as stated: "deep networks are more expressive than shallow ones" (both are universal) and "depth always reduces the parameters needed" (at $k=3$ it does not).

(b) The strongest empirical fact is the **residual-network result** from [2.3](02-03-deep-architectures-and-residual-connections.md): plain deep stacks reach a depth past which *training* error gets worse when layers are added — which cannot be a representation problem, since the deeper net can express everything the shallower one can by setting the extra layers to the identity. Adding skip connections and nothing else then lets networks of 50, 101 and 152 layers train and improve monotonically with depth.

That result is decisive against "depth is just a convenience" in a way no theorem here is, because it shows depth delivering real gains on real data at scales where a shallow equivalent is not built and would not be competitive. The complementary fact is [2.2](02-02-building-a-convolutional-network.md)'s receptive-field growth: depth is *how* a convolutional network sees more than a small patch, and no width can substitute.

(c) The colleague's strongest point is that **depth is not free, and its cost is optimization.** Every layer adds a factor to the gradient's product ([1.1](01-01-from-linear-models-to-the-mlp.md)), so deep networks need initialization schemes, normalization layers and architectural skip paths that exist purely to make training possible — none of which a shallow network needs. Depth also forces sequential computation: a $k$-layer forward pass has $k$ dependent steps and cannot be parallelised across layers, so deep models are latency-bound at inference in a way wide models are not.

A fair summary: depth buys representation efficiency that is provable and large, and charges for it in optimization difficulty that is real and was the field's central obstacle for two decades. Modules 1 and 2 are largely the story of paying that bill.

</details>

## Flashback

**From Lesson 1.1 (from linear models to the MLP):** A network is $784 \to 512 \to 512 \to 512 \to 10$ with ReLU activations. (a) Compute its total parameter count and the fraction held by the first layer. (b) A colleague proposes replacing all three hidden layers with a single hidden layer holding the same total number of hidden units, $1536$. Compute that network's parameter count and state which is larger and why.

<details>
<summary>Solution</summary>

(a) Layer by layer:

$$(784)(512) + 512 = 401{,}920, \quad (512)(512)+512 = 262{,}656 \ \text{(twice)}, \quad (512)(10)+10 = 5{,}130.$$

Total: $401{,}920 + 262{,}656 + 262{,}656 + 5{,}130 = 932{,}362$.

The first layer's share is $401{,}920 / 932{,}362 = 43$ percent.

(b) The single-hidden-layer net $784 \to 1536 \to 10$:

$$(784)(1536) + 1536 + (1536)(10) + 10 = 1{,}204{,}224 + 1{,}536 + 15{,}360 + 10 = 1{,}221{,}130.$$

**The shallow net is larger**, by about 31 percent, despite having the same number of hidden units.

The reason is the product rule of [1.1](01-01-from-linear-models-to-the-mlp.md): a layer costs $d_{\text{in}} \times d_{\text{out}}$, so putting all 1,536 units in one layer makes every one of them pay the full 784-dimensional input, at a cost of $784 \times 1536$. Splitting them into three layers of 512 means only the first 512 pay that price, and the other 1,024 units connect to a 512-dimensional input instead, which is 35 percent as expensive per unit.

**Depth is cheaper per unit whenever the input is wider than the hidden layers** — and by this lesson's separation result it is also more expressive. That combination, not either fact alone, is why the deep architecture is the default.

</details>

## Connections

- **Backward:** the bump construction is built from the ReLU of [1.1](01-01-from-linear-models-to-the-mlp.md), and the theorem's statement, its three silences and its place in the excess-risk decomposition belong to [`statistical-learning` 5.4](../../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md).
- **Forward:** the compositional argument reappears as receptive-field growth in [2.2](02-02-building-a-convolutional-network.md) and as the depth of a transformer stack in [3.6](03-06-full-transformer-architectures.md); the optimization bill that depth runs up is paid in [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md), [1.6](01-06-normalization.md) and [2.3](02-03-deep-architectures-and-residual-connections.md).
- **Sideways:** the piece-counting argument is a combinatorial bound of the kind used in [`statistical-learning` 3.3](../../statistical-learning/lessons/03-03-shattering-and-the-vc-dimension.md) for shattering, and the curse of dimensionality is the same volume-concentration fact that makes nearest-neighbour methods fail in high dimensions.

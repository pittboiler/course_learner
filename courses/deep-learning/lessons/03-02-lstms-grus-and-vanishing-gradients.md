# Deep Learning · Lesson 3.2: LSTMs, GRUs & vanishing gradients

> ⏱ ~15 min · Module 3: Sequence models & attention · Builds on: [3.1 (RNNs and backprop through time)](03-01-rnns-and-backprop-through-time.md), [2.3 (deep architectures and residual connections)](02-03-deep-architectures-and-residual-connections.md) · Unlocks: [3.3 (seq2seq and the attention mechanism)](03-03-seq2seq-and-the-attention-mechanism.md)

## Why this matters

[3.1](03-01-rnns-and-backprop-through-time.md) left a hard number: a gradient travelling $k$ steps back through a recurrence is multiplied by $\|W_h\|^{k}$, so at a realistic $0.85$ and $k = 100$ it arrives as $8.7\times10^{-8}$. Dependencies beyond a few dozen steps are not learnable.

The fix is the same idea that rescued deep convolutional networks in [2.3](02-03-deep-architectures-and-residual-connections.md), applied along a different axis. **Replace the multiplicative update with an additive one**, and give the gradient a path it can travel without being multiplied by a learned matrix at every step.

In a residual network that path is $y = x + F(x)$. In an LSTM it is a **cell state** that is scaled by a gate and added to, and whose Jacobian is a diagonal of numbers the network chooses to keep near 1. That one structural change pushed usable memory from tens of steps to hundreds, and gated RNNs dominated sequence modelling for two decades.

## The idea

Keep a second vector alongside the hidden state: the **cell state**, which is the model's long-term memory. Its update rule is the whole design:

$$c_t = f_t \odot c_{t-1} + i_t \odot \tilde c_t.$$

Read it as: **keep some of what you had, add some of what is new.** The vector $f_t$, the **forget gate**, says per coordinate how much of the old cell state to retain; $i_t$, the **input gate**, says how much of the freshly computed candidate to write.

Both gates are sigmoids, so each coordinate is a number in $(0,1)$ that the network computes from the current input and hidden state. They are not hyperparameters — the model decides, per step and per coordinate, what to remember and what to overwrite.

Now differentiate. Along the cell path,

$$\frac{\partial c_t}{\partial c_{t-1}} = \operatorname{diag}(f_t).$$

**No weight matrix.** In a plain RNN this derivative was $\operatorname{diag}(\phi')W_h$, a full matrix whose repeated product decays geometrically at whatever rate $\|W_h\|$ dictates. Here it is an elementwise multiplication by numbers the network controls, and if it sets $f_t \approx 1$ for a coordinate, that coordinate's gradient passes through essentially untouched.

The hidden state is then read out of the cell through a third gate: $h_t = o_t \odot \tanh(c_t)$. The **output gate** decides what part of the memory to expose at this step, which lets the network hold something for later without acting on it now.

The **GRU** simplifies: no separate cell state, and the forget and input gates are tied into one, $h_t = (1-z_t)\odot h_{t-1} + z_t \odot \tilde h_t$. Three gates instead of four, 25 percent fewer parameters, and comparable performance on most tasks.

What this does **not** fix: the computation is still strictly sequential, and the memory is still finite — hundreds of steps, not thousands. Both limits are why [3.3](03-03-seq2seq-and-the-attention-mechanism.md) and [3.4](03-04-self-attention-queries-keys-values.md) happened.

## The formal version

> **LSTM.** With $[h_{t-1}, x_t]$ the concatenation of the previous hidden state and current input,
> $$f_t = \sigma(W_f[h_{t-1},x_t] + b_f), \qquad i_t = \sigma(W_i[h_{t-1},x_t] + b_i),$$
> $$o_t = \sigma(W_o[h_{t-1},x_t] + b_o), \qquad \tilde c_t = \tanh(W_c[h_{t-1},x_t] + b_c),$$
> $$c_t = f_t \odot c_{t-1} + i_t \odot \tilde c_t, \qquad h_t = o_t \odot \tanh(c_t).$$

Four gates, four weight matrices, each of shape $d \times (d+n)$.

> **Gradient along the cell path.**
> $$\frac{\partial c_T}{\partial c_t} = \prod_{k=t+1}^{T}\operatorname{diag}(f_k),$$
> so the attenuation over $k$ steps is $\prod f$ coordinatewise rather than $\|W_h\|^{k}$.

| forget gate value | over 100 steps | over 1,000 steps |
|---|---|---|
| 0.85 (a plain RNN's typical $\|W_h\|$) | $8.7\times10^{-8}$ | $2.6\times10^{-71}$ |
| 0.95 | $5.9\times10^{-3}$ | $5.3\times10^{-23}$ |
| 0.99 | 0.37 | $4.3\times10^{-5}$ |
| 0.999 | 0.90 | 0.37 |

**The point is not that decay is eliminated — it is that the base is learnable.** A plain RNN's base is a property of a matrix that also has to do the computing; an LSTM's base is a gate the network sets per coordinate, and it can set some coordinates near 1 for long-term memory while others turn over quickly. Comparing the first two rows: $0.95^{100}/0.85^{100} \approx 68{,}000$.

> **Forget-gate bias initialization.** Initialize $b_f$ to 1 or 2 rather than 0, so $\sigma(b_f) \approx 0.73$ or $0.88$ and the cell starts out **remembering** rather than forgetting.

With $b_f = 0$ the gate starts at $\sigma(0) = 0.5$, giving $0.5^{100} = 10^{-30}$ over a hundred steps — a gradient that is gone before training has had a chance to learn that it should be kept. This is the direct analogue of [2.3](02-03-deep-architectures-and-residual-connections.md)'s zero-initialized residual branch: **start the model in the configuration that preserves signal, and let it learn to deviate.**

> **GRU.**
> $$z_t = \sigma(W_z[h_{t-1},x_t]), \quad r_t = \sigma(W_r[h_{t-1},x_t]), \quad \tilde h_t = \tanh(W[r_t \odot h_{t-1}, x_t]),$$
> $$h_t = (1-z_t)\odot h_{t-1} + z_t \odot \tilde h_t.$$

The coupling $(1-z, z)$ is the simplification: what is not kept is exactly what is written, so the state's scale is naturally bounded.

> **Parameter counts.** With input dimension $n$ and hidden dimension $d$, and writing $P = dn + d^{2} + d$ for one plain recurrent layer:

| Model | Parameters | At $n=256$, $d=512$ |
|---|---|---|
| RNN | $P$ | 393,728 |
| GRU | $3P$ | 1,181,184 |
| LSTM | $4P$ | 1,574,912 |

> **Gradient clipping** remains necessary. Gating fixes vanishing, not explosion — the candidate path still contains weight matrices, and clipping the global gradient norm at 1 or 5 is standard practice for all recurrent models.

> **Limits that remain.** The computation is sequential in $T$, so it cannot be parallelised across time. And empirically the usable dependency range is hundreds of steps, not the thousands a document or a long audio clip requires.

## Picture

![A horizontal thick line running the width of the diagram represents the cell state passing from the previous step to the next. Two operations sit on it: a multiplication node fed from below by the forget gate, and an addition node fed from below by the product of the input gate and the candidate. A branch leaves the line on the right, passes through a tanh and the output gate, and becomes the hidden state. Annotations state that the Jacobian along the line is the diagonal of the forget gate, with no weight matrix, and compare the hundred-step attenuation at a forget gate of 0.95 against a plain recurrent network at 0.85.](assets/03-02-fig1.svg)

Follow the thick line from left to right and count what happens to it: **one elementwise multiply, one add.** That is all. No weight matrix touches the cell state directly; the matrices live in the branches that compute the gates and the candidate.

That is why the gradient survives. Travelling the line backwards, it is scaled by $f_t$ at each step and nothing else — and $f_t$ is a number the network chose, which it can set near 1 wherever it wants a long memory. Compare [2.3](02-03-deep-architectures-and-residual-connections.md)'s figure: the thick line there was the identity path, multiplied by exactly 1. Here it is multiplied by a learned gate, which is slightly weaker and considerably more flexible.

## Worked examples

**Example 1 — one LSTM step by hand.**

Take $d = 1$ for clarity. Previous cell state $c_{t-1} = 2.0$, and the gates evaluate to $f_t = 0.9$, $i_t = 0.4$, $o_t = 0.6$, with candidate $\tilde c_t = -1.5$.

$$c_t = f_t c_{t-1} + i_t \tilde c_t = 0.9(2.0) + 0.4(-1.5) = 1.8 - 0.6 = 1.2.$$

$$h_t = o_t \tanh(c_t) = 0.6\tanh(1.2) = 0.6(0.8337) = 0.5002.$$

Now the gradient. Suppose the loss's derivative with respect to $c_t$ is $\bar c_t = 1$. Then along the cell path

$$\bar c_{t-1} = f_t \cdot \bar c_t = 0.9.$$

Ten percent lost in one step. Over 100 steps at this rate, $0.9^{100} = 2.7\times10^{-5}$ — better than a plain RNN but still not enough for very long dependencies, which is why a trained LSTM pushes its forget gates much closer to 1 on the coordinates it uses for long-term memory.

**The important structural point is what did not appear in $\bar c_{t-1}$**: no $W$. The gradient travelling the cell path is scaled by a scalar the network chose, and that is the entire difference from [3.1](03-01-rnns-and-backprop-through-time.md).

**Example 2 — why the forget-gate bias initialization matters.**

Two LSTMs, identical except for $b_f$. Both must learn a dependency at distance 150.

*With $b_f = 0$.* At initialization the gate inputs are near zero, so $f \approx \sigma(0) = 0.5$. The gradient from step 150 back to step 0 is scaled by

$$0.5^{150} = 7 \times 10^{-46}.$$

That is zero in any floating-point format. **The model receives no signal at all that the distant token matters**, so it never learns to raise the forget gate, so the gradient never arrives — a self-sustaining failure.

*With $b_f = 2$.* Now $f \approx \sigma(2) = 0.881$ at initialization, and

$$0.881^{150} = 5.6\times10^{-9}.$$

Still small, but it is a *number*: the gradient is representable, the long-range dependency contributes, and as training proceeds the model can push those gates higher, which makes the signal stronger, which reinforces the behaviour. At $f = 0.99$ the same distance gives $0.22$.

**The lesson generalises well beyond LSTMs.** Whenever a model has a knob that controls how well gradient flows, initialize it to the signal-preserving setting rather than to the neutral one — the network can learn to close it, but it cannot learn to open something it never receives gradient through. Zero-initialized residual branches ([2.3](02-03-deep-architectures-and-residual-connections.md)) and He initialization ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)) are the same principle.

## Watch out

- You might think gating eliminates vanishing gradients. It replaces an *uncontrollable* decay rate, set by a weight matrix that also has to compute, with a *learnable* one set by a gate. Decay still happens; the network gets to choose where.
- You might think an LSTM removes the need for gradient clipping. It does not — the candidate and gate branches still contain weight matrices, and exploding gradients remain routine in recurrent models. Clip.
- You might think LSTMs solved long-range modelling. They extended the range from tens to hundreds of steps and left the sequential-computation problem entirely untouched. Both limits are why attention replaced them.

## One-liner

> Give the state an additive highway scaled by a learned gate instead of a weight matrix, and the gradient's decay rate becomes something the network chooses rather than something the architecture imposes.

## Problems

**P1 (🟢)** An LSTM has input dimension $n = 128$ and hidden dimension $d = 256$. (a) Give the parameter count of one plain recurrent layer with these dimensions, and of the LSTM. (b) Give the GRU's count. (c) State the ratio of LSTM to GRU and what the extra parameters buy.

**P2 (🟡)** A trained LSTM has forget gates averaging $0.97$ on the coordinates used for long-term memory. (a) Give the gradient attenuation at distances 100, 300 and 1,000. (b) State the longest dependency you would expect it to learn, taking $10^{-3}$ as the threshold at which a gradient is still usable. (c) Compare with a plain RNN at $\|W_h\| = 0.9$ on the same threshold.

**P3 (🔴, optional)** A team reports that their LSTM language model handles dependencies of about 200 tokens but fails on a task requiring reference back 3,000 tokens, and proposes stacking four LSTM layers to fix it. (a) Evaluate the proposal in terms of what stacking changes and what it does not. (b) Give the forget-gate value that would be needed for a usable gradient at distance 3,000 and say whether it is attainable. (c) Name the architectural change that actually solves this and state its cost.

<details>
<summary>Solutions</summary>

**P1** (a) One plain recurrent layer: $P = dn + d^{2} + d = 256(128) + 256^{2} + 256 = 32{,}768 + 65{,}536 + 256 = \mathbf{98{,}560}$.

The LSTM has four such gate computations: $4P = \mathbf{394{,}240}$.

(b) The GRU has three: $3P = \mathbf{295{,}680}$.

(c) The ratio is $4/3 \approx 1.33$ — the LSTM uses 33 percent more parameters.

What the extra buys: a **separate cell state and output gate.** The GRU's single update gate ties "how much to forget" to "how much to write" as $(1-z, z)$, while the LSTM sets them independently, so it can add new information without discarding old, or discard without adding. The output gate additionally lets the LSTM hold something in the cell without exposing it in $h_t$ — remembering without acting.

Empirically the difference is small on most tasks, and the GRU is often preferred for being cheaper and faster. The LSTM tends to win where the extra independence matters, typically very long sequences.

**P2** (a) Attenuation is $0.97^{k}$:

| Distance | Factor |
|---|---|
| 100 | $0.97^{100} = 4.8\times10^{-2}$ |
| 300 | $0.97^{300} = 1.1\times10^{-4}$ |
| 1,000 | $0.97^{1000} = 5.9\times10^{-14}$ |

(b) Setting $0.97^{k} = 10^{-3}$:

$$k = \frac{\ln 10^{-3}}{\ln 0.97} = \frac{-6.908}{-0.03046} \approx \mathbf{227 \text{ steps}}.$$

So roughly 200 to 250 steps, which matches the empirically reported range for LSTMs and is a good sanity check on the model.

(c) For a plain RNN at $0.9$:

$$k = \frac{-6.908}{\ln 0.9} = \frac{-6.908}{-0.1054} \approx \mathbf{66 \text{ steps}}.$$

**About 3.5 times shorter.** And $0.9$ is a generous figure for a plain RNN — at the more typical $0.85$ the range is 43 steps. The gating buys a factor of several in usable range, which was enough to change what tasks were possible and not enough to reach document scale.

**P3** (a) **Stacking does not address the problem.** Depth in a recurrent network stacks layers *at each time step*: layer 2's input at step $t$ is layer 1's output at step $t$. It increases the representational power per step and lets the model build hierarchical features, and it is generally worth doing.

But the **path from step $t$ to step $t+3000$ is still 3,000 recurrent steps long**, in every layer. Each layer independently attenuates by its own $\prod f$ over that distance, so stacking four layers does not shorten the temporal path — if anything the gradient must now survive the same 3,000 steps in whichever layer carries the dependency, with no help from the others. Depth and temporal distance are orthogonal axes, and the team is adding capacity along the wrong one.

(b) For a usable gradient at distance 3,000, taking $10^{-3}$ as the threshold:

$$f^{3000} = 10^{-3} \implies f = 10^{-3/3000} = 10^{-0.001} = \mathbf{0.9977}.$$

Is it attainable? **In principle yes, in practice no.** A sigmoid reaches 0.9977 at an input of $\sigma^{-1}(0.9977) \approx 6.1$, which a network can certainly produce. The problems are that the gate must stay above 0.9977 *at every one of the 3,000 steps* — a single step where it dips to 0.9 costs a tenth of the signal — and that the network must learn to do so from a gradient that is, before it has learned, far below the threshold. It is the bootstrapping failure of Example 2 at a scale where the initialization trick cannot bridge the gap.

There is also a capacity argument: a cell coordinate held at $f \approx 1$ for 3,000 steps is a coordinate that is not being used to compute anything, so long memory is bought directly out of the state's working capacity.

(c) The change that solves it is **attention** ([3.3](03-03-seq2seq-and-the-attention-mechanism.md), [3.4](03-04-self-attention-queries-keys-values.md)): give every position a direct, content-based connection to every other, so the gradient path between positions 0 and 3,000 has length **1** rather than 3,000. Distance stops appearing in the gradient at all.

The cost is quadratic. Attention computes a score for every pair of positions, so time and memory are $O(T^{2})$ against the RNN's $O(T)$. At $T = 3{,}000$ that is 9 million pairs per layer per head — expensive, but parallel, which is the trade that made it win: the RNN's $O(T)$ work is strictly sequential and the transformer's $O(T^{2})$ is not. Managing that quadratic cost at longer contexts is one of the field's active engineering problems.

</details>

## Flashback

**From Lesson 2.3 (deep architectures and residual connections):** Both the residual block and the LSTM cell give the gradient an easier path. (a) Write the Jacobian of each along that path. (b) State which is stronger and why. (c) State the corresponding initialization trick in each case and what it makes the block do at step zero.

<details>
<summary>Solution</summary>

(a) **Residual block**, $y = x + F(x)$:

$$\frac{\partial y}{\partial x} = I + \frac{\partial F}{\partial x}.$$

**LSTM cell**, $c_t = f_t\odot c_{t-1} + i_t\odot\tilde c_t$:

$$\frac{\partial c_t}{\partial c_{t-1}} = \operatorname{diag}(f_t) \ \ (\text{plus a smaller term through the gates' dependence on } h_{t-1}).$$

(b) **The residual connection is stronger.** Its identity term is exactly $I$ — a constant, unconditional, not learned and not able to degrade. Expanding the product over $L$ blocks always leaves an $I$ term ([2.3](02-03-deep-architectures-and-residual-connections.md)), so the gradient reaching the input is bounded below regardless of what the branches do.

The LSTM's factor is $\operatorname{diag}(f_t)$ with $f_t \in (0,1)$ — **strictly less than 1**, since a sigmoid never reaches its bounds. So the product $\prod_k f_k$ always decays; the network only controls how slowly. The gate can be pushed to 0.999 but not to 1.

The compensating advantage is **flexibility**: the LSTM chooses per coordinate and per step what to keep, so it can hold one thing for a thousand steps while overwriting another every step. A residual connection preserves everything unconditionally, which is the right default for depth and would be the wrong one for memory — a model that never forgets cannot use its state for anything current.

(c) **Residual:** initialize the final normalization of each branch with $\gamma = 0$, so $F(x) = 0$ and the block computes exactly $y = x$. At step zero the whole network is the identity, and depth is added as training proceeds.

**LSTM:** initialize the forget-gate bias $b_f$ to 1 or 2, so $f \approx 0.73$ or $0.88$ and the cell largely retains its state. At step zero the cell is close to a pure carry, and the network learns when to forget.

**Both make the block start in its signal-preserving configuration and learn to deviate**, which is the general principle: a model can learn to close a path it receives gradient through, and cannot learn to open one it does not.

</details>

## Connections

- **Backward:** the additive cell update is [2.3](02-03-deep-architectures-and-residual-connections.md)'s residual connection along the time axis, and the problem it solves is [3.1](03-01-rnns-and-backprop-through-time.md)'s matrix-power attenuation; the bias initialization is the same signal-preserving principle as [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)'s He scaling.
- **Forward:** [3.3](03-03-seq2seq-and-the-attention-mechanism.md) adds attention on top of an LSTM encoder–decoder and finds it helps enough to raise the question [3.4](03-04-self-attention-queries-keys-values.md) answers — whether the recurrence is needed at all.
- **Sideways:** the gated update $c_t = f c_{t-1} + (1-f)\tilde c_t$ with $f$ near 1 is an exponential moving average, the same first-order filter as [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)'s optimizer states and [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md)'s difference equations, with $1/(1-f)$ as its time constant — at $f = 0.97$ that is about 33 steps, which is the right order for the 227-step usable range computed in P2.

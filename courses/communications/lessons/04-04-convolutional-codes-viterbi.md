# Communication Systems · Lesson 4.4: Convolutional codes and Viterbi

> ⏱ ~15 min · Module 4: Capacity & Coding · Builds on: [4.3 Error-control coding: block codes](04-03-block-codes.md), [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md) · Unlocks: [4.5 Multiplexing and multiple access](04-05-multiplexing-multiple-access.md)

## Why this matters

[4.3](04-03-block-codes.md) delivered a disappointment: algebraic block codes with hard decisions return only 1–1.5 dB of the roughly 8 dB available. This lesson recovers most of the rest, using two ideas that turn out to matter more than the algebra.

**Memory.** Instead of chopping data into independent blocks, let the encoder remember the last few bits, so every output depends on a window of inputs. Protection then spreads continuously rather than stopping at block boundaries.

**Sequence decoding with soft inputs.** Instead of asking "what was this bit?", ask "what was the most likely *whole transmitted sequence*?" — and let the demodulator report confidences rather than decisions. The Viterbi algorithm answers that question exactly, in time linear in the sequence length, and the combination is worth about 5 dB. It flew on Voyager, it is in every 2G phone, every 802.11a/g link, and every hard-drive read channel.

## The idea

A convolutional encoder is a shift register. Bits go in one at a time; at each step the encoder outputs a couple of parity bits formed by XORing selected register taps. Because the register holds the last $K-1$ inputs, each output depends on a sliding window of $K$ inputs — hence "convolutional", and it really is a convolution over $\mathrm{GF}(2)$ with the tap patterns as impulse responses ([`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md), in binary).

The register contents are the encoder's **state**, so the encoder is a finite-state machine. Draw its states down a column, repeat that column once per time step, and connect each state to the two states it can reach — that picture is the [trellis](../reference.md#trellis-and-free-distance), and it is where the whole subject lives. Every possible message is one path through the trellis, and every path emits a specific output sequence.

Now decoding. The received sequence is some corrupted version of one of those paths. The maximum-likelihood decoder finds the path whose output is closest to what was received. Naively that means comparing $2^L$ paths for an $L$-bit message — hopeless.

Viterbi's observation, in 1967, is that you never need to. At any time step, for each state, only one of the paths arriving there can possibly be part of the best overall path — namely, the cheapest one so far. Every other path into that state can be discarded immediately and forever, because whatever happens later happens identically for all of them. So you keep one **survivor** per state, extend them one step at a time, and the work per step is constant. It is dynamic programming, and it converts an exponential search into a linear one.

The final ingredient is **soft decisions**. If the demodulator hands the decoder its raw matched-filter output rather than a thresholded bit, the path metric becomes a Euclidean distance instead of a Hamming distance, and near-threshold symbols stop being treated as confidently right. That alone is worth about 2 dB — the single best value in the whole receiver.

## The formal version

**Encoder.** A rate $k/n$ convolutional encoder takes $k$ bits per step and outputs $n$. **Constraint length** $K$ is the number of input bits influencing each output (register length plus one); the number of states is $2^{K-1}$ for $k=1$.

**Generator polynomials.** Each output stream is specified by which taps it sums. For the standard $K=3$, rate-1/2 encoder with generators $(7,5)$ in octal:

$$g^{(1)} = 111_2 = 7_8, \qquad g^{(2)} = 101_2 = 5_8,$$

meaning

$$v^{(1)}_i = u_i \oplus u_{i-1}\oplus u_{i-2}, \qquad v^{(2)}_i = u_i\oplus u_{i-2}.$$

*In words: one output is the sum of all three window bits, the other of the first and last.* Output at each step is the pair $(v^{(1)}_i, v^{(2)}_i)$, so the rate is 1/2. State is $(u_{i-1},u_{i-2})$ — four states.

The industry-standard $K=7$, rate-1/2 code (Voyager, GSM, 802.11) uses generators $(171, 133)_8$, giving 64 states.

**State table for the $(7,5)$, $K=3$ encoder:**

| State $(u_{i-1}u_{i-2})$ | Input 0 → next / out | Input 1 → next / out |
|---|---|---|
| 00 | 00 / 00 | 10 / 11 |
| 01 | 00 / 11 | 10 / 00 |
| 10 | 01 / 10 | 11 / 01 |
| 11 | 01 / 01 | 11 / 10 |

**Trellis.** States down the page, time across. Each state has two outgoing branches (input 0 and 1), each labelled with its output pair. A message of length $L$ is a path of length $L$; the encoder starts in state 00 and is usually **terminated** by feeding $K-1$ zeros to return it there.

**Free distance.** The convolutional analogue of $d_{\min}$:

$$d_{\rm free} = \min\ \text{weight of any nonzero path that leaves state 00 and returns}.$$

*In words: the smallest number of output bits that differ between two competing paths.* For the $(7,5)$ $K=3$ code, $d_{\rm free}=5$; for the $K=7$ $(171,133)$ code, $d_{\rm free}=10$. Bigger $K$ buys more distance, at the cost of $2^{K-1}$ states in the decoder — the exponential wall that caps practical $K$ around 7–9.

**Viterbi algorithm.** For each time step $i$ and each state $s$:

1. **Branch metric:** for each incoming branch, compute the distance between the branch's expected output and the received symbols. Hard decision → Hamming distance. Soft decision → squared Euclidean distance (or a correlation metric).
2. **Add:** path metric of the source state plus the branch metric.
3. **Compare and select:** keep the smaller; that path is the **survivor** for state $s$. Discard the other permanently.
4. **Traceback:** after the final step, follow the best survivor backwards to read out the decoded bits.

*In words: at every state, keep only the best way of getting there — because the future cannot distinguish between two paths that end in the same state.* Complexity is $O(L\cdot2^{K-1})$: linear in message length, exponential in constraint length.

Practical decoders do not wait for the end. A **traceback depth** of about $5K$ steps is enough for the survivors to have merged with overwhelming probability, so bits can be released continuously with fixed latency.

**Coding gain.** For soft-decision Viterbi decoding at high SNR,

$$G \approx 10\log_{10}\big(R\,d_{\rm free}\big)\ \text{dB},$$

and about 2 dB less with hard decisions.

| Code | $K$ | $R$ | $d_{\rm free}$ | States | Soft gain |
|---|---|---|---|---|---|
| $(7,5)$ | 3 | 1/2 | 5 | 4 | 4.0 dB |
| $(171,133)$ | 7 | 1/2 | 10 | 64 | 7.0 dB (≈5.2 dB realized at $10^{-5}$) |
| $(171,133)$ punctured | 7 | 3/4 | 5 | 64 | 5.7 dB (≈4 dB realized) |
| $(133,171,165)$ | 7 | 1/3 | 15 | 64 | 7.0 dB |

The asymptotic formula is optimistic; realized gains at $10^{-5}$ run 1–2 dB lower because the bound ignores the multiplicity of near-minimum-distance paths.

**Puncturing.** Deleting some coded bits according to a fixed pattern raises the rate without changing the encoder or decoder structure — the decoder simply assigns zero branch metric to the deleted positions. A rate-1/2 mother code punctured to 2/3, 3/4, 5/6, 7/8 gives a family sharing one implementation, which is how adaptive systems change code rate on the fly as the channel varies. Your Wi-Fi link does this every packet.

**Soft decisions, quantified.** The theoretical gain of unquantized soft decisions over hard is $10\log_{10}(\pi/2) = 1.96$ dB. **Three bits of quantization captures about 1.8 dB of that** — so eight levels, not a floating-point number, is all any decoder needs. This is one of the best-value facts in receiver design.

**Concatenation.** Viterbi output errors come in **bursts** (a path diverges and rejoins, corrupting a run of bits). Reed–Solomon codes are excellent at bursts. So: an outer RS code, an interleaver, an inner convolutional code. The RS decoder cleans up whatever the Viterbi decoder's bursts left. This concatenated structure was the CCSDS deep-space standard for decades and delivered about 7 dB — until turbo codes arrived in 1993 with 9 dB and re-set the whole field.

**What turbo and LDPC did differently.** Both use very long codes with *sparse* structure, decoded **iteratively**: two decoders exchange soft probabilistic estimates about each bit, each refining the other, converging over tens of iterations. Neither is maximum-likelihood — Viterbi still holds that title — but they operate on effective block lengths in the thousands, where ML decoding is impossible and near-ML iteration is enough. They land within 0.5 dB of Shannon, which is where the field has stayed since.

## Picture

![A two-part figure. Left: the four-state trellis for the K=3 rate-1/2 encoder, showing states 00, 01, 10, 11 down the page and five time steps across, with solid branches for input 0 and dashed for input 1, each labelled with its two output bits. Right: the Viterbi add-compare-select step at one state, showing two incoming paths with their accumulated metrics plus branch metrics, the smaller one kept as the survivor and the larger crossed out.](assets/04-04-fig1.svg)

Left: the trellis. Every possible message is a path through it; the encoder's output is written on the branches. Note that after the first two steps the pattern repeats — the trellis is **time-invariant**, which is why one small piece of hardware handles a message of any length.

Right: the one operation Viterbi does, over and over. Two paths arrive at a state with accumulated metrics; add each branch metric, compare, keep the smaller, discard the other **permanently**. That permanent discard is the whole algorithm: it is safe because everything downstream depends only on the state, not on how you got there.

## Worked examples

**Example 1 (encode, then decode by hand).** Use the $K=3$, rate-1/2 $(7,5)$ encoder. Encode $\mathbf{u} = (1,0,1,1)$ with two terminating zeros, then decode a corrupted version.

*Encoding.* Start in state 00. Recall $v^{(1)} = u_i\oplus u_{i-1}\oplus u_{i-2}$, $v^{(2)} = u_i\oplus u_{i-2}$.

| $i$ | $u_i$ | state before | $v^{(1)}v^{(2)}$ | state after |
|---|---|---|---|---|
| 1 | 1 | 00 | $1\oplus0\oplus0=1$, $1\oplus0=1$ → **11** | 10 |
| 2 | 0 | 10 | $0\oplus1\oplus0=1$, $0\oplus0=0$ → **10** | 01 |
| 3 | 1 | 01 | $1\oplus0\oplus1=0$, $1\oplus1=0$ → **00** | 10 |
| 4 | 1 | 10 | $1\oplus1\oplus0=0$, $1\oplus0=1$ → **01** | 11 |
| 5 | 0 | 11 | $0\oplus1\oplus1=0$, $0\oplus1=1$ → **01** | 01 |
| 6 | 0 | 01 | $0\oplus0\oplus1=1$, $0\oplus1=1$ → **11** | 00 |

$$\mathbf{v} = 11\ 10\ 00\ 01\ 01\ 11 .$$

*Now corrupt one bit* — flip the second bit of the first pair:

$$\mathbf{r} = 1\mathbf{0}\ 10\ 00\ 01\ 01\ 11 .$$

*Viterbi, step by step (hard decision, Hamming metrics).* Start: state 00 has metric 0; all other states are unreachable.

**Step 1** ($r = 10$). From 00: input 0 emits 00, $d(00,10)=1$ → state 00, metric **1**. Input 1 emits 11, $d(11,10)=1$ → state 10, metric **1**. The error has made the first step a tie — exactly what we expect.

**Step 2** ($r=10$).
- Into **00**: from 00 (1) emitting 00, $d=1$ → **2**.
- Into **01**: from 10 (1) emitting 10, $d=0$ → **1**.
- Into **10**: from 00 (1) emitting 11, $d=1$ → **2**.
- Into **11**: from 10 (1) emitting 01, $d=2$ → **3**.

**Step 3** ($r=00$).
- Into **00**: from 00 (2) emitting 00, $d=0$ → 2. From 01 (1) emitting 11, $d=2$ → 3. **Survivor 2.**
- Into **01**: from 10 (2) emitting 10, $d=1$ → 3. From 11 (3) emitting 01, $d=1$ → 4. **Survivor 3.**
- Into **10**: from 00 (2) emitting 11, $d=2$ → 4. From 01 (1) emitting 00, $d=0$ → **1**. **Survivor 1.**
- Into **11**: from 10 (2) emitting 01, $d=1$ → 3. From 11 (3) emitting 10, $d=1$ → 4. **Survivor 3.**

Note state 10's survivor: metric 1, along the path with inputs $1,0,1$ — the true message so far, already pulling ahead.

Continuing the same add–compare–select through steps 4–6, the metrics evolve to

| after step | 00 | 01 | 10 | 11 |
|---|---|---|---|---|
| 3 | 2 | 3 | **1** | 3 |
| 4 | 3 | 3 | 3 | **1** |
| 5 | 4 | **1** | 4 | 3 |
| 6 | **1** | 4 | 3 | 4 |

The trellis was terminated in state 00, so read out that survivor:

$$\hat{\mathbf{u}} = (1,0,1,1,0,0) \ \checkmark$$

— the original message, error corrected, with final metric 1 (the one flipped bit).

*What made it work.* The correct path's output differs from the received sequence in exactly 1 place. Any *other* path through the trellis differs in at least $d_{\rm free}-1 = 4$ places (since $d_{\rm free}=5$ and the true path is 1 away). The decoder does not need to know which bit was wrong — it just finds the path that requires the fewest disagreements. **Sequence decoding never localizes the error; it just outvotes it.**

**Example 2 (soft decisions, and where the 2 dB comes from).** The same code receives the first symbol pair. The matched filter outputs (normalized so $\pm1$ are the ideal levels) are $+0.9$ and $-0.1$.

*Hard decision:* threshold at 0 → bits $1, 0$, i.e. received pair $10$. The decoder is told, with full confidence, that the second bit was a 0 — when in truth it was a near coin-flip. Branch metric to expected $11$: Hamming distance 1. To expected $10$: distance 0. **The decoder now prefers the wrong branch, confidently.**

*Soft decision:* use squared Euclidean distance to the expected symbols $\pm1$.

- Branch expecting $11$ (symbols $+1,+1$): $(0.9-1)^2 + (-0.1-1)^2 = 0.01+1.21 = 1.22$.
- Branch expecting $10$ (symbols $+1,-1$): $(0.9-1)^2+(-0.1+1)^2 = 0.01+0.81 = 0.82$.

The $10$ branch is still preferred, but only by $1.22-0.82 = 0.40$ — a small penalty, easily overturned by later evidence. The hard decoder assigned a full unit of penalty to the correct branch and gave itself no way to reconsider.

*That is the mechanism.* Soft decisions let a marginal symbol contribute a small, proportionate metric rather than a full, wrong vote. Over a long sequence the marginal symbols are exactly the ones that decide close calls, and letting them speak quietly rather than shouting incorrectly is worth $10\log_{10}(\pi/2) = 1.96$ dB.

*Why 3 bits suffices.* The gain comes from distinguishing "confidently 1" from "barely 1", and eight levels resolve that adequately; the residual improvement from finer quantization is under 0.2 dB. So the entire benefit costs 3 bits per symbol of datapath width — no extra transmit power, no extra bandwidth, no extra latency. **In a receiver full of expensive decibels, this is the cheapest one on the shelf.**

## Watch out

- **You might think a bigger constraint length is always better.** $d_{\rm free}$ grows roughly linearly with $K$ while the decoder's state count grows as $2^{K-1}$. Past $K\approx9$ the complexity is prohibitive for a gain of a fraction of a dB — which is why $K=7$ has been the standard for fifty years, and why the next real advance had to come from a different structure entirely (turbo/LDPC).
- **You might think Viterbi is an approximation.** It is **exact** maximum-likelihood sequence detection. Its efficiency comes from the trellis structure, not from any shortcut in the objective.
- **You might think convolutional codes handle bursts well.** They are worst at bursts: a long run of errors can push the decoder onto a wrong path from which it recovers only after many steps, and its own error output is bursty. This is why interleaving and an outer Reed–Solomon code accompany them.
- **You might forget to terminate the trellis.** Without $K-1$ flushing zeros the final bits sit in an unknown end state and are poorly protected. Alternatives are tail-biting (start in the state the message will end in) and truncation with a traceback depth of $5K$.
- **You might think hard-decision Viterbi is nearly as good as soft.** It gives up about 2 dB — more than most block codes deliver in total. Never build a hard-decision Viterbi decoder if the demodulator can hand you three bits.

## One-liner

> Give the encoder memory so protection spreads across the whole stream, then let Viterbi keep exactly one survivor per state — an exact maximum-likelihood search in linear time, worth about 5 dB with soft decisions.

## Problems

**P1 (🟢)** For the $K=3$, rate-1/2 $(7,5)$ encoder: (a) How many states? (b) Encode $\mathbf{u} = (1,1,0)$ starting from state 00, including two terminating zeros. (c) Give the number of coded bits and confirm the rate. (d) Given $d_{\rm free}=5$, estimate the soft-decision coding gain.

**P2 (🟡)** A $K=7$, rate-1/2 code with $d_{\rm free}=10$ is used on a BPSK link. (a) Estimate the asymptotic soft-decision coding gain. (b) The realized gain at $10^{-5}$ is about 5.2 dB. Uncoded BPSK needs 9.6 dB — what $E_b/N_0$ does the coded system need? (c) Compare with the Shannon bound at the coded spectral efficiency ($\eta = 0.5$ with $\alpha=0$) and state the remaining gap. (d) The code is punctured to rate 3/4, dropping $d_{\rm free}$ to 5. Recompute (a) and comment on the trade.

**P3 (🔴)** Perform three steps of hard-decision Viterbi decoding for the $(7,5)$ $K=3$ code on the received sequence $\mathbf{r} = 11\ 00\ 01$, starting from state 00. (a) Tabulate the survivor metrics at each state after each step. (b) Identify the surviving path with the lowest metric after step 3 and the message bits it implies. (c) Explain what a tie between two survivors means and how a decoder handles one.

<details>
<summary>Solutions</summary>

**P1** (a) $2^{K-1} = 2^2 = 4$ states.

(b) Using $v^{(1)} = u_i\oplus u_{i-1}\oplus u_{i-2}$, $v^{(2)} = u_i\oplus u_{i-2}$, with input sequence $1,1,0,0,0$:

| $i$ | $u_i$ | state before | $v^{(1)}v^{(2)}$ | state after |
|---|---|---|---|---|
| 1 | 1 | 00 | $1,1$ → **11** | 10 |
| 2 | 1 | 10 | $1\oplus1\oplus0=0$, $1\oplus0=1$ → **01** | 11 |
| 3 | 0 | 11 | $0\oplus1\oplus1=0$, $0\oplus1=1$ → **01** | 01 |
| 4 | 0 | 01 | $0\oplus0\oplus1=1$, $0\oplus1=1$ → **11** | 00 |
| 5 | 0 | 00 | $0,0$ → **00** | 00 |

$$\mathbf{v} = 11\ 01\ 01\ 11\ 00 .$$

(c) 5 input bits (3 data + 2 flush) → 10 coded bits. Nominal rate $1/2$ ✓; *effective* rate counting only the 3 data bits is $3/10 = 0.3$ — the termination overhead, which is negligible for realistic block lengths but severe here.

(d) $$G \approx 10\log_{10}(R\,d_{\rm free}) = 10\log_{10}(0.5\times5) = 10\log_{10}2.5 = 4.0\ \text{dB}.$$

**P2** (a) $G \approx 10\log_{10}(0.5\times10) = 10\log_{10}5 = 7.0$ dB.

(b) $9.6 - 5.2 = 4.4$ dB.

(c) At $\eta = 0.5$ the Shannon bound is

$$\frac{E_b}{N_0} \ge \frac{2^{0.5}-1}{0.5} = \frac{0.4142}{0.5} = 0.828 = -0.82\ \text{dB}.$$

$$\text{Remaining gap} = 4.4 - (-0.8) = 5.2\ \text{dB}.$$

So the $K=7$ Viterbi code closed about 5.2 dB of the roughly 10.4 dB that separated uncoded BPSK from the bound at this efficiency — **half the gap**. Turbo and LDPC codes close nearly all of the rest, operating within about 0.5 dB, which is why they displaced convolutional codes as the primary code wherever latency permits. (Convolutional codes remain everywhere as the *inner* code and in short-latency applications, because a Viterbi decoder is small, fast, and has fixed latency, while an iterative decoder is large and its latency depends on how many iterations convergence takes.)

(d) Punctured to $R = 3/4$ with $d_{\rm free} = 5$:

$$G\approx10\log_{10}(0.75\times5) = 10\log_{10}3.75 = 5.7\ \text{dB}.$$

*The trade.* The asymptotic gain *fell* by 1.3 dB (7.0 → 5.7), but the spectral efficiency *rose* by 50% (from 0.5 to 0.75 bits/s/Hz). Whether that is a good deal depends entirely on which resource binds — the [3.6](03-06-power-vs-bandwidth-efficiency.md) question again.

The elegance of puncturing is that it costs nothing to implement: the same encoder, the same 64-state Viterbi decoder, one extra bit-deletion pattern. So a system can switch rates packet by packet as the channel changes, with no hardware change at all. This is exactly what 802.11a/g does — rates 1/2, 2/3, 3/4 from one mother code, combined with BPSK/QPSK/16-QAM/64-QAM to give the eight data rates from 6 to 54 Mbps.

**P3** Received $\mathbf{r} = 11\ 00\ 01$. Branch outputs come from the state table.

**Step 1** ($r=11$), starting only from state 00 (metric 0):
- Input 0 → state 00, output 00, $d(00,11) = 2$. Metric **2**.
- Input 1 → state 10, output 11, $d(11,11) = 0$. Metric **0**.
- States 01, 11 unreachable.

| State | Metric | Path (inputs) |
|---|---|---|
| 00 | 2 | 0 |
| 01 | — | — |
| 10 | **0** | 1 |
| 11 | — | — |

**Step 2** ($r=00$):
- Into **00**: from 00 (2), input 0, output 00, $d=0$ → **2**, path $00$.
- Into **01**: from 10 (0), input 0, output 10, $d=1$ → **1**, path $10$.
- Into **10**: from 00 (2), input 1, output 11, $d=2$ → **4**, path $01$.
- Into **11**: from 10 (0), input 1, output 01, $d=1$ → **1**, path $11$.

(States 01 and 11 were unreachable at step 1, so each state here has only one incoming candidate.)

| State | Metric | Path |
|---|---|---|
| 00 | 2 | 00 |
| 01 | **1** | 10 |
| 10 | 4 | 01 |
| 11 | **1** | 11 |

**Step 3** ($r=01$) — now every state has two candidates:
- Into **00**: from 00 (2), output 00, $d(00,01)=1$ → 3. From 01 (1), output 11, $d(11,01)=1$ → 2. **Survivor 2**, path $100$.
- Into **01**: from 10 (4), output 10, $d(10,01)=2$ → 6. From 11 (1), output 01, $d(01,01)=0$ → **1**. **Survivor 1**, path $110$.
- Into **10**: from 00 (2), output 11, $d(11,01)=1$ → 3. From 01 (1), output 00, $d(00,01)=1$ → 2. **Survivor 2**, path $101$.
- Into **11**: from 10 (4), output 01, $d=0$ → 4. From 11 (1), output 10, $d(10,01)=2$ → 3. **Survivor 3**, path $111$.

(a) The survivor table after each step:

| after step | 00 | 01 | 10 | 11 |
|---|---|---|---|---|
| 1 | 2 | — | **0** | — |
| 2 | 2 | **1** | 4 | **1** |
| 3 | 2 | **1** | 2 | 3 |

(b) The lowest final metric is **1**, at state 01, on the path with inputs $\hat{\mathbf{u}} = (1,1,0)$.

*Verify by re-encoding:* from 00, input 1 → out 11, state 10; input 1 → out 01, state 11; input 0 → out 01, state 01. Sequence $11\ 01\ 01$. Compare with the received $11\ 00\ 01$: they differ in exactly **one** bit (the second bit of the middle pair) ✓, matching the final metric of 1. The decoder corrected a single error without ever having to identify it — it simply found the path requiring the fewest disagreements.

(c) **A tie** means two distinct paths into the same state have identical accumulated metrics, so the received data provides no basis for preferring either: two different messages would have produced sequences equally far from what arrived.

How a decoder handles it: pick either by a fixed rule (say, always the upper branch). That is optimal, because both choices are equally likely to be right — no information is being discarded. Ties are common early in a block, before enough evidence has accumulated, and they resolve as the survivors merge a few steps later. That merging is precisely why a traceback depth of about $5K$ suffices and why an arbitrary tie-break costs nothing measurable.

(A tie *at the very end* of a terminated block is different — it represents a genuine coin flip on the message. But its probability is that of an error pattern landing exactly halfway between two codewords, which is vanishingly small at any useful SNR.)

</details>

## Flashback

**From Lesson 4.3 (Error-control coding: block codes):** A $(7,4)$ Hamming code and a $K=7$ rate-1/2 convolutional code are both available for a BPSK link. (a) Compare their rates. (b) Compare their coding gains. (c) State the one application where the Hamming code is nonetheless the right choice.

<details>
<summary>Solution</summary>

(a) Hamming: $R = 4/7 = 0.571$. Convolutional: $R = 0.5$. The Hamming code is slightly more bandwidth-efficient.

(b) Hamming (hard decision): about 0.6 dB. Convolutional $K=7$ (soft decision): about 5.2 dB at $10^{-5}$. **The convolutional code is nearly nine times better in power terms** (a factor of $10^{4.6/10} = 3.6$ in actual power) for a 14% rate penalty.

(c) **Where latency or decoder simplicity dominates** — canonically, ECC memory. A DRAM read must complete in nanoseconds, and an extended Hamming (SECDED) code decodes with a few XOR trees in a single cycle, with no traceback, no state memory, and fixed trivial latency. A $K=7$ Viterbi decoder needs 64 state metrics, a survivor memory, and a traceback of about 35 steps — hundreds of cycles of latency and orders of magnitude more silicon. For a memory controller that is unusable, and the 0.6 dB is beside the point: the relevant metric is not coding gain but "does it fit in the read path."

The general principle: **the strongest code is not always the right code.** Pick against the binding constraint — power, bandwidth, latency, or gates.

</details>

## Connections

- **Backward:** the encoder is a binary FIR filter, [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md) over $\mathrm{GF}(2)$; the sequence-ML criterion is [3.2](03-02-optimal-detection-awgn.md)'s minimum-distance rule applied to whole paths instead of single symbols.
- **Forward:** [4.5](04-05-multiplexing-multiple-access.md) closes the course by asking how coded links share a channel; concatenation with Reed–Solomon from [4.3](04-03-block-codes.md) is the classic pairing.
- **Sideways:** Viterbi is dynamic programming — the same algorithm as shortest paths in [`algorithms`](../../algorithms/syllabus.md) and as the Viterbi decoding of hidden Markov models in speech recognition and bioinformatics. The trellis is a layered DAG, and "keep one survivor per state" is the optimal-substructure property that makes DP work at all.

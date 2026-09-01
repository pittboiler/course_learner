# Systems Biology · Lesson 2.4: The feed-forward loop

> ⏱ ~15 min · Module 2: Gene-regulatory networks & motifs · Builds on: [2.2](02-02-negative-autoregulation.md), [2.3](02-03-positive-autoregulation.md) · Unlocks: [2.5](02-05-incoherent-ffl-temporal-programs.md) (incoherent FFLs & temporal programs)

## Why this matters

Autoregulation ([2.2](02-02-negative-autoregulation.md), [2.3](02-03-positive-autoregulation.md)) is one gene talking to itself. The **feed-forward loop** is the smallest circuit with more than one node, it is the most over-represented multi-node motif in every transcription network anyone has counted, and it is the single most cited result in network-motif biology.

What it does is worth the attention: **it builds a noise filter out of two ordinary genes, with no clock, no memory element and no comparison to a stored reference.** It ignores brief input pulses and responds to sustained ones — and it does this while responding to input *removal* with no delay at all. That asymmetry is the function, and it falls out of three lines of algebra you already know from [2.1](02-01-input-functions-promoter-logic.md).

There is also a sting in the tail. The same three arrows, with the logic gate at the output changed from AND to OR, perform a *different* function — the delay moves to the other transition. **Topology alone does not determine behaviour**, which is a useful corrective to the enthusiasm [1.1](01-01-systems-view-of-the-cell.md) opened the course with, and a warning about what you can and cannot read off a network diagram.

## The idea

Draw three nodes. $X$ regulates $Y$; $X$ regulates $Z$; $Y$ regulates $Z$. So there are **two paths from $X$ to $Z$**: a direct one and an indirect one through $Y$.

The direct path is **fast** — $X$ is already there, and when its signal arrives it acts on $Z$'s promoter immediately. The indirect path is **slow**, because $Y$ is a protein that has to be transcribed, translated and *accumulated* before it reaches the concentration at which it can act on $Z$. From [2.1](02-01-input-functions-promoter-logic.md) we know exactly how slow: $Y$'s response time is $\ln 2/\alpha_Y$, set by its removal rate.

Now put an **AND gate** at $Z$: $Z$ is transcribed only when both $X$ and $Y$ are active on its promoter.

- **$X$ turns ON.** $Z$ cannot fire yet — it must wait for the slow arm. $Y$ starts accumulating, and only when it crosses its activation threshold $K_Y$ does $Z$ begin. **Delay.**
- **$X$ turns OFF.** The AND condition fails on the direct arm *immediately*. $Z$'s production stops at once, whatever $Y$ is doing. **No delay.**

That is the whole mechanism, and the asymmetry is the point. A **sign-sensitive delay**: delayed on the way up, prompt on the way down.

The function follows. A brief spurious pulse of $X$ — a fluctuation, a transient in the environment — does not last long enough for $Y$ to reach $K_Y$, so **$Z$ never responds at all**. A genuine sustained signal does. The circuit is a **persistence detector**, and the persistence it demands is a number you can tune with $K_Y$.

**What it costs:** deafness to genuine brief signals. There is no free lunch here — a filter that rejects short pulses rejects *all* short pulses, informative or not.

## The formal version

**The eight types.** Three edges, each activating ($+$) or repressing ($-$), gives $2^3 = 8$ FFLs. The useful classification compares the *direct* sign with the *net indirect* sign:

$$\text{coherent} \iff \operatorname{sgn}(X\!\to\!Z) = \operatorname{sgn}(X\!\to\!Y)\cdot\operatorname{sgn}(Y\!\to\!Z)$$

*In words: coherent means the two paths push $Z$ the same way; incoherent means they fight.*

| Type | $X\!\to\!Y$ | $Y\!\to\!Z$ | $X\!\to\!Z$ | | Type | $X\!\to\!Y$ | $Y\!\to\!Z$ | $X\!\to\!Z$ |
|---|---|---|---|---|---|---|---|---|
| **C1** | $+$ | $+$ | $+$ | | **I1** | $+$ | $-$ | $+$ |
| C2 | $-$ | $-$ | $+$ | | I2 | $-$ | $-$ | $-$ |
| C3 | $+$ | $-$ | $-$ | | I3 | $+$ | $+$ | $-$ |
| C4 | $-$ | $+$ | $-$ | | I4 | $-$ | $+$ | $+$ |

**In real networks the eight types are wildly unequal.** In *E. coli* and yeast, **C1 and I1 together account for the large majority** of observed FFLs, and the other six are rare. That inequality is itself the fact to explain — if FFLs were merely a structural accident of dense wiring, the eight types would appear in proportion to their edge-sign frequencies. They do not. This lesson explains C1; [2.5](02-05-incoherent-ffl-temporal-programs.md) explains I1.

**Is it even a motif?** Use [2.2](02-02-negative-autoregulation.md)'s methodology: count occurrences in the real network, then count in an ensemble of randomized networks that preserve each node's in- and out-degree, and compute $Z = (N_{\text{real}} - \langle N_{\text{rand}}\rangle)/\sigma_{\text{rand}}$. In the *E. coli* transcription network the FFL appears roughly 40 times against an expectation near 7, several standard deviations out. **Over-representation is evidence of selection for function, not proof of it** — but combined with a derived function and a measured delay, it is a strong case.

### The delay, derived

Take C1 with AND logic. The signal is the arrival of $X$'s inducer, which activates pre-existing $X$ protein on a timescale of seconds — fast compared with protein accumulation, so we treat $X$ as switching instantaneously (timescale separation, [1.1](01-01-systems-view-of-the-cell.md)). Once $X$ is active, $Y$ obeys [2.1](02-01-input-functions-promoter-logic.md)'s production–removal balance:

$$\dot{Y} = \beta_Y - \alpha_Y Y, \qquad Y(0) = 0$$

with $\beta_Y$ the production rate (concentration per time), $\alpha_Y$ the removal rate (degradation plus dilution by growth) and steady state $Y_{st} = \beta_Y/\alpha_Y$. The solution is

$$Y(t) = Y_{st}\left(1 - e^{-\alpha_Y t}\right).$$

$Z$'s production begins when $Y$ crosses its activation threshold $K_Y$ on $Z$'s promoter. Setting $Y(T_{\text{ON}}) = K_Y$ and solving:

$$\boxed{\;T_{\text{ON}} = -\frac{1}{\alpha_Y}\ln\!\left(1 - \frac{K_Y}{Y_{st}}\right)\;}$$

*In words: the delay is $Y$'s own relaxation time scaled by how far up its rise the threshold sits.*

**Three things to read off this formula.**

1. **The delay depends only on $\alpha_Y$ and the ratio $K_Y/Y_{st}$** — not on $\beta_Y$ and $K_Y$ separately, and not at all on $Z$'s parameters. The direct arm contributes nothing to the timing.
2. **The delay requires $K_Y < Y_{st}$.** If the threshold sits above the plateau $Y$ can reach, $Z$ *never* turns on. This is not a pathology; it is the boundary of the circuit's operating regime, and it is closer than you would guess (Example 1).
3. **The delay diverges logarithmically** as $K_Y/Y_{st}\to 1$. Long delays are available — but at a cost in fragility, since near the boundary a small drop in $\beta_Y$ takes you across it.

In units of $Y$'s own response time $t_{1/2} = \ln 2/\alpha_Y$:

| $K_Y/Y_{st}$ | $\alpha_Y T_{\text{ON}}$ | $T_{\text{ON}}$ in half-lives of $Y$ |
|---|---|---|
| 0.1 | 0.105 | 0.15 |
| 0.5 | 0.693 | 1.00 |
| 0.9 | 2.303 | 3.32 |
| 0.99 | 4.605 | 6.64 |

### The OFF step

When $X$'s signal is removed, $X$ deactivates within seconds. The AND condition at $Z$'s promoter fails immediately, so

$$\boxed{\;T_{\text{OFF}} = 0\;}$$

**regardless of $Y$**, which is still sitting near $Y_{st}$ and will take several of its own half-lives to decay. The slow arm is simply overruled.

*Be careful what this claims.* $Z$'s **production** stops instantly; $Z$'s **concentration** then decays as $e^{-\alpha_Z t}$, exactly as an unregulated gene would. There is no extra delay contributed by the circuit. **The asymmetry is in the control, not in the concentration.**

### Switch the gate: OR logic

Keep all three arrows and change $Z$'s promoter to OR — either $X$ or $Y$ suffices.

- **ON step:** the direct arm fires immediately. $T_{\text{ON}} = 0$.
- **OFF step:** $X$ is gone, but $Y$ is still above $K_Y$ and keeps $Z$ running. $Y$ now decays from $Y_{st}$ with no production, $Y(t) = Y_{st}e^{-\alpha_Y t}$, and $Z$ shuts off only when it falls through $K_Y$:

$$\boxed{\;T_{\text{OFF}} = \frac{1}{\alpha_Y}\ln\!\left(\frac{Y_{st}}{K_Y}\right)\;}$$

Note this is a **different function** of the same ratio, not the mirror image of $T_{\text{ON}}$ — it diverges as $K_Y/Y_{st}\to 0$ rather than as it approaches 1. Same wiring, same parameters, opposite transition delayed, and delays that can differ by nearly an order of magnitude (Problem 2).

**So OR-logic C1 protects against brief *loss* of input.** It is the right design when the downstream process is expensive and hard to restart: don't abandon a half-built structure because the signal flickered.

### The canonical instances

- **AND: the *ara* system.** In *E. coli*, $X$ is CRP (activated when cAMP rises during glucose starvation), $Y$ is AraC, $Z$ is the *araBAD* operon that catabolizes arabinose. Both regulators are required. A cAMP step produces *araBAD* only after a delay of roughly 20 minutes, and removal shuts it off promptly — as the formula demands. The design reading: **do not build a whole catabolic pathway because glucose dipped for a minute.**
- **OR: the flagellar system.** FlhDC ($X$) activates the sigma factor FliA ($Y$), and both activate the flagellar structural genes ($Z$), with OR logic. A flagellum takes on the order of an hour to assemble and consumes a serious fraction of the cell's budget. Brief loss of FlhDC does not abort the build; sustained loss does.

**One topology, two logics, two functions.** The wiring diagram — the thing network biology draws — is identical in both cases. The logic function at the output node is not in the diagram, and it decides which of the two behaviours you get. Keep that when someone tells you they have inferred function from topology.

## Picture

![On the left, the coherent type-1 feed-forward loop drawn as three nodes: X regulating Y down a slow arm, X regulating Z down a fast direct arm, and Y regulating Z, with the output node labelled as requiring both X and Y. On the right, three time traces sharing one time axis. The top trace is the input X, showing a brief pulse, then a long sustained ON period, then OFF. The middle trace is Y accumulating, with its activation threshold drawn as a dashed line: during the brief pulse Y rises only a little and falls back without reaching the threshold, while during the sustained ON period it crosses the threshold and climbs toward its plateau. The bottom trace is the output Z, which shows nothing at all during the brief pulse, a rise beginning only after the threshold crossing, and an immediate turn-off the instant the input goes away. A bracket beneath marks the delay between input ON and output start.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — computing and tuning the delay).** A C1-FFL with AND logic has $\beta_Y = 10$ nM/min and $\alpha_Y = 0.1$ min$^{-1}$; $Y$ activates $Z$ above $K_Y = 30$ nM. (a) Find $T_{\text{ON}}$. (b) What threshold would give a 20-minute delay? (c) A mutation reduces $\beta_Y$ by 20 percent. Compare the effect in the two designs.

**(a)** $$Y_{st} = \frac{\beta_Y}{\alpha_Y} = \frac{10}{0.1} = 100\ \text{nM}, \qquad \frac{K_Y}{Y_{st}} = 0.30 .$$

$$T_{\text{ON}} = -\frac{1}{0.1}\ln(1 - 0.30) = -10\ln(0.70) = 10 \times 0.3567 = \mathbf{3.57\ \text{min}} .$$

For scale, $Y$'s own response time is $\ln 2/0.1 = 6.93$ min, so the delay is about half a half-life.

**(b)** $$20 = -10\ln\!\left(1 - \frac{K_Y}{100}\right) \implies 1 - \frac{K_Y}{100} = e^{-2} = 0.1353 \implies K_Y = \mathbf{86.5\ \text{nM}} .$$

The threshold has to sit at 86.5 percent of the plateau to buy a delay of under three half-lives. **Long delays are expensive in threshold headroom.**

**(c)** A 20 percent cut gives $Y_{st} = 80$ nM.

- With $K_Y = 30$ nM: $T_{\text{ON}} = -10\ln(1 - 30/80) = -10\ln(0.625) = 4.70$ min. The delay grew by 32 percent. Annoying, not fatal.
- With $K_Y = 86.5$ nM: $K_Y > Y_{st} = 80$ nM. **$Y$ never reaches threshold and $Z$ never turns on at all.** The circuit does not slow down; it stops existing.

**This is the practical content of the logarithmic divergence.** A circuit tuned for a long delay is operating near a cliff, and a modest change in expression — a mutation, a shift in growth rate, a different medium — walks it off. Real FFL delays are on the order of one $Y$ half-life, not five, and now you can see why.

**Example 2 (why you'd care — the FFL is a leaky integrator, not a stopwatch).** Same circuit as Example 1 ($\alpha_Y = 0.1$ min$^{-1}$, $Y_{st} = 100$ nM, $K_Y = 30$ nM, so $T_{\text{ON}} = 3.57$ min). The input is noisy: 2-minute pulses of $X$. (a) Does an isolated 2-minute pulse produce output? (b) Does a train of 2-minute pulses separated by 2-minute gaps? (c) By 10-minute gaps? (d) What does the circuit actually measure?

**(a)** In 2 minutes, $Y$ reaches $100(1 - e^{-0.2}) = 100(0.1813) = 18.1$ nM $< 30$ nM. **No output.** Any single pulse shorter than $T_{\text{ON}} = 3.57$ min is rejected — as advertised.

**(b)** Now track $Y$ across the train, using $Y(t) = Y_{st} + (Y_0 - Y_{st})e^{-\alpha_Y t}$ while $X$ is on and pure decay while it is off:

| interval | $Y$ at end |
|---|---|
| pulse 1 (0–2 min) | $100(1-e^{-0.2}) = 18.13$ nM |
| gap (2–4 min) | $18.13\,e^{-0.2} = 14.84$ nM |
| pulse 2 (4–6 min) | $100 - 85.16\,e^{-0.2} = 30.28$ nM |

$Y$ crosses 30 nM during the second pulse, at $\tau = -10\ln(70/85.16) = 1.96$ min into it, i.e. $t = 5.96$ min. **The circuit fires.** Total accumulated ON time at that moment is $2 + 1.96 = 3.96$ min — slightly more than $T_{\text{ON}} = 3.57$ min, the excess being what leaked away during the gap.

**(c)** With 10-minute gaps, $Y$ decays by $e^{-1} = 0.368$ between pulses. The peak after each pulse follows the linear map $P_{n+1} = Y_{st}(1-b) + ab\,P_n$ with $b = e^{-\alpha_Y D} = 0.8187$, $a = e^{-\alpha_Y G} = 0.3679$, whose fixed point is

$$P^{*} = \frac{Y_{st}(1-b)}{1-ab} = \frac{100(0.1813)}{1 - 0.3012} = \frac{18.13}{0.6988} = 25.9\ \text{nM} < 30\ \text{nM}.$$

**Never — no matter how many pulses arrive, or for how many hours.** The peaks converge to 25.9 nM and stay there.

**(d)** Not duration. **The circuit integrates input with a leak of time constant $1/\alpha_Y$**, and fires when the leaky integral crosses a threshold. So what it really filters on is something closer to the input's **duty cycle over a window of $1/\alpha_Y$**: two identical 2-minute pulses pass or fail depending entirely on how far apart they are.

That reading is worth carrying forward. $Y$'s equation $\dot Y = \beta_Y - \alpha_Y Y$ is a **first-order low-pass filter** on the input ([signals-systems 4.4](../../signals-systems/lessons/04-04-filter-design-basics.md)), and the AND gate is a hard threshold on its output. **Low-pass filter plus threshold equals persistence detector** — and stated that way, the motif is recognizably the same device an engineer would build, which is part of why the FFL result landed as hard as it did.

## Watch out

- **You might think the delay comes from $Y$ being slow to *decay*.** It comes from $Y$ being slow to *accumulate*. The removal rate $\alpha_Y$ appears in $T_{\text{ON}}$ because it sets how fast $Y$ approaches its plateau — the same fact from [2.1](02-01-input-functions-promoter-logic.md) that response time is set by removal, not production. Nothing about $Z$ enters the delay at all.
- **You might read $T_{\text{OFF}} = 0$ as "$Z$ vanishes instantly".** $Z$'s *production* stops instantly; $Z$'s concentration still decays with its own $\ln 2/\alpha_Z$. The circuit removes a delay it would otherwise add; it cannot make protein disappear.
- **You might treat the FFL as a duration threshold — "passes pulses longer than $T_{\text{ON}}$".** It is a leaky integrator (Example 2). A train of individually sub-threshold pulses passes if they are close enough together, and fails if they are not.
- **You might think the wiring diagram tells you the function.** AND and OR logic on identical wiring delay *opposite* transitions. The logic gate lives in the promoter architecture, is invisible in the network graph, and has to be measured. This is the honest limit on reading behaviour off topology, and it is the same caution [1.1](01-01-systems-view-of-the-cell.md) raised from the other direction.

## One-liner

> Two paths to one target, one fast and one slow, joined by an AND gate: the output waits for the slow arm on the way up and obeys the fast arm on the way down, so the circuit ignores brief pulses and shuts off promptly — and swapping AND for OR moves the delay to the other transition without changing a single arrow.

## Problems

**P1 (🟢)** A C1-FFL with AND logic has $\beta_Y = 20$ nM/min, $\alpha_Y = 0.05$ min$^{-1}$, and $Y$ activates $Z$ above $K_Y = 100$ nM. (a) Find $Y_{st}$ and $T_{\text{ON}}$. (b) Express $T_{\text{ON}}$ as a fraction of $Y$'s own response time. (c) A different target gene has $K_Y = 450$ nM. What does the circuit do?

**P2 (🟡)** Keep the parameters of P1 ($\alpha_Y = 0.05$ min$^{-1}$, $Y_{st} = 400$ nM, $K_Y = 100$ nM) but change $Z$'s promoter to **OR** logic — the flagellar arrangement. (a) What is the delay after an ON step? (b) After an OFF step? (c) What is the longest input dropout the circuit ignores completely? (d) Compare with P1's answer and state what this shows about inferring function from a wiring diagram.

**P3 (🔴, optional — bridges to filtering in `signals-systems`)** A C1-FFL with AND logic has $\alpha_Y = 0.1$ min$^{-1}$, $Y_{st} = 100$ nM, $K_Y = 50$ nM. The input is a square wave: $X$ ON for $D$ minutes, OFF for $G$ minutes, repeating forever. (a) Show that the peak value of $Y$ at the end of the $n$-th pulse obeys a linear recursion, and find its fixed point $P^{*}$ in terms of $D$, $G$ and $\alpha_Y$. (b) For $D = G = 3$ min, does $Z$ ever turn on? If so, on which pulse? (c) For $D = 3$, $G = 15$ min? (d) State the filtering rule in one sentence.

<details>
<summary>Solutions</summary>

**P1 (a)** $$Y_{st} = \frac{20}{0.05} = 400\ \text{nM}, \qquad \frac{K_Y}{Y_{st}} = \frac{100}{400} = 0.25 .$$

$$T_{\text{ON}} = -\frac{1}{0.05}\ln(1 - 0.25) = -20\ln(0.75) = 20 \times 0.28768 = \mathbf{5.75\ \text{min}} .$$

**(b)** $Y$'s response time is $t_{1/2} = \ln 2/\alpha_Y = 0.693/0.05 = 13.86$ min, so

$$\frac{T_{\text{ON}}}{t_{1/2}} = \frac{5.75}{13.86} = \mathbf{0.415} \ \text{half-lives}.$$

**(c)** $K_Y = 450\ \text{nM} > Y_{st} = 400\ \text{nM}$: $Y$ asymptotes to 400 and **never crosses the threshold, so $Z$ is never expressed** — no matter how long $X$ stays on. The delay formula returns $\ln$ of a negative number, which is the algebra telling you the same thing. A gene can be wired into an FFL and still be functionally disconnected from it, purely because of where its threshold sits.

**P2 (a)** With OR logic the direct arm alone suffices, so $Z$ fires as soon as $X$ does: $T_{\text{ON}} = \mathbf{0}$.

**(b)** After $X$ goes, $Y$ decays from $Y_{st} = 400$ nM with no production, and $Z$ keeps running until $Y$ falls through $K_Y$:

$$T_{\text{OFF}} = \frac{1}{\alpha_Y}\ln\!\left(\frac{Y_{st}}{K_Y}\right) = 20\ln 4 = 20 \times 1.3863 = \mathbf{27.7\ \text{min}} .$$

**(c)** Any dropout of $X$ shorter than **27.7 min** leaves $Y$ above threshold throughout, so $Z$'s production never pauses. (If $X$ returns before $Y$ has fallen to $K_Y$, $Y$ climbs again from wherever it got to — the same leaky-integrator behaviour as Example 2, now on the OFF side.)

**(d)** Identical wiring, identical parameters:

| logic | delay after ON | delay after OFF | function |
|---|---|---|---|
| AND | 5.75 min | 0 | reject brief input pulses |
| OR | 0 | 27.7 min | tolerate brief input losses |

The delays sit on **opposite transitions** and differ by a factor of 4.8. **Nothing in the network diagram distinguishes the two cases** — the graph has the same three signed edges either way. The logic function is a property of the promoter (operator spacing, cooperative recruitment, whether the two activators can work alone), it must be measured, and it is what actually determines what the circuit does. Topology constrains function; it does not fix it.

**P3 (a)** Write $b = e^{-\alpha_Y D}$ and $a = e^{-\alpha_Y G}$. During a pulse starting from trough value $V$, $Y$ ends at $P = Y_{st} + (V - Y_{st})b = Y_{st}(1-b) + Vb$. During the following gap, $V' = Pa$. Composing,

$$P_{n+1} = Y_{st}(1-b) + ab\,P_n ,$$

an affine map with slope $ab < 1$, hence a globally attracting fixed point

$$\boxed{\;P^{*} = \frac{Y_{st}(1-b)}{1 - ab}\;}, \qquad b = e^{-\alpha_Y D},\ a = e^{-\alpha_Y G}.$$

$Z$ turns on iff the peaks reach $K_Y$ — so **iff $P^{*} > K_Y$**, and if they do, it happens on the first pulse for which $P_n$ crosses.

**(b)** $D = G = 3$, $\alpha_Y = 0.1$: $a = b = e^{-0.3} = 0.7408$, $ab = e^{-0.6} = 0.5488$.

$$P^{*} = \frac{100(0.2592)}{1 - 0.5488} = \frac{25.92}{0.4512} = 57.4\ \text{nM} > 50\ \text{nM} \implies \textbf{yes} .$$

Iterating from $P_0 = 0$:

$$P_1 = 25.92, \quad P_2 = 25.92 + 0.5488(25.92) = 40.14, \quad P_3 = 47.95, \quad P_4 = 52.23 .$$

So the crossing happens **during the fourth pulse**. Precisely: the trough before it is $47.95 \times 0.7408 = 35.52$ nM, and

$$100 - (100 - 35.52)e^{-0.1\tau} = 50 \implies \tau = -10\ln\!\left(\frac{50}{64.48}\right) = 2.54\ \text{min},$$

within the 3-minute pulse. The fourth pulse begins at $t = 18$ min, so $Z$ starts at $t \approx \mathbf{20.5\ \text{min}}$ — against $T_{\text{ON}} = -10\ln(0.5) = 6.93$ min for a single continuous pulse.

**(c)** $D = 3$, $G = 15$: $b = 0.7408$, $a = e^{-1.5} = 0.2231$, $ab = 0.1653$.

$$P^{*} = \frac{25.92}{1 - 0.1653} = \frac{25.92}{0.8347} = 31.1\ \text{nM} < 50\ \text{nM} \implies \textbf{never}.$$

The peaks climb toward 31.1 nM and stall there permanently. **The same 3-minute pulses, delivered at the same amplitude, are passed at one repetition rate and rejected forever at another.**

**(d)** **The FFL rejects an input whose duty cycle, weighted by a leak of time constant $1/\alpha_Y$, fails to hold the integrated signal above threshold.** In (b) the duty cycle is 50 percent and the input passes; in (c) it is 17 percent and the input never does. This is exactly a first-order low-pass filter followed by a comparator: $\alpha_Y$ is the cutoff, and $K_Y/Y_{st}$ is the trip level. Whether an FFL "sees" a fluctuating signal is a question about the signal's spectrum, not its peak amplitude.

</details>

## Flashback

**From Lesson 2.2 (Negative autoregulation):** You are handed a strain whose reporter protein has removal rate $\alpha = 0.03$ min$^{-1}$ (degradation plus dilution). (a) If the gene is *unregulated*, how long until it reaches half its steady state after induction? (b) The gene is instead under strong negative autoregulation, with production held at 5 times the rate needed to sustain its steady state against removal until the repression threshold is reached. Find the response time and the speedup factor. (c) You then double $\beta$ with a stronger promoter. By what factor does the steady state move — unregulated, and under NAR with Hill coefficient $n = 1$ and $n = 2$?

<details>
<summary>Solution</summary>

**(a)** Unregulated, $\dot Y = \beta - \alpha Y$ gives $Y(t) = Y_{st}(1 - e^{-\alpha t})$, so

$$t_{1/2} = \frac{\ln 2}{\alpha} = \frac{0.693}{0.03} = \mathbf{23.1\ \text{min}} ,$$

**independent of $\beta$** — the fact that makes NAR worth having.

**(b)** In the strong-repression limit, production is essentially constant at $\beta'$ until $Y$ approaches the repression threshold $K$, which is where the steady state sits: $Y_{st} \approx K$. The rise is therefore *linear*, $Y(t) = \beta' t$, reaching half of $Y_{st}$ at

$$t_{1/2}^{\text{NAR}} = \frac{Y_{st}}{2\beta'} .$$

"Five times the sustaining rate" means $\beta' = 5\alpha Y_{st}$, so

$$t_{1/2}^{\text{NAR}} = \frac{Y_{st}}{2 \times 5\alpha Y_{st}} = \frac{1}{10\alpha} = \frac{1}{0.3} = \mathbf{3.33\ \text{min}} .$$

$$\text{speedup} = \frac{23.1}{3.33} = \mathbf{6.93} = 2 \times 5 \times \ln 2 .$$

In general the factor is $2f\ln 2$ for an $f$-fold overdrive: **NAR buys speed by overshooting the target production rate and braking on arrival**, which is why the speedup scales with how hard you overdrive.

**(c)** *Unregulated:* $Y_{st} = \beta/\alpha$, so doubling $\beta$ **doubles** the steady state — factor $\mathbf{2.00}$.

*NAR:* the steady state solves $\dfrac{\beta}{1 + (Y/K)^n} = \alpha Y$. In the strongly repressed regime $Y \gg K$, so $(Y/K)^n$ dominates and

$$\frac{\beta K^n}{Y^n} = \alpha Y \implies Y^{n+1} = \frac{\beta K^n}{\alpha} \implies Y_{st} \propto \beta^{1/(n+1)} .$$

Doubling $\beta$ therefore moves $Y_{st}$ by $2^{1/(n+1)}$:

| | $n = 1$ | $n = 2$ |
|---|---|---|
| factor | $2^{1/2} = \mathbf{1.41}$ | $2^{1/3} = \mathbf{1.26}$ |

So a twofold change in production strength becomes a 41 percent or 26 percent change in output. **The steady state is set mainly by the threshold $K$, which is a binding constant, not by $\beta$, which depends on everything** — polymerase levels, ribosome availability, growth rate, plasmid copy number. That is the robustness half of NAR's payoff, and it is exactly the property the FFL's $Y$ arm would want, since this lesson's $T_{\text{ON}}$ depends on $K_Y/Y_{st}$ and Example 1(c) showed how badly a drifting $Y_{st}$ hurts.

</details>

## Connections

- **Backward:** the delay is measured on [2.1](02-01-input-functions-promoter-logic.md)'s clock — the response time $\ln 2/\alpha$ set by removal alone — and the $Z$-score machinery that certifies the FFL as a motif is [2.2](02-02-negative-autoregulation.md)'s. The instantaneous switching of $X$ is [1.1](01-01-systems-view-of-the-cell.md)'s timescale separation used without comment, as it will be from here on.
- **Forward:** [2.5](02-05-incoherent-ffl-temporal-programs.md) takes the same three nodes and flips one sign, turning the delay into a pulse and an accelerator; the approximate adaptation it gets is the foil for the exact, structurally robust adaptation of [3.3](03-03-integral-control-exact-adaptation.md). The $K_Y < Y_{st}$ threshold-crossing condition reappears as the ordering principle of single-input modules in [2.5](02-05-incoherent-ffl-temporal-programs.md).
- **Sideways:** $Y$'s accumulation is a first-order low-pass filter and the AND gate is a comparator, so the C1-FFL is a filter-plus-threshold detector in the sense of [signals-systems 4.4](../../signals-systems/lessons/04-04-filter-design-basics.md) and [control-systems 2.1](../../control-systems/lessons/02-01-first-order-response.md); [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) gives the qualitative circuit pass at feedback and adaptation, and treats the *incoherent* FFL only.

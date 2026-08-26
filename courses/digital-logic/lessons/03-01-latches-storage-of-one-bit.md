# Digital Logic Design · Lesson 3.1: Latches and the storage of one bit

> ⏱ ~15 min · Module 3: Sequential logic and finite-state machines · Builds on: [1.3 Boolean algebra and logic gates](01-03-boolean-algebra-logic-gates.md), [2.4 Decoders, encoders, and multiplexers](02-04-decoders-encoders-multiplexers.md) · Unlocks: [3.2 Flip-flops and clocking](03-02-flip-flops-and-clocking.md)

## Why this matters

Every circuit you have built so far — adders, comparators, decoders, the ALU — is a **function**. Show it the same inputs tomorrow and it returns the same outputs, because its outputs are determined entirely by what is on the wires *right now*. A pile of such circuits, however enormous, still cannot count to three, cannot wait for anything, cannot run a program. A computer is not a big function; it is a thing with a **state**.

This lesson builds the smallest possible piece of state: one bit that stays put. It takes exactly one new idea — feedback — and it comes with one nasty flaw. Diagnosing that flaw is the entire reason [3.2](03-02-flip-flops-and-clocking.md) exists, and the reason every synchronous chip on earth has a clock.

## The idea

Call a circuit **combinational** when its output is a function of its present inputs alone. That is every circuit in Modules 1 and 2. Call it **sequential** when the output depends on the *history* of inputs — on what happened before, not just what is happening now.

You cannot get history out of a truth table. A truth table is, by definition, a lookup keyed on the present inputs. So where can memory possibly come from, when gates are all you have?

There is exactly one move available: **feedback** — take a wire that carries an output and run it back around to an input. Now the circuit is partly its own input. Ask "what is the output?" and the honest answer is "it depends on what the output already was," which is precisely the self-reference that memory requires. Signals take real time to cross a gate, so the value arriving back at the input is the value from a moment ago; the loop keeps yesterday alive.

This is a genuinely different animal, not a bigger one. Feedback breaks the guarantee you have relied on all course: a combinational netlist always settles to one answer, and you can compute that answer by evaluating gates in order. A loop has no "order" — and it may settle to *either* of two answers, or, in an unlucky corner, to none.

The simplest loop that is useful is two inverters nose-to-tail, each driving the other. Suppose the first one's output is `0`; it feeds the second, which outputs `1`; that comes back to the first, which — being an inverter — outputs `0`. Consistent. The loop believes itself, and it will sit there forever. Flip the story and `1`/`0` is equally consistent. Two stable configurations, one wire holding either a `0` or a `1`: **that is one stored bit**.

## The formal version

Throughout, $\overline{A}$ means NOT $A$ (some books write $A'$), juxtaposition or $\cdot$ means AND, and $+$ means OR. I write $Q$ for the value the circuit is currently holding and $Q^+$ for the value it holds once it has settled in response to the present inputs — the **next state**. (Mano writes $Q(t{+}1)$; same thing.)

### Bistability: the cross-coupled inverter pair

Two inverters in a ring impose $Q = \overline{\overline{Q}}$, which is satisfied by $Q = 0$ and by $Q = 1$ and by nothing else in the digital world. *In words: the loop is consistent in two states, so it is **bistable**.*

Analog reality adds a third solution. Sweep the loop voltage continuously and there is one balance point where both inverters sit halfway, each feeding the other exactly the input that keeps it halfway. It is a real equilibrium — and an **unstable** one, like a pencil balanced on its tip. The tiniest nudge is amplified by the inverters' gain (see [`electronics` 4.3](../../electronics/lessons/04-03-cmos-inverter-gates.md) for where that gain comes from) and the loop slides into one of the two stable states. This balance point is called **metastability**, and it returns to bite us at the end of the lesson.

The problem with this beautiful cell: it has **no inputs**. It stores a bit, but you cannot *write* one. To write, some external signal has to be able to overpower the loop.

### The SR latch: adding a way to write

Here is the trick. A NOR gate with one input tied to `0` is an inverter of its other input:

$$\overline{x + 0} = \overline{x}.$$

*In words: hold one NOR input low and the gate behaves exactly like an inverter.* So if we build the ring out of two NOR gates instead of two inverters, and hold the spare inputs low, we get the bistable cell back unchanged — but now those spare inputs are handles we can yank on.

Name them $S$ (set) and $R$ (reset). Cross-couple as in panel (a) of the figure: NOR&#8239;1 takes $R$ and the fed-back $\overline{Q}$ and outputs $Q$; NOR&#8239;2 takes $S$ and the fed-back $Q$ and outputs $\overline{Q}$. The two loop equations are

$$Q = \overline{R + \overline{Q}}, \qquad \overline{Q} = \overline{S + Q}.$$

Now derive each case from the gates rather than memorizing a table. Recall a NOR outputs `1` only when *all* its inputs are `0`, and outputs `0` if *any* input is `1`.

- **Set, $S=1, R=0$.** NOR&#8239;2 sees a `1`, so $\overline{Q} = 0$ regardless of anything else. NOR&#8239;1 now sees $R = 0$ and $\overline{Q} = 0$ — both low — so $Q = 1$. Stable and consistent. The latch is set.
- **Reset, $S=0, R=1$.** Mirror image: NOR&#8239;1 sees a `1`, so $Q = 0$; NOR&#8239;2 then sees two lows and gives $\overline{Q} = 1$. The latch is reset.
- **Hold, $S=R=0$.** Both gates are inverters again, so the loop equation collapses to $Q = \overline{\overline{Q}} = Q$. *In words: whatever the latch was holding, it keeps holding.* This line is the whole point — it is the memory.
- **Forbidden, $S=R=1$.** Each gate sees a `1`, so **both** outputs go to `0`. Two separate things are wrong. First, $\overline{Q}$ is no longer the complement of $Q$, so the label on the wire is a lie and any downstream logic that assumed complementarity misbehaves. Second and far worse: consider *leaving* this state. Drop $S$ and $R$ to `0` at the same instant and both gates simultaneously see two lows, so both start driving toward `1`; each then sees the other's rising `1` and reverses toward `0`. The winner is decided by which gate happens to be a picosecond faster — a **race**. The final state is not determined by the design, only by fabrication mismatch and noise. That is why the combination is forbidden: not because the circuit explodes, but because its *next* state is unpredictable.

Characteristic table for the NOR SR latch (`X` would mark a don't-care; there are none here):

| $S$ | $R$ | $Q^+$ | $\overline{Q}^{\,+}$ | Behaviour |
|---|---|---|---|---|
| 0 | 0 | $Q$ | $\overline{Q}$ | Hold — memory |
| 0 | 1 | 0 | 1 | Reset |
| 1 | 0 | 1 | 0 | Set |
| 1 | 1 | 0 | 0 | Forbidden — complement broken, exit is a race |

**The NAND version.** Cross-couple two NAND gates instead and everything inverts: the inputs become **active-low**, written $\overline{S}$ and $\overline{R}$, and the loop equations are $Q = \overline{\overline{S}\cdot\overline{Q}}$ and $\overline{Q} = \overline{\overline{R}\cdot Q}$. Hold is now $\overline{S}=\overline{R}=1$, a `0` on $\overline{S}$ sets, a `0` on $\overline{R}$ resets, and the forbidden combination is $\overline{S}=\overline{R}=0$ (which drives both outputs to `1`). You will meet both versions in datasheets — NAND is often preferred because a NAND is cheaper in CMOS — so read the bubbles on the symbol before you trust a table.

### The gated D latch: an enable, and no forbidden state

Two complaints remain: the forbidden input exists, and the latch responds the instant its inputs move, with no way to say *when*. One small circuit fixes both.

Add an **enable** line $EN$ and manufacture $S$ and $R$ from a single data input $D$:

$$S = D \cdot EN, \qquad R = \overline{D} \cdot EN.$$

*In words: only let the latch hear anything while EN is high, and when it does, tell it to set if D is `1` and reset if D is `0`.*

Both fixes fall out immediately:

- When $EN = 0$, both $S$ and $R$ are `0`, which is the hold row. The latch ignores $D$ entirely.
- $S = R = 1$ would require $D = 1$ and $\overline{D} = 1$ at once. Impossible. **The forbidden state is unreachable by construction** — not avoided by discipline, but ruled out by wiring.

Characteristic table (`X` = don't-care):

| $EN$ | $D$ | $Q^+$ |
|---|---|---|
| 0 | X | $Q$ |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

As one equation,

$$\boxed{\,Q^+ = EN\cdot D + \overline{EN}\cdot Q\,}$$

*In words: when enabled, the next state is D; when not, the next state is the old state.* Look at that expression again — it is a 2-to-1 multiplexer from [2.4](02-04-decoders-encoders-multiplexers.md) with $EN$ as the select line, data input `1` coming from the outside world and data input `0` coming from the latch's own output. A memory element *is* a mux that can choose to select itself.

### Transparency: the latch is a window, not a snapshot

Here is the flaw. While $EN = 1$, the gated D latch is **transparent**: $Q$ does not sample $D$ once, it *follows* $D$ continuously, after one gate delay, for as long as the enable stays high. Panel (b) of the figure shows it — inside the shaded windows the $Q$ waveform is just a copy of $D$, and outside them $Q$ is a flat line that ignores $D$ completely.

That includes garbage. Combinational logic settling after an input change emits brief spurious pulses — glitches — as signals race down paths of different length. Feed such a signal to a transparent latch and the glitch sails straight through to $Q$, as the coral spike in panel (b) does. The value you actually keep is whatever $D$ happened to be at the **falling** edge of $EN$, which is a fact about your enable pulse width, not about your design.

Now the consequence that dooms the whole approach. Build a state machine the obvious way: latch output $Q$ feeds combinational next-state logic, whose result feeds back to that same latch's $D$. While $EN$ is high, the loop is closed *through a transparent element*. So a new value of $Q$ propagates through the logic, arrives back at $D$, and changes $Q$ again — and again, as many times as the round-trip delay fits inside the enable pulse. The circuit does not advance one state per enable pulse; it advances as many states as it can cram in. The final state depends on gate delays versus pulse width. Change the temperature, change the answer.

This is not a hypothetical worry. It is why level-sensitive storage is unusable for sequential machines, and P3 below makes you count the laps.

The fix, stated by name: capture the input at an **instant** rather than over an interval. Shrink the transparent window to zero width and the loop can never run twice, because by the time the new $Q$ comes back around, the door is already shut. A storage element that samples at the moment of a clock transition is an **edge-triggered flip-flop**, and building one — from two of these very latches, in fact — is exactly what [3.2](03-02-flip-flops-and-clocking.md) does. Read this lesson as posing the question that 3.2 answers.

### Metastability, briefly

Suppose $D$ changes right as $EN$ falls, so the latch closes on a signal that is mid-transition. The loop can be left sitting near its pencil-on-its-tip balance point, holding neither a clean `0` nor a clean `1` for far longer than its normal propagation delay before toppling one way. The resolution time has no hard upper bound; the probability of still being undecided decays exponentially with waiting time, which is why the standard defence is *time*: a **synchronizer**, two flip-flops in series, gives the first one a full clock period to fall over before anyone reads it. Metastability cannot be designed away — it is a consequence of bistability itself — only made improbable enough that the mean time between failures exceeds the life of the universe. It is a live hazard whenever a signal crosses from one clock domain into another, and a classic cause of bugs that appear once a week and never in simulation.

## Picture

![Panel a shows the cross-coupled NOR SR latch schematic with its two feedback wires drawn in coral; panel b is a timing diagram of D, EN, and Q in which the enable-high windows are shaded, Q tracks D inside them, a narrow glitch on D passes through to Q, and a D change outside a window is ignored](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — walk an SR latch through a sequence).** A NOR SR latch starts holding $Q = 1$. Apply, in order, $(S,R) = (0,0),\ (0,1),\ (0,0),\ (0,0),\ (1,0)$.

Take them one at a time, using the derivation rather than the table:

1. $(0,0)$: both NORs act as inverters, loop equation $Q = \overline{\overline{Q}}$ — hold. $Q = 1$.
2. $(0,1)$: NOR&#8239;1 sees $R = 1$, so $Q = 0$; NOR&#8239;2 then sees $S = 0$ and $Q = 0$, so $\overline{Q} = 1$. $Q = 0$.
3. $(0,0)$: hold. $Q = 0$.
4. $(0,0)$: hold. Still $Q = 0$ — a repeated hold changes nothing, which is exactly what "memory" means.
5. $(1,0)$: NOR&#8239;2 sees $S = 1$, so $\overline{Q} = 0$; NOR&#8239;1 sees two lows and gives $Q = 1$.

Result: $Q = 1, 0, 0, 0, 1$. Note step 3: the value survives the *removal* of the reset pulse. A combinational circuit would have snapped back.

**Example 2 (why you'd care — a transparent latch cannot count).** Try to build the world's smallest counter: one gated D latch with $D$ driven by an inverter from its own $Q$, so $D = \overline{Q}$. Intent: each enable pulse toggles the stored bit.

Say the latch's propagation delay from $D$ to $Q$ is 3 ns and the inverter's is 2 ns, so a full lap of the loop takes 5 ns. Start with $Q = 0$ (hence $D = 1$) and raise $EN$ at $t = 0$:

- $t = 3$ ns: $Q$ follows $D$ up. $Q = 1$.
- $t = 5$ ns: the inverter reacts. $D = 0$.
- $t = 8$ ns: $Q$ follows $D$ down. $Q = 0$.
- $t = 10$ ns: $D = 1$. $t = 13$ ns: $Q = 1$. …

The circuit is not a counter, it is a **ring oscillator** with a 10 ns period, and it keeps oscillating for the entire time $EN$ is high. Whatever bit you end up storing is set by where in the oscillation the falling edge of $EN$ happened to land. Widen the enable pulse by 5 ns and you get the opposite answer. The design intent — "toggle once" — never appears anywhere in the outcome. That is the transparency problem in its purest form, and no amount of care with the combinational logic fixes it: the fault is that the door was open while the loop ran.

## Watch out

- **You might think $S=R=1$ is harmful because "the outputs are undefined."** They are perfectly well defined while the inputs are held — both go to `0`. The damage is twofold: $\overline{Q}$ stops being the complement of $Q$, and the state you land in when you *release* both inputs together is a coin flip decided by gate delays. Forbidden inputs are dangerous on the way out, not on the way in.
- **You might think a gated D latch "samples D when EN goes high."** It does not sample at all; it *tracks*. Every wiggle of $D$ during the whole enable interval reaches $Q$. The value you keep is the one present at the **falling** edge. This single misreading is the most common way to draw a wrong latch waveform.
- **You might carry the NOR latch's table over to a NAND latch.** Do not. In the NAND version the inputs are active-low ($\overline{S}$, $\overline{R}$), hold is both inputs `1`, and the forbidden combination is both `0`. Same feedback idea, every polarity flipped.

## One-liner

> Feedback is the only way gates can remember; an enable tells the memory *when* to listen, but a level-sensitive enable leaves the door open long enough for the signal to run laps — which is why real machines capture on an edge.

## Problems

**P1 (🟢)** A NOR SR latch is holding $Q = 0$. Apply, in order, $(S,R) =$ $(0,0)$, $(1,0)$, $(0,0)$, $(0,1)$, $(0,0)$, $(1,0)$, $(1,1)$. Give $Q$ after each step, and say what is wrong with the last one.

**P2 (🟡)** A gated D latch starts with $Q = 0$. The waveform below is given as eight time slots, each long enough for the latch to settle. Fill in $Q$ for every slot, then name the slots in which $D$ changed but $Q$ did not, and say why.

| Slot | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| $EN$ | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| $D$ | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |

**P3 (🔴)** Take Example 2's toggle loop — a gated D latch with $D = \overline{Q}$, latch delay 3 ns, inverter delay 2 ns — starting at $Q = 0$ with $EN$ raised at $t = 0$ and lowered at $t = 30$ ns. How many times does $Q$ change during the pulse, and what value is finally stored? Then find a pulse width under 30 ns that stores the opposite value, and state the design lesson in one sentence.

<details>
<summary>Solutions</summary>

**P1** Work each step from the gate behaviour (a NOR outputs `1` only when every input is `0`). Starting state $Q = 0$, so $\overline{Q} = 1$.

| Step | $S$ | $R$ | Reasoning | $Q$ |
|---|---|---|---|---|
| 1 | 0 | 0 | Hold: both NORs are inverters, $Q = \overline{\overline{Q}}$ | 0 |
| 2 | 1 | 0 | NOR&#8239;2 sees $S=1$ so $\overline{Q}=0$; NOR&#8239;1 sees $0,0$ so $Q=1$ | 1 |
| 3 | 0 | 0 | Hold — the set pulse is gone but the bit stays | 1 |
| 4 | 0 | 1 | NOR&#8239;1 sees $R=1$ so $Q=0$; NOR&#8239;2 sees $0,0$ so $\overline{Q}=1$ | 0 |
| 5 | 0 | 0 | Hold | 0 |
| 6 | 1 | 0 | Set again | 1 |
| 7 | 1 | 1 | Both gates see a `1`, so $Q = 0$ **and** $\overline{Q} = 0$ | 0 |

So $Q = 0, 1, 1, 0, 0, 1, 0$.

Step 7 is the forbidden input. Two faults: (i) $\overline{Q} = Q = 0$, so the complement relationship every downstream user assumes is violated; (ii) if $S$ and $R$ are then released to `0` together, both gates see all-low inputs and both begin driving toward `1`, each then sees the other and reverses — the settled state is decided by whichever gate is physically faster, not by the designer. The circuit has become a race.

*Check.* Every hold row reproduced the previous value and every set/reset row matched the characteristic table above, with the derivation done from the gates independently. ✓

**P2** Use $Q^+ = EN\cdot D + \overline{EN}\cdot Q$, carrying $Q$ forward slot to slot from the initial $Q = 0$.

| Slot | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| $EN$ | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| $D$ | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| $Q$ | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 1 |

Slot by slot: (1) $EN=0$, hold the initial `0`. (2) $EN=1$, $Q$ takes $D=1$. (3) still enabled, $D$ has fallen, so $Q$ falls too — the enable is still open. (4) $EN=0$, hold `0` even though $D$ rose. (5) $EN=0$, hold `0`. (6) $EN=1$, $Q$ takes $D=0$ — no visible change. (7) still enabled, $Q$ takes $D=1$. (8) $EN=0$, hold the `1` captured at the falling edge.

$D$ changed without moving $Q$ at slots 4 and 5, where $EN = 0$: the latch is closed and $D$ is disconnected from the loop. (Slot 8's $D$ change is likewise ignored.) The instructive pair is slots 2–3: those sit inside one enable interval, and $Q$ both rose and fell within it. That is transparency — the latch did not take one sample, it tracked $D$ the whole time the enable was high.

*Check.* Re-derived by the characteristic table instead of the equation, row by row, with the same result; and every $EN=1$ slot has $Q = D$ while every $EN=0$ slot has $Q$ equal to the preceding slot's $Q$. ✓

**P3** One lap of the loop is $3 + 2 = 5$ ns, but the *first* change comes only after the latch delay, since $D = \overline{Q} = 1$ was already settled when $EN$ rose. So $Q$ changes at

$$t = 3,\ 8,\ 13,\ 18,\ 23,\ 28 \ \text{ns},$$

i.e. every 5 ns starting at 3 ns. The count is $\lfloor (30-3)/5 \rfloor + 1 = \lfloor 5.4 \rfloor + 1 = 6$ changes. Tracking the value: $Q = 0$ on $[0,3)$, then `1`, `0`, `1`, `0`, `1`, and at $t = 28$ it changes to `0`. The next change would be at 33 ns, after the enable falls, so the value frozen at $t = 30$ is

$$\boxed{Q = 0,\ \text{after 6 transitions}}$$

For the opposite result, pick a width landing in an interval where $Q = 1$ — for instance 27 ns, which falls in $[23, 28)$, storing $Q = 1$. A 3 ns difference in pulse width inverts the stored bit.

Design lesson: with a transparent latch in a feedback loop the stored result is set by the ratio of enable width to loop delay, so the "state" the machine reaches is a property of the fabrication process and the temperature rather than of the logic you designed — which is why sequential machines need an element that captures on an edge, not over an interval.

*Check.* Verified the transition list two ways: directly by simulating the alternation, and by the closed form $t_n = 3 + 5n$ for $n = 0,\dots,5$, whose largest member under 30 is $t_5 = 28$ ✓. Parity confirms the value: 6 transitions from an initial `0` returns to `0` ✓.

</details>

## Flashback

**From Lesson 2.5 (Building a simple ALU):** A 4-bit ALU computes $A - B$ as $A + \overline{B} + 1$, where $\overline{B}$ is the bitwise complement and the `1` enters as the carry-in. With $A =$ `0110` and $B =$ `1011` in two's complement (most significant bit on the left), give the 4-bit result and the four status flags Z (zero), N (negative), C (carry out of the top bit), and V (signed overflow, $V = c_3 \oplus c_4$ where $c_4$ is the carry out and $c_3$ the carry into the top bit). Is the signed answer correct?

<details>
<summary>Solution</summary>

Complement $B$: $\overline{B} = $ `0100`. Add $A + \overline{B}$ with carry-in `1`, column by column from the right:

| bit | 3 | 2 | 1 | 0 |
|---|---|---|---|---|
| $A$ | 0 | 1 | 1 | 0 |
| $\overline{B}$ | 0 | 1 | 0 | 0 |
| carry in | 1 | 0 | 0 | 1 |
| sum | 1 | 0 | 1 | 1 |

Bit 0: $0+0+1 = 1$, carry `0`. Bit 1: $1+0+0 = 1$, carry `0`. Bit 2: $1+1+0 = 0$, carry `1`. Bit 3: $0+0+1 = 1$, carry out `0`. Result `1011`, with $c_3 = 1$ and $c_4 = 0$.

Flags: Z $=0$ (result nonzero), N $=1$ (top bit is `1`), C $= c_4 = 0$, and V $= c_3 \oplus c_4 = 1 \oplus 0 = 1$.

The signed answer is **wrong**, and V correctly says so. In decimal $A = +6$ and $B = -5$, so $A - B = +11$, which does not fit the 4-bit two's-complement range $-8$ to $+7$; the pattern `1011` reads as $-5$ instead. Note also that on a subtract, $C = 0$ is the *borrow* indication: unsigned, $6 - 11$ underflows, which is exactly what the missing carry reports.

*Check.* $-5 = 11 - 16$, i.e. the true result differs from the stored one by exactly $2^4$, the signature of a single signed overflow ✓. And the sign rule agrees: adding two positives ($+6$ and $+5$) produced a negative, which always means overflow ✓.

</details>

## Connections

- **Backward:** the whole cell is built from NOR gates and De Morgan reasoning out of [1.3](01-03-boolean-algebra-logic-gates.md), and its characteristic equation $Q^+ = EN\cdot D + \overline{EN}\cdot Q$ is literally the 2-to-1 multiplexer of [2.4](02-04-decoders-encoders-multiplexers.md) with $EN$ as the select line and one data input tied to the output — memory as a mux that selects itself.
- **Forward:** [3.2](03-02-flip-flops-and-clocking.md) cures transparency by chaining two of these latches on opposite enable phases (master–slave) to get an edge-triggered flip-flop, which is the storage element every later lesson assumes: the state registers analysed in [3.3](03-03-analysis-of-synchronous-circuits.md), the FSMs designed in [3.4](03-04-design-of-finite-state-machines.md), the registers of [4.1](04-01-registers-and-shift-registers.md), and the counters of [4.2](04-02-counters.md). The bare cross-coupled inverter pair also survives on its own: it is the six-transistor static RAM cell you meet in [4.3](04-03-memory-and-programmable-logic.md).
- **Sideways:** the positive feedback that makes this circuit bistable is the same mechanism that gives a Schmitt trigger its hysteresis in [`electronics` 3.5](../../electronics/lessons/03-05-comparators-schmitt-triggers.md), and the inverter gain that snaps a metastable node into a clean level is the CMOS transfer characteristic of [`electronics` 4.3](../../electronics/lessons/04-03-cmos-inverter-gates.md). More abstractly, adding feedback to a memoryless map is precisely what turns a finite-impulse-response filter into a recursive one in [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md) — same structural move, different algebra.

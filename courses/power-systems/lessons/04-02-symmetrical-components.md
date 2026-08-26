# Power Systems · Lesson 4.2: Symmetrical components

> ⏱ ~15 min · Module 4: Faults, protection, and stability · Builds on: [4.1 Symmetrical faults](04-01-symmetrical-faults.md), [1.1 AC power recalled, and balanced three-phase](01-01-ac-power-and-three-phase.md) · Unlocks: [4.3 Sequence networks and unsymmetrical faults](04-03-sequence-networks-unsymmetrical-faults.md), [4.4 Protection and relaying basics](04-04-protection-and-relaying.md)

## Why this matters

[4.1](04-01-symmetrical-faults.md) handled the three-phase fault, which stays balanced and therefore yields to per-phase analysis. But **most faults are not balanced**: roughly 70% of transmission faults are single-line-to-ground, 15% line-to-line, 10% double-line-to-ground, and only about 5% are three-phase.

For an unbalanced fault the three phases carry different currents and the per-phase equivalent collapses. Analyzing all three phases simultaneously with mutual coupling between them is possible but miserable.

Charles Fortescue's 1918 transformation makes it easy. Any set of three unbalanced phasors decomposes into **three balanced sets**, each of which can be analyzed with ordinary per-phase methods. The unbalanced problem becomes three balanced problems, coupled only at the fault point.

The technique reaches well beyond fault analysis. Negative-sequence current heats generator rotors and is the basis of a standard protection function; [zero-sequence](../reference.md#zero-sequence) current is what every ground relay measures; and unbalance is quantified for power-quality standards as the ratio $V_2/V_1$.

## The idea

Three unbalanced phasors carry six degrees of freedom (three magnitudes, three angles). Fortescue's insight was to find a basis of three *balanced* sets that spans the same space:

**Positive sequence** — three equal phasors, $120°$ apart, in the normal rotation $a$–$b$–$c$. This is what a healthy system carries, and what makes motors turn the right way.

**Negative sequence** — three equal phasors, $120°$ apart, in the *reversed* rotation $a$–$c$–$b$. Applied to a motor it produces torque in the wrong direction, and in a generator it induces double-frequency rotor currents that cause severe heating.

**Zero sequence** — three equal phasors, all **in phase**. They do not sum to zero, so zero-sequence current needs a return path: a neutral conductor or a ground connection. **No ground, no zero sequence** — which is the single most useful fact in the entire subject.

Any unbalanced set is the sum of one of each. The counting works: three balanced sets, each with a magnitude and an angle, is six degrees of freedom — matching the original.

The reason this pays off is that in a *symmetric* network (one whose three phases are physically identical, which transposed lines and three-phase machines are), the three sequences **do not interact**. Positive-sequence voltage drives only positive-sequence current. The $3\times3$ coupled problem block-diagonalizes into three independent single-phase problems, and this is precisely an eigen-decomposition: the sequence sets are the eigenvectors of a symmetric circulant impedance matrix.

## The formal version

**The $a$-operator.**

$$\boxed{\;a = 1\angle120° = -\tfrac12+j\tfrac{\sqrt3}{2}, \qquad a^2 = 1\angle240° = 1\angle{-120°}, \qquad a^3 = 1.\;}$$

The identity that does all the work:

$$\boxed{\;1+a+a^2 = 0.\;}$$

*In words: multiplying by $a$ rotates a phasor $120°$ counterclockwise, and the three cube roots of unity sum to zero.*

**Decomposition (phase → sequence).**

$$\boxed{\;\begin{bmatrix}V_0\\V_1\\V_2\end{bmatrix} = \frac{1}{3}\begin{bmatrix}1&1&1\\1&a&a^2\\1&a^2&a\end{bmatrix}\begin{bmatrix}V_a\\V_b\\V_c\end{bmatrix}\;}$$

$$V_0 = \tfrac13(V_a+V_b+V_c), \quad V_1 = \tfrac13(V_a+aV_b+a^2V_c), \quad V_2 = \tfrac13(V_a+a^2V_b+aV_c).$$

**Reconstruction (sequence → phase).**

$$\boxed{\;\begin{bmatrix}V_a\\V_b\\V_c\end{bmatrix} = \begin{bmatrix}1&1&1\\1&a^2&a\\1&a&a^2\end{bmatrix}\begin{bmatrix}V_0\\V_1\\V_2\end{bmatrix}\;}$$

$$V_a = V_0+V_1+V_2, \quad V_b = V_0+a^2V_1+aV_2, \quad V_c = V_0+aV_1+a^2V_2.$$

Note the two matrices are transposes of each other up to the $1/3$ — the transformation is unitary after scaling, which is why it preserves power (below).

**The subscript convention.** $V_1$, $V_2$, $V_0$ are the sequence components **of phase $a$**. The other phases' components follow by rotation and are never written explicitly.

**Immediate consequences.** These are worth memorizing, because they identify a fault type from measurements alone:

| Condition | Sequence content |
|---|---|
| Balanced (normal) | $V_1$ only; $V_0 = V_2 = 0$ |
| $V_a+V_b+V_c = 0$ (no neutral path) | $V_0 = 0$ |
| Single-line-to-ground | $I_0 = I_1 = I_2 = I_a/3$ |
| Line-to-line | $I_0 = 0$, $I_2 = -I_1$ |
| Any ungrounded system | $I_0 = 0$ always |

**Zero sequence and the neutral.** Since all three zero-sequence phasors are in phase:

$$\boxed{\;I_n = I_a+I_b+I_c = 3I_0.\;}$$

*In words: the neutral or ground current is three times the zero-sequence current.* This is exactly what a **residual connection** of three current transformers measures, and it is the basis of every ground-overcurrent relay ([4.4](04-04-protection-and-relaying.md)).

**Sequence impedances.** In a symmetric network each sequence sees its own impedance:

| Element | $Z_1$ | $Z_2$ | $Z_0$ |
|---|---|---|---|
| Transmission line | $Z$ | $Z_1$ (identical) | $(2\text{–}3.5)Z_1$ |
| Transformer | $Z$ | $Z_1$ | $Z_1$, but path depends on connection |
| Synchronous generator | $X_d''$ | $\approx X_d''$ | $(0.1\text{–}0.7)X_1$ |
| Static load | $Z$ | $Z_1$ | depends on grounding |

Two entries deserve comment.

**A line's $Z_0$ is 2–3.5 times its $Z_1$** because zero-sequence current returns through the earth and any overhead ground wires, a path with much larger effective loop area and hence more inductance, plus real resistance from the soil.

**A generator's $Z_1\neq Z_2$ in principle** but is close in practice; its $Z_0$ is small because zero-sequence currents produce no net rotating MMF, so the only impedance is leakage.

**Transformer zero-sequence paths.** This is the part that trips everyone, and it is entirely about whether a path to ground exists on each side:

| Connection | Zero-sequence path |
|---|---|
| Y$_g$–Y$_g$ | passes through both sides |
| Y$_g$–Δ | flows on the Y$_g$ side, **circulates in the Δ**, does not pass through |
| Y–Δ (ungrounded Y) | **blocked entirely** |
| Δ–Δ | **blocked entirely** |
| Y$_g$–Y (one grounded) | **blocked** |

*In words: zero sequence needs a grounded neutral to enter and a grounded neutral to leave.* A delta winding is a perfect trap — zero-sequence current circulates inside it (which is useful: it provides a zero-sequence source) but cannot pass through.

This single table decides most of what the sequence networks in [4.3](04-03-sequence-networks-unsymmetrical-faults.md) look like, and it is why **transformer connection choice is a grounding decision**, not just a voltage-ratio decision.

**Grounding impedance.** A neutral grounded through an impedance $Z_n$ appears in the **zero-sequence network as $3Z_n$**, because $3I_0$ flows through it while the network is drawn on a per-phase basis.

**Power in sequence quantities.**

$$\boxed{\;S_{3\phi} = V_aI_a^{*}+V_bI_b^{*}+V_cI_c^{*} = 3\left(V_0I_0^{*}+V_1I_1^{*}+V_2I_2^{*}\right).\;}$$

*In words: total power is the sum of the three sequences' powers, with no cross terms* — the sequences are orthogonal, which is what makes the decomposition genuinely useful rather than merely a change of variables.

## Picture

![A two-panel figure. Left: three phasor diagrams side by side — the positive-sequence set with three equal phasors a, b, c spaced one hundred twenty degrees in counterclockwise a-b-c order; the negative-sequence set with three equal phasors in the reversed a-c-b order; and the zero-sequence set with all three phasors drawn on top of one another pointing the same direction — with a fourth diagram beneath showing the three sets added tip to tail to produce an unbalanced result. Right: a table of transformer connections drawn as small winding symbols, each with an arrow showing whether zero-sequence current passes through, circulates in the delta, or is blocked, with grounded neutrals marked.](assets/04-02-fig1.svg)

Left: the three balanced sets and their sum. The positive set is a healthy system; the negative set rotates backwards; the zero set is three phasors stacked, which is why it needs a return path.

Right: the connection table that determines every zero-sequence network. Zero sequence enters only through a grounded neutral and leaves only through another, and a delta traps it.

## Worked examples

**Example 1 (decomposing an unbalanced set).** A system has $V_a = 4\angle0°$, $V_b = 3\angle{-90°}$, $V_c = 8\angle143.13°$ (per-unit). Find the sequence components and verify.

*Rectangular forms.*

$$V_a = 4+j0, \qquad V_b = 0-j3, \qquad V_c = 8(\cos143.13°+j\sin143.13°) = -6.4+j4.8.$$

*Zero sequence.*

$$V_0 = \tfrac13(V_a+V_b+V_c) = \tfrac13\left[(4+0-6.4)+j(0-3+4.8)\right] = \tfrac13(-2.4+j1.8)$$
$$= -0.8+j0.6 = 1.0\angle143.13°.$$

*Positive sequence.*

$$aV_b = (1\angle120°)(3\angle{-90°}) = 3\angle30° = 2.598+j1.5,$$
$$a^2V_c = (1\angle{-120°})(8\angle143.13°) = 8\angle23.13° = 7.357+j3.143,$$
$$V_1 = \tfrac13\left[(4+2.598+7.357)+j(0+1.5+3.143)\right] = \tfrac13(13.955+j4.643)$$
$$= 4.652+j1.548 = 4.902\angle18.40°.$$

*Negative sequence.*

$$a^2V_b = (1\angle{-120°})(3\angle{-90°}) = 3\angle{-210°} = 3\angle150° = -2.598+j1.5,$$
$$aV_c = (1\angle120°)(8\angle143.13°) = 8\angle263.13° = -0.955-j7.943,$$
$$V_2 = \tfrac13\left[(4-2.598-0.955)+j(0+1.5-7.943)\right] = \tfrac13(0.447-j6.443)$$
$$= 0.149-j2.148 = 2.153\angle{-86.05°}.$$

*Verify by reconstruction.*

$$V_a = V_0+V_1+V_2 = (-0.8+4.652+0.149)+j(0.6+1.548-2.148) = 4.001+j0.000 = 4\angle0°\ \checkmark$$

$$V_b = V_0+a^2V_1+aV_2:$$
$$a^2V_1 = 4.902\angle(18.40°-120°) = 4.902\angle{-101.60°} = -0.988-j4.801,$$
$$aV_2 = 2.153\angle(-86.05°+120°) = 2.153\angle33.95° = 1.786+j1.203,$$
$$V_b = (-0.8-0.988+1.786)+j(0.6-4.801+1.203) = -0.002-j2.998 = 3\angle{-90°}\ \checkmark$$

$$V_c = V_0+aV_1+a^2V_2 = 8\angle143.13°\ \checkmark\ \text{(by the same procedure)}.$$

*Reading the result.* The system is **badly unbalanced**:

$$\frac{|V_2|}{|V_1|} = \frac{2.153}{4.902} = 43.9\%, \qquad \frac{|V_0|}{|V_1|} = \frac{1.0}{4.902} = 20.4\%.$$

Power-quality standards limit voltage unbalance ($V_2/V_1$) to **2%** for normal operation; 44% is a severe fault condition, not an operating point. And a nonzero $V_0$ confirms a **ground connection is involved** — an ungrounded system cannot produce zero-sequence voltage relative to ground in this way, so this is a ground fault rather than a phase-to-phase one.

**Example 2 (identifying a fault from its sequence signature).** A relay measures three cases. Identify each.

*Case A:* $I_a = 6\angle0°$, $I_b = 0$, $I_c = 0$ (kA).

$$I_0 = \tfrac13(6) = 2\angle0°, \qquad I_1 = \tfrac13(6) = 2\angle0°, \qquad I_2 = \tfrac13(6) = 2\angle0°.$$

**All three equal** — the signature of a **single-line-to-ground fault on phase $a$**. Note $I_a = 3I_0$, which is exactly what the residual CT connection reads.

*Case B:* $I_a = 0$, $I_b = 8\angle{-90°}$, $I_c = 8\angle90°$ (kA), i.e. $I_c = -I_b$.

$$I_0 = \tfrac13(0+8\angle{-90°}+8\angle90°) = \tfrac13(0-j8+j8) = 0,$$
$$I_1 = \tfrac13\left(0+a(8\angle{-90°})+a^2(8\angle90°)\right) = 4.619\angle0°,$$
$$I_2 = \tfrac13\left(0+a^2(8\angle{-90°})+a(8\angle90°)\right) = 4.619\angle180° = -I_1.$$

**$I_0 = 0$ and $I_2 = -I_1$** — the signature of a **line-to-line fault between phases $b$ and $c$**. No ground is involved, confirmed by the absence of zero sequence.

*Case C:* $I_a = 0$, $I_b = 10\angle{-120°}$, $I_c = 10\angle120°$ (A) — a conductor has broken on phase $a$ while the rest carries balanced load.

$$I_0 = \tfrac13(0+10\angle{-120°}+10\angle120°) = \tfrac13(-10) = 3.333\angle180°,$$
$$I_1 = 6.667\angle0°, \qquad I_2 = 3.333\angle180°.$$

**All three sequences present, with $I_0 = I_2$** — the signature of an **open conductor**, a *series* unbalance rather than a shunt fault.

*Why this matters operationally.* A relay that measures all three sequence components can classify a disturbance before deciding how to respond:

| Measurement | Conclusion |
|---|---|
| $I_1$ large, $I_0 = I_2 = 0$ | three-phase fault |
| $I_0 = I_1 = I_2$ | single-line-to-ground |
| $I_0 = 0$, $I_2 = -I_1$ | line-to-line |
| $I_0$ and $I_2$ both large, $I_0\neq I_2$ | double-line-to-ground |
| $I_2$ large with **small** $I_1$ | open conductor or severe unbalance |

That last row is the one worth dwelling on. A broken conductor produces **little or no overcurrent** — Case C's currents are ordinary load currents — so an overcurrent relay sees nothing and the fault persists indefinitely, with a live conductor possibly on the ground. **Negative-sequence detection is the only practical way to find it**, and modern relays include a dedicated element for exactly this.

*And the generator-protection use.* Negative-sequence current in a generator rotates backwards relative to the rotor, so the rotor sees it at **twice** system frequency. The induced eddy currents heat the rotor surface fast, and machines carry a continuous limit of roughly $I_2 = 0.05$–$0.10$ pu with a short-time limit expressed as $I_2^2t\leq K$ (with $K$ typically 10–40). A negative-sequence relay integrates $I_2^2t$ and trips before that limit is reached — protection based entirely on a quantity that does not exist in balanced operation.

## Watch out

- **You might use the wrong matrix direction.** The $1/3$ goes with phase → sequence. Sequence → phase has no $1/3$.
- **You might mix $a$ and $a^2$.** $V_1$ uses $(1, a, a^2)$; $V_2$ uses $(1, a^2, a)$. Swapping them exchanges positive and negative sequence, which is exactly the kind of error that produces a plausible wrong answer.
- **You might expect zero sequence on an ungrounded system.** No return path means $I_0 = 0$, always. If your answer has zero-sequence current in a delta or ungrounded-Y circuit, it is wrong.
- **You might forget the factor of 3 on the neutral.** $I_n = 3I_0$, and a neutral grounding impedance $Z_n$ appears as $3Z_n$ in the zero-sequence network.
- **You might assume $Z_0 = Z_1$ for a line.** It is 2 to 3.5 times larger, and the error propagates directly into ground-fault current.
- **You might apply the decomposition to an asymmetric network.** Sequence decoupling requires the network itself to be symmetric. An untransposed line has some coupling between sequences; it is usually small but is exactly what causes "false" residual current on long untransposed lines.
- **You might take the sequence components of the wrong phase.** By convention they are phase $a$'s.

## One-liner

> Any three unbalanced phasors are the sum of a positive-sequence set, a negative-sequence set, and a zero-sequence set of three in-phase phasors that needs a ground path — and in a symmetric network the three sequences do not talk to each other, which turns one coupled problem into three simple ones.

## Problems

**P1 (🟢)** A balanced set has $V_a = 100\angle0°$, $V_b = 100\angle{-120°}$, $V_c = 100\angle120°$ V. (a) Find $V_0$, $V_1$, $V_2$. (b) Explain the result. (c) Now let $V_c = 100\angle120°$ be replaced by $V_c = 0$ (a blown fuse). Find the new sequence components and the unbalance factor $|V_2|/|V_1|$.

**P2 (🟡)** Three line currents are $I_a = 10\angle0°$, $I_b = 10\angle{-100°}$, $I_c = 10\angle100°$ A — equal magnitudes but wrong angles. (a) Find the sequence components. (b) Find the neutral current. (c) Find the unbalance factor. (d) Comment on whether an overcurrent relay would detect this condition.

**P3 (🔴)** A generator's sequence impedances are $Z_1 = j0.20$, $Z_2 = j0.22$, $Z_0 = j0.06$ pu, and its neutral is grounded through a reactor $X_n = j0.05$ pu. (a) Draw (describe) the three sequence networks and state what appears in the zero-sequence one. (b) A single-line-to-ground fault occurs at its terminals with $E = 1.0$ pu; using $I_0 = I_1 = I_2 = E/(Z_0+Z_1+Z_2)$, find the fault current. (c) Repeat with the neutral solidly grounded ($X_n = 0$) and with the neutral ungrounded. (d) Compare all three with the three-phase fault current $E/Z_1$, and explain the engineering trade-off in choosing a grounding method.

<details>
<summary>Solutions</summary>

**P1** (a) $$V_0 = \tfrac13\left(100\angle0°+100\angle{-120°}+100\angle120°\right) = \tfrac13(100-50-j86.6-50+j86.6) = 0.$$

$$V_1 = \tfrac13\left(100\angle0°+(1\angle120°)(100\angle{-120°})+(1\angle{-120°})(100\angle120°)\right)$$
$$= \tfrac13(100+100+100) = 100\angle0°.$$

$$V_2 = \tfrac13\left(100\angle0°+(1\angle{-120°})(100\angle{-120°})+(1\angle120°)(100\angle120°)\right)$$
$$= \tfrac13\left(100+100\angle{-240°}+100\angle240°\right) = \tfrac13(100+100\angle120°+100\angle{-120°}) = 0.$$

$$\boxed{V_0 = 0, \quad V_1 = 100\angle0°, \quad V_2 = 0.}$$

(b) **A balanced positive-sequence set is pure positive sequence** — which it must be, since the positive-sequence basis vector *is* a balanced $a$–$b$–$c$ set. The decomposition is a change of basis, and a vector that already lies along one basis direction has no components along the others.

This is the normal operating condition of a power system, and it is why the entire per-phase analysis of Modules 1–3 was legitimate: with only positive sequence present, one phase tells you everything.

(c) With $V_c = 0$:

$$V_0 = \tfrac13(100+100\angle{-120°}+0) = \tfrac13(100-50-j86.6) = \tfrac13(50-j86.6) = 16.67-j28.87 = 33.33\angle{-60°}.$$

$$V_1 = \tfrac13\left(100+(1\angle120°)(100\angle{-120°})+0\right) = \tfrac13(100+100) = 66.67\angle0°.$$

$$V_2 = \tfrac13\left(100+(1\angle{-120°})(100\angle{-120°})+0\right) = \tfrac13\left(100+100\angle{-240°}\right)$$
$$= \tfrac13(100+100\angle120°) = \tfrac13(100-50+j86.6) = \tfrac13(50+j86.6) = 33.33\angle60°.$$

$$\text{unbalance} = \frac{|V_2|}{|V_1|} = \frac{33.33}{66.67} = 50\%.$$

*Check by reconstruction:* $V_c = V_0+aV_1+a^2V_2 = 33.33\angle{-60°}+66.67\angle120°+33.33\angle{-60°}$. In rectangular: $(16.67-j28.87)+(-33.33+j57.74)+(16.67-j28.87) = 0.01+j0.00 \approx 0$ ✓.

**Losing one phase produces 50% unbalance** — twenty-five times the 2% power-quality limit. A three-phase motor fed this way would draw heavy negative-sequence current, overheat, and stall; single-phasing protection exists specifically to catch it.

**P2** (a) $$I_a = 10+j0, \qquad I_b = 10\angle{-100°} = -1.736-j9.848, \qquad I_c = 10\angle100° = -1.736+j9.848.$$

$$I_0 = \tfrac13(10-1.736-1.736+j(-9.848+9.848)) = \tfrac13(6.528) = 2.176\angle0°\ \mathrm{A}.$$

$$aI_b = (1\angle120°)(10\angle{-100°}) = 10\angle20° = 9.397+j3.420,$$
$$a^2I_c = (1\angle{-120°})(10\angle100°) = 10\angle{-20°} = 9.397-j3.420,$$
$$I_1 = \tfrac13(10+9.397+9.397) = \tfrac13(28.794) = 9.598\angle0°\ \mathrm{A}.$$

$$a^2I_b = (1\angle{-120°})(10\angle{-100°}) = 10\angle{-220°} = 10\angle140° = -7.660+j6.428,$$
$$aI_c = (1\angle120°)(10\angle100°) = 10\angle220° = -7.660-j6.428,$$
$$I_2 = \tfrac13(10-7.660-7.660) = \tfrac13(-5.320) = 1.773\angle180°\ \mathrm{A}.$$

*Check:* $I_0+I_1+I_2 = 2.176+9.598-1.773 = 10.001 = I_a$ ✓.

(b) $$I_n = 3I_0 = 3(2.176) = 6.53\angle0°\ \mathrm{A}.$$

(c) $$\frac{|I_2|}{|I_1|} = \frac{1.773}{9.598} = 18.5\%.$$

(d) **No — an overcurrent relay would see nothing wrong.** All three phase currents are exactly 10 A, presumably well below any pickup setting. Phase overcurrent protection responds only to magnitude, and the magnitudes are perfectly normal.

Yet the condition is genuinely damaging:

**18.5% negative sequence** is nine times the 2% power-quality limit. In a generator this would drive rotor heating far past the continuous $I_2$ limit of 5–10%.

**6.5 A of neutral current** flows where a balanced system would have none — enough to operate a sensitive ground relay, which is typically set at a few percent of rating precisely because there should be nothing there.

*The lesson.* **Sequence quantities detect conditions that phase quantities cannot.** A protection scheme built only on phase overcurrent is blind to unbalance, which is why modern relays compute $I_1$, $I_2$ and $I_0$ continuously and have dedicated elements for each. Case C of Example 2 (the broken conductor) is the same lesson in a more dangerous form.

**P3** (a) *Positive-sequence network:* a source $E = 1.0$ pu behind $Z_1 = j0.20$, terminating at the fault point. The **only** network with a source, since a generator produces only positive-sequence EMF.

*Negative-sequence network:* $Z_2 = j0.22$, no source.

*Zero-sequence network:* $Z_0 = j0.06$ **in series with $3X_n = 3(j0.05) = j0.15$**, giving a total of $j0.21$, no source.

The factor of 3 arises because the physical neutral carries $3I_0$ while the sequence network is drawn per phase: the voltage drop $3I_0X_n$ must be represented as $I_0(3X_n)$.

(b) $$Z_0^{\rm total} = j0.06+j0.15 = j0.21.$$

$$I_1 = I_2 = I_0 = \frac{E}{Z_0+Z_1+Z_2} = \frac{1.0}{j(0.21+0.20+0.22)} = \frac{1.0}{j0.63} = -j1.587\ \mathrm{pu}.$$

$$I_f = I_a = 3I_0 = 3(1.587) = 4.762\ \mathrm{pu}.$$

(c) *Solidly grounded* ($X_n = 0$, so $Z_0 = j0.06$):

$$I_0 = \frac{1.0}{j(0.06+0.20+0.22)} = \frac{1.0}{j0.48} = -j2.083, \qquad I_f = 3(2.083) = 6.250\ \mathrm{pu}.$$

*Ungrounded* ($X_n = \infty$): the zero-sequence network is **open**, so

$$I_0 = 0 \quad\Longrightarrow\quad I_f = 0\ \mathrm{pu}.$$

(d) | Grounding | $I_f^{\rm SLG}$ (pu) | vs. three-phase |
|---|---|---|
| Solid | 6.250 | **125%** |
| Reactor $j0.05$ | 4.762 | 95% |
| Ungrounded | 0 | 0% |
| *(three-phase fault* $E/Z_1$*)* | *5.000* | *100%* |

**The most striking result: with solid grounding, the single-line-to-ground fault current exceeds the three-phase fault current.** That happens whenever $Z_0<Z_1$, which is common for generators (whose $Z_0$ is small, being pure leakage) and it directly contradicts the intuition from [4.1](04-01-symmetrical-faults.md) that the three-phase fault is always worst. Breaker duty must be checked against **both**.

*The trade-off.*

**Solid grounding.** Highest fault current, so the most equipment stress and the greatest arc-flash hazard — but the fault is easy to detect and clear fast, and the healthy phases' voltages barely rise. Standard on transmission and on four-wire distribution.

**Reactance or resistance grounding.** Limits the fault current to a chosen value (here 4.76 pu; resistance grounding typically targets a few hundred amperes). Reduces damage at the fault point and arc-flash energy, while still providing enough current for a ground relay to see. **The usual choice for generators and industrial systems**, and the reason it is usual is that most generator damage in a stator ground fault is proportional to the fault current — limiting it to a few amperes can turn a rewind into a repair.

**Ungrounded.** No ground-fault current at all, so the system **keeps running** with one phase faulted — historically attractive for continuous processes. But the two healthy phases rise to full line-to-line voltage relative to ground ($\sqrt3$ times normal), stressing insulation everywhere; a second ground fault on another phase becomes a line-to-line fault; and locating the first fault is difficult. Worse, the fault current that does flow (through the system's distributed capacitance) can sustain an intermittent arc that produces **transient overvoltages of 5–6 times normal**. Largely abandoned for these reasons, and replaced by **high-resistance grounding**, which keeps the current small (5–10 A) while damping the arcing overvoltages and allowing the fault to be located.

*The general principle.* Grounding is chosen by trading **fault current magnitude** against **detectability and overvoltage**. There is no universally right answer; there is a right answer for each system's continuity requirements, insulation level, and protection philosophy — which is why the grounding method is one of the first decisions made in designing any power system, and one of the hardest to change afterwards.

</details>

## Flashback

**From Lesson 4.1 (Symmetrical faults):** A generator with $X_d'' = 0.20$ pu on a 100 MVA, 13.8 kV base suffers a bolted three-phase fault at its terminals with $E = 1.0$ pu. (a) Find the fault current in pu and amperes. (b) Express it in terms of sequence components.

<details>
<summary>Solution</summary>

(a) $$I_f = \frac{1.0}{j0.20} = -j5.0\ \mathrm{pu}.$$

$$I_{base} = \frac{100\times10^{6}}{\sqrt3(13{,}800)} = 4183.7\ \mathrm{A}, \qquad I_f = 5.0(4183.7) = 20{,}918\ \mathrm{A}.$$

(b) A three-phase bolted fault is **balanced**: $I_a = 5\angle{-90°}$, $I_b = 5\angle{-210°}$, $I_c = 5\angle30°$ pu, a positive-sequence set.

$$I_1 = 5\angle{-90°}\ \mathrm{pu}, \qquad I_2 = 0, \qquad I_0 = 0.$$

*Why this matters for the next lesson.* The three-phase fault involves **only the positive-sequence network**, which is exactly why [4.1](04-01-symmetrical-faults.md) could analyze it with no mention of symmetrical components at all: $I_f = E/Z_1$ is the positive-sequence network solved on its own.

Every unbalanced fault, by contrast, forces the sequence networks to interconnect — series for single-line-to-ground, parallel for line-to-line — and the pattern of that interconnection is what [4.3](04-03-sequence-networks-unsymmetrical-faults.md) derives. The three-phase fault is the degenerate case where no interconnection is needed, which makes it both the simplest to compute and the least informative about the machinery.

</details>

## Connections

- **Backward:** the balanced three-phase relationships are [1.1](01-01-ac-power-and-three-phase.md)'s; the fault-network conventions are [4.1](04-01-symmetrical-faults.md)'s; the transformer connections whose grounding matters here are [2.3](02-03-three-phase-transformer-connections.md)'s.
- **Forward:** [4.3](04-03-sequence-networks-unsymmetrical-faults.md) connects the three sequence networks according to the fault type; [4.4](04-04-protection-and-relaying.md) builds relays that measure $I_0$ and $I_2$ directly.
- **Sideways:** this is a discrete Fourier transform on three points — the matrix is the $3\times3$ DFT matrix, and the sequence components are the spatial harmonics of the phase set. The block-diagonalization of a circulant matrix by the DFT is the same result that underlies [`fourier-analysis`](../../fourier-analysis/syllabus.md)'s convolution theorem and the eigen-decomposition of [`linalg-refresher` 2.1](../../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md).

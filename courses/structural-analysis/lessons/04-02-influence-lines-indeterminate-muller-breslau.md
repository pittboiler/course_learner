# Structural Analysis · Lesson 4.2: Influence lines for indeterminate structures

> ⏱ ~15 min · Module 4: Influence lines & matrix methods · Builds on: [4.1 Influence lines (determinate)](04-01-influence-lines-determinate.md), [3.2 Force method for beams](03-02-force-method-beams.md) · Unlocks: Boss problem 4(a)

## Why this matters

For a determinate beam, an influence line is a few straight segments you can sketch from statics alone ([4.1](04-01-influence-lines-determinate.md)). The moment a beam becomes indeterminate — a continuous beam over three or more supports, a bridge girder running unbroken over its piers — those clean straight lines **curve**, because the redundant reactions redistribute load along the whole structure. Recomputing the response for every position of a moving truck sounds like a nightmare of repeated force-method solves. It isn't, thanks to one of the most beautiful shortcuts in structural engineering: the **Müller-Breslau principle**, which turns "where should I put the live load to break this bridge?" into a question you can answer by *bending a physical model with your hands*.

## The idea

Here's the trick in one breath: **the influence line for any reaction, shear, or moment has the same shape as the deflected form the structure springs into when you release that one restraint and nudge it a unit amount in the response's positive direction.**

Why on earth would a *deflection* shape tell you about a *moving load*? Because of a reciprocity that runs deep in elastic structures (Betti–Maxwell): the deflection at point $P$ caused by a unit action at $Q$ equals the deflection at $Q$ caused by a unit action at $P$. Swap cause and effect and the numbers don't change. Read that backwards and the influence line — response at a *fixed* spot as a unit load *roams* — becomes the deflected shape from a unit *release* at the fixed spot, read across all the roaming positions.

You don't need the proof to use it. You need three physical gestures:

- **Reaction IL** — take the support away and jack that point up by one unit. The shape the beam sags into, everywhere else, is the influence line for that reaction.
- **Moment-at-a-section IL** — cut in a hinge at the section and rotate the two faces apart by a unit relative angle. The deflected shape is the influence line for the bending moment there.
- **Shear-at-a-section IL** — cut in a shear release (the two faces can slide vertically but not rotate) and slide them a unit apart. That shape is the influence line for the shear.

In each case you remove *exactly the restraint that carries the response you want*, and push in the direction that response calls "positive." For a **determinate** beam this deflected shape is made of straight lines — recovering [4.1](04-01-influence-lines-determinate.md) exactly. For an **indeterminate** beam the released structure still has enough supports to bend elastically, so the shape comes out **curved**. Same principle, curved answer.

## The formal version

**Müller-Breslau principle.** Let $R$ be a chosen response (a reaction, or the shear or moment at a section). Release the single restraint that transmits $R$, and impose a unit displacement (for a force response) or unit rotation (for a moment response) at that release, in the positive sense of $R$. Then the resulting transverse deflected shape $\delta(x)$ *is* the influence line for $R$:

$$\text{IL}_R(x) = \delta(x),$$

where $x$ (m) is the position of the moving unit load and $\delta(x)$ (dimensionless for a moment IL, since we imposed a unit *rotation*; length/length for a reaction IL) is the deflection of the released structure at $x$. *In words: the value of $R$ when the unit load sits at $x$ equals how far the released, unit-displaced structure has deflected at $x$.*

**Why it holds (one line).** By Betti's reciprocal theorem, the work done by the real unit load (at $x$) moving through the deflection caused by the imposed release equals the work done by the release action moving through the deflection caused by the unit load. Set the imposed displacement to unity and the release action *is* the response $R$; the equation collapses to $R = \delta(x)$.

**Two ways to use it.**

1. **Qualitative** (the everyday use). Sketch the released deflected shape by eye. Its algebraic sign tells you where to put live load: to **maximize** $R$, load every region where the IL has the sign you want; to minimize, load the opposite regions. A uniform live load $w$ (kN/m) over a stretch contributes $w \times (\text{area under the IL over that stretch})$, so *load exactly the regions where the IL keeps one sign.*

2. **Quantitative.** The ordinates $\delta(x)$ are just deflections of the **released (primary) structure** — compute them with the same force-method / unit-load machinery from [3.2](03-02-force-method-beams.md) and [2.4](02-04-unit-load-method-beams-frames.md). No new theory, just the deflected shape of a statically determinate released beam.

Compare with **mechanics-of-materials**: that course found single-member deflected shapes by double integration and superposition. Müller-Breslau is those same elastic curves, now *reinterpreted* as influence lines for a whole continuous structure.

## Picture

![Two-span continuous beam ABC with a hinge inserted at the central support B and a unit relative rotation imposed; both spans bulge the same way, and that single-signed deflected shape is the influence line for the bending moment at B. Coral arrows show live load placed over both spans to maximize hogging.](assets/04-02-fig1.svg)

## Worked examples

**Example 1 — Boss problem 4(a): IL for the moment at the central support of a two-span beam.**

A continuous beam $ABC$ has a pin at $A$, a support at the interior point $B$, and a support at $C$, with two **equal spans** of length $L$ (so $AB = BC = L$). We want the influence line for the bending moment $M_B$ at the central support, then the worst live-load pattern.

*Apply Müller-Breslau.* The response is a **moment at $B$**, so insert a **hinge at $B$** and impose a **unit relative rotation** between the two faces (in the positive-moment sense). The supports at $A$, $B$, $C$ still hold those three points at zero deflection, so the beam becomes two simply-supported spans, $AB$ and $BC$, sharing the hinge at $B$.

*Read the shape.* Rotating the hinge kicks span $AB$ into an arch and span $BC$ into an arch **the same way** (the figure): the deflected ordinate is **zero at $A$, $B$, and $C$** (all supported) and bulges to one side in *both* spans, with a kink at $B$. Crucially the influence line is **single-signed over the entire beam** — same sign in span $AB$ as in span $BC$. There is no sign reversal anywhere between $A$ and $C$.

*Conclude the loading.* Because every ordinate of $\text{IL}_{M_B}$ has the same sign, a unit load *anywhere* on the beam pushes $M_B$ the same direction (hogging — the top of the beam pulls apart over the support). To **maximize the magnitude of the hogging moment at $B$**, you therefore want live load over **every** region with that sign — i.e. **a uniform live load spread over both spans at once**:

$$\big|M_B\big|_{\max} \;=\; w \times \big(\text{total area under } \text{IL}_{M_B} \text{ over } AB \text{ and } BC\big).$$

This is the counterintuitive punchline of continuous beams and the reason it's a boss problem: for the *positive* mid-span moment you'd load alternating spans, but for the *support* moment you load **all** spans, because the support-moment IL never changes sign. (For reference, a full elastic solve of two equal spans under UDL $w$ gives $M_B = -\tfrac{1}{8}wL^2$, hogging — you don't need that number to know *where* to put the load, which is the whole point of the qualitative method.)

*Sanity check.* Units: $w\,[\mathrm{kN/m}] \times \text{area}\,[\mathrm{m}\cdot(\text{dimensionless})] = \mathrm{kN\cdot m}$, a moment. ✓ Sign: both spans loaded downward, both IL ordinates one sign, so their contributions **add** rather than cancel — consistent with "load everything." ✓

**Example 2 — qualitative IL for an interior reaction of a three-span beam.**

A continuous beam runs over four supports $A$–$B$–$C$–$D$ (three spans). Where do you park a line of trucks to **maximize the reaction at interior support $B$**?

*Apply Müller-Breslau.* The response is the **reaction $R_B$**, so **remove the support at $B$** and jack that point **up by one unit**. The beam — still held at $A$, $C$, $D$ — lifts into a curve: it rises sharply to the unit peak at $B$, and because the beam is continuous and elastic, the far spans **overshoot and dip below the baseline** on the other side of the neighboring supports (a decaying wave, alternating sign span by span).

*Read the shape.* The ordinate is **positive** (upward, same sign as the imposed unit lift) in the two spans immediately adjacent to $B$ — spans $AB$ and $BC$ — and goes **negative** in the far span $CD$.

*Conclude the loading.* To maximize $R_B$, load the spans where the IL is **positive** (spans $AB$ and $BC$, straddling $B$) and **leave the far span $CD$ empty** — putting load there would actually *reduce* $R_B$, since the IL is negative there. So: fill the two spans on either side of $B$, skip the third. This alternating "load-adjacent, skip-next" pattern is exactly why bridge codes specify *patterned* lane loading rather than loading every span.

*Sanity check.* A reaction IL is dimensionless (length/length): a unit downward load over a positive ordinate of $0.6$ contributes $0.6$ to $R_B$, and $R_B$ under the beam's own uniform dead load must come out positive (supports push up) — consistent with the adjacent spans dominating. ✓

## Watch out

- **You might think an indeterminate influence line is still made of straight segments, like the determinate ones in [4.1](04-01-influence-lines-determinate.md).** It isn't — releasing one restraint on an indeterminate structure leaves a beam that still bends elastically, so the deflected shape (and hence the IL) is **curved**. Straight-line ILs are the special case where the released structure is a mechanism (determinate).
- **You might load every span to maximize the support moment, then load every span again to maximize the mid-span moment.** Only the first is right. The *support-moment* IL is single-signed (load all spans); the *mid-span-moment* IL changes sign span-to-span (load alternate spans). Always check the IL's sign pattern before deciding where load goes — that's the entire payoff of drawing it.
- **You might impose the release in the wrong direction and flip the whole IL.** The unit displacement/rotation must go in the response's **positive** sense (positive moment = sagging convention, upward reaction, etc.). Push the wrong way and every ordinate — and your conclusion about where to load — inverts.

## One-liner

> The influence line for a response is the deflected shape you get by releasing that restraint and imposing a unit displacement in its positive direction — so to break a continuous beam, load every span where that shape keeps one sign.

## Problems

**P1 (🟢)** A single-span beam is fixed at $A$ and roller-supported at $B$ (a propped cantilever, span $L$) — an indeterminate beam. Using Müller-Breslau, describe how to obtain the influence line for the reaction $R_B$ at the roller, and state whether the resulting IL is straight or curved and why.

**P2 (🟡)** For the two-span beam $ABC$ of Example 1, sketch (in words or ordinates) the influence line for the **bending moment at the midpoint of span $AB$**. Is it single-signed over the whole beam like $\text{IL}_{M_B}$, and does a uniform load over *both* spans maximize this mid-span moment? Explain the difference from the support-moment case.

**P3 (🔴)** A continuous beam has three equal spans $A$–$B$–$C$–$D$. Using the Müller-Breslau shape for the **shear just to the right of support $B$**, state which spans you would load with uniform live load to maximize that shear. (Hint: insert a shear release just right of $B$, slide the faces a unit apart, and track the sign of the deflected shape.)

<details>
<summary>Solutions</summary>

**P1** The response is the **reaction at $B$**, so **remove the roller at $B$** and impose a **unit upward displacement** at that point. The structure that remains is a cantilever fixed at $A$ with a free end at $B$; pushing the free end up by one unit bends it into the cantilever's elastic curve. That deflected shape — zero deflection and zero slope at the fixed end $A$, rising to $1$ at $B$ — **is** the influence line for $R_B$.

It is **curved**, not straight: even after removing the roller, the beam is a fixed cantilever that still bends elastically (it is not a rigid-body mechanism). Concretely the cantilever's unit-tip-displacement shape is the cubic $\delta(x) = \tfrac{1}{2}\big(3(x/L)^2 - (x/L)^3\big)$ — a smooth curve, all ordinates positive, so a downward load anywhere on the span adds to $R_B$.

*Check.* At $x=0$: $\delta=0$ ✓ (fixed end doesn't move); at $x=L$: $\delta = \tfrac12(3-1)=1$ ✓ (the imposed unit lift). All ordinates $>0$, so $R_B>0$ under any downward load — a support pushes up. ✓

**P2** For the **moment at mid-span of $AB$**, insert a **hinge at that midpoint** and impose a unit relative rotation. Span $AB$ splits into two sub-segments that kink at the hinge; the *loaded* span $AB$ deflects with a positive ordinate near the hinge, but the deflection **carried over** into span $BC$ (through the continuous connection at $B$) bulges the **opposite way**. So $\text{IL}_{M_{\text{mid }AB}}$ is **not** single-signed — it is positive over most of span $AB$ and **negative** over span $BC$.

Therefore a uniform load over *both* spans does **not** maximize this moment: loading span $BC$ (negative IL there) *subtracts* from it. To maximize the mid-span sagging moment you load **only span $AB$** and leave $BC$ empty. This is the key contrast with Example 1: the *support*-moment IL is single-signed (load all spans), while a *span*-moment IL reverses sign in the neighboring span (load alternate spans).

*Check.* The rule "load where the IL has the sign you want" gives *all spans* for $M_B$ and *the one span* for the mid-span moment — matching the standard continuous-beam result that support moments and span moments are governed by different (patterned) load cases. ✓

**P3** Insert a **shear release just to the right of $B$** and slide the two faces a **unit apart vertically** (positive-shear sense: the right face up relative to the left, per the sagging/positive-shear convention). The deflected shape: the portion just right of $B$ jumps up relative to the left; tracking the elastic continuation, the ordinate is **positive over span $BC$** (right of the release) and **negative over span $AB$** (left of it), with the far span $CD$ carrying over to a **positive** (smaller) lobe.

To **maximize** the shear, load every region where the IL is **positive**: **span $BC$ and span $CD$**, and **leave span $AB$ empty** (negative ordinate there — loading it would reduce the shear). So load the two spans to the right of the release, skip the span to the left.

*Check.* A shear IL is dimensionless; loading only the positive-ordinate spans and skipping the negative one is the same "patterned loading" logic as Example 2's reaction case — adjacent-sign spans loaded, opposite-sign span skipped. ✓

</details>

## Flashback

**From Lesson 4.1 (Influence lines for determinate structures):** A simply supported beam $AB$ has span $L = 8$ m, with a pin at $A$ ($x=0$) and a roller at $B$ ($x=8$ m). Draw/derive the influence line for the reaction $R_A$, and use it to find the position of a single moving unit load that makes $R_A$ largest.

<details>
<summary>Solution</summary>

For a **determinate** simply supported beam, the reaction IL is a straight line (Müller-Breslau on a determinate beam gives a mechanism — a rigid rotation, hence straight). Place a unit load at position $x$ and take moments about $B$:

$$R_A \cdot L - 1\cdot(L - x) = 0 \;\Longrightarrow\; R_A(x) = \frac{L - x}{L} = 1 - \frac{x}{8}.$$

*In words: the IL for $R_A$ is a straight line running from $1$ at $A$ ($x=0$) down to $0$ at $B$ ($x=8$).* It is largest when $x$ is smallest, i.e. the moving load sits **directly over $A$** ($x=0$), giving $R_A = 1$ — the near support takes the entire load.

*Check.* At $x=0$: $R_A = 1$ ✓; at $x=L$: $R_A = 0$ ✓ (load sits on $B$, $A$ carries nothing). Straight line, consistent with a determinate structure — contrast the *curved* ILs of this lesson's indeterminate beams. ✓

</details>

## Connections

- **Backward:** this generalizes [4.1](04-01-influence-lines-determinate.md) — determinate ILs are the straight-line special case where releasing a restraint yields a rigid-body mechanism; here the released structure still bends, so the IL curves. The ordinates are computed with the released-structure deflections of the [3.2 force method](03-02-force-method-beams.md) and the [2.4 unit-load method](02-04-unit-load-method-beams-frames.md).
- **Forward:** the matrix stiffness method ([4.3](04-03-matrix-stiffness-method.md)) computes those deflected shapes — and hence IL ordinates — for arbitrary continuous beams and frames by solving $\mathbf{K}\mathbf{d}=\mathbf{F}$, automating the qualitative sketch into exact numbers.
- **Sideways (mechanics-of-materials):** the released deflected shapes *are* the elastic curves from [`mechanics-of-materials` 3.1 (deflection by integration)](../../mechanics-of-materials/lessons/03-01-deflection-by-integration.md) and [3.2 (superposition)](../../mechanics-of-materials/lessons/03-02-deflection-by-superposition.md); Müller-Breslau simply reinterprets a single member's bending shape as a whole structure's influence line via Betti reciprocity.

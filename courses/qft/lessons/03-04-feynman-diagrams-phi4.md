# Quantum Field Theory · Lesson 3.4: Feynman diagrams for $\phi^4$ theory

> ⏱ ~15 min · Module 3: Interactions and perturbation theory · Builds on: [3.3 Wick's theorem](03-03-wicks-theorem.md) · Unlocks: [3.5 Feynman rules and the amplitude](03-05-feynman-rules-amplitude.md)

## Why this matters

Feynman diagrams are the most famous — and most useful — pictures in physics. They are not just illustrations: each diagram is a *precise term* in the perturbative amplitude, and drawing all the diagrams for a process is a bookkeeping device for organizing the Wick contractions of the Dyson series. This lesson shows how contractions become pictures: fields at an interaction vertex, external legs for the physical particles, internal lines for propagators, and loops for the momentum you have to integrate over. Once you can draw the diagrams, computing an amplitude becomes "translate the picture into an integral" (next lesson). Feynman diagrams turn a forbidding operator calculation into something you can do on a napkin.

## The idea

Recall the structure ([3.2](03-02-dyson-series-time-ordering.md)–[3.3](03-03-wicks-theorem.md)): the S-matrix is a sum over orders in $\lambda$, each order a time-ordered product of $\phi^4$ vertices, evaluated by Wick contractions into propagators. A **Feynman diagram** is a picture of one such contraction pattern (the picture):

- Each factor of the interaction $-\frac{\lambda}{4!}\phi^4$ is a **vertex** where *four* lines meet (four fields).
- **External lines** are the incoming and outgoing physical particles (fields contracted with the in/out states).
- **Internal lines** are propagators $D_F$ (contractions between two vertices) — these carry *virtual* particles, off the mass shell.
- **Loops** are closed chains of internal lines; each loop has an undetermined internal momentum you must integrate over.

The dictionary is exact: **each distinct Wick pairing corresponds to one diagram**, and the diagram encodes which fields were contracted with which. For $2 \to 2$ scattering in $\phi^4$ at leading order (order $\lambda$), there's a single vertex with all four external particles attached — a **contact interaction**, no internal line (the amplitude is just $-i\lambda$, Boss Problem 3). At the next order ($\lambda^2$), two vertices are joined by internal propagators forming a **loop** — the first place divergences will appear.

Two organizing facts make diagrams manageable. First, **disconnected diagrams factor out**: pieces not attached to any external line ("vacuum bubbles") multiply every amplitude and *cancel* against the normalization of the vacuum — so you only ever draw **connected** diagrams. Second, the order in $\lambda$ = number of vertices, and the number of loops controls the power of $\hbar$ (the "loop expansion") — so "tree-level" (no loops) is the leading, classical-like approximation, and loops are quantum corrections.

## The formal version

For $\phi^4$ theory with $\mathcal{L}_{\text{int}} = -\frac{\lambda}{4!}\phi^4$, the perturbative amplitude for a process is a sum of **connected Feynman diagrams**, built from:

- **Vertices:** each interaction insertion is a point where **four lines meet**; a diagram at order $\lambda^n$ has $n$ vertices.
- **External lines:** one per incoming/outgoing particle, carrying its on-shell momentum.
- **Internal lines (propagators):** each contraction between vertices is a factor $D_F$; internal momenta are off-shell (**virtual**).
- **Loops:** the number of loops is $L = I - V + 1$ ($I$ internal lines, $V$ vertices, for a connected diagram) — each loop contributes an unconstrained momentum $\int\frac{d^4\ell}{(2\pi)^4}$.

*In words:* diagrams organize the contraction sum topologically — vertices from the interaction, lines from propagators, loops from unfixed momenta. The **tree-level** (no-loop) diagrams are the leading approximation; loops are higher-order quantum corrections.

**Connectedness.** The full sum of diagrams factorizes as (connected diagrams) $\times$ (vacuum bubbles), and the vacuum bubbles cancel against $\langle 0|S|0\rangle$ in the normalization. *In words:* only **connected** diagrams (every part linked to an external particle) contribute to physical amplitudes — a huge simplification.

## Picture

![Two phi-4 Feynman diagrams: the tree-level 2-to-2 contact vertex where four external legs meet at a single point (amplitude minus i lambda), and a one-loop order-lambda-squared diagram with two vertices joined by a closed loop of two internal propagator lines](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (the tree-level $2 \to 2$ diagram).** Start from the order-$\lambda$ S-matrix term $S^{(1)} = -i\frac{\lambda}{4!}\int d^4x\,\phi^4(x)$ and compute $\langle \mathbf{p}_3\mathbf{p}_4|S^{(1)}|\mathbf{p}_1\mathbf{p}_2\rangle$ (two particles in, two out). Wick's theorem contracts the four $\phi$'s at the vertex with the four external particles: $\phi$ contains both $a$ (annihilates an incoming particle) and $a^\dagger$ (creates an outgoing one). Two of the four $\phi$'s annihilate $\mathbf{p}_1, \mathbf{p}_2$; the other two create $\mathbf{p}_3, \mathbf{p}_4$. There are $4! = 24$ ways to assign the four fields to the four external particles — exactly cancelling the $\frac{1}{4!}$ in the coupling. The result is a **single vertex with four external legs** (no internal propagator):

$$i\mathcal{M} = -i\lambda, \qquad\text{i.e.}\qquad \mathcal{M} = -\lambda.$$

The amplitude is a constant — the $\phi^4$ contact interaction is momentum-independent at tree level. The $\frac{1}{4!}$ was placed in the Lagrangian *precisely* so that this leading amplitude comes out clean ($-\lambda$, not $-24\lambda$).

**Example 2 (connected diagrams and the vanishing of vacuum bubbles).** At order $\lambda^2$, some contraction patterns leave a piece of the diagram *disconnected* from all external legs — e.g. a vertex whose four fields all contract among themselves, forming a closed "vacuum bubble." Such a factor is the same for every process (it's $\langle 0|S|0\rangle$, the vacuum-to-vacuum amplitude). When you normalize amplitudes by dividing by $\langle 0|S|0\rangle$ (required for probabilities), these bubbles **cancel exactly**. So although Wick's theorem generates them, they never contribute to physical scattering. **Practical rule:** draw only connected diagrams — every line traces back to an external particle. This is why you never see floating loops disconnected from the process in a real amplitude calculation.

## Watch out

- **You might expect an internal propagator at tree level in $\phi^4$.** The tree-level $2 \to 2$ in $\phi^4$ is a *single vertex* — a contact interaction with **no internal line**. (Contrast $\phi^3$ theory, where $2\to2$ at tree level *does* have an internal propagator via $s$-, $t$-, $u$-channels.) The four-point vertex directly connects all four external legs.
- **You might mis-handle the symmetry factor.** The $\frac{1}{4!}$ in the coupling is cancelled by the $4!$ ways to attach external legs *only* for the tree diagram. Loop diagrams and diagrams with identical internal lines have residual **symmetry factors** $1/S$ ([3.5](03-05-feynman-rules-amplitude.md)); getting $S$ wrong is the classic $\phi^4$ error.
- **You might include disconnected/vacuum diagrams.** They cancel against the vacuum normalization and never contribute to physical amplitudes. Only connected diagrams matter — a huge practical simplification, and forgetting it leads to spurious infinite factors.

## One-liner

> A Feynman diagram is a picture of one Wick contraction: vertices from the $\phi^4$ interaction, external lines for real particles, internal lines for propagators, loops for integrated momenta — and only connected diagrams contribute, with the $2\to2$ tree amplitude just $-i\lambda$.

## Problems

**P1 (🟢)** For $\phi^4$ theory, how many vertices does a diagram of order $\lambda^3$ have? Using $L = I - V + 1$, find the number of loops in a connected diagram with $3$ vertices and $4$ internal lines.

**P2 (🟡)** Explain, by counting field contractions, why the tree-level $2\to2$ amplitude in $\phi^4$ is $-i\lambda$ (not $-i\lambda/4!$ or $-24i\lambda$). *Hint:* the vertex has four $\phi$'s and the coupling has $\frac{1}{4!}$; count the ways to attach the four distinct external particles to the four fields.

**P3 (🔴, optional)** The one-loop correction to the $2\to2$ amplitude (the "fish" diagram) has two vertices joined by two internal propagators. Sketch why this diagram involves a loop integral $\int\frac{d^4\ell}{(2\pi)^4}D_F(\ell)D_F(k-\ell)$ (with $k$ the total incoming momentum), and argue on dimensional grounds (count powers of $\ell$) whether it converges or diverges at large $\ell$. *(This is the setup for Boss Problem 6.)*

<details>
<summary>Solutions</summary>

**P1** Order $\lambda^3$ means **3 vertices** (one power of $\lambda$ per vertex). With $V = 3$, $I = 4$: $L = I - V + 1 = 4 - 3 + 1 = 2$ loops. (The loop number counts independent internal momenta after imposing momentum conservation at each vertex.)

**P2** The interaction is $-\frac{\lambda}{4!}\phi^4$, so the vertex carries $\frac{1}{4!} = \frac{1}{24}$ and four field operators. To form the $2\to2$ amplitude, each of the four fields must contract with one of the four distinct external particles ($\mathbf{p}_1, \mathbf{p}_2$ incoming; $\mathbf{p}_3, \mathbf{p}_4$ outgoing). The number of ways to assign four distinct fields to four distinct external legs is $4! = 24$. So the combinatorial factor is $\frac{1}{4!}\times 4! = 1$, and the amplitude is $i\mathcal{M} = -i\lambda\cdot 1 = -i\lambda$, i.e. $\mathcal{M} = -\lambda$. The $\frac{1}{4!}$ is designed to cancel the $4!$ attachments, giving a clean leading amplitude.

**P3** The two vertices each contribute $-i\lambda$ and sit at spacetime points integrated over; joining them with two internal propagators means the two lines carry momenta $\ell$ and $k - \ell$ (momentum conservation: their sum is the total incoming $k$), with $\ell$ **unconstrained** — hence the loop integral $\int\frac{d^4\ell}{(2\pi)^4}\,\frac{i}{\ell^2-m^2}\frac{i}{(k-\ell)^2-m^2}$. At large $\ell$, each propagator $\sim 1/\ell^2$, so the integrand $\sim 1/\ell^4$, and the measure is $d^4\ell \sim \ell^3\,d\ell$; the integral behaves as $\int^\Lambda \frac{\ell^3\,d\ell}{\ell^4} = \int^\Lambda\frac{d\ell}{\ell} \sim \ln\Lambda$ — **logarithmically divergent** at large momentum (UV divergent). This is the superficial degree of divergence being zero (log divergence), and taming it is the renormalization of the $\phi^4$ coupling ([6.4](06-04-loops-uv-divergences.md)–[6.5](06-05-regularization-renormalization.md)). ∎

</details>

## Flashback

**From Lesson 3.3 (Wick's theorem):** How many complete pairings does the four-point function $\langle 0|T\{\phi_1\phi_2\phi_3\phi_4\}|0\rangle$ have, and write it as a sum of propagator products.

<details>
<summary>Solution</summary>

Three pairings: $\langle 0|T\{\phi_1\phi_2\phi_3\phi_4\}|0\rangle = D_F(x_1-x_2)D_F(x_3-x_4) + D_F(x_1-x_3)D_F(x_2-x_4) + D_F(x_1-x_4)D_F(x_2-x_3)$. Each term is a diagram — two propagator lines connecting the four points in one of the three ways. When these points are external particles connected through vertices, the three pairings become the $s$-, $t$-, $u$-channel diagrams. ✓

</details>

## Connections

- **Backward:** diagrams are pictorial Wick contractions ([3.3](03-03-wicks-theorem.md)) of the Dyson series ([3.2](03-02-dyson-series-time-ordering.md)); internal lines are the propagators of [2.4](02-04-feynman-propagator.md); vertices come from the interaction Lagrangian of [1.2](01-02-classical-field-theory-lagrangian.md).
- **Forward:** [3.5](03-05-feynman-rules-amplitude.md) codifies "diagram → amplitude" into momentum-space Feynman rules (with symmetry factors); [3.6](03-06-cross-sections-decay-rates.md) turns $|\mathcal{M}|^2$ into a cross-section; loops ([6.4](06-04-loops-uv-divergences.md)) are where renormalization enters.
- **Sideways (all of physics):** the same diagrammatic expansion organizes perturbation theory in condensed matter (many-body Green's functions), statistical mechanics (cluster expansions), and QED ([5.4](05-04-qed-feynman-rules.md)) — Feynman diagrams are a universal language for perturbative quantum systems.

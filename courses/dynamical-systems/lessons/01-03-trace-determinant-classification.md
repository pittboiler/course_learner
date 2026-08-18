# Dynamical Systems & Chaos · Lesson 1.3: The trace–determinant classification

> ⏱ ~15 min · Module 1: Flows on the line and the plane · Builds on: [Lesson 1.2](01-02-linear-systems-plane.md) · Unlocks: [Lesson 1.4](01-04-linearization-hartman-grobman.md)

## Why this matters

In Lesson 1.2 you learned to solve $\dot{\mathbf x} = A\mathbf x$ by hand: find the eigenvalues of $A$, find the eigenvectors, write the solution. That's exact but slow, and it buries the one thing you usually care about — the *shape* of the flow — under algebra. This lesson compresses all of it into **two numbers**: the trace $\tau = \operatorname{tr} A$ and the determinant $\Delta = \det A$. From just those two you can name the fixed point (saddle, node, spiral, or center) and say whether it's stable, without ever computing an eigenvector. This is the single most reusable diagram in the whole course — every nonlinear fixed point you meet from Lesson 1.4 onward gets classified by dropping its Jacobian's $(\tau, \Delta)$ onto this one plane.

## The idea

A $2\times 2$ matrix has two eigenvalues, and everything about the flow near the origin is decided by them: real eigenvalues mean straight-line stretching or squeezing (nodes and saddles), complex eigenvalues mean rotation (spirals and centers), and the *sign* of the real part decides in-or-out (stable or unstable).

The trick is that you never need the eigenvalues themselves — only two facts about them. Their **sum** is the trace and their **product** is the determinant:
$$\lambda_1 + \lambda_2 = \tau, \qquad \lambda_1\lambda_2 = \Delta.$$
Sum and product pin down a pair of numbers completely, so $\tau$ and $\Delta$ already contain the whole answer. The sign of $\Delta$ tells you whether the eigenvalues are real-opposite-sign, and the comparison of $\tau^2$ against $4\Delta$ tells you whether they're real or complex. Two comparisons, one plane, done.

## The formal version

For a linear system $\dot{\mathbf x} = A\mathbf x$ with
$$A = \begin{pmatrix} a & b \\ c & d\end{pmatrix}, \qquad \tau = \operatorname{tr} A = a+d, \qquad \Delta = \det A = ad - bc,$$
the eigenvalues solve the **characteristic equation**
$$\lambda^2 - \tau\lambda + \Delta = 0 \quad\Longrightarrow\quad \lambda_{1,2} = \frac{\tau \pm \sqrt{\tau^2 - 4\Delta}}{2}.$$

*In words:* the eigenvalues are found from $\tau$ and $\Delta$ alone; the quantity under the root, the **discriminant** $\tau^2 - 4\Delta$, decides real vs. complex.

Reading off the three boundary curves — $\Delta = 0$, $\tau = 0$, and the parabola $\tau^2 = 4\Delta$ — gives the full classification:

- **$\Delta < 0$: saddle.** The eigenvalues are real with opposite signs (their product is negative), so the flow squeezes along one eigendirection and stretches along the other. Always unstable.
- **$\Delta > 0$, $\tau^2 > 4\Delta$: node.** Two real eigenvalues of the *same* sign (positive product, real). **Stable** if $\tau < 0$ (both negative), **unstable** if $\tau > 0$.
- **$\Delta > 0$, $\tau^2 < 4\Delta$, $\tau \neq 0$: spiral (focus).** Complex-conjugate eigenvalues $\alpha \pm i\beta$ with $\alpha = \tau/2$. **Stable** if $\tau < 0$, **unstable** if $\tau > 0$.
- **$\tau = 0$, $\Delta > 0$: center.** Pure-imaginary eigenvalues $\pm i\sqrt{\Delta}$; closed orbits, neither attracting nor repelling.
- **On the parabola $\tau^2 = 4\Delta$ (with $\Delta>0$): degenerate/star nodes.** A repeated real eigenvalue $\lambda = \tau/2$ — the borderline case between nodes and spirals.

Collapsing the stability question to a single rule:

$$\boxed{\text{The origin is asymptotically stable} \iff \tau < 0 \ \textbf{and}\ \Delta > 0.}$$

*In words:* both eigenvalues have negative real part exactly when the trace is negative and the determinant is positive — the lower-left quadrant "above the $\Delta$-axis, left of the $\tau$-axis." (You'll prove this in P3.) Anything with $\Delta < 0$, or $\tau > 0$, or on the boundary is not asymptotically stable.

## Picture

The whole classification is one diagram: the trace–determinant plane, with $\tau$ horizontal, $\Delta$ vertical, and the parabola $\tau^2 = 4\Delta$ separating nodes (outside) from spirals (inside).

![Trace–determinant plane: axes tau and Delta, the parabola tau^2=4Delta, with regions labeled saddle (Delta<0), stable and unstable nodes (outside the parabola), stable and unstable spirals (inside), and centers on the positive Delta-axis, each with a small phase-portrait icon.](assets/01-03-fig1.svg)

Three landmarks orient you: cross the **$\Delta$-axis ($\Delta=0$)** downward and any point becomes a saddle; cross the **$\tau$-axis ($\tau=0$)** left-to-right and a stable spiral/node turns unstable (passing through a center on the axis, if you're above the parabola); cross the **parabola** and a spiral hardens into a node. Stability lives entirely in the upper-left region $\{\tau<0,\ \Delta>0\}$.

## Worked examples

**Example 1 (mechanical — classify from $\tau, \Delta$).** Take
$$A = \begin{pmatrix} -2 & 1 \\ 1 & -2\end{pmatrix}.$$
Then $\tau = -2 + (-2) = -4$ and $\Delta = (-2)(-2) - (1)(1) = 3$. Discriminant $\tau^2 - 4\Delta = 16 - 12 = 4 > 0$, so the eigenvalues are real; and $\Delta > 0$ with $\tau < 0$, so it's a **stable node**. (Check: $\lambda = \frac{-4 \pm 2}{2} = -1, -3$ — two negative reals, as promised, no eigenvector computation needed to know that.)

**Example 2 (why you'd care — the damped oscillator).** A mass on a spring with damping obeys $\ddot x + b\dot x + kx = 0$ with $b \ge 0$, $k > 0$. Writing $y = \dot x$ turns it into the plane system $\dot x = y$, $\dot y = -kx - b y$, i.e.
$$A = \begin{pmatrix} 0 & 1 \\ -k & -b\end{pmatrix}, \qquad \tau = -b, \qquad \Delta = k.$$
Since $k>0$ we always have $\Delta > 0$, so stability is decided purely by $\tau = -b$: **damping $b>0$ makes it stable** ($\tau<0$), $b=0$ (no damping) puts us on the $\tau=0$ axis — a **center**, i.e. undamped oscillation forever. And the discriminant $\tau^2 - 4\Delta = b^2 - 4k$ splits the stable case in two: $b^2 > 4k$ is **overdamped** (a stable *node*, no oscillation), $b^2 < 4k$ is **underdamped** (a stable *spiral*, decaying ringing). One glance at $(\tau,\Delta)$ reproduces the entire physics vocabulary. This same picture governs equilibria in [analytical-mechanics](../../analytical-mechanics/syllabus.md).

## Watch out

- You might think $\Delta > 0$ alone means stable — but $\Delta > 0$ only means the eigenvalues have the *same sign* (or are a complex pair); they could both be *positive*. You also need $\tau < 0$. Both conditions, always.
- You might think a negative trace guarantees stability — but if $\Delta < 0$ you have a saddle no matter what $\tau$ is (one eigenvalue is positive). $\tau<0$ helps only once you're already above the $\Delta$-axis.
- You might read "spiral" straight off $\Delta$ — but the node-vs-spiral distinction is the *parabola* $\tau^2 = 4\Delta$ (the discriminant's sign), not the axes. Same-sign real eigenvalues (node) and complex eigenvalues (spiral) both live in $\Delta > 0$; only $\tau^2$ vs. $4\Delta$ tells them apart.
- A **center** ($\tau=0,\Delta>0$) is a knife-edge: it's what the *linear* system predicts, but the tiniest nonlinear or perturbing term can tip it into a slow spiral. Linearization cannot certify a true center — that caveat is the whole point of Lesson 1.4's Hartman–Grobman theorem.

## One-liner

> Read $\tau$ and $\Delta$ off the matrix, drop the point on the plane: the parabola $\tau^2=4\Delta$ splits nodes from spirals, and stability is just "up and to the left" — $\tau<0$, $\Delta>0$.

## Problems

**P1 (🟢)** Classify each origin as saddle / node / spiral / center, state stable or unstable, and give the eigenvalues.
(a) $A = \begin{pmatrix} 3 & -2 \\ 4 & -1\end{pmatrix}$   (b) $A = \begin{pmatrix} 1 & 3 \\ 2 & 0\end{pmatrix}$

**P2 (🟡)** Consider the family
$$A(a) = \begin{pmatrix} a & 1 \\ -1 & a\end{pmatrix}.$$
Compute $\tau$ and $\Delta$ in terms of $a$, and show the origin is *always* a spiral or center — never a node or saddle. For which $a$ is it a stable spiral, a center, an unstable spiral? Interpret the transition at $a=0$ as a point moving across the trace–determinant plane.

**P3 (🔴, optional)** Prove the two headline rules directly from $\lambda^2 - \tau\lambda + \Delta = 0$, without solving for the eigenvalues explicitly (use only $\lambda_1+\lambda_2=\tau$, $\lambda_1\lambda_2=\Delta$):
(a) $\Delta < 0 \iff$ the origin is a saddle (two real eigenvalues of opposite sign).
(b) Both eigenvalues have negative real part $\iff \tau < 0$ and $\Delta > 0$.
This second fact is the $2\times 2$ **Routh–Hurwitz criterion** — the same stability test that [grad-micro](../../grad-micro/syllabus.md) applies to the Jacobian of Walrasian price adjustment to ask whether tâtonnement converges.

<details>
<summary>Solutions</summary>

**P1 (a)** $\tau = 3 + (-1) = 2$, $\Delta = (3)(-1) - (-2)(4) = -3 + 8 = 5$. Discriminant $\tau^2 - 4\Delta = 4 - 20 = -16 < 0$, so eigenvalues are complex: $\lambda = \frac{2 \pm 4i}{2} = 1 \pm 2i$. Real part $+1 > 0$ with $\Delta>0$ → **unstable spiral**.

**(b)** $\tau = 1 + 0 = 1$, $\Delta = (1)(0) - (3)(2) = -6 < 0$ → **saddle** (always unstable). Eigenvalues: $\lambda = \frac{1 \pm \sqrt{1 + 24}}{2} = \frac{1 \pm 5}{2} = 3, -2$ — real, opposite signs, confirming the saddle.

**P2** $\tau = a + a = 2a$ and $\Delta = a\cdot a - (1)(-1) = a^2 + 1$. The discriminant is
$$\tau^2 - 4\Delta = 4a^2 - 4(a^2+1) = -4 < 0 \quad \text{for every } a,$$
so the eigenvalues are complex-conjugate for all $a$ — never a node (which needs a real repeated/distinct pair) and never a saddle (which needs $\Delta<0$, impossible since $a^2+1>0$). Explicitly $\lambda = \frac{2a \pm \sqrt{-4}}{2} = a \pm i$. Stability rides on $\tau = 2a$, i.e. on the sign of $a$:
- $a < 0$: real part $a<0$ → **stable spiral**,
- $a = 0$: $\lambda = \pm i$, $\tau = 0$, $\Delta = 1>0$ → **center**,
- $a > 0$: real part $a>0$ → **unstable spiral**.

As $a$ increases through $0$, the point $(\tau,\Delta) = (2a,\ a^2+1)$ traces the upward parabola $\Delta = (\tau/2)^2 + 1$, which sits *above* the classification parabola $\Delta=\tau^2/4$ (since $(\tau/2)^2+1 > \tau^2/4$), so it stays in spiral territory the whole time and crosses the $\tau=0$ axis exactly once — the moment the stable spiral becomes an unstable one through a center. (Foreshadowing Module 3: eigenvalues crossing the imaginary axis like this is precisely a **Hopf bifurcation**.)

**P3 (a)** ($\Leftarrow$) A saddle has real eigenvalues of opposite sign, so $\Delta = \lambda_1\lambda_2 < 0$. ($\Rightarrow$) Suppose $\Delta = \lambda_1\lambda_2 < 0$. If the eigenvalues were complex conjugates $\alpha \pm i\beta$ ($\beta\neq0$), their product would be $\alpha^2 + \beta^2 > 0$, a contradiction — so they must be real. Real with negative product forces opposite signs. Hence the origin is a saddle. $\blacksquare$

**(b)** Split on the discriminant.
*Complex case* ($\tau^2 - 4\Delta < 0$): eigenvalues are $\alpha \pm i\beta$ with $\alpha = \tau/2$ and product $\Delta = \alpha^2 + \beta^2 > 0$ automatically. Both real parts equal $\alpha$, so "$\operatorname{Re}\lambda < 0$" $\iff \tau/2 < 0 \iff \tau < 0$; and $\Delta>0$ holds for free. So here Re$<0 \iff \tau<0$ and $\Delta>0$. ✓
*Real case* ($\tau^2 - 4\Delta \ge 0$): both eigenvalues negative $\iff$ their sum is negative *and* their product is positive (product positive gives same sign; sum negative then makes both negative), i.e. $\tau < 0$ and $\Delta > 0$. Conversely $\tau<0,\Delta>0$ real forces both negative. ✓
Both cases collapse to the same condition, proving both eigenvalues have negative real part $\iff \tau<0$ and $\Delta>0$. $\blacksquare$

</details>

## Flashback

**From Lesson 1.2 (linear systems in the plane):** For
$$A = \begin{pmatrix} 1 & 1 \\ 4 & 1\end{pmatrix},$$
find the eigenvalues and their eigendirections (invariant lines), write the general solution of $\dot{\mathbf x} = A\mathbf x$, and say what kind of fixed point the origin is. Then confirm your answer against the $(\tau,\Delta)$ classification from today.

<details>
<summary>Solution</summary>

Characteristic equation: $\tau = 1+1 = 2$, $\Delta = (1)(1)-(1)(4) = -3$, so $\lambda^2 - 2\lambda - 3 = 0 \Rightarrow (\lambda-3)(\lambda+1)=0$, giving $\lambda_1 = 3$, $\lambda_2 = -1$.

*Eigendirections.* For $\lambda_1 = 3$: $(A - 3I)\mathbf v = \begin{pmatrix} -2 & 1 \\ 4 & -2\end{pmatrix}\mathbf v = 0 \Rightarrow -2v_1 + v_2 = 0$, so $\mathbf v_1 = (1, 2)$. For $\lambda_2 = -1$: $\begin{pmatrix} 2 & 1 \\ 4 & 2\end{pmatrix}\mathbf v = 0 \Rightarrow 2v_1 + v_2 = 0$, so $\mathbf v_2 = (1, -2)$.

*General solution:*
$$\mathbf x(t) = c_1 e^{3t}\begin{pmatrix}1\\2\end{pmatrix} + c_2 e^{-t}\begin{pmatrix}1\\-2\end{pmatrix}.$$
The flow grows along $(1,2)$ (the unstable manifold, $\lambda=3>0$) and decays along $(1,-2)$ (the stable manifold, $\lambda=-1<0$): eigenvalues of opposite sign → a **saddle**.

*Classification check:* $\Delta = -3 < 0$, which by today's rule (and P3a) is a saddle no matter what $\tau$ is. Consistent. ✓

*The sideways bridge:* this exact "real eigenvalues of opposite sign, so unstable" reasoning is what [grad-micro](../../grad-micro/syllabus.md)'s Walrasian **tâtonnement** uses to ask whether a price vector converges to equilibrium, and what [analytical-mechanics](../../analytical-mechanics/syllabus.md) uses to test the stability of equilibria — the trace–determinant test is the shared engine.

</details>

## Connections

- **Backward:** this is Lesson 1.2's eigenvalue solution *compressed* — sum and product of eigenvalues ($\tau,\Delta$) replace computing the eigenvalues themselves, and the eigendirections you found there are exactly the node/saddle axes here.
- **Forward:** [Lesson 1.4](01-04-linearization-hartman-grobman.md) linearizes a nonlinear system at a fixed point; you then classify that fixed point by dropping its Jacobian's $(\tau, \Delta)$ onto this very plane — and Hartman–Grobman says the classification is trustworthy *except* on the boundaries (centers, $\Delta=0$), which is why the borderline cases got flagged above. The center-crossing in P2 is the seed of the **Hopf bifurcation** (Lesson 3.3).
- **Sideways (economics & mechanics):** the stability rule $\tau<0,\ \Delta>0$ is the $2\times 2$ Routh–Hurwitz criterion. [grad-micro](../../grad-micro/syllabus.md) applies it to the Jacobian of Walrasian tâtonnement to decide whether prices converge to equilibrium; [analytical-mechanics](../../analytical-mechanics/syllabus.md) applies it to classify equilibria of mechanical systems on their phase portraits. Same two numbers, same plane.

# Control Systems · Lesson 5.3: Controllability & observability

> ⏱ ~15 min · Module 5: State-space control · Builds on: [5.1 State-space modeling](05-01-state-space-modeling.md), [5.2 Solving the state equations](05-02-solving-state-equations.md), [`linalg-refresher` 1.3](../../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) · Unlocks: [5.4 Pole placement & observers](05-04-pole-placement-observers.md)

## Why this matters

The next lesson makes a spectacular promise: with state feedback $u = -Kx$ you can put the closed-loop poles **anywhere you like**, and with an observer you can run that feedback even when you can only measure one output. Both promises have a precondition, and this lesson is that precondition.

**You cannot place a pole you cannot steer, and you cannot estimate a state you cannot see.** Before you design anything in [5.4](05-04-pole-placement-observers.md), you run two rank tests. They are cheap — a couple of matrix products and one determinant — and they answer questions no transfer function can even ask. In fact the punchline at the end of this lesson is that a transfer function can *hide* a mode entirely: the system on your screen looks stable while the real hardware runs away. That failure is invisible in Modules 1–4 and obvious here. It is the single sharpest argument for why state space earns its keep.

## The idea

Two questions, and you should be able to ask both of a physical machine before writing a matrix.

**Controllability: is every internal motion connected to my actuator?** You have knobs. The state has directions. Does turning the knobs eventually let you reach *any* state you want, or is some internal motion simply not wired to the input?

**Observability: is every internal motion visible in my sensor?** You have a sensor. Does watching its reading (and how it changes) let you deduce the *whole* internal state, or can something be sloshing around inside without ever showing up on the readout?

Here is the example to keep in your head. **Two identical water tanks, one valve.** Each tank drains at a rate proportional to its own level, and a single valve feeds both, splitting the flow exactly evenly:

$$\dot h_1 = -h_1 + u, \qquad \dot h_2 = -h_2 + u.$$

$h_1, h_2$ are the levels (meters), $u$ is the valve flow (meters per second of level, after the split). Now ask: starting from equal levels, can you ever make tank 1 higher than tank 2? Subtract the two equations and watch the input cancel:

$$\frac{d}{dt}(h_1 - h_2) = -(h_1 - h_2).$$

**The difference has no $u$ in it.** Whatever you do with that valve, the imbalance decays on its own schedule and you have zero say in it. The *sum* you can drive anywhere; the *difference* you cannot touch. The state space is two-dimensional, but your reachable set is a one-dimensional line through it. The system is **uncontrollable**, and no cleverness fixes it — you need a second valve.

Now change nothing but the instrument: suppose your only sensor is a total-volume gauge, $y = h_1 + h_2$. You watch it for an hour. Can you tell me $h_1$? Never — a state with $h_1 = +1$, $h_2 = -1$ (relative to nominal) produces exactly the same reading as a perfectly balanced tank pair, forever. The difference is **unobservable**: real, alive, and invisible.

Same two tanks, same symmetry, two different defects. That is not a coincidence; it's **duality**, and we'll make it precise below.

(The mechanical twin, if you prefer springs: two equal masses joined by a spring, with your accelerometer glued at the exact center of symmetry. The antisymmetric mode — masses moving oppositely — leaves the center point dead still. The mode is ringing at full amplitude and your sensor reads zero.)

## The formal version

Throughout, the system is $\dot x = Ax + Bu$, $y = Cx + Du$, with $x \in \mathbb{R}^n$ ($n$ states), $u \in \mathbb{R}^m$ ($m$ inputs), $y \in \mathbb{R}^p$ ($p$ outputs), so $A$ is $n\times n$, $B$ is $n\times m$, $C$ is $p \times n$. $D$ plays no role in either test — a direct feedthrough is not an internal motion.

### Controllability

**Definition.** The pair $(A,B)$ is **controllable** if for any initial state $x(0)=x_0$ and any target state $x_1$, there is an input $u(t)$ on some finite interval $[0,T]$ that drives the state from $x_0$ to exactly $x_1$. *In words: you can get anywhere from anywhere, in finite time.*

**Test.** Build the **controllability matrix** by stacking columns side by side:

$$\boxed{\;\mathcal{C} = \begin{bmatrix} B & AB & A^2B & \cdots & A^{n-1}B\end{bmatrix} \quad (n \times nm), \qquad (A,B)\ \text{controllable} \iff \operatorname{rank}\mathcal{C} = n.\;}$$

*In words: form those $n$ blocks, and ask whether their columns span the whole state space.*

**Why those columns** — this is what makes the formula memorable instead of arbitrary. Think of a kick of input. $B$ is the direction the state moves *immediately* when you push ($\dot x = Bu$ at the instant you push). But the dynamics don't leave it there: an instant later, $A$ has rotated and stretched that displacement into the direction $AB$. An instant after that, $A^2B$. So the set of directions you can build up is the span of $B$ and everything the dynamics carries $B$ into. Reachability is *the span of $B$ under repeated application of $A$*. Nothing more, nothing less.

**Why stop at $A^{n-1}$?** Cayley–Hamilton: every matrix satisfies its own characteristic polynomial, so $A^n$ is a linear combination of $I, A, \dots, A^{n-1}$. Hence $A^nB$ lies in the span of the columns already listed and adds no new direction — and neither does any higher power.

**When it fails, what fails.** If $\operatorname{rank}\mathcal{C} = r < n$, the reachable set is the column space of $\mathcal{C}$, an $r$-dimensional subspace ([`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) for column space vs. null space). The directions you've lost are pinned down by the **left** null space: any row vector $v^{\mathsf T} \neq 0$ with $v^{\mathsf T}\mathcal{C} = 0$ satisfies $v^{\mathsf T}B = 0$ and (it turns out) $v^{\mathsf T}A = \lambda v^{\mathsf T}$, so the scalar $z = v^{\mathsf T}x$ obeys

$$\dot z = v^{\mathsf T}Ax + v^{\mathsf T}Bu = \lambda z + 0\cdot u.$$

*In words: $z$ is a combination of states that evolves entirely on its own — an **uncontrollable mode**, deaf to the input.* For the tanks, $v^{\mathsf T} = [\,1\;\; -1\,]$ and $z = h_1 - h_2$.

### Observability

**Definition.** The pair $(A,C)$ is **observable** if the initial state $x(0)$ can be determined uniquely from the record of $u(t)$ and $y(t)$ over some finite interval. *In words: watching the output long enough tells you everything about where the state started — and hence, via [5.2](05-02-solving-state-equations.md), where it is now.*

**Test.** Build the **observability matrix** by stacking rows vertically:

$$\boxed{\;\mathcal{O} = \begin{bmatrix} C \\ CA \\ CA^2 \\ \vdots \\ CA^{n-1}\end{bmatrix} \quad (pn \times n), \qquad (A,C)\ \text{observable} \iff \operatorname{rank}\mathcal{O} = n.\;}$$

*In words: stack those $n$ blocks and ask whether their rows pin down every state direction — equivalently, whether $\mathcal{O}x = 0$ forces $x = 0$.*

**Why those rows.** Take $u=0$ for a moment. What you see now is $y = Cx$ — one combination of the state. What you see *next* is contained in the derivative: $\dot y = C\dot x = CAx$, a second combination. Then $\ddot y = CA^2x$, and so on. Successive derivatives of the output expose successive combinations of the state, and Cayley–Hamilton again says the $n$-th derivative tells you nothing new. If the stack has rank $n$, the $n$ readings $y, \dot y, \dots, y^{(n-1)}$ form a solvable linear system for $x$. If not, some direction never appears in any of them.

**When it fails, what fails.** If $\operatorname{rank}\mathcal{O} = r < n$, the **null space** of $\mathcal{O}$ (dimension $n-r$) is the set of **unobservable** states: start there, apply $u=0$, and the output is identically zero — indistinguishable from starting at rest. For the tanks with a total-volume gauge, that null direction is $[\,1\;\; -1\,]^{\mathsf T}$.

### Duality — this halves your work

$$\boxed{\;(A,B)\ \text{is controllable} \iff (A^{\mathsf T}, B^{\mathsf T})\ \text{is observable}.\;}$$

The proof is one line. The observability matrix of the pair $(A^{\mathsf T}, B^{\mathsf T})$ — treating $B^{\mathsf T}$ as the output matrix — is

$$\begin{bmatrix} B^{\mathsf T} \\ B^{\mathsf T}A^{\mathsf T} \\ \vdots \\ B^{\mathsf T}(A^{\mathsf T})^{n-1}\end{bmatrix} = \begin{bmatrix} B & AB & \cdots & A^{n-1}B\end{bmatrix}^{\mathsf T} = \mathcal{C}^{\mathsf T},$$

and a matrix and its transpose have the same rank. *In words: observability is controllability of the transposed system, so every theorem about one has a free twin about the other.* This is why textbooks derive one of them and hand you the other — and it is why the observer design in [5.4](05-04-pole-placement-observers.md) is *literally* the state-feedback design run on $(A^{\mathsf T}, C^{\mathsf T})$, with the answer transposed back.

### The weaker conditions you can live with

- **Stabilizable:** the uncontrollable modes are all stable (their $\lambda$ has negative real part). You can't steer them, but they decay by themselves, so you don't need to. Enough for a working controller.
- **Detectable:** the unobservable modes are all stable. You can't see them, but they die on their own, so your estimate converges anyway. Enough for a working observer.

Full controllability/observability are what you need to place *every* pole; stabilizability/detectability are what you need to merely *not blow up*, which in practice is often the real requirement.

### One honest caveat

Rank is binary; reality is graded. A determinant of $10^{-9}$ says "controllable" just as firmly as a determinant of $1$, but the input energy required to reach some directions may be absurd — a system that is controllable on paper and useless on the bench. The **controllability Gramian** $W_c(T) = \int_0^T e^{A\tau}BB^{\mathsf T}e^{A^{\mathsf T}\tau}\,d\tau$ grades it: its smallest singular value measures the hardest-to-reach direction, exactly the near-rank-deficiency reading of the SVD in [`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md). Name only here; take the warning.

## Picture

![Two decoupled modes drawn as blocks between an input u and an output y. In the top panel the input link to mode 2 is a dashed grey line struck through with a coral cross, labelled b-two equals zero, so mode 2 is greyed out and unreachable. In the bottom panel both input links are live but the output link from mode 2 is dashed and struck through, labelled c-two equals zero, so mode 2 is invisible in y.](assets/05-03-fig1.svg)

## Worked examples

### Example 1 — the running system (this settles boss problem 5(a))

$$A = \begin{bmatrix}0&1\\0&-2\end{bmatrix}, \qquad B = \begin{bmatrix}0\\1\end{bmatrix}, \qquad C = \begin{bmatrix}1&0\end{bmatrix}.$$

Physically ([5.1](05-01-state-space-modeling.md)): $x_1$ is position, $x_2 = \dot x_1$ is velocity, $u$ is force, drag coefficient 2, and the sensor reads position only. Here $n = 2$, so both matrices use just $\{I, A\}$.

**Controllability.**

$$AB = \begin{bmatrix}0&1\\0&-2\end{bmatrix}\begin{bmatrix}0\\1\end{bmatrix} = \begin{bmatrix}0(0)+1(1)\\0(0)+(-2)(1)\end{bmatrix} = \begin{bmatrix}1\\-2\end{bmatrix},$$

$$\mathcal{C} = \begin{bmatrix}B & AB\end{bmatrix} = \begin{bmatrix}0&1\\1&-2\end{bmatrix}, \qquad \det\mathcal{C} = (0)(-2) - (1)(1) = -1 \neq 0.$$

Rank 2 $= n$, so the system is **controllable**. Read it physically: the force acts directly on velocity ($B$ points along $x_2$), and one instant of velocity becomes position ($AB$ has a nonzero first entry) — push, and the position follows. Two independent directions, whole plane reachable.

*Check.* $A,B$ are in the phase-variable (controllable canonical) form of [5.1](05-01-state-space-modeling.md), and that form is *always* controllable — its $\mathcal{C}$ is triangular with $\pm 1$ on the anti-diagonal. And Cayley–Hamilton is visible here: $\det(sI-A) = s(s+2) = s^2+2s$, so $A^2 = -2A$, giving $A^2B = -2AB$ — a repeat of a column we already have, confirming there is no point going past $A^{n-1}$.

**Observability.**

$$CA = \begin{bmatrix}1&0\end{bmatrix}\begin{bmatrix}0&1\\0&-2\end{bmatrix} = \begin{bmatrix}1(0)+0(0) & 1(1)+0(-2)\end{bmatrix} = \begin{bmatrix}0&1\end{bmatrix},$$

$$\mathcal{O} = \begin{bmatrix}C\\CA\end{bmatrix} = \begin{bmatrix}1&0\\0&1\end{bmatrix} = I, \qquad \det\mathcal{O} = 1 \neq 0.$$

Rank 2 $= n$, so the system is **observable**. And the physics is transparent: $y = x_1$ is position and $\dot y = CAx = x_2$ is velocity, so "differentiate the output" literally hands you the second state. That is the $y, \dot y, \dots$ story in its simplest possible instance.

**Conclusion.** Controllable and observable, so everything [5.4](05-04-pole-placement-observers.md) wants to do — arbitrary pole placement, full-order observer — is available for this plant.

### Example 2 — the two tanks, in matrices (a failure of each kind)

**Uncontrollable pair.** From "The idea", with $x = [h_1\ \ h_2]^{\mathsf T}$:

$$A = \begin{bmatrix}-1&0\\0&-1\end{bmatrix}, \qquad B = \begin{bmatrix}1\\1\end{bmatrix}, \qquad AB = \begin{bmatrix}-1\\-1\end{bmatrix},$$

$$\mathcal{C} = \begin{bmatrix}1&-1\\1&-1\end{bmatrix}, \qquad \det\mathcal{C} = (1)(-1) - (-1)(1) = -1+1 = 0.$$

Rank 1 $< 2$: **not controllable**. Which direction is lost? The column space of $\mathcal{C}$ is $\operatorname{span}\{[1\ \ 1]^{\mathsf T}\}$ — the "both tanks together" line — so *that* is everything you can reach. Take the left null vector $v^{\mathsf T} = [\,1\ \ -1\,]$: check $v^{\mathsf T}\mathcal{C} = [\,1-1,\ \ -1+1\,] = [\,0\ \ 0\,]$ ✓, and $v^{\mathsf T}B = 1-1 = 0$ ✓. So $z = h_1-h_2$ obeys $\dot z = -z$, exactly the uncoupled equation we found by hand. The tank imbalance is an uncontrollable mode. It happens to be stable ($\lambda = -1$), so the system *is* **stabilizable** — you can't command the imbalance, but it goes away on its own.

**Unobservable pair.** Same tanks, sensor $y = h_1 + h_2$ (total volume), so $C = [\,1\ \ 1\,]$:

$$CA = \begin{bmatrix}1&1\end{bmatrix}\begin{bmatrix}-1&0\\0&-1\end{bmatrix} = \begin{bmatrix}-1&-1\end{bmatrix}, \qquad \mathcal{O} = \begin{bmatrix}1&1\\-1&-1\end{bmatrix},$$

$$\det\mathcal{O} = (1)(-1) - (1)(-1) = -1+1 = 0.$$

Rank 1 $< 2$: **not observable**. The null space is $\{x : x_1 + x_2 = 0\} = \operatorname{span}\{[1\ \ -1]^{\mathsf T}\}$. Confirm it directly: start at $x(0) = [1\ \ -1]^{\mathsf T}$ with $u=0$. Then $x(t) = e^{-t}[1\ \ -1]^{\mathsf T}$ ([5.2](05-02-solving-state-equations.md)), so $y(t) = h_1+h_2 = e^{-t}(1-1) = 0$ for all $t$ — byte-for-byte identical to the output of a system sitting at the origin. The imbalance is invisible. It is stable, so the pair is **detectable**.

And note the duality doing its work: $A^{\mathsf T} = A$ here, and $C^{\mathsf T} = [1\ \ 1]^{\mathsf T} = B$, so the second failure *is* the first one transposed. One symmetry, two defects.

### Example 3 — the hidden mode, and why the transfer function lied

This is the payoff. Take

$$A = \begin{bmatrix}1&0\\0&-2\end{bmatrix}, \qquad B = \begin{bmatrix}0\\1\end{bmatrix}, \qquad C = \begin{bmatrix}1&1\end{bmatrix}, \qquad D = 0.$$

The eigenvalues are $\lambda = +1$ and $\lambda = -2$: **the system is unstable**, with a state growing like $e^{t}$.

*Controllability:* $AB = [\,0\ \ -2\,]^{\mathsf T}$, so

$$\mathcal{C} = \begin{bmatrix}0&0\\1&-2\end{bmatrix}, \qquad \det\mathcal{C} = (0)(-2)-(0)(1) = 0,$$

rank 1: not controllable. The left null vector is $v^{\mathsf T} = [\,1\ \ 0\,]$ (check: $[\,1\ \ 0\,]\mathcal{C} = [\,0\ \ 0\,]$ ✓, $v^{\mathsf T}B = 0$ ✓), so the uncontrollable mode is $z = x_1$ with $\dot z = +z$. **The runaway mode is precisely the one you cannot touch.** Not stabilizable.

*Now compute the transfer function* ([5.1](05-01-state-space-modeling.md)), keeping the numerator and denominator unfactored so you can watch what happens. With $\det(sI-A) = (s-1)(s+2)$ and $\operatorname{adj}(sI-A) = \begin{bmatrix}s+2&0\\0&s-1\end{bmatrix}$:

$$G(s) = \frac{C\operatorname{adj}(sI-A)B}{\det(sI-A)} = \frac{\begin{bmatrix}1&1\end{bmatrix}\begin{bmatrix}0\\s-1\end{bmatrix}}{(s-1)(s+2)} = \frac{s-1}{(s-1)(s+2)} = \frac{1}{s+2}.$$

Stare at that. The state space has a pole at $s=+1$. The transfer function **does not** — a zero at $s=+1$ appeared out of nowhere and cancelled it. What you'd hand a classical designer is $G(s) = 1/(s+2)$: a placid, stable, first-order lag. Bode plot: gorgeous. Routh array ([2.4](02-04-stability-routh-hurwitz.md)): stable. Step response on the plot: settles in 2 s.

Meanwhile the actual hardware has $x_1(t) = x_1(0)e^{t}$ heading for the ceiling, and *nothing you do with $u$ can stop it.* The output is quiet only until $x_1$ saturates something, or until the tiniest modeling error breaks the exact cancellation and the mode leaks into $y$.

**The general statement:** an uncontrollable or unobservable mode is exactly a mode that cancels out of the transfer function. So

$$\underbrace{\text{transfer function}}_{\text{after cancellation}} \;\subseteq\; \underbrace{\text{state space}}_{\text{all }n\text{ modes}}$$

— the transfer function is a *possibly smaller* description of the system, and what it drops are the hidden modes. If a hidden mode is unstable, the transfer function is not merely incomplete; it is **wrong about the only question that matters**.

This is also the rigorous version of the warning in [1.4](01-04-transfer-functions-poles-zeros.md): never cancel an unstable plant pole with a controller zero. When you write $G_c(s) = \frac{s-1}{s+3}$ to "cancel" a plant pole at $+1$, you are not deleting the mode — you are building a series interconnection whose $+1$ mode is uncontrollable or unobservable from the loop's point of view. The algebra hides it; the physics keeps it. Only feedback that genuinely *moves* the pole (root locus, [3.1](03-01-root-locus-construction.md), or state feedback, [5.4](05-04-pole-placement-observers.md)) actually fixes an unstable pole.

## Watch out

- **You might think "controllable" means you can hold the state wherever you like.** It means you can *reach* any state in finite time. Staying there is a separate question — it requires $x_1$ to be an equilibrium of the closed loop, which is what feedback design, not the rank test, arranges.
- **You might think controllability and observability come as a pair.** They are independent. Example 3 is uncontrollable but observable; problem P1 below is uncontrollable but observable; P3 is controllable but unobservable. Run both tests, always.
- **You might think an uncontrollable system means a broken model.** Usually it means a **symmetry**: identical components driven identically, or a sensor placed at a node of a mode. The fix is hardware — a second actuator, or moving the sensor off the symmetry axis — not more math. Ask "what symmetry is doing this?" and you will usually find it.
- **You might think a nonzero determinant means you're safe.** Rank is a yes/no answer to a question that has degrees. A nearly-singular $\mathcal{C}$ means the system is controllable in principle and hopeless in practice; check the conditioning, not just the rank.

## One-liner

> $\mathcal{C} = [B\ AB\ \cdots\ A^{n-1}B]$ and $\mathcal{O} = [C;\,CA;\,\cdots;\,CA^{n-1}]$ must each have rank $n$ — and a mode that fails either test is exactly a mode that cancels out of the transfer function, which is how a "stable" $G(s)$ can describe a machine that's running away.

## Problems

**P1 (🟢)** For $A = \begin{bmatrix}-1&2\\0&-3\end{bmatrix}$, $B = \begin{bmatrix}1\\0\end{bmatrix}$, $C = \begin{bmatrix}1&0\end{bmatrix}$: test controllability and observability, computing both determinants. If either fails, name the offending state direction and say whether the system is still stabilizable or detectable.

**P2 (🟡)** For $A = \begin{bmatrix}0&1\\ \alpha&0\end{bmatrix}$, $B = \begin{bmatrix}1\\1\end{bmatrix}$, find every real $\alpha$ for which the pair is **not** controllable. At that $\alpha$, identify the uncontrollable mode and its eigenvalue, and decide whether the system is stabilizable.

**P3 (🔴)** For $A = \begin{bmatrix}3&0\\0&-4\end{bmatrix}$, $B = \begin{bmatrix}1\\1\end{bmatrix}$, $C = \begin{bmatrix}0&1\end{bmatrix}$: (a) run both rank tests with determinants; (b) if the system is unobservable, give the invisible direction; (c) compute $G(s)$ and show the cancellation explicitly; (d) is it detectable, and what does duality say about the pair $(A^{\mathsf T}, C^{\mathsf T})$?

<details>
<summary>Solutions</summary>

**P1** $n=2$.

*Controllability.* $AB = \begin{bmatrix}-1&2\\0&-3\end{bmatrix}\begin{bmatrix}1\\0\end{bmatrix} = \begin{bmatrix}(-1)(1)+2(0)\\0(1)+(-3)(0)\end{bmatrix} = \begin{bmatrix}-1\\0\end{bmatrix}$, so

$$\mathcal{C} = \begin{bmatrix}1&-1\\0&0\end{bmatrix}, \qquad \det\mathcal{C} = (1)(0)-(-1)(0) = 0.$$

Rank 1 (the bottom row is entirely zero), so the system is **not controllable**. The reachable set is $\operatorname{span}\{[1\ \ 0]^{\mathsf T}\}$ — the $x_1$-axis only.

*Which mode is lost.* The left null vector is $v^{\mathsf T} = [\,0\ \ 1\,]$: indeed $[\,0\ \ 1\,]\mathcal{C} = [\,0\ \ 0\,]$ ✓ and $v^{\mathsf T}B = 0$ ✓. Also $v^{\mathsf T}A = [\,0\ \ -3\,] = -3\,v^{\mathsf T}$, so $z = x_2$ satisfies $\dot z = -3z$ with no $u$. Obvious from the second row of the state equation too: $\dot x_2 = -3x_2$, no input term at all. Since $\lambda = -3 < 0$, the uncontrollable mode is stable, so the system **is stabilizable**.

*Observability.* $CA = \begin{bmatrix}1&0\end{bmatrix}\begin{bmatrix}-1&2\\0&-3\end{bmatrix} = \begin{bmatrix}1(-1)+0(0) & 1(2)+0(-3)\end{bmatrix} = \begin{bmatrix}-1&2\end{bmatrix}$, so

$$\mathcal{O} = \begin{bmatrix}1&0\\-1&2\end{bmatrix}, \qquad \det\mathcal{O} = (1)(2)-(0)(-1) = 2 \neq 0.$$

Rank 2, so the system **is observable** (hence detectable).

*Check.* Uncontrollable yet observable — the two properties really are independent. Sanity on observability: $y = x_1$ and $\dot y = \dot x_1 = -x_1 + 2x_2$, so $x_2 = (\dot y + y)/2$ — the state is recoverable from the output and its derivative, exactly as rank 2 promised. ✓

**P2** $AB = \begin{bmatrix}0&1\\ \alpha&0\end{bmatrix}\begin{bmatrix}1\\1\end{bmatrix} = \begin{bmatrix}0(1)+1(1)\\ \alpha(1)+0(1)\end{bmatrix} = \begin{bmatrix}1\\ \alpha\end{bmatrix}$, so

$$\mathcal{C} = \begin{bmatrix}1&1\\1&\alpha\end{bmatrix}, \qquad \det\mathcal{C} = (1)(\alpha)-(1)(1) = \alpha - 1.$$

The pair is controllable for every $\alpha \neq 1$, and **not controllable exactly at $\alpha = 1$**.

At $\alpha=1$: $A = \begin{bmatrix}0&1\\1&0\end{bmatrix}$, with eigenvalues from $\det(sI-A) = s^2-1 = 0$, i.e. $\lambda = \pm 1$. Eigenvectors: $A[1\ \ 1]^{\mathsf T} = [1\ \ 1]^{\mathsf T}$ (so $\lambda=+1$) and $A[1\ \ -1]^{\mathsf T} = [-1\ \ 1]^{\mathsf T} = -[1\ \ -1]^{\mathsf T}$ (so $\lambda=-1$).

Notice $B = [1\ \ 1]^{\mathsf T}$ is *exactly* the $\lambda=+1$ eigenvector, so the input excites only that mode — the input direction is trapped inside a one-dimensional invariant subspace, and $\mathcal{C}$ can never reach rank 2. The uncontrollable mode is the other one: left null vector $v^{\mathsf T} = [\,1\ \ -1\,]$ gives $v^{\mathsf T}\mathcal{C} = [\,1-1,\ \ 1-1\,] = [\,0\ \ 0\,]$ ✓, $v^{\mathsf T}B = 0$ ✓, and $v^{\mathsf T}A = [\,-1\ \ 1\,] = -v^{\mathsf T}$, so $z = x_1 - x_2$ obeys $\dot z = -z$ — **eigenvalue $\lambda = -1$**.

**Stabilizable: yes.** The uncontrollable mode sits at $-1$ (stable, decays on its own), and the unstable mode at $+1$ *is* controllable, so state feedback can move it into the left half-plane.

*Check.* Substitute $\alpha = 2$: $\det\mathcal{C} = 1 \neq 0$, controllable ✓ — a single bad value, as a determinant linear in $\alpha$ must give. And with $\alpha=1$, subtracting the two state equations gives $\dot x_1 - \dot x_2 = x_2 + u - (x_1 + u) = -(x_1-x_2)$: the input cancels, confirming $\dot z = -z$ by hand ✓ (same trick as the tanks).

**P3** (a) *Observability.* $CA = \begin{bmatrix}0&1\end{bmatrix}\begin{bmatrix}3&0\\0&-4\end{bmatrix} = \begin{bmatrix}0(3)+1(0) & 0(0)+1(-4)\end{bmatrix} = \begin{bmatrix}0&-4\end{bmatrix}$, so

$$\mathcal{O} = \begin{bmatrix}0&1\\0&-4\end{bmatrix}, \qquad \det\mathcal{O} = (0)(-4)-(1)(0) = 0 \quad \Rightarrow \quad \text{rank } 1 < 2: \textbf{not observable}.$$

*Controllability.* $AB = [\,3\ \ -4\,]^{\mathsf T}$, so $\mathcal{C} = \begin{bmatrix}1&3\\1&-4\end{bmatrix}$ and $\det\mathcal{C} = (1)(-4)-(3)(1) = -7 \neq 0$: rank 2, **controllable**.

(b) The unobservable subspace is $\ker\mathcal{O}$: solving $\begin{bmatrix}0&1\\0&-4\end{bmatrix}\begin{bmatrix}x_1\\x_2\end{bmatrix} = 0$ gives $x_2 = 0$ with $x_1$ free, so $\ker\mathcal{O} = \operatorname{span}\{[1\ \ 0]^{\mathsf T}\}$. **The $x_1$ direction is invisible** — and $x_1$ is the $\lambda = +3$ mode. Direct confirmation: with $u=0$ and $x(0) = [c\ \ 0]^{\mathsf T}$, we get $x(t) = [ce^{3t}\ \ 0]^{\mathsf T}$ and $y = Cx = x_2 = 0$ for all $t$. The output is flat zero while the state explodes. ✓

(c) $\det(sI-A) = (s-3)(s+4)$ and $\operatorname{adj}(sI-A) = \begin{bmatrix}s+4&0\\0&s-3\end{bmatrix}$, so

$$G(s) = \frac{\begin{bmatrix}0&1\end{bmatrix}\begin{bmatrix}s+4&0\\0&s-3\end{bmatrix}\begin{bmatrix}1\\1\end{bmatrix}}{(s-3)(s+4)} = \frac{\begin{bmatrix}0&1\end{bmatrix}\begin{bmatrix}s+4\\s-3\end{bmatrix}}{(s-3)(s+4)} = \frac{s-3}{(s-3)(s+4)} = \frac{1}{s+4}.$$

A zero at $s=+3$ cancels the pole at $s=+3$: the unstable mode is **erased from the transfer function**, which now looks like a benign stable lag with time constant $0.25$ s.

(d) **Not detectable** — detectability requires the unobservable modes to be stable, and this one is at $\lambda = +3$. No observer can ever estimate $x_1$, because no output record contains information about it. By duality, $(A,C)$ unobservable $\iff$ $(A^{\mathsf T}, C^{\mathsf T})$ uncontrollable; verify it directly with $A^{\mathsf T} = A$ (diagonal) and $C^{\mathsf T} = [0\ \ 1]^{\mathsf T}$: $A^{\mathsf T}C^{\mathsf T} = [0\ \ -4]^{\mathsf T}$, so that controllability matrix is $\begin{bmatrix}0&0\\1&-4\end{bmatrix}$ with determinant $(0)(-4)-(0)(1) = 0$ ✓ — rank 1, uncontrollable, as promised.

*Check.* Compare with Example 3, which was uncontrollable-but-observable with the same kind of hidden unstable mode. P3 is its mirror image, and the transfer function is fooled in exactly the same way — which is duality made concrete. ✓

</details>

## Flashback


**From Lesson 3.1 (Root locus: construction):** A unity-feedback loop has forward path $G(s) = \dfrac{K}{s(s+3)(s^2+2s+2)}$. How many asymptotes does the root locus have, at what angles, and where is their centroid?

<details>
<summary>Solution</summary>

First locate the open-loop poles and zeros. The factor $s^2+2s+2$ has roots $s = \dfrac{-2 \pm \sqrt{4-8}}{2} = -1 \pm j$. So the open-loop poles are

$$s = 0,\quad -3,\quad -1+j,\quad -1-j,$$

giving $n = 4$. There are no finite zeros, so $m = 0$.

**Number of asymptotes** $= n - m = 4$ (every branch runs off to infinity).

**Angles.** $\theta_k = \dfrac{(2k+1)180^\circ}{n-m} = \dfrac{(2k+1)180^\circ}{4}$ for $k = 0,1,2,3$:

$$\theta = 45^\circ,\ 135^\circ,\ 225^\circ,\ 315^\circ.$$

**Centroid.** $\sigma_a = \dfrac{\sum \text{poles} - \sum \text{zeros}}{n-m}$. The conjugate pair contributes its real part twice, and the imaginary parts cancel:

$$\sigma_a = \frac{0 + (-3) + (-1+j) + (-1-j)}{4} = \frac{-5}{4} = -1.25.$$

*Check.* The imaginary parts must cancel for a real system — they do, so $\sigma_a$ is real, as it has to be. And the sum of the poles equals minus the $s^3$ coefficient of $s(s+3)(s^2+2s+2) = s^4 + 5s^3 + 8s^2 + 6s$, i.e. $-5$, matching the numerator above.

*(Tie-in to this lesson: the root locus is drawn from the **transfer function's** poles. If the state-space model has a mode that cancelled out — an uncontrollable or unobservable one — it never appears on the locus at all, and no amount of gain tuning will move it. The rank tests are how you find out whether the picture you are drawing is the whole system.)*

</details>

## Connections

- **Backward:** the tests are pure rank questions from [`linalg-refresher` 1.3](../../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md), read through the column-space/null-space lens of [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md); "which mode is lost" is an eigenvector question from [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), and the modal picture in the figure is diagonalization ([`linalg-refresher` 3.2](../../linalg-refresher/lessons/03-02-diagonalization.md)) applied to $\dot x = Ax + Bu$. The modes themselves are the $e^{\lambda t}$ terms of [5.2](05-02-solving-state-equations.md); the transfer-function formula is [5.1](05-01-state-space-modeling.md).
- **Forward:** [5.4](05-04-pole-placement-observers.md) needs controllability to place poles with $u = -Kx$ and observability to build the observer — and by duality it designs the observer gain $L$ by running the pole-placement recipe on $(A^{\mathsf T}, C^{\mathsf T})$. In [5.5](05-05-digital-control.md), sampling can *destroy* controllability at unlucky sample rates, which is a jarring but real fact worth having the vocabulary for.
- **Sideways:** the cancellation story is the state-space explanation of the unstable-pole-cancellation trap flagged in [1.4](01-04-transfer-functions-poles-zeros.md) and revisited whenever a compensator zero sits near a plant pole ([4.3](04-03-lead-lag-compensators.md)). The same "pole cancels, mode survives" phenomenon shows up in signal processing as a pole–zero cancellation that changes the region of convergence ([`signals-systems` 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md)), and the "how nearly singular is it" refinement is the SVD of [`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md).

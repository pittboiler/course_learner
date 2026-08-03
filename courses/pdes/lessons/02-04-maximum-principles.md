# Partial Differential Equations · Lesson 2.4: Maximum principles and their consequences

> ⏱ ~15 min · Module 2: The three classical equations · Builds on: [2.3 Laplace's and Poisson's equations](02-03-laplace-poisson-equations.md) · Unlocks: [3.1 Separation of variables on a bounded interval](03-01-separation-of-variables.md)

## Why this matters

Here is a small miracle: you can often know exactly where a solution's largest value sits, and put a hard numerical ceiling on it, *without ever solving the equation*. For Laplace's equation that place is the boundary; for the heat equation it is the past. From this one fact fall two of the most-used theorems in the whole subject — **uniqueness** (there is only one solution with your data) and **stability** (small changes in the data make only small changes in the solution). Every method in Module 3 onward quietly relies on uniqueness: it is what lets you say "I found *a* solution, therefore I found *the* solution."

## The idea

A harmonic function — one obeying $\nabla^2 u = 0$ — has no bumps of its own. Recall the mean-value property from [2.3](02-03-laplace-poisson-equations.md): the value at any point equals the average over any small sphere around it. But an average can never exceed every number it averages. So if $u$ had a strict peak at an interior point, its value there would beat its neighbors' — yet it must *equal their average*, a contradiction. The peak has nowhere to hide except the boundary, where there is no surrounding sphere to average over. Heat behaves the same way in space-time: diffusion only ever *smooths and lowers* hot spots, so a new interior maximum can never spontaneously appear. Any record-high temperature was either there at the start or forced in from the ends.

Think of a stretched rubber sheet pinned along a wire frame (the boundary): it sags and bulges to whatever the frame dictates, but its highest and lowest points are always *on the frame*. Left alone in the middle, it never chooses to spike.

## The formal version

**Weak maximum principle (Laplace).** Let $u$ be harmonic ($\nabla^2 u = 0$) and continuous on a bounded closed domain $\overline{\Omega} = \Omega \cup \partial\Omega$. Then

$$\max_{\overline{\Omega}} u = \max_{\partial\Omega} u, \qquad \min_{\overline{\Omega}} u = \min_{\partial\Omega} u.$$

In words: the biggest and smallest values of a harmonic function are always attained somewhere on the boundary $\partial\Omega$ — the interior can only hold values in between.

**Strong maximum principle.** If a harmonic $u$ attains its maximum (or minimum) at an *interior* point of a connected $\Omega$, then $u$ is **constant** throughout.

In words: a non-constant harmonic function has *no* interior peak or pit at all — not just "the boundary works too," but "the inside is strictly ruled out."

**Maximum principle for the heat equation.** Let $u$ solve $u_t = \kappa\,u_{xx}$ (with $\kappa > 0$, the diffusivity) on the space-time rectangle $Q = \{0 \le x \le L,\ 0 \le t \le T\}$. Define the **parabolic boundary** $\partial_p Q$ as the bottom edge $t = 0$ together with the two vertical sides $x = 0$ and $x = L$ — everything *except* the top edge $t = T$. Then

$$\max_{Q} u = \max_{\partial_p Q} u, \qquad \min_{Q} u = \min_{\partial_p Q} u.$$

In words: the hottest (and coldest) point in the whole space-time slab occurs either at the initial instant or at one of the two spatial ends — never freshly in the interior, and never *only* at the final time.

## Picture

![Left: a 2D domain where a harmonic function's max and min sit on the boundary, with level curves inside. Right: the heat equation's space-time rectangle with the parabolic boundary — the initial edge and both spatial sides — highlighted, and the final-time edge marked as excluded.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (uniqueness of the Dirichlet problem — the payoff).** Suppose $u_1$ and $u_2$ both solve the same boundary-value problem

$$\nabla^2 u = f \ \text{ in } \Omega, \qquad u = g \ \text{ on } \partial\Omega,$$

with the *same* source $f$ and the *same* boundary data $g$. Are they forced to be equal? Let $w = u_1 - u_2$. Subtracting the two problems, the source cancels: $\nabla^2 w = f - f = 0$, so $w$ is **harmonic**. And on the boundary $w = g - g = 0$. Now apply the weak maximum principle to $w$:

$$\max_{\overline{\Omega}} w = \max_{\partial\Omega} w = 0, \qquad \min_{\overline{\Omega}} w = \min_{\partial\Omega} w = 0.$$

So $0 \le w \le 0$ everywhere: $w \equiv 0$, i.e. $u_1 \equiv u_2$. **The solution is unique.** Notice we never wrote down a single solution — the principle alone settles it.

**Example 2 (a free bound — no solving required).** A harmonic function $u$ on a rectangle has boundary values known only to lie in an interval, $a \le u \le b$ on $\partial\Omega$. Claim: then $a \le u \le b$ *everywhere inside* too. Proof is immediate — by the weak maximum principle,

$$u(x,y) \le \max_{\overline{\Omega}} u = \max_{\partial\Omega} u \le b, \qquad u(x,y) \ge \min_{\overline{\Omega}} u = \min_{\partial\Omega} u \ge a.$$

Concretely: if the edges of a metal plate are held between $10^\circ$ and $40^\circ$, the steady interior temperature is *guaranteed* to sit between $10^\circ$ and $40^\circ$ — no interior point can secretly reach $50^\circ$. The same one-line argument bounds the heat equation: if the initial and boundary temperatures are all $\le M$, then $u \le M$ for all later time, because the max lives on the parabolic boundary where everything is $\le M$. Diffusion never manufactures a new record.

## Watch out

- **You might think the heat max can sit at the final time $t = T$.** It can't be *guaranteed* to — the parabolic boundary deliberately *excludes* the top edge. The principle says the max is attained on the initial slice or the spatial ends; time $T$ is where you're *predicting*, not where extremes are sourced. Including $t=T$ is the single most common misstatement.
- **You might think you still have to solve to get bounds.** The whole point is that uniqueness and comparison come *for free* from the data alone — the maximum principle is a shortcut *around* solving, not a step within it.
- **You might think every PDE has a maximum principle.** Elliptic (Laplace/Poisson) and parabolic (heat) equations do; the **wave equation does not** — a vibrating string routinely bulges higher in the interior than at any boundary point, because waves carry energy inward as well as outward. For the wave equation you prove uniqueness with a conserved **energy** integral instead (Module 3 revisits this). And note the fine print throughout: "max on the boundary" needs a **bounded** domain — on an unbounded region a harmonic function can march off to infinity with no boundary maximum at all.

## One-liner

> A harmonic function's extremes sit on the boundary and heat's sit in the past — so uniqueness and hard bounds come free, with no solving.

## Problems

**P1 (🟢)** A function $u$ is harmonic on the unit disk and equals $u(\theta) = 3 + \cos\theta$ on the boundary circle. Without computing $u$ inside, give the tightest interval you can guarantee contains $u$ at the center.

**P2 (🟡)** Two functions $v_1, v_2$ solve the heat equation $u_t = \kappa u_{xx}$ on $0 \le x \le L$, $t \ge 0$, with identical initial data $v_1(x,0) = v_2(x,0)$ and identical boundary data at $x=0$ and $x=L$ for all time. Prove $v_1 \equiv v_2$. (Mirror Example 1, but use the *parabolic* boundary.)

**P3 (🔴, optional)** *Comparison.* Suppose $u$ and $U$ are both harmonic on a bounded $\Omega$, and on the boundary $u \le U$ (pointwise). Show $u \le U$ throughout $\Omega$. Then use this to argue: a harmonic function that is $\le 0$ on the boundary and $\le 0$ at even one interior point where it attains its max must be $\le 0$ everywhere — and explain which principle (weak or strong) you'd invoke to upgrade "$\le 0$" to "$< 0$ inside unless constant."

<details>
<summary>Solutions</summary>

**P1** The boundary values are $3 + \cos\theta$, which ranges over $[3-1,\,3+1] = [2,4]$ as $\theta$ runs around the circle. By the weak maximum principle the center value lies between $\min_{\partial\Omega} u = 2$ and $\max_{\partial\Omega} u = 4$, so the guaranteed interval is $[2,4]$. (In fact the mean-value property pins the center exactly at the boundary average $\frac{1}{2\pi}\int_0^{2\pi}(3+\cos\theta)\,d\theta = 3$ — but the maximum principle alone already traps it in $[2,4]$ without any integration.)

**P2** Let $w = v_1 - v_2$. Linearity of the heat operator gives $w_t = \kappa w_{xx}$, so $w$ also solves the heat equation on the same rectangle $Q$. On the parabolic boundary $\partial_p Q$: at $t=0$, $w = v_1(x,0) - v_2(x,0) = 0$; at $x=0$ and $x=L$, $w = 0$ for all $t$ by the matching boundary data. So $w = 0$ on all of $\partial_p Q$. By the heat maximum principle,

$$\max_Q w = \max_{\partial_p Q} w = 0, \qquad \min_Q w = \min_{\partial_p Q} w = 0,$$

hence $0 \le w \le 0$, i.e. $w \equiv 0$ and $v_1 \equiv v_2$ on the whole slab (extend to all $t$ by taking $T$ arbitrarily large). Uniqueness for the heat equation, again with no solving.

**P3** Let $w = U - u$. Both are harmonic, so $w$ is harmonic (linearity). On $\partial\Omega$, $w = U - u \ge 0$. By the weak maximum principle, $\min_{\overline{\Omega}} w = \min_{\partial\Omega} w \ge 0$, so $w \ge 0$ throughout, i.e. $u \le U$ in all of $\Omega$. ✓

For the second part: if a harmonic $u$ is $\le 0$ on $\partial\Omega$, the weak principle gives $\max_{\overline{\Omega}} u = \max_{\partial\Omega} u \le 0$, so $u \le 0$ everywhere — done. To sharpen "$\le 0$" to "$<0$ at every interior point unless $u$ is constant," invoke the **strong** maximum principle: if $u$ reached its maximum value $0$ at some interior point, $u$ would have to be constant $\equiv 0$; so a non-constant such $u$ satisfies $u < 0$ strictly inside. The weak principle bounds; the strong principle rules out interior touching.

</details>

## Flashback

**From Lesson 2.3 (Laplace's and Poisson's equations):** Verify that $u(x,y) = x^2 - y^2$ is harmonic, and then — invoking this lesson's principle — state where its maximum over the closed square $-1 \le x \le 1$, $-1 \le y \le 1$ must occur, and find that maximum value.

<details>
<summary>Solution</summary>

Harmonicity: $u_{xx} = 2$ and $u_{yy} = -2$, so $\nabla^2 u = u_{xx} + u_{yy} = 2 + (-2) = 0$. ✓ It is harmonic. By the weak maximum principle the maximum over the closed square is attained on the boundary. Checking the four edges: on $y = \pm 1$, $u = x^2 - 1$, maximized at $x = \pm 1$ giving $1 - 1 = 0$; on $x = \pm 1$, $u = 1 - y^2$, maximized at $y = 0$ giving $1 - 0 = 1$. So the maximum is $\boxed{1}$, attained at the boundary points $(\pm 1, 0)$ — squarely on $\partial\Omega$, exactly as the principle demands. (Interior check: at the center $(0,0)$, $u = 0$, comfortably below the boundary max — no interior peak.)

</details>

## Connections

- **Backward:** the whole principle is the [mean-value property](02-03-laplace-poisson-equations.md) of 2.3 turned into an inequality — an average can't exceed its inputs. The heat version reaches back to the diffusion picture of [2.1](02-01-heat-diffusion-equations.md): smoothing can only lower peaks.
- **Forward:** uniqueness is the license behind *every* solution method to come — [separation of variables](03-01-separation-of-variables.md), Fourier series, Green's functions. Once you exhibit one solution matching the data, the maximum principle certifies it is *the* solution. Contrast with the [wave equation](02-02-wave-equation-dalembert.md), whose uniqueness needs a conserved-energy argument instead.
- **Sideways (electromagnetism):** in a charge-free region the electrostatic potential is harmonic ($\nabla^2 \phi = 0$), so it has **no interior extrema** — there are no potential "wells" in empty space that could trap a charged particle at rest. This is Earnshaw's theorem, and it is exactly the strong maximum principle in physics dress; see [em-refresher](../../em-refresher/syllabus.md).
- **Sideways (quantum mechanics):** comparison and bounding arguments of this flavor let you cap or sandwich solutions of Schrödinger-type equations by their data without solving — a habit worth carrying into [quantum-mechanics](../../quantum-mechanics/syllabus.md).
- See the [syllabus](../syllabus.md) for where Module 3 picks up the eigenfunction machinery that uniqueness makes trustworthy.

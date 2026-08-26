# Robotics & Kinematics · Lesson 4.6: Motion planning — a taste

> ⏱ ~15 min · Module 4: Control and mobile robots · Builds on: [1.1 Robots, links, and configuration space](01-01-robots-links-configuration-space.md), [4.4 Wheeled mobile robots](04-04-wheeled-mobile-robots.md) · Course finale

## Why this matters

Every controller in this course has been given a trajectory. **Where does the trajectory come from?**

For a free-space move between two poses, [3.4](03-04-joint-space-trajectories.md)'s polynomial is enough. But a robot in a real workcell has to get around fixtures, other machines, its own body, and sometimes people — and finding a collision-free route through that clutter is a search problem, not an interpolation problem.

[Motion planning](../reference.md#motion-planning) is that search, and the central idea is the one [1.1](01-01-robots-links-configuration-space.md) introduced and then set aside: **do the search in configuration space, not in the physical world.** A robot of complicated shape becomes a single point, obstacles become forbidden regions, and the problem becomes finding a curve between two points that avoids them.

The catch is dimension. A 6-DOF arm's configuration space is six-dimensional, and any method that discretizes it exhaustively is finished before it starts.

## The idea

**Configuration-space obstacles.** An obstacle in the workspace maps to a region $\mathcal{C}_{\rm obs}$ of configurations in which the robot collides with it. The free space is $\mathcal{C}_{\rm free} = \mathcal{C}\setminus\mathcal{C}_{\rm obs}$, and a **motion plan is a continuous curve in $\mathcal{C}_{\rm free}$** from start to goal.

This is a genuine simplification: the robot's geometry has been absorbed into the shape of $\mathcal{C}_{\rm obs}$, and what remains is a point moving in a space with holes in it.

The price is that $\mathcal{C}_{\rm obs}$ is expensive to compute — for a 6-DOF arm it is a six-dimensional region with no closed form — so nobody computes it. **Instead, algorithms test individual configurations for collision** and never build the obstacle explicitly.

**Why exhaustive search fails.** Discretizing $n$ dimensions at $k$ values per axis gives $k^n$ cells. At $n = 6$ and a coarse $k = 10$ that is a million; at a still-coarse $k = 50$ it is $1.6\times10^{10}$. **The curse of dimensionality is not a difficulty to be optimized around — it is a wall.**

**Sampling-based planning** is the escape, and it was the field's decisive idea. Do not represent $\mathcal{C}_{\rm free}$ at all. Sample random configurations, keep the collision-free ones, connect nearby ones with straight-line segments that are themselves checked for collision, and search the resulting graph.

Two forms dominate:

**PRM (probabilistic roadmap)** builds a graph once and answers many queries. Right for a static environment queried repeatedly.

**RRT (rapidly-exploring random tree)** grows a tree from the start toward random samples, biased to explore. Right for a single query, and it extends naturally to systems with differential constraints — which is what a nonholonomic robot ([4.4](04-04-wheeled-mobile-robots.md)) needs.

Both are **probabilistically complete**: if a solution exists, the probability of finding it goes to 1 as sampling continues. Neither is complete in the classical sense, and neither will ever tell you that no solution exists.

## The formal version

**Configuration-space obstacle.**

$$\boxed{\;\mathcal{C}_{\rm obs} = \left\{\mathbf{q}\in\mathcal{C}\ :\ \mathcal{A}(\mathbf{q})\cap\mathcal{O}\neq\emptyset\right\}, \qquad \mathcal{C}_{\rm free} = \mathcal{C}\setminus\mathcal{C}_{\rm obs},\;}$$

with $\mathcal{A}(\mathbf{q})$ the robot's occupied volume at configuration $\mathbf{q}$ and $\mathcal{O}$ the obstacles. Self-collision is included by testing the robot's links against each other.

**The planning problem.** Find a continuous $\boldsymbol\tau: [0,1]\to\mathcal{C}_{\rm free}$ with $\boldsymbol\tau(0) = \mathbf{q}_{\rm start}$ and $\boldsymbol\tau(1) = \mathbf{q}_{\rm goal}$.

**Complexity.** Piano-mover's problem is **PSPACE-hard** in the number of degrees of freedom. Exact algorithms exist (Canny's roadmap is singly exponential in $n$) and are unusable in practice.

**Grid search.** Discretize and run A*:

$$\text{cells} = k^n.$$

| $n$ | $k = 10$ | $k = 20$ | $k = 50$ |
|---|---|---|---|
| 2 | $10^2$ | $4\times10^2$ | $2.5\times10^3$ |
| 3 | $10^3$ | $8\times10^3$ | $1.3\times10^5$ |
| 6 | $10^6$ | $6.4\times10^7$ | $1.6\times10^{10}$ |

**Feasible to about three dimensions.** Mobile robots ($n = 3$) are routinely planned on grids; manipulators are not.

**PRM.**

1. Sample $N$ random configurations; discard those in collision.
2. Connect each to its $k$ nearest neighbours if the straight-line segment between them is collision-free.
3. Connect start and goal to the roadmap; search it with A* or Dijkstra.

$$\text{cost} \approx \underbrace{N}_{\text{node checks}}+\underbrace{Nk\,m}_{\text{edge checks}},$$

with $m$ the number of interpolation steps per edge. **Roughly $10^5$ collision checks for $N = 1000$, $k = 10$, $m = 20$** — trivial by modern standards, and it answers every subsequent query by graph search alone.

**RRT.**

1. Start a tree at $\mathbf{q}_{\rm start}$.
2. Sample a random $\mathbf{q}_{\rm rand}$ (with probability $\sim5$–10%, sample the goal instead).
3. Find the nearest tree node and extend from it toward $\mathbf{q}_{\rm rand}$ by a step $\epsilon$.
4. If the extension is collision-free, add it. Repeat until the goal is reached.

**The Voronoi bias** is what makes it work: the nearest node to a uniform random sample is most likely to be one whose Voronoi region is large — a node on the frontier. **The tree therefore grows outward into unexplored space automatically**, without any explicit exploration heuristic.

**RRT\*** rewires the tree as it grows and is **asymptotically optimal**: the path cost converges to the optimum as samples accumulate. Plain RRT is not, and its paths are typically 20–50% longer than optimal and visibly jagged.

**Narrow passages** are the failure mode. The probability of sampling into a passage of relative width $w$ in $d$ dimensions scales as $w^d$:

| $w$ | $d = 3$ | $d = 6$ |
|---|---|---|
| 0.1 | $\sim10^3$ samples | $\sim10^6$ |
| 0.05 | $\sim8\times10^3$ | $\sim6\times10^7$ |

**A tight assembly clearance is a narrow passage**, and it is where sampling-based planners genuinely struggle. Remedies include bridge sampling, obstacle-surface sampling, and — most effective — planning the approach separately with a task-specific strategy.

**Potential fields.** An entirely different approach: define

$$U(\mathbf{q}) = U_{\rm att}(\mathbf{q})+U_{\rm rep}(\mathbf{q}), \qquad U_{\rm att} = \tfrac12k_a\|\mathbf{q}-\mathbf{q}_{\rm goal}\|^2, \qquad U_{\rm rep} = \begin{cases}\tfrac12k_r\left(\dfrac{1}{\rho}-\dfrac{1}{\rho_0}\right)^2 & \rho<\rho_0\\0&\text{otherwise}\end{cases}$$

and descend its gradient, $\dot{\mathbf{q}} = -\nabla U$.

**Fast, local, and reactive** — it runs at servo rate and responds to moving obstacles, which no sampling planner does. **And it gets stuck in local minima**, which is fatal as a global method. The standard architecture uses a sampling planner globally and a potential field locally, and that combination is what most real systems run.

**Completeness.**

| Property | Meaning | Achieved by |
|---|---|---|
| Complete | finds a solution or proves none exists | exact algorithms (impractical) |
| Resolution complete | complete at a given discretization | grid search |
| **Probabilistically complete** | $P(\text{success})\to1$ as samples $\to\infty$ | PRM, RRT |
| Asymptotically optimal | cost $\to$ optimum | PRM\*, RRT\* |
| None of these | may fail on solvable problems | potential fields |

**No sampling planner can report failure.** It can only fail to succeed within a time budget, which is a real operational difference: a planner that has run for ten seconds without a solution has told you nothing about whether one exists.

**Nonholonomic planning.** For a robot that cannot move sideways ([4.4](04-04-wheeled-mobile-robots.md)), a straight-line connection between two configurations is not executable. RRT extends naturally: replace the straight-line extension with a **feasible motion primitive** — a Dubins curve (forward only) or a Reeds–Shepp curve (forward and reverse) — and the tree grows only along executable paths.

**PRM does not extend as easily**, because connecting two arbitrary configurations requires solving a two-point boundary-value problem, which for a nonholonomic system is itself nontrivial. **This is why RRT dominates mobile-robot planning and PRM dominates manipulator planning.**

## Picture

![A two-panel figure. Left: a two-link planar arm shown beside its two-dimensional configuration space, with a single circular obstacle in the workspace mapping to a curved, irregularly shaped forbidden region in the joint-angle plane, and a path drawn from a start configuration to a goal configuration threading between two such regions, illustrating that a simple workspace obstacle becomes a complicated C-space obstacle. Right: an RRT growing in a two-dimensional configuration space with obstacles, shown at three stages — a few branches near the start, a partially explored space with the tree reaching into open regions, and a completed tree with the solution path highlighted — with a note that the tree grows preferentially toward unexplored regions because of the Voronoi bias.](assets/04-06-fig1.svg)

Left: why configuration space is the right arena and why $\mathcal{C}_{\rm obs}$ is never computed explicitly. A circle in the workspace becomes a complicated curved region in joint space, and in six dimensions there is no drawing it at all.

Right: the RRT's growth. Sampling uniformly and extending from the nearest node makes frontier nodes win disproportionately, so the tree explores without being told to.

## Worked examples

**Example 1 (why grids fail and sampling works).** Compare planning approaches for a mobile robot ($n = 3$: $x$, $y$, $\phi$) and a 6-DOF arm.

*Grid search for the mobile robot.* A $20\times20$ m warehouse at 5 cm resolution and $5°$ heading resolution:

$$\text{cells} = \frac{20}{0.05}\times\frac{20}{0.05}\times\frac{360}{5} = 400\times400\times72 = 1.15\times10^{7}.$$

**Eleven million cells** — large but entirely tractable. A* explores a fraction of them, and this is exactly how warehouse robots are planned in practice.

*Grid search for the 6-DOF arm.* Each joint spans roughly $300°$; at $5°$ resolution that is 60 values per axis:

$$\text{cells} = 60^6 = 4.67\times10^{10}.$$

**Forty-seven billion cells**, each requiring a collision check costing perhaps a microsecond:

$$4.67\times10^{10}\times10^{-6}\ \mathrm{s} = 4.67\times10^{4}\ \mathrm{s} = 13\ \text{hours}$$

just to build the grid, before any search. And at $5°$ resolution the plan would be too coarse to thread anything.

*PRM for the same arm.* Sample $N = 1000$ configurations, connect to $k = 10$ neighbours, check each edge at $m = 20$ interpolation steps:

$$\text{collision checks} = N+\frac{Nk}{2}m = 1000+5000(20) = 101{,}000.$$

$$101{,}000\times10^{-6}\ \mathrm{s} = 0.1\ \mathrm{s}.$$

**A tenth of a second**, against thirteen hours — a factor of **460,000**.

*And the roadmap is reusable.* Once built, every subsequent query is a graph search over 1000 nodes and 5000 edges — microseconds. A workcell whose fixtures do not move can build its roadmap once at commissioning and plan every motion thereafter essentially for free.

*What was given up.* Everything. The roadmap does not represent $\mathcal{C}_{\rm free}$; it represents a thousand points in it and the connections between them. **If the solution requires threading a passage no sampled edge happens to cross, the planner will not find it** and will not say so. The grid, for all its cost, would have found it.

**That trade — completeness for tractability — is the defining bargain of modern motion planning**, and it was accepted because the alternative was not planning at all.

**Example 2 (narrow passages, and what to do about them).** A 6-DOF arm must insert a part into a fixture with a clearance corresponding to a relative passage width of $w = 0.05$ in configuration space.

*The sampling probability.* A uniform sample lands in the passage with probability $\sim w^d$:

$$p = (0.05)^6 = 1.56\times10^{-8}.$$

*Expected samples to hit it once:*

$$\frac{1}{p} = 6.4\times10^{7} = 64\ \text{million}.$$

At $10^{-6}$ s per collision check that is **64 seconds of pure sampling** to land a *single* configuration in the passage — and connecting through it needs several.

*Compare a mobile robot* ($d = 3$) with the same relative clearance:

$$\frac{1}{(0.05)^3} = 8000\ \text{samples} = 0.008\ \mathrm{s}.$$

**Four orders of magnitude easier**, from three fewer dimensions. The narrow-passage difficulty is exponential in dimension, which is why manipulator assembly planning is hard and mobile-robot navigation is not.

*Four remedies, in rough order of practicality.*

**Bias the sampling.** *Bridge sampling* draws pairs of colliding configurations and keeps the midpoint if it is free — which preferentially generates samples inside narrow passages, exactly where uniform sampling fails. *Obstacle-based sampling* pushes samples toward $\mathcal{C}_{\rm obs}$ boundaries. Both help by one to two orders of magnitude and neither eliminates the problem.

**Reduce the effective dimension.** The insertion is typically a 1-DOF motion along the hole axis. **Plan the approach in 6 dimensions to a pre-insertion pose, then execute the insertion as a straight-line Cartesian move** ([3.5](03-05-cartesian-trajectories-via-points.md)). The narrow passage is removed from the planner's problem entirely.

$$\frac{1}{(0.05)^1} = 20\ \text{samples}$$

if the insertion were planned as a 1-D problem — **three million times easier.**

**Use compliance instead of precision.** [4.3](04-03-force-hybrid-control.md) showed that force control converts a $0.1$ mm clearance problem into a $0.5$ mm one. **A wider passage is exponentially easier to sample:** widening $w$ from 0.05 to 0.25 changes $w^6$ from $1.6\times10^{-8}$ to $2.4\times10^{-4}$ — a factor of **15,000**.

**Plan in the workspace where the structure is.** For an insertion the useful description is "align the axis, then translate along it" — a task specification, not a search. Encoding that directly as a motion primitive skips the search altogether.

*The pattern across all four.* **The narrow-passage problem is solved by not posing it**, and the three ways to avoid posing it — reduce the dimension, widen the passage with compliance, or use task structure — are the same three moves that appeared in [4.3](04-03-force-hybrid-control.md) and [4.5](04-05-localization.md).

**Sampling-based planning is a general-purpose tool that is deliberately blind to structure.** That blindness is what makes it applicable to any robot and any environment, and it is exactly what makes it inefficient wherever structure exists. **The engineering skill is knowing which parts of a problem to hand to a general planner and which to solve with a specialized method** — and the answer is almost always to plan the gross motion generally and the fine motion specifically.

*A closing note on where this leads.* Everything in this lesson assumed a static, known environment and a robot that executes what it is told. Relaxing any of those — moving obstacles, an unknown map, a robot with uncertain dynamics — opens problems that are still open: kinodynamic planning, planning under uncertainty, replanning at sensor rate, and learning-based approaches that trade guarantees for speed. **The course ends here; the subject does not.**

## Watch out

- **You might plan in the workspace instead of configuration space.** A robot's shape makes workspace planning wrong; in $\mathcal{C}$-space the robot is a point.
- **You might try to build $\mathcal{C}_{\rm obs}$ explicitly.** It has no closed form above two or three dimensions. Test configurations instead.
- **You might use a grid above three dimensions.** $k^n$ is a wall, not a slope.
- **You might interpret a planner's failure as proof of infeasibility.** Sampling planners are probabilistically complete and can never report "no solution."
- **You might forget self-collision.** The robot can hit itself, and those configurations are in $\mathcal{C}_{\rm obs}$ too.
- **You might connect nodes with straight lines on a nonholonomic robot.** Use Dubins or Reeds–Shepp primitives.
- **You might expect RRT to find a good path.** Plain RRT's paths are jagged and 20–50% over optimal. Post-process by shortcutting, or use RRT\*.
- **You might rely on potential fields globally.** Local minima will trap them. Use them locally under a global planner.
- **You might forget that $\mathcal{C}$-space is not Euclidean.** Revolute joints wrap ([1.1](01-01-robots-links-configuration-space.md)); a distance metric that ignores that finds paths the long way round.

## One-liner

> Plan in configuration space, where the robot is a point — but never build the obstacle region, because a grid costs $k^n$; instead sample, connect, and search, accepting probabilistic completeness in exchange for tractability, and route around narrow passages by reducing the dimension or widening them with compliance.

## Problems

**P1 (🟢)** A planar 3R arm has joint ranges of $\pm150°$ each. (a) Find the number of grid cells at $10°$ resolution. (b) Repeat at $2°$. (c) At $10\ \mu$s per collision check, find the time to evaluate the finer grid.

**P2 (🟡)** A PRM for a 7-DOF arm uses $N = 2000$ samples, $k = 15$ neighbours, and $m = 25$ interpolation steps per edge, at $20\ \mu$s per collision check. (a) Find the number of node and edge checks. (b) Find the build time. (c) Find the equivalent grid resolution that would cost the same, and comment.

**P3 (🔴)** A 6-DOF arm must plan a motion through a workcell containing a narrow passage of relative width $w$. (a) Find the expected number of uniform samples needed to place one configuration in the passage for $w = 0.2$, $0.1$, $0.05$. (b) At $50\ \mu$s per sample-and-check, find the times. (c) Bridge sampling improves the effective probability by a factor of 100. Recompute. (d) Determine the $w$ below which even bridge sampling becomes impractical (say, over 60 s), and propose an alternative approach with its own quantification.

<details>
<summary>Solutions</summary>

**P1** (a) Each joint spans $300°$. At $10°$ resolution:

$$k = \frac{300}{10} = 30\ \text{values per joint}, \qquad \text{cells} = 30^3 = 27{,}000.$$

(b) At $2°$:

$$k = \frac{300}{2} = 150, \qquad \text{cells} = 150^3 = 3.375\times10^{6}.$$

(c) $$3.375\times10^{6}\times10^{-5}\ \mathrm{s} = 33.75\ \mathrm{s}.$$

**Half a minute** to evaluate a three-dimensional grid at fine resolution — entirely practical, and it gives a **resolution-complete** answer: if a solution exists at that resolution, A* finds it, and if none exists the search says so definitively.

**At three dimensions, grids are the right tool.** The completeness guarantee is worth having, and the cost is affordable.

**P2** (a) $$\text{node checks} = N = 2000.$$

$$\text{edge checks} = \frac{Nk}{2}\times m = \frac{2000(15)}{2}\times25 = 15{,}000\times25 = 375{,}000.$$

(The factor of $\tfrac12$ avoids double-counting each edge.)

$$\text{total} = 2000+375{,}000 = 377{,}000\ \text{checks}.$$

(b) $$377{,}000\times20\times10^{-6}\ \mathrm{s} = 7.54\ \mathrm{s}.$$

**Seven and a half seconds to build**, after which every query is a graph search over 2000 nodes — under a millisecond.

(c) An equivalent-cost grid would allow $377{,}000$ cells in 7 dimensions:

$$k^7 = 3.77\times10^{5} \quad\Longrightarrow\quad k = \left(3.77\times10^{5}\right)^{1/7} = e^{\ln(377000)/7} = e^{12.840/7} = e^{1.834} = 6.26.$$

**About six values per joint** — a resolution of $300°/6 = 50°$.

*Comment.* A $50°$ joint resolution is **useless**. The arm would be represented by six discrete positions per joint, which cannot describe threading between obstacles, cannot represent a smooth path, and would report most feasible problems as infeasible.

**The same computational budget buys a roadmap that solves real problems and a grid that solves nothing.** That comparison is the argument for sampling-based planning in one line, and it explains why the field moved wholesale to these methods in the 1990s.

*And note the asymmetry in what is given up.* The grid at $k = 6$ is resolution-complete — at a resolution so coarse the guarantee is worthless. The PRM is only probabilistically complete — but at a resolution fine enough to matter. **A weak guarantee about a useful answer beats a strong guarantee about a useless one.**

**P3** (a) $$\mathbb{E}[\text{samples}] = \frac{1}{w^6}.$$

| $w$ | $w^6$ | Expected samples |
|---|---|---|
| 0.20 | $6.4\times10^{-5}$ | $1.56\times10^{4}$ |
| 0.10 | $1.0\times10^{-6}$ | $1.00\times10^{6}$ |
| 0.05 | $1.56\times10^{-8}$ | $6.40\times10^{7}$ |

(b) At $50\ \mu$s per sample:

| $w$ | Time |
|---|---|
| 0.20 | $0.78$ s |
| 0.10 | $50$ s |
| 0.05 | $3200$ s $= 53$ minutes |

**Halving the passage width multiplies the time by 64** — the sixth power, and the reason narrow-passage difficulty is described as a wall rather than a slope.

(c) With bridge sampling improving the effective probability by $100\times$:

| $w$ | Expected samples | Time |
|---|---|---|
| 0.20 | 156 | $0.008$ s |
| 0.10 | $10^{4}$ | $0.5$ s |
| 0.05 | $6.4\times10^{5}$ | $32$ s |

**A hundredfold improvement is worth roughly a factor of 2.15 in $w$** (since $100^{1/6} = 2.15$) — so bridge sampling extends the practical range from $w\approx0.097$ down to $w\approx0.045$.

*That is a real and useful gain and it does not change the exponent.* The difficulty still scales as $w^{-6}$; the constant is 100 times better.

(d) *The threshold.* With bridge sampling, 60 s at $50\ \mu$s allows $1.2\times10^{6}$ samples, so

$$\frac{1}{100\,w^6}\leq1.2\times10^{6} \quad\Longrightarrow\quad w^6\geq\frac{1}{1.2\times10^{8}} = 8.33\times10^{-9} \quad\Longrightarrow\quad w\geq0.045.$$

$$\boxed{w\lesssim0.045\ \text{is impractical for uniform-plus-bridge sampling within a minute.}}$$

(Without bridge sampling the same budget gives $w\gtrsim0.097$ — so the technique buys a factor of $100^{1/6} = 2.15$ in $w$, exactly as the scaling predicts.)

*The alternative: decompose the problem.*

**Plan the approach in 6 dimensions to a pre-insertion pose**, chosen a few centimetres clear of the passage where $\mathcal{C}_{\rm free}$ is wide open. That is an ordinary planning problem with no narrow passage:

$$\text{time}\approx\text{a PRM/RRT query} \approx 0.1\text{–}1\ \mathrm{s}.$$

**Then execute the passage as a 1-DOF Cartesian move** along the insertion axis ([3.5](03-05-cartesian-trajectories-via-points.md)), with force control ([4.3](04-03-force-hybrid-control.md)) handling the alignment.

*Quantifying the decomposition.* The insertion, treated as a one-dimensional problem, needs

$$\frac{1}{w^1} = \frac{1}{0.05} = 20\ \text{samples} \quad\text{(or, in practice, no sampling at all — it is a straight line)}.$$

$$\text{total time} \approx 1\ \mathrm{s}\ \text{(approach)}+0\ \text{(insertion is not searched)}.$$

**Against 32 seconds for the monolithic plan** — a factor of 32, and the decomposed version is also *more reliable*, because the insertion is executed with compliance rather than with position accuracy.

*And compliance widens the passage as well.* [4.3](04-03-force-hybrid-control.md) Example 2 converted a $0.1$ mm clearance into a $0.5$ mm tolerance — a factor of 5 in $w$, hence a factor of $5^6 = 15{,}625$ in sampling difficulty for the portion that *is* planned.

*The trade-offs of decomposing.*

| | Monolithic plan | Decomposed |
|---|---|---|
| Generality | any problem | needs task structure |
| Guarantee | probabilistically complete | none — the decomposition might be wrong |
| Speed | 32 s | ~1 s |
| Robustness | brittle at the passage | compliant, tolerant |
| Engineering effort | none | must identify the structure |

**The decomposition is not automatic.** Someone must recognize that the task is "approach, then insert along an axis," and encode that. A general planner given no such hint has to discover it by sampling, and it will do so slowly or not at all.

*The closing thought for the course.* This is the same pattern that has recurred in every module. [2.1](02-01-inverse-kinematics-analytic.md) found closed-form inverse kinematics by exploiting the spherical wrist's structure rather than solving a general nonlinear system. [3.3](03-03-newton-euler-recursive-dynamics.md) got $O(n)$ dynamics by exploiting the chain topology rather than forming matrices. [4.3](04-03-force-hybrid-control.md) made assembly tractable by exploiting the constraint geometry rather than by improving accuracy.

**General methods make any problem solvable; structure makes a particular problem easy.** A working robot uses both — a general planner for the parts nobody has characterized, and specialized machinery for the parts somebody has. Recognizing which is which is what the whole of this course has been practice for.

</details>

## Flashback

**From Lesson 1.1 (Robots, links, and configuration space):** A planar 2R arm has $\mathcal{C} = T^2$, a torus. (a) Explain why the torus topology matters for planning. (b) Give a concrete case where treating $\mathcal{C}$ as a square gives the wrong answer.

<details>
<summary>Solution</summary>

(a) *Why the topology matters.* A revolute joint's variable lives on a circle: $\theta = 359°$ and $\theta = 1°$ are **two degrees apart**, not 358.

A planner that models $\mathcal{C}$ as the square $[0°,360°]^2$ with Euclidean distance gets three things wrong:

**The distance metric.** It computes $|359-1| = 358°$ instead of $2°$, so it will not consider the short route.

**Connectivity.** The square's edges are not connected to each other, but on the torus they are — the configuration space has no boundary at all. A planner using the square sees walls where none exist.

**Neighbour queries.** A PRM connecting each node to its $k$ nearest neighbours will systematically miss neighbours across the wrap, fragmenting the roadmap along the seams.

(b) *A concrete failure.* Suppose the arm must move from $\mathbf{q}_A = (350°,\ 90°)$ to $\mathbf{q}_B = (10°,\ 90°)$ — a $20°$ rotation of the base joint through zero — and an obstacle blocks all configurations with $\theta_1\in[100°,\ 260°]$.

**On the torus:** the direct path $350°\to360°\equiv0°\to10°$ is $20°$ long and avoids the obstacle entirely. Trivially solvable.

**On the square:** the planner must route from $\theta_1 = 350°$ down to $\theta_1 = 10°$ *through* the interval $[10°,\ 350°]$, which contains the obstacle at $[100°,\ 260°]$. **There is no path**, and the planner correctly reports failure — for a problem the robot can solve in a fifth of a second.

*How this is handled in practice.* Three standard measures, all necessary:

**A wrapping distance metric.** $d(\theta_1,\theta_2) = \min\left(|\theta_1-\theta_2|,\ 360°-|\theta_1-\theta_2|\right)$ for each revolute joint, combined into the configuration-space metric.

**Interpolation that takes the short way.** When checking an edge between two configurations, step along the shorter arc for each revolute coordinate — the same sign-check issue as slerp's in [1.4](01-04-quaternions.md).

**Sampling uniformly on the torus**, which for a uniform distribution on each angle is automatic — but any sampling scheme biased toward the "interior" of the square is wrong.

*The general lesson, and it closes the course where it opened.* [1.1](01-01-robots-links-configuration-space.md) introduced configuration space as a bookkeeping device for counting degrees of freedom. It is more than that: **its topology is a physical fact about the robot**, and every algorithm that operates on it — planning, interpolation, distance, sampling, and the wrap-around in a joint-space trajectory ([3.4](03-04-joint-space-trajectories.md)) — must respect that topology or produce wrong answers on problems the robot finds easy.

The same point appeared for orientation in [1.3](01-03-euler-fixed-angles-axis-angle.md) and [1.4](01-04-quaternions.md): $SO(3)$ is $\mathbb{RP}^3$, not $\mathbb{R}^3$, and every failure of Euler angles traces back to pretending otherwise. **Getting the space right is prior to getting the algorithm right**, and it is a lesson that costs a great deal to learn the other way round.

</details>

## Connections

- **Backward:** configuration space and its topology are [1.1](01-01-robots-links-configuration-space.md)'s; the nonholonomic constraints that force motion primitives are [4.4](04-04-wheeled-mobile-robots.md)'s; the trajectories that execute a plan are [3.4](03-04-joint-space-trajectories.md)'s and [3.5](03-05-cartesian-trajectories-via-points.md)'s.
- **Forward:** beyond this course lie kinodynamic planning, planning under uncertainty, SLAM-integrated navigation, multi-robot coordination, and learning-based methods — all of which take this lesson's configuration-space formulation as their starting point.
- **Sideways:** this is graph search from [`algorithms`](../../algorithms/syllabus.md) applied to a sampled continuous space; the PSPACE-hardness is a result from [`computational-complexity`](../../computational-complexity/syllabus.md); the curse of dimensionality is the same obstacle that defeats grid methods in [`numerical-analysis`](../../numerical-analysis/syllabus.md) and motivates Monte Carlo everywhere; and the torus and $\mathbb{RP}^3$ topologies are [`algebraic-topology`](../../algebraic-topology/syllabus.md)'s.

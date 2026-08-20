# Engineering Dynamics · Lesson 3.1: Rotation & the instantaneous center

> ⏱ ~15 min · Module 3: Rigid-Body Kinematics & Kinetics (2D) · Builds on: [2.3 Linear impulse & momentum](02-03-linear-impulse-momentum.md), the cross product from [`statics` 1.3](../../statics/lessons/01-03-moment-of-a-force.md) · Unlocks: [3.2 Relative acceleration & rolling](03-02-relative-acceleration-rolling.md)

## Why this matters

A piston fires and shoves a connecting rod, which spins a crankshaft; a ladder slips down a wall; a robot's forearm swings while its shoulder rotates. In every case a *rigid body* is moving, and you want the velocity of some particular point on it — the piston pin, the ladder's midpoint, the gripper. The trick that makes all of this easy is a single hidden point: at any instant, a body in plane motion is turning about **one** point that is momentarily standing still. Find it, and every velocity on the body is just $\omega$ times a distance.

## The idea

Chop a rigid body's motion into two pieces: **translation** (the whole body slides, every point moving alike) plus **rotation** (the body spins about some reference point). That's the whole of plane motion — a slide and a twist.

Here's the payoff. Because the rotation part sends points around circles, there's always some point of the (possibly extended) body whose translation and rotation velocities exactly cancel — it has **zero velocity** at this instant. Call it the **instantaneous center**, the IC. For that one frozen moment the entire body behaves as if it were pinned there and simply rotating: every point sweeps a circle centered on the IC, so its speed is $\omega$ times its distance from the IC, and its velocity points *perpendicular* to the line back to the IC.

How do you find this magic point? A point moving in a circle about the IC must have its velocity perpendicular to the spoke connecting it to the center. Flip that around: the IC lies somewhere along the line drawn *perpendicular to a point's velocity*. Do this for **two** points whose velocity directions you know, and the IC is where the two perpendiculars cross. A sliding ladder is the clean case — the top can only move down the wall, the bottom only along the floor, so the two perpendiculars (horizontal through the top, vertical through the bottom) pin the IC at once.

## The formal version

**Rigid-body plane motion = translation + rotation.** Pick any base point $A$ on the body. Any other point $B$ satisfies

$$\vec{v}_B = \vec{v}_A + \boldsymbol\omega \times \vec{r}_{B/A},$$

where $\vec{v}_A,\vec{v}_B$ are the two points' velocities, $\boldsymbol\omega = \omega\,\hat{k}$ is the body's angular velocity (rad/s, out of the plane — one number for the whole rigid body), and $\vec{r}_{B/A} = \vec{r}_B - \vec{r}_A$ is the position of $B$ relative to $A$. *In words: B's velocity is A's velocity (the translation) plus a spin term that swings B around A.*

The spin term $\boldsymbol\omega \times \vec{r}_{B/A}$ is the key object: it is **perpendicular** to $\vec{r}_{B/A}$ (a cross product is perpendicular to both factors), and its magnitude is

$$|\boldsymbol\omega \times \vec{r}_{B/A}| = \omega\, r_{B/A}.$$

*In words: relative to A, point B moves on a circle of radius $r_{B/A}$ at speed $\omega r_{B/A}$, tangent to that circle.* In 2D the cross product is painless: with $\vec r = (x,y)$,

$$\omega\hat k \times (x,\,y,\,0) = \omega\,(-y,\;x,\;0).$$

(Rotate the vector 90° counterclockwise, then scale by $\omega$. A positive $\omega$ is counterclockwise.)

**Fixed-axis rotation** is the special case where the base point doesn't move. If the body is pinned at $O$ so $\vec v_O = 0$, then any point $P$ has

$$\vec v_P = \boldsymbol\omega \times \vec r_{P/O}, \qquad v_P = \omega\, r_{P/O},$$

perpendicular to the radius. *In words: pinned bodies send every point around a circle at speed $\omega \times$ radius* — this is the $v = \omega r$ you already know for a spinning wheel.

**The instantaneous center of zero velocity (IC).** For general plane motion there is (at each instant) a point — call it $IC$, on the body or its rigid extension — with $\vec v_{IC} = 0$. Using it as the base point collapses the relative-velocity equation to the fixed-axis form: for **every** point $P$,

$$\boxed{\,v_P = \omega\, r_{P/IC}\,}$$

directed perpendicular to $\vec r_{P/IC}$. *In words: at this instant the whole body rotates about the IC, so any point's speed is just $\omega$ times its distance from the IC.* To locate it: draw a line through each of two points **perpendicular to that point's velocity**; the IC is their intersection. Then $\omega = v_A / r_{A/IC}$ from any point whose speed you know, and every other velocity follows.

Two cautions baked into the method: if the two velocities are parallel, the perpendiculars are parallel and meet "at infinity" — that means $\omega = 0$ (pure translation, no IC). And the IC is *instantaneous*: it generally moves from one instant to the next, so it gives velocities only, never accelerations (that's [3.2](03-02-relative-acceleration-rolling.md)).

## Picture

![A ladder sliding down a wall: the top point A moves straight down, the bottom point B moves along the floor. Grey construction lines perpendicular to each velocity — horizontal through A, vertical through B — cross at the instantaneous center IC, about which the ladder momentarily rotates at angular velocity omega. The midpoint G's velocity is perpendicular to its line to the IC.](assets/03-01-fig1.svg)

## Worked examples

**Example 1 — the sliding ladder (locate the IC, find $\omega$ and a third velocity).** A uniform ladder of length $L = 5\,\text{m}$ leans against a wall at $53^\circ$ from the floor (so $\sin\theta = 0.8$, $\cos\theta = 0.6$). Its base $B$ slides away from the wall at $v_B = 4\,\text{m/s}$. Find the angular velocity $\omega$, the speed of the top $A$, and the speed of the midpoint $G$.

*Motion sketch (the figure above).* Top $A$ is pinned to the wall — it can only slide **vertically**, so its velocity is vertical and the perpendicular through it is **horizontal**. Base $B$ slides **horizontally**, so the perpendicular through it is **vertical**. They meet at the IC, the corner of the rectangle: horizontally across from $A$, vertically above $B$.

*Distances to the IC.* Put the wall–floor corner at the origin; the ladder runs from $A = (0,\,L\sin\theta)$ on the wall to $B = (L\cos\theta,\,0)$ on the floor. The IC sits at $(L\cos\theta,\;L\sin\theta)$, so

$$r_{B/IC} = L\sin\theta = 5(0.8) = 4\,\text{m}, \qquad r_{A/IC} = L\cos\theta = 5(0.6) = 3\,\text{m}.$$

*Angular velocity* from the point we know, $B$:

$$\omega = \frac{v_B}{r_{B/IC}} = \frac{4}{4} = 1\,\text{rad/s}.$$

*The other speeds* are just $\omega$ times each distance:

$$v_A = \omega\, r_{A/IC} = 1 \times 3 = 3\,\text{m/s (down the wall)}.$$

For the midpoint $G$: since $A$, $B$, and the IC form a right angle at the IC, the hypotenuse $AB$ has its midpoint equidistant from all three corners, so $r_{G/IC} = L/2 = 2.5\,\text{m}$, giving

$$v_G = \omega\, r_{G/IC} = 1 \times 2.5 = 2.5\,\text{m/s}.$$

*Cross-check with the relative-velocity equation.* Take $B$ as base, $\vec v_B = (4,0)$, $\vec r_{A/B} = A - B = (-3,\,4)$. Then $\vec v_A = \vec v_B + \omega\hat k \times \vec r_{A/B} = (4,0) + 1\cdot(-4,\,-3) = (0,\,-3)$: purely vertical, magnitude $3\,\text{m/s}$, pointing down. Matches — and correctly comes out vertical, as the wall demands. ✓

**Example 2 — crank–slider (solve the relative-velocity equation for the unknowns).** An engine crank $OA$ of length $0.5\,\text{m}$ spins about the fixed bearing $O$ at $\omega_{OA} = 10\,\text{rad/s}$ counterclockwise. Its end $A$ drives a connecting rod $AB$ whose other end $B$ is a piston sliding along the horizontal line through $O$. At the instant shown the crank pin is at $A = (0.3,\,0.4)\,\text{m}$ and the piston at $B = (0.9,\,0)\,\text{m}$. Find the rod's angular velocity $\omega_{AB}$ and the piston's velocity $v_B$.

*Set up the knowns.* The crank is in fixed-axis rotation about $O$, so

$$\vec v_A = \boldsymbol\omega_{OA} \times \vec r_{A/O} = 10\,\hat k \times (0.3,\,0.4,\,0) = 10\,(-0.4,\,0.3) = (-4,\,3)\,\text{m/s}$$

(magnitude $\omega_{OA}\,r_{OA} = 10 \times 0.5 = 5\,\text{m/s}$, up and to the left ✓). The piston can only move horizontally, so $\vec v_B = (v_B,\,0)$ with $v_B$ unknown, and the rod's spin is $\boldsymbol\omega_{AB} = \omega_{AB}\hat k$ with $\omega_{AB}$ unknown — **two unknowns**.

*Write the relative-velocity equation* from $A$ to $B$, with $\vec r_{B/A} = B - A = (0.6,\,-0.4)$:

$$\vec v_B = \vec v_A + \boldsymbol\omega_{AB}\times\vec r_{B/A} = (-4,\,3) + \omega_{AB}\,\hat k\times(0.6,\,-0.4,\,0) = (-4,\,3) + \omega_{AB}\,(0.4,\,0.6).$$

*Match components* — two scalar equations, two unknowns:

$$\underbrace{v_B = -4 + 0.4\,\omega_{AB}}_{x}, \qquad \underbrace{0 = 3 + 0.6\,\omega_{AB}}_{y}.$$

The $y$-equation has only one unknown — the payoff of choosing the constrained point $B$. Solve it first:

$$\omega_{AB} = -\frac{3}{0.6} = -5\,\text{rad/s} \quad\Rightarrow\quad 5\,\text{rad/s clockwise}.$$

Then the $x$-equation gives the piston speed:

$$v_B = -4 + 0.4(-5) = -6\,\text{m/s},$$

i.e. $6\,\text{m/s}$ directed toward $O$ (the $-x$ direction). *You could get $v_B$ alone even faster with the IC of the rod, but the relative-velocity equation delivers both unknowns in one stroke — and it's the only method that survives into acceleration next lesson.*

## Watch out

- **You might think the IC is a fixed pivot you can reuse.** It isn't — it's *instantaneous*. The IC drifts to a new location every instant, so its acceleration is **not** zero and $v_P = \omega r_{P/IC}$ gives velocities only. Never differentiate it to get acceleration; use the relative-acceleration equation in [3.2](03-02-relative-acceleration-rolling.md).
- **You might forget that $\boldsymbol\omega \times \vec r$ is perpendicular to $\vec r$, not parallel to the velocity you're copying.** The relative term always swings *across* the line $\vec r_{B/A}$, magnitude $\omega r$. If your spin term points along $\vec r_{B/A}$, you've taken a dot product by mistake.
- **You might place the IC on the wrong side.** The perpendicular through a point is a whole line; the IC is a specific point on it. Pin it down with the *second* perpendicular, and sanity-check the sense of $\omega$ (does it make each known velocity point the right way?).

## One-liner

> At any instant a rigid body spins about its instantaneous center — the crossing of the perpendiculars to two velocities — so every point's speed is simply $\omega$ times its distance from that point.

## Problems

**P1 (🟢)** A rigid bar is pinned at a fixed point $O$ and rotates at $\omega = 4\,\text{rad/s}$. Point $A$ is $0.5\,\text{m}$ from $O$ and point $M$ is the midpoint of $OA$. Find the speeds of $A$ and $M$, and state the direction of each velocity relative to the bar.

**P2 (🟡)** A $5\,\text{m}$ ladder leans at $53^\circ$ from the floor ($\sin\theta = 0.8$, $\cos\theta = 0.6$); its base slides out at $v_B = 4\,\text{m/s}$ *(reuse Example 1's geometry, but suppose you were told nothing about the top's motion)*. Using only the two velocity **directions** — top constrained to the wall, base to the floor — locate the IC, find $\omega$, and find the velocity of the point one-quarter of the way up from the base.

**P3 (🔴 — robotics bridge)** A two-link planar arm has shoulder $O$ fixed. Link $OA$ (length $0.4\,\text{m}$) rotates at $\omega_1 = 3\,\text{rad/s}$ counterclockwise; at the elbow $A$, link $AB$ (length $0.3\,\text{m}$) rotates at absolute angular velocity $\omega_2 = 2\,\text{rad/s}$ counterclockwise. At this instant both links point in the $+x$ direction, so $A = (0.4,\,0)$ and the gripper $B = (0.7,\,0)\,\text{m}$. Find the gripper's velocity $\vec v_B$ by applying the relative-velocity equation twice.

<details>
<summary>Solutions</summary>

**P1** Fixed-axis rotation about $O$, so every point's speed is $\omega$ times its distance from $O$:

$$v_A = \omega\, r_{A/O} = 4 \times 0.5 = 2\,\text{m/s}, \qquad v_M = \omega\, r_{M/O} = 4 \times 0.25 = 1\,\text{m/s}.$$

Each velocity is **perpendicular to the bar** (tangent to the circle each point sweeps about $O$), and both point the same rotational way. The midpoint moves at exactly half the tip's speed — velocity grows linearly with radius. *Check:* units $\text{rad/s}\cdot\text{m} = \text{m/s}$ ✓.

**P2** The top is pinned to the wall (velocity vertical → perpendicular is horizontal); the base is on the floor (velocity horizontal → perpendicular is vertical). The IC is where those meet: horizontally level with the top, vertically above the base. With the corner at the origin, top $A = (0,\,L\sin\theta)$, base $B = (L\cos\theta,\,0)$, so the IC is at $(L\cos\theta,\,L\sin\theta)$ and

$$r_{B/IC} = L\sin\theta = 5(0.8) = 4\,\text{m} \;\Rightarrow\; \omega = \frac{v_B}{r_{B/IC}} = \frac{4}{4} = 1\,\text{rad/s}.$$

The quarter point $Q$ (one-quarter up from the base) sits at $Q = \tfrac14 A + \tfrac34 B = (0.75\,L\cos\theta,\;0.25\,L\sin\theta) = (2.25,\,1.0)\,\text{m}$. The IC is at $(L\cos\theta,\,L\sin\theta) = (3.0,\,4.0)\,\text{m}$, so

$$\vec r_{Q/IC} = Q - IC = (-0.75,\,-3.0), \qquad r_{Q/IC} = \sqrt{0.75^2 + 3.0^2} = \sqrt{9.5625} = 3.092\,\text{m},$$

$$v_Q = \omega\, r_{Q/IC} = 1 \times 3.092 = 3.09\,\text{m/s},$$

directed perpendicular to $\vec r_{Q/IC}$ (down and to the right, since the ladder is closing). *Check:* $Q$ lies between the base ($v = 4$) and midpoint ($v = 2.5$), and $3.09$ falls in that range ✓.

**P3** Apply $\vec v = \vec v_{\text{base}} + \boldsymbol\omega \times \vec r$ link by link.

Link $OA$ is pinned at $O$, so
$$\vec v_A = \boldsymbol\omega_1 \times \vec r_{A/O} = 3\,\hat k \times (0.4,\,0,\,0) = 3\,(0,\,0.4) = (0,\,1.2)\,\text{m/s}.$$

Then $B$ relative to $A$, with $\vec r_{B/A} = (0.3,\,0)$:
$$\vec v_B = \vec v_A + \boldsymbol\omega_2 \times \vec r_{B/A} = (0,\,1.2) + 2\,\hat k \times (0.3,\,0,\,0) = (0,\,1.2) + (0,\,0.6) = (0,\,1.8)\,\text{m/s}.$$

So the gripper moves straight up at $1.8\,\text{m/s}$. *Check:* both links horizontal and both spinning CCW, so both contribute upward tip velocity ($\omega_1 r_{OA} = 1.2$ and $\omega_2 r_{AB} = 0.6$), summing to $1.8\,\text{m/s}$ ✓. This chained relative-velocity sum is exactly the *forward velocity kinematics* of a robot arm — stack it into a matrix and you have the arm's Jacobian.

</details>

## Flashback

**From Lesson 2.4 (Impact):** A $2\,\text{kg}$ ball $A$ moving at $6\,\text{m/s}$ strikes a stationary $3\,\text{kg}$ ball $B$ head-on. The coefficient of restitution is $e = 0.5$. Find each ball's velocity just after impact, and confirm they separate.

<details>
<summary>Solution</summary>

Two equations. **Conservation of linear momentum** along the line of impact:
$$m_A v_A + m_B v_B = m_A v_A' + m_B v_B' \;\Rightarrow\; 2(6) + 0 = 2v_A' + 3v_B' \;\Rightarrow\; 2v_A' + 3v_B' = 12.$$

**Coefficient of restitution** (separation speed over approach speed):
$$e = \frac{v_B' - v_A'}{v_A - v_B} \;\Rightarrow\; 0.5 = \frac{v_B' - v_A'}{6 - 0} \;\Rightarrow\; v_B' - v_A' = 3.$$

Substitute $v_B' = v_A' + 3$: $\;2v_A' + 3(v_A' + 3) = 12 \Rightarrow 5v_A' = 3 \Rightarrow v_A' = 0.6\,\text{m/s}$, so $v_B' = 3.6\,\text{m/s}$.

*Check:* momentum after $= 2(0.6) + 3(3.6) = 1.2 + 10.8 = 12$ ✓, matching before. Since $v_B' = 3.6 > v_A' = 0.6$, $B$ pulls ahead of $A$ — they separate ✓. Kinetic energy drops from $36\,\text{J}$ to $19.8\,\text{J}$ (about $45\%$ lost), as an inelastic ($e < 1$) impact demands.

</details>

## Connections

- **Backward:** the relative-velocity equation is the rigid-body upgrade of particle relative motion — a base velocity plus an offset — with the offset now supplied by the spin $\boldsymbol\omega \times \vec r$, a pure use of the cross product's "perpendicular, magnitude $\omega r$" character.
- **Forward:** [3.2 Relative acceleration & rolling](03-02-relative-acceleration-rolling.md) differentiates $\vec v_B = \vec v_A + \boldsymbol\omega\times\vec r_{B/A}$ to get $\vec a_B = \vec a_A + \boldsymbol\alpha\times\vec r + \boldsymbol\omega\times(\boldsymbol\omega\times\vec r)$, and shows a rolling wheel's contact point is its IC — feeding the rigid-body kinetics of [3.4](03-04-rigid-body-kinetics-2d.md).
- **Sideways (robotics):** stacking the relative-velocity equation down a chain of links (Problem 3) is *forward velocity kinematics*; collecting the joint rates into a matrix gives the manipulator **Jacobian** that robotics uses to steer an end-effector. The same $\boldsymbol\omega\times\vec r$ bookkeeping also underlies rotating-frame terms (Coriolis) in the Lagrangian sequel, [analytical-mechanics](../../analytical-mechanics/syllabus.md).

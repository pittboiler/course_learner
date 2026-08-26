# Robotics & Kinematics · Lesson 1.6: Denavit–Hartenberg and forward kinematics

> ⏱ ~15 min · Module 1: Spatial descriptions and forward kinematics · Builds on: [1.5 Homogeneous transforms](01-05-homogeneous-transforms.md), [1.1 Robots, links, and configuration space](01-01-robots-links-configuration-space.md) · Unlocks: [2.1 Inverse kinematics: analytic](02-01-inverse-kinematics-analytic.md), [2.3 The manipulator Jacobian](02-03-manipulator-jacobian.md)

## Why this matters

You can describe any link's pose with a $4\times4$ transform, and you could invent a fresh set of parameters for every robot. Nobody does, because then no two people's models of the same arm would agree and no software could read anyone else's.

The **Denavit–Hartenberg convention** is the standard. It assigns frames to a serial chain by a fixed set of rules, and describes each link with exactly **four** parameters instead of six — a genuine reduction, achieved by choosing the frames cleverly rather than arbitrarily.

The payoff is that a robot becomes a table of four columns, and its forward kinematics is a product of matrices generated from it. Every kinematics library, every URDF converter, and every textbook arm is specified this way, and it is the input to everything in Modules 2 and 3.

## The idea

Six numbers describe a general transform. But between two consecutive joint axes there is a **natural** geometry that uses only four, and the saving comes from a classical fact: any two lines in space have a **unique common normal** (unless they are parallel, where any common perpendicular will do).

So: point each link frame's $\hat z$ along its joint axis, point $\hat x$ along the common normal to the next axis, and $\hat y$ follows from the right-hand rule. That choice removes two degrees of freedom from the description — the frames' origins and $\hat x$ directions are no longer free — and leaves four:

| Parameter | Meaning | Measured |
|---|---|---|
| $a_i$ | **link length** — distance between consecutive $z$ axes | along $\hat x_i$ |
| $\alpha_i$ | **link twist** — angle between consecutive $z$ axes | about $\hat x_i$ |
| $d_i$ | **link offset** — distance between consecutive $x$ axes | along $\hat z_i$ |
| $\theta_i$ | **joint angle** — angle between consecutive $x$ axes | about $\hat z_i$ |

The first two ($a_i$, $\alpha_i$) describe the **link** and are fixed by manufacture. The second two ($d_i$, $\theta_i$) describe the **joint** connecting it to the next link — and exactly one of them is the variable: $\theta_i$ for a revolute joint, $d_i$ for a prismatic one.

*In words: two constants for the geometry of a rigid link, one constant and one variable for the joint at its end.*

**Forward kinematics** is then the product

$$^0_nT = {}^0_1T\,{}^1_2T\cdots{}^{n-1}_nT,$$

which is [1.5](01-05-homogeneous-transforms.md)'s composition rule with each factor generated from one row of the table. It is completely mechanical, which is the point: once the table exists, the kinematics is a loop.

**A warning worth taking seriously.** There are two DH conventions — *standard* (Denavit–Hartenberg 1955, used by Craig with modification, and by most textbooks) and *modified* (Craig's, widely used in industry). They differ in where the frame is placed on the link, and they produce **different tables for the same robot**. Mixing a standard table with a modified transform silently gives wrong kinematics. This lesson uses **standard DH** throughout.

## The formal version

**Frame assignment rules (standard DH).**

1. $\hat z_i$ lies along **joint axis $i+1$**. (Note the off-by-one: frame $i$'s $z$ points along the *next* joint's axis.)
2. $\hat x_i$ lies along the **common normal** from $\hat z_{i-1}$ to $\hat z_i$, pointing away from $\hat z_{i-1}$.
3. $\hat y_i$ completes the right-handed set.
4. **Frame 0** is chosen to coincide with frame 1 when the first joint variable is zero — which makes $a_0 = \alpha_0 = 0$.
5. **Frame $n$** has its $\hat x_n$ aligned with $\hat x_{n-1}$ when $\theta_n = 0$; its origin is placed at the tool point.

Special cases: if consecutive $z$ axes **intersect**, put the origin at the intersection and $a_i = 0$. If they are **parallel**, the common normal is not unique — choose it to make as many parameters zero as possible.

**The link transform.**

$$\boxed{\;^{i-1}_iT = \mathrm{Rot}(\hat z,\theta_i)\,\mathrm{Trans}(0,0,d_i)\,\mathrm{Trans}(a_i,0,0)\,\mathrm{Rot}(\hat x,\alpha_i)\;}$$

$$= \begin{bmatrix}
\cos\theta_i & -\sin\theta_i\cos\alpha_i & \sin\theta_i\sin\alpha_i & a_i\cos\theta_i\\
\sin\theta_i & \cos\theta_i\cos\alpha_i & -\cos\theta_i\sin\alpha_i & a_i\sin\theta_i\\
0 & \sin\alpha_i & \cos\alpha_i & d_i\\
0&0&0&1
\end{bmatrix}.$$

*In words: rotate about $z$ by $\theta$, slide along $z$ by $d$, slide along the new $x$ by $a$, rotate about that $x$ by $\alpha$.* All four are **post**-multiplied, so all four are about the *current* frame's axes — which is what makes the order fixed and memorable.

**Worth memorizing about the matrix:** the first column is $(\cos\theta_i,\ \sin\theta_i,\ 0)$ regardless of $a$, $d$ or $\alpha$, and the fourth column is $(a_i\cos\theta_i,\ a_i\sin\theta_i,\ d_i)$. Those two facts let you spot-check any generated matrix in a couple of seconds.

**Forward kinematics.**

$$\boxed{\;^0_nT(\mathbf{q}) = \prod_{i=1}^{n}{}^{i-1}_iT(q_i) = \begin{bmatrix}^0_nR & ^0P_n\\\mathbf{0}^{\top}&1\end{bmatrix}.\;}$$

The tool's position is the fourth column; its orientation is the rotation block, convertible to any of [1.3](01-03-euler-fixed-angles-axis-angle.md)'s or [1.4](01-04-quaternions.md)'s forms.

**Adding a tool.** A gripper or sensor bolted to the last link contributes a *constant* transform:

$$^0_{\rm tool}T = {}^0_nT\,{}^n_{\rm tool}T,$$

and this is exactly the calibration problem solved in [1.5](01-05-homogeneous-transforms.md) Example 2.

**Planar chains are the easy case.** For a planar arm all joint axes are parallel (all $\hat z$ out of the plane), so every $\alpha_i = 0$ and every $d_i = 0$. The table reduces to link lengths and joint angles, and the product collapses to the familiar

$$x = \sum_{i=1}^{n}a_i\cos\left(\sum_{j=1}^{i}\theta_j\right), \qquad y = \sum_{i=1}^{n}a_i\sin\left(\sum_{j=1}^{i}\theta_j\right), \qquad \phi = \sum_{i=1}^{n}\theta_i.$$

**Prismatic joints.** $d_i$ is the variable and $\theta_i$ is the constant. Everything else is unchanged, which is the convention's real elegance: the same matrix serves both joint types.

**Complexity.** Forward kinematics is $O(n)$ matrix multiplications, always solvable, always unique. Inverse kinematics is none of those things ([2.1](02-01-inverse-kinematics-analytic.md)), and the asymmetry is the central fact of manipulator kinematics.

## Picture

![A two-panel figure. Left: two consecutive joint axes drawn as skew lines in space, with their unique common normal drawn between them, and the four DH parameters labelled on the drawing — the link length a measured along the common normal, the twist alpha as the angle between the two axes seen along the normal, the offset d measured along the first axis between the two common normals, and the joint angle theta as the rotation about the first axis between the two normals. Right: a planar three-revolute arm drawn with its three links and three joint angles, above a four-column DH table whose rows read a equals L, alpha equals zero, d equals zero, theta equals the joint variable, and beside it the product of three link transforms collapsing to the summed-angle formulas for x, y and the tool orientation.](assets/01-06-fig1.svg)

Left: where the four parameters live. Two of them ($a$, $\alpha$) belong to the rigid link between the axes; two ($d$, $\theta$) belong to the joint.

Right: the planar case, where $\alpha = d = 0$ and the whole product collapses to sums of angles — which is why planar arms are where every kinematics intuition should be built first.

## Worked examples

**Example 1 (a planar 3R arm, from table to pose).** Link lengths $L_1 = L_2 = L_3 = 1$ m, all joints revolute, all axes parallel and out of the plane. Find the tool pose at $\theta_1 = \theta_2 = \theta_3 = 30°$.

*The DH table.* All axes parallel means all $\alpha_i = 0$; all frames in one plane means all $d_i = 0$; the common normal between consecutive axes is the link itself, so $a_i = L_i$:

| $i$ | $a_i$ | $\alpha_i$ | $d_i$ | $\theta_i$ |
|---|---|---|---|---|
| 1 | 1 | 0 | 0 | $\theta_1$ |
| 2 | 1 | 0 | 0 | $\theta_2$ |
| 3 | 1 | 0 | 0 | $\theta_3$ |

*The link transforms.* With $\alpha = 0$ the general matrix simplifies enormously:

$$^{i-1}_iT = \begin{bmatrix}\cos\theta_i&-\sin\theta_i&0&\cos\theta_i\\\sin\theta_i&\cos\theta_i&0&\sin\theta_i\\0&0&1&0\\0&0&0&1\end{bmatrix}\ \ (a_i = 1).$$

At $\theta_i = 30°$ each factor is

$$\begin{bmatrix}0.8660&-0.5000&0&0.8660\\0.5000&0.8660&0&0.5000\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

*The product.*

$$^0_3T = \begin{bmatrix}0&-1&0&1.3660\\1&0&0&2.3660\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

*Reading it.*

$$\text{position} = (1.3660,\ 2.3660,\ 0)\ \mathrm{m}, \qquad \text{orientation} = \arctan\frac{r_{21}}{r_{11}} = \arctan\frac{1}{0} = 90°.$$

*Confirming with the closed form.*

$$x = \cos30°+\cos60°+\cos90° = 0.8660+0.5000+0 = 1.3660\ \checkmark$$
$$y = \sin30°+\sin60°+\sin90° = 0.5000+0.8660+1.0000 = 2.3660\ \checkmark$$
$$\phi = 30°+30°+30° = 90°\ \checkmark$$

**The tool points straight up**, and the rotation block $\begin{bmatrix}0&-1\\1&0\end{bmatrix}$ says so directly: the tool's $\hat x$ (first column) points along the world $\hat y$.

*Two checks worth building the habit of.* The tool's distance from the base is $\sqrt{1.3660^2+2.3660^2} = \sqrt{1.866+5.598} = \sqrt{7.464} = 2.732$ m, comfortably inside the reachable maximum of $L_1+L_2+L_3 = 3$ m ✓. And the rotation block has orthonormal columns with $\det = 1$ ✓ — if a long chain of products has drifted, this is where you find out.

*If joint 2 were prismatic instead.* Then $d_2$ becomes the variable and $\theta_2$ a constant. But a prismatic joint's motion is **along its own $\hat z$**, which in a planar arm points out of the plane — so the arm would no longer be planar at all. To keep it planar the second joint's axis would have to be reassigned to lie *in* the plane, changing $\alpha_1$ from $0$ to $90°$ and restructuring the whole table. **Changing a joint type is not a local edit**; it changes the frame assignment, which is a good illustration of why the DH table is the model rather than a summary of it.

**Example 2 (a spatial arm, and where the twists come from).** A SCARA-type arm: two revolute joints with parallel vertical axes, then a prismatic vertical joint, then a revolute wrist. Link lengths $a_1 = 0.4$ m and $a_2 = 0.3$ m.

*The table.*

| $i$ | $a_i$ | $\alpha_i$ | $d_i$ | $\theta_i$ |
|---|---|---|---|---|
| 1 | 0.4 | $0$ | 0 | $\theta_1$ |
| 2 | 0.3 | $180°$ | 0 | $\theta_2$ |
| 3 | 0 | 0 | $d_3$ | 0 |
| 4 | 0 | 0 | 0 | $\theta_4$ |

*Where the $\alpha_2 = 180°$ comes from, since it is the only non-obvious entry.* Joints 1 and 2 have parallel vertical axes, so $\alpha_1 = 0$. Joint 3 is prismatic and vertical, but the SCARA's tool moves **downward** — so frame 3's $\hat z$ must point down while frames 1 and 2 have $\hat z$ up. The twist of $180°$ about $\hat x_2$ is what flips it.

**This is characteristic of DH tables: the twists encode all the "which way is the next axis pointing" information**, and a table with an unexpected $\alpha$ is usually telling you about a deliberate reversal, not an error.

*Evaluating at $\theta_1 = 30°$, $\theta_2 = 45°$, $d_3 = 0.2$ m, $\theta_4 = 0$:*

$$^0_4T = \begin{bmatrix}0.2588&0.9659&0&0.4241\\0.9659&-0.2588&0&0.4898\\0&0&-1&-0.2000\\0&0&0&1\end{bmatrix}.$$

*Reading it.*

**Position** $(0.4241,\ 0.4898,\ -0.2000)$ m. The first two components are the planar reach; the $-0.2$ is the prismatic extension **downward**, exactly as the $\alpha_2 = 180°$ arranged.

*Confirming the planar part by the closed form:*

$$x = a_1\cos\theta_1+a_2\cos(\theta_1+\theta_2) = 0.4\cos30°+0.3\cos75° = 0.3464+0.0776 = 0.4241\ \checkmark$$
$$y = a_1\sin\theta_1+a_2\sin(\theta_1+\theta_2) = 0.4\sin30°+0.3\sin75° = 0.2000+0.2898 = 0.4898\ \checkmark$$

**Orientation.** The third column is $(0,0,-1)$: the tool's $\hat z$ points **straight down**, at every configuration. That is not an accident of these particular joint values — it is structural, because all four axes are vertical.

*What that structure means practically.* A SCARA can place a part anywhere in a cylindrical volume at any yaw angle, but the tool always points down. It has 4 DOF where a full spatial pose needs 6, so **two orientation degrees of freedom are permanently unavailable** — it cannot tilt the tool. For inserting components into a circuit board, that is exactly the right trade: the missing two axes are the two you never need, and not carrying them is why a SCARA is several times faster and stiffer than a 6R arm doing the same job.

*And the payoff for inverse kinematics.* Because the position and orientation decouple so cleanly — $\theta_1,\theta_2$ set the planar position, $d_3$ sets the height, $\theta_4$ sets the yaw — the SCARA's inverse kinematics is a two-link planar problem plus two trivial ones. Compare a 6R arm, where all six joints affect both position and orientation and the solution needs the machinery of [2.1](02-01-inverse-kinematics-analytic.md). **The DH table shows the decoupling at a glance**, in the pattern of zeros, before any algebra is done.

## Watch out

- **You might mix DH conventions.** Standard and modified DH place the frame at opposite ends of the link and produce different tables. Always state which you are using, and never combine a table from one source with a transform from another.
- **You might misread the off-by-one.** In standard DH, $\hat z_i$ is along joint axis $i+1$. Frame $i-1$'s parameters describe the link between joints $i-1$ and $i$.
- **You might make $\theta$ variable on a prismatic joint.** For prismatic joints $d$ is the variable and $\theta$ is a constant.
- **You might forget the joint offset.** Many real robots have a nonzero $\theta_i$ when the encoder reads zero. That constant offset must be added to the joint reading, and forgetting it puts the whole model in the wrong place.
- **You might assume DH parameters are unique.** For parallel or intersecting axes there are choices; different valid tables describe the same robot, which is why comparing two tables entry by entry is not a way to check a model.
- **You might multiply the four elementary transforms in the wrong order.** It is $\mathrm{Rot}(z,\theta)\,\mathrm{Trans}(z,d)\,\mathrm{Trans}(x,a)\,\mathrm{Rot}(x,\alpha)$, in that order, all post-multiplied.
- **You might work in degrees in code.** Every trigonometric function takes radians.
- **You might trust a long product without checking.** Verify $\det R = 1$ and orthonormal columns at the end of the chain.

## One-liner

> Point each frame's $\hat z$ along its joint axis and its $\hat x$ along the common normal, and any serial link needs only four numbers $(a,\alpha,d,\theta)$ — two for the link, two for the joint, exactly one of them variable — after which forward kinematics is the product of matrices generated from the table.

## Problems

**P1 (🟢)** A planar 2R arm has $L_1 = 0.5$ m and $L_2 = 0.4$ m. (a) Write its DH table. (b) Find the tool position and orientation at $\theta_1 = 45°$, $\theta_2 = 30°$ using the closed-form planar equations. (c) Verify the position is inside the reachable annulus.

**P2 (🟡)** For the same 2R arm: (a) write the two link transforms at those joint angles as explicit $4\times4$ matrices. (b) Multiply them to get $^0_2T$. (c) Confirm the fourth column matches P1's answer and the rotation block is a valid rotation.

**P3 (🔴)** A 3R spatial arm has this DH table:

| $i$ | $a_i$ | $\alpha_i$ | $d_i$ | $\theta_i$ |
|---|---|---|---|---|
| 1 | 0 | $90°$ | 0.3 | $\theta_1$ |
| 2 | 0.5 | 0 | 0 | $\theta_2$ |
| 3 | 0.4 | 0 | 0 | $\theta_3$ |

(a) Describe the arm's geometry from the table alone, before computing anything. (b) Find the tool pose at $\theta_1 = 30°$, $\theta_2 = 45°$, $\theta_3 = -30°$. (c) Verify the result with a geometric argument. (d) Explain what $\alpha_1 = 90°$ accomplishes, what would change if it were $-90°$, and why this is the standard shoulder architecture for industrial arms.

<details>
<summary>Solutions</summary>

**P1** (a) All axes parallel and out of the plane, all frames coplanar:

| $i$ | $a_i$ | $\alpha_i$ | $d_i$ | $\theta_i$ |
|---|---|---|---|---|
| 1 | 0.5 | 0 | 0 | $\theta_1$ |
| 2 | 0.4 | 0 | 0 | $\theta_2$ |

(b) $$x = L_1\cos\theta_1+L_2\cos(\theta_1+\theta_2) = 0.5\cos45°+0.4\cos75°$$
$$= 0.5(0.7071)+0.4(0.2588) = 0.3536+0.1035 = 0.4571\ \mathrm{m},$$

$$y = 0.5\sin45°+0.4\sin75° = 0.5(0.7071)+0.4(0.9659) = 0.3536+0.3864 = 0.7399\ \mathrm{m},$$

$$\phi = 45°+30° = 75°.$$

(c) $$r = \sqrt{0.4571^2+0.7399^2} = \sqrt{0.2089+0.5475} = \sqrt{0.7564} = 0.8697\ \mathrm{m}.$$

Reachable annulus: $|L_1-L_2| = 0.1$ m to $L_1+L_2 = 0.9$ m. Since $0.1<0.8697<0.9$ ✓, the point is reachable — and close to the outer boundary, meaning the arm is nearly straight ($\theta_2 = 30°$ is a modest bend).

**P2** (a) With $\alpha_i = d_i = 0$:

$$^0_1T = \begin{bmatrix}\cos45°&-\sin45°&0&0.5\cos45°\\\sin45°&\cos45°&0&0.5\sin45°\\0&0&1&0\\0&0&0&1\end{bmatrix} = \begin{bmatrix}0.7071&-0.7071&0&0.3536\\0.7071&0.7071&0&0.3536\\0&0&1&0\\0&0&0&1\end{bmatrix},$$

$$^1_2T = \begin{bmatrix}\cos30°&-\sin30°&0&0.4\cos30°\\\sin30°&\cos30°&0&0.4\sin30°\\0&0&1&0\\0&0&0&1\end{bmatrix} = \begin{bmatrix}0.8660&-0.5000&0&0.3464\\0.5000&0.8660&0&0.2000\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

(b) *Rotation block:* $R_z(45°)R_z(30°) = R_z(75°)$:

$$\begin{bmatrix}0.2588&-0.9659\\0.9659&0.2588\end{bmatrix}.$$

*Translation:*

$$^0P_2 = {}^0_1R\begin{bmatrix}0.3464\\0.2000\\0\end{bmatrix}+\begin{bmatrix}0.3536\\0.3536\\0\end{bmatrix}$$
$$= \begin{bmatrix}0.7071(0.3464)-0.7071(0.2000)\\0.7071(0.3464)+0.7071(0.2000)\\0\end{bmatrix}+\begin{bmatrix}0.3536\\0.3536\\0\end{bmatrix}$$
$$= \begin{bmatrix}0.2449-0.1414\\0.2449+0.1414\\0\end{bmatrix}+\begin{bmatrix}0.3536\\0.3536\\0\end{bmatrix} = \begin{bmatrix}0.1035\\0.3863\\0\end{bmatrix}+\begin{bmatrix}0.3536\\0.3536\\0\end{bmatrix} = \begin{bmatrix}0.4571\\0.7399\\0\end{bmatrix}.$$

$$^0_2T = \begin{bmatrix}0.2588&-0.9659&0&0.4571\\0.9659&0.2588&0&0.7399\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

(c) Position $(0.4571, 0.7399, 0)$ ✓ matches P1. Orientation: $\arctan(0.9659/0.2588) = 75°$ ✓.

*Rotation block check:* columns $(0.2588, 0.9659, 0)$ and $(-0.9659, 0.2588, 0)$ each have norm $\sqrt{0.06697+0.93297} = 1.0000$ ✓, dot product $0.2588(-0.9659)+0.9659(0.2588) = 0$ ✓, and $\det = 0.06697+0.93297 = 1.0000$ ✓.

**Note that the second link's displacement had to be rotated by $^0_1R$ before being added** — precisely the composition rule from [1.5](01-05-homogeneous-transforms.md), and the step that the closed-form planar equations bury inside the summed angles.

**P3** (a) *Reading the table before computing.*

**Joint 1** has $\alpha_1 = 90°$, which tilts $\hat z_1$ perpendicular to $\hat z_0$. So joint 1 rotates about one axis and joints 2 and 3 rotate about an axis perpendicular to it — the classic **waist–shoulder** arrangement.

**$d_1 = 0.3$ m** raises the shoulder 0.3 m above the base along the waist axis: a vertical column.

**$a_1 = 0$** means the waist and shoulder axes **intersect**, so there is no offset between them.

**Joints 2 and 3** have $\alpha = 0$ and $d = 0$, so their axes are parallel and coplanar: a **planar 2R arm** with links 0.5 m and 0.4 m.

*So the arm is:* a vertical waist joint, a 0.3 m column, then a planar 2R arm operating in a vertical plane that the waist swings around. **This is the standard articulated-arm architecture** — a PUMA, an ABB IRB, a UR arm's first three joints all look exactly like this.

(b) *Link transforms.*

$$^0_1T = \begin{bmatrix}\cos30°&0&\sin30°&0\\\sin30°&0&-\cos30°&0\\0&1&0&0.3\\0&0&0&1\end{bmatrix} = \begin{bmatrix}0.8660&0&0.5000&0\\0.5000&0&-0.8660&0\\0&1&0&0.3\\0&0&0&1\end{bmatrix}$$

(using $\cos\alpha_1 = 0$, $\sin\alpha_1 = 1$, $a_1 = 0$, $d_1 = 0.3$).

$$^1_2T = \begin{bmatrix}0.7071&-0.7071&0&0.3536\\0.7071&0.7071&0&0.3536\\0&0&1&0\\0&0&0&1\end{bmatrix}, \qquad ^2_3T = \begin{bmatrix}0.8660&0.5000&0&0.3464\\-0.5000&0.8660&0&-0.2000\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

(the third uses $\theta_3 = -30°$, so $\sin\theta_3 = -0.5$).

*The product.* Work the planar sub-chain first, since joints 2 and 3 are coplanar:

$$^1_3T = {}^1_2T\,{}^2_3T: \quad R = R_z(45°-30°) = R_z(15°) = \begin{bmatrix}0.9659&-0.2588&0\\0.2588&0.9659&0\\0&0&1\end{bmatrix},$$

$$^1P_3 = {}^1_2R\begin{bmatrix}0.3464\\-0.2000\\0\end{bmatrix}+\begin{bmatrix}0.3536\\0.3536\\0\end{bmatrix} = \begin{bmatrix}0.2449+0.1414\\0.2449-0.1414\\0\end{bmatrix}+\begin{bmatrix}0.3536\\0.3536\\0\end{bmatrix} = \begin{bmatrix}0.7399\\0.4571\\0\end{bmatrix}.$$

Then

$$^0P_3 = {}^0_1R\begin{bmatrix}0.7399\\0.4571\\0\end{bmatrix}+\begin{bmatrix}0\\0\\0.3\end{bmatrix} = \begin{bmatrix}0.8660(0.7399)+0+0.5000(0)\\0.5000(0.7399)+0-0.8660(0)\\0+1(0.4571)+0\end{bmatrix}+\begin{bmatrix}0\\0\\0.3\end{bmatrix}$$
$$= \begin{bmatrix}0.6408\\0.3700\\0.4571\end{bmatrix}+\begin{bmatrix}0\\0\\0.3\end{bmatrix} = \begin{bmatrix}0.6408\\0.3700\\0.7571\end{bmatrix}.$$

**Tool position $(0.6408,\ 0.3700,\ 0.7571)$ m.**

$$^0_3R = {}^0_1R\,{}^1_3R = \begin{bmatrix}0.8660&0&0.5000\\0.5000&0&-0.8660\\0&1&0\end{bmatrix}\begin{bmatrix}0.9659&-0.2588&0\\0.2588&0.9659&0\\0&0&1\end{bmatrix} = \begin{bmatrix}0.8365&-0.2241&0.5000\\0.4830&-0.1294&-0.8660\\0.2588&0.9659&0\end{bmatrix}.$$

(c) *Geometric verification.* The arm's shoulder is at $(0,0,0.3)$. The planar 2R sub-arm has reach

$$r = a_2\cos\theta_2+a_3\cos(\theta_2+\theta_3) = 0.5\cos45°+0.4\cos15° = 0.3536+0.3864 = 0.7399\ \mathrm{m}$$

*horizontally from the shoulder axis*, and

$$h = a_2\sin\theta_2+a_3\sin(\theta_2+\theta_3) = 0.5\sin45°+0.4\sin15° = 0.3536+0.1035 = 0.4571\ \mathrm{m}$$

vertically. The waist then swings that radius by $\theta_1 = 30°$:

$$x = r\cos\theta_1 = 0.7399(0.8660) = 0.6408\ \checkmark$$
$$y = r\sin\theta_1 = 0.7399(0.5000) = 0.3700\ \checkmark$$
$$z = 0.3+h = 0.3+0.4571 = 0.7571\ \checkmark$$

**All three match.** This is a genuinely useful check for any articulated arm: reduce the shoulder-and-elbow to a planar 2R problem in the vertical plane, then rotate the answer by the waist angle. It takes seconds and catches sign errors that a $4\times4$ product hides.

*And the orientation block checks out:* column norms are $\sqrt{0.6997+0.2333+0.0670} = 1.0000$ ✓, and $\det = 1.0000$ ✓.

(d) *What $\alpha_1 = 90°$ accomplishes.*

It rotates $\hat z_1$ by $90°$ about $\hat x_1$, taking it from vertical (parallel to the waist axis $\hat z_0$) to **horizontal**. Joint 2 therefore rotates about a horizontal axis, which is what a shoulder must do: **lift** the arm rather than swing it.

Without the twist, all three joints would rotate about the same vertical axis, and the arm could not lift at all — it would be a SCARA with no vertical motion, reaching only in a plane.

*If $\alpha_1$ were $-90°$ instead.* The shoulder axis would point the opposite way, reversing the sign convention for $\theta_2$ and $\theta_3$: what was "elbow up" becomes "elbow down" for the same joint values, and the vertical component $h$ would come out negative. **The reachable workspace would be identical** — the arm can reach the same set of points either way — but every joint angle in the table would flip sign, and any pre-recorded program would drive the arm to a mirror image of the intended pose.

This is exactly why DH tables must be published with the robot and never re-derived from a photograph: the workspace does not distinguish the two conventions, but the joint commands do.

*Why this is the standard shoulder architecture.* Four reasons, and they compound:

**Complete positional coverage.** A vertical waist plus two lifting joints reaches a large, roughly spherical shell — the natural workspace for a machine standing on a floor and reaching around itself. No other three-joint arrangement covers a comparable volume with the same link lengths.

**Decoupled inverse kinematics.** The waist angle comes from $\theta_1 = \operatorname{atan2}(y,x)$ **alone**, independent of everything else; the remaining two joints solve a planar 2R problem in the vertical plane. That decoupling turns a three-dimensional nonlinear system into a one-liner plus a cosine-law calculation, and it is what makes the closed-form solutions of [2.1](02-01-inverse-kinematics-analytic.md) possible.

**Gravity loads only two joints.** The waist axis is vertical, so gravity exerts **no** torque about it. Only the shoulder and elbow carry the arm's weight, which means the waist motor can be sized for acceleration alone. On a real arm the shoulder is the largest motor by a wide margin, for exactly this reason.

**It scales to six joints cleanly.** Adding a three-axis spherical wrist whose axes intersect gives the classical **kinematic decoupling**: the first three joints place the wrist centre, the last three orient the tool, and the two halves solve independently. That decoupling is the single most important structural property in manipulator kinematics, and it is available precisely because the shoulder is built this way.

</details>

## Flashback

**From Lesson 1.5 (Homogeneous transforms):** A link transform has $a = 0.3$, $\alpha = 0$, $d = 0$, $\theta = 60°$. (a) Write the $4\times4$. (b) Find its inverse. (c) Verify the product is the identity.

<details>
<summary>Solution</summary>

(a) With $\alpha = 0$ the general DH matrix collapses:

$$T = \begin{bmatrix}\cos60°&-\sin60°&0&0.3\cos60°\\\sin60°&\cos60°&0&0.3\sin60°\\0&0&1&0\\0&0&0&1\end{bmatrix} = \begin{bmatrix}0.5000&-0.8660&0&0.1500\\0.8660&0.5000&0&0.2598\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

(b) $$R^{\top} = \begin{bmatrix}0.5000&0.8660&0\\-0.8660&0.5000&0\\0&0&1\end{bmatrix},$$

$$-R^{\top}p = -\begin{bmatrix}0.5000(0.1500)+0.8660(0.2598)\\-0.8660(0.1500)+0.5000(0.2598)\\0\end{bmatrix} = -\begin{bmatrix}0.0750+0.2250\\-0.1299+0.1299\\0\end{bmatrix} = \begin{bmatrix}-0.3000\\0\\0\end{bmatrix}.$$

$$T^{-1} = \begin{bmatrix}0.5000&0.8660&0&-0.3000\\-0.8660&0.5000&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

(c) *Rotation block:* $R^{\top}R = I$ ✓.

*Fourth column:* $R^{\top}p+(-R^{\top}p) = 0$ ✓.

*The satisfying part.* The inverse's translation came out as exactly $(-a, 0, 0) = (-0.3, 0, 0)$, with the $y$-component vanishing.

That is not a coincidence — it is the geometric meaning of the DH parameters. The link transform's translation is **always** $a$ along the *new* frame's $\hat x$ (plus $d$ along $\hat z$), so viewed from the far end, the near frame is simply $a$ back along $\hat x$. The rotation $\theta$ is what makes the translation *look* like $(0.15, 0.26, 0)$ in the near frame's coordinates.

**The DH parameters describe the geometry in the frame where it is simplest**, which is precisely why four numbers suffice where six would otherwise be needed — and it is the whole idea of the convention in one calculation.

</details>

## Connections

- **Backward:** the $4\times4$ transform, its composition rule and its inverse are [1.5](01-05-homogeneous-transforms.md)'s; the joint and link vocabulary and the DOF count are [1.1](01-01-robots-links-configuration-space.md)'s.
- **Forward:** [2.1](02-01-inverse-kinematics-analytic.md) inverts this map; [2.3](02-03-manipulator-jacobian.md) differentiates it; [3.3](03-03-newton-euler-recursive-dynamics.md) walks the same chain propagating velocities outward and forces inward.
- **Sideways:** the DH table is a compressed encoding chosen to minimize free parameters by aligning coordinates with the geometry — the same strategy as choosing principal axes in [`analytical-mechanics` 4.4](../../analytical-mechanics/lessons/04-04-rigid-body-dynamics.md) or normal coordinates in [4.3](../../analytical-mechanics/lessons/04-03-small-oscillations.md).

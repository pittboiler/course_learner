# Robotics & Kinematics · Lesson 1.5: Homogeneous transforms

> ⏱ ~15 min · Module 1: Spatial descriptions and forward kinematics · Builds on: [1.2 Rotation matrices](01-02-rotation-matrices.md) · Unlocks: [1.6 Denavit–Hartenberg and forward kinematics](01-06-denavit-hartenberg-forward-kinematics.md), [2.3 The manipulator Jacobian](02-03-manipulator-jacobian.md)

## Why this matters

Rotation matrices handle orientation but assume the two frames share an origin. Real robot links do not: each is displaced from the last as well as rotated.

You could carry rotation and translation separately, writing $^AP = {}^A_BR\,{}^BP+{}^AP_{Borg}$ at every step. That works, and it is unusable — chain four links and the bookkeeping becomes a nested mess of matrix products and vector additions with no clean composition rule.

The [homogeneous transform](../reference.md#homogeneous-transform) fixes it by adding one dummy coordinate. Rotation and translation both become matrix multiplication, chains compose by multiplying $4\times4$ matrices, and inverses have a closed form. Everything downstream — DH parameters, the Jacobian, dynamics — is written in this language.

## The idea

The awkwardness is that translation is an *addition* while rotation is a *multiplication*, so they will not combine.

The fix is to append a 1 to every point, making it a four-vector, and to pack the rotation and the translation into a $4\times4$:

$$\begin{bmatrix}^AP\\1\end{bmatrix} = \begin{bmatrix}^A_BR & ^AP_{Borg}\\0\ 0\ 0&1\end{bmatrix}\begin{bmatrix}^BP\\1\end{bmatrix}.$$

Multiply it out and the top three rows give exactly $^A_BR\,{}^BP+{}^AP_{Borg}$. **The translation rides in the fourth column, and the appended 1 is what turns adding it into multiplying.**

Now the payoff: chains compose. $^0_3T = {}^0_1T\,{}^1_2T\,{}^2_3T$, with the same adjacent-subscript cancellation as before, and *no* special handling of the translations — they accumulate correctly by themselves.

The same three readings as [1.2](01-02-rotation-matrices.md) apply. A transform **describes** frame $\{B\}$'s pose relative to $\{A\}$; it **maps** a point's coordinates from $\{B\}$ to $\{A\}$; and it **operates** on a point, moving it within one frame. And as before, the columns are readable: the first three are $\{B\}$'s axes expressed in $\{A\}$, and the fourth is $\{B\}$'s origin.

The one thing to be careful about: the inverse is **not** the transpose. Transposing a homogeneous transform gives nonsense — the bottom row would move into the fourth column. But the inverse still has a closed form that costs no more than a transpose and a matrix–vector product.

## The formal version

**Definition.**

$$\boxed{\;^A_BT = \begin{bmatrix}^A_BR & ^AP_{Borg}\\\mathbf{0}^{\top}&1\end{bmatrix} \in SE(3),\;}$$

where $^AP_{Borg}$ is the position of $\{B\}$'s origin expressed in $\{A\}$, and $\mathbf{0}^{\top} = [0\ 0\ 0]$.

$SE(3)$, the special Euclidean group, has **six** degrees of freedom: three of rotation and three of translation.

**Reading the columns.**

$$^A_BT = \begin{bmatrix}\hat X_B & \hat Y_B & \hat Z_B & P_{Borg}\\0&0&0&1\end{bmatrix},$$

all four quantities expressed in $\{A\}$.

**Composition.**

$$\boxed{\;^A_CT = {}^A_BT\,{}^B_CT.\;}$$

Multiplying out confirms it does the right thing:

$$^A_CT = \begin{bmatrix}^A_BR\,{}^B_CR & ^A_BR\,{}^BP_{Corg}+{}^AP_{Borg}\\\mathbf{0}^{\top}&1\end{bmatrix}$$

— the rotations multiply, and the translation is rotated before it is added, which is exactly the rule you would derive by hand and would get wrong half the time.

**Inverse.**

$$\boxed{\;^A_BT^{-1} = {}^B_AT = \begin{bmatrix}^A_BR^{\top} & -{}^A_BR^{\top}\,{}^AP_{Borg}\\\mathbf{0}^{\top}&1\end{bmatrix}.\;}$$

*In words: transpose the rotation block, and the new translation is minus the transposed rotation applied to the old one.* The minus sign alone is not enough — the translation must be rotated into the new frame first, and forgetting that is the most common error with transforms.

**Never invert a homogeneous transform numerically.** The formula above is exact and cheap.

**Elementary transforms.**

$$\mathrm{Trans}(a,b,c) = \begin{bmatrix}1&0&0&a\\0&1&0&b\\0&0&1&c\\0&0&0&1\end{bmatrix}, \qquad \mathrm{Rot}(\hat z,\theta) = \begin{bmatrix}c_\theta&-s_\theta&0&0\\s_\theta&c_\theta&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

Every pose is a product of these, and the same body-versus-fixed-axis rule from [1.2](01-02-rotation-matrices.md) applies: **post-multiply for the current frame, pre-multiply for the fixed frame.**

**Points versus vectors.** The fourth coordinate distinguishes them:

| Object | Fourth coordinate | Transform behaviour |
|---|---|---|
| Point (a location) | 1 | rotated **and** translated |
| Free vector (a direction) | 0 | rotated only |

*In words: a direction has no location, so translating it means nothing.* This is not a bookkeeping nicety — velocities, forces and axis directions are free vectors, and translating them would be an error the $4\times4$ formalism prevents automatically.

**Transform equations.** A closed loop of frames gives an equation you can solve for an unknown transform:

$$^A_BT\,{}^B_CT = {}^A_DT\,{}^D_CT \quad\Longrightarrow\quad ^B_CT = {}^A_BT^{-1}\,{}^A_DT\,{}^D_CT.$$

This is how a robot's tool frame is calibrated relative to its wrist, and how a camera's pose is found relative to a robot base — the classic "hand–eye calibration" problem is exactly a transform equation with an unknown on both sides.

**Not commutative, and not orthonormal.**

$$^A_BT\,{}^B_CT \neq {}^B_CT\,{}^A_BT, \qquad T^{-1}\neq T^{\top}.$$

## Picture

![A two-panel figure. Left: three coordinate frames drawn in a chain — a base frame at the origin, a second frame displaced and rotated from it, and a third frame displaced and rotated from the second — with the transform from each to the next drawn as a labelled arrow, and a point marked in the third frame with dashed lines showing how its coordinates propagate back to the base by successive transforms. Right: the four-by-four matrix drawn as a block diagram, with the upper-left three-by-three block shaded and labelled rotation, the upper-right three-by-one column shaded differently and labelled translation, and the bottom row shown as zero zero zero one, alongside the inverse formula showing the transposed rotation block and the negated rotated translation.](assets/01-05-fig1.svg)

Left: the chain. Each arrow is a $4\times4$, and the whole path from tool to base is one matrix product.

Right: the block structure. The rotation block and the translation column are the six degrees of freedom; the bottom row is the scaffolding that makes translation multiplicative.

## Worked examples

**Example 1 (compose, invert, and see that order matters).** Frame $\{B\}$ is $\{A\}$ rotated $90°$ about $\hat z$ and translated to $(3,0,0)$. Frame $\{C\}$ is $\{B\}$ rotated $90°$ about $\hat y$ and translated to $(0,2,0)$ in $\{B\}$.

$$^A_BT = \begin{bmatrix}0&-1&0&3\\1&0&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix}, \qquad ^B_CT = \begin{bmatrix}0&0&1&0\\0&1&0&2\\-1&0&0&0\\0&0&0&1\end{bmatrix}.$$

*Composition.*

$$^A_CT = {}^A_BT\,{}^B_CT = \begin{bmatrix}0&-1&0&1\\0&0&1&0\\-1&0&0&0\\0&0&0&1\end{bmatrix}.$$

*Where did the translation $(1,0,0)$ come from?* From the composition rule:

$$^AP_{Corg} = {}^A_BR\,{}^BP_{Corg}+{}^AP_{Borg} = \begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}\begin{bmatrix}0\\2\\0\end{bmatrix}+\begin{bmatrix}3\\0\\0\end{bmatrix} = \begin{bmatrix}-2\\0\\0\end{bmatrix}+\begin{bmatrix}3\\0\\0\end{bmatrix} = \begin{bmatrix}1\\0\\0\end{bmatrix}.$$

**The $(0,2,0)$ displacement, being expressed in $\{B\}$, had to be rotated into $\{A\}$ before it could be added.** In $\{A\}$'s coordinates it points along $-\hat x$, so it partly cancels the $+3$. This is the step that goes wrong when transforms are handled by hand.

*The reverse order.*

$$^B_CT\,{}^A_BT = \begin{bmatrix}0&0&1&0\\1&0&0&2\\0&1&0&-3\\0&0&0&1\end{bmatrix},$$

**a completely different transform** — different rotation block and a different translation. The product $^B_CT\,{}^A_BT$ is not even meaningful as a frame chain, since the subscripts do not cancel; writing it is the symptom of a mistake.

*The inverse.*

$$^B_AT = {}^A_BT^{-1} = \begin{bmatrix}{}^A_BR^{\top} & -{}^A_BR^{\top}\,{}^AP_{Borg}\\\mathbf{0}^{\top}&1\end{bmatrix}.$$

$$^A_BR^{\top} = \begin{bmatrix}0&1&0\\-1&0&0\\0&0&1\end{bmatrix}, \qquad -{}^A_BR^{\top}\begin{bmatrix}3\\0\\0\end{bmatrix} = -\begin{bmatrix}0\\-3\\0\end{bmatrix} = \begin{bmatrix}0\\3\\0\end{bmatrix}.$$

$$^B_AT = \begin{bmatrix}0&1&0&0\\-1&0&0&3\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

*Check:* $^B_AT\,{}^A_BT = I_4$ ✓.

*Note the trap the formula avoids.* Naively negating the translation would give $(-3,0,0)$; the correct answer is $(0,3,0)$. From $\{B\}$'s point of view, $\{A\}$'s origin is three units away in $\{B\}$'s $+y$ direction, because $\{B\}$ has been turned $90°$. **The translation must be rotated, then negated.**

*A point through the chain.* A point at $(1,2,3)$ in $\{C\}$:

$$^AP = {}^A_CT\begin{bmatrix}1\\2\\3\\1\end{bmatrix} = \begin{bmatrix}0(1)-1(2)+0(3)+1\\0(1)+0(2)+1(3)+0\\-1(1)+0(2)+0(3)+0\\1\end{bmatrix} = \begin{bmatrix}-1\\3\\-1\\1\end{bmatrix}.$$

**Example 2 (a frame chain, and a transform equation).** A robot base is frame $\{0\}$. Its wrist is at $^0_WT$; a tool is bolted to the wrist at a fixed but unknown $^W_TT$; and a calibration fixture of known pose $^0_FT$ is touched by the tool tip.

*The chain.*

$$^0_TT = {}^0_WT\,{}^W_TT.$$

When the tool tip touches the fixture, $^0_TT = {}^0_FT$, so

$$^0_WT\,{}^W_TT = {}^0_FT \quad\Longrightarrow\quad \boxed{^W_TT = {}^0_WT^{-1}\,{}^0_FT.}$$

**The unknown tool transform is recovered from two known ones and one inverse.** That is tool-frame calibration in a single line, and it is performed on every industrial robot whenever an end effector is changed.

*Why the inverse formula matters here.* $^0_WT^{-1}$ is computed with the closed form, not by a general matrix inverse. On a controller running this at kilohertz rates the difference is real, but the more important point is accuracy: a general inverse of a nearly-singular-looking $4\times4$ can lose digits, whereas the closed form is exact whenever $R$ is orthonormal.

*A concrete instance.* Suppose the wrist is at $^0_WT$ with $R = R_z(90°)$ and origin $(0.5, 0.2, 0.8)$, and the fixture is at $^0_FT$ with $R = I$ and origin $(0.5, 0.3, 0.8)$. Then

$$^0_WT^{-1} = \begin{bmatrix}0&1&0&-0.2\\-1&0&0&0.5\\0&0&1&-0.8\\0&0&0&1\end{bmatrix},$$

where the translation came from $-R^{\top}p = -\begin{bmatrix}0&1&0\\-1&0&0\\0&0&1\end{bmatrix}\begin{bmatrix}0.5\\0.2\\0.8\end{bmatrix} = -\begin{bmatrix}0.2\\-0.5\\0.8\end{bmatrix}$.

$$^W_TT = {}^0_WT^{-1}\,{}^0_FT = \begin{bmatrix}0&1&0&0.1\\-1&0&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

**The tool is 0.1 m from the wrist origin along the wrist's $x$-axis, and rotated $-90°$ about $z$ relative to the wrist.** A single measurement recovered both.

*What makes this a genuinely useful pattern.* Any closed loop of frames gives one equation. If exactly one transform in the loop is unknown, it is solved directly. If two are unknown — the classic **hand–eye calibration** problem $AX = XB$, where a camera's pose relative to the gripper and the calibration target's pose relative to the world are both unknown — the loop equation still constrains them, but now requires multiple measurements and a least-squares solve. **The formalism scales from a one-line answer to a research problem without changing.**

*One caution.* This example assumed a perfect touch. In practice the tool tip is touched to the fixture in several orientations and the resulting over-determined system is solved in least-squares, because a single measurement inherits every error in the robot's own kinematics.

## Watch out

- **You might transpose a homogeneous transform to invert it.** $T^{-1}\neq T^{\top}$. Use the block formula: transpose $R$, and set the translation to $-R^{\top}p$.
- **You might negate the translation without rotating it.** $-R^{\top}p$, not $-p$. Example 1 shows the difference between $(0,3,0)$ and $(-3,0,0)$.
- **You might multiply in the wrong order.** Adjacent subscripts must cancel: $^A_BT\,{}^B_CT$ is meaningful; $^B_CT\,{}^A_BT$ is not.
- **You might forget the fourth coordinate, or use the wrong one.** Points get a 1, free vectors (velocities, forces, axis directions) get a 0.
- **You might let the rotation block drift.** After many products, re-orthonormalize the $3\times3$ block — the same drift issue as with plain rotation matrices.
- **You might read the fourth column as $\{A\}$'s origin in $\{B\}$.** It is $\{B\}$'s origin expressed in $\{A\}$.
- **You might expect $4\times4$ transforms to be orthogonal.** They are not; only the $3\times3$ block is.

## One-liner

> Pack rotation and translation into $\begin{bmatrix}R&p\\0&1\end{bmatrix}$ and both become matrix multiplication — chains compose by multiplying, points carry a 1 and vectors a 0, and the inverse is $\begin{bmatrix}R^{\top}&-R^{\top}p\\0&1\end{bmatrix}$, never a transpose.

## Problems

**P1 (🟢)** Frame $\{B\}$ is frame $\{A\}$ rotated $30°$ about $\hat z$ and translated to $(2,1,0)$. (a) Write $^A_BT$. (b) A point is at $(1,0,0)$ in $\{B\}$; find its coordinates in $\{A\}$. (c) A free vector is $(1,0,0)$ in $\{B\}$; find it in $\{A\}$ and explain the difference.

**P2 (🟡)** Using the $^A_BT$ of P1: (a) find $^B_AT$ using the closed-form inverse. (b) Verify $^B_AT\,{}^A_BT = I_4$ by computing at least the fourth column. (c) A point at $(3,2,0)$ in $\{A\}$ — find it in $\{B\}$.

**P3 (🔴)** A mobile manipulator has a base frame $\{0\}$ on a robot that is at position $(2, 1, 0)$ and heading $45°$ in the world frame $\{W\}$. Its arm's tool is at $^0_TT$ with rotation $R_z(-30°)$ and origin $(0.4, 0.2, 0.6)$ in the base frame. (a) Write $^W_0T$ and $^0_TT$. (b) Find $^W_TT$ and give the tool's world position and heading. (c) The robot drives forward 0.5 m along its own heading. Write the new $^W_0T$ and the new tool pose. (d) A target is at world position $(3.0, 2.0, 0.6)$. Find its coordinates in the tool frame before and after the drive, and comment on which representation a grasp controller should use.

<details>
<summary>Solutions</summary>

**P1** (a) $$^A_BT = \begin{bmatrix}\cos30°&-\sin30°&0&2\\\sin30°&\cos30°&0&1\\0&0&1&0\\0&0&0&1\end{bmatrix} = \begin{bmatrix}0.8660&-0.5000&0&2\\0.5000&0.8660&0&1\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

(b) A point carries a 1:

$$^AP = {}^A_BT\begin{bmatrix}1\\0\\0\\1\end{bmatrix} = \begin{bmatrix}0.8660+2\\0.5000+1\\0\\1\end{bmatrix} = \begin{bmatrix}2.8660\\1.5000\\0\\1\end{bmatrix}.$$

(c) A free vector carries a 0:

$$^Av = {}^A_BT\begin{bmatrix}1\\0\\0\\0\end{bmatrix} = \begin{bmatrix}0.8660\\0.5000\\0\\0\end{bmatrix}.$$

**The difference is the translation.** The point picked up $(2,1,0)$; the vector did not.

*Why that is right.* A point is a location, and moving the frame's origin changes where it is. A free vector is a direction and a magnitude with no location at all — "one metre along $\{B\}$'s $x$-axis" is the same arrow wherever you draw it, so translating the frame cannot change it. Only the rotation applies.

This is exactly why velocities, forces and joint-axis directions are stored with a 0 in the fourth slot: transforming them must never translate them.

**P2** (a) $$^A_BR^{\top} = \begin{bmatrix}0.8660&0.5000&0\\-0.5000&0.8660&0\\0&0&1\end{bmatrix},$$

$$-{}^A_BR^{\top}\begin{bmatrix}2\\1\\0\end{bmatrix} = -\begin{bmatrix}0.8660(2)+0.5000(1)\\-0.5000(2)+0.8660(1)\\0\end{bmatrix} = -\begin{bmatrix}2.2320\\-0.1340\\0\end{bmatrix} = \begin{bmatrix}-2.2320\\0.1340\\0\end{bmatrix}.$$

$$^B_AT = \begin{bmatrix}0.8660&0.5000&0&-2.2320\\-0.5000&0.8660&0&0.1340\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

(b) The fourth column of $^B_AT\,{}^A_BT$ is

$$^B_AR\begin{bmatrix}2\\1\\0\end{bmatrix}+\begin{bmatrix}-2.2320\\0.1340\\0\end{bmatrix} = \begin{bmatrix}2.2320\\-0.1340\\0\end{bmatrix}+\begin{bmatrix}-2.2320\\0.1340\\0\end{bmatrix} = \begin{bmatrix}0\\0\\0\end{bmatrix}\ \checkmark$$

and the rotation block is $R^{\top}R = I$ ✓.

(c) $$^BP = {}^B_AT\begin{bmatrix}3\\2\\0\\1\end{bmatrix} = \begin{bmatrix}0.8660(3)+0.5000(2)-2.2320\\-0.5000(3)+0.8660(2)+0.1340\\0\\1\end{bmatrix} = \begin{bmatrix}2.5980+1.0000-2.2320\\-1.5000+1.7320+0.1340\\0\\1\end{bmatrix}$$

$$= \begin{bmatrix}1.3660\\0.3660\\0\\1\end{bmatrix}.$$

*Sanity check:* the point $(3,2,0)$ is $(1,1,0)$ away from $\{B\}$'s origin in $\{A\}$'s directions, a distance of $\sqrt2 = 1.4142$. In $\{B\}$ it is at $(1.3660, 0.3660, 0)$, a distance of $\sqrt{1.8660+0.1340} = \sqrt{2.0000} = 1.4142$ ✓. The distance from the origin is frame-independent, as it must be.

**P3** (a) $$^W_0T = \begin{bmatrix}\cos45°&-\sin45°&0&2\\\sin45°&\cos45°&0&1\\0&0&1&0\\0&0&0&1\end{bmatrix} = \begin{bmatrix}0.7071&-0.7071&0&2\\0.7071&0.7071&0&1\\0&0&1&0\\0&0&0&1\end{bmatrix},$$

$$^0_TT = \begin{bmatrix}0.8660&0.5000&0&0.4\\-0.5000&0.8660&0&0.2\\0&0&1&0.6\\0&0&0&1\end{bmatrix}$$

(using $\cos(-30°) = 0.8660$, $\sin(-30°) = -0.5000$).

(b) $$^W_TT = {}^W_0T\,{}^0_TT.$$

*Rotation block:*

$$R_z(45°)R_z(-30°) = R_z(15°) = \begin{bmatrix}0.9659&-0.2588&0\\0.2588&0.9659&0\\0&0&1\end{bmatrix}.$$

(Rotations about the same axis do commute, and their angles add — one of the rare cases.)

*Translation:*

$$^WP_{Torg} = {}^W_0R\begin{bmatrix}0.4\\0.2\\0.6\end{bmatrix}+\begin{bmatrix}2\\1\\0\end{bmatrix} = \begin{bmatrix}0.7071(0.4)-0.7071(0.2)\\0.7071(0.4)+0.7071(0.2)\\0.6\end{bmatrix}+\begin{bmatrix}2\\1\\0\end{bmatrix}$$
$$= \begin{bmatrix}0.2828-0.1414\\0.2828+0.1414\\0.6\end{bmatrix}+\begin{bmatrix}2\\1\\0\end{bmatrix} = \begin{bmatrix}0.1414\\0.4243\\0.6\end{bmatrix}+\begin{bmatrix}2\\1\\0\end{bmatrix} = \begin{bmatrix}2.1414\\1.4243\\0.6\end{bmatrix}.$$

**Tool world position $(2.1414,\ 1.4243,\ 0.6)$, heading $15°$.**

(c) Driving 0.5 m along the robot's own heading is a translation in the **base** frame, so it post-multiplies:

$$^W_0T_{\rm new} = {}^W_0T\cdot\mathrm{Trans}(0.5,0,0).$$

$$^WP_{0org,\rm new} = \begin{bmatrix}2\\1\\0\end{bmatrix}+{}^W_0R\begin{bmatrix}0.5\\0\\0\end{bmatrix} = \begin{bmatrix}2\\1\\0\end{bmatrix}+\begin{bmatrix}0.3536\\0.3536\\0\end{bmatrix} = \begin{bmatrix}2.3536\\1.3536\\0\end{bmatrix}.$$

The heading is unchanged at $45°$, so

$$^W_0T_{\rm new} = \begin{bmatrix}0.7071&-0.7071&0&2.3536\\0.7071&0.7071&0&1.3536\\0&0&1&0\\0&0&0&1\end{bmatrix}.$$

*New tool pose.* $^0_TT$ is unchanged — the arm did not move relative to the base — so the tool translates by the same $(0.3536, 0.3536, 0)$:

$$^WP_{Torg,\rm new} = (2.4950,\ 1.7778,\ 0.6), \qquad \text{heading still } 15°.$$

*The structural point:* because the drive was expressed in the base frame and post-multiplied, **everything mounted on the base came along automatically**. That is the practical value of the frame chain — you update one transform and the whole kinematic tree follows.

(d) *Before the drive.* The target in the tool frame is

$$^TP = {}^W_TT^{-1}\,{}^WP.$$

$$^W_TT^{-1}: \quad R^{\top} = R_z(-15°) = \begin{bmatrix}0.9659&0.2588&0\\-0.2588&0.9659&0\\0&0&1\end{bmatrix},$$
$$-R^{\top}p = -\begin{bmatrix}0.9659(2.1414)+0.2588(1.4243)\\-0.2588(2.1414)+0.9659(1.4243)\\0.6\end{bmatrix} = -\begin{bmatrix}2.4372\\0.8215\\0.6\end{bmatrix}.$$

$$^TP = \begin{bmatrix}0.9659(3.0)+0.2588(2.0)\\-0.2588(3.0)+0.9659(2.0)\\0.6\end{bmatrix}-\begin{bmatrix}2.4372\\0.8215\\0.6\end{bmatrix} = \begin{bmatrix}3.4153\\1.1554\\0.6\end{bmatrix}-\begin{bmatrix}2.4372\\0.8215\\0.6\end{bmatrix}$$
$$= \begin{bmatrix}0.9783\\0.3339\\0.0000\end{bmatrix}.$$

*After the drive*, the tool has moved to $(2.4950, 1.7778, 0.6)$ with the same orientation, so

$$-R^{\top}p_{\rm new} = -\begin{bmatrix}0.9659(2.4950)+0.2588(1.7778)\\-0.2588(2.4950)+0.9659(1.7778)\\0.6\end{bmatrix} = -\begin{bmatrix}2.8698\\1.0716\\0.6\end{bmatrix},$$

$$^TP_{\rm new} = \begin{bmatrix}3.4153\\1.1554\\0.6\end{bmatrix}-\begin{bmatrix}2.8698\\1.0716\\0.6\end{bmatrix} = \begin{bmatrix}0.5453\\0.0839\\0.0000\end{bmatrix}.$$

*Distances to the target:*

$$\text{before: } \sqrt{0.9571+0.1115} = \sqrt{1.0686} = 1.0337\ \mathrm{m},$$
$$\text{after: } \sqrt{0.2974+0.0070} = \sqrt{0.3044} = 0.5517\ \mathrm{m}.$$

The robot drove 0.5 m and closed the gap by $1.0337-0.5517 = 0.4820$ m — not quite the full 0.5 m, because the drive direction ($45°$) is not exactly along the line to the target.

*Which representation a grasp controller should use.* **The tool frame, without question.**

**The control error is directly the tool-frame coordinates.** "The target is 0.55 m ahead and 0.08 m to the left of the gripper" is immediately actionable: it is the correction the arm must make. World coordinates $(3.0, 2.0, 0.6)$ tell the controller nothing until it subtracts the tool pose, which is the same computation done later.

**It is robust to base motion.** The base moved and the world coordinates of the target did not change at all — yet the required arm motion changed completely. A controller working in world coordinates must recompute the tool pose every cycle anyway; one working in tool coordinates has the answer already.

**It matches the sensors.** A camera or force sensor mounted on the wrist reports in a frame rigidly attached to the tool. Converting the target to world coordinates and back throws away accuracy for nothing.

**And it decouples the two subsystems.** The base controller drives in world coordinates; the arm controller closes on tool-frame error. Neither needs the other's state, and the frame chain of this lesson is what connects them when they do.

*The general rule:* **express a quantity in the frame of whatever is going to act on it.** Sensing in the sensor's frame, control in the actuator's frame, planning in the world frame, and $4\times4$ transforms to move between them.

</details>

## Flashback

**From Lesson 1.3 (Euler angles, fixed angles, and axis–angle):** A frame is rotated by ZYX Euler angles $(90°, 0°, 90°)$ and its origin is at $(1,2,3)$. (a) Write the homogeneous transform. (b) Find its inverse. (c) Find the equivalent axis and angle of the rotation.

<details>
<summary>Solution</summary>

(a) From [1.3](01-03-euler-fixed-angles-axis-angle.md) P1, the rotation matrix for $(90°,0°,90°)$ is

$$R = \begin{bmatrix}0&0&1\\1&0&0\\0&1&0\end{bmatrix}, \qquad T = \begin{bmatrix}0&0&1&1\\1&0&0&2\\0&1&0&3\\0&0&0&1\end{bmatrix}.$$

(b) $$R^{\top} = \begin{bmatrix}0&1&0\\0&0&1\\1&0&0\end{bmatrix}, \qquad -R^{\top}\begin{bmatrix}1\\2\\3\end{bmatrix} = -\begin{bmatrix}2\\3\\1\end{bmatrix} = \begin{bmatrix}-2\\-3\\-1\end{bmatrix}.$$

$$T^{-1} = \begin{bmatrix}0&1&0&-2\\0&0&1&-3\\1&0&0&-1\\0&0&0&1\end{bmatrix}.$$

*Check the fourth column of $T^{-1}T$:* $R^{\top}p+(-R^{\top}p) = 0$ ✓

(c) $$\operatorname{tr}(R) = 0+0+0 = 0, \qquad \theta = \arccos\frac{0-1}{2} = 120°.$$

$$\hat k = \frac{1}{2\sin120°}\begin{bmatrix}r_{32}-r_{23}\\r_{13}-r_{31}\\r_{21}-r_{12}\end{bmatrix} = \frac{1}{1.7321}\begin{bmatrix}1-0\\1-0\\1-0\end{bmatrix} = \frac{1}{\sqrt3}(1,1,1) = (0.5774,\ 0.5774,\ 0.5774).$$

**$120°$ about the body diagonal**, as expected for a cyclic axis permutation.

*What the flashback is really showing.* The rotation and the translation live in the same matrix but do not interact when you *describe* a pose — the axis–angle of the rotation block is exactly what it would be with no translation at all. They interact only under **composition and inversion**, where the translation must be rotated. Keeping those two facts separate — independent in the description, coupled in the algebra — is the whole skill of working with $SE(3)$.

</details>

## Connections

- **Backward:** the rotation block and its transpose-inverse are [1.2](01-02-rotation-matrices.md)'s; the orientation it encodes can be written in any of [1.3](01-03-euler-fixed-angles-axis-angle.md)'s or [1.4](01-04-quaternions.md)'s forms.
- **Forward:** [1.6](01-06-denavit-hartenberg-forward-kinematics.md) writes each link's transform in a standard form and multiplies the chain; [2.3](02-03-manipulator-jacobian.md) differentiates that product; [3.3](03-03-newton-euler-recursive-dynamics.md) propagates forces along the same chain in reverse.
- **Sideways:** $SE(3)$ is a Lie group, and the homogeneous-coordinate trick — one extra dimension turning an affine map into a linear one — is the same device that makes perspective projection a matrix in [`computer-graphics`](../../computer-graphics/syllabus.md) and that underlies projective geometry.

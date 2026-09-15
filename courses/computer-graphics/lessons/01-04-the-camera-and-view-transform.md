# Computer Graphics · Lesson 1.4: The Camera & the View Transform

> ⏱ ~15 min · Module 1: Transformations & Viewing · Builds on: [1.3 (frames)](01-03-3d-transforms-frames-and-normals.md), [`linalg-refresher` 4.3 (Gram–Schmidt)](../../linalg-refresher/lessons/04-03-gram-schmidt-qr.md) · Unlocks: [1.5 (projection)](01-05-projection-orthographic-and-perspective.md), [3.3 (ray generation)](03-03-ray-casting-and-intersection.md)

## Why this matters

A virtual camera has no body. There is no "camera object" the GPU moves around; there is only a matrix that moves the *entire world* so that the camera ends up at the origin looking down $-z$. Everything after this point in the pipeline — projection, clipping, depth — is written assuming that canonical pose.

So "point the camera at the dragon" is really "find the rigid transform that puts the dragon in front of the origin." Specifying a camera by where it is, what it looks at and which way is up, and turning that into a matrix, is the **look-at** construction. It is ten lines in every engine, and it has exactly one way to blow up.

## The idea

Three things pin down a camera: an **eye** position, a **target** (or a gaze direction), and a rough **up** hint. The first two fix where it points. The third fixes how it is rolled — without it the camera could spin around its gaze and still be "looking at the dragon".

From these, build the camera's own frame: one axis pointing backward along the gaze, one pointing right, one pointing up-on-screen. That is a frame exactly as in [1.3](01-03-3d-transforms-frames-and-normals.md), with the eye as origin. The **view matrix** is the frame's inverse: it takes a world point and reports it in camera coordinates — how far right, how far up, how far in front.

The up hint does not need to be perpendicular to the gaze. It only needs to say which side is the top. The construction keeps the part of it perpendicular to the gaze and throws the rest away — which is why the one thing it cannot survive is an up hint that is *entirely* along the gaze.

## The formal version

**Inputs.** Eye $\mathbf{e}$, gaze direction $\mathbf{g}$ (for a target $\mathbf{c}$, take $\mathbf{g} = \mathbf{c} - \mathbf{e}$), and view-up hint $\mathbf{t}$.

**The camera frame.**

$$\mathbf{w} = -\frac{\mathbf{g}}{\lVert\mathbf{g}\rVert}, \qquad \mathbf{u} = \frac{\mathbf{t} \times \mathbf{w}}{\lVert\mathbf{t} \times \mathbf{w}\rVert}, \qquad \mathbf{v} = \mathbf{w} \times \mathbf{u}.$$

In words: $\mathbf{w}$ points **backward** (the camera looks down $-\mathbf{w}$, matching "looks down $-z$"); $\mathbf{u}$ is perpendicular to both up and gaze, so it points to the camera's right; $\mathbf{v}$ completes a right-handed orthonormal frame and is the true screen-up. $\mathbf{v}$ is already unit length because $\mathbf{w} \perp \mathbf{u}$ and both are unit. *(card: [Look-at frame](../reference.md#look-at-frame))*

**What the up hint contributes.** $\mathbf{v}$ is the normalized component of $\mathbf{t}$ perpendicular to $\mathbf{w}$ — one step of Gram–Schmidt:

$$\mathbf{v} = \frac{\mathbf{t} - (\mathbf{t}\cdot\mathbf{w})\,\mathbf{w}}{\lVert\mathbf{t} - (\mathbf{t}\cdot\mathbf{w})\,\mathbf{w}\rVert}.$$

In words: any part of the hint along the gaze is discarded; the part across it becomes screen-up.

**The view matrix.** The camera frame's frame-to-canonical matrix is $F = \begin{pmatrix} \mathbf{u} & \mathbf{v} & \mathbf{w} & \mathbf{e} \\ 0&0&0&1 \end{pmatrix}$. The view matrix is its inverse:

$$V = F^{-1} = \begin{pmatrix} u_x & u_y & u_z & -\mathbf{u}\cdot\mathbf{e} \\ v_x & v_y & v_z & -\mathbf{v}\cdot\mathbf{e} \\ w_x & w_y & w_z & -\mathbf{w}\cdot\mathbf{e} \\ 0 & 0 & 0 & 1 \end{pmatrix} = \underbrace{\begin{pmatrix} \mathbf{u}^T & 0 \\ \mathbf{v}^T & 0 \\ \mathbf{w}^T & 0 \\ \mathbf{0}^T & 1 \end{pmatrix}}_{\text{rotate}} \; T(-\mathbf{e}).$$

In words: slide the world so the eye sits at the origin, then rotate it so the camera's axes line up with $x$, $y$, $z$. A point's camera coordinates are $(\mathbf{u}\cdot\mathbf{d},\ \mathbf{v}\cdot\mathbf{d},\ \mathbf{w}\cdot\mathbf{d})$ with $\mathbf{d} = \mathbf{p} - \mathbf{e}$, and a point in front of the camera has **negative** $z$. *(card: [View matrix](../reference.md#view-matrix))*

**The degenerate case.** If $\mathbf{t} \parallel \mathbf{g}$, then $\mathbf{t} \times \mathbf{w} = \mathbf{0}$ and $\mathbf{u}$ is $\mathbf{0}/0$. The roll is genuinely undefined — "up" gave no information about the top of the screen.

## Picture

![An oblique 3D sketch. World x, y and z axes meet at a coral target point at the origin. A blue eye point sits up and back at 0, 5, 5, with a coral gaze arrow g pointing from the eye toward the target. A dashed grey up hint t points straight up from the eye. Three blue arrows at the eye show the camera frame: u equals 1, 0, 0 pointing right; v equals 0, 0.71, minus 0.71 tilted up and away; w equals minus g over its length pointing back away from the target. A footer notes that the camera looks down its own minus w axis, v is up on screen, u is right](assets/01-04-fig1.svg)

The up hint and $\mathbf{v}$ differ: the hint is world-vertical, but the camera is pitched down toward the target, so its screen-up tilts away from the viewer. Only $\mathbf{w}$ is fixed by the gaze; $\mathbf{u}$ and $\mathbf{v}$ are fixed by the gaze *and* the hint together.

## Worked examples

**Example 1 (mechanical): a camera looking down at the origin.** Eye $\mathbf{e} = (0, 5, 5)$, target at the origin, up $\mathbf{t} = (0, 1, 0)$.

*Frame.* $\mathbf{g} = (0,-5,-5)$, so $\mathbf{w} = (0, 1, 1)/\sqrt2 \approx (0, 0.707, 0.707)$.

$$\mathbf{t}\times\mathbf{w} = (0,1,0) \times (0, 0.707, 0.707) = (1\cdot0.707 - 0\cdot0.707,\ 0\cdot0 - 0\cdot0.707,\ 0\cdot0.707 - 1\cdot0) = (0.707, 0, 0),$$

so $\mathbf{u} = (1, 0, 0)$. Then

$$\mathbf{v} = \mathbf{w}\times\mathbf{u} = (0, 0.707, 0.707)\times(1,0,0) = (0,\ 0.707,\ -0.707).$$

*Translation column.* $\mathbf{u}\cdot\mathbf{e} = 0$, $\mathbf{v}\cdot\mathbf{e} = 0.707\cdot5 - 0.707\cdot5 = 0$, $\mathbf{w}\cdot\mathbf{e} = 7.071$. So

$$V = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 0.707 & -0.707 & 0 \\ 0 & 0.707 & 0.707 & -7.071 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

*Check.* The target $(0,0,0)$ maps to $(0, 0, -7.071)$: dead centre, $5\sqrt2$ in front. ✓

*A second point.* World $(0, 0, -2)$, behind the target from the camera's point of view. $\mathbf{d} = (0, -5, -7)$:

$$(\mathbf{u}\cdot\mathbf{d},\ \mathbf{v}\cdot\mathbf{d},\ \mathbf{w}\cdot\mathbf{d}) = (0,\ 0.707(-5) - 0.707(-7),\ 0.707(-5) + 0.707(-7)) = (0,\ 1.414,\ -8.485).$$

It is farther away ($z = -8.485$) and **above** centre ($y = +1.414$) — which matches intuition: looking down at a floor, points farther along the floor appear higher in the image.

**Example 2 (why you'd care): the top-down camera that crashes.** A strategy game wants a camera directly overhead: eye $(0, 10, 0)$, target at the origin, and — by habit — up $(0, 1, 0)$.

$\mathbf{w} = (0, 1, 0)$ and $\mathbf{t}\times\mathbf{w} = (0,1,0)\times(0,1,0) = \mathbf{0}$. Normalizing gives NaN, and the NaN propagates through $\mathbf{v}$, into $V$, into every vertex: the screen goes black (or the engine asserts).

The fix is to choose a hint that says which world direction should be the top of the screen. For "north ($-z$) at the top", take $\mathbf{t} = (0, 0, -1)$:

$$\mathbf{u} = (0,0,-1)\times(0,1,0) = (1, 0, 0), \qquad \mathbf{v} = (0,1,0)\times(1,0,0) = (0, 0, -1).$$

Now world $+x$ is screen-right and world $-z$ is screen-up, and the camera works. The same failure happens *approximately* for any camera that orbits over the pole: as $\mathbf{g}$ nears $\pm\mathbf{t}$, $\lVert\mathbf{t}\times\mathbf{w}\rVert \to 0$, the normalization amplifies noise, and the image spins wildly as the camera passes overhead. Orbit cameras clamp the pitch a degree or two short of vertical for exactly this reason.

## Watch out

- **You might think** the up hint must be perpendicular to the gaze — **but actually** any vector not parallel to it works; the construction extracts the perpendicular part. What changes the result is the hint's sideways component, which *rolls* the camera (Problem 2).
- **You might think** $\mathbf{w}$ points where the camera looks — **but actually** it points the other way. The camera looks down $-\mathbf{w}$, so visible points have negative camera-space $z$. Flipping this sign produces a camera that renders the scene behind you, mirrored.
- **You might think** the view matrix moves the camera — **but actually** it moves the world. Moving the camera one unit right is $V$ gaining a translation of one unit **left**. Engines that expose "camera position" compute $V$ from it; the matrix itself never contains the eye position, only $-R^T\mathbf{e}$.

## One-liner

> Build the camera's frame from eye, gaze and up — $\mathbf{w}$ backward, $\mathbf{u}$ right, $\mathbf{v}$ up — and the view matrix is that frame's inverse: slide by $-\mathbf{e}$, then rotate.

## Problems

**P1 (🟢)** Eye $(10, 0, 0)$, target at the origin, up $(0, 1, 0)$.
(a) Compute $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$.
(b) Write $V$.
(c) Find the camera coordinates of the world point $(0, 0, 3)$, and say whether it appears to the left or right of screen centre.

**P2 (🟡)** Eye at the origin, gaze $\mathbf{g} = (1, 0, -1)$, and a sloppy up hint $\mathbf{t} = (0, 1, 1)$.
(a) Compute $\mathbf{w}$, $\mathbf{u}$ and $\mathbf{v}$.
(b) Confirm that $\mathbf{v}$ equals the normalized Gram–Schmidt residual $\mathbf{t} - (\mathbf{t}\cdot\mathbf{w})\mathbf{w}$.
(c) The intended hint was $(0, 1, 0)$, which gives $\mathbf{v}_0 = (0, 1, 0)$. By what angle is the sloppy camera **rolled** relative to the intended one?

**P3 (🔴)** An orbit camera circles the origin at radius 5 in the $xz$-plane: $\mathbf{e}(\varphi) = (5\sin\varphi,\ 0,\ 5\cos\varphi)$, target at the origin, up $(0, 1, 0)$.
(a) Build $V$ for $\varphi = 90°$ with the look-at construction.
(b) Show that it equals $T(0, 0, -5)\,R_y(-90°)$.
(c) State the general formula for $V(\varphi)$ as a product of named factors, and explain in one sentence why it has that form.

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathbf{g} = (-10, 0, 0)$, so $\mathbf{w} = (1, 0, 0)$.

$$\mathbf{u} = (0,1,0)\times(1,0,0) = (1\cdot0 - 0\cdot0,\ 0\cdot1 - 0\cdot0,\ 0\cdot0 - 1\cdot1) = (0, 0, -1).$$

$$\mathbf{v} = (1,0,0)\times(0,0,-1) = (0\cdot(-1) - 0\cdot0,\ 0\cdot0 - 1\cdot(-1),\ 1\cdot0 - 0\cdot0) = (0, 1, 0).$$

(b) $\mathbf{u}\cdot\mathbf{e} = 0$, $\mathbf{v}\cdot\mathbf{e} = 0$, $\mathbf{w}\cdot\mathbf{e} = 10$:

$$V = \begin{pmatrix} 0 & 0 & -1 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & -10 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

(c) $\mathbf{d} = (0,0,3) - (10,0,0) = (-10, 0, 3)$:

$$(\mathbf{u}\cdot\mathbf{d},\ \mathbf{v}\cdot\mathbf{d},\ \mathbf{w}\cdot\mathbf{d}) = (-3,\ 0,\ -10).$$

Camera $x = -3$: **left** of centre. Check with the picture in your head: standing on the $+x$ axis looking toward the origin with $y$ up, your right hand points toward $-z$, so $+z$ is on your left. ✓

**P2**

(a) $\mathbf{w} = -\mathbf{g}/\lVert\mathbf{g}\rVert = (-1, 0, 1)/\sqrt2 \approx (-0.707, 0, 0.707)$.

$$\mathbf{t}\times\mathbf{w} = (0,1,1)\times(-0.707, 0, 0.707) = (1\cdot0.707 - 1\cdot0,\ 1\cdot(-0.707) - 0\cdot0.707,\ 0\cdot0 - 1\cdot(-0.707)) = (0.707, -0.707, 0.707).$$

Its length is $0.707\sqrt3 = 1.2247$, so $\mathbf{u} = (1, -1, 1)/\sqrt3 \approx (0.577, -0.577, 0.577)$.

$$\mathbf{v} = \mathbf{w}\times\mathbf{u} = \tfrac{1}{\sqrt6}\big(0\cdot1 - 1\cdot(-1),\ 1\cdot1 - (-1)\cdot1,\ (-1)(-1) - 0\cdot1\big) = \tfrac{1}{\sqrt6}(1, 2, 1) \approx (0.408, 0.816, 0.408).$$

(b) $\mathbf{t}\cdot\mathbf{w} = 0.707$, so $\mathbf{t} - 0.707\,\mathbf{w} = (0,1,1) - (-0.5, 0, 0.5) = (0.5, 1, 0.5)$, whose normalization is $(1,2,1)/\sqrt6$. ✓ Same as $\mathbf{v}$.

(c) Both cameras share $\mathbf{w}$, so the roll is the angle between their screen-up vectors:

$$\cos\theta = \mathbf{v}\cdot\mathbf{v}_0 = 0.816 \quad\Longrightarrow\quad \theta \approx \mathbf{35.3°}.$$

The hint's extra $+z$ component was not purely along the gaze: $(0,0,1)$ splits into $-0.707\,\mathbf{w}$ (harmless, discarded) plus a sideways part $(0.5, 0, 0.5)$, and the sideways part tilted the horizon by $35°$.

**P3**

(a) $\mathbf{e} = (5, 0, 0)$. This is P1 with the eye at distance 5 instead of 10: $\mathbf{w} = (1,0,0)$, $\mathbf{u} = (0,0,-1)$, $\mathbf{v} = (0,1,0)$, and $\mathbf{w}\cdot\mathbf{e} = 5$.

$$V = \begin{pmatrix} 0 & 0 & -1 & 0 \\ 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & -5 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

(b) $R_y(-90°)$ has $c = 0$, $s = -1$, so its block is $\begin{pmatrix} 0 & 0 & -1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$ — exactly the rotation block of $V$. Premultiplying by $T(0,0,-5)$ adds $-5$ to the third row's translation entry, giving $V$. ✓

(c) $$V(\varphi) = T(0, 0, -5)\,R_y(-\varphi).$$

The eye was obtained by rotating the point $(0,0,5)$ by $R_y(\varphi)$; undoing the camera means rotating the world by $R_y(-\varphi)$ to bring the eye back onto the $+z$ axis, and then pushing the world $5$ units down $-z$ so the eye sits at the origin. (A numerical check at $\varphi = 30°$ and $\varphi = -60°$ against the look-at construction agrees to machine precision.)

</details>

## Flashback

**From Lesson 1.1 (the pipeline):** A VR headset renders two eye buffers, each $2160 \times 2160$, at 90 Hz. Each pixel stores a half-float RGBA colour (8 bytes) and a 32-bit depth value.
(a) How much memory do the two eyes' colour-plus-depth buffers take, in MiB?
(b) With depth complexity 1, how many fragments are shaded per second?
(c) The next headset raises each eye's resolution by 25% in *each* dimension. By what factor does the per-frame fragment count grow?

<details>
<summary>Solution</summary>

(a) Per eye: $2160^2 = 4{,}665{,}600$ pixels at $8 + 4 = 12$ bytes, so $55{,}987{,}200$ bytes. Two eyes: $111{,}974{,}400$ bytes. Divided by $1{,}048{,}576$: $\mathbf{106.8}$ **MiB**.

(b) $2 \times 4{,}665{,}600 \times 90 = \mathbf{839{,}808{,}000}$ fragments per second — about $8.4 \times 10^8$.

(c) Pixel count is the product of the two dimensions, so it grows by $1.25^2 = \mathbf{1.5625}$ — 56% more fragments for a 25% sharper image. Every per-pixel stage of the pipeline pays that factor.

</details>

## Connections

- **Backward:** $V$ is [1.3](01-03-3d-transforms-frames-and-normals.md)'s closed-form frame inverse, and $\mathbf{v}$ is one step of [`linalg-refresher` 4.3](../../linalg-refresher/lessons/04-03-gram-schmidt-qr.md)'s Gram–Schmidt. The cross products are [`linalg-refresher` 1.4](../../linalg-refresher/lessons/01-04-cross-product-and-orientation.md)'s, and their order is what makes the frame right-handed.
- **Forward:** [1.5](01-05-projection-orthographic-and-perspective.md) assumes exactly the pose $V$ produces — camera at the origin, looking down $-z$ — and derives projection from there. [3.3](03-03-ray-casting-and-intersection.md) runs the construction in reverse: a ray tracer uses $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ directly to aim a ray through each pixel.
- **Sideways:** the pole singularity in Example 2 is a hairy-ball phenomenon — no continuous choice of "right" exists for every gaze direction on the sphere — and it is the same gimbal-style breakdown [`robotics` 1.3](../../robotics/lessons/01-03-euler-fixed-angles-axis-angle.md) finds in Euler angles, which is why [4.6](04-06-keyframes-and-rotation-interpolation.md) interpolates camera orientation with quaternions instead.

# Computer Graphics · Lesson 2.4: Lighting — Diffuse, Specular & Phong

> ⏱ ~15 min · Module 2: Rasterization & Shading · Builds on: [1.3 (transforming normals)](01-03-3d-transforms-frames-and-normals.md), [2.3 (interpolating attributes)](02-03-perspective-correct-interpolation.md) · Unlocks: [2.5 (Blinn–Phong and shading frequency)](02-05-blinn-phong-shading-frequency-materials.md), [3.4 (Whitted ray tracing)](03-04-whitted-ray-tracing-reflection-refraction.md), [3.6 (BRDFs)](03-06-radiometry-brdfs-rendering-equation.md)

## Why this matters

Coverage and depth give you silhouettes. What makes a sphere look round rather than like a flat disc is that its brightness changes across its surface — darker where it turns away from the light, with a bright glint where it mirrors the light toward you. A **local lighting model** computes that brightness from a handful of vectors at a single point, with no knowledge of the rest of the scene.

The Phong model is thirty years past state of the art and still the right first model: every term in it is a crude but recognisable version of something physical, and [3.6](03-06-radiometry-brdfs-rendering-equation.md) will show exactly which physical quantity each term approximates. It is also where the normals you learned to transform in [1.3](01-03-3d-transforms-frames-and-normals.md) finally earn their keep.

## The idea

**Diffuse: matte surfaces care about the angle to the light, not to you.** Shine a flashlight straight at a wall and you get a small, bright disc. Tilt the flashlight and the same light spreads over a longer oval, so each bit of wall gets less. A matte surface scatters whatever it receives equally in all directions, so it looks equally bright from anywhere — its brightness depends only on how obliquely the light arrives. That obliqueness factor is the cosine of the angle between the normal and the light direction.

**Specular: shiny surfaces glint where they mirror the light at you.** A perfect mirror sends light out in exactly one direction, the reflection of the incoming ray. A glossy surface sends it out in a narrow cone around that direction. You see a highlight when your eye is inside the cone. How narrow the cone is — how polished the surface — is one number, the **shininess exponent**.

**Ambient: a fudge for light that bounced off everything else.** In a real room, surfaces facing away from the lamp still aren't black, because light reaches them from walls and ceiling. A local model can't see the walls, so it adds a small constant.

## The formal version

**The vectors.** At a surface point, all unit length:

- $\mathbf{n}$ — the surface normal (transformed with the normal matrix of [1.3](01-03-3d-transforms-frames-and-normals.md) and renormalized);
- $\mathbf{l}$ — direction **to** the light ($\mathbf{l} = (\mathbf{x}_{\text{light}} - \mathbf{p})/\lVert\cdot\rVert$ for a point light; constant for a directional light like the sun);
- $\mathbf{v}$ — direction **to** the viewer;
- $\mathbf{r}$ — the mirror reflection of $\mathbf{l}$ about $\mathbf{n}$:
$$\mathbf{r} = 2(\mathbf{n}\cdot\mathbf{l})\,\mathbf{n} - \mathbf{l}.$$
In words: keep $\mathbf{l}$'s component along $\mathbf{n}$ and flip its component along the surface. *(card: [Reflection vector](../reference.md#reflection-vector))*

**Lambert's cosine law (diffuse).**

$$L_d = k_d\, I \max(0,\ \mathbf{n}\cdot\mathbf{l}).$$

$k_d$ is the diffuse reflectance (per colour channel, in $[0,1]$), $I$ the light's intensity reaching the point. In words: brightness is proportional to the cosine of the angle of incidence, and zero once the light is behind the surface. *(card: [Lambertian diffuse](../reference.md#lambertian-diffuse))*

**Phong specular.**

$$L_s = k_s\, I \max(0,\ \mathbf{r}\cdot\mathbf{v})^{p}.$$

$k_s$ is the specular reflectance and $p$ the **Phong exponent**: large $p$ means a small, sharp highlight. In words: brightness peaks when you look straight down the mirror direction and falls off as a power of the cosine of your angle from it. The specular term is set to zero when $\mathbf{n}\cdot\mathbf{l} \le 0$, so a light behind the surface can't produce a highlight.

**The full Phong reflection model**, summed over lights $j$, per colour channel:

$$\boxed{\ L = k_a I_a + \sum_j I_j\Big[k_d \max(0,\ \mathbf{n}\cdot\mathbf{l}_j) + k_s \max(0,\ \mathbf{r}_j\cdot\mathbf{v})^{p}\Big]\ }$$

with $k_a$ the ambient reflectance and $I_a$ the ambient intensity. The result is clamped to $[0,1]$ for display. *(card: [Phong reflection model](../reference.md#phong-reflection-model))*

**Highlight width.** The specular term falls to half its peak when $\cos^p\alpha = \tfrac12$, at

$$\alpha_{1/2} = \arccos\!\left(2^{-1/p}\right).$$

| $p$ | 10 | 50 | 100 | 1000 |
|---|---|---|---|---|
| $\alpha_{1/2}$ | $21.1°$ | $9.5°$ | $6.7°$ | $2.1°$ |

**Point-light falloff.** A physical point light of intensity $I_0$ delivers $I = I_0/d^2$ at distance $d$ — the same power spread over a sphere of area $4\pi d^2$. Many real-time systems use gentler artistic falloffs; [3.6](03-06-radiometry-brdfs-rendering-equation.md) makes the physical version precise.

## Picture

![A horizontal surface line with a grey normal n pointing up from a point. A coral vector l points up and to the left toward the light. A blue vector r points up and to the right, its mirror image about n, with equal coral angles theta marked on each side of n. A dashed blue vector v toward the eye lies a little below r, with the angle alpha between r and v marked. Footer: diffuse is proportional to cos theta equals n dot l, specular to cos alpha to the power p equals r dot v to the p](assets/02-04-fig1.svg)

Diffuse lives entirely on the coral side — $\theta$, between $\mathbf{n}$ and $\mathbf{l}$ — and doesn't involve the eye at all. Specular lives on the blue side — $\alpha$, between $\mathbf{r}$ and $\mathbf{v}$ — which is why a highlight slides across an object when you move your head but its shading does not.

## Worked examples

**Example 1 (mechanical): shading one point.** A point at the origin on a floor with $\mathbf{n} = (0, 1, 0)$. A white point light at $(3, 4, 0)$ with intensity $I = 1$ at the point (ignore falloff); the eye at $(-4, 3, 0)$. Material: $k_d = (0.8, 0.2, 0.2)$ (red), $k_a = k_d$ with ambient $I_a = 0.1$, $k_s = 0.5$ (white), $p = 20$.

*Vectors.* $\mathbf{l} = (3,4,0)/5 = (0.6,\ 0.8,\ 0)$; $\mathbf{v} = (-4,3,0)/5 = (-0.8,\ 0.6,\ 0)$.

$\mathbf{n}\cdot\mathbf{l} = 0.8$, so $\mathbf{r} = 2(0.8)(0,1,0) - (0.6, 0.8, 0) = (-0.6,\ 0.8,\ 0)$.

$\mathbf{r}\cdot\mathbf{v} = 0.48 + 0.48 = 0.96$, and $0.96^{20} = 0.442$.

*Terms*, per channel:

| | ambient $0.1\,k_a$ | diffuse $0.8\,k_d$ | specular $0.5 \times 0.442$ | total |
|---|---|---|---|---|
| R | $0.08$ | $0.64$ | $0.221$ | $\mathbf{0.941}$ |
| G | $0.02$ | $0.16$ | $0.221$ | $\mathbf{0.401}$ |
| B | $0.02$ | $0.16$ | $0.221$ | $\mathbf{0.401}$ |

The diffuse and ambient terms carry the object's colour (red); the specular term is the same in every channel, because $k_s$ is white — so the highlight pushes the colour **toward white**. That is why highlights on plastic look white while highlights on gold look gold: dielectrics have colourless specular reflectance, metals do not.

**Example 2 (why you'd care): the exponent is not the highlight's size.** A modeller wants a highlight "about $10°$ wide" and picks $p = 50$ from the table. On a sphere, how far across the surface does that highlight extend?

The table's angle is between $\mathbf{r}$ and $\mathbf{v}$. But tilting the **normal** by $\delta$ rotates the reflection $\mathbf{r}$ by $2\delta$ (reflection doubles angles). So the highlight falls to half brightness when the normal has turned only $\alpha_{1/2}/2 = 4.8°$ from the peak normal. Concretely: at a normal $10°$ from the peak, $\mathbf{r}\cdot\mathbf{v} = \cos 20° = 0.940$, and

$$0.940^{50} = 0.045,$$

under 5% of the peak. The visible highlight on the sphere is roughly half as wide in surface angle as the table suggests — worth knowing before tuning exponents by eye. (Problem 3 builds this configuration from scratch.)

## Watch out

- **You might think** the diffuse term should depend on where the viewer is, since a lit wall looks brighter face-on — **but actually** a Lambertian surface has the same brightness from every direction. Tilting a wall away from you makes each pixel cover *more* wall, but each bit of wall sends *less* light toward you, and the two cosines cancel exactly. What makes a wall darker is tilting it away from the **light**.
- **You might think** $\mathbf{l}$ points from the light to the surface, because light travels that way — **but actually** every formula here takes $\mathbf{l}$ pointing **to** the light. Using the travel direction flips the sign of $\mathbf{n}\cdot\mathbf{l}$, and the clamp then zeroes out every lit surface.
- **You might think** clamping to $[0,1]$ is harmless — **but actually** it silently discards energy and shifts hue. A blue surface under a bright light (Problem 2) saturates its blue channel while red and green keep rising, so the colour drifts toward cyan-white. Production renderers keep values unclamped and apply tone mapping at the very end.

## One-liner

> Diffuse is $k_d\,\mathbf{n}\cdot\mathbf{l}$ and ignores the eye; specular is $k_s(\mathbf{r}\cdot\mathbf{v})^p$ and follows it; ambient is a constant standing in for all the light a local model can't see.

## Problems

**P1 (🟢)** A surface point at $(1, 1, 0)$ has normal $(0, 0, 1)$ and diffuse reflectance $k_d = (0.9, 0.6, 0.3)$. Compute the diffuse colour (no ambient, no specular) for:
(a) a white directional light of intensity 1 arriving from direction $(1, 1, 1)$ (that is, $\mathbf{l} \propto (1,1,1)$);
(b) instead, a white point light of intensity $I_0 = 8$ at $(0, 0, 2)$, with physical $1/d^2$ falloff.

**P2 (🟡)** A surface point at the origin has $\mathbf{n} = (0, 1, 0)$. A white light of intensity 1 is at $(-2, 2, 1)$; the eye is at $(2, 3, -1)$. Material: $k_d = (0.2, 0.4, 0.9)$, $k_a = k_d$ with $I_a = 0.15$, $k_s = 0.6$, $p = 8$.
(a) Compute $\mathbf{l}$, $\mathbf{v}$, $\mathbf{r}$, $\mathbf{n}\cdot\mathbf{l}$ and $\mathbf{r}\cdot\mathbf{v}$.
(b) Compute the unclamped RGB colour, then the displayed colour.

**P3 (🔴)** A unit sphere centred at the origin is lit by a directional light from $\mathbf{l} = (0, 0, 1)$ and viewed by a distant eye in direction $\mathbf{v} = (1, 0, 0)$. Take $p = 50$.
(a) At which point on the sphere is the specular highlight brightest? Justify.
(b) Take the point on the sphere's equator ($y = 0$) whose normal is $10°$ further from the light than the highlight normal. Compute its $\mathbf{n}\cdot\mathbf{l}$, its $\mathbf{r}\cdot\mathbf{v}$, and its specular factor $(\mathbf{r}\cdot\mathbf{v})^{50}$.
(c) Explain in one sentence why the specular factor dropped so much more than the $10°$ suggests.

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathbf{l} = (1,1,1)/\sqrt3$, so $\mathbf{n}\cdot\mathbf{l} = 1/\sqrt3 = 0.5774$.

$$L_d = 0.5774 \times (0.9,\ 0.6,\ 0.3) = \mathbf{(0.520,\ 0.346,\ 0.173)}.$$

(b) $\mathbf{x}_{\text{light}} - \mathbf{p} = (-1, -1, 2)$, $d = \sqrt6 = 2.449$, $\mathbf{l} = (-1,-1,2)/\sqrt6$, $\mathbf{n}\cdot\mathbf{l} = 2/\sqrt6 = 0.8165$. Intensity at the point: $I = 8/6 = 1.333$.

$$L_d = 1.333 \times 0.8165 \times (0.9,\ 0.6,\ 0.3) = 1.0887 \times (0.9, 0.6, 0.3) = \mathbf{(0.980,\ 0.653,\ 0.327)}.$$

**P2**

(a) $\mathbf{x}_{\text{light}} - \mathbf{p} = (-2, 2, 1)$ has length 3: $\mathbf{l} = (-0.667,\ 0.667,\ 0.333)$.
$\mathbf{x}_{\text{eye}} - \mathbf{p} = (2, 3, -1)$ has length $\sqrt{14} = 3.742$: $\mathbf{v} = (0.535,\ 0.802,\ -0.267)$.

$\mathbf{n}\cdot\mathbf{l} = 0.667$, so $\mathbf{r} = 2(0.667)(0, 1, 0) - \mathbf{l} = (0.667,\ 0.667,\ -0.333)$.

$\mathbf{r}\cdot\mathbf{v} = (0.667)(0.535) + (0.667)(0.802) + (-0.333)(-0.267) = 0.356 + 0.535 + 0.089 = 0.980$.

(b) Specular factor $0.980^8 = 0.850$, times $k_s = 0.6$: $0.510$ in every channel.

| | ambient $0.15\,k_d$ | diffuse $0.667\,k_d$ | specular | unclamped | displayed |
|---|---|---|---|---|---|
| R | $0.030$ | $0.133$ | $0.510$ | $0.674$ | $0.674$ |
| G | $0.060$ | $0.267$ | $0.510$ | $0.837$ | $0.837$ |
| B | $0.135$ | $0.600$ | $0.510$ | $1.245$ | $\mathbf{1.000}$ |

Displayed $(0.674,\ 0.837,\ 1.000)$. The blue channel clipped, throwing away $0.245$ of it, while red and green did not — so the displayed colour is noticeably less saturated than the lighting implied.

**P3**

(a) The highlight peaks where $\mathbf{r} = \mathbf{v}$. Reflection about $\mathbf{n}$ sends $\mathbf{l}$ to $\mathbf{v}$ exactly when $\mathbf{n}$ bisects them, $\mathbf{n} \propto \mathbf{l} + \mathbf{v} = (1, 0, 1)$. On a unit sphere centred at the origin the normal at a point *is* the point, so the brightest spot is at $\mathbf{(0.707,\ 0,\ 0.707)}$, halfway between the light-facing pole and the eye-facing pole.

(b) The highlight normal is $45°$ from the $z$-axis toward $x$; turning $10°$ further from the light gives $\mathbf{n} = (\sin 55°,\ 0,\ \cos 55°) = (0.819,\ 0,\ 0.574)$.

$\mathbf{n}\cdot\mathbf{l} = 0.574$ (still well lit).

$\mathbf{r} = 2(0.574)\,\mathbf{n} - \mathbf{l} = (0.940,\ 0,\ 0.658 - 1) = (0.940,\ 0,\ -0.342)$, so $\mathbf{r}\cdot\mathbf{v} = 0.940$ — that is, $\cos 20°$.

Specular factor $0.940^{50} = \mathbf{0.045}$.

(c) Rotating the normal by $10°$ rotated the reflected ray by $\mathbf{20°}$, because reflection doubles angles — and raising $\cos 20° = 0.94$ to the 50th power turns that modest miss into a 95% drop.

</details>

## Flashback

**From Lesson 2.2 (clipping):** Using the projection with $90°$ field of view, aspect 1, $n = 1$, $f = 10$, clip the triangle with eye-space vertices $\mathbf{a} = (0, 0, -3)$, $\mathbf{b} = (2, 0, 1)$, $\mathbf{c} = (0, 2, 1)$ against the near plane.
(a) Give each vertex's near-plane distance $d = z + w$.
(b) Run Sutherland–Hodgman and list the output polygon in clip coordinates.
(c) How many triangles reach the rasterizer?

<details>
<summary>Solution</summary>

(a) Clip $= (x,\ y,\ -\tfrac{11}{9}z - \tfrac{20}{9},\ -z)$.

- $\mathbf{a}$: $(0,\ 0,\ 1.444,\ 3)$, $d = 4.444$ (inside)
- $\mathbf{b}$: $(2,\ 0,\ -3.444,\ -1)$, $d = -4.444$ (outside)
- $\mathbf{c}$: $(0,\ 2,\ -3.444,\ -1)$, $d = -4.444$ (outside)

(b) Walk $\mathbf{a}\to\mathbf{b}\to\mathbf{c}\to\mathbf{a}$:

- $\mathbf{a}\to\mathbf{b}$: output $\mathbf{a}$; crossing at $t = 4.444/8.889 = 0.5$, giving $(1,\ 0,\ -1,\ 1)$.
- $\mathbf{b}\to\mathbf{c}$: both outside, output nothing.
- $\mathbf{c}\to\mathbf{a}$: crossing at $t = -4.444/(-8.889) = 0.5$, giving $(0,\ 1,\ -1,\ 1)$.

Output: $(0, 0, 1.444, 3)$, $(1, 0, -1, 1)$, $(0, 1, -1, 1)$.

(c) **One** triangle: with two vertices outside, clipping produces a smaller triangle, not a quadrilateral. Its two new vertices sit on the near plane at NDC $(1, 0, -1)$ and $(0, 1, -1)$.

</details>

## Connections

- **Backward:** $\mathbf{n}$ must be transformed with [1.3](01-03-3d-transforms-frames-and-normals.md)'s inverse transpose, or every term here is wrong; the per-pixel normals, colours and positions come from [2.3](02-03-perspective-correct-interpolation.md)'s interpolation. The reflection formula is a projection onto $\mathbf{n}$, as in [`linalg-refresher` 4.2](../../linalg-refresher/lessons/04-02-projection-least-squares.md).
- **Forward:** [2.5](02-05-blinn-phong-shading-frequency-materials.md) replaces $\mathbf{r}\cdot\mathbf{v}$ with a cheaper, better-behaved halfway vector and decides where in the pipeline to evaluate the model. [3.4](03-04-whitted-ray-tracing-reflection-refraction.md) turns $\mathbf{r}$ into an actual ray. [3.6](03-06-radiometry-brdfs-rendering-equation.md) recasts $k_d$ as a BRDF, explains the missing $1/\pi$, and replaces the ambient fudge with real indirect light.
- **Sideways:** Lambert's cosine law is the same projected-area factor as the $\cos$ of solar zenith angle in [`climate-science`](../../climate-science/syllabus.md)'s insolation, and the mirror reflection is the law of reflection of [`waves-optics` 3.1](../../waves-optics/lessons/03-01-reflection-refraction-snell.md) in vector form.

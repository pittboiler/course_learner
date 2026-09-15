# Computer Graphics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Everything in this course is either a matrix that moves points between coordinate spaces, a weighted average (barycentric, bilinear, Bernstein, subdivision, skinning), a sample of a continuous function (pixels, texels, rays), or an estimate of an integral. This card collects the conventions, formulas and traps, grouped by the job they do.

**Conventions used throughout.** Column vectors, $\mathbf{p}' = M\mathbf{p}$, so the transform applied first is rightmost. Right-handed coordinates. The camera looks down $-z$. NDC is $[-1,1]^3$ (OpenGL style). Screen space has $y$ **up**; pixel $(i,j)$ is sampled at $(i+\tfrac12, j+\tfrac12)$. Triangles are counter-clockwise seen from the front. Points have $w = 1$, vectors $w = 0$.

**Scope and ownership.** This course cites, rather than re-derives:

| Topic | Owner | Used in |
|---|---|---|
| Rotation matrices, Euler angles, axis–angle | [`robotics` 1.2–1.3](../robotics/lessons/01-02-rotation-matrices.md) | [1.3](lessons/01-03-3d-transforms-frames-and-normals.md), [4.6](lessons/04-06-keyframes-and-rotation-interpolation.md) |
| Quaternions, slerp | [`robotics` 1.4](../robotics/lessons/01-04-quaternions.md) | [4.6](lessons/04-06-keyframes-and-rotation-interpolation.md) |
| Forward kinematics of chains | [`robotics` 1.6](../robotics/lessons/01-06-denavit-hartenberg-forward-kinematics.md) | [4.7](lessons/04-07-skinning-and-deformation.md) |
| Snell's law, total internal reflection (scalar) | [`waves-optics` 3.1](../waves-optics/lessons/03-01-reflection-refraction-snell.md) | [3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md) |
| Sampling theorem, aliasing (1D) | [`communications` 2.1](../communications/lessons/02-01-sampling-theorem-aliasing.md) | [2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md) |
| Interpolating cubic splines | [`numerical-analysis` 2.2](../numerical-analysis/lessons/02-02-runge-splines.md) | [4.3](lessons/04-03-splines-and-continuity.md) |
| Law of large numbers; importance sampling | [`probability-theory` 4.2](../probability-theory/lessons/04-02-laws-of-large-numbers.md), [`reinforcement-learning` 2.6](../reinforcement-learning/lessons/02-06-off-policy-learning-importance-sampling.md) | [3.7](lessons/03-07-monte-carlo-path-tracing.md) |

## Notation

| Symbol | Means | First used |
|---|---|---|
| $W, H$ | image width and height in pixels | [1.1](lessons/01-01-the-graphics-pipeline.md) |
| $N$ | number of primitives (triangles) in a scene; also number of samples in [3.7](lessons/03-07-monte-carlo-path-tracing.md) | [1.1](lessons/01-01-the-graphics-pipeline.md) |
| $d$ | depth complexity: how many surface layers overlap a typical pixel | [1.1](lessons/01-01-the-graphics-pipeline.md) |
| $M, V, P$ | model, view and projection matrices | [1.1](lessons/01-01-the-graphics-pipeline.md) |
| $T(\cdot), R(\theta), S(\cdot)$ | translation, rotation, scale matrices | [1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md) |
| $w$ | homogeneous coordinate: 1 for points, 0 for vectors; after projection, $w = -z_{\text{eye}}$ (distance in front of the eye) | [1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md), [1.5](lessons/01-05-projection-orthographic-and-perspective.md) |
| $A$ | the $3\times3$ linear block of an affine $4\times4$ matrix | [1.3](lessons/01-03-3d-transforms-frames-and-normals.md) |
| $(A^{-1})^T$ | the normal matrix — what normals are multiplied by | [1.3](lessons/01-03-3d-transforms-frames-and-normals.md) |
| $\mathbf{e}; \mathbf{u}, \mathbf{v}, \mathbf{w}$ | a frame's origin and axes; for the camera, eye, right, up, backward | [1.3](lessons/01-03-3d-transforms-frames-and-normals.md), [1.4](lessons/01-04-the-camera-and-view-transform.md) |
| $\mathbf{g}, \mathbf{t}$ | camera gaze direction; view-up hint | [1.4](lessons/01-04-the-camera-and-view-transform.md) |
| $n, f$ | near and far plane distances ($0 < n < f$) | [1.5](lessons/01-05-projection-orthographic-and-perspective.md) |
| $s = \cot(\text{fovy}/2)$, $a$ | projection focal scale; aspect ratio $W/H$ | [1.5](lessons/01-05-projection-orthographic-and-perspective.md) |
| $A, B$ (in $P$) | the depth-row entries of the perspective matrix | [1.5](lessons/01-05-projection-orthographic-and-perspective.md) |
| $E_{\mathbf{ab}}(\mathbf{p})$ | edge function of directed edge $\mathbf{a}\to\mathbf{b}$ at point $\mathbf{p}$ | [2.1](lessons/02-01-rasterizing-lines-and-triangles.md) |
| $2A$ (triangle) | twice the signed area, $E_{\mathbf{ab}}(\mathbf{c})$ | [2.1](lessons/02-01-rasterizing-lines-and-triangles.md) |
| $\alpha, \beta, \gamma$ | barycentric weights of $\mathbf{a}, \mathbf{b}, \mathbf{c}$ | [2.1](lessons/02-01-rasterizing-lines-and-triangles.md) |
| $d(\mathbf{v}) = z + w$ | signed distance to the near plane in clip space | [2.2](lessons/02-02-clipping-and-the-z-buffer.md) |
| $D$ | eye distance $-z_{\text{eye}}$ | [2.2](lessons/02-02-clipping-and-the-z-buffer.md) |
| $\alpha', \beta', \gamma'$ | perspective-correct barycentrics | [2.3](lessons/02-03-perspective-correct-interpolation.md) |
| $\mathbf{n}, \mathbf{l}, \mathbf{v}, \mathbf{r}, \mathbf{h}$ | unit normal; to light; to viewer; mirror of $\mathbf{l}$; halfway vector | [2.4](lessons/02-04-lighting-diffuse-specular-phong.md), [2.5](lessons/02-05-blinn-phong-shading-frequency-materials.md) |
| $k_a, k_d, k_s, p$ | ambient, diffuse, specular reflectance; shininess exponent | [2.4](lessons/02-04-lighting-diffuse-specular-phong.md) |
| $(u, v)$ | texture coordinates in $[0,1]^2$; also patch parameters in [4.4](lessons/04-04-bezier-surface-patches.md) | [2.6](lessons/02-06-texture-mapping-and-filtering.md) |
| $f_x, f_y$ | fractional texel offsets in bilinear filtering | [2.6](lessons/02-06-texture-mapping-and-filtering.md) |
| $L_x, L_y, \rho, \lambda$ | texels per pixel step along screen $x$, $y$; their max; mip level $\log_2\rho$ | [2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md) |
| $d_{\text{map}}, d_{\text{frag}}, b$ | stored shadow-map depth; fragment's light-space depth; bias | [3.2](lessons/03-02-shadow-mapping.md) |
| $\mathbf{o} + t\mathbf{d}$ | a ray: origin, direction, parameter | [3.3](lessons/03-03-ray-casting-and-intersection.md) |
| $\varepsilon$ | self-intersection tolerance | [3.3](lessons/03-03-ray-casting-and-intersection.md) |
| $\eta = \eta_i/\eta_t$, $F$, $F_0$ | index ratio; Fresnel reflectance; its value at normal incidence | [3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md) |
| $S, C_{\text{trav}}, C_{\text{isect}}$ | box surface area; costs of a box test and a primitive test | [3.5](lessons/03-05-acceleration-structures.md) |
| $\omega, d\omega, \theta$ | a direction; solid-angle element (sr); angle from the normal | [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md) |
| $\Phi, E, L$ | flux (W), irradiance (W m$^{-2}$), radiance (W m$^{-2}$ sr$^{-1}$) | [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md) |
| $f_r(\omega_i, \omega_o)$, $\rho$ | BRDF (sr$^{-1}$); albedo | [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md) |
| $p(\omega)$, $\beta$, $q$ | sampling density; path throughput; Russian-roulette survival probability | [3.7](lessons/03-07-monte-carlo-path-tracing.md) |
| $V, E, F, g, \chi$ | vertex, edge, face counts; genus; Euler characteristic | [4.1](lessons/04-01-meshes-and-geometry-representations.md) |
| $\mathbf{P}_i$, $B_{i,n}(t)$ | Bézier control points; Bernstein polynomials | [4.2](lessons/04-02-bezier-curves-de-casteljau.md) |
| $C^k$, $G^1$ | parametric continuity of order $k$; tangent-direction continuity | [4.3](lessons/04-03-splines-and-continuity.md) |
| $\mathbf{P}_{ij}$, $\mathbf{S}(u,v)$, $\mathbf{S}_u, \mathbf{S}_v$ | patch control grid; patch; its partial derivatives | [4.4](lessons/04-04-bezier-surface-patches.md) |
| $\mathbf{Q}, \mathbf{R}, \mathbf{S}, n$ (subdivision) | average adjacent face point; average edge midpoint; old vertex; valence | [4.5](lessons/04-05-subdivision-surfaces.md) |
| $e(s)$, $q$ (rotation) | easing function; unit quaternion | [4.6](lessons/04-06-keyframes-and-rotation-interpolation.md) |
| $G_j, B_j, K_j, w_j$ | joint global transform; bind transform; skinning matrix; skin weight | [4.7](lessons/04-07-skinning-and-deformation.md) |

## Definitions

### Framebuffer

The $W \times H$ array of pixel values the renderer writes, at $b$ bytes per pixel.

$$\text{size} = W\,H\,b \ \text{bytes}$$

Doubling linear resolution quadruples it, and every per-pixel cost with it.

*Introduced:* [1.1](lessons/01-01-the-graphics-pipeline.md)

### Coordinate spaces

The chain every vertex travels in the raster pipeline.

$$\text{object} \xrightarrow{M} \text{world} \xrightarrow{V} \text{eye} \xrightarrow{P} \text{clip} \xrightarrow{\div w} \text{NDC} \xrightarrow{\text{viewport}} \text{screen}$$

*Introduced:* [1.1](lessons/01-01-the-graphics-pipeline.md)

### Rendering cost models

Operation counts that get the *scaling* right (not the constants).

$$\text{raster} \approx 3N + d\,WH$$

$$\text{ray cast, brute force} \approx WH\cdot N$$

$$\text{with a BVH} \approx WH\cdot c\log_2 N$$

Rasterization scales with triangles plus covered pixels; ray casting with pixels times scene search. Resolution works against ray tracing; scene complexity for it.

*Introduced:* [1.1](lessons/01-01-the-graphics-pipeline.md)

### Affine map

A linear map followed by a translation.

$$\mathbf{x} \mapsto A\mathbf{x} + \mathbf{t}$$

Preserves affine combinations (weights summing to 1), so transforming a triangle's vertices transforms its interior.

*Introduced:* [1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md)

### Homogeneous coordinates

Append a coordinate so that translation — and later perspective — becomes a matrix.

$$(x, y) \to (x, y, 1)$$

$$\begin{pmatrix} A & \mathbf{t} \\ \mathbf{0}^T & 1\end{pmatrix}$$

$(X, Y, Z, W)$ with $W \ne 0, 1$ means the point $(X/W, Y/W, Z/W)$.

*Introduced:* [1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md), extended in [1.5](lessons/01-05-projection-orthographic-and-perspective.md)

### Points and vectors

Points are locations ($w = 1$) and get translated; vectors are directions or displacements ($w = 0$) and don't.

| operation | $w$ | result |
|---|---|---|
| point − point | 0 | vector |
| point + vector | 1 | point |
| $\sum \alpha_i \mathbf{p}_i$, $\sum\alpha_i = 1$ | 1 | point (affine combination) |
| point + point | 2 | meaningless alone |

*Introduced:* [1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md)

### Transform about a pivot

Rotate or scale about $\mathbf{c}$ instead of the origin: move $\mathbf{c}$ to the origin, transform, move back.

$$R_{\mathbf{c}} = T(\mathbf{c})\,R\,T(-\mathbf{c})$$

$$\text{translation column} = \mathbf{c} - R\mathbf{c}$$

Every planar rotation-plus-translation with nonzero angle is a pure rotation about some pivot, found from $(I - R)\mathbf{c} = \mathbf{t}$.

*Introduced:* [1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md)

### Axis rotations

Rotation by $\theta$ about a coordinate axis, counter-clockwise looking down the axis toward the origin ($c = \cos\theta$, $s = \sin\theta$).

$$R_x = \begin{pmatrix} 1&0&0\\0&c&-s\\0&s&c\end{pmatrix}$$

$$ R_y = \begin{pmatrix} c&0&s\\0&1&0\\-s&0&c\end{pmatrix}$$

$$R_z = \begin{pmatrix} c&-s&0\\s&c&0\\0&0&1\end{pmatrix}$$

$R_y$'s sign pattern is the odd one out. $R^{-1} = R^T$.

*Introduced:* [1.3](lessons/01-03-3d-transforms-frames-and-normals.md)

### Frame-to-canonical matrix

The matrix that turns frame coordinates into world coordinates: axes and origin as columns.

$$F = \begin{pmatrix}\mathbf{u} & \mathbf{v} & \mathbf{w} & \mathbf{e}\\ 0&0&0&1\end{pmatrix}$$

$$F^{-1} = \begin{pmatrix} R^T & -R^T\mathbf{e}\\ \mathbf{0}^T & 1\end{pmatrix}$$

Reading a world point in the frame: $(\mathbf{u}\cdot(\mathbf{p}-\mathbf{e}),\ \mathbf{v}\cdot(\mathbf{p}-\mathbf{e}),\ \mathbf{w}\cdot(\mathbf{p}-\mathbf{e}))$. Valid only for orthonormal axes.

*Introduced:* [1.3](lessons/01-03-3d-transforms-frames-and-normals.md)

### Normal transformation

Normals must stay perpendicular to the transformed surface, which requires the inverse transpose of the linear block.

$$\mathbf{n}' = \operatorname{normalize}\big((A^{-1})^T\mathbf{n}\big)$$

Equals $A$ for rotations; differs under non-uniform scale. Equivalent: cross product of transformed tangents, which gives $\det A\,(A^{-1})^T\mathbf{n}$.

*Introduced:* [1.3](lessons/01-03-3d-transforms-frames-and-normals.md)

### Look-at frame

The camera frame built from eye $\mathbf{e}$, gaze $\mathbf{g}$ and up hint $\mathbf{t}$.

$$\mathbf{w} = -\frac{\mathbf{g}}{\lVert\mathbf{g}\rVert}$$

$$\mathbf{u} = \frac{\mathbf{t}\times\mathbf{w}}{\lVert\mathbf{t}\times\mathbf{w}\rVert}$$

$$\mathbf{v} = \mathbf{w}\times\mathbf{u}$$

$\mathbf{v}$ is the Gram–Schmidt residual of $\mathbf{t}$ against $\mathbf{w}$. Undefined when $\mathbf{t}\parallel\mathbf{g}$.

*Introduced:* [1.4](lessons/01-04-the-camera-and-view-transform.md)

### View matrix

The inverse of the camera frame: slide the world by $-\mathbf{e}$, then rotate the camera axes onto $x, y, z$.

$$V = \begin{pmatrix} \mathbf{u}^T & -\mathbf{u}\cdot\mathbf{e}\\ \mathbf{v}^T & -\mathbf{v}\cdot\mathbf{e}\\ \mathbf{w}^T & -\mathbf{w}\cdot\mathbf{e}\\ \mathbf{0}^T & 1\end{pmatrix}$$

Visible points have negative eye-space $z$.

*Introduced:* [1.4](lessons/01-04-the-camera-and-view-transform.md)

### Normalized device coordinates

The cube $[-1,1]^3$ the visible volume is mapped to after the perspective divide; $z_{\text{ndc}} = -1$ is the near plane, $+1$ the far plane.

*Introduced:* [1.5](lessons/01-05-projection-orthographic-and-perspective.md)

### Edge function

Which side of a directed edge a point is on, and by how much.

$$E_{\mathbf{ab}}(\mathbf{p}) = (b_x - a_x)(p_y - a_y) - (b_y - a_y)(p_x - a_x)$$

Positive to the left. $E_{\mathbf{ab}}(\mathbf{c}) = 2A > 0$ for counter-clockwise triangles. Steps by $-(b_y - a_y)$ per pixel right and $+(b_x - a_x)$ per pixel up.

*Introduced:* [2.1](lessons/02-01-rasterizing-lines-and-triangles.md)

### Barycentric coordinates

Weights that express a point as an affine combination of a triangle's vertices; each is the opposite sub-triangle's area fraction.

$$\alpha = \frac{E_{\mathbf{bc}}(\mathbf{p})}{2A},\quad \beta = \frac{E_{\mathbf{ca}}(\mathbf{p})}{2A},\quad \gamma = \frac{E_{\mathbf{ab}}(\mathbf{p})}{2A}$$

$$\mathbf{p} = \alpha\mathbf{a} + \beta\mathbf{b} + \gamma\mathbf{c}$$

Inside iff all positive. A ray tracer gets them in eye space directly from Möller–Trumbore.

*Introduced:* [2.1](lessons/02-01-rasterizing-lines-and-triangles.md), [3.3](lessons/03-03-ray-casting-and-intersection.md)

### Top-left rule

Tie-break for pixel centres exactly on an edge: covered only if the edge is a top or left edge, so shared edges are drawn exactly once.

For CCW triangles with $y$ up, directed edge $\mathbf{a}\to\mathbf{b}$ is **top** if $b_y = a_y$ and $b_x < a_x$; **left** if $b_y < a_y$.

Polygons become half-open: they own left and top boundaries, not right and bottom.

*Introduced:* [2.1](lessons/02-01-rasterizing-lines-and-triangles.md)

### Bresenham's algorithm

Integer-only line rasterization for slope in $[0,1]$.

$d \leftarrow 2\Delta y - \Delta x$; for each $x$: plot $(x,y)$; if $d > 0$: $y \mathrel{+}= 1$, $d \mathrel{-}= 2\Delta x$; then $d \mathrel{+}= 2\Delta y$.

Ties ($d = 0$) go to the lower pixel under this convention; DDA with rounding may differ only at exact ties.

*Introduced:* [2.1](lessons/02-01-rasterizing-lines-and-triangles.md)

### Clip volume

The view volume as linear inequalities in clip space, checked before the divide.

$$-w \le x \le w,\qquad -w \le y \le w,\qquad -w \le z \le w$$

Automatically rejects $w < 0$ (behind the eye).

*Introduced:* [2.2](lessons/02-02-clipping-and-the-z-buffer.md)

### Sutherland-Hodgman clipping

Clip a polygon against one plane by walking its edges: keep inside vertices, insert crossings.

$$t = \frac{d(\mathbf{P})}{d(\mathbf{P}) - d(\mathbf{Q})}$$

$$\mathbf{I} = \mathbf{P} + t(\mathbf{Q} - \mathbf{P})$$

$$d = z + w \text{ for the near plane}$$

One vertex outside → quadrilateral; two outside → smaller triangle. Interpolate attributes with the same $t$.

*Introduced:* [2.2](lessons/02-02-clipping-and-the-z-buffer.md)

### Z-buffer

Per-pixel running minimum of depth; a fragment writes colour and depth only if nearer.

Initialise depth to 1. Order-independent result for opaque surfaces; order-dependent cost; transparent surfaces must be sorted.

*Introduced:* [2.2](lessons/02-02-clipping-and-the-z-buffer.md)

### Perspective-correct interpolation

Attributes linear on the surface are not linear on screen, but $a/w$ and $1/w$ are.

$$a = \frac{\sum_k \alpha_k\,a_k/w_k}{\sum_k \alpha_k/w_k}$$

$$\alpha'_k = \frac{\alpha_k/w_k}{\sum_m \alpha_m/w_m}$$

$z_{\text{ndc}}$ needs no correction (affine in $1/w$); eye distance $w$ does (it is the harmonic interpolation).

*Introduced:* [2.3](lessons/02-03-perspective-correct-interpolation.md)

### Reflection vector

The mirror image of the light direction about the normal (both unit, $\mathbf{l}$ pointing to the light).

$$\mathbf{r} = 2(\mathbf{n}\cdot\mathbf{l})\,\mathbf{n} - \mathbf{l}$$

Rotating $\mathbf{n}$ by $\delta$ rotates $\mathbf{r}$ by $2\delta$.

*Introduced:* [2.4](lessons/02-04-lighting-diffuse-specular-phong.md)

### Lambertian diffuse

A matte surface's brightness depends only on the angle to the light.

$$L_d = k_d\,I\max(0, \mathbf{n}\cdot\mathbf{l})$$

Independent of the viewer. Physically $k_d = \rho/\pi$ (see Lambertian BRDF below).

*Introduced:* [2.4](lessons/02-04-lighting-diffuse-specular-phong.md)

### Phong reflection model

Ambient plus, per light, Lambertian diffuse plus a power-cosine lobe around the mirror direction.

$$L = k_a I_a + \sum_j I_j\big[k_d\max(0,\mathbf{n}\cdot\mathbf{l}_j) + k_s\max(0,\mathbf{r}_j\cdot\mathbf{v})^p\big]$$

Specular is zeroed when $\mathbf{n}\cdot\mathbf{l} \le 0$. Half-maximum angle $\alpha_{1/2} = \arccos 2^{-1/p}$ (21.1°, 9.5°, 6.7°, 2.1° for $p$ = 10, 50, 100, 1000).

*Introduced:* [2.4](lessons/02-04-lighting-diffuse-specular-phong.md)

### Blinn-Phong specular

Measure the normal against the halfway vector instead of $\mathbf{r}$ against $\mathbf{v}$.

$$\mathbf{h} = \frac{\mathbf{l} + \mathbf{v}}{\lVert\mathbf{l} + \mathbf{v}\rVert}$$

$$L_s = k_s I\max(0, \mathbf{n}\cdot\mathbf{h})^{p'}$$

For coplanar $\mathbf{n}, \mathbf{l}, \mathbf{v}$, $\angle(\mathbf{n},\mathbf{h}) = \tfrac12\angle(\mathbf{r},\mathbf{v})$, so $p' \approx 4p$ matches; out of plane only approximately.

*Introduced:* [2.5](lessons/02-05-blinn-phong-shading-frequency-materials.md)

### Shading frequency

Where the lighting model is evaluated.

| name | evaluated | interpolated | catches interior highlights |
|---|---|---|---|
| flat | per face | nothing | no |
| Gouraud | per vertex | colour | no |
| Phong shading | per fragment | normal (renormalize) | yes |

Gouraud = lighting in the vertex shader; Phong shading = in the fragment shader.

*Introduced:* [2.5](lessons/02-05-blinn-phong-shading-frequency-materials.md)

### sRGB and linear light

Stored colour values are perceptually encoded; light adds only in linear units.

$$x = \begin{cases} c/12.92 & c \le 0.04045\\ \left(\frac{c + 0.055}{1.055}\right)^{2.4} & \text{otherwise}\end{cases}$$

$$c = \begin{cases} 12.92x & x \le 0.0031308\\ 1.055x^{1/2.4} - 0.055 & \text{otherwise}\end{cases}$$

sRGB 0.5 ↔ linear 0.214; linear 0.5 ↔ sRGB 0.735 (8-bit 188). Decode, light, filter, blend in linear; encode once.

*Introduced:* [2.5](lessons/02-05-blinn-phong-shading-frequency-materials.md)

### Texture coordinates

Where on the image a surface point samples; texel $(i,j)$ of a $W \times H$ texture is centred at $((i+\tfrac12)/W, (j+\tfrac12)/H)$.

$$x = uW - \tfrac12$$

$$y = vH - \tfrac12 \quad (\text{texel centres at integers})$$

Seams need duplicated vertices with different $(u,v)$.

*Introduced:* [2.6](lessons/02-06-texture-mapping-and-filtering.md)

### Wrap modes

What $(u,v)$ outside $[0,1]$ means.

| mode | rule | use |
|---|---|---|
| repeat | $s - \lfloor s\rfloor$ | tiling |
| clamp | $\min(\max(s,0),1)$ | decals, edges |
| mirror | $1 - \lvert (s \bmod 2) - 1\rvert$ | seamless tiling of non-tiling images |

*Introduced:* [2.6](lessons/02-06-texture-mapping-and-filtering.md)

### Bilinear filtering

Blend the four surrounding texels, each weighted by the area of the rectangle opposite it.

$$(1-f_x)(1-f_y)T_{00} + f_x(1-f_y)T_{10} + (1-f_x)f_y T_{01} + f_x f_y T_{11}$$

Fixes magnification blockiness; does nothing for minification.

*Introduced:* [2.6](lessons/02-06-texture-mapping-and-filtering.md)

### Aliasing in images

A pattern above half a cycle per sample reappears as a false low-frequency pattern.

$$f_{\text{alias}} = \lvert f - k f_s\rvert, \quad k = \operatorname{round}(f/f_s)$$

$$\text{Nyquist limit} = \tfrac12 \text{ cycle per pixel}$$

Frequencies just below $f_s$ alias with reversed motion; just above, forward. The alias moves $f/f_{\text{alias}}$ times as fast as the pattern.

*Introduced:* [2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md)

### SSAA and MSAA

Two ways to take $N$ samples per pixel.

| | coverage/depth samples | shader runs | memory |
|---|---|---|---|
| SSAA | $N$ | $N$ per pixel | $N\times$ |
| MSAA | $N$ | ~1 per pixel per triangle | $N\times$ |

MSAA antialiases geometric edges only, not texture or specular aliasing.

*Introduced:* [2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md)

### Mipmap

A pyramid of prefiltered texture copies, each halving the dimensions (never below 1).

$$\text{storage} \approx \tfrac43 \times \text{base}$$

$$\text{levels} = \lfloor\log_2\max(W,H)\rfloor + 1$$

Build it in linear light.

*Introduced:* [2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md)

### Shader inputs

The four kinds of data a shader sees.

| kind | varies per | example |
|---|---|---|
| attribute | vertex | position, normal, uv |
| uniform | draw call | matrices, light position, time |
| varying | fragment (interpolated, perspective-correct) | world normal, uv |
| texture | lookup | albedo, shadow map |

The vertex shader must output clip coordinates, not NDC.

*Introduced:* [3.1](lessons/03-01-the-programmable-gpu-pipeline.md)

### Shader invocation counts

Vertex shader ≈ unique vertices × instances; fragment shader ≈ covered pixels × depth complexity, minus early-z rejections.

Early-z needs a shader that doesn't write depth or `discard`. Front-to-back opaque drawing shades each pixel about once.

*Introduced:* [3.1](lessons/03-01-the-programmable-gpu-pipeline.md)

### Shadow map

A depth buffer rendered from the light (orthographic for directional lights, perspective for spots; a cube of six for point lights), stored as a texture.

*Introduced:* [3.2](lessons/03-02-shadow-mapping.md)

### Shadow test

Lit if the fragment is no farther from the light than what the light saw there, within a bias.

$$(s, t, d_{\text{frag}}) = \tfrac12\!\left(\frac{(P_LV_L\mathbf{p})_{xyz}}{w} + 1\right)$$

$$\text{lit} = [\,d_{\text{frag}} \le d_{\text{map}}(s,t) + b\,]$$

*Introduced:* [3.2](lessons/03-02-shadow-mapping.md)

### Shadow acne and bias

Acne: a sloped lit surface shadows itself because one texel's single depth is compared across a patch of varying depth.

$$\Delta_{\text{depth}} \approx s_{\text{tex}}\tan\theta$$

$$s_{\text{tex}} = \frac{\text{light frustum width}}{\text{map resolution}}$$

Bias must exceed this; slope-scaled bias $b \propto s_{\text{tex}}\tan\theta$. Too much bias: **peter-panning** — occluders closer than $b$ cast no shadow.

*Introduced:* [3.2](lessons/03-02-shadow-mapping.md)

### Percentage-closer filtering

Run the shadow test at each texel of a $k\times k$ neighbourhood and average the booleans.

$$\text{lit} = \frac1{k^2}\sum_{i,j}[\,d_{\text{frag}} \le d_{\text{map}}(s_i,t_j) + b\,]$$

Never average the depths themselves.

*Introduced:* [3.2](lessons/03-02-shadow-mapping.md)

### Primary ray generation

The ray from the eye through the centre of pixel $(i,j)$.

$$\mathbf{d} = s_x\mathbf{u} + s_y\mathbf{v} - \mathbf{w}$$

$$ s_x = \Big(\tfrac{2(i+\frac12)}{W} - 1\Big)a\tan\tfrac\phi2$$

$$s_y = \Big(\tfrac{2(j+\frac12)}{H} - 1\Big)\tan\tfrac\phi2$$

*Introduced:* [3.3](lessons/03-03-ray-casting-and-intersection.md)

### Shadow ray

From hit $\mathbf{p}$ toward a point light at $\mathbf{x}_L$ with $\mathbf{d} = \mathbf{x}_L - \mathbf{p}$: shadowed iff some hit has $\varepsilon < t < 1$.

Offset the origin along $\mathbf{n}$ or use $\varepsilon$; a root of $+10^{-16}$ from the starting surface is a real failure mode.

*Introduced:* [3.3](lessons/03-03-ray-casting-and-intersection.md)

### Whitted ray tracing

Recursive ray tracing: local shading with shadow rays, plus Fresnel-weighted reflected and refracted child rays, to a depth limit.

$$c = \text{local} + F\cdot\text{trace}(\mathbf{r}) + (1-F)\cdot\text{trace}(\mathbf{t})$$

Full tree of depth $D$: up to $2^D - 1$ hits, each with one shadow ray per light. Prune by accumulated weight.

*Introduced:* [3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md)

### Bounding volume hierarchy

A binary tree of axis-aligned boxes over the scene's primitives, each primitive in exactly one leaf; sibling boxes may overlap.

Traversal: skip a node if the ray misses its box or enters it at $t \ge t_{\text{best}}$; visit the nearer child first.

*Introduced:* [3.5](lessons/03-05-acceleration-structures.md)

### Solid angle

The area a set of directions covers on the unit sphere, in steradians.

$$d\omega = \sin\theta\,d\theta\,d\phi$$

$$\text{hemisphere} = 2\pi$$

$$\int_\Omega\cos\theta\,d\omega = \pi$$

$$\text{cone of half-angle }\theta_0 = 2\pi(1 - \cos\theta_0)$$

*Introduced:* [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md)

### Radiance

Power per projected area per solid angle — what a pixel measures; constant along a ray in empty space.

$$L = \frac{d^2\Phi}{dA\cos\theta\,d\omega} \quad [\text{W m}^{-2}\,\text{sr}^{-1}]$$

*Introduced:* [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md)

### Irradiance

Power arriving per unit area from all directions.

$$E = \int_\Omega L_i(\omega)\cos\theta\,d\omega \quad [\text{W m}^{-2}]$$

$$\text{uniform sky } L:\ E = \pi L;\ \text{cap of half-angle }\theta_0:\ E = \pi L\sin^2\theta_0$$

*Introduced:* [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md)

### BRDF

How a surface reflects: outgoing radiance per unit incoming irradiance, for each pair of directions.

$$f_r(\omega_i,\omega_o) = \frac{dL_o(\omega_o)}{L_i(\omega_i)\cos\theta_i\,d\omega_i}\ [\text{sr}^{-1}]$$

Physical BRDFs are non-negative, reciprocal, and energy conserving: $\int_\Omega f_r\cos\theta_o\,d\omega_o \le 1$.

*Introduced:* [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md)

### Lambertian BRDF

The constant BRDF of a perfectly matte surface with albedo $\rho$.

$$f_r = \frac{\rho}{\pi}$$

The $\pi$ is forced by energy conservation. Under a uniform sky of radiance $L$, outgoing radiance is $\rho L$.

*Introduced:* [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md)

### Rendering equation

Outgoing radiance = emitted + hemisphere integral of BRDF × incoming radiance × cosine, where incoming is another surface's outgoing.

$$L_o(\mathbf{x},\omega_o) = L_e(\mathbf{x},\omega_o) + \int_\Omega f_r(\mathbf{x},\omega_i,\omega_o)\,L_i(\mathbf{x},\omega_i)\cos\theta_i\,d\omega_i$$

$$L_i(\mathbf{x},\omega_i) = L_o(\mathbf{x}',-\omega_i)$$

An integral equation. Point lights, Whitted's delta BRDFs and ambient terms are special cases or approximations.

*Introduced:* [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md)

### Monte Carlo estimator

Average $f/p$ over independent samples from density $p$.

$$\hat I_N = \frac1N\sum_k\frac{f(X_k)}{p(X_k)}$$

$$\mathbb{E}[\hat I_N] = I$$

$$\text{sd} = \frac{\sigma}{\sqrt N}$$

Halving noise costs $4\times$ samples. $N$ for relative error $\epsilon$: $(\sigma/(I\epsilon))^2$.

*Introduced:* [3.7](lessons/03-07-monte-carlo-path-tracing.md)

### Importance sampling

Choose $p$ roughly proportional to the integrand; $p \propto f$ gives zero variance. $p$ must be positive wherever $f \ne 0$.

| hemisphere sampling | $p(\omega)$ | sample by | estimator for $\int L\cos\theta\,d\omega$ |
|---|---|---|---|
| uniform | $1/2\pi$ | $\cos\theta = u_1$ | $2\pi L\cos\theta$ |
| cosine-weighted | $\cos\theta/\pi$ | $\cos\theta = \sqrt{u_1}$ | $\pi L$ |

*Introduced:* [3.7](lessons/03-07-monte-carlo-path-tracing.md)

### Path tracing

One random direction per bounce, recursively; the pixel estimate sums throughput × emission along each path.

$$L_o \approx L_e + \frac{f_r\,L_i\cos\theta_i}{p(\omega_i)}$$

$$\beta \leftarrow \beta\cdot\frac{f_r\cos\theta}{p}$$

Add next-event estimation (sample lights directly with a shadow ray). Unbiased; noise is its only error.

*Introduced:* [3.7](lessons/03-07-monte-carlo-path-tracing.md)

### Russian roulette

Terminate paths randomly without bias: continue with probability $q$ and divide by $q$.

$$\mathbb{E}[\hat L] = q\cdot\frac{\hat L_{\text{cont}}}{q} = \hat L_{\text{cont}}$$

$$\text{added variance for a sure } X:\ X^2\frac{1-q}{q}$$

$$\text{mean bounces} = \frac1{1-q}$$

Set $q$ from throughput. A hard depth cap is biased (too dark).

*Introduced:* [3.7](lessons/03-07-monte-carlo-path-tracing.md)

### Explicit and implicit surfaces

Explicit surfaces list points (meshes, parametric patches) — easy to sample and draw, hard to classify inside/outside. Implicit surfaces $f(\mathbf{p}) = 0$ test points — easy to classify and combine, hard to sample.

*Introduced:* [4.1](lessons/04-01-meshes-and-geometry-representations.md)

### Constructive solid geometry

Boolean operations on implicit solids ($f < 0$ inside).

$$f_{A\cup B} = \min(f_A,f_B)$$

$$f_{A\cap B} = \max(f_A,f_B)$$

$$f_{A\setminus B} = \max(f_A,-f_B)$$

Signs are always right; distances are exact only in some regions (e.g. outside a union), otherwise lower bounds.

*Introduced:* [4.1](lessons/04-01-meshes-and-geometry-representations.md)

### Half-edge structure

Each edge split into two opposite directed half-edges storing origin, twin, next and face.

Around a face: $h \leftarrow \text{next}(h)$. Around a vertex: $h \leftarrow \text{next}(\text{twin}(h))$. Across an edge: $\text{face}(\text{twin}(h))$. Requires a manifold mesh.

*Introduced:* [4.1](lessons/04-01-meshes-and-geometry-representations.md)

### Vertex normal

A smooth-shading normal at a vertex; the default averages unnormalized face cross products (area weighting).

$$\mathbf{n}_v = \operatorname{normalize}\sum_{j\ni v}(\mathbf{v}_{j,1} - \mathbf{v}_{j,0})\times(\mathbf{v}_{j,2} - \mathbf{v}_{j,0})$$

Unlike uniform weighting, unaffected by re-triangulating a flat region.

*Introduced:* [4.1](lessons/04-01-meshes-and-geometry-representations.md)

### Bernstein polynomials

The weights of a Bézier curve: non-negative, summing to 1.

$$B_{i,n}(t) = \binom ni (1-t)^{n-i}t^i$$

Cubic weights at $t = \tfrac12$: $(\tfrac18,\tfrac38,\tfrac38,\tfrac18)$; at $t = \tfrac14$: $(0.4219, 0.4219, 0.1406, 0.0156)$.

*Introduced:* [4.2](lessons/04-02-bezier-curves-de-casteljau.md)

### Bezier curve

An affine combination of control points with Bernstein weights.

$$\mathbf{P}(t) = \sum_{i=0}^n B_{i,n}(t)\mathbf{P}_i$$

$$\text{cubic: } (1-t)^3\mathbf{P}_0 + 3(1-t)^2t\,\mathbf{P}_1 + 3(1-t)t^2\mathbf{P}_2 + t^3\mathbf{P}_3$$

*Introduced:* [4.2](lessons/04-02-bezier-curves-de-casteljau.md)

### de Casteljau's algorithm

Evaluate a Bézier curve by $n$ rounds of lerping neighbouring points.

$$\mathbf{P}_i^{(r)} = (1-t)\mathbf{P}_i^{(r-1)} + t\,\mathbf{P}_{i+1}^{(r-1)}$$

$$\mathbf{P}(t) = \mathbf{P}_0^{(n)}$$

The triangle's left edge (top to bottom) and right edge (bottom to top) are the control points of the pieces on $[0,t]$ and $[t,1]$.

*Introduced:* [4.2](lessons/04-02-bezier-curves-de-casteljau.md)

### Bezier curve properties

- Endpoint interpolation: $\mathbf{P}(0) = \mathbf{P}_0$, $\mathbf{P}(1) = \mathbf{P}_n$.
- Endpoint tangents: $\mathbf{P}'(0) = n(\mathbf{P}_1 - \mathbf{P}_0)$, $\mathbf{P}'(1) = n(\mathbf{P}_n - \mathbf{P}_{n-1})$.
- $\mathbf{P}'(t)$ is the degree-$(n-1)$ Bézier curve of $n(\mathbf{P}_{i+1} - \mathbf{P}_i)$; also $n(\mathbf{P}_1^{(n-1)} - \mathbf{P}_0^{(n-1)})$.
- Convex hull and affine invariance. No local control.
- Second derivative at $t = 1$ (cubic): $6(\mathbf{P}_3 - 2\mathbf{P}_2 + \mathbf{P}_1)$.

*Introduced:* [4.2](lessons/04-02-bezier-curves-de-casteljau.md)

### Parametric and geometric continuity

How smoothly two curve pieces join.

$$C^k:\ \mathbf{P}^{(j)}(1) = \mathbf{Q}^{(j)}(0),\ j \le k$$

$$G^1:\ \mathbf{Q}'(0) = \lambda\mathbf{P}'(1),\ \lambda > 0$$

$G^1$ is about shape; $C^1$ is about motion (no speed jump).

*Introduced:* [4.3](lessons/04-03-splines-and-continuity.md)

### Catmull-Rom spline

An interpolating $C^1$ spline whose tangents come from neighbours.

$$\mathbf{m}_i = \tfrac12(\mathbf{p}_{i+1} - \mathbf{p}_{i-1})$$

The segment from $\mathbf{p}_i$ to $\mathbf{p}_{i+1}$ has Bézier control points

$$\mathbf{p}_i,\quad \mathbf{p}_i + \tfrac16(\mathbf{p}_{i+1} - \mathbf{p}_{i-1}),$$

$$\mathbf{p}_{i+1} - \tfrac16(\mathbf{p}_{i+2} - \mathbf{p}_i),\quad \mathbf{p}_{i+1}$$

*Introduced:* [4.3](lessons/04-03-splines-and-continuity.md)

### Uniform cubic B-spline

An approximating, automatically $C^2$ spline with local control (each control point affects four segments).

$$\mathbf{s}_i(t) = \tfrac{(1-t)^3}6\mathbf{c}_i + \tfrac{3t^3-6t^2+4}6\mathbf{c}_{i+1} + \tfrac{-3t^3+3t^2+3t+1}6\mathbf{c}_{i+2} + \tfrac{t^3}6\mathbf{c}_{i+3}$$

At joins: position $\tfrac16(\mathbf{c}_{i+1} + 4\mathbf{c}_{i+2} + \mathbf{c}_{i+3})$, velocity $\tfrac12(\mathbf{c}_{i+3} - \mathbf{c}_{i+1})$, acceleration $\mathbf{c}_{i+1} - 2\mathbf{c}_{i+2} + \mathbf{c}_{i+3}$.

*Introduced:* [4.3](lessons/04-03-splines-and-continuity.md)

### Bicubic Bezier patch

A Bézier curve of Bézier curves over a $4\times4$ control grid.

$$\mathbf{S}(u,v) = \sum_{i,j}B_i(u)B_j(v)\mathbf{P}_{ij}$$

Corners interpolate; boundary curves depend only on their edge rows; convex hull and affine invariance hold.

*Introduced:* [4.4](lessons/04-04-bezier-surface-patches.md)

### Catmull-Clark subdivision

Refine any polygon mesh toward a smooth limit surface.

Face point = average of the face's vertices. Edge point $= \tfrac14(\mathbf{v}_1 + \mathbf{v}_2 + \mathbf{F}_1 + \mathbf{F}_2)$. New vertex

$$\mathbf{S}' = \frac{\mathbf{Q} + 2\mathbf{R} + (n-3)\mathbf{S}}n$$

($\mathbf{Q}$: average adjacent face point; $\mathbf{R}$: average incident edge **midpoint**). Each $k$-gon becomes $k$ quads. Limit: $C^2$ where regular (bicubic B-spline mask $\tfrac1{64}\begin{smallmatrix}1&6&1\\6&36&6\\1&6&1\end{smallmatrix}$), $C^1$ at extraordinary vertices.

*Introduced:* [4.5](lessons/04-05-subdivision-surfaces.md)

### Chaikin corner cutting

Replace each polygon edge $\mathbf{P}\mathbf{Q}$ by $\tfrac34\mathbf{P} + \tfrac14\mathbf{Q}$ and $\tfrac14\mathbf{P} + \tfrac34\mathbf{Q}$; the limit is the uniform quadratic B-spline, touching each edge at its midpoint.

Cubic B-spline curve subdivision instead: edge point $\tfrac12(\mathbf{P}_i + \mathbf{P}_{i+1})$, vertex point $\tfrac18(\mathbf{P}_{i-1} + 6\mathbf{P}_i + \mathbf{P}_{i+1})$, limit position $\tfrac16(\mathbf{P}_{i-1} + 4\mathbf{P}_i + \mathbf{P}_{i+1})$.

*Introduced:* [4.5](lessons/04-05-subdivision-surfaces.md)

### Easing curves

Remap time so motion starts and stops gently.

$$e(s) = 3s^2 - 2s^3$$

$$e'(s) = 6s(1-s)$$

$$e'(0) = e'(1) = 0$$

$$e'(\tfrac12) = 1.5$$

As Bézier curves in (time, value), the time coordinate must be monotonic.

*Introduced:* [4.6](lessons/04-06-keyframes-and-rotation-interpolation.md)

### Euler-angle interpolation

Blending Euler angle triples gives rotations, but not along the shortest path or at constant angular speed, and misbehaves near gimbal lock. Example: $(z,x) = (0,0)\to(180°,180°)$ is a single $180°$ turn about $y$, yet the Euler blend's midpoint is a $120°$ rotation and the path totals about $255°$.

*Introduced:* [4.6](lessons/04-06-keyframes-and-rotation-interpolation.md)

### Slerp and nlerp

Interpolating unit quaternions ($q$ and $-q$ are the same rotation; $\cos\Omega = q_0\cdot q_1$; rotation angle between them is $2\Omega$).

$$\operatorname{slerp} = \frac{\sin((1-s)\Omega)}{\sin\Omega}q_0 + \frac{\sin(s\Omega)}{\sin\Omega}q_1$$

$$\operatorname{nlerp} = \operatorname{normalize}\big((1-s)q_0 + sq_1\big)$$

Slerp: constant angular speed. Nlerp: same path, uneven speed, cheaper. Negate $q_1$ first if $q_0\cdot q_1 < 0$.

*Introduced:* [4.6](lessons/04-06-keyframes-and-rotation-interpolation.md)

### Skeleton forward kinematics

A joint's global transform is its parent's global transform times its local transform.

$$G_j = G_{p(j)}\,L_j, \qquad G_{\text{root}} = L_{\text{root}}$$

Rotation angles accumulate down a planar chain.

*Introduced:* [4.7](lessons/04-07-skinning-and-deformation.md)

### Skinning matrix

The transform from a bone's bind-pose placement to its current placement.

$$K_j = G_j\,B_j^{-1}$$

Identity in the bind pose.

*Introduced:* [4.7](lessons/04-07-skinning-and-deformation.md)

### Linear blend skinning

Blend the skinning matrices of up to four bones per vertex.

$$\mathbf{v}' = \Big(\sum_j w_jK_j\Big)\mathbf{v}$$

$$w_j \ge 0,\ \sum w_j = 1$$

Runs in the vertex shader. Cheap, parallel, and not rigid.

*Introduced:* [4.7](lessons/04-07-skinning-and-deformation.md)

### Candy-wrapper artifact

LBS shrinks skin near a joint because the average of two rotated copies of a point lies inside the circle.

$$\text{radius factor} = \sqrt{1 - 2w(1-w)(1-\cos\theta)}\ \xrightarrow{w = 1/2}\ \cos\frac\theta2$$

0.707 at 90°, 0.5 at 120°, 0 at 180° (the twist collapse). Fixes: twist bones, corrective shapes, dual quaternion skinning.

*Introduced:* [4.7](lessons/04-07-skinning-and-deformation.md)

## Formulas and rules

### Perspective matrix

Symmetric frustum, $s = \cot(\text{fovy}/2)$, aspect $a$, near $n$, far $f$:

$$P = \begin{pmatrix} s/a&0&0&0\\0&s&0&0\\0&0&A&B\\0&0&-1&0\end{pmatrix}$$

$$A = -\frac{f+n}{f-n}$$

$$B = -\frac{2fn}{f-n}$$

$w_{\text{clip}} = -z$; $z_{\text{ndc}} = -A - B/z$, affine in $1/z$; the NDC midpoint depth is at $2fn/(f+n)$. Orthographic box $[l,r]\times[b,t]\times[-f,-n]$:

$$P_{\text{ortho}} = \begin{pmatrix} \frac2{r-l}&0&0&-\frac{r+l}{r-l}\\0&\frac2{t-b}&0&-\frac{t+b}{t-b}\\0&0&-\frac2{f-n}&-\frac{f+n}{f-n}\\0&0&0&1\end{pmatrix}$$

*From* [1.5](lessons/01-05-projection-orthographic-and-perspective.md)

### Viewport transform

NDC to screen pixels ($y$ up) and stored depth.

$$x_s = \frac{x_{\text{ndc}} + 1}2W$$

$$y_s = \frac{y_{\text{ndc}} + 1}2H$$

$$\text{depth} = \frac{z_{\text{ndc}} + 1}2$$

*From* [1.5](lessons/01-05-projection-orthographic-and-perspective.md)

### Depth precision

Stored depth at eye distance $D$, and the smallest separable distance with a $b$-bit buffer:

$$d(D) = \frac f{f-n}\Big(1 - \frac nD\Big)$$

$$\Delta D \approx \frac{(f-n)D^2}{fn}2^{-b} \approx \frac{D^2}{n}2^{-b}$$

$2^{-24} = 5.96\times10^{-8}$. Doubling $n$ halves the error everywhere; $f$ barely matters.

*From* [2.2](lessons/02-02-clipping-and-the-z-buffer.md)

### Mip level selection

$$L_x = \sqrt{(W\,\partial u/\partial x)^2 + (H\,\partial v/\partial x)^2}$$

$$ L_y = \sqrt{(W\,\partial u/\partial y)^2 + (H\,\partial v/\partial y)^2}$$

$$\lambda = \log_2\max(L_x,L_y)$$

Trilinear: bilinear-sample $\lfloor\lambda\rfloor$ and $\lfloor\lambda\rfloor + 1$, weight $\lambda - \lfloor\lambda\rfloor$ on the coarser. Anisotropic: level $\log_2\min(L_x,L_y)$ with about $\max/\min$ probes. $\lambda \le 0$: magnification, level 0.

*From* [2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md)

### Ray-sphere intersection

$$At^2 + Bt + C = 0$$

$$A = \mathbf{d}\cdot\mathbf{d},\ B = 2\mathbf{d}\cdot(\mathbf{o} - \mathbf{c}),\ C = \lVert\mathbf{o} - \mathbf{c}\rVert^2 - r^2$$

$$\mathbf{n} = (\mathbf{p} - \mathbf{c})/r$$

Discriminant $< 0$ miss, $= 0$ graze, $> 0$ two hits; take the smallest $t > \varepsilon$. $C < 0$: origin inside.

*From* [3.3](lessons/03-03-ray-casting-and-intersection.md)

### Ray-plane intersection

$$t = \frac{(\mathbf{p}_0 - \mathbf{o})\cdot\mathbf{n}}{\mathbf{d}\cdot\mathbf{n}}$$

No hit if $\mathbf{d}\cdot\mathbf{n} = 0$ or $t \le 0$. $t$ is a distance only for unit $\mathbf{d}$.

*From* [3.3](lessons/03-03-ray-casting-and-intersection.md)

### Ray-triangle intersection

Möller–Trumbore, with $\mathbf{e}_1 = \mathbf{b} - \mathbf{a}$, $\mathbf{e}_2 = \mathbf{c} - \mathbf{a}$, $\mathbf{s} = \mathbf{o} - \mathbf{a}$:

$$\mathbf{q} = \mathbf{d}\times\mathbf{e}_2,\ \ \mathbf{r} = \mathbf{s}\times\mathbf{e}_1,\ \ \det = \mathbf{e}_1\cdot\mathbf{q}$$

$$\beta = \frac{\mathbf{s}\cdot\mathbf{q}}{\det},\ \ \gamma = \frac{\mathbf{d}\cdot\mathbf{r}}{\det},\ \ t = \frac{\mathbf{e}_2\cdot\mathbf{r}}{\det}$$

Hit iff $\beta,\gamma \ge 0$, $\beta + \gamma \le 1$, $t > \varepsilon$. Weights of $(\mathbf{a},\mathbf{b},\mathbf{c})$: $(1 - \beta - \gamma, \beta, \gamma)$.

*From* [3.3](lessons/03-03-ray-casting-and-intersection.md)

### Reflected ray

Incoming unit $\mathbf{d}$ (toward the surface), normal $\mathbf{n}$ facing it:

$$\mathbf{r} = \mathbf{d} - 2(\mathbf{d}\cdot\mathbf{n})\mathbf{n}$$

*From* [3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md)

### Refracted ray

$\eta = \eta_i/\eta_t$, $\cos\theta_i = -\mathbf{d}\cdot\mathbf{n}$:

$$k = 1 - \eta^2(1 - \cos^2\theta_i)$$

$$\mathbf{t} = \eta\mathbf{d} + (\eta\cos\theta_i - \sqrt k)\,\mathbf{n}$$

$$\cos\theta_t = \sqrt k$$

$k < 0$: total internal reflection (only possible when $\eta > 1$). Leaving an object: flip $\mathbf{n}$ and swap indices. Critical angles: glass (1.5) $41.8°$, water (1.33) $48.8°$, diamond (2.42) $24.4°$. A ray refracted into a sphere never undergoes TIR at the next surface.

*From* [3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md)

### Schlick's approximation

$$F(\theta) \approx F_0 + (1 - F_0)(1 - \cos\theta)^5$$

$$F_0 = \Big(\frac{\eta_i - \eta_t}{\eta_i + \eta_t}\Big)^2$$

$F_0$: air–water 0.020, air–glass 0.040, air–diamond 0.172. $\theta$ on the less dense side. Transmitted weight $1 - F$.

*From* [3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md)

### Slab test

Ray–AABB: per axis $t^{\text{near}}_k, t^{\text{far}}_k$ from $(\ell_k - o_k)/d_k$ and $(h_k - o_k)/d_k$, swapped if $d_k < 0$.

$$t_{\text{enter}} = \max_k t^{\text{near}}_k$$

$$t_{\text{exit}} = \min_k t^{\text{far}}_k$$

$$\text{hit} \iff t_{\text{enter}} \le t_{\text{exit}},\ t_{\text{exit}} \ge 0$$

*From* [3.5](lessons/03-05-acceleration-structures.md)

### Surface area heuristic

$$C_{\text{split}} = C_{\text{trav}} + \frac{S_L}{S_P}N_LC_{\text{isect}} + \frac{S_R}{S_P}N_RC_{\text{isect}}$$

$$C_{\text{leaf}} = N_PC_{\text{isect}}$$

$$S_{a\times b\times c} = 2(ab + bc + ca)$$

Prefer splits that leave empty space outside both children; balance is not the goal.

*From* [3.5](lessons/03-05-acceleration-structures.md)

### Bezier join conditions

Cubic segments $\mathbf{P}_{0..3}$ then $\mathbf{Q}_{0..3}$:

| level | condition |
|---|---|
| $C^0$ | $\mathbf{Q}_0 = \mathbf{P}_3$ |
| $G^1$ | $\mathbf{Q}_1 - \mathbf{Q}_0 = \lambda(\mathbf{P}_3 - \mathbf{P}_2)$, $\lambda > 0$ |
| $C^1$ | $\mathbf{Q}_1 = 2\mathbf{P}_3 - \mathbf{P}_2$ |
| $C^2$ | also $\mathbf{Q}_2 = \mathbf{P}_1 - 2\mathbf{P}_2 + 2\mathbf{Q}_1$ |

A segment traversed in $T$ seconds has time-velocity $\mathbf{Q}'(s)/T$.

*From* [4.3](lessons/04-03-splines-and-continuity.md)

### Cubic Hermite segment

$$\mathbf{p}(t) = (2t^3 - 3t^2 + 1)\mathbf{p}_0 + (t^3 - 2t^2 + t)\mathbf{m}_0$$

$$+\ (-2t^3 + 3t^2)\mathbf{p}_1 + (t^3 - t^2)\mathbf{m}_1$$

Bézier form: $\mathbf{p}_0,\ \mathbf{p}_0 + \mathbf{m}_0/3,\ \mathbf{p}_1 - \mathbf{m}_1/3,\ \mathbf{p}_1$.

*From* [4.3](lessons/04-03-splines-and-continuity.md)

### Patch normal

$$\mathbf{n} = \frac{\mathbf{S}_u\times\mathbf{S}_v}{\lVert\mathbf{S}_u\times\mathbf{S}_v\rVert}$$

$$\text{at the corner } (0,0):\ \mathbf{S}_u = 3(\mathbf{P}_{10} - \mathbf{P}_{00}),\ \mathbf{S}_v = 3(\mathbf{P}_{01} - \mathbf{P}_{00})$$

Vanishes where the tangents are parallel or zero (degenerate corners).

*From* [4.4](lessons/04-04-bezier-surface-patches.md)

### Patch continuity

Patches $A$, $B$ with $A(1,v) = B(0,v)$:

$$C^0:\ \mathbf{B}_{0j} = \mathbf{A}_{3j}$$

$$C^1:\ \mathbf{B}_{1j} = 2\mathbf{A}_{3j} - \mathbf{A}_{2j}\ \text{ for all } j = 0..3$$

Each $C^1$ side fixes two rows of the neighbour. Extraordinary vertices (3 or 5 patches meeting) break the per-line rules.

*From* [4.4](lessons/04-04-bezier-surface-patches.md)

### Euler characteristic of meshes

$$V - E + F = \chi = 2 - 2g$$

Closed triangle mesh: $3F = 2E$, so

$$E = 3(V - \chi), \qquad F = 2(V - \chi), \qquad \text{valence} \to 6$$

Budgets for $V = 10^6$, genus 0: soup 72 MB, indexed set 36 MB, half-edge connectivity 96 MB.

*From* [4.1](lessons/04-01-meshes-and-geometry-representations.md)

### Subdivision counts

One Catmull–Clark step from $(V, E, F)$:

$$V' = V + E + F$$

$$F' = \sum_f k_f = 2E$$

$$E' = 4E$$

$$\chi' = \chi$$

After the first step all faces are quads and $F$, $E$ grow $4\times$ per step. Cube: $(8,12,6)\to(26,48,24)\to(98,192,96)$. Octahedron gives the same counts after one step (dual polyhedra). A raised spike on a flat valence-4 grid drops to $\tfrac9{16}$ of its height in one step.

*From* [4.5](lessons/04-05-subdivision-surfaces.md)

### Useful numbers

| quantity | value | from |
|---|---|---|
| 1080p / 1440p / 4K pixels | 2,073,600 / 3,686,400 / 8,294,400 | [1.1](lessons/01-01-the-graphics-pipeline.md) |
| $\cot 30°$, $\cot 45°$ | 1.7321, 1 | [1.5](lessons/01-05-projection-orthographic-and-perspective.md) |
| smoothstep at $s = \tfrac14, \tfrac13$ | 0.15625, 0.2593 | [4.6](lessons/04-06-keyframes-and-rotation-interpolation.md) |
| $0.96^{20}$, $0.9899^{80}$ | 0.442, 0.446 | [2.5](lessons/02-05-blinn-phong-shading-frequency-materials.md) |
| cosine-lobe integral $\int_\Omega\cos^p\theta\cos\theta\,d\omega$ | $2\pi/(p+2)$: 0.524, 0.121, 0.062 for $p$ = 10, 50, 100 | [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md) |
| Sun: solid angle, radiance | $6.8\times10^{-5}$ sr, $1.47\times10^7$ W m$^{-2}$ sr$^{-1}$ | [3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md) |
| courtyard ($\theta < 60°$) one-sample relative error | uniform 1.036, cosine-weighted 0.577 | [3.7](lessons/03-07-monte-carlo-path-tracing.md) |
| pruned Whitted tree ($F = 0.04$, depth 5, threshold 0.01 / 0.001) | 15 / 25 nodes (full: 31) | [3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md) |

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Operation counting and Big-O | [`programming-foundations` 1.4](../programming-foundations/lessons/01-04-big-o-counting-operations.md) |
| Binary trees and balanced trees | [`programming-foundations` 3.1](../programming-foundations/lessons/03-01-binary-trees-and-binary-search-trees.md), [3.2](../programming-foundations/lessons/03-02-balanced-trees-the-idea.md) |
| Matrix columns are images of basis vectors; composition is multiplication | [`linalg-refresher` 2.1](../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md) |
| Inverses; $(AB)^{-1} = B^{-1}A^{-1}$ | [`linalg-refresher` 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) |
| Determinant as signed area/volume scale; Cramer's rule | [`linalg-refresher` 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Cross product, orientation, right-handedness | [`linalg-refresher` 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) |
| Dot product, orthogonal projection | [`linalg-refresher` 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md), [4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Gram–Schmidt orthogonalization | [`linalg-refresher` 4.3](../linalg-refresher/lessons/04-03-gram-schmidt-qr.md) |
| Eigenvalues and powers of a matrix | [`linalg-refresher` 3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Rotation matrices are orthonormal, $R^{-1} = R^T$, $\det R = 1$ | [`robotics` 1.2](../robotics/lessons/01-02-rotation-matrices.md) |
| Euler angles, gimbal lock, axis–angle, Rodrigues | [`robotics` 1.3](../robotics/lessons/01-03-euler-fixed-angles-axis-angle.md) |
| Unit quaternions, double cover, slerp derivation | [`robotics` 1.4](../robotics/lessons/01-04-quaternions.md) |
| Rigid homogeneous transforms and their closed-form inverse | [`robotics` 1.5](../robotics/lessons/01-05-homogeneous-transforms.md) |
| Forward kinematics of serial chains | [`robotics` 1.6](../robotics/lessons/01-06-denavit-hartenberg-forward-kinematics.md) |
| Law of reflection, Snell's law, critical angle (scalar forms) | [`waves-optics` 3.1](../waves-optics/lessons/03-01-reflection-refraction-snell.md) |
| Sampling theorem and aliasing of 1D signals | [`communications` 2.1](../communications/lessons/02-01-sampling-theorem-aliasing.md) |
| Spherical coordinates and the Jacobian $\sin\theta$ | [`calc-refresher` 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) |
| Law of large numbers | [`probability-theory` 4.2](../probability-theory/lessons/04-02-laws-of-large-numbers.md) |
| Central limit theorem ($1/\sqrt N$ error) | [`probability-theory` 4.5](../probability-theory/lessons/04-05-central-limit-theorem.md) |
| Importance-sampling reweighting | [`reinforcement-learning` 2.6](../reinforcement-learning/lessons/02-06-off-policy-learning-importance-sampling.md) |
| Euler's formula $V - E + F = 2$ for planar graphs | [`graph-theory` 3.1](../graph-theory/lessons/03-01-planar-euler-formula.md) |
| Interpolating cubic splines (natural, clamped) | [`numerical-analysis` 2.2](../numerical-analysis/lessons/02-02-runge-splines.md) |
| Floating-point roundoff | [`numerical-analysis` 1.1](../numerical-analysis/lessons/01-01-floating-point-roundoff.md), [`computer-architecture` 2.3](../computer-architecture/lessons/02-03-floating-point-ieee-754.md) |

## Pitfalls

### Transform traps

- Reading $TRS\mathbf{p}$ left to right: with column vectors the **rightmost** transform happens first. *([1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md))*
- A rotation matrix rotates about the **origin**; use $T(\mathbf{c})RT(-\mathbf{c})$ for a pivot. *([1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md))*
- Storing directions with $w = 1$ lets translations corrupt them. *([1.2](lessons/01-02-2d-transforms-homogeneous-coordinates.md))*
- Transforming normals with $M$ works until a non-uniform scale appears; use $(A^{-1})^T$ and renormalize. *([1.3](lessons/01-03-3d-transforms-frames-and-normals.md), [3.1](lessons/03-01-the-programmable-gpu-pipeline.md))*
- The closed-form frame inverse needs orthonormal axes. *([1.3](lessons/01-03-3d-transforms-frames-and-normals.md))*
- An up hint parallel to the gaze gives $\mathbf{0}/0$; orbit cameras flip near the poles. *([1.4](lessons/01-04-the-camera-and-view-transform.md))*
- The camera looks down $-\mathbf{w}$, and $V$ moves the world, not the camera. *([1.4](lessons/01-04-the-camera-and-view-transform.md))*

### Projection and visibility traps

- The projection happens in the divide, not the matrix; points behind the eye have $w < 0$ and flip. Clip before dividing. *([1.5](lessons/01-05-projection-orthographic-and-perspective.md), [2.2](lessons/02-02-clipping-and-the-z-buffer.md))*
- NDC depth is affine in $1/z$, not $z$; $n = 0$ destroys the depth buffer. *([1.5](lessons/01-05-projection-orthographic-and-perspective.md))*
- Z-fighting is fixed by raising the near plane, not lowering the far plane. *([2.2](lessons/02-02-clipping-and-the-z-buffer.md))*
- The z-buffer makes opaque results order-independent, not costs, and not transparency. *([2.2](lessons/02-02-clipping-and-the-z-buffer.md))*
- Coverage is decided at the pixel **centre**; thin slivers can vanish. *([2.1](lessons/02-01-rasterizing-lines-and-triangles.md))*
- Clockwise triangles fail an all-positive edge test; top-left definitions depend on winding and $y$ direction. *([2.1](lessons/02-01-rasterizing-lines-and-triangles.md))*

### Interpolation traps

- Screen-linear interpolation of anything but $z_{\text{ndc}}$ is wrong under perspective; interpolate $a/w$ and $1/w$. *([2.3](lessons/02-03-perspective-correct-interpolation.md))*
- Divide by the interpolated $1/w$, not by an interpolated $w$. *([2.3](lessons/02-03-perspective-correct-interpolation.md))*
- Interpolated unit normals are shorter than 1; renormalize per fragment. *([2.5](lessons/02-05-blinn-phong-shading-frequency-materials.md), [3.1](lessons/03-01-the-programmable-gpu-pipeline.md))*
- Projection preserves lines but not midpoints. *([1.5](lessons/01-05-projection-orthographic-and-perspective.md))*

### Shading traps

- $\mathbf{l}$ points **to** the light; flipping it zeroes every lit surface. *([2.4](lessons/02-04-lighting-diffuse-specular-phong.md))*
- Lambertian brightness doesn't depend on the viewer. *([2.4](lessons/02-04-lighting-diffuse-specular-phong.md))*
- Clamping to $[0,1]$ discards energy and shifts hue; tone-map instead. *([2.4](lessons/02-04-lighting-diffuse-specular-phong.md))*
- Tilting a normal by $\delta$ moves the highlight by $2\delta$. *([2.4](lessons/02-04-lighting-diffuse-specular-phong.md))*
- "Phong shading" (per-fragment) is not the "Phong model"; Gouraud misses highlights inside triangles. *([2.5](lessons/02-05-blinn-phong-shading-frequency-materials.md))*
- Lighting, filtering and averaging sRGB values directly makes midtones and antialiased edges too dark. *([2.5](lessons/02-05-blinn-phong-shading-frequency-materials.md), [2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md))*
- A Lambertian BRDF is $\rho/\pi$, not $\rho$; unnormalized Phong lobes lose energy as $p$ rises. *([3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md))*
- Irradiance (received per area) is not radiance (along one ray). *([3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md))*

### Texture and sampling traps

- $u = 0$ is a texel's **edge**, not its centre. *([2.6](lessons/02-06-texture-mapping-and-filtering.md))*
- Bilinear filtering doesn't fix minification. *([2.6](lessons/02-06-texture-mapping-and-filtering.md))*
- Planar and spherical parameterizations distort by construction. *([2.6](lessons/02-06-texture-mapping-and-filtering.md))*
- Higher resolution raises the Nyquist limit but doesn't stop aliasing; MSAA doesn't fix texture aliasing. *([2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md))*
- Texture lookups in divergent branches get garbage derivatives and the wrong mip level. *([2.7](lessons/02-07-aliasing-supersampling-and-mipmaps.md))*

### GPU and shadow traps

- The vertex shader outputs clip coordinates; varyings arrive interpolated. *([3.1](lessons/03-01-the-programmable-gpu-pipeline.md))*
- `discard` disables early-z and usually costs work. *([3.1](lessons/03-01-the-programmable-gpu-pipeline.md))*
- Shadow acne is a map-**resolution** problem, not depth bits. *([3.2](lessons/03-02-shadow-mapping.md))*
- Filter shadow tests, not shadow depths. *([3.2](lessons/03-02-shadow-mapping.md))*
- Point lights need six shadow passes. *([3.2](lessons/03-02-shadow-mapping.md))*

### Ray tracing traps

- The nearest hit is the smallest root **above** $\varepsilon$; negative roots are behind. *([3.3](lessons/03-03-ray-casting-and-intersection.md))*
- $t > 0$ doesn't reject the starting surface; roundoff gives tiny positive roots. *([3.3](lessons/03-03-ray-casting-and-intersection.md))*
- Shadow rays only count hits before the light ($t < 1$). *([3.3](lessons/03-03-ray-casting-and-intersection.md))*
- Refraction formulas assume $\mathbf{n}$ faces the incoming ray; flip and swap indices on exit. *([3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md))*
- Child rays need offsets too — refracted rays along $-\mathbf{n}$. *([3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md))*
- Whitted tracing has no diffuse interreflection, soft shadows or caustics. *([3.4](lessons/03-04-whitted-ray-tracing-reflection-refraction.md))*
- BVH children overlap: a hit in the near child isn't final. *([3.5](lessons/03-05-acceleration-structures.md))*
- Balanced BVH splits can be much worse than SAH splits. *([3.5](lessons/03-05-acceleration-structures.md))*
- Slab test with $o_k$ on a face and $d_k = 0$ produces NaN. *([3.5](lessons/03-05-acceleration-structures.md))*

### Monte Carlo traps

- More samples reduce variance, not bias; a hard depth cap is biased. *([3.7](lessons/03-07-monte-carlo-path-tracing.md))*
- An importance density must be positive wherever the integrand is. *([3.7](lessons/03-07-monte-carlo-path-tracing.md))*
- Russian roulette adds noise per path; it saves noise per unit time. *([3.7](lessons/03-07-monte-carlo-path-tracing.md))*
- Small lights need direct sampling or the image fills with fireflies. *([3.7](lessons/03-07-monte-carlo-path-tracing.md))*
- The rendering equation is an integral equation, not an integral. *([3.6](lessons/03-06-radiometry-brdfs-rendering-equation.md))*

### Geometry traps

- $F \approx 2V$ needs a closed mesh; use the right $\chi$. *([4.1](lessons/04-01-meshes-and-geometry-representations.md))*
- CSG `min`/`max` keep signs, not distances. *([4.1](lessons/04-01-meshes-and-geometry-representations.md))*
- Non-manifold edges break half-edge structures. *([4.1](lessons/04-01-meshes-and-geometry-representations.md))*
- Bézier curves pass through only their end control points; $t$ is not arc length; no local control. *([4.2](lessons/04-02-bezier-curves-de-casteljau.md))*
- $G^1$ joins can still lurch; degenerate $C^1$ joins can corner; Catmull–Rom is only $C^1$. *([4.3](lessons/04-03-splines-and-continuity.md))*
- Patch edge control points are handles; $\mathbf{S}_u\times\mathbf{S}_v$ can vanish; $C^1$ must hold on all four cross-boundary lines. *([4.4](lessons/04-04-bezier-surface-patches.md))*
- Subdivision surfaces don't pass through cage vertices; only original irregular vertices stay irregular; $(n-3)$ is not a typo. *([4.5](lessons/04-05-subdivision-surfaces.md))*

### Animation traps

- $q$ and $-q$ are the same rotation; forgetting the sign check takes the long way. *([4.6](lessons/04-06-keyframes-and-rotation-interpolation.md))*
- Blending rotation matrices shrinks; blending Euler angles detours. *([4.6](lessons/04-06-keyframes-and-rotation-interpolation.md))*
- Linear keyframes jump in velocity; uneven Catmull–Rom keys can overshoot. *([4.6](lessons/04-06-keyframes-and-rotation-interpolation.md))*
- The skinning matrix is $G_jB_j^{-1}$, not $G_j$. *([4.7](lessons/04-07-skinning-and-deformation.md))*
- Normalized weights don't prevent LBS volume loss; plain quaternion slerp can't blend a joint's pivot translation. *([4.7](lessons/04-07-skinning-and-deformation.md))*

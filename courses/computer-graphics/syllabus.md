# Computer Graphics — Syllabus

> Computer Science · Tier 2 · 26 lessons · Prereqs: [linalg-refresher](../linalg-refresher/syllabus.md), [programming-foundations](../programming-foundations/syllabus.md) · Roadmap id: `computer-graphics`

## Goal

Build the full mental model of how a 3D scene becomes pixels — both the real-time rasterization pipeline (transform, project, rasterize, shade) and the physically-motivated ray-tracing pipeline (intersect, bounce, integrate light). You'll understand *why* each stage exists, derive the core math (homogeneous transforms, projection, perspective-correct interpolation, the rendering equation), and reason about meshes, curves, surfaces, and a taste of animation. This course deliberately skips the minutiae of any one GPU API (Vulkan/Metal/OpenGL call sequences) and the engineering of production render engines — it teaches the ideas those tools implement.

**How problems work.** Like every CS course here, graphics is taught analytically: there is no code execution and no drawing input. Every problem resolves to **a number, a vector or matrix, a pixel list, a classification with its named reason, a short table, or a hand derivation**. "Write a shader" becomes "find the bug in this shader" or "say which of these values is a uniform, an attribute or a varying, and why". Diagrams appear in lessons; they are never the deliverable.

**Scope discipline.** Several built courses already own pieces of this subject. This course uses them freely and cites them rather than re-deriving:

| Topic | Owner | What this course adds |
|---|---|---|
| Rotation matrices, Euler angles, axis–angle, Rodrigues | [`robotics` 1.2–1.3](../robotics/lessons/01-02-rotation-matrices.md) | the graphics conventions, rotation about a pivot, transforming **normals** |
| Quaternions and slerp | [`robotics` 1.4](../robotics/lessons/01-04-quaternions.md) | keyframe interpolation, nlerp vs slerp cost, why Euler-angle interpolation misbehaves |
| Rigid homogeneous transforms $SE(3)$ | [`robotics` 1.5](../robotics/lessons/01-05-homogeneous-transforms.md) | non-rigid transforms, the camera, **projective** transforms and the $w$-divide |
| Forward kinematics of a chain | [`robotics` 1.6](../robotics/lessons/01-06-denavit-hartenberg-forward-kinematics.md) | skeletons as a scene graph, bind poses, linear blend skinning |
| Snell's law and total internal reflection (scalar) | [`waves-optics` 3.1](../waves-optics/lessons/03-01-reflection-refraction-snell.md) | the **vector** reflection/refraction formulas, Schlick's Fresnel approximation, recursive ray trees |
| Sampling theorem and aliasing | [`communications` 2.1](../communications/lessons/02-01-sampling-theorem-aliasing.md) | aliasing in 2D images and textures, supersampling cost, mipmaps and level selection |
| Interpolating cubic splines | [`numerical-analysis` 2.2](../numerical-analysis/lessons/02-02-runge-splines.md) | parametric curves, Bézier and B-spline bases, $C^k$ vs $G^k$ continuity |
| Law of large numbers; importance sampling | [`probability-theory` 4.2](../probability-theory/lessons/04-02-laws-of-large-numbers.md), [`reinforcement-learning` 2.6](../reinforcement-learning/lessons/02-06-off-policy-learning-importance-sampling.md) | the Monte Carlo estimator of an integral over the hemisphere, cosine-weighted sampling, Russian roulette |
| Euler's formula $V - E + F = 2$ | [`graph-theory` 3.1](../graph-theory/lessons/03-01-planar-euler-formula.md) | mesh-size budgets and why a closed triangle mesh has $F \approx 2V$ |
| Floating point | [`computer-architecture` 2.3](../computer-architecture/lessons/02-03-floating-point-ieee-754.md) | depth-buffer precision, shadow acne, self-intersection epsilons |

## Dangerous Checklist

When you finish, you can:

- [ ] Compose a model→view→projection transform in homogeneous coordinates and explain what each matrix does to a point
- [ ] Transform a surface normal correctly under a non-uniform scale
- [ ] Derive the perspective projection matrix and explain why the w-divide creates foreshortening
- [ ] Scan-convert a triangle with edge functions and barycentric coordinates, including the top-left fill rule
- [ ] Explain how the z-buffer and clipping resolve visibility, and estimate depth-buffer precision
- [ ] Interpolate a vertex attribute perspective-correctly and quantify the error of the naive version
- [ ] Compute a shaded color from the Phong and Blinn–Phong models given lights, a normal, and material parameters
- [ ] Sample a texture bilinearly, pick a mip level, and price a supersampling choice
- [ ] Trace the flow of data through a programmable GPU pipeline and say what a vertex vs. fragment shader does
- [ ] Explain shadow mapping and diagnose acne and peter-panning
- [ ] Intersect a ray with a sphere, plane, and triangle, and spawn correct reflection and refraction rays
- [ ] Estimate the cost of a BVH traversal and choose a split with the surface area heuristic
- [ ] Write the rendering equation and explain how Monte Carlo path tracing estimates it
- [ ] Evaluate a Bézier curve with de Casteljau's algorithm and state the continuity conditions between spline segments
- [ ] Explain how subdivision refines a mesh and how skinning deforms one for animation
- [ ] Estimate the cost of a rendering choice (samples, resolution, bounces) and its quality trade-off

## Modules

### Module 1: Transformations & Viewing

The linear algebra of putting objects in a world and looking at them — from 2D rotations through the full model/view/projection chain.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The Graphics Pipeline in One Picture | Name every stage from vertices to pixels and know which module owns it | rasterization vs. ray tracing, object-order vs. image-order, framebuffer, cost scaling |
| 1.2 | 2D Transforms & Homogeneous Coordinates | Represent translation, rotation, scale as a single 3×3 matrix and compose them | linear maps, affine maps, homogeneous coordinates, points vs. vectors, rotation about a pivot |
| 1.3 | 3D Transforms, Frames & Normals | Move between coordinate frames in 3D and transform normals correctly | 4×4 matrices, frame-to-canonical matrices, rigid inverse, the inverse transpose |
| 1.4 | The Camera & the View Transform | Point a virtual camera and derive the world→camera (look-at) matrix | eye/target/up, building an orthonormal frame, the view matrix, degenerate up vectors |
| 1.5 | Projection: Orthographic & Perspective | Derive the perspective matrix and explain the w-divide and foreshortening | view frustum, projective divide, near/far planes, NDC, the viewport transform |

**Boss problem 1:** A cube of side 2 is centered at world position $(4, 0, -10)$. The camera sits at the origin looking down $-z$ with up $= (0,1,0)$, a $90°$ vertical field of view, aspect ratio 1, near plane $1$, far plane $100$. Build the full model→view→projection matrix as a product of named factors, then push the cube's near-top-right corner through it and report its normalized-device coordinates. State which clip test (if any) it fails.

### Module 2: Rasterization & Shading

How a triangle becomes lit, textured pixels: scan conversion, visibility, interpolation, local lighting, and sampling.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Rasterizing Lines & Triangles | Turn a triangle into pixels using edge functions | DDA/Bresenham, edge functions, barycentric coordinates, bounding box, top-left rule |
| 2.2 | Clipping & the Z-Buffer | Cull and clip geometry in clip space and resolve which surface is visible | clipping before the divide, Sutherland–Hodgman, depth buffer, depth precision, z-fighting |
| 2.3 | Perspective-Correct Interpolation | Interpolate attributes so they stay attached to the surface under perspective | screen-space vs. eye-space linearity, interpolating $a/w$ and $1/w$ |
| 2.4 | Lighting: Diffuse, Specular & Phong | Compute a surface color from lights and normals with the Phong model | Lambert's cosine law, reflection vector, specular exponent, ambient term |
| 2.5 | Blinn–Phong, Shading Frequency & Materials | Choose Blinn–Phong vs. Phong and shade per-vertex vs. per-fragment | halfway vector, Gouraud vs. Phong shading, material parameters, linear vs. sRGB |
| 2.6 | Texture Mapping & Filtering | Map an image onto a surface and reconstruct it between texels | uv coordinates, parameterizations, wrap modes, nearest vs. bilinear filtering |
| 2.7 | Aliasing, Supersampling & Mipmaps | Pick the right detail level to avoid aliasing and price the fix | jaggies and moiré, SSAA vs. MSAA, mipmap pyramid, level selection, trilinear, anisotropy |

**Boss problem 2:** A triangle has screen-space vertices with known depths and per-vertex uv coordinates. For a given interior pixel, (a) compute its barycentric weights, (b) find the perspective-correct interpolated uv, and (c) given a point light, surface normal, and material $(k_d, k_s, p)$, compute the Blinn–Phong color at that pixel. Then explain in one sentence why naive linear uv interpolation would have textured it wrong.

### Module 3: The GPU Pipeline, Ray Tracing & Global Illumination

From how real hardware runs the pipeline to the physically-motivated alternative that chases light itself.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Programmable GPU Pipeline & Shaders | Trace data through vertex/fragment shaders and say why the GPU is parallel | attributes/uniforms/varyings, invocation counts, overdraw, early-z, data parallelism |
| 3.2 | Shadow Mapping | Render shadows by asking the light what it can see | two-pass rendering, light-space depth test, acne and bias, peter-panning, PCF |
| 3.3 | Ray Casting & Ray–Object Intersection | Shoot rays from the eye and intersect spheres, planes, and triangles | primary-ray generation, sphere/plane/triangle intersection, shadow rays, epsilons |
| 3.4 | Whitted Ray Tracing: Reflection & Refraction | Spawn recursive reflection and refraction rays and weight them with Fresnel | vector reflection and refraction, total internal reflection, Schlick, ray-tree cost |
| 3.5 | Acceleration Structures | Cut intersection cost from linear to logarithmic with a spatial hierarchy | slab test, BVH, surface area heuristic, traversal, object vs. space partitioning |
| 3.6 | Radiometry, BRDFs & the Rendering Equation | Say precisely what a pixel measures and write the equation light obeys | solid angle, irradiance, radiance, BRDF, energy conservation, the rendering equation |
| 3.7 | Monte Carlo Path Tracing | Estimate the rendering equation by sampling and price its noise | Monte Carlo estimator, cosine-weighted sampling, Russian roulette, next-event estimation, $1/\sqrt N$ |

**Boss problem 3:** A ray leaves the eye and hits a glass sphere (index of refraction $n = 1.5$) in a scene with one point light. (a) Find the intersection point and surface normal. (b) Construct the reflected ray and the refracted ray, checking for total internal reflection. (c) Write the local (rendering-equation) integral for outgoing radiance at the hit point, then explain how a path tracer would estimate it with a single sampled bounce and why averaging many samples converges to the true value.

### Module 4: Geometric Modeling & Animation

Where the geometry comes from — meshes, smooth curves and surfaces, and a taste of making them move.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Meshes & Geometry Representations | Store and query a triangle mesh and choose between geometry representations | indexed face sets, half-edge, Euler characteristic, vertex normals, implicit vs. explicit |
| 4.2 | Bézier Curves & de Casteljau | Evaluate and reason about a Bézier curve geometrically | control points, Bernstein basis, de Casteljau's algorithm, derivatives, convex hull property |
| 4.3 | Splines & Continuity | Chain curve segments into smooth splines with controlled continuity | $C^0/C^1/C^2$ and $G^1$, Hermite, Catmull–Rom, uniform cubic B-splines, local control |
| 4.4 | Bézier Surface Patches | Extend curves to tensor-product patches and stitch them smoothly | bicubic patches, evaluation, surface normals, cross-boundary continuity |
| 4.5 | Subdivision Surfaces | Refine a coarse cage into a smooth limit surface | corner cutting, Catmull–Clark rules, extraordinary vertices, face-count growth |
| 4.6 | Keyframes & Rotation Interpolation | Interpolate positions and orientations between keyframes | easing, Hermite timing, Euler-angle interpolation, slerp vs. nlerp |
| 4.7 | Skinning & Deformation | Deform a mesh with a skeleton and diagnose the artifacts | skeletons, bind pose, linear blend skinning, candy-wrapper collapse |

**Boss problem 4:** You're given a cubic Bézier curve by its four control points. (a) Use de Casteljau's algorithm to evaluate the point at $t = 0.5$ and identify the tangent direction there. (b) You want to attach a second cubic segment after it with $C^1$ continuity — state the constraint its first two control points must satisfy. (c) Briefly contrast how a subdivision surface and a Bézier patch would each produce a smooth surface from a coarse cage, and name one reason a modeler might prefer subdivision.

## Sources of truth

- *Fundamentals of Computer Graphics* (Marschner & Shirley) — overall structure, rasterization, and ray-tracing conventions.
- Pharr, Jakob & Humphreys, *Physically Based Rendering* — the rendering equation, BRDFs, and Monte Carlo path tracing rigor.
- Akenine-Möller et al., *Real-Time Rendering* — the GPU pipeline, shading frequency, and texture/antialiasing conventions.
- Column-vector, right-multiplied convention throughout ($\mathbf{p}' = M\mathbf{p}$), right-handed coordinates, matching `linalg-refresher`. The camera looks down $-z$; normalized device coordinates run from $-1$ to $1$ on all three axes (the OpenGL convention); screen space has $y$ **up** and pixel $(i,j)$ has its centre at $(i+\tfrac12,\ j+\tfrac12)$.

## Syllabus revisions

**2026-09-14 — built out from ~20 to 26 lessons.** Six changes, all made before writing:

- **Old 2.2 split into 2.2 and 2.3.** Clipping, the depth buffer and perspective-correct interpolation are three separable skills; perspective-correct interpolation alone carries Boss problem 2(b) and deserves its derivation.
- **Old 2.5 split into 2.6 and 2.7.** Texture mapping (parameterization and reconstruction) and antialiasing (sampling rate and prefiltering) are different problems that share a picture. The sampling theorem itself is cited to [`communications` 2.1](../communications/lessons/02-01-sampling-theorem-aliasing.md).
- **New 3.2, shadow mapping.** The original outline had shadows only as ray-traced shadow rays, leaving the real-time pipeline with no visibility-from-the-light technique at all — the single most common multi-pass algorithm on a GPU.
- **Old 3.5 split into 3.6 and 3.7.** Radiometry and the BRDF are unowned library-wide, and "write the rendering equation" is empty without them; the Monte Carlo estimator, its variance and the checklist's cost-of-samples item are a lesson of their own.
- **Old 4.4 split into 4.4 and 4.5**, separating tensor-product patches from subdivision.
- **Old 4.5 split into 4.6 and 4.7**, separating interpolation in time (keyframes, rotations) from deformation in space (skinning).

**Boss-problem audit.** All four verified. Boss 1 gives NDC $(5/9,\ 1/9,\ 709/891 \approx 0.796)$ for the corner $(5,1,-9)$ and **passes every clip test** — "if any" is a legitimate trap, not a defect. Bosses 2–4 are stated without numbers, so they are templates for quiz synthesis rather than fixed answers.

**Answer-input doctrine**, per the CS build brief: problems never ask for a drawing or a program. Problems whose answer is not unique (a counterexample mesh, a parameter choice that exhibits an artifact) open their solution with a one-line **accept criterion** before the worked exemplar.

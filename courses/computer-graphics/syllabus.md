# Computer Graphics — Syllabus

> Computer Science · Tier 2 · ~20 lessons · Prereqs: [linalg-refresher](../linalg-refresher/syllabus.md), [programming-foundations](../programming-foundations/syllabus.md) · Roadmap id: `computer-graphics`

## Goal

Build the full mental model of how a 3D scene becomes pixels — both the real-time rasterization pipeline (transform, project, rasterize, shade) and the physically-motivated ray-tracing pipeline (intersect, bounce, integrate light). You'll understand *why* each stage exists, derive the core math (homogeneous transforms, projection, the rendering equation), and reason about meshes, curves, and a taste of animation. This course deliberately skips the minutiae of any one GPU API (Vulkan/Metal/OpenGL call sequences) and the engineering of production render engines — it teaches the ideas those tools implement.

## Dangerous Checklist

When you finish, you can:

- [ ] Compose a model→view→projection transform in homogeneous coordinates and explain what each matrix does to a point
- [ ] Derive the perspective projection matrix and explain why the w-divide creates foreshortening
- [ ] Scan-convert a triangle with barycentric coordinates and interpolate attributes correctly across it
- [ ] Explain how the z-buffer and clipping resolve visibility and cull off-screen geometry
- [ ] Compute a shaded color from the Blinn–Phong model given lights, a normal, and material parameters
- [ ] Sample a texture with correct perspective-correct interpolation and pick a mip level
- [ ] Trace the flow of data through a programmable GPU pipeline and say what a vertex vs. fragment shader does
- [ ] Intersect a ray with a sphere, plane, and triangle, and spawn correct reflection and refraction rays
- [ ] Write the rendering equation and explain how Monte Carlo path tracing estimates it
- [ ] Evaluate a Bézier curve with de Casteljau's algorithm and state the continuity conditions between spline segments
- [ ] Explain how subdivision refines a mesh and how skinning deforms one for animation
- [ ] Estimate the cost of a rendering choice (samples, resolution, bounces) and its quality trade-off

## Modules

### Module 1: Transformations & Viewing

The linear algebra of putting objects in a world and looking at them — from 2D rotations through the full model/view/projection chain.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The Graphics Pipeline in One Picture | Name every stage from vertices to pixels and know which module owns it | rasterization vs. ray tracing, screen space, framebuffer, the two rendering philosophies |
| 1.2 | 2D Transforms & Homogeneous Coordinates | Represent translation, rotation, scale as a single 3×3 matrix and compose them | linear maps, affine maps, homogeneous coordinates, the extra "1" |
| 1.3 | 3D Transforms & Frames | Move between coordinate frames and build rigid-body transforms in 3D | 4×4 matrices, rotation about axes, change of basis, transforming normals |
| 1.4 | The Camera & the View Transform | Point a virtual camera and derive the world→camera (look-at) matrix | eye/up/gaze, orthonormal frames, the view matrix |
| 1.5 | Projection: Orthographic & Perspective | Derive the perspective matrix and explain the w-divide and foreshortening | view frustum, projective divide, near/far planes, NDC |

**Boss problem 1:** A cube of side 2 is centered at world position $(4, 0, -10)$. The camera sits at the origin looking down $-z$ with up $= (0,1,0)$, a $90°$ vertical field of view, aspect ratio 1, near plane $1$, far plane $100$. Build the full model→view→projection matrix as a product of named factors, then push the cube's near-top-right corner through it and report its normalized-device coordinates. State which clip test (if any) it fails.

### Module 2: Rasterization & Shading

How a triangle becomes lit pixels: scan conversion, visibility, and local lighting models.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Rasterizing Lines & Triangles | Turn a triangle into pixels using barycentric coverage tests | Bresenham/DDA, edge functions, barycentric coordinates, top-left rule |
| 2.2 | Interpolation, Clipping & the Z-Buffer | Interpolate vertex attributes and resolve which surface is visible | attribute interpolation, near-plane clipping, depth buffer, perspective-correct interpolation |
| 2.3 | Lighting: Diffuse, Specular & Phong | Compute a surface color from lights and normals with the Phong model | Lambertian/diffuse, specular highlights, ambient term, surface normals |
| 2.4 | Blinn–Phong, Shading Frequency & Materials | Choose Blinn–Phong vs. Phong and shade per-vertex vs. per-fragment | halfway vector, Gouraud vs. Phong shading, material parameters, energy intuition |
| 2.5 | Texture Mapping & Antialiasing | Map an image onto a surface and pick the right detail level to avoid aliasing | uv coordinates, perspective-correct texturing, mipmaps, filtering, aliasing |

**Boss problem 2:** A triangle has screen-space vertices with known depths and per-vertex uv coordinates. For a given interior pixel, (a) compute its barycentric weights, (b) find the perspective-correct interpolated uv, and (c) given a point light, surface normal, and material $(k_d, k_s, p)$, compute the Blinn–Phong color at that pixel. Then explain in one sentence why naive linear uv interpolation would have textured it wrong.

### Module 3: The GPU Pipeline, Ray Tracing & Global Illumination

From how real hardware runs the pipeline to the physically-motivated alternative that chases light itself.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Programmable GPU Pipeline & Shaders | Trace data through vertex/fragment shaders and say why the GPU is parallel | SIMD/parallelism, vertex vs. fragment shader, uniforms/varyings, the modern pipeline |
| 3.2 | Ray Casting & Ray–Object Intersection | Shoot rays from the eye and intersect spheres, planes, and triangles | ray parametrization, sphere/plane/triangle intersection, shadow rays |
| 3.3 | Whitted Ray Tracing: Reflection & Refraction | Spawn recursive reflection and refraction rays and shade with Fresnel intuition | reflection law, Snell's law, recursive tracing, total internal reflection |
| 3.4 | Acceleration Structures | Cut intersection cost from linear to logarithmic with a spatial hierarchy | bounding volumes, BVH, spatial vs. object partitioning, traversal |
| 3.5 | The Rendering Equation & Path Tracing | Write the rendering equation and estimate it with Monte Carlo sampling | radiance, BRDF, the rendering equation, Monte Carlo integration, importance sampling |

**Boss problem 3:** A ray leaves the eye and hits a glass sphere (index of refraction $n = 1.5$) in a scene with one point light. (a) Find the intersection point and surface normal. (b) Construct the reflected ray and the refracted ray, checking for total internal reflection. (c) Write the local (rendering-equation) integral for outgoing radiance at the hit point, then explain how a path tracer would estimate it with a single sampled bounce and why averaging many samples converges to the true value.

### Module 4: Geometric Modeling & Animation

Where the geometry comes from — meshes, smooth curves and surfaces, and a taste of making them move.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Meshes & Geometry Representations | Store and query a triangle mesh and choose between geometry representations | triangle meshes, vertex/face/edge data, normals, implicit vs. explicit surfaces |
| 4.2 | Bézier Curves & de Casteljau | Evaluate and reason about a Bézier curve geometrically | control points, Bernstein basis, de Casteljau's algorithm, convex hull property |
| 4.3 | Splines & Continuity | Chain curve segments into smooth splines with controlled continuity | piecewise curves, $C^0/C^1/C^2$ and $G^1$ continuity, B-splines, Catmull–Rom |
| 4.4 | Bézier Surfaces & Subdivision | Extend curves to patches and refine coarse meshes into smooth ones | tensor-product patches, subdivision surfaces, Catmull–Clark, limit surface |
| 4.5 | A Taste of Animation | Interpolate keyframes and deform a mesh to make it move | keyframing, interpolation/easing, rigging and skinning, forward kinematics |

**Boss problem 4:** You're given a cubic Bézier curve by its four control points. (a) Use de Casteljau's algorithm to evaluate the point at $t = 0.5$ and identify the tangent direction there. (b) You want to attach a second cubic segment after it with $C^1$ continuity — state the constraint its first two control points must satisfy. (c) Briefly contrast how a subdivision surface and a Bézier patch would each produce a smooth surface from a coarse cage, and name one reason a modeler might prefer subdivision.

## Sources of truth

- *Fundamentals of Computer Graphics* (Marschner & Shirley) — overall structure, rasterization, and ray-tracing conventions.
- Pharr, Jakob & Humphreys, *Physically Based Rendering* — the rendering equation, BRDFs, and Monte Carlo path tracing rigor.
- Akenine-Möller et al., *Real-Time Rendering* — the GPU pipeline, shading frequency, and texture/antialiasing conventions.
- Column-vector, right-multiplied convention throughout ($\mathbf{p}' = M\mathbf{p}$), right-handed coordinates, matching `linalg-refresher`.

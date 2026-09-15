# Computer Graphics · Lesson 3.1: The Programmable GPU Pipeline & Shaders

> ⏱ ~15 min · Module 3: The GPU Pipeline, Ray Tracing & Global Illumination · Builds on: [2.5 (shading frequency)](02-05-blinn-phong-shading-frequency-materials.md), [2.3 (interpolated attributes)](02-03-perspective-correct-interpolation.md), [2.2 (the z-buffer)](02-02-clipping-and-the-z-buffer.md) · Unlocks: [3.2 (shadow mapping)](03-02-shadow-mapping.md)

## Why this matters

Module 2 described an algorithm. A GPU is that algorithm frozen into silicon, with two holes left open where you supply code: one that runs on every vertex and one that runs on every fragment. Those two small programs — **shaders** — are where every material, every lighting model and every visual effect in real-time graphics lives.

You won't write shaders here; you'll read them, because reading them is where the understanding (and the bugs) are. What matters is knowing what data a shader can see, how many times it runs, and why the design forbids it from seeing anything else. Those constraints are exactly what lets a GPU run a hundred million fragment shaders a second — and they are why an innocent `if` statement or an early `discard` can quietly cost a frame's worth of performance.

## The idea

**The pipeline is a factory line with two programmable stations.** Vertex data goes in. At the first station, a small program transforms each vertex — the model/view/projection chain of Module 1 — and attaches whatever extra data later stations will need. Fixed machinery then clips, divides, rasterizes, and interpolates that attached data across each triangle. At the second station, a small program computes each fragment's colour — the lighting of Module 2. Fixed machinery then does the depth test and writes pixels.

**Each station sees only its own item.** A vertex shader sees one vertex, never its neighbours. A fragment shader sees one fragment, never the pixel next door and never the rest of the scene. That is the whole trick: work with no dependencies between items can be spread across thousands of cores, each running the same code on different data. Shadows, reflections and anything else that needs "the rest of the scene" must be smuggled in as data — usually a texture rendered in an earlier pass ([3.2](03-02-shadow-mapping.md)).

## The formal version

**Four kinds of shader input.**

| kind | varies per | set by | example |
|---|---|---|---|
| **attribute** | vertex | the mesh | position, normal, texture coordinates |
| **uniform** | draw call (constant across it) | the application | model/view/projection matrices, light position, time |
| **varying** | fragment (interpolated) | the vertex shader's outputs | world position, normal, uv |
| **texture** | lookup coordinate | the application | albedo image, shadow map |

*(card: [Shader inputs](../reference.md#shader-inputs))*

**The vertex shader** maps one vertex's attributes (plus uniforms) to a **clip-space position** and any number of varyings. It must output clip coordinates, not NDC: the divide happens after clipping, in fixed stages, for the reason [2.2](02-02-clipping-and-the-z-buffer.md) gave.

**The fragment shader** maps one fragment's interpolated varyings (plus uniforms and textures) to a colour, optionally a depth, or **discard** (produce nothing). Varyings arrive perspective-correct by default ([2.3](02-03-perspective-correct-interpolation.md)).

**A minimal Blinn–Phong pair**, in shader-like pseudocode:

```
// vertex shader: runs once per vertex
uniform mat4 M, V, P;  uniform mat3 Nmat;   // Nmat = inverse transpose
in  vec3 pos, nrm;                          // attributes
out vec3 wpos, wnrm;                        // varyings
main:
    wpos = (M * vec4(pos, 1)).xyz
    wnrm = Nmat * nrm
    clip_position = P * V * vec4(wpos, 1)
```

```
// fragment shader: runs once per fragment
uniform vec3 lightPos, eyePos, kd;  uniform float ks, p;
in  vec3 wpos, wnrm;                        // interpolated varyings
main:
    n = normalize(wnrm)
    l = normalize(lightPos - wpos);  v = normalize(eyePos - wpos)
    h = normalize(l + v)
    color = kd * max(dot(n, l), 0) + ks * pow(max(dot(n, h), 0), p)
```

Moving the lighting into the vertex shader and outputting a colour varying instead is exactly [2.5](02-05-blinn-phong-shading-frequency-materials.md)'s Gouraud shading; this pair is Phong shading.

**Invocation counts.** For a draw of a mesh with $V$ unique vertices, instanced $k$ times:

$$\text{vertex shader runs} \approx kV \quad (\text{indexed meshes reuse shared vertices}),$$

$$\text{fragment shader runs} \approx \sum_{\text{triangles}} (\text{pixels covered}) \;-\; (\text{fragments rejected by early-z}).$$

In words: vertex cost scales with geometric detail, fragment cost with **screen coverage times depth complexity**. With MSAA the fragment shader still runs about once per pixel per triangle ([2.7](02-07-aliasing-supersampling-and-mipmaps.md)). *(card: [Shader invocation counts](../reference.md#shader-invocation-counts))*

**Early-z.** If the fragment shader does not change depth or discard, the GPU can run the depth test **before** the shader and skip hidden fragments entirely. Drawing opaque objects roughly front to back then shades each pixel about once. A shader that writes depth or calls `discard` (alpha-tested foliage, cut-outs) forces the test to wait until after the shader has run.

**Why GPUs are parallel and branch-averse.** A GPU runs one shader on many fragments in lockstep groups (SIMD — single instruction, multiple data). Neighbouring fragments are shaded in $2 \times 2$ blocks so that screen-space derivatives — needed for mip selection — can be computed by differencing. When fragments in a group take different branches of an `if`, the hardware may have to evaluate both paths, and a texture lookup inside such a branch gets meaningless derivatives.

## Picture

![A left-to-right flow of boxes. Vertex data, labelled attributes, flows into a blue vertex shader box, which receives coral uniforms from above and outputs per-vertex position and varyings. Next are grey fixed stages: clip, divide and viewport, then rasterize and interpolate, producing per-fragment perspective-correct varyings. These flow into a blue fragment shader box, which receives coral uniforms and textures from above. Its output goes down into a grey depth test and blend box writing the framebuffer. Notes: the vertex shader runs once per vertex, the fragment shader once per covered sample group, and early-z can reject a fragment before its shader runs](assets/03-01-fig1.svg)

Only two boxes are blue. Everything between them — clipping, the divide, the edge functions, the $a/w$ interpolation — is the fixed hardware that Module 2 derived, and it is why your fragment shader receives a correct, interpolated normal without ever computing a barycentric coordinate.

## Worked examples

**Example 1 (mechanical): trace one vertex and one fragment.** Uniforms: $M = T(0, 0, -5)\,R_y(-90°)$, $V = I$ (camera at the origin looking down $-z$), $P$ with $90°$ field of view, aspect 1, $n = 1$, $f = 10$. Attributes: position $(1, 1, 0)$, normal $(1, 0, 0)$.

*Vertex shader.* $R_y(-90°)$ sends $(x, y, z)$ to $(-z,\ y,\ x)$, so the rotation takes $(1, 1, 0)$ to $(0, 1, 1)$ and the translation then gives

$$\texttt{wpos} = (0, 1, 1) + (0, 0, -5) = (0,\ 1,\ -4).$$

$M$'s linear block is a rotation, so $\texttt{Nmat} = R_y(-90°)$ and $\texttt{wnrm} = (0, 0, 1)$ — facing the camera.

$\texttt{clip\_position} = P(0, 1, -4, 1) = (0,\ 1,\ 2.667,\ 4)$. After the fixed divide: NDC $(0,\ 0.25,\ 0.667)$; on an $800 \times 800$ viewport, pixel $(400, 500)$.

*Fragment shader*, at a fragment whose interpolated varyings equal this vertex's values, with $\texttt{lightPos} = (0, 3, -2)$, $\texttt{eyePos} = (0,0,0)$, $k_d = 0.7$, $k_s = 0.3$, $p = 40$:

- $\mathbf{n} = (0, 0, 1)$
- $\mathbf{l} = \text{normalize}(0, 2, 2) = (0,\ 0.707,\ 0.707)$
- $\mathbf{v} = \text{normalize}(0, -1, 4) = (0,\ -0.243,\ 0.970)$
- $\mathbf{h} = \text{normalize}(0,\ 0.465,\ 1.677) = (0,\ 0.267,\ 0.964)$

$\mathbf{n}\cdot\mathbf{l} = 0.707$, $\mathbf{n}\cdot\mathbf{h} = 0.964$, $0.964^{40} = 0.228$.

$$\texttt{color} = 0.7(0.707) + 0.3(0.228) = 0.495 + 0.068 = \mathbf{0.563}.$$

**Example 2 (why you'd care): the price of draw order.** A $1920 \times 1080$ frame ($2{,}073{,}600$ pixels) has three opaque layers: a sky covering 100% of the screen, terrain covering 60%, and a character covering 10%, each entirely in front of the layer behind it.

*Back to front* (sky, terrain, character): every layer's fragments pass the depth test when drawn, so the fragment shader runs

$$(1.0 + 0.6 + 0.1) \times 2{,}073{,}600 = 3{,}525{,}120 \text{ times}.$$

*Front to back with early-z* (character, terrain, sky): the terrain's fragments behind the character are rejected before shading, and so are the sky's behind terrain:

$$\big(0.1 + (0.6 - 0.1) + (1.0 - 0.6)\big) \times 2{,}073{,}600 = 2{,}073{,}600 \text{ times}.$$

That is **41% fewer** shader invocations for the same image — every pixel shaded exactly once. Now give the terrain an alpha-tested grass shader that calls `discard`. Early-z is disabled for the terrain draw, so all of its 60% coverage is shaded — including the 10% already hidden behind the character — before the depth test runs: the frame costs $0.1 + 0.6 + 0.4 = 1.1$ screens of shading instead of $1.0$. (The sky still gets early-z, against whatever depth the terrain wrote for the fragments it kept.) Engines often run a cheap **depth-only pre-pass** first, so the expensive shading pass can test against final depths everywhere.

## Watch out

- **You might think** the vertex shader should output NDC, since that is where the visible cube lives — **but actually** it must output clip coordinates with $w$ intact. Dividing in the shader breaks clipping for geometry behind the eye and destroys the $1/w$ that perspective-correct interpolation needs.
- **You might think** a varying arrives at the fragment shader as the vertex shader wrote it — **but actually** it arrives *interpolated*, so a unit normal arrives shorter than unit length and must be renormalized, and a value that should not be blended (an object ID, say) must be marked as flat.
- **You might think** `discard` saves work, because the fragment produces nothing — **but actually** it usually costs work: it disables early depth testing for the whole draw, so hidden fragments behind it get fully shaded first.

## One-liner

> A vertex shader maps each vertex to clip space plus varyings; fixed hardware clips, rasterizes and interpolates; a fragment shader maps each fragment to a colour — and because neither can see its neighbours, the GPU can run millions at once.

## Problems

**P1 (🟢)** Classify each as an **attribute**, **uniform**, **varying** or **texture**, with a one-clause reason.
(a) The model matrix of a rock.
(b) A vertex's texture coordinates as stored in the mesh.
(c) The sun's direction.
(d) The world-space normal as received by the fragment shader.
(e) The rock's colour photograph.
(f) Elapsed time in seconds, used to animate grass.

**P2 (🟡)** A tree mesh has 10,000 unique vertices and 19,996 triangles (indexed). It is drawn as 3 instances. Together the instances cover 150,000 pixels, with an average depth complexity of 2.2 over those pixels (leaves overlap leaves).
(a) How many times does the vertex shader run?
(b) How many times does the fragment shader run with no early-z?
(c) The leaf shader calls `discard` for transparent texels. With a depth-only pre-pass that writes final depths, the shading pass tests against them before shading. How many fragment shader runs now, and what extra work did the pre-pass cost?

**P3 (🔴)** A stretched pillar uses $M = S(1, 4, 1)$. This shader pair produces lighting that is too bright and blows out:

```
// vertex shader
out vec3 wnrm
    wnrm = (M * vec4(nrm, 0)).xyz
// fragment shader
in vec3 wnrm
    diffuse = max(dot(wnrm, l), 0)
```

(a) Name the two bugs.
(b) At a vertex with object normal $(0.6, 0.8, 0)$ and light direction $\mathbf{l} = (1, 1, 0)/\sqrt2$, compute `diffuse` for: the shader as written; with only the matrix bug fixed; with only the normalization bug fixed; with both fixed.
(c) Which single fix makes the image *look* most plausible while still being wrong, and why is that the dangerous one?

<details>
<summary>Solutions</summary>

**P1**

(a) **Uniform** — one value for the whole draw call.
(b) **Attribute** — it is per-vertex data stored in the mesh.
(c) **Uniform** — the same for every vertex and fragment in the frame.
(d) **Varying** — it was output per vertex and interpolated across the triangle.
(e) **Texture** — an image sampled by coordinate.
(f) **Uniform** — one number per frame, shared by every vertex.

**P2**

(a) Indexing shares vertices between triangles, so the vertex shader runs once per unique vertex per instance: $10{,}000 \times 3 = \mathbf{30{,}000}$. (The triangle count does not enter; unindexed, it would be $19{,}996 \times 3 \times 3 = 179{,}964$.)

(b) $150{,}000 \times 2.2 = \mathbf{330{,}000}$ fragments, all shaded.

(c) After the pre-pass, only the frontmost surviving leaf fragment at each pixel passes an equal-depth test, so the shading pass runs about $\mathbf{150{,}000}$ fragment shaders — a 55% saving on the expensive pass. The pre-pass itself still had to run the `discard` test on all $330{,}000$ fragments (it needs the alpha texture to know which fragments exist), plus a second $30{,}000$ vertex shader runs. It pays off when the lighting shader is much more expensive than the alpha test, which it almost always is.

**P3**

(a) **Bug 1:** the normal is transformed with the model matrix $M$ instead of the normal matrix $(M^{-1})^T$ ([1.3](01-03-3d-transforms-frames-and-normals.md)). **Bug 2:** the interpolated normal is not renormalized in the fragment shader.

(b) $\mathbf{l} = (0.707, 0.707, 0)$.

| version | normal used | `diffuse` |
|---|---|---|
| as written | $M\mathbf{n} = (0.6,\ 3.2,\ 0)$ | $(0.6 + 3.2)(0.707) = \mathbf{2.687}$ |
| matrix fixed only | $(M^{-1})^T\mathbf{n} = (0.6,\ 0.2,\ 0)$ | $(0.6 + 0.2)(0.707) = \mathbf{0.566}$ |
| normalize fixed only | $\text{normalize}(0.6, 3.2, 0) = (0.184,\ 0.983,\ 0)$ | $(0.184 + 0.983)(0.707) = \mathbf{0.825}$ |
| both fixed | $\text{normalize}(0.6, 0.2, 0) = (0.949,\ 0.316,\ 0)$ | $(0.949 + 0.316)(0.707) = \mathbf{0.894}$ |

(c) **Fixing only the normalization** is the dangerous one. It gives $0.825$ — within 8% of the true $0.894$ at this vertex, never above 1, and smoothly varying — so the image looks right. But the normal direction is still wrong by $\arccos(0.184 \cdot 0.949 + 0.983 \cdot 0.316) = \arccos(0.485) \approx 61°$, and on parts of the pillar facing other lights the error will be large. The as-written version's blown-out $2.69$ at least announces itself.

</details>

## Flashback

**From Lesson 2.5 (Blinn–Phong and sRGB):** A shader samples an sRGB albedo texel of $0.8$, lights it with $\mathbf{n}\cdot\mathbf{l} = 0.6$ and a Blinn–Phong term $k_s(\mathbf{n}\cdot\mathbf{h})^{p'}$ with $k_s = 0.04$, $\mathbf{n}\cdot\mathbf{h} = 0.98$, $p' = 64$.
(a) Convert the albedo to linear.
(b) Compute the linear shaded value.
(c) Encode it for an sRGB display.

<details>
<summary>Solution</summary>

(a) $\left(\dfrac{0.8 + 0.055}{1.055}\right)^{2.4} = 0.8104^{2.4} = \mathbf{0.604}$.

(b) Diffuse: $0.604 \times 0.6 = 0.362$. Specular: $0.98^{64} = 0.274$, times $0.04$ gives $0.011$. Total $\mathbf{0.373}$.

(c) $1.055 \times 0.373^{1/2.4} - 0.055 = 1.055 \times 0.663 - 0.055 = \mathbf{0.645}$ (8-bit 164).

The specular contribution is small because $k_s = 0.04$ is a realistic dielectric value; it becomes visible mainly where $\mathbf{n}\cdot\mathbf{h}$ is very close to 1.

</details>

## Connections

- **Backward:** the vertex shader is Module 1's $P\,V\,M$ chain plus [1.3](01-03-3d-transforms-frames-and-normals.md)'s normal matrix; everything between the two shaders is [2.1](02-01-rasterizing-lines-and-triangles.md)–[2.3](02-03-perspective-correct-interpolation.md); the fragment shader is [2.5](02-05-blinn-phong-shading-frequency-materials.md)'s Blinn–Phong; early-z is [2.2](02-02-clipping-and-the-z-buffer.md)'s depth test moved earlier.
- **Forward:** [3.2](03-02-shadow-mapping.md) uses two passes of this pipeline, feeding the first pass's depth buffer into the second pass's fragment shader as a texture — the standard way to give a local shader non-local knowledge. [3.3](03-03-ray-casting-and-intersection.md) begins the pipeline that has no such restriction.
- **Sideways:** the fragment shader is a pure function over an embarrassingly parallel data set. [`computer-architecture` 5.3](../../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) deliberately leaves GPU microarchitecture out; this lesson is the programmer's-eye view of it, and it is why [`deep-learning`](../../deep-learning/syllabus.md)'s matrix multiplies run on the same hardware. Branch divergence costing both paths is the GPU version of that course's branch-misprediction penalty ([`computer-architecture` 3.5](../../computer-architecture/lessons/03-05-control-hazards-and-branch-prediction.md)).

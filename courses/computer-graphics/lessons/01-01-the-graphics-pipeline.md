# Computer Graphics · Lesson 1.1: The Graphics Pipeline in One Picture

> ⏱ ~15 min · Module 1: Transformations & Viewing · Builds on: [`linalg-refresher`](../../linalg-refresher/syllabus.md), [`programming-foundations` 1.4 (Big-O)](../../programming-foundations/lessons/01-04-big-o-counting-operations.md) · Unlocks: [1.2 (2D transforms)](01-02-2d-transforms-homogeneous-coordinates.md), and the map for the whole course

## Why this matters

Every image a computer has ever drawn of a 3D world came out of one of two nested loops. A game at 144 frames per second and a film frame that took nine hours are not different *kinds* of thing — they are the same question, "what does this pixel see?", answered with the loops in opposite orders.

Which loop you put outside decides almost everything downstream: what is cheap, what is hard, what hardware you build, and which effects (shadows, mirrors, soft indirect light) come for free and which need a trick. This lesson is the map. Every later lesson is one box on it.

## The idea

You have a scene — a few million triangles, some lights, a camera — and a grid of pixels. You need to fill each pixel with a colour. There are two ways to organise the work.

**Object order.** Loop over the *triangles*. For each one, work out where it lands on the screen and which pixels it covers, colour those pixels, and keep a note of how far away each one was so that a closer triangle can overwrite a farther one. This is **rasterization**. It never asks "what is behind this pixel?" — it throws every triangle at the screen and lets the nearest one win.

**Image order.** Loop over the *pixels*. For each one, shoot a ray from the eye through it into the scene and find the first thing it hits. Then ask that point what light reaches it — which may mean shooting *more* rays, toward a light to check for a shadow, or off a mirror. This is **ray tracing**.

Both produce the same answer for "which surface is visible at this pixel". They differ in what else they make easy. Rasterization knows about one triangle at a time, so a shadow — which depends on *other* geometry between the point and the light — needs a separate pass. A ray tracer can simply ask the scene, so shadows, reflections and refraction fall out of the same machinery.

## The formal version

**The framebuffer.** The output is a $W \times H$ array of pixels, each storing a colour in some number of bits. A **framebuffer** of $W \times H$ pixels at $b$ bytes per pixel occupies

$$\text{size} = W \cdot H \cdot b \ \text{bytes}.$$

In words: memory is linear in pixel count, and pixel count is quadratic in linear resolution. *(card: [Framebuffer](../reference.md#framebuffer))*

**The rasterization pipeline** — the object-order loop:

1. **Vertex processing** ([Module 1](01-05-projection-orthographic-and-perspective.md)). Each vertex is carried through a chain of coordinate spaces by matrix multiplication:
$$\text{object} \xrightarrow{\ M\ } \text{world} \xrightarrow{\ V\ } \text{eye} \xrightarrow{\ P\ } \text{clip} \xrightarrow{\ \div w\ } \text{NDC} \xrightarrow{\ \text{viewport}\ } \text{screen}.$$
Here $M$ is the **model** matrix (places the object), $V$ the **view** matrix (moves the world in front of the camera), $P$ the **projection** matrix, and **NDC** ("normalized device coordinates") is the cube $[-1,1]^3$ that the visible region is squashed into. *(card: [Coordinate spaces](../reference.md#coordinate-spaces))*
2. **Clipping** ([2.2](02-02-clipping-and-the-z-buffer.md)). Throw away or cut the parts of triangles outside the visible volume.
3. **Rasterization** ([2.1](02-01-rasterizing-lines-and-triangles.md)). Decide which pixel centres each triangle covers. Each covered pixel becomes a **fragment** — a candidate colour for that pixel, carrying interpolated data ([2.3](02-03-perspective-correct-interpolation.md)).
4. **Fragment shading** ([2.4](02-04-lighting-diffuse-specular-phong.md)–[2.7](02-07-aliasing-supersampling-and-mipmaps.md)). Compute each fragment's colour from lights, normals, materials and textures.
5. **Visibility** ([2.2](02-02-clipping-and-the-z-buffer.md)). A **depth buffer** keeps the nearest depth seen so far at each pixel; a fragment only writes if it is closer.

**The ray-tracing pipeline** — the image-order loop:

1. **Primary-ray generation** ([3.3](03-03-ray-casting-and-intersection.md)). For pixel $(i,j)$, build a ray $\mathbf{p}(t) = \mathbf{e} + t\,\mathbf{d}$ from the eye $\mathbf{e}$ through that pixel.
2. **Intersection** ([3.3](03-03-ray-casting-and-intersection.md), [3.5](03-05-acceleration-structures.md)). Find the smallest $t > 0$ at which the ray meets a surface.
3. **Shading and secondary rays** ([3.4](03-04-whitted-ray-tracing-reflection-refraction.md), [3.6](03-06-radiometry-brdfs-rendering-equation.md), [3.7](03-07-monte-carlo-path-tracing.md)). Compute the colour, spawning new rays for shadows, reflection, refraction or indirect light.

**Cost, to first order.** With $N$ triangles, $W H$ pixels and an average **depth complexity** $d$ (how many triangle layers overlap a typical pixel):

$$\text{raster} \approx \underbrace{3N}_{\text{vertices}} + \underbrace{d\,W H}_{\text{fragments}}, \qquad \text{ray cast, brute force} \approx W H \cdot N, \qquad \text{ray cast with a hierarchy} \approx W H \cdot c\log_2 N.$$

In words: rasterization pays once per triangle plus once per covered pixel; a ray caster pays once per pixel *times* the cost of searching the scene, which is linear without an acceleration structure and logarithmic with one ([3.5](03-05-acceleration-structures.md)). These are operation counts, not times — a ray–triangle test and a fragment shade have very different constants — but they get the *scaling* right, and scaling is what decides architectures. *(card: [Rendering cost models](../reference.md#rendering-cost-models))*

## Picture

![Two rows of boxes. Top row, rasterization, for each triangle find the pixels it covers: vertices, transform (Module 1), clip (2.2), rasterize (2.1), shade (2.4 to 2.7), depth test (2.2), pixels in the framebuffer, with the chain of coordinate spaces object, world, eye, clip, NDC, screen written underneath. Bottom row, ray tracing, for each pixel find the object it sees: pixels on the image plane, make ray (3.3), intersect (3.3 and 3.5), shade (3.4, 3.6 to 3.7), pixels, with a dashed coral loop from shade back to make ray labelled secondary rays for shadows, reflection and refraction](assets/01-01-fig1.svg)

The dashed loop is the whole difference in capability. The rasterization row has no arrow going backwards: once a triangle has been shaded, the pipeline has forgotten it.

## Worked examples

**Example 1 (mechanical): what a framebuffer costs.** A 4K display is $3840 \times 2160$. Store colour as RGBA with 8 bits per channel, so $b = 4$ bytes.

$$3840 \times 2160 = 8{,}294{,}400 \text{ pixels}, \qquad 8{,}294{,}400 \times 4 = 33{,}177{,}600 \text{ bytes}.$$

Dividing by $2^{20} = 1{,}048{,}576$ gives $31.64$ MiB. A typical depth buffer (24-bit depth plus 8-bit stencil) is another 4 bytes per pixel, so another $31.64$ MiB. At 60 frames per second the colour buffer alone is rewritten at $33.18 \times 60 \approx 1.99$ GB per second.

The instructive part is the scaling. Going from 1080p ($1920 \times 1080$) to 4K doubles both dimensions, so it **quadruples** the pixel count — and every per-pixel cost in either pipeline quadruples with it.

**Example 2 (why you'd care): which loop is cheaper?** A scene of $N = 10^6$ triangles rendered at 1080p, so $WH = 2{,}073{,}600$.

*Brute-force ray casting* tests every ray against every triangle:

$$WH \cdot N = 2{,}073{,}600 \times 10^6 \approx 2.07 \times 10^{12} \text{ tests}.$$

At a nanosecond each, that is 35 minutes for one frame. This is why nobody does it.

*Ray casting with a hierarchy*, taking $c = 2$ (a traversal that visits about two nodes per level):

$$WH \cdot 2\log_2 N = 2{,}073{,}600 \times 2 \times 19.93 \approx 8.27 \times 10^7.$$

*Rasterization* with depth complexity $d = 3$:

$$3N + d\,WH = 3{,}000{,}000 + 6{,}220{,}800 \approx 9.22 \times 10^6.$$

Under this model rasterization does about **nine times fewer** operations than a hierarchical ray caster for primary visibility, and $2 \times 10^5$ times fewer than brute force. That factor, plus the fact that "shade every fragment independently" is perfectly suited to parallel hardware ([3.1](03-01-the-programmable-gpu-pipeline.md)), is why real-time graphics was built on rasterization for thirty years. The logarithm is why ray tracing catches up as scenes grow: the raster term $3N$ grows linearly in triangle count, the ray-tracing term only logarithmically. Problem 3 finds the crossover.

## Watch out

- **You might think** rasterization is an approximation and ray tracing is "correct" — **but actually** for primary visibility (which surface is nearest at each pixel sample) the two compute exactly the same thing. They diverge only on effects that depend on *other* geometry: shadows, reflections, indirect light. A rasterizer can get those too, with extra passes ([3.2](03-02-shadow-mapping.md)); a ray tracer gets them with extra rays.
- **You might think** a pixel is a little square of colour — **but actually** the pipeline treats it as a **sample point** at the pixel's centre, and a triangle "covers" a pixel only if it covers that point. The square picture is what makes aliasing ([2.7](02-07-aliasing-supersampling-and-mipmaps.md)) look mysterious; the point picture makes it obvious.
- **You might think** the cost formulas predict frame times — **but actually** they count operations whose constants differ by orders of magnitude and ignore memory access, which on a modern machine often dominates. Use them to reason about how cost *scales* when you change $N$ or the resolution, never to compare absolute times across the two pipelines.

## One-liner

> Rasterization asks each triangle which pixels it covers; ray tracing asks each pixel which object it sees — same visible surface, opposite loops, and the order decides what's cheap.

## Problems

**P1 (🟢)** A 1440p gaming monitor is $2560 \times 1440$ and refreshes at 144 Hz. Colour is stored as 10 bits per RGB channel plus 2 bits of alpha, packed into 32 bits.
(a) How many bytes does one colour buffer occupy? Give the answer in MiB too.
(b) How many **gigabits per second** of pixel data leave the GPU if every frame is sent uncompressed?

**P2 (🟢)** For each task, name the stage of the rasterization pipeline that performs it (vertex processing, clipping, rasterization, fragment shading, or visibility), and give a one-clause reason.
(a) Deciding that pixel $(300, 200)$ is inside a particular triangle.
(b) Deciding which of two overlapping triangles is nearer at pixel $(300, 200)$.
(c) Moving a character's vertices from its own coordinate system into the world.
(d) Cutting off the part of a triangle that pokes behind the camera.
(e) Looking up the colour of a brick texture for one pixel.

**P3 (🟡)** Use this lesson's cost model with $c = 2$ and depth complexity $d = 2.5$ at 1080p ($WH = 2{,}073{,}600$).
(a) Compute the raster and hierarchical ray-casting operation counts for $N = 10^7$ triangles and for $N = 10^8$ triangles, and say which is cheaper in each case.
(b) The crossover is near $N \approx 3.3 \times 10^7$ at 1080p. Without recomputing, does moving to 4K push the crossover to **more** or **fewer** triangles? Justify from the form of the two formulas.

<details>
<summary>Solutions</summary>

**P1**

(a) 32 bits is 4 bytes.

$$2560 \times 1440 = 3{,}686{,}400 \text{ pixels}, \qquad 3{,}686{,}400 \times 4 = 14{,}745{,}600 \text{ bytes}.$$

In MiB: $14{,}745{,}600 / 1{,}048{,}576 = \mathbf{14.06}$ **MiB**.

(b) Per second: $14{,}745{,}600 \times 144 = 2{,}123{,}366{,}400$ bytes. Times 8 bits per byte:

$$2{,}123{,}366{,}400 \times 8 \approx 1.699 \times 10^{10} \text{ bits/s} \approx \mathbf{17.0\ Gbit/s}.$$

That is why display cables are specified in tens of gigabits per second, and why high-refresh 4K needs compression on the link.

**P2**

(a) **Rasterization** — it is the coverage test of a pixel centre against a triangle.
(b) **Visibility** (the depth test) — it compares the two fragments' depths at that pixel and keeps the nearer.
(c) **Vertex processing** — it is a matrix multiply (the model matrix) applied per vertex.
(d) **Clipping** — geometry outside the view volume, including behind the eye, is cut before rasterization.
(e) **Fragment shading** — texture lookups happen per fragment, using interpolated texture coordinates.

**P3**

(a) Raster: $3N + 2.5 \times 2{,}073{,}600 = 3N + 5{,}184{,}000$. Ray cast: $2{,}073{,}600 \times 2\log_2 N$.

| $N$ | raster | ray cast | cheaper |
|---|---|---|---|
| $10^7$ | $3.00 \times 10^7 + 5.18 \times 10^6 = 3.52 \times 10^7$ | $2{,}073{,}600 \times 46.51 = 9.64 \times 10^7$ | **raster** |
| $10^8$ | $3.00 \times 10^8 + 5.18 \times 10^6 = 3.05 \times 10^8$ | $2{,}073{,}600 \times 53.15 = 1.10 \times 10^8$ | **ray cast** |

Going from $10^7$ to $10^8$ triangles multiplied the raster count by $8.7$ but the ray-cast count by only $1.14$, because $\log_2$ grows by $3.3$ when $N$ grows tenfold.

(b) **More triangles.** Both formulas have a $WH$ term, but ray casting multiplies the *whole* cost by $WH$, while rasterization's dominant term at large $N$ is $3N$, which does not depend on resolution. Quadrupling $WH$ roughly quadruples the ray-casting cost but barely moves the raster cost once $3N$ dominates, so $N$ must grow further before $3N$ overtakes $4\times$ the ray-casting count. (Solving numerically gives a 4K crossover near $1.4 \times 10^8$.) In words: **ray tracing's advantage is in scene complexity, and resolution works against it.**

</details>

## Connections

- **Backward:** the cost comparison is [`programming-foundations` 1.4](../../programming-foundations/lessons/01-04-big-o-counting-operations.md)'s operation counting, and the logarithm comes from the balanced trees of [`programming-foundations` 3.2](../../programming-foundations/lessons/03-02-balanced-trees-the-idea.md) — a bounding volume hierarchy is a search tree over space.
- **Forward:** [1.2](01-02-2d-transforms-homogeneous-coordinates.md)–[1.5](01-05-projection-orthographic-and-perspective.md) build the vertex-processing chain one matrix at a time; Module 2 builds the rest of the top row; Module 3 builds the bottom row and then ([3.6](03-06-radiometry-brdfs-rendering-equation.md)) says what quantity both rows are actually approximating.
- **Sideways:** "object order versus image order" is the same loop-interchange choice as row-major versus column-major traversal in [`computer-architecture` 4.1](../../computer-architecture/lessons/04-01-caches-and-locality.md) — identical results, very different cost profiles, decided by which access pattern the hardware rewards.

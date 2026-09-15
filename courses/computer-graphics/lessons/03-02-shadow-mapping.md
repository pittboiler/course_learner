# Computer Graphics · Lesson 3.2: Shadow Mapping

> ⏱ ~15 min · Module 3: The GPU Pipeline, Ray Tracing & Global Illumination · Builds on: [3.1 (the GPU pipeline)](03-01-the-programmable-gpu-pipeline.md), [2.2 (the z-buffer and depth precision)](02-02-clipping-and-the-z-buffer.md), [1.5 (projection)](01-05-projection-orthographic-and-perspective.md) · Unlocks: [3.3 (ray casting and shadow rays)](03-03-ray-casting-and-intersection.md)

## Why this matters

A shadow is a non-local fact: whether a point on the floor is lit depends on a chair somewhere between it and the lamp. [3.1](03-01-the-programmable-gpu-pipeline.md)'s fragment shader can't know that — it sees one fragment and nothing else. Without shadows, objects float; the eye reads contact and depth largely from them.

**Shadow mapping** is the classic answer, still at the core of almost every real-time renderer: render the scene once *from the light*, keep only the depth buffer, and hand that buffer to the normal render as a texture. Now each fragment can ask a local question — "is my distance to the light greater than the nearest distance the light saw in my direction?" — and get a non-local answer. It is elegant, cheap, and riddled with sampling artifacts, every one of which is [2.2](02-02-clipping-and-the-z-buffer.md) or [2.7](02-07-aliasing-supersampling-and-mipmaps.md) wearing a new hat.

## The idea

**A point is in shadow if the light can't see it.** So put a camera at the light. Whatever that camera sees is lit; whatever is hidden behind something nearer is in shadow. The z-buffer from that camera records, for every direction from the light, how far away the first surface is.

**Pass 2 turns that into a lookup.** When shading a point on screen, work out where that point would land in the light's image and how far it is from the light. If it is farther than the depth stored there, something nearer blocked the light: shadow. If it is at (about) the stored depth, it *is* the surface the light saw: lit.

**"About" is the whole difficulty.** The light's image has finite resolution. A single texel covers a patch of surface, and on a sloped patch part of it is farther from the light than the texel's one stored value. Compare naively and a lit surface shadows itself in stripes — **shadow acne**. Add a tolerance (a **bias**) and the acne disappears, but too much bias lets shadows detach from the objects casting them — **peter-panning**.

## The formal version

**Pass 1 (light pass).** Render depth only, with the light's view matrix $V_L$ (a look-at from the light, [1.4](01-04-the-camera-and-view-transform.md)) and projection $P_L$ — **orthographic** for a directional light such as the sun, **perspective** for a spotlight. Store $d_{\text{map}}(s, t) \in [0,1]$ in a depth texture. *(card: [Shadow map](../reference.md#shadow-map))*

**Pass 2 (camera pass).** For a fragment at world position $\mathbf{p}$:

$$\mathbf{c} = P_L V_L \begin{pmatrix}\mathbf{p}\\1\end{pmatrix}, \qquad (s,\ t,\ d_{\text{frag}}) = \tfrac12\left(\frac{\mathbf{c}_{xyz}}{c_w} + 1\right).$$

In words: push the point through the light's camera, divide, and remap NDC $[-1,1]$ to texture coordinates and depth $[0,1]$. Then

$$\text{lit} = \big[\, d_{\text{frag}} \le d_{\text{map}}(s, t) + b \,\big]$$

for a bias $b > 0$. The shader multiplies the light's diffuse and specular contribution by $\text{lit}$ (ambient is unaffected). *(card: [Shadow test](../reference.md#shadow-test))*

**Acne and the bias it needs.** A texel covers a world-space patch of width $s_{\text{tex}}$ (for an orthographic light, frustum width divided by map resolution). On a surface whose normal makes angle $\theta$ with the light direction, depth varies across that patch by up to

$$\Delta_{\text{depth}} \approx s_{\text{tex}}\tan\theta \quad \text{(half that from the texel centre)}.$$

A constant bias must exceed this for the steepest slope that occurs, or that slope shows acne. **Slope-scaled bias** sets $b \propto s_{\text{tex}}\tan\theta$ per fragment instead, keeping it small on surfaces facing the light. *(card: [Shadow acne and bias](../reference.md#shadow-acne-and-bias))*

**Peter-panning.** Any bias $b$ (in world units along the light direction) means an occluder closer than $b$ to the receiver casts no shadow there: a book lying on a table with a 5 cm bias is shadowless. The bias cannot exceed the thinnest contact you need to look right, and cannot be below the acne limit — shadow mapping lives between those.

**Resolution aliasing.** Each shadow texel is one yes/no decision, so shadow edges are staircases of texel size. Viewed up close, one shadow texel can span many screen pixels. **Cascaded shadow maps** split the camera's view distance into ranges, each with its own map, so nearby shadows get small texels.

**Percentage-closer filtering (PCF).** Filtering the stored *depths* bilinearly and then testing is meaningless (the average of a wall's depth and the floor's depth is a surface that doesn't exist). Instead, run the **test** at each texel in a $k \times k$ neighbourhood and average the **results**:

$$\text{lit} = \frac{1}{k^2}\sum_{i,j} \big[\, d_{\text{frag}} \le d_{\text{map}}(s_i, t_j) + b \,\big] \in [0, 1].$$

In words: filter after comparing, not before. Edges become soft gradients, blurring the staircase. *(card: [Percentage-closer filtering](../reference.md#percentage-closer-filtering))*

## Picture

![Two side-view panels with light arriving straight down as coral arrows. Left: a grey box sits on the ground. A dashed ray hits the box top, marked stored 0.875. Directly beneath, the ground under the box is marked in blue as shadowed, its depth greater than stored. Further right a second ray reaches the ground, marked lit, depth equals stored. Right: a sloped grey surface. Each shadow-map texel stores one flat coral depth at its centre. On each texel the half of the slope lower than the coral segment, farther from the light, is marked blue as falsely shadowed. Notes say a bias of at least texel size times tan of the slope removes it](assets/03-02-fig1.svg)

On the right, every texel is half right and half wrong, which is exactly the striped pattern of acne. The coral segments are what the shadow map knows; the grey line is what is actually there.

## Worked examples

**Example 1 (mechanical): one shadow lookup.** The sun shines straight down. Its shadow camera sits at $(0, 20, 0)$ looking at the origin with up $(0, 0, -1)$, and uses an orthographic box $l = b = -10$, $r = t = 10$, $n = 1$, $f = 21$, rendered into a $2048 \times 2048$ map. A box's top face is at height $1.5$ over the point $\mathbf{p} = (2, 0, 3)$ on the ground.

*Light view.* Look-at gives $\mathbf{w} = (0, 1, 0)$, $\mathbf{u} = (0,0,-1)\times(0,1,0) = (1, 0, 0)$, $\mathbf{v} = \mathbf{w}\times\mathbf{u} = (0, 0, -1)$. For $\mathbf{p}$, the offset from the light is $(2, -20, 3)$, so light-view coordinates are $(\mathbf{u}\cdot, \mathbf{v}\cdot, \mathbf{w}\cdot) = (2,\ -3,\ -20)$.

*Orthographic projection* ([1.5](01-05-projection-orthographic-and-perspective.md)): $x_{\text{ndc}} = 2/10 = 0.2$, $y_{\text{ndc}} = -0.3$, $z_{\text{ndc}} = -0.1(-20) - 1.1 = 0.9$.

*Texture space:* $(s, t, d_{\text{frag}}) = (0.6,\ 0.35,\ 0.95)$, which is texel $(\lfloor 0.6 \times 2048 \rfloor, \lfloor 0.35 \times 2048 \rfloor) = (1228, 716)$.

*What pass 1 stored there.* The light saw the box top at $(2, 1.5, 3)$, light-view $z = -18.5$, so $z_{\text{ndc}} = 1.85 - 1.1 = 0.75$ and $d_{\text{map}} = 0.875$.

*Test.* $0.95 \le 0.875 + b$ fails for any reasonable bias: **shadowed**. The depths differ by $0.075$, which in this 20 m depth range is $1.5$ m — the box's height.

**Example 2 (why you'd care): choosing the bias.** Same map: each texel covers $s_{\text{tex}} = 20/2048 = 9.77$ mm of ground.

*Acne limit.* A roof sloped at $\theta = 60°$ to the light direction varies in depth across one texel by $9.77 \times \tan 60° = 16.9$ mm — in depth-buffer units, $16.9\ \text{mm}/20\ \text{m} = 0.00085$. Any constant bias below that shows acne on this roof. A wall at $85°$ needs $9.77 \times \tan 85° = 112$ mm.

*Peter-panning cost.* A constant bias of 112 mm (to fix the wall) means every object less than 11 cm above a surface casts no shadow on it: dropped books, a keyboard on a desk, a character's feet a few centimetres off the floor mid-stride. The shadow now starts 11 cm away from every contact.

*The fix.* Slope-scaled bias: $b = 9.77\ \text{mm} \times \tan\theta$, capped at some maximum. The flat floor under the book gets $b \approx 0$ and the book casts its shadow; the $85°$ wall gets 112 mm and loses its acne. (Depth quantisation itself is irrelevant here: 24 bits over 20 m is $1.2\ \mu\text{m}$ per step, far below the texel-slope error.)

## Watch out

- **You might think** acne is a depth-precision problem, fixed by more bits — **but actually** it is a **resolution** problem: one depth per texel, applied across a sloped patch. Example 2's 24-bit step was 14,000 times smaller than the slope error. More map resolution shrinks acne; more depth bits do not.
- **You might think** you can blur a shadow map like any texture to soften shadows — **but actually** averaging depths invents surfaces between occluders and receivers, producing wrong shadow tests. Compare first, then average the booleans (PCF).
- **You might think** a point light needs one shadow map — **but actually** a single perspective frustum covers under $180°$, so an omnidirectional point light needs six (a cube map), which is six extra depth passes per light per frame. This is why games limit the number of shadow-casting lights.

## One-liner

> Render depth from the light, then call a fragment lit only if its light-space depth is within a bias of what the light saw — too little bias gives acne, too much gives peter-panning, and PCF averages test results, never depths.

## Problems

**P1 (🟢)** Four fragments are tested against a shadow map with bias $b = 0.002$. Classify each as lit or shadowed.

| fragment | $d_{\text{frag}}$ | $d_{\text{map}}$ at its texel |
|---|---|---|
| A | $0.500$ | $0.501$ |
| B | $0.740$ | $0.612$ |
| C | $0.3015$ | $0.3000$ |
| D | $0.906$ | $0.903$ |

Then say which one is most likely acne if you know A, C and D all lie on one sloped lit roof.

**P2 (🟡)** An outdoor game uses one $4096 \times 4096$ orthographic shadow map covering a $200 \times 200$ m area.
(a) How large is one shadow texel on the ground?
(b) A lamp post is 15 cm wide. How many texels wide is its shadow, and what will its shadow look like?
(c) How much memory does the map use as 32-bit float depth?
(d) Instead, four cascades of $1024 \times 1024$ cover square regions 12.5, 50, 200 and 800 m wide. Give each cascade's texel size, and say what total memory they need compared with (c).

**P3 (🔴)** A fragment has $d_{\text{frag}} = 0.601$. Its $3 \times 3$ shadow-map neighbourhood is

$$\begin{pmatrix} 0.412 & 0.415 & 0.600 \\ 0.414 & 0.600 & 0.601 \\ 0.600 & 0.602 & 0.603 \end{pmatrix}.$$

(a) With PCF and bias $b = 0.003$, what fraction is lit? Interpret the three low values.
(b) With $b = 0$, what fraction is lit? Explain what went wrong.
(c) Why would bilinearly filtering these depths at the fragment's position and running one test give a meaningless result?

<details>
<summary>Solutions</summary>

**P1**

| | test $d_{\text{frag}} \le d_{\text{map}} + 0.002$ | result |
|---|---|---|
| A | $0.500 \le 0.503$ | **lit** |
| B | $0.740 \le 0.614$ fails | **shadowed** (by something $0.128$ nearer the light) |
| C | $0.3015 \le 0.3020$ | **lit** |
| D | $0.906 \le 0.905$ fails | **shadowed** |

D is the likely acne. Its depth exceeds the stored value by only $0.003$ — the size of a slope-within-a-texel error, not a real occluder — and it lies on a surface known to be lit. It fails because the bias ($0.002$) is too small for the roof's slope. B's gap of $0.128$ is a genuine shadow.

**P2**

(a) $200\ \text{m}/4096 = \mathbf{4.88}$ **cm** per texel.

(b) $15/4.88 = 3.1$ texels. Its shadow is about **three texels wide** with staircase edges one texel ($\approx 5$ cm) high — visibly blocky, and flickering as the sun or camera moves, because which texels the post covers changes.

(c) $4096^2 \times 4$ bytes $= 67{,}108{,}864$ bytes $= \mathbf{64}$ **MiB**.

(d) Texel sizes: $12.5/1024 = \mathbf{1.2}$ **cm**, $50/1024 = \mathbf{4.9}$ **cm**, $200/1024 = \mathbf{19.5}$ **cm**, $800/1024 = \mathbf{78}$ **cm**. Memory: $4 \times 1024^2 \times 4 = 16$ MiB, **a quarter** of (c). Nearby shadows (first cascade) are four times sharper than the single map, the view distance is four times larger, and distant shadows — small on screen — get coarse texels where coarse is fine.

**P3**

(a) With $b = 0.003$, a texel passes if $0.601 \le d_{\text{map}} + 0.003$, i.e. $d_{\text{map}} \ge 0.598$. The six values from $0.600$ to $0.603$ pass; the three values near $0.41$ fail. Lit fraction $\mathbf{6/9 = 0.667}$.

The low values are an occluder about $0.19$ nearer the light, covering the top-left of the neighbourhood: this fragment is at a shadow **edge**, and PCF renders it two-thirds lit — a soft transition instead of a hard staircase.

(b) With $b = 0$, a texel passes only if $d_{\text{map}} \ge 0.601$: that is $0.601$, $0.602$, $0.603$ — three texels. Lit fraction $\mathbf{3/9 = 0.333}$. The three texels storing $0.600$ are the fragment's **own surface**, sampled at slightly different points on a slope; they read as occluders by $0.001$. That is acne, and it has halved the brightness of an edge that should have been two-thirds lit.

(c) Averaging depths near the occluder edge mixes $0.41$ (the occluder) and $0.60$ (the ground) into values like $0.5$ — the depth of no surface in the scene. A single test against $0.5$ says "shadowed" or "lit" for the whole pixel, so the edge is still a hard step, just at a shifted location. The quantity that should be averaged is the *visibility*, which PCF does.

</details>

## Flashback

**From Lesson 3.1 (the GPU pipeline):** A character mesh with 25,000 unique vertices is drawn once, covering 80,000 pixels with depth complexity 1.4 (it overlaps itself), with $4\times$ MSAA.
(a) How many vertex shader runs?
(b) Roughly how many fragment shader runs without early-z?
(c) The character is now also rendered into one shadow map pass (depth only, no fragment colour work). How many additional vertex shader runs does that cost, and why is the shadow pass usually cheap in fragments?

<details>
<summary>Solution</summary>

(a) $\mathbf{25{,}000}$ — one per unique vertex.

(b) MSAA still runs the fragment shader about once per pixel per triangle, so $80{,}000 \times 1.4 = \mathbf{112{,}000}$ (the $4\times$ multiplies coverage and depth samples, not shading).

(c) Another $\mathbf{25{,}000}$ vertex shader runs — every shadow-casting mesh is transformed again with the light's matrices. The shadow pass is cheap in fragments because it writes depth only: there is no lighting or texturing to compute (unless the material uses `discard` for cut-outs, in which case its alpha texture must still be sampled).

</details>

## Connections

- **Backward:** pass 1 is [2.2](02-02-clipping-and-the-z-buffer.md)'s z-buffer from a new camera built with [1.4](01-04-the-camera-and-view-transform.md)'s look-at and [1.5](01-05-projection-orthographic-and-perspective.md)'s projections; pass 2 is [3.1](03-01-the-programmable-gpu-pipeline.md)'s fragment shader doing a texture lookup ([2.6](02-06-texture-mapping-and-filtering.md)); the staircase edges are [2.7](02-07-aliasing-supersampling-and-mipmaps.md)'s aliasing.
- **Forward:** [3.3](03-03-ray-casting-and-intersection.md) answers the same visibility question exactly, per point, with a **shadow ray** — no resolution, no acne from texels, but a self-intersection epsilon that plays the role of the bias. [3.7](03-07-monte-carlo-path-tracing.md) extends that to area lights, where soft shadows come from averaging many such rays — the physically correct version of what PCF imitates.
- **Sideways:** the light's depth map is a **visibility function** sampled on a grid, the same object that the view-factor calculations of [`heat-transfer` 4.3](../../heat-transfer/lessons/04-03-view-factors-radiation-exchange.md) need when one surface partly blocks radiation between two others.

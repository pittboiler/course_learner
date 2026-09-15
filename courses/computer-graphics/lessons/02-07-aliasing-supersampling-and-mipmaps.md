# Computer Graphics · Lesson 2.7: Aliasing, Supersampling & Mipmaps

> ⏱ ~15 min · Module 2: Rasterization & Shading · Builds on: [2.6 (texture filtering)](02-06-texture-mapping-and-filtering.md), [2.1 (sample-point coverage)](02-01-rasterizing-lines-and-triangles.md), [`communications` 2.1 (sampling theorem)](../../communications/lessons/02-01-sampling-theorem-aliasing.md) · Unlocks: [3.7 (sampling in path tracing)](03-07-monte-carlo-path-tracing.md)

## Why this matters

Staircase edges on a diagonal line. A striped shirt that crawls with swirling moiré when the camera moves. A tiled floor that dissolves into sparkling noise in the distance. These are all the same failure: the image is a grid of **point samples**, and anything that changes faster than the grid can record doesn't just get lost — it comes back disguised as something slower and wrong.

The sampling theorem says exactly when this happens ([`communications` 2.1](../../communications/lessons/02-01-sampling-theorem-aliasing.md) owns the theorem; this lesson applies it in 2D). The cures are the two things you can do about a signal that's too detailed for your sample rate: **take more samples** (supersampling) or **remove the detail before sampling** (prefiltering — which, for textures, is what mipmaps do). Each has a price, and this lesson is mostly about computing it.

## The idea

**Aliasing is a disguise.** Sample a pattern of stripes once per pixel. If the stripes are wider than two pixels, the samples trace them faithfully. If the stripes are narrower, the samples hit them at a slowly drifting phase — one sample catches a peak, the next catches a bit before the next peak, and so on — and the samples draw out a *wide, slow* stripe pattern that isn't there. That false pattern is the alias. Once sampled, the fake and the real are indistinguishable.

**Two cures.** Either sample faster than the detail — several samples per pixel, then average — or blur the detail away first, so that what gets sampled is already slow enough. Geometry edges have infinitely sharp detail, so for them the practical answer is more samples. Textures are known in advance, so for them you can precompute blurred copies at every scale and pick the right one per pixel. Those precomputed copies are **mipmaps**.

## The formal version

**Sampling rate of an image.** One sample per pixel is a sampling rate of $1$ per pixel along each axis, so the highest pattern frequency representable is the **Nyquist limit**, $\tfrac12$ cycle per pixel — a stripe pattern with period 2 pixels. A pattern of frequency $f$ cycles per pixel, sampled at rate $f_s$, appears at the alias frequency

$$f_{\text{alias}} = \lvert f - k f_s \rvert, \qquad k = \operatorname{round}(f/f_s).$$

In words: frequency folds back around multiples of the sampling rate, so a pattern just below one cycle per pixel looks like a pattern just above zero. *(card: [Aliasing in images](../reference.md#aliasing-in-images))*

**Supersampling (SSAA).** Take $N$ samples per pixel, evaluating coverage, depth *and shading* at each, and average (a box filter). The effective Nyquist limit rises by $\sqrt N$ per axis on a regular grid. Cost: $N$ times the shading work and $N$ times the framebuffer memory.

**Multisampling (MSAA).** Take $N$ **coverage and depth** samples per pixel, but run the fragment shader **once per pixel per triangle**, storing that one colour into every sample the triangle covers. Edges get $N$-sample antialiasing; interior shading costs about $1\times$. Memory is still $N\times$. MSAA fixes geometric edges and does nothing for aliasing *inside* a surface — texture or specular shimmer. *(card: [SSAA and MSAA](../reference.md#ssaa-and-msaa))*

**Mipmaps.** A mipmap is a pyramid of a texture: level 0 is the original $W \times H$, and each level halves each dimension (down to 1) by averaging $2 \times 2$ blocks. Total storage:

$$1 + \tfrac14 + \tfrac1{16} + \cdots = \tfrac43 \quad\text{times the base level}.$$

*(card: [Mipmap](../reference.md#mipmap))*

**Level selection.** Let $\rho$ be how many texels one pixel step covers. With screen-space derivatives of the texture coordinates (which GPUs get by differencing neighbouring pixels),

$$L_x = \sqrt{\left(W\frac{\partial u}{\partial x}\right)^2 + \left(H\frac{\partial v}{\partial x}\right)^2}, \qquad L_y = \sqrt{\left(W\frac{\partial u}{\partial y}\right)^2 + \left(H\frac{\partial v}{\partial y}\right)^2},$$

$$\rho = \max(L_x, L_y), \qquad \lambda = \log_2 \rho.$$

In words: if a pixel spans $2^\lambda$ texels, read level $\lambda$, where one texel spans one pixel. $\lambda \le 0$ means magnification — use level 0 with bilinear filtering. *(card: [Mip level selection](../reference.md#mip-level-selection))*

**Trilinear filtering.** $\lambda$ is rarely an integer. Bilinear-sample levels $\lfloor\lambda\rfloor$ and $\lfloor\lambda\rfloor + 1$ and blend them linearly with weight $\lambda - \lfloor\lambda\rfloor$ on the coarser level. Eight texels per lookup.

**Anisotropy.** At grazing angles a pixel's footprint in the texture is a long thin ellipse: $L_x$ and $L_y$ differ a lot. Choosing $\rho = \max$ picks a level blurry enough for the long axis, over-blurring the short one. **Anisotropic filtering** instead picks the level for the *short* axis, $\log_2 \min(L_x, L_y)$, and takes several probes along the long axis — roughly $\max/\min$ of them.

## Picture

![A thin coral cosine with period 1.2 pixels oscillates rapidly across 12 pixels. Blue dots mark its value at each integer pixel position. A thick blue cosine with period 6 pixels passes exactly through every blue dot. Labels read true pattern 0.833 cycles per pixel, and what the samples show 0.167 cycles per pixel](assets/02-07-fig1.svg)

Every blue dot lies on *both* curves. From the samples alone there is no way to tell which one was in the scene — so the renderer shows the smooth, wide one, and a fine fence on screen turns into a slow ripple. Averaging several samples per pixel, or blurring the stripes before sampling, would have shown a flat grey instead: wrong detail replaced by no detail, which the eye forgives.

## Worked examples

**Example 1 (mechanical): picking a mip level for a floor.** A $1024 \times 1024$ floor texture is seen at a grazing angle. At some pixel, the texture coordinates change per pixel step by

$$\frac{\partial u}{\partial x} = 0.002, \quad \frac{\partial v}{\partial x} = 0, \quad \frac{\partial u}{\partial y} = 0, \quad \frac{\partial v}{\partial y} = 0.008.$$

$L_x = 1024 \times 0.002 = 2.048$ texels per pixel horizontally; $L_y = 1024 \times 0.008 = 8.192$ vertically (along the receding direction).

*Isotropic trilinear:* $\rho = 8.192$, $\lambda = \log_2 8.192 = 3.034$. Blend level 3 (weight $0.966$) and level 4 (weight $0.034$). At level 3 a texel spans 8 base texels, so horizontally the pixel now sees a quarter of a texel — **four times blurrier** than it needs to be across the floor.

*Anisotropic:* level $\log_2 \min(2.048, 8.192) = \log_2 2.048 = 1.03$, with $8.192/2.048 = 4$ probes along the long axis. The floor stays sharp horizontally, at four times the texture reads.

**Example 2 (why you'd care): pricing antialiasing at 4K.** A $3840 \times 2160$ frame has $8{,}294{,}400$ pixels. Compare $4\times$ SSAA and $4\times$ MSAA, with colour RGBA8 (4 bytes) and depth-stencil (4 bytes) per sample, in a scene where about 5% of pixels lie on a triangle edge.

| | shader runs per frame | framebuffer memory |
|---|---|---|
| no AA | $8.29 \times 10^6$ | $8.29 \times 10^6 \times 8 = 63$ MiB |
| $4\times$ SSAA | $3.32 \times 10^7$ ($4\times$) | $253$ MiB |
| $4\times$ MSAA | $\approx 8.29 \times 10^6 \times (1 + 0.05) \approx 8.7 \times 10^6$ | $253$ MiB |

(Edge pixels covered by two triangles run the shader twice; that is the 5%.) MSAA buys edge quality equal to SSAA for about 5% more shading instead of 300% more — which is why it was the default for a decade. It leaves every texture and highlight inside a triangle exactly as aliased as before, which is why mipmaps are needed anyway.

## Watch out

- **You might think** a higher-resolution display eliminates aliasing — **but actually** it only raises the Nyquist limit; any pattern finer than the new limit still aliases, and moving cameras keep producing new fine detail (distant fences, thin wires). Resolution reduces jaggies' *size*; it does not stop crawling.
- **You might think** mipmapping costs a lot of memory — **but actually** the whole pyramid adds only a third of the base level. The real cost is that level selection needs derivatives, which GPUs compute from $2 \times 2$ blocks of pixels — so a texture lookup inside a conditional branch that differs between neighbouring pixels gets garbage derivatives and the wrong mip level.
- **You might think** averaging samples is a neutral way to combine them — **but actually** averaging must happen on **linear** light values ([2.5](02-05-blinn-phong-shading-frequency-materials.md)). Averaging sRGB samples makes antialiased edges and downsampled mip levels too dark, and a mip chain built in sRGB visibly darkens a high-contrast texture as it recedes.

## One-liner

> Point samples can't tell a fine pattern from its slow alias above half a cycle per pixel; fix edges with more samples (MSAA shades once, SSAA shades $N$ times) and fix textures with prefiltered mipmaps, reading level $\log_2$ of the texels per pixel.

## Problems

**P1 (🟢)** A texture is $1024 \times 512$.
(a) List the dimensions of every mip level down to $1 \times 1$. How many levels are there?
(b) What is the total texel count of the chain, and what multiple of the base level is that?

**P2 (🟡)** At a pixel, a $2048 \times 2048$ texture has
$$\frac{\partial u}{\partial x} = 0.0005,\quad \frac{\partial v}{\partial x} = 0.0002,\quad \frac{\partial u}{\partial y} = -0.0001,\quad \frac{\partial v}{\partial y} = 0.0012.$$
(a) Compute $L_x$, $L_y$ and $\lambda$.
(b) Which two levels does trilinear filtering read, with what weights?
(c) Compute the anisotropy ratio, and the level an anisotropic filter would use.

**P3 (🔴)** A fence's pickets project to a stripe pattern on screen. Rendered with one sample per pixel, what apparent stripe period (in pixels) appears if the true period is (a) 3 pixels, (b) 1.5 pixels, (c) 1.2 pixels, (d) 0.9 pixels? (e) Why does (d) look *worse* than (c) in motion even though its alias period is larger? (f) What sample rate per axis would be needed to represent (d) without aliasing?

<details>
<summary>Solutions</summary>

**P1**

(a) Halve each dimension (never below 1):

| level | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| width | 1024 | 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| height | 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 | 1 |

**11 levels**.

In general a texture has $\lfloor\log_2 \max(W, H)\rfloor + 1$ levels; the height reaches 1 one level early and then stays at 1.

(b) Sum of products:

$$524{,}288 + 131{,}072 + 32{,}768 + 8{,}192 + 2{,}048$$

$$+\ 512 + 128 + 32 + 8 + 2 + 1 = \mathbf{699{,}051}\ \text{texels}.$$

That is $699{,}051/524{,}288 = \mathbf{1.33334}$ times the base. The last level only halves instead of quartering, which adds a hair over $\tfrac43$.

**P2**

(a) $L_x = \sqrt{(2048 \times 0.0005)^2 + (2048 \times 0.0002)^2} = \sqrt{1.024^2 + 0.4096^2} = \sqrt{1.0486 + 0.1678} = \mathbf{1.103}$.

$L_y = \sqrt{(2048 \times 0.0001)^2 + (2048 \times 0.0012)^2} = \sqrt{0.2048^2 + 2.4576^2} = \sqrt{0.0419 + 6.0398} = \mathbf{2.466}$.

$\rho = 2.466$, $\lambda = \log_2 2.466 = \mathbf{1.302}$.

(b) Levels **1** and **2**, with weight $1 - 0.302 = \mathbf{0.698}$ on level 1 and $\mathbf{0.302}$ on level 2.

(c) Ratio $2.466/1.103 = \mathbf{2.24}$ (it is $\sqrt5$ here). An anisotropic filter uses $\log_2 1.103 = \mathbf{0.14}$ — essentially level 0 — with 2 or 3 probes along the $y$ footprint.

**P3**

Frequency $f = 1/\text{period}$ cycles per pixel, $f_s = 1$, $f_{\text{alias}} = \lvert f - \operatorname{round}(f) \rvert$.

| | period | $f$ | $f_{\text{alias}}$ | apparent period |
|---|---|---|---|---|
| (a) | 3 | $0.333$ | $0.333$ | **3** (below Nyquist: correct) |
| (b) | 1.5 | $0.667$ | $0.333$ | **3** (aliased: looks like (a)) |
| (c) | 1.2 | $0.833$ | $0.167$ | **6** |
| (d) | 0.9 | $1.111$ | $0.111$ | **9** |

(e) The alias's *phase* depends on how the true pattern lines up with the pixel grid. Moving the camera by a fraction of a pixel shifts that alignment, and the alias shifts by $f/f_{\text{alias}}$ times as much: $1.111/0.111 = 10$ times the true motion in (d), versus $0.833/0.167 = 5$ times in (c): a slow pan makes (d)'s false stripes race twice as fast. The direction differs too. In (c) the true frequency sits just *below* $f_s$ and folds to $-0.167$, so its alias runs **backwards** — pan right, stripes drift left, the wagon-wheel effect. In (d) it sits just *above* $f_s$ and folds to $+0.111$, so its alias runs forwards, ten times too fast.

(f) Nyquist requires $f < f_s/2$, so $f_s > 2 \times 1.111 = 2.22$ samples per pixel per axis — **3** per axis on a regular grid ($3 \times 3 = 9$ samples per pixel), followed by averaging.

</details>

## Flashback

**From Lesson 2.6 (texture filtering):** A $4 \times 4$ texture (row $j = 0$ at the bottom) has rows $j=1$: $(64, 128, 192, 255)$ and $j = 2$: $(128, 192, 255, 192)$, reading $i = 0$ to $3$. Look up $(u, v) = (0.95, 0.5)$ with bilinear filtering.
(a) Find $i_0$, $j_0$, $f_x$, $f_y$.
(b) Compute the value with **repeat** wrapping.
(c) Compute the value with **clamp** wrapping, and explain the difference.

<details>
<summary>Solution</summary>

(a) $x = 0.95 \cdot 4 - 0.5 = 3.3$, $y = 0.5 \cdot 4 - 0.5 = 1.5$: $i_0 = 3$, $f_x = 0.3$, $j_0 = 1$, $f_y = 0.5$. The right-hand neighbour is column $i = 4$, off the texture.

(b) Repeat sends column 4 to column 0. Row 1: $0.7(255) + 0.3(64) = 178.5 + 19.2 = 197.7$. Row 2: $0.7(192) + 0.3(128) = 134.4 + 38.4 = 172.8$. Blend: $0.5(197.7) + 0.5(172.8) = \mathbf{185.25}$.

(c) Clamp sends column 4 to column 3. Row 1: $255$; row 2: $192$. Blend: $\mathbf{223.5}$.

With repeat, the lookup at the right edge blends in the **left** edge's texels, as it should for a tiling texture; with clamp it blends only with itself. The $38$-unit difference is the visible seam you get if a tiling texture is sampled with clamp, or a non-tiling one with repeat.

</details>

## Connections

- **Backward:** the sample-at-the-centre model is [2.1](02-01-rasterizing-lines-and-triangles.md)'s coverage rule; each mip level is read with [2.6](02-06-texture-mapping-and-filtering.md)'s bilinear filter; the folding formula is [`communications` 2.1](../../communications/lessons/02-01-sampling-theorem-aliasing.md)'s aliasing result applied per image axis.
- **Forward:** [3.2](03-02-shadow-mapping.md)'s shadow maps alias in exactly this way and are filtered with a variant of these ideas (PCF). [3.7](03-07-monte-carlo-path-tracing.md) replaces regular supersampling grids with random samples, trading structured aliasing for unstructured noise.
- **Sideways:** the mipmap pyramid is a discrete **scale space**, the same multiresolution structure as the Laplacian pyramids and wavelets that follow from [`fourier-analysis`](../../fourier-analysis/syllabus.md)'s treatment of filtering; moiré is the 2D analogue of the stroboscopic effect that makes wagon wheels spin backwards on film.

# Computer Graphics · Lesson 2.6: Texture Mapping & Filtering

> ⏱ ~15 min · Module 2: Rasterization & Shading · Builds on: [2.3 (perspective-correct interpolation)](02-03-perspective-correct-interpolation.md), [2.5 (materials and sRGB)](02-05-blinn-phong-shading-frequency-materials.md) · Unlocks: [2.7 (aliasing and mipmaps)](02-07-aliasing-supersampling-and-mipmaps.md), [3.2 (shadow maps as textures)](03-02-shadow-mapping.md)

## Why this matters

A brick wall has thousands of visible details: mortar lines, chips, colour variation. Modelling each as geometry would cost millions of triangles. Instead, the wall is two triangles and a photograph, and every pixel looks up what colour the photograph has *at that point of the wall*. That lookup — **texture mapping** — is how nearly all surface detail in real-time graphics is produced, and it is not just colour: roughness, normals, shadows and precomputed lighting are all stored as textures.

Two separate problems hide in "look up the colour at that point". First, **which point of the image** belongs to this point of the surface — a question about parameterizations, seams and distortion. Second, **what is the colour there**, when the point falls between the image's pixels — a question about reconstruction. This lesson does both for the case where a texel is larger than a pixel; [2.7](02-07-aliasing-supersampling-and-mipmaps.md) does the harder opposite case.

## The idea

**Texture coordinates are a map from the surface to the picture.** Each vertex stores a pair $(u, v)$ saying where it sits in the image, with $(0,0)$ one corner and $(1,1)$ the other. Interpolate those across the triangle ([2.3](02-03-perspective-correct-interpolation.md)) and every pixel knows its spot in the image. Wrapping a flat picture onto a curved surface always stretches it somewhere — like peeling an orange and trying to flatten the peel — so choosing $(u, v)$ is a design decision with visible trade-offs.

**Between texels, guess sensibly.** A texture is a grid of samples, not a continuous picture. When the lookup point lands between four texel centres, you can take the nearest one — cheap, but it turns every texel into a visible square block when magnified — or blend the four in proportion to how close each one is. That blend is **bilinear filtering**: interpolate horizontally, then vertically.

## The formal version

**Texture space.** A $W \times H$ texture covers $[0,1]^2$. Texel $(i, j)$ is centred at $\big((i + \tfrac12)/W,\ (j + \tfrac12)/H\big)$. A lookup at $(u, v)$ lands at continuous texel position

$$x = uW - \tfrac12, \qquad y = vH - \tfrac12,$$

where texel centres sit at integer $x$, $y$. *(card: [Texture coordinates](../reference.md#texture-coordinates))*

**Wrap modes** decide what $(u, v)$ outside $[0,1]$ means:

| mode | rule for a coordinate $s$ | typical use |
|---|---|---|
| **repeat** | $s - \lfloor s \rfloor$ | tiling bricks, floors |
| **clamp** | $\min(\max(s, 0), 1)$, edge texels extend | decals, sky edges, UI |
| **mirror** | $1 - \lvert (s \bmod 2) - 1 \rvert$: reflect at every integer | seamless tiling of non-tileable images |

(So for mirror, $s \in [0,1]$ is unchanged, $s \in [1,2]$ maps to $2 - s$, and $s \in [-1, 0]$ maps to $-s$.) *(card: [Wrap modes](../reference.md#wrap-modes))*

**Nearest-neighbour filtering** returns texel $(\lfloor uW \rfloor,\ \lfloor vH \rfloor)$.

**Bilinear filtering.** Let $i_0 = \lfloor x \rfloor$, $j_0 = \lfloor y \rfloor$, $f_x = x - i_0$, $f_y = y - j_0$, and $T_{ij}$ the texel values. Then

$$T(u,v) = (1-f_x)(1-f_y)\,T_{i_0 j_0} + f_x(1-f_y)\,T_{i_0+1,\,j_0} + (1-f_x)f_y\,T_{i_0,\,j_0+1} + f_x f_y\,T_{i_0+1,\,j_0+1}.$$

In words: each of the four surrounding texels is weighted by the area of the rectangle **opposite** it — the same "opposite area" rule as barycentric coordinates in [2.1](02-01-rasterizing-lines-and-triangles.md), for a square instead of a triangle. The result is continuous, so magnified textures look smooth rather than blocky, but it is not smooth in slope: bilinear magnification shows faint diamond or cross patterns. *(card: [Bilinear filtering](../reference.md#bilinear-filtering))*

Filtering, like lighting, must be done on **linear** values: decode sRGB texels first ([2.5](02-05-blinn-phong-shading-frequency-materials.md)).

**Parameterizations.**

- **Planar:** $(u, v) = $ two coordinates of the point, scaled — like a slide projector. Faces parallel to the projection direction get a single row of texels smeared across them: a surface tilted by $\theta$ from facing the projector is stretched by $1/\cos\theta$.
- **Spherical (equirectangular):** $u = \varphi/2\pi$, $v = \vartheta/\pi$ for longitude $\varphi$ and polar angle $\vartheta$. Every row of the image wraps a full circle of latitude, so texels are squeezed east–west by $\sin\vartheta$ (the cosine of latitude), and the whole top row collapses to a point at the pole.
- **UV unwrapping** (atlases): cut the mesh along chosen **seams**, flatten each piece with minimal distortion, and pack the pieces into one image. This is what artists do for characters.

**Seams.** Along a seam, one position has two different texture coordinates, so the mesh must store **two vertices** there. A triangle whose vertices straddle the $u = 0 / u = 1$ line of a wrapped texture would otherwise interpolate across the *whole* image backwards.

## Picture

![A square whose four corners are texel centres with values 50 at bottom left, 60 at bottom right, 90 at top left and 100 at top right. A coral sample point sits near the top right at fx 0.7, fy 0.9, labelled sample 93. Dashed lines through the sample divide the square into four rectangles. The large lower-left rectangle is labelled area fx times fy equals 0.63, weights the 100; the lower-right one is labelled 1 minus fx times fy equals 0.27, weights the 90](assets/02-06-fig1.svg)

The sample sits close to the $100$ texel, so the big rectangle — the one *away* from $100$ — is the weight given to $100$. Slide the sample to a corner and that corner's opposite rectangle grows to fill the square: the value becomes that texel exactly.

## Worked examples

**Example 1 (mechanical): a bilinear lookup.** A $4 \times 4$ grayscale texture, with row $j = 0$ at the bottom:

| | $i = 0$ | $i = 1$ | $i = 2$ | $i = 3$ |
|---|---|---|---|---|
| $j = 3$ | 130 | 140 | 150 | 160 |
| $j = 2$ | 90 | 100 | 110 | 120 |
| $j = 1$ | 50 | 60 | 70 | 80 |
| $j = 0$ | 10 | 20 | 30 | 40 |

Look up $(u, v) = (0.3, 0.6)$.

*Nearest:* $(\lfloor 1.2 \rfloor, \lfloor 2.4 \rfloor) = (1, 2)$, value $\mathbf{100}$.

*Bilinear:* $x = 0.3 \cdot 4 - 0.5 = 0.7$, $y = 0.6 \cdot 4 - 0.5 = 1.9$. So $i_0 = 0$, $f_x = 0.7$, $j_0 = 1$, $f_y = 0.9$, and the four texels are $T_{01} = 50$, $T_{11} = 60$, $T_{02} = 90$, $T_{12} = 100$.

Horizontally first: bottom pair $0.3(50) + 0.7(60) = 57$; top pair $0.3(90) + 0.7(100) = 97$. Then vertically: $0.1(57) + 0.9(97) = 5.7 + 87.3 = \mathbf{93}$.

Same thing with the four weights: $0.03(50) + 0.07(60) + 0.27(90) + 0.63(100) = 1.5 + 4.2 + 24.3 + 63 = 93$. ✓

**Example 2 (why you'd care): the seam that inverts a texture.** A globe uses equirectangular texture coordinates, so the image's left and right edges meet along one meridian — the texture seam. A triangle edge crosses that meridian, with one vertex at $u = 0.95$ and the other at $u = 0.05$: $36°$ apart on the globe, straddling the $u = 0/1$ line.

Interpolating the edge's midpoint gives $u = \tfrac12(0.95 + 0.05) = 0.5$ — the **opposite side of the Earth**. The triangle's interior displays the entire texture squeezed backwards across a sliver of the globe, a visible band of garbage along the meridian.

The fix is the seam rule: give that vertex a duplicate with $u = 1.05$. Now the midpoint is $\tfrac12(0.95 + 1.05) = 1.0$, which **repeat** wrapping maps to $u = 0$ — the correct meridian. The mesh gains a column of duplicated vertices, identical in position and different only in $u$. Every unwrapped mesh has such seams; exporters create the duplicates automatically, which is why a model's vertex count in an engine is usually larger than in the modelling tool.

## Watch out

- **You might think** $u = 0$ is the centre of the first texel — **but actually** it is the texel's left *edge*; the centre is at $u = 1/(2W)$. Forgetting the half-texel offset shifts every bilinear lookup by half a texel, blurring pixel-exact UI art and producing a one-texel border of the wrong colour under clamp mode.
- **You might think** bilinear filtering prevents aliasing — **but actually** it only helps when a texel covers *more* than a pixel (magnification). When many texels fall inside one pixel (a distant wall), bilinear still reads just four of them and the rest are skipped, which shimmers. That is the minification problem of [2.7](02-07-aliasing-supersampling-and-mipmaps.md).
- **You might think** a planar or spherical mapping is a neutral default — **but actually** each has built-in distortion: planar mappings smear texels by $1/\cos\theta$ on tilted faces, and spherical mappings pinch texels to zero width at the poles. The distortion is in the parameterization, so no filter can remove it.

## One-liner

> Texture coordinates map the surface into the image; wrap modes say what lies outside $[0,1]$; and between texel centres, bilinear filtering weights each of the four neighbours by the area of the rectangle opposite it.

## Problems

**P1 (🟢)** A $4 \times 4$ texture (row $j = 0$ at the bottom), with clamp wrapping:

| | $i = 0$ | $i = 1$ | $i = 2$ | $i = 3$ |
|---|---|---|---|---|
| $j = 3$ | 100 | 200 | 255 | 200 |
| $j = 2$ | 200 | 255 | 255 | 255 |
| $j = 1$ | 100 | 200 | 255 | 200 |
| $j = 0$ | 0 | 100 | 200 | 100 |

(a) Give the nearest and bilinear values at $(u, v) = (0.55, 0.40)$.
(b) Give the bilinear value at $(u, v) = (0.05, 0.90)$, and say which texels clamping duplicated.

**P2 (🟡)** For the texture coordinate $(u, v) = (1.3,\ -0.2)$, give the coordinate actually sampled under **repeat**, **clamp** and **mirror** wrapping. Then say which mode you would choose for (a) a tiling grass texture, (b) a road-sign decal, (c) a marble slab photo that must tile without visible seams.

**P3 (🔴)** Earth's surface (radius 6371 km) is textured with a $2048 \times 1024$ equirectangular image.
(a) How many kilometres does one texel span east–west and north–south at the equator?
(b) How many kilometres east–west at latitude $60°$?
(c) At what latitude is a texel one quarter as wide east–west as at the equator?
(d) A modeller proposes a *planar* top-down projection instead, to avoid the pole pinch. What happens near the equator?

<details>
<summary>Solutions</summary>

**P1**

(a) *Nearest:* $(\lfloor 2.2 \rfloor, \lfloor 1.6 \rfloor) = (2, 1)$, value $\mathbf{255}$.

*Bilinear:* $x = 0.55 \cdot 4 - 0.5 = 1.7$, $y = 0.40 \cdot 4 - 0.5 = 1.1$; so $i_0 = 1$, $f_x = 0.7$, $j_0 = 1$, $f_y = 0.1$. Texels: $T_{11} = 200$, $T_{21} = 255$, $T_{12} = 255$, $T_{22} = 255$.

Row $j = 1$: $0.3(200) + 0.7(255) = 60 + 178.5 = 238.5$. Row $j = 2$: $0.3(255) + 0.7(255) = 255$. Vertically: $0.9(238.5) + 0.1(255) = 214.65 + 25.5 = \mathbf{240.15}$.

(b) $x = 0.05 \cdot 4 - 0.5 = -0.3$, $y = 0.9 \cdot 4 - 0.5 = 3.1$; so $i_0 = -1$, $f_x = 0.7$, $j_0 = 3$, $f_y = 0.1$. Clamping maps column $-1$ to column $0$ and row $4$ to row $3$, so the four lookups $(-1,3)$, $(0,3)$, $(-1,4)$, $(0,4)$ all become texel $(0,3)$, whose value is $100$.

Value $\mathbf{100}$. Clamping duplicated the corner texel $(0, 3)$ into all four slots — the lookup is outside the grid of texel centres on two sides, so there is nothing to blend with.

**P2**

| mode | $u = 1.3$ | $v = -0.2$ |
|---|---|---|
| repeat | $1.3 - 1 = 0.3$ | $-0.2 - (-1) = 0.8$ |
| clamp | $1.0$ (right edge texels) | $0.0$ (bottom edge texels) |
| mirror | $2 - 1.3 = 0.7$ | $0.2$ |

(a) Tiling grass: **repeat** — the texture is authored to tile.
(b) Decal: **clamp** — outside the sign, you want the border colour (often transparent), not another copy of the sign.
(c) Marble photo: **mirror** — reflecting at each boundary makes neighbouring copies match along the edge, hiding the seam at the cost of visible symmetry.

**P3**

(a) East–west at the equator: circumference $2\pi(6371) = 40{,}030$ km over 2048 texels = $\mathbf{19.55}$ **km**. North–south: pole to pole is $\pi(6371) = 20{,}015$ km over 1024 texels = $\mathbf{19.55}$ **km**. Square texels at the equator — which is why the image is 2:1.

(b) A circle of latitude $60°$ has radius $6371\cos 60°$, so each texel spans $19.55 \times 0.5 = \mathbf{9.77}$ **km** east–west, while still $19.55$ km north–south: texels are 2:1 tall.

(c) $\cos\text{(latitude)} = 0.25 \Rightarrow$ latitude $= \arccos 0.25 = \mathbf{75.5°}$.

(d) A top-down planar projection gives each point $(u, v)$ from its $(x, y)$, ignoring $z$. Near the equator the surface is nearly **parallel** to the projection direction, so a tilt $\theta \to 90°$ stretches texels by $1/\cos\theta \to \infty$: the equator gets a single smeared row of texels, and the northern and southern hemispheres receive the *same* image mirrored. The pinch has moved from the poles to the equator and got worse. Distortion can be moved around by choosing a parameterization; for a sphere it cannot be removed.

</details>

## Flashback

**From Lesson 2.4 (Phong lighting):** A surface point at the origin has normal $(0, 0, 1)$. A white point light with $I_0 = 25$ is at $(0, 3, 4)$, using physical $1/d^2$ falloff. The eye is at $(0, -3, 4)$. Material: $k_d = 0.6$, $k_s = 0.3$, $p = 30$, no ambient.
(a) Compute $\mathbf{l}$, $\mathbf{v}$, $\mathbf{r}$ and the light intensity at the point.
(b) Compute the shaded value.
(c) Explain in one sentence why the specular factor comes out exactly 1.

<details>
<summary>Solution</summary>

(a) Light offset $(0, 3, 4)$ has length $d = 5$: $\mathbf{l} = (0,\ 0.6,\ 0.8)$, and $I = 25/25 = 1$. Eye offset $(0,-3,4)$: $\mathbf{v} = (0,\ -0.6,\ 0.8)$.

$\mathbf{n}\cdot\mathbf{l} = 0.8$, so $\mathbf{r} = 2(0.8)(0,0,1) - (0, 0.6, 0.8) = (0,\ -0.6,\ 0.8)$.

(b) $\mathbf{r}\cdot\mathbf{v} = 0.36 + 0.64 = 1$, so the specular factor is $1^{30} = 1$.

$$L = 1 \times \big(0.6 \times 0.8 + 0.3 \times 1\big) = 0.48 + 0.30 = \mathbf{0.78}.$$

(c) The eye sits exactly on the mirror direction of the light — the light and eye are symmetric about the normal — so $\mathbf{r} = \mathbf{v}$ and the viewer is looking at the very centre of the highlight.

</details>

## Connections

- **Backward:** $(u, v)$ reach each pixel through [2.3](02-03-perspective-correct-interpolation.md)'s correction; bilinear weights are [2.1](02-01-rasterizing-lines-and-triangles.md)'s "opposite area" rule on a square; texels are decoded to linear light as in [2.5](02-05-blinn-phong-shading-frequency-materials.md).
- **Forward:** [2.7](02-07-aliasing-supersampling-and-mipmaps.md) handles minification with mipmaps; [3.2](03-02-shadow-mapping.md) stores depths in a texture and looks them up with these same coordinates; [3.1](03-01-the-programmable-gpu-pipeline.md) shows a texture lookup as one line of a fragment shader; [4.4](04-04-bezier-surface-patches.md)'s patches come with a natural $(u, v)$ parameterization for free.
- **Sideways:** bilinear interpolation is the tensor-product version of linear interpolation, the lowest-order case of [`numerical-analysis` 2.1](../../numerical-analysis/lessons/02-01-polynomial-interpolation.md)'s polynomial interpolation. The impossibility of flattening a sphere without distortion is Gauss's *Theorema Egregium* — a sphere has non-zero Gaussian curvature and a plane has none — proved in [`differential-geometry` 1.4](../../differential-geometry/lessons/01-04-gaussian-curvature-theorema-egregium.md).

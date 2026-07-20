# Complex Analysis · Lesson 1.2: Functions, limits, and continuity on $\mathbb{C}$

> ⏱ ~15 min · Module 1: The complex plane · Builds on: [1.1 Complex numbers and the geometry of $\mathbb{C}$](01-01-complex-numbers-geometry.md), `real-analysis` (ε–δ, open/closed sets, Bolzano–Weierstrass) · Unlocks: [1.3 The exponential, logarithm, and complex trig](01-03-exponential-log-trig.md)

## Why this matters

Before we can ask the one question this whole course is about — *is this function differentiable?* — we need limits and continuity on $\mathbb{C}$. The good news is that you already own almost all of it: as a place to measure distances, $\mathbb{C}$ **is** $\mathbb{R}^2$, so every ε–δ limit theorem, every open/closed set, every convergent-subsequence argument from `real-analysis` transfers with the words barely changed. The one genuinely new thing is small but decisive — in the plane, "$z \to z_0$" means *approach from every direction at once* — and it is exactly the feature that will make complex differentiability shockingly strict in Module 2. This lesson banks the free transfer and flags the one thing that isn't free.

## The idea

Write $z = x + iy$ and read it as the point $(x,y)$. Then the modulus $|z-w|$ is nothing but the ordinary Euclidean distance between two points of the plane — Pythagoras, unchanged:

$$|z - w| = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}.$$

Everything analytic is built out of *distance*: a limit says "eventually within $\varepsilon$," continuity says "close inputs give close outputs," compactness says "no escaping to the fringe." Since the distance on $\mathbb{C}$ is the distance on $\mathbb{R}^2$, all of that theory is already yours. Nothing to re-prove — just relabel $(x,y)$ as $x+iy$ and keep going.

So what could be new? Only this. On the real line, "$x \to x_0$" has just two roads in: from the left and from the right. In the plane there are infinitely many — you can slide toward $z_0$ along the real axis, straight down the imaginary axis, spiraling in, along any curve at all. A complex limit exists only if **all** of those roads deliver the same value. That is a strictly heavier demand than the two-sided real limit, and holding onto it now is the difference between finding Module 2 magical and finding it mysterious.

## The formal version

**Distance and disks.** The **open disk** of radius $r>0$ about $z_0$ is

$$D(z_0, r) = \{\, z \in \mathbb{C} : |z - z_0| < r \,\}.$$

> In words: all points strictly closer than $r$ to the center — the plane's version of an open interval, and the basic "neighborhood" out of which every topological notion is built.

**Topology of $\mathbb{C}$ (verbatim from `real-analysis`, now in 2D).** A set $U \subseteq \mathbb{C}$ is **open** if every point of $U$ sits inside some disk $D(z_0,r) \subseteq U$; it is **closed** if its complement is open. The **boundary** $\partial S$ is the points every disk around which meets both $S$ and its complement. $S$ is **bounded** if $S \subseteq D(0,R)$ for some $R$. A **region** (or **domain**) is a nonempty open *connected* set — an open patch in one piece, the natural home of the functions we'll differentiate.

> In words: open = no point is trapped against an edge; closed = contains its edge; region = an open blob you can walk across without leaving.

**Compactness.** $K \subseteq \mathbb{C}$ is **compact** iff it is closed and bounded.

> In words: this is the **Heine–Borel** theorem from `real-analysis`, applied in $\mathbb{R}^2$ — "closed + bounded" is the usable test, and compact sets are where continuous functions attain maxima and where the residue estimates of Module 6 will live.

**Sequences.** $z_n \to z$ means $|z_n - z| \to 0$. Splitting into parts $z_n = x_n + i y_n$,

$$z_n \to z \iff x_n \to x \ \text{ and } \ y_n \to y.$$

> In words: complex convergence is just simultaneous convergence of the real and imaginary parts — one 2D limit is two 1D limits stapled together. Consequently **Bolzano–Weierstrass** holds: every bounded sequence in $\mathbb{C}$ has a convergent subsequence (apply the real B–W to $x_n$, then to $y_n$ along that subsequence).

**Functional limit.** For $f$ defined near $z_0$, we say $\displaystyle\lim_{z\to z_0} f(z) = L$ if: for every $\varepsilon > 0$ there is a $\delta > 0$ such that

$$0 < |z - z_0| < \delta \ \implies\ |f(z) - L| < \varepsilon.$$

> In words: identical to the real ε–δ definition — pin the output within $\varepsilon$ of $L$ by keeping the input within $\delta$ of $z_0$. The catch is hidden in "$0<|z-z_0|<\delta$": that condition is a whole *punctured disk*, so the guarantee must hold no matter which direction $z$ comes in from.

**Continuity.** $f$ is **continuous at** $z_0$ if $\lim_{z\to z_0} f(z) = f(z_0)$. Writing $f = u + iv$ with $u,v : \mathbb{R}^2 \to \mathbb{R}$,

$$f \text{ continuous at } z_0 \iff u \text{ and } v \text{ are both continuous at } (x_0,y_0).$$

> In words: a complex function is continuous exactly when its real and imaginary coordinate-functions are — continuity, like convergence, decouples into parts. Sums, products, quotients (nonzero denominator), and compositions of continuous functions are continuous, by the same proofs as on $\mathbb{R}$.

**The extended plane.** Adjoin a single new symbol $\infty$ to form the **Riemann sphere** $\hat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}$. **Stereographic projection** wraps the plane onto a sphere so that points racing off to large $|z|$ crowd toward one north-pole point, which we *name* $\infty$. A **neighborhood of $\infty$** is the exterior of a large disk, $\{z : |z| > R\}$ (plus $\infty$ itself); accordingly $z_n \to \infty$ means $|z_n| \to \infty$.

> In words: bolt the far-away of the plane into one extra point and $\mathbb{C}$ becomes a sphere with no edge. This single $\infty$ (not a $+\infty$ and a $-\infty$) is what lets Möbius maps in Lesson 7.1 treat $\infty$ like any other point.

## Picture

![An open disk D(z0,r) in the complex plane with a marked excluded boundary point and arrows approaching the center z0 from six different directions](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — a limit by continuity).** Compute $\displaystyle\lim_{z\to 1+i}\, z^2$. The polynomial $z^2$ is continuous (a product of the continuous function $z\mapsto z$ with itself), so the limit is just the value:

$$\lim_{z\to 1+i} z^2 = (1+i)^2 = 1 + 2i + i^2 = 2i.$$

Every polynomial in $z$, and every rational function away from its zeros of the denominator, is continuous on $\mathbb{C}$ for exactly the reasons it was on $\mathbb{R}$ — so "plug in" is legitimate there. The content of the subject is *not* here; it's in the functions where plugging in fails.

**Example 2 (why you'd care — a limit that dies of direction).** Try $\displaystyle\lim_{z\to 0}\frac{\bar z}{z}$, where $\bar z = x - iy$ is the conjugate. Approach along the two most obvious roads:

- **Real axis** ($z = x$, real, $x\to 0$): then $\bar z = x$, so $\dfrac{\bar z}{z} = \dfrac{x}{x} = 1$.
- **Imaginary axis** ($z = iy$, $y\to 0$): then $\bar z = -iy$, so $\dfrac{\bar z}{z} = \dfrac{-iy}{iy} = -1$.

Two roads, two different answers — so **no** limit $L$ can satisfy the ε–δ definition, and $\lim_{z\to 0}\bar z/z$ does not exist. On a real one-variable problem, matching the left and right limits would have settled it; here matching two axes isn't even enough to *confirm* a limit (you'd need every direction), and it's more than enough to *kill* one. Hold onto this example: conjugation is the simplest function whose "derivative from every direction" can't agree, and that is precisely why it will fail the differentiability test in [2.1](02-01-complex-differentiability.md).

## Watch out

- You might think a complex limit works like the real two-sided limit — check a couple of approaches and you're done. But "$z\to z_0$" ranges over *every* path in the plane, and the limit must return the **same** value along all of them. Two matching paths never *prove* a limit (Example 2 shows disagreement is easy to hit); a single disagreement *disproves* one. This 2D demand is the seed of Module 2's strictness.
- You might think $\infty$ splits into $+\infty$ and $-\infty$ as on the real line. In $\hat{\mathbb{C}}$ there is exactly **one** point at infinity — approach it from any direction, along the positive reals or up the imaginary axis, and you land on the same $\infty$. That's what makes $\hat{\mathbb{C}}$ a sphere, not a segment.
- You might think continuity is the hard part and so must be where complex functions get interesting. It isn't: $f(z) = |z|$ and $f(z) = \bar z$ are perfectly continuous (P3 proves the first), yet neither is complex-differentiable. Continuity transfers for free from `real-analysis`; the drama is entirely in the *directional* limit that defines the derivative.

## One-liner

> $\mathbb{C}$ is $\mathbb{R}^2$ with a distance, so all of `real-analysis`'s limit and continuity machinery transfers verbatim — the only new rule is that "$z\to z_0$" must agree from every direction, and that rule is the whole story of Module 2.

## Problems

**P1 (🟢)** Evaluate $\displaystyle\lim_{z\to i}\frac{z^2+1}{z-i}$. (The denominator vanishes at $z=i$, so "plug in" won't do — factor first, exactly as with a $0/0$ real limit.)

**P2 (🟡)** Show that $\displaystyle\lim_{z\to 0}\frac{\operatorname{Re}(z)}{z}$ does not exist, where $\operatorname{Re}(x+iy)=x$. (Test two well-chosen directions of approach.)

**P3 (🔴, optional)** Prove directly from the ε–δ definition that $f(z) = |z|$ is continuous at every $z_0 \in \mathbb{C}$. (Hint: the reverse triangle inequality $\big||z|-|z_0|\big| \le |z - z_0|$ — which you met in [1.1](01-01-complex-numbers-geometry.md) — makes the choice of $\delta$ immediate.) Then say in one line why continuity here is "cheap" in a way differentiability won't be.

<details>
<summary>Solutions</summary>

**P1** Factor the numerator over $\mathbb{C}$: $z^2 + 1 = (z-i)(z+i)$. For $z \neq i$ the $(z-i)$ cancels, leaving the continuous function $z+i$:

$$\lim_{z\to i}\frac{z^2+1}{z-i} = \lim_{z\to i}(z+i) = i + i = 2i.$$

The limit ignores the value (or absence of a value) *at* $z_0$ — that's the "$0<|z-z_0|$" in the definition — so cancelling the common factor is legitimate, precisely as in the real $0/0$ case.

**P2** Approach $0$ along two directions:

- **Real axis** ($z = x$, real): $\operatorname{Re}(z) = x$, so $\dfrac{\operatorname{Re}(z)}{z} = \dfrac{x}{x} = 1$.
- **Imaginary axis** ($z = iy$): $\operatorname{Re}(z) = 0$, so $\dfrac{\operatorname{Re}(z)}{z} = \dfrac{0}{iy} = 0$.

Along one road the ratio is constantly $1$, along the other constantly $0$. No single $L$ can be within $\varepsilon$ of both for small $\varepsilon$, so the limit does not exist. (Like Example 2, this is a function built from $x,y$ in a way that "sees" direction — a warning sign for differentiability.)

**P3** Fix $z_0$ and let $\varepsilon > 0$. Choose $\delta = \varepsilon$. Then whenever $|z - z_0| < \delta$, the reverse triangle inequality gives

$$\big|\,|z| - |z_0|\,\big| \le |z - z_0| < \delta = \varepsilon.$$

Since $|z| = f(z)$ and $|z_0| = f(z_0)$, this is exactly $|f(z) - f(z_0)| < \varepsilon$. So $f$ is continuous at $z_0$, and $z_0$ was arbitrary. (Note $\delta = \varepsilon$ works at *every* $z_0$ with no dependence on the point — $f$ is even *uniformly* continuous.)

*Why continuity is cheap:* continuity only asks that outputs stay close as inputs get close — a statement about *sizes*, which the modulus handles with one inequality. Differentiability will ask that a *ratio* of differences, $\frac{f(z)-f(z_0)}{z-z_0}$, approach one common value from every direction — and $|z|$, which folds the whole plane onto $[0,\infty)$, cannot make those directional ratios agree. Same function, a much harder question in [2.1](02-01-complex-differentiability.md).

</details>

## Connections

- **Backward:** the modulus and the reverse triangle inequality from [1.1](01-01-complex-numbers-geometry.md) are what turn $\mathbb{C}$ into a metric space; the entire ε–δ toolkit — open/closed sets, Heine–Borel, Bolzano–Weierstrass — is imported wholesale from `real-analysis`, now read in $\mathbb{R}^2$.
- **Forward:** the "same value from every direction" rule stated here becomes the *definition* of the derivative in [2.1](02-01-complex-differentiability.md); Example 2's failure of $\bar z/z$ is the first crack that widens into the Cauchy–Riemann equations. The Riemann sphere returns to give Möbius maps a fixed point at infinity in Lesson 7.1, and compactness underwrites the contour estimates of Module 6.
- **Sideways:** this decoupling $f = u + iv$ into two real functions on $\mathbb{R}^2$ is the bridge to multivariable calculus and, later, to `real-analysis`-style harmonic-function theory — the same $u,v$ will satisfy Laplace's equation in Lesson 2.3.

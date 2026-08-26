# Control Systems · Lesson 3.1: Root locus — construction

> ⏱ ~15 min · Module 3: Root locus & frequency response · Builds on: [2.4 Stability & Routh–Hurwitz](02-04-stability-routh-hurwitz.md), [1.4 Transfer functions, poles & zeros](01-04-transfer-functions-poles-zeros.md) · Unlocks: [3.2 Root locus: design](03-02-root-locus-design.md)

## Why this matters

[2.4](02-04-stability-routh-hurwitz.md) answered one yes/no question: for which $K$ is the loop stable? For $G(s)=K/(s(s+2)(s+4))$ the answer was $0 < K < 48$ — a number, correct and completely mute. It doesn't tell you that $K=2$ is sluggish, $K=10$ is snappy with a little ring, and $K=40$ is a barely-controlled disaster.

The **root locus** answers the whole question at once. It is a single picture of *where the closed-loop poles sit for every gain from zero to infinity* — and since [2.2](02-02-second-order-response.md) taught you to read speed, overshoot and settling straight off a pole location, the picture is a menu of every response the plant can be talked into by a knob. Routh gives you one column of that menu; the locus gives you the menu.

## The idea

Here is the whole trick in one move. The closed-loop poles of a unity-feedback loop with open-loop transfer function $L(s) = G_c(s)G(s)H(s)$ are the roots of

$$1 + K L(s) = 0 .$$

Rearranged: $K L(s) = -1$. Now stare at that. $L(s)$ is a complex number at each point $s$ of the plane, and $K$ is a positive real scalar. Multiplying by $K$ **stretches** $L(s)$ but never rotates it. So for $KL(s)$ to land on $-1$:

- the **direction** of $L(s)$ must already be right — it must point at $180^\circ$ — and $K$ can't help with that;
- only then can $K$ be chosen to fix the **length**.

That split is the entire subject. The angle decides *whether* a point can ever be a closed-loop pole, for some gain. The magnitude then reports *which* gain puts it there. Angle draws the shape; magnitude prices it.

And because the angle test doesn't mention $K$ at all, you can sketch the shape without solving a single polynomial. That's why this is a hand method.

## The formal version

Write $L(s)$ in factored form with $m$ finite zeros $z_i$ and $n$ finite poles $p_i$ (always $n \ge m$ for a real plant):

$$L(s) = \frac{\prod_{i=1}^{m}(s - z_i)}{\prod_{i=1}^{n}(s - p_i)} .$$

**Angle condition.** A point $s$ lies on the locus (for some $K>0$) if and only if

$$\boxed{\;\angle L(s) \;=\; \sum_{i=1}^m \angle(s-z_i) \;-\; \sum_{i=1}^n \angle(s-p_i) \;=\; 180^\circ + k\,360^\circ,\quad k \in \mathbb{Z}. \;}$$

*In words: stand at the candidate point, draw an arrow to it from every open-loop zero and every open-loop pole, add the zero-angles, subtract the pole-angles — if you land on $180^\circ$ (or $-180^\circ$, $540^\circ$, …), the point is on the locus.*

**Magnitude condition.** At such a point, the gain that puts a closed-loop pole exactly there is

$$|K L(s)| = 1 \quad\Longrightarrow\quad K = \frac{1}{|L(s)|} = \frac{\prod_{i=1}^{n}|s-p_i|}{\prod_{i=1}^{m}|s-z_i|} .$$

*In words: the gain is the product of the distances from all the poles divided by the product of the distances from all the zeros.* You literally measure lengths on the sketch.

### The seven construction rules

Each is a consequence, not a decree.

**1. Number, start, and end of branches.** There are $n$ branches. At $K=0$, $1+KL=0$ forces $L(s)\to\infty$, so the roots sit at the **open-loop poles**. As $K\to\infty$, $L(s)\to 0$, so the roots run to the **open-loop zeros** — but there are only $m$ of those, so the remaining $n-m$ branches escape to infinity.

**2. Symmetry.** The locus is symmetric about the real axis, because the characteristic polynomial has real coefficients and complex roots of a real polynomial come in conjugate pairs.

**3. Real-axis segments.** A point on the real axis is on the locus **iff the number of real poles and real zeros strictly to its right is odd.** *Why:* from a real test point, every real pole/zero to the **left** contributes angle $0^\circ$, every one to the **right** contributes $180^\circ$, and each complex-conjugate pair contributes $+\theta$ and $-\theta$, cancelling exactly. So the total angle is $180^\circ \times (\text{number to the right})$, which hits an odd multiple of $180^\circ$ exactly when that count is odd.

**4. Asymptotes.** The $n-m$ escaping branches approach straight lines at angles

$$\theta_k = \frac{(2k+1)\,180^\circ}{n-m}, \qquad k = 0,1,\dots,n-m-1,$$

all radiating from the real-axis point (the **centroid**)

$$\sigma_a = \frac{\sum_i p_i - \sum_i z_i}{n-m}.$$

*Why:* far from every finite pole and zero, all $n$ pole-arrows and $m$ zero-arrows point in essentially the same direction $\theta$, so the angle condition degenerates to $-(n-m)\theta = 180^\circ + k360^\circ$. The centroid is the next-order correction — it's where a single lumped pole of multiplicity $n-m$ would have to sit to match the polynomial's $s^{n-1}$ coefficient. Since the sums are of *complex* numbers whose imaginary parts cancel in conjugate pairs, $\sigma_a$ is real; a conjugate pair contributes twice its real part.

**5. Breakaway and break-in points.** Where two branches collide on the real axis and leave it (breakaway), or arrive and merge onto it (break-in), the characteristic equation has a **double root**, so $K$ as a function of $s$ is stationary:

$$K(s) = -\frac{1}{L(s)}, \qquad \frac{dK}{ds} = 0 .$$

*In words: write the gain as a function of position along the axis; the branches leave where that gain hits a maximum (breakaway) or a minimum (break-in).* Practical recipe: form $K = -1/L(s)$, differentiate, solve the resulting polynomial, then **discard every root that isn't on an actual locus segment** (equivalently, every root giving $K \le 0$). Two branches meeting depart at $\pm 90^\circ$ to the axis.

**6. Imaginary-axis crossings.** These are the gains where the loop goes marginally stable — the most important points on the plot. Two equivalent routes:

- Substitute $s = j\omega$ into the characteristic polynomial and set the real and imaginary parts to zero simultaneously — two equations, two unknowns $(\omega, K)$.
- Or read them off the Routh array from [2.4](02-04-stability-routh-hurwitz.md): the $K$ that zeros a whole row is the critical gain, and the roots of that row's **auxiliary polynomial** are the crossing points. Routh is the exact, algebraic version of this one step; use it and stop guessing.

**7. Departure and arrival angles.** At a complex pole $p_1$, the branch leaves at

$$\theta_{\text{dep}} = 180^\circ + \sum_i \angle(p_1 - z_i) - \sum_{i \neq 1} \angle(p_1 - p_i),$$

and at a complex zero $z_1$ it arrives at $\theta_{\text{arr}} = 180^\circ - \sum_{i\neq 1} \angle(z_1 - z_i) + \sum_i \angle(z_1 - p_i)$. *In words: apply the angle condition at a point infinitesimally close to the pole; every other arrow is essentially frozen, so the one unknown angle is forced.* This rule only bites when the plant has complex poles — an underdamped mechanical mode, an RLC tank — but then it decides immediately whether the branch heads left (good) or right (trouble).

## Picture

![Root locus of 1/(s(s+2)(s+4)): three branches from poles at 0, −2, −4; real-axis segments from −2 to 0 and everywhere left of −4; three dashed asymptotes at 60°, 180°, 300° from the centroid at −2; breakaway marked at −0.845; and coral jω crossings at ±j2.83 labelled K = 48](assets/03-01-fig1.svg)

## Worked examples

### Example 1 — the full sketch: $L(s) = \dfrac{1}{s(s+2)(s+4)}$

This is the course's recurring plant (it's Boss problem 3 in the [syllabus](../syllabus.md)). Characteristic equation:

$$1 + \frac{K}{s(s+2)(s+4)} = 0 \quad\Longleftrightarrow\quad s^3 + 6s^2 + 8s + K = 0 .$$

**Step 1 — poles, zeros, branches.** $n=3$ poles at $s = 0, -2, -4$; $m=0$ finite zeros. Three branches start there at $K=0$; all three run to infinity.

**Step 2 — real-axis segments.** Count poles to the right of a test point:

| test point | poles/zeros to the right | odd? | on locus? |
|---|---|---|---|
| $s > 0$ | $0$ | no | no |
| $-2 < s < 0$ | $1$ (the pole at $0$) | yes | **yes** |
| $-4 < s < -2$ | $2$ | no | no |
| $s < -4$ | $3$ | yes | **yes** |

So the locus owns $[-2,\,0]$ and $(-\infty,\,-4]$.

**Step 3 — asymptotes.** $n-m = 3$, so

$$\theta = \frac{180^\circ}{3},\ \frac{540^\circ}{3},\ \frac{900^\circ}{3} = 60^\circ,\ 180^\circ,\ 300^\circ, \qquad \sigma_a = \frac{0 + (-2) + (-4) - 0}{3} = -2 .$$

(Here the centroid happens to land right on the pole at $-2$; that's a coincidence of this plant, not a rule. Note also that the $180^\circ$ asymptote *is* the negative real axis — which is exactly where the third branch lives.)

**Step 4 — breakaway.** Solve $s^3+6s^2+8s+K=0$ for the gain and differentiate:

$$K = -(s^3+6s^2+8s), \qquad \frac{dK}{ds} = -(3s^2+12s+8) = 0 .$$

$$3s^2+12s+8=0 \;\Longrightarrow\; s = \frac{-12 \pm \sqrt{144-96}}{6} = \frac{-12 \pm \sqrt{48}}{6} = -2 \pm \frac{2}{\sqrt3},$$

so $s = -0.845$ or $s = -3.155$. Now the filter: $-0.845$ lies in $(-2,0)$, a locus segment — keep it. $-3.155$ lies in $(-4,-2)$, which Step 2 ruled **off** the locus — discard it. (Cross-check by gain: at $s=-3.155$, $K = -(s^3+6s^2+8s) = -3.08 < 0$, impossible for positive gain. At $s=-0.845$, $K = +3.08$. ✓)

So the two branches from $0$ and $-2$ crawl toward each other and break away vertically at $s = -0.845$, at $K = 3.08$.

**Step 5 — the $j\omega$ crossing.** Put $s = j\omega$ into $s^3+6s^2+8s+K=0$:

$$-j\omega^3 - 6\omega^2 + 8j\omega + K = 0 .$$

Imaginary part: $-\omega^3 + 8\omega = 0 \Rightarrow \omega(8-\omega^2) = 0 \Rightarrow \omega = 2\sqrt2 \approx 2.83$ rad/s.
Real part: $K = 6\omega^2 = 6(8) = 48$.

Routh from [2.4](02-04-stability-routh-hurwitz.md) says the same thing and says it faster: the array

$$\begin{array}{c|cc} s^3 & 1 & 8\\ s^2 & 6 & K\\ s^1 & \frac{48-K}{6} & \\ s^0 & K & \end{array}$$

has its $s^1$ row vanish at $K=48$, and the auxiliary polynomial from the row above is $6s^2 + 48 = 0 \Rightarrow s = \pm j2\sqrt2$. Identical, with no complex arithmetic.

**Step 6 — departure angles.** All three poles are real, so rule 7 is idle here. (Example 2 exercises it.)

**Step 7 — draw it.** That's the figure above. One bonus: for this plant the complex part of the locus is exactly the hyperbola $\omega^2 = 3(\sigma+2)^2 - 4$, which you can verify by writing the roots as $\sigma \pm j\omega$ and $-6-2\sigma$ and matching the $s^1$ coefficient. At $\omega = 0$ it gives $\sigma = -2 + 2/\sqrt3 = -0.845$ (the breakaway ✓) and at $\sigma = 0$ it gives $\omega^2 = 8$ (the crossing ✓).

**Reading the finished picture.** Walk the knob up:

- $0 < K < 3.08$: three real closed-loop poles. **Overdamped** — no overshoot, and slow, because one pole is stuck near the origin. ($K$ small means the pole leaving $s=0$ has barely moved, and a pole at $-\varepsilon$ is a time constant of $1/\varepsilon$ seconds.)
- $K = 3.08$: double pole at $-0.845$ plus a real pole at $-4.31$ (the three must sum to $-6$). Fastest response with **no** overshoot.
- $3.08 < K < 48$: a complex pair plus one fast real pole. **Underdamped** and getting worse — as $K$ climbs, the pair marches right and up, $\zeta$ falls, overshoot grows.
- $K = 48$: pair sits on the axis at $\pm j2.83$; third pole at $-6$. **Sustained oscillation** at $2.83$ rad/s.
- $K > 48$: pair in the right half-plane. **Unstable.**

Where does a spec land? [2.2](02-02-second-order-response.md) turns a damping ratio into a ray from the origin at angle $\pm\arccos\zeta$ from the negative real axis; $\zeta = 0.5$ is the $\pm 120^\circ$ ray. Lay that ray over this figure and it cuts the complex branch at $s = -0.667 \pm j1.155$, which the magnitude condition prices at $K = 224/27 \approx 8.30$. That two-line move — draw a ray, read a gain — is the whole of [3.2](03-02-root-locus-design.md).

### Example 2 — a complex pole pair, and why the departure angle matters

$L(s) = \dfrac{1}{s(s^2+2s+2)}$: poles at $s=0$ and $s = -1 \pm j$ (a lightly damped mode, $\zeta = 1/\sqrt2$). Which way does the branch leave $-1+j$ — left toward safety, or right toward the axis?

Apply rule 7 at $p_1 = -1+j$. No zeros, so:

- arrow from the pole at $0$: $p_1 - 0 = -1+j$, angle $135^\circ$;
- arrow from the pole at $-1-j$: $p_1 - (-1-j) = 2j$, angle $90^\circ$.

$$\theta_{\text{dep}} = 180^\circ - (135^\circ + 90^\circ) = -45^\circ .$$

**It leaves heading down and to the right** — straight at the imaginary axis. Numerical check: at $K = 0.2$ the roots are $-0.1118$ and $-0.9441 \pm j0.9474$; the pair moved from $(-1,\,1)$ by $(+0.0559,\,-0.0525)$, an angle of $-43.2^\circ$, converging on $-45^\circ$ as $K\to 0$. ✓

That instantly tells you this plant tolerates very little gain, and Routh confirms it: for $s^3+2s^2+2s+K$ the $s^1$ entry is $(4-K)/2$, so the range is $0<K<4$, with the crossing at $6s^2 \to$ auxiliary $2s^2 + 4 = 0$, $\omega = \sqrt2$. Had $\theta_{\text{dep}}$ come out near $+135^\circ$ instead, the branch would have curled left and the plant would have been far more forgiving. One angle computation, one design verdict.

## Watch out

- **You might think the branches end at "the zeros" and stop when there aren't any.** With $n>m$, $n-m$ branches end at **zeros at infinity**. A plant with no finite zeros doesn't have a short locus — it has three escape routes, and they're what eventually drives the loop unstable.
- **You might think every root of $dK/ds=0$ is a breakaway point.** It isn't. $-3.155$ solved the equation perfectly and is not on the locus at all — it's the breakaway of the *complementary* locus (the $K<0$ / positive-feedback case). Always test each root against your real-axis segments, or against $K>0$.
- **You might treat the asymptotes as the locus.** They're only the far-field behavior. Here the complex branches lie strictly to the *right* of the $60^\circ/300^\circ$ asymptotes all the way out — which matters, because it means the loop goes unstable at a lower gain than the asymptote alone would suggest. Likewise $\sigma_a=-2$ is where the asymptotes radiate from, not a point the locus passes through.

## One-liner

> Closed-loop poles satisfy $KL(s)=-1$: the angle condition $\angle L = 180^\circ$ decides which points are candidates and draws the shape, the magnitude condition $K=1/|L|$ tells you what each one costs.

## Problems

**P1 (🟢)** For unity feedback around $G(s) = \dfrac{K}{s(s+3)}$: give the real-axis segments, the number and angles of the asymptotes and their centroid, and the breakaway point with its gain. Then say what happens to the closed-loop poles for gains above that.

**P2 (🟡)** $L(s) = \dfrac{s+3}{s(s+1)}$. Find every breakaway/break-in point and the gain at each. Which is which, and why?

**P3 (🔴, optional)** For the lesson's plant $L(s) = \dfrac{1}{s(s+2)(s+4)}$, use the angle condition to test whether $s = -1 + j2$ is on the locus. If it isn't, say which way you'd have to move, then find the point on the locus at $\omega = 2$ and the gain there.

<details>
<summary>Solutions</summary>

**P1** Open loop $L = 1/(s(s+3))$: $n=2$ poles at $0,-3$; $m=0$ zeros.

*Real axis.* For $-3<s<0$ there is exactly **one** pole to the right (the one at $0$) — odd, so on the locus. For $s>0$: zero poles to the right (even, off). For $s<-3$: two (even, off). Segment: $[-3,\,0]$ only.

*Asymptotes.* $n-m=2$, so two of them, at $\theta = 180^\circ/2 = 90^\circ$ and $540^\circ/2=270^\circ$, radiating from

$$\sigma_a = \frac{0+(-3)}{2} = -1.5 .$$

*Breakaway.* Characteristic equation $s^2+3s+K=0$, so $K = -(s^2+3s)$ and

$$\frac{dK}{ds} = -(2s+3) = 0 \;\Longrightarrow\; s = -1.5 ,$$

which lies inside $[-3,0]$ ✓. Gain there: $K = -\big((-1.5)^2 + 3(-1.5)\big) = -(2.25-4.5) = 2.25$.

*Above that gain.* Solve directly: $s = \dfrac{-3 \pm \sqrt{9-4K}}{2}$. For $K>2.25$ the discriminant is negative and

$$s = -1.5 \pm j\sqrt{K - 2.25},$$

so the two poles ride **straight up and down the vertical line $\sigma=-1.5$** — the branches coincide exactly with their asymptotes here, which is why the $90^\circ/270^\circ$ answer was already the whole picture. The real part never changes, so the settling time is fixed at $t_s \approx 4/1.5 \approx 2.7$ s (2% criterion) no matter how hard you push; only the overshoot grows. And the loop is stable for **all** $K>0$ — no $j\omega$ crossing exists, consistent with the Routh array of $s^2+3s+K$ having a positive first column for every $K>0$.

*Check.* At $K=2.25$ the formula gives the double root $-1.5$ ✓, matching the breakaway.

**P2** $n=2$ poles at $0,-1$; $m=1$ zero at $-3$; $n-m=1$, so one branch ends at $-3$ and one escapes along the single $180^\circ$ asymptote.

*Real-axis segments* (count poles **and** zeros to the right):

| region | count to the right | on locus? |
|---|---|---|
| $s>0$ | $0$ | no |
| $-1<s<0$ | $1$ | **yes** |
| $-3<s<-1$ | $2$ | no |
| $s<-3$ | $3$ | **yes** |

*Stationary gains.* $1 + KL = 0 \Rightarrow K = -\dfrac{s(s+1)}{s+3} = -\dfrac{s^2+s}{s+3}$. Quotient rule:

$$\frac{dK}{ds} = -\frac{(2s+1)(s+3) - (s^2+s)}{(s+3)^2} = -\frac{s^2+6s+3}{(s+3)^2} .$$

Set the numerator to zero:

$$s^2+6s+3 = 0 \;\Longrightarrow\; s = -3 \pm \sqrt{9-3} = -3 \pm \sqrt6 = -0.5505 \ \text{ or } \ -5.4495 .$$

Both survive the filter this time: $-0.5505 \in (-1,0)$ ✓ and $-5.4495 < -3$ ✓.

Gains:

$$K(-0.5505) = -\frac{0.30306 - 0.55051}{2.44949} = \frac{0.24745}{2.44949} = 0.1010,$$
$$K(-5.4495) = -\frac{29.6969 - 5.44949}{-2.44949} = \frac{24.2474}{2.44949} = 9.8990 .$$

*Which is which.* The one at $s=-0.5505$, with the **smaller** gain, is the **breakaway**: the two poles start at $0$ and $-1$ at $K=0$, walk together, and leave the axis at $K=0.101$. The one at $s=-5.4495$, with the **larger** gain, is the **break-in**: the complex pair swings around and re-lands on the axis at $K=9.899$, after which one root heads left to $-\infty$ and the other closes in on the zero at $-3$.

*Check.* For two poles and one real zero the complex portion of the locus is exactly a circle centred on the zero with radius $\sqrt{(z-p_1)(z-p_2)} = \sqrt{(-3-0)(-3+1)} = \sqrt6$. That circle meets the real axis at $-3 \pm \sqrt6$ — precisely the two points found. ✓

**P3** With no zeros, the angle condition needs $\angle(s) + \angle(s+2) + \angle(s+4) = 180^\circ$ (since $\angle L = -\sum$, and $-180^\circ \equiv 180^\circ$).

At $s = -1+j2$:

| arrow | vector | angle |
|---|---|---|
| from $0$ | $-1+j2$ | $180^\circ - \arctan(2/1) = 116.57^\circ$ |
| from $-2$ | $1+j2$ | $\arctan(2/1) = 63.43^\circ$ |
| from $-4$ | $3+j2$ | $\arctan(2/3) = 33.69^\circ$ |

Sum $= 213.69^\circ \ne 180^\circ$, so $s=-1+j2$ is **not** on the locus. The sum is too large; every one of those angles shrinks if you move the test point to the **right**, so the true locus point at this height is to the right of $-1$.

Find it. Write the closed-loop roots as $\sigma \pm j\omega$ and $-6-2\sigma$ (they sum to $-6$). Matching the $s^1$ coefficient of $s^3+6s^2+8s+K$ gives $\sigma^2+\omega^2 + 2\sigma(-6-2\sigma) = 8$, i.e. $\omega^2 = 3\sigma^2 + 12\sigma + 8$. At $\omega=2$:

$$3\sigma^2 + 12\sigma + 4 = 0 \;\Longrightarrow\; \sigma = \frac{-12 \pm \sqrt{144-48}}{6} = \frac{-12 \pm 9.798}{6} = -0.367 \ \text{ or } \ -3.633 .$$

Only $-0.367$ is on the upper branch (the other root is the mirror piece of the hyperbola, off the locus). So the point is $s = -0.367 + j2$.

Verify with the angle condition: $\angle(-0.367+j2) = 100.40^\circ$, $\angle(1.633+j2) = 50.76^\circ$, $\angle(3.633+j2) = 28.85^\circ$; sum $= 180.0^\circ$ ✓.

Gain by the magnitude condition — product of distances from the three poles:

$$K = |s|\,|s+2|\,|s+4| = 2.033 \times 2.582 \times 4.147 = 21.8 .$$

*Check.* $21.8$ sits between the breakaway gain $3.08$ and the critical gain $48$, exactly where a point partway up the branch should be ✓. Independent route: $K = (\sigma^2+\omega^2)(6+2\sigma) = 4.135 \times 5.266 = 21.8$ ✓.

</details>

## Flashback

**From Lesson 2.2 (Second-order response):** a closed-loop system has dominant poles at $s = -1 \pm j2$ (and nothing else nearby). Find $\zeta$, $\omega_n$, the percent overshoot to a step, and the 2% settling time.

<details>
<summary>Solution</summary>

Match against $s^2 + 2\zeta\omega_n s + \omega_n^2$, whose roots are $-\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$. So the real part is $-\zeta\omega_n = -1$ and the imaginary part is $\omega_d = 2$:

$$\omega_n = \sqrt{1^2 + 2^2} = \sqrt5 \approx 2.236\ \text{rad/s}, \qquad \zeta = \frac{1}{\sqrt5} \approx 0.447 .$$

Overshoot:

$$M_p = 100\,e^{-\pi\zeta/\sqrt{1-\zeta^2}} = 100\,e^{-\pi(0.4472)/0.8944} = 100\,e^{-1.5708} = 20.8\%.$$

Settling time (2% criterion, $t_s \approx 4/(\zeta\omega_n)$):

$$t_s \approx \frac{4}{1} = 4\ \text{s}.$$

*Check.* $\zeta\omega_n$ is just the magnitude of the real part, $1$ — which is why settling time depends only on how far left the pole is. And $\zeta \approx 0.45$ predicting roughly 20% overshoot matches the rule of thumb "$\zeta=0.5$ gives about 16%, $\zeta=0.4$ about 25%" ✓.

This is exactly the read-off you perform after picking a point on a root locus — which is why [3.2](03-02-root-locus-design.md) runs it backwards: start from the spec, get the pole location, then get $K$.

</details>

## Connections

- **Backward:** the characteristic equation $1+KL(s)=0$ is the closed-loop denominator from [1.5](01-05-block-diagram-algebra.md), and the poles you're tracking are the ones [1.4](01-04-transfer-functions-poles-zeros.md) taught you to find. [2.4](02-04-stability-routh-hurwitz.md) is not superseded by the locus — it's the tool that nails the $j\omega$ crossing exactly, and the locus is the picture that gives that number meaning.
- **Forward:** [3.2](03-02-root-locus-design.md) puts a spec on the plot (a $\zeta$ ray, an $\omega_n$ circle) and reads off the gain. [4.3](04-03-lead-lag-compensators.md) goes further: when no point on the existing locus meets the spec, you *add* a pole and a zero to bend the locus somewhere useful — which is only thinkable once you know how the shape is determined.
- **Sideways:** the geometry here is the same pole/zero-arrow geometry used to evaluate $|H(j\omega)|$ in [`signals-systems` 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md) — there you walk $s$ up the imaginary axis, here you walk it along the locus. And the "count the angle as you move around" logic reappears in [3.5](03-05-nyquist-criterion.md) as the argument principle from complex analysis.

# Control Systems · Lesson 2.4: Stability & Routh–Hurwitz

> ⏱ ~15 min · Module 2: Time response & stability · Builds on: [1.4 Transfer functions, poles & zeros](01-04-transfer-functions-poles-zeros.md), [1.5 Block-diagram algebra](01-05-block-diagram-algebra.md), [2.3 Steady-state error & system type](02-03-steady-state-error-system-type.md) · Unlocks: 3.1 (root locus), 3.4 (margins), 3.5 (Nyquist)

## Why this matters

Everything you've measured so far — speed in [2.1](02-01-first-order-response.md), overshoot in [2.2](02-02-second-order-response.md), accuracy in [2.3](02-03-steady-state-error-system-type.md) — is a *preference*. Stability is a **constraint**. A loop that settles in 0.1 s with 2% error and then, at a slightly higher gain, saws itself apart is not a fast accurate controller; it is scrap metal, a tripped breaker, or a crashed drone. Every design in the rest of this course is an optimization *subject to* the pole locations staying put.

And here's the twist that makes this lesson a *method* rather than a fact: in design you don't have a number for the gain $K$ — $K$ is the knob you're turning. You need the **range** of $K$ that keeps the loop stable, which means you need to answer "are all the roots in the left half-plane?" for a polynomial with a symbol in it. Routh–Hurwitz does exactly that, without ever finding a root.

## The idea

**The rule, restated.** From [`signals-systems` 1.3](../../signals-systems/lessons/01-03-systems-and-properties.md), a system is **BIBO stable** (bounded input → bounded output) if every bounded input produces a bounded output. For a linear time-invariant system with a rational transfer function, [`signals-systems` 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md) turned that into a geography question: BIBO stability holds exactly when **every pole lies strictly in the open left half-plane**, $\mathrm{Re}(s) < 0$. Each pole at $s = \sigma + j\omega$ contributes a mode $e^{\sigma t}\cos(\omega t + \phi)$ to the response; $\sigma < 0$ makes it die, $\sigma > 0$ makes it explode, $\sigma = 0$ makes it ring forever. One pole in the wrong place ruins the whole system, because that mode grows regardless of what the others do.

**Which poles?** The **closed-loop** ones. From [1.5](01-05-block-diagram-algebra.md), a unity-feedback loop with open-loop transfer function $L(s) = G_c(s)G(s)$ has

$$T(s) = \frac{G_c G}{1 + G_c G},$$

so the closed-loop poles are the roots of the **characteristic equation** $1 + L(s) = 0$. Write $L(s) = N(s)/D(s)$ and clear the fraction: the characteristic polynomial is $D(s) + N(s)$. Open-loop poles are irrelevant to closed-loop stability — you can stabilize an unstable plant, and (far more commonly) you can *destabilize* a perfectly stable one by cranking the gain.

**Why not just factor it?** Two reasons.

1. **The polynomial has a symbol in it.** For $L(s) = K/[s(s+2)(s+4)]$ the characteristic polynomial is $s^3 + 6s^2 + 8s + K$. You want *the set of $K$ that works*, not the roots at one particular $K$. Factoring gives you one answer per guess; you'd be sampling, not solving.
2. **Past degree 4 there is no formula** (Abel–Ruffini), and even at degree 3 Cardano's formula is a horror.

So Routh changes the question. Not "*where* are the roots?" but "***how many* are in the right half-plane?**" — a single integer. That integer is all you need, and it turns out to be readable off a table of arithmetic on the coefficients.

## The formal version

Let the characteristic polynomial be

$$a_n s^n + a_{n-1}s^{n-1} + \cdots + a_1 s + a_0, \qquad a_n > 0$$

(if $a_n < 0$, multiply the whole thing by $-1$ — the roots don't care).

### Step 0: the necessary condition (cheap, do it first)

**If the polynomial is stable, then every coefficient $a_n, a_{n-1}, \dots, a_0$ is present and all have the same sign.**

*In words: a missing term or a sign flip is an instant fail — no array needed.* The reason is simple: a stable polynomial factors into $(s+p)$ with $p>0$ and $(s^2 + 2\zeta\omega_n s + \omega_n^2)$ with $\zeta, \omega_n > 0$, and multiplying out factors with all-positive coefficients can never produce a zero or a negative coefficient.

**But it is necessary, not sufficient.** Counterexample:

$$s^3 + s^2 + 2s + 8.$$

All four coefficients present, all positive — passes the test. It factors as $(s+2)(s^2 - s + 4)$, whose quadratic has roots $0.5 \pm j1.936$: **two poles in the right half-plane.** So "all coefficients positive" clears the polynomial for further inspection and nothing more. (For a *second-order* polynomial $s^2 + a_1 s + a_0$ the condition happens to be sufficient too — that's why quadratics feel easy and cubics surprise people.)

### Step 1: build the Routh array

Write the coefficients in two rows, alternating:

$$\begin{array}{c|cccc}
s^n & a_n & a_{n-2} & a_{n-4} & \cdots \\
s^{n-1} & a_{n-1} & a_{n-3} & a_{n-5} & \cdots \\
s^{n-2} & b_1 & b_2 & b_3 & \\
s^{n-3} & c_1 & c_2 & & \\
\vdots & \vdots & & & \\
s^0 & \cdot & & &
\end{array}$$

Every entry below the first two rows is a $2\times2$ determinant built from the **two rows above it**: column 1 of those rows, paired with the column *one to the right* of the entry you want, all divided by $-1$ times the first-column entry of the row directly above.

$$b_1 = \frac{-1}{a_{n-1}}\det\begin{bmatrix} a_n & a_{n-2} \\ a_{n-1} & a_{n-3}\end{bmatrix}, \qquad b_2 = \frac{-1}{a_{n-1}}\det\begin{bmatrix} a_n & a_{n-4} \\ a_{n-1} & a_{n-5}\end{bmatrix}, \quad \dots$$

$$c_1 = \frac{-1}{b_1}\det\begin{bmatrix} a_{n-1} & a_{n-3} \\ b_1 & b_2 \end{bmatrix}, \qquad c_2 = \frac{-1}{b_1}\det\begin{bmatrix} a_{n-1} & a_{n-5} \\ b_1 & b_3 \end{bmatrix}, \quad \dots$$

*In words: left column stays fixed, right column marches rightward; divide by the leading entry of the row just above and flip the sign.* Missing coefficients count as $0$. Keep going until you reach the $s^0$ row; the array has $n+1$ rows, and rows shrink as you descend. **You may scale any row by a positive constant** — it clears fractions and cannot change a sign.

### Step 2: read the first column

$$\boxed{\;\#\{\text{roots with } \mathrm{Re}(s) > 0\} \;=\; \#\{\text{sign changes down the first column}\}\;}$$

*In words: count how many times the sign flips as you read the leftmost column top to bottom; that's exactly how many closed-loop poles are in the right half-plane.* **Stable $\iff$ zero sign changes $\iff$ the entire first column has one sign.**

### A fully worked array

Take $s^4 + 2s^3 + 3s^2 + 4s + 5$. All coefficients present and positive, so Step 0 says nothing. Rows:

$$\begin{array}{c|ccc}
s^4 & 1 & 3 & 5 \\
s^3 & 2 & 4 & 0
\end{array}$$

$$b_1 = \frac{-1}{2}\det\begin{bmatrix}1 & 3\\ 2& 4\end{bmatrix} = \frac{-(4-6)}{2} = 1, \qquad b_2 = \frac{-1}{2}\det\begin{bmatrix}1 & 5\\ 2& 0\end{bmatrix} = \frac{-(0-10)}{2} = 5.$$

$$c_1 = \frac{-1}{1}\det\begin{bmatrix}2 & 4\\ 1 & 5\end{bmatrix} = -(10-4) = -6, \qquad c_2 = \frac{-1}{1}\det\begin{bmatrix}2 & 0\\ 1 & 0\end{bmatrix} = 0.$$

$$d_1 = \frac{-1}{-6}\det\begin{bmatrix}1 & 5\\ -6 & 0\end{bmatrix} = \frac{0 + 30}{6} = 5.$$

$$\begin{array}{c|ccc}
s^4 & 1 & 3 & 5 \\
s^3 & 2 & 4 & 0 \\
s^2 & 1 & 5 & \\
s^1 & -6 & 0 & \\
s^0 & 5 & &
\end{array}$$

First column: $1,\; 2,\; 1,\; -6,\; 5$. Signs: $+,+,+,-,+$ — **two** sign changes ($+\to-$, then $-\to+$), so **two poles in the right half-plane**; unstable. *Check:* numerically the roots are $-1.288 \pm j0.858$ and $+0.288 \pm j1.416$ — two in the right half-plane, matching.

### The two special cases

**(a) A zero appears in the first column, but the rest of the row is not zero.** You can't divide by it. Replace the $0$ with a small positive $\varepsilon$, continue symbolically, and take the sign of each first-column entry as $\varepsilon \to 0^+$.

Example: $s^4 + s^3 + 2s^2 + 2s + 3$.

$$\begin{array}{c|ccc}
s^4 & 1 & 2 & 3 \\
s^3 & 1 & 2 & 0 \\
s^2 & 0 \to \varepsilon & 3 &
\end{array}$$

(the $s^2$ leading entry is $-(2-2)/1 = 0$; the second is $-(0-3)/1 = 3$). Continue:

$$c_1 = \frac{-1}{\varepsilon}\det\begin{bmatrix}1 & 2\\ \varepsilon & 3\end{bmatrix} = \frac{-(3 - 2\varepsilon)}{\varepsilon} \;\xrightarrow{\;\varepsilon\to0^+\;}\; -\infty, \qquad d_1 = 3.$$

First column signs: $+,\;+,\;+(\varepsilon),\;-,\;+$ — two sign changes, **two right-half-plane poles**. *Check:* the actual roots are $0.406 \pm j1.293$ and $-0.906 \pm j0.902$ — two in the right half-plane. ✓

**(b) An entire row is zero.** This is not a nuisance — it is *information*. A zero row means the polynomial contains a factor whose roots are symmetric about the origin: a pair $\pm j\omega$ on the imaginary axis, or a real pair $\pm\sigma$, or a symmetric quadruple. The recipe:

1. Form the **auxiliary polynomial** $A(s)$ from the row *above* the zero row, reading its entries as coefficients of descending **even-spaced** powers starting at the row's own power label.
2. Differentiate: $dA/ds$.
3. Put the coefficients of $dA/ds$ into the zero row and carry on.
4. **The roots of $A(s)=0$ are themselves roots of the characteristic polynomial** — that's how you get the imaginary-axis crossing explicitly.

Example: $s^3 + 2s^2 + s + 2$.

$$\begin{array}{c|cc}
s^3 & 1 & 1 \\
s^2 & 2 & 2 \\
s^1 & 0 & 0
\end{array} \qquad\Big(\; b_1 = \tfrac{-(2-2)}{2}=0 \;\Big)$$

Auxiliary polynomial from the $s^2$ row: $A(s) = 2s^2 + 2$. Then $dA/ds = 4s$, so the $s^1$ row becomes $\;4\;\;0$, and

$$s^0: \quad \frac{-1}{4}\det\begin{bmatrix}2&2\\4&0\end{bmatrix} = \frac{-(0-8)}{4} = 2.$$

First column $1, 2, 4, 2$: **no sign changes, so no right-half-plane poles** — but the zero row warns you of axis roots, and $A(s) = 0$ gives $s = \pm j$. The system is **marginally stable**: it rings at $\omega = 1$ rad/s forever. *Check:* $s^3+2s^2+s+2 = (s+2)(s^2+1)$ ✓.

Case (b) is the workhorse of the next section — and in [3.1](03-01-root-locus-construction.md) it is precisely how you locate where the root locus crosses the $j\omega$ axis.

## Picture

![Left: the s-plane with the left half shaded as the stable region and the jω axis marked as the marginal boundary. Right: closed-loop poles of K/(s(s+2)(s+4)) at K = 10 (all in the left half-plane), K = 48 (a complex pair exactly on the jω axis at ±j2.83), and K = 100 (that pair has crossed into the right half-plane).](assets/02-04-fig1.svg)

## Worked examples

### Example 1 (the headline case): the stabilizing gain range

Unity feedback, $G(s) = \dfrac{K}{s(s+2)(s+4)}$, $K > 0$. From [1.5](01-05-block-diagram-algebra.md), the characteristic equation is $1 + G(s) = 0$, i.e. $s(s+2)(s+4) + K = 0$:

$$s^3 + 6s^2 + 8s + K = 0.$$

Step 0: all coefficients positive requires $K > 0$ — necessary, not sufficient. Now the array:

$$\begin{array}{c|cc}
s^3 & 1 & 8 \\
s^2 & 6 & K \\
s^1 & \dfrac{48-K}{6} & 0 \\
s^0 & K &
\end{array}$$

with

$$b_1 = \frac{-1}{6}\det\begin{bmatrix}1 & 8\\ 6 & K\end{bmatrix} = \frac{-(K - 48)}{6} = \frac{48-K}{6}, \qquad c_1 = \frac{-1}{b_1}\det\begin{bmatrix}6 & K\\ b_1 & 0\end{bmatrix} = \frac{-(-Kb_1)}{b_1} = K.$$

First column $\;1,\; 6,\; \dfrac{48-K}{6},\; K$. No sign changes requires both $48 - K > 0$ and $K > 0$:

$$\boxed{\;0 < K < 48\;}$$

**The boundary.** At $K = 48$ the $s^1$ row vanishes entirely — special case (b). Auxiliary polynomial from the $s^2$ row: $A(s) = 6s^2 + 48$, so

$$6s^2 + 48 = 0 \;\Longrightarrow\; s^2 = -8 \;\Longrightarrow\; s = \pm j\sqrt{8} = \pm j2\sqrt{2} \approx \pm j2.83.$$

At exactly $K = 48$ the closed loop is marginally stable and **oscillates at $\omega = 2\sqrt2 \approx 2.83$ rad/s** — sustained, neither growing nor decaying.

**Independent check by $s = j\omega$.** Don't take the array's word for it. If a pole sits on the imaginary axis, then $s = j\omega$ satisfies the characteristic equation. Substitute:

$$(j\omega)^3 + 6(j\omega)^2 + 8(j\omega) + K = -j\omega^3 - 6\omega^2 + 8j\omega + K = 0.$$

A complex number is zero only if both parts are:

$$\underbrace{K - 6\omega^2 = 0}_{\text{real}}, \qquad \underbrace{-\omega^3 + 8\omega = \omega(8-\omega^2) = 0}_{\text{imaginary}}.$$

The imaginary part gives $\omega^2 = 8$, so $\omega = 2\sqrt2 \approx 2.83$ rad/s (rejecting $\omega = 0$, which would force $K=0$). Substituting into the real part: $K = 6\cdot 8 = 48$. ✓ Two completely independent routes, same answer. And a bonus: at $K=48$, $s^3+6s^2+8s+48 = (s^2+8)(s+6)$, so the third pole sits at $s=-6$ — visible in the figure.

This is the *design* answer. Below $K=48$ the loop is stable but (from [2.3](02-03-steady-state-error-system-type.md)) sluggish in steady-state accuracy; above it, worthless. The whole design lives inside that interval.

### Example 2 (the contrast): a second-order loop gain can't kill

Same idea, one pole fewer. Unity feedback with $G(s) = \dfrac{K}{s(s+2)}$ gives $s(s+2) + K = 0$:

$$s^2 + 2s + K = 0, \qquad \begin{array}{c|cc} s^2 & 1 & K \\ s^1 & 2 & 0 \\ s^0 & K & \end{array}$$

First column $1, 2, K$: stable for **all $K > 0$**, no upper limit. Try the $s=j\omega$ check: $-\omega^2 + 2j\omega + K = 0$ forces $2\omega = 0$ from the imaginary part, so $\omega = 0$ and then $K = 0$ — there is no positive gain at which a pole reaches the axis. ✓

**Why the difference?** Phase. Each pole contributes up to $-90^\circ$ of phase lag. Two poles can total at most $-180^\circ$ and only reach it as $\omega \to \infty$, where the gain has already died — the feedback can never quite become positive at a frequency that matters. Add the third pole at $s=-4$ and the total lag *passes* $-180^\circ$ at a finite frequency ($2\sqrt2$ rad/s, as we just computed), so a large enough $K$ turns negative feedback into positive feedback there and the loop sings. **Second-order loops of this shape overshoot more and more as you raise the gain but never actually go unstable; third-order and higher do.** Concretely: at $K=10$ the cubic's poles are $-4.76$ and $-0.62 \pm j1.31$; at $K = 100$ they are $-6.93$ and $+0.46 \pm j3.77$. The complex pair walked right across. That migration is [3.1](03-01-root-locus-construction.md)'s entire subject, and the whole picture is why [3.4](03-04-gain-and-phase-margins.md) measures *how far* you are from $K=48$ rather than merely whether you're under it.

**Footnotes worth one line each.** Hurwitz's determinant test — stability iff all $n$ leading principal minors of a matrix built from the coefficients are positive — is an algebraically equivalent formulation you'll see in older texts and in the name "Hurwitz polynomial"; it gives the same conditions with more determinants. And in practice no software builds a Routh array: MATLAB, Python, and friends just compute the roots numerically and look at their real parts. Routh's value today is the **symbolic** answer — a gain *range*, an exact crossing frequency, an inequality you can design against — plus the structural insight that stability is a property of coefficients, not of roots.

## Watch out

- **You might test the wrong polynomial.** Routh is applied to the **closed-loop** characteristic polynomial $D(s)+N(s)$, never to the open-loop denominator alone. A plant with a pole at $s=+1$ (open-loop unstable) can be perfectly stable in closed loop, and a plant with all poles at $-1$ can be destabilized by feedback. Always form $1 + L(s) = 0$ first.
- **You might read "no sign changes" as "stable" when a row went to zero.** A zero row means roots *on* the axis, which yields no sign change but is **not** BIBO stable — a bounded sinusoid at exactly $\omega$ produces an unbounded resonant output. Marginal is a third category, not a flavor of stable. The same goes for the pure integrator: a pole at the origin is on the axis, so a type-1 plant is open-loop marginally stable even though it makes a lovely closed loop.
- **You might think a bigger gain is always more dangerous.** Usually yes, but the stable set need not be a single interval $0 < K < K_{\max}$ — conditionally stable systems have a *lower* bound too (a first-column entry like $(K-3)(20-K)$ gives $3<K<20$), and some loops are unstable at low gain. Read the inequalities the array actually gives you; don't assume the shape.
- **You might drop a sign in the determinant.** The formula has an explicit $-1$ out front: $b_1 = -\det[\cdot]/a_{n-1}$. Forgetting it flips every entry below row 2 and can invert your verdict. Cheap safeguard: the $s^0$ entry always equals $a_0$ (as it did in every example above) — if it doesn't, you slipped.

## One-liner

> Stability isn't a number you compute, it's a region you stay inside — and Routh's array counts right-half-plane roots straight from the coefficients, so you can solve for the *range* of gain that keeps you there.

## Problems

**P1 (🟢)** Is $s^3 + 4s^2 + 2s + 20$ stable? If not, how many roots lie in the right half-plane?

**P2 (🟡)** A unity-feedback loop has $G(s) = \dfrac{K}{(s+1)(s+2)(s+5)}$. Find the range of $K$ for stability, the critical gain, and the frequency at which the closed loop oscillates there. Verify the critical gain and frequency by the $s = j\omega$ substitution.

**P3 (🔴, optional)** Find the range of $K$ for which $s^4 + 3s^3 + 3s^2 + 2s + K = 0$ has all roots in the left half-plane, and give the oscillation frequency at the upper limit.

<details>
<summary>Solutions</summary>

**P1** All coefficients present and positive, so Step 0 is inconclusive. Build the array:

$$\begin{array}{c|cc}
s^3 & 1 & 2 \\
s^2 & 4 & 20 \\
s^1 & b_1 & 0 \\
s^0 & 20 &
\end{array} \qquad b_1 = \frac{-1}{4}\det\begin{bmatrix}1&2\\4&20\end{bmatrix} = \frac{-(20-8)}{4} = -3.$$

$$s^0: \quad \frac{-1}{-3}\det\begin{bmatrix}4 & 20\\ -3 & 0\end{bmatrix} = \frac{1}{3}\bigl(0 + 60\bigr) = 20. \quad\text{(equals } a_0 \text{, as it must)}$$

First column: $1,\; 4,\; -3,\; 20$ — signs $+,+,-,+$: **two sign changes, so two right-half-plane roots. Unstable.**

*Check.* Numerically the roots are $-4.532$ and $+0.266 \pm j2.084$ — two in the right half-plane. ✓ (Note this polynomial also serves as a second reminder that all-positive coefficients prove nothing.)

**P2** Expand the denominator: $(s+1)(s+2) = s^2+3s+2$, and $(s^2+3s+2)(s+5) = s^3 + 8s^2 + 17s + 10$. The characteristic equation $1 + G = 0$ gives

$$s^3 + 8s^2 + 17s + (10 + K) = 0.$$

Array:

$$\begin{array}{c|cc}
s^3 & 1 & 17 \\
s^2 & 8 & 10+K \\
s^1 & \dfrac{126-K}{8} & 0 \\
s^0 & 10+K &
\end{array}$$

since $b_1 = \dfrac{-1}{8}\det\begin{bmatrix}1 & 17\\ 8 & 10+K\end{bmatrix} = \dfrac{-\bigl[(10+K) - 136\bigr]}{8} = \dfrac{126-K}{8}$, and the $s^0$ entry is $a_0 = 10+K$.

No sign changes requires $126 - K > 0$ and $10 + K > 0$:

$$-10 < K < 126.$$

For a physical positive gain, $0 < K < 126$; the **critical gain is $K = 126$**. There the $s^1$ row vanishes, so the auxiliary polynomial is $A(s) = 8s^2 + (10+126) = 8s^2 + 136$, giving $s^2 = -17$ and

$$\omega = \sqrt{17} \approx 4.12 \ \text{rad/s}.$$

*Check by $s=j\omega$.* Substituting: $-j\omega^3 - 8\omega^2 + 17j\omega + 10 + K = 0$. Imaginary part: $\omega(17 - \omega^2) = 0 \Rightarrow \omega^2 = 17$, $\omega \approx 4.12$ rad/s. Real part: $-8(17) + 10 + K = 0 \Rightarrow K = 136 - 10 = 126$. ✓ Both match. (Numerically, at $K=126$ the roots are $-8$ and $\pm j4.123$; at $K=50$ they are $-6.80$ and $-0.60\pm j2.91$ — stable, as predicted.)

Note the contrast with Example 1: this plant has no pole at the origin (it's type 0), which buys it a much larger stable range but costs it steady-state accuracy — exactly the trade [2.3](02-03-steady-state-error-system-type.md) set up.

**P3** All coefficients positive requires $K > 0$. Array:

$$\begin{array}{c|ccc}
s^4 & 1 & 3 & K \\
s^3 & 3 & 2 & 0 \\
s^2 & b_1 & b_2 & \\
s^1 & c_1 & & \\
s^0 & K &
\end{array}$$

$$b_1 = \frac{-1}{3}\det\begin{bmatrix}1&3\\3&2\end{bmatrix} = \frac{-(2-9)}{3} = \frac{7}{3}, \qquad b_2 = \frac{-1}{3}\det\begin{bmatrix}1&K\\3&0\end{bmatrix} = \frac{-(0-3K)}{3} = K.$$

$$c_1 = \frac{-1}{7/3}\det\begin{bmatrix}3 & 2\\ 7/3 & K\end{bmatrix} = \frac{-3}{7}\left(3K - \frac{14}{3}\right) = 2 - \frac{9K}{7}.$$

First column $\;1,\; 3,\; \tfrac73,\; 2 - \tfrac{9K}{7},\; K$. Two conditions:

$$2 - \frac{9K}{7} > 0 \;\Longrightarrow\; K < \frac{14}{9} \approx 1.556, \qquad K > 0.$$

$$\boxed{\;0 < K < \tfrac{14}{9}\;}$$

At $K = 14/9$ the $s^1$ row is zero. Auxiliary polynomial from the $s^2$ row: $A(s) = \tfrac73 s^2 + \tfrac{14}{9}$, so

$$s^2 = -\frac{14}{9}\cdot\frac{3}{7} = -\frac23 \;\Longrightarrow\; \omega = \sqrt{2/3} \approx 0.816\ \text{rad/s}.$$

*Check by $s=j\omega$.* $\omega^4 - 3j\omega^3 - 3\omega^2 + 2j\omega + K = 0$. Imaginary: $\omega(2 - 3\omega^2) = 0 \Rightarrow \omega^2 = 2/3$ ✓. Real: $\omega^4 - 3\omega^2 + K = \tfrac49 - 2 + K = 0 \Rightarrow K = \tfrac{14}{9}$ ✓. (Numerically at $K = 14/9$ the roots are $-1.5 \pm j0.289$ and $\pm j0.816$ — one pair exactly on the axis, confirming marginal stability.)

</details>

## Flashback

**From Lesson 2.3 (Steady-state error & system type):** The same plant as Example 1, $G(s) = \dfrac{K}{s(s+2)(s+4)}$ in unity feedback, is driven by a **unit ramp** $r(t) = t$. With $K = 24$, what is the steady-state error? Then: given the stability limit you just derived, what is the *smallest* ramp error this plant can ever achieve with proportional gain alone?

<details>
<summary>Solution</summary>

The open-loop transfer function has exactly one pole at the origin, so the system is **type 1** and the relevant error constant is the velocity constant

$$K_v = \lim_{s\to 0} s\,L(s) = \lim_{s\to 0} s\cdot\frac{K}{s(s+2)(s+4)} = \frac{K}{2\cdot 4} = \frac{K}{8}.$$

For a type-1 system tracking a unit ramp, $e_{ss} = 1/K_v$. With $K = 24$:

$$K_v = \frac{24}{8} = 3, \qquad e_{ss} = \frac13 \approx 0.333.$$

Now the punchline. Stability caps the gain at $K < 48$, so

$$K_v = \frac{K}{8} < 6 \qquad\Longrightarrow\qquad e_{ss} = \frac{1}{K_v} > \frac16 \approx 0.167.$$

**No proportional gain can drive the ramp error below about 0.167 without destroying stability.** That is the central tension of classical design in one line — and the reason Module 4 introduces controllers with dynamics (a lag network, or the integral term of a PID) rather than just a bigger number. *Check:* $K = 24$ is comfortably inside $0 < K < 48$, so the answer $e_{ss} = 1/3$ is physically attainable ✓; and the bound is strict, since $K = 48$ itself oscillates forever and has no steady state at all.

</details>

## Connections

- **Backward:** this is [1.4](01-04-transfer-functions-poles-zeros.md)'s pole locations and [1.5](01-05-block-diagram-algebra.md)'s characteristic equation $1+L(s)=0$, combined with the BIBO criterion from [`signals-systems` 1.3](../../signals-systems/lessons/01-03-systems-and-properties.md) and [`signals-systems` 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md). It also completes [2.2](02-02-second-order-response.md): the "damped oscillation" case is exactly a pole pair with $\mathrm{Re}(s)<0$, and $\zeta \to 0$ is the pair drifting onto the axis — the same event Routh's zero row detects.
- **Forward:** [3.1](03-01-root-locus-construction.md) draws the *entire* path the poles trace as $K$ sweeps from $0$ to $\infty$; the auxiliary polynomial you just learned is the standard tool for pinning down where that path crosses the $j\omega$ axis. [3.4](03-04-gain-and-phase-margins.md) turns the same critical gain into a **gain margin** — for Example 1 at $K=12$ (a quarter of critical) the margin is $48/12 = 4$, i.e. $20\log_{10}4 \approx 12\ \text{dB}$ of headroom. [3.5](03-05-nyquist-criterion.md) answers the same question graphically and handles open-loop-unstable plants that Routh can also handle but less visually. In [5.5](05-05-digital-control.md) the whole geography moves: the stable region becomes the *inside of the unit circle* in the $z$-plane.
- **Sideways:** the "eigenvalues must have negative real part" rule is identical to the linear-stability test for equilibria in [`ode-refresher` 3.2](../../ode-refresher/lessons/03-02-phase-portraits-stability.md) — a phase-portrait spiral sink *is* a left-half-plane complex pole pair. In [5.1](05-01-state-space-modeling.md) the characteristic polynomial reappears as $\det(sI - A)$, the eigenvalue problem from [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), so Routh applies unchanged to a state-space model. And an RLC loop from [`circuits` 3.3](../../circuits/lessons/03-03-second-order-rlc.md) is the second-order case: positive $R$, $L$, $C$ make every coefficient positive, which for a quadratic really is sufficient — passive components can't build an oscillator without feedback.

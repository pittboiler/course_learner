# Real Analysis · Lesson 6.2: The Mean Value Theorem

> ⏱ ~15 min · Module 6: Differentiation · Builds on: [6.1 The derivative, rigorously](06-01-the-derivative-rigorously.md) · Unlocks: [6.3 Taylor's theorem with remainder](06-03-taylor-theorem-remainder.md)

## Why this matters

The derivative is a *local* object — it knows only what $f$ does in an infinitesimal neighborhood of one point. But the theorems you actually want are *global*: "$f$ is increasing," "$f$ is constant," "$f$ can't move faster than this." The Mean Value Theorem is the single bridge from local to global. It's the reason $f'>0$ lets you conclude $f$ climbs across a whole interval, the reason a bounded derivative caps how fast $f$ can change, and — one lesson from now — the machinery that turns a Taylor polynomial into an honest error bound. Almost every "read the function off its derivative" fact in calculus is a one-line corollary of this theorem.

## The idea

Drive from home to a town 60 miles away and arrive in exactly one hour. Your average speed was 60 mph. You may have sped, braked, idled at a light — but at *some* instant your speedometer read exactly 60. It has to: if you were always under 60 you'd never cover the distance, and if always over you'd arrive early. Somewhere the instantaneous rate matched the average rate.

That is the whole theorem. Replace "position" with $f$, "average speed" with the slope of the chord from $(a,f(a))$ to $(b,f(b))$, and "speedometer" with $f'$. The Mean Value Theorem (MVT) guarantees an interior point $c$ where the **tangent is parallel to the chord** — where the instantaneous slope $f'(c)$ equals the average slope $\frac{f(b)-f(a)}{b-a}$.

We'll build it in three floors. First **Fermat**: at an interior peak or valley the derivative is zero (the tangent is flat). Then **Rolle**: if $f$ returns to where it started, somewhere in between it must have leveled off. Then the **MVT**: tilt Rolle's flat picture to any angle by subtracting off the chord.

## The formal version

**Fermat's interior extremum theorem.** If $f$ has a local maximum or minimum at an interior point $c$ (i.e. $c$ is not an endpoint of the domain) and $f'(c)$ exists, then $f'(c)=0$.

> In words: at an interior high or low point where the function is differentiable, the tangent is horizontal — there's no uphill or downhill direction left to exploit.

*Proof.* Say $c$ is a local max, so $f(x)\le f(c)$ for all $x$ near $c$. Look at the difference quotient $\frac{f(x)-f(c)}{x-c}$, whose limit as $x\to c$ is $f'(c)$ (this exists by hypothesis). The numerator $f(x)-f(c)\le 0$ near $c$. Approach from the two sides:

- From the right ($x>c$): denominator $x-c>0$, so the quotient is $\le 0$. Hence $f'(c)=\lim_{x\to c^+}\frac{f(x)-f(c)}{x-c}\le 0$.
- From the left ($x<c$): denominator $x-c<0$, so the quotient is $\ge 0$. Hence $f'(c)=\lim_{x\to c^-}\frac{f(x)-f(c)}{x-c}\ge 0$.

Since $f'(c)$ exists, both one-sided limits equal it, so $f'(c)\le 0$ **and** $f'(c)\ge 0$. Therefore $f'(c)=0$. (Local min: apply this to $-f$.) $\blacksquare$

**Rolle's theorem.** If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then there exists $c\in(a,b)$ with $f'(c)=0$.

> In words: a differentiable function that ends where it started must have a horizontal tangent somewhere strictly inside.

*Proof.* By the **Extreme Value Theorem** (Lesson [5.2](05-02-continuity-on-compact-sets.md): a continuous function on a compact interval $[a,b]$ attains a maximum and a minimum), $f$ has a max value $M$ and a min value $m$ on $[a,b]$, each attained.

*Case 1:* $M=m$. Then $f$ is constant, so $f'(c)=0$ for **every** $c\in(a,b)$ — pick any.

*Case 2:* $M>m$. Since $f(a)=f(b)$, the two endpoints can't account for both extreme values — at least one of $M,m$ is attained at some interior point $c\in(a,b)$. (If both were attained only at endpoints, then $M$ and $m$ would both be among $\{f(a),f(b)\}$, forcing $M=m$, a contradiction.) At that interior extremum $f'(c)$ exists (differentiable on $(a,b)$), so **Fermat** gives $f'(c)=0$. $\blacksquare$

**The Mean Value Theorem.** If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c\in(a,b)$ with
$$f'(c)=\frac{f(b)-f(a)}{b-a}.$$

> In words: somewhere strictly inside, the instantaneous rate of change equals the average rate of change over the whole interval — the tangent is parallel to the chord.

*Proof (tilt Rolle).* Let $S=\frac{f(b)-f(a)}{b-a}$ be the chord's slope, and subtract off the chord:
$$g(x)=f(x)-\big[f(a)+S(x-a)\big].$$
This $g$ is continuous on $[a,b]$ and differentiable on $(a,b)$ (a difference of such functions). Check the endpoints: $g(a)=f(a)-f(a)=0$, and $g(b)=f(b)-\big[f(a)+S(b-a)\big]=f(b)-f(a)-(f(b)-f(a))=0$. So $g(a)=g(b)$, and **Rolle** applies: there is $c\in(a,b)$ with $g'(c)=0$. But $g'(x)=f'(x)-S$, so $g'(c)=0$ means $f'(c)=S=\frac{f(b)-f(a)}{b-a}$. $\blacksquare$

## Picture

![A curve on [a,b] with the secant chord from (a,f(a)) to (b,f(b)) and, at an interior point c, a tangent line drawn parallel to the chord](assets/06-02-fig1.svg)

## The payoff: reading $f$ off $f'$

Each of these is a short corollary — and this is why the MVT earns its keep. Throughout, $I$ is an interval and $x<y$ are points in it; applying the MVT on $[x,y]$ gives a $c\in(x,y)$ with $f(y)-f(x)=f'(c)(y-x)$. The sign or size of $f'(c)$ then controls the left side.

**1. $f'=0$ on $I$ $\Rightarrow$ $f$ is constant.** For any $x<y$ in $I$, $f(y)-f(x)=f'(c)(y-x)=0\cdot(y-x)=0$, so $f(y)=f(x)$. Every pair of points has equal value: $f$ is constant.

> This is the fact you *assumed* in every "$+C$" of first-year calculus. It is a theorem, and its proof is the MVT.

**2. $f'>0$ on $I$ $\Rightarrow$ $f$ is strictly increasing.** For $x<y$, $f(y)-f(x)=f'(c)(y-x)$; here $f'(c)>0$ and $y-x>0$, so the product is $>0$, giving $f(x)<f(y)$. (Likewise $f'\ge 0\Rightarrow$ non-decreasing, $f'<0\Rightarrow$ strictly decreasing.)

**3. $|f'|\le M$ on $I$ $\Rightarrow$ $f$ is $M$-Lipschitz:** $|f(x)-f(y)|\le M|x-y|$ for all $x,y\in I$. For $x\ne y$, $\frac{f(x)-f(y)}{x-y}=f'(c)$ for some $c$, so $\left|\frac{f(x)-f(y)}{x-y}\right|=|f'(c)|\le M$; multiply through by $|x-y|$.

> In words: a capped speedometer caps how far you can get — a bound on the derivative is a bound on how fast the function can move. Lipschitz control is exactly the handle you'll want later for uniqueness of solutions to differential equations and for uniform continuity.

## Worked examples

**Example 1 (mechanical — a Lipschitz bound for sine).** Claim: $|\sin x-\sin y|\le |x-y|$ for all real $x,y$.

Let $f(x)=\sin x$. Then $f'(x)=\cos x$, and $|\cos x|\le 1$ everywhere, so $|f'|\le M$ with $M=1$. By consequence **3**, $f$ is $1$-Lipschitz:
$$|\sin x-\sin y|\le 1\cdot|x-y|=|x-y|.$$
Unwrapped, the MVT gives it directly: for $x\ne y$ there is a $c$ between them with $\sin x-\sin y=\cos(c)\,(x-y)$; take absolute values and use $|\cos c|\le 1$. No trig identities, no estimates by hand — the derivative bound does all the work. (This is one half of Boss Problem 6.)

**Example 2 (why you'd care — two antiderivatives differ by a constant).** Suppose $F'=G'=f$ on an interval $I$: both $F$ and $G$ are antiderivatives of the same function. Claim: $F-G$ is constant, i.e. $F=G+C$ for some constant $C$.

Let $h=F-G$. Then $h'=F'-G'=f-f=0$ on all of $I$. By consequence **1**, $h$ is constant: $F(x)-G(x)=C$ for some fixed $C$ and all $x\in I$. That's the entire justification for the "$+C$" in every indefinite integral — antiderivatives are unique *up to* an additive constant, and no more freedom than that. The proof lives here, in the MVT, and nowhere earlier could it have been made rigorous.

## Watch out

- **You might think the MVT locates $c$.** It's an *existence* theorem: it promises some $c$ exists, never which one. For a proof you almost never need the value — you only need "there is a $c$ with $f'(c)=\dots$" and a bound on $f'$. Don't burn effort solving for $c$; use its mere existence.
- **You might think differentiability at the endpoints is required — it isn't, and that's deliberate.** We ask only for differentiability on the *open* interval $(a,b)$, because the endpoints are exactly where a derivative can fail to exist (a graph can arrive at $a$ or leave $b$ with a corner or vertical tangent) while the theorem still holds. Continuity, by contrast, *is* required on the *closed* $[a,b]$ — the Extreme Value Theorem powering Rolle needs the compact closed interval (Lesson [5.2](05-02-continuity-on-compact-sets.md)).
- **You might think one interior corner is harmless.** It kills the theorem. Take $f(x)=|x|$ on $[-1,1]$: the chord slope is $\frac{|1|-|-1|}{1-(-1)}=\frac{0}{2}=0$, so the MVT would demand a $c$ with $f'(c)=0$. But $f'(x)=+1$ for $x>0$ and $-1$ for $x<0$, never $0$, and $f'(0)$ doesn't exist. The hypothesis "differentiable on the *whole* open interval" is violated at the single point $0$ — and the conclusion fails. The hypotheses aren't decoration.

## One-liner

> On any interval, the tangent is parallel to the chord somewhere inside — so a bound on the derivative is a bound on the function, and $f'$ tells you everything global about $f$.

## Problems

**P1 (🟢)** Verify the MVT's conclusion explicitly for $f(x)=x^2$ on $[1,3]$: find every $c\in(1,3)$ with $f'(c)=\frac{f(3)-f(1)}{3-1}$, and confirm it lies in the open interval.

**P2 (🟡)** Prove that $e^x\ge 1+x$ for all $x\ge 0$. (Hint: let $f(x)=e^x-1-x$, note $f(0)=0$, and use what $f'$ says about monotonicity — consequence **2**.)

**P3 (🔴, optional)** Use the MVT to prove: if $f$ is differentiable on $\mathbb{R}$ and $f'(x)\to L$ as $x\to\infty$ for some finite $L$, then $\frac{f(x)}{x}\to L$ as $x\to\infty$. (Hint: apply the MVT to $f$ on $[0,x]$ and read off $\frac{f(x)-f(0)}{x}$.)

<details>
<summary>Solutions</summary>

**P1** $f'(x)=2x$. Chord slope: $\frac{f(3)-f(1)}{3-1}=\frac{9-1}{2}=4$. Solve $2c=4\Rightarrow c=2$, which lies in $(1,3)$. ✓ (For a quadratic the MVT point is always the midpoint of the interval — here $\frac{1+3}{2}=2$ — a fact worth carrying: the average of a linear function $f'$ over $[a,b]$ is its value at the midpoint.)

**P2** Let $f(x)=e^x-1-x$. Then $f(0)=e^0-1-0=0$, and $f'(x)=e^x-1$. For $x>0$, $e^x>1$, so $f'(x)>0$; hence by consequence **2**, $f$ is strictly increasing on $[0,\infty)$. Therefore for every $x>0$, $f(x)>f(0)=0$, i.e. $e^x-1-x>0$, so $e^x>1+x$. At $x=0$ equality holds. Combined: $e^x\ge 1+x$ for all $x\ge 0$. $\blacksquare$

(Equivalently, applying the MVT on $[0,x]$: $e^x-1-x=f(x)-f(0)=f'(c)\,x=(e^c-1)x>0$ since $c>0$. Same conclusion.)

**P3** Fix $x>0$ and apply the MVT to $f$ on $[0,x]$: there is a $c_x\in(0,x)$ with
$$\frac{f(x)-f(0)}{x-0}=f'(c_x),\qquad\text{so}\qquad \frac{f(x)}{x}=\frac{f(0)}{x}+f'(c_x).$$
As $x\to\infty$: the term $\frac{f(0)}{x}\to 0$ (fixed numerator, denominator blowing up). And $c_x\to\infty$ as $x\to\infty$, because $c_x>x/1$... more carefully, $c_x\in(0,x)$ need not exceed any fixed bound — but we can force it: since $f'(t)\to L$, for every $\varepsilon>0$ there is $R$ with $|f'(t)-L|<\varepsilon$ for all $t>R$. Take $x>R$ large enough that also $\frac{|f(0)|}{x}<\varepsilon$, and split $[0,x]$ at $R$... 

Cleaner argument: apply the MVT on $[R,x]$ instead. For $x>R$ there is $c_x\in(R,x)$ with $\frac{f(x)-f(R)}{x-R}=f'(c_x)$, and $c_x>R$ forces $|f'(c_x)-L|<\varepsilon$. Then
$$\frac{f(x)}{x}=\frac{f(R)}{x}+\frac{x-R}{x}\cdot\frac{f(x)-f(R)}{x-R}=\frac{f(R)}{x}+\Big(1-\tfrac{R}{x}\Big)f'(c_x).$$
As $x\to\infty$ with $R$ fixed: $\frac{f(R)}{x}\to 0$, $\big(1-\tfrac{R}{x}\big)\to 1$, and $f'(c_x)$ is within $\varepsilon$ of $L$. So $\limsup_{x\to\infty}\big|\frac{f(x)}{x}-L\big|\le\varepsilon$. Since $\varepsilon>0$ was arbitrary, $\frac{f(x)}{x}\to L$. $\blacksquare$

</details>

## Flashback

**From Lesson 6.1 (The derivative, rigorously):** Using the limit definition of the derivative directly (not power/quotient rules), compute $f'(2)$ for $f(x)=\frac{1}{x}$.

<details>
<summary>Solution</summary>

By definition,
$$f'(2)=\lim_{h\to 0}\frac{f(2+h)-f(2)}{h}=\lim_{h\to 0}\frac{\frac{1}{2+h}-\frac{1}{2}}{h}.$$
Combine the numerator over a common denominator: $\frac{1}{2+h}-\frac{1}{2}=\frac{2-(2+h)}{2(2+h)}=\frac{-h}{2(2+h)}$. So
$$\frac{f(2+h)-f(2)}{h}=\frac{-h}{2(2+h)}\cdot\frac{1}{h}=\frac{-1}{2(2+h)}\qquad(h\ne 0).$$
The factor $h$ cancels — the point of the algebra — leaving a quotient continuous at $h=0$:
$$f'(2)=\lim_{h\to 0}\frac{-1}{2(2+h)}=\frac{-1}{2\cdot 2}=-\frac14.$$
Matches $\frac{d}{dx}x^{-1}=-x^{-2}$ at $x=2$: $-2^{-2}=-\frac14$. ✓ $\blacksquare$

</details>

## Connections

- **Backward:** the MVT rests on two earlier pillars — the derivative as a two-sided limit from [6.1](06-01-the-derivative-rigorously.md) (Fermat's proof is entirely about one-sided difference quotients disagreeing) and the Extreme Value Theorem from [5.2](05-02-continuity-on-compact-sets.md) (Rolle's proof invokes it by name). This is where compactness quietly cashes out into a statement about derivatives.
- **Forward:** [6.3](06-03-taylor-theorem-remainder.md) generalizes the MVT — the Lagrange remainder in Taylor's theorem is proved by a Rolle-style argument applied to a cleverly rigged auxiliary function, and the MVT is exactly the degree-0 case. The $M$-Lipschitz bound also becomes a workhorse in Module 8 for uniform convergence.
- **Sideways:** consequence **3** — "$|f'|\le M$ makes $f$ $M$-Lipschitz" — is the seed of the contraction-mapping and Picard–Lindelöf existence theorems for ODEs in `dynamical-systems`, where a Lipschitz bound on the vector field is precisely what guarantees a unique solution. In `micro-refresher`, "$f'>0\Rightarrow$ strictly increasing" is why a positive marginal utility means more is genuinely preferred.

# Enumerative & Algebraic Combinatorics · Lesson 3.2: Solving recurrences with generating functions

> ⏱ ~15 min · Module 3: Generating functions · Builds on: [Lesson 3.1](03-01-ordinary-generating-functions.md) · Unlocks: [Lesson 3.3](03-03-exponential-generating-functions.md)

## Why this matters

A recurrence tells you how to *grow* a sequence one term at a time, but it hides the sequence's true shape. "Fibonacci grows like $\varphi^n$" is invisible in $F_n=F_{n-1}+F_{n-2}$ and obvious in the closed form. Generating functions are the machine that converts one into the other: a recurrence — a local, term-by-term law — becomes a single global *algebraic* equation you can solve like high-school algebra, then read the answer off. This is the discrete cousin of the Laplace transform for differential equations, and the same characteristic roots that govern linear ODEs ($e^{\lambda t}$) reappear here as the poles of a rational OGF ($\lambda^n$). It's also how you'd discover that stack-sortable permutations, balanced parentheses, and triangulated polygons are all secretly the *same* number — the Catalan number — because they all satisfy one quadratic OGF equation.

## The idea

You already know (from [Lesson 3.1](03-01-ordinary-generating-functions.md)) how to hang a sequence $a_0,a_1,a_2,\dots$ on a power series, its **ordinary generating function** (OGF) $A(x)=\sum_{n\ge0}a_n x^n$. The single fact that makes recurrences dissolve is this:

> **Shifting the index by one = multiplying the series by $x$.**

If $A(x)=\sum a_n x^n$, then $x\,A(x)=\sum a_n x^{n+1}=\sum_{n\ge1}a_{n-1}x^n$ — the same coefficients, slid one slot to the right. So a recurrence like $a_n=a_{n-1}+a_{n-2}$, which relates a term to its neighbors, turns into a relation between $A(x)$, $x A(x)$, and $x^2 A(x)$ — one equation in the single unknown $A(x)$.

The whole method is four moves:

1. **Multiply** the recurrence by $x^n$ and **sum** over every $n$ for which it holds.
2. **Recognize** each shifted sum as $A(x)$, $xA(x)$, $x^2A(x)$, … (minus a few initial terms that fall outside the summation range — this bookkeeping is where the initial conditions enter).
3. **Solve** the resulting algebraic equation for $A(x)$. Linear recurrences give a *rational* $A(x)$; some counting recurrences give a *quadratic* equation in $A(x)$.
4. **Expand** $A(x)$ back into a power series — by partial fractions (rational case) or the generalized binomial theorem (square-root case) — and read $a_n=[x^n]A(x)$.

Everything below is these four moves applied twice.

## The formal version

**The method, stated once.** Let $A(x)=\sum_{n\ge0}a_n x^n$ and suppose the recurrence holds for all $n\ge n_0$. Multiplying by $x^n$ and summing over $n\ge n_0$ produces, for each shifted term $a_{n-j}$,
$$\sum_{n\ge n_0}a_{n-j}\,x^n = x^j\sum_{m\ge n_0-j}a_m\,x^m = x^j\Big(A(x)-\sum_{m=0}^{n_0-j-1}a_m x^m\Big).$$

*In words:* a term shifted down by $j$ contributes $x^j A(x)$, corrected by subtracting off the low-order terms that the summation didn't reach. Those subtracted terms are exactly the initial conditions doing their job.

**Linear recurrences → rational OGF → partial fractions.** A constant-coefficient linear recurrence of order $d$ yields
$$A(x)=\frac{P(x)}{Q(x)},\qquad Q(x)=1-c_1x-c_2x^2-\dots-c_dx^d,$$
with $\deg P<d$. Factor $Q(x)=\prod_i(1-\rho_i x)$; the reciprocals $\rho_i$ are the **characteristic roots**. If the roots are distinct, partial fractions give $A(x)=\sum_i\frac{K_i}{1-\rho_i x}$, and since $\frac{1}{1-\rho x}=\sum_n \rho^n x^n$,
$$\boxed{\,a_n=\sum_i K_i\,\rho_i^{\,n}.\,}$$

*In words:* the closed form is a weighted sum of $n$-th powers of the characteristic roots — the discrete analog of a solution $\sum K_i e^{\lambda_i t}$ built from an ODE's characteristic roots. (A repeated root $\rho$ of multiplicity $m$ contributes $\frac{1}{(1-\rho x)^m}$, whose coefficients are $\binom{n+m-1}{m-1}\rho^n$ — a *polynomial in $n$* times $\rho^n$, exactly as a repeated ODE root gives $t\,e^{\lambda t}$. You'll meet this in P3.)

**Nonlinear recurrences → polynomial equation in $A(x)$.** When a recurrence involves a **convolution** $\sum_{i}a_i a_{n-i}$, the convolution rule from [Lesson 3.1](03-01-ordinary-generating-functions.md) — "the product $A(x)^2$ has $[x^n]A(x)^2=\sum_{i=0}^n a_i a_{n-i}$" — turns the recurrence into a *quadratic equation* in $A(x)$. You solve it with the quadratic formula and pick the root that is a genuine power series (finite at $x=0$).

## Concrete instance

Before the two big examples, watch the machine run on the smallest possible case. Let $a_0=1$ and $a_n=2a_{n-1}$ for $n\ge1$ — you already know $a_n=2^n$, so this is a sanity check on the method, not a mystery.

Multiply the recurrence by $x^n$ and sum over $n\ge1$:
$$\sum_{n\ge1}a_n x^n=2\sum_{n\ge1}a_{n-1}x^n.$$
The left side is $A(x)-a_0=A(x)-1$ (the sum misses only the $n=0$ term). The right side is $2x\sum_{n\ge1}a_{n-1}x^{n-1}=2x\,A(x)$. So
$$A(x)-1=2x\,A(x)\ \Longrightarrow\ A(x)=\frac{1}{1-2x}=\sum_{n\ge0}2^n x^n,$$
and indeed $a_n=2^n$. The two things to notice — because they recur in every example — are (i) the shift $a_{n-1}\mapsto xA(x)$, and (ii) the "$-1$" that appeared *because* the summation started at $n=1$, carrying the initial condition $a_0=1$.

## Worked examples

**Example 1 (fully worked — Fibonacci to Binet).** Define $F_0=0$, $F_1=1$, and $F_n=F_{n-1}+F_{n-2}$ for $n\ge2$. Let $A(x)=\sum_{n\ge0}F_n x^n$.

*Step 1–2 (set up and recognize).* Multiply by $x^n$ and sum over $n\ge2$:
$$\sum_{n\ge2}F_n x^n=\sum_{n\ge2}F_{n-1}x^n+\sum_{n\ge2}F_{n-2}x^n.$$
Evaluate each piece, subtracting the terms outside the range:
- Left: $\sum_{n\ge2}F_n x^n=A(x)-F_0-F_1x=A(x)-x.$
- First right: $\sum_{n\ge2}F_{n-1}x^n=x\sum_{m\ge1}F_m x^m=x\big(A(x)-F_0\big)=x\,A(x).$
- Second right: $\sum_{n\ge2}F_{n-2}x^n=x^2\sum_{m\ge0}F_m x^m=x^2A(x).$

*Step 3 (solve).* Assemble:
$$A(x)-x=x\,A(x)+x^2A(x)\ \Longrightarrow\ A(x)\,(1-x-x^2)=x\ \Longrightarrow\ \boxed{A(x)=\frac{x}{1-x-x^2}.}$$

*Step 4 (expand by partial fractions).* Factor the denominator as $1-x-x^2=(1-\varphi x)(1-\psi x)$. Matching coefficients needs $\varphi+\psi=1$ and $\varphi\psi=-1$, whose solutions are the golden ratio and its conjugate:
$$\varphi=\frac{1+\sqrt5}{2},\qquad \psi=\frac{1-\sqrt5}{2},\qquad \varphi-\psi=\sqrt5.$$
Write $\dfrac{x}{(1-\varphi x)(1-\psi x)}=\dfrac{K_1}{1-\varphi x}+\dfrac{K_2}{1-\psi x}$, i.e. $x=K_1(1-\psi x)+K_2(1-\varphi x)$. Substituting the value $x=1/\varphi$ kills the second term: $\frac1\varphi=K_1\big(1-\tfrac\psi\varphi\big)=K_1\cdot\frac{\varphi-\psi}{\varphi}=K_1\frac{\sqrt5}{\varphi}$, so $K_1=\frac1{\sqrt5}$. Symmetrically $x=1/\psi$ gives $K_2=-\frac1{\sqrt5}$. Hence
$$A(x)=\frac1{\sqrt5}\left(\frac{1}{1-\varphi x}-\frac{1}{1-\psi x}\right)=\frac1{\sqrt5}\sum_{n\ge0}\big(\varphi^n-\psi^n\big)x^n.$$
Reading off the coefficient gives **Binet's formula**:
$$\boxed{\,F_n=\frac{1}{\sqrt5}\big(\varphi^n-\psi^n\big).\,}$$
Because $|\psi|=0.618\ldots<1$, the $\psi^n$ term vanishes fast: $F_n$ is just $\varphi^n/\sqrt5$ rounded to the nearest integer. That's the "$F_n$ grows like $\varphi^n$" fact the recurrence hid. (Check $n=5$: $\varphi^5=11.09\ldots$, $\psi^5=-0.09\ldots$, difference $11.18\ldots=5\sqrt5$, divided by $\sqrt5$ gives $5=F_5$. ✓)

**Example 2 (outlined — Catalan numbers from a quadratic OGF).** The Catalan numbers count binary trees, balanced parenthesizations, triangulations of a polygon — and all of these satisfy the same convolution recurrence: $C_0=1$ and
$$C_{n+1}=\sum_{i=0}^{n}C_i\,C_{n-i}\qquad(n\ge0).$$
("Split a structure at its root into a left part of size $i$ and a right part of size $n-i$.") Let $C(x)=\sum_{n\ge0}C_n x^n$.

*Set up.* The right side is a convolution, so by the convolution rule it is $[x^n]C(x)^2$. Summing $C_{n+1}=[x^n]C(x)^2$ against $x^n$:
$$C(x)^2=\sum_{n\ge0}C_{n+1}x^n=\frac{1}{x}\sum_{n\ge0}C_{n+1}x^{n+1}=\frac{C(x)-C_0}{x}=\frac{C(x)-1}{x}.$$
Multiply through by $x$:
$$\boxed{\,C(x)=1+x\,C(x)^2.\,}$$

*Solve the quadratic.* Rearranged, $x\,C^2-C+1=0$, so $C(x)=\dfrac{1\pm\sqrt{1-4x}}{2x}$. Which sign? As $x\to0$ we need $C(0)=C_0=1$, finite. The $+$ root sends the numerator to $2$ and blows up like $1/x$; the $-$ root sends the numerator to $0$ and (by the expansion below) tends to $1$. Take the minus:
$$C(x)=\frac{1-\sqrt{1-4x}}{2x}.$$

*Expand by the generalized binomial theorem.* Using $(1+u)^{1/2}=\sum_{k\ge0}\binom{1/2}{k}u^k$ with $u=-4x$, one computes the tidy identity
$$\binom{1/2}{k}(-4)^k=-\frac{1}{2k-1}\binom{2k}{k}\quad\Longrightarrow\quad \sqrt{1-4x}=1-\sum_{k\ge1}\frac{1}{2k-1}\binom{2k}{k}x^k.$$
(Derivation of the identity is in the solution to P-note below; e.g. $k=1$ gives $\tfrac12\cdot(-4)=-2=-\binom21$, and $k=2$ gives $-\tfrac18\cdot16=-2=-\tfrac13\binom42$.) Therefore
$$C(x)=\frac{1-\sqrt{1-4x}}{2x}=\frac{1}{2x}\sum_{k\ge1}\frac{1}{2k-1}\binom{2k}{k}x^k=\frac12\sum_{n\ge0}\frac{1}{2n+1}\binom{2n+2}{n+1}x^n,$$
setting $n=k-1$. Simplify the coefficient using $\binom{2n+2}{n+1}=\frac{2(2n+1)}{n+1}\binom{2n}{n}$:
$$\boxed{\,C_n=\frac{1}{2(2n+1)}\cdot\frac{2(2n+1)}{n+1}\binom{2n}{n}=\frac{1}{n+1}\binom{2n}{n}.\,}$$
Check: $C_0,C_1,C_2,C_3=1,1,2,5$, and $\frac14\binom63=\frac{20}{4}=5$. ✓ The lesson of Example 2: a convolution recurrence is a *quadratic* in the OGF, and the closed form comes out of a square root, not a partial fraction.

## Watch out

- **You might think** you sum the recurrence over all $n\ge0$ — **but** a recurrence usually only *holds* from some $n_0$ on (Fibonacci's holds for $n\ge2$; the $n=0,1$ values are given, not derived). Sum over exactly the valid range, and let the missing low-order terms surface as the constant/linear corrections. Getting that range wrong corrupts the numerator and the closed form with it.
- **You might think** both signs of the quadratic root are equally valid — **but** exactly one is a power series. The test is finiteness at $x=0$: a true OGF has $A(0)=a_0$, so discard the root that blows up. (Here the $+$ root behaves like $1/x$ — not a power series at all.)
- **You might think** every linear recurrence gives a clean $\sum K_i\rho_i^n$ — **but** a *repeated* characteristic root breaks the geometric pattern: $\frac{1}{(1-\rho x)^m}$ contributes $\binom{n+m-1}{m-1}\rho^n$, a polynomial in $n$ times $\rho^n$ (P3). Same story as repeated roots in linear ODEs producing $t\,e^{\lambda t}$.

## One-liner

> Multiply the recurrence by $x^n$, sum, and "shift = times $x$" collapses a term-by-term law into one algebraic equation for the OGF — rational (partial fractions → sums of powers) for linear recurrences, quadratic (square root → binomials) for convolution ones.

## Problems

**P1 (🟢)** Solve $a_0=0$, $a_1=1$, $a_n=5a_{n-1}-6a_{n-2}$ ($n\ge2$) by generating functions: find the OGF, factor its denominator, do the partial fractions, and give the closed form $a_n$.

**P2 (🟡)** Solve $a_0=1$, $a_n=a_{n-1}+n$ ($n\ge1$) by generating functions. (You'll need $\sum_{n\ge1}n\,x^n=\frac{x}{(1-x)^2}$ and the coefficient $[x^n]\frac{1}{(1-x)^3}=\binom{n+2}{2}$ from [Lesson 3.1](03-01-ordinary-generating-functions.md).) Confirm your closed form against the obvious answer.

**P3 (🔴, optional)** A *repeated root*. Solve $a_0=1$, $a_1=4$, $a_n=4a_{n-1}-4a_{n-2}$ ($n\ge2$). Show the OGF is $\frac{1}{(1-2x)^2}$ and hence $a_n=(n+1)2^n$. Which "Watch out" bullet does this illustrate?

<details>
<summary>Solutions</summary>

**P1** Sum $a_n=5a_{n-1}-6a_{n-2}$ over $n\ge2$. With $A(x)=\sum a_n x^n$:
- Left: $A(x)-a_0-a_1x=A(x)-x$.
- $5\sum_{n\ge2}a_{n-1}x^n=5x\big(A(x)-a_0\big)=5x\,A(x)$.
- $-6\sum_{n\ge2}a_{n-2}x^n=-6x^2A(x)$.

So $A(x)-x=5x\,A(x)-6x^2A(x)$, giving $A(x)(1-5x+6x^2)=x$ and
$$A(x)=\frac{x}{1-5x+6x^2}=\frac{x}{(1-2x)(1-3x)}.$$
Partial fractions $\frac{x}{(1-2x)(1-3x)}=\frac{K_1}{1-2x}+\frac{K_2}{1-3x}$, i.e. $x=K_1(1-3x)+K_2(1-2x)$. At $x=1/2$: $\tfrac12=K_1(1-\tfrac32)=-\tfrac12K_1\Rightarrow K_1=-1$. At $x=1/3$: $\tfrac13=K_2(1-\tfrac23)=\tfrac13K_2\Rightarrow K_2=1$. Thus $A(x)=\frac{-1}{1-2x}+\frac{1}{1-3x}$ and
$$a_n=3^n-2^n.$$
Check: $a_0=1-1=0$, $a_1=3-2=1$, $a_2=9-4=5=5\cdot1-6\cdot0$. ✓

**P2** Sum $a_n=a_{n-1}+n$ over $n\ge1$:
$$\sum_{n\ge1}a_n x^n=\sum_{n\ge1}a_{n-1}x^n+\sum_{n\ge1}n\,x^n\ \Longrightarrow\ A(x)-1=x\,A(x)+\frac{x}{(1-x)^2}.$$
Solve: $A(x)(1-x)=1+\frac{x}{(1-x)^2}$, so
$$A(x)=\frac{1}{1-x}+\frac{x}{(1-x)^3}.$$
Extract coefficients: $[x^n]\frac{1}{1-x}=1$, and $[x^n]\frac{x}{(1-x)^3}=[x^{n-1}]\frac{1}{(1-x)^3}=\binom{(n-1)+2}{2}=\binom{n+1}{2}$. Hence
$$a_n=1+\binom{n+1}{2}=1+\frac{n(n+1)}{2}.$$
Sanity: this is just $a_n=a_0+\sum_{k=1}^n k=1+\frac{n(n+1)}2$. ✓ ($a_2=1+3=4=a_1+2$.)

**P3** Sum over $n\ge2$: left $=A(x)-a_0-a_1x=A(x)-1-4x$; right $=4x(A(x)-a_0)-4x^2A(x)=4xA(x)-4x-4x^2A(x)$. So
$$A(x)-1-4x=4xA(x)-4x-4x^2A(x)\ \Longrightarrow\ A(x)(1-4x+4x^2)=1+(4-4)x=1,$$
giving $A(x)=\frac{1}{(1-2x)^2}$. Since $\frac{1}{(1-\rho x)^2}=\sum_n(n+1)\rho^n x^n$ (differentiate the geometric series, or use $\binom{n+1}{1}$), we get
$$a_n=(n+1)2^n.$$
Check: $a_2=3\cdot4=12=4\cdot4-4\cdot1$. ✓ This illustrates the **third** "Watch out": the *repeated* characteristic root $\rho=2$ produces a polynomial-in-$n$ factor $(n+1)$ rather than a pure geometric $2^n$ — the discrete echo of $t\,e^{\lambda t}$ from a repeated ODE root.

*(The identity used in Example 2:* $\binom{1/2}{k}=\frac{(1/2)(1/2-1)\cdots(1/2-k+1)}{k!}=\frac{(-1)^{k-1}}{4^k(2k-1)}\binom{2k}{k}$, so $\binom{1/2}{k}(-4)^k=\frac{(-1)^{k-1}(-1)^k}{2k-1}\binom{2k}{k}=-\frac{1}{2k-1}\binom{2k}{k}$.)*

</details>

## Flashback

**From Lesson 3.1 (Ordinary generating functions):** Find $[x^n]\dfrac{1}{(1-x)(1-3x)}$ using the **convolution rule** — express the product as $\big(\sum_j x^j\big)\big(\sum_k 3^k x^k\big)$ and read off the coefficient. Then name the closed form.

<details>
<summary>Solution</summary>

Both factors are geometric: $\frac{1}{1-x}=\sum_{j\ge0}x^j$ and $\frac{1}{1-3x}=\sum_{k\ge0}3^k x^k$. The convolution rule says $[x^n]$ of the product sums over all ways $j+k=n$:
$$[x^n]\frac{1}{(1-x)(1-3x)}=\sum_{k=0}^{n}1\cdot 3^k=\frac{3^{n+1}-1}{2}.$$
(Same answer via partial fractions $\frac{-1/2}{1-x}+\frac{3/2}{1-3x}$, coefficient $-\tfrac12+\tfrac32\cdot3^n$ — a preview of exactly the linear-recurrence machinery in this lesson.) Closed form: $a_n=\frac{3^{n+1}-1}{2}$, i.e. $1,4,13,40,\dots$ — the partial sums of the powers of $3$.

</details>

## Connections

- **Backward:** this lesson is [Lesson 3.1](03-01-ordinary-generating-functions.md) put to work — the shift rule, the geometric series $\frac1{1-\rho x}=\sum\rho^n x^n$, and above all the **convolution rule** (which turns the Catalan recurrence into a quadratic) are all straight from 3.1. The partial-fraction step also reuses the binomial-coefficient identities of [Lesson 1.2](01-02-binomial-multinomial-coefficients.md), and the Catalan expansion leans on the generalized binomial theorem.
- **Forward:** [Lesson 3.3](03-03-exponential-generating-functions.md) runs the same "recurrence → algebraic equation" pipeline with *exponential* generating functions, where the shift rule becomes differentiation and labeled structures replace unlabeled ones. The Catalan number $C_n=\frac1{n+1}\binom{2n}{n}$ derived here is the hero of [Lesson 4.1](04-01-bijective-proof.md), where the *same* count is proved by an explicit bijection on Dyck paths — algebra and bijection meeting at one number.
- **Sideways (linear algebra / differential equations):** the "characteristic roots → $\sum K_i\rho_i^n$" recipe is the discrete twin of solving a linear ODE via its characteristic equation and eigenvalues ([linalg-refresher](../../linalg-refresher/syllabus.md)): the poles of the rational OGF are the eigenvalues of the recurrence's companion matrix, distinct roots give $\rho_i^n$ (cf. $e^{\lambda_i t}$), and repeated roots give polynomial-times-power (cf. $t\,e^{\lambda t}$).

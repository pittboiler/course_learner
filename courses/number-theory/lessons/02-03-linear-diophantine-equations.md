# Number Theory · Lesson 2.3: Linear Diophantine equations

> ⏱ ~15 min · Module 2: Congruences and the Chinese Remainder Theorem · Builds on: 2.2 (linear congruences and modular inverses) · Unlocks: 2.4 (the Chinese Remainder Theorem)

## Why this matters

"I have unlimited 6-cent and 15-cent stamps — can I make exactly 9 cents of postage?" That is a *Diophantine* question: it demands answers in whole units, because you can't paste on two-thirds of a stamp. The same integrality constraint runs through change-making, scheduling, lattice geometry, and every integer program in operations research. This lesson gives you the complete verdict for the two-variable linear case $ax+by=c$: whether *any* solution exists, and if so, a formula that hands you *all* of them at once.

## The idea

Forget the integers for a second. The real solutions of $ax+by=c$ form a straight line in the plane. A Diophantine solution is just a point on that line whose coordinates are *both* whole numbers — a place where the line pierces the integer grid.

Two facts do all the work. First, **existence is a divisibility test**: since every integer combination $ax+by$ is a multiple of $\gcd(a,b)$, the line can only hit the grid when the target $c$ is itself a multiple of that gcd. Second, **once you have one grid point, you get every grid point for free** — slide along the line by the smallest integer step that lands back on the grid, and repeat forever in both directions. So the whole problem collapses to: pass a divisibility check, find *one* solution, then step.

## The formal version

Let $a,b,c\in\mathbb{Z}$ with $a,b$ not both zero, and set $d=\gcd(a,b)$.

**Solvability.** The equation $ax+by=c$ has a solution with $x,y\in\mathbb{Z}$ **if and only if** $d\mid c$.

In words: you can hit the target exactly when the target is a multiple of the gcd — nothing else is reachable.

**All solutions.** Suppose $d\mid c$ and $(x_0,y_0)$ is *one* integer solution. Then the complete solution set is

$$x=x_0+\frac{b}{d}\,t,\qquad y=y_0-\frac{a}{d}\,t,\qquad t\in\mathbb{Z}.$$

In words: every solution is the particular one plus an integer number of "steps," where one step moves $x$ by $b/d$ and $y$ by $-a/d$. Here $t$ is the step counter, and $b/d,\ a/d$ are integers because $d$ divides both $a$ and $b$.

**Why the step is $b/d$ and $-a/d$.** Two solutions $(x,y)$ and $(x_0,y_0)$ satisfy $a(x-x_0)+b(y-y_0)=0$, i.e. $a(x-x_0)=-b(y-y_0)$. Divide by $d$: $\tfrac{a}{d}(x-x_0)=-\tfrac{b}{d}(y-y_0)$. Now $\tfrac{a}{d}$ and $\tfrac{b}{d}$ are coprime, so $\tfrac{b}{d}$ must divide $x-x_0$; writing $x-x_0=\tfrac{b}{d}t$ forces $y-y_0=-\tfrac{a}{d}t$. That is exactly the family above.

**The bridge to Lesson 2.2.** Read $ax+by=c$ modulo $b$: the $by$ term vanishes, leaving the linear congruence $ax\equiv c\pmod b$. Solving that congruence *is* finding the $x$-coordinates of the solutions; each valid $x$ then fixes $y=(c-ax)/b$. Diophantine equations and linear congruences are the same problem in two costumes — and both are governed by the same gcd test.

## Concrete instance

Solve $6x+15y=9$ completely.

**Step 1 — solvability.** $d=\gcd(6,15)=3$, and $3\mid 9$. Passes. (Sanity: $9/3=3$, so a solution exists.)

**Step 2 — one particular solution via Bézout.** First get a Bézout combination for the gcd itself. Running the Euclidean algorithm, $15=2\cdot 6+3$, so $3=15-2\cdot 6=6\cdot(-2)+15\cdot(1)$. Thus $\gcd(6,15)=3$ with $(x,y)=(-2,1)$.

Scale to the target: we want $9=3\cdot 3$, so multiply through by $3$:

$$6\cdot(-6)+15\cdot(3)=9.$$

Check: $-36+45=9$. ✓ So $(x_0,y_0)=(-6,3)$.

**Step 3 — the full family.** Here $b/d=15/3=5$ and $a/d=6/3=2$, so

$$x=-6+5t,\qquad y=3-2t,\qquad t\in\mathbb{Z}.$$

**Step 4 — list a couple.** 

| $t$ | $x$ | $y$ | check $6x+15y$ |
|---|---|---|---|
| $0$ | $-6$ | $3$ | $-36+45=9$ ✓ |
| $1$ | $-1$ | $1$ | $-6+15=9$ ✓ |
| $2$ | $4$ | $-1$ | $24-15=9$ ✓ |

Notice $(-1,1)$ is the "smallest" solution here — there is no solution with both coordinates non-negative, since $x=-6+5t\ge0$ needs $t\ge2$, forcing $y=3-2t\le-1$. Existence of *integer* solutions never guarantees *positive* ones; that extra constraint is what makes the postage problem below have a genuine answer to hunt for.

## Worked examples

**Example 1 (mechanical).** Solve $14x+21y=35$.

$d=\gcd(14,21)=7$, and $7\mid 35$ ✓. Divide the whole equation by $7$ first — always simplify — to get $2x+3y=5$, where now $\gcd(2,3)=1$. By inspection $(x_0,y_0)=(1,1)$ works ($2+3=5$). With $a=2,b=3,d=1$:

$$x=1+3t,\qquad y=1-2t,\qquad t\in\mathbb{Z}.$$

E.g. $t=-1$ gives $(-2,3)$: $2(-2)+3(3)=-4+9=5$ ✓, and back in original units $14(-2)+21(3)=-28+63=35$ ✓.

**Example 2 (why you'd care — postage).** You have unlimited **6-cent** and **15-cent** stamps. Can you make exactly **9 cents**? What about **90 cents**, using at least one of each?

*9 cents:* solve $6x+15y=9$ — done above. The family is $(x,y)=(-1+5t,\,1-2t)$ (re-indexing from $(-1,1)$). For a physical solution we need $x\ge0$ and $y\ge0$ simultaneously. $x=-1+5t\ge0\Rightarrow t\ge1$; then $y=1-2t\le-1<0$. **No non-negative solution: 9 cents is impossible.** The gcd test says integers exist, but stamps can't be negative.

*90 cents:* solve $6x+15y=90$, i.e. (÷3) $2x+5y=30$. One solution: $y=0,x=15$, but we want *both* positive. Family from $\gcd(2,5)=1$: $x=15+5t,\ y=0-2t=-2t$. For $y>0$ need $t\le-1$; take $t=-1$: $(x,y)=(10,2)$ — ten 6-cent and two 15-cent stamps: $60+30=90$ ✓. Take $t=-2$: $(5,4)$: $30+60=90$ ✓. **Yes, and here are two ways.** The moral: solvability over $\mathbb{Z}$ is a clean gcd test; solvability over $\mathbb{Z}_{\ge0}$ is a *range* question you answer by clipping the parameter $t$.

## Watch out

- You might think the step in $x$ is $a$ and in $y$ is $b$ — but it's $b/d$ and $-a/d$ (note the swap *and* the sign flip *and* the division by $d$). Forgetting the $/d$ overshoots and skips solutions; forgetting the sign gives points that don't satisfy the equation.
- You might think "an integer solution exists" means "a useful solution exists." For counting stamps, coins, or people you also need $x,y\ge0$ — a strictly stronger condition you enforce by restricting $t$ to a range, not by any gcd test.
- You might scale the Bézout coefficients wrong. Bézout gives you $ax+by=d$; to hit $c$ you multiply *both* coefficients by $c/d$, and $c/d$ must be an integer (that's exactly the solvability check). Multiplying by $c$ instead of $c/d$ is the classic slip.

## One-liner

> $ax+by=c$ is solvable exactly when $\gcd(a,b)\mid c$; find one solution by scaling Bézout, then get all of them by stepping $x$ up by $b/d$ and $y$ down by $a/d$.

## Problems

**P1 (🟢)** Decide whether $18x+30y=24$ is solvable. If so, find one particular solution and write the complete family $\{(x,y)\}$.

**P2 (🟡)** A cashier must give **43 cents** in change using only **5-cent** and **11-cent** coins. Set up the Diophantine equation, and find *all* ways to do it with non-negative counts of each coin.

**P3 (🔴, optional)** Show directly that $ax+by=c$ having an integer solution is *equivalent* to the linear congruence $ax\equiv c\pmod b$ having a solution — i.e. that the two solvability conditions coincide — and identify the common gcd criterion. (This is the 2.2 ↔ 2.3 bridge.)

<details>
<summary>Solutions</summary>

**P1** $d=\gcd(18,30)=6$, and $6\mid 24$ ($24/6=4$), so it *is* solvable. Simplify by $6$: $3x+5y=4$. Bézout for $\gcd(3,5)=1$: $5=1\cdot3+2,\ 3=1\cdot2+1$, so $1=3-2=3-(5-3)=2\cdot3-1\cdot5$, giving $3(2)+5(-1)=1$. Scale by $4$: $3(8)+5(-4)=4$, so $(x_0,y_0)=(8,-4)$. Check: $24-20=4$ ✓. With $a=3,b=5,d=1$ (post-simplification):
$$x=8+5t,\qquad y=-4-3t,\qquad t\in\mathbb{Z}.$$
Spot-check $t=-1$: $(3,-1)$, $3(3)+5(-1)=9-5=4$ ✓; in original units $18(3)+30(-1)=54-30=24$ ✓.

**P2** Equation: $5x+11y=43$ with $x,y\ge0$. $\gcd(5,11)=1\mid 43$, solvable. Find one solution: mod $5$, $11y\equiv 43\Rightarrow y\equiv 3\pmod 5$ (since $11\equiv1,\ 43\equiv3$). Take $y=3$: $5x=43-33=10\Rightarrow x=2$. So $(x_0,y_0)=(2,3)$; check $10+33=43$ ✓. Family: $x=2+11t,\ y=3-5t$. Non-negativity: $x\ge0\Rightarrow t\ge0$; $y\ge0\Rightarrow t\le 3/5\Rightarrow t\le0$. Only $t=0$ survives. **Unique way: two 5-cent coins and three 11-cent coins** ($10+33=43$).

**P3** ($\Rightarrow$) If $ax+by=c$ has an integer solution $(x,y)$, reduce mod $b$: $ax\equiv c\pmod b$, so $x$ solves the congruence. ($\Leftarrow$) If $ax\equiv c\pmod b$ has a solution $x$, then $b\mid(c-ax)$, so $c-ax=by$ for some integer $y$, i.e. $ax+by=c$ — a Diophantine solution. Hence the two problems are solvable together or not at all. From Lesson 2.2, $ax\equiv c\pmod b$ is solvable iff $\gcd(a,b)\mid c$; that is *identical* to the Diophantine solvability criterion $\gcd(a,b)\mid c$. Same gcd test, two costumes. $\blacksquare$

</details>

## Flashback

**From Lesson 2.2 (Linear congruences and modular inverses):** Solve $8x\equiv 5\pmod{11}$ — i.e. find the inverse of $8$ modulo $11$ and use it — and give the solution as a residue class mod $11$.

<details>
<summary>Solution</summary>

Since $\gcd(8,11)=1\mid 5$, there is a unique solution mod $11$. Find $8^{-1}\pmod{11}$: seek $8k\equiv1$. Testing (or via Bézout $11=1\cdot8+3,\ 8=2\cdot3+2,\ 3=1\cdot2+1\Rightarrow 1=3-2=3-(8-2\cdot3)=3\cdot3-8=3(11-8)-8=3\cdot11-4\cdot8$), so $-4\cdot8\equiv1$, i.e. $8^{-1}\equiv-4\equiv 7\pmod{11}$. Check: $8\cdot7=56=55+1\equiv1$ ✓. Multiply: $x\equiv 7\cdot5=35\equiv 2\pmod{11}$. Verify: $8\cdot2=16\equiv5\pmod{11}$ ✓. **Answer: $x\equiv 2\pmod{11}$.**

</details>

## Connections

- **Backward (2.2):** the solvability criterion $\gcd(a,b)\mid c$ and the "how many solutions" bookkeeping are exactly the linear-congruence results, now read on the integer line instead of inside $\mathbb{Z}/n\mathbb{Z}$ (Problem 3 makes the equivalence precise).
- **Forward (2.4):** the Chinese Remainder Theorem stitches together *several* congruences with coprime moduli; its constructive proof leans on solving a Diophantine/Bézout relation between the moduli, so this lesson is the mechanical engine of the next.
- **Forward (5.1–5.2):** here the equation is *linear* and fully solved by gcd + stepping. Nonlinear Diophantine equations — Pythagorean triples $x^2+y^2=z^2$ (5.1) and Pell's $x^2-Dy^2=1$ (5.2) — need genuinely different ideas (parametrization, continued fractions); this lesson marks the boundary of the easy case.
- **Sideways (operations research):** requiring $x,y\ge0$ turns the postage problem into a two-variable **integer program**. The clean parametrize-then-clip method here is the toy version of what integer-programming solvers do at scale in `operations-research` scheduling and allocation problems.

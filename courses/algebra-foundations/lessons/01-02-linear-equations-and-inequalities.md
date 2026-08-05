# Algebra I & II · Lesson 1.2: Linear equations & inequalities

> ⏱ ~15 min · Module 1: Expressions & linear equations · Builds on: 1.1 (variables & expressions) · Unlocks: 2.1 (the function concept)

## Why this matters

"Solve for $x$" is the single most-used verb in all of quantitative work. Every physics problem that ends with "find the velocity," every econ problem that ends with "find the break-even quantity," every calculus problem that sets a derivative to zero — the last step is isolating an unknown in a linear equation or reading off where one quantity beats another. Get this reflex clean and fast now, and you stop losing points to sign slips forever. The inequality half is where you'll answer "*when* is this cheaper / faster / safe?" — the shape of every optimization and constraint you'll meet later.

## The idea

Think of an equation as a **balance scale**. The `=` sign says the two pans weigh the same. You're allowed to do anything you like to the scale — add weight, remove weight, double everything, halve everything — **as long as you do the exact same thing to both pans**. Do that, and the scale stays balanced, so the equation stays true. Solving is just picking moves that strip everything away from the variable until it sits alone on one pan.

The moves come in **inverse pairs**: addition undoes subtraction, multiplication undoes division. To isolate a variable you peel operations off in reverse order — like taking off shoes before socks. If $x$ got multiplied by 3 and then had 7 added, you undo the $+7$ first (subtract 7 from both sides), then undo the $\times 3$ (divide both sides by 3).

An **inequality** ($<, \le, >, \ge$) is the same balance idea, but now one pan is *heavier* than the other. Almost all the same moves are legal — with one booby trap: if you multiply or divide both sides by a **negative** number, the heavier pan and lighter pan swap roles, so the inequality sign must **flip**.

## The formal version

A **linear equation** in one variable is any equation that can be written

$$ax + b = 0, \qquad a \neq 0,$$

where $x$ is the unknown and $a, b$ are constants. "Linear" means $x$ appears only to the first power — no $x^2$, no $\sqrt{x}$, no $x$ in a denominator. Its unique solution is $x = -\dfrac{b}{a}$.

The legal moves (they preserve the solution set) are:

- **Add or subtract** the same quantity on both sides.
- **Multiply or divide** both sides by the same *nonzero* quantity.

In words: whatever you do to the left, do identically to the right. For **inequalities** the moves are the same, with one amendment:

$$\text{if } a < b \text{ and } c < 0, \text{ then } ac > bc.$$

In words: multiplying or dividing an inequality by a negative number reverses the direction of the sign. (Adding or subtracting *any* number never flips it — only sign-changing scaling does.)

**Interval notation** names the solution set of an inequality as a range on the number line. Use a **square bracket** `[` or `]` when the endpoint is *included* ($\le, \ge$) and a **round parenthesis** `(` or `)` when it's *excluded* ($<, >$). Infinity is never reached, so $\infty$ and $-\infty$ always get a parenthesis:

$$x > 3 \;\Leftrightarrow\; (3, \infty), \qquad x \le 5 \;\Leftrightarrow\; (-\infty, 5], \qquad -2 \le x < 4 \;\Leftrightarrow\; [-2, 4).$$

## Concrete instance

Solve $2x + 9 = 5x - 3$, watching the balance stay level at every step.

$$
\begin{aligned}
2x + 9 &= 5x - 3 &&\text{(start: both pans equal)}\\
2x + 9 - 2x &= 5x - 3 - 2x &&\text{subtract } 2x \text{ from both pans}\\
9 &= 3x - 3 \\
9 + 3 &= 3x - 3 + 3 &&\text{add } 3 \text{ to both pans}\\
12 &= 3x \\
\frac{12}{3} &= \frac{3x}{3} &&\text{divide both pans by } 3\\
4 &= x
\end{aligned}
$$

**Check** (always substitute back into the *original*): left side $2(4) + 9 = 17$; right side $5(4) - 3 = 17$. Balanced. So $x = 4$.

Notice the strategy: gather the variable on one side first (subtract the *smaller* $2x$ so the coefficient stays positive), then peel off the constant, then divide. The check is not optional — it's the two-second insurance against a dropped sign.

## Worked examples

**Example 1 (mechanical — a fraction and a distribution).** Solve $\frac{1}{2}(x + 6) = 2x - 9$.

Fractions are friction; clear them first. Multiply **both whole sides** by 2:

$$x + 6 = 4x - 18.$$

Now gather variables (subtract $x$) and constants (add 18):

$$6 + 18 = 4x - x \;\Longrightarrow\; 24 = 3x \;\Longrightarrow\; x = 8.$$

Check: $\frac{1}{2}(8 + 6) = \frac{1}{2}(14) = 7$, and $2(8) - 9 = 7$. ✓

**Example 2 (why you'd care — an inequality with the sign-flip).** A hot part cools so that its temperature after $t$ minutes is $80 - 5t$ degrees Celsius. For how long is it still hotter than 50 degrees (too hot to handle)?

Set up the inequality "temperature is greater than 50":

$$80 - 5t > 50.$$

Subtract 80 from both sides (safe — no flip):

$$-5t > -30.$$

Now divide both sides by $-5$. That's a **negative**, so the sign flips:

$$t < 6.$$

With $t \ge 0$ physically, the solution set is $[0, 6)$ minutes: the part is too hot for the first 6 minutes, cool enough from minute 6 on. Had you forgotten to flip, you'd get $t > 6$ — the exact opposite, and you'd burn your hand. This is the entire reason the flip rule is drilled: the wrong answer is not a little off, it's *reversed*.

## Watch out

- You might think *every* operation on an inequality flips the sign. **Only multiplying or dividing by a negative does.** Adding or subtracting a negative (e.g. subtracting 80 above) leaves the sign alone — it just slides both pans, it doesn't swap which is heavier.
- You might think "do the same to both sides" means "to one term on each side." It means the **whole side**. To multiply out a fraction you must multiply *every* term, and when you divide you divide the entire expression — this is why distribution ($a(b+c) = ab + ac$) rides shotgun with equation-solving.
- You might think brackets and parentheses in intervals are interchangeable. They're not: `[` / `]` means the endpoint **is** a solution ($\le, \ge$), `(` / `)` means it **isn't** ($<, >$). And $\pm\infty$ is a direction, not a number you can reach, so it **always** takes a parenthesis: $[3, \infty)$, never $[3, \infty]$.

## One-liner

> An equation is a balance — do the same thing to both sides until the variable stands alone — and an inequality plays by the identical rules except that scaling by a negative flips the sign.

## Problems

**P1 (🟢)** Solve for $x$: $\;3(2x - 4) = 5x - 6$. Show the check.

**P2 (🟡)** You're comparing two gyms. Gym A charges a 60-dollar sign-up fee plus 10 per month. Gym B charges 25 per month with no sign-up. Let $m$ be the number of months. Write one equation for "the two cost the same," solve it, and say in plain English what your answer means.

**P3 (🔴, optional)** Solve the compound inequality $-1 \le \dfrac{2x - 3}{-2} < 5$ and write the solution in interval notation. (Watch what the negative denominator does to *both* signs at once.)

<details>
<summary>Solutions</summary>

**P1** Distribute the 3 on the left (whole side): $6x - 12 = 5x - 6$. Subtract $5x$: $x - 12 = -6$. Add 12: $x = 6$.
Check in the original: left $3(2\cdot 6 - 4) = 3(8) = 24$; right $5(6) - 6 = 24$. ✓ So $x = 6$.

**P2** Cost of A is $60 + 10m$; cost of B is $25m$. Same cost:
$$60 + 10m = 25m \;\Longrightarrow\; 60 = 15m \;\Longrightarrow\; m = 4.$$
Check: A $= 60 + 40 = 100$; B $= 25 \cdot 4 = 100$. ✓
In plain English: **the two gyms cost the same at 4 months (100 dollars each).** Before 4 months A's sign-up fee makes it pricier; after 4 months A's cheaper monthly rate wins — so A is the better deal only if you'll stay longer than 4 months.

**P3** Clear the fraction by multiplying **all three parts** by $-2$. Since $-2$ is negative, *both* inequality signs flip (and the whole chain reverses):
$$-1 \le \frac{2x-3}{-2} < 5 \;\xrightarrow{\times(-2)}\; 2 \ge 2x - 3 > -10.$$
Rewrite left-to-right in increasing order: $-10 < 2x - 3 \le 2$. Add 3 to all parts: $-7 < 2x \le 5$. Divide by 2 (positive — no flip): 
$$-\tfrac{7}{2} < x \le \tfrac{5}{2}.$$
In interval notation: $\left(-\dfrac{7}{2},\, \dfrac{5}{2}\right]$.
Spot-check $x = 0$: $\frac{2(0)-3}{-2} = \frac{-3}{-2} = 1.5$, and $-1 \le 1.5 < 5$. ✓ And the right endpoint $x = \frac{5}{2}$: $\frac{5-3}{-2} = -1$, and $-1 \le -1$ holds (closed bracket), while just past it the inequality would fail. ✓

</details>

## Flashback

*(None — course start; flashbacks begin at Lesson 2.1.)*

## Connections

- **Backward:** this is [Lesson 1.1](01-01-variables-and-expressions.md)'s distributing and combining like terms put to work — every solving step is one of those manipulations applied to both sides of an `=`.
- **Forward:** [Lesson 2.3 (systems of linear equations)](../lessons/02-03-systems-of-linear-equations.md) is *two* of these at once — substitution and elimination are both "isolate a variable, then push it into the other equation." And setting an expression equal to a target value is the move behind intercepts, break-even points, and (later) setting a derivative to zero to optimize. It's everywhere.
- **Sideways (econ):** P2 is a **break-even** calculation — the same structure as finding where cost equals revenue, or where Plan A undercuts Plan B, in `micro-refresher`. The inequality version ("for which quantities is this profitable?") is the setup for constrained optimization you'll formalize there.

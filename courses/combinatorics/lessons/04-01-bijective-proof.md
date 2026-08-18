# Enumerative & Algebraic Combinatorics · Lesson 4.1: The art of the bijective proof

> ⏱ ~15 min · Module 4: Bijective proof, pigeonhole & Ramsey · Builds on: [Lesson 3.2](03-02-recurrences-generating-functions.md) (Catalan numbers), [Lesson 1.1](01-01-four-rules-twelvefold-way.md) (the bijection principle), [proofs-primer](../../proofs-primer/syllabus.md) · Unlocks: [Lesson 4.2](04-02-pigeonhole.md)

## Why this matters

A generating function proves an identity by *grinding* — you trust the algebra even when you can't see what happened. A bijective proof does the opposite: it hands you a reason. When two counts come out equal, the sharpest possible explanation is a rule that pairs the things one set counts with the things the other counts, one-to-one. That rule *is* the proof, and it usually teaches you something the algebra hid. This lesson also introduces the **Catalan zoo** — a dozen wildly different-looking families of objects that turn out to be the same family in disguise, which is exactly the kind of hidden sameness a bijection exposes.

## The idea

Counting by matching is older than counting by numbers. To check that two crowds are equal without counting either, pair them off — every person with a chair, no chair empty, no one standing. If the pairing works, the crowds are equal, *and you never needed the total.* That's the whole method.

Two moves do almost all the work:

- **A bijection** between set $A$ and set $B$ is a perfect pairing: it turns each element of $A$ into a distinct element of $B$, using every element of $B$ exactly once. Build one and you've proven $|A| = |B|$ — even if you never compute either size.
- **An involution** is a bijection from a set *to itself* that undoes itself: apply it twice, you're home. Involutions are the workhorse for identities with minus signs. If you can flip most elements into partners of opposite sign, everything cancels except the elements the flip leaves alone — the **fixed points** — and only those survive to be counted.

The Catalan zoo is the payoff. The numbers $1, 1, 2, 5, 14, 42, \dots$ count balanced parentheses, mountain-range paths, ways to cut a polygon into triangles, and binary trees — and each pair of these is linked by a bijection you can draw. Learn one, learn them all.

## The formal version

**The bijection principle.** For finite sets $A$ and $B$, we have $|A| = |B|$ if and only if there exists a bijection $f : A \to B$ — a function that is *injective* (distinct inputs give distinct outputs) and *surjective* (every element of $B$ is hit).

*In words:* two finite collections have the same size exactly when you can match them up perfectly, with nothing left over on either side.

To *use* it, you exhibit an explicit $f$ **and** its inverse $f^{-1}$: showing you can undo the map is the cleanest way to certify it's a bijection.

**Involutions and sign-reversing involutions.** An **involution** on a set $X$ is a map $\varphi : X \to X$ with $\varphi(\varphi(x)) = x$ for all $x$. Now suppose each element carries a sign, $\operatorname{sgn}(x) \in \{+1, -1\}$. Call $\varphi$ **sign-reversing** if $\operatorname{sgn}(\varphi(x)) = -\operatorname{sgn}(x)$ whenever $\varphi(x) \neq x$. Let $\operatorname{Fix}(\varphi) = \{x : \varphi(x) = x\}$ be its fixed points. Then

$$\sum_{x \in X} \operatorname{sgn}(x) \;=\; \sum_{x \in \operatorname{Fix}(\varphi)} \operatorname{sgn}(x).$$

*In words:* if a self-pairing sends almost everything to a partner of the opposite sign, all those pairs cancel in a signed sum, and only the un-paired fixed points are left to count.

**Canonical example — even vs. odd subsets.** Let $X$ be all subsets of $[n] = \{1, 2, \dots, n\}$, with $\operatorname{sgn}(S) = (-1)^{|S|}$. Define $\varphi(S) = S \mathbin{\triangle} \{1\}$: toggle whether $1$ is in the set (remove it if present, add it if absent). Then $\varphi(\varphi(S)) = S$ (toggling twice restores it), and $\varphi$ changes $|S|$ by exactly $\pm 1$, so it flips the sign — a sign-reversing involution with **no fixed points** (every $S$ genuinely changes). Two facts fall out at once:
- The signed sum is empty: $\displaystyle\sum_{S \subseteq [n]} (-1)^{|S|} = 0$ for $n \ge 1$, which is the identity $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$.
- Grouping by parity, $[n]$ has **exactly as many even-sized subsets as odd-sized subsets** — the involution pairs each even one with an odd one.

**The Catalan number.** The $n$-th **Catalan number** is
$$C_n = \frac{1}{n+1}\binom{2n}{n}, \qquad C_0, C_1, C_2, \dots = 1, 1, 2, 5, 14, 42, \dots$$
Every object in the zoo below is counted by $C_n$. We prove the formula once, by reflection, in Example 2.

## Picture

![Left: a lattice path from corner to corner staying weakly below the diagonal y=x, its East and North steps labelled with open and close parentheses. Right: the same path drawn as a mountain range of up and down steps, giving the balanced parenthesis string (()()). Both are counted by the Catalan number C_3 = 5.](assets/04-01-fig1.svg)

A **Dyck path** of semilength $n$ is a lattice path from $(0,0)$ to $(n,n)$ using unit East and North steps that never rises above the diagonal $y = x$ (equivalently, drawn as a *mountain range* of up/down steps starting and ending on the ground, never dipping below it). The figure shows one such path at $n = 3$ in both guises, and its balanced-parenthesis reading. There are $C_3 = 5$ of them.

## Worked examples

**Example 1 (mechanical — Dyck paths ↔ balanced parentheses).** A string of $n$ "(" and $n$ ")" is **balanced** if, reading left to right, the count of ")" never exceeds the count of "(" (and they're equal at the end). Claim: balanced strings of length $2n$ are in bijection with Dyck paths of semilength $n$.

*The map $f$:* read the path's steps in order; send each **up/East** step to "(" and each **down/North** step to ")".

*Why it lands in the target:* "never rise above the diagonal" means "at every prefix, the number of North steps $\le$ the number of East steps," which is *exactly* "no prefix has more ")" than "(." So $f$ sends Dyck paths to balanced strings.

*The inverse $f^{-1}$:* read a balanced string; send each "(" to an up/East step and each ")" to a down/North step. Balance guarantees the resulting path never crosses the diagonal, so it's a genuine Dyck path. Since $f$ and $f^{-1}$ plainly undo each other, $f$ is a bijection. $\blacksquare$

Concretely, the path in the figure reads $\texttt{(\,(\,)\,(\,)\,)}$. The full $n = 3$ zoo has $C_3 = 5$ members: $\texttt{((()))},\ \texttt{(()())},\ \texttt{(())()},\ \texttt{()(())},\ \texttt{()()()}$ — five strings, five paths, five triangulations of a pentagon, five binary trees on three nodes. *Same five, five costumes.*

**Example 2 (why you'd care — the reflection principle proves the Catalan formula).** Draw Dyck paths as mountain ranges: $n$ up-steps $(1,+1)$ and $n$ down-steps $(1,-1)$ from $(0,0)$ to $(2n,0)$, never dropping below height $0$. Ignoring the height constraint, there are $\binom{2n}{n}$ such up/down sequences (choose which $n$ of the $2n$ steps go up). We subtract the **bad** ones — the paths that *do* dip to height $-1$ somewhere.

*The reflection.* Take a bad path and find the first step where it touches height $-1$. Reflect everything **after** that point across the line $y = -1$ (up-steps become down-steps and vice versa). The path's endpoint $(2n, 0)$ sits $1$ unit above the line, so its mirror lands $1$ unit below: at $(2n, -2)$. This reflection is a bijection between bad paths and *all* paths from $(0,0)$ to $(2n,-2)$ — undo it by reflecting after the first touch of $y=-1$ again.

A path to $(2n,-2)$ has (#up) $-$ (#down) $= -2$ over $2n$ steps, so #up $= n-1$: there are $\binom{2n}{n-1}$ of them. Hence

$$C_n = \binom{2n}{n} - \binom{2n}{n-1} = \binom{2n}{n} - \binom{2n}{n}\cdot\frac{n}{n+1} = \frac{1}{n+1}\binom{2n}{n},$$

using $\binom{2n}{n-1} = \binom{2n}{n}\cdot\frac{n}{n+1}$. A count you couldn't do directly became a subtraction of two counts you could, by a single fold of the paper. $\blacksquare$

## Watch out

- You might think exhibiting an injective map $A \to B$ proves $|A| = |B|$ — but injective alone only gives $|A| \le |B|$. You need surjectivity too (or, cleanest, an explicit inverse). Half a bijection is an inequality, not an identity.
- You might think *any* self-inverse map cancels a signed sum — but only a **sign-reversing** one does, and only its *non-fixed* elements cancel. Fixed points keep their sign and survive; a correct involution proof always ends by counting the fixed-point set, not by declaring the sum zero.
- You might think two families being "obviously similar" is a proof they're equinumerous — it isn't. The proof is the actual map plus its inverse. "Both are $5$ at $n=3$" is evidence, not a bijection; write down the rule.

## One-liner

> To prove two counts equal, don't compute them — pair them; and to kill a signed sum, flip everything you can and count only what won't flip.

## Problems

**P1 (🟢)** List all Dyck paths of semilength $n = 2$ as balanced parenthesis strings, confirm there are $C_2 = 2$ of them, and verify $C_2 = \frac{1}{3}\binom{4}{2}$.

**P2 (🟡)** Give a sign-reversing-involution proof that for $n \ge 1$, the number of subsets of $[n]$ containing element $n$ equals the number not containing it. (Then say in one sentence why this is really the same fact as $\binom{n}{k}$ summing to $2^n$ split in half — i.e. why it is *trivial* here but the even/odd version needed a sign.)

**P3 (🔴, optional)** A **triangulation** of a convex $(n+2)$-gon cuts it into $n$ triangles using $n-1$ non-crossing diagonals; there are $C_n$ of them. Fix an edge of the polygon as the "base." Describe a bijection between triangulations of the $(n+2)$-gon and balanced parenthesis strings of length $2n$, by using the triangle that sits on the base to split the polygon recursively. (Sketch the recursion; you need not prove it airtight.)

<details>
<summary>Solutions</summary>

**P1** The two strings are $\texttt{(())}$ and $\texttt{()()}$. Check balance: $\texttt{(())}$ has running "(" minus ")" counts $1,2,1,0$ — never negative; $\texttt{()()}$ gives $1,0,1,0$ — never negative. No other arrangement of two "(" and two ")" is balanced: $\texttt{)}\dots$ fails immediately, and $\texttt{)(} $-type prefixes go negative. So $C_2 = 2$. Formula: $\frac{1}{3}\binom{4}{2} = \frac{1}{3}\cdot 6 = 2$. ✓ As mountain ranges these are the single peak $\wedge\!\wedge\!\vee\!\vee$ and the double peak $\wedge\vee\wedge\vee$.

**P2** Define $\varphi(S) = S \mathbin{\triangle} \{n\}$: toggle element $n$. This is an involution ($\varphi(\varphi(S)) = S$), and it moves every subset between "contains $n$" and "doesn't contain $n$," never fixing any set. So $\varphi$ is a fixed-point-free bijection between the two families, forcing them to be equal in size (each has $2^{n-1}$ members). No signs are needed because we're pairing *sets with sets*, not cancelling a signed sum — the pairing itself is the whole proof. That is exactly $\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}$ summed over $k$, i.e. Pascal's rule splitting $2^n = 2\cdot 2^{n-1}$: half the subsets use $n$, half don't. The even/odd statement needed a sign because there "even" and "odd" don't split cleanly by any single element's presence — the toggle *changes* parity rather than preserving a class, so its content is a cancellation, not a same-class pairing.

**P3** Label the base edge's endpoints and orient the polygon. In any triangulation, the base edge belongs to exactly one triangle $T$; its third vertex $v$ splits the remaining polygon into a **left** sub-polygon and a **right** sub-polygon (one or both possibly degenerate to a single edge). Recursively encode the left piece as a balanced string $L$ and the right piece as $R$, and map the whole triangulation to $\texttt{(}\,L\,\texttt{)}\,R$ — the "(" and ")" record the base triangle $T$, wrapping its left descendants, followed by its right descendants. The empty polygon (a bare edge) maps to the empty string. This is precisely the recursion $C_{n+1} = \sum_{i=0}^{n} C_i\,C_{n-i}$ (choose $v$, i.e. split $n$ triangles into $i$ on the left and $n-i$ on the right), which is the Catalan recurrence from [Lesson 3.2](03-02-recurrences-generating-functions.md); the same recursion generates balanced strings via $s \mapsto \texttt{(}\,L\,\texttt{)}\,R$, so the two families are in bijection. Reversing the parse (peel the outermost matched "(...)" to recover $T$, $L$, $R$) inverts the map. $\blacksquare$

</details>

## Flashback

**From [Lesson 3.2](03-02-recurrences-generating-functions.md) (recurrences via generating functions):** Let $a_0 = 0$, $a_1 = 1$, and $a_n = 5a_{n-1} - 6a_{n-2}$ for $n \ge 2$. Set up the ordinary generating function $A(x) = \sum_{n \ge 0} a_n x^n$, solve for it as a rational function, and read off a closed form for $a_n$ by partial fractions.

<details>
<summary>Solution</summary>

Multiply the recurrence by $x^n$ and sum over $n \ge 2$:
$$\sum_{n\ge 2} a_n x^n = 5x\sum_{n\ge 2} a_{n-1}x^{n-1} - 6x^2\sum_{n\ge 2} a_{n-2}x^{n-2}.$$
The left side is $A(x) - a_0 - a_1 x = A(x) - x$. The right side is $5x\big(A(x) - a_0\big) - 6x^2 A(x) = 5x\,A(x) - 6x^2 A(x)$. So
$$A(x) - x = 5x\,A(x) - 6x^2 A(x) \;\Longrightarrow\; A(x)\big(1 - 5x + 6x^2\big) = x \;\Longrightarrow\; A(x) = \frac{x}{(1-2x)(1-3x)}.$$
Partial fractions: write $\frac{x}{(1-2x)(1-3x)} = \frac{P}{1-2x} + \frac{Q}{1-3x}$, so $x = P(1-3x) + Q(1-2x)$. Setting $x = \tfrac12$ gives $\tfrac12 = P(-\tfrac12)$, so $P = -1$; setting $x = \tfrac13$ gives $\tfrac13 = Q(\tfrac13)$, so $Q = 1$. Then
$$A(x) = \frac{-1}{1-2x} + \frac{1}{1-3x} = \sum_{n\ge 0}\big(3^n - 2^n\big)x^n, \qquad \boxed{a_n = 3^n - 2^n.}$$
Check: $a_2 = 9 - 4 = 5$, and the recurrence gives $5a_1 - 6a_0 = 5$. ✓

</details>

## Connections

- **Backward:** this sharpens the bijection principle first met in [Lesson 1.1](01-01-four-rules-twelvefold-way.md) — there it justified a *count*, here it justifies an *identity between two counts*, and the involution refinement handles identities carrying signs (the sign-cancellation behind [inclusion–exclusion](01-03-inclusion-exclusion.md)). The Catalan formula reuses the recurrence and closed form from [Lesson 3.2](03-02-recurrences-generating-functions.md), now proven by folding paper instead of solving a quadratic.
- **Forward:** [Lesson 4.2](04-02-pigeonhole.md) is the other half of "structure from size" — where a bijection shows two sets are *equal*, pigeonhole shows one map into a *smaller* set must collide. Sign-reversing involutions return in force in [Lesson 5.2](05-02-mobius-inversion.md), where Möbius inversion is a grand cancellation over a poset.
- **Sideways (algebra & physics):** the reflection principle of Example 2 is the same trick that counts ballot sequences and, in probability, computes hitting probabilities for random walks with a barrier (the reflection principle for Brownian motion). Involution proofs of determinant and symmetric-function identities are a staple of algebraic combinatorics — a preview of [Lesson 5.3](05-03-symmetric-functions.md).

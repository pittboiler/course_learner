# Real Analysis · Lesson 7.1: Darboux sums and integrability

> ⏱ ~15 min · Module 7: The Riemann integral · Builds on: [1.2 Suprema, infima, and completeness](01-02-suprema-infima-completeness.md) · Unlocks: [7.2 Which functions are integrable](07-02-which-functions-integrable.md)

## Why this matters

In `calc-refresher` 2.1 you learned to *feel* the integral as accumulated area and to *compute* it with antiderivatives. But "area under the curve" is a picture, not a definition — and a picture can't tell you whether a wild function even *has* an area, or prove that the Fundamental Theorem is true. This lesson turns the picture into a definition made of things you can already prove exist: suprema and infima. The reward is a single, sharp test — the ε-criterion — that decides integrability and does all the heavy lifting for the rest of the module, including 7.2's theorem that every continuous function is integrable and 7.3's proof of the FTC.

## The idea

Trap the area between two honest guesses. Chop $[a,b]$ into pieces. Over each piece, build one rectangle whose top sits at the function's **highest** value there (guaranteed too big) and another whose top sits at its **lowest** value (guaranteed too small). Add up the tall rectangles — that **over-estimate** can only exceed the true area. Add up the short ones — that **under-estimate** can only fall short. The real area, whatever it is, is pinned between them.

Now refine: cut the pieces finer. The tall rectangles come down, the short ones come up, and the gap between over- and under-estimate shrinks. If you can drive that gap all the way to zero, there's exactly one number caught in the vise — and *that* is the area, unambiguously. When you can, the function is **integrable**. When the gap refuses to close no matter how fine you cut, there is no honest single answer, and the function is **not** integrable. That's the whole story; everything below makes "highest," "lowest," and "gap goes to zero" precise.

## The formal version

Throughout, $f$ is a **bounded** function on $[a,b]$ — bounded because we're about to take a sup and inf over each piece, and those exist (by the completeness axiom of [1.2](01-02-suprema-infima-completeness.md)) precisely when $f$ is bounded.

**Partition.** A **partition** of $[a,b]$ is a finite set of cut points
$$P=\{a=x_0<x_1<\dots<x_n=b\}.$$
Write $\Delta x_i = x_i-x_{i-1}$ for the width of the $i$th piece $[x_{i-1},x_i]$.

> In words: a partition is just a choice of where to make the cuts.

**Upper and lower sums.** On the $i$th piece let
$$M_i=\sup_{[x_{i-1},x_i]} f,\qquad m_i=\inf_{[x_{i-1},x_i]} f.$$
The **upper** and **lower Darboux sums** are
$$U(f,P)=\sum_{i=1}^n M_i\,\Delta x_i,\qquad L(f,P)=\sum_{i=1}^n m_i\,\Delta x_i.$$

> In words: $U$ is the total area of the always-too-big rectangles (tops at the sup), $L$ the always-too-small ones (tops at the inf). Since $m_i\le M_i$ on every piece, $L(f,P)\le U(f,P)$ for the same $P$.

**Refinement lemma.** If $P^*\supseteq P$ (i.e. $P^*$ has all of $P$'s cut points plus more — a **refinement**), then
$$L(f,P)\le L(f,P^*)\le U(f,P^*)\le U(f,P).$$

> In words: adding cut points can only *raise* the under-estimate and *lower* the over-estimate — refining never makes your trap worse.

*Proof (the one-new-point case; the general case is this repeated).* Suppose $P^*=P\cup\{c\}$ with $c\in(x_{i-1},x_i)$. Only the $i$th piece changes; every other term of $U$ is untouched. Let $M'=\sup_{[x_{i-1},c]}f$ and $M''=\sup_{[c,x_i]}f$. A sup over a **smaller** set can't be larger, so $M'\le M_i$ and $M''\le M_i$. Hence the one term $M_i\Delta x_i=M_i(c-x_{i-1})+M_i(x_i-c)$ is replaced by
$$M'(c-x_{i-1})+M''(x_i-c)\ \le\ M_i(c-x_{i-1})+M_i(x_i-c)=M_i\,\Delta x_i,$$
so $U(f,P^*)\le U(f,P)$. The inf version is symmetric — an inf over a smaller set can't be *smaller*, so $m',m''\ge m_i$ and $L$ can only go up. The middle inequality $L(f,P^*)\le U(f,P^*)$ is just $m_i\le M_i$ piecewise. $\blacksquare$

**Every lower sum is $\le$ every upper sum.** Take *any* two partitions $P_1,P_2$ and let $P=P_1\cup P_2$ (their **common refinement** — it refines both). Then
$$L(f,P_1)\ \le\ L(f,P)\ \le\ U(f,P)\ \le\ U(f,P_2).$$

> In words: no under-estimate, from any partition, can ever exceed any over-estimate from any other. The two families of numbers don't interleave — the $L$'s all sit to the left of the $U$'s.

**Upper and lower integrals.** Define
$$\overline{\int_a^b} f=\inf_P\,U(f,P),\qquad \underline{\int_a^b} f=\sup_P\,L(f,P).$$
Because every $L$ lies below every $U$, the sup of the $L$'s lies below the inf of the $U$'s:
$$\underline{\int_a^b} f\ \le\ \overline{\int_a^b} f.$$

> In words: the best under-estimate ($\sup$ of the short-rectangle totals) never overshoots the best over-estimate ($\inf$ of the tall ones). There's always a (possibly zero-width) gap between them.

**Integrability.** $f$ is **(Darboux/Riemann) integrable** on $[a,b]$ if the gap is zero:
$$\underline{\int_a^b} f=\overline{\int_a^b} f,\quad\text{and this common value is }\int_a^b f.$$

**The ε-criterion (the workhorse).** $f$ is integrable on $[a,b]$ **if and only if** for every $\varepsilon>0$ there exists a partition $P$ with
$$U(f,P)-L(f,P)<\varepsilon.$$

> In words: integrable means you can make one single partition whose over- and under-estimates differ by as little as you like. You never compute the two integrals separately again — you just squeeze one partition's gap.

*Proof.* ($\Leftarrow$) Suppose such a $P$ exists for every $\varepsilon$. For any partition, $L(f,P)\le\underline{\int}\le\overline{\int}\le U(f,P)$ (the lower integral is a sup of $L$'s hence $\ge$ this one $L$; symmetric for the upper). Subtracting,
$$0\le\overline{\int_a^b} f-\underline{\int_a^b} f\le U(f,P)-L(f,P)<\varepsilon.$$
A nonnegative number below *every* $\varepsilon>0$ is $0$, so the integrals agree: $f$ is integrable.

($\Rightarrow$) Suppose $f$ is integrable with common value $I=\overline{\int}=\underline{\int}$, and fix $\varepsilon>0$. Since $I=\inf_P U(f,P)$, some partition $P_1$ has $U(f,P_1)<I+\tfrac\varepsilon2$ (an inf is approached from above). Since $I=\sup_P L(f,P)$, some $P_2$ has $L(f,P_2)>I-\tfrac\varepsilon2$. Let $P=P_1\cup P_2$. By the refinement lemma $U(f,P)\le U(f,P_1)$ and $L(f,P)\ge L(f,P_2)$, so
$$U(f,P)-L(f,P)\ \le\ U(f,P_1)-L(f,P_2)\ <\ \Big(I+\tfrac\varepsilon2\Big)-\Big(I-\tfrac\varepsilon2\Big)=\varepsilon.\qquad\blacksquare$$

Taking the common refinement is the move that makes both approximations good *at once* — that's why the lemma had to come first.

## Picture

![An increasing curve on [a,b] with a 4-piece partition: blue lower rectangles reach the inf on each piece, red bands on top reach the sup; the total red area is U minus L and shrinks as the partition refines](assets/07-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — computing $\int_0^1 x\,dx$ from the definition).** Take the uniform partition $x_i=i/n$, so $\Delta x_i=1/n$. On $[x_{i-1},x_i]$ the function $f(x)=x$ is increasing, so its sup is at the right end and its inf at the left:
$$M_i=\frac in,\qquad m_i=\frac{i-1}{n}.$$
Then, using $\sum_{i=1}^n i=\tfrac{n(n+1)}2$,
$$U(f,P)=\sum_{i=1}^n\frac in\cdot\frac1n=\frac1{n^2}\cdot\frac{n(n+1)}2=\frac12+\frac1{2n},\qquad L(f,P)=\frac12-\frac1{2n}.$$
So $U-L=\dfrac1n$. Given any $\varepsilon>0$, choose $n>1/\varepsilon$ (Archimedean, from [1.2](01-02-suprema-infima-completeness.md)'s neighborhood) and $U-L<\varepsilon$: the ε-criterion is met, $f$ is integrable. And the value is pinned: $U>\tfrac12>L$ for every $n$ while both squeeze to $\tfrac12$, so $\overline{\int}=\underline{\int}=\tfrac12$. Hence
$$\int_0^1 x\,dx=\frac12,$$
recovered with no antiderivative — just sup, inf, and a limit of a gap.

**Example 2 (why you'd care — a function with no area).** The **Dirichlet function** on $[0,1]$,
$$f(x)=\begin{cases}1,&x\in\mathbb{Q},\\ 0,&x\notin\mathbb{Q},\end{cases}$$
is the standard warning that not everything is integrable. Take *any* partition $P$. Every piece $[x_{i-1},x_i]$ is a genuine interval, so by density of the rationals *and* of the irrationals (Module 1) it contains both a rational and an irrational. Thus on every piece
$$M_i=\sup f=1,\qquad m_i=\inf f=0.$$
Therefore, on **every** partition,
$$U(f,P)=\sum 1\cdot\Delta x_i=1,\qquad L(f,P)=\sum 0\cdot\Delta x_i=0.$$
The over-estimate is stuck at $1$, the under-estimate stuck at $0$; refining changes nothing. So $\overline{\int_0^1}f=1\neq 0=\underline{\int_0^1}f$, and $f$ is **not** integrable. The gap can't close because the function oscillates fully within every interval, no matter how small — cardinality (1.4) meets integration: the countable rationals are dense enough to keep the sup at 1 everywhere. (7.2 will explain the deeper reason and rescue the *modified* version.)

## Watch out

- You might think you can test integrability on one clever partition, but integrability is about the **gap closing across all refinements**, not any single $P$. A fixed partition only ever gives you bounds $L\le\int\le U$; you must show you can drive $U-L$ below *every* $\varepsilon$.
- You might think any function has an upper and lower sum, but $M_i,m_i$ need $f$ **bounded** on each piece — an unbounded $f$ has $M_i=+\infty$ and the whole machine stalls. Boundedness on $[a,b]$ is a standing hypothesis, not an afterthought.
- You might think Darboux sums and the tagged Riemann sums $\sum f(t_i)\Delta x_i$ (with $t_i\in[x_{i-1},x_i]$ chosen freely) are different theories. They give the **same** integrable functions and the same value, because $m_i\le f(t_i)\le M_i$ forces every Riemann sum between $L$ and $U$. We use Darboux because sup/inf make the proofs clean — no chasing tag choices.

## One-liner

> A bounded function is integrable exactly when you can squeeze one partition's over- and under-estimate to within $\varepsilon$ — the area is whatever gets trapped as the gap closes.

## Problems

**P1 (🟢)** For $f(x)=x^2$ on $[0,1]$ with the partition $P=\{0,\tfrac12,1\}$, compute $U(f,P)$ and $L(f,P)$, and state the resulting bounds on $\int_0^1 x^2\,dx$. (You don't need the exact integral — just the trap $P$ gives.)

**P2 (🟡)** Let $f$ on $[0,1]$ be $0$ everywhere except $f(\tfrac12)=1$. Prove $f$ is integrable and $\int_0^1 f=0$. (Small idea: a single spike can only infect the one or two pieces that contain it.)

**P3 (🔴, optional)** Prove that for any bounded $f$,
$$\overline{\int_a^b} f-\underline{\int_a^b} f=\inf_P\big(U(f,P)-L(f,P)\big).$$
Then read the ε-criterion straight off this identity in one sentence.

<details>
<summary>Solutions</summary>

**P1** $f(x)=x^2$ is increasing on $[0,1]$, so on each piece the inf is at the left endpoint, the sup at the right. Pieces $[0,\tfrac12]$ and $[\tfrac12,1]$, each of width $\tfrac12$:
$$L(f,P)=\underbrace{0^2}_{\inf\,[0,1/2]}\cdot\tfrac12+\underbrace{\big(\tfrac12\big)^2}_{\inf\,[1/2,1]}\cdot\tfrac12=0+\tfrac14\cdot\tfrac12=\tfrac18,$$
$$U(f,P)=\underbrace{\big(\tfrac12\big)^2}_{\sup\,[0,1/2]}\cdot\tfrac12+\underbrace{1^2}_{\sup\,[1/2,1]}\cdot\tfrac12=\tfrac18+\tfrac12=\tfrac58.$$
So $\dfrac18\le\displaystyle\int_0^1 x^2\,dx\le\dfrac58$ (and indeed the true value $\tfrac13$ sits inside). The gap here is $U-L=\tfrac12$; refining would shrink it.

**P2** *Lower sum is always $0$.* Every piece is an interval containing points where $f=0$, so $m_i=\inf f=0$ on every piece; hence $L(f,P)=0$ for all $P$, giving $\underline{\int}=0$.

*Upper sum can be made tiny.* Use the uniform partition into $n$ pieces of width $1/n$. On a piece not containing $\tfrac12$, $f\equiv 0$ so $M_i=0$. The point $\tfrac12$ lies in at most two pieces (two only if it's a cut point), each with $M_i=1$. So
$$U(f,P)=\sum M_i\Delta x_i\le 2\cdot 1\cdot\frac1n=\frac2n.$$
Thus $U(f,P)-L(f,P)\le\tfrac2n$. Given $\varepsilon>0$, pick $n>2/\varepsilon$: the gap is $<\varepsilon$, so by the ε-criterion $f$ is integrable. And $0=\underline{\int}\le\int\le\overline{\int}\le\inf_n\tfrac2n=0$, so $\int_0^1 f=0$. A lone spike encloses no area.

**P3** Write $\overline{I}=\overline{\int}f$, $\underline{I}=\underline{\int}f$.

*($\ge$, i.e. the identity's right side is at least $\overline I-\underline I$.)* For any partition $P$, $U(f,P)\ge\inf_Q U(f,Q)=\overline I$ and $L(f,P)\le\sup_Q L(f,Q)=\underline I$. Subtracting, $U(f,P)-L(f,P)\ge\overline I-\underline I$ for every $P$, so the infimum over $P$ is also $\ge\overline I-\underline I$.

*($\le$.)* Fix $\varepsilon>0$. By definition of $\overline I$ as an inf, some $P_1$ has $U(f,P_1)<\overline I+\tfrac\varepsilon2$; by definition of $\underline I$ as a sup, some $P_2$ has $L(f,P_2)>\underline I-\tfrac\varepsilon2$. On the common refinement $P=P_1\cup P_2$ the refinement lemma gives $U(f,P)\le U(f,P_1)$ and $L(f,P)\ge L(f,P_2)$, so
$$U(f,P)-L(f,P)<\big(\overline I+\tfrac\varepsilon2\big)-\big(\underline I-\tfrac\varepsilon2\big)=\overline I-\underline I+\varepsilon.$$
Hence $\inf_P(U-L)\le\overline I-\underline I+\varepsilon$ for every $\varepsilon>0$, so $\inf_P(U-L)\le\overline I-\underline I$. The two inequalities give equality.

*Reading off the ε-criterion:* $f$ is integrable $\iff\overline I-\underline I=0\iff\inf_P(U-L)=0$, and an infimum is $0$ exactly when the quantity can be made below every $\varepsilon>0$ — which is precisely "for all $\varepsilon>0$ there is a $P$ with $U(f,P)-L(f,P)<\varepsilon$."

</details>

## Flashback

**From Lesson 1.2 (Suprema, infima — the ε-characterization of sup):** Let $A=\left\{1-\tfrac1n:n\in\mathbb{N}\right\}=\left\{0,\tfrac12,\tfrac23,\tfrac34,\dots\right\}$. Prove $\sup A=1$ using the ε-characterization: $s=\sup A$ iff (i) $s$ is an upper bound and (ii) for every $\varepsilon>0$ there is an $a\in A$ with $a>s-\varepsilon$.

<details>
<summary>Solution</summary>

**(i) $1$ is an upper bound.** For every $n\in\mathbb{N}$, $\tfrac1n>0$, so $1-\tfrac1n<1$. Thus $1\ge a$ for all $a\in A$.

**(ii) Nothing smaller works.** Fix $\varepsilon>0$. By the Archimedean property (a consequence of completeness) there is $n\in\mathbb{N}$ with $n>\tfrac1\varepsilon$, i.e. $\tfrac1n<\varepsilon$. For that $n$,
$$a=1-\tfrac1n>1-\varepsilon.$$
So no number below $1$ can be an upper bound: any candidate $1-\varepsilon$ is beaten by an element of $A$.

By (i) and (ii), $\sup A=1$. (Note $1\notin A$ — a supremum need not be attained. Contrast $\inf A=0$, which *is* attained, at $n=1$.) This is the exact move used above to argue $\inf_n\tfrac2n=0$ and $\inf_n\big(\tfrac12-\tfrac1{2n}\big)$-type limits — the ε-characterization is how a sup or inf turns into a workable inequality. $\blacksquare$

</details>

## Connections

- **Backward:** the definition is built entirely from [1.2](01-02-suprema-infima-completeness.md) — $M_i,m_i$ exist *because* bounded sets of reals have a sup and inf, and the ε-criterion is the ε-characterization of sup/inf applied to the families $\{U(f,P)\}$ and $\{L(f,P)\}$. Density from Module 1 is what breaks the Dirichlet function.
- **Forward:** [7.2](07-02-which-functions-integrable.md) feeds continuous and monotone functions straight into the ε-criterion (uniform continuity makes every $M_i-m_i$ small at once), and [7.3](07-03-fundamental-theorem-calculus.md) uses the trapped-value property $L\le\int\le U$ to prove the FTC.
- **Sideways (probability):** the Dirichlet function is integrable in the *Lebesgue* sense (its integral is $0$, since $\mathbb{Q}$ has measure zero — the countability from 1.4) but not Riemann. That failure is exactly the motivation `probability-theory` uses to replace this integral with the Lebesgue one.

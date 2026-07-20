# Real Analysis · Lesson 7.2: Which functions are integrable

> ⏱ ~15 min · Module 7: The Riemann integral · Builds on: [7.1 Darboux sums and integrability](07-01-darboux-sums-integrability.md), [5.2 Continuity on compact sets](05-02-continuity-on-compact-sets.md) · Unlocks: [7.3 The Fundamental Theorem of Calculus](07-03-fundamental-theorem-calculus.md)

## Why this matters

[7.1](07-01-darboux-sums-integrability.md) gave you a *test* for a single function: it's integrable exactly when you can shrink the gap $U-L$ between upper and lower sums below any $\varepsilon$. Useful, but you don't want to run that test by hand for every integrand you meet. This lesson cashes the test in wholesale — it names entire **classes** of functions that pass automatically (continuous ones, monotone ones), and then delivers the complete verdict: the exact line between integrable and not. The punchline is startling and precise. It's not "how discontinuous is $f$" but *how big its discontinuity set is* — and "big" turns out to mean a notion of size (measure) that a countable set, however dense, never reaches. That single idea is the doorway to the Lebesgue integral of `probability-theory`.

## The idea

Recall the whole game from [7.1](07-01-darboux-sums-integrability.md): on each piece of a partition, the upper sum uses the piece's *highest* value $M_i$ and the lower sum its *lowest* value $m_i$; the gap $U-L=\sum_i (M_i-m_i)\,\Delta x_i$ is a sum of **oscillations** $M_i-m_i$ weighted by widths. Integrable means you can make that total oscillation vanish.

So the question "which functions are integrable" is really "for which functions can I kill the oscillation by chopping finely enough?" Two clean situations do it:

- **Continuous $f$:** continuity says $f$ doesn't jump — nearby inputs give nearby outputs. Chop the domain so fine that *within each piece* the inputs are close; then the outputs are close, so $M_i-m_i$ is small on **every** piece at once. The one worry — that "how fine" might have to differ from piece to piece — is exactly what [5.2](05-02-continuity-on-compact-sets.md)'s uniform continuity rules out. This is where Heine–Cantor earns its keep.
- **Monotone $f$:** even *with* jumps, a rising function can only ever go up. Chop into $n$ equal pieces; on piece $i$ the oscillation is just the rise $f(x_i)-f(x_{i-1})$, and summed over all pieces those rises **telescope** to the total climb $f(b)-f(a)$. Multiply by the shrinking width $(b-a)/n$ and the whole gap collapses.

Then the full answer. A jump here or there is harmless — so what actually breaks integrability? Discontinuities have to be *pervasive*, and the right measure of "pervasive" is **measure zero**: a set is negligible if you can hide it under a collection of intervals whose total length is as small as you like. Continuous-except-on-a-negligible-set is exactly the boundary, and a countable set — even one dense like $\mathbb{Q}$ — is always negligible. That's why the Dirichlet function (discontinuous *everywhere*) fails while a function with jumps at every rational still integrates fine.

## The formal version

Throughout, $f:[a,b]\to\mathbb{R}$ is **bounded** (unbounded functions are outside the Riemann/Darboux definition entirely — those are the improper integrals of `calc-refresher`). Write $M_i=\sup_{[x_{i-1},x_i]}f$ and $m_i=\inf$ over the $i$th subinterval of a partition $P$; the integrability criterion from [7.1](07-01-darboux-sums-integrability.md) is: *$f$ is integrable iff for every $\varepsilon>0$ there is a partition $P$ with $U(f,P)-L(f,P)<\varepsilon$.*

**Theorem 1 (continuous $\Rightarrow$ integrable).** If $f$ is continuous on $[a,b]$, then $f$ is Riemann integrable.

> In words: every continuous function on a closed bounded interval has an integral — no exceptions, no fine print.

*Proof.* Fix $\varepsilon>0$. The interval $[a,b]$ is compact, so by **Heine–Cantor** ([5.2](05-02-continuity-on-compact-sets.md)) $f$ is not merely continuous but *uniformly* continuous: there is a single $\delta>0$ with
$$|x-y|<\delta \;\Longrightarrow\; |f(x)-f(y)|<\frac{\varepsilon}{b-a}\qquad\text{for all }x,y\in[a,b].$$
Choose any partition $P$ with mesh $<\delta$ (e.g. $n$ equal pieces with $(b-a)/n<\delta$). On each subinterval $[x_{i-1},x_i]$, $f$ is continuous on a compact set, so by the **EVT** it attains its max $M_i$ and min $m_i$ at actual points $p_i,q_i$ in that subinterval. Those two points lie within the subinterval, hence within $\delta$ of each other, so
$$M_i-m_i=f(p_i)-f(q_i)\le|f(p_i)-f(q_i)|<\frac{\varepsilon}{b-a}.$$
Therefore
$$U(f,P)-L(f,P)=\sum_{i}(M_i-m_i)\,\Delta x_i<\frac{\varepsilon}{b-a}\sum_i\Delta x_i=\frac{\varepsilon}{b-a}\,(b-a)=\varepsilon.$$
The criterion is met, so $f$ is integrable. $\blacksquare$

This is *the* place the work of [5.2](05-02-continuity-on-compact-sets.md) pays off: ordinary continuity would only give a $\delta$ that might shrink from piece to piece, and the argument "$M_i-m_i$ is small on *every* piece at once" would collapse. Uniform continuity — a free gift on a compact domain — is precisely what makes one $\delta$ tame the entire partition.

**Theorem 2 (monotone $\Rightarrow$ integrable).** If $f$ is monotone on $[a,b]$, then $f$ is Riemann integrable — even if it has (necessarily jump) discontinuities.

> In words: a function that only ever rises (or only ever falls) is integrable regardless of how many jumps it has.

*Proof.* Say $f$ is increasing (decreasing is identical). It's automatically bounded: $f(a)\le f(x)\le f(b)$. Use the uniform partition into $n$ equal pieces, each of width $\Delta x=(b-a)/n$. Because $f$ is increasing, on $[x_{i-1},x_i]$ its largest value is at the right end and smallest at the left: $M_i=f(x_i)$ and $m_i=f(x_{i-1})$. So the oscillations **telescope**:
$$U(f,P)-L(f,P)=\sum_{i=1}^{n}\big(f(x_i)-f(x_{i-1})\big)\,\Delta x=\Delta x\sum_{i=1}^{n}\big(f(x_i)-f(x_{i-1})\big)=\frac{b-a}{n}\,\big(f(b)-f(a)\big).$$
Given $\varepsilon>0$, pick $n$ with $\frac{(b-a)(f(b)-f(a))}{n}<\varepsilon$; then $U-L<\varepsilon$. $\blacksquare$

Notice what did the work: the jumps never mattered, because each subinterval's oscillation is just its share of the *total* rise, and the total rise is a fixed number $f(b)-f(a)$ that the shrinking width $\Delta x$ drives to zero.

**The complete answer — Riemann–Lebesgue criterion (stated).** First the key notion of "negligible."

**Definition (measure zero).** A set $S\subseteq\mathbb{R}$ has **measure zero** if for every $\varepsilon>0$ there exist countably many intervals $I_1,I_2,I_3,\dots$ with
$$S\subseteq\bigcup_{k}I_k \qquad\text{and}\qquad \sum_{k}|I_k|<\varepsilon,$$
where $|I_k|$ is the length of $I_k$.

> In words: no matter how small a length budget $\varepsilon$ you're given, you can cover the whole set with a bag of intervals whose lengths total less than that budget. The set takes up no room.

**Fact.** Every countable set has measure zero. *Why:* list it as $\{c_1,c_2,\dots\}$ and cover $c_k$ by an interval of length $\varepsilon/2^{k+1}$; the total is $\sum_{k\ge1}\varepsilon/2^{k+1}=\varepsilon/2<\varepsilon$. In particular $\mathbb{Q}$ has measure zero — the "countable, hence negligible" theme of [1.4](01-04-countable-and-uncountable.md) made quantitative.

**Riemann–Lebesgue criterion.** A bounded function $f:[a,b]\to\mathbb{R}$ is Riemann integrable **if and only if** its set of discontinuities has measure zero.

> In words: Riemann integrability is *exactly* "continuous except on a negligible set." Not "continuous," not "finitely many jumps" — measure zero is the true frontier.

This one theorem subsumes both of ours: a continuous function has an *empty* discontinuity set (measure zero); a monotone function has only jump discontinuities, and there are at most countably many of them (Problem 3), so again measure zero. And it settles the boundary case cleanly: the Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ (which is $1$ on rationals, $0$ on irrationals) is discontinuous at *every* point of $[0,1]$, and $[0,1]$ does **not** have measure zero — so it is not integrable, confirming the hands-on Darboux argument from [7.1](07-01-darboux-sums-integrability.md).

## Picture

![A monotone increasing curve on [a,b] with a uniform partition; each subinterval's oscillation box has height f(x_i)−f(x_{i-1}), and the boxes stack edge-to-edge into a single column of total height f(b)−f(a)](assets/07-02-fig1.svg)

On the left, the rising curve over a uniform partition: each blue box is one subinterval's oscillation, its height $M_i-m_i=f(x_i)-f(x_{i-1})$. Slide the boxes together (right) and they stack with no overlap and no gap into a single column of height $f(b)-f(a)$ — that's the telescoping. The gap $U-L$ is that fixed column height times the width $\Delta x$, and $\Delta x\to0$ as you refine. The jumps of $f$ would only make some boxes taller and others shorter; the *total* column height is still pinned at $f(b)-f(a)$.

## Worked examples

**Example 1 (mechanical — a single jump is harmless).** Let
$$f(x)=\begin{cases}0,& 0\le x<1,\\[2pt] 1,& 1\le x\le 2.\end{cases}$$
This $f$ is increasing, so Theorem 2 already declares it integrable — but let's *see* the oscillation die, because it exposes the mechanism. Partition $[0,2]$ into $n$ equal pieces of width $2/n$. On every subinterval $f$ is constant ($M_i-m_i=0$) **except** the one containing $x=1$, where $f$ leaps from $0$ to $1$, giving oscillation $M_i-m_i=1$. So
$$U(f,P)-L(f,P)=1\cdot\frac{2}{n}=\frac{2}{n}\xrightarrow[n\to\infty]{}0.$$
Only a *single* subinterval carries any gap, and its width shrinks to zero — the jump is confined to one vanishing sliver. Integrable, with $\int_0^2 f=0\cdot 1+1\cdot 1=1$. Its lone discontinuity, the set $\{1\}$, has measure zero (one point, cover it by an interval of length $\varepsilon$), so Riemann–Lebesgue agrees.

**Example 2 (why you'd care — dense discontinuities, still integrable: Thomae's function).** Define on $[0,1]$
$$f(x)=\begin{cases}\dfrac{1}{q}, & x=\dfrac{p}{q}\text{ in lowest terms }(q>0),\\[6pt] 0, & x\text{ irrational.}\end{cases}$$
This "ruler function" is discontinuous at every rational (it spikes to $1/q$ there while irrationals nearby give $0$) and *continuous at every irrational* (near an irrational, the only rationals with large spikes have small denominators and are sparse, so values stay near $0$). Its discontinuity set is exactly $\mathbb{Q}\cap[0,1]$ — countable, hence **measure zero** — so Riemann–Lebesgue promises it is integrable. And the integral is $0$:

*Lower sums are always $0$:* every subinterval contains an irrational (the irrationals are dense — [1.4](01-04-countable-and-uncountable.md)), so $m_i=0$ on each piece, giving $L(f,P)=0$ for every $P$.

*Upper sums can be made tiny:* fix $\varepsilon>0$. Only finitely many rationals in $[0,1]$ have $f(x)=1/q\ge\varepsilon/2$ (namely those with $q\le 2/\varepsilon$). Cover those finitely many points by subintervals of total width $<\varepsilon/2$; on them $f\le 1$, contributing $<\varepsilon/2$ to the upper sum. Everywhere else $f<\varepsilon/2$, contributing $<(\varepsilon/2)\cdot 1$. So $U(f,P)<\varepsilon$. Hence $\overline{\int}f=0=\underline{\int}f$ and $\int_0^1 f=0$.

Now **contrast the Dirichlet function** $\mathbf{1}_{\mathbb{Q}}$: it too has lower sums $0$ (irrationals are dense), but *every* subinterval also contains a rational, so $M_i=1$ always and $U(f,P)=1$ for every $P$. Upper and lower integrals are $1$ and $0$ — they never meet, so it is **not** integrable. The difference is entirely in the discontinuity sets: Thomae is discontinuous only on $\mathbb{Q}$ (measure zero), Dirichlet on *all* of $[0,1]$ (not measure zero). Same-looking definitions, opposite verdicts, and the Riemann–Lebesgue criterion is what tells them apart.

## Watch out

- You might think continuity is *required* for integrability, but it's only **sufficient**. Monotone-with-jumps integrates fine (Theorem 2), and Thomae's function is discontinuous on a dense set yet integrable. Continuity is a comfortable sufficient condition, not the boundary.
- You might think the rule is "finitely many discontinuities are OK." That's true but drastically undersells it — **countably many**, even a *dense* countable set like every rational, is still fine (measure zero). The real frontier is measure zero, which is far larger than "finite." Don't stop at finitely many.
- You might think a wildly discontinuous function must fail. Only if its discontinuities are *non-negligible* (positive measure). And separately: **boundedness is a standing hypothesis** — an unbounded function on $[a,b]$ isn't "non-integrable in the Riemann sense," it's simply outside the definition; you handle it with improper integrals (`calc-refresher` 2.3), a different tool.

## One-liner

> Continuous or monotone guarantees integrable, but the exact law is Riemann–Lebesgue: a bounded function integrates iff its discontinuities are a measure-zero set — so countably many jumps, even a dense sprinkle, are always forgiven.

## Problems

**P1 (🟢)** Is the floor function $f(x)=\lfloor x\rfloor$ (the greatest integer $\le x$) Riemann integrable on $[0,3]$? Name the theorem you use and check its hypotheses, then compute $\int_0^3\lfloor x\rfloor\,dx$.

**P2 (🟡)** Define $g$ on $[0,1]$ by $g(x)=0$ if $x$ is irrational and $g(x)=x$ if $x$ is rational. At which points is $g$ continuous? Using the Riemann–Lebesgue criterion, decide whether $g$ is integrable on $[0,1]$, and justify.

**P3 (🔴, optional)** (a) Prove from the definition that every countable set has measure zero. (b) Prove that an increasing function $f:[a,b]\to\mathbb{R}$ has at most **countably many** discontinuities. (Hint: at a discontinuity the jump opens a gap $(f(c^-),f(c^+))$; distinct discontinuities give disjoint gaps — slip a rational into each.) Conclude via Riemann–Lebesgue that $f$ is integrable — a second proof of Theorem 2 routed through `probability-theory`'s measure-zero idea.

<details>
<summary>Solutions</summary>

**P1** Yes. $f(x)=\lfloor x\rfloor$ is **monotone** (non-decreasing) on $[0,3]$, so **Theorem 2** applies directly — monotone functions on a closed bounded interval are integrable, jumps and all. (It's bounded, $0\le f\le 3$, and increasing; those are the only hypotheses.) Alternatively, Riemann–Lebesgue: its discontinuities are the three points $\{1,2,3\}$, a finite — hence measure-zero — set. To compute: $\lfloor x\rfloor=0$ on $[0,1)$, $=1$ on $[1,2)$, $=2$ on $[2,3)$ (and $=3$ at the single point $x=3$, which contributes nothing to the integral). So
$$\int_0^3\lfloor x\rfloor\,dx=0\cdot 1+1\cdot 1+2\cdot 1=3.$$

**P2** **Continuous only at $x=0$.** At any $c\ne 0$: pick a sequence of irrationals $x_n\to c$, along which $g(x_n)=0\to 0$; and a sequence of rationals $r_n\to c$, along which $g(r_n)=r_n\to c\ne 0$. The two sequential limits disagree, so $g$ is discontinuous at $c$. At $c=0$: for any $x$, $|g(x)-g(0)|=|g(x)|\le|x|$ (it's either $0$ or $x$), which $\to 0$ as $x\to 0$ — so $g$ is continuous at $0$.

Thus the discontinuity set is $(0,1]$ (every point except $0$). This set does **not** have measure zero — it's an interval of length $1$, and any cover of it has total length $\ge 1$, so you can never get the total below, say, $\varepsilon=\tfrac12$. By the **Riemann–Lebesgue criterion**, $g$ is **not** integrable on $[0,1]$. (Sanity check via Darboux: every subinterval holds an irrational, so $m_i=0$ and $L=0$; every subinterval holds a rational $r$ with $g(r)=r$ near the right end, so upper sums stay bounded away from $0$ — the integrals don't meet.)

**P3** **(a)** Let $S=\{c_1,c_2,c_3,\dots\}$ be countable and fix $\varepsilon>0$. Cover $c_k$ by the open interval $I_k=\left(c_k-\tfrac{\varepsilon}{2^{k+2}},\,c_k+\tfrac{\varepsilon}{2^{k+2}}\right)$, of length $|I_k|=\varepsilon/2^{k+1}$. Then $S\subseteq\bigcup_k I_k$ and
$$\sum_{k\ge1}|I_k|=\sum_{k\ge1}\frac{\varepsilon}{2^{k+1}}=\frac{\varepsilon}{2}<\varepsilon.$$
Since $\varepsilon$ was arbitrary, $S$ has measure zero. $\blacksquare$

**(b)** Let $f$ be increasing. For an increasing function the one-sided limits $f(c^-)=\sup_{x<c}f(x)$ and $f(c^+)=\inf_{x>c}f(x)$ always exist, with $f(c^-)\le f(c^+)$, and $f$ is discontinuous at $c$ **iff** the jump is strict: $f(c^-)<f(c^+)$. At each discontinuity $c$, the open interval $J_c=\big(f(c^-),f(c^+)\big)$ is nonempty. If $c<c'$ are two discontinuities, monotonicity gives $f(c^+)\le f(c'^-)$, so $J_c$ and $J_{c'}$ are **disjoint**. By density of $\mathbb{Q}$ ([1.4](01-04-countable-and-uncountable.md) / consequences of completeness), each $J_c$ contains a rational $r_c$; because the $J_c$ are disjoint, distinct discontinuities get distinct rationals, so $c\mapsto r_c$ is an **injection** from the set of discontinuities into $\mathbb{Q}$. Hence there are at most countably many discontinuities.

By part (a) that countable set has measure zero, and $f$ is bounded ($f(a)\le f\le f(b)$), so the **Riemann–Lebesgue criterion** gives integrability — a second proof of Theorem 2, this time through the measure-zero machinery that `probability-theory` promotes into the full Lebesgue theory. $\blacksquare$

</details>

## Flashback

**From Lesson 5.2 (Continuity on compact sets — uniform continuity):** Show that $f(x)=\sin\!\big(\tfrac1x\big)$ is continuous on $(0,1]$ but **not** uniformly continuous there. (Hint: it's bounded, so this isn't a blow-up — find two sequences that get arbitrarily close while their outputs stay far apart.)

<details>
<summary>Solution</summary>

$f$ is continuous on $(0,1]$ as a composition of continuous functions ($x\mapsto 1/x$ is continuous where $x\ne0$, and $\sin$ is continuous). For the failure of uniform continuity, exploit that $1/x\to\infty$ as $x\to0^+$, so $\sin(1/x)$ oscillates between $-1$ and $1$ infinitely often. Pick the inputs where it hits the extremes:
$$x_n=\frac{1}{2\pi n+\tfrac{\pi}{2}}\quad(\sin(1/x_n)=+1),\qquad y_n=\frac{1}{2\pi n-\tfrac{\pi}{2}}\quad(\sin(1/y_n)=-1).$$
Both lie in $(0,1]$ for $n\ge1$ and both $\to 0$, so
$$|x_n-y_n|=\frac{\pi}{\left(2\pi n+\tfrac\pi2\right)\left(2\pi n-\tfrac\pi2\right)}=O\!\left(\frac{1}{n^2}\right)\to 0,$$
yet
$$|f(x_n)-f(y_n)|=|1-(-1)|=2\ \not\to 0.$$
Take $\varepsilon_0=2$: no $\delta$ can work, since for every $n$ we have inputs closer than any given $\delta$ (eventually $|x_n-y_n|<\delta$) whose outputs differ by $2\ge\varepsilon_0$. So $f$ is not uniformly continuous on $(0,1]$. The reason is exactly [5.2](05-02-continuity-on-compact-sets.md)'s: $(0,1]$ is **not compact** (missing the endpoint $0$), the trouble piles up at that missing point, and Heine–Cantor's guarantee doesn't reach it. $\blacksquare$

</details>

## Connections

- **Backward:** this lesson is [7.1](07-01-darboux-sums-integrability.md)'s $\varepsilon$-criterion applied wholesale — every proof here is "make $U-L<\varepsilon$," just done once per class instead of once per function. Theorem 1 runs on the **uniform continuity** of [5.2](05-02-continuity-on-compact-sets.md) (the EVT there also supplies the attained $M_i,m_i$), and the measure-zero discussion is the quantitative face of "$\mathbb{Q}$ is countable, hence negligible" from [1.4](01-04-countable-and-uncountable.md).
- **Forward:** [7.3](07-03-fundamental-theorem-calculus.md) needs Theorem 1 immediately — the FTC differentiates $x\mapsto\int_a^x f$, which only makes sense once you know continuous $f$ is integrable so that accumulation function exists. Module 8's swapping of limits with integrals rests on the same "uniform control kills the total error" pattern seen in Theorem 1's proof.
- **Sideways (measure theory / probability):** *measure zero* is the seed of the entire Lebesgue theory. `probability-theory` builds outward from it — "a property holds almost everywhere" means "off a measure-zero set" — and the Lebesgue integral is precisely the upgrade that lets even the Dirichlet function be integrated (its integral is $0$, because $\mathbb{Q}$ has measure zero) by measuring the *range* instead of chopping the *domain*. Riemann–Lebesgue is the exact hinge between the two theories: it says the Riemann integral already works up to, but not past, the measure-zero boundary.

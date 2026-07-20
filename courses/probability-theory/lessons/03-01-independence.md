# Probability Theory · Lesson 3.1: Independence

> ⏱ ~15 min · Module 3: Independence and sums · Builds on: [2.2 Distributions, CDFs, and pushforward](02-02-distributions-and-cdfs.md), Module 2 · Unlocks: [3.2 Product measures and Fubini](03-02-product-measures-fubini.md)

## Why this matters

Every limit theorem you're marching toward — the law of large numbers, the central limit theorem — is a statement about *many* random variables, and every one of them needs the same load-bearing hypothesis: **independence**. It's the assumption that lets errors cancel, variances add, and averages concentrate. Without it, a sum of a million measurements can be as wild as a single one. The refresher used "independent" to mean "one doesn't affect the other," which is fine for coins but useless for proofs. Here we forge it into a precise, checkable, measure-theoretic condition — a multiplication rule — that you can actually verify and manipulate.

## The idea

Independence means **knowing one thing tells you nothing about the other**. If I tell you the first die came up even, and that leaves your beliefs about the second die *exactly* where they were, the two are independent.

The clean way to encode "no information flows" turns out to be arithmetic: probabilities **multiply**. If $A$ and $B$ carry no information about each other, then the fraction of $B$-outcomes that also land in $A$ is just $\mathbb P(A)$ — the same fraction as in the whole space. Rearranged, that says $\mathbb P(A\cap B)=\mathbb P(A)\,\mathbb P(B)$. Picture the sample space as a unit square: $A$ is a vertical column of width $\mathbb P(A)$, $B$ a horizontal band of height $\mathbb P(B)$, and independence is exactly the statement that their overlap is a clean rectangle — area equals width times height, no correlation warping the shape.

The whole lesson is this one rule, lifted up a ladder: first for two events, then for a whole *family* of events, then for entire σ-algebras, and finally for random variables (which just carry their own σ-algebras). One idea, four altitudes.

## The formal version

Throughout, fix a probability space $(\Omega,\mathcal F,\mathbb P)$.

**Independent events.** Events $A,B\in\mathcal F$ are **independent** if
$$\mathbb P(A\cap B)=\mathbb P(A)\,\mathbb P(B).$$
> In words: the chance both happen is the product of the separate chances — no discount, no premium.

**A family of events.** Events $\{A_i\}_{i\in I}$ are **(mutually) independent** if for *every* finite subset $\{i_1,\dots,i_n\}\subseteq I$,
$$\mathbb P\!\left(A_{i_1}\cap\cdots\cap A_{i_n}\right)=\prod_{k=1}^{n}\mathbb P(A_{i_k}).$$
> In words: every finite sub-collection multiplies — and *every* is not negotiable, as the coin/XOR picture below will show.

**Independent σ-algebras.** Sub-σ-algebras $\mathcal G_1,\mathcal G_2,\dots\subseteq\mathcal F$ are **independent** if for every finite choice $G_{i}\in\mathcal G_{i}$ (one event drawn from each of finitely many of them),
$$\mathbb P\!\left(\bigcap_i G_i\right)=\prod_i \mathbb P(G_i).$$
> In words: pick *any* event from each σ-algebra and they multiply — so no event describable by one can nudge the odds of an event describable by another.

**Independent random variables.** Random variables $X,Y$ are **independent** if the σ-algebras they generate, $\sigma(X)$ and $\sigma(Y)$, are independent. Unwinding the definition of $\sigma(X)=\{X^{-1}(A):A\in\mathcal B(\mathbb R)\}$ (from [2.1](02-01-random-variables-measurability.md)), this says
$$\mathbb P(X\in A,\ Y\in B)=\mathbb P(X\in A)\,\mathbb P(Y\in B)\qquad\text{for all Borel }A,B.$$
> In words: no measurable question about $X$ constrains any measurable question about $Y$.

**Three equivalent tests for random variables.** $X\perp Y$ iff *any one* of these holds:

1. $\mathbb P(X\in A,\ Y\in B)=\mathbb P(X\in A)\,\mathbb P(Y\in B)$ for all Borel $A,B$;
2. the joint CDF factors: $F_{X,Y}(x,y)=F_X(x)\,F_Y(y)$ for all $x,y\in\mathbb R$;
3. when a joint density exists, it factors: $f_{X,Y}(x,y)=f_X(x)\,f_Y(y)$ (almost everywhere).

That (2) — checking only half-lines — suffices is not obvious; it's the next result.

**The π-system shortcut.** A **π-system** is a collection of sets closed under finite intersection. The Dynkin π–λ uniqueness theorem from [1.2](01-02-sigma-algebras.md) says a probability statement that holds on a generating π-system holds on the whole σ-algebra it generates. Applied here:

> **Proposition.** If $\mathcal P_1,\mathcal P_2$ are π-systems with $\sigma(\mathcal P_1)=\mathcal G_1$, $\sigma(\mathcal P_2)=\mathcal G_2$, and $\mathbb P(P_1\cap P_2)=\mathbb P(P_1)\mathbb P(P_2)$ for all $P_1\in\mathcal P_1,\ P_2\in\mathcal P_2$, then $\mathcal G_1$ and $\mathcal G_2$ are independent.

> In words: to prove independence you only check the multiplication rule on *generators*, never on all Borel sets.

Since the half-lines $\{X\le x\}$ form a π-system generating $\sigma(X)$, factoring the joint CDF (test 2) is enough — you get independence on *all* Borel sets for free. *Sketch:* fix $P_1\in\mathcal P_1$ with $\mathbb P(P_1)>0$; the collection $\{B\in\mathcal G_2:\mathbb P(P_1\cap B)=\mathbb P(P_1)\mathbb P(B)\}$ contains the π-system $\mathcal P_2$ and is a λ-system (closed under complements and increasing unions — check via continuity of measure from [1.3](01-03-measures-probability-spaces.md)), so by Dynkin it is all of $\mathcal G_2$; then swap the roles and repeat for $\mathcal G_1$. $\blacksquare$

**Independence ⟹ uncorrelated.** This is the property that powers "variances add."

> **Theorem.** If $X\perp Y$ and both are integrable ($X,Y\in L^1$), then $XY\in L^1$ and
> $$\mathbb E[XY]=\mathbb E[X]\,\mathbb E[Y],\qquad\text{equivalently }\ \operatorname{Cov}(X,Y):=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]=0.$$

*Proof for indicators and simple functions* (the general case follows by approximation via Fubini in [3.2](03-02-product-measures-fubini.md)). For indicators $X=\mathbf 1_A$, $Y=\mathbf 1_B$ with $A\in\sigma(X)$, $B\in\sigma(Y)$: $XY=\mathbf 1_{A\cap B}$, so
$$\mathbb E[XY]=\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)=\mathbb E[X]\mathbb E[Y],$$
using independence in the middle step. Now for simple functions $X=\sum_i a_i\mathbf 1_{A_i}$, $Y=\sum_j b_j\mathbf 1_{B_j}$ with $A_i\in\sigma(X)$ and $B_j\in\sigma(Y)$, independence of the σ-algebras gives $\mathbb P(A_i\cap B_j)=\mathbb P(A_i)\mathbb P(B_j)$, so
$$\mathbb E[XY]=\sum_{i,j}a_ib_j\,\mathbb P(A_i\cap B_j)=\sum_{i,j}a_ib_j\,\mathbb P(A_i)\mathbb P(B_j)=\Big(\sum_i a_i\mathbb P(A_i)\Big)\Big(\sum_j b_j\mathbb P(B_j)\Big)=\mathbb E[X]\mathbb E[Y].\ \blacksquare$$

> In words: independent variables can't co-move, so the expectation of their product splits — but read the next section before you believe the converse.

## Picture

![Left: a unit square where event A is a column of width P(A) and event B a band of height P(B), their overlap a clean P(A)-by-P(B) rectangle. Right: two fair coins and their XOR arranged in a 2-by-2 outcome grid, showing every pair of events is independent while the three together are not.](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — pairwise is not enough).** Flip two fair coins; $\Omega=\{HH,HT,TH,TT\}$, each outcome probability $\tfrac14$. Define
$$A=\{\text{coin 1 is } H\},\quad B=\{\text{coin 2 is }H\},\quad C=\{\text{the coins differ}\}=A\oplus B.$$
Each has probability $\tfrac12$. Check the three pairs:
$$\mathbb P(A\cap B)=\mathbb P(HH)=\tfrac14=\tfrac12\cdot\tfrac12,\quad \mathbb P(A\cap C)=\mathbb P(HT)=\tfrac14,\quad \mathbb P(B\cap C)=\mathbb P(TH)=\tfrac14.$$
All three pairs multiply — the events are **pairwise independent**. But the triple fails:
$$A\cap B\cap C=\{HH\}\cap C=\varnothing,\quad\mathbb P(A\cap B\cap C)=0\neq \tfrac18=\mathbb P(A)\mathbb P(B)\mathbb P(C).$$
And of course it must fail: once you know $A$ (coin 1 is $H$) and $B$ (coin 2 is $H$), you know $C$ is *false* with certainty — the third variable is a puppet of the first two. Pairwise independence is a strictly weaker condition than mutual independence.

**Example 2 (why you'd care — uncorrelated but dependent).** Let $X$ be uniform on $\{-1,0,1\}$ (each value probability $\tfrac13$) and set $Y=X^2$. Then $X$ is symmetric, so $\mathbb E[X]=0$, and
$$\mathbb E[XY]=\mathbb E[X\cdot X^2]=\mathbb E[X^3]=\tfrac13(-1)+\tfrac13(0)+\tfrac13(1)=0=\mathbb E[X]\,\mathbb E[Y].$$
So $\operatorname{Cov}(X,Y)=0$: $X$ and $Y$ are **uncorrelated**. Yet $Y$ is a *deterministic function of* $X$ — as dependent as two variables can be. Concretely,
$$\mathbb P(X=0,\ Y=0)=\mathbb P(X=0)=\tfrac13,\qquad\text{but}\qquad \mathbb P(X=0)\,\mathbb P(Y=0)=\tfrac13\cdot\tfrac13=\tfrac19\neq\tfrac13.$$
The multiplication rule breaks, so $X\not\perp Y$. **Zero covariance is not independence.** This gap is exactly why "no correlation" between two assets or two error terms does not license you to treat them as independent — a lesson mispriced risk keeps re-teaching.

## Watch out

- **Independent ⟹ uncorrelated, but not conversely.** $\operatorname{Cov}(X,Y)=0$ only kills *linear* co-movement; independence kills *all* dependence. Example 2 ($X,X^2$) is the canonical counterexample — memorize it. The one place they coincide: jointly Gaussian variables, where uncorrelated *does* imply independent (a special fact, not a general one).
- **Pairwise ≠ mutual.** Checking events two at a time is not enough; the definition demands *every* finite subcollection multiply. Example 1's coin/XOR triple passes all pairs and fails as a trio.
- **"$\mathbb E[XY]=\mathbb E[X]\mathbb E[Y]$" is weaker than independence.** Independence gives $\mathbb E[g(X)h(Y)]=\mathbb E[g(X)]\mathbb E[h(Y)]$ for *all* bounded Borel $g,h$ at once — a whole family of factorizations. A single factorization at $g=h=\mathrm{id}$ is just uncorrelatedness.
- **Independence is a property of the JOINT law, not the marginals.** Two experiments with identical marginal distributions for $X$ and for $Y$ can have completely different dependence — same $F_X$, same $F_Y$, but wildly different $F_{X,Y}$. You cannot read independence off the marginals; you must see how they're glued.

## One-liner

> Independence is one multiplication rule — $\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)$ — lifted from events to σ-algebras to random variables, checkable on generators alone, and strictly stronger than "zero covariance."

## Problems

**P1 (🟢)** Roll two fair dice. Let $A=\{\text{first die is even}\}$ and $B=\{\text{the sum is }7\}$. Are $A$ and $B$ independent? Decide by computing $\mathbb P(A)$, $\mathbb P(B)$, and $\mathbb P(A\cap B)$ and comparing.

**P2 (🟡)** Show that if $A$ and $B$ are independent, then so are $A$ and $B^c$. (Then it follows, by applying this twice, that $A^c$ and $B^c$ are independent too.)

**P3 (🔴, optional)** Let $X\perp Y$ and let $g,h:\mathbb R\to\mathbb R$ be Borel measurable. Prove that $g(X)$ and $h(Y)$ are independent. (Hint: work at the level of σ-algebras — what is the relationship between $\sigma(g(X))$ and $\sigma(X)$?)

<details>
<summary>Solutions</summary>

**P1** Of the 36 equally likely ordered outcomes: $\mathbb P(A)=\tfrac{18}{36}=\tfrac12$ (first die $\in\{2,4,6\}$). The sum is $7$ on $\{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}$, so $\mathbb P(B)=\tfrac{6}{36}=\tfrac16$. For $A\cap B$, keep the sum-$7$ pairs whose first die is even: $(2,5),(4,3),(6,1)$ — three of them — so $\mathbb P(A\cap B)=\tfrac{3}{36}=\tfrac{1}{12}$. Compare: $\mathbb P(A)\mathbb P(B)=\tfrac12\cdot\tfrac16=\tfrac{1}{12}$. They match, so **$A$ and $B$ are independent**. (Nice intuition: conditioned on any fixed value of the first die, the second die still needs one specific value to make $7$, always probability $\tfrac16$ — the first die carries no information about $B$.)

**P2** Split $A$ by whether $B$ occurs: $A=(A\cap B)\cup(A\cap B^c)$, a disjoint union, so $\mathbb P(A)=\mathbb P(A\cap B)+\mathbb P(A\cap B^c)$. Hence
$$\mathbb P(A\cap B^c)=\mathbb P(A)-\mathbb P(A\cap B)=\mathbb P(A)-\mathbb P(A)\mathbb P(B)=\mathbb P(A)\big(1-\mathbb P(B)\big)=\mathbb P(A)\,\mathbb P(B^c),$$
using independence of $A,B$ in the second step. So $A$ and $B^c$ are independent. Applying the same result with the roles of "$A$" and "$B^c$" reversed shows $A^c$ and $B^c$ are independent. (This is the σ-algebra picture in miniature: $\sigma(\mathbf 1_A)=\{\varnothing,A,A^c,\Omega\}$, and independence of the *events* forces independence of these tiny σ-algebras, complements and all.)

**P3** Recall $\sigma(g(X))=\{(g\circ X)^{-1}(B):B\in\mathcal B(\mathbb R)\}$. For any Borel $B$, $(g\circ X)^{-1}(B)=X^{-1}(g^{-1}(B))$, and $g^{-1}(B)\in\mathcal B(\mathbb R)$ because $g$ is Borel measurable. Therefore every set in $\sigma(g(X))$ has the form $X^{-1}(\text{Borel})$, i.e.
$$\sigma(g(X))\subseteq\sigma(X),\qquad\text{and likewise}\qquad \sigma(h(Y))\subseteq\sigma(Y).$$
Now take any $G\in\sigma(g(X))$ and $H\in\sigma(h(Y))$. Since $G\in\sigma(X)$ and $H\in\sigma(Y)$ and these two σ-algebras are independent (that's what $X\perp Y$ means), $\mathbb P(G\cap H)=\mathbb P(G)\mathbb P(H)$. As $G,H$ were arbitrary, $\sigma(g(X))$ and $\sigma(h(Y))$ are independent — i.e. $g(X)\perp h(Y)$. $\blacksquare$ (Moral: independence is inherited by *any* measurable processing of each variable separately — squaring, thresholding, smoothing — because processing only *shrinks* the σ-algebra it lives in.)

</details>

## Flashback

**From Lesson 2.2 (Distributions and CDFs):** A random variable $X$ has CDF
$$F(x)=\begin{cases} 0, & x<0,\\[2pt] x/3, & 0\le x<1,\\[2pt] 2/3, & 1\le x<2,\\[2pt] 2/3+(x-2)/3, & 2\le x<3,\\[2pt] 1, & x\ge 3. \end{cases}$$
(a) Find the atom of the distribution and its mass, i.e. compute $\mathbb P(X=1)$. (b) Compute $\mathbb P(1<X\le 3)$.

<details>
<summary>Solution</summary>

Recall from [2.2](02-02-distributions-and-cdfs.md) that $F$ is right-continuous and nondecreasing, that $\mathbb P(a<X\le b)=F(b)-F(a)$, and that an **atom** at $c$ (a point of positive probability) shows up as a *jump*, with $\mathbb P(X=c)=F(c)-F(c^-)$ where $F(c^-)=\lim_{x\uparrow c}F(x)$.

**(a)** Approaching $1$ from below along the branch $x/3$ gives $F(1^-)=1/3$, while the value at $1$ is $F(1)=2/3$. So there is a jump — an atom — at $x=1$ of mass
$$\mathbb P(X=1)=F(1)-F(1^-)=\tfrac23-\tfrac13=\tfrac13.$$
(This is the only jump: $F$ is continuous everywhere else, so all other mass is spread out with density $F'(x)=\tfrac13$ on $(0,1)$ and on $(2,3)$.)

**(b)** Directly from the interval formula,
$$\mathbb P(1<X\le 3)=F(3)-F(1)=1-\tfrac23=\tfrac13.$$
Note this *excludes* the atom at $1$ (the interval is open at the left). Had we asked for $\mathbb P(1\le X\le 3)=F(3)-F(1^-)=1-\tfrac13=\tfrac23$, we'd have picked the atom back up — the $\tfrac13$ difference is exactly $\mathbb P(X=1)$.

</details>

## Connections

- **Backward:** independence is defined *through* the σ-algebras $\sigma(X)$ from [2.1](02-01-random-variables-measurability.md) and verified *through* the CDF and its jump/interval calculus from [2.2](02-02-distributions-and-cdfs.md); the π-system shortcut is the Dynkin uniqueness engine from [1.2](01-02-sigma-algebras.md) doing real work.
- **Forward:** [3.2](03-02-product-measures-fubini.md) builds the product space $(\Omega_1\times\Omega_2,\ \mathcal F_1\otimes\mathcal F_2,\ \mathbb P_1\otimes\mathbb P_2)$ where independent variables *live*, and uses Fubini to upgrade today's $\mathbb E[XY]=\mathbb E[X]\mathbb E[Y]$ from simple functions to all of $L^1$. From there "variances add" (Boss problem 3) and the whole limit-theorem machinery of Module 4 unrolls.
- **Sideways:** the same factorization is the *definition* of a product density in statistics (likelihoods multiply over an i.i.d. sample), and the failure mode in Example 2 — zero correlation without independence — is the standard cautionary tale in econometrics and portfolio risk, where jointly-Gaussian intuition (uncorrelated ⟹ independent) is quietly and wrongly assumed.

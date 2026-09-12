# Complexity Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course sorts problems by the resources they demand: time, space, randomness,
counting, interaction, and non-uniform hardware. Mid-problem, the two things you
will most often want are **a definition stated precisely** (the classes differ by
one quantifier or one error-profile entry, and the difference is the content) and
**which containments are actually known** — almost none are strict, and the card
says which. Everything else here is the machinery for placing a problem and for
checking that a reduction preserves what you need it to preserve.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathrm{TIME}(f)$ | problems a deterministic machine decides within $O(f)$ steps | [1.1](lessons/01-01-time-the-model-and-p.md) |
| $\mathrm{NTIME}(f)$ | the same for a nondeterministic machine, every branch inside the bound | [1.2](lessons/01-02-np-ntime-and-nondeterministic-time.md) |
| $\mathrm{SPACE}(f)$, $\mathrm{NSPACE}(f)$ | the same measured in work-tape cells, input tape not charged | [2.3](lessons/02-03-space-as-a-resource-and-savitch.md) |
| $\le_p$ | polynomial-time many-one (Karp) reduction | [1.3](lessons/01-03-the-hierarchy-theorems.md) |
| $\le_{\mathsf{L}}$ | logspace reduction — needed whenever the class is inside $\mathsf{P}$ | [2.5](lessons/02-05-l-nl-and-nl-completeness.md) |
| $\le_L$ (L-reduction) | approximation-preserving reduction; note the clash with $\le_{\mathsf{L}}$ | [5.4](lessons/05-04-approximation-as-a-class-apx-and-max-3sat.md) |
| $\Sigma_k^p$, $\Pi_k^p$ | $k$ quantifier alternations starting with $\exists$, resp. $\forall$ | [2.2](lessons/02-02-the-polynomial-hierarchy.md) |
| $\#\mathsf{P}$ | counting the certificates instead of asking whether one exists | [3.1](lessons/03-01-sharp-p-counting-is-harder-than-deciding.md) |
| $\oplus\mathsf{P}$ | deciding whether that count is odd | [3.3](lessons/03-03-todas-theorem-and-approximate-counting.md) |
| $\mathsf{C}^{A}$ | class $\mathsf{C}$ with a free one-step oracle for the language $A$ | [2.2](lessons/02-02-the-polynomial-hierarchy.md), [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md) |
| $\mathsf{C}/f(n)$ | class $\mathsf{C}$ with $f(n)$ bits of advice depending only on input length | [5.1](lessons/05-01-boolean-circuits-and-p-poly.md) |
| $\mathrm{per}\,M$ | permanent: the determinant without the signs | [3.1](lessons/03-01-sharp-p-counting-is-harder-than-deciding.md) |
| $\tilde\varphi$ | the arithmetization of $\varphi$ — a polynomial agreeing with it on $\{0,1\}^n$ | [4.4](lessons/04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) |
| $s_k$ | the infimum of $\delta$ with $k$-SAT solvable in $2^{\delta n}$ time | [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md) |

## Definitions

### Running time

The worst input of each length decides the cost.

$$t_M(n) = \max\{\,\text{steps } M \text{ takes on } w : |w| = n\,\}$$

*Introduced:* [1.1](lessons/01-01-time-the-model-and-p.md)

### Time and space classes

The problems decidable within a resource bound, always up to a constant factor.

$$\mathrm{TIME}(t) = \{A : \text{some deterministic multitape TM decides } A \text{ in } O(t) \text{ steps}\}$$

$\mathrm{SPACE}(s)$ is the same counting **work-tape cells only**, with a read-only input tape — the convention without which $\mathsf{L}$ would be empty.

*Introduced:* [1.1](lessons/01-01-time-the-model-and-p.md), [2.3](lessons/02-03-space-as-a-resource-and-savitch.md)

### The class P

Decidable in time bounded by some fixed power of the input length; which power is not part of the definition.

$$\mathsf{P} = \bigcup_{k\ge1}\mathrm{TIME}(n^k)$$

*Introduced:* [1.1](lessons/01-01-time-the-model-and-p.md)

### NTIME

A guessing machine decides $A$ in time $t$ when **every** branch halts within $t$ and some branch accepts exactly on the yes-instances.

$$\mathsf{NP} = \bigcup_{k\ge1}\mathrm{NTIME}(n^k)$$

*Introduced:* [1.2](lessons/01-02-np-ntime-and-nondeterministic-time.md)

### Verifier and certificate

A short string that a fast deterministic checker accepts alongside the input.

$$w\in A \iff \exists c,\ |c|\le p(|w|),\ V(\langle w,c\rangle) = \text{accept}$$

*Introduced:* [1.2](lessons/01-02-np-ntime-and-nondeterministic-time.md)

### Constructible functions

The machine can compute its own budget within that budget — the condition without which the hierarchy theorems are false.

$f$ is **time-constructible** if $1^n\mapsto\langle f(n)\rangle$ is computable in $O(f(n))$ time; **space-constructible** if in $O(f(n))$ space.

*Introduced:* [1.3](lessons/01-03-the-hierarchy-theorems.md)

### coNP

The complements of NP languages — the class whose **no**-instances have short certificates.

$$\mathsf{coNP} = \{\overline A : A\in\mathsf{NP}\}, \qquad w\in A \iff \forall c,\ |c|\le p(|w|),\ V(\langle w,c\rangle) = \text{accept}$$

Not "the languages outside NP": $\mathsf{P}$ lies in both.

*Introduced:* [2.1](lessons/02-01-conp-and-the-shape-of-np.md)

### Polynomial hierarchy

One level per switch between $\exists$ and $\forall$; consecutive like quantifiers merge and cost nothing.

$$x\in A \iff \exists y_1\forall y_2\cdots Q_k y_k\ V(x,y_1,\dots,y_k) \quad\text{defines } \Sigma_k^p, \qquad \mathsf{PH} = \bigcup_k \Sigma_k^p$$

*Introduced:* [2.2](lessons/02-02-the-polynomial-hierarchy.md)

### PH oracle definition

Each level is the previous one handed to a nondeterministic machine as a free subroutine.

$$\Sigma_{k+1}^p = \mathsf{NP}^{\Sigma_k^p}$$

*Introduced:* [2.2](lessons/02-02-the-polynomial-hierarchy.md)

### Configuration graph

Everything needed to resume the machine, with an edge per legal move — so acceptance becomes reachability.

A machine using $s(n)\ge\log n$ work cells has at most $|Q|\,n\,s\,|\Gamma|^{s} = 2^{O(s)}$ configurations.

*Introduced:* [2.3](lessons/02-03-space-as-a-resource-and-savitch.md)

### TQBF

A Boolean formula with every variable quantified, so it is simply true or false — equivalently, a game with a designated winner.

$$\text{TQBF} = \{\langle Q_1x_1\cdots Q_nx_n\,\varphi\rangle : \text{the formula is true}\}$$

*Introduced:* [2.4](lessons/02-04-tqbf-and-pspace-completeness.md)

### PSPACE completeness

Hardest within polynomial space, under **polynomial-time** reductions — a polynomial-space reduction could solve the problem itself.

$B$ is PSPACE-complete if $B\in\mathsf{PSPACE}$ and $A\le_p B$ for all $A\in\mathsf{PSPACE}$.

*Introduced:* [2.4](lessons/02-04-tqbf-and-pspace-completeness.md)

### L and NL

Logarithmic work space is a constant number of pointers into the input, and nothing else.

$$\mathsf{L} = \mathrm{SPACE}(\log n), \qquad \mathsf{NL} = \mathrm{NSPACE}(\log n)$$

*Introduced:* [2.5](lessons/02-05-l-nl-and-nl-completeness.md)

### Logspace reduction

A reduction computed in logarithmic work space, writing to a **write-only** output tape it can never read back.

$$A\le_{\mathsf{L}} B \iff \exists f \text{ logspace-computable with } x\in A \iff f(x)\in B$$

Required for NL- and P-completeness, because polynomial-time reductions are stronger than those classes.

*Introduced:* [2.5](lessons/02-05-l-nl-and-nl-completeness.md)

### Sharp P

Count the accepting certificates instead of asking whether one exists — a class of **functions**, not languages.

$$g(x) = \big|\{y : |y|\le p(|x|),\ V(x,y)=1\}\big|$$

The value has polynomially many bits even when astronomically large.

*Introduced:* [3.1](lessons/03-01-sharp-p-counting-is-harder-than-deciding.md)

### Permanent

The determinant with the signs removed — and therefore with no cancellation to exploit.

$$\mathrm{per}\,M = \sum_{\sigma\in S_n}\prod_{i=1}^n M_{i,\sigma(i)}$$

*Introduced:* [3.1](lessons/03-01-sharp-p-counting-is-harder-than-deciding.md)

### Parsimonious reduction

A reduction that preserves the **number** of solutions, not merely whether one exists.

$$\#A(x) = \#B(f(x)) \quad\text{(parsimonious)}, \qquad \#A(x) = h\big(x,\#B(f(x))\big) \quad\text{(weakly)}$$

*Introduced:* [3.2](lessons/03-02-sharp-p-completeness-and-parsimonious-reductions.md)

### Sharp P completeness

Hardness for a function class uses **Turing** reductions, which is what lets weakly parsimonious maps count.

$g$ is $\#\mathsf{P}$-hard if every $\#\mathsf{P}$ function is polynomial-time computable with an oracle for $g$.

*Introduced:* [3.2](lessons/03-02-sharp-p-completeness-and-parsimonious-reductions.md)

### Parity P

One bit of the count — and, with randomness, enough to encode the whole hierarchy.

$$A\in\oplus\mathsf{P} \iff \text{the number of accepting branches is odd}$$

*Introduced:* [3.3](lessons/03-03-todas-theorem-and-approximate-counting.md)

### FPRAS

A multiplicative approximation to a count, in time polynomial in the input **and** in $1/\varepsilon$.

$$\Pr\big[(1-\varepsilon)g(x)\le X\le(1+\varepsilon)g(x)\big]\ge\tfrac34$$

*Introduced:* [3.3](lessons/03-03-todas-theorem-and-approximate-counting.md)

### Probabilistic Turing machine

A deterministic machine $M(x,r)$ with an extra uniformly random input $r$; all probabilities are over $r$.

Compare nondeterminism: NP accepts if **some** $r$ works, $\mathsf{BPP}$ if **most** do.

*Introduced:* [4.1](lessons/04-01-randomness-as-a-resource.md)

### Randomized classes

The classes differ only in which side may be wrong, not in how often.

| class | on $x\in A$ | on $x\notin A$ |
|---|---|---|
| $\mathsf{RP}$ | accepts w.p. $\ge1/2$ | never accepts |
| $\mathsf{coRP}$ | always accepts | accepts w.p. $\le1/2$ |
| $\mathsf{BPP}$ | accepts w.p. $\ge2/3$ | accepts w.p. $\le1/3$ |
| $\mathsf{ZPP}$ | always correct, expected polynomial time | same |

*Introduced:* [4.1](lessons/04-01-randomness-as-a-resource.md)

### Interactive proof

A conversation rather than a document: the prover must answer challenges it could not have prepared for.

$$x\in A \Rightarrow \Pr[\text{accept}]\ge\tfrac23; \qquad x\notin A \Rightarrow \forall P^*\ \Pr[\text{accept}]\le\tfrac13$$

Soundness is quantified over **all** provers, including cheating ones.

*Introduced:* [4.3](lessons/04-03-interactive-proofs.md)

### Arthur-Merlin

A public-coin protocol: the verifier broadcasts its random bits rather than hiding them.

$\mathsf{AM}$ is the two-message version; by Goldwasser–Sipser it is as powerful as private coins.

*Introduced:* [4.3](lessons/04-03-interactive-proofs.md)

### Arithmetization

Replace Boolean connectives by arithmetic that agrees with them on $\{0,1\}$, then work over a large field.

$$\lnot x\rightsquigarrow 1-x, \qquad x\wedge y\rightsquigarrow xy, \qquad x\vee y\rightsquigarrow 1-(1-x)(1-y)$$

*Introduced:* [4.4](lessons/04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)

### PCP verifier

A checker that tosses coins, reads a few bits of a long proof, and applies one local test.

$$x\in A\Rightarrow\exists\pi:\Pr[V^\pi = 1] = 1; \qquad x\notin A\Rightarrow\forall\pi:\Pr[V^\pi = 1]\le\tfrac12$$

*Introduced:* [4.5](lessons/04-05-probabilistically-checkable-proofs.md)

### Boolean circuit

A straight-line program as a directed acyclic graph; **size** is gate count and **depth** is the critical path.

One circuit per input length, so a language needs a **family** — and nothing requires the family to be computable.

*Introduced:* [5.1](lessons/05-01-boolean-circuits-and-p-poly.md)

### P-poly

Polynomial-size circuit families, with the family itself unconstrained.

$$A\in\mathsf{P/poly} \iff \exists\{C_n\},\ |C_n| = n^{O(1)},\ x\in A\iff C_{|x|}(x)=1$$

*Introduced:* [5.1](lessons/05-01-boolean-circuits-and-p-poly.md)

### Advice classes

Non-uniformity is exactly one free hint per input length.

$$\mathsf{P/poly} = \bigcup_k \mathsf{P}/n^k, \qquad \mathsf{C}/f(n) = \text{class } \mathsf{C} \text{ given } a_n \text{ of length } f(n)$$

*Introduced:* [5.1](lessons/05-01-boolean-circuits-and-p-poly.md)

### NC and AC

Depth is parallel time; $\mathsf{NC}$ is polylogarithmic depth with polynomially many gates.

$\mathsf{NC}^k$: depth $O(\log^k n)$, fan-in 2. $\mathsf{AC}^k$: the same with **unbounded** fan-in. Both require logspace-**uniform** families.

*Introduced:* [5.3](lessons/05-03-nc-parallelism-and-p-completeness.md)

### P completeness

Hardest within $\mathsf{P}$ under logspace reductions — evidence a problem is inherently **sequential**, not that it is intractable.

$B$ is P-complete if $B\in\mathsf{P}$ and $A\le_{\mathsf{L}}B$ for all $A\in\mathsf{P}$.

*Introduced:* [5.3](lessons/05-03-nc-parallelism-and-p-completeness.md)

### Approximation classes

Whether the guarantee is a dial you turn or a wall you cannot pass.

| class | meaning |
|---|---|
| FPTAS | $(1\pm\varepsilon)$ in time $\mathrm{poly}(|x|,1/\varepsilon)$ |
| PTAS | $(1\pm\varepsilon)$ in time $\mathrm{poly}(|x|)$ for each fixed $\varepsilon$ |
| APX | some constant factor, in polynomial time |

*Introduced:* [5.4](lessons/05-04-approximation-as-a-class-apx-and-max-3sat.md)

### L-reduction

A reduction preserving **approximability**, which a Karp reduction does not.

$$\mathrm{OPT}'(f(x))\le\alpha\,\mathrm{OPT}(x), \qquad |\mathrm{OPT}(x) - c(g(y))| \le \beta\,|\mathrm{OPT}'(f(x)) - c'(y)|$$

*Introduced:* [5.4](lessons/05-04-approximation-as-a-class-apx-and-max-3sat.md)

### Gap problem

A promise problem: the instance is either well above a threshold or well below, never between.

$\text{GAP-3SAT}_{c,s}$: at least $cm$ clauses satisfiable, or at most $sm$.

*Introduced:* [5.5](lessons/05-05-hardness-of-approximation.md)

### Unique games conjecture

That a particular 2-variable constraint problem with bijective constraints is NP-hard to approximate.

If true it supplies exact thresholds for MAX-CUT, vertex cover and many others. Genuinely contested, unlike $\mathsf{P}\ne\mathsf{NP}$.

*Introduced:* [5.5](lessons/05-05-hardness-of-approximation.md)

### Oracle machine

A machine with a query tape that answers membership in a fixed set in one step.

$\mathsf{P}^A$, $\mathsf{NP}^A$ are the relativized classes.

*Introduced:* [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md)

### Relativization

A proof relativizes if the same argument works with any oracle attached to both machines.

Diagonalization and simulation do, which is why they cannot settle P versus NP.

*Introduced:* [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md)

### Natural proofs

A lower-bound property that is **large** (a random function has it) and **constructive** (checkable from the truth table in time polynomial in its length).

Such a property is a statistical test that pseudorandom functions would have to defeat.

*Introduced:* [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md)

### Algebrization

Relativization strengthened: the oracle is extended to a low-degree polynomial over a field, which is the object arithmetization manufactures.

*Introduced:* [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md)

### Exponential time hypothesis

3SAT has no $2^{o(n)}$ algorithm — no $2^{\sqrt n}$, no $2^{n/\log n}$.

$$\text{ETH} \iff s_3 > 0$$

*Introduced:* [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md)

### Strong exponential time hypothesis

As clause width grows the best base tends to 2: brute force is essentially optimal in the limit.

$$\text{SETH} \iff \lim_{k\to\infty}s_k = 1$$

*Introduced:* [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md)

### SERF reduction

A reduction that preserves the **parameter** up to a constant factor — the only kind that transfers an ETH bound.

A blow-up from $n$ to $n^2$ degrades a $2^{o(N)}$ conclusion to a $2^{o(\sqrt N)}$ one.

*Introduced:* [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md)

### Orthogonal Vectors

Given two sets of $N$ Boolean vectors, is there a cross pair sharing no coordinate where both are 1?

$$\text{OV}: \exists a\in A, b\in B \text{ with } \textstyle\sum_j a_jb_j = 0$$

*Introduced:* [6.2](lessons/06-02-conditional-lower-bounds-inside-p.md)

### OV conjecture

No $O(N^{2-\varepsilon})$ algorithm for OV when the dimension is $\omega(\log N)$.

Implied by SETH; the hub from which quadratic lower bounds inside $\mathsf{P}$ radiate.

*Introduced:* [6.2](lessons/06-02-conditional-lower-bounds-inside-p.md)

### 3SUM conjecture

No $O(n^{2-\varepsilon})$ algorithm decides whether $n$ given integers contain three summing to zero.

Independent of SETH, and the source of quadratic lower bounds across computational geometry.

*Introduced:* [6.2](lessons/06-02-conditional-lower-bounds-inside-p.md)

## Theorems and rules

### Linear speedup

Constants are not a property of a problem, so classes must be defined up to them.

If $A\in\mathrm{TIME}(t)$ with $t$ superlinear then for every $c>0$, $A$ is decided in time $t(n)/c + O(n)$ — compress $c$ tape symbols into one.

*From* [1.1](lessons/01-01-time-the-model-and-p.md)

### Simulation overhead

| from | to | cost |
|---|---|---|
| $k$-tape TM in time $t$ | single-tape TM | $O(t^2)$ |
| $k$-tape TM in time $t$ | two-tape TM | $O(t\log t)$ |
| random-access machine in time $t$ | multitape TM | $O(t^3)$ |

*From* [1.1](lessons/01-01-time-the-model-and-p.md)

### Robustness of P

$\mathsf{P}$ is the same class under single-tape TMs, multitape TMs and random-access machines, because a polynomial of a polynomial is a polynomial. $\mathrm{TIME}(n^2)$ is **not** robust this way.

*From* [1.1](lessons/01-01-time-the-model-and-p.md)

### Cobham-Edmonds thesis

The empirical claim — a thesis, not a theorem — that problems found to be in $\mathsf{P}$ turn out to be in $\mathsf{P}$ with a small exponent and constant.

*From* [1.1](lessons/01-01-time-the-model-and-p.md)

### NP two definitions

The verifier and nondeterministic-machine definitions give the same class, with the certificate being the branch's choice sequence written down.

*From* [1.2](lessons/01-02-np-ntime-and-nondeterministic-time.md)

### Certificate length bound

A verifier running in time $n^k$ cannot read past position $n^k$, so the polynomial bound on certificate length is **forced**, not imposed.

*From* [1.2](lessons/01-02-np-ntime-and-nondeterministic-time.md)

### Nondeterministic simulation

Searching the computation tree breadth-first costs an exponential and no more.

$$\mathrm{NTIME}(t)\subseteq\mathrm{TIME}\big(2^{O(t)}\big) \quad (t(n)\ge n)$$

*From* [1.2](lessons/01-02-np-ntime-and-nondeterministic-time.md)

### P NP EXP

$$\mathsf{P}\subseteq\mathsf{NP}\subseteq\mathsf{EXP}, \qquad \mathsf{EXP} = \bigcup_k\mathrm{TIME}(2^{n^k})$$

With $\mathsf{P}\subsetneq\mathsf{EXP}$ this gives: **at least one of the two containments is strict**, and nobody knows which.

*From* [1.2](lessons/01-02-np-ntime-and-nondeterministic-time.md), [1.3](lessons/01-03-the-hierarchy-theorems.md)

### Time hierarchy theorem

More than a log-factor's worth of extra time buys strictly more power.

$$f(n)\log f(n) = o\big(g(n)\big) \;\Longrightarrow\; \mathrm{TIME}(f)\subsetneq\mathrm{TIME}(g) \quad (g \text{ time-constructible})$$

The $\log$ is the cost of universal simulation.

*From* [1.3](lessons/01-03-the-hierarchy-theorems.md)

### Space hierarchy theorem

Sharper, because simulating cells costs only a constant factor.

$$f(n) = o\big(g(n)\big) \;\Longrightarrow\; \mathrm{SPACE}(f)\subsetneq\mathrm{SPACE}(g) \quad (g \text{ space-constructible})$$

*From* [1.3](lessons/01-03-the-hierarchy-theorems.md)

### Known separations

| separation | how |
|---|---|
| $\mathrm{TIME}(n^2)\subsetneq\mathrm{TIME}(n^3)$ | $n^2\cdot2\log n = o(n^3)$ |
| $\mathsf{P}\subsetneq\mathsf{EXP}$ | $\mathsf{P}\subseteq\mathrm{TIME}(2^n)\subsetneq\mathrm{TIME}(2^{2n})$ |
| $\mathsf{L}\subsetneq\mathsf{PSPACE}$ | $\log n = o(n)$ |
| $\mathsf{NL}\subsetneq\mathsf{PSPACE}$ | Savitch gives $\mathsf{NL}\subseteq\mathrm{SPACE}(\log^2 n)$, and $\log^2 n = o(n)$ |
| $\mathsf{AC}^0\subsetneq\mathsf{NC}^1$ | parity |

**These are all of them.** Not one containment in $\mathsf{L}\subseteq\mathsf{NL}\subseteq\mathsf{P}\subseteq\mathsf{NP}\subseteq\mathsf{PH}\subseteq\mathsf{PSPACE}\subseteq\mathsf{EXP}$ is known to be strict.

*From* [1.3](lessons/01-03-the-hierarchy-theorems.md), [2.6](lessons/02-06-immerman-szelepcsenyi-and-the-class-map.md), [5.3](lessons/05-03-nc-parallelism-and-p-completeness.md)

### Cook-Levin theorem

SAT is NP-complete, by encoding a computation as a tableau whose legality is checkable one $2\times3$ window at a time.

| part | says | size |
|---|---|---|
| $\varphi_{\text{cell}}$ | exactly one symbol per cell | $O(n^{2k})$ |
| $\varphi_{\text{start}}$ | row 1 is the start configuration | $O(n^{k})$ |
| $\varphi_{\text{accept}}$ | the accept state appears | $O(n^{2k})$ |
| $\varphi_{\text{move}}$ | every window is legal | $O(n^{2k})$ |

The reduction is **parsimonious**: certificates biject with satisfying assignments.

*From* [1.4](lessons/01-04-cook-levin-computation-is-satisfiability.md)

### 3SAT

Splitting a long clause is linear and preserves satisfiability, but **not** the solution count.

$$(a_1\vee\cdots\vee a_\ell) \mapsto (a_1\vee a_2\vee y_1)\wedge(\overline{y_1}\vee a_3\vee y_2)\wedge\cdots\wedge(\overline{y_{\ell-3}}\vee a_{\ell-1}\vee a_\ell)$$

$\ell-2$ clauses, $\ell-3$ new variables. Measured: a 5-literal clause's 31 satisfying assignments become 82.

*From* [1.4](lessons/01-04-cook-levin-computation-is-satisfiability.md)

### Subset sum reduction

Digit columns are the constraints and the base is the proof they do not interact.

| row | variable digit $x_i$ | clause digit $C_j$ |
|---|---|---|
| $y_i$ (true) | 1 | 1 if $x_i\in C_j$ |
| $z_i$ (false) | 1 | 1 if $\lnot x_i\in C_j$ |
| $g_j,h_j$ | 0 | 1 in column $j$ |

Target $\underbrace{1\cdots1}_{n}\underbrace{3\cdots3}_{m}$. Largest column sum is $3+2 = 5 < 10$, so no carries. **Not parsimonious** — measured, 6 models become 12 subsets.

*From* [1.5](lessons/01-05-reduction-craft-and-how-reductions-break.md)

### Strong vs weak NP-hardness

A number problem is **strongly** NP-hard if it stays hard when all numbers are polynomially bounded; otherwise its hardness is **weak** and it typically has a pseudo-polynomial algorithm.

SUBSET-SUM is weak ($O(nT)$ dynamic program); 3-PARTITION is strong, which is why it is the right source when the target's numbers must stay small.

*From* [1.5](lessons/01-05-reduction-craft-and-how-reductions-break.md)

### Ladner's theorem

If $\mathsf{P}\ne\mathsf{NP}$ there is a language in NP that is neither in $\mathsf{P}$ nor NP-complete — in fact infinitely many, densely ordered.

Built by delayed diagonalization; the language is an artefact, and no natural problem has ever been placed there.

*From* [1.6](lessons/01-06-ladner-self-reducibility-search-vs-decision.md)

### Self-reducibility

An instance is solvable using answers about strictly smaller instances of the same problem.

*From* [1.6](lessons/01-06-ladner-self-reducibility-search-vs-decision.md)

### Search to decision

A SAT oracle yields a satisfying assignment in **$n$ queries**: fix each variable to the value that keeps the formula satisfiable.

*From* [1.6](lessons/01-06-ladner-self-reducibility-search-vs-decision.md)

### Search vs decision

$\mathsf{P} = \mathsf{NP}$ if and only if satisfying assignments can be *found* in polynomial time — so the decision framing of the whole course costs nothing.

*From* [1.6](lessons/01-06-ladner-self-reducibility-search-vs-decision.md)

### coNP collapse theorem

If any NP-complete language lies in $\mathsf{coNP}$, then $\mathsf{NP} = \mathsf{coNP}$.

The workhorse behind "probably not NP-complete" arguments.

*From* [2.1](lessons/02-01-conp-and-the-shape-of-np.md)

### NP intersect coNP

Short proofs both ways — a *good characterization*. Historically this is where problems sit shortly before a polynomial algorithm is found (linear programming, primality).

*From* [2.1](lessons/02-01-conp-and-the-shape-of-np.md)

### Factoring in NP intersect coNP

Yes-certificate: a small prime factor with a primality certificate. No-certificate: the complete factorization, all of whose primes exceed $k$ — sound because factorization is unique.

Hence factoring is NP-complete only if $\mathsf{NP} = \mathsf{coNP}$.

*From* [2.1](lessons/02-01-conp-and-the-shape-of-np.md)

### PH collapse

If $\Sigma_k^p = \Pi_k^p$ for some $k$, then $\mathsf{PH} = \Sigma_k^p$ — everything above flattens.

Corollaries: $\mathsf{P}=\mathsf{NP}$ collapses PH to $\mathsf{P}$; $\mathsf{NP}=\mathsf{coNP}$ collapses it to $\mathsf{NP}$. **PH has a complete problem iff it collapses.**

*From* [2.2](lessons/02-02-the-polynomial-hierarchy.md)

### Savitch's theorem

Nondeterministic space costs at most a square, by recursing on midpoints and running the two halves sequentially.

$$\mathrm{NSPACE}(s)\subseteq\mathrm{SPACE}(s^2) \quad (s(n)\ge\log n \text{ space-constructible})$$

Recursion depth $O(s)$, frames of $O(s)$ bits. Time cost: $2^{O(s^2)}$.

*From* [2.3](lessons/02-03-space-as-a-resource-and-savitch.md)

### PSPACE equals NPSPACE

Immediate from Savitch, since the square of a polynomial is a polynomial. **Nondeterminism is free for space** — exactly what nobody can prove or disprove for time.

*From* [2.3](lessons/02-03-space-as-a-resource-and-savitch.md)

### Time space inclusions

$$\mathrm{TIME}(t)\subseteq\mathrm{SPACE}(t), \qquad \mathrm{SPACE}(s)\subseteq\mathrm{TIME}\big(2^{O(s)}\big), \qquad \mathrm{NSPACE}(s)\subseteq\mathrm{TIME}\big(2^{O(s)}\big)$$

First because one cell is touched per step; the others because a halting run never repeats a configuration.

*From* [2.3](lessons/02-03-space-as-a-resource-and-savitch.md)

### TQBF is PSPACE-complete

Membership: the recursive evaluator holds one root-to-leaf path, $O(n\log n)$ space. Hardness: arithmetize Savitch's midpoint recursion, using a $\forall$ over the two halves so the formula grows **additively** rather than doubling:

$$\phi_i(a,b) = \exists m\,\forall (c,d)\in\{(a,m),(m,b)\}\ \phi_{i-1}(c,d)$$

*From* [2.4](lessons/02-04-tqbf-and-pspace-completeness.md)

### Games and PSPACE

Generalized geography is PSPACE-complete, and so are most board games whose play length is polynomially bounded. Games with exponentially long play (generalized chess, some Go rules) are **EXPTIME**-complete and hence provably not in $\mathsf{P}$.

*From* [2.4](lessons/02-04-tqbf-and-pspace-completeness.md)

### Logspace composition

Logspace reductions compose, via **recompute-on-demand**: to read the $i$-th symbol of the intermediate string, re-run the first transducer from scratch and count.

Costs enormous time and $O(\log n)$ extra space.

*From* [2.5](lessons/02-05-l-nl-and-nl-completeness.md)

### PATH is NL-complete

Membership: hold the current vertex and a step counter, guess edges. Hardness: map the input to the machine's configuration graph, which a logspace machine can emit one edge at a time.

*From* [2.5](lessons/02-05-l-nl-and-nl-completeness.md)

### NL subset P

A logspace machine's configuration graph has $n^{O(1)}$ vertices, so reachability in it is a polynomial-time question.

*From* [2.5](lessons/02-05-l-nl-and-nl-completeness.md)

### 2SAT in NL

A 2CNF **is** a graph: $(a\vee b)$ becomes $\lnot a\Rightarrow b$ and $\lnot b\Rightarrow a$. Unsatisfiable exactly when some $x$ has paths both from $x$ to $\lnot x$ and back.

*From* [2.5](lessons/02-05-l-nl-and-nl-completeness.md)

### Immerman-Szelepcsenyi theorem

Nondeterministic space is closed under complement — the certificate for a negative is **the count**.

$$\mathrm{NSPACE}(s) = \mathrm{coNSPACE}(s) \quad (s\ge\log n), \qquad \text{in particular } \mathsf{NL} = \mathsf{coNL}$$

Inductive counting: given $c_{i-1} = |R_{i-1}|$, verify each member with a re-guessed path and reject any branch whose tally falls short.

*From* [2.6](lessons/02-06-immerman-szelepcsenyi-and-the-class-map.md)

### Permanent counts matchings

For a $0/1$ biadjacency matrix, $\mathrm{per}\,M$ is exactly the number of perfect matchings — each permutation contributes 1 iff every pair is an edge.

*From* [3.1](lessons/03-01-sharp-p-counting-is-harder-than-deciding.md)

### Sharp SAT

$\#\text{SAT}$ is $\#\mathsf{P}$-complete, because the Cook–Levin tableau reduction is parsimonious: a certificate determines the whole tableau, hence exactly one satisfying assignment.

*From* [3.2](lessons/03-02-sharp-p-completeness-and-parsimonious-reductions.md)

### Valiant's theorem

Computing the permanent of a $0/1$ matrix is $\#\mathsf{P}$-complete — even though deciding whether a perfect matching exists is in $\mathsf{P}$.

*From* [3.1](lessons/03-01-sharp-p-counting-is-harder-than-deciding.md), [3.2](lessons/03-02-sharp-p-completeness-and-parsimonious-reductions.md)

### Valiant-Vazirani

Adding random $\mathbb{F}_2$ linear constraints isolates a unique satisfying assignment with probability $\ge 1/(4n)$, and leaves an unsatisfiable formula unsatisfiable.

*From* [3.3](lessons/03-03-todas-theorem-and-approximate-counting.md)

### Toda's theorem

One counting oracle decides the entire polynomial hierarchy.

$$\mathsf{PH}\subseteq\mathsf{P}^{\#\mathsf{P}}\subseteq\mathsf{PSPACE}$$

Proved in two steps: $\mathsf{PH}\subseteq\mathsf{BPP}^{\oplus\mathsf{P}}$, then $\mathsf{BPP}^{\oplus\mathsf{P}}\subseteq\mathsf{P}^{\#\mathsf{P}}$.

*From* [3.3](lessons/03-03-todas-theorem-and-approximate-counting.md)

### Karp-Luby FPRAS

Counting the union of cubes by sampling the **disjoint** union and accepting only the lowest-indexed covering cube.

$$\Pr[\text{accept}] = \frac{|\bigcup_i C_i|}{\sum_i|C_i|}\ \ge\ \frac1m$$

$O(m\varepsilon^{-2}\log\delta^{-1})$ samples.

*From* [3.3](lessons/03-03-todas-theorem-and-approximate-counting.md)

### FPRAS obstruction

If $g$ has an FPRAS and $\{x : g(x)>0\}$ is NP-hard then $\mathsf{NP} = \mathsf{RP}$ — because a multiplicative approximation must output exactly 0 on a zero count.

**Approximability is settled by the decision version, not the counting version.**

*From* [3.3](lessons/03-03-todas-theorem-and-approximate-counting.md)

### ZPP equals RP cap coRP

$$\mathsf{ZPP} = \mathsf{RP}\cap\mathsf{coRP}$$

($\subseteq$) Run for $2T$ steps; Markov's inequality bounds the timeout by $1/2$. ($\supseteq$) Alternate the two machines until one is conclusive; rounds are geometric with $p\ge1/2$, so **expected 2 rounds**, and $\Pr[\text{more than }k] \le 2^{-k}$.

*From* [4.1](lessons/04-01-randomness-as-a-resource.md)

### Amplification

Majority over $t$ independent runs, each correct with probability $p = 1/2+\delta$:

$$\Pr[\text{majority wrong}]\ \le\ e^{-2t\delta^2}$$

At $p=2/3$ the bound is $e^{-t/18}$; reaching $2^{-100}$ needs $t\ge1248$ by the bound and **1121 exactly**.

*From* [4.2](lessons/04-02-amplification-and-placing-bpp.md)

### BPP robustness

Defining $\mathsf{BPP}$ with $2/3$, with $0.51$, or with $1/2+n^{-c}$ gives the same class; error can be driven to $2^{-n^k}$. A gap of exactly 0 gives a coin and defines no language.

*From* [4.2](lessons/04-02-amplification-and-placing-bpp.md)

### Adleman's theorem

$\mathsf{BPP}\subseteq\mathsf{P/poly}$. Amplify to error below $2^{-n}$; then $\mathbb{E}_r[|B(r)|] < 2^n\cdot2^{-n} = 1$, and a nonnegative integer with expectation below 1 is sometimes 0 — so some $r^*$ is good for **every** input of that length.

Non-constructive: verifying a candidate needs all $2^n$ inputs.

*From* [4.2](lessons/04-02-amplification-and-placing-bpp.md), [5.1](lessons/05-01-boolean-circuits-and-p-poly.md)

### BPP in Sigma 2

$\mathsf{BPP}\subseteq\Sigma_2^p\cap\Pi_2^p$, by shifting: on a yes-instance a few random shifts of the accepting set cover the cube, on a no-instance they cannot.

$$x\in A \iff \exists s_1,\dots,s_k\ \forall r\ \bigvee_i M(x, r\oplus s_i) = 1$$

The strongest placement of $\mathsf{BPP}$ known; $\mathsf{BPP}\subseteq\mathsf{NP}$ is open.

*From* [4.2](lessons/04-02-amplification-and-placing-bpp.md)

### Graph non-isomorphism in IP

Verifier sends a random shuffle of a randomly chosen one of the two graphs; prover names which. Completeness 1, soundness exactly $1/2$ per round, $2^{-k}$ after $k$.

Soundness is **information-theoretic**: when the graphs are isomorphic the two message distributions are identical.

*From* [4.3](lessons/04-03-interactive-proofs.md)

### Private vs public coins

Goldwasser–Sipser: any $k$-round private-coin protocol has a $(k+2)$-round public-coin one. Hence $\overline{\text{GI}}\in\mathsf{AM}$ and $\text{GI}\in\mathsf{coAM}$.

Also: $\mathsf{AM}[k] = \mathsf{AM}[2]$ for every constant $k\ge2$ — constant rounds collapse.

*From* [4.3](lessons/04-03-interactive-proofs.md)

### GI not NP-complete

If an NP-complete problem is in $\mathsf{coAM}$ the hierarchy collapses to $\Sigma_2^p$ (Boppana–Håstad–Zachos). Since $\text{GI}\in\mathsf{coAM}$, graph isomorphism being NP-complete would flatten PH.

*From* [4.3](lessons/04-03-interactive-proofs.md), [2.2](lessons/02-02-the-polynomial-hierarchy.md)

### Sumcheck protocol

Each round removes one variable; the verifier checks one identity and one random evaluation.

1. Prover sends $g_i$ of degree $\le d$;
2. verifier checks $g_i(0)+g_i(1) = H_{i-1}$;
3. verifier picks random $r_i$, sets $H_i = g_i(r_i)$.

Finally it evaluates the polynomial itself at $(r_1,\dots,r_n)$. **Soundness error $\le nd/p$.**

*From* [4.4](lessons/04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)

### coNP in IP

Run sumcheck on $\tilde\varphi$ with claimed sum 0: unsatisfiability has a short *interactive* proof even though it has no known short certificate.

*From* [4.4](lessons/04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)

### IP equals PSPACE

$$\mathsf{IP} = \mathsf{PSPACE}$$

Arithmetize TQBF — $\exists$ becomes $\sum$, $\forall$ becomes $\prod$ — and insert degree-reduction operators, since products otherwise square the degree. **Arithmetization does not relativize**, which is why the result surprised everyone.

*From* [4.4](lessons/04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)

### PCP theorem

$$\mathsf{NP} = \mathsf{PCP}(O(\log n), O(1))$$

Logarithmic randomness and a **constant** number of queries. Håstad's sharpening: exactly 3 queries, a single parity test, completeness $1-\delta$ and soundness $1/2+\delta$.

*From* [4.5](lessons/04-05-probabilistically-checkable-proofs.md)

### PCP endpoints

$$\mathsf{PCP}(0,\mathrm{poly}) = \mathsf{NP}, \qquad \mathsf{PCP}(O(\log n), 0) = \mathsf{P}, \qquad \mathsf{PCP}(\mathrm{poly}, O(1)) = \mathsf{NEXP}$$

*From* [4.5](lessons/04-05-probabilistically-checkable-proofs.md)

### PCP proof length

A $\mathsf{PCP}(r,q)$ verifier reads at most $q\,2^{r}$ distinct positions, so the proof may be taken that long — polynomial when $r = O(\log n)$, $q = O(1)$.

*From* [4.5](lessons/04-05-probabilistically-checkable-proofs.md)

### Gap 3SAT

The promise problem the PCP theorem is equivalent to: given a 3CNF, distinguish *satisfiable* from *at most $(1-\varepsilon)$ of the clauses satisfiable*.

$$\text{GAP-3SAT}_{1,1-\varepsilon} \text{ is NP-hard for some constant } \varepsilon > 0.$$

Håstad's sharpening makes it $\text{GAP-3SAT}_{1-\delta,\,7/8+\delta}$ for every $\delta>0$.

*From* [4.5](lessons/04-05-probabilistically-checkable-proofs.md), [5.5](lessons/05-05-hardness-of-approximation.md)

### PCP gap equivalence

The PCP theorem is **equivalent** to: for some constant $\varepsilon>0$, $\text{GAP-3SAT}_{1,1-\varepsilon}$ is NP-hard. One constraint per coin sequence, and acceptance probability becomes fraction of clauses satisfied.

*From* [4.5](lessons/04-05-probabilistically-checkable-proofs.md), [5.5](lessons/05-05-hardness-of-approximation.md)

### P in P-poly

Every language decidable in time $t$ has circuits of size $O(t^2)$ — wire up the tableau, one constant-size block per cell.

*From* [5.1](lessons/05-01-boolean-circuits-and-p-poly.md)

### P-poly undecidable

$\mathsf{P/poly}$ contains undecidable languages. For an undecidable $S\subseteq\mathbb{N}$, the unary $U = \{1^n : n\in S\}$ has **constant-size** circuits, one per length. So $\mathsf{P}\subsetneq\mathsf{P/poly}$ unconditionally — by uncomputability, not by hardness.

*From* [5.1](lessons/05-01-boolean-circuits-and-p-poly.md)

### Shannon counting bound

Counting circuits against functions: $\log_2(\#\text{circuits of size } s) \le s(\log_2 3 + 2\log_2(s+n))$ against $2^{2^n}$ functions.

All but a $2^{-\Omega(2^n)}$ fraction of Boolean functions need circuits of size $\ge 2^n/(2n)$. **No explicit such function is known.**

*From* [5.1](lessons/05-01-boolean-circuits-and-p-poly.md)

### Karp-Lipton theorem

$$\mathsf{NP}\subseteq\mathsf{P/poly} \;\Longrightarrow\; \mathsf{PH} = \Sigma_2^p$$

Guess a SAT circuit, use **self-reducibility** to turn it into an assignment, then verify the assignment directly — which is what makes an untrusted circuit safe to quantify over.

*From* [5.2](lessons/05-02-karp-lipton-and-the-lower-bound-program.md)

### Karp-Lipton contrapositive

If $\mathsf{PH}$ is infinite then SAT has no polynomial-size circuits, and hence $\mathsf{P}\ne\mathsf{NP}$.

Note $\mathsf{NP}\not\subseteq\mathsf{P/poly}$ is **strictly stronger** than $\mathsf{P}\ne\mathsf{NP}$.

*From* [5.2](lessons/05-02-karp-lipton-and-the-lower-bound-program.md)

### Circuit lower bounds

| class | function | bound |
|---|---|---|
| $\mathsf{AC}^0$, depth $d$ | PARITY | $2^{\Omega(n^{1/(d-1)})}$ |
| monotone (no NOT) | CLIQUE | $2^{\Omega(\sqrt k)}$ |
| **general circuits** | any explicit function | **about $5n$** |

*From* [5.2](lessons/05-02-karp-lipton-and-the-lower-bound-program.md)

### NC hierarchy

$$\mathsf{AC}^0\subsetneq\mathsf{NC}^1\subseteq\mathsf{L}\subseteq\mathsf{NL}\subseteq\mathsf{AC}^1\subseteq\mathsf{NC}^2\subseteq\cdots\subseteq\mathsf{NC}\subseteq\mathsf{P}$$

$\mathsf{AC}^k\subseteq\mathsf{NC}^{k+1}$ because an unbounded gate on $m$ inputs becomes a tree of depth $\log m$. The space classes **interleave** with the depth classes.

*From* [5.3](lessons/05-03-nc-parallelism-and-p-completeness.md)

### Parity not in AC0

Constant-depth unbounded-fan-in circuits computing parity need size $2^{\Omega(n^{1/(d-1)})}$, by Håstad's switching lemma: random restrictions flatten a small circuit, and parity survives restriction.

The only strict containment in the $\mathsf{NC}$ chain.

*From* [5.3](lessons/05-03-nc-parallelism-and-p-completeness.md)

### Circuit value problem

$\text{CVP} = \{\langle C,x\rangle : C(x)=1\}$ is **P-complete** under logspace reductions, by the tableau — the circuit is a regular grid two counters can emit.

*From* [5.3](lessons/05-03-nc-parallelism-and-p-completeness.md)

### NC vs P

If any P-complete problem is in $\mathsf{NC}$ then $\mathsf{NC} = \mathsf{P}$, since $\mathsf{NC}$ is closed under logspace reductions.

Some P-complete problems: CIRCUIT-VALUE, linear programming, max-flow, depth-first-search ordering.

*From* [5.3](lessons/05-03-nc-parallelism-and-p-completeness.md)

### MAX-3SAT seven eighths

A random assignment satisfies each 3-clause over **distinct** variables with probability $7/8$ (one bad pattern of eight), so by linearity $\mathbb{E} = \tfrac78 m$ and some assignment reaches it.

Linearity needs no independence **between** clauses; independence is used only within a clause.

*From* [5.4](lessons/05-04-approximation-as-a-class-apx-and-max-3sat.md)

### Method of conditional expectations

Derandomize by always walking into the better half.

$$E[\alpha] = \tfrac12E[\alpha,x_i{=}0] + \tfrac12E[\alpha,x_i{=}1] \;\Longrightarrow\; \max\big(E[\alpha,x_i{=}0], E[\alpha,x_i{=}1]\big)\ \ge\ E[\alpha]$$

For MAX-3SAT, $E[\alpha] = \sum_j \Pr[C_j\mid\alpha]$ with each term $1$ or $1-2^{-k_j}$: computable in $O(m)$.

*From* [5.4](lessons/05-04-approximation-as-a-class-apx-and-max-3sat.md)

### APX completeness

MAX-3SAT is APX-complete under L-reductions, so an L-reduction from it rules out a PTAS for your problem with no bespoke gap construction.

*From* [5.4](lessons/05-04-approximation-as-a-class-apx-and-max-3sat.md)

### Gap implies inapproximability

If $\text{GAP-3SAT}_{c,s}$ is NP-hard, no polynomial-time algorithm approximates MAX-3SAT better than $s/c$ unless $\mathsf{P}=\mathsf{NP}$ — compare the output with $sm$.

*From* [5.5](lessons/05-05-hardness-of-approximation.md)

### Hastad's theorem

For every $\varepsilon>0$, approximating MAX-3SAT within $7/8+\varepsilon$ is NP-hard. With the $7/8$ algorithm this makes **$7/8$ a threshold**, met exactly from both sides.

| problem | algorithm | hardness | status |
|---|---|---|---|
| MAX-3SAT | $7/8$ | $7/8+\varepsilon$ | tight |
| SET-COVER | $\ln n$ | $(1-o(1))\ln n$ | tight |
| VERTEX-COVER | $2-\Theta(1/\sqrt{\log n})$ | $1.36$; $2-\varepsilon$ under UGC | gap |
| MAX-CUT | $0.878$ | $16/17$; $0.878$ under UGC | gap |

*From* [5.5](lessons/05-05-hardness-of-approximation.md)

### Baker-Gill-Solovay

There are oracles $A$, $B$ with $\mathsf{P}^A = \mathsf{NP}^A$ and $\mathsf{P}^B\ne\mathsf{NP}^B$ — so **no relativizing proof settles P versus NP**.

Take $A = \text{TQBF}$; build $B$ in stages, at each stage placing a string where the machine did not look.

*From* [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md)

### Razborov-Rudich

A natural property useful against $\mathsf{P/poly}$ would break every pseudorandom function family, and hence deployed cryptography.

The $\mathsf{AC}^0$ and monotone bounds escape because those classes are too weak to contain pseudorandom functions.

*From* [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md)

### Aaronson-Wigderson

Arithmetization **algebrizes**, and no algebrizing proof settles P versus NP or proves $\mathsf{NP}\not\subseteq\mathsf{P/poly}$ — a barrier built to catch the technique that escaped relativization.

*From* [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md)

### ETH SETH chain

$$\text{SETH}\ \Longrightarrow\ \text{ETH}\ \Longrightarrow\ \mathsf{P}\ne\mathsf{NP}$$

No implication reverses. $\mathsf{P}\ne\mathsf{NP}$ permits 3SAT in $2^{\sqrt n}$, which refutes ETH.

*From* [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md)

### Sparsification lemma

Any $k$-CNF becomes, in $2^{\varepsilon n}$ time, an OR of $2^{\varepsilon n}$ formulas each with $O(n)$ clauses — so ETH stated in $n$ and in $m$ are equivalent.

Needed because a 3CNF can have $\Theta(n^3)$ clauses.

*From* [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md)

### ETH consequences

| problem | ETH rules out |
|---|---|
| 3SAT, Vertex Cover, Independent Set, Hamiltonian Path | $2^{o(n)}$ |
| $k$-Clique (parameterized) | $n^{o(k)}$ |
| Planar Vertex Cover | $2^{o(\sqrt n)}$ — and $2^{O(\sqrt n)}$ is achievable, so **tight** |

Best known exact algorithms: 3-SAT $\approx1.307^n$, 4-SAT $\approx1.469^n$, 5-SAT $\approx1.569^n$.

*From* [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md)

### SETH implies OV

Split the $n$ variables in half. For each half-assignment build a vector in $\{0,1\}^m$ with $v_j = 1$ iff clause $j$ is **not** satisfied by that half. Then

$$v(\alpha)\cdot w(\beta) = 0 \iff \text{every clause is satisfied by } \alpha \text{ or } \beta.$$

With $N = 2^{n/2}$, an $O(N^{2-\varepsilon})$ OV algorithm gives CNF-SAT at base $2^{1-\varepsilon/2} < 2$, refuting SETH.

*From* [6.2](lessons/06-02-conditional-lower-bounds-inside-p.md)

### Edit distance hardness

An exact $O(n^{2-\varepsilon})$ algorithm for edit distance refutes SETH (Backurs–Indyk, 2015). Same for longest common subsequence, dynamic time warping and discrete Fréchet distance.

Untouched: approximation, small-distance instances (banded dynamic programming, $O(nk)$), and parallelism.

*From* [6.2](lessons/06-02-conditional-lower-bounds-inside-p.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Turing machines, multitape simulation, the Church–Turing thesis | [`theory-of-computation` 3.1](../theory-of-computation/lessons/03-01-turing-machines.md)–[3.3](../theory-of-computation/lessons/03-03-church-turing-thesis-and-the-universal-machine.md) |
| Diagonalization and the halting problem | [`theory-of-computation` 4.1](../theory-of-computation/lessons/04-01-diagonalization-and-the-halting-problem.md) |
| Mapping reductions and their direction rule | [`theory-of-computation` 4.2](../theory-of-computation/lessons/04-02-reducibility-and-mapping-reductions.md) |
| P, NP, verifiers and certificates as ideas | [`theory-of-computation` 4.4](../theory-of-computation/lessons/04-04-a-first-look-at-p-vs-np.md), [`algorithms` 4.1](../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) |
| Karp reductions, the four-obligation template, the 3SAT graph chain | [`algorithms` 4.2](../algorithms/lessons/04-02-the-np-complete-zoo.md) |
| Approximation *algorithms*: vertex cover, set cover, metric TSP, knapsack FPTAS | [`algorithms` 4.3](../algorithms/lessons/04-03-approximation-algorithms.md) |
| Randomized *algorithms*: Karger, randomized quicksort, Monte Carlo vs Las Vegas | [`algorithms` 4.4](../algorithms/lessons/04-04-randomized-algorithms.md) |
| The edit-distance and LCS dynamic programs | [`algorithms` 2.6](../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md) |
| Strongly connected components (the linear-time 2SAT algorithm) | [`algorithms` 3.2](../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) |
| Bipartite matching and Hall's theorem | [`graph-theory` 2.3](../graph-theory/lessons/02-03-bipartite-matching-hall.md) |
| The probabilistic method and first-moment arguments | [`graph-theory` 5.3](../graph-theory/lessons/05-03-extremal-ramsey.md) |
| Markov's inequality and concentration | [`probability-theory` 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md) |
| Finite fields and modular arithmetic | [`number-theory` 2.1](../number-theory/lessons/02-01-congruences-arithmetic-mod-n.md), [`abstract-algebra` 2.1](../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md) |
| Average-case hardness, one-way functions, pseudorandom generators | [`cryptography` 1.4](../cryptography/lessons/01-04-computational-security-and-pseudorandomness.md) |
| BQP and the quantum complexity landscape | [`quantum-computing` 6.1](../quantum-computing/lessons/06-01-bqp-and-the-complexity-landscape.md) |
| Linear programming duality and semidefinite relaxations | [`convex-optimization` 3.1](../convex-optimization/lessons/03-01-lagrangian-dual-function.md) |

## Pitfalls

### Classes and definitions

- $\mathsf{P}$ is a **robustness** class first and a tractability proxy second: $n^{100}$ is in it, and an exponential can beat a quintic on every input anyone calls small. *([1.1](lessons/01-01-time-the-model-and-p.md))*
- $\mathrm{TIME}(n^2)$ moves when the machine model does; only the union over all exponents is a property of the problem. *([1.1](lessons/01-01-time-the-model-and-p.md))*
- $\mathrm{NTIME}$ requires **every** branch to halt in time, not just the accepting one. *([1.2](lessons/01-02-np-ntime-and-nondeterministic-time.md))*
- "coNP" is not "not in NP": the two classes overlap in at least all of $\mathsf{P}$. *([2.1](lessons/02-01-conp-and-the-shape-of-np.md))*
- Only **alternations** raise the hierarchy level; consecutive like quantifiers merge, and a quantifier over a polynomial-size domain is a loop, not a level. *([2.2](lessons/02-02-the-polynomial-hierarchy.md))*
- Superlatives hide a $\forall$: "the largest clique is $k$" sits a level above "there is a clique of size $k$". *([2.2](lessons/02-02-the-polynomial-hierarchy.md))*
- The input tape is not charged for space; charge it and $\mathsf{L}$ is empty. *([2.3](lessons/02-03-space-as-a-resource-and-savitch.md))*
- $\mathsf{ZPP}$ bounds **expected** time, so an unlucky run can last arbitrarily long. *([4.1](lessons/04-01-randomness-as-a-resource.md))*
- $\mathsf{P/poly}$ is not a tractability class — it contains undecidable languages. *([5.1](lessons/05-01-boolean-circuits-and-p-poly.md))*
- P-complete problems are **in** $\mathsf{P}$; the conclusion is about parallelism, not running time. *([5.3](lessons/05-03-nc-parallelism-and-p-completeness.md))*

### Reductions

- The reduction must be **weaker than the class** it compares within, or every nontrivial problem becomes complete: polynomial-time for NP and PSPACE, logspace for NL and P. *([2.5](lessons/02-05-l-nl-and-nl-completeness.md), [5.3](lessons/05-03-nc-parallelism-and-p-completeness.md))*
- A reduction proves only what it was built to preserve. **The answer** (Karp), **the count** (parsimonious), **the ratio** (L-reduction), **the exponent** (fine-grained) are four different obligations. *([3.2](lessons/03-02-sharp-p-completeness-and-parsimonious-reductions.md), [5.4](lessons/05-04-approximation-as-a-class-apx-and-max-3sat.md), [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md))*
- Almost no standard reduction is parsimonious: any gadget offering a *choice* multiplies the count, usually by a factor that varies by instance. *([1.5](lessons/01-05-reduction-craft-and-how-reductions-break.md), [3.2](lessons/03-02-sharp-p-completeness-and-parsimonious-reductions.md))*
- Four failure modes: **backwards**, **missing converse**, **exponential in disguise**, **leaky gadget**. Find them by building the yes-instance the construction cannot represent. *([1.5](lessons/01-05-reduction-craft-and-how-reductions-break.md))*
- In an arithmetic reduction the base must exceed the largest possible column sum; a carry silently couples constraints meant to be independent. *([1.5](lessons/01-05-reduction-craft-and-how-reductions-break.md))*
- A parameter blow-up from $n$ to $n^2$ is fine for NP-hardness and useless for ETH. *([6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md))*

### Proofs and hypotheses

- An oracle separation says a **technique family** fails, not that the statement is false — $\mathsf{IP} = \mathsf{PSPACE}$ is the standing counterexample. *([4.4](lessons/04-04-arithmetization-sumcheck-and-ip-equals-pspace.md), [5.6](lessons/05-06-relativization-natural-proofs-algebrization.md))*
- "I cannot imagine a certificate" is a report on the imagination, not evidence. $\mathsf{NL} = \mathsf{coNL}$ took twenty years for exactly that reason. *([2.6](lessons/02-06-immerman-szelepcsenyi-and-the-class-map.md))*
- A collapse consequence does not refute its hypothesis; it makes proving the hypothesis a much larger result than it looks. *([5.2](lessons/05-02-karp-lipton-and-the-lower-bound-program.md))*
- The hierarchy theorems separate classes and hand you no natural problem in the gap; so does Ladner's construction. *([1.3](lessons/01-03-the-hierarchy-theorems.md), [1.6](lessons/01-06-ladner-self-reducibility-search-vs-decision.md))*
- Constructibility is not hygiene: the gap theorem gives non-constructible $f$ with $\mathrm{TIME}(f) = \mathrm{TIME}(2^f)$. *([1.3](lessons/01-03-the-hierarchy-theorems.md))*
- ETH and SETH are **stronger** than $\mathsf{P}\ne\mathsf{NP}$ and less certain; SETH especially is contested, as is the unique games conjecture. *([5.5](lessons/05-05-hardness-of-approximation.md), [6.1](lessons/06-01-eth-seth-and-the-exponential-time-view.md))*

### Randomness, counting and approximation

- Nondeterminism accepts if **some** branch does; randomness if **most** do. One accepting run certifies nothing in $\mathsf{BPP}$. *([4.1](lessons/04-01-randomness-as-a-resource.md))*
- Repetition shrinks an error without ever changing its shape: two-sided never becomes one-sided, one-sided never becomes zero. *([4.1](lessons/04-01-randomness-as-a-resource.md), [4.2](lessons/04-02-amplification-and-placing-bpp.md))*
- A conjunctive test amplifies far faster than a majority vote — $2^{-k}$ in $k$ rounds against $1121$ runs for $2^{-100}$. *([4.3](lessons/04-03-interactive-proofs.md))*
- $\#\mathsf{P}$ is a class of **functions**, and the permanent is hard because it has no cancellation, not because it has $n!$ terms. *([3.1](lessons/03-01-sharp-p-counting-is-harder-than-deciding.md))*
- A counting problem's approximability is decided by its **decision** version: $\#\text{DNF}$ has an FPRAS and $\#3\text{SAT}$ cannot. *([3.3](lessons/03-03-todas-theorem-and-approximate-counting.md))*
- The $7/8$ bound needs three literals over **distinct** variables; a repeated variable makes it $3/4$. *([5.4](lessons/05-04-approximation-as-a-class-apx-and-max-3sat.md))*
- Håstad's hardness is for $7/8+\varepsilon$, never for $7/8$ itself — the $\varepsilon$ is the gap between the achievable ratio and the first unachievable one. *([5.5](lessons/05-05-hardness-of-approximation.md))*
- Every hardness result here is **worst case** and **exact**: approximation, structure and small parameters are the standing escape routes. *([6.2](lessons/06-02-conditional-lower-bounds-inside-p.md))*

### Proof systems

- Soundness is quantified over **all** provers, including ones that ignore the protocol. *([4.3](lessons/04-03-interactive-proofs.md))*
- The sumcheck verifier never checks the prover's polynomial is correct — one identity per round plus a random evaluation is enough. *([4.4](lessons/04-04-arithmetization-sumcheck-and-ip-equals-pspace.md))*
- A PCP verifier's **queries** are constant; its running time is not. And the proof is polynomially long, often very. *([4.5](lessons/04-05-probabilistically-checkable-proofs.md))*
- Cook–Levin's window is $2\times3$ because a Turing machine touches one cell per step; a model that could rewrite its tape at once would break the proof. *([1.4](lessons/01-04-cook-levin-computation-is-satisfiability.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere here.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
  ASCII hyphens only — an en-dash in a heading silently breaks the slug.
- **No prose dollar signs** — write "10 dollars", not the symbol.
- Length is not capped the way a lesson's is: this is a lookup surface.

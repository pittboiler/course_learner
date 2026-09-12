# Complexity Theory · Lesson 5.4: Approximation as a class

> ⏱ ~15 min · Module 5: Circuits, approximation & the barriers · Builds on: [5.2 (Karp–Lipton)](05-02-karp-lipton-and-the-lower-bound-program.md), [`algorithms` 4.3 (approximation algorithms)](../../algorithms/lessons/04-03-approximation-algorithms.md) · Unlocks: [5.5 (hardness of approximation)](05-05-hardness-of-approximation.md)

## Why this matters

[`algorithms` 4.3](../../algorithms/lessons/04-03-approximation-algorithms.md) teaches approximation *algorithms*: the vertex-cover 2-approximation, greedy set cover, metric travelling salesman, the knapsack scheme. It teaches you to design one and certify its ratio, and it is the right course for that.

This lesson does the part that course explicitly leaves aside: approximation as a **class structure**. Once you have ratios, three questions arise that no individual algorithm answers.

**Can problems be compared?** Vertex cover and MAX-3SAT are both NP-hard exactly, so ordinary reductions cannot separate them. But one has a 2-approximation and the other does not, so there must be a finer notion of reduction — one that preserves approximability rather than just the answer. That is the L-reduction, and it gives a completeness theory for approximation.

**What are the natural tiers?** Some problems approximate to any accuracy you pay for (knapsack), some to a fixed constant and no better (vertex cover, MAX-3SAT), some to nothing constant at all (general travelling salesman). Those are PTAS, APX, and beyond, and they are genuinely different classes.

**And can randomness be removed?** MAX-3SAT's $7/8$ bound falls out of a one-line probabilistic argument, and then the method of conditional expectations makes it deterministic. That derandomization is worth doing in full, because it is the cleanest example in the course of a probabilistic existence proof converted into an algorithm — and because $7/8$ turns out to be the exact threshold, which [Lesson 5.5](05-05-hardness-of-approximation.md) proves.

## The idea

**The tiers.** For an NP-hard optimization problem, the possible levels of approximability form a short list.

- **FPTAS.** For every $\varepsilon > 0$ there is a $(1\pm\varepsilon)$-approximation running in time polynomial in the input **and** in $1/\varepsilon$. Knapsack.
- **PTAS.** The same, but the running time need only be polynomial in the input for each fixed $\varepsilon$ — $n^{1/\varepsilon}$ is allowed, and is useless at $\varepsilon = 0.01$. Euclidean travelling salesman.
- **APX.** Approximable within *some* constant factor. Vertex cover (factor 2), MAX-3SAT (factor $7/8$), metric travelling salesman (factor $3/2$).
- **Beyond.** No constant factor at all unless $\mathsf{P} = \mathsf{NP}$. General travelling salesman; set cover is $\Theta(\ln n)$.

These are strict, assuming $\mathsf{P}\ne\mathsf{NP}$: $\text{FPTAS}\subsetneq\text{PTAS}\subsetneq\text{APX}$.

**L-reductions compare approximability.** An ordinary Karp reduction preserves the yes/no answer and destroys the ratio — it can map a near-optimal solution to a terrible one. An **L-reduction** additionally promises two linear bounds: the optimum does not shrink much under the map, and the *error* does not grow much when you map a solution back. Those two bounds together mean a $\rho$-approximation for the target yields a $(1 + O(\rho - 1))$-approximation for the source, so approximability transfers.

With that notion, **MAX-3SAT is APX-complete**: every problem in APX L-reduces to it. Combined with [Lesson 5.5](05-05-hardness-of-approximation.md)'s hardness result, that single problem controls the constant-factor tier the way SAT controls NP.

**MAX-3SAT's $7/8$, in one line.** Take a 3CNF where each clause has three literals over *distinct* variables. Assign every variable independently and uniformly at random. A clause is falsified only when all three of its literals are false — exactly 1 of the 8 equally likely patterns — so

$$\Pr[\text{clause } j \text{ satisfied}] = \tfrac78.$$

By linearity of expectation, the expected number of satisfied clauses is $\tfrac78 m$, whatever the correlations between clauses. **An average of $\tfrac78 m$ means some assignment achieves at least $\tfrac78 m$**, so $\mathrm{OPT}\ge\tfrac78 m \ge \tfrac78\mathrm{OPT}$, and the random assignment is a $7/8$-approximation in expectation.

**Derandomizing: the method of conditional expectations.** The probabilistic argument proves a good assignment exists. To find one, walk down the tree of assignments always choosing the better half.

At each variable $x_i$, compute the conditional expectation of the number of satisfied clauses given the choices made so far plus $x_i = 1$, and the same for $x_i = 0$. Both are computable in polynomial time — sum over clauses, and each clause's conditional probability is $1 - 2^{-(\text{unfixed literals})}$ or 1 if already satisfied. **The parent's expectation is the average of the two children's**, so the larger child is at least the parent. Commit to it and continue.

After $n$ steps every variable is fixed, the "expectation" is the actual count, and it never dropped below its starting value of $\tfrac78 m$. No randomness was used.

## The formal version

**Definition ([approximation classes](../reference.md#approximation-classes)).** For an NP optimization problem $\Pi$:

| class | definition |
|---|---|
| $\text{FPTAS}$ | a $(1\pm\varepsilon)$-approximation in time $\mathrm{poly}(|x|, 1/\varepsilon)$ |
| $\text{PTAS}$ | for each fixed $\varepsilon$, a $(1\pm\varepsilon)$-approximation in time $\mathrm{poly}(|x|)$ |
| $\text{APX}$ | a $\rho$-approximation for some constant $\rho$, in polynomial time |

**Definition ([L-reduction](../reference.md#l-reduction)).** $\Pi \le_{L} \Pi'$ if there are polynomial-time maps $f$ (instances) and $g$ (solutions back) and constants $\alpha,\beta > 0$ with

$$\mathrm{OPT}'(f(x)) \le \alpha\,\mathrm{OPT}(x), \qquad \big|\mathrm{OPT}(x) - c(g(y))\big| \le \beta\,\big|\mathrm{OPT}'(f(x)) - c'(y)\big|$$

for every instance $x$ and every solution $y$ of $f(x)$.

*In words: the optimum does not blow up, and a solution that is nearly optimal for the target maps back to one nearly optimal for the source.*

**Proposition.** If $\Pi\le_L\Pi'$ and $\Pi'$ has a $(1+\varepsilon)$-approximation, then $\Pi$ has a $(1 + \alpha\beta\varepsilon)$-approximation. Hence APX is closed downward under $\le_L$, and APX-completeness is well-defined.

**Theorem ([MAX-3SAT is APX-complete](../reference.md#apx-completeness)).** Every problem in APX L-reduces to MAX-3SAT, and MAX-3SAT is in APX.

**Theorem ([the 7/8 bound](../reference.md#max-3sat-seven-eighths)).** For a 3CNF formula with $m$ clauses, each of three literals over distinct variables, a uniformly random assignment satisfies $\tfrac78 m$ clauses in expectation, and some assignment satisfies at least $\lceil\tfrac78 m\rceil$.

*Proof.* Let $X_j$ indicate that clause $j$ is satisfied. The three literals involve distinct variables, so their truth values are independent and uniform; the clause fails only on the single pattern making all three literals false, so $\mathbb{E}[X_j] = \Pr[X_j = 1] = 7/8$. By linearity, $\mathbb{E}\big[\sum_j X_j\big] = \tfrac78 m$ — and linearity requires **no independence between clauses**, which is what makes the argument work despite clauses sharing variables. A random variable attains at least its mean with positive probability, so some assignment satisfies at least $\tfrac78 m$ clauses, hence at least $\lceil\tfrac78 m\rceil$. $\blacksquare$

**Theorem ([derandomization](../reference.md#method-of-conditional-expectations)).** A deterministic polynomial-time algorithm finds an assignment satisfying at least $\tfrac78 m$ clauses.

*Proof.* Write $E[\alpha]$ for the expected number of satisfied clauses when the variables fixed by the partial assignment $\alpha$ are held and the rest are uniform. Then

$$E[\alpha] = \sum_{j} \Pr[\,C_j \text{ satisfied} \mid \alpha\,], \qquad \Pr[\,C_j\mid\alpha\,] = \begin{cases}1 & \alpha \text{ already satisfies } C_j\\ 1 - 2^{-k_j} & k_j \text{ literals of } C_j \text{ unfixed}\end{cases}$$

which is a sum of $m$ terms, each computable in constant time: **polynomial time.**

The key identity is that conditioning on a uniform bit averages:

$$E[\alpha] = \tfrac12 E[\alpha, x_i = 0] + \tfrac12 E[\alpha, x_i = 1],$$

so $\max\big(E[\alpha,x_i=0],\,E[\alpha,x_i=1]\big)\ge E[\alpha]$. Starting from $E[\emptyset] = \tfrac78 m$ and always taking the larger branch, the value never decreases; after $n$ steps $\alpha$ is total and $E[\alpha]$ is the exact number of satisfied clauses. $\blacksquare$

**Sharpness.** $7/8$ is not merely a good ratio but the exact threshold: Håstad showed a $(7/8 + \varepsilon)$-approximation for any $\varepsilon > 0$ is NP-hard. [Lesson 5.5](05-05-hardness-of-approximation.md) proves it from the PCP theorem.

## Picture

![A binary tree four levels deep. The root is labelled E equals seven eighths m, and edges from the root are labelled x one equals zero and x one equals one. One root-to-leaf path is drawn thick in coral, the rest in grey, and the left margin annotates the levels: E equals seven eighths m, pick the larger, and again, a full assignment.](assets/05-04-fig1.svg)

The tree is the space of assignments and the coral path is what the algorithm walks. At each level it evaluates two numbers and takes the bigger one.

**The whole argument is one identity, and it is written on the figure's structure.** The parent's expectation is the *average* of its two children's, because the variable being fixed was uniform. An average is never larger than the maximum, so the larger child is at least the parent. Applying that $n$ times, the value at the leaf is at least the value at the root, which is $\tfrac78 m$.

Notice what the algorithm never does: it never samples anything, and it never looks ahead. **The randomness is used only in the analysis, to establish the starting value $\tfrac78 m$**, and then it is discarded.

This is a general recipe, not a trick for this problem. Any probabilistic existence proof by the first-moment method can be derandomized this way, provided the conditional expectation is computable in polynomial time — which here it is, because it decomposes into a sum over clauses that each depend on a constant number of variables. **Locality is what makes the conditional expectation cheap**, and that is the same locality that made [Lesson 1.4](01-04-cook-levin-computation-is-satisfiability.md)'s tableau formula polynomial.

## Worked examples

**Example 1 (mechanical): run the derandomization.** Take three clauses over $x_1,x_2,x_3$:

$$C_1 = (x_1\vee x_2\vee x_3), \quad C_2 = (\lnot x_1\vee x_2\vee \lnot x_3), \quad C_3 = (x_1\vee\lnot x_2\vee x_3).$$

Start: $E[\emptyset] = 3\times\tfrac78 = 2.625 = \tfrac78 m$ with $m = 3$.

*Fix $x_1$.* With $x_1 = 1$: $C_1$ and $C_3$ are satisfied outright (contribution 2), $C_2$ has two unfixed literals so contributes $1 - 2^{-2} = 0.75$. Total $2.75$. With $x_1 = 0$: $C_2$ is satisfied (1), $C_1$ and $C_3$ each have two unfixed literals, contributing $0.75$ each. Total $2.5$. **Take $x_1 = 1$**, value $2.75 \ge 2.625$. ✓

*Fix $x_2$.* Given $x_1 = 1$, with $x_2 = 1$: all three clauses are satisfied ($C_1$ by $x_1$, $C_2$ by $x_2$, $C_3$ by $x_1$). Total $3$. With $x_2 = 0$: $C_1, C_3$ satisfied by $x_1$, $C_2$ has one unfixed literal $\lnot x_3$, contributing $1 - 2^{-1} = 0.5$. Total $2.5$. **Take $x_2 = 1$**, value $3$.

*Fix $x_3$.* Either value gives 3. **Take $x_3 = 1$.**

Result: $111$, satisfying all **3** clauses, comfortably above $\lceil 2.625\rceil = 3$. Check directly: $C_1$ has $x_1$ ✓, $C_2$ has $x_2$ ✓, $C_3$ has $x_1$ ✓.

Note the value **never decreased**: $2.625 \to 2.75 \to 3 \to 3$. That monotonicity is the theorem, and it is the only thing that needs checking when you run the method.

**Example 2 (why you'd care): why the tiers are genuinely different.** Both knapsack and vertex cover are NP-hard. Both have approximation algorithms. Why bother distinguishing FPTAS from APX?

Ask the question a practitioner asks: *how good an answer can I buy?*

- **Knapsack has an FPTAS.** Accuracy is a **dial**. Want within 1 percent? Set $\varepsilon = 0.01$ and pay $O(n^3/\varepsilon)$. Want 0.1 percent? Pay ten times more. The guarantee is continuous in your budget.
- **Vertex cover is in APX and not in PTAS** (assuming $\mathsf{P}\ne\mathsf{NP}$; the best known ratio is $2 - \Theta(1/\sqrt{\log n})$, and $1.36$ is NP-hard). There is **no dial.** You get roughly a factor of 2 and no amount of money buys 1.5.
- **General travelling salesman is in neither.** No constant factor exists at any price, by [`algorithms` 4.3](../../algorithms/lessons/04-03-approximation-algorithms.md)'s reduction from Hamiltonian cycle.

**The tiers answer a question the ratio alone does not: is the guarantee a parameter or a wall?** That is the practical content of the classification, and it is why "NP-hard, so we'll approximate" is an incomplete sentence — the follow-up is always *which tier*, and the three answers lead to three different engineering plans.

And there is a theoretical payoff. Because MAX-3SAT is APX-complete, showing your problem APX-hard by an L-reduction from it immediately rules out a PTAS, without any bespoke gap construction. **One completeness result, and the whole tier is settled.**

## Watch out

- **You might think** the $7/8$ analysis needs the clauses to be independent — **but actually** linearity of expectation requires no independence whatsoever. Independence is used only *within* a clause, to get $\Pr[\text{clause satisfied}] = 7/8$, and that is why the three literals must be over **distinct** variables.
- **You might think** the clause condition "three literals over distinct variables" is a technicality — **but actually** it is load-bearing. A clause $(x\vee x\vee y)$ is really a 2-clause and is satisfied with probability $3/4$, not $7/8$, and a clause $(x\vee\lnot x\vee y)$ is a tautology. The bound is exactly $7/8$ only for genuine 3-clauses.
- **You might think** a PTAS is nearly as good as an FPTAS — **but actually** a PTAS may run in $n^{1/\varepsilon}$, so $\varepsilon = 0.01$ costs $n^{100}$. The distinction is the whole difference between a tunable guarantee and a nominal one.
- **You might think** Karp reductions transfer approximability — **but actually** they preserve only the yes/no answer, and a near-optimal solution of the image can map back to an arbitrarily bad solution of the source. **L-reductions exist precisely because Karp reductions do not do this job**, exactly as parsimonious reductions exist because Karp reductions do not preserve counts ([3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md)).
- **You might think** $7/8$ is simply the best ratio anyone has found for MAX-3SAT — **but actually** it is provably optimal: Håstad showed $7/8 + \varepsilon$ is NP-hard. It is a **threshold**, met exactly from both sides, which is rare and is what makes MAX-3SAT the reference problem for the tier.

## One-liner

> A random assignment satisfies seven-eighths of the clauses in expectation, conditional expectations turn that into an algorithm, and the tiers — FPTAS, PTAS, APX — tell you whether a guarantee is a dial you can turn or a wall you cannot pass.

## Problems

**P1 (🟢)** A 3CNF formula has $m = 400$ clauses, each with three literals over distinct variables. (a) Give the expected number of clauses satisfied by a uniformly random assignment. (b) Give the guaranteed lower bound on $\mathrm{OPT}$. (c) If a clause happened to be $(x_1\vee x_1\vee x_2)$, give the probability it is satisfied and say what that does to the bound.

**P2 (🟡)** Run the method of conditional expectations on $C_1 = (x_1\vee x_2\vee x_3)$, $C_2 = (\lnot x_1 \vee \lnot x_2 \vee x_3)$, $C_3 = (x_1\vee\lnot x_2\vee\lnot x_3)$, fixing variables in index order and breaking ties toward 1. (a) Give the starting expectation. (b) Give the two conditional expectations at each of the three steps and the branch taken. (c) Give the final assignment and the number of clauses it satisfies, and confirm the value never decreased.

**P3 (🔴, optional)** This is Boss problem 5, first half. (a) Prove that a uniformly random assignment satisfies each 3-clause with probability exactly $7/8$, stating where independence is used. (b) Prove some assignment satisfies at least $\tfrac78 m$ clauses, naming the principle. (c) Prove the conditional expectation used in the derandomization is computable in polynomial time, giving the formula for a single clause's contribution.

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathbb{E} = \tfrac78 m = \tfrac78\times400 = \mathbf{350}$ clauses.

(b) Since a random variable attains at least its mean with positive probability, $\mathrm{OPT}\ge\lceil 350\rceil = \mathbf{350}$. (Here the mean is already an integer.)

(c) $(x_1\vee x_1\vee x_2)$ is logically $(x_1\vee x_2)$, a 2-clause, falsified when both $x_1$ and $x_2$ are false: probability $1/4$. So it is satisfied with probability $\mathbf{3/4}$, **below** $7/8$.

This **lowers the bound**: the expected total becomes $399\times\tfrac78 + \tfrac34 = 349.125 + 0.75 = 349.875$, so the guarantee drops to $\lceil 349.875\rceil = 350$ — coincidentally the same here, but in general a formula full of degenerate clauses gives only $\tfrac34 m$. The distinct-variables condition in the theorem is what rules this out.

**P2**

(a) $E[\emptyset] = 3\times\tfrac78 = \mathbf{2.625}$.

(b) A clause already satisfied contributes 1; otherwise it contributes $1 - 2^{-k}$ with $k$ unfixed literals.

*Step 1, fixing $x_1$.*

- $x_1 = 1$: $C_1$ satisfied (1); $C_3$ satisfied (1); $C_2$ has $\lnot x_1$ false, leaving $\lnot x_2, x_3$ unfixed, so $1 - 2^{-2} = 0.75$. Total $\mathbf{2.75}$.
- $x_1 = 0$: $C_2$ satisfied (1); $C_3$ has $x_1$ false, leaving $\lnot x_2,\lnot x_3$, so $0.75$; $C_1$ has $x_1$ false, leaving $x_2,x_3$, so $0.75$. Total $\mathbf{2.5}$.

**Take $x_1 = 1$** (value 2.75).

*Step 2, fixing $x_2$ given $x_1 = 1$.*

- $x_2 = 1$: $C_1, C_3$ already satisfied by $x_1$ (2); $C_2$ now has $\lnot x_1$ and $\lnot x_2$ both false, leaving $x_3$, so $1 - 2^{-1} = 0.5$. Total $\mathbf{2.5}$.
- $x_2 = 0$: $C_1$ satisfied (1); $C_3$ satisfied (1); $C_2$ satisfied by $\lnot x_2$ (1). Total $\mathbf{3}$.

**Take $x_2 = 0$** (value 3).

*Step 3, fixing $x_3$ given $x_1=1, x_2=0$.* All three clauses are already satisfied, so both branches give $\mathbf{3}$. Tie broken toward 1: **take $x_3 = 1$.**

(c) Assignment $\mathbf{101}$, satisfying **all 3** clauses. Check: $C_1$ has $x_1$ ✓; $C_2$ has $\lnot x_2$ ✓; $C_3$ has $x_1$ ✓.

The values were $2.625 \to 2.75 \to 3 \to 3$: **never decreased**, as the averaging identity guarantees.

**P3**

(a) Let $C = (\ell_1\vee\ell_2\vee\ell_3)$ with the three literals over **distinct** variables $x_a, x_b, x_c$. Under a uniform random assignment these three variables are independent and uniform, so the triple $(\ell_1,\ell_2,\ell_3)$ of truth values is uniform over $\{0,1\}^3$ — **this is where independence is used, and only here.** The clause is false exactly on the single pattern $(0,0,0)$, so

$$\Pr[C\text{ satisfied}] = 1 - \tfrac18 = \tfrac78. \qquad\blacksquare$$

If two literals shared a variable the triple would not be uniform on $\{0,1\}^3$ and the count of bad patterns would change.

(b) Let $X = \sum_{j=1}^m X_j$ with $X_j$ the indicator that clause $j$ is satisfied. By **linearity of expectation** — which needs no independence between the $X_j$, and this is essential since clauses share variables —

$$\mathbb{E}[X] = \sum_{j=1}^m \mathbb{E}[X_j] = \tfrac78 m.$$

The principle finishing the argument is the **first-moment method** (equivalently, the probabilistic method or simply the pigeonhole fact that a random variable cannot always be below its mean): $\Pr[X \ge \mathbb{E}[X]] > 0$, so some assignment satisfies at least $\tfrac78 m$ clauses, hence at least $\lceil\tfrac78 m\rceil$ since $X$ is an integer. $\blacksquare$

(c) Let $\alpha$ be a partial assignment. Then

$$E[\alpha] \;=\; \sum_{j=1}^m \Pr[\,C_j\text{ satisfied}\mid\alpha\,], \qquad \Pr[\,C_j\mid\alpha\,] = \begin{cases} 1 & \text{if some literal of } C_j \text{ is true under } \alpha,\\[2pt] 1 - 2^{-k_j} & \text{otherwise, with } k_j \text{ unfixed literals}. \end{cases}$$

Computing one term requires scanning the clause's three literals and checking them against $\alpha$: $O(1)$ work. Summing over $m$ clauses gives $O(m)$ per evaluation, and the algorithm performs $2n$ evaluations (two per variable), so the total is $O(nm)$ — **polynomial.** $\blacksquare$

The reason this is cheap is that each clause depends on only three variables, so conditioning factorizes clause by clause. For an objective whose terms depended on many variables at once, the conditional expectation could itself be hard to compute and the method would not apply.

</details>

## Flashback

**From Lesson 5.2 (circuits as the road to P vs NP):** (a) State the Karp–Lipton theorem. (b) Give the contrapositive and say what it would take to prove SAT has no polynomial-size circuits. (c) State the best circuit-size lower bound known for any explicit function, and name one restricted circuit class where an exponential bound *is* known.

<details>
<summary>Solution</summary>

(a) **If $\mathsf{NP}\subseteq\mathsf{P/poly}$ then $\mathsf{PH} = \Sigma_2^p$** — the polynomial hierarchy collapses to its second level.

(b) The contrapositive: **if $\mathsf{PH}\ne\Sigma_2^p$ — in particular if the hierarchy is infinite — then $\mathsf{NP}\not\subseteq\mathsf{P/poly}$**, so SAT has no polynomial-size circuits.

To prove SAT has no small circuits by this route you would have to prove the hierarchy does not collapse to the second level, for instance $\Sigma_2^p\ne\Sigma_3^p$ — itself a major open problem, and one that would in particular give $\mathsf{P}\ne\mathsf{NP}$. So the implication is useful mainly in the other direction, as evidence rather than as a proof strategy.

(c) The best general lower bound for an explicit function is about **$5n$ gates** — linear. An exponential bound *is* known for **constant-depth unbounded-fan-in circuits** ($\mathsf{AC}^0$): parity requires size $2^{\Omega(n^{1/(d-1)})}$ at depth $d$. **Monotone circuits** are the other case, where CLIQUE requires exponential size (Razborov).

</details>

## Connections

- **Backward:** the algorithms being classified are [`algorithms` 4.3](../../algorithms/lessons/04-03-approximation-algorithms.md)'s, and the L-reduction exists for the same reason [3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md)'s parsimonious reduction does — a Karp reduction preserves the answer and nothing else, so each finer question needs a finer reduction.
- **Forward:** [5.5](05-05-hardness-of-approximation.md) proves the matching upper barrier, showing $7/8$ is exactly optimal and that the PCP theorem is where such statements come from.
- **Sideways:** the method of conditional expectations is the standard derandomization of the first-moment method, which [`graph-theory` 5.3](../../graph-theory/lessons/05-03-extremal-ramsey.md) uses to prove Ramsey-type bounds non-constructively; turning those existence proofs into algorithms is the same move made here, and works under the same condition that the conditional expectation be cheap.

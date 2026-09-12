# Complexity Theory · Lesson 5.2: Circuits as the road to P vs NP

> ⏱ ~15 min · Module 5: Circuits, approximation & the barriers · Builds on: [5.1 (Boolean circuits and P/poly)](05-01-boolean-circuits-and-p-poly.md), [2.2 (the polynomial hierarchy)](02-02-the-polynomial-hierarchy.md) · Unlocks: [5.6 (the barriers)](05-06-relativization-natural-proofs-algebrization.md)

## Why this matters

[Lesson 5.1](05-01-boolean-circuits-and-p-poly.md) ended on an odd note: circuits are the best hope for a lower bound, yet $\mathsf{P/poly}$ contains undecidable languages. How can a model that strong be useful for proving something hard?

The answer is the shape of the argument. Nobody wants to show a problem is *outside* $\mathsf{P/poly}$ because $\mathsf{P/poly}$ is small — it is not. They want it because $\mathsf{P}\subseteq\mathsf{P/poly}$, so

$$\text{SAT} \notin \mathsf{P/poly} \;\Longrightarrow\; \text{SAT}\notin\mathsf{P} \;\Longrightarrow\; \mathsf{P}\ne\mathsf{NP}.$$

**Proving a circuit lower bound is a sufficient route to P versus NP, and it is a route through finite combinatorics rather than through machines.** No clock, no tape, no infinite family of inputs to reason about at once — just a graph of gates you can count, restrict, and attack algebraically.

And the hypothesis being refuted is *weaker* than $\mathsf{P} = \mathsf{NP}$, which sounds like it should make it easier. Karp–Lipton is the theorem showing that even this weaker hypothesis has a dramatic consequence: **if NP has polynomial-size circuits, the polynomial hierarchy collapses to its second level.** That is the theorem this lesson proves, and it is the reason "otherwise PH collapses" is the standard closing move of a complexity paper.

## The idea

**The programme, stated plainly.** Find an explicit function in NP and prove it needs superpolynomial circuits. Done correctly, that separates P from NP. Everyone has been trying since the 1970s.

**What has actually been achieved** is worth laying out honestly, because it is both impressive and far short.

- **Bounded depth.** Parity requires exponential-size $\mathsf{AC}^0$ circuits — constant depth with unbounded fan-in (Furst–Saxe–Sipser, Håstad). A genuine exponential lower bound, for a restricted circuit class.
- **Monotone circuits.** CLIQUE requires exponential-size circuits built from AND and OR with **no NOT gates** (Razborov, 1985). Also exponential, also restricted.
- **General circuits.** The best lower bound for any explicit function is about $5n$ gates. **Linear.** Not $n^{1.01}$, not $n\log n$ — linear.

The distance between "exponential, for restricted circuits" and "linear, for general circuits" is the whole difficulty, and it is not an accident. Razborov himself showed that his monotone technique cannot extend to general circuits, and [Lesson 5.6](05-06-relativization-natural-proofs-algebrization.md)'s natural-proofs barrier explains the general obstruction.

**Karp–Lipton, and why it works.** Suppose $\mathsf{NP}\subseteq\mathsf{P/poly}$, so SAT has polynomial-size circuits $\{C_n\}$. We want to show $\Pi_2^p\subseteq\Sigma_2^p$, which by [Lesson 2.2](02-02-the-polynomial-hierarchy.md) collapses PH to $\Sigma_2^p$.

Take a $\Pi_2^p$ statement $\forall y\,\exists z\,\varphi(x,y,z)$. The inner $\exists z$ is an NP question about $(x,y)$, so under the hypothesis some circuit answers it. The natural move is: *there exists* a circuit $C$ such that *for all* $y$, $C$ says yes. That is $\Sigma_2^p$ — exactly what we want.

**But there is a hole, and closing it is the actual content.** A guessed circuit might be wrong. The $\exists C$ quantifier can be satisfied by a circuit that lies, saying "satisfiable" for every input, and nothing so far checks it.

The fix is **self-reducibility** from [Lesson 1.6](01-06-ladner-self-reducibility-search-vs-decision.md). A circuit claiming to decide SAT can be used to *construct* a satisfying assignment, one variable at a time, with $n$ queries. Then check the assignment directly. A lying circuit produces an assignment that fails the check, and is caught. **The verification is what makes the guessed circuit trustworthy**, and it is available only because SAT is self-reducible.

## The formal version

**Theorem ([Karp-Lipton](../reference.md#karp-lipton-theorem)).** If $\mathsf{NP}\subseteq\mathsf{P/poly}$ then $\mathsf{PH} = \Sigma_2^p$.

*Proof.* It suffices to show $\Pi_2^p\subseteq\Sigma_2^p$, since [Lesson 2.2](02-02-the-polynomial-hierarchy.md)'s collapse theorem then gives $\mathsf{PH} = \Sigma_2^p$.

Let $A\in\Pi_2^p$, so $x\in A \iff \forall y\,\exists z\,\varphi(x,y,z)$ with $\varphi$ polynomial-time and $|y|,|z|$ polynomially bounded. For fixed $x,y$ the inner claim $\exists z\,\varphi(x,y,z)$ is an NP predicate; by Cook–Levin ([1.4](01-04-cook-levin-computation-is-satisfiability.md)) it reduces to a SAT instance $\psi_{x,y}$ of polynomial size.

Under the hypothesis SAT has polynomial-size circuits, so there is a circuit $C$ of size $\mathrm{poly}$ that decides satisfiability of formulas of that size. Now claim:

$$x \in A \iff \exists C \text{ of polynomial size } \forall y\ \Big[\text{the self-reduction using } C \text{ on } \psi_{x,y} \text{ yields a satisfying assignment}\Big].$$

*($\Rightarrow$)* If $x\in A$, take $C$ to be a correct SAT circuit. For every $y$ the formula $\psi_{x,y}$ is satisfiable, and the self-reduction of [1.6](01-06-ladner-self-reducibility-search-vs-decision.md) — set each variable in turn to the value $C$ says keeps the formula satisfiable — outputs a genuine satisfying assignment, which the final check confirms.

*($\Leftarrow$)* If the right-hand side holds, then for every $y$ the procedure outputs an assignment **which is then verified directly against $\psi_{x,y}$**. A verified assignment proves $\psi_{x,y}$ satisfiable regardless of whether $C$ was honest, so $\exists z\,\varphi(x,y,z)$ holds for every $y$, that is, $x\in A$.

The right-hand side is $\exists\forall$ over polynomially long strings with a polynomial-time matrix (running the $n$-step self-reduction and the final check). So $A\in\Sigma_2^p$. $\blacksquare$

**Corollary ([the contrapositive](../reference.md#karp-lipton-contrapositive)).** If $\mathsf{PH}$ is infinite — in particular if $\Sigma_2^p \ne \Sigma_3^p$ — then $\mathsf{NP}\not\subseteq\mathsf{P/poly}$, so SAT requires superpolynomial circuits.

**Theorem ([the restricted lower bounds that exist](../reference.md#circuit-lower-bounds)).**

| class | function | bound | year |
|---|---|---|---|
| $\mathsf{AC}^0$ (constant depth, unbounded fan-in) | PARITY | $2^{\Omega(n^{1/(d-1)})}$ at depth $d$ | 1986 (Håstad) |
| monotone circuits (no NOT) | CLIQUE | $2^{\Omega(\sqrt{k})}$ | 1985 (Razborov) |
| general circuits | any explicit function | $\approx 5n$ | — |

**Why the restrictions matter.** Razborov showed shortly after his monotone result that the *same technique* gives only polynomial bounds for the matching problem, which is in $\mathsf{P}$ — so the method distinguishes monotone circuits from general ones and cannot be pushed. That was the first clear sign that the difficulty was structural rather than a matter of effort, and it prefigured the natural-proofs barrier of [5.6](05-06-relativization-natural-proofs-algebrization.md).

## Picture

![On the left, three stacked boxes joined by downward arrows: NP is contained in P/poly, then by Karp-Lipton, PH collapses to Sigma two, then by contrapositive, PH is infinite implies NP has no small circuits. On the right, a column of text setting out the lower-bound programme — prove SAT needs superpolynomial circuits, then NP is not in P/poly, and since P is in P/poly, P is not NP — followed by a summary of what is actually proved.](assets/05-02-fig1.svg)

The left column is the theorem and its use. Read it downward for the theorem, upward for the research programme.

The right column is the honest accounting, and the last line is the one to sit with. **For general circuits, nothing above $5n$ has ever been proved for an explicit function** — while the counting argument of [5.1](05-01-boolean-circuits-and-p-poly.md) says almost every function needs $2^n/n$. The gap between what is true of almost everything and what can be shown of anything nameable is the subject's central embarrassment.

Notice also what the two restricted successes have in common. Both work by exploiting a *structural limitation* of the circuit class — bounded depth means a random restriction simplifies the circuit drastically, and monotonicity means the circuit cannot use cancellation. **A general circuit has neither limitation, and no analogous handle has been found.**

The arrow from Karp–Lipton to the programme is worth reading carefully in one respect: it says a circuit lower bound *suffices*, not that it is necessary. $\mathsf{P}\ne\mathsf{NP}$ is consistent with SAT having small circuits, since $\mathsf{P/poly}$ is non-uniform. The programme aims at a stronger conclusion because the stronger one is easier to attack.

## Worked examples

**Example 1 (mechanical): trace the self-reduction inside the proof.** The Karp–Lipton argument needs the guessed circuit to be verifiable. Here is that step on a concrete formula.

Suppose $\psi = (x_1\vee x_2)\wedge(\lnot x_1\vee x_3)\wedge(\lnot x_2\vee\lnot x_3)$ and we have a circuit $C$ claiming to decide SAT.

| step | question put to $C$ | $C$ answers | commit |
|---|---|---|---|
| 1 | is $\psi|_{x_1=1}$ satisfiable? | yes | $x_1 = 1$ |
| 2 | is $\psi|_{x_1=1,x_2=1}$ satisfiable? | no | $x_2 = 0$ |
| 3 | is $\psi|_{x_1=1,x_2=0,x_3=1}$ satisfiable? | yes | $x_3 = 1$ |

The procedure outputs $101$, and then **evaluates $\psi$ at $101$ directly**: $(x_1\vee x_2)$ has $x_1$ ✓, $(\lnot x_1\vee x_3)$ has $x_3$ ✓, $(\lnot x_2\vee\lnot x_3)$ has $\lnot x_2$ ✓. Verified.

Now suppose $C$ had lied at step 2, answering "yes". The procedure would commit $x_2 = 1$, and at step 3 both settings of $x_3$ fail, so it outputs some assignment like $111$ — which the final check rejects, since $(\lnot x_2\vee\lnot x_3)$ is false. **The lie is caught by the check, not by auditing the circuit**, and that is exactly what lets the proof quantify existentially over circuits it cannot trust.

**Example 2 (why you'd care): reading "otherwise PH collapses" correctly.** This phrase closes a large fraction of complexity papers. What does it actually license?

It is **not** a proof. PH has never been shown to be infinite, and if $\mathsf{P} = \mathsf{NP}$ then PH collapses to $\mathsf{P}$ and every such argument is vacuous.

It is a statement of the form *"if $X$ then a thing almost everyone believes false"*. Its force comes from the belief, not the logic, and the belief in an infinite PH is itself grounded in the failure of every attempt to collapse it plus oracle results showing PH is infinite relative to a random oracle.

**The practical reading: a collapse consequence tells you that proving $X$ would be a much bigger result than $X$ itself.** If you set out to show NP has polynomial-size circuits, Karp–Lipton says you are also going to collapse the hierarchy — so you had better be prepared for a theorem of that magnitude, and if your argument is short, it is probably wrong.

You have now seen three instances of the same move at three levels:

| hypothesis | consequence | lesson |
|---|---|---|
| an NP-complete problem is in $\mathsf{coNP}$ | $\mathsf{NP} = \mathsf{coNP}$ | [2.1](02-01-conp-and-the-shape-of-np.md) |
| an NP-complete problem is in $\mathsf{coAM}$ | PH collapses to $\Sigma_2^p$ | [4.3](04-03-interactive-proofs.md) |
| $\mathsf{NP}\subseteq\mathsf{P/poly}$ | PH collapses to $\Sigma_2^p$ | this lesson |

**Three different hypotheses, one argumentative pattern**, and together they are essentially the whole toolkit for "this problem is probably not NP-complete" and "this class is probably not that one".

## Watch out

- **You might think** Karp–Lipton's proof can guess a circuit and use it — **but actually** a guessed circuit may lie, and the existential quantifier gives an adversary the chance to supply a liar. Self-reducibility plus a final check is what closes the hole, and the theorem does not go through without it.
- **You might think** proving $\mathsf{NP}\not\subseteq\mathsf{P/poly}$ is the same as proving $\mathsf{P}\ne\mathsf{NP}$ — **but actually** it is strictly stronger: it implies $\mathsf{P}\ne\mathsf{NP}$ and is not implied by it, since $\mathsf{P}\ne\mathsf{NP}$ leaves SAT free to have small non-uniform circuits.
- **You might think** the exponential bounds for $\mathsf{AC}^0$ and monotone circuits are steps toward the general case — **but actually** both techniques are known to break: Razborov showed his monotone method gives only polynomial bounds for a problem in $\mathsf{P}$, so it cannot separate classes in general.
- **You might think** the $5n$ barrier reflects a lack of effort — **but actually** the natural-proofs barrier of [5.6](05-06-relativization-natural-proofs-algebrization.md) shows that any lower-bound argument with two mild and very common properties would break cryptography. The obstruction is a theorem, not a shortage of ideas.
- **You might think** a collapse consequence refutes its hypothesis — **but actually** it only makes it expensive. "PH collapses" is not a contradiction; it is an outcome nobody expects, and every argument of this form is conditional on that expectation.

## One-liner

> A circuit lower bound would separate P from NP, and Karp–Lipton says even the weaker hypothesis that NP has small circuits would flatten the polynomial hierarchy — which is why "otherwise PH collapses" is the standard way to say "probably not".

## Problems

**P1 (🟢)** Using a circuit $C$ that claims to decide SAT, run the self-reduction on $\psi = (x_1\vee x_2)\wedge(\lnot x_1\vee x_3)\wedge(\lnot x_2\vee \lnot x_3)$, assuming $C$ answers honestly and the procedure tries 1 before 0. (a) Give the query table. (b) Give the assignment found and verify it. (c) State what the procedure does if $C$ lies at the first query, and which step catches it.

**P2 (🟡)** For each statement, say whether it follows from Karp–Lipton, contradicts it, or is independent, with a one-clause reason.

(a) If $\mathsf{P} = \mathsf{NP}$ then $\mathsf{NP}\subseteq\mathsf{P/poly}$.
(b) If $\mathsf{NP}\subseteq\mathsf{P/poly}$ then $\mathsf{P} = \mathsf{NP}$.
(c) If $\Sigma_2^p\ne\Sigma_3^p$ then SAT has no polynomial-size circuits.
(d) $\mathsf{P}\ne\mathsf{NP}$ implies SAT has no polynomial-size circuits.

**P3 (🔴, optional)** (a) State precisely where the Karp–Lipton proof uses self-reducibility, and give the number of circuit queries per value of $y$ for a formula on $n$ variables. (b) Suppose SAT were **not** self-reducible but still had polynomial-size circuits. Explain in two sentences what would go wrong with the proof. (c) Karp–Lipton is stated for $\mathsf{NP}\subseteq\mathsf{P/poly}$. State what the analogous hypothesis and conclusion would be for $\mathsf{PSPACE}$, and name the property of TQBF that makes the same proof work.

<details>
<summary>Solutions</summary>

**P1**

(a) The satisfying assignments of $\psi$ are $010$ and $101$, but the procedure sees only the circuit's answers.

| query | question | honest answer | commit |
|---|---|---|---|
| 1 | $\psi|_{x_1=1}$ satisfiable? | yes ($101$ works) | $x_1 = 1$ |
| 2 | $\psi|_{x_1=1,x_2=1}$ satisfiable? | no | $x_2 = 0$ |
| 3 | $\psi|_{x_1=1,x_2=0,x_3=1}$ satisfiable? | yes | $x_3 = 1$ |

Query 2 answers no because $x_1 = 1$ forces $x_3 = 1$ via $(\lnot x_1 \vee x_3)$, and $x_2 = 1$ with $x_3 = 1$ falsifies $(\lnot x_2\vee\lnot x_3)$.

(b) Assignment $\mathbf{101}$. Verify: $(x_1\vee x_2)$ has $x_1$ ✓; $(\lnot x_1\vee x_3)$ has $x_3$ ✓; $(\lnot x_2\vee\lnot x_3)$ has $\lnot x_2$ ✓.

(c) A lie at query 1 means $C$ answers **no**, so the procedure commits $x_1 = 0$ and continues on $\psi|_{x_1=0}$. That branch happens to be satisfiable too, by $010$, so the procedure still emerges with a valid assignment and the check passes.

The lesson is that **the final verification is the only thing the proof relies on**, and it is enough. Whatever assignment the procedure emits is checked against $\psi$ directly: if it satisfies $\psi$, satisfiability is proved regardless of how the circuit behaved along the way; if it does not, the whole branch is rejected. A lie is fatal to the circuit only when it steers the search into an unsatisfiable region, and that is exactly the case the check catches.



**P2**

(a) **Follows**, though not from Karp–Lipton — from [5.1](05-01-boolean-circuits-and-p-poly.md)'s $\mathsf{P}\subseteq\mathsf{P/poly}$. If $\mathsf{P} = \mathsf{NP}$ then $\mathsf{NP} = \mathsf{P}\subseteq\mathsf{P/poly}$.

(b) **Independent.** Karp–Lipton concludes a hierarchy collapse, not $\mathsf{P} = \mathsf{NP}$. Non-uniform circuits could decide SAT without any algorithm existing — the unary undecidable language of [5.1](05-01-boolean-circuits-and-p-poly.md) shows small circuits do not imply algorithms.

(c) **Follows**, and this is the contrapositive. If $\mathsf{NP}\subseteq\mathsf{P/poly}$ then $\mathsf{PH} = \Sigma_2^p$, which in particular gives $\Sigma_2^p = \Sigma_3^p$. So $\Sigma_2^p\ne\Sigma_3^p$ forces $\mathsf{NP}\not\subseteq\mathsf{P/poly}$, that is, SAT has no polynomial-size circuits.

(d) **Independent.** This is (b) turned around: $\mathsf{P}\ne\mathsf{NP}$ says no *algorithm* decides SAT quickly, and says nothing about a non-uniform circuit family. Proving SAT has no small circuits is strictly stronger.

**P3**

(a) Self-reducibility is used in the $\Sigma_2^p$ formula's matrix — in the step that converts the guessed circuit $C$ from an *oracle answering yes/no* into a *producer of an assignment*. Without it, $C$'s answer is an unverifiable bit; with it, $C$'s answers drive a search that ends in a concrete object the verifier checks directly.

For a formula on $n$ variables, the self-reduction makes exactly **$n$ queries** to $C$, one per variable ([Lesson 1.6](01-06-ladner-self-reducibility-search-vs-decision.md)), plus a single polynomial-time evaluation at the end.

(b) Without self-reducibility the proof would have to trust $C$'s bit directly, and the existential quantifier $\exists C$ would be satisfiable by a circuit that answers "satisfiable" to everything. That circuit would make the $\forall y$ clause hold vacuously even when $x\notin A$, so the ($\Leftarrow$) direction of the equivalence would fail and the formula would define a strictly larger language.

(c) The analogous statement is **Karp–Lipton for PSPACE**: if $\mathsf{PSPACE}\subseteq\mathsf{P/poly}$ then $\mathsf{PSPACE} = \Sigma_2^p$ (and in fact $\mathsf{PSPACE} = \mathsf{MA}$, a sharper form).

The enabling property is that **TQBF is self-reducible** in the same downward sense: a quantified formula $Q_1x_1\cdots Q_nx_n\,\varphi$ reduces to two instances with one fewer variable, obtained by substituting $x_1 = 0$ and $x_1 = 1$, and the outer quantifier says whether to take the OR or the AND of the answers. A circuit claiming to decide TQBF can therefore be used to *construct* a winning strategy one move at a time, and the resulting play can be checked against $\varphi$ directly — the same verification that makes the NP version work.

</details>

## Flashback

**From Lesson 5.1 (Boolean circuits & P/poly):** (a) A language is decided in time $t(n) = 2n^2 + n$. Give its circuit-size bound in $O$ notation and the number of tableau cells at $n = 30$. (b) Give a language in $\mathsf{P/poly}$ that is not decidable, together with its circuit size. (c) State the largest circuit size below which the counting argument shows most Boolean functions on $n$ inputs cannot fit.

<details>
<summary>Solution</summary>

(a) $t(n) = O(n^2)$, so the tableau is $t\times t$ and the circuit has size $O(t^2) = \mathbf{O(n^4)}$. At $n = 30$: $t = 2\cdot900 + 30 = 1830$ steps, so $t^2 = \mathbf{3{,}348{,}900}$ cells, each needing a constant-size circuit.

(b) Let $S\subseteq\mathbb{N}$ be undecidable — the halting set, say — and take $U = \{1^n : n\in S\}$. Each input length contains exactly one string, so $C_n$ is a constant circuit of size $\mathbf{O(1)}$. $U$ is undecidable, so $U \in \mathsf{P/poly}\setminus\mathsf{P}$.

(c) Shannon's bound: below size $\mathbf{2^n/(2n)}$ there are fewer circuits than Boolean functions, so all but a $2^{-\Omega(2^n)}$ fraction of functions require circuits at least that large. The argument is a pigeonhole count and names no function — which is precisely the gap this lesson's programme has been unable to close, with the best explicit bound still around $5n$.

</details>

## Connections

- **Backward:** the hypothesis being refuted is [5.1](05-01-boolean-circuits-and-p-poly.md)'s $\mathsf{P/poly}$, the collapse machinery is [2.2](02-02-the-polynomial-hierarchy.md)'s, and the self-reduction that makes a guessed circuit trustworthy is [1.6](01-06-ladner-self-reducibility-search-vs-decision.md)'s search-to-decision procedure used for a completely different purpose.
- **Forward:** [5.6](05-06-relativization-natural-proofs-algebrization.md) explains why the programme has stalled at $5n$ — the natural-proofs barrier says a lower-bound technique with two very common properties would break cryptography. [5.3](05-03-nc-parallelism-and-p-completeness.md) measures the same circuits by depth and gets a question about parallelism with the same open status.
- **Sideways:** the monotone lower bound for CLIQUE is an extremal combinatorics argument — Razborov's method of approximations replaces a circuit's gates by set systems and bounds the error, which is the same "approximate the object, bound the discrepancy" strategy as the probabilistic method in [`graph-theory` 5.3](../../graph-theory/lessons/05-03-extremal-ramsey.md).

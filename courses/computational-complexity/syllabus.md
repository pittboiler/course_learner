# Complexity Theory — Syllabus

> Computer Science · Tier 2 · 28 lessons · Prereqs: [theory-of-computation](../theory-of-computation/syllabus.md) · Roadmap id: `computational-complexity`

## Goal

You already know *what* is computable — Turing machines, decidability, reductions. This course is about *how much it costs*: time, space, randomness, counting, interaction and non-uniform hardware as measurable resources, and the classes that sort problems by how much of each they demand. You will be able to prove a separation from a hierarchy theorem, reconstruct Cook–Levin, place a problem in the polynomial hierarchy by counting its quantifier alternations, prove things PSPACE- and NL-complete, count as well as decide, follow arithmetization from the sumcheck protocol to IP = PSPACE, use the PCP theorem to rule out an approximation ratio, and say precisely which proof techniques the barrier results have already ruled out.

### Scope discipline

Two built courses already own the introductory half of this material, and both explicitly hand the rest here. This course **cites rather than re-derives** what they own.

| Topic | Owner | What this course does instead |
|---|---|---|
| P and NP as ideas; verifier/certificate; "NP is not not-polynomial" | [`theory-of-computation` 4.4](../theory-of-computation/lessons/04-04-a-first-look-at-p-vs-np.md), [`algorithms` 4.1](../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) | 1.2 proves the verifier and nondeterministic-machine definitions equivalent *as machines*, and develops NTIME and the exponential-time simulation |
| Karp reductions, the direction rule, the four-obligation template | [`algorithms` 4.1](../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md)–[4.2](../algorithms/lessons/04-02-the-np-complete-zoo.md) | 1.5 is about reductions that *break* — the failure modes, non-parsimonious maps, and the padding and gadget tricks the zoo does not need |
| 3SAT → Independent Set → Vertex Cover → Clique | [`algorithms` 4.2](../algorithms/lessons/04-02-the-np-complete-zoo.md) | cited as known; 1.5 works the arithmetic reductions (SUBSET-SUM, 3-PARTITION) and 3.2 redoes the chain *parsimoniously* for counting |
| Approximation ratio; vertex cover 2-approx, greedy set cover, metric TSP, knapsack FPTAS | [`algorithms` 4.3](../algorithms/lessons/04-03-approximation-algorithms.md) | 5.4 treats approximability as a **class structure** (APX, PTAS, FPTAS as classes; L-reductions) and adds randomized rounding + derandomization |
| Randomized *algorithms* — Karger, randomized quicksort, Monte Carlo vs Las Vegas | [`algorithms` 4.4](../algorithms/lessons/04-04-randomized-algorithms.md) | 4.1–4.2 define the **classes** BPP, RP, coRP, ZPP and place them |
| The RSA/factoring hardness assumption, zero knowledge as a protocol | [`cryptography`](../cryptography/syllabus.md) 3.x, 4.4 | 4.3 treats interaction as a complexity resource; zero knowledge appears only as a one-line pointer |
| BQP and the quantum landscape | [`quantum-computing` 6.1](../quantum-computing/lessons/06-01-bqp-and-the-complexity-landscape.md) | 2.6's class map places BQP by citation; no quantum machinery is developed here |

Deliberately skipped: proof complexity, the algebraic-circuit world (VP/VNP beyond a mention), and the technical interior of the PCP theorem's proof. This is the map, not the expedition.

### How problems and answers work here

Every problem resolves to something the web app can self-grade against its solution block: **a number, a class name with its named reason, a yes/no with the witness that settles it, a short table, an explicit small instance, or a hand derivation you can photograph.** Reductions and proofs are the core skill of this subject and they do not have unique answers, so **every problem whose correct answers are not unique opens its solution with a one-line accept criterion** before the worked exemplar. Nothing asks you to "draw" anything; diagrams appear in lessons, never as the deliverable.

## Dangerous Checklist

When you finish, you can:

- [ ] Define TIME and SPACE classes precisely and argue why the choice of machine model barely moves them
- [ ] Prove a separation from the time or space hierarchy theorem, and say exactly why the same diagonalization does not settle P vs NP
- [ ] Reconstruct the logic of the Cook–Levin theorem: why every NP computation is a satisfiability question
- [ ] Diagnose a broken reduction — wrong direction, missing converse, exponential blow-up, or a numeric gadget that carries
- [ ] Explain what Ladner's theorem says exists, and turn a decision oracle into a search algorithm by self-reducibility
- [ ] Locate a problem in the polynomial hierarchy by counting its quantifier alternations, and state what a collapse would mean
- [ ] Apply Savitch's theorem and explain why nondeterminism is nearly free for space but Immerman–Szelepcsényi is still a surprise
- [ ] Prove a language PSPACE-complete or NL-complete using the right reduction notion (poly-time vs logspace)
- [ ] Separate counting from deciding: place a problem in #P, prove #P-completeness, and say why the permanent is hard while the determinant is easy
- [ ] Classify a randomized algorithm as RP, coRP, ZPP or BPP from its error profile, and amplify its success probability with a bound you can compute
- [ ] Run the sumcheck protocol by hand and explain how arithmetization buys IP = PSPACE
- [ ] State the PCP theorem and use it to derive a hardness-of-approximation result
- [ ] Read a circuit-size claim, place a language in or out of P/poly, and explain the Karp–Lipton consequence
- [ ] Name the three barriers and say which proof technique each one kills
- [ ] Use ETH and SETH to derive a conditional lower bound, including one *inside* P

## Modules

### Module 1: Time, hierarchy & NP-completeness

The engine room. How to measure time, the one kind of separation we actually know how to prove, the bootstrap that produces the first NP-complete problem, and the structure of NP below completeness.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Time, the model & the class P | Define TIME(f) and P, and argue both are robust to the machine model | multitape TM recap, asymptotic cost, linear speedup, simulation overhead, Cobham–Edmonds thesis |
| 1.2 | NP, NTIME & nondeterministic time | Prove the verifier and nondeterministic-machine definitions are the same class | NTIME(f), certificate↔computation-path correspondence, NTIME(t) ⊆ TIME(2^{O(t)}), EXP, why P ⊊ EXP matters |
| 1.3 | The hierarchy theorems | Prove that more time buys more power, and see exactly where the technique stops | diagonalization with a clock, space-constructible and time-constructible functions, TIME and SPACE hierarchies, P ⊊ EXP, NL ⊊ PSPACE |
| 1.4 | Cook–Levin: computation is satisfiability | Follow why SAT is NP-complete | encoding a computation as a tableau, local consistency windows, the formula's size budget, 3SAT NP-completeness |
| 1.5 | Reduction craft & how reductions break | Build arithmetic reductions and diagnose broken ones | SUBSET-SUM and 3-PARTITION with no-carry number gadgets, padding, the four failure modes, strong vs weak NP-hardness |
| 1.6 | Ladner, self-reducibility & search vs decision | Explain what sits strictly between P and NP-complete, and get the object from the oracle | Ladner's theorem by delayed diagonalization, downward self-reducibility, search-to-decision for SAT, why the decision framing loses nothing |

**Boss problem 1:** Prove that DOUBLE-SAT $= \{\langle\varphi\rangle : \varphi$ is a Boolean formula with at least two satisfying assignments$\}$ is NP-complete. Give the NP certificate explicitly, then reduce from SAT with a one-variable padding gadget and prove both directions of correctness. Then explain why the *same* reduction fails to be parsimonious, and what that costs you in Module 3.

### Module 2: Space complexity & the polynomial hierarchy

Trade the clock for the tape. Space behaves differently from time — nondeterminism is almost free, complementation is easy, and quantified games live exactly at PSPACE. First we finish the NP story upward into the hierarchy, then descend into space.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | coNP & the shape of NP | Distinguish NP from coNP and explain what NP∩coNP means | complement classes, TAUTOLOGY, why NP=coNP is open, factoring in NP∩coNP, NP-complete ⇒ not in coNP unless collapse |
| 2.2 | The polynomial hierarchy | Read a problem's place in PH from its quantifier alternations | $\Sigma_k^p/\Pi_k^p$, alternating quantifiers, the oracle definition, MIN-FORMULA, collapse theorems |
| 2.3 | Space as a resource & Savitch | Define L and PSPACE and prove nondeterministic space costs at most a square | SPACE(f), configuration graph, reachability by recursion, PSPACE=NPSPACE, time–space inclusions |
| 2.4 | TQBF & PSPACE-completeness | Prove the canonical PSPACE-complete problem and connect it to games | quantified Boolean formulas, the recursive evaluator, generalized geography, PSPACE = the complexity of perfect play |
| 2.5 | L, NL & NL-completeness | Use logspace reductions and place st-connectivity exactly | the logspace model and why reductions must change, PATH is NL-complete, NL ⊆ P, 2SAT in NL |
| 2.6 | Immerman–Szelepcsényi & the class map | Prove nondeterministic space is closed under complement, then draw the whole map | inductive counting, NL=coNL, the full inclusion chain L ⊆ NL ⊆ P ⊆ NP ⊆ PH ⊆ PSPACE ⊆ EXP, which separations are actually known |

**Boss problem 2:** Prove that $\mathrm{PH} \subseteq \mathrm{PSPACE}$. Take an arbitrary $\Sigma_k^p$ language given by its alternating-quantifier characterization and describe a polynomial-space algorithm that evaluates the quantifier tree, arguing carefully that reusing space across the loop over candidate certificates keeps total space polynomial. Then state which single inclusion in the chain $\mathrm{L} \subseteq \mathrm{NL} \subseteq \mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PH} \subseteq \mathrm{PSPACE} \subseteq \mathrm{EXP}$ is *known* to be strict, and why.

### Module 3: Counting

Deciding whether a solution exists and counting how many there are look like the same question. They are not, and the gap is one of the sharpest results in the subject: a problem whose decision version is trivial can have a counting version that is as hard as the whole polynomial hierarchy.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | #P: counting is harder than deciding | Define #P and see decision-easy/counting-hard in one example | #P as functions, #SAT, counting perfect matchings vs finding one, the permanent and the determinant side by side |
| 3.2 | #P-completeness & parsimonious reductions | Prove a counting problem hard with a reduction that preserves the count | parsimonious and weakly parsimonious reductions, #SAT is #P-complete, Valiant's theorem for the permanent (statement and the gadget idea), #2SAT and #BIPARTITE-MATCHING |
| 3.3 | Toda's theorem & approximate counting | Place the whole hierarchy under a counting oracle, then recover what randomness can approximate | ⊕P and Valiant–Vazirani, PH ⊆ P^{#P} (statement and the shape of the proof), FPRAS, approximate counting from a sampler |

**Boss problem 3:** Show that $\#\mathrm{SAT}$ is $\#\mathrm{P}$-complete, then use the count to decide. (a) Give the parsimonious reduction from an arbitrary NP verifier via Cook–Levin and say precisely which property of the tableau construction makes it count-preserving. (b) Show that with a $\#\mathrm{SAT}$ oracle you can find a satisfying assignment with $n$ queries. (c) Explain why the padding reduction of Boss problem 1 is *not* parsimonious and give the multiplier it introduces.

### Module 4: Randomized & interactive computation

Two new resources: coin flips and a conversation with an all-powerful prover. Both look like cheating and both turn out to be deeply principled — culminating in the PCP theorem, where a proof can be checked by reading a constant number of its bits.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Randomness as a resource | Define and tell apart the randomized classes by their error profiles | probabilistic TMs, BPP, RP, coRP, ZPP, one- vs two-sided error, expected vs worst-case time |
| 4.2 | Taming error: amplification & placement | Boost success probability and locate BPP among the deterministic classes | majority amplification, the Chernoff bound you can compute, Adleman's BPP ⊆ P/poly, BPP ⊆ $\Sigma_2^p$, why P = BPP is expected |
| 4.3 | Interactive proofs | Explain what interaction plus randomness proves that a static certificate cannot | the IP model, completeness and soundness, graph non-isomorphism ∈ IP, private vs public coins, Arthur–Merlin |
| 4.4 | Arithmetization, sumcheck & IP = PSPACE | Run the sumcheck protocol by hand and see how it reaches PSPACE | multilinear extension, the sumcheck protocol and its soundness, coNP ⊆ IP via #SAT, the shape of the TQBF protocol |
| 4.5 | Probabilistically checkable proofs | State the PCP theorem and see why local checking is possible | the verifier's view, $O(\log n)$ randomness and $O(1)$ queries, PCP(log n, 1) = NP, the gap reformulation |

**Boss problem 4:** Prove that $\mathrm{ZPP} = \mathrm{RP} \cap \mathrm{coRP}$. Handle both inclusions: turn an expected-polynomial-time zero-error machine into one-sided-error machines via a timeout (Markov's inequality), and combine an RP and a coRP machine into a Las Vegas procedure with expected polynomial running time. State the expected number of rounds your Las Vegas procedure uses and verify it against the geometric distribution.

### Module 5: Circuits, approximation & the barriers

Where the hardest open questions live. Non-uniform circuits give the leading angle of attack on P vs NP; approximation asks what we can salvage from NP-hard problems and the PCP theorem draws a sharp line on how far we can get; the barrier results explain why the whole enterprise is so stubborn.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Boolean circuits & P/poly | Measure computation with circuit families and see the price of non-uniformity | circuit size and depth, P/poly, uniform vs non-uniform, the counting argument for hard functions, why P/poly contains undecidable languages |
| 5.2 | Circuits as the road to P vs NP | Explain why proving circuit lower bounds would separate P from NP | Karp–Lipton (NP ⊆ P/poly ⇒ PH collapses to $\Sigma_2^p$), the lower-bound program, what is actually proved (AC⁰ parity, monotone clique) |
| 5.3 | NC, parallelism & P-completeness | Place a problem on the parallelizable side of P, or prove it is probably not | NC and AC hierarchies, NC¹ ⊆ L ⊆ NL ⊆ NC², P-completeness under logspace reductions, CIRCUIT-VALUE, why P-complete means "probably not parallelizable" |
| 5.4 | Approximation as a class | Turn approximation guarantees into a class structure and derandomize a randomized one | APX, PTAS and FPTAS as classes, L-reductions and APX-completeness, MAX-3SAT's 7/8 by linearity of expectation, the method of conditional expectations |
| 5.5 | Hardness of approximation | Use PCP to prove that an approximation ratio is impossible | the gap-producing reduction, PCP ⇒ MAX-3SAT gap-hardness, Håstad's optimal inapproximability, a taste of unique games |
| 5.6 | Relativization, natural proofs & algebrization | Say precisely which proof techniques are already ruled out | oracle machines, Baker–Gill–Solovay, why diagonalization relativizes, natural proofs and the largeness/constructivity conditions, algebrization in one paragraph |

**Boss problem 5:** Show that MAX-3SAT (each clause has three literals over distinct variables) has a $7/8$-approximation. Prove that a uniformly random assignment satisfies each clause with probability $7/8$, conclude by linearity of expectation that some assignment satisfies at least $\tfrac{7}{8}m$ clauses, and derandomize with the method of conditional expectations, showing the conditional expectation is computable in polynomial time. Then state what Håstad's PCP-based result says about doing better, and say why the two results together make $7/8$ a *threshold* rather than merely a good ratio.

### Module 6: Fine-grained complexity

P vs NP is not the question that decides whether your program finishes. This module asks the version that does: given that a problem is in P, is your $n^2$ algorithm optimal? The answers are conditional — on hypotheses strictly stronger than P ≠ NP — and that is the honest modern state of the art.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | ETH, SETH & the exponential-time view | State the two exponential-time hypotheses and derive a lower bound from each | ETH and SETH, the sparsification lemma (statement), why ETH rules out $2^{o(n)}$ for 3SAT, subexponential-time reductions, consequences for parameterized algorithms |
| 6.2 | Conditional lower bounds inside P | Prove that a quadratic algorithm is optimal, assuming SETH | orthogonal vectors and the OV conjecture, SETH ⇒ OV, OV ⇒ edit distance and LCS quadratic-hardness, the 3SUM conjecture, what a conditional lower bound is and is not evidence for |

**Boss problem 6:** Prove that SETH implies the Orthogonal Vectors conjecture. Given a CNF formula on $n$ variables and $m$ clauses, split the variables into two halves and build two sets of $2^{n/2}$ vectors in $\{0,1\}^m$ such that a pair is orthogonal exactly when the corresponding pair of half-assignments satisfies the formula. Verify the construction on a small formula by exhaustive search, then argue that an $O(N^{2-\varepsilon})$ algorithm for OV would give a $2^{(1-\varepsilon/2)n}\mathrm{poly}$ algorithm for SAT, contradicting SETH.

## Sources of truth

- **Arora & Barak, *Computational Complexity: A Modern Approach*** — the primary spine for definitions, class relationships, counting, and the PCP/interactive-proof treatment.
- **Sipser, *Introduction to the Theory of Computation* (Part Three)** — for the Cook–Levin, Savitch, hierarchy and PSPACE-completeness proofs at a gentler grain.
- **Goldreich, *Computational Complexity: A Conceptual Perspective*** — for the "why these definitions" conceptual framing and the randomized classes.
- **Papadimitriou, *Computational Complexity*** — reference for the polynomial hierarchy, reductions and counting.
- **Williams, "Some Estimated Likelihoods for Computational Complexity" and the fine-grained survey literature** — for Module 6, which postdates all four textbooks above.

---

## Revision note — 2026-09-11

Rebuilt from 18 lessons in four modules to **28 lessons in six modules**, before any lesson was written. Three reasons, in order of weight.

1. **Two courses promised material the syllabus never taught.** [`theory-of-computation` 4.4](../theory-of-computation/lessons/04-04-a-first-look-at-p-vs-np.md) hands off "Cook–Levin, the NP-complete catalogue, space complexity, **the hierarchy theorems** and the polynomial hierarchy", and that course's syllabus cedes "time/space hierarchies". The original module list had no hierarchy-theorem lesson at all — a defect, not a gap, and it also left 4.4's relativization discussion with nothing to relativize. New lesson 1.3.
2. **Four lessons restated `algorithms` Module 4.** That course fully owns the verifier/certificate definition, Karp reductions with its four-obligation template, the 3SAT → Independent Set → Vertex Cover → Clique chain, and the approximation toolkit (vertex cover 2-approx, greedy set cover, metric TSP, knapsack FPTAS). Its own syllabus states the split: "this course does the *reductions and the coping strategies*; that course does the *classes, hierarchies, and the theory of why*", and 4.1 says outright that computational-complexity does the Cook–Levin proof. Lessons 1.2, 1.5, 5.4 and the old 3.1 were re-aimed accordingly; see the Scope discipline table.
3. **Two branches were missing entirely.** Counting complexity (#P, the permanent, Toda) is a major division of the subject with no representation in the original, and it is where "decision is easy, counting is hard" gets its sharpest statement. Fine-grained complexity (ETH, SETH, conditional lower bounds inside P) postdates the standard textbooks and is the part of the subject that most often applies to code someone is actually writing. New Modules 3 and 6.

Other changes: the old 2.5 carried both NL-completeness and Immerman–Szelepcsényi, and the old 4.2 carried both Karp–Lipton and NC — each was split (2.5/2.6 and 5.2/5.3). IP = PSPACE was a statement-and-intuition bullet inside the interactive-proofs lesson; arithmetization and the sumcheck protocol now get their own lesson (4.4), because sumcheck is the one piece of this machinery you can actually run by hand. Boss problems 1, 2 and 4 gained a part that makes them verifiable; boss problems 3, 5 and 6 are new.

**Boss-problem audit, same date.** All four original boss problems were checked before rewriting and all four are sound — the DOUBLE-SAT padding gadget, PH ⊆ PSPACE, ZPP = RP ∩ coRP and the MAX-3SAT 7/8 bound with conditional-expectation derandomization all verify (the last numerically: on a 12-clause instance the expectation is exactly 10.5 = 7m/8 and the derandomization reaches 12). This is the first course in five whose inherited boss problems needed no correction, which is worth recording so the next reader does not re-derive them.

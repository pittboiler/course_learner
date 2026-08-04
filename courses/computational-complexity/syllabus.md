# Complexity Theory — Syllabus

> Computer Science · Tier 2 · ~18 lessons · Prereqs: [theory-of-computation](../theory-of-computation/syllabus.md) · Roadmap id: `computational-complexity`

## Goal

You already know *what* is computable — Turing machines, decidability, reductions. This course is about *how much it costs*: time, space, randomness, and interaction as measurable resources, and the classes (P, NP, PSPACE, BPP, …) that sort problems by how much of each they demand. You will be able to prove a problem NP-complete, place it in the right space and randomized class, read the polynomial hierarchy fluently, and explain both the PCP theorem's grip on approximation and why P vs NP has resisted every proof technique we own. We deliberately skip the research frontiers of proof complexity and derandomization — this is the map, not the expedition.

## Dangerous Checklist

When you finish, you can:

- [ ] Define TIME and SPACE classes precisely and argue why the choice of machine model barely moves them
- [ ] Prove a language is in NP by exhibiting a polynomial-length certificate and a polynomial-time verifier
- [ ] Prove a problem NP-complete with a polynomial-time many-one reduction, and spot when a claimed reduction is broken
- [ ] Reconstruct the logic of the Cook–Levin theorem: why every NP computation is a satisfiability question
- [ ] Locate a problem in the polynomial hierarchy by counting its quantifier alternations
- [ ] Apply Savitch's theorem and explain why nondeterminism is nearly free for space
- [ ] Prove a language PSPACE-complete or NL-complete using the right reduction notion (poly-time vs logspace)
- [ ] Classify a randomized algorithm as RP, coRP, ZPP, or BPP from its error profile, and amplify its success probability
- [ ] Explain what an interactive proof buys you and why IP = PSPACE is surprising
- [ ] State the PCP theorem and use it to derive a hardness-of-approximation result
- [ ] Design an approximation algorithm and certify its ratio
- [ ] Explain relativization and why it rules out a whole family of attacks on P vs NP

## Modules

### Module 1: Time & NP-completeness

The engine room: how to measure time, why "polynomial" is the right line between tractable and not, and the theory of NP-completeness that organizes thousands of hard problems around a single question.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Time, the model & the class P | Define TIME(f) and P, and argue both are robust to the machine model | multitape TM recap, asymptotic cost, linear speedup, simulation overhead, Cobham–Edmonds thesis |
| 1.2 | NP & the power of a certificate | Define NP two equivalent ways and place problems in it | nondeterministic TMs, verifier/certificate definition, guess-and-check, examples (SAT, CLIQUE, TSP-decision) |
| 1.3 | Reductions & NP-completeness | Use poly-time many-one reductions to compare hardness and define completeness | Karp reductions, hardness, completeness, "hardest problems in NP", the P≠NP picture |
| 1.4 | Cook–Levin: computation is satisfiability | Follow why SAT is NP-complete | encoding a computation as a tableau/circuit, local consistency constraints, 3SAT NP-completeness |
| 1.5 | The NP-complete zoo | Build reductions fluently and recognize the standard gadgets | 3SAT→INDEPENDENT-SET→VERTEX-COVER→CLIQUE, SUBSET-SUM, HAMPATH; reduction craftsmanship |

**Boss problem 1:** Prove that DOUBLE-SAT $= \{\langle\varphi\rangle : \varphi$ is a Boolean formula with at least two satisfying assignments$\}$ is NP-complete. Give the NP certificate explicitly, then reduce from SAT with a one-variable padding gadget and prove both directions of correctness.

### Module 2: Space complexity & the polynomial hierarchy

Trade the clock for the tape. Space behaves differently from time — nondeterminism is almost free, complementation is easy, and quantified games live exactly at PSPACE. First we finish the NP story upward into the hierarchy, then descend into space.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | coNP & the shape of NP | Distinguish NP from coNP and explain what NP∩coNP means | complement classes, TAUTOLOGY, why NP=coNP is open, factoring in NP∩coNP |
| 2.2 | The polynomial hierarchy | Read a problem's place in PH from its quantifier alternations | $\Sigma_k^p/\Pi_k^p$, alternating quantifiers, oracle definition, collapse and why it would be surprising |
| 2.3 | Space as a resource & Savitch | Define L and PSPACE and prove nondeterministic space costs at most a square | SPACE(f), configuration graph, PSPACE=NPSPACE, Savitch's theorem, time–space inclusions |
| 2.4 | TQBF & PSPACE-completeness | Prove the canonical PSPACE-complete problem and connect it to games | quantified Boolean formulas, the recursive evaluator, PSPACE = the complexity of perfect play |
| 2.5 | L, NL & NL-completeness | Use logspace reductions and place st-connectivity exactly | logspace reductions, PATH is NL-complete, Immerman–Szelepcsényi (NL=coNL) |

**Boss problem 2:** Prove that $\mathrm{PH} \subseteq \mathrm{PSPACE}$. Take an arbitrary $\Sigma_k^p$ language given by its alternating-quantifier characterization and describe a polynomial-space algorithm that evaluates the quantifier tree, arguing carefully that reusing space across the loop over candidate certificates keeps total space polynomial.

### Module 3: Randomized & interactive computation

Two new resources: coin flips and a conversation with an all-powerful prover. Both look like cheating and both turn out to be deeply principled — culminating in the PCP theorem, where a proof can be checked by reading a constant number of its bits.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Randomness as a resource | Define and tell apart the randomized classes by their error profiles | probabilistic TMs, BPP, RP, coRP, ZPP, one- vs two-sided error |
| 3.2 | Taming error: amplification & placement | Boost success probability and locate BPP among the deterministic classes | Chernoff/majority amplification, Adleman's BPP ⊆ P/poly, BPP ⊆ $\Sigma_2^p$, derandomization teaser |
| 3.3 | Interactive proofs | Explain what interaction plus randomness proves that a static certificate can't | the IP model, graph non-isomorphism ∈ IP, completeness/soundness, IP = PSPACE (statement & intuition) |
| 3.4 | Probabilistically checkable proofs | State the PCP theorem and see why local checking is possible | the verifier's view, $O(\log n)$ randomness & $O(1)$ queries, PCP = NP, bridge to approximation |

**Boss problem 3:** Prove that $\mathrm{ZPP} = \mathrm{RP} \cap \mathrm{coRP}$. Handle both inclusions: turn an expected-polynomial-time zero-error machine into one-sided-error machines via a timeout (Markov's inequality), and combine an RP and a coRP machine into a Las Vegas procedure with expected polynomial running time.

### Module 4: Circuits, approximation & the frontier

Where the hardest open questions live. Non-uniform circuits give the leading angle of attack on P vs NP; approximation asks what we can salvage from NP-hard problems, and the PCP theorem draws a sharp line on how far we can get; relativization explains why the whole enterprise is so stubborn.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Boolean circuits & P/poly | Measure computation with circuit families and see the price of non-uniformity | circuit size/depth, P/poly, uniform vs non-uniform, why P/poly contains undecidable languages |
| 4.2 | Circuits as the road to P vs NP | Explain why proving circuit lower bounds would separate P from NP | Karp–Lipton (NP ⊆ P/poly ⇒ PH collapse), NC and parallelism, the lower-bound program |
| 4.3 | Approximation algorithms | Design an approximation algorithm and certify its ratio | approximation ratio, vertex-cover 2-approx, MAX-3SAT, PTAS vs FPTAS |
| 4.4 | Hardness of approximation & the barriers | Use PCP to prove inapproximability, then explain why P vs NP resists proof | PCP ⇒ MAX-3SAT gap-hardness, relativization (Baker–Gill–Solovay oracles), a nod to natural proofs & algebrization |

**Boss problem 4:** Show that MAX-3SAT (each clause has three literals over distinct variables) has a $7/8$-approximation. Prove that a uniformly random assignment satisfies each clause with probability $7/8$, conclude by linearity of expectation that some assignment satisfies at least $\tfrac{7}{8}m$ clauses, and derandomize with the method of conditional expectations. Then state what Håstad's PCP-based result says about doing better.

## Sources of truth

- **Arora & Barak, *Computational Complexity: A Modern Approach*** — the primary spine for definitions, class relationships, and the PCP/interactive-proof treatment.
- **Sipser, *Introduction to the Theory of Computation* (Part Three)** — for the Cook–Levin, Savitch, and PSPACE-completeness proofs at a gentler grain.
- **Goldreich, *Computational Complexity: A Conceptual Perspective*** — for the "why these definitions" conceptual framing and randomized classes.
- **Papadimitriou, *Computational Complexity*** — reference for the polynomial hierarchy and reductions.

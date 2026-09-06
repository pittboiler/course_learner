# Automata & Computability · Lesson 4.4: A first look at P vs NP

> ⏱ ~15 min · Module 4: Undecidability & Reductions · Builds on: [3.2 (model robustness)](03-02-tm-variants-and-robustness.md), [4.2 (reductions)](04-02-reducibility-and-mapping-reductions.md) · Unlocks: [computational-complexity](../../computational-complexity/syllabus.md)

## Why this matters

Everything so far has asked whether a problem can be solved **at all**. That question is now settled: decidable, recognizable, or neither. This last lesson changes the question to whether it can be solved **in time you would actually wait for** — and hands the subject off to [computational-complexity](../../computational-complexity/syllabus.md).

The change of question changes the landscape completely. Almost every problem in this lesson is decidable; the interesting distinction is between $n^2$ and $2^n$. And the central open problem of the field lives here: is *finding* a solution fundamentally harder than *checking* one? Nobody knows, and the honest answer to "is P equal to NP?" is that after fifty years of effort neither direction has a proof.

It matters commercially and not only mathematically. If $\mathrm{P} = \mathrm{NP}$, then public-key cryptography as deployed collapses, scheduling and routing become easy, and mathematics itself becomes largely automatable. Practically everyone believes $\mathrm{P} \ne \mathrm{NP}$ — and the entire security of the internet is a bet on that belief.

There is also a professional reason to be exact about this. "NP" is the most abused acronym in computing. It does **not** mean "not polynomial," "hard," or "takes exponential time." Getting the definitions right, and being able to say what does and does not follow from them, is the point of this lesson.

## The idea

Compare two questions about a graph with $n$ vertices.

*Is there a path from $s$ to $t$?* Run breadth-first search. Time $O(n^2)$ — fast, and no cleverness needed.

*Is there a path from $s$ to $t$ visiting **every** vertex exactly once?* This is the Hamiltonian path problem, and the only general method known is to try orderings: $n!$ of them, which at $n = 30$ exceeds the age of the universe in nanoseconds.

But now change what you are asked to do. If someone **hands you** an ordering and claims it is a Hamiltonian path, you check it in $O(n^2)$: confirm it lists every vertex once, and that each consecutive pair is an edge. Checking is easy. Finding seems desperately hard.

That gap is the whole subject.

- $\mathrm{P}$ is the class of problems you can **solve** in polynomial time.
- $\mathrm{NP}$ is the class of problems where a proposed solution can be **checked** in polynomial time.

Every problem you can solve, you can check (solve it and compare), so $\mathrm{P} \subseteq \mathrm{NP}$. The question is whether the containment is strict — whether checkable-but-not-solvable problems really exist, or whether we have simply not been clever enough.

Two side notes that prevent the usual confusions. First, "polynomial" is deliberately coarse. It is not that $n^{100}$ is a practical running time; it is that polynomials are the smallest natural class closed under the model changes of [Lesson 3.2](03-02-tm-variants-and-robustness.md) — swap tapes for a RAM and $n^2$ may become $n^3$, but polynomial stays polynomial. **$\mathrm{P}$ is defined that way to be model-independent**, which is the only way it can be a property of a *problem* rather than of a machine.

Second, the "N" in NP is *nondeterministic*, not "not." An NP problem is one a nondeterministic machine solves in polynomial time — it guesses the certificate and checks it. Same class, different phrasing.

## The formal version

For a deterministic TM $M$ that halts on all inputs, its **running time** is $t(n) = $ the maximum number of steps over all inputs of length $n$. For $f, g : \mathbb{N} \to \mathbb{R}^+$, write $f(n) = O(g(n))$ if there are $c, n_0 > 0$ with $f(n) \le c\,g(n)$ for all $n \ge n_0$.

$$\mathrm{TIME}(t(n)) = \{\,A : \text{some deterministic single-tape TM decides } A \text{ in } O(t(n)) \text{ time}\,\}, \qquad \boxed{\ \mathrm{P} = \bigcup_{k \ge 1} \mathrm{TIME}(n^k).\ }$$

**Why $\mathrm{P}$ is robust.** [Lesson 3.2](03-02-tm-variants-and-robustness.md) showed a $k$-tape machine running in $t$ steps is simulable on one tape in $O(t^2)$, and a computed-index jump costs another polynomial. Composing polynomials gives a polynomial, so $\mathrm{P}$ is the same class whether you define it by single-tape TMs, multitape TMs, or random-access machines. It is a property of the problem.

**$\mathrm{NP}$, by verifiers.** A **verifier** for $A$ is a deterministic TM $V$ such that

$$A = \{\, w : V \text{ accepts } \langle w, c\rangle \text{ for some string } c \,\}.$$

$V$ is a **polynomial-time verifier** if it runs in time polynomial in $|w|$ — which forces it to read only a polynomially long prefix of the certificate $c$, so we may as well require $|c| = O(|w|^k)$.

$$\mathrm{NP} = \{\, A : A \text{ has a polynomial-time verifier} \,\}.$$

In words: $w$ is a yes-instance iff there **exists** a short certificate that a fast checker accepts. Note the asymmetry built into the definition — a yes-instance has a certificate to show you, a no-instance has nothing.

**$\mathrm{NP}$, by nondeterministic machines.** $A \in \mathrm{NP}$ iff some **nondeterministic** TM decides $A$ in polynomial time. *(Sketch: given a verifier, an NTM guesses $c$ symbol by symbol — polynomially many nondeterministic steps — then runs $V$. Given a polytime NTM, take the certificate to be the sequence of choices along an accepting branch; a verifier replays it.)*

**Theorem.** $\mathrm{P} \subseteq \mathrm{NP}$.

*Proof.* Let $A \in \mathrm{P}$ with decider $M$ running in polynomial time. Define $V$ on $\langle w, c\rangle$: ignore $c$, run $M$ on $w$, and answer as it does. Then $V$ runs in polynomial time and $w \in A$ iff $V$ accepts $\langle w, c\rangle$ for some $c$ — indeed for *every* $c$. So $A \in \mathrm{NP}$. $\blacksquare$

**The open question.** Is $\mathrm{P} = \mathrm{NP}$? The best deterministic simulation of a polytime NTM known is [Lesson 3.2's](03-02-tm-variants-and-robustness.md) breadth-first search of the computation tree, costing $2^{O(n^k)}$. So the known bounds are

$$\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{EXPTIME},$$

with neither containment known to be strict (though $\mathrm{P} \subsetneq \mathrm{EXPTIME}$ *is* known, by the time hierarchy theorem — so at least one of the two is strict).

**Polynomial-time reductions and NP-completeness (a taste).** Write $A \le_{\mathrm{P}} B$ if there is a **polynomial-time** computable $f$ with $w \in A \iff f(w) \in B$ — [Lesson 4.2's](04-02-reducibility-and-mapping-reductions.md) mapping reduction with a time budget on $f$. Then $B \in \mathrm{P}$ and $A \le_{\mathrm{P}} B$ imply $A \in \mathrm{P}$.

$B$ is **NP-complete** if $B \in \mathrm{NP}$ and $A \le_{\mathrm{P}} B$ for every $A \in \mathrm{NP}$. The Cook–Levin theorem gives the first such $B$: **SAT**, the satisfiability of Boolean formulas. Thousands more follow by chaining reductions — Hamiltonian path, 3-colouring, subset-sum, clique. An NP-complete problem is a *hardest* problem in NP: a polynomial algorithm for any one of them would prove $\mathrm{P} = \mathrm{NP}$.

This is [computational-complexity](../../computational-complexity/syllabus.md)'s subject, and the machinery is exactly Lesson 4.2's with a clock attached.

## Picture

![Above, a schematic: an input w and a guessed certificate c both feed into a polynomial-time verifier V, which outputs accept or reject; w is in A iff some certificate works. Below, a table of four problems comparing the best known way to find a solution against the cost of checking a supplied certificate.](assets/04-04-fig1.svg)

The certificate arrow is coral because it is the part nobody has to compute. The definition of NP says only that a certificate **exists**; it says nothing about where it comes from, and it explicitly does not require it to be findable in polynomial time. That is the gap.

The table is the intuition, and reading it as a *cost derivation* is the point: each right-hand entry is a bound you can actually derive — reading an ordering of $n$ vertices and checking $n-1$ edges against an adjacency matrix is $O(n^2)$; substituting an assignment into a formula with $m$ clause-literals is $O(m)$. Each left-hand entry is a search space you can count: $n!$ orderings, $2^n$ assignments. **The right column is proved; the left column is only "best known"** — and closing that difference is the open problem.

Notice the last row is not known to be NP-complete either. Factoring is in NP (the certificate is a factor) and is not believed to be NP-complete, which is why it occupies its own uncomfortable middle position — and why RSA rests on it rather than on an NP-complete problem.

## Worked examples

**Example 1 (mechanical): $\mathit{HAMPATH} \in \mathrm{NP}$.** Let

$$\mathit{HAMPATH} = \{\, \langle G, s, t\rangle : G \text{ has a directed path from } s \text{ to } t \text{ through every vertex exactly once} \,\}.$$

*The verifier.* **$V$ on input $\langle \langle G,s,t\rangle,\ c\rangle$:**

1. Check that $c$ is a list of $n = |V(G)|$ vertices. If not, reject.
2. Check the list has no repeats. If it does, reject.
3. Check $c_1 = s$ and $c_n = t$. If not, reject.
4. Check that $(c_i, c_{i+1})$ is an edge of $G$ for each $i = 1, \dots, n-1$. If any is not, reject.
5. Accept.

*Time.* With $G$ as an adjacency matrix, step 1 is $O(n)$; step 2 is $O(n^2)$ by pairwise comparison (or $O(n)$ with a marker array); step 3 is $O(1)$; step 4 does $n-1$ matrix lookups, $O(n)$. Total $O(n^2)$ — polynomial in the input size, since the encoding of $G$ is already $\Theta(n^2)$ bits.

*Correctness.* If $\langle G,s,t\rangle \in \mathit{HAMPATH}$, take $c$ to be the path itself; $V$ accepts. Conversely if $V$ accepts some $c$, then steps 1–4 certify that $c$ is exactly a Hamiltonian path from $s$ to $t$. So $\mathit{HAMPATH} \in \mathrm{NP}$. $\blacksquare$

Both halves matter, and they are the two arrows of [Lesson 4.2's Picture](04-02-reducibility-and-mapping-reductions.md) again: **some certificate works** for yes-instances, and **no certificate works** for no-instances. A "verifier" that accepted sloppily — say, skipping step 2 — would accept a certificate that revisits a vertex, and would then accept some graph with no Hamiltonian path.

**Example 2 (why you'd care): what does and does not follow.** Four claims. One is a theorem, three are errors, and the errors are the ones you will actually hear.

**(i) "$\mathit{HAMPATH} \in \mathrm{NP}$, so no polynomial algorithm for it exists."** *False.* $\mathrm{NP}$ is an **upper** bound on difficulty, not a lower one. $\mathrm{P} \subseteq \mathrm{NP}$, so every easy problem is in NP too — shortest path is in NP. Membership in NP says a problem is *at most* as hard as guess-and-check, and nothing more. (What would license a hardness claim is NP-*completeness*, and even that only conditionally, on $\mathrm{P} \ne \mathrm{NP}$.)

**(ii) "This problem takes exponential time, so it is not in $\mathrm{P}$."** *Not established.* "Takes exponential time" almost always means "the algorithm I know takes exponential time," which is a statement about the algorithm. Proving a problem is outside $\mathrm{P}$ requires ruling out *every* polynomial algorithm — a lower bound, and those are rare and hard, exactly as in [Lesson 1.2's P3](01-02-nfa-and-the-subset-construction.md). Primality testing was the standard cautionary tale: believed intractable for decades, then shown to be in $\mathrm{P}$ in 2002.

**(iii) "If $\mathrm{P} = \mathrm{NP}$, then every NP problem has a polynomial algorithm."** *True* — this is just the definition of set equality, unpacked. It is also why the question matters so much: a single polynomial algorithm for SAT would, via the reductions, hand you polynomial algorithms for thousands of problems at once.

**(iv) "If $A \in \mathrm{NP}$ then $\overline{A} \in \mathrm{NP}$."** *Unknown.* The definition is asymmetric: a yes-instance has a certificate, a no-instance has nothing to show. The class of problems whose **no**-instances have short certificates is called $\mathrm{coNP}$, and whether $\mathrm{NP} = \mathrm{coNP}$ is open (and would follow from $\mathrm{P} = \mathrm{NP}$, but not conversely as far as anyone knows). Concretely: if a formula is satisfiable, show me the assignment; if it is *un*satisfiable, what would you show me? Nobody knows a general short answer.

**The discipline these four share.** Every one turns on distinguishing an *upper bound* ("this method works and costs this much") from a *lower bound* ("no method can do better"). Upper bounds come from exhibiting an algorithm; lower bounds require an argument about all possible algorithms, and there are very few of them in this area. When you read "X is hard," ask which kind of claim is being made.

## Watch out

- **You might think** NP stands for "non-polynomial" — **but actually** it stands for **nondeterministic polynomial time**, and $\mathrm{P} \subseteq \mathrm{NP}$, so plenty of NP problems are downright easy. The phrase "this is NP" carries essentially no information about difficulty; "this is NP-complete" carries a great deal.
- **You might think** a problem in NP must be decidable only in exponential time — **but actually** the only proven upper bound on NP is $\mathrm{EXPTIME}$, and the only proven lower bound is nothing at all. Every NP problem *is* decidable (search the certificates), which is why this lesson lives entirely inside the decidable ring of [Lesson 3.4's](03-04-decidable-vs-turing-recognizable.md) picture — a different question from Module 4's first three lessons.
- **You might think** the polynomial-time reduction of this lesson is a new idea — **but actually** it is [Lesson 4.2's](04-02-reducibility-and-mapping-reductions.md) mapping reduction with a clock on $f$, and the direction rule is identical: to show your problem is hard, reduce a known-hard problem **to** it. Getting the direction backwards is the same worthless claim it was there, and it is at least as common here.

## One-liner

> $\mathrm{P}$ is what you can solve fast and $\mathrm{NP}$ is what you can check fast; every solvable problem is checkable, and whether the converse holds is the open question the internet's security is betting against.

## Problems

**P1 (🟢)** For each procedure on an input of size $n$, give the running time in $O(\cdot)$ form and say whether it is polynomial.

(a) Check whether a supplied list of $n$ vertices is a Hamiltonian path in a graph given as an $n \times n$ adjacency matrix.
(b) Try every ordering of $n$ vertices, checking each as in (a).
(c) Check whether a supplied assignment satisfies a Boolean formula with $m$ occurrences of literals.
(d) Try every assignment to the $v$ variables of that formula.
(e) Multiply two $n$-bit integers by the grade-school method.

**P2 (🟡)** Let

$$\mathit{SUBSET\text{-}SUM} = \{\, \langle S, t\rangle : S \text{ is a finite multiset of integers and some sub-multiset of } S \text{ sums to } t \,\}.$$

(a) Give a polynomial-time verifier, stating the certificate. (b) Bound its running time in terms of $n = |S|$ and the number of bits $b$ in the largest integer. (c) Conclude $\mathit{SUBSET\text{-}SUM} \in \mathrm{NP}$. (d) A colleague notes that the standard dynamic program runs in $O(nt)$ time and concludes $\mathit{SUBSET\text{-}SUM} \in \mathrm{P}$. Say what is wrong.

**P3 (🔴)** Decide each claim: **true**, **false**, or **open**. Justify in one or two sentences each.

(a) If $A \in \mathrm{P}$ then $A \in \mathrm{NP}$.
(b) If $A \in \mathrm{NP}$ then $A$ is decidable.
(c) If $A$ is NP-complete and $A \in \mathrm{P}$, then $\mathrm{P} = \mathrm{NP}$.
(d) If $A \le_{\mathrm{P}} B$ and $A$ is NP-complete, then $B$ is NP-complete.
(e) $A_{\mathrm{TM}} \in \mathrm{NP}$.
(f) If $A \in \mathrm{NP}$ then $\overline{A} \in \mathrm{NP}$.

<details>
<summary>Solutions</summary>

**P1** (a) $O(n^2)$ — **polynomial**. Checking for repeats costs $O(n^2)$ by pairwise comparison (or $O(n)$ with a seen-array), and verifying the $n-1$ consecutive pairs costs one matrix lookup each, $O(n)$. Note the input itself is $\Theta(n^2)$ bits, so this is linear in the input size.

(b) $O(n! \cdot n^2)$ — **not polynomial**. There are $n!$ orderings and each check costs $O(n^2)$. Since $n! \ge (n/2)^{n/2}$, this grows faster than any $n^k$.

(c) $O(m)$ — **polynomial**. Substitute the assignment and evaluate; each literal occurrence is one lookup, and the clause and formula structure is traversed once. (Linear in the input size.)

(d) $O(2^v \cdot m)$ — **not polynomial** in general. If $v$ is $\Theta(m)$, which it may be, this is exponential in the input size. (If $v$ were bounded by a constant it would be polynomial — the exponent must grow with the input for this to be a problem.)

(e) $O(n^2)$ — **polynomial**. $n$ partial products, each an $n$-bit shift-and-add.

The pattern: (a), (c), (e) are the *checking* direction and are all polynomial; (b), (d) are the *searching* direction and are exponential. That is the Picture's table, derived.

**P2** (a) **Certificate:** an explicit sub-multiset $c \subseteq S$ (equivalently, a bit-vector of length $n$ selecting which elements are taken, allowing for repeats).

**$V$ on $\langle \langle S,t\rangle, c\rangle$:** check that $c$ selects a valid sub-multiset of $S$ (each element used no more often than it occurs); sum the selected elements; accept iff the sum equals $t$.

(b) The certificate is $n$ bits, so reading it is $O(n)$. Validating the multiset containment is $O(n)$ with a per-element count. The sum involves at most $n$ additions of numbers with at most $b + \log_2 n$ bits, so $O(n(b + \log n))$ bit operations. The comparison to $t$ is $O(b + \log n)$. Total: $O(n(b + \log n))$ — **polynomial in the input length**, which is $\Theta(nb)$ bits.

(c) The verifier is polynomial-time, and $\langle S,t\rangle \in \mathit{SUBSET\text{-}SUM}$ iff some sub-multiset sums to $t$ iff some $c$ makes $V$ accept. So $\mathit{SUBSET\text{-}SUM} \in \mathrm{NP}$. $\blacksquare$

(d) The $O(nt)$ dynamic program is **pseudo-polynomial**, not polynomial. Polynomial means polynomial in the **length of the input**, and $t$ is written in binary, so the input contributes only about $\log_2 t$ bits for the target. In terms of the input length $\ell$, the running time is $O(n \cdot 2^{\ell})$ in the worst case — exponential. (Concretely: doubling the number of *digits* of $t$ squares the running time.) $\mathit{SUBSET\text{-}SUM}$ is NP-complete, so an actually-polynomial algorithm would prove $\mathrm{P} = \mathrm{NP}$.

This is the single most common way a claimed polynomial algorithm turns out not to be one, and the check is always the same: **is the running time polynomial in the number of bits, or in the numeric value of something written in binary?**

**P3** (a) **True.** The verifier ignores the certificate and just runs $A$'s polynomial decider (the theorem in the formal section).

(b) **True.** Given a polynomial-time verifier $V$ and a certificate-length bound $|c| \le |w|^k$, decide $A$ by trying every certificate of length up to $|w|^k$ and running $V$ on each. There are at most $|\Sigma|^{|w|^k + 1}$ of them — a huge but **finite** number — so the procedure always halts. NP lies strictly inside the decidable ring of [Lesson 3.4](03-04-decidable-vs-turing-recognizable.md).

(c) **True.** Let $B \in \mathrm{NP}$ be arbitrary. By NP-completeness of $A$ there is a polynomial-time $f$ with $B \le_{\mathrm{P}} A$. Decide $B$ by computing $f(w)$ — polynomial time — and running $A$'s polynomial decider on it. The composition of two polynomials is a polynomial, so $B \in \mathrm{P}$. Since $B$ was arbitrary, $\mathrm{NP} \subseteq \mathrm{P}$, and with (a) that gives $\mathrm{P} = \mathrm{NP}$.

(d) **False.** $A \le_{\mathrm{P}} B$ with $A$ NP-complete gives NP-**hardness** of $B$ — every NP problem reduces to $A$, hence to $B$ by composing the two polynomial reductions — but NP-completeness *also* requires $B \in \mathrm{NP}$, and that does not follow.

Counterexample: take $B = A_{\mathrm{TM}}$ and $A = \mathit{SAT}$. Let $M_{\mathit{SAT}}$ be the fixed machine that, given a Boolean formula, tries all assignments and accepts iff one satisfies it, and define $f(\varphi) = \langle M_{\mathit{SAT}}, \varphi\rangle$. Writing that pair is linear-time work (the machine's description is a constant), and $\varphi \in \mathit{SAT} \iff M_{\mathit{SAT}}$ accepts $\varphi$, so $\mathit{SAT} \le_{\mathrm{P}} A_{\mathrm{TM}}$. But $A_{\mathrm{TM}} \notin \mathrm{NP}$ by (b), since it is not even decidable.

**NP-hard $\ne$ NP-complete**, and the half that goes missing is the easy half — always state $B \in \mathrm{NP}$ separately.

(e) **False.** By (b), every language in NP is decidable, and $A_{\mathrm{TM}}$ is undecidable ([Lesson 4.1](04-01-diagonalization-and-the-halting-problem.md)). Complexity classes like $\mathrm{P}$ and $\mathrm{NP}$ live entirely inside the decidable languages; Module 4's earlier lessons and this one are asking questions on opposite sides of that line.

(f) **Open.** This is the $\mathrm{NP}$ versus $\mathrm{coNP}$ question. The definition of NP is asymmetric — yes-instances carry certificates, no-instances do not — and nobody knows a general short certificate for, say, the *un*satisfiability of a formula. $\mathrm{P} = \mathrm{NP}$ would imply $\mathrm{NP} = \mathrm{coNP}$ (since $\mathrm{P}$ is closed under complement, its decider being invertible), but the converse implication is not known.

</details>

## Flashback

**From Lesson 4.2 (Reducibility & mapping reductions):** Let $\#$ be a symbol, and define

$$W_{\#} = \{\, \langle M, w\rangle : M, \text{ run on } w, \text{ ever writes the symbol } \# \text{ on its tape} \,\}.$$

Prove $W_{\#}$ is undecidable by a mapping reduction from $A_{\mathrm{TM}}$. Check both directions, and say why [Rice's theorem](04-03-rices-theorem-and-more-undecidable-problems.md) cannot be used here.

<details>
<summary>Solution</summary>

**The reduction.** $f$ = on input $\langle M, w\rangle$: if it is not a valid encoding, output a fixed pair not in $W_{\#}$ (say $\langle M_{\text{rej}}, \varepsilon\rangle$ where $M_{\text{rej}}$ rejects immediately without writing). Otherwise construct

> **$M'$**: first, rename every occurrence of $\#$ in $M$'s tape alphabet to a fresh symbol $\#'$ throughout $M$'s table, so that the machine so far never writes $\#$. Then redirect every transition that would enter $q_{\text{accept}}$ so that it instead enters a new state $q_{\text{mark}}$, and add $\delta(q_{\text{mark}}, s) = (q_{\text{accept}}, \#, R)$ for every tape symbol $s$ — that is, **write a $\#$ and then accept**.

Output $\langle M', w\rangle$.

*$f$ is computable.* Renaming a symbol and adding one state with a fixed transition are text edits on $\langle M\rangle$. $f$ runs nothing, so it halts on every input.

**Both directions.**

- **Forward.** If $M$ accepts $w$, then $M'$ follows exactly the same computation (the renaming changed no behaviour, only symbol names) until the point where $M$ would have accepted; there $M'$ enters $q_{\text{mark}}$ and writes $\#$. So $M'$ writes $\#$ and $\langle M', w\rangle \in W_{\#}$. ✓
- **Backward.** If $M$ does not accept $w$ — rejects or loops — then $M'$ never reaches $q_{\text{mark}}$, and $q_{\text{mark}}$ is the **only** place in $M'$ where $\#$ is ever written, because the renaming step removed every other use. So $M'$ never writes $\#$ and $\langle M', w\rangle \notin W_{\#}$. ✓

Hence $A_{\mathrm{TM}} \le_m W_{\#}$, and by [Lesson 4.2's](04-02-reducibility-and-mapping-reductions.md) transfer theorem $W_{\#}$ is undecidable. $\blacksquare$

**Why Rice does not apply.** $W_{\#}$ is not a property of $L(M)$ — it is a property of the *machine's behaviour on the tape*. Two machines can recognize the same language and disagree: take any $M$ and let $M''$ be $M$ with one extra step at the very start that writes a $\#$ and then erases it. $L(M'') = L(M)$, but $M''$ writes $\#$ and $M$ may not. So the property fails the semantic test, Rice's hypothesis is not met, and the theorem is silent — which is precisely why the explicit reduction is needed.

This is the left branch of [Lesson 4.3's](04-03-rices-theorem-and-more-undecidable-problems.md) decision tree: syntactic, so Rice says nothing, **and undecidable anyway**. Rice is a shortcut, not a boundary.

</details>

## Connections

- **Backward:** the robustness of $\mathrm{P}$ is [Lesson 3.2's](03-02-tm-variants-and-robustness.md) simulation theorems, cashed in — polynomials are exactly the class those simulations preserve. The verifier/NTM equivalence is that lesson's computation tree with a depth bound, and $\le_{\mathrm{P}}$ is [Lesson 4.2's](04-02-reducibility-and-mapping-reductions.md) $\le_m$ with a clock (the [transfer rules](../reference.md#reduction-transfer-rules) are unchanged).
- **Forward:** this is the last lesson of the course and it is a handoff. [computational-complexity](../../computational-complexity/syllabus.md) proves the Cook–Levin theorem, builds the NP-complete catalogue by chained reductions, and goes on to space complexity, the hierarchy theorems and the polynomial hierarchy. [algorithms](../../algorithms/syllabus.md) supplies the upper-bound half — the polynomial algorithms that put problems in $\mathrm{P}$ in the first place.
- **Sideways:** [cryptography](../../cryptography/syllabus.md) is built on the belief that certain problems are hard on average, factoring above all — note from the Picture that factoring is in NP but not believed NP-complete, so RSA's security is a *stronger* bet than $\mathrm{P} \ne \mathrm{NP}$. In [operations-research](../../operations-research/syllabus.md), the NP-complete scheduling and routing problems are attacked with approximation and integer programming, which is what you do once you accept the hardness rather than argue with it.

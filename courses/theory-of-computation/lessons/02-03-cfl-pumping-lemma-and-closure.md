# Automata & Computability · Lesson 2.3: The CFL pumping lemma & closure properties

> ⏱ ~15 min · Module 2: Context-Free Languages & Pushdown Automata · Builds on: [1.5 (the pumping lemma)](01-05-pumping-lemma-and-non-regularity.md), [2.1 (grammars & parse trees)](02-01-context-free-grammars-derivations-parse-trees.md), [2.2 (pushdown automata)](02-02-pushdown-automata-and-cfg-equivalence.md) · Unlocks: 3.1 (Turing machines)

## Why this matters

Module 2 opened by breaking through the wall Module 1 built. This lesson finds the next wall, and it is much closer than it looks.

One stack buys you nested matching. It does not buy you *two independent comparisons*, and the canonical victim is $\{a^nb^nc^n\}$ — a language so simple to describe that its impossibility is genuinely surprising. Proving it takes the same pigeonhole move as Lesson 1.5, applied to the parse tree instead of the run.

The second half is the closure table, and it has the most consequential entry in the course: **context-free languages are not closed under intersection or complement.** Regular languages were closed under everything, which let you decide questions about them freely. CFLs are not, and this is why so many natural questions about grammars turn out to be undecidable in Module 4 — the algebra that made regular languages tractable simply is not there.

The engineering read: this is why a context-free grammar cannot express "every variable is declared before use." That constraint compares two unbounded things, exactly like $a^nb^nc^n$, so it lives outside the grammar in a separate semantic-analysis pass. Every compiler is built around this boundary.

## The idea

Take a parse tree for a long string, and use a Chomsky-normal-form grammar so every internal node has at most two children. A binary tree with many leaves must be **tall**, and a tall tree has a long root-to-leaf path. If the path is longer than the number of variables, some variable repeats on it — pigeonhole, again.

Now look at the two nodes carrying that repeated variable $A$: an upper one and a lower one, with the lower sitting inside the upper's subtree. Here is the move: **the upper $A$-subtree is a legal derivation from $A$, and so is the lower one, so you may swap either for the other.** Graft the upper one into the lower one's place and you get a bigger legal parse tree; graft the lower one into the upper one's place and you get a smaller one.

What does that do to the string? The upper $A$ spans some stretch of the yield, and the lower $A$ spans a stretch inside it. So the yield splits as $u\,v\,x\,y\,z$, where $x$ is what the lower $A$ produces, and $v$ and $y$ are the leftovers on each side of it inside the upper $A$. Grafting duplicates $v$ and $y$ *together*.

That is the one structural difference from Lesson 1.5, and it is everything. The regular pumping lemma repeats **one** contiguous chunk; the CFL version repeats **two** chunks that are separated in the string but pumped in lockstep. That is precisely enough to keep $\{a^nb^n\}$ alive — pump `a`s and `b`s together — and precisely not enough for $\{a^nb^nc^n\}$, where you would need to pump *three* blocks at once.

## The formal version

**Pumping lemma for context-free languages.** If $L$ is context-free, there is a $p \ge 1$ such that every $s \in L$ with $|s| \ge p$ can be written $s = uvxyz$ with

$$\textbf{(i)}\ uv^ixy^iz \in L \ \text{ for every } i \ge 0, \qquad \textbf{(ii)}\ |vy| > 0, \qquad \textbf{(iii)}\ |vxy| \le p.$$

In words: long members contain **two** chunks, not too far apart and not both empty, that can be deleted or repeated *in step*.

*Proof sketch.* Put the grammar in [Chomsky normal form](../reference.md#chomsky-normal-form), with $|V|$ variables, so parse trees are binary. A binary tree whose longest root-to-leaf path has $h$ edges has at most $2^h$ leaves. Set $p = 2^{|V|+1}$. Then any $s \in L$ with $|s| \ge p$ has a parse tree of height at least $|V|+1$, so some root-to-leaf path carries more than $|V|$ variables and two of them coincide — call it $A$. Choosing the *lowest* such repeat keeps the upper $A$'s subtree short, which gives (iii); (ii) holds because a CNF grammar has no $\varepsilon$-rules below the start symbol, so the extra material $v$ and $y$ cannot both be empty. Grafting gives (i). $\blacksquare$

**Using it.** Same four-move adversary game as [Lesson 1.5](01-05-pumping-lemma-and-non-regularity.md) — the adversary picks $p$ and the split, you pick $s$ and $i$ — with one change that dominates every proof: condition (iii) says $v$, $x$ and $y$ all sit inside a **window of width $p$**. So if your $s$ has three long blocks, the window cannot reach the first and the last at once, and $v$ and $y$ together can touch at most **two** of the three blocks. Everything below is that observation.

The lemma is again **necessary, not sufficient** — some non-context-free languages pump — and again there is no easy complete substitute; the CFL analogue of Myhill–Nerode (Ogden's lemma, or the interchange lemma) is stronger but still not an iff.

**Closure properties.** Context-free languages **are** closed under:

| operation | why |
|---|---|
| union | new start symbol $S \to S_1 \mid S_2$ |
| concatenation | $S \to S_1S_2$ |
| star | $S \to S_1S \mid \varepsilon$ |
| reversal | reverse every rule's right-hand side |
| intersection **with a regular language** | run the PDA and the DFA in lockstep: states $Q_P \times Q_D$, one stack |

They are **not** closed under intersection or complement. The witness:

$$L_1 = \{a^nb^nc^m : n,m \ge 0\}, \qquad L_2 = \{a^mb^nc^n : n,m \ge 0\}, \qquad L_1 \cap L_2 = \{a^nb^nc^n\}.$$

$L_1$ and $L_2$ are context-free (grammars in P3), and $L_1 \cap L_2$ is not (Example 1). Complement follows by De Morgan: CFLs *are* closed under union, so if they were closed under complement they would be closed under intersection via $L_1 \cap L_2 = \overline{\overline{L_1} \cup \overline{L_2}}$ — which they are not.

Notice the one that survives: intersection with a **regular** language. That asymmetry is what makes the closure trick of Lesson 1.5 still available here — filter a suspicious language with a regular one, then pump.

## Picture

![Two parse trees drawn as nested triangles. On the left, the tree for s has a root S, and inside it two nodes both labelled A on the same root-to-leaf path; the yield is split into five segments u, v, x, y, z. On the right, the upper A subtree has been grafted in place of the lower one, producing a taller tree whose yield is u, v, v, x, y, y, z.](assets/02-03-fig1.svg)

The two coral triangles on the left are the two $A$-subtrees. They are interchangeable *because they are derivations from the same variable* — a grammar rule does not care what surrounds the variable it rewrites, which is exactly what "context-free" means. That property is the engine of the whole lemma, and it is why this argument has no analogue for context-sensitive grammars.

Reading the yields: the upper $A$ covers $vxy$ and the lower covers $x$, so the extra material is $v$ on the left and $y$ on the right. Grafting up gives $uv^2xy^2z$, grafting down gives $uxz$, and iterating gives every $uv^ixy^iz$. Condition (iii), $|vxy| \le p$, is the statement that the *upper* triangle is narrow — which follows from choosing the lowest repeated variable.

## Worked examples

**Example 1 (mechanical): $\{a^nb^nc^n\}$ is not context-free.**

*Move 2.* Take $s = a^pb^pc^p$, which is in $L$ and has length $3p \ge p$.

*Move 3.* The adversary splits $s = uvxyz$ with $|vy| > 0$ and $|vxy| \le p$. Here is where (iii) does the work: $vxy$ is a contiguous window of length at most $p$, and each block of $s$ has length exactly $p$, so **the window cannot contain both an `a` and a `c`.** (Any string containing both spans the entire `b`-block, hence has length $> p$.) So the adversary's $v$ and $y$ live inside at most two adjacent blocks.

*Move 4.* Take $i = 2$. Pumping adds $|v| + |y| > 0$ symbols, distributed over at most two of the three letters — so at least one letter's count is unchanged while at least one increases. The three counts can no longer be equal, so $uv^2xy^2z \notin L$. Contradiction. $\blacksquare$

Enumerate the cases if you want them explicitly: if $vxy$ lies inside the `a`s and `b`s, the `c` count stays at $p$ while the `a` or `b` count grows; if inside the `b`s and `c`s, the `a` count is stranded at $p$; if inside a single block, the other two are stranded. Every case dies the same way, which is the sign of a well-chosen $s$.

**Compare with $\{a^nb^n\}$, which *is* context-free.** The identical $s = a^pb^p$ gives the adversary a window that can straddle the boundary — take $v = a^k$, $y = b^k$ — and pumping keeps the counts equal. Two chunks are exactly enough for two blocks and exactly not enough for three. **That is the whole content of Module 2's ceiling.**

**Example 2 (why you'd care): not closed under intersection.** Take

$$L_1 = \{a^nb^nc^m\} \quad\text{with grammar}\quad S \to XY, \ \ X \to aXb \mid \varepsilon, \ \ Y \to cY \mid \varepsilon,$$
$$L_2 = \{a^mb^nc^n\} \quad\text{with grammar}\quad S \to XY, \ \ X \to aX \mid \varepsilon, \ \ Y \to bYc \mid \varepsilon.$$

Both are visibly context-free — each does *one* matching job and pads the other side freely. (Both grammars machine-checked against their definitions on every string over $\{a,b,c\}$ of length $\le 7$.) A string in both must have $\#a = \#b$ (from $L_1$) and $\#b = \#c$ (from $L_2$), and lie in $a^*b^*c^*$, so

$$L_1 \cap L_2 = \{a^nb^nc^n : n \ge 0\},$$

which Example 1 says is not context-free. So the class is **not closed under intersection**, and by the De Morgan argument above, not under complement either.

Sit with what this costs. For regular languages, closure under complement gave you an algorithm for "do these two machines accept the same language?" — build $A \cap \overline{B}$ and $B \cap \overline{A}$ and look for a reachable accept state. That route is gone for CFLs, and it is not merely that this construction fails: **$EQ_{\mathrm{CFG}}$, "do these two grammars generate the same language," is undecidable.** The missing closure property and the undecidability are the same fact seen from two sides, and Lesson 4.2 will prove it.

The practical version: you cannot ask a parser generator whether your new grammar accepts exactly the same language as the old one. No tool does this, because no tool can.

## Watch out

- **You might think** condition (iii) says $|vy| \le p$ — **but actually** it bounds $|vxy|$, the whole window *including* the untouched middle $x$. That is a much stronger constraint and it is the one that wins every proof: it forces $v$ and $y$ to be close together, which is why they cannot reach two distant blocks. Misremember it and the $\{a^nb^nc^n\}$ proof collapses.
- **You might think** $v$ and $y$ must both be non-empty — **but actually** condition (ii) is only $|vy| > 0$: at least one of them is non-empty, and the other may be $\varepsilon$. So your case analysis must survive the adversary setting $y = \varepsilon$ and pumping only $v$ (which is when the CFL lemma degenerates to the regular one).
- **You might think** CFLs behave like regular languages under set operations — **but actually** intersection and complement both fail, and the failure is not a technicality. It is why the decidable questions about CFGs are so few (Lesson 3.4 and Module 4), and why "context-free" is where practical language specification stops and semantic analysis begins.

## One-liner

> A tall parse tree must repeat a variable, and grafting the repeat duplicates *two* chunks inside a window of width $p$ — enough to keep two blocks in step, never enough for three, which is exactly where one stack runs out.

## Problems

**P1 (🟢)** For each language, say whether it is context-free. Give a grammar (or a one-line PDA description) if it is, and name the obstruction in one sentence if it is not.

(a) $\{a^nb^nc^m : n,m \ge 0\}$  (b) $\{a^nb^mc^n : n,m \ge 0\}$  (c) $\{a^nb^nc^n : n \ge 0\}$  (d) $\{w \in \{a,b\}^* : \#a(w) = 2\,\#b(w)\}$  (e) $\{ww^R : w \in \{0,1\}^*\}$

**P2 (🟡)** Prove that $L = \{\, a^ib^jc^k : 0 \le i \le j \le k \,\}$ is not context-free. Say explicitly how condition (iii) constrains the adversary's window, and note that **the two cases need opposite pump directions** — say which and why.

**P3 (🔴)**

(a) Prove that if $L$ is context-free and $R$ is regular then $L \cap R$ is context-free. Sketch the construction and say what its state set and stack alphabet are.
(b) Use (a) plus Example 1 to prove that $M = \{\,w \in \{a,b,c\}^* : \#a(w) = \#b(w) = \#c(w)\,\}$ is not context-free.
(c) Explain in two sentences why (a) does **not** contradict the failure of closure under intersection in Example 2.

<details>
<summary>Solutions</summary>

**P1** (a) **Context-free.** $S \to XY$, $X \to aXb \mid \varepsilon$, $Y \to cY \mid \varepsilon$. One matching job (`a` against `b`), then free padding.

(b) **Context-free.** $S \to aSc \mid X$, $X \to bX \mid \varepsilon$. The outer recursion pairs each `a` with a `c` — nesting, which a stack handles — and the inner one drops the unconstrained `b`s in the middle. (Machine-checked against the definition on every string over $\{a,b,c\}$ of length $\le 7$.)

Worth noticing: $\{a^nb^mc^n\}$ is context-free even though the matched symbols are *not adjacent*. What matters is that the matching is **nested**, not that it is contiguous.

(c) **Not context-free** (Example 1). The obstruction: it needs two independent comparisons ($\#a = \#b$ and $\#b = \#c$), and pumping can only keep two blocks in step at once.

(d) **Context-free.** A PDA does it with a signed unary counter, exactly as in [Lesson 2.2's P1](02-02-pushdown-automata-and-cfg-equivalence.md) but crediting two units per `a` and debiting one per `b` — accept when the counter returns to zero. (A grammar also exists: $S \to SS \mid aaSb \mid aSbSa \mid bSaSa \mid \varepsilon$, machine-checked against the definition on every string over $\{a,b\}$ of length $\le 7$.) One counter, one comparison — inside the budget.

(e) **Context-free.** The palindrome PDA of [Lesson 2.2's Example 2](02-02-pushdown-automata-and-cfg-equivalence.md): push the first half, guess the midpoint, pop and match. Equivalently $S \to 0S0 \mid 1S1 \mid \varepsilon$.

The pattern across (a)–(e): **one nested comparison is affordable, two independent ones are not.**

**P2** Suppose $L$ is context-free with pumping length $p$. Choose

$$s = a^p b^p c^p,$$

which is in $L$ (since $p \le p \le p$) and has length $3p \ge p$. ✓

*The constraint.* The adversary splits $s = uvxyz$ with $|vy| > 0$ and $|vxy| \le p$. As in Example 1, the window $vxy$ has length at most $p$ while each block has length exactly $p$, so **it cannot contain both an `a` and a `c`** — such a substring would have to span the whole `b`-block and so exceed length $p$. That leaves exactly two cases, and they need opposite pumps.

**Case 1: the window contains no `c`.** Then $v$ and $y$ consist only of `a`s and `b`s. **Pump up** ($i = 2$): the pumped string is $a^{p+d_1}b^{p+d_2}c^{p}$ with $d_1 + d_2 = |vy| > 0$ and the `c`-count stranded at $p$.

 - If $d_2 > 0$ then $j = p + d_2 > p = k$, violating $j \le k$.
 - If $d_2 = 0$ then $d_1 > 0$, so $i = p + d_1 > p = j$, violating $i \le j$.

 Either way $uv^2xy^2z \notin L$.

**Case 2: the window contains no `a`.** Then $v$ and $y$ consist only of `b`s and `c`s. **Pump down** ($i = 0$): the string becomes $a^{p}b^{p-e_1}c^{p-e_2}$ with $e_1 + e_2 = |vy| > 0$ and the `a`-count stranded at $p$.

 - If $e_1 > 0$ then $j = p - e_1 < p = i$, violating $i \le j$.
 - If $e_1 = 0$ then $e_2 > 0$, so $k = p - e_2 < p = j$, violating $j \le k$.

 Either way $uv^0xy^0z = uxz \notin L$.

Every legal split falls into at least one case, so no split survives and $L$ is not context-free. $\blacksquare$

*Why the directions are opposite.* The language is a chain of $\le$ inequalities, and slack sits on different sides depending on which block you disturb. Growing an early block pushes it *above* the later ones; shrinking a late block pulls it *below* the earlier ones. Pumping the wrong way just consumes slack harmlessly — pump *down* in Case 1 and you get $a^{p-d_1}b^{p-d_2}c^p$, which for $d_1 \ge d_2$ is still in $L$ and proves nothing. **Choosing the direction is part of the proof, not a detail.** (Verified exhaustively: for every $p \le 6$ and every legal split of $a^pb^pc^p$, at least one of $i = 0$, $i = 2$ leaves $L$ — and the split's window letters predict which, exactly as the two cases say.)

**P3** (a) Let $P = (Q_P, \Sigma, \Gamma, \delta_P, q_P, F_P)$ be a PDA for $L$ and $D = (Q_D, \Sigma, \delta_D, q_D, F_D)$ a DFA for $R$. Build the PDA

$$P' = \big(\,Q_P \times Q_D,\ \Sigma,\ \Gamma,\ \delta',\ (q_P, q_D),\ F_P \times F_D\,\big)$$

with

$$\delta'\big((p,q),\,a,\,X\big) = \{\, ((p', \delta_D(q,a)),\, \beta) : (p',\beta) \in \delta_P(p,a,X) \,\}\ \text{ for } a \in \Sigma,$$

and on $\varepsilon$-moves of $P$, advance only the first coordinate: $\delta'((p,q),\varepsilon,X) = \{((p',q),\beta) : (p',\beta) \in \delta_P(p,\varepsilon,X)\}$.

This is the [product construction](../reference.md#product-construction) of [Lesson 1.4](01-04-closure-properties-of-regular-languages.md) with the DFA riding along in the finite control. **State set $Q_P \times Q_D$; stack alphabet $\Gamma$, unchanged** — and that is the point: the DFA needs no memory beyond its state, so it costs nothing on the stack. An induction on the number of moves shows $P'$ is in state $(p,q)$ with stack $\gamma$ after reading $u$ exactly when $P$ can be in $(p,\gamma)$ and $D$ is in $q$; so $P'$ accepts $w$ iff both do, i.e. iff $w \in L \cap R$. $\blacksquare$

(b) $M$ is not context-free. The language $a^*b^*c^*$ is regular. If $M$ were context-free, then by (a) so would be

$$M \cap a^*b^*c^* = \{a^nb^nc^n : n \ge 0\},$$

since a string of $a^*b^*c^*$ with all three counts equal is exactly $a^nb^nc^n$. But Example 1 says that language is not context-free. Contradiction. $\blacksquare$

(This is precisely the [Lesson 1.5 Example 2 recipe](01-05-pumping-lemma-and-non-regularity.md) — *filter with a regular language, then reduce to a known impossibility* — reused one tier up. Note that direct pumping on $M$ is painful, because a badly chosen $s$ like $(abc)^p$ pumps.)

(c) The two facts are about different operations. (a) intersects a CFL with a **regular** language, and the construction works because a DFA carries all its memory in finitely many states, so it can be folded into the PDA's finite control while leaving the single stack free for its original job. Example 2 intersects a CFL with **another CFL**, which would require running two stacks at once — and a two-stack machine is strictly more powerful ([Lesson 2.2's third Watch out](02-02-pushdown-automata-and-cfg-equivalence.md): it is a full Turing machine), so there is no PDA to build.

</details>

## Flashback

**From Lesson 2.1 (Context-free grammars):** Let $G$ have rules

$$S \to aSb \mid bSa \mid SS \mid \varepsilon$$

over $\Sigma = \{a,b\}$. (a) Give a leftmost derivation of $abba$. (b) Describe $L(G)$ in one sentence. (c) Is $G$ ambiguous? Justify with a specific string.

<details>
<summary>Solution</summary>

(a) Leftmost — always expand the leftmost $S$:

$$S \Rightarrow SS \Rightarrow aSbS \Rightarrow abS \Rightarrow abbSa \Rightarrow abba.$$

(Step 3 uses $S \to \varepsilon$ on the inner $S$; step 5 uses it again.)

(b) $L(G) = \{\, w \in \{a,b\}^* : \#a(w) = \#b(w) \,\}$ — equally many `a`s and `b`s, in any order. (Machine-checked against the definition on every string over $\{a,b\}$ of length $\le 8$.) Each of the three non-empty rules preserves the balance: $aSb$ and $bSa$ each add one of each, and $SS$ concatenates two balanced strings. Conversely any balanced string either starts and ends with different letters (peel with $aSb$ or $bSa$) or splits at some proper prefix that is itself balanced (use $SS$).

Note this is the same language as [Lesson 2.2's P1](02-02-pushdown-automata-and-cfg-equivalence.md) recognized by a PDA — grammar and machine, as the equivalence theorem promises.

(c) **Yes, $G$ is ambiguous.** The string $abab$ has (at least) two parse trees: one applying $S \to SS$ at the root and splitting into $ab \cdot ab$, and one applying $S \to aSb$ at the root with the inner $S$ deriving $ba$ via $S \to bSa$. Two different root rules, so two different trees.

This is normal and usually harmless: an ambiguous grammar is a defect only if you need the tree to carry meaning, as in [Lesson 2.1's Example 2](02-01-context-free-grammars-derivations-parse-trees.md). Here nobody cares *how* a balanced string was balanced, only that it is — so the ambiguity costs nothing except parser efficiency. Knowing which kind of ambiguity you have is the judgement call.

</details>

## Connections

- **Backward:** the proof is the [pigeonhole principle](../../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md) applied to a root-to-leaf path instead of [Lesson 1.5's](01-05-pumping-lemma-and-non-regularity.md) run, and the adversary game is identical in structure. The intersection-with-regular construction is [Lesson 1.4's](01-04-closure-properties-of-regular-languages.md) product, with the DFA folded into a PDA's finite control.
- **Forward:** everything one stack cannot do, a tape can — Lesson 3.1 builds a Turing machine that decides $\{a^nb^nc^n\}$ in a few lines. The missing closure under complement resurfaces in Lesson 3.4 as the gap between *decidable* and *Turing-recognizable*, and the undecidability of $EQ_{\mathrm{CFG}}$ is proved in Lesson 4.2.
- **Sideways:** "every variable is declared before use" and "the argument count matches the signature" are $a^nb^nc^n$ in disguise, which is why no [programming language](../../programming-languages/syllabus.md) puts them in its grammar — they go in a type checker instead. The same boundary explains why a schema language can enforce nesting but not cross-field consistency, and why the latter is always application code.

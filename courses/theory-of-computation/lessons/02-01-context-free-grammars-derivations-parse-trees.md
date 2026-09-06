# Automata & Computability · Lesson 2.1: Context-free grammars, derivations & parse trees

> ⏱ ~15 min · Module 2: Context-Free Languages & Pushdown Automata · Builds on: [1.5 (the pumping lemma)](01-05-pumping-lemma-and-non-regularity.md) · Unlocks: 2.2 (pushdown automata)

## Why this matters

Lesson 1.5 ended with a wall: no finite automaton can match nested brackets. This module climbs over it, and grammars are the first step.

A grammar is a *generator* rather than a recognizer — a set of rewrite rules that build strings from the inside out. The move that matters is **recursion**: a rule whose right-hand side mentions the symbol on its left. That single feature produces unbounded nesting from finitely many rules, which is exactly what finite memory could not do.

Every programming language you have used is specified by a context-free grammar, and so is JSON, so is arithmetic. What you are learning to judge here is not how to write a parser — that is generated from the grammar automatically — but whether a grammar **says what its author meant**. The characteristic bug is *ambiguity*: a grammar that assigns two different structures to one string, so that `a + a × a` has two meanings and the parser picks one for reasons nobody wrote down. Spotting that, diagnosing which rule causes it, and repairing it is the skill, and it is the one that still bites in real language design.

## The idea

A grammar is a set of substitution rules. Start from one symbol, repeatedly replace a symbol by one of its right-hand sides, and stop when only terminal characters remain. Whatever you can produce this way is in the language.

$$S \to 0S1 \mid \varepsilon$$

reads: "$S$ can become `0`, then another $S$, then `1` — or it can vanish." Run it and you get $\varepsilon$, $01$, $0011$, $000111$ — the language Lesson 1.5 proved no DFA can recognize. Two rules, and the wall is gone.

The reason it works is that the recursion **remembers by position**. When the rule writes `0` on the left and `1` on the right, the two are committed to matching by the *shape of the derivation*, not by a counter. There is no number being stored anywhere; the pairing is structural. That is the trick a finite automaton cannot pull off and a stack can (Lesson 2.2).

The other half of the lesson is that a derivation carries more information than the string it produces. Draw the substitutions as a tree — each rule application a node, its right-hand side the children — and you get a **parse tree**, which records *how* the string was built. For a programming language that tree is the meaning: it says what binds to what. If one string has two parse trees, the grammar has failed to specify a meaning, and no amount of parser engineering fixes it.

## The formal version

A **context-free grammar** is a 4-tuple $G = (V, \Sigma, R, S)$ where

- $V$ is a finite set of **variables** (nonterminals),
- $\Sigma$ is a finite set of **terminals**, disjoint from $V$,
- $R$ is a finite set of **rules**, each of the form $A \to \alpha$ with $A \in V$ and $\alpha \in (V \cup \Sigma)^*$,
- $S \in V$ is the **start variable**.

"Context-free" means the left side of every rule is a *single* variable: you may rewrite $A$ wherever it appears, with no regard for what surrounds it.

Write $\alpha A \beta \Rightarrow \alpha \gamma \beta$ when $A \to \gamma$ is a rule — **one derivation step** — and $\Rightarrow^*$ for zero or more steps. A string in $(V \cup \Sigma)^*$ reached this way is a **sentential form**. The **language of $G$** is

$$L(G) = \{\, w \in \Sigma^* : S \Rightarrow^* w \,\},$$

and a language is **context-free** if it equals $L(G)$ for some CFG.

A derivation is **leftmost** if every step rewrites the leftmost variable in the current sentential form (**rightmost**, likewise). Fixing a discipline removes the boring freedom to interleave independent substitutions differently.

A **parse tree** for a derivation has the start variable at the root; each internal node is labelled by a variable $A$ and its children, left to right, spell the right-hand side of the rule applied to it; leaves are terminals or $\varepsilon$; and reading the leaves left to right gives the derived string (the tree's **yield**).

$G$ is **ambiguous** if some $w \in L(G)$ has two or more distinct parse trees — equivalently, two or more distinct *leftmost* derivations. (The equivalence is the reason to bother with "leftmost": parse trees and leftmost derivations correspond one-to-one, so counting either counts the other.)

Two facts worth carrying, stated without proof:

- **Chomsky normal form.** Every CFG can be converted to one whose rules are all $A \to BC$ or $A \to a$ (plus $S \to \varepsilon$ if needed), generating the same language. This makes every parse tree binary, which is what the CYK parsing algorithm and the pumping argument of Lesson 2.3 both need.
- **Inherent ambiguity.** Some context-free languages have *no* unambiguous grammar at all — $\{a^ib^jc^k : i = j \text{ or } j = k\}$ is the standard example. So "rewrite the grammar" is not always available, though it is for every language you will meet in practice.

## Picture

![Two parse trees for the string a plus a times a under the grammar E goes to E plus E, E times E, parenthesised E, or a. The left tree applies the plus rule at the root, grouping as a plus the product; the right tree applies the times rule at the root, grouping as the sum times a.](assets/02-01-fig1.svg)

Both trees have the same leaves in the same order — both yield `a + a × a`. They differ only in which rule was applied at the root, and that difference is the whole meaning of the expression. With $a = 2$ the left tree evaluates to $6$ and the right to $8$.

This is what ambiguity *is*: not a string the grammar fails to generate, and not a string it generates twice, but a string whose structure the grammar declines to pin down. A parser built from this grammar will produce one of these trees, chosen by an implementation detail of the parsing algorithm. That is a specification bug, and it lives in the grammar.

## Worked examples

**Example 1 (mechanical): $S \to 0S1 \mid \varepsilon$.** Derive $000111$ leftmost. There is only one variable, so every step is forced up to which rule you pick:

$$S \Rightarrow 0S1 \Rightarrow 00S11 \Rightarrow 000S111 \Rightarrow 000111.$$

Three uses of the recursive rule, then the $\varepsilon$ rule to stop. The parse tree is a chain: the root $S$ has children $0,\ S,\ 1$; that inner $S$ has children $0, S, 1$; and so on, with $\varepsilon$ at the bottom.

Claim: $L(G) = \{0^n1^n : n \ge 0\}$. *Proof.* ($\supseteq$) Applying the recursive rule $n$ times then the $\varepsilon$ rule yields $0^n1^n$. ($\subseteq$) Induct on the number of steps: the invariant is that every sentential form derivable from $S$ is either $0^kS1^k$ or $0^k1^k$ for some $k \ge 0$. It holds initially ($k=0$), and each rule preserves it — $0^kS1^k \Rightarrow 0^{k+1}S1^{k+1}$ or $0^kS1^k \Rightarrow 0^k1^k$. Terminal strings derivable from $S$ are therefore exactly the $0^k1^k$. $\blacksquare$ (Machine-checked: the grammar generates exactly $\varepsilon, 01, 0011, 000111, 00001111$ among strings of length $\le 8$.)

Note the shape of the argument — an invariant on sentential forms, preserved by every rule, proved by induction. It is the grammar analogue of Lesson 1.1's state invariant, and it is how every "this grammar generates that language" claim gets proved.

**Example 2 (why you'd care): the ambiguous expression grammar and its repair.** Take

$$E \to E + E \mid E \times E \mid (E) \mid a.$$

It generates every well-formed arithmetic expression over the single variable `a`, and it is ambiguous — the Picture shows $a + a \times a$ with two parse trees. It gets worse with length: $a + a \times a + a$ has **five** distinct parse trees (the Catalan number $C_3$, one per way of bracketing four operands).

The diagnosis: the grammar has one variable doing three jobs. Nothing in it says $\times$ binds tighter than $+$, and nothing says $+$ associates to the left. Precedence and associativity are facts about the language that the grammar simply never states, so the parse tree is free to invent them.

The repair is to **give each precedence level its own variable**, with the looser operator higher up:

$$E \to E + T \mid T, \qquad T \to T \times F \mid F, \qquad F \to (E) \mid a.$$

Now $E$ ("expression") is a sum of $T$s, $T$ ("term") is a product of $F$s, and $F$ ("factor") is an atom or a parenthesised group. A $+$ can never appear below a $\times$ without parentheses, because the only route from $T$ down to a $+$ passes through $F \to (E)$. And the *left* recursion in $E \to E + T$ forces left associativity: the recursive occurrence is on the left, so the left operand is the one allowed to be a sum.

The unique parse of $a + a \times a$ is now

$$E[\ E[\,T[\,F[a]\,]\,]\ +\ T[\ T[\,F[a]\,]\ \times\ F[a]\ ]\ ],$$

with the multiplication sitting below the addition, i.e. $a + (a \times a)$ — the intended reading. (Machine-checked: over all $257$ strings of length $\le 9$ that the layered grammar generates, every one has exactly one parse tree, and the two grammars generate the same language up to length 9.)

**This is the archetypal grammar judgement.** You will not be asked to write a parser; you will be asked whether a grammar means what someone thinks it means, and the two moves — *find the string with two trees*, then *name the missing distinction and add a variable for it* — are the whole job.

## Watch out

- **You might think** two different derivations mean the grammar is ambiguous — **but actually** the same parse tree usually admits many derivations, because independent variables can be expanded in any order. $A \Rightarrow BC \Rightarrow bC \Rightarrow bc$ and $A \Rightarrow BC \Rightarrow Bc \Rightarrow bc$ are the same tree. Ambiguity means two distinct **parse trees**, equivalently two distinct **leftmost** derivations. Always fix a discipline before counting.
- **You might think** an ambiguous grammar means an ambiguous *language* — **but actually** the property belongs to the grammar, and most ambiguous grammars can be repaired, as in Example 2. (A language with *no* unambiguous grammar is called inherently ambiguous, and those are rare and pathological.) So the right response to ambiguity is to rewrite the grammar, not to conclude that the language is broken.
- **You might think** "context-free" describes the *language* being free of context — **but actually** it describes the *rules*: each left-hand side is a bare variable, so a rule fires regardless of neighbours. Plenty of context-sensitive-sounding languages are context-free, and the plainly-context-free-sounding $\{a^nb^nc^n\}$ is not (Lesson 2.3).

## One-liner

> A grammar generates rather than recognizes, recursion buys unbounded nesting from finitely many rules, and a parse tree — not the string — is where the meaning lives, which is why ambiguity is a bug in the specification and not in the parser.

## Problems

**P1 (🟢)** Let $G$ have rules $S \to aSb \mid SS \mid \varepsilon$ over $\Sigma = \{a, b\}$.

(a) Give a leftmost derivation of $aabbab$. (b) Draw its parse tree (an indented list or bracketed form is fine). (c) Describe $L(G)$ in one sentence, reading `a` as `(` and `b` as `)`.

**P2 (🟡)** Write a context-free grammar for each, and give a leftmost derivation of the sample string.

(a) $\{\, w \in \{a,b\}^* : w = w^R \,\}$ — the palindromes. Sample: $abba$.
(b) $\{\, a^i b^j c^k : i = j + k,\ j,k \ge 0 \,\}$. Sample: $aaabbc$. *(Hint: two layers of recursion — one pairs an `a` with a `c`, the other pairs an `a` with a `b`.)*

**P3 (🔴)** The following grammar abstracts the `if`/`then`/`else` statement of a programming language. Terminals: `i` (for "`if` *cond* `then`"), `e` (for "`else`"), `a` (for any other statement).

$$S \to i\,S\,e\,S \mid i\,S \mid a$$

(a) Show the grammar is ambiguous by exhibiting a string with two distinct parse trees, and give both trees. Use the shortest such string.
(b) Say in one sentence which real-world question the two trees disagree about.
(c) Here is a proposed repair, splitting statements into **matched** ($M$: every `i` has its `e`) and **unmatched** ($U$):

$$S \to M \mid U, \qquad M \to i\,M\,e\,M \mid a, \qquad U \to i\,S \mid i\,M\,e\,U.$$

Parse your string from (a) with this grammar and say which of the two readings it enforces — then explain, in one sentence, what structural feature of the rules forces it.

<details>
<summary>Solutions</summary>

**P1** (a) Leftmost, so always expand the leftmost $S$:

$$S \Rightarrow SS \Rightarrow aSbS \Rightarrow aaSbbS \Rightarrow aabbS \Rightarrow aabbaSb \Rightarrow aabbab.$$

(Step 3 uses $S \to aSb$ on the inner $S$; step 4 uses $S \to \varepsilon$; step 5 uses $S \to aSb$ on the trailing $S$; step 6 uses $S \to \varepsilon$ again.)

(b) The parse tree, bracketed:

$$S\big[\ S[\,a\ S[\,a\ S[\varepsilon]\ b\,]\ b\,]\ \ S[\,a\ S[\varepsilon]\ b\,]\ \big]$$

Root $S$ splits by $S \to SS$ into two children. The first child derives $aabb$ (nested), the second derives $ab$.

(c) Reading `a` as `(` and `b` as `)`, $L(G)$ is the language of **balanced parenthesis strings** — every prefix has at least as many opens as closes, and the totals are equal. The three rules are exactly the three ways to build one: wrap a balanced string in a new pair ($aSb$), place two balanced strings side by side ($SS$), or take the empty string. And $aabbab$ is $(())()$. This is the canonical language that Lesson 1.5 proved is not regular — the grammar handles it in three rules.

**P2** (a) Palindromes:

$$S \to aSa \mid bSb \mid a \mid b \mid \varepsilon.$$

The two recursive rules peel a matching pair off both ends; the three base rules cover the middle, which is a single character for odd length and empty for even. Leftmost derivation of $abba$:

$$S \Rightarrow aSa \Rightarrow abSba \Rightarrow abba.$$

(Machine-checked: this grammar generates exactly the palindromes over $\{a,b\}$ of length $\le 6$.)

(b) $\{a^ib^jc^k : i = j+k\}$. Each `b` needs one `a` and each `c` needs one `a`, but the `a`s all come first, the `b`s in the middle, the `c`s last. So pair outside-in: the *outer* recursion matches an `a` with a `c`, and once the `c`s are done the *inner* recursion matches an `a` with a `b`.

$$S \to aSc \mid T, \qquad T \to aTb \mid \varepsilon.$$

Check the counts: $S \Rightarrow^* a^kTc^k \Rightarrow^* a^ka^jb^jc^k = a^{k+j}b^jc^k$, so $i = j + k$ exactly. Leftmost derivation of $aaabbc$ (here $k=1$, $j=2$):

$$S \Rightarrow aSc \Rightarrow aTc \Rightarrow aaTbc \Rightarrow aaaTbbc \Rightarrow aaabbc.$$

(Machine-checked against the arithmetic condition on every string over $\{a,b,c\}$ of length $\le 8$.)

Why the *outer* loop must be the `a`/`c` one: an inner $aTb$ produced inside $aSc$ places its `b` immediately before the `c`s, which is where `b`s belong. Reversing the nesting would interleave and generate strings outside the language.

**P3** (a) The shortest ambiguous string is $\mathbf{iiaea}$ (length 5) — "if, if, statement, else, statement." Its two parse trees:

$$\text{Tree 1:}\quad S\big[\ i\ \ S[\,i\ S[a]\,]\ \ e\ \ S[a]\ \big] \qquad\text{(outer } i \text{ takes the } e)$$

$$\text{Tree 2:}\quad S\big[\ i\ \ S[\,i\ S[a]\ e\ S[a]\,]\ \big] \qquad\text{(inner } i \text{ takes the } e)$$

In Tree 1 the root applies $S \to iSeS$, so the `else` belongs to the **outer** `if`, and the inner `if` (via $S \to iS$) has none. In Tree 2 the root applies $S \to iS$, so the outer `if` has no `else` and the **inner** one claims it. (Machine-checked: $iiaea$ has exactly 2 parse trees, and no shorter string has more than one.)

(b) They disagree about **which `if` the dangling `else` attaches to** — the classic dangling-else problem. In a real language this is the difference between running the alternative when the outer condition fails and running it when the inner one fails, so the two trees describe programs that behave differently.

(c) With the repaired grammar, $iiaea$ has exactly one parse tree:

$$S\big[\ U[\ i\ \ S[\ M[\,i\ M[a]\ e\ M[a]\,]\ ]\ ]\ \big]$$

The outer `if` is **unmatched** ($U \to iS$) and the `e` goes to the **inner** `if` — Tree 2 above, which is the rule every real language uses: *an `else` binds to the nearest unmatched `if`.*

The structural feature that forces it: in $M \to i\,M\,e\,M$, the statement **between** `i` and `e` is required to be $M$ — fully matched. So an unmatched `if` can never sit between an `i` and its `e`, which is exactly what Tree 1 needed. The only remaining home for an unmatched `if` is the $U$ rules, both of which put it outermost. (Machine-checked: the repaired grammar generates the same language as the original — verified on all strings of length $\le 9$ — and every one of the $116$ strings it generates up to length 11 has exactly one parse tree.)

</details>

## Flashback

**From Lesson 1.4 (Closure properties):** Let $L \subseteq \Sigma^*$ be regular. Prove that

$$\operatorname{Suf}(L) = \{\, y \in \Sigma^* : xy \in L \text{ for some } x \in \Sigma^* \,\}$$

— the set of **suffixes** of strings in $L$ — is regular. (In Lesson 1.4 you did this for prefixes by changing the accept set; the suffix case needs a different move.)

<details>
<summary>Solution</summary>

Let $M = (Q,\Sigma,\delta,q_0,F)$ be a DFA for $L$, and let

$$\operatorname{Reach} = \{\, q \in Q : \hat\delta(q_0, x) = q \text{ for some } x \in \Sigma^* \,\}$$

be the states reachable from the start. Build the **NFA** $N$ with state set $Q \cup \{s\}$ for a fresh start state $s$, all of $M$'s transitions kept, accept set $F$, and

$$\delta_N(s, \varepsilon) = \operatorname{Reach}.$$

That is: $N$ guesses, for free and before reading anything, which state the missing prefix $x$ would have left $M$ in, and then runs $M$ on $y$ from there.

*Correctness.* $y \in L(N)$ iff some $q \in \operatorname{Reach}$ has $\hat\delta(q, y) \in F$, iff there is an $x$ with $\hat\delta(q_0, x) = q$ and $\hat\delta(q, y) \in F$, iff there is an $x$ with $\hat\delta(q_0, xy) \in F$, iff $xy \in L$ for some $x$ — which is $y \in \operatorname{Suf}(L)$. $\operatorname{Reach}$ is computable by a forward search from $q_0$ on the transition graph, so $N$ is a genuine finite automaton, and $\operatorname{Suf}(L)$ is regular by Lesson 1.2. $\blacksquare$

**Contrast with the prefix case.** For $\operatorname{Pref}(L)$ you keep the start state and enlarge the *accept* set (to the states that can still reach $F$). For $\operatorname{Suf}(L)$ you keep the accept set and enlarge the *start* — and since a DFA is only allowed one start state, you need nondeterminism to do it. That is the freedom [Lesson 1.2](01-02-nfa-and-the-subset-construction.md) bought you, used for exactly what it is good at: guessing something about the past.

</details>

## Connections

- **Backward:** the correctness argument in Example 1 is the same invariant-plus-[induction](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) as Lesson 1.1's, moved from states to sentential forms; and $\{0^n1^n\}$ is precisely the language [Lesson 1.5](01-05-pumping-lemma-and-non-regularity.md) proved beyond finite memory. Parse trees are rooted trees in the sense of [discrete-mathematics 5.3](../../discrete-mathematics/lessons/05-03-trees-and-graph-coloring.md).
- **Forward:** Lesson 2.2 gives the machine that matches these grammars — a stack is exactly what walks a parse tree — and Lesson 2.3 pumps the *tree* rather than the run, to prove some languages have no grammar at all. Chomsky normal form, mentioned here, is what makes that argument work.
- **Sideways:** this is the front end of every compiler; [programming-languages](../../programming-languages/syllabus.md) takes the layered grammar of Example 2 as the definition of operator precedence, and the dangling-else of P3 is a documented wart in C, Java and JavaScript, resolved by a rule bolted onto the specification rather than expressed in the grammar. The CYK algorithm that parses a Chomsky-normal-form grammar in $O(n^3)$ is a dynamic program of the kind [algorithms](../../algorithms/syllabus.md) treats.

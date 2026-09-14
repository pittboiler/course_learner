# Programming Languages · Lesson 1.5: LR parsing and the item automaton

> ⏱ ~15 min · Module 1: Syntax and parsing · Builds on: [1.4 (recursive descent and LL(1))](01-04-recursive-descent-and-ll1.md), [`theory-of-computation` 2.2 (pushdown automata)](../../theory-of-computation/lessons/02-02-pushdown-automata-and-cfg-equivalence.md) · Unlocks: [1.6 (name resolution)](01-06-name-resolution-and-the-semantic-phase.md)

## Why this matters

A top-down parser must decide which production to use *before* it has seen the production's contents — that is why it needs FIRST, FOLLOW, and a grammar bent into shape. A bottom-up parser decides *after*: it accumulates tokens until it recognizes a complete right-hand side, then folds it into its left-hand side. Deferring the decision is strictly more powerful, and the price is that you can no longer see the parser in the shape of your code.

The payoff is concrete. LR parses the left-recursive expression grammar *as written*, with the associativity still encoded in the grammar and no loop-accumulator patch. It accepts every LL(1) grammar and many that are not. And when a grammar is genuinely ambiguous, the LR construction tells you so mechanically, pointing at the state and the lookahead — which is why parser generators are still the tool of choice for *designing* a grammar, even when the shipped parser is hand-written recursive descent.

## The idea

Keep a stack. At each step, look at the stack top and the next token and make one of two moves:

- **shift** — push the next token onto the stack;
- **reduce** — the top $k$ symbols of the stack match some production's right-hand side $A \to \alpha$; pop them and push $A$.

That is the whole machine. Everything hard is in "how do you know which move?", and the answer is the elegant part: you *precompute* it, by building a finite automaton whose states remember how much of which productions you might currently be in the middle of.

The key object is an **item**: a production with a dot marking how far you have got. The item $E \to E \cdot + T$ means "I have seen an $E$, and if a `+` comes next I will be on my way to completing $E \to E + T$." A parser state is a *set* of items — every production you might be partway through, given everything on the stack. A dot at the far right, $T \to \texttt{n} \cdot$, means a right-hand side is complete: reduce.

The stack does not hold symbols; it holds **states**. The states already summarize everything the parser needs to remember about the symbols below, which is why the lookup is a table index rather than a search.

## The formal version

**Definition (LR(0) item).** *(card: [lr0 item and the item automaton](../reference.md#lr0-item-and-the-item-automaton))* For a production $A \to \alpha\beta$, the item $A \to \alpha \cdot \beta$. An item with the dot at the right end is **complete**.

**Definition (closure).** If $A \to \alpha \cdot B\beta$ is in a state and $B$ is a nonterminal, then for every production $B \to \gamma$ the item $B \to \cdot\,\gamma$ is also in that state. Iterate to a fixed point.

In words: if you are expecting a $B$ next, you are simultaneously at the start of every way of making a $B$.

**Definition (goto).** $\mathrm{goto}(I, X)$ is the closure of $\{A \to \alpha X \cdot \beta \;:\; A \to \alpha \cdot X\beta \in I\}$ — advance the dot past $X$ in every item that can, then close.

**Construction (the item automaton).** Augment the grammar with $S' \to S$. The start state is the closure of $\{S' \to \cdot\,S\}$; repeatedly apply goto for every symbol until no new states appear. The result is a DFA whose states are item sets — and the remarkable fact is that this DFA recognizes exactly the **viable prefixes**: the stack contents that could still lead to a successful parse.

**Construction (the SLR(1) table).** For each state $i$:

- if $A \to \alpha \cdot a\beta \in I_i$ with $a$ a terminal, set $\mathrm{action}[i, a] = \text{shift } \mathrm{goto}(I_i, a)$;
- if $A \to \alpha \cdot \in I_i$ with $A \ne S'$, set $\mathrm{action}[i, b] = \text{reduce } A \to \alpha$ for every $b \in \mathrm{FOLLOW}(A)$;
- if $S' \to S \cdot \in I_i$, set $\mathrm{action}[i, \mathsf{eof}] = \text{accept}$;
- $\mathrm{goto}[i, A] = \mathrm{goto}(I_i, A)$ for nonterminals $A$.

**Definition (conflict).** A cell receiving two entries. A **shift-reduce** conflict is a state that both can shift on $a$ and wants to reduce on $a$; a **reduce-reduce** conflict is a state wanting to reduce by two different productions on the same lookahead. A grammar is SLR(1) exactly when no cell conflicts.

In words: a shift-reduce conflict means "I cannot tell whether this construct is finished"; a reduce-reduce conflict means "I cannot tell which construct I just finished". The first is usually an ambiguity or a missing precedence declaration; the second usually means the grammar genuinely cannot distinguish two forms with one token of lookahead.

**The hierarchy.** $\text{LL}(1) \subsetneq \text{SLR}(1) \subsetneq \text{LALR}(1) \subsetneq \text{LR}(1)$, and all of them are strictly inside the unambiguous context-free grammars. The stronger constructions differ only in how precisely they compute the lookahead for a reduce: SLR uses $\mathrm{FOLLOW}(A)$ globally, LR(1) carries a lookahead in each item so it can be state-specific, and LALR(1) merges LR(1) states with identical cores as a size compromise — which is what `yacc` and `bison` build.

## Picture

![Six boxes of item sets connected by labelled arrows. I0 contains S-prime to dot E, E to dot E plus T, E to dot T, and T to dot n. An arrow labelled E goes to I1 containing S-prime to E dot and E to E dot plus T. An arrow labelled T goes to I2 containing E to T dot. An arrow labelled n goes to I3 containing T to n dot. From I1 an arrow labelled plus goes to I4 containing E to E plus dot T and T to dot n. From I4 an arrow labelled T goes to I5 containing E to E plus T dot, and an arrow labelled n goes back to I3. A caption notes the reduce states are I1, I2, I3 and I5, and that no state both shifts and reduces.](assets/01-05-fig1.svg)

This is the whole automaton for $E \to E + T \mid T$, $T \to \texttt{n}$ — **the left-recursive grammar, unmodified**. Left recursion is not merely tolerated here, it is *preferred*: the item $E \to E \cdot + T$ in $I_1$ is the parser holding a completed $E$ and waiting to extend it, which is a natural loop, whereas a right-recursive grammar would pile every operand on the stack before reducing any of it.

Note that $I_3$ is reached from both $I_0$ and $I_4$. States are shared whenever the item sets coincide, which is why the automaton stays small.

## Worked examples

**Example 1 (mechanical): parse `n + n`.** Using the automaton above, with productions numbered 1: $E \to E + T$, 2: $E \to T$, 3: $T \to \texttt{n}$.

| stack (states) | symbols | input | action |
|---|---|---|---|
| 0 | | `n + n eof` | shift 3 |
| 0 3 | `n` | `+ n eof` | reduce $T \to \texttt{n}$ |
| 0 2 | `T` | `+ n eof` | reduce $E \to T$ |
| 0 1 | `E` | `+ n eof` | shift 4 |
| 0 1 4 | `E +` | `n eof` | shift 3 |
| 0 1 4 3 | `E + n` | `eof` | reduce $T \to \texttt{n}$ |
| 0 1 4 5 | `E + T` | `eof` | reduce $E \to E + T$ |
| 0 1 | `E` | `eof` | accept |

Read one reduce closely. At row 6 the stack top is state 3, whose only item is $T \to \texttt{n}\cdot$ — complete — so the parser reduces. It pops one state (the length of the right-hand side), exposing state 4, and consults $\mathrm{goto}[4, T] = 5$. **The pop count is the right-hand side's length and the push is a goto lookup**; there is no searching of the stack.

Compare with the recursive-descent trace of [Lesson 1.4](01-04-recursive-descent-and-ll1.md) on a similar input. That parser decided "this is an $E$" on its first token. This one does not commit to $E \to E + T$ until row 7, after it has seen the entire right-hand side. That deferral is the whole of LR's extra power.

**Example 2 (why you'd care): a shift-reduce conflict you should not silence.** Take the dangling-else grammar $S \to \texttt{i}\,E\,\texttt{t}\,S\,S' \mid \texttt{a}$, $S' \to \texttt{e}\,S \mid \varepsilon$, $E \to \texttt{b}$.

The SLR(1) construction yields **11 states and exactly one conflict**: in the state containing both $S' \to \cdot\,\texttt{e}\,S$ and $S' \to \cdot$ (i.e. the parser has just finished the inner `if`'s body and is deciding whether an `else` belongs to it), the lookahead `e` can either **shift** — start consuming `e S`, attaching the `else` to this inner `if` — or **reduce** $S' \to \varepsilon$, ending the inner `if` and leaving the `else` for an outer one. Both are legal continuations, because the grammar is ambiguous.

`yacc` resolves shift-reduce conflicts by **preferring shift**, silently, and prints a warning count. Here that default is exactly right: shifting attaches `else` to the nearest `if`, matching C, Java and JavaScript. But notice what happened — the compiler writer got the correct language behaviour from a *tie-break in a table generator*, not from anything written in the grammar. That is why the warning matters: a shift-reduce conflict you did not expect is a genuine ambiguity you have not thought about, and the default may not be the semantics you want.

**Reduce-reduce conflicts have no such comfortable default.** They almost always mean the grammar is wrong, and generators resolve them by picking the earliest-listed production, which is rarely what anyone intended. Boss problem 1 works this grammar through both techniques in full.

## Watch out

- **You might think** the parser stack holds grammar symbols — **but actually** it holds automaton states, and the symbols in a trace table are shown only for human readability. The state already encodes everything about the symbols beneath it, which is what makes each step a constant-time table lookup.
- **You might think** a shift-reduce conflict means the grammar is broken — **but actually** it means one token of lookahead is not enough *for this construction*. Sometimes the grammar is ambiguous (dangling else), sometimes a stronger construction resolves it (SLR fails, LALR succeeds), and sometimes a precedence declaration is the right fix. Diagnose before you silence.
- **You might think** LR's extra power makes recursive descent obsolete — **but actually** most production compilers are hand-written recursive descent, because error recovery, error message quality, and ad-hoc context sensitivity (Lesson 1.6, and C's lexer hack from Lesson 1.3) are all far easier when the parser is code you wrote. The common practice is to *design* the grammar with a generator, confirm it is conflict-free, and then implement it by hand.

## One-liner

> Bottom-up parsing defers the decision until the whole right-hand side is on the stack, and the item automaton is the precomputed answer to "given everything I have seen, what could I be in the middle of?"

## Problems

**P1 (🟢)** For the grammar $S' \to S$, $S \to (\,S\,) \mid \texttt{x}$:

(a) Give the closure of $\{S' \to \cdot\,S\}$ — list every item.
(b) Compute $\mathrm{goto}$ of that state on `(`, on `x`, and on $S$.
(c) State how many states the full LR(0) automaton has.

**P2 (🟡)** For each situation, classify the conflict as shift-reduce or reduce-reduce, and say in one sentence what the parser cannot decide.

(a) A state contains $E \to E \cdot + T$ and $E \to E + T \cdot$, with `+` in $\mathrm{FOLLOW}(E)$.
(b) A state contains $A \to \texttt{x} \cdot$ and $B \to \texttt{x} \cdot$, with $\mathrm{FOLLOW}(A) \cap \mathrm{FOLLOW}(B) \ne \emptyset$.
(c) A state contains $S' \to \cdot\,\texttt{e}\,S$ and $S' \to \cdot$, with `e` in $\mathrm{FOLLOW}(S')$.

**P3 (🔴)** The grammar $S \to A\,\texttt{a} \mid \texttt{b}\,A\,\texttt{c} \mid B\,\texttt{c} \mid \texttt{b}\,B\,\texttt{a}$, $A \to \texttt{d}$, $B \to \texttt{d}$ is the classic example of a grammar that is LALR(1)-problematic.

(a) After reading the single token `d` from the start state, which two complete items are in the resulting state?
(b) Compute $\mathrm{FOLLOW}(A)$ and $\mathrm{FOLLOW}(B)$, and use them to show that the **SLR(1)** construction has a reduce-reduce conflict in that state. Name the lookahead tokens on which it conflicts.
(c) An LR(1) item carries its own lookahead, written $[A \to \texttt{d}\cdot,\ a]$. Explain in two sentences why the LR(1) construction has no conflict here, and say what it is using that SLR(1) throws away.

<details>
<summary>Solutions</summary>

**P1**

(a) Start from $S' \to \cdot\,S$. The dot precedes the nonterminal $S$, so add $S \to \cdot\,(\,S\,)$ and $S \to \cdot\,\texttt{x}$. Neither new item has a dot before a nonterminal, so the closure is complete:

$$I_0 = \{\,S' \to \cdot\,S,\quad S \to \cdot\,(\,S\,),\quad S \to \cdot\,\texttt{x}\,\}$$

(b)
- $\mathrm{goto}(I_0, \texttt{(}\,)$: advance the dot in $S \to \cdot\,(\,S\,)$, giving $S \to (\cdot\,S\,)$; the dot now precedes $S$, so close with $S \to \cdot\,(\,S\,)$ and $S \to \cdot\,\texttt{x}$. Result: $\{S \to (\cdot\,S\,),\ S \to \cdot\,(\,S\,),\ S \to \cdot\,\texttt{x}\}$ — three items.
- $\mathrm{goto}(I_0, \texttt{x})$: $\{S \to \texttt{x}\cdot\}$ — one item, complete.
- $\mathrm{goto}(I_0, S)$: $\{S' \to S\cdot\}$ — one item, the accepting state.

(c) **Six states.** In full, with the transitions that produce them:

| state | items | reached from |
|---|---|---|
| $I_0$ | $S' \to \cdot\,S$; $S \to \cdot\,(\,S\,)$; $S \to \cdot\,\texttt{x}$ | start |
| $I_1$ | $S \to (\cdot\,S\,)$; $S \to \cdot\,(\,S\,)$; $S \to \cdot\,\texttt{x}$ | $I_0$ and $I_1$ on `(` |
| $I_2$ | $S' \to S\cdot$ | $I_0$ on $S$ — accept |
| $I_3$ | $S \to \texttt{x}\cdot$ | $I_0$ and $I_1$ on `x` |
| $I_4$ | $S \to (\,S\cdot\,)$ | $I_1$ on $S$ |
| $I_5$ | $S \to (\,S\,)\cdot$ | $I_4$ on `)` |

Two transitions are worth noticing, because they are why the automaton stays finite even though the language nests to unbounded depth: $I_1$ goes to **itself** on `(`, and both $I_0$ and $I_1$ go to the **same** $I_3$ on `x`. The automaton has no way to count open parentheses — that counting is done by the *stack*, which grows one entry per shift, while the state set stays at six.

**P2**

(a) **Shift-reduce.** The first item can shift `+` (to continue building $E + T$); the second is complete and, since `+` is in $\mathrm{FOLLOW}(E)$, wants to reduce $E \to E + T$ on `+`. The parser cannot decide whether the `+` it sees *extends* the expression it is currently building or *begins a new one applied to the expression it just finished* — which is the associativity question, and it is why real generators let you declare `%left '+'` to settle it.

(b) **Reduce-reduce.** Both items are complete over the same symbol `x`, and their FOLLOW sets overlap, so on a lookahead in the intersection the parser must reduce but cannot tell whether the `x` it just consumed was an $A$ or a $B$. It cannot decide *which construct it just finished*.

(c) **Shift-reduce.** The first item can shift `e`; the second is complete (an empty right-hand side is complete as soon as the state is entered) and wants to reduce $S' \to \varepsilon$ on any lookahead in $\mathrm{FOLLOW}(S')$, which includes `e`. The parser cannot decide whether the `else` belongs to this `if` or to an enclosing one — the dangling-else conflict of Example 2.

**P3**

(a) From the start state, both $A \to \cdot\,\texttt{d}$ and $B \to \cdot\,\texttt{d}$ are in the closure (since $S \to \cdot\,A\,\texttt{a}$ and $S \to \cdot\,B\,\texttt{c}$ both put a dot before a nonterminal). Advancing on `d` gives a state containing exactly the two complete items

$$\{\,A \to \texttt{d}\cdot,\quad B \to \texttt{d}\cdot\,\}$$

(b) $A$ appears in $S \to A\,\texttt{a}$ and $S \to \texttt{b}\,A\,\texttt{c}$, so $\mathrm{FOLLOW}(A) = \{\texttt{a}, \texttt{c}\}$. $B$ appears in $S \to B\,\texttt{c}$ and $S \to \texttt{b}\,B\,\texttt{a}$, so $\mathrm{FOLLOW}(B) = \{\texttt{c}, \texttt{a}\}$.

The SLR(1) rule sets $\mathrm{action}[i, b] = \text{reduce } A \to \texttt{d}$ for every $b \in \mathrm{FOLLOW}(A) = \{\texttt{a},\texttt{c}\}$, and $\text{reduce } B \to \texttt{d}$ for every $b \in \mathrm{FOLLOW}(B) = \{\texttt{a},\texttt{c}\}$. Both cells $[i, \texttt{a}]$ and $[i, \texttt{c}]$ therefore receive two reduce entries: a **reduce-reduce conflict on both `a` and `c`**.

(c) LR(1) does not use the global FOLLOW set; it propagates a lookahead into each item as the automaton is built, so the state reached on `d` *from the start state* contains $[A \to \texttt{d}\cdot,\ \texttt{a}]$ and $[B \to \texttt{d}\cdot,\ \texttt{c}]$ — because in that context an $A$ can only have been started by $S \to A\,\texttt{a}$ and a $B$ only by $S \to B\,\texttt{c}$. The lookaheads `a` and `c` are disjoint, so each cell gets one entry and there is no conflict.

What SLR(1) throws away is **context**. $\mathrm{FOLLOW}(A)$ pools every token that can follow $A$ *anywhere in the grammar*, including the `c` that follows $A$ only in the `b A c` production — a production that cannot be the one in progress, since no `b` was read. LR(1) keeps the lookahead per state, so it never imports a follower from an unreachable context. (This grammar is also the standard demonstration that *merging* LR(1) states by core, as LALR(1) does, can reintroduce a reduce-reduce conflict that full LR(1) avoided.)

</details>

## Flashback

**From Lesson 1.4 (Recursive descent, LL(1) and precedence climbing):** The grammar $E \to E + T \mid T$, $T \to \texttt{n}$ is parsed directly by the LR automaton in the Picture, with no transformation.

(a) Compute $\mathrm{FIRST}(E)$ and $\mathrm{FIRST}(T)$ for this grammar, build the two LL(1) cells for $E$ on lookahead `n`, and state the conflict.
(b) Recursive descent needed the transformed grammar plus a loop-accumulator to recover left-associativity. Say in one sentence what LR does instead, pointing at a specific item in the Picture.

<details>
<summary>Solution</summary>

(a) $\mathrm{FIRST}(T) = \{\texttt{n}\}$, and since $E \Rightarrow T$ and $E \Rightarrow E + T \Rightarrow^* T + T$, every string derived from $E$ begins with whatever $T$ begins with, so $\mathrm{FIRST}(E) = \{\texttt{n}\}$ as well.

Now build cell $M[E, \texttt{n}]$. Production $E \to E + T$ has $\mathrm{FIRST}(E + T) = \mathrm{FIRST}(E) = \{\texttt{n}\}$, so it goes in the cell. Production $E \to T$ has $\mathrm{FIRST}(T) = \{\texttt{n}\}$, so it goes in the same cell.

$$M[E, \texttt{n}] = \{\,E \to E + T,\ \ E \to T\,\}$$

Two productions in one cell: **an LL(1) conflict**, and it is the general symptom of left recursion — a left-recursive production always has the same FIRST set as the nonterminal it recurses on, so it always collides with every other production for that nonterminal. One token of lookahead can never separate them, and neither can $k$ tokens for any fixed $k$, because the two productions' derivable strings share arbitrarily long prefixes.

(b) LR does not decide at all when it sees the `n` — it shifts, reduces up to $E$, and only then, sitting in state $I_1$ on the item $E \to E \cdot + T$, does it look for a `+` to extend the $E$ it already holds; the left-associativity is built into that item, because each reduce folds the accumulated $E$ into the *left* child of the next $E \to E + T$.

</details>

## Connections

- **Backward:** the shift-reduce stack is a pushdown automaton, whose equivalence with context-free grammars is [`theory-of-computation` 2.2](../../theory-of-computation/lessons/02-02-pushdown-automata-and-cfg-equivalence.md)'s theorem — this lesson is that equivalence made deterministic and tabulated. $\mathrm{FOLLOW}$ comes from [Lesson 1.4](01-04-recursive-descent-and-ll1.md), and the dangling-else ambiguity from [`theory-of-computation` 2.1](../../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md).
- **Forward:** whichever technique builds it, the AST goes to [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md) to have its names resolved. Boss problem 1 runs both techniques on the dangling-else grammar and compares the conflicts.
- **Sideways:** the item automaton is a subset construction in disguise — states are *sets* of items, exactly as [`theory-of-computation` 1.2](../../theory-of-computation/lessons/01-02-nfa-and-the-subset-construction.md)'s DFA states are sets of NFA states, and for the same reason: to make a nondeterministic "which production am I in?" deterministic by tracking all possibilities at once.

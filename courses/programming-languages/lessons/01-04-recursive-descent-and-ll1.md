# Programming Languages · Lesson 1.4: Recursive descent, LL(1) and precedence climbing

> ⏱ ~15 min · Module 1: Syntax and parsing · Builds on: [1.2 (concrete and abstract syntax)](01-02-concrete-and-abstract-syntax.md), [1.3 (lexical analysis)](01-03-lexical-analysis-in-practice.md) · Unlocks: [1.5 (LR parsing)](01-05-lr-parsing-and-the-item-automaton.md), [1.6 (name resolution)](01-06-name-resolution-and-the-semantic-phase.md)

## Why this matters

Recursive descent is the parsing technique you can write from memory on a whiteboard, and it is what most production compilers actually use — GCC, Clang and the Go, Rust and TypeScript front ends are all hand-written recursive-descent parsers, chosen over generated ones for error messages and control. It is also the technique with the sharpest precondition: there is an exact, checkable property a grammar must have, and when it fails the failure is mechanical and the repair is mechanical.

This lesson gives you the property (LL(1)), the two tables that decide it (FIRST and FOLLOW), the two grammar surgeries that fix the common violations, and the one trick that lets you keep left-associativity after removing the left recursion that expressed it.

## The idea

Write one function per nonterminal. Each function's body is the right-hand side of its production, read left to right: a terminal means "consume this token or error", a nonterminal means "call that function". The call stack *is* the parse tree, built implicitly as the functions nest.

```
parseE():            # E -> T E'
    parseT()
    parseEPrime()
```

The only question is what to do when a nonterminal has several productions — `parseE'` must choose between `E' → + T E'` and `E' → ε`. A **predictive** parser makes that choice by peeking at the next token and nothing else. It never guesses and backs out.

So the grammar has to have a property: **for every nonterminal, the next token must uniquely determine which production to use.** That is LL(1) — scan Left to right, produce a Leftmost derivation, using 1 token of lookahead. Deciding it needs two pieces of information per nonterminal: which tokens can *start* it (FIRST), and — because a production can match nothing at all — which tokens can *follow* it (FOLLOW).

## The formal version

**Definition (FIRST).** *(card: [first and follow](../reference.md#first-and-follow))* For a string of symbols $\alpha$, $\mathrm{FIRST}(\alpha)$ is the set of terminals that can begin a string derived from $\alpha$, plus $\varepsilon$ if $\alpha \Rightarrow^* \varepsilon$.

**Definition (FOLLOW).** For a nonterminal $A$, $\mathrm{FOLLOW}(A)$ is the set of terminals that can appear immediately after $A$ in some sentential form derived from the start symbol, plus the end-marker $\mathsf{eof}$ if $A$ can end a complete derivation.

**Construction (the LL(1) table).** For each production $A \to \alpha$:

- for every $a \in \mathrm{FIRST}(\alpha) \setminus \{\varepsilon\}$, put $A \to \alpha$ in cell $M[A, a]$;
- if $\varepsilon \in \mathrm{FIRST}(\alpha)$, then for every $b \in \mathrm{FOLLOW}(A)$, put $A \to \alpha$ in cell $M[A, b]$.

**Definition (LL(1)).** A grammar is LL(1) exactly when no cell of $M$ receives two productions. A cell with two entries is a **conflict**, and it names the precise nonterminal and lookahead where one token is not enough.

In words: the first rule says "if the production can start with $a$, use it on seeing $a$"; the second says "if the production can vanish, use it on seeing anything that could come next".

**The two things that break LL(1), and their repairs.**

*Left recursion.* $A \to A\alpha \mid \beta$ makes `parseA()` call itself with no token consumed — an infinite loop — and puts both productions in every cell of $\mathrm{FIRST}(\beta)$. The repair is mechanical:

$$A \to A\alpha \mid \beta \qquad\rightsquigarrow\qquad A \to \beta A', \quad A' \to \alpha A' \mid \varepsilon$$

*Common prefixes.* $A \to \alpha\beta_1 \mid \alpha\beta_2$ cannot be chosen between by any finite lookahead shorter than $\alpha$. The repair is **left factoring**:

$$A \to \alpha\beta_1 \mid \alpha\beta_2 \qquad\rightsquigarrow\qquad A \to \alpha A', \quad A' \to \beta_1 \mid \beta_2$$

**The associativity problem, and precedence climbing.** Left recursion is how [Lesson 1.2](01-02-concrete-and-abstract-syntax.md) encoded left-associativity — and removing it destroys exactly that encoding. The transformed grammar $E \to T E'$, $E' \to +\,T\,E' \mid \varepsilon$ is *right*-recursive, so a naive tree-builder produces right-associative trees and computes `8 - 3 - 2` as 7.

The fix is not in the grammar, it is in the parser: implement $E'$ as a **loop** that accumulates into a left-leaning result rather than as a recursive call that nests to the right.

```
parseE():
    node = parseT()
    while lookahead in {+, -}:
        op = consume()
        rhs = parseT()
        node = BinOp(op, node, rhs)   # <- left-leaning
    return node
```

Generalizing the loop to consult a precedence table, so one function handles every binary level instead of one function per level, is **precedence climbing**:

```
parseExpr(minPrec):
    left = parseAtom()
    while lookahead is a binary op with prec(op) >= minPrec:
        op = consume()
        nextMin = prec(op) + 1 if leftAssoc(op) else prec(op)
        right = parseExpr(nextMin)
        left = BinOp(op, left, right)
    return left
```

In words: the `+1` for a left-associative operator is what stops the recursive call from swallowing another operator at the same level, forcing it to return so the loop can build left-leaning. Dropping the `+1` gives right-associativity — which is exactly what you want for `^` and `=`.

## Picture

![An indented call trace for parsing n plus n times n. E calls T, which calls F consuming n, then T-prime which sees plus rather than star and returns. E-prime sees plus, consumes it, and calls T. That T calls F consuming n, then T-prime which sees star, consumes it, and calls F consuming the final n, then T-prime sees end of input and returns. Finally E-prime sees end of input and returns.](assets/01-04-fig1.svg)

The indentation is the parse tree. Every return happens at exactly the moment the lookahead token leaves that level's FIRST set — `T'` returns on `+` because `+` is not in $\mathrm{FIRST}(T') = \{*\}$, and that is the entire decision procedure. There is no backtracking anywhere in the trace.

## Worked examples

**Example 1 (mechanical): build the table for the expression grammar.** Transform the left-recursive grammar and construct $M$.

$$E \to T\,E' \quad E' \to +\,T\,E' \mid \varepsilon \quad T \to F\,T' \quad T' \to *\,F\,T' \mid \varepsilon \quad F \to (\,E\,) \mid \texttt{n}$$

| $A$ | $\mathrm{FIRST}(A)$ | $\mathrm{FOLLOW}(A)$ |
|---|---|---|
| $E$ | `(`, `n` | `)`, `eof` |
| $E'$ | `+`, $\varepsilon$ | `)`, `eof` |
| $T$ | `(`, `n` | `+`, `)`, `eof` |
| $T'$ | `*`, $\varepsilon$ | `+`, `)`, `eof` |
| $F$ | `(`, `n` | `+`, `*`, `)`, `eof` |

and the table:

| | `n` | `+` | `*` | `(` | `)` | `eof` |
|---|---|---|---|---|---|---|
| $E$ | $T\,E'$ | | | $T\,E'$ | | |
| $E'$ | | $+\,T\,E'$ | | | $\varepsilon$ | $\varepsilon$ |
| $T$ | $F\,T'$ | | | $F\,T'$ | | |
| $T'$ | | $\varepsilon$ | $*\,F\,T'$ | | $\varepsilon$ | $\varepsilon$ |
| $F$ | `n` | | | $(\,E\,)$ | | |

**Zero cells hold two productions, so the grammar is LL(1).** Notice where FOLLOW did the work: the $\varepsilon$ entries for $E'$ and $T'$ sit under `)` and `eof`, and the $T' \to \varepsilon$ entry also sits under `+`. That last one is the interesting cell — on seeing `+` while inside $T'$, the parser must conclude "the multiplication level is over, return and let the addition level handle it", and the only reason it knows is that `+` is in $\mathrm{FOLLOW}(T')$.

**Example 2 (why you'd care): keeping `-` left-associative.** Parse `8 - 3 - 2` with the transformed grammar, both ways.

*Naive recursive tree-building.* `parseE'` calls itself for the tail, and the AST is built on the way out:

$$8 - (3 - 2) = 8 - 1 = 7$$

Wrong — that is right-associative.

*Loop accumulation.* The `while` version keeps `node` as an accumulator:

| iteration | `node` before | op | `rhs` | `node` after |
|---|---|---|---|---|
| 1 | `8` | `-` | `3` | `BinOp(-, 8, 3)` |
| 2 | `BinOp(-, 8, 3)` | `-` | `2` | `BinOp(-, BinOp(-, 8, 3), 2)` |

$$(8 - 3) - 2 = 5 - 2 = 3$$

Correct — left-associative, as the original grammar specified.

The grammar is right-recursive in both cases. **Associativity was moved out of the grammar and into the parser**, which is the standard practical arrangement: the grammar is shaped for the parsing technique, and the tree is shaped for the semantics. Lesson 1.5's technique needs no such compromise, which is one of its genuine advantages.

## Watch out

- **You might think** a grammar that fails LL(1) is a bad grammar — **but actually** LL(1) is a property of the grammar, not the language, and most languages have both LL(1) and non-LL(1) grammars. The layered expression grammar is not LL(1) and describes exactly the same language as the transformed one, which is. When a conflict appears, the question is which grammar to write, not whether the language is broken.
- **You might think** removing left recursion is enough to get a correct parser — **but actually** it silently flips your associativity, and the resulting program type-checks and runs. This is [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s trap arriving through the back door, and the loop-accumulator is the standard guard.
- **You might think** FOLLOW is only needed for grammars with $\varepsilon$-productions — **but actually** that is true, and it is the reason FOLLOW exists at all. If no production can derive $\varepsilon$, the table is built from FIRST alone. Every FOLLOW entry in the table above traces back to $E' \to \varepsilon$ or $T' \to \varepsilon$.

## One-liner

> One function per nonterminal, one token of lookahead, and a table with no cell holding two productions — and when the grammar will not cooperate, remove the left recursion for the parser and put the associativity back with a loop.

## Problems

**P1 (🟢)** For the grammar $S \to a\,S\,b \mid \varepsilon$, compute $\mathrm{FIRST}(S)$ and $\mathrm{FOLLOW}(S)$, build the LL(1) table, and state whether the grammar is LL(1). Give the number of cells that hold a production.

**P2 (🟡)** Transform each grammar so that a predictive parser can handle it, naming the surgery used. Then state, for the transformed grammar, whether a naive recursive tree-builder would give the right associativity — and if not, what the parser must do instead.

(a) $A \to A\,x \mid A\,y \mid z$
(b) $S \to \texttt{if}\ E\ \texttt{then}\ S \mid \texttt{if}\ E\ \texttt{then}\ S\ \texttt{else}\ S \mid a$, with $E \to b$

**P3 (🔴)** Using the precedence-climbing pseudocode above with the table $\mathrm{prec}(\texttt{+}) = 1$ (left-associative), $\mathrm{prec}(\texttt{*}) = 2$ (left-associative), $\mathrm{prec}(\texttt{\^{}}) = 3$ (right-associative):

(a) Hand-trace `parseExpr(0)` on `2 ^ 3 ^ 2`, giving the value of `minPrec` at every recursive call, and state the resulting tree and its value.
(b) Do the same for `2 * 3 * 4`, and state the tree.
(c) In one sentence, say exactly which line of the pseudocode is responsible for the difference, and what would happen to `2 * 3 * 4` if that line were changed to always use `prec(op)`.

<details>
<summary>Solutions</summary>

**P1** $\mathrm{FIRST}(S) = \{a, \varepsilon\}$ — the first production starts with `a`, and the second derives $\varepsilon$ directly.

$\mathrm{FOLLOW}(S) = \{b, \mathsf{eof}\}$ — $S$ is the start symbol so $\mathsf{eof} \in \mathrm{FOLLOW}(S)$, and in $S \to a\,S\,b$ the nonterminal $S$ is followed by `b`.

Table:

| | `a` | `b` | `eof` |
|---|---|---|---|
| $S$ | $a\,S\,b$ | $\varepsilon$ | $\varepsilon$ |

The `a` entry comes from $\mathrm{FIRST}(a\,S\,b) = \{a\}$; the `b` and `eof` entries come from $\varepsilon \in \mathrm{FIRST}(\varepsilon)$ together with $\mathrm{FOLLOW}(S) = \{b, \mathsf{eof}\}$.

**Three cells hold a production, none holds two, so the grammar is LL(1).** (This is the language $\{a^n b^n\}$, which [`theory-of-computation` 1.5](../../theory-of-computation/lessons/01-05-pumping-lemma-and-non-regularity.md) proved is not regular — a reminder that LL(1) parsing is strictly more powerful than the lexer of Lesson 1.3.)

**P2**

(a) **Left-recursion removal.** Factor the two left-recursive productions into one with $\alpha = (x \mid y)$:

$$A \to z\,A', \qquad A' \to x\,A' \mid y\,A' \mid \varepsilon$$

$\mathrm{FIRST}(A') = \{x, y, \varepsilon\}$ and $\mathrm{FOLLOW}(A') = \mathrm{FOLLOW}(A)$, and no cell collides, so this is LL(1).

Associativity: the original $A \to A\,x \mid A\,y$ is left-recursive, hence **left-associative**, and the transformed grammar is right-recursive. A naive recursive tree-builder would give the **wrong** (right) associativity. The parser must accumulate in a loop — `node = parseZ(); while lookahead in {x,y}: node = Post(consume(), node)` — exactly as in Example 2.

(b) **Left factoring.** The first two productions share the prefix `if E then S`:

$$S \to \texttt{if}\ E\ \texttt{then}\ S\ S' \mid a, \qquad S' \to \texttt{else}\ S \mid \varepsilon, \qquad E \to b$$

Associativity does not apply — this is a statement form, not a binary operator, so there is no left/right operand to group. **But the transformed grammar is still not LL(1):** $\mathrm{FOLLOW}(S') \ni \texttt{else}$ (an inner `if` can be followed by the outer one's `else`) and $\mathrm{FIRST}(\texttt{else}\ S) = \{\texttt{else}\}$, so the cell $M[S', \texttt{else}]$ receives both productions. That is the dangling-else ambiguity of [`theory-of-computation` 2.1](../../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md), and left factoring cannot remove it because it is not a factoring problem — the grammar is genuinely ambiguous. The standard resolution is to break the tie in favour of `S' → else S`, which binds `else` to the nearest `if`. Boss problem 1 works this out in full, and Lesson 1.5 shows the same conflict reappearing in a different technique.

**P3**

(a) `2 ^ 3 ^ 2`. Call `parseExpr(0)`:

| call | `minPrec` | `left` on entry | sees | `nextMin` passed | returns |
|---|---|---|---|---|---|
| outer | 0 | `2` | `^` (prec 3 ≥ 0) | $3$ — right-associative, so **no** `+1` | `^(2, ^(3,2))` |
| inner | 3 | `3` | `^` (prec 3 ≥ 3) ✓ | 3 | `^(3, 2)` |
| innermost | 3 | `2` | end | — | `2` |

The inner call's test `prec(^) = 3 >= minPrec = 3` **succeeds**, so the inner call consumes the second `^` itself and nests to the right.

Tree: `^(2, ^(3, 2))`, value $2^{(3^2)} = 2^9 = \mathbf{512}$.

(b) `2 * 3 * 4`. Call `parseExpr(0)`:

| call | `minPrec` | `left` on entry | sees | `nextMin` passed | returns |
|---|---|---|---|---|---|
| outer | 0 | `2` | `*` (prec 2 ≥ 0) | $2+1 = 3$ — left-associative | continues looping |
| inner | 3 | `3` | `*` (prec 2 ≥ 3?) **no** | — | `3` |
| outer, iter 2 | 0 | `*(2,3)` | `*` (prec 2 ≥ 0) | 3 | `*( *(2,3), 4)` |
| inner | 3 | `4` | end | — | `4` |

The inner call's test `prec(*) = 2 >= minPrec = 3` **fails**, so it returns immediately with just `3`, handing control back to the outer loop, which builds left-leaning.

Tree: `*( *(2, 3), 4)`, value $\mathbf{24}$ (the same value either way, since multiplication is associative — the *tree* is what differs).

(c) The line `nextMin = prec(op) + 1 if leftAssoc(op) else prec(op)`. The `+1` raises the bar for the recursive call by one, so a same-precedence operator fails the `>=` test and the recursion returns, leaving the loop to build left-leaning; without it, the recursive call would satisfy `>=` and swallow the operator itself, nesting to the right.

If the line always used `prec(op)`, then `2 * 3 * 4` would parse as `*(2, *(3, 4))` — right-associative. For multiplication the value is unchanged (24), which is exactly why this bug ships: **it is invisible on `+` and `*` and wrong on `-`, `/` and `^`.** Trying it on `8 - 3 - 2` gives 7 instead of 3.

</details>

## Flashback

**From Lesson 1.3 (Lexical analysis in practice):** A language's lexer uses maximal munch over the rules `ARROW` = `=>`, `GE` = `>=`, `ASSIGN` = `=`, `GT` = `>`, `ID` = `[A-Za-z_]\w*`.

(a) Give the token sequence for `x>=>y`.
(b) The parser is a predictive recursive-descent parser with one token of lookahead. Does having a *second* token of lookahead let it recover the alternative reading `x > (=> y)`? Answer yes or no and say why in one sentence.

<details>
<summary>Solution</summary>

(a) Scan left to right, longest match at each position:

- position 0: `x` — only `ID` matches, length 1 → `ID x`
- position 1: the remaining text is `>=>y`. Candidates are `GE` matching `>=` (length 2) and `GT` matching `>` (length 1). Longest wins → `GE >=`
- position 3: text is `>y`. `ARROW` needs `=>` and there is no `=`, so only `GT` matches → `GT >`
- position 4: → `ID y`

Token sequence: **`ID x`, `GE >=`, `GT >`, `ID y`.**

(b) **No.** The alternative reading requires the tokens `ID x`, `GT >`, `ARROW =>`, `ID y`, and those tokens **were never produced**. The lexer committed to `>=` at position 1 and moved on, so by the time the parser runs, the characters have already been partitioned and the `=>` token does not exist anywhere in the parser's input. Extra lookahead lets a parser see further into the token stream; it cannot re-cut a stream that has already been cut.

This is the irrevocability property from Lesson 1.3 seen from the parser's side, and it is the structural reason lookahead is not a universal remedy: $k$ tokens of lookahead only help with ambiguities *among the tokens the lexer produced*.

</details>

## Connections

- **Backward:** the token stream comes from [Lesson 1.3](01-03-lexical-analysis-in-practice.md), one token of lookahead at a time. The left recursion this lesson removes is exactly [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s encoding of left-associativity, which is why the loop-accumulator is needed to put it back.
- **Forward:** [Lesson 1.5](01-05-lr-parsing-and-the-item-automaton.md) parses the left-recursive grammar directly, with no transformation and no associativity compromise, and shows what that costs. The AST these functions return is what [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md) walks to resolve names.
- **Sideways:** FIRST and FOLLOW are least fixed points of monotone set equations — you iterate the rules until nothing changes — which is the same computation pattern as the dataflow analyses of [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) and the loop semantics of [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md). Once you have seen it three times it stops being a trick.

# Programming Languages · Lesson 1.2: Concrete syntax, abstract syntax and desugaring

> ⏱ ~15 min · Module 1: Syntax and parsing · Builds on: [1.1 (the design space)](01-01-languages-paradigms-and-the-design-space.md), [`theory-of-computation` 2.1 (CFGs, derivations, parse trees)](../../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md) · Unlocks: [1.3 (lexical analysis)](01-03-lexical-analysis-in-practice.md), [1.4 (recursive descent)](01-04-recursive-descent-and-ll1.md)

## Why this matters

[`theory-of-computation` 2.1](../../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md) taught you to judge a grammar: to find the string with two parse trees, name the missing distinction, and add a variable for it. That course owns context-free grammars, derivations, parse trees, ambiguity and the precedence-layering repair, and this lesson assumes all of it.

What it does **not** answer is what a compiler actually keeps. A parse tree records every parenthesis you typed and every grammar variable the designer invented to encode precedence; a compiler wants none of that. This lesson is about the gap between those two trees — why it exists, how a language exploits it, and the single structural decision, *which way your grammar recurses*, that decides whether `1 - 2 - 3` is $-4$ or $2$.

## The idea

There are two trees, and confusing them causes real bugs.

The **parse tree** (also *concrete syntax tree*) is a record of the derivation. Every grammar variable becomes a node, so the layered expression grammar produces a spine of `E → T → F` nodes for every single operand, and every pair of parentheses you typed becomes structure. It answers "how did the parser get here?"

The **abstract syntax tree (AST)** is a record of the *program*. It has one node per meaningful construct — an addition node with two children, a function-call node with a callee and a list of arguments — and nothing else. It answers "what did the programmer say?"

The parentheses are the clearest case. In `(1 + 2) * 3` the parentheses do a job: they tell the parser to group. Once it has grouped, the job is done — the grouping is now recorded in the *shape* of the tree, and keeping a `Paren` node would be storing the same fact twice. So the AST has no parentheses. Neither does it have the `T` and `F` variables: those existed to encode precedence, and precedence is likewise now recorded in the shape.

The slogan: **the concrete syntax is a user interface; the abstract syntax is a data structure.** A language can redesign its surface without touching the rest of the compiler, and that is exactly what makes syntactic sugar cheap.

## The formal version

**Definition (abstract syntax).** An abstract syntax is a set of constructors, each with an arity and a fixed list of child sorts, defining a tree data type. It is given as a grammar with no terminals for punctuation:

$$e ::= n \mid x \mid e_1 \oplus e_2 \mid \texttt{if}\,(e_1, e_2, e_3) \mid \texttt{lam}(x, e) \mid \texttt{app}(e_1, e_2)$$

In words: an expression is a numeral, a variable, a binary operation on two expressions, a conditional with three, a lambda binding a name in a body, or an application. Nothing here says whether you *write* `if a then b else c` or `a ? b : c` — that is the concrete syntax's business.

The same abstract syntax is written as an algebraic data type in a real implementation (Lesson 5.1), which is the form the rest of the compiler pattern-matches on.

**Definition (desugaring).** A **core** language is a subset of the abstract syntax that the rest of the compiler handles. **Desugaring** is a function from full abstract syntax to core, applied immediately after parsing, that eliminates constructors the core does not have. Each rule is a local rewrite:

| Surface form | Desugars to |
|---|---|
| `a && b` | `if (a, b, false)` |
| `for (i = e1; c; s) body` | `i = e1; while (c) { body; s }` |
| `let x = e1 in e2` | `app(lam(x, e2), e1)` |
| `[e1, e2, e3]` | `cons(e1, cons(e2, cons(e3, nil)))` |
| `a?.b` | `let t = a in if (t == null, null, t.b)` |

In words: every row is a feature the programmer sees and the compiler never does. The payoff is that type checking, optimization and code generation each handle one construct instead of two, and a new surface feature costs one rewrite rule rather than a change in every phase.

**The associativity rule.** Precedence is encoded by *layering* variables — that is [`theory-of-computation` 2.1](../../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md)'s Example 2. **Associativity is encoded by the direction of recursion within a layer:**

$$\underbrace{E \to E - T \mid T}_{\text{left-recursive} \;\Rightarrow\; \text{left-associative}} \qquad\qquad \underbrace{E \to T - E \mid T}_{\text{right-recursive} \;\Rightarrow\; \text{right-associative}}$$

In words: whichever side the *recursive* occurrence sits on is the side that gets to be deep, and the deep side is the side that binds last. Both grammars are unambiguous, both generate exactly the same strings, and they disagree about what those strings mean.

## Picture

![Two parse trees for the token string 1 minus 2 minus 3. On the left, from a left-recursive grammar, the root minus has a left child that is itself a minus node over 1 and 2, and a right child 3, evaluating to negative 4. On the right, from a right-recursive grammar, the root minus has left child 1 and a right child that is a minus node over 2 and 3, evaluating to 2.](assets/01-02-fig1.svg)

Same tokens, same operator, same precedence level, no ambiguity in either grammar — and the answers differ by 6. This is why "subtraction is left-associative" is a statement about the *grammar*, not about arithmetic, and why getting it wrong is a bug the type checker cannot catch: both trees are perfectly well-typed.

## Worked examples

**Example 1 (mechanical): strip a parse tree down to an AST.** Parse `(1 + 2) * 3` with the layered grammar $E \to E + T \mid T$, $T \to T * F \mid F$, $F \to (E) \mid \texttt{n}$.

The parse tree has 11 nodes: `E → T → T(→F→(E→...)) * F(→n 3)`, with the parenthesised subtree expanding through `E → E + T`, each operand going `T → F → n`. Written as a derivation it is long; written as an AST it is:

```
    mul
   /   \
  add    3
 /   \
1     2
```

Four nodes. What was dropped: the two parentheses (now recorded as the shape — `add` is a child of `mul`), and the seven `E`/`T`/`F` chain nodes (which existed only to encode that `*` binds tighter than `+`, now recorded as the same shape). What was kept: the operators, the operands, and the grouping. **Nothing about the meaning was lost**, which is the test for whether a piece of concrete syntax is really concrete.

**Example 2 (why you'd care): a desugaring that must not be a macro.** Desugar `a && b` and check it against the alternative.

The rule is `a && b` ⟿ `if (a, b, false)`. Why not the more obvious `and(a, b)` with a primitive `and`? Because a primitive's arguments are both evaluated before the call (Lesson 3.4), and `&&` must not evaluate `b` when `a` is false — that is what lets `p != null && p.f > 0` be safe. Desugaring to `if` gets short-circuiting for free, because `if` already evaluates only one branch.

Now the trap. Suppose the desugaring were textual — a macro substituting the argument text. Then

```
x++ && y
```

desugars to `if (x++, y, false)`, which is fine, but

```
a && a
```

under a naive macro for a rule like `a || b` ⟿ `if (a, true, b)` would evaluate `a` twice if the rule had mentioned `a` twice. Any desugaring rule that uses a subexpression **more than once** must bind it first:

$$\texttt{a?.b} \;\rightsquigarrow\; \texttt{let } t = a \texttt{ in if}(t = \texttt{null},\ \texttt{null},\ t.b)$$

not `if (a == null, null, a.b)` — which would evaluate `a` twice, running any side effect in it twice and doubling its cost. **The fresh temporary `t` is the entire content of the rule**, and forgetting it is the single most common desugaring bug. Lesson 6.2 shows why duplicated effects are observable at all.

## Watch out

- **You might think** the AST is "the parse tree with the useless nodes removed" — **but actually** it is a separate data type with its own definition, and a parser is free to build it directly without ever materializing a parse tree. Most real parsers do exactly that. The parse tree is a way of *talking* about the derivation, not a phase.
- **You might think** left- and right-recursive versions of a grammar are interchangeable because they generate the same language — **but actually** they generate the same *strings* and different *trees*, and the tree is where the meaning lives. Getting this backwards on `-`, `/` or `^` produces a program that runs, type-checks, and computes the wrong number. (For `+` on integers it happens not to matter, which is why the bug usually ships.)
- **You might think** desugaring loses information the user might want back — **but actually** that is exactly the known cost, and it shows up in error messages and debuggers: report an error against the desugared `while` and the user sees a construct they never wrote. Real compilers carry source positions through desugaring for this reason, and it is a recognized tax on the technique rather than an argument against it.

## One-liner

> Concrete syntax is a user interface and abstract syntax is a data structure; precedence lives in which variables you layer, associativity lives in which side you recurse on, and everything else should be desugared away before the real compiler starts.

## Problems

**P1 (🟢)** The grammar $E \to T \mathbin{\texttt{-}} E \mid T$, $T \to \texttt{n}$ is unambiguous. (a) Draw the parse tree it gives for `8 - 3 - 2`. (b) Evaluate it. (c) State which associativity this grammar encodes and what one-token change to the first production would flip it.

**P2 (🟡)** Desugar each surface form into the core language $e ::= n \mid x \mid e_1 \oplus e_2 \mid \texttt{if}(e_1,e_2,e_3) \mid \texttt{let}\ x = e_1\ \texttt{in}\ e_2 \mid \texttt{while}(e_1,e_2)$. For each, say whether a fresh temporary is required and why.

(a) `a || b`  (b) `unless (c) s`  (c) `x += e`, where `x` is a plain variable  (d) `m[i] += e`, where `m[i]` is an array element and evaluating `i` may have side effects

**P3 (🔴)** A language has exponentiation `^`, and its designer writes the grammar layer as $P \to A \mathbin{\texttt{\^{}}} P \mid A$, with $A \to \texttt{n}$.

(a) Which associativity is this, and what does `2 ^ 3 ^ 2` evaluate to under it?
(b) What would it evaluate to under the other associativity?
(c) Exponentiation is conventionally right-associative while subtraction is left-associative. Both are non-commutative and non-associative operations. Give the reason the conventions differ — the answer is not "convention", it is a fact about what the alternative reading would be *equal to*.

<details>
<summary>Solutions</summary>

**P1**

(a) The grammar is right-recursive ($E$ appears on the right of `-`), so the tree is:

```
      -
     / \
    8    -
        / \
       3    2
```

(b) $8 - (3 - 2) = 8 - 1 = \mathbf{7}$. (Under the ordinary left-associative reading, `8 - 3 - 2` is $(8-3)-2 = 3$. This grammar gives 7.)

(c) It encodes **right-associativity**, because the recursive occurrence of $E$ is on the right, so the right operand is the one that may be deep. To flip it, change $E \to T \mathbin{\texttt{-}} E$ into $E \to E \mathbin{\texttt{-}} T$ — move the recursive variable to the left of the operator. (This makes the grammar left-recursive, which a recursive-descent parser cannot handle directly; Lesson 1.4 is about what to do then.)

**P2** *Accept criterion:* any rewrite is correct if it (i) uses only core constructors, (ii) evaluates each surface subexpression the same number of times and in the same order as the surface form, and (iii) short-circuits where the surface form does. Multiple phrasings pass.

(a) `a || b` ⟿ `if (a, true, b)`. **No fresh temporary needed** — `a` appears once in the result. Short-circuiting is inherited from `if`.

(b) `unless (c) s` ⟿ `if (c, 0, s)` (or `if (c, unit, s)` in a language with a unit value). **No temporary** — `c` appears once.

(c) `x += e` ⟿ `x = x + e`. **No temporary needed**, because `x` is a plain variable: mentioning it twice re-reads a name, which has no side effect and costs nothing. (Strictly, the two mentions are a *read* and a *write*, not two evaluations of an effectful expression.)

(d) `m[i] += e` ⟿ `let a = m in let j = i in a[j] = a[j] + e`. **Temporaries are required, for `i` in particular.** The naive rewrite `m[i] = m[i] + e` evaluates `i` twice; if `i` is `k++` or a function call, the read and the write land on *different elements* and the program is silently wrong. Binding `j = i` first evaluates the index exactly once, matching the surface form's single evaluation. This is the rule from Example 2, and it is why real language specifications define compound assignment in terms of "evaluate the operand designation once".

**P3**

(a) The recursive occurrence $P$ is on the **right** of `^`, so this is **right-associative**: `2 ^ 3 ^ 2` is $2^{(3^2)} = 2^9 = \mathbf{512}$.

(b) Left-associative would give $(2^3)^2 = 8^2 = \mathbf{64}$.

(c) Because of what the left-associative reading is *equal to*. The identity

$$(a^b)^c = a^{b \cdot c}$$

means that if `^` were left-associative, `a ^ b ^ c` would be nothing more than `a ^ (b*c)` — a form the programmer can already write with one fewer operator. The left-associative reading of a stacked exponent is therefore **redundant**: it adds no expressive power. The right-associative reading $a^{(b^c)}$ has no such collapse; there is no elementary way to rewrite it with a single exponentiation. So right-associativity is the choice that makes the second `^` mean something new.

Subtraction has the mirror property. The right-associative reading collapses: $a - (b - c) = a - b + c$, which you can already write. The left-associative reading $(a-b)-c = a - b - c$ does not collapse into a single subtraction of something simpler — and, more practically, it matches reading order. So in both cases the convention picks the grouping that is **not** expressible as a shorter expression, which is exactly the grouping that earns its syntax.

</details>

## Flashback

**From Lesson 1.1 (Languages, paradigms and the design space):** A language designer chooses to make her language *expression-oriented*: every construct produces a value, and there is no separate statement category. She now wants a `for` loop.

(a) Her core language has `while`, which produces the unit value. She desugars `for` to `while` exactly as in the table above. Which of the six design axes has she just constrained, and what has the desugaring committed her to about the *value* of a `for` loop?

(b) A colleague proposes instead making `for` a primitive that returns the list of values its body produced on each iteration. State which axis this moves her along, and name one thing it costs.

<details>
<summary>Solution</summary>

(a) **Axis 1 — what is a value, and is everything an expression.** Desugaring `for` to `while` commits `for` to producing whatever `while` produces, namely the unit value. So in her language `x = for (...) {...}` is legal (everything is an expression) but useless (it always yields unit). This is the ordinary outcome and it is fine: expression-orientation guarantees that every construct *has* a value, not that every value is interesting.

The general point is that a desugaring is not neutral. It forces the surface construct to inherit every property of its target — value, evaluation order, and scoping — so the choice of target *is* a semantic decision, not a notational one.

(b) Making `for` collect its body's values moves her along **axis 6, the abstraction mechanism**: the loop becomes a `map`-like combinator rather than a control construct, which is a choice about how repetition composes with the rest of the language.

Costs, any one of which is a complete answer:
- It can no longer desugar to `while` — it needs its own typing rule, its own optimization treatment, and its own code generation, which is precisely the $m \times n$ cost the core-language discipline exists to avoid.
- It allocates. A loop run purely for effect now builds a list nobody reads, so either the compiler must prove the result dead and eliminate it (dead-code elimination, Lesson 7.4) or every loop pays for a collection.
- It forces a decision about the element type when branches of the body produce different types, which pushes work onto the type system (Module 4).

</details>

## Connections

- **Backward:** grammars, derivations, parse trees and ambiguity are [`theory-of-computation` 2.1](../../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md)'s, and this lesson uses its layered expression grammar without re-deriving it. Axis 1 of [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md) is the choice the Flashback constrains.
- **Forward:** [Lesson 1.4](01-04-recursive-descent-and-ll1.md) has to remove the left recursion that P1(c) introduces, and shows how to keep left-associativity anyway. The AST defined here is the input to every later phase: the semantics of Module 2, the type checker of Module 4, and the lowering of [Lesson 7.1](07-01-the-compiler-pipeline-and-irs.md). Its definition as a data type is [Lesson 5.1](05-01-algebraic-data-types-and-pattern-matching.md).
- **Sideways:** "the same abstract structure, many surface notations" is the pattern [`category-theory` 2.1](../../category-theory/lessons/02-01-universal-properties.md) calls a universal property — the object is determined by its structure, not by how it is written. The evaluate-`i`-once rule of P2(d) is [`programming-foundations` 1.2](../../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md)'s contract discipline applied to a compiler's own rewrite rules.

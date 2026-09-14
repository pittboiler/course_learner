# Programming Languages · Lesson 1.6: Name resolution and the semantic phase

> ⏱ ~15 min · Module 1: Syntax and parsing · Builds on: [1.4 (recursive descent)](01-04-recursive-descent-and-ll1.md), [1.5 (LR parsing)](01-05-lr-parsing-and-the-item-automaton.md) · Unlocks: [2.2 (big-step semantics and environments)](02-02-big-step-semantics-and-environments.md), [6.1 (names, scope and closures)](06-01-names-scope-and-closures.md)

## Why this matters

You have a tree. Every leaf that is an identifier is still just a string — `x` appears four times and nothing in the tree says whether those are one variable or four. Until that is fixed, no later phase can do its job: a type checker cannot look up `x`'s type, an optimizer cannot tell whether two uses of `x` are the same value, and a code generator cannot assign it a slot.

The phase that fixes it is the least glamorous in the compiler and the one that catches the most errors in practice. It is also where a specific and important boundary sits: [`theory-of-computation` 2.3](../../theory-of-computation/lessons/02-03-cfl-pumping-lemma-and-closure.md) proves that "every variable is declared before use" is not context-free — it is $a^nb^nc^n$ in disguise. **No grammar can enforce it.** So every language has a phase after parsing whose job is the rules the grammar structurally could not express, and this is it.

## The idea

Walk the tree carrying a **scope stack**: a stack of maps from name to declaration. Push a frame on entering a scope, pop it on leaving, insert on a declaration, and on a use, search from the top down and stop at the first hit.

That is the whole algorithm, and three things fall out of it for free:

- **Shadowing** is just "the search stopped early". An inner `x` is not a replacement for the outer one — the outer binding is still there, still intact, and becomes visible again the moment the frame pops.
- **Undefined variable** is "the search reached the bottom and failed".
- **Duplicate declaration** is "insert found the name already present *in the top frame*" — checking only the top frame is what makes shadowing legal while redeclaration in the same block is not.

The output is a decorated tree: every use occurrence now points at the declaration it refers to. That pointer is what the rest of the compiler consumes. A common implementation makes it literal — each identifier node gets a field holding the address of its binder — and once that field is filled the name string is never consulted again.

## The formal version

**Definition (binding and use occurrence).** An occurrence of an identifier is a **binding occurrence** if it introduces the name (a parameter, a `let`, a declaration) and a **use occurrence** otherwise. Name resolution is a function from use occurrences to binding occurrences, total on well-formed programs.

**Definition (scope).** The **scope** of a binding occurrence is the region of program text in which its use occurrences resolve to it. A language has **lexical** (static) scope when that region is determined by the program's nesting structure alone, so resolution can be done at compile time by the algorithm above. The alternative, dynamic scope, defers it to run time; [Lesson 6.1](06-01-names-scope-and-closures.md) shows what that costs.

**The algorithm.**

```
resolve(node, stack):
    case Block(stmts):      push(stack)
                            for s in stmts: resolve(s, stack)
                            pop(stack)
    case Decl(name, init):  resolve(init, stack)   # before inserting!
                            if name in top(stack): error "duplicate"
                            top(stack)[name] = node
    case Use(name):         for frame in stack, top to bottom:
                                if name in frame:
                                    node.binder = frame[name]; return
                            error "undefined variable: " + name
    otherwise:              for c in children(node): resolve(c, stack)
```

**Where the subtlety lives: the order of the two lines in `Decl`.** Resolving the initializer *before* inserting the name means `let x = x + 1` resolves the inner `x` to an **outer** binding — the new one does not exist yet. Inserting first means it resolves to itself, which is either an error or a recursive definition. Both choices are taken by real languages, and the choice *is* the difference between `let` and `letrec`:

$$\texttt{let } x = e_1 \texttt{ in } e_2 : \quad x \notin \text{scope of } e_1 \qquad\qquad \texttt{letrec } x = e_1 \texttt{ in } e_2 : \quad x \in \text{scope of } e_1$$

In words: `let` binds after evaluating, `letrec` binds before — which is why you need `letrec` (or its equivalent) to define a recursive function, and why Lesson 3.3 has to work so hard to get recursion in a calculus that has neither.

**Forward references.** Some names must resolve to declarations that appear *later* in the text — mutually recursive functions, methods that call each other, types referring to each other. The standard solution is **two passes over each scope**: pass one inserts every declaration in the scope, pass two resolves every use. This is why a Java method may call a method declared below it while a C function may not: C resolves in one pass at file scope (hence forward declarations and header files), Java uses two.

## Picture

![Three stacked frames. The bottom frame, labelled global, holds x colon int and f colon int arrow int. The middle frame, labelled f's body, holds y colon int. The top frame, labelled inner block, holds x colon string. An arrow on the right marked lookup x starts at the top frame and finds x colon string immediately. A second note points at the global frame saying the int binding is shadowed, not replaced.](assets/01-06-fig1.svg)

A lookup of `x` inside the inner block stops at the first frame and yields the `string` binding. The global `x : int` is untouched — it is still in the table, still findable from anywhere outside the inner block, and it becomes visible again the instant that frame pops. **Shadowing is a property of the search, not of the table**, which is the single most useful thing to know about it: no binding is ever destroyed, so no amount of shadowing can corrupt an outer scope.

## Worked examples

**Example 1 (mechanical): resolve a nested program.** Number the occurrences and resolve each use.

```
1  let x = 10;
2  let f = fun(y) {
3      let x = "hi";
4      return y + len(x);
5  };
6  return x + 1;
```

| line | occurrence | kind | resolves to | why |
|---|---|---|---|---|
| 1 | `x` | binding | — | inserts `x` into the global frame |
| 2 | `f` | binding | — | inserts `f` into the global frame |
| 2 | `y` | binding | — | pushes a frame for the function; inserts `y` |
| 3 | `x` | binding | — | pushes a frame for the block; inserts `x`, shadowing line 1 |
| 4 | `y` | use | line 2 | not in the block frame; found in the function frame |
| 4 | `len` | use | (builtin) | not in any user frame; found in the outermost builtin frame |
| 4 | `x` | use | **line 3** | found immediately in the block frame |
| 6 | `x` | use | **line 1** | the block and function frames have been popped |

The two uses of `x` on lines 4 and 6 are the same string and **different variables**. After resolution the compiler never has to ask again — line 4's node points at line 3, line 6's at line 1 — and every later phase reads the pointer.

**Example 2 (why you'd care): the error a grammar cannot catch.** Consider:

```
return z + 1;
```

with no declaration of `z` anywhere. This is a perfectly well-formed parse tree: `return` of a `+` node whose children are an identifier and a numeral. Every grammar in Module 1 accepts it. It is nonetheless not a legal program in any statically-scoped language.

Why no grammar can reject it: to do so, the grammar would have to relate an arbitrary number of declarations to an arbitrary number of uses, matching each use to *some* earlier declaration. [`theory-of-computation` 2.3](../../theory-of-computation/lessons/02-03-cfl-pumping-lemma-and-closure.md) shows this is the $\{a^n b^n c^n\}$ pattern — a context-free grammar can match *two* unbounded counts against each other (that is what a stack buys) but not three, and "declare $n$ names, use them $m$ times, with each use matched to a declaration" exceeds it.

The same boundary explains a longer list of checks that all live in this phase or the type checker rather than the grammar:

- argument count matches the function's parameter count,
- `break` appears only inside a loop,
- every path through a non-void function returns,
- a `final` variable is assigned exactly once.

Each is a perfectly reasonable rule and none is expressible in a context-free grammar. **This is not a shortcoming of the grammar formalism — it is the reason compilers have phases.** Trying to push these rules into the grammar produces an unreadable specification and, for the genuinely non-context-free ones, an impossible one.

## Watch out

- **You might think** shadowing overwrites the outer binding — **but actually** it hides it for the duration of the inner scope and the outer binding is untouched, as the Picture shows. A shadowed variable is still live, still reachable by code in the outer scope, and will be visible again after the pop.
- **You might think** "undefined variable" is a syntax error because the compiler reports it alongside syntax errors — **but actually** the program parsed fine; this is a *semantic* error, caught by a tree walk after parsing. The distinction matters because it tells you which phase to look at when the compiler's behaviour surprises you, and it is why a file with an undefined variable still produces a complete parse tree that an IDE can use.
- **You might think** the order of "resolve the initializer" and "insert the name" is an implementation detail — **but actually** it is the entire semantic difference between `let` and `letrec`, and getting it wrong makes `let x = x + 1` either an error or a silent self-reference. Real languages disagree here on purpose.

## One-liner

> Resolution turns every identifier string into a pointer at its binder, using a stack of maps — and it exists as a separate phase precisely because "declared before use" is not something any grammar can say.

## Problems

**P1 (🟢)** Resolve every **use** occurrence in the following program to the line of its binding occurrence, or report an error. Answer as a table of (line, name, resolves-to-line-or-error).

```
1  let a = 1;
2  let b = 2;
3  {
4      let a = 3;
5      print(a + b);
6  }
7  print(a + c);
```

**P2 (🟡)** For each language rule, state whether it can be enforced by a context-free grammar or must wait for a later phase, and give the one-sentence reason.

(a) Every `(` is matched by a `)`.
(b) Every variable is declared before use.
(c) A `return` statement appears only inside a function body.
(d) A function call passes exactly as many arguments as the function declares parameters.
(e) The keyword `else` is preceded by a matching `if`.

**P3 (🔴)** A language designer specifies `let` so that the initializer is resolved **before** the name is inserted, and `letrec` so that it is inserted **before**.

(a) In a scope where an outer `x = 10` already exists, give the value of `let x = x + 1` and of `letrec x = x + 1`, assuming the language evaluates eagerly. For the second, say what goes wrong and name the failure.
(b) Mutually recursive functions `even` and `odd` each call the other. Explain why a single `letrec` binding one name is insufficient, and state the two-pass rule that handles it.
(c) The designer proposes dropping `let` entirely and making every binding a `letrec`, arguing it is strictly more expressive. Give the concrete thing this loses — a program that is legal and useful under `let` and becomes wrong under `letrec`.

<details>
<summary>Solutions</summary>

**P1**

| line | name | resolves to |
|---|---|---|
| 5 | `a` | **line 4** — the block frame was pushed at line 3 and `a` was inserted at line 4, so the search stops there |
| 5 | `b` | **line 2** — not in the block frame; found in the global frame |
| 7 | `a` | **line 1** — the block frame popped at line 6, so line 4's binding is no longer visible |
| 7 | `c` | **error: undefined variable `c`** — the search reaches the bottom of the stack without a hit |

Also worth noting: the declaration at line 4 is *not* a duplicate-declaration error even though `a` already exists, because the duplicate check consults only the **top** frame, and the top frame at that moment is the freshly pushed block frame. That is precisely the rule that makes shadowing legal and redeclaration in the same block illegal.

**P2**

(a) **Grammar.** Matched brackets are the canonical context-free language; a production like $S \to (\,S\,) \mid SS \mid \varepsilon$ generates exactly the balanced strings, and the parser's stack does the matching.

(b) **Later phase.** As Example 2 argues, matching an unbounded number of uses against an unbounded number of declarations is beyond context-free — it is the $\{a^nb^nc^n\}$ pattern of [`theory-of-computation` 2.3](../../theory-of-computation/lessons/02-03-cfl-pumping-lemma-and-closure.md).

(c) **Grammar.** This is a nesting condition, not a counting one: give the grammar a nonterminal for "statement inside a function body" that has a `return` production and a nonterminal for "top-level statement" that does not. The cost is duplicating the statement grammar, which is why many languages check it in a later phase anyway — but it is *expressible*, and that is what the question asks.

(d) **Later phase.** The count depends on a declaration that may appear anywhere in the program, so the grammar would have to relate two unbounded counts *at a distance determined by a third thing* (which function is being called). Even for a single fixed function this is $a^nb^n$ at a distance, and across many functions it exceeds context-free entirely.

(e) **Grammar.** Every `else` production in the grammar has an `if` in the same right-hand side, so an `else` with no `if` simply has no derivation. (Note this is the *matching* question, not the *dangling* question — which `if` an `else` attaches to is an ambiguity, settled in Lesson 1.5, not an unenforceable rule.)

**P3**

(a) `let x = x + 1`: the initializer is resolved first, so the `x` in `x + 1` resolves to the **outer** binding, value 10. The expression evaluates to **11**, and the new `x` is bound to 11. This is a well-defined and fairly common idiom.

`letrec x = x + 1`: the name is inserted first, so the `x` in `x + 1` resolves to the binding **currently being defined**, which has no value yet. Under eager evaluation this reads an uninitialized binding. The failure is a **use-before-initialization error** — a run-time error (or a compile-time one in languages that can prove it, as Java does for `final` locals and Rust for all bindings). It is not a name-resolution error: resolution *succeeded*, and pointed at a binding that has no value.

(b) A single `letrec x = e` puts exactly one name in scope in exactly one initializer. `even` needs `odd` in scope and `odd` needs `even` in scope, so neither can be the single name: whichever you bind first, its initializer refers to a name that has not been inserted.

The rule is the two-pass one from the lesson: **pass one inserts every declaration in the group, pass two resolves every initializer.** Languages spell the group explicitly (`letrec even = ... and odd = ...` in ML, a `mutual` block, or simply "all declarations at the top level of a module or class are one group", which is what Java and Python do).

(c) It loses the ability to **refer to an outer binding of the same name while defining a new one** — that is, it loses shadowing in initializers. The concrete case is exactly part (a)'s:

```
let x = x + 1;
```

Under `let` this is legal, useful and idiomatic: rebind a name to a value computed from its previous meaning. It is the pattern behind every `x = f(x)` refinement — normalizing a parameter, wrapping a handler, stripping whitespace from an input, shadowing a mutable binding with an immutable one.

Under universal `letrec` the same line resolves `x` to itself and becomes a use-before-initialization error, so the programmer must invent a second name (`let x2 = x + 1`) and then remember to use `x2` everywhere below. So `letrec` is not strictly more expressive: the two differ in which of two useful readings they give the *same* text, and a language wanting both needs both keywords. (This is why ML, Scheme and Haskell all keep the distinction, and why languages that chose one — Python's function-scoped assignment, JavaScript's `let` — inherit a specific well-known class of confusion about it.)

</details>

## Flashback

**From Lesson 1.1 (Languages, paradigms and the design space):** Axis 4 of the design space splits the type discipline into static/dynamic, strong/weak, and manifest/inferred.

A language resolves names at compile time (lexical scope) but checks *types* at run time. Its designer claims this is incoherent — "you cannot resolve statically and check dynamically."

(a) State whether the designer is right, and name a widely used language that does exactly this.
(b) Say which single piece of information name resolution needs that type checking does not, and use it to explain why the two phases can be separated.

<details>
<summary>Solution</summary>

(a) The designer is **wrong**, and **Python** is the standard counterexample: it resolves names lexically at compile time — the bytecode compiler decides for each name whether it is local, enclosing, global or builtin, and emits a different instruction for each — while types are attached to values and checked when an operation runs.

(b) Name resolution needs only the program's **nesting structure**: which scopes enclose which, and which names each scope declares. That is entirely determined by the text, so the scope-stack walk can run with no knowledge of any value or any type.

Type checking needs something strictly more: the **type of each expression**, which depends on the types of the values that flow into it. A statically typed language commits to knowing those at compile time; a dynamically typed one declines to, and finds out at run time.

Since the first requirement is a subset of the second, a language can satisfy the first without the second — resolve every name statically, and leave every type to run time. The two phases are separable because they consume different information, which is exactly [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s point that the sub-axes of axis 4 are independent: *when names are resolved* and *when types are checked* are two different questions, and a language may answer them differently.

</details>

## Connections

- **Backward:** the tree walked here is built by [Lesson 1.4](01-04-recursive-descent-and-ll1.md) or [Lesson 1.5](01-05-lr-parsing-and-the-item-automaton.md), and the symbol table the lexer hack of [Lesson 1.3](01-03-lexical-analysis-in-practice.md) reaches into is this one. The impossibility argument is [`theory-of-computation` 2.3](../../theory-of-computation/lessons/02-03-cfl-pumping-lemma-and-closure.md)'s CFL pumping lemma.
- **Forward:** the scope stack becomes an **environment** in [Lesson 2.2](02-02-big-step-semantics-and-environments.md), where it holds values rather than declarations, and the same structure is what a closure captures in [Lesson 6.1](06-01-names-scope-and-closures.md). The typing context $\Gamma$ of [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) is the same stack again, holding types.
- **Sideways:** the `let`/`letrec` distinction of P3 is the same "is this name in scope in its own definition?" question that makes recursion hard in [Lesson 3.3](03-03-confluence-and-the-y-combinator.md)'s pure lambda calculus, where the answer is no and the $Y$ combinator is the workaround.

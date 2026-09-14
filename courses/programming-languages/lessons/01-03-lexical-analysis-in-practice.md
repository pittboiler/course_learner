# Programming Languages · Lesson 1.3: Lexical analysis in practice

> ⏱ ~15 min · Module 1: Syntax and parsing · Builds on: [1.2 (concrete and abstract syntax)](01-02-concrete-and-abstract-syntax.md), [`theory-of-computation` 1.3 (regular expressions and Kleene's theorem)](../../theory-of-computation/lessons/01-03-regular-expressions-and-kleenes-theorem.md) · Unlocks: [1.4 (recursive descent)](01-04-recursive-descent-and-ll1.md)

## Why this matters

The theory here is finished and you already have it. [`theory-of-computation` 1.2–1.3](../../theory-of-computation/lessons/01-03-regular-expressions-and-kleenes-theorem.md) proves that a regular expression, an NFA and a DFA describe exactly the same languages, and that Thompson's construction plus the subset construction converts between them mechanically. A lexer generator *is* those two algorithms with a build script around them. There is nothing left to derive.

And yet lexing is where a surprising number of real language warts live — the reason `a+++b` means something you did not intend in C, the reason a C compiler cannot lex a file without help from its own parser, the reason inserting a newline in Go can change what your program does. Every one of those is the same phenomenon: **a regular language has to commit to a token boundary using only local information, and sometimes the local information is not enough.** That is what this lesson is about.

## The idea

A lexer's whole job is to chop a character stream into tokens. The chop points look obvious until you write down the rule, and then you discover there are two rules, and that they can disagree with what the programmer meant.

**Rule one: maximal munch.** At each position, take the *longest* string that matches any token pattern. Without it, `==` would lex as two `=` tokens and `<=` as `<` then `=`, and no comparison operator longer than one character could exist.

**Rule two: rule priority.** If two patterns match strings of the *same* length, the one listed first wins. This is how `if` becomes a keyword rather than an identifier — both patterns match the two characters `if`, and the keyword rule is listed first.

The two rules are a total order on candidates: longest first, then earliest rule. They are also **irrevocable**. A classical lexer does not backtrack: once it has committed to the longest match at a position, it moves on, and no amount of trouble downstream will make it reconsider. That single property — not the automata theory — is the source of every difficulty below.

## The formal version

**Definition (token, lexeme).** A **lexeme** is a substring of the source. A **token** is a pair of a category and the lexeme (often with the lexeme discarded when the category determines it). The lexer's output is a token sequence; positions, whitespace and comments are dropped or attached as metadata.

**Definition (maximal munch).** Given ordered rules $(c_1, r_1), \dots, (c_k, r_k)$ and input $s$ at position $i$, let

$$\ell = \max\{\, |w| : w \text{ is a prefix of } s[i{:}] \text{ and } w \in L(r_j) \text{ for some } j \,\}$$

and emit category $c_j$ for the smallest $j$ with $s[i{:}i{+}\ell] \in L(r_j)$. Then set $i \mathrel{+}= \ell$ and repeat.

In words: longest match wins; ties go to the earliest rule; never look back.

**Why this is a regular problem, and where the boundary sits.** Each $r_j$ is a regular expression, so the union $r_1 \mid \cdots \mid r_k$ is recognized by one DFA, and finding the longest match means running that DFA forward and remembering the last accepting state seen. Total cost is $O(|s|)$ with a constant number of bytes of state — this is the entire practical argument for a separate lexing phase, and it is why lexing is essentially free while parsing is not.

The boundary is exactly the pumping lemma's. Nesting is not regular, so a lexer cannot match brackets, cannot know whether it is inside a nested comment, and cannot know whether a name is a type. When a language needs one of those to tokenize, something has to give.

**Keywords are not a separate mechanism.** The clean implementation has one rule for identifiers and a set lookup afterwards:

$$\texttt{ID} \to \texttt{[A-Za-z\_][A-Za-z0-9\_]*}, \qquad \text{then if the lexeme} \in K \text{ retag it as a keyword}$$

This automatically gets `iffy` right — maximal munch takes all four characters, and `iffy` is not in $K$, so it stays an identifier. Writing a separate regex per keyword and relying on rule priority alone gets `iffy` *wrong* unless the keyword patterns are carefully anchored, because `if` matches a prefix. The lookup version cannot make that mistake.

## Picture

![The characters a, plus, plus, plus, b laid out on a line, with token spans drawn beneath them. The first span covers a and is labelled ID a. The second span covers the first two plus signs and is labelled INC plus-plus. The third span covers the third plus sign and is labelled PLUS. The fourth covers b and is labelled ID b. A caption notes that at position 1 the scanner sees three plus signs, the longest legal token is the two-character increment, so it commits, and the alternative reading is unreachable.](assets/01-03-fig1.svg)

`a+++b` in C lexes as `a ++ + b`, so the parser sees a post-increment of `a` added to `b`. The reading `a + ++b` is not merely disfavoured — it is **unreachable**, because the lexer committed before the parser was consulted. If you want it, you type a space. This is maximal munch working exactly as specified and producing a result nobody wants, which is the honest summary of the rule.

## Worked examples

**Example 1 (mechanical): lex four strings under one rule set.** Rules, in order: `INC` = `++`, `PLUS` = `+`, `LE` = `<=`, `LT` = `<`, `MINUS` = `-`, `EQ` = `==`, `ASSIGN` = `=`, `ID` = `[A-Za-z_]\w*`, `NUM` = `\d+`.

| Input | Tokens | Rule that decided it |
|---|---|---|
| `a+++b` | `ID a`, `INC ++`, `PLUS +`, `ID b` | maximal munch at position 1 |
| `a+ ++b` | `ID a`, `PLUS +`, `INC ++`, `ID b` | whitespace forces the boundary |
| `x<=y` | `ID x`, `LE <=`, `ID y` | maximal munch prefers `<=` over `<` |
| `x<-y` | `ID x`, `LT <`, `MINUS -`, `ID y` | no `<-` rule exists, so the longest match is one character |
| `count==0` | `ID count`, `EQ ==`, `NUM 0` | maximal munch prefers `==` over `=` |

The last two are the pair worth holding together. `x<-y` lexes as a comparison against a negation *because this rule set has no arrow token*. Add `ARROW` = `<-` and the same five characters become `ID x`, `ARROW <-`, `ID y` — a completely different program. In R, where `<-` is assignment, `x<-y` assigns; to compare you must write `x < -y`. **The token set is part of the language's semantics, not a detail of its implementation.**

**Example 2 (why you'd care): the lexer hack.** In C, this is ambiguous *at the token level*:

```
(x) * y;
```

If `x` is a type name, this is a cast of `*y` to type `x`. If `x` is a variable, it is a multiplication whose result is discarded. The grammar needs to know which, and the difference is not local — it depends on whether a `typedef` earlier in the file (possibly thousands of lines earlier, possibly in an included header) introduced `x` as a type.

Deciding that requires the symbol table, which is built during parsing (Lesson 1.6). But the lexer runs *before* the parser. So C compilers use **the lexer hack**: the lexer keeps a live set of known type names, consults it when it produces an identifier, and emits `TYPENAME` instead of `ID` when the name is in the set — and the parser *writes into that set* as it processes each `typedef`. The two phases become mutually recursive.

The cost is real: the lexer is no longer a pure function of the character stream, the phases can no longer run independently, and you cannot lex a C file in isolation — which is why C syntax highlighting in editors is approximate and why C is hard to parse with standard tooling.

Contrast Go, which declares types with `type x int` — a keyword at the start. The parser knows it is looking at a type declaration from the first token, no feedback is needed, and the lexer stays a pure function. **Same problem, solved in the concrete syntax instead of the implementation**, at the price of one keyword. This is the clearest case in the course of a syntax decision paying for itself in the compiler.

## Watch out

- **You might think** maximal munch is a heuristic the lexer could relax when the parse fails — **but actually** it is a specification, and relaxing it would make tokenization depend on parsing, which is precisely what the phase split exists to avoid. A "lexer that backtracks on parse failure" is a parser with extra steps, and its cost is no longer linear.
- **You might think** the lexer hack is a wart of old compilers that modern C front ends have engineered away — **but actually** it is forced by the language: the ambiguity is in C's grammar, so any conforming implementation must resolve `(x) * y` using declaration context. Modern compilers still do it; they are just tidier about where the set lives.
- **You might think** keywords need their own regular expressions — **but actually** one identifier rule plus a set lookup is both simpler and more correct, because it cannot mis-handle an identifier with a keyword prefix. If you do write per-keyword rules, `iffy` is the test case that catches the bug.

## One-liner

> Lexing is a solved regular-language problem made interesting by one irrevocable decision — longest match, earliest rule, never look back — and every lexical wart in every language is that decision meeting information it does not have.

## Problems

**P1 (🟢)** Using the rule set from Example 1 — `INC` = `++`, `PLUS` = `+`, `LE` = `<=`, `LT` = `<`, `MINUS` = `-`, `EQ` = `==`, `ASSIGN` = `=`, `ID` = `[A-Za-z_]\w*`, `NUM` = `\d+`, keywords `{if, int, return}` via a post-lookup — give the token sequence for each input.

(a) `if(x<=10)`  (b) `iffy=y++`  (c) `a--b` (note: there is no `--` rule)  (d) `return-1`

**P2 (🟡)** A language designer adds a `**` operator for exponentiation to a language that already has `*` for multiplication and `*` as a prefix pointer-dereference.

(a) Give the shortest source string whose meaning changes as a result of adding the token, and say what it meant before and after.
(b) State which of the two lexing rules causes the change.
(c) Name the fix available to a programmer who wants the old meaning.

**P3 (🔴)** Python's grammar is context-free, but Python source cannot be tokenized by a pure maximal-munch lexer over a regular rule set, because indentation is significant and blocks nest arbitrarily deep.

(a) State precisely why nesting puts this beyond a regular rule set. Name the theorem.
(b) Real Python lexers emit `INDENT` and `DEDENT` tokens. Describe the extra state the lexer must carry, and say what data structure it is.
(c) That extra state makes the lexer strictly more powerful than a finite automaton. Say which class of automaton it now matches, and name one thing about Python's design that keeps this from being as costly as C's lexer hack.

<details>
<summary>Solutions</summary>

**P1**

(a) `if(x<=10)` → `KEYWORD if`, `LPAREN (`, `ID x`, `LE <=`, `NUM 10`, `RPAREN )`.
The `if` is matched by the `ID` rule (two characters, maximal munch takes both) and then retagged by the keyword lookup. `<=` beats `<` by maximal munch.

(b) `iffy=y++` → `ID iffy`, `ASSIGN =`, `ID y`, `INC ++`.
Maximal munch takes all four characters of `iffy`; the lookup fails, so it stays an identifier. `=` is a single character because no `==` follows. This is the test case for the keyword bug.

(c) `a--b` → `ID a`, `MINUS -`, `MINUS -`, `ID b`.
With no `--` rule, the longest match at position 1 is one character, so the lexer emits two separate `MINUS` tokens and the parser sees `a - (-b)`. (In C, which *does* have `--`, the same string lexes as `ID a`, `DEC --`, `ID b` and is a syntax error. Same characters, different token set, different outcome — Example 1's point.)

(d) `return-1` → `KEYWORD return`, `MINUS -`, `NUM 1`.
Maximal munch takes `return` as an identifier (the `-` cannot continue it, since `-` is not in `\w`), the lookup retags it, and `-1` lexes as two tokens because the `NUM` rule is `\d+` and does not include a sign. Whether this means "return negative one" is then the parser's business, not the lexer's.

**P2**

(a) The shortest string is `a**b`. *Before*: `ID a`, `MUL *`, `MUL *`, `ID b` — a multiplication of `a` by the dereference of `b`, i.e. `a * (*b)`. *After*: `ID a`, `POW **`, `ID b` — `a` raised to the power `b`.

(b) **Maximal munch.** Adding the `**` pattern makes a two-character match available at position 1, and longest-match takes it in preference to the one-character `*`. Rule priority is not involved: the candidates have different lengths, so the tie-break never runs.

(c) Insert a space: `a * *b`. The whitespace forces a token boundary the lexer must respect, making the two-character match unavailable. (This is the same fix as `a + ++b` in the Picture, and it is the only fix available at the source level — the programmer cannot ask the lexer to reconsider.)

**P3**

(a) Because the lexer must emit one `DEDENT` for each enclosing block being closed, and blocks nest to unbounded depth, it must *count* how many indentation levels are open. A finite automaton has finitely many states and therefore cannot count without bound. Formally, the set of valid `INDENT`/`DEDENT` sequences is a balanced-bracket language, which the **pumping lemma for regular languages** ([`theory-of-computation` 1.5](../../theory-of-computation/lessons/01-05-pumping-lemma-and-non-regularity.md)) shows is not regular — the same argument that rules out $\{0^n 1^n\}$.

(b) The lexer carries a **stack of indentation widths**, initialized to `[0]`. At the first token of each logical line it compares the line's leading width $w$ to the stack top $t$: if $w > t$, push $w$ and emit one `INDENT`; if $w = t$, emit nothing; if $w < t$, pop and emit one `DEDENT` per popped level until the top equals $w$ (and report an error if no level matches). At end of file, emit a `DEDENT` for every level above the initial 0.

(c) A stack plus a finite control is a **pushdown automaton**, so the lexer is now recognizing a context-free rather than a regular language.

What keeps it cheap, any one of which is a complete answer:
- **The information flows one way.** The indentation stack is computed entirely from the character stream — the lexer never consults the parser or a symbol table. C's lexer hack is expensive precisely because the dependency is *circular*: the parser must feed the lexer. Python's lexer remains a pure function of its input, so it can still run standalone, which is why Python tooling can tokenize a file in isolation and C tooling cannot.
- **The stack is bounded by nesting depth**, not by program size, and it is pushed and popped by a rule that looks only at the current line's prefix — so the cost stays $O(|s|)$ overall, unlike the symbol-table maintenance the lexer hack requires.

</details>

## Flashback

**From Lesson 1.2 (Concrete syntax, abstract syntax and desugaring):** A language has a `let` expression which desugars as `let x = e1 in e2` ⟿ `app(lam(x, e2), e1)`.

The designer now wants a multi-binding form, `let x = e1, y = e2 in e3`, where `e2` **may** refer to `x`. Give the desugaring, and say whether a fresh temporary is required.

<details>
<summary>Solution</summary>

Nest the single-binding form, innermost binding last:

$$\texttt{let } x = e_1,\ y = e_2 \texttt{ in } e_3 \;\rightsquigarrow\; \texttt{let } x = e_1 \texttt{ in } (\texttt{let } y = e_2 \texttt{ in } e_3)$$

and then each `let` unfolds to an application as before, giving

$$\texttt{app}(\texttt{lam}(x,\ \texttt{app}(\texttt{lam}(y,\ e_3),\ e_2)),\ e_1).$$

**No fresh temporary is required**, and the reason is the rule from Lesson 1.2: a temporary is needed only when a rewrite mentions a subexpression *more than once*. Here $e_1$, $e_2$ and $e_3$ each appear exactly once on the right, so no expression is evaluated twice and no side effect is duplicated.

The substantive content is the **nesting order**. Because $e_2$ sits inside the body of the $x$ binding, $x$ is in scope in $e_2$ — which is what the specification asked for. Reversing the nesting would put $y$ in scope in $e_1$ instead and leave $x$ unbound in $e_2$. So the sequential-scoping semantics is carried entirely by which `let` is outer, and the desugaring is where that decision gets made.

(A language wanting the *other* semantics — all bindings evaluated in the enclosing scope, so `e2` cannot see `x` — desugars to a single multi-argument application `app(lam(x, lam(y, e3)), e1, e2)` instead. Both are common; ML's `let` is sequential, and `let ... and ...` is the parallel form.)

</details>

## Connections

- **Backward:** regular expressions, Thompson's construction and the subset construction are [`theory-of-computation` 1.2–1.3](../../theory-of-computation/lessons/01-03-regular-expressions-and-kleenes-theorem.md)'s; the non-regularity argument in P3 is [`theory-of-computation` 1.5](../../theory-of-computation/lessons/01-05-pumping-lemma-and-non-regularity.md)'s pumping lemma. The token stream produced here is the input to the parse tree of [Lesson 1.2](01-02-concrete-and-abstract-syntax.md).
- **Forward:** [Lesson 1.4](01-04-recursive-descent-and-ll1.md) consumes this token stream one token at a time and needs exactly one token of lookahead. The symbol table the lexer hack reaches into is built in [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md).
- **Sideways:** "commit to the longest match and never reconsider" is a greedy algorithm, and like every greedy algorithm ([`algorithms` 2.1](../../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md)) it is fast, simple, and occasionally wrong in a way no local repair can fix — `a+++b` is its counterexample instance.

# Programming Languages · Lesson 2.1: Small-step operational semantics and rule induction

> ⏱ ~15 min · Module 2: Semantics · Builds on: [1.6 (name resolution)](01-06-name-resolution-and-the-semantic-phase.md), [`discrete-mathematics` 1.4 (induction)](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) · Unlocks: [2.2 (big-step semantics)](02-02-big-step-semantics-and-environments.md), [4.5 (type soundness)](04-05-type-soundness-progress-and-preservation.md)

## Why this matters

You now have a tree with every name resolved. What does it *mean*?

"It means whatever the compiler does with it" is not an answer — it makes every compiler bug a language change and makes it impossible to say two implementations agree. A real language definition has to pin the meaning down independently of any implementation, and there are three classical ways to do it. This module does all three, and this lesson does the one that dominates modern practice.

Small-step semantics defines meaning as a **step relation**: a program is a state, and the language says which state it moves to next. Its payoff is specific and large: because it exposes every intermediate state, it can say what happens in a program that never terminates, and it can say precisely what it means for a program to **go wrong**. Both are why the soundness theorem of [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) — the one that makes "well-typed programs don't go wrong" a theorem — is stated in this style and essentially cannot be stated in the other.

## The idea

Write down, for every shape a program can have, the one thing that happens next.

The machinery is a **judgment** — a claim of a fixed shape — and a set of **inference rules** that say when a judgment holds. A rule is written with premises above a line and a conclusion below:

$$\frac{\text{premise}_1 \qquad \text{premise}_2}{\text{conclusion}}\;(\mathsf{Name})$$

read as "if all the premises hold, then the conclusion holds". A rule with no premises is an **axiom** — it always fires.

The whole definition of a language is then a page of these rules, and it defines the step relation **inductively**: a judgment holds exactly when there is a finite tree of rule applications ending in it, and *nothing else holds*. That last clause is not a formality. It is what makes proof by rule induction valid, and it is what lets you say a stuck term is stuck — no rule applies, so no step exists.

## The formal version

Take a small imperative language. Arithmetic expressions evaluate against a **state** $s$, a map from variables to integers.

**Judgment.** $\langle a, s\rangle \to \langle a', s\rangle$ — "expression $a$ in state $s$ steps to $a'$."

$$\frac{s(x) = n}{\langle x, s\rangle \to \langle n, s\rangle}\;(\mathsf{Var}) \qquad\quad \frac{\langle a_1, s\rangle \to \langle a_1', s\rangle}{\langle a_1 + a_2, s\rangle \to \langle a_1' + a_2, s\rangle}\;(\mathsf{Add-L})$$

$$\frac{\langle a_2, s\rangle \to \langle a_2', s\rangle}{\langle n_1 + a_2, s\rangle \to \langle n_1 + a_2', s\rangle}\;(\mathsf{Add-R}) \qquad\quad \frac{n = n_1 + n_2}{\langle n_1 + n_2, s\rangle \to \langle n, s\rangle}\;(\mathsf{Add})$$

In words: look up a variable; reduce the left operand if you can; otherwise, once the left is a numeral, reduce the right; once both are numerals, do the addition. **The shape of these rules is the evaluation order** — $\mathsf{Add-L}$ requires nothing of $a_1$ while $\mathsf{Add-R}$ requires $n_1$ to already be a numeral, and that asymmetry is exactly "left to right". Lesson 3.4 varies this deliberately.

For commands the judgment carries the state too, since commands change it: $\langle c, s\rangle \to \langle c', s'\rangle$.

$$\frac{\langle a,s\rangle \to \langle a',s\rangle}{\langle x := a, s\rangle \to \langle x := a', s\rangle}\;(\mathsf{Asgn-1}) \qquad \frac{}{\langle x := n, s\rangle \to \langle \texttt{skip}, s[x \mapsto n]\rangle}\;(\mathsf{Asgn})$$

$$\frac{}{\langle \texttt{skip}; c_2, s\rangle \to \langle c_2, s\rangle}\;(\mathsf{Seq-Skip}) \qquad \frac{\langle c_1,s\rangle \to \langle c_1',s'\rangle}{\langle c_1; c_2, s\rangle \to \langle c_1'; c_2, s'\rangle}\;(\mathsf{Seq})$$

$$\frac{}{\langle \texttt{while } b \texttt{ do } c, s\rangle \to \langle \texttt{if } b \texttt{ then } (c; \texttt{while } b \texttt{ do } c) \texttt{ else skip}, s\rangle}\;(\mathsf{While})$$

The $\mathsf{While}$ rule is the elegant one: the loop takes **one step to unfold itself into a conditional**, and everything else follows from the rules for `if` and `;`. No rule mentions "iteration". A loop that runs forever is simply a term for which an infinite step sequence exists.

**Definition (value, stuck).** A term is a **value** if it is a numeral (for expressions) or `skip` (for commands). A term is **stuck** if it is not a value and no rule applies to it. In a language where `true + 1` is meaningless, $\langle \texttt{true} + 1, s\rangle$ is stuck: no rule matches. This three-way split — *value*, *steps*, *stuck* — is the vocabulary soundness is stated in.

**Rule induction.** To prove that every derivable judgment has property $P$, show that each rule *preserves* $P$: assuming $P$ of every premise, prove $P$ of the conclusion. Because judgments hold only via finite derivation trees, this covers all of them — it is structural induction on the derivation.

**Theorem (determinism).** If $\langle a,s\rangle \to \langle a_1,s\rangle$ and $\langle a,s\rangle \to \langle a_2,s\rangle$ then $a_1 = a_2$.

*Proof sketch.* Rule induction on the first derivation. For each rule, check no other rule could also have applied to the same term. The pair $\mathsf{Add-L}$/$\mathsf{Add-R}$ is the case that does work: $\mathsf{Add-L}$ requires $a_1$ to step, and a numeral does not step, so if $\mathsf{Add-R}$ applies ($a_1$ is a numeral) then $\mathsf{Add-L}$ cannot. The premises are mutually exclusive by construction. $\blacksquare$

**The point of that proof** is that determinism is not assumed — it is a *consequence* of how the rules were written, and a sloppier rule set would not have it. That is the kind of question this formalism exists to settle.

## Picture

![A reduction chain of five expressions, each with the rule that licensed the step. The expression open paren x plus 3 close paren times open paren 4 minus 1 close paren becomes open paren 2 plus 3 close paren times open paren 4 minus 1 close paren by looking up x, then 5 times open paren 4 minus 1 close paren by adding, then 5 times 3 by subtracting, then 15 by multiplying. Below, the inference rule licensing the first step is shown with premise s of x equals 2 above the line and the judgment x in state s steps to 2 below it, labelled VAR.](assets/02-01-fig1.svg)

Four steps, each one redex, each licensed by exactly one rule. The chain is the meaning: nothing else is claimed about the expression, and if you want to know what it looks like after two steps, the semantics tells you. Note the order — `x` is looked up before the right operand is touched, because $\mathsf{Add-L}$ has no precondition on the left operand while $\mathsf{Add-R}$ demands a numeral on the left.

## Worked examples

**Example 1 (mechanical): unfold a loop by hand.** Take $c = \texttt{while } x \ge 1 \texttt{ do } x := x - 1$ in state $s = [x \mapsto 1]$.

| # | term | state | rule |
|---|---|---|---|
| 0 | `while x>=1 do x:=x-1` | $x{=}1$ | $\mathsf{While}$ |
| 1 | `if x>=1 then (x:=x-1; while ...) else skip` | $x{=}1$ | guard steps ($\mathsf{Var}$, then compare) |
| 2 | `if true then (x:=x-1; while ...) else skip` | $x{=}1$ | $\mathsf{If-True}$ |
| 3 | `x:=x-1; while ...` | $x{=}1$ | $\mathsf{Seq}$ + $\mathsf{Asgn-1}$ |
| 4 | `x:=0; while ...` | $x{=}1$ | $\mathsf{Seq}$ + $\mathsf{Asgn}$ |
| 5 | `skip; while ...` | $x{=}0$ | $\mathsf{Seq-Skip}$ |
| 6 | `while x>=1 do x:=x-1` | $x{=}0$ | $\mathsf{While}$ |
| 7 | `if x>=1 then ... else skip` | $x{=}0$ | guard steps to `false` |
| 8 | `if false then ... else skip` | $x{=}0$ | $\mathsf{If-False}$ |
| 9 | `skip` | $x{=}0$ | value — done |

Notice rows 0 and 6: the loop reappears *identically*. That is the $\mathsf{While}$ rule regenerating itself, and it is why a non-terminating loop produces an infinite chain rather than a stuck term — a genuinely different outcome, which the next lesson cannot tell apart.

**Example 2 (why you'd care): stuck is not the same as looping.** Compare two programs in a language with booleans and integers and no coercion between them.

$$c_1 = \texttt{while true do skip} \qquad\qquad c_2 = x := \texttt{true} + 1$$

$c_1$ has an infinite step sequence: it never reaches a value, but at every point a rule applies. $c_2$ takes no steps at all — $\mathsf{Asgn-1}$ needs $\texttt{true}+1$ to step, and no arithmetic rule matches a boolean operand, so nothing fires. $c_2$ is **stuck**.

Both "fail to produce an answer", and a compiler might report both as a hang and a crash respectively. But they are completely different phenomena:

- $c_1$ is a *correct* program doing what it was told. No type system should reject it, and none does — non-termination is not a type error.
- $c_2$ is a program with no meaning. This is exactly what a type system exists to rule out.

**Small-step semantics can state that difference; big-step cannot.** In the next lesson both programs simply fail to have a derivation, and the semantics is silent about why. This is the reason the soundness theorem — "a well-typed program never gets stuck" — is stated small-step, and it is the single strongest argument for the style.

## Watch out

- **You might think** the $\mathsf{While}$ rule is circular, since the loop appears in its own right-hand side — **but actually** it is not a definition of the loop's meaning in terms of itself; it is a *step*, and the relation is defined inductively by finite derivation trees. Each unfolding is one legitimate step, and an infinite computation is an infinite *chain* of finite derivations, not an infinite derivation.
- **You might think** a stuck term and a non-terminating one are both "the program failed" — **but actually** they are the two outcomes a semantics must distinguish, and Example 2 is the reason. Conflating them makes the soundness theorem unstatable.
- **You might think** rule induction is induction on the term — **but actually** it is induction on the *derivation*, and for rules like $\mathsf{While}$ the two differ: the conclusion's term is *larger* than the premise's, so term induction would not go through. Induct on the height of the derivation tree and the $\mathsf{While}$ case is unproblematic.

## One-liner

> Meaning as a step relation, defined by inference rules and nothing else — which is what lets you say precisely that a program loops, and precisely that a program is stuck.

## Problems

**P1 (🟢)** Using the arithmetic rules above with $s = [x \mapsto 4,\ y \mapsto 2]$, give the full small-step reduction sequence for $(x + y) * (x - y)$, one line per step, naming the rule that licenses each. State the number of steps.

**P2 (🟡)** A designer replaces $\mathsf{Add-L}$ and $\mathsf{Add-R}$ with a single rule pair that has *no* precondition on either side:

$$\frac{\langle a_1,s\rangle \to \langle a_1',s\rangle}{\langle a_1+a_2,s\rangle \to \langle a_1'+a_2,s\rangle} \qquad \frac{\langle a_2,s\rangle \to \langle a_2',s\rangle}{\langle a_1+a_2,s\rangle \to \langle a_1+a_2',s\rangle}$$

(a) Give a specific term and state for which this relation is **not** deterministic, listing the two different terms it can step to.
(b) In this pure arithmetic language, does the non-determinism change the *final* value? Answer yes or no with a one-sentence reason.
(c) Name one language feature whose addition would make the answer to (b) change, and say why.

**P3 (🔴)** Classify each term as a **value**, **steps** (give the next term), or **stuck**, in a language with the rules above plus booleans, `if`, and no coercions. Then answer (d).

(a) $\langle 3 + 4, s \rangle$
(b) $\langle \texttt{skip}; x := 1,\ s\rangle$
(c) $\langle \texttt{if } 3 \texttt{ then skip else skip},\ s\rangle$
(d) Exactly one of (a)–(c) is the kind of thing a type system is designed to prevent. Say which, and state the property a type system would need to guarantee in order to rule it out — in the vocabulary of this lesson.

<details>
<summary>Solutions</summary>

**P1** With $s = [x \mapsto 4, y \mapsto 2]$:

| # | term | rule |
|---|---|---|
| 0 | $(x + y) * (x - y)$ | — |
| 1 | $(4 + y) * (x - y)$ | $\mathsf{Mul-L}$ over $\mathsf{Add-L}$ over $\mathsf{Var}$ |
| 2 | $(4 + 2) * (x - y)$ | $\mathsf{Mul-L}$ over $\mathsf{Add-R}$ over $\mathsf{Var}$ |
| 3 | $6 * (x - y)$ | $\mathsf{Mul-L}$ over $\mathsf{Add}$ |
| 4 | $6 * (4 - y)$ | $\mathsf{Mul-R}$ over $\mathsf{Sub-L}$ over $\mathsf{Var}$ |
| 5 | $6 * (4 - 2)$ | $\mathsf{Mul-R}$ over $\mathsf{Sub-R}$ over $\mathsf{Var}$ |
| 6 | $6 * 2$ | $\mathsf{Mul-R}$ over $\mathsf{Sub}$ |
| 7 | $12$ | $\mathsf{Mul}$ |

**Seven steps.** Note that the left operand is fully reduced to the numeral 6 before the right operand is touched at all (steps 1–3 before step 4), which is $\mathsf{Mul-R}$'s precondition doing its work.

**P2**

(a) Take $\langle x + y,\ s\rangle$ with $s = [x \mapsto 1,\ y \mapsto 2]$. Both rules apply, since both operands can step:

- first rule: $\langle x + y, s\rangle \to \langle 1 + y, s\rangle$
- second rule: $\langle x + y, s\rangle \to \langle x + 2, s\rangle$

Two distinct successors, so the relation is not deterministic.

(b) **No.** Every reduction sequence from $x + y$ reaches $3$, because in this language an expression's subterms cannot influence each other — there is no state change, so reducing one operand leaves the other's meaning untouched. The relation is non-deterministic but **confluent**: different orders reconverge. (This is the same property that Lesson 3.3 proves for the lambda calculus under the name Church–Rosser.)

(c) **Side effects** — assignment inside an expression, an increment operator, a function call that mutates, or I/O. Any of these makes one operand's evaluation change the state the other operand reads, so the order becomes observable. Concretely, with a language allowing `(x := 1) + (x := 2)` followed by reading `x`, the two orders leave different final states. This is exactly why C leaves the evaluation order of operands unspecified *and* declares programs that depend on it undefined, and why [Lesson 6.2](02-02-big-step-semantics-and-environments.md) has to thread a store through the semantics before the question can even be posed.

**P3**

(a) **Steps.** $\langle 3+4, s\rangle \to \langle 7, s\rangle$ by $\mathsf{Add}$, since both operands are already numerals.

(b) **Steps.** $\langle \texttt{skip}; x := 1,\ s\rangle \to \langle x := 1,\ s\rangle$ by $\mathsf{Seq-Skip}$.

(c) **Stuck.** The rules for `if` require the guard to be a boolean — $\mathsf{If-True}$ matches `true`, $\mathsf{If-False}$ matches `false`, and the congruence rule requires the guard to *step*. A numeral is a value, so it does not step, and it is neither `true` nor `false`, so no rule matches. The term is not a value and cannot move: stuck.

(d) **(c)** is the one. Non-termination is not at issue here, and (a) and (b) are ordinary progress.

The property a type system needs is **progress**: *if a term is well-typed, then it is either a value or it can take a step.* Ruling out (c) means proving that a well-typed `if` never has a numeral guard — which comes from the typing rule requiring the guard to have type `Bool`, plus a canonical-forms lemma saying every value of type `Bool` is `true` or `false`.

Progress alone is not enough, because a term could step to a stuck term. The companion property is **preservation**: *if a well-typed term steps, the result is still well-typed.* Together they give soundness by induction: a well-typed term steps to a well-typed term, which again is a value or steps, so it can never reach a stuck state. [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) proves both.

</details>

## Flashback

**From Lesson 1.5 (LR parsing and the item automaton):** A shift-reduce conflict arises when a state can both shift on a lookahead $a$ and reduce on $a$.

Small-step semantics defines a step *relation*, and Example 2 of this lesson noted that a relation need not be a function. Draw the analogy precisely: state what a shift-reduce conflict and a non-deterministic step relation have in common, and name the one property that a parser must have and a semantics need not.

<details>
<summary>Solution</summary>

**What they have in common.** Both are cases where a rule set specifies *more than one* legal next move for the same configuration. In the parser, the configuration is (state, lookahead) and the two moves are shift and reduce; in the semantics, the configuration is $\langle a, s\rangle$ and the two moves are two different successors. In both cases the specification is a *relation*, and the question is whether it happens to be a function.

**The property a parser must have and a semantics need not: determinism.** A parser is an algorithm — it has to pick one move and run in linear time, so a conflict must be resolved (by a stronger construction, a precedence declaration, or a generator's default) before the parser can exist at all. A semantics is a *specification*, not an algorithm: it is perfectly respectable for it to permit several orders, because what it must guarantee is not that there is one path but that every path agrees. That weaker requirement is **confluence**, and P2(b) is an instance of it.

This is a real design freedom, not a technicality. C's expression evaluation order is deliberately non-deterministic in exactly this sense: the standard gives a relation, not a function, so that compilers may choose whichever order generates better code. The price is the one P2(c) names — once side effects exist, confluence fails, and the standard must then declare such programs undefined rather than pick a winner.

</details>

## Connections

- **Backward:** the resolved tree from [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md) is what these rules walk, and the state $s$ is its scope stack holding values. Rule induction is structural induction on a derivation tree, the same technique as [`discrete-mathematics` 1.4](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md)'s strong induction, applied to trees rather than numbers.
- **Forward:** [Lesson 2.2](02-02-big-step-semantics-and-environments.md) gives the same language a big-step semantics and shows exactly what it loses. The value/steps/stuck vocabulary is the statement of progress in [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md), and the reduction relation of [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md) is this one with a single rule.
- **Sideways:** "a judgment holds exactly when a finite derivation tree ends in it" is the same inductive-definition discipline as a formal proof system in [`mathematical-logic` 1.4](../../mathematical-logic/lessons/01-04-proof-system-completeness.md) — and [Lesson 4.2](04-02-type-checking-and-curry-howard.md) shows the resemblance is not an analogy but an isomorphism.

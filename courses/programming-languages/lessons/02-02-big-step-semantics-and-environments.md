# Programming Languages · Lesson 2.2: Big-step semantics and the environment model

> ⏱ ~15 min · Module 2: Semantics · Builds on: [2.1 (small-step semantics)](02-01-small-step-operational-semantics.md), [1.6 (name resolution)](01-06-name-resolution-and-the-semantic-phase.md) · Unlocks: [2.3 (denotational semantics)](02-03-denotational-semantics-and-fixed-points.md), [6.1 (closures)](06-01-names-scope-and-closures.md)

## Why this matters

Small-step semantics is the right tool for proving things about *what can happen next*. It is a poor tool for writing an interpreter, because it forces you to represent every intermediate program as a data structure and rebuild it at each step — which is neither how you would write the interpreter nor how you would reason about a whole function's behaviour.

Big-step semantics is the other half of the operational picture: instead of "what happens next", it says "what does this evaluate to, all the way". It is essentially a specification of a recursive interpreter, it is what you write when you want to *implement* a language, and its derivation trees are compact enough to write on a page.

It also trades something away, and being precise about what is the real content of this lesson. The trade shows up immediately in Module 4: small-step is the style soundness is provable in, and big-step is the style your interpreter is written in.

## The idea

One judgment, no intermediate states: $\langle c, s\rangle \Downarrow s'$, read "$c$ started in state $s$ terminates in state $s'$."

Where a small-step rule says "reduce the left operand one notch", a big-step rule says "evaluate the left operand *completely*, evaluate the right operand *completely*, then combine". The premises are whole evaluations, so a derivation tree for a big-step judgment is not a chain — it is a tree whose root is the entire run of the program, and whose leaves are the primitive lookups and constants.

The shape is exactly a recursive interpreter. `eval(Add(a1, a2), s)` calls `eval(a1, s)`, calls `eval(a2, s)`, adds. The rule

$$\frac{\langle a_1, s\rangle \Downarrow n_1 \qquad \langle a_2, s\rangle \Downarrow n_2}{\langle a_1 + a_2, s\rangle \Downarrow n_1 + n_2}$$

*is* that function, written declaratively. This correspondence is why big-step semantics is sometimes called **natural semantics**: it is the natural way to say what an implementation should do.

## The formal version

Expressions evaluate to values without changing the state:

$$\frac{}{\langle n, s\rangle \Downarrow n} \quad \frac{}{\langle x, s\rangle \Downarrow s(x)} \quad \frac{\langle a_1,s\rangle \Downarrow n_1 \quad \langle a_2,s\rangle \Downarrow n_2}{\langle a_1 + a_2, s\rangle \Downarrow n_1 + n_2}$$

Commands map a state to a state:

$$\frac{}{\langle \mathsf{skip}, s\rangle \Downarrow s}\;(\mathsf{Skip}) \qquad \frac{\langle a, s\rangle \Downarrow n}{\langle x := a, s\rangle \Downarrow s[x \mapsto n]}\;(\mathsf{Asgn})$$

$$\frac{\langle c_1, s\rangle \Downarrow s' \qquad \langle c_2, s'\rangle \Downarrow s''}{\langle c_1; c_2, s\rangle \Downarrow s''}\;(\mathsf{Seq})$$

In words for $\mathsf{Seq}$: run $c_1$ to completion getting $s'$, then run $c_2$ from there. **The threading of $s'$ from the first premise into the second is the entire content of sequencing** — it is where "and then" lives.

The loop needs two rules, one per truth value of the guard:

$$\frac{\langle b,s\rangle \Downarrow \mathsf{false}}{\langle \mathsf{while}\ b\ \mathsf{do}\ c,\ s\rangle \Downarrow s}\;(\mathsf{While\text{-}F})$$

$$\frac{\langle b,s\rangle \Downarrow \mathsf{true} \quad \langle c, s\rangle \Downarrow s' \quad \langle \mathsf{while}\ b\ \mathsf{do}\ c,\ s'\rangle \Downarrow s''}{\langle \mathsf{while}\ b\ \mathsf{do}\ c,\ s\rangle \Downarrow s''}\;(\mathsf{While\text{-}T})$$

The third premise of $\mathsf{While\text{-}T}$ is the *same judgment* about the *same command* — the rule is recursive. A loop running $k$ times produces a derivation tree of depth $k$, with $\mathsf{While\text{-}T}$ applied $k$ times and $\mathsf{While\text{-}F}$ once at the bottom.

**Environments.** For an imperative language a "state" is enough. For a language with nested scopes and functions, replace it with an **environment** $\rho$ — the scope stack of [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md), now holding values rather than declarations:

$$\frac{\langle e_1, \rho\rangle \Downarrow v_1 \qquad \langle e_2, \rho[x \mapsto v_1]\rangle \Downarrow v_2}{\langle \mathsf{let}\ x = e_1\ \mathsf{in}\ e_2,\ \rho\rangle \Downarrow v_2}\;(\mathsf{Let})$$

Note $\rho[x \mapsto v_1]$ appears **only in the second premise**: the extension is visible in the body and nowhere else, which is precisely lexical scoping, and precisely the resolve-then-insert order that P3 of Lesson 1.6 identified as the difference between `let` and `letrec`. The rule *is* the scoping rule.

## Picture

![A derivation tree. At the root, the judgment that the expression open paren x plus 3 close paren times open paren 4 minus 1 close paren in state s evaluates to 15, labelled MUL. Above it two sub-derivations: x plus 3 in s evaluates to 5, labelled ADD, and 4 minus 1 in s evaluates to 3, labelled SUB. Above those, four leaves: x evaluates to 2 justified by s of x equals 2, and the numerals 3, 4 and 1 evaluating to themselves. A caption notes there is no sequence of intermediate expressions and no way to ask what the program looked like halfway through.](assets/02-02-fig1.svg)

Compare this with [Lesson 2.1](02-01-small-step-operational-semantics.md)'s Picture of the same expression. There, the meaning was a four-step *chain* and every intermediate expression was a real object you could point at. Here it is a single *tree*, and the intermediates do not exist: there is no term corresponding to "after two steps". The information was not hidden — it was never represented.

## Worked examples

**Example 1 (mechanical): derive a loop's result.** Take `q := 0; r := x; while r >= y do (r := r - y; q := q + 1)` in the state $[x \mapsto 17,\ y \mapsto 5]$.

The two assignments give $s_0 = [x{=}17, y{=}5, q{=}0, r{=}17]$ by $\mathsf{Asgn}$ and $\mathsf{Seq}$. Then the loop's derivation nests $\mathsf{While\text{-}T}$ three times:

| depth | guard | body takes $r, q$ from → to | rule |
|---|---|---|---|
| 1 | $17 \ge 5$ true | $(17, 0) \to (12, 1)$ | $\mathsf{While\text{-}T}$ |
| 2 | $12 \ge 5$ true | $(12, 1) \to (7, 2)$ | $\mathsf{While\text{-}T}$ |
| 3 | $7 \ge 5$ true | $(7, 2) \to (2, 3)$ | $\mathsf{While\text{-}T}$ |
| 4 | $2 \ge 5$ false | — | $\mathsf{While\text{-}F}$ |

The innermost $\mathsf{While\text{-}F}$ returns $[x{=}17, y{=}5, q{=}3, r{=}2]$, and each enclosing $\mathsf{While\text{-}T}$ passes it back up unchanged through its third premise. Final state: $q = 3$, $r = 2$, and indeed $17 = 3 \cdot 5 + 2$.

**The derivation tree has depth 4 for 3 iterations** — one level per iteration plus the terminating one. That is the general shape, and it is why this style cannot describe a loop that never terminates: an infinite loop would need an infinite tree, and derivations are finite by definition.

**Example 2 (why you'd care): what big-step cannot say.** Recall [Lesson 2.1](02-01-small-step-operational-semantics.md)'s pair:

$$c_1 = \mathsf{while\ true\ do\ skip} \qquad\qquad c_2 = x := \mathsf{true} + 1$$

Ask the big-step semantics about each. For $c_1$: is there a state $s'$ with $\langle c_1, s\rangle \Downarrow s'$? $\mathsf{While\text{-}F}$ needs the guard false — it is not. $\mathsf{While\text{-}T}$ needs a derivation of the same judgment as a premise, so any derivation would contain a proper sub-derivation of itself, which no finite tree can do. **No derivation exists.**

For $c_2$: $\mathsf{Asgn}$ needs $\langle \mathsf{true} + 1, s\rangle \Downarrow n$, and no rule for $+$ matches a boolean operand. **No derivation exists.**

The two programs are **indistinguishable** to this semantics. Both have exactly one thing said about them — "there is no $s'$" — and the semantics offers no vocabulary for the difference between *diverges* and *is meaningless*.

This is not repairable by adding rules; it is structural. A big-step judgment relates a start state to a *final* state, so a computation with no final state simply falls outside the relation, whatever the reason. Small-step relates a state to its *successor*, so a non-terminating computation is perfectly well described — as an infinite chain of perfectly ordinary steps — while a stuck one is described as a term with no successor at all.

**The consequence for Module 4.** The theorem "well-typed programs do not get stuck" quantifies over states reachable mid-computation. In big-step there are no mid-computation states to quantify over, so the theorem cannot be stated, let alone proved. This is the reason [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) is small-step, even though the interpreter you would actually write is big-step. Real language definitions routinely give both and prove them equivalent *on terminating programs* — which is the precise sense in which the two agree.

## Watch out

- **You might think** big-step is just small-step with the intermediate steps hidden for convenience — **but actually** the intermediates are not represented at all, and Example 2 shows the loss is real rather than cosmetic. "Hidden" would imply you could recover them; you cannot.
- **You might think** $\mathsf{While\text{-}T}$'s self-reference makes the definition circular — **but actually** it is the same inductive definition as before: the judgment holds iff a **finite** derivation tree exists. The finiteness is what excludes non-terminating loops, and it is doing real work rather than being a technical footnote.
- **You might think** the environment in $\mathsf{Let}$ is threaded like the state in $\mathsf{Seq}$ — **but actually** they are opposite. State flows *forward* through $\mathsf{Seq}$ ($s'$ from premise one into premise two) and is never restored; the environment extension in $\mathsf{Let}$ is *scoped* — it appears in one premise and the enclosing judgment still uses the unextended $\rho$. That difference is exactly mutation versus binding, and [Lesson 6.2](06-02-state-references-and-the-store.md) is about keeping both in one semantics.

## One-liner

> Big-step says what a program evaluates to and nothing about how, which makes it a specification of your interpreter and unable to tell divergence from nonsense.

## Problems

**P1 (🟢)** Using the big-step rules, give the derivation for $\langle (x + 2) * y,\ s\rangle \Downarrow ?$ with $s = [x \mapsto 3,\ y \mapsto 4]$. List every judgment in the tree, from leaves to root, and state the result.

**P2 (🟡)** For the program `while x >= 1 do x := x - 1` in state $[x \mapsto 3]$:

(a) State the depth of the big-step derivation tree, and say how many times each of $\mathsf{While\text{-}T}$ and $\mathsf{While\text{-}F}$ appears.
(b) Give the general formula for the depth in terms of the initial value of $x$, for $x \ge 0$.
(c) Now consider the same program in state $[x \mapsto -1]$ — and then in state $[x \mapsto 3]$ but with the body changed to `x := x + 1`. For each, say whether a derivation exists, and give its depth if so.

**P3 (🔴)** A designer wants big-step semantics *and* the ability to distinguish divergence from stuckness. She proposes adding a rule

$$\frac{}{\langle c, s\rangle \Downarrow \bot}\;(\mathsf{Diverge})$$

to be used whenever $c$ does not terminate, with $\bot$ a special result distinct from every state.

(a) State the fatal problem with this rule as written. (Look at its premises.)
(b) She amends it to "apply $\mathsf{Diverge}$ only when no other rule applies." State why this is not a fix, in terms of what an inductive definition is.
(c) Name the semantics from this module that *does* assign a meaning to every program including divergent ones, and say in one sentence what mathematical object it uses in place of $\bot$-as-a-rule.

<details>
<summary>Solutions</summary>

**P1** With $s = [x \mapsto 3,\ y \mapsto 4]$:

| # | judgment | rule |
|---|---|---|
| 1 | $\langle x, s\rangle \Downarrow 3$ | variable lookup, $s(x) = 3$ |
| 2 | $\langle 2, s\rangle \Downarrow 2$ | numeral |
| 3 | $\langle x + 2, s\rangle \Downarrow 5$ | $\mathsf{Add}$, from 1 and 2 |
| 4 | $\langle y, s\rangle \Downarrow 4$ | variable lookup, $s(y) = 4$ |
| 5 | $\langle (x+2) * y, s\rangle \Downarrow 20$ | $\mathsf{Mul}$, from 3 and 4 |

Result: **20**. The tree has five judgments and depth 3. Note that judgments 1–3 and 4 are *siblings* — the semantics says nothing about which is derived first, and for a pure expression language it does not matter, which is [Lesson 2.1](02-01-small-step-operational-semantics.md) P2(b)'s point.

**P2**

(a) The loop body runs while $x \ge 1$, starting from 3: iterations take $x$ from 3 to 2, 2 to 1, 1 to 0, then the guard $0 \ge 1$ is false. So **three iterations**.

$\mathsf{While\text{-}T}$ appears **3 times** and $\mathsf{While\text{-}F}$ appears **1 time**. The nesting is $\mathsf{While\text{-}T}$ three deep with $\mathsf{While\text{-}F}$ at the bottom, so the loop part of the tree has **depth 4**.

(b) For an initial value $x = k$ with $k \ge 0$, the loop runs $k$ times (each iteration decrements by 1 and the guard fails at 0), so the depth is $k + 1$.

(c) *State $[x \mapsto -1]$*: the guard $-1 \ge 1$ is false immediately, so $\mathsf{While\text{-}F}$ applies at once. **A derivation exists, of depth 1**, and the final state is $[x \mapsto -1]$ unchanged. (This matches the formula's spirit but not its letter — the formula was stated for $k \ge 0$, and here zero iterations run.)

*Body changed to `x := x + 1`, state $[x \mapsto 3]$*: the guard is true at 3, and each iteration makes $x$ larger, so the guard is true forever. $\mathsf{While\text{-}F}$ never applies, and any purported derivation via $\mathsf{While\text{-}T}$ would require a proper sub-derivation of the same judgment, ad infinitum. **No derivation exists** — and the semantics says exactly the same thing about it as it says about `x := true + 1`, which is Example 2's complaint.

**P3**

(a) The rule **has no premises**, so it is an axiom: it applies to *every* command in *every* state, unconditionally. The relation $\Downarrow$ immediately becomes total and useless — `x := 1` in any state now derives both $[x \mapsto 1]$ and $\bot$, so the semantics no longer says what any program does. A rule intended to fire "only when $c$ diverges" must have that condition as a premise, and stating it as a premise is the whole difficulty, since divergence is not a finitely checkable property.

(b) An inductive definition defines a relation as the **least** set closed under the rules, and each rule is a *monotone* condition: given that certain premises are in the set, the conclusion is too. "No other rule applies" is a statement about what is **absent** from the set being defined — it is negative, and it makes the rule non-monotone. The consequence is that no least fixed point need exist, so "the relation defined by these rules" is not well-defined.

Concretely, the amendment is also circular in the wrong direction: to know whether $\mathsf{Diverge}$ applies to $c$, you must first know that no derivation of $\langle c, s\rangle \Downarrow s'$ exists — but whether such a derivation exists is what the rule set is supposed to be defining. You cannot consult the answer while computing it.

(c) **Denotational semantics** ([Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)). Instead of a rule producing $\bot$, it makes a command's meaning a **partial function** from states to states — $\bot$ is not a result the rules derive but simply the *absence* of the input from the function's domain, and the whole loop is defined as the **least fixed point** of a monotone operator on those partial functions. Divergence becomes "undefined at that argument", which is an ordinary mathematical fact about a function rather than a rule needing a negative premise.

(Stuckness, by contrast, is still not distinguished from divergence by the denotational account either — both come out as undefined. Distinguishing them is what small-step semantics is for, which is why all three styles exist.)

</details>

## Flashback

**From Lesson 2.1 (Small-step operational semantics):** The small-step rule for `while` unfolds the loop into a conditional in a single step:

$$\langle \mathsf{while}\ b\ \mathsf{do}\ c,\ s\rangle \to \langle \mathsf{if}\ b\ \mathsf{then}\ (c;\ \mathsf{while}\ b\ \mathsf{do}\ c)\ \mathsf{else\ skip},\ s\rangle$$

Big-step needs **two** rules for the same construct instead of one.

(a) State why the small-step version gets away with one rule and the big-step version cannot.
(b) For a loop that runs exactly $k$ times, compare the *sizes* of the two descriptions: roughly how many small-steps, and what derivation-tree depth.

<details>
<summary>Solution</summary>

(a) The small-step rule **does not have to decide anything**. It rewrites the loop into a conditional and hands the decision to the rules for `if`, which are the ones that inspect the guard. Because a step relation only has to name the *next* configuration, it can defer every choice one notch at a time, so one rule suffices and the guard is never examined by it.

The big-step rule must produce the **final** state, so it has to know whether the body runs at all — and the two answers give genuinely different shapes: guard false means the state is returned unchanged with no premises about $c$, guard true means three premises including a recursive one. There is no single rule shape covering both, because they differ in their premise structure, not just in a value. In general, **deferring a decision costs steps and saves rules; making it costs rules and saves steps.**

(b) *Small-step:* each iteration costs a fixed handful of steps — one to unfold the `while`, a few to evaluate the guard, one for the `if`, then the body's steps, then one $\mathsf{Seq\text{-}Skip}$ to re-expose the loop. So the chain has length $\Theta(k)$ with a constant factor of several steps per iteration, plus a final pass to evaluate the failing guard. (For the division program of Example 1 the full chain is 41 steps for 3 iterations.)

*Big-step:* the derivation tree has depth $k + 1$ — one nested $\mathsf{While\text{-}T}$ per iteration and one $\mathsf{While\text{-}F}$ at the bottom — as P2(b) worked out.

So both grow linearly in $k$, which is the honest summary: neither style is more compact asymptotically. What differs is *what the description is*. The small-step chain is a sequence of programs, each a thing you can inspect; the big-step tree is a single proof, whose interior nodes are claims about whole sub-runs. That is the trade, and it is why the two styles are used for different jobs rather than one superseding the other.

</details>

## Connections

- **Backward:** the environment $\rho$ is the scope stack of [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md) holding values, and the $\mathsf{Let}$ rule's scoped extension is that lesson's resolve-then-insert order stated as an inference rule. The same language was given a step relation in [Lesson 2.1](02-01-small-step-operational-semantics.md).
- **Forward:** [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) answers P3 by making a command's meaning a partial function. The environment threading here becomes the closure of [Lesson 6.1](06-01-names-scope-and-closures.md), and gains a second component — the store — in [Lesson 6.2](06-02-state-references-and-the-store.md). The big-step style is what [Lesson 3.4](03-04-evaluation-strategies.md) uses to state call-by-value versus call-by-name compactly.
- **Sideways:** "the rule is the interpreter" is the same correspondence as [`mathematical-logic` 1.4](../../mathematical-logic/lessons/01-04-proof-system-completeness.md)'s proof system being a search procedure — a derivation tree read top-down is a proof, read bottom-up it is an execution, and [Lesson 4.2](04-02-type-checking-and-curry-howard.md) shows that in the typing world this coincidence has a name.

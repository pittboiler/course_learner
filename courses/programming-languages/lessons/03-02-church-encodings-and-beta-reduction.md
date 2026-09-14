# Programming Languages · Lesson 3.2: Church encodings and beta-reduction

> ⏱ ~15 min · Module 3: The lambda calculus · Builds on: [3.1 (the untyped lambda calculus)](03-01-the-untyped-lambda-calculus.md), [2.1 (small-step semantics)](02-01-small-step-operational-semantics.md) · Unlocks: [3.3 (confluence and the Y combinator)](03-03-confluence-and-the-y-combinator.md), [5.1 (algebraic data types)](05-01-algebraic-data-types-and-pattern-matching.md)

## Why this matters

The calculus has no numbers, no booleans, no `if`, and no data structures. This lesson shows it does not need them: every one of those can be *encoded* as a pure function, in a way that makes the operations you want come out as ordinary application.

That is a striking fact on its own — it is the reason the lambda calculus is Turing-complete with three constructs — but the reusable content is the technique. **Data is encoded by what you can do with it**: a boolean *is* its own `if`, a number *is* its own `for` loop, a pair *is* a function waiting to be told which half you want. That idea shows up again as Church encoding in [Lesson 5.1](05-01-algebraic-data-types-and-pattern-matching.md), as the continuation-passing transform in [Lesson 6.3](06-03-continuations-and-control.md), and as the representable-functor viewpoint that [`category-theory` 2.2](../../category-theory/lessons/02-02-representable-functors.md) calls "an object is known by its maps".

## The idea

First, the one computation rule.

$$(\lambda x.\,t)\ s \;\longrightarrow_\beta\; [x := s]\,t$$

A function meets an argument; substitute the argument for the parameter in the body. That is $\beta$-reduction, and it is the *entire* dynamics of the calculus. A term of the form $(\lambda x.\,t)\,s$ is a **redex** (reducible expression); a term with no redex anywhere is in **normal form**.

Now the encodings. The design principle is: **make the value do its own case analysis.**

A boolean is used in exactly one way — to choose between two things. So define `true` as the function that takes two arguments and returns the first, and `false` as the one that returns the second. Then `if` is not a construct at all; it is just application, because the boolean *is* the chooser.

A natural number is used to repeat something $n$ times. So define $\overline{n}$ as the function that takes $f$ and $x$ and applies $f$ to $x$ exactly $n$ times. Then "add one" means "do what $n$ does, then one more $f$", which is a one-line term.

## The formal version

**Booleans.**

$$\mathsf{tru} = \lambda t.\lambda f.\,t \qquad \mathsf{fls} = \lambda t.\lambda f.\,f \qquad \mathsf{test} = \lambda b.\lambda m.\lambda n.\ b\ m\ n$$

Check: $\mathsf{test}\ \mathsf{tru}\ m\ n \to^*_\beta \mathsf{tru}\ m\ n \to^*_\beta m$. In words: `test` does nothing but hand its two branches to the boolean, which picks. $\mathsf{test}$ is so nearly redundant that one usually writes $b\,m\,n$ directly.

$$\mathsf{and} = \lambda p.\lambda q.\ p\ q\ p \qquad \mathsf{or} = \lambda p.\lambda q.\ p\ p\ q \qquad \mathsf{not} = \lambda p.\lambda a.\lambda b.\ p\ b\ a$$

$\mathsf{and}$ reads as "if $p$ then $q$ else $p$" — and since $p$ is $\mathsf{fls}$ in the else-branch, that is exactly conjunction. $\mathsf{not}$ swaps the two branches.

**Church numerals.**

$$\overline{n} \;=\; \lambda f.\lambda x.\ \underbrace{f\,(f\,(\cdots(f}_{n}\ x)\cdots))$$

so $\overline{0} = \lambda f.\lambda x.\,x$, $\overline{1} = \lambda f.\lambda x.\,f\,x$, $\overline{2} = \lambda f.\lambda x.\,f\,(f\,x)$. In words: **$\overline{n}$ is an iterator** — hand it a function and a starting point and it applies the function $n$ times.

$$\mathsf{succ} = \lambda n.\lambda f.\lambda x.\ f\ (n\,f\,x) \qquad \mathsf{plus} = \lambda m.\lambda n.\lambda f.\lambda x.\ m\,f\,(n\,f\,x) \qquad \mathsf{mult} = \lambda m.\lambda n.\lambda f.\ m\,(n\,f)$$

Read each as English. $\mathsf{succ}$: run $n$, then apply $f$ once more. $\mathsf{plus}$: run $n$ from $x$, then run $m$ from there — $m + n$ applications in total. $\mathsf{mult}$: $m$ is an iterator, so iterate "apply $f$ $n$ times" $m$ times — beautifully, $\mathsf{mult}$ never mentions $x$ at all.

$$\mathsf{iszro} = \lambda n.\ n\ (\lambda x.\ \mathsf{fls})\ \mathsf{tru}$$

Hand $\overline{n}$ the constant-$\mathsf{fls}$ function and the start value $\mathsf{tru}$: if $n = 0$ nothing is applied and you get $\mathsf{tru}$, otherwise you get $\mathsf{fls}$.

**Pairs.**

$$\mathsf{pair} = \lambda a.\lambda b.\lambda s.\ s\,a\,b \qquad \mathsf{fst} = \lambda p.\ p\ (\lambda a.\lambda b.\,a) \qquad \mathsf{snd} = \lambda p.\ p\ (\lambda a.\lambda b.\,b)$$

A pair is a function awaiting a **selector**. $\mathsf{fst}$ hands it the selector that takes the first, and $\mathsf{fst}$'s selector is literally $\mathsf{tru}$ — booleans and projections are the same term, which is the encoding paying a dividend.

**The predecessor problem.** Every operation above is a few characters. Predecessor is not, and the reason is structural: $\overline{n}$ lets you *build up* $n$ applications but gives no way to undo one. The standard solution carries a pair $(n-1, n)$ through the iteration and projects:

$$\mathsf{pred} = \lambda n.\lambda f.\lambda x.\ n\ (\lambda g.\lambda h.\ h\,(g\,f))\ (\lambda u.\,x)\ (\lambda u.\,u)$$

It works — $\mathsf{pred}\ \overline{3} \to^*_\beta \overline{2}$ in 11 steps, and $\mathsf{pred}\ \overline{0} \to^*_\beta \overline{0}$ — and the asymmetry is the honest lesson: **an encoding makes some operations trivial and others awkward**, and which is which is a property of the encoding, not of the concept. The same asymmetry is why a singly linked list has cheap `head` and expensive `last` ([`programming-foundations` 2.3](../../programming-foundations/lessons/02-03-linked-lists.md)).

## Picture

![Four rows showing Church numerals. Zero is lambda f dot lambda x dot x with no circles beside it. One is lambda f dot lambda x dot f x with one circle labelled f. Two is lambda f dot lambda x dot f open paren f x close paren with two circles. Three is lambda f dot lambda x dot f open paren f open paren f x close paren close paren with three circles. Below, a line gives SUCC as lambda n dot lambda f dot lambda x dot f open paren n f x close paren, annotated run n then apply f once more.](assets/03-02-fig1.svg)

The circles are the point: a Church numeral is not a symbol standing for a quantity, it **is** the quantity, spelled as a number of applications. Nothing needs to be decoded — to use $\overline{3}$ as a loop count you simply apply it, and the three applications appear.

## Worked examples

**Example 1 (mechanical): $\mathsf{succ}\,(\mathsf{succ}\ \overline{0})$ in full.** Reduce in normal order (leftmost-outermost), every step.

| # | term |
|---|---|
| 0 | $(\lambda n.\lambda f.\lambda x.\,f\,(n\,f\,x))\ ((\lambda n.\lambda f.\lambda x.\,f\,(n\,f\,x))\ (\lambda f.\lambda x.\,x))$ |
| 1 | $\lambda f.\lambda x.\ f\ ((\lambda n.\lambda f.\lambda x.\,f\,(n\,f\,x))\ (\lambda f.\lambda x.\,x)\ f\ x)$ |
| 2 | $\lambda f.\lambda x.\ f\ ((\lambda f.\lambda x.\,f\,((\lambda f.\lambda x.\,x)\,f\,x))\ f\ x)$ |
| 3 | $\lambda f.\lambda x.\ f\ ((\lambda x.\,f\,((\lambda f.\lambda x.\,x)\,f\,x))\ x)$ |
| 4 | $\lambda f.\lambda x.\ f\ (f\ ((\lambda f.\lambda x.\,x)\,f\,x))$ |
| 5 | $\lambda f.\lambda x.\ f\ (f\ ((\lambda x.\,x)\,x))$ |
| 6 | $\lambda f.\lambda x.\ f\ (f\ x)$ |

**Six $\beta$-steps**, and the result is $\overline{2}$ on the nose. Step 1 is the interesting one: the outer $\mathsf{succ}$ fires *before* its argument has been evaluated — normal order always reduces the leftmost-outermost redex — and the unevaluated inner $\mathsf{succ}\ \overline{0}$ is simply carried along inside the body. It gets reduced later, at steps 2–5, in the position it landed in.

**Example 2 (why you'd care): why $\mathsf{mult}$ is shorter than $\mathsf{plus}$.** Compare

$$\mathsf{plus} = \lambda m.\lambda n.\lambda f.\lambda x.\ m\,f\,(n\,f\,x) \qquad\qquad \mathsf{mult} = \lambda m.\lambda n.\lambda f.\ m\,(n\,f)$$

$\mathsf{plus}$ has to mention $x$; $\mathsf{mult}$ does not. Why?

The answer is that $\overline{n}$ is the function "iterate $f$, $n$ times", i.e. $\overline{n}\,f = f^n$. So multiplication is *function composition of iterators*:

$$\overline{m}\ (\overline{n}\,f) \;=\; \overline{m}\ (f^n) \;=\; (f^n)^m \;=\; f^{nm}$$

which is already the numeral $\overline{mn}$ applied to $f$ — no starting value needed, because composing functions never requires a point to evaluate at. Addition is not composition; it is "do one, then the other, *from the same starting point*", and a starting point has to be named.

Two checks against the machine: $\mathsf{plus}\ \overline{2}\ \overline{3} \to^*_\beta \overline{5}$ in 6 steps, and $\mathsf{mult}\ \overline{2}\ \overline{3} \to^*_\beta \overline{6}$ in 7 steps. (For $\mathsf{mult}\ \overline{3}\ \overline{4} = \overline{12}$ it takes 9.)

**Why this is worth noticing beyond the puzzle:** $\overline{m} \circ \overline{n}$ being $\overline{mn}$ is the statement that Church numerals form a *monoid under composition* — the very identification [`category-theory` 4.2](../../category-theory/lessons/04-02-algebras-monoidal-categories.md) makes when it shows a list-monad algebra is a monoid. The encoding did not merely happen to work; it works because iteration and composition are the same operation, and the short definition is the one that says so.

## Watch out

- **You might think** $\mathsf{tru}$ and $\mathsf{fls}$ are arbitrary conventions that could be swapped freely — **but actually** the whole encoding is coupled: $\mathsf{and}$, $\mathsf{or}$, $\mathsf{iszro}$ and $\mathsf{fst}$ all assume "first argument means true". Swap the booleans and every one of them breaks. Encodings are packages, not individual choices.
- **You might think** a normal form is what you get when reduction "finishes" — **but actually** many terms have no normal form at all (reduction never stops), and some terms have one that a particular reduction order will never find. [Lesson 3.3](03-03-confluence-and-the-y-combinator.md) and [Lesson 3.4](03-04-evaluation-strategies.md) are about exactly that gap.
- **You might think** $\beta$-reduction is a definition of *evaluation* — **but actually** it is a rewriting relation with no order imposed: a term may contain several redexes and $\to_\beta$ permits reducing any of them. Picking one is a *strategy*, added on top, and it is the subject of [Lesson 3.4](03-04-evaluation-strategies.md).

## One-liner

> Data encoded by what you can do with it — a boolean is its own `if`, a numeral is its own `for` loop, a pair is a function awaiting a selector — and one rewrite rule, substitute the argument for the parameter, runs all of it.

## Problems

**P1 (🟢)** Reduce each to normal form, showing every $\beta$-step, and state the number of steps.

(a) $(\lambda x.\,x\,x)\ (\lambda y.\,y)$
(b) $\mathsf{tru}\ a\ b$, where $\mathsf{tru} = \lambda t.\lambda f.\,t$
(c) $\mathsf{fst}\ (\mathsf{pair}\ a\ b)$

**P2 (🟡)** Verify each by reduction, showing the key steps.

(a) $\mathsf{not}\ \mathsf{tru} \to^*_\beta \mathsf{fls}$, where $\mathsf{not} = \lambda p.\lambda a.\lambda b.\ p\,b\,a$.
(b) $\mathsf{and}\ \mathsf{fls}\ \mathsf{tru} \to^*_\beta \mathsf{fls}$, where $\mathsf{and} = \lambda p.\lambda q.\ p\,q\,p$.
(c) $\mathsf{iszro}\ \overline{1} \to^*_\beta \mathsf{fls}$, where $\mathsf{iszro} = \lambda n.\ n\,(\lambda x.\,\mathsf{fls})\,\mathsf{tru}$.

**P3 (🔴)** Define exponentiation on Church numerals.

(a) Using $\overline{n}\,f = f^n$ and the $\mathsf{mult}$ argument from Example 2, guess $\mathsf{exp}$ with $\mathsf{exp}\ \overline{m}\ \overline{n} = \overline{m^n}$. The definition is two characters longer than $\mathsf{mult}$'s body.
(b) Verify it on $\mathsf{exp}\ \overline{2}\ \overline{3}$ by reasoning about iterators — you do not need to write out every $\beta$-step, but you must say what each application computes.
(c) Your definition takes its arguments in the order (base, exponent). State what $\mathsf{exp}\ \overline{m}\ \overline{0}$ reduces to, and check it against the mathematical convention.
(d) Explain in two sentences why $\mathsf{exp}$ is *shorter* than $\mathsf{plus}$ even though exponentiation is the more complex operation, connecting it to Example 2's point.

<details>
<summary>Solutions</summary>

**P1**

(a) $(\lambda x.\,x\,x)\ (\lambda y.\,y)$

- step 1: substitute $\lambda y.\,y$ for $x$ in $x\,x$, giving $(\lambda y.\,y)\ (\lambda y.\,y)$
- step 2: apply the identity to the identity, giving $\lambda y.\,y$

Normal form $\lambda y.\,y$, in **2 steps**. (Self-application is harmless here; [Lesson 3.3](03-03-confluence-and-the-y-combinator.md) shows the version that is not.)

(b) $\mathsf{tru}\ a\ b = (\lambda t.\lambda f.\,t)\ a\ b$

- step 1: $(\lambda f.\,a)\ b$
- step 2: $a$

Normal form $a$, in **2 steps** — the boolean selected its first argument, which is the whole design.

(c) $\mathsf{fst}\ (\mathsf{pair}\ a\ b) = (\lambda p.\ p\,(\lambda a.\lambda b.\,a))\ ((\lambda a.\lambda b.\lambda s.\ s\,a\,b)\ a\ b)$

Reducing leftmost-outermost:

- step 1: $((\lambda a.\lambda b.\lambda s.\,s\,a\,b)\ a\ b)\ (\lambda a.\lambda b.\,a)$
- step 2: $((\lambda b.\lambda s.\,s\,a\,b)\ b)\ (\lambda a.\lambda b.\,a)$
- step 3: $(\lambda s.\,s\,a\,b)\ (\lambda a.\lambda b.\,a)$
- step 4: $(\lambda a.\lambda b.\,a)\ a\ b$
- step 5: $(\lambda b.\,a)\ b$
- step 6: $a$

Normal form $a$, in **6 steps**. Note step 4: the pair handed itself to the selector, and the selector is $\mathsf{tru}$ — steps 4–6 are exactly part (b).

**P2**

(a) $\mathsf{not}\ \mathsf{tru} = (\lambda p.\lambda a.\lambda b.\ p\,b\,a)\ \mathsf{tru} \to_\beta \lambda a.\lambda b.\ \mathsf{tru}\,b\,a$.

Now $\mathsf{tru}\,b\,a \to^*_\beta b$ by part (b) of P1, so the term reduces to $\lambda a.\lambda b.\,b$, which is $\mathsf{fls}$ exactly. **The swap is the whole implementation**: $\mathsf{not}$ hands the boolean its branches in the opposite order.

(b) $\mathsf{and}\ \mathsf{fls}\ \mathsf{tru} = (\lambda p.\lambda q.\ p\,q\,p)\ \mathsf{fls}\ \mathsf{tru}$

- $\to_\beta (\lambda q.\ \mathsf{fls}\,q\,\mathsf{fls})\ \mathsf{tru}$
- $\to_\beta \mathsf{fls}\ \mathsf{tru}\ \mathsf{fls}$

and $\mathsf{fls} = \lambda t.\lambda f.\,f$ selects its **second** argument, so this reduces to $\mathsf{fls}$. Reading the definition as English: "if $p$ then $q$ else $p$", and with $p$ false the else-branch returns $p$ itself, which is false.

(c) $\mathsf{iszro}\ \overline{1} = (\lambda n.\ n\,(\lambda x.\,\mathsf{fls})\,\mathsf{tru})\ \overline{1} \to_\beta \overline{1}\ (\lambda x.\,\mathsf{fls})\ \mathsf{tru}$.

Now $\overline{1} = \lambda f.\lambda x.\,f\,x$, so $\overline{1}\,(\lambda x.\,\mathsf{fls})\,\mathsf{tru} \to^*_\beta (\lambda x.\,\mathsf{fls})\ \mathsf{tru} \to_\beta \mathsf{fls}$.

The mechanism: $\overline{n}$ applies the constant-$\mathsf{fls}$ function $n$ times to $\mathsf{tru}$. One application is enough to destroy the $\mathsf{tru}$, and zero applications leave it. So the test is "did anything get applied at all", which is exactly "is $n$ nonzero".

**P3**

(a) $$\mathsf{exp} = \lambda m.\lambda n.\ n\ m$$

That is the whole definition — the body is just $n\,m$.

(b) Reason with iterators. $\overline{n}$ means "apply your first argument $n$ times to your second". Here the first argument is $\overline{m}$ itself, so $\mathsf{exp}\ \overline{m}\ \overline{n} \to_\beta^* \overline{n}\ \overline{m}$ means: **compose the function $\overline{m}$ with itself $n$ times.**

Take $\mathsf{exp}\ \overline{2}\ \overline{3} \to^*_\beta \overline{3}\ \overline{2}$, and apply the result to $f$:

- innermost: $\overline{2}\,f = f^2$
- next: $\overline{2}\,(f^2) = (f^2)^2 = f^4$
- next: $\overline{2}\,(f^4) = (f^4)^2 = f^8$

So $\overline{3}\,\overline{2}\,f = f^8$, which is $\overline{8} = \overline{2^3}$. Each application of $\overline{2}$ squares the exponent, and doing that three times starting from $f^1$ gives $f^{2^3}$.

(c) $\mathsf{exp}\ \overline{m}\ \overline{0} \to^*_\beta \overline{0}\ \overline{m}$, and $\overline{0} = \lambda f.\lambda x.\,x$ ignores its first argument entirely, so the normal form is

$$\lambda x.\,x$$

**This is not literally $\overline{1}$.** The numeral is $\overline{1} = \lambda f.\lambda x.\ f\,x$, and $\lambda x.\,x$ is not $\alpha$-equivalent to it — they are different terms in normal form, so no amount of $\beta$-reduction will identify them. What is true is that they are **$\eta$-equivalent**: the $\eta$-rule $\lambda x.\,t\,x \to_\eta t$ (valid when $x \notin FV(t)$) turns $\overline{1}$'s inner $\lambda x.\,f\,x$ into $f$, giving $\lambda f.\,f$, which *is* $\lambda x.\,x$ up to renaming.

So the honest statement is: $\mathsf{exp}\ \overline{m}\ \overline{0}$ reduces to a term that is **extensionally** the numeral one — apply it to any $g$ and $y$ and it gives $g\,y$, exactly as $\overline{1}$ does — but is not the numeral on the nose. That is the general situation with these encodings, and it is why "$=$" between encoded values should be read as "behaves the same when applied", not as syntactic identity. ($\eta$ is precisely the rule that makes the two notions agree; a calculus with $\beta$ alone distinguishes terms that no context can tell apart.)

With that caveat the arithmetic is right: $m^0 = 1$ for every $m$, including $0^0 = 1$ — the convention combinatorics uses — and it falls out with no special case, because "compose $\overline{0}$ with itself zero times" is the identity whatever $\overline{0}$ is.

(d) Because each level of this hierarchy is the *iteration* of the level below, and iteration is exactly what a Church numeral already is — so $\mathsf{exp}$ needs only to hand one numeral to another and let the numeral do the iterating, while $\mathsf{plus}$ has to mention the starting point $x$ because addition is not iteration of anything.

Put the three side by side and the pattern is visible: $\mathsf{plus}$ names both $f$ and $x$, $\mathsf{mult}$ names only $f$ (composition needs no point), and $\mathsf{exp}$ names neither (iterating a numeral needs no function either). **Definition length tracks how much of the operation the encoding already performs for you**, not how hard the operation is — which is the sharpest possible statement of Example 2's moral, and a caution against reading an encoding's convenience as a fact about the concept.

</details>

## Flashback

**From Lesson 2.1 (Small-step operational semantics and rule induction):** The step relation was defined by inference rules, and its determinism was a *theorem* — provable because the premises of $\mathsf{Add\text{-}L}$ and $\mathsf{Add\text{-}R}$ were mutually exclusive by construction.

$\beta$-reduction is a single rule, $(\lambda x.\,t)\,s \to_\beta [x := s]\,t$, closed under all three term formers.

(a) Exhibit a term with two distinct $\beta$-redexes and give both results of one step.
(b) State whether $\to_\beta$ is deterministic, and say what property replaces determinism here.

<details>
<summary>Solution</summary>

(a) Take

$$t \;=\; (\lambda x.\,x)\ \big((\lambda y.\,y)\ z\big)$$

Both the outer application and the inner one are redexes.

- **Outer first** (leftmost-outermost): substitute the whole argument for $x$ in $x$, giving $(\lambda y.\,y)\,z$.
- **Inner first** (leftmost-innermost): reduce $(\lambda y.\,y)\,z$ to $z$, giving $(\lambda x.\,x)\,z$.

Two different terms after one step, so the relation genuinely branches. (Both reach $z$ after one more step, which is the point of (b).)

(b) $\to_\beta$ is **not deterministic**, and deliberately so — the rule imposes no order, and a term may have many redexes. Unlike [Lesson 2.1](02-01-small-step-operational-semantics.md)'s relation, there was never an attempt to make the premises mutually exclusive.

The property that replaces determinism is **confluence** (Church–Rosser): if $t \to^*_\beta u$ and $t \to^*_\beta v$, then there is some $w$ with $u \to^*_\beta w$ and $v \to^*_\beta w$. Different choices may take different routes, but the routes can always be made to reconverge, so no choice is ever *wrong* in the sense of reaching an incompatible answer.

This is the same distinction [Lesson 2.1](02-01-small-step-operational-semantics.md)'s Flashback drew between a parser and a semantics: a parser must be deterministic because it is an algorithm, while a rewriting system need only be confluent because it is a specification. [Lesson 3.3](03-03-confluence-and-the-y-combinator.md) proves confluence and draws out its one crucial limitation — it guarantees that reduction orders *agreeing to terminate* agree on the answer, and says nothing about whether a given order terminates at all.

</details>

## Connections

- **Backward:** $\beta$-reduction is built on the capture-avoiding substitution of [Lesson 3.1](03-01-the-untyped-lambda-calculus.md), and is a step relation in the style of [Lesson 2.1](02-01-small-step-operational-semantics.md) with one rule instead of a dozen.
- **Forward:** [Lesson 3.3](03-03-confluence-and-the-y-combinator.md) proves confluence and adds recursion; [Lesson 3.4](03-04-evaluation-strategies.md) picks a reduction order and shows the choice decides termination. The encodings return as *real* language features in [Lesson 5.1](05-01-algebraic-data-types-and-pattern-matching.md), where a sum type is the typed version of the boolean encoding, and the selector-taking pair is the continuation of [Lesson 6.3](06-03-continuations-and-control.md).
- **Sideways:** "a pair is a function awaiting a selector" is [`category-theory` 2.2](../../category-theory/lessons/02-02-representable-functors.md)'s representability — a datatype characterized by the operations that consume it — and $\overline{m}\circ\overline{n} = \overline{mn}$ is the monoid structure [`category-theory` 4.2](../../category-theory/lessons/04-02-algebras-monoidal-categories.md) recovers from a monad's algebras.

# Programming Languages · Lesson 3.3: Confluence, normal forms and the Y combinator

> ⏱ ~15 min · Module 3: The lambda calculus · Builds on: [3.2 (Church encodings and beta-reduction)](03-02-church-encodings-and-beta-reduction.md), [2.3 (least fixed points)](02-03-denotational-semantics-and-fixed-points.md) · Unlocks: [3.4 (evaluation strategies)](03-04-evaluation-strategies.md), [4.1 (the simply-typed lambda calculus)](04-01-the-simply-typed-lambda-calculus.md)

## Why this matters

Two loose ends from [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md), and they turn out to be the same question.

**Loose end one:** $\beta$-reduction is non-deterministic. A term with several redexes can be reduced several ways. Does the answer depend on which you pick? If it did, the calculus would not define a function and "the value of a term" would be meaningless. The theorem that saves it is confluence, and its precise statement matters as much as its truth — it says *less* than people assume, and the gap is exactly what [Lesson 3.4](03-04-evaluation-strategies.md) is about.

**Loose end two:** the calculus has no recursion. There is no way to write a function that refers to itself, because $\lambda$ binds a *parameter*, never a name for the function being defined — this is [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md)'s `let`-versus-`letrec` distinction, and the calculus only has `let`. Yet it is Turing-complete, so recursion must be derivable. It is, by a term that looks like a trick and is in fact [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s least-fixed-point idea carried out syntactically.

## The idea

**Confluence.** If a term $t$ reduces two different ways to $u$ and $v$, then $u$ and $v$ can always be brought back together: there is a $w$ that both reach. Reduction may fork, but the forks reconverge. The immediate consequence is the one you want: **a term has at most one normal form.**

Be careful with "at most". Confluence says nothing about whether a normal form exists, and nothing about whether a given reduction *order* will find one that does exist. Both gaps are real, and both bite.

**Recursion as a fixed point.** You want to write factorial, which needs to call itself. You cannot name it. So write it with the recursive call as a *parameter*:

$$G \;=\; \lambda f.\ \lambda n.\ \mathsf{if}\ (\mathsf{iszro}\ n)\ \overline{1}\ (\mathsf{mult}\ n\ (f\ (\mathsf{pred}\ n)))$$

$G$ is not factorial. It is "the function that, given factorial, returns factorial" — a one-step-better approximation. What you want is a term $\mathrm{fact}$ satisfying

$$\mathrm{fact} \;=\; G\ \mathrm{fact}$$

that is, a **fixed point of $G$**. This is exactly [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s loop equation $W = F(W)$, and the resemblance is not an analogy: $F$ there was also "run the body once more, then behave like your argument".

There the fixed point was constructed *semantically*, as the limit of a chain. Here it is constructed *syntactically*, by a term that manufactures fixed points for anything.

## The formal version

**Definition (redex, normal form).** A **redex** is a subterm of the form $(\lambda x.\,t)\,s$. A term is in **normal form** if it contains no redex. Write $\to^*_\beta$ for the reflexive-transitive closure of $\to_\beta$.

**Theorem (Church–Rosser / confluence).** *(card: [redex normal form confluence](../reference.md#redex-normal-form-confluence))* If $t \to^*_\beta u$ and $t \to^*_\beta v$, then there exists $w$ with $u \to^*_\beta w$ and $v \to^*_\beta w$.

**Corollary (uniqueness of normal forms).** If $t \to^*_\beta u$ and $t \to^*_\beta v$ with $u$ and $v$ both in normal form, then $u \equiv_\alpha v$.

*Proof of the corollary.* By confluence there is a $w$ reachable from both. A normal-form term has no redex, so the only reduction sequence out of it is the empty one — hence $u \to^*_\beta w$ forces $w \equiv_\alpha u$, and likewise $w \equiv_\alpha v$. $\blacksquare$

**What confluence does *not* say.** It does not say a normal form exists — $\Omega = (\lambda x.\,x\,x)(\lambda x.\,x\,x)$ reduces only to itself, forever, and has none. And, sharper, it does not say that every reduction order finds the normal form when one exists. The term

$$(\lambda x.\lambda y.\,y)\ \Omega$$

has normal form $\lambda y.\,y$ — reduce the outer redex, discarding $\Omega$ unevaluated. But an order that insists on reducing the argument first never reaches it. **Confluence guarantees agreement among the orders that terminate; it says nothing about which orders terminate.** That gap is [Lesson 3.4](03-04-evaluation-strategies.md) in one sentence.

**Theorem (standardization, stated).** If a term has a normal form, **normal-order** reduction — always reduce the leftmost-outermost redex — finds it. So the existence question has an answer: one particular strategy is complete, and it is the one that avoids evaluating arguments it might discard.

**The fixed-point combinator.**

$$Y \;=\; \lambda f.\ (\lambda x.\ f\,(x\,x))\ (\lambda x.\ f\,(x\,x))$$

**Claim.** $Y\,g \to^*_\beta g\,(Y\,g)$ for every $g$.

*Derivation.* Write $A = \lambda x.\ g\,(x\,x)$.

| # | term |
|---|---|
| 0 | $Y\,g = (\lambda f.\,(\lambda x.\,f(x x))(\lambda x.\,f(x x)))\ g$ |
| 1 | $(\lambda x.\ g\,(x\,x))\ (\lambda x.\ g\,(x\,x)) \;=\; A\,A$ |
| 2 | $g\,(A\,A)$ |

and $A\,A$ is the term from line 1, which is what $Y\,g$ reduced to — so line 2 is $g$ applied to (something $Y\,g$ reduces to). Two $\beta$-steps, and $Y\,g$ has unfolded one level. Doing it again gives $g\,(g\,(A\,A))$, and so on: **$Y$ produces recursion by making a term reproduce a copy of itself inside $g$.**

The self-application $x\,x$ is where the power comes from, and it is exactly the shape of $\Omega$. Recursion and divergence are built from the same part — which is why the type system of [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md), in rejecting $x\,x$, loses both at once.

**A caution for call-by-value.** Under call-by-value $Y\,g$ diverges: the argument $A\,A$ must be reduced before $g$ is applied, and $A\,A \to_\beta g\,(A\,A)$ forever. The fix is to delay the self-application behind an extra $\lambda$:

$$Z \;=\; \lambda f.\ (\lambda x.\ f\,(\lambda v.\ x\,x\,v))\ (\lambda x.\ f\,(\lambda v.\ x\,x\,v))$$

$\lambda v.\,x\,x\,v$ is $\eta$-equivalent to $x\,x$ but is a *value*, so call-by-value stops there instead of unfolding. This is the combinator a strict language actually uses, and the difference between $Y$ and $Z$ is entirely about evaluation order — [Lesson 3.4](03-04-evaluation-strategies.md)'s subject, previewed.

## Picture

![A diamond of four nodes. At the top, t. Two dashed arrows labelled star lead down-left to u and down-right to v. From u and v, two further dashed arrows labelled star lead down to w at the bottom. A caption states the consequence that a term has at most one normal form, and in a second colour that it does not say every reduction order finds it.](assets/03-03-fig1.svg)

The stars mean "zero or more steps", and that generality matters: one step out of $t$ may need many steps to rejoin. The diamond closing is the whole theorem, and the caption is the whole caveat. **Read the bottom line every time you are tempted to conclude "so the order does not matter".** It does not matter for the *answer*; it matters enormously for whether you get one.

## Worked examples

**Example 1 (mechanical): confluence on a branching term.** Take

$$t \;=\; (\lambda x.\ x\,x)\ \big((\lambda y.\,y)\ z\big)$$

Two redexes. Reduce each way and watch them rejoin.

*Route A — outer redex first.* Substitute the argument for $x$ in $x\,x$:

$$t \to_\beta \big((\lambda y.\,y)\,z\big)\ \big((\lambda y.\,y)\,z\big) \to_\beta z\ \big((\lambda y.\,y)\,z\big) \to_\beta z\,z$$

*Route B — inner redex first.*

$$t \to_\beta (\lambda x.\ x\,x)\ z \to_\beta z\,z$$

Both reach $z\,z$, in 3 steps and 2 steps respectively. That is the diamond, with $w = z\,z$.

**Route A duplicated the work.** Substituting an unreduced argument into a body that mentions $x$ twice made two copies of the same redex, each of which then had to be reduced. This is not a curiosity — it is the *cost model* difference between call-by-name and call-by-value, and the reason lazy languages add **sharing** (reduce the copy once, point both uses at the result). [Lesson 3.4](03-04-evaluation-strategies.md) makes it precise; [Lesson 6.4](06-04-memory-layout-and-reference-counting.md) shows what sharing costs at run time.

**Example 2 (why you'd care): $Y$ computing a factorial.** Let

$$G = \lambda f.\lambda n.\ (\mathsf{iszro}\ n)\ \overline{1}\ (\mathsf{mult}\ n\ (f\ (\mathsf{pred}\ n)))$$

and let $\mathrm{fact} = Y\,G$. Evaluate $\mathrm{fact}\ \overline{2}$ by unfolding, in normal order.

$$\mathrm{fact}\ \overline{2} \;\to^*_\beta\; G\ (Y\,G)\ \overline{2} \;\to^*_\beta\; (\mathsf{iszro}\ \overline{2})\ \overline{1}\ (\mathsf{mult}\ \overline{2}\ ((Y\,G)\ (\mathsf{pred}\ \overline{2})))$$

$\mathsf{iszro}\ \overline{2} \to^*_\beta \mathsf{fls}$, which selects the second branch, giving $\mathsf{mult}\ \overline{2}\ ((Y\,G)\ \overline{1})$. Unfold once more:

$$\to^*_\beta \mathsf{mult}\ \overline{2}\ \big(\mathsf{mult}\ \overline{1}\ ((Y\,G)\ \overline{0})\big) \to^*_\beta \mathsf{mult}\ \overline{2}\ (\mathsf{mult}\ \overline{1}\ \overline{1}) \to^*_\beta \overline{2}$$

because at $\overline{0}$ the $\mathsf{iszro}$ test selects the *first* branch and the unfolding stops.

**The termination is not automatic — it is a property of $G$ and the reduction order together.** $Y\,G$ can always unfold another level; what stops it is that the unfolded copy sits inside the *unselected* branch of the conditional, and normal order never reduces there. Under call-by-value both branches' arguments would be evaluated before the choice, the recursive call would unfold unconditionally, and $\mathrm{fact}$ would diverge on every input. This is precisely why:

- $\mathsf{if}$ must be a special form (short-circuiting), not a strict function — [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s desugaring of `&&` made the same point;
- a strict language needs $Z$ rather than $Y$;
- Haskell can define `fix f = f (fix f)` in the language and get away with it, while OCaml needs `let rec` as a primitive.

## Watch out

- **You might think** confluence means the reduction order is irrelevant — **but actually** it means the *answer* is order-independent **among orders that reach one**. $(\lambda x.\lambda y.\,y)\,\Omega$ is the standing counterexample: normal form $\lambda y.\,y$, and a perfectly reasonable order that never finds it.
- **You might think** $Y$ is a trick with no meaning — **but actually** it is the syntactic form of the least fixed point from [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md). There, $\mathrm{lfp}\,F = \bigsqcup_n F^n(\bot)$ was built by iterating from ignorance; here, $Y\,g \to^*_\beta g\,(Y\,g) \to^*_\beta g\,(g\,(Y\,g))$ builds the same tower of approximations, one $\beta$-step at a time, on demand.
- **You might think** $Y$ works in every language once you write it down — **but actually** it diverges under call-by-value, and the $Z$ variant exists for exactly that reason. Whether a fixed-point combinator terminates is a fact about the *evaluation strategy*, not about the combinator.

## One-liner

> Reduction may fork but always reconverges, so a term has at most one normal form — and recursion is not a missing feature but a fixed point, built by a term that hands a copy of itself to the function that needs it.

## Problems

**P1 (🟢)** For each term, state whether it has a normal form; if so give it, and if not say what it reduces to.

(a) $(\lambda x.\ x\,x)\ (\lambda y.\ y)$
(b) $\Omega = (\lambda x.\ x\,x)\ (\lambda x.\ x\,x)$
(c) $(\lambda x.\ \lambda y.\ x)\ \overline{0}\ \Omega$, reduced in normal order
(d) $(\lambda x.\ x\,x)\ (\lambda x.\ x\,x\,x)$

**P2 (🟡)** The term $t = (\lambda x.\ \mathsf{plus}\ x\ x)\ (\mathsf{plus}\ \overline{1}\ \overline{2})$ has two redexes.

(a) Reduce it outer-redex-first for two steps and say how many copies of `plus 1 2` the term then contains.
(b) Reduce it inner-redex-first for one step and say how many copies it contains.
(c) Both reach $\overline{6}$. State which route does less total work and give the general rule this illustrates.
(d) Name the implementation technique that lets a lazy language take route (a)'s termination behaviour with route (b)'s cost.

**P3 (🔴)** Let $D = \lambda x.\ x\,x$ so that $\Omega = D\,D$.

(a) Show $\Omega \to_\beta \Omega$ in one step, and conclude it has no normal form.
(b) The $Y$ combinator is $\lambda f.\ (\lambda x.\ f\,(x\,x))\ (\lambda x.\ f\,(x\,x))$. State precisely how its body differs from $\Omega$, and what that difference buys.
(c) Now consider $Y\,g$ for $g = \lambda z.\ \overline{5}$, a function that ignores its argument. Reduce $Y\,g$ in normal order and give the normal form. Then reduce it in call-by-value and say what happens.
(d) Part (c) is a term whose normal form exists and whose call-by-value evaluation diverges. Say which theorem in this lesson guarantees normal order finds it, and state in one sentence what this implies about a strict language's `fix`.

<details>
<summary>Solutions</summary>

**P1**

(a) Reduces to $(\lambda y.\,y)\,(\lambda y.\,y) \to_\beta \lambda y.\,y$. **Normal form $\lambda y.\,y$**, in 2 steps. Self-application is harmless when the thing applied to itself is the identity.

(b) $\Omega \to_\beta \Omega$ and nothing else — substituting $D$ for $x$ in $x\,x$ gives $D\,D = \Omega$ again. **No normal form**; it reduces only to itself, forever.

(c) $(\lambda x.\lambda y.\,x)\ \overline{0}\ \Omega$. Normal order reduces the leftmost-outermost redex:

- step 1: $(\lambda y.\ \overline{0})\ \Omega$
- step 2: $\overline{0}$ — the argument $\Omega$ is discarded unreduced

**Normal form $\overline{0}$**, in 2 steps. This is the $K$ combinator throwing away a divergent argument, and it is the standing example that a reduction order which evaluates arguments first would not terminate here.

(d) $(\lambda x.\ x\,x)\ (\lambda x.\ x\,x\,x)$. Let $T = \lambda x.\,x\,x\,x$. Then the term is $D\,T \to_\beta T\,T$, and

$$T\,T \to_\beta T\,T\,T \to_\beta T\,T\,T\,T \to_\beta \cdots$$

**No normal form**, and unlike $\Omega$ the term *grows* by one $T$ at each step. So a divergent term need not be periodic — it can diverge by blowing up, which is the reduction-level picture of a program that exhausts memory rather than spinning.

**P2** Let $u = \mathsf{plus}\ \overline{1}\ \overline{2}$, which reduces to $\overline{3}$.

(a) Outer first: substituting $u$ for $x$ in $\mathsf{plus}\ x\ x$ gives $\mathsf{plus}\ u\ u$ in **one** step. The term now contains **two copies** of `plus 1 2`, and each must be reduced separately. (The question asks for two steps: the second step begins reducing one of the copies, leaving one reduced and one not.)

(b) Inner first: reduce $u$ to $\overline{3}$, giving $(\lambda x.\ \mathsf{plus}\ x\ x)\ \overline{3}$. The term now contains **zero** copies of `plus 1 2` — it has been evaluated once, before duplication.

(c) **Route (b) does less work.** It reduces the argument once and then duplicates the *result*; route (a) duplicates the *work* and pays for it twice.

The general rule: **reducing an argument before substituting it costs at most one evaluation; reducing it after costs one evaluation per occurrence of the parameter in the body.** So argument-first (call-by-value) is cheaper whenever the parameter occurs more than once, and argument-later (call-by-name) is cheaper — sometimes infinitely so, as in P1(c) — when the parameter occurs zero times. Neither dominates, which is exactly why both strategies survive.

(d) **Sharing** — implemented by *thunks* with memoization, also called call-by-need or lazy evaluation. The argument is wrapped unevaluated (so it is never evaluated if unused, keeping route (a)'s termination), but the two occurrences point at the *same* thunk, so the first one to force it overwrites it with the result and the second reads the value (keeping route (b)'s cost). Haskell is the standard implementation; [Lesson 3.4](03-04-evaluation-strategies.md) works out what it costs in space.

**P3**

(a) $\Omega = D\,D = (\lambda x.\ x\,x)\,(\lambda x.\ x\,x)$. The single redex is the whole term; substituting $D$ for $x$ in $x\,x$ gives $D\,D$:

$$\Omega \to_\beta [x := D](x\,x) = D\,D = \Omega$$

Since the only redex reduces to the same term, every reduction sequence from $\Omega$ is $\Omega \to_\beta \Omega \to_\beta \cdots$, and $\Omega$ is never redex-free. **No normal form.**

(b) $\Omega$'s body is $x\,x$; $Y$'s is $f\,(x\,x)$ — the self-application is **wrapped in an application of $f$**.

What that buys: each unfolding, instead of merely reproducing itself, reproduces itself *inside one more layer of $f$*. So where $\Omega$ generates $\Omega, \Omega, \Omega, \dots$, the combinator generates $g\,(A A),\ g\,(g\,(A A)),\ g\,(g\,(g\,(A A))), \dots$ — the tower of approximations $g^n(\cdots)$ that is the syntactic image of [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s chain $F^n(\bot)$. **The divergence is still there; $f$ is what turns it into productive work**, and whether the tower stops depends on whether $g$ eventually ignores its argument.

(c) $g = \lambda z.\ \overline{5}$, which discards its argument.

*Normal order.* $Y\,g \to^*_\beta g\,(A\,A)$ where $A = \lambda x.\ g\,(x\,x)$. Now the leftmost-outermost redex is $g$ applied to $A\,A$, and $g$ ignores its argument:

$$g\,(A\,A) \to_\beta \overline{5}$$

**Normal form $\overline{5}$.** The argument $A\,A$ — which is divergent — is discarded unreduced.

*Call-by-value.* The argument must be a value before $g$ is applied, so the evaluator attacks $A\,A$ first. But $A\,A \to_\beta g\,(A\,A)$, whose argument is again $A\,A$, and so on: the evaluator never produces a value for the argument and **diverges**, never reaching the $g$ that would have discarded it.

(d) The **standardization theorem**: if a term has a normal form, normal-order (leftmost-outermost) reduction finds it. Here the normal form $\overline{5}$ exists, so normal order is guaranteed to reach it — as it did.

The implication for a strict language: **its `fix` cannot be defined as $Y$ inside the language**, because call-by-value will unfold the recursion unconditionally rather than on demand. It must either use the $\eta$-delayed $Z$ combinator (which wraps the self-application in $\lambda v.\,\cdots$ so it is already a value), or provide recursion as a primitive (`let rec`) that the evaluator treats specially. That is why OCaml, Scheme and ML all have a `letrec` form in the language rather than deriving recursion, while Haskell can write `fix f = f (fix f)` as an ordinary definition — the language's evaluation strategy is what makes the difference, not its expressiveness.

</details>

## Flashback

**From Lesson 2.3 (Denotational semantics and least fixed points):** A loop's meaning is $\mathrm{lfp}\,F = \bigsqcup_{n\ge 0} F^n(\bot)$, where $F^n(\bot)$ is the loop truncated to fewer than $n$ iterations, and larger fixed points were rejected because they assert termination the equation never forced.

$Y$ produces a fixed point too: $Y\,g \to^*_\beta g\,(Y\,g)$.

(a) For $G$ the factorial builder of Example 2, say what the term $G^n(\text{anything})$ corresponds to, and match it against $F^n(\bot)$.
(b) $Y$ produces *a* fixed point. State which one, and give the reason in terms of what a $\beta$-reduction can and cannot do.

<details>
<summary>Solution</summary>

(a) $G$ takes a candidate factorial and returns one that is correct on one more input. Unfolding $n$ times gives $G^n(h)$ for an arbitrary $h$, and this computes factorial correctly on inputs $0, 1, \dots, n-1$ — below that depth the recursion bottoms out at the $\mathsf{iszro}$ base case and never consults $h$; at or above it, the answer is whatever $h$ says.

That is exactly $F^n(\bot)$: defined on the states where the loop runs fewer than $n$ times, undefined elsewhere. The $n$-th unfolding of $Y$ and the $n$-th iterate of $F$ are the same approximation, with "undefined" in the semantic picture playing the role of "we never got there" in the syntactic one. The two constructions are the same tower, built once in a domain of partial functions and once in a rewriting system.

(b) $Y$ produces the **least** fixed point.

The reason is that $\beta$-reduction can only *unfold* — it can turn $Y\,g$ into $g\,(Y\,g)$, and that into $g\,(g\,(Y\,g))$, and so on, producing finitely many layers in finitely many steps. There is no rule that ever concludes a value from an unfolding that has not bottomed out. So an answer is produced for an input exactly when some **finite** number of unfoldings suffices to reach a base case — which is precisely membership in $\bigsqcup_n G^n(\bot)$, the least fixed point.

The larger fixed points that [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) rejected correspond to assigning answers on inputs where the unfolding never terminates. Nothing in the rewriting system can do that: there is no rule saying "if this has not stopped by now, the answer is 7". Reduction's inability to conclude anything from non-termination is exactly what makes it compute the least fixed point and nothing larger — and it is the same reason `while true do skip` denotes $\bot$ rather than the identity.

</details>

## Connections

- **Backward:** the fixed-point equation $Y\,g = g\,(Y\,g)$ is [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s $W = F(W)$ made syntactic; the `let`/`letrec` gap of [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md) is what forces the combinator to exist at all. $\beta$-reduction and the encodings are [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md)'s.
- **Forward:** [Lesson 3.4](03-04-evaluation-strategies.md) is the gap this lesson opened — confluence says the orders agree, standardization says one is complete, and the strategies differ in cost and termination. [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) types the calculus, rejects $x\,x$, and loses $Y$ and $\Omega$ together — which is why a typed language must add `fix` back as a primitive.
- **Sideways:** confluence is the rewriting-systems property that makes "the value of an expression" well-defined without fixing an order, the same guarantee [`abstract-algebra` 1.1](../../abstract-algebra/lessons/01-01-group-axioms-first-examples.md) gets from associativity for products — different bracketings, one answer.

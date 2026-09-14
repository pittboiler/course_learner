# Programming Languages · Lesson 2.4: Hoare logic and loop invariants

> ⏱ ~15 min · Module 2: Semantics · Builds on: [2.2 (big-step semantics)](02-02-big-step-semantics-and-environments.md), [`programming-foundations` 1.2 (functions, contracts and invariants)](../../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md) · Unlocks: [3.1 (the untyped lambda calculus)](03-01-the-untyped-lambda-calculus.md), [7.5 (abstract interpretation)](07-05-abstract-interpretation.md)

## Why this matters

The two semantics so far answer "what does this program do?" This one answers a different and often more useful question: **"what can I prove about this program without running it?"**

That is the question a type system answers in a coarse way and a verifier answers in a fine way, and both are the same idea — attach a claim to a program point and check that the code preserves it. [`programming-foundations` 1.2](../../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md) taught this informally, as preconditions, postconditions and the initialization/maintenance/termination discipline for loops. This lesson makes it a **proof system**: a fixed set of rules, one per language construct, in which "this program is correct" is a theorem with a derivation.

The payoff is the loop rule, and specifically the loop *invariant* — the one genuinely creative step in program verification, the thing no algorithm supplies for you, and the concept that turns "I tested it on some inputs" into "it is correct on all of them".

## The idea

Write assertions in the gaps between statements. A **Hoare triple**

$$\{P\}\ c\ \{Q\}$$

reads: *if $P$ holds before $c$ runs, and $c$ terminates, then $Q$ holds after.* $P$ is the precondition, $Q$ the postcondition.

The "and $c$ terminates" clause makes this **partial correctness**: the triple says nothing about whether $c$ finishes. $\{\mathsf{true}\}\ \mathsf{while\ true\ do\ skip}\ \{\mathsf{false}\}$ is a valid triple, vacuously, because the program never terminates and so never has to make $\mathsf{false}$ hold. Termination is proved separately, with a **variant**, and partial correctness plus termination is **total correctness**.

Each language construct gets a rule. Sequencing threads an assertion through the middle; `if` splits on the guard; assignment is the clever one; and the loop rule needs exactly one input from you, the invariant.

## The formal version

$$\frac{}{\{P[a/x]\}\ x := a\ \{P\}}\;(\mathsf{Asgn}) \qquad\qquad \frac{\{P\}\ c_1\ \{R\} \qquad \{R\}\ c_2\ \{Q\}}{\{P\}\ c_1; c_2\ \{Q\}}\;(\mathsf{Seq})$$

$$\frac{\{P \wedge b\}\ c_1\ \{Q\} \qquad \{P \wedge \neg b\}\ c_2\ \{Q\}}{\{P\}\ \mathsf{if}\ b\ \mathsf{then}\ c_1\ \mathsf{else}\ c_2\ \{Q\}}\;(\mathsf{If}) \qquad \frac{}{\{P\}\ \mathsf{skip}\ \{P\}}\;(\mathsf{Skip})$$

$$\frac{P \Rightarrow P' \qquad \{P'\}\ c\ \{Q'\} \qquad Q' \Rightarrow Q}{\{P\}\ c\ \{Q\}}\;(\mathsf{Conseq}) \qquad\quad \frac{\{I \wedge b\}\ c\ \{I\}}{\{I\}\ \mathsf{while}\ b\ \mathsf{do}\ c\ \{I \wedge \neg b\}}\;(\mathsf{While})$$

**The assignment rule runs backwards, and this is the thing people get wrong.** $P[a/x]$ means "$P$ with every free $x$ replaced by $a$". To find what must hold *before*, take what you want *after* and substitute. Reading it forwards — "after `x := a`, the variable $x$ equals $a$" — is false in general: after `x := x + 1` it is not the case that $x = x+1$.

Check it on an instance. Want $\{?\}\ x := x+1\ \{x > 5\}$. Then $P$ is $x > 5$, and $P[(x{+}1)/x]$ is $x + 1 > 5$, i.e. $x > 4$. So $\{x > 4\}\ x := x+1\ \{x > 5\}$ — correct, and derived mechanically.

**The loop rule.** Read $\mathsf{While}$ carefully; it is the heart of the system.

- $I$ is the **invariant**: true before the loop, and true after every iteration.
- The premise $\{I \wedge b\}\ c\ \{I\}$ says the body **preserves** $I$, given that the guard was true when it ran.
- The conclusion gives you $I \wedge \neg b$ on exit — the invariant *and* the negated guard, because the only way out is the guard failing.

Three obligations follow, and they are exactly [`programming-foundations` 1.2](../../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md)'s initialization/maintenance/termination:

1. **Establishment:** $P \Rightarrow I$, the precondition implies the invariant (so the rule can be entered, via $\mathsf{Conseq}$).
2. **Preservation:** $\{I \wedge b\}\ c\ \{I\}$, the rule's premise.
3. **Sufficiency:** $I \wedge \neg b \Rightarrow Q$, the exit condition implies what you wanted.

**Finding $I$ is not mechanical.** The rule *checks* an invariant; it does not produce one. This is the creative step, and the useful heuristic is: **the invariant is the postcondition, weakened just enough to be true at every iteration.** You want $x = q\cdot y + r \wedge 0 \le r < y$; the part $r < y$ is false during the loop (that is why the loop is still running), so drop it and keep the rest.

**Termination: the variant.** Exhibit an expression $V$ over the program variables such that

$$I \wedge b \;\Rightarrow\; V \ge 0, \qquad\qquad \{I \wedge b \wedge V = k\}\ c\ \{V < k\}$$

In words: $V$ is a natural number that strictly decreases every iteration. Since there is no infinite strictly decreasing sequence of naturals, the loop runs finitely often. $V$ is called a **variant**, and it is the well-ordering argument of [`discrete-mathematics` 1.4](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) in program form.

**Weakest preconditions.** $\mathrm{wp}(c, Q)$ is the weakest $P$ making $\{P\}\ c\ \{Q\}$ valid. For assignment $\mathrm{wp}(x := a, Q) = Q[a/x]$ and for sequencing $\mathrm{wp}(c_1;c_2, Q) = \mathrm{wp}(c_1, \mathrm{wp}(c_2, Q))$, so verification of loop-free code is **mechanical**: push the postcondition backwards through the program and check the resulting implication. Loops are the one place the calculus stops and asks you for the invariant, which is precisely where the undecidability lives.

## Picture

![A proof outline: the program interleaved with assertions. It opens with the assertion x greater or equal 0 and y greater than 0, then q assigned 0, then the assertion x equals 0 times y plus x and x greater or equal 0, then r assigned x, then the assertion INV, then while r greater or equal y do, then indented the assertion INV and r greater or equal y, the two body statements r assigned r minus y and q assigned q plus 1, and the assertion INV again. After the loop, the assertion INV and not r greater or equal y, then the goal x equals q times y plus r and 0 less or equal r less than y. A footer defines INV as x equals q times y plus r and r greater or equal 0.](assets/02-04-fig1.svg)

This is a **proof outline**: the annotated program *is* the proof, with each assertion justified by the rule for the statement above it. Read it top to bottom and every gap is one rule application. The indented pair inside the loop is the preservation obligation, and the two assertions bracketing the loop are establishment and sufficiency.

Note what the invariant drops relative to the goal: the goal wants $0 \le r < y$, and $\mathsf{INV}$ keeps only $r \ge 0$. The missing conjunct $r < y$ is supplied on exit by $\neg b$, for free, from the loop rule.

## Worked examples

**Example 1 (mechanical): a loop-free proof by backwards substitution.** Prove $\{\mathsf{true}\}\ t := x;\ x := y;\ y := t\ \{x = X \wedge y = Y\}$ under the precondition $x = X \wedge y = Y$ — that is, verify a swap.

Push the postcondition $Q \equiv (x = Y \wedge y = X)$ backwards:

| after statement | assertion (by $Q[a/v]$) |
|---|---|
| — (goal) | $x = Y \wedge y = X$ |
| before `y := t` | $x = Y \wedge t = X$ |
| before `x := y` | $y = Y \wedge t = X$ |
| before `t := x` | $y = Y \wedge x = X$ |

The final line is $\mathrm{wp}$ of the whole program, and it is exactly the given precondition, so the triple holds with no side conditions. **Every step was substitution** — no insight required, which is the point of $\mathrm{wp}$ for loop-free code.

**Example 2 (why you'd care): verifying integer division.** Prove

$$\{x \ge 0 \wedge y > 0\}\quad q := 0;\ r := x;\ \mathsf{while}\ r \ge y\ \mathsf{do}\ (r := r - y;\ q := q + 1)\quad \{x = q\cdot y + r \wedge 0 \le r < y\}$$

*Choose the invariant.* Take the postcondition and weaken it by dropping the conjunct that is false mid-loop:

$$I \;\equiv\; x = q\cdot y + r \;\wedge\; r \ge 0$$

*Obligation 1 — establishment.* After `q := 0; r := x`, we have $q = 0$ and $r = x$, so $q\cdot y + r = 0\cdot y + x = x$, giving the first conjunct; and $r = x \ge 0$ by the precondition, giving the second. So $I$ holds on entry.

*Obligation 2 — preservation.* Assume $I \wedge (r \ge y)$. The body sets $r' = r - y$ and $q' = q + 1$. Then

$$q'\cdot y + r' = (q+1)y + (r - y) = q\cdot y + y + r - y = q\cdot y + r = x$$

so the first conjunct survives. And $r' = r - y \ge 0$ because the guard gave $r \ge y$. So $I$ holds again. **The guard is what supplies $r' \ge 0$** — without $r \ge y$ in hand, the subtraction could go negative, which is why the premise includes $\wedge\, b$.

*Obligation 3 — sufficiency.* On exit we have $I \wedge \neg(r \ge y)$, i.e. $x = q\cdot y + r \wedge r \ge 0 \wedge r < y$, which is the postcondition exactly.

*Termination.* Take $V = r$. The guard gives $r \ge y > 0$ so $V \ge 0$ holds whenever the body runs, and the body decreases $r$ by $y > 0$, so $V$ strictly decreases. Hence the loop terminates, and the triple is **totally** correct.

*Sanity check.* On $x = 17$, $y = 5$ the loop runs 3 times, ending $q = 3$, $r = 2$, and $17 = 3\cdot 5 + 2$ with $0 \le 2 < 5$. The proof says this holds for every $x \ge 0$, $y > 0$ — which is the difference between a test and a theorem.

## Watch out

- **You might think** the assignment rule should read forwards — **but actually** it substitutes into the *postcondition* to produce the precondition, and the `x := x + 1` case shows why a forwards reading fails. When in doubt, test your candidate rule on an assignment whose right-hand side mentions the variable being assigned.
- **You might think** a valid triple means the program works — **but actually** it means *partial* correctness only, and $\{\mathsf{true}\}\ c\ \{\mathsf{false}\}$ is provable for any $c$ that diverges. The variant is a separate obligation and it is the one people forget, because a non-terminating program passes every test that never runs it to completion.
- **You might think** a stronger invariant is always safer — **but actually** an invariant that is too strong fails preservation (the body breaks it) and one that is too weak fails sufficiency (it does not imply the goal). It has to be *exactly* strong enough, which is why finding it is the creative step: it must simultaneously survive the body and, together with $\neg b$, deliver the postcondition.

## One-liner

> A proof system where each construct gets one rule, assignment runs backwards, and the loop rule asks you for the single thing no algorithm can supply — an assertion true on entry, preserved by the body, and strong enough with the failed guard to give you what you wanted.

## Problems

**P1 (🟢)** Compute the precondition $P$ making each triple valid, using the assignment rule. Show the substitution.

(a) $\{P\}\ x := x * 2\ \{x \le 20\}$
(b) $\{P\}\ y := x + y\ \{y = 10\}$
(c) $\{P\}\ n := n - 1\ \{n \ge 0\}$

**P2 (🟡)** Consider $\{n \ge 0\}\ \ s := 0;\ i := 0;\ \mathsf{while}\ i < n\ \mathsf{do}\ (s := s + i;\ i := i + 1)\ \ \{s = \tfrac{n(n-1)}{2}\}$.

(a) State an invariant $I$ that works, and verify establishment.
(b) Verify preservation: show the body restores $I$.
(c) Verify sufficiency: show $I \wedge \neg(i < n)$ implies the postcondition.
(d) Give a variant and show it decreases.

**P3 (🔴)** A programmer proposes the invariant $I' \equiv (x = q \cdot y + r)$ for Example 2's division loop — Example 2's invariant with the conjunct $r \ge 0$ removed.

(a) Does $I'$ satisfy establishment? Does it satisfy preservation? Answer each with a one-line justification.
(b) Does $I' \wedge \neg(r \ge y)$ imply the postcondition $x = q\cdot y + r \wedge 0 \le r < y$? If not, exhibit a concrete state satisfying the left side and violating the right.
(c) Name which of the three obligations fails, and state the general lesson about what a loop invariant must carry beyond the arithmetic relationship.
(d) Now suppose instead the precondition is weakened to $y > 0$ alone, dropping $x \ge 0$, with Example 2's full invariant $I$. Which obligation fails now, and on what input?

<details>
<summary>Solutions</summary>

**P1**

(a) $P = (x \le 20)[(x*2)/x] = (x * 2 \le 20)$, i.e. $\mathbf{x \le 10}$.

(b) $P = (y = 10)[(x+y)/y] = \mathbf{x + y = 10}$.

(c) $P = (n \ge 0)[(n-1)/n] = (n - 1 \ge 0)$, i.e. $\mathbf{n \ge 1}$.

Each is pure substitution into the postcondition — note in particular (c), where the naive forwards reading "after `n := n-1` we know $n \ge 0$, so before we knew $n \ge 0$" gives the wrong (too weak) answer, and would let $n = 0$ through to produce $n = -1$.

**P2** This computes $s = 0 + 1 + \cdots + (n-1) = \tfrac{n(n-1)}{2}$.

(a) *Invariant:* $I \equiv \left(s = \tfrac{i(i-1)}{2} \;\wedge\; 0 \le i \le n\right)$.

*Establishment:* after `s := 0; i := 0` we have $i = 0$ and $s = 0$, and $\tfrac{0 \cdot (-1)}{2} = 0$, so the first conjunct holds. For the second, $0 \le 0$ and $0 \le n$ by the precondition $n \ge 0$. So $I$ holds on entry.

(b) *Preservation.* Assume $I \wedge (i < n)$. The body gives $s' = s + i$ and $i' = i + 1$. Then

$$s' = s + i = \frac{i(i-1)}{2} + i = \frac{i(i-1) + 2i}{2} = \frac{i(i+1)}{2} = \frac{i'(i'-1)}{2}$$

since $i' - 1 = i$. So the first conjunct is restored. For the second, $i' = i+1 \ge 1 > 0$, and $i < n$ gives $i + 1 \le n$, so $0 \le i' \le n$. Hence $I$ holds again.

(c) *Sufficiency.* On exit, $I \wedge \neg(i < n)$ gives $i \ge n$; combined with $i \le n$ from $I$ this forces $i = n$. Substituting into the first conjunct, $s = \tfrac{n(n-1)}{2}$, which is the postcondition. **The $i \le n$ conjunct is what makes this work** — without it, $i \ge n$ alone would not pin $i$ to $n$, and the arithmetic conjunct would say nothing about $n$.

(d) *Variant:* $V = n - i$. From $I$ we have $i \le n$ so $V \ge 0$, and the guard $i < n$ gives $V \ge 1 > 0$ whenever the body runs. The body increments $i$ by 1 and leaves $n$ alone, so $V$ decreases by exactly 1 each iteration. Hence the loop terminates after exactly $n$ iterations.

**P3**

(a) *Establishment:* **yes.** After `q := 0; r := x` we get $0 \cdot y + x = x$, so $I'$ holds. (It is a weaker assertion than $I$, and $I$ was established, so $I'$ certainly is.)

*Preservation:* **yes.** The algebra $(q+1)y + (r-y) = q\cdot y + r$ from Example 2 never used $r \ge 0$, so it goes through unchanged.

So $I'$ passes both of the obligations that involve the loop itself.

(b) **No.** Take the state $x = -3$, $y = 5$, $q = 0$, $r = -3$. Then:

- $I'$ holds: $q \cdot y + r = 0 \cdot 5 + (-3) = -3 = x$. ✓
- $\neg(r \ge y)$ holds: $-3 \ge 5$ is false. ✓
- The postcondition fails: it requires $0 \le r$, and $r = -3 < 0$. ✗

So the left side holds and the right side does not.

(c) **Sufficiency fails** — obligation 3, $I' \wedge \neg b \Rightarrow Q$.

The general lesson: **the invariant must carry every part of the postcondition that the negated guard does not supply.** The guard's negation gives you exactly one fact on exit, here $r < y$. Everything else in the postcondition — the arithmetic relation $x = q\cdot y + r$ *and* the bound $r \ge 0$ — has to be maintained by the invariant, because nothing else will produce it. Dropping a conjunct from the invariant is only safe when $\neg b$ replaces it, and $\neg(r \ge y)$ says nothing whatever about $r$ being non-negative.

(d) With the full invariant $I \equiv (x = q\cdot y + r \wedge r \ge 0)$ and the precondition weakened to $y > 0$ alone, **establishment fails**. After `r := x` the second conjunct requires $r \ge 0$, i.e. $x \ge 0$, and that is precisely the conjunct that was dropped.

Concretely, on $x = -3$, $y = 5$: the precondition $y > 0$ holds, but after initialization $r = -3 < 0$, so $I$ is false on entry to the loop and the rule cannot be applied.

(This is not merely a proof-technique artifact — the program really is wrong on that input. The guard $-3 \ge 5$ is false immediately, so it returns $q = 0$, $r = -3$, and $0 \le r < y$ genuinely does not hold. The precondition $x \ge 0$ was load-bearing, and the failed obligation points straight at it.)

</details>

## Flashback

**From Lesson 2.3 (Denotational semantics and least fixed points):** The loop's denotation is $\mathrm{lfp}\,F$, reached by the chain $\bot \sqsubseteq F(\bot) \sqsubseteq F^2(\bot) \sqsubseteq \cdots$, where $F^n(\bot)$ is the loop truncated to fewer than $n$ iterations.

The Hoare rule $\dfrac{\{I \wedge b\}\ c\ \{I\}}{\{I\}\ \mathsf{while}\ b\ \mathsf{do}\ c\ \{I \wedge \neg b\}}$ mentions no chain and no limit.

(a) Explain what the invariant $I$ is doing that lets the rule avoid the iteration entirely.
(b) Use this to say why the Hoare rule proves only *partial* correctness, referring to what the chain does and the rule does not.

<details>
<summary>Solution</summary>

(a) The invariant is a property that holds at **every** point of the chain — it is true of $F^1(\bot)$'s behaviour, of $F^2(\bot)$'s, and so of the limit. The premise $\{I \wedge b\}\ c\ \{I\}$ is precisely the inductive step showing that if $I$ describes the state after $n$ iterations then it describes the state after $n+1$; establishment is the base case. So the rule is an **induction over the chain, discharged in one premise** rather than by exhibiting the chain.

That is the general trade. The denotational account computes the loop's meaning by unbounded iteration, which is exact but infinite; the Hoare rule asks you to supply a *finitely checkable* property strong enough to survive one step, and gets a conclusion about all steps for free. The invariant is what makes an infinite process finitely provable — the same move as a loop invariant in [`programming-foundations` 1.2](../../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md), and the same move as induction itself.

(b) The chain does one thing the rule does not: it records **where the loop is defined**. $F^n(\bot)$ has a domain, and the limit's domain is exactly the set of states from which the loop terminates. States outside it are simply absent, and that absence is the semantics' record of divergence.

The Hoare rule has no domain. Its conclusion $\{I\}\ \mathsf{while}\ b\ \mathsf{do}\ c\ \{I \wedge \neg b\}$ is a conditional claim — *if* the loop exits, $I \wedge \neg b$ holds — and nothing in the premise can fail when the loop never exits, because the premise only constrains a single body execution. So a loop that runs forever satisfies every invariant vacuously, which is exactly why $\{\mathsf{true}\}\ \mathsf{while\ true\ do\ skip}\ \{\mathsf{false}\}$ is derivable.

Recovering what the chain knew requires the separate termination obligation: the **variant**, a natural number decreasing each iteration, which bounds the number of chain steps needed and so certifies that the state is inside the limit's domain. Partial correctness plus a variant is total correctness — that is, the Hoare account plus the variant recovers exactly the information the denotational domain carried for free.

</details>

## Connections

- **Backward:** the three obligations are [`programming-foundations` 1.2](../../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md)'s initialization, maintenance and termination, now as inference rules. The variant's well-ordering argument is [`discrete-mathematics` 1.4](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md)'s, and the Flashback ties the loop rule to [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s fixed-point chain.
- **Forward:** "attach a claim to each program point and check the code preserves it" is the type system of Module 4 at coarse grain, and the abstract interpreter of [Lesson 7.5](07-05-abstract-interpretation.md) at automated grain — where the invariant is *inferred* rather than supplied, at the cost of being approximate. The dataflow facts of [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) are invariants a compiler finds for itself.
- **Sideways:** a Hoare triple is a judgment and the rules are a proof system, so this is [`mathematical-logic` 1.4](../../mathematical-logic/lessons/01-04-proof-system-completeness.md)'s soundness-and-completeness apparatus applied to programs — and the fact that no algorithm supplies the invariant is Rice's theorem again ([`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)), since a general invariant-finder would decide halting.

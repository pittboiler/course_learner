# Automata & Computability · Lesson 1.3: Regular expressions & Kleene's theorem

> ⏱ ~15 min · Module 1: Finite Automata & Regular Languages · Builds on: [1.1 (DFAs)](01-01-deterministic-finite-automata.md), [1.2 (NFAs & the subset construction)](01-02-nfa-and-the-subset-construction.md) · Unlocks: 1.4 (closure properties)

## Why this matters

There are two ways to pin down a set of strings. You can build a **machine that checks** membership, or you can write a **formula that builds** every member. Automata do the first; regular expressions do the second. Kleene's theorem says these two utterly different-looking descriptions define exactly the same class of languages.

That theorem is why `grep` works. You write a pattern — a builder — and the library compiles it to a machine — a checker — and runs it. Both directions of the equivalence are constructive, which means both directions are code someone actually ships. And the theorem is what licenses the phrase "regular language": whichever description you happen to have, you have the other one too, so the class is worth naming.

For this course, the practical value is proof economy. From here on you may pick whichever description makes an argument shortest — a regex to *build* a language, an NFA to *guess*, a DFA to *decide*. Lesson 1.4 leans on that freedom constantly.

## The idea

A regular expression is a recipe with three combining moves, applied to atoms.

- **Or** ($\cup$): "either this pattern or that one."
- **Then** (juxtaposition): "this pattern, immediately followed by that one."
- **Star** ($^*$): "this pattern repeated any number of times, including zero."

That is all. `(0∪1)*01` reads: *anything at all, then `0`, then `1`* — the strings that end in `01`, which is exactly the language you built an NFA for last lesson. The correspondence is not a coincidence, and Kleene's theorem is the statement that it never is.

Both directions have a clean picture.

**Expression → machine** is *compositional*: build a little NFA for each atom, then glue the pieces with $\varepsilon$-transitions in a way that mirrors each combining move. Union forks with $\varepsilon$; concatenation chains with $\varepsilon$; star adds an $\varepsilon$ that loops back and an $\varepsilon$ that skips. This is Thompson's construction, and $\varepsilon$-moves are exactly the glue that makes it work — which is why we allowed them in Lesson 1.2.

**Machine → expression** is *destructive*: rip states out of the automaton one at a time. Every time you delete a state, you compensate by relabelling the edges that routed through it with a regular expression describing what that detour could have spelled. Keep going until only a start and an accept remain; the label on the single surviving edge is your answer.

## The formal version

Fix an alphabet $\Sigma$. The **regular expressions** over $\Sigma$ are defined inductively. $R$ is a regular expression if $R$ is

1. $a$, for some $a \in \Sigma$; 2. $\varepsilon$; 3. $\varnothing$; 4. $(R_1 \cup R_2)$; 5. $(R_1 R_2)$; 6. $(R_1^*)$,

where $R_1, R_2$ are regular expressions. Its language $L(R)$ is defined in step with the syntax:

$$L(a) = \{a\}, \quad L(\varepsilon) = \{\varepsilon\}, \quad L(\varnothing) = \varnothing,$$
$$L(R_1 \cup R_2) = L(R_1) \cup L(R_2), \quad L(R_1R_2) = \{xy : x \in L(R_1),\, y \in L(R_2)\}, \quad L(R_1^*) = \bigcup_{n \ge 0} L(R_1)^n.$$

In words: $\varepsilon$ matches the empty string and nothing else; $\varnothing$ matches nothing at all (a useful identity element, not a typo for $\varepsilon$); and $R^*$ includes $\varepsilon$ always, because $n = 0$ is allowed. Precedence is star, then concatenation, then union, so $0 \cup 10^*1$ means $0 \cup (1(0^*)1)$.

**Theorem (Kleene).** A language is regular (recognized by some finite automaton) **iff** it is described by some regular expression.

*($\Leftarrow$) Thompson's construction.* Induct on the structure of $R$, maintaining the invariant that every gadget has exactly one start state and exactly one accept state, with no arrows out of the accept state. Atoms are one- or two-state machines. For the combining moves, glue as in the Picture. Each gadget adds $O(1)$ states, so an expression of length $m$ compiles to an NFA with $O(m)$ states — one reason regex compilation is cheap.

*($\Rightarrow$) State elimination.* Convert the automaton to a **GNFA** — a generalized NFA whose edges are labelled by regular expressions rather than single symbols — by adding a fresh start state with an $\varepsilon$-edge to the old start, and a fresh accept state with $\varepsilon$-edges from all old accept states. Then repeatedly delete an internal state $q$: for every remaining pair $(p, r)$ with $p \to q \to r$, replace the label $R_{pr}$ by

$$R_{pr} \;\cup\; R_{pq}\,(R_{qq})^*\,R_{qr},$$

which spells "the old way, or: get to $q$, loop at $q$ as often as you like, then leave for $r$." Deleting states one at a time preserves the set of strings spelled by paths from start to accept, so when one edge remains, its label is the answer. $\blacksquare$

Notice the shape of the second construction — $(R_{qq})^*$ appearing exactly where a state had a self-loop. **Star is what a cycle turns into.** That is the whole reason $^*$ is in the syntax.

## Picture

![Three gadgets of Thompson's construction, drawn as boxes joined by epsilon arrows. Union: a new start state with epsilon arrows into boxes for N(R) and N(S), and epsilon arrows from both boxes into a new accept state. Concatenation: box N(R) joined by an epsilon arrow to box N(S). Star: a new start with an epsilon arrow into N(R), an epsilon arrow out to a new accept, an epsilon arrow looping from the end of N(R) back to its start, and an epsilon arrow skipping the box entirely from the new start to the new accept.](assets/01-03-fig1.svg)

Everything you need to remember about the star gadget is in the two coral arrows: the **skip** edge is what puts $\varepsilon$ into $R^*$, and the **loop-back** edge is what lets $R$ repeat. Drop the skip edge and you have built $RR^*$ (one or more) instead of $R^*$ — a genuine off-by-one that shows up in real pattern libraries as the difference between `+` and `*`.

The invariant "exactly one accept, no arrows out of it" is what makes the gluing legal: it lets you attach a fresh $\varepsilon$-edge to a gadget's exit without accidentally letting the machine continue *past* an accept it should have stopped at.

## Worked examples

**Example 1 (mechanical): expression to machine.** Compile $R = (0 \cup 1)^*01$.

Bottom up. $N(0)$ is two states joined by a `0`-edge; $N(1)$ likewise. $N(0 \cup 1)$ forks into both with $\varepsilon$ and rejoins with $\varepsilon$. $N((0\cup1)^*)$ adds a new start and accept, an $\varepsilon$ loop-back, and an $\varepsilon$ skip. Then two concatenations attach $N(0)$ and $N(1)$ on the end. The result has 12 states and is dominated by $\varepsilon$-glue.

Now compare it to the three-state NFA of Lesson 1.2 for the same language. Both are correct; the hand-built one is far smaller. This is worth internalizing: **Thompson's construction is for machines, not for humans.** Its virtue is that it is mechanical and linear-size, which is what a compiler needs; a person reasoning about a specific language should design the NFA directly. (Running the subset construction on either one lands on the same three-state DFA — Lesson 1.2's table.)

**Example 2 (why you'd care): machine to expression.** Take the two-state DFA for "an even number of `1`s" from Lesson 1.1: states $E$ (start, accept) and $O$, with $\delta(E,0)=E$, $\delta(E,1)=O$, $\delta(O,0)=O$, $\delta(O,1)=E$.

Add a fresh start $s \xrightarrow{\varepsilon} E$ and a fresh accept $E \xrightarrow{\varepsilon} f$. Now eliminate $O$. The paths through $O$ go $E \xrightarrow{1} O$, loop at $O$ on $0$ any number of times, then $O \xrightarrow{1} E$. So delete $O$ and add to the $E \to E$ label:

$$R_{EE} \;=\; 0 \ \cup\ \underbrace{1}_{E \to O}\ \underbrace{0^*}_{\text{loop at } O}\ \underbrace{1}_{O \to E} \;=\; 0 \cup 10^*1.$$

Only $E$ is left between $s$ and $f$, with a self-loop labelled $0 \cup 10^*1$ and $\varepsilon$-edges either side. Eliminating $E$ turns its self-loop into a star:

$$R \;=\; \varepsilon\,(0 \cup 10^*1)^*\,\varepsilon \;=\; (0 \cup 10^*1)^*.$$

Read it back in English and it is obviously right: a string has an even number of `1`s iff it is a sequence of blocks, each block being either a lone `0` or a *pair* of `1`s with anything `0`-ish between them. (Verified by exhaustive comparison against the DFA on all $8191$ strings of length $\le 12$.)

The general fact is worth having: **every cycle in the automaton becomes a star in the expression, and nested cycles become nested stars.** If you ever wonder why a regex derived from a state machine looks so much worse than one you would write by hand, that is why — elimination order determines how the stars nest, and a bad order produces a correct but monstrous expression.

## Watch out

- **You might think** $\varnothing$ and $\varepsilon$ are two names for "nothing" — **but actually** $L(\varnothing) = \{\}$ matches *no strings at all*, while $L(\varepsilon) = \{\varepsilon\}$ matches exactly one string, the empty one. They behave like $0$ and $1$ for the operations: $R \cup \varnothing = R$ and $R\varepsilon = R$, but $R\varnothing = \varnothing$ — concatenating with $\varnothing$ annihilates.
- **You might think** the familiar regex features are all covered here — **but actually** the ones in this lesson (union, concatenation, star, plus the derived `+` and `?`) are the *only* ones that keep you inside the regular languages. Backreferences like `(a*)b\1` do not: they recognize a non-regular language, and they are why backtracking engines exist. When this course says "regular expression" it means the six-clause definition above, never the full syntax of a modern library.
- **You might think** two expressions describing the same language must look alike — **but actually** the same regular language has infinitely many expressions, and deciding whether two expressions are equivalent is a genuinely hard problem (PSPACE-complete). Testing a few short strings can *refute* an identity but never confirm one; a claimed identity needs a proof, which is P3.

## One-liner

> A regex builds strings and an automaton checks them, and Kleene's theorem says these are the same power — with $\varepsilon$-glue turning an expression into a machine, and star turning a machine's cycles back into an expression.

## Problems

**P1 (🟢)** For each string, say whether it matches $R = (0 \cup 1)^*01$, and justify in a few words: $\varepsilon$, $0$, $01$, $0110$, $1001$, $010101$. Then write a regular expression for $\{w \in \{0,1\}^* : w \text{ has even length}\}$.

**P2 (🟡)** Let $M$ be the DFA over $\Sigma = \{a,b\}$ with states $\{s, t, d\}$, start $s$, $F = \{s, t\}$, and

| $\delta$ | `a` | `b` |
|---|---|---|
| $s$ | $t$ | $s$ |
| $t$ | $d$ | $s$ |
| $d$ | $d$ | $d$ |

(a) Describe $L(M)$ in one sentence. (b) Convert $M$ to a regular expression by state elimination, eliminating $d$ first and then $t$. Show the label after each elimination.

**P3 (🔴)** For each claimed identity, decide whether it holds for **all** regular expressions $R, S$. If it fails, give a specific $R, S$ and the **shortest** string witnessing the failure, saying which side it is on. If it holds, give a one-or-two-sentence proof.

(a) $(R \cup S)^* = R^* \cup S^*$   (b) $(RS)^* = R^*S^*$   (c) $R(SR)^* = (RS)^*R$

<details>
<summary>Solutions</summary>

**P1** $R = (0\cup1)^*01$ describes exactly the strings **ending in** `01` (the prefix $(0\cup1)^*$ matches anything).

| string | matches? | why |
|---|---|---|
| $\varepsilon$ | **no** | too short — every match has length $\ge 2$ |
| $0$ | **no** | same |
| $01$ | **yes** | prefix matches $\varepsilon$, then `01` |
| $0110$ | **no** | ends in `10`, not `01` |
| $1001$ | **yes** | prefix `10`, then `01` |
| $010101$ | **yes** | prefix `0101`, then `01` |

Even length: $\big((0\cup1)(0\cup1)\big)^*$ — a sequence of two-symbol blocks, including zero of them, so $\varepsilon$ is in. (Equivalently $(00\cup01\cup10\cup11)^*$.)

**P2** (a) $d$ is a non-accepting trap reached exactly by an `a` immediately after an `a`, so $L(M) = \{w \in \{a,b\}^* : w \text{ contains no } aa\}$.

(b) Add $s' \xrightarrow{\varepsilon} s$ and $\varepsilon$-edges $s \to f'$, $t \to f'$ (both $s$ and $t$ accept).

*Eliminate $d$.* Nothing leaves $d$ except to $d$ itself, and $d$ is not accepting, so no start-to-accept path goes through it. Every edge into $d$ can simply be dropped. Remaining machine: $s \xrightarrow{b} s$, $s \xrightarrow{a} t$, $t \xrightarrow{b} s$, plus the $\varepsilon$-edges. (*Recognizing that a dead state contributes $\varnothing$ and vanishes is the point of eliminating it first — otherwise you carry $\varnothing$ terms through the whole computation.*)

*Eliminate $t$.* Paths through $t$: enter by $s \xrightarrow{a} t$; $t$ has no self-loop, so the loop factor is $\varnothing^* = \varepsilon$; leave either by $t \xrightarrow{b} s$ or by $t \xrightarrow{\varepsilon} f'$. So

- the $s \to s$ label becomes $b \cup a\,\varepsilon\,b = b \cup ab$;
- a new $s \to f'$ edge appears with label $a\,\varepsilon\,\varepsilon = a$, joining the existing $\varepsilon$: label $\varepsilon \cup a$.

*Eliminate $s$.* Its self-loop $(b \cup ab)$ becomes a star:

$$R \;=\; \varepsilon\,(b \cup ab)^*\,(\varepsilon \cup a) \;=\; (b \cup ab)^*(\varepsilon \cup a).$$

Read it back: a no-`aa` string is a run of blocks each of which is `b` or `ab` — so every `a` is immediately followed by a `b` — optionally with one final unaccompanied `a`. (Verified against $M$ on all $4095$ strings of length $\le 11$.)

**P3**

**(a) FALSE.** Take $R = 0$, $S = 1$. Then $(R \cup S)^* = (0\cup1)^*$ contains every binary string, while $R^* \cup S^* = 0^* \cup 1^*$ contains only the all-`0` and all-`1` strings. The shortest witness is $\mathbf{01}$ (length 2): it is in the left side, not the right. (No length-1 or length-0 string works — $\varepsilon, 0, 1$ are all in both sides.)

**(b) FALSE.** Take $R = 0$, $S = 1$. Then $(RS)^* = (01)^* = \{\varepsilon, 01, 0101, \dots\}$, while $R^*S^* = 0^*1^*$ contains every string of `0`s followed by `1`s. The shortest witness is $\mathbf{0}$ (length 1): it is in the **right** side ($0^*1^*$ with one `0` and zero `1`s), not in the left. ($\varepsilon$ is in both, so nothing shorter works. Note the inclusion goes the opposite way from (a) — worth noticing, since a false identity can fail in either direction, and stating *which* is part of the answer.)

**(c) TRUE.** Both sides describe $\{\,r_1 s_1 r_2 s_2 \cdots s_n r_{n+1} \ :\ n \ge 0,\ r_i \in L(R),\ s_i \in L(S)\,\}$ — an alternating string that begins and ends with an $R$-piece.

Left side: $R(SR)^*$ takes one $R$-piece and then $n$ copies of $SR$, giving $r_1(s_1r_2)(s_2r_3)\cdots(s_nr_{n+1})$. Right side: $(RS)^*R$ takes $n$ copies of $RS$ and then one $R$-piece, giving $(r_1s_1)(r_2s_2)\cdots(r_ns_n)r_{n+1}$. The two products are the same string, re-bracketed — concatenation is associative, so the brackets carry no meaning. Since the two sides generate the same set for each $n$ and both union over all $n \ge 0$, they are equal. $\blacksquare$

(Moral: (a) and (b) are refuted by exhibiting one string; (c) *cannot* be established that way, no matter how many strings you test. Refutation is finite work; confirmation is a proof.)

</details>

## Flashback

**From Lesson 1.1 (Deterministic finite automata):** Let $M$ be the DFA over $\Sigma = \{0,1\}$ with $Q = \{s_0, s_1, d\}$, start $s_0$, $F = \{s_0, s_1\}$, and $\delta(s_0,0)=s_0$, $\delta(s_0,1)=s_1$, $\delta(s_1,0)=s_0$, $\delta(s_1,1)=d$, and $d$ a trap on both symbols. (a) Trace $1010$ and $1101$. (b) State the invariant that proves $L(M)$ is what you think it is.

<details>
<summary>Solution</summary>

(a)

$$1010: \quad s_0 \xrightarrow{1} s_1 \xrightarrow{0} s_0 \xrightarrow{1} s_1 \xrightarrow{0} s_0 \in F. \quad \textbf{Accept.}$$

$$1101: \quad s_0 \xrightarrow{1} s_1 \xrightarrow{1} d \xrightarrow{0} d \xrightarrow{1} d \notin F. \quad \textbf{Reject.}$$

(b) $L(M) = \{w : w \text{ does not contain } 11\}$. The invariant, on prefixes $u$ of the input:

- $M$ is in $s_0$ after $u$ iff $u$ has no `11` **and** $u$ does not end in `1`;
- $M$ is in $s_1$ after $u$ iff $u$ has no `11` **and** $u$ ends in `1`;
- $M$ is in $d$ after $u$ iff $u$ contains `11`.

It holds at $u = \varepsilon$ (which is in $s_0$: no `11`, does not end in `1`) and each transition preserves it — reading `0` clears the "ends in `1`" flag without creating a `11`; reading `1` sets the flag from $s_0$, and from $s_1$ creates a `11`, sending you to the trap forever. Induct on $|u|$ and apply at $u = w$: the accept set $\{s_0,s_1\}$ is exactly "no `11`."

(Two states here encode a *one-symbol lookback*, the same trick as the four-state substring machine in Lesson 1.1 — the state is always "how much of the forbidden pattern do I have in hand right now.")

</details>

## Connections

- **Backward:** Thompson's construction consumes exactly the $\varepsilon$-transitions introduced in [1.2](01-02-nfa-and-the-subset-construction.md), and state elimination is a structural induction on the automaton in the sense of [discrete-mathematics 1.4](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md). The definition of a regular expression is itself a recursive definition, justified by the same well-ordering.
- **Forward:** Lesson 1.4 uses Kleene's theorem as a licence to prove closure facts in whichever representation is easiest — union is trivial for regexes, complement is trivial for DFAs. In [programming-languages](../../programming-languages/syllabus.md), Thompson's construction plus the subset construction *is* the lexer generator, and Lesson 2.1's grammars are the next tier up.
- **Sideways:** regular expressions form a **Kleene algebra** — an idempotent semiring with a star operator — which is the algebraic reason the identities in P3 behave the way they do; $\cup$ and concatenation act like $+$ and $\times$ with $\varnothing$ and $\varepsilon$ as $0$ and $1$, so P3(b)'s failure is the failure of $\times$ to commute past $^*$. See [abstract-algebra](../../abstract-algebra/syllabus.md) for the semiring notion.

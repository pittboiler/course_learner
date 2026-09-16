# Philosophical Method · Lesson 1.4: Argument forms and formal fallacies

> ⏱ ~15 min · Module 1: The anatomy of an argument · Builds on: [1.3 Reconstruction and charity](01-03-reconstruction-and-charity.md) · Unlocks: [2.1 Inference to the best explanation](02-01-inference-to-the-best-explanation.md)

## Why this matters

Philosophy runs on a startlingly small number of patterns. Name the pattern in front of you and [1.2](01-02-validity-and-soundness.md)'s validity question is settled in two seconds — which frees the whole conversation for the premise that actually matters. The three look-alike patterns earn their keep too: they feel airtight, prove nothing, and turn up often enough in editorials, homilies and legal briefs that you will catch one this week.

## The idea

A form is a skeleton with the content stripped out. "If the treaty is ratified it binds us; it hasn't been ratified" — stop there, and you already know what follows, without knowing anything about treaties. That is [1.2](01-02-validity-and-soundness.md)'s point cashed out: validity lives in the shape, so the shapes can be learned once and reused forever.

Six shapes do nearly all the work. Three near-misses do nearly all the damage, and each near-miss is the same mistake underneath: **a direction reversed.** A conditional read backwards, a negation on the wrong end, a quantifier that swapped places with its neighbour.

Nobody writes "modus tollens"; they write "but that plainly isn't happening, so." Recognition in prose is the skill here; proving these forms valid is the business of [`mathematical-logic`](../../mathematical-logic/syllabus.md).

## The argument

Letters stand for whole claims: *P*, *Q*, *R*.

**1. Modus ponens.** If *P* then *Q*. *P*. ∴ *Q*.
In words: one thing brings another; the first holds; so does the second.

**2. Modus tollens.** If *P* then *Q*. Not *Q*. ∴ Not *P*.
In words: the promised consequence never showed up, so neither did the thing that would have produced it. The workhorse of philosophical refutation.

**3. Hypothetical syllogism.** If *P* then *Q*. If *Q* then *R*. ∴ If *P* then *R*.
In words: chain conditionals end to end and you get the long-range one. Every "and where does *that* lead?" is this form run repeatedly.

**4. Disjunctive syllogism.** *P* or *Q*. Not *P*. ∴ *Q*.
In words: two options, one eliminated, the other stands. What you may *not* do: infer "not *Q*" from "*P* or *Q*" plus "*P*" — only an exclusive "or" licenses that, and prose rarely says which it means.

**5. Constructive dilemma.** *P* or *Q*. If *P* then *R*. If *Q* then *R*. ∴ *R*.
In words: either way, you lose. (The general version lets the branches land in different places, ∴ *R* or *S*.) It is attacked at the disjunctive premise — by finding a third option — never at the form.

**6. Reductio ad absurdum.** The one that is a procedure rather than a pattern:

1. **Assume for contradiction** the claim you want to refute, stated as its holder would state it.
2. **Derive** from it, using premises they also grant, something absurd: a flat contradiction, or a consequence they themselves reject.
3. **Reject the assumption.** The derivation was good and the consequence is unacceptable, so the assumption has to go.

In words: take the view seriously enough to run it, and let it break itself. Underneath it is modus tollens with the assumption as antecedent — *if P, then this absurdity; not this absurdity; so not P* — which is why step 2 must be airtight. Any gap there and the absurdity is yours, not theirs.

Now the three that fail.

**Affirming the consequent.** If *P* then *Q*. *Q*. ∴ *P*. **Invalid** — [1.2](01-02-validity-and-soundness.md) broke it with a wet street. Two things it didn't say. The pattern seduces because it is a mangled version of a good inference: when *P* really is the best explanation of *Q*, observing *Q* does support *P*, just not conclusively — the repair is the content of [2.1](02-01-inference-to-the-best-explanation.md). And check the conditional's direction before you level the charge. "*P* only if *Q*" means *if P then Q*: "a law binds only if it was promulgated" puts promulgation in the consequent, so *it wasn't promulgated, therefore it doesn't bind* is modus tollens and valid. Half of all accusations of this fallacy are somebody misreading an "only if."

**Denying the antecedent.** If *P* then *Q*. Not *P*. ∴ Not *Q*. **Invalid.** "If the council defined it, it binds; the council didn't define it; so it doesn't bind" — a conciliar definition is one way a teaching binds, not the only way. It feels right because conversation often uses "if" to mean "if and only if": *if you finish the draft, I'll pay you* is heard as a promise that unfinished drafts go unpaid. Charity ([1.3](01-03-reconstruction-and-charity.md)) says ask whether the biconditional was meant — but notice the cost. The repaired premise ("it binds *only* when a council defines it") claims far more and is far easier to refute. That is the general shape of these repairs: an invalid argument traded for a valid one carrying a much heavier premise, which is progress, because now there is something definite to dispute.

**Quantifier-scope slips.** Two claims made of the same words in a different order, one much stronger:

- "Everyone has a reason to obey the law" — each person, some reason or other, possibly a different one each time.
- "There is a reason everyone has to obey the law" — one single reason, shared by all.

The second entails the first, never the reverse. Likewise "someone loves everyone" (one universal lover) entails "everyone is loved by someone" (nobody unloved). The rule: **"some…every" is the stronger claim, and it never follows from "every…some."** The slip is nearly invisible, because the conclusion is the premise with two phrases swapped and it arrives wearing a "so." Watch for it whenever an argument moves from a fact about each person, effect or case to a claim about one thing they all share.

## Argument map

| Form | Shape | In prose it sounds like | Verdict |
|---|---|---|---|
| Modus ponens | If *P* then *Q*; *P* ∴ *Q* | "Given that…, it follows that…" | **Valid** |
| Modus tollens | If *P* then *Q*; not *Q* ∴ not *P* | "But that plainly isn't the case, so…" | **Valid** |
| Hypothetical syllogism | If *P* then *Q*; if *Q* then *R* ∴ if *P* then *R* | "…which in turn would mean…" | **Valid** |
| Disjunctive syllogism | *P* or *Q*; not *P* ∴ *Q* | "Either… and since it isn't the first…" | **Valid** |
| Constructive dilemma | *P* or *Q*; if *P* then *R*; if *Q* then *R* ∴ *R* | "Either way, you end up with…" | **Valid** |
| Reductio | Assume *P*; derive an absurdity ∴ not *P* | "Suppose that were true. Then… which is absurd." | **Valid** if the derivation is |
| Affirming the consequent | If *P* then *Q*; *Q* ∴ *P* | "…and that's exactly what we're seeing, so…" | **Invalid** — check for "only if" |
| Denying the antecedent | If *P* then *Q*; not *P* ∴ not *Q* | "That never happened, so no…" | **Invalid** — unless "if" meant "only if" |
| Quantifier swap | Every *x* has some *y* ∴ some *y* belongs to every *x* | "…so there's one thing they all share" | **Invalid** — the reverse direction is fine |

Read the right-hand column, not the middle one. The shapes are easy; finding them under English is the skill, and the tell is a "so" or a "which means" doing more work than the sentence before it earned.

## Worked examples

**Example 1 (mechanical — two forms in one paragraph).**

> "If the charter amendment passed, the ethics commission gained subpoena power. And if it gained subpoena power, the mayor's contracts would be public by now. They are not public. So the amendment did not pass."

A hypothetical syllogism chains the conditionals into *if amendment, then contracts public*; modus tollens on that gives *the amendment did not pass*. **Valid** — and you knew it before thinking about city charters at all.

Which is the point: now spend the effort where it pays. The vulnerable link is the second conditional, which smuggles in a timeline ("by now"). A commission can hold subpoena power and not yet have used it. Attack that premise and the argument collapses; attack the reasoning and you waste the exchange.

**Example 2 (where it strains — what a reductio establishes).**

In Book I of Plato's *Republic*, Cephalus offers an account of justice: telling the truth and giving back what you received. Socrates runs a reductio. Suppose that is what justice is. A friend, sane at the time, leaves his weapons with you, then returns out of his mind and demands them. On the account, handing them over is just — and no one thinks you ought to give a madman his sword. So the account fails.

Clean, and the strain shows at once. A reductio never tells you *which* claim has to go, only that the set cannot all stand — and four were in play: the definition, the description of the case, the judgment that returning the sword would be monstrous, and the assumption that a definition must hold in every case. So Cephalus has choices: **bite the bullet** ([3.4](03-04-intuitions-and-reflective-equilibrium.md)), or **concede and restrict** — returning what you received *when the owner can be trusted with it* — the standard reply to a reductio ([4.1](04-01-objections-and-replies.md)). What he cannot do is nothing.

This is where philosophical reductios differ from mathematical ones. There the absurdity is a contradiction and the target is unambiguous; here it is "absurd to whom?" — and a reductio whose last step is an intuition your opponent doesn't share hasn't refuted them, it has located the disagreement ([4.3](04-03-finding-the-crux.md)).

## Watch out

- **You might think naming the form ends the argument.** It settles validity only. On a valid argument the fight moves entirely to the premises, and announcing "modus tollens!" there tells your opponent you agree with their reasoning.
- **You might think a fallacy charge is free.** It is a claim about the form, and it is false whenever the conditional runs the other way. Read the "only if"s before accusing anyone.
- **You might think an invalid form makes an argument worthless.** It makes it *unproven*. An affirmed consequent is usually a decent explanatory inference that was oversold; restate it as one ([2.1](02-01-inference-to-the-best-explanation.md)).
- **A reductio needs an absurdity your opponent grants.** Deriving something *you* find outrageous is the disagreement restated louder, not a refutation.
- **Scope slips go one way.** "Some *y* for every *x*" gives you "every *x* has some *y*" free; the reverse is the mistake — and the one that reads most naturally.

## One-liner

> Six forms carry almost all of philosophy and three near-misses almost all of its mistakes — and every near-miss is a direction reversed: a conditional read backwards, a negation on the wrong end, a quantifier that changed places.

## Problems

**P1 (🟢) *(Exegetical.)*** Name the form and say whether it is valid. One sentence each.

(a) "A law binds in conscience only if it serves the common good. This law does not serve the common good. So it does not bind in conscience."
(b) "Either the quotation was copied from a source now lost, or it is a later interpolation. No lost source was available to this author. So it is a later interpolation."
(c) "If the council had intended a definition, it would have used the anathema formula. It did not intend a definition. So it did not use the anathema formula."
(d) "Every argument in the book has a flaw. So there is a flaw that runs through every argument in the book."

**P2 (🟡) *(Exegetical (a)–(b) · Evaluative (c).)*** From an invented campus newspaper column opposing a proposed speech code:

> "The code's supporters hold that speech may be restricted whenever it causes offence. Suppose that were right. Then the supporters themselves could be silenced, since their proposal deeply offends everyone it would restrict — and by their own rule, offence is enough. A principle that licenses banning its own defenders is no principle at all. And consider: every speaker on this campus offends someone. So there is someone here offended by every speaker, and on the supporters' rule that person decides who may talk."

(a) Put the reductio in standard form: what is assumed, what absurdity is derived, what is concluded. (b) The last two sentences contain a quantifier-scope slip — state both readings and say which the premise supports. (c) Give one move a supporter could make to resist the reductio without abandoning the code. 150 words or fewer for (b) and (c) together.

**P3 (🔴, optional) *(Exegetical (a)–(b) · Evaluative (c).)*** An exchange:

> **A:** "If the reform had worked, the backlog would be shorter. The backlog is shorter. So the reform worked."
> **B:** "That's affirming the consequent."
> **A:** "Then let me restate it. The backlog gets shorter only if the reform works — nothing else could have shortened it."

(a) Was B's charge correct against A's original wording? (b) On the restatement, what form is the argument and is it valid? (c) Say what the repair cost A — what must now be defended that didn't have to be — and whether A is better off. 150 words or fewer for (b) and (c) together.

<details>
<summary>Solutions</summary>

**P1** *(Exegetical — strict.)*

**Must hit, strict:**
- (a) **Modus tollens, valid.** "*P* only if *Q*" is *if P then Q*, so serving the common good is the consequent; denying it denies the antecedent claim.
- (b) **Disjunctive syllogism, valid.** The second premise eliminates the first disjunct. Whether the disjunction is exhaustive is a premise question, not a form question.
- (c) **Denying the antecedent, invalid.** A body can use the formula without intending a definition; a conditional licenses nothing from the failure of its antecedent.
- (d) **Quantifier swap, invalid.** From "every argument has some flaw," nothing follows about one shared flaw. The entailment runs the other way.

**Wrong turns:** calling (a) denying the antecedent because the sentence opens with the thing denied — the "only if" already reversed the conditional; calling (b) invalid because the disjunction looks incomplete, which is a complaint about a premise.

**Model answer:** (a) Modus tollens, valid. (b) Disjunctive syllogism, valid. (c) Denying the antecedent, invalid. (d) Scope slip, invalid.

---

**P2** *((a)–(b) exegetical, strict · (c) evaluative — any move that fits passes.)*

**Must hit, strict (a):** the supporters' principle is *assumed for contradiction*, not asserted:
> **A1.** (assumed) Speech may be restricted whenever it causes offence.
> **P1.** The supporters' proposal offends everyone it would restrict.
> **∴ S.** The supporters' own speech may be restricted.
> **P2.** A principle licensing the silencing of its own defenders is unacceptable.
> **∴ C.** Reject A1.

**Must hit, strict (b):** the premise is *every speaker offends someone* (each speaker, some offended person, possibly different each time); the conclusion asserts *someone is offended by every speaker* (one universal objector). Only the first is supported. Naming which reading the "so" jumps between is the required move.

**Must hit, any verdict (c):** name a specific move and its cost. Available: **concede and restrict** (narrow the trigger to targeted harassment, blocking the derivation but giving up the wide principle); **deny P1** (a policy proposal does not offend in the relevant sense); **bite the bullet** (the principle applies reflexively and that is tolerable). Asserting the columnist is simply wrong, with no move named, does not pass.

**Wrong turns:** treating A1 as one of the columnist's own commitments — it is the opposite; saying the scope slip sinks the column, when it infects only the final sentence and the reductio stands independently.

**Model answer (c), one of several:** Concede and restrict. The trigger was never bare offence but offence of a specific kind — speech targeting a person for an unchosen characteristic. P1 then fails, so the derivation cannot reach its absurdity. The cost should be stated plainly: the restricted principle is narrower than what supporters have said in public, and needs an independent defence of where the line falls. It is still a better position than the original, which the reductio does defeat as written.

---

**P3** *((a)–(b) exegetical, strict · (c) evaluative.)*

**Must hit, strict (a):** **yes.** As first stated the conditional runs *if the reform worked, the backlog is shorter*; A affirms the consequent and infers the antecedent. Invalid.

**Must hit, strict (b):** the restatement reverses the conditional — "shorter only if the reform works" is *if shorter, then the reform works* — so with "the backlog is shorter" the argument is **modus ponens, valid.**

**Must hit, any verdict (c):** name the cost precisely: the new premise asserts that nothing else could have shortened the backlog (no seasonal drop in filings, no staffing change, no reclassification), so any rival cause now refutes the argument outright. Any verdict passes provided the trade is described — an invalid argument exchanged for a valid one carrying a heavier premise.

**Wrong turns:** claiming B's charge survives the restatement, when "only if" has reversed the conditional; treating the restatement as mere rewording, when it asserts something much stronger.

**Model answer:** (a) Yes — affirming the consequent. (b) Modus ponens, valid. (c) Validity was bought with exclusivity: A must now rule out every alternative cause, a substantive empirical claim rather than a logical point. Better off in the respect that matters — the dispute is about one nameable, testable claim instead of about whether A can reason, and a single rival explanation settles it. Worse off if exclusivity is indefensible, in which case the honest version is an inference to the best explanation, not a proof.

</details>

## Flashback

**From Lesson 1.2 (Validity and soundness):** Say whether each argument is valid and whether it is sound. For the invalid one, prove it invalid with a same-form counterexample — premises obviously true, conclusion obviously false.

(a) **P1.** Every treaty ratified by the Senate has the force of federal law. **P2.** The Kyoto Protocol was ratified by the Senate. **∴ C.** The Kyoto Protocol has the force of federal law.
(b) **P1.** Every book that changed the law was widely read. **P2.** *Uncle Tom's Cabin* was widely read. **∴ C.** *Uncle Tom's Cabin* changed the law.

<details>
<summary>Solution</summary>

**Must hit, strict:**
- (a) **Valid, unsound.** The form is impeccable ("all A are B; this is an A; so this is a B"); P2 is false — the United States signed the Kyoto Protocol and the Senate never ratified it. A false premise, not a broken link.
- (b) **Invalid.** Form: *All F are G. This is G. ∴ This is F.* The premise says law-changing books were all widely read, not that wide readership makes a book law-changing.
- A same-form counterexample for (b): "Every dog is an animal. My cat is an animal. So my cat is a dog." True premises, false conclusion, so the form does not preserve truth.

**Wrong turns:** calling (a) invalid because its conclusion is false — the falsity traces to P2; arguing about whether *Uncle Tom's Cabin* actually influenced legislation, which is a question about the world, not about this argument's link.

</details>

## Connections

- **Backward:** [1.2](01-02-validity-and-soundness.md) gave the counterexample method for breaking a form; this is the list of forms worth knowing by name, so you rarely have to build one. [1.3](01-03-reconstruction-and-charity.md) supplies the repairs — a denied antecedent is almost always a suppressed biconditional.
- **Forward:** [2.1](02-01-inference-to-the-best-explanation.md) rehabilitates affirming the consequent as the defeasible inference it was trying to be; [2.3](02-03-informal-fallacies-and-when-they-arent.md) attacks a dilemma's disjunctive premise under the name "false dilemma"; [4.1](04-01-objections-and-replies.md) makes the reductio one of five objection types and pairs it with the replies that fit.
- **Sideways:** [`mathematical-logic`](../../mathematical-logic/syllabus.md) owns all of this as a formal system — truth-table semantics, the quantifier rules that make the scope asymmetry a theorem, proofs that these forms are valid. Scope slips do real damage in [`philosophy-of-religion`](../../philosophy-of-religion/syllabus.md) (every effect has a cause versus one cause of everything) and in [`political-philosophy`](../../political-philosophy/syllabus.md), where "everyone has a reason to obey" and "there is a reason everyone has to obey" are two different theories of political obligation.

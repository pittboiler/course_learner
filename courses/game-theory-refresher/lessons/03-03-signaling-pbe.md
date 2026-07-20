# Game Theory · Lesson 3.3: Signaling and perfect Bayesian equilibrium

> ⏱ ~15 min · Module 3: Games of incomplete information · Builds on: [3.1 Bayesian games](03-01-bayesian-games.md), [2.2 Subgame perfection and commitment](02-02-subgame-perfection-commitment.md) · Unlocks: Module 4 (bargaining and mechanism design)

## Why this matters

In a Bayesian game ([3.1](03-01-bayesian-games.md)) types are drawn and everyone moves at once, so nobody ever *learns*. Reality isn't like that: the informed party often moves first, and the very act of choosing leaks information. A job applicant gets a degree; a firm posts a warranty; a borrower accepts a high interest rate. The uninformed side watches, updates, and responds — and the informed side, knowing it's being read, chooses its action partly *to be read a certain way*. That feedback loop is **signaling**, and pinning it down needs a solution concept that carries *beliefs* into every corner of the tree. That concept is **perfect Bayesian equilibrium**, the workhorse behind Spence's education model, limit pricing, and half of modern information economics ([`micro-refresher` 5.3](../../micro-refresher/lessons/05-03-asymmetric-information.md)).

## The idea

Subgame perfection ([2.2](02-02-subgame-perfection-commitment.md)) demanded that play be optimal *starting from every node*. But when the mover doesn't know which node they're at — the firm sees "a worker with a degree" without knowing if that worker is talented — there's no subgame to roll back through, so SPE has nothing to say. The fix is to equip the uninformed player with a **belief**: a probability distribution over the nodes inside each information set. Then "optimal from here" becomes "optimal *given my belief about where I am*."

That gives two moving parts that must fit together:

1. **Sequential rationality** — every player, at every information set, plays a best response *given their belief there*. (Subgame perfection's "optimal everywhere," now belief-weighted.)
2. **Belief consistency** — beliefs aren't free. Wherever equilibrium play actually reaches an information set, the belief there must be what **Bayes' rule** computes from the prior and the strategies.

The catch that generates all the interesting behavior: Bayes' rule only bites *on the equilibrium path*. At an information set that equilibrium play **never reaches** (nobody was supposed to send that signal), Bayes' rule is $0/0$ — undefined — so the belief there is **unrestricted**. Different off-path beliefs support different equilibria, which is why signaling games are riddled with multiplicity, and why we later reach for **refinements** to prune them.

A **signaling game** is the canonical stage on which this plays out: an informed **sender** (knows their type) picks a **signal**; an uninformed **receiver** sees the signal, updates their belief, and picks a **response**. Two archetypes:

- **Separating:** different types send different signals, so the signal reveals the type — the receiver learns everything.
- **Pooling:** all types send the *same* signal, so the receiver learns nothing and acts on the prior.

## The formal version

A **signaling game**: Nature draws the sender's type $t\in T$ with prior $p(t)$. The sender observes $t$ and picks a message $m\in M$. The receiver observes $m$ (not $t$), holds a belief $\mu(t\mid m)$ — the probability the sender is type $t$ given message $m$ — and picks a response $a\in A$. Payoffs are $u_S(t,m,a)$ and $u_R(t,m,a)$.

**Perfect Bayesian equilibrium (PBE).** A strategy profile $\big(m^*(t),\,a^*(m)\big)$ together with a belief system $\mu$ is a **PBE** if:

- **(SR-receiver)** For every message $m$, $a^*(m)\in\arg\max_a \sum_{t} \mu(t\mid m)\,u_R(t,m,a)$.
- **(SR-sender)** For every type $t$, $m^*(t)\in\arg\max_m u_S\big(t,m,a^*(m)\big)$.
- **(Bayes)** At every *on-path* message (one sent by some type with positive probability),
$$\mu(t\mid m)=\frac{p(t)\,\mathbf{1}[m^*(t)=m]}{\sum_{t'}p(t')\,\mathbf{1}[m^*(t')=m]}.$$

> In words: the receiver best-responds to its belief; each sender type picks the message that gets it the best *response*, anticipating how the receiver reads it; and beliefs match Bayes' rule wherever they can be computed. Off-path messages carry *any* belief you like — that freedom is a feature to be disciplined, not a bug.

**Reading the two archetypes through Bayes.** If both types pool on $m$, then $m$ is on-path and Bayes forces $\mu(t\mid m)=p(t)$: the posterior *is* the prior, no learning. If the types separate, each sent message is on-path for exactly one type, so Bayes forces a *degenerate* belief ($\mu=1$ on the sender who uses it): full learning. The action is in whether **sequential rationality** lets the profile stand — and, for pooling, in what off-path belief deters a deviation.

**Single-crossing (the Spence engine).** Separation is possible when a costly signal is *cheaper for the type that benefits from being identified*. If sending the signal costs the high type less than the low type, there's a signal level the high type will pay for and the low type won't — the receiver can trust it. Formally: indifference curves of the two types in (signal, response) space cross exactly once, so their willingness-to-pay for a better response, per unit of signal, is ordered. No single-crossing, no credible separation.

**Refinements (brief).** Off-path freedom breeds "silly" equilibria propped up by implausible beliefs. The **intuitive criterion** (Cho–Kreps) prunes them: if a type could *never* gain by deviating to an off-path message $m$ — even under the most favorable response — the receiver shouldn't put weight on that type at $m$. Strip such types out, recompute the response, and if some *other* type now strictly gains, the equilibrium fails the criterion. In Spence it wipes out the pooling equilibria and every separating one but the cheapest, leaving a unique prediction.

## Picture

![Extensive-form signaling game: Nature draws the worker's type (H with probability one third, L with probability two thirds); the worker sends E or N; the firm, at each of two dashed information sets with beliefs mu_N and mu_E, assigns job h or ell. The separating PBE path (H educates then h; L doesn't then ell) is highlighted.](assets/03-03-fig1.svg)

The sender is a **worker** of type $H$ (talented, prior $\tfrac13$) or $L$ (prior $\tfrac23$); the message is education, $E$ or $N$ (none); the receiver is a **firm** assigning the high job $h$ or low job $\ell$. Dashed lines are the firm's two information sets — one per signal — with beliefs $\mu_N,\mu_E$ that the worker is $H$. Payoffs are $(\text{Worker},\text{Firm})$. Read off the structure: the firm earns $1$ exactly when the job fits the type ($h$ for $H$, $\ell$ for $L$), so its best response is $h$ iff its belief $\mu\ge\tfrac12$. Education is pure signal — it costs the worker but doesn't change the firm's payoff — and it costs the talented worker *less* (that's the single-crossing that makes the green separating path work).

## Worked examples

**Example 1 (mechanical — beliefs drive the response).** Take the firm at *either* information set with belief $\mu=\Pr(H\mid\text{signal})$. Its payoffs depend only on type-vs-job:

$$\mathbb{E}[u_R\mid h]=\mu\cdot 1+(1-\mu)\cdot 0=\mu,\qquad \mathbb{E}[u_R\mid \ell]=\mu\cdot 0+(1-\mu)\cdot 1=1-\mu.$$

So $h$ is sequentially rational iff $\mu\ge\tfrac12$, and $\ell$ iff $\mu\le\tfrac12$. This one threshold governs *everything*: to make the firm assign the good job the worker must move the firm's belief above $\tfrac12$; to punish an off-path deviation the firm needs a belief *below* $\tfrac12$. Every equilibrium below is just a story about which beliefs land on which side of $\tfrac12$.

**Example 2 (why you'd care — separation only runs one way).** You might guess *any* separating profile works. It doesn't. Try the "backwards" one: $H$ plays $N$, $L$ plays $E$. Then $N$ is $H$-only so $\mu_N=1\Rightarrow$ firm plays $h$ after $N$; $E$ is $L$-only so $\mu_E=0\Rightarrow$ firm plays $\ell$ after $E$. Check the low type: playing $E$ yields $(E,\ell)=-2$, but deviating to $N$ would land it in the "$h$ after $N$" region for $(N,h)=3$. Type $L$ bolts. Separation *must* put the costly signal on the type that gains from being identified — the talented worker $H$, for whom education is cheap enough (cost $1$) to be worth the wage jump (worth $2$), while $L$ (cost $3$) won't follow. That asymmetry — single-crossing — is exactly why real signals are things the wrong type finds *too expensive to fake*, the thread running straight into [`micro-refresher` 5.3](../../micro-refresher/lessons/05-03-asymmetric-information.md).

## Watch out

- You might think "no subgame, so subgame perfection handles it." It doesn't — an information set spanning several nodes starts *no* subgame, so SPE is silent and you genuinely need beliefs. PBE is what SPE becomes once you add them.
- You might think Bayes' rule pins down *all* beliefs. Only on-path ones. Off-path information sets get *free* beliefs, and choosing them pessimistically (or optimistically) is precisely how you sustain — or destroy — a pooling equilibrium. Multiplicity is not a mistake; it's the mathematics telling you the data don't identify off-path conduct.
- You might think a separating equilibrium means the signal is "worth it socially." Often it's pure waste: the high type burns real resources on education that raises no productivity, purely to be distinguished. Separation can be individually rational and collectively wasteful at once — the dark side of signaling.
- Don't confuse the sender's *message* with the receiver's *response* when checking sequential rationality. The sender optimizes over messages taking the receiver's response *rule* as fixed; the receiver optimizes over responses taking its *belief* as fixed.

## One-liner

> A PBE is sequential rationality plus Bayes-consistent beliefs — and since off-path beliefs are free, signaling games separate when the signal is too costly for the wrong type to fake, pool when a pessimistic off-path belief scares everyone into silence.

## Problems

Use the game in the Picture throughout P1–P2 (worker type $H$ w.p. $\tfrac13$, $L$ w.p. $\tfrac23$; signals $E,N$; responses $h,\ell$; payoffs as drawn).

**P1 (🟢)** Verify that the **separating** profile — $H$ plays $E$, $L$ plays $N$; firm plays $h$ after $E$ and $\ell$ after $N$ — is a PBE. Compute the on-path beliefs $\mu_E,\mu_N$ from Bayes' rule, check the firm's response is sequentially rational at each set, and check neither worker type wants to deviate.

**P2 (🟡)** Find a **pooling** PBE of the same game in which both types play $N$. State the on-path belief $\mu_N$, the firm's response after $N$, and the full range of off-path beliefs $\mu_E$ (and the corresponding response) that deter *both* types from deviating to $E$.

**P3 (🔴) — Spence.** Two types, $\theta_H=2$ and $\theta_L=1$ (a type's productivity, which equals the competitive wage once the firm identifies it), prior $\lambda=\Pr(H)$. A worker chooses education $e\ge0$; it raises no productivity but costs $c_H e=e$ for $H$ and $c_L e=2e$ for $L$ (single-crossing: $c_H<c_L$). A worker of type $t$ choosing $e$ and receiving wage $w$ gets $w-c_t e$. (a) In the **least-cost separating** PBE, $L$ chooses $e_L=0$; find the smallest $e_H$ that keeps $L$ from mimicking, confirm $H$ prefers separating, and give $H$'s payoff. (b) Show a **pooling** PBE at $e=0$ exists for suitable off-path beliefs. (c) Argue briefly that the **intuitive criterion** kills the pool (when $\lambda<\tfrac12$) and selects the least-cost separating outcome.

<details>
<summary>Solutions</summary>

**P1.** *Beliefs.* Under the profile, $E$ is sent only by $H$ and $N$ only by $L$, so both signals are on-path and Bayes' rule gives degenerate beliefs:
$$\mu_E=\Pr(H\mid E)=\frac{\tfrac13\cdot 1}{\tfrac13\cdot 1+\tfrac23\cdot 0}=1,\qquad \mu_N=\Pr(H\mid N)=\frac{\tfrac13\cdot 0}{\tfrac13\cdot 0+\tfrac23\cdot 1}=0.$$

*Receiver SR.* At the $E$ set, $\mu_E=1\ge\tfrac12$, so $h$ is optimal (Example 1) — matches the prescribed $h$. At the $N$ set, $\mu_N=0\le\tfrac12$, so $\ell$ is optimal — matches the prescribed $\ell$. ✓

*Sender SR* (given firm plays $h$ after $E$, $\ell$ after $N$):
- Type $H$: playing $E\to h$ pays $u_S(H,E,h)=2$; deviating to $N\to\ell$ pays $u_S(H,N,\ell)=1$. Since $2>1$, $E$ is optimal. ✓
- Type $L$: playing $N\to\ell$ pays $u_S(L,N,\ell)=1$; deviating to $E\to h$ pays $u_S(L,E,h)=0$. Since $1>0$, $N$ is optimal. ✓

All three PBE conditions hold, so the profile with $(\mu_E,\mu_N)=(1,0)$ is a (separating) PBE.
*Check:* the low type would pay education cost $3$ to grab the wage jump worth $2$ — a losing trade ($0<1$) — so it stays put; the high type pays cost $1$ for a jump worth $2$ and gladly signals ($2>1$). Single-crossing delivers exactly the wedge that makes the degenerate beliefs self-consistent. ✓

**P2.** *On-path.* Both types play $N$, so $N$ is on-path and Bayes forces the posterior to equal the prior:
$$\mu_N=\Pr(H\mid N)=\lambda=\tfrac13.$$
Since $\mu_N=\tfrac13<\tfrac12$, the firm's sequentially rational response after $N$ is $\ell$ (Example 1). On the path each type gets $u_S(\cdot,N,\ell)$: type $H$ gets $1$, type $L$ gets $1$.

*Off-path.* $E$ is sent by nobody, so $\mu_E$ is free. The firm's response after $E$ is $h$ if $\mu_E\ge\tfrac12$ and $\ell$ if $\mu_E\le\tfrac12$. To sustain the pool, deviating to $E$ must not help either type:
- If the firm would answer $E$ with $\ell$: type $H$ deviating gets $u_S(H,E,\ell)=0<1$; type $L$ gets $u_S(L,E,\ell)=-2<1$. Neither deviates. ✓
- If the firm would answer $E$ with $h$: type $H$ deviating gets $u_S(H,E,h)=2>1$ — $H$ bolts, pool collapses.

So the pool survives **iff the firm answers $E$ with $\ell$**, which requires the off-path belief $\boxed{\mu_E\le\tfrac12}$ (the firm must believe a worker who deviates to education is *more likely the low type* — a pessimistic, and here entirely unrestricted, belief). The pooling PBE: both play $N$; firm plays $\ell$ everywhere; $\mu_N=\tfrac13$, any $\mu_E\le\tfrac12$.
*Check:* the equilibrium hinges entirely on an off-path belief Bayes' rule cannot touch — flip $\mu_E$ above $\tfrac12$ and the same strategies stop being an equilibrium. That fragility is what the intuitive criterion attacks in P3. ✓

**P3.** Wages: an identified type $t$ earns $w=\theta_t$ (competitive firms pay expected productivity).

(a) **Least-cost separating.** $L$ is revealed as $L$ regardless, so it minimizes cost: $e_L=0$, wage $\theta_L=1$, payoff $1-c_L\cdot 0=1$. $H$ chooses $e_H$ and is paid $\theta_H=2$. For separation, $L$ must not prefer to mimic $H$ (pay $e_H$, get wage $2$):
$$\underbrace{1}_{L\text{ honest}}\ \ge\ \underbrace{2-c_L e_H}_{L\text{ mimics}}=2-2e_H\ \Longrightarrow\ e_H\ge\tfrac12.$$
And $H$ must prefer separating to masquerading as $L$ (choose $e=0$, wage $1$):
$$\underbrace{2-c_H e_H}_{H\text{ separates}}=2-e_H\ \ge\ \underbrace{1}_{H\text{ as }L}\ \Longrightarrow\ e_H\le 1.$$
The **least-cost** separating equilibrium takes the smallest admissible signal, $e_H=\tfrac12$ (the low type's constraint binds). Type $H$'s payoff is $2-\tfrac12=\tfrac32$. Beliefs: any $e\ge\tfrac12$ read as $H$, any $e<\tfrac12$ read as $L$, making the wage schedule $w(e)=2$ for $e\ge\tfrac12$, $w(e)=1$ otherwise — against which $e_L=0,\ e_H=\tfrac12$ are best responses.

(b) **Pooling at $e=0$.** Both types choose $e=0$; the firm cannot tell them apart, so it pays the expected productivity $w_{\text{pool}}=\lambda\theta_H+(1-\lambda)\theta_L=1+\lambda$. Support it with the off-path belief that *any* $e>0$ comes from $L$ (pessimism), giving $w(e>0)=1$. Then deviating to $e>0$ pays at most $1-c_t e<1<1+\lambda$ for either type — nobody deviates, so the pool is a PBE.

(c) **Intuitive criterion.** Consider $H$ deviating to $e^\dagger=\tfrac12+\varepsilon$ (just above the separating level). The *best conceivable* wage from any education is $2$. Ask whether $L$ could ever gain from $e^\dagger$: even at wage $2$, $L$ gets $2-2e^\dagger=1-2\varepsilon<1+\lambda=w_{\text{pool}}$ — never. So $e^\dagger$ is equilibrium-dominated for $L$; the criterion forbids the firm from putting weight on $L$ there, forcing the belief (and wage) to $H$'s, i.e. $w(e^\dagger)=2$. But then $H$'s deviation pays $2-e^\dagger=\tfrac32-\varepsilon$, which exceeds $w_{\text{pool}}=1+\lambda$ whenever $\lambda<\tfrac12$ (for small $\varepsilon$). $H$ strictly gains, so the pool **fails** the intuitive criterion. The same argument leaves the least-cost separating outcome $e_H=\tfrac12$ untouched (no type has a profitable equilibrium-dominated deviation there), so it is the criterion's unique survivor.
*Check:* the surviving prediction is the *cheapest* credible separation — $H$ burns exactly enough education, $e_H=\tfrac12$, to make imitation a strict loss for $L$ ($2-2\cdot\tfrac12=1$, tied at the honest payoff), and not a unit more. ✓

</details>

## Flashback

**From Lesson 2.2 (Subgame perfection and commitment):** Two firms face inverse demand $P=9-Q$ with $Q=q_1+q_2$ and constant marginal cost $c=1$. Firm 1 chooses $q_1$ first; firm 2 observes it and chooses $q_2$ (Stackelberg). Solve the game by backward induction: find each firm's quantity and profit in the subgame-perfect equilibrium, and compare firm 1's profit to what it would earn under simultaneous Cournot.

<details>
<summary>Solution</summary>

*Follower's subgame.* Given $q_1$, firm 2 solves $\max_{q_2} q_2\,(9-q_1-q_2-1)=q_2\,(8-q_1-q_2)$. FOC: $8-q_1-2q_2=0\Rightarrow q_2=\dfrac{8-q_1}{2}$.

*Leader folds it in.* Firm 1's profit, using the margin $P-c=8-q_1-q_2$ and substituting $q_2$:
$$\pi_1(q_1)=q_1\Big(8-q_1-\tfrac{8-q_1}{2}\Big)=q_1\cdot\frac{8-q_1}{2}.$$
FOC: $\dfrac{d}{dq_1}\dfrac{8q_1-q_1^2}{2}=\dfrac{8-2q_1}{2}=0\Rightarrow q_1=4$. Then $q_2=\dfrac{8-4}{2}=2$, so $Q=6$, $P=9-6=3$, margin $P-c=2$. Profits: firm 1 $=4\cdot2=8$, firm 2 $=2\cdot2=4$.

*Cournot benchmark.* Symmetric best responses $q_i=\dfrac{8-q_j}{2}$ give $q=\tfrac83$ each, $Q=\tfrac{16}{3}$, $P=9-\tfrac{16}{3}=\tfrac{11}{3}$, margin $\tfrac83$, profit $\tfrac83\cdot\tfrac83=\tfrac{64}{9}\approx7.11$ apiece.

**SPE: $q_1=4,\ q_2=2$, profits $8$ and $4$.** The leader earns $8>\tfrac{64}{9}\approx7.11$: committing first to the aggressive quantity forces the follower to shrink, exactly the value-of-commitment logic of [2.2](02-02-subgame-perfection-commitment.md).
*Check:* given $q_1=4$, firm 2's best response is $\tfrac{8-4}{2}=2$ ✓; given the follower reacts along $\tfrac{8-q_1}{2}$, firm 1's interior optimum is $q_1=4$ ✓; leader profit $8>7.11>4$ = follower, the signature Stackelberg ordering. ✓

</details>

## Connections

- **Backward:** PBE is [2.2](02-02-subgame-perfection-commitment.md)'s sequential rationality carried into information sets that start no subgame, powered by [3.1](03-01-bayesian-games.md)'s types and Bayes-rule updating — a signaling strategy is just a type-contingent plan (as in [3.2](03-02-auctions.md)'s bid functions) plus the *belief bookkeeping* that lets the receiver respond.
- **Forward:** Module 4 designs the game rather than plays it — [4.1](04-01-bargaining.md)'s alternating-offers bargaining is solved by the same backward-induction-with-beliefs discipline, and [4.2](04-02-mechanism-design.md)'s revelation principle turns the separating logic here (get each type to self-select) into a general recipe, with the intuitive criterion the equilibrium-selection cousin of incentive compatibility.
- **Sideways (economics):** this is the game-theoretic core of [`micro-refresher` 5.3](../../micro-refresher/lessons/05-03-asymmetric-information.md) — Spence's job-market signaling is the separating PBE, Akerlof's lemons is the pooling collapse, and single-crossing is the same condition that sorts types in screening contracts and optimal taxation.

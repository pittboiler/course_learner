# Public Economics · Lesson 1.2: Voluntary provision and crowding out

> ⏱ ~15 min · Module 1: Public goods · Builds on: [1.1 The Samuelson rule beyond quasilinearity](01-01-the-samuelson-rule-beyond-quasilinearity.md), [`grad-micro` 6.4 Public goods](../../grad-micro/lessons/06-04-public-goods.md) · Unlocks: [1.3 Revealing demand for public goods](01-03-revealing-demand-for-public-goods.md), [8.2 Assignment, spillovers, and grants](08-02-assignment-spillovers-and-grants.md)

## Why this matters

A government that funds a charity, a public radio station or a research field is not filling an empty space. Private donors were already giving, and they respond. If each public dollar displaces a private dollar, the grant changed who pays and nothing else. A related puzzle: can redistributing income among donors change how much gets provided? This lesson gives the benchmark answer, which is startling (often not at all), and then shows the two places it breaks: at the edge of the set of people who give, and when people enjoy giving for its own sake.

## The idea

Recall from [`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md) that voluntary giving underprovides: each donor stops when *his own* marginal benefit equals the cost, ignoring everyone else's. Now look at what a donor actually cares about. If I care only about the total $G$ and my own consumption, then my contribution is just the gap between the total I want, given my wealth, and what others already give.

Miniature: Ann and Bob share a park fund. Both give, and the fund ends up at 30. Now take 5 dollars from Ann and hand it to Bob. Each wants the same fund and the same private consumption as before, and both can still afford it: Ann gives 5 less, Bob gives 5 more, and nothing real changes. The transfer is undone inside the contributions.

The same logic kills a government grant. Tax Ann and Bob 5 dollars each and put the 10 into the fund. The fund would rise to 40, but each still wants 30, so each cuts his gift by 5: the grant crowds out giving dollar for dollar.

Both results need every affected person to be a contributor. Take 9 dollars from a donor and give it to someone who gives nothing, and the recipient simply spends it, while the donor, now poorer, gives less. Total provision falls. That boundary, the [contributor set](../reference.md#contributor-set), is where the policy action is.

## The formal version

**Model.** People $i=1,\dots,n$ have wealth $w_i$ and choose a contribution $g_i\ge0$ (here $g_i$ is a gift, not the welfare weight of Module 5). Private consumption is $x_i=w_i-g_i$, the public good is $G=P+\sum_j g_j$ where $P\ge0$ is government provision, and one unit of $G$ costs one unit of wealth, so the marginal rate of transformation is 1. Write $G_{-i}=G-g_i$ for everything not given by $i$. Each person takes $G_{-i}$ as given (Nash).

**Best responses with log utility.** Take $u_i=\ln x_i+\ln G$. Person $i$ maximizes $\ln(w_i-g_i)+\ln(G_{-i}+g_i)$, whose first-order condition is $1/x_i=1/G$:

$$g_i=\max\Big\{0,\ \tfrac12\,(w_i-G_{-i})\Big\},\qquad x_i=G \text{ whenever } g_i>0.$$

*In words:* a contributor splits his wealth plus what others give evenly between himself and the public good, and gives only if he is richer than the total $G$.

Here the marginal rate of substitution is $\mathrm{MRS}_i=x_i/G$. Each contributor sets his own $\mathrm{MRS}_i=1$, while the [Samuelson rule](../reference.md#samuelson-rule) of [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md) asks $\sum_i \mathrm{MRS}_i=1$: the underprovision of grad-micro, now with income effects.

**Equilibrium.** Let $C$ be the set of contributors, $k$ their number and $W_C=\sum_{i\in C}w_i$ their total wealth. Summing $g_i=w_i-G$ over $C$ gives $G=P+W_C-kG$:

$$G=\frac{P+W_C}{k+1},\qquad C=\{\,i: w_i>G\,\}.$$

*In words:* only contributors' wealth matters, and the set must be self-consistent: everyone inside is richer than $G$, everyone outside is not. Bergstrom, Blume and Varian (1986, *Journal of Public Economics*) show that when both goods are normal the Nash equilibrium exists and is unique, contributors are the richest (with identical preferences), and they derive the comparative statics below in general.

**Warr neutrality.** Warr (1983, *Economics Letters*): any redistribution among contributors that leaves each of them a contributor leaves $G$ and every $x_i$ unchanged. *In words:* the equilibrium depends on the contributors' wealth only through the total $W_C$, so reshuffling it is undone by changed gifts. This is [Warr neutrality](../reference.md#warr-neutrality). It needs no functional form: with any preferences each contributor's optimum ties his demand for $G$ to his wealth plus $G_{-i}$, and those sums don't move.

**Crowding out.** Government provision $P$ financed by lump-sum taxes on contributors, each tax smaller than that person's gift, is a redistribution of the same kind: $G$ is unchanged and private giving falls by exactly $P$. This is one-for-one [crowding out](../reference.md#crowding-out), the result Roberts (1984, *Journal of Political Economy*) used to argue that public welfare spending displaces private charity.

**Where neutrality fails.**

1. *Crossing the boundary.* Money moved from a contributor to a non-contributor lowers $W_C$; with log utility $G$ falls by $1/(k+1)$ per dollar. Money moved the other way raises $G$. Financing $P$ by taxing non-contributors raises $G$ and crowds out only $k/(k+1)$ per dollar. With quasilinear utility $u_i=x_i+\theta_i\ln G$, none of this happens: a contributor wants $G=\theta_i$ whatever his wealth, so income cannot move $G$ at all (as long as the contributor can still afford his share).
2. *Warm glow.* Andreoni (1990, *Economic Journal*) lets the gift itself enter utility, $u_i(x_i,G,g_i)$: people enjoy giving, not only the total. Now a dollar of $P$ is not a perfect substitute for a dollar of one's own gift, so crowd-out is partial and neutrality fails. This is [warm glow](../reference.md#warm-glow).

## Picture

![Public good G against person 1's share of total wealth 90, for two people with log utility. G is 45 at either extreme, falls linearly to 30 at shares one third and two thirds, and is flat at 30 in the shaded middle band where both contribute. Point A sits in the band at G 30. Point B at share 0.8 has G 36; an arrow moves it to B-prime at share 0.7 with G 31.5. A dashed quasilinear line is flat at 30 everywhere](assets/01-02-fig1.svg)

Inside the shaded band both people give and redistribution does nothing (Warr). Outside it only the richer person gives, and $G$ rises with his wealth, so equalizing wealth *lowers* provision. The dashed quasilinear line never moves.

## Worked examples

**Example 1 (clean): two donors, total wealth 90.** Log utility, $P=0$.

- *Wealth (50, 40).* Try $C=\{1,2\}$: $G=90/3=30$, and both have $w_i>30$, so it is consistent. Gifts $g=(20,10)$, $x=(30,30)$. This is point A.
- *Warr transfer: 5 from person 1 to 2, wealth (45, 45).* $G=90/3=30$ again, gifts $(15,15)$, $x=(30,30)$. Person 1 gives 5 less, person 2 gives 5 more.
- *Wealth (72, 18), point B.* $C=\{1,2\}$ gives $G=30>18$, inconsistent. $C=\{1\}$: $G=72/2=36$, and $18\le36$, consistent. Person 2 free-rides entirely.
- *Transfer 9 from 1 to 2, wealth (63, 27), point B'.* Still $27\le 63/2$, so $C=\{1\}$ and $G=31.5$. The transfer cut $G$ by $4.5=9/2$: person 2 spends all 9 on himself, and person 1 absorbs his loss of 9 by cutting his gift and his consumption by 4.5 each.
- *Quasilinear contrast.* With $u_i=x_i+30\ln G$ for both, each contributor wants $30/G=1$, so $G=30$ at (72, 18), at (63, 27) and at every split: the transfer changes who pays, never how much is provided.

Point B is what Olson called the "exploitation of the great by the small": the poorer person consumes the public good free, and the richer one carries it.

**Example 2 (why you'd care): a government grant.** Start at (50, 40). The government taxes each person 5 and provides $P=10$. Now wealth is (45, 35) and $G=(10+80)/3=30$, gifts $(15,5)$. Private giving fell from 30 to 20, exactly the grant: full crowd-out, and nothing gained.

Now add warm glow to a single donor with wealth 90: $u=\ln x+\ln G+\ln g$. At $P=0$ the first-order condition $1/x=1/G+1/g$ with $G=g$ gives $x=30$, $g=60$. A small grant $dP$, taxed from this donor, changes the gift by (implicit differentiation, all evaluated at the optimum)

$$-\frac{dg}{dP}=\frac{1/x^2+1/G^2}{1/x^2+1/G^2+1/g^2}=\frac{1/900+1/3600}{1/900+2/3600}=\frac{5}{6}.$$

*In words:* each grant dollar displaces 83 cents, not a dollar, so $G$ rises by 17 cents. Without the warm-glow term the ratio is 1. Warm glow also breaks Warr: two such donors (each with $u=\ln x+\ln G+\ln g$) with wealth (50, 40) provide $G\approx54.08$, and at (45, 45) provide $G=54$.

Empirically, measured crowd-out of government grants to charities is typically well below one-for-one, and part of it is charities cutting their own fundraising rather than donors cutting gifts. That is consistent with warm glow, but a partial estimate alone cannot tell warm glow apart from contributor-set effects.

## Watch out

- **You might think Warr neutrality says redistribution never matters, but actually it covers only transfers among people who remain contributors.** A transfer to a non-contributor lowers $G$ whenever $G$ is a normal good.
- **You might think the flatness of the quasilinear case is neutrality, but actually it is the absence of income effects.** Under $x_i+\theta_i\ln G$ any transfer leaves $G$ unchanged, across the boundary too. Name the right reason.
- **You might think full crowd-out makes public provision useless, but actually it makes provision *up to current giving* useless.** Once $P$ exceeds what contributors would give, they stop giving and every further dollar raises $G$.
- **You might think a grant financed by non-contributors is neutral, but actually it is a boundary-crossing transfer.** It raises $G$, and giving falls only by $k/(k+1)$ per dollar.

## One-liner

> Private gifts adjust to undo any reshuffle among the people who give, including the government's own grant; only money that crosses the edge of the contributor set, or givers who enjoy giving, can change how much gets provided.

## Problems

**P1 (🟢) *(Formal.)*** Three invented neighbors fund a shared playground. Each has $u_i=\ln x_i+\ln G$, one unit of $G$ costs one unit of wealth, and wealth is $w=(50,34,12)$. (a) Find the Nash equilibrium: the contributor set, $G$, and each gift. Check that the set is self-consistent. (b) A charity drive moves 6 from neighbor 1 to neighbor 2. Find the new gifts and $G$.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Same economy, starting from $w=(50,34,12)$. (a) Instead, 10 is moved from neighbor 2 to neighbor 3. Find the new contributor set and $G$. (b) Instead, the town taxes neighbor 3 a lump sum of 6 and spends it on the playground ($P=6$). Find $G$, total private giving, and the crowd-out per dollar of $P$. Compare with taxing neighbors 1 and 2 by 3 each. (c) Why does crowd-out differ between the two financing schemes in (b)? Two sentences.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** A single donor with wealth 60 has $u=\ln x+\ln G+\tfrac12\ln g$, where $g$ is his gift and $G=P+g$. (a) At $P=0$ find his gift, then the crowd-out $-dg/dP$ from a small grant financed by a lump-sum tax on him. (b) Two such donors split wealth 60 as (40, 20) or as (30, 30). Explain in at most three sentences why Warr neutrality fails for them, and which assumption of Warr's theorem is the one violated.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Try everyone: $G=96/4=24$, but $w_3=12\le24$, inconsistent. Try $C=\{1,2\}$: $G=(50+34)/3=28$. Consistent: $50>28$, $34>28$, and $12\le28$. Gifts $g_i=w_i-G$: $(22,6,0)$, so $x=(28,28,12)$ and $G=28$. (Neighbor 3's best response is $\max\{0,(12-28)/2\}=0$.)

(b) Wealth is $(44,40,12)$, still with $44>28$ and $40>28$, so $C=\{1,2\}$ and $G=84/3=28$. Gifts $(16,12,0)$. Neighbor 1 gives 6 less, neighbor 2 gives 6 more: Warr neutrality.

**Wrong turns:** using all three wealths, $G=96/4=24$, without checking that neighbor 3 would actually give; concluding that neighbor 2's consumption rises, when every contributor ends with $x_i=G=28$.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Wealth $(50,24,22)$. $C=\{1,2\}$ gives $G=74/3\approx24.7>24$, inconsistent. $C=\{1\}$ gives $G=25$, and $24\le25$, $22\le25$: consistent. Neighbor 2 drops out, and $G$ falls from 28 to 25.

(b) Neighbor 3 pays: wealth $(50,34,6)$ with $P=6$, and $C=\{1,2\}$ gives $G=(6+84)/3=30$ (consistent: $50,34>30\ge6$). Gifts $(20,4,0)$, private giving 24, down from 28, so crowd-out is $4/6=2/3$ per dollar, which is $k/(k+1)$ with $k=2$. Neighbors 1 and 2 pay 3 each: wealth $(47,31,12)$, $G=(6+78)/3=28$, gifts $(19,3,0)$: private giving falls from 28 to 22, full crowd-out, $G$ unchanged.

**Must hit, strict (c):**

- Taxing contributors (each tax below his gift) is a reshuffle within the contributor set, so Warr neutrality applies and giving falls one-for-one.
- Taxing a non-contributor moves wealth into the contributor set (via $P$), raising $P+W_C$; with log utility contributors pass only $1/(k+1)$ of it into $G$ and cut giving by the rest.

**Wrong turns:** assuming every grant crowds out one-for-one regardless of who is taxed; in (a), keeping neighbor 2 as a contributor and reporting $G\approx24.7$ without the consistency check.

**Model answer (c):** Taxing neighbors 1 and 2 only reallocates contributors' wealth into the playground, which they had already been buying, so they cut gifts by exactly 6 and $G$ is unchanged. Taxing neighbor 3 brings a non-contributor's money into the contributor set, so $G$ rises by $6/3=2$ and gifts fall by only $4$.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) First-order condition: $1/x=1/G+\tfrac12\cdot 1/g$. At $P=0$, $G=g$, so $1/x=\tfrac32\cdot1/g$, giving $g=1.5x$ and $x+g=60$: $x=24$, $g=36$. Implicit differentiation of the condition with $x=60-P-g$ and $G=P+g$:

$$-\frac{dg}{dP}=\frac{1/x^2+1/G^2}{1/x^2+1/G^2+\tfrac12\cdot1/g^2}=\frac{1/576+1/1296}{1/576+1.5/1296}=\frac{13}{15}\approx0.87.$$

Each grant dollar displaces about 87 cents, more than the 83 cents in Example 2's case with a stronger warm glow: the weaker the warm glow, the closer to one-for-one.

**Must hit, strict (b):**

- Warr's theorem needs each person's utility to depend on others' gifts only through the total $G$; here $g_i$ enters on its own.
- A transfer from donor 1 to donor 2 cannot be undone by a matching change in gifts, because that change would alter each donor's own-gift utility; so $G$ changes. (Numerically, $G\approx30.73$ at (40, 20) and $G=30$ at (30, 30); not required.)

**Wrong turns:** blaming the contributor boundary, when both donors give positive amounts in both splits; saying warm glow makes crowd-out zero, when here it is 87 percent.

**Model answer (b):** Warr neutrality works because a contributor cares only about the total, so a dollar he gives and a dollar someone else gives are perfect substitutes and gifts can absorb any reshuffle. With warm glow each donor values his own gift directly, so after a transfer the rich donor will not cut his gift one-for-one and the poor donor will not raise his one-for-one, and $G$ moves. The violated assumption is that utility depends on contributions only through their sum, which is pure altruism.

</details>

## Connections

- **Backward:** the equilibrium is [`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md)'s voluntary Nash provision with income effects, a Nash equilibrium in the sense of [`grad-game-theory` 2.2](../../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md); the efficiency benchmark it misses is [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md)'s Samuelson rule, which with income effects also depends on distribution.
- **Forward:** if giving cannot reveal or fund the right $G$, the government must learn valuations another way: [1.3](01-03-revealing-demand-for-public-goods.md). The same neutrality predicts that a lump-sum grant to a town is spent like the town's own income, and the flypaper effect of [8.2](08-02-assignment-spillovers-and-grants.md) is the empirical failure of that prediction.
- **Sideways:** Warr neutrality is Ricardian equivalence in another costume. Both need an *interior* choice (a positive gift, an operative bequest) that absorbs the transfer; see [`grad-macro` 3.4](../../grad-macro/lessons/03-04-social-security-transfers.md), where equivalence fails at the zero-bequest corner exactly as neutrality fails at the edge of the contributor set. [`political-economy` 3.2](../../political-economy/lessons/03-02-olsons-logic-of-collective-action.md) cites this lesson's contributor-set result for Olson's logic of collective action, and the free rider of [`ethics` 2.2](../../ethics/lessons/02-02-the-formula-of-universal-law.md) is the non-contributor here; whether free riding wrongs anyone is that course's question, not this one's.

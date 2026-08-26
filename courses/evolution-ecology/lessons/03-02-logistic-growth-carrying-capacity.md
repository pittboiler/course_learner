# Evolution & Ecology · Lesson 3.2: Logistic growth & carrying capacity

> ⏱ ~15 min · Module 3: Population Ecology · Builds on: [3.1](03-01-exponential-growth-demography.md) · Unlocks: 3.3 (life histories & trade-offs)

## Why this matters

[3.1](03-01-exponential-growth-demography.md) established that exponential growth is the null and that nothing can sustain it. This lesson supplies the simplest thing that stops it, and the result is one equation that does an unreasonable amount of work: it produces the S-curve seen in real populations, it locates the point of maximum harvest, and — read as a management prescription — it has repeatedly and catastrophically failed.

**The failure is the most useful part.** Maximum sustainable yield is derived directly from the logistic equation, was adopted as the organizing principle of twentieth-century fisheries management, and presided over the collapse of the Grand Banks cod, the Peruvian anchoveta and several whale populations. **Understanding exactly which assumption fails, and why the failure is structural rather than a matter of bad estimation, is a better lesson in mathematical modelling than any success would be.**

## The idea

**Make the per-capita growth rate decline with density.** In [3.1](03-01-exponential-growth-demography.md), $r$ was constant. Suppose instead that crowding reduces it linearly, reaching zero at a density $K$:

$$\text{per-capita rate} = r\left(1 - \frac{N}{K}\right)$$

$$\boxed{\;\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right)\;}$$

**$K$ is the carrying capacity** — the density at which births balance deaths and growth stops.

*In words: the population grows at rate $r$ when rare and at rate zero when it reaches $K$, with a straight line in between.* The bracket is the fraction of "unused capacity" remaining.

**Read the equation as two factors multiplied**, because that is where the S-curve comes from:

$$\underbrace{rN}_{\text{more individuals}\atop\text{= more growth}} \times \underbrace{\left(1-\frac{N}{K}\right)}_{\text{more crowding}\atop\text{= less growth}}$$

At low $N$ the first factor is small; at high $N$ the second is small. **The product is maximized in between**, and that is the inflection point of the S-curve.

**Density dependence is the mechanism.** Concretely, crowding reduces growth through competition for food, space or light; through increased disease transmission; through increased predation or parasitism; and through behavioural effects such as territoriality. **Density-*independent* factors — weather, fire, floods — also kill, but they cannot regulate**, because they kill the same *proportion* regardless of density and therefore cannot produce an equilibrium.

$$\textbf{Only density-dependent mortality can regulate a population; density-independent mortality only perturbs it.}$$

**Maximum sustainable yield.** If growth is fastest at $N = K/2$, then a harvested population held at $K/2$ replaces the most individuals per unit time — so the maximum harvest rate is the growth rate there.

**And here is the structural problem.** $N = K/2$ is the point where $dN/dt$ is at its **maximum**, so it is the point where the growth curve is **flattest**. A small error in estimating $K$, or a small overharvest, moves the population to where growth is *lower*, which requires reducing the harvest, which nobody does — and the population slides down the left side of the curve toward zero.

$$\textbf{MSY is a maximum, and every maximum is a place where you cannot tell which way is up.}$$

**The Allee effect makes it far worse.** The logistic assumes per-capita growth is *highest* when the population is rarest. For many species the opposite is true at low density — they cannot find mates, cannot mount group defence, cannot form a viable school or herd. **Below a critical density, per-capita growth goes negative**, and the population collapses to extinction on its own.

## The formal version

**The solution.** Integrating the logistic (a separable equation, [calc-refresher 2.2](../../calc-refresher/lessons/02-02-integration-techniques.md)):

$$\boxed{\;N(t) = \frac{K}{1 + \left(\dfrac{K - N_0}{N_0}\right)e^{-rt}}\;}$$

*In words: an S-shaped approach to $K$, starting near-exponentially and decelerating.* As $t\to\infty$, $N \to K$; at small $t$ with $N \ll K$, it reduces to $N_0e^{rt}$.

**Equilibria and their stability.** Set $dN/dt = 0$:

$$rN\left(1-\frac{N}{K}\right) = 0 \;\Longrightarrow\; N = 0 \ \text{or}\ N = K.$$

Differentiate the growth function $f(N) = rN(1-N/K)$:

$$f'(N) = r - \frac{2rN}{K}, \qquad f'(0) = r > 0 \ (\textbf{unstable}), \qquad f'(K) = -r < 0 \ (\textbf{stable}).$$

*In words: $N = 0$ is a repeller and $N = K$ is an attractor* — perturb the population from $K$ and it returns, at a rate set by $r$ ([dynamical-systems 1.2](../../dynamical-systems/syllabus.md)).

**The inflection point.** Maximize $dN/dt$ by differentiating and setting to zero:

$$\frac{d}{dN}\left[rN - \frac{rN^{2}}{K}\right] = r - \frac{2rN}{K} = 0 \;\Longrightarrow\; \boxed{\;N^{*} = \frac{K}{2}\;}$$

$$\left.\frac{dN}{dt}\right|_{\max} = r\left(\frac{K}{2}\right)\left(1 - \frac12\right) = \boxed{\;\frac{rK}{4}\;}$$

**Symmetry of the S-curve.** $dN/dt$ is a downward parabola in $N$, symmetric about $K/2$. Since the growth rate at $N$ and at $K - N$ are equal, **the time to grow from $a$ to $K/2$ equals the time to grow from $K/2$ to $K-a$.** The S-curve has rotational symmetry about its inflection point — a fact worth knowing because it lets you answer timing questions without integrating.

**Maximum sustainable yield, formally.** Harvest at a constant rate $H$:

$$\frac{dN}{dt} = rN\left(1-\frac{N}{K}\right) - H$$

Equilibria are where the parabola meets the horizontal line $H$. For $H < rK/4$ there are **two**: a stable one on the right and an **unstable** one on the left. As $H$ rises they converge, meeting at $N = K/2$ when $H = rK/4$, and for $H > rK/4$ **there is no equilibrium at all** and the population goes to zero.

$$\textbf{MSY sits exactly at a saddle-node bifurcation.}$$

That is the precise statement of the problem. At $H = \mathrm{MSY}$ the stable and unstable equilibria have merged, so **the stable equilibrium is only marginally stable** — a perturbation to the left is not corrected, and the population slides to extinction. And a harvest even slightly above MSY has no equilibrium whatever ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)).

**Proportional harvesting is safer.** Take a fixed *fraction* $h$ rather than a fixed number:

$$\frac{dN}{dt} = rN\left(1-\frac{N}{K}\right) - hN = N\left[(r-h) - \frac{rN}{K}\right]$$

giving a stable equilibrium at $\hat N = K(1 - h/r)$ that declines smoothly as $h$ rises and **hits zero only at $h = r$**. There is no bifurcation and no cliff. **This is why modern management uses harvest *rates* rather than quotas**, and it is a direct consequence of the stability analysis.

**Allee effects, formally.** Add a critical density $A$:

$$\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right)\left(\frac{N}{A} - 1\right)$$

Now $N = A$ is an **unstable** equilibrium: below it, $dN/dt < 0$ and the population declines to extinction on its own. **$A$ is an extinction threshold**, and it means a population can be doomed while still containing many individuals.

## Picture

![Left: the logistic S-curve of N against time approaching K asymptotically, with the inflection point marked at K over 2 and the early portion shown coinciding with an exponential curve. Centre: the growth rate dN/dt plotted against N as a downward parabola peaking at K over 2 with height rK over 4, with a horizontal harvest line intersecting it at two points, the right one labelled stable and the left unstable, and arrows showing the two converging as the harvest rises to MSY. Right: the same parabola modified by an Allee effect, dipping below zero at low N, with the critical density A marked as an unstable extinction threshold.](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — the full logistic toolkit).** A reintroduced population of 40 animals grows logistically toward $K = 500$ with $r = 0.3\ \mathrm{yr}^{-1}$. (a) At what size is the number added per year maximized, and what is that maximum? (b) How long to reach 250? (c) Use the S-curve's symmetry to find the time from 250 to 460, without integrating.

(a) $$N^{*} = \frac{K}{2} = \mathbf{250\ \text{animals}}, \qquad \left.\frac{dN}{dt}\right|_{\max} = \frac{rK}{4} = \frac{0.3 \times 500}{4} = \mathbf{37.5\ \text{animals per year}}.$$

(b) Solve the logistic solution for $t$ at $N = 250$:

$$250 = \frac{500}{1 + \left(\frac{500-40}{40}\right)e^{-0.3t}} \;\Longrightarrow\; 1 + 11.5e^{-0.3t} = 2 \;\Longrightarrow\; e^{-0.3t} = \frac{1}{11.5}$$

$$t = \frac{\ln 11.5}{0.3} = \frac{2.4423}{0.3} = \mathbf{8.14\ \text{years}}.$$

(c) **By symmetry.** $dN/dt$ is symmetric about $K/2 = 250$, so the growth rate at $N$ equals the growth rate at $500 - N$. The interval from 250 to 460 is the mirror image of the interval from 40 to 250:

$$500 - 460 = 40, \qquad 500 - 250 = 250 .$$

**So the time from 250 to 460 equals the time from 40 to 250 — $\mathbf{8.14}$ years**, with no integration required.

**Verify it directly:**

$$460 = \frac{500}{1 + 11.5e^{-0.3t}} \;\Longrightarrow\; 1 + 11.5e^{-0.3t} = 1.08696 \;\Longrightarrow\; e^{-0.3t} = 0.0075614$$

$$t = \frac{\ln(1/0.0075614)}{0.3} = \frac{4.8850}{0.3} = 16.28\ \text{years}.$$

$$16.28 - 8.14 = \mathbf{8.14} \ \checkmark$$

**The symmetry is exact**, and it generalizes: the time from $a$ to $K/2$ always equals the time from $K/2$ to $K - a$.

**Example 2 (why you'd care — why maximum sustainable yield destroyed fisheries).** A fish stock has $r = 0.5\ \mathrm{yr}^{-1}$ and $K = 1{,}000{,}000$ tonnes. (a) Compute MSY and the biomass at which it occurs. (b) Managers set a quota at MSY, but $K$ has actually declined 20 percent due to habitat degradation. Analyse what happens. (c) Explain why the failure is structural rather than a matter of better estimation, and what management should do instead.

(a) $$N^{*} = \frac{K}{2} = \mathbf{500{,}000\ \text{tonnes}}, \qquad \mathrm{MSY} = \frac{rK}{4} = \frac{0.5 \times 10^{6}}{4} = \mathbf{125{,}000\ \text{tonnes per year}}.$$

(b) The true carrying capacity is $K' = 800{,}000$ tonnes, so the true maximum sustainable yield is

$$\mathrm{MSY}' = \frac{rK'}{4} = \frac{0.5 \times 800{,}000}{4} = 100{,}000\ \text{tonnes/yr}.$$

**The quota of 125,000 exceeds the true MSY of 100,000 by 25 percent.** Now look at what that means dynamically:

$$\frac{dN}{dt} = 0.5N\left(1 - \frac{N}{800{,}000}\right) - 125{,}000$$

The maximum of the growth term is 100,000, which is **less than the harvest of 125,000**. So $dN/dt < 0$ **for every value of $N$** — there is no equilibrium anywhere.

$$\textbf{The population declines monotonically to zero, and no biomass level can sustain the quota.}$$

Worse, the decline **accelerates** as $N$ falls below 400,000, because growth falls while the harvest stays fixed. At $N = 200{,}000$: growth is $0.5(200{,}000)(0.75) = 75{,}000$ against a harvest of 125,000, so the net loss is 50,000 tonnes per year and rising.

**And the observable signal is perverse.** Catch remains at 125,000 tonnes per year right up until the stock cannot supply it — **the catch statistics look stable while the stock collapses**, because the quota is being met by fishing harder on a smaller stock. This is exactly what the Grand Banks cod data show: high, steady landings through the 1980s, then collapse in 1992 and no recovery in the thirty years since.

(c) **The failure is structural for three compounding reasons:**

**1. MSY sits at a bifurcation.** From the formal section, at $H = rK/4$ the stable and unstable equilibria have merged. **A management target placed exactly at a saddle-node is a target with zero safety margin by construction** — any overestimate of $K$ or $r$, any environmental downturn, any unreported catch pushes the system past the bifurcation, and past it there is no equilibrium to return to.

**2. The estimates are uncertain and biased in the dangerous direction.** $K$ and $r$ are estimated from catch data — which come from fishing boats, which fish where the fish are. **Catch per unit effort therefore stays high as a stock contracts into refuges**, systematically overestimating abundance. The data source is biased toward complacency exactly when caution is needed.

**3. The logistic model itself is wrong in ways that matter at low density.** It assumes per-capita growth is highest when rare. Real fish stocks have **Allee effects** — schooling species cannot find mates or evade predators at low density — so below a threshold the true growth is *negative* where the logistic predicts it is maximal. The model is least accurate exactly in the region where the population ends up.

**What management should do instead**, and much of this is now practice:

- **Harvest a fixed proportion, not a fixed quota.** From the formal section, proportional harvesting has a stable equilibrium at $K(1-h/r)$ that declines smoothly with no bifurcation. The quota then falls automatically as the stock falls, which is precisely the feedback a fixed quota lacks.
- **Target well below MSY.** Setting $H$ at 60 to 80 percent of estimated MSY keeps the two equilibria well separated and leaves a genuine margin.
- **Use biomass reference points with hard limits.** Modern frameworks specify a target biomass and a **limit** below which fishing stops entirely.
- **Manage for the ecosystem, not the species.** $K$ is not a constant — it depends on prey, predators, habitat and climate, all of which change ([4.4](04-04-ecosystems-energy-nutrients.md)).

**The general modelling lesson, which is the real point:** a model can be a perfectly good *description* and a disastrous *prescription*. The logistic describes constrained growth well. Optimizing against it puts the system at the one point where the model's own stability vanishes — and **any optimum located at a bifurcation is a management target you should refuse.**

## Watch out

- **You might think $K$ is a fixed property of a habitat.** It depends on climate, on other species, and on the population's own effects on its resources. Treating it as constant is the most common source of error in applying the model.
- **You might treat density-independent mortality as regulation.** Weather kills the same *proportion* at any density and cannot produce an equilibrium. Only **density-dependent** mortality regulates.
- **You might read $K/2$ as a safe target.** It is a **maximum**, hence a flat point, hence a bifurcation. Optimizing to a bifurcation removes all margin.
- **You might assume per-capita growth is highest when a population is rarest.** Allee effects reverse this below a threshold, and the threshold is an extinction boundary that the logistic model contains no representation of.
- **You might read stable catch statistics as a stable stock.** Catch per unit effort stays high as a stock contracts into refuges. **Landings are a measure of fishing, not of fish.**
- **You might expect a collapsed population to recover when harvesting stops.** Grand Banks cod has not, thirty years on — Allee effects, an altered ecosystem, and a changed $K$ can all prevent it.

## One-liner

> One equation gives the S-curve, the equilibrium at $K$, and the maximum growth at $K/2$ — and because that maximum is a saddle-node bifurcation, maximum sustainable yield is a management target with zero safety margin by construction.

## Problems

**P1 (🟢)** A population grows logistically with $r = 0.4\ \mathrm{yr}^{-1}$ and $K = 2000$. (a) At what $N$ is $dN/dt$ maximal, and what is that maximum? (b) Compute $dN/dt$ at $N = 200$ and at $N = 1800$, and comment on the comparison. (c) What is $dN/dt$ at $N = 2000$?

**P2 (🟡)** A population starts at $N_0 = 100$ with $K = 5000$ and $r = 0.25\ \mathrm{yr}^{-1}$. (a) How long to reach 2500? (b) Use symmetry to find the time from 2500 to 4900. (c) Compute the total time from 100 to 4900 and compare it with the time an exponential population with the same $r$ would take to go from 100 to 4900.

**P3 (🔴, bridges to 4.5 and to management)** A whale population has $r = 0.06\ \mathrm{yr}^{-1}$, $K = 20{,}000$, and an Allee threshold at $A = 2000$ below which per-capita growth is negative. (a) Compute MSY and the biomass at which it occurs. (b) Whaling reduced the population to 3000. Assuming harvesting stops entirely, estimate how long recovery to $K/2$ takes. (c) A proposal permits a harvest of 200 whales per year starting now, at $N = 3000$. Analyse whether this is sustainable, and explain what the Allee threshold adds to your answer that the plain logistic would miss.

<details>
<summary>Solutions</summary>

**P1 (a)** $$N^{*} = \frac{K}{2} = \mathbf{1000}, \qquad \left.\frac{dN}{dt}\right|_{\max} = \frac{rK}{4} = \frac{0.4 \times 2000}{4} = \mathbf{200\ \text{per year}}.$$

**(b)** $$\left.\frac{dN}{dt}\right|_{200} = 0.4(200)\left(1 - \frac{200}{2000}\right) = 80(0.9) = \mathbf{72\ \text{per year}}.$$

$$\left.\frac{dN}{dt}\right|_{1800} = 0.4(1800)\left(1 - \frac{1800}{2000}\right) = 720(0.1) = \mathbf{72\ \text{per year}}.$$

**They are identical**, and that is the symmetry: $200$ and $1800$ are equidistant from $K/2 = 1000$, and $dN/dt$ is a parabola symmetric about that point. The population grows at the same absolute rate when it is nearly empty and when it is nearly full — for opposite reasons.

**(c)** $$\left.\frac{dN}{dt}\right|_{2000} = 0.4(2000)\left(1 - \frac{2000}{2000}\right) = 800 \times 0 = \mathbf{0}.$$

$N = K$ is the stable equilibrium.

**P2 (a)** $$2500 = \frac{5000}{1 + \left(\frac{5000-100}{100}\right)e^{-0.25t}} \;\Longrightarrow\; 1 + 49e^{-0.25t} = 2 \;\Longrightarrow\; e^{-0.25t} = \frac{1}{49}$$

$$t = \frac{\ln 49}{0.25} = \frac{3.8918}{0.25} = \mathbf{15.57\ \text{years}}.$$

**(b)** By symmetry: $5000 - 4900 = 100$, and $5000 - 2500 = 2500$. So the interval from 2500 to 4900 mirrors the interval from 100 to 2500:

$$\mathbf{15.57\ \text{years}}.$$

**(c)** $$\text{total} = 15.57 + 15.57 = \mathbf{31.1\ \text{years}}.$$

*Exponential comparison.* With $r = 0.25$ and no ceiling:

$$4900 = 100\,e^{0.25t} \;\Longrightarrow\; t = \frac{\ln 49}{0.25} = \mathbf{15.57\ \text{years}}.$$

**The logistic population takes exactly twice as long** — 31.1 years against 15.6.

The reason is worth stating. Over the first half the two are nearly identical, because $N \ll K$ and the bracket is close to 1. All the extra time is spent in the second half, where crowding progressively brakes the growth. **The logistic is exponential until it is not**, and the "not" costs as much time as the whole of the exponential phase.

*(The exact coincidence that the exponential time equals the first-half logistic time is a feature of these numbers — $N_0/K = 1/50$ and the target being $K/2$ — not a general identity.)*

**P3 (a)** $$N^{*} = \frac{K}{2} = \mathbf{10{,}000\ \text{whales}}, \qquad \mathrm{MSY} = \frac{rK}{4} = \frac{0.06 \times 20{,}000}{4} = \mathbf{300\ \text{whales per year}}.$$

**(b)** Recovery from $N_0 = 3000$ to $N = 10{,}000$, using the logistic solution:

$$10{,}000 = \frac{20{,}000}{1 + \left(\frac{20{,}000 - 3000}{3000}\right)e^{-0.06t}} \;\Longrightarrow\; 1 + 5.667e^{-0.06t} = 2 \;\Longrightarrow\; e^{-0.06t} = \frac{1}{5.667}$$

$$t = \frac{\ln 5.667}{0.06} = \frac{1.7346}{0.06} = \mathbf{28.9\ \text{years}}.$$

**Nearly thirty years to recover to half of carrying capacity, with no harvesting at all.** The low $r$ is the reason — whales have long generation times and low fecundity ([3.3](03-03-life-histories-tradeoffs.md)), so the same equation that gives a rodent a two-year doubling time gives a whale a twelve-year one.

**(c) The plain logistic analysis.** At $N = 3000$:

$$\left.\frac{dN}{dt}\right|_{3000} = 0.06(3000)\left(1 - \frac{3000}{20{,}000}\right) = 180(0.85) = 153\ \text{whales/year}.$$

**The proposed harvest of 200 exceeds the current growth of 153**, so the population would decline immediately. Even on the plain logistic, the proposal fails.

Setting $dN/dt = 0$ with $H = 200$ gives $0.06N(1 - N/20{,}000) = 200$, whose roots are:

$$0.06N - 3\times10^{-6}N^{2} = 200 \;\Longrightarrow\; 3\times10^{-6}N^{2} - 0.06N + 200 = 0$$

$$N = \frac{0.06 \pm \sqrt{0.0036 - 0.0024}}{6\times10^{-6}} = \frac{0.06 \pm 0.03464}{6\times10^{-6}} \;\Longrightarrow\; N = 4227 \ \text{or}\ 15{,}773 .$$

So there **is** an equilibrium at 15,773 (stable) and one at 4227 (unstable) — but the population is at 3000, **below the unstable equilibrium**. It is on the wrong side, and it declines to zero.

**What the Allee threshold adds, and this is the part the plain logistic misses entirely:**

The Allee threshold is at $A = 2000$. Under the plain logistic, a population reduced to 1000 would still grow — slowly, but positively — and would eventually recover if left alone. With the Allee effect, **any population below 2000 declines to extinction regardless of protection.**

So the proposal is worse than merely unsustainable. Starting at 3000 and losing at least 47 whales per year (200 harvested minus 153 grown, and the deficit widens as $N$ falls), the population reaches the Allee threshold in roughly

$$\frac{3000 - 2000}{\sim 60\ \text{per year average}} \approx 17\ \text{years},$$

after which **the outcome is extinction even if all harvesting stops immediately.**

$$\textbf{The harvest does not merely reduce the population; it pushes it past a point of no return.}$$

**Three general points this illustrates:**

1. **A model without an Allee effect systematically understates extinction risk**, because it says every population above zero can recover. Real small populations often cannot.
2. **The unstable equilibrium is the number that matters for management**, not the stable one. A population above it recovers; below it, it does not — and the plain logistic's unstable equilibrium at 4227 is already above the current 3000.
3. **Recovery times for low-$r$ species are measured in decades to centuries**, so a harvesting decision made in one year commits several human generations. This is the quantitative case behind the 1986 commercial whaling moratorium, and behind the fact that several great whale populations remain below 10 percent of pre-whaling levels today.

</details>

## Flashback

**From Lesson 3.1 (life tables and $R_0$):** A bird population has this schedule:

| $x$ (yr) | $l_x$ | $m_x$ |
|---|---|---|
| 0 | 1.00 | 0 |
| 1 | 0.40 | 1.5 |
| 2 | 0.25 | 2.0 |
| 3 | 0.10 | 2.0 |
| 4 | 0.00 | — |

(a) Compute $R_0$, $T$ and $r$. (b) Compute the doubling time. (c) Which survivorship type, and how do you tell?

<details>
<summary>Solution</summary>

**(a)**

| $x$ | $l_x$ | $m_x$ | $l_xm_x$ | $x\,l_xm_x$ |
|---|---|---|---|---|
| 0 | 1.00 | 0 | 0 | 0 |
| 1 | 0.40 | 1.5 | 0.60 | 0.60 |
| 2 | 0.25 | 2.0 | 0.50 | 1.00 |
| 3 | 0.10 | 2.0 | 0.20 | 0.60 |
| | | **sum** | $\mathbf{1.30}$ | $\mathbf{2.20}$ |

$$R_0 = \mathbf{1.30}, \qquad T = \frac{2.20}{1.30} = \mathbf{1.69\ \text{years}}, \qquad r \approx \frac{\ln 1.30}{1.69} = \frac{0.2624}{1.69} = \mathbf{0.155\ \text{per year}}.$$

**(b)** $$t_2 = \frac{\ln 2}{r} = \frac{0.693}{0.155} = \mathbf{4.47\ \text{years}}.$$

**(c)** Take logs of $l_x$: $\log(1.00) = 0$, $\log(0.40) = -0.40$, $\log(0.25) = -0.60$, $\log(0.10) = -1.00$.

Successive drops: $-0.40$, $-0.20$, $-0.40$. The steepest drop is in the first year, then it eases and steepens again — **broadly Type III with a hint of Type II** in the middle.

**How you tell in general:** plot $\log l_x$ against age and look at the *shape*, not the raw survivorship. A **straight line** is Type II (constant mortality *rate*); **concave** (steep then shallow) is Type III; **convex** (shallow then steep) is Type I. The log transform is essential — on a linear scale all three curves look broadly similar and Type II is not recognizable at all.

</details>

## Connections

- **Backward:** [3.1](03-01-exponential-growth-demography.md)'s exponential growth is the $N \ll K$ limit of this equation, and the $r$ here is the same $r$.
- **Forward:** [3.3](03-03-life-histories-tradeoffs.md) explains why some species have high $r$ and low $K$ and others the reverse; [4.1](04-01-competition-and-the-niche.md) adds a second species to this equation and gets the Lotka–Volterra competition model directly.
- **Sideways:** the stability analysis and the saddle-node at MSY are [dynamical-systems 1.2](../../dynamical-systems/syllabus.md) and [3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md); the logistic solution is a separable ODE from [calc-refresher 2.2](../../calc-refresher/lessons/02-02-integration-techniques.md); the same S-curve describes an allele under weak selection ([1.1](01-01-fitness-quantitative.md)).

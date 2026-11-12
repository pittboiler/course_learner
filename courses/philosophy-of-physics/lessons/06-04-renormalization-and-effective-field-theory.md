# Philosophy of Physics · Lesson 6.4: Renormalization and effective field theory

> ⏱ ~15 min · Module 6: Symmetry, gauge, and quantum fields · Builds on: [6.3](06-03-particles-fields-or-structure.md), [`qft` 6.6](../../qft/lessons/06-06-running-couplings-renormalization-group.md), [`stat-mech` 5.5](../../stat-mech/lessons/05-05-renormalization-group.md) · Unlocks: Boss problem 6 ([syllabus](../syllabus.md))

## Why this matters

In [`qft` 6.5](../../qft/lessons/06-05-regularization-renormalization.md) you hid an infinity inside a coupling nobody can measure and were told it was a triumph. In [`nuclear-particle-physics` 5.1](../../nuclear-particle-physics/lessons/05-01-weak-interaction.md) Fermi's 1934 theory of beta decay turned out to be what the $W$ boson looks like from far away, accurate for decades while wrong about short distances. Our best theories are reliable at their own scales and say so. This lesson asks what such a theory tells us about the world, and which version of quantum field theory a philosopher should interpret.

## The idea

A street map drawn at 1:10,000 shows no bricks. It is not wrong about the streets for that, and its scale bar tells you how far to trust it. An [effective field theory](../reference.md#effective-field-theory) (EFT) is a theory with a scale bar: built to describe physics below some energy $\Lambda$, equivalently at distances longer than about $1/\Lambda$, with whatever happens above $\Lambda$ summarized in a handful of numbers.

The physics is built: [`qft` 6.4](../../qft/lessons/06-04-loops-uv-divergences.md)–6.6 tamed divergences and ran couplings, [`stat-mech` 5.5](../../stat-mech/lessons/05-05-renormalization-group.md) coarse-grained spins into blocks, and [`nuclear-particle-physics` 5.1](../../nuclear-particle-physics/lessons/05-01-weak-interaction.md) matched Fermi's constant to $W$ exchange, $G_F/\sqrt2 = g^2/8M_W^2$. This lesson asks what they mean.

Kenneth Wilson changed the standing of [renormalization](../reference.md#renormalization). On the older view, a theory needing infinitely many counterterms was sick, and renormalizability was required of any acceptable theory. On Wilson's view, averaging over short distances generates every interaction the symmetries allow, but the ones power counting calls [non-renormalizable](../reference.md#non-renormalizable-theory) fade at low energies by powers of $E/\Lambda$. So, on this view, any theory looks renormalizable far below its cutoff, whatever lies above, and renormalizability stops being a certificate and becomes a symptom of distance from $\Lambda$.

Two words need fixing. "Relevant" and "irrelevant" are read toward low energies, as in stat-mech, not in the direction [`qft` 6.6](../../qft/lessons/06-06-running-couplings-renormalization-group.md) runs couplings. And "effective" describes a theory's domain; it is not the verdict "only an effective theory".

## The argument

**D1. Power counting.** With $\hbar = c = 1$ the action is dimensionless, so in four dimensions an interaction built from an operator $\mathcal O_\Delta$ of mass dimension $\Delta$ carries a coupling of mass dimension $4-\Delta$. Write that coupling as $c_\Delta/\Lambda^{\Delta-4}$, with $c_\Delta$ a pure number:

$$\mathcal L_{\text{eff}} = \mathcal L_{\Delta\le 4} + \sum_{\Delta>4}\frac{c_\Delta}{\Lambda^{\Delta-4}}\,\mathcal O_\Delta, \qquad \text{relative effect at energy } E \sim c_\Delta\left(\frac{E}{\Lambda}\right)^{\Delta-4}.$$

*In words:* the higher an interaction's dimension, the more it is suppressed below $\Lambda$. [Relevant and irrelevant](../reference.md#relevant-and-irrelevant-operators): $\Delta<4$ is relevant (a mass term), $\Delta=4$ marginal (a gauge coupling), $\Delta>4$ irrelevant. The non-renormalizable couplings of [`qft` 6.4](../../qft/lessons/06-04-loops-uv-divergences.md), of negative mass dimension, are exactly the irrelevant ones. Fermi's four-fermion interaction has $\Delta = 6$, so $G_F$ has dimension $-2$.

**T1. Wilson's renormalization group** ("Renormalization Group and Critical Phenomena", 1971, building on Leo Kadanoff's block spins, 1966). Integrating out the modes between $\Lambda$ and a lower $\Lambda'$ yields a theory of the same form with changed coefficients. *In words:* a theory is a point in a space of couplings, and changing the scale moves the point. The [renormalization group](../reference.md#renormalization-group) began in QFT, with Ernst Stueckelberg and André Petermann (1953) and Murray Gell-Mann and Francis Low (1954); Wilson's version came from critical phenomena (Nobel Prize, 1982). Its signature result is [universality](../reference.md#universality): systems differing only in irrelevant couplings flow to the same fixed point and share critical exponents ([`stat-mech` 5.4](../../stat-mech/lessons/05-04-critical-exponents-universality.md)). Robert Batterman ("Multiple Realizability and Universality", 2000) reads this as a physical explanation of the multiple realizability of [`philosophy-of-science` 4.5](../../philosophy-of-science/lessons/04-05-reduction-and-emergence.md): it shows why unlike microscopic realizers behave alike.

**T2. [Decoupling](../reference.md#decoupling)** (Thomas Appelquist and James Carazzone, "Infrared Singularities and Massive Fields", 1975). If some particles of mass $M$ are much heavier than the energies $E$ probed, their low-energy effects can be absorbed into the couplings of a theory without them, up to corrections suppressed by powers of $E/M$. *In words:* a low-energy experiment sees heavy physics only through a few numbers and faint corrections. The theorem lets heavy masses grow with couplings fixed; where a mass is large because a coupling is, as for the top quark, heavy effects need not fade.

**[Effective realism](../reference.md#effective-realism)** (Porter Williams, "Scientific Realism Made Effective", 2019; J. D. Fraser, "Renormalization and the Formulation of Scientific Realism", 2018), reconstructed:

**P1.** Our best quantum field theories are effective: they say of themselves that they are reliable only below some $\Lambda$. *In words:* the theories carry their own scale bar.

**P2.** By T1 and T2, what they say well below $\Lambda$ is insensitive to which of a large class of high-energy theories is true. *In words:* the low-energy content would survive many different discoveries about what lies above.

**P3.** A realist should believe what a theory's success depends on and what would survive the replacement of its unknown parts, the divide et impera of [`philosophy-of-science` 5.2](../../philosophy-of-science/lessons/05-02-the-pessimistic-induction-and-selective-realism.md). *In words:* commit to the parts that earn the success.

**∴ C.** Believe what an EFT says about the structures and entities it describes at its own scales, and nothing it says beyond $\Lambda$, such as field values at a point or the bare parameters. *In words:* be a realist with the scale bar attached.

Williams's diagnosis: the standard method interprets a theory as if true at all scales, so it finds the theories physicists use unfit to interpret, a vice of the method rather than the theories. The advertised gain over selective realism is timing: the theory marks its at-risk claims before its successor arrives, as the hindsight objection demanded.

Laura Ruetsche ("Renormalization Group Realism: The Ascent of Pessimism", 2018) replies that the strategy does not disarm the pessimist's sceptical possibilities but makes them retreat a level, where they still carry force. One way to put the worry: P2's robustness is shown across the high-energy theories the framework can represent, and the next theory need not be one of them.

**The [Fraser–Wallace dispute](../reference.md#fraser-wallace-dispute).** Which formulation should be interpreted? Doreen Fraser ("Quantum Field Theory: Underdetermination, Inconsistency, and Idealization", 2009; reply, 2011) answers [algebraic QFT](../reference.md#algebraic-qft) ([6.3](06-03-particles-fields-or-structure.md)). QFT is the project of uniting quantum theory with special relativity; a cutoff breaks Poincaré covariance, and the textbook interaction picture is inconsistent by [Haag's theorem](../reference.md#haags-theorem). Insensitivity to short distances means success underdetermines what happens there, and particle physics has nothing like the atoms that show condensed matter's cutoff is real. David Wallace ("In Defence of Naiveté", 2006; "Taking Particle Physics Seriously", 2011) answers conventional QFT with a cutoff, read through Wilson. The Standard Model is formulated and confirmed there, and so far only conventional QFT makes predictions about interacting systems in four spacetime dimensions. A realist should accept its claim that field degrees of freedom freeze out at short distances, at the latest where gravity enters; granted that, the renormalization group makes the procedure unproblematic. Matthias Egg, Vincent Lam and Andrea Oldofredi (2017) record the concessions. Wallace grants that conventional QFT does not require a cutoff, only that assuming one suffices; Fraser grants that the underdetermination is so far only potential, since no realistic interacting algebraic model exists. Neither takes particles to be fundamental. On their reading the dispute is over what a quantum field theory is.

**Where the argument is weakest.** P2. The strongest objection is Ruetsche's: robustness holds relative to a space of alternatives, and the pessimist needs only possibilities outside it. Non-decoupling and the naturalness failures of Example 2 add cases where low energies feel high ones. The strongest reply is that the realist never claimed completeness: the commitment covers what is robust under every variation the theory flags, and puzzles about parameter values leave the low-energy structures untouched. The realist concedes that robustness is relative to the alternatives surveyed. The critic concedes that EFTs say in advance which of their claims are at risk, as earlier theories did not.

## The picture

![Three horizontal bars on a logarithmic energy axis from a thousandth of a GeV to ten to the twentieth GeV: Fermi theory solid up to the W mass at 80.4 GeV and dashed to its own bound near 293 GeV; the Standard Model solid up to LHC energies and dashed beyond, upper end unknown; general relativity as an effective theory solid up to the Planck mass, 1.22 times ten to the nineteenth GeV, where its expansion fails](assets/06-04-fig1.svg)

Solid where each theory is tested or reliable, dashed to the bound its own power counting sets or to an unknown end; Fermi theory's bound proved loose.

## Worked examples

**Example 1 (clean case: Fermi theory reads its own limits).** At momentum transfer $q \ll M_W$ the $W$ propagator shrinks to a point, giving Fermi's contact interaction with $G_F \approx 1.166\times10^{-5}\ \text{GeV}^{-2}$ ([`nuclear-particle-physics` 5.1](../../nuclear-particle-physics/lessons/05-01-weak-interaction.md)). Now ask what Fermi theory says about itself. Its coupling has dimension $-2$, so its strength at energy $E$ is the pure number $G_F E^2$, which reaches 1 at

$$E \sim G_F^{-1/2} \approx 293\ \text{GeV}.$$

Near there its amplitudes outgrow what unitarity allows, so new physics must appear by a few hundred GeV. The $W$ appeared at $M_W \approx 80.4$ GeV, a factor 0.27 below the bound, because $M_W = g\,2^{-5/4}\,G_F^{-1/2}$ and the weak coupling $g \approx 0.65$ is less than one. Expanding the propagator shows the tower of irrelevant operators:

$$\frac{1}{q^2 - M_W^2} = -\frac{1}{M_W^2}\left(1 + \frac{q^2}{M_W^2} + \frac{q^4}{M_W^4} + \cdots\right).$$

The first term is Fermi's $\Delta = 6$ interaction, the second a $\Delta = 8$ correction suppressed by $(q/M_W)^2$, which reaches 1% only at $q \approx 8$ GeV.

Run effective realism. Fermi theory was right about a four-fermion interaction of strength $G_F$, and wrong that the interaction happens at a point, the claim its own power counting placed beyond its reach. What survived was what was robust, and the theory said in advance where it would fail.

**Example 2 (hard case: gravity).** Newton's constant $G$ has mass dimension $-2$, which is why power counting calls general relativity non-renormalizable ([`qft` 6.5](../../qft/lessons/06-05-regularization-renormalization.md) P3). Read as an EFT (Einstein's action plus every higher-curvature term the symmetries allow), its quantum corrections come in powers of $(E/M_{\text{Pl}})^2$, with the Planck mass $M_{\text{Pl}} \approx 1.22\times10^{19}$ GeV. John Donoghue ("General Relativity as an Effective Field Theory: The Leading Quantum Corrections", 1994) used it to compute the leading, parameter-free quantum correction to the attraction of two masses. At the LHC's 13.6 TeV,

$$\left(\frac{E}{M_{\text{Pl}}}\right)^2 = \left(\frac{1.36\times10^{4}\ \text{GeV}}{1.22\times10^{19}\ \text{GeV}}\right)^2 \approx 1.2\times10^{-30},$$

or about $3\times10^{-29}$ with the reduced Planck mass $M_{\text{Pl}}/\sqrt{8\pi}$. At reachable energies quantum gravity is a minute, well-defined correction.

It strains twice. Near $M_{\text{Pl}}$ (the earliest universe, a black hole's centre) the expansion fails, and the EFT says which questions it cannot answer. And [naturalness](../reference.md#naturalness): an EFT leads one to expect order-one coefficients in units of the cutoff, so relevant parameters such as the vacuum energy ($\Delta = 0$) and the Higgs mass term ($\Delta = 2$) should be near the cutoff's scale unless finely tuned. The observed vacuum energy is far smaller (the $10^{120}$ of [`cosmology` 4.4](../../cosmology/lessons/04-04-dark-energy-cosmic-acceleration.md)), and the Higgs mass far below $M_{\text{Pl}}$ (the hierarchy problem of [`nuclear-particle-physics` 5.5](../../nuclear-particle-physics/lessons/05-05-beyond-standard-model.md)). (This naturalness concerns coefficients, not the natural properties of [`metaphysics` 1.3](../../metaphysics/lessons/01-03-universals-the-realists-case.md).) Here the account stops. The effective realist says the framework stands and the values are facts to explain or accept, as the brute-fact view treats the past hypothesis in [5.5](05-05-is-the-past-hypothesis-enough.md). The critic says two failed expectations show the picture of separated scales is incomplete. Gravity is also Wallace's reason to expect a cutoff at all; Fraser replies that it is not evidence of the kind atoms were.

## Watch out

- **You might think** "renormalizable" means "true" or "fundamental", **but actually** on the Wilsonian view it is what any theory looks like far below its cutoff. Fermi theory and gravity are non-renormalizable and accurate where we use them.

- **You might think** "effective" means inconsistent above $\Lambda$, **but actually** it claims a domain. QED's coupling grows toward a Landau pole and signals its own limit; QCD is [asymptotically free](../reference.md#asymptotic-freedom) and may be consistent at all energies on its own ([`qft` 6.6](../../qft/lessons/06-06-running-couplings-renormalization-group.md)). Calling QCD effective says only that it is not the whole story above some scale (at the latest where gravity enters).

- **You might think** "irrelevant" means unimportant, **but actually** it means suppressed at low energies: Fermi's interaction is irrelevant and is the whole of beta decay.

## One-liner

> On Wilson's view our theories are effective, with scale bars, and renormalizability is a symptom of distance from the cutoff rather than a mark of truth; what remains open is whether realism can travel with the scale bar attached, and in which formulation.

## Problems

**P1 (🟢)** *(Formal model: Formal (a)–(b) · Exegetical (c).)* Take the leading correction to an effective theory at energy $E$ to be $\delta = c\,(E/\Lambda)^2$, with $c$ a dimensionless coefficient.

(a) With $c = 1$, compute $\delta$ for (i) tau-lepton decay in Fermi theory, $E = m_\tau = 1.777$ GeV and $\Lambda = M_W = 80.36$ GeV; (ii) gravity as an EFT at $E = 10^{16}$ GeV, near where [`qft` 6.6](../../qft/lessons/06-06-running-couplings-renormalization-group.md) says the Standard Model couplings nearly meet, with $\Lambda = M_{\text{Pl}} = 1.221\times10^{19}$ GeV. Show the computation.

(b) A physicist who knows only Fermi theory measures a deviation $\delta = 4.89\times10^{-4}$ at $E = m_\tau$. What $\Lambda$ does she infer if she assumes $c = 1$? If $c = 0.1$? If $c = 10$? Show the computation.

(c) What does the inference in (b) assume, and what about the heavy physics does it leave undetermined even when it is right? Two sentences.

**P2 (🟡)** *(Exegetical (a)–(c).)* A philosopher wants to know whether quantum field theory has an ontology of localizable particles ([6.3](06-03-particles-fields-or-structure.md)), and is told the answer depends on which formulation she consults.

(a) Which formulation does Doreen Fraser (2009, 2011) say philosophers should interpret, and which does David Wallace (2006, 2011)? Give each one's main reason in one sentence.

(b) The renormalization group's insensitivity to short-distance physics appears in both arguments. Say how each uses it. Two sentences.

(c) Name one concession each makes, as Egg, Lam and Oldofredi (2017) record them. One line each.

**P3 (🔴)** *(Find the crux: Exegetical (a) · Evaluative (b).)* Before Wilson, many physicists held that a candidate fundamental theory must be renormalizable, and Gerard 't Hooft's 1971 demonstration that massive Yang–Mills theories are renormalizable was widely taken as what made the electroweak theory a serious candidate. A Wilsonian replies that renormalizability is what any theory looks like far below its cutoff.

(a) Name the single premise the two sides disagree over, and state the crux as a conditional each would sign. Two sentences.

(b) Is renormalizability a mark of truth or an accident of low energies? Say what finding or argument would move each side. Any verdict; 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c))*

(a) With $c = 1$, $\delta = (E/\Lambda)^2$.

(i) $E/\Lambda = 1.777/80.36 = 0.02211$, so $\delta = (0.02211)^2 \approx 4.89\times10^{-4}$.

(ii) $E/\Lambda = 10^{16}/(1.221\times10^{19}) = 8.19\times10^{-4}$, so $\delta = (8.19\times10^{-4})^2 \approx 6.7\times10^{-7}$.

Even near the proposed unification scale, gravity's quantum corrections are below one part in a million.

(b) Solve $\delta = c\,(E/\Lambda)^2$ for the scale: $\Lambda = E\sqrt{c/\delta}$, and $\sqrt{1/\delta} = \sqrt{1/(4.89\times10^{-4})} = 45.2$.

- $c = 1$: $\Lambda = 1.777 \times 45.2 \approx 80.4$ GeV.

- $c = 0.1$: $\Lambda = 1.777 \times 45.2 \times \sqrt{0.1} \approx 25.4$ GeV.

- $c = 10$: $\Lambda = 1.777 \times 45.2 \times \sqrt{10} \approx 254$ GeV.

A factor of 100 in the assumed coefficient moves the inferred scale by a factor of 10.

(c) The inference assumes the coefficient's size, usually that it is of order one, which is the naturalness expectation of Example 2, together with the claim that the deviation comes from a $\Delta = 6$ interaction's next term. Even when it is right, it fixes a scale and a coefficient, not the mechanism: a $W$ boson and any other heavy physics that produces the same low-energy operators with the same coefficients give the same data, which is decoupling (T2) seen from below.

**Must hit, strict:** both factors, $4.89\times10^{-4}$ and $6.7\times10^{-7}$; the inversion $\Lambda = E\sqrt{c/\delta}$ with the three values 80.4, 25.4 and 254 GeV; in (c), the coefficient-size assumption named, and "scale, not mechanism".

**Wrong turns:** inverting as $\Lambda = E\,\delta^{-1}$ instead of $E\,\delta^{-1/2}$; taking (b)'s answer at $c = 1$ as confirming that a $W$ exists, when it confirms only a scale; using the reduced Planck mass in (a)(ii) without saying so (it gives $1.7\times10^{-5}$, still small).

---

**P2** *(Exegetical (a)–(c))*

**Must hit, strict (a):**

- Fraser: algebraic (axiomatic) QFT. QFT is the project of uniting quantum theory with special relativity, and the rivals fail it: a cutoff breaks Poincaré covariance, and the textbook interaction picture is inconsistent by Haag's theorem.

- Wallace: conventional (Lagrangian) QFT with a cutoff, read through the Wilsonian renormalization group. It is the formulation in which the Standard Model is stated and confirmed, and so far the only one that makes predictions about interacting systems in four spacetime dimensions.

**Must hit, strict (b):**

- Wallace: the renormalization group legitimizes the cutoff, since the details beyond it cannot matter, so a theory that fails at short distances is still well defined and predictive at long ones.

- Fraser: the same insensitivity means the empirical success cannot tell us what happens at short distances, and unlike condensed matter, where atoms are independent evidence of a real cutoff, particle physics has no such evidence. So success underdetermines the choice of formulation.

**Must hit, strict (c):**

- Wallace: conventional QFT does not require a cutoff; assuming one only suffices to make it well defined.

- Fraser: the underdetermination is only potential, since no realistic interacting algebraic model yet reproduces the Standard Model.

**Accept (c):** as a further shared point, that neither takes particles to be fundamental.

**Wrong turns:** saying Fraser rejects particles and Wallace defends them as fundamental, when Egg, Lam and Oldofredi show both deny fundamental particles; calling Wallace's cutoff a calculational trick, when he takes it to presage a real breakdown; making Fraser deny that renormalization works empirically.

**Model answer:** (a) Fraser says interpret algebraic QFT, because QFT aims to unite quantum theory with special relativity and only the axiomatic formulation does so consistently. Wallace says interpret conventional QFT with a cutoff, because that is where the Standard Model lives and succeeds, and no realistic interacting algebraic model exists. (b) For Wallace, insensitivity to short distances is what makes the cutoff harmless and the theory respectable. For Fraser, the same insensitivity means success cannot reveal short-distance structure, and with no analogue of atoms there is no independent evidence that QFT fails there. (c) Wallace: the framework does not require a cutoff. Fraser: there is no actual underdetermination yet.

---

**P3** *(Exegetical (a) · Evaluative (b))*

**Accept (a):** any statement that locates the disagreement in whether the theory is meant to hold at arbitrarily high energies, including one put in terms of a finite cutoff or of ultraviolet completeness.

**Must hit, strict (a):**

- The premise: whether our theories are meant to hold at arbitrarily high energies, or only below some finite scale where other physics takes over. The old view assumes the first, the Wilsonian the second.

- A conditional both would sign: "If a theory is to hold at all energies, its high-energy behaviour must be under control (renormalizable, or more generally approaching a fixed point), so renormalizability tells for its being fundamental; if a theory holds only below a finite scale, renormalizability is expected at low energies whatever is true above, and shows only that the scale is far away."

**Must hit, any verdict (b):**

- Say that the Standard Model's renormalizability is predicted on both views, so it cannot by itself decide between them.

- Name what would move the Wilsonian: a theory that includes gravity and holds at all energies, or one whose parameters are fixed by its high-energy consistency.

- Name what would move the old view's defender: observed effects of irrelevant operators at accessible energies, suppressed by powers of $E/\Lambda$, or a physical cutoff found.

- Say what gravity does to the old view: general relativity is non-renormalizable by power counting, so either it is not fundamental or the criterion must be widened.

**Accept (b):** asymptotic safety (Weinberg's 1979 proposal that gravity has a high-energy fixed point) as a way of widening the criterion; neutrino masses as a candidate irrelevant-operator effect, provided the answer notes that a renormalizable account with added right-handed neutrinos is also available.

**Wrong turns:** treating renormalizability as a fact about predictions at low energies, where both views agree a non-renormalizable theory predicts to any finite order in $E/\Lambda$; answering whether EFTs support scientific realism, which is a different question (Boss 6(d)); citing QCD's asymptotic freedom as showing QCD is fundamental, when it shows only that QCD alone has no internal limit.

**Model answer (b), one of several:** Neither label fits by itself. On the Wilsonian picture renormalizability is an accident of low energies, since irrelevant terms fade below any distant cutoff; the old view needed the further premise that a theory holds at all energies, and only then does renormalizability carry information about truth. The renormalizable Standard Model cannot decide between them, since both predict it. What would move the Wilsonian is a theory including gravity that is consistent at every energy and fixes its own parameters, which would make high-energy control a constraint on the true theory again. What would move the other side is an irrelevant operator caught at work, a deviation scaling as a power of $E/\Lambda$, or gravity's resisting every all-energy completion. On the present evidence the Wilsonian reading explains more and assumes less, but it assumes the finite cutoff that the old view denies.

</details>

## Flashback

**From Lesson [6.2](06-02-gauge-as-surplus-structure.md) (Gauge as surplus structure):** *(Diagnose: Exegetical (a)–(b).)* From a column by Petronella Brandauer in *Corvid Monthly* (invented, written for this problem):

> (i) Tonomura's 1986 experiment settled it: the vector potential is a real field with a definite value at every point.
>
> (ii) When the Higgs field settled into its vacuum, it spontaneously broke the electroweak gauge symmetry, and the $W$ and $Z$ bosons gained their mass from that breaking.

(a) Is (i) what 6.2's [Aharonov–Bohm](../reference.md#aharonov-bohm-effect) argument concludes? State its conclusion, say what the fringe shift depends on, and say what a realist about potentials at points pays. Three sentences.

(b) What does [Elitzur's theorem](../reference.md#elitzurs-theorem) say about (ii), how is the textbook phrase glossed, and what worry did Earman (2004) draw? Three sentences.

<details>
<summary>Solution</summary>

**Must hit, strict (a):**

- No. Its conclusion C: potentials that agree on $\mathbf E$ and $\mathbf B$ can represent different electromagnetic states, so fields at points underdescribe electromagnetism.

- The shift depends on $\mathbf A$ only through the loop the paths enclose, the gauge-invariant [holonomy](../reference.md#holonomy), with phase $(q/\hbar)\oint\mathbf A\cdot d\mathbf l = q\Phi/\hbar$; $\mathbf A$ at a point shifts by $\nabla\chi$, so no fringe fixes it.

- Pointwise potentials are a reading the effect allows but does not force, and they pay with the gauge hole: indeterminism no measurement reveals, unless one gauge is privileged.

**Must hit, strict (b):**

- Elitzur (1975): in lattice gauge theory without gauge fixing, every local quantity that is not gauge-invariant has expectation value zero, so a local gauge symmetry cannot break spontaneously; (ii) is false as worded.

- The phrase is glossed as the breaking of a global remnant that survives gauge fixing.

- Earman: no real mass comes from eating "descriptive fluff"; since the $W$ and $Z$ are massive (and the Higgs boson was found in 2012), the mechanism needs a gauge-invariant statement.

**Wrong turns:** saying the effect shows $\mathbf A$ unreal, or that a field leaked through the niobium; calling the holonomy a property of a point; taking Elitzur to refute the Higgs mechanism, not one description of it.

**Model answer:** (a) No: C says only that potentials agreeing on $\mathbf E$ and $\mathbf B$ can be different states. The shift depends on the gauge-invariant loop integral, while $\mathbf A$ at a point changes with the gauge. Pointwise realism pays with the gauge hole: indeterminism no measurement reveals, unless one gauge is privileged. (b) A local gauge symmetry cannot break spontaneously, since every non-invariant local quantity has zero expectation value, so (ii) is false as worded. The phrase means a global remnant broken in a fixed gauge. Earman: mass cannot come from eating "descriptive fluff", so the massive $W$ and $Z$ need a gauge-invariant account.

</details>

## Connections

- **Backward:** The physics is [`qft` 6.4](../../qft/lessons/06-04-loops-uv-divergences.md)–6.6, [`stat-mech` 5.4](../../stat-mech/lessons/05-04-critical-exponents-universality.md)–5.5 and the Fermi matching of [`nuclear-particle-physics` 5.1](../../nuclear-particle-physics/lessons/05-01-weak-interaction.md). [6.1](06-01-symmetries-and-what-they-tell-us.md) supplied the rule an EFT obeys, that every interaction the symmetries allow appears, and [6.3](06-03-particles-fields-or-structure.md) supplied algebraic QFT, Haag's theorem and the troubles for particles that the Fraser–Wallace dispute inherits.

- **Forward:** Boss problem 6(d) in the [syllabus](../syllabus.md) asks whether effective field theory supports realism or the pessimistic induction. Quantum gravity, where every bar in the picture ends, is beyond this course; the vacuum-energy puzzle continues in [`cosmology` 4.4](../../cosmology/lessons/04-04-dark-energy-cosmic-acceleration.md), and effective realism meets structural realism in [`philosophy-of-science` 5.3](../../philosophy-of-science/lessons/05-03-structural-realism.md).

- **Sideways:** The renormalization group ↔ critical phenomena in [`stat-mech` 5.5](../../stat-mech/lessons/05-05-renormalization-group.md) ↔ reduction and emergence in [`philosophy-of-science` 4.5](../../philosophy-of-science/lessons/04-05-reduction-and-emergence.md): universality is multiple realizability with a mechanism, Batterman's reading. Effective realism is divide et impera with a criterion fixed in advance ([`philosophy-of-science` 5.2](../../philosophy-of-science/lessons/05-02-the-pessimistic-induction-and-selective-realism.md)). EFT naturalness and Lewis's natural properties ([`metaphysics` 1.3](../../metaphysics/lessons/01-03-universals-the-realists-case.md)) share only a word.

## Closing the course

The course began with three claims that cannot all hold, that the wave function is complete, that it always evolves linearly and that measurements have determinate outcomes ([1.1](01-01-the-measurement-problem-as-a-trilemma.md)), and found that decoherence explains why outcomes look classical without choosing one. The realist repairs ([2.1](02-01-bohmian-mechanics.md)) each deny one claim and pay for it: Bohm adds positions moved by a nonlocal guidance law, GRW changes the dynamics and must live with tails, and many-worlds drops single outcomes and must earn its probabilities. Bell's theorem ([3.1](03-01-epr-and-bells-theorem-the-premises.md)) showed that any account must give up local factorizability, measurement independence or single outcomes, and the experiments made the bill real. Module 4 ([4.1](04-01-leibniz-and-clarke-the-shift-arguments.md)) followed the question whether spacetime is a thing from Leibniz's shifts through Newton's bucket to the hole, and found that observation fixes how much structure the laws need but not whether that structure is a substance, which turns on which mathematically distinct models count as distinct worlds. Module 5 ([5.1](05-01-determinism-in-physical-theories.md)) separated determinism from predictability, found that the arrow of time seems to need a low-entropy beginning that may be a law, a brute fact or an explanandum, and left statistical probability needing a measure the dynamics does not by itself supply. Module 6 ([6.1](06-01-symmetries-and-what-they-tell-us.md)) asked when symmetry marks structure as surplus, found gauge potentials and particles whose reality depends on the reading, and ended with theories that carry their own scale bars. Left open on purpose: which interpretation of quantum mechanics is true, whether spacetime is a substance, whether the past hypothesis needs explaining, whether statistical probabilities are chances, and whether realism should be effective. What the course gives you is the premise each answer must deny and the price of denying it.

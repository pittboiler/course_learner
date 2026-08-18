# Inorganic Chemistry · Lesson 2.2: Nomenclature & Oxidation State

> ⏱ ~15 min · Module 2: Coordination Chemistry & Bonding · Builds on: [2.1 Complexes, ligands & coordination number](02-01-complexes-ligands-coordination-number.md) · Unlocks: 2.3 (isomerism in complexes)

## Why this matters

Every fact you'll learn about a complex — its color, its magnetism, whether it's high- or low-spin, how fast it reacts — hangs on one number: the **oxidation state of the metal**. That number sets how many $d$ electrons the metal has, which is the input to crystal field theory ([2.4](02-04-crystal-field-octahedral-splitting.md)) and everything after. And to *talk* about a complex at all you need to read and write its name unambiguously. Naming looks like rote memorization, but it's really a tiny, rigid grammar: once you see the pattern, "potassium hexacyanidoferrate(III)" unpacks into a structure as reliably as a chemical formula does. This lesson gives you both directions — formula to name, name to formula — plus the charge arithmetic that pins down the oxidation state.

## The idea

A coordination compound splits into two parts: the **complex ion** (metal + ligands, written inside square brackets) and its **counterions** (the plain ions outside the brackets that balance the charge). In $\ce{[Co(NH3)5Cl]Cl2}$, the bracketed $\ce{[Co(NH3)5Cl]}$ is the complex; the two $\ce{Cl-}$ outside are just spectators making the salt neutral.

The **oxidation state** of the metal is pure bookkeeping. Think of the complex's total charge as a budget that has to balance: the metal contributes some charge, each ligand contributes its own known charge, and the sum must equal the charge written on the bracket. Neutral ligands (water, ammonia) add zero; anionic ligands ($\ce{Cl-}$, $\ce{CN-}$) each subtract. Whatever the metal must be to make the books balance — that's its oxidation state.

Naming is the second grammar. You read the complex like a sentence with a fixed word order: *count-prefix + ligand names (in alphabetical order) + metal name + oxidation state*, with the cation always spoken before the anion. The one twist worth flagging up front: if the **whole complex is negatively charged**, the metal's name takes an **-ate** ending (and sometimes reverts to its Latin root — iron becomes *ferrate*). That's it. Everything else is filling in slots.

## The formal version

**Oxidation-state balance.** For a complex ion,

$$q_{\text{complex}} \;=\; x_{\text{metal}} \;+\; \sum_i q_{\text{ligand},\,i},$$

where $q_{\text{complex}}$ is the charge on the bracket, $x_{\text{metal}}$ is the metal's oxidation state, and $q_{\text{ligand},i}$ is the charge of the $i$-th ligand. *In words: the metal's oxidation state is the bracket charge minus the total charge the ligands bring.* Solve for $x_{\text{metal}} = q_{\text{complex}} - \sum_i q_{\text{ligand},i}$.

You need the common ligand charges by heart:

| Neutral (charge 0) | Anionic |
|---|---|
| $\ce{H2O}$ — **aqua** | $\ce{Cl-}$ — **chlorido** ($-1$) |
| $\ce{NH3}$ — **ammine** | $\ce{OH-}$ — **hydroxido** ($-1$) |
| $\ce{CO}$ — **carbonyl** | $\ce{CN-}$ — **cyanido** ($-1$) |
| **en** (ethylenediamine) | $\ce{C2O4^2-}$ — **oxalato** ($-2$) |

(Note the two m's in *a**mm**ine* — one "m" *amine* means an organic $\ce{NH2}$ group. And modern IUPAC writes *chlorido/cyanido*; older texts drop the "d": *chloro/cyano*.)

**The coordination number** is read straight off the formula: count the metal–ligand donor bonds. Monodentate ligands give one each; a bidentate ligand like **en** gives two (it grips with both nitrogen atoms — a chelate, from [2.1](02-01-complexes-ligands-coordination-number.md)). So $\ce{[Co(NH3)5Cl]}$ has coordination number $5 + 1 = 6$.

**The naming algorithm (formula → name).**

1. **Cation before anion**, as in any salt (sodium chloride, not chloride sodium).
2. **Within the complex, name the ligands alphabetically**, ordered by the *ligand name itself* — ignore the multiplying prefix when alphabetizing. **A**mmine comes before **c**hlorido.
3. **Ligand count** is shown by a prefix: *di, tri, tetra, penta, hexa* for simple ligands. For ligands whose own name already contains such a prefix or is a substituted name (ethylenediamine, oxalato), use *bis, tris, tetrakis* and wrap the ligand in parentheses: **bis(ethylenediamine)**, **tris(ethylenediamine)**.
4. **Anionic ligand names end in -o** (chlorid**o**, cyanid**o**, oxalat**o**, hydroxid**o**); neutral ligands keep special names (aqua, ammine, carbonyl).
5. **Metal name, then its oxidation state** as a Roman numeral in parentheses, no space: cobalt(III).
6. **If the complex ion is an anion, the metal takes -ate** — often on a Latin stem: iron → **ferrate**, copper → **cuprate**, silver → **argentate**, lead → **plumbate**, tin → **stannate**, gold → **aurate**. Cationic and neutral complexes keep the ordinary metal name.

*In words: cation first; inside the complex, alphabetize the ligands, prefix their counts, tack the metal on the end with its oxidation number, and add -ate if the complex is negative.* Read the ligand counts back off and you also have the coordination number.

**Reversing it (name → formula):** write the metal symbol first inside the brackets, then the ligands in the order named, apply the counts as subscripts, add the counterion outside, and **check that the charges balance**.

## Picture

![Annotated map tying each fragment of the name pentaamminechloridocobalt(III) chloride to a piece of the formula [Co(NH3)5Cl]Cl2, with the coordination sphere in blue and the oxidation-state bookkeeping in coral](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (formula → name).** Name $\ce{[Co(NH3)5Cl]Cl2}$.

*Oxidation state first.* Two $\ce{Cl-}$ sit outside the bracket, so the complex ion must be $+2$ to make a neutral salt: $\ce{[Co(NH3)5Cl]^2+}$. Inside, the five $\ce{NH3}$ are neutral and the one $\ce{Cl-}$ is $-1$:

$$x_{\text{Co}} + 5(0) + (-1) = +2 \quad\Longrightarrow\quad x_{\text{Co}} = +3.$$

So cobalt(III), and the coordination number is $5 + 1 = 6$.

*Assemble the name.* Ligands alphabetically: **a**mmine before **c**hlorido. Five ammine → *pentaammine*; one chlorido → *chlorido*. The complex is a cation, so cobalt keeps its ordinary name: *cobalt(III)*. The counterion $\ce{Cl-}$ is *chloride*, spoken last.

$$\ce{[Co(NH3)5Cl]Cl2} \;=\; \textbf{pentaamminechloridocobalt(III) chloride}.$$

**Example 2 (name → formula, and why the -ate matters).** Build the formula for **potassium hexacyanidoferrate(III)** and verify it.

The *-ate* on *ferr**ate*** tells you the complex is an **anion**, and *ferrate* is the Latin stem for **iron**. *Hexacyanido* = six $\ce{CN-}$. *(III)* fixes iron at $+3$. So the complex ion is $\ce{[Fe(CN)6]}$ with charge

$$x_{\text{Fe}} + 6(q_{\ce{CN-}}) = +3 + 6(-1) = -3 \quad\Longrightarrow\quad \ce{[Fe(CN)6]^3-}.$$

A $-3$ ion needs three $\ce{K+}$ (potassium, the cation, named first) to balance:

$$\text{potassium hexacyanidoferrate(III)} \;=\; \ce{K3[Fe(CN)6]}.$$

*Check.* Charge total: $3(+1) + (-3) = 0$ ✓. Coordination number $6$ ✓. This is a real, famous reagent (ferricyanide) — and had iron been $+2$ instead, the same six cyanides would give $\ce{[Fe(CN)6]^4-}$, needing four potassiums: $\ce{K4[Fe(CN)6]}$, hexacyanidoferrate(**II**). One Roman numeral flips the whole formula. That is exactly why the oxidation state earns its parentheses.

## Watch out

- **You might think the ligands are ordered by their prefixes.** They aren't — you alphabetize by the *ligand name*, ignoring di/tri/tetra. *Tetraammine* files under **a**, not **t**; *dichlorido* files under **c**. (But *bis/tris* prefixes on parenthesized ligands still get ignored for alphabetizing too.)
- **You might forget that neutral ligands contribute zero, so the metal alone carries a positive complex.** In $\ce{[Cr(H2O)6]^3+}$ the six waters add nothing; chromium is the whole $+3$. Don't "distribute" the charge over the ligands.
- **You might drop the -ate (or use the wrong stem) for anionic complexes.** Only *anionic* complexes take -ate, and several use a Latin root you can't guess from English: iron→ferr**ate**, copper→cupr**ate**, lead→plumb**ate**, tin→stann**ate**, silver→argent**ate**. Cationic complexes ($\ce{[Co(NH3)6]^3+}$ = hexaamminecobalt(III)) never take -ate.

## One-liner

> The metal's oxidation state is the bracket charge minus the ligand charges; the name is *count + alphabetized ligands + metal(oxidation), with -ate if the complex is an anion* — and the whole thing runs both directions.

## Problems

**P1 (🟢)** For each complex, determine the metal's oxidation state and the coordination number: (a) $\ce{[Cr(H2O)6]^3+}$, (b) $\ce{[PtCl4]^2-}$, (c) $\ce{Na[Al(OH)4]}$.

**P2 (🟡)** Name each compound (remember the -ate for an anionic complex): (a) $\ce{[Cr(NH3)4Cl2]Cl}$, (b) $\ce{K4[Fe(CN)6]}$.

**P3 (🔴)** Write the formula from each systematic name and verify the charges balance: (a) **tris(ethylenediamine)cobalt(III) chloride**, (b) **potassium tetrachloridocuprate(II)**.

<details>
<summary>Solutions</summary>

**P1**
(a) Six $\ce{H2O}$ are neutral, bracket charge $+3$: $x + 6(0) = +3 \Rightarrow$ **Cr = +3**. Six monodentate ligands ⇒ **coordination number 6**.
(b) Four $\ce{Cl-}$ give $4(-1) = -4$, bracket charge $-2$: $x + (-4) = -2 \Rightarrow$ **Pt = +2**. **Coordination number 4**.
(c) The $\ce{Na+}$ is a counterion, so the complex is $\ce{[Al(OH)4]-}$ (charge $-1$ to balance one $\ce{Na+}$). Four $\ce{OH-}$ give $-4$: $x + (-4) = -1 \Rightarrow$ **Al = +3**. **Coordination number 4**.

**P2**
(a) $\ce{[Cr(NH3)4Cl2]Cl}$: one $\ce{Cl-}$ outside ⇒ complex is $+1$; $x + 4(0) + 2(-1) = +1 \Rightarrow$ Cr $= +3$. Cationic complex, so chromium keeps its name. Ligands alphabetically: **a**mmine (four → tetraammine) before **c**hlorido (two → dichlorido). Counterion $\ce{Cl-}$ = chloride.
→ **tetraamminedichloridochromium(III) chloride**.
(b) $\ce{K4[Fe(CN)6]}$: four $\ce{K+}$ ⇒ complex is $-4$; $x + 6(-1) = -4 \Rightarrow$ Fe $= +2$. Complex is an **anion**, so iron → **ferrate**, and *(II)*. Six $\ce{CN-}$ = hexacyanido; potassium named first.
→ **potassium hexacyanidoferrate(II)**.

**P3**
(a) *tris(ethylenediamine)cobalt(III) chloride.* Cobalt(III) = $\ce{Co^3+}$; three **en** ligands, each neutral, so the complex charge is $+3 + 3(0) = +3$: $\ce{[Co(en)3]^3+}$. It needs three $\ce{Cl-}$ to balance ⇒ $\ce{[Co(en)3]Cl3}$.
*Check:* $3(+1)_{\text{en}\times 0}$ — ligands add $0$; charge total $+3 + 3(-1) = 0$ ✓. (en is bidentate, so the coordination number is $3\times 2 = 6$.)
(b) *potassium tetrachloridocuprate(II).* The *-ate* (Latin **cuprate** = copper) marks an anion; copper(II) = $\ce{Cu^2+}$; four $\ce{Cl-}$ give $+2 + 4(-1) = -2$: $\ce{[CuCl4]^2-}$. A $-2$ ion needs two $\ce{K+}$ ⇒ $\ce{K2[CuCl4]}$.
*Check:* $2(+1) + (-2) = 0$ ✓. Coordination number 4.

</details>

## Flashback

**From Lesson 2.1 (Complexes, ligands & coordination number):** In $\ce{[Co(en)2Cl2]+}$, ethylenediamine (**en**) is bidentate and chloride is monodentate. What is cobalt's coordination number, and which ligands form chelate rings? (Fresh variant — a mixed-denticity complex.)

<details>
<summary>Solution</summary>

Coordination number counts *donor–metal bonds*, not ligands. Each **en** grips with two nitrogen donors ($2 \times 2 = 4$ bonds) and each $\ce{Cl-}$ with one ($2 \times 1 = 2$ bonds):

$$\text{CN} = 2(2) + 2(1) = 6.$$

The two **en** ligands are the ones forming **chelate rings** — each bidentate ligand closes a five-membered ring with the cobalt. The chlorides, being monodentate, do not chelate. (As a bonus, this oxidation-state check confirms cobalt: $x + 2(0)_{\text{en}} + 2(-1)_{\ce{Cl-}} = +1 \Rightarrow$ Co $= +3$.)

</details>

## Connections

- **Backward:** the oxidation-state arithmetic is the same charge-balance logic behind ionic formulas and Lewis structures from [general chemistry](../../general-chemistry/lessons/01-04-ionic-covalent-bonds-lewis-structures.md) — here the "ion" whose charge you're solving for happens to be the metal buried in a complex. The complex-vs-counterion split is the coordination sphere from [2.1](02-01-complexes-ligands-coordination-number.md).
- **Forward:** the oxidation state fixes the metal's $d$-electron count, which is the sole input to the $t_{2g}/e_g$ splitting in [2.4 Crystal field: octahedral splitting](02-04-crystal-field-octahedral-splitting.md) and the high-spin/low-spin question in [2.5](02-05-high-spin-low-spin-spectrochemical-series.md). Naming is also the vocabulary you'll need immediately for the isomers in [2.3](02-03-isomerism-complexes.md) — *cis*/*trans* prefixes attach to the very names built here.
- **Sideways:** the same $d$-electron count, arrived at through this bookkeeping, is what determines a complex's color and magnetic moment — the bridges to spectroscopy and thermodynamics tracked in [physical chemistry](../../physical-chemistry/syllabus.md).

# B-Cluster Foundation Document

**Project:** Andres Trafikskola — B-license cluster SEO audit
**Status:** Active reference, audit phase
**Last updated:** 2026-05-19
**Companion docs:** `sitewide-foundation.md` (sitewide rules), `mc-cluster-foundation.md` (sibling cluster)

---

## Purpose

This document is the B-license cluster source of truth. It defines:

- Which B-cluster pages exist and what role each plays
- Which keywords each B page targets (primary + secondary)
- Within-B-cluster cannibalization
- B-cluster-specific operational facts: car fleet, B prices, B-specific deferrals

For sitewide rules (NAP, schema canonicals, hreflang, audit framework, glossary, cross-cluster cannibalization, photography, Trafikverket operational facts), see `sitewide-foundation.md`.

All B-cluster audit work is referenced against both this document and the sitewide foundation.

---

## Table of Contents

1. [B-Cluster Map](#1-b-cluster-map)
2. [B Keyword-to-URL Mapping](#2-b-keyword-to-url-mapping)
3. [B Cannibalization Watchlist (within-cluster)](#3-b-cannibalization-watchlist-within-cluster)
4. [B Operational Reference](#4-b-operational-reference)
5. [B Quick Reference Indexes](#5-b-quick-reference-indexes)
6. [B-specific Swedish glossary supplements](#6-b-specific-swedish-glossary-supplements)
7. [Change log](#change-log)

---

## 1. B-Cluster Map

The B-cluster contained **42 pages** at the start of the audit. After consolidation: **40 pages survive**, one is folded in (b-korkort-malmo), and one already redirects (korskola-malmo).

### 1.1 Hub tier

| File | Role | Status |
|---|---|---|
| `trafikskola.html` | Main B-cluster hub | KEEP — absorbed b-korkort-malmo content during audit |
| `b-korkort-malmo.html` | Currently parallel info page | **CONSOLIDATE** → unique content folded into `trafikskola.html` 2026-05-19; 301 at deployment |
| `korskola-malmo.html` | Already redirects to `trafikskola.html` | NO ACTION — already handled |

### 1.2 Core commercial service tier (5 pages)

| File | Role | Status |
|---|---|---|
| `korlektioner-malmo.html` | Driving lessons service page | KEEP — audit. Anchor for B Lessons hreflang cluster. |
| `korpaket-malmo.html` | Lesson packages | KEEP — audit |
| `intensivkurs-korkort-malmo.html` | Intensive course | KEEP — audit |
| `testlektion-malmo.html` | Test lesson (entry point) | KEEP — audited 2026-05-19 |
| `korkort-pris-malmo.html` | Pricing page (canonical price source) | KEEP — audit |

### 1.3 Transmission variants (2 pages)

| File | Role | Status |
|---|---|---|
| `automat-korkort-malmo.html` | Automatic transmission license | KEEP — audit. ⚠️ High cannibalization risk with manuell page. |
| `manuell-korning-malmo.html` | Manual transmission | KEEP — audit. ⚠️ High cannibalization risk with automat page. |

### 1.4 Risk training (3 pages)

| File | Role | Status |
|---|---|---|
| `riskettan-malmo.html` | Risk 1 (B-license) | KEEP — audit. Differentiate from MC counterpart. |
| `risktvaan-malmo.html` | Risk 2 (B-license, halkbana) | KEEP — audit. Owns `halkbana malmö`. |
| `riskpaket-korkort-malmo.html` | Risk 1+2 package | KEEP — audit |

### 1.5 Driving test (3 pages)

| File | Role | Status |
|---|---|---|
| `uppkorning-malmo.html` | Driving test service page | KEEP — audit |
| `uppkorningsrutter-malmo.html` | Test routes (informational) | KEEP — audit |
| `lan-bil-uppkorning-malmo.html` | Car loan for test | KEEP — audit |

### 1.6 Theory & translations (5 pages, hreflang anchors)

| File | Role | Hreflang cluster | Status |
|---|---|---|---|
| `korkortsteori-malmo.html` | Swedish theory | B Theory (sv anchor) | KEEP — audit |
| `driving-theory-english-malmo.html` | English theory | B Theory (en) | KEEP — audit |
| `arabiska-teori-malmo.html` | Arabic theory | B Theory (ar) | KEEP — audit |
| `driving-lessons-english-malmo.html` | English lessons | B Lessons (en) | KEEP — audit |
| `arabiska-korkort-malmo.html` | Arabic lessons | B Lessons (ar) | KEEP — audit |

*Swedish anchor of the B Lessons hreflang cluster is `korlektioner-malmo.html` (listed under §1.2). See `sitewide-foundation §16.1` and `§16.2` for cluster definitions.*

### 1.7 Sub-skill informational guides (8 pages)

| File | Skill | Status |
|---|---|---|
| `backning-parkering-malmo.html` | Reversing & parking | KEEP — audit |
| `bostadsomrade-korning-malmo.html` | Residential driving | KEEP — audit |
| `landsvagskoring-malmo.html` | Country road | KEEP — audit |
| `manovrering-vandning-malmo.html` | Maneuvering & turning | KEEP — audit |
| `motorvagskoring-malmo.html` | Highway | KEEP — audit. Typo fix: "österöt" → "österut" (×2). Gold-standard content template for this tier. |
| `rondelltraning-malmo.html` | Roundabouts | KEEP — audit |
| `sakerhetskontroll-bil-malmo.html` | Vehicle safety check | KEEP — audit. Universally relevant. |
| `stadstrafik-malmo.html` | City traffic | KEEP — audit |

### 1.8 Neighborhood pages — Service Area targets (13 pages)

All 13 are confirmed quality (genuine local content, not templated). All keep.

| File | Area | Filename note |
|---|---|---|
| `korskola-bunkeflostrand-malmo.html` | Bunkeflostrand (SW) | — |
| `korskola-centrum-malmo.html` | Centrum | ⚠️ High hub-cannibalization risk |
| `korskola-fosie-malmo.html` | Fosie | — |
| `korskola-husie.html` | Husie (closest to school) | No `-malmo` suffix |
| `korskola-hyllie.html` | Hyllie | No `-malmo` suffix |
| `korskola-kirseberg-malmo.html` | Kirseberg | — |
| `korskola-limhamn.html` | Limhamn | No `-malmo` suffix. Multi-line JSON-LD format (vs minified siblings). |
| `korskola-mollevangen.html` | Möllevången | No `-malmo` suffix |
| `korskola-oxie-malmo.html` | Oxie | — |
| `korskola-rosengard.html` | Rosengård | No `-malmo` suffix. Cross-link to Arabic pages. |
| `korskola-sodervarn.html` | Södervärn | No `-malmo` suffix |
| `korskola-varnhem.html` | Värnhem | No `-malmo` suffix |
| `korskola-vastra-hamnen.html` | Västra Hamnen | No `-malmo` suffix |

*Filename consistency: 7 of 13 omit the `-malmo` suffix. Document only; do not rename slugs (requires 301 redirects, deferred to deployment).*

### 1.9 FAQ (1 page)

| File | Role | Status |
|---|---|---|
| `faq-korkort.html` | B-license FAQ hub | KEEP — audit. Questions must NOT duplicate per-service-page FAQs. |

### 1.10 Out-of-cluster / utility

Shared with MC-cluster (`index.html`, `404.html`, `integritetspolicy.html`, `villkor.html`).

### 1.11 Summary

- **42 B-cluster pages identified at start**
- **1 consolidation** (b-korkort-malmo → trafikskola; folded 2026-05-19, 301 deferred)
- **1 already-handled redirect** (korskola-malmo → trafikskola)
- **40 surviving pages**

---

## 2. B Keyword-to-URL Mapping

For each surviving page: primary keyword, 2–4 secondary keywords, intent classification, audit notes, cannibalization watch reference.

Intent classifications used:
- **Transactional** — searcher ready to buy/book
- **Informational** — searcher researching/learning
- **Comparison** — searcher comparing options
- **Local** — searcher with geographic intent

### 2.1 Hub

#### `trafikskola.html` (consolidated)

- **Primary:** `trafikskola malmö`
- **Secondary:** `körskola malmö`, `b-körkort malmö`, `körkortsutbildning malmö`
- **Intent:** Transactional + brand/category navigation
- **Audit notes:** After consolidation, absorbs the "What is B-körkort" content from b-korkort-malmo.html (license info, prövotid, villkor 78, manuell-vs-automat). Title and H1 anchor `trafikskola malmö`. H1: "Trafikskola i Malmö." This page legitimately ranks for both `trafikskola malmö` AND `b-körkort malmö` post-consolidation. License-overview content lives in 3 FAQ accordion items (added 2026-05-19, replaces dedicated H2 section).
- **Cannibalization watch:** §3.3 (hub vs neighborhoods, Centrum is the watch case).

### 2.2 Core commercial service tier

#### `korlektioner-malmo.html`

- **Primary:** `körlektioner malmö`
- **Secondary:** `boka körlektion malmö`, `körlektion pris malmö`, `körlektion 60 min`
- **Intent:** Transactional
- **Audit notes:** The "I want to book a lesson" page. Prominent booking CTA. Cross-link to `korpaket-malmo.html` (bundling upsell), `testlektion-malmo.html` (entry option). Swedish anchor of B Lessons hreflang cluster — hreflang block must reference EN and AR variants per `sitewide-foundation §16.1`. Vehicles to mention: all three (Audi A3 automat 2026, Volvo V60 automat 2020, Volvo V60 manuell 2019).
- **Cannibalization watch:** §3.4 (service funnel).

#### `korpaket-malmo.html`

- **Primary:** `körpaket malmö`
- **Secondary:** `körkortspaket malmö`, `körkort paketpris malmö`, `paket körkort malmö pris`
- **Intent:** Transactional + comparison
- **Audit notes:** Conversion-focused. Clear price comparison table (5/10/15 lesson tiers). Cross-link to `intensivkurs-korkort-malmo.html` (speed alternative) and `korkort-pris-malmo.html` (canonical price reference). Don't duplicate full price tables — summarize and link.
- **Cannibalization watch:** §3.4 (service funnel).

#### `intensivkurs-korkort-malmo.html`

- **Primary:** `intensivkurs körkort malmö`
- **Secondary:** `intensivkurs malmö pris`, `körkort snabbt malmö`, `ta körkort snabbt malmö`, `intensivkurs b-körkort malmö`
- **Intent:** Transactional (high-urgency)
- **Audit notes:** High commercial value. Emphasize speed, 13,990 SEK package value, savings vs à la carte. FAQ must directly answer "är intensivkurs värt det" (high-volume informational query). Reference the Volvo V60 automat (2020) — "rymlig och bekväm för motorväg" — as the primary intensivkurs vehicle for highway-heavy timelines.
- **Cannibalization watch:** §3.4 (service funnel — must own speed angle exclusively).

#### `testlektion-malmo.html`

- **Primary:** `testlektion körkort malmö`
- **Secondary:** `prova på körlektion malmö`, `första körlektion malmö`, `testlektion bil malmö`
- **Intent:** Transactional (low-commitment entry)
- **Audit notes:** Funnel entry point. Audited 2026-05-19 (commit `95c3779`). Emphasize "no commitment" (post-audit differentiator: "Du bokar bara den här lektionen — inget paket, ingen bindning"), "vi bedömer din nivå och ger personlig rekommendation." Lead with the 799 SEK fixed price prominently. The Audi A3 Sportback (2026) — "kompakt och lättmanövrerad för stadstrafik" — is the natural testlektion vehicle.
- **Cannibalization watch:** §3.4 (testlektion = one-off, körlektioner = ongoing — keep separate).

#### `korkort-pris-malmo.html`

- **Primary:** `körkort pris malmö`
- **Secondary:** `b-körkort pris malmö`, `vad kostar körkort malmö`, `körkort kostnad malmö`, `trafikskola priser malmö`
- **Intent:** Informational (price research) + comparison
- **Audit notes:** Canonical price source for the entire site. Every other page mentioning prices summarizes and links here. Must include:
  - Full price table for all B-license services
  - Trafikverket fee breakdown (teoriprov 420 dagtid / 520 kvällstid, uppkörning 1,000 dagtid / 1,400 kvällstid, körkortsfoto, tillverkning) per `sitewide-foundation §17`
  - Realistic total cost range (10,000–20,000 SEK)
  - À la carte vs intensivkurs comparison highlighting savings
  - Manuell vs automat cost note (same price, different consequences)
- **Cannibalization watch:** §3.4 (this page owns deep price content; other pages reference and link).

### 2.3 Transmission variants

#### `automat-korkort-malmo.html`

- **Primary:** `automatkörkort malmö`
- **Secondary:** `körkort automat malmö`, `automatväxlad körkort malmö`, `b-körkort automat malmö`
- **Intent:** Informational + transactional (audience deciding on automat)
- **Audit notes:** Explain villkor 78 (the legal limitation — automat-only license). Honest tradeoffs: why someone might choose automat (anxiety, faster learning, will only ever drive automat), what they give up (can't legally drive manual). Reference the two automat vehicles: Audi A3 Sportback (2026) for stadstrafik, Volvo V60 automat (2020) for motorväg.
- **Cannibalization watch:** §3.2 — **HIGHEST** internal risk pair with `manuell-korning-malmo.html`. No paragraph-level copy reuse.

#### `manuell-korning-malmo.html`

- **Primary:** `manuell körkort malmö`
- **Secondary:** `lära sig manuell körning malmö`, `växla bil malmö`, `manuell körlektion malmö`
- **Intent:** Informational + transactional
- **Audit notes:** Sell the freedom of a manual license (drive any car including automat). The learning curve (koppling, växling, backsbacke). Reference the Volvo V60 manuell (2019) — "med växelspak, förlåtande koppling, god sikt." Practical advice on koppling-trampande, half-clutch, hill starts.
- **Cannibalization watch:** §3.2 — **HIGHEST** internal risk pair with automat page.

### 2.4 Risk training

#### `riskettan-malmo.html`

- **Primary:** `riskettan malmö`
- **Secondary:** `risk 1 malmö`, `riskettan b-körkort malmö`, `boka riskettan malmö`, `riskettan pris malmö`
- **Intent:** Transactional + informational
- **Audit notes:** Explain Risk 1 (teorigenomgång om alkohol, droger, trötthet, riskbeteenden). Required for B-license. Price 750 SEK. 5-year validity. Cross-link forward to risktvaan-malmo and riskpaket-korkort-malmo. Cross-link back to trafikskola hub.
- **Cannibalization watch:** `sitewide-foundation §19` (vs `riskettan-mc-malmo.html`). Titles/H1s must mention "B-körkort" or "bil" explicitly.

#### `risktvaan-malmo.html`

- **Primary:** `risktvåan malmö`
- **Secondary:** `risk 2 malmö`, `halkbana malmö`, `risktvåan b-körkort malmö`, `boka risktvåan malmö`
- **Intent:** Transactional + informational
- **Audit notes:** Practical halkbana training (nödbromsning, undanmanöver, hastighetsuppfattning). Price 2,300 SEK. ~3 hours. 5-year validity. **This page owns `halkbana malmö`** (MC page targets `halkbana mc` separately). Halkbana facility location: **TBD** (waiting on client confirmation).
- **Cannibalization watch:** `sitewide-foundation §19` (vs `risktvaan-mc-malmo.html`).

#### `riskpaket-korkort-malmo.html`

- **Primary:** `riskpaket körkort malmö`
- **Secondary:** `risk 1 och 2 paket malmö`, `riskpaket b-körkort malmö`, `riskpaket pris malmö`
- **Intent:** Transactional (bundle value)
- **Audit notes:** Bundle of Risk 1 + Risk 2. Combined price 2,900 SEK (vs 750 + 2,300 = 3,050 separate = 150 SEK saved). Lead with convenience (single booking, correct sequencing) over price savings. Title/H1 leads with "paket" or "kombination" to distinguish from standalone pages. Reference standalone pages by linking, not by duplicating content.
- **Cannibalization watch:** §3.5 (risk training trio).

### 2.5 Driving test

#### `uppkorning-malmo.html`

- **Primary:** `uppkörning malmö`
- **Secondary:** `körprov malmö`, `uppkörning bil malmö`, `boka uppkörning malmö`, `uppkörning b-körkort malmö`
- **Intent:** Transactional + informational
- **Audit notes:** The actual driving test page. Cover: Trafikverket booking process, test location at Cederströmsgatan 1 (Malmö), test structure (~45 min, säkerhetskontroll + stadstrafik + landsväg), Trafikverket avgift (1,000 SEK dagtid / 1,400 SEK kvällstid/helg), common failure points. Cross-link to uppkorningsrutter and lan-bil-uppkorning.
- **Cannibalization watch:** `sitewide-foundation §19` (vs `mc-uppkorning-malmo.html`). Title/H1 must explicitly say "bil" or "B-körkort."

#### `uppkorningsrutter-malmo.html`

- **Primary:** `uppkörningsrutter malmö`
- **Secondary:** `uppkörning rutter malmö`, `körprov rutter malmö`, `var körs uppkörningen i malmö`, `uppkörning strategi malmö`
- **Intent:** Informational (AI Overview / featured snippet target)
- **Audit notes:** Pure information guide. Same format as motorvagskoring-malmo.html (the gold-standard template). Cover: known route patterns out of Cederströmsgatan 1, common challenging spots (specific rondeller, specific motorväg påfarter, residential streets used for parkering), what förarprövaren is specifically evaluating at each route segment. Cross-link contextually to relevant sub-skill pages.

#### `lan-bil-uppkorning-malmo.html`

- **Primary:** `låna bil uppkörning malmö`
- **Secondary:** `hyra bil till uppkörning malmö`, `provbil uppkörning malmö`, `bil för uppkörning malmö`, `låna bil körprov malmö`
- **Intent:** Transactional (niche, high-conversion)
- **Audit notes:** Target audience: people who did private övningskörning with handledare and now need a car for the actual test. Cover: cars available (all three — Audi A3 automat 2026, Volvo V60 automat 2020, Volvo V60 manuell 2019), what's included (warm-up lesson, pickup, return), price, booking process. Title/H1 explicitly says "bil."
- **Cannibalization watch:** `sitewide-foundation §19` (vs `hyra-mc-uppkorning-malmo.html`).

### 2.6 Theory & translations

#### `korkortsteori-malmo.html`

- **Primary:** `körkortsteori malmö`
- **Secondary:** `digital teorikod malmö`, `körkortsteori online malmö`, `teorikurs körkort malmö`, `teori b-körkort malmö`
- **Intent:** Transactional + informational
- **Audit notes:** Sell the digital teorikod (850 SEK). Trafikverket kunskapsprov details per `sitewide-foundation §17` (universal facts) — for B, validity = 4 months after passing. Mention test is available in multiple languages (segue to EN/AR theory pages). Swedish anchor of B Theory hreflang cluster.
- **Cannibalization watch:** `sitewide-foundation §19` (vs `mc-teori-malmo.html` — ~60% similarity verified, properly differentiated by license-specific content).

#### `driving-theory-english-malmo.html`

- **Primary:** `driving theory english malmö`
- **Secondary:** `swedish driving theory english`, `theory test malmö english`, `driving license theory english malmö`, `körkortsteori english malmö`
- **Intent:** Transactional (audience: internationals)
- **Audit notes:** Trafikverket test is available in English. Position as bilingual support — same Swedish test, prepped in English. Include Swedish-language keywords (`körkortsteori english malmö`) because Swedish-speakers searching FOR English services search in Swedish. Cross-link to `driving-lessons-english-malmo.html`. B Theory hreflang cluster member.

#### `arabiska-teori-malmo.html`

- **Primary (Arabic):** `نظرية القيادة بالعربية مالمو`
- **Primary (Swedish anchor):** `körkortsteori arabiska malmö`
- **Secondary:** `teoriprov arabiska malmö`, `körkort teori arabiska`, `تعليم القيادة النظري مالمو`, `اختبار النظري بالعربية`
- **Intent:** Transactional (Arabic-speaking audience in Malmö)
- **Audit notes:** Arabic SEO in Sweden is small-volume; Swedish-speaking searchers looking for Arabic services often search in Swedish. Page content primarily Arabic with strategic Swedish anchor terms. Verified: `<html lang="ar" dir="rtl">` set correctly, with `dir="ltr"` overrides on phone/email inputs. B Theory hreflang cluster member.

#### `driving-lessons-english-malmo.html`

- **Primary:** `driving lessons english malmö`
- **Secondary:** `driving school english malmö`, `english driving instructor malmö`, `learn to drive english malmö`, `driving school in english malmö`
- **Intent:** Transactional
- **Audit notes:** Highest-conversion English page — internationals searching for actual lessons. Emphasize: fluent English-speaking instructor, ability to explain Swedish road rules clearly in English, all three vehicles available, 60 min lessons, pickup. Cross-link prominently to `driving-theory-english-malmo.html`. Prices in SEK. B Lessons hreflang cluster member.

#### `arabiska-korkort-malmo.html`

- **Primary (Arabic):** `دروس قيادة بالعربية مالمو`
- **Primary (Swedish anchor):** `körlektion arabiska malmö`
- **Secondary:** `körskola arabiska malmö`, `körkort arabiska malmö`, `b-körkort arabiska malmö`, `مدرسة قيادة مالمو`, `تعليم القيادة مالمو`
- **Intent:** Transactional
- **Audit notes:** Page primarily Arabic with strategic Swedish terms. RTL/lang attributes verified correct. Cross-link to `arabiska-teori-malmo.html`. **Special:** cross-link to `korskola-rosengard.html` and have Rosengård page reference Arabic services (audience geographic overlap, see §3.8). B Lessons hreflang cluster member.

### 2.7 Sub-skill informational guides

#### `backning-parkering-malmo.html`

- **Primary:** `backning och parkering malmö`
- **Secondary:** `fickparkering körkort malmö`, `parkering körkort malmö`, `backa till ruta körkort`, `parallellparkering körkort`
- **Intent:** Informational (high-value — parking is among the most-failed uppkörning moments)
- **Audit notes:** Cover fickparkering (parallel), backning till ruta (reverse bay), backning rakt. Specific evaluation points förarprövaren looks at. Strong AI Overview target for "hur backar man," "fickparkering tips."
- **Cannibalization watch:** §3.6 (vs `manovrering-vandning-malmo.html`).

#### `bostadsomrade-korning-malmo.html`

- **Primary:** `körning i bostadsområde malmö`
- **Secondary:** `bostadsområde körkort malmö`, `30-zon körning malmö`, `gångfartsområde körkort`, `villakvarter körning malmö`
- **Intent:** Informational
- **Audit notes:** 30-zoner, gångfartsområden, högerregeln, oskyddade trafikanter. Reference specific Malmö residential areas (Limhamns villakvarter, Husie residential, Bunkeflostrand Strandhem) to cross-link with neighborhood pages.
- **Cannibalization watch:** `sitewide-foundation §19` (vs MC), §3.6 (vs `stadstrafik-malmo.html`).

#### `landsvagskoring-malmo.html`

- **Primary:** `landsvägskörning malmö`
- **Secondary:** `landsväg körkort malmö`, `landsväg uppkörning malmö`, `70 km/h körning malmö`, `möten landsväg körkort`
- **Intent:** Informational
- **Audit notes:** 70-90 km/h roads, möten, omkörning, kurvor, hastighetsanpassning. Reference specific landsväg routes near Malmö: väg 101 mot Svedala (Oxie connection), väg 11 mot Sjöbo. Cross-link from Oxie neighborhood page.
- **Cannibalization watch:** `sitewide-foundation §19` (vs MC), §3.6 (vs `motorvagskoring-malmo.html`).

#### `manovrering-vandning-malmo.html`

- **Primary:** `manövrering och vändning malmö`
- **Secondary:** `vända bil körkort malmö`, `tre-punkts-vändning körkort`, `manövrering körkort malmö`, `u-sväng körkort`
- **Intent:** Informational
- **Audit notes:** Tre-punkts-vändning, U-svängar, smal-gata vändning. Specific test moments. Common procedural mistakes (blinkers, blind-spot checks).
- **Cannibalization watch:** §3.6 (vs `backning-parkering-malmo.html`).

#### `motorvagskoring-malmo.html`

- **Primary:** `motorvägskörning malmö`
- **Secondary:** `motorväg körkort malmö`, `påfart motorväg malmö`, `filbyte motorväg körkort`, `e6 körning malmö`, `e22 körning malmö`
- **Intent:** Informational
- **Audit notes:** Already-strong content (this is the gold-standard template for sub-skill pages). E6, E20, E22, Yttre Ringvägen, Arlöv-korsningen, Gastelyckan references. **Required audit fix:** "österöt" → "österut" (×2 occurrences in FAQ).
- **Cannibalization watch:** `sitewide-foundation §19` (vs MC), §3.6 (vs `landsvagskoring-malmo.html`).

#### `rondelltraning-malmo.html`

- **Primary:** `rondellträning malmö`
- **Secondary:** `rondell körkort malmö`, `cirkulationsplats körkort`, `flerfilig rondell körkort`, `rondell uppkörning malmö`
- **Intent:** Informational
- **Audit notes:** Single-lane vs flerfilig rondeller, signaling rules entering/exiting, fil selection, common violations. Reference specific Malmö rondeller: Emporia, Hyllie station, Triangeln, Värnhemstorget area.
- **Cannibalization watch:** §3.6 (vs `manovrering-vandning-malmo.html`).

#### `sakerhetskontroll-bil-malmo.html`

- **Primary:** `säkerhetskontroll körkort malmö`
- **Secondary:** `säkerhetskontroll bil uppkörning`, `säkerhetskontroll fordon b-körkort`, `bilkontroll körprov`, `vad ingår i säkerhetskontrollen`
- **Intent:** Informational (universal — every B student needs this)
- **Audit notes:** Pre-test vehicle check. Cover the exact checklist: broms, ratt, däck, lampor, vätskor (olja, kylvätska, spolarvätska), varningstriangel, reflexväst, nödhammare. What förarprövaren specifically asks. Common stumbling points (forgetting fourth däck, fumbling on motorhuv). Content should be deep — this is a universally-needed reference.
- **Cannibalization watch:** Unique within both clusters (no MC counterpart). No internal risk.

#### `stadstrafik-malmo.html`

- **Primary:** `stadstrafik malmö`
- **Secondary:** `stadskörning körkort malmö`, `tät trafik körkort`, `cyklist stadstrafik körkort`, `körning innerstaden malmö`
- **Intent:** Informational
- **Audit notes:** Urban dense traffic, cyclist interaction (huge in Malmö — cyclists often have right of way, learner drivers underestimate this), pedestrians, gångövergångar, bussfältsregler. Reference Malmö-specific urban character (Triangeln, Centrum, Möllevången pedestrian-heavy areas).
- **Cannibalization watch:** `sitewide-foundation §19` (vs MC), §3.6 (vs `bostadsomrade-korning-malmo.html`).

### 2.8 Neighborhood pages

Each page owns one neighborhood-level keyword cluster. Cannibalization between neighborhoods is naturally low. Main watch is against the hub.

#### `korskola-centrum-malmo.html` ⚠️ HIGH HUB-CANNIBALIZATION RISK

- **Primary:** `körskola centrum malmö`
- **Secondary:** `körskola malmö centrum`, `körskola i centrum malmö`, `trafikskola centrum malmö`, `körkort centrum malmö`
- **Audit notes:** "Centrum Malmö" is borderline-generic. Hub owns city-level. This page must own specifically-central-Malmö content: Triangeln traffic, Stortorget/Lilla Torg pedestrians, one-way patterns, Gamla Staden cobblestones. Don't drift into generic "körskola malmö" copy.
- **Cannibalization watch:** §3.3.

#### `korskola-hyllie.html`

- **Primary:** `körskola hyllie`
- **Secondary:** `körskola hyllie malmö`, `körskola i hyllie`, `trafikskola hyllie`, `körkort hyllie malmö`
- **Audit notes:** Strong existing content. Cross-link to `rondelltraning-malmo.html` (Emporia/Hyllie station rondeller) and `motorvagskoring-malmo.html` (E6/E20 påfart).

#### `korskola-limhamn.html`

- **Primary:** `körskola limhamn`
- **Secondary:** `körskola limhamn malmö`, `körskola i limhamn`, `trafikskola limhamn`, `körkort limhamn malmö`
- **Audit notes:** Affluent area. Reference Limhamns Sjöstad newer developments, calmare villakvarter, närhet till Öresund and Ribersborg. Multi-line JSON-LD format — bulk str_replace anchors differ from minified siblings.

#### `korskola-rosengard.html`

- **Primary:** `körskola rosengård`
- **Secondary:** `körskola rosengård malmö`, `körskola i rosengård`, `trafikskola rosengård`, `körkort rosengård malmö`
- **Audit notes:** Largest Arabic-speaking community in Malmö. **Cross-link to `arabiska-korkort-malmo.html` and `arabiska-teori-malmo.html`**. Arabic pages reference Rosengård as a hometown service area. Strongest audience-geography fit in the entire B-cluster.

#### `korskola-bunkeflostrand-malmo.html`

- **Primary:** `körskola bunkeflostrand`
- **Secondary:** `körskola bunkeflostrand malmö`, `körskola i bunkeflostrand`, `trafikskola bunkeflostrand`, `körkort bunkeflostrand`
- **Audit notes:** Strong existing content. Cross-link to `landsvagskoring-malmo.html` (Klagshamn references) and `rondelltraning-malmo.html` (Kalkbrottsvägen rondeller).

#### `korskola-oxie-malmo.html`

- **Primary:** `körskola oxie`
- **Secondary:** `körskola oxie malmö`, `körskola i oxie`, `trafikskola oxie`, `körkort oxie malmö`
- **Audit notes:** Strong existing content. Cross-link to `landsvagskoring-malmo.html` (väg 101 mot Svedala — already in body) and `motorvagskoring-malmo.html` (Yttre Ringvägen).

#### `korskola-husie.html`

- **Primary:** `körskola husie`
- **Secondary:** `körskola husie malmö`, `körskola i husie`, `trafikskola husie`, `körkort husie malmö`
- **Audit notes:** Closest to school. Strongest "närhet" angle ("Malmös närmaste körskola"). Cross-link to `motorvagskoring-malmo.html` (E22 påfart vid Husie — already in body).

#### `korskola-mollevangen.html`

- **Primary:** `körskola möllevången`
- **Secondary:** `körskola möllevången malmö`, `körskola i möllevången`, `trafikskola möllevången`, `körkort möllevången malmö`
- **Audit notes:** Pedestrian-heavy, multicultural, dense. Cross-link to `stadstrafik-malmo.html` (cyclist interaction heavy here) and `bostadsomrade-korning-malmo.html` (Möllevångstorget gångfartsområde).

#### `korskola-sodervarn.html`

- **Primary:** `körskola södervärn`
- **Secondary:** `körskola södervärn malmö`, `körskola i södervärn`, `trafikskola södervärn`, `körkort södervärn malmö`
- **Audit notes:** Between Möllevången and Triangeln. Urban arterial mix. Cross-link to `stadstrafik-malmo.html`.

#### `korskola-varnhem.html`

- **Primary:** `körskola värnhem`
- **Secondary:** `körskola värnhem malmö`, `körskola i värnhem`, `trafikskola värnhem`, `körkort värnhem malmö`
- **Audit notes:** Värnhemstorget transit hub. Cross-link to `stadstrafik-malmo.html` and `rondelltraning-malmo.html`.

#### `korskola-kirseberg-malmo.html`

- **Primary:** `körskola kirseberg`
- **Secondary:** `körskola kirseberg malmö`, `körskola i kirseberg`, `trafikskola kirseberg`, `körkort kirseberg malmö`
- **Audit notes:** Hillside terrain — natural place to practice uphill/downhill manual starts (backsbacke training). Cross-link to `manuell-korning-malmo.html`.

#### `korskola-fosie-malmo.html`

- **Primary:** `körskola fosie`
- **Secondary:** `körskola fosie malmö`, `körskola i fosie`, `trafikskola fosie`, `körkort fosie malmö`
- **Audit notes:** Southern Malmö, residential + industrial mix. Cross-link to `bostadsomrade-korning-malmo.html` and `motorvagskoring-malmo.html` (Inre Ringvägen access).

#### `korskola-vastra-hamnen.html`

- **Primary:** `körskola västra hamnen`
- **Secondary:** `körskola västra hamnen malmö`, `körskola i västra hamnen`, `trafikskola västra hamnen`, `körkort västra hamnen malmö`
- **Audit notes:** Newer development, modern grid streets, heavy cyclist traffic, Turning Torso area. Cross-link to `stadstrafik-malmo.html` and `bostadsomrade-korning-malmo.html`.

### 2.9 FAQ

#### `faq-korkort.html`

- **Primary:** `vanliga frågor körkort malmö`
- **Secondary:** `faq körkort malmö`, `körkort frågor och svar`, `b-körkort vanliga frågor`
- **Intent:** Informational
- **Audit notes:** Questions on this page must NOT duplicate per-service-page FAQs. This page asks broader cross-cutting questions (general "hur tar man körkort," general process questions). Service-page FAQs answer questions specific to that service. Audit must check every service page's FAQs against faq-korkort.html for duplicates.
- **Cannibalization watch:** §3.7 (FAQ duplication within B-cluster). Technical schema/HTML rule per `sitewide-foundation §9`.

---

## 3. B Cannibalization Watchlist (within-cluster)

For cross-cluster B ↔ MC cannibalization, see `sitewide-foundation §19`.

### 3.1 Within B-cluster: variant pages (HIGHEST internal risk)

| Page A | Page B | Shared keyword space | Differentiation rule |
|---|---|---|---|
| `automat-korkort-malmo.html` | `manuell-korning-malmo.html` | `b-körkort`, transmission terms | ⚠️ Highest internal risk. Automat owns `automatkörkort` queries; manuell owns `manuell körkort` queries. No paragraph-level copy reuse. Different value props (automat = simpler/anxiety-friendly; manuell = freedom to drive any car). Cross-link as decision-helpers, don't repeat content. |

### 3.2 Within B-cluster: hub vs neighborhood

| Hub | Neighborhood | Shared keyword space | Differentiation rule |
|---|---|---|---|
| `trafikskola.html` | `korskola-centrum-malmo.html` | `körskola malmö` ↔ `körskola centrum malmö` | ⚠️ Borderline-generic neighborhood term. Hub owns city-level. Centrum page owns content specifically about driving in central Malmö (Triangeln, Stortorget, one-way patterns, Gamla Staden cobblestones). Don't drift into generic copy. |
| `trafikskola.html` | All other 12 neighborhood pages | `körskola malmö` ↔ `körskola [area]` | Lower risk — each neighborhood owns its area term. Hub stays city-level. |

### 3.3 Within B-cluster: service-page funnel relationships

| Page A | Page B | Shared keyword space | Differentiation rule |
|---|---|---|---|
| `korlektioner-malmo.html` | `testlektion-malmo.html` | `körlektion`, `testlektion` | Korlektioner = ongoing service. Testlektion = single 60-min low-commitment intro. Titles/H1s/copy must reflect this — no overlap. |
| `korlektioner-malmo.html` | `korpaket-malmo.html` | `körlektion`, `körpaket` | Lektioner = à la carte. Paket = bundled discount. Pricing model is the split. |
| `korpaket-malmo.html` | `intensivkurs-korkort-malmo.html` | `körpaket`, `intensivkurs` | Korpaket = standard-pace bundles. Intensivkurs = accelerated. Speed/timeline is the split. |
| `korpaket-malmo.html` | `korkort-pris-malmo.html` | price content | Paket goes deep on the bundle value prop. Pris page is the full price reference for the entire site. Other pages summarize and link to pris page. |
| Any service page | `korkort-pris-malmo.html` | price content | Pris page owns deep price comparison. All other pages mention prices briefly and link here. |

### 3.4 Within B-cluster: risk training trio

| Page | Owns | Don't bleed into |
|---|---|---|
| `riskettan-malmo.html` | Risk 1 standalone | Don't duplicate Risk 2 detail; don't replicate riskpaket value prop |
| `risktvaan-malmo.html` | Risk 2 practical/halkbana standalone | Don't duplicate Risk 1 detail; don't replicate riskpaket value prop |
| `riskpaket-korkort-malmo.html` | Bundle value prop, sequencing convenience | Reference Risk 1 and Risk 2 detail by linking to those pages, not duplicating |

### 3.5 Within B-cluster: sub-skill informational pages

| Page A | Page B | Shared keyword space | Differentiation rule |
|---|---|---|---|
| `backning-parkering-malmo.html` | `manovrering-vandning-malmo.html` | both involve reversing/turning | Parking owns *staying in place*. Manövrering owns *turning around*. No copy reuse. |
| `bostadsomrade-korning-malmo.html` | `stadstrafik-malmo.html` | both involve city driving | Bostadsområde = 30-zon residential. Stadstrafik = urban arterial / commercial / dense. Different speed/density contexts. |
| `bostadsomrade-korning-malmo.html` | `manovrering-vandning-malmo.html` | residential streets host vändning | Bostadsområde owns the *environment*. Manövrering owns the *action*. |
| `landsvagskoring-malmo.html` | `motorvagskoring-malmo.html` | both are higher-speed roads | Naturally distinct: landsväg = 70-90 km/h with möten/omkörning. Motorväg = 110+ km/h with påfart/avfart/filbyte. |
| `rondelltraning-malmo.html` | `manovrering-vandning-malmo.html` | both involve turning | Rondell = navigating a circular intersection. Manövrering = three-point turns / U-svängar. |
| `uppkorning-malmo.html` | `uppkorningsrutter-malmo.html` | both about the driving test | Uppkörning = the test as a service (booking, what to expect). Uppkorningsrutter = the routes (informational prep). |

### 3.6 FAQ duplication watch (within B-cluster)

| Source | Risk |
|---|---|
| `faq-korkort.html` (B FAQ hub) | ⚠️ Service pages each have their own FAQs. These must NOT repeat questions verbatim. faq-korkort.html asks broader cross-cutting questions. Service-page FAQs answer service-specific questions. During audit, check every service page's FAQs against faq-korkort.html for duplicates and rewrite. Technical schema/HTML rule per `sitewide-foundation §9`. |

### 3.7 Special audience-overlap watch (positive cross-link)

| Pair | Type | Rule |
|---|---|---|
| `korskola-rosengard.html` ↔ `arabiska-korkort-malmo.html` + `arabiska-teori-malmo.html` | Audience overlap (Arabic-speaking community concentrated in Rosengård) | Mutual cross-linking explicit during audit. Rosengård page mentions Arabic services. Arabic pages reference Rosengård as a service area. **Not cannibalization — positive reinforcement of audience-geography fit.** |

---

## 4. B Operational Reference

### 4.1 B Fleet (cars)

**Total: 3 cars, 2 automat + 1 manuell.**

| Vehicle | Transmission | Year | Positioning copy |
|---|---|---|---|
| Audi A3 Sportback | Automat | 2026 | "kompakt och lättmanövrerad för stadstrafik" |
| Volvo V60 | Automat | 2020 | "rymlig och bekväm för motorväg" |
| Volvo V60 | Manuell | 2019 | "med växelspak, förlåtande koppling, god sikt" |

Audit opportunity: most pages currently say "Audi A3 & Volvo V60" generically. Per-page copy should lean into the specific vehicle that fits intent (e.g., motorvagskoring → Volvo V60 automat 2020; testlektion → Audi A3 Sportback 2026; manuell-korning → Volvo V60 manuell 2019).

### 4.2 B-specific prices

For Trafikverket fees (universal across both clusters), see `sitewide-foundation §17`.

| Fact | Value | Source |
|---|---|---|
| Risk 1 (Riskettan): price | 750 SEK | Andres Trafikskola |
| Risk 2 (Risktvåan): price | 2,300 SEK | Andres Trafikskola |
| Risk paket (1+2 combined): price | 2,900 SEK (saves 150 SEK vs separate) | Andres Trafikskola |
| Digital teorikod: price | 850 SEK | Andres Trafikskola |
| Testlektion: price | 799 SEK | Andres Trafikskola |
| Körlektion (60 min): price | 799 SEK | Andres Trafikskola |
| 5-paket körlektioner: starting price | 3,795 SEK | Andres Trafikskola |
| Mellan paket (10 lektioner): price | 7,595 SEK | Andres Trafikskola |
| Stort paket (15 lektioner): price | 10,995 SEK | Andres Trafikskola |
| Intensivkurs B-körkort: complete package | 13,990 SEK | Andres Trafikskola |
| B-cluster price range | 799–13,990 SEK | Andres Trafikskola |

### 4.3 Outstanding items

| Item | Owner | Blocks |
|---|---|---|
| Halkbana facility location for Risk 2 (Stora Holm? Sturup? Other?) | Client | `risktvaan-malmo.html` audit |

### 4.4 Deferred items (B-cluster)

| Item | Trigger to unfreeze |
|---|---|
| Per-page Open Graph images | When photography exists (see `sitewide-foundation §20`) |
| Hero images on neighborhood pages | When photography exists |
| Vehicle photos for Service schema | When photography exists |
| Instructor photos for E-E-A-T signals | When photography exists |
| Limhamn JSON-LD format normalization (multi-line → minified) | Low-priority cleanup pass |
| URL slug normalization (7 of 13 neighborhood slugs lack `-malmo` suffix) | Deployment phase only (requires 301 redirects) |

### 4.5 Skipped items (B-cluster, with rationale)

| Item | Why skipped |
|---|---|
| Google Keyword Planner search-volume pass | Existing keyword list judged sufficient based on prior research. Audit work order proceeds top-down by tier rather than by volume. |
| Full competitor analysis (Caroli / Trafiko / Mårtensons) | Known top competitors. Ad-hoc spot-checks via `web_fetch` during specific audits where competitor depth comparison is decision-critical (hub, intensivkurs, pris). |

---

## 5. B Quick Reference Indexes

### 5.1 B pages requiring Service schema

Service-tier and sub-skill-tier pages. Specifically:

- Core commercial: `korlektioner-malmo.html`, `korpaket-malmo.html`, `intensivkurs-korkort-malmo.html`, `testlektion-malmo.html`, `korkort-pris-malmo.html`
- Transmission variants: `automat-korkort-malmo.html`, `manuell-korning-malmo.html`
- Risk: `riskettan-malmo.html`, `risktvaan-malmo.html`, `riskpaket-korkort-malmo.html`
- Test: `uppkorning-malmo.html`, `lan-bil-uppkorning-malmo.html`
- Theory + translations: 5 pages
- Sub-skill: all 8 pages

Hub, sub-skill informational guides, and neighborhood pages get a `Service` block representing the localized service offering. See `sitewide-foundation §7` for the template.

### 5.2 B pages with critical Trafikverket fact dependencies

These pages must cite Trafikverket facts correctly. Re-verify against `sitewide-foundation §17` during audit:

- `korkortsteori-malmo.html` (+ EN/AR siblings) — teoriprov stats, avgift, validity (4 months for B)
- `uppkorning-malmo.html` — uppkörning duration, avgift, location
- `riskettan-malmo.html` — Risk 1 validity (5 years)
- `risktvaan-malmo.html` — Risk 2 validity (5 years), facility (TBD)
- `korkort-pris-malmo.html` — all Trafikverket fees
- `trafikskola.html` (hub, post-consolidation) — prövotid, villkor 78, 10-year körkort validity, körkortstillstånd 5-year validity

### 5.3 B pages with cross-cluster cannibalization watch

10 B pages have direct MC counterparts that must stay differentiated. See `sitewide-foundation §19` for the full pair table.

### 5.4 B pages with internal cannibalization HIGH risk

- `automat-korkort-malmo.html` ↔ `manuell-korning-malmo.html` (§3.1)
- `trafikskola.html` ↔ `korskola-centrum-malmo.html` (§3.2)

---

## 6. B-specific Swedish glossary supplements

Terms specific to B-license vocabulary. Universal driving terms live in `sitewide-foundation §22`.

| Swedish | English | Use in pages |
|---|---|---|
| B-körkort | Class B (car) license | B-cluster |
| Villkor 78 | Automatic-only license restriction | `automat-korkort-malmo.html` |
| Backsbacke | Rolling-back hazard (manual on hills) | `manuell-korning-malmo.html`, `korskola-kirseberg-malmo.html` |
| Växelspak | Gear stick | `manuell-korning-malmo.html` |
| Koppling | Clutch | `manuell-korning-malmo.html` |
| Automatväxlad | Automatic transmission | `automat-korkort-malmo.html` |
| Manuell växellåda | Manual gearbox | `manuell-korning-malmo.html` |
| Fickparkering | Parallel parking | `backning-parkering-malmo.html` |
| Backa till ruta | Reverse-bay park | `backning-parkering-malmo.html` |
| Tre-punkts-vändning | Three-point turn | `manovrering-vandning-malmo.html` |
| Lätt släp | Light trailer (combined ≤ 3,500 kg with car) | Hub, `b-körkort` content |
| BE-körkort | License for heavier trailers | Hub (referenced as "what you'd need for heavier") |

---

## Change log

| Date | Change |
|---|---|
| 2026-05-18 | Initial complete version (all-in-one foundation doc). |
| 2026-05-18 | Apostrophe sweep completed: 800 instances of "Andre's" → "Andres" across 87 files. |
| 2026-05-18 | priceRange sweep completed: 40 files corrected to "790-17990 SEK". |
| 2026-05-18 | Description harmonization queued: longer multilingual form to be applied to remaining holdouts during audit. |
| 2026-05-18 | Logo URL sweep queued: `mairan566.github.io` references to be replaced with `andrestrafikskola.se`. |
| 2026-05-18 | GBP set up as hybrid (storefront + service area); 17 service areas listed. |
| 2026-05-18 | Geo coordinate sweep completed: canonical lat/lon `55.58296218885443` / `13.011128125304399` applied sitewide. |
| 2026-05-19 | trafikskola hub audited (commits `3d4b7f0`, `b10f013`); license-overview content folded into 3 FAQ accordion items; 2 cross-cutting FAQs pruned. |
| 2026-05-19 | testlektion-malmo audited (commit `95c3779`); Swedish-register pass + Service schema expansion + §3.2 differentiation. |
| 2026-05-19 | Sitewide hreflang sweep landed (commit `7c02b26`); MC clusters restored (commit `196b23b`). |
| 2026-05-19 | **Foundation refactor:** split this doc into 3 — `sitewide-foundation.md` (sitewide rules, audit framework, hreflang, cross-cluster cannibalization, photography, Trafikverket facts, glossary), `b-cluster-foundation.md` (this doc, slimmed to B-only: §1 cluster map, §2 keyword map, §3 within-B cannibalization, §4 B operational, §5 B indexes, §6 B glossary supplements), `mc-cluster-foundation.md` (parallel MC structure; §2 keyword map stub per directive). Cross-references between the three docs use explicit doc names (`sitewide-foundation §X` vs `b-cluster-foundation §X`). |
| 2026-05-19 | DrivingSchool sitewide canonicalization sweep landed (commit `a24152b`); 61 of 64 in-scope HTML files canonicalized to `sitewide-foundation §6` template. **`index.html` deferred to a dedicated homepage audit** — carries 6 SEO-valuable non-canonical extras (`hasOfferCatalog`, `sameAs`, `knowsLanguage`, `paymentAccepted`, `currenciesAccepted`, `openingHoursSpecification`) plus structured `openingHoursSpecification` in place of plain `openingHours`. Homepage audit will need to: verify `hasOfferCatalog` prices against `korkort-pris-malmo.html` canonicals; confirm `sameAs` social URLs; decide whether to keep `openingHoursSpecification` object form or align to `openingHours` string. Apply canonical baseline (add missing `image`, `logo`) while preserving the 6 extras. |
| 2026-05-19 | `sitewide-foundation §2` corrected — Pos 2 canonical `elever` → `recensioner` per Q2 resolution (124+ refers to Google review count, not student count). The 23 B-cluster pages previously marked drift-free in the trust-bar discovery sweep now require Pos 2 alignment in the upcoming remediation sweep. Also added: `sitewide-foundation §2.2` per-cluster variant policy, §2.3 sub-skill Pos 4 intent substitution policy, §2.4 locale-variants table for translation pages with Patterns A/B/C documented. |

---

*End of document.*

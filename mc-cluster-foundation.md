# MC-Cluster Foundation Document

**Project:** Andres Trafikskola — MC-license cluster (A1, A2, A) SEO audit reference
**Status:** Active reference, audit phase (post-consolidation)
**Last updated:** 2026-05-19
**Companion docs:** `sitewide-foundation.md` (sitewide rules), `b-cluster-foundation.md` (sibling cluster)

---

## Purpose

This document is the MC-license cluster source of truth. It defines:

- Which pages exist in the MC cluster and what role each plays (post-consolidation)
- Which keywords each page targets *(STUB — to be populated when MC audit programme starts)*
- Within-MC cannibalization watches
- MC-specific operational facts: fleet, trust bar, venues, season, prices

For sitewide rules (NAP, schema canonicals, hreflang, audit framework, glossary, cross-cluster cannibalization, photography, Trafikverket operational facts), see `sitewide-foundation.md`.

---

## Table of Contents

1. [MC-Cluster Map](#1-mc-cluster-map)
2. [MC Keyword-to-URL Mapping (stub)](#2-mc-keyword-to-url-mapping-stub)
3. [MC Cannibalization Watchlist (within-cluster)](#3-mc-cannibalization-watchlist-within-cluster)
4. [MC Operational Reference](#4-mc-operational-reference)
5. [MC Quick Reference Indexes](#5-mc-quick-reference-indexes)
6. [MC-specific Swedish glossary supplements](#6-mc-specific-swedish-glossary-supplements)
7. [Change log](#change-log)

---

## 1. MC-Cluster Map

The MC cluster underwent a structural pivot in May 2026 from "audit every Tier 4 page individually" to "consolidate weak/duplicate pages into stronger anchors via redirect stubs; audit only the survivors." See `project_mc_cluster_audit` for campaign context.

### 1.1 Hub tier

| File | Role | Status |
|---|---|---|
| `mc-trafikskola.html` | Main MC-cluster hub | KEEP — multiple cleanup passes shipped |

### 1.2 License category pages (A-series)

| File | License category | Status |
|---|---|---|
| `a1-korkort-malmo.html` | A1 (light motorcycle, ≤ 125 cc / ≤ 11 kW) | KEEP — MC-scope; in-scope for MC audits |
| `a2-korkort-malmo.html` | A2 (intermediate motorcycle, max 35 kW) | KEEP — MC-scope; in-scope for MC audits |
| `a-korkort-malmo.html` | A (full motorcycle, unrestricted) | KEEP — MC-scope; in-scope for MC audits |

A-series pages cover license category eligibility (age requirements, vehicle restrictions, license-step progression) and overlap with the MC service offering. They're targeted by searches like `a1-körkort malmö`, `a2-körkort malmö`, `a-körkort malmö`. Audit them under MC-scope using `mc-cluster-foundation` conventions: MC trust bar (§4.2), MC fleet (§4.1), MC theory test phrasing (§4.7), MC season (§4.4).

### 1.3 Service tier (surviving)

| File | Role | Status |
|---|---|---|
| `mc-korlektioner-malmo.html` | MC lessons (now also folds environment-page content) | KEEP — audited |
| `mc-paket-malmo.html` | MC packages | KEEP — audited |
| `mc-intensivkurs-malmo.html` | MC intensive course | KEEP — audited |
| `mc-testlektion-malmo.html` | MC test lesson | KEEP — audited |

### 1.4 Risk training (MC)

| File | Role | Status |
|---|---|---|
| `riskettan-mc-malmo.html` | Risk 1 (MC variant) | KEEP — audited |
| `risktvaan-mc-malmo.html` | Risk 2 (MC, halkbana at AB Bulltoftabanan) | KEEP — audited |
| `mc-riskpaket-malmo.html` | Risk 1+2 package (MC) | KEEP — audited |

### 1.5 Driving test (MC)

| File | Role | Status |
|---|---|---|
| `mc-uppkorning-malmo.html` | MC uppkörning service page | KEEP — fully audited + double-fold (krav/strategi/provdagen/efter sections, 10 FAQs) |
| `hyra-mc-uppkorning-malmo.html` | Bike loan for MC test | KEEP — audited standalone, has Service `offers` block |

### 1.6 Theory & translations (hreflang clusters C+D anchors)

| File | Role | Hreflang cluster | Status |
|---|---|---|---|
| `mc-teori-malmo.html` | Swedish MC theory | MC Theory (sv anchor) | KEEP — audited (Course schema added) |
| `mc-theory-english-malmo.html` | English MC theory | MC Theory (en) | KEEP — language sibling |
| `mc-teori-arabiska-malmo.html` | Arabic MC theory | MC Theory (ar) | KEEP — language sibling |
| `mc-lessons-english-malmo.html` | English MC lessons | MC Lessons (en) | KEEP — language sibling |
| `mc-korkort-arabiska.html` | Arabic MC lessons | MC Lessons (ar) | KEEP — language sibling (filename misleadingly says "korkort"; content maps to MC lessons) |

*Swedish anchor of the MC Lessons hreflang cluster is `mc-trafikskola.html` (not a dedicated mc-korlektioner page). See `sitewide-foundation §16.3`.*

### 1.7 Technique pages (post-consolidation)

| File | Role | Status |
|---|---|---|
| `mc-korteknik-malmo.html` | MC technique reference (consolidated from 4 prior tier-2 technique pages) | KEEP — Tier 1 framework, 8 FAQs, ~777 lines |

### 1.8 Trafikmiljö pages

After the consolidation pivot, MC trafikmiljö pages were folded as new sections into `mc-korlektioner-malmo.html`. Surviving page is the hub/lessons aggregator.

### 1.9 FAQ

| File | Role | Status |
|---|---|---|
| `faq-mc-korkort.html` | MC FAQ hub | KEEP — questions must NOT duplicate per-service-page FAQs |

### 1.10 Out-of-cluster / utility

Shared with B-cluster (`index.html`, `404.html`, `integritetspolicy.html`, `villkor.html`).

### 1.11 Consolidation map (~19 redirect stubs)

Stub structure: `<meta http-equiv="refresh" content="0; url=TARGET">` + `<link rel="canonical" href="BASE_TARGET">` + `<meta name="robots" content="noindex, follow">` + JS `window.location.replace()` + visible fallback link.

**Tier 3 location pages → `mc-trafikskola.html` (no anchor):**

- `mc-korskola-centrum-malmo.html`
- `mc-korskola-hyllie.html`
- `mc-korskola-limhamn.html`
- `mc-korskola-mollevangen.html`
- `mc-korskola-rosengard.html`
- `mc-korskola-sodervarn.html`
- `mc-korskola-varnhem.html`
- `mc-korskola-vastra-hamnen.html`
- `mc-korskola-skane.html`
- `mc-bostadsomrade-malmo.html`

**Tier 2 technique pages → `mc-korteknik-malmo.html` (no anchor):**

- `mc-bromsteknik-malmo.html`
- `mc-avancerad-teknik-malmo.html`
- `mc-lagfartsbana-malmo.html`
- `mc-hogfartsbana-malmo.html`

**Tier 2 environment pages → `mc-korlektioner-malmo.html` (no anchor; folded as new sections):**

- `mc-stadstrafik-malmo.html`
- `mc-landsvag-malmo.html`
- `mc-motorvag-malmo.html`

**Uppkörning siblings → `mc-uppkorning-malmo.html` (anchored stubs):**

- `mc-bokning-uppkorning-malmo.html` → `#krav`
- `mc-uppkorningsrutter-malmo.html` → `#strategi`

**Stub redirect to `mc-trafikskola.html` (live in repo as of commit 01ec099):** `mc-korkort-malmo.html`.

**Anchor convention:** canonical `<link>` always points at the BASE target page (no anchor — Google convention). Meta-refresh and JS `window.location.replace()` use the anchor if applicable.

### 1.12 Hub-link anchor variants

`mc-trafikskola.html` is linked from each surviving Tier 4 MC service page; anchor varies per page to avoid templated feel:

| Anchor | Page using it |
|---|---|
| `vårt kompletta MC-utbud` | `mc-paket-malmo.html` |
| `vår MC-utbildning` | `mc-testlektion-malmo.html` |
| `vår MC-trafikskola` | `riskettan-mc-malmo.html` |
| `MC-utbildning hos oss` | `risktvaan-mc-malmo.html` |
| `alla våra MC-tjänster` | `mc-riskpaket-malmo.html` |
| `vägen till MC-körkort` | `mc-teori-malmo.html` |

Unused candidates for future audits: `vår fullständiga MC-skola`, `översikt över MC hos oss`, `hela MC-erbjudandet`, `vår MC-portfölj`, `MC-erbjudandet i sin helhet`, `vårt MC-utbildningsprogram`.

---

## 2. MC Keyword-to-URL Mapping (stub)

**Status: stub.** This section is deliberately empty. Keyword mapping will be populated when the MC audit programme begins — not inferred from page content alone. Structure should mirror `b-cluster-foundation §2` when populated.

Intent classifications to use (same as B):
- Transactional, Informational, Comparison, Local

Primary clusters of interest (to fill out later):
- MC hub: `mc körkort malmö`, `mc-trafikskola malmö`, `a-körkort malmö`, `a2-körkort malmö`, `a1-körkort malmö`
- MC lessons: `mc-körlektioner malmö`, `mc-utbildning malmö`
- MC theory: `mc-teori malmö`, `mc-teoriprov malmö`
- MC test: `mc-uppkörning malmö`, `mc-körprov malmö`
- MC risk: `riskettan mc malmö`, `risktvåan mc malmö`, `halkbana mc malmö`
- MC technique: `mc-körteknik malmö`, `mc-manöverprov malmö`

These are seeds, not mapped — populate via the audit-prompt workflow when MC audits start.

---

## 3. MC Cannibalization Watchlist (within-cluster)

For cross-cluster B↔MC cannibalization, see `sitewide-foundation §19`.

### 3.1 Within MC: technique pages

| Page | Owns | Don't bleed into |
|---|---|---|
| `mc-korteknik-malmo.html` | Comprehensive MC technique reference (consolidated) | Was 4 separate pages; the consolidated page owns the full technique territory now |

### 3.2 Within MC: service-page funnel

| Page A | Page B | Differentiation rule |
|---|---|---|
| `mc-korlektioner-malmo.html` | `mc-testlektion-malmo.html` | Lessons = ongoing service. Testlektion = single low-commitment intro. |
| `mc-korlektioner-malmo.html` | `mc-paket-malmo.html` | Lessons = à la carte. Paket = bundled discount. |
| `mc-paket-malmo.html` | `mc-intensivkurs-malmo.html` | Paket = standard-pace bundles. Intensivkurs = accelerated. |

### 3.3 Within MC: risk training trio

| Page | Owns | Don't bleed into |
|---|---|---|
| `riskettan-mc-malmo.html` | Risk 1 standalone (MC variant) | Don't duplicate Risk 2 detail; don't replicate riskpaket value prop |
| `risktvaan-mc-malmo.html` | Risk 2 practical (MC halkbana at AB Bulltoftabanan) | Don't duplicate Risk 1 detail; don't replicate riskpaket value prop |
| `mc-riskpaket-malmo.html` | Bundle value prop, sequencing convenience | Reference Risk 1 and Risk 2 detail by linking |

### 3.4 Within MC: hub vs language siblings

| Hub | Language sibling | Differentiation rule |
|---|---|---|
| `mc-trafikskola.html` (sv) | `mc-lessons-english-malmo.html` (en) | Hreflang cluster member; content parity intent, audience differs |
| `mc-trafikskola.html` (sv) | `mc-korkort-arabiska.html` (ar) | Hreflang cluster member; content parity intent, audience differs |

### 3.5 Within MC: A-series ↔ MC service pages

A-series pages (§1.2) and MC service pages (§1.3) cover overlapping search intent (someone searching `a2-körkort malmö` may also be a candidate for MC lessons/packages). Differentiation rule: A-series pages own license-category eligibility and step-up rules (age, kW limits, A1→A2→A progression). MC service pages own pricing/scheduling/instructor/fleet. A-series pages cross-link to MC service pages for the conversion path; MC service pages cross-link back for category-specific eligibility detail.

### 3.6 Within MC: FAQ duplication

Per-page MC FAQs must NOT duplicate questions on `faq-mc-korkort.html`. Audit each MC service page's FAQs against the FAQ hub during per-page audits. Same editorial pattern as B's `faq-korkort.html` watchlist. Technical FAQPage rules (schema/HTML byte-match) are sitewide — see `sitewide-foundation §9`.

---

## 4. MC Operational Reference

### 4.1 MC Fleet

- **BMW F800 GS** — A-körkort (full motorcycle license)
- **Yamaha MT-07 (35 kW)** — A2-körkort (intermediate motorcycle license). Always write `Yamaha MT-07 (35 kW)` — parens around `35 kW`, lowercase k, space before kW. Don't write `Yamaha MT-07 35 kW` (without parens) anywhere in HTML or JSON-LD.
- **A1 motorcycle ordered on-demand** inför utbildningen (not in permanent fleet). A1 fleet honesty sentence: "För A1-körkort ordnar vi rätt motorcykel inför utbildningen."
- No trehjulingar / motorcyklar med sidvagn.

### 4.2 MC trust bar canonical

Per `sitewide-foundation §2.2`, MC pages diverge from the sitewide baseline on positions 2, 3, and 4. (Position 2's `recensioner` matches sitewide canonical post the 2026-05-19 correction — older MC drafts using `124+ elever` are drift.)

| Pos | Icon (FontAwesome) | MC canonical text |
|---|---|---|
| 1 | `fa-star` | `5.0 Google-betyg` |
| 2 | `fa-users` | `124+ recensioner` |
| 3 | `fa-clock` | `80 min/lektion` |
| 4 | `fa-motorcycle` | `BMW F800 GS & Yamaha MT-07` |
| 5 | `fa-language` | `3 språk` |

MC lessons are 80 minutes (longer than B's 60 min). This is operational truth, not drift.

Where a longer fleet form is needed in body copy (not the trust bar), use the parens convention from §4.1: `BMW F800 GS och Yamaha MT-07 (35 kW)`.

A-series pages (`a-korkort-malmo.html`, `a1-korkort-malmo.html`, `a2-korkort-malmo.html`) are MC-scope per §1.2 and follow this canonical. Age-eligibility copy (`Från X år`), where present on those pages, belongs in body content or hero subtitle — not the trust bar.

For locale variants (en/ar translation pages within MC), see `sitewide-foundation §2.4`.

### 4.3 Venues

- **School (Ystadvägen 22B, 214 30 Malmö):** Riskettan classroom, körlektioner, theory, garage.
- **AB Bulltoftabanan, Rimfrostgatan 5, Malmö:** Risktvåan and bundle exercises (dedicated halkbana — high-value geo-SEO term, surface in metadata + Service description + body + dedicated FAQ on the risktvåan-mc page).

### 4.4 Season

- Practical MC (testlektion, körlektioner, Risktvåan, intensivkurs, uppkörning) runs **april–oktober** per Trafikverket MC test season.
- Riskettan + theory year-round.
- Season transparency belongs in dedicated FAQ ("När kan jag boka...") pattern.

### 4.5 Elev/booking portal

`https://elev.andrestrafikskola.se/` is the school's actual study/booking platform (login URL `https://elev.andrestrafikskola.se/login`).

**NOT** `korkortonline.se` — that was a critical false reference removed from `mc-teori-malmo.html` (page had been directing visitors to a third-party site). If any unaudited MC cluster page mentions `korkortonline.se`, replace with `elev.andrestrafikskola.se` framing.

Hero "Boka lektion online" buttons cluster-wide point to `https://elev.andrestrafikskola.se/`.

### 4.6 MC-specific prices

*To be populated when MC pricing review completes. Current canonical priceRange for sitewide schema is `790-17990 SEK` (see `sitewide-foundation §3`); historical MC-side memo used `750-17990 SEK`, which is now superseded.*

### 4.7 MC theory test phrasing (RULE T1 supplement)

The MC variant of the universal RULE T1 phrasing (see `sitewide-foundation §17`):

Long form (FAQ/prose): "MC-teoriprovet hos Trafikverket består av 70 frågor varav 5 är testfrågor som inte räknas. Du behöver minst 52 rätt av de 65 räknade frågorna för godkänt. Provtiden är 50 minuter. Godkänt teoriprov är giltigt i 1 år."

Short form (table cells, compact cards): `70 frågor (5 testfrågor), 52/65 rätt, 50 min`

**FORBIDDEN:** `65 frågor, 52 rätt, 50 min`.

(MC variant validity = 1 year; B variant validity = 4 months. Both teori categories use the same question structure and same Trafikverket fees.)

### 4.8 mc-teori schema specifics

`mc-teori-malmo.html` carries 5 JSON-LD blocks: DrivingSchool, Service, Course, BreadcrumbList, FAQPage. `Course` is a page-specific addition for the educational study material (digital teorikod).

### 4.9 Outstanding items

| Item | Owner | Blocks |
|---|---|---|
| MC pricing review (line items, paket prices, riskpaket-mc cost) | Client | finalization of MC §4.6 |

### 4.10 Deferred items

| Item | Trigger to unfreeze |
|---|---|
| MC keyword mapping (§2 stub) | When MC audit programme starts |
| MC-specific shot list additions beyond `sitewide-foundation §20` | When photography exists and MC-specific needs surface |

---

## 5. MC Quick Reference Indexes

### 5.1 MC pages requiring Service schema

All surviving MC service-tier pages:

- `mc-korlektioner-malmo.html`, `mc-paket-malmo.html`, `mc-intensivkurs-malmo.html`, `mc-testlektion-malmo.html`
- `riskettan-mc-malmo.html`, `risktvaan-mc-malmo.html`, `mc-riskpaket-malmo.html`
- `mc-uppkorning-malmo.html`, `hyra-mc-uppkorning-malmo.html`
- `mc-teori-malmo.html`, `mc-theory-english-malmo.html`, `mc-teori-arabiska-malmo.html`
- `mc-lessons-english-malmo.html`, `mc-korkort-arabiska.html`
- `mc-korteknik-malmo.html`
- A-series: `a-korkort-malmo.html`, `a1-korkort-malmo.html`, `a2-korkort-malmo.html`

`Service.availableLanguage`: `["sv", "en", "ar"]` where instruction supports all three (most MC service pages).

`Service.serviceType`: English machine-readable phrase per schema.org convention (e.g. `Risk education part 1 (Riskettan) for motorcycle`).

### 5.2 MC pages with critical Trafikverket fact dependencies

These MC pages must cite Trafikverket facts correctly. Re-verify against `sitewide-foundation §17` during audit:

- `mc-teori-malmo.html` (+ EN/AR siblings) — teoriprov stats, avgift, validity (1 år for MC)
- `mc-uppkorning-malmo.html` — uppkörning duration, avgift, location
- `riskettan-mc-malmo.html` — Risk 1 validity (5 years)
- `risktvaan-mc-malmo.html` — Risk 2 validity (5 years), facility (AB Bulltoftabanan)

### 5.3 MC pages with cross-cluster cannibalization watch

See `sitewide-foundation §19` for the full B↔MC pair table.

### 5.4 MC pages with internal cannibalization HIGH risk

Lower internal risk than B-cluster post-consolidation (many duplicates were stubbed). Watch list: `riskettan-mc-malmo.html` ↔ `risktvaan-mc-malmo.html` ↔ `mc-riskpaket-malmo.html` (risk training trio, see §3.3). Also A-series ↔ MC service pages overlap (§3.5).

---

## 6. MC-specific Swedish glossary supplements

Terms specific to MC-license vocabulary. Universal driving terms live in `sitewide-foundation §22`.

| Swedish | English | Use in pages |
|---|---|---|
| A-körkort | Full motorcycle license | MC pages |
| A2-körkort | Intermediate motorcycle license (35 kW limit) | MC pages |
| A1-körkort | Light motorcycle license (≤ 125 cc, ≤ 11 kW) | MC pages |
| AM-behörighet | Moped class I authorization | Reference (also B context) |
| Manöverprov MC | MC maneuvering test | `mc-uppkorning-malmo.html` |
| Halkbana MC | MC skid pan (AB Bulltoftabanan) | `risktvaan-mc-malmo.html` |
| Bromsteknik MC | MC braking technique | `mc-korteknik-malmo.html` |
| Lågfartsbana | Low-speed maneuvering course (consolidated into mc-korteknik) | `mc-korteknik-malmo.html` |
| Högfartsbana | High-speed track (consolidated into mc-korteknik) | `mc-korteknik-malmo.html` |
| Skyddsutrustning | Protective gear (helmet, jacket, gloves, pants, boots) | MC pages |
| Trehjuling | Three-wheeled motorcycle (not in current fleet) | Reference |

---

## Change log

| Date | Change |
|---|---|
| 2026-05-19 | Created as part of foundation-split refactor. Populated §1 (cluster map + consolidation map + hub-link anchors) from auto-memory notes `project_mc_cluster_audit`, `project_consolidation_map`, `project_mc_hub_anchors`. Populated §4 (operational reference) from `project_mc_cluster_facts`. §2 (keyword mapping) deliberately left as stub per user directive (don't invent from page content). §3 (cannibalization) skeleton-populated; full per-pair detail expected when MC audit programme begins. Hreflang cluster definitions moved to `sitewide-foundation §16.3` (MC Lessons) and §16.4 (MC Theory). |
| 2026-05-19 | DrivingSchool sitewide canonicalization sweep landed (commit `a24152b`); 15 MC-cluster HTML files canonicalized to `sitewide-foundation §6` template (priceRange aligned `750-17990 SEK` → `790-17990 SEK`; `logo` added; `image` URL aligned from prior `mairan566.github.io` to `andrestrafikskola.se`; some `description` drift fixed). **`index.html` deferred to a dedicated homepage audit** (carries 6 SEO-valuable extras: `hasOfferCatalog`, `sameAs`, `knowsLanguage`, `paymentAccepted`, `currenciesAccepted`, `openingHoursSpecification`) — sitewide concern, mirrored in `b-cluster-foundation` change log for cross-reference. |
| 2026-05-19 | Trust bar canonical added (§4.2). A-series pages folded into §1 scope as §1.2 (`a-korkort-malmo`, `a1-korkort-malmo`, `a2-korkort-malmo`). Subsection numbering in §1 and §4 shifted accordingly. |

---

*End of document.*

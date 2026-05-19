# Sitewide Foundation Document

**Project:** Andres Trafikskola — sitewide rules across all license clusters
**Status:** Active reference, audit phase
**Last updated:** 2026-05-19
**Companion docs:** `b-cluster-foundation.md` (B-license), `mc-cluster-foundation.md` (MC-license)

---

## Purpose

Single source of truth for sitewide rules that apply to every page on andrestrafikskola.se regardless of license type. Per-cluster foundation docs cite this document for:

- NAP master values and brand convention
- Schema canonicals (DrivingSchool, Service, BreadcrumbList, FAQPage)
- Hreflang clusters (4 sv↔en↔ar groups across both license types)
- Audit framework (the 13-step framework is license-agnostic)
- Cross-cluster cannibalization watches (B ↔ MC pairs)
- Forbidden schemas, sitewide deferred items, photography programme
- Universal Swedish driving terminology
- Trafikverket operational facts (universally applicable)

Per-cluster docs own: cluster-specific page maps, keyword targets, within-cluster cannibalization, cluster-specific fleet and prices, cluster-specific operational reference, license-specific glossary supplements.

Citation convention: future prompts and audit refs cite `sitewide-foundation §X` (this doc) or `b-cluster-foundation §X` / `mc-cluster-foundation §X` (per-cluster docs) explicitly. Bare "foundation §X.Y" references in past commit messages are git history, not live references.

---

## Table of Contents

1. [NAP master values](#1-nap-master-values)
2. [Trust bar canonical items](#2-trust-bar-canonical-items)
3. [priceRange (schema-level, business-wide)](#3-pricerange-schema-level-business-wide)
4. [Logo URL](#4-logo-url)
5. [Apostrophe convention](#5-apostrophe-convention)
6. [Canonical `DrivingSchool` schema base block](#6-canonical-drivingschool-schema-base-block)
7. [Service schema pattern](#7-service-schema-pattern)
8. [BreadcrumbList schema pattern](#8-breadcrumblist-schema-pattern)
9. [FAQPage schema + HTML-canonical rule](#9-faqpage-schema--html-canonical-rule)
10. [Canonical URL pattern](#10-canonical-url-pattern)
11. [Language attributes](#11-language-attributes)
12. [Open Graph image](#12-open-graph-image)
13. [Cookie banner](#13-cookie-banner)
14. [Schema description text](#14-schema-description-text)
15. [Forbidden schemas](#15-forbidden-schemas)
16. [Hreflang clusters (4 groups)](#16-hreflang-clusters-4-groups)
17. [Trafikverket operational facts](#17-trafikverket-operational-facts)
18. [Confirmed business facts](#18-confirmed-business-facts)
19. [Cross-cluster cannibalization watch (B ↔ MC)](#19-cross-cluster-cannibalization-watch-b--mc)
20. [Photography programme](#20-photography-programme)
21. [13-Step Audit Framework](#21-13-step-audit-framework)
22. [Universal Swedish Driving Terminology Glossary](#22-universal-swedish-driving-terminology-glossary)
23. [Change log](#change-log)

---

## 1. NAP master values

| Field | Canonical value |
|---|---|
| Business name | `Andres Trafikskola` (no apostrophe — aligned with GBP/Google Maps) |
| Street address | `Ystadvägen 22B` |
| Postal code | `214 30` |
| City | `Malmö` |
| Region | `Skåne` |
| Country (ISO) | `SE` |
| Telephone (schema) | `+46700099924` |
| Telephone (display) | `+46 700 09 99 24` |
| Email | `andreskorskola@gmail.com` |
| Website | `https://andrestrafikskola.se/` |
| Latitude | `55.58296218885443` |
| Longitude | `13.011128125304399` |
| Opening hours (schema) | `Mo-Su 10:00-16:00` |
| Opening hours (display) | `Mo-Su 10:00-16:00` |

---

## 2. Trust bar canonical items

Displayed in the hero/trust-bar section of every page.

| Item | Canonical value |
|---|---|
| Google rating | `5.0 Google-betyg` |
| Student count | `124+ elever` |
| Lesson length | `60 min/lektion` |
| Fleet (short form, cars) | `Audi A3 & Volvo V60` |
| Languages | `3 språk` (in copy: "Svenska, engelska, arabiska") |

Per-license-cluster pages may carry a license-appropriate "fleet (short form)" variant — MC pages substitute the bike fleet. See `b-cluster-foundation` §4 / `mc-cluster-foundation` §4 for the per-cluster vehicle lists.

---

## 3. priceRange (schema-level, business-wide)

```
"priceRange": "790-17990 SEK"
```

Business-wide range covering both clusters. Lower bound 790 = MC entry; upper bound 17,990 = MC intensivpaket. The B-cluster's own range is 799–13,990 SEK, but `DrivingSchool` schema is business-level, not product-level. Service-specific prices belong in `Service` or `Offer` schema, not in `DrivingSchool`.

Historical note: an older MC-side memo used `750-17990 SEK`; current canonical is `790-17990 SEK` (verified in current code across audited pages).

---

## 4. Logo URL

```
"logo": "https://andrestrafikskola.se/images/logo.png"
```

Sweep for and fix any references to the deprecated GitHub Pages URL:

```bash
grep -l "mairan566.github.io" *.html
sed -i 's|https://mairan566\.github\.io/driving-school-malmo|https://andrestrafikskola.se|g' *.html
```

---

## 5. Apostrophe convention

`Andres Trafikskola` — **no apostrophe**, ASCII characters only.

- Aligned with Google Business Profile and Google Maps
- Swedish naming convention favors no apostrophe
- Zero risk of JSON-LD parsing bugs from curly quotes
- Sweep completed 2026-05-18 (800 instances replaced: 795 literal + 5 HTML-entity-encoded)

Verification check (should return empty):

```bash
grep -l $'\xe2\x80\x99' *.html   # finds curly apostrophes U+2019
grep -l "Andre's" *.html         # finds remaining literal apostrophes
grep -l "Andre&#39;s\|Andre&apos;s" *.html  # finds HTML-entity-encoded
```

---

## 6. Canonical `DrivingSchool` schema base block

Template that should appear (with minor per-page additions) on every page.

```json
{
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "name": "Andres Trafikskola",
  "description": "Professionell körkortsutbildning i Malmö på svenska, engelska och arabiska.",
  "url": "https://andrestrafikskola.se/",
  "logo": "https://andrestrafikskola.se/images/logo.png",
  "image": "https://andrestrafikskola.se/images/logo.png",
  "telephone": "+46700099924",
  "email": "andreskorskola@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ystadvägen 22B",
    "addressLocality": "Malmö",
    "addressRegion": "Skåne",
    "postalCode": "214 30",
    "addressCountry": "SE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.58296218885443,
    "longitude": 13.011128125304399
  },
  "openingHours": "Mo-Su 10:00-16:00",
  "priceRange": "790-17990 SEK",
  "areaServed": "Malmö"
}
```

**Per-page additions:**

- **Neighborhood pages:** override `areaServed` to `"[Neighborhood], Malmö"`.
- **Service pages:** add separate `Service` schema block alongside this — see §7.
- **Pages with FAQs:** add separate `FAQPage` schema block — see §9.
- **Pages with breadcrumbs:** add separate `BreadcrumbList` schema block, Swedish-language labels — see §8.

**Drift check:** verify `addressRegion: "Skåne"` is present on every page (was missing on b-korkort-malmo and at least 3 neighborhood pages before consolidation).

**Do NOT add:** `aggregateRating`, `review`. See §15.

---

## 7. Service schema pattern

Service-tier pages (lessons, packages, intensivkurs, testlektion, risk training, theory, transmission variants, sub-skill informational guides) carry a `Service` block representing the localized service offering, distinct from the business-level `DrivingSchool` block.

Template (adapt `serviceType`, `name`, `description`, `priceRange`/`offers` per page):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "B-körkortsutbildning",
  "name": "B-körkort i Malmö – komplett trafikskoleutbildning",
  "description": "Komplett B-körkortsutbildning i Malmö inklusive körlektioner, riskutbildning del 1 och 2, samt digital teori. Undervisning på svenska, engelska och arabiska.",
  "provider": {
    "@type": "DrivingSchool",
    "name": "Andres Trafikskola",
    "url": "https://andrestrafikskola.se/"
  },
  "areaServed": {
    "@type": "City",
    "name": "Malmö"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "SEK",
    "priceRange": "799-13990 SEK",
    "url": "https://andrestrafikskola.se/korkort-pris-malmo.html"
  }
}
```

**For pages with a fixed single price** (e.g. testlektion 799 SEK), use a single-price `offers` block with `availability` field:

```json
"offers": {
  "@type": "Offer",
  "price": "799",
  "priceCurrency": "SEK",
  "availability": "https://schema.org/InStock",
  "url": "https://andrestrafikskola.se/testlektion-malmo.html"
}
```

`availableLanguage`: when applicable (Swedish-only pages with multilingual instruction available), include `"availableLanguage": ["sv", "en", "ar"]`.

`areaServed`: `string "Malmö"` in `DrivingSchool` (per §6); `City` object in `Service`.

---

## 8. BreadcrumbList schema pattern

Per-page breadcrumb schema for inner pages. Swedish labels. Adapt position depth per page:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://andrestrafikskola.se/" },
    { "@type": "ListItem", "position": 2, "name": "Trafikskola", "item": "https://andrestrafikskola.se/trafikskola.html" },
    { "@type": "ListItem", "position": 3, "name": "[Page name]", "item": "https://andrestrafikskola.se/[slug].html" }
  ]
}
```

For top-level pages (hub, trafikskola, mc-trafikskola), only positions 1+2 apply.

---

## 9. FAQPage schema + HTML-canonical rule

Pages with visible FAQ accordions carry a `FAQPage` schema block whose `mainEntity` array byte-matches the visible FAQ content.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Exact visible button text]",
      "acceptedAnswer": { "@type": "Answer", "text": "[Visible answer textContent — with <a> tags stripped, plain text only]" }
    }
  ]
}
```

**HTML-canonical rule** (codified from `feedback_audit_workflow.md`):

- The schema `name` field byte-matches the visible `<button class="faq-question">` text exactly.
- The schema `acceptedAnswer.text` field byte-matches the visible `<p>` content of `.faq-answer`, with any `<a>` tags stripped (anchor text preserved, link href dropped).
- Visible HTML is canonical. If JSON-LD and HTML disagree, align JSON to HTML.
- When auditing or pruning FAQs, mirror every visible change in the schema in the same commit.

**Note:** FAQPage rich results were deprecated by Google 2026-05-07. Schema still useful for Bing, Perplexity, AI search citations. Don't expect SERP visibility from FAQ schema; it remains good practice for AEO/LLM citation.

**Cross-page duplication:** per-license-cluster docs (§3.7 in each) maintain watchlists for which FAQs may belong on cluster FAQ hubs vs per-page accordions. The technical schema/HTML rule here is sitewide; the editorial duplication watchlist is per-cluster.

---

## 10. Canonical URL pattern

```html
<link rel="canonical" href="https://andrestrafikskola.se/[slug].html" />
<meta property="og:url" content="https://andrestrafikskola.se/[slug].html" />
```

No query strings. No `www` subdomain. No trailing slash on `.html` URLs.

Homepage exception: `index.html` canonical is `https://andrestrafikskola.se/` (the bare root URL). Forbidden-pattern scans for `hreflang="x-default" href="https://andrestrafikskola.se/"` will return 1 match (index.html) — that's correct, not a violation.

---

## 11. Language attributes

| Page set | `<html lang>` | `dir` |
|---|---|---|
| All Swedish pages | `sv` | `ltr` |
| English variants | `en` | `ltr` |
| Arabic variants | `ar` | `rtl` |

Arabic pages additionally use `dir="ltr"` on phone/email inputs (so +46 numbers and email addresses display correctly).

---

## 12. Open Graph image

Sitewide fallback: `/images/og-image.jpg` on every page. Per-page OG images deferred indefinitely (no photography plan as of 2026-05-18). When photography eventually exists, upgrade per-page during audit. See §20.

---

## 13. Cookie banner

Loads inline at end of `<body>`. Functional. Minor CLS risk from late insertion. Deferred to post-launch optimization.

---

## 14. Schema description text

Canonical short description used in `DrivingSchool` schema across all pages:

```
"Professionell körkortsutbildning i Malmö på svenska, engelska och arabiska."
```

The trilingual offering is a sitewide differentiator. Adopted as canonical across all DrivingSchool schema description fields during the 2026-05-18 sweep.

---

## 15. Forbidden schemas

| Schema type | Reason |
|---|---|
| `aggregateRating` | SERP stars come from GBP. Page schema review stars without matching visible review content violates Google's policies. Google does not show star-rating rich snippets for `DrivingSchool`/`LocalBusiness` — only `Product`/`Recipe`/`Course`/`Movie`/`Book`/`SoftwareApplication`/`Event`. |
| `Review` schema | Same reason. |
| Multi-location `LocalBusiness` with neighborhood addresses | Single-location Service Area Business. Address is always Ystadvägen 22B. Neighborhood targeting is via `areaServed`, not via fake address spoofing. |

`aggregateRating` cluster-wide cleanup completed 2026-05-03 across all 44 affected HTML files; same for the JSON-LD `review` array on `index.html`. Visible "5.0 Google-betyg" trust bars and visible testimonial cards stay (GBP handles SERP stars).

---

## 16. Hreflang clusters (4 groups)

Four sv↔en↔ar sibling groups exist on the site, all confirmed reciprocally linked. Every page in a cluster carries the identical 4-line hreflang block; every other page has no hreflang at all (the binary rule).

### 16.1 B Lessons

| hreflang | Page | URL |
|---|---|---|
| `sv` | `korlektioner-malmo.html` | `https://andrestrafikskola.se/korlektioner-malmo.html` |
| `en` | `driving-lessons-english-malmo.html` | `https://andrestrafikskola.se/driving-lessons-english-malmo.html` |
| `ar` | `arabiska-korkort-malmo.html` | `https://andrestrafikskola.se/arabiska-korkort-malmo.html` |
| `x-default` | (→ sv anchor) | `https://andrestrafikskola.se/korlektioner-malmo.html` |

Canonical block (identical in all 3 files):

```html
  <link rel="alternate" hreflang="sv" href="https://andrestrafikskola.se/korlektioner-malmo.html" />
  <link rel="alternate" hreflang="en" href="https://andrestrafikskola.se/driving-lessons-english-malmo.html" />
  <link rel="alternate" hreflang="ar" href="https://andrestrafikskola.se/arabiska-korkort-malmo.html" />
  <link rel="alternate" hreflang="x-default" href="https://andrestrafikskola.se/korlektioner-malmo.html" />
```

### 16.2 B Theory

| hreflang | Page | URL |
|---|---|---|
| `sv` | `korkortsteori-malmo.html` | `https://andrestrafikskola.se/korkortsteori-malmo.html` |
| `en` | `driving-theory-english-malmo.html` | `https://andrestrafikskola.se/driving-theory-english-malmo.html` |
| `ar` | `arabiska-teori-malmo.html` | `https://andrestrafikskola.se/arabiska-teori-malmo.html` |
| `x-default` | (→ sv anchor) | `https://andrestrafikskola.se/korkortsteori-malmo.html` |

Canonical block (identical in all 3 files):

```html
  <link rel="alternate" hreflang="sv" href="https://andrestrafikskola.se/korkortsteori-malmo.html" />
  <link rel="alternate" hreflang="en" href="https://andrestrafikskola.se/driving-theory-english-malmo.html" />
  <link rel="alternate" hreflang="ar" href="https://andrestrafikskola.se/arabiska-teori-malmo.html" />
  <link rel="alternate" hreflang="x-default" href="https://andrestrafikskola.se/korkortsteori-malmo.html" />
```

### 16.3 MC Lessons

| hreflang | Page | URL |
|---|---|---|
| `sv` | `mc-trafikskola.html` | `https://andrestrafikskola.se/mc-trafikskola.html` |
| `en` | `mc-lessons-english-malmo.html` | `https://andrestrafikskola.se/mc-lessons-english-malmo.html` |
| `ar` | `mc-korkort-arabiska.html` | `https://andrestrafikskola.se/mc-korkort-arabiska.html` |
| `x-default` | (→ sv anchor) | `https://andrestrafikskola.se/mc-trafikskola.html` |

Canonical block (identical in all 3 files):

```html
  <link rel="alternate" hreflang="sv" href="https://andrestrafikskola.se/mc-trafikskola.html" />
  <link rel="alternate" hreflang="en" href="https://andrestrafikskola.se/mc-lessons-english-malmo.html" />
  <link rel="alternate" hreflang="ar" href="https://andrestrafikskola.se/mc-korkort-arabiska.html" />
  <link rel="alternate" hreflang="x-default" href="https://andrestrafikskola.se/mc-trafikskola.html" />
```

**Naming asymmetry note:** the Arabic file `mc-korkort-arabiska.html` is the Arabic for `mc-trafikskola.html` (not for `mc-korkort-malmo.html`). The hreflang declarations are correct; the filename is just visually misleading.

### 16.4 MC Theory

| hreflang | Page | URL |
|---|---|---|
| `sv` | `mc-teori-malmo.html` | `https://andrestrafikskola.se/mc-teori-malmo.html` |
| `en` | `mc-theory-english-malmo.html` | `https://andrestrafikskola.se/mc-theory-english-malmo.html` |
| `ar` | `mc-teori-arabiska-malmo.html` | `https://andrestrafikskola.se/mc-teori-arabiska-malmo.html` |
| `x-default` | (→ sv anchor) | `https://andrestrafikskola.se/mc-teori-malmo.html` |

Canonical block (identical in all 3 files):

```html
  <link rel="alternate" hreflang="sv" href="https://andrestrafikskola.se/mc-teori-malmo.html" />
  <link rel="alternate" hreflang="en" href="https://andrestrafikskola.se/mc-theory-english-malmo.html" />
  <link rel="alternate" hreflang="ar" href="https://andrestrafikskola.se/mc-teori-arabiska-malmo.html" />
  <link rel="alternate" hreflang="x-default" href="https://andrestrafikskola.se/mc-teori-malmo.html" />
```

### 16.5 Binary rule + insertion convention

**Binary rule:** these 12 pages (3 per cluster × 4 clusters) get hreflang. **Every other HTML page on the site has no hreflang at all** — adding hreflang to pages without translated alternates causes "no return tags" warnings in Google Search Console.

**Insertion convention:** the 4 lines go inside `<head>`, before the first `<script type="application/ld+json">` block, with 2-space indentation.

**x-default convention:** points to the Swedish version of the cluster (sv is the canonical fallback). Self-pointer for the sv anchor's own page (its sv URL == its x-default URL).

**Special case `index.html`:** canonical is the bare root URL `https://andrestrafikskola.se/`; not a member of any hreflang cluster (homepage is Swedish-only).

**Exempt set:** ~20 redirect stubs (no hreflang on noindex stubs) + `404.html` (error page, no canonical/hreflang appropriate).

---

## 17. Trafikverket operational facts

Universal Swedish driving facts applicable regardless of license type.

| Fact | Value | Source |
|---|---|---|
| Teoriprov total frågor | 70 | Trafikverket |
| Teoriprov poänggivande | 65 | Trafikverket |
| Teoriprov pilotfrågor (testfrågor, not scored) | 5 | Trafikverket |
| Teoriprov minimum rätt | 52 of 65 | Trafikverket |
| Teoriprov time | 50 min | Trafikverket |
| Teoriprov avgift dagtid | 420 SEK | Trafikverket |
| Teoriprov avgift kvällstid/helg | 520 SEK | Trafikverket |
| Teoriprov validity (after pass) | 4 months | Trafikverket |
| Uppkörning duration | ~45 min | Trafikverket |
| Uppkörning avgift dagtid | 1,000 SEK | Trafikverket |
| Uppkörning avgift kvällstid/helg | 1,400 SEK | Trafikverket |
| Trafikverket location (Malmö) | Cederströmsgatan 1 | Trafikverket |
| Körkortsfoto vid prov | 80 SEK | Trafikverket |
| Körkort validity (after issuance) | 10 år | Transportstyrelsen |
| Körkortet förnyas hos | Transportstyrelsen | Transportstyrelsen |
| Prövotid (förstagångsförare) | 2 år | Transportstyrelsen — all license categories |
| Körkortstillstånd validity | 5 år | Transportstyrelsen |
| Risk 1 / Risk 2 validity (B and MC) | 5 år after completion | Trafikverket |

**Theory test phrasing (RULE T1, applies to both B and MC):**

Long form (FAQ/prose): "Teoriprovet hos Trafikverket består av 70 frågor varav 5 är testfrågor som inte räknas. Du behöver minst 52 rätt av de 65 räknade frågorna för godkänt. Provtiden är 50 minuter. Godkänt teoriprov är giltigt i [4 månader för B / 1 år för MC]."

Short form (table cells, compact cards): `70 frågor (5 testfrågor), 52/65 rätt, 50 min`

**FORBIDDEN:** `65 frågor, 52 rätt, 50 min` (drops the 70 presented + 5 testfrågor distinction — factually incomplete).

---

## 18. Confirmed business facts

| Fact | Value |
|---|---|
| Org nr | 559435-8979 |
| Opening hours (sitewide schema and display) | Mo-Su 10:00-16:00 |
| Business priceRange (DrivingSchool schema) | 790-17990 SEK |
| GBP setup | Hybrid (storefront + service area); 17 service areas (Malmö + 12 neighborhoods + 4 surrounding kommuner) |
| Elev/booking portal | `https://elev.andrestrafikskola.se/` (school's own infrastructure — NOT korkortonline.se) |
| Apostrophe sweep status | 800 instances of `Andre's` → `Andres` completed 2026-05-18 |
| Geo coordinate sweep | Canonical lat/lon `55.58296218885443` / `13.011128125304399` applied sitewide 2026-05-18 |
| Hreflang sweep status | Binary rule applied sitewide 2026-05-19 (commit `7c02b26`); 4-cluster restoration `196b23b` |

---

## 19. Cross-cluster cannibalization watch (B ↔ MC)

Highest-risk pairs because both target the same base keyword differing only by license type.

| B page | MC counterpart | Shared keyword space | Differentiation rule |
|---|---|---|---|
| `riskettan-malmo.html` | `riskettan-mc-malmo.html` | `riskettan`, `risk 1` | B owns `riskettan malmö` + `riskettan b-körkort`. MC owns `riskettan mc`, `risk 1 motorcykel`. Title/H1 must specify license type. |
| `risktvaan-malmo.html` | `risktvaan-mc-malmo.html` | `risktvåan`, `risk 2`, `halkbana` | B owns `risktvåan malmö` + `halkbana malmö`. MC owns `risktvåan mc`, `halkbana mc`. |
| `uppkorning-malmo.html` | `mc-uppkorning-malmo.html` | `uppkörning`, `körprov` | B title/H1 says "B-körkort" or "bil"; MC says "MC". |
| `lan-bil-uppkorning-malmo.html` | `hyra-mc-uppkorning-malmo.html` | `låna fordon uppkörning` | B says "bil", MC says "mc". No generic "fordon" anywhere. |
| `korkortsteori-malmo.html` | `mc-teori-malmo.html` | `körkortsteori`, `teori körkort` | Verified ~60% similarity, properly differentiated by license-specific content. Maintain. |

Sub-skill / environment pages with MC counterparts (each B/MC pair owns its license-specific keyword):

| B page | MC counterpart (where exists) |
|---|---|
| `bostadsomrade-korning-malmo.html` | `mc-bostadsomrade-malmo.html` (now stub → mc-trafikskola) |
| `landsvagskoring-malmo.html` | `mc-landsvag-malmo.html` (now stub → mc-korlektioner) |
| `motorvagskoring-malmo.html` | `mc-motorvag-malmo.html` (now stub → mc-korlektioner) |
| `stadstrafik-malmo.html` | `mc-stadstrafik-malmo.html` (now stub → mc-korlektioner) |

For consolidation map (which MC pages are now redirect stubs), see `mc-cluster-foundation §1.10`.

**Differentiation rule:** every cross-cluster pair's title/H1/meta description must include explicit license-type marker. Body copy must not be paragraph-level reused across the pair.

---

## 20. Photography programme

Status: deferred. No photography in production as of 2026-05-18. When photography eventually exists, it unlocks per-page OG images, hero images, vehicle photos for Service schema (cars + bikes), GBP photo gallery expansion (currently below 20-photo threshold), and instructor portraits for E-E-A-T.

**Shot list when photography happens (priority order):**

1. Storefront / exterior of Ystadvägen 22B
2. The car fleet (3 vehicles) — multiple angles each
3. The MC fleet (BMW F800 GS for A; Yamaha MT-07 for A2; loaner A1 bike where applicable) — multiple angles each
4. Instructor portraits (for E-E-A-T)
5. Classroom / office interior (teori-page hero, GBP)
6. Vehicle interior shots (dashboard, gear stick — especially for `manuell-korning-malmo.html`)
7. Action shots: lesson in progress, parking practice, motorväg, MC on halkbana
8. Neighborhood-specific shots (Hyllie station pickup, Emporia rondeller, E22 vid Husie, etc.)
9. Halkbana location (AB Bulltoftabanan, Rimfrostgatan 5 — relevant for MC Risk 2 page)

Programme is business-level. If MC eventually requires MC-specific shot requirements beyond what's listed here, add as an addendum in `mc-cluster-foundation §4`.

---

## 21. 13-Step Audit Framework

Reference for the per-page audit. Each page goes through all 13 steps. Weighting varies by page type (sub-skill pages weight steps 4–6 heavily, neighborhood pages weight step 12 heavily, etc.).

1. **Read HTML carefully.** Understand current structure and content before deciding what to change.
2. **Keyword frequency + intent alignment.** Count occurrences of assigned primary/secondary keywords from the per-cluster keyword map. Flag if page is over- or under-targeting vs. its assigned intent.
3. **Title tag and meta description optimization.** Under 60 chars / under 160 chars. Primary keyword in front-half of title. Click-driver in meta (USP, price hook, social proof, CTA verb). Write 2–3 title options and 2–3 meta options.
4. **Header structure (H1/H2/H3).** Single H1 with primary keyword. H2s mapped to search-intent sub-questions and secondary keywords. H3s for FAQ-style sub-points. Restructure to match SERP.
5. **Content rewriting and expansion.** Thin pages expanded to genuine depth (service pages ~600 words, hub/pillar 800–1500, never padded). Content gaps from competitor spot-checks filled. People Also Ask questions surfaced and folded into FAQ. Swedish driving factual integrity throughout.
6. **Swedish language pass.** Swedish driving terminology used naturally. Plain, conversational register. Not over-Englishified. Not bureaucratic ("ger dig rätt att" → "du får"; "exempelvis" → "till exempel"; "endast" → "bara"; etc.).
7. **FAQ section.** Unique questions per page (no copy-paste across pages). Answers add value beyond body content. FAQPage schema synced byte-for-byte to visible FAQ per §9. Questions sourced from real People Also Ask + competitor FAQ analysis, not invented.
8. **Internal linking.** Contextual links to relevant siblings, the cluster hub, and (where genuinely relevant) cross-cluster. Every link uses descriptive keyword-bearing anchor text. Anchors not repeated identically across many pages.
9. **Image audit.** Alt text descriptive and keyword-aware (without stuffing). Filenames flagged if `IMG_1234`-style. Lazy-loading attribute checked. Dimensions specified. Format flagged for WebP conversion. *Largely deferred until photography arrives — see §20.*
10. **Schema markup audit and expansion.** Verify against §6. Add Service schema for service pages per §7. Add BreadcrumbList per §8. Verify FAQPage matches visible FAQ per §9. Verify Open Graph/Twitter Card meta tags. **Do NOT add `aggregateRating` or `review`** per §15.
11. **Technical on-page checks.** Canonical pointing to self per §10. Hreflang block correct per §16 (only on the 12 clustered pages; binary rule). Viewport meta. `lang` attribute on `<html>` per §11. Charset. Robots meta if any.
12. **NAP and trust-signal consistency.** Match §1 and §2 exactly. Trust signals (5.0 betyg, 124+ elever, hours) present and consistent. E-E-A-T signals — instructor names with roles where relevant, real expertise demonstrated, no generic AI-flavor "we are passionate about driving" filler.
13. **URL slug review.** Flag if slug isn't optimal. URLs not changed casually (requires 301s at deployment). Document any that should change at deployment time.

---

## 22. Universal Swedish Driving Terminology Glossary

Terms applicable across both license types. License-specific terms (B-only: prövotid context, villkor 78, backsbacke, växelspak, koppling; MC-only: A1/A2/A behörighet specifics, halkbana-mc, motorcykel-specific terms) live in respective cluster docs.

| Swedish | English | Use in pages |
|---|---|---|
| Trafikskola | Driving school | Brand category |
| Körskola | Driving school (synonym) | Brand category |
| Körkort | Driver's license | Universal |
| Körlektion | Driving lesson | Service pages |
| Körpaket | Lesson bundle/package | Service pages |
| Intensivkurs | Intensive course | Service pages |
| Testlektion | Test/trial lesson | Service pages |
| Uppkörning | Practical driving test (körprov) | Test pages |
| Förarprövare | Test examiner | Test pages |
| Förarprov | Driving test (umbrella) | Test pages |
| Kunskapsprov / teoriprov | Theory/knowledge test | Theory pages |
| Riskutbildning 1 / Riskettan | Risk 1 training (theory) | Risk pages |
| Riskutbildning 2 / Risktvåan | Risk 2 training (practical, halkbana) | Risk pages |
| Halkbana | Skid pan / slippery track | Risk 2 pages |
| Körkortstillstånd | Learner's permit | Foundational |
| Prövotid | Probation period (2 years after first license, all categories) | Foundational |
| Manöverprov | Maneuvering test | Test |
| Säkerhetskontroll | Pre-drive vehicle safety check | Sub-skill |
| Övningskörning | Practice driving (with handledare) | Sub-skill |
| Handledare | Supervising private practice driver | Sub-skill |
| Motorväg | Highway / motorway (110+ km/h) | Sub-skill |
| Motortrafikled | Express road / motor traffic route | Sub-skill |
| Landsväg | Country road | Sub-skill |
| Stadstrafik | City traffic | Sub-skill |
| Bostadsområde | Residential area | Sub-skill |
| Gångfartsområde | Walking-pace zone | Sub-skill |
| 30-zon | 30 km/h zone | Sub-skill |
| Rondell / cirkulationsplats | Roundabout | Sub-skill |
| Flerfilig rondell | Multi-lane roundabout | Sub-skill |
| Påfart | On-ramp | Sub-skill |
| Avfart | Off-ramp | Sub-skill |
| Filbyte | Lane change | Sub-skill |
| Möten | Oncoming traffic encounters | Sub-skill |
| Omkörning | Overtaking | Sub-skill |
| Kurvor | Curves | Sub-skill |
| Hastighetsanpassning | Speed adaptation | Sub-skill |
| Trafikverket | Swedish Transport Agency | Universal |
| Transportstyrelsen | Swedish Transport Styrelsen (issues licenses, körkortstillstånd) | Universal |
| Cederströmsgatan | Trafikverket Malmö test office address | Test pages |
| Elev | Student / pupil | Trust bar |
| Trafiklärare | Driving instructor | E-E-A-T context |

---

## Change log

| Date | Change |
|---|---|
| 2026-05-19 | Created as part of foundation-split refactor. Extracted from `b-cluster-foundation.md` §4, parts of §3 (cross-cluster cannibalization → §19), parts of §5 (Trafikverket facts → §17, photography → §20), Appendix A (→ §21), Appendix C (→ §22). Hreflang section (§16) expanded from 2 documented clusters to all 4 (MC clusters were documented only in auto-memory `project_hreflang_groups.md`). New formalized sections: §7 Service schema pattern, §8 BreadcrumbList pattern, §9 FAQPage + HTML-canonical rule, §18 Confirmed business facts. |

---

*End of document.*

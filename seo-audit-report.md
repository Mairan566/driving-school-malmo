# SEO Audit Report: Andre's Trafikskola

**Date:** 2026-03-27
**Domain:** andrestrafikskola.se
**Pages audited:** 64 HTML files
**Site type:** Local business (driving school in Malmo, Sweden)

---

## Executive Summary

The site has **strong technical SEO foundations** -- unique titles, meta descriptions, canonical tags, schema markup, and hreflang on all pages. However, there are significant gaps in **content quality, page performance, and E-E-A-T signals** that are likely limiting rankings.

### Top 5 Priority Issues

1. **3 new location pages missing from sitemap.xml** (crawlability blocker)
2. **Outdated year "2025"** on 2 pricing pages + "2023" copyright on all 64 pages
3. **No privacy policy, terms, or cookie consent** (GDPR/trust risk)
4. **65-70% content duplication** across location pages (thin content risk)
5. **Images not optimized** (no WebP, 1.6 MB background image)

### Overall Health Score

| Category | Score | Notes |
|----------|-------|-------|
| Crawlability & Indexation | 8/10 | Good, except 3 missing sitemap entries |
| Technical Foundations | 6/10 | Images and CSS unoptimized |
| On-Page SEO | 8/10 | Strong titles/metas, minor length issues |
| Content Quality | 5/10 | High duplication, thin location pages |
| E-E-A-T & Trust | 4/10 | Missing critical trust pages |

---

## 1. Crawlability & Indexation

### 1.1 robots.txt -- PASS

- Allows all crawlers (`User-agent: *`, `Allow: /`)
- References sitemap at `https://andrestrafikskola.se/sitemap.xml`

### 1.2 XML Sitemap -- 3 PAGES MISSING

**Impact:** High
**Priority:** Critical

The sitemap contains 60 URLs. All map to existing files. However, 3 new location pages are **not in the sitemap:**

| Missing Page | Status |
|---|---|
| `korskola-sodervarn.html` | New file, untracked in git |
| `korskola-varnhem.html` | New file, untracked in git |
| `korskola-vastra-hamnen.html` | New file, untracked in git |

**Fix:** Add these 3 URLs to `sitemap.xml` with appropriate priority and lastmod dates.

### 1.3 Canonical Tags -- PASS

All 63 indexed pages have self-referencing canonical tags pointing to HTTPS URLs. The 404 page correctly omits a canonical (and has `noindex, follow`).

### 1.4 Noindex -- PASS

Only `404.html` has a noindex tag. All content pages are indexable.

### 1.5 Hreflang -- PASS

All pages have proper hreflang tags:
- Swedish pages: `hreflang="sv"` + `hreflang="x-default"`
- English pages: `hreflang="en"` + `hreflang="x-default"`
- Arabic pages: `hreflang="ar"` + `hreflang="x-default"`

### 1.6 Orphan Pages -- 1 FOUND

**Impact:** Medium

`mc-korskola-skane.html` has **zero inbound internal links** from any other page. It is in the sitemap, so Google can find it, but there is no navigation path for users.

**Fix:** Add a link to this page from `mc-trafikskola.html` or related MC pages.

### 1.7 Broken Internal Links -- PASS

No broken internal links found across all 64 pages.

---

## 2. Technical Foundations

### 2.1 Images -- NO WEBP, OVERSIZED FILES

**Impact:** High
**Priority:** High

| File | Format | Size | Issue |
|---|---|---|---|
| besokstider-bg.jpg | JPEG | 1,551 KB | Extremely oversized |
| hero-bg.jpg | JPEG | 677 KB | Large |
| priser-bg.jpg | JPEG | 122 KB | OK |
| logo.png | PNG | 94 KB | Large for a logo |
| andre.jpg | JPEG | 70 KB | OK |
| speed-limit.png | PNG | 37 KB | OK |
| cliff-danger.png | PNG | 16 KB | OK |
| traffic-light.png | PNG | 16 KB | OK |
| olycka.png | PNG | 11 KB | OK |
| crosswalk.png | PNG | 7 KB | OK |
| no-entry.png | PNG | 4 KB | OK |

**Total image weight:** 2.6 MB
**WebP images:** 0 (none exist)

**Additionally:** 3 pages load images directly from `images.unsplash.com` instead of self-hosting, creating an external dependency with no caching control.

**Recommendations:**
- Convert all images to WebP (25-35% size reduction)
- Compress `besokstider-bg.jpg` from 1.6 MB to ~200 KB
- Compress `logo.png` from 94 KB to ~20 KB
- Self-host the 3 Unsplash images

### 2.2 CSS -- NOT MINIFIED

**Impact:** Medium

| File | Lines | Size |
|---|---|---|
| css/style.css | 2,229 | 47.6 KB |
| css/inner-page.css | 1,244 | 26.6 KB |

**Total CSS:** 74.2 KB (unminified, human-readable with comments)

**Fix:** Minify for production (estimated 30-40% reduction, saving ~25 KB).

### 2.3 External Dependencies

| Domain | Purpose |
|---|---|
| fonts.googleapis.com | Google Fonts (Poppins 400/500/600/700) |
| fonts.gstatic.com | Font file delivery |
| cdnjs.cloudflare.com | Font Awesome 6.4.0 |
| images.unsplash.com | 3 stock photos (not self-hosted) |
| www.google.com | Maps embed iframes |

### 2.4 Image Alt Text -- PASS

100% of images across all audited pages have descriptive alt attributes with relevant keywords. Accessibility standards met.

---

## 3. On-Page SEO

### 3.1 Title Tags

**64 pages audited. 0 duplicates. 0 missing.**

**15 titles over 60 characters** (risk of SERP truncation):

| Page | Chars | Over by |
|---|---|---|
| mc-motorvag-malmo.html | 68 | 8 |
| mc-bromsteknik-malmo.html | 67 | 7 |
| mc-intensivkurs-malmo.html | 66 | 6 |
| mc-manovertraning-malmo.html | 65 | 5 |
| mc-stadstrafik-malmo.html | 65 | 5 |
| mc-trafik-malmo.html | 65 | 5 |
| mc-korkort-arabiska.html | 64 | 4 |
| mc-manoverkoring-malmo.html | 64 | 4 |
| a-korkort-malmo.html | 63 | 3 |
| korpaket-malmo.html | 63 | 3 |
| riskettan-mc-malmo.html | 63 | 3 |
| a1-korkort-malmo.html | 62 | 2 |
| riskpaket-korkort-malmo.html | 62 | 2 |
| risktvaan-mc-malmo.html | 62 | 2 |
| testlektion-malmo.html | 61 | 1 |

**Note:** Some contain `&amp;` in HTML source (renders as `&`, 1 char). Actual rendered lengths are 4 chars shorter for those pages.

**Fix:** Shorten the top offenders (mc-motorvag, mc-bromsteknik, mc-intensivkurs) by abbreviating or removing words. Example: "Bromsteknik MC Malmo -- Noedbromsning & ABS | Andre's Trafikskola" (67) could become "MC Bromsteknik Malmo | Andre's Trafikskola" (43).

### 3.2 Meta Descriptions

**64 pages audited. 0 duplicates. 0 missing.**

All meta descriptions are **120-160 characters** with CTAs ("Boka idag!", "Ring idag!"), key differentiators (70 min, 5.0 betyg, pricing), and location keywords.

No issues found. All within optimal range.

### 3.3 Heading Structure

**All 64 pages have exactly 1 H1 tag.** No multiple-H1 issues. All H1s align with the page title and target keyword.

### 3.4 Schema Markup (JSON-LD)

**63 of 63 indexed pages have schema markup.** Only 404.html lacks it (appropriate).

| Schema Type | Pages | Notes |
|---|---|---|
| DrivingSchool | 63 | All indexed pages -- business info, rating, hours |
| Service | ~55 | Service pages with name, provider, area |
| BreadcrumbList | ~60 | All subpages (not homepage) |
| FAQPage | ~30 | Pages with FAQ sections |
| Review / AggregateRating | 1 | Homepage (5.0 stars, 123 reviews) |

**Note:** Schema validity cannot be fully confirmed via file reading alone. Recommend validating at [Google Rich Results Test](https://search.google.com/test/rich-results).

### 3.5 Open Graph & Twitter Cards -- PASS

All 63 indexed pages have complete OG tags (og:title, og:description, og:image, og:url, og:type, og:locale, og:site_name) and Twitter Card tags.

### 3.6 Geolocation Meta Tags -- PASS

All pages include `geo.region` (SE-M), `geo.placename`, `geo.position`, and `ICBM` coordinates.

---

## 4. Content Quality

### 4.1 Location Page Duplication -- HIGH RISK

**Impact:** High
**Priority:** High

The 9 sub-location pages (korskola-husie, korskola-centrum, korskola-hyllie, etc.) share **65-70% identical content**:

**Identical across all 9 pages:**
- Trust bar (5.0 betyg, 123+ elever, 70 min/lektion, Audi A3 & Volvo V60, 3 sprak)
- 3 out of 5 FAQ questions and answers (pricing, lesson length, languages)
- Contact form (identical)
- Map embed (identical iframe URL)
- CTA banner text
- Footer content

**Unique per page:** Only ~150-200 words of truly unique content (2-3 paragraphs about local roads/landmarks and 1-2 unique FAQs).

**Risk:** Google may see these as doorway pages or thin content, potentially demoting or consolidating them.

**Fix:** Add 500+ words of unique content per page covering:
- Specific driving challenges in each neighborhood
- Detailed route descriptions for that area
- Local traffic patterns and tips
- Area-specific student testimonials

### 4.2 MC Page Duplication -- MODERATE

| MC Page Group | Duplication % | Notes |
|---|---|---|
| MC location pages (3) | 55-60% | Similar to car location pages |
| MC service/topic pages (6) | 40-45% | More unique content per page |
| MC general pages (8) | 35-40% | Mostly boilerplate overlap |

### 4.3 Thin Content Risk

After removing shared boilerplate (nav, footer, trust bar, contact form, CTAs), these pages have under 300 words of truly unique body content:

- All 9 korskola sub-location pages (~150-200 unique words each)
- mc-korskola-hyllie.html
- mc-korskola-limhamn.html
- mc-korskola-skane.html

### 4.4 Keyword Cannibalization

**High Risk:**

| Pages | Competing Query | Issue |
|---|---|---|
| mc-manoverkoring-malmo.html vs mc-manovertraning-malmo.html | "MC manover Malmo" | Extremely similar topics |
| mc-korkort-malmo.html vs mc-trafikskola.html | "MC korkort Malmo" | Both target same primary keyword |
| korskola-mollevangen vs korskola-sodervarn | "korskola sodra Malmo" | Adjacent areas, overlapping content |
| korskola-centrum vs korskola-vastra-hamnen | "korskola centrala Malmo" | Both cover inner-city driving |

**Medium Risk:**

| Pages | Competing Query |
|---|---|
| korlektioner-malmo vs b-korkort-malmo vs korskola-malmo | "korkort Malmo" / "korlektioner Malmo" |
| korpaket-malmo vs korkort-pris-malmo | "korkort pris Malmo" |

### 4.5 Outdated Content

**Impact:** Medium-High
**Priority:** High (quick fix)

| Issue | Pages Affected |
|---|---|
| **"2025" in title/meta** (should be 2026) | `korkort-pris-malmo.html` (5 instances), `mc-paket-malmo.html` (6 instances) |
| **Footer copyright "2023"** (should be 2026) | **All 64 pages** |
| **Inconsistent student count** | `korskola-malmo.html` shows "122+" in stat box (line 168) and "122 nojda elever" (line 180) but "123+" in trust bar and all meta tags |

### 4.6 Internal Linking

Most inbound links come from nav/footer boilerplate. **Contextual (in-content) linking is weak**, especially to high-value commercial pages like `b-korkort-malmo.html`.

**Recommendation:** Add contextual links within body content paragraphs pointing to key pages (pricing, B-korkort, MC-korkort, intensivkurs).

---

## 5. E-E-A-T & Trust Signals

### 5.1 Missing Critical Pages

**Impact:** High
**Priority:** Critical

| Missing Page | Type | Why It Matters |
|---|---|---|
| **Integritetspolicy (Privacy Policy)** | Legal/Trust | GDPR requirement -- site collects personal data via contact forms |
| **Villkor (Terms & Conditions)** | Legal/Trust | Standard business requirement |
| **Cookie consent** | Legal/GDPR | No cookie banner or policy found |
| **Dedicated Om Oss (About) page** | E-E-A-T | Currently just an anchor section on homepage |

### 5.2 Weak E-E-A-T Signals

**Present:**
- Business name, address, phone, email on all pages
- Organization number (559435-8979) in footer
- Google Maps embed
- 5.0 Google rating mentioned
- Instructor name (Andre Al-imam) referenced

**Missing:**
- **No instructor credentials page** (years of experience, certifications, training qualifications)
- **No professional affiliations** (STR membership, Trafikverket certification)
- **No trust badges** (insurance, safety record, certifications)
- **No blog/educational content** demonstrating expertise
- **No embedded Google Reviews widget** (reviews are static text only)

For a regulated industry like driving education, these gaps are significant.

---

## 6. Prioritized Action Plan

### Phase 1: Critical Fixes (immediate)

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Add 3 new location pages to `sitemap.xml` | High | 5 min |
| 2 | Update "2025" to "2026" in `korkort-pris-malmo.html` and `mc-paket-malmo.html` | Medium | 10 min |
| 3 | Fix "122+" to "123+" in `korskola-malmo.html` stat box | Low | 2 min |
| 4 | Update footer copyright from "2023" to "2026" across all 64 pages | Low | 15 min |

### Phase 2: High-Impact Improvements (this week)

| # | Action | Impact | Effort |
|---|---|---|---|
| 5 | Create privacy policy page (`integritetspolicy.html`) | High (trust/legal) | 1-2 hrs |
| 6 | Create terms & conditions page | Medium (trust/legal) | 1-2 hrs |
| 7 | Add cookie consent banner | Medium (GDPR) | 1-2 hrs |
| 8 | Optimize images to WebP, compress `besokstider-bg.jpg` | High (performance) | 1-2 hrs |
| 9 | Add internal link to `mc-korskola-skane.html` from MC pages | Medium | 5 min |

### Phase 3: Content Quality (this month)

| # | Action | Impact | Effort |
|---|---|---|---|
| 10 | Expand location page unique content to 500+ words each | High | 1-2 days |
| 11 | Create dedicated About page with instructor credentials | High (E-E-A-T) | 2-3 hrs |
| 12 | Resolve keyword cannibalization (mc-manoverkoring vs mc-manovertraning) | Medium | 2-3 hrs |
| 13 | Shorten 15 titles over 60 characters | Low | 30 min |
| 14 | Minify CSS files for production | Medium (performance) | 30 min |

### Phase 4: Long-Term (ongoing)

| # | Action | Impact | Effort |
|---|---|---|---|
| 15 | Start educational blog (build topical authority) | High | Ongoing |
| 16 | Add professional trust badges/certifications to pages | Medium | 1 hr |
| 17 | Self-host Unsplash images | Low | 30 min |
| 18 | Add more contextual internal links in body content | Medium | Ongoing |
| 19 | Monitor Core Web Vitals in Search Console | Medium | Ongoing |
| 20 | Create centralized FAQ hub page | Low | 2-3 hrs |

---

## Appendix A: Full Page Inventory

| # | File | Title (chars) | Meta Desc | Canonical | Schema | Issues |
|---|---|---|---|---|---|---|
| 1 | 404.html | 41 | Yes | No | None | Noindex -- correct |
| 2 | a-korkort-malmo.html | 63 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 3 | a1-korkort-malmo.html | 62 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 4 | a2-korkort-malmo.html | 57 | Yes | Yes | DS, S, BL, FAQ | -- |
| 5 | arabiska-korkort-malmo.html | 52 | Yes | Yes | DS, S, BL | -- |
| 6 | arabiska-teori-malmo.html | 57 | Yes | Yes | DS, S, BL | -- |
| 7 | automat-korkort-malmo.html | 42 | Yes | Yes | DS, S, BL | -- |
| 8 | b-korkort-malmo.html | 58 | Yes | Yes | DS, S, BL | -- |
| 9 | backning-parkering-malmo.html | 58 | Yes | Yes | DS, S, FAQ, BL | -- |
| 10 | bostadsomrade-korning-malmo.html | 51 | Yes | Yes | DS, S, FAQ, BL | -- |
| 11 | driving-lessons-english-malmo.html | 56 | Yes | Yes | DS, S, BL | -- |
| 12 | driving-theory-english-malmo.html | 55 | Yes | Yes | DS, S, BL | -- |
| 13 | faq-korkort.html | 56 | Yes | Yes | FAQ, BL | -- |
| 14 | faq-mc-korkort.html | 59 | Yes | Yes | FAQ, BL | -- |
| 15 | hyra-mc-uppkorning-malmo.html | 51 | Yes | Yes | DS, S, BL, FAQ | -- |
| 16 | index.html | 49 | Yes | Yes | DS, FAQ | -- |
| 17 | intensivkurs-korkort-malmo.html | 48 | Yes | Yes | DS, S, BL | -- |
| 18 | korkort-pris-malmo.html | 47 | Yes | Yes | DS, S, BL, FAQ | "2025" in title |
| 19 | korkortsteori-malmo.html | 41 | Yes | Yes | DS, S, BL, FAQ | -- |
| 20 | korlektioner-malmo.html | 49 | Yes | Yes | DS, S, FAQ, BL | -- |
| 21 | korpaket-malmo.html | 63 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 22 | korskola-centrum-malmo.html | 44 | Yes | Yes | DS, S, BL, FAQ | -- |
| 23 | korskola-husie.html | 42 | Yes | Yes | DS, S, BL, FAQ | -- |
| 24 | korskola-hyllie.html | 43 | Yes | Yes | DS, S, BL, FAQ | -- |
| 25 | korskola-limhamn.html | 44 | Yes | Yes | DS, S, BL, FAQ | -- |
| 26 | korskola-malmo.html | 51 | Yes | Yes | DS, S, BL | "122+" inconsistency |
| 27 | korskola-mollevangen.html | 48 | Yes | Yes | DS, S, BL, FAQ | -- |
| 28 | korskola-rosengard.html | 46 | Yes | Yes | DS, S, BL, FAQ | -- |
| 29 | korskola-sodervarn.html | 46 | Yes | Yes | DS, S, BL, FAQ | Not in sitemap |
| 30 | korskola-varnhem.html | 44 | Yes | Yes | DS, S, BL, FAQ | Not in sitemap |
| 31 | korskola-vastra-hamnen.html | 50 | Yes | Yes | DS, S, BL, FAQ | Not in sitemap |
| 32 | lan-bil-uppkorning-malmo.html | 54 | Yes | Yes | DS, S, BL, FAQ | -- |
| 33 | landsvagskoring-malmo.html | 57 | Yes | Yes | DS, S, FAQ, BL | -- |
| 34 | manuell-korning-malmo.html | 49 | Yes | Yes | DS, S, BL | -- |
| 35 | mc-bromsteknik-malmo.html | 67 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 36 | mc-intensivkurs-malmo.html | 66 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 37 | mc-korkort-arabiska.html | 64 | Yes | Yes | DS, S, BL | Title over 60 |
| 38 | mc-korkort-malmo.html | 50 | Yes | Yes | DS, S, BL | -- |
| 39 | mc-korlektioner-malmo.html | 60 | Yes | Yes | DS, S, BL, FAQ | -- |
| 40 | mc-korskola-hyllie.html | 46 | Yes | Yes | DS, S, BL | -- |
| 41 | mc-korskola-limhamn.html | 47 | Yes | Yes | DS, S, BL | -- |
| 42 | mc-korskola-skane.html | 39 | Yes | Yes | DS, S, BL | Orphan page |
| 43 | mc-lessons-english-malmo.html | 51 | Yes | Yes | DS, S, BL | -- |
| 44 | mc-manoverkoring-malmo.html | 64 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 45 | mc-manovertraning-malmo.html | 65 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 46 | mc-motorvag-malmo.html | 68 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 47 | mc-paket-malmo.html | 50 | Yes | Yes | DS, S, BL, FAQ | "2025" in title |
| 48 | mc-riskpaket-malmo.html | 58 | Yes | Yes | DS, S, BL, FAQ | -- |
| 49 | mc-stadstrafik-malmo.html | 65 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 50 | mc-testlektion-malmo.html | 56 | Yes | Yes | DS, S, BL, FAQ | -- |
| 51 | mc-trafik-malmo.html | 65 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 52 | mc-trafikskola.html | 55 | Yes | Yes | DS, BL, FAQ | -- |
| 53 | mc-uppkorning-malmo.html | 56 | Yes | Yes | DS, S, BL, FAQ | -- |
| 54 | motorvagskoring-malmo.html | 57 | Yes | Yes | DS, S, BL, FAQ | -- |
| 55 | riskettan-malmo.html | 60 | Yes | Yes | DS, S, BL | -- |
| 56 | riskettan-mc-malmo.html | 63 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 57 | riskpaket-korkort-malmo.html | 62 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 58 | risktvaan-malmo.html | 48 | Yes | Yes | DS, S, BL | -- |
| 59 | risktvaan-mc-malmo.html | 62 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 60 | stadstrafik-malmo.html | 59 | Yes | Yes | DS, S, BL, FAQ | -- |
| 61 | testlektion-malmo.html | 61 | Yes | Yes | DS, S, BL, FAQ | Title over 60 |
| 62 | trafikskola.html | 51 | Yes | Yes | DS, BL, FAQ | -- |
| 63 | uppkorning-malmo.html | 38 | Yes | Yes | DS, S, BL, FAQ | -- |
| 64 | uppkorningsrutter-malmo.html | 54 | Yes | Yes | DS, S, BL, FAQ | -- |

*Schema key: DS = DrivingSchool, S = Service, BL = BreadcrumbList, FAQ = FAQPage*

---

## Appendix B: Keyword Cannibalization Map

### Location Pages (High Risk)

```
korskola-malmo.html (hub)
  |-- korskola-centrum-malmo.html    "Korskola Centrum Malmo"
  |-- korskola-hyllie.html           "Korskola Hyllie Malmo"
  |-- korskola-limhamn.html          "Korskola Limhamn Malmo"
  |-- korskola-husie.html            "Korskola Husie Malmo"
  |-- korskola-rosengard.html        "Korskola Rosengard Malmo"
  |-- korskola-mollevangen.html      "Korskola Mollevangen Malmo"
  |-- korskola-sodervarn.html        "Korskola Sodervarn Malmo"
  |-- korskola-varnhem.html          "Korskola Varnhem Malmo"
  |-- korskola-vastra-hamnen.html    "Korskola Vastra Hamnen Malmo"
```

All 9 sub-pages share 65-70% identical content. Risk: Google consolidation or demotion.

### MC Overlap (Medium Risk)

```
mc-manoverkoring-malmo.html   vs   mc-manovertraning-malmo.html
mc-korkort-malmo.html         vs   mc-trafikskola.html
```

### Service Overlap (Medium Risk)

```
korlektioner-malmo.html   vs   b-korkort-malmo.html   vs   korskola-malmo.html
korpaket-malmo.html        vs   korkort-pris-malmo.html
```

---

## Appendix C: Image Optimization Targets

| File | Current Size | Target Size | Savings |
|---|---|---|---|
| besokstider-bg.jpg | 1,551 KB | ~200 KB (WebP) | ~1,350 KB |
| hero-bg.jpg | 677 KB | ~150 KB (WebP) | ~527 KB |
| priser-bg.jpg | 122 KB | ~40 KB (WebP) | ~82 KB |
| logo.png | 94 KB | ~20 KB (WebP) | ~74 KB |
| andre.jpg | 70 KB | ~25 KB (WebP) | ~45 KB |
| **Total** | **2,605 KB** | **~500 KB** | **~2,100 KB (80% reduction)** |

---

*Report generated 2026-03-27. Validate schema markup at [Google Rich Results Test](https://search.google.com/test/rich-results) as file-based auditing cannot confirm rendered JSON-LD validity.*

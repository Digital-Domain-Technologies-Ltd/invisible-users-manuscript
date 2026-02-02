\newpage

# Chapter 14 - Intent-Driven Publishing

Metadata-first architecture for agents and humans.

## Introduction

The previous chapters established what AI agents need (Chapters 10-11), how to implement technical solutions (Chapter 12), and what agent creators must build (Chapter 13). This chapter presents a methodology that implements these principles systematically: intent-driven publishing through metadata-first architecture.

Traditional content management systems were designed for human editors managing web pages. Intent-driven publishing inverts this model: metadata defines what content means and where it should appear, whilst the content itself becomes portable data that reconstruction engines assemble into appropriate outputs.

This inversion solves the core problem identified in Chapter 1: agents can't infer meaning from visual design. When metadata explicitly declares intent, audience, channel, and constraints, agents can select appropriate content without guessing. The same metadata that helps agents also creates governance guardrails, multi-channel consistency, and accessibility improvements.

**Connecting to earlier chapters:** Chapter 11 established the convergence principle—that patterns helping agents also help humans with disabilities. Chapter 12 provided technical implementation patterns. This chapter shows how to organize those patterns into a systematic publishing workflow where metadata drives everything from validation to deployment.

This isn't theoretical. The patterns described here implement WCAG 2.1 AA accessibility requirements, support the Schema.org structured data from Chapter 10, and enable the explicit state indicators from Chapter 11. Everything connects.

## The Core Problem: Pages vs Assets

Traditional CMS architecture organizes around pages:

```
Create page → Add properties → Insert content → Publish
```

This works when humans manage a single web channel. It breaks when:

- **Multiple channels exist** - The same content needs web, print, email, and point-of-sale variants
- **Governance requirements scale** - Rights management, jurisdiction constraints, and usage limits can't rely on email approval chains
- **Agents need explicit semantics** - Visual hierarchy and editorial judgement don't translate to machine-readable structure
- **Accessibility demands increase** - ARIA labels and semantic HTML become afterthoughts rather than foundations

Intent-driven publishing organizes around assets with explicit metadata:

```
Define metadata → Validate constraints → Reconstruct for channel → Deploy
```

Each asset carries YAML frontmatter declaring what it is, who it's for, where it can appear, and under what constraints. Reconstruction engines query this metadata to assemble appropriate outputs.

The shift from "page with properties" to "asset with metadata" mirrors the shift from "design for humans" to "design for both humans and agents."

## YAML Frontmatter: The Portable Contract

Consider a product description. In traditional CMS architecture, it lives in a database field attached to a page. Moving it requires export/import. Validating it requires checking database constraints. Using it in multiple channels requires duplication or complex references.

With YAML frontmatter, the metadata travels with the content:

```yaml
---
id: product-widget-pro-001
type: product_description
intent: consideration
topics: [product:widget-pro, theme:technical]
audiences: [b2b, installer, architect]
channels: [web, print, email]

status: approved
valid_from: 2025-01-01
valid_to: 2026-12-31
review_cycle: P90D

provenance: in_house
license: internal-only
jurisdictions: [UK, EU]
usage_constraints:
  - no_third_party_resale
  - print_run_max: 50000

publication-status: published
publication-date: "2025-02-01"
---

# Widget Pro - Technical Overview

The Widget Pro offers certified surge protection with
independent verification to BS EN 61643-11:2012+A11:2018.
Installation requires Part P certification and must comply
with BS 7671:2018+A2:2022 (18th Edition IET Wiring Regulations).

Compatible with both single-phase and three-phase installations.
Rated for continuous operation at 230V AC ±10%, 50Hz.
```

This frontmatter answers every question an agent or validation system might ask:

**For agents:**
- What is this? (`type: product_description`)
- Who is it for? (`audiences: [b2b, installer, architect]`)
- What's the goal? (`intent: consideration`)
- Where can it appear? (`channels: [web, print, email]`)

**For governance:**
- Can we use this in Germany? (`jurisdictions: [UK, EU]` - yes)
- Can we include it in a 100,000-copy print run? (`print_run_max: 50000` - no)
- Is it still current? (`valid_to: 2026-12-31` - check date)

**For accessibility:**
- Is the language appropriate? (`audiences` indicates technical readers expected)
- Are regulatory citations correct? (BS standards explicitly referenced)
- Is structure semantic? (Markdown with clear hierarchy)

The metadata makes implicit knowledge explicit. Agents don't need to guess whether content is suitable—they can check the contract.

## The Three-Zone Architecture

Intent-driven publishing separates content lifecycle into three zones with distinct purposes and validation requirements:

![Intent-Driven Publishing - Three zones separate creation from validation from deployment, with AEM equivalents shown for comparison](illustrations/chapter-14-three-zone-architecture.png)

### Zone 1: Raw (Draft)

**Purpose:** Content creation and iteration without governance overhead.

**Characteristics:**
- Metadata can be incomplete
- Validation not enforced
- Local preview available
- Git-based version control
- Not deployed publicly

**Example file:**

```markdown
---
id: article-installation-draft-001
type: article
intent: consideration
topics: [installation, technical]
status: draft
draft-date: "2025-02-01"
---

# Installation Guide (Draft)

[Content being developed]
```

This is where human editors work. The low barrier to entry encourages experimentation. Incomplete metadata is acceptable because nothing here affects production.

### Zone 2: Curated (Validation)

**Purpose:** Automated quality gates before content reaches production.

**Validation checks:**

1. **Metadata completeness** - All required fields present and valid
2. **Schema.org compliance** - Structured data parses correctly
3. **Accessibility standards** - WCAG 2.1 AA requirements met
4. **Rule evaluation** - Sovereignty constraints checked
5. **Semantic structure** - Heading hierarchy, ARIA labels, alt text

**Example validation failure:**

```
❌ Validation failed for article-installation-draft-001

Required fields missing:
  - valid_from (date)
  - valid_to (date)
  - jurisdictions (array)

Accessibility issues:
  - Image at line 45 missing alt text
  - Heading hierarchy skips from h2 to h4

Schema.org warnings:
  - Article missing 'author' property
  - datePublished required for published status

Status: REJECTED (remains in Zone 1)
```

Validation is automatic. Metadata defines the contract, rules evaluate the contract, and content only progresses when all checks pass. No manual approval bottlenecks.

This implements the convergence principle from Chapter 11: the same validation that ensures agents can parse the content also ensures screen readers can navigate it, keyboard users can access it, and humans can understand it.

### Zone 3: Serving (Published)

**Purpose:** Customer-owned, production-ready content with full version control.

**Characteristics:**
- All metadata complete and validated
- Schema.org structured data embedded
- WCAG 2.1 AA compliant
- Multi-channel variants generated
- Deployed to customer's infrastructure

**Zone 3 as Data Sovereignty Manifestation:**

The customer-owned repository is where data sovereignty becomes concrete rather than aspirational:

- **Customer controls infrastructure** - They own the GitHub/Cloudflare repo, not a vendor
- **Version control is theirs** - Complete git history under their account
- **Access control is theirs** - They grant/revoke collaborator permissions (including MX)
- **Deployment is theirs** - Content serves from infrastructure they control
- **Exit is built-in** - They can revoke MX deploy keys without data loss

This is sovereignty by architecture, not policy. The system prevents vendor lock-in because the customer owns the deployment target from day one. Content published to Zone 3 belongs to the customer—MX just has temporary write access they can revoke anytime.

**Example published file:**

```html
<!--
---
id: article-installation-widget-pro-001
type: article
intent: consideration
topics: [product:widget-pro, theme:installation]
audiences: [installer, trade-counter]
channels: [web, print]

status: approved
valid_from: 2025-01-01
valid_to: 2026-01-01
review_cycle: P365D

provenance: in_house
license: internal-only
jurisdictions: [UK, EU]

publication-status: published
publication-date: "2025-02-01"
deployed-path: "articles/installation/"
demo-url: "https://client.com/articles/installation/"
---
-->
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <title>Widget Pro Installation Guide | Technical Documentation</title>

  <!-- Workflow metadata for agents -->
  <meta name="publication-status" content="published">
  <meta name="intent" content="consideration">
  <meta name="audience" content="installer,trade-counter">

  <!-- Schema.org structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Widget Pro Installation Guide",
    "author": {
      "@type": "Organization",
      "name": "Technical Documentation Team"
    },
    "datePublished": "2025-02-01",
    "audience": {
      "@type": "Audience",
      "audienceType": "Electricians and installers"
    }
  }
  </script>
</head>
<body>
  <article>
    <h1>Widget Pro Installation Guide</h1>
    <!-- Content with semantic HTML -->
  </article>
</body>
</html>
```

Notice how the YAML frontmatter from Zone 1 becomes:
- HTML meta tags for agents to parse
- Schema.org JSON-LD for structured data
- Semantic HTML for accessibility
- Comments for auditability

The same metadata, expressed in formats appropriate to each consumer.

## Asset Relationship Graph

Traditional CMS architectures link content through database foreign keys or manual references. Intent-driven publishing uses a typed relationship graph where edges declare the nature of connections.

![Asset Relationship Graph - Typed edges explicitly declare relationships between assets, enabling automated governance and multi-channel reconstruction](illustrations/chapter-14-asset-relationship-graph.png)

### Reconstruction Queries

When an agent or human requests content, the system queries the graph:

```javascript
// Query: Technical article about Widget Pro for UK trade audience
query({
  type: "article",
  intent: "consideration",
  product: "widget-pro",
  audience: "trade-counter",
  channel: "web",
  jurisdiction: "UK"
})
```

The reconstruction engine:

1. **Traverses the graph** to find matching articles
2. **Follows typed edges** to gather related assets (images, reviews, products)
3. **Evaluates rules** attached to each asset
4. **Checks constraints** (jurisdiction, license, usage limits)
5. **Returns validated bundle** of assets safe to use together

**Example result:**

```json
{
  "article": "article-installation-widget-pro-001",
  "hero_image": "image-widget-hero-web-001",
  "product": "product-widget-pro",
  "reviews": [
    "review-installer-verified-774",
    "review-installer-verified-775"
  ],
  "constraints_evaluated": [
    {
      "rule": "print-licensing-check",
      "result": "pass",
      "reason": "channel=web, print constraints not applicable"
    },
    {
      "rule": "jurisdiction-check",
      "result": "pass",
      "reason": "UK in allowed jurisdictions list"
    }
  ]
}
```

This is similar to how database query planners work, but operating on semantic relationships rather than table joins. The graph encodes human editorial knowledge ("this image goes with this article") alongside governance rules ("this image has licensing constraints") so agents can make appropriate selections.

## Rule Registry: Governance as Data

Traditional CMS governance relies on human processes: email approval chains, editorial calendars, manual rights checks. Intent-driven publishing encodes governance as rules that evaluate automatically.

### Rule Structure

Rules are assets with their own metadata:

```yaml
---
rule_id: rule-print-licensing-check
type: governance_rule
scope: channel
priority: 100

when:
  channel: print
  asset_type: image
  license: rights-managed
  print_run_gt: 50000

actions:
  - action: deny
    message: "Rights-managed images limited to 50,000 print run"
  - action: log_violation
    severity: error
  - action: suggest_alternative
    query:
      asset_type: image
      license: "internal-only OR royalty-free"

applies_to:
  - all images with license=rights-managed

active_from: "2025-01-01"
active_until: "2026-12-31"
---
```

This rule prevents expensive licensing violations. When an agent or reconstruction engine tries to assemble a print piece, the rule evaluates automatically. If the constraints fail, the system either denies the selection or suggests alternatives.

### Rules for Agents vs Humans

The same rules that prevent agents from making mistakes also help human editors:

**For agents:**
- Clear boundaries on what content can be used where
- Explicit error messages when constraints violated
- Suggested alternatives meeting the constraints

**For human editors:**
- Instant feedback rather than post-publication discovery
- Prevents accidentally using wrong content in wrong channels
- Documents governance decisions in machine-readable form

**For legal/compliance:**
- Audit trail of every content selection
- Proof that constraints were evaluated
- Version-controlled governance rules

This implements governance at scale without manual processes. Rules evaluate in milliseconds. Violations are caught before publication. Audit trails exist automatically.

## Customer Data Sovereignty

Traditional CMS platforms keep your content in vendor-controlled databases. You don't own the data—you rent access to it. Facebook reviews, Chamber of Commerce listings, and agency-created assets live in third-party systems where you have no control. When you leave the platform or the vendor changes terms, you're stuck exporting CSV files and losing all the rich metadata, relationships, and governance rules you've built.

Intent-driven publishing inverts this model: **customers own their data from day one**.

### From Third-Party Sources to Customer Data Lake

Content from third-party sources (Facebook reviews, Chamber of Commerce listings, agency assets) is copied into the customer's data lake with complete attribution and provenance tracking. The customer owns their copy—it lives in their repo, under their version control, served from their infrastructure.

**Example: Facebook review → Customer data lake**

```yaml
---
id: review-facebook-import-001
type: review
provenance: user_generated
source_platform: facebook
source_url: "https://facebook.com/reviews/xyz"
source_id: "fb-review-12345"
imported_date: "2025-02-01"

# Attribution chain (original source retains ownership)
attribution:
  original_author: "Jane Smith"
  original_platform: "Facebook"
  original_url: "https://facebook.com/reviews/xyz"
  license: "licensed copy with attribution"

# Customer sovereignty metadata
customer_owned: true           # Customer owns this copy
customer_repo: "customer-org/content-repo"
customer_can_edit: false       # Preserve review authenticity
customer_can_display: true     # Can publish to their site
customer_can_export: true      # Can move to different system
vendor_access_revocable: true  # Customer can cut off MX anytime

# Original source ownership preserved
source_ownership: "Facebook Inc."
customer_rights: "licensed copy for display with attribution"

# Geographic and rights constraints
jurisdictions: [UK, EU]
storage_region: uk-south
gdpr_compliant: true
---

"Brilliant service from Scott and Stuart. Used them for business cards
and website - both turned out perfectly. Highly recommend!"
```

**Key sovereignty principles in this model:**

1. **Customer owns the copy** - It lives in their GitHub repo, under their control
2. **Attribution preserved** - Original source (Facebook) acknowledged in metadata
3. **Provenance tracked** - Complete chain from Facebook → import → customer use
4. **Source retains ownership** - Customer has licensed copy with proper attribution, not transfer of rights
5. **No vendor lock-in** - Customer can revoke MX access; data remains in their repo
6. **Review authenticity protected** - `customer_can_edit: false` prevents tampering

### Why This Matters for Agents

AI agents operating on behalf of users need content that's cleared for their specific context. A UK agent shouldn't cite content restricted to EU jurisdictions. An agent shouldn't recommend images with licensing constraints that make them unusable.

Intent-driven publishing makes sovereignty explicit through metadata agents can parse:

```yaml
---
id: image-product-hero-001
type: image

provenance: agency
license: rights-managed
jurisdictions: [UK, IE]
usage_constraints:
  - no_outdoor_advertising
  - no_third_party_resale
  - print_run_max: 50000
  - attribution_required: true

attribution_text: "Photo © Example Agency 2025. Used under license."

# Customer sovereignty
customer_owned: true
customer_repo: "customer-org/assets"
vendor_access_revocable: true

# Geographic constraints
storage_region: uk-south
data_residency: UK
gdpr_compliant: true
---
```

When an agent queries for content, the reconstruction engine checks these constraints automatically. This prevents:

- Using content from sources customer doesn't control
- Violating geographic restrictions (EU-only content for UK audience)
- Exceeding usage limits (print runs, outdoor advertising bans)
- Missing required attribution
- Storing data in wrong geographic region

The same metadata that gives customers sovereignty over their data also helps agents make safe, compliant selections.

### Sovereignty Bundles: Validation Gate Configuration

Sovereignty bundles group related governance constraints that Zone 2 validation checks before allowing content to progress to customer-owned Zone 3. They answer: "Does this content meet customer sovereignty requirements for publication?"

**Example bundle:**

```yaml
---
id: sovereignty-bundle-uk-customer-owned
type: sovereignty_bundle

# Customer ownership requirements (checked during Zone 2 validation)
customer_owned: true                    # Must be true to publish
customer_repo: "customer-org/content"   # Destination repo
vendor_access_revocable: true           # Customer can revoke MX access

# Attribution requirements
attribution_required: true
provenance_tracking: mandatory
source_ownership_preserved: true

# Geographic constraints
jurisdictions: [UK]
storage_region: uk-south
data_residency: UK

# Default constraints for assets using this bundle
default_license: internal-only
default_usage_constraints:
  - no_third_party_resale
  - attribution_required: true

# Rules evaluated during Zone 2 validation
enforced_rules:
  - rule-customer-ownership-check
  - rule-attribution-validation
  - rule-jurisdiction-validation
  - rule-data-residency-uk

# Compliance flags
gdpr_compliant: true
brexit_compliant: true

# Enforcement configuration
enforced_in_zone: 2                    # Validation gate
blocks_publication_if_violated: true   # Stops progression to Zone 3
---
```

**How bundles work in the three-zone workflow:**

1. **Zone 1 (Draft)** - Asset references bundle: `sovereignty_bundle: sovereignty-bundle-uk-customer-owned`
2. **Zone 2 (Validation)** - Validation gate checks all bundle requirements:
   - Is `customer_owned: true`?
   - Does attribution chain exist?
   - Is storage region UK?
   - Are all provenance fields complete?
3. **Zone 3 (Published)** - Only assets passing all checks progress to customer repo

This architecture ensures customer sovereignty isn't just policy—it's enforced by validation gates that prevent publication of non-compliant content.

## Multi-Channel Reconstruction

The same content often needs different presentations for different channels. A technical article might appear as:

- **Web:** Full HTML with interactive examples
- **Print:** PDF with static diagrams
- **Email:** Extracted summary with link to full content
- **Point-of-sale:** Key specifications only

Traditional CMS architectures handle this through duplication or complex templating. Intent-driven publishing uses reconstruction: assemble the appropriate output from the same underlying assets.

### Channel-Specific Variants

Assets declare which channels they support:

```yaml
---
id: article-installation-widget-pro-001
type: article
channels: [web, print, email]

channel_variants:
  web:
    format: html
    includes: [hero_image, full_text, reviews, related_products]
    max_length: unlimited

  print:
    format: pdf
    template: installation-guide-a5
    includes: [hero_image_print, full_text, legal_notices]
    max_length: 2000_words

  email:
    format: text
    includes: [summary, cta_link]
    max_length: 500_words
---
```

When reconstructing for a specific channel, the engine:

1. Checks if the channel is supported
2. Selects the appropriate variant
3. Includes only specified components
4. Respects length constraints
5. Applies channel-specific templates

The content is the same. The presentation varies appropriately for each channel.

### Example: Web vs Print Reconstruction

**Web reconstruction query:**

```javascript
query({
  article: "article-installation-widget-pro-001",
  channel: "web",
  jurisdiction: "UK"
})
```

**Result:**

```json
{
  "article": {
    "id": "article-installation-widget-pro-001",
    "format": "html",
    "title": "Widget Pro Installation Guide",
    "body": "[Full HTML content]",
    "hero_image": {
      "id": "image-widget-hero-web-001",
      "url": "https://cdn.example.com/images/widget-hero.webp",
      "alt": "Electrician installing Widget Pro in consumer unit",
      "width": 1600,
      "format": "webp"
    },
    "reviews": [
      {"id": "review-774", "rating": 5, "text": "..."},
      {"id": "review-775", "rating": 5, "text": "..."}
    ],
    "related_products": [...]
  }
}
```

**Print reconstruction query:**

```javascript
query({
  article: "article-installation-widget-pro-001",
  channel: "print",
  jurisdiction: "UK",
  print_run: 25000
})
```

**Result:**

```json
{
  "article": {
    "id": "article-installation-widget-pro-001",
    "format": "pdf",
    "template": "installation-guide-a5",
    "title": "Widget Pro Installation Guide",
    "body": "[Formatted for print, max 2000 words]",
    "hero_image": {
      "id": "image-widget-hero-print-001",
      "url": "https://cdn.example.com/images/widget-hero-print.tiff",
      "alt": "Electrician installing Widget Pro in consumer unit",
      "dpi": 300,
      "format": "tiff",
      "color_space": "CMYK"
    },
    "legal_notices": [
      "BS 7671:2018+A2:2022 compliance required",
      "Part P certification mandatory"
    ],
    "reviews": null,
    "constraints_evaluated": {
      "print_run_check": "pass",
      "licensing_check": "pass"
    }
  }
}
```

Same article ID. Different outputs. Print gets CMYK TIFF at 300 DPI. Web gets WebP at web resolution. Print gets legal notices. Web gets reviews and related products. Print run constraints were checked and passed.

The reconstruction engine makes these decisions based on metadata, not on human editorial judgement.

## The Convergence: Accessibility Meets Agent-Readability

This entire architecture implements the convergence principle from Chapter 11. Every pattern that helps agents also helps humans:

### Semantic Structure

**Traditional approach:**

```html
<div class="article-title">Widget Pro Installation</div>
<div class="article-author">Technical Team</div>
<div class="article-content">...</div>
```

Humans see the visual hierarchy. Agents and screen readers see meaningless divs.

**Intent-driven approach:**

```html
<article itemscope itemtype="https://schema.org/TechArticle">
  <h1 itemprop="headline">Widget Pro Installation</h1>
  <div itemprop="author" itemscope itemtype="https://schema.org/Organization">
    <span itemprop="name">Technical Team</span>
  </div>
  <div itemprop="articleBody">...</div>
</article>
```

Semantic HTML with Schema.org markup. Screen readers understand the structure. Agents can extract the data. Keyboard navigation works. Everyone benefits.

### Explicit State

**Traditional approach:**

```html
<button class="submit-button loading">Submit</button>
```

Visual cue (spinner) indicates loading. Agents and screen reader users might miss it.

**Intent-driven approach:**

```html
<button class="submit-button"
        data-state="loading"
        aria-busy="true"
        aria-live="polite"
        disabled>
  <span class="button-text">Submitting order...</span>
  <span class="loading-indicator" role="status">
    Processing (estimated 2 seconds)
  </span>
</button>
```

State is explicit in multiple formats:
- `data-state` for agents parsing attributes
- `aria-busy` for screen readers
- Text content for everyone
- `disabled` prevents interaction
- Estimated duration sets expectations

### Persistent Feedback

**Traditional approach:**

```javascript
// Toast notification disappears after 3 seconds
showToast("Order submitted successfully", 3000);
```

Agents miss it. Screen reader users might miss the announcement. People who look away miss it entirely.

**Intent-driven approach:**

```html
<div class="feedback-persistent"
     role="status"
     aria-live="polite"
     data-state="success"
     data-timestamp="2025-02-01T10:30:00Z">
  <h2>Order Submitted Successfully</h2>
  <p>Your order #12345 has been confirmed.</p>
  <p>Estimated delivery: 3-5 business days</p>
  <a href="/orders/12345">View order details</a>
</div>
```

Feedback remains visible until user dismisses it. Screen readers announce it. Agents can parse it. The state is explicit. The timestamp is recorded. Everyone gets confirmation.

These aren't three different solutions for three different audiences. They're one solution serving everyone's needs.

## Business Case for Intent-Driven Publishing

### Development Efficiency

**Before:** Separate workflows for web, print, email. Duplicate content. Manual governance checks.

**After:** Single content source. Automated channel variants. Rules evaluate automatically.

**Estimated savings:** 40-60% reduction in content production time for multi-channel campaigns.

### Governance Scalability

**Before:** Email approval chains. Manual rights checks. Post-publication violations discovered.

**After:** Rules evaluate at reconstruction time. Violations caught before publication. Audit trails automatic.

**Risk reduction:** Licensing violations prevented. GDPR compliance traceable. Legal exposure reduced.

### Agent Discoverability

**Before:** Agents struggle with visual-only cues. Miss content hidden in complex layouts. Report incomplete information.

**After:** Metadata makes everything explicit. Agents find and cite content accurately. Transactions complete successfully.

**Expected impact:** Increased agent-driven traffic converts at higher rates because content is structured appropriately.

### Accessibility Compliance

**Before:** Accessibility as afterthought. Retrofitting is expensive. WCAG violations discovered through audits.

**After:** Semantic structure enforced by validation. WCAG requirements built into Zone 2 gates. Compliance automatic.

**Legal risk:** Accessibility lawsuits avoided. Compliance demonstrable. Audit trails prove due diligence.

### Return on Investment

Every improvement serves multiple audiences:

- Metadata helping agents also helps screen readers
- Semantic structure helping keyboard users also helps search engines
- Persistent feedback helping people with ADHD also helps agents
- Channel variants reducing duplication also speeding production

The ROI compounds because each pattern improves multiple experiences simultaneously.

### Vendor Independence and Exit Strategy

Traditional CMS creates vendor lock-in through:

- Proprietary databases
- Vendor-specific APIs
- Content trapped in their infrastructure

Intent-driven publishing with customer-owned repos means:

- **Day 1 exit strategy** - Customer already owns the production repo
- **No export needed** - Content is already in customer's infrastructure
- **Revocable access** - Customer can remove MX deploy keys anytime
- **Portable metadata** - YAML frontmatter travels with content
- **Standard formats** - HTML, Markdown, JSON—not proprietary

This is data sovereignty as architecture, not just as aspiration.

## Implementation Path

### Phase 1: Pilot with Single Content Type

Start with one content type (e.g., product descriptions):

1. **Add YAML frontmatter** to existing content
2. **Define required metadata fields** for this content type
3. **Create validation rules** for Zone 2 checks
4. **Implement basic reconstruction** for web channel
5. **Measure results** - agent success rates, human satisfaction

**Time estimate:** 4-6 weeks for initial implementation

### Phase 2: Expand to Multi-Channel

Add print and email variants:

1. **Define channel-specific metadata** for existing content
2. **Create reconstruction templates** for print and email
3. **Add channel routing logic** to reconstruction engine
4. **Test consistency** across all three channels
5. **Deploy to production** with monitoring

**Time estimate:** 6-8 weeks building on Phase 1

### Phase 3: Add Governance Rules

Implement automated constraints:

1. **Document existing governance processes** (approval chains, rights checks)
2. **Encode as rules** in rule registry
3. **Connect rules to assets** via graph edges
4. **Test rule evaluation** in Zone 2 validation
5. **Remove manual checks** where rules provide coverage

**Time estimate:** 8-10 weeks with legal/compliance review

### Phase 4: Full Production Deployment

Scale to entire content inventory:

1. **Migrate remaining content** to intent-driven structure
2. **Train editorial team** on metadata-first workflow
3. **Monitor agent success rates** and iterate on metadata
4. **Measure accessibility improvements** via WCAG audits
5. **Document and share patterns** internally

**Time estimate:** Ongoing, content migration can be incremental

## Avoiding Common Pitfalls

### Pitfall 1: Metadata Becomes Overwhelming

**Problem:** Too many required fields. Editorial team drowns in administrative work.

**Solution:** Start with minimal required fields. Add more as value becomes clear. Use sensible defaults. Provide metadata suggestion tools.

### Pitfall 2: Rules Become Too Complex

**Problem:** Rules with dozens of conditions. Unintended interactions between rules. Debugging is nightmare.

**Solution:** Keep rules simple and single-purpose. Use priority ordering to resolve conflicts. Test rules individually before combining. Document rule intent clearly.

### Pitfall 3: Validation Too Strict

**Problem:** Zone 2 validation rejects content for minor issues. Editorial velocity drops. Team routes around the system.

**Solution:** Distinguish between errors (must fix) and warnings (should fix). Allow manual override with justification. Gradually tighten constraints over time.

### Pitfall 4: Channel Variants Diverge

**Problem:** Print version gets updated. Web version doesn't. Content is inconsistent across channels.

**Solution:** Single source of truth for content. Channel variants describe presentation, not content. Changes propagate automatically to all channels.

### Pitfall 5: Assuming Agents Understand Context

**Problem:** Metadata says "intent: consideration" but doesn't explain what that means for this specific content.

**Solution:** Use controlled vocabulary with clear definitions. Provide examples. Make implicit assumptions explicit. Document metadata semantics.

## Connection to Earlier Chapters

This chapter implements patterns from throughout the book:

**From Chapter 10 (GEO):** Schema.org structured data embedded in Zone 3 output. Agents can discover and cite content accurately.

**From Chapter 11 (Designing for Both):** Semantic structure, explicit state, persistent feedback—all enforced by Zone 2 validation.

**From Chapter 12 (Technical Advice):** YAML frontmatter, data attributes, ARIA labels—all generated from intent-driven metadata.

**From Chapter 13 (What Agent Creators Must Build):** Clear expectations for agents. Metadata declares capabilities. Errors are explicit.

The methodology is comprehensive because it addresses the full publishing lifecycle: creation, validation, governance, deployment, and multi-channel reconstruction.

## Summary

Intent-driven publishing solves the invisible users problem by making implicit knowledge explicit. Instead of expecting agents to infer meaning from visual design, metadata declares what content is, who it's for, and where it can appear.

The three-zone architecture separates concerns:
- **Zone 1:** Low-friction creation
- **Zone 2:** Automated validation
- **Zone 3:** Production-ready deployment

The asset relationship graph enables content reuse without duplication. The rule registry scales governance without bottlenecks. Reconstruction engines assemble appropriate outputs for each channel.

This isn't about replacing human judgement. It's about encoding that judgement in a form that agents and validation systems can evaluate. Editorial expertise becomes metadata. Approval processes become rules. Visual hierarchies become semantic structure.

The convergence principle applies throughout: patterns helping agents also help humans. Metadata that enables agent selection also enables accessibility compliance. Rules preventing agent errors also prevent human mistakes. Semantic structure that machines can parse also helps screen readers navigate.

**The fundamental insight:** Content is inert. Metadata makes it useful. When metadata explicitly declares intent, audience, channel, and constraints, both humans and agents can select appropriate content confidently.

This is how you build for the invisible users—not by duplicating effort, but by making implicit knowledge explicit in a form that benefits everyone.

---

## Related Appendices

For implementation details, see:

- **Appendix N:** Complete YAML frontmatter specification
- **Appendix O:** Rule registry examples and patterns
- **Appendix P:** Asset graph schema and query language
- **Appendix Q:** Multi-channel reconstruction templates

For accessibility convergence patterns:

- **Appendix H:** WCAG 2.1 AA compliance checklist
- **Appendix I:** ARIA patterns for agents and screen readers

For business case templates:

- **Appendix J:** ROI calculation worksheets
- **Appendix K:** Governance risk assessments

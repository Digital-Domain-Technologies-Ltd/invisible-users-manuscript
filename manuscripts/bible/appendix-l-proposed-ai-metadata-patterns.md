\newpage

# Appendix L: Proposed AI Metadata Patterns

A formal proposal document for experimental AI metadata patterns that extend existing web standards.

## Status and Classification

**Document Status:** Experimental Proposal — Not Yet Standardised

**Last Updated:** 12 January 2026

**Maturity Level:** Forward-compatible proposals that won't break if agents don't recognise them

This appendix consolidates all proposed and experimental patterns mentioned throughout "The Invisible Users". These patterns follow established conventions (like robots meta tags or viewport meta tags) and represent logical extensions that may standardise as the AI agent ecosystem matures.

**Important:** These are NOT established standards. They are proposals based on production implementations and logical extensions of existing patterns.

## Relationship to Established Standards

These proposals complement, not replace, established standards:

- **Semantic HTML** (established) — Use `<main>`, `<nav>`, `<article>` always
- **Schema.org JSON-LD** (established) — Primary structured data method
- **ARIA attributes** (established) — Critical for accessibility
- **llms.txt** (emerging) — Early adoption phase, gaining traction
- **AI meta tags** (proposed) — Extend existing meta tag patterns
- **data-agent-visible** (proposed) — New semantic marker for hidden metadata
- **Common data attributes** (proposed) — Explicit state management patterns

See Appendix D for comprehensive guide to all patterns (established + proposed).

---

## Pattern 1: AI-Specific Meta Tag Namespace

### Status

**Proposed Pattern** — Not yet standardised, forward-compatible

### Rationale

Page-specific AI agent guidance needs to override site-wide defaults from llms.txt. Just as robots meta tags override robots.txt for specific pages, AI meta tags provide page-level control over agent behaviour.

**Why meta tags?**

- Established pattern (robots, viewport, Open Graph all use meta tags)
- Page-specific overrides for site-wide policies
- Machine-readable without parsing content
- Browser-agnostic (works in served HTML)

### Use Cases

1. **Product Pages:** Specify API endpoints for current product
2. **News Articles:** Indicate content freshness requirements
3. **Documentation:** Allow full extraction vs summary-only
4. **Internal Pages:** Override public access policies

### Proposed Meta Tags

#### ai-preferred-access

Indicates how agents should access content.

**Values:** `html`, `api`, `both`

**Example:**

```html
<meta name="ai-preferred-access" content="api">
```

**Rationale:** Some pages (like product catalogues) are better consumed via API. Others (like blog posts) work better as HTML.

#### ai-content-policy

What agents are permitted to do with content.

**Values:**

- `summaries-allowed` — Can create summaries
- `full-extraction-allowed` — Can extract complete content
- `restricted` — Contact required

**Example:**

```html
<meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
```

**Rationale:** More granular than robots.txt `noindex`. Allows summaries whilst restricting full extraction.

#### ai-freshness

How often content changes.

**Values:** `hourly`, `daily`, `weekly`, `monthly`, `static`

**Example:**

```html
<meta name="ai-freshness" content="hourly">
```

**Rationale:** Helps agents decide cache duration. Stock prices need hourly updates, documentation can be cached monthly.

#### ai-structured-data

Where to find structured data.

**Values:** `json-ld`, `microdata`, `rdfa`, `api`

**Example:**

```html
<meta name="ai-structured-data" content="json-ld">
```

**Rationale:** Tells agents which structured data format to parse, avoiding guessing.

#### ai-attribution

Attribution requirements with specific attribution text.

**Values:** `required`, `requested`, `not-required`

**Attributes:**

- `content`: Whether attribution is required
- `text`: The attribution text to use (required when content="required")

**Example:**

```html
<meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">
```

**Rationale:** Explicit statement of attribution expectations with precise text to use, ensuring consistent attribution across all AI-generated content.

#### llms-txt Reference

Points to site-wide llms.txt file.

**Example:**

```html
<meta name="llms-txt" content="/llms.txt">
```

**Rationale:** Helps agents discover llms.txt when not at standard location.

### Complete Implementation Example

```html
<head>
  <title>Wireless Headphones — £149.99</title>

  <!-- Proposed AI meta tags -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="hourly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: Example Store, https://example.com">
  <meta name="llms-txt" content="/llms.txt">

  <!-- Established standards -->
  <link rel="canonical" href="https://example.com/products/headphones">

  <!-- Schema.org structured data (established) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wireless Headphones",
    "offers": {
      "@type": "Offer",
      "price": "149.99",
      "priceCurrency": "GBP"
    }
  }
  </script>
</head>
```

### Forward Compatibility

**If agents don't recognise these tags:** They ignore them harmlessly. No breakage.

**If agents do recognise these tags:** They get helpful hints about content access and usage.

**Progressive enhancement:** Sites benefit from agent support without requiring it.

### Cross-References

- **Mentioned in:** Chapter 12 (Technical Advice)
- **Implemented in:** Appendix D examples (lines 1556-1568)
- **Used in:** `agent-friendly-starter-kit/good/index.html`
- **Enhanced by:** `scripts/enhance-appendix-html.js` (lines 40-47)

---

## Pattern 2: data-agent-visible Attribute

### Status (data-agent-visible)

**Proposed Pattern** — Not yet standardised, experimental

### Rationale (data-agent-visible)

E-commerce sites need to provide machine-readable instructions to AI agents without cluttering the human interface. Purchase flows require prerequisites (authentication, payment method, shipping address) that agents need to verify before attempting transactions.

**Why data-agent-visible?**

- Follows data-* attribute convention (custom data attributes)
- Semantic marker agents can search for
- Hidden from humans with CSS (`display: none`)
- Visible in DOM for all agent types (CLI, browser, server-based)

### Use Cases (data-agent-visible)

1. **Purchase Prerequisites:** Tell agents what must be configured before checkout
2. **API Documentation:** Provide machine-readable endpoint details
3. **Multi-Step Workflows:** Explain sequence and requirements
4. **Error Recovery:** Hidden instructions for handling failures

### Implementation Pattern

```html
<div class="agent-metadata" data-agent-visible="true" style="display: none;">
  <h2>Purchase Information</h2>
  <dl>
    <dt>Action</dt>
    <dd>POST to /cart/add</dd>

    <dt>Required parameters</dt>
    <dd>product_id=WH-1000, quantity (1-23)</dd>

    <dt>Prerequisites</dt>
    <dd>
      <ul>
        <li>Authentication: Required (status: <span id="auth-status">authenticated</span>)</li>
        <li>Payment method: Required (status: <span id="payment-status">configured</span>)</li>
        <li>Shipping address: Required (status: <span id="shipping-status">set</span>)</li>
      </ul>
    </dd>

    <dt>Expected response</dt>
    <dd>Success: 303 redirect to /cart/added | Error: 400 with JSON details</dd>
  </dl>
</div>
```

**JavaScript updates status spans:**

```javascript
// Update prerequisite status based on actual session state
document.getElementById('auth-status').textContent =
  user.authenticated ? 'authenticated' : 'not authenticated';
document.getElementById('payment-status').textContent =
  user.hasPaymentMethod ? 'configured' : 'not configured';
document.getElementById('shipping-status').textContent =
  user.hasShippingAddress ? 'set' : 'not set';
```

### Why This Works

**For humans:** Hidden with `display: none`, doesn't clutter interface

**For CLI agents:** Visible in served HTML before JavaScript execution

**For browser agents:** Visible after JavaScript updates status spans

**For server-based agents:** Visible in HTML fetch, can parse prerequisites

### Alternative Approaches Considered

1. **Microformats:** Too rigid, doesn't support custom workflows
2. **Schema.org actions:** Complex, requires extensive markup
3. **ARIA live regions:** Designed for screen readers, not agents
4. **Comments:** Not guaranteed to be preserved in DOM

**Why data-agent-visible wins:** Simple, flexible, follows established data-* convention.

### Adoption Considerations

**Adopt now if:**

- Running e-commerce site with agent-mediated purchases
- Need to provide hidden API documentation
- Want to reduce agent errors from missing prerequisites

**Wait if:**

- Static content site with no transactions
- No agent traffic yet
- Prefer to wait for standardisation

### Forward Compatibility (data-agent-visible)

**If agents don't recognise attribute:** They might still find the hidden content by parsing all hidden divs (low reliability but possible).

**If agents do recognise attribute:** They search specifically for `[data-agent-visible="true"]` and parse structured prerequisites.

**Progressive enhancement:** Works better with agent support, but doesn't break without it.

### Cross-References (data-agent-visible)

- **Documented in:** Appendix D (lines 1294-1326)
- **Mentioned in:** Chapter 11 (agent purchase instructions)
- **Not yet implemented in:** Most code examples (opportunity for addition)

---

## Pattern 3: Common Data Attributes

### Status (Common Data Attributes)

**Proposed Pattern** — Not yet standardised, emerging convention

### Rationale (Common Data Attributes)

AI agents need explicit state information to understand dynamic interfaces. Modern web applications use JavaScript to change UI state (loading, validation, errors), but these changes are invisible to agents unless explicitly marked in the DOM.

**Why data attributes?**

- Standardised HTML5 convention (data-* for custom data)
- Machine-readable without parsing visual content
- Visible in both served HTML and rendered DOM
- Doesn't interfere with CSS classes or ARIA attributes
- Allows consistent patterns across different sites

### Use Cases (Common Data Attributes)

1. **State Management:** Loading states, error states, success states
2. **Form Validation:** Field validity, form completion status
3. **E-commerce:** Product IDs, pricing, inventory, cart state
4. **Pagination:** Current page, total pages, sort order
5. **Authentication:** Login status, user roles
6. **Multi-step Workflows:** Current step, total steps, step validity

### Proposed Data Attributes by Category

#### State Management

| Attribute | Purpose | Example Values |
| --------- | ------- | -------------- |
| data-state | Current state of element | loading, loaded, error, empty, incomplete, complete |
| data-validation-state | Form field validity | valid, invalid, pending |
| data-authenticated | Login status | true, false |
| data-error-code | Error identifier | PAYMENT_DECLINED, VALIDATION_ERROR, OUT_OF_STOCK |

**Example:**

```html
<form action="/checkout" method="POST"
      data-state="incomplete"
      data-errors="2">

  <input type="email"
         id="email"
         name="email"
         aria-invalid="true"
         data-validation-state="invalid">

  <button type="submit"
          disabled
          data-disabled-reason="2 fields incomplete">
    Submit (fix 2 errors first)
  </button>
</form>
```

**Rationale:** Agents can check form state before attempting submission, reducing error rates.

#### E-commerce Attributes

| Attribute | Purpose | Example Values |
| --------- | ------- | -------------- |
| data-product-id | Product identifier | WH-1000, SKU-12345, product-789 |
| data-price | Numeric price | 149.99, 29.50, 1299.00 |
| data-currency | Currency code (ISO 4217) | GBP, USD, EUR, JPY |
| data-quantity | Item count | 1, 23, 100 |
| data-in-stock | Availability | true, false |
| data-item-count | Cart item count | 0, 3, 12 |
| data-subtotal | Cart subtotal | 279.98 |
| data-vat | VAT amount | 46.66 |
| data-total | Total price | 279.98 |
| data-checkout-ready | Can proceed to checkout | true, false |

**Example:**

```html
<article class="product"
         data-product-id="WH-1000"
         data-in-stock="true"
         data-quantity="23">
  <h1>Wireless Headphones</h1>
  <div class="price"
       data-price="149.99"
       data-currency="GBP">
    <span class="currency">£</span>
    <span class="amount">149.99</span>
  </div>
  <p class="stock"
     data-in-stock="true"
     data-quantity="23">
    <strong>In stock</strong> (23 available)
  </p>
</article>

<div id="shopping-cart"
     data-item-count="2"
     data-subtotal="279.98"
     data-vat="46.66"
     data-total="279.98"
     data-currency="GBP">
  <h1>Your basket (2 items)</h1>
  <!-- Cart items -->
  <a href="/checkout"
     data-checkout-ready="true">
    Proceed to Checkout
  </a>
</div>
```

**Rationale:** Agents can verify product availability, pricing, and cart state before attempting purchase operations.

#### Pagination and Sorting

| Attribute | Purpose | Example Values |
| --------- | ------- | -------------- |
| data-page | Current page number | 1, 2, 3, 24 |
| data-total-pages | Total pages | 24, 100 |
| data-total-results | Total result count | 342, 1250 |
| data-per-page | Results per page | 10, 20, 50 |
| data-sort | Current sort order | relevance, price-asc, price-desc, date-desc |
| data-sort-column | Sortable column | price, name, date, rating |
| data-sort-direction | Sort direction | asc, desc |

**Example:**

```html
<div class="pagination"
     data-page="3"
     data-total-pages="24"
     data-total-results="342"
     data-per-page="15">
  <a href="?page=2" data-page="2">Previous</a>
  <span class="current" data-page="3">3</span>
  <a href="?page=4" data-page="4">Next</a>
</div>

<table data-sortable="true">
  <thead>
    <tr>
      <th data-sort-column="name"
          data-sort-direction="asc">
        Product Name ↑
      </th>
      <th data-sort-column="price"
          data-sortable="true">
        Price
      </th>
    </tr>
  </thead>
</table>
```

**Rationale:** Agents can navigate paginated results and understand sort order without parsing visual indicators.

#### Multi-step Workflows

| Attribute | Purpose | Example Values |
| --------- | ------- | -------------- |
| data-step | Current step number | 1, 2, 3, 4 |
| data-total-steps | Total steps | 4, 5, 7 |
| data-step-status | Step completion status | pending, current, completed, error |

**Example:**

```html
<div class="wizard"
     data-step="2"
     data-total-steps="4">

  <ol class="steps">
    <li data-step="1" data-step-status="completed">
      Account Details
    </li>
    <li data-step="2" data-step-status="current">
      Shipping Address
    </li>
    <li data-step="3" data-step-status="pending">
      Payment
    </li>
    <li data-step="4" data-step-status="pending">
      Review
    </li>
  </ol>

  <!-- Step 2 content -->
</div>
```

**Rationale:** Agents can track progress through multi-step forms and understand completion requirements.

#### Button and Action States

| Attribute | Purpose | Example Values |
| --------- | ------- | -------------- |
| data-disabled-reason | Why button is disabled | "2 fields incomplete", "Out of stock", "Authentication required" |
| data-action | Action type | submit, cancel, delete, purchase, navigate |

**Example:**

```html
<button type="submit"
        disabled
        aria-disabled="true"
        data-disabled-reason="3 fields incomplete">
  Submit (fix 3 errors first)
</button>

<button type="button"
        data-action="delete"
        data-product-id="WH-1000">
  Remove from cart
</button>
```

**Rationale:** Agents understand why buttons are disabled and what action buttons perform.

### Implementation Guidelines

**Consistency is critical:**

1. **Use the same attribute names** across your entire site
2. **Use consistent values** (e.g., always "true"/"false", not "yes"/"no" or "1"/"0")
3. **Keep values simple** (lowercase, hyphen-separated for multi-word values)
4. **Always include currency** with prices (data-currency="GBP")
5. **Use ISO codes** for currency (ISO 4217), language (ISO 639), country (ISO 3166)

**Good patterns:**

```html
<!-- Consistent boolean values -->
<div data-in-stock="true">    <!-- ✓ Good -->
<div data-in-stock="false">   <!-- ✓ Good -->

<!-- Consistent state values -->
<form data-state="incomplete">   <!-- ✓ Good -->
<form data-state="complete">     <!-- ✓ Good -->

<!-- Always pair price with currency -->
<span data-price="149.99" data-currency="GBP">£149.99</span>  <!-- ✓ Good -->
```

**Avoid these patterns:**

```html
<!-- Inconsistent boolean representations -->
<div data-in-stock="yes">     <!-- ✗ Bad -->
<div data-in-stock="1">       <!-- ✗ Bad -->
<div data-in-stock="Yes">     <!-- ✗ Bad (inconsistent case) -->

<!-- Missing currency -->
<span data-price="149.99">£149.99</span>  <!-- ✗ Bad (currency implied, not explicit) -->

<!-- Verbose values -->
<form data-state="not yet completed">  <!-- ✗ Bad (use "incomplete") -->
```

### Forward Compatibility (Common Data Attributes)

**If agents don't recognise these attributes:** They can still parse visible content, but may misinterpret dynamic states.

**If agents do recognise these attributes:** They get explicit, unambiguous state information without parsing visual content.

**Progressive enhancement:** Works better with agent support, essential for dynamic interfaces.

### Adoption Considerations (Common Data Attributes)

**Adopt now if:**

- Building dynamic interfaces with JavaScript state changes
- Running e-commerce site with agent traffic
- Using multi-step forms or wizards
- Need to reduce agent errors from stale state information

**Wait if:**

- Static content site with no dynamic behaviour
- No agent traffic yet
- Prefer to wait for industry consensus on attribute names

### Relationship to Established Patterns

These data attributes extend established conventions:

- **HTML5 data-* attributes** (established) — Custom data storage mechanism
- **ARIA state attributes** (established) — Complement, don't replace (use aria-invalid AND data-validation-state)
- **Microdata attributes** (established) — Different purpose (structured data vs state management)

**Critical distinction:** Data attributes describe **current state** (dynamic), while microdata describes **semantic meaning** (static).

### Cross-References (Common Data Attributes)

- **Documented in:** Appendix D (lines 119-133, Common Data Attributes table)
- **Implemented in:** All e-commerce examples (product-page.html, shopping-cart.html)
- **Implemented in:** All form examples (validation-form.html, disabled-button.html)
- **Used throughout:** Demo site pages (checkout, search, pagination examples)

---

## Adoption Decision Framework

### Should You Adopt These Patterns Now?

Use this framework to decide:

#### Evaluate Your Situation

**Yes, adopt now if:**

- Running production e-commerce accepting agent purchases
- High agent traffic (measurable in logs)
- Need to reduce agent errors
- Want early adopter advantage

**Maybe, experiment first if:**

- Moderate agent traffic
- Curious about benefits
- Can A/B test implementations
- Have development resources

**No, wait if:**

- No measurable agent traffic
- Static content site
- Prefer to wait for standardisation
- Limited development resources

#### Implementation Strategy

**Priority 1 (adopt first):**

1. AI meta tags (easy to add, low risk)
2. Schema.org JSON-LD (established standard, not just proposed)
3. Semantic HTML elements (established, should already be using)
4. Common data attributes (critical for dynamic interfaces and e-commerce)

**Priority 2 (adopt if relevant):**

1. data-agent-visible (if you have transactions)
2. llms.txt file (emerging convention, gaining traction)

**Priority 3 (experiment):**

1. Custom data attributes beyond common set (for specific workflows)
2. Additional metadata patterns

### Risk Assessment

**Low Risk:**

- AI meta tags (ignored if not recognised)
- data-agent-visible (hidden from humans)
- Common data attributes (extend established HTML5 data-* convention)
- Schema.org JSON-LD (established standard)

**Medium Risk:**

- Custom attributes without established patterns
- Extensive hidden content (may confuse some agents)

**High Risk:**

- None identified (all patterns designed for graceful degradation)

---

## Relationship to Web Standards Process

### How Standards Evolve

1. **Proprietary experiments** (1990s: IE-specific, Netscape-specific tags)
2. **Community proposals** (2000s: Microformats, OpenID)
3. **Vendor consensus** (2010s: Responsive images, Service Workers)
4. **Formal standardisation** (W3C, WHATWG, IETF)

**Where these patterns fit:** Step 2-3 (community proposals seeking vendor consensus)

### Path to Standardisation

These patterns could standardise if:

1. **Multiple agents adopt** — Different AI systems recognise tags
2. **Production validation** — Measurable benefits in real deployments
3. **Vendor support** — Browser makers, CMS platforms include by default
4. **Community refinement** — Usage reveals improvements needed

**No guarantees:** Patterns might evolve, change, or be superseded by better approaches.

### Examples of Similar Evolution

- **viewport meta tag** — Started as Apple proprietary, now standard
- **robots meta tag** — Community convention, now universally recognised
- **Open Graph meta tags** — Facebook proposal, now widely adopted
- **Schema.org** — Multi-vendor collaboration, now established standard

These AI patterns follow similar trajectory.

---

## Monitoring and Feedback

### How to Track Adoption

1. **Server logs:** Look for user agents mentioning AI systems
2. **Agent error rates:** Monitor whether patterns reduce errors
3. **Conversion rates:** Measure if agent purchases complete more often
4. **Agent feedback:** Some agents report what worked/failed

### Contributing to Pattern Evolution

If you implement these patterns:

1. **Document results** — What worked, what didn't
2. **Share learnings** — Blog posts, conference talks
3. **Propose improvements** — Suggest refinements based on experience
4. **Participate in standards** — Join relevant working groups

**Contact:** <tom.cranstoun@gmail.com> for discussions about pattern evolution

---

## Summary

### Proposed Patterns Consolidated

1. **AI Meta Tag Namespace** (6 tags) — Page-level agent guidance
2. **data-agent-visible Attribute** — Hidden machine-readable instructions
3. **Common Data Attributes** (25+ attributes) — Explicit state management and e-commerce data

### Key Principles

- **Forward-compatible** — Won't break if ignored
- **Progressive enhancement** — Works better with support, doesn't require it
- **Established patterns** — Extends existing conventions (meta tags, data attributes)
- **Production-tested** — Used in real implementations

### Next Steps

1. **Read Appendix D** for comprehensive HTML patterns (established + proposed)
2. **Review Appendix E** for quick reference guide
3. **Evaluate adoption** using framework above
4. **Implement strategically** based on your situation

### Related Appendices

- **Appendix A:** Implementation Cookbook (quick recipes)
- **Appendix D:** AI-Friendly HTML Guide (comprehensive patterns)
- **Appendix E:** AI Patterns Quick Reference (data attributes)
- **Appendix F:** Implementation Roadmap (priority-based adoption)

---

**Note:** This appendix presents proposed patterns, not established standards. Evaluate adoption based on your specific situation and risk tolerance. All patterns are designed for graceful degradation and forward compatibility.

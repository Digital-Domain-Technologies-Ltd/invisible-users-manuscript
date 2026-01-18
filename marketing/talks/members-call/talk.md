# The Invisible Users: Designing the Web for AI Agents and Everyone Else

**Speaker:** Tom Cranstoun

**Duration:** 20 minutes + Q&A

**Audience:** Business leaders (CTOs, product owners)

**Format:** Conversational presentation with discussion prompts

---

## What Are AI Agents? They're Machines [TIME: 2 minutes]

Before we dive into specific problems, let's be clear about what AI agents actually are.

**AI agents are machines** - software programs that read your website on behalf of human users. They're not sentient. They're not "intelligent" in the human sense. They're machines with specific technical capabilities and limitations.

Let's understand their capabilities:

**Server-side agents (OpenAI ChatGPT, Anthropic Claude):**

- No JavaScript execution - they read raw HTML only
- Text-only parsing - no visual perception
- Like a blind user with a basic screen reader

**In-browser agents (Microsoft Copilot, browser extensions):**

- Execute JavaScript - see rendered HTML after page loads
- Can interact with forms and buttons
- Like a screen reader user who can't see visual design

**Browser automation agents (Perplexity):**

- Full browser control - can take screenshots
- Computer vision capability
- Like a sighted user with motor impairments who needs keyboard navigation

**Local agents (Ollama, on-device LLMs):**

- Run on user's machine with limited resources
- Smaller context windows - need concise information
- Like a user with cognitive disabilities who needs simple structure

**They have disabilities:** Some are blind (no screenshots), some can't run JavaScript, some have limited memory. Just like users with disabilities need semantic structure, so do these machines.

**Let's call them what they are: machines with different capabilities.**

---

## Opening Hook: The £203,000 Cruise [TIME: 2 minutes]

Let me start with a real example from December 2024. I was using an AI assistant to research Danube cruises for May 2026. The agent came back with detailed information on three operators - departure dates, routes, ratings, all looked professional.

But one price caught my eye: **£203,000-£402,000** per person for a week-long river cruise.

The actual price was probably **£2,030-£4,020**.

This was a **100x multiplication error** - likely a decimal separator confusion where €2.030,00 (European format) became 2030, then got multiplied by 100 during currency conversion.

**What's instructive here:** This wasn't a reasoning failure. The AI didn't think £203,000 was reasonable. The error occurred during data extraction, and no validation layers caught it:

- No range validation (£203k > £15k maximum for river cruises)
- No comparative checks (58x higher than peer average)
- No cross-referencing against structured data
- No confidence scoring to flag anomalies

The error was presented with the same confidence as verified data. Professional formatting masked the data quality issue.

**The business impact:** If this agent was making a booking rather than researching, this could have been a £201,000 mistake. More concerning - if the error had been plausible (20% too high instead of 100x), would anyone have caught it?

**Validation layers are essential, not optional.**

---

## The Problem: Designing for Eyes, Not Machines [TIME: 5 minutes]

Modern websites are designed for human eyes, not machine parsers. This creates invisible failures for AI agents AND users with disabilities.

**Sites designed for visual users fail for:**

- Server-side AI agents (can't see JavaScript-rendered content)
- Screen reader users (can't perceive visual design)
- Both need semantic HTML structure, not visual styling

Sites that machines can parse get preferred. Sites that machines struggle with get quietly avoided.

**Two real production mistakes...**

### The Agent Journey Through Your Website

Agents interact with your website at multiple stages. At every stage, you need the right format, clarity, and precision:

**1. LLM Training (Building Knowledge):**

- Agents read websites to build their knowledge base
- If your content is JavaScript-rendered, it's invisible to LLM training data
- They need semantic HTML to understand what you do

**2. Citation (Telling Users About You):**

- When users ask "Who does X?", agents cite companies they know about
- Without clear content structure, they can't cite you accurately
- They need Schema.org metadata to describe your services

**3. Search & Compare (Building Lists):**

- Agents build comparison lists, sort by features, filter options
- Without structured data, they can't compare you to competitors
- They need consistent formatting to understand your offering

**4. Price Comparison (Understanding Costs):**

- Without clear pricing, they cannot compare accurately
- Ambiguous formatting leads to errors (£203,000 cruise example)
- They need explicit price, currency, availability

**5. Understanding Offers (Interpreting Your Value):**

- If your offer formatting is unclear, they misrepresent your pricing
- Complex conditional pricing confuses agents
- They need transparent, structured pricing information

**6. Purchase (Completing Transactions):**

- If they can't see what buttons do, they cannot buy
- JavaScript-only state means they can't track checkout progress
- They need semantic buttons and explicit state attributes

**At every point, your structure determines success or failure.**

### Understanding How Machines Read

**What Machines See vs What Humans See:**

Sighted humans see:

- Visual hierarchy, colours, animations
- Styled buttons and interactive elements
- Toast notifications and modals
- Loading spinners and progress indicators

Machines AND screen readers read:

- HTML structure and semantic elements
- Text content and metadata
- DOM attributes and ARIA labels
- Persistent feedback (not transient animations)

**Visual design is invisible to machines AND blind users.** Code structure is everything.

### Patterns That Break Machines AND Accessibility

Let's explore specific patterns that break both AI agents and users with disabilities:

### Mistake #1: Toast Notifications

**The Pattern That Breaks Both Audiences:**

Team removed toast notifications from forms (good!) but they kept getting reintroduced in new features. Shopping cart still used `showToast('Item added!')`.

**Why this breaks machines AND screen readers:**

- Toast notifications vanish before screen readers announce them
- Toast notifications disappear before AI agents can read them
- Both audiences miss critical feedback
- Form submission appears to fail silently for both

**Solution:** Persistent alerts with `role="alert"` that stay visible for screen readers AND machines.

### Mistake #2: Hidden Checkout State

**State Invisible to Machines AND Screen Readers:**

```javascript
// JavaScript-only state - invisible to both
let currentStep = 1;

function nextStep() {
  currentStep++;
  updateUI();
}
```

**What happened:**

- No URL reflection
- No DOM attributes
- Screen reader users can't track progress
- AI agents can't track progress
- Refreshing loses state for everyone

**Solution:** `data-state` attributes in DOM that screen readers AND machines can read.

**The convergence:** Sites with explicit state work for keyboard users, screen readers, AND AI agents. One solution serves all three audiences.

---

## Why This Happens [TIME: 3 minutes]

Modern web design is optimised for visual feedback. Machines AND screen readers need structure, not styling.

**The architectural conflict:** We've spent years optimising for:

- Single-page applications (state not reflected in URL)
- Client-side state management (JavaScript variables, not DOM)
- Toast notifications and modals (visual feedback only)
- Loading spinners without context (visual cues only)
- JavaScript-dependent navigation (no semantic structure)

**These patterns break both audiences:**

- **Screen readers:** Can't perceive visual feedback, need ARIA and semantic HTML
- **AI agents:** Can't parse visual cues, need structured data and explicit state
- **Both:** Need persistent feedback, semantic elements, and clear structure

**The convergence principle:** What machines need is what disabled users need. Semantic HTML serves screen readers AND AI agents. Explicit state helps keyboard users AND machines. One implementation benefits both.

### This Isn't New: 27 Years of the Same Problem

Here's what makes this striking: **This accessibility problem is 27 years old.**

In 1999, Janus Boye published "Constructing the Web for the Non-Visual User". His core insight? Websites optimised for visual users fail completely for non-visual interaction.

**The same patterns broke screen readers then, break AI agents now:**

- Toast notifications vanished before screen readers announced them
- Hidden state confused keyboard users trying to track progress
- JavaScript-dependent navigation failed for assistive technology
- Visual-only feedback provided no information to screen readers

**Same problems. Same solutions. New commercial urgency.**

**The difference:** Commercial pressure from AI commerce finally matches moral obligation for accessibility. Businesses now have financial incentives to fix these issues, not just compliance requirements.

We're finally fixing accessibility issues we should have fixed decades ago - because machines need the same patterns that disabled users need.

### Two HTML States: What Machines Actually See

**Critical Distinction for Server-Side Agents:**

1. **Served HTML** (static)
   - What server sends before JavaScript runs
   - Server-side agents (ChatGPT, Claude) see only this
   - Like screen readers without JavaScript support

2. **Rendered HTML** (dynamic)
   - After JavaScript transforms the page
   - Browser-based agents (Copilot) see this
   - Like screen readers with full JavaScript support

**Example:**

```html
<!-- Served HTML: Empty -->
<div id='products'></div>

<!-- Rendered HTML: Populated after JavaScript -->
<script>
  fetch('/api/products').then(data => {
    renderProducts(data);
  });
</script>
```

To server-side agents AND basic screen readers, your product catalogue is invisible.

### The Citation Problem

**Machines AND Voice Assistants Need Metadata:**

When ChatGPT recommends products, it needs exact pricing and availability. When Alexa answers questions for blind users, it needs the same structured data. Without Schema.org JSON-LD markup, both hallucinate details or cite competitors.

**The convergence:** The same structured data that helps:

- Google show rich snippets (star ratings, prices)
- Voice assistants for blind users announce accurate information
- AI agents cite you correctly in their recommendations

One implementation serves all three audiences.

**Example JSON-LD:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Book",
  "name": "The Invisible Users",
  "author": {
    "@type": "Person",
    "name": "Tom Cranstoun"
  },
  "offers": {
    "@type": "Offer",
    "price": "24.99",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

**Business value:** One improvement serves both discovery channels - Google Search and AI citations.

---

## The Solution: Semantic Structure for All [TIME: 6 minutes]

The good news: fixing this doesn't require rebuilding. It requires using semantic HTML and structured data - patterns we already know from accessibility work.

**What accessibility needs is what AI needs.**

**Three concrete patterns that serve screen readers AND machines.**

### Pattern #1: Semantic HTML Elements

**Mark Up What Something IS for Screen Readers AND Machines:**

Semantic HTML elements have meaning. Screen readers announce `<button>` as "button". Machines parse `<button>` as clickable. Both understand purpose immediately.

**Examples:**

```html
<!-- Bad: Visual styling, no semantic meaning -->
<div class="btn" onclick="submit()">Submit</div>

<!-- Good: Semantic element -->
<button type="submit">Submit</button>

<!-- Bad: Generic containers -->
<div class="content">
  <div class="sidebar">...</div>
</div>

<!-- Good: Semantic structure -->
<main>
  <article>...</article>
  <nav aria-label="Related content">...</nav>
</main>
```

**Benefits:**

- Screen readers announce element roles automatically
- Machines understand document structure
- Keyboard navigation works without extra JavaScript
- One implementation serves accessibility AND AI

### Pattern #2: Structured Data (Schema.org)

**Explicit Metadata for Voice Assistants AND AI Agents:**

Schema.org provides machine-readable structured data. Voice assistants for blind users read it. AI agents extract it. Same data, multiple audiences.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Premium Widget",
  "offers": {
    "@type": "Offer",
    "price": "119.00",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

**Benefits:**

- Voice assistants announce accurate pricing
- AI agents extract structured information
- Google shows rich snippets
- One implementation serves all three audiences

**Critical warning - The Ally McBeal Problem:**

AI training datasets include millions of lines of fictional dialogue from TV subtitles (DVDs, Blu-rays, streaming) uploaded to repositories like OpenSubtitles.org. Without explicit Schema.org markup, agents can't distinguish professional content from fiction.

**The problem works both ways:**

- Your legal brief might be treated like an Ally McBeal script
- OR: An Ally McBeal script might be cited as legal precedent (much to a lawyer's dismay)
- Your medical analysis confused with Grey's Anatomy dialogue
- OR: Grey's Anatomy medical advice cited as professional guidance
- Your financial analysis treated like fictional drama
- OR: Fictional business scenarios cited as real case studies

**Your responsibility:** Mark professional content explicitly using Schema.org types like `LegalDocument`, `ScholarlyArticle`, `MedicalScholarlyArticle`, `CreativeWork` (for fiction). Prevent both your professional content being undervalued AND fictional content being overvalued.

### Pattern #2: Complete Pricing

Instead of 'From £99':

### Pattern #3: Heading Hierarchy

**Screen Reader Navigation AND Machine Parsing:**

Screen reader users jump between headings to navigate. AI agents parse heading structure to understand document organisation. Both need logical h1 → h2 → h3 progression.

```html
<!-- Bad: Jumbled hierarchy -->
<h1>Product</h1>
<h4>Description</h4>  <!-- Skips levels -->
<h2>Reviews</h2>

<!-- Good: Logical structure -->
<h1>Product Name</h1>
  <h2>Description</h2>
  <h2>Specifications</h2>
    <h3>Dimensions</h3>
    <h3>Materials</h3>
  <h2>Reviews</h2>
```

**Benefits:**

- Screen readers provide "headings list" navigation
- Machines understand document structure
- Users with cognitive disabilities follow clear organisation
- One structure serves all audiences

### The Convergence Benefit

**One Implementation Serves Three Audiences:**

1. **Users with disabilities:** Screen readers, keyboard navigation, voice control
2. **Search engines:** Google, Bing (better rankings)
3. **AI agents:** ChatGPT, Copilot, Perplexity

**You're not building three separate things.** Semantic HTML with Schema.org works for all three simultaneously.

**Commercial pressure finally matches moral obligation.** AI commerce provides business justification for accessibility work we should have done decades ago.

---

## Taking Action [TIME: 3 minutes]

### Quick Wins: Start Here

**Critical Priority 1 Changes:**

- Add skip links (benefits keyboard users and agents)
- Add persistent error messages (helps everyone)
- Use semantic HTML (`<main>`, `<nav>`, `<article>`)
- Display complete pricing (no hidden fees)
- Add basic Schema.org structured data (JSON-LD)

**Each change benefits multiple audiences simultaneously.**

These changes benefit everyone immediately.

Start with highest impact, lowest effort.

### Web Audit Suite

Available as separate purchase or professional audit service.

- Implements patterns from the book
- Generates detailed reports
- Shows exactly where sites break for agents
- Provides specific fix recommendations

Not included with book - separate offering.

**Measure what you can't see.**

### Call to Action

Start with one pattern:

1. Pick highest-impact, lowest-effort change
2. Implement it
3. Measure the improvement
4. Tackle the next one

Sites that adapt early gain advantage. Sites that don't get quietly bypassed.

**Questions? Let's discuss your specific challenges.**

---

## Major Developments [TIME: 3 minutes]

### The Seven-Day Platform Race (January 2026)

**Three major platforms in one week:**

- **Jan 5: Amazon Alexa+** (browser agent launch)
  - Reported 2x conversations, 3x purchases vs legacy Alexa
  - Partnerships: Expedia, Yelp, Uber, OpenTable, Square
- **Jan 8: Microsoft expands Copilot Checkout**
  - Shopify auto-enrollment (opt-out window provided)
  - Retail AI agents for operations, product management
- **Jan 11: Google Universal Commerce Protocol (UCP)**
  - 20+ retailers: Target, Walmart, Macy's, Best Buy, Home Depot
  - Open protocol competing with OpenAI/Stripe ACP
  - Timeline compressed: 12 months → 6-9 months

### VPNs and Hidden Guardrails

**Two realities affecting every agent:**

1. **Browser extensions inherit network configuration:**
    - User in Manchester appears in Amsterdam (VPN exit)
    - IP-based location detection becomes unreliable
    - Fraud systems may flag legitimate transactions
    - Affects all privacy-conscious users

2. **System prompts exist but are insufficient:**
    - All agents have hidden guardrails
    - They work at reasoning level, not data extraction
    - The £203k cruise error happened *despite* guardrails
    - Need programmatic validation: range checks, cross-referencing
    - Hallucinations will continue - validation catches them

### Why This Matters Now

**Timeline acceleration is dramatic:**

- **Dec 2024:** Claude for Chrome (browser automation)
- **Jan 2025:** ACP launches (1M+ merchants)
- **Jan 5-11, 2026:** Three platforms in seven days

**Key implications:**

- Amazon, Microsoft, Google all live simultaneously
- Timeline compressed from 12 months → 6-9 months
- Two open protocols (ACP + UCP) create urgency
- Non-optimised sites excluded from agent traffic

**Agent commerce isn't experimental. It's infrastructure.**

Test your site with Claude for Chrome immediately. Implement Priority 1-2 patterns urgently.

### Our Responsibility

**Design for Machines, Benefit Everyone:**

As designers, developers, and product owners:

- **What machines need is what disabled users need**
- Blind users: Screen readers parse semantic HTML, AI agents parse same structure
- Motor-impaired users: Keyboard navigation needs semantic buttons, machines too
- Cognitive disabilities: Clear structure helps humans AND machines understand
- **One semantic solution serves accessibility, SEO, and AI simultaneously**

**Commercial pressure for AI finally matches moral obligation for accessibility.**

We're finally fixing accessibility issues we should have fixed decades ago - because machines need the same patterns that disabled users need.

---

## What Comes Next: Protocol Convergence [TIME: 2 minutes]

**Two open protocols launched simultaneously:**

1. **Agentic Commerce Protocol (ACP):** OpenAI/Stripe (Sept 2024), 1M+ merchants.
2. **Universal Commerce Protocol (UCP):** Google (Jan 2026), 20+ major retailers.

**Critical question:** Will they converge or fragment?

Beyond fixing websites and building validation layers, there's a critical infrastructure gap in the AI agent ecosystem.

**The Missing Piece:**

Every major platform is building proprietary identity delegation systems:

- Microsoft Copilot Checkout uses Microsoft's own identity layer
- Claude for Chrome inherits browser sessions through Anthropic
- Google and Apple are building their own walled gardens

**The problem:** Users face lock-in. Agent creators face fragmentation. Businesses face complexity.

**The Next Project:**

I'm considering building an open-source universal identity delegation framework that provides:

- Portable authorisation tokens that work across platforms and agents
- User-controlled permissions and auditable delegation trails
- OAuth 2.0 delegation extension support
- Abstraction layers for agent creators
- Community infrastructure before proprietary lock-in becomes entrenched

**Unlike the book and Web Audit Suite** (which are professional offerings), **this would be open-source community infrastructure** - not a commercial product. It's infrastructure the ecosystem needs. If platforms won't build interoperability, perhaps an open community effort can.

**The challenge:** This requires collaboration across competing interests - building a coalition of agent creators, businesses, and users who recognise that interoperability serves everyone better than fragmentation.

**Future direction:** Identity delegation is an evolving area where multiple approaches are emerging. The book discusses these patterns conceptually without prescribing specific implementations, acknowledging that the market is still finding optimal solutions.

---

## Key Takeaways [TIME: Closing]

**Six Essential Messages:**

1. Screen readers AND machines both read structure, not visual design
2. Same patterns serve blind users AND AI agents
3. Semantic HTML works for accessibility AND machine parsing
4. Schema.org helps voice assistants AND AI recommendations
5. One solution serves disability access AND AI commerce
6. Commercial pressure for AI matches moral obligation for accessibility

---

## Book & Contact

**The Invisible Users:** Designing the Web for AI Agents and Everyone Else

Due Q1 2026

Tom Cranstoun

<tom.cranstoun@gmail.com>

<https://allabout.network>

**Project Pages:**

- Book website: <https://allabout.network/invisible-users>
- Project news: <https://allabout.network/invisible-users/news.html>

**Questions? Discussion? Your challenges?**

---

## Speaker Notes

**Key messages to emphasise:**

1. **This is happening now** - not speculative futures
2. **Commercial pressure exists** - sites that work get preferred
3. **Solutions are accessible** - small changes, big impact
4. **Universal benefit** - helps humans and machines alike
5. **Priority-based action** - start with quick wins

**Adjust timing based on:**

- Group engagement level
- Questions during presentation
- Technical depth desired
- Specific industry concerns

**Be prepared to discuss:**

- Security implications (session inheritance problem)
- Legal landscape (web scraping, copyright)
- Content creator concerns (advertising model impact)
- Agency/consultancy opportunities
- Identity layer project (collaboration opportunities, technical challenges, regulatory outlook)

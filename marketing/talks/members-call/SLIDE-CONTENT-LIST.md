# THE INVISIBLE USERS - PRESENTATION SLIDES

## Complete Slide Content List

**Total Slides:** 33 (27 standard, 4 highlight, 2 title)

---

## SLIDE 1: The Invisible Users *(TITLE SLIDE)*

**Subtitle:** Designing the Web for AI Agents and Everyone Else
**Type:** title

**Content:**

- Tom Cranstoun: Many years in Adobe CMS & AI innovation
- Consultant at Digital Domain Technologies Ltd
- Philosophy: "What AI agents need is what everyone needs"
- Focus: Building machine-readable web architectures that serve all users

**Footer:** Tom Cranstoun | Due Q1 2026

---

## SLIDE 2: What Are AI Agents? They're Machines

**Subtitle:** AI assistants that read your website to find out what you do
**Type:** standard

**Content:**

- Statistical pattern-matching: Next-token prediction using probability distributions
- Server-side: OpenAI ChatGPT (no JavaScript execution, text-only parsing)
- In-browser: Microsoft Copilot (executes JavaScript, sees rendered HTML)
- Browser automation: Perplexity (full browser, can screenshot)
- Local agents: Ollama (runs on user's machine, limited resources)
- Why they hallucinate: Without structured data, they fabricate plausible but incorrect details
- They have disabilities: Some are blind (no screenshots), some can't run JS
- Let's call them what they are: Machines with different capabilities
- Just like users with disabilities, they need semantic structure

---

## SLIDE 3: Adobe Insights: Holiday 2025

**Subtitle:** AI Referrals Surge Triple-Digits Across Sectors
**Type:** standard

**Content:**

- Triple-Digit Growth: AI referrals surged (Retail +693%, Travel +539%)
- Conversion Flip: AI referrals moved from lagging to leading (+31% vs non-AI)
- Engagement: AI users spend 45% longer on site, view 13% more pages
- Trust: 81% reported improved shopping experience with AI Assistants
- Seismic Shift: From experimental to primary revenue driver in 12 months

---

## SLIDE 4: The £203,000 Cruise *(HIGHLIGHT SLIDE)*

**Subtitle:** Real example: January 2025, Testing Claude for Chrome
**Type:** highlight

**Content:**

- Multiple Danube cruises ending in Budapest (May 2026)
- One cruise showed: 'From £203,000-£402,000'
- Actual price: £2,030-£4,020
- 100x multiplication error from European formatting (€2.030,00)
- Without clear structured data, agents misrepresent your pricing

**Highlight Box:**

- Title: £201,000
- Text: potential mistake if booking

**Footer:** For Agent Creators, validation layers are essential, not optional

---

## SLIDE 5: What Caused This?

**Subtitle:** The Error Chain
**Type:** standard

**Content:**

- Decimal separator confusion (€2.030,00 vs £2,030)
- No range validation (£203k > £15k maximum)
- No comparative checks (58x higher than peers)
- No cross-referencing against structured data
- No confidence scoring
- Professional formatting masked the problem
- Error presented with same confidence as verified data
- This isn't an isolated incident - it's systematic across the web

---

## SLIDE 6: The Problem: Designing for Eyes, Not Machines

**Subtitle:** Modern web design optimised for visual users fails AI agents
**Type:** standard

**Content:**

- The £203k cruise isn't unique - most sites have similar issues
- Sites designed for human eyes, not machine parsers
- AI agents read HTML structure, not CSS styling
- Beautiful designs with nested divs = invisible to machines
- Semantic HTML with clear structure = readable by all
- Sites that machines can parse get recommended
- Sites that machines can't read get quietly avoided
- First-mover advantage: Sites that work early become trusted sources agents return to repeatedly

---

## SLIDE 7: The Agent Journey Through Your Website

**Subtitle:** Every stage requires the right format, clarity, and precision
**Type:** standard

**Content:**

1. LLM Training: Agents read websites to build knowledge - need clear content
2. Citation: Agents need to know what you do to cite you accurately
3. Search & Compare: Agents build lists, compare options, sort by features
4. Price Understanding: Without clear markup (€2.030,00 vs £2,030), agents misunderstand by 100x - £2,030 cruise became £203,000
5. Understanding Offers: If formatting unclear, they misrepresent your pricing
6. Purchase Confidence: If they can't see what buttons do, they cannot buy

Additional points:

- JavaScript-rendered content: Invisible to LLM training data
- At every point, your structure determines success or failure

---

## SLIDE 8: How Machines AND Screen Readers Read Your Website

**Subtitle:** The fundamental difference between sighted and non-visual readers
**Type:** standard

**Content:**

- Sighted humans see: Visual hierarchy, colours, animations, styled buttons
- Machines AND screen readers read: HTML structure, semantic elements, metadata
- Visual design is invisible to AI agents AND blind users
- Code structure is everything for accessibility AND AI
- Example: `<div class='btn'>` looks like a button, but is a meaningless container
- Example: `<button>` is semantically clear to screen readers AND machines

---

## SLIDE 9: Design for Both *(HIGHLIGHT SLIDE)*

**Subtitle:** The convergence principle
**Type:** highlight

**Content:**

- Machines can't see visual design
- Screen readers can't see visual design
- Both need semantic structure and explicit meaning
- What machines need is what disabled users need

**Highlight Box:**

- Title: Design
- Text: For Both

**Footer:** Design for structure - benefit humans, machines, and accessibility

---

## SLIDE 10: Mistake #1: Toast Notifications

**Subtitle:** The Pattern That Keeps Returning
**Type:** standard

**Content:**

- Removed from forms (good!) → Reintroduced in shopping cart (bad!)
- `showToast('Item added!')`
- Toast notifications vanish before agents read them
- Form submission appears to fail silently
- Agents abandon the flow
- Solution: Persistent alerts that stay visible

---

## SLIDE 11: Mistake #2: Vague Button Text

**Subtitle:** Generic labels confuse machines AND screen readers
**Type:** standard

**Content:**

- Your page has three buttons that say 'More' - which does what?
- Screen readers announce: 'More button' - more what?
- Machines see: `<button>More</button>` - no context
- Bad: 'More', 'Click here', 'Learn more', 'Read more'
- Good: 'More about pricing', 'View product details', 'Read customer reviews'
- Be specific in the button text - both audiences need context
- Solution: Descriptive button labels that work without surrounding content

---

## SLIDE 12: Mistake #3: Hidden Checkout State

**Subtitle:** State Invisible to Agents
**Type:** standard

**Content:**

- JavaScript-only state (`let currentStep = 1`)
- No URL reflection. No DOM attributes
- Agents can't track progress. Refreshing loses state
- Solution: data-state attributes in DOM

---

## SLIDE 13: Why Machines AND Screen Readers Struggle

**Subtitle:** Visual-first design patterns break accessibility AND AI
**Type:** standard

**Content:**

- JavaScript-rendered content (invisible to parsers AND screen readers)
- Generic class names (no semantic meaning for assistive tech OR machines)
- CSS-based information (colour, size - invisible to blind users AND AI)
- Toast notifications (vanish before screen readers AND machines read)
- Complex client-side state (confuses keyboard users AND agents)
- Solution: Semantic HTML + ARIA + CSS works for everyone
- Structure first benefits accessibility AND AI simultaneously

---

## SLIDE 14: This Isn't New: 27 Years of the Same Problem

**Subtitle:** Same accessibility problems, same solutions, new commercial urgency
**Type:** standard

**Content:**

- 1999: Janus Boye wrote 'Constructing the Web for the Non-Visual User'
- Toast notifications broke screen readers then, break AI agents now
- Hidden state confused keyboard users then, confuses agents now
- Same problems affecting blind users AND machine readers
- Same solutions work for accessibility AND AI
- The difference: Commercial pressure finally matches moral obligation

---

## SLIDE 15: The Ally McBeal Problem

**Subtitle:** Without explicit markup, agents can't distinguish fiction from professional content
**Type:** standard

**Content:**

- AI training data includes millions of TV subtitle files (DVDs, streaming)
- Without Schema.org markup, agents cannot tell the difference:
- Your legal brief might be treated like an Ally McBeal script
- OR: Ally McBeal dialogue might be cited as legal precedent (lawyer's nightmare!)
- Medical analysis confused with Grey's Anatomy dialogue
- Financial advice treated like fictional business drama
- Use Schema.org types: LegalDocument, ScholarlyArticle, MedicalScholarlyArticle
- Mark fiction as CreativeWork - prevent both under/over-valuing content

---

## SLIDE 16: The Citation Problem

**Subtitle:** First-mover advantage available
**Type:** standard

**Content:**

- When ChatGPT recommends products, it needs exact pricing
- Without Schema.org JSON-LD markup, agents hallucinate details
- When agents find sites that don't work, they move on quickly
- When agents find sites that work, they come back
- First-mover advantage: Sites that work early get preferred
- Agents cite competitors who provided explicit signals first

---

## SLIDE 17: Two HTML States: What Machines Actually See

**Subtitle:** The critical distinction between human and machine perception
**Type:** standard

**Content:**

- 1. Served HTML (static) - Raw HTML before JavaScript runs
- 1. Rendered HTML (dynamic) - After JavaScript transforms the page
- Most AI agents only see served HTML (the raw code)
- Browser-based agents see rendered HTML (after transformation)
- Example: `<div id='products'></div>` then `fetch()` = invisible to most machines
- Solution: Server-side render content or use semantic HTML from the start

---

## SLIDE 18: The Solution: Semantic Structure for All

**Subtitle:** What accessibility needs is what AI needs
**Type:** standard

**Content:**

- Use semantic HTML (screen readers AND machines understand it)
- Screen readers announce `<button>`, machines parse `<button>`
- Add structured data (helps voice assistants AND AI agents)
- Schema.org serves blind users' voice assistants AND AI parsers
- Clear heading hierarchy (screen reader navigation AND machine parsing)
- One solution serves accessibility, SEO, and AI simultaneously

---

## SLIDE 19: Pattern #1: Semantic HTML Structure

**Subtitle:** Mark up what something IS for screen readers AND machines
**Type:** standard

**Content:**

- `<button>` - Screen readers announce 'button', machines parse as clickable
- `<main>` - Screen readers jump to content, machines identify key content
- `<nav>` - Screen readers list navigation, machines understand site structure
- `<article>` - Screen readers group content, machines extract articles
- Semantic elements work immediately for accessibility AND AI
- Style with CSS - assistive tech AND machines read the HTML

---

## SLIDE 20: Pattern #2: Explicit Metadata (Schema.org)

**Subtitle:** Structured data serves voice assistants AND AI agents
**Type:** standard

**Content:**

- Schema.org provides shared vocabulary for all machine readers
- Voice assistants for blind users read the same metadata as AI agents
- Example: Price, currency, availability - voice assistants announce it
- Same metadata helps Google, Alexa, ChatGPT, Claude
- One implementation serves accessibility tech AND AI simultaneously
- Blind users' voice assistants benefit from the same structured data

---

## SLIDE 21: Pattern #3: Clear Document Structure

**Subtitle:** Heading hierarchy for screen reader navigation AND machine parsing
**Type:** standard

**Content:**

- Screen reader users navigate by headings (h1 → h2 → h3)
- AI agents parse the same heading structure for document meaning
- Screen readers: Jump between h2 headings to scan sections
- Machines: Parse h2 headings to understand topic structure
- Jumbled hierarchy confuses blind users AND AI agents equally
- One logical structure serves accessibility AND AI simultaneously

---

## SLIDE 22: The Morning-After Test

**Subtitle:** Test your site's machine-readability in 30 seconds
**Type:** standard

**Content:**

- 1. View source on your most important page
- 1. Copy the raw HTML (not rendered, the actual source)
- 1. Paste into ChatGPT or Claude
- 1. Ask: 'What is this page about? What can I do here?'
- If AI can't understand it, neither can real agents
- Immediate feedback on structural problems

---

## SLIDE 23: Quick Wins: Start Here

**Subtitle:** Improve accessibility AND machine-readability simultaneously
**Type:** standard

**Content:**

- 1. Semantic HTML (screen readers announce it, machines parse it)
- 1. Schema.org JSON-LD (voice assistants AND AI agents read it)
- 1. Heading hierarchy (screen reader navigation AND machine structure)
- 1. Descriptive link text (screen readers read context, machines too)
- 1. Alt text on images (blind users AND machines need descriptions)
- Each change serves accessibility AND AI with one implementation

---

## SLIDE 24: Real-World Impact - Adobe Experience Manager

**Subtitle:** AI-friendly patterns in production
**Type:** standard

**Content:**

- Adobe Experience Manager's Generate Variations feature
- Design work: 75 days → 5 days (with AI handling repetitive patterns)
- Human creators maintained control over messaging and brand alignment
- Result: 60+ variations achieving 30% higher click-through rates
- System worked because it followed agent-friendly patterns:
- Semantic structure, explicit state, machine-readable metadata
- AI generated variations whilst humans retained strategic oversight
- Demonstrates real commercial value of agent-friendly design

---

## SLIDE 25: Web Audit Suite

**Subtitle:** Professional audit service
**Type:** standard

**Content:**

- Implements patterns from the book
- Generates detailed reports
- Shows exactly where sites break for agents
- Provides specific fix recommendations
- Measure what you can't see

---

## SLIDE 26: Call to Action

**Subtitle:** Start with one pattern
**Type:** standard

**Content:**

- 1. Pick highest-impact, lowest-effort change
- 1. Implement it
- 1. Measure the improvement
- 1. Tackle the next one
- Sites that adapt early gain advantage

---

## SLIDE 27: The Seven-Day Platform Race (Jan 2026)

**Subtitle:** Three major platforms in one week
**Type:** standard

**Content:**

- Jan 5: Amazon Alexa+ (browser agent launch)
- Jan 8: Microsoft expands Copilot Checkout
- Jan 11: Google Universal Commerce Protocol (UCP)
- Timeline compressed: 12 months → 6-9 months

---

## SLIDE 28: VPNs and Hidden Guardrails

**Subtitle:** Two realities affecting every agent
**Type:** standard

**Content:**

- Browser extensions inherit network config (VPN exit nodes affect location)
- System prompts exist but are insufficient
- Guardrails work at reasoning level, not data extraction
- Hallucinations will continue - validation catches them

---

## SLIDE 29: Why This Matters Now

**Subtitle:** Timeline acceleration is dramatic
**Type:** standard

**Content:**

- Dec 2024: Claude for Chrome
- Jan 2025: ACP launches
- Jan 2026: Three platforms in seven days
- Agent commerce is infrastructure
- Implement Priority 1-2 patterns urgently

---

## SLIDE 30: Design for Both

**Subtitle:** The convergence principle in action
**Type:** standard

**Content:**

- What machines need is what disabled users need
- Blind users: Screen readers parse semantic HTML, AI agents parse same structure
- Motor-impaired users: Keyboard navigation needs semantic buttons, machines too
- Cognitive disabilities: Clear structure helps humans AND machines understand
- One semantic solution serves accessibility, SEO, and AI simultaneously
- Commercial pressure for AI finally matches moral obligation for accessibility

---

## SLIDE 31: What Comes Next

**Subtitle:** Protocol Convergence vs Fragmentation
**Type:** standard

**Content:**

- Agentic Commerce Protocol (ACP) - OpenAI/Stripe
- Universal Commerce Protocol (UCP) - Google
- Identity delegation patterns emerging
- Multiple approaches under development

---

## SLIDE 32: Key Takeaways

**Subtitle:** Six Essential Messages
**Type:** standard

**Content:**

- 1. Screen readers AND machines both read structure, not visual design
- 1. Same patterns serve blind users AND AI agents
- 1. Semantic HTML works for accessibility AND machine parsing
- 1. Schema.org helps voice assistants AND AI recommendations
- 1. One solution serves disability access AND AI commerce
- 1. Commercial pressure for AI matches moral obligation for accessibility

---

## SLIDE 33: Book & Contact *(TITLE SLIDE)*

**Subtitle:** The Invisible Users
**Type:** title

**Content:**

- Tom Cranstoun
- <tom.cranstoun@gmail.com> | <https://allabout.network>
- LinkedIn: <https://www.linkedin.com/in/tom-cranstoun/>
-
- Project Pages:
- Book: <https://allabout.network/invisible-users>
- News: <https://allabout.network/invisible-users/news.html>

**Footer:** Questions? Discussion? Your challenges?

---

## Summary

**Key Themes Throughout:**

1. **Convergence Principle:** What machines need = what disabled users need
2. **Accessibility AND AI:** Every pattern serves both audiences
3. **Screen readers AND machines:** Consistent pairing throughout
4. **One solution for all:** No separate implementations needed
5. **Commercial + Moral:** Business pressure matches ethical obligation

**Slide Distribution:**

- Opening (Slides 1-3): Introduction and AI agent types
- Problem Example (Slides 4-6): £203k cruise error and error chain
- Agent Journey (Slide 7): Six stages of agent interaction
- Convergence (Slides 8-9): How machines AND screen readers work
- Mistakes (Slides 10-12): Toast notifications, vague buttons, hidden state
- Context (Slides 13-16): Historical patterns, Ally McBeal, citation problem
- Core Concepts (Slide 17): Two HTML states
- Solutions (Slides 18-21): Semantic structure and three patterns
- Testing (Slide 22): Morning-After Test
- Quick Wins (Slide 23): Five immediate actions
- Real-World Impact (Slide 24): Adobe Experience Manager case study
- Tools (Slide 25): Web Audit Suite
- Action (Slide 26): Call to action
- Urgency (Slides 27-29): Platform race, VPNs, timeline
- Principles (Slide 30): Design for Both
- Future (Slide 31): What comes next
- Closing (Slides 32-33): Takeaways and contact

**Duration:** 20 minutes presentation + Q&A

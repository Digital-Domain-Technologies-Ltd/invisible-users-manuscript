| metadata |  |
| :---- | :---- |
| title | What Are AI Agents? Understanding the Machines Reading Your Website |
| author | Tom Cranstoun |
| creation-date | 19/Jan/2026 |
| publication-date | 19/Jan/2026 |
| modified-date | 19/Jan/2026 |
| description | AI agents are machines with technical limitations that parallel human disabilities. Learn why markdown metadata tables preserve critical information that HTML-to-markdown converters destroy. |
| longdescription | Chapter 0 of "The Invisible Users" introduces AI agents as machines - not magic - with specific technical capabilities and limitations. Server-side agents see raw HTML, in-browser agents execute JavaScript, browser automation agents take screenshots, and local agents run with limited resources. These machines have disabilities: blindness (no CSS), motor impairments (complex interactions), cognitive load (limited context), and processing speed constraints. The convergence principle: patterns that help AI agents are the same patterns that help users with disabilities. This post introduces the EDS markdown metadata table pattern that solves the "markdown converter problem" - when you convert HTML to markdown, you lose JSON-LD structured data, meta tags, and Schema.org markup. Agents can read content but cannot cite accurately. The solution: embed metadata directly in markdown using tables. Follow Tom Cranstoun for updates on "The Invisible Users" (Q1 2026). |
| jsonld | BlogPosting |
| LinkedIn | <https://www.linkedin.com/in/tom-cranstoun/> |

# What Are AI Agents? Understanding the Machines Reading Your Website

A preview of Chapter 0 from "The Invisible Users: Designing the Web for AI Agents and Everyone Else" (Q1 2026)

AI agents are visiting your website right now. People are asking ChatGPT about your products, using Copilot to compare your services, and running agents to check your availability. But these aren't intelligent beings - they're machines with specific technical capabilities and limitations.

Let me show you what they are, how they work, and why understanding them matters for your website.

## They're Machines, Not Magic

When we talk about AI agents reading websites, we're not talking about artificial general intelligence or sentient software. We're talking about **machines** - software programs that process your website's content on behalf of human users.

These machines operate through statistical pattern-matching - next-token prediction using probability distributions calculated from training data. When agents process your website, they're performing weighted averaging and probability calculations, not "understanding" content the way humans do.

**Why agents hallucinate:** When asked about content beyond their training data, they guess based on statistical co-occurrence patterns. Without clear structured data (Schema.org, semantic HTML), they fabricate details that seem plausible but are incorrect.

**Why explicit structure matters:** Agents convert your HTML into mathematical representations through weighted averaging of co-occurrence patterns. `<div class="button">` and `<button>` appear similar to humans but create different statistical signatures. Semantic HTML produces distinct patterns that agents process reliably, whilst visual-only distinctions disappear in the averaging process.

## Four Types of AI Agents

AI agents that read websites fall into four categories, each with different technical capabilities:

### 1. Server-Side Agents (ChatGPT, Claude)

These agents run on remote servers and process websites as raw text.

**What they see:** Raw HTML source code, text content, semantic structure, metadata (Schema.org, Open Graph tags), link relationships.

**What they miss:** JavaScript-rendered content, dynamic updates, toast notifications, visual hierarchy from CSS, content loaded via fetch() or AJAX.

**Disability equivalent:** Like a blind user with a basic screen reader that cannot execute JavaScript.

### 2. In-Browser Agents (Microsoft Copilot, Browser Extensions)

These agents run within web browsers and have full access to rendered pages.

**What they see:** Rendered HTML (after JavaScript execution), dynamic content updates, client-side state changes, interactive elements and their states.

**What they miss:** Visual hierarchy (size, colour, position), CSS-based information, animations timing, toast notifications (if they disappear quickly).

**Disability equivalent:** Like a screen reader user with full JavaScript support but no visual perception.

### 3. Browser Automation Agents (Perplexity, Playwright-based)

These agents control full browsers programmatically and can take screenshots.

**What they see:** Everything in-browser agents see, plus visual layout through screenshots, colour and size relationships, visual hierarchy, rendered charts and graphics.

**What they miss:** Nuanced visual design intent, brand meaning, emotional resonance, cultural context.

**Disability equivalent:** Like a sighted user with motor impairments who must use keyboard navigation.

### 4. Local Agents (Ollama, On-Device LLMs)

These agents run on users' personal computers with limited resources.

**What they see:** Raw HTML (like server-side agents), limited to most important content due to token budget constraints.

**What they miss:** Everything server-side agents miss, plus may miss content due to smaller context windows.

**Disability equivalent:** Like a user with cognitive disabilities who needs simple, clear structure and cannot process excessive information.

## The Convergence Principle

**The patterns that help AI agents are the same patterns that help users with disabilities.** This isn't a coincidence - both groups need semantic structure because both lack access to visual design cues.

**Semantic HTML:**

- Screen readers announce `<button>` as "button"
- AI agents parse `<button>` as clickable element
- Both understand the element's purpose immediately

**Heading Hierarchy:**

- Screen reader users navigate by jumping between headings
- AI agents parse heading structure to understand document organisation
- Both rely on logical h1 → h2 → h3 progression

**Structured Data (Schema.org):**

- Voice assistants for blind users read structured pricing
- AI agents extract the same metadata for recommendations
- Both need explicit, machine-readable information

## The Markdown Converter Problem

Between 2022 and 2024, a common pattern emerged: convert websites to markdown for AI chatbots. Tools like converturltomd.com stripped HTML decoration, leaving plain text that language models could process efficiently.

**But this approach starves the machine.**

When you strip HTML to markdown, you lose:

- **JSON-LD structured data** - Product details, pricing, availability, reviews
- **HTML meta tags** - Publication dates, author information, content freshness
- **Schema.org markup** - Explicit signals about content type and relationships
- **Semantic HTML attributes** - data-price, data-formats, data-isbn that make extraction reliable

A person data field becomes indistinguishable from body text. A product price loses its currency and validity period. An author attribution disappears entirely. **The agent can still read your content, but it has no way to cite you accurately or prove your existence as the authoritative source.**

## The Solution: Markdown Metadata Tables

Instead of converting HTML→markdown and losing metadata, write markdown WITH metadata embedded from the start. This blog post demonstrates the pattern.

At the bottom of this page, you'll find a metadata table that preserves:

- Author attribution (for accurate citation)
- Publication dates (for content freshness)
- Schema.org type (BlogPosting)
- Long description for AI context
- Social media links (LinkedIn)

**Why this works:**

- **For AI agents:** Machine-readable table structure they can parse before processing content
- **For humans:** Renders as visible table providing context and attribution
- **For search engines:** Can be processed into HTML meta tags and JSON-LD automatically
- **For static site generators:** Standard frontmatter convention (Hugo, Jekyll, Gatsby)

When systems like Adobe Edge Delivery Services process this markdown, they convert the metadata table into HTML meta tags and JSON-LD structured data automatically. Both agents (reading markdown) and search engines (reading HTML) get the metadata they need.

## The Agent Journey: From Discovery to Purchase

Your website needs to support a predictable journey:

**Stage 1: Discovery (LLM Training)** - Agents read websites during training. If your content is JavaScript-rendered with no semantic markup, you're invisible.

**Stage 2: Citation (Recommendation)** - When users ask agents for recommendations, agents cite sources they trust. Without structured data, agents hallucinate details or skip your site.

**Stage 3: Search and Compare** - Agents build comparison lists. Without semantic HTML and explicit metadata, agents cannot understand what you offer.

**Stage 4: Price Understanding** - Without clear price markup, agents misunderstand costs by orders of magnitude. Real example: a Danube cruise priced at £2,030 was read as £203,000 - a 100x multiplication error.

**Stage 5: Purchase Confidence** - If agents cannot see what buttons do (`<div class="btn">` vs `<button>`), they cannot complete transactions.

**Break any stage, and the entire commerce journey collapses.**

## What This Means for You

Your website has machine readers right now. These machines follow predictable patterns. They need:

- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<button>`)
- Structured data (Schema.org JSON-LD)
- Explicit state (`data-state`, `aria-invalid`, `role="alert"`)
- Clear heading hierarchy (h1 → h2 → h3)
- Text alternatives (alt text, aria-label)

**One implementation serves three audiences:**

1. Users with disabilities (screen readers, keyboard users)
2. Search engines (Google, Bing)
3. AI agents (ChatGPT, Copilot, Perplexity)

## About "The Invisible Users"

This blog post previews Chapter 0 of "The Invisible Users: Designing the Web for AI Agents and Everyone Else" (Q1 2026). The book examines:

- Why websites fail for agents (and humans with disabilities)
- How agent failures expose accessibility problems
- What patterns work for both audiences
- How to implement these patterns practically
- What's coming next in agent-mediated commerce

**Chapter 0 is self-contained and freely shareable.** It establishes the foundation: AI agents are machines with technical constraints that parallel human disabilities. Once we understand their capabilities, we can design websites that work for everyone.

## Follow for Updates

I'm documenting the collision between modern web design and machine readers. Follow me for updates on "The Invisible Users" and practical guidance on making your website work for AI agents:

- **LinkedIn:** <https://www.linkedin.com/in/tom-cranstoun/>
- **Website:** <https://allabout.network>
- **Book updates:** <https://allabout.network/invisible-users>

The book launches Q1 2026. First-mover advantage exists - sites that work early become trusted sources that agents return to repeatedly.

---

**About the metadata table below:** This demonstrates the EDS markdown metadata pattern discussed in the article. It preserves structured information that HTML-to-markdown converters would destroy. AI agents reading this markdown file can extract author, publication date, description, and Schema.org type for accurate citation. When processed by static site generators or EDS, this table converts automatically into HTML meta tags and JSON-LD structured data.

---

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "What Are AI Agents? Understanding the Machines Reading Your Website",
  "description": "AI agents are machines with technical limitations that parallel human disabilities. Learn why markdown metadata tables preserve critical information that HTML-to-markdown converters destroy.",
  "author": {
    "@type": "Person",
    "name": "Tom Cranstoun",
    "url": "https://allabout.network",
    "sameAs": [
      "https://www.linkedin.com/in/tom-cranstoun/"
    ],
    "jobTitle": "Author",
    "description": "Author of 'The Invisible Users: Designing the Web for AI Agents and Everyone Else'"
  },
  "datePublished": "2026-01-19",
  "dateModified": "2026-01-19",
  "publisher": {
    "@type": "Person",
    "name": "Tom Cranstoun"
  },
  "image": "https://allabout.network/media_126e99d56f06caf788bee715aff92281d2e31a206.png",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://allabout.network/invisible-users/chapter-0"
  },
  "about": {
    "@type": "Book",
    "name": "The Invisible Users: Designing the Web for AI Agents and Everyone Else",
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun"
    },
    "datePublished": "2026-Q1"
  },
  "keywords": [
    "AI agents",
    "web accessibility",
    "semantic HTML",
    "markdown metadata",
    "Schema.org",
    "EDS",
    "machine-readable content",
    "structured data",
    "AI web design"
  ]
}
```

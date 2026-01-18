\newpage

# Chapter 0 - What Are AI Agents?

Understanding the machines reading your website.

## They're Machines, Not Magic

When we talk about AI agents reading websites, we're not talking about artificial general intelligence or sentient software. We're talking about machines - software programs with specific technical capabilities and limitations - that process your website's content on behalf of human users.

Let's call them what they are: machines with different capabilities. Just as users have varying physical abilities, AI agents have varying technical capabilities. Some can see (take screenshots), some cannot. Some can execute JavaScript, some cannot. Some run on powerful servers, some run locally with limited resources.

Understanding these machines means understanding their technical constraints.

## The Four Types of AI Agents

AI agents that read websites fall into four main categories, each with different technical capabilities:

### Server-Side Agents (OpenAI ChatGPT, Anthropic Claude)

These agents run on remote servers and process websites as raw text.

**Technical capabilities:**

- Fetch HTML from URLs
- Parse text content and HTML structure
- No JavaScript execution
- No CSS rendering
- No screenshot capability
- Process served HTML only (what the server sends before JavaScript runs)

**What they see:**

- Raw HTML source code
- Text content
- Semantic structure (heading hierarchy, lists, tables)
- Metadata (Schema.org, Open Graph tags)
- Link relationships

**What they miss:**

- JavaScript-rendered content
- Dynamic updates after page load
- Toast notifications
- Visual hierarchy from CSS
- Content loaded via fetch() or AJAX
- Client-side state changes

**Disability equivalent:** Like a blind user with a basic screen reader that cannot execute JavaScript. They need semantic HTML and server-side rendering.

### In-Browser Agents (Microsoft Copilot, Browser Extensions)

These agents run within web browsers and have full access to rendered pages.

**Technical capabilities:**

- Full JavaScript execution
- CSS rendering
- Access to rendered HTML (DOM after JavaScript runs)
- Can interact with forms and buttons
- Can wait for dynamic updates
- Access to browser APIs

**What they see:**

- Rendered HTML (after JavaScript execution)
- Dynamic content updates
- Client-side state changes
- Visual structure through DOM inspection
- Interactive elements and their states

**What they miss:**

- Visual hierarchy (size, colour, position)
- CSS-based information
- Animations and transitions (timing)
- Toast notifications (if they disappear quickly)
- Implicit states not reflected in DOM

**Disability equivalent:** Like a screen reader user with full JavaScript support but no visual perception. They need explicit state attributes and persistent feedback.

### Browser Automation Agents (Perplexity, Playwright-based Agents)

These agents control full browsers programmatically and can take screenshots.

**Technical capabilities:**

- Everything in-browser agents can do
- Screenshot capability (computer vision)
- Network request interception
- Performance monitoring
- Multi-step interactions
- Session persistence

**What they see:**

- Everything in-browser agents see
- Visual layout through screenshots
- Colour and size relationships
- Visual hierarchy
- Rendered charts and graphics

**What they miss:**

- Nuanced visual design intent
- Brand meaning
- Emotional resonance
- Cultural context
- Why something is designed a particular way

**Disability equivalent:** Like a sighted user with motor impairments who must use keyboard navigation. They can see everything but need semantic structure for efficient interaction.

### Local Agents (Ollama, On-Device LLMs)

These agents run on users' personal computers with limited resources.

**Technical capabilities:**

- Similar to server-side agents (fetch and parse)
- Smaller models (fewer parameters)
- Limited context windows (less text)
- Faster response times (no network latency)
- Privacy-preserving (no data leaves device)

**What they see:**

- Raw HTML (like server-side agents)
- Limited to most important content (token budget constraints)
- Prioritise structured data and semantic HTML

**What they miss:**

- Everything server-side agents miss
- Plus: may miss content due to smaller context windows
- Complex patterns may exceed model capabilities

**Disability equivalent:** Like a user with cognitive disabilities who needs simple, clear structure and cannot process excessive information.

## They Have Disabilities

This isn't an analogy. AI agents literally have technical limitations that parallel human disabilities:

**Blindness:**

- Server-side agents cannot "see" CSS or visual layout
- They rely entirely on HTML structure and text content
- Like blind users, they need semantic markup and text alternatives

**Motor Impairments:**

- All agents struggle with complex multi-step interactions
- They need clear, explicit paths through interfaces
- Like keyboard users, they need proper focus management and semantic buttons

**Cognitive Load:**

- Local agents have limited context windows
- They need concise, structured information
- Like users with cognitive disabilities, they need clear hierarchy and simple language

**Processing Speed:**

- Toast notifications vanish before agents can read them
- Dynamic updates may occur faster than agents can process
- Like distracted users, they need persistent feedback

## The Convergence Principle

The patterns that help AI agents are the same patterns that help users with disabilities. This isn't a coincidence - both groups need semantic structure because both lack access to visual design cues.

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

**Persistent Feedback:**

- Screen readers need `role="alert"` for important messages
- AI agents need persistent DOM elements to confirm actions
- Both miss toast notifications that vanish quickly

**Explicit State:**

- Keyboard users need visible focus indicators
- AI agents need `data-state` attributes in DOM
- Both need state reflected in HTML, not just JavaScript variables

## Why "Machines" Matters

Calling them "machines" instead of "AI assistants" or "intelligent agents" serves two purposes:

**First, it's accurate.** These are software programs with technical constraints. They parse code, not pixels. They have capabilities and limitations defined by their architecture, not by intelligence.

**Second, it removes anthropomorphisation.** When we think of them as "intelligent" or "assistants," we expect them to understand context, infer meaning, and adapt to poor design. They cannot. They're machines. They read structure.

**Third, it connects to accessibility.** We've spent decades learning how to build websites for users with disabilities. We know these patterns. We know semantic HTML, ARIA attributes, and structured data. These same patterns work for machines.

## What This Means for Your Website

Your website has machine readers right now. People are asking ChatGPT about your products, using Copilot to compare your services, and running agents to check your availability.

These machines are reading your HTML structure. If your content is JavaScript-rendered with no semantic markup, server-side agents see empty divs. If your state changes are visual-only, in-browser agents cannot track progress. If your pricing is implicit, all agents might misunderstand costs.

The patterns that help these machines are patterns we already know from accessibility work:

- Use semantic HTML (`<main>`, `<nav>`, `<article>`, `<button>`)
- Provide structured data (Schema.org JSON-LD)
- Make state explicit (`data-state`, `aria-invalid`, `role="alert"`)
- Use clear heading hierarchy (h1 → h2 → h3)
- Add text alternatives (alt text, aria-label)

One implementation serves three audiences:

1. Users with disabilities (screen readers, keyboard users)
2. Search engines (Google, Bing)
3. AI agents (ChatGPT, Copilot, Perplexity)

## The Rest of This Book

This book examines the collision between modern web design and machine readers. It explores:

- Why websites fail for agents (and humans with disabilities)
- How agent failures expose accessibility problems
- What patterns work for both audiences
- How to implement these patterns practically
- What's coming next in agent-mediated commerce

Chapter 1 begins with the patterns that break agents and humans alike. We start with real examples of AI agents failing on well-designed websites - and discover these failures have been happening to human users for years.

Let's call AI agents what they are: machines with technical constraints that parallel human disabilities. Once we understand their capabilities, we can design websites that work for everyone.

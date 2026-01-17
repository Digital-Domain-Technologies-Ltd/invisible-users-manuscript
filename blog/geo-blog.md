# Your Website Has Invisible Customers \- And They're Sending Business to Your Competitors

| bio |  |
| :---- | :---- |
| Picture Here | AI agents are visiting your website right now, extracting your content, and sending users to your competitors \- and you have no idea it's happening. |

| index |
| :---- |

## Introduction

Your analytics look normal. Traffic seems fine. Bounce rate is acceptable. But somewhere in your data, there's a pattern you're not seeing: agents arriving, extracting information, leaving without converting, and citing your competitors instead.

This isn't speculation about the future. It's happening today, and the commercial impact is already measurable. In January 2026, three major platforms launched agent commerce systems within seven days. I originally thought we had a year and a bit to implement change, but the timeline compressed from projected 12-18 months to weeks.

**"The Invisible Users: Designing the Web for AI Agents and Everyone Else"** (publication Q1 2026\) addresses this challenge through a convergence principle: the same design patterns that help AI agents also improve accessibility, SEO performance, and human experience. You're not doing separate work for different audiences. You're fixing what should have been fixed years ago.

The book provides complete implementation patterns, business frameworks, testing workflows, and real-world case studies. This article presents the core problem and introduces the convergence principle that makes the solution viable for businesses of any size.

## The Problem in Practice

In January 2025, Tailwind CSS laid off 75% of its team after revenue collapsed from a £19 million business. Their revenue model had depended on traffic to their documentation, leading to paid product discovery. When AI coding assistants started answering developer questions without sending traffic to documentation sites, the business model failed.

Founder Adam Wathan explained when closing an llms.txt integration request: "Making it easier for LLMs to read our docs just means less traffic to our docs, which means fewer people learning about our paid products and the business being even less sustainable."

Tailwind's problem wasn't technical. Their documentation was excellent \- clear, semantic HTML, strong SEO fundamentals, complete content. The problem was strategic: they had optimised for human browsing behaviour whilst discovery shifted to AI platforms.

When developers asked ChatGPT or Claude, "How do I build a responsive navbar with dropdown menus?", the agents generated free Tailwind CSS code from scratch rather than citing Tailwind UI's paid templates. The paid product remained invisible to agents because the company lacked discovery guidance: no llms.txt file (a machine-readable site guide, similar to robots.txt) directing agents to commercial offerings, no structured data markup for paid tiers, no differentiation between the free framework and premium components.

This isn't theoretical. This happened to a technical company at the forefront of web development. If Tailwind Labs missed the requirement for agent-specific discovery patterns, most businesses are similarly exposed.

The Tailwind case illustrates a broader pattern: businesses optimised for human browsing behaviour whilst discovery shifted to AI platforms. The invisible users problem affects every site that depends on traffic, discovery, or conversion \- which is nearly every commercial website.

## The Invisible Users

I refer to AI agents as "invisible users" for two reasons.

First, they're invisible to most site owners. Unless you're specifically tracking agent traffic \- and most aren't \- you have no idea how many agents visit your site or whether they succeed at their tasks. They blend into your analytics as slightly unusual sessions: short visits, no scrolling, rapid form completion, then gone.

Your website analytics look normal. Session duration is fine. Bounce rate is acceptable. Conversion rate hasn't changed dramatically. But revenue is down, and you can't figure out why.

Here's what's happening: AI agents are visiting your site, extracting your content, answering user questions, and sending those users to your competitors. You never see these visits in your analytics. You never see the lost conversions. You just see the revenue gap.

A simple test: compare your bounce rate for sessions under 10 seconds against industry averages. Unusually high short-session bounces, combined with declining conversion rates despite stable traffic, often indicate agent extraction without attribution.

Second, agents can't see parts of your interface. They can't see your beautiful animations. They don't notice your subtle colour changes. They miss your three-second toast notifications. They don't understand that a loading spinner indicates "wait" and that a greyed-out button indicates "not available". They experience a stripped-down, confusing version of the site you carefully designed.

**How agents behave differently:**

Consider how an eight-year-old searches. They type "I WANT A TOY PLESIOSAURS" and skip everything else. No brand consideration. No account creation. No reading promotional copy. No waiting for animations. No exploring refinement options. They have a clear goal and ignore all decoration.

AI agents behave with similar directness. They skip your carefully crafted brand story. They ignore your product recommendations sidebar. They don't watch your hero video. They don't notice your animated transitions. They extract the specific information they need and move on.

Does the toast notification appear for 3 seconds and then disappear? The agent missed it completely. It was parsing another part of the page. By the time it sought confirmation, the message had disappeared. The agent reported success even though the task had failed.

That elegant single-page application where content updates seamlessly without changing URLs? The agent clicked a button, waited, and saw the same URL. Did something happen? Should it stay longer? Is there an error somewhere it hasn't found? It has no way to know.

## Convergence Principle

Here's the pattern I noticed: the same design choices that confused my AI assistant also confused those using screen readers to navigate sequentially, people with cognitive processing differences, and anyone who parsed information linearly rather than spatially.

Late in 2024, I was comparing tour operators for a trip through Southeast Asia. I'd delegated the research to an AI assistant. The agent looked at one tour operator's paginated day-by-day breakdown for a 14-day tour, saw only Day 1, and concluded that was the entire trip. The competitor's single-page itinerary was easy to read. Based on this, my assistant recommended the wrong company.

The pagination pattern that broke the agent also breaks screen reader users, unable to track pagination controls effectively, people with cognitive disabilities who lose context across page transitions, and anyone making comparisons who need the complete view at once.

The web accessibility movement taught us something important: designing for edge cases improves experience for everyone.

Dropped Kerbs, or in American English ‘curb cuts’ helps wheelchair users, parents with pushchairs, travellers with suitcases, and delivery workers with trolleys. Captions help deaf viewers, people in noisy environments, language learners, and anyone who prefers reading to listening. High-contrast text helps visually impaired users and people reading screens in bright sunlight.

Agent-friendly design follows the same principle.

Clear error messages that persist until acknowledged \- better for agents, better for distracted humans. Explicit state indicators that don't rely on animation \- better for agents, better for screen reader users. Complete information on single pages instead of forced pagination \- better for agents, better for everyone trying to make comparisons.

The patterns that work for machines also work for humans. Not all humans. Not the idealised user giving full attention to a device with high-speed internet. But real humans: tired, distracted, impaired, stressed, multitasking, using old phones on slow connections.

We've been designing for ideal conditions. Agents require designs that work in the real world.

**The multilingual dimension:**

This accessibility parallel extends to language equity. Common Crawl, the primary dataset for training large language models, contains approximately 44% English content. No other language exceeds 6%. This training data imbalance means agents work best in English - not just for understanding content, but for generating recommendations, making comparisons, and facilitating transactions.

Non-English content creators face a double extraction problem: their content gets extracted by agents trained primarily on English (full extraction threat), but those same agents struggle to properly value, understand, or cite non-English content (minimal discovery benefit). The patterns that help agents parse multilingual content properly - semantic HTML, explicit Schema.org language markup, clear structure - also help human readers, search engines, and translation tools.

## Why Universal Patterns Matter

This isn't about "AI optimisation" as a separate concern. These are universal design patterns that serve multiple audiences simultaneously.

When you implement semantic HTML \- using proper `<article>`, `<section>`, `<nav>`, and `<header>` elements instead of generic `<div>` tags \- you're making your content structure explicit. AI agents can parse it more accurately. Search engines understand your content hierarchy better, which helps them rank you higher. Screen readers navigate more effectively. The work compounds.

When you add Schema.org structured data \- JSON-LD markup describing your products, services, articles, and business information \- you're providing machine-readable facts. AI agents cite you accurately in their answers, reducing type-confusion hallucinations where professional content gets mistaken for entertainment scripts. Search engines show rich snippets in results (star ratings, prices, availability). The same structured data serves both discovery channels.

When you create an llms.txt file \- a curated guide to your most important content, similar to how robots.txt guides search crawlers \- you're directing AI agents to valuable resources. This isn't separate from your traditional SEO work. It's an extension of the same principle: making your site legible to machines that can't intuit context from visual design. Add general details to the llms.txt

When you fix your information architecture \- explicit pricing on product pages, complete specifications, persistent error messages \- you're improving clarity for everyone. Agents extract accurate information. Humans find what they need faster. Accessibility improves. SEO benefits.

You're not doing separate work for agents. You're fixing what should have been fixed years ago.

## Discovery Shift

Traditional SEO focused on ranking: getting your site to appear first in search results. The goal was clicks. The more visible your result, the more traffic you capture. You ranked well in Google, users clicked through to your site, and you captured the conversion.

That model is breaking down.

ChatGPT, Claude, Perplexity, and Google's AI Overview answer questions directly. When a user asks "best project management tools for small teams", the AI gives a recommendation based on what it found during its research phase. If your site isn't structured for AI discovery, you don't get cited. The user never knows you exist.

The click disappears. The citation replaces it.

This is GEO \- Generative Engine Optimisation. Instead of optimising for clicks, you're optimising for accurate citations in AI-generated answers. When ChatGPT answers a question about your product or service, you want it to cite you correctly \- with the right name, accurate specifications, current pricing, and a clear path for the user to transact.

Here's the critical convergence: the patterns that help AI agents cite you correctly are the same patterns that improve your traditional search ranking.

Structured data (Schema.org JSON-LD). Semantic HTML. Clear information architecture. Explicit metadata. These unified principles work across the entire discovery ecosystem \- Google Search, Bing, ChatGPT, Claude, Perplexity, and every other system that needs to understand what your site offers.

When you improve for GEO, SEO benefits simultaneously. The work compounds across both discovery channels. Participation in agent-based e-commerce becomes viable only after your business has been discovered and recognised; until then, agent-mediated transactions cannot occur.

## The Business Reality

Tailwind Labs' mistake was focusing on free documentation whilst paid products remained invisible to agents. Any business that depends on traffic-driven advertising revenue, affiliate marketing with click-through tracking, "freemium" models where free docs drive awareness of paid products through browsing, or marketing sites designed to maximise time-on-site, faces the same crisis.

The market moved faster than anticipated. When work on AI agent commerce started in 2024, it felt like an emerging concern. By early 2026, the landscape had fundamentally transformed.

December 2025: Microsoft announced Copilot Checkout, signalling that agent commerce had moved from experiment to platform strategy.

January 2026: Three major platforms launched agent commerce systems within seven days. Amazon's Alexa.com (January 5th), Microsoft's Copilot Checkout expansion (January 8th), Google's Universal Commerce Protocol with Target and Walmart (January 11th). The timeline compressed from projected 12-18 months to a matter of weeks.

Agent traffic is real, growing, and affecting conversion rates right now. Most site owners don't know it's happening.

The adaptation required is urgent: transform to agent-compatible revenue models (direct transactions, paid services, API access, subscriptions) or watch revenue collapse whilst agents extract free content and paid offerings remain invisible.

## Three Practical Steps

You don't need to be technical to start addressing this. Here are three steps business leaders can take:

### 1\. Audit Your Current State

What do agents actually see when they visit your site? Simple tests reveal the gaps:

Visit your key product pages, service descriptions, and content. View the page source (not "inspect element" \- that shows rendered HTML after JavaScript executes). What agents see is the served HTML. If critical information only appears after JavaScript loads dynamic content, server-side agents miss it.

Try a screen reader. Enable VoiceOver (Mac), NVDA (Windows), or JAWS. Navigate your site with keyboard only. If the screen reader struggles, agents will too. Missing semantic structure, unclear headings, and ambiguous links become immediately obvious.

### 2\. Prioritise Discovery

Implement an llms.txt file \- a curated guide to your 10-30 most important pages. Think highlights, not complete listings. Direct agents to your products, services, documentation, about page, and key content.

Audit your Schema.org structured data. Run key pages through Google's Rich Results Test. Check for missing required fields (price, availability, currency, product format). Ensure structured data matches visible content \- if JSON-LD says the eBook costs £24.99 but visible HTML shows £34.99 (the paperback price), or if the format isn't clearly indicated, agents cite the structured data authoritatively, and users lose trust when they visit, agents get confused when they purchase. For products with multiple formats or regional pricing, use explicit `data-format` and `eligibleRegion` attributes to eliminate ambiguity.

Use precise Schema.org types to mark your content correctly. AI systems trained on entertainment scripts may confuse professional content with fictional dialogue in the absence of explicit type signals. Legal analysis needs `Legislation` or `LegalDocument` types, not a generic `Article`. Medical content needs `MedicalScholarlyArticle`. Business analysis needs `AnalysisNewsArticle`. Without these specific types, agents may treat your legal brief like an Ally McBeal episode, confuse medical analysis with Grey's Anatomy dialogue, or, worse, cite the Ally McBeal script in court as a real example. The specificity prevents hallucinations and ensures accurate citations.

---

This hallucination problem occurs because AI systems train on vast mixed datasets - entertainment scripts, professional documents, medical shows, business content - without inherent ability to distinguish context. When your legal brief lacks explicit Schema.org type markup, the agent's training sees similar language patterns in both Ally McBeal scripts and real legal documents. Without machine-readable signals differentiating the two, the agent may conflate them. Structured data provides explicit type signals (`LegalDocument`, `MedicalScholarlyArticle`) that override this training ambiguity. The agent no longer guesses from language patterns alone - it reads definitive metadata confirming "this is a legal document, not entertainment." The same principle prevents format confusion (eBook vs paperback pricing), regional pricing mismatches, and any scenario where ambiguity leads agents to cite incorrect details or recommend competitors who provided clearer signals.

### 3\. Fix Universal Patterns

Semantic HTML: Use proper `<article>`, `<section>`, `<nav>`, `<header>` elements. Implement clear heading hierarchies (H1 \- H2 \- H3, no skips). This helps agents, search engines, and screen reader users simultaneously.

Clear information architecture: Explicit pricing on product pages. Complete specifications. Persistent error messages that don't disappear after 3 seconds. State management that doesn't rely solely on JavaScript animations or visual cues.

These changes benefit everyone who uses your site, not just agents.

## A Note on Edge Optimisation

Tools like Adobe's Optimize at Edge offer a tempting shortcut: serve different content to AI agents than to humans. Pre-render JavaScript-heavy pages. Simplify complex paragraphs. Add summaries. Improve heading structures. All at the CDN layer, without touching your CMS or affecting human visitors.

But here's the critical question: if your content needs simpler paragraphs, clearer headings, and better summaries for AI agents, doesn't it need those things for humans too?

Edge optimisation addresses one genuine technical problem: JavaScript visibility. Modern websites load content through JavaScript after the initial page renders. Browsers execute JavaScript and display the entire page to users. AI agents request HTML, receive the initial response, and stop. Pre-rendering captures pages after JavaScript executes and serves them to AI agents. This is legitimate \- it solves a real technical constraint.

Serving simplified content, improving headings, and generating summaries only for AI agents avoids the necessary content-quality work. If your heading structure confuses AI agents, it probably confuses some human readers, too. If your paragraphs are too complex for AI to process effectively, they might be too complex for some readers as well.

Fix the underlying content. Make headings clearer for everyone. Write more readable paragraphs. Add useful summaries. These changes benefit both humans and AI agents. Use edge optimisation diagnostically to identify problems, not as a permanent solution that maintains two versions of your content indefinitely.

## Trust Dividend

In 2026, platforms \- Google, OpenAI, Anthropic, Perplexity \- act as gatekeepers. Their agents only send traffic to sites that have a high success rate for automated tasks.

If agents consistently fail on your site \- timeout errors, confusing structure, missing information \- platforms deprioritise you in citations. Why would ChatGPT cite a restaurant it can't extract menu information from? Why would Claude reference a product page where the price is ambiguous?

But if agents consistently succeed \- accurate extraction, clear transaction paths, reliable structured data \- platforms trust you. They cite you more frequently. They send users to you with confidence.

Successful agent interactions compound, increasing the likelihood of future citations. Conversely, failed interactions reduce the likelihood of subsequent citations.

The convergence principle ensures your investment pays multiple dividends:

Human accessibility improves (legal compliance, broader audience reach). SEO performance improves (with better rankings, featured snippets, and rich results). Agent citations increase (GEO visibility, transaction capture). Platform trust accumulates (compounding discoverability advantage).

The first businesses in each sector to become genuinely agent-friendly gain an advantage. When someone asks their AI assistant to find a hotel, compare insurance quotes, or book a restaurant, the sites that work reliably get the business. The sites that confuse or frustrate agents get filtered out before a human ever sees them.

The first business in your sector to capture agent citations becomes the default recommendation. When ChatGPT answers "best project management tools for small teams", it cites whoever implemented structured data first. Second place becomes invisible.

## Market is Moving Now

This market is growing rapidly. Three major platforms launched agent commerce systems within seven days in January 2026\. By the time you read this, more platforms will have launched, more protocols will compete for adoption, and the timeline will have compressed further.

Companies implementing universal patterns right now capture agent-mediated traffic. Companies waiting to "see how things develop" watch competitors pull ahead whilst their own discovery collapses.

The invisible users aren't a distant future. They're visiting your site right now. Every day, more tasks are delegated to AI agents. Every day, those agents encounter sites that confuse, frustrate, and ultimately fail them.

Most site owners are unaware that this is happening. They see traffic numbers, bounce rates, and conversion metrics, but they don't see the invisible failures. They don't know that an agent visited, couldn't complete its task, and sent its human elsewhere.

The patterns remain valid regardless of which platforms or protocols dominate: semantic HTML, explicit state management, structured data, and clear information architecture. But the commercial urgency continues to accelerate.

The question isn't whether to adapt. It's whether you adapt whilst there's still a competitive advantage in being early, or whether you adapt later under pressure when competitors have already captured the agent-mediated market share.

---

## Who Should Read This Book

**"The Invisible Users"** is written primarily for business leaders and managers who need to understand the strategic implications of AI agent commerce - including CEOs, product managers, marketing directors, and technical managers such as software architects and lead developers.

The book assumes no programming knowledge. Technical patterns are explained conceptually first, then demonstrated with code examples that can be skipped without losing the thread of the argument. If you don't write code, you can read straight through and gain everything you need to make informed strategic decisions.

For technical readers - developers, architects, DevOps engineers - the book can be read backwards. Start with the implementation chapters (10-13) to see the concrete patterns, then work backwards through the business justification, conceptual framework, and strategic context. You already understand the "how" - you need to understand the "why" to advocate for these changes within your organisation.

The convergence principle means both audiences benefit: business leaders understand why agent compatibility creates competitive advantage, whilst technical teams understand which patterns deliver measurable business impact rather than speculative future-proofing.

---

## Historical Context

This isn't a new problem - we've known about it for decades.

My colleague and CMS Experts host friend Janus Boye wrote about machine-readable metadata in May 1998, nearly 27 years ago. His article "RDF - What's in it for us?" explored the Resource Description Framework and the vision of making web content understandable to machines through structured metadata. The principles he described - explicit semantics, machine-readable relationships, standardised vocabularies - directly underpin today's Schema.org structured data that helps AI agents parse content accurately. It's taken a long time for this to become commercially urgent. Why did we not listen the first time?

His original article is here: <https://www.irt.org/articles/js086/>

My first post about AI agents and web compatibility was in January 2024, two years ago, following CMS Kickoff 2024: <https://cmscritic.com/a-cms-consultants-takeaways-from-cms-kickoff-2024>

The patterns have been visible for decades. The commercial pressure finally arrived.

---

## The Complete Guide

This article introduces the core problem and convergence principle. **"The Invisible Users: Designing the Web for AI Agents and Everyone Else"** provides the complete implementation framework:

- **Chapter 4:** Business model analysis for traffic-dependent revenue
- **Chapter 10:** Complete Schema.org implementation patterns with working code examples
- **Chapter 11:** Step-by-step audit workflows for non-technical leaders
- Business frameworks for evaluating agent compatibility and ROI
- Testing and validation workflows that integrate with existing QA processes
- Priority-based implementation roadmap for resource-constrained teams
- Real-world case studies with measurable business impact analysis
- Discovery patterns (GEO) and transaction patterns for agent commerce
- Agent creator guidance for building reliable automated systems

The book addresses both business leaders who need to understand strategic implications and technical teams who need to implement solutions. Every pattern includes working code, real examples, and clear success metrics.

**Publication:** Q1 2026

**Stay Updated:** Follow me on [LinkedIn](https://linkedin.com/in/tomcranstoun) for book launch announcements, practical insights, and analysis of the evolving AI agent landscape.

**Contact:** Questions about agent compatibility, implementation guidance, or speaking opportunities \- reach me at [tom.cranstoun@gmail.com](mailto:tom.cranstoun@gmail.com).

---

| fragment |
| :---- |
| /fragments/ddt/proposition |

| Section metadata |  |
| :---- | :---- |
| style | bg-dark |

---

Related Articles

| Blogroll |
| :---- |

##

| Blogroll (compact) |
| :---- |

| remove-icon-styles |
| :---- |

| returntotop |
| :---- |
| Back to Top |

| metadata |  |
| :---- | :---- |
| title | Your Website Has Invisible Customers \- And They're Sending Business to Your Competitors |
| description | Introducing "The Invisible Users" \- a guide to designing websites that work for AI agents, accessibility, and everyone else. |
| jsonld | article |
| image |  |
| author | Tom Cranstoun |
| longdescription | AI agents are visiting your website right now \- extracting content, evaluating products, and making recommendations that send users to your competitors. Most site owners have no idea this is happening. Their analytics look normal, whilst agent-mediated traffic silently erodes their market position. "The Invisible Users: Designing the Web for AI Agents and Everyone Else" (Q1 2026\) addresses this challenge through a convergence principle: the same design patterns that help AI agents also improve accessibility, SEO performance, and human experience. You're not doing separate work for different audiences. The book provides complete implementation patterns, business frameworks, testing workflows, and real-world case studies. This article introduces the core problem through the lens of Tailwind CSS's £19 million revenue collapse, explores why the same design choices that confuse AI assistants also break accessibility, and demonstrates how universal patterns serve multiple audiences simultaneously. The market moved faster than anticipated: three major platforms launched agent commerce systems within 7 days in January 2026\. Companies implementing universal patterns now capture agent-mediated traffic whilst competitors watch their discovery collapse. |
| LinkedIn | [https://www.linkedin.com/in/tom-cranstoun/](https://www.linkedin.com/in/tom-cranstoun/) |
| publication-date | 17/Jan/2026 |

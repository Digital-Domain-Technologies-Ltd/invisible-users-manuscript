# The Invisible Users: Why Your Website Fails AI Agents (And What That Means for Everyone)

**Published:** January 2026
**Author:** Tom Cranstoun
**Talk:** Members Call Presentation, January 2026

---

## The £203,000 Cruise That Never Was

In December 2024, whilst researching Danube river cruises for May 2026, an AI assistant returned pricing that made me stop and stare: **£203,000-£402,000 per person** for a week-long cruise.

The actual price? **£2,030-£4,020.**

This wasn't a reasoning failure. The AI didn't think £203,000 was reasonable for a river cruise. The error occurred during data extraction from a European website that used comma as a decimal separator (€2.030,00). Without validation layers, the error propagated through currency conversion, multiplying by 100.

No systems caught that £203k exceeds maximum luxury cruise pricing by 13x. No checks flagged that this was 58x higher than comparable cruises. No confidence scoring marked it as anomalous. The error was presented with the same professional formatting as verified data.

**If this agent was booking rather than researching, this could have been a £201,000 mistake.**

This is the reality of AI agent commerce. When agents interact with websites designed for human eyes, small formatting differences can cascade into catastrophic errors.

## Adobe's Data: The Commercial Reality

Adobe's Holiday 2025 analysis revealed that AI agent commerce has moved from experimental to infrastructure:

- **Triple-digit growth:** AI referrals surged across sectors (Retail +693%, Travel +539%)
- **Conversion flip:** AI referrals moved from lagging to leading conversion rates (+31% vs non-AI)
- **Engagement:** AI-assisted users spend 45% longer on sites, view 13% more pages
- **Trust:** 81% reported improved shopping experience with AI assistants

This isn't speculative futures. This is happening now. Sites that work well for AI agents get preferred. Sites that don't get quietly avoided. This creates a first-mover advantage that's hard to claw back.

## The Problem: Invisible Failures

Websites fail quietly for AI agents. Not because agents are poorly designed, but because modern web design is optimised for visual feedback that agents can't perceive.

AI agents are called "invisible users" for two reasons:

1. **They're invisible to site owners** — Unless you're tracking agent traffic (most aren't), you have no idea they're visiting or whether they succeed. They blend into analytics as slightly unusual sessions.

2. **Your interface is invisible to them** — They can't see animations, don't notice colour changes, miss three-second toast notifications that vanish after 2 seconds, and don't understand that a loading spinner means "wait."

### Two Production Mistakes

#### Mistake 1: The Vanishing Confirmation

A development team removed toast notifications from forms after discovering they broke accessibility. Good decision. But six months later, those same notifications were reintroduced in the shopping cart feature. "Item added!" would flash on screen for 3 seconds and disappear.

For AI agents reading the page, the confirmation never existed. They saw no evidence the item was added. The form appeared to fail silently. Agents abandoned the checkout flow. Sites with persistent confirmations that stayed visible got the bookings instead.

#### Mistake 2: The Invisible Checkout Journey

A checkout flow tracked progress through JavaScript variables stored in memory. Step 1, Step 2, Step 3 - but only the browser knew which step you were on. The page URL never changed. The HTML never reflected the current state.

AI agents couldn't track progress. They couldn't tell if they were on payment details or order confirmation. Refreshing the page lost all state. Sites that made checkout progress visible in the HTML structure - through URL changes or explicit state markers - completed transactions. Sites with invisible state lost them.

The commercial reality: Checkout completion rates dropped for agent-assisted purchases on the first site. The second site, with explicit state markers, maintained consistent rates.

## Why This Happens

Modern web design is optimised for patterns that break non-visual interaction:

- Single-page applications that never update the URL
- State stored in JavaScript memory, invisible to page inspection
- Toast notifications that vanish before they can be read
- Loading spinners without text explaining what's loading
- Navigation that requires JavaScript to function

These patterns break agents **and users with disabilities**. Those who navigate with keyboards instead of pointing devices. Users who perceive pages through screen readers rather than visually. People with motor disabilities requiring voice control. Those with cognitive differences who need persistent rather than transient information.

**The convergence principle:** Patterns that break AI agents also break humans. Skip links that help keyboard users bypass navigation also help agents identify main content. Persistent error messages benefit distracted humans and agents simultaneously. Semantic HTML benefits screen readers and AI parsing at the same time.

One improvement, multiple audiences benefit.

## This Isn't New: 27 Years of the Same Problem

Here's what makes this striking: **This problem is 27 years old.**

In 1999, Janus Boye published "Constructing the Web for the Non-Visual User" (<https://www.irt.org/articles/js086/>). His core insight? Websites optimised for visual users fail completely for non-visual interaction.

I started writing "The Invisible Users" 25 years after Janus published that article - in 2024.

The same patterns that broke screen readers in 1999 break AI agents in 2025:

- Toast notifications that vanish before screen readers can announce them
- Hidden state that screen readers can't perceive
- JavaScript-dependent navigation that confuses keyboard users

**The difference today:** Commercial pressure finally matches moral obligation. Businesses have financial incentives to fix these issues, not just accessibility compliance requirements. Agent-assisted commerce is creating market forces that finally prioritise universal design patterns.

We're finally fixing issues we should have fixed decades ago.

## The Solution: Small Changes, Big Impact

The good news: fixing this doesn't require rebuilding your interfaces or creating special agent-only experiences. It requires making implicit state explicit through small, well-understood changes.

### Four Patterns That Help Everyone

#### Pattern 1: Skip Links

A simple "Skip to main content" link at the top of pages helps keyboard users bypass repetitive navigation menus. The same link helps AI agents identify where the main content begins. One pattern, two audiences benefit.

#### Pattern 2: Persistent Error Messages

Instead of vanishing toast notifications, keep error messages visible until users fix them. This helps distracted humans, screen readers, and AI agents. Conversion rates improve for everyone.

#### Pattern 3: Semantic HTML Structure

Using proper HTML elements like `<main>`, `<nav>`, `<article>`, and `<header>` helps search engines rank pages better, screen readers navigate more effectively, and agents parse structure accurately. Developers find code easier to maintain. Multiple benefits from one improvement.

#### Pattern 4: Complete Pricing Up Front

Display the full price including VAT, delivery, and fees. No hidden costs revealed at checkout. This builds trust with humans, allows agents to extract accurate pricing, helps price comparison sites get correct data, and reduces support queries about unexpected charges.

These patterns are well-documented with specific implementation guidance in "The Invisible Users." The book provides technical depth - HTML examples, accessibility attributes, structured data formats - whilst keeping the business value clear.

## The Small Business Case

You don't need complex infrastructure. A simple restaurant site using proper HTML structure and basic Schema.org markup for menus and opening hours is completely agent-friendly. Minimal effort, maximum compatibility.

The book includes a complete guide to implementing these patterns regardless of your technical infrastructure.

## Timeline Acceleration: The Seven-Day Platform Race

January 5-11, 2026 saw three major platforms launch agent commerce features in one week:

- **Jan 5:** Amazon Alexa+ (browser agent launch)
- **Jan 8:** Microsoft expands Copilot Checkout
- **Jan 11:** Google Universal Commerce Protocol (UCP)

The timeline compressed from 12 months to 6-9 months. Agent commerce isn't experimental - it's infrastructure.

Sites that aren't agent-ready risk being quietly excluded from this new traffic channel.

## Quick Wins: Start Here

Five changes that deliver immediate value:

1. **Add skip links** - Benefits keyboard users and agents
2. **Make error messages persistent** - Helps everyone understand what went wrong
3. **Use semantic HTML structure** - Improves SEO, accessibility, and agent parsing
4. **Display complete pricing** - Builds trust, no hidden fees
5. **Add basic structured data** - Helps search engines and agents cite you correctly

Each change benefits multiple audiences simultaneously.

Start with the highest-impact, lowest-effort pattern for your site. Implement it. Measure the improvement. Tackle the next one. Sites that adapt early gain advantage. Sites that don't get quietly bypassed.

## Our Responsibility

As designers, developers, product owners, and executives, we have a professional obligation to ensure agents navigate successfully. This parallels accessibility, security, and user experience requirements.

When agents fail, that's a design gap affecting everyone. Agent failures expose problems that affect humans too.

Universal design patterns benefit keyboard users, screen readers, and agents. Accessibility work now has commercial pressure behind it. Perhaps that's what it takes to finally prioritise inclusive design.

## What Comes Next

Two open protocols launched simultaneously:

- **Agentic Commerce Protocol (ACP):** OpenAI/Stripe (September 2024), 1M+ merchants
- **Universal Commerce Protocol (UCP):** Google (January 2026), 20+ major retailers

Beyond fixing websites, there's a critical infrastructure gap: identity delegation. Every major platform is building proprietary identity systems. Users face lock-in. Agent creators face fragmentation. Businesses face complexity managing multiple authentication methods.

The question: Will protocols converge into interoperable standards, or fragment the ecosystem into walled gardens?

The book explores these emerging patterns and what they mean for businesses making platform decisions today.

## Key Takeaways

1. **This is happening now** - AI agent commerce is infrastructure, not experiment
2. **Commercial pressure exists** - Sites that work get preferred, sites that don't get avoided
3. **Solutions are accessible** - Small changes deliver big impact across multiple audiences
4. **Universal benefit** - Patterns that help agents also help humans with disabilities
5. **Start with quick wins** - Pick one pattern, implement, measure, iterate

---

## About the Book

**The Invisible Users: Designing the Web for AI Agents and Everyone Else**
Due Q1 2026

The book explores how modern web design optimised for human users fails for AI agents, and how fixing this benefits everyone through universal design patterns.

**Technical depth without jargon:** The book provides specific implementation guidance - HTML patterns, accessibility attributes, structured data examples, validation frameworks - whilst maintaining clear business context. Whether you're implementing changes yourself or directing a technical team, you'll understand what needs doing and why it matters.

**Real-world examples:** Every pattern comes from production systems. Real mistakes, real fixes, real business impact.

## Contact & Resources

**Tom Cranstoun**
<tom.cranstoun@gmail.com>
<https://allabout.network>

**LinkedIn:** <https://www.linkedin.com/in/tom-cranstoun/>

**Project Pages:**

- Book: <https://allabout.network/invisible-users>
- Latest news: <https://allabout.network/invisible-users/news.html>

---

**Questions? Discussion? Your specific challenges?** Reach out via email or LinkedIn. I'm particularly interested in hearing about production agent failures you've encountered.

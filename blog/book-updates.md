# Book Updates: January 2025

## New Online Appendix Tracking Industry Developments

All appendices are now published separately online at <https://allabout.network/invisible-users/web/> to ensure they remain current as this fast-moving field evolves.

Appendix J tracks major developments in AI agent-mediated commerce and browser automation. This appendix documents real-world implementations that validate (or challenge) the patterns discussed throughout the book.

**Why this matters:** The AI agent ecosystem is evolving rapidly. Rather than let the book become dated, Appendix J (published online) provides a living framework for tracking significant industry shifts whilst maintaining the book's focus on timeless principles.

## Two Major Developments Within Weeks

Between 20 December 2024 and January 2025, two major AI platforms launched agent systems that validate everything discussed in the book - and they did it whilst I was still writing.

### Claude for Chrome (20 December 2024)

Anthropic launched Claude for Chrome, a browser extension available to all paid subscribers. Not a research prototype. Not a limited beta. A production tool that millions of people can install right now.

**What makes this particularly significant:** I used Claude for Chrome whilst writing the book's case studies. The tool demonstrates the exact patterns and challenges discussed throughout the manuscript - because it encounters them in production, right now.

**Key capabilities:**

- Complete browser automation through natural conversation
- Form filling, data extraction, multi-step workflows
- Multi-tab coordination
- Workflow recording (demonstrate once, Claude learns it)
- Scheduled recurring tasks
- Claude Code integration for build-test-fix loops

**What this validates:**

- **Chapter 2 (The Invisible Failure):** Claude for Chrome encounters all five failure patterns when sites don't follow agent-friendly design principles
- **Chapter 6 (The Security Maze):** Session inheritance is now production reality - Claude inherits your authenticated session, making traditional bot detection useless
- **Chapter 10 (Technical Advice):** Demonstrates the "rendered HTML" agent type that executes JavaScript and sees dynamic updates
- **Chapter 11 (Agent Creator Responsibilities):** Anthropic's safety controls demonstrate production-grade validation patterns

**What this challenges:**

The book discusses agent detection as a potential mitigation strategy. Claude for Chrome makes detection extremely difficult - it operates in a real browser, inherits human authentication, and uses the same UI interaction patterns as humans.

### Microsoft Copilot Checkout (January 2025)

Microsoft announced Copilot Checkout - complete purchase transactions within the AI assistant. Not product research. Not price comparison. Full checkout - payment processed, order confirmed.

**Partner retailers:** Urban Outfitters, Anthropologie, Etsy, Shopify stores

Microsoft reports improved conversion rates, though these claims have not been independently validated.

**What this validates:**

- **Chapter 4 (The Business Reality):** Transaction-based businesses may benefit from agent traffic when implementing compatible patterns
- **Chapter 9 (Designing for Both):** Partner retailers provide structured data, explicit state indicators, and clear transaction feedback
- **Chapter 4 (Identity Delegation):** Microsoft's implementation preserves customer identity, solving the customer relationship problem

**What this challenges:**

I assumed identity delegation would require industrywide standards negotiation. Microsoft built a proprietary solution and launched. Platform-specific implementations are emerging before standards consolidate.

## Updated Chapters

I've updated three chapters with references to these developments:

**Chapter 4 (The Business Reality):** Added "Real-World Validation: Microsoft Copilot Checkout" subsection after the e-commerce section. The concrete metrics validate the transaction-based benefit thesis with production data.

**Chapter 9 (Designing for Both):** Added production validation paragraph showing that the convergence patterns work in production with measurable results.

**Chapter 10 (Technical Advice):** Added real-world context introduction referencing both launches to demonstrate these patterns aren't theoretical.

## Timeline Acceleration

I suggested businesses had "two years" before agent traffic became significant. Both launches within weeks compress this timeline dramatically.

Claude for Chrome is available to millions of paid subscribers today. Copilot Checkout is processing real transactions with measurable conversion improvements today.

The window to act is smaller than I projected.

## What This Means for Readers

### If You're in E-Commerce

Test your site with multiple agent platforms immediately:

**Claude for Chrome:**
1. Install the extension (available to all paid Claude subscribers)
2. Instruct Claude to complete a purchase on your site
3. Observe where it fails

**Amazon Alexa+ and Microsoft Copilot:**
- Test checkout flow through Alexa.com (if you have Early Access)
- Verify compatibility with Microsoft Copilot Checkout (if partnered)

**Critical reality:** You cannot assume your site works for "AI agents" in general. Major platforms (Microsoft, Amazon verified; Google, Apple expected) are building proprietary systems with different identity delegation, different capabilities, and different failure modes. Each integration creates lock-in for your customers and dependency for your business.

Those failures are costing you both human and AI-mediated conversions right now. Microsoft reports improved conversion rates for partner retailers implementing agent-compatible patterns. Non-optimised sites are excluded from these high-conversion transactions across multiple platforms.

### If You're a Content Publisher

Claude for Chrome can extract your content without generating ad impressions. Microsoft's reported increase in AI-driven retail traffic (though unvalidated) suggests similar growth patterns may emerge for content consumption.

### If You're Building Agent Systems

Claude for Chrome demonstrates production-grade validation patterns:

- Planning mode review
- Pre-approval for actions
- Confirmation for irreversible operations
- Prompt injection defences
- Admin controls for enterprise deployment

Study Anthropic's implementation as a reference.

### If You're Concerned About Security

Session inheritance is now a production reality. Your authentication systems cannot distinguish between human activity and AI activity based on session tokens alone.

The security patterns in Chapter 6 are no longer theoretical recommendations. They're urgent production requirements.

## The New Appendix Structure

Appendix J organises developments chronologically within thematic categories:

- Browser-Based Agent Tools
- Retail and Commerce Agents
- Platform Integration Developments
- Standards and Protocol Announcements
- Business Model Innovations
- Security and Identity Solutions

Each entry includes:

- Overview and key details
- Statistical impact (concrete metrics)
- Technical implementation insights
- Business model implications
- What this validates from the book
- What this challenges or changes
- Architectural insights for implementers
- Questions raised for the ecosystem
- Strategic implications by audience
- Cross-references to relevant chapters
- Sources for verification

## Why a Living Appendix?

The book's core content focuses on timeless principles: explicit state, semantic structure, persistent feedback, universal patterns. These don't change with each new product launch.

But the ecosystem is evolving rapidly. Appendix J lets me track significant developments without rewriting the core content. It shows readers:

- How real-world implementations validate (or challenge) the patterns
- What Microsoft claims (though unvalidated by independent research)
- What questions remain open (identity delegation specifics, revenue sharing, competitive response)
- What strategic implications emerge for different audiences

## Future Updates

Appendix J will be updated as significant developments emerge. Future entries might include:

- Google Shopping's response to Copilot Checkout
- ChatGPT browser automation features
- Standardisation efforts for agent identification
- Identity delegation protocol announcements
- New agent-mediated commerce platforms

The framework is established. Each new development gets analysed through the same template: what validates the book's patterns, what challenges assumptions, what architectural insights emerge, what strategic implications matter.

## Read the Updated Book

The updates are available now in the manuscript. If you've already read the book:

- Check **Appendix J** (online at <https://allabout.network/invisible-users/web/appendix-j.html>) for complete analysis of both launches
- Review **Appendix F (Implementation Roadmap)** (online at <https://allabout.network/invisible-users/web/appendix-f.html>) with new urgency - timeline acceleration makes Priority 1-2 tasks urgent
- Consider whether your Agent Exposure Assessment needs updating
- Test your site with Claude for Chrome immediately

If you haven't read the book yet:

- **Chapter 1** explains why this matters
- **Chapter 2** shows the five failure patterns Claude for Chrome encounters
- **Chapter 4** covers business implications validated by Copilot Checkout
- **Chapter 6** discusses security concerns now demonstrated in production
- **Chapters 9-10** provide implementation patterns both launches depend on
- **Appendix J** connects current events to timeless principles

## The Bigger Picture

These two launches within weeks demonstrate something fundamental: agent-mediated web interaction isn't coming. It's here.

Browser automation is available to millions of paid subscribers. Commerce integration is processing real transactions with measurable business impact. Session inheritance makes traditional security assumptions obsolete. Platform power is shifting from search engines to AI companies.

The patterns described in "The Invisible Users" are no longer theoretical. They're production-tested, revenue-generating, and competitively differentiating.

## What Makes This Book Different

Most technical books age quickly because they focus on specific tools or implementations. "The Invisible Users" focuses on principles that remain valid regardless of which platforms launch or which companies dominate.

But it also tracks how those principles play out in reality. Appendix J bridges the gap between timeless patterns and current events.

When Google Shopping launches their competing agent commerce platform, Appendix J will document it. When standardisation efforts for agent identification emerge, Appendix J will track them. When new security vulnerabilities get discovered, Appendix J will analyse them.

The core content remains stable. The appendix stays current.

## A Note on Timing

I started writing this book in 2024, projecting that businesses had "two years" before agent traffic became significant. I was documenting future patterns, providing early guidance before the ecosystem matured.

Then Claude for Chrome launched whilst I was writing the case studies. Then Copilot Checkout launched with concrete conversion metrics. The future I was documenting arrived faster than expected.

This accelerated timeline validates the book's urgency whilst challenging some assumptions about pace. The patterns are correct. The business implications are real. But the window to act is smaller than I projected.

## Platform Shifts Accelerate: Amazon and Microsoft Enter Agent Commerce (January 2026)

The first week of January 2026 saw two major developments that validate the platform power dynamics discussed in Chapter 4. Within 72 hours, Amazon launched a browser-based shopping agent and Microsoft expanded Copilot Checkout with new retail partners. Both demonstrate the competitive intensity emerging in agent-mediated commerce.

### Amazon Alexa+ Reaches the Web (5 January 2026)

Amazon launched Alexa.com during CES 2026, bringing Alexa+ to web browsers for the first time. This isn't just voice commands on a new platform - it's Amazon entering direct competition with ChatGPT, Gemini, and Claude in the browser-based agent space.

**Key capabilities:**

- Research, writing, and planning tasks (competing with general-purpose chatbots)
- Agentic integrations with Expedia, Yelp, Angi, Square, Uber, and OpenTable
- Shopping functionality with transaction capabilities
- Available through any browser to Alexa+ Early Access users

**The shopping statistics matter:**

Amazon reports users are engaging with Alexa+ at dramatically different rates compared to legacy Alexa:

- 2x as many conversations per user
- 3x the purchases
- 5x the recipe requests

These aren't company-reported projections - they're measured behavioural changes from users who have access to both versions.

### What This Validates

**Chapter 4 - Platform Power Shifts:**

The book predicted that AI companies would control distribution as agents mediate user decisions. Amazon's entry validates this thesis from a different angle - e-commerce platforms are becoming AI platforms to maintain control over shopping decisions.

When you ask Alexa+ "Find me a hotel in Edinburgh," Amazon controls which options you see. When you ask it to order coffee, Amazon determines fulfilment. The platform that controls the agent controls the transaction.

**Chapter 4 - Transaction-Based Benefits:**

The 3x increase in purchases validates the thesis that transaction-based businesses benefit when agents convert efficiently. Amazon wouldn't expand agentic shopping capabilities if conversion rates were declining.

### What This Challenges

**Competitive dynamics assumption:** The book discussed competition between OpenAI, Anthropic, and Google for agent platform dominance. Amazon's entry demonstrates that e-commerce giants aren't ceding this space - they're building their own agent platforms to maintain control over shopping behaviour.

**Timeline assumptions:** Browser-based shopping agents with real transaction capabilities are available to consumers now, not in "two years."

### Microsoft Copilot Checkout Expands (8 January 2026)

Three days after Amazon's announcement, Microsoft expanded Copilot Checkout with additional retail partners. This development extends the January 2025 launch already referenced in Chapters 4 and 9.

**What's new:**

- Additional retail partners joining (beyond Urban Outfitters, Anthropologie, Etsy)
- Shopify merchants auto-enrolled with opt-out window
- Retail AI agents for operations, product management, and personalised shopping
- Platform distribution now live with measurable retail partner adoption

**Unverified claims:** Industry newsletters report that "users are 2x more likely to purchase via Copilot than normal search" and "AI-driven retail traffic surged 7x this holiday season." These figures have not been independently validated and should be treated as indicative rather than definitive.

### Platform Competition Intensifies

Within one week:

- Amazon launched browser-based shopping agent (5 Jan)
- Microsoft expanded commerce platform (8 Jan)
- Both processing real transactions with measurable conversion improvements
- Both competing for retailer partnerships and consumer adoption

This validates Chapter 4's "Platform Power Shifts" section: businesses now face strategic decisions about which agent platforms to optimise for. Retailers who haven't implemented agent-friendly patterns are excluded from both platforms' high-conversion transactions.

### What This Means for Different Audiences

**For retailers and e-commerce businesses:**

Test your checkout flow with both Alexa+ and Copilot immediately. If agents cannot complete transactions on your site, you're excluded from platform distribution whilst competitors who've optimised are capturing the high-conversion agent traffic.

Priority 1-2 tasks from Appendix F (Implementation Roadmap) are no longer "nice to have" - they're competitive requirements for platform distribution.

**For content publishers and ad-funded businesses:**

Agent-mediated shopping validates that transaction-based businesses benefit from agent optimisation. This creates competitive pressure: retailers are motivated to optimise because conversion improves. Ad-funded businesses face the opposite incentive structure - agent traffic reduces engagement without alternative revenue.

The divergence predicted in Chapter 4 is now observable in production data.

**For business strategists:**

The Agent Exposure Assessment framework (Chapter 4) needs revisiting with updated timeline assumptions. If 10-20% of shopping behaviour becomes agent-mediated within 12 months (instead of 24), your strategic response timeline compresses accordingly.

**For platform businesses:**

Amazon and Microsoft demonstrate two approaches: Amazon built their own agent platform to maintain control over shopping behaviour, whilst Microsoft partnered with existing retailers through Copilot integration. Both strategies work, but they position companies differently in the emerging ecosystem.

### Sources and Verification

**Amazon Alexa.com launch:**

- [CNBC coverage](https://www.cnbc.com/2026/01/05/amazon-alexa-web-chatgpt.html)
- [TechRadar analysis](https://www.techradar.com/ai-platforms-assistants/alexa-launches-on-the-web-for-everyone-amazon-takes-on-chatgpt-heres-how-to-sign-up)
- [The Rundown AI](https://www.rundown.ai/articles/alexa-comes-for-chatgpts-web-turf)

**Microsoft Copilot Checkout expansion:**

- [Microsoft News announcement](https://news.microsoft.com/source/2026/01/08/microsoft-propels-retail-forward-with-agentic-ai-capabilities-that-power-intelligent-automation-for-every-retail-function/)
- [Microsoft Ads Blog](https://allabout.ads.microsoft.com/en/blog/post/january-2026/conversations-that-convert-copilot-checkout-and-brand-agents)
- [Engadget coverage](https://www.engadget.com/ai/microsoft-is-now-integrating-shopping-directly-into-copilot-181022989.html)

**Note on unverified statistics:** Claims about "2x purchase likelihood" and "7x AI-driven retail traffic" come from industry newsletters without independent validation. Treat as indicative trends rather than verified metrics.

---

## Final Thought

The AI agent ecosystem is moving fast. The book provides principles that remain valid. Appendix J tracks how those principles manifest in production.

If you're building websites, the patterns in Chapters 9-10 are what Microsoft's partner retailers implemented. If you're building agent systems, the validation layers in Chapter 11 are what Anthropic deployed in Claude for Chrome. If you're making business decisions, the exposure assessment in Chapter 4 needs revisiting given timeline acceleration.

The book remains relevant because it focuses on principles, not products. But it's more urgent than I expected when I started writing.

Are you ready?

---

## About the Book

### The Invisible Users: Designing the Web for AI Agents and Everyone Else

- 11 chapters covering technical, business, ethical, and human implications
- ~57,000 words core manuscript + 10 appendices published online
- Working code examples you can implement immediately
- All 10 appendices published online at <https://allabout.network/invisible-users/web/> including industry developments tracking
- Available now

**Contact:** <tom.cranstoun@gmail.com>

**Website:** <https://allabout.network>

---

**Updated:** 9 January 2026

**Appendix J updated:** Added Amazon Alexa.com (5 Jan 2026) and expanded Microsoft Copilot Checkout coverage (8 Jan 2026)

**Chapters referenced:** Amazon validates Chapter 4 platform power predictions; Microsoft expands Jan 2025 coverage in Chapters 4 & 9

# Preface

I didn't set out to write a book about AI agents. I set out to book a holiday.

It was late 2024, and I was comparing tour operators for a trip through Southeast Asia. I'd delegated the research to an AI assistant, expecting it to save me hours of clicking through brochures. Instead, it gave me confident but wrong advice about which company had the better itinerary.

The agent had looked at one tour operator's paginated day-by-day breakdown for a 14-day tour, seen only Day 1, and concluded that was the entire trip. The competitor's single-page itinerary was readable in full. Based on this, my assistant recommended the wrong company.

I caught the error, and that led me down a path I hadn't anticipated. I started examining why the agent had failed, and found a pattern. The same design choices that confused my AI assistant also confused screen reader users, people with cognitive disabilities, and anyone who processed pages sequentially rather than spatially. (Chapter 1 explores this accessibility connection in depth, with examples that made the pattern clear to me.)

We'd built a web that worked brilliantly for one specific type of user: someone with good vision, working on a desktop, with focused attention and plenty of time. Everyone else had been struggling quietly for years. Now AI agents were struggling loudly, and there was finally commercial pressure to fix the problems.

That pressure intensified dramatically whilst writing this book. In September 2024, OpenAI and Stripe launched the Agentic Commerce Protocol - an open standard enabling ChatGPT and Claude to complete purchases through 1 million merchants. Then in January 2026, Google announced the Universal Commerce Protocol with backing from Target, Walmart, and 20+ major retailers. Within seven days, three major platforms launched competing agent commerce systems. The fragmentation creates new commercial urgency: businesses must support multiple protocols, adoption timelines have compressed from 12 months to 6-9 months, and merchants risk competitive disadvantage by delaying. Yet the underlying patterns remain universal - semantic HTML, explicit state management, and structured data work regardless of which protocol wins.

Since I began this research, the landscape has shifted dramatically, with production AI agent systems now processing real transactions and working alongside users in their browsers.

This book grew from that realisation. It's not a book about AI. It's a book about web design, and the assumptions we've embedded into it. AI agents are the lens, but the subject is broader: how do we build digital spaces that work for users we didn't anticipate?

**The irony continued whilst writing this book.** When building the book's own website to demonstrate AI-friendly patterns, I initially used `opacity: 0.9` on header text for visual subtlety. AI agents and screen readers read it perfectly—they parse HTML structure directly and ignore CSS styling. But the low contrast failed WCAG accessibility standards for sighted humans. I'd built an AI-friendly interface that excluded people with low vision, exactly the pattern the book warns against.

The fix was simple: replace opacity with explicit colours that meet contrast ratios. The lesson was profound: visual design problems and structural problems are separate. AI agents need explicit state and semantic markup. Humans need adequate contrast and readable text. Both matter. Neither is optional. We can't optimise for one group whilst neglecting another.

This example now appears in Chapter 8 and Appendix D as a teaching case. It's the kind of real-world learning through failure that makes patterns stick.

---

## What This Book Is

This is a practical guide and a thinking framework. Each chapter addresses a specific aspect of the collision between agent capabilities and web design conventions, from technical failures to business model tensions to legal uncertainties.

**This is a theory book, not a research study.** The field of AI agent interaction with websites is too new for comprehensive empirical research. You won't find citations to academic papers proving the patterns I describe, because those papers don't exist yet. What you will find is a structured way to think about emerging problems and evaluate potential responses.

**The figures and examples are illustrative, not validated.** When I write "if agent traffic reaches 30% of visits with minimal ad revenue, a site could see revenue decline by roughly one-third," that's a logical calculation, not a proven outcome. I've avoided false precision - you'll see ranges and qualified language rather than specific percentages presented as facts.

**This book offers frameworks for decision-making, not proven solutions.** The patterns that appear to work for agent compatibility also align with accessibility best practices, which gives us confidence. But we don't yet know which approaches will become standard, which will evolve, and which will be superseded by better alternatives.

The book follows a structured progression from problem to solution:

**Foundations (Chapters 1-3)**: What's breaking and why - the essential context for understanding solutions

**Implications (Chapters 4-8)**: Business models, content economics, security, legal landscape, and human costs - the pressures that shape our choices

**Solutions (Chapters 9-11)**: Strategic frameworks, working code, and agent creator guidance

For detailed chapter-by-chapter descriptions, see Chapter 1. For reading paths tailored to your role, see the navigation guide below.

Throughout, I've tried to be honest about tensions that don't have clean resolutions. Some fixes for agent compatibility conflict with short-term business interests. Some accessibility improvements reduce engagement metrics. Some solutions create new problems. I've flagged these rather than pretending they don't exist.

---

## What This Book Isn't

This isn't speculation about a distant future. Agent traffic is real, growing, and affecting conversion rates right now. Most site owners don't know it's happening.

This isn't comprehensive coverage of AI capabilities. I've focused on the web interface patterns that matter, not the broader landscape of what AI can do.

This isn't a manifesto. There are genuine disagreements about how to handle agent access, and I've tried to present competing perspectives rather than advocating a single position on all matters.

---

## Who This Book Is For

This book is written for four distinct audiences, each of whom holds a piece of the solution:

**1. Web Professionals & Engineers**
Developers, architects, and product owners who build the web. You are the text's primary audience. You'll find technical patterns, code examples, and architectural discussions that explain exactly how to build agent-compatible interfaces. The [Web Audit Suite](../web-audit-suite/) is available as a separate purchase or professional audit service.

**2. Agent System Developers**
Developers building AI agents, browser extensions, and agentic systems that interact with websites. Chapter 12 is written specifically for you. You'll find validation frameworks, confidence scoring patterns, and guardrails that prevent pipeline failures like the £203,000 cruise pricing error. Your agents need robust data quality controls.

**3. Business Leaders & Decision Makers**
CTOs, CMOs, and executives who need to understand the strategic shift. You don't need to write the code, but you do need to understand why "silent conversion failures" are happening and how to resource the fix. Chapters 4, 5, and 9 are written specifically for you.

**4. Partners & Investors**
Agencies looking to offer new services and investors evaluating the next phase of web evolution. The methodology described here creates a new category of professional services—audit, remediation, and certification—that will likely dominate web development discussions for the next decade.

---

## Acknowledgements

This book exists because problems became visible when I looked closely at failures I'd typically have ignored. I'm grateful to everyone who has written about web accessibility over the past two decades; their work laid the foundations on which this analysis builds.

Thank you to the colleagues, clients, and collaborators who reviewed early drafts and asked uncomfortable questions. Several sections exist because someone said "but what about..." and I realised I hadn't thought it through.

I've worked on the web since its early days. Every project taught me something about what users actually do versus what we assume they'll do. Those lessons appear throughout this book, even when I can't trace them to specific sources.

---

## How to Use This Book

The chapters build sequentially, with each building on concepts introduced earlier. For reading paths tailored to your role and time constraints, see the Reading Guide.

---

## About the Author

Tom Cranstoun has worked on web technology since the early days of the commercial internet. Over three decades, he's seen the web evolve from hand-coded HTML pages to the sophisticated application platforms we rely on today.

His career spans technical implementation, strategic consulting, and the difficult work of translating between what engineers can build and what businesses need. He's worked with organisations ranging from startups to enterprises, across sectors including finance, media, and retail.

This book grew from patterns he noticed across projects: the same accessibility problems appearing in different contexts, the same design assumptions failing for unexpected user types, the same commercial pressures shaping what gets fixed and what gets ignored.

Tom writes for allabout.network and is on LinkedIn. He's based in the UK and works with organisations internationally.

He remains convinced that the web we've built is less accessible than it should be, and that AI agents - demanding clarity for their own reasons - might finally force us to fix it.

---

January 2026

York, England

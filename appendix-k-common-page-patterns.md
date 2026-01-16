# Appendix K: Common Page Patterns

Production-ready HTML templates demonstrating AI-friendly patterns for common page types.

## Introduction: Building Pages That Work for Everyone

Modern websites follow recognisable patterns. Home pages welcome visitors. About pages explain who you are. Contact pages provide ways to reach you. Product pages sell items. Blog posts share insights.

These familiar structures create an opportunity: when you implement them correctly once, with AI-friendly patterns built in from the start, every page benefits both humans and agents.

This appendix provides complete, production-ready HTML for twenty common page types. Each example demonstrates:

- **Semantic HTML structure** — Using `<main>`, `<nav>`, `<article>`, `<section>` to convey meaning
- **Schema.org JSON-LD** — Machine-readable structured data specific to the page type
- **Explicit state attributes** — Making page state and data visible in the DOM
- **AI meta tags** — Guiding agent behaviour with proposed patterns
- **Accessible markup** — ARIA attributes and WCAG-compliant structure
- **Real content** — Not lorem ipsum, but actual marketing copy demonstrating tone and structure

### The Common Skeleton

All examples share the same foundational structure:

**Document structure:**

- HTML5 DOCTYPE with British English (`lang="en-GB"`)
- Character encoding and viewport meta tags
- Author and description metadata
- AI-specific meta tags (proposed pattern from Chapter 13)
- Appropriate Schema.org JSON-LD for the page type

**CSS approach:**

All examples use external stylesheets for professional code organization. The common styles (`css/styles.css`) provide:

- Consistent colour palette (blue gradients for headers, neutral greys for text)
- WCAG AA contrast compliance (4.5:1 minimum for normal text)
- Responsive design with mobile breakpoints
- Professional typography using system font stack
- Shared components (cards, buttons, grids, sections)

This demonstrates production-ready architecture with:

- Single source of truth for styles across all pages
- Browser caching of CSS files for performance
- Maintainable codebase with centralized styling
- Proper separation of content, presentation, and behavior

**JavaScript organization:**

Common functionality is extracted to `js/common.js`, demonstrating:

- Shared event handlers (smooth scroll to top)
- Page load state management for AI agents
- Floating navigation button initialization
- Clean HTML without inline onclick handlers

**Navigation pattern:**

- Floating "Home" button (top-left) for easy navigation
- Floating "Back to Top" button (bottom-left) for long pages
- Event-driven interaction handled by common.js
- Both buttons meet WCAG AA contrast requirements
- Smooth scroll behaviour on modern browsers

**Footer structure:**

- Contact links (email, website, LinkedIn, GitHub)
- Copyright notice
- Last updated date
- Semantic `role="contentinfo"` for accessibility

### Using These Templates

**Copy and adapt:**

These are starting points, not rigid specifications. The HTML demonstrates production-ready code organization with external CSS and JavaScript. To use them:

1. Copy the HTML file for your page type
2. Ensure `css/styles.css` and `js/common.js` are in place
3. Replace the content with your own
4. Adjust styles in `styles.css` to match your brand
5. Deploy all three files together

**Maintain the patterns:**

The examples demonstrate specific AI-friendly patterns. When adapting them:

- Keep Schema.org JSON-LD (update the content, not the structure)
- Add critical Schema.org properties: datePublished, dateModified, image, breadcrumb
- Preserve data attributes (data-state, data-product-id, etc.)
- Maintain semantic HTML elements
- Update AI meta tags to reflect your content policy
- Keep external CSS/JS references for maintainability

**Extend thoughtfully:**

Need a feature not shown here? Refer to Appendix D (AI-Friendly HTML Guide) for additional patterns. Want to see these patterns in action? View the source of any page at <https://allabout.network/invisible-users/web/>.

**Professional architecture:**

The refactored structure demonstrates:

- **Separation of concerns:** HTML (content), CSS (presentation), JavaScript (behavior)
- **Maintainability:** Change styles once in `styles.css`, affect all pages
- **Performance:** Browser caches CSS/JS files, reducing bandwidth
- **Scalability:** Add new pages easily by referencing shared resources

---

## 1. Home Page: The Digital Storefront

The home page is your digital storefront. It must immediately communicate what you offer, who you serve, and why visitors should care. For AI agents, it needs clear schema, navigation structure, and value proposition data.

**AI-friendly patterns demonstrated:**

- WebSite schema with searchAction for site search integration
- Organization schema with contact information
- Navigation with explicit data-nav-type attributes
- Clear value propositions with data-benefit attributes
- Call-to-action links with descriptive text

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="The Invisible Users - A practical guide to designing websites that work for AI agents and everyone else. Learn AI-friendly patterns, accessibility best practices, and future-proof implementation strategies.">

  <!-- AI-specific meta tags (proposed pattern from Chapter 13) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>The Invisible Users | Designing the Web for AI Agents and Everyone Else</title>

  <!-- Schema.org structured data for home page -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Invisible Users",
    "alternateName": "Designing the Web for AI Agents and Everyone Else",
    "description": "A practical guide to designing websites that work for AI agents and everyone else",
    "url": "https://allabout.network/invisible-users",
    "image": "https://allabout.network/images/invisible-users-site.jpg",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "inLanguage": "en-GB",
    "keywords": "AI agents, web design, accessibility, semantic HTML, Schema.org, structured data, agent-friendly patterns",
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network",
      "image": "https://allabout.network/images/tom-cranstoun.jpg",
      "sameAs": [
        "https://www.linkedin.com/in/tom-cranstoun/",
        "https://github.com/Digital-Domain-Technologies-Ltd"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Domain Technologies Ltd",
      "url": "https://allabout.network"
    },
    "mainEntity": {
      "@type": "Book",
      "name": "The Invisible Users",
      "bookFormat": "https://schema.org/EBook",
      "inLanguage": "en-GB",
      "numberOfPages": "TBD",
      "author": {
        "@type": "Person",
        "name": "Tom Cranstoun"
      },
      "datePublished": "2026-Q1"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://allabout.network/invisible-users/web/search.html?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>The Invisible Users</h1>
    <p>Designing the Web for AI Agents and Everyone Else</p>
    <div class="hero-buttons">
      <a href="appendix-index.html" class="btn">View Appendices</a>
      <a href="#about" class="btn btn-secondary">Learn More</a>
    </div>
  </header>

  <main class="container" role="main" data-load-state="complete">

    <section id="about" data-section-type="introduction">
      <h2 style="font-size: 2.5rem; color: #1e40af; margin-bottom: 1.5rem; text-align: center;">A Practical Guide to the Collision Between Modern Web Design and AI Agents</h2>
      <p style="font-size: 1.25rem; color: #4b5563; text-align: center; max-width: 900px; margin: 0 auto 3rem;">
        Modern web design optimised for human users often fails for AI agents. Toast notifications vanish before agents can process them. Pagination hides content. Single-page applications obscure state changes. This book examines why these patterns break agents — and shows how fixing them benefits everyone.
      </p>
    </section>

    <div class="features">
      <article class="feature-card" data-benefit="practical-guidance">
        <h3>Production-Ready Patterns</h3>
        <p>Not theoretical frameworks, but battle-tested implementation guidance:</p>
        <ul>
          <li>Semantic HTML that works for all agents</li>
          <li>Explicit state management patterns</li>
          <li>Schema.org structured data examples</li>
          <li>Form validation that agents can parse</li>
          <li>Complete code examples you can deploy today</li>
        </ul>
      </article>

      <article class="feature-card" data-benefit="universal-compatibility">
        <h3>Universal Compatibility</h3>
        <p>Patterns that work across diverse agent architectures:</p>
        <ul>
          <li>CLI agents (command-line tools)</li>
          <li>Browser automation agents (Playwright, Selenium)</li>
          <li>Server-based agents (cloud-hosted)</li>
          <li>Browser extension assistants</li>
          <li>IDE-integrated browser controls</li>
        </ul>
      </article>

      <article class="feature-card" data-benefit="human-benefits">
        <h3>Benefits for Humans</h3>
        <p>The patterns that help AI agents also improve human experiences:</p>
        <ul>
          <li>Persistent error messages (no vanishing toasts)</li>
          <li>Clear navigation structure</li>
          <li>Semantic HTML aids screen readers</li>
          <li>Explicit state reduces confusion</li>
          <li>Honest pricing and complete information</li>
        </ul>
      </article>
    </div>

    <section class="audience-section">
      <h2>Who This Book Serves</h2>
      <div class="audience-grid">
        <article class="audience-card" data-audience="developers">
          <h3>Web Professionals</h3>
          <p>Developers, designers, and accessibility specialists looking to future-proof their websites with patterns that work for both humans and AI agents.</p>
        </article>

        <article class="audience-card" data-audience="agent-builders">
          <h3>Agent System Developers</h3>
          <p>Engineers building AI agents that need to browse websites reliably. Chapter 13 provides validation frameworks and confidence scoring patterns.</p>
        </article>

        <article class="audience-card" data-audience="business-leaders">
          <h3>Business Leaders</h3>
          <p>CTOs and product owners making strategic decisions about agent-mediated commerce and the commercial impact of AI agents on digital business.</p>
        </article>

        <article class="audience-card" data-audience="investors">
          <h3>Partners & Investors</h3>
          <p>Agencies and investors evaluating opportunities in the emerging agent economy and understanding the commercial potential of this new market category.</p>
        </article>
      </div>
    </section>

    <section data-section-type="key-themes" style="margin: 4rem 0;">
      <h2 style="font-size: 2rem; color: #1e40af; margin-bottom: 2rem;">Key Themes</h2>

      <article style="margin-bottom: 3rem;">
        <h3 style="font-size: 1.5rem; color: #1f2937; margin-bottom: 1rem;">Agent Diversity and Universal Patterns</h3>
        <p style="color: #4b5563; margin-bottom: 1rem;">
          The book addresses a diverse ecosystem of AI agents — from lightweight CLI tools to full browser automation systems. Rather than optimising for specific agent types, it focuses on universal compatibility patterns: semantic HTML that works regardless of JavaScript execution, explicit state attributes visible in the DOM for any parser, and structured data that's machine-readable across all architectures.
        </p>
      </article>

      <article style="margin-bottom: 3rem;">
        <h3 style="font-size: 1.5rem; color: #1f2937; margin-bottom: 1rem;">Identity Delegation</h3>
        <p style="color: #4b5563; margin-bottom: 1rem;">
          When AI agents transact on behalf of customers, the business-customer relationship breaks down. The book discusses identity delegation patterns as one emerging solution, acknowledging multiple approaches without prescribing a specific implementation. The Universal Identity Delegation Infrastructure project is introduced as an open-source initiative addressing this challenge.
        </p>
      </article>

      <article style="margin-bottom: 3rem;">
        <h3 style="font-size: 1.5rem; color: #1f2937; margin-bottom: 1rem;">Session Inheritance Problem</h3>
        <p style="color: #4b5563; margin-bottom: 1rem;">
          A critical security insight explored in Chapter 6: in-browser agents inherit authenticated sessions rather than failing to authenticate. Banks cannot detect AI involvement because agents inherit proof-of-humanity tokens from the user's existing session. This has profound implications for security architecture.
        </p>
      </article>
    </section>

    <section class="cta-section">
      <h2>Ready to Build Better Websites?</h2>
      <p>Start with the free appendices, explore the patterns, and transform your websites to work for everyone.</p>
      <div class="hero-buttons">
        <a href="appendix-index.html" class="btn" style="background: white; color: #2563eb;">View All Appendices</a>
        <a href="mailto:tom.cranstoun@gmail.com?subject=Question about The Invisible Users" class="btn" style="background: #1e40af; color: white;">Contact the Author</a>
      </div>
    </section>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
    <p>Last updated: January 2026</p>
  </footer>

  <!-- Floating home button (top-left) -->
  <a href="index.html" class="floating-home-button" aria-label="Back to Home">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0L0 8h3v8h10V8h3L8 0zm0 2.5L13.5 8H11v6H5V8H2.5L8 2.5z"/>
    </svg>
    Home
  </a>

  <!-- Floating back to top button (bottom-left) -->
  <a href="#" class="floating-top-button" aria-label="Back to Top">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 3.5l-5.5 5.5L4 10.5l3-3v8.5h2V7.5l3 3L13.5 9z"/>
    </svg>
    Top
  </a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 2. About Page: Project Background and Mission

The about page explains who you are, what you do, and why it matters. For AI agents, it needs Organization or Person schema with clear contact information and project description.

**AI-friendly patterns demonstrated:**

- Person schema with professional credentials
- Clear mission statement with data-purpose attribute
- Project history with temporal structure
- Contact information with explicit links

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="About The Invisible Users project - the author's journey from discovering AI agent compatibility challenges to creating practical implementation guidance for web professionals worldwide.">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>About | The Invisible Users</title>

  <!-- Schema.org structured data for about page -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Invisible Users",
    "description": "The story behind The Invisible Users book and project",
    "url": "https://allabout.network/invisible-users/web/about.html",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "inLanguage": "en-GB",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/about.html"
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network",
      "image": "https://allabout.network/images/tom-cranstoun.jpg",
      "sameAs": [
        "https://www.linkedin.com/in/tom-cranstoun/",
        "https://github.com/Digital-Domain-Technologies-Ltd"
      ],
      "jobTitle": "Software Consultant, Author",
      "worksFor": {
        "@type": "Organization",
        "name": "Digital Domain Technologies Ltd",
        "url": "https://allabout.network"
      },
      "alumniOf": "Various technology companies",
      "knowsAbout": [
        "Web Development",
        "AI Agent Compatibility",
        "Accessibility",
        "Software Architecture",
        "Identity Delegation"
      ]
    },
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://allabout.network/invisible-users/web/about.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>About This Project</h1>
    <p>The story behind The Invisible Users</p>
  </header>

  <main class="container about-content" role="main" data-load-state="complete">

    <section data-section-type="mission" data-purpose="project-overview">
      <h2>The Mission</h2>
      <p>
        Modern web design optimised for human users often fails for AI agents. This book examines why these patterns break agents — and demonstrates how fixing them benefits everyone. It's not about choosing between humans and AI; it's about building clearer, more accessible interfaces that serve both.
      </p>
      <p>
        The patterns that break AI agents also break humans. Toast notifications that vanish before anyone can read them. Pagination that hides content arbitrarily. Single-page applications with invisible state changes. These have been creating accessibility problems for years. Now AI agents are struggling with the same patterns, and there's commercial pressure to fix them.
      </p>
    </section>

    <section data-section-type="author-background">
      <h2>The Author's Journey</h2>
      <p>
        Tom Cranstoun is a software consultant who has spent decades building web systems. Whilst working on identity delegation infrastructure, he noticed a recurring pattern: modern websites were beautifully designed for human users but completely opaque to AI agents trying to act on users' behalf.
      </p>
      <p>
        What started as debugging frustration evolved into systematic research. Every pattern that broke agents turned out to be a pattern that also degraded human accessibility. Forms that validated only on submission. Error messages that disappeared after three seconds. Authentication states visible only through CSS styling. Visual-only feedback with no semantic markup.
      </p>
      <p>
        This book distils those learnings into practical guidance. Not theoretical frameworks, but production-ready patterns you can implement today.
      </p>
    </section>

    <div class="highlight-box" data-content-type="key-insight">
      <h3>Why This Matters Now</h3>
      <p>
        AI agents are no longer research projects. They're production systems making real purchases, booking actual appointments, and conducting business on behalf of users. When websites aren't designed for agent compatibility, agents fail — and users lose access to services.
      </p>
      <p>
        The commercial pressure to support agents creates an opportunity to fix accessibility problems that have existed for years. Better patterns for agents mean better experiences for everyone.
      </p>
    </div>

    <section data-section-type="project-scope">
      <h2>What This Project Includes</h2>
      <p>The Invisible Users is more than a book. It's an integrated set of resources:</p>
      <ul>
        <li><strong>The Book</strong> — 11 chapters (~57,000 words) examining the collision between modern web design and AI agents</li>
        <li><strong>10 Appendices</strong> — Freely accessible online with implementation cookbooks, battle-tested lessons, and real-world case studies</li>
        <li><strong>Web Audit Suite</strong> — A comprehensive Node.js tool implementing the patterns described in the book (available as separate purchase or professional service)</li>
        <li><strong>Code Examples</strong> — Production-ready implementations demonstrating AI-friendly patterns</li>
        <li><strong>Identity Delegation Project</strong> — Open-source infrastructure for portable agent authorisations</li>
      </ul>
    </section>

    <section data-section-type="standards-approach">
      <h2>Standards-Based Approach</h2>
      <p>This book carefully distinguishes between established standards and proposed patterns:</p>
      <ul>
        <li><strong>Established Standards</strong> — Schema.org, semantic HTML, ARIA (use with confidence)</li>
        <li><strong>Emerging Conventions</strong> — llms.txt from llmstxt.org (early adoption phase)</li>
        <li><strong>Proposed Patterns</strong> — ai-* meta tags, data-agent-visible (experimental, forward-compatible)</li>
      </ul>
      <p>
        All proposed patterns are designed to be forward-compatible. They won't break anything if agents don't recognise them. Think of them as progressive enhancement for AI.
      </p>
    </section>

    <div class="cta-box">
      <h3>Explore the Content</h3>
      <p>All ten appendices are freely available online. Start with the Implementation Cookbook or dive into battle-tested lessons from production deployments.</p>
      <a href="appendix-index.html" class="btn">View All Appendices</a>
      <a href="mailto:tom.cranstoun@gmail.com?subject=Question about The Invisible Users" class="btn">Contact Tom</a>
    </div>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
    <p>Last updated: January 2026</p>
  </footer>

  <a href="index.html" class="floating-home-button" aria-label="Back to Home">Home</a>
  <a href="#" class="floating-top-button" aria-label="Back to Top">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 3. Contact Page: Clear Communication Channels

The contact page provides explicit ways to reach you. For AI agents, it needs clear contact information with proper schema and machine-readable links.

**AI-friendly patterns demonstrated:**

- ContactPage schema with contact options
- Explicit contact methods with data-contact-type attributes
- Email links with proper mailto: protocol
- Response time expectations with data-response-time attribute

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="Contact Tom Cranstoun about The Invisible Users book, professional web audits, collaboration opportunities, or the identity delegation project.">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>Contact | The Invisible Users</title>

  <!-- Schema.org structured data for contact page -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Tom Cranstoun",
    "description": "Get in touch about The Invisible Users book, web audits, or collaboration",
    "url": "https://allabout.network/invisible-users/web/contact.html",
    "mainEntity": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Professional Enquiries",
        "email": "tom.cranstoun@gmail.com",
        "availableLanguage": [
          "English"
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/in/tom-cranstoun/",
        "https://github.com/Digital-Domain-Technologies-Ltd"
      ],
      "image": "https://allabout.network/images/tom-cranstoun.jpg"
    },
    "inLanguage": "en-GB",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/contact.html"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://allabout.network/invisible-users/web/contact.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>Get in Touch</h1>
    <p>Questions, collaboration, or professional services</p>
  </header>

  <main class="container" role="main" data-load-state="complete">

    <section data-section-type="introduction">
      <p style="font-size: 1.15rem; color: #4b5563; text-align: center; margin-bottom: 2rem;">
        Whether you have questions about the book, need a professional web audit, want to discuss the identity delegation project, or explore collaboration opportunities, I'm happy to hear from you.
      </p>
    </section>

    <div class="contact-methods">
      <article class="contact-card" data-contact-type="email" data-response-time="24-48-hours">
        <h3>Email</h3>
        <p>Direct email for all enquiries. Best for detailed questions or proposal discussions.</p>
        <a href="mailto:tom.cranstoun@gmail.com?subject=Enquiry about The Invisible Users">Send Email</a>
      </article>

      <article class="contact-card" data-contact-type="linkedin" data-response-time="1-3-days">
        <h3>LinkedIn</h3>
        <p>Connect for professional networking and collaboration opportunities.</p>
        <a href="https://www.linkedin.com/in/tom-cranstoun/" target="_blank" rel="noopener noreferrer">View Profile</a>
      </article>

      <article class="contact-card" data-contact-type="github" data-response-time="varies">
        <h3>GitHub</h3>
        <p>For technical discussions, code contributions, or reporting issues with the Web Audit Suite.</p>
        <a href="https://github.com/Digital-Domain-Technologies-Ltd" target="_blank" rel="noopener noreferrer">View Projects</a>
      </article>
    </div>

    <section class="topics-section">
      <h2>What to Contact Me About</h2>
      <ul>
        <li><strong>Book Questions</strong> — Implementation guidance, pattern clarifications, or content feedback</li>
        <li><strong>Professional Web Audits</strong> — Comprehensive AI agent compatibility analysis for your website</li>
        <li><strong>Web Audit Suite</strong> — Purchasing the tool or discussing the professional audit service</li>
        <li><strong>Identity Delegation Project</strong> — Technical collaboration or implementation support</li>
        <li><strong>Speaking Engagements</strong> — Conference talks or workshop facilitation</li>
        <li><strong>Consulting Services</strong> — Architecture review, implementation support, or team training</li>
        <li><strong>Partnership Opportunities</strong> — Agencies offering audit services or integration partners</li>
      </ul>
    </section>

    <div class="response-info">
      <h3>Response Times</h3>
      <p>
        Email enquiries typically receive a response within 24-48 hours during UK business days. Technical questions about the Web Audit Suite may require additional time for thorough investigation. If your enquiry is urgent, please mention this in the subject line.
      </p>
    </div>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
    <p>Last updated: January 2026</p>
  </footer>

  <a href="index.html" class="floating-home-button" aria-label="Back to Home">Home</a>
  <a href="#" class="floating-top-button" aria-label="Back to Top">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 4. Sales Page: Book Purchase Landing Page

The sales page is dedicated to selling a specific product — in this case, the book itself. For AI agents, it needs Product schema with offers, clear pricing, and purchase links.

**AI-friendly patterns demonstrated:**

- Product schema with detailed offer information
- Clear pricing with data-price and data-currency attributes
- Purchase links with explicit data-action attributes
- Customer testimonials with Review schema
- Feature lists with data-benefit attributes

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="The Invisible Users book - comprehensive guide to AI-friendly web design with 11 chapters and 10 appendices">
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">
  <title>The Invisible Users Book | Product Details</title>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "The Invisible Users: Designing the Web for AI Agents and Everyone Else",
    "description": "Comprehensive guide examining how modern web design fails for AI agents and how to fix it",
    "image": "https://allabout.network/invisible-users/cover.jpg",
    "sku": "INVISIBLE-USERS-2026",
    "brand": {
      "@type": "Brand",
      "name": "Digital Domain Technologies Ltd"
    },
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "image": "https://allabout.network/images/tom-cranstoun.jpg"
    },
    "inLanguage": "en-GB",
    "numberOfPages": "TBD",
    "bookFormat": "https://schema.org/EBook",
    "offers": {
      "@type": "Offer",
      "price": "TBD",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/PreOrder",
      "url": "sales.html",
      "seller": {
        "@type": "Organization",
        "name": "Digital Domain Technologies Ltd"
      },
      "itemCondition": "https://schema.org/NewCondition",
      "validFrom": "2026-01-11"
    },
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/product.html"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Product",
          "item": "https://allabout.network/invisible-users/web/product.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header><h1>The Invisible Users</h1><p>Complete Product Details</p></header>
  <main class="container" role="main" data-product-id="invisible-users-book" data-availability="preorder">
    <div class="product-grid">
      <div class="product-details">
        <h2>About This Book</h2>
        <p>A practical guide examining how modern web design optimised for human users fails for AI agents, and how fixing this benefits everyone.</p>
        <p><strong>Format:</strong> Kindle (6"×9")</p>
        <p><strong>Publication:</strong> Q1 2026</p>
        <p><strong>Content:</strong> 11 chapters (~57,000 words) + 10 appendices</p>
        <a href="sales.html" class="btn">Purchase</a>
        <a href="collection.html" class="btn">View Appendices</a>
      </div>
      <div class="product-features">
        <h2>What You'll Learn</h2>
        <ul>
          <li>Universal compatibility patterns for all agent types</li>
          <li>Production-ready code examples</li>
          <li>Schema.org structured data templates</li>
          <li>Form validation patterns</li>
          <li>Priority-based implementation roadmap</li>
        </ul>
      </div>
    </div>
  </main>
  <footer><p>&copy; 2026 Tom Cranstoun. All rights reserved.</p></footer>
  <a href="index.html" class="floating-home-button">Home</a>
  <a href="#" class="floating-top-button">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 5. Collection Page: Resource Directory

The collection page lists related resources — appendices, chapters, or tools. For AI agents, it needs ItemList schema with clear navigation structure.

**AI-friendly patterns demonstrated:**

- CollectionPage schema with ItemList
- Each item with explicit data-item-type attribute
- Navigation links with descriptive text
- Category organization with data-category attributes

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="Complete directory of The Invisible Users appendices - implementation cookbooks, battle-tested lessons, quick references, and case studies for AI-friendly web design.">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>Appendices Directory | The Invisible Users</title>

  <!-- Schema.org structured data for collection page -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "The Invisible Users - Appendices Directory",
    "description": "Complete collection of appendices providing implementation guidance for AI-friendly web design",
    "url": "https://allabout.network/invisible-users/web/appendix-index.html",
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "image": "https://allabout.network/images/tom-cranstoun.jpg"
    },
    "isPartOf": {
      "@type": "Book",
      "name": "The Invisible Users"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 10,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "WebPage",
            "name": "Appendix A: Implementation Cookbook",
            "url": "https://allabout.network/invisible-users/web/appendix-a.html",
            "description": "Quick-reference recipes for common AI-friendly patterns"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "WebPage",
            "name": "Appendix B: Battle-Tested Lessons",
            "url": "https://allabout.network/invisible-users/web/appendix-b.html",
            "description": "Production learnings from real-world implementations"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "WebPage",
            "name": "Appendix C: Web Audit Suite Guide",
            "url": "https://allabout.network/invisible-users/web/appendix-c.html",
            "description": "Complete user guide for the Web Audit Suite tool"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "WebPage",
            "name": "Appendix D: AI-Friendly HTML Guide",
            "url": "https://allabout.network/invisible-users/web/appendix-d.html",
            "description": "Comprehensive patterns for AI-compatible web interfaces"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "WebPage",
            "name": "Appendix E: AI Patterns Quick Reference",
            "url": "https://allabout.network/invisible-users/web/appendix-e.html",
            "description": "One-page guide to essential AI-friendly patterns"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "WebPage",
            "name": "Appendix F: Implementation Roadmap",
            "url": "https://allabout.network/invisible-users/web/appendix-f.html",
            "description": "Priority-based implementation guide"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "WebPage",
            "name": "Appendix G: Resource Directory",
            "url": "https://allabout.network/invisible-users/web/appendix-g.html",
            "description": "150+ curated resources for AI-friendly web development"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "WebPage",
            "name": "Appendix H: Example llms.txt File",
            "url": "https://allabout.network/invisible-users/web/appendix-h.html",
            "description": "Production-ready llms.txt with 20 curated links"
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "WebPage",
            "name": "Appendix I: Pipeline Failure Case Study",
            "url": "https://allabout.network/invisible-users/web/appendix-i.html",
            "description": "Real-world analysis of a £20M+ pipeline failure"
          }
        },
        {
          "@type": "ListItem",
          "position": 10,
          "item": {
            "@type": "WebPage",
            "name": "Appendix J: Industry Developments",
            "url": "https://allabout.network/invisible-users/web/appendix-j.html",
            "description": "Timeline of agent-mediated commerce evolution"
          }
        }
      ]
    },
    "inLanguage": "en-GB",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/collection.html"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Collection",
          "item": "https://allabout.network/invisible-users/web/collection.html"
        }
      ]
    },
    "image": "https://allabout.network/images/collection.jpg"
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>Appendices Directory</h1>
    <p>Complete implementation guidance and resources</p>
  </header>

  <main class="container" role="main" data-load-state="complete">

    <section class="category-section" data-category="implementation-guides">
      <h2>Implementation Guides</h2>
      <div class="appendix-grid">

        <article class="appendix-card" data-item-type="cookbook" data-appendix="a">
          <h3><span class="letter">A</span> Implementation Cookbook</h3>
          <p>Quick-reference recipes for common AI-friendly patterns. Copy-paste code examples for semantic HTML, form validation, error handling, and structured data.</p>
          <a href="appendix-a.html">View Cookbook →</a>
        </article>

        <article class="appendix-card" data-item-type="lessons" data-appendix="b">
          <h3><span class="letter">B</span> Battle-Tested Lessons</h3>
          <p>Production learnings from real-world implementations. What worked, what didn't, and why. Avoid common pitfalls with guidance from actual deployments.</p>
          <a href="appendix-b.html">View Lessons →</a>
        </article>

        <article class="appendix-card" data-item-type="tool-guide" data-appendix="c">
          <h3><span class="letter">C</span> Web Audit Suite Guide</h3>
          <p>Complete user guide for the Web Audit Suite tool. Installation, configuration, running analyses, and interpreting reports. Command-line and API usage.</p>
          <a href="appendix-c.html">View Guide →</a>
        </article>

        <article class="appendix-card" data-item-type="comprehensive-guide" data-appendix="d">
          <h3><span class="letter">D</span> AI-Friendly HTML Guide</h3>
          <p>Comprehensive patterns for AI-compatible web interfaces. From quick fixes to architectural decisions. Semantic HTML, explicit state, structured data, and more.</p>
          <a href="appendix-d.html">View Guide →</a>
        </article>

      </div>
    </section>

    <section class="category-section" data-category="quick-references">
      <h2>Quick References</h2>
      <div class="appendix-grid">

        <article class="appendix-card" data-item-type="quick-reference" data-appendix="e">
          <h3><span class="letter">E</span> AI Patterns Quick Reference</h3>
          <p>One-page guide to essential AI-friendly patterns. HTTP status codes, form field names, data attributes, and common Schema.org types. Perfect for keeping beside your keyboard.</p>
          <a href="appendix-e.html">View Reference →</a>
        </article>

        <article class="appendix-card" data-item-type="roadmap" data-appendix="f">
          <h3><span class="letter">F</span> Implementation Roadmap</h3>
          <p>Priority-based implementation guide. No time estimates, just clear priorities from critical quick wins to advanced features. Start where you are, improve incrementally.</p>
          <a href="appendix-f.html">View Roadmap →</a>
        </article>

        <article class="appendix-card" data-item-type="directory" data-appendix="g">
          <h3><span class="letter">G</span> Resource Directory</h3>
          <p>150+ curated resources for AI-friendly web development. Standards documentation, tools, libraries, testing frameworks, and community resources. All links verified.</p>
          <a href="appendix-g.html">View Directory →</a>
        </article>

      </div>
    </section>

    <section class="category-section" data-category="case-studies">
      <h2>Case Studies and Examples</h2>
      <div class="appendix-grid">

        <article class="appendix-card" data-item-type="example-file" data-appendix="h">
          <h3><span class="letter">H</span> Example llms.txt File</h3>
          <p>Production-ready llms.txt with 20 curated links. Demonstrates best practices for AI agent guidance files. Copy and adapt for your own projects.</p>
          <a href="appendix-h.html">View Example →</a>
        </article>

        <article class="appendix-card" data-item-type="case-study" data-appendix="i">
          <h3><span class="letter">I</span> Pipeline Failure Case Study</h3>
          <p>Real-world analysis of a £20M+ pipeline failure caused by agent incompatibility. Detailed examination of what went wrong, the business impact, and how to prevent similar failures.</p>
          <a href="appendix-i.html">View Case Study →</a>
        </article>

        <article class="appendix-card" data-item-type="timeline" data-appendix="j">
          <h3><span class="letter">J</span> Industry Developments</h3>
          <p>Timeline of agent-mediated commerce evolution. Product launches, acquisitions, standards adoption, and market validation. Updated regularly as the field progresses.</p>
          <a href="appendix-j.html">View Timeline →</a>
        </article>

      </div>
    </section>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
    <p>Last updated: January 2026</p>
  </footer>

  <a href="index.html" class="floating-home-button" aria-label="Back to Home">Home</a>
  <a href="#" class="floating-top-button" aria-label="Back to Top">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 6. Consulting Service Page: Professional Web Audits

The consulting service page sells professional services — in this case, web audits for AI agent compatibility. For AI agents, it needs Service schema with clear pricing information and service details.

**AI-friendly patterns demonstrated:**

- Service schema with provider and offer information
- Service tiers with explicit data-tier attributes
- Pricing with data-price ranges
- Process steps with data-step numbers
- Contact form with proper field naming

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  
  <!-- Schema.org structured data for login page -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sign In",
    "description": "User authentication page",
    "url": "https://allabout.network/invisible-users/web/login.html",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "inLanguage": "en-GB",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/login.html"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Login",
          "item": "https://allabout.network/invisible-users/web/login.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <main class="login-container" role="main" data-form-type="login">
    <h1>Sign In</h1>
    <form action="/login" method="POST" data-state="ready">
      <div class="form-field">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required aria-required="true" autocomplete="email">
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required aria-required="true" autocomplete="current-password">
      </div>
      <button type="submit" class="btn">Sign In</button>
    </form>
    <p style="text-align: center; margin-top: 1.5rem; color: #6b7280;">
      Don't have an account? <a href="contact.html" style="color: #2563eb;">Contact us</a>
    </p>
  </main>
  <a href="index.html" class="floating-home-button">Home</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 7. Blog Post Page: Thought Leadership Content

The blog post page shares insights and expertise. For AI agents, it needs Article or BlogPosting schema with clear authorship, publication dates, and semantic article structure.

**AI-friendly patterns demonstrated:**

- BlogPosting schema with author and publisher information
- Temporal metadata (datePublished, dateModified)
- Article structure with semantic HTML5 elements
- Reading time estimate with data-reading-time attribute
- Table of contents with anchor links

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="Why AI agents struggle with modern web forms - and how semantic HTML, explicit state attributes, and persistent error messages create better experiences for both humans and agents.">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>Why Modern Forms Break AI Agents (And How to Fix Them) | The Invisible Users</title>

  <!-- Schema.org structured data for blog post -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Modern Forms Break AI Agents (And How to Fix Them)",
    "description": "Examining how modern web forms fail for AI agents and providing practical patterns for forms that work for both humans and machines.",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network",
      "image": "https://allabout.network/images/tom-cranstoun.jpg"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Domain Technologies Ltd",
      "url": "https://allabout.network"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/blog/forms-and-agents.html"
    },
    "articleSection": "Web Development, AI Agents, Accessibility",
    "keywords": "AI agents, web forms, semantic HTML, form validation, accessibility",
    "wordCount": "1200",
    "inLanguage": "en-GB",
    "isPartOf": {
      "@type": "Blog",
      "name": "The Invisible Users Blog"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog Post",
          "item": "https://allabout.network/invisible-users/web/blog-post.html"
        }
      ]
    },
    "image": "https://allabout.network/images/blog-post.jpg"
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>Why Modern Forms Break AI Agents (And How to Fix Them)</h1>
    <div class="article-meta" data-published="2026-01-11" data-modified="2026-01-11" data-reading-time="6 minutes">
      <time datetime="2026-01-11">Published: 11 January 2026</time>
      <span>•</span>
      <span>6 min read</span>
      <span>•</span>
      <span>Tom Cranstoun</span>
    </div>
  </header>

  <main class="container" role="main">
    <article data-article-type="blog-post" data-word-count="1200">

      <p>
        Modern web forms are beautifully designed for humans. Inline validation highlights errors as you type. Submit buttons disable until the form is complete. Error messages appear in elegant toast notifications. But these same patterns create insurmountable problems for AI agents — and, it turns out, for many humans too.
      </p>

      <h2>The Problem: Visual-Only Feedback</h2>

      <p>
        When a form field has an error, humans see it visually: a red border, an error icon, maybe a background colour change. But these visual cues exist only in CSS. The underlying HTML remains unchanged. An AI agent parsing the DOM sees a perfectly normal input field with no indication that something is wrong.
      </p>

      <p>Consider this common pattern:</p>

      <pre><code>&lt;input type="email" class="error"&gt;
&lt;div class="error-message"&gt;Invalid email address&lt;/div&gt;</code></pre>

      <p>
        The <code>class="error"</code> attribute means nothing to an agent. It's purely a styling hook. The agent has no way to determine which fields are valid and which need correction. The error message might be visible to humans, but agents can't reliably connect it to the specific field that failed.
      </p>

      <h2>The Solution: Explicit State in Attributes</h2>

      <p>
        Making forms agent-friendly requires putting state directly in the DOM where machines can read it. This means using proper ARIA attributes and data attributes to expose validation state:
      </p>

      <pre><code>&lt;input type="email"
       id="email"
       name="email"
       aria-invalid="true"
       aria-describedby="email-error"
       data-validation-state="invalid"&gt;
&lt;div id="email-error" role="alert"&gt;
  Enter a valid email address (example: name@company.com)
&lt;/div&gt;</code></pre>

      <p>
        Now an agent can query the DOM and immediately understand: this field is invalid (<code>aria-invalid="true"</code>), the error message is persistent and connected (<code>aria-describedby</code>), and the validation state is explicit (<code>data-validation-state="invalid"</code>).
      </p>

      <div class="highlight-box">
        <p><strong>Key insight:</strong> The patterns that help AI agents also improve accessibility for humans. Screen reader users benefit from <code>aria-invalid</code> and <code>role="alert"</code>. Keyboard navigators benefit from persistent error messages. Everyone benefits from explicit, unambiguous feedback.</p>
      </div>

      <h2>The Vanishing Error Problem</h2>

      <p>
        Toast notifications are elegant. They slide in, display a message, then fade away after a few seconds. Perfect for humans who can read quickly. Catastrophic for AI agents processing hundreds of forms per hour.
      </p>

      <p>
        By the time an agent finishes analysing one field and moves to the next, the toast has disappeared. The error information is gone. The agent has no way to retrieve it. The form submission fails, but the agent doesn't know why.
      </p>

      <p>The solution is simple: make errors persistent. Keep them visible until they're fixed. Connect them to their fields with <code>aria-describedby</code>. Provide an error summary at the top of the form listing every problem.</p>

      <h2>Form Field Naming Matters</h2>

      <p>
        AI agents recognise common field names: <code>email</code>, <code>firstName</code>, <code>lastName</code>, <code>phone</code>. When you use standard names, agents can fill forms accurately without custom training for your specific site.
      </p>

      <p>
        Using <code>user_email_address_field</code> instead of <code>email</code> might seem more descriptive, but it breaks agent compatibility. The agent doesn't know that your custom name means "email" — it's looking for a field literally named <code>email</code>.
      </p>

      <p>Stick to conventions:</p>

      <ul>
        <li><code>email</code> not <code>e-mail</code>, <code>emailAddress</code>, or <code>user_email</code></li>
        <li><code>firstName</code> not <code>fname</code>, <code>givenName</code>, or <code>first_name</code></li>
        <li><code>phone</code> not <code>tel</code>, <code>phoneNumber</code>, or <code>mobile</code></li>
        <li><code>postcode</code> not <code>zip</code>, <code>zipCode</code>, or <code>postalCode</code> (for UK sites)</li>
      </ul>

      <h2>Implementation Checklist</h2>

      <p>To make your forms work for both humans and AI agents:</p>

      <ol>
        <li>Add <code>aria-invalid</code> and <code>aria-describedby</code> to all validated fields</li>
        <li>Make error messages persistent (no vanishing toasts)</li>
        <li>Connect each error to its field with proper IDs</li>
        <li>Use standard field names (<code>email</code>, <code>firstName</code>, <code>phone</code>)</li>
        <li>Add an error summary at the top of the form with links to each invalid field</li>
        <li>Disable the submit button only if you explain why it's disabled</li>
        <li>Validate on blur, not just on submit</li>
        <li>Add explicit state attributes (<code>data-validation-state</code>, <code>data-errors</code>)</li>
      </ol>

      <h2>The Broader Principle</h2>

      <p>
        Forms are just one example of a universal principle: visual design affects only humans, not AI agents. Agents parse HTML directly. They don't see colours, fonts, animations, or visual styling. They read the underlying structure.
      </p>

      <p>
        This means fixing visual design problems (like low-contrast error messages) helps humans but doesn't affect agents. Fixing structural problems (like missing ARIA attributes and implicit state) helps both.
      </p>

      <p>
        When you build with semantic HTML, explicit state, and structured data, you create interfaces that work universally — for CLI agents running locally, for browser automation agents using Playwright, and for humans using screen readers or keyboards.
      </p>

      <p>Better patterns for agents mean better experiences for everyone. Neither humans nor machines should have to guess what's happening on your website.</p>

    </article>

    <div class="author-bio" data-author="tom-cranstoun">
      <h3>About the Author</h3>
      <p>
        <strong>Tom Cranstoun</strong> is a software consultant and the author of "The Invisible Users: Designing the Web for AI Agents and Everyone Else". He specialises in building web systems that work reliably for both humans and AI agents.
      </p>
      <p>
        Contact: <a href="mailto:tom.cranstoun@gmail.com">tom.cranstoun@gmail.com</a> |
        <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a> |
        <a href="https://github.com/Digital-Domain-Technologies-Ltd">GitHub</a>
      </p>
    </div>

    <div class="related-posts">
      <h3>Related Reading</h3>
      <ul>
        <li><a href="appendix-d.html">Appendix D: AI-Friendly HTML Guide</a> — Comprehensive patterns for agent-compatible forms</li>
        <li><a href="appendix-a.html">Appendix A: Implementation Cookbook</a> — Quick-reference recipes for common patterns</li>
        <li><a href="appendix-f.html">Appendix F: Implementation Roadmap</a> — Priority-based implementation guidance</li>
      </ul>
    </div>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
    <p>Last updated: January 2026</p>
  </footer>

  <a href="index.html" class="floating-home-button" aria-label="Back to Home">Home</a>
  <a href="#" class="floating-top-button" aria-label="Back to Top">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 8. Article Page: Long-Form Technical Content

The article page presents comprehensive technical documentation or case studies. For AI agents, it needs Article schema with detailed metadata, section structure, and table of contents.

**AI-friendly patterns demonstrated:**

- Article schema with comprehensive metadata
- Semantic section structure with data-section-id attributes
- Table of contents with anchor links
- Code examples with proper language specification
- Reading progress indicators with data-progress attribute

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="Complete technical guide to implementing llms.txt files for AI agent discovery - syntax, structure, best practices, and real-world examples from production deployments.">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>Complete Guide to llms.txt Implementation | The Invisible Users</title>

  <!-- Schema.org structured data for technical article -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Complete Guide to llms.txt Implementation",
    "description": "Comprehensive technical documentation for implementing llms.txt files to enable AI agent discovery and provide structured site information",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network",
      "image": "https://allabout.network/images/tom-cranstoun.jpg"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Domain Technologies Ltd",
      "url": "https://allabout.network"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/articles/llms-txt-guide.html"
    },
    "articleSection": "Technical Documentation",
    "keywords": "llms.txt, AI agents, LLM discovery, website documentation, structured information",
    "wordCount": "2500",
    "proficiencyLevel": "Intermediate",
    "dependencies": "Text editor, web server",
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Article",
          "item": "https://allabout.network/invisible-users/web/article.html"
        }
      ]
    },
    "image": "https://allabout.network/images/article.jpg"
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>Complete Guide to llms.txt Implementation</h1>
    <div class="article-meta" data-published="2026-01-11" data-modified="2026-01-11" data-reading-time="12 minutes">
      <time datetime="2026-01-11">Published: 11 January 2026</time>
      <span>•</span>
      <span>12 min read</span>
      <span>•</span>
      <span>Tom Cranstoun</span>
    </div>
  </header>

  <div class="container">
    <nav class="toc" aria-label="Table of Contents" data-toc-type="sticky">
      <h2>Contents</h2>
      <ul>
        <li><a href="#what-is-llms-txt">What is llms.txt?</a></li>
        <li><a href="#why-it-matters">Why It Matters</a></li>
        <li><a href="#basic-structure">Basic Structure</a></li>
        <li><a href="#metadata-section">Metadata Section</a></li>
        <li><a href="#links-section">Links Section</a></li>
        <li><a href="#best-practices">Best Practices</a></li>
        <li><a href="#real-world-example">Real-World Example</a></li>
        <li><a href="#validation">Validation</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </nav>

    <article data-article-type="technical-guide" data-word-count="2500">

      <section id="what-is-llms-txt" data-section-id="introduction">
        <h2>What is llms.txt?</h2>
        <p>
          llms.txt is an emerging convention for providing AI agents with structured information about your website. Similar to robots.txt for crawler control, llms.txt offers a standardised location where agents can find curated links, site descriptions, and usage guidelines.
        </p>
        <p>
          The file lives at <code>/llms.txt</code> in your site root. When an AI agent encounters your website, it can check this file for authoritative information about your content structure, recommended entry points, and access policies.
        </p>

        <div class="info-box">
          <strong>Standard Status:</strong>
          <p>llms.txt is an emerging convention (2024-2025), not yet a formal standard. However, major AI platforms including Anthropic, OpenAI, and others have begun recognising and respecting llms.txt files. The specification is maintained at <code>https://llmstxt.org</code>.</p>
        </div>
      </section>

      <section id="why-it-matters" data-section-id="rationale">
        <h2>Why It Matters</h2>
        <p>Without llms.txt, AI agents must discover your site structure through trial and error:</p>
        <ul>
          <li>Crawling sitemaps (if present)</li>
          <li>Following navigation links</li>
          <li>Guessing URL patterns</li>
          <li>Searching for specific content types</li>
        </ul>
        <p>
          This wastes computational resources and creates inconsistent experiences. With llms.txt, you provide a curated list of important pages, explain your site's purpose, and guide agents to the most valuable content first.
        </p>

        <h3>Business Benefits</h3>
        <ul>
          <li><strong>Efficient discovery:</strong> Agents find your key content immediately</li>
          <li><strong>Accurate representation:</strong> You control which pages represent your business</li>
          <li><strong>Reduced server load:</strong> Fewer speculative requests from agents guessing URLs</li>
          <li><strong>Clear policies:</strong> Explicit guidance about content usage and attribution</li>
        </ul>
      </section>

      <section id="basic-structure" data-section-id="structure">
        <h2>Basic Structure</h2>
        <p>An llms.txt file contains two sections:</p>

        <h3>1. Metadata Header</h3>
        <p>Free-form text describing your site, marked with markdown headings (##). This section provides context about your content, technology stack, and intended audience.</p>

        <h3>2. Curated Links</h3>
        <p>A list of important URLs with brief descriptions. Each link includes a title in square brackets, the URL, and a short explanation of the content.</p>

        <pre><code>## Site Metadata
**Last updated:** January 2026
**Contact:** admin@example.com

## Access Guidelines
[Documentation](https://example.com/docs/): Complete API reference and guides</code></pre>
      </section>

      <section id="metadata-section" data-section-id="metadata">
        <h2>Metadata Section</h2>
        <p>The metadata header should include:</p>

        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Purpose</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Last updated</td>
              <td>When the file was last revised</td>
              <td>January 2026</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>Email for agent-related questions</td>
              <td>ai-support@example.com</td>
            </tr>
            <tr>
              <td>Site Type</td>
              <td>Category of website</td>
              <td>E-Commerce, Documentation, Blog</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>What the site provides</td>
              <td>Customer Support and Product Sales</td>
            </tr>
            <tr>
              <td>Technology Stack</td>
              <td>Key technologies used</td>
              <td>RESTful API, React Frontend</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="links-section" data-section-id="links">
        <h2>Links Section</h2>
        <p>The links section should prioritise:</p>

        <h3>Essential Pages</h3>
        <ul>
          <li>Homepage or landing page</li>
          <li>API documentation (if applicable)</li>
          <li>Product catalogue or service directory</li>
          <li>Help centre or support resources</li>
          <li>Contact information</li>
        </ul>

        <h3>Format</h3>
        <pre><code>- [Page Title](https://example.com/path/): Brief description of content</code></pre>

        <div class="warning-box">
          <strong>Keep it focused:</strong>
          <p>Limit your llms.txt file to 15-25 links. More than this dilutes the curation value. Agents looking for everything can use your sitemap — llms.txt should highlight what matters most.</p>
        </div>
      </section>

      <section id="best-practices" data-section-id="best-practices">
        <h2>Best Practices</h2>

        <h3>1. Curate, Don't Duplicate</h3>
        <p>llms.txt is not a sitemap. Include only your most important pages — those that best represent your content and serve as entry points for understanding your site.</p>

        <h3>2. Maintain Regularly</h3>
        <p>Update your llms.txt file when you launch major features, restructure content, or change contact information. Outdated llms.txt files provide worse guidance than no file at all.</p>

        <h3>3. Explain Context</h3>
        <p>Don't just list URLs. Explain what each page contains and why it matters. Agents use these descriptions to determine relevance.</p>

        <h3>4. Test Accessibility</h3>
        <p>Verify that your llms.txt file is accessible at <code>https://yourdomain.com/llms.txt</code> with correct MIME type (<code>text/plain; charset=utf-8</code>).</p>
      </section>

      <section id="real-world-example" data-section-id="example">
        <h2>Real-World Example</h2>
        <p>Here's a complete llms.txt file for The Invisible Users project:</p>

        <pre><code># The Invisible Users

## Site Information
**Last updated:** January 2026
**Contact:** tom.cranstoun@gmail.com
**Site Type:** Technical Documentation, Educational Resource
**Purpose:** AI Agent Compatibility Guidance

## Quick Links
- [Homepage](https://allabout.network/invisible-users/): Project overview and introduction
- [Appendices](https://allabout.network/invisible-users/web/appendix-index.html): Implementation guides and resources
- [Implementation Cookbook](https://allabout.network/invisible-users/web/appendix-a.html): Quick-reference recipes
- [AI-Friendly HTML Guide](https://allabout.network/invisible-users/web/appendix-d.html): Comprehensive patterns
- [FAQ](https://allabout.network/invisible-users/web/faq.html): Common questions</code></pre>
      </section>

      <section id="validation" data-section-id="validation">
        <h2>Validation</h2>
        <p>Before deploying your llms.txt file, verify:</p>

        <ol>
          <li>File is accessible at <code>/llms.txt</code></li>
          <li>Content-Type header is <code>text/plain; charset=utf-8</code></li>
          <li>All linked URLs are absolute (include full domain)</li>
          <li>All links return 200 status codes</li>
          <li>Descriptions are concise (under 80 characters)</li>
          <li>Contact email is current and monitored</li>
        </ol>
      </section>

      <section id="deployment" data-section-id="deployment">
        <h2>Deployment</h2>
        <p>Place your llms.txt file in your website root directory and configure your web server to serve it with the correct MIME type.</p>

        <h3>Apache (.htaccess)</h3>
        <pre><code>AddType text/plain .txt</code></pre>

        <h3>Nginx</h3>
        <pre><code>location = /llms.txt {
  add_header Content-Type "text/plain; charset=utf-8";
}</code></pre>

        <h3>Node.js/Express</h3>
        <pre><code>app.get('/llms.txt', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.sendFile(path.join(__dirname, 'public', 'llms.txt'));
});</code></pre>

        <p>
          Test deployment by accessing <code>https://yourdomain.com/llms.txt</code> in a browser and verifying the content appears as plain text.
        </p>
      </section>

    </article>

    <footer role="contentinfo">
      <div class="contact-links">
        <a href="mailto:tom.cranstoun@gmail.com">Email</a>
        <a href="https://allabout.network">Website</a>
        <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
        <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
      </div>
      <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
      <p>Last updated: January 2026</p>
    </footer>
  </div>

  <a href="index.html" class="floating-home-button" aria-label="Back to Home">Home</a>
  <a href="#" class="floating-top-button" aria-label="Back to Top">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 14. Event/Webinar Page: Live Presentation Registration

The event page promotes webinars, workshops, or live presentations. For AI agents, it needs Event schema with dates, times, location details, and registration information.

**AI-friendly patterns demonstrated:**

- Event schema with startDate, endDate, and eventStatus
- VirtualLocation with registration URL
- Clear event details with timezone information
- Organizer and offers information
- Recording availability noted explicitly

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webinar: The Platform Race | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "The Platform Race: How Three Tech Giants Launched Agent Commerce in Seven Days",
    "description": "Free webinar examining how Amazon, Google, and Microsoft launched AI agent commerce systems in January 2026, with practical guidance for making websites compatible with AI agents",
    "startDate": "2026-01-21T14:00:00Z",
    "endDate": "2026-01-21T15:30:00Z",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://www.boye-co.com/blog/2026/1/websites-work-until-dont"
    },
    "organizer": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "url": "https://allabout.network/tom-cranstoun.html",
      "email": "tom.cranstoun@gmail.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://www.boye-co.com/blog/2026/1/websites-work-until-dont"
    },
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/event.html"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Event",
          "item": "https://allabout.network/invisible-users/web/event.html"
        }
      ]
    },
    "image": "https://allabout.network/images/event.jpg"
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header><h1>The Platform Race: How Three Tech Giants Launched Agent Commerce in Seven Days</h1><p>Free webinar with Tom Cranstoun</p></header>
  <main class="container" role="main" data-event-id="webinar-jan-2026">
    <div class="event-details">
      <p><strong>Date:</strong> Wednesday, 21 January 2026</p>
      <p><strong>Time:</strong> 14:00 GMT (15:00 CET, 09:00 EST)</p>
      <p><strong>Format:</strong> Online webinar (20-minute presentation + Q&A)</p>
      <p><strong>Cost:</strong> Free</p>
      <p><strong>Recording:</strong> Available to registered attendees</p>
      <p style="margin-top: 1.5rem;"><a href="https://www.boye-co.com/blog/2026/1/websites-work-until-dont" class="btn">Register Now</a></p>
    </div>
    <h2>The Platform Race Context</h2>
    <p>In seven days this January, Amazon, Microsoft, and Google launched AI agent commerce systems. Each bet billions on agents mediating online shopping - but they chose opposite strategies.</p>
    <p>Google and OpenAI went open (any merchant, any agent). Microsoft went closed (Microsoft only). When Target and Walmart - fierce competitors - endorse the same open protocol, it signals where the industry is heading.</p>
    <p>The timeline just compressed. When an agent fails to navigate your site, it silently excludes you from recommendations. You lose thousands of potential customers who never knew you existed.</p>
    <h2>What You'll Learn</h2>
    <ul>
      <li>How design decisions based on visual intuition create barriers for browser assistants</li>
      <li>Why machine-driven failures mirror accessibility gaps</li>
      <li>Practical technical changes for AI agent compatibility</li>
      <li>Real examples from the platform race and business implications</li>
    </ul>
  </main>
  <footer><p>&copy; 2026 Tom Cranstoun. All rights reserved.</p></footer>
  <a href="index.html" class="floating-home-button">Home</a>
  <a href="#" class="floating-top-button">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 15. Login Page: User Authentication

The login page provides user authentication. For AI agents, it needs proper form field naming, clear state attributes, and semantic form structure.

**AI-friendly patterns demonstrated:**

- Standard field names (email, password) with autocomplete attributes
- Form with data-state attribute for explicit state management
- Proper data-form-type attribute
- ARIA required attributes
- Clear link to registration or password recovery

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sign In",
    "description": "User authentication page",
    "url": "https://allabout.network/invisible-users/web/login.html",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "inLanguage": "en-GB",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/login.html"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Login",
          "item": "https://allabout.network/invisible-users/web/login.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <main class="login-container" role="main" data-form-type="login">
    <h1>Sign In</h1>
    <form action="/login" method="POST" data-state="ready">
      <div class="form-field">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required aria-required="true" autocomplete="email">
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required aria-required="true" autocomplete="current-password">
      </div>
      <button type="submit" class="btn">Sign In</button>
    </form>
    <p style="text-align: center; margin-top: 1.5rem; color: #6b7280;">
      Don't have an account? <a href="contact.html" style="color: #2563eb;">Contact us</a>
    </p>
  </main>
  <a href="index.html" class="floating-home-button">Home</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 16. Checkout Page: E-Commerce Transaction

The checkout page handles purchase completion. For AI agents, it needs CheckoutPage schema, clear form fields with standard naming, explicit checkout step indicators, and order summary data.

**AI-friendly patterns demonstrated:**

- CheckoutPage schema type
- Multi-step checkout with data-checkout-step and data-total-steps attributes
- Standard form field names (fullName, email, address1)
- Order summary with data-order-total attribute
- Clear data-form-type attribute

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Checkout | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CheckoutPage",
    "name": "Checkout",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/checkout.html"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Checkout",
          "item": "https://allabout.network/invisible-users/web/checkout.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header><h1>Checkout</h1></header>
  <main class="container" role="main" data-checkout-step="1" data-total-steps="3">
    <div class="checkout-grid">
      <form data-form-type="checkout">
        <h2>Billing Information</h2>
        <div class="form-field">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" required>
        </div>
        <div class="form-field">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-field">
          <label for="address1">Address Line 1</label>
          <input type="text" id="address1" name="address1" required>
        </div>
        <button type="submit" class="btn">Continue to Payment</button>
      </form>
      <aside class="order-summary" data-order-total="TBD">
        <h3>Order Summary</h3>
        <p style="margin: 1rem 0;"><strong>The Invisible Users</strong></p>
        <p>Subtotal: Contact for pricing</p>
        <p style="margin-top: 1.5rem; font-size: 1.25rem; font-weight: 700;">Total: TBD</p>
      </aside>
    </div>
  </main>
  <footer><p>&copy; 2026 Tom Cranstoun. All rights reserved.</p></footer>
  <a href="index.html" class="floating-home-button">Home</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 17. Search Results Page: Query Results Display

The search results page displays query results. For AI agents, it needs SearchResultsPage schema, explicit result count and query data, and clear result positioning.

**AI-friendly patterns demonstrated:**

- SearchResultsPage schema type
- data-search-results and data-search-query attributes
- Each result with data-result-position attribute
- Search box with role="search" and proper aria-label
- Result count explicitly stated in text

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Results | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    "name": "Search Results",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/search.html"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Search",
          "item": "https://allabout.network/invisible-users/web/search.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header><h1>Search Results</h1></header>
  <main class="container" role="main" data-search-results="3" data-search-query="AI agents">
    <div class="search-box" role="search">
      <input type="search" name="q" placeholder="Search..." value="AI agents" aria-label="Search">
    </div>
    <p style="margin: 2rem 0; color: #6b7280;">Found 3 results for "AI agents"</p>
    <article class="search-result" data-result-position="1">
      <h3><a href="index.html">The Invisible Users - Home</a></h3>
      <p>A practical guide to designing websites that work for AI agents and everyone else...</p>
    </article>
    <article class="search-result" data-result-position="2">
      <h3><a href="blog-post.html">Why Modern Forms Break AI Agents</a></h3>
      <p>Examining how modern web forms fail for AI agents and providing practical patterns...</p>
    </article>
    <article class="search-result" data-result-position="3">
      <h3><a href="collection.html">Appendices Collection</a></h3>
      <p>Complete collection of appendices providing implementation guidance for AI-friendly web design...</p>
    </article>
  </main>
  <footer><p>&copy; 2026 Tom Cranstoun. All rights reserved.</p></footer>
  <a href="index.html" class="floating-home-button">Home</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 18. Portfolio/Case Studies Page: Project Showcase

The portfolio page showcases case studies and project examples. For AI agents, it needs CollectionPage schema with clear project data attributes.

**AI-friendly patterns demonstrated:**

- CollectionPage schema type
- Each case study with data-case-study-id attribute
- Clear structure: Challenge, Solution, Result
- Links to detailed case studies
- Descriptive image attributes

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Case Studies | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies",
    "description": "Real-world examples of AI-friendly web implementation",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/portfolio.html"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio",
          "item": "https://allabout.network/invisible-users/web/portfolio.html"
        }
      ]
    },
    "image": "https://allabout.network/images/portfolio.jpg"
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header><h1>Case Studies</h1><p>Real-world AI-friendly implementations</p></header>
  <main class="container" role="main">
    <article class="case-study" data-case-study-id="pipeline-failure">
      <h2>£20M+ Pipeline Failure Analysis</h2>
      <p><strong>Challenge:</strong> AI agents unable to complete purchase flow</p>
      <p><strong>Solution:</strong> Implemented semantic HTML, explicit state attributes, and persistent error messages</p>
      <p><strong>Result:</strong> 100% agent success rate after implementation</p>
      <p><a href="article.html">Read full case study →</a></p>
    </article>
  </main>
  <footer><p>&copy; 2026 Tom Cranstoun. All rights reserved.</p></footer>
  <a href="index.html" class="floating-home-button">Home</a>
  <a href="#" class="floating-top-button">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 19. Team Page: Staff Profiles

The team page introduces staff members. For AI agents, it needs ProfilePage schema with Person entities and clear member data attributes.

**AI-friendly patterns demonstrated:**

- ProfilePage schema with Person mainEntity
- Each team member with data-person-id attribute
- Person schema with jobTitle, email, and social links
- Structured contact information
- Professional credentials when relevant

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "jobTitle": "Author and Software Consultant",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network/tom-cranstoun.html",
      "image": "https://allabout.network/images/tom-cranstoun.jpg"
    },
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/team.html"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://allabout.network/invisible-users/web/team.html"
        }
      ]
    },
    "image": "https://allabout.network/images/team.jpg"
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header><h1>Our Team</h1></header>
  <main class="container" role="main">
    <article class="team-member" data-person-id="tom-cranstoun">
      <h2>Tom Cranstoun</h2>
      <p><strong>Author and Software Consultant</strong></p>
      <p>Tom is a software consultant specialising in web systems that work reliably for both humans and AI agents. Author of "The Invisible Users: Designing the Web for AI Agents and Everyone Else".</p>
      <p><a href="mailto:tom.cranstoun@gmail.com">tom.cranstoun@gmail.com</a> | <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a></p>
    </article>
  </main>
  <footer><p>&copy; 2026 Tom Cranstoun. All rights reserved.</p></footer>
  <a href="index.html" class="floating-home-button">Home</a>
  <a href="#" class="floating-top-button">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 20. Testimonials Page: Customer Reviews

The testimonials page displays customer reviews and ratings. For AI agents, it needs Review schema with proper rating data and reviewer information.

**AI-friendly patterns demonstrated:**

- CreativeWork schema with review array
- Review entities with reviewRating
- Each testimonial with data-rating and data-reviewer attributes
- Rating display (both visual stars and numeric value)
- Reviewer attribution with role/title

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Testimonials | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "The Invisible Users",
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sample Reader"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Essential reading for anyone building modern web applications. The patterns are practical and immediately applicable."
      }
    ],
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/testimonials.html"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Testimonials",
          "item": "https://allabout.network/invisible-users/web/testimonials.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header><h1>What Readers Say</h1><p>Testimonials from web professionals and developers</p></header>
  <main class="container" role="main">
    <article class="testimonial" data-rating="5" data-reviewer="sample-reader">
      <div class="rating">★★★★★</div>
      <p class="testimonial-text">"Essential reading for anyone building modern web applications. The patterns are practical and immediately applicable to real-world projects."</p>
      <p class="testimonial-author">— Sample Reader, Web Developer</p>
    </article>
    <article class="testimonial" data-rating="5" data-reviewer="sample-professional">
      <div class="rating">★★★★★</div>
      <p class="testimonial-text">"Finally, a comprehensive guide that explains both the why and the how. The code examples are production-ready and the implementation roadmap is invaluable."</p>
      <p class="testimonial-author">— Sample Professional, Software Architect</p>
    </article>
  </main>
  <footer><p>&copy; 2026 Tom Cranstoun. All rights reserved.</p></footer>
  <a href="index.html" class="floating-home-button">Home</a>
  <a href="#" class="floating-top-button">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## Conclusion

These twenty page patterns demonstrate how to build AI-friendly websites that work universally. Each pattern combines:

- **Semantic HTML** — Conveying meaning through structure, not just styling
- **Schema.org JSON-LD** — Providing machine-readable structured data
- **Explicit state** — Making dynamic information visible in the DOM
- **Accessibility first** — ARIA attributes and WCAG-compliant markup
- **Real content** — Demonstrating tone, structure, and practical implementation

### Using These Patterns

Copy the HTML, replace the content with your own, adjust the styles to match your brand, and deploy. The patterns are designed to be:

- **Forward-compatible** — Won't break if agents don't recognise proposed patterns
- **Standards-based** — Using established specifications wherever possible
- **Production-ready** — Tested code you can deploy immediately
- **Universally accessible** — Working for humans and all agent types

### Next Steps

- **Explore Appendix D** for comprehensive AI-friendly HTML patterns beyond these page types
- **Review Appendix A** for quick-reference code snippets and recipes
- **Consult Appendix F** for priority-based implementation guidance
- **View the source** of these pages at <https://allabout.network/invisible-users/web/> to see the patterns in action

Build once with these patterns, and your pages will work for CLI agents, browser automation agents, screen readers, keyboard navigators, and everyone else who visits your website.

## 9. FAQ Page: Frequently Asked Questions

The FAQ page answers common questions in a structured format. For AI agents, it needs FAQPage schema with Question/Answer pairs.

**AI-friendly patterns demonstrated:**

- FAQPage schema with mainEntity array of Questions
- Each question with acceptedAnswer
- Semantic question/answer structure
- Anchor links for direct navigation

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="Frequently asked questions about The Invisible Users book - AI agents, web design, implementation guidance, and identity delegation">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>Frequently Asked Questions | The Invisible Users</title>

  <!-- Schema.org structured data for FAQ page -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "The Invisible Users - Frequently Asked Questions",
    "description": "Common questions about The Invisible Users book, AI agent compatibility, implementation guidance, and identity delegation infrastructure",
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network"
    },
    "inLanguage": "en-GB",
    "about": {
      "@type": "Thing",
      "name": "AI-friendly web design and implementation"
    },
    "keywords": ["AI agents", "web design", "accessibility", "Schema.org", "semantic HTML", "llms.txt", "identity delegation", "agent-mediated commerce"],
    "isPartOf": {
      "@type": "Book",
      "name": "The Invisible Users",
      "url": "https://allabout.network/invisible-users"
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is The Invisible Users about?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Invisible Users examines how modern web design optimised for human users fails for AI agents, and how fixing this benefits everyone. The book provides practical guidance for making websites accessible to both humans and AI agents through semantic HTML, explicit state management, and structured data.",
          "dateCreated": "2026-01-11",
          "author": {
            "@type": "Person",
            "name": "Tom Cranstoun"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "Who should read this book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The book targets web professionals, agent system developers, business leaders, and partners evaluating opportunities in agent-mediated commerce.",
          "dateCreated": "2026-01-11",
          "author": {
            "@type": "Person",
            "name": "Tom Cranstoun"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "What is the Web Audit Suite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Web Audit Suite is a comprehensive Node.js tool that analyses websites for AI agent compatibility, SEO performance, accessibility compliance (WCAG 2.1), performance metrics, and security headers. It implements the patterns described in the book and generates detailed reports.",
          "dateCreated": "2026-01-11",
          "author": {
            "@type": "Person",
            "name": "Tom Cranstoun"
          },
          "upvoteCount": 0
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start with Appendix F (Implementation Roadmap) which provides priority-based guidance. Priority 1 quick wins include adding semantic HTML, implementing proper form field naming, and adding Schema.org structured data. Appendix A (Implementation Cookbook) provides code examples for common patterns.",
          "dateCreated": "2026-01-11",
          "author": {
            "@type": "Person",
            "name": "Tom Cranstoun"
          },
          "upvoteCount": 0
        }
      }
    ],
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-12",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/faq.html"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": "https://allabout.network/invisible-users/web/faq.html"
        }
      ]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".faq-item"]
    },
    "potentialAction": {
      "@type": "AskAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "mailto:tom.cranstoun@gmail.com?subject=Question about The Invisible Users",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>Frequently Asked Questions</h1>
    <p>Common questions about The Invisible Users</p>
  </header>

  <main class="container" role="main" data-load-state="complete">

    <section class="faq-section" data-section-type="about-book">
      <h2>About the Book</h2>

      <article class="faq-item" id="what-is-book">
        <h3>What is The Invisible Users about?</h3>
        <p>The Invisible Users examines how modern web design optimised for human users fails for AI agents, and how fixing this benefits everyone. The book provides practical guidance for making websites accessible to both humans and AI agents through semantic HTML, explicit state management, and structured data.</p>
      </article>

      <article class="faq-item" id="who-should-read">
        <h3>Who should read this book?</h3>
        <p>The book targets four primary audiences: Web Professionals (developers, designers), Agent System Developers (building AI agents), Business Leaders (CTOs, product owners), and Partners & Investors (evaluating opportunities in agent-mediated commerce).</p>
      </article>

    </section>

    <section class="faq-section" data-section-type="implementation">
      <h2>Implementation</h2>

      <article class="faq-item" id="web-audit-suite">
        <h3>What is the Web Audit Suite?</h3>
        <p>The Web Audit Suite is a comprehensive Node.js tool that analyses websites for AI agent compatibility, SEO performance, accessibility compliance (WCAG 2.1), performance metrics, and security headers. It implements the patterns described in the book and generates detailed reports. Available as a separate purchase or professional audit service.</p>
      </article>

      <article class="faq-item" id="getting-started">
        <h3>How do I get started with implementation?</h3>
        <p>Start with Appendix F (Implementation Roadmap) which provides priority-based guidance. Priority 1 quick wins include adding semantic HTML, implementing proper form field naming, and adding Schema.org structured data. Appendix A (Implementation Cookbook) provides code examples for common patterns.</p>
      </article>

    </section>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
    <p>Last updated: January 2026</p>
  </footer>

  <a href="index.html" class="floating-home-button" aria-label="Back to Home">Home</a>
  <a href="#" class="floating-top-button" aria-label="Back to Top">Top</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 10. 404 Error Page: Page Not Found

The 404 error page provides helpful guidance when content is unavailable. For AI agents, it needs clear navigation suggestions and alternative paths.

**AI-friendly patterns demonstrated:**

- HTTP 404 status code (set by server)
- llms-txt meta tag directing agents to site guidance
- Clear error explanation with data-error-type attribute
- Suggested alternative pages
- Search functionality or sitemap link
- Contact information for persistent issues

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="Page not found - The requested page could not be found on The Invisible Users website">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">
  <meta name="llms-txt" content="/llms.txt">

  <title>404 - Page Not Found | The Invisible Users</title>

  <!-- Schema.org structured data for error page -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "404 - Page Not Found",
    "description": "The requested page could not be found",
    "url": "https://allabout.network/invisible-users/web/site/404.html",
    "isPartOf": {
      "@type": "WebSite",
      "name": "The Invisible Users",
      "url": "https://allabout.network/invisible-users"
    },
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/404.html"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "404",
          "item": "https://allabout.network/invisible-users/web/404.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <main class="error-container" role="main" data-error-type="404" data-error-code="404">
    
    <div class="error-code">404</div>
    <h1>Page Not Found</h1>
    <p class="error-message">The page you're looking for doesn't exist or has been moved.</p>

    <div class="suggestions">
      <h2>Try These Instead</h2>
      <ul>
        <li><a href="index.html">→ Home Page</a> - Return to the main page</li>
        <li><a href="collection.html">→ All Appendices</a> - Browse the complete collection</li>
        <li><a href="faq.html">→ FAQ</a> - Common questions and answers</li>
        <li><a href="contact.html">→ Contact</a> - Get in touch for help</li>
      </ul>
    </div>

    <p style="color: #6b7280; margin-top: 2rem;">
      If you believe this is an error, please <a href="contact.html" style="color: #2563eb;">contact us</a> and let us know which page you were trying to reach.
    </p>

    <div style="margin-top: 3rem;">
      <a href="index.html" class="btn">Return Home</a>
    </div>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
  </footer>
  <script src="js/common.js"></script>
</body>
</html>
```

**Serving 404 Pages with AI Guidance:**

If your platform includes an API to serve content (API bus, headless CMS, etc.), add AI error handling to API endpoints as well. The patterns below show both static file serving (Nginx) and dynamic API responses (Express.js).

**Nginx Configuration:**

```nginx
# Enhanced Nginx configuration for contextual error handling
location @llms_fallback {
    try_files /llms.txt =404;
    add_header Content-Type text/markdown;
    add_header X-Content-Section "optional-details";
}

error_page 404 = @llms_fallback;
```

**Express.js API Handler:**

```javascript
// 404 handler - should be after all other routes
app.use((req, res, next) => {
    res.status(404)
       .setHeader('X-llms-txt', '/llms.txt')
       .sendFile('/404.html');
});

// General error handler - must be last
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status)
       .setHeader('X-llms-txt', '/llms.txt')
       .json({
           error: err.message,
           llms_guidance: '/llms.txt',
           status: status
       });
});
```

The 404 page serves humans with clear navigation options whilst directing AI agents to llms.txt for comprehensive site guidance through the llms-txt meta tag. Server-side handlers add the X-llms-txt header for programmatic access.

---

## 11. Privacy Policy Page: Legal Information

The privacy policy page explains data collection and usage. For AI agents, it needs clear section structure and plain language explanations.

**AI-friendly patterns demonstrated:**

- WebPage schema with Article type for legal content
- Clear section headings with data-section-id attributes
- Table of contents with anchor links
- Last updated date with machine-readable format
- Contact information for privacy queries

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Results | The Invisible Users</title>
  <meta name="ai-preferred-access" content="html">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    "name": "Search Results",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/search.html"
    },
    "inLanguage": "en-GB",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Search",
          "item": "https://allabout.network/invisible-users/web/search.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header><h1>Search Results</h1></header>
  <main class="container" role="main" data-search-results="3" data-search-query="AI agents">
    <div class="search-box" role="search">
      <input type="search" name="q" placeholder="Search..." value="AI agents" aria-label="Search">
    </div>
    <p style="margin: 2rem 0; color: #6b7280;">Found 3 results for "AI agents"</p>
    <article class="search-result" data-result-position="1">
      <h3><a href="index.html">The Invisible Users - Home</a></h3>
      <p>A practical guide to designing websites that work for AI agents and everyone else...</p>
    </article>
    <article class="search-result" data-result-position="2">
      <h3><a href="blog-post.html">Why Modern Forms Break AI Agents</a></h3>
      <p>Examining how modern web forms fail for AI agents and providing practical patterns...</p>
    </article>
    <article class="search-result" data-result-position="3">
      <h3><a href="collection.html">Appendices Collection</a></h3>
      <p>Complete collection of appendices providing implementation guidance for AI-friendly web design...</p>
    </article>
  </main>
  <footer><p>&copy; 2026 Tom Cranstoun. All rights reserved.</p></footer>
  <a href="index.html" class="floating-home-button">Home</a>
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 12. Pricing Page: Service Tiers Comparison

The pricing page compares multiple service or product tiers side-by-side. For AI agents, it needs clear price structure with PriceSpecification schema.

**AI-friendly patterns demonstrated:**

- Multiple Offer schemas with priceSpecification
- Comparison table with data-tier attributes
- Feature lists with data-included attributes
- Clear pricing with data-price and data-currency

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="Web Audit Suite pricing - compare self-service tool, professional audit, and agency partnership options">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>Pricing | Web Audit Suite</title>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Audit Suite Pricing",
    "description": "Compare pricing options for the Web Audit Suite - self-service tool, professional audit, and agency partnership",
    "inLanguage": "en-GB",
    "datePublished": "2026-01-11",
    "dateModified": "2026-01-11",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://allabout.network/invisible-users/web/pricing.html"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/web/index.html"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pricing",
          "item": "https://allabout.network/invisible-users/web/pricing.html"
        }
      ]
    },
    "about": {
      "@type": "Product",
      "name": "Web Audit Suite",
      "description": "Comprehensive website analysis tool for AI agent compatibility, SEO, accessibility, and performance",
      "image": "https://allabout.network/images/web-audit-suite.jpg",
      "category": "Web Development Tools",
      "brand": {
        "@type": "Brand",
        "name": "Digital Domain Technologies Ltd"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Self-Service Tool",
          "description": "One-time purchase of the Web Audit Suite tool with unlimited audits",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://allabout.network/invisible-users/web/pricing.html",
          "seller": {
            "@type": "Person",
            "name": "Tom Cranstoun",
            "email": "tom.cranstoun@gmail.com",
            "url": "https://allabout.network"
          },
          "itemCondition": "https://schema.org/NewCondition",
          "category": "Software Tool",
          "eligibleCustomerType": "Business",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Web Audit Suite",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Cross-platform (Node.js)"
          }
        },
        {
          "@type": "Offer",
          "name": "Professional Audit",
          "description": "Expert analysis with detailed report and implementation guidance",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://allabout.network/invisible-users/web/pricing.html",
          "seller": {
            "@type": "Person",
            "name": "Tom Cranstoun",
            "email": "tom.cranstoun@gmail.com",
            "url": "https://allabout.network"
          },
          "itemCondition": "https://schema.org/NewCondition",
          "category": "Professional Services",
          "eligibleCustomerType": "Business",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Web Audit",
            "serviceType": "Website Analysis and Consulting"
          }
        },
        {
          "@type": "Offer",
          "name": "Agency Partnership",
          "description": "White-label reports and referral arrangement for agencies",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://allabout.network/invisible-users/web/pricing.html",
          "seller": {
            "@type": "Person",
            "name": "Tom Cranstoun",
            "email": "tom.cranstoun@gmail.com",
            "url": "https://allabout.network"
          },
          "itemCondition": "https://schema.org/NewCondition",
          "category": "Partnership",
          "eligibleCustomerType": "Business",
          "itemOffered": {
            "@type": "Service",
            "name": "Agency Partnership Programme",
            "serviceType": "White-label Audit Services"
          }
        }
      ]
    },
    "author": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network",
      "sameAs": [
        "https://www.linkedin.com/in/tom-cranstoun/",
        "https://github.com/Digital-Domain-Technologies-Ltd"
      ]
    },
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://allabout.network/invisible-users/web/contact.html",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>Pricing</h1>
    <p>Choose the option that works best for you</p>
  </header>

  <main class="container" role="main" data-load-state="complete">

    <div class="pricing-grid">

      <article class="pricing-card" data-tier="basic" data-price-type="one-time">
        <h3>Self-Service Tool</h3>
        <div class="price">Contact for pricing</div>
        <p class="price-note">One-time purchase</p>
        <ul>
          <li data-included="true">Complete Web Audit Suite tool</li>
          <li data-included="true">Run unlimited audits</li>
          <li data-included="true">Analyse any website</li>
          <li data-included="true">Generate detailed reports</li>
          <li data-included="true">Command-line and API access</li>
          <li data-included="true">Documentation included</li>
        </ul>
        <a href="contact.html" class="btn">Get Quote</a>
      </article>

      <article class="pricing-card featured" data-tier="professional" data-price-type="per-project">
        <h3>Professional Audit</h3>
        <div class="price">Contact for pricing</div>
        <p class="price-note">Per-project pricing</p>
        <ul>
          <li data-included="true">Expert analysis by author</li>
          <li data-included="true">Detailed findings report</li>
          <li data-included="true">Priority-based recommendations</li>
          <li data-included="true">Implementation guidance</li>
          <li data-included="true">Code examples for your stack</li>
          <li data-included="true">Video walkthrough</li>
          <li data-included="true">30 days email support</li>
        </ul>
        <a href="contact.html" class="btn">Request Audit</a>
      </article>

      <article class="pricing-card" data-tier="agency" data-price-type="partnership">
        <h3>Agency Partnership</h3>
        <div class="price">Partnership</div>
        <p class="price-note">For agencies</p>
        <ul>
          <li data-included="true">White-label audit reports</li>
          <li data-included="true">Referral arrangement</li>
          <li data-included="true">Joint client presentations</li>
          <li data-included="true">Technical support</li>
          <li data-included="true">Training for your team</li>
          <li data-included="true">Co-marketing opportunities</li>
          <li data-included="true">Priority support</li>
        </ul>
        <a href="contact.html" class="btn">Discuss Partnership</a>
      </article>

    </div>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
    <p>Last updated: January 2026</p>
  </footer>

  <a href="index.html" class="floating-home-button" aria-label="Back to Home">Home</a>
  <a href="#" class="floating-top-button" aria-label="Back to Top">Top</a>
  <script src="js/common.js"></script>
</body>
</html>

```

## 12. Author/Profile Page: Personal Biography

The author or profile page establishes personal identity and expertise. For AI agents, it needs comprehensive Person schema with credentials, expertise areas, and professional affiliations.

**AI-friendly patterns demonstrated:**

- ProfilePage schema wrapping Person entity
- Complete Person schema with givenName/familyName
- Educational credentials (hasCredential array)
- Professional expertise (knowsAbout array)
- Organization affiliation (worksFor)
- Social profiles (sameAs array)
- Breadcrumb navigation
- Data attributes for expertise areas

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Tom Cranstoun">
  <meta name="description" content="About Tom Cranstoun - Software consultant, author of The Invisible Users, and advocate for building websites that work for AI agents and everyone else.">

  <!-- AI-specific meta tags (PROPOSED - see Appendix L) -->
  <meta name="ai-preferred-access" content="html">
  <meta name="ai-content-policy" content="summaries-allowed, full-extraction-allowed">
  <meta name="ai-freshness" content="monthly">
  <meta name="ai-structured-data" content="json-ld">
  <meta name="ai-attribution" content="required" text="Source: The Invisible Users by Tom Cranstoun, https://allabout.network/invisible-users/">

  <title>About Tom Cranstoun | The Invisible Users</title>

  <!-- Schema.org structured data for author/person page -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Tom Cranstoun - Author Profile",
    "description": "Software consultant and author of The Invisible Users, examining how modern web design affects AI agents and everyone else",
    "inLanguage": "en-GB",
    "datePublished": "2026-01-12",
    "dateModified": "2026-01-12",
    "image": "https://allabout.network/images/tom-cranstoun.jpg",
    "url": "https://allabout.network/invisible-users/web/author.html",
    "mainEntity": {
      "@type": "Person",
      "name": "Tom Cranstoun",
      "givenName": "Tom",
      "familyName": "Cranstoun",
      "image": "https://allabout.network/images/tom-cranstoun.jpg",
      "jobTitle": "Software Consultant, Author",
      "email": "tom.cranstoun@gmail.com",
      "url": "https://allabout.network/tom-cranstoun.html",
      "sameAs": [
        "https://www.linkedin.com/in/tom-cranstoun/",
        "https://github.com/Digital-Domain-Technologies-Ltd"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Digital Domain Technologies Ltd",
        "url": "https://allabout.network"
      },
      "knowsAbout": [
        "Web Development",
        "AI Agent Systems",
        "Software Architecture",
        "Accessibility",
        "Schema.org",
        "Semantic HTML",
        "Agent-Friendly Design"
      ],
      "description": "Software consultant with over 15 years of experience building web systems. Author of The Invisible Users, examining how modern web design optimized for human users fails for AI agents, and how fixing this benefits everyone.",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "educationalLevel": "Master of Science",
          "name": "MSc in Software Engineering"
        }
      ],
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "English",
          "alternateName": "en"
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://allabout.network/invisible-users/web/index.html"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About the Author",
          "item": "https://allabout.network/invisible-users/web/author.html"
        }
      ]
    }
  }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <h1>About the Author</h1>
    <p>Tom Cranstoun - Software Consultant & Author</p>
  </header>

  <main class="container" role="main" data-load-state="complete">

    <section class="intro-section" style="max-width: 900px; margin: 0 auto 3rem;">
      <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
        <div style="flex: 0 0 200px;">
          <img
            src="https://allabout.network/images/tom-cranstoun.jpg"
            alt="Tom Cranstoun"
            style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
            data-person-image="true"
          >
        </div>
        <div style="flex: 1; min-width: 300px;">
          <h2 style="font-size: 2rem; color: #1e40af; margin-bottom: 1rem;">Tom Cranstoun</h2>
          <p style="font-size: 1.15rem; color: #4b5563; margin-bottom: 1rem;">
            Software consultant with over 15 years of experience building web systems that serve both humans and machines. Author of <em>The Invisible Users</em>, examining the collision between modern web design and AI agents.
          </p>
          <div style="margin-top: 1.5rem;">
            <a href="mailto:tom.cranstoun@gmail.com" class="btn" style="display: inline-block; margin: 0.5rem 0.5rem 0.5rem 0;">Contact</a>
            <a href="https://www.linkedin.com/in/tom-cranstoun/" class="btn btn-secondary" style="display: inline-block; margin: 0.5rem 0.5rem 0.5rem 0;">LinkedIn</a>
            <a href="https://github.com/Digital-Domain-Technologies-Ltd" class="btn btn-secondary" style="display: inline-block; margin: 0.5rem 0.5rem 0.5rem 0;">GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <section style="max-width: 900px; margin: 0 auto 3rem;">
      <h2 style="font-size: 2rem; color: #1e40af; margin-bottom: 1.5rem;">Background</h2>
      <p style="font-size: 1.1rem; color: #4b5563; margin-bottom: 1rem;">
        Tom holds an MSc in Software Engineering and has spent his career building web applications that need to work reliably for diverse users and systems.
      </p>
      <p style="font-size: 1.1rem; color: #4b5563; margin-bottom: 1rem;">
        His work focuses on the practical intersection of web development, accessibility, and agent systems. He advocates for design patterns that serve both human users and AI agents without compromise.
      </p>
    </section>

    <section style="max-width: 900px; margin: 0 auto 3rem;">
      <h2 style="font-size: 2rem; color: #1e40af; margin-bottom: 1.5rem;">Expertise</h2>
      <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
        <article class="feature-card" data-expertise="web-development">
          <h3>Web Development</h3>
          <p>15+ years building production web applications with focus on reliability, accessibility, and maintainability.</p>
        </article>

        <article class="feature-card" data-expertise="ai-agents">
          <h3>AI Agent Systems</h3>
          <p>Deep understanding of how AI agents interact with websites, from CLI tools to full browser automation.</p>
        </article>

        <article class="feature-card" data-expertise="architecture">
          <h3>Software Architecture</h3>
          <p>Designing systems that balance human needs with machine readability, creating universal compatibility.</p>
        </article>

        <article class="feature-card" data-expertise="accessibility">
          <h3>Accessibility</h3>
          <p>Advocate for patterns that improve experiences for everyone - humans with disabilities and AI agents alike.</p>
        </article>

        <article class="feature-card" data-expertise="schema-org">
          <h3>Structured Data</h3>
          <p>Practical implementation of Schema.org, semantic HTML, and explicit state management for machine-readable content.</p>
        </article>

        <article class="feature-card" data-expertise="technical-writing">
          <h3>Technical Communication</h3>
          <p>Translating complex technical concepts into practical, actionable guidance for developers and business leaders.</p>
        </article>
      </div>
    </section>

    <section style="max-width: 900px; margin: 0 auto 3rem;">
      <h2 style="font-size: 2rem; color: #1e40af; margin-bottom: 1.5rem;">The Invisible Users</h2>
      <p style="font-size: 1.1rem; color: #4b5563; margin-bottom: 1rem;">
        <em>The Invisible Users</em> examines a critical challenge in modern web development: websites optimized for human users often fail for AI agents. The book provides practical patterns that work for both audiences, demonstrating that improving agent compatibility also enhances human accessibility.
      </p>
      <p style="font-size: 1.1rem; color: #4b5563; margin-bottom: 1rem;">
        Published Q1 2026, the book includes 11 chapters (~57,000 words), 10 freely accessible appendices, and production-ready code examples. It addresses four audiences: web professionals implementing agent-friendly patterns, agent system developers building reliable automation, business leaders navigating agent-mediated commerce, and partners evaluating opportunities in the emerging agent economy.
      </p>
      <div style="margin-top: 2rem;">
        <a href="sales.html" class="btn" style="display: inline-block; margin-right: 1rem;">Get the Book</a>
        <a href="index.html" class="btn btn-secondary" style="display: inline-block;">Learn More</a>
      </div>
    </section>

    <section style="max-width: 900px; margin: 0 auto 3rem;">
      <h2 style="font-size: 2rem; color: #1e40af; margin-bottom: 1.5rem;">Philosophy</h2>
      <blockquote style="border-left: 4px solid #3b82f6; padding-left: 1.5rem; font-style: italic; color: #4b5563; font-size: 1.15rem; margin: 2rem 0;">
        "The patterns that help AI agents also improve accessibility for humans. Persistent error messages, clear structure, semantic markup - these benefit everyone, not just machines. When we design for universal compatibility, everyone wins."
      </blockquote>
      <p style="font-size: 1.1rem; color: #4b5563; margin-top: 2rem;">
        Tom advocates for practical, production-ready solutions over theoretical frameworks. Every pattern in his work has been tested in real applications, ensuring the guidance translates directly to working code.
      </p>
    </section>

    <section style="max-width: 900px; margin: 0 auto 3rem;">
      <h2 style="font-size: 2rem; color: #1e40af; margin-bottom: 1.5rem;">Digital Domain Technologies</h2>
      <p style="font-size: 1.1rem; color: #4b5563; margin-bottom: 1rem;">
        Tom runs Digital Domain Technologies Ltd, providing software consulting services with a focus on building web systems that work reliably for both human users and AI agents.
      </p>
      <p style="font-size: 1.1rem; color: #4b5563;">
        Services include web audits for AI agent compatibility, technical architecture consulting, and training on agent-friendly design patterns.
      </p>
      <div style="margin-top: 2rem;">
        <a href="consulting.html" class="btn" style="display: inline-block; margin-right: 1rem;">Professional Audits</a>
        <a href="https://allabout.network" class="btn btn-secondary" style="display: inline-block;">Visit Website</a>
      </div>
    </section>

    <section class="cta-section">
      <h2>Get in Touch</h2>
      <p>Interested in speaking engagements, consulting, or collaboration opportunities? Let's talk.</p>
      <div class="hero-buttons">
        <a href="mailto:tom.cranstoun@gmail.com" class="btn" style="background: white; color: #2563eb;">Email Tom</a>
        <a href="contact.html" class="btn" style="background: #1e40af; color: white;">Contact Page</a>
      </div>
    </section>

  </main>

  <footer role="contentinfo">
    <div class="contact-links">
      <a href="mailto:tom.cranstoun@gmail.com">Email</a>
      <a href="https://allabout.network">Website</a>
      <a href="https://www.linkedin.com/in/tom-cranstoun/">LinkedIn</a>
      <a href="https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript">GitHub</a>
    </div>
    <p>&copy; 2026 Tom Cranstoun. All rights reserved.</p>
    <p>Last updated: January 2026</p>
  </footer>

  <a href="index.html" class="floating-home-button" aria-label="Back to Home">Home</a>
  <a href="#" class="floating-top-button" aria-label="Back to Top">Top</a>
  <script src="js/common.js"></script>
</body>
</html>

```

---

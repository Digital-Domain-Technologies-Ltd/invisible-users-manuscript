Stuff to be done before we publish

---


Add a meta type for reading time using these
 values:
timeRequired: PT60M

ISO 8601 duration format (60 minutes minimum)
Represents the 60-75 minute completion time
Schema.org standard for educational content duration
educationalLevel: Intermediate

Indicates the target audience skill level
Helps AI agents and users understand prerequisites
The PT60M format is the standard ISO 8601 duration notation where:

P = Period
T = Time component follows
60M = 60 minutes
---

we need to read the news.html and add the information throughout the book

---


I asked Claude about one of my pages

he said

Based on my analysis, here are the meta tags that are commonly recommended but missing from notebook.html:

Missing Meta Tags (Recommended):
Open Graph tags (for Facebook, LinkedIn, other social platforms)
Twitter Card tags (for Twitter/X sharing)
theme-color (for browser theme customization)
robots (for search engine crawler instructions)
keywords (though less important now, still used by some search engines)
Let me add these:

Edit notebook.html
Added 20 lines
Perfect! I've added comprehensive social media and SEO meta tags to notebook.html. Here's what was added:

New Meta Tags Added:
1. Standard SEO Meta Tags
keywords: Relevant search terms for SEO
robots: index, follow - allows search engines to index and follow links
theme-color: #035fe6 - browser UI color (matches your link color from design system)
2. Open Graph Tags (Facebook, LinkedIn, WhatsApp, etc.)
og:type: website
og:url: Canonical URL for social sharing
og:title: Full descriptive title
og:description: Page description
og:image: Social media preview image
og:site_name: The Invisible Users
og:locale: en_GB (British English)
3. Twitter Card Tags (Twitter/X)
twitter:card: summary_large_image (large preview card)
twitter:url: Page URL
twitter:title: Concise title
twitter:description: Shorter description for Twitter
twitter:image: Preview image
twitter:creator: @tomcranstoun (your Twitter handle)
Benefits:
Better social media sharing: Rich previews when shared on Facebook, Twitter, LinkedIn
Improved SEO: Keywords and robots meta help search engines understand content
Brand consistency: Theme color matches your design system
Mobile optimization: Theme color affects mobile browser UI
Note: The Open Graph image URL (https://allabout.network/images/invisible-users-og.jpg) should be created if it doesn't exist yet. Recommended size: 1200×630px for optimal social media display.

Think about this

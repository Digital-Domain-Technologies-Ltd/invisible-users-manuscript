# Essential Site Files for AI Agent Compatibility

This directory contains essential configuration files that belong in the root of your website to guide AI agents and search engines.

## Files

### robots.txt

**Purpose:** Access control for web crawlers and AI agents

**Location:** Place at `https://yoursite.com/robots.txt` (must be in site root)

**Score Impact:** +25 points (Recipe 7, Appendix A)

**Key features:**
- Controls which paths AI agents can access
- Separates public content (products, reviews) from private areas (admin, accounts)
- Includes specific rules for major AI agents (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot)
- References sitemap.xml for content discovery

**Customization required:**
- Replace `example.com` with your actual domain
- Adjust `/products/`, `/categories/`, `/reviews/` paths to match your site structure
- Update contact email in header comment
- Add or remove AI agent user-agents as needed

### llms.txt

**Purpose:** Structured guidance for AI systems on how to interact with your site

**Location:** Place at `https://yoursite.com/llms.txt` (must be in site root)

**Score Impact:** +20 points (Recipe 8, Appendix A)

**Key features:**
- Site description and purpose
- Rate limiting and caching policies
- Content usage permissions
- API access information (if available)
- Training data usage guidelines
- Error handling instructions
- Contact information for AI-related inquiries

**Customization required:**
- Replace `TechStore` with your site/company name
- Update all `techstore.com` URLs to your domain
- Adjust rate limits based on your infrastructure capacity
- Modify content restrictions to match your authentication requirements
- Update API endpoints if you provide an API
- Adjust training usage permissions based on your content licensing
- Replace all email addresses with your actual contact addresses

**Site type categories** (choose one for your llms.txt):
- API-Driven: Technical documentation, service interfaces
- Content-Driven: Blogs, news, informational sites
- E-Commerce: Product and service sales
- Document-Driven: Research, white papers, documentation
- Informative: Educational platforms, learning resources
- Entertainment: Media, games, leisure content

**Functionality types** (choose one):
- Static: Fixed content, minimal dynamic features
- Dynamic: Content changes based on interaction
- Interactive: Forms, calculators, user input
- Transactional: Purchases, banking, data exchange
- Community-Driven: User-generated content, forums

## Usage

### Quick Installation

Copy both files to your website root:

```bash
cp site-files/robots.txt /var/www/html/robots.txt
cp site-files/llms.txt /var/www/html/llms.txt
```

### Verification

Test that files are accessible:

```bash
curl https://yoursite.com/robots.txt
curl https://yoursite.com/llms.txt
```

Both should return HTTP 200 with the file contents.

### Reference from robots.txt

Add this comment near the top of your robots.txt to cross-reference:

```text
# AI agent guidance
# See /llms.txt for interaction policies
```

### HTTP Headers (Optional)

Enhance discoverability by adding Link headers (see platform-specific configs in parent directories):

```http
Link: <https://yoursite.com/llms.txt>; rel="llms-txt"
```

## Standards and Specifications

- **robots.txt:** Follows Robots Exclusion Protocol (1994) with modern AI agent extensions
- **llms.txt:** Follows llmstxt.org specification for AI content interaction

## Related Documentation

- **Recipe 7 (robots.txt):** Appendix A, line 457-502
- **Recipe 8 (llms.txt):** Appendix A, line 504-555
- **Comprehensive llms.txt guide:** Appendix D, line 1343-1477
- **Full specification:** <https://llmstxt.org>

## Common Patterns

### E-commerce Site

Use the provided templates as-is (TechStore example), adjusting:
- Product/category paths
- API endpoints
- Rate limits based on capacity

### Content/Blog Site

Modify llms.txt to emphasize:
- Article accessibility
- Attribution requirements
- Training data permissions
- Content freshness (update frequency)

### Local Business

Simplify llms.txt to focus on:
- Business hours and location
- Services offered
- Contact information
- Review/testimonial access

### SaaS/API Service

Emphasize in llms.txt:
- API documentation links
- Authentication methods
- Rate limits and pricing tiers
- Developer resources

## Maintenance

- **robots.txt:** Review quarterly, update when adding new protected areas
- **llms.txt:** Update whenever site structure, API, or policies change
- Both files should be version controlled alongside your website code

## Validation

Use these tools to verify your implementation:

- **robots.txt validator:** Google Search Console robots.txt Tester
- **llms.txt validator:** Manual review against llmstxt.org spec
- **Accessibility test:** `curl -I https://yoursite.com/robots.txt` (should return 200)

## License

These examples follow Creative Commons BY-SA 4.0 (Attribution-ShareAlike)

Attribution: "AI-Native Website Code Examples from The Invisible Users by Tom Cranstoun"

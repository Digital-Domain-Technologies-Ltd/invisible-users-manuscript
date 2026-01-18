# Appendix C: Web Audit Suite User Guide

Complete guide to auditing your website for AI agent compatibility using Web Audit Suite.

## Installation

```bash
git clone https://github.com/ddttom/invisible-users.git
cd invisible-users/packages/web-audit-suite
npm install
```

## Basic Usage

### Single Page Audit

```bash
# Audit your homepage
npm start -- -s https://example.com -c 10
```

### Full Site Audit

```bash
# Audit from sitemap (unlimited pages)
npm start -- -s https://example.com/sitemap.xml -c -1

# Audit specific number of pages
npm start -- -s https://example.com/sitemap.xml -c 50
```

### Complete Audit with All Reports

```bash
npm start -- -s https://example.com \
  --enable-history \
  --generate-dashboard \
  --generate-executive-summary
```

### Performance-Optimized Audits

The Web Audit Suite includes production-tested performance optimizations for large sites:

```bash
# Custom browser pool and concurrency for large sites
npm start -- -s https://example.com --browser-pool-size 5 --url-concurrency 5

# Expected performance: 100 URLs in ~10 minutes
```

**Performance Features:**

- **Browser pooling**: 97% reduction in browser launch overhead
- **Concurrent processing**: Multiple URLs analyzed simultaneously
- **Adaptive rate limiting**: Server-friendly dynamic concurrency
- **Cache validation**: Automatic staleness checking

### Pattern Extraction

Learn from your high-scoring pages to replicate success:

```bash
npm start -- -s https://example.com --extract-patterns
```

**What it does:**

- Analyzes pages with ≥70 served/rendered score
- Extracts 6 pattern categories with real examples:
  - Structured Data (JSON-LD)
  - Semantic HTML Structure
  - Standard Form Field Naming
  - Persistent Error Messages
  - Explicit State Attributes
  - llms.txt Implementation
- Provides priority (Critical/High) and effort (Low/Moderate) ratings
- Generates pattern_library.md with up to 5 examples per pattern

**Use case:** Identify what works on your best pages and apply it site-wide.

### Regression Detection

Track changes over time with CI/CD-ready regression detection:

```bash
npm start -- -s https://example.com --enable-history
```

**What it does:**

- Compares current run with baseline (establishes if missing)
- Detects regressions in 5 categories:
  - Performance (Critical: >30% increase, Warning: >15%)
  - Accessibility (Critical: any error increase)
  - SEO (Critical: >10% decrease, Warning: >5%)
  - LLM suitability (Served score critical, Rendered score warning)
  - URL count (Warning: significant change)
- Generates regression_report.md with severity classifications
- Returns non-zero exit code for critical regressions (CI/CD integration)

**Use case:** Catch breaking changes before deployment.

### Ethical Scraping

The tool respects robots.txt by default:

```bash
# Normal audit (respects robots.txt)
npm start -- -s https://example.com

# Force scraping (bypass robots.txt - use with caution)
npm start -- -s https://example.com --force-scrape
```

**robots.txt Compliance:**

- Fetches robots.txt before any crawling begins
- Interactive prompts if URLs are blocked
- Runtime force-scrape toggle available
- 100-point quality scoring for robots.txt files

**What's checked:**

- AI-specific user agents (GPTBot, ClaudeBot) - 30 pts
- Sitemap references - 20 pts
- Sensitive path protection (admin, cart, account) - 25 pts
- llms.txt references - 15 pts
- Helpful comments - 10 pts
- Completeness - 10 pts

**Quality levels:**

- **Excellent (80+)**: Professional-grade AI agent guidance
- **Good (60-79)**: Solid foundation, minor improvements needed
- **Fair (40-59)**: Basic compliance, significant gaps
- **Poor (<40)**: Critical issues, immediate action needed

## Understanding Your Reports

### Core Reports (15 files)

#### 1. LLM General Suitability (`llm_general_suitability.csv`)

**Purpose:** Overall AI agent compatibility score

**Key Columns:**

- `url`: Page URL
- `served_score`: Score for served HTML (0-100) - works for ALL agents
- `rendered_score`: Score for rendered HTML (0-100) - works for browser agents
- `overall_score`: Weighted average emphasizing served HTML
- `issues_found`: Number of compatibility issues detected
- `schemaDisambiguation`: Whether each JSON-LD block has exactly one `@type` value (Yes/No)
- `totalSchemas`: Total number of Schema.org JSON-LD blocks found
- `schemasWithMultipleTypes`: Number of schemas with multiple `@type` values (ambiguous)
- `hasInlineStyles`: Whether page contains inline CSS (Yes/No)
- `inlineStyleElements`: Count of elements with `style=` attributes
- `inlineStyleScripts`: Count of inline `<style>` tags
- `externalStylesheets`: Count of external stylesheet references
- `inlineCSSRatio`: Percentage of elements with inline styles

**Interpreting Scores:**

| Score Range | Category | Meaning | Action Required |
| ----------- | -------- | ------- | --------------- |
| 0-39 | Poor | Major issues preventing AI agent compatibility | Immediate action needed |
| 40-59 | Fair | Several essential issues to fix | Systematic improvements required |
| 60-79 | Good | Minor improvements needed | Refinement and optimization |
| 80-100 | Excellent | Works well for all AI agents | Maintain and monitor |

**Priority Fixes Based on Score:**

- **Served score <40**: Focus immediately on:
  - Add structured data (JSON-LD)
  - Make pricing complete and visible
  - Ensure state is in HTML attributes
  - Fix error message persistence

- **Rendered score <60**: Focus on:
  - Add explicit state attributes
  - Implement inline validation
  - Add loading state indicators
  - Make dynamic content semantic

**Schema Type Disambiguation (Chapter 10):**

AI agents trained on entertainment scripts (films, TV shows, scripted dialogue) may confuse professional content with fictional dialogue without explicit Schema.org type markup. The audit checks that each JSON-LD block has exactly ONE `@type` value:

- **Proper disambiguation** (+5 points): Each schema has single, specific type
- **Multiple types penalty** (-3 points per violation): Schema blocks with `["Article", "NewsArticle"]` or similar arrays

**Common violations:**

```json
{
  "@type": ["Article", "NewsArticle"],  // WRONG - creates ambiguity
  "headline": "Legal Analysis of New Legislation"
}
```

**Correct implementation:**

```json
{
  "@type": "AnalysisNewsArticle",  // RIGHT - single specific type
  "headline": "Legal Analysis of New Legislation"
}
```

Use specific types: `Legislation`, `LegalDocument`, `MedicalScholarlyArticle`, `AnalysisNewsArticle`, `TechArticle` rather than generic `Article` or multiple types.

**Inline CSS Detection (Chapter 10):**

CLI agents (Claude Code, Cline) and server-based agents cannot execute JavaScript or process inline styles. Inline CSS adds noise to DOM without providing semantic value:

- **External-only bonus** (+8 points): No inline styles, external stylesheets present
- **Inline CSS penalty** (-10 × ratio): Based on percentage of elements with inline styles

**What counts as inline CSS:**

- `style=` attributes on HTML elements
- `<style>` tags in document head or body
- Inline style scripts that manipulate styles

**Recommendation:** Move all styling to external CSS files. Use semantic HTML + external stylesheets for maximum agent compatibility.

**Dynamic Content Patterns (Chapter 2):**

The audit detects timing-dependent content patterns that confuse AI agents by changing or revealing content over time:

- `carouselsTotal`: Total number of carousels detected
- `carouselsInformational`: Carousels displaying critical content (product showcases, testimonials, portfolios)
- `carouselsDecorative`: Carousels for visual enhancement (hero banners, mastheads)
- `carouselsWithAttributes`: Carousels with proper data-slide-index and aria-label attributes
- `autoplayVideos`: Count of autoplay video/audio elements
- `autoplayWithControls`: Autoplay media with pause controls (WCAG 2.2.2 compliant)
- `animatedGifs`: Count of animated GIF images
- `gifsWithAltText`: Animated GIFs with alt text descriptions
- `hasAnimationLibraries`: Presence of animation libraries (Typed.js, TypeIt, GSAP, AOS, Animate.css)
- `visualDynamismDetected`: Visual content changes detected via screenshot comparison (typewriters, tickers, rotating text)
- `visualDynamismUniqueStates`: Number of distinct visual states observed across 3 screenshots
- `jsDependentPricing`: Price information only visible after JavaScript execution (invisible to CLI agents)

**Scoring penalties:**

- **Informational carousels without attributes**: -8 per carousel (high severity, hides critical content like product showcases)
- **Decorative carousels without attributes**: -3 per carousel (medium severity, accessibility issue)
- **Autoplay media without controls**: -8 per video (WCAG 2.2.2 violation, agent timing instability)
- **Animated GIFs without alt text**: -3 per GIF (accessibility and agent comprehension issue)
- **Animation libraries detected**: -2 informational warning (risks content invisibility)
- **Visual dynamism detected**: -5 points (screenshot comparison revealed changing content)
- **JavaScript-dependent pricing**: -15 points (critical severity, blocks CLI agent purchase recommendations)

**Visual Dynamism Detection:**

The audit takes 3 screenshots at random 2-5 second intervals and compares their visual hash. If screenshots differ, visual content changes are occurring:

- **Typewriter animations**: Text that types character-by-character ("AEM UPGRADE SPECIALISTS" → "AEM EXPERTS" → "SECURITY")
- **Rotating headlines**: Headlines that cycle through different messages
- **Ticker tapes**: Scrolling text that moves continuously
- **Fade-in sequences**: Content that appears or disappears over time

This complements library detection by catching animations implemented with custom JavaScript or CSS that don't use known libraries.

**Common issues:**

1. **Product carousels hide content**: Manual advance shows only first slide, auto-advance changes content mid-parse
2. **Typewriter text invisible**: Animated text reveals gradually, served HTML may be empty (detected via screenshot comparison)
3. **Background video without role**: Agents cannot determine if video is decorative or informational
4. **Autoplay without controls**: Violates WCAG 2.2.2, causes agent page instability
5. **Visual dynamism detected**: Content changes over time (rotating text, tickers) causing agents to miss information depending on snapshot timing

**Fixes:**

1. Add data-slide-index attributes to carousel slides with aria-label="Slide N of M"
2. Provide static "View all" alternatives for carousel content using `<details>` elements
3. Ensure animated text is fully visible in served HTML before JavaScript enhancement
4. Mark background media with data-video-role="decorative" or data-video-role="informational"
5. Add pause controls for all autoplay media (required for animations >5 seconds per WCAG 2.2.2)
6. Add alt text to all animated GIFs with aria-describedby for longer descriptions

See Chapters 2 and 11 for complete patterns and implementation guidance.

#### 2. robots.txt Quality Report (`robots_txt_quality.csv`)

**Purpose:** Evaluates robots.txt file for AI agent readiness

**Key Columns:**

- `score`: Overall quality (0-100)
- `has_ai_user_agents`: Declares AI bot user agents (boolean)
- `ai_user_agent_count`: Number of AI agents declared
- `has_sitemap`: Includes sitemap declaration (boolean)
- `has_sensitive_path_protection`: Protects admin/account paths (boolean)
- `protected_path_count`: Number of protected paths
- `has_llms_txt_reference`: References llms.txt file (boolean)
- `has_helpful_comments`: Includes explanatory comments (boolean)

**Scoring Breakdown:**

| Component | Max Points | Criteria |
| --------- | ---------- | -------- |
| AI User Agents | 30 | 3+ agents = 30pts, 1-2 agents = 15pts, 0 agents = 0pts |
| Sitemap Declaration | 20 | Present = 20pts, Missing = 0pts |
| Path Protection | 25 | 3+ paths = 25pts, 1-2 paths = 15pts, 0 paths = 0pts |
| llms.txt Reference | 15 | Present = 15pts, Missing = 0pts |
| Helpful Comments | 10 | 3+ comments = 10pts, 1-2 = 5pts, 0 = 0pts |

**Priority Fixes:**

1. **Score <50**: Add sitemap declaration and 2-3 AI user agents immediately
2. **Score 50-70**: Add protected paths and llms.txt reference
3. **Score 70-85**: Add more AI user agents and helpful comments
4. **Score 85-100**: Maintain and monitor

#### 3. llms.txt Quality Report (`llms_txt_quality.csv`)

**Purpose:** Evaluates llms.txt file quality

**Key Columns:**

- `score`: Overall quality (0-105, includes bonuses)
- `has_title`: Site title present (boolean)
- `has_description`: Description present (boolean)
- `has_contact`: Contact information present (boolean)
- `section_count`: Number of major sections
- `has_access_guidelines`: Access policies declared (boolean)
- `has_rate_limits`: Rate limits specified (boolean)
- `has_api_info`: API information provided (boolean)

**Scoring Breakdown:**

| Component | Points | Criteria |
| --------- | ------ | -------- |
| Core Elements | 40 | Title (10), Description (10), Contact (10), Last Updated (10) |
| Sections | 30 | 5+ sections (30), 3-4 sections (20), 1-2 sections (10) |
| Content Length | 15 | Substantial content (15), Moderate (10), Minimal (5) |
| External Links | 10 | 3+ links (10), 1-2 links (5), None (0) |
| Specificity | 5 | Detailed policies (5), Basic (3), Generic (0) |
| Bonus Points | 5 | Rate limits, API docs, attribution requirements |

**Priority Fixes:**

1. **No file**: Create basic llms.txt with title, description, contact
2. **Score <40**: Add access guidelines and rate limits
3. **Score 40-70**: Add API information and external links
4. **Score 70-90**: Increase detail and specificity
5. **Score 90-105**: Comprehensive, maintain and update

#### 4. SEO Reports (`seo_report.csv`, `seo_scores.csv`)

**Purpose:** SEO factors that also benefit AI agents

**Key Factors:**

- Meta descriptions present and adequate length
- Title tags optimised
- Heading hierarchy (H1, H2, H3)
- Image alt text
- Internal linking structure
- Canonical URLs

**Agent Relevance:**

SEO best practices match agent needs:

- Clear titles help agents understand page purpose
- Structured headings provide content hierarchy
- Alt text makes images interpretable
- Internal links show relationships

#### 5. Accessibility Report (`accessibility_report.csv`, `wcag_report.md`)

**Purpose:** WCAG compliance (benefits agents and humans)

**Key Factors:**

- ARIA labels and roles
- Form field associations
- Semantic HTML structure
- Keyboard navigation
- Focus management

**Agent Benefits:**

- ARIA labels provide context
- Semantic structure aids parsing
- Form associations clarify relationships
- Role attributes indicate purpose

#### 6. Image Optimization Report (`image_optimization.csv`)

**Purpose:** Image metrics, alt text quality, and compression analysis

**Key Fields:**

- Page URL
- Image URL
- File Size (KB)
- Dimensions
- Format
- Alt Text
- Alt Text Quality Score
- Is Responsive
- Lazy Loaded
- Compression Level
- Optimization Score
- Recommendations

**Agent Benefits:**

- Alt text makes images interpretable for agents
- Responsive images indicate mobile-friendly content
- Optimization recommendations improve performance for all users

#### 7. Link Analysis Report (`link_analysis.csv`)

**Purpose:** Internal/external link structure and navigation analysis

**Key Fields:**

- Source URL
- Target URL
- Link Text
- Link Type (internal/external)
- Follow Type (follow/nofollow)
- HTTP Status
- Redirect Chain
- Content Type
- In Navigation
- Link Depth
- Link Quality Score

**Agent Benefits:**

- Clear link structure aids navigation
- Descriptive link text improves context
- Navigation links help agents understand site structure

#### 8. Content Quality Report (`content_quality.csv`)

**Purpose:** Content analysis including freshness, uniqueness, and media richness

**Key Fields:**

- URL
- Word Count
- Content Freshness Score
- Content Uniqueness Score
- Grammar Score
- Media Richness Score
- Top Keywords
- Overall Content Score

**Agent Benefits:**

- Fresh content indicates current information
- Unique content reduces confusion with duplicate pages
- Rich media provides additional context when properly marked up

#### 9. Security Report (`security_report.csv`)

**Purpose:** Security headers analysis and HTTPS configuration

**Key Fields:**

- URL
- HTTPS Status
- HSTS Header
- CSP Header
- X-Frame-Options
- X-Content-Type-Options
- Security Score
- Recommendations

**Agent Benefits:**

- Secure sites build trust with agents
- Security headers indicate professional implementation
- HTTPS required for many agent interactions

### Enhanced Reports (Optional)

#### Executive Summary (`executive_summary.md`, `executive_summary.json`)

**Generated with:** `--generate-executive-summary`

**Contains:**

- High-level overview of site health
- Critical issues requiring immediate attention
- Recommended priorities
- Score trends (if history enabled)

**Use for:** Stakeholder communication, quick status checks

#### Dashboard (`dashboard.html`)

**Generated with:** `--generate-dashboard`

**Contains:**

- Visual score representations
- Historical trends (if history enabled)
- Comparative analysis
- Actionable recommendations

**Use for:** Regular monitoring, team reviews, progress tracking

#### 16. robots.txt Quality Report (`robots_quality_report.md`)

**Purpose:** Evaluate your robots.txt file for AI agent compatibility

**Key Sections:**

- **Overall Score** (0-100): Quality level (Excellent/Good/Fair/Poor)
- **Quality Criteria Breakdown**: 6 scored categories
- **Issues Found**: Specific problems detected
- **Recommendations**: Actionable improvements
- **Example robots.txt**: Suggested implementation

**Interpreting Score:**

| Score | Quality Level | Meaning |
| ----- | ------------- | ------- |
| 80+ | Excellent | Professional-grade AI agent guidance |
| 60-79 | Good | Solid foundation, minor improvements |
| 40-59 | Fair | Basic compliance, significant gaps |
| <40 | Poor | Critical issues, immediate action needed |

**Priority Fixes:**

1. **Missing AI-specific user agents** (30 pts): Add GPTBot, ClaudeBot, etc.
2. **No sitemap references** (20 pts): Add Sitemap: directives
3. **Unprotected sensitive paths** (25 pts): Block /admin, /cart, /account
4. **No llms.txt references** (15 pts): Add comments referencing llms.txt
5. **No helpful comments** (10 pts): Explain rules for maintainability

**Chapter References:**

- Chapter 5: The Content Creator's Dilemma (robots.txt best practices)
- Chapter 10: Generative Engine Optimization (AI-specific directives)
- Appendix G: Resource Directory (robots.txt examples)

#### 17. Pattern Library Report (`pattern_library.md`)

**Purpose:** Learn from your high-scoring pages

**Generated when:** `--extract-patterns` flag used

**Key Sections:**

- **Methodology**: How patterns were extracted
- **6 Pattern Categories**: Structured Data, Semantic HTML, Form Patterns, Error Handling, State Management, llms.txt
- **Real Examples**: Up to 5 examples per pattern from your site
- **Implementation Guide**: How to apply patterns site-wide
- **Validation Tools**: Links to validators

**Pattern Priority Ratings:**

- **Critical** + **Low effort**: Implement immediately
- **High** + **Moderate effort**: Plan for next sprint
- **Critical** + **Moderate effort**: Prioritize over High/Low

**Use Cases:**

1. **Replicate success**: See what works on your best pages
2. **Training material**: Show developers real examples
3. **Quality baseline**: Establish consistency standards
4. **Onboarding**: Help new team members understand patterns

**Chapter References:**

- Chapter 10: Generative Engine Optimization (pattern implementation)
- Chapter 11: Designing for Both (universal patterns)
- Appendix E: AI Patterns Quick Reference (pattern catalog)

#### 18. Regression Report (`regression_report.md`)

**Purpose:** Detect breaking changes before deployment

**Generated when:** `--enable-history` flag used

**Key Sections:**

- **Executive Summary**: Critical/warning/info counts
- **Critical Regressions**: Issues requiring immediate attention
- **Warning Regressions**: Issues to monitor
- **Informational Changes**: Non-critical updates
- **Recommendations**: Specific actions to take

**Regression Severity:**

**Critical** (Exit code 1 - CI/CD fails):

- Performance: >30% increase in load time/LCP/FCP/CLS
- Accessibility: Any error count increase
- SEO: >10% score decrease
- LLM Suitability (Served): >10% score decrease

**Warning** (Exit code 0 - CI/CD passes with warnings):

- Performance: >15% increase
- SEO: >5% score decrease
- LLM Suitability (Rendered): >10% score decrease
- URL count: Significant change

**Informational**:

- Minor improvements or degradations
- Non-critical metric changes

**CI/CD Integration:**

```bash
# In your CI/CD pipeline
npm start -- -s https://staging.example.com --enable-history

# Returns exit code 1 if critical regressions found
# Pipeline fails, preventing deployment
```

**Chapter References:**

- Chapter 12: Technical Advice (testing and validation)
- Appendix B: Battle-Tested Lessons (regression prevention)

## Prioritizing Improvements

### Step 1: Run Initial Audit

```bash
npm start -- -s https://example.com/sitemap.xml -c -1 \
  --enable-history \
  --generate-dashboard \
  --generate-executive-summary
```

### Step 2: Review Executive Summary

Focus on:

- Overall LLM suitability score
- Critical issues flagged
- Quick wins identified

### Step 3: Categorize Issues by Priority

**Critical (Fix Immediately):**

- Served HTML score <40
- robots.txt score <30
- No structured data
- Errors vanish/non-persistent
- Incomplete pricing

**High Priority (Fix This Quarter):**

- Served HTML score 40-60
- robots.txt score 30-60
- Limited structured data
- Inconsistent state attributes
- Complex form validation issues

**Medium Priority (Fix This Year):**

- Rendered HTML score <60
- llms.txt missing or basic
- SEO issues affecting discoverability
- Accessibility improvements needed

**Low Priority (Ongoing):**

- Score optimisation above 80
- Advanced features
- Competitive differentiation

### Step 4: Create Action Plan

Based on your scores:

```markdown
## Action Plan: [Your Site]

**Audit Date:** [Date]
**Overall Score:** [Score]/100
**Priority:** [Critical/High/Medium/Low]

### Immediate Actions (This Week)
1. [Issue from served HTML score]
2. [Issue from robots.txt]
3. [Issue from error persistence]

### Short Term (This Month)
1. [Structured data additions]
2. [State attribute improvements]
3. [Form validation fixes]

### Medium Term (This Quarter)
1. [robots.txt enhancement]
2. [llms.txt creation/improvement]
3. [Comprehensive structured data]

### Long Term (This Year)
1. [Advanced features]
2. [API development]
3. [Monitoring and analytics]
```

## Tracking Progress

### Run Monthly Audits

```bash
# Monthly audit with history
npm start -- -s https://example.com/sitemap.xml -c -1 \
  --enable-history \
  --generate-dashboard
```

### View Dashboard

```bash
open results/dashboard.html
```

**Dashboard shows:**

- Score trends over time
- Issue resolution tracking
- Improvement velocity
- Regression detection

### Key Metrics to Monitor

1. **Overall Score Trend**
   - Target: Steady upward trend
   - Warning: Declining or flat trend

2. **Issue Count**
   - Target: Decreasing over time
   - Warning: Increasing or stagnant

3. **Served HTML Score**
   - Target: >80 within 6 months
   - Critical: <40 requires immediate action

4. **robots.txt Quality**
   - Target: >70 within 3 months
   - Warning: <50 indicates gaps

## Common Scenarios

### Scenario 1: E-commerce Site (Low Score)

**Initial Audit Results:**

- Overall: 42/100
- Served: 38/100
- Rendered: 52/100
- robots.txt: 25/100

**Action Plan:**

Week 1:

- Add JSON-LD structured data to product pages
- Make pricing complete and visible
- Create comprehensive robots.txt

Month 1:

- Fix error message persistence
- Add state attributes to cart
- Implement inline form validation

Quarter 1:

- Create llms.txt file
- Add structured data to all pages
- Implement API endpoints

**Expected Results After Quarter 1:**

- Overall: 75-80/100
- Served: 70-75/100
- Rendered: 75-80/100
- robots.txt: 80-85/100

### Scenario 2: Content Publisher (Medium Score)

**Initial Audit Results:**

- Overall: 65/100
- Served: 72/100
- Rendered: 61/100
- robots.txt: 55/100
- llms.txt: Missing

**Action Plan:**

Week 1:

- Create llms.txt with attribution requirements
- Enhance robots.txt with AI user agents

Month 1:

- Add article structured data
- Improve meta descriptions
- Fix heading hierarchy

Quarter 1:

- Optimise content extraction policies
- Implement rate limiting headers
- Add API documentation

**Expected Results After Quarter 1:**

- Overall: 80-85/100
- Served: 85-88/100
- Rendered: 75-80/100
- robots.txt: 80-85/100
- llms.txt: 75-80/105

### Scenario 3: SaaS Application (High Score, Maintenance)

**Initial Audit Results:**

- Overall: 82/100
- Served: 85/100
- Rendered: 80/100
- robots.txt: 85/100
- llms.txt: 78/105

**Action Plan:**

Monthly:

- Run audits to detect regressions
- Monitor for new issues
- Update AI user agent list

Quarterly:

- Optimise low-scoring pages
- Review and update llms.txt
- Benchmark against competitors

Annually:

- Comprehensive review
- Implement advanced features
- Update documentation

**Maintenance Goals:**

- Keep scores above 80
- Detect regressions immediately
- Stay current with standards

## Advanced Usage

### Agency & Partner Features

The Web Audit Suite includes features specifically for agencies and partners managing multiple client sites.

**Bulk Auditing:**

```bash
# Audit multiple domains from CSV file
npm start -- --bulk prospects.csv \
  --agency-name "TechAudit Agency" \
  --agency-logo "https://techaudit.com/logo.png" \
  --output ./client-audits
```

**Features:**

- `--bulk <file>`: Run audit on multiple domains from a CSV file
  - Input: CSV with `domain` column (e.g., `domain\nexample.com\nclient2.com`)
  - Output: `bulk_audit_summary.csv` master report
- `--agency-name <string>`: Agency name for white-labeling reports
  - Replaces "Web Audit Suite" in Dashboard footer/title
- `--agency-logo <path>`: Path or URL to agency logo
  - Adds logo to Dashboard header

**Use Cases:**

- White-label reports for client delivery
- Prospect analysis for sales pipeline
- Portfolio-wide monitoring for existing clients
- Competitive analysis for market research

### Cache Management

The tool maintains a cache to improve performance on repeated audits.

**Cache Location:** `.cache` directory (automatically created)

**Cache Format:** JSON files

**Cache Naming:** MD5 hash of URLs

**Cache Control Options:**

```bash
# Use only cached data (skip fetching)
npm start -- --cache-only -o reports-from-cache

# Disable caching entirely
npm start -- --no-cache -s https://example.com

# Clear cache before starting
npm start -- --force-delete-cache -s https://example.com
```

**Cache Staleness Checking:**

The tool automatically validates cache freshness using HTTP HEAD requests:

- Checks Last-Modified header on cached pages
- Compares with cache creation time
- Invalidates cache if source is newer
- Falls back to cache if HEAD request fails

**Best Practices:**

- Clear cache periodically for fresh data
- Use `--cache-only` for report regeneration without re-crawling
- Use `--force-delete-cache` when site structure changes significantly

### Network Error Handling

The tool includes robust network error handling with automatic retry mechanisms.

**Network Error Types Detected:**

- DNS failures
- Connection timeouts
- Host unreachable errors
- Browser network errors
- SSL/TLS handshake failures
- Rate limiting errors
- Cloudflare challenges (automatic bypass attempt)

**Retry Mechanism:**

When a network error occurs:

1. The tool pauses and displays error details
2. You're prompted to retry after fixing the issue
3. Automatic retry up to 3 times
4. You can cancel the operation if needed

**Example Network Error Flow:**

```text
[ERROR] Network error: Could not connect to example.com
Reason: ETIMEDOUT
Would you like to retry? (yes/no): yes
Retrying connection... (attempt 1/3)
```

**Handling Network Issues:**

- Check internet connection before starting
- Use retry mechanism when network errors occur
- Monitor network stability during long runs
- Consider rate limiting for large sites

### Language Variant Filtering

By default, the tool skips non-English language variants to avoid duplicate content analysis.

**Default Behavior:**

- **Processed by default**: `/en`, `/us`
- **Skipped by default**: `/fr`, `/es`, `/de`, etc.

**Override:**

```bash
# Include all language variants
npm start -- -s https://example.com --include-all-languages
```

**Filtering Applies To:**

- URL extraction from sitemaps
- Report generation
- Content analysis

**Use Cases:**

- **Skip filtering** (default): Faster audits, focus on primary content
- **Include all languages**: Multilingual site audits, comprehensive analysis

### Performance Optimization Guide

#### Understanding Performance Features

The Web Audit Suite includes production-tested optimizations that reduce analysis time by 3-5x:

**Before optimization**: 100 URLs in ~45 minutes
**After optimization**: 100 URLs in ~10 minutes

#### Browser Pooling

**What it does:** Maintains 3 reusable Puppeteer browser instances

**Benefits:**

- 97% reduction in browser launch overhead
- Eliminates 2-5 second delay per URL
- Automatic restart after 50 pages to prevent memory leaks

**Configuration:**

```bash
# Default (3 browsers)
npm start -- -s https://example.com

# Larger pool for faster analysis
npm start -- -s https://example.com --browser-pool-size 5

# Disable pooling
npm start -- -s https://example.com --browser-pool-size 0
```

**When to adjust:**

- **Increase (5-7)**: Large sites (1000+ URLs), powerful hardware
- **Decrease (1-2)**: Limited memory, unstable sites, debugging
- **Disable (0)**: Troubleshooting browser issues

#### Concurrent URL Processing

**What it does:** Processes multiple URLs simultaneously

**Benefits:**

- 3-5x speedup for URL processing phase
- Efficient use of browser pool
- Integrates with adaptive rate limiting

**Configuration:**

```bash
# Default (3 concurrent)
npm start -- -s https://example.com

# Higher concurrency for large sites
npm start -- -s https://example.com --url-concurrency 5

# Sequential processing
npm start -- -s https://example.com --url-concurrency 1
```

**When to adjust:**

- **Increase (5-10)**: Fast servers, large sites, powerful hardware
- **Decrease (1-2)**: Slow servers, rate limiting issues, debugging

#### Adaptive Rate Limiting

**What it does:** Monitors server responses and adjusts concurrency

**Benefits:**

- Server-friendly (avoids overwhelming servers)
- Automatic backoff on 429/503 responses
- Gradual recovery when server stabilizes

**How it works:**

- Starts with configured concurrency (default: 3)
- Monitors for 429 (Too Many Requests) or 503 (Service Unavailable)
- Reduces concurrency on errors (exponential backoff)
- Gradually increases when server recovers
- No configuration needed - works automatically

#### Cache Staleness Checking

**What it does:** Validates cache freshness with HTTP HEAD requests

**Benefits:**

- Ensures data accuracy without re-analysis
- Automatic invalidation when source changes
- Minimal overhead (HEAD requests only)

**How it works:**

- Checks Last-Modified header on cached pages
- Compares with cache creation time
- Invalidates cache if source is newer
- Falls back to cache if HEAD request fails
- No configuration needed - works automatically

#### Recommended Configurations

**Small sites (<100 URLs):**

```bash
npm start -- -s https://example.com
# Defaults work well
```

**Medium sites (100-500 URLs):**

```bash
npm start -- -s https://example.com --browser-pool-size 5 --url-concurrency 5
```

**Large sites (500-5000 URLs):**

```bash
npm start -- -s https://example.com --browser-pool-size 7 --url-concurrency 7
```

**Very large sites (5000+ URLs):**

```bash
# Process in batches
npm start -- -s https://example.com -c 1000 --browser-pool-size 7 --url-concurrency 7
```

**Slow or rate-limited servers:**

```bash
npm start -- -s https://example.com --browser-pool-size 2 --url-concurrency 2
```

### Custom Configuration

Create `.web-audit-config.json`:

```json
{
  "concurrency": 10,
  "timeout": 30000,
  "userAgent": "Web-Audit-Suite/2.0",
  "viewport": {
    "width": 1920,
    "height": 1080
  },
  "thresholds": {
    "llm_suitability": {
      "low": 40,
      "medium": 60,
      "high": 80
    }
  }
}
```

### CI/CD Integration

Add to `.github/workflows/audit.yml`:

```yaml
name: Web Audit

on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly on Sunday
  workflow_dispatch:

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install Web Audit Suite
        run: |
          git clone https://github.com/ddttom/invisible-users.git
          cd invisible-users/packages/web-audit-suite
          npm install

      - name: Run Audit
        run: |
          cd invisible-users/packages/web-audit-suite
          npm start -- -s https://example.com/sitemap.xml -c -1 \
            --enable-history \
            --generate-dashboard

      - name: Check Thresholds
        run: |
          # Fail if score drops below threshold
          SCORE=$(jq '.overall_score' results/executive_summary.json)
          if (( $(echo "$SCORE < 70" | bc -l) )); then
            echo "Score $SCORE below threshold 70"
            exit 1
          fi

      - name: Upload Results
        uses: actions/upload-artifact@v3
        with:
          name: audit-results
          path: invisible-users/packages/web-audit-suite/results/
```

## Interpreting Specific Issues

### "Served HTML score significantly lower than rendered"

**Meaning:** Your site relies heavily on JavaScript for critical content

**Impact:** Most agents (CLI, API-based) cannot access your content

**Fix:**

1. Server-side render critical content
2. Use progressive enhancement
3. Ensure HTML contains data before JavaScript runs

### "Error messages non-persistent"

**Meaning:** Errors vanish or are only shown briefly

**Impact:** Agents miss errors, retry without fixing issues

**Fix:**

1. Remove toast notifications
2. Add persistent error summary at top of forms
3. Keep errors visible until user corrects them

### "Missing structured data"

**Meaning:** No JSON-LD, microdata, or schema.org markup

**Impact:** Agents cannot reliably extract product/article information

**Fix:**

1. Add JSON-LD script tags to pages
2. Use schema.org vocabulary
3. Start with Product, Article, or LocalBusiness types

### "Incomplete pricing information"

**Meaning:** Shows "From £99" but actual price is hidden

**Impact:** Agents compare wrong prices, users surprised at checkout

**Fix:**

1. Display total price upfront
2. Include VAT status
3. Show delivery costs
4. Use structured data for machine-readable prices

### "Multiple @type values in Schema.org blocks"

**Meaning:** JSON-LD blocks contain arrays like `["Article", "NewsArticle"]`

**Impact:** AI agents trained on entertainment scripts may confuse professional content with fictional dialogue. Multiple types create ambiguity.

**Fix:**

1. Use exactly ONE `@type` per JSON-LD block
2. Choose the most specific type: `MedicalScholarlyArticle` over `Article`
3. For legal content: use `Legislation` or `LegalDocument`
4. For business analysis: use `AnalysisNewsArticle`
5. For medical content: use `MedicalScholarlyArticle`

See Chapter 10 for complete guidance on content type disambiguation.

### "High inline CSS ratio"

**Meaning:** Many elements have `style=` attributes or inline `<style>` tags

**Impact:** CLI agents and server-based agents cannot execute inline styles. Inline CSS adds noise to DOM structure without providing semantic value.

**Fix:**

1. Move all styling to external CSS files
2. Remove `style=` attributes from HTML elements
3. Remove inline `<style>` tags from document
4. Use semantic HTML structure (proper elements, clear hierarchy)
5. Keep styling separate from content for maximum agent compatibility

CLI agents see the DOM but cannot process inline styles, making style-dependent content confusing or invisible.

### "Carousels without proper attributes"

**Meaning:** Product carousels, testimonial sliders, or portfolio galleries lack data-slide-index and aria-label attributes

**Impact:** Agents see only the first slide. Manual advance requires user interaction. Auto-advance changes content mid-parse causing timing failures.

**Fix:**

1. Add data-total-slides="5" to carousel container
2. Add data-slide-index="1", data-slide-index="2" to each slide
3. Add aria-label="Slide 1 of 5" to each slide
4. Provide static "View all" alternative using `<details>` element with data-agent-visible="true"
5. Distinguish informational (product, testimonial) from decorative (hero, banner) carousels

See Chapter 11 "Static Alternatives for Dynamic Content" for complete patterns.

### "Animation libraries detected"

**Meaning:** Typed.js, TypeIt, GSAP, AOS, or Animate.css libraries present on page

**Impact:** Animated text may be invisible in served HTML. Content reveals gradually, causing agents to miss information. Timing-dependent content extraction failures.

**Fix:**

1. Ensure all text content exists in served HTML before JavaScript enhancement
2. Use animation as progressive enhancement, not as primary content delivery
3. Add data-animation-state="complete" after animation finishes
4. Provide pause controls for animations >5 seconds (WCAG 2.2.2)

### "Autoplay media without controls"

**Meaning:** Video or audio elements with autoplay attribute but no controls attribute

**Impact:** Violates WCAG 2.2.2 (Pause, Stop, Hide). Causes agent page instability as content loads unpredictably. Agents cannot pause motion that persists >5 seconds.

**Fix:**

1. Add controls attribute to all autoplay media: `<video autoplay controls>`
2. Add muted attribute for autoplay compliance
3. Mark background videos with data-video-role="decorative"
4. Provide transcripts for informational video with data-video-role="informational"

### "Animated GIFs without alt text"

**Meaning:** IMG elements with .gif extension lack alt attributes

**Impact:** Agents cannot interpret animated visual content. Accessibility failure. Information conveyed only through motion is lost.

**Fix:**

1. Add alt text to all animated GIFs describing the animation content
2. Use aria-describedby for longer descriptions
3. Consider replacing informational GIFs with static images + text descriptions
4. Reserve animated GIFs for purely decorative purposes

### "Visual content changes detected"

**Meaning:** Screenshot comparison revealed page content changing over time (typewriter animations, rotating text, tickers)

**Impact:** Agents snapshot page at random moments, missing content that hasn't appeared yet or has already cycled away. Timing-dependent failures.

**Example:** Arbory Digital homepage cycles "AEM UPGRADE SPECIALISTS" → "AEM EXPERTS" → "SECURITY" - agents only see one variant.

**Fix:**

1. Ensure ALL text variations exist in served HTML before JavaScript enhancement
2. Add data-content-variations="AEM UPGRADE SPECIALISTS|AEM EXPERTS|SECURITY" attribute
3. Add data-content-complete="true" after animation cycle completes
4. Provide static `<noscript>` alternative showing all content
5. Mark animated containers with data-animation-type="typewriter" or data-animation-type="ticker"
6. Consider showing all variations in a list format for agents: `<ul data-agent-visible="true"><li>AEM UPGRADE SPECIALISTS</li><li>AEM EXPERTS</li><li>SECURITY</li></ul>`

**Detection method:** The audit takes 3 screenshots at random intervals (2-5 seconds apart) and compares visual hashes. Different hashes indicate visual content changes. This catches custom animations that don't use known libraries.

### JavaScript-Dependent Pricing

**Metric:** `jsDependentPricing`

**Meaning:** Price information only appears after JavaScript execution, making it invisible to CLI agents (ChatGPT Shopping, Perplexity Shopping) and server-based agents that cannot execute JavaScript.

**Why this matters:** E-commerce agents need pricing information to make purchase recommendations. If prices only appear client-side via JavaScript, CLI agents see product descriptions but no prices, blocking purchase decisions entirely.

**Common causes:**

1. **React/Vue dynamic pricing** - Price fetched from API and rendered client-side
2. **JavaScript-based currency conversion** - Shows "Loading price..." in served HTML
3. **Lazy-loaded pricing** - Price div exists but content added via JavaScript
4. **Dynamic discount calculations** - Final price computed in browser
5. **Regional pricing detection** - JavaScript determines user location and shows appropriate price

**Real-world example:** Product page shows `<div class="price"></div>` in served HTML, but actual price `$99.99` only appears after JavaScript fetches it from pricing API. ChatGPT Shopping cannot recommend this product because it sees no price.

**Penalty:** -15 points (critical severity - blocks purchase recommendations)

**How to fix:**

1. **Server-side rendering:** Render initial price in HTML using server-side templating (PHP, Django, Rails, Next.js SSR)
2. **Schema.org structured data:** Add JSON-LD with Product schema including price property
3. **Meta tags:** Include `<meta itemprop="price" content="99.99">` for fallback
4. **Data attributes:** Add `data-price="99.99"` and `data-currency="USD"` to price elements
5. **Noscript fallback:** Provide `<noscript><span class="price">$99.99</span></noscript>` alternative

**Complete example:**

```html
<!-- Served HTML (visible to all agents) -->
<div class="product" itemscope itemtype="https://schema.org/Product">
  <h1 itemprop="name">Premium Laptop</h1>

  <!-- Price visible in served HTML -->
  <div class="price"
       itemprop="offers"
       itemscope
       itemtype="https://schema.org/Offer"
       data-price="999.99"
       data-currency="USD">
    <span itemprop="price" content="999.99">$999.99</span>
    <meta itemprop="priceCurrency" content="USD">
  </div>

  <!-- JSON-LD for structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium Laptop",
    "offers": {
      "@type": "Offer",
      "price": "999.99",
      "priceCurrency": "USD"
    }
  }
  </script>

  <!-- JavaScript can enhance with regional pricing, discounts -->
  <script>
    // Progressive enhancement only - base price already visible
    enhancePricing();
  </script>
</div>
```

**Detection pattern:** Audit compares served HTML (before JavaScript) against rendered HTML (after JavaScript) using these price patterns:

- Currency symbols: `$`, `£`, `€`, `¥`
- Price formats: `$99.99`, `99.99 USD`, `£99`
- Schema.org: `itemprop="price"`
- Data attributes: `data-price=`
- Class names: `class="price"`
- JSON-LD: `"price": "99.99"`

If any pattern matches rendered HTML but NOT served HTML, pricing is JavaScript-dependent.

## Getting Help

- **Documentation:** <https://github.com/ddttom/invisible-users/blob/main/web-audit-suite/README.md>
- **Issues:** <https://github.com/ddttom/invisible-users/issues>
- **Examples:** See `web-audit-suite/examples` directory in repository

## Summary Workflow

1. **Initial Audit**: Run full site audit with all reports
2. **Review Dashboard**: Understand current state
3. **Prioritize Issues**: Critical → High → Medium → Low
4. **Implement Fixes**: Start with highest impact, lowest effort
5. **Re-audit**: Verify improvements
6. **Monitor**: Monthly audits to track progress and catch regressions
7. **Maintain**: Keep scores above thresholds

**Target Timeline:**

- Week 1: Critical issues fixed
- Month 1: High priority issues addressed
- Quarter 1: Medium priority improvements complete
- Year 1: Comprehensive AI agent readiness achieved

---

Web Audit Suite provides the measurement framework. The Implementation Cookbook (Appendix A) provides the fixes. Together, they transform your site from theory to measurable AI agent compatibility.

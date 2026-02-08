# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with content in this repository.

## Repository Overview

This is the manuscript repository for "The Invisible Users: Designing the Web for AI Agents and Everyone Else" by Tom Cranstoun. This repository is maintained as a git submodule of the main invisible-users project.

**Main Repository:** <https://github.com/Digital-Domain-Technologies-Ltd/MX-hub>
**This Repository:** <https://github.com/Digital-Domain-Technologies-Ltd/invisible-users-manuscript>

## Publication Status: In Review (Pre-Publication)

- Manuscript is complete and in review
- Publication date: Due Q1 2026
- Do NOT assume published status based on current date
- User will explicitly confirm when published
- Until then, all materials reference "Due Q1 2026"

**Copyright Notice**: All content is proprietary and confidential. Copyright © Tom Cranstoun. All rights reserved. This is a public repository for reading and reference - contributions, pull requests, and issues are not accepted.

## Submodule Context

This is a git submodule integrated at `packages/manuscript/manuscript/` in the parent repository. Key implications:

- **Build tools** are in parent repository (npm scripts for PDF generation, word counts, etc.)
- **Markdown linting** runs from parent repository
- **After pushing** changes here, update parent submodule pointer
- **.claude hooks** are adapted for submodule context

## Repository Structure

### Core Manuscript Files

**Front Matter:**

- `preface.md` - Author's journey and book introduction
- `executive-summary.md` - Condensed overview with decision tree

**Chapters (Sequential, ~78,000 words core manuscript):**

- `chapter-01-what-you-will-learn.md` - Introduction and accessibility connection (~2,894 words)
- `chapter-02-the-invisible-failure.md` - Problem identification (~5,760 words)
- `chapter-03-the-architectural-conflict.md` - Technical analysis (~4,192 words)
- `chapter-04-the-business-reality.md` - Business implications with ROI framework (~10,009 words)
- `chapter-05-the-content-creators-dilemma.md` - Creator perspective (~6,129 words)
- `chapter-06-the-security-maze.md` - Security considerations (~4,385 words)
- `chapter-07-the-legal-landscape.md` - Legal implications (~4,395 words)
- `chapter-08-the-human-cost.md` - Human impact (~4,153 words)
- `chapter-09-the-platform-race.md` - Platform competition and urgency (~5,377 words)
- `chapter-10-generative-engine-optimization.md` - Discovery patterns for SEO and GEO (~13,076 words)
- `chapter-11-designing-for-both.md` - Solution principles (~6,773 words)
- `chapter-12-technical-advice.md` - Implementation code and patterns (~11,468 words)
- `chapter-13-what-agent-creators-must-build.md` - Validation frameworks and guardrails (~9,440 words)
- `chapter-10-technical-advice.md` - Technical implementation (~9,650 words)
- `chapter-11-what-agent-creators-must-build.md` - Agent creator requirements (~5,000 words)

**Appendices (Implementation Guides, ~22,000 words):**

- `appendix-a-implementation-cookbook.md` - Quick-reference recipes (~1,900 words)
- `appendix-b-battle-tested-lessons.md` - Production learnings (~1,850 words)
- `appendix-c-web-audit-suite-guide.md` - Audit tooling guide (~2,000 words)
- `appendix-d-ai-friendly-html-guide.md` - Comprehensive HTML patterns (~9,050 words)
- `appendix-e-ai-patterns-quick-reference.md` - Data attribute reference (~1,300 words)
- `appendix-f-implementation-roadmap.md` - Priority-based roadmap (~2,750 words)
- `appendix-g-resource-directory.md` - 150+ curated resources (~1,950 words)
- `appendix-h-live-llms.md` - llms.txt example (wrapper)
- `appendix-h-live-llms.txt` - llms.txt example (source, 20 curated links)
- `appendix-i-pipeline-failure-case-study.md` - £203k error analysis (~2,500 words)

**Reference:**

- `Glossary.md` - 60+ technical terms with cross-references

### Supporting Materials

**Code Examples:**

- `agent-friendly-starter-kit/` - Good vs bad pattern demonstrations
- `code-examples/` - Production implementations
  - `apache/` - Apache HTTP server configuration
  - `nginx/` - Nginx configuration
  - `nextjs/` - Next.js examples
  - `wordpress/` - WordPress integration
  - `eds/` - Adobe Edge Delivery Services examples
  - `static-site/` - Static site generator implementations
  - `monitoring/` - Analytics and server log analysis
  - `validation/` - Verification scripts for AI compatibility

**Blog & Presentations:**

- `blog/` - Promotional materials
  - `blog.md` - Promotional blog post (~19k)
  - `blog.svg` - Blog illustration
  - `AI-Native.blog` - AI-native website implementation guide (~38k)
- `talks/` - Presentation materials
  - `members-call/` - Members call presentations

**Visual Assets:**

- `illustrations/` - Chapter illustrations
  - Source: SVG files (tracked in git)
  - Export: PNG files (gitignored, generated from parent repo via `npm run illustrations:generate`)
  - Special: `back-cover.png` must be generated manually (see Build Operations below)
- `cover-design.svg` - Book cover design (600×900)

**Build Configuration (in datalake/book-configs/bible/):**

- `metadata.yaml` - Pandoc metadata for PDF (A4 format)
- `metadata-kindle.yaml` - Metadata for Kindle/EPUB (6"×9" format)
- `cover-page.tex` - LaTeX cover page template

**Project Planning:**

- `todo.txt` - User's project task list (see below for usage guidelines)

### Project Task List (todo.txt)

**CRITICAL: This file is the USER'S personal project task list and reference.**

**Purpose:**

- Contains URLs, notes, and reminders for various project tasks
- Used by the user for planning and tracking different aspects of the solution
- Content is ephemeral and changes frequently as the user works through different tasks
- May contain URLs for images, assets, documentation links, or other resources

**How Claude Code should interact with todo.txt:**

1. **NEVER execute tasks from todo.txt autonomously**
   - Claude must NOT treat items in todo.txt as automatic instructions
   - Claude must NOT implement tasks found in todo.txt without explicit user direction

2. **User must explicitly request action**
   - The user will provide clear, direct instructions for any task they want Claude to perform
   - If a task happens to be related to something in todo.txt, the user will specify it explicitly
   - Example: "Download the images referenced in todo.txt and add them to illustrations/"

3. **Reading todo.txt is informational only**
   - Claude may read todo.txt to understand context if explicitly asked
   - Claude should not proactively offer to complete tasks listed in todo.txt
   - Claude should not suggest implementing items from todo.txt unless directly asked

4. **todo.txt is user-owned**
   - This file belongs to the user's workflow
   - Claude should not modify todo.txt unless explicitly asked
   - Claude should not assume the file structure or content format is stable

**Example - Correct interaction:**

```text
User: "Download the cover images from the URLs in todo.txt"
Claude: [Reads todo.txt, extracts URLs, downloads images as instructed]
```

**Example - Incorrect interaction:**

```text
Claude: [Reads todo.txt] "I see you have some tasks listed. Would you like me to implement them?"
→ This is WRONG - Claude should not proactively suggest implementing todo.txt items
```

## Content Themes

### The Core Argument

Modern web patterns optimized for humans (toast notifications, SPAs, progressive disclosure, visual hierarchy) often fail for AI agents. The book argues these same patterns often fail for users with disabilities, elderly users, or users under cognitive load.

**The Convergence Principle**: What AI agents need is mostly what everyone needs.

### Key Insights

1. **Session Inheritance Problem** (Chapter 6): In-browser agents inherit authenticated sessions rather than failing to authenticate. Banks cannot detect AI involvement because agents inherit proof-of-humanity tokens.

2. **Identity Delegation** (Chapters 4, 6, 9, 10): When agents make purchases, businesses lose customer identity. Multiple solution approaches exist (retailer-specific tokens, centralized repositories, blockchain attestations, browser-native delegation).

3. **Dual Responsibility Framework** (Preface): Not everything can be fixed with better HTML. Users bear responsibility for instructions they give to AI agents when dealing with banking, legal services, or commercial transactions.

4. **Agent Diversity**: The book addresses CLI agents, local (SMOL) agents, server-based agents, browser agents, browser extension assistants, and IDE-integrated browser controls.

### Standards Classification

The book clearly distinguishes:

- **Established Standards**: Schema.org, semantic HTML, ARIA - use with confidence
- **Emerging Conventions**: llms.txt - early adoption phase
- **Proposed Patterns**: ai-* meta tags, data-agent-visible - experimental but forward-compatible

## Writing Style

- **Language**: British English throughout (organise, colour, whilst)
- **Voice**: First-person narrative with technical accuracy
- **Approach**: Real, concrete examples over theoretical discussion
- **Format**: Sequential reading - each chapter builds on previous concepts
- **Chapter Titles**: No colons
- **Dashes**: Short dashes only (not em-dashes)
- **Tone**: Professional without unnecessary superlatives or emotional validation

## Working with This Repository

### Reading Files

When reading chapter files:

- Read complete chapters to understand full context
- Note word counts and structural organization
- Check for British English consistency
- Verify technical examples use simple JavaScript with minimal dependencies

### Markdown Formatting

Follow strict formatting rules (enforced by parent repo linting):

- Blank lines before/after headings
- ATX-style headings only (not setext-style underlined)
- Blank lines before/after lists and code blocks
- Code blocks must specify language
- Tables need proper spacing around pipes
- No bare URLs (wrap in angle brackets or use markdown links)
- Files must end with single newline

### Making Changes

**Important**: After making changes to this repository:

1. Commit and push changes here
2. Return to parent repository
3. Update submodule pointer:

   ```bash
   cd ../../..
   git add packages/manuscript/manuscript
   git commit -m "Update manuscript submodule to latest version"
   git push origin main
   ```

The .claude hooks will remind you about this workflow.

### Build Operations

All build operations run from parent repository:

```bash
# From parent repository root:
npm run pdf:generate           # Generate A4 PDF with cover
npm run pdf:kindle             # Generate 6"×9" Kindle PDF
npm run pdf:simple             # Generate simplified PDF
npm run illustrations:generate # Convert SVG to PNG (see process below)
npm run wordcount              # Count words across all chapters
npm run lint:markdown          # Check markdown formatting
```

**Illustration Generation Process:**

The `npm run illustrations:generate` command performs these steps:

1. **Downloads cover images** (if missing): Profile.png, A4-Cover.png, Kindle-Cover.png
2. **Checks for back-cover.png**: This file must be generated manually by:
   - Opening [web/back-cover.html](web/back-cover.html) in a browser
   - Taking a full-page screenshot
   - Saving as `back-cover.png` in `illustrations/`
3. **Converts SVG to PNG**: All .svg files in illustrations/ are converted to .png using ImageMagick

## .claude Configuration

This repository includes Claude Code configuration:

**Hooks** (in `.claude/hooks/`):

- `pre-commit.sh` - Lists staged markdown files
- `pre-push.sh` - Warns about uncommitted changes, reminds about parent submodule update
- `post-tool-use.sh` - Reminds to update parent after git push

**Commands** (in `.claude/commands/`):

- `step-commit.md` - Systematic commit workflow documentation
- `md-fix.md` - Markdown linting workflow (runs from parent)

**Skills** (in `.claude/skills/`):

- `step-commit.json` - Automated commit workflow
- `md-fix.json` - Markdown linting automation

**Settings** (`.claude/settings.local.json`):

- Pre-approved git operations and file viewing commands

## Publication Format

The manuscript supports dual-format publication:

1. **PDF** (via Pandoc + LaTeX)
   - Full formatting with cover image
   - Custom headers/footers
   - Professional book layout
   - A4 format for review/distribution
   - 6"×9" format for Kindle Direct Publishing

2. **Kindle/EPUB** (via Pandoc)
   - Simplified for e-readers
   - Clean metadata
   - Optimized for digital reading

Two metadata files in `datalake/book-configs/bible/` control rendering:

- `metadata.yaml` - LaTeX configuration for PDF with watermark ("Review Copy")
- `metadata-kindle.yaml` - Clean metadata for Kindle/EPUB

## Terminology Standards

Key terms used consistently throughout:

- "AI agent" (not "AI bot" or "AI scraper")
- "served HTML" (static, before JavaScript execution)
- "rendered HTML" (dynamic, after JavaScript execution)  
- "llms.txt" (lowercase, no capitalization)
- "robots.txt" (lowercase)
- "data-agent-visible" (attribute for explicit visibility control)
- "LLM suitability" (for scoring/analysis)
- "Schema.org" (capital S, lowercase org)
- "Pa11y" (capital P, lowercase a, double 1)
- "WCAG 2.1" (not "WCAG 2.1.0" or "WCAG2.1")

## Priority-Based Implementation

All implementation guidance uses priority levels, not time estimates:

- **Priority 1**: Critical Quick Wins - highest impact, minimal effort
- **Priority 2**: Essential Improvements - important foundational work
- **Priority 3**: Core Infrastructure - systematic platform improvements
- **Priority 4**: Advanced Features - comprehensive long-term enhancements

**Never use time references** (hours, days, weeks, months) when discussing implementation.

## Common Mistakes to Avoid

### Git Directory Navigation in Submodules

**CRITICAL: Always run `pwd` first** before attempting directory navigation. This is a git submodule repository that can be accessed from the parent repository root at `packages/manuscript/manuscript/`, but if you're already inside this submodule directory, further `cd` attempts will fail with "No such file or directory" errors.

Common mistake pattern:

```bash
# ❌ Wrong: Attempting cd without checking location
cd packages/manuscript/manuscript  # Fails if already inside this submodule

# ✅ Correct: Check location first
pwd  # Verify current directory
# Then use appropriate path based on actual location
```

**Best practice:** Check `pwd`, then use correct relative or absolute paths. When working with submodules, verify current location before every directory change or git operation.

## Contact Information

Maintain consistent contact information across all files:

- **Email**: <tom.cranstoun@gmail.com>
- **Website**: <https://allabout.network>
- **LinkedIn**: <https://www.linkedin.com/in/tom-cranstoun/>

## Author Profile Resources

When creating web pages, marketing materials, or book covers that feature the author:

- **Profile picture URL:** `https://allabout.network/media_126e99d56f06caf788bee715aff92281d2e31a206.png`
- Used in: [back-cover.html](web/back-cover.html), marketing materials
- Format: Square profile image suitable for circular cropping
- Usage: Reference this URL directly in HTML `<img>` tags or download for local use

## Copyright

Copyright © Tom Cranstoun. All rights reserved.

This manuscript is not licensed for public use, reproduction, or distribution.

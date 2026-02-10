---
title: "MX: The Codex -- Manuscript Repository"
description: "Repository README for the MX: The Codex manuscript, a guide to designing the web for AI agents and everyone else"
author: Tom Cranstoun
created: 2026-01-15
modified: 2026-02-09
version: "1.0"
status: draft
---

# MX: The Codex — Manuscript Repository

**The Codex: Designing the Web for AI Agents and Everyone Else**

A practical guide examining how modern web design optimized for human users fails for AI agents, and how fixing this benefits everyone.

## About This Repository

This is the manuscript repository for The Codex by Tom Cranstoun. The content is maintained separately from the main project repository and integrated as a git submodule.

**Main Repository:** <https://github.com/Digital-Domain-Technologies-Ltd/MX-hub>

**Status:** Complete manuscript (14 chapters, 12 appendices, ~140,000 words total)

## Repository Structure

```text
/
├── README.md                   # This file
├── CLAUDE.md                   # AI assistant guidance
├── .claude/                    # Claude Code configuration
│   ├── hooks/                  # Git hooks for workflow automation
│   ├── commands/               # Custom commands (step-commit, md-fix)
│   └── skills/                 # AI agent skills
├── manuscripts/
│   └── bible/                  # The Codex (full comprehensive guide)
│       ├── chapter-00-*.md through chapter-14-*.md
│       ├── preface.md
│       ├── executive-summary.md
│       ├── Glossary.md
│       ├── illustrations/      # SVG + PNG illustrations
│       └── reading-guide.md
├── web/                        # Generated HTML appendix pages
│   ├── appendix-*.html
│   └── llms.txt
├── todo.txt                    # Manuscript task tracking
└── CONTRIBUTING.md
```

## Related Packages (canonical homes for shared content)

Content that was previously in this repository now lives in dedicated packages:

- **mx-handbook** — "Don't Make AI Think" slim practical guide (chapters)
- **mx-code-examples** — All code examples (starter kit, platform implementations)
- **mx-appendices** — Shared appendices (A-L) for all books
- **datalake/book-configs/** — PDF/Kindle build metadata (metadata-kindle.yaml, cover-page.tex)
- **datalake/presentations/** — Talk slides and presentation materials

## Content Overview

### Core Manuscript (~78,000 words)

- **Preface** (~2,678 words): Author's discovery of the problem
- **14 Chapters** (~72,498 words): Complete narrative from problem to solutions
- **The End** (~570 words): Directing readers to online appendices
- **Glossary** (~2,350 words): 60+ technical terms with cross-references

### Web Appendices (~58,600 words)

- **12 Appendices** (A-L): Implementation guides, pattern references, case studies (published separately at <https://allabout.network/invisible-users/web/>)

### Supporting Materials (~3,550 words)

- **Executive Summary** (~1,815 words): Condensed overview
- **Reading Guide** (~1,151 words): Navigation for different audiences
- **Rear Cover** (~598 words): Book description

## Key Themes

1. **The Convergence Principle**: What AI agents need is mostly what everyone needs
2. **Session Inheritance Problem**: In-browser agents inherit authenticated sessions
3. **Identity Delegation**: Solutions for agent-mediated commerce
4. **Dual Responsibility Framework**: Technical fixes + user care in high-stakes scenarios

## Parent Repository Integration

This manuscript repository is a git submodule of the main MX-hub repository. Build tools and npm scripts are maintained in the parent repository:

```bash
# To build PDF from parent repository:
cd /path/to/MX-hub
npm run pdf:generate        # Full A4 PDF with cover
npm run pdf:kindle          # 6"×9" Kindle Direct Publishing format
npm run pdf:simple          # Simplified PDF

# To generate illustrations:
npm run illustrations:generate
# Downloads cover images (if missing), checks for back-cover.png, converts SVG to PNG

# To check word counts:
npm run wordcount
```

### Illustration Generation Process

The `npm run illustrations:generate` command performs three steps:

1. **Downloads cover images** (if missing): Profile.png, A4-Cover.png, Kindle-Cover.png
2. **Checks for back-cover.png** - if missing, displays instructions:
   - Open `web/back-cover.html` in a browser
   - Take a full-page screenshot
   - Save as `back-cover.png` in `illustrations/`
3. **Converts all SVG files** in illustrations/ to PNG using ImageMagick

**Note:** ImageMagick is required for SVG conversion. Install with `brew install imagemagick` if needed.

## Working with This Repository

### As a Submodule

When cloning the parent repository:

```bash
git clone https://github.com/Digital-Domain-Technologies-Ltd/MX-hub.git
cd MX-hub
git submodule update --init --recursive
```

### Making Changes

This repository is the source of truth for The Codex manuscript content. To make changes:

1. Navigate to manuscript directory (as a submodule)
2. Create a branch for your changes
3. Commit and push to this repository
4. Update parent repository's submodule pointer

See parent repository's README for detailed submodule workflow.

## Copyright Notice

Copyright © Tom Cranstoun. All rights reserved.

This manuscript is not licensed for public use, reproduction, or distribution.

**Repository Status:** Public repository for reading and reference. This is proprietary content made available for transparency. Contributions, pull requests, and issues are not accepted.

## Contact

**Author:** Tom Cranstoun
**Email:** <tom.cranstoun@gmail.com>
**LinkedIn:** <https://www.linkedin.com/in/tom-cranstoun/>

## License

All content is proprietary and confidential. See LICENSE file for full copyright and usage terms.

# Invisible Users Manuscript

**The Invisible Users: Designing the Web for AI Agents and Everyone Else**

A practical guide examining how modern web design optimized for human users fails for AI agents, and how fixing this benefits everyone.

## About This Repository

This is the manuscript repository for "The Invisible Users" by Tom Cranstoun. The content is maintained separately from the main project repository and integrated as a git submodule.

**Main Repository:** <https://github.com/Digital-Domain-Technologies-Ltd/MX-hub>

**Status:** Complete manuscript (13 chapters, 12 appendices, ~140,000 words total)

## Repository Structure

```text
/
├── README.md                   # This file
├── CLAUDE.md                   # AI assistant guidance
├── .claude/                    # Claude Code configuration
│   ├── hooks/                  # Git hooks for workflow automation
│   ├── commands/               # Custom commands (step-commit, md-fix)
│   └── skills/                 # AI agent skills
├── manuscripts/                # Multiple book variants
│   ├── bible/                  # The Bible (full comprehensive guide)
│   │   ├── chapter-01-*.md through chapter-13-*.md
│   │   ├── preface.md
│   │   ├── Glossary.md
│   │   ├── web/                # Generated HTML pages
│   │   └── illustrations/      # SVG + PNG illustrations
│   ├── dont-make-ai-think/     # Don't Make AI Think (slim practical guide)
│   │   ├── chapter-01-*.md through chapter-10-*.md
│   │   └── README.md
│   └── shared-appendices/      # Shared appendices (A-L) for all books
│       ├── appendix-a-*.md through appendix-l-*.md  # 12 appendices
│       ├── appendix-d-ai-friendly-html-guide.txt    # Appendix D source
│       └── appendix-h-live-llms.txt                 # Appendix H source
├── code/                       # All code examples
│   ├── agent-friendly-starter-kit/  # Good vs bad patterns
│   └── examples/               # Production-ready implementations
│       ├── apache/             # Apache configuration
│       ├── nginx/              # Nginx configuration
│       ├── nextjs/             # Next.js examples
│       ├── wordpress/          # WordPress integration
│       ├── eds/                # Adobe EDS examples
│       ├── static-site/        # Static site generators
│       ├── monitoring/         # Analytics and logging
│       └── validation/         # Verification scripts
├── marketing/                  # All promotional content
│   ├── blog/                   # Blog and promotional materials
│   └── talks/                  # Presentation materials
├── metadata.yaml               # Pandoc metadata for PDF
├── metadata-kindle.yaml        # Metadata for Kindle/EPUB
└── cover-page.tex              # LaTeX cover template
```

## Content Overview

### Core Manuscript (~78,000 words)

- **Preface** (~2,678 words): Author's discovery of the problem
- **13 Chapters** (~72,498 words): Complete narrative from problem to solutions
- **The End** (~570 words): Directing readers to online appendices
- **Glossary** (~2,350 words): 60+ technical terms with cross-references

### Web Appendices (~58,600 words)

- **12 Appendices** (A-L): Implementation guides, pattern references, case studies (published separately at <https://allabout.network/invisible-users/web/>)

### Supporting Materials (~3,550 words)

- **Executive Summary** (~1,815 words): Condensed overview
- **Reading Guide** (~1,151 words): Navigation for different audiences
- **Rear Cover** (~598 words): Book description

### Code Examples

- **agent-friendly-starter-kit/**: Good vs bad patterns for AI agent compatibility
- **code-examples/**: Platform-specific implementations (Apache, Nginx, Next.js, WordPress, EDS, static sites) plus monitoring and validation tools

### Blog & Talks

- **blog/**: Promotional materials including AI-Native website implementation guide
- **talks/**: Presentation materials for members calls and conferences

## Key Themes

1. **The Convergence Principle**: What AI agents need is mostly what everyone needs
2. **Session Inheritance Problem**: In-browser agents inherit authenticated sessions
3. **Identity Delegation**: Solutions for agent-mediated commerce
4. **Dual Responsibility Framework**: Technical fixes + user care in high-stakes scenarios

## Parent Repository Integration

This manuscript repository is a git submodule of the main invisible-users repository. Build tools and npm scripts are maintained in the parent repository:

```bash
# To build PDF from parent repository:
cd /path/to/invisible-users
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
cd invisible-users
git submodule update --init --recursive
```

### Making Changes

This repository is the source of truth for manuscript content. To make changes:

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

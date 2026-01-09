# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a proprietary manuscript repository for "The Invisible Users: Designing the Web for AI Agents and Everyone Else" by Tom Cranstoun. The book explores how modern web design patterns that work well for humans often fail for AI agents, and how fixing these issues benefits both.

**Copyright Notice**: All content is proprietary and confidential. Copyright (c) 2026 Tom Cranstoun. All rights reserved. This is a read-only repository - contributions, pull requests, and issues are not accepted.

## Document Structure

The manuscript is organized as a structured book with Markdown chapters and LaTeX/Pandoc compilation:

### Core Chapters (Sequential)
- `chapter-01-what-you-will-learn.md` - Introduction and accessibility connection
- `chapter-02-the-invisible-failure.md` - Problem identification
- `chapter-03-the-architectural-conflict.md` - Technical analysis
- `chapter-04-the-business-reality.md` - Business implications
- `chapter-05-the-content-creators-dilemma.md` - Creator perspective
- `chapter-06-the-security-maze.md` - Security considerations
- `chapter-07-the-legal-landscape.md` - Legal implications
- `chapter-08-the-human-cost.md` - Human impact
- `chapter-09-designing-for-both.md` - Solution principles
- `chapter-10-technical-advice.md` - Technical implementation
- `chapter-11-what-agent-creators-must-build.md` - Agent creator requirements

### Front Matter
- `preface.md` - Story of how the problem was discovered
- `executive-summary.md` - Overview with decision tree

### Appendices (Implementation Guides)
- `appendix-a-implementation-cookbook.md` - Practical recipes for common patterns
- `appendix-b-battle-tested-lessons.md` - Real-world implementation experience
- `appendix-c-web-audit-suite-guide.md` - Audit tooling guide
- `appendix-d-ai-friendly-html-guide.md` - HTML standards and patterns
- `appendix-e-ai-patterns-quick-reference.md` - Quick reference for data attributes
- `appendix-f-implementation-roadmap.md` - Prioritized implementation steps
- `appendix-g-resource-directory.md` - Standards and tools
- `appendix-h-live-llms.md` - Example llms.txt file
- `appendix-i-pipeline-failure-case-study.md` - Case study

### Supporting Files
- `Glossary.md` - Term definitions
- `metadata.yaml` - Pandoc metadata with LaTeX configuration for PDF output
- `metadata-kindle.yaml` - Simplified metadata for Kindle/EPUB format
- `cover-page.tex` - LaTeX cover page template
- `illustrations/` - Chapter illustrations (SVG source, PNG export)

## Publication Format

This is a dual-format publication:
1. **PDF** (via Pandoc + LaTeX) - Full formatting with cover image, custom headers/footers
2. **Kindle/EPUB** (via Pandoc) - Simplified for e-readers

The two metadata files control different rendering paths. `metadata.yaml` includes extensive LaTeX configuration for professional PDF output with a watermark ("Review Copy not for publication/distribution"). `metadata-kindle.yaml` provides clean metadata for digital formats.

## Document Compilation

This repository uses Pandoc with LaTeX for PDF generation. While there are no build scripts committed, the standard approach would be:

```bash
# PDF output (standard manuscript format)
pandoc metadata.yaml preface.md executive-summary.md \
  chapter-*.md appendix-*.md Glossary.md \
  -o invisible-users-manuscript.pdf \
  --pdf-engine=xelatex

# Kindle/EPUB output
pandoc metadata-kindle.yaml preface.md executive-summary.md \
  chapter-*.md appendix-*.md Glossary.md \
  -o invisible-users-manuscript.epub
```

**Note**: Chapters must be compiled in sequential order. The metadata files include LaTeX packages for code listings, graphics, custom headers/footers, and cover page integration.

## Illustrations

All chapters have corresponding illustrations in the `illustrations/` directory:
- **Source**: SVG files (editable)
- **Export**: PNG files (for inclusion in compiled output)
- Naming convention: `chapter-NN-description.{svg,png}`

The cover design (`cover-design.{svg,png}`) is referenced in the LaTeX header configuration.

## Content Themes

The book addresses several interconnected themes:

1. **The Problem**: Modern web patterns (toast notifications, SPAs, progressive disclosure, visual hierarchy) that work for humans but fail for AI agents
2. **The Accessibility Connection**: These same patterns often fail for users with disabilities, elderly users, or users under cognitive load
3. **Business Impact**: AI agents represent customers who will shop elsewhere if sites don't work
4. **Technical Solutions**: Practical implementation guidance for "convergence design" that works for both humans and agents
5. **Legal/Security Implications**: Considerations around agent behavior, liability, and security

## Writing Style

- Technical yet accessible - targets web developers, designers, and business stakeholders
- Concrete examples and case studies over abstract theory
- Implementation-focused appendices with code samples and step-by-step guides
- Emphasis on practical business justification alongside technical correctness

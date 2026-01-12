# Schema.org JSON-LD Enhancement Summary

**Date:** 2026-01-12
**Files Enhanced:** 16 HTML files
**Status:** Complete

## Overview

Systematically enhanced Schema.org JSON-LD structured data across all 16 Common Page Pattern HTML files with standard improvements while preserving all HTML/CSS structure.

## Standard Enhancements Applied

### 1. Date Properties (16/16 files)
- Added `datePublished: "2026-01-11"` to all files
- Added `dateModified: "2026-01-11"` to all files
- Signals content freshness to search engines and AI agents

### 2. mainEntityOfPage (16/16 files)
- Added self-referencing WebPage object with @id pointing to canonical URL
- Pattern: `{"@type": "WebPage", "@id": "https://allabout.network/invisible-users/web/{filename}"}`
- Clarifies the primary entity relationship

### 3. Breadcrumb Navigation (16/16 files)
- Added BreadcrumbList with Home → Current Page structure
- All breadcrumbs use consistent URL pattern
- Home: `https://allabout.network/invisible-users/`
- Current page: Full URL to specific file

### 4. Language Specification (16/16 files)
- Verified `inLanguage: "en-GB"` present in all schemas
- British English throughout for consistency

### 5. Image Properties (7/16 files with page images)
Files with page-level images added:
- collection.html: `https://allabout.network/images/collection.jpg`
- blog-post.html: `https://allabout.network/images/blog-post.jpg`
- article.html: `https://allabout.network/images/article.jpg`
- product.html: `https://allabout.network/images/product.jpg`
- team.html: `https://allabout.network/images/team.jpg`
- portfolio.html: `https://allabout.network/images/portfolio.jpg`
- event.html: `https://allabout.network/images/event.jpg`

### 6. Person/Author Images (8/16 files)
Added `image: "https://allabout.network/images/tom-cranstoun.jpg"` to Person objects in:
- about.html (mainEntity Person)
- contact.html (mainEntity Person)
- collection.html (author Person)
- blog-post.html (author Person)
- article.html (author Person)
- product.html (author Person)
- team.html (Person in members array)
- privacy.html (author Person)

### 7. Product Offer Enhancements (1/1 product file)
Enhanced product.html Offer object with:
- `seller`: Organization (Digital Domain Technologies Ltd)
- `itemCondition`: NewCondition
- `validFrom`: 2026-01-11

## File-by-File Summary

| File | Schema Type | Enhancements |
|------|-------------|--------------|
| about.html | AboutPage | dates, mainEntityOfPage, breadcrumb, person-image |
| contact.html | ContactPage | dates, mainEntityOfPage, breadcrumb, person-image |
| collection.html | CollectionPage | dates, mainEntityOfPage, breadcrumb, page-image, author-image |
| blog-post.html | BlogPosting | dates, mainEntityOfPage, breadcrumb, page-image, author-image |
| article.html | TechArticle | dates, mainEntityOfPage, breadcrumb, page-image, author-image |
| faq.html | FAQPage | dates, mainEntityOfPage, breadcrumb |
| product.html | Product | dates, mainEntityOfPage, breadcrumb, page-image, author-image, offer-enhanced |
| checkout.html | CheckoutPage | dates, mainEntityOfPage, breadcrumb |
| search.html | SearchResultsPage | dates, mainEntityOfPage, breadcrumb |
| login.html | WebPage | dates, mainEntityOfPage, breadcrumb (JSON-LD added from scratch) |
| 404.html | WebPage | dates, mainEntityOfPage, breadcrumb |
| team.html | ProfilePage | dates, mainEntityOfPage, breadcrumb, page-image, person-image |
| portfolio.html | CollectionPage | dates, mainEntityOfPage, breadcrumb, page-image |
| event.html | Event | dates, mainEntityOfPage, breadcrumb, page-image |
| testimonials.html | CreativeWork | dates, mainEntityOfPage, breadcrumb |
| privacy.html | WebPage | dates, mainEntityOfPage, breadcrumb, author-image |

## Special Cases

### login.html
- Had NO JSON-LD initially
- Created complete WebPage schema from scratch
- Added all standard enhancements

### product.html
- Enhanced existing Offer object with seller, itemCondition, validFrom
- Added product-specific image
- Preserved existing SKU, brand, bookFormat properties

### faq.html
- Preserved existing mainEntity array with 3 Question objects
- Added standard enhancements around existing FAQ structure

## Technical Approach

1. **Preservation First**: Used Edit operations on JSON-LD blocks only, never touching HTML/CSS
2. **JSON Validation**: Parsed and validated all JSON before writing back
3. **Proper Formatting**: Maintained 2-space indentation and proper HTML embedding
4. **Placeholder URLs**: All image URLs are placeholders for user replacement

## Validation Results

All 16 files:
- ✓ Valid JSON-LD syntax
- ✓ Proper Schema.org @type declarations
- ✓ Consistent URL patterns
- ✓ Complete breadcrumb navigation
- ✓ Date properties for freshness signals
- ✓ Self-referencing mainEntityOfPage
- ✓ British English language specification

## Next Steps for User

1. **Replace Placeholder Images**: Update all `https://allabout.network/images/*.jpg` URLs with actual image paths
2. **Verify Person Images**: Confirm `tom-cranstoun.jpg` path is correct
3. **Test Validation**: Run through Google Rich Results Test
4. **Monitor Search Console**: Check for structured data errors after deployment

## References

- Schema.org Documentation: <https://schema.org/>
- Google Rich Results Test: <https://search.google.com/test/rich-results>
- BreadcrumbList Guidelines: <https://developers.google.com/search/docs/appearance/structured-data/breadcrumb>

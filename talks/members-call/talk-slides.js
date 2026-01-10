function createInvisibleUsersDeck() {
  var deck = SlidesApp.create('The Invisible Users Presentation - 20 Minutes');

  var slideData = [
    // Title Slide
    ["The Invisible Users", "Designing the Web for AI Agents and Everyone Else\n\nTom Cranstoun | Published January 2026"],

    // Opening Hook Section (3 minutes) - 3 slides
    ["Real Example from Claude For Chrome", "January 2025: Testing Claude for Chrome whilst writing the book.\n\nMultiple Danube cruises ending in Budapest (May 2026):\n\n• 'Scenic Gems of the Danube 2026' - Vienna to Budapest (7 nights)\n• 'Delightful Danube' - Various starting points to Budapest\n• 'Romantic Danube' - Multiple options ending in Budapest\n\nOne cruise showed: 'From £203,000-£402,000'\nActual price: £2,030-£4,020\n\n100x multiplication error from European formatting (€2.030,00)."],

    ["The £203,000 Cruise", "Real example: January 2025\n\n• AI assistant researching Danube cruises\n• Returned: £203,000-£402,000 per person\n• Actual price: £2,030-£4,020 per person\n• 100x multiplication error (using a European site with €2.030,00)\n\n£201,000 potential mistake if booking.\n\nFor Agent Creators, validation layers are essential, not optional."],

    ["What Caused This?", "The Error Chain:\n\n• Decimal separator confusion (€2.030,00 vs £2,030)\n• No range validation (£203k > £15k maximum)\n• No comparative checks (58x higher than peers)\n• No cross-referencing against structured data\n• No confidence scoring\n\nProfessional formatting masked the problem.\nError presented with same confidence as verified data."],

    // The Problem Section (5 minutes) - 3 slides
    ["The Problem: Invisible Failures", "Websites fail quietly for AI agents:\n\n• Not theoretical futures - happening today\n• Agents browsing, comparing, transacting now\n• Sites that work get preferred\n• Sites that don't get quietly avoided\n\nFirst-mover advantage that's hard to claw back.\n\nTwo real production mistakes..."],

    ["Mistake #1: Toast Notifications", "The Pattern That Keeps Returning:\n\n• Removed from forms (good!)\n• Reintroduced in shopping cart (bad!)\n• showToast('Item added!')\n\nToast notifications vanish before agents read them.\nForm submission appears to fail silently.\nAgents abandon the flow.\n\nSolution: Persistent alerts that stay visible."],

    ["Mistake #2: Hidden Checkout State", "State Invisible to Agents:\n\n// JavaScript-only state\nlet currentStep = 1;\n\nfunction nextStep() {\n  currentStep++;\n  updateUI();\n}\n\nNo URL reflection. No DOM attributes.\nAgents can't track progress. Refreshing loses state.\n\nSolution: data-state attributes in DOM."],

    // Why This Happens Section (3 minutes) - 2 slides
    ["Why This Happens", "Modern web design optimised for visual feedback:\n\n• Single-page applications\n• Client-side state management\n• Toast notifications and modals\n• Loading spinners without context\n• JavaScript-dependent navigation\n\nThese patterns break agents and screen readers.\nAI agents face the same barriers humans\nwith disabilities have encountered for years."],

    ["Two HTML States: The Gap", "Critical Distinction:\n\n1. Served HTML (static)\n   • What server sends before JavaScript\n   • Most agents see only this\n\n2. Rendered HTML (dynamic)\n   • After JavaScript execution\n   • Only browser-based agents see this\n\nExample: <div id='products'></div>\nfetch('/api/products').then(renderProducts);\n\nYour product catalogue is invisible to most agents."],

    // The Solution Section (6 minutes) - 6 slides
    ["The Solution", "Make Implicit State Explicit\n\n• No rebuilding interfaces\n• No special agent-only experiences\n• Small, well-understood changes\n• Improve accessibility for everyone\n\nThree concrete patterns with code and business value."],

    ["Pattern #1: Persistent Errors", "Instead of vanishing toast notifications:\n\n<form data-state='incomplete'>\n  <div id='error-summary' role='alert'>\n    <h3>Please fix the following:</h3>\n    <ul id='error-list'></ul>\n  </div>\n  \n  <input aria-invalid='false'\n         aria-describedby='email-error'>\n  <div id='email-error'></div>\n</form>\n\nBusiness value: Conversion rates improve for everyone."],

    ["Pattern #2: Complete Pricing", "Instead of 'From £99':\n\n<div itemscope itemtype='schema.org/Offer'>\n  <meta itemprop='price' content='119.00'>\n  <meta itemprop='priceCurrency' content='GBP'>\n  \n  Total: £119.00 (inc. VAT)\n  \n  <details>\n    <summary>See breakdown</summary>\n    Product: £99 | Delivery: £15 | Fee: £5\n  </details>\n</div>\n\nBusiness value: No hidden fees. Agent-readable. Builds trust."],

    ["Pattern #3: Explicit State", "Make cart state visible:\n\n<div id='shopping-cart'\n     data-state='active'\n     data-item-count='3'\n     data-subtotal='247.97'\n     data-currency='GBP'>\n  \n  <div role='status'>\n    Items: <span>3</span>\n    Subtotal: £<span>247.97</span>\n  </div>\n</div>\n\nBusiness value: State persists. Debugging easier.\nIntegration testing more reliable."],

    ["Small Business Case", "You don't need complex infrastructure.\n\nSimple restaurant site:\n• Semantic HTML (<nav>, <main>, <article>)\n• Schema.org markup (Restaurant, Menu, MenuItem)\n• Minimal effort\n• Completely agent-friendly\n\nQuick wins, not expensive rebuilds."],

    // Taking Action Section (3 minutes) - 3 slides
    ["Quick Wins: Start Here", "Critical Priority 1 Changes:\n\n• Add persistent error messages\n• Display complete pricing (no hidden fees)\n• Ensure served HTML contains core content\n• Add basic Schema.org structured data\n\nThese changes benefit everyone immediately.\n\nStart with highest impact, lowest effort."],

    ["Web Audit Suite", "Available as separate purchase or professional audit service.\n\n• Implements patterns from the book\n• Generates detailed reports\n• Shows exactly where sites break for agents\n• Provides specific fix recommendations\n\nNot included with book - separate offering.\n\nMeasure what you can't see."],

    ["Call to Action", "Start with one pattern:\n\n1. Pick highest-impact, lowest-effort change\n2. Implement it\n3. Measure the improvement\n4. Tackle the next one\n\nSites that adapt early gain advantage.\nSites that don't get quietly bypassed."],

    // Major Developments Section - 3 slides
    ["December 2024: Timeline Accelerated", "Two major launches within weeks validate everything:\n\nClaude for Chrome (20 December 2024):\n• Browser automation for all paid subscribers\n• Used whilst writing this book's case studies\n• Session inheritance (agents inherit your login)\n• Makes traditional bot detection nearly impossible\n\nMicrosoft Copilot Checkout (January 2025):\n• Complete purchases within AI assistant\n• Partner retailers: Urban Outfitters, Anthropologie, Etsy\n• Microsoft reports improved conversion rates\n• Processing real transactions in production"],

    ["VPNs and Hidden Guardrails", "Two realities affecting every agent:\n\nBrowser extensions inherit network configuration:\n• User in Manchester appears in Amsterdam (VPN exit)\n• IP-based location detection becomes unreliable\n• Fraud systems may flag legitimate transactions\n• Affects all privacy-conscious users\n\nSystem prompts exist but are insufficient:\n• All agents have hidden guardrails\n• They work at reasoning level, not data extraction\n• £203k cruise error happened despite guardrails\n• Need programmatic validation: range checks, cross-referencing\n• Hallucinations will continue - validation catches them"],

    ["Why This Matters Now", "The window to act is smaller than expected:\n\n• Claude for Chrome: Millions can install today\n• Copilot Checkout: Processing real transactions now\n• Partner retailers report improved conversion rates\n• Non-optimised sites excluded from high-conversion traffic\n\nAgent traffic isn't coming. It's here.\n\nTest your site with Claude for Chrome immediately.\nImplement Priority 1-2 patterns urgently."],

    // Closing - 4 slides
    ["Our Responsibility", "Clear professional obligation:\n\nAs designers, developers, product owners, and executives:\n• We have the responsibility to ensure agents navigate successfully\n• This isn't optional - it's a professional obligation\n• Parallels accessibility, security, user experience\n• When agents fail, that's a design gap affecting everyone\n\nAgent failures expose problems that affect humans too.\nWe're finally fixing issues we should have fixed years ago."],

    ["What Comes Next: Identity Layer", "The Missing Infrastructure:\n\nPlatforms building proprietary identity systems:\n• Microsoft Copilot Checkout (Microsoft identity)\n• Claude for Chrome (Anthropic sessions)\n• Google and Apple building walled gardens\n\nNext Project: Universal Identity Delegation Infrastructure\n• Open-source project for portable authorisation\n• User-controlled permissions and audit trails\n• OAuth 2.0 delegation extension support\n• Community infrastructure before proprietary lock-in\n\nProject details:\nhttps://allabout.network/invisible-users/identity-layer.html\n\nContact: tom.cranstoun@gmail.com"],

    ["Key Takeaways", "Five Essential Messages:\n\n1. This is happening now (not speculative)\n2. Commercial pressure exists (preference = advantage)\n3. Solutions are accessible (small changes, big impact)\n4. Universal benefit (humans and machines)\n5. Start with quick wins (measure and iterate)"],

    ["Book & Contact", "The Invisible Users:\nDesigning the Web for AI Agents and Everyone Else\n\nPublished January 2026\n\nTom Cranstoun\ntom.cranstoun@gmail.com\nhttps://allabout.network\n\nBook: https://allabout.network/invisible-users\nIdentity project: .../identity-layer.html\nNews: .../news.html\n\nQuestions? Discussion? Your challenges?"]
  ];

  // Remove the default initial slide
  deck.getSlides()[0].remove();

  slideData.forEach(function(data) {
    var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    
    // Add Title Box
    var title = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 50, 40, 620, 100);
    title.getText().setText(data[0]);
    title.getText().getTextStyle().setFontSize(36).setBold(true);

    // Add Body Box
    var body = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 50, 150, 620, 250);
    body.getText().setText(data[1]);
    body.getText().getTextStyle().setFontSize(20);
  });

  Logger.log('Deck created: ' + deck.getUrl());
}
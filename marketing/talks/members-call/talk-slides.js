function createInvisibleUsersDeck() {
  var deck = SlidesApp.create('The Invisible Users Presentation - 20 Minutes (Themed)');

  // -------------------------------------------------------------------------
  // THEME CONFIGURATION
  // -------------------------------------------------------------------------
  var THEME = {
    colors: {
      background: '#1C1C1C', // Dark Grey/Black
      header: '#0046B5',     // Cobalt Blue
      textMain: '#FFFFFF',   // White
      highlightBorder: '#FF3300' // Neon Red/Orange
    },
    fonts: {
      title: 'Georgia',
      body: 'Roboto'
    }
  };

  // -------------------------------------------------------------------------
  // SLIDE DATA (Structured for specific layouts)
  // -------------------------------------------------------------------------
  // Structure:
  // {
  //   type: 'standard' | 'highlight' | 'title',
  //   title: "String",
  //   subtitle: "String" (optional),
  //   body: ["String", "String"] (array of bullets),
  //   highlightBox: { title: "String", text: "String" } (only for 'highlight' type)
  // }

  var slideData = [
    // 1. Title Slide
    {
      type: 'title',
      title: "The Invisible Users",
      subtitle: "Designing Websites That Machines Can Read",
      body: [
        "Tom Cranstoun: Many years in Adobe CMS & AI innovation.",
        "Consultant at Digital Domain Technologies Ltd.",
        "Philosophy: \"What AI agents need is what everyone needs.\"",
        "Focus: Building machine-readable web architectures that serve all users."
      ],
      footer: "Tom Cranstoun | Due Q1 2026"
    },

    // 2. What Are AI Agents?
    {
      type: 'standard',
      title: "What Are AI Agents? They're Machines",
      subtitle: "AI assistants that read your website to find out what you do:",
      body: [
        "Server-side: OpenAI ChatGPT (no JavaScript execution, text-only parsing)",
        "In-browser: Microsoft Copilot (executes JavaScript, sees rendered HTML)",
        "Browser automation: Perplexity (full browser, can screenshot)",
        "Local agents: Ollama (runs on user's machine, limited resources)",
        "They have disabilities: Some are blind (no screenshots), some can't run JS",
        "Let's call them what they are: Machines with different capabilities",
        "Just like users with disabilities, they need semantic structure"
      ]
    },

    // 2b. Adobe Insights: Holiday 2025
    {
      type: 'standard',
      title: "Adobe Insights: Holiday 2025",
      subtitle: "AI Referrals Surge Triple-Digits Across Sectors",
      body: [
        "Triple-Digit Growth: AI referrals surged (Retail +693%, Travel +539%)",
        "Conversion Flip: AI referrals moved from lagging to leading (+31% vs non-AI)",
        "Engagement: AI users spend 45% longer on site, view 13% more pages",
        "Trust: 81% reported improved shopping experience with AI Assistants",
        "Seismic Shift: From experimental to primary revenue driver in 12 months."
      ]
    },

    // 2. The £203,000 Cruise - Combined Example
    {
      type: 'highlight',
      title: "The £203,000 Cruise",
      subtitle: "Real example: January 2025, Testing Claude for Chrome",
      body: [
        "Multiple Danube cruises ending in Budapest (May 2026)",
        "One cruise showed: 'From £203,000-£402,000'",
        "Actual price: £2,030-£4,020",
        "100x multiplication error from European formatting (€2.030,00)",
        "Without clear structured data, agents misrepresent your pricing"
      ],
      highlightBox: {
        title: "£201,000",
        text: "potential mistake\nif booking."
      },
      footer: "For Agent Creators, validation layers are essential, not optional."
    },

    // 3. What Caused This
    {
      type: 'standard',
      title: "What Caused This?",
      subtitle: "The Error Chain:",
      body: [
        "Decimal separator confusion (€2.030,00 vs £2,030)",
        "No range validation (£203k > £15k maximum)",
        "No comparative checks (58x higher than peers)",
        "No cross-referencing against structured data",
        "No confidence scoring",
        "Professional formatting masked the problem.",
        "Error presented with same confidence as verified data.",
        "This isn't an isolated incident - it's systematic across the web"
      ]
    },

    // 4. The Problem: Designing for Eyes, Not Machines
    {
      type: 'standard',
      title: "The Problem: Designing for Eyes, Not Machines",
      subtitle: "Why this happens everywhere:",
      body: [
        "The £203k cruise isn't unique - most sites have similar issues",
        "Sites designed for human eyes, not machine parsers",
        "AI agents read HTML structure, not CSS styling",
        "Beautiful designs with nested divs = invisible to machines",
        "Semantic HTML with clear structure = readable by all",
        "Sites that machines can parse get recommended",
        "Sites that machines can't read get quietly avoided"
      ]
    },

    // 6. The Agent Journey Through Your Website
    {
      type: 'standard',
      title: "The Agent Journey Through Your Website",
      subtitle: "Every stage requires the right format, clarity, and precision:",
      body: [
        "1. LLM Training: Agents read websites to build knowledge - need clear content",
        "2. Citation: Agents need to know what you do to cite you accurately",
        "3. Search & Compare: Agents build lists, compare options, sort by features",
        "4. Price Comparison: Without clear pricing, they cannot compare (£203k cruise!)",
        "5. Understanding Offers: If formatting unclear, they misrepresent your pricing",
        "6. Purchase: If they can't see what buttons do, they cannot buy",
        "JavaScript-rendered content: Invisible to LLM training data",
        "At every point, your structure determines success or failure"
      ]
    },

    // 6b. Understanding Invisible Failures
    {
      type: 'standard',
      title: "How Machines AND Screen Readers Read Your Website",
      subtitle: "The fundamental difference between sighted and non-visual readers:",
      body: [
        "Sighted humans see: Visual hierarchy, colours, animations, styled buttons",
        "Machines AND screen readers read: HTML structure, semantic elements, metadata",
        "Visual design is invisible to AI agents AND blind users",
        "Code structure is everything for accessibility AND AI",
        "Example: <div class='btn'> looks like a button, but is a meaningless container",
        "Example: <button> is semantically clear to screen readers AND machines"
      ]
    },

    // 6c. The Core Message
    {
      type: 'highlight',
      title: "Design for Both",
      subtitle: "The convergence principle:",
      body: [
        "Machines can't see visual design",
        "Screen readers can't see visual design",
        "Both need semantic structure and explicit meaning",
        "What machines need is what disabled users need"
      ],
      highlightBox: {
        title: "Design",
        text: "For\nBoth"
      },
      footer: "Design for structure - benefit humans, machines, and accessibility"
    },

    // 7. Mistake #1
    {
      type: 'standard',
      title: "Mistake #1: Toast Notifications",
      subtitle: "The Pattern That Keeps Returning:",
      body: [
        "Removed from forms (good!) -> Reintroduced in shopping cart (bad!)",
        "showToast('Item added!')",
        "Toast notifications vanish before agents read them.",
        "Form submission appears to fail silently.",
        "Agents abandon the flow.",
        "Solution: Persistent alerts that stay visible."
      ]
    },

    // 8. Mistake #2
    {
      type: 'standard',
      title: "Mistake #2: Vague Button Text",
      subtitle: "Generic labels confuse machines AND screen readers:",
      body: [
        "Your page has three buttons that say 'More' - which does what?",
        "Screen readers announce: 'More button' - more what?",
        "Machines see: <button>More</button> - no context",
        "Bad: 'More', 'Click here', 'Learn more', 'Read more'",
        "Good: 'More about pricing', 'View product details', 'Read customer reviews'",
        "Be specific in the button text - both audiences need context",
        "Solution: Descriptive button labels that work without surrounding content"
      ]
    },

    // 9. Mistake #3
    {
      type: 'standard',
      title: "Mistake #3: Hidden Checkout State",
      subtitle: "State Invisible to Agents:",
      body: [
        "JavaScript-only state (let currentStep = 1)",
        "No URL reflection. No DOM attributes.",
        "Agents can't track progress. Refreshing loses state.",
        "Solution: data-state attributes in DOM."
      ]
    },

    // 9. Why This Happens
    {
      type: 'standard',
      title: "Why Machines AND Screen Readers Struggle",
      subtitle: "Visual-first design patterns break accessibility AND AI:",
      body: [
        "JavaScript-rendered content (invisible to parsers AND screen readers)",
        "Generic class names (no semantic meaning for assistive tech OR machines)",
        "CSS-based information (colour, size - invisible to blind users AND AI)",
        "Toast notifications (vanish before screen readers AND machines read)",
        "Complex client-side state (confuses keyboard users AND agents)",
        "Solution: Semantic HTML + ARIA + CSS works for everyone",
        "Structure first benefits accessibility AND AI simultaneously"
      ]
    },

    // 9a. This Isn't New
    {
      type: 'standard',
      title: "This Isn't New: 27 Years of the Same Problem",
      subtitle: "Same accessibility problems, same solutions, new commercial urgency",
      body: [
        "1999: Janus Boye wrote 'Constructing the Web for the Non-Visual User'",
        "Toast notifications broke screen readers then, break AI agents now",
        "Hidden state confused keyboard users then, confuses agents now",
        "Same problems affecting blind users AND machine readers",
        "Same solutions work for accessibility AND AI",
        "The difference: Commercial pressure finally matches moral obligation"
      ]
    },

    // 9b. The Citation Problem
    {
      type: 'standard',
      title: "The Citation Problem",
      subtitle: "First-mover advantage available:",
      body: [
        "When ChatGPT recommends products, it needs exact pricing",
        "Without Schema.org JSON-LD markup, agents hallucinate details",
        "When agents find sites that don't work, they move on quickly",
        "When agents find sites that work, they come back",
        "First-mover advantage: Sites that work early get preferred",
        "Agents cite competitors who provided explicit signals first",
        "Same structured data helps Google show rich snippets",
        "One improvement serves all discovery channels."
      ]
    },

    // 10. The Gap
    {
      type: 'standard',
      title: "Two HTML States: What Machines Actually See",
      subtitle: "The critical distinction between human and machine perception:",
      body: [
        "1. Served HTML (static) - Raw HTML before JavaScript runs",
        "2. Rendered HTML (dynamic) - After JavaScript transforms the page",
        "Most AI agents only see served HTML (the raw code)",
        "Browser-based agents see rendered HTML (after transformation)",
        "Example: <div id='products'></div> then fetch() = invisible to most machines",
        "Solution: Server-side render content or use semantic HTML from the start"
      ]
    },

    // 11. The Solution
    {
      type: 'standard',
      title: "The Solution: Semantic Structure for All",
      subtitle: "What accessibility needs is what AI needs:",
      body: [
        "Use semantic HTML (screen readers AND machines understand it)",
        "Screen readers announce <button>, machines parse <button>",
        "Add structured data (helps voice assistants AND AI agents)",
        "Schema.org serves blind users' voice assistants AND AI parsers",
        "Clear heading hierarchy (screen reader navigation AND machine parsing)",
        "One solution serves accessibility, SEO, and AI simultaneously"
      ]
    },

    // 12. Pattern 1
    {
      type: 'standard',
      title: "Pattern #1: Semantic HTML Structure",
      subtitle: "Mark up what something IS for screen readers AND machines:",
      body: [
        "<button> - Screen readers announce 'button', machines parse as clickable",
        "<main> - Screen readers jump to content, machines identify key content",
        "<nav> - Screen readers list navigation, machines understand site structure",
        "<article> - Screen readers group content, machines extract articles",
        "Semantic elements work immediately for accessibility AND AI",
        "Style with CSS - assistive tech AND machines read the HTML"
      ]
    },

    // 13. Pattern 2
    {
      type: 'standard',
      title: "Pattern #2: Explicit Metadata (Schema.org)",
      subtitle: "Structured data serves voice assistants AND AI agents:",
      body: [
        "Schema.org provides shared vocabulary for all machine readers",
        "Voice assistants for blind users read the same metadata as AI agents",
        "Example: Price, currency, availability - voice assistants announce it",
        "Same metadata helps Google, Alexa, ChatGPT, Claude",
        "One implementation serves accessibility tech AND AI simultaneously",
        "Blind users' voice assistants benefit from the same structured data"
      ]
    },

    // 13a. The Ally McBeal Problem
    {
      type: 'standard',
      title: "The Ally McBeal Problem",
      subtitle: "Without explicit markup, agents can't distinguish fiction from professional content:",
      body: [
        "AI training data includes millions of TV subtitle files (DVDs, streaming)",
        "Without Schema.org markup, agents cannot tell the difference:",
        "Your legal brief might be treated like an Ally McBeal script",
        "OR: Ally McBeal dialogue might be cited as legal precedent (lawyer's nightmare!)",
        "Medical analysis confused with Grey's Anatomy dialogue",
        "Financial advice treated like fictional business drama",
        "Use Schema.org types: LegalDocument, ScholarlyArticle, MedicalScholarlyArticle",
        "Mark fiction as CreativeWork - prevent both under/over-valuing content"
      ]
    },

    // 14. Pattern 3
    {
      type: 'standard',
      title: "Pattern #3: Clear Document Structure",
      subtitle: "Heading hierarchy for screen reader navigation AND machine parsing:",
      body: [
        "Screen reader users navigate by headings (h1 → h2 → h3)",
        "AI agents parse the same heading structure for document meaning",
        "Screen readers: Jump between h2 headings to scan sections",
        "Machines: Parse h2 headings to understand topic structure",
        "Jumbled hierarchy confuses blind users AND AI agents equally",
        "One logical structure serves accessibility AND AI simultaneously"
      ]
    },

    // 15. Small Business Case
    {
      type: 'standard',
      title: "The Morning-After Test",
      subtitle: "Test your site's machine-readability in 30 seconds:",
      body: [
        "1. View source on your most important page",
        "2. Copy the raw HTML (not rendered, the actual source)",
        "3. Paste into ChatGPT or Claude",
        "4. Ask: 'What is this page about? What can I do here?'",
        "If AI can't understand it, neither can real agents",
        "Immediate feedback on structural problems"
      ]
    },

    // 16. Quick Wins
    {
      type: 'standard',
      title: "Quick Wins: Start Here",
      subtitle: "Improve accessibility AND machine-readability simultaneously:",
      body: [
        "1. Semantic HTML (screen readers announce it, machines parse it)",
        "2. Schema.org JSON-LD (voice assistants AND AI agents read it)",
        "3. Heading hierarchy (screen reader navigation AND machine structure)",
        "4. Descriptive link text (screen readers read context, machines too)",
        "5. Alt text on images (blind users AND machines need descriptions)",
        "Each change serves accessibility AND AI with one implementation"
      ]
    },

    // 17. Web Audit Suite
    {
      type: 'standard',
      title: "Web Audit Suite",
      subtitle: "Professional audit service",
      body: [
        "Implements patterns from the book",
        "Generates detailed reports",
        "Shows exactly where sites break for agents",
        "Provides specific fix recommendations",
        "Measure what you can't see."
      ]
    },

    // 18. Call to Action
    {
      type: 'standard',
      title: "Call to Action",
      subtitle: "Start with one pattern:",
      body: [
        "1. Pick highest-impact, lowest-effort change",
        "2. Implement it",
        "3. Measure the improvement",
        "4. Tackle the next one",
        "Sites that adapt early gain advantage."
      ]
    },

    // 19. Major Developments
    {
      type: 'standard',
      title: "The Seven-Day Platform Race (Jan 2026)",
      subtitle: "Three major platforms in one week:",
      body: [
        "Jan 5: Amazon Alexa+ (browser agent launch)",
        "Jan 8: Microsoft expands Copilot Checkout",
        "Jan 11: Google Universal Commerce Protocol (UCP)",
        "Timeline compressed: 12 months -> 6-9 months"
      ]
    },

    // 20. VPNs
    {
      type: 'standard',
      title: "VPNs and Hidden Guardrails",
      subtitle: "Two realities affecting every agent:",
      body: [
        "Browser extensions inherit network config (VPN exit nodes affect location)",
        "System prompts exist but are insufficient",
        "Guardrails work at reasoning level, not data extraction",
        "Hallucinations will continue - validation catches them"
      ]
    },

    // 21. Why This Matters Now
    {
      type: 'standard',
      title: "Why This Matters Now",
      subtitle: "Timeline acceleration is dramatic:",
      body: [
        "Dec 2024: Claude for Chrome",
        "Jan 2025: ACP launches",
        "Jan 2026: Three platforms in seven days",
        "Agent commerce is infrastructure.",
        "Implement Priority 1-2 patterns urgently."
      ]
    },

    // 22. Design for Both
    {
      type: 'standard',
      title: "Design for Both",
      subtitle: "The convergence principle in action:",
      body: [
        "What machines need is what disabled users need",
        "Blind users: Screen readers parse semantic HTML, AI agents parse same structure",
        "Motor-impaired users: Keyboard navigation needs semantic buttons, machines too",
        "Cognitive disabilities: Clear structure helps humans AND machines understand",
        "One semantic solution serves accessibility, SEO, and AI simultaneously",
        "Commercial pressure for AI finally matches moral obligation for accessibility"
      ]
    },

    // 23. Next
    {
      type: 'standard',
      title: "What Comes Next",
      subtitle: "Protocol Convergence vs Fragmentation",
      body: [
        "Agentic Commerce Protocol (ACP) - OpenAI/Stripe",
        "Universal Commerce Protocol (UCP) - Google",
        "Identity delegation patterns emerging",
        "Multiple approaches under development"
      ]
    },

    // 24. Takeaways
    {
      type: 'standard',
      title: "Key Takeaways",
      subtitle: "Six Essential Messages:",
      body: [
        "1. Screen readers AND machines both read structure, not visual design",
        "2. Same patterns serve blind users AND AI agents",
        "3. Semantic HTML works for accessibility AND machine parsing",
        "4. Schema.org helps voice assistants AND AI recommendations",
        "5. One solution serves disability access AND AI commerce",
        "6. Commercial pressure for AI matches moral obligation for accessibility"
      ]
    },

    // 25. Book
    {
      type: 'title',
      title: "Book & Contact",
      subtitle: "The Invisible Users",
      body: [
        "Tom Cranstoun",
        "tom.cranstoun@gmail.com | https://allabout.network",
        "LinkedIn: https://www.linkedin.com/in/tom-cranstoun/",
        "",
        "Project Pages:",
        "Book: https://allabout.network/invisible-users",
        "News: https://allabout.network/invisible-users/news.html"
      ],
      footer: "Questions? Discussion? Your challenges?"
    }

  ];

  // -------------------------------------------------------------------------
  // DECK CREATION
  // -------------------------------------------------------------------------

  // Remove the default initial slide
  var slides = deck.getSlides();
  if (slides.length > 0) {
    slides[0].remove();
  }

  // Set Master Master Background
  deck.getMasters()[0].getBackground().setSolidFill(THEME.colors.background);

  var pageWidth = deck.getPageWidth();
  var pageHeight = deck.getPageHeight();

  slideData.forEach(function(item) {
    var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    slide.getBackground().setSolidFill(THEME.colors.background);

    // 1. HEADER (Blue Background)
    // -------------------------------------------------
    // Header takes up top 140 pixels approx
    var headerHeight = 140;
    var headerShape = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 0, 0, pageWidth, headerHeight);
    headerShape.getFill().setSolidFill(THEME.colors.header);
    headerShape.getBorder().setTransparent();

    // 2. TITLE
    // -------------------------------------------------
    var titleBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 20, 10, pageWidth - 40, 60);
    var titleText = titleBox.getText();

    // Automatic Font Scaling for Long Titles
    // If title is > 32 chars, shrink font to avoid wrapping
    var fontSize = 36;
    if (item.title.length > 32) {
      fontSize = 28;
    }
    // If title is > 45 chars, shrink even more
    if (item.title.length > 45) {
      fontSize = 24;
    }

    titleText.setText(item.title);
    titleText.getTextStyle()
             .setFontFamily(THEME.fonts.title)
             .setFontSize(fontSize)
             .setForegroundColor(THEME.colors.textMain)
             .setBold(true);
    titleText.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);

    // 3. SUBTITLE (in Header)
    // -------------------------------------------------
    if (item.subtitle) {
      var subtitleBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 20, 70, pageWidth - 40, 40);
      var subText = subtitleBox.getText();
      subText.setText(item.subtitle);
      subText.getTextStyle()
             .setFontFamily(THEME.fonts.body)
             .setFontSize(18)
             .setForegroundColor('#E0E0E0'); // Slightly dimmer white
      subText.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    }

    // 4. BODY LAYOUT
    // -------------------------------------------------
    var contentTop = headerHeight + 30; // 170
    var contentLeft = 50;
    var contentWidth = 620;

    // Adjust width if there is a highlight box (Split view)
    if (item.type === 'highlight' && item.highlightBox) {
      contentWidth = 350; // Left column width
    } else {
      contentWidth = 620; // Full width
    }

    // Render Body Bullets
    if (item.body && item.body.length > 0) {
      // Create a single text box for bullets
      var bodyBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, contentLeft, contentTop, contentWidth, 300);
      var bodyText = bodyBox.getText();

      // Add bullets with custom "compass" look (simulated with unicode)
      var bulletString = "";
      var isHighlight = (item.type === 'highlight' && item.highlightBox);

      item.body.forEach(function(line) {
        // Use single spacing for highlight slides to save space, double for others
        var separator = isHighlight ? "\n" : "\n\n";
        bulletString += line + separator;
      });

      bodyText.setText(bulletString);

      // Adjust Font Size for Highlight slides (dense content)
      var bodyFontSize = isHighlight ? 14 : 18;

      bodyText.getTextStyle()
              .setFontFamily(THEME.fonts.body)
              .setFontSize(bodyFontSize)
              .setForegroundColor(THEME.colors.textMain);
      bodyText.getParagraphStyle().setLineSpacing(115); // Add breathing room
    }

    // 5. HIGHLIGHT BOX (Right Column)
    // -------------------------------------------------
    if (item.type === 'highlight' && item.highlightBox) {
      var highlightLeft = 430;
      var highlightTop = contentTop + 20;
      var highlightWidth = 260;
      var highlightHeight = 150;

      var box = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, highlightLeft, highlightTop, highlightWidth, highlightHeight);
      box.getFill().setSolidFill('#000000'); // Blacker background for contrast
      box.getBorder().setWeight(3);
      box.getBorder().getLineFill().setSolidFill(THEME.colors.highlightBorder);

      // Highlight Title (The Big Number)
      var boxTitle = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, highlightLeft, highlightTop + 10, highlightWidth, 60);
      var btRange = boxTitle.getText();
      btRange.setText(item.highlightBox.title);
      btRange.getTextStyle()
             .setFontFamily(THEME.fonts.title)
             .setFontSize(48)
             .setBold(true)
             .setForegroundColor(THEME.colors.highlightBorder); // Color match border
      btRange.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);

      // Highlight Text (The description)
      var boxText = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, highlightLeft, highlightTop + 70, highlightWidth, 70);
      var btxtRange = boxText.getText();
      btxtRange.setText(item.highlightBox.text);
      btxtRange.getTextStyle()
             .setFontFamily(THEME.fonts.title)
             .setFontSize(24)
             .setBold(true)
             .setForegroundColor(THEME.colors.textMain);
      btxtRange.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
    }

    // 6. FOOTER (No Bar)
    // -------------------------------------------------
    if (item.footer) {
      var footerMargin = 50;
      // If highlight slide, push it even lower (25px from bottom)
      if (item.type === 'highlight') { footerMargin = 25; }

      var lineY = pageHeight - footerMargin - 20;

      var footerBox = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 50, lineY + 10, 620, 50);
      var fText = footerBox.getText();
      fText.setText(item.footer);
      fText.getTextStyle().setFontSize(14).setForegroundColor('#CCCCCC');
    }

  });

  Logger.log('Deck created: ' + deck.getUrl());
}

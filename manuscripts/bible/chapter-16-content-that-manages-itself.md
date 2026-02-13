---
title: "Content That Manages Itself"
description: "The five-generation evolution of content management - from static files to self-describing cogs - and why the CMS as we know it is a transitional technology"
author: Tom Cranstoun
created: 2026-02-10
modified: 2026-02-10
version: "1.0"
status: draft
book: mx-codex
chapter: "16"
---

\newpage

# Chapter 16 - Content That Manages Itself

The five-generation evolution of content management - and an honest conversation with an industry that built me.

## The Confession

I need to tell you something uncomfortable. I spent most of my career building content management systems. I was "The AEM Guy" - the consultant you hired when Adobe Experience Manager needed to work at enterprise scale. Before that, the BBC's news distribution system. Before that, Superbase. Content systems since 1977.

I'm about to tell you that you don't need a CMS.

Not because the technology failed. It didn't. Content management systems solved real problems for decades. They made the web possible for organisations that couldn't write HTML. They gave content creators workflows, versioning, and collaboration tools that transformed how the world published. Every person reading this book either works with a CMS or consumes content managed by one.

But I've spent fifty years in content systems, and I can see the arc. The CMS is not where this story ends. It's where a new story begins.

Content that describes itself doesn't need a manager.

## The Five Generations

### Generation 1: Static Files

**Solved: Presence. Created: Maintenance.**

In the beginning, the web was HTML files on a server. You wrote them by hand. You uploaded them via FTP. Every page was a craft object - hand-coded, individually maintained, manually linked.

This worked when you had twelve pages. It broke when you had twelve hundred. Changing a navigation menu meant editing every file. Updating a footer meant touching every page. The web gave organisations presence - a website, a URL, a place that existed - but maintaining it required a developer for every change. Content was code. Only coders could create it.

The problem wasn't the technology. The problem was scale. You can hand-craft a cabinet. You cannot hand-craft a warehouse.

### Generation 2: Database CMS

**Solved: Authoring. Created: Lock-in.**

WordPress. Drupal. Joomla. Sitecore. The database-driven CMS separated content from code. Write your text in a form. The CMS stores it in a database. Templates render it as HTML. Developers build the templates once. Content creators publish forever.

This was revolutionary. A marketing team could publish a blog post without calling IT. A newspaper could update its front page in minutes, not hours. The CMS democratised publishing. It removed the developer from the daily content workflow and gave that power to the people who actually had something to say.

But the content lived in the database. In the CMS's format. In the CMS's schema. Try to move it to a different CMS and you discover the trap. Migration means extracting content from one proprietary structure, transforming it to another proprietary structure, and hoping nothing breaks. It takes months. It costs fortunes. Content gets lost, reformatted, stripped of relationships and metadata.

The CMS solved authoring and created lock-in. Your content was no longer code, but it was still trapped. Different cage, same bars.

### Generation 3: Headless CMS

**Solved: Separation. Created: Fragmentation.**

Contentful. Strapi. Sanity. Prismic. The headless revolution decoupled the backend from the frontend. The CMS stored and managed content. APIs delivered it to any channel - web, mobile, kiosk, digital signage. Frontend developers built whatever they wanted. The CMS didn't care.

This was genuine progress. Content could flow to multiple channels from a single source. The mobile app and the website showed the same content, managed in one place. The architecture was clean: backend for content, frontend for presentation, API in between.

But the separation created fragmentation. Content lived in the CMS, cached on CDNs, transformed by middleware, rendered by frontends. Where was the single source of truth? In the API - which meant in the CMS. Turn off the CMS and the content disappears. The API was the new lock-in. Different mechanism, same dependency.

And the integration complexity exploded. Every channel needed custom code to consume the API. Every new touchpoint meant more development. The headless CMS freed the frontend but chained everything to the API.

### Generation 4: Composable/MACH

**Solved: Flexibility. Created: Orchestration hell.**

Microservices. API-first. Cloud-native. Headless. The MACH Alliance promised the best of everything: pick best-of-breed components, swap anything, compose your ideal stack. No single vendor trap. Maximum flexibility.

On paper, beautiful architecture. In practice, orchestration hell.

You now had a headless CMS, a separate DAM, a commerce engine, a personalisation layer, a search service, a CDN, an analytics platform, a form builder, and an experience layer to glue them all together. Twelve vendors instead of one. Each with its own API, its own authentication, its own release cycle, its own pricing changes.

The composable stack needs a team just to keep it composed. Integration testing across twelve services. Contract negotiation with twelve vendors. The flexibility was real but the overhead was staggering. Many organisations found that the total cost of ownership - licensing, integration, maintenance, specialised talent - exceeded the monolith it replaced.

The CMS evolved from a monolith to a constellation. The content was still the same. It just had more infrastructure around it.

### Generation 5: Cogs

**Solved: The CMS itself. Created: Adoption.**

A cog is a markdown file with YAML frontmatter. Text. No database. No API. No server. No platform.

The YAML carries machine-readable metadata - what this content is, who wrote it, when it changed, what it relates to, how it should be used. The markdown carries human-readable prose. Both layers live in the same file. Both tell the same truth.

Storage? It's a file on a filesystem. Any filesystem. Your laptop, a server, a USB stick, a git repository. Move the file and you've moved the content. Copy the file and you've copied the content. There is no database to migrate, no API to maintain, no platform to license.

Metadata? It's in the file. The YAML frontmatter. Not in a separate system, not in a database column, not in a proprietary schema. In the file itself. The content carries its own context. It introduces itself.

Delivery? The AI agent reads the cog and renders it through The Machine Experience. Any agent that can parse YAML and read markdown can deliver the content. No middleware. No proprietary renderer. The action-doc IS the prompt. The AI is the runtime.

Templating? There are no templates. The Machine Experience generates a personalised view from the cog data and the user's personal cogs. The same cog produces a different experience for every user. The rendering is contextual, personal, and live.

Versioning? It's a text file. Use git. The same version control that manages code now manages content. Full history, branching, merging, collaboration. Every change tracked. Every version recoverable. Distributed by design.

Every function of the CMS - storage, metadata, delivery, rendering, versioning - has been absorbed by the cog ecosystem. Not by a bigger CMS. By no CMS at all.

The remaining problem is adoption. Getting the world to write cogs. This is a human problem, not a technology problem. The architecture works. The question is whether people will use it.

## The Proof

The Machine Experience is the proof.

When the MX App browses a website with cog metadata, it generates a personalised replacement page. The site's cog data is matched against the user's personal cogs. The AI agent writes a narrative tailored to that specific person. The MX View engine renders it as a clean, accessible page.

Where is the CMS in that flow?

The content is a cog file. The metadata is YAML. The delivery is an AI agent. The rendering is the MX View. The personalisation comes from the user's own cogs, stored on their own device. The governance comes from The Gathering's open standard.

Every piece of the CMS workflow has been replaced by something simpler, more portable, and more powerful. Not by a different CMS. By files, metadata, and intelligence.

## The Datalake

Here is where this becomes practical, not theoretical.

MX Technologies offers a lift-and-shift service. Your existing CMS content - the articles, products, pages, assets - gets extracted and converted into cogs. Each piece of content becomes a markdown file with YAML frontmatter. The collection of cogs forms a datalake.

But this datalake is not a traditional data warehouse. Each item in the datalake is a cog. The datalake is a cog collection. The Intent CMS composes from cogs. The MX View renders from cogs. The entire pipeline is cog-native.

After migration, what does the CMS do? The content is in cog files. The metadata is in YAML frontmatter. The delivery is through AI agents and the MX View. The content lives on filesystems, synced through encrypted git, rendered by intelligence.

The CMS was the chrysalis. The content has wings.

## The AEM Story

I was The AEM Guy. Adobe Experience Manager - the most powerful content management system in the world. Enterprise scale. Fortune 500 clients. Content fragments, experience fragments, DAM integration, multi-site management, personalisation, analytics, commerce. If a CMS could solve the fundamental problem of content at scale, AEM would have solved it.

AEM showed me three things.

**The ceiling.** Even AEM - with all its power, all its features, all its engineering - could not solve the fundamental problem: content trapped in a system. AEM content lives in JCR nodes. Moving it out means export scripts, transformation pipelines, validation passes. The most sophisticated CMS in the world still creates lock-in. If AEM can't solve this, no CMS can. The ceiling is the CMS itself.

**The pattern.** Content fragments in AEM were the industry moving toward self-describing content. Structured data, reusable across channels, API-accessible. Experience fragments composed from smaller pieces. The DAM added metadata to assets. AEM was heading in the right direction - toward content that carries its own context. It just couldn't let go of the platform. The platform was the business model. Self-describing content that doesn't need a platform is a difficult product to sell when you sell platforms.

**The cost.** Enterprise CMS at scale: millions in licensing. Years in implementation. Armies of specialists - developers, architects, content strategists, administrators. All to manage content that could describe itself. The cost isn't just money. It's time, complexity, and organisational dependency. When I saw clients spending eighteen months implementing a CMS to manage content that could be a folder of markdown files, the conclusion became unavoidable.

## The Career as Evidence

"Aren't you putting yourself out of business?"

Yes. Deliberately.

I'm putting "The AEM Guy" out of business because the future is "The MX Guy." If I don't disrupt my own position, someone else will. Someone without fifty years of content systems experience. Someone without the scars from every CMS migration, every vendor lock-in negotiation, every late-night deployment. Someone who will build the right thing badly because they don't understand what came before.

The career pivot is the proof of conviction. I'm not a theorist arguing from the sidelines. I'm a practitioner who built CMS implementations for decades and concluded, honestly, that the architecture has evolved past them. That conclusion cost me a lucrative consulting identity. I made that trade because the evidence is overwhelming.

## An Honest Message to CMS Professionals

This chapter will not be popular at a CMS Summit. I know that. A room full of people who build, sell, implement, and manage content management systems does not want to hear that their industry is transitional. I understand the discomfort. I lived inside that industry for decades.

So let me be clear about what I'm saying and what I'm not saying.

**I am not saying your work was wasted.** CMSes got us here. They solved real problems. They democratised publishing. They gave organisations the ability to communicate at scale. Every generation of CMS was the right answer for its era. Static files gave us presence. Database CMSes gave us authoring. Headless gave us separation. Composable gave us flexibility. Each step was necessary. Each step built the foundation for the next.

**I am not saying your skills are obsolete.** Content strategists, information architects, metadata specialists, content modellers - your skills are MORE valuable in a cog world, not less. The cog system runs on exactly the expertise you've spent your careers building. Who understands content structure better than a content strategist? Who models metadata better than an information architect? The platform changes. The expertise transfers.

**I am saying the platform is changing.** The CMS was the right abstraction when content couldn't describe itself. Now it can. A markdown file with YAML frontmatter carries its own context, its own metadata, its own governance markers. An AI agent reads it and delivers it to any channel. The rendering is contextual, personal, and intelligent. The CMS function doesn't disappear - it distributes. Into the files. Into the metadata. Into the agents.

The CMS industry itself built the stepping stones to this moment. Structured content. API-first thinking. Content modelling. Headless delivery. Composable architecture. Every innovation in the CMS world over the past fifteen years was a step toward content that manages itself. The industry should take credit for building the path, not feel threatened by where it leads.

## The Standard Makes It Safe

One legitimate fear: if the CMS disappears, what governs the content?

The Gathering. An independent standards body - MIT licensed, practitioner-led, modelled on the W3C. The Gathering defines the cog specification: what metadata is required, how access is controlled, how quality is measured, how governance works. The standard is open. No fees. No gatekeeping.

MX OS is one implementation of that standard. Like Linux running on POSIX. The standard belongs to everyone. Products are built on it. If MX Technologies disappeared tomorrow, the cogs would still work. They're text files. Any future system that can parse YAML and read markdown can use them.

This is the opposite of vendor lock-in. It's vendor irrelevance. Not because vendors don't matter, but because the content doesn't depend on any vendor to exist, to be read, or to be delivered.

## What Adoption Looks Like

The remaining problem is adoption. It's real and it's significant.

Most content in the world today is not self-describing. It lives in databases, proprietary formats, PDF files, Word documents, and web pages without structured metadata. Converting that content to cogs - or creating new content as cogs from the start - requires a shift in practice.

But the shift is smaller than it appears. A cog is a markdown file with YAML frontmatter. Most content professionals already write in markdown. Most structured content systems already use YAML or JSON for metadata. The conceptual gap between "content in a headless CMS with structured fields" and "content in a cog file with YAML frontmatter" is narrow. The difference is where it lives: on a platform, or on a filesystem.

The lift-and-shift service handles existing content. The datalake - the cog collection - absorbs what the CMS held. New content is authored as cogs from the start. The transition is not "throw everything away and start over." It's "migrate what you have and write new things differently."

The Machine Experience provides the incentive. When users see the difference between a generic website and a personalised MX View generated from cog data, the value proposition becomes visceral. Site owners who adopt cog metadata get better engagement, better accessibility, and personalisation at scale without privacy liability. The business case makes itself.

## The Last Line

I've been in content systems since 1977. I've watched five generations of content management solve five real problems and create five new ones. Each generation was the right answer for its moment. Each moment passed.

Cogs are the fifth generation. Content that describes itself. Files that carry their own context. Intelligence that reads them and acts. No platform required.

The CMS was the cocoon. It protected content while the web grew. It gave us authoring, workflows, delivery, and scale. It was necessary and it was good.

Now the content has its own wings. Where it goes next is up to the people who write it.

Content that describes itself doesn't need a manager.

---

*The evolution of content management is not a story of failure. It's a story of each generation building the foundation for the next. The CMS professionals who built structured content systems, who championed metadata, who pushed for API-first architecture - they built the road that leads here. This chapter is written with respect for that work and honesty about where it leads.*

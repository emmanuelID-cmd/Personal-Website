# Design Decisions

**Purpose:** Record the architectural, content, UX, and visual decisions that guide the Personal Website.

**Last Updated:** 2026-07-19
**Living Document:** Revisit these decisions when requirements change. Status describes the current implementation, not merely an earlier proposal.

## Decision: Use Four Main Tabs

**Status:** Accepted — Implemented

**Context:** Visitors need clear top-level routes through the portfolio.

**Decision:** Use Home, About, Projects, and Contact as the four primary tabs.

**Reasoning:** The four areas map directly to the site’s information architecture and keep the primary navigation easy to scan.

**Consequences:** New top-level content should fit an existing tab or require an explicit architecture decision.

**Related Files:** `index.html`, `styles.css`, `script.js`

## Decision: Maintain a Single Source of Truth for Copy

**Status:** Accepted — Implemented and documented

**Context:** Full content had been repeated across interfaces, creating maintenance and consistency problems.

**Decision:** Keep full narratives in their primary sections and use Home summaries and links rather than duplicating full sections.

**Reasoning:** One authoritative copy location reduces drift and keeps the landing page concise.

**Consequences:** `website-content.md` must be updated with every approved visible-copy change; summaries must link visitors to the relevant tab or section.

**Related Files:** `index.html`, `website-content.md`, Git history including `ffe02e0`

## Decision: Use Home as a Scrolling Landing Interface

**Status:** Accepted — Implemented

**Context:** Home should introduce the visitor progressively without hiding its content behind nested tabs.

**Decision:** Keep Hero, Philosophy, Professional Background, Featured Projects, Hobbies, and Contact CTA visible in one continuous Home document flow.

**Reasoning:** Scrolling supports discovery while preserving context and makes the portfolio feel like a landing experience.

**Consequences:** Section IDs and scroll offsets are part of the navigation contract.

**Related Files:** `index.html`, `styles.css`, `script.js`

## Decision: Use Secondary Home Navigation for Smooth Scrolling

**Status:** Accepted — Implemented

**Context:** Visitors need quick movement between Home sections without turning Home into nested content-switching tabs.

**Decision:** Use the `.home-section-nav` anchor menu for smooth scrolling and active-section indication.

**Reasoning:** Native links communicate document structure, preserve all Home content, and support keyboard and URL-hash navigation.

**Consequences:** `IntersectionObserver` tracking and a scroll fallback must remain scoped to the active Home tab.

**Related Files:** `index.html`, `styles.css`, `script.js`

## Decision: Combine Navigation Visually, Preserve Separate Controls

**Status:** Accepted — Implemented

**Context:** Main tabs and Home-section links serve different navigation purposes but previously felt visually disconnected.

**Decision:** Keep separate primary-tab buttons and secondary Home links while placing them in one frozen navigation region.

**Reasoning:** The distinction prevents ambiguous state while the shared region creates a coherent visual system.

**Consequences:** Changes to header height affect both sticky placement and scroll positioning.

**Related Files:** `index.html`, `styles.css`, `script.js`, Git history including `c488fef`

## Decision: Use One Removable Navigation Gap

**Status:** Accepted — Implemented

**Context:** The earlier `2rem` gap and framed secondary container created excessive dead air.

**Decision:** Use approximately `1rem` spacing beneath the main navigation and remove the secondary navigation’s white border/frame.

**Reasoning:** The shared background already provides visual continuity; compact spacing keeps content discoverable sooner.

**Consequences:** Any future header changes should be tested against both visual spacing and scroll offsets.

**Related Files:** `styles.css`, Git history including `c488fef`

## Decision: Offset Scrolling for the Frozen Header

**Status:** Accepted — Implemented

**Context:** Frozen navigation can cover section headings after a link is activated.

**Decision:** Measure the live header height into `--frozen-nav-height` and use reusable scroll-offset variables and `scroll-margin-top` on Home targets.

**Reasoning:** Runtime measurement remains accurate across responsive layouts and avoids empty spacer elements.

**Consequences:** `updateHomeNavigationMetrics()` must continue to run after resize and Home activation.

**Related Files:** `styles.css`, `script.js`

## Decision: Use an Interactive Journey Timeline

**Status:** Accepted — Implemented

**Context:** Four Journey cards displayed too much content simultaneously and were difficult to scan.

**Decision:** Use a horizontal visual timeline with four semantic tab buttons and one description panel.

**Reasoning:** The interaction makes chronology clear while reducing simultaneous density, and ARIA tab semantics preserve accessibility.

**Consequences:** Journey copy is stored in `journeyContent`; keyboard behavior and the selected state must be maintained together.

**Related Files:** `index.html`, `styles.css`, `script.js`, Git history including `f207e9a`

## Decision: Keep `website-content.md` as the Copy Source of Truth

**Status:** Accepted — Implemented

**Context:** Website copy changes need a durable, reviewable record.

**Decision:** Maintain the exact visible wording and hierarchy in `website-content.md`.

**Reasoning:** Documentation can be reviewed independently of presentation markup and helps prevent accidental content drift.

**Consequences:** Placeholder values must be labelled and historical wording must be archived rather than silently lost.

**Related Files:** `website-content.md`, `index.html`

## Decision: Maintain Living Project Documentation

**Status:** Accepted — Implemented by this change

**Context:** The project needs a durable record of roadmap status, reusable components, copy, and design rationale.

**Decision:** Maintain `website-itinerary.md`, `website-content.md`, `component-library.md`, and `design-decisions.md` as living documents.

**Reasoning:** Separating roadmap, copy, implementation inventory, and rationale makes future changes easier to verify and review.

**Consequences:** Documentation updates are part of the normal feature workflow and must not claim unverified work as complete.

**Related Files:** `website-itinerary.md`, `website-content.md`, `component-library.md`, `design-decisions.md`

## Decision: Keep the Easter Egg Playful but Professional

**Status:** Accepted — Invitation implemented; behavior pending

**Context:** The portfolio should reward exploration without distracting hiring managers, recruiters, or technology leaders.

**Decision:** Use a small rotated sticky note with a friendly invitation and keep any hidden discovery behavior separate from core navigation.

**Reasoning:** The note adds personality while preserving hierarchy and professional readability.

**Consequences:** Any future Easter Egg must be optional, accessible, and non-blocking.

**Related Files:** `index.html`, `styles.css`, `website-content.md`

## Decision: Use IBM Plex Serif for the Hero Greeting and Name

**Status:** Accepted — Implemented

**Context:** The name should feel memorable while the rest of the portfolio remains technology-oriented and professional.

**Decision:** Use IBM Plex Serif Semi Bold for the Hero greeting, IBM Plex Serif Bold for “Emmanuel De Jesus,” and Cascadia Code for the rest of the site.

**Reasoning:** A limited serif treatment creates emphasis while preserving readable, technology-oriented typography across the rest of the site.

**Consequences:** Future font changes should be limited to the named Hero roles unless a separate typography decision is approved.

**Related Files:** `index.html`, `styles.css`

## Decision: Defer Unverified or Unimplemented Features

**Status:** Accepted — Ongoing governance rule

**Context:** Several ideas have been discussed but are not present in the current source, including a contact form, hidden Easter Egg behavior, Dark Mode, and a formally versioned Developer Workflow v1.2.

**Decision:** Document these as planned, pending, or requiring confirmation rather than presenting them as completed.

**Reasoning:** The repository and current code are the source of truth for implementation status.

**Consequences:** Roadmap status may remain open until code, deployment evidence, or an approved project record confirms completion.

**Related Files:** `website-itinerary.md`, `component-library.md`, `website-content.md`

## Decision: Use Section-Specific Heading Color Families

**Status:** Accepted — Implemented

**Context:** The site-wide background treatment requires a clear, accessible way to distinguish Home, About, Journey, Projects, and Contact content without recoloring ordinary paragraph copy or changing the established layout.

**Decision:** Define reusable CSS custom properties for each major section's primary heading color and a brighter related subheading tint. Apply them only to verified section headings, subheadings, eyebrow labels, and Journey stage labels. About, Journey, Learned, and Style share the Soft Sage pair as one related interface.

**Reasoning:** Related color pairs make each major interface easier to scan while preserving a coherent professional palette. Semantic heading levels, sizes, and weights continue to communicate hierarchy for visitors who cannot rely on color alone.

**Consequences:** New headings should use the matching section variables instead of hardcoded colors. The Hero greeting block, its hanging `E`, navigation colors, and Adventure Banner are protected from this system; the Banner retains its independent visual treatment.

**Related Files:** `styles.css`, `website-itinerary.md`, `component-library.md`, `design-decisions.md`

## Decision: Review Contact Messages Before Delivery

**Status:** Accepted — Implemented locally; delivery pending

**Context:** Visitors need a clear way to compose a message, while the website does not yet have an approved email-delivery service or backend.

**Decision:** Use a two-column Contact layout with verified contact routes on the left and a message form on the right. The form offers Clear and Preview actions; Preview opens an accessible native dialog that shows the entered From, Subject, and Message values. Submit reports that delivery functionality is coming soon.

**Reasoning:** The workflow allows visitors to review their message and demonstrates the intended interaction without exposing email credentials, introducing an unapproved third-party service, or implying that a message has been sent.

**Consequences:** The form values remain in place when the dialog closes. Future delivery work must replace the Submit placeholder with validated, secure server-side or provider-backed handling.

**Related Files:** `index.html`, `styles.css`, `script.js`, `website-itinerary.md`, `component-library.md`

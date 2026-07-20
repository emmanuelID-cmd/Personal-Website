# Website Itinerary

**Purpose:** Track the Personal Website roadmap and the verified status of implementation work.

**Last Updated:** 2026-07-19
**Living Document:** Update this file whenever work is completed, assigned, reprioritized, or removed from the roadmap. Statuses are based on the current source code and repository history.

## ✅ Completed

### Repository and Workflow

- GitHub repository established with `main` as the active branch.
- Local `main` synchronized with `origin/main` before this documentation update.
- GitHub Pages deployment verified.
- Vercel production deployment verified.
- `.DS_Store` removed from version control and added to `.gitignore`.
- Feature-focused commit messages adopted in recent project history.

### Main and Secondary Navigation

- Four primary tabs implemented: Home, About, Projects, and Contact.
- Original hamburger navigation replaced with horizontal navigation.
- Primary navigation uses the Home tab as the Home control; no separate Home icon is present.
- Main-tab controls and Home-section controls remain separate while sharing one fixed navigation region.
- Home secondary navigation visually unified with the primary navigation.
- Navigation spacing reduced from `2rem` to `1rem`.
- Complete white border/frame removed from the Home secondary navigation.
- Dead-air scrolling space removed.
- Sticky-navigation scroll offsets corrected so section headings are not covered.
- Horizontal page scrolling prevented.
- Tab content switching implemented in `script.js`.
- About hover/focus dropdown implemented for Journey, Learned, and Style.
- Home secondary navigation aligned left to reserve the Banner's far-right region for audio controls.

### Adventure Banner Audio

- Twelve original synthesized tracks with varied durations and electronic styles generated locally without third-party audio licensing requirements.
- Accessible previous/next track, play/pause, 10-second rewind and fast-forward, seek, time, speed, mute, and volume controls implemented.
- Audio remains off until user interaction and loops only after playback begins.
- Audio controls share the navigation row on desktop and reflow on tablet/mobile layouts.

### Information Architecture

- Home established as the scrolling landing interface.
- About, Projects, and Contact established as separate tab panels.
- Home section navigation implemented for Hero, Philosophy, Professional Background, Featured Projects, Hobbies, and Contact.
- Home section links smooth-scroll without hiding Home content behind nested tabs.
- Active Home section tracking implemented with `IntersectionObserver` and a scroll fallback.
- Single Source of Truth content principle adopted.
- Duplicate full content removed from About, Projects, and Contact tab interfaces where summaries or links are sufficient on Home.

### Hero

- Hero greeting updated to “Hello, my name is / Emmanuel De Jesus / Thank you for visiting my website!”
- IBM Plex Serif implemented for the Hero greeting and name; Cascadia Code implemented across the rest of the site.
- The initial “E” receives distinct size, position, and color treatment.
- Easter Egg invitation implemented as a responsive sticky-note design.
- Existing Hero image, professional identity, introduction, and calls to action preserved.

### Visual System

- The established site-wide background treatment continues through all main content interfaces; the Adventure Banner retains its separate background treatment.
- Home, Projects, and Contact use distinct reusable color families with brighter related subheading tints; About, Journey, Learned, and Style share the Soft Sage pair to remain visually aligned.
- The Hero greeting, name, thank-you line, hanging capital `E`, and Adventure Banner typography are excluded from the section-heading color system.
- Heading hierarchy remains semantic and is reinforced by existing size and weight in addition to color.

### Home Content

- Hero and professional introduction.
- Builder Philosophy.
- Professional Background with education, skill groups, certifications, awards, and recognition.
- Featured Projects summaries.
- Hobbies and personal interests.
- Contact call-to-action.

### About Content

- Birth and Social Development narrative.
- Interactive Journey timeline with four verified stages:
  - Early Development.
  - Career Expansion.
  - Discovering AI.
  - Becoming a Builder.
- Journey content includes verified references to Microsoft Office, Oracle, Visual Basic, Perl, Java, HTML, CSS, JavaScript, artificial intelligence tools, Canva, and Grok (xAI).
- Learned cards: Adaptability, Continuous Learning, and Technology as an Enabler.
- Style cards: Analyze First, Act Independently, Improve Systems, and Build Practical Solutions.

### Projects and Contact

- Projects tab includes five project cards: Personal Website Portfolio, Budgeting & Analytics Tool, Perl Probability Random Number Generator, Java Pig Latin Translator, and Visual Basic Calendar Application.
- Contact tab includes professional identity, verified Email, Phone, LinkedIn, GitHub, and Portfolio Website links, plus a responsive two-column message form and email-preview modal.
- Contact form Clear, Preview, Back, and future Submit workflow are implemented; Submit currently communicates that delivery functionality is coming soon.
- Footer year generated dynamically.

### Accessibility and Responsive Behavior

- Primary controls use semantic buttons and links with ARIA state attributes.
- Journey timeline uses tab semantics, roving `tabindex`, visible focus, and Arrow/Home/End keyboard controls.
- About dropdown supports pointer, focus, Escape, and outside-pointer dismissal.
- Responsive rules cover desktop, tablet, and mobile layouts.

## 🟡 Assigned / In Progress

- Synchronize `website-content.md` with every user-facing copy change as the site evolves.
- Maintain and expand `component-library.md` as reusable patterns are added or refactored.
- Confirm and formally record the project’s developer workflow version. “Developer Workflow v1.2” is not verifiable in the current repository files or Git history.
- Final Hero typography selection implemented: IBM Plex Serif Semi Bold for the greeting, IBM Plex Serif Bold for the name, and Cascadia Code elsewhere.

## ⬜ Planned / Not Started

- Implement final Easter Egg discovery behavior; the sticky-note invitation exists, but no hidden interaction is implemented.
- Finalize project descriptions where additional detail is desired.
- Add project screenshots.
- Add verified GitHub repository links for individual projects.
- Add verified live project links.
- Connect the Contact form Submit workflow to an approved email-delivery service with validation, feedback, and error handling.
- Conduct a formal accessibility audit.
- Expand SEO and social-sharing metadata.
- Optimize images and responsive image delivery.
- Run Lighthouse and performance reviews and document results.
- Reconfirm whether Dark Mode remains an approved roadmap item before implementation.
- Add automated tests or repeatable browser checks for navigation and interactive components.

## Status Maintenance Rules

- Move an item to **Completed** only when the implementation is verifiable in the code, deployment, or Git history.
- Keep approved but unfinished work in **Assigned / In Progress**.
- Keep unstarted work in **Planned / Not Started** and label items requiring renewed approval.
- Remove or archive abandoned ideas rather than presenting them as active commitments.

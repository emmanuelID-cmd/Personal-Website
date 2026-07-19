# Component Library

**Purpose:** Document the reusable interface components currently implemented in the Personal Website, including their markup, styles, behavior, and maintenance constraints.

**Last Updated:** 2026-07-19
**Living Document:** Keep entries aligned with `index.html`, `styles.css`, and `script.js`. A component is marked Complete only when its implementation is present in the current source.

## Main Tab Navigation

**Status:** Complete

**Purpose:** Switch between the Home, About, Projects, and Contact interfaces.

**Location:**
- `index.html`
- `styles.css`
- `script.js`

**HTML Structure:** The header contains `nav.site-nav`. Main controls use `button[data-tab]`; tab panels use `[data-tab-panel]`.

**CSS Selectors:** `.site-header`, `.site-nav`, `.site-nav > button`, `.active`.

**JavaScript:** `showTab(tabId)` toggles panel visibility, active classes, and `aria-pressed`. The `tabButtons` click listener selects a tab and scrolls to the top.

**Responsive Behavior:** The navigation wraps and reduces spacing at the 820px and 560px breakpoints.

**Accessibility:** Buttons are keyboard operable and expose `aria-pressed`.

**Notes:** Keep the four primary tabs stable when adding secondary navigation.

## Frozen Navigation Region

**Status:** Complete

**Purpose:** Keep primary controls and the active Home section menu available while the page scrolls.

**Location:**
- `index.html`
- `styles.css`
- `script.js`

**HTML Structure:** `[data-header]` wraps the brand, primary navigation, and `.home-section-nav`.

**CSS Selectors:** `.site-header`, `.home-section-nav`, `.home-section-nav-inner`, `--frozen-nav-height`, `--home-scroll-offset`.

**JavaScript:** `updateHomeNavigationMetrics()` measures the actual header height and writes `--frozen-nav-height`; it runs on activation and resize.

**Responsive Behavior:** The two navigation rows wrap on smaller screens while preserving the shared frozen region.

**Accessibility:** Both navigation elements have labels; focus states remain visible.

**Notes:** Section targets use CSS scroll margins based on the combined frozen navigation height.

## Home Section Navigation

**Status:** Complete

**Purpose:** Move through all visible Home sections without creating nested hidden-content tabs.

**Location:**
- `index.html`
- `styles.css`
- `script.js`

**HTML Structure:** `.home-section-nav` contains links with `data-home-section` and hashes matching `.home-section-target` IDs: `home-hero`, `home-philosophy`, `home-background`, `home-projects`, `home-hobbies`, and `home-contact`.

**CSS Selectors:** `.home-section-nav`, `.home-section-nav-inner`, `.home-section-nav a`, `.home-section-nav a.active`, `.home-section-target`.

**JavaScript:** Click listeners call `scrollIntoView({ behavior: "smooth", block: "start" })` and update history. `setActiveHomeSection()`, `startHomeSectionTracking()`, `updateActiveHomeSection()`, and `IntersectionObserver` maintain the active item; a requestAnimationFrame scroll fallback is used when the observer is unavailable.

**Responsive Behavior:** The menu wraps at tablet widths and becomes a compact vertical-friendly layout at mobile widths.

**Accessibility:** Uses semantic anchors, `aria-label="Home sections"`, `aria-current="true"` for the active section, and browser-visible focus styles.

**Notes:** Tracking disconnects whenever Home is not the active main tab.

## About Dropdown

**Status:** Complete

**Purpose:** Provide quick access to the About, Journey, Learned, and Style sections.

**Location:**
- `index.html`
- `styles.css`
- `script.js`

**HTML Structure:** `.nav-dropdown` wraps the About button and `.nav-dropdown-menu` links with `data-section-link` values.

**CSS Selectors:** `.nav-dropdown`, `.nav-dropdown.is-open`, `.nav-dropdown-menu`, `.nav-dropdown-menu a`.

**JavaScript:** `setAboutDropdown(open)` controls the class and `aria-expanded`. Pointer, focus, Escape, outside-pointer, and click listeners keep the menu open while it is being used and close it when focus/pointer leaves.

**Responsive Behavior:** The menu remains vertical and is constrained to the viewport on narrow screens.

**Accessibility:** The trigger exposes `aria-haspopup` and `aria-expanded`; links are keyboard accessible and Escape returns focus to the trigger.

## Hero Section

**Status:** Complete

**Purpose:** Introduce Emmanuel De Jesus and provide primary calls to action.

**Location:**
- `index.html`
- `styles.css`

**HTML Structure:** `section#home-hero` contains `.hero-greeting`, `.hero-name`, `.hero-text`, `.hero-actions`, and the profile image.

**CSS Selectors:** `.hero-grid`, `.hero-greeting-layout`, `.hero-greeting-intro`, `.hero-name`, `.hero-name-initial`, `.hero-greeting-thanks`, `.hero-sticky-note`, `.portrait-card`, `.profile-photo`.

**JavaScript:** Main tab and CTA `data-tab-link` listeners handle navigation; no inline handlers are used.

**Responsive Behavior:** The two-column Hero collapses to one column at tablet/mobile breakpoints. The sticky note scales and remains beside or below the greeting without covering it.

**Accessibility:** Heading hierarchy begins with `h1`; the profile image has meaningful alt text; the sticky note uses an accessible label and hides the decorative egg emoji from assistive technology.

## Section Heading Color System

**Status:** Complete

**Purpose:** Distinguish major content interfaces through related, readable heading and subheading color families without changing body-copy colors or hierarchy.

**Location:**
- `styles.css`

**HTML Structure:** Applies to existing semantic `h2`, `h3`, `h4`, and `.eyebrow` elements within Home, About, Journey, Projects, and Contact section IDs.

**CSS Selectors:** `#home-philosophy`, `#home-background`, `#home-projects`, `#home-hobbies`, `#home-contact`, `#about`, `#learned`, `#style`, `#journey`, `#projects`, and `#contact` heading selectors.

**JavaScript:** None. This is a CSS-only visual system.

**Responsive Behavior:** The same variables apply at every breakpoint; existing heading sizing and layout rules remain unchanged.

**Accessibility:** Primary heading colors and brighter related subheading tints supplement, rather than replace, semantic heading levels, size, and weight. The protected Hero greeting and Adventure Banner are deliberately excluded.

**Notes:** Variables in `:root` define the Home, About, Journey, Projects, and Contact color families. About, Journey, Learned, and Style currently share the Soft Sage pair. Paragraph text, navigation states, the Hero greeting block, and Banner visuals must not be captured by these rules.

## Journey Timeline

**Status:** Complete

**Purpose:** Present four Journey stages interactively while showing one description at a time.

**Location:**
- `index.html`
- `styles.css`
- `script.js`

**HTML Structure:** `.journey-timeline[role="tablist"]` contains four `button.journey-stage[role="tab"]` controls. `#journey-stage-content[role="tabpanel"]` is the single display area.

**CSS Selectors:** `.journey-timeline`, `.journey-stage`, `.journey-stage.active`, `.journey-stage-number`, `.journey-stage-content`, `.journey-stage-description`.

**JavaScript:** `journeyContent` stores the approved title/paragraph data. `selectJourneyStage()` updates selected state, roving `tabindex`, panel labelling, and paragraphs. Arrow keys, Home, and End move between stages.

**Responsive Behavior:** The horizontal timeline wraps or stacks at narrow widths.

**Accessibility:** Uses tab/tabpanel semantics, `aria-selected`, `aria-controls`, `aria-labelledby`, visible focus, and `aria-live="polite"`.

## Skills and Recognition

**Status:** Complete

**Purpose:** Render categorized professional capabilities and verified recognition.

**Location:**
- `index.html`
- `script.js`
- `styles.css`

**HTML Structure:** `#skills-region` is populated under the Professional Background section; recognition remains semantic content in `.recognition-list`.

**CSS Selectors:** `.skills-region`, `.skill-group`, `.skill-tags`, `.skill-tag`, `.recognition`, `.recognition-list`.

**JavaScript:** `skillGroups` is the data structure; `renderSkills()` creates the groups and tags.

**Responsive Behavior:** Skill groups and recognition content reflow through the shared grid and breakpoint rules.

**Accessibility:** The dynamic region uses `aria-live="polite"`; headings identify each group.

## Project Cards

**Status:** Complete

**Purpose:** Present selected and full project summaries in reusable cards.

**Location:**
- `index.html`
- `styles.css`

**HTML Structure:** `.card-grid` contains repeated `article.info-card` elements with an `h3` and descriptive paragraphs.

**CSS Selectors:** `.card-grid`, `.card-grid.three`, `.info-card`, `.section-action`.

**JavaScript:** The Home “View All Projects” button uses the existing `data-tab="projects"` tab listener.

**Responsive Behavior:** Three-column grids collapse through the responsive grid rules.

**Accessibility:** Cards use semantic articles and heading hierarchy; actions are buttons/links with visible focus.

## CTA Buttons

**Status:** Complete

**Purpose:** Guide visitors to Journey, Contact, or the complete Projects tab.

**Location:**
- `index.html`
- `styles.css`
- `script.js`

**HTML Structure:** Anchors and buttons use `.button`, with `.primary` and `.secondary` variants.

**CSS Selectors:** `.button`, `.button.primary`, `.button.secondary`, `.hero-actions`, `.section-action`.

**JavaScript:** `tabLinks` and `tabButtons` connect cross-tab actions to `showTab()`.

**Responsive Behavior:** Button groups wrap on small screens.

**Accessibility:** Native controls, descriptive labels, visible hover/focus states, and no inline JavaScript.

## Contact Card

**Status:** Complete (form planned)

**Purpose:** Display contact routes and a return-to-portfolio link.

**Location:**
- `index.html`
- `styles.css`

**HTML Structure:** `section#contact` contains `.contact-layout` and `.contact-card` links.

**CSS Selectors:** `.contact-layout`, `.contact-card`, `.contact-card a`.

**JavaScript:** Portfolio link uses `data-tab-link="home"`; no form logic exists.

**Responsive Behavior:** Contact columns stack on smaller screens.

**Accessibility:** Native `mailto`, `tel`, and anchor links; placeholder social links carry descriptive labels.

**Notes:** Contact values and social URLs are placeholders and must be replaced only with approved values.

## Responsive Layout Utilities

**Status:** Complete

**Purpose:** Provide shared width, grid, spacing, and overflow behavior across the site.

**Location:**
- `styles.css`

**HTML Structure:** Shared `.section`, `.section-inner`, `.narrow`, `.muted`, `.background-layout`, and `.card-grid` wrappers.

**CSS Selectors:** `body`, `.section`, `.section-inner`, `.narrow`, `.background-layout`, `.card-grid`, media queries at 1180px, 1100px, 820px, 640px, and 560px.

**JavaScript:** No component-specific JavaScript.

**Responsive Behavior:** Layouts collapse, navigation wraps, typography scales, and `body { overflow-x: hidden; }` prevents horizontal page scrolling.

**Accessibility:** Spacing and reflow preserve reading order and focusability.

## Sticky-Note Easter Egg

**Status:** Complete (discovery behavior planned)

**Purpose:** Add a friendly, professional invitation to explore the site.

**Location:**
- `index.html`
- `styles.css`

**HTML Structure:** `aside.hero-sticky-note[aria-label="Easter egg invitation"]` with two paragraphs.

**CSS Selectors:** `.hero-sticky-note`, `.hero-sticky-note p`, `.hero-sticky-note strong`.

**JavaScript:** None currently; the note is decorative content only.

**Responsive Behavior:** Width and typography scale at mobile breakpoints; positioning avoids the greeting.

**Accessibility:** The note is labelled as an aside and the egg emoji is hidden from screen readers.

**Notes:** A hidden Easter Egg interaction is planned but not implemented.

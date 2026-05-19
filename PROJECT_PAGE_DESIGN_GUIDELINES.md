# Project Page Design Guidelines

**Status:** Locked 2026-05-18 from `projects/tubetext-v2.html` as the canonical case-study template. Apply this structure to all `/projects/*.html` case studies.

This document supersedes the prior Tailwind-based "Inverted Pyramid" guidelines (the site does not use Tailwind).

---

## What's locked

| Artifact | Path | What it is |
|---|---|---|
| **Canonical implementation** | `projects/tubetext.html` | The reference page. Read this when in doubt. |
| **Reusable skeleton** | `.claude/drafts/case-study-template.html` | Copy → rename → fill `[[PLACEHOLDERS]]` for new case studies. |
| **All styling** | `css/styles.css` (section commented `Case Study Pages (template)`) | Every `.cs-*` class lives here. Do **not** add scoped `<style>` blocks to individual case study HTML files. |
| **Image-prompt for diagrams** | `.claude/drafts/tubetext-architecture-image-prompt.md` | Pattern for generating polished architecture illustrations to replace ASCII placeholders. |

---

## Page anatomy

Every case study page is 4 layered regions, top to bottom:

```
1. Nav                      (existing .detail-nav  — unchanged across pages)
2. Hero                     (existing .detail-hero — unchanged structure)
3. Quick-summary specs bar  (existing .specs-bar  — 4 cells)
4. Case-study body          (.cs-wrapper, single column, 7 sections)
5. End-of-page logo         (.cs-end-mark, small, 45% opacity → 90% on hover)
6. Footer                   (existing .detail-footer — unchanged)
```

The **case-study body** is what this template defines. The other regions are shared with the rest of the site.

---

## The 7 sections (mandatory order)

| # | `data-num` | Section | What goes here |
|---|---|---|---|
| 1 | `01` | **The Problem** | What was broken / what need it solves. Lead with a 1-line punch. Three short paragraphs (the punch line gets its own paragraph). |
| 2 | `02` | **One-Minute Walkthrough** | Video placeholder until recorded. Use `<div class="cs-video-placeholder">`. Replace with `<iframe>`/`<video>` when ready. |
| 3 | `03` | **System Design** | Two intro paragraphs (punchy clauses, not encyclopedic). Then an H3 "Three design choices worth discussing" with three bolded-lead paragraphs. End with the ASCII diagram inside `<div class="cs-diagram">`. Reading order: intro → choices → diagram (so the diagram crystallizes what was just explained). |
| 4 | `04` | **Stack & Why** | Four H3 groups: **Backend** · **Frontend** · **AI Layer** · **Infrastructure & Auth**. Each bullet = one tech choice with a short note on the reasoning. Use `<em>` inside a `<li>` to insert a "Gotcha" callout (see below). |
| 5 | `05` | **Evaluation** | How you know it works. For AI projects: traces, LLM-as-judge, human feedback, sessions. Mix bullets with prose — convert label-value bullet lists to flowing paragraphs. |
| 6 | `06` | **Results** | Bullets only. Each = one discrete fact (live status, paying users, language/region coverage, cost visibility, load characteristics). |
| 7 | `07` | **Roadmap** | Bullets only. Ordered by rough priority: near-term first, growth/UX features next, infra and cleanup last. |

---

## Design conventions

### Section numbering

Each `<h2>` carries a `data-num` attribute (`01` through `07`). The CSS injects the number as a `::before` pseudo-element in monospace primary color. **Do not** type the number into the H2 text — let the CSS do it. Editorial feel, magazine-like.

```html
<h2 data-num="03">System Design</h2>
```

### Gotcha callouts (the production-lesson pattern)

A `<em>` element placed **inside** an `<li>` auto-renders as a "GOTCHA" callout: left-border accent in the primary color, faint tint background, monospace "GOTCHA" label. **Reserve these for honest production lessons.** They're the most credible content on the page — make them count.

```html
<li>
    <strong>PostgreSQL + async SQLAlchemy 2.0 + Alembic</strong> — one data store, no Redis cache layer.
    <em>SQLAlchemy expires attributes after commit(), and accessing them triggers a sync lazy-load that crashes async sessions with MissingGreenlet. Explicit db.refresh() after every commit.</em>
</li>
```

If a bullet doesn't have a real gotcha, don't fabricate one. Two or three gotchas across the whole page is enough.

### Spacing hierarchy (Notion-like)

Four-tier scale, each ~2× the previous:

| Tier | Where | Value |
|---|---|---|
| Paragraph internal | `line-height` | `1.7` |
| Between paragraphs | `p { margin-bottom }` | `1.25rem` |
| Between list items | `ul { gap }` | `1.1rem` |
| Between subsections (H3) | `h3 { margin-top }` | `3rem` |
| Between top-level sections | `.cs-wrapper { gap }` | `5rem` |

Mobile (`max-width: 768px`) reduces section gap to `3.5rem` and subsection gap to `2.25rem`.

### Bullet-list vs prose

| Use bullets when | Use prose when |
|---|---|
| Each item is a discrete, independent fact (Results, Roadmap) | The items form a sequential narrative or a definition |
| Items are scannable name-value pairs (Stack & Why) | A label-value list reads better as a sentence |
| The reader will skim, not read | The reader needs to follow reasoning |

When in doubt: prose. The page has 7 sections — bullet density compounds across them and starts to feel like a doc dump.

### End-of-page logo (`.cs-end-mark`)

Small (~90px desktop, 72px mobile), centered, 45% opacity → 90% on hover, linked to the live site. Acts as a quiet signature, not a marketing CTA. Goes between the closing `</div>` of `.cs-wrapper` and the footer.

---

## Workflow

1. **Copy** `.claude/drafts/case-study-template.html` → `/projects/<project-slug>-v2.html`
2. **Find-and-replace** all `[[PLACEHOLDERS]]`:
   - `[[Project Name]]`, `[[Project Tagline]]`, hero copy
   - `[[live_url]]`, `[[github_url]]`, image filenames
   - `[[Stat Value]]` + `[[Stat Label]]` for the hero badge
   - Specs-bar 4 cells
   - Section content
3. **Preview** at `http://localhost:8000/projects/<project-slug>-v2.html` (start with `python3 -m http.server` from repo root)
4. **Iterate** with feedback. The DRAFT banner makes it obvious this isn't live.
5. **Lock in:** drop the DRAFT banner, remove `<meta name="robots" content="noindex,nofollow">`, restore canonical link.
6. **Swap:** rename `<project>-v2.html` to `<project>.html` (overwriting the old page).
7. **Commit + push** to GitHub Pages.
8. **Later (optional):** port `data-i18n` keys for EN/DE/ES translations.

---

## Content tone guidelines

Lessons from the TubeText iteration (apply to every case study):

- **Lead each section with rhythm, not throat-clearing.** Short opening sentence > long preamble.
- **The hero is one sentence.** Anything longer dilutes it. End with proof of life (paying users, deployment status, real numbers — not aspirational language).
- **Numbers without context are noise.** "5 LLM providers" doesn't help unless the reader knows what that enables. Always pair a number with what it means.
- **Show real production gotchas.** They're the most credible part of the page. Reserve italics for these — they auto-style as callouts.
- **Avoid marketing-adjacent verbs.** "Empowers", "leverages", "enables seamless" — replace with concrete actions.
- **Avoid bullet-spam.** Convert label-value lists to prose. Save bullets for discrete-fact lists (Results, Roadmap, tech-choice tables).
- **Numbers, code, costs over adjectives.** "$0.0000723/sec" beats "affordable per-second pricing".

---

## What NOT to do

- **Don't** add a scoped `<style>` block to a case study HTML file. All styling is global.
- **Don't** invent a sidebar. The locked template is single-column for case-study body content. The old design had a sidebar — it duplicated content and split attention. Killed deliberately.
- **Don't** add more than 0–1 code blocks per case study. The architecture diagram + Stack & Why table should carry the technical credibility. If a code block is needed, use the existing `.code-block` macOS-window-chrome styling (already in `css/styles.css`).
- **Don't** fabricate gotchas. If you don't have a real one for a tech choice, leave the `<em>` out.
- **Don't** stretch a section that doesn't have content. If "Frontend" only has one technology, one bullet is honest.
- **Don't** reorder the 7 sections. The flow is calibrated: Problem → How you'd see it → How it works → What it's built on → How you know it works → What's live → What's next.

---

## Reference: tone comparison

Before (typical AI-generated portfolio prose):
> An async backend that orchestrates multiple AI services to extract, summarize, and translate YouTube video content — turning hours of video into actionable text in seconds.

After (locked template tone):
> A production tool that transcribes, translates, and summarizes video content, with AI quality evaluation built in — currently with organic paying clients.

The difference: removed "orchestrates", "actionable", "in seconds"; replaced with a concrete proof point ("organic paying clients") that's verifiable.

---

## Maintenance

When you change the template in `projects/tubetext.html` (or whatever becomes the new canonical reference), update this document. The template and the doc must agree — if they drift, the doc loses authority and the next case study reinvents the wheel.

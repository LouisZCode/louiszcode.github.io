# Luis Zermeno - Portfolio Website

A modern, responsive portfolio website showcasing AI development projects, professional experience, and technical skills. The site features a clean, dark-themed UI with responsive design, multilingual support, and strong accessibility features.

Live site: [www.lugz.dev](https://www.lugz.dev)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across devices
- **Multilingual Support**: Content available in English, German, and Spanish
- **Dark Theme**: Modern dark color scheme with blue accent colors
- **Project Portfolio**: Detailed project showcases with filtering capabilities
- **Experience Timeline**: Visual representation of professional experience
- **Accessibility Optimized**: ARIA attributes, keyboard navigation, and screen reader support
- **Performance Optimized**: Image lazy loading and efficient resource loading

## 💻 Technologies Used

- HTML5
- CSS3 (Custom styling without frameworks)
- JavaScript (Vanilla, no dependencies)
- GitHub Pages for hosting

## 📁 Project Structure

```
/
├── css/
│   └── styles.css          # Main stylesheet (vanilla CSS, HSL custom properties)
├── js/
│   ├── main.js             # Theme toggle, mobile menu, case studies, smooth scroll
│   └── i18n.js             # Translation dictionaries (EN/DE/ES) + page translator
├── images/                 # Image assets
├── projects/               # Individual project detail pages (vanilla CSS)
│   ├── agorafinancials.html
│   ├── spralingua.html
│   └── tubetext.html
├── index.html              # Homepage
├── experience.html         # Professional experience
├── bento-preview.html      # Archived design prototype (Tailwind, not linked)
├── DESIGN_SYSTEM.md        # Design tokens (palette, type, components)
├── PROJECT_PAGE_DESIGN_GUIDELINES.md   # Inverted-pyramid template (aspirational)
├── CNAME                   # Custom domain: www.lugz.dev
└── Resume_LuisZ_2026.pdf   # Downloadable resume
```

## 🚀 Setup and Deployment

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/louiszcode/LouisZCode.github.io.git
   ```

2. Navigate to the project directory:
   ```bash
   cd LouisZCode.github.io
   ```

3. Open the site locally with any web server. For example, with Python:
   ```bash
   # Python 3
   python -m http.server
   ```

4. Visit `http://localhost:8000` in your browser

### Deployment

This site is deployed using GitHub Pages from the main branch. To deploy updates:

1. Commit your changes using Conventional Commits format:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   # or
   git commit -m "fix: resolve bug in navigation"
   # or
   git commit -m "docs: update project documentation"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. GitHub Pages will automatically deploy the updates (typically within a minute)

### Commit Types
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation only
- `style:` - Formatting changes
- `refactor:` - Code refactoring
- `chore:` - Maintenance tasks

## ♿ Accessibility Features

The site implements several accessibility best practices:

- **ARIA Roles**: Proper semantic structure with ARIA roles and labels
- **Keyboard Navigation**: Enhanced focus styles for keyboard users
- **Skip to Content**: Hidden link appears for keyboard navigation
- **Screen Reader Support**: ARIA attributes and proper heading structure
- **Language Attributes**: Dynamic HTML lang attributes for screen readers

## 🌐 Multilingual Support

The site supports three languages via a runtime translation system:

- **English** (Default)
- **German** (Deutsch)
- **Spanish** (Español)

How it works:
- Translation strings live in `js/i18n.js` under `translations.en` / `translations.de` / `translations.es`.
- HTML elements are tagged with `data-i18n="<key>"`; `translatePage()` swaps text at runtime.
- The selected language persists in `localStorage` under `preferredLanguage`.

To add a new translatable string: add the key to **all three** dictionaries in `js/i18n.js`, then add `data-i18n="<key>"` to the corresponding HTML element.

## 🎨 Customization

### Styling Approach

The whole live site uses **vanilla CSS** (`css/styles.css`), with HSL custom properties keyed off a single `--hue` (currently `210`, blue) and `--sat`. Adjusting those two variables retones every page. Core tokens: `--bg-base`, `--bg-card`, `--text-heading`, `--text-body`, `--primary`, `--border-card`. A `data-theme="dark|light"` attribute on `<html>` flips a second variable set.

`bento-preview.html` is the only file using Tailwind CDN — an archived design prototype, not linked from the live site. See `DESIGN_SYSTEM.md` for the full Deep Space & Neon token list it references.

### Adding Projects

1. Create a new HTML file in `projects/` — match the structure of the existing pages (`spralingua.html`, `agorafinancials.html`, `tubetext.html`), which all use `../css/styles.css`.
2. Link it from the homepage's `#projects` section (`index.html`).
3. Add all translatable strings to `js/i18n.js` (EN/DE/ES) and tag elements with `data-i18n`.

> Note: `PROJECT_PAGE_DESIGN_GUIDELINES.md` describes a Tailwind-based template that no current page follows. Treat it as aspirational design guidance; match existing pages for actual implementation.

## 📧 Contact

- Email: [lgzg90@gmail.com](mailto:lgzg90@gmail.com)
- LinkedIn: [Luis Zermeno](https://www.linkedin.com/in/luis-zermeno-3b2210108/)
- GitHub: [louiszcode](https://github.com/louiszcode)

---

© 2025 Luis Zermeno. All Rights Reserved.

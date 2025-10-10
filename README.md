# Luis Zermeno - Portfolio Website

![Website Preview](images/profile_luis.png)

A modern, responsive portfolio website showcasing AI development projects, professional experience, and technical skills. The site features a clean, dark-themed UI with responsive design, multilingual support, and strong accessibility features.

Live site: [www.luiszermeno.info](https://www.luiszermeno.info)

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
│   └── style.css           # Main stylesheet
├── js/
│   ├── main.js             # Main JavaScript functionality
│   └── i18n.js             # Internationalization handling
├── images/                 # Image assets
├── projects/               # Individual project pages
│   ├── ai-agent-voice.html (+ ES, DE variants)
│   ├── lovedog.html (+ ES, DE variants)
│   └── spralingua.html (+ ES, DE variants)
├── index.html              # Homepage
├── portfolio.html          # Projects overview
├── experience.html         # Professional experience
└── Resume_LuisZ_2025.pdf   # Downloadable resume
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

The site supports three languages with a custom internationalization system:

- **English** (Default)
- **German** (Deutsch)
- **Spanish** (Español)

Language preferences are saved in localStorage. To add a new language:

1. Add translations in `js/i18n.js`
2. Add a language button in the navigation

## 🎨 Customization

### Colors

Main colors can be adjusted in the CSS variables in `css/style.css`:

```css
:root {
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --bg-card: #242424;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --accent-primary: #1a75ff;
    --accent-secondary: #0a4bb3;
    --accent-tertiary: #3a8eff;
}
```

### Adding Projects

To add a new project:

1. Create a new HTML file in the `projects/` directory
2. Add a card to `portfolio.html` with appropriate category tags
3. Optionally add to the featured projects on the homepage

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- Email: [lgzg90@hotmail.com](mailto:lgzg90@hotmail.com)
- LinkedIn: [Luis Zermeno](https://www.linkedin.com/in/luis-zermeno-3b2210108/)
- GitHub: [louiszcode](https://github.com/louiszcode)

---

© 2025 Luis Zermeno. All Rights Reserved.

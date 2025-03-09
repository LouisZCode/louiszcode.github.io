# Luis Zermeno Portfolio Website

This repository contains the source code for Luis Zermeno's professional portfolio website.

## Website Structure

The website is structured into the following main pages:

- **Home (`index.html`)**: The landing page with a brief introduction, skills overview, and featured content.
- **Experience (`experience.html`)**: A chronological timeline of professional experience and achievements.
- **Portfolio (`portfolio.html`)**: A showcase of projects, including AI development work and game development.
- **Project Details (`projects/*.html`)**: Individual pages with in-depth information about specific projects.

## Features

- **Responsive Design**: Fully responsive layout that works across desktop, tablet, and mobile devices.
- **Multilingual Support**: Content available in English, German, and Spanish, controlled by language selector in the navigation bar.
- **Dark Theme**: Modern dark-themed design with blue accent colors for optimal readability.
- **Project Filtering**: Portfolio page includes filtering by project category (AI, Game Dev, etc.)
- **AI Integration**: Showcases projects that blend AI technologies with other domains like game development
- **Interactive Elements**: Various interactive components to improve user experience.

## Projects

### Love Dog - Brackeys Game Jam 2025

A 2D platformer game built in Godot where the player takes on the role of a loyal dog trying to protect their owner's romantic date. The game features:

- Multiple minigames including wire fixing and password puzzles
- Progressive difficulty across three nights
- Dynamic "love meter" that responds to the player's performance
- Character-driven narrative with expressive animations
- AI-generated assets, music, and sound effects created with ComfyUI
- Playable on [itch.io](https://life-of-luis.itch.io/love-dog)

## Technical Details

- **CSS**: Custom-designed responsive layouts with CSS variables for theming.
- **JavaScript**: Client-side scripting for interactive features and language switching.
- **SVG Graphics**: Vector-based graphics for project showcases.
- **Responsive Images**: Fallback system for using SVGs when PNGs are not available.

## Development

To convert SVG images to PNG for better browser compatibility, run:

```bash
npm install puppeteer sharp
node convert_svg_to_png.js
```

## Author

Luis Zermeno - AI Developer and Senior Talent Partner based in Berlin, Germany

## License

© 2025 Luis Zermeno. All Rights Reserved.

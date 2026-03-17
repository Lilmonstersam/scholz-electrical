# Scholz Electrical - Local SEO Landing Pages

Professional, conversion-optimized landing pages for Scholz Electrical's local service areas.

## 🚀 Overview

This repository contains the source code and data for generating localized SEO landing pages. The site features:
- **Conversion-Optimized Design**: Guided by CRO best practices and high-end frontend design principles.
- **Dynamic Content Generation**: HTML pages are generated from `data.json` using a custom generator script.
- **Responsive Layouts**: Full-width hero sections, 3-column project galleries, and sticky headers.
- **Automated Deployment**: GitHub Actions workflow for seamless updates to GitHub Pages.

## 🛠 Tech Stack
- **Languages**: HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Build System**: Node.js custom generator
- **Hosting**: GitHub Pages
- **Automation**: GitHub Actions

## 🏃 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Lilmonstersam/scholz-electrical.git
   cd scholz-electrical/local-seo
   ```
2. (Optional) Install development dependencies:
   ```bash
   npm install
   ```

### Development
To generate the latest HTML pages:
```bash
npm run build
```

To view the site locally:
```bash
npm run dev
```

## 📂 Project Structure
- `template.html`: The base layout for all service pages.
- `data.json`: Suburb-specific content and metadata.
- `generate.mjs`: Node.js script that parses the data and emits HTML files.
- `Images/`: Optimized assets and icons used across the site.
- `styles.css`: Central design system and responsive grid definitions.

## 🤖 Automated Deployment
This project uses GitHub Actions to automatically deploy updates. Whenever a change is pushed to the `main` branch, the `deploy.yml` workflow:
1. Builds the latest static files.
2. Deploys the root directory to the `gh-pages` branch.

---
*Created with ❤️ for Scholz Electrical.*

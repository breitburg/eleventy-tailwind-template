# Eleventy Tailwind Template

A modern, optimized website template built with Eleventy and Tailwind CSS, featuring automatic asset processing, bundling, and minification.

## Features

- **Eleventy** - Fast static site generation
- **Tailwind CSS `v4.1`** - Utility-first CSS framework (refer to [v4](https://tailwindcss.com/blog/tailwindcss-v4) and [v4.1](https://tailwindcss.com/blog/tailwindcss-v4-1) blog posts for new features)
- **PostCSS Processing** - CSS transformation pipeline
- **Asset Bundling** - Optimized CSS and JS output with Eleventy's bundle feature
- **Minification** - HTML, CSS, and JavaScript minification
- **Development Server** - Live reloading during development
- **Simple Structure** - Clean, organized project architecture

## Getting Started

### Installation

Clone this repository and install dependencies:

```bash
git clone [repository-url] my-website
cd my-website
bun install
```

### Development

Start the development server with live reloading:

```bash
bun run dev
```

This will start a local server at `http://localhost:8080` with automatic rebuilding when files change.

### Production Build

Create an optimized production build:

```bash
bun run build
```

The compiled site will be available in the `_site` directory.

## Project Structure

```
├── src/                  # Source files
│   ├── _data/            # Global data files
│   ├── _includes/        # Layout templates and partials
│   │   ├── layouts/      # Base layouts
│   │   └── partials/     # Reusable components
│   ├── content/          # Page content
│   ├── css/              # CSS files
│   │   └── tailwind.css  # Tailwind CSS entry point
│   └── public/           # Static files (copied to output)
├── .eleventy.js          # Eleventy configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Customization

### Site Metadata

Edit `src/_data/metadata.json` to update site-wide information:

```json
{
    "title": "Your Site Name",
    "description": "Your site description",
    "language": "en",
    "author": "Your Name"
}
```

### Tailwind CSS

The base Tailwind CSS import is located in `src/css/tailwind.css`. Add custom CSS or additional Tailwind directives here.

### Layouts

The project includes two base layouts:

- `layouts/base.njk`: The main HTML structure
- `layouts/example.njk`: An example layout extending the base

Create new pages by adding Markdown or Nunjucks files to the `src/content` directory with appropriate frontmatter:

```yaml
---
title: Page Title
layout: layouts/example.njk
permalink: /page-path/
---
```

### Static Assets

Place static files in the `src/public` directory. These will be copied directly to the output directory.

## Asset Processing

### CSS

The template automatically processes CSS through PostCSS with Tailwind and minifies the output for production. CSS is inlined in the HTML for optimal performance.

You can include CSS in your pages or templates using the CSS bundle syntax:

```njk
{%- css %}
/* Your CSS here */
{% include "src/css/component.css" %}
{% endcss %}
```

All CSS added this way will be processed through PostCSS with Tailwind and minified in the final output.

### JavaScript

JavaScript files are bundled and minified for production. Add your JavaScript to bundles using the JS bundle syntax:

```njk
{%- js %}
// Your JavaScript here
{% include "src/js/component.js" %}
{% endjs %}
```

All JavaScript added this way will be bundled and minified in the final output.

### HTML

HTML output is automatically minified for production builds, removing comments and unnecessary whitespace.

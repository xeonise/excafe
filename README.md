# Cafeneaua

> Gust bun. Momente frumoase.

A clean, responsive static website for **Cafeneaua**, a coffee house & bistro.
Built with plain HTML, CSS and a sprinkle of vanilla JavaScript — no build step.

## Live site

Hosted with GitHub Pages → https://xeonise.github.io/excafe/

## Structure

```
.
├── index.html            # Single-page site (hero, about, menu, coffee, gallery, contact)
├── assets
│   ├── css/style.css     # All styles + responsive rules
│   ├── js/main.js        # Mobile nav, menu filter, scroll reveal, form validation
│   └── img/              # Photography used across the site
└── .nojekyll             # Serve assets as-is on GitHub Pages
```

## Features

- Sticky navigation with a mobile hamburger menu
- Fullscreen hero with a slow zoom effect
- Filterable menu (all / breakfast / mains / dessert)
- Scroll-reveal animations
- Reservation form with client-side validation
- Fully responsive layout

## Local development

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## License

MIT

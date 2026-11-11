# Cosmic Ashwin

A responsive, cosmic-inspired personal portfolio for Ashwin Kaushik (@cosmicashwin), built with Vite and React. Intended URL: https://cosmicashwin.github.io/.

## Local development

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

Create and inspect the production build:

```sh
npm run build
npm run preview
```

Vite writes the static site to `dist/`. Do not commit that directory.

## Deploy to GitHub Pages

1. Push this project, including `package-lock.json`, to the `main` branch of `cosmicashwin/cosmicashwin.github.io`.
2. In the repository, open **Settings → Pages → Build and deployment**, and select **GitHub Actions** as the source.
3. The included `.github/workflows/deploy.yml` installs dependencies, builds the site, and deploys it. You can also start it manually from the Actions tab.
4. After the workflow succeeds, visit https://cosmicashwin.github.io/.

The Vite `base` is `/` because this is a user Pages site. For a project site under a repository subpath, change `base` in `vite.config.js` and adjust the favicon URL in `index.html` accordingly. If the default branch is not `main`, update the workflow trigger.

## Content and customization

- Edit text, sections, and project links in `src/main.jsx`.
- Edit the theme, CSS artwork, responsive layouts, and motion in `src/styles.css`.
- Update page metadata in `index.html` and the icon in `public/favicon.svg`.
- Memes links to `https://github.com/cosmicashwin/memes`.
- Vision Cursor links to `https://github.com/cosmicashwin/vision--cursor` (two hyphens).
- The only confirmed social link is GitHub. “More about me · Coming soon” and “Contact details & social links · Coming soon” are intentional, visibly marked placeholders. Replace them with approved details or remove them. No email address or other social account is assumed.

The artwork is decorative CSS and inline SVG, not actual project screenshots. Fonts load from Google Fonts with local sans-serif fallbacks, so the site remains usable without that service. There are no analytics, forms, or backend services.

## Accessibility

Includes semantic landmarks, a skip link, visible keyboard focus, meaningful repository link labels, decorative artwork hidden from assistive technology, responsive layouts, and reduced-motion support. Navigation uses native in-page links; contact links open in the same tab.

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
- Contact details are configured in `src/profile.js`: email `ashwinkaushik100@gmail.com` and Discord handle `cosmicashwin`. “More about me · Coming soon” remains a biography placeholder.

The artwork is decorative CSS and inline SVG, not actual project screenshots. Fonts load from Google Fonts with local sans-serif fallbacks, so the site remains usable without that service. There are no analytics, forms, or backend services.

## Accessibility

Includes semantic landmarks, a skip link, visible keyboard focus, meaningful repository link labels, decorative artwork hidden from assistive technology, responsive layouts, and reduced-motion support. Navigation uses native in-page links; contact links open in the same tab.

## Live Discord card

The contact card uses the public [Lanyard API](https://github.com/Phineas/lanyard) to retrieve the current Discord avatar, presence, custom status, shared activity, and Spotify listening details.

1. Enable Developer Mode in Discord Settings → Advanced, then right-click your profile → Copy User ID.
2. Set `discordId` in `src/profile.js` to that numeric ID as a **string**.
3. Join the [Lanyard Discord server](https://discord.gg/lanyard) with that account and remain a member so Lanyard can observe your presence.
4. Build and deploy. No API key, Discord token, or backend is required.

The card refreshes every 30 seconds while the page is visible and immediately when it becomes visible again. Requests time out after 10 seconds. Missing configuration or service failures show an unavailable state rather than inventing an online/offline status. Invisible presence is indistinguishable from offline; activities only appear if Discord shares them. A failed avatar falls back to initials. Browser requests go directly to Lanyard and the Discord image CDN.

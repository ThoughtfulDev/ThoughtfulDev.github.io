# ThoughtfulDev Portfolio

Static portfolio landing page for ThoughtfulDev. Uses plain HTML/CSS with CDN React/ReactDOM to render the hero and project cards—no build steps required.

## Quick start
- Open `index.html` in any modern browser, or serve the folder with a simple static server (`python -m http.server`).
- Edit `css/styles.css` to tweak visuals, gradients, or layout.
- Update projects/contact details in `index.html` inside the `projects` array and footer link.

## Tech notes
- React 18 via CDN renders the UI; IntersectionObserver adds card reveal animations.
- Fonts: Manrope + Space Grotesk (Google Fonts). Icons: Font Awesome CDN.
- Background uses animated gradient orbs and grid overlay defined in `css/styles.css`.

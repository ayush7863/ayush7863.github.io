# Portfolio — React + Vite + Tailwind

An implementation of the "Obsidian Telemetry" portfolio design as a React app.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

Node 18+ required.

## Make it yours

Almost everything you'll want to change lives in **`src/data/portfolio.js`**.
Name, headline, stats, projects, roles, skills, education, certifications,
contact channels and footer links are all plain JS objects — edit them and the
components re-render around your content. You shouldn't need to touch JSX for a
normal content swap.

A few specifics:

| What | Where |
| --- | --- |
| Your photo | Save it as `public/portrait.jpg`. Set `profile.portrait` to `null` to fall back to an initials monogram. |
| Your CV | Save it as `public/resume.pdf`, or point `profile.resumeUrl` elsewhere. |
| Page title / meta description | `index.html` |
| Colours, fonts, spacing | `tailwind.config.js` |
| Section order | `src/App.jsx` |

### Hooking up the contact form

`contact.endpoint` in the data file is `null`, so the form runs in demo mode: it
validates, shows a sending state, then confirms without posting anywhere. Set it
to a URL and the form will `POST` JSON (`{ name, email, role, message }`) there:

```js
endpoint: 'https://formspree.io/f/YOUR_ID',
```

Formspree, Getform and Basin all accept that shape as-is. If you'd rather run
your own Express handler (this is a MERN portfolio, after all), point it at
`/api/contact` and read `req.body`.

## Structure

```
src/
├── data/portfolio.js      all content, one file
├── components/
│   ├── ui.jsx             Icon, Beacon, Tag, StatusChip, Section, RichText
│   ├── Header.jsx         fixed nav + scroll-spy + mobile menu
│   ├── Hero.jsx           headline, portrait card, stat strip
│   ├── Projects.jsx       case study grid
│   ├── Experience.jsx     role timeline
│   ├── Skills.jsx         competency columns
│   ├── Education.jsx      degree + certifications
│   ├── Contact.jsx        controlled form + copy-to-clipboard
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css              Tailwind layers + base styles
```

## What the React version adds over the static export

- **Scroll-spy navigation** — an `IntersectionObserver` highlights the section
  you're actually looking at, instead of a hardcoded active link.
- **Mobile menu** — the original nav simply disappeared under `md`.
- **Real form handling** — controlled inputs, sending/sent/error states, an
  `aria-live` region, and an optional backend endpoint.
- **Copy-to-clipboard** with a state-driven confirmation that resets itself.
- **Portrait fallback** — if the image is missing, you get a monogram rather
  than a broken image icon.
- **Accessibility passes** — skip link, visible keyboard focus, `aria-expanded`
  on the menu toggle, semantic `article`/`section`/`nav`/`dl` elements, and
  `prefers-reduced-motion` respected.

## Deploying

The build output is a static `dist/` folder — Vercel, Netlify, GitHub Pages and
Cloudflare Pages all work with zero config. For GitHub Pages, set `base` in
`vite.config.js` to `'/<repo-name>/'` first.

## Fonts

Geist, Inter and JetBrains Mono load from Google Fonts via `index.html`, with
Material Symbols for the icons. To self-host instead (faster, no third-party
request), drop the font files in `public/fonts`, add `@font-face` rules to
`src/index.css`, and delete the two `<link>` tags.

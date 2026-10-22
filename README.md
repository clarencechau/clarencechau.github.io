# clarencechau.com

My personal portfolio — check it out at **[clarencechau.com](https://clarencechau.com)**.

Built with React + Vite. One page, light & dark mode, and everything you see is driven by a single config file.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Personalizing

Almost everything lives in **[`src/site.config.js`](src/site.config.js)** — no need to touch components.

| Want to…                              | Change                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------- |
| Change the brand color                | `theme.accent` — any CSS color. Buttons, links, glow & favicon follow it. |
| Default to dark / light               | `theme.defaultMode` — `"light"`, `"dark"` or `"system"`                   |
| Swap the hero backdrop                | `theme.heroBackground` — `"aurora"`, `"grid"`, `"video"` or `"none"`      |
| Reorder / hide sections               | `sections` — e.g. `["experience", "projects", "contact"]`                 |
| Edit the headline, bio, jobs, etc.    | `hero`, `about`, `experience`, `projects`, `athletics`, `videos`          |
| Highlight a word                      | Wrap it in `*asterisks*` (accent gradient) or `**double**` (bold)         |
| Feature a project full-width          | `featured: true` on the project                                           |
| Mark your current job / add a team    | `current: true` and `team: "…"` on an experience item                    |
| Change the hero photo frame shape     | `hero.imageAspect` — e.g. `"1 / 1"` or `"4 / 5"`                          |
| Turn draggable hero cards on/off      | `hero.draggableHighlights` (double-click a card to reset it)              |
| Add a résumé button                   | Drop `resume.pdf` in `/public` and set `person.resume: "/resume.pdf"`     |
| Add a social link / skill icon        | Use any name from [`src/components/Icon.jsx`](src/components/Icon.jsx)    |
| Tweak fonts, radius, light/dark tones | Tokens at the top of [`src/styles/global.css`](src/styles/global.css)     |

Images go in `public/images/` and are referenced as `/images/…`.

### YouTube view & like counts

Create a `.env` file in the project root:

```bash
VITE_YOUTUBE_API_KEY=your-key   # REACT_APP_YOUTUBE_API_KEY also still works
```

Without a key the video cards still render — they just skip the stats.

> The key ends up in the public JS bundle (that's unavoidable for a static site), so
> [restrict it](https://console.cloud.google.com/apis/credentials) to the
> `clarencechau.com/*` HTTP referrer and the YouTube Data API only.

## Deploying

```bash
npm run deploy
```

Builds to `dist/` and publishes it to the `gh-pages` branch. `public/CNAME` is included in every build, so the custom domain no longer needs to be re-added after each deploy.

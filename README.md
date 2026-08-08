# Portfolio site — Nikita Avadhut

Personal portfolio. Built from scratch with plain HTML, CSS and JavaScript.
No frameworks, no build step, no backend.

Live: https://75423nikitaavadhut.github.io/ (not deployed yet)

## Run it locally

Open `index.html` in a browser, or use VS Code's Live Server extension for
auto-reload while editing.

## Structure

```
index.html            the whole site — one page, anchor navigation
assets/css/
  tokens.css          every colour, size and spacing value. Nothing else hardcodes one.
  base.css            resets and plain-element defaults
  layout.css          page structure and section rhythm
  components.css      reusable pieces: project row, tag, theme toggle
assets/js/main.js     theme toggle and scroll reveal. Optional polish only.
assets/img/           images
assets/docs/          public-safe CV
robots.txt            crawler rules
sitemap.xml           page list for search engines
```

## Rules this project follows

- Works fully with JavaScript disabled.
- Mobile-first. Breakpoints only where the layout actually breaks.
- WCAG AA contrast, visible focus, full keyboard navigation, `prefers-reduced-motion` honoured.
- No colour or size hardcoded outside `tokens.css`.
- No dead code. Nothing added before the page needs it.
- Never publishes phone number, date of birth, gender, nationality or marks.
- Never names client companies. Sectors only.

## Not done yet

- Real copy in place of the `TODO` comments in `index.html`
- Project screenshots and `og-card.png`
- Public-safe CV in `assets/docs/`
- A working contact method
- Git repository and GitHub Pages deployment

# Academic Portfolio — plain HTML/CSS/JS

A modern, interactive academic portfolio with **zero dependencies and zero build step**.
Open `index.html` in a browser and it works. Nothing to install, nothing that can break.

**Features**

- Editorial design with light/dark mode, scroll animations and a bento "at a glance" grid
- Filterable & searchable publications with one-click **Copy BibTeX**
- Built-in **Jupyter notebook viewer** (modal) with `.ipynb` download
- GitHub repositories **fetched live** from the GitHub API — always up to date
- Teaching, supervision, talks, awards, languages, timeline — all data-driven
- Fully responsive, accessible, respects `prefers-reduced-motion`

## Customize (or adapt for another person) in 3 steps

1. **Edit `js/data.js`** — every text on the site lives in this one file:
   name, bio, publications, projects, talks, teaching, students, awards…
   Set `githubUser` to any GitHub username and the repos section updates itself.
2. **Replace the images** — `assets/img/profile.png` (your photo) and `files/cv.pdf` (your CV).
3. **Optional: change the look** — colors, fonts and roundness are CSS variables at the
   top of `css/styles.css` (`--accent`, `--font-display`, `--radius`…). Change one line,
   change the whole site.

That's it. No terminal, no build, no framework.

## Preview locally

Any static server works (needed for the notebook viewer iframe):

```bash
# with Python
python -m http.server 8080
# then open http://localhost:8080
```

Or just double-click `index.html` (everything works except the notebook iframe on some browsers).

## Deploy

- **GitHub Pages:** push this folder to a repo → Settings → Pages → Source: *GitHub Actions*
  or *Deploy from branch* (this site has no build, so branch deploys are safe here).
- **Netlify / Vercel / Cloudflare Pages:** drag & drop the folder. Done.

## Structure

```
index.html          page structure (sections)
css/styles.css      design system (variables at top) + styles
js/data.js          ← ALL your content (the only file you edit)
js/main.js          rendering & interactions (no need to touch)
assets/img/         profile photo + figures
notebooks/          Jupyter notebooks (.html export + .ipynb)
files/              CV pdf
```

To add a notebook: export it from Jupyter as HTML (`File → Save and Export → HTML`),
drop both files in `notebooks/`, and add an entry to `notebooks:` in `js/data.js`.

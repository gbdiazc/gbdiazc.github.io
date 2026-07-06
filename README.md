# gbdiazc.github.io

Personal academic website of **Dr. Gabriela Berenice Díaz Cortés** — researcher at the Mexican Institute of Petroleum (IMP), working on reservoir simulation, porous media flow, physics-informed neural networks (PINNs), optimization and scientific computing.

🌐 **Live site: [gbdiazc.github.io](https://gbdiazc.github.io)**

## About this repository

Built with [Hugo](https://gohugo.io/) and the [Hugo Blox](https://hugoblox.com/) academic CV template. Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

### Editing content

| What | Where |
|------|-------|
| Profile, bio, experience, skills, awards | `data/authors/me.yaml` |
| Profile photo | `assets/media/authors/me.png` |
| Homepage sections | `content/_index.md` |
| Publications | `content/publications/<name>/index.md` + `cite.bib` |
| Talks & conferences | `content/events/<name>/index.md` |
| Courses | `content/courses/<name>/_index.md` |
| Projects | `content/projects/<name>/index.md` |
| Blog posts | `content/blog/<name>/index.md` |
| Downloadable CV (PDF) | `static/uploads/resume.pdf` |

### Running locally

Requires Hugo (extended), Go and Node.js:

```bash
npm install   # first time only
hugo server   # then open http://localhost:1313
```

Preview changes locally before pushing — errors will show in the terminal instead of breaking the live site.

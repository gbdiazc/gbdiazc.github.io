/* ============================================================================
   RENDERING & INTERACTIONS — you normally never need to edit this file.
   All content comes from js/data.js.
   ============================================================================ */
(() => {
  "use strict";

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ------------------------------------------------------------ SVG icons */
  const ICONS = {
    book: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/></svg>',
    users: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    chalkboard: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    code: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    flask: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V2M8.5 2h7"/></svg>',
    layers: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 10 6-10 6L2 8z"/><path d="m2 14 10 6 10-6"/></svg>',
    brain: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l2.8 2.8m8.4 8.4L19 19M5 19l2.8-2.8m8.4-8.4L19 5"/></svg>',
    grid: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    target: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-4 3-8 8-10 0 0 8 2 8 10a7 7 0 0 1-7 7z"/><path d="M12 22V10"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3M19 9h3m-3 6h3"/></svg>',
    github: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.45.11-3.03 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.74.12 3.03.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1v3.12c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 3 1 9l4 2.18V17c0 .55.45 1 1 1h1v-5.73L12 15l11-6-11-6zm0 13.09L8 13.91V17a4 4 0 0 0 8 0v-3.09l-4 2.18z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.4 7.1a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9zm-.75 3h1.5v7.15h-1.5V10.1zm3.4 0h3.1c2.95 0 4.25 1.7 4.25 3.6 0 1.95-1.55 3.55-4.25 3.55h-3.1V10.1zm1.5 1.35v4.45h1.55c1.95 0 2.75-1.15 2.75-2.2 0-1.2-.75-2.25-2.75-2.25h-1.55z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6L22 7"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>',
    fork: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9M12 15v-2"/></svg>',
  };

  const LANG_COLORS = {
    "Jupyter Notebook": "#DA5B0B", Python: "#3572A5", MATLAB: "#e16737",
    "C++": "#f34b7d", C: "#555555", HTML: "#e34c26", TeX: "#3D6117",
    JavaScript: "#f1e05a", Fortran: "#4d41b1",
  };

  /* -------------------------------------------------------- theme toggle */
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
  else if (matchMedia("(prefers-color-scheme: dark)").matches) root.dataset.theme = "dark";
  $("#themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
  });

  /* -------------------------------------------------------- simple slots */
  $$("[data-text]").forEach((el) => {
    const key = el.dataset.text;
    const map = {
      name: SITE.name, "short-name": SITE.shortName, role: SITE.role,
      tagline: SITE.tagline, email: SITE.links.email,
    };
    if (map[key]) el.textContent = map[key];
  });
  $("#heroPhoto").src = SITE.photo;
  $("#heroPhoto").alt = SITE.name;
  $("#contactEmail").href = "mailto:" + SITE.links.email;
  $("#portraitCard").innerHTML =
    `${esc(SITE.title)} · <a href="${esc(SITE.affiliationUrl)}" target="_blank" rel="noopener">${esc(SITE.affiliation)}</a>`;
  $("#year").textContent = new Date().getFullYear();

  const socialHTML = [
    ["mail", "mailto:" + SITE.links.email, "Email"],
    ["github", SITE.links.github, "GitHub"],
    ["linkedin", SITE.links.linkedin, "LinkedIn"],
    ["scholar", SITE.links.scholar, "Google Scholar"],
    ["orcid", SITE.links.orcid, "ORCID"],
  ].map(([icon, url, label]) =>
    `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${ICONS[icon]}</a>`
  ).join("");
  $("#heroSocial").innerHTML = socialHTML;
  $("#contactSocial").innerHTML = socialHTML;

  /* ----------------------------------------------------- keyword rotator */
  const rotator = $("#keywordRotator");
  let kw = 0;
  rotator.textContent = SITE.keywords[0];
  setInterval(() => {
    rotator.classList.add("fade");
    setTimeout(() => {
      kw = (kw + 1) % SITE.keywords.length;
      rotator.textContent = SITE.keywords[kw];
      rotator.classList.remove("fade");
    }, 300);
  }, 2600);

  /* ----------------------------------------------------------- research */
  $("#researchGrid").innerHTML = SITE.research.map((r) => `
    <div class="research-card reveal">
      <div class="research-icon">${ICONS[r.icon] || ICONS.layers}</div>
      <h3>${esc(r.title)}</h3>
      <p>${esc(r.text)}</p>
    </div>`).join("");

  /* ------------------------------------------------------- publications */
  const TYPE_LABEL = { journal: "Journal", conference: "Conference", software: "Software ©" };
  const pubList = $("#pubList");
  const pubs = [...SITE.publications].sort((a, b) => b.year - a.year || (b.featured - a.featured));

  function pubLinks(p, i) {
    const out = [];
    if (p.url) out.push(`<a class="mini" href="${esc(p.url)}" target="_blank" rel="noopener">↗ View paper</a>`);
    if (p.doi) out.push(`<a class="mini" href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI</a>`);
    if (p.code) out.push(`<a class="mini" href="${esc(p.code)}" target="_blank" rel="noopener">${ICONS.github} Code</a>`);
    if (p.notebook) out.push(`<button class="mini" data-nb="${esc(p.notebook)}" data-nb-dl="${esc(p.notebookDownload || "")}" data-nb-title="${esc(p.title)}">▶ Notebook</button>`);
    if (p.bibtex) out.push(`<button class="mini" data-bib="${i}">❝ Copy BibTeX</button>`);
    return out.join("");
  }

  function renderPubs() {
    const filter = $(".chip.active", $("#pubFilters")).dataset.filter;
    const q = $("#pubSearch").value.trim().toLowerCase();
    const items = pubs.filter((p) =>
      p.type !== "software" &&
      (filter === "all" || p.type === filter) &&
      (!q || `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(q))
    );
    pubList.innerHTML = items.length ? items.map((p) => `
      <article class="pub-item reveal in ${p.featured ? "featured" : ""}">
        <div class="pub-year">${p.year}<span class="pub-type ${p.type}">${TYPE_LABEL[p.type]}</span></div>
        <div class="pub-body">
          <h3>${esc(p.title)}</h3>
          <p class="pub-authors">${esc(p.authors)}</p>
          <p class="pub-venue">${esc(p.venue)}</p>
          <div class="pub-links">${pubLinks(p, pubs.indexOf(p))}</div>
        </div>
      </article>`).join("")
      : `<p class="pub-empty">No results — try another search.</p>`;
  }
  renderPubs();

  $("#pubFilters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    $$(".chip", $("#pubFilters")).forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    renderPubs();
  });
  $("#pubSearch").addEventListener("input", renderPubs);

  /* ------------------------------------------------------------ software */
  const softwareList = $("#softwareList");
  const software = pubs.filter((p) => p.type === "software").sort((a, b) => b.year - a.year);

  if (software.length) {
    softwareList.innerHTML = software.map((s) => `
      <article class="pub-item reveal in">
        <div class="pub-year">${s.year}<span class="pub-type software">Software ©</span></div>
        <div class="pub-body">
          <h3>${esc(s.title)}</h3>
          <p class="pub-authors">${esc(s.authors)}</p>
          <p class="pub-venue">${esc(s.venue)}</p>
          <div class="pub-links">${s.bibtex ? `<button class="mini" data-bib="${pubs.indexOf(s)}">❝ Copy BibTeX</button>` : ""}</div>
        </div>
      </article>`).join("");
  }

  const handleBibClick = (e) => {
    const bib = e.target.closest("[data-bib]");
    if (bib) {
      navigator.clipboard.writeText(pubs[+bib.dataset.bib].bibtex || "").then(
        () => toast("BibTeX copied to clipboard ✓"),
        () => toast("Could not copy — sorry!"),
      );
    }
    const nb = e.target.closest("[data-nb]");
    if (nb) openNotebook(nb.dataset.nbTitle, nb.dataset.nb, nb.dataset.nbDl);
  };

  pubList.addEventListener("click", handleBibClick);
  softwareList.addEventListener("click", handleBibClick);

  /* ---------------------------------------------------------- notebooks */
  $("#notebookGrid").innerHTML = SITE.notebooks.map((n) => `
    <div class="notebook-card reveal">
      <div class="notebook-thumb"><img src="${esc(n.image)}" alt="" loading="lazy"></div>
      <div class="notebook-body">
        <div class="notebook-tags">${n.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.description)}</p>
        <div class="notebook-actions">
          <button class="btn btn-primary btn-sm" data-nb="${esc(n.view)}" data-nb-dl="${esc(n.download)}" data-nb-title="${esc(n.title)}">▶ Open notebook</button>
          <a class="btn btn-ghost btn-sm" href="${esc(n.download)}" download>.ipynb</a>
        </div>
      </div>
    </div>`).join("");

  $("#notebookGrid").addEventListener("click", (e) => {
    const nb = e.target.closest("[data-nb]");
    if (nb) openNotebook(nb.dataset.nbTitle, nb.dataset.nb, nb.dataset.nbDl);
  });

  const modal = $("#nbModal");
  function openNotebook(title, src, dl) {
    $("#nbModalTitle").textContent = title;
    $("#nbModalFrame").src = src;
    const dlBtn = $("#nbModalDownload");
    dlBtn.href = dl || "#";
    dlBtn.style.display = dl ? "" : "none";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.hidden = true;
    $("#nbModalFrame").src = "";
    document.body.style.overflow = "";
  }
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* -------------------------------------------------------- github repos */
  const repoGrid = $("#repoGrid");
  fetch(`https://api.github.com/users/${SITE.githubUser}/repos?per_page=100&sort=updated`)
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then((repos) => {
      const own = repos.filter((r) => !r.fork);
      own.sort((a, b) => {
        const pa = SITE.pinnedRepos.indexOf(a.name), pb = SITE.pinnedRepos.indexOf(b.name);
        if (pa !== -1 || pb !== -1) return (pa === -1 ? 99 : pa) - (pb === -1 ? 99 : pb);
        return b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at);
      });
      repoGrid.innerHTML = own.slice(0, 9).map((r) => `
        <a class="repo-card reveal in" href="${esc(r.html_url)}" target="_blank" rel="noopener">
          <span class="repo-name">${ICONS.github} ${esc(r.name)}</span>
          <p class="repo-desc">${esc(r.description || "No description yet.")}</p>
          <div class="repo-meta">
            ${r.language ? `<span><span class="repo-lang-dot" style="background:${LANG_COLORS[r.language] || "var(--accent)"}"></span>${esc(r.language)}</span>` : ""}
            <span>${ICONS.star} ${r.stargazers_count}</span>
            <span>${ICONS.fork} ${r.forks_count}</span>
          </div>
        </a>`).join("")
        || `<p class="repo-error">No public repositories yet.</p>`;
    })
    .catch(() => {
      repoGrid.innerHTML = `<p class="repo-error">Could not reach the GitHub API right now —
        <a href="https://github.com/${esc(SITE.githubUser)}" target="_blank" rel="noopener">browse my repositories on GitHub ↗</a></p>`;
    });

  /* ------------------------------------------------------------ projects */
  const THEMES = [
    ["#5b21b6", "#0ea5a4"], ["#0ea5a4", "#f59e0b"], ["#7c3aed", "#ec4899"],
    ["#0369a1", "#5b21b6"], ["#b45309", "#dc2626"], ["#0f766e", "#4d7c0f"],
  ];
  function cover(theme, seed) {
    const [c1, c2] = THEMES[theme % THEMES.length];
    const id = "g" + seed;
    // deterministic decorative pattern per card
    const shapes = [...Array(5)].map((_, i) => {
      const x = ((seed * 37 + i * 53) % 100);
      const y = ((seed * 61 + i * 29) % 100);
      const r = 12 + ((seed * 13 + i * 17) % 26);
      return `<circle cx="${x}%" cy="${y}%" r="${r}" fill="rgba(255,255,255,.12)"/>`;
    }).join("");
    return `<svg preserveAspectRatio="none" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
      </linearGradient></defs>
      <rect width="100" height="40" fill="url(#${id})"/>${shapes}</svg>`;
  }
  $("#projectGrid").innerHTML = SITE.projects.map((p, i) => `
    <div class="project-card reveal">
      <div class="project-cover">${cover(p.theme, i + 3)}<span class="project-period">${esc(p.period)}</span></div>
      <div class="project-body">
        <span class="project-org">${esc(p.org)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.text)}</p>
        <div class="project-tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
    </div>`).join("");

  /* ------------------------------------------------------------ teaching */
  $("#teachList").innerHTML = SITE.teaching.map((t) => `
    <li>
      <span class="teach-role ${t.role === "Instructor" ? "instructor" : "ta"}">${t.role === "Instructor" ? "Instructor" : "TA"}</span>
      <span class="teach-info"><strong>${esc(t.course)}</strong><span>${esc(t.org)} · ${esc(t.when)}</span></span>
    </li>`).join("");

  $("#studentList").innerHTML = SITE.supervision.map((s) => `
    <li>
      <span class="student-degree">${esc(s.degree)}</span>
      <div class="student-head"><strong>${esc(s.name)}</strong>
        <span class="student-status ${s.done ? "done" : ""}">${esc(s.status)}</span></div>
      <span class="student-topic">${esc(s.topic)} — ${esc(s.org)}</span>
    </li>`).join("");

  /* --------------------------------------------------------------- about */
  $("#aboutText").innerHTML = SITE.about.map((p) => `<p>${esc(p)}</p>`).join("");

  $("#langList").innerHTML = SITE.languages.map((l) => `
    <div class="lang-row">
      <div class="lang-head"><span>${esc(l.name)}</span><span>${esc(l.level)}</span></div>
      <div class="lang-bar"><div class="lang-fill" data-pct="${l.pct}"></div></div>
    </div>`).join("");

  $("#awardList").innerHTML = SITE.awards.map((a) => `
    <li><span class="award-year">${a.year}</span>
      <div><strong>${esc(a.title)}</strong><span>${esc(a.detail)}</span></div></li>`).join("");

  $("#timeline").innerHTML = SITE.timeline.map((t) => `
    <li class="${t.kind}">
      <span class="tl-year">${esc(t.year)}</span>
      <div class="tl-title">${esc(t.title)}</div>
      <div class="tl-org">${esc(t.org)}</div>
      <p class="tl-text">${esc(t.text)}
        ${t.link ? ` <a class="tl-link" href="${esc(t.link)}" target="_blank" rel="noopener">${esc(t.linkText || "More")} ↗</a>` : ""}</p>
    </li>`).join("");

  $("#talkGrid").innerHTML = [...SITE.talks].sort((a, b) => b.year - a.year).map((t) => `
    <div class="talk-card reveal">
      <span class="talk-year">${t.year}</span>
      <div><strong>${esc(t.event)}</strong><em>${esc(t.where)}</em><p>${esc(t.what)}</p></div>
    </div>`).join("");

  $("#certList").innerHTML = SITE.certifications.map((c) => `<li>${esc(c)}</li>`).join("");

  /* ---------------------------------------------------------- reveal + UX */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      // animated counters
      $$(".bento-num", en.target.parentElement ? en.target : document).forEach(animateNum);
      if (en.target.classList.contains("bento-card")) animateNum($(".bento-num", en.target));
      // language bars
      $$(".lang-fill", en.target).forEach((f) => (f.style.width = f.dataset.pct + "%"));
      if (en.target.classList.contains("about-side") || $(".lang-fill", en.target)) {
        $$(".lang-fill").forEach((f) => (f.style.width = f.dataset.pct + "%"));
      }
      io.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));

  const animated = new WeakSet();
  function animateNum(el) {
    if (!el || animated.has(el)) return;
    animated.add(el);
    const target = +el.dataset.target, suffix = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1100;
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  /* ------------------------------------------------------------ nav spy */
  const sections = ["research", "publications", "code", "projects", "teaching", "about", "contact"];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      $$(".nav-links a").forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id && !a.classList.contains("nav-cta")));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });

  const burger = $("#navBurger"), navLinks = $("#navLinks");
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { navLinks.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  });

  /* --------------------------------------------------------------- toast */
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }
})();

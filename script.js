/* =====================================================================
   script.js — reads content.js and fills the page. You should not need
   to edit this file; change content.js instead.
   ===================================================================== */
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = S.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  // ---- Theme (remembers the visitor's choice) ----
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) root.setAttribute("data-theme", "dark");
  $("theme-toggle").addEventListener("click", () => {
    const dark = root.getAttribute("data-theme") === "dark";
    if (dark) root.removeAttribute("data-theme"); else root.setAttribute("data-theme", "dark");
    try { localStorage.setItem("theme", dark ? "light" : "dark"); } catch (e) {}
  });

  // ---- Hero ----
  document.title = S.name;
  $("nav-name").textContent = S.name;
  $("hero-title").textContent = S.title;
  $("hero-name").textContent = S.fullName || S.name;
  $("hero-tagline").textContent = S.tagline;
  $("hero-availability").textContent = S.availability || "";
  if (!S.availability) $("hero-availability").hidden = true;

  const actions = [];
  actions.push(`<a class="btn btn-primary" href="#research">See my research</a>`);
  if (S.cvFile) actions.push(`<a class="btn btn-ghost" href="${esc(S.cvFile)}" download>Download CV</a>`);
  if (S.linkedin) actions.push(`<a class="btn btn-ghost" href="${esc(S.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
  $("hero-actions").innerHTML = actions.join("");

  $("avatar").innerHTML = S.photo ? `<img src="${esc(S.photo)}" alt="Photo of ${esc(S.name)}">` : esc(initials);
  $("stats").innerHTML = (S.stats || []).map((s) => `<div class="stat"><b>${esc(s.number)}</b><span>${esc(s.label)}</span></div>`).join("");

  // ---- About ----
  $("about-text").innerHTML = (S.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
  $("facts").innerHTML = (S.facts || []).map((f) => `<div class="fact"><small>${esc(f.label)}</small><span>${esc(f.value)}</span></div>`).join("");

  // ---- Projects ----
  $("projects").innerHTML = (S.projects || []).map((p) => `
    <article class="project">
      <span class="tag">${esc(p.tag)}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      ${p.finding ? `<p class="finding">${esc(p.finding)}</p>` : ""}
      ${p.meta ? `<p class="meta">${esc(p.meta)}</p>` : ""}
      ${(p.tags && p.tags.length) ? `<div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
      ${p.link ? `<a class="more" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkText || "Read more")} →</a>` : ""}
    </article>`).join("");

  // ---- Experience ----
  $("experience-list").innerHTML = (S.experience || []).map((j) => `
    <div class="job">
      <div class="job-head">
        <h3>${esc(j.role)}</h3>
        <span class="org">${esc(j.org)}${j.location ? " · " + esc(j.location) : ""}</span>
        <span class="period">${esc(j.period)}</span>
      </div>
      ${(j.points && j.points.length) ? `<ul>${j.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    </div>`).join("");

  // ---- Education ----
  $("education-list").innerHTML = (S.education || []).map((e) => `
    <div class="edu">
      <h3>${esc(e.degree)}</h3>
      <div class="school">${esc(e.school)}</div>
      <span class="period">${esc(e.period)}</span>
      ${e.note ? `<div class="note">${esc(e.note)}</div>` : ""}
    </div>`).join("");

  // ---- Skills & credentials ----
  $("skills-list").innerHTML = (S.skills || []).map((g) => `
    <div class="skill-group">
      <h3>${esc(g.group)}</h3>
      <div class="chips">${g.items.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    </div>`).join("");
  const list = (id, items) => { $(id).innerHTML = (items || []).map((x) => `<li>${esc(x)}</li>`).join(""); };
  list("talks-list", S.talks);
  list("certs-list", S.certifications);
  list("awards-list", S.awards);

  // ---- Contact ----
  $("contact-blurb").textContent = S.contactBlurb || "";
  const links = [];
  if (S.email) links.push(`<a class="btn btn-primary" href="mailto:${esc(S.email)}">Email me</a>`);
  if (S.linkedin) links.push(`<a class="btn btn-ghost" href="${esc(S.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
  if (S.github) links.push(`<a class="btn btn-ghost" href="${esc(S.github)}" target="_blank" rel="noopener">GitHub</a>`);
  $("contact-links").innerHTML = links.join("");

  // ---- Footer ----
  $("footer-copy").textContent = `© ${new Date().getFullYear()} ${S.name}`;
  $("footer-note").textContent = S.footerNote || "";
})();

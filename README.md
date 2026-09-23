# Richard Anekwe — personal website

A clean academic personal site, hosted free on GitHub Pages. No build step, no frameworks.

## File structure

```
Website/
├── index.html          ← page skeleton (section order, nav, header)
├── styles.css          ← colours and layout (blue palette at the top)
├── script.js           ← loads the section files (don't edit)
├── photo.jpg           ← your photo
├── .nojekyll           ← tells GitHub Pages not to run Jekyll
└── sections/           ← ★ EACH SECTION IS ITS OWN FILE ★
    ├── about.html      ← your bio / introduction
    ├── research.html   ← research interests
    ├── featured.html   ← featured research projects
    ├── education.html  ← degrees
    ├── publications.html ← papers, talks, preprints
    ├── cv.html         ← CV download (enable when ready)
    └── contact.html    ← email, LinkedIn, GitHub, ORCID, etc.
```

## How to edit

1. Open the file in `sections/` for the section you want to change.
2. Edit the HTML — it's just text in simple tags (`<p>`, `<h3>`, `<li>`, `<a>`).
3. Save, commit and push. The live site updates in ~1 minute.

You can do this directly on GitHub (click the pencil icon on any file) or locally.

### Common tweaks

- **Change your bio** → edit `sections/about.html`
- **Add a publication** → copy a `<li>` block in `sections/publications.html`
- **Add a new research project** → copy a `<div class="featured-item">` block in `sections/featured.html`
- **Enable CV download** → put your PDF in this folder, uncomment the download link in `sections/cv.html`
- **Add ORCID or Google Scholar** → uncomment those lines in `sections/contact.html`
- **Change the blue** → edit `--accent` and `--accent-light` at the top of `styles.css`
- **Change your photo** → replace `photo.jpg` with a new image (keep the same filename)

### Adding a whole new section

1. Create a new file in `sections/`, e.g. `sections/awards.html`
2. In `index.html`, add a new `<section>` block where you want it:
   ```html
   <section id="awards">
     <h2>Awards</h2>
     <div class="section-body" data-section="awards"></div>
   </section>
   ```
3. Add a nav link in the `<nav>` in `index.html`:
   ```html
   <a href="#awards">Awards</a>
   ```

## Previewing locally

Just open `index.html` in a browser via a local server. For example:

```
python -m http.server 8765 --directory .
```

Then go to http://localhost:8765.

(Double-clicking `index.html` won't work because `fetch()` needs a server.)

## Deploying to GitHub Pages

Already deployed at https://crypticmario.github.io. Every push to `main` redeploys automatically.

## Future: custom domain

When you get a domain (e.g. richardanekwe.com):

1. In GitHub repo Settings → Pages → Custom domain, enter your domain.
2. At your domain registrar, add a CNAME record pointing to `crypticmario.github.io`.
3. GitHub will create a `CNAME` file in the repo automatically.

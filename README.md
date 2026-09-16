# Richard Anekwe — personal website

A single-page personal site, hosted free on GitHub Pages. No build step, no frameworks.

## Files

| File | What it is | Edit it? |
|---|---|---|
| `content.js` | **All the words on the site** (name, bio, projects, jobs, skills, links). | Yes, this is the one you edit. |
| `styles.css` | Colours, fonts, layout. The blue palette is at the top. | Only if you want a different look. |
| `index.html` | Page skeleton and section order. | Rarely. |
| `script.js` | Reads `content.js` and fills the page. | No. |

## How to change something

1. Open `content.js` in any text editor (Notepad, VS Code, or directly on GitHub by clicking the pencil icon).
2. Change the text between the quotes. Keep the quotes and commas as they are.
3. Save, then commit and push (or click "Commit changes" on GitHub). The live site updates within a minute or two.

Common tweaks:
- **Add a photo:** put a square-ish `photo.jpg` in this folder and set `photo: "photo.jpg"`.
- **Add a CV download:** put the PDF in this folder and set `cvFile: "Richard_Anekwe_CV.pdf"`.
- **Add a project link** (preprint, GitHub repo): fill in the `link:` field for that project.
- **Remove a section item:** delete its whole `{ ... },` block.
- **Change the blue:** edit the `--blue-*` values at the top of `styles.css`.

## Previewing locally

Just double-click `index.html`. Everything works from the file system.

## Deploying to GitHub Pages (first time)

1. Create a **public** repository on GitHub named `crypticmario.github.io` (your username followed by `.github.io`).
2. Push these files to the `main` branch.
3. On GitHub: Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`. Save.
4. After a minute the site is live at `https://crypticmario.github.io`.

Every later push to `main` redeploys automatically.

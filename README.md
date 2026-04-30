# Kara Ye — Portfolio Site

A book-style portfolio with realistic page-flipping, sticky tabs (便利贴), and a separate detail page per project.

---

## 1. Run locally

In Terminal, from the `portfolio/` folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

(You **must** use a server — opening `index.html` directly with `file://` won't work, because StPageFlip uses fetch-style loading.)

---

## 2. File structure

```
portfolio/
├── index.html               ← Main book page
├── style.css                ← All book styles
├── script.js                ← Page content + StPageFlip integration
├── page-flip.browser.js     ← StPageFlip library (vendored locally)
├── stPageFlip.css           ← StPageFlip's own CSS (not currently linked, kept for reference)
└── projects/
    ├── illustration-tactile.html   ← Detail page (template — duplicate this for each project)
    └── project.css                  ← Detail page styles
```

---

## 3. How to edit content

### A. Pages in the book

Open **`script.js`**. At the top there's a `PAGES` array. Each entry = one page in the book. To replace placeholders with your real content, edit the relevant entries.

**For project text pages**, change:
```js
{
  type: 'project-text',
  chapter: 'VR',
  metaLabel: 'Unity / Quest 2 & 3 / Polar H10',
  title: 'DynamoVRPark',
  year: '2025 — 2026',
  blurb: 'A PC-VR biofeedback experience...',
}
```

**For image pages**, replace the `img: null` placeholder with a real path:
```js
{
  type: 'image-portrait',
  chapter: 'VR',
  img: 'images/vr/dynamovr-cover.jpg',   // ← your image
  alt: 'DynamoVRPark headset view',
  href: 'projects/vr.html',               // ← detail page URL
}
```

Put your images in a new folder `portfolio/images/<chapter>/`.

**Image specs:**
- Portrait: `600 × 900 px` (2:3 ratio)
- Landscape: `800 × 450 px` (16:9 ratio) — for double-image pages

### B. About me

Edit the `paragraphs` array in the `prose-right` entry for the ABOUT chapter. HTML allowed (e.g. `<strong>`, `<em>`).

### C. Contact

Edit `renderContact()` in `script.js` (search for "contact-list" — there are 4 entries to edit: email, instagram, linkedin, location).

### D. Detail pages

Each project should have its own detail page in `projects/`. Copy `illustration-tactile.html`, rename it (e.g. `vr.html`), and edit the content. Then update the `href` field in `script.js` for that project's image page.

---

## 4. About the cover

The cover is the **pink leather + debossed name** look done in pure CSS — no image needed. If you want to swap in a custom leather texture image later, change this rule in `style.css`:

```css
.page--cover {
  background: url('images/cover-texture.jpg') center/cover ... ;
}
```

---

## 5. Deploy to GitHub Pages

Same workflow as your existing `karaye0000` repos:

```bash
cd portfolio
git init
git remote add origin https://github.com/karaye0000/portfolio.git
git add .
git commit -m "Initial portfolio"
git branch -M main
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: main / root**.

URL will be `https://karaye0000.github.io/portfolio/`.

---

## 6. Known issues / things you may want to tweak

- **Active tab on cross-chapter spreads.** When a page from chapter A and chapter B are open as a left/right spread, the active tab follows the LEFT page. If you want it to follow the right page instead, edit `chapterAtPage()` in `script.js`.
- **Cover starts in landscape spread.** If the window is wide enough, the cover and the first interior page might appear side-by-side. To always show the cover alone first, increase `width` in the `St.PageFlip` config (currently 380), or shrink your browser window.
- **Mobile.** Should work, but I'd test it. If the book ends up too small, tweak `minWidth` / `maxWidth` in the `St.PageFlip` config.

---

## 7. For the application (the rare-disease vision-loss exhibition)

When the curator opens this:
1. They land on the pink cover
2. Click → opens to About me (which mentions tactile design + accessibility)
3. The **Illustration & Tactile** tab is in a warm chiaroscuro tone — it stands out among the cooler tabs by design
4. Clicking that tab jumps straight to the most relevant chapter
5. The detail page for the tactile work uses the editorial paper-textured layout

If you only have time to polish ONE chapter for the application, polish that one.

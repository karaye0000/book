/* ==========================================================
   YE LIUTONG — PORTFOLIO  (v3)
   - Chapter spread:  [blank-left][title-right]
   - Project spread:  [text-left][image-right]
   - Bookmark tabs flank the book; left = read, right = unread
   - No live mouse-drag flip; only a tiny hover-corner peel
   ========================================================== */

/* ---------- CHAPTERS ---------- */

const CHAPTERS = [
  { id: 'about',        label: 'ABOUT',        color: '#e8e0d2', top:  20 },
  { id: 'museum',       label: 'MUSEUM',       color: '#d8c4a8', top:  62 },
  { id: 'illustration', label: 'ILLUSTRATION', color: '#d4a890', top: 104 },
  { id: 'vr',           label: 'VR',           color: '#b8c4d0', top: 146 },
  { id: 'ar',           label: 'AR',           color: '#c8d8c8', top: 188 },
  { id: 'installation', label: 'INSTALLATION', color: '#c8b8d0', top: 230 },
  { id: 'shortfilm',    label: 'SHORT FILM',   color: '#e8b8a8', top: 272 },
  { id: 'game',         label: '2D GAME',      color: '#bcc8b0', top: 314 },
  { id: 'contact',      label: 'CONTACT',      color: '#cfcfcf', top: 356 },
];

const CHAPTER_HEADER = {
  cover:        '( PORTFOLIO )',
  about:        '( ABOUT )',
  museum:       '( MUSEUM )',
  installation: '( INSTALLATION )',
  ar:           '( AUGMENTED REALITY )',
  shortfilm:    '( SHORT FILM )',
  vr:           '( VIRTUAL REALITY )',
  game:         '( 2D GAME )',
  illustration: '( ILLUSTRATION )',
  contact:      '( CONTACT )',
};

/* ---------- CHAPTER CONTENT ----------
   Each chapter has:
   - a "title spread" (left blank + right chapter name)
   - 0+ "project spreads" (left text + right image)
   This guarantees every chapter is an integer number of spreads, and chapter title
   always appears on the right page of its first spread. */

const CHAPTER_DATA = {
  about: {
    custom: [
      { type: 'about-spread' }
    ],
  },

  // ===== MUSEUM =====
  museum: {
    projects: [
      {
        meta: 'Collaborative · Museum · Accessibility',
        title: 'Genius Loci',
        year: '2024 — ongoing',
        blurb: 'Digital and accessible museum experience for 28 museums and cultural heritage sites in Campania, Italy.',
        href: 'projects/genius-loci-text.html',
        imgKind: 'portrait',
        imgFile: 'images/museum-geniusloci-cover.jpg',
        imgLabel: 'GENIUS LOCI',
      },
    ],
  },

  // ===== ILLUSTRATION =====
  illustration: {
    projects: [
      {
        meta: 'Collaborative · Illustration · Tactile',
        title: 'Museum Illustrations<br/>for Villa Pignatelli',
        year: '2025',
        blurb: 'Illustrations for the tactile panels of the Museo delle Carrozze in Naples.',
        href: 'projects/villa-pignatelli.html',
        imgKind: 'portrait',
        imgFile: 'images/illustration-pignatelli-cover.jpg',
        imgLabel: 'VILLA PIGNATELLI',
      },
    ],
  },

  // ===== VR =====
  vr: {
    projects: [
      {
        meta: 'Collaborative · VR · Extended Learning',
        title: 'Metaversity',
        year: '2024 — 2025',
        blurb: 'A multi-user immersive learning platform for the future of university education.',
        href: 'projects/metaversity.html',
        imgKind: 'portrait',
        imgFile: 'images/vr-metaversity-cover.jpg',
        imgLabel: 'METAVERSITY',
      },
      {
        meta: 'Personal · VR · Surrealism',
        title: 'Redmoon Traum',
        year: '2023',
        blurb: 'A virtual journey where reality and dream merge, inspired by psychoanalysis and surrealist art.',
        href: 'projects/redmoon-traum.html',
        imgKind: 'portrait',
        imgFile: 'images/vr-redmoon-cover.jpg',
        imgLabel: 'REDMOON TRAUM',
      },
      {
        meta: 'Collaborative · VR · Dystopia',
        title: 'Wasteland',
        year: '2023',
        blurb: 'A dystopian journey through the ruins of Wonderland.',
        href: 'projects/wasteland.html',
        imgKind: 'portrait',
        imgFile: 'images/vr-wasteland-cover.jpg',
        imgLabel: 'WASTELAND',
      },
      {
        meta: 'Collaborative · Virtual Spaces',
        title: 'Virtual Worlds',
        year: '2023 — 2024',
        blurb: 'A selection of virtual spaces created for art, workshops and live performance.',
        href: 'projects/virtual-worlds.html',
        imgKind: 'portrait',
        imgFile: 'images/vr-virtualworlds-cover.jpg',
        imgLabel: 'VIRTUAL WORLDS',
      },
    ],
  },

  // ===== AR =====
  ar: {
    projects: [
      {
        meta: 'Collaborative · AR · Urban Art',
        title: 'Augmented Murals',
        year: '2024 — 2025',
        blurb: 'Image-tracking AR works created in collaboration with Bepart for the Museo di Arte Urbana Aumentata.',
        href: 'projects/augmented-murals.html',
        imgKind: 'portrait',
        imgFile: 'images/ar-murals-cover.jpg',
        imgLabel: 'AUGMENTED MURALS',
      },
    ],
  },

  // ===== INSTALLATION =====
  installation: {
    projects: [
      {
        meta: 'Personal · Video · Cinema',
        title: 'Ecfrasi',
        year: '2023',
        blurb: 'A video installation on sound, poetic language and image in Jean-Luc Godard\u2019s cinema.',
        href: 'projects/ecfrasi.html',
        imgKind: 'portrait',
        imgFile: 'images/installation-ecfrasi-cover.jpg',
        imgLabel: 'ECFRASI',
      },
    ],
  },

  // ===== SHORT FILM =====
  shortfilm: {
    projects: [
      {
        meta: 'Personal · Found Footage · Archive',
        title: 'Febbre a 41°',
        year: '2023',
        blurb: 'A found-footage short film reflecting on the condition of women through archival images and Sylvia Plath\u2019s poetry.',
        href: 'projects/febbre-41.html',
        imgKind: 'portrait',
        imgFile: 'images/shortfilm-febbre-cover.jpg',
        imgLabel: 'FEBBRE A 41°',
      },
    ],
  },

  // ===== 2D GAME =====
  game: {
    projects: [
      {
        meta: 'Personal · 2D Platformer · Surrealism',
        title: 'La Dama Ovale',
        year: '2022',
        blurb: 'A 2D platformer journey through the surreal world of Leonora Carrington.',
        href: 'projects/la-dama-ovale.html',
        imgKind: 'portrait',
        imgFile: 'images/game-damaovale-cover.jpg',
        imgLabel: 'LA DAMA OVALE',
      },
    ],
  },

  // ===== CONTACT =====
  contact: {
    custom: [
      { type: 'contact-spread' }
    ],
  },
};


/* ---------- BUILD PAGES ARRAY ----------
   Layout principle: spreads come in PAIRS [left, right].
   Page 0 = cover (alone, by StPageFlip's showCover convention).
   Page 1 = inside-front (left of next spread).
   Page 2 = first chapter title (right).
   ... etc. */

const PAGES = [];
PAGES.push({ type: 'cover', chapter: 'cover' });
PAGES.push({ type: 'blank', chapter: 'cover' });   // inside-front (left)

CHAPTERS.forEach((ch, chIdx) => {
  // Each chapter occupies an integer number of spreads.
  // Title spread = [blank-left, title-right].
  // The very first chapter (`about`) reuses the inside-front blank (already pushed at idx 1)
  // so we don't add another blank before it.
  if (chIdx > 0) {
    PAGES.push({ type: 'blank', chapter: ch.id });   // left of title spread
  }
  PAGES.push({ type: 'chapter-opener', chapter: ch.id, ch });   // right of title spread

  const data = CHAPTER_DATA[ch.id] || {};

  if (data.custom) {
    data.custom.forEach(spec => {
      if (spec.type === 'about-spread') {
        PAGES.push({ type: 'about-bio',   chapter: ch.id });   // left
        PAGES.push({ type: 'about-quote', chapter: ch.id });   // right
      } else if (spec.type === 'contact-spread') {
        PAGES.push({ type: 'blank',   chapter: ch.id });
        PAGES.push({ type: 'contact', chapter: ch.id });
      }
    });
  }

  if (data.projects) {
    data.projects.forEach(proj => {
      // PROJECT SPREAD — text on left, image on right
      PAGES.push({ type: 'project-text', chapter: ch.id, data: proj });
      PAGES.push({
        type: proj.imgKind === 'landscape' ? 'image-landscape' : 'image-portrait',
        chapter: ch.id,
        data: proj,
      });
    });
  }
});

PAGES.push({ type: 'blank',      chapter: 'contact' });   // inside-back (left)
PAGES.push({ type: 'cover-back', chapter: 'contact' });   // back cover (right)


/* ---------- RENDERERS ---------- */

function renderCover() {
  return `
    <div class="page page--cover">
      <div class="cover-content">
        <div class="cover-name">YE&nbsp;&nbsp;LIUTONG</div>
        <div class="cover-divider"></div>
        <div class="cover-subtitle">click to open</div>
      </div>
    </div>
  `;
}

function renderCoverBack() {
  return `<div class="page page--cover"></div>`;
}

function renderBlank(side, pageNum) {
  return `
    <div class="page page--${side}">
      ${pageNum ? `<div class="page-number">${pageNum}</div>` : ''}
    </div>
  `;
}

function renderChapterOpener(page, pageNum) {
  const ch = page.ch || CHAPTERS.find(c => c.id === page.chapter);
  const idx = CHAPTERS.findIndex(c => c.id === ch.id);
  return `
    <div class="page page--right page-chapter-opener">
      <div class="chapter-opener-inner">
        <div class="chapter-opener-label">${romanize(idx + 1)}</div>
        <h2 class="chapter-opener-title">${formatChapterTitle(ch.label)}</h2>
        <div class="chapter-opener-divider"></div>
      </div>
      <div class="page-number">${pageNum}</div>
    </div>
  `;
}

function renderProjectText(page, pageNum) {
  const p = page.data;
  return `
    <div class="page page--left page-text">
      <div class="project-meta">${p.meta}</div>
      <h2 class="project-title">${p.title}</h2>
      <div class="project-year">${p.year}</div>
      <div class="project-divider"></div>
      <p class="project-blurb">${p.blurb}</p>
      <div class="page-number">${pageNum}</div>
    </div>
  `;
}

function renderImagePortrait(page, pageNum) {
  const p = page.data;
  const inner = p.imgFile
    ? `<img src="${p.imgFile}" alt="${p.title.replace(/<br\/>/g,' ')}" />`
    : `<div class="placeholder-img">${p.imgLabel}</div>`;
  const wrapped = p.href
    ? `<a class="image-link" href="${p.href}" aria-label="${p.title.replace(/<br\/>/g,' ')}">${inner}</a>`
    : inner;
  return `
    <div class="page page--right page-image">
      <div class="image-frame image-frame--portrait">${wrapped}</div>
      <div class="page-number">${pageNum}</div>
    </div>
  `;
}

function renderImageLandscape(page, pageNum) {
  const p = page.data;
  const inner = p.imgFile
    ? `<img src="${p.imgFile}" alt="${p.title.replace(/<br\/>/g,' ')}" />`
    : `
      <div class="placeholder-img">${p.imgLabel} 1</div>
      <div class="placeholder-img">${p.imgLabel} 2</div>
    `;
  const wrapped = p.href
    ? `<a class="image-link" href="${p.href}" aria-label="${p.title.replace(/<br\/>/g,' ')}">${inner}</a>`
    : inner;
  return `
    <div class="page page--right page-image">
      <div class="image-frame image-frame--landscape">${wrapped}</div>
      <div class="page-number">${pageNum}</div>
    </div>
  `;
}

function renderAboutBio(pageNum) {
  return `
    <div class="page page--left page-prose">
      <div class="meta-label">Immersive Experience Designer</div>
      <h1>About</h1>
      <p>I&rsquo;m Liutong Ye, an immersive experience designer based in Milan, Italy.</p>
      <p>I started from theatre scenography, where I learned to think of space as something that can tell a story before anything is said. This background still influences the way I work. I pay attention to atmosphere, movement, light, scale, and to how the viewer moves through and perceives an environment.</p>
      <div class="page-number">${pageNum}</div>
    </div>
  `;
}

function renderAboutQuote(pageNum) {
  // The "right page" of the about spread — second half of the bio.
  return `
    <div class="page page--right page-prose">
      <p>Today my work extends into 3D design, VR/AR, digital heritage, interactive installations and museum experiences. I&rsquo;m interested in the point where physical spaces and digital tools meet, especially when technology can help people access a place, understand it better, or experience it from a different perspective.</p>
      <p>My projects often combine visual research, spatial design and new technologies, while keeping a strong connection to storytelling and cultural context.</p>
      <div class="page-number">${pageNum}</div>
    </div>
  `;
}

function renderContact(pageNum) {
  return `
    <div class="page page--right page-prose">
      <div class="meta-label">Get in touch</div>
      <h1>Contact</h1>
      <p>Open to collaborations across design, technology and culture.</p>
      <ul class="contact-list">
        <li><span class="label">Email</span><a href="mailto:123yeliutong@gmail.com">123yeliutong@gmail.com</a></li>
        <li><span class="label">Instagram</span><a href="https://instagram.com/0karaye0" target="_blank" rel="noopener">@0karaye0</a></li>
        <li><span class="label">Based in</span><span>Milan, Italy</span></li>
      </ul>
      <div class="page-number">${pageNum}</div>
    </div>
  `;
}

function romanize(n) {
  const map = [[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  let r = '';
  map.forEach(([v,s]) => { while(n >= v) { r += s; n -= v; } });
  return r;
}

function formatChapterTitle(label) {
  if (label === 'INSTALLATION')           return 'Installation';
  if (label === 'ILLUSTRATION')           return 'Illustration';
  if (label === 'SHORT FILM')             return 'Short<br/>Film';
  if (label === 'AR')                     return 'Augmented<br/>Reality';
  if (label === 'VR')                     return 'Virtual<br/>Reality';
  if (label === '2D GAME')                return '2D Game';
  return label.charAt(0) + label.slice(1).toLowerCase();
}

function pageSide(i) {
  if (i === 0) return 'right';                 // cover
  return (i % 2 === 1) ? 'left' : 'right';
}


/* ---------- BUILD HTML ---------- */

function buildPagesHTML() {
  const book = document.getElementById('book');
  let pageNum = 0;

  PAGES.forEach((page, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'stf-page-wrapper';
    wrapper.setAttribute('data-chapter', page.chapter);
    wrapper.setAttribute('data-index', i);

    if (page.type === 'cover' || page.type === 'cover-back') {
      wrapper.setAttribute('data-density', 'hard');
    }

    let num = '';
    if (!['cover','cover-back','blank'].includes(page.type)) {
      pageNum++;
      num = pageNum;
    }

    let html = '';
    switch (page.type) {
      case 'cover':           html = renderCover(); break;
      case 'cover-back':      html = renderCoverBack(); break;
      case 'blank':           html = renderBlank(pageSide(i), ''); break;
      case 'chapter-opener':  html = renderChapterOpener(page, num); break;
      case 'project-text':    html = renderProjectText(page, num); break;
      case 'image-portrait':  html = renderImagePortrait(page, num); break;
      case 'image-landscape': html = renderImageLandscape(page, num); break;
      case 'about-bio':       html = renderAboutBio(num); break;
      case 'about-quote':     html = renderAboutQuote(num); break;
      case 'contact':         html = renderContact(num); break;
      default:                html = renderBlank(pageSide(i), '');
    }

    wrapper.innerHTML = html;
    book.appendChild(wrapper);
  });
}


/* ---------- BUILD TAB STRIPS ----------
   Tabs are rendered into #tabs-left and #tabs-right.
   On every page change we redistribute them based on whether each chapter is
   "earlier than" or "later than" the current spread. */

function findFirstPageOfChapter(chId) {
  for (let i = 0; i < PAGES.length; i++) {
    if (PAGES[i].chapter === chId && PAGES[i].type === 'chapter-opener') return i;
  }
  for (let i = 0; i < PAGES.length; i++) {
    if (PAGES[i].chapter === chId) return i;
  }
  return 0;
}

function makeTabButton(ch, chIdx) {
  const btn = document.createElement('button');
  btn.className = 'tab';
  btn.dataset.target = ch.id;
  btn.style.setProperty('--tab-color', ch.color);
  btn.style.top = ch.top + 'px';
  // Per your rule: earlier chapters' bookmarks are tucked DEEPER into the spine.
  // Later chapters' bookmarks protrude MORE. We invert chIdx so that:
  //   chapter 0 (about) gets the largest stagger value → most tucked
  //   chapter 8 (contact) gets stagger 0 → most exposed
  // 2px per chapter index = ~16px total visible range
  const totalChapters = CHAPTERS.length;
  const stagger = (totalChapters - 1 - chIdx) * 2; // px
  btn.style.setProperty('--tab-stagger', stagger + 'px');
  btn.innerHTML = `<span>${ch.label}</span>`;
  btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const idx = findFirstPageOfChapter(ch.id);
    if (pageFlip) pageFlip.flip(idx);
  });
  return btn;
}

/** Distribute tabs into left/right strips based on whether each chapter is
 *  earlier / equal / later than the chapter currently displayed on the spread.
 *  - Earlier chapters → LEFT strip (already turned past)
 *  - Current chapter  → either side (we'll put on right for visibility)
 *  - Later chapters   → RIGHT strip
 */
function rebuildTabStrips(currentChId) {
  const leftEl  = document.getElementById('tabs-left');
  const rightEl = document.getElementById('tabs-right');
  leftEl.innerHTML = '';
  rightEl.innerHTML = '';

  // Find which chapters are before/after the current one
  const currentIdx = CHAPTERS.findIndex(c => c.id === currentChId);

  CHAPTERS.forEach((ch, i) => {
    const btn = makeTabButton(ch, i);
    if (ch.id === currentChId) btn.classList.add('is-active');

    if (currentChId === 'cover') {
      // Cover: all chapters are "upcoming" → right strip
      rightEl.appendChild(btn);
    } else if (i < currentIdx) {
      leftEl.appendChild(btn);
    } else {
      rightEl.appendChild(btn);
    }
  });
}


/* ---------- INIT StPageFlip ---------- */

let pageFlip;

function initBook() {
  buildPagesHTML();

  pageFlip = new St.PageFlip(document.getElementById('book'), {
    width: 360,
    height: 500,
    minWidth: 240,
    maxWidth: 460,
    minHeight: 320,
    maxHeight: 660,
    size: 'stretch',
    drawShadow: true,
    flippingTime: 1100,
    usePortrait: false,
    startZIndex: 0,
    autoSize: true,
    maxShadowOpacity: 0.35,
    showCover: true,
    mobileScrollSupport: false,
    swipeDistance: 99999,    // effectively disable drag-to-flip
    showPageCorners: true,    // small corner peel on hover
    disableFlipByClick: false,
    clickEventForward: true,
    useMouseEvents: true,
  });

  pageFlip.loadFromHTML(document.querySelectorAll('.stf-page-wrapper'));

  disableDragAndClampPeel();
  bindClickToFlip();

  pageFlip.on('flip', e => onPageChange(e.data));
  pageFlip.on('init', e => onPageChange(e.data.page));
}


/* ---------- EXPLICIT CLICK-TO-FLIP HANDLER ----------
   Since we killed drag, we now own the click → flip behavior.
   - Click on right page → flipNext (turn forward)
   - Click on left page → flipPrev (turn backward)
   - Don't intercept clicks on links (image-link to project pages) or tabs.
*/
function bindClickToFlip() {
  const book = document.getElementById('book');
  if (!book) return;

  book.addEventListener('click', (e) => {
    // Ignore clicks on real links and on anything explicitly marked as not a flip target
    if (e.target.closest('a, button, .tab')) return;
    if (!pageFlip) return;

    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x >= rect.width / 2) {
      pageFlip.flipNext();
    } else {
      // Predict: if we're flipping back AND the previous spread is the cover (page 0),
      // remove is-spread immediately so the book-thickness left edge disappears as
      // the cover starts closing — not after the animation completes.
      const currentIdx = pageFlip.getCurrentPageIndex();
      if (currentIdx <= 2) {
        const shell = document.getElementById('book-shell');
        if (shell) shell.classList.remove('is-spread');
      }
      pageFlip.flipPrev();
    }
  });
}


/* ---------- DISABLE DRAG-FLIP, KEEP CLICK + HOVER PEEL ----------
   StPageFlip's drag mechanism lives on the PageFlip *instance* (not flipController):
   - startUserTouch(point): sets isUserTouch=true (drag mode begins on mousedown)
   - userMove(point, isTouch): if isUserTouch && moved>5px → fold (live drag).
                                if !isUserTouch && showPageCorners → showCorner (hover peel)
   - userStop(point, ev): if isUserTouch && wasMoving → stopMove() OR flip()
                          (so even just a small mousedown+release on a corner triggers a flip)

   We want:
   - NO drag mode: stub startUserTouch.
   - HOVER PEEL only in a small corner region: clamp showCorner via showPageCorners=false default,
     AND additionally clamp the corner region in our own mousemove listener.
   - CLICKS still work via our own click listener (added separately).
*/
function disableDragAndClampPeel() {
  if (!pageFlip) return;

  // 1. Kill drag-flip mode entirely.
  pageFlip.startUserTouch = function() { /* no-op: never enter drag mode */ };

  // 2. Kill userStop (defense in depth — even if drag mode somehow activates, stop won't flip).
  pageFlip.userStop = function() { /* no-op */ };

  // 3. Clamp hover peel: only show corner when cursor is within PEEL_TRIGGER px of a corner.
  //    StPageFlip's userMove(point, isTouch) calls flipController.showCorner(point) when not in
  //    drag mode. We wrap userMove to only forward the call if the cursor is near a corner.
  const PEEL_TRIGGER = 80;   // how close to a corner before peel activates
  const PEEL_SIZE    = 50;   // peel size when active (smaller = subtler)
  const origUserMove = pageFlip.userMove.bind(pageFlip);

  pageFlip.userMove = function(point, isTouch) {
    try {
      const render = pageFlip.getRender();
      const rect = render.getRect();
      if (!rect) return origUserMove(point, isTouch);

      const local = render.convertToBook(point);
      const w = rect.width, h = rect.height;
      const cornerXDist = Math.min(local.x, w - local.x);
      const cornerYDist = Math.min(local.y, h - local.y);

      // Only allow peel near a corner
      if (cornerXDist > PEEL_TRIGGER || cornerYDist > PEEL_TRIGGER) {
        // Not near a corner — hide any active peel by calling stopMove()
        if (pageFlip.flipController && pageFlip.flipController.getState && pageFlip.flipController.getState() === 'fold_corner') {
          pageFlip.flipController.stopMove(true);
        }
        return;
      }

      // Snap the point to a fixed peel offset so the corner doesn't follow the cursor live
      const isRight  = local.x >= w / 2;
      const isBottom = local.y >= h / 2;
      const cx = isRight  ? w : 0;
      const cy = isBottom ? h : 0;
      const dx = (isRight  ? -1 : 1) * PEEL_SIZE;
      const dy = (isBottom ? -1 : 1) * PEEL_SIZE;
      const fixedPoint = {
        x: rect.left + cx + dx,
        y: rect.top  + cy + dy,
      };
      origUserMove(fixedPoint, isTouch);
    } catch (err) {
      // fail-open: don't break the page if our patch errors
    }
  };
}


/* ---------- STATE UPDATES ---------- */

function onPageChange(pageIndex) {
  const chId = chapterForCurrentSpread(pageIndex);
  updateChapterIndicator(chId);
  rebuildTabStrips(chId);
  updateBookShellPosition(pageIndex);
}

function chapterForCurrentSpread(pageIndex) {
  if (pageIndex === 0) return 'cover';
  // For a spread, prefer the right page's chapter (what user is "entering")
  // pageIndex from StPageFlip = the LEFT page of a spread (when in spread-mode)
  const rightIdx = pageIndex + 1;
  if (rightIdx < PAGES.length && PAGES[rightIdx].chapter !== 'cover') {
    return PAGES[rightIdx].chapter;
  }
  return PAGES[pageIndex] ? PAGES[pageIndex].chapter : 'cover';
}

function updateChapterIndicator(chId) {
  const label = CHAPTER_HEADER[chId] || '( PORTFOLIO )';
  const el = document.getElementById('current-chapter');
  el.style.opacity = '0';
  setTimeout(() => {
    el.textContent = label;
    el.style.opacity = '1';
  }, 200);
}

function updateBookShellPosition(pageIndex) {
  const shell = document.getElementById('book-shell');
  if (!shell) return;
  if (pageIndex === 0) shell.classList.remove('is-spread');
  else                 shell.classList.add('is-spread');
}


/* ---------- KEYBOARD NAV ---------- */

function bindKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft'  && pageFlip) {
      // Predict transition back to cover — see comment in bindClickToFlip
      if (pageFlip.getCurrentPageIndex() <= 2) {
        const shell = document.getElementById('book-shell');
        if (shell) shell.classList.remove('is-spread');
      }
      pageFlip.flipPrev();
    }
    if (e.key === 'ArrowRight' && pageFlip) pageFlip.flipNext();
  });
}


/* ---------- BOOT ---------- */

document.addEventListener('DOMContentLoaded', () => {
  initBook();
  bindKeyboard();
  window.pageFlip = pageFlip;
  window.PAGES    = PAGES;
});

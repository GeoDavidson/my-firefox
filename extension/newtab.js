const TOOLBAR_FOLDER_ID = "toolbar_____";
const FALLBACK_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3C/svg%3E";

function faviconUrl(url) {
  try { return `https://icons.duckduckgo.com/ip3/${new URL(url).hostname}.ico`; }
  catch (_) { return FALLBACK_ICON; }
}

async function loadToolbar() {
  const children = await browser.bookmarks.getChildren(TOOLBAR_FOLDER_ID);
  return children.filter(b => b.url);
}

function render(bookmarks) {
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';

  if (bookmarks.length === 0) {
    grid.style.gridTemplateColumns = '';
    const hint = document.createElement('p');
    hint.className = 'empty-hint';
    hint.textContent = 'Add bookmarks to your Bookmarks Toolbar and they\'ll appear here. Press Ctrl+Shift+B to show the toolbar.';
    grid.append(hint);
    return;
  }

  for (const b of bookmarks) {
    const a = document.createElement('a');
    a.href = b.url;

    const img = document.createElement('img');
    img.className = 'favicon';
    img.src = faviconUrl(b.url);
    img.alt = '';
    img.addEventListener('error', () => { img.src = FALLBACK_ICON; }, { once: true });

    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = b.title || b.url;

    a.append(img, label);
    grid.append(a);
  }

}

for (const ev of ['onCreated', 'onRemoved', 'onChanged', 'onMoved']) {
  browser.bookmarks[ev].addListener(() => loadToolbar().then(render));
}

loadToolbar().then(render);

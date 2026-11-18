// Certificate gallery: native links remain available when JavaScript is disabled.
(() => {
  const section = document.querySelector('#certificates');
  const source = document.querySelector('#certificateData');
  const dialog = document.querySelector('#certificateDialog');
  if (!section || !source || !dialog) return;

  const documents = JSON.parse(source.textContent);
  const byId = new Map(documents.map(item => [item.id, item]));
  const cards = [...section.querySelectorAll('[data-certificate-id]')];
  const filters = section.querySelector('.certificate-filters');
  const more = section.querySelector('#certificateMore');
  const status = section.querySelector('#certificateCount');
  const viewport = dialog.querySelector('#certificateViewport');
  const loading = dialog.querySelector('#certificateLoading');
  const close = dialog.querySelector('#certificateClose');
  const zoom = dialog.querySelector('#certificateZoom');
  const title = dialog.querySelector('#certificateDialogTitle');
  const issuer = dialog.querySelector('#certificateDialogIssuer');
  const original = dialog.querySelector('#certificateOriginal');
  const download = dialog.querySelector('#certificateDownload');
  const position = dialog.querySelector('#certificatePosition');
  const previous = dialog.querySelector('#certificatePrevious');
  const next = dialog.querySelector('#certificateNext');
  const pdfHelp = dialog.querySelector('#certificatePdfHelp');
  const initialLimit = 6;
  let category = 'all';
  let expanded = false;
  let matching = documents;
  let viewerDocuments = [];
  let currentIndex = 0;
  let lastTrigger = null;
  let renderToken = 0;
  let zoomed = false;

  const language = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const text = key => dict[language()]['certificates.' + key];
  const number = value => new Intl.NumberFormat(language()).format(value);
  const local = value => value[language()];

  function updateZoomLabel() {
    zoom.setAttribute('aria-pressed', String(zoomed));
    zoom.querySelector('span').textContent = text(zoomed ? 'fit' : 'zoom');
  }

  function updateViewerText() {
    const item = viewerDocuments[currentIndex];
    if (!item) return;
    title.textContent = local(item.title);
    issuer.textContent = local(item.issuer);
    position.textContent = number(currentIndex + 1) + ' / ' + number(viewerDocuments.length);
    const media = viewport.firstElementChild;
    if (media?.tagName === 'IMG') media.alt = local(item.title);
    if (media?.tagName === 'IFRAME') media.title = local(item.title);
    updateZoomLabel();
  }

  function updateGallery() {
    matching = documents.filter(item => category === 'all' || item.category === category);
    const visible = new Set((expanded ? matching : matching.slice(0, initialLimit)).map(item => item.id));
    cards.forEach(card => {
      const item = byId.get(card.dataset.certificateId);
      card.hidden = !visible.has(item.id);
      card.querySelector('[data-certificate-title]').textContent = local(item.title);
      card.querySelector('[data-certificate-issuer]').textContent = local(item.issuer);
    });
    filters.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.certificateFilter === category));
    });
    status.textContent = text('count').replace('{shown}', number(visible.size)).replace('{total}', number(matching.length));
    more.hidden = expanded || matching.length <= initialLimit;
  }

  function showDocument(index) {
    currentIndex = (index + viewerDocuments.length) % viewerDocuments.length;
    const item = viewerDocuments[currentIndex];
    const token = ++renderToken;
    zoomed = false;
    viewport.classList.remove('is-zoomed');
    loading.textContent = text('loading');
    loading.hidden = false;
    const isPdf = item.type === 'pdf';
    const zoomWasFocused = document.activeElement === zoom;
    zoom.hidden = isPdf;
    pdfHelp.hidden = !isPdf;
    previous.disabled = next.disabled = viewerDocuments.length < 2;
    original.href = download.href = item.file;
    download.download = 'Mortadha_Ali_' + item.id + (isPdf ? '.pdf' : '.jpeg');
    const media = document.createElement(isPdf ? 'iframe' : 'img');
    media.addEventListener('load', () => {
      if (token === renderToken) loading.hidden = true;
    }, { once: true });
    media.addEventListener('error', () => {
      if (token === renderToken) loading.textContent = text('failed');
    }, { once: true });
    viewport.replaceChildren(media);
    media.src = item.file + (isPdf ? '#view=FitH' : '');
    viewport.scrollTop = viewport.scrollLeft = 0;
    updateViewerText();
    if (isPdf && zoomWasFocused) close.focus({ preventScroll: true });
  }

  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-certificate-filter]');
    if (!button) return;
    category = button.dataset.certificateFilter;
    expanded = false;
    updateGallery();
  });

  more.addEventListener('click', () => {
    expanded = true;
    updateGallery();
    const firstNew = matching[initialLimit];
    cards.find(card => card.dataset.certificateId === firstNew?.id)?.focus({ preventScroll: true });
  });

  section.addEventListener('click', event => {
    const trigger = event.target.closest('[data-certificate-id]');
    if (!trigger || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof dialog.showModal !== 'function') return;
    viewerDocuments = [...matching];
    const index = viewerDocuments.findIndex(item => item.id === trigger.dataset.certificateId);
    if (index < 0) return;
    lastTrigger = trigger;
    showDocument(index);
    dialog.showModal();
    document.body.classList.add('certificate-viewer-open');
    close.focus({ preventScroll: true });
    event.preventDefault();
  });

  close.addEventListener('click', () => dialog.close());
  previous.addEventListener('click', () => showDocument(currentIndex - 1));
  next.addEventListener('click', () => showDocument(currentIndex + 1));
  zoom.addEventListener('click', () => {
    zoomed = !zoomed;
    viewport.classList.toggle('is-zoomed', zoomed);
    viewport.scrollTop = viewport.scrollLeft = 0;
    updateZoomLabel();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    const isRtl = document.documentElement.dir === 'rtl';
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const advance = (event.key === 'ArrowRight') !== isRtl;
      showDocument(currentIndex + (advance ? 1 : -1));
    }
  });
  dialog.addEventListener('close', () => {
    renderToken++;
    viewport.replaceChildren();
    loading.hidden = true;
    document.body.classList.remove('certificate-viewer-open');
    lastTrigger?.focus({ preventScroll: true });
  });
  document.addEventListener('languagechange', () => {
    updateGallery();
    if (dialog.open) updateViewerText();
    if (!loading.hidden) loading.textContent = text('loading');
  });
  updateGallery();
})();

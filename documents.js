'use strict';
// PDF.js is loaded only when a document is requested. Core and worker stay version-matched.
window.createDocumentViewer = function (root) {
  const $ = id => document.getElementById(id);
  const base = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.624/';
  const MAX_RENDER_PIXELS = 16000000;
  const MAX_OUTPUT_SCALE = 3;
  let library, session = null, currentPdfPage = 1, renderId = 0, resizeTimer;
  const canvasFor = () => document.createElement('canvas');

  function dispose() {
    renderId++;
    clearTimeout(resizeTimer);
    const old = session; session = null;
    if (old) {
      old.observer?.disconnect();
      old.jobs.forEach(job => job.cancel());
      old.task?.destroy().catch(() => {});
    }
    $('pdf-page').replaceChildren(); $('pdf-thumbnails').replaceChildren();
    $('pdf-prev').disabled = $('pdf-next').disabled = true;
    $('pdf-open').hidden = $('pdf-download').hidden = true;
    $('pdf-count').textContent = ''; $('pdf-total').textContent = '';
    $('pdf-stage').removeAttribute('aria-busy');
    $('pdf-stage').style.removeProperty('--pdf-aspect');
  }

  function status(text) {
    $('pdf-status').textContent = text;
    $('pdf-status').hidden = !text;
  }

  function controls() {
    const total = session?.pdf?.numPages || 0;
    $('pdf-prev').disabled = currentPdfPage <= 1 || !total;
    $('pdf-next').disabled = currentPdfPage >= total || !total;
    $('pdf-count').textContent = total ? String(currentPdfPage).padStart(2,'0') + ' / ' + String(total).padStart(2,'0') : '';
    [...$('pdf-thumbnails').children].forEach((b, i) => b.setAttribute('aria-current', String(i + 1 === currentPdfPage)));
  }

  function outputScaleFor(width, height) {
    const preferred = Math.max(window.devicePixelRatio || 1, 2);
    const budgetScale = Math.sqrt(MAX_RENDER_PIXELS / Math.max(1, width * height));
    return Math.max(1, Math.min(preferred, MAX_OUTPUT_SCALE, budgetScale));
  }

  async function renderPage(n, scroll = false) {
    const s = session;
    if (!s?.pdf) return;
    currentPdfPage = Math.max(1, Math.min(n, s.pdf.numPages));
    const pageNumber = currentPdfPage, id = ++renderId;
    s.mainJob?.cancel(); controls();
    $('pdf-page').replaceChildren(); status('Loading page ' + pageNumber + '…');
    $('pdf-stage').setAttribute('aria-busy','true');

    if (scroll) {
      const thumb = $('pdf-thumbnails').children[pageNumber - 1], strip = $('pdf-thumbnails');
      if (thumb) strip.scrollTo({left:thumb.offsetLeft - strip.offsetLeft - (strip.clientWidth - thumb.clientWidth)/2, behavior:'auto'});
    }

    try {
      const page = await s.pdf.getPage(pageNumber);
      if (session !== s || id !== renderId) return;

      const natural = page.getViewport({scale:1});
      $('pdf-stage').style.setProperty('--pdf-aspect', `${natural.width} / ${natural.height}`);

      // Let layout settle before measuring the final viewer box.
      await new Promise(resolve => requestAnimationFrame(resolve));
      if (session !== s || id !== renderId) return;

      const bounds = $('pdf-page').getBoundingClientRect();
      const scale = Math.min(bounds.width / natural.width, bounds.height / natural.height);
      if (!Number.isFinite(scale) || scale <= 0) return;

      const cssViewport = page.getViewport({scale});
      const outputScale = outputScaleFor(cssViewport.width, cssViewport.height);
      const renderViewport = page.getViewport({scale:scale * outputScale});
      const canvas = canvasFor();
      canvas.width = Math.max(1, Math.ceil(renderViewport.width));
      canvas.height = Math.max(1, Math.ceil(renderViewport.height));
      canvas.style.width = cssViewport.width + 'px';
      canvas.style.height = cssViewport.height + 'px';
      canvas.setAttribute('role','img');
      canvas.setAttribute('aria-label',s.title + ', page ' + pageNumber + ' of ' + s.pdf.numPages + '. Open the original PDF for selectable text.');

      const context = canvas.getContext('2d', {alpha:false});
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      const job = page.render({canvasContext:context, viewport:renderViewport});
      s.mainJob = job; s.jobs.add(job);
      try { await job.promise; } finally { s.jobs.delete(job); }
      if (session !== s || id !== renderId) return;
      $('pdf-page').replaceChildren(canvas); status('');
    } catch (error) {
      if (session === s && id === renderId && error.name !== 'RenderingCancelledException') {
        status('This page could not be rendered. Open the original PDF to read it.');
      }
    } finally {
      if (session === s && id === renderId) $('pdf-stage').removeAttribute('aria-busy');
    }
  }

  async function thumbnail(s, button, n) {
    if (session !== s || button.dataset.loaded) return;
    button.dataset.loaded = 'true';
    try {
      const page = await s.pdf.getPage(n);
      if (session !== s) return;
      const natural = page.getViewport({scale:1});
      const cssScale = Math.min(240/natural.width,135/natural.height);
      const cssViewport = page.getViewport({scale:cssScale});
      const renderViewport = page.getViewport({scale:cssScale * 2});
      const canvas = canvasFor();
      canvas.width = Math.ceil(renderViewport.width);
      canvas.height = Math.ceil(renderViewport.height);
      canvas.style.width = cssViewport.width + 'px';
      canvas.style.height = cssViewport.height + 'px';
      canvas.setAttribute('aria-hidden','true');
      const context = canvas.getContext('2d', {alpha:false});
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      const job = page.render({canvasContext:context,viewport:renderViewport}); s.jobs.add(job);
      try { await job.promise; } finally { s.jobs.delete(job); }
      if (session === s) button.firstElementChild.replaceChildren(canvas);
    } catch { /* The numbered button remains usable if its preview fails. */ }
  }

  function thumbnails(s, config) {
    const strip = $('pdf-thumbnails');
    s.observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        s.observer.unobserve(entry.target);
        // Render serially to keep thumbnail work inexpensive.
        s.queue = s.queue.then(() => thumbnail(s, entry.target, Number(entry.target.dataset.page)));
      }
    }, {root:strip, rootMargin:'0px 160px'});

    for (let n = 1; n <= s.pdf.numPages; n++) {
      const button = document.createElement('button');
      button.type = 'button'; button.dataset.page = n;
      button.className = 'pdf-thumbnail'; button.setAttribute('aria-label','Show page ' + n);
      const preview = document.createElement('span'); preview.className = 'pdf-preview';
      const label = document.createElement('span');
      label.textContent = String(n).padStart(2,'0') + (config.pageLabels?.[n-1] ? '  ' + config.pageLabels[n-1] : '');
      button.append(preview,label);
      button.addEventListener('click',() => renderPage(n));
      strip.append(button); s.observer.observe(button);
    }
  }

  async function open(config, game) {
    dispose(); currentPdfPage = 1;
    const s = {jobs:new Set(),queue:Promise.resolve(),title:config?.title || 'Document'}; session = s;
    $('document-title').textContent = s.title;
    $('document-description').textContent = config?.description || '';
    $('document-logo').replaceChildren();
    const logo = document.createElement('img');
    logo.src = new URL(game.logo,root); logo.alt = game.logoAlt || game.title;
    $('document-logo').append(logo); status('Loading document…');
    if (!config?.src) { status('Document forthcoming'); return; }

    try {
      const url = new URL(config.src,root);
      if (!['https:','http:'].includes(url.protocol)) throw new Error('Unsupported document URL');
      library ||= import(base + 'build/pdf.min.mjs').catch(error => { library = null; throw error; });
      const pdfjs = await library;
      if (session !== s) return;
      pdfjs.GlobalWorkerOptions.workerSrc = base + 'build/pdf.worker.min.mjs';
      s.task = pdfjs.getDocument({
        url:url.href,
        cMapUrl:base+'cmaps/',
        cMapPacked:true,
        standardFontDataUrl:base+'standard_fonts/',
        wasmUrl:base+'wasm/'
      });
      s.pdf = await s.task.promise;
      if (session !== s) return;
      $('pdf-total').textContent = s.pdf.numPages + (s.pdf.numPages === 1 ? ' page' : ' pages');
      for (const id of ['pdf-open','pdf-download']) { $(id).href = url.href; $(id).hidden = false; }
      thumbnails(s,config);
      await renderPage(1);
    } catch {
      if (session === s) {
        status('Document forthcoming'); $('pdf-total').textContent = 'Not available yet';
        s.task?.destroy().catch(() => {});
      }
    }
  }

  $('pdf-prev').addEventListener('click',() => renderPage(currentPdfPage-1,true));
  $('pdf-next').addEventListener('click',() => renderPage(currentPdfPage+1,true));

  document.addEventListener('keydown',event => {
    if ($('document-view').hidden || $('game-panel').inert || event.target.closest('#game-tabs')) return;
    if (!['ArrowLeft','ArrowRight'].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    renderPage(currentPdfPage + (event.key === 'ArrowRight' ? 1 : -1),true);
  });

  const resize = new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    if (session?.pdf) resizeTimer = setTimeout(() => renderPage(currentPdfPage),120);
  });
  resize.observe($('pdf-page'));
  return {open,dispose};
};

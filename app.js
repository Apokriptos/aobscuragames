'use strict';
(() => {
  const root = new URL('.', document.currentScript.src);
  const data = window.PORTFOLIO;
  if (!data || data.games.length !== 3) throw new Error('The EVA showcase requires exactly three configured games.');
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
  const number = n => String(n + 1).padStart(2, '0');
  const mediaURL = value => {
    if (!value) return '';
    try { const url = new URL(value, root); return ['http:', 'https:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
  };
  const icon = kind => {
    const node = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    node.setAttribute('viewBox','0 0 24 24'); node.setAttribute('aria-hidden','true');
    const paths = {image:'M3 4h18v16H3ZM3 16l5-5 4 4 3-3 6 5M16 8h.01',play:'m8 4 13 8L8 20Z',email:'M3 5h18v14H3ZM3 6l9 7 9-7',link:'M9 15l6-6M7 13l-2 2a3 3 0 0 0 4 4l4-4M11 9l4-4a3 3 0 0 1 4 4l-2 2'};
    const p = document.createElementNS(node.namespaceURI,'path'); p.setAttribute('d',paths[kind]); node.append(p); return node;
  };

  let current = 0, selected = 0, mediaVersion = 0;
  const imageRequests = new WeakMap();

  [['email','Email'],['linkedin','LinkedIn'],['instagram','Instagram'],['website','Portfolio']].forEach(([key,label]) => {
    const value = data.identity[key]; if (!value) return;
    const a = el('a'); a.href = key === 'email' ? `mailto:${value}` : mediaURL(value); if (!a.href) return;
    a.setAttribute('aria-label', label); a.append(icon(key === 'email' ? 'email' : 'link'), el('span','',label));
    if (key !== 'email') { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    $('contact-links').append(a);
  });

  data.games.forEach((game, i) => {
    const tab = el('button','sidebar-game',game.title); tab.type = 'button'; tab.setAttribute('aria-label',`Show ${game.title}`); tab.addEventListener('click',()=>showGame(i)); $('sidebar-games').append(tab);
    const b = el('button','diamond-button'); b.type = 'button'; b.setAttribute('aria-label',`Show ${game.title}`); b.setAttribute('aria-controls','game-panel');
    b.append(el('span','diamond-shape'),el('span','diamond-tooltip',game.title)); b.addEventListener('click',()=>showGame(i)); $('diamonds').append(b);
  });

  function placeholder(i, small = false) {
    const p = el('div','image-placeholder'); p.append(icon('image'),el('span','',small ? number(i) : 'Image forthcoming')); return p;
  }
  function imageInto(container, item, i, small) {
    const request = {}; imageRequests.set(container, request);
    const src = mediaURL(item?.src);
    container.replaceChildren(placeholder(i, small));
    if (!src) return;
    const img = el('img'); img.alt = small ? '' : (item.alt || `${data.games[current].title} — image ${i + 1}`);
    img.addEventListener('load',()=>{ if (!container.isConnected || imageRequests.get(container) !== request) return; container.replaceChildren(img); if (!small && item.caption) container.append(el('figcaption','',item.caption)); },{once:true});
    img.addEventListener('error',()=>{ img.remove(); },{once:true}); img.src = src;
  }
  function showImage(i, announce = false) {
    const images = data.games[current].images.slice(0,6); if (!images.length) return;
    selected = i; imageInto($('selected-image'),images[i],i,false);
    if (!images[i].src) $('selected-image').append(el('span','image-marker',`${number(i)} / ${data.games[current].title}`));
    [...$('thumbnails').children].forEach((b,j)=>b.setAttribute('aria-pressed',String(j === i)));
    $('image-count').textContent = `${number(i)} / ${String(images.length).padStart(2,'0')}`;
    if (announce) $('announcement').textContent = `${data.games[current].title}, image ${i+1} of ${images.length}.`;
  }
  function showGallery(game) {
    $('thumbnails').replaceChildren(); const images = game.images.slice(0,6);
    if (!images.length) { $('selected-image').replaceChildren(placeholder(0)); $('image-count').textContent = ''; return; }
    images.forEach((item, i) => {
      const b = el('button','thumbnail'); b.type = 'button'; b.setAttribute('aria-label',`Show image ${i+1} for ${game.title}`); b.setAttribute('aria-controls','selected-image'); b.setAttribute('aria-pressed','false');
      imageInto(b,item,i,true); b.addEventListener('click',()=>showImage(i,true));
      b.addEventListener('keydown',e=>{ if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) return; e.preventDefault(); e.stopPropagation(); const next = (i + (['ArrowRight','ArrowDown'].includes(e.key)?1:-1) + images.length)%images.length; showImage(next,true); $('thumbnails').children[next].focus(); });
      $('thumbnails').append(b);
    }); showImage(0);
  }
  function showVideo(game) {
    const frame = $('video-frame'); const version = ++mediaVersion;
    const previous = frame.querySelector('video'); if (previous) previous.pause();
    frame.replaceChildren(); frame.setAttribute('aria-label',`${game.title} video`);
    const config = game.video || {}, src = mediaURL(config.src), poster = mediaURL(config.poster);
    if (poster) { const img = el('img','video-poster'); img.alt = ''; img.src = poster; img.addEventListener('error',()=>img.remove(),{once:true}); frame.append(img); }
    const center = el(src ? 'button' : 'div', src ? 'video-start' : 'video-empty');
    const play = el('span','play-symbol'); play.setAttribute('aria-hidden','true'); play.append(icon('play'));
    center.append(play,el('strong','',src ? (config.label || 'Play video') : 'Footage forthcoming'),el('p','',src ? 'Play video' : 'Gameplay video will appear here.'));
    frame.append(center,el('span','media-corner',game.title),el('span','media-corner right',src ? 'GAME VIDEO 16:9' : 'VIDEO PLACEHOLDER 16:9'));
    if (!src) return;
    center.type = 'button'; center.setAttribute('aria-label',`Play ${game.title} video`);
    center.addEventListener('click',()=>{
      if (version !== mediaVersion) return;
      frame.replaceChildren();
      if (config.type === 'embed') {
        const player = new URL(src); player.searchParams.set('autoplay','0');
        const iframe = el('iframe'); iframe.title = `${game.title} video player`; iframe.src = player.href; iframe.allow = 'fullscreen; picture-in-picture; encrypted-media'; iframe.allowFullscreen = true; iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        frame.append(iframe); iframe.focus();
      } else {
        const video = el('video'); video.controls = true; video.playsInline = true; video.preload = 'metadata'; video.setAttribute('aria-label',`${game.title} gameplay video`); if (poster) video.poster = poster;
        if (config.captions) { const track = el('track'); track.kind='captions'; track.label='English'; track.srclang='en'; track.src=mediaURL(config.captions); video.append(track); }
        video.addEventListener('error',()=>{ if (version !== mediaVersion) return; const error = el('div','video-error'); error.append(el('strong','','Video unavailable'),el('p','','The video could not be loaded.')); frame.replaceChildren(error); },{once:true});
        frame.append(video); video.src = src; video.focus(); const playPromise = video.play(); if (playPromise) playPromise.catch(()=>{});
      }
    },{once:true});
  }
  function applyTheme(game) {
    document.body.className = `theme-${game.theme || game.id}`;
    const art = mediaURL(game.themeArt);
    document.documentElement.style.setProperty('--theme-art', art ? `url("${art}")` : 'none');
  }
  function showGame(i, announce = true) {
    if (i < 0 || i >= data.games.length) return;
    current = i; selected = 0; const game = data.games[i]; applyTheme(game);
    $('game-title').textContent = game.title;
    $('game-subtitle').textContent = game.subtitle || '';
    $('game-description-primary').textContent = game.descriptionPrimary || game.description || '';
    $('game-description-secondary').textContent = game.descriptionSecondary || '';
    $('project-symbol').textContent = game.symbol || '◇';
    $('metadata').replaceChildren(...[game.genre].filter(Boolean).map(t=>el('li','',t)));
    $('game-number').textContent = number(i);
    [...$('diamonds').children].forEach((b,j)=>b.setAttribute('aria-current',String(j === i)));
    [...$('sidebar-games').children].forEach((b,j)=>b.setAttribute('aria-current',String(j === i)));
    $('previous-game').disabled = i === 0; $('next-game').disabled = i === data.games.length-1;
    showVideo(game); showGallery(game);
    if (announce) $('announcement').textContent = `${game.title}. Game ${i+1} of 3. ${game.subtitle}`;
  }

  $('previous-game').addEventListener('click',()=>showGame(current-1));
  $('next-game').addEventListener('click',()=>showGame(current+1));
  document.addEventListener('keydown',e=>{
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || !['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) return;
    const target = e.target;
    if (target.closest('video,iframe,input,textarea,select,[contenteditable],.video-frame,.thumbnails,.contact-links')) return;
    e.preventDefault(); const delta = ['ArrowRight','ArrowDown'].includes(e.key)?1:-1; const next = Math.max(0,Math.min(2,current+delta));
    if (next !== current) showGame(next);
  });
  showGame(0,false);
})();

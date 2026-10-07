'use strict';
(() => {
  const root = new URL('.', document.currentScript.src);
  const data = window.PORTFOLIO;
  if (!data || data.games.length !== 3) throw new Error('The EVA showcase requires exactly three configured games.');
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; };
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
  $('identity-name').textContent = data.identity.name;
  $('identity-role').textContent = data.identity.descriptor;
  document.title = `Current Games — ${data.identity.name}`;
  [['email','Email'],['linkedin','LinkedIn'],['instagram','Instagram'],['website','Website']].forEach(([key,label]) => {
    const value = data.identity[key]; if (!value) return;
    const a = el('a'); a.href = key === 'email' ? `mailto:${value}` : mediaURL(value); if (!a.href) return;
    a.setAttribute('aria-label', label); a.append(icon(key === 'email' ? 'email' : 'link'), el('span','',key === 'email' ? value : label));
    if (key !== 'email') { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    $('contact-links').append(a);
  });
  function logoInto(container, src, alt, fallback) {
    container.replaceChildren();
    if (!mediaURL(src)) { container.append(el('span','logo-fallback',fallback)); return; }
    const img = el('img'); img.src = mediaURL(src); img.alt = alt || fallback;
    img.addEventListener('error',()=>container.replaceChildren(el('span','logo-fallback',fallback)),{once:true});
    container.append(img);
  }
  logoInto($('studio-logo'),data.identity.logo,data.identity.logoAlt,data.identity.name);
  function applyTheme(game) {
    const theme = data.themes[game.theme];
    document.body.dataset.theme = game.theme;
    const keys = {accent:'accent',sidebarAccent:'sidebar-accent',pageBackground:'paper',sidebarBackground:'side',ink:'ink',muted:'muted',line:'line',mediaBackground:'media',headingFont:'heading',bodyFont:'body',pitchFont:'pitch',borderStyle:'border-style'};
    for (const [key,css] of Object.entries(keys)) document.documentElement.style.setProperty(`--${css}`,theme[key]);
    for (const [key,css] of [['decorativeTexture','texture'],['decorativeMotif','motif']]) document.documentElement.style.setProperty(`--${css}`,`url("${mediaURL(theme[key])}")`);
    $('sidebar-art').src = mediaURL(theme.sidebarArtwork);
    logoInto($('project-logo'),game.logo,game.logoAlt,game.title);
    $('description-primary').textContent = game.descriptionPrimary;
    $('description-secondary').textContent = game.descriptionSecondary;
  }
  data.games.forEach((game, i) => {
    const tab = el('button','game-tab',game.title); tab.type = 'button'; tab.setAttribute('aria-controls','game-panel');
    tab.addEventListener('click',()=>showGame(i)); $('game-tabs').append(tab);
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
    const hadFocus = $('thumbnails').contains(document.activeElement);
    [...$('thumbnails').children].forEach((b,j)=>{ b.hidden = j === i; b.setAttribute('aria-pressed',String(j === i)); });
    if (hadFocus) [...$('thumbnails').children].find(b=>!b.hidden)?.focus();
    $('image-count').replaceChildren(el('strong','',number(i)),document.createTextNode(` / ${String(images.length).padStart(2,'0')}`));
    if (announce) $('announcement').textContent = `${data.games[current].title}, image ${i+1} of ${images.length}.`;
  }
  function showGallery(game) {
    $('thumbnails').replaceChildren(); const images = game.images.slice(0,6);
    if (!images.length) { $('selected-image').replaceChildren(placeholder(0)); $('image-count').textContent = ''; return; }
    images.forEach((item, i) => {
      const b = el('button','thumbnail'); b.type = 'button'; b.setAttribute('aria-label',`Show image ${i+1} for ${game.title}`); b.setAttribute('aria-controls','selected-image'); b.setAttribute('aria-pressed','false');
      imageInto(b,item,i,true); b.addEventListener('click',()=>showImage(i,true));
      b.addEventListener('keydown',e=>{ if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) return; e.preventDefault(); e.stopPropagation(); const visible = [...$('thumbnails').children].filter(b=>!b.hidden); const next = (visible.indexOf(b) + (['ArrowRight','ArrowDown'].includes(e.key)?1:-1) + visible.length)%visible.length; visible[next].focus(); });
      $('thumbnails').append(b);
    }); showImage(0);
  }
  function showVideo(game) {
    const frame = $('video-frame'); const version = ++mediaVersion;
    const previous = frame.querySelector('video'); if (previous) previous.pause();
    frame.replaceChildren(); frame.setAttribute('aria-label',`${game.title} video`);
    const config = game.video || {}, src = mediaURL(config.src);
    const poster = mediaURL(config.poster);
    if (poster) { const img = el('img','video-poster'); img.alt = ''; img.src = poster; img.addEventListener('error',()=>img.remove(),{once:true}); frame.append(img); }
    const center = el(src ? 'button' : 'div', src ? 'video-start' : 'video-empty');
    const play = el('span','play-symbol'); play.setAttribute('aria-hidden','true'); play.append(icon('play'));
    center.append(play,el('strong','',src ? (config.label || 'Play video') : 'Footage forthcoming'),el('p','',src ? 'Play video' : 'Gameplay video will appear here.'));
    frame.append(center,el('span','media-corner',game.title),el('span','media-corner right',src ? 'GAME VIDEO' : 'VIDEO PLACEHOLDER'));
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
        video.addEventListener('error',()=>{ if (version !== mediaVersion) return; const error = el('div','video-error'); error.append(el('strong','','Video unavailable'),el('p','','The video could not be loaded. Please try again later.')); frame.replaceChildren(error); },{once:true});
        frame.append(video); video.src = src; video.focus(); const playPromise = video.play(); if (playPromise) playPromise.catch(()=>{});
      }
    },{once:true});
  }
  function showGame(i, announce = true) {
    if (i < 0 || i >= data.games.length) return;
    current = i; selected = 0; const game = data.games[i]; applyTheme(game);
    $('game-title').textContent = game.title; $('game-subtitle').textContent = game.subtitle || game.description;
    $('metadata').replaceChildren(...[game.genre,game.status].filter(Boolean).map(t=>el('li','',t)));
    [...$('game-tabs').children].forEach((b,j)=>b.setAttribute('aria-current',String(j === i)));
    showVideo(game); showGallery(game);
    if (announce) $('announcement').textContent = `${game.title}. Game ${i+1} of 3. ${game.subtitle}`;
  }
  showGame(0,false);
})();

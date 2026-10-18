'use strict';
// Independent renderer: PLAY never enters the PDF viewer or changes existing media data.
window.renderPlayView = function (game, root) {
  const $ = id => document.getElementById(id);
  const node = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  };
  const icon = kind => {
    const paths = {Status:'M9 3h6l2 3 3 1v10l-3 1-2 3H9l-2-3-3-1V7l3-1ZM9 12l2 2 4-4',Platform:'M3 3h18v13H3ZM8 21h8M12 16v5',Updated:'M3 5h18v16H3ZM7 2v6M17 2v6M3 10h18M7 14h2M13 14h2',Version:'m12 2 9 5v10l-9 5-9-5V7ZM3 7l9 5 9-5M12 12v10',download:'M12 3v12m-5-5 5 5 5-5M3 16v5h18v-5'};
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('aria-hidden','true');
    const path = document.createElementNS(svg.namespaceURI,'path'); path.setAttribute('d',paths[kind]); svg.append(path); return svg;
  };
  const safeURL = value => {
    if (!value) return '';
    try { const url = new URL(value, root); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  };
  const play = game.play || {}, build = play.build || {};
  const premise = play.premise?.length ? play.premise : ['Extended game synopsis pending.', 'This PLAY page is currently being prepared for the latest evaluation build.'];
  $('play-premise-copy').replaceChildren(...premise.map(text => node('p','',text)));
  const poster = $('play-poster');
  poster.replaceChildren(); poster.hidden = true;
  const preview = safeURL(build.poster || game.video?.poster || game.images?.[0]?.src);
  if (preview) {
    const image = node('img'); image.alt = game.title + (build.poster ? ' playable build preview' : ' game preview');
    image.addEventListener('error', () => { poster.hidden = true; }, {once:true});
    image.src = preview; poster.append(image); poster.hidden = false;
  }
  const details = $('play-build-details'); details.replaceChildren();
  for (const [label, value] of [
    ['Status', build.status || 'Build information pending.'],
    ['Platform', [build.platform, build.architecture].filter(Boolean).join(' · ')],
    ['Updated', build.updated], ['Version', build.version]
  ]) {
    if (!value) continue;
    const row = node('div','play-build-row');
    const term = node('dt','',label); term.prepend(icon(label));
    row.append(term,node('dd','',value)); details.append(row);
  }
  const actions = $('play-build-actions'); actions.replaceChildren();
  const url = safeURL(build.url);
  if (url) {
    const link = node('a','play-build-button','Download build');
    link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    link.prepend(icon('download')); actions.append(link);
  } else {
    const button = node('button','play-build-button','Build forthcoming');
    button.type = 'button'; button.disabled = true; button.prepend(icon('download')); actions.append(button);
  }
  $('play-build-note').textContent = build.note || '';
  $('play-build-note').hidden = !build.note;
  $('play-build-provider').textContent = url && build.provider ? 'External download · ' + build.provider : '';
  $('play-build-provider').hidden = !url || !build.provider;
  $('play-preparation').hidden = !!url;
};

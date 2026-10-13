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
  if (safeURL(build.poster)) {
    const image = node('img'); image.alt = game.title + ' playable build preview';
    image.addEventListener('error', () => { poster.hidden = true; }, {once:true});
    image.src = safeURL(build.poster); poster.append(image); poster.hidden = false;
  }
  const details = $('play-build-details'); details.replaceChildren();
  for (const [label, value] of [
    ['Status', build.status || 'Build information pending.'],
    ['Platform', [build.platform, build.architecture].filter(Boolean).join(' · ')],
    ['Updated', build.updated], ['Version', build.version]
  ]) {
    if (!value) continue;
    const row = node('div','play-build-row');
    row.append(node('dt','',label),node('dd','',value)); details.append(row);
  }
  const actions = $('play-build-actions'); actions.replaceChildren();
  const url = safeURL(build.url);
  if (url) {
    const link = node('a','play-build-button','Download build');
    link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    actions.append(link);
  } else {
    const button = node('button','play-build-button','Build forthcoming');
    button.type = 'button'; button.disabled = true; actions.append(button);
  }
  $('play-build-note').textContent = build.note || '';
  $('play-build-note').hidden = !build.note;
  $('play-build-provider').textContent = url && build.provider ? 'External download · ' + build.provider : '';
  $('play-build-provider').hidden = !url || !build.provider;
  $('play-preparation').hidden = !!url;
};

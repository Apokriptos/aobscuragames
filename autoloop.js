'use strict';
(() => {
  const frame = document.getElementById('video-frame');
  if (!frame) return;

  const applyLoop = node => {
    const videos = node instanceof HTMLVideoElement ? [node] : [...node.querySelectorAll?.('video') || []];
    videos.forEach(video => { video.loop = true; });
  };

  applyLoop(frame);
  new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) applyLoop(node);
      }
    }
  }).observe(frame, {childList:true, subtree:true});
})();

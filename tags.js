'use strict';
(() => {
  const tagsByTheme = {
    hollow: ['Investigation', 'Supernatural Horror', 'Sci-Fi', 'Survival Horror'],
    reditus: ['Roguelite', 'Action', 'Dark Fantasy', 'Brutal'],
    dreadwoods: ['Narrative-Driven', 'Adventure', 'Puzzle', 'Folklore Fantasy', 'Folk Horror']
  };

  const metadata = document.getElementById('metadata');
  if (!metadata) return;

  function renderTags() {
    const tags = tagsByTheme[document.body.dataset.theme] || [];
    metadata.replaceChildren(...tags.map(label => {
      const item = document.createElement('li');
      item.textContent = label;
      return item;
    }));
  }

  // app.js changes data-theme whenever the active game changes. Observe only that
  // attribute so the existing game-switching logic can remain untouched.
  new MutationObserver(renderTags).observe(document.body, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  renderTags();
})();

'use strict';
(() => {
  const trigger = document.getElementById('legal-ip-link');
  const dialog = document.getElementById('legal-ip-notice');
  const close = document.getElementById('legal-ip-close');
  let previousFocus;
  trigger.addEventListener('click', event => {
    event.preventDefault();
    if (dialog.open) return;
    previousFocus = document.activeElement;
    dialog.showModal();
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    // Keep document-view arrow shortcuts behind the modal from changing PDF pages.
    event.stopPropagation();
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('a[href], button:not(:disabled), [tabindex="0"]')];
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (previousFocus?.isConnected) previousFocus.focus({preventScroll:true});
  });
  // Native showModal supplies an inert background and Escape dismissal.
})();

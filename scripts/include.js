
// Simple HTML include for partials: <div data-include="partials/header.html"></div>
(async function() {
  async function include(el) {
    const file = el.getAttribute('data-include');
    if (!file) return;
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to fetch ${file}`);
      const html = await res.text();
      el.outerHTML = html;
    } catch (e) {
      console.error('Include error:', e);
    }
  }

  async function runIncludes() {
    const nodes = Array.from(document.querySelectorAll('[data-include]'));
    for (const n of nodes) {
      await include(n);
    }
    // After header is injected, set active nav link
    const path = location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a[href]');
    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href === path) {
        a.classList.add('text-brand-primary','font-semibold');
        a.setAttribute('aria-current','page');
      } else {
        a.classList.remove('text-brand-primary','font-semibold');
        a.removeAttribute('aria-current');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runIncludes);
  } else {
    runIncludes();
  }
})();

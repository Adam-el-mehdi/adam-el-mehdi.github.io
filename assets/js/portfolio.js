/* Language, navigation and gallery; no third-party scripts or tracking. */
(() => {
  'use strict';
  const supported = ['fr', 'en'];
  const url = new URL(window.location.href);
  let saved;
  try { saved = localStorage.getItem('adam-portfolio-language'); } catch (_) {}
  let language = supported.includes(url.searchParams.get('lang')) ? url.searchParams.get('lang') : (supported.includes(saved) ? saved : 'fr');
  const dialog = document.getElementById('image-dialog');
  const sidebar = document.getElementById('sidebar');
  const menu = document.getElementById('menu-toggle');
  const applyLanguage = lang => {
    language = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-fr][data-en]').forEach(el => { el.textContent = el.dataset[lang]; });
    document.querySelectorAll('[data-alt-fr][data-alt-en]').forEach(el => { el.alt = lang === 'fr' ? el.dataset.altFr : el.dataset.altEn; });
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
    document.querySelector('nav[aria-label]')?.setAttribute('aria-label', lang === 'fr' ? 'Navigation principale' : 'Main navigation');
    document.querySelector('.brand')?.setAttribute('aria-label', lang === 'fr' ? 'Adam El Mehdi — accueil' : 'Adam El Mehdi — home');
    document.querySelectorAll('.image-zoom').forEach(el => el.setAttribute('aria-label', (lang === 'fr' ? 'Agrandir : ' : 'Enlarge: ') + el.querySelector('img').alt));
    document.querySelectorAll('a[href]').forEach(el => {
      const href = el.getAttribute('href');
      if (href && !href.startsWith('#') && !/^(https?:|mailto:|tel:)/.test(href) && href.includes('.html')) {
        const target = new URL(href, window.location.href);
        target.searchParams.set('lang', lang);
        el.setAttribute('href', target.pathname.split('/').pop() === 'index.html' && window.location.pathname.includes('/projects/') ? '../index.html' + target.search + target.hash : href.split('?')[0].split('#')[0] + target.search + target.hash);
      }
    });
    const nextURL = new URL(window.location.href);
    if (lang === 'en') nextURL.searchParams.set('lang', lang); else nextURL.searchParams.delete('lang');
    history.replaceState(null, '', nextURL);
    try { localStorage.setItem('adam-portfolio-language', lang); } catch (_) {}
  };
  document.querySelectorAll('[data-lang]').forEach(el => el.addEventListener('click', () => applyLanguage(el.dataset.lang)));
  applyLanguage(language);
  const closeMenu = () => { sidebar.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => {
    const opened = sidebar.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(opened));
    if (opened) sidebar.querySelector('nav a')?.focus();
  });
  document.querySelectorAll('#sidebar nav a').forEach(el => el.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && sidebar.classList.contains('open')) { closeMenu(); menu.focus(); } });
  if ('IntersectionObserver' in window && !document.body.classList.contains('project-page')) {
    const items = [...document.querySelectorAll('#sidebar nav a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        items.forEach(link => { const current = link.hash === '#' + entry.target.id; link.classList.toggle('active', current); if (current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
      });
    }, {rootMargin: '-10% 0px -65% 0px', threshold: 0});
    document.querySelectorAll('main > section[id]:not(#about)').forEach(section => observer.observe(section));
    items[0].classList.add('active');
    items[0].setAttribute('aria-current', 'location');
  }
  document.querySelectorAll('.image-zoom').forEach(button => button.addEventListener('click', () => {
    if (!dialog || typeof dialog.showModal !== 'function') { window.open(button.dataset.image, '_blank', 'noopener'); return; }
    const source = button.querySelector('img');
    const target = document.getElementById('expanded-image');
    target.src = button.dataset.image;
    target.alt = source.alt;
    document.getElementById('expanded-caption').textContent = source.alt;
    dialog.setAttribute('aria-label', source.alt);
    dialog.showModal();
  }));
  dialog?.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
})();

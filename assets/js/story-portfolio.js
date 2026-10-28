/* Story adaptation: language, navigation and image viewing. No third-party scripts. */
(() => {
  'use strict';
  const nav = document.getElementById('primary-navigation');
  const menu = document.getElementById('menu-toggle');
  const dialog = document.getElementById('image-dialog');
  const themeButton = document.getElementById('theme-toggle');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const themeLabel = () => {
    if (!themeButton) return;
    const dark = document.documentElement.dataset.theme === 'dark';
    const fr = document.documentElement.lang === 'fr';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', fr ? (dark ? 'Activer le mode clair' : 'Activer le mode sombre') : (dark ? 'Switch to light mode' : 'Switch to dark mode'));
    themeButton.querySelector('.theme-label').textContent = fr ? (dark ? 'Clair' : 'Sombre') : (dark ? 'Light' : 'Dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#19171c' : '#fffdfa');
  };
  const setTheme = value => { document.documentElement.dataset.theme = value; themeLabel(); };
  themeButton?.addEventListener('click', () => {
    const value = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(value);
    try { localStorage.setItem('adam-portfolio-theme', value); } catch (_) {}
  });
  preference.addEventListener('change', event => {
    let stored; try { stored = localStorage.getItem('adam-portfolio-theme'); } catch (_) {}
    if (stored !== 'dark' && stored !== 'light') setTheme(event.matches ? 'dark' : 'light');
  });
  const media = window.AdamPortfolioMedia || {};
  const photo = document.getElementById('profile-photo');
  if (photo && media.photo) {
    photo.addEventListener('load', () => { photo.hidden = false; document.getElementById('portrait-placeholder').hidden = true; });
    photo.addEventListener('error', () => { photo.hidden = true; document.getElementById('portrait-placeholder').hidden = false; });
    photo.src = media.photo;
  }
  const video = document.getElementById('pitch-video');
  if (video && media.video) {
    video.src = media.video;
    if (media.poster) video.poster = media.poster;
    if (media.captions) {
      const track = document.createElement('track'); track.kind = 'captions'; track.srclang = 'fr'; track.label = 'Français'; track.src = media.captions; video.append(track);
    }
    video.hidden = false; document.getElementById('pitch-placeholder').hidden = true;
    video.addEventListener('error', () => { video.hidden = true; document.getElementById('pitch-placeholder').hidden = false; });
  }
  const languages = ['fr', 'en'];
  const url = new URL(location.href);
  let saved;
  try { saved = localStorage.getItem('adam-portfolio-language'); } catch (_) {}
  let language = languages.includes(url.searchParams.get('lang')) ? url.searchParams.get('lang') : (languages.includes(saved) ? saved : 'fr');
  const closeMenu = () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); };
  const applyLanguage = lang => {
    language = lang;
    document.documentElement.lang = lang;
    themeLabel();
    document.getElementById('pitch-video')?.setAttribute('aria-label', lang === 'fr' ? 'Vidéo de présentation d’Adam El Mehdi' : 'Adam El Mehdi’s video introduction');
    document.querySelectorAll('[data-fr][data-en]').forEach(el => { el.textContent = el.dataset[lang]; });
    document.querySelectorAll('[data-alt-fr][data-alt-en]').forEach(el => { el.alt = lang === 'fr' ? el.dataset.altFr : el.dataset.altEn; });
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
    nav?.setAttribute('aria-label', lang === 'fr' ? 'Navigation principale' : 'Main navigation');
    menu?.setAttribute('aria-label', lang === 'fr' ? 'Ouvrir ou fermer le menu' : 'Open or close the menu');
    document.querySelector('.site-brand')?.setAttribute('aria-label', lang === 'fr' ? 'Adam El Mehdi — accueil' : 'Adam El Mehdi — home');
    document.querySelectorAll('[data-primary-cv]').forEach(el => {
      el.href = `docs/cv-adam-el-mehdi-${lang}.pdf`;
      el.textContent = lang === 'fr' ? 'CV français · PDF ↗' : 'English CV · PDF ↗';
    });
    document.querySelectorAll('[data-secondary-cv]').forEach(el => {
      el.href = `docs/cv-adam-el-mehdi-${lang === 'fr' ? 'en' : 'fr'}.pdf`;
      el.textContent = lang === 'fr' ? 'English CV ↗' : 'CV français ↗';
    });
    document.querySelectorAll('a[href]').forEach(el => {
      const href = el.getAttribute('href');
      if (!href || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(href) || !href.split(/[?#]/)[0].endsWith('.html')) return;
      const target = new URL(href, location.href);
      target.searchParams.set('lang', lang);
      const relativePath = href.split(/[?#]/)[0];
      el.setAttribute('href', relativePath + target.search + target.hash);
    });
    const description = document.documentElement.dataset[lang === 'fr' ? 'descriptionFr' : 'descriptionEn'];
    if (description) document.querySelectorAll('meta[name="description"],meta[property="og:description"]').forEach(el => el.setAttribute('content', description));
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelectorAll('.media-zoom').forEach(el => el.setAttribute('aria-label', (lang === 'fr' ? 'Agrandir : ' : 'Enlarge: ') + (el.querySelector('img')?.alt || '')));
    const next = new URL(location.href);
    if (lang === 'en') next.searchParams.set('lang', lang); else next.searchParams.delete('lang');
    history.replaceState(null, '', next);
    try { localStorage.setItem('adam-portfolio-language', lang); } catch (_) {}
  };
  document.querySelectorAll('[data-lang]').forEach(el => el.addEventListener('click', () => applyLanguage(el.dataset.lang)));
  applyLanguage(language);
  menu?.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(opened));
  });
  nav?.querySelectorAll('a').forEach(el => el.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav?.classList.contains('open')) { closeMenu(); menu?.focus(); }
  });
  document.addEventListener('click', event => {
    if (nav?.classList.contains('open') && !event.target.closest('.site-header')) closeMenu();
  });
  if ('IntersectionObserver' in window && !document.body.classList.contains('project-page')) {
    const links = [...document.querySelectorAll('.main-nav a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -65% 0px'});
    document.querySelectorAll('[data-nav-section]').forEach(el => observer.observe(el));
  }
  document.querySelectorAll('.media-zoom').forEach(button => button.addEventListener('click', () => {
    const source = button.querySelector('img');
    if (!dialog?.showModal) { window.open(button.dataset.image, '_blank', 'noopener'); return; }
    const expanded = document.getElementById('expanded-image');
    expanded.src = button.dataset.image;
    expanded.alt = source?.alt || '';
    document.getElementById('expanded-caption').textContent = expanded.alt;
    dialog.setAttribute('aria-label', expanded.alt);
    dialog.showModal();
  }));
  dialog?.querySelector('.close-dialog')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
})();

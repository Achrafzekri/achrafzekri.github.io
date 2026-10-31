/* Vanilla JavaScript. Works from file:// and from any GitHub Pages base path. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const dictionary = window.PORTFOLIO_TRANSLATIONS;
  const languageButtons = document.querySelectorAll('[data-lang]');
  const nav = document.querySelector('nav');
  const menu = document.querySelector('.menu');
  function setLanguage(lang) {
    if (!dictionary[lang]) lang = 'fr';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { const value = dictionary[lang][el.dataset.i18n]; if (value !== undefined) el.innerHTML = value; });
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    nav.setAttribute('aria-label', lang === 'fr' ? 'Navigation principale' : 'Main navigation');
    menu.setAttribute('aria-label', lang === 'fr' ? 'Afficher ou masquer le menu' : 'Show or hide menu');
    document.title = 'Achraf Zekri | ' + (lang === 'fr' ? 'Contrôleur de gestion junior' : 'Junior Management Controller');
    document.querySelector('meta[name="description"]').content = lang === 'fr' ? 'Achraf Zekri à Tanger : contrôle de gestion, analyse des coûts, reporting et data analytics. Découvrez mon parcours et mes projets.' : 'Achraf Zekri in Tangier: management control, cost analysis, reporting and data analytics. Explore my background and projects.';
    try { localStorage.setItem('portfolio_language', lang); } catch (_) { /* Storage can be disabled. */ }
  }
  let initial = 'fr';
  try { initial = localStorage.getItem('portfolio_language') || 'fr'; } catch (_) {}
  setLanguage(initial);
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
  // Retain the original GA4 property and event names. Preview/file URLs never send test visits.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const production = window.location.hostname === 'achrafzekri.github.io';
  if (production) {
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-H097RGQDFC';
    document.head.appendChild(script);
    window.gtag('js', new Date()); window.gtag('config', 'G-H097RGQDFC');
  }
  // No history rewrite: UTM parameters remain in the landing URL when language changes.
  document.querySelectorAll('[data-event]').forEach(link => link.addEventListener('click', () => {
    const params = link.dataset.event === 'linkedin_click' ? {linkedin_location: link.dataset.location} : {};
    window.gtag('event', link.dataset.event, params);
  }));
})();

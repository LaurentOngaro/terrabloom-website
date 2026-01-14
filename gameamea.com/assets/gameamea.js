/* gameamea.js
   Shared script for language persistence and fade transitions
*/
(function () {
  const PREF_KEY = 'terra_pref_lang';
  const TRANS_MS = 250;
  const main = document.querySelector('.card');

  function fadeIn() {
    if (!main) return;
    main.classList.remove('fade-out');
    main.classList.add('fade-init');
    // Force reflow
    void main.offsetWidth;
    main.classList.add('fade-in');
    function onEnd(e) {
      if (e.propertyName === 'opacity') {
        main.classList.remove('fade-init');
        main.removeEventListener('transitionend', onEnd);
      }
    }
    main.addEventListener('transitionend', onEnd);
    setTimeout(() => {
      main.classList.remove('fade-init');
      main.removeEventListener('transitionend', onEnd);
    }, TRANS_MS + 80);
  }

  function fadeOutAndNavigate(lang, href) {
    try {
      localStorage.setItem(PREF_KEY, lang);
    } catch (e) {}
    if (!main) {
      window.location.href = href;
      return;
    }
    main.classList.remove('fade-in', 'fade-init');
    main.classList.add('fade-out');
    function onEnd(e) {
      if (e.propertyName === 'opacity') {
        main.removeEventListener('transitionend', onEnd);
        window.location.href = href;
      }
    }
    main.addEventListener('transitionend', onEnd);
    setTimeout(() => {
      window.location.href = href;
    }, TRANS_MS + 80);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switch a').forEach((a) => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.href;
        const lang = this.getAttribute('hreflang') || (href.includes('index-en') ? 'en' : 'fr');
        fadeOutAndNavigate(lang, href);
      });
    });

    fadeIn();

    try {
      const pref = localStorage.getItem(PREF_KEY);
      const current = document.documentElement.lang || (location.pathname.includes('index-en') ? 'en' : 'fr');
      if (pref && pref !== current) {
        const target = pref === 'en' ? '/gameamea.com/index-en.html' : '/gameamea.com/';
        if (location.pathname !== target) {
          if (main) {
            main.classList.add('fade-out');
            setTimeout(() => location.replace(target), TRANS_MS + 40);
          } else {
            location.replace(target);
          }
        }
      }
    } catch (e) {}
  });
})();

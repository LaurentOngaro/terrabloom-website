/* ============================================
   TERRABLOOM WEBSITE - MAIN.JS
   Theme Toggle + Language Toggle + Navigation
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initLanguage();
  initNavigation();
  initFormspree();
  initGalleryAnimation();
  initGoogleAnalytics();
});

/* ============================================
   THEME MANAGEMENT (Dark/Light)
   ============================================ */

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Toggle button listener
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const currentTheme = localStorage.getItem('theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      updateThemeButton(newTheme);
    });
  }
}

function setTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeButton(theme);
}

function updateThemeButton(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const lang = getCurrentLanguage();
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    const darkTitle = lang === 'en' ? 'Switch to dark mode' : 'Passer en mode sombre';
    const lightTitle = lang === 'en' ? 'Switch to light mode' : 'Passer en mode clair';
    themeToggle.setAttribute('title', theme === 'light' ? darkTitle : lightTitle);
  }
}

/* ============================================
   LANGUAGE MANAGEMENT (FR/EN)
   ============================================ */

function getCurrentLanguage() {
  const currentPath = window.location.pathname;
  const filename = currentPath.split('/').pop() || 'index.html';
  const isEnglishPage = filename.endsWith('-en.html');
  return isEnglishPage ? 'en' : 'fr';
}

function initLanguage() {
  const langToggle = document.getElementById('lang-toggle');

  // Detect current language from page
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      const currentLang = getCurrentLanguage();
      const newLang = currentLang === 'fr' ? 'en' : 'fr';
      redirectToLanguage(newLang);
    });
  }
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  updateLangButton(lang);
}

function updateLangButton(lang) {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
    langToggle.setAttribute('title', lang === 'fr' ? 'Switch to English' : 'Passer au français');
  }
}

function redirectToLanguage(lang) {
  const currentPath = window.location.pathname;
  const currentFilename = currentPath.split('/').pop();

  setLanguage(lang);

  // Map files FR -> EN
  const fileMap = {
    'index.html': { fr: 'index.html', en: 'index-en.html' },
    'about.html': { fr: 'about.html', en: 'about-en.html' },
    'blog.html': { fr: 'blog.html', en: 'blog-en.html' },
    'contact.html': { fr: 'contact.html', en: 'contact-en.html' },
    'privacy.html': { fr: 'privacy.html', en: 'privacy-en.html' },
    'index-en.html': { fr: 'index.html', en: 'index-en.html' },
    'about-en.html': { fr: 'about.html', en: 'about-en.html' },
    'blog-en.html': { fr: 'blog.html', en: 'blog-en.html' },
    'contact-en.html': { fr: 'contact.html', en: 'contact-en.html' },
    'privacy-en.html': { fr: 'privacy.html', en: 'privacy-en.html' },
  };

  const mapping = fileMap[currentFilename] || fileMap['index.html'];
  const newFile = mapping[lang];

  const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
  window.location.href = basePath + '/' + newFile;
}

/* ============================================
   NAVIGATION MANAGEMENT
   ============================================ */

function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  }

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      nav.classList.remove('active');
      setActiveLink(this);
    });
  });

  // Set active link based on current page
  setActiveLinkByPage();
}

function setActiveLink(element) {
  document.querySelectorAll('nav a').forEach((link) => {
    link.classList.remove('active');
  });
  element.classList.add('active');
}

function setActiveLinkByPage() {
  const currentPath = window.location.pathname;
  const filename = currentPath.split('/').pop() || 'index.html';

  // Normalize filenames
  let normalizedFile = filename;
  if (filename.endsWith('-en.html')) {
    normalizedFile = filename.replace('-en.html', '.html');
  }

  document.querySelectorAll('nav a').forEach((link) => {
    const href = link.getAttribute('href');
    const linkFile = href.split('/').pop();

    if (
      linkFile === filename ||
      linkFile === normalizedFile ||
      (normalizedFile === 'index.html' && (href === '/' || linkFile === 'index.html' || linkFile === 'index-en.html'))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ============================================
   FORMSPREE INTEGRATION
   ============================================ */

function initFormspree() {
  const form = document.querySelector('form[action^="https://formspree.io"]');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      const lang = getCurrentLanguage();

      // Translations
      const messages = {
        sending: lang === 'en' ? 'Sending...' : 'Envoi...',
        sent: lang === 'en' ? '✅ Sent!' : '✅ Envoyé !',
        error: lang === 'en' ? '❌ Error' : '❌ Erreur'
      };

      submitBtn.disabled = true;
      submitBtn.textContent = messages.sending;

      const formData = new FormData(form);

      // Convert FormData to JSON object for Formspree
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      fetch(form.getAttribute('action'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => {
          if (response.ok) {
            form.reset();
            submitBtn.textContent = messages.sent;
            setTimeout(() => {
              submitBtn.disabled = false;
              submitBtn.textContent = originalText;
            }, 3000);
          } else {
            return response.json().then(data => {
              throw new Error(data.error || 'Form submission failed');
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          submitBtn.textContent = messages.error;
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }, 3000);
        });
    });
  }
}

/* ============================================
   GALLERY DROP-IN ANIMATION
   ============================================ */

function initGalleryAnimation() {
  const galleryGrids = document.querySelectorAll('.gallery-grid');
  const phaseGrids = document.querySelectorAll('.phases-grid');

  if (!galleryGrids.length && !phaseGrids.length) {
    return;
  }

  requestAnimationFrame(() => {
    galleryGrids.forEach((grid) => {
      grid.classList.add('gallery-loaded');
    });
    phaseGrids.forEach((grid) => {
      grid.classList.add('phases-loaded');
    });
  });
}

/* ============================================
   SMOOTH SCROLL & UTILITY
   ============================================ */

function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ============================================
   GOOGLE ANALYTICS
   ============================================ */

function initGoogleAnalytics() {
  // Initialize data layer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-8LMY4GLCC9');

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8LMY4GLCC9';
  document.head.appendChild(script);
}

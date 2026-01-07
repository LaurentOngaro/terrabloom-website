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
  initBackToTop();
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
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const errorDiv = form.querySelector('#form-error');
      const originalText = submitBtn.textContent;
      const lang = getCurrentLanguage();

      // Translations
      const messages = {
        sending: lang === 'en' ? 'Sending...' : 'Envoi...',
        sent: lang === 'en' ? '✅ Sent!' : '✅ Envoyé !',
        error: lang === 'en' ? '❌ Error' : '❌ Erreur',
        validation_error: lang === 'en' ? 'Please fix the following errors:' : 'Veuillez corriger les erreurs suivantes :',
      };

      // Clear previous error messages
      if (errorDiv) {
        errorDiv.style.display = 'none';
        errorDiv.innerHTML = '';
      }

      submitBtn.disabled = true;
      submitBtn.textContent = messages.sending;

      try {
        // Execute reCAPTCHA v3 to get token
        let token = null;
        if (window.grecaptcha) {
          token = await grecaptcha.execute('6LeL5kEsAAAAAI2cHJPrsmnmbxBFKrneQRXaOma3', { action: 'submit' });
        }

        // Prepare form data
        const formData = new FormData(form);

        // Add reCAPTCHA token if available
        if (token) {
          formData.append('g-recaptcha-response', token);
        }

        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          form.reset();
          submitBtn.textContent = messages.sent;
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }, 3000);
        } else {
          const data = await response.json();
          console.error('Formspree response:', data);

          // Display detailed validation errors
          let errorMessage = data.error || `Server returned ${response.status}`;
          let errorHTML = `<strong>${messages.validation_error}</strong><ul>`;

          if (data.errors && Array.isArray(data.errors)) {
            data.errors.forEach((err) => {
              // Special handling for specific field names
              const fieldDisplay = err.field === '_captcha' ? 'Captcha' : err.field === 'g-recaptcha-response' ? 'reCAPTCHA' : err.field;
              errorHTML += `<li><strong>${fieldDisplay}:</strong> ${err.message}</li>`;
            });
            errorHTML += '</ul>';
            console.error('Validation errors:', data.errors);
          } else {
            errorHTML = `<strong>${errorMessage}</strong>`;
          }

          // Display error to user
          if (errorDiv) {
            errorDiv.innerHTML = errorHTML;
            errorDiv.style.display = 'block';
          }

          submitBtn.textContent = messages.error;
        }
      } catch (error) {
        console.error('Form submission error:', error.message);

        // Display error to user
        if (errorDiv) {
          errorDiv.innerHTML = `<strong>${error.message}</strong>`;
          errorDiv.style.display = 'block';
        }

        submitBtn.textContent = messages.error;
      } finally {
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }, 3000);
      }
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

/* ============================================
   BACK TO TOP BUTTON
   ============================================ */

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');

  if (!backToTopBtn) return;

  // Show/hide button on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top on click
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ============================================================================
   TerraBloom Website - JavaScript
   ============================================================================ */

/**
 * Navigation active state management
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/**
 * Form validation
 */
function validateForm(form) {
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add('error');
      isValid = false;
    } else {
      field.classList.remove('error');
    }
  });

  // Validate email
  const emailFields = form.querySelectorAll('input[type="email"]');
  emailFields.forEach((field) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (field.value && !emailRegex.test(field.value)) {
      field.classList.add('error');
      isValid = false;
    } else {
      field.classList.remove('error');
    }
  });

  return isValid;
}

/**
 * Handle form submission (works with Formspree)
 */
function initFormHandlers() {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      if (!validateForm(this)) {
        e.preventDefault();
        alert('Veuillez remplir tous les champs obligatoires avec des données valides.');
      }
    });

    // Add error class removal on input
    form.querySelectorAll('input, textarea, select').forEach((field) => {
      field.addEventListener('focus', function () {
        this.classList.remove('error');
      });
    });
  });
}

/**
 * Newsletter subscription
 */
function initNewsletterForm() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');

  newsletterForms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      // Formspree will handle the submission
      // This just adds client-side feedback
      const submitBtn = this.querySelector('button');
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Merci!';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  });
}

/**
 * Mobile menu toggle (if needed)
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
}

/**
 * Add active class to nav based on current page scroll position
 */
function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Analytics - Optional: Google Analytics or similar
 */
function initAnalytics() {
  // Track page views
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_path: window.location.pathname,
    });
  }
}

/**
 * Lazy load images
 */
function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

/**
 * Theme Switcher (Dark/Light)
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const icon = themeToggle ? themeToggle.querySelector('.icon') : null;

  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

/**
 * Language Switcher (FR/EN)
 */
function initLanguage() {
  const langToggle = document.getElementById('lang-toggle');
  const currentPath = window.location.pathname;
  const isEnglish = currentPath.includes('_en.html');

  if (langToggle) {
    // Set initial state
    langToggle.querySelector('.lang-text').textContent = isEnglish ? 'FR' : 'EN';

    langToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const filename = currentPath.split('/').pop() || 'index.html';
      let newFilename;

      if (isEnglish) {
        // Switch to FR: remove _en
        newFilename = filename.replace('_en.html', '.html');
      } else {
        // Switch to EN: add _en
        newFilename = filename.replace('.html', '_en.html');
      }

      // Handle root index case
      if (filename === '' || filename === '/') {
        newFilename = 'index_en.html';
      }

      window.location.href = newFilename;
    });
  }
}

/**
 * Initialize all functionality on page load
 */
document.addEventListener('DOMContentLoaded', function () {
  console.log('TerraBloom website initialized');

  initNavigation();
  initSmoothScroll();
  initFormHandlers();
  initNewsletterForm();
  initMobileMenu();
  updateActiveNavOnScroll();
  initLazyLoad();
  initAnalytics();
  initTheme();
  initLanguage();
});

/**
 * Utility: Scroll to top button
 */
window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (scrollButton) {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  }
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Export functions for global use
 */
window.TerraBloom = {
  scrollToTop: scrollToTop,
  validateForm: validateForm,
};

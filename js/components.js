// ============================================
// COMPOSANTS RÉUTILISABLES
// Header, Footer, Newsletter
// ============================================

const Components = {
  // Configuration des pages
  pages: {
    fr: {
      index: 'index.html',
      about: 'about.html',
      blog: 'blog.html',
      contact: 'contact.html',
      privacy: 'privacy.html',
    },
    en: {
      index: 'index-en.html',
      about: 'about-en.html',
      blog: 'blog-en.html',
      contact: 'contact-en.html',
      privacy: 'privacy-en.html',
    },
  },

  // Header français
  headerFR(activePage = 'index') {
    const p = this.pages.fr;
    return `
    <header>
      <div class="header-container">
        <a href="${p.index}" class="logo">TerraBloom</a>
        <button class="menu-toggle" aria-label="Toggle menu">☰</button>
        <nav>
          <a href="${p.index}" ${activePage === 'index' ? 'class="active"' : ''}>Accueil</a>
          <a href="${p.about}" ${activePage === 'about' ? 'class="active"' : ''}>À propos</a>
          <a href="${p.blog}" ${activePage === 'blog' ? 'class="active"' : ''}>DevLog</a>
          <a href="${p.contact}" ${activePage === 'contact' ? 'class="active"' : ''}>Contact</a>
        </nav>
        <div class="controls">
          <button id="theme-toggle" class="toggle-btn" aria-label="Toggle theme" title="Changer le thème">🌙</button>
          <button id="lang-toggle" class="toggle-btn" aria-label="Toggle language" title="Switch to English">EN</button>
        </div>
      </div>
    </header>
    `;
  },

  // Header anglais
  headerEN(activePage = 'index') {
    const p = this.pages.en;
    return `
    <header>
      <div class="header-container">
        <a href="${p.index}" class="logo">TerraBloom</a>
        <button class="menu-toggle" aria-label="Toggle menu">☰</button>
        <nav>
          <a href="${p.index}" ${activePage === 'index' ? 'class="active"' : ''}>Home</a>
          <a href="${p.about}" ${activePage === 'about' ? 'class="active"' : ''}>About</a>
          <a href="${p.blog}" ${activePage === 'blog' ? 'class="active"' : ''}>DevLog</a>
          <a href="${p.contact}" ${activePage === 'contact' ? 'class="active"' : ''}>Contact</a>
        </nav>
        <div class="controls">
          <button id="theme-toggle" class="toggle-btn" aria-label="Toggle theme" title="Toggle theme">🌙</button>
          <button id="lang-toggle" class="toggle-btn" aria-label="Toggle language" title="Passer au français">FR</button>
        </div>
      </div>
    </header>
    `;
  },

  // Newsletter français
  newsletterFR: `
    <section class="newsletter">
      <div class="newsletter-container">
        <h2>Restez Informé</h2>
        <p>Inscrivez-vous pour recevoir les dernières nouvelles sur le développement de TerraBloom.</p>
        <form action="https://formspree.io/f/xqeavvyn" method="POST" class="newsletter-form">
          <input type="email" name="email" placeholder="Votre email" required />
          <button type="submit" class="cta-button">S'abonner</button>
        </form>
      </div>
    </section>
  `,

  // Newsletter anglais
  newsletterEN: `
    <section class="newsletter">
      <div class="newsletter-container">
        <h2>Stay Updated</h2>
        <p>Subscribe to receive the latest news about TerraBloom's development.</p>
        <form action="https://formspree.io/f/xqeavvyn" method="POST" class="newsletter-form">
          <input type="email" name="email" placeholder="Your email" required />
          <button type="submit" class="cta-button">Subscribe</button>
        </form>
      </div>
    </section>
  `,

  // Footer français
  footerFR: `
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>TerraBloom</h3>
          <a href="about.html">À propos du jeu</a>
          <a href="about.html#developer">Le développeur</a>
          <a href="about.html#timeline">Timeline</a>
        </div>
        <div class="footer-section">
          <h3>Communauté</h3>
          <a href="https://discord.gg/tXkUqAfkbK" target="_blank" rel="noopener">Discord</a>
          <a href="https://x.com/LaurentOngaro" target="_blank" rel="noopener">Twitter/X</a>
          <a href="https://patreon.com/terrabloom" target="_blank" rel="noopener">Patreon</a>
        </div>
        <div class="footer-section">
          <h3>Développement</h3>
          <a href="blog.html">DevLog</a>
          <a href="https://github.com/LaurentOngaro" target="_blank" rel="noopener">GitHub</a>
          <a href="https://gitlab.com/LaurentOngaro" target="_blank" rel="noopener">GitLab</a>
        </div>
        <div class="footer-section">
          <h3>Contact & Légal</h3>
          <a href="contact.html">Nous contacter</a>
          <a href="privacy.html">Confidentialité</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 TerraBloom. Tous droits réservés. | Développé par <a href="https://github.com/LaurentOngaro">Laurent Ongaro</a></p>
      </div>
    </footer>
  `,

  // Footer anglais
  footerEN: `
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>TerraBloom</h3>
          <a href="about-en.html">About the game</a>
          <a href="about-en.html#developer">The developer</a>
          <a href="about-en.html#timeline">Timeline</a>
        </div>
        <div class="footer-section">
          <h3>Community</h3>
          <a href="https://discord.gg/tXkUqAfkbK" target="_blank" rel="noopener">Discord</a>
          <a href="https://x.com/LaurentOngaro" target="_blank" rel="noopener">Twitter/X</a>
          <a href="https://patreon.com/terrabloom" target="_blank" rel="noopener">Patreon</a>
        </div>
        <div class="footer-section">
          <h3>Development</h3>
          <a href="blog-en.html">DevLog</a>
          <a href="https://github.com/LaurentOngaro" target="_blank" rel="noopener">GitHub</a>
          <a href="https://gitlab.com/LaurentOngaro" target="_blank" rel="noopener">GitLab</a>
        </div>
        <div class="footer-section">
          <h3>Contact & Legal</h3>
          <a href="contact-en.html">Contact us</a>
          <a href="privacy-en.html">Privacy</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 TerraBloom. All rights reserved. | Developed by <a href="https://github.com/LaurentOngaro">Laurent Ongaro</a></p>
      </div>
    </footer>
  `,

  // Détecter la page active
  getActivePage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';

    if (filename.includes('about')) return 'about';
    if (filename.includes('blog')) return 'blog';
    if (filename.includes('contact')) return 'contact';
    return 'index';
  },

  // Injecter le header
  injectHeader() {
    const headerContainer = document.getElementById('header-placeholder');
    if (!headerContainer) return;

    const lang = document.documentElement.lang || 'fr';
    const activePage = this.getActivePage();
    headerContainer.innerHTML = lang === 'en' ? this.headerEN(activePage) : this.headerFR(activePage);
  },

  // Injecter la newsletter
  injectNewsletter() {
    const newsletterContainer = document.getElementById('newsletter-placeholder');
    if (!newsletterContainer) return;

    const lang = document.documentElement.lang || 'fr';
    newsletterContainer.innerHTML = lang === 'en' ? this.newsletterEN : this.newsletterFR;
  },

  // Injecter le footer
  injectFooter() {
    const footerContainer = document.getElementById('footer-placeholder');
    if (!footerContainer) return;

    const lang = document.documentElement.lang || 'fr';
    footerContainer.innerHTML = lang === 'en' ? this.footerEN : this.footerFR;
  },
};

// Initialiser les composants au chargement
document.addEventListener('DOMContentLoaded', () => {
  Components.injectHeader();
  Components.injectNewsletter();
  Components.injectFooter();
});

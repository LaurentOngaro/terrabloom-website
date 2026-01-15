# TerraBloom Website

Site officiel du jeu indie TerraBloom - Build. Defend. Restore.

## 📋 Structure

```

/
├── _Docs/                  # Documentation du projet liés au site
├── css/
│   ├── style.css           # Styles (Dark/Light theme)
│   └── style.min.css       #idem mais en version minifiée
├── data/
│   └── devlog.json         # Posts du DevLog
├── gameamea.com/           # Archive & redirect (FR/EN) + assets (css/js/images)
│   ├── index.html
│   ├── index-en.html
│   └── assets/
├── js/
│   ├── main.js             # Navigation + Theme + Language
│   ├── components.js       # Element communs injectés dans les pages
│   ├── blog-loader.js      # Charge les posts depuis devlog.json
│   └── */min.js            #idem mais en version minifiée
├── about-en.html           # À propos du dev - Crédibilité (EN)
├── about.html              # À propos du dev - Crédibilité (FR)
├── blog-en.html            # DevLog (EN)
├── blog.html               # DevLog (FR)
├── contact-en.html         # Contact (EN)
├── contact.html            # Contact (FR)
├── game-en.html            # Le jeu - Gameplay détaillé (EN)
├── game.html               # Le jeu - Gameplay détaillé (FR)
├── index-en.html           # Accueil (EN)
├── index.html              # Accueil (FR)
├── privacy-en.html         # Politique de confidentialité (EN)
├── privacy.html            # Politique de confidentialité (FR)
└── README.md               # Documentation

```

## 🎨 Fonctionnalités

✅ **Dark/Light Mode Toggle** - Persistant via localStorage
✅ **Français/Anglais** - Support multilingue complet (6 paires de pages)
✅ **DevLog Auto-Load** - Posts chargés depuis devlog.json
✅ **Responsive Design** - Mobile-first, compatible tous écrans
✅ **Formspree Integration** - Formulaire de contact GDPR-compliant
✅ **Components System** - Header/Footer/Newsletter injectés dynamiquement
✅ **Back-to-Top Button** - Bouton fixe avec smooth scroll (apparaît après 300px)
✅ **Footer Disclaimer** - Avertissement pré-alpha visible (boîte orange)
✅ **Chunk System Explanation** - Architecture de terrain modulaire documentée
✅ **Minification Pipeline** - Assets optimisés (CSS + JS) avec npm scripts
✅ **Asset Mode Switcher** - Script PowerShell pour basculer dev/prod
✅ **Clean Design** - Inspiré par GOG, épuré et professionnel

## 🎨 Couleurs & Brand

```css
Primary:   #2E8B57 (Verdant Green)
Secondary: #8D6E63 (Earth Brown)
Accent:    #FFD700 (Sunrise Gold)
```

## 📱 Responsive Breakpoints

- `768px` : Tablette
- `480px` : Mobile

## 🌍 Langue \& Thème

- **Langue** : Stockée dans `localStorage.lang`
  - Défaut: `fr`
  - Options: `fr` ou `en`
- **Thème** : Stocké dans `localStorage.theme`
  - Défaut: `light`
  - Options: `light` ou `dark`

## 📸 Images

Toutes les images (sauf les archives) sont hébergées sur **Cloudinary CDN** avec optimisations automatiques :

- `q_auto` : Qualité adaptative
- `f_auto` : Format automatique (WebP si supporté)
- `w_*` : Largeur responsive
- `c_limit` : Crop intelligent
- `dpr_auto` : Support Retina

**Exemples:**

- Hero: `v1766924009/TerraBloom_Key_Art_V2-Circular_Mandala.png.jpg`
- 3 Phases: `v1767523872/TerraBloom_Key_Art-Build_Defend_Restore_3_phases%20V2.png.jpg`
- 4 Biomes: `v1767523873/TerraBloom_Key_Art_4_Biomes.png.jpg`

## 🛠️ Build & Optimisation

### Scripts npm disponibles

```bash
npm run minify:css    # Minifie style.css → style.min.css
npm run minify:js     # Minifie tous les .js → .min.js
npm run minify        # Minifie CSS + JS
npm run watch:css     # Watch mode pour CSS
npm run watch:js      # Watch mode pour JS
```

## 📞 Support

Questions? Contact Laurent:

- Twitter/X: [@LaurentOngaro](https://x.com/LaurentOngaro)
- GitHub: [LaurentOngaro](https://github.com/LaurentOngaro)
- Patreon: [LaurentOngaro](https://patreon.com/LaurentOngaro)

---

## ⚡ Performance

### PageSpeed Insights (7 Jan 2026)

**Scores** — [View Full Report](https://pagespeed.web.dev/analysis/https-playterrabloom-com/lhz3vrrs5t?form_factor=desktop)

| Metric             | Score       | Status       |
| ------------------ | ----------- | ------------ |
| **Performance**    | **90/100**  | 🟢 Excellent |
| **Accessibility**  | **91/100**  | 🟢 Very Good |
| **Best Practices** | **100/100** | 🟢 Perfect   |
| **SEO**            | **100/100** | 🟢 Perfect   |

**Core Web Vitals (Desktop)**:

| Metric                         | Value | Status        |
| ------------------------------ | ----- | ------------- |
| FCP (First Contentful Paint)   | 0.7s  | ✅            |
| LCP (Largest Contentful Paint) | 0.7s  | ✅            |
| TBT (Total Blocking Time)      | 0ms   | ✅            |
| CLS (Cumulative Layout Shift)  | 0.198 | ⚠️ Acceptable |
| Speed Index                    | 0.7s  | ✅            |

### Optimizations Applied

✅ **Minified Assets** — CSS + JS files optimized (terser, lightningcss)
✅ **Cloudinary CDN** — Images auto-optimized (WebP, quality, sizing)
✅ **Static HTML** — No server-side rendering delays
✅ **GitHub Pages CDN** — Global distribution
✅ **Minimal JavaScript** — Only essential interactivity
✅ **Mobile-First CSS** — Efficient responsive design

**Current Status**: ✅ **Production-ready**

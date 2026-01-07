# TerraBloom Website

Site officiel du jeu indie TerraBloom - Build. Defend. Restore.

## 📋 Structure

```

/
├── index.html              \# Accueil (FR)
├── index-en.html           \# Accueil (EN)
├── about.html              \# À propos (FR)
├── about-en.html           \# À propos (EN)
├── blog.html               \# DevLog (FR)
├── blog-en.html            \# DevLog (EN)
├── contact.html            \# Contact (FR)
├── contact-en.html         \# Contact (EN)
├── css/
│   └── style.css           \# Styles (Dark/Light theme)
├── js/
│   ├── main.js             \# Navigation + Theme + Language
│   └── blog-loader.js      \# Charge les posts depuis devlog.json
├── data/
│   └── devlog.json         \# Posts du DevLog
└── README.md               \# Documentation

```

## 🎨 Fonctionnalités

✅ **Dark/Light Mode Toggle** - Persistant via localStorage
✅ **Français/Anglais** - Support multilingue complet
✅ **DevLog Auto-Load** - Posts chargés depuis JSON
✅ **Responsive Design** - Mobile-first, compatible tous écrans
✅ **Formspree Integration** - Formulaire de contact GDPR-compliant
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

Les images utilisent actuellement des URLs S3 externes :

- Hero (minecraft-globe): `f62cb24b-966f-4c2d-9ee5-0b93b105bb0a`
- Phases (build-defend-restore): `f094d0aa-5f31-4a68-9f20-7238942b1c71`
- Biomes (4-biomes): `1a4da2d3-b0a8-47fe-8e10-2255d1bc78bf`
- Artifact: `5d57bf62-10c5-45af-9d36-c8bbce879c8e`

**Pour héberger localement :**

## 📞 Support

Questions? Contact Laurent:

- Twitter/X: [@LaurentOngaro](https://x.com/LaurentOngaro)
- GitHub: [LaurentOngaro](https://github.com/LaurentOngaro)
- Patreon: [TerraBloom](https://patreon.com/LaurentOngaro)

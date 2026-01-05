# TerraBloom Website

Site officiel du jeu indie TerraBloom - Build. Defend. Restore.

## 📋 Structure

```

docs/
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

## 🚀 Installation & Déploiement

### Localement

```bash
# Ouvre simplement dans un navigateur
# Accès direct aux fichiers HTML
```

### GitHub Pages

1. **Push vers GitHub** (branche main ou master)
2. **Settings** → Pages → Source: `/docs`
3. **DNS** (OVH ou autre registrar):
   - `CNAME` : terrabloom.dev → username.github.io
   - Ou `A` records pour IP GitHub

## 🔧 Configuration

### Formspree (Contact Form)

1. Va sur [formspree.io](https://formspree.io)
2. Crée un nouveau formulaire
3. Copie l'ID (ex: `abc123def456`)
4. Remplace dans `contact.html` et `contact-en.html`:

```html
<form action="https://formspree.io/f/YOUR_ID_HERE" method="POST"></form>
```

### DevLog Posts

Ajoute des posts dans `data/devlog.json`:

````json
{
  "posts": [
    {
      "id": "004",
      "date": "2026-01-05",
      "title_fr": "Titre français",
      "title_en": "English title",
      "excerpt_fr": "Résumé français...",
      "excerpt_en": "English summary...",
      ```
      "content_fr": "<p>Contenu HTML français...</p>",
      ```
      ```
      "content_en": "<p>English HTML content...</p>",
      ```
      "category": "development"
    }
  ]
}
````

## 🎨 Couleurs \& Brand

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

1. Télécharge les images
2. Mets-les dans `docs/images/`
3. Remplace les URLs par des chemins relatifs (ex: `./images/hero.jpg`)

## 🐛 Debugging

**Console logs:**

```javascript
console.log('Current lang:', localStorage.getItem('lang'));
console.log('Current theme:', localStorage.getItem('theme'));
```

**DevLog pas chargé?**

- Vérifie que `devlog.json` est au bon chemin: `./data/devlog.json`
- Ouvre la console (F12) et cherche les erreurs CORS

## 🎯 Prochaines Étapes

1. ✅ Tous les fichiers créés
2. ⏳ Configurer Formspree (ID contact)
3. ⏳ Commit \& Push GitHub
4. ⏳ Configurer DNS (terrabloom.dev)
5. ⏳ Lancer GitHub Pages

## 📞 Support

Questions? Contact Laurent:

- Twitter/X: [@LaurentOngaro](https://x.com/LaurentOngaro)
- GitHub: [LaurentOngaro](https://github.com/LaurentOngaro)
- Patreon: [TerraBloom](https://patreon.com)

---

**Last Updated:** 2026-01-05
**Version:** 1.0.0
**Status:** ✅ Prêt pour déploiement

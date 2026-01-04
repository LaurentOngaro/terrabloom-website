# 🌿 TerraBloom - Official Website

Static website for the TerraBloom game project, hosted on GitHub Pages with custom domains from OVH.

## 📋 Structure

```
docs/
├── index.html              # Homepage
├── game.html               # Game details & mechanics
├── about.html              # Developer bio & social links
├── contact.html            # Contact form & newsletter
├── privacy.html            # GDPR privacy policy
├── assets/
│   ├── style.css           # Main stylesheet
│   ├── script.js           # Interactive features
│   └── favicon.png         # Site icon
├── CNAME                   # Custom domain config (playterrabloom.com)
└── DEPLOYMENT_GUIDE.md     # GitHub Pages setup instructions
```

## 🚀 Quick Start

### For Local Development

1. **Open in VS Code or any HTML editor**
2. **Use Live Server** (VS Code extension) to preview
3. **Edit HTML files** as needed
4. **Styles** are in `assets/style.css`
5. **Interactivity** is in `assets/script.js`

### Deploy to GitHub Pages

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for complete instructions.

Quick summary:
1. Push this folder to a GitHub repository
2. Enable GitHub Pages with source `/docs`
3. Configure DNS at OVH
4. Add Formspree form IDs

## 🎨 Branding

- **Primary Color**: `#2E8B57` (Verdant Green)
- **Secondary Color**: `#8D6E63` (Earth Brown)
- **Accent Color**: `#FFD700` (Sunrise Gold)
- **Font**: Inter (from Google Fonts)

## 📧 Contact Forms

Forms are powered by **Formspree.io** (free, GDPR-compliant):

- Contact form requires: Formspree ID in `contact.html`
- Newsletter forms require: Formspree ID in `index.html` and `contact.html`

Get your IDs at: https://formspree.io

## 🖼️ Images

Images are hosted on **Cloudinary** (`res.cloudinary.com/dhcyqj41d/`):

- Hero image: `TerraBloom_Key_Art-Build_Defend_Restore_3_phases`
- Biomes image: `TerraBloom_Biomes_Corrupted_Restored_Transformations`

## 🔗 Social Links

- Patreon
- GitHub
- GitLab
- YouTube
- X (Twitter)
- Bluesky

All links are configured in `about.html` and footer sections.

## 📱 Responsive Design

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (480px - 767px)
- Ultra-mobile (< 480px)

## ⚙️ Features

- ✅ Fast static HTML (no server required)
- ✅ GDPR-compliant privacy policy
- ✅ Form validation with client-side checks
- ✅ Smooth navigation and scroll behavior
- ✅ Mobile-friendly responsive design
- ✅ Optimized for search engines (SEO)
- ✅ Automatic SSL/HTTPS via GitHub Pages
- ✅ Custom domain support (playterrabloom.com)

## 🔐 Security

- HTTPS enabled by default on GitHub Pages
- No third-party JavaScript dependencies (vanilla JS)
- Form submissions handled by Formspree (secure)
- Privacy policy compliant with GDPR/RGPD

## 📊 Analytics (Optional)

Add Google Analytics by updating the `<head>` section with your `MEASUREMENT_ID`.

See DEPLOYMENT_GUIDE.md for details.

## 🛠️ Development

### Edit HTML

Files are standard HTML5 - use any text editor.

### Edit Styles

Modify `assets/style.css` - uses CSS custom properties (variables) for easy customization.

### Edit Interactivity

Update `assets/script.js` - pure JavaScript, no dependencies.

### Update Images

Replace Cloudinary URLs in HTML files with your own images, or use the existing ones.

## 📝 Content Sync (Future)

A Python script in `_Helpers/03_Maintenance/generateWebsite.py` could automate content sync from the Obsidian vault to this website.

## 🔄 Workflow

1. Edit HTML/CSS/JS locally
2. Test with Live Server
3. Commit to GitHub
4. Push to main branch
5. GitHub Pages auto-deploys

## 📞 Support

- **GitHub Issues**: Report bugs or request features
- **Formspree Support**: Contact form issues
- **OVH Support**: Domain/DNS issues

## 📄 License

© 2025 TerraBloom Project. All rights reserved.

---

**Website Version**: 1.0.0
**Last Updated**: 2 January 2026
**Hosted on**: GitHub Pages
**Domain**: playterrabloom.com

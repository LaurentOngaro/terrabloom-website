# TerraBloom Website - GitHub Pages Deployment Guide

## 🚀 Quick Setup

Cette guide explique comment déployer le site TerraBloom sur GitHub Pages avec les domaines personnalisés achetés chez OVH.

---

## 1. Configuration du Dépôt GitHub

### Option A: Créer un nouveau dépôt (RECOMMANDÉ)

```bash
# Créer un dépôt nommé "terrabloom-website" ou "website"
# Ne PAS utiliser le format "username.github.io" pour ce projet
```

### Option B: Utiliser votre dépôt personnel existant

Si vous avez déjà un dépôt personnel, vous pouvez utiliser le dossier `/docs` pour GitHub Pages.

---

## 2. Ajouter les Fichiers du Site

```bash
# Structure attendue dans votre dépôt GitHub:
root/
├── docs/
│   ├── index.html
│   ├── game.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy.html
│   ├── assets/
│   │   ├── style.css
│   │   ├── script.js
│   │   └── favicon.png
│   └── CNAME (optionnel, voir section 4)
```

---

## 3. Configuration GitHub Pages

**Dans les paramètres de votre dépôt GitHub:**

1. Aller à **Settings** → **Pages**
2. Sous "Source", sélectionner:
   - **Branch**: `main` (ou votre branche par défaut)
   - **Folder**: `/docs`
3. Cliquer sur **Save**

Le site sera disponible à l'adresse: `https://username.github.io/terrabloom-website`

---

## 4. Configurer les Domaines Personnalisés (OVH)

### Étape 1: Ajouter le domaine dans GitHub

1. Dans **Settings** → **Pages**
2. Sous "Custom domain", entrer: `playterrabloom.com`
3. Cocher "Enforce HTTPS"
4. Cliquer **Save**

GitHub créera automatiquement un fichier `CNAME` dans le dossier `/docs/`.

### Étape 2: Configurer DNS chez OVH

**Méthode 1: CNAME (RECOMMANDÉ pour les sous-domaines)**

Si vous utilisez un sous-domaine (ex: `www.playterrabloom.com`):

```
Domaine: playterrabloom.com
Type: CNAME
Cible: username.github.io
TTL: 3600
```

**Méthode 2: A Records (Pour le domaine racine)**

Si vous utilisez le domaine racine (`playterrabloom.com`):

```
Domaine: playterrabloom.com
Type: A
IPv4: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
TTL: 3600
```

Ajouter ÉGALEMENT un CNAME pour `www`:

```
Domaine: www
Type: CNAME
Cible: username.github.io
TTL: 3600
```

**Accéder à OVH:**

1. Connectez-vous à votre compte OVH (ovh.com)
2. Aller à **Domaines** → votre domaine
3. Cliquer sur **Zone DNS**
4. Ajouter/modifier les enregistrements DNS

### Étape 3: Vérification DNS

Attendez 24-48 heures pour la propagation DNS, puis vérifier:

```bash
# Vérifier CNAME
nslookup www.playterrabloom.com

# Vérifier A records
nslookup playterrabloom.com
```

---

## 5. Test sur un Serveur Local

Avant de déployer sur GitHub Pages, testez le site localement pour vérifier le rendu et la fonctionnalité.

### Option 1: Utiliser le script PowerShell (Windows)

Un script helper `startLocalServer.ps1` est fourni pour lancer facilement un serveur local:

```powershell
# Lancer le serveur sur le port 8000 (recommandé)
pwsh -File ./_Helpers/startLocalServer.ps1 -Port 8000

# Ou sur le port 80 (nécessite admin)
pwsh -File ./_Helpers/startLocalServer.ps1 -Port 80

# Afficher l'aide
pwsh -File ./_Helpers/startLocalServer.ps1 -Help
```

Puis accédez au site:
- **Port 8000**: http://localhost:8000
- **Port 80**: http://localhost

Appuyez sur **Ctrl+C** pour arrêter le serveur.

### Option 2: Lancer directement avec Python

Depuis le dossier `/docs/`:

```bash
# Port 8000 (recommandé, pas besoin d'admin)
python -m http.server 8000 --bind 127.0.0.1

# Port 80 (nécessite admin/sudo)
python -m http.server 80 --bind 127.0.0.1
```

Accédez à http://localhost:8000 ou http://localhost (port 80)

### Option 3: Avec Python 2 (héritage)

```bash
# Python 2
python -m SimpleHTTPServer 8000
```

### Checklist de Test Local

- [ ] Naviguer vers http://localhost:8000 (ou votre port)
- [ ] Vérifier la page d'accueil (index.html) s'affiche correctement
- [ ] Tester les liens de navigation (Game, About, Contact, Privacy)
- [ ] Vérifier que tous les styles CSS s'appliquent
- [ ] Tester les formulaires (contact, newsletter)
- [ ] Vérifier les responsive design sur mobile (F12 → Device Toolbar)
- [ ] Vérifier que le favicon s'affiche
- [ ] Vérifier la console navigateur pour les erreurs (F12 → Console)

---

## 6. Configuration Formspree

Les formulaires de contact utilisent **Formspree.io** (gratuit, GDPR-compliant).

### Créer des formulaires Formspree

1. Aller à [https://formspree.io](https://formspree.io)
2. Se créer un compte gratuit
3. Créer **3 formulaires**:

   - **Contact Form** (formulaire de contact principal)
   - **Newsletter Signup** (inscription infolettre - index.html)
   - **Newsletter Signup 2** (inscription infolettre - contact.html)

4. Pour chaque formulaire, obtenir l'ID (ex: `f/abc123def456`)

### Remplacer les IDs dans les fichiers HTML

Chercher et remplacer les placeholders:

- Dans `contact.html`: `f/XXXXXXXXX` → votre ID de formulaire de contact
- Dans `contact.html`: `f/YYYYYYYYY` → votre ID d'infolettre
- Dans `index.html`: `f/xyzabc123` → votre ID d'infolettre (index)

---

## 6. Configuration du Favicon

Créer ou télécharger un fichier `favicon.png` et le placer dans `/docs/assets/`.

Pour générer automatiquement:

1. Aller à [https://favicon.io](https://favicon.io)
2. Upload un logo TerraBloom (carré, 512x512px minimum)
3. Télécharger les fichiers
4. Placer `favicon.png` dans `/docs/assets/`

---

## 7. Optionnel: Google Analytics

Pour ajouter le suivi des visiteurs:

1. Créer un compte Google Analytics
2. Ajouter un formulaire web
3. Récupérer le `MEASUREMENT_ID` (format: `G-XXXXXXXXXX`)
4. Ajouter ce code dans le `<head>` de tous les fichiers HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 8. Checklist de Déploiement

- [ ] Dépôt GitHub créé et configuré
- [ ] Fichiers HTML dans `/docs/`
- [ ] CSS et JavaScript dans `/docs/assets/`
- [ ] Favicon placé dans `/docs/assets/`
- [ ] GitHub Pages activé avec source `/docs`
- [ ] Domaine personnalisé configuré dans GitHub
- [ ] Enregistrements DNS configurés dans OVH
- [ ] DNS propagé (vérifier avec `nslookup`)
- [ ] Formspree IDs remplacés dans tous les formulaires
- [ ] HTTPS forcé activé dans GitHub Pages
- [ ] Site accessible via `playterrabloom.com` et `www.playterrabloom.com`

---

## 9. Maintenance et Mises à Jour

### Mettre à jour le site

```bash
# Faire les modifications locales
# Commiter et pusher vers GitHub
git add docs/
git commit -m "Update website content"
git push origin main

# GitHub Pages se rafraîchira automatiquement (2-5 minutes)
```

### Structure pour la synchronisation avec la vault

Pour synchroniser le contenu Obsidian vers le site:

Un script Python dans _Helpers/03_Maintenance/generateWebsite.py permet de convertir automatiquement les notes Markdown avec le tag "public" en fichier HTML.

---

## 10. Troubleshooting

### Le domaine ne pointe pas vers GitHub Pages

- Vérifier que l'enregistrement DNS est correct avec `nslookup`
- Attendre la propagation DNS (24-48h)
- Vérifier le fichier `CNAME` dans `/docs/` (créé automatiquement par GitHub)

### Les formulaires ne fonctionnent pas

- Vérifier que les IDs Formspree sont corrects
- Vérifier que le compte Formspree est activé
- Tester le formulaire directement sur Formspree

### Les styles CSS ne s'appliquent pas

- Vider le cache du navigateur (Ctrl+Shift+Delete)
- Vérifier que le chemin vers `assets/style.css` est correct
- Vérifier la console navigateur pour les erreurs (F12)

### HTTPS ne fonctionne pas

- Attendre que le certificat SSL soit généré (24-48h)
- Si le problème persiste, désactiver et réactiver HTTPS dans GitHub Pages

---

## 11. Liens Utiles

- **GitHub Pages**: https://docs.github.com/en/pages
- **Formspree**: https://formspree.io
- **OVH Zone DNS**: https://www.ovh.com/
- **SSL Checker**: https://www.sslshopper.com/ssl-checker.html
- **DNS Checker**: https://mxtoolbox.com/

---

## 12. Support

Pour des questions spécifiques:

- **GitHub Issues**: Créer une issue dans le dépôt
- **Formspree Support**: https://formspree.io/support
- **OVH Support**: https://www.ovh.com/support

---

**Dernière mise à jour**: 2 janvier 2026
**Version**: 1.0.0

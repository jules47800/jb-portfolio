# Configuration du Formulaire de Contact

## 📧 Option 1: Serveur SMTP de l'hébergeur (Recommandée)

Créez un fichier `.env.local` à la racine avec vos informations SMTP :

```bash
# Configuration SMTP de votre hébergeur
SMTP_HOST=mail.votre-domaine.com
SMTP_PORT=587
SMTP_USER=contact@votre-domaine.com
SMTP_PASS=votre_mot_de_passe_email
CONTACT_TO=votre.email@exemple.com
```

### Exemples par hébergeur :

#### OVH
```bash
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_USER=contact@votre-domaine.com
SMTP_PASS=votre_mot_de_passe
CONTACT_TO=votre.email@exemple.com
```

#### cPanel/Hostinger/Ionos
```bash
SMTP_HOST=mail.votre-domaine.com
SMTP_PORT=587
SMTP_USER=contact@votre-domaine.com
SMTP_PASS=votre_mot_de_passe
CONTACT_TO=votre.email@exemple.com
```

#### Gmail (pour test)
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre.email@gmail.com
SMTP_PASS=votre_mot_de_passe_app
CONTACT_TO=votre.email@gmail.com
```

## 📝 Option 2: Formspree (Fallback)

Si le SMTP ne fonctionne pas, ajoutez aussi :

```bash
FORMSPREE_ID=votre_form_id
```

## 🚀 Déploiement

### Variables d'environnement en production :

**Vercel :**
1. Dashboard → Settings → Environment Variables
2. Ajoutez chaque variable (SMTP_HOST, SMTP_PORT, etc.)

**Netlify :**
1. Site settings → Environment variables
2. Ajoutez chaque variable

**Autres hébergeurs :**
Consultez la documentation pour ajouter les variables d'environnement.

## 🔍 Test

1. Démarrez le serveur : `npm run dev`
2. Allez sur `/contact`
3. Remplissez et envoyez le formulaire
4. Vérifiez votre boîte email

## 🛠️ Dépannage

**Erreur SMTP :**
- Vérifiez les identifiants de votre hébergeur
- Testez le port 465 (SSL) si 587 ne fonctionne pas
- Vérifiez que l'email SMTP_USER existe

**Logs d'erreur :**
- Consultez la console du navigateur (F12)
- Consultez les logs du serveur Next.js

## 📋 Fonctionnalités incluses

✅ Validation des champs (nom, email, message)
✅ Protection contre le spam
✅ Messages de succès/erreur
✅ Design responsive
✅ Loading states
✅ Email HTML + texte
✅ Reply-to automatique
✅ Fallback vers Formspree

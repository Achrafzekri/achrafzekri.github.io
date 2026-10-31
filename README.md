# Achraf Zekri — Portfolio bilingue

Prototype du 31 octobre 2026. Aucun changement publié et aucun dépôt GitHub modifié.
HTML5, CSS3 et JavaScript natif ; aucun framework, serveur applicatif, package ou compilation.

## Essayer le site

1. Extraire toute l’archive ZIP (ne pas ouvrir le HTML à l’intérieur du ZIP).
2. Ouvrir `portfolio/index.html` dans Chrome, Edge, Firefox ou Safari.
3. Tester FR / EN, les fiches projets, le CV et les contacts.
4. Le français est la langue initiale ; la préférence est ensuite mémorisée dans `localStorage` sous `portfolio_language`. Si le stockage est bloqué, la traduction fonctionne quand même pendant la visite.

Le PDF reste le document original français, également dans la version anglaise. Aucun CV traduit n’a été inventé.

## Organisation

- `index.html` : structure et contenu français de secours, accessible sans JavaScript.
- `css/style.css` : couleurs, mise en page, responsive et focus clavier.
- `js/translations.js` : textes FR/EN, regroupés sous les mêmes clés.
- `js/main.js` : langue, menu mobile et intégration GA4.
- `assets/images/portrait.jpg` : portrait repris du portfolio actuel.
- `assets/icons/favicon.svg` : monogramme vectoriel AZ.
- `assets/cv/ACHRAF_ZEKRI_CV_CONTROLEUR_DE_GESTION.pdf` : CV existant, inchangé.
- `ACHRAF_ZEKRI_CV_CONTROLEUR_DE_GESTION.pdf` et `Photo_Profil.jpg` : copies conservant les anciennes URL.
- `go/C0012/index.html`, `go/C0013/index.html`, `404.html` : redirections originales inchangées.
- `.nojekyll` : publication statique sans Jekyll.
- `AUDIT.md` : analyse de départ, choix éditoriaux et vérifications.

Aucun fichier spécifique à ChatGPT Sites n’est nécessaire. Les fichiers de cette archive correspondent au prototype testé.

## Déployer après validation seulement

Le dépôt existant peut publier automatiquement un commit sur sa branche de publication. Préparer d’abord une branche séparée permet de relire les changements avant mise en ligne.

1. Sauvegarder le dépôt actuel (ZIP ou clone) et noter le dernier commit.
2. Créer une branche de préparation, par exemple `portfolio-refonte`.
3. Copier **le contenu** du dossier `portfolio/` à la racine du dépôt `achrafzekri.github.io`, pas le dossier parent lui-même. `index.html` doit être à la racine.
4. Conserver les autres fichiers du dépôt et toute nouvelle redirection ajoutée depuis cet export. Ne pas remplacer le dépôt en supprimant tous ses fichiers.
5. Examiner les différences ; faire les corrections souhaitées et valider le rendu local.
6. Après validation explicite, fusionner les fichiers vers la branche utilisée par GitHub Pages.
7. Dans les réglages Pages du dépôt, vérifier que la source correspond à cette branche et à la racine. Conserver la configuration de publication existante si elle fonctionne déjà.
8. Attendre le déploiement GitHub Pages, puis ouvrir `https://achrafzekri.github.io/` et actualiser sans cache.
9. Vérifier sur ordinateur et téléphone : FR/EN, CV (vue et téléchargement), LinkedIn, GitHub, adresse email, navigation et fiches projets.
10. Tester `/go/C0012/`, `/go/C0013/` et un code générique valide, puis contrôler la réception des événements dans GA4.

Retour arrière : rétablir le commit précédent via un nouveau commit de restauration.

Les ressources utilisent des chemins relatifs et peuvent être affichées dans un sous-dossier. Les redirections historiques, elles, ciblent volontairement le domaine de production à sa racine. Pour un nouveau domaine ou un dépôt de projet sous `/nom-depot/`, leur adaptation et celle de la condition GA4 sont nécessaires ; elles n’ont pas été modifiées sans accord.

## Tracking préservé

- Propriété : `G-H097RGQDFC`.
- Événements : `cv_view`, `cv_download`, `linkedin_click`.
- Paramètre LinkedIn : `linkedin_location` = `header`, `publications` ou `contact`.
- Le changement de langue ne réécrit pas l’URL : les UTM restent présents.
- Les appels GA4 réels ne partent que sur `achrafzekri.github.io` : aucune visite de test envoyée depuis le prototype ou `file://`.
- Le dossier `go/` et le mécanisme `404.html` sont identiques à l’existant. Un serveur local peut ne pas simuler le fallback 404 de GitHub Pages.
- Le téléchargement est mesuré au clic, comme sur le site original ; cela ne prouve pas que le visiteur a enregistré le fichier.
- La réception réelle dans GA4 n’a pas été testée : cela exige une mise en ligne et un contrôle dans la propriété Analytics.

## Modifier le contenu

Modifier les deux langues dans `js/translations.js`. Pour maintenir le contenu français visible sans JavaScript et le SEO initial, reporter également les modifications françaises dans les éléments `data-i18n` correspondants de `index.html`. Conserver les clés et les attributs `data-event`.

Les projets sont des périmètres prévus, non des cas terminés. Remplacer leurs statuts, sources, résultats et recommandations uniquement après validation de leurs livrables réels.

Les polices sont les polices système : aucun chargement de Google Fonts, aucune bibliothèque externe. Le seul service externe chargé en production est le suivi GA4 déjà présent.

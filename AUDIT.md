# Analyse et vérifications — 31 octobre 2026

## Sources examinées

- Page publique https://achrafzekri.github.io/ : code et rendu dans Chrome.
- Arbre public du dépôt `achrafzekri/achrafzekri.github.io`, branche main, commit `94b9a2499daa8906d4675fae23a11b115790f5fc`.
- CV PDF, portrait, `404.html` et deux redirections explicites du site public.

## Diagnostic

Le site existant était léger, lisible et disposait déjà d’un lien d’évitement, de sections métier, d’un portrait et des événements GA4. Il restait uniquement français avec un intitulé de poste anglais, n’avait pas de section compétences structurée ni de sélecteur de langue, et présentait les trois projets sous forme de descriptions courtes « à venir ».

La refonte renforce la hiérarchie visuelle et les appels à l’action, expose les expériences du CV, sépare les compétences par usage et propose des fiches dépliables. Le bleu marine, le blanc et le turquoise structurent la page sans graphiques fictifs ni animations décoratives.

## Choix de contenu

Parcours appuyé sur le CV actuellement publié : MATRANORD 2021–2026, SJL 2019–2021, GARTI 2018–2019 ; DCESS ENCG 2020–2022. Les dates du PDF ont priorité sur tout souvenir de conversation. Aucune statistique de performance ajoutée. Power Pivot fait partie des compétences explicitement demandées dans le brief.

Trois catégories demandées : Industrie, Logistique, Services. Le sujet Budget & reporting de l’ancien troisième projet est conservé sous Services. Les sources, méthodes et KPI des fiches sont identifiés comme un périmètre prévu ; aucun résultat ni recommandation non démontré n’est présenté comme une réalisation.

## Préservation

GA4 G-H097RGQDFC, événements et paramètre LinkedIn conservés. Redirections C0012/C0013 et fallback 404 copiés sans modification. Anciennes URL du CV et du portrait conservées en plus de leur organisation dans assets/. Ancres historiques #main, #profil, #projets, #publications, #cv, #contact conservées.

## Vérifications effectuées

- Syntaxe des deux fichiers JavaScript : valide avec `node --check`.
- 103 liaisons de traduction : clés présentes dans les deux langues.
- Toutes les ancres et ressources locales de index.html : cibles présentes.
- CV : PDF valide, texte extrait ; copie à l’ancienne URL identique octet par octet.
- Chrome : rendu ordinateur inspecté, bascule anglais/français vérifiée et anglais conservé après rechargement.
- Fiche Logistique : ouverture et contenu anglais vérifiés.
- Responsive : page testée dans un cadre navigateur de 390 px (375 px de contenu hors barre de défilement), sans débordement horizontal.
- Mobile : sélection du français, ouverture du menu, navigation vers CV et fermeture automatique vérifiées ; UTM conservés dans l’URL.
- Contrôles natifs, lien d’évitement, focus visibles et préférence de mouvement réduit présents dans le code. Pas d’audit exhaustif avec lecteur d’écran.

## Limites restantes

La capture du téléchargement par l’outil du navigateur a expiré ; le fichier PDF livré et la cible locale sont valides, mais l’enregistrement depuis le bouton n’a pas été confirmé de bout en bout dans ce navigateur distant. Vérifier ce geste après extraction sur votre ordinateur puis après déploiement.

Les contacts LinkedIn et email reprennent les cibles du site existant ; aucun message n’a été envoyé. L’accès final aux services tiers n’a pas été testé avec connexion. Les redirections et la réception des événements GA4 doivent être validées sur GitHub Pages après autorisation de publication. Aucun test Safari/iOS ou Android réel, ni mesure Lighthouse, n’a été réalisé.

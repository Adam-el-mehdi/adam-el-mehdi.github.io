# Adam El Mehdi — Engineering portfolio

Portfolio français / anglais : https://adam-el-mehdi.github.io/.
Adaptation du thème Story (AJ / HTML5 UP, https://html5up.net/story). La licence CC BY 3.0 est conservée dans LICENSE-STORY.txt et l’attribution en pied de page. Site statique HTML, CSS et JavaScript, sans compilation ou suivi statistique.

## Les six rubriques

Les six onglets gardent exactement leurs intitulés et leur ordre, dans les deux langues :

1. WELCOME (`#welcome`)
2. Engineering Courses (`#courses`)
3. International Mobility (`#mobility`)
4. Sustainability and Civic Engagement (`#sustainability`)
5. Sport and Other Activities (`#sport`)
6. Career Development (`#career`)

Engineering Courses comporte six thèmes : fluides, thermodynamique / énergie, solides / élasticité, mathématiques appliquées, méthodes numériques, programmation / calcul scientifique. Chaque fiche présente un aperçu, les concepts et un volet « Travaux et ressources » pour les applications, documents, figures et liens de code. Les travaux manquants sont indiqués sans faux lien.

Career Development présente le profil, une chronologie, les intérêts professionnels, les compétences reliées aux expériences, les rencontres, les CV et les coordonnées autorisées.

## Organisation

- `index.html` : les six rubriques, le portrait réservé et le pitch vidéo.
- `projects/tipe.html` : démarche, graphique de résultats, photo de la fente et présentation PDF.
- `projects/imsa.html` : véritables captures d’interface, contribution collective et exemple distinct sur données fictives.
- `assets/css/story.css` : base Story issue du miroir zce/html5up.
- `assets/css/portfolio-story.css` : composition, palette et typographie.
- `assets/css/theme-media.css` : thèmes et médias personnels.
- `assets/css/content-revision.css` : navigation complète, formation, parcours et mobilité.
- `assets/js/story-portfolio.js` : langue, thème, menu et agrandissement des images.
- `assets/js/profile-media.js` : configuration du portrait et du pitch.
- `assets/images/` : visuels ; `docs/` : CV et TIPE sans identifiant de concours.

Les anciens scripts de génération ne reflètent pas les dernières modifications : ne pas les relancer sans les mettre à jour.

## Modifier du texte

Ouvrir le HTML concerné. Modifier les deux attributs et le texte visible :

```html
<p data-fr="Texte français" data-en="English text">Texte français</p>
```

Conserver les identifiants des six rubriques. La langue est mémorisée localement ; `?lang=en` ouvre l’anglais.

## Ajouter un cours, projet, rapport ou activité

Dupliquer un bloc `.course-record` pour un thème, `.project-panel` pour un projet, ou un article de `.activity-grid` pour une activité. Donner un identifiant unique, respecter les niveaux de titres et traduire les textes.

Pour compléter un thème, remplacer le texte « à ajouter » dans son `details` par le travail réel, puis ajouter les liens vers rapport, figure et code. Les commentaires HTML indiquent la zone de ressources. Ne pas créer de lien tant que la ressource n’existe pas.

Pour une mobilité ou un engagement, préciser la période, le contexte, le rôle, les travaux et un retour personnel. Un projet de départ reste un objectif tant qu’il n’est pas confirmé.

## Images et PDF

Placer l’image dans `assets/images/` ou le PDF dans `docs/`, avec un nom simple sans espaces. Utiliser des chemins relatifs :

```html
<img src="assets/images/projet.jpg" width="1200" height="800" alt="Description du visuel" loading="lazy">
<a href="docs/rapport.pdf" target="_blank" rel="noopener noreferrer">Lire le rapport · PDF</a>
```

Depuis `projects/`, ajouter `../` au début du chemin. Pour l’agrandissement, reprendre un bouton `.media-zoom` et renseigner également `data-image`.

## Portrait et pitch

La grande zone de l’accueil reste vide, sans photo de remplacement. Le pitch garde un emplacement dans l’introduction. Déposer les vrais médias puis modifier `assets/js/profile-media.js` :

```javascript
window.AdamPortfolioMedia = {
  photo: 'assets/images/portrait.jpg',
  video: 'assets/media/pitch.mp4',
  poster: '',
  captions: ''
};
```

La vidéo doit être un fichier directement lisible (MP4, par exemple). Une page YouTube exige une intégration différente. `poster` et `captions` sont facultatifs ; les sous-titres sont au format WebVTT. Conserver une chaîne vide pour un média absent. Aucun lancement automatique.

## CV, couleurs et thèmes

Remplacer `docs/cv-adam-el-mehdi-fr.pdf` et `docs/cv-adam-el-mehdi-en.pdf` en conservant leurs noms. L’accueil propose le CV de la langue choisie ; les deux restent disponibles dans Career Development.

Les variables de couleurs se trouvent au début de `portfolio-story.css` : `--wine`, `--ink`, `--paper`, `--pale`, `--muted`, `--line`. Les valeurs sombres sont dans `theme-media.css`, sous `[data-theme=dark]`. La première visite suit le thème système, puis le choix manuel est mémorisé sur les trois pages. Les photos et captures ne sont pas inversées.

## Origine des visuels

- TIPE : le graphique principal est la page 29 de la présentation fournie. Valeurs et incertitudes : pages 29 à 31. Les anciennes photos de montage ne servent plus de couverture. La photo de la fente provient du même document.
- `imsa-supervision.jpg` : copie inchangée de la capture de supervision fournie par Adam (interface version 3.0.0), vue agrégée sans document de patient affiché.
- `imsa-rules.png` : copie inchangée de `docs/screenshots/regles.png` du projet (version 2.0.0). Ces deux vues correspondent à des versions différentes.
- Le cas OCR fictif et son ancienne capture restent en support repliable : document et valeurs inventés pour cet exemple R12 (100 € contre 105 €), gabarit fixé, sans valeur de benchmark.

Les captures de documents contenant des identifiants de patients ne sont pas intégrées à cette version publique. Les chiffres d’interface décrivent le corpus présenté ; ils ne sont pas une performance industrielle ou une réussite individuelle.

## Allemagne : sources et portée

Trois pistes d’échange documentées, consultées le 28 octobre 2026 :

- TU Hamburg : liste Erasmus 2026–2027, ENSEEIHT en mécanique (M) : https://www.tuhh.de/t3resources/tuhh/download/international/Studium_im_Ausland_Marina/Erasmus-Vertraege_Liste_fuer_Studierende_Lauf_26_27.pdf
- KIT Karlsruhe : faculté de mécanique, INPT / ENSEEIHT, niveau master et domaine 0715 : https://www.mach.kit.edu/4837.php
- TU Berlin : brochure Erasmus 2025–2026 de la faculté V, INPT / ENSEEIHT, notamment domaine 0715 : https://www.static.tu.berlin/fileadmin/www/10004219/INT_SB/Dokumente/Outgoings/Erasmus/Erasmus_A5_Broschueren/Fak_V___ISCED-Code_25-26.pdf

Ces listes décrivent le côté allemand des accords et ne prouvent pas les quotas sortants MF2E pour une future année. Places, modules, langues et Learning Agreement restent à valider avec les RI et le département. Aucun double diplôme ou admission n’est affirmé.

Enseignements / langues :

- TUHH : https://www.tuhh.de/tuhh/en/studying/before-studying/degree-courses/masters-programs/aeronautics
- KIT : https://www.mach.kit.edu/english/2381.php
- TU Berlin : https://www.tu.berlin/en/fd/study-teaching
- ENSEEIHT : https://www.enseeiht.fr/fr/international/mobilite-sortante.html

## Publier

GitHub Pages publie `main` depuis la racine. Modifier les fichiers sur GitHub puis créer un commit. Vérifier dans Actions que « pages build and deployment » termine avec succès, puis ouvrir le site et actualiser.

Avant publication : vérifier le menu, FR / EN, les deux thèmes, les PDF, les images et le mobile. Les chemins relatifs permettent aussi un hébergement sous un préfixe de dépôt. `_qa-mobile.html` est réservé aux tests locaux et ne doit pas être publié.

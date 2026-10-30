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

Les variables de couleurs se trouvent au début de `portfolio-story.css` : `--wine`, `--ink`, `--paper`, `--pale`, `--muted`, `--line`. Les valeurs sombres sont dans `theme-media.css`, sous `[data-theme=dark]`. La première visite suit le thème système, puis le choix manuel est mémorisé sur les quatre pages. Les photos et captures ne sont pas inversées.

## Origine des visuels

- TIPE : le graphique principal est la page 29 de la présentation fournie. Valeurs et incertitudes : pages 29 à 31. Les anciennes photos de montage ne servent plus de couverture. La photo de la fente provient du même document.
- `imsa-supervision.jpg` : copie inchangée de la capture de supervision fournie par Adam (interface version 3.0.0), vue agrégée sans document de patient affiché.
- `imsa-rules.png` : copie inchangée de `docs/screenshots/regles.png` du projet (version 2.0.0). Ces deux vues correspondent à des versions différentes.
- Le cas OCR fictif et son ancienne capture restent en support repliable : document et valeurs inventés pour cet exemple R12 (100 € contre 105 €), gabarit fixé, sans valeur de benchmark.

Les captures de documents contenant des identifiants de patients ne sont pas intégrées à cette version publique. Les chiffres d’interface décrivent le corpus présenté ; ils ne sont pas une performance industrielle ou une réussite individuelle.

## Allemagne : destinations souhaitées

Choix de mobilité d’Adam, mis à jour le 29 octobre 2026 :

- Technische Universität Clausthal
- Technische Universität Hamburg-Harburg
- Technische Universität Berlin

Ces universités sont présentées comme des destinations souhaitées. À la demande d’Adam, les mentions et les liens relatifs à la vérification des accords ont été retirés. Les liens pédagogiques et les informations linguistiques restent accessibles dans les cartes.

## Publier

GitHub Pages publie `main` depuis la racine. Modifier les fichiers sur GitHub puis créer un commit. Vérifier dans Actions que « pages build and deployment » termine avec succès, puis ouvrir le site et actualiser.

Avant publication : vérifier le menu, FR / EN, les deux thèmes, les PDF, les images et le mobile. Les chemins relatifs permettent aussi un hébergement sous un préfixe de dépôt. `_qa-mobile.html` est réservé aux tests locaux et ne doit pas être publié.

## Révision : preuves et lecture plus directe

Les projets documentés sont présentés avant les six thèmes de cours. Les coordonnées, la chronologie et les langues sont regroupées pour limiter les répétitions. Les informations pédagogiques et linguistiques des trois destinations allemandes restent disponibles dans des volets dépliables. La zone portrait reste vide ; le pitch dispose d’un emplacement plus compact.

Une quatrième page, `courses/poiseuille.html`, décrit la méthode du TP confirmé : débit, différence de charge, Reynolds et conditions de validité du modèle. C’est une fiche de méthode ; les mesures et le rapport n’ont pas été fournis et ne sont pas inventés.

### Visuel IMSA principal

`assets/images/imsa-detections-public.png` est une version anonymisée de la capture de détail de dossier fournie par Adam, avec les détections vertes et rouges. Le contenu du document et l’en-tête du dossier ont été masqués par retouche de confidentialité à partir de cette capture. Cette image remplace la supervision en couverture. La capture originale contenant des identifiants n’est pas ajoutée au dépôt. Les vues de supervision et des règles restent consultables comme compléments.

### Données et code du TIPE

- `assets/code/tipe_analyse.py` : code des annexes A6–A8, pages 42–44 du PDF. Les séries de 20 et 30 vitesses sont conservées. Seuls les chemins de sortie et le nom du paramètre Matplotlib `labels` devenu `tick_labels` ont été adaptés (Matplotlib >= 3.9).
- `assets/code/tipe_acquisition.ino` : code Arduino des annexes A9–A10, pages 45–46. Il est fourni comme source du montage décrit, sans prétendre à une nouvelle validation matérielle.
- `assets/images/tipe-coefficients.png` : figure remise en forme avec Matplotlib à partir des coefficients arrondis et des incertitudes-types rapportées pages 29–31. Les valeurs tracées sont 0,229 ± 0,007 et 0,183 ± 0,005 kg/s. Les barres d’erreur ne représentent pas un intervalle de confiance à 95 %.

Le script Python exécuté reproduit les coefficients arrondis de la présentation et un rapport d’environ 0,80. Le graphique principal n’est affiché qu’une fois sur la page détaillée ; les choix expérimentaux et les limites renvoient directement aux pages correspondantes du PDF.

Les anecdotes de délégué, les retours personnels détaillés sur les ateliers RSE et une fonctionnalité IMSA précise restent à compléter avec les informations d’Adam. Des commentaires HTML réservent leur emplacement. Les formulations publiques restent limitées aux éléments déjà établis.


## Career Project — alignement CAM, 30 octobre 2026

- Les six rubriques et le thème Story sont conservés. Le bloc Career Project regroupe les CV FR/EN, LinkedIn et les accès au pitch, aux rôles modèles et aux mobilités.
- Le pitch conserve son emplacement dans l’introduction et est annoncé en anglais, pour 2–3 minutes. Aucune vidéo ni photo n’a été fournie ; les emplacements restent disponibles. Les sous-titres peuvent être configurés avec `captionLanguage` et `captionLabel`.
- Les deux rencontres confirmées avec Pascal (Airbus) et Gerrard (ONERA) sont présentées séparément, avec les enseignements personnels fournis par Adam.
- La troisième fiche est consacrée au profil de Laurent en certification des avions Airbus. Son activité est analysée sans lui attribuer d’entretien ni de propos inventés.
- Chaque destination allemande est reliée à un objectif personnel (énergie, essais aéronautiques, simulation/aérodynamique). Aucune vérification d’accord n’est ajoutée.
- Les réalisations s’appuient sur le TIPE et la contribution collective IMSA, sans prix ni résultat inventé. Les questions de réflexion RSE sont prospectives : compléter avec les retours personnels d’Adam.
- Encore nécessaires : anecdotes et actions d’engagement, photo du site et du CV, enregistrement du pitch. Les CV PDF et le profil LinkedIn ne sont pas modifiés dans cette passe.

## Alignement personnel et pitch — 30 octobre 2026

La présentation FR/EN reflète désormais les réponses personnelles d’Adam : résolution de problèmes, analyse et vérification, aide aux camarades, adaptation de Rabat à Toulouse, fascination pour les avions depuis l’enfance, philosophie et musculation. Les autres activités et les six rubriques sont conservées.

Les profils sont maintenant Pascal (Airbus : leadership et environnement de travail), Gerrard (ONERA : adaptabilité, confiance et idée des 2 000 lundis) et Laurent (certification Airbus : qualités de vol, performances, simulations et essais). Pascal et Gerrard sont présentés comme des échanges ; Laurent comme un profil professionnel, sans citation ni entretien inventé. Le profil en attente dans l’énergie a été remplacé.

Le script anglais est consultable dans `docs/pitch-adam-el-mehdi-en.txt`, depuis la zone pitch. La vidéo et le portrait attendent toujours les fichiers d’Adam. La conclusion du script est alignée sur la simulation et les essais en aéronautique ou dans l’énergie. Les PDF de CV ne sont pas modifiés.

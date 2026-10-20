# Adam El Mehdi — Engineering portfolio

Première version du portfolio d’Adam El Mehdi, élève ingénieur MF2E à l’ENSEEIHT.
Site statique bilingue français/anglais, publié avec GitHub Pages.

**Site : https://adam-el-mehdi.github.io/**

## Navigation

Les six rubriques principales sont conservées :

1. WELCOME
2. Engineering Courses
3. International Mobility
4. Sustainability and Civic Engagement
5. Sport and Other Activities
6. Career Development

Deux pages présentent les projets en détail :

- `projects/tipe.html` : expérience individuelle de freinage magnétique.
- `projects/imsa.html` : prototype IMSA Sentinel du hackathon IA Impact.

## Modifier le contenu

Le site fonctionne sans installation ni compilation. Les trois pages HTML
contiennent le texte français visible et les traductions dans les attributs
`data-fr` / `data-en`. Les images utilisent `data-alt-fr` / `data-alt-en`.
Le changement de langue conserve le choix dans le navigateur et accepte
également `?lang=en` dans l’URL. Sans JavaScript, le contenu reste lisible en français.

- `assets/css/hyperspace.css` : base du thème.
- `assets/css/portfolio.css` : palette, mise en page et adaptation mobile.
- `assets/js/portfolio.js` : langue, menu mobile, navigation et agrandissement des captures.
- `assets/images/` : illustrations de principe du TIPE et du fonctionnement d’IMSA Sentinel.

Les liens et ressources sont relatifs afin de permettre une consultation locale.
GitHub Pages publie la branche `main` depuis la racine. Aucun formulaire ni suivi
statistique n’est ajouté.

## Périmètre de cette version

Les objectifs de mobilité et le mandat de délégué sont présentés selon leur
état actuel. Le compte rendu du TP de Poiseuille reste à venir. Aucun stage,
responsabilité associative supérieure ou action bénévole non réalisée n’est déclaré.
Le CV et le PDF intégral du TIPE ne sont pas publiés dans cette première version.

Les illustrations vectorielles sont des schémas de principe et ne présentent
ni mesures brutes ni dossiers individuels. Les captures de l’archive IMSA ne
sont pas publiées dans cette version. Elles restent à examiner avant une
publication publique.

## Thème et licence

Adaptation de **Hyperspace**, par AJ / HTML5 UP : https://html5up.net/hyperspace
Licence Creative Commons Attribution 3.0 conservée dans `LICENSE-HYPERSPACE.txt`.
La base CSS a été reprise du miroir `zce/html5up` ; seul l’import de la police
d’icônes, inutilisée, a été retiré. La personnalisation et les interactions
de cette version sont fournies dans les fichiers distincts ci-dessus.

Le pied de page conserve l’attribution du thème. Les contenus personnels,
captures et documents sources restent soumis à leurs droits respectifs.

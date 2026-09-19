import type { HowToGuideData } from './types';

export const frHowToGuide: HowToGuideData = {
  locale: 'fr',
  title: 'Comment utiliser le comparateur de taille',
  subtitle: 'Un guide complet pas à pas pour comparer des personnes, des célébrités, des personnages d’anime, des animaux et des objets avec une précision mathématique visuelle.',
  badge: 'Guide Utilisateur',
  metaDescription: 'Découvrez comment utiliser le comparateur de taille HowHeight pour comparer des personnes, animaux, objets et personnages, mesurer les écarts et partager vos résultats.',
  readTime: '8 min de lecture',
  tocTitle: 'Sommaire',
  intro: {
    lead: 'HowHeight est une plateforme de mesure visuelle interactive conçue pour aider chacun à comprendre intuitivement l’échelle physique réelle de toute chose.',
    paragraphs: [
      'Que vous soyez curieux de connaître votre taille par rapport à votre acteur favori, en train d’analyser des fiches de mensuration pour un projet d’animation, d’enseigner les proportions biologiques en classe ou d’écrire un roman, les chiffres seuls peinent souvent à transmettre une véritable présence physique. Savoir qu’une personne mesure 188 cm (6 pi 2 po) reste abstrait ; placer cette silhouette à côté d’un chambranle de porte, d’un partenaire ou d’un animal domestique donne instantanément vie à la mesure.',
      'Notre comparateur universel fait le pont entre données brutes et perception visuelle humaine. En alignant chaque silhouette sur une ligne de sol commune à 0 cm et en appliquant un facteur d’échelle géométrique rigoureux, HowHeight élimine les distorsions de perspective. Ce guide passe en revue toutes les fonctionnalités de la plateforme, de la recherche et de la manipulation sur scène aux réglages d’échelle et à l’export d’images en haute résolution.',
    ],
  },
  sections: [
    {
      id: 'what-is-howheight',
      heading: '1. Qu’est-ce qu’un comparateur de taille visuel ?',
      paragraphs: [
        'Un comparateur de taille est un outil visuel interactif permettant de juxtaposer deux ou plusieurs entités selon une échelle rigoureusement identique. Plutôt que d’imaginer ce que représente un écart de 15 centimètres ou de 6 pouces dans la réalité, l’outil affiche des silhouettes aux proportions anatomiques exactes.',
        'Sur HowHeight, le moteur prend en charge de nombreuses catégories vérifiées : hommes et femmes, célébrités mondiales, héros d’anime et de manga, personnages de cinéma, faune sauvage et domestique, mobilier, véhicules et architectures, végétaux et créatures légendaires.',
      ],
      callout: {
        type: 'info',
        text: 'La comparaison visuelle ne relève pas de l’approximation : elle traduit des données certifiées en un rendu visuel authentique sans effet d’optique trompeur.',
      },
    },
    {
      id: 'how-to-start',
      heading: '2. Comment lancer une comparaison en 7 étapes',
      paragraphs: [
        'L’utilisation de HowHeight ne nécessite aucune inscription, aucun téléchargement et aucune configuration complexe.',
      ],
      steps: [
        {
          number: 1,
          title: 'Accédez à la plateforme',
          description: 'Rendez-vous sur HowHeight.org ou accédez directement à la page /compare/ sur votre navigateur.',
        },
        {
          number: 2,
          title: 'Repérez l’espace de travail',
          description: 'Le sélecteur de silhouettes se situe à gauche et la grande scène de comparaison avec sa règle verticale à droite.',
        },
        {
          number: 3,
          title: 'Recherchez votre première silhouette',
          description: 'Utilisez la barre de recherche ou les onglets thématiques pour choisir une silhouette humaine, une star ou un animal.',
        },
        {
          number: 4,
          title: 'Ajoutez à la scène',
          description: 'Cliquez sur la fiche ou le bouton "+ Add". La silhouette apparaît instantanément sur la ligne de sol de 0 cm.',
        },
        {
          number: 5,
          title: 'Choisissez un second élément',
          description: 'Recherchez un autre personnage ou un objet de référence comme un panier de basket ou une voiture.',
        },
        {
          number: 6,
          title: 'Observez la mise à l’échelle',
          description: 'La règle ajuste automatiquement son échelle maximale pour afficher les silhouettes avec une proportion parfaite.',
        },
        {
          number: 7,
          title: 'Ajustez ou partagez',
          description: 'Déplacez les figures, basculez entre cm et pieds/pouces, consultez l’écart chiffré ou copiez le lien de partage.',
        },
      ],
    },
    {
      id: 'searching-entities',
      heading: '3. Explorer le catalogue universel d’entités',
      paragraphs: [
        'HowHeight dispose d’un catalogue riche de milliers de profils vérifiés. La recherche instantanée vous permet de trouver n’importe quelle entité en quelques frappes.',
        'Vous pouvez filtrer par catégorie (Célébrités, Anime, Animaux, Objets, etc.) ou saisir directement un nom, un métier ou un pseudonyme populaire.',
        'Si une figure spécifique n’est pas encore référencée, notre formulaire d’ajout personnalisé vous permet de créer n’importe quelle silhouette en saisissant son nom, sa hauteur en cm ou pieds/pouces, son genre et sa couleur.',
      ],
      link: {
        text: 'Consulter le répertoire des célébrités →',
        href: '/celebrity-height-comparison/',
      },
    },
    {
      id: 'adding-multiple-entities',
      heading: '4. Comparer plusieurs silhouettes en même temps',
      paragraphs: [
        'Les comparaisons réelles dépassent souvent le simple face-à-face : visualiser une famille entière, un groupe d’aventuriers ou l’échelle comparative entre un humain, un chien, un cheval et un éléphant.',
        'HowHeight vous permet de juxtaposer de 2 à plus de 20 silhouettes simultanément. Sur grand écran, l’espace est réparti harmonieusement ; sur smartphone, un défilement horizontal fluide permet de naviguer sans rétrécir les figures.',
      ],
      callout: {
        type: 'tip',
        text: 'Pour les alignements nombreux, conservez une silhouette de référence courante (comme l’Homme Moyen de 175 cm ou une Porte de 210 cm) pour ancrer la perception visuelle.',
      },
    },
    {
      id: 'dragging-arranging',
      heading: '5. Déplacer les silhouettes : Glisser-déposer sur scène',
      paragraphs: [
        'Par défaut, les figures s’alignent dans l’ordre d’ajout. Cependant, la mise en scène requiert souvent un agencement personnalisé.',
        'Sur HowHeight, vous pouvez cliquer et faire glisser n’importe quelle silhouette (ou la déplacer du doigt sur mobile) le long du sol à 0 cm. Rapprochez deux rivaux épaule contre épaule ou placez un animal au pied de son maître.',
        'Vous pouvez également trier la scène instantanément par taille croissante ou décroissante grâce aux boutons de la barre d’outils.',
      ],
    },
    {
      id: 'resizing-scale',
      heading: '6. Modification de taille vs facteur de zoom d’affichage',
      paragraphs: [
        'Il est primordial de distinguer la taille physique réelle d’une silhouette du niveau de zoom global de la scène.',
        'En sélectionnant un modèle sur la scène, le panneau d’inspection s’ouvre. Vous pouvez y modifier sa taille réelle en centimètres ou pieds/pouces. Si vous passez une figure de 175 à 190 cm, elle grandit vers le haut depuis le sol.',
        'À l’inverse, les boutons de Zoom (+ / -) agrandissent ou réduisent l’ensemble du graphique de façon homogène, sans modifier les valeurs chiffrées réelles ni fausser les proportions relatives.',
      ],
      callout: {
        type: 'note',
        text: 'Les modèles grandissent toujours verticalement à partir du sol. Les pieds restent scrupuleusement fixés à la ligne de 0 cm.',
      },
    },
    {
      id: 'height-units',
      heading: '7. Unités de mesure : Métrique (cm) et Impérial (pieds et pouces)',
      paragraphs: [
        'Les mesures mondiales se partagent entre le système métrique (mètres et centimètres) et le système impérial (pieds et pouces). HowHeight assure une conversion bidirectionnelle instantanée.',
        'Vous pouvez basculer entre « cm » et « ft » au sommet de la règle. En mode impérial, des repères majeurs apparaissent tous les 12 pouces (1 pied) et secondaires tous les 6 pouces. En mode métrique, les paliers sont de 20 ou 50 cm.',
        'Le calcul applique le standard international strict : 1 pouce = 2,54 cm, et 1 pied = 30,48 cm.',
      ],
      link: {
        text: 'Utiliser le calculateur de différence de taille →',
        href: '/height-difference-calculator/',
      },
    },
    {
      id: 'understanding-visual-result',
      heading: '8. Comment lire le graphique et la règle de mesure',
      paragraphs: [
        'La scène HowHeight est dotée d’indicateurs clairs pour une lecture immédiate :',
        '1. La ligne de sol zéro (0 cm / 0 pi) : Ligne continue en bas de scène représentant le sol.',
        '2. La règle verticale : Située à gauche, elle calcule la hauteur maximale nécessaire pour englober la plus grande silhouette avec une marge agréable.',
        '3. Les étiquettes descriptives : Chaque figure affiche son nom, sa catégorie et sa taille exacte dans l’unité choisie.',
        '4. Silhouettes contrastées : Couleurs personnalisables et transparences douces pour garantir la lisibilité des contours même lors des chevauchements.',
      ],
    },
    {
      id: 'height-difference',
      heading: '9. Analyser l’écart de taille et les statistiques',
      paragraphs: [
        'Lorsque exactement deux silhouettes sont présentes sur scène, HowHeight affiche automatiquement un encadré d’analyse de différence.',
        'Par exemple, en comparant un homme de 180 cm et une femme de 165 cm, l’outil précise : « La Personne A est 15 cm (5,9 pouces) plus grande que la Personne B ». Les écarts métriques et impériaux sont arrondis au dixième.',
        'À partir de trois entités, un tableau récapitulatif synthétise la plus grande taille, la plus petite, la moyenne du groupe et les écarts relatifs.',
      ],
    },
    {
      id: 'comparing-people',
      heading: '10. Comparer des personnes, couples et figures historiques',
      paragraphs: [
        'Visualiser la différence de taille entre partenaires pour des photos de mariage ou comparer son propre gabarit avec celui d’athlètes de haut niveau compte parmi les usages les plus fréquents.',
        'Nos modèles humains respectent les morphologies masculine et féminine (largeur d’épaules, proportions du torse et posture) tout en conservant une échelle rigoureuse. Vous pouvez également vous confronter à des personnalités historiques et sportives.',
      ],
      link: {
        text: 'Consulter les percentiles de taille humaine →',
        href: '/people-height-comparison/',
      },
    },
    {
      id: 'comparing-animals',
      heading: '11. Le règne animal : Du chat domestique aux géants sauvages',
      paragraphs: [
        'Les illustrations d’encyclopédies ne sont presque jamais à l’échelle : un félin peut paraître aussi imposant qu’un rhinocéros sur une même page.',
        'HowHeight rétablit la réalité en plaçant les animaux sur la même ligne que l’humain. Observez la stature d’un chat (25 cm) face à un grand chien (60 cm), ou mesurez-vous à un cheval (160 cm) et à un éléphant d’Afrique (330 cm).',
      ],
      link: {
        text: 'Voir les comparaisons d’animaux →',
        href: '/animal-height-comparison/',
      },
    },
    {
      id: 'comparing-objects',
      heading: '12. Objets du quotidien, architecture et véhicules',
      paragraphs: [
        'Les dimensions prennent tout leur sens lorsqu’elles sont confrontées à nos repères usuels. Une statue de 2,4 mètres devient concrète dès qu’on la place à côté d’un chambranle de porte classique (210 cm).',
        'Notre catégorie d’objets réunit mobilier, berlines, bus, vélos et paniers de basket réglementaires (305 cm), facilitant les évaluations d’encombrement pour les créateurs et les acheteurs.',
      ],
      link: {
        text: 'Comparer les objets du quotidien →',
        href: '/object-height-comparison/',
      },
    },
    {
      id: 'anime-fictional-characters',
      heading: '13. Personnages d’anime et héros de fiction',
      paragraphs: [
        'Les fiches canoniques des mangas et comics alimentent de passionnants débats. Dans les cases dessinées, les perspectives rendent la comparaison difficile.',
        'Sur HowHeight, alignez côte à côte des héros emblématiques comme Goku, Naruto ou Levi Ackerman, ou confrontez des méchas et créatures colossales à des civils ordinaires.',
      ],
      link: {
        text: 'Comparer les personnages d’anime →',
        href: '/anime-height-comparison/',
      },
    },
    {
      id: 'using-the-result',
      heading: '14. Exploiter votre comparaison terminée',
      paragraphs: [
        'Une fois votre agencement parfait, plusieurs outils sont à votre disposition :',
        '• Télécharger en PNG : Cliquez sur « Download Chart » pour exporter un fichier PNG net et en haute résolution, prêt pour vos présentations ou vos partages.',
        '• Consulter les synthèses : Vérifiez les pourcentages et moyennes dans le panneau sous le graphique.',
        '• Réglages d’affichage : Activez le mode sombre pour une consultation nocturne reposante ou les lignes de grille pour un alignement au millimètre.',
      ],
    },
    {
      id: 'sharing-comparisons',
      heading: '15. Partage instantané par lien sans inscription',
      paragraphs: [
        'Le partage doit rester simple et immédiat, sans forcer la création de compte ni l’identification sur un réseau social.',
        'Un clic sur le bouton « Share » encode l’état complet de votre scène (modèles, noms personnalisés, tailles, couleurs et positions) dans un lien URL compact copié dans votre presse-papiers.',
        'Votre destinataire retrouvera exactement la même composition en ouvrant le lien sur son appareil.',
      ],
      callout: {
        type: 'tip',
        text: 'Les liens de partage sont totalement autonomes et ne dépendent d’aucune base de données, assurant leur pérennité.',
      },
    },
    {
      id: 'mobile-experience',
      heading: '16. Une expérience pensée pour mobile, tablette et ordinateur',
      paragraphs: [
        'HowHeight adopte une architecture réactive pensée en priorité pour mobile :',
        '• Commandes tactiles : Glisser les figures et zoomer est rapide et sans ralentissement.',
        '• Tiroirs adaptatifs : Les panneaux d’outils se replient pour laisser toute la place à la scène de visualisation.',
        '• Balayage horizontal : Faites glisser la scène du doigt pour observer facilement de longues files de personnages sur smartphone.',
      ],
    },
    {
      id: 'why-visual-matters',
      heading: '17. Pourquoi la comparaison visuelle est si efficace',
      paragraphs: [
        'Le cerveau humain est configuré pour le raisonnement visuel et spatial. En lisant « 160 cm » et « 185 cm », l’esprit comprend la supériorité du second chiffre mais ne ressent pas spontanément l’impact d’un écart de 25 cm (près de 10 pouces).',
        'La comparaison visuelle met en jeu notre perception innée de l’échelle et nous fait comprendre d’emblée que les épaules d’un individu de 185 cm arrivent au niveau du menton de son vis-à-vis.',
      ],
    },
    {
      id: 'numbers-vs-visuals',
      heading: '18. Chiffres et visuels : L’alliance de la précision et de l’intuition',
      paragraphs: [
        'Ni un tableau de données brutes ni un dessin sans repère ne suffisent à eux seuls. Les chiffres manquent d’impact spontané ; un dessin non gradué peut être trompeur.',
        'HowHeight réunit le meilleur des deux : la rigueur mathématique des valeurs exactes associée à la clarté immédiate d’une silhouette posée au sol.',
      ],
    },
    {
      id: 'data-accuracy',
      heading: '19. Rigueur des données et transparence des sources',
      paragraphs: [
        'Nous appliquons des critères stricts quant à l’exactitude des mesures. Les tailles de célébrités sont compilées à partir de bilans athlétiques, de mesures médicales et d’interviews certifiées.',
        'Les dimensions de la faune et de la flore correspondent aux moyennes adultes publiées par les autorités biologiques. Les objets respectent les normes industrielles officielles (ISO, FIBA, etc.).',
        'Les données canoniques issues d’œuvres de fiction sont explicitement signalées. Nous n’inventons jamais de chiffres.',
      ],
      link: {
        text: 'En savoir plus sur notre méthodologie de mesure →',
        href: '/about/',
      },
    },
    {
      id: 'tips-for-better-comparisons',
      heading: '20. Conseils pratiques pour des comparaisons optimales',
      paragraphs: [
        'Pour obtenir les rendus les plus clairs et percutants :',
        '1. Variez les couleurs : Attribuez des couleurs contrastées aux figures adjacentes pour distinguer nettement les épaules et les bras.',
        '2. Intégrez un repère familier : En comparant des créatures fantastiques, ajoutez un humain moyen (175 cm) ou une porte.',
        '3. Choisissez la bonne unité : Adoptez les centimètres ou les pieds/pouces selon les habitudes de vos interlocuteurs.',
        '4. Triez par taille : Utilisez le tri automatique pour mettre en valeur la progression de hauteur d’un groupe.',
      ],
    },
    {
      id: 'example-workflow',
      heading: '21. Exemple d’utilisation : Aligner des personnages de comics',
      paragraphs: [
        'Imaginons une analyse des proportions entre héros urbains et colosses surhumains :',
        'Ajoutez d’abord un civil standard de 175 cm. Sélectionnez ensuite un justicier de 190 cm en rouge, puis un colosse de 230 cm en gris ardoise. Glissez l’humain entre les deux pour faire ressortir le contraste. Cliquez sur « Download Chart » pour enregistrer l’image PNG ou sur « Share » pour transmettre le lien à votre communauté en quelques secondes.',
      ],
    },
    {
      id: 'who-can-use',
      heading: '22. À qui s’adresse cet outil ?',
      paragraphs: [
        'HowHeight répond aux besoins de profils très variés :',
        '• Étudiants et enseignants : Pour donner du relief aux cours de géométrie, de sciences physiques et de biologie.',
        '• Auteurs et romanciers : Pour garantir la cohérence des regards et des interactions physiques entre protagonistes.',
        '• Illustrateurs et animateurs : Pour établir des fiches de référence proportionnelles avant de dessiner.',
        '• Cosplayers : Pour adapter les gabarits de costumes aux proportions d’origine.',
        '• Créateurs de contenu : Pour concevoir des visuels percutants destinés aux réseaux sociaux et articles.',
        '• Amateurs et curieux : Pour satisfaire l’envie naturelle de savoir : « Quelle est vraiment sa taille ? »',
      ],
    },
    {
      id: 'faq-reference',
      heading: '23. Foire aux questions et précisions techniques',
      paragraphs: [
        'Vous avez des questions sur la compatibilité des navigateurs ou les formules d’échelle ? Notre section FAQ détaillée répond à toutes vos interrogations techniques.',
      ],
    },
    {
      id: 'final-cta',
      heading: '24. Réalisez votre première comparaison dès maintenant',
      paragraphs: [
        'Prêt à visualiser la réalité des hauteurs ? Notre moteur de comparaison est instantané, performant et 100 % gratuit. Choisissez vos modèles et découvrez le monde tel qu’il se mesure.',
      ],
    },
  ],
  faqTransition: {
    badge: 'D’autres questions ?',
    heading: 'Consultez notre foire aux questions',
    text: 'Découvrez les détails de notre moteur de rendu proportionnel, des conversions d’unités et de nos algorithmes.',
    ctaText: 'Voir toutes les questions fréquentes',
    ctaHref: '/#faq',
  },
  finalCta: {
    heading: 'Prêt à visualiser la taille réelle ?',
    description: 'Lancez le comparateur de taille interactif dès maintenant. Comparez des personnes, des célébrités, des animaux et des objets en temps réel.',
    buttonText: 'Ouvrir le comparateur',
    buttonHref: '/compare/',
    secondaryText: 'Consulter le tableau des références',
    secondaryHref: '/height-comparison-chart/',
  },
};

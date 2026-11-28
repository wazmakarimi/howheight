import type { CategoryLocaleContent } from './types';

export const CATEGORY_CONTENT_FR: Record<string, CategoryLocaleContent> = {
  "people": {
    "measurementAnchor": "Du sommet du crâne à la plante des pieds (taille debout, pieds nus)",
    "measurementGuide": "La stature humaine se mesure comme la taille debout, pieds nus : la personne se tient droite sur une surface plane, talons joints, dos contre un stadiomètre, la tête tenue de façon que la ligne du regard soit horizontale, et la distance est lue du sol jusqu'au point le plus haut du crâne (le vertex). Les mesures sont normalement prises le matin lorsque c'est possible, car la colonne vertébrale se comprime légèrement au cours de la journée et une personne peut mesurer environ un centimètre ou deux de moins le soir qu'au réveil. Les enquêtes nationales telles que le programme NHANES du CDC font appel à des examinateurs formés et à des stadiomètres étalonnés plutôt qu'à des déclarations spontanées, car les gens ont tendance à surestimer légèrement leur propre taille lorsqu'on la leur demande.",
    "measurementNote": "Les tailles humaines sont mesurées pieds nus, du sommet du crâne à la plante des pieds, en position debout et droite.",
    "commonHeights": [
      {
        "label": "Moyenne masculine mondiale",
        "note": "Taille médiane mondiale des hommes adultes"
      },
      {
        "label": "Moyenne féminine mondiale",
        "note": "Taille médiane mondiale des femmes adultes"
      },
      {
        "label": "Moyenne masculine néerlandaise",
        "note": "Moyenne nationale masculine la plus élevée, selon les données du CBS néerlandais et de NCD-RisC"
      },
      {
        "label": "Moyenne féminine néerlandaise",
        "note": "Moyenne nationale féminine la plus élevée, selon les données du CBS néerlandais et de NCD-RisC"
      },
      {
        "label": "Moyenne féminine américaine",
        "note": "Moyenne mesurée par le CDC NHANES pour les femmes adultes"
      },
      {
        "label": "Moyenne masculine indienne",
        "note": "Séries de l'enquête nationale sur la santé des familles, hommes adultes"
      },
      {
        "label": "Moyenne féminine indienne",
        "note": "Séries de l'enquête nationale sur la santé des familles, femmes adultes"
      },
      {
        "label": "95e percentile masculin",
        "note": "Seul environ 1 homme adulte sur 20 atteint cette taille ou plus"
      },
      {
        "label": "95e percentile féminin",
        "note": "Seule environ 1 femme adulte sur 20 atteint cette taille ou plus"
      },
      {
        "label": "Robert Wadlow",
        "note": "Personne la plus grande jamais vérifiée, mesurée le 27 juin 1940"
      },
      {
        "label": "Sultan Kosen",
        "note": "Homme vivant le plus grand, vérifié par Guinness World Records"
      },
      {
        "label": "Chandra Bahadur Dangi",
        "note": "Adulte le plus petit jamais vérifié, mesuré à Katmandou en 2012"
      },
      {
        "label": "Jyoti Amge",
        "note": "Femme vivante la plus petite, vérifiée par Guinness World Records"
      }
    ],
    "faqs": [
      {
        "question": "Pourquoi ma taille est-elle légèrement différente le matin et le soir ?",
        "answer": "Votre colonne vertébrale se comprime pendant la journée. Les disques situés entre vos vertèbres perdent un peu de liquide sous l'effet de la gravité et de la charge, de sorte que la plupart des adultes mesurent environ un centimètre ou deux de moins le soir que lorsqu'ils se sont réveillés. C'est normal et temporaire ; les disques se réhydratent pendant la nuit lorsque vous êtes allongé. C'est pourquoi les cliniques et les enquêtes nationales préfèrent les mesures du matin lorsqu'elles veulent un chiffre cohérent et comparable."
      },
      {
        "question": "Qu'est-ce qu'un percentile, et pourquoi est-il plus important que la moyenne ?",
        "answer": "Un percentile vous indique où vous vous situez dans une population. Si vous êtes au 75e percentile pour votre sexe, vous êtes plus grand qu'environ 75 pour cent des personnes comme vous et plus petit qu'environ 25 pour cent. Les moyennes à elles seules masquent cette dispersion : deux pays peuvent partager une moyenne similaire tout en ayant des fourchettes très différentes. Les percentiles sont l'outil que les médecins et les chercheurs utilisent pour juger si la croissance d'un enfant suit son cours normal, car ils comparent ce qui est comparable au lieu de comparer à un seul chiffre."
      },
      {
        "question": "Pourquoi les Néerlandais sont-ils les plus grands du monde ?",
        "answer": "Les hommes néerlandais mesurent en moyenne environ 183 cm et les femmes néerlandaises environ 170 cm, les moyennes nationales les plus élevées jamais enregistrées. Les registres militaires montrent que les hommes néerlandais ont gagné environ 20 cm au cours des 200 dernières années, une augmentation que les chercheurs relient à une meilleure nutrition pendant l'enfance, à des soins de santé universels et à une hausse du niveau de vie plutôt qu'à un seul changement génétique. L'augmentation s'est stabilisée depuis les années 1980, ce qui suggère que la population est peut-être proche de son plafond pratique dans les conditions actuelles."
      },
      {
        "question": "Les hommes et les femmes diffèrent-ils vraiment en taille d'une quantité fixe ?",
        "answer": "En moyenne, les hommes adultes sont environ 13 à 14 cm plus grands que les femmes adultes dans le monde entier, un écart dû à des périodes de croissance masculine plus longues : les garçons continuent généralement de grandir environ deux ans de plus que les filles avant que leurs cartilages de croissance ne se soudent. Mais les distributions se chevauchent largement. Une femme au 95e percentile (environ 173 cm) est plus grande qu'environ la moitié de tous les hommes, de sorte que les moyennes décrivent des populations, pas des individus, et elles ne disent rien de fiable sur une personne en particulier que vous rencontrez."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi la taille humaine ordinaire mérite d'être comparée",
        "paragraphs": [
          "La taille humaine semble personnelle d'une manière que presque aucune autre mesure ne l'est. Les gens se souviennent de leur propre taille au centimètre près, en débattent, l'arrondissent à la hausse sur les formulaires et la remarquent dès qu'ils entrent dans une pièce. C'est parce que la taille est l'un des rares traits physiques visibles d'un coup d'œil, comparables à distance et chargés de signification sociale à la fois. Un outil de comparaison trouve ici sa raison d'être non pas en affichant un chiffre, mais en montrant l'écart : la différence entre 175 cm et 183 cm est difficile à ressentir à partir des seuls chiffres, mais dès que deux silhouettes se tiennent sur la même ligne de base, huit centimètres deviennent une marche visible que n'importe qui peut lire sans faire aucun calcul.",
          "L'autre raison pour laquelle cette catégorie est importante est que la « moyenne » est une cible mouvante. La médiane mondiale masculine d'environ 175 cm et la médiane mondiale féminine d'environ 162 cm masquent d'énormes variations entre les populations. Un Néerlandais de 183 cm n'a rien de remarquable chez lui, mais il se distinguerait dans une foule en Inde, où la moyenne masculine est d'environ 165 cm. Se comparer à une seule moyenne mondiale vous apprend donc très peu ; se comparer à la bonne population, au bon percentile et au bon sexe vous apprend beaucoup. C'est la comparaison que cette page est conçue pour permettre."
        ]
      },
      {
        "heading": "Comment la taille est réellement mesurée, et pourquoi de petites erreurs s'y glissent",
        "paragraphs": [
          "Une mesure correcte de la stature est un petit rituel soumis à un protocole strict. La personne retire ses chaussures, se tient talons joints et dos droit contre un stadiomètre vertical, et regarde droit devant elle de façon que la tête se trouve dans ce que les anthropométristes appellent le plan de Francfort. La personne qui mesure abaisse une pièce horizontale jusqu'à ce qu'elle touche juste le sommet du crâne et lit la valeur. Chaque partie de ce rituel existe pour éliminer une erreur précise : les chaussures ajoutent deux à trois centimètres, une posture affaissée en retire plusieurs autres, et une tête inclinée peut déplacer la lecture d'un centimètre dans un sens ou dans l'autre.",
          "Même avec une technique parfaite, le chiffre évolue au cours de la journée. Les disques vertébraux se compriment sous l'effet de la gravité, de sorte que les lectures du soir sont environ un centimètre ou deux inférieures à celles du matin. Les tailles déclarées par les personnes elles-mêmes vont dans l'autre sens : les gens arrondissent à la hausse, se souviennent de leur taille du matin ou citent le chiffre figurant sur leur permis de conduire, qui peut dater de plusieurs années. Les enquêtes nationales résolvent ce problème en mesurant plutôt qu'en demandant, à l'aide d'examinateurs formés et d'équipements étalonnés. Lorsque vous comparez les chiffres sur cette page, vous comparez des chiffres mesurés ou de qualité d'enquête, et non des estimations, ce qui explique pourquoi un écart de deux ou trois centimètres entre deux entrées est réel et mérite d'être remarqué plutôt que d'être du bruit."
        ]
      },
      {
        "heading": "Des extrêmes qui mettent la fourchette ordinaire en perspective",
        "paragraphs": [
          "La plupart des adultes sur Terre se situent dans une fourchette étonnamment étroite. En gros, les hommes adultes se regroupent entre environ 165 cm au 5e percentile et 188 cm au 95e, et les femmes adultes entre environ 152 cm et 173 cm. Cette fourchette est le monde dans lequel la plupart d'entre nous vivons, et c'est pourquoi une différence de dix centimètres entre deux amis semble importante : elle couvre une grande partie de l'ensemble de la distribution.",
          "Les détenteurs de records se situent très loin de cette fourchette, et ils sont utiles précisément parce qu'ils brisent l'échelle. Robert Wadlow, mesuré à 272 cm peu avant sa mort en 1940, était près d'un mètre plus grand que l'homme moyen de son époque, résultat d'une glande pituitaire hyperactive qui n'a jamais cessé de stimuler sa croissance. À l'autre extrémité, Chandra Bahadur Dangi mesurait 54,6 cm à Katmandou en 2012, plus petit que l'enfant moyen de deux ans, en raison d'un nanisme primordial. Placez l'une ou l'autre de ces silhouettes à côté d'un adulte moyen sur le canevas de comparaison et la fourchette ordinaire semble soudain compacte : tout l'éventail de la taille humaine typique tient dans l'écart entre la taille de Wadlow et le sommet de son crâne."
        ]
      },
      {
        "heading": "Utiliser l'outil pour cette catégorie",
        "paragraphs": [
          "La comparaison la plus utile ici n'est pas célébrité contre célébrité, mais vous contre une population. Commencez par ajouter une silhouette à votre propre taille, puis ajoutez la moyenne pour votre sexe et votre pays et voyez où vous vous situez. Si vous mesurez 178 cm et que vous êtes un homme, vous êtes au-dessus de la médiane mondiale mais en dessous de la moyenne néerlandaise ; si vous mesurez 170 cm et que vous êtes une femme, vous êtes au-dessus de la médiane mondiale féminine et exactement à la moyenne féminine néerlandaise. Ces positions sont plus instructives que n'importe quel chiffre isolé, car elles vous indiquent si vous êtes typique, grand ou petit par rapport aux personnes parmi lesquelles vous vivez réellement.",
          "Les percentiles expriment la même idée avec plus de précision. Ajouter les silhouettes des 5e, 50e et 95e percentiles pour votre sexe dessine la forme complète de la distribution sur un seul canevas, et votre propre silhouette s'y insère comme un marqueur. Essayez aussi avec les détenteurs de records : placer Wadlow à côté d'un adulte moyen est le moyen le plus rapide de saisir ce que « le plus grand de tous les temps » signifie vraiment, car aucune description en mots n'a le même poids que de voir une silhouette presque deux fois plus grande que vous se tenir sur le même sol."
        ]
      }
    ]
  },
  "celebrities": {
    "measurementAnchor": "Documentation officielle de la stature debout",
    "measurementGuide": "Les tailles des célébrités proviennent d'un mélange de sources d'une fiabilité très variable, et cette page les classe en conséquence. Les chiffres les plus solides sont ceux qui sont mesurés : les camps de sélection et de recrutement des sports professionnels, où les athlètes sont mesurés pieds nus par des officiels, et les registres de fédérations tels que les profils des conseils de cricket. Viennent ensuite les références biographiques réputées qui recoupent les documents des agences avec des interviews et des photographies. Les chiffres les plus faibles sont les listes d'agences et les biographies publicitaires, qui sont régulièrement arrondies à la hausse, citées avec des chaussures, ou simplement héritées d'un communiqué de presse ancien et jamais corrigées. Lorsque les sources sont en désaccord, cette page préfère le chiffre mesuré ou largement corroboré et traite avec suspicion une liste d'agence isolée.",
    "measurementNote": "Les tailles des célébrités sont des chiffres répertoriés ; les camps de sélection et les fédérations mesurent pieds nus.",
    "commonHeights": [
      {
        "label": "Dwayne Johnson",
        "note": "Acteur et ancien champion de la WWE, silhouette la plus grande du répertoire"
      },
      {
        "label": "Chris Hemsworth",
        "note": "Acteur australien, connu pour Thor"
      },
      {
        "label": "Amitabh Bachchan",
        "note": "Légende du cinéma indien, remarquablement grand pour sa génération d'acteurs"
      },
      {
        "label": "Cristiano Ronaldo",
        "note": "Footballeur portugais, mesuré dans les registres des clubs professionnels"
      },
      {
        "label": "Leonardo DiCaprio",
        "note": "Acteur américain"
      },
      {
        "label": "Ranbir Kapoor",
        "note": "Acteur indien"
      },
      {
        "label": "Neeraj Chopra",
        "note": "Champion olympique indien de javelot, profil World Athletics"
      },
      {
        "label": "Brad Pitt",
        "note": "Acteur et producteur américain"
      },
      {
        "label": "Zendaya",
        "note": "Actrice et chanteuse américaine, grande pour une actrice principale"
      },
      {
        "label": "Virat Kohli",
        "note": "Joueur de cricket indien, profil de joueur de la BCCI"
      },
      {
        "label": "Shah Rukh Khan",
        "note": "Acteur indien, « King of Bollywood »"
      },
      {
        "label": "Tom Cruise",
        "note": "Acteur américain, l'acteur principal de petite taille le plus recherché du répertoire"
      },
      {
        "label": "Sachin Tendulkar",
        "note": "Joueur de cricket indien, détenteur du record de courses"
      },
      {
        "label": "Alia Bhatt",
        "note": "Actrice indienne"
      }
    ],
    "faqs": [
      {
        "question": "Pourquoi différents sites Web indiquent-ils des tailles différentes pour la même célébrité ?",
        "answer": "Parce qu'ils copient différents types de sources. Un profil de fédération sportive, une fiche de réservation d'agence cinématographique et un wiki de fans concordent rarement au centimètre près, et chaque site en choisit un et le présente comme un fait. Les fiches d'agences sont les coupables habituels de l'inflation : ce sont des documents marketing, et un centimètre ou deux sont régulièrement ajoutés, en particulier pour les acteurs principaux. Les registres mesurés des camps de sélection et des fédérations sont bien plus cohérents, ce qui explique pourquoi les tailles des athlètes sont généralement plus fiables que celles des acteurs. Lorsque vous voyez la taille d'une célébrité varier de 3 à 5 cm d'un site à l'autre, vous voyez généralement l'écart entre un chiffre mesuré et un chiffre publié."
      },
      {
        "question": "Les acteurs sont-ils vraiment aussi grands que leurs tailles répertoriées le prétendent ?",
        "answer": "Souvent, pas tout à fait. Les acteurs sont photographiés et filmés de manière à flatter leur stature : bottes à talons, semelles surélevées, angles de caméra filmés par en dessous, et partenaires choisis ou positionnés pour préserver l'avantage apparent de taille d'un acteur principal. Certaines productions placent même les acteurs plus petits sur des caisses en bois pour les plans à deux. Rien de tout cela ne signifie que le chiffre répertorié est inventé, mais cela signifie que la taille que vous percevez à l'écran peut être de quelques centimètres supérieure au chiffre pieds nus. Comparer le chiffre répertorié à celui d'un partenaire dont la taille est mesurée de manière indépendante est généralement le moyen le plus rapide de repérer l'exagération."
      },
      {
        "question": "Qui est la célébrité la plus grande et la plus petite de ce répertoire ?",
        "answer": "Dwayne Johnson, avec 196 cm, est la silhouette la plus grande du répertoire vérifié, un héritage de sa carrière de lutteur professionnel où sa taille annoncée faisait partie du spectacle, mais où sa stature réelle est véritablement exceptionnelle. À l'autre extrémité, Alia Bhatt avec 160 cm et Scarlett Johansson avec 160 cm sont les actrices principales les plus petites répertoriées. L'écart entre Johnson et l'une ou l'autre est de 36 cm, plus d'un pied, ce qui explique pourquoi placer ces deux silhouettes côte à côte sur le canevas est l'une des comparaisons les plus frappantes que l'outil puisse dessiner."
      },
      {
        "question": "Pourquoi les tailles des athlètes sont-elles plus fiables que celles des acteurs ?",
        "answer": "Les athlètes sont mesurés par des personnes qui n'ont aucun intérêt à les flatter. Un club de football, un conseil de cricket ou une fédération olympique enregistre la taille parce qu'elle compte pour la sélection, l'équipement et les références médicales, et la mesure est prise pieds nus par un personnel suivant un protocole. Les acteurs, en revanche, sont mesurés par leur propre représentation, où la taille fait partie d'une image commercialisable et où personne ne vérifie le chiffre. Cette différence structurelle explique pourquoi la taille répertoriée d'un joueur de cricket bouge rarement au cours d'une carrière, alors que celle d'un acteur peut discrètement augmenter entre une biographie ancienne et une plus récente."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi les tailles des personnes célèbres fascinent les gens",
        "paragraphs": [
          "Personne ne discute de la taille d'un inconnu, mais tout le monde a une opinion sur la taille d'une personne célèbre. Une partie tient à une simple curiosité : le cinéma et la télévision aplatissent le monde en un rectangle, et le rectangle ment sur l'échelle. Deux acteurs peuvent sembler avoir exactement la même taille à l'écran alors qu'ils diffèrent de quinze centimètres dans la vie réelle, parce que la caméra, le cadrage et les chaussures conspirent tous pour masquer la différence. Découvrir le vrai chiffre donne l'impression de résoudre un petit mystère, et cela recadre chaque scène que vous avez regardée : soudain, la domination du héros dans une scène de confrontation ressemble moins à un physique et davantage à de la cinématographie.",
          "L'autre partie est l'identification. Les fans se comparent aux personnes célèbres comme moyen de se situer dans le monde. Une personne qui mesure 170 cm découvre que Tom Cruise et Lionel Messi partagent cette taille, et le chiffre cesse de sembler petit. Une personne qui mesure 188 cm trouve de la compagnie en Amitabh Bachchan. L'outil de comparaison fonctionne pour les célébrités précisément parce qu'il transforme une liste abstraite en un fait visuel : votre silhouette se tenant sur la même ligne de base que celle d'une star, à l'échelle réelle, sans aucun artifice de caméra sur le chemin."
        ]
      },
      {
        "heading": "Tailles répertoriées, tailles mesurées, et l'écart entre elles",
        "paragraphs": [
          "Chaque taille de célébrité sur cette page appartient à l'une de deux familles, et savoir laquelle compte plus que le chiffre lui-même. Les tailles mesurées proviennent d'institutions qui enregistrent la stature pour des raisons pratiques : camps de sélection sportive, camps de recrutement, conseils de cricket et fédérations olympiques. Elles sont prises pieds nus, par des officiels, selon un protocole, et elles changent rarement au cours d'une carrière. Les tailles répertoriées proviennent d'agences, de biographies publicitaires et d'interviews, où le chiffre sert une image plutôt qu'un registre. Ce sont les chiffres qui dérivent vers le haut d'un centimètre ou deux, qui sont cités avec des chaussures, ou qui survivent inchangés depuis un communiqué de presse rédigé lorsque l'acteur avait vingt et un ans.",
          "L'écart est généralement faible, mais il est systématique, et il va dans une seule direction : vers le haut. Les acteurs principaux sont les plus touchés, car le casting a historiquement favorisé les héros plus grands et les acteurs principaux plus petits ont intérêt à combler l'écart sur le papier. Les actrices subissent la pression inverse dans certains contextes, où être remarquablement grande peut coûter des rôles face à des partenaires masculins plus petits. Rien de tout cela ne rend les chiffres inutiles, mais cela signifie qu'une comparaison de célébrités doit être lue comme approximative à quelques centimètres près, et qu'une différence de deux centimètres entre deux acteurs ne doit pas être considérée comme décisive. Une différence de quinze centimètres, en revanche, est réelle quelle que soit la source à laquelle vous faites confiance."
        ]
      },
      {
        "heading": "Les extrêmes de la célébrité, et ce qu'ils révèlent",
        "paragraphs": [
          "La fourchette du répertoire va de 160 cm à 196 cm, un écart de 36 cm entre Alia Bhatt et Scarlett Johansson à l'extrémité inférieure et Dwayne Johnson à l'extrémité supérieure. Cet écart mérite qu'on s'y arrête, car il couvre presque toute la fourchette adulte normale : les personnes célèbres les plus petites et les plus grandes ne sont pas des anomalies monstrueuses, mais des personnes dont la taille se situe près des limites de la variation ordinaire. Les 196 cm de Johnson sont exceptionnels mais ne battent aucun record ; c'est la taille d'un homme très grand qui s'est trouvé devenir lutteur puis acteur. Les 160 cm de Johansson et de Bhatt sont simplement la taille d'une femme plus petite que la moyenne, sans rien de remarquable hors écran.",
          "Ce qui est remarquable, c'est à quel point ces différences réelles apparaissent peu dans leur travail. Johnson est filmé pour paraître puissant mais pas absurde, et Johansson est cadrée pour paraître imposante plutôt que petite, parce que les réalisateurs ajustent les angles, la mise en place et le placement des partenaires pour servir l'histoire plutôt que le mètre ruban. L'outil supprime tout cela. Placez Johnson à côté de Bhatt sur une même ligne de base et l'écart de 36 cm devient soudain indéniable, ce qui est exactement pourquoi la comparaison est satisfaisante : elle remplace des années d'illusion d'écran soigneusement gérée par une seule image honnête."
        ]
      },
      {
        "heading": "Utiliser l'outil pour cette catégorie",
        "paragraphs": [
          "La meilleure comparaison de célébrités commence par vous-même. Ajoutez une silhouette à votre propre taille, puis ajoutez la star qui vous intrigue, et l'écart devient personnel plutôt qu'anecdotique. Un utilisateur de 175 cm se tenant à côté de Virat Kohli à la même taille voit un égal ; à côté de Cristiano Ronaldo à 187 cm, le même utilisateur voit une marche de douze centimètres vers le haut ; à côté de Tom Cruise à 170 cm, une marche de cinq centimètres vers le bas. Ces trois images ensemble en apprennent plus sur l'échelle que n'importe quelle liste de chiffres, car chacune ancre la taille de la star à un corps que vous connaissez déjà.",
          "L'outil récompense aussi le mélange des catégories, et c'est là que la comparaison de célébrités devient véritablement intéressante. Placez un joueur de cricket à côté d'un encadrement de porte, un acteur à côté d'un cheval, ou un footballeur à côté d'un adulte moyen d'un autre pays, et la célébrité s'efface pour ne laisser que la mesure. C'est le but de l'exercice : la taille d'une célébrité n'est pas du tout un fait sur la célébrité. C'est une taille humaine, mesurée de la même manière que la vôtre, et le canevas est le seul endroit où elle est montrée sans flatterie, sans chaussures et sans angles de caméra sur le chemin."
        ]
      }
    ]
  },
  "anime": {
    "measurementAnchor": "Stature debout officielle des databooks",
    "measurementGuide": "Les tailles des personnages d'anime proviennent des databooks officiels des franchises, des notes des auteurs de manga et des fiches de conception des personnages publiées par les détenteurs des droits, et non de captures d'écran ou d'estimations de fans. Parce que les séries de longue durée suivent leurs personnages pendant des années, un même personnage a souvent plus d'une taille officielle : les chiffres du début de la série, d'après le saut dans le temps et d'adulte peuvent tous être corrects pour différents moments de l'histoire. Les wikis de fans sont en désaccord les uns avec les autres principalement parce qu'ils mélangent ces époques, arrondissent les conversions différemment ou répètent des éditions de guides dépassées, de sorte que chaque chiffre sur cette page est lié à une version précise du personnage.",
    "measurementNote": "Les tailles d'anime sont des chiffres officiels de databooks pour une époque précise de l'histoire, et non des estimations tirées des images d'animation.",
    "commonHeights": [
      {
        "label": "Edward Elric",
        "note": "Fullmetal Alchemist, début de la série ; grandit jusqu'à environ 165 cm à la fin de la série"
      },
      {
        "label": "Levi Ackerman",
        "note": "L'Attaque des Titans, guides officiels supervisés par Hajime Isayama"
      },
      {
        "label": "Tanjiro Kamado",
        "note": "Demon Slayer, 15 ans après avoir rejoint les Pourfendeurs ; 156 cm à 13 ans"
      },
      {
        "label": "Yuji Itadori",
        "note": "Jujutsu Kaisen, fanbook officiel"
      },
      {
        "label": "Monkey D. Luffy",
        "note": "One Piece, après le saut dans le temps ; 172 cm avant le saut dans le temps"
      },
      {
        "label": "Ichigo Kurosaki",
        "note": "Bleach, années d'adolescence ; 181 cm à l'âge adulte"
      },
      {
        "label": "Son Goku",
        "note": "Dragon Ball Z / Super, adulte"
      },
      {
        "label": "Naruto Uzumaki",
        "note": "Naruto, adulte en tant que 7e Hokage ; 166 cm à l'adolescence dans Shippuden"
      },
      {
        "label": "Roronoa Zoro",
        "note": "One Piece, après le saut dans le temps ; 178 cm avant le saut dans le temps"
      },
      {
        "label": "Eren Yeager",
        "note": "L'Attaque des Titans, après le saut dans le temps ; 170 cm dans les premières saisons"
      },
      {
        "label": "Satoru Gojo",
        "note": "Jujutsu Kaisen, le fanbook l'indique à plus de 190 cm"
      },
      {
        "label": "All Might (forme de héros)",
        "note": "My Hero Academia, forme de héros sous pouvoir ; beaucoup plus petit dans sa forme affaiblie"
      }
    ],
    "faqs": [
      {
        "question": "Les tailles des personnages d'anime sont-elles officielles, ou les fans les devinent-ils ?",
        "answer": "Elles sont officielles. Les éditeurs japonais publient des profils de personnages avec la taille, le poids et l'anniversaire dans des databooks et des fanbooks qui accompagnent une série de manga, et les studios d'animation construisent leurs fiches modèles à partir de ces mêmes chiffres. Lorsque vous voyez deux tailles différentes pour un même personnage, c'est presque toujours parce que le personnage a vieilli entre les arcs narratifs, et non parce que le chiffre a été inventé."
      },
      {
        "question": "Pourquoi un même personnage a-t-il deux tailles différentes sur différents sites ?",
        "answer": "Les anime de longue durée font vieillir leurs personnages. Luffy mesure 172 cm avant le saut dans le temps de One Piece et 174 cm après, Eren Yeager grandit de 170 cm à 183 cm, et Tanjiro grandit de 156 cm à 165 cm pendant son entraînement. Un site qui ne précise pas de quelle époque il cite le chiffre semblera faux même lorsque son chiffre provient d'une source réelle, ce qui explique pourquoi cette page indique l'époque pour chaque entrée."
      },
      {
        "question": "Pourquoi certains personnages d'anime sont-ils si petits par rapport aux personnes réelles ?",
        "answer": "De nombreux protagonistes sont des adolescents, et la conception des personnages japonais garde souvent les héros compacts pour qu'ils se lisent clairement à l'écran à côté de méchants et de créatures beaucoup plus grands. Edward Elric à 149 cm et Levi Ackerman à 160 cm sont tous deux écrits comme petits, et leurs histoires le soulignent : leur taille fait partie de leur identité, ce n'est pas une erreur de dessin. Les comparer à un adulte moyen sur le canevas montre exactement à quel point ce choix est délibéré."
      },
      {
        "question": "Les tailles d'anime changent-elles entre le manga et l'anime ?",
        "answer": "Le chiffre publié dans le databook est le même pour les deux, car l'anime adapte les fiches de conception du manga. Ce qui change, c'est la taille qu'un personnage semble avoir à l'écran : les angles de caméra, la perspective dramatique et la taille de la personne debout à côté de lui peuvent faire paraître un personnage plus grand ou plus petit dans une scène donnée. Le chiffre du databook reste fixe, ce qui explique pourquoi c'est le bon chiffre à comparer."
      },
      {
        "question": "Comment dois-je utiliser l'outil de comparaison avec les personnages d'anime ?",
        "answer": "Commencez avec un personnage et un humain moyen de 175 cm, puis ajoutez un deuxième personnage de la même série pour voir l'écart dans l'univers, et enfin ajoutez un objet du monde réel tel qu'un encadrement de porte pour ancrer le résultat. Parce que les distributions d'anime mélangent adolescents, adultes et géants, l'outil est le plus révélateur lorsque vous comparez des personnages de la même époque de la même série plutôt que de mélanger les versions du début de la série et les versions adultes."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi les tailles d'anime méritent d'être comparées",
        "paragraphs": [
          "L'anime est l'un des rares médias où la taille est un outil narratif délibéré plutôt qu'un accident de casting. Un réalisateur ne peut pas simplement engager un acteur plus grand, de sorte que lorsqu'un personnage est dessiné petit ou grand, ce choix a été fait sur une fiche de conception et approuvé par le créateur. Levi Ackerman mesure 160 cm dans une distribution de soldats qui le dominent, et l'histoire ne laisse jamais le public l'oublier : sa létalité est surprenante précisément parce que sa carrure est petite. All Might, à 220 cm dans sa forme de héros, est l'astuce inverse, un corps dessiné pour remplir une porte de façon que sa présence ressemble à un monument public avant même qu'il ne parle. Placer ces silhouettes côte à côte sur une même ligne de base transforme une impression que vous aviez à peine remarquée en regardant en une mesure que vous pouvez réellement voir.",
          "La fourchette au sein d'une même série est souvent plus large que la fourchette parmi les populations humaines réelles. One Piece va du personnage comique de la taille de Chopper à des géants de plusieurs mètres de haut, et L'Attaque des Titans place un capitaine de 160 cm dans la même armée que des soldats de 183 cm et des Titans de quinze mètres de haut. Un canevas de comparaison gère cet éventail mieux que n'importe quel paragraphe, car il force chaque silhouette à se placer sur la même ligne de sol et à la même échelle. Dès que vous voyez les 183 cm d'Eren Yeager après le saut dans le temps à côté des 160 cm inchangés de Levi, l'écart de quatre ans entre eux cesse d'être une anecdote et devient quelque chose que vous pouvez ressentir."
        ]
      },
      {
        "heading": "D'où viennent les chiffres, et pourquoi les sources sont en désaccord",
        "paragraphs": [
          "Les sources fiables sont imprimées, et non issues d'une collaboration ouverte. Shueisha, Kodansha et d'autres éditeurs japonais publient des databooks et des fanbooks dans lesquels chaque personnage majeur reçoit un bloc de profil indiquant la taille, le poids, l'anniversaire et le groupe sanguin. Les guides INSIDE et OUTSIDE de L'Attaque des Titans, supervisés par Hajime Isayama, fixent Levi à 160 cm et la taille finale d'Eren à 183 cm. Le fanbook officiel de Jujutsu Kaisen indique Gojo à plus de 190 cm, ce qui explique pourquoi les tableaux soigneux citent 190 cm comme un plancher plutôt que comme une mesure exacte. Les registres des Pourfendeurs de Demon Slayer donnent Tanjiro à 165 cm à quinze ans, avec son chiffre de 156 cm à treize ans conservé dans le même registre, de sorte que les deux chiffres sont officiels et appartiennent tous deux à des anniversaires différents.",
          "Le désaccord entre sites Web a généralement l'une de trois causes, et aucune n'est un mystère une fois que vous savez la chercher. La première est le mélange des époques : un site qui cite Ichigo adolescent à 174 cm à côté de Naruto adulte à 180 cm compare deux étapes de vie différentes sans le dire. La deuxième est l'arrondi de conversion : les sources japonaises publient en centimètres, et la conversion en pieds et pouces perd une fraction de pouce que différents sites arrondissent dans des directions différentes, ce qui explique pourquoi 174 cm apparaît à la fois comme 5'8\" et 5'8.5\". La troisième est l'obsolescence des données : des traductions anciennes de guides par des fans ont circulé avant les éditions anglaises officielles, et certains de ces chiffres anciens étaient tout simplement faux et n'ont jamais été corrigés. La solution est d'exiger une indication d'époque et une source nommée pour chaque chiffre, ce qui est la norme suivie par cette page."
        ]
      },
      {
        "heading": "Extrêmes, croissance, et les idées fausses qu'ils créent",
        "paragraphs": [
          "L'idée fausse la plus courante sur les tailles d'anime est qu'une taille de personnage est un fait fixe comme une date de naissance. En pratique, c'est un instantané, et la date de cet instantané compte plus que la plupart des fans ne le réalisent. Edward Elric commence Fullmetal Alchemist à 149 cm et le termine à environ 165 cm, et sa fureur d'être traité de petit est une blague récurrente précisément parce qu'il est encore en train de grandir. Le saut de Naruto de 166 cm en tant qu'adolescent dans Shippuden à 180 cm en tant que Hokage représente 14 cm entiers de croissance adulte qu'un tableau à un seul chiffre masque complètement. Même le modeste passage de Luffy de 172 cm à 174 cm à travers le saut dans le temps vous apprend quelque chose sur la façon dont Oda traite ses personnages : les pirates vieillissent, et leurs profils officiels vieillissent avec eux.",
          "L'autre idée fausse est que les personnages petits sont dessinés petits par accident ou à cause des limites de l'animation. C'est l'inverse qui est vrai. Une petite stature dans l'anime est généralement une décision de conception réfléchie qui signale la jeunesse, le statut d'outsider ou une menace dans un petit format. Tanjiro à 165 cm n'a rien de remarquable parmi les Piliers de Demon Slayer, dont plusieurs dépassent 175 cm, et ce caractère ordinaire est précisément le but : c'est un garçon normal qui tient tête à des démons. Gojo à plus de 190 cm est l'inverse, un mentor dessiné pour dominer ses élèves de façon que son autorité se lise avant qu'il n'agisse. Lorsque vous alignez toute une distribution, le schéma devient visible : la taille dans l'anime, c'est du casting, fait avec un crayon plutôt qu'avec un directeur de casting."
        ]
      },
      {
        "heading": "Comment tirer le meilleur parti de l'outil de comparaison",
        "paragraphs": [
          "L'outil est le plus utile lorsque vous le traitez comme un banc d'expérimentation plutôt que comme une affiche. Commencez avec un seul personnage à côté de la silhouette masculine moyenne de 175 cm, qui est proche des 175 cm de Goku et fait de Goku un point d'ancrage utile : presque tous les autres personnages d'anime peuvent être décrits comme plus grands ou plus petits que Goku. Ajoutez ensuite un deuxième personnage de la même série et de la même époque, par exemple Luffy après le saut dans le temps à 174 cm à côté de Zoro après le saut dans le temps à 181 cm, et l'écart de sept centimètres entre le capitaine et le sabreur devient concret. Enfin, ajoutez un objet du quotidien tel qu'un encadrement de porte à 245 cm ou une voiture, et l'échelle fictive entre en collision avec le monde réel d'une manière qu'aucune capture d'écran d'épisode ne peut offrir.",
          "Deux habitudes rendent les résultats fiables. Premièrement, gardez les époques cohérentes : ne placez pas Eren adolescent à 170 cm à côté de Naruto adulte à 180 cm pour en conclure quoi que ce soit sur leurs séries, car vous comparez un adolescent de quinze ans avec un homme adulte. Deuxièmement, souvenez-vous que les formes de héros et les transformations sont des entrées distinctes : les 220 cm d'All Might appartiennent à sa forme sous pouvoir, et sa forme affaiblie se tiendrait bien plus bas sur le même canevas. Utilisé ainsi, l'outil cesse d'être une nouveauté et devient le moyen le plus rapide de trancher les débats que les fans d'anime ont réellement, qui portent rarement sur qui est le plus fort et très souvent sur qui se tient le plus haut dans le cadre."
        ]
      }
    ]
  },
  "films": {
    "measurementAnchor": "Stature selon le scénario canonique et les plans des accessoires",
    "measurementGuide": "Les tailles des personnages de films proviennent des bibles de production des studios, des plans de conception des accessoires et des tableaux d'échelle officiels préparés pendant la production, et non de mesures d'acteurs sur un tapis rouge. Trois chiffres différents peuvent tous être vrais pour un même personnage : la taille propre de l'acteur, la taille de la silhouette costumée sur le plateau, et la taille du personnage fini en images de synthèse à l'écran. Les armures, les casques, les bottes à plateforme et la mise à l'échelle numérique ajoutent chacun des centimètres, de sorte que chaque entrée sur cette page précise lequel de ces chiffres elle cite.",
    "measurementNote": "Les tailles de films citent la silhouette finie à l'écran, la taille de l'armure et du costume étant signalée séparément de celle de l'acteur.",
    "commonHeights": [
      {
        "label": "Yoda",
        "note": "Star Wars, Maître Jedi ; chiffre de la Databank de StarWars.com"
      },
      {
        "label": "R2-D2",
        "note": "Star Wars, droïde astromécano de série R2 ; 1,09 m dans les références canoniques"
      },
      {
        "label": "Captain America (Steve Rogers, MCU)",
        "note": "Taille après le sérum montrée dans l'exposition du Smithsonian ; l'acteur Chris Evans mesure 6'0\""
      },
      {
        "label": "T-800 (Terminator)",
        "note": "Interprété par Arnold Schwarzenegger, facturation officielle de 6'2\""
      },
      {
        "label": "Wolverine (interprétation au cinéma)",
        "note": "Hugh Jackman à l'écran ; le canon des comics est de 160 cm, un chiffre différent"
      },
      {
        "label": "Iron Man (armure Mark 85)",
        "note": "Taille de l'armure dans Avengers: Endgame ; Tony Stark lui-même mesure 185 cm"
      },
      {
        "label": "Dark Vador (armure)",
        "note": "Armure complète de survie selon la Databank de StarWars.com ; Anakin sans armure est plus petit"
      },
      {
        "label": "Chewbacca",
        "note": "Star Wars, copilote wookiee ; chiffre de la Databank de StarWars.com"
      },
      {
        "label": "Hulk (MCU)",
        "note": "Forme gamma dans le MCU ; Bruce Banner mesure 175 cm"
      },
      {
        "label": "Jake Sully (avatar)",
        "note": "Avatar, corps Na'vi adulte ; les documents de production donnent les adultes à 9-10 ft"
      },
      {
        "label": "Optimus Prime (Bayverse)",
        "note": "Tableaux d'échelle des films Transformers en prises de vues réelles de 2007-2017"
      },
      {
        "label": "King Kong (Skull Island, 2017)",
        "note": "Kong adolescent dans Kong: Skull Island"
      },
      {
        "label": "King Kong (Godzilla vs. Kong, 2021)",
        "note": "Kong pleinement adulte dans le MonsterVerse"
      },
      {
        "label": "Godzilla (2021)",
        "note": "Godzilla du MonsterVerse dans Godzilla vs. Kong"
      }
    ],
    "faqs": [
      {
        "question": "Les tailles de films incluent-elles les armures, les casques et les bottes ?",
        "answer": "Parfois, et c'est exactement pourquoi la distinction compte. Les 203 cm de Dark Vador correspondent à la silhouette en armure, complète avec le casque et la combinaison de survie, alors qu'Anakin Skywalker en dessous est un homme beaucoup plus petit. Les 198 cm d'Iron Man correspondent à l'armure Mark 85, et non à Tony Stark, qui mesure 185 cm. Cette page étiquette les chiffres d'armure comme des chiffres d'armure, de sorte que vous ne comparez jamais un costume avec un humain pieds nus par accident."
      },
      {
        "question": "Pourquoi Wolverine mesure-t-il 188 cm ici alors que les comics disent 160 cm ?",
        "answer": "Parce qu'il s'agit de la catégorie films, et que les films ont choisi Hugh Jackman, qui mesure 188 cm, pour incarner Wolverine. Les comics indiquent Logan à 160 cm, et ce chiffre est correct pour le personnage imprimé. Les deux chiffres décrivent deux versions différentes du personnage, et la version cinématographique est celle qui a sa place sur une page de comparaison de films. Mélanger les continuités est la source la plus courante de tailles de films erronées."
      },
      {
        "question": "Pourquoi Godzilla et King Kong changent-ils de taille entre les films ?",
        "answer": "Parce que l'équipe de production de chaque film fixe sa propre échelle. Kong mesure 104 ft en tant qu'adolescent dans Kong: Skull Island en 2017 et 337 ft en tant qu'adulte pleinement développé dans Godzilla vs. Kong en 2021, et cette croissance fait partie de l'histoire : il est encore en train de mûrir dans le film précédent. Godzilla a lui aussi grandi, passant de 108 m en 2014 à 119,8 m dans le film de 2021. La taille d'une créature n'a de sens qu'avec le titre du film attaché, ce qui explique pourquoi chaque entrée de créature ici nomme son film."
      },
      {
        "question": "Les tailles des créatures en images de synthèse sont-elles de vraies mesures ou des estimations ?",
        "answer": "Ce sont des décisions de production consignées dans des tableaux d'échelle. Avant même qu'une seule image ne soit rendue, l'équipe des effets visuels convient de la taille d'une créature par rapport aux bâtiments, aux véhicules et aux personnages humains, car chaque plan dépend de ce rapport. Les tableaux d'échelle de production de Transformers indiquent l'Optimus Prime en prises de vues réelles à 28 ft, et les documents de production d'Avatar définissent les Na'vi adultes comme mesurant 9-10 ft. Ces chiffres ne sont pas moins officiels qu'une mesure de costume ; ils sont simplement décidés sur papier avant d'apparaître à l'écran."
      },
      {
        "question": "Puis-je comparer les personnages de films avec des personnes et des objets réels sur l'outil ?",
        "answer": "Oui, et c'est là que l'outil trouve sa raison d'être. Placez Chewbacca à 228 cm à côté d'un homme moyen de 175 cm et l'avantage du Wookiee cesse d'être une vague impression pour devenir un écart de 53 cm que vous pouvez voir. Placez Godzilla à côté d'un gratte-ciel et la raison pour laquelle les films de kaiju cadrent leurs monstres contre les horizons urbains devient évidente : à 119,8 m, Godzilla est un bâtiment qui bouge."
      }
    ],
    "editorialSections": [
      {
        "heading": "Les trois tailles cachées dans chaque personnage de film",
        "paragraphs": [
          "Demandez quelle est la taille d'un personnage de film et vous obtiendrez généralement trois réponses, toutes défendables. Il y a la taille de l'acteur, la taille de la silhouette réellement photographiée sur le plateau, et la taille du personnage fini que le public voit. Pour un rôle humain ordinaire, ces trois chiffres sont presque identiques, et personne ne remarque la différence. Pour un personnage costumé ou numérique, ils peuvent être éloignés de plusieurs mètres, et c'est dans cet écart que commence la plupart de la confusion sur les tailles de films. Dark Vador est le cas d'école : David Prowse à l'intérieur du costume était un homme très grand, l'armure finie avec son casque atteint 203 cm, et Anakin Skywalker, la personne en dessous, n'a jamais été aussi grand. Citer l'un de ces chiffres sans dire lequel vous entendez, c'est ainsi que les disputes commencent.",
          "L'armure est la plus grande source unique de taille supplémentaire, et elle mérite d'être comprise comme un artisanat plutôt que comme une astuce. Une armure motorisée, un costume de Wookiee ou une tenue de super-héros est construite par-dessus le corps de l'interprète, et les casques, les épaulettes et les bottes à plateforme ajoutent régulièrement dix à vingt centimètres. L'armure Mark 85 d'Iron Man se tient à 198 cm alors que Tony Stark mesure 185 cm, et les treize centimètres entre eux relèvent de l'ingénierie : le blindage, un casque et les bottes de la combinaison. Les 228 cm de Chewbacca sont aussi un chiffre de costume, construit à partir de l'interprète à l'intérieur plus la fourrure, une coiffe et des chaussures. Rien de tout cela ne rend les chiffres faux. La silhouette en armure est ce que le public voit, ce que l'histoire traite comme la taille du personnage, et ce que la databank officielle enregistre. Cela ne devient trompeur que lorsqu'on la compare silencieusement à une mesure humaine pieds nus comme si les deux avaient été prises de la même manière."
        ]
      },
      {
        "heading": "Bibles de production, tableaux d'échelle, et pourquoi les reboots remettent tout à zéro",
        "paragraphs": [
          "Pour les personnages humains, la bible de production n'est généralement que la fiche de casting : la taille annoncée de l'acteur, ajustée de ce que le costume ajoute. Pour les créatures et les robots, le document clé est le tableau d'échelle, une feuille dessinée avant le tournage qui fixe la taille de chaque personnage par rapport à une silhouette humaine, un véhicule et un bâtiment. Les tableaux d'échelle en prises de vues réelles de Transformers fixent l'Optimus Prime du Bayverse à 28 ft, et ce chiffre est resté cohérent dans les films de 2007-2017 parce que chaque plan d'effets a été construit à partir du même tableau. Les documents de production d'Avatar définissent les Na'vi adultes comme mesurant 9-10 ft, ce qui explique pourquoi le corps d'avatar de Jake Sully se lit comme environ 9 ft face aux soldats humains dans le même cadre. Ces documents sont ce que le cinéma a de plus proche d'un databook d'anime, et ils méritent le même respect en tant que sources.",
          "Les reboots et les suites remettent le tableau à zéro, et c'est une caractéristique plutôt qu'une erreur. Kong mesure 104 ft dans Kong: Skull Island parce que l'histoire a besoin d'un singe adolescent qui peut encore grandir, et il mesure 337 ft dans Godzilla vs. Kong parce que l'histoire a besoin d'un adulte capable de tenir tête à un Godzilla de 393 ft. Le triplement est délibéré, et l'équipe de production a publié les deux chiffres. La même logique explique pourquoi un Godzilla de 1954 à 50 m et un Godzilla de 2021 à 119,8 m sont tous deux corrects : ils appartiennent à des productions différentes avec des horizons différents à dominer. Tout tableau qui répertorie une créature sans nommer son film cache l'information la plus importante sur ce chiffre."
        ]
      },
      {
        "heading": "Perspective forcée, doublures, et les illusions qui trompent l'œil",
        "paragraphs": [
          "Même lorsque le tableau de production est exact, le film fini peut mentir à vos yeux, et les cinéastes disposent de toute une boîte à outils pour le faire. La perspective forcée place un acteur plus petit plus près de la caméra pour qu'il paraisse plus grand, une technique que les films du Seigneur des Anneaux ont constamment utilisée pour les hobbits et les magiciens. La hauteur de la caméra compte aussi : filmer un personnage par en dessous ajoute de l'autorité et une taille apparente, tandis que filmer par au-dessus le diminue, et les réalisateurs choisissent ces angles pour un effet émotionnel plutôt que pour une exactitude documentaire. C'est pourquoi deux personnages peuvent sembler égaux dans une scène et différer d'une tête dans la suivante, et pourquoi mesurer les tailles à partir d'une image fixe d'un film est une entreprise vouée à l'échec.",
          "Les doublures et les remplaçants ajoutent une couche supplémentaire. Captain America en est un exemple limpide : Steve Rogers mesure 188 cm après le sérum de super-soldat selon l'exposition du Smithsonian dans l'univers, alors que Chris Evans, l'acteur, mesure 183 cm, et la production a comblé l'écart avec des astuces de caméra et un cadrage soigneux. Hulk est le cas extrême, car il n'existe aucun interprète de cette taille : le Hulk du MCU à 259 cm est une construction entièrement numérique dont la taille a été choisie sur papier puis rendue, le corps de 175 cm de Mark Ruffalo ne servant que de référence de mouvement. Une fois que vous savez que ces mécanismes existent, la bonne question cesse d'être « quelle taille semblait-il avoir dans cette scène » et devient « qu'a décidé la production », ce qui est une question avec une réponse documentée."
        ]
      },
      {
        "heading": "Utiliser l'outil pour trancher les débats d'échelle au cinéma",
        "paragraphs": [
          "L'outil de comparaison est à son meilleur lorsqu'il rend littéral le langage visuel d'un film. Placez Yoda à 66 cm à côté des 203 cm en armure de Dark Vador et vous avez reproduit, en chiffres, le contraste le plus célèbre de Star Wars : le plus petit maître et le plus grand méchant, séparés par 137 cm de présence à l'écran. Placez R2-D2 à 109 cm à côté de Chewbacca à 228 cm et l'habitude du droïde de rouler dans les scènes à hauteur de genou se voit soudain attachée à une mesure. Ce ne sont pas des anecdotes ; ce sont les faits spatiaux avec lesquels les réalisateurs travaillaient lorsqu'ils mettaient en place chaque scène, et les voir sur une même ligne de base explique des décisions de casting et de costume qui sembleraient sinon arbitraires.",
          "L'outil gère aussi le saut de l'échelle humaine à l'échelle des kaiju, et c'est là que la taille au cinéma devient véritablement spectaculaire. Une silhouette humaine à 175 cm à côté de Godzilla à 119,8 m est presque invisible, et cette quasi-invisibilité est le résultat honnête : elle vous dit pourquoi les films de kaiju ne cadrent jamais leurs monstres face à des personnes, mais face à des horizons, des montagnes et d'autres monstres. Comparer le Kong de 2017 à 31,7 m avec le Kong de 2021 à 102,7 m sur le même canevas montre l'arc de croissance du personnage de façon plus vivante que n'importe quel montage de suite, car le triplement est dessiné plutôt que décrit. Gardez le titre du film attaché à chaque créature, gardez les chiffres d'armure étiquetés comme armure, et l'outil fera ce qu'aucune image de film isolée ne peut faire : vous montrer l'échelle propre de la production, tout à la fois, sur une même ligne de sol."
        ]
      }
    ]
  },
  "animals": {
    "measurementAnchor": "Hauteur à l'épaule / au garrot pour les quadrupèdes ; au sommet du crâne pour les bipèdes",
    "measurementGuide": "Les mammifères à quatre pattes sont mesurés depuis un sol plat jusqu'au garrot, la crête osseuse entre les omoplates, car le garrot reste à une hauteur fixe tandis que la tête bouge constamment vers le haut, vers le bas et sur les côtés. Les chevaux suivent la même norme du garrot, mais l'expriment en mains, où une main équivaut à 4 inches (10.16 cm), de sorte qu'un cheval de 160 cm mesure 15.3 hands. Les animaux dressés comme les kangourous et les gorilles sont en revanche mesurés jusqu'au sommet du crâne, et les girafes jusqu'à la pointe de leurs ossicônes, car ces animaux n'ont pas de ligne de garrot significative. La hauteur de la tête n'est jamais utilisée pour les quadrupèdes : un cheval qui broute, un cerf en alerte et un éléphant qui charge tiennent tous leur tête à des hauteurs très différentes, de sorte qu'un chiffre basé sur la tête décrirait une posture, et non un animal.",
    "measurementNote": "Les animaux à quatre pattes sont mesurés à l'épaule ou au garrot, et non à la tête.",
    "commonHeights": [
      {
        "label": "Chat domestique",
        "note": "Du sol au garrot à l'épaule, adulte typique"
      },
      {
        "label": "Chien domestique",
        "note": "Du sol au garrot ; varie beaucoup selon la race"
      },
      {
        "label": "Loup gris",
        "note": "Du sol au garrot, adulte"
      },
      {
        "label": "Tigre",
        "note": "Du sol à l'épaule, adulte"
      },
      {
        "label": "Lion d'Afrique",
        "note": "Du sol au garrot à l'épaule, mâle adulte"
      },
      {
        "label": "Ours brun",
        "note": "Hauteur à l'épaule à quatre pattes ; se tient plus haut sur ses pattes arrière"
      },
      {
        "label": "Vache",
        "note": "Du sol au garrot à l'épaule, adulte"
      },
      {
        "label": "Kangourou roux",
        "note": "Hauteur debout en position verticale jusqu'à la tête"
      },
      {
        "label": "Gorille",
        "note": "Hauteur debout jusqu'au sommet du crâne"
      },
      {
        "label": "Cheval domestique",
        "note": "Mesure au garrot, 15.3 hands"
      },
      {
        "label": "Chameau",
        "note": "Sommet de l'épaule ; la bosse peut s'élever plus haut"
      },
      {
        "label": "Éléphant de savane d'Afrique",
        "note": "Hauteur à l'épaule d'un mâle adulte"
      },
      {
        "label": "Girafe",
        "note": "Du sol à la pointe des ossicônes, adulte typique"
      }
    ],
    "faqs": [
      {
        "question": "Pourquoi les animaux sont-ils mesurés à l'épaule ou au garrot plutôt qu'à la tête ?",
        "answer": "Le garrot est un repère squelettique fixe, le point le plus haut des omoplates, et il ne bouge pas lorsque l'animal broute, regarde autour de lui ou baisse la tête. La hauteur de la tête peut changer de plusieurs dizaines de centimètres d'une seconde à l'autre, de sorte qu'elle ne peut pas servir de norme reproductible. Chaque dossier vétérinaire, chaque standard de race et chaque mesure de zoo pour un quadrupède utilise donc le garrot, et c'est pourquoi l'outil de comparaison dessine les quadrupèdes jusqu'à cette ligne."
      },
      {
        "question": "Comment mesure-t-on les chevaux, et qu'est-ce qu'une main ?",
        "answer": "Les chevaux sont mesurés au garrot en mains, une unité traditionnelle égale à 4 inches ou 10.16 cm. Un cheval décrit comme mesurant 15.3 hands correspond à 15 mains pleines plus 3 inches, ce qui donne 160 cm. L'outil affiche les deux unités, de sorte qu'un cheval indiqué à 160 cm et un cheval indiqué à 15.3 hands ont la même hauteur exprimée de deux façons."
      },
      {
        "question": "Pourquoi la hauteur d'un ours prête-t-elle à confusion, et à quel chiffre dois-je me fier ?",
        "answer": "Un ours marche à quatre pattes à environ 130 cm à l'épaule, mais le même animal se dresse jusqu'à environ 2.5 m sur ses pattes arrière, de sorte que les deux chiffres sont réels et décrivent des postures différentes. L'outil de comparaison utilise par défaut la hauteur à l'épaule à quatre pattes, car c'est la posture normale de déplacement de l'animal et la seule comparable à celle des autres quadrupèdes. Si vous voulez la hauteur lorsqu'il se dresse, comparez-la plutôt à celle d'un humain debout."
      },
      {
        "question": "Les girafes tirent-elles vraiment l'essentiel de leur hauteur de leur cou ?",
        "answer": "Seulement en partie. Les pattes et le cou d'une girafe mesurent chacun environ 1.8 m de long, de sorte que les pattes seules sont déjà aussi hautes qu'un humain adulte moyen avant même que le corps et le cou ne s'y ajoutent. Le cou ajoute environ un tiers supplémentaire de la hauteur totale de l'animal, et il ne contient que sept vertèbres, le même nombre que dans un cou humain, chaque vertèbre étant étirée sur plus de 25 cm. C'est pourquoi une girafe paraît si extrême sur le graphique : ce sont deux structures de la hauteur d'un humain empilées l'une sur l'autre."
      },
      {
        "question": "Pourquoi la taille des chiens varie-t-elle autant d'une race à l'autre ?",
        "answer": "Les chiens sont le mammifère terrestre dont la taille varie le plus, car des siècles d'élevage sélectif ont étiré une seule espèce d'un Chihuahua de 15 cm à un Dogue allemand de 110 cm à l'épaule. Une seule « taille de chien » n'est donc qu'une valeur moyenne approximative, et le chiffre de 60 cm de l'outil correspond à un chien de taille moyenne, et non à un standard de race. Pour une comparaison exacte, saisissez la hauteur au garrot d'une race précise comme hauteur personnalisée au lieu de vous fier au chiffre générique pour le chien."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi la taille des animaux est plus difficile à déterminer que celle des humains",
        "paragraphs": [
          "Un humain se tient debout, reste immobile pour un mètre ruban et garde la même taille du matin au soir, ce qui rend la mesure humaine presque triviale. Les animaux refusent de coopérer de toutes les manières possibles : ils bougent, ils s'accroupissent, ils se dressent, ils broutent, et leur corps est construit horizontalement plutôt que verticalement, de sorte que l'idée même de « hauteur » doit être définie avant de pouvoir être mesurée. C'est cette définition qui rend la comparaison des animaux intéressante, car un même animal peut légitimement avoir deux ou trois hauteurs différentes selon sa posture, et chacune raconte une histoire différente sur la façon dont l'animal vit.",
          "La norme du garrot existe précisément pour trancher cette ambiguïté. Le garrot est la crête osseuse à la jonction du cou et du dos, et, contrairement à la tête, il ne peut pas être relevé ou abaissé à volonté. Un cheval qui baisse la tête pour boire et un cheval qui relève brusquement la tête en alerte ont la même hauteur au garrot, et c'est pourquoi les registres de race, les dossiers vétérinaires et les relevés sur la faune s'y réfèrent tous. Lorsque vous voyez un quadrupède sur le graphique de comparaison, sa ligne de dos se situe à sa hauteur au garrot, et sa tête et ses oreilles s'élèvent naturellement au-dessus de cette ligne, tout comme dans la vie réelle."
        ]
      },
      {
        "heading": "Comment la mesure fonctionne en pratique, et où elle tourne mal",
        "paragraphs": [
          "Mesurer un animal calme est simple : placez-le sur un sol plat, trouvez le point le plus haut des omoplates et tracez une ligne verticale jusqu'au sol. Mesurer un animal sauvage ou peu coopératif est un tout autre travail, et les chercheurs procèdent souvent par estimation à partir d'empreintes, de photographies avec un objet de référence connu, ou de restes squelettiques. C'est pourquoi les hauteurs publiées pour une même espèce diffèrent souvent de 10 cm ou plus, et pourquoi l'outil utilise des valeurs adultes typiques plutôt que des extrêmes record. Un éléphant record ou une girafe exceptionnellement grande est une curiosité, et non un animal représentatif, et se comparer à une valeur aberrante fausse l'image.",
          "L'erreur la plus courante consiste à mélanger les postures. La hauteur à l'épaule d'un ours à quatre pattes et sa hauteur debout sur ses pattes arrière diffèrent de plus d'un mètre, et les deux chiffres circulent en ligne sans étiquette. Le même piège guette les éléphants, chez qui la hauteur à l'épaule est parfois confondue avec la hauteur à la tête, et les chameaux, chez qui la bosse peut se situer 30 cm au-dessus de la ligne d'épaule. L'outil évite cela en fixant une posture par animal et en l'indiquant dans l'étiquette, de sorte qu'une comparaison entre un ours et un humain est toujours une comparaison à conditions égales."
        ]
      },
      {
        "heading": "Des extrêmes qui redéfinissent ce que signifie être grand",
        "paragraphs": [
          "Le règne animal étire le sens humain de l'échelle dans les deux directions. À une extrémité, un chat domestique de 25 cm à l'épaule arrive à peine à la cheville d'un adulte, et l'animal entier tient sous une table basse. À l'autre extrémité, une girafe de 480 cm correspond à près de trois humains moyens empilés, et ses pattes seules sont à peu près aussi hautes qu'une personne. Entre ces deux pôles se trouvent les animaux que les gens rencontrent réellement : les chiens, les chevaux et les vaches, dont les hauteurs au garrot se regroupent entre 60 et 160 cm, exactement dans la fourchette où un humain peut les juger d'un coup d'œil.",
          "Ce qui surprend le plus les gens, c'est la part de la hauteur d'un animal grand qui tient à ses pattes. Les pattes d'une girafe mesurent environ 1.8 m de long, ce qui signifie que l'animal a déjà la hauteur d'un humain avant même que son corps ne commence, et son cou ajoute encore 1.8 m par-dessus. Les éléphants inversent ce schéma : leurs pattes sont comparativement courtes et en forme de colonnes, et leur masse provient d'un torse massif porté haut au-dessus du sol. Voir les deux animaux à côté d'un humain sur la même ligne de base rend la différence évidente d'une manière que les chiffres seuls ne permettent jamais."
        ]
      },
      {
        "heading": "Idées reçues courantes, et comment bien utiliser l'outil",
        "paragraphs": [
          "L'idée reçue la plus persistante est que la hauteur d'un cheval inclut sa tête. Ce n'est pas le cas, et un cheval dont le garrot mesure 160 cm portera sa tête bien au-dessus de 200 cm lorsqu'il est en alerte, et c'est pourquoi les personnes qui rencontrent un cheval en personne insistent souvent sur le fait que la hauteur publiée est fausse. La même logique s'applique aux cerfs, chez qui les bois sont exclus, et aux chiens, chez qui les oreilles sont exclues. Le graphique est honnête à ce sujet : il dessine le corps de l'animal jusqu'à sa hauteur mesurée et laisse la tête dépasser au-dessus de la ligne.",
          "Pour tirer le meilleur parti de l'outil, commencez par une silhouette humaine que vous connaissez, ajoutez un animal à la fois et observez la ligne de base plutôt que le sommet des dessins. Comparez un cheval à un humain, puis ajoutez un lion pour voir comment l'épaule d'un grand félin se situe en dessous de celle d'un cheval, puis ajoutez un éléphant pour voir le saut vers la véritable échelle de la mégafaune. Si vous voulez comparer un animal précis, comme votre propre chien, mesurez son garrot avec un niveau et un mur, saisissez ce nombre exact comme hauteur personnalisée, et le graphique vous montrera précisément où se situe votre chien par rapport à tout le reste."
        ]
      }
    ]
  },
  "objects": {
    "measurementAnchor": "Du sol / du plancher au plan structurel rigide le plus élevé",
    "measurementGuide": "Les objets sont mesurés depuis leur surface d'appui plane, généralement le plancher ou le revêtement du sol, en ligne droite jusqu'à leur point rigide le plus élevé, c'est-à-dire le haut du dossier d'une chaise, la charnière supérieure d'un réfrigérateur ou la ligne de toit d'une voiture, mais pas un élément souple ou réglable supplémentaire comme une antenne ou un appuie-tête relevé. Les dimensions standard décrivent une taille de fabrication courante plutôt qu'une loi de la nature, de sorte qu'une « porte standard » correspond à 80 inches (203 cm) de panneau de porte aux États-Unis, mais est couramment vendue ailleurs comme une ouverture de cadre de 210 cm, et la même porte peut mesurer différemment selon que le cadre est inclus ou non. Indiquez toujours quel point a été mesuré, car deux mesures honnêtes du même objet peuvent différer de plusieurs centimètres lorsque l'une inclut les moulures, les charnières ou les barres de toit et que l'autre ne les inclut pas.",
    "measurementNote": "Les objets sont mesurés du plancher à leur point rigide le plus élevé.",
    "commonHeights": [
      {
        "label": "Table à manger",
        "note": "Du plancher à la surface du plateau"
      },
      {
        "label": "Machine à laver",
        "note": "Du plancher au panneau supérieur, modèle standard à chargement frontal"
      },
      {
        "label": "Canapé",
        "note": "Du plancher au haut des coussins du dossier"
      },
      {
        "label": "Chaise de salle à manger",
        "note": "Du plancher au haut du dossier"
      },
      {
        "label": "Vélo",
        "note": "Du sol au haut du guidon"
      },
      {
        "label": "Moto",
        "note": "Du sol au guidon ou au haut du pare-brise"
      },
      {
        "label": "Voiture berline",
        "note": "Du revêtement du sol au sommet du toit"
      },
      {
        "label": "Lampadaire",
        "note": "Du plancher au haut de l'abat-jour ou de l'embout décoratif"
      },
      {
        "label": "Réfrigérateur",
        "note": "Du plancher à la charnière supérieure de la porte"
      },
      {
        "label": "Bibliothèque",
        "note": "Du plancher à l'étagère supérieure ou à la corniche"
      },
      {
        "label": "Pick-up",
        "note": "Du sol au haut du toit de la cabine"
      },
      {
        "label": "Armoire",
        "note": "Du plancher au haut du meuble"
      },
      {
        "label": "Porte standard",
        "note": "Du plancher au haut de l'ouverture du cadre"
      },
      {
        "label": "Panier de basket",
        "note": "Du sol du terrain à la surface de l'anneau, hauteur réglementaire"
      },
      {
        "label": "Bus urbain",
        "note": "De la surface de la route au toit"
      }
    ],
    "faqs": [
      {
        "question": "Pourquoi une « porte standard » a-t-elle plus d'une hauteur ?",
        "answer": "Parce que le chiffre dépend du pays et de ce qui est exactement mesuré. Aux États-Unis, le panneau de porte intérieure courant mesure 80 inches, soit 203 cm, tandis que l'ouverture du cadre dans laquelle il s'insère mesure souvent environ 210 cm, et les portes européennes sont couramment vendues à 210 cm. L'outil utilise 210 cm pour l'ouverture du cadre, car c'est la hauteur par laquelle une personne passe réellement, mais si votre propre porte mesure 203 cm, saisissez cette valeur comme hauteur personnalisée pour une comparaison exacte."
      },
      {
        "question": "La hauteur d'une voiture se mesure-t-elle jusqu'au toit ou jusqu'aux barres de toit ?",
        "answer": "Jusqu'au point rigide le plus élevé du toit, qui, pour la plupart des voitures, est le panneau de toit lui-même, mais les barres de toit ou un coffre de toit peuvent ajouter plusieurs centimètres et sont parfois inclus dans les chiffres des constructeurs. C'est pourquoi une source peut indiquer une berline à 145 cm et une autre à 148 cm : la voiture est la même, mais un chiffre inclut les barres. L'outil utilise le sommet du toit sans accessoires, de sorte qu'une voiture équipée d'un coffre de toit paraîtra légèrement plus haute dans la vie réelle que sur le graphique."
      },
      {
        "question": "Pourquoi un panier de basket mesure-t-il exactement 10 feet de haut partout ?",
        "answer": "La hauteur de l'anneau, de 10 feet, soit 305 cm, a été fixée lors de l'invention du jeu et n'a jamais changé, et toutes les grandes ligues du monde utilisent le même chiffre. C'est l'une des rares hauteurs d'objet qui soit une véritable constante mondiale plutôt qu'une convention de fabrication, ce qui en fait un point de référence exceptionnellement fiable. Si vous pouvez toucher l'anneau, vous pouvez atteindre 305 cm, et vous comparer à cette ligne vous indique instantanément à quelle distance au-dessus de votre tête elle se situe."
      },
      {
        "question": "Comment puis-je comparer mes propres meubles s'ils n'ont pas une taille standard ?",
        "answer": "Mesurez-les de la même manière que l'outil : placez-les sur un sol plat, tenez un mètre verticalement du sol au point rigide le plus élevé et lisez le nombre en centimètres. Une chaise se mesure jusqu'au haut de son dossier, et non jusqu'à son assise, et une bibliothèque jusqu'à son bord supérieur, et non jusqu'à son livre le plus haut. Saisissez ce nombre comme hauteur personnalisée et le graphique placera votre meuble exact à côté d'une silhouette humaine."
      },
      {
        "question": "Pourquoi un bâtiment de deux étages ne vaut-il pas deux fois une maison d'un étage ?",
        "answer": "Parce que la hauteur d'un bâtiment inclut les dalles de plancher, la structure du toit et les parapets, et pas seulement deux hauteurs de pièce empilées, et les hauteurs sous plafond varient selon l'époque et l'usage. Une maison d'un étage à 450 cm jusqu'à son faîte et un bâtiment de deux étages à 600 cm jusqu'à son parapet sont des valeurs typiques, mais une maison ancienne aux plafonds hauts peut rivaliser avec un immeuble moderne de deux étages. Les chiffres du graphique pour les bâtiments sont représentatifs, et non des plans d'architecture, alors utilisez-les pour vous faire une idée de l'échelle plutôt que pour planifier une construction."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi les objets du quotidien sont la meilleure règle que vous possédiez déjà",
        "paragraphs": [
          "Les gens ont du mal à se représenter un nombre comme 175 cm isolément, mais ils comprennent instantanément une porte qu'ils franchissent chaque jour, une voiture qu'ils conduisent et une chaise sur laquelle ils s'assoient. C'est ce qui fait des objets la catégorie la plus utile d'un outil de comparaison de hauteurs : les références sont déjà installées dans la mémoire du lecteur, et le graphique n'a qu'à les disposer sur une ligne de base commune. Une silhouette humaine à côté d'un cadre de porte de 210 cm se lit immédiatement, car tout le monde connaît la sensation d'une porte qui passe au-dessus de sa tête de la largeur d'une main ou qui l'oblige à se baisser.",
          "Les objets ancrent aussi le reste de l'échelle. Une fois que vous savez qu'un toit de berline se situe à environ 145 cm, soit à peu près à hauteur de poitrine chez un adulte, vous pouvez juger chaque véhicule sur la route par rapport à lui. Une fois que vous savez qu'un anneau de basket est fixé à 305 cm, vous pouvez imaginer exactement à quelle hauteur il pend au-dessus de la tête d'un joueur. Ce ne sont pas des mesures abstraites, mais des faits physiques que les gens ont heurtés, essayé d'atteindre et sous lesquels ils se sont baissés, et c'est pourquoi ils font de meilleures règles mentales que n'importe quel nombre seul."
        ]
      },
      {
        "heading": "Comment fonctionne la mesure des objets, et pourquoi deux chiffres honnêtes peuvent diverger",
        "paragraphs": [
          "Mesurer un objet semble simple jusqu'à ce que vous décidiez quel point compte comme le sommet. Une chaise a une assise à environ 45 cm et un dossier à environ 90 cm, et les deux sont des hauteurs réelles de la même chaise, mais seul le dossier correspond à sa hauteur totale. Le corps d'un réfrigérateur peut se terminer à 170 cm tandis que sa charnière supérieure atteint 175 cm. Une voiture mesurée jusqu'au panneau de toit et la même voiture mesurée jusqu'à ses barres de toit diffèrent de quelques centimètres. Aucun de ces désaccords ne signifie que quelqu'un a tort ; ils signifient que le point de mesure n'a pas été indiqué.",
          "L'outil suit une règle pour garder les comparaisons honnêtes : du plancher au point rigide le plus élevé, en excluant les éléments supplémentaires souples, temporaires ou optionnels. Une antenne ne compte pas, un appuie-tête relevé ne compte pas et un coffre de toit ne compte pas, car ceux-ci peuvent être ajoutés, retirés ou réglés sans changer l'objet lui-même. Énoncer la règle compte plus que la règle elle-même, car une fois la règle connue, n'importe qui peut reproduire la mesure avec un mètre ruban et un sol plat, et c'est cette reproductibilité qui distingue une référence utile d'une simple estimation."
        ]
      },
      {
        "heading": "Les normes, et pourquoi elles varient selon le pays et l'époque",
        "paragraphs": [
          "Certaines hauteurs d'objets sont de véritables constantes mondiales. Un anneau de basket mesure 305 cm sur chaque terrain dans chaque pays, car les règles du sport l'ont fixé et ne l'ont jamais changé. La plupart des autres sont des conventions qui dérivent au fil des frontières et des décennies. Les hauteurs de porte en sont l'exemple classique : la familière porte intérieure américaine de 80 inches correspond à 203 cm de panneau, tandis que de nombreux marchés européens et asiatiques construisent autour d'une ouverture de 210 cm, et les maisons plus anciennes ont souvent des portes plus basses que les deux. Le mobilier suit le même schéma, avec des hauteurs de bureau qui se stabilisent autour de 75 cm parce que cela convient au coude moyen en position assise, tandis que les tables à manger varient selon le style et l'époque.",
          "Les véhicules montrent la même dérive dans une autre direction. Une berline d'il y a vingt ans était généralement plus basse qu'une berline moderne, et l'essor des SUV a poussé le toit moyen des voitures d'environ 145 cm vers 170 cm ou plus. C'est pourquoi le graphique utilise des valeurs actuelles typiques plutôt que de prétendre qu'un seul nombre couvre toutes les voitures jamais fabriquées. Si votre voiture est plus ancienne ou plus haute que la typique, la mesurer et saisir une hauteur personnalisée prend quelques secondes et est toujours plus précis que de se fier à un chiffre générique."
        ]
      },
      {
        "heading": "Idées reçues courantes, et comment bien utiliser l'outil",
        "paragraphs": [
          "L'erreur la plus courante consiste à comparer les mauvais points : juger une personne par rapport à l'assise d'une chaise au lieu de son dossier, ou par rapport à la ligne des vitres d'une voiture au lieu de son toit. Le graphique évite cela en dessinant chaque objet jusqu'à sa hauteur totale, de sorte que le haut de chaque dessin est le point de mesure. Une autre surprise fréquente est de découvrir à quel point les choses ordinaires sont grandes : un réfrigérateur de 175 cm correspond exactement à la taille humaine moyenne, et c'est pourquoi il domine une cuisine, et un bus urbain de 320 cm fait près du double d'une personne, et c'est pourquoi en descendre donne l'impression de descendre une petite falaise.",
          "Pour bien utiliser l'outil, commencez par des objets de votre propre maison. Placez une silhouette humaine à côté d'une porte, puis ajoutez votre voiture, puis votre réfrigérateur, et regardez comment le monde familier s'empile. Ajoutez ensuite quelque chose qui sort de la vie quotidienne, comme un bus ou un anneau de basket, pour étirer l'échelle vers le haut. Si un chiffre semble faux, mesurez l'objet réel avant de douter du graphique : neuf fois sur dix, la surprise est réelle, et l'objet est vraiment aussi grand que cela."
        ]
      }
    ]
  },
  "plants": {
    "measurementAnchor": "De la ligne du sol au sommet supérieur de la canopée",
    "measurementGuide": "La hauteur d'une plante se mesure comme la distance verticale entre la ligne du sol à la base de la plante et la pointe vivante la plus élevée de sa canopée ou de sa tige, la plante étant dans sa posture de croissance naturelle plutôt qu'étirée ou tuteurée à la verticale. Pour les arbres, les forestiers distinguent la hauteur d'un spécimen mature poussant à découvert et celle d'un spécimen en concurrence dans un peuplement dense, et ils consignent l'année de la mesure car un arbre vivant continue de pousser, perd de la couronne à cause des tempêtes ou du feu, et peut donc être plus petit lors d'un relevé ultérieur qu'auparavant. Une même espèce peut varier énormément : un tournesol dans un jardin familial peut atteindre 2 mètres tandis qu'un spécimen record dépasse 10 mètres, et un palmier dattier dans un verger sec reste bien plus petit qu'un palmier dans une palmeraie profonde et irriguée. Pour cette raison, chaque hauteur sur cette page décrit un type précis de spécimen — un individu record, une plante mature typique ou une forme de jardin courante — et la note à côté de chaque entrée indique de quel type il s'agit.",
    "measurementNote": "Mesuré de la ligne du sol à la pointe vivante la plus élevée de la canopée.",
    "commonHeights": [
      {
        "label": "Séquoia côtier Hyperion",
        "note": "Plus grand arbre vivant connu, mesuré à 115.92 m dans le parc national de Redwood, en Californie"
      },
      {
        "label": "Eucalyptus Centurion",
        "note": "Plus grande plante à fleurs du monde, en Tasmanie ; mesuré à 99.6 m après avoir perdu de la couronne dans un incendie en 2019"
      },
      {
        "label": "Sapin de Doerner",
        "note": "Plus grand sapin de Douglas connu et plus grand arbre non-séquoia, mesuré à 99.3 m dans l'Oregon en 2022"
      },
      {
        "label": "Séquoia géant General Sherman",
        "note": "Plus grand arbre vivant connu à tige unique par le volume du tronc, parc national de Sequoia, en Californie"
      },
      {
        "label": "Bambou géant",
        "note": "Hauteur mature typique de Dendrocalamus giganteus, la plus grande herbe du monde"
      },
      {
        "label": "Baobab africain",
        "note": "Grand Adansonia digitata mature, un arbre succulent massif des savanes africaines"
      },
      {
        "label": "Palmier dattier",
        "note": "Phoenix dactylifera mature typique, le palmier cultivé des oasis du Moyen-Orient et d'Afrique du Nord"
      },
      {
        "label": "Cactus saguaro mature",
        "note": "Carnegiea gigantea mature moyen selon le US National Park Service, désert de Sonora"
      },
      {
        "label": "Tournesol record",
        "note": "Tournesol détenteur du Guinness World Record cultivé par Alex Babich, aux États-Unis, vérifié le 3 septembre 2025"
      },
      {
        "label": "Bananier",
        "note": "Bananier cultivé mature typique, une herbe géante dotée d'un pseudo-tronc plutôt que d'un tronc ligneux"
      },
      {
        "label": "Arbre fruitier de jardin (pommier/poirier)",
        "note": "Canopée de verger semi-naine"
      },
      {
        "label": "Tournesol commun",
        "note": "Tournesol de jardin ordinaire en pleine floraison"
      }
    ],
    "faqs": [
      {
        "question": "Pourquoi différentes sources donnent-elles différentes hauteurs pour le même arbre célèbre ?",
        "answer": "Un arbre vivant est une cible mouvante. Il pousse chaque année, et il peut perdre des mètres de couronne à cause de la foudre, du feu ou du vent, de sorte qu'un chiffre n'est correct que pour l'année où il a été mesuré. Hyperion, par exemple, a été mesuré à 115.55 m en 2006 et à 115.92 m en 2019, et Centurion a perdu environ 4 m dans un feu de brousse en 2019. La pente compte aussi : les arpenteurs indiquent la hauteur au-dessus du niveau moyen du sol, tandis qu'un ruban lâché depuis la couronne jusqu'au point le plus bas en aval peut donner plusieurs mètres de plus."
      },
      {
        "question": "Quelle hauteur un tournesol ordinaire atteint-il réellement ?",
        "answer": "La plupart des tournesols de jardin atteignent 1.5 à 3 mètres, ce qui est déjà plus grand que la plupart des adultes. Les livres des records sont une autre histoire : des cultivateurs de compétition utilisant un sol riche, un abri et un tuteurage ont poussé l'espèce au-delà de 10 mètres, le record Guinness actuel étant de 10.90 m. Lorsque vous comparez un tournesol dans l'outil, vérifiez si l'entrée correspond à une plante de jardin ou à un spécimen record, car les deux diffèrent d'un facteur cinq."
      },
      {
        "question": "Puis-je comparer une plante d'intérieur avec des meubles dans l'outil ?",
        "answer": "Oui, et c'est l'un des usages les plus pratiques de cette catégorie. Placez un figuier lyre ou un monstera à côté d'une table à manger, d'une bibliothèque ou d'une porte pour juger s'il tiendra dans une pièce et quelle quantité de lumière ses feuilles supérieures recevront. Mesurez la plante depuis la surface du sol dans son pot, et non depuis le plancher, et rappelez-vous qu'une plante achetée petite continuera de pousser vers sa hauteur mature."
      },
      {
        "question": "Pourquoi un bananier n'est-il pas considéré comme un arbre ?",
        "answer": "Un bananier n'a pas de tronc ligneux. Ce qui ressemble à un tronc est un pseudo-tronc fait de gaines foliaires étroitement enroulées, et toute la plante aérienne dépérit après la fructification tandis que de nouvelles pousses s'élèvent depuis le rhizome souterrain. Les botanistes l'appellent donc la plus grande plante herbacée à fleurs plutôt qu'un arbre, même si un spécimen mature peut mesurer 5 mètres de haut et ombrager un jardin comme le fait un petit arbre."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi les hauteurs des plantes sont les chiffres les plus difficiles de la nature",
        "paragraphs": [
          "Aucune autre catégorie de ce site ne couvre une fourchette aussi large que les plantes. À une extrémité se trouve un tournesol de jardin qu'un enfant peut regarder par-dessus ; à l'autre, un séquoia côtier plus grand qu'un immeuble de 35 étages. Entre les deux se trouvent les palmiers, les cactus, les bambous, les arbres fruitiers et les arbustes, chacun avec son propre port de croissance, sa propre durée de vie et sa propre relation à son environnement. C'est cette fourchette qui rend les hauteurs des plantes si satisfaisantes à comparer : placer une personne à côté d'un séquoia transforme un nombre abstrait comme 116 mètres en quelque chose de ressenti, tandis que placer la même personne à côté d'un saguaro explique pourquoi un désert qui semble vide depuis la fenêtre d'une voiture est en réalité plein d'une vie lente et imposante.",
          "La difficulté est que la hauteur d'une plante n'est jamais une propriété fixe comme l'est la hauteur d'une porte. Une plante pousse, et sa taille finale dépend du sol, de l'eau, de la lumière, du vent et des voisins. Deux graines issues du même parent peuvent finir avec des mètres d'écart en hauteur si l'une atterrit dans un jardin abrité et irrigué et l'autre sur une pente sèche et venteuse. L'âge compte tout autant : un saguaro met environ une décennie à atteindre un seul inch, mais peut tenir pendant deux siècles et finir par dépasser 12 mètres, tandis qu'une pousse de bambou atteint ses pleins 30 mètres en une seule saison de croissance et ne grandit ensuite plus jamais. Toute comparaison honnête des plantes doit donc dire quel type de spécimen elle décrit, et cette page fait exactement cela dans la note à côté de chaque entrée."
        ]
      },
      {
        "heading": "Comment un arbre est réellement mesuré",
        "paragraphs": [
          "Pour une plante de jardin, la mesure est simple : placez un ruban à côté d'elle et lisez le sommet. Pour un arbre géant, c'est une petite expédition. La référence absolue est la chute de ruban, lors de laquelle un grimpeur monte jusqu'à la pousse vivante la plus élevée et abaisse un ruban jusqu'au sol, une méthode qui a confirmé le record d'Hyperion et qui est toujours utilisée car les télémètres laser peuvent être trompés par les troncs penchés, le feuillage dense et les pentes. Les arpenteurs corrigent aussi le sol lui-même : un arbre poussant sur une colline escarpée est plus grand mesuré depuis son côté aval que depuis son côté amont, de sorte que les hauteurs publiées utilisent le niveau moyen du sol autour de la base.",
          "Ces détails expliquent pourquoi le même arbre apparaît avec des hauteurs différentes selon les années. Un arbre ne fait pas que pousser ; il se brise aussi. Centurion, l'eucalyptus de Tasmanie, a été mesuré à 100.5 m en 2018 puis a perdu environ 4 m de couronne dans un feu de brousse l'année suivante, de sorte que sa hauteur publiée actuelle est de 99.6 m. Le sapin de Doerner, dans l'Oregon, mesurait 100.3 m en 1991 et 99.3 m en 2022, et il a perdu encore de la couronne dans un incendie en 2025. Aucune de ces révisions ne signifie que les chiffres antérieurs étaient faux ; elles signifient que l'arbre a changé. Lorsque vous utilisez l'outil de comparaison, considérez les hauteurs des arbres records comme des instantanés d'individus nommés à une date particulière, et considérez les hauteurs des plantes de jardin comme des fourchettes typiques plutôt que comme des promesses."
        ]
      },
      {
        "heading": "Les extrêmes, des arbres records à une seule fleur",
        "paragraphs": [
          "Le sommet du monde végétal appartient aux conifères et à un arbre à fleurs extraordinaire. Hyperion, un séquoia côtier de Californie, est l'être vivant connu le plus grand sur terre avec environ 116 m, et il continue de pousser. Juste derrière lui viennent Centurion, un eucalyptus de Tasmanie qui est la plus grande plante à fleurs de la Terre, et le sapin de Doerner, le plus grand sapin de Douglas et le plus grand arbre du monde qui ne soit pas un séquoia. General Sherman, le séquoia géant, est plus petit que les trois avec 83.8 m, mais il détient un autre record : par le volume de son tronc, c'est le plus grand arbre vivant à tige unique, un rappel que la hauteur et la masse sont des exploits différents.",
          "L'extrémité la plus petite de l'échelle est tout aussi surprenante. Le bambou géant, techniquement une herbe, atteint 30 m, ce qui le rend plus grand que la plupart des arbres de banlieue et en fait le moyen le plus rapide d'obtenir un écran élevé dans un jardin. Le saguaro, le plus grand cactus des États-Unis, mesure en moyenne environ 12 m à maturité et peut vivre deux cents ans, poussant si lentement qu'une plante de dix ans arrive à peine à la cheville. Et le tournesol montre jusqu'où la culture peut étirer une espèce : la même plante qui mesure 1.8 m dans un jardin typique a été cultivée jusqu'à 10.90 m par un détenteur de record dans l'Indiana, une hauteur qui dépasserait une maison de trois étages. Comparer ces extrêmes côte à côte est le moyen le plus rapide de saisir que la « hauteur d'une plante » n'est pas un seul nombre, mais tout un spectre façonné par la génétique, le climat et le temps."
        ]
      },
      {
        "heading": "Comment utiliser l'outil de comparaison pour les plantes",
        "paragraphs": [
          "Commencez par quelque chose que vous connaissez. Placez un adulte moyen à côté d'un palmier dattier pour voir pourquoi les villes d'oasis semblent ombragées et encloses, ou à côté d'un saguaro mature pour comprendre pourquoi les randonneurs du désert utilisent les cactus comme points de repère. Essayez ensuite une comparaison pratique : un bananier à côté d'une clôture de jardin, un pommier semi-nain à côté d'une maison d'un étage, ou une plante d'intérieur à côté d'une bibliothèque avant de l'acheter. L'outil maintient chaque plante sur la même ligne de base, de sorte que l'œil peut juger l'échelle honnêtement au lieu de deviner à partir de photographies, où un objectif grand-angle peut faire passer un arbuste pour un arbre.",
          "Une habitude utile consiste à comparer la même espèce à deux âges ou sous deux formes. Placez un tournesol commun à côté du tournesol record et l'écart montre ce que la culture sélective peut accomplir ; placez un jeune saguaro à côté d'un saguaro mature et l'écart montre pourquoi la conservation du désert se mesure en siècles plutôt qu'en saisons. Si vous planifiez un jardin, comparez la hauteur mature d'un arbre avec la hauteur de votre ligne de toit et de vos lignes électriques, car un arbre planté aujourd'hui pour l'ombre peut devenir un problème d'élagage dans vingt ans. L'outil ne vous dira pas quelle plante choisir, mais il vous évitera d'être surpris par la taille de celle que vous avez choisie."
        ]
      }
    ]
  },
  "sports": {
    "measurementAnchor": "Taille officielle pieds nus mesurée au combine et hauteur réglementaire de l'arceau",
    "measurementGuide": "Les tailles des athlètes proviennent de mesures officielles, et non de documents publicitaires. Depuis la saison 2019, la NBA certifie les tailles pieds nus lors des camps d'entraînement des équipes, remplaçant l'ancienne pratique consistant à inscrire les joueurs avec leurs chaussures de jeu, ce qui ajoutait généralement 2 à 5 cm. Les enregistrements en football proviennent de la FIFA et des registres des clubs, les effectifs de cricket des feuilles d'équipe de l'ICC, et les profils de gymnastique des données des fédérations nationales, de sorte que les chiffres pour un même athlète peuvent différer légèrement d'une source à l'autre selon le moment et la méthode de mesure. Les hauteurs des équipements sont un tout autre type de nombre : elles sont fixées par le règlement, de sorte qu'un arceau de basketball mesure 305 cm partout dans le monde, qu'une barre transversale de football mesure 244 cm et qu'un filet de volleyball masculin mesure 243 cm, quel que soit le joueur en présence.",
    "measurementNote": "Les tailles des athlètes sont des chiffres pieds nus mesurés au combine ; les hauteurs des équipements sont des normes réglementaires.",
    "commonHeights": [
      {
        "label": "Yao Ming",
        "note": "Ancien pivot des Houston Rockets, joueur le plus grand du Basketball Hall of Fame"
      },
      {
        "label": "Victor Wembanyama",
        "note": "Pivot des San Antonio Spurs, inscrit à 7 ft 4 in"
      },
      {
        "label": "Filet de volleyball masculin",
        "note": "Hauteur réglementaire du filet FIVB pour les compétitions masculines"
      },
      {
        "label": "Barre transversale de but de football",
        "note": "Lois du Jeu de la FIFA, bord inférieur de la barre transversale au-dessus du sol"
      },
      {
        "label": "Filet de volleyball féminin",
        "note": "Hauteur réglementaire du filet FIVB pour les compétitions féminines"
      },
      {
        "label": "Shaquille O'Neal",
        "note": "Ancien pivot de la NBA, quadruple champion NBA"
      },
      {
        "label": "Michael Jordan",
        "note": "Ancien arrière shooteur des Chicago Bulls, sextuple champion NBA"
      },
      {
        "label": "Usain Bolt",
        "note": "Sprinteur jamaïcain, détenteur des records du monde du 100 m et du 200 m"
      },
      {
        "label": "Cristiano Ronaldo",
        "note": "Attaquant portugais, parmi les meilleurs buteurs de l'histoire du football international masculin"
      },
      {
        "label": "Lionel Messi",
        "note": "Attaquant argentin, huit fois lauréat du Ballon d'Or"
      },
      {
        "label": "Muggsy Bogues",
        "note": "Joueur le plus petit de l'histoire de la NBA, 14 saisons comme meneur"
      },
      {
        "label": "Simone Biles",
        "note": "Gymnaste artistique américaine, gymnaste la plus décorée de l'histoire"
      },
      {
        "label": "Arceau de basketball réglementaire",
        "note": "Hauteur standard de l'arceau FIBA et NBA au-dessus du terrain"
      },
      {
        "label": "Piquets de cricket",
        "note": "Lois du Cricket du MCC, sommet des piquets au-dessus de la surface de jeu"
      }
    ],
    "faqs": [
      {
        "question": "La NBA mesure-t-elle les joueurs avec ou sans chaussures ?",
        "answer": "Sans chaussures, depuis 2019. Avant cette saison, les équipes inscrivaient les joueurs avec leurs chaussures de basketball, ce qui ajoutait environ un pouce ou deux et rendait les comparaisons peu fiables. La ligue certifie désormais la taille pieds nus lors des camps d'entraînement, de sorte qu'un joueur inscrit à 6 ft 6 in aujourd'hui mesure réellement cette taille pieds nus, et le nombre figurant sur l'effectif correspond à celui du combine de la draft. Les anciennes inscriptions antérieures à ce changement peuvent encore indiquer une taille légèrement supérieure à la taille pieds nus du joueur."
      },
      {
        "question": "Pourquoi un même athlète apparaît-il parfois avec des tailles différentes selon les endroits ?",
        "answer": "Parce que les nombres proviennent de moments et de méthodes différents. Un footballeur mesuré à 17 ans peut encore grandir d'un centimètre ou deux, un basketteur inscrit avec ses chaussures paraît plus grand que le même joueur pieds nus, et certaines fédérations arrondissent au pouce le plus proche tandis que d'autres arrondissent au centimètre le plus proche. Les effectifs des équipes sont également mis à jour à des moments différents. Lorsque deux sources diffèrent d'un centimètre ou deux, les deux peuvent être honnêtes ; elles mesurent simplement des choses différentes, et le chiffre pieds nus du combine est celui auquel se fier pour les comparaisons."
      },
      {
        "question": "À quelle hauteur se trouve un arceau de basketball par rapport à un but de football ?",
        "answer": "Un arceau de basketball se situe à 305 cm, soit 61 cm complets au-dessus d'une barre transversale de football à 244 cm. Cet écart est facile à ressentir dans l'outil : un basketteur de grande taille comme Yao Ming, à 229 cm, reste bien en dessous de l'arceau sur lequel il dunke, tandis qu'un gardien de but de football debout sous une barre transversale de 244 cm peut atteindre la barre en sautant. Le filet de volleyball masculin, à 243 cm, a presque exactement la même hauteur qu'une barre transversale de football, une coïncidence qui mérite d'être vue côte à côte."
      },
      {
        "question": "Pourquoi les gymnastes sont-ils petits alors que les basketteurs sont grands ?",
        "answer": "Chaque sport sélectionne le corps que sa physique récompense. La gymnastique récompense une silhouette compacte, car un athlète plus petit tourne plus vite dans les airs et a moins de distance à parcourir autour des agrès, ce qui explique pourquoi la plus grande gymnaste de tous les temps, Simone Biles, mesure 142 cm. Le basketball récompense l'allonge, car l'arceau est fixé à 305 cm et chaque centimètre de taille supplémentaire rapproche les mains du joueur de celui-ci. Aucun de ces types de corps n'est meilleur en général ; chacun est une réponse aux exigences d'un jeu particulier."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi le sport a fait de la taille une statistique officielle",
        "paragraphs": [
          "Peu de domaines enregistrent la taille humaine avec autant de soin que le sport professionnel. Chaque combine de la draft NBA mesure les espoirs pieds nus avec un stadiomètre, chaque fédération de football enregistre la taille de ses joueurs pour les programmes de match, et chaque feuille d'équipe olympique liste ses athlètes au centimètre près. La raison est pratique : la taille détermine quel poste un joueur peut occuper, comment une équipe défend et quelles tactiques ont du sens. Un entraîneur de basketball doit savoir si un débutant peut défendre de manière crédible face à un pivot de 224 cm ; un entraîneur de volleyball doit savoir si un contreur peut passer les mains au-dessus d'un filet de 243 cm ; un recruteur de football doit savoir si le centre de gravité bas d'un ailier l'aidera à changer de direction à pleine vitesse.",
          "Cette attention officielle rend les tailles sportives inhabituellement fiables par rapport aux tailles de célébrités, qui proviennent souvent d'interviews et d'estimations. Lorsque cette page indique Yao Ming à 229 cm ou Muggsy Bogues à 160 cm, il s'agit de mesures de ligue, et non d'estimations. L'écart entre eux, 69 cm, est l'un des plus importants jamais observés entre deux joueurs d'une même ligue professionnelle, et il constitue un repère utile pour toute la catégorie : placez les deux côte à côte dans l'outil et vous verrez immédiatement ce que signifient réellement « grand pour le basketball » et « petit pour le basketball », sans aucune exagération."
        ]
      },
      {
        "heading": "Pieds nus, en chaussures, ou sur l'effectif",
        "paragraphs": [
          "La confusion la plus courante au sujet des tailles sportives est la différence entre une mesure pieds nus et une taille inscrite. Pendant des années, les effectifs de la NBA présentaient les joueurs avec leurs chaussures, ce qui ajoutait quelques centimètres et faisait apparaître un joueur de 6 ft 5 in comme mesurant 6 ft 7 in. La ligue a mis fin à cette pratique en 2019 et certifie désormais les tailles pieds nus lors des camps d'entraînement, ce qui explique pourquoi certains joueurs établis de longue date ont semblé rétrécir d'un pouce du jour au lendemain sans avoir changé du tout. Si vous comparez une inscription moderne avec une ancienne carte à collectionner, le chiffre pieds nus est le chiffre honnête, et cette page l'utilise partout.",
          "D'autres sports ont leurs propres conventions. Les tailles en football proviennent d'enregistrements de fédérations et de clubs qui sont généralement effectués une seule fois et rarement remesurés, de sorte qu'un joueur qui a grandi après avoir signé adolescent peut rester inscrit avec un centimètre de moins pendant des années. Les effectifs de cricket listent les tailles à partir des registres des équipes plutôt que d'un combine, et les profils de gymnastique proviennent de fédérations nationales qui mesurent les athlètes lors des compétitions. Rien de tout cela ne rend les nombres peu fiables, mais cela signifie qu'une différence d'un ou deux centimètres entre les sources est un bruit normal plutôt qu'une contradiction. Pour les équipements, en revanche, il n'y a aucun bruit : le règlement fixe l'arceau, la barre transversale et le filet, et chaque terrain et chaque court dans le monde est censé s'y conformer."
        ]
      },
      {
        "heading": "Les extrêmes : géants, cas exceptionnels et les équipements contre lesquels ils jouent",
        "paragraphs": [
          "Les comparaisons les plus instructives en sport ne sont pas entre deux athlètes semblables, mais entre un athlète et l'équipement que son sport maintient en place. Un arceau de basketball à 305 cm pend à 76 cm au-dessus même de la tête de Yao Ming, ce qui explique pourquoi le dunk est un exploit de saut autant que de taille : les joueurs les plus grands doivent encore quitter le sol. Une barre transversale de football à 244 cm se situe à seulement 15 cm au-dessus de la tête de Shaquille O'Neal, ce qui explique pourquoi les gardiens de but, qui sont grands mais rarement aussi grands que des basketteurs, peuvent encore l'atteindre avec un saut et un étirement. Le filet de volleyball masculin à 243 cm et le filet féminin à 224 cm montrent comment un même sport ajuste son obstacle fixe à ses athlètes, et les piquets de cricket à 71 cm montrent l'extrême opposé : une cible à peine à hauteur de genou qu'un lanceur doit toucher depuis 20 mètres.",
          "Les athlètes eux-mêmes racontent la même histoire sous l'autre angle. Victor Wembanyama, à 224 cm, est la plus grande star en activité du basketball et reste à 5 cm de Yao Ming, tandis que Simone Biles, à 142 cm, mesure 18 cm de moins que Muggsy Bogues, l'homme le plus petit à avoir jamais joué en NBA, et pourtant elle est la gymnaste la plus décorée de l'histoire. Usain Bolt, à 196 cm, a brisé l'idée reçue selon laquelle les sprinteurs doivent être petits, utilisant de longues foulées pour couvrir un terrain que des rivaux plus petits devaient franchir en plus de pas. Lionel Messi, à 170 cm, et Cristiano Ronaldo, à 187 cm, montrent que la plus grande rivalité du football était aussi une différence de taille de 17 cm qui n'a jamais décidé lequel des deux était le meilleur. La taille en sport est un avantage à certains postes et un compromis à d'autres, jamais toute l'histoire."
        ]
      },
      {
        "heading": "Comment utiliser l'outil de comparaison pour le sport",
        "paragraphs": [
          "Commencez par vous-même. Ajoutez votre propre taille à côté d'un arceau de basketball et vous verrez exactement à quelle distance au-dessus de votre portée se situe la cible de 305 cm, ce qui rend l'athlétisme d'un dunk soudain concret. Ajoutez ensuite un joueur favori : tenez-vous à côté de Wembanyama pour ressentir ce que les journalistes entendent par talent physique générationnel, ou à côté de Muggsy Bogues pour voir qu'une carrière en NBA est possible à 160 cm. Les entraîneurs et les supporters utilisent la même astuce avec des équipes entières, alignant un cinq de départ pour vérifier si une équipe est réellement grande ou si elle compte simplement un pivot de grande taille entouré de meneurs de taille moyenne.",
          "Les comparaisons d'équipements sont tout aussi révélatrices. Placez un but de football à côté d'un arceau de basketball et la différence de 61 cm entre eux devient visible d'une manière que la lecture des nombres ne permet jamais tout à fait. Placez un filet de volleyball masculin à côté d'un filet féminin et l'écart de 19 cm explique pourquoi les deux jeux ont un aspect et un ressenti différents alors que le terrain a la même taille. Et placez des piquets de cricket à côté de n'importe lequel de ces éléments et vous vous souviendrez que certains sports rendent leur objet central délibérément petit, afin que ce soit l'habileté, et non la stature, qui décide du concours. L'outil maintient tout le monde et tout sur une même ligne de base, ce qui est la seule manière honnête de comparer une personne avec un équipement construit selon un règlement."
        ]
      }
    ]
  },
  "apparel": {
    "measurementAnchor": "Décalage vertical effectif ajouté à la stature pieds nus",
    "measurementGuide": "La hauteur liée à l'habillement se mesure comme le décalage vertical effectif qu'une pièce ajoute à la stature pieds nus. Pour les chaussures, cela signifie la hauteur de talon ou l'épaisseur de la plateforme sous le pied, mesurée du sol à la semelle intérieure au niveau du talon ; pour les couvre-chefs, cela signifie la hauteur de la calotte au-dessus du sommet de la tête. Un talon ne soulève que l'arrière du pied, de sorte qu'un même talon indiqué ajoute une hauteur perçue différente selon l'angle du pied et selon la mesure dans laquelle la mousse se comprime sous le poids du corps, tandis qu'une plateforme complète soulève l'ensemble du pied de manière uniforme. C'est pourquoi deux chaussures affichant la même hauteur annoncée peuvent vous laisser debout à des hauteurs visiblement différentes.",
    "measurementNote": "L'habillement ajoute de la hauteur au-dessus de la stature pieds nus : comparez le décalage, et non la chaussure elle-même.",
    "commonHeights": [
      {
        "label": "Chaussure de course standard",
        "note": "Hauteur ajoutée : hauteur de talon typique de la semelle intermédiaire en mousse ; les chaussures de course ordinaires mesurent 21-30 mm de hauteur"
      },
      {
        "label": "Chaussure habillée pour homme (Oxford)",
        "note": "Hauteur ajoutée : talon standard en cuir empilé, environ 1 inch"
      },
      {
        "label": "Talon Roper (botte de cowboy)",
        "note": "Hauteur ajoutée : talon roper plat de 1-inch, conçu pour la marche et le travail au ranch"
      },
      {
        "label": "Semelle intérieure à talon compensé",
        "note": "Hauteur ajoutée : un seul compensateur de talon amovible, à l'extrémité basse de la gamme d'inserts de 0.5-1.5 in"
      },
      {
        "label": "Chaussure de course maximaliste",
        "note": "Hauteur ajoutée : hauteur de talon de 41.3 mm mesurée en laboratoire dans la catégorie maximaliste"
      },
      {
        "label": "Botte de travail (semelle à crampons)",
        "note": "Hauteur ajoutée : hauteur de semelle de botte en cuir cousu trépointe robuste"
      },
      {
        "label": "Talon d'équitation de cowboy",
        "note": "Hauteur ajoutée : talon d'équitation traditionnel incliné de 2 inches, façonné pour tenir un étrier"
      },
      {
        "label": "Talon chaton",
        "note": "Hauteur ajoutée : petit talon fin, jusqu'à 2 inches"
      },
      {
        "label": "Chaussure élévatrice (quotidienne)",
        "note": "Hauteur ajoutée : coin interne caché ; les modèles quotidiens offrent environ 2.8 inches de rehaussement"
      },
      {
        "label": "Talon aiguille classique",
        "note": "Hauteur ajoutée : talon haut formel de mode, dans la gamme classique de 3-4 in"
      },
      {
        "label": "Haut-de-forme (calotte moderne)",
        "note": "Hauteur ajoutée au-dessus de la tête : la calotte moderne d'un haut-de-forme mesure en moyenne 5 inches (les tuyaux de poêle historiques atteignaient 8 in)"
      },
      {
        "label": "Botte à plateforme",
        "note": "Hauteur ajoutée : plateforme de défilé surélevée dans la catégorie extra-haute de 6-inch"
      }
    ],
    "faqs": [
      {
        "question": "Les chaussures vous rendent-elles vraiment plus grand, ou donnent-elles seulement l'impression de l'être ?",
        "answer": "Elles augmentent réellement votre hauteur debout mesurée, d'exactement l'épaisseur du matériau sous votre pied. Si vous mesurez 175 cm pieds nus et que vous enfilez des baskets de course avec une hauteur de 3 cm, vous mesurez 178 cm dans ces chaussures. Ce que les chaussures ne changent pas, c'est la stature propre de votre corps : retirez-les et vous revenez à 175 cm. C'est cette distinction qui explique pourquoi les médecins et les officiels sportifs mesurent la taille pieds nus, tandis que les photographes et les directeurs de casting la mesurent souvent avec les chaussures que la personne porte."
      },
      {
        "question": "Pourquoi une même hauteur de talon donne-t-elle une sensation différente selon les chaussures ?",
        "answer": "Parce que la « hauteur de talon » ne décrit que l'arrière de la chaussure. Un talon aiguille de 10 cm incline votre pied de manière abrupte, puisque l'avant-pied reste près du sol, tandis qu'une plateforme de 10 cm soulève l'ensemble du pied à niveau et paraît bien plus stable. La fermeté de la mousse compte aussi : une mousse souple se comprime sous le poids du corps, de sorte qu'une partie de la hauteur annoncée disparaît dès que vous vous tenez dessus, tandis qu'une semelle ferme en conserve presque la totalité. La longueur du pied joue également un rôle, puisque les marques ajustent légèrement la hauteur du talon selon la pointure pour maintenir des proportions stables."
      },
      {
        "question": "Quelle hauteur les chaussures élévatrices ajoutent-elles réellement ?",
        "answer": "Les chaussures élévatrices quotidiennes ajoutent généralement 2 à 3 inches grâce à un coin caché à l'intérieur de la chaussure, certains modèles spécialisés allant plus loin. Le problème est que presque tous les chiffres de rehaussement dans cette catégorie sont des affirmations du fabricant lui-même plutôt que des nombres mesurés indépendamment en laboratoire, de sorte que deux marques annonçant le même rehaussement peuvent donner des résultats visiblement différents. L'autre compromis est le confort : un coin caché plus important signifie un angle du pied plus abrupt, ce qui explique pourquoi la plupart des modèles à porter au quotidien restent autour de 2 à 3 inches."
      },
      {
        "question": "Les couvre-chefs comptent-ils dans votre taille ?",
        "answer": "Ils comptent dans votre hauteur totale jusqu'au sommet, ce qui compte pour les encadrements de porte, les photographies et toute personne se tenant à côté de vous. Une calotte moderne de haut-de-forme ajoute environ 5 inches au-dessus de la tête, de sorte qu'une personne mesurant 175 cm pieds nus atteint environ 188 cm jusqu'au sommet du chapeau. Les équipements de protection fonctionnent de la même manière en sens inverse : un casque de chantier ajoute un dégagement au-dessus du crâne plutôt que de la stature, mais la silhouette sur un canevas de comparaison grandit tout de même de cette quantité."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi les chaussures changent votre taille plus que vous ne le pensez",
        "paragraphs": [
          "Presque personne ne marche pieds nus, et pourtant presque tous les chiffres de taille que vous entendez sont des chiffres pieds nus. C'est dans cet écart que l'habillement accomplit son travail discret. Une personne mesurant 175 cm pieds nus mesure 178 cm en baskets de course, 180 cm en bottes de cowboy et 185 cm en talons aiguilles classiques, le tout sans grandir d'un millimètre. Le changement est assez important pour compter dans les situations où la taille est réellement remarquée : photographies de groupe, encadrements de porte, uniformes de travail et le débat de longue date sur la question de savoir si quelqu'un mesure « vraiment » six pieds. La plupart de ces débats sont en réalité des débats sur les chaussures, parce qu'une personne se souvient d'une mesure pieds nus et l'autre se souvient de la taille que quelqu'un semblait avoir en bottes.",
          "La confusion est compréhensible, parce que la hauteur des chaussures est rarement indiquée honnêtement. Les pages produits annoncent le talon, et non la hauteur que vous conservez. La hauteur d'une chaussure de course est mesurée sans pied dedans, de sorte que la mousse ne s'est pas encore comprimée sous votre poids. La hauteur indiquée d'un talon aiguille ignore le fait que l'avant-pied se situe beaucoup plus bas que le talon, ce qui change votre posture et la taille que vous semblez avoir pour quelqu'un qui vous fait face. Et la hauteur d'une plateforme est parfois indiquée avec la semelle extérieure et parfois sans. Le résultat est que deux personnes peuvent acheter des chaussures affichant le même nombre annoncé et finir debout à des hauteurs sensiblement différentes, et toutes deux insisteront sur le fait que l'étiquette avait raison."
        ]
      },
      {
        "heading": "Hauteurs de talon, plateformes et coins : ce qui vous soulève réellement",
        "paragraphs": [
          "Il n'existe que trois façons pour une chaussure d'ajouter de la hauteur, et elles se comportent très différemment. Une hauteur de talon soulève l'arrière du pied tandis que les orteils restent bas, ce qui explique pourquoi les talons changent votre posture, l'angle de vos mollets et votre équilibre en même temps. Plus le talon est haut, plus l'inclinaison est abrupte, ce qui explique pourquoi un talon aiguille de 10 cm ne ressemble en rien à une plateforme de 10 cm, même si les deux ajoutent le même nombre à votre hauteur debout. Une plateforme soulève l'ensemble du pied de manière uniforme, de sorte que votre cheville reste proche de son angle naturel et que le rehaussement paraît plus calme, bien que la chaussure devienne plus lourde et plus maladroite. Un coin caché, tel qu'utilisé dans les chaussures élévatrices, fait la part des choses : une partie du rehaussement se trouve à l'intérieur de la chaussure où personne ne peut le voir, et la semelle visible reste modeste, de sorte que la chaussure passe pour une chaussure ordinaire tout en ajoutant discrètement des pouces.",
          "Les nombres derrière ces conceptions sont plus réglementés que la plupart des gens ne le réalisent. World Athletics plafonne les chaussures de course de compétition à une hauteur de 40 mm, ce qui vous dit quelque chose sur la quantité de rehaussement que la mousse moderne peut offrir : les baskets de course les plus hautes mesurées en laboratoire se situent juste au-dessus de 40 mm, et la basket moyenne se situe autour de 30 mm. Cela signifie que la différence entre une basket ordinaire et la chaussure de course la plus haute du marché n'est que d'environ un centimètre, même si le marketing la fait paraître spectaculaire. Les vrais sauts proviennent des chaussures de mode et de travail, où un talon d'équitation, un talon aiguille ou une botte à plateforme peuvent ajouter deux à six fois plus que n'importe quelle basket."
        ]
      },
      {
        "heading": "Les extrêmes : des pieds nus aux plateformes de défilé",
        "paragraphs": [
          "À l'extrémité modeste, un talon de chaussure habillée d'environ 1 inch est si normal que la plupart des gens oublient qu'il existe, et un talon roper sur une botte de cowboy ajoute la même quantité tout en ayant l'air de faire partie de la conception fonctionnelle de la botte plutôt que d'un dispositif de hauteur. À l'autre extrémité, les bottes à plateforme de la catégorie 6-inch et les hauts-de-forme tuyaux de poêle historiques à 8 inches au-dessus de la tête sont des déclarations délibérées : ils existent pour être remarqués. Entre ces pôles se situent les compromis quotidiens que la plupart des gens portent réellement, des talons chatons à 2 inches aux chaussures élévatrices cachant 2 à 3 inches à l'intérieur d'une chaussure par ailleurs d'apparence ordinaire. Le schéma intéressant est que les gains de hauteur les plus extrêmes sont généralement les plus visibles, tandis que les gains les plus discrets plafonnent autour de 3 inches, parce qu'au-delà, l'angle du pied trahit l'astuce.",
          "Les couvre-chefs méritent une mention ici parce qu'ils brisent la logique habituelle. Les chaussures vous soulèvent par le bas, de sorte que votre corps reste le même et que le sol descend effectivement. Les couvre-chefs ajoutent de la hauteur par le haut, de sorte que votre corps reste le même et que votre silhouette s'étend simplement vers le haut. Un haut-de-forme ne vous rend pas plus grand dans un sens qu'un médecin reconnaîtrait, et pourtant il change chaque photographie où vous apparaissez et chaque encadrement de porte que vous franchissez. C'est pourquoi comparer l'habillement sur un canevas de hauteur est utile : cela montre la hauteur visuelle totale qu'une personne occupe dans le monde, et pas seulement le nombre figurant sur son dossier médical."
        ]
      },
      {
        "heading": "Comment utiliser l'outil de comparaison pour cette catégorie",
        "paragraphs": [
          "Commencez par une silhouette humaine à une hauteur pieds nus connue, puis placez un décalage d'habillement à côté pour voir la hauteur habillée. La comparaison la plus révélatrice est la même personne dans des chaussures différentes : une silhouette en baskets, une en bottes, une en talons aiguilles, et les écarts entre elles sont l'histoire honnête de ce que font les chaussures. Vous pouvez aussi comparer directement les types de talons, ce qui tranche les débats sur la question de savoir si un talon d'équitation ou un talon chaton ajoute davantage, et si une plateforme bat réellement un talon aiguille à hauteur indiquée égale. Rappelez-vous que chaque entrée d'habillement ici est un décalage, et non un objet autonome : un talon aiguille de 10 cm ne mesure pas 10 cm de haut à lui seul, il ajoute 10 cm à quiconque le porte, alors associez-le toujours à une figure humaine pour lire le résultat correctement."
        ]
      }
    ]
  },
  "fictional": {
    "measurementAnchor": "Canon des franchises et archives de construction de monde",
    "measurementGuide": "Les tailles fictives proviennent de la source canonique pour une version précise du personnage : une banque de données de franchise, un livre source sous licence, ou un livre de règles de jeu de rôle sur table tel que le Monster Manual de Dungeons and Dragons, qui indique généralement une moyenne pour un type de créature plutôt qu'un chiffre exact pour un individu. Un même personnage a souvent des tailles officielles différentes selon les adaptations, parce que les films redimensionnent les créatures pour l'histoire, que les jeux les rééquilibrent et que les nouvelles éditions révisent les anciens nombres. Cette page utilise un chiffre indiqué par version et nomme cette version, de sorte qu'une comparaison montre toujours de quel Kong ou de quel Godzilla il s'agit.",
    "measurementNote": "Les tailles fictives suivent la version canonique indiquée ; les adaptations d'un même personnage diffèrent souvent.",
    "commonHeights": [
      {
        "label": "Yoda",
        "note": "Banque de données Star Wars : 0.66 m"
      },
      {
        "label": "Hobbit (moyenne)",
        "note": "Prologue du Seigneur des Anneaux de Tolkien : taille moyenne d'un hobbit de 3 ft 6 in"
      },
      {
        "label": "Gandalf",
        "note": "Notes tardives de Tolkien : le magicien mesurait au moins 5 ft 6 in"
      },
      {
        "label": "Legolas",
        "note": "Guides des personnages de Tolkien : l'elfe mesure environ 6 ft"
      },
      {
        "label": "Aragorn",
        "note": "Notes de Tolkien, citées dans The Lord of the Rings: A Reader's Companion"
      },
      {
        "label": "Dark Vador (en armure)",
        "note": "Banque de données Star Wars : 2.03 m en armure complète"
      },
      {
        "label": "Chewbacca",
        "note": "Banque de données Star Wars : 2.28 m"
      },
      {
        "label": "Géant des collines (D&D 5e)",
        "note": "Le plus petit des vrais géants, avec une moyenne de 16 ft"
      },
      {
        "label": "Géant du givre (D&D 5e)",
        "note": "Avec une moyenne de 21 ft dans le classement des géants de la 5e"
      },
      {
        "label": "Géant des nuages (D&D 5e)",
        "note": "24 ft dans le classement des géants de la 5e"
      },
      {
        "label": "King Kong (1933, New York)",
        "note": "Dimensionné à 24 ft dans les scènes de New York (18 ft sur Skull Island)"
      },
      {
        "label": "Géant des tempêtes (D&D 5e)",
        "note": "Le plus grand des vrais géants, avec une moyenne de 26 ft"
      },
      {
        "label": "King Kong (Skull Island, 2017)",
        "note": "Kong adolescent, mesurant 104 ft"
      },
      {
        "label": "Godzilla (2014)",
        "note": "Mesurant 108 m dans le film de 2014"
      }
    ],
    "faqs": [
      {
        "question": "Pourquoi un même personnage a-t-il des tailles différentes dans différents films ?",
        "answer": "Parce que les cinéastes redimensionnent les créatures pour correspondre à l'histoire qu'ils racontent, et non pour correspondre à la règle d'un film précédent. Le King Kong original a été construit à 18 feet sur Skull Island et redimensionné à 24 feet une fois arrivé à New York, parce qu'il devait paraître plus grand face à la ville. Des décennies plus tard, Kong a été fixé à 104 feet dans Skull Island (2017) afin de pouvoir un jour tenir tête à un Godzilla de plus de 100 mètres. Aucun de ces chiffres n'est une erreur : chacun est la taille officielle pour sa propre version, ce qui explique pourquoi cette page nomme toujours la version à côté du nombre."
      },
      {
        "question": "Les tailles des livres de règles de jeu sur table sont-elles des mesures exactes ?",
        "answer": "Non, ce sont des moyennes pour un type de créature, et les livres de règles le disent. La tradition du Monster Manual de Dungeons and Dragons décrit un géant des collines comme mesurant environ 16 feet et un géant des tempêtes environ 26 feet, avec des géants individuels variant au-dessus et en dessous de ces chiffres. C'est une caractéristique, et non un défaut : un maître de jeu a besoin d'un géant typique pour une rencontre, et non d'un recensement de chaque géant du monde. Lorsque vous comparez un géant de livre de règles avec un humain, lisez le résultat comme « un spécimen typique de ce type », et non comme un individu nommé précis."
      },
      {
        "question": "Pourquoi les tailles de Star Wars sont-elles si précises ?",
        "answer": "Parce que la Databank officielle de Lucasfilm publie des chiffres métriques uniques pour ses personnages, tels que Yoda à 0.66 m, Dark Vador à 2.03 m en armure et Chewbacca à 2.28 m. Ces nombres proviennent de registres de production et de continuité plutôt que de descriptions en prose, de sorte qu'ils se comportent davantage comme des mesures du monde réel que comme des estimations littéraires. Le compromis est que le chiffre décrit le personnage tel qu'officiellement catalogué, ce qui peut différer de la taille propre de l'acteur : l'interprète à l'intérieur du costume n'a pas toujours la même taille que le personnage sur le papier."
      },
      {
        "question": "Puis-je comparer un kaiju avec un humain sur le même canevas ?",
        "answer": "Oui, et le résultat est justement l'intérêt : Godzilla à 108 mètres à côté d'un humain de 175 cm rend l'écart d'échelle instantanément évident d'une manière que la lecture de « 108 mètres » ne permet jamais. Le canevas ajuste tout sur une ligne de base commune, de sorte que l'humain devient une fine ligne au bas du cadre et que le kaiju le surplombe. Pour les très grandes créatures, il est utile d'ajouter un repère familier comme étape intermédiaire, tel qu'un bâtiment ou un animal de grande taille, afin que l'œil ait quelque chose à parcourir avant d'atteindre le sommet du monstre."
      }
    ],
    "editorialSections": [
      {
        "heading": "Pourquoi les tailles fictives ne sont jamais un seul nombre",
        "paragraphs": [
          "Demander quelle est la taille de King Kong, ce n'est pas poser une question complète, parce qu'il n'existe pas un seul King Kong. Le singe de 1933 était dimensionné à 18 feet sur Skull Island et à 24 feet une fois en liberté à New York, puisque les cinéastes voulaient qu'il paraisse plus grand face aux gratte-ciel que face aux arbres de la jungle. Le Kong de 2017 a été fixé à 104 feet, en partie parce qu'il était écrit comme un adolescent encore en croissance, et en partie parce que le studio savait déjà qu'il devrait un jour affronter un Godzilla de plus de 100 mètres. Godzilla lui-même a grandi au cours de sa propre histoire, de 50 mètres dans le film original de 1954 à 108 mètres dans le film de 2014 et environ 120 mètres dans les volets ultérieurs du MonsterVerse. Chacun de ces nombres est officiel pour sa propre version, et chacun contredit les autres, ce qui explique exactement pourquoi la taille fictive est un problème de catalogage plutôt qu'un problème de mesure.",
          "La même instabilité apparaît dans des endroits plus discrets. Un personnage décrit en prose comme « grand » peut être dessiné petit par un dessinateur de bande dessinée et immense par le suivant, et un jeu sur table peut réviser la taille d'une créature lorsqu'une nouvelle édition rééquilibre le jeu. Les fans débattent sans fin de ces différences, mais les débats passent généralement à côté du vrai point : la taille fictive est une décision de conception, et non un fait physique. Un réalisateur rend un monstre plus grand lorsque la scène a besoin de plus de menace, un concepteur de jeu rend un géant plus petit lorsqu'un donjon doit le faire passer par une porte, et un auteur laisse une taille vague lorsque le mystère compte plus que la mesure. Comprendre cela est la première étape pour comparer les personnages fictifs de manière sensée."
        ]
      },
      {
        "heading": "Sources canoniques : qui décide de la taille d'un personnage",
        "paragraphs": [
          "La réponse dépend de la franchise, et les franchises se répartissent en trois groupes approximatifs. Le premier groupe publie des chiffres officiels précis : la Databank Star Wars liste Yoda à 0.66 m, Dark Vador à 2.03 m en armure et Chewbacca à 2.28 m, et ces nombres sont traités comme de la continuité. Lorsqu'une telle source existe, il y a peu de place pour le débat, même s'il reste de la place pour la confusion, puisque le chiffre en armure et l'acteur sans armure sont des nombres différents et que les fans les mélangent souvent. Le deuxième groupe donne des moyennes pour un type plutôt qu'un chiffre pour un individu : la tradition de Dungeons and Dragons décrit les géants des collines à environ 16 feet, les géants du givre à 21, les géants des nuages à 24 et les géants des tempêtes à 26, étant entendu que tout géant particulier peut être plus grand ou plus petit. Le troisième groupe n'indique jamais de nombre du tout, et le chiffre que tout le monde cite provient d'une lettre d'auteur, d'une note tardive ou d'un livre compagnon publié des années plus tard.",
          "L'œuvre de Tolkien se situe dans les trois groupes, ce qui en fait un bon exemple du problème. Le prologue du Seigneur des Anneaux indique directement la taille moyenne d'un hobbit à 3 feet 6 inches, de sorte que ce chiffre est solide. Les 6 feet 6 inches d'Aragorn et les 5 feet 6 inches de Gandalf proviennent des notes ultérieures de Tolkien lui-même et du Reader's Companion, ce qui est presque aussi solide. Legolas à environ 6 feet est un chiffre de guide largement répété plutôt qu'une ligne tirée des livres, de sorte qu'il comporte un peu plus d'incertitude. Une page de comparaison responsable devrait maintenir ces distinctions visibles au lieu d'aplanir chaque chiffre au même niveau de confiance, parce qu'un lecteur qui sait quels nombres sont absolument solides et lesquels sont approximatifs fera davantage confiance à la page, et non moins."
        ]
      },
      {
        "heading": "Les extrêmes : de Yoda à Godzilla",
        "paragraphs": [
          "La catégorie fictive possède la plus large gamme de tailles de toutes les catégories de ce site, et cette gamme est son principal attrait. À l'extrémité petite, Yoda à 66 cm se tient à peine au-dessus de la taille d'un tout-petit, et pourtant il est l'une des figures les plus puissantes de son univers, ce qui est précisément la plaisanterie et l'intérêt du personnage. Un hobbit à 107 cm n'est guère plus grand, et le contraste entre la stature des hobbits et le courage des hobbits est l'un des moteurs de l'histoire de Tolkien. À l'extrémité humaine de l'échelle, Aragorn à 198 cm et Chewbacca à 228 cm ont tous deux une forme reconnaissable de personne, ce qui en fait de bons ponts : un lecteur peut imaginer Aragorn, puis imaginer Chewbacca à côté de lui, et à partir de là commencer à saisir ce que signifie un géant.",
          "Puis l'échelle s'ouvre en grand. Un géant des collines à 488 cm mesure déjà environ trois fois la taille d'un humain, et l'échelle des géants grimpe régulièrement à travers les géants du givre, des nuages et des tempêtes jusqu'à atteindre 792 cm, soit environ la hauteur d'une maison de deux étages. King Kong à 104 feet dans sa version de 2017 représente environ quatre fois cela encore, et Godzilla à 108 mètres mesure plus de trois fois la taille de Kong en plus de cela. Ce qui est intéressant dans cette échelle, c'est que chaque marche a été conçue par quelqu'un qui pensait à la marche précédente : le géant des tempêtes est grand par rapport à un humain, Kong est grand par rapport à un géant, et Godzilla est grand par rapport à Kong. Les empiler sur un même canevas montre une chaîne de surenchère délibérée qu'aucun nombre isolé ne peut transmettre à lui seul."
        ]
      },
      {
        "heading": "Comment utiliser l'outil de comparaison pour cette catégorie",
        "paragraphs": [
          "La comparaison fictive la plus utile est rarement fictif contre fictif. Placez d'abord un personnage fictif à côté d'un humain, parce que l'humain est l'unité que votre œil comprend déjà, et l'écart entre eux est le fait que vous cherchez à apprendre. Un géant des tempêtes à côté d'un homme moyen vous en dit plus qu'un géant des tempêtes à côté d'un géant des nuages, parce que l'homme est familier et que le géant ne l'est pas. Une fois ce repère établi, ajoutez une deuxième figure fictive pour voir la relation entre les deux inventions, puis, pour les très grandes créatures, ajoutez un bâtiment ou un véhicule comme échelon intermédiaire afin que l'œil ait un chemin à gravir.",
          "Deux habitudes rendent les comparaisons fictives beaucoup plus fiables. D'abord, vérifiez toujours quelle version vous comparez, puisque Kong à lui seul possède au moins trois tailles officielles et que Godzilla en possède plusieurs, et que mélanger les versions produit silencieusement des absurdités. Ensuite, rappelez-vous qu'un chiffre de livre de règles est une moyenne pour un type : votre géant des collines peut mesurer un pied de plus ou de moins que la moyenne de 16-foot, et ce n'est pas une erreur dans l'outil, c'est ainsi que la source a été écrite. Utilisé avec ces deux réserves, le canevas devient quelque chose qu'aucun paragraphe ne peut remplacer : une image unique de la manière dont les mondes inventés se mesurent au monde réel."
        ]
      }
    ]
  },
};

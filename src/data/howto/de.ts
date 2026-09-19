import type { HowToGuideData } from './types';

export const deHowToGuide: HowToGuideData = {
  locale: 'de',
  title: 'So nutzen Sie das Größenvergleichs-Tool',
  subtitle: 'Eine vollständige Schritt-für-Schritt-Anleitung zum Vergleichen von Menschen, Prominenten, Anime-Figuren, Tieren und Objekten mit visueller mathematischer Präzision.',
  badge: 'Benutzerhandbuch',
  metaDescription: 'Erfahren Sie, wie Sie das Größenvergleichs-Tool von HowHeight nutzen, um Menschen, Tiere, Objekte und Figuren zu vergleichen, Unterschiede zu verstehen und Ergebnisse zu teilen.',
  readTime: '8 Min. Lesezeit',
  tocTitle: 'Inhaltsverzeichnis',
  intro: {
    lead: 'HowHeight ist eine interaktive visuelle Messplattform, die Menschen dabei hilft, die tatsächliche physische Größe von allem intuitiv zu erfassen.',
    paragraphs: [
      'Ganz gleich, ob Sie neugierig sind, wie Sie neben Ihrem Lieblingsschauspieler aussehen würden, Größenmodelle für ein Animationsprojekt entwerfen, Schulklassen biologische Proportionen vermitteln oder einen Roman verfassen: Zahlen allein können echte körperliche Präsenz nur selten veranschaulichen. Zu lesen, dass jemand 188 cm groß ist, bleibt abstrakt; dieselbe Gestalt direkt neben einen Türrahmen, einen Gefährten oder einen Alltagsgegenstand zu stellen, erweckt Dimensionen augenblicklich zum Leben.',
      'Unser universelles Größenvergleichs-Tool schließt die Lücke zwischen reinen Messwerten und menschlicher Wahrnehmung. Indem jedes Modell auf einer gemeinsamen 0-cm-Bodenlinie verankert und streng geometrisch skaliert wird, schließt HowHeight perspektivische Verzerrungen aus. Diese Anleitung führt Sie durch alle Funktionen der Plattform – von der Suche über Drag-and-Drop bis hin zu Differenzstatistiken und hochauflösenden Chart-Exporten.',
    ],
  },
  sections: [
    {
      id: 'what-is-howheight',
      heading: '1. Was ist ein Größenvergleichs-Tool?',
      paragraphs: [
        'Ein Größenvergleichs-Tool ist ein interaktiver Bildrechner, der zwei oder mehr messbare Wesen und Objekte nebeneinander im exakt identischen Maßstab darstellt. Anstatt sich vorzustellen, was 15 Zentimeter Unterschied in der Praxis bedeuten, erzeugt das Werkzeug anatomisch proportionierte Silhouetten.',
        'Auf HowHeight umfasst das Repertoire geprüfte Kategorien: Männer und Frauen, weltbekannte Prominente, Anime- und Manga-Charaktere, Filmhelden, Haus- und Wildtiere, Architektur- und Haushaltsobjekte, Pflanzen und Fabelwesen. Jede Gestalt wird an einem gemeinsamen vertikalen Höhenlineal gemessen.',
      ],
      callout: {
        type: 'info',
        text: 'Visueller Größenvergleich bedeutet nicht Schätzen, sondern das Übertragen geprüfter Dimensionen in eine unverfälschte visuelle Form.',
      },
    },
    {
      id: 'how-to-start',
      heading: '2. In 7 einfachen Schritten zum Vergleich',
      paragraphs: [
        'Der Einstieg auf HowHeight erfordert keine Registrierung, keine Software-Installation und keine Vorkenntnisse.',
      ],
      steps: [
        {
          number: 1,
          title: 'Arbeitsbereich öffnen',
          description: 'Rufen Sie HowHeight.org auf oder navigieren Sie direkt zur Seite /compare/ in Ihrem Browser.',
        },
        {
          number: 2,
          title: 'Vergleichsbühne lokalisieren',
          description: 'Links finden Sie die Modellauswahl und rechts die breite Vergleichsbühne mit dem vertikalen Maßband.',
        },
        {
          number: 3,
          title: 'Erste Figur suchen oder wählen',
          description: 'Nutzen Sie die Suchleiste oder die Kategorietasten, um eine Person, einen Prominenten oder ein Tier zu wählen.',
        },
        {
          number: 4,
          title: 'Zur Bühne hinzufügen',
          description: 'Klicken Sie auf die Karte oder den Button „+ Add“. Die Figur erscheint sofort auf der 0-cm-Bodenlinie.',
        },
        {
          number: 5,
          title: 'Zweite Figur auswählen',
          description: 'Suchen Sie nach einem Vergleichspartner oder einem Benchmark-Objekt wie einem Auto oder Basketballkorb.',
        },
        {
          number: 6,
          title: 'Ergebnis betrachten',
          description: 'Das Höhenlineal passt sein Skalenmaximum automatisch an, sodass alle Figuren proportional dargestellt werden.',
        },
        {
          number: 7,
          title: 'Anpassen oder teilen',
          description: 'Verschieben Sie Figuren frei, wechseln Sie zwischen cm und ft/in, prüfen Sie die Höhendifferenz oder kopieren Sie den Freigabelink.',
        },
      ],
    },
    {
      id: 'searching-entities',
      heading: '3. Durchsuchen der universellen Modellbibliothek',
      paragraphs: [
        'HowHeight bietet einen kuratierten Katalog mit Tausenden verifizierten Einträgen. Die Schnellsuche und Kategoriefilter ermöglichen ein zügiges Auffinden.',
        'Sie können nach Kategorien (Prominente, Anime, Tiere, Objekte, Sport usw.) filtern oder direkt Namen, Berufe oder Spitznamen eingeben.',
        'Sollte eine Figur noch nicht im Katalog sein, nutzen Sie das benutzerdefinierte Formular: Geben Sie Namen, genaue Größe in cm oder ft/in, Geschlecht und Farbe ein, um die eigene Figur direkt auf der Bühne zu platzieren.',
      ],
      link: {
        text: 'Promi-Größenverzeichnis durchstöbern →',
        href: '/celebrity-height-comparison/',
      },
    },
    {
      id: 'adding-multiple-entities',
      heading: '4. Mehrere Figuren gleichzeitig vergleichen',
      paragraphs: [
        'Häufig möchte man mehr als nur zwei Personen vergleichen: eine ganze Familie, ein Sportteam oder das Größenverhältnis zwischen Mensch, Hund, Pferd und Elefant.',
        'HowHeight erlaubt es, 2 bis über 20 Figuren gleichzeitig aufzustellen. Auf Desktop-Bildschirmen wird der Platz großzügig verteilt; auf Smartphones sorgt ein sanftes horizontales Scrollen dafür, dass jede Silhouette scharf und ungestaucht bleibt.',
      ],
      callout: {
        type: 'tip',
        text: 'Behalten Sie bei großen Figurenreihen stets eine Standardfigur (z. B. den Durchschnittsmann mit 175 cm oder eine 210-cm-Tür) auf der Bühne, um ein intuitives visuelles Ankermaß zu haben.',
      },
    },
    {
      id: 'dragging-arranging',
      heading: '5. Figuren anordnen: Drag-and-Drop auf der Bühne',
      paragraphs: [
        'Neu hinzugefügte Modelle reihen sich zunächst der Reihe nach auf. Ein aussagekräftiger visueller Vergleich erfordert jedoch oft eine individuelle Anordnung.',
        'Auf HowHeight können Sie jede Figur mit der Maus anklicken und festhalten (oder auf dem Smartphone mit dem Finger ziehen) und entlang der 0-cm-Bodenlinie verschieben. Stellen Sie zwei Kontrahenten Schulter an Schulter oder platzieren Sie ein Haustier neben seinen Halter.',
        'Über die Werkzeugleiste können Sie die gesamte Reihe zudem mit einem Klick nach Größe auf- oder absteigend sortieren.',
      ],
    },
    {
      id: 'resizing-scale',
      heading: '6. Größenanpassung vs. visueller Zoom-Faktor',
      paragraphs: [
        'Es ist wichtig, zwischen der echten Körpergröße einer Figur und der Vergrößerungsstufe (Zoom) der Leinwand zu unterscheiden.',
        'Klicken Sie auf eine Figur, öffnet sich das Inspektor-Panel. Hier können Sie die reale Höhe über Zahlenfelder oder den Schieberegler modifizieren. Ändern Sie einen Wert von 175 auf 190 cm, wächst das Modell vom Boden aus nach oben.',
        'Die Zoomtasten (+ / -) vergrößern oder verkleinern hingegen die gesamte Darstellung einheitlich, ohne die realen mathematischen Maße oder die relativen Proportionen zu verändern.',
      ],
      callout: {
        type: 'note',
        text: 'Modelle wachsen stets vertikal vom Boden empor. Die Füße bleiben ausnahmslos auf der 0-cm-Grundlinie verankert.',
      },
    },
    {
      id: 'height-units',
      heading: '7. Maßeinheiten: Metrisch (cm) und Imperial (Fuß & Zoll)',
      paragraphs: [
        'Weltweit teilen sich Größenangaben in das metrische System (Meter und Zentimeter) und das angloamerikanische Maßsystem (Fuß und Zoll). HowHeight unterstützt beide nahtlos.',
        'Am oberen Rand des Lineals können Sie zwischen „cm“ und „ft“ umschalten. Im Imperial-Modus zeigt das Lineal Hauptmarkierungen alle 12 Zoll (1 Fuß) und Zwischenstufen alle 6 Zoll. Im metrischen Modus erscheinen Schritte von 20 oder 50 cm.',
        'Die Umrechnung folgt dem internationalen Standard: 1 Zoll = exakt 2,54 cm; 1 Fuß = exakt 30,48 cm.',
      ],
      link: {
        text: 'Größenunterschied-Rechner ausprobieren →',
        href: '/height-difference-calculator/',
      },
    },
    {
      id: 'understanding-visual-result',
      heading: '8. So lesen Sie die Vergleichsbühne und das Lineal richtig',
      paragraphs: [
        'Die HowHeight-Vergleichsbühne ist für eine mühelose Ablesbarkeit strukturiert:',
        '1. Die 0-cm-Bodenlinie: Die durchgehende Linie am unteren Bildrand stellt den Fußboden dar und gewährleistet faire Bedingungen.',
        '2. Das vertikale Höhenlineal: Es errechnet dynamisch den nötigen Höchstwert basierend auf der größten Figur plus Kopffreiheit.',
        '3. Beschriftungen und Badges: Jedes Modell zeigt seinen Namen, seine Kategorie und die genaue Höhe in der gewählten Maßeinheit.',
        '4. Kontrastreiche Silhouetten: Gut unterscheidbare Farben und dezente Transparenzen stellen sicher, dass auch überlappende Figuren erkennbar bleiben.',
      ],
    },
    {
      id: 'height-difference',
      heading: '9. Den Größenunterschied im Detail verstehen',
      paragraphs: [
        'Befinden sich exakt zwei Figuren auf der Bühne, generiert HowHeight automatisch eine Differenz-Infokarte.',
        'Vergleicht man etwa einen Mann mit 180 cm und eine Frau mit 165 cm, zeigt das System: „Person A ist 15 cm (5,9 Zoll) größer als Person B“. Beide Werte werden auf eine Dezimalstelle gerundet.',
        'Ab drei Figuren schaltet die Ansicht auf eine Übersichtstabelle um, die das größte, das kleinste und das Durchschnittsmaß der Gruppe zusammenfasst.',
      ],
    },
    {
      id: 'comparing-people',
      heading: '10. Menschen, Paare und Prominente vergleichen',
      paragraphs: [
        'Das Vergleichen von Partnern vor Hochzeitsfotos oder das Gegenüberstellen eigener Maße mit denen von Spitzensportlern gehört zu den beliebtesten Anwendungen.',
        'Unsere menschlichen Modelle besitzen geschlechtsspezifische anatomische Proportionen (Schulterbreite, Rumpfverhältnis und Haltung) bei absolut identischer Skalierung. Auch Vergleiche mit historischen Persönlichkeiten sind möglich.',
      ],
      link: {
        text: 'Menschliche Größen-Perzentile einsehen →',
        href: '/people-height-comparison/',
      },
    },
    {
      id: 'comparing-animals',
      heading: '11. Die Tierwelt im Maßstab: Von der Katze bis zum Giganten',
      paragraphs: [
        'In Lexika sind Tierbilder selten maßstabsgetreu nebeneinander abgebildet: Ein Insekt wirkt oft so groß wie ein Raubtier.',
        'HowHeight stellt Tiere in denselben Maßstab wie den Menschen. Stellen Sie eine Hauskatze (25 cm) neben einen Hund (60 cm) oder vergleichen Sie sich mit einem Reitpferd (160 cm) und einem afrikanischen Elefanten (330 cm).',
      ],
      link: {
        text: 'Tier-Größenvergleiche aufrufen →',
        href: '/animal-height-comparison/',
      },
    },
    {
      id: 'comparing-objects',
      heading: '12. Alltagsgegenstände, Fahrzeuge und Bauwerke',
      paragraphs: [
        'Maße werden erst greifbar, wenn man sie mit vertrauten Objekten abgleicht. Eine 2,4 Meter hohe Skulptur wird sofort vorstellbar, wenn man sie neben einen Standard-Türrahmen (210 cm) stellt.',
        'Unsere Objektkategorie umfasst Möbel, Fahrzeuge (Pkw, Busse, Fahrräder) und Sportgeräte wie den Basketballkorb (305 cm), was Architekten und Planern wertvolle Dienste leistet.',
      ],
      link: {
        text: 'Alltagsgegenstände vergleichen →',
        href: '/object-height-comparison/',
      },
    },
    {
      id: 'anime-fictional-characters',
      heading: '13. Anime-Charaktere und fiktive Helden',
      paragraphs: [
        'Kanonische Körpergrößen aus Mangas und Comics sorgen häufig für Debatten. In gezeichneten Panels erschweren wechselnde Perspektiven den echten Vergleich.',
        'Auf HowHeight können Sie Helden wie Goku, Naruto oder Levi Ackerman direkt nebeneinanderstellen oder gigantische Mechas mit gewöhnlichen Menschen vergleichen.',
      ],
      link: {
        text: 'Anime-Größenvergleiche entdecken →',
        href: '/anime-height-comparison/',
      },
    },
    {
      id: 'using-the-result',
      heading: '14. Verwendung und Auswertung des fertigen Vergleichs',
      paragraphs: [
        'Nachdem Sie Ihre Figuren wunschgemäß aufgestellt haben, stehen Ihnen praktische Funktionen zur Verfügung:',
        '• PNG-Bild herunterladen: Klicken Sie auf „Download Chart“, um eine hochauflösende PNG-Grafik mit transparentem oder sauberem Hintergrund zu speichern.',
        '• Statistiken analysieren: Prüfen Sie Prozentunterschiede und Durchschnittswerte im unteren Infobereich.',
        '• Ansicht anpassen: Schalten Sie den Dunkelmodus für augenschonendes Betrachten ein oder aktivieren Sie die Rasterlinien für millimetergenaue Peilung.',
      ],
    },
    {
      id: 'sharing-comparisons',
      heading: '15. Sofortige Link-Freigabe ohne Benutzerkonto',
      paragraphs: [
        'Das Teilen sollte mühelos funktionieren, ohne dass Empfänger ein Konto erstellen oder sich anmelden müssen.',
        'Ein Klick auf „Share“ codiert die gesamte Aufstellung (alle Figuren, Namen, Maße, Farben und Positionen) in einen kompakten URL-Link und kopiert ihn in die Zwischenablage.',
        'Jeder Empfänger sieht beim Öffnen exakt dieselbe Ansicht in Echtzeit.',
      ],
      callout: {
        type: 'tip',
        text: 'Geteilte Links sind vollkommen autark. Sie hängen von keiner Datenbank ab und funktionieren dauerhaft.',
      },
    },
    {
      id: 'mobile-experience',
      heading: '16. Optimiert für Smartphone, Tablet und Desktop',
      paragraphs: [
        'HowHeight setzt auf ein flexibles Responsive Design:',
        '• Touch-Steuerung: Das Verschieben von Figuren und das Zoomen per Fingergeste reagiert sofort und ruckelfrei.',
        '• Einklappbare Menüs: Auf kleinen Bildschirmen weichen Menüs in praktische Einschübe, damit der Blick auf die Figuren frei bleibt.',
        '• Horizontales Wischen: Bei vielen Figuren auf dem Smartphone wischen Sie mühelos seitwärts durch die Szene.',
      ],
    },
    {
      id: 'why-visual-matters',
      heading: '17. Warum visueller Größenvergleich so wirksam ist',
      paragraphs: [
        'Das menschliche Gehirn erfasst räumliche Verhältnisse vor allem visuell. „160 cm“ und „185 cm“ als Zahlen zeigen zwar, wer größer ist, vermitteln aber nicht das Gefühl eines 25 cm großen Unterschieds.',
        'Der visuelle Vergleich aktiviert unsere Tiefenwahrnehmung und zeigt sofort, dass die Schultern der größeren Person auf Höhe des Kinns der kleineren liegen.',
      ],
    },
    {
      id: 'numbers-vs-visuals',
      heading: '18. Zahlen und Bilder: Die perfekte Kombination',
      paragraphs: [
        'Weder isolierte Zahlenkolonnen noch unmaßstäbliche Zeichnungen genügen für sich allein. Tabellen fehlt die Anschaulichkeit; Skizzen ohne Maßband können täuschen.',
        'HowHeight vereint beides: Exakte mathematische Messwerte kombiniert mit einer verlässlichen Silhouette auf fester Bodenlinie.',
      ],
    },
    {
      id: 'data-accuracy',
      heading: '19. Datenintegrität und transparente Quellen',
      paragraphs: [
        'Wir legen großen Wert auf verlässliche Quellen. Promi-Größen stammen aus offiziellen Sportvermessungen, medizinischen Daten und verifizierten Interviews.',
        'Tier- und Pflanzenmaße spiegeln biologische Durchschnittswerte erwachsener Exemplare wider. Gegenstände folgen internationalen Normen (ISO, Sportverbände).',
        'Fiktive Daten aus offiziellen Nachschlagewerken werden transparent als solche deklariert. Wir erfinden keine Zahlen.',
      ],
      link: {
        text: 'Mehr über unsere Methodik und Messstandards erfahren →',
        href: '/about/',
      },
    },
    {
      id: 'tips-for-better-comparisons',
      heading: '20. Praktische Tipps für aussagekräftige Grafiken',
      paragraphs: [
        'So erzielen Sie die besten visuellen Resultate:',
        '1. Nutzen Sie Kontrastfarben: Weisen Sie benachbarten Figuren unterschiedliche Farben zu, um Konturen sofort zu trennen.',
        '2. Bauen Sie einen Anker ein: Fügen Sie bei Fantasy-Wesen immer einen 175-cm-Normalmenschen oder eine Tür hinzu.',
        '3. Wählen Sie die passende Einheit: Nutzen Sie cm für europäische oder ft/in für US-orientierte Zielgruppen.',
        '4. Nach Größe sortieren: Nutzen Sie die Sortierfunktion, um Abstufungen innerhalb einer Gruppe hervorzuheben.',
      ],
    },
    {
      id: 'example-workflow',
      heading: '21. Anwendungsbeispiel: Ein Superhelden-Team aufstellen',
      paragraphs: [
        'Nehmen wir an, Sie analysieren die Dimensionen von Comicfiguren:',
        'Fügen Sie zunächst einen 175 cm großen Menschen als Basis ein. Wählen Sie dann einen 190 cm großen Helden in Rot und einen 230 cm großen Riesen in Schiefergrau. Ziehen Sie den Menschen zwischen beide Gestalten. Klicken Sie auf „Download Chart“, um die PNG-Grafik zu sichern, oder teilen Sie den Link in Ihrer Fangruppe.',
      ],
    },
    {
      id: 'who-can-use',
      heading: '22. Für wen ist dieses Tool gedacht?',
      paragraphs: [
        'HowHeight richtet sich an ein vielseitiges weltweites Publikum:',
        '• Schüler und Lehrkräfte: Zur Veranschaulichung in Biologie, Physik und Geometrie.',
        '• Autoren und Schriftsteller: Für glaubwürdige Interaktionen und Blickachsen zwischen Charakteren.',
        '• Zeichner und Animatoren: Zur Erstellung maßstabsgetreuer Modellbögen vor dem Zeichnen.',
        '• Cosplayer: Für die Anpassung von Kostümproportionen.',
        '• Content Creator: Für anschauliche Grafiken in Artikeln und Videos.',
        '• Neugierige Entdecker: Um der Frage nachzugehen: „Wie groß ist das wirklich?“',
      ],
    },
    {
      id: 'faq-reference',
      heading: '23. Häufige Fragen und technische Details',
      paragraphs: [
        'Haben Sie Fragen zur Browser-Kompatibilität oder den Berechnungsformeln? Unser ausführlicher FAQ-Bereich beantwortet alle technischen Details.',
      ],
    },
    {
      id: 'final-cta',
      heading: '24. Starten Sie Ihren ersten Vergleich noch heute',
      paragraphs: [
        'Bereit, reale Dimensionen mit eigenen Augen zu sehen? Unser Größenvergleichs-Tool ist schnell, interaktiv und völlig kostenlos. Wählen Sie Ihre Modelle und entdecken Sie, wie die Welt im Maßstab zusammenpasst.',
      ],
    },
  ],
  faqTransition: {
    badge: 'Noch Fragen?',
    heading: 'Häufig gestellte Fragen (FAQ) durchstöbern',
    text: 'Erfahren Sie mehr über unsere Skalierungsalgorithmen, Einheitenumrechnungen und die universelle Rendering-Engine.',
    ctaText: 'Alle häufigen Fragen ansehen',
    ctaHref: '/#faq',
  },
  finalCta: {
    heading: 'Bereit für den echten Größenvergleich?',
    description: 'Starten Sie das interaktive Tool jetzt. Vergleichen Sie Menschen, Stars, Anime-Figuren, Tiere und Gegenstände in Echtzeit.',
    buttonText: 'Größenvergleich starten',
    buttonHref: '/compare/',
    secondaryText: 'Größenvergleichstabelle ansehen',
    secondaryHref: '/height-comparison-chart/',
  },
};

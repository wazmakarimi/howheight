import type { CategoryLocaleContent } from './types';

export const CATEGORY_CONTENT_DE: Record<string, CategoryLocaleContent> = {
  people: {
    measurementAnchor: 'Scheitel bis Sohle (barfüßige Standgröße)',
    measurementGuide: 'Die Körpergröße des Menschen wird als barfüßige Standgröße gemessen: Die Person steht aufrecht auf einer ebenen Fläche, die Fersen berühren sich, der Rücken liegt an einem Stadiometer an, der Kopf wird so gehalten, dass die Blicklinie horizontal verläuft, und der Abstand wird vom Boden bis zum höchsten Punkt des Schädels (dem Vertex) abgelesen. Messungen werden nach Möglichkeit morgens vorgenommen, weil sich die Wirbelsäule im Laufe des Tages leicht komprimiert und ein Mensch abends etwa ein bis zwei Zentimeter kleiner messen kann als nach dem Aufwachen. Nationale Erhebungen wie das NHANES-Programm der CDC arbeiten mit geschulten Untersuchern und kalibrierten Stadiometern statt mit Selbstauskünften, weil Menschen ihre eigene Größe auf Nachfrage tendenziell etwas übertreiben.',
    measurementNote: 'Die Körpergröße des Menschen wird barfuß gemessen, vom Scheitel bis zu den Sohlen, in aufrechter Haltung.',
    commonHeights: [
      { label: 'Globaler Durchschnitt Männer', note: 'Weltweiter Median der Körpergröße erwachsener Männer' },
      { label: 'Globaler Durchschnitt Frauen', note: 'Weltweiter Median der Körpergröße erwachsener Frauen' },
      { label: 'Niederländischer Durchschnitt Männer', note: 'Höchster nationaler Männerdurchschnitt, laut Daten des niederländischen CBS und von NCD-RisC' },
      { label: 'Niederländischer Durchschnitt Frauen', note: 'Höchster nationaler Frauendurchschnitt, laut Daten des niederländischen CBS und von NCD-RisC' },
      { label: 'US-Durchschnitt Frauen', note: 'Von der CDC im NHANES gemessener Mittelwert für erwachsene Frauen' },
      { label: 'Indischer Durchschnitt Männer', note: 'Runden der National Family Health Survey, erwachsene Männer' },
      { label: 'Indischer Durchschnitt Frauen', note: 'Runden der National Family Health Survey, erwachsene Frauen' },
      { label: '95. Perzentil Männer', note: 'Nur etwa 1 von 20 erwachsenen Männern erreicht diese Größe oder mehr' },
      { label: '95. Perzentil Frauen', note: 'Nur etwa 1 von 20 erwachsenen Frauen erreicht diese Größe oder mehr' },
      { label: 'Robert Wadlow', note: 'Größter jemals verifizierter Mensch, gemessen am 27. Juni 1940' },
      { label: 'Sultan Kosen', note: 'Größter lebender Mann, verifiziert von Guinness World Records' },
      { label: 'Chandra Bahadur Dangi', note: 'Kleinster jemals verifizierter Erwachsener, gemessen 2012 in Kathmandu' },
      { label: 'Jyoti Amge', note: 'Kleinste lebende Frau, verifiziert von Guinness World Records' },
    ],
    faqs: [
      {
        question: 'Warum ist meine Größe morgens und abends leicht unterschiedlich?',
        answer: 'Ihre Wirbelsäule wird im Laufe des Tages komprimiert. Die Bandscheiben zwischen den Wirbeln verlieren unter Schwerkraft und Belastung etwas Flüssigkeit, sodass die meisten Erwachsenen abends etwa ein bis zwei Zentimeter kleiner messen als nach dem Aufwachen. Das ist normal und vorübergehend; die Bandscheiben nehmen über Nacht im Liegen wieder Flüssigkeit auf. Deshalb bevorzugen Kliniken und nationale Erhebungen Morgenmessungen, wenn sie einen einheitlichen, vergleichbaren Wert wollen.',
      },
      {
        question: 'Was ist ein Perzentil, und warum ist es wichtiger als der Durchschnitt?',
        answer: 'Ein Perzentil sagt Ihnen, wo Sie innerhalb einer Bevölkerung stehen. Wenn Sie für Ihr Geschlecht im 75. Perzentil liegen, sind Sie größer als etwa 75 Prozent der Menschen wie Sie und kleiner als etwa 25 Prozent. Durchschnittswerte allein verbergen diese Streuung: Zwei Länder können einen ähnlichen Durchschnitt haben und trotzdem sehr unterschiedliche Spannweiten aufweisen. Perzentile sind das Werkzeug, mit dem Ärzte und Forscher beurteilen, ob das Wachstum eines Kindes im Plan liegt, weil sie Gleiches mit Gleichem vergleichen statt mit einer einzigen Zahl.',
      },
      {
        question: 'Warum sind Niederländer die größten Menschen der Welt?',
        answer: 'Niederländische Männer messen im Durchschnitt etwa 183 cm und niederländische Frauen etwa 170 cm – die höchsten nationalen Durchschnittswerte überhaupt. Militärische Aufzeichnungen zeigen, dass niederländische Männer in den vergangenen 200 Jahren rund 20 cm zugelegt haben, ein Anstieg, den Forscher eher mit besserer Ernährung in der Kindheit, flächendeckender Gesundheitsversorgung und steigendem Lebensstandard in Verbindung bringen als mit einer einzelnen genetischen Veränderung. Der Zuwachs hat sich seit den 1980er Jahren abgeflacht, was darauf hindeutet, dass die Bevölkerung unter den heutigen Bedingungen nahe an ihrer praktischen Obergrenze sein könnte.',
      },
      {
        question: 'Unterscheiden sich Männer und Frauen wirklich um einen festen Betrag in der Größe?',
        answer: 'Im Durchschnitt sind erwachsene Männer weltweit etwa 13 bis 14 cm größer als erwachsene Frauen, ein Unterschied, der durch längere Wachstumsphasen bei Jungen entsteht: Jungen wachsen typischerweise etwa zwei Jahre länger als Mädchen, bevor sich ihre Wachstumsfugen schließen. Die Verteilungen überschneiden sich jedoch stark. Eine Frau im 95. Perzentil (etwa 173 cm) ist größer als ungefähr die Hälfte aller Männer, sodass die Durchschnittswerte Bevölkerungen beschreiben, nicht Einzelpersonen, und über einen konkreten Menschen, dem Sie begegnen, nichts Verlässliches aussagen.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum die gewöhnliche menschliche Größe einen Vergleich wert ist',
        paragraphs: [
          'Die Körpergröße fühlt sich auf eine Weise persönlich an wie kaum eine andere Messgröße. Menschen kennen ihre eigene Größe auf den Zentimeter, streiten darüber, runden sie in Formularen auf und bemerken sie in dem Moment, in dem sie einen Raum betreten. Das liegt daran, dass Größe eine der wenigen körperlichen Eigenschaften ist, die auf einen Blick sichtbar, aus der Entfernung vergleichbar und zugleich mit sozialer Bedeutung aufgeladen ist. Ein Vergleichstool bewährt sich hier nicht dadurch, dass es eine Zahl zeigt, sondern dadurch, dass es den Abstand zeigt: Der Unterschied zwischen 175 cm und 183 cm ist aus bloßen Ziffern schwer zu fühlen, doch sobald zwei Figuren auf derselben Grundlinie stehen, werden acht Zentimeter zu einem sichtbaren Schritt nach oben, den jeder ohne jede Rechnung ablesen kann.',
          'Der andere Grund, warum diese Kategorie zählt, ist, dass der „Durchschnitt" ein bewegliches Ziel ist. Der globale Median der Männer von etwa 175 cm und der globale Median der Frauen von etwa 162 cm verbergen eine enorme Variation zwischen den Bevölkerungen. Ein niederländischer Mann mit 183 cm ist zu Hause unauffällig, würde aber in einer Menschenmenge in Indien auffallen, wo der Männerdurchschnitt bei etwa 165 cm liegt. Sich mit einem einzigen Weltdurchschnitt zu vergleichen, sagt Ihnen daher sehr wenig; der Vergleich mit der richtigen Bevölkerung, dem richtigen Perzentil und dem richtigen Geschlecht sagt Ihnen eine ganze Menge. Genau diesen Vergleich soll diese Seite ermöglichen.',
        ],
      },
      {
        heading: 'Wie Größe tatsächlich gemessen wird – und warum sich kleine Fehler einschleichen',
        paragraphs: [
          'Eine korrekte Messung der Standgröße ist ein kleines Ritual mit strengem Protokoll. Die Person zieht die Schuhe aus, steht mit geschlossenen Fersen und geradem Rücken an einem senkrechten Stadiometer und blickt geradeaus, sodass der Kopf in der sogenannten Frankfurter Ebene sitzt, wie Anthropometristen es nennen. Der Messende senkt ein horizontales Kopfstück, bis es gerade den Scheitel des Schädels berührt, und liest den Wert ab. Jeder Teil dieses Rituals existiert, um einen bestimmten Fehler auszuschalten: Schuhe fügen zwei bis drei Zentimeter hinzu, eine krumme Haltung nimmt mehrere weitere weg, und ein geneigter Kopf kann den Messwert um einen Zentimeter in die eine oder andere Richtung verschieben.',
          'Selbst bei perfekter Technik bewegt sich die Zahl im Laufe des Tages. Die Bandscheiben werden unter der Schwerkraft komprimiert, sodass Abendmessungen etwa ein bis zwei Zentimeter unter den Morgenwerten liegen. Selbst angegebene Größen laufen in die andere Richtung: Menschen runden auf, erinnern sich an ihre Morgengröße oder nennen den Wert aus ihrem Führerschein, der Jahre alt sein kann. Nationale Erhebungen lösen dieses Problem, indem sie messen statt fragen, mit geschulten Untersuchern und kalibrierten Geräten. Wenn Sie die Figuren auf dieser Seite vergleichen, vergleichen Sie gemessene Werte oder Werte in Erhebungsqualität, keine Schätzungen – weshalb ein Abstand von zwei oder drei Zentimetern zwischen zwei Einträgen real ist und Beachtung verdient, statt Rauschen zu sein.',
        ],
      },
      {
        heading: 'Extreme, die den gewöhnlichen Bereich in Perspektive rücken',
        paragraphs: [
          'Die meisten Erwachsenen auf der Erde liegen innerhalb eines überraschend schmalen Bandes. Grob gesagt gruppieren sich erwachsene Männer zwischen etwa 165 cm im 5. Perzentil und 188 cm im 95., und erwachsene Frauen zwischen etwa 152 cm und 173 cm. Dieses Band ist die Welt, in der die meisten von uns leben, und es ist der Grund, warum sich ein Unterschied von zehn Zentimetern zwischen zwei Freunden groß anfühlt: Er überspannt ein großes Stück der gesamten Verteilung.',
          'Die Rekordhalter sitzen weit außerhalb dieses Bandes, und sie sind gerade deshalb nützlich, weil sie die Skala sprengen. Robert Wadlow, kurz vor seinem Tod 1940 mit 272 cm gemessen, war fast einen Meter größer als der durchschnittliche Mann seiner Zeit, das Ergebnis einer überaktiven Hirnanhangdrüse, die sein Wachstum nie einstellte. Am anderen Ende maß Chandra Bahadur Dangi 2012 in Kathmandu 54,6 cm, kleiner als ein durchschnittliches zweijähriges Kind, als Folge eines primordialen Kleinwuchses. Stellt man eine der beiden Figuren auf der Vergleichsfläche neben einen durchschnittlichen Erwachsenen, wirkt der gewöhnliche Bereich plötzlich kompakt: Die gesamte Spannweite typischer menschlicher Größe passt in den Abstand zwischen Wadlows Taille und seinem Scheitel.',
        ],
      },
      {
        heading: 'Das Tool für diese Kategorie nutzen',
        paragraphs: [
          'Der nützlichste Vergleich ist hier nicht Prominenter gegen Prominenten, sondern Sie gegen eine Bevölkerung. Fügen Sie zuerst eine Figur in Ihrer eigenen Größe hinzu, dann den Durchschnitt für Ihr Geschlecht und Ihr Land, und sehen Sie, wo Sie landen. Wenn Sie 178 cm groß und männlich sind, liegen Sie über dem globalen Median, aber unter dem niederländischen Durchschnitt; wenn Sie 170 cm groß und weiblich sind, liegen Sie über dem globalen Frauenmedian und genau beim niederländischen Frauendurchschnitt. Diese Einordnungen sind aussagekräftiger als jede Einzelzahl, weil sie Ihnen sagen, ob Sie im Verhältnis zu den Menschen, unter denen Sie tatsächlich leben, typisch, groß oder klein sind.',
          'Perzentile machen denselben Punkt noch präziser. Fügen Sie die Figuren des 5., 50. und 95. Perzentils für Ihr Geschlecht hinzu, zeichnet das die volle Form der Verteilung auf eine Fläche, und Ihre eigene Figur fällt wie eine Markierung hinein. Probieren Sie es auch gegen die Rekordhalter: Wadlow neben einen durchschnittlichen Erwachsenen zu stellen, ist der schnellste Weg zu begreifen, was „größter Mensch aller Zeiten" wirklich bedeutet, denn keine Beschreibung in Worten trägt dasselbe Gewicht wie eine Figur zu sehen, die fast doppelt so groß ist wie Sie und auf demselben Boden steht.',
        ],
      },
    ],
  },
  celebrities: {
    measurementAnchor: 'Offizielle Dokumentation der Standgröße',
    measurementGuide: 'Die Größen von Prominenten stammen aus einer Mischung von Quellen sehr unterschiedlicher Zuverlässigkeit, und diese Seite ordnet sie entsprechend ein. Die stärksten Werte sind gemessene: professionelle Sport-Combines und Draft-Camps, bei denen Athleten barfuß von Offiziellen gemessen werden, sowie Verbandsunterlagen wie die Profile der Cricket-Verbände. Danach kommen seriöse biografische Referenzen, die Agenturmaterial mit Interviews und Fotografien abgleichen. Die schwächsten Werte sind Agenturlisten und Werbebiografien, die routinemäßig aufgerundet, mit Schuhen angegeben oder einfach aus einer frühen Pressemitteilung übernommen und nie korrigiert werden. Wo Quellen widersprüchlich sind, bevorzugt diese Seite den gemessenen oder vielfach bestätigten Wert und behandelt eine einzelne Agenturangabe mit Skepsis.',
    measurementNote: 'Prominentengrößen sind gelistete Werte; Combines und Verbände messen barfuß.',
    commonHeights: [
      { label: 'Dwayne Johnson', note: 'Schauspieler und ehemaliger WWE-Champion, größte Figur im Verzeichnis' },
      { label: 'Chris Hemsworth', note: 'Australischer Schauspieler, bekannt als Thor' },
      { label: 'Amitabh Bachchan', note: 'Legende des indischen Kinos, auffallend groß für seine Schauspielergeneration' },
      { label: 'Cristiano Ronaldo', note: 'Portugiesischer Fußballer, gemessen in den Unterlagen seines Profiklubs' },
      { label: 'Leonardo DiCaprio', note: 'US-amerikanischer Schauspieler' },
      { label: 'Ranbir Kapoor', note: 'Indischer Schauspieler' },
      { label: 'Neeraj Chopra', note: 'Indischer Olympiasieger im Speerwurf, Profil bei World Athletics' },
      { label: 'Brad Pitt', note: 'US-amerikanischer Schauspieler und Produzent' },
      { label: 'Zendaya', note: 'US-amerikanische Schauspielerin und Sängerin, groß für eine Hauptdarstellerin' },
      { label: 'Virat Kohli', note: 'Indischer Cricketspieler, Spielerprofil der BCCI' },
      { label: 'Shah Rukh Khan', note: 'Indischer Schauspieler, „King of Bollywood"' },
      { label: 'Tom Cruise', note: 'US-amerikanischer Schauspieler, der am häufigsten gesuchte kleinere Hauptdarsteller im Verzeichnis' },
      { label: 'Sachin Tendulkar', note: 'Indischer Cricketspieler, Rekordhalter bei den erzielten Runs' },
      { label: 'Alia Bhatt', note: 'Indische Schauspielerin' },
    ],
    faqs: [
      {
        question: 'Warum listen verschiedene Websites unterschiedliche Größen für denselben Prominenten?',
        answer: 'Weil sie unterschiedliche Arten von Quellen abschreiben. Ein Profil eines Sportverbandes, ein Buchungsblatt einer Filmagentur und ein Fan-Wiki stimmen selten auf den Zentimeter überein, und jede Website wählt eines davon und präsentiert es als Tatsache. Agenturblätter sind der übliche Grund für die Aufblähung: Es sind Marketingdokumente, und ein Zentimeter oder zwei werden routinemäßig hinzugefügt, besonders bei männlichen Hauptdarstellern. Gemessene Werte von Combines und Verbänden sind weit einheitlicher, weshalb die Größen von Athleten im Allgemeinen vertrauenswürdiger sind als die von Schauspielern. Wenn Sie sehen, dass die Größe eines Prominenten über Websites hinweg um 3 bis 5 cm schwankt, sehen Sie in der Regel den Abstand zwischen einem gemessenen und einem publizierten Wert.',
      },
      {
        question: 'Sind Schauspieler wirklich so groß, wie ihre gelisteten Größen behaupten?',
        answer: 'Oft nicht ganz. Schauspieler werden auf eine Weise fotografiert und gefilmt, die ihrer Statur schmeichelt: Stiefel mit Absatz, erhöhte Einlegesohlen, Kameraeinstellungen von unten und Partner, die so ausgewählt oder positioniert werden, dass der Größenvorsprung eines Hauptdarstellers erhalten bleibt. Manche Produktionen stellen kleinere Schauspieler für Zweier-Einstellungen sogar auf Apfelkisten. Nichts davon bedeutet, dass der gelistete Wert erfunden ist, aber es bedeutet, dass die auf der Leinwand wahrgenommene Größe ein paar Zentimeter über dem barfüßigen Wert liegen kann. Der gelistete Wert mit einem Partner zu vergleichen, dessen Größe unabhängig gemessen wurde, ist meist der schnellste Weg, die Übertreibung zu erkennen.',
      },
      {
        question: 'Wer ist der größte und der kleinste Prominente in diesem Verzeichnis?',
        answer: 'Dwayne Johnson ist mit 196 cm die größte Figur im verifizierten Verzeichnis, ein Erbe seiner professionellen Wrestling-Karriere, in der seine angegebene Größe Teil der Show war, seine tatsächliche Statur aber wirklich außergewöhnlich ist. Am anderen Ende sind Alia Bhatt mit 160 cm und Scarlett Johansson mit 160 cm die kleinsten gelisteten Hauptdarstellerinnen. Der Abstand zwischen Johnson und jeder der beiden beträgt 36 cm, mehr als ein Fuß, weshalb das Nebeneinanderstellen dieser beiden Figuren auf der Fläche einer der eindrucksvollsten Vergleiche ist, die das Tool zeichnen kann.',
      },
      {
        question: 'Warum sind die Größen von Athleten verlässlicher als die von Schauspielern?',
        answer: 'Athleten werden von Leuten gemessen, die kein Interesse daran haben, ihnen zu schmeicheln. Ein Fußballklub, ein Cricket-Verband oder ein olympischer Verband erfasst die Größe, weil sie für Auswahl, Ausrüstung und medizinische Ausgangswerte zählt, und die Messung erfolgt barfuß durch Personal nach einem Protokoll. Schauspieler dagegen werden von ihrer eigenen Vertretung gemessen, bei der Größe Teil eines vermarktbaren Images ist und niemand die Zahl prüft. Dieser strukturelle Unterschied erklärt, warum sich die gelistete Größe eines Cricketspielers im Laufe einer Karriere selten bewegt, während die eines Schauspielers zwischen einer frühen Biografie und einer späteren still nach oben driften kann.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum berühmte Größen die Menschen faszinieren',
        paragraphs: [
          'Niemand streitet über die Größe eines Fremden, aber jeder hat eine Meinung zur Größe einer berühmten Person. Ein Teil davon ist schlichte Neugier: Film und Fernsehen pressen die Welt in ein Rechteck, und das Rechteck lügt über den Maßstab. Zwei Schauspieler können auf der Leinwand gleich groß wirken und im wirklichen Leben fünfzehn Zentimeter auseinanderliegen, weil Kamera, Bildausschnitt und Schuhwerk zusammenwirken, um den Unterschied zu verbergen. Die echte Zahl herauszufinden, fühlt sich an wie das Lösen eines kleinen Rätsels, und es rahmt jede gesehene Szene neu: Plötzlich wirkt die Dominanz des Helden in einer Konfrontationsszene weniger wie Körperbau und mehr wie Kameraführung.',
          'Der andere Teil ist Identifikation. Fans vergleichen sich mit berühmten Menschen, um sich selbst in der Welt zu verorten. Eine Person mit 170 cm entdeckt, dass Tom Cruise und Lionel Messi diese Größe teilen, und die Zahl fühlt sich nicht mehr klein an. Eine Person mit 188 cm findet Gesellschaft in Amitabh Bachchan. Das Vergleichstool funktioniert bei Prominenten gerade deshalb, weil es eine abstrakte Liste in eine visuelle Tatsache verwandelt: Ihre Figur steht auf derselben Grundlinie wie die eines Stars, im wahren Maßstab, ohne dass noch Kameratricks im Weg wären.',
        ],
      },
      {
        heading: 'Gelistete Größen, gemessene Größen und der Abstand dazwischen',
        paragraphs: [
          'Jede Prominentengröße auf dieser Seite gehört zu einer von zwei Familien, und zu wissen, welche es ist, zählt mehr als die Zahl selbst. Gemessene Größen stammen von Institutionen, die Statur aus praktischen Gründen erfassen: Sport-Combines, Draft-Camps, Cricket-Verbände und olympische Verbände. Sie werden barfuß, von Offiziellen, nach einem Protokoll genommen und ändern sich im Laufe einer Karriere selten. Gelistete Größen stammen von Agenturen, Werbebiografien und Interviews, wo die Zahl einem Image dient statt einem Register. Das sind die Werte, die um ein oder zwei Zentimeter nach oben driften, mit Schuhen angegeben werden oder unverändert aus einer Pressemitteilung überleben, die geschrieben wurde, als der Schauspieler einundzwanzig war.',
          'Der Abstand ist meist klein, aber er ist systematisch, und er läuft in eine Richtung: nach oben. Männliche Hauptdarsteller sind am stärksten betroffen, weil die Besetzungspraxis historisch größere Helden bevorzugte und kleinere Hauptdarsteller einen Anreiz haben, den Abstand auf dem Papier zu schließen. Schauspielerinnen stehen in manchen Kontexten unter dem umgekehrten Druck, wo auffallende Größe Rollen an der Seite kleinerer männlicher Partner kosten kann. Nichts davon macht die Werte nutzlos, aber es bedeutet, dass ein Prominentenvergleich als auf wenige Zentimeter genau gelesen werden sollte und ein Unterschied von zwei Zentimetern zwischen zwei Schauspielern nicht als entscheidend gelten darf. Ein Unterschied von fünfzehn Zentimetern dagegen ist real, egal welcher Quelle Sie vertrauen.',
        ],
      },
      {
        heading: 'Die Extreme des Ruhms und was sie verraten',
        paragraphs: [
          'Die Spannweite des Verzeichnisses läuft von 160 cm bis 196 cm, ein Abstand von 36 cm zwischen Alia Bhatt und Scarlett Johansson am unteren Ende und Dwayne Johnson am oberen. Es lohnt sich, bei dieser Spannweite innezuhalten, denn sie deckt fast den gesamten normalen Erwachsenenbereich ab: Die kleinsten und größten berühmten Menschen sind keine monströsen Ausreißer, sondern Menschen, deren Größe nahe an den Rändern der gewöhnlichen Variation sitzt. Johnsons 196 cm sind außergewöhnlich, aber kein Rekord; es ist die Größe eines sehr großen Mannes, der zufällig Wrestler und dann Schauspieler wurde. Johanssons und Bhatts 160 cm sind schlicht die Größe einer kleineren Frau als der Durchschnitt, abseits der Leinwand unauffällig.',
          'Bemerkenswert ist, wie wenig von diesen realen Unterschieden in ihrer Arbeit sichtbar wird. Johnson wird so gefilmt, dass er mächtig, aber nicht absurd wirkt, und Johansson wird so eingerahmt, dass sie souverän statt klein erscheint, weil Regisseure Blickwinkel, Blocking und die Platzierung der Partner anpassen, um der Geschichte zu dienen statt dem Maßband. Das Tool nimmt all das weg. Stellen Sie Johnson auf einer Grundlinie neben Bhatt, und der Abstand von 36 cm ist plötzlich unleugbar – genau deshalb ist der Vergleich so befriedigend: Er ersetzt Jahre sorgfältig gesteuerter Leinwandillusion durch ein ehrliches Bild.',
        ],
      },
      {
        heading: 'Das Tool für diese Kategorie nutzen',
        paragraphs: [
          'Der beste Prominentenvergleich beginnt mit Ihnen selbst. Fügen Sie eine Figur in Ihrer eigenen Größe hinzu, dann den Star, der Sie interessiert, und der Abstand wird persönlich statt bloße Trivia. Ein Nutzer mit 175 cm, der neben Virat Kohli in derselben Größe steht, sieht einen Ebenbürtigen; neben Cristiano Ronaldo mit 187 cm sieht derselbe Nutzer einen Schritt von zwölf Zentimetern nach oben; neben Tom Cruise mit 170 cm einen Schritt von fünf Zentimetern nach unten. Diese drei Bilder zusammen lehren mehr über Maßstab als jede Zahlenliste, weil jedes die Größe des Stars an einem Körper verankert, den Sie bereits kennen.',
          'Das Tool belohnt auch das Mischen von Kategorien, und dort wird der Prominentenvergleich erst richtig interessant. Stellen Sie einen Cricketspieler neben einen Türrahmen, einen Schauspieler neben ein Pferd oder einen Fußballer neben einen durchschnittlichen Erwachsenen aus einem anderen Land, und der Ruhm fällt weg, bis nur noch die Messung übrig ist. Das ist der Sinn der Übung: Die Größe eines Prominenten ist überhaupt keine Tatsache über Berühmtheit. Sie ist eine menschliche Größe, gemessen auf dieselbe Weise wie Ihre, und die Fläche ist der eine Ort, an dem sie ohne Schmeichelei, Schuhwerk oder Kamerawinkel gezeigt wird, die sich in den Weg stellen.',
        ],
      },
    ],
  },
  anime: {
    measurementAnchor: 'Offizielle Standgröße aus dem Databook',
    measurementGuide: 'Die Größen von Anime-Charakteren stammen aus offiziellen Franchise-Databooks, Notizen der Manga-Autoren und Charakter-Designbögen, die von den Rechteinhabern veröffentlicht werden – nicht aus Screenshots oder Fanschätzungen. Weil langlaufende Serien ihre Besetzung über Jahre begleiten, hat ein einzelner Charakter oft mehr als eine offizielle Größe: Werte aus der frühen Serie, nach dem Zeitsprung und als Erwachsener können alle für verschiedene Punkte der Geschichte korrekt sein. Fan-Wikis widersprechen einander vor allem, weil sie diese Epochen vermischen, Umrechnungen unterschiedlich runden oder veraltete Guidebook-Ausgaben wiederholen, weshalb jede Figur auf dieser Seite an eine bestimmte Version des Charakters gebunden ist.',
    measurementNote: 'Anime-Größen sind offizielle Databook-Werte für eine bestimmte Handlungsära, keine Schätzungen aus Animationsbildern.',
    commonHeights: [
      { label: 'Edward Elric', note: 'Fullmetal Alchemist, frühe Serie; wächst bis zum Serienende auf etwa 165 cm' },
      { label: 'Levi Ackerman', note: 'Attack on Titan, offizielle Guidebooks unter Aufsicht von Hajime Isayama' },
      { label: 'Tanjiro Kamado', note: 'Demon Slayer, mit 15 Jahren nach dem Beitritt zum Corps; mit 13 Jahren 156 cm' },
      { label: 'Yuji Itadori', note: 'Jujutsu Kaisen, offizielles Fanbook' },
      { label: 'Monkey D. Luffy', note: 'One Piece, nach dem Zeitsprung; 172 cm vor dem Zeitsprung' },
      { label: 'Ichigo Kurosaki', note: 'Bleach, Teenagerjahre; 181 cm als Erwachsener' },
      { label: 'Son Goku', note: 'Dragon Ball Z / Super, erwachsen' },
      { label: 'Naruto Uzumaki', note: 'Naruto, erwachsen als 7. Hokage; 166 cm als Teenager in Shippuden' },
      { label: 'Roronoa Zoro', note: 'One Piece, nach dem Zeitsprung; 178 cm vor dem Zeitsprung' },
      { label: 'Eren Yeager', note: 'Attack on Titan, nach dem Zeitsprung; 170 cm in den frühen Staffeln' },
      { label: 'Satoru Gojo', note: 'Jujutsu Kaisen, das Fanbook listet ihn mit über 190 cm' },
      { label: 'All Might (Heldenform)', note: 'My Hero Academia, verstärkte Heldenform; in seiner geschwächten Form deutlich kleiner' },
    ],
    faqs: [
      {
        question: 'Sind die Größen von Anime-Charakteren offiziell, oder raten Fans sie?',
        answer: 'Sie sind offiziell. Japanische Verlage drucken Charakterprofile mit Größe, Gewicht und Geburtstag in Databooks und Fanbooks, die eine Manga-Serie begleiten, und Animationsstudios bauen ihre Modellbögen aus denselben Zahlen. Wenn Sie zwei verschiedene Größen für einen Charakter sehen, liegt das fast immer daran, dass der Charakter zwischen Handlungsbögen gealtert ist, nicht daran, dass die Zahl erfunden wurde.',
      },
      {
        question: 'Warum hat ein Charakter auf verschiedenen Seiten zwei verschiedene Größen?',
        answer: 'Langlaufende Anime lassen ihre Besetzung altern. Luffy misst 172 cm vor dem One-Piece-Zeitsprung und 174 cm danach, Eren Yeager wächst von 170 cm auf 183 cm, und Tanjiro wächst während seiner Ausbildung von 156 cm auf 165 cm. Eine Seite, die nicht sagt, welche Ära sie zitiert, wirkt falsch, selbst wenn ihre Zahl aus einer echten Quelle stammt – weshalb diese Seite die Ära bei jedem Eintrag angibt.',
      },
      {
        question: 'Warum sind manche Anime-Charaktere im Vergleich zu echten Menschen so klein?',
        answer: 'Viele Protagonisten sind Teenager, und japanisches Charakterdesign hält Helden oft kompakt, damit sie auf dem Bildschirm neben viel größeren Schurken und Kreaturen klar lesbar bleiben. Edward Elric mit 149 cm und Levi Ackerman mit 160 cm sind beide als klein angelegt, und ihre Geschichten machen das zum Thema: Ihre Größe ist Teil ihrer Identität, kein Zeichenfehler. Sie auf der Fläche mit einem durchschnittlichen Erwachsenen zu vergleichen, zeigt genau, wie bewusst diese Entscheidung ist.',
      },
      {
        question: 'Ändern sich Anime-Größen zwischen Manga und Anime?',
        answer: 'Die veröffentlichte Databook-Zahl ist für beide dieselbe, weil der Anime die Designbögen des Manga übernimmt. Was sich ändert, ist, wie groß ein Charakter auf dem Bildschirm wirkt: Kamerawinkel, dramatische Perspektive und die Größe der Person daneben können einen Charakter in einer gegebenen Szene größer oder kleiner erscheinen lassen. Die Databook-Zahl bleibt fix, weshalb sie der richtige Wert für den Vergleich ist.',
      },
      {
        question: 'Wie sollte ich das Vergleichstool mit Anime-Charakteren nutzen?',
        answer: 'Beginnen Sie mit einem Charakter und einem durchschnittlichen Menschen von 175 cm, fügen Sie dann einen zweiten Charakter aus derselben Serie hinzu, um den Abstand innerhalb des Universums zu sehen, und fügen Sie schließlich ein reales Objekt wie einen Türrahmen hinzu, um das Ergebnis zu erden. Weil Anime-Besetzungen Teenager, Erwachsene und Riesen mischen, ist das Tool am aufschlussreichsten, wenn Sie Charaktere aus derselben Ära derselben Serie vergleichen, statt Versionen aus der frühen Serie mit Erwachsenenversionen zu mischen.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum Anime-Größen einen Vergleich wert sind',
        paragraphs: [
          'Anime ist eines der wenigen Medien, in denen Größe ein bewusstes Erzählwerkzeug ist statt ein Zufall der Besetzung. Ein Regisseur kann nicht einfach einen größeren Schauspieler engagieren; wenn ein Charakter also klein oder groß gezeichnet ist, wurde diese Entscheidung auf einem Designbogen getroffen und vom Schöpfer genehmigt. Levi Ackerman misst 160 cm in einer Besetzung von Soldaten, die über ihm aufragen, und die Geschichte lässt das Publikum das nie vergessen: Seine Tödlichkeit verblüfft gerade, weil sein Körper klein ist. All Might ist mit 220 cm in seiner Heldenform der umgekehrte Trick, ein Körper, der so gezeichnet ist, dass er einen Türrahmen ausfüllt, sodass sich seine Präsenz wie ein öffentliches Denkmal anfühlt, bevor er überhaupt spricht. Diese Figuren Seite an Seite auf eine einzige Grundlinie zu stellen, verwandelt einen Eindruck, den Sie beim Schauen halb bemerkt haben, in eine Messung, die Sie tatsächlich sehen können.',
          'Die Spannweite innerhalb einer einzigen Serie ist oft breiter als die Spannweite über reale menschliche Bevölkerungen hinweg. One Piece reicht von komischer Entlastung in Chopper-Größe bis zu Riesen von mehreren Metern Höhe, und Attack on Titan stellt einen 160 cm großen Hauptmann in dieselbe Armee wie 183 cm große Soldaten und fünfzehn Meter hohe Titanen. Eine Vergleichsfläche bewältigt diese Spannweite besser als jeder Absatz, weil sie jede Figur auf dieselbe Bodenlinie und denselben Maßstab zwingt. In dem Moment, in dem Sie Eren Yeagers 183 cm nach dem Zeitsprung neben Levis unveränderten 160 cm sehen, hört der vierjährige Abstand zwischen ihnen auf, Trivia zu sein, und wird zu etwas, das Sie fühlen können.',
        ],
      },
      {
        heading: 'Woher die Zahlen kommen – und warum Quellen widersprüchlich sind',
        paragraphs: [
          'Die verlässlichen Quellen sind gedruckt, nicht crowdsourced. Shueisha, Kodansha und andere japanische Verlage veröffentlichen Databooks und Fanbooks, in denen jeder wichtige Charakter einen Profilblock mit Größe, Gewicht, Geburtstag und Blutgruppe erhält. Die Guidebooks INSIDE und OUTSIDE zu Attack on Titan, unter Aufsicht von Hajime Isayama, fixieren Levi auf 160 cm und Erens endgültige Größe auf 183 cm. Das offizielle Fanbook zu Jujutsu Kaisen listet Gojo mit über 190 cm, weshalb sorgfältige Tabellen 190 cm als Untergrenze zitieren statt als exakte Messung. Die Corps-Unterlagen von Demon Slayer geben Tanjiro mit fünfzehn Jahren mit 165 cm an, wobei sein Wert von 156 cm mit dreizehn Jahren in derselben Unterlage erhalten ist, sodass beide Zahlen offiziell sind und beide zu verschiedenen Geburtstagen gehören.',
          'Uneinigkeit zwischen Websites hat meist eine von drei Ursachen, und keine davon ist ein Rätsel, sobald man weiß, wonach man suchen muss. Die erste ist die Vermischung von Epochen: Eine Seite, die den Teenager Ichigo mit 174 cm neben den erwachsenen Naruto mit 180 cm zitiert, vergleicht zwei verschiedene Lebensphasen, ohne es zu sagen. Die zweite ist Umrechnungsrundung: Japanische Quellen veröffentlichen Zentimeter, und die Umrechnung in Fuß und Zoll verliert einen Bruchteil eines Zolls, den verschiedene Seiten in verschiedene Richtungen runden, weshalb 174 cm sowohl als 5\'8" als auch als 5\'8.5" erscheinen. Die dritte sind veraltete Daten: Frühe Fanübersetzungen von Guidebooks kursierten vor den offiziellen englischen Ausgaben, und einige dieser frühen Zahlen waren schlicht falsch und wurden nie korrigiert. Das Gegenmittel ist, für jede Figur eine Ära-Angabe und eine benannte Quelle zu verlangen – der Standard, dem diese Seite folgt.',
        ],
      },
      {
        heading: 'Extreme, Wachstum und die Missverständnisse, die sie erzeugen',
        paragraphs: [
          'Das häufigste Missverständnis über Anime-Größen ist, dass die Größe eines Charakters eine feste Tatsache wie ein Geburtsdatum sei. In der Praxis ist sie eine Momentaufnahme, und das Datum der Aufnahme zählt mehr, als den meisten Fans bewusst ist. Edward Elric beginnt Fullmetal Alchemist mit 149 cm und beendet die Serie mit etwa 165 cm, und seine Wut darüber, als klein bezeichnet zu werden, ist ein Running Gag gerade deshalb, weil er noch wächst. Narutos Sprung von 166 cm als Shippuden-Teenager auf 180 cm als Hokage sind volle 14 cm Erwachsenenwachstum, die eine Tabelle mit einer einzigen Zahl vollständig verbirgt. Selbst Luffys bescheidener Schritt von 172 cm auf 174 cm über den Zeitsprung hinweg sagt Ihnen etwas darüber, wie Oda seine Besetzung behandelt: Piraten altern, und ihre offiziellen Profile altern mit ihnen.',
          'Das andere Missverständnis ist, dass kleine Charaktere aus Versehen klein gezeichnet seien oder wegen der Grenzen der Animation. Das Gegenteil ist der Fall. Kleine Statur im Anime ist meist eine überlegte Designentscheidung, die Jugend, Außenseiterstatus oder Bedrohlichkeit in einem kleinen Paket signalisiert. Tanjiro ist mit 165 cm unter den Hashira von Demon Slayer unauffällig, von denen mehrere über 175 cm kommen, und genau diese Gewöhnlichkeit ist der Punkt: Er ist ein normaler Junge, der sich gegen Dämonen behauptet. Gojo mit über 190 cm ist die Umkehrung, ein Mentor, der so gezeichnet ist, dass er über seinen Schülern aufragt, sodass seine Autorität lesbar wird, bevor er handelt. Wenn Sie eine ganze Besetzung aufreihen, wird das Muster sichtbar: Größe im Anime ist Besetzung, nur mit einem Stift gemacht statt mit einem Casting-Direktor.',
        ],
      },
      {
        heading: 'Wie Sie das Vergleichstool optimal nutzen',
        paragraphs: [
          'Das Tool ist am nützlichsten, wenn Sie es als Experimentierbank behandeln statt als Poster. Beginnen Sie mit einem einzelnen Charakter neben der durchschnittlichen männlichen Figur von 175 cm, was nahe an Gokus 175 cm liegt und Goku zu einem nützlichen Anker macht: Fast jeder andere Anime-Charakter lässt sich als größer oder kleiner als Goku beschreiben. Fügen Sie dann einen zweiten Charakter aus derselben Serie und derselben Ära hinzu, zum Beispiel Luffy nach dem Zeitsprung mit 174 cm neben Zoro nach dem Zeitsprung mit 181 cm, und der Abstand von sieben Zentimetern zwischen Kapitän und Schwertkämpfer wird konkret. Fügen Sie schließlich ein Alltagsobjekt hinzu, etwa einen Türrahmen mit 245 cm oder ein Auto, und der fiktive Maßstab kollidiert mit der realen Welt auf eine Weise, die kein Episoden-Screenshot liefern kann.',
          'Zwei Gewohnheiten machen die Ergebnisse vertrauenswürdig. Erstens: Halten Sie die Epochen einheitlich: Stellen Sie den Teenager Eren mit 170 cm nicht neben den erwachsenen Naruto mit 180 cm und ziehen Sie keine Schlüsse über ihre Serien, denn Sie vergleichen einen Fünfzehnjährigen mit einem erwachsenen Mann. Zweitens: Denken Sie daran, dass Heldenformen und Verwandlungen separate Einträge sind: All Mights 220 cm gehören zu seiner verstärkten Form, und seine geschwächte Form würde auf derselben Fläche weit tiefer stehen. So genutzt, hört das Tool auf, eine Neuheit zu sein, und wird zum schnellsten Weg, die Argumente zu klären, die Anime-Fans tatsächlich führen – bei denen es selten darum geht, wer stärker ist, und sehr oft darum, wer im Bild größer steht.',
        ],
      },
    ],
  },
  films: {
    measurementAnchor: 'Statur laut Kanon-Drehbuch und Requisiten-Blaupause',
    measurementGuide: 'Die Größen von Filmcharakteren stammen aus Produktionsbibeln der Studios, Blaupausen des Requisitendesigns und offiziellen Maßstabstabellen, die während der Produktion erstellt wurden – nicht vom Vermessen von Schauspielern auf einem roten Teppich. Für einen Charakter können drei verschiedene Zahlen alle wahr sein: die eigene Größe des Schauspielers, die Größe der kostümierten Figur am Set und die Größe des fertigen CGI-Charakters auf der Leinwand. Rüstung, Helme, Plateauschuhe und digitale Skalierung fügen jeweils Zentimeter hinzu, weshalb jeder Eintrag auf dieser Seite angibt, welche dieser Figuren er zitiert.',
    measurementNote: 'Filmgrößen zitieren die fertige Figur auf der Leinwand, wobei Rüstungs- und Anzuggröße getrennt vom Schauspieler gekennzeichnet sind.',
    commonHeights: [
      { label: 'Yoda', note: 'Star Wars, Jedi-Meister; Wert aus der StarWars.com Databank' },
      { label: 'R2-D2', note: 'Star Wars, Astromech-Droide der R2-Serie; 1,09 m in Kanon-Referenzen' },
      { label: 'Captain America (Steve Rogers, MCU)', note: 'Größe nach dem Serum, gezeigt in der Smithsonian-Ausstellung; Schauspieler Chris Evans ist 6\'0"' },
      { label: 'T-800 (Terminator)', note: 'Dargestellt von Arnold Schwarzenegger, offizielle Angabe 6\'2"' },
      { label: 'Wolverine (Filmdarstellung)', note: 'Hugh Jackman auf der Leinwand; der Comic-Kanon ist 160 cm, ein anderer Wert' },
      { label: 'Iron Man (Rüstung Mark 85)', note: 'Rüstungshöhe in Avengers: Endgame; Tony Stark selbst ist 185 cm' },
      { label: 'Darth Vader (Rüstung)', note: 'Komplette Lebenserhaltungsrüstung laut StarWars.com Databank; der ungerüstete Anakin ist kleiner' },
      { label: 'Chewbacca', note: 'Star Wars, Wookiee-Co-Pilot; Wert aus der StarWars.com Databank' },
      { label: 'Der Hulk (MCU)', note: 'Gamma-Form im MCU; Bruce Banner ist 175 cm' },
      { label: 'Jake Sully (Avatar)', note: 'Avatar, erwachsener Na\'vi-Körper; Produktionsmaterial gibt Erwachsene mit 9–10 ft an' },
      { label: 'Optimus Prime (Bayverse)', note: 'Maßstabstabellen der Transformers-Realfilme für die Filme 2007–2017' },
      { label: 'King Kong (Skull Island, 2017)', note: 'Heranwachsender Kong in Kong: Skull Island' },
      { label: 'King Kong (Godzilla vs. Kong, 2021)', note: 'Ausgewachsener Kong im MonsterVerse' },
      { label: 'Godzilla (2021)', note: 'MonsterVerse-Godzilla in Godzilla vs. Kong' },
    ],
    faqs: [
      {
        question: 'Enthalten Filmgrößen Rüstung, Helme und Stiefel?',
        answer: 'Manchmal, und genau deshalb zählt die Unterscheidung. Darth Vaders 203 cm sind die gerüstete Figur komplett mit Helm und Lebenserhaltungsanzug, während Anakin Skywalker darunter ein deutlich kleinerer Mann ist. Iron Mans 198 cm sind die Rüstung Mark 85, nicht Tony Stark, der 185 cm misst. Diese Seite kennzeichnet Rüstungswerte als Rüstungswerte, sodass Sie nie versehentlich einen Anzug mit einem barfüßigen Menschen vergleichen.',
      },
      {
        question: 'Warum ist Wolverine hier 188 cm, wenn die Comics 160 cm sagen?',
        answer: 'Weil dies die Filmkategorie ist und die Filme Hugh Jackman besetzt haben, der 188 cm misst, als Wolverine. Die Comics listen Logan mit 160 cm, und dieser Wert ist für die gedruckte Figur korrekt. Die beiden Zahlen beschreiben zwei verschiedene Versionen des Charakters, und die Filmversion ist diejenige, die auf eine Filmvergleichsseite gehört. Kontinuitäten zu vermischen ist die häufigste Quelle falscher Filmgrößen.',
      },
      {
        question: 'Warum ändern Godzilla und King Kong ihre Größe zwischen Filmen?',
        answer: 'Weil das Produktionsteam jedes Films seinen eigenen Maßstab festlegt. Kong ist als Heranwachsender in Kong: Skull Island von 2017 104 ft groß und als ausgewachsener Erwachsener in Godzilla vs. Kong von 2021 337 ft, und das Wachstum ist Teil der Geschichte: Er reift im früheren Film noch. Godzilla wuchs ebenfalls, von 108 m im Jahr 2014 auf 119,8 m im Film von 2021. Die Größe einer Kreatur ist nur mit dem Filmtitel zusammen sinnvoll, weshalb jeder Kreatureneintrag hier seinen Film nennt.',
      },
      {
        question: 'Sind die Größen von CGI-Kreaturen echte Messungen oder Schätzungen?',
        answer: 'Es sind Produktionsentscheidungen, die in Maßstabstabellen festgehalten werden. Bevor ein einziges Bild gerendert wird, einigt sich das Team für visuelle Effekte darauf, wie groß eine Kreatur im Verhältnis zu Gebäuden, Fahrzeugen und menschlichen Charakteren ist, weil jede Einstellung von diesem Verhältnis abhängt. Die Produktions-Maßstabstabellen von Transformers listen den Realfilm-Optimus Prime mit 28 ft, und das Produktionsmaterial von Avatar definiert erwachsene Na\'vi als 9–10 ft groß. Diese Zahlen sind nicht weniger offiziell als eine Kostümmessung; sie werden nur auf dem Papier entschieden, bevor sie auf der Leinwand erscheinen.',
      },
      {
        question: 'Kann ich Filmcharaktere im Tool mit echten Menschen und Objekten vergleichen?',
        answer: 'Ja, und genau dort bewährt sich das Tool. Stellen Sie Chewbacca mit 228 cm neben einen durchschnittlichen Mann von 175 cm, und der Vorteil des Wookiee hört auf, ein vager Eindruck zu sein, und wird ein Abstand von 53 cm, den Sie sehen können. Stellen Sie Godzilla neben einen Wolkenkratzer, und der Grund, warum Kaiju-Filme ihre Monster vor Stadt-Skylines einrahmen, wird offensichtlich: Mit 119,8 m ist Godzilla ein Gebäude, das sich bewegt.',
      },
    ],
    editorialSections: [
      {
        heading: 'Die drei Größen, die sich in jedem Filmcharakter verbergen',
        paragraphs: [
          'Fragen Sie, wie groß ein Filmcharakter ist, und Sie erhalten meist drei Antworten, die alle vertretbar sind. Es gibt die Größe des Schauspielers, die Größe der Figur, die tatsächlich am Set fotografiert wurde, und die Größe des fertigen Charakters, den das Publikum sieht. Bei einer gewöhnlichen menschlichen Rolle sind diese drei Zahlen nahezu identisch, und niemand bemerkt den Unterschied. Bei einem kostümierten oder digitalen Charakter können sie Meter auseinanderliegen, und in diesem Abstand beginnt die meiste Verwirrung über Filmgrößen. Darth Vader ist der Lehrbuchfall: David Prowse im Anzug war ein sehr großer Mann, die fertige Rüstung mit ihrem Helm erreicht 203 cm, und Anakin Skywalker, die Person darunter, war nie annähernd so groß. Eine dieser Zahlen zu zitieren, ohne zu sagen, welche Sie meinen, ist der Anfang jedes Streits.',
          'Rüstung ist die größte einzelne Quelle zusätzlicher Höhe, und sie sollte als Handwerk verstanden werden, nicht als Trick. Ein Anzug aus Powered Armor, ein Wookiee-Kostüm oder ein Superhelden-Outfit wird über dem Körper des Darstellers gebaut, und Helme, Schulterpolster und Plateauschuhe fügen routinemäßig zehn bis zwanzig Zentimeter hinzu. Iron Mans Rüstung Mark 85 steht bei 198 cm, während Tony Stark 185 cm misst, und die dreizehn Zentimeter dazwischen sind Ingenieurskunst: Panzerung, ein Helm und die Stiefel des Anzugs. Chewbaccas 228 cm sind ebenfalls ein Kostümwert, aufgebaut aus dem Darsteller darin plus Fell, Kopfstück und Schuhwerk. Nichts davon macht die Zahlen falsch. Die gerüstete Figur ist das, was das Publikum sieht, was die Geschichte als Größe des Charakters behandelt und was die offizielle Databank verzeichnet. Irreführend wird es nur, wenn sie still mit einer barfüßigen menschlichen Messung verglichen wird, als wären beide auf dieselbe Weise genommen worden.',
        ],
      },
      {
        heading: 'Produktionsbibeln, Maßstabstabellen – und warum Reboots alles zurücksetzen',
        paragraphs: [
          'Bei menschlichen Charakteren ist die Produktionsbibel meist nur das Besetzungsblatt: die angegebene Größe des Schauspielers, angepasst um das, was das Kostüm hinzufügt. Bei Kreaturen und Robotern ist das Schlüsseldokument die Maßstabstabelle, ein Blatt, das vor den Dreharbeiten gezeichnet wird und die Größe jedes Charakters gegenüber einer menschlichen Silhouette, einem Fahrzeug und einem Gebäude fixiert. Die Maßstabstabellen der Transformers-Realfilme legen den Bayverse-Optimus Prime auf 28 ft fest, und dieser Wert blieb über die Filme von 2007–2017 hinweg einheitlich, weil jede Effekteinstellung aus derselben Tabelle gebaut wurde. Das Produktionsmaterial von Avatar definiert erwachsene Na\'vi als 9–10 ft groß, weshalb Jake Sullys Avatar-Körper im selben Bild mit etwa 9 ft gegenüber menschlichen Soldaten wirkt. Diese Dokumente sind das Film-Äquivalent eines Anime-Databooks und verdienen denselben Respekt als Quellen.',
          'Reboots und Fortsetzungen setzen die Tabelle zurück, und das ist eine Eigenschaft, kein Fehler. Kong ist in Kong: Skull Island 104 ft groß, weil die Geschichte einen heranwachsenden Affen braucht, der noch wachsen kann, und er ist 337 ft in Godzilla vs. Kong, weil die Geschichte einen Erwachsenen braucht, der gegen einen 393 ft großen Godzilla bestehen kann. Die Verdreifachung ist Absicht, und das Produktionsteam hat beide Zahlen veröffentlicht. Dieselbe Logik erklärt, warum ein Godzilla von 1954 mit 50 m und ein Godzilla von 2021 mit 119,8 m beide korrekt sind: Sie gehören zu verschiedenen Produktionen mit verschiedenen Skylines, die es zu überragen gilt. Jede Tabelle, die eine Kreatur auflistet, ohne ihren Film zu nennen, verbirgt die wichtigste Information über diesen Wert.',
        ],
      },
      {
        heading: 'Erzwungene Perspektive, Doubles und die Illusionen, die das Auge täuschen',
        paragraphs: [
          'Selbst wenn die Produktionstabelle exakt ist, kann der fertige Film Ihren Augen etwas vormachen, und Filmemacher haben ein ganzes Werkzeugset dafür. Erzwungene Perspektive stellt einen kleineren Schauspieler näher an die Kamera, sodass er größer erscheint, eine Technik, die die Herr-der-Ringe-Filme ständig für Hobbits und Zauberer einsetzten. Auch die Kamerahöhe zählt: Eine Figur von unten zu filmen fügt Autorität und scheinbare Größe hinzu, während Filmen von oben sie schmälert, und Regisseure wählen diese Winkel wegen der emotionalen Wirkung statt wegen dokumentarischer Genauigkeit. Deshalb können zwei Charaktere in einer Szene wie Ebenbürtige wirken und in der nächsten um einen Kopf auseinanderliegen, und deshalb ist es ein hoffnungsloses Unterfangen, Größen an einem Filmstill zu messen.',
          'Body-Doubles und Stand-ins fügen eine weitere Ebene hinzu. Captain America ist ein sauberes Beispiel: Steve Rogers misst nach dem Super-Soldier-Serum laut der Ausstellung des Smithsonian im Filmuniversum 188 cm, während Chris Evans, der Schauspieler, 183 cm misst, und die Produktion überbrückte den Abstand mit Kameratricks und sorgfältiger Einrahmung. Der Hulk ist der Extremfall, weil es überhaupt keinen Darsteller dieser Größe gibt: Der 259 cm große MCU-Hulk ist ein vollständig digitaler Bau, dessen Größe auf dem Papier gewählt und dann gerendert wurde, wobei Mark Ruffalos Körper von 175 cm nur als Bewegungsreferenz diente. Sobald Sie wissen, dass diese Mechanismen existieren, hört die richtige Frage auf, „Wie groß sah er in dieser Szene aus" zu lauten, und wird zu „Was hat die Produktion entschieden" – eine Frage mit einer dokumentierten Antwort.',
        ],
      },
      {
        heading: 'Das Tool nutzen, um Filmmaßstäbe zu klären',
        paragraphs: [
          'Das Vergleichstool ist am besten, wenn es die Bildsprache eines Films wörtlich macht. Stellen Sie Yoda mit 66 cm neben Darth Vaders gerüstete 203 cm, und Sie haben in Zahlen den berühmtesten Kontrast von Star Wars reproduziert: den kleinsten Meister und den größten Schurken, getrennt durch 137 cm Leinwandpräsenz. Stellen Sie R2-D2 mit 109 cm neben Chewbacca mit 228 cm, und die Gewohnheit des Droiden, in Kniehöhe durch Szenen zu rollen, bekommt plötzlich ein Maß. Das ist keine Trivia; das sind die räumlichen Tatsachen, mit denen die Regisseure arbeiteten, als sie jede Szene blockierten, und sie auf einer Grundlinie zu sehen erklärt Besetzungs- und Kostümentscheidungen, die sonst willkürlich wirken.',
          'Das Tool bewältigt auch den Sprung vom menschlichen Maßstab zum Kaiju-Maßstab, wo Filmgröße wirklich spektakulär wird. Eine menschliche Figur von 175 cm neben Godzilla mit 119,8 m ist fast unsichtbar, und diese Fast-Unsichtbarkeit ist das ehrliche Ergebnis: Sie sagt Ihnen, warum Kaiju-Filme ihre Monster nie vor Menschen einrahmen, sondern vor Skylines, Bergen und anderen Monstern. Den Kong von 2017 mit 31,7 m mit dem Kong von 2021 mit 102,7 m auf derselben Fläche zu vergleichen, zeigt den Wachstumsbogen des Charakters anschaulicher als jede Fortsetzungsmontage, weil die Verdreifachung gezeichnet statt beschrieben wird. Behalten Sie den Filmtitel bei jeder Kreatur, kennzeichnen Sie Rüstungswerte als Rüstung, und das Tool wird tun, was kein einzelnes Filmbild kann: Ihnen den eigenen Maßstab der Produktion zeigen, alles auf einmal, auf einer Bodenlinie.',
        ],
      },
    ],
  },
  animals: {
    measurementAnchor: 'Schulter-/Widerristhöhe bei Vierbeinern; Scheitel bei Zweibeinern',
    measurementGuide: 'Vierbeinige Säugetiere werden vom ebenen Boden bis zum Widerrist gemessen, dem knöchernen Grat zwischen den Schulterblättern, weil der Widerrist auf fester Höhe bleibt, während der Kopf sich ständig auf, ab und seitwärts bewegt. Pferde behalten denselben Widerrist-Standard bei, drücken ihn aber in Handbreit aus, wobei eine Hand 4 Zoll (10,16 cm) entspricht, sodass ein Pferd von 160 cm 15.3 Hand misst. Aufrechte Tiere wie Kängurus und Gorillas werden stattdessen bis zum Scheitel des Kopfes gemessen, und Giraffen bis zu den Spitzen ihrer Ossikone, weil diese Tiere keine sinnvolle Widerristlinie haben. Die Kopfhöhe wird bei Vierbeinern nie verwendet: Ein grasendes Pferd, ein wachsames Reh und ein angreifender Elefant halten ihre Köpfe alle auf völlig unterschiedlichen Höhen, sodass eine kopfbasierte Zahl eine Pose beschreiben würde, nicht ein Tier.',
    measurementNote: 'Vierbeinige Tiere werden an der Schulter oder am Widerrist gemessen, nicht am Kopf.',
    commonHeights: [
      { label: 'Hauskatze', note: 'Boden bis Schulterwiderrist, typischer Erwachsener' },
      { label: 'Haushund', note: 'Boden bis Widerrist; variiert stark je nach Rasse' },
      { label: 'Grauer Wolf', note: 'Boden bis Widerrist, erwachsen' },
      { label: 'Tiger', note: 'Boden bis Schulter, erwachsen' },
      { label: 'Afrikanischer Löwe', note: 'Boden bis Schulterwiderrist, erwachsenes Männchen' },
      { label: 'Braunbär', note: 'Schulterhöhe auf allen vieren; steht auf den Hinterbeinen größer' },
      { label: 'Kuh', note: 'Boden bis Schulterwiderrist, erwachsen' },
      { label: 'Rotes Riesenkänguru', note: 'Aufrechte Standhöhe bis zum Kopf' },
      { label: 'Gorilla', note: 'Standhöhe bis zum Scheitel des Kopfes' },
      { label: 'Hauspferd', note: 'Widerristmaß, 15.3 Hand' },
      { label: 'Kamel', note: 'Oberkante der Schulter; der Höcker kann höher ragen' },
      { label: 'Afrikanischer Buschelefant', note: 'Schulterhöhe eines erwachsenen Bullen' },
      { label: 'Giraffe', note: 'Boden bis zu den Ossikonspitzen, typischer Erwachsener' },
    ],
    faqs: [
      {
        question: 'Warum werden Tiere an der Schulter oder am Widerrist gemessen statt am Kopf?',
        answer: 'Der Widerrist ist ein fester Skelett-Anhaltspunkt, der höchste Punkt der Schulterblätter, und er bewegt sich nicht, wenn das Tier grast, sich umsieht oder den Kopf senkt. Die Kopfhöhe kann sich von einer Sekunde zur nächsten um Dutzende Zentimeter ändern, sodass sie nicht als wiederholbarer Standard dienen kann. Jede tierärztliche Unterlage, jeder Rassestandard und jede Zoomessung für einen Vierbeiner verwendet daher den Widerrist, weshalb das Vergleichstool Vierbeiner bis zu dieser Linie zeichnet.',
      },
      {
        question: 'Wie werden Pferde gemessen, und was ist eine Hand?',
        answer: 'Pferde werden am Widerrist in Hand gemessen, einer traditionellen Einheit von 4 Zoll oder 10,16 cm. Ein Pferd, das mit 15.3 Hand beschrieben wird, hat 15 volle Hand plus 3 Zoll, was 160 cm ergibt. Das Tool zeigt beide Einheiten, sodass ein Pferd mit 160 cm und ein Pferd mit 15.3 Hand dieselbe Höhe sind, nur auf zwei Arten ausgedrückt.',
      },
      {
        question: 'Warum ist die Größe eines Bären verwirrend, und welcher Zahl sollte ich vertrauen?',
        answer: 'Ein Bär läuft auf allen vieren mit etwa 130 cm an der Schulter, aber dasselbe Tier richtet sich auf den Hinterbeinen auf etwa 2,5 m auf, sodass beide Zahlen real sind und verschiedene Haltungen beschreiben. Das Vergleichstool verwendet standardmäßig die Schulterhöhe auf allen vieren, weil das die normale Fortbewegungshaltung des Tieres ist und die einzige, die mit anderen Vierbeinern vergleichbar ist. Wenn Sie die aufgerichtete Höhe wollen, vergleichen Sie sie stattdessen mit einem stehenden Menschen.',
      },
      {
        question: 'Stammt die Größe von Giraffen wirklich größtenteils aus ihren Hälsen?',
        answer: 'Nur teilweise. Beine und Hals einer Giraffe sind jeweils etwa 1,8 m lang, sodass die Beine allein schon so groß sind wie ein durchschnittlicher erwachsener Mensch, bevor Körper und Hals hinzukommen. Der Hals fügt ungefähr ein weiteres Drittel der Gesamthöhe des Tieres hinzu, und er enthält gerade einmal sieben Wirbel, dieselbe Anzahl wie ein menschlicher Hals, wobei jeder Wirbel auf über 25 cm gestreckt ist. Deshalb wirkt eine Giraffe auf der Grafik so extrem: Es sind zwei Strukturen von Menschenhöhe, die aufeinandergestapelt sind.',
      },
      {
        question: 'Warum variieren Hundegrößen zwischen den Rassen so stark?',
        answer: 'Hunde sind das größenvariabelste Landsäugetier, weil Jahrhunderte selektiver Zucht eine Art von einem 15 cm großen Chihuahua bis zu einer 110 cm großen Deutschen Dogge an der Schulter gedehnt haben. Eine einzige „Hundegröße" ist daher nur ein grober Mittelwert, und der Wert von 60 cm im Tool ist ein mittelgroßer Hund, kein Rassestandard. Für einen exakten Vergleich geben Sie die Widerristhöhe einer bestimmten Rasse als benutzerdefinierte Höhe ein, statt sich auf die generische Hundefigur zu verlassen.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum Tiergrößen schwerer zu bestimmen sind als Menschengrößen',
        paragraphs: [
          'Ein Mensch steht aufrecht, hält für ein Maßband still und behält vom Morgen bis zum Abend dieselbe Größe, was die Messung beim Menschen fast trivial macht. Tiere verweigern die Zusammenarbeit auf jede erdenkliche Weise: Sie bewegen sich, sie ducken sich, sie richten sich auf, sie grasen, und ihre Körper sind horizontal statt vertikal gebaut, sodass schon die Idee von „Größe" definiert werden muss, bevor sie gemessen werden kann. Diese Definition ist es, die den Tiervergleich interessant macht, denn ein einzelnes Tier kann je nach Haltung legitimerweise zwei oder drei verschiedene Größen tragen, und jede erzählt eine andere Geschichte darüber, wie das Tier lebt.',
          'Der Widerrist-Standard existiert genau, um diese Mehrdeutigkeit zu durchschneiden. Der Widerrist ist der Knochenkamm, wo der Hals in den Rücken übergeht, und anders als der Kopf kann er nicht nach Belieben gehoben oder gesenkt werden. Ein Pferd, das den Kopf zum Trinken senkt, und ein Pferd, das den Kopf alarmiert hochwirft, haben dieselbe Widerristhöhe, weshalb Rassenregister, tierärztliche Unterlagen und Wildtiererhebungen alle an ihm verankert sind. Wenn Sie einen Vierbeiner auf der Vergleichsgrafik sehen, sitzt seine Rückenlinie auf seiner Widerristhöhe, und Kopf und Ohren ragen natürlich über diese Linie hinaus, genau wie im wirklichen Leben.',
        ],
      },
      {
        heading: 'Wie Messung in der Praxis funktioniert – und wo sie schiefgeht',
        paragraphs: [
          'Ein ruhiges Tier zu messen ist unkompliziert: Stellen Sie es auf ebenen Boden, finden Sie den höchsten Punkt der Schulterblätter und ziehen Sie eine senkrechte Linie zum Boden. Ein wildes oder unkooperatives Tier zu messen ist eine andere Aufgabe, und Forscher schätzen oft aus Spuren, aus Fotografien mit einem bekannten Referenzobjekt oder aus Skelettresten. Deshalb weichen veröffentlichte Größen für dieselbe Art oft um 10 cm oder mehr voneinander ab, und deshalb verwendet das Tool typische Erwachsenenwerte statt rekordbrechender Extreme. Ein Rekordelefant oder eine außergewöhnlich große Giraffe ist eine Kuriosität, kein repräsentatives Tier, und sich mit einem Ausreißer zu vergleichen, verzerrt das Bild.',
          'Der häufigste Fehler ist das Vermischen von Haltungen. Die Schulterhöhe eines Bären auf allen vieren und seine Standhöhe auf den Hinterbeinen unterscheiden sich um mehr als einen Meter, und beide Zahlen kursieren online ohne Kennzeichnung. Dieselbe Falle schnappt bei Elefanten zu, wo die Schulterhöhe manchmal mit der Kopfhöhe verwechselt wird, und bei Kamelen, wo der Höcker 30 cm über der Schulterlinie sitzen kann. Das Tool vermeidet dies, indem es eine Haltung pro Tier festlegt und sie in der Bezeichnung angibt, sodass ein Vergleich zwischen einem Bären und einem Menschen immer einer auf Augenhöhe ist.',
        ],
      },
      {
        heading: 'Extreme, die neu definieren, was groß bedeutet',
        paragraphs: [
          'Das Tierreich dehnt das menschliche Maßstabsgefühl in beide Richtungen. An einem Ende erreicht eine Hauskatze mit 25 cm an der Schulter kaum den Knöchel eines Erwachsenen, und das ganze Tier passt unter einen Couchtisch. Am anderen Ende ist eine Giraffe mit 480 cm fast drei durchschnittliche Menschen, aufeinandergestapelt, und ihre Beine allein sind etwa so groß wie eine Person. Zwischen diesen Polen sitzen die Tiere, denen Menschen tatsächlich begegnen: Hunde, Pferde und Kühe, deren Widerristhöhen sich zwischen 60 und 160 cm gruppieren, genau in dem Bereich, in dem ein Mensch sie auf einen Blick beurteilen kann.',
          'Was die meisten Menschen überrascht, ist, wie viel der Größe eines großen Tieres Bein ist. Die Beine einer Giraffe sind etwa 1,8 m lang, was bedeutet, dass das Tier bereits Menschenhöhe hat, bevor sein Körper überhaupt beginnt, und sein Hals fügt oben weitere 1,8 m hinzu. Elefanten kehren das Muster um: Ihre Beine sind vergleichsweise kurz und säulenartig, und ihre Masse kommt von einem gewaltigen Rumpf, der hoch über dem Boden sitzt. Beide Tiere neben einem Menschen auf derselben Grundlinie zu sehen, macht den Unterschied auf eine Weise offensichtlich, wie es Zahlen allein nie tun.',
        ],
      },
      {
        heading: 'Häufige Missverständnisse – und wie Sie das Tool gut nutzen',
        paragraphs: [
          'Das hartnäckigste Missverständnis ist, dass die Größe eines Pferdes seinen Kopf einschließt. Das tut sie nicht, und ein Pferd, dessen Widerrist 160 cm misst, trägt seinen Kopf in Alarmhaltung deutlich über 200 cm, weshalb Menschen, die einem Pferd persönlich begegnen, oft darauf bestehen, die veröffentlichte Größe sei falsch. Dieselbe Logik gilt für Hirsche, wo das Geweih ausgeschlossen wird, und für Hunde, wo die Ohren ausgeschlossen werden. Die Grafik ist darin ehrlich: Sie zeichnet den Körper des Tieres bis zu seiner gemessenen Höhe und lässt den Kopf über die Linie hinausragen.',
          'Um das Beste aus dem Tool herauszuholen, beginnen Sie mit einer menschlichen Figur, die Sie kennen, fügen Sie ein Tier nach dem anderen hinzu und beobachten Sie die Grundlinie statt der Oberkanten der Zeichnungen. Vergleichen Sie ein Pferd mit einem Menschen, fügen Sie dann einen Löwen hinzu, um zu sehen, wie die Schulter einer Großkatze unter der eines Pferdes sitzt, und fügen Sie dann einen Elefanten hinzu, um den Sprung in den wahren Megafauna-Maßstab zu sehen. Wenn Sie ein bestimmtes Tier vergleichen wollen, etwa Ihren eigenen Hund, messen Sie seinen Widerrist mit einer Wasserwaage und einer Wand, geben Sie diese genaue Zahl als benutzerdefinierte Höhe ein, und die Grafik zeigt Ihnen präzise, wo Ihr Hund im Verhältnis zu allem anderen sitzt.',
        ],
      },
    ],
  },
  objects: {
    measurementAnchor: 'Boden / Untergrund bis zur höchsten starren Strukturebene',
    measurementGuide: 'Objekte werden von ihrer ebenen Auflagefläche, gewöhnlich dem Boden oder dem Straßenbelag, gerade nach oben bis zu ihrem höchsten starren Punkt gemessen, also bis zur Oberkante der Rückenlehne eines Stuhls, zum oberen Scharnier eines Kühlschranks oder zur Dachlinie eines Autos, aber nicht bis zu einem weichen oder verstellbaren Extra wie einer Antenne oder einer hochgestellten Kopfstütze. Standardmaße beschreiben eine übliche hergestellte Größe statt eines Naturgesetzes, sodass eine „Standardtür" in den Vereinigten Staaten ein Türblatt von 80 Zoll (203 cm) ist, andernorts aber üblicherweise als 210 cm Rahmenöffnung verkauft wird, und dieselbe Tür kann unterschiedlich messen, je nachdem, ob der Rahmen mitgezählt wird. Geben Sie immer an, welcher Punkt gemessen wurde, denn zwei ehrliche Messungen desselben Objekts können um mehrere Zentimeter auseinanderliegen, wenn die eine Zierleisten, Scharniere oder Dachrelinge einschließt und die andere nicht.',
    measurementNote: 'Objekte werden vom Boden bis zu ihrem höchsten starren Punkt gemessen.',
    commonHeights: [
      { label: 'Esstisch', note: 'Boden bis zur Tischplattenoberfläche' },
      { label: 'Waschmaschine', note: 'Boden bis zur oberen Platte, Standard-Frontlader' },
      { label: 'Sofa', note: 'Boden bis zur Oberkante der Rückenpolster' },
      { label: 'Esszimmerstuhl', note: 'Boden bis zur Oberkante der Rückenlehne' },
      { label: 'Fahrrad', note: 'Boden bis zur Oberkante des Lenkers' },
      { label: 'Motorrad', note: 'Boden bis zum Lenker oder zur Oberkante der Windschutzscheibe' },
      { label: 'Limousine', note: 'Straßenbelag bis zum Dachscheitel' },
      { label: 'Stehlampe', note: 'Boden bis zur Oberkante des Lampenschirms oder der Endkappe' },
      { label: 'Kühlschrank', note: 'Boden bis zum oberen Türscharnier' },
      { label: 'Bücherregal', note: 'Boden bis zum obersten Brett oder Kranz' },
      { label: 'Pickup-Truck', note: 'Boden bis zur Oberkante des Fahrerhausdachs' },
      { label: 'Kleiderschrank', note: 'Boden bis zur Oberkante des Schranks' },
      { label: 'Standardtür', note: 'Boden bis zur Oberkante der Rahmenöffnung' },
      { label: 'Basketballkorb', note: 'Spielfeldboden bis zur Ringoberfläche, Vorschrift' },
      { label: 'Stadtbus', note: 'Straßenoberfläche bis zum Dachdeck' },
    ],
    faqs: [
      {
        question: 'Warum hat eine „Standardtür" mehr als eine Höhe?',
        answer: 'Weil die Zahl vom Land abhängt und davon, was genau gemessen wird. In den Vereinigten Staaten ist das übliche Innentürblatt 80 Zoll, also 203 cm, während die Rahmenöffnung, in der es sitzt, oft bei etwa 210 cm liegt, und europäische Türen werden üblicherweise mit 210 cm verkauft. Das Tool verwendet 210 cm für die Rahmenöffnung, weil das die Höhe ist, durch die eine Person tatsächlich hindurchgeht, aber wenn Ihre eigene Tür 203 cm misst, geben Sie das als benutzerdefinierte Höhe für einen exakten Vergleich ein.',
      },
      {
        question: 'Wird die Höhe eines Autos bis zum Dach oder bis zu den Dachrelingen gemessen?',
        answer: 'Bis zum höchsten starren Punkt des Dachs, was bei den meisten Autos das Dachblech selbst ist, aber Dachrelinge oder eine Dachbox können mehrere Zentimeter hinzufügen und sind manchmal in Herstellerangaben enthalten. Deshalb listet eine Quelle eine Limousine mit 145 cm und eine andere mit 148 cm: Das Auto ist dasselbe, aber ein Wert schließt die Relinge ein. Das Tool verwendet den Dachscheitel ohne Zubehör, sodass ein Auto mit Dachbox im wirklichen Leben etwas größer stehen wird als auf der Grafik.',
      },
      {
        question: 'Warum ist ein Basketballkorb überall exakt 10 Fuß hoch?',
        answer: 'Die Ringhöhe von 10 Fuß, also 305 cm, wurde festgelegt, als das Spiel erfunden wurde, und hat sich nie geändert, und jede große Liga der Welt verwendet denselben Wert. Sie ist eine der wenigen Objekthöhen, die eine echte globale Konstante ist statt einer Fertigungskonvention, was sie zu einem ungewöhnlich verlässlichen Bezugspunkt macht. Wenn Sie den Ring berühren können, können Sie 305 cm erreichen, und sich mit dieser Linie zu vergleichen, sagt Ihnen sofort, wie weit über Ihrem Kopf sie sitzt.',
      },
      {
        question: 'Wie vergleiche ich meine eigenen Möbel, wenn sie keine Standardgröße haben?',
        answer: 'Messen Sie sie auf dieselbe Weise wie das Tool: Stellen Sie sie auf einen ebenen Boden, halten Sie ein Maßband senkrecht vom Boden bis zum höchsten starren Punkt und lesen Sie die Zahl in Zentimetern ab. Ein Stuhl wird bis zur Oberkante seiner Rückenlehne gemessen, nicht bis zu seiner Sitzfläche, und ein Bücherregal bis zu seiner Oberkante, nicht bis zu seinem größten Buch. Geben Sie diese Zahl als benutzerdefinierte Höhe ein, und die Grafik stellt Ihr genaues Möbelstück neben eine menschliche Figur.',
      },
      {
        question: 'Warum entspricht ein zweistöckiges Gebäude nicht dem Doppelten eines einstöckigen Hauses?',
        answer: 'Weil die Höhe eines Gebäudes Geschossdecken, Dachkonstruktion und Brüstungen einschließt, nicht nur zwei Stapel Raumhöhe, und weil die Deckenhöhen je nach Ära und Zweck variieren. Ein einstöckiges Haus mit 450 cm bis zum Dachfirst und ein zweistöckiges Gebäude mit 600 cm bis zur Brüstung sind typische Werte, aber ein altes Haus mit hohen Decken kann einem modernen zweistöckigen Block Konkurrenz machen. Die Gebäudewerte der Grafik sind repräsentativ, keine Bauzeichnungen, also verwenden Sie sie für ein Gefühl für den Maßstab statt für Bauplanung.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum Alltagsobjekte das beste Lineal sind, das Sie bereits besitzen',
        paragraphs: [
          'Menschen tun sich schwer, sich eine Zahl wie 175 cm für sich allein vorzustellen, aber sie verstehen sofort eine Tür, durch die sie jeden Tag gehen, ein Auto, das sie fahren, und einen Stuhl, auf dem sie sitzen. Genau das macht Objekte zur nützlichsten Kategorie in einem Größenvergleichstool: Die Referenzen sind bereits im Gedächtnis des Lesers installiert, und die Grafik muss sie nur auf einer gemeinsamen Grundlinie anordnen. Eine menschliche Figur neben einem Türrahmen von 210 cm liest sich sofort, weil jeder das Gefühl einer Tür kennt, die eine Handbreit über dem Kopf vorbeigeht oder zum Ducken zwingt.',
          'Objekte verankern auch den Rest der Skala. Sobald Sie wissen, dass ein Limousinendach bei etwa 145 cm sitzt, ungefähr Brusthöhe bei einem Erwachsenen, können Sie jedes Fahrzeug auf der Straße dagegen beurteilen. Sobald Sie wissen, dass ein Basketballring auf 305 cm fixiert ist, können Sie sich genau vorstellen, wie weit über dem Kopf eines Spielers er hängt. Das sind keine abstrakten Messungen, sondern physische Tatsachen, an die Menschen gestoßen sind, nach denen sie gegriffen haben und unter denen sie sich geduckt haben, weshalb sie bessere gedankliche Lineale abgeben als jede Zahl allein.',
        ],
      },
      {
        heading: 'Wie Objektmessung funktioniert – und warum zwei ehrliche Zahlen widersprüchlich sein können',
        paragraphs: [
          'Ein Objekt zu messen klingt einfach, bis Sie entscheiden, welcher Punkt als Oberkante zählt. Ein Stuhl hat eine Sitzfläche bei etwa 45 cm und eine Rückenlehne bei etwa 90 cm, und beides sind reale Höhen desselben Stuhls, aber nur die Rückenlehne ist seine Gesamthöhe. Der Korpus eines Kühlschranks mag bei 170 cm enden, während sein oberes Scharnier 175 cm erreicht. Ein Auto, gemessen bis zum Dachblech, und dasselbe Auto, gemessen bis zu seinen Dachrelingen, unterscheiden sich um ein paar Zentimeter. Keiner dieser Widersprüche bedeutet, dass jemand falschliegt; sie bedeuten, dass der Messpunkt nicht angegeben wurde.',
          'Das Tool folgt einer Regel, um Vergleiche ehrlich zu halten: Boden bis zum höchsten starren Punkt, ohne weiche, vorübergehende oder optionale Extras. Eine Antenne zählt nicht, eine hochgestellte Kopfstütze zählt nicht und eine Dachbox zählt nicht, weil diese hinzugefügt, entfernt oder verstellt werden können, ohne das Objekt selbst zu verändern. Die Regel anzugeben zählt mehr als die Regel selbst, denn sobald die Regel bekannt ist, kann jeder die Messung mit einem Maßband und einem ebenen Boden reproduzieren, und diese Reproduzierbarkeit ist es, die eine nützliche Referenz von einer Schätzung unterscheidet.',
        ],
      },
      {
        heading: 'Standards – und warum sie je nach Land und Ära variieren',
        paragraphs: [
          'Manche Objekthöhen sind echte globale Konstanten. Ein Basketballring misst 305 cm auf jedem Spielfeld in jedem Land, weil die Regeln des Sports ihn so festlegten und nie änderten. Die meisten anderen sind Konventionen, die über Grenzen und Jahrzehnte driften. Türhöhen sind das klassische Beispiel: Die vertraute amerikanische Innentür mit 80 Zoll ist ein Türblatt von 203 cm, während viele europäische und asiatische Märkte um eine Öffnung von 210 cm bauen und ältere Häuser oft Türen haben, die kürzer sind als beides. Möbel folgen demselben Muster, wobei Schreibtischhöhen sich um 75 cm einpendeln, weil das zum durchschnittlichen sitzenden Ellbogen passt, während Esstische je nach Stil und Ära variieren.',
          'Fahrzeuge zeigen dieselbe Drift in eine andere Richtung. Eine Limousine von vor zwanzig Jahren stand typischerweise niedriger als eine moderne, und der Aufstieg der SUVs hat das durchschnittliche Autodach von etwa 145 cm auf 170 cm oder mehr gedrückt. Deshalb verwendet die Grafik typische aktuelle Werte, statt so zu tun, als decke eine einzige Zahl alle je gebauten Autos ab. Wenn Ihr Auto älter oder größer als typisch ist, dauert es Sekunden, es zu messen und eine benutzerdefinierte Höhe einzugeben, und das ist immer genauer, als einer generischen Zahl zu vertrauen.',
        ],
      },
      {
        heading: 'Häufige Missverständnisse – und wie Sie das Tool gut nutzen',
        paragraphs: [
          'Der häufigste Fehler ist, die falschen Punkte zu vergleichen: eine Person an der Sitzfläche eines Stuhls zu beurteilen statt an seiner Rückenlehne oder an der Fensterlinie eines Autos statt an seinem Dach. Die Grafik verhindert das, indem sie jedes Objekt bis zu seiner Gesamthöhe zeichnet, sodass die Oberkante jeder Zeichnung der Messpunkt ist. Eine weitere häufige Überraschung ist, wie groß gewöhnliche Dinge sich herausstellen: Ein Kühlschrank mit 175 cm ist genau durchschnittliche Menschenhöhe, weshalb er eine Küche dominiert, und ein Stadtbus mit 320 cm ist fast doppelt so groß wie eine Person, weshalb sich das Aussteigen anfühlt wie der Abstieg von einer kleinen Klippe.',
          'Um das Tool gut zu nutzen, beginnen Sie mit Objekten aus Ihrem eigenen Zuhause. Stellen Sie eine menschliche Figur neben eine Tür, fügen Sie dann Ihr Auto hinzu, dann Ihren Kühlschrank, und beobachten Sie, wie die vertraute Welt sich stapelt. Fügen Sie dann etwas außerhalb des Alltags hinzu, etwa einen Bus oder einen Basketballring, um die Skala nach oben zu dehnen. Wenn eine Figur falsch aussieht, messen Sie das echte Objekt, bevor Sie an der Grafik zweifeln: In neun von zehn Fällen ist die Überraschung real, und das Objekt ist wirklich so groß.',
        ],
      },
    ],
  },
  plants: {
    measurementAnchor: 'Bodenlinie bis zum Scheitel des oberen Blätterdachs',
    measurementGuide: 'Die Pflanzenhöhe wird als der senkrechte Abstand von der Bodenlinie an der Basis der Pflanze bis zur höchsten lebenden Spitze ihres Blätterdachs oder Stängels gemessen, wobei die Pflanze in ihrer natürlichen Wuchshaltung steht statt gestreckt oder aufrecht angebunden. Bei Bäumen unterscheiden Förster zwischen der Höhe eines ausgewachsenen Exemplars, das offen wächst, und einem, das in einem dichten Bestand konkurriert, und sie verzeichnen das Jahr der Messung, weil ein lebender Baum weiterwächst, durch Stürme oder Feuer Krone verliert und bei einer späteren Erhebung daher kleiner sein kann als zuvor. Dieselbe Art kann enorm variieren: Eine Sonnenblume in einem Hausgarten kann 2 Meter erreichen, während ein Rekordexemplar 10 Meter übersteigt, und eine Dattelpalme in einem trockenen Obstgarten bleibt weit kleiner als eine in einem tiefen, bewässerten Hain. Deshalb beschreibt jede Höhe auf dieser Seite eine bestimmte Art von Exemplar – ein Rekordindividuum, eine typische ausgewachsene Pflanze oder eine übliche Gartenform – und die Notiz neben jedem Eintrag sagt, welche es ist.',
    measurementNote: 'Gemessen von der Bodenlinie bis zur höchsten lebenden Spitze des Blätterdachs.',
    commonHeights: [
      { label: 'Hyperion-Küstenmammutbaum', note: 'Höchster bekannter lebender Baum, gemessen mit 115,92 m im Redwood National Park, Kalifornien' },
      { label: 'Centurion-Rieseneukalyptus', note: 'Höchste Blütenpflanze der Welt, Tasmanien; gemessen mit 99,6 m, nachdem er 2019 Krone durch Feuer verlor' },
      { label: 'Doerner Fir', note: 'Höchste bekannte Douglasie und höchster Nicht-Mammutbaum, gemessen mit 99,3 m im Jahr 2022 in Oregon' },
      { label: 'General Sherman (Riesenmammutbaum)', note: 'Größter bekannter lebender einstämmiger Baum nach Stammvolumen, Sequoia National Park, Kalifornien' },
      { label: 'Riesenbambus', note: 'Typische ausgewachsene Höhe von Dendrocalamus giganteus, dem größten Gras der Welt' },
      { label: 'Afrikanischer Baobab', note: 'Großer ausgewachsener Adansonia digitata, ein gewaltiger Sukkulentenbaum der afrikanischen Savannen' },
      { label: 'Dattelpalme', note: 'Typische ausgewachsene Phoenix dactylifera, die kultivierte Palme der Oasen des Nahen Ostens und Nordafrikas' },
      { label: 'Ausgewachsener Saguaro-Kaktus', note: 'Durchschnittlicher ausgewachsener Carnegiea gigantea laut US National Park Service, Sonora-Wüste' },
      { label: 'Rekord-Sonnenblume', note: 'Guinness-Weltrekord-Sonnenblume, gezüchtet von Alex Babich, USA, verifiziert am 3. September 2025' },
      { label: 'Bananenpflanze', note: 'Typische ausgewachsene kultivierte Bananenpflanze, ein Riesen-Kraut mit einem Scheinstamm statt eines Holzstamms' },
      { label: 'Garten-Obstbaum (Apfel/Birne)', note: 'Halbstamm-Krone eines Obstgartens' },
      { label: 'Gewöhnliche Sonnenblume', note: 'Gewöhnliche Garten-Sonnenblume in voller Blüte' },
    ],
    faqs: [
      {
        question: 'Warum geben verschiedene Quellen unterschiedliche Höhen für denselben berühmten Baum an?',
        answer: 'Ein lebender Baum ist ein bewegliches Ziel. Er wächst jedes Jahr, und er kann durch Blitz, Feuer oder Wind Meter an Krone verlieren, sodass ein Wert nur für das Jahr korrekt ist, in dem er gemessen wurde. Hyperion wurde zum Beispiel 2006 mit 115,55 m gemessen und 2019 mit 115,92 m, und Centurion verlor 2019 in einem Buschfeuer etwa 4 m. Auch der Hang zählt: Vermesser geben die Höhe über dem durchschnittlichen Bodenniveau an, während ein Band, das von der Krone zum tiefsten Punkt hangabwärts fallen gelassen wird, mehrere Meter mehr anzeigen kann.',
      },
      {
        question: 'Wie groß wird eine gewöhnliche Sonnenblume tatsächlich?',
        answer: 'Die meisten Garten-Sonnenblumen erreichen 1,5 bis 3 Meter, was bereits größer ist als die meisten Erwachsenen. Die Rekordbücher sind eine andere Geschichte: Wettbewerbszüchter haben die Art mit reichem Boden, Schutz und Stützung über 10 Meter getrieben, wobei der aktuelle Guinness-Rekord bei 10,90 m liegt. Wenn Sie eine Sonnenblume im Tool vergleichen, prüfen Sie, ob der Eintrag eine Gartenpflanze oder ein Rekordexemplar ist, denn die beiden unterscheiden sich um den Faktor fünf.',
      },
      {
        question: 'Kann ich im Tool eine Zimmerpflanze mit Möbeln vergleichen?',
        answer: 'Ja, und das ist eine der praktischsten Anwendungen dieser Kategorie. Stellen Sie eine Geigenfeige oder eine Monstera neben einen Esstisch, ein Bücherregal oder einen Durchgang, um zu beurteilen, ob sie in einen Raum passt und wie viel Licht ihre obersten Blätter bekommen. Messen Sie die Pflanze ab der Erdoberfläche in ihrem Topf, nicht ab dem Boden, und denken Sie daran, dass eine klein gekaufte Pflanze weiter zu ihrer ausgewachsenen Höhe wachsen wird.',
      },
      {
        question: 'Warum zählt eine Bananenpflanze nicht als Baum?',
        answer: 'Eine Bananenpflanze hat keinen Holzstamm. Was wie ein Stamm aussieht, ist ein Scheinstamm aus eng gewickelten Blattscheiden, und die gesamte oberirdische Pflanze stirbt nach der Fruchtreife ab, während neue Triebe aus dem unterirdischen Rhizom aufsteigen. Botaniker nennen sie daher die größte krautige Blütenpflanze statt eines Baumes, auch wenn ein ausgewachsenes Exemplar 5 Meter groß stehen und einen Garten beschatten kann wie ein kleiner Baum.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum Pflanzenhöhen die schwierigsten Zahlen in der Natur sind',
        paragraphs: [
          'Keine andere Kategorie auf dieser Seite spannt eine so breite Spanne wie die Pflanzen. An einem Ende sitzt eine Garten-Sonnenblume, über die ein Kind hinwegsehen kann; am anderen ein Küstenmammutbaum, der größer ist als ein 35-stöckiges Gebäude. Dazwischen liegen Palmen, Kakteen, Bambusse, Obstbäume und Sträucher, jeder mit seiner eigenen Wuchsform, Lebensdauer und Beziehung zu seiner Umgebung. Diese Spannweite macht Pflanzenhöhen so befriedigend zu vergleichen: Eine Person neben einen Mammutbaum zu stellen, verwandelt eine abstrakte Zahl wie 116 Meter in etwas Gefühltes, während dieselbe Person neben einem Saguaro erklärt, warum eine Wüste, die aus dem Autofenster leer aussieht, in Wirklichkeit voller langsamen, aufragenden Lebens ist.',
          'Die Schwierigkeit ist, dass die Höhe einer Pflanze nie eine feste Eigenschaft ist wie die Höhe eines Türdurchgangs. Eine Pflanze wächst, und ihre Endgröße hängt von Boden, Wasser, Licht, Wind und Nachbarn ab. Zwei Samen desselben Elternteils können in der Höhe Meter auseinander enden, wenn der eine in einem geschützten, bewässerten Garten landet und der andere an einem trockenen, windigen Hang. Das Alter zählt genauso viel: Ein Saguaro braucht etwa ein Jahrzehnt, um einen einzigen Zoll zu erreichen, kann aber zwei Jahrhunderte stehen und schließlich 12 Meter übersteigen, während ein Bambustrieb seine vollen 30 Meter in einer einzigen Wachstumssaison erreicht und dann nie wieder größer wird. Jeder ehrliche Pflanzenvergleich muss daher sagen, welche Art von Exemplar er beschreibt, und diese Seite tut genau das in der Notiz neben jedem Eintrag.',
        ],
      },
      {
        heading: 'Wie ein Baum tatsächlich gemessen wird',
        paragraphs: [
          'Bei einer Gartenpflanze ist die Messung einfach: Stellen Sie ein Maßband daneben und lesen Sie die Oberkante ab. Bei einem Riesenbaum ist sie eine kleine Expedition. Der Goldstandard ist der Bandabwurf, bei dem ein Kletterer zum höchsten lebenden Trieb aufsteigt und ein Band zum Boden ablässt, eine Methode, die Hyperions Rekord bestätigte und noch immer verwendet wird, weil Laser-Entfernungsmesser durch geneigte Stämme, dichtes Laub und Hänge getäuscht werden können. Vermesser korrigieren auch den Boden selbst: Ein Baum, der an einem steilen Hang wächst, ist von seiner Talseite gemessen größer als von seiner Bergseite, weshalb veröffentlichte Höhen das durchschnittliche Bodenniveau um die Basis verwenden.',
          'Diese Details erklären, warum derselbe Baum in verschiedenen Jahren mit unterschiedlichen Höhen erscheint. Ein Baum wächst nicht nur; er bricht auch. Centurion, der Rieseneukalyptus in Tasmanien, wurde 2018 mit 100,5 m gemessen und verlor dann im folgenden Jahr in einem Buschfeuer etwa 4 m Krone, sodass seine aktuelle veröffentlichte Höhe 99,6 m beträgt. Die Doerner Fir in Oregon maß 1991 100,3 m und 2022 99,3 m, und sie verlor 2025 weitere Krone durch Feuer. Keine dieser Korrekturen bedeutet, dass die früheren Werte falsch waren; sie bedeuten, dass der Baum sich verändert hat. Wenn Sie das Vergleichstool nutzen, behandeln Sie Rekordbaumhöhen als Momentaufnahmen benannter Individuen an einem bestimmten Datum und Gartenpflanzenhöhen als typische Bereiche statt als Versprechen.',
        ],
      },
      {
        heading: 'Die Extreme, von Rekordbäumen bis zu einer einzelnen Blüte',
        paragraphs: [
          'Die Spitze der Pflanzenwelt gehört Nadelbäumen und einem außergewöhnlichen Blütenbaum. Hyperion, ein Küstenmammutbaum in Kalifornien, ist mit etwa 116 m das höchste bekannte Lebewesen an Land, und er wächst noch. Knapp dahinter kommen Centurion, ein Rieseneukalyptus in Tasmanien, der die höchste Blütenpflanze der Erde ist, und die Doerner Fir, die höchste Douglasie und der höchste Baum der Welt, der kein Mammutbaum ist. General Sherman, der Riesenmammutbaum, ist mit 83,8 m kleiner als alle drei, hält aber einen anderen Rekord: Nach Stammvolumen ist er der größte einstämmige lebende Baum – eine Erinnerung daran, dass Höhe und Masse verschiedene Leistungen sind.',
          'Das kleinere Ende der Skala ist genauso überraschend. Riesenbambus, technisch ein Gras, erreicht 30 m, was ihn größer macht als die meisten Vorstadtbäume und zum schnellsten Weg zu einem hohen Sichtschutz in einem Garten. Der Saguaro, der größte Kaktus der Vereinigten Staaten, misst im ausgewachsenen Zustand im Durchschnitt etwa 12 m und kann zweihundert Jahre leben, wobei er so langsam wächst, dass eine zehn Jahre alte Pflanze kaum knöchelhoch ist. Und die Sonnenblume zeigt, wie weit Kultivierung eine Art dehnen kann: Dieselbe Pflanze, die in einem typischen Garten 1,8 m steht, wurde von einem Rekordhalter in Indiana auf 10,90 m gezogen, eine Höhe, die ein dreistöckiges Haus überragen würde. Diese Extreme Seite an Seite zu vergleichen, ist der schnellste Weg zu begreifen, dass „Pflanzenhöhe" keine einzige Zahl ist, sondern ein ganzes Spektrum, geformt von Genetik, Klima und Zeit.',
        ],
      },
      {
        heading: 'Wie Sie das Vergleichstool für Pflanzen nutzen',
        paragraphs: [
          'Beginnen Sie mit etwas, das Sie kennen. Stellen Sie einen durchschnittlichen Erwachsenen neben eine Dattelpalme, um zu sehen, warum Oasenstädte sich beschattet und umschlossen anfühlen, oder neben einen ausgewachsenen Saguaro, um zu verstehen, warum Wüstenwanderer Kakteen als Orientierungspunkte nutzen. Probieren Sie dann einen praktischen Vergleich: eine Bananenpflanze neben einem Gartenzaun, einen Halbstamm-Apfelbaum neben einem einstöckigen Haus oder eine Zimmerpflanze neben einem Bücherregal, bevor Sie sie kaufen. Das Tool hält jede Pflanze auf derselben Grundlinie, sodass das Auge den Maßstab ehrlich beurteilen kann statt aus Fotografien zu raten, wo ein Weitwinkelobjektiv einen Strauch wie einen Baum aussehen lassen kann.',
          'Eine nützliche Gewohnheit ist, dieselbe Art in zwei Altern oder Formen zu vergleichen. Stellen Sie eine gewöhnliche Sonnenblume neben die Rekord-Sonnenblume, und der Abstand zeigt, was selektive Zucht leisten kann; stellen Sie einen jungen Saguaro neben einen ausgewachsenen, und der Abstand zeigt, warum Wüstenschutz in Jahrhunderten statt in Jahreszeiten gemessen wird. Wenn Sie einen Garten planen, vergleichen Sie die ausgewachsene Höhe eines Baumes mit der Höhe Ihrer Dachlinie und Ihrer Stromleitungen, denn ein Baum, der heute für Schatten gepflanzt wird, kann in zwanzig Jahren ein Schnittproblem werden. Das Tool wird Ihnen nicht sagen, welche Pflanze Sie wählen sollen, aber es wird verhindern, dass Sie von der Größe der gewählten überrascht werden.',
        ],
      },
    ],
  },
  sports: {
    measurementAnchor: 'Offizielle barfüßige Combine-Größe und vorgeschriebene Korbhöhe',
    measurementGuide: 'Die Größen von Athleten stammen aus offiziellen Messungen, nicht aus Werbematerial. Seit der Saison 2019 zertifiziert die NBA barfüßige Größen in den Trainingslagern der Teams und ersetzt damit die ältere Praxis, Spieler in ihren Spielschuhen zu listen, was typischerweise 2 bis 5 cm hinzufügte. Fußballregistrierungen stammen von der FIFA und aus Klubunterlagen, Cricket-Kader aus den Teamblättern des ICC und Turnprofile aus Daten nationaler Verbände, sodass die Werte für denselben Athleten je nach Quelle leicht voneinander abweichen können, je nachdem, wann und wie sie genommen wurden. Gerätehöhen sind eine ganz andere Art von Zahl: Sie werden vom Regelbuch festgelegt, sodass ein Basketballring überall auf der Welt 305 cm misst, eine Fußball-Querlatte 244 cm und ein Volleyballnetz der Männer 243 cm, egal, wer spielt.',
    measurementNote: 'Athletengrößen sind barfüßige Combine-Werte; Gerätehöhen sind vorgeschriebene Standards.',
    commonHeights: [
      { label: 'Yao Ming', note: 'Ehemaliger Center der Houston Rockets, größter Spieler in der Basketball Hall of Fame' },
      { label: 'Victor Wembanyama', note: 'Center der San Antonio Spurs, gelistet mit 7 ft 4 in' },
      { label: 'Volleyballnetz der Männer', note: 'Vorgeschriebene Netzhöhe der FIVB für den Männerwettbewerb' },
      { label: 'Querlatte des Fußballtors', note: 'FIFA-Spielregeln, Unterkante der Querlatte über dem Boden' },
      { label: 'Volleyballnetz der Frauen', note: 'Vorgeschriebene Netzhöhe der FIVB für den Frauenwettbewerb' },
      { label: 'Shaquille O\'Neal', note: 'Ehemaliger NBA-Center, viermaliger NBA-Champion' },
      { label: 'Michael Jordan', note: 'Ehemaliger Shooting Guard der Chicago Bulls, sechsmaliger NBA-Champion' },
      { label: 'Usain Bolt', note: 'Jamaikanischer Sprinter, Weltrekordhalter über 100 m und 200 m' },
      { label: 'Cristiano Ronaldo', note: 'Portugiesischer Stürmer, einer der erfolgreichsten Torschützen im Männer-Länderfußball' },
      { label: 'Lionel Messi', note: 'Argentinischer Stürmer, achtmaliger Gewinner des Ballon d\'Or' },
      { label: 'Muggsy Bogues', note: 'Kleinster Spieler der NBA-Geschichte, 14 Saisons als Point Guard' },
      { label: 'Simone Biles', note: 'US-amerikanische Kunstturnerin, am höchsten dekorierte Turnerin der Geschichte' },
      { label: 'Vorgeschriebener Basketballring', note: 'Standard-Ringhöhe der FIBA und NBA über dem Spielfeld' },
      { label: 'Cricket-Stumps', note: 'MCC-Gesetze des Cricket, Oberkanten der Stumps über der Spielfläche' },
    ],
    faqs: [
      {
        question: 'Misst die NBA die Spieler mit oder ohne Schuhe?',
        answer: 'Seit 2019 ohne Schuhe. Vor dieser Saison listeten die Teams die Spieler in ihren Basketballschuhen, was ungefähr einen Zoll oder zwei hinzufügte und Vergleiche unzuverlässig machte. Die Liga zertifiziert die barfüßige Größe jetzt in Trainingslagern, sodass ein Spieler, der heute mit 6 ft 6 in gelistet ist, barfuß wirklich so groß ist, und die Zahl im Kader stimmt mit der Zahl vom Draft Combine überein. Ältere Listungen aus der Zeit vor der Änderung können noch etwas größer ausfallen als die barfüßige Größe des Spielers.',
      },
      {
        question: 'Warum erscheint derselbe Athlet an verschiedenen Orten mit unterschiedlichen Größen?',
        answer: 'Weil die Zahlen aus verschiedenen Momenten und mit verschiedenen Methoden stammen. Ein Fußballer, der mit 17 gemessen wurde, kann noch ein bis zwei Zentimeter wachsen, ein Basketballspieler, der in Schuhen gelistet ist, liest sich größer als derselbe Spieler barfuß, und manche Verbände runden auf den nächsten Zoll, während andere auf den nächsten Zentimeter runden. Auch Teamkader werden zu unterschiedlichen Zeiten aktualisiert. Wenn zwei Quellen um ein bis zwei Zentimeter auseinanderliegen, können beide ehrlich sein; sie messen einfach verschiedene Dinge, und der barfüßige Combine-Wert ist der, dem man für Vergleiche vertrauen sollte.',
      },
      {
        question: 'Wie hoch ist ein Basketballring im Vergleich zu einem Fußballtor?',
        answer: 'Ein Basketballring sitzt bei 305 cm, volle 61 cm über einer Fußball-Querlatte mit 244 cm. Dieser Abstand ist im Tool leicht zu fühlen: Ein großer Basketballspieler wie Yao Ming mit 229 cm reicht immer noch deutlich unter den Ring, auf den er dunkt, während ein Fußballtorwart, der unter einer Querlatte von 244 cm steht, die Latte mit einem Sprung erreichen kann. Das Volleyballnetz der Männer mit 243 cm ist fast exakt so hoch wie eine Fußball-Querlatte, ein Zufall, den es wert ist, ihn Seite an Seite zu sehen.',
      },
      {
        question: 'Warum sind Turner klein, während Basketballspieler groß sind?',
        answer: 'Jede Sportart selektiert den Körper, den ihre Physik belohnt. Turnen belohnt einen kompakten Körperbau, weil ein kleinerer Athlet in der Luft schneller rotiert und weniger Strecke um das Gerät zurücklegen muss, weshalb die größte Turnerin aller Zeiten, Simone Biles, 142 cm misst. Basketball belohnt Reichweite, weil der Ring auf 305 cm fixiert ist und jeder zusätzliche Zentimeter Größe die Hände eines Spielers näher an ihn bringt. Keiner der beiden Körpertypen ist allgemein besser; jeder ist eine Antwort auf die Anforderungen eines bestimmten Spiels.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum der Sport Größe zu einer offiziellen Statistik machte',
        paragraphs: [
          'Nur wenige Bereiche erfassen die menschliche Größe so sorgfältig wie der Profisport. Jedes NBA Draft Combine misst die Kandidaten barfuß mit einem Stadiometer, jeder Fußballverband registriert die Größen seiner Spieler für Spielprogramme, und jedes olympische Teamblatt listet seine Athleten auf den Zentimeter. Der Grund ist praktisch: Größe entscheidet, welche Position ein Spieler ausfüllen kann, wie ein Team verteidigt und welche Taktiken sinnvoll sind. Ein Basketballtrainer muss wissen, ob ein Rookie glaubhaft einen Center von 224 cm decken kann; ein Volleyballtrainer muss wissen, ob ein Blocker über ein Netz von 243 cm reichen kann; ein Fußballscout muss wissen, ob der tiefe Schwerpunkt eines Flügelspielers ihm hilft, mit Tempo die Richtung zu wechseln.',
          'Diese offizielle Aufmerksamkeit macht Sportgrößen ungewöhnlich vertrauenswürdig im Vergleich zu Prominentengrößen, die oft aus Interviews und Schätzungen stammen. Wenn diese Seite Yao Ming mit 229 cm oder Muggsy Bogues mit 160 cm listet, sind das Ligamessungen, keine Schätzungen. Der Abstand zwischen ihnen, 69 cm, ist einer der größten, die je zwischen zwei Spielern in derselben Profiliga gesehen wurden, und er ist ein nützlicher Anker für die ganze Kategorie: Stellen Sie die beiden im Tool Seite an Seite, und Sie sehen sofort, was „groß für Basketball" und „klein für Basketball" wirklich bedeuten, ohne jede Übertreibung.',
        ],
      },
      {
        heading: 'Barfuß, in Schuhen oder im Kader',
        paragraphs: [
          'Die häufigste Verwirrung bei Sportgrößen ist der Unterschied zwischen einer barfüßigen Messung und einer gelisteten Größe. Jahre lang zeigten NBA-Kader die Spieler in ihren Schuhen, was ein paar Zentimeter hinzufügte und einen Spieler von 6 ft 5 in als 6 ft 7 in erscheinen ließ. Die Liga beendete diese Praxis 2019 und zertifiziert nun barfüßige Größen in Trainingslagern, weshalb manche lang etablierte Spieler über Nacht um einen Zoll zu schrumpfen schienen, ohne sich überhaupt verändert zu haben. Wenn Sie eine moderne Listung mit einer alten Sammelkarte vergleichen, ist der barfüßige Wert der ehrliche, und diese Seite verwendet ihn durchgehend.',
          'Andere Sportarten haben ihre eigenen Konventionen. Fußballgrößen stammen aus Verbands- und Klubregistrierungen, die gewöhnlich einmal genommen und selten neu gemessen werden, sodass ein Spieler, der nach der Verpflichtung als Teenager noch wuchs, jahrelang einen Zentimeter zu klein gelistet sein kann. Cricket-Kader listen Größen aus Teamunterlagen statt von einem Combine, und Turnprofile stammen von nationalen Verbänden, die Athleten bei Wettkämpfen messen. Nichts davon macht die Zahlen unzuverlässig, aber es bedeutet, dass ein Unterschied von einem oder zwei Zentimetern zwischen Quellen normales Rauschen ist statt ein Widerspruch. Bei Geräten dagegen gibt es überhaupt kein Rauschen: Das Regelbuch fixiert Ring, Querlatte und Netz, und jedes Spielfeld und jeder Platz der Welt soll übereinstimmen.',
        ],
      },
      {
        heading: 'Die Extreme: Riesen, Ausreißer und die Geräte, gegen die sie spielen',
        paragraphs: [
          'Die lehrreichsten Vergleiche im Sport sind nicht die zwischen zwei ähnlichen Athleten, sondern die zwischen einem Athleten und dem Gerät, das seine Sportart fest installiert. Ein Basketballring mit 305 cm hängt 76 cm über selbst Yao Mings Kopf, was erklärt, warum Dunking eine Leistung des Springens ebenso wie der Größe ist: Die größten Spieler müssen immer noch den Boden verlassen. Eine Fußball-Querlatte mit 244 cm sitzt nur 15 cm über Shaquille O\'Neals Kopf, weshalb Torhüter, die groß, aber selten basketballgroß sind, sie mit einem Sprung und einer Streckung trotzdem erreichen können. Das Volleyballnetz der Männer mit 243 cm und das Netz der Frauen mit 224 cm zeigen, wie eine einzelne Sportart ihr festes Hindernis an ihre Athleten anpasst, und die Cricket-Stumps mit 71 cm zeigen das umgekehrte Extrem: ein Ziel, kaum kniehoch, das ein Bowler aus 20 Metern Entfernung treffen muss.',
          'Die Athleten selbst erzählen dieselbe Geschichte von der anderen Seite. Victor Wembanyama ist mit 224 cm der größte aktive Star im Basketball und immer noch 5 cm kleiner als Yao Ming, während Simone Biles mit 142 cm 18 cm kleiner ist als Muggsy Bogues, der kleinste Mann, der je in der NBA spielte, und dennoch die am höchsten dekorierte Turnerin der Geschichte ist. Usain Bolt brach mit 196 cm die Annahme, dass Sprinter klein sein müssen, indem er lange Schritte nutzte, um Boden zu überdecken, für den kleinere Rivalen mehr Schritte brauchten. Lionel Messi mit 170 cm und Cristiano Ronaldo mit 187 cm zeigen, dass die größte Rivalität des Fußballs auch ein Größenunterschied von 17 cm war, der nie entschied, wer von beiden der Bessere war. Größe im Sport ist in manchen Positionen ein Vorteil und in anderen ein Kompromiss, nie die ganze Geschichte.',
        ],
      },
      {
        heading: 'Wie Sie das Vergleichstool für Sport nutzen',
        paragraphs: [
          'Beginnen Sie mit sich selbst. Fügen Sie Ihre eigene Größe neben einem Basketballring hinzu, und Sie sehen genau, wie weit über Ihrer Reichweite das Ziel von 305 cm sitzt, was die Athletik eines Dunks plötzlich konkret macht. Fügen Sie dann einen Lieblingsspieler hinzu: Stellen Sie sich neben Wembanyama, um zu fühlen, was Reporter mit einem physischen Talent einer Generation meinen, oder neben Muggsy Bogues, um zu sehen, dass eine NBA-Karriere mit 160 cm möglich ist. Trainer und Fans nutzen denselben Trick mit ganzen Teams und reihen eine Startfünf auf, um zu prüfen, ob eine Mannschaft wirklich groß ist oder einfach einen großen Center hat, umgeben von durchschnittlich großen Guards.',
          'Gerätevergleiche sind genauso aufschlussreich. Stellen Sie ein Fußballtor neben einen Basketballring, und der Unterschied von 61 cm zwischen ihnen wird auf eine Weise sichtbar, die das Lesen der Zahlen nie ganz leistet. Stellen Sie ein Volleyballnetz der Männer neben ein Netz der Frauen, und der Abstand von 19 cm erklärt, warum sich die beiden Spiele unterschiedlich ansehen und anfühlen, obwohl das Spielfeld gleich groß ist. Und stellen Sie Cricket-Stumps neben eines von diesen, und Sie werden daran erinnert, dass manche Sportarten ihr zentrales Objekt absichtlich klein machen, damit Können, nicht Statur, den Wettkampf entscheidet. Das Tool hält jeden und alles auf einer Grundlinie, was die einzige ehrliche Art ist, eine Person mit einem Möbelstück zu vergleichen, das nach einem Regelbuch gebaut wurde.',
        ],
      },
    ],
  },
  apparel: {
    measurementAnchor: 'Effektiver vertikaler Versatz, der zur barfüßigen Statur hinzukommt',
    measurementGuide: 'Die Höhe von Bekleidung wird als der effektive vertikale Versatz gemessen, den ein Stück zur barfüßigen Statur hinzufügt. Bei Schuhwerk bedeutet das den Absatzstapel oder die Plattendicke unter dem Fuß, gemessen vom Boden bis zur Innensohle an der Ferse; bei Kopfbedeckungen bedeutet es die Kronenhöhe über dem Scheitel des Kopfes. Ein Absatz hebt nur den hinteren Teil des Fußes, sodass derselbe ausgezeichnete Absatz je nach Fußwinkel und je nachdem, wie stark der Schaum unter dem Körpergewicht komprimiert, unterschiedliche wahrgenommene Höhe hinzufügt, während ein volles Plateau den ganzen Fuß gleichmäßig hebt. Deshalb können zwei Schuhe mit derselben beworbenen Höhe Sie auf sichtbar unterschiedlichen Höhen stehen lassen.',
    measurementNote: 'Bekleidung fügt Höhe über der barfüßigen Statur hinzu: Vergleichen Sie den Versatz, nicht den Schuh selbst.',
    commonHeights: [
      { label: 'Standard-Laufschuh (Sneaker)', note: 'Hinzugefügte Höhe: typischer Fersenstapel einer Schaum-Zwischensohle; reguläre Laufschuhe messen 21–30 mm Stapel' },
      { label: 'Herren-Anzugschuh (Oxford)', note: 'Hinzugefügte Höhe: Standard-Absatz aus geschichtetem Leder, etwa 1 Zoll' },
      { label: 'Roper-Absatz (Cowboystiefel)', note: 'Hinzugefügte Höhe: flacher 1-Zoll-Roper-Absatz, gebaut zum Gehen und für Rancharbeit' },
      { label: 'Fersenlift-Einlegesohle', note: 'Hinzugefügte Höhe: einzelner herausnehmbarer Fersenlift, am unteren Ende des Einlagenbereichs von 0,5–1,5 Zoll' },
      { label: 'Maximalistischer Laufschuh', note: 'Hinzugefügte Höhe: im Labor gemessene 41,3 mm Fersenstapel in der Maximalisten-Klasse' },
      { label: 'Arbeitsstiefel (Stollensohle)', note: 'Hinzugefügte Höhe: schwerer genähter Lederstiefel-Sohlenstapel' },
      { label: 'Cowboy-Reitabsatz', note: 'Hinzugefügte Höhe: traditioneller abgewinkelter Reitabsatz von 2 Zoll, geformt, um einen Steigbügel zu halten' },
      { label: 'Kitten Heel', note: 'Hinzugefügte Höhe: kurzer schmaler Absatz, bis zu 2 Zoll' },
      { label: 'Elevator-Schuh (Alltag)', note: 'Hinzugefügte Höhe: verborgener Innenkeil; Alltagsmodelle geben rund 2,8 Zoll Lift' },
      { label: 'Klassischer Stiletto-Absatz', note: 'Hinzugefügte Höhe: formeller Mode-High-Heel, im klassischen Bereich von 3–4 Zoll' },
      { label: 'Zylinder (moderne Krone)', note: 'Hinzugefügte Höhe über dem Kopf: Die moderne Zylinderkrone misst im Durchschnitt 5 Zoll (historische Ofenrohre erreichten 8 Zoll)' },
      { label: 'Plateau-Stiefel', note: 'Hinzugefügte Höhe: erhöhtes Laufsteg-Plateau in der extrahohen 6-Zoll-Klasse' },
    ],
    faqs: [
      {
        question: 'Machen Schuhe Sie wirklich größer, oder lassen sie Sie nur größer aussehen?',
        answer: 'Sie erhöhen Ihre gemessene Standhöhe tatsächlich, um genau die Dicke des Materials unter Ihrem Fuß. Wenn Sie barfuß 175 cm messen und Laufschuhe mit einem Stapel von 3 cm anziehen, messen Sie in diesen Schuhen 178 cm. Was Schuhe nicht verändern, ist die Statur Ihres eigenen Körpers: Ziehen Sie sie aus, sind Sie wieder bei 175 cm. Diese Unterscheidung ist der Grund, warum Ärzte und Sportfunktionäre die Größe barfuß messen, während Fotografen und Casting-Direktoren sie oft in dem Schuhwerk messen, das die Person gerade trägt.',
      },
      {
        question: 'Warum fühlt sich dieselbe Absatzhöhe in verschiedenen Schuhen unterschiedlich an?',
        answer: 'Weil „Absatzhöhe" nur den hinteren Teil des Schuhs beschreibt. Ein Stiletto mit einem Absatz von 10 cm kippt Ihren Fuß steil, da der Vorfuß nahe am Boden bleibt, während ein Plateau von 10 cm den ganzen Fuß eben hebt und sich weit stabiler anfühlt. Auch die Schaumfestigkeit zählt: Weicher Schaum komprimiert unter dem Körpergewicht, sodass ein Teil des beworbenen Stapels in dem Moment verschwindet, in dem Sie darauf stehen, während eine feste Sohle fast alles davon behält. Auch die Fußlänge spielt eine Rolle, da Marken die Absatzhöhe leicht mit der Schuhgröße skalieren, um die Proportionen stabil zu halten.',
      },
      {
        question: 'Wie viel Höhe fügen Elevator-Schuhe tatsächlich hinzu?',
        answer: 'Alltags-Elevator-Schuhe fügen typischerweise 2 bis 3 Zoll durch einen im Schuh verborgenen Keil hinzu, wobei manche Spezialdesigns weiter gehen. Der Haken ist, dass fast jede Lift-Angabe in dieser Kategorie die Behauptung des Herstellers selbst ist statt einer unabhängig im Labor gemessenen Zahl, sodass zwei Marken, die denselben Lift bewerben, sichtbar unterschiedliche Ergebnisse liefern können. Der andere Kompromiss ist der Komfort: Ein größerer verborgener Keil bedeutet einen steileren Fußwinkel, weshalb die meisten Modelle für den täglichen Gebrauch bei etwa 2 bis 3 Zoll bleiben.',
      },
      {
        question: 'Zählt Kopfbedeckung zu Ihrer Größe?',
        answer: 'Sie zählt zu Ihrer gesamten Oberhöhe, und das ist es, was für Türdurchgänge, Fotografien und jeden, der neben Ihnen steht, zählt. Eine moderne Zylinderkrone fügt etwa 5 Zoll über dem Kopf hinzu, sodass eine Person, die barfuß 175 cm misst, bis zur Oberkante des Huts etwa 188 cm erreicht. Schutz-Kopfbedeckung funktioniert umgekehrt auf dieselbe Weise: Ein Schutzhelm fügt Freiraum über dem Schädel hinzu statt Statur, aber die Silhouette auf einer Vergleichsfläche wächst trotzdem um diesen Betrag.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum Schuhwerk Ihre Größe mehr verändert, als Sie denken',
        paragraphs: [
          'Fast niemand läuft barfuß herum, und doch ist fast jede Größenangabe, die Sie hören, eine barfüßige Angabe. In dieser Lücke leistet die Bekleidung ihre stille Arbeit. Eine Person, die barfuß 175 cm misst, ist 178 cm in Laufschuhen, 180 cm in Cowboystiefeln und 185 cm in klassischen Stilettos, ganz ohne einen Millimeter zu wachsen. Die Veränderung ist groß genug, um in den Situationen zu zählen, in denen Größe tatsächlich bemerkt wird: Gruppenfotos, Türrahmen, Arbeitsuniformen und der langjährige Streit darüber, ob jemand „wirklich" sechs Fuß groß ist. Die meisten dieser Streits sind in Wahrheit Streits über Schuhwerk, weil die eine Person sich an eine barfüßige Messung erinnert und die andere daran, wie groß jemand in Stiefeln aussah.',
          'Die Verwirrung ist verständlich, weil die Schuhhöhe selten ehrlich angegeben wird. Produktseiten bewerben den Absatz, nicht die Höhe, die Sie behalten. Die Stapelhöhe eines Laufschuhs wird ohne einen Fuß darin gemessen, sodass der Schaum noch nicht unter Ihrem Gewicht komprimiert wurde. Die ausgezeichnete Höhe eines Stilettos ignoriert die Tatsache, dass der Vorfuß viel tiefer sitzt als die Ferse, was Ihre Haltung verändert und wie groß Sie auf jemanden wirken, der Ihnen gegenübersteht. Und die Höhe eines Plateaus wird manchmal einschließlich der Außensohle angegeben und manchmal nicht. Das Ergebnis ist, dass zwei Menschen Schuhe mit derselben beworbenen Zahl kaufen und auf merklich unterschiedlichen Höhen stehen können, und beide werden darauf bestehen, dass das Etikett recht hatte.',
        ],
      },
      {
        heading: 'Absatzstapel, Plateaus und Keile: Was Sie tatsächlich hebt',
        paragraphs: [
          'Es gibt nur drei Arten, wie ein Schuh Höhe hinzufügt, und sie verhalten sich sehr unterschiedlich. Ein Absatzstapel hebt den hinteren Teil des Fußes, während die Zehen tief bleiben, weshalb Absätze Ihre Haltung, Ihren Wadenwinkel und Ihr Gleichgewicht auf einmal verändern. Je höher der Absatz, desto steiler die Neigung, weshalb sich ein Stiletto von 10 cm überhaupt nicht anfühlt wie ein Plateau von 10 cm, obwohl beide dieselbe Zahl zu Ihrer Standhöhe hinzufügen. Ein Plateau hebt den gesamten Fuß gleichmäßig, sodass Ihr Knöchel nahe seinem natürlichen Winkel bleibt und der Lift sich ruhiger anfühlt, obwohl der Schuh schwerer und unhandlicher wird. Ein verborgener Keil, wie er in Elevator-Schuhen verwendet wird, ist der Mittelweg: Ein Teil des Lifts sitzt im Schuh, wo ihn niemand sehen kann, und die sichtbare Sohle bleibt bescheiden, sodass der Schuh als gewöhnliches Schuhwerk durchgeht, während er still Zoll hinzufügt.',
          'Die Zahlen hinter diesen Designs sind stärker reguliert, als den meisten Menschen bewusst ist. World Athletics begrenzt Wettkampf-Laufschuhe auf eine Stapelhöhe von 40 mm, was Ihnen etwas darüber sagt, wie viel Lift moderner Schaum liefern kann: Die größten im Labor gemessenen Laufschuhe sitzen knapp über 40 mm, und der durchschnittliche Sneaker sitzt bei etwa 30 mm. Das bedeutet, dass der Unterschied zwischen einem gewöhnlichen Sneaker und dem größten Laufschuh auf dem Markt nur etwa einen Zentimeter beträgt, auch wenn das Marketing ihn dramatisch klingen lässt. Die echten Sprünge kommen aus Mode- und Arbeitsschuhwerk, wo ein Reitabsatz, ein Stiletto oder ein Plateau-Stiefel zwei- bis sechsmal so viel hinzufügen kann wie jeder Sneaker.',
        ],
      },
      {
        heading: 'Die Extreme: von barfuß bis zu Laufsteg-Plateaus',
        paragraphs: [
          'Am bescheidenen Ende ist ein Anzugschuh-Absatz von etwa 1 Zoll so normal, dass die meisten Menschen vergessen, dass er existiert, und ein Roper-Absatz an einem Cowboystiefel fügt denselben Betrag hinzu, während er aussieht wie ein Teil des Arbeitsdesigns des Stiefels statt wie ein Größengerät. Am anderen Ende sind Plateau-Stiefel der 6-Zoll-Klasse und historische Ofenrohr-Zylinder mit 8 Zoll über dem Kopf bewusste Statements: Sie existieren, um bemerkt zu werden. Zwischen diesen Polen sitzen die Alltagskompromisse, die die meisten Menschen tatsächlich tragen, von Kitten Heels mit 2 Zoll bis zu Elevator-Schuhen, die 2 bis 3 Zoll in einem ansonsten gewöhnlich aussehenden Schuh verbergen. Das interessante Muster ist, dass die extremsten Größengewinne gewöhnlich die sichtbarsten sind, während die diskretesten Gewinne bei etwa 3 Zoll deckeln, weil darüber der Fußwinkel den Trick verrät.',
          'Kopfbedeckung verdient hier eine Erwähnung, weil sie die übliche Logik durchbricht. Schuhwerk hebt Sie von unten, sodass Ihr Körper derselbe bleibt und der Boden sich effektiv nach unten bewegt. Kopfbedeckung fügt Höhe von oben hinzu, sodass Ihr Körper derselbe bleibt und Ihre Silhouette sich einfach nach oben verlängert. Ein Zylinder macht Sie in keinem Sinne größer, den ein Arzt anerkennen würde, und doch verändert er jedes Foto, auf dem Sie erscheinen, und jeden Türdurchgang, durch den Sie gehen. Deshalb ist es nützlich, Bekleidung auf einer Größenfläche zu vergleichen: Sie zeigt die gesamte visuelle Höhe, die eine Person in der Welt einnimmt, nicht nur die Zahl in ihrer Krankenakte.',
        ],
      },
      {
        heading: 'Wie Sie das Vergleichstool für diese Kategorie nutzen',
        paragraphs: [
          'Beginnen Sie mit einer menschlichen Silhouette in einer bekannten barfüßigen Größe, und stellen Sie dann einen Bekleidungs-Versatz daneben, um die bekleidete Größe zu sehen. Der aufschlussreichste Vergleich ist dieselbe Person in unterschiedlichem Schuhwerk: eine Silhouette in Sneakern, eine in Stiefeln, eine in Stilettos, und die Abstände zwischen ihnen sind die ehrliche Geschichte dessen, was Schuhe tun. Sie können auch Absatztypen direkt vergleichen, was Streits darüber klärt, ob ein Reitabsatz oder ein Kitten Heel mehr hinzufügt und ob ein Plateau bei derselben ausgezeichneten Höhe wirklich einen Stiletto schlägt. Denken Sie daran, dass jeder Bekleidungseintrag hier ein Versatz ist, kein eigenständiges Objekt: Ein Stiletto von 10 cm steht nicht allein 10 cm hoch, er fügt 10 cm zu dem hinzu, der ihn trägt, also paaren Sie ihn immer mit einer menschlichen Figur, um das Ergebnis richtig zu lesen.',
        ],
      },
    ],
  },
  fictional: {
    measurementAnchor: 'Kanonische Franchise-Überlieferung und World-Building-Archive',
    measurementGuide: 'Fiktive Größen stammen aus der Kanon-Quelle für eine bestimmte Version des Charakters: einer Franchise-Databank, einem lizenzierten Quellenbuch oder einem Tabletop-Regelbuch wie dem Monster Manual von Dungeons and Dragons, das gewöhnlich einen Durchschnitt für einen Kreaturentyp angibt statt eines exakten Werts für ein Individuum. Derselbe Charakter hat in Adaptionen oft unterschiedliche offizielle Größen, weil Filme Kreaturen für die Geschichte neu skalieren, Spiele sie neu ausbalancieren und neue Editionen alte Zahlen revidieren. Diese Seite verwendet einen angegebenen Wert pro Version und nennt diese Version, sodass ein Vergleich immer zeigt, welchen Kong oder welchen Godzilla Sie betrachten.',
    measurementNote: 'Fiktive Größen folgen der angegebenen Kanon-Version; Adaptionen desselben Charakters weichen oft voneinander ab.',
    commonHeights: [
      { label: 'Yoda', note: 'Star Wars Databank: 0,66 m' },
      { label: 'Hobbit (Durchschnitt)', note: 'Tolkiens Prolog zum Herrn der Ringe: durchschnittliche Hobbit-Größe von 3 ft 6 in' },
      { label: 'Gandalf', note: 'Tolkiens späte Notizen: Der Zauberer maß mindestens 5 ft 6 in' },
      { label: 'Legolas', note: 'Tolkien-Charakterführer: Der Elb misst etwa 6 ft' },
      { label: 'Aragorn', note: 'Tolkiens Notizen, zitiert in The Lord of the Rings: A Reader\'s Companion' },
      { label: 'Darth Vader (gerüstet)', note: 'Star Wars Databank: 2,03 m in voller Rüstung' },
      { label: 'Chewbacca', note: 'Star Wars Databank: 2,28 m' },
      { label: 'Hügelriese (D&D 5e)', note: 'Kleinster der wahren Riesen, im Durchschnitt 16 ft' },
      { label: 'Frostriese (D&D 5e)', note: 'Im Durchschnitt 21 ft in der Riesenrangfolge der 5e' },
      { label: 'Wolkenriese (D&D 5e)', note: '24 ft in der Riesenrangfolge der 5e' },
      { label: 'King Kong (1933, New York)', note: 'In den New-York-Szenen auf 24 ft skaliert (18 ft auf Skull Island)' },
      { label: 'Sturmriese (D&D 5e)', note: 'Größter der wahren Riesen, im Durchschnitt 26 ft' },
      { label: 'King Kong (Skull Island, 2017)', note: 'Heranwachsender Kong, 104 ft groß' },
      { label: 'Godzilla (2014)', note: '108 m groß im Film von 2014' },
    ],
    faqs: [
      {
        question: 'Warum hat derselbe Charakter in verschiedenen Filmen unterschiedliche Größen?',
        answer: 'Weil Filmemacher Kreaturen so neu skalieren, dass sie zu der Geschichte passen, die sie erzählen, nicht um zum Lineal eines früheren Films zu passen. Der ursprüngliche King Kong wurde auf Skull Island mit 18 Fuß gebaut und auf 24 Fuß neu skaliert, sobald er New York erreichte, weil er vor der Stadt größer wirken musste. Jahrzehnte später wurde Kong in Skull Island (2017) auf 104 Fuß festgelegt, damit er eines Tages gegen einen Godzilla von über 100 Metern bestehen konnte. Keiner der Werte ist ein Fehler: Jeder ist die offizielle Größe für seine eigene Version, weshalb diese Seite die Version immer neben der Zahl nennt.',
      },
      {
        question: 'Sind Größen aus Tabletop-Regelbüchern exakte Messungen?',
        answer: 'Nein, es sind Durchschnittswerte für einen Kreaturentyp, und die Regelbücher sagen das auch. Die Tradition des Monster Manual von Dungeons and Dragons beschreibt einen Hügelriesen mit etwa 16 Fuß und einen Sturmriesen mit etwa 26 Fuß, wobei einzelne Riesen über und unter diesen Werten variieren. Das ist eine Eigenschaft, kein Mangel: Ein Spielleiter braucht einen typischen Riesen für eine Begegnung, keine Volkszählung aller Riesen der Welt. Wenn Sie einen Regelbuch-Riesen mit einem Menschen vergleichen, lesen Sie das Ergebnis als „ein typisches Exemplar dieser Art", nicht als ein bestimmtes benanntes Individuum.',
      },
      {
        question: 'Warum sind Star-Wars-Größen so präzise?',
        answer: 'Weil die offizielle Databank von Lucasfilm einzelne metrische Werte für ihre Charaktere veröffentlicht, etwa Yoda mit 0,66 m, Darth Vader mit 2,03 m in Rüstung und Chewbacca mit 2,28 m. Diese Zahlen stammen aus Produktions- und Kontinuitätsunterlagen statt aus Prosabeschreibungen, sodass sie sich eher wie reale Messungen verhalten als wie literarische Schätzungen. Der Kompromiss ist, dass der Wert den Charakter so beschreibt, wie er offiziell katalogisiert ist, was von der eigenen Größe des Schauspielers abweichen kann: Der Darsteller im Kostüm ist nicht immer so groß wie der Charakter auf dem Papier.',
      },
      {
        question: 'Kann ich einen Kaiju mit einem Menschen auf derselben Fläche vergleichen?',
        answer: 'Ja, und das Ergebnis ist der Punkt: Godzilla mit 108 Metern neben einem Menschen von 175 cm macht den Maßstabsabstand sofort offensichtlich, auf eine Weise, wie es das Lesen von „108 Metern" nie tut. Die Fläche passt alles auf eine gemeinsame Grundlinie, sodass der Mensch zu einer dünnen Linie am unteren Bildrand wird und der Kaiju darüber aufragt. Bei sehr großen Kreaturen hilft es, ein vertrautes Wahrzeichen als Zwischenschritt hinzuzufügen, etwa ein Gebäude oder ein großes Tier, sodass das Auge etwas hat, an dem es hinaufwandern kann, bevor es die Oberkante des Monsters erreicht.',
      },
    ],
    editorialSections: [
      {
        heading: 'Warum fiktive Größen nie nur eine Zahl sind',
        paragraphs: [
          'Fragen Sie, wie groß King Kong ist, und Sie haben keine vollständige Frage gestellt, denn es gibt keinen einzigen King Kong. Der Affe von 1933 wurde auf Skull Island auf 18 Fuß skaliert und auf 24 Fuß, sobald er in New York frei war, da die Filmemacher wollten, dass er vor Wolkenkratzern größer wirkt als vor Dschungelbäumen. Der Kong von 2017 wurde auf 104 Fuß festgelegt, teils, weil er als Heranwachsender geschrieben war, der noch wächst, und teils, weil das Studio bereits wusste, dass er eines Tages gegen einen Godzilla von über 100 Metern würde kämpfen müssen. Godzilla selbst ist in seiner eigenen Geschichte gewachsen, von 50 Metern im Originalfilm von 1954 auf 108 Meter im Film von 2014 und ungefähr 120 Meter in späteren MonsterVerse-Einträgen. Jede dieser Zahlen ist für ihre eigene Version offiziell, und jede widerspricht den anderen, was genau der Grund ist, warum fiktive Größe ein Katalogisierungsproblem ist statt ein Messproblem.',
          'Dieselbe Instabilität zeigt sich an ruhigeren Stellen. Ein Charakter, der in Prosa als „groß" beschrieben wird, kann von einem Comiczeichner klein und vom nächsten aufragend gezeichnet werden, und ein Tabletop-Spiel kann die Größe einer Kreatur revidieren, wenn eine neue Edition das Spiel neu ausbalanciert. Fans streiten endlos über diese Unterschiede, aber die Streits verfehlen gewöhnlich den eigentlichen Punkt: Fiktive Größe ist eine Designentscheidung, keine physische Tatsache. Ein Regisseur macht ein Monster größer, wenn die Szene mehr Bedrohung braucht, ein Spieledesigner macht einen Riesen kleiner, wenn ein Dungeon ihn durch eine Tür passen lassen muss, und ein Autor lässt eine Größe vage, wenn das Geheimnis mehr zählt als die Messung. Das zu verstehen, ist der erste Schritt, fiktive Charaktere vernünftig zu vergleichen.',
        ],
      },
      {
        heading: 'Kanon-Quellen: Wer entscheidet, wie groß ein Charakter ist',
        paragraphs: [
          'Die Antwort hängt von der Franchise ab, und die Franchises fallen in drei grobe Gruppen. Die erste Gruppe veröffentlicht präzise offizielle Werte: Die Star Wars Databank listet Yoda mit 0,66 m, Darth Vader mit 2,03 m in Rüstung und Chewbacca mit 2,28 m, und diese Zahlen werden als Kontinuität behandelt. Wenn eine solche Quelle existiert, gibt es wenig Raum für Debatten, obwohl noch Raum für Verwirrung bleibt, da der gerüstete Wert und der ungerüstete Schauspieler verschiedene Zahlen sind und Fans sie oft vermischen. Die zweite Gruppe gibt Durchschnittswerte für eine Art statt eines Werts für ein Individuum: Die Tradition von Dungeons and Dragons beschreibt Hügelriesen mit etwa 16 Fuß, Frostriesen mit 21, Wolkenriesen mit 24 und Sturmriesen mit 26, mit dem Verständnis, dass jeder konkrete Riese größer oder kleiner sein kann. Die dritte Gruppe gibt überhaupt keine Zahl an, und der Wert, den jeder zitiert, stammt aus einem Brief des Autors, einer späten Notiz oder einem Begleitbuch, das Jahre später veröffentlicht wurde.',
          'Tolkiens Werk sitzt über alle drei Gruppen hinweg, was es zu einem guten Beispiel für das Problem macht. Der Prolog zum Herrn der Ringe gibt die durchschnittliche Hobbit-Größe ausdrücklich mit 3 Fuß 6 Zoll an, sodass dieser Wert solide ist. Aragorns 6 Fuß 6 Zoll und Gandalfs 5 Fuß 6 Zoll stammen aus Tolkiens eigenen späteren Notizen und aus dem Reader\'s Companion, was fast genauso stark ist. Legolas mit etwa 6 Fuß ist ein weit verbreiteter Führerwert statt einer Zeile aus den Büchern, sodass er etwas mehr Unsicherheit trägt. Eine verantwortungsvolle Vergleichsseite sollte diese Unterscheidungen sichtbar halten, statt jeden Wert auf dasselbe Vertrauensniveau zu glätten, denn ein Leser, der weiß, welche Zahlen felsenfest sind und welche ungefähr, wird der Seite mehr vertrauen, nicht weniger.',
        ],
      },
      {
        heading: 'Die Extreme: von Yoda bis Godzilla',
        paragraphs: [
          'Die fiktive Kategorie hat die breiteste Größenspanne aller Kategorien auf dieser Seite, und diese Spanne ist ihre Hauptattraktion. Am kleinen Ende steht Yoda mit 66 cm kaum über der Größe eines Kleinkindes, und doch ist er eine der mächtigsten Figuren in seinem Universum, was genau der Witz und der Punkt des Charakters ist. Ein Hobbit mit 107 cm ist nicht viel größer, und der Kontrast zwischen Hobbit-Statur und Hobbit-Mut ist einer der Motoren von Tolkiens Geschichte. Am menschlichen Ende der Skala sind Aragorn mit 198 cm und Chewbacca mit 228 cm beide erkennbar personenförmig, was sie zu guten Brücken macht: Ein Leser kann sich Aragorn vorstellen, dann Chewbacca neben ihm, und von dort beginnen zu begreifen, was ein Riese bedeutet.',
          'Dann bricht die Skala auf. Ein Hügelriese mit 488 cm ist bereits etwa dreimal so groß wie ein Mensch, und die Riesenleiter steigt stetig über Frost-, Wolken- und Sturmriesen, bis sie 792 cm erreicht, ungefähr die Höhe eines zweistöckigen Hauses. King Kong ist in seiner Version von 2017 mit 104 Fuß etwa noch einmal viermal so groß, und Godzilla ist mit 108 Metern mehr als dreimal so groß wie Kong obendrauf. Das Interessante an dieser Leiter ist, dass jede Stufe von jemandem entworfen wurde, der an die vorherige Stufe dachte: Der Sturmriese ist groß im Vergleich zu einem Menschen, Kong ist groß im Vergleich zu einem Riesen, und Godzilla ist groß im Vergleich zu Kong. Sie auf einer Fläche zu stapeln, zeigt eine Kette bewusster Übertrumpfung, die keine einzelne Zahl für sich vermitteln kann.',
        ],
      },
      {
        heading: 'Wie Sie das Vergleichstool für diese Kategorie nutzen',
        paragraphs: [
          'Der nützlichste fiktive Vergleich ist selten fiktiv gegen fiktiv. Stellen Sie einen fiktiven Charakter zuerst neben einen Menschen, denn der Mensch ist die Einheit, die Ihr Auge bereits versteht, und der Abstand zwischen ihnen ist die Tatsache, die Sie lernen wollen. Ein Sturmriese neben einem durchschnittlichen Mann sagt Ihnen mehr als ein Sturmriese neben einem Wolkenriesen, weil der Mann vertraut ist und der Riese nicht. Sobald dieser Anker gesetzt ist, fügen Sie eine zweite fiktive Figur hinzu, um die Beziehung zwischen den beiden Erfindungen zu sehen, und fügen Sie dann bei den sehr großen Kreaturen ein Gebäude oder ein Fahrzeug als mittlere Sprosse hinzu, sodass das Auge einen Weg zum Klettern hat.',
          'Zwei Gewohnheiten machen fiktive Vergleiche viel verlässlicher. Erstens: Prüfen Sie immer, welche Version Sie vergleichen, da Kong allein mindestens drei offizielle Größen hat und Godzilla mehrere, und das stille Vermischen von Versionen Unsinn produziert. Zweitens: Denken Sie daran, dass ein Regelbuchwert ein Durchschnitt für eine Art ist: Ihr Hügelriese kann einen Fuß größer oder kleiner sein als der Durchschnitt von 16 Fuß, und das ist kein Fehler im Tool, sondern die Art, wie die Quelle geschrieben wurde. Mit diesen zwei Vorbehalten genutzt, wird die Fläche zu etwas, das kein Absatz ersetzen kann: ein einziges Bild davon, wie erfundene Welten im Vergleich zur realen abschneiden.',
        ],
      },
    ],
  },
};

import type { HowToGuideData } from './types';

export const esHowToGuide: HowToGuideData = {
  locale: 'es',
  title: 'Cómo usar la herramienta de comparación de altura',
  subtitle: 'Una guía completa paso a paso para comparar personas, celebridades, personajes de anime, animales y objetos con precisión matemática visual.',
  badge: 'Guía de Usuario',
  metaDescription: 'Aprende a usar el comparador de altura de HowHeight para comparar personas, animales, objetos y personajes, entender diferencias de estatura y compartir resultados.',
  readTime: '8 min de lectura',
  tocTitle: 'Tabla de Contenidos',
  intro: {
    lead: 'HowHeight es una plataforma de medición visual interactiva diseñada para ayudar a las personas a comprender intuitivamente la escala física real de cualquier entidad.',
    paragraphs: [
      'Ya sea que sientas curiosidad por saber cómo te verías al lado de tu estrella de cine favorita, estés analizando tablas de estatura para un proyecto de animación, enseñes proporciones biológicas en el aula o escribas una novela, los números solos a menudo no logran transmitir la verdadera presencia física. Leer que alguien mide 188 cm (6 ft 2 in) brinda una cifra abstracta; colocar esa figura directamente junto al marco de una puerta estándar, una mascota o un acompañante hace que la dimensión cobre vida al instante.',
      'Nuestra herramienta universal de comparación de altura une el dato numérico con la percepción visual humana. Al anclar cada silueta a una línea de suelo compartida en 0 cm y escalar cada modelo mediante geometría matemática rigurosa, HowHeight elimina las distorsiones de perspectiva. Esta guía te muestra todas y cada una de las funciones de la plataforma, desde búsquedas rápidas y arrastre en el lienzo hasta mediciones personalizadas y exportación de gráficos en alta resolución.',
    ],
  },
  sections: [
    {
      id: 'what-is-howheight',
      heading: '1. ¿Qué es una herramienta de comparación de altura?',
      paragraphs: [
        'Un comparador de altura es un visualizador interactivo diseñado para disponer dos o más figuras lado a lado bajo un factor de escala exactamente idéntico. En lugar de imaginar cómo se ven 15 centímetros o 6 pulgadas de diferencia en la vida real, la herramienta genera siluetas anatómicamente proporcionadas que evidencian la relación espacial.',
        'En HowHeight, el motor admite una amplia variedad de categorías verificadas: hombres y mujeres, celebridades internacionales, personajes de anime y manga, héroes de cine, animales domésticos y salvajes, objetos arquitectónicos y cotidianos, especies botánicas y criaturas legendarias. Cada figura se contrasta con una regla vertical común.',
      ],
      callout: {
        type: 'info',
        text: 'La comparación visual no consiste en adivinar, sino en trasladar medidas verificadas a un formato visual sin distorsión de perspectiva.',
      },
    },
    {
      id: 'how-to-start',
      heading: '2. Cómo empezar una comparación en 7 sencillos pasos',
      paragraphs: [
        'Comenzar en HowHeight no requiere registro, descargas de aplicaciones ni configuraciones complicadas. La herramienta está disponible directamente en la web.',
      ],
      steps: [
        {
          number: 1,
          title: 'Abre el espacio de trabajo',
          description: 'Ingresa a HowHeight.org o dirígete a la sección /compare/ en tu navegador favorito.',
        },
        {
          number: 2,
          title: 'Ubica el escenario de comparación',
          description: 'Observa el selector de figuras a la izquierda y el lienzo principal con la regla de medición a la derecha.',
        },
        {
          number: 3,
          title: 'Busca o selecciona tu primera figura',
          description: 'Usa la barra de búsqueda o las pestañas de categorías para elegir una persona, celebridad o animal.',
        },
        {
          number: 4,
          title: 'Añádela al lienzo',
          description: 'Haz clic en la tarjeta o en el botón "+ Add". La silueta se posicionará inmediatamente sobre la línea de base de 0 cm.',
        },
        {
          number: 5,
          title: 'Elige una segunda entidad',
          description: 'Busca a otra persona para comparar, a un rival ficticio o a un objeto de referencia como un vehículo.',
        },
        {
          number: 6,
          title: 'Observa el resultado visual',
          description: 'La regla vertical ajustará dinámicamente su escala para que ambas figuras encajen con perfecta precisión proporcional.',
        },
        {
          number: 7,
          title: 'Personaliza o comparte',
          description: 'Reorganiza posiciones arrastrando, cambia unidades entre cm y ft/in, revisa la diferencia o genera un enlace para compartir.',
        },
      ],
    },
    {
      id: 'searching-entities',
      heading: '3. Búsqueda en la biblioteca universal de entidades',
      paragraphs: [
        'HowHeight cuenta con un catálogo verificado con miles de entidades. Para localizar figuras rápidamente, dispones de búsqueda instantánea y filtros por categoría.',
        'Puedes hacer clic en cualquier categoría (Celebridades, Anime, Animales, Objetos, Deportes, etc.) o escribir directamente en el buscador por nombre, disciplina o alias populares.',
        'Si la entidad que buscas aún no está en el catálogo, no hay problema: HowHeight incluye un formulario personalizado donde puedes escribir cualquier nombre, ingresar la estatura en cm o ft/in, elegir color y colocar tu figura en el lienzo.',
      ],
      link: {
        text: 'Explorar el directorio de estatura de celebridades →',
        href: '/celebrity-height-comparison/',
      },
    },
    {
      id: 'adding-multiple-entities',
      heading: '4. Comparación de múltiples figuras simultáneamente',
      paragraphs: [
        'Las comparaciones cotidianas a menudo involucran a más de dos sujetos: comparar a toda una familia, evaluar un equipo deportivo o ver la escala conjunta entre un humano, un perro, un caballo y un elefante.',
        'HowHeight te permite colocar desde 2 hasta más de 20 figuras juntas en el mismo escenario. El lienzo se adapta automáticamente: en monitores amplios distribuye el espacio, y en pantallas móviles activa un desplazamiento horizontal fluido para que ninguna silueta pierda definición.',
      ],
      callout: {
        type: 'tip',
        text: 'Al comparar muchas figuras, mantén una figura de referencia estándar (como el Hombre Promedio de 175 cm o una Puerta de 210 cm) para tener un ancla intuitiva.',
      },
    },
    {
      id: 'dragging-arranging',
      heading: '5. Organización en el lienzo: Arrastrar y soltar',
      paragraphs: [
        'Las figuras añadidas se alinean inicialmente en el orden en que fueron seleccionadas. Sin embargo, la narrativa visual suele requerir un orden personalizado.',
        'En HowHeight puedes hacer clic y arrastrar cualquier figura (o moverla con el dedo en pantallas táctiles) a lo largo del suelo de 0 cm. Puedes poner a dos personas hombro con hombro o acercar una mascota a su dueño.',
        'También puedes usar los botones de la barra de herramientas para ordenar automáticamente el grupo por estatura ascendente o descendente.',
      ],
    },
    {
      id: 'resizing-scale',
      heading: '6. Ajuste de estatura vs. escala visual de zoom',
      paragraphs: [
        'Es fundamental distinguir entre la estatura física real de una figura y el nivel de aumento o zoom del lienzo.',
        'Al seleccionar una figura en el escenario, se abre el panel de inspección. Aquí puedes modificar su altura real con campos numéricos o el control deslizante. Al cambiar de 175 cm a 190 cm, la figura crece hacia arriba desde el suelo.',
        'Por otro lado, los controles de Zoom (+ / -) aumentan o reducen la visualización completa del gráfico por igual, sin alterar los valores numéricos ni distorsionar las proporciones matemáticas entre los modelos.',
      ],
      callout: {
        type: 'note',
        text: 'Las figuras siempre crecen verticalmente desde el suelo. Los pies permanecen firmemente fijados a la línea de 0 cm.',
      },
    },
    {
      id: 'height-units',
      heading: '7. Unidades de medida: Métrico (cm) e Imperial (pies y pulgadas)',
      paragraphs: [
        'El mundo utiliza tanto el sistema métrico (centímetros y metros) como el sistema imperial (pies y pulgadas). HowHeight ofrece compatibilidad instantánea con ambos.',
        'En la parte superior de la regla y en el inspector puedes alternar entre "cm" y "ft". En modo imperial, la regla muestra marcas principales cada 12 pulgadas (1 pie) y secundarias cada 6 pulgadas. En modo métrico, marca intervalos de 20 o 50 cm.',
        'La conversión se basa en el estándar internacional estricto: 1 pulgada = 2,54 cm exactos, y 1 pie = 30,48 cm exactos.',
      ],
      link: {
        text: 'Probar la calculadora de diferencia de altura →',
        href: '/height-difference-calculator/',
      },
    },
    {
      id: 'understanding-visual-result',
      heading: '8. Cómo interpretar el lienzo de comparación y la regla',
      paragraphs: [
        'El escenario de HowHeight cuenta con indicadores visuales claros para facilitar la lectura:',
        '1. La línea de suelo base (0 cm / 0 ft): Marca horizontal visible en la base del lienzo que representa el suelo.',
        '2. La regla vertical: Ubicada a la izquierda, calcula automáticamente el límite superior necesario para abarcar a la figura más alta con margen superior.',
        '3. Etiquetas informativas: Cada modelo muestra su nombre, categoría y estatura exacta en la unidad seleccionada.',
        '4. Siluetas de contraste: Figuras con colores distinguibles y transparencias sutiles para que el solapamiento no impida la lectura.',
      ],
    },
    {
      id: 'height-difference',
      heading: '9. Comprensión de la diferencia de estatura',
      paragraphs: [
        'Cuando hay exactamente dos figuras en el lienzo, HowHeight genera automáticamente una tarjeta de análisis de diferencia.',
        'Por ejemplo, al comparar a un hombre de 180 cm con una mujer de 165 cm, el sistema detalla: "La Persona A es 15 cm (5,9 pulgadas) más alta que la Persona B". Ambas unidades se calculan con un decimal de precisión.',
        'Con tres o más modelos, se despliega una tabla resumen que indica el más alto, el más bajo, la estatura media del grupo y las diferencias relativas.',
      ],
    },
    {
      id: 'comparing-people',
      heading: '10. Comparación de personas, parejas y figuras públicas',
      paragraphs: [
        'Uno de los usos más habituales es comparar estaturas entre amigos, parejas o miembros de la familia para anticipar cómo se verán juntos en fotografías.',
        'Nuestros modelos humanos cuentan con proporciones anatómicas masculinas y femeninas diferenciadas en hombros, torso y postura, manteniendo un escalado idéntico. También puedes compararte directamente con deportistas, actores y personajes históricos.',
      ],
      link: {
        text: 'Ver percentiles de altura humana y estándares →',
        href: '/people-height-comparison/',
      },
    },
    {
      id: 'comparing-animals',
      heading: '11. Explorando el reino animal: Desde mascotas hasta gigantes',
      paragraphs: [
        'En los libros de biología, las fotos de animales rara vez comparten escala: un gato puede verse del mismo tamaño que un oso polar.',
        'HowHeight resuelve esto colocando a la fauna en la misma escala exacta que los humanos. Puedes poner un gato doméstico (25 cm) al lado de un perro (60 cm), o admirar la imponencia de un caballo árabe (160 cm) y un elefante africano (330 cm).',
      ],
      link: {
        text: 'Ver comparaciones de animales →',
        href: '/animal-height-comparison/',
      },
    },
    {
      id: 'comparing-objects',
      heading: '12. Objetos cotidianos, vehículos y arquitectura',
      paragraphs: [
        'Las cifras adquieren un significado tangible cuando se contrastan con objetos cotidianos. Decir que algo mide 2,4 metros puede ser abstracto, pero compararlo con una puerta estándar (210 cm) demuestra de inmediato si cabría bajo un techo normal.',
        'La categoría de objetos incluye muebles, coches, bicicletas, autobuses y aros de baloncesto reglamentarios (305 cm), facilitando evaluaciones espaciales a diseñadores y curiosos.',
      ],
      link: {
        text: 'Comparar objetos cotidianos →',
        href: '/object-height-comparison/',
      },
    },
    {
      id: 'anime-fictional-characters',
      heading: '13. Personajes de anime y héroes de ficción',
      paragraphs: [
        'Para los entusiastas del anime, manga y cómics, las estaturas canónicas suelen generar gran debate. En las viñetas o planos cinematográficos, la perspectiva dificulta apreciar la diferencia real.',
        'En HowHeight puedes colocar a personajes legendarios como Goku, Naruto o Levi Ackerman junto a gigantes y superhéroes, ofreciendo una referencia inestimable para dibujantes, cosplayers y escritores de ficción.',
      ],
      link: {
        text: 'Explorar estaturas de personajes de anime →',
        href: '/anime-height-comparison/',
      },
    },
    {
      id: 'using-the-result',
      heading: '14. Qué hacer con tu comparación terminada',
      paragraphs: [
        'Una vez que hayas dispuesto las figuras a tu gusto, HowHeight te ofrece herramientas prácticas:',
        '• Descargar imagen PNG: Pulsa el botón "Download Chart" para obtener un archivo PNG nítido en alta resolución con fondo limpio, perfecto para presentaciones o redes sociales.',
        '• Revisar estadísticas: Consulta el desglose de diferencias, porcentajes y promedios en el panel inferior.',
        '• Ajustes visuales: Activa el modo oscuro para visualizar cómodamente de noche o activa las líneas de cuadrícula para una referencia milimétrica.',
      ],
    },
    {
      id: 'sharing-comparisons',
      heading: '15. Enlace para compartir al instante sin cuentas',
      paragraphs: [
        'Compartir tu comparación no requiere crear cuentas ni iniciar sesión con redes sociales.',
        'Al pulsar el botón "Share", HowHeight codifica el estado completo de tu gráfico (figuras activas, nombres personalizados, estaturas, colores y posiciones) en un parámetro de URL seguro y lo copia a tu portapapeles.',
        'Cualquier persona que reciba el enlace verá exactamente la misma escena en su propio navegador en tiempo real.',
      ],
      callout: {
        type: 'tip',
        text: 'Los enlaces compartidos son totalmente autónomos. No dependen de bases de datos externas, garantizando que el enlace funcione indefinidamente.',
      },
    },
    {
      id: 'mobile-experience',
      heading: '16. Experiencia móvil, en tabletas y ordenadores',
      paragraphs: [
        'HowHeight está diseñado bajo una arquitectura adaptable y móvil:',
        '• Gestos táctiles: Arrastrar figuras por el suelo del lienzo con el dedo es rápido y fluido en smartphones y tablets.',
        '• Paneles desplegables: Las herramientas de búsqueda e inspección se repliegan para dejar libre la vista del escenario.',
        '• Desplazamiento horizontal: Al comparar muchas figuras en un teléfono, puedes deslizar lateralmente sin perder la proporción de ninguna silueta.',
      ],
    },
    {
      id: 'why-visual-matters',
      heading: '17. Por qué la comparación visual es tan efectiva',
      paragraphs: [
        'El cerebro humano está naturalmente optimizado para el razonamiento espacial. Leer "160 cm" y "185 cm" nos dice cuál número es mayor, pero no transmite instintivamente la presencia física de casi 25 cm (10 pulgadas) de diferencia.',
        'La comparación visual activa nuestra percepción de profundidad y proporción, revelando de inmediato que los hombros de una persona de 185 cm se alinean con la barbilla de una de 160 cm.',
      ],
    },
    {
      id: 'numbers-vs-visuals',
      heading: '18. Números frente a imágenes: La combinación perfecta',
      paragraphs: [
        'Ni los números aislados ni los dibujos sin medir cuentan toda la historia. Una tabla numérica carece de impacto intuitivo, y una ilustración sin escala puede ser engañosa.',
        'HowHeight combina lo mejor de ambos mundos: cifras matemáticas exactas con siluetas escaladas sobre una línea de suelo compartida.',
      ],
    },
    {
      id: 'data-accuracy',
      heading: '19. Integridad de los datos y transparencia en las fuentes',
      paragraphs: [
        'En HowHeight mantenemos estándares rigurosos. Las alturas de celebridades provienen de mediciones oficiales, registros médicos deportivos y entrevistas verificadas.',
        'Las dimensiones de animales y plantas representan promedios biológicos adultos documentados por autoridades científicas. Los objetos siguen normas de fabricación internacionales (ISO, FIBA, etc.).',
        'Cuando una medida proviene de una guía ficticia oficial o de una estimación estadística, se indica con total transparencia. Nunca inventamos datos.',
      ],
      link: {
        text: 'Conocer nuestra metodología y estándares de medición →',
        href: '/about/',
      },
    },
    {
      id: 'tips-for-better-comparisons',
      heading: '20. Consejos prácticos para gráficos más claros',
      paragraphs: [
        'Para obtener los mejores resultados visuales:',
        '1. Usa colores contrastantes: Asigna colores distintos a figuras contiguas para distinguir siluetas con facilidad.',
        '2. Añade un punto de referencia: Al comparar personajes ficticios, añade a un humano promedio (175 cm) o una puerta.',
        '3. Selecciona la unidad apropiada: Usa cm o ft/in según la preferencia de tu audiencia.',
        '4. Ordena con sentido: Usa el botón de ordenar por altura para resaltar la progresión gradual del grupo.',
      ],
    },
    {
      id: 'example-workflow',
      heading: '21. Ejemplo práctico: Comparando personajes de ficción',
      paragraphs: [
        'Imaginemos que deseas comparar la escala entre héroes y villanos:',
        'Primero añade una figura humana de 175 cm como base. Luego selecciona un superhéroe de 190 cm en color rojo y un antagonista acorazado de 230 cm en gris oscuro. Arrastra al humano entre ambos para enfatizar la diferencia. Haz clic en "Download Chart" para guardar la imagen PNG o comparte el enlace directamente en segundos.',
      ],
    },
    {
      id: 'who-can-use',
      heading: '22. ¿Quiénes pueden aprovechar esta herramienta?',
      paragraphs: [
        'HowHeight es de gran utilidad para múltiples perfiles:',
        '• Estudiantes y profesores: Para ilustrar biología, física y proporciones en clase.',
        '• Escritores y novelistas: Para mantener coherencia en las líneas de visión e interacciones de sus personajes.',
        '• Diseñadores y animadores: Como hoja de modelo de referencia previa al dibujo.',
        '• Cosplayers: Para adecuar proporciones de vestuario respecto a los personajes.',
        '• Creadores de contenido: Para generar material visual atractivo en redes sociales y artículos.',
        '• Curiosos en general: Para responder a la clásica pregunta: "¿Qué tan alto es en realidad?"',
      ],
    },
    {
      id: 'faq-reference',
      heading: '23. Preguntas frecuentes y detalles técnicos',
      paragraphs: [
        '¿Tienes dudas sobre compatibilidad, conversiones o fórmulas de escalado? Nuestra sección de Preguntas Frecuentes detalla toda la información técnica.',
      ],
    },
    {
      id: 'final-cta',
      heading: '24. Comienza tu primera comparación ahora',
      paragraphs: [
        '¿Listo para explorar la verdadera escala visual? El comparador es rápido, interactivo y completamente gratuito. Elige tus entidades y descubre las dimensiones del mundo tal como son.',
      ],
    },
  ],
  faqTransition: {
    badge: '¿Tienes más preguntas?',
    heading: 'Explora nuestras Preguntas Frecuentes',
    text: 'Aprende más sobre nuestro algoritmo de escalado, conversión de unidades y motor de renderizado.',
    ctaText: 'Ver todas las preguntas frecuentes',
    ctaHref: '/#faq',
  },
  finalCta: {
    heading: '¿Listo para ver la altura real?',
    description: 'Inicia el comparador interactivo ahora. Compara personas, celebridades, personajes de anime, animales y objetos en tiempo real.',
    buttonText: 'Iniciar comparador de altura',
    buttonHref: '/compare/',
    secondaryText: 'Ver tabla de comparación estándar',
    secondaryHref: '/height-comparison-chart/',
  },
};

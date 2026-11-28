import type { CategoryLocaleContent } from './types';

export const CATEGORY_CONTENT_ES: Record<string, CategoryLocaleContent> = {
  "people": {
    "measurementAnchor": "De la coronilla a las plantas de los pies (estatura de pie, descalzo)",
    "measurementGuide": "La estatura humana se mide como la altura de pie y descalzo: la persona se coloca erguida sobre una superficie plana, con los talones juntos, la espalda contra un tallímetro, la cabeza sostenida de modo que la línea de visión sea horizontal, y la distancia se lee desde el suelo hasta el punto más alto del cráneo (el vértice). Las mediciones se toman normalmente por la mañana cuando es posible, porque la columna vertebral se comprime ligeramente a lo largo del día y una persona puede medir aproximadamente uno o dos centímetros menos por la tarde que al despertar. Las encuestas nacionales, como el programa NHANES de los CDC, utilizan examinadores capacitados y tallímetros calibrados en lugar de datos autodeclarados, porque las personas tienden a exagerar ligeramente su propia altura cuando se les pregunta.",
    "measurementNote": "Las alturas humanas se miden descalzo, de la coronilla a las plantas de los pies, de pie y erguido.",
    "commonHeights": [
      {
        "label": "Promedio mundial masculino",
        "note": "Altura mediana mundial de los hombres adultos"
      },
      {
        "label": "Promedio mundial femenino",
        "note": "Altura mediana mundial de las mujeres adultas"
      },
      {
        "label": "Promedio masculino neerlandés",
        "note": "El promedio nacional masculino más alto, según datos de la CBS neerlandesa y de NCD-RisC"
      },
      {
        "label": "Promedio femenino neerlandés",
        "note": "El promedio nacional femenino más alto, según datos de la CBS neerlandesa y de NCD-RisC"
      },
      {
        "label": "Promedio femenino de EE. UU.",
        "note": "Media medida por CDC NHANES para las mujeres adultas"
      },
      {
        "label": "Promedio masculino indio",
        "note": "Rondas de la Encuesta Nacional de Salud Familiar, hombres adultos"
      },
      {
        "label": "Promedio femenino indio",
        "note": "Rondas de la Encuesta Nacional de Salud Familiar, mujeres adultas"
      },
      {
        "label": "Percentil 95 masculino",
        "note": "Solo aproximadamente 1 de cada 20 hombres adultos alcanza esta altura o más"
      },
      {
        "label": "Percentil 95 femenino",
        "note": "Solo aproximadamente 1 de cada 20 mujeres adultas alcanza esta altura o más"
      },
      {
        "label": "Robert Wadlow",
        "note": "La persona más alta jamás verificada, medida el 27 de junio de 1940"
      },
      {
        "label": "Sultan Kosen",
        "note": "El hombre vivo más alto, verificado por Guinness World Records"
      },
      {
        "label": "Chandra Bahadur Dangi",
        "note": "El adulto más bajo jamás verificado, medido en Katmandú en 2012"
      },
      {
        "label": "Jyoti Amge",
        "note": "La mujer viva más baja, verificada por Guinness World Records"
      }
    ],
    "faqs": [
      {
        "question": "¿Por qué mi altura es ligeramente diferente por la mañana y por la tarde?",
        "answer": "Tu columna vertebral se comprime durante el día. Los discos entre las vértebras pierden un poco de líquido bajo la gravedad y la carga, por lo que la mayoría de los adultos miden aproximadamente uno o dos centímetros menos por la tarde que al despertar. Esto es normal y temporal; los discos se rehidratan durante la noche mientras estás acostado. Por eso las clínicas y las encuestas nacionales prefieren las mediciones matutinas cuando quieren una cifra consistente y comparable."
      },
      {
        "question": "¿Qué es un percentil y por qué importa más que el promedio?",
        "answer": "Un percentil te indica dónde te sitúas dentro de una población. Si estás en el percentil 75 para tu sexo, eres más alto que aproximadamente el 75 por ciento de las personas como tú y más bajo que aproximadamente el 25 por ciento. Los promedios por sí solos ocultan esta dispersión: dos países pueden compartir un promedio similar y tener rangos muy diferentes. Los percentiles son la herramienta que utilizan médicos e investigadores para juzgar si el crecimiento de un niño va por buen camino, porque comparan elementos similares entre sí en lugar de hacerlo con un único número."
      },
      {
        "question": "¿Por qué los neerlandeses son los más altos del mundo?",
        "answer": "Los hombres neerlandeses miden en promedio alrededor de 183 cm y las mujeres neerlandesas alrededor de 170 cm, los promedios nacionales más altos registrados. Los registros militares muestran que los hombres neerlandeses ganaron aproximadamente 20 cm en los últimos 200 años, un aumento que los investigadores vinculan a una mejor nutrición infantil, la atención sanitaria universal y el aumento del nivel de vida, más que a un único cambio genético. El aumento se ha estabilizado desde la década de 1980, lo que sugiere que la población puede estar cerca de su techo práctico en las condiciones actuales."
      },
      {
        "question": "¿Realmente difieren hombres y mujeres en altura en una cantidad fija?",
        "answer": "En promedio, los hombres adultos son entre 13 y 14 cm más altos que las mujeres adultas en todo el mundo, una brecha impulsada por períodos de crecimiento masculino más prolongados: los niños suelen seguir creciendo durante unos dos años más que las niñas antes de que se fusionen sus placas de crecimiento. Pero las distribuciones se solapan en gran medida. Una mujer en el percentil 95 (aproximadamente 173 cm) es más alta que aproximadamente la mitad de todos los hombres, por lo que los promedios describen poblaciones, no individuos, y no dicen nada fiable sobre ninguna persona concreta que conozcas."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué vale la pena comparar la altura humana ordinaria",
        "paragraphs": [
          "La altura humana se siente personal de una manera en que casi ninguna otra medición lo hace. Las personas recuerdan su propia altura al centímetro, discuten sobre ella, la redondean al alza en los formularios y la notan en el momento en que entran en una habitación. Esto se debe a que la altura es uno de los pocos rasgos físicos visibles de un vistazo, comparables a distancia y cargados de significado social al mismo tiempo. Una herramienta de comparación resulta útil aquí no por mostrar un número, sino por mostrar la brecha: la diferencia entre 175 cm y 183 cm es difícil de percibir solo a partir de dígitos, pero en el momento en que dos figuras se sitúan sobre la misma línea base, ocho centímetros se convierten en un escalón visible que cualquiera puede interpretar sin hacer ningún cálculo.",
          "La otra razón por la que esta categoría importa es que el «promedio» es un objetivo en movimiento. La mediana mundial masculina de aproximadamente 175 cm y la mediana mundial femenina de aproximadamente 162 cm ocultan una enorme variación entre poblaciones. Un hombre neerlandés de 183 cm no destaca en su país, pero sobresaldría entre una multitud en la India, donde el promedio masculino es de alrededor de 165 cm. Compararte con un único promedio mundial, por tanto, te dice muy poco; compararte con la población adecuada, el percentil adecuado y el sexo adecuado te dice mucho. Esa es la comparación para la que está diseñada esta página."
        ]
      },
      {
        "heading": "Cómo se mide realmente la altura y por qué se cuelan pequeños errores",
        "paragraphs": [
          "La medición adecuada de la estatura es un pequeño ritual con un protocolo estricto. La persona se quita los zapatos, se coloca con los talones juntos y la espalda recta contra un tallímetro vertical, y mira al frente para que la cabeza quede en lo que los antropometristas llaman el plano de Frankfurt. El medidor baja una pieza horizontal hasta que apenas toca la coronilla del cráneo y lee el valor. Cada parte de ese ritual existe para eliminar un error específico: los zapatos añaden dos o tres centímetros, encorvarse elimina varios más, y una cabeza inclinada puede desplazar la lectura un centímetro en cualquier dirección.",
          "Incluso con una técnica perfecta, el número cambia a lo largo del día. Los discos vertebrales se comprimen bajo la gravedad, por lo que las lecturas de la tarde son aproximadamente uno o dos centímetros inferiores a las de la mañana. Las alturas autodeclaradas van en la dirección contraria: las personas redondean al alza, recuerdan su altura matutina o citan la cifra de su permiso de conducir, que puede tener años. Las encuestas nacionales resuelven esto midiendo en lugar de preguntar, con examinadores capacitados y equipos calibrados. Cuando comparas cifras en esta página, estás comparando números medidos o de calidad de encuesta, no estimaciones, por lo que una brecha de dos o tres centímetros entre dos entradas es real y merece atención, en lugar de ser ruido."
        ]
      },
      {
        "heading": "Extremos que ponen en perspectiva el rango ordinario",
        "paragraphs": [
          "La mayoría de los adultos del planeta se sitúa dentro de una banda sorprendentemente estrecha. En términos generales, los hombres adultos se agrupan entre aproximadamente 165 cm en el percentil 5 y 188 cm en el percentil 95, y las mujeres adultas entre aproximadamente 152 cm y 173 cm. Esa banda es el mundo en el que vive la mayoría de nosotros, y es la razón por la que una diferencia de diez centímetros entre dos amigos se siente grande: abarca una gran parte de toda la distribución.",
          "Los poseedores de récords se sitúan muy fuera de esa banda, y son útiles precisamente porque rompen la escala. Robert Wadlow, que medía 272 cm poco antes de su muerte en 1940, era casi un metro más alto que el hombre promedio de su época, como resultado de una glándula pituitaria hiperactiva que nunca dejó de impulsar su crecimiento. En el otro extremo, Chandra Bahadur Dangi midió 54,6 cm en Katmandú en 2012, más bajo que el niño promedio de dos años, como resultado de un enanismo primordial. Coloca cualquiera de las dos figuras junto a un adulto promedio en el lienzo de comparación y el rango ordinario de repente parecerá compacto: toda la dispersión de la altura humana típica cabe dentro de la brecha entre la cintura de Wadlow y su coronilla."
        ]
      },
      {
        "heading": "Cómo usar la herramienta para esta categoría",
        "paragraphs": [
          "La comparación más útil aquí no es celebridad contra celebridad, sino tú contra una población. Empieza añadiendo una figura con tu propia altura, luego añade el promedio para tu sexo y país y observa dónde quedas. Si mides 178 cm y eres hombre, estás por encima de la mediana mundial pero por debajo del promedio neerlandés; si mides 170 cm y eres mujer, estás por encima de la mediana mundial femenina y justo en el promedio femenino neerlandés. Esas ubicaciones son más informativas que cualquier número aislado, porque te dicen si eres típico, alto o bajo en relación con las personas entre las que realmente vives.",
          "Los percentiles expresan lo mismo con mayor precisión. Añadir las figuras de los percentiles 5, 50 y 95 para tu sexo dibuja la forma completa de la distribución en un solo lienzo, y tu propia figura cae en ella como un marcador. Pruébalo también con los poseedores de récords: colocar a Wadlow junto a un adulto promedio es la forma más rápida de comprender lo que realmente significa «el más alto de todos los tiempos», porque ninguna descripción con palabras tiene el mismo peso que ver una figura de casi el doble de tu altura de pie sobre el mismo suelo."
        ]
      }
    ]
  },
  "celebrities": {
    "measurementAnchor": "Documentación oficial de la estatura de pie",
    "measurementGuide": "Las alturas de las celebridades proceden de una mezcla de fuentes de fiabilidad muy diferente, y esta página las clasifica en consecuencia. Las cifras más sólidas son las medidas: los eventos de evaluación y campamentos de selección del deporte profesional, donde los atletas son medidos descalzos por oficiales, y los registros de federaciones, como los perfiles de las juntas de críquet. A continuación vienen las referencias biográficas reputadas que contrastan el material de las agencias con entrevistas y fotografías. Las cifras más débiles son los listados de agencias y las biografías publicitarias, que habitualmente se redondean al alza, se citan con zapatos puestos o simplemente se heredan de un comunicado de prensa temprano y nunca se corrigen. Cuando las fuentes discrepan, esta página prefiere la cifra medida o ampliamente corroborada y trata con sospecha un listado solitario de agencia.",
    "measurementNote": "Las alturas de las celebridades son cifras publicadas; los eventos de evaluación y las federaciones miden descalzo.",
    "commonHeights": [
      {
        "label": "Dwayne Johnson",
        "note": "Actor y excampeón de la WWE, la figura más alta del directorio"
      },
      {
        "label": "Chris Hemsworth",
        "note": "Actor australiano, conocido por Thor"
      },
      {
        "label": "Amitabh Bachchan",
        "note": "Leyenda del cine indio, notablemente alto para su generación de actores"
      },
      {
        "label": "Cristiano Ronaldo",
        "note": "Futbolista portugués, medido en los registros de clubes profesionales"
      },
      {
        "label": "Leonardo DiCaprio",
        "note": "Actor estadounidense"
      },
      {
        "label": "Ranbir Kapoor",
        "note": "Actor indio"
      },
      {
        "label": "Neeraj Chopra",
        "note": "Campeón olímpico indio de jabalina, perfil de World Athletics"
      },
      {
        "label": "Brad Pitt",
        "note": "Actor y productor estadounidense"
      },
      {
        "label": "Zendaya",
        "note": "Actriz y cantante estadounidense, alta para una actriz protagonista"
      },
      {
        "label": "Virat Kohli",
        "note": "Jugador de críquet indio, perfil de jugador de la BCCI"
      },
      {
        "label": "Shah Rukh Khan",
        "note": "Actor indio, «Rey de Bollywood»"
      },
      {
        "label": "Tom Cruise",
        "note": "Actor estadounidense, el protagonista más bajo más buscado del directorio"
      },
      {
        "label": "Sachin Tendulkar",
        "note": "Jugador de críquet indio, máximo anotador de carreras de récord"
      },
      {
        "label": "Alia Bhatt",
        "note": "Actriz india"
      }
    ],
    "faqs": [
      {
        "question": "¿Por qué diferentes sitios web indican alturas distintas para la misma celebridad?",
        "answer": "Porque están copiando tipos de fuentes diferentes. Un perfil de una federación deportiva, una ficha de contratación de una agencia cinematográfica y una wiki de fans rara vez coinciden al centímetro, y cada sitio elige una y la presenta como un hecho. Las fichas de agencia son las culpables habituales de la inflación: son documentos de marketing, y uno o dos centímetros se añaden de forma rutinaria, especialmente en el caso de los protagonistas masculinos. Los registros medidos de eventos de evaluación y federaciones son mucho más consistentes, por lo que las alturas de los atletas son generalmente más fiables que las de los actores. Cuando ves que la altura de una celebridad varía entre 3 y 5 cm entre sitios, normalmente estás viendo la brecha entre una cifra medida y una publicitada."
      },
      {
        "question": "¿Son los actores realmente tan altos como afirman sus alturas publicadas?",
        "answer": "A menudo no del todo. Los actores son fotografiados y filmados de maneras que favorecen su estatura: botas con tacón, plantillas elevadas, ángulos de cámara desde abajo y coprotagonistas elegidos o colocados para preservar la aparente ventaja de altura del protagonista. Algunas producciones incluso colocan a los actores más bajos sobre cajones de madera para los planos de dos. Nada de esto significa que la cifra publicada sea inventada, pero sí significa que la altura que percibes en pantalla puede estar unos centímetros por encima de la cifra descalzo. Comparar el número publicado con un coprotagonista cuya altura se ha medido de forma independiente suele ser la forma más rápida de detectar la exageración."
      },
      {
        "question": "¿Quién es la celebridad más alta y la más baja de este directorio?",
        "answer": "Dwayne Johnson, con 196 cm, es la figura más alta del directorio verificado, un legado de su carrera en la lucha libre profesional, donde su tamaño anunciado formaba parte del espectáculo, pero su estatura real es genuinamente excepcional. En el otro extremo, Alia Bhatt con 160 cm y Scarlett Johansson con 160 cm son las actrices protagonistas más bajas de la lista. La brecha entre Johnson y cualquiera de ellas es de 36 cm, más de un pie, por lo que colocar esas dos figuras una junto a la otra en el lienzo es una de las comparaciones más llamativas que la herramienta puede dibujar."
      },
      {
        "question": "¿Por qué las alturas de los atletas son más fiables que las de los actores?",
        "answer": "Los atletas son medidos por personas sin interés en favorecerlos. Un club de fútbol, una junta de críquet o una federación olímpica registra la altura porque importa para la selección, el equipamiento y las referencias médicas, y la medición la realiza descalzo el personal siguiendo un protocolo. Los actores, en cambio, son medidos por su propia representación, donde la altura forma parte de una imagen comercializable y nadie audita el número. Esa diferencia estructural explica por qué la altura publicada de un jugador de críquet rara vez cambia a lo largo de una carrera, mientras que la de un actor puede aumentar discretamente entre una biografía temprana y otra posterior."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué fascinan las alturas de los famosos",
        "paragraphs": [
          "Nadie discute sobre la altura de un desconocido, pero todo el mundo tiene una opinión sobre la altura de una persona famosa. Parte de ello es simple curiosidad: el cine y la televisión aplanan el mundo en un rectángulo, y el rectángulo miente sobre la escala. Dos actores pueden parecer idénticos en altura en pantalla y diferir en quince centímetros en la vida real, porque la cámara, el encuadre y el calzado conspiran para ocultar la diferencia. Descubrir el número real se siente como resolver un pequeño misterio, y replantea cada escena que has visto: de repente, el dominio del héroe en una escena de confrontación parece menos físico y más cinematografía.",
          "La otra parte es la identificación. Los fans se comparan con personas famosas como una forma de situarse en el mundo. Una persona que mide 170 cm descubre que Tom Cruise y Lionel Messi comparten esa altura, y el número deja de sentirse bajo. Una persona que mide 188 cm encuentra compañía en Amitabh Bachchan. La herramienta de comparación funciona para las celebridades precisamente porque convierte un listado abstracto en un hecho visual: tu figura de pie sobre la misma línea base que la de una estrella, a escala real, sin trucos de cámara en el camino."
        ]
      },
      {
        "heading": "Alturas publicadas, alturas medidas y la brecha entre ellas",
        "paragraphs": [
          "Toda altura de celebridad en esta página pertenece a una de dos familias, y saber cuál es importa más que el número en sí. Las alturas medidas proceden de instituciones que registran la estatura por razones prácticas: eventos de evaluación deportiva, campamentos de selección, juntas de críquet y federaciones olímpicas. Se toman descalzo, por oficiales, bajo un protocolo, y rara vez cambian a lo largo de una carrera. Las alturas publicadas proceden de agencias, biografías publicitarias y entrevistas, donde el número sirve a una imagen más que a un registro. Esas son las cifras que se desplazan hacia arriba uno o dos centímetros, se citan con zapatos puestos o sobreviven sin cambios desde un comunicado de prensa redactado cuando el actor tenía veintiún años.",
          "La brecha suele ser pequeña, pero es sistemática y va en una sola dirección: hacia arriba. Los protagonistas masculinos son los más afectados, porque el casting ha favorecido históricamente a los héroes más altos y los protagonistas más bajos tienen un incentivo para cerrar la brecha sobre el papel. Las actrices se enfrentan a la presión opuesta en algunos contextos, donde ser notablemente alta puede costar papeles frente a protagonistas masculinos más bajos. Nada de esto hace que las cifras sean inútiles, pero significa que una comparación de celebridades debe leerse como aproximada dentro de unos pocos centímetros, y una diferencia de dos centímetros entre dos actores no debe tratarse como decisiva. Una diferencia de quince centímetros, en cambio, es real sin importar en qué fuente confíes."
        ]
      },
      {
        "heading": "Los extremos de la fama y lo que revelan",
        "paragraphs": [
          "El rango del directorio va de 160 cm a 196 cm, un lapso de 36 cm entre Alia Bhatt y Scarlett Johansson en el extremo inferior y Dwayne Johnson en el superior. Vale la pena detenerse en ese lapso, porque cubre casi todo el rango adulto normal: las personas famosas más bajas y más altas no son valores atípicos extravagantes, sino personas cuyas alturas se sitúan cerca de los bordes de la variación ordinaria. Los 196 cm de Johnson son excepcionales pero no baten récords; es la altura de un hombre muy alto que resultó convertirse en luchador y luego en actor. Los 160 cm de Johansson y Bhatt son simplemente la altura de una mujer más baja que el promedio, sin nada destacable fuera de la pantalla.",
          "Lo notable es lo poco que esas diferencias reales se notan en su trabajo. Johnson es filmado para parecer poderoso pero no absurdo, y Johansson es encuadrada para parecer imponente en lugar de pequeña, porque los directores ajustan ángulos, posiciones y colocación de coprotagonistas para servir a la historia más que a la cinta métrica. La herramienta elimina todo eso. Coloca a Johnson junto a Bhatt sobre una misma línea base y la brecha de 36 cm se vuelve de repente innegable, que es exactamente por lo que la comparación resulta satisfactoria: sustituye años de ilusión en pantalla cuidadosamente gestionada por una imagen honesta."
        ]
      },
      {
        "heading": "Cómo usar la herramienta para esta categoría",
        "paragraphs": [
          "La mejor comparación de celebridades empieza contigo mismo. Añade una figura con tu propia altura, luego añade la estrella que te interesa, y la brecha se vuelve personal en lugar de una curiosidad. Un usuario de 175 cm de pie junto a Virat Kohli con la misma altura ve a un igual; junto a Cristiano Ronaldo con 187 cm, el mismo usuario ve un escalón de doce centímetros hacia arriba; junto a Tom Cruise con 170 cm, un escalón de cinco centímetros hacia abajo. Esas tres imágenes juntas enseñan más sobre la escala que cualquier lista de números, porque cada una ancla la altura de la estrella a un cuerpo que ya conoces.",
          "La herramienta también recompensa mezclar categorías, que es donde la comparación de celebridades se vuelve genuinamente interesante. Coloca a un jugador de críquet junto a un marco de puerta, a un actor junto a un caballo o a un futbolista junto a un adulto promedio de otro país, y la fama desaparece dejando solo la medición. Ese es el objetivo del ejercicio: la altura de una celebridad no es un hecho sobre la celebridad en absoluto. Es una altura humana, medida de la misma manera que la tuya, y el lienzo es el único lugar donde se muestra sin adulación, calzado ni ángulos de cámara que se interpongan."
        ]
      }
    ]
  },
  "anime": {
    "measurementAnchor": "Estatura de pie oficial de los databooks",
    "measurementGuide": "Las alturas de los personajes de anime proceden de databooks oficiales de las franquicias, notas de los autores de manga y hojas de diseño de personajes publicadas por los titulares de los derechos, no de capturas de pantalla ni de estimaciones de fans. Como las series de larga duración siguen a sus elencos durante años, un mismo personaje suele tener más de una altura oficial: las cifras de principios de la serie, posteriores al salto temporal y de adulto pueden ser todas correctas para diferentes momentos de la historia. Las wikis de fans discrepan entre sí principalmente porque mezclan estas épocas, redondean las conversiones de forma diferente o repiten ediciones desactualizadas de las guías, por lo que cada cifra de esta página está vinculada a una versión específica del personaje.",
    "measurementNote": "Las alturas del anime son cifras oficiales de databooks para una época específica de la historia, no estimaciones a partir de fotogramas de animación.",
    "commonHeights": [
      {
        "label": "Edward Elric",
        "note": "Fullmetal Alchemist, principios de la serie; crece hasta aproximadamente 165 cm al final de la serie"
      },
      {
        "label": "Levi Ackerman",
        "note": "Attack on Titan, guías oficiales supervisadas por Hajime Isayama"
      },
      {
        "label": "Tanjiro Kamado",
        "note": "Demon Slayer, 15 años tras unirse al Cuerpo; 156 cm a los 13 años"
      },
      {
        "label": "Yuji Itadori",
        "note": "Jujutsu Kaisen, fanbook oficial"
      },
      {
        "label": "Monkey D. Luffy",
        "note": "One Piece, tras el salto temporal; 172 cm antes del salto temporal"
      },
      {
        "label": "Ichigo Kurosaki",
        "note": "Bleach, años de adolescencia; 181 cm como adulto"
      },
      {
        "label": "Son Goku",
        "note": "Dragon Ball Z / Super, adulto"
      },
      {
        "label": "Naruto Uzumaki",
        "note": "Naruto, adulto como 7.º Hokage; 166 cm como adolescente en Shippuden"
      },
      {
        "label": "Roronoa Zoro",
        "note": "One Piece, tras el salto temporal; 178 cm antes del salto temporal"
      },
      {
        "label": "Eren Yeager",
        "note": "Attack on Titan, tras el salto temporal; 170 cm en las primeras temporadas"
      },
      {
        "label": "Satoru Gojo",
        "note": "Jujutsu Kaisen, el fanbook lo indica como de más de 190 cm"
      },
      {
        "label": "All Might (forma de héroe)",
        "note": "My Hero Academia, forma de héroe potenciada; mucho más bajo en su forma debilitada"
      }
    ],
    "faqs": [
      {
        "question": "¿Son oficiales las alturas de los personajes de anime o las adivinan los fans?",
        "answer": "Son oficiales. Las editoriales japonesas imprimen perfiles de personajes con altura, peso y cumpleaños en databooks y fanbooks que acompañan a una serie de manga, y los estudios de animación construyen sus hojas de modelo a partir de esos mismos números. Cuando ves dos alturas diferentes para un personaje, casi siempre es porque el personaje envejeció entre arcos argumentales, no porque el número fuera inventado."
      },
      {
        "question": "¿Por qué un personaje tiene dos alturas diferentes en distintos sitios?",
        "answer": "Los animes de larga duración hacen envejecer a sus elencos. Luffy mide 172 cm antes del salto temporal de One Piece y 174 cm después, Eren Yeager crece de 170 cm a 183 cm, y Tanjiro crece de 156 cm a 165 cm durante su entrenamiento. Un sitio que no dice qué época está citando parecerá erróneo incluso cuando su número procede de una fuente real, por lo que esta página etiqueta la época de cada entrada."
      },
      {
        "question": "¿Por qué algunos personajes de anime son tan bajos comparados con personas reales?",
        "answer": "Muchos protagonistas son adolescentes, y el diseño de personajes japonés a menudo mantiene a los héroes compactos para que se distingan con claridad en pantalla junto a villanos y criaturas mucho más grandes. Edward Elric con 149 cm y Levi Ackerman con 160 cm están escritos ambos como pequeños, y sus historias lo subrayan: su tamaño forma parte de su identidad, no es un error de dibujo. Compararlos con un adulto promedio en el lienzo muestra exactamente lo deliberada que es esa elección."
      },
      {
        "question": "¿Cambian las alturas del anime entre el manga y el anime?",
        "answer": "La cifra publicada en el databook es la misma para ambos, porque el anime adapta las hojas de diseño del manga. Lo que cambia es lo alto que parece un personaje en pantalla: los ángulos de cámara, la perspectiva dramática y la altura de quien esté a su lado pueden hacer que un personaje parezca más alto o más bajo en una escena determinada. El número del databook permanece fijo, por lo que es la cifra correcta para comparar."
      },
      {
        "question": "¿Cómo debo usar la herramienta de comparación con personajes de anime?",
        "answer": "Empieza con un personaje y un humano promedio de 175 cm, luego añade un segundo personaje de la misma serie para ver la brecha dentro del universo, y finalmente añade un objeto del mundo real, como un marco de puerta, para fundamentar el resultado. Como los elencos de anime mezclan adolescentes, adultos y gigantes, la herramienta es más reveladora cuando comparas personajes de la misma época de la misma serie en lugar de mezclar versiones de principios de la serie y versiones adultas."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué vale la pena comparar las alturas del anime",
        "paragraphs": [
          "El anime es uno de los pocos medios en los que la altura es una herramienta narrativa deliberada y no un accidente del casting. Un director no puede simplemente contratar a un actor más alto, por lo que cuando un personaje se dibuja bajo o alto, esa elección se hizo en una hoja de diseño y fue aprobada por el creador. Levi Ackerman mide 160 cm en un elenco de soldados que se alzan sobre él, y la historia nunca deja que el público lo olvide: su letalidad resulta sorprendente precisamente porque su complexión es pequeña. All Might, con 220 cm en su forma de héroe, es el truco opuesto, un cuerpo dibujado para llenar una puerta de modo que su presencia se sienta como un monumento público antes incluso de que hable. Colocar estas figuras una junto a la otra sobre una misma línea base convierte una impresión que apenas notaste mientras veías la serie en una medición que realmente puedes ver.",
          "El rango dentro de una sola serie suele ser más amplio que el rango entre poblaciones humanas reales. One Piece va desde el alivio cómico del tamaño de Chopper hasta gigantes de varios metros de altura, y Attack on Titan coloca a un capitán de 160 cm en el mismo ejército que soldados de 183 cm y Titanes de quince metros de altura. Un lienzo de comparación maneja esa dispersión mejor que cualquier párrafo, porque obliga a cada figura a situarse sobre la misma línea de suelo y la misma escala. En el momento en que ves los 183 cm de Eren Yeager tras el salto temporal junto a los inalterados 160 cm de Levi, la brecha de cuatro años entre ellos deja de ser una curiosidad y se convierte en algo que puedes sentir."
        ]
      },
      {
        "heading": "De dónde proceden los números y por qué discrepan las fuentes",
        "paragraphs": [
          "Las fuentes fiables son impresas, no colaborativas. Shueisha, Kodansha y otras editoriales japonesas publican databooks y fanbooks en los que cada personaje principal recibe un bloque de perfil con altura, peso, cumpleaños y grupo sanguíneo. Las guías INSIDE y OUTSIDE de Attack on Titan, supervisadas por Hajime Isayama, fijan a Levi en 160 cm y la altura final de Eren en 183 cm. El fanbook oficial de Jujutsu Kaisen indica a Gojo como de más de 190 cm, por lo que las tablas cuidadosas citan 190 cm como un mínimo en lugar de una medición exacta. Los registros del Cuerpo de Demon Slayer dan a Tanjiro como 165 cm a los quince años, con su cifra de 156 cm de los trece años conservada en el mismo registro, por lo que ambos números son oficiales y ambos pertenecen a cumpleaños diferentes.",
          "El desacuerdo entre sitios web suele tener una de tres causas, y ninguna es un misterio una vez que sabes buscarla. La primera es la mezcla de épocas: un sitio que cita al Ichigo adolescente con 174 cm junto al Naruto adulto con 180 cm está comparando dos etapas de la vida diferentes sin decirlo. La segunda es el redondeo de conversiones: las fuentes japonesas publican centímetros, y convertir a pies y pulgadas pierde una fracción de pulgada que diferentes sitios redondean en direcciones distintas, por lo que 174 cm aparece tanto como 5'8\" como 5'8.5\". La tercera son los datos obsoletos: las primeras traducciones de fans de las guías circularon antes de las ediciones oficiales en inglés, y algunos de esos primeros números eran simplemente erróneos y nunca se corrigieron. La solución es exigir una etiqueta de época y una fuente nombrada para cada cifra, que es el estándar que sigue esta página."
        ]
      },
      {
        "heading": "Extremos, crecimiento y los conceptos erróneos que crean",
        "paragraphs": [
          "El concepto erróneo más común sobre las alturas del anime es que la altura de un personaje es un hecho fijo como una fecha de nacimiento. En la práctica es una instantánea, y la fecha de la instantánea importa más de lo que la mayoría de los fans cree. Edward Elric comienza Fullmetal Alchemist con 149 cm y lo termina con aproximadamente 165 cm, y su furia por que lo llamen bajo es un chiste recurrente precisamente porque aún está creciendo. El salto de Naruto de 166 cm como adolescente en Shippuden a 180 cm como Hokage son 14 cm completos de crecimiento adulto que una tabla de un solo número oculta por completo. Incluso el modesto paso de Luffy de 172 cm a 174 cm a través del salto temporal te dice algo sobre cómo trata Oda a su elenco: los piratas envejecen, y sus perfiles oficiales envejecen con ellos.",
          "El otro concepto erróneo es que los personajes bajos se dibujan bajos por accidente o por los límites de la animación. Lo cierto es lo contrario. La baja estatura en el anime suele ser una decisión de diseño meditada que señala juventud, condición de desfavorecido o amenaza en un paquete pequeño. Tanjiro con 165 cm no destaca entre los Hashira de Demon Slayer, varios de los cuales superan los 175 cm, y esa normalidad es el punto: es un chico normal que se mantiene firme frente a demonios. Gojo con más de 190 cm es lo inverso, un mentor dibujado para alzarse sobre sus estudiantes de modo que su autoridad se perciba antes de que actúe. Cuando alineas a todo un elenco, el patrón se vuelve visible: la altura en el anime es casting, hecho con un bolígrafo en lugar de un director de casting."
        ]
      },
      {
        "heading": "Cómo sacar el máximo partido a la herramienta de comparación",
        "paragraphs": [
          "La herramienta es más útil cuando la tratas como un banco de experimentos en lugar de un póster. Comienza con un solo personaje junto a la figura masculina promedio de 175 cm, que está cerca de los 175 cm de Goku y hace de Goku un ancla útil: casi cualquier otro personaje de anime puede describirse como más alto o más bajo que Goku. Luego añade un segundo personaje de la misma serie y la misma época, por ejemplo Luffy tras el salto temporal con 174 cm junto a Zoro tras el salto temporal con 181 cm, y la brecha de siete centímetros entre capitán y espadachín se vuelve concreta. Por último, añade un objeto cotidiano como un marco de puerta de 245 cm o un coche, y la escala ficticia choca con el mundo real de una manera que ninguna captura de pantalla de un episodio puede ofrecer.",
          "Dos hábitos hacen que los resultados sean fiables. Primero, mantén las épocas consistentes: no coloques al Eren adolescente de 170 cm junto al Naruto adulto de 180 cm y concluyas nada sobre sus series, porque estás comparando a un quinceañero con un hombre adulto. Segundo, recuerda que las formas de héroe y las transformaciones son entradas separadas: los 220 cm de All Might pertenecen a su forma potenciada, y su forma debilitada se situaría mucho más abajo en el mismo lienzo. Usada de este modo, la herramienta deja de ser una novedad y se convierte en la forma más rápida de resolver las discusiones que los fans del anime realmente tienen, que rara vez tratan sobre quién es más fuerte y muy a menudo sobre quién se alza más alto en el encuadre."
        ]
      }
    ]
  },
  "films": {
    "measurementAnchor": "Estatura según el guion canónico y los planos de atrezo",
    "measurementGuide": "Las alturas de los personajes de cine proceden de biblias de producción de los estudios, planos de diseño de atrezo y tablas de escala oficiales preparadas durante la producción, no de medir a los actores en una alfombra roja. Tres números diferentes pueden ser todos ciertos para un mismo personaje: la altura propia del actor, la altura de la figura con vestuario en el plató y la altura del personaje CGI terminado en pantalla. La armadura, los cascos, las botas con plataforma y el escalado digital añaden centímetros cada uno, por lo que cada entrada de esta página indica cuál de esas cifras está citando.",
    "measurementNote": "Las alturas de cine citan la figura terminada en pantalla, con la altura de la armadura y el traje señalada por separado de la del actor.",
    "commonHeights": [
      {
        "label": "Yoda",
        "note": "Star Wars, Maestro Jedi; cifra del Databank de StarWars.com"
      },
      {
        "label": "R2-D2",
        "note": "Star Wars, droide astromecánico serie R2; 1,09 m en las referencias canónicas"
      },
      {
        "label": "Capitán América (Steve Rogers, MCU)",
        "note": "Altura tras el suero mostrada en la exposición del Smithsonian; el actor Chris Evans mide 6'0\""
      },
      {
        "label": "T-800 (Terminator)",
        "note": "Interpretado por Arnold Schwarzenegger, altura oficial anunciada de 6'2\""
      },
      {
        "label": "Wolverine (interpretación cinematográfica)",
        "note": "Hugh Jackman en pantalla; el canon de los cómics es 160 cm, una cifra diferente"
      },
      {
        "label": "Iron Man (armadura Mark 85)",
        "note": "Altura de la armadura en Avengers: Endgame; Tony Stark en sí mide 185 cm"
      },
      {
        "label": "Darth Vader (armadura)",
        "note": "Armadura completa de soporte vital según el Databank de StarWars.com; Anakin sin armadura es más bajo"
      },
      {
        "label": "Chewbacca",
        "note": "Star Wars, copiloto wookiee; cifra del Databank de StarWars.com"
      },
      {
        "label": "Hulk (MCU)",
        "note": "Forma gamma en el MCU; Bruce Banner mide 175 cm"
      },
      {
        "label": "Jake Sully (avatar)",
        "note": "Avatar, cuerpo na'vi adulto; el material de producción da a los adultos como 9-10 ft"
      },
      {
        "label": "Optimus Prime (Bayverse)",
        "note": "Tablas de escala de acción real de Transformers para las películas de 2007-2017"
      },
      {
        "label": "King Kong (Skull Island, 2017)",
        "note": "Kong adolescente en Kong: Skull Island"
      },
      {
        "label": "King Kong (Godzilla vs. Kong, 2021)",
        "note": "Kong completamente desarrollado en el MonsterVerse"
      },
      {
        "label": "Godzilla (2021)",
        "note": "Godzilla del MonsterVerse en Godzilla vs. Kong"
      }
    ],
    "faqs": [
      {
        "question": "¿Incluyen las alturas de cine la armadura, los cascos y las botas?",
        "answer": "A veces, y esa es exactamente la razón por la que la distinción importa. Los 203 cm de Darth Vader son la figura con armadura completa, con casco y traje de soporte vital, mientras que Anakin Skywalker debajo es un hombre mucho más bajo. Los 198 cm de Iron Man son la armadura Mark 85, no Tony Stark, que mide 185 cm. Esta página etiqueta las cifras de armadura como cifras de armadura, para que nunca compares por accidente un traje con un humano descalzo."
      },
      {
        "question": "¿Por qué Wolverine mide 188 cm aquí cuando los cómics dicen 160 cm?",
        "answer": "Porque esta es la categoría de cine, y las películas eligieron a Hugh Jackman, que mide 188 cm, como Wolverine. Los cómics indican a Logan con 160 cm, y esa cifra es correcta para el personaje impreso. Los dos números describen dos versiones diferentes del personaje, y la versión cinematográfica es la que pertenece a una página de comparación de cine. Mezclar continuidades es la fuente más común de alturas de cine erróneas."
      },
      {
        "question": "¿Por qué Godzilla y King Kong cambian de altura entre películas?",
        "answer": "Porque el equipo de producción de cada película establece su propia escala. Kong mide 104 ft como adolescente en Kong: Skull Island en 2017 y 337 ft como adulto completamente desarrollado en Godzilla vs. Kong en 2021, y el crecimiento forma parte de la historia: aún está madurando en la película anterior. Godzilla, del mismo modo, creció de 108 m en 2014 a 119,8 m en la película de 2021. La altura de una criatura solo tiene sentido con el título de la película adjunto, por lo que cada entrada de criatura aquí nombra su película."
      },
      {
        "question": "¿Son las alturas de las criaturas CGI mediciones reales o estimaciones?",
        "answer": "Son decisiones de producción registradas en tablas de escala. Antes de renderizar un solo fotograma, el equipo de efectos visuales acuerda qué altura tiene una criatura en relación con edificios, vehículos y personajes humanos, porque cada plano depende de esa proporción. Las tablas de escala de producción de Transformers indican al Optimus Prime de acción real con 28 ft, y el material de producción de Avatar define a los na'vi adultos como de 9-10 ft de altura. Estos números no son menos oficiales que una medición de vestuario; simplemente se deciden sobre el papel antes de aparecer en pantalla."
      },
      {
        "question": "¿Puedo comparar personajes de cine con personas y objetos reales en la herramienta?",
        "answer": "Sí, y ahí es donde la herramienta resulta útil. Coloca a Chewbacca con 228 cm junto a un hombre promedio de 175 cm y la ventaja del wookiee deja de ser una impresión vaga y se convierte en una brecha de 53 cm que puedes ver. Coloca a Godzilla junto a un rascacielos y la razón por la que las películas de kaiju encuadran a sus monstruos contra los horizontes urbanos se vuelve obvia: con 119,8 m, Godzilla es un edificio que se mueve."
      }
    ],
    "editorialSections": [
      {
        "heading": "Las tres alturas que se esconden dentro de cada personaje de cine",
        "paragraphs": [
          "Pregunta qué altura tiene un personaje de cine y normalmente obtendrás tres respuestas, todas defendibles. Está la altura del actor, la altura de la figura realmente fotografiada en el plató y la altura del personaje terminado que ve el público. Para un papel humano ordinario, estos tres números son casi idénticos, y nadie nota la diferencia. Para un personaje con vestuario o digital pueden estar a metros de distancia, y esa brecha es donde comienza la mayor parte de la confusión sobre las alturas de cine. Darth Vader es el caso de manual: David Prowse dentro del traje era un hombre muy alto, la armadura terminada con su casco alcanza los 203 cm, y Anakin Skywalker, la persona debajo, nunca fue tan alto. Citar cualquiera de esos números sin decir a cuál te refieres es como empiezan las discusiones.",
          "La armadura es la mayor fuente individual de altura extra, y vale la pena entenderla como un oficio más que como un truco. Un traje de armadura potenciada, un disfraz de wookiee o un traje de superhéroe se construye sobre el cuerpo del intérprete, y los cascos, las hombreras y las botas con plataforma añaden habitualmente entre diez y veinte centímetros. La armadura Mark 85 de Iron Man mide 198 cm mientras que Tony Stark mide 185 cm, y los trece centímetros entre ellos son ingeniería: blindaje, un casco y las botas del traje. Los 228 cm de Chewbacca también son una cifra de vestuario, construida a partir del intérprete interior más el pelaje, una pieza para la cabeza y el calzado. Nada de esto hace que los números sean falsos. La figura con armadura es lo que ve el público, lo que la historia trata como la altura del personaje y lo que registra el databank oficial. Solo se vuelve engañoso cuando se compara en silencio con una medición humana descalza como si ambas se hubieran tomado de la misma manera."
        ]
      },
      {
        "heading": "Biblias de producción, tablas de escala y por qué los reinicios lo restablecen todo",
        "paragraphs": [
          "Para los personajes humanos, la biblia de producción suele ser simplemente la ficha de casting: la altura anunciada del actor, ajustada por lo que añada el vestuario. Para criaturas y robots, el documento clave es la tabla de escala, una hoja dibujada antes del rodaje que fija la altura de cada personaje frente a una silueta humana, un vehículo y un edificio. Las tablas de escala de acción real de Transformers fijan al Optimus Prime del Bayverse en 28 ft, y esa cifra se mantuvo consistente en las películas de 2007-2017 porque cada plano de efectos se construyó a partir de la misma tabla. El material de producción de Avatar define a los na'vi adultos como de 9-10 ft de altura, por lo que el cuerpo avatar de Jake Sully se interpreta como de aproximadamente 9 ft frente a los soldados humanos en el mismo encuadre. Estos documentos son lo más parecido que tiene el cine a un databook de anime, y merecen el mismo respeto como fuentes.",
          "Los reinicios y las secuelas restablecen la tabla, y eso es una característica más que un error. Kong mide 104 ft en Kong: Skull Island porque la historia necesita un simio adolescente que aún puede crecer, y mide 337 ft en Godzilla vs. Kong porque la historia necesita un adulto que pueda enfrentarse a un Godzilla de 393 ft. La triplicación es deliberada, y el equipo de producción publicó ambos números. La misma lógica explica por qué un Godzilla de 1954 con 50 m y un Godzilla de 2021 con 119,8 m son ambos correctos: pertenecen a producciones diferentes con horizontes diferentes sobre los que alzarse. Cualquier tabla que indique una criatura sin nombrar su película está ocultando la información más importante sobre esa cifra."
        ]
      },
      {
        "heading": "Perspectiva forzada, dobles y las ilusiones que engañan al ojo",
        "paragraphs": [
          "Incluso cuando la tabla de producción es exacta, la película terminada puede mentir a tus ojos, y los cineastas tienen todo un conjunto de herramientas para hacerlo. La perspectiva forzada coloca a un actor más bajo más cerca de la cámara para que parezca más alto, una técnica que las películas de El Señor de los Anillos utilizaron constantemente para hobbits y magos. La altura de la cámara también importa: filmar a un personaje desde abajo añade autoridad y altura aparente, mientras que filmar desde arriba lo disminuye, y los directores eligen estos ángulos por su efecto emocional más que por precisión documental. Por eso dos personajes pueden parecer iguales en una escena y diferir en una cabeza en la siguiente, y por eso medir alturas a partir de un fotograma de película es una tarea inútil.",
          "Los dobles de cuerpo y los sustitutos añaden otra capa. El Capitán América es un ejemplo claro: Steve Rogers mide 188 cm tras el Suero del Súper Soldado según la exposición del Smithsonian dentro del universo, mientras que Chris Evans, el actor, mide 183 cm, y la producción salvó la brecha con trucos de cámara y un encuadre cuidadoso. Hulk es el caso extremo, porque no existe ningún intérprete de ese tamaño: el Hulk del MCU de 259 cm es una construcción completamente digital cuya altura se eligió sobre el papel y luego se renderizó, con el cuerpo de 175 cm de Mark Ruffalo sirviendo solo como referencia de movimiento. Una vez que sabes que estos mecanismos existen, la pregunta correcta deja de ser «qué alto parecía en esa escena» y pasa a ser «qué decidió la producción», que es una pregunta con una respuesta documentada."
        ]
      },
      {
        "heading": "Cómo usar la herramienta para resolver discusiones sobre la escala en el cine",
        "paragraphs": [
          "La herramienta de comparación está en su mejor momento cuando hace literal el lenguaje visual de una película. Coloca a Yoda con 66 cm junto a los 203 cm con armadura de Darth Vader y habrás reproducido, en números, el contraste más famoso de Star Wars: el maestro más pequeño y el villano más alto, separados por 137 cm de presencia en pantalla. Coloca a R2-D2 con 109 cm junto a Chewbacca con 228 cm y el hábito del droide de rodar por las escenas a la altura de la rodilla de repente tiene una medición adjunta. No son curiosidades; son los hechos espaciales con los que trabajaban los directores cuando planificaban cada escena, y verlos sobre una misma línea base explica decisiones de casting y vestuario que de otro modo parecerían arbitrarias.",
          "La herramienta también maneja el salto de la escala humana a la escala kaiju, que es donde la altura en el cine se vuelve genuinamente espectacular. Una figura humana de 175 cm junto a Godzilla con 119,8 m es casi invisible, y esa casi invisibilidad es el resultado honesto: te dice por qué las películas de kaiju nunca encuadran a sus monstruos frente a personas, sino frente a horizontes, montañas y otros monstruos. Comparar al Kong de 2017 con 31,7 m con el Kong de 2021 con 102,7 m en el mismo lienzo muestra el arco de crecimiento del personaje de forma más vívida que cualquier montaje de secuela, porque la triplicación se dibuja en lugar de describirse. Mantén el título de la película adjunto a cada criatura, mantén las cifras de armadura etiquetadas como armadura, y la herramienta hará lo que ningún fotograma individual puede hacer: mostrarte la escala propia de la producción, toda a la vez, sobre una misma línea de suelo."
        ]
      }
    ]
  },
  "animals": {
    "measurementAnchor": "Altura al hombro / a la cruz en cuadrúpedos; coronilla en bípedos",
    "measurementGuide": "Los mamíferos cuadrúpedos se miden desde el suelo nivelado hasta la cruz, la cresta ósea entre los omóplatos, porque la cruz se mantiene a una altura fija mientras la cabeza se mueve constantemente hacia arriba, hacia abajo y hacia los lados. Los caballos mantienen el mismo estándar de la cruz, pero lo expresan en manos, donde una mano equivale a 4 pulgadas (10.16 cm), por lo que un caballo de 160 cm mide 15.3 manos. Los animales erguidos, como los canguros y los gorilas, se miden en cambio hasta la coronilla de la cabeza, y las jirafas hasta las puntas de sus osiconos, porque esos animales no tienen una línea de cruz significativa. La altura de la cabeza nunca se usa en cuadrúpedos: un caballo pastando, un ciervo alerta y un elefante cargando mantienen sus cabezas a alturas muy diferentes, por lo que un número basado en la cabeza describiría una postura, no un animal.",
    "measurementNote": "Los animales cuadrúpedos se miden hasta el hombro o la cruz, no hasta la cabeza.",
    "commonHeights": [
      {
        "label": "Gato doméstico",
        "note": "Desde el suelo hasta la cruz del hombro, adulto típico"
      },
      {
        "label": "Perro doméstico",
        "note": "Desde el suelo hasta la cruz; varía mucho según la raza"
      },
      {
        "label": "Lobo gris",
        "note": "Desde el suelo hasta la cruz, adulto"
      },
      {
        "label": "Tigre",
        "note": "Desde el suelo hasta el hombro, adulto"
      },
      {
        "label": "León africano",
        "note": "Desde el suelo hasta la cruz del hombro, macho adulto"
      },
      {
        "label": "Oso pardo",
        "note": "Altura al hombro a cuatro patas; se eleva más sobre las patas traseras"
      },
      {
        "label": "Vaca",
        "note": "Desde el suelo hasta la cruz del hombro, adulta"
      },
      {
        "label": "Canguro rojo",
        "note": "Altura erguida de pie hasta la cabeza"
      },
      {
        "label": "Gorila",
        "note": "Altura de pie hasta la coronilla de la cabeza"
      },
      {
        "label": "Caballo doméstico",
        "note": "Medición a la cruz, 15.3 manos"
      },
      {
        "label": "Camello",
        "note": "Parte superior del hombro; la joroba puede elevarse más"
      },
      {
        "label": "Elefante africano de sabana",
        "note": "Altura al hombro de un macho adulto"
      },
      {
        "label": "Jirafa",
        "note": "Desde el suelo hasta las puntas de los osiconos, adulto típico"
      }
    ],
    "faqs": [
      {
        "question": "¿Por qué los animales se miden en el hombro o la cruz en lugar de la cabeza?",
        "answer": "La cruz es un punto de referencia esquelético fijo, el punto más alto de los omóplatos, y no se mueve cuando el animal pasta, mira a su alrededor o baja la cabeza. La altura de la cabeza puede cambiar en decenas de centímetros de un segundo a otro, por lo que no puede servir como estándar repetible. Por eso, todo registro veterinario, estándar de raza y medición de zoológico para un cuadrúpedo utiliza la cruz, y por eso la herramienta de comparación dibuja a los cuadrúpedos hasta esa línea."
      },
      {
        "question": "¿Cómo se miden los caballos y qué es una mano?",
        "answer": "Los caballos se miden a la cruz en manos, una unidad tradicional equivalente a 4 pulgadas o 10.16 cm. Un caballo descrito como de 15.3 manos mide 15 manos completas más 3 pulgadas, lo que equivale a 160 cm. La herramienta muestra ambas unidades, por lo que un caballo indicado con 160 cm y un caballo indicado con 15.3 manos tienen la misma altura expresada de dos maneras."
      },
      {
        "question": "¿Por qué la altura de un oso resulta confusa y en qué número debería confiar?",
        "answer": "Un oso camina a cuatro patas a unos 130 cm al hombro, pero el mismo animal se alza hasta alrededor de 2.5 m sobre sus patas traseras, por lo que ambos números son reales y describen posturas diferentes. La herramienta de comparación usa la altura al hombro a cuatro patas como valor predeterminado porque es la postura normal de desplazamiento del animal y la única comparable con otros cuadrúpedos. Si quieres la altura al alzarse, compárala en cambio con un humano de pie."
      },
      {
        "question": "¿De verdad las jirafas obtienen la mayor parte de su altura de sus cuellos?",
        "answer": "Solo en parte. Las patas y el cuello de una jirafa miden cada uno unos 1.8 m de largo, por lo que solo las patas ya son tan altas como un humano adulto medio antes de añadir el cuerpo y el cuello. El cuello añade aproximadamente otro tercio de la altura total del animal, y contiene solo siete vértebras, el mismo número que un cuello humano, con cada vértebra estirada a más de 25 cm. Por eso una jirafa se ve tan extrema en el gráfico: son dos estructuras de altura humana apiladas una sobre otra."
      },
      {
        "question": "¿Por qué las alturas de los perros varían tanto entre razas?",
        "answer": "Los perros son el mamífero terrestre de tamaño más variable porque siglos de cría selectiva estiraron una sola especie desde un chihuahua de 15 cm hasta un gran danés de 110 cm al hombro. Por tanto, una única «altura del perro» es solo un valor medio aproximado, y la cifra de 60 cm de la herramienta corresponde a un perro de tamaño mediano, no a un estándar de raza. Para una comparación exacta, introduce la altura a la cruz de una raza específica como altura personalizada en lugar de basarte en la figura genérica del perro."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué las alturas de los animales son más difíciles de precisar que las humanas",
        "paragraphs": [
          "Un humano se mantiene erguido, se queda quieto para una cinta métrica y conserva la misma altura de la mañana a la noche, lo que hace que la medición humana sea casi trivial. Los animales se niegan a cooperar de todas las formas posibles: se mueven, se agachan, se alzan, pastan, y sus cuerpos están construidos horizontalmente en lugar de verticalmente, por lo que la propia idea de «altura» tiene que definirse antes de poder medirse. Esa definición es lo que hace interesante la comparación de animales, porque un solo animal puede tener legítimamente dos o tres alturas diferentes según la postura, y cada una cuenta una historia distinta sobre cómo vive el animal.",
          "El estándar de la cruz existe precisamente para superar esa ambigüedad. La cruz es la cresta de hueso donde el cuello se une al lomo, y a diferencia de la cabeza no puede subirse ni bajarse a voluntad. Un caballo que baja la cabeza para beber y un caballo que sacude la cabeza alarmado tienen la misma altura a la cruz, por lo que los registros de razas, los historiales veterinarios y los estudios de fauna silvestre se basan todos en ella. Cuando ves un cuadrúpedo en el gráfico de comparación, su línea dorsal se sitúa a su altura a la cruz, y su cabeza y sus orejas se elevan por encima de esa línea de forma natural, tal como ocurre en la vida real."
        ]
      },
      {
        "heading": "Cómo funciona la medición en la práctica y dónde sale mal",
        "paragraphs": [
          "Medir a un animal tranquilo es sencillo: se le coloca sobre suelo nivelado, se localiza el punto más alto de los omóplatos y se traza una línea vertical hasta el suelo. Medir a uno salvaje o poco cooperativo es un trabajo distinto, y los investigadores a menudo estiman a partir de huellas, fotografías con un objeto de referencia conocido o restos óseos. Por eso las alturas publicadas para la misma especie a menudo difieren en 10 cm o más, y por eso la herramienta utiliza valores típicos de adultos en lugar de extremos que baten récords. Un elefante récord o una jirafa excepcionalmente alta son una curiosidad, no un animal representativo, y compararte con un valor atípico distorsiona la imagen.",
          "El error más común es mezclar posturas. La altura al hombro de un oso a cuatro patas y su altura de pie sobre las patas traseras difieren en más de un metro, y ambas cifras circulan en línea sin etiquetas. La misma trampa afecta a los elefantes, donde la altura al hombro a veces se confunde con la altura de la cabeza, y a los camellos, donde la joroba puede situarse 30 cm por encima de la línea del hombro. La herramienta evita esto fijando una postura por animal e indicándola en la etiqueta, de modo que una comparación entre un oso y un humano sea siempre una comparación equivalente."
        ]
      },
      {
        "heading": "Extremos que redefinen lo que significa ser alto",
        "paragraphs": [
          "El reino animal estira el sentido humano de la escala en ambas direcciones. En un extremo, un gato doméstico con 25 cm al hombro apenas llega al tobillo de un adulto, y el animal entero cabe bajo una mesa de centro. En el otro extremo, una jirafa de 480 cm equivale a casi tres humanos medios apilados, y solo sus patas son aproximadamente tan altas como una persona. Entre esos polos se sitúan los animales que la gente realmente conoce: perros, caballos y vacas, cuyas alturas a la cruz se agrupan entre 60 y 160 cm, justo en el rango en el que un humano puede juzgarlos de un vistazo.",
          "Lo que sorprende a la mayoría de la gente es cuánto de la altura de un animal alto corresponde a las patas. Las patas de una jirafa miden aproximadamente 1.8 m de largo, lo que significa que el animal ya tiene altura humana antes incluso de que empiece su cuerpo, y su cuello añade otros 1.8 m encima. Los elefantes invierten el patrón: sus patas son comparativamente cortas y con forma de columna, y su volumen procede de un torso masivo situado a gran altura del suelo. Ver a ambos animales junto a un humano sobre la misma línea base hace evidente la diferencia de una forma que los números por sí solos nunca logran."
        ]
      },
      {
        "heading": "Conceptos erróneos comunes y cómo usar bien la herramienta",
        "paragraphs": [
          "El concepto erróneo más persistente es que la altura de un caballo incluye su cabeza. No la incluye, y un caballo cuya cruz mide 160 cm llevará su cabeza muy por encima de 200 cm cuando esté alerta, por lo que las personas que conocen un caballo en persona a menudo insisten en que la altura publicada es incorrecta. La misma lógica se aplica a los ciervos, donde se excluyen las astas, y a los perros, donde se excluyen las orejas. El gráfico es honesto al respecto: dibuja el cuerpo del animal hasta su altura medida y deja que la cabeza se extienda por encima de la línea.",
          "Para sacar el máximo provecho de la herramienta, empieza con una figura humana que conozcas, añade un animal cada vez y observa la línea base en lugar de las partes superiores de los dibujos. Compara un caballo con un humano, luego añade un león para ver cómo el hombro de un gran felino se sitúa por debajo del de un caballo, y luego añade un elefante para ver el salto a la verdadera escala de la megafauna. Si quieres comparar un animal específico, como tu propio perro, mide su cruz con un nivel y una pared, introduce ese número exacto como altura personalizada, y el gráfico te mostrará con precisión dónde se sitúa tu perro frente a todo lo demás."
        ]
      }
    ]
  },
  "objects": {
    "measurementAnchor": "Desde el suelo / piso hasta el plano estructural rígido más alto",
    "measurementGuide": "Los objetos se miden desde su superficie de apoyo nivelada, normalmente el suelo o el pavimento, en línea recta hasta su punto rígido más alto, lo que significa la parte superior del respaldo de una silla, la bisagra superior de un refrigerador o la línea del techo de un coche, pero no un extra blando o ajustable como una antena o un reposacabezas elevado. Las dimensiones estándar describen un tamaño de fabricación común en lugar de una ley de la naturaleza, por lo que una «puerta estándar» mide 80 pulgadas (203 cm) de hoja de puerta en Estados Unidos, pero se vende comúnmente como una abertura de marco de 210 cm en otros lugares, y la misma puerta puede medir de forma diferente según se incluya o no el marco. Indica siempre qué punto se midió, porque dos mediciones honestas del mismo objeto pueden diferir en varios centímetros cuando una incluye molduras, bisagras o barras de techo y la otra no.",
    "measurementNote": "Los objetos se miden desde el suelo hasta su punto rígido más alto.",
    "commonHeights": [
      {
        "label": "Mesa de comedor",
        "note": "Desde el suelo hasta la superficie del tablero"
      },
      {
        "label": "Lavadora",
        "note": "Desde el suelo hasta el panel superior, cargadora frontal estándar"
      },
      {
        "label": "Sofá",
        "note": "Desde el suelo hasta la parte superior de los cojines del respaldo"
      },
      {
        "label": "Silla de comedor",
        "note": "Desde el suelo hasta la parte superior del respaldo"
      },
      {
        "label": "Bicicleta",
        "note": "Desde el suelo hasta la parte superior del manillar"
      },
      {
        "label": "Motocicleta",
        "note": "Desde el suelo hasta el manillar o la parte superior del parabrisas"
      },
      {
        "label": "Coche sedán",
        "note": "Desde el pavimento hasta el ápice del techo"
      },
      {
        "label": "Lámpara de pie",
        "note": "Desde el suelo hasta la parte superior de la pantalla o el remate"
      },
      {
        "label": "Refrigerador",
        "note": "Desde el suelo hasta la bisagra superior de la puerta"
      },
      {
        "label": "Estantería",
        "note": "Desde el suelo hasta el estante superior o la corona"
      },
      {
        "label": "Camioneta pickup",
        "note": "Desde el suelo hasta la parte superior del techo de la cabina"
      },
      {
        "label": "Armario",
        "note": "Desde el suelo hasta la parte superior del mueble"
      },
      {
        "label": "Puerta estándar",
        "note": "Desde el suelo hasta la parte superior de la abertura del marco"
      },
      {
        "label": "Aro de baloncesto",
        "note": "Desde el suelo de la cancha hasta la superficie del aro, reglamentario"
      },
      {
        "label": "Autobús urbano",
        "note": "Desde la superficie de la carretera hasta la plataforma del techo"
      }
    ],
    "faqs": [
      {
        "question": "¿Por qué una «puerta estándar» tiene más de una altura?",
        "answer": "Porque el número depende del país y de qué se está midiendo exactamente. En Estados Unidos, la hoja común de puerta interior mide 80 pulgadas, que son 203 cm, mientras que la abertura del marco en la que encaja suele rondar los 210 cm, y las puertas europeas se venden comúnmente con 210 cm. La herramienta utiliza 210 cm para la abertura del marco porque esa es la altura por la que una persona realmente pasa, pero si tu propia puerta mide 203 cm, introduce ese valor como altura personalizada para una comparación exacta."
      },
      {
        "question": "¿La altura de un coche se mide hasta el techo o hasta las barras de techo?",
        "answer": "Hasta el punto rígido más alto del techo, que en la mayoría de los coches es el propio panel del techo, pero las barras de techo o un cofre de techo pueden añadir varios centímetros y a veces se incluyen en las cifras de los fabricantes. Por eso una fuente puede indicar un sedán con 145 cm y otra con 148 cm: el coche es el mismo, pero una cifra incluye las barras. La herramienta utiliza el ápice del techo sin accesorios, por lo que un coche con cofre de techo será ligeramente más alto en la vida real que en el gráfico."
      },
      {
        "question": "¿Por qué un aro de baloncesto mide exactamente 10 pies de alto en todas partes?",
        "answer": "La altura del aro de 10 pies, o 305 cm, se fijó cuando se inventó el juego y nunca ha cambiado, y todas las ligas importantes del mundo usan la misma cifra. Es una de las pocas alturas de objetos que es una verdadera constante global en lugar de una convención de fabricación, lo que la convierte en un punto de referencia inusualmente fiable. Si puedes tocar el aro, puedes alcanzar 305 cm, y compararte con esa línea te dice al instante a qué distancia por encima de tu cabeza se sitúa."
      },
      {
        "question": "¿Cómo comparo mis propios muebles si no tienen un tamaño estándar?",
        "answer": "Mídelos de la misma forma que lo hace la herramienta: colócalos sobre un suelo plano, mantén una cinta en vertical desde el suelo hasta el punto rígido más alto y lee el número en centímetros. Una silla se mide hasta la parte superior de su respaldo, no de su asiento, y una estantería hasta su borde superior, no hasta su libro más alto. Introduce ese número como altura personalizada y el gráfico colocará tu mueble exacto junto a una figura humana."
      },
      {
        "question": "¿Por qué un edificio de dos plantas no equivale al doble de una casa de una planta?",
        "answer": "Porque la altura de un edificio incluye las losas de los pisos, la estructura del tejado y los parapetos, no solo dos alturas de habitación apiladas, y las alturas de los techos varían según la época y el propósito. Una casa de una planta con 450 cm hasta la cumbrera de su tejado y un edificio de dos plantas con 600 cm hasta su parapeto son valores típicos, pero una casa antigua con techos altos puede rivalizar con un bloque moderno de dos plantas. Las cifras de edificios del gráfico son representativas, no planos arquitectónicos, así que úsalas para intuir la escala y no para planificar una construcción."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué los objetos cotidianos son la mejor regla que ya tienes",
        "paragraphs": [
          "A la gente le cuesta imaginar un número como 175 cm de forma aislada, pero entiende al instante una puerta que atraviesa cada día, un coche que conduce y una silla en la que se sienta. Eso es lo que hace que los objetos sean la categoría más útil en una herramienta de comparación de alturas: las referencias ya están instaladas en la memoria del lector, y el gráfico solo tiene que ordenarlas sobre una línea base común. Una figura humana junto a un marco de puerta de 210 cm se entiende de inmediato, porque todo el mundo conoce la sensación de una puerta que deja libre su cabeza por el ancho de una mano o que le obliga a agacharse.",
          "Los objetos también anclan el resto de la escala. Una vez que sabes que el techo de un sedán se sitúa a unos 145 cm, aproximadamente a la altura del pecho de un adulto, puedes juzgar cada vehículo de la carretera frente a él. Una vez que sabes que un aro de baloncesto está fijado a 305 cm, puedes imaginar exactamente a qué distancia por encima de la cabeza de un jugador cuelga. No son mediciones abstractas, sino hechos físicos con los que la gente se ha golpeado, que ha alcanzado y bajo los que se ha agachado, por lo que son mejores reglas mentales que cualquier número por sí solo."
        ]
      },
      {
        "heading": "Cómo funciona la medición de objetos y por qué dos números honestos pueden discrepar",
        "paragraphs": [
          "Medir un objeto parece sencillo hasta que decides qué punto cuenta como la parte superior. Una silla tiene un asiento a unos 45 cm y un respaldo a unos 90 cm, y ambos son alturas reales de la misma silla, pero solo el respaldo es su altura total. El cuerpo de un refrigerador puede terminar a 170 cm mientras su bisagra superior llega a 175 cm. Un coche medido hasta el panel del techo y el mismo coche medido hasta sus barras de techo difieren en unos pocos centímetros. Ninguna de estas discrepancias significa que alguien esté equivocado; significa que el punto de medición no se indicó.",
          "La herramienta sigue una regla para mantener honestas las comparaciones: desde el suelo hasta el punto rígido más alto, excluyendo extras blandos, temporales u opcionales. Una antena no cuenta, un reposacabezas elevado no cuenta y un cofre de techo no cuenta, porque esos elementos pueden añadirse, retirarse o ajustarse sin cambiar el objeto en sí. Indicar la regla importa más que la propia regla, porque una vez que se conoce la regla, cualquiera puede reproducir la medición con una cinta métrica y un suelo plano, y esa reproducibilidad es lo que separa una referencia útil de una suposición."
        ]
      },
      {
        "heading": "Estándares, y por qué varían según el país y la época",
        "paragraphs": [
          "Algunas alturas de objetos son verdaderas constantes globales. Un aro de baloncesto mide 305 cm en cada cancha de cada país, porque las reglas del deporte lo fijaron y nunca lo cambiaron. La mayoría de las demás son convenciones que varían entre fronteras y décadas. Las alturas de las puertas son el ejemplo clásico: la familiar puerta interior estadounidense de 80 pulgadas mide 203 cm de hoja, mientras que muchos mercados europeos y asiáticos construyen en torno a una abertura de 210 cm, y las casas más antiguas a menudo tienen puertas más bajas que cualquiera de los dos valores. Los muebles siguen el mismo patrón, con alturas de escritorio que se sitúan alrededor de 75 cm porque eso se adapta al codo medio en posición sentada, mientras que las mesas de comedor varían según el estilo y la época.",
          "Los vehículos muestran la misma variación en una dirección diferente. Un sedán de hace veinte años solía ser más bajo que uno moderno, y el auge de los SUV ha empujado el techo medio de los coches desde unos 145 cm hacia 170 cm o más. Por eso el gráfico utiliza valores actuales típicos en lugar de fingir que un solo número abarca todos los coches jamás fabricados. Si tu coche es más antiguo o más alto que lo típico, medirlo e introducir una altura personalizada lleva unos segundos y siempre es más preciso que confiar en una cifra genérica."
        ]
      },
      {
        "heading": "Conceptos erróneos comunes y cómo usar bien la herramienta",
        "paragraphs": [
          "El error más común es comparar los puntos equivocados: juzgar a una persona frente al asiento de una silla en lugar de su respaldo, o frente a la línea de las ventanas de un coche en lugar de su techo. El gráfico evita esto dibujando cada objeto hasta su altura total, de modo que la parte superior de cada dibujo es el punto de medición. Otra sorpresa frecuente es lo altos que resultan ser los objetos ordinarios: un refrigerador de 175 cm tiene exactamente la altura humana media, por lo que domina una cocina, y un autobús urbano de 320 cm mide casi el doble que una persona, por lo que bajar de uno se siente como descender por un pequeño acantilado.",
          "Para usar bien la herramienta, empieza con objetos de tu propia casa. Coloca una figura humana junto a una puerta, luego añade tu coche, luego tu refrigerador, y observa cómo se apila el mundo familiar. Luego añade algo fuera de la vida diaria, como un autobús o un aro de baloncesto, para estirar la escala hacia arriba. Si una figura parece incorrecta, mide el objeto real antes de dudar del gráfico: nueve de cada diez veces, la sorpresa es real, y el objeto genuinamente es así de alto."
        ]
      }
    ]
  },
  "plants": {
    "measurementAnchor": "Desde la línea del suelo hasta el ápice superior de la copa",
    "measurementGuide": "La altura de una planta se mide como la distancia vertical desde la línea del suelo en la base de la planta hasta la punta viva más alta de su copa o tallo, con la planta en su postura natural de crecimiento en lugar de estirada o atada en vertical. En el caso de los árboles, los forestales distinguen entre la altura de un ejemplar maduro que crece al aire libre y uno que compite en una masa densa, y registran el año de medición porque un árbol vivo sigue creciendo, pierde copa por tormentas o incendios, y por tanto puede ser más bajo en un estudio posterior de lo que era antes. La misma especie puede variar enormemente: un girasol en un jardín doméstico puede alcanzar 2 metros, mientras que un ejemplar récord supera los 10 metros, y una palmera datilera en un huerto seco se mantiene mucho más baja que una en una arboleda profunda e irrigada. Por esa razón, cada altura de esta página describe un tipo específico de ejemplar —un individuo récord, una planta madura típica o una forma común de jardín— y la nota junto a cada entrada dice de cuál se trata.",
    "measurementNote": "Medido desde la línea del suelo hasta la punta viva más alta de la copa.",
    "commonHeights": [
      {
        "label": "Secuoya costera Hyperion",
        "note": "El árbol vivo conocido más alto, medido con 115.92 m en el Parque Nacional Redwood, California"
      },
      {
        "label": "Fresno de montaña Centurion",
        "note": "La planta con flores más alta del mundo, Tasmania; medido con 99.6 m tras perder copa por un incendio en 2019"
      },
      {
        "label": "Abeto Doerner",
        "note": "El abeto de Douglas conocido más alto y el árbol no secuoya más alto, medido con 99.3 m en Oregón en 2022"
      },
      {
        "label": "Secuoya gigante General Sherman",
        "note": "El árbol vivo de un solo tronco más grande conocido por volumen de tronco, Parque Nacional Sequoia, California"
      },
      {
        "label": "Bambú gigante",
        "note": "Altura madura típica de Dendrocalamus giganteus, la hierba más alta del mundo"
      },
      {
        "label": "Baobab africano",
        "note": "Gran Adansonia digitata maduro, un enorme árbol suculento de las sabanas africanas"
      },
      {
        "label": "Palmera datilera",
        "note": "Phoenix dactylifera madura típica, la palmera cultivada de los oasis de Oriente Medio y el norte de África"
      },
      {
        "label": "Cactus saguaro maduro",
        "note": "Carnegiea gigantea madura media según el Servicio de Parques Nacionales de EE. UU., desierto de Sonora"
      },
      {
        "label": "Girasol récord",
        "note": "Girasol con el récord de Guinness World Records cultivado por Alex Babich, EE. UU., verificado el 3 de septiembre de 2025"
      },
      {
        "label": "Planta de banano",
        "note": "Planta de banano cultivada madura típica, una hierba gigante con un pseudotallo en lugar de un tronco leñoso"
      },
      {
        "label": "Árbol frutal de jardín (manzano/peral)",
        "note": "Copa de huerto semienana"
      },
      {
        "label": "Girasol común",
        "note": "Girasol de jardín ordinario en plena floración"
      }
    ],
    "faqs": [
      {
        "question": "¿Por qué las distintas fuentes dan alturas diferentes para el mismo árbol famoso?",
        "answer": "Un árbol vivo es un objetivo en movimiento. Crece cada año, y puede perder metros de copa por rayos, incendios o viento, por lo que una cifra solo es correcta para el año en que se midió. Hyperion, por ejemplo, se midió con 115.55 m en 2006 y 115.92 m en 2019, y Centurion perdió unos 4 m en un incendio forestal de 2019. La pendiente también importa: los topógrafos informan de la altura por encima del nivel medio del suelo, mientras que una cinta bajada desde la copa hasta el punto más bajo cuesta abajo puede registrar varios metros más."
      },
      {
        "question": "¿Qué altura alcanza realmente un girasol ordinario?",
        "answer": "La mayoría de los girasoles de jardín alcanzan de 1.5 a 3 metros, lo que ya es más alto que la mayoría de los adultos. Los libros de récords son otra historia: los cultivadores competitivos, usando suelo rico, refugio y tutores, han llevado la especie más allá de los 10 metros, con el récord actual de Guinness World Records en 10.90 m. Cuando compares un girasol en la herramienta, comprueba si la entrada es una planta de jardín o un ejemplar récord, porque ambos difieren en un factor de cinco."
      },
      {
        "question": "¿Puedo comparar una planta de interior con muebles en la herramienta?",
        "answer": "Sí, y ese es uno de los usos más prácticos de esta categoría. Coloca una higuera de hojas de violín o una monstera junto a una mesa de comedor, una estantería o una puerta para juzgar si encajará en una habitación y cuánta luz recibirán sus hojas superiores. Mide la planta desde la superficie del suelo en su maceta, no desde el piso, y recuerda que una planta comprada pequeña seguirá creciendo hacia su altura madura."
      },
      {
        "question": "¿Por qué una planta de banano no se cuenta como árbol?",
        "answer": "Una planta de banano no tiene tronco leñoso. Lo que parece un tronco es un pseudotallo hecho de vainas foliares fuertemente enrolladas, y toda la planta sobre el suelo muere tras fructificar mientras nuevos brotes surgen del rizoma subterráneo. Por tanto, los botánicos la llaman la planta herbácea con flores más grande en lugar de un árbol, aunque un ejemplar maduro puede medir 5 metros de alto y dar sombra a un jardín como lo hace un árbol pequeño."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué las alturas de las plantas son los números más difíciles de la naturaleza",
        "paragraphs": [
          "Ninguna otra categoría de este sitio abarca un rango tan amplio como las plantas. En un extremo se sitúa un girasol de jardín que un niño puede mirar por encima; en el otro, una secuoya costera más alta que un edificio de 35 plantas. Entre ellos se encuentran palmeras, cactus, bambúes, árboles frutales y arbustos, cada uno con su propio hábito de crecimiento, longevidad y relación con su entorno. Ese rango es lo que hace que las alturas de las plantas sean tan satisfactorias de comparar: colocar a una persona junto a una secuoya convierte un número abstracto como 116 metros en algo que se siente, mientras que colocar a la misma persona junto a un saguaro explica por qué un desierto que parece vacío desde la ventana de un coche está en realidad lleno de vida lenta y elevada.",
          "La dificultad es que la altura de una planta nunca es una propiedad fija como lo es la altura de una puerta. Una planta crece, y su tamaño final depende del suelo, el agua, la luz, el viento y los vecinos. Dos semillas del mismo progenitor pueden terminar con metros de diferencia en altura si una cae en un jardín protegido e irrigado y la otra en una ladera seca y ventosa. La edad importa igual: un saguaro tarda alrededor de una década en alcanzar una sola pulgada, pero puede vivir dos siglos y finalmente superar los 12 metros, mientras que un brote de bambú alcanza sus 30 metros completos en una sola temporada de crecimiento y luego nunca crece más. Por tanto, cualquier comparación honesta de plantas tiene que decir qué tipo de ejemplar está describiendo, y esta página hace exactamente eso en la nota junto a cada entrada."
        ]
      },
      {
        "heading": "Cómo se mide realmente un árbol",
        "paragraphs": [
          "Para una planta de jardín, la medición es sencilla: se coloca una cinta junto a ella y se lee la parte superior. Para un árbol gigante, es una pequeña expedición. El método de referencia es la caída de cinta, en el que un escalador asciende hasta el brote vivo más alto y baja una cinta hasta el suelo, un método que confirmó el récord de Hyperion y que se sigue usando porque los telémetros láser pueden ser engañados por troncos inclinados, follaje denso y pendientes. Los topógrafos también corrigen el propio terreno: un árbol que crece en una ladera empinada es más alto medido desde su lado cuesta abajo que desde su lado cuesta arriba, por lo que las alturas publicadas usan el nivel medio del suelo alrededor de la base.",
          "Estos detalles explican por qué el mismo árbol aparece con alturas diferentes en años diferentes. Un árbol no solo crece; también se rompe. Centurion, el fresno de montaña de Tasmania, se midió con 100.5 m en 2018 y luego perdió aproximadamente 4 m de copa en un incendio forestal al año siguiente, por lo que su altura publicada actual es de 99.6 m. El abeto Doerner de Oregón medía 100.3 m en 1991 y 99.3 m en 2022, y perdió más copa por un incendio en 2025. Ninguna de estas revisiones significa que las cifras anteriores fueran incorrectas; significa que el árbol cambió. Cuando uses la herramienta de comparación, trata las alturas de los árboles récord como instantáneas de individuos con nombre en una fecha concreta, y trata las alturas de las plantas de jardín como rangos típicos en lugar de promesas."
        ]
      },
      {
        "heading": "Los extremos, desde árboles récord hasta una sola flor",
        "paragraphs": [
          "La cima del mundo vegetal pertenece a las coníferas y a un extraordinario árbol con flores. Hyperion, una secuoya costera de California, es el ser vivo conocido más alto sobre la tierra con unos 116 m, y sigue creciendo. Justo detrás vienen Centurion, un fresno de montaña de Tasmania que es la planta con flores más alta de la Tierra, y el abeto Doerner, el abeto de Douglas más alto y el árbol más alto del mundo que no es una secuoya. General Sherman, la secuoya gigante, es más bajo que los tres con 83.8 m, pero posee un récord diferente: por volumen de tronco es el árbol de un solo tallo vivo más grande, un recordatorio de que la altura y el volumen son logros diferentes.",
          "El extremo más pequeño de la escala es igual de sorprendente. El bambú gigante, técnicamente una hierba, alcanza 30 m, lo que lo hace más alto que la mayoría de los árboles suburbanos y la vía más rápida para lograr una pantalla alta en un jardín. El saguaro, el cactus más grande de Estados Unidos, promedia unos 12 m en la madurez y puede vivir doscientos años, creciendo tan lentamente que una planta de diez años apenas llega a la altura del tobillo. Y el girasol muestra hasta dónde puede estirar la cultivación a una especie: la misma planta que mide 1.8 m en un jardín típico ha sido cultivada hasta 10.90 m por un poseedor de récord en Indiana, una altura que superaría una casa de tres plantas. Comparar estos extremos lado a lado es la forma más rápida de comprender que la «altura de una planta» no es un solo número, sino todo un espectro moldeado por la genética, el clima y el tiempo."
        ]
      },
      {
        "heading": "Cómo usar la herramienta de comparación para plantas",
        "paragraphs": [
          "Empieza con algo que conozcas. Coloca a un adulto medio junto a una palmera datilera para ver por qué los pueblos de los oasis se sienten sombreados y cerrados, o junto a un saguaro maduro para entender por qué los excursionistas del desierto usan los cactus como puntos de referencia. Luego prueba una comparación práctica: una planta de banano junto a una valla de jardín, un manzano semienano junto a una casa de una planta, o una planta de interior junto a una estantería antes de comprarla. La herramienta mantiene cada planta sobre la misma línea base, de modo que el ojo puede juzgar la escala honestamente en lugar de adivinar a partir de fotografías, donde un objetivo gran angular puede hacer que un arbusto parezca un árbol.",
          "Un hábito útil es comparar la misma especie en dos edades o formas. Coloca un girasol común junto al girasol récord y la brecha muestra lo que puede hacer el cultivo selectivo; coloca un saguaro joven junto a uno maduro y la brecha muestra por qué la conservación del desierto se mide en siglos en lugar de temporadas. Si estás planificando un jardín, compara la altura madura de un árbol con la altura de tu tejado y tus cables eléctricos, porque un árbol plantado hoy para dar sombra puede convertirse en un problema de poda dentro de veinte años. La herramienta no te dirá qué planta elegir, pero evitará que te sorprenda el tamaño de la que sí elegiste."
        ]
      }
    ]
  },
  "sports": {
    "measurementAnchor": "Estatura oficial sin calzado del combine y altura reglamentaria del aro",
    "measurementGuide": "Las estaturas de los atletas proceden de mediciones oficiales, no de material publicitario. Desde la temporada 2019, la NBA certifica las estaturas sin calzado en los campamentos de entrenamiento de los equipos, en sustitución de la práctica anterior de registrar a los jugadores con sus zapatillas de juego, lo que solía añadir de 2 a 5 cm. Los registros del fútbol proceden de la FIFA y de los registros de los clubes, las plantillas de críquet de las hojas de equipo de la ICC y los perfiles de gimnasia de los datos de las federaciones nacionales, por lo que las cifras de un mismo atleta pueden diferir ligeramente entre fuentes según cuándo y cómo se tomaron. Las alturas del equipamiento son un tipo de número completamente distinto: están fijadas por el reglamento, de modo que un aro de baloncesto mide 305 cm en todo el mundo, un travesaño de fútbol mide 244 cm y una red de voleibol masculino mide 243 cm, sin importar quién juegue.",
    "measurementNote": "Las estaturas de los atletas son cifras sin calzado de las mediciones (combine); las alturas del equipamiento son estándares reglamentarios.",
    "commonHeights": [
      {
        "label": "Yao Ming",
        "note": "Ex pívot de los Houston Rockets, el jugador más alto del Salón de la Fama del Baloncesto"
      },
      {
        "label": "Victor Wembanyama",
        "note": "Pívot de los San Antonio Spurs, registrado con 7 ft 4 in"
      },
      {
        "label": "Red de voleibol masculino",
        "note": "Altura reglamentaria de la red de la FIVB para la competición masculina"
      },
      {
        "label": "Travesaño de la portería de fútbol",
        "note": "Reglas de Juego de la FIFA, borde inferior del travesaño sobre el suelo"
      },
      {
        "label": "Red de voleibol femenino",
        "note": "Altura reglamentaria de la red de la FIVB para la competición femenina"
      },
      {
        "label": "Shaquille O'Neal",
        "note": "Ex pívot de la NBA, cuatro veces campeón de la NBA"
      },
      {
        "label": "Michael Jordan",
        "note": "Ex escolta de los Chicago Bulls, seis veces campeón de la NBA"
      },
      {
        "label": "Usain Bolt",
        "note": "Velocista jamaicano, plusmarquista mundial de 100 m y 200 m"
      },
      {
        "label": "Cristiano Ronaldo",
        "note": "Delantero portugués, entre los máximos goleadores del fútbol internacional masculino"
      },
      {
        "label": "Lionel Messi",
        "note": "Delantero argentino, ocho veces ganador del Balón de Oro"
      },
      {
        "label": "Muggsy Bogues",
        "note": "El jugador más bajo de la historia de la NBA, 14 temporadas como base"
      },
      {
        "label": "Simone Biles",
        "note": "Gimnasta artística estadounidense, la gimnasta más laureada de la historia"
      },
      {
        "label": "Aro de baloncesto reglamentario",
        "note": "Altura estándar del aro de la FIBA y la NBA sobre la cancha"
      },
      {
        "label": "Tocones de críquet (stumps)",
        "note": "Reglas del Críquet de la MCC, parte superior de los tocones sobre la superficie de juego"
      }
    ],
    "faqs": [
      {
        "question": "¿La NBA mide a los jugadores con o sin zapatillas?",
        "answer": "Sin zapatillas, desde 2019. Antes de esa temporada, los equipos registraban a los jugadores con sus zapatillas de baloncesto, lo que añadía aproximadamente una pulgada o dos y hacía que las comparaciones no fueran fiables. Ahora la liga certifica la estatura sin calzado en los campamentos de entrenamiento, de modo que un jugador registrado con 6 ft 6 in hoy mide realmente eso sin calzado, y el número de la plantilla coincide con el de las mediciones previas al draft (combine). Los registros anteriores al cambio todavía pueden indicar una estatura un poco mayor que la estatura sin calzado del jugador."
      },
      {
        "question": "¿Por qué el mismo atleta aparece a veces con estaturas diferentes en lugares distintos?",
        "answer": "Porque los números proceden de momentos y métodos diferentes. Un futbolista medido a los 17 años puede crecer otro centímetro o dos, un jugador de baloncesto registrado con zapatillas parece más alto que el mismo jugador sin calzado, y algunas federaciones redondean a la pulgada más cercana mientras que otras redondean al centímetro más cercano. Las plantillas de los equipos también se actualizan en momentos distintos. Cuando dos fuentes difieren en un centímetro o dos, ambas pueden ser honestas; simplemente están midiendo cosas diferentes, y la cifra sin calzado del combine es la que hay que confiar para las comparaciones."
      },
      {
        "question": "¿Qué altura tiene un aro de baloncesto en comparación con una portería de fútbol?",
        "answer": "Un aro de baloncesto se sitúa a 305 cm, nada menos que 61 cm por encima de un travesaño de fútbol, a 244 cm. Esa diferencia se percibe fácilmente en la herramienta: un jugador de baloncesto alto como Yao Ming, con 229 cm, sigue quedando muy por debajo del aro en el que encesta, mientras que un portero de fútbol situado bajo un travesaño de 244 cm puede alcanzar la barra con un salto. La red de voleibol masculino, a 243 cm, tiene casi exactamente la misma altura que un travesaño de fútbol, una coincidencia que merece la pena ver lado a lado."
      },
      {
        "question": "¿Por qué las gimnastas son bajas mientras que los jugadores de baloncesto son altos?",
        "answer": "Cada deporte selecciona el cuerpo que su física recompensa. La gimnasia recompensa una complexión compacta porque un atleta más bajo gira más rápido en el aire y tiene menos distancia que recorrer alrededor del aparato, y por eso la mejor gimnasta de todos los tiempos, Simone Biles, mide 142 cm. El baloncesto recompensa el alcance, porque el aro está fijo a 305 cm y cada centímetro extra de estatura acerca las manos del jugador a él. Ningún tipo de cuerpo es mejor en general; cada uno es una respuesta a las exigencias de un juego concreto."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué el deporte convirtió la estatura en una estadística oficial",
        "paragraphs": [
          "Pocos ámbitos registran la estatura humana con tanto cuidado como el deporte profesional. Cada combine del draft de la NBA mide a los aspirantes sin calzado con un estadiómetro, cada federación de fútbol registra las estaturas de sus jugadores para los programas de los partidos, y cada hoja de equipo olímpico enumera a sus atletas al centímetro. La razón es práctica: la estatura decide qué posición puede ocupar un jugador, cómo se defiende un equipo y qué tácticas tienen sentido. Un entrenador de baloncesto necesita saber si un novato puede defender de forma creíble a un pívot de 224 cm; un entrenador de voleibol necesita saber si un bloqueador puede alcanzar por encima de una red de 243 cm; un ojeador de fútbol necesita saber si el bajo centro de gravedad de un extremo le ayudará a cambiar de dirección a gran velocidad.",
          "Esa atención oficial hace que las estaturas deportivas sean inusualmente fiables en comparación con las estaturas de las celebridades, que a menudo proceden de entrevistas y conjeturas. Cuando esta página registra a Yao Ming con 229 cm o a Muggsy Bogues con 160 cm, se trata de mediciones de la liga, no de estimaciones. La diferencia entre ellos, 69 cm, es una de las mayores jamás vistas entre dos jugadores de la misma liga profesional, y es una referencia útil para toda la categoría: pon a los dos lado a lado en la herramienta y podrás ver de inmediato lo que realmente significan «alto para el baloncesto» y «bajo para el baloncesto», sin ninguna exageración."
        ]
      },
      {
        "heading": "Sin calzado, con zapatillas o en la plantilla",
        "paragraphs": [
          "La confusión más común sobre las estaturas deportivas es la diferencia entre una medición sin calzado y una estatura registrada. Durante años, las plantillas de la NBA mostraban a los jugadores con sus zapatillas, lo que añadía un par de centímetros y hacía que un jugador de 6 ft 5 in pareciera de 6 ft 7 in. La liga puso fin a esa práctica en 2019 y ahora certifica las estaturas sin calzado en los campamentos de entrenamiento, y por eso algunos jugadores veteranos parecieron encoger una pulgada de la noche a la mañana sin haber cambiado en absoluto. Si comparas un registro moderno con una tarjeta coleccionable antigua, la cifra sin calzado es la honesta, y esta página la utiliza en todo momento.",
          "Otros deportes tienen sus propias convenciones. Las estaturas del fútbol proceden de registros de federaciones y clubes que suelen tomarse una sola vez y rara vez se vuelven a medir, de modo que un jugador que creció después de firmar como adolescente puede figurar un centímetro por debajo durante años. Las plantillas de críquet enumeran las estaturas a partir de los registros del equipo en lugar de un combine, y los perfiles de gimnasia proceden de federaciones nacionales que miden a los atletas en las competiciones. Nada de esto hace que los números no sean fiables, pero sí significa que una diferencia de uno o dos centímetros entre fuentes es ruido normal y no una contradicción. En el caso del equipamiento, en cambio, no hay ruido alguno: el reglamento fija el aro, el travesaño y la red, y se supone que cada cancha y cada campo del mundo deben coincidir."
        ]
      },
      {
        "heading": "Los extremos: gigantes, casos excepcionales y el equipamiento contra el que juegan",
        "paragraphs": [
          "Las comparaciones más instructivas en el deporte no son entre dos atletas similares, sino entre un atleta y el equipamiento que su deporte mantiene fijo. Un aro de baloncesto a 305 cm cuelga 76 cm por encima incluso de la cabeza de Yao Ming, lo que explica por qué encestar con un mate es una hazaña tanto de salto como de estatura: hasta los jugadores más altos tienen que despegar del suelo. Un travesaño de fútbol a 244 cm se sitúa apenas 15 cm por encima de la cabeza de Shaquille O'Neal, y por eso los porteros, que son altos pero rara vez tan altos como los jugadores de baloncesto, pueden alcanzarlo con un salto y un estiramiento. La red de voleibol masculino a 243 cm y la red femenina a 224 cm muestran cómo un solo deporte ajusta su obstáculo fijo para sus atletas, y los tocones de críquet a 71 cm muestran el extremo opuesto: un objetivo apenas a la altura de la rodilla que un lanzador debe acertar desde 20 metros de distancia.",
          "Los propios atletas cuentan la misma historia desde el otro lado. Victor Wembanyama, con 224 cm, es la estrella activa más alta del baloncesto y aun así está 5 cm por debajo de Yao Ming, mientras que Simone Biles, con 142 cm, es 18 cm más baja que Muggsy Bogues, el hombre más bajo que ha jugado en la NBA, y sin embargo es la gimnasta más laureada de la historia. Usain Bolt, con 196 cm, rompió la suposición de que los velocistas deben ser bajos, utilizando zancadas largas para cubrir un terreno que los rivales más pequeños necesitaban más pasos para cruzar. Lionel Messi, con 170 cm, y Cristiano Ronaldo, con 187 cm, muestran que la mayor rivalidad del fútbol fue también una diferencia de estatura de 17 cm que nunca decidió cuál de los dos era mejor. La estatura en el deporte es una ventaja en algunas posiciones y una contrapartida en otras, nunca la historia completa."
        ]
      },
      {
        "heading": "Cómo usar la herramienta de comparación para el deporte",
        "paragraphs": [
          "Empieza por ti mismo. Añade tu propia estatura junto a un aro de baloncesto y verás exactamente a qué distancia por encima de tu alcance se sitúa el objetivo de 305 cm, lo que hace que el atletismo de un mate se vuelva de repente concreto. Luego añade a un jugador favorito: ponte junto a Wembanyama para sentir lo que los periodistas quieren decir con un talento físico generacional, o junto a Muggsy Bogues para ver que una carrera en la NBA es posible con 160 cm. Los entrenadores y los aficionados utilizan el mismo truco con equipos enteros, alineando un quinteto titular para comprobar si un equipo es realmente alto o simplemente tiene un pívot alto rodeado de escoltas de estatura media.",
          "Las comparaciones de equipamiento son igual de reveladoras. Coloca una portería de fútbol junto a un aro de baloncesto y la diferencia de 61 cm entre ambos se hace visible de un modo que la lectura de los números nunca logra del todo. Coloca una red de voleibol masculino junto a una red femenina y la diferencia de 19 cm explica por qué los dos juegos se ven y se sienten diferentes aunque la cancha tenga el mismo tamaño. Y coloca los tocones de críquet junto a cualquiera de estos elementos y recordarás que algunos deportes hacen su objeto central deliberadamente pequeño, para que sea la habilidad, y no la estatura, la que decida la competición. La herramienta mantiene a todos y a todo sobre una misma línea base, que es la única manera honesta de comparar a una persona con una pieza de equipamiento construida según un reglamento."
        ]
      }
    ]
  },
  "apparel": {
    "measurementAnchor": "Desplazamiento vertical efectivo añadido a la estatura sin calzado",
    "measurementGuide": "La altura de la ropa y el calzado se mide como el desplazamiento vertical efectivo que una pieza añade a la estatura sin calzado. En el caso del calzado, eso significa la pila del talón o el grosor de la plataforma bajo el pie, medido desde el suelo hasta la plantilla a la altura del talón; en el caso de los sombreros y tocados, significa la altura de la copa por encima de la parte superior de la cabeza. Un tacón solo eleva la parte trasera del pie, de modo que el mismo tacón etiquetado añade una altura percibida diferente según el ángulo del pie y según cuánto se comprima la espuma bajo el peso corporal, mientras que una plataforma completa eleva todo el pie de manera uniforme. Por eso dos zapatos con la misma altura anunciada pueden dejarte de pie a alturas visiblemente diferentes.",
    "measurementNote": "La ropa y el calzado añaden altura por encima de la estatura sin calzado: compara el desplazamiento, no el zapato en sí.",
    "commonHeights": [
      {
        "label": "Zapatilla de running estándar",
        "note": "Altura añadida: pila típica del talón de la mediasuela de espuma; las zapatillas de running normales miden 21-30 mm de pila"
      },
      {
        "label": "Zapato de vestir masculino (Oxford)",
        "note": "Altura añadida: tacón estándar de cuero apilado, aproximadamente 1 pulgada"
      },
      {
        "label": "Tacón roper (bota vaquera)",
        "note": "Altura añadida: tacón roper plano de 1 pulgada, pensado para caminar y para el trabajo en el rancho"
      },
      {
        "label": "Plantilla con alza en el talón",
        "note": "Altura añadida: una sola alza de talón extraíble, en el extremo inferior del rango de plantillas de 0.5-1.5 in"
      },
      {
        "label": "Zapatilla de running maximalista",
        "note": "Altura añadida: pila del talón de 41.3 mm medida en laboratorio en la clase maximalista"
      },
      {
        "label": "Bota de trabajo (suela con tacos)",
        "note": "Altura añadida: pila de la suela de una bota de cuero cosida y resistente"
      },
      {
        "label": "Tacón vaquero de montar",
        "note": "Altura añadida: tacón de montar tradicional inclinado de 2 pulgadas, con forma para sujetar un estribo"
      },
      {
        "label": "Tacón kitten (bajo y fino)",
        "note": "Altura añadida: tacón corto y fino, de hasta 2 pulgadas"
      },
      {
        "label": "Zapato con alza (de uso diario)",
        "note": "Altura añadida: cuña interna oculta; los modelos de uso diario aportan alrededor de 2.8 pulgadas de elevación"
      },
      {
        "label": "Tacón de aguja clásico",
        "note": "Altura añadida: tacón alto formal de moda, en el rango clásico de 3-4 in"
      },
      {
        "label": "Sombrero de copa (copa moderna)",
        "note": "Altura añadida por encima de la cabeza: la copa moderna del sombrero de copa promedia 5 pulgadas (las históricas de tubo de estufa alcanzaban 8 in)"
      },
      {
        "label": "Bota de plataforma",
        "note": "Altura añadida: plataforma elevada de pasarela en la clase extra alta de 6 pulgadas"
      }
    ],
    "faqs": [
      {
        "question": "¿Los zapatos realmente te hacen más alto, o solo lo pareces?",
        "answer": "Realmente elevan tu altura medida de pie, exactamente en el grosor del material bajo tu pie. Si mides 175 cm sin calzado y te pones unas zapatillas de running con una pila de 3 cm, mides 178 cm con esos zapatos. Lo que los zapatos no cambian es la estatura de tu propio cuerpo: te los quitas y vuelves a medir 175 cm. Esa distinción es la razón por la que los médicos y los oficiales deportivos miden la estatura sin calzado, mientras que los fotógrafos y los directores de casting a menudo la miden con el calzado que lleve la persona."
      },
      {
        "question": "¿Por qué la misma altura de tacón se siente diferente en zapatos distintos?",
        "answer": "Porque «altura del tacón» describe solo la parte trasera del zapato. Un tacón de aguja de 10 cm inclina el pie de forma pronunciada, ya que la parte delantera del pie se mantiene cerca del suelo, mientras que una plataforma de 10 cm eleva todo el pie a nivel y se siente mucho más estable. La firmeza de la espuma también importa: la espuma blanda se comprime bajo el peso corporal, de modo que parte de la pila anunciada desaparece en el momento en que te pones de pie sobre ella, mientras que una suela firme conserva casi toda. La longitud del pie también desempeña un papel, ya que las marcas ajustan ligeramente la altura del tacón según la talla del zapato para mantener las proporciones estables."
      },
      {
        "question": "¿Cuánta altura añaden realmente los zapatos con alza?",
        "answer": "Los zapatos con alza de uso diario suelen añadir de 2 a 3 pulgadas mediante una cuña oculta dentro del zapato, y algunos diseños especializados llegan más lejos. El inconveniente es que casi todas las cifras de elevación de esta categoría son la afirmación del propio fabricante y no un número medido de forma independiente en un laboratorio, de modo que dos marcas que anuncian la misma elevación pueden ofrecer resultados visiblemente diferentes. La otra contrapartida es la comodidad: una cuña oculta mayor significa un ángulo del pie más pronunciado, y por eso la mayoría de los modelos de uso diario se mantienen alrededor de las 2 a 3 pulgadas."
      },
      {
        "question": "¿Los sombreros y tocados cuentan para tu altura?",
        "answer": "Cuentan para tu altura total hasta la parte superior, que es lo que importa para los marcos de las puertas, las fotografías y cualquier persona que esté a tu lado. La copa moderna de un sombrero de copa añade aproximadamente 5 pulgadas por encima de la cabeza, de modo que una persona que mide 175 cm sin calzado alcanza unos 188 cm hasta la parte superior del sombrero. El equipo de protección para la cabeza funciona de la misma manera a la inversa: un casco de seguridad añade espacio libre por encima del cráneo en lugar de estatura, pero la silueta en un lienzo de comparación sigue creciendo en esa misma cantidad."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué el calzado cambia tu altura más de lo que crees",
        "paragraphs": [
          "Casi nadie camina sin calzado, y sin embargo casi todas las cifras de estatura que escuchas son cifras sin calzado. En esa brecha es donde la ropa y el calzado hacen su trabajo silencioso. Una persona que mide 175 cm sin calzado mide 178 cm con zapatillas de running, 180 cm con botas vaqueras y 185 cm con tacones de aguja clásicos, todo ello sin crecer ni un milímetro. El cambio es lo bastante grande como para importar en las situaciones en las que la estatura realmente se nota: fotografías de grupo, marcos de puertas, uniformes de trabajo y la larga discusión sobre si alguien mide «realmente» seis pies. La mayoría de esas discusiones son en realidad discusiones sobre el calzado, porque una persona está recordando una medición sin calzado y la otra está recordando lo alta que parecía alguien con botas.",
          "La confusión es comprensible, porque la altura del zapato rara vez se declara con honestidad. Las páginas de producto anuncian el tacón, no la altura que conservas. La altura de la pila de una zapatilla de running se mide sin un pie dentro, de modo que la espuma aún no se ha comprimido bajo tu peso. La altura etiquetada de un tacón de aguja ignora el hecho de que la parte delantera del pie se sitúa mucho más baja que el tacón, lo que cambia tu postura y lo alto que pareces para alguien que está frente a ti. Y la altura de una plataforma a veces se indica incluyendo la suela exterior y a veces no. El resultado es que dos personas pueden comprar zapatos con el mismo número anunciado y acabar de pie a alturas notablemente diferentes, y ambas insistirán en que la etiqueta era correcta."
        ]
      },
      {
        "heading": "Pilas de talón, plataformas y cuñas: qué es lo que realmente te eleva",
        "paragraphs": [
          "Solo hay tres maneras en que un zapato añade altura, y se comportan de forma muy diferente. Una pila de talón eleva la parte trasera del pie mientras los dedos se mantienen bajos, y por eso los tacones cambian tu postura, el ángulo de tus pantorrillas y tu equilibrio, todo a la vez. Cuanto más alto es el tacón, más pronunciada es la inclinación, y por eso un tacón de aguja de 10 cm no se parece en nada a una plataforma de 10 cm aunque ambos añadan el mismo número a tu altura de pie. Una plataforma eleva todo el pie de manera uniforme, de modo que tu tobillo se mantiene cerca de su ángulo natural y la elevación se siente más tranquila, aunque el zapato se vuelve más pesado y más torpe. Una cuña oculta, como la que se utiliza en los zapatos con alza, busca un término medio: parte de la elevación se sitúa dentro del zapato, donde nadie puede verla, y la suela visible se mantiene modesta, de modo que el zapato pasa por calzado normal mientras añade pulgadas en silencio.",
          "Las cifras detrás de estos diseños están más reguladas de lo que la mayoría de la gente cree. World Athletics limita las zapatillas de running de competición a una altura de pila de 40 mm, lo que dice algo sobre cuánta elevación puede ofrecer la espuma moderna: las zapatillas de running más altas medidas en laboratorio se sitúan justo por encima de los 40 mm, y la zapatilla media se sitúa alrededor de los 30 mm. Eso significa que la diferencia entre una zapatilla normal y la zapatilla de running más alta del mercado es solo de aproximadamente un centímetro, aunque el marketing lo haga sonar espectacular. Los saltos reales proceden del calzado de moda y de trabajo, donde un tacón de montar, un tacón de aguja o una bota de plataforma pueden añadir de dos a seis veces más que cualquier zapatilla."
        ]
      },
      {
        "heading": "Los extremos: de ir sin calzado a las plataformas de pasarela",
        "paragraphs": [
          "En el extremo modesto, un tacón de zapato de vestir de aproximadamente 1 pulgada es tan normal que la mayoría de la gente olvida que existe, y un tacón roper en una bota vaquera añade la misma cantidad mientras parece parte del diseño funcional de la bota y no un dispositivo para ganar altura. En el otro extremo, las botas de plataforma de la clase de 6 pulgadas y los históricos sombreros de copa de tubo de estufa, con 8 pulgadas por encima de la cabeza, son declaraciones deliberadas: existen para que se les note. Entre esos dos polos se sitúan los compromisos cotidianos que la mayoría de la gente usa realmente, desde los tacones kitten de 2 pulgadas hasta los zapatos con alza que ocultan de 2 a 3 pulgadas dentro de un zapato de aspecto por lo demás normal. El patrón interesante es que las ganancias de altura más extremas suelen ser las más visibles, mientras que las ganancias más discretas alcanzan un máximo de unas 3 pulgadas, porque más allá de eso el ángulo del pie delata el truco.",
          "Los sombreros y tocados merecen una mención aquí porque rompen la lógica habitual. El calzado te eleva desde abajo, de modo que tu cuerpo permanece igual y el suelo se desplaza efectivamente hacia abajo. Los sombreros añaden altura desde arriba, de modo que tu cuerpo permanece igual y tu silueta simplemente se extiende hacia arriba. Un sombrero de copa no te hace más alto en ningún sentido que un médico reconocería, y sin embargo cambia cada fotografía en la que apareces y cada puerta que atraviesas. Por eso comparar la ropa y el calzado en un lienzo de alturas es útil: muestra la altura visual total que una persona ocupa en el mundo, no solo el número de su historial médico."
        ]
      },
      {
        "heading": "Cómo usar la herramienta de comparación para esta categoría",
        "paragraphs": [
          "Empieza con una silueta humana de una estatura sin calzado conocida y luego coloca un desplazamiento de ropa o calzado junto a ella para ver la altura con la prenda puesta. La comparación más reveladora es la misma persona con calzado diferente: una silueta con zapatillas, otra con botas, otra con tacones de aguja, y las diferencias entre ellas son la historia honesta de lo que hacen los zapatos. También puedes comparar directamente los tipos de tacón, lo que resuelve las discusiones sobre si un tacón de montar o un tacón kitten añade más, y si una plataforma realmente supera a un tacón de aguja con la misma altura etiquetada. Recuerda que cada elemento de ropa y calzado aquí es un desplazamiento, no un objeto independiente: un tacón de aguja de 10 cm no mide 10 cm de alto por sí solo, añade 10 cm a quien lo lleva, así que combínalo siempre con una figura humana para leer el resultado correctamente."
        ]
      }
    ]
  },
  "fictional": {
    "measurementAnchor": "Canon de la franquicia y archivos de construcción del mundo",
    "measurementGuide": "Las alturas ficticias proceden de la fuente canónica de una versión específica del personaje: un banco de datos de la franquicia, un libro de consulta con licencia o un manual de reglas de juego de mesa como el Monster Manual de Dungeons and Dragons, que suele indicar una media para un tipo de criatura en lugar de una cifra exacta para un individuo. El mismo personaje suele tener alturas oficiales diferentes según la adaptación, porque las películas reescalan a las criaturas para la historia, los juegos las reequilibran y las nuevas ediciones revisan las cifras antiguas. Esta página utiliza una cifra indicada por versión y nombra esa versión, de modo que una comparación siempre muestra qué Kong o qué Godzilla estás viendo.",
    "measurementNote": "Las alturas ficticias siguen la versión canónica indicada; las adaptaciones del mismo personaje suelen diferir.",
    "commonHeights": [
      {
        "label": "Yoda",
        "note": "Banco de datos de Star Wars: 0.66 m"
      },
      {
        "label": "Hobbit (media)",
        "note": "Prólogo de El Señor de los Anillos de Tolkien: altura media de los hobbits de 3 ft 6 in"
      },
      {
        "label": "Gandalf",
        "note": "Notas tardías de Tolkien: el mago medía al menos 5 ft 6 in"
      },
      {
        "label": "Legolas",
        "note": "Guías de personajes de Tolkien: el elfo mide aproximadamente 6 ft"
      },
      {
        "label": "Aragorn",
        "note": "Notas de Tolkien, citadas en The Lord of the Rings: A Reader's Companion"
      },
      {
        "label": "Darth Vader (con armadura)",
        "note": "Banco de datos de Star Wars: 2.03 m con la armadura completa"
      },
      {
        "label": "Chewbacca",
        "note": "Banco de datos de Star Wars: 2.28 m"
      },
      {
        "label": "Gigante de las colinas (D&D 5e)",
        "note": "El más pequeño de los gigantes verdaderos, con una media de 16 ft"
      },
      {
        "label": "Gigante de escarcha (D&D 5e)",
        "note": "Con una media de 21 ft en la clasificación de gigantes de la 5e"
      },
      {
        "label": "Gigante de las nubes (D&D 5e)",
        "note": "24 ft en la clasificación de gigantes de la 5e"
      },
      {
        "label": "King Kong (1933, Nueva York)",
        "note": "Escalado a 24 ft en las escenas de Nueva York (18 ft en la Isla Calavera)"
      },
      {
        "label": "Gigante de las tormentas (D&D 5e)",
        "note": "El más alto de los gigantes verdaderos, con una media de 26 ft"
      },
      {
        "label": "King Kong (Isla Calavera, 2017)",
        "note": "Kong adolescente, de 104 ft de altura"
      },
      {
        "label": "Godzilla (2014)",
        "note": "108 m de altura en la película de 2014"
      }
    ],
    "faqs": [
      {
        "question": "¿Por qué el mismo personaje tiene alturas diferentes en películas distintas?",
        "answer": "Porque los cineastas reescalan a las criaturas para que encajen en la historia que están contando, no para que coincidan con la regla de una película anterior. El King Kong original se construyó con 18 pies en la Isla Calavera y se reescaló a 24 pies una vez que llegó a Nueva York, porque necesitaba parecer más grande frente a la ciudad. Décadas después, Kong se fijó en 104 pies en Isla Calavera (2017) para que con el tiempo pudiera enfrentarse a un Godzilla de más de 100 metros. Ninguna de las dos cifras es un error: cada una es la altura oficial de su propia versión, y por eso esta página siempre nombra la versión junto al número."
      },
      {
        "question": "¿Son las alturas de los manuales de juego de mesa mediciones exactas?",
        "answer": "No, son medias para un tipo de criatura, y los manuales lo dicen. La tradición del Monster Manual de Dungeons and Dragons describe a un gigante de las colinas con unos 16 pies y a un gigante de las tormentas con unos 26 pies, con gigantes individuales que varían por encima y por debajo de esas cifras. Eso es una característica, no un defecto: un director de juego necesita un gigante típico para un encuentro, no un censo de todos los gigantes del mundo. Cuando compares a un gigante de manual con un humano, lee el resultado como «un ejemplar típico de este tipo», no como un individuo concreto con nombre."
      },
      {
        "question": "¿Por qué las alturas de Star Wars son tan precisas?",
        "answer": "Porque el Banco de datos oficial de Lucasfilm publica cifras métricas únicas para sus personajes, como Yoda con 0.66 m, Darth Vader con 2.03 m con armadura y Chewbacca con 2.28 m. Esos números proceden de registros de producción y de continuidad y no de descripciones en prosa, de modo que se comportan más como mediciones del mundo real que como estimaciones literarias. La contrapartida es que la cifra describe al personaje tal como está catalogado oficialmente, lo que puede diferir de la altura del propio actor: el intérprete dentro del traje no siempre tiene la misma altura que el personaje sobre el papel."
      },
      {
        "question": "¿Puedo comparar a un kaiju con un humano en el mismo lienzo?",
        "answer": "Sí, y el resultado es precisamente el objetivo: Godzilla, con 108 metros, junto a un humano de 175 cm hace que la brecha de escala sea instantáneamente evidente de un modo que leer «108 metros» nunca logra. El lienzo ajusta todo a una línea base compartida, de modo que el humano se convierte en una fina línea en la parte inferior del marco y el kaiju se alza sobre él. En el caso de criaturas muy grandes, ayuda añadir un punto de referencia familiar como paso intermedio, como un edificio o un animal alto, para que la vista tenga algo por lo que ascender antes de llegar a la parte superior del monstruo."
      }
    ],
    "editorialSections": [
      {
        "heading": "Por qué las alturas ficticias nunca son un solo número",
        "paragraphs": [
          "Preguntar qué altura tiene King Kong no es una pregunta completa, porque no existe un único King Kong. El simio de 1933 se escaló a 18 pies mientras estaba en la Isla Calavera y a 24 pies una vez suelto en Nueva York, ya que los cineastas querían que pareciera más grande frente a los rascacielos que frente a los árboles de la jungla. El Kong de 2017 se fijó en 104 pies, en parte porque fue escrito como un adolescente que aún estaba creciendo y en parte porque el estudio ya sabía que un día tendría que luchar contra un Godzilla de más de 100 metros. El propio Godzilla ha crecido a lo largo de su historia, desde los 50 metros de la película original de 1954 hasta los 108 metros de la película de 2014 y aproximadamente 120 metros en entregas posteriores del MonsterVerse. Cada uno de estos números es oficial para su propia versión, y cada uno contradice a los demás, que es exactamente la razón por la que la altura ficticia es un problema de catalogación y no un problema de medición.",
          "La misma inestabilidad aparece en lugares más discretos. Un personaje descrito en prosa como «alto» puede ser dibujado bajo por un artista de cómics y gigantesco por el siguiente, y un juego de mesa puede revisar el tamaño de una criatura cuando una nueva edición reequilibra el juego. Los aficionados discuten sobre estas diferencias sin cesar, pero las discusiones suelen pasar por alto el punto real: la altura ficticia es una decisión de diseño, no un hecho físico. Un director hace a un monstruo más grande cuando la escena necesita más amenaza, un diseñador de juegos hace a un gigante más pequeño cuando una mazmorra necesita que quepa por una puerta, y un autor deja una altura vaga cuando el misterio importa más que la medición. Comprender eso es el primer paso para comparar personajes ficticios con sensatez."
        ]
      },
      {
        "heading": "Fuentes canónicas: quién decide qué altura tiene un personaje",
        "paragraphs": [
          "La respuesta depende de la franquicia, y las franquicias se dividen en tres grupos aproximados. El primer grupo publica cifras oficiales precisas: el Banco de datos de Star Wars enumera a Yoda con 0.66 m, a Darth Vader con 2.03 m con armadura y a Chewbacca con 2.28 m, y esos números se tratan como continuidad. Cuando existe una fuente así, hay poco margen para el debate, aunque todavía hay margen para la confusión, ya que la figura con armadura y el actor sin armadura son números diferentes y los aficionados a menudo los confunden. El segundo grupo da medias para un tipo en lugar de una cifra para un individuo: la tradición de Dungeons and Dragons describe a los gigantes de las colinas con unos 16 pies, a los gigantes de escarcha con 21, a los gigantes de las nubes con 24 y a los gigantes de las tormentas con 26, entendiendo que cualquier gigante concreto puede ser más alto o más bajo. El tercer grupo nunca indica un número, y la cifra que todo el mundo cita procede de una carta del autor, una nota tardía o un libro complementario publicado años después.",
          "La obra de Tolkien se sitúa en los tres grupos, lo que la convierte en un buen ejemplo del problema. El prólogo de El Señor de los Anillos indica directamente la altura media de los hobbits en 3 pies 6 pulgadas, de modo que esa cifra es sólida. Los 6 pies 6 pulgadas de Aragorn y los 5 pies 6 pulgadas de Gandalf proceden de las propias notas posteriores de Tolkien y del Reader's Companion, lo que es casi igual de sólido. Legolas, con aproximadamente 6 pies, es una cifra de guía ampliamente repetida y no una línea de los libros, de modo que conlleva un poco más de incertidumbre. Una página de comparación responsable debería mantener visibles esas distinciones en lugar de aplanar cada cifra al mismo nivel de confianza, porque un lector que sabe qué números son totalmente sólidos y cuáles son aproximados confiará más en la página, no menos."
        ]
      },
      {
        "heading": "Los extremos: de Yoda a Godzilla",
        "paragraphs": [
          "La categoría ficticia tiene el rango de alturas más amplio de cualquier categoría de este sitio, y ese rango es su principal atractivo. En el extremo pequeño, Yoda, con 66 cm, se sitúa apenas por encima de la altura de un niño pequeño, y sin embargo es una de las figuras más poderosas de su universo, que es precisamente la gracia y el sentido del personaje. Un hobbit, con 107 cm, no es mucho más alto, y el contraste entre la estatura de los hobbits y su valentía es uno de los motores de la historia de Tolkien. En el extremo humano de la escala, Aragorn, con 198 cm, y Chewbacca, con 228 cm, tienen ambos una forma reconociblemente de persona, lo que los convierte en buenos puentes: un lector puede imaginar a Aragorn, luego imaginar a Chewbacca a su lado, y a partir de ahí empezar a comprender lo que significa un gigante.",
          "Entonces la escala se abre de par en par. Un gigante de las colinas, con 488 cm, ya mide aproximadamente tres veces la altura de un humano, y la escalera de los gigantes asciende de forma constante a través de los gigantes de escarcha, de las nubes y de las tormentas hasta alcanzar los 792 cm, aproximadamente la altura de una casa de dos plantas. King Kong, con 104 pies en su versión de 2017, mide unas cuatro veces eso de nuevo, y Godzilla, con 108 metros, mide más de tres veces la altura de Kong además de eso. Lo interesante de esta escalera es que cada peldaño fue diseñado por alguien que pensaba en el peldaño anterior: el gigante de las tormentas es grande en comparación con un humano, Kong es grande en comparación con un gigante, y Godzilla es grande en comparación con Kong. Apilarlos en un solo lienzo muestra una cadena de deliberada superación mutua que ningún número por sí solo puede transmitir."
        ]
      },
      {
        "heading": "Cómo usar la herramienta de comparación para esta categoría",
        "paragraphs": [
          "La comparación ficticia más útil rara vez es ficticio contra ficticio. Coloca primero a un personaje ficticio junto a un humano, porque el humano es la unidad que tu vista ya comprende, y la diferencia entre ambos es el dato que estás tratando de aprender. Un gigante de las tormentas junto a un hombre medio te dice más que un gigante de las tormentas junto a un gigante de las nubes, porque el hombre es familiar y el gigante no. Una vez fijada esa referencia, añade una segunda figura ficticia para ver la relación entre las dos invenciones, y luego, para las criaturas muy grandes, añade un edificio o un vehículo como peldaño intermedio para que la vista tenga un camino por el que ascender.",
          "Dos hábitos hacen que las comparaciones ficticias sean mucho más fiables. Primero, comprueba siempre qué versión estás comparando, ya que solo Kong tiene al menos tres alturas oficiales y Godzilla tiene varias, y mezclar versiones en silencio produce sinsentidos. Segundo, recuerda que una cifra de manual es una media para un tipo: tu gigante de las colinas puede medir un pie más o un pie menos que la media de 16 pies, y eso no es un error de la herramienta, es como se escribió la fuente. Utilizado con esas dos salvedades, el lienzo se convierte en algo que ningún párrafo puede sustituir: una sola imagen de cómo los mundos inventados se comparan con el mundo real."
        ]
      }
    ]
  },
};

import type { HowToGuideData } from './types';

export const ptHowToGuide: HowToGuideData = {
  locale: 'pt',
  title: 'Como usar a ferramenta de comparação de altura',
  subtitle: 'Um guia completo passo a passo para comparar pessoas, celebridades, personagens de anime, animais e objetos com precisão matemática visual.',
  badge: 'Guia do Usuário',
  metaDescription: 'Aprenda a usar a ferramenta de comparação de altura do HowHeight para comparar pessoas, animais, objetos e personagens, entender diferenças e compartilhar resultados.',
  readTime: '8 min de leitura',
  tocTitle: 'Índice de Conteúdo',
  intro: {
    lead: 'O HowHeight é uma plataforma de medição visual interativa desenvolvida para ajudar as pessoas a compreender intuitivamente a escala física real de qualquer entidade.',
    paragraphs: [
      'Quer você tenha curiosidade em saber qual a sua altura ao lado do seu astro de cinema favorito, esteja montando fichas de escala para um projeto de animação, ensinando proporções biológicas em sala de aula ou escrevendo um livro, números isolados raramente transmitem a verdadeira presença física. Saber que alguém mede 188 cm (6 ft 2 in) é apenas uma medida abstrata; posicionar essa silhueta diretamente ao lado de um batente de porta padrão, de um colega ou de um animal doméstico dá vida instantânea à dimensão.',
      'Nossa ferramenta universal preenche a lacuna entre medições numéricas brutas e a percepção visual humana. Ao apoiar todas as silhuetas em uma linha de solo comum a 0 cm e dimensionar cada figura através de geometria matemática rigorosa, o HowHeight elimina distorções de perspectiva. Este guia detalha cada um dos recursos da plataforma, desde a busca e a organização por arrastar e soltar até ajustes métricos e exportação de gráficos em alta resolução.',
    ],
  },
  sections: [
    {
      id: 'what-is-howheight',
      heading: '1. O que é uma ferramenta de comparação de altura?',
      paragraphs: [
        'Um comparador de altura é um visualizador interativo projetado para exibir duas ou mais figuras lado a lado sob um fator de escala rigorosamente idêntico. Em vez de ficar imaginando como uma diferença de 15 centímetros ou 6 polegadas se parece na prática, a ferramenta cria silhuetas com proporções anatômicas exatas.',
        'No HowHeight, o motor aceita uma grande diversidade de categorias verificadas: homens e mulheres, celebridades globais, heróis de anime e mangá, ícones do cinema, animais domésticos e silvestres, itens arquitetônicos e domésticos, vegetais e criaturas lendárias.',
      ],
      callout: {
        type: 'info',
        text: 'A comparação visual não é adivinhação: trata-se de traduzir medições comprovadas em um formato visual livre de distorções ópticas.',
      },
    },
    {
      id: 'how-to-start',
      heading: '2. Como iniciar uma comparação em 7 passos simples',
      paragraphs: [
        'Começar a usar o HowHeight não requer cadastro, download de aplicativos nem configurações complexas.',
      ],
      steps: [
        {
          number: 1,
          title: 'Abra a plataforma',
          description: 'Acesse HowHeight.org ou entre diretamente na página /compare/ em seu navegador.',
        },
        {
          number: 2,
          title: 'Localize o palco de comparação',
          description: 'O seletor de figuras fica à esquerda e o palco amplo com a régua vertical de medição fica à direita.',
        },
        {
          number: 3,
          title: 'Busque ou escolha sua primeira figura',
          description: 'Utilize o campo de busca ou os botões de categoria para selecionar uma pessoa, celebridade ou animal.',
        },
        {
          number: 4,
          title: 'Adicione ao palco',
          description: 'Clique no card ou no botão "+ Add". A figura aparecerá imediatamente alinhada ao solo de 0 cm.',
        },
        {
          number: 5,
          title: 'Selecione uma segunda entidade',
          description: 'Pesquise outra figura para comparar ou um objeto de referência como um carro ou tabela de basquete.',
        },
        {
          number: 6,
          title: 'Observe o resultado proporcional',
          description: 'A régua ajusta automaticamente o teto da escala para que todas as figuras caibam com fidelidade métrica.',
        },
        {
          number: 7,
          title: 'Personalize ou compartilhe',
          description: 'Arraste as figuras, alterne entre cm e pés/polegadas, confira a diferença numérica ou copie o link direto.',
        },
      ],
    },
    {
      id: 'searching-entities',
      heading: '3. Pesquisando no catálogo universal de entidades',
      paragraphs: [
        'O HowHeight conta com uma biblioteca com milhares de perfis verificados. A busca instantânea permite encontrar qualquer figura rapidamente.',
        'Você pode filtrar pelas categorias disponíveis (Celebridades, Anime, Animais, Objetos, etc.) ou digitar diretamente o nome, a profissão ou apelidos conhecidos.',
        'Se a figura desejada ainda não constar no catálogo, utilize o formulário de personalização: insira o nome, a altura exata em cm ou ft/in, o gênero e a cor para exibi-la imediatamente na tela.',
      ],
      link: {
        text: 'Navegar pelo diretório de estatura de celebridades →',
        href: '/celebrity-height-comparison/',
      },
    },
    {
      id: 'adding-multiple-entities',
      heading: '4. Comparando várias figuras simultaneamente',
      paragraphs: [
        'Muitas vezes queremos comparar mais do que duas pessoas: ver uma família reunida, avaliar uma equipe de basquete ou comparar a escala entre humano, cão, cavalo e elefante.',
        'O HowHeight permite colocar de 2 até mais de 20 figuras no mesmo palco. Em telas amplas, os modelos são distribuídos com folga; em smartphones, uma rolagem lateral suave garante que nenhuma silhueta fique achatada.',
      ],
      callout: {
        type: 'tip',
        text: 'Ao comparar muitos modelos, mantenha uma figura padrão de referência (como o Homem Médio de 175 cm ou uma Porta de 210 cm) para ancorar a visão.',
      },
    },
    {
      id: 'dragging-arranging',
      heading: '5. Organizando figuras no palco: Arrastar e soltar',
      paragraphs: [
        'Por padrão, as figuras são enfileiradas na ordem em que foram adicionadas. Porém, um bom arranjo visual costuma exigir posições específicas.',
        'No HowHeight, você pode clicar e arrastar qualquer silhueta (ou movê-la com o dedo em telas sensíveis ao toque) ao longo do piso de 0 cm. Posicione dois rivais lado a lado ou coloque um bichinho de estimação perto de seu tutor.',
        'Use também a barra de ferramentas para ordenar a fila instantaneamente por ordem crescente ou decrescente de altura.',
      ],
    },
    {
      id: 'resizing-scale',
      heading: '6. Ajuste de altura real vs. fator de zoom do palco',
      paragraphs: [
        'É fundamental diferenciar a altura física real de uma figura da ampliação (zoom) visual da tela.',
        'Ao clicar em uma figura, o painel de inspeção se abre. Nele, você pode alterar a estatura real em centímetros ou pés/polegadas. Se alterar de 175 para 190 cm, a figura cresce verticalmente a partir do chão.',
        'Já os botões de Zoom (+ / -) aumentam ou diminuem toda a visualização uniformemente, sem mexer nas medidas numéricas reais nem distorcer as proporções entre os modelos.',
      ],
      callout: {
        type: 'note',
        text: 'As figuras sempre crescem de baixo para cima. Os pés permanecem travados na linha de base de 0 cm.',
      },
    },
    {
      id: 'height-units',
      heading: '7. Unidades de medida: Métrico (cm) e Imperial (pés e polegadas)',
      paragraphs: [
        'Mundialmente, as estaturas se dividem entre o sistema métrico (centímetros e metros) e o sistema imperial (pés e polegadas). O HowHeight oferece suporte bidirecional imediato.',
        'No topo da régua, você pode alternar entre "cm" e "ft". No modo imperial, a régua exibe marcações a cada 12 polegadas (1 pé) e a cada 6 polegadas. No modo métrico, as divisões ocorrem a cada 20 ou 50 cm.',
        'A conversão é exata segundo o padrão internacional: 1 polegada = 2,54 cm e 1 pé = 30,48 cm.',
      ],
      link: {
        text: 'Acessar a calculadora de diferença de altura →',
        href: '/height-difference-calculator/',
      },
    },
    {
      id: 'understanding-visual-result',
      heading: '8. Como interpretar o palco de comparação e a régua',
      paragraphs: [
        'O palco do HowHeight conta com elementos visuais claros para facilitar a leitura:',
        '1. Linha de solo (0 cm / 0 ft): Linha horizontal contínua na parte inferior que simula o chão real.',
        '2. A régua vertical: Posicionada à esquerda, calcula o teto de altura necessário para abranger o modelo mais alto com folga.',
        '3. Rótulos informativos: Cada figura apresenta nome, categoria e estatura exata na unidade selecionada.',
        '4. Silhuetas de alto contraste: Cores bem diferenciadas e transparências suaves para que contornos sobrepostos permaneçam legíveis.',
      ],
    },
    {
      id: 'height-difference',
      heading: '9. Compreendendo a diferença de estatura',
      paragraphs: [
        'Quando há exatamente duas figuras no palco, o HowHeight gera automaticamente um cartão com a análise da diferença.',
        'Por exemplo, ao confrontar um homem de 180 cm com uma mulher de 165 cm, o sistema aponta: "A Pessoa A é 15 cm (5,9 polegadas) mais alta que a Pessoa B". Os valores são arredondados para uma casa decimal.',
        'Com três ou mais figuras, abre-se uma tabela resumo indicando a maior altura, a menor e a média do grupo.',
      ],
    },
    {
      id: 'comparing-people',
      heading: '10. Comparando pessoas, casais e figuras públicas',
      paragraphs: [
        'Um dos usos mais populares é verificar a diferença de altura entre casais para fotos ou comparar a própria estatura com a de atletas de elite.',
        'Nossos modelos humanos possuem proporções anatômicas masculinas e femininas realistas (ombros, tronco e postura), mantendo a mesma escala métrica. Você também pode se comparar a celebridades e líderes históricos.',
      ],
      link: {
        text: 'Conferir percentis de altura humana →',
        href: '/people-height-comparison/',
      },
    },
    {
      id: 'comparing-animals',
      heading: '11. O reino animal em escala: De pets a gigantes da natureza',
      paragraphs: [
        'Fotos em enciclopédias quase nunca estão na mesma escala: uma raposa pode parecer do mesmo tamanho que um rinoceronte em uma página.',
        'O HowHeight coloca os animais no mesmo nível dos seres humanos. Compare um gato (25 cm) a um cão de porte médio (60 cm), ou meça-se diante de um cavalo (160 cm) e de um elefante africano (330 cm).',
      ],
      link: {
        text: 'Ver comparações de animais →',
        href: '/animal-height-comparison/',
      },
    },
    {
      id: 'comparing-objects',
      heading: '12. Objetos do cotidiano, veículos e arquitetura',
      paragraphs: [
        'Medidas ganham sentido quando postas ao lado de objetos que vemos todos os dias. Uma estátua de 2,4 metros se torna evidente quando colocada junto a uma porta comum (210 cm).',
        'Nossa categoria de objetos inclui móveis, carros, ônibus, bicicletas e tabelas de basquete (305 cm), ajudando arquitetos, designers e compradores.',
      ],
      link: {
        text: 'Comparar objetos do dia a dia →',
        href: '/object-height-comparison/',
      },
    },
    {
      id: 'anime-fictional-characters',
      heading: '13. Personagens de anime e heróis fictícios',
      paragraphs: [
        'As estaturas oficiais em guias de anime e quadrinhos geram debates frequentes. Nas páginas desenhadas, ângulos de câmera dificultam enxergar a diferença real.',
        'No HowHeight você pode enfileirar guerreiros como Goku, Naruto ou Levi Ackerman, ou comparar monstros gigantescos a cidadãos comuns.',
      ],
      link: {
        text: 'Ver estaturas de personagens de anime →',
        href: '/anime-height-comparison/',
      },
    },
    {
      id: 'using-the-result',
      heading: '14. O que fazer com o seu gráfico finalizado',
      paragraphs: [
        'Após organizar as figuras como desejar, você pode aproveitar várias ferramentas:',
        '• Baixar como imagem PNG: Clique em "Download Chart" para salvar um arquivo PNG nítido e em alta definição com fundo limpo.',
        '• Analisar estatísticas: Confira médias e porcentagens no painel inferior.',
        '• Ajustes de exibição: Ative o modo escuro para visualização noturna ou ative linhas de grade para um alinhamento milimétrico.',
      ],
    },
    {
      id: 'sharing-comparisons',
      heading: '15. Compartilhamento instantâneo por link sem contas',
      paragraphs: [
        'Compartilhar seus gráficos é simples e imediato, sem obrigar ninguém a criar login ou autorizar redes sociais.',
        'Ao clicar em "Share", o HowHeight codifica toda a configuração do seu palco (figuras, nomes, estaturas, cores e posições) em um link seguro e o copia para a área de transferência.',
        'Quem abrir o link verá exatamente o mesmo cenário em tempo real.',
      ],
      callout: {
        type: 'tip',
        text: 'Os links gerados são autônomos e não dependem de bancos de dados externos, continuando ativos permanentemente.',
      },
    },
    {
      id: 'mobile-experience',
      heading: '16. Experiência em celulares, tablets e computadores',
      paragraphs: [
        'O HowHeight foi construído com design responsivo pensado prioritariamente para o celular:',
        '• Comandos por toque: Arrastar figuras e ajustar o zoom com o dedo é fluido e ágil.',
        '• Painéis recolhíveis: As ferramentas de seleção e ajustes se recolhem para manter o palco sempre visível.',
        '• Rolagem lateral: Em smartphones, deslize horizontalmente com tranquilidade para visualizar grandes grupos de figuras.',
      ],
    },
    {
      id: 'why-visual-matters',
      heading: '17. Por que a comparação visual é tão poderosa',
      paragraphs: [
        'O cérebro humano processa melhor o raciocínio espacial e visual. Ler "160 cm" e "185 cm" informa quem é mais alto, mas não faz sentir o impacto de quase 25 cm (10 polegadas) de diferença física.',
        'A comparação visual ativa nossa percepção de profundidade, evidenciando de imediato que os ombros de alguém de 185 cm coincidem com o queixo de uma pessoa de 160 cm.',
      ],
    },
    {
      id: 'numbers-vs-visuals',
      heading: '18. Números e imagens: A união perfeita',
      paragraphs: [
        'Nem números isolados nem desenhos desprovidos de escala contam a história inteira. Tabelas numéricas carecem de apelo intuitivo; desenhos sem régua podem enganar.',
        'O HowHeight alia os dois mundos: valores matemáticos verificados combinados com silhuetas proporcionais sobre um solo comum.',
      ],
    },
    {
      id: 'data-accuracy',
      heading: '19. Integridade dos dados e transparência',
      paragraphs: [
        'Seguimos critérios rigorosos quanto à exatidão das medidas. A altura de celebridades é extraída de registros esportivos, exames médicos e entrevistas confirmadas.',
        'Dados da fauna e da flora representam médias de espécimes adultos catalogadas por autoridades biológicas. Itens do cotidiano seguem padrões industriais (normas ISO, basquete internacional, etc.).',
        'Estaturas canônicas de personagens fictícios são devidamente identificadas. Jamais inventamos medidas.',
      ],
      link: {
        text: 'Ler mais sobre nossos métodos e padrões de medição →',
        href: '/about/',
      },
    },
    {
      id: 'tips-for-better-comparisons',
      heading: '20. Dicas práticas para criar comparações nítidas',
      paragraphs: [
        'Para obter as imagens mais claras e elucidativas:',
        '1. Use cores contrastantes: Defina cores diferentes para silhuetas vizinhas a fim de destacar os contornos.',
        '2. Inclua uma figura de referência: Ao comparar criaturas fictícias, adicione um humano de 175 cm ou uma porta.',
        '3. Escolha a unidade adequada: Adote centímetros para o público geral ou pés/polegadas para o público norte-americano.',
        '4. Ordene por altura: Utilize a ordenação automática para ressaltar a progressão de estaturas do grupo.',
      ],
    },
    {
      id: 'example-workflow',
      heading: '21. Exemplo prático: Montando uma equipe de heróis',
      paragraphs: [
        'Imagine que você queira analisar a escala entre heróis e vilões:',
        'Primeiro, adicione uma pessoa comum de 175 cm. Depois, escolha um super-herói de 190 cm em vermelho e um gigante de 230 cm em cinza. Arraste a figura humana para o meio dos dois. Clique em "Download Chart" para baixar a imagem PNG ou em "Share" para enviar o link ao seu grupo de fãs em poucos segundos.',
      ],
    },
    {
      id: 'who-can-use',
      heading: '22. Quem pode aproveitar esta ferramenta?',
      paragraphs: [
        'O HowHeight atende a uma ampla comunidade global:',
        '• Estudantes e professores: Para enriquecer aulas de ciências, biologia e matemática.',
        '• Escritores e autores: Para assegurar a coerência no contato visual entre personagens em cenas.',
        '• Desenhistas e animadores: Como guia de proporção antes da criação das ilustrações.',
        '• Cosplayers: Para ajustar medidas de figurinos em relação aos personagens originais.',
        '• Criadores de conteúdo: Para produzir recursos visuais instigantes para vídeos e redes sociais.',
        '• Pessoas curiosas em geral: Para descobrir de vez: "Qual é o tamanho real daquilo?"',
      ],
    },
    {
      id: 'faq-reference',
      heading: '23. Perguntas frequentes e suporte técnico',
      paragraphs: [
        'Ficou com dúvidas sobre compatibilidade ou fórmulas de cálculo? Nossa seção de Perguntas Frecuentes cobre todos os detalhes técnicos.',
      ],
    },
    {
      id: 'final-cta',
      heading: '24. Comece sua primeira comparação hoje mesmo',
      paragraphs: [
        'Pronto para visualizar as dimensões reais? Nossa ferramenta é rápida, dinâmica e gratuita. Escolha suas figuras e descubra como o mundo se compara em tamanho.',
      ],
    },
  ],
  faqTransition: {
    badge: 'Ficou com dúvidas?',
    heading: 'Confira nossas Perguntas Frecuentes (FAQ)',
    text: 'Saiba mais sobre os algoritmos de escala, conversão métrica e o motor de renderização do HowHeight.',
    ctaText: 'Ver todas as perguntas frequentes',
    ctaHref: '/#faq',
  },
  finalCta: {
    heading: 'Pronto para ver a altura real?',
    description: 'Abra a ferramenta de comparação agora mesmo. Compare pessoas, famosos, personagens de anime, animais e objetos em tempo real.',
    buttonText: 'Abrir comparador de altura',
    buttonHref: '/compare/',
    secondaryText: 'Ver tabela de alturas padrão',
    secondaryHref: '/height-comparison-chart/',
  },
};

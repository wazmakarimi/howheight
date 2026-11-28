import type { CategoryLocaleContent } from './types';

export const CATEGORY_CONTENT_PT: Record<string, CategoryLocaleContent> = {
  people: {
    measurementAnchor: 'Do topo da cabeça às solas dos pés (estatura em pé, descalço)',
    measurementGuide: 'A estatura humana é medida como a altura em pé descalço: a pessoa fica ereta sobre uma superfície plana, com os calcanhares juntos, as costas encostadas em um estadiômetro, a cabeça posicionada de modo que a linha de visão fique horizontal, e a distância é lida do chão até o ponto mais alto do crânio (o vértice). As medições normalmente são feitas pela manhã, quando possível, porque a coluna se comprime levemente ao longo do dia e uma pessoa pode medir cerca de um ou dois centímetros a menos à noite do que ao acordar. Pesquisas nacionais, como o programa NHANES do CDC, usam examinadores treinados e estadiômetros calibrados em vez de autorrelatos, porque as pessoas tendem a exagerar um pouco a própria altura quando perguntadas.',
    measurementNote: 'As alturas humanas são medidas descalço, do topo da cabeça às solas dos pés, em pé e ereto.',
    commonHeights: [
      { label: 'Média Global Masculina', note: 'Mediana mundial da altura de homens adultos' },
      { label: 'Média Global Feminina', note: 'Mediana mundial da altura de mulheres adultas' },
      { label: 'Média Holandesa Masculina', note: 'Maior média nacional masculina, segundo dados do CBS holandês e do NCD-RisC' },
      { label: 'Média Holandesa Feminina', note: 'Maior média nacional feminina, segundo dados do CBS holandês e do NCD-RisC' },
      { label: 'Média Feminina dos EUA', note: 'Média medida pelo CDC no NHANES para mulheres adultas' },
      { label: 'Média Indiana Masculina', note: 'Rodadas da National Family Health Survey, homens adultos' },
      { label: 'Média Indiana Feminina', note: 'Rodadas da National Family Health Survey, mulheres adultas' },
      { label: 'Percentil 95 Masculino', note: 'Apenas cerca de 1 em cada 20 homens adultos atinge essa altura ou mais' },
      { label: 'Percentil 95 Feminino', note: 'Apenas cerca de 1 em cada 20 mulheres adultas atinge essa altura ou mais' },
      { label: 'Robert Wadlow', note: 'Pessoa mais alta já verificada, medido em 27 de junho de 1940' },
      { label: 'Sultan Kosen', note: 'Homem vivo mais alto, verificado pelo Guinness World Records' },
      { label: 'Chandra Bahadur Dangi', note: 'Adulto mais baixo já verificado, medido em Katmandu em 2012' },
      { label: 'Jyoti Amge', note: 'Mulher viva mais baixa, verificada pelo Guinness World Records' },
    ],
    faqs: [
      {
        question: 'Por que minha altura é levemente diferente de manhã e à noite?',
        answer: 'Sua coluna se comprime durante o dia. Os discos entre as vértebras perdem um pouco de fluido sob a gravidade e a carga, então a maioria dos adultos mede cerca de um ou dois centímetros a menos à noite do que ao acordar. Isso é normal e temporário; os discos se reidratam durante a noite, enquanto você está deitado. É por isso que clínicas e pesquisas nacionais preferem medições matinais quando querem um valor consistente e comparável.',
      },
      {
        question: 'O que é um percentil e por que ele importa mais do que a média?',
        answer: 'Um percentil indica onde você se posiciona dentro de uma população. Se você está no percentil 75 para o seu sexo, você é mais alto do que cerca de 75% das pessoas como você e mais baixo do que cerca de 25%. As médias, sozinhas, escondem essa dispersão: dois países podem ter médias parecidas e, ainda assim, faixas muito diferentes. Os percentis são a ferramenta que médicos e pesquisadores usam para avaliar se o crescimento de uma criança está no caminho certo, porque comparam igual com igual em vez de comparar com um único número.',
      },
      {
        question: 'Por que os holandeses são as pessoas mais altas do mundo?',
        answer: 'Os homens holandeses têm em média cerca de 183 cm e as mulheres holandesas cerca de 170 cm, as maiores médias nacionais já registradas. Registros militares mostram que os homens holandeses ganharam aproximadamente 20 cm nos últimos 200 anos, um aumento que os pesquisadores relacionam à melhora da nutrição na infância, à saúde pública universal e à elevação do padrão de vida, e não a uma única mudança genética. O aumento se estabilizou desde os anos 1980, o que sugere que a população pode estar perto do seu teto prático nas condições atuais.',
      },
      {
        question: 'Homens e mulheres realmente diferem em altura por uma quantidade fixa?',
        answer: 'Em média, homens adultos são cerca de 13 a 14 cm mais altos do que mulheres adultas no mundo todo, uma diferença impulsionada por períodos de crescimento masculino mais longos: os meninos normalmente continuam crescendo por cerca de dois anos a mais do que as meninas antes que suas placas de crescimento se fechem. Mas as distribuições se sobrepõem bastante. Uma mulher no percentil 95 (cerca de 173 cm) é mais alta do que aproximadamente metade de todos os homens, então as médias descrevem populações, não indivíduos, e não dizem nada confiável sobre qualquer pessoa específica que você encontre.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que a altura humana comum vale a pena ser comparada',
        paragraphs: [
          'A altura humana parece pessoal de um jeito que quase nenhuma outra medida parece. As pessoas lembram a própria altura no centímetro, discutem sobre ela, arredondam para cima em formulários e a percebem no instante em que entram em um ambiente. Isso acontece porque a altura é um dos poucos traços físicos visíveis de relance, comparáveis à distância e carregados de significado social ao mesmo tempo. Uma ferramenta de comparação cumpre seu papel aqui não ao mostrar um número, mas ao mostrar a diferença: a distância entre 175 cm e 183 cm é difícil de sentir só pelos dígitos, mas, no momento em que duas figuras ficam sobre a mesma linha de base, oito centímetros se tornam um degrau visível que qualquer um consegue ler sem fazer conta alguma.',
          'O outro motivo pelo qual esta categoria importa é que a "média" é um alvo móvel. A mediana global masculina de cerca de 175 cm e a mediana global feminina de cerca de 162 cm escondem uma variação enorme entre populações. Um holandês de 183 cm não chama atenção em casa, mas se destacaria em uma multidão na Índia, onde a média masculina fica em torno de 165 cm. Comparar-se a uma única média mundial, portanto, diz muito pouco; comparar-se à população certa, ao percentil certo e ao sexo certo diz muita coisa. É essa comparação que esta página foi feita para sustentar.',
        ],
      },
      {
        heading: 'Como a altura é realmente medida, e por que pequenos erros se infiltram',
        paragraphs: [
          'A medição correta da estatura é um pequeno ritual com um protocolo rigoroso. A pessoa tira os sapatos, fica com os calcanhares juntos e as costas retas contra um estadiômetro vertical e olha para a frente, de modo que a cabeça fique no que os antropometristas chamam de plano de Frankfurt. O examinador desce uma peça horizontal até ela tocar de leve o topo do crânio e lê o valor. Cada parte desse ritual existe para eliminar um erro específico: sapatos adicionam dois a três centímetros, uma postura curvada remove vários outros, e uma cabeça inclinada pode deslocar a leitura em um centímetro para qualquer lado.',
          'Mesmo com técnica perfeita, o número se move ao longo do dia. Os discos da coluna se comprimem sob a gravidade, então as leituras da noite ficam cerca de um ou dois centímetros abaixo das da manhã. As alturas autorrelatadas vão na direção oposta: as pessoas arredondam para cima, lembram da altura da manhã ou citam o número da carteira de motorista, que pode ter anos. Pesquisas nacionais resolvem isso medindo em vez de perguntar, com examinadores treinados e equipamentos calibrados. Quando você compara figuras nesta página, está comparando números medidos ou de padrão de pesquisa, não palpites, e é por isso que uma diferença de dois ou três centímetros entre duas entradas é real e merece atenção, em vez de ser ruído.',
        ],
      },
      {
        heading: 'Extremos que colocam a faixa comum em perspectiva',
        paragraphs: [
          'A maioria dos adultos na Terra se enquadra em uma faixa surpreendentemente estreita. De modo geral, os homens adultos se agrupam entre cerca de 165 cm no percentil 5 e 188 cm no percentil 95, e as mulheres adultas entre cerca de 152 cm e 173 cm. Essa faixa é o mundo em que a maioria de nós vive, e é por isso que uma diferença de dez centímetros entre dois amigos parece grande: ela atravessa um pedaço enorme de toda a distribuição.',
          'Os recordistas ficam muito fora dessa faixa, e são úteis justamente porque quebram a escala. Robert Wadlow, medido com 272 cm pouco antes de sua morte em 1940, era quase um metro mais alto do que o homem médio de sua época, resultado de uma glândula pituitária hiperativa que nunca parou de impulsionar seu crescimento. Na outra ponta, Chandra Bahadur Dangi mediu 54,6 cm em Katmandu em 2012, mais baixo do que uma criança média de dois anos, como resultado de nanismo primordial. Coloque qualquer uma dessas figuras ao lado de um adulto médio na tela de comparação e a faixa comum de repente parece compacta: toda a amplitude da altura humana típica cabe dentro do espaço entre a cintura de Wadlow e o topo da sua cabeça.',
        ],
      },
      {
        heading: 'Usando a ferramenta nesta categoria',
        paragraphs: [
          'A comparação mais útil aqui não é celebridade contra celebridade, mas você contra uma população. Comece adicionando uma figura com a sua própria altura, depois adicione a média do seu sexo e do seu país e veja onde você cai. Se você tem 178 cm e é homem, está acima da mediana global, mas abaixo da média holandesa; se você tem 170 cm e é mulher, está acima da mediana global feminina e exatamente na média feminina holandesa. Essas posições são mais informativas do que qualquer número isolado, porque dizem se você é típico, alto ou baixo em relação às pessoas entre as quais você realmente vive.',
          'Os percentis fazem o mesmo ponto com mais precisão. Adicionar as figuras dos percentis 5, 50 e 95 do seu sexo desenha a forma completa da distribuição em uma única tela, e a sua própria figura cai dentro dela como um marcador. Experimente também contra os recordistas: colocar Wadlow ao lado de um adulto médio é a maneira mais rápida de entender o que "o mais alto de todos os tempos" realmente significa, porque nenhuma descrição em palavras tem o mesmo peso de ver uma figura com quase o dobro da sua altura em pé sobre o mesmo chão.',
        ],
      },
    ],
  },
  celebrities: {
    measurementAnchor: 'Documentação oficial da estatura em pé',
    measurementGuide: 'As alturas de celebridades vêm de uma mistura de fontes de confiabilidade muito diferente, e esta página as classifica de acordo. Os valores mais fortes são os medidos: combines e acampamentos de draft de esportes profissionais, onde os atletas são medidos descalços por oficiais, e registros de federações, como os perfis das federações de críquete. Em seguida vêm referências biográficas respeitáveis, que cruzam material de agências com entrevistas e fotografias. Os valores mais fracos são listagens de agências e biografias de divulgação, que são rotineiramente arredondadas para cima, citadas com sapatos ou simplesmente herdadas de um release inicial e nunca corrigidas. Quando as fontes divergem, esta página prefere o valor medido ou amplamente corroborado e trata uma listagem isolada de agência com desconfiança.',
    measurementNote: 'As alturas de celebridades são valores listados; combines e federações medem descalço.',
    commonHeights: [
      { label: 'Dwayne Johnson', note: 'Ator e ex-campeão da WWE, a figura mais alta do diretório' },
      { label: 'Chris Hemsworth', note: 'Ator australiano, conhecido como Thor' },
      { label: 'Amitabh Bachchan', note: 'Lenda do cinema indiano, notavelmente alto para sua geração de atores' },
      { label: 'Cristiano Ronaldo', note: 'Futebolista português, medido nos registros do seu clube profissional' },
      { label: 'Leonardo DiCaprio', note: 'Ator americano' },
      { label: 'Ranbir Kapoor', note: 'Ator indiano' },
      { label: 'Neeraj Chopra', note: 'Campeão olímpico indiano de lançamento de dardo, perfil da World Athletics' },
      { label: 'Brad Pitt', note: 'Ator e produtor americano' },
      { label: 'Zendaya', note: 'Atriz e cantora americana, alta para uma atriz principal' },
      { label: 'Virat Kohli', note: 'Jogador de críquete indiano, perfil de jogador da BCCI' },
      { label: 'Shah Rukh Khan', note: 'Ator indiano, o "Rei de Bollywood"' },
      { label: 'Tom Cruise', note: 'Ator americano, o galã mais baixo mais buscado do diretório' },
      { label: 'Sachin Tendulkar', note: 'Jogador de críquete indiano, recordista de corridas' },
      { label: 'Alia Bhatt', note: 'Atriz indiana' },
    ],
    faqs: [
      {
        question: 'Por que sites diferentes listam alturas diferentes para a mesma celebridade?',
        answer: 'Porque eles copiam tipos diferentes de fontes. Um perfil de federação esportiva, uma ficha de contratação de agência de cinema e um wiki de fãs raramente concordam no centímetro, e cada site escolhe um e o apresenta como fato. As fichas de agência são a culpada habitual pelo exagero: são documentos de marketing, e um ou dois centímetros são rotineiramente adicionados, especialmente para galãs. Registros medidos de combines e federações são muito mais consistentes, e é por isso que as alturas de atletas são geralmente mais confiáveis do que as de atores. Quando você vê a altura de uma celebridade variar de 3 a 5 cm entre sites, normalmente está vendo a diferença entre um valor medido e um valor divulgado.',
      },
      {
        question: 'Os atores são realmente tão altos quanto suas alturas listadas afirmam?',
        answer: 'Muitas vezes, não exatamente. Os atores são fotografados e filmados de maneiras que favorecem sua estatura: botas com salto, palmilhas elevadas, ângulos de câmera de baixo para cima e colegas de cena escolhidos ou posicionados para preservar a vantagem aparente de altura do galã. Algumas produções até colocam atores mais baixos sobre caixas de maçã em cenas a dois. Nada disso significa que o valor listado seja inventado, mas significa que a altura que você percebe na tela pode ficar alguns centímetros acima do valor descalço. Comparar o número listado com um colega de cena cuja altura foi medida de forma independente costuma ser a maneira mais rápida de detectar o exagero.',
      },
      {
        question: 'Quem é a celebridade mais alta e a mais baixa deste diretório?',
        answer: 'Dwayne Johnson, com 196 cm, é a figura mais alta do diretório verificado, um legado de sua carreira no wrestling profissional, em que seu tamanho anunciado fazia parte do espetáculo, mas sua estatura real é genuinamente excepcional. Na outra ponta, Alia Bhatt, com 160 cm, e Scarlett Johansson, com 160 cm, são as atrizes principais mais baixas listadas. A diferença entre Johnson e qualquer uma das duas é de 36 cm, mais de um pé, e é por isso que colocar essas duas figuras lado a lado na tela é uma das comparações mais impressionantes que a ferramenta pode desenhar.',
      },
      {
        question: 'Por que as alturas dos atletas são mais confiáveis do que as dos atores?',
        answer: 'Os atletas são medidos por pessoas sem interesse em favorecê-los. Um clube de futebol, uma federação de críquete ou uma federação olímpica registra a altura porque ela importa para seleção, uniforme e referências médicas, e a medição é feita descalço, por funcionários seguindo um protocolo. Os atores, em contraste, são medidos por sua própria representação, em que a altura faz parte de uma imagem vendável e ninguém audita o número. Essa diferença estrutural explica por que a altura listada de um jogador de críquete raramente muda ao longo da carreira, enquanto a de um ator pode subir silenciosamente entre uma biografia inicial e uma posterior.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que as alturas de famosos fascinam as pessoas',
        paragraphs: [
          'Ninguém discute sobre a altura de um estranho, mas todo mundo tem uma opinião sobre a altura de uma pessoa famosa. Parte disso é simples curiosidade: o cinema e a televisão achatam o mundo em um retângulo, e o retângulo mente sobre a escala. Dois atores podem parecer idênticos em altura na tela e diferir em quinze centímetros na vida real, porque a câmera, o enquadramento e o calçado conspiram para esconder a diferença. Descobrir o número real parece resolver um pequeno mistério, e ressignifica cada cena que você assistiu: de repente, o domínio do herói em uma cena de confronto parece menos físico e mais cinematografia.',
          'A outra parte é identificação. Os fãs se comparam a pessoas famosas como uma forma de se situar no mundo. Uma pessoa de 170 cm descobre que Tom Cruise e Lionel Messi têm essa altura, e o número para de parecer baixo. Uma pessoa de 188 cm encontra companhia em Amitabh Bachchan. A ferramenta de comparação funciona para celebridades justamente porque transforma uma listagem abstrata em um fato visual: a sua figura sobre a mesma linha de base que a de uma estrela, em escala real, sem truques de câmera no caminho.',
        ],
      },
      {
        heading: 'Alturas listadas, alturas medidas e a diferença entre elas',
        paragraphs: [
          'Toda altura de celebridade nesta página pertence a uma de duas famílias, e saber qual delas importa mais do que o número em si. As alturas medidas vêm de instituições que registram a estatura por motivos práticos: combines esportivos, acampamentos de draft, federações de críquete e federações olímpicas. São tomadas descalço, por oficiais, sob um protocolo, e raramente mudam ao longo de uma carreira. As alturas listadas vêm de agências, biografias de divulgação e entrevistas, em que o número serve a uma imagem, e não a um registro. São esses os valores que sobem um ou dois centímetros, são citados com sapatos ou sobrevivem inalterados de um release escrito quando o ator tinha vinte e um anos.',
          'A diferença costuma ser pequena, mas é sistemática e vai em uma única direção: para cima. Os galãs são os mais afetados, porque o elenco historicamente favoreceu heróis mais altos e galãs mais baixos têm incentivo para fechar a diferença no papel. As atrizes enfrentam a pressão oposta em alguns contextos, em que ser notavelmente alta pode custar papéis ao lado de protagonistas masculinos mais baixos. Nada disso torna os valores inúteis, mas significa que uma comparação de celebridades deve ser lida como aproximada dentro de alguns centímetros, e uma diferença de dois centímetros entre dois atores não deve ser tratada como decisiva. Uma diferença de quinze centímetros, por outro lado, é real não importa em qual fonte você confie.',
        ],
      },
      {
        heading: 'Os extremos da fama e o que eles revelam',
        paragraphs: [
          'A faixa do diretório vai de 160 cm a 196 cm, um intervalo de 36 cm entre Alia Bhatt e Scarlett Johansson na ponta inferior e Dwayne Johnson na superior. Vale a pena pausar nesse intervalo, porque ele cobre quase toda a faixa adulta normal: as pessoas famosas mais baixas e mais altas não são aberrações, mas pessoas cuja altura fica perto das bordas da variação comum. Os 196 cm de Johnson são excepcionais, mas não quebram recordes; é a altura de um homem muito alto que por acaso virou lutador e depois ator. Os 160 cm de Johansson e Bhatt são simplesmente a altura de uma mulher mais baixa do que a média, sem nada de notável fora da tela.',
          'O que é notável é o quanto essas diferenças reais aparecem pouco no trabalho deles. Johnson é filmado para parecer poderoso, mas não absurdo, e Johansson é enquadrada para parecer imponente em vez de pequena, porque os diretores ajustam ângulos, marcações e o posicionamento dos colegas de cena para servir à história, e não à fita métrica. A ferramenta tira tudo isso. Coloque Johnson ao lado de Bhatt sobre uma linha de base e a diferença de 36 cm de repente se torna inegável, e é exatamente por isso que a comparação é satisfatória: ela substitui anos de ilusão de tela cuidadosamente gerenciada por uma imagem honesta.',
        ],
      },
      {
        heading: 'Usando a ferramenta nesta categoria',
        paragraphs: [
          'A melhor comparação de celebridades começa com você. Adicione uma figura com a sua própria altura, depois adicione a estrela que desperta sua curiosidade, e a diferença se torna pessoal em vez de trivia. Um usuário de 175 cm ao lado de Virat Kohli, com a mesma altura, vê um igual; ao lado de Cristiano Ronaldo, com 187 cm, o mesmo usuário vê um degrau de doze centímetros para cima; ao lado de Tom Cruise, com 170 cm, um degrau de cinco centímetros para baixo. Essas três imagens juntas ensinam mais sobre escala do que qualquer lista de números, porque cada uma ancora a altura da estrela a um corpo que você já conhece.',
          'A ferramenta também recompensa misturar categorias, e é aí que a comparação de celebridades fica genuinamente interessante. Coloque um jogador de críquete ao lado de um batente de porta, um ator ao lado de um cavalo ou um futebolista ao lado de um adulto médio de outro país, e a fama desaparece, restando apenas a medição. Esse é o objetivo do exercício: a altura de uma celebridade não é um fato sobre celebridade. É uma altura humana, medida do mesmo jeito que a sua, e a tela é o único lugar em que ela é mostrada sem favorecimento, calçado ou ângulos de câmera no caminho.',
        ],
      },
    ],
  },
  anime: {
    measurementAnchor: 'Estatura oficial em pé dos databooks',
    measurementGuide: 'As alturas dos personagens de anime vêm de databooks oficiais das franquias, notas dos autores dos mangás e fichas de design de personagens publicadas pelos detentores dos direitos, e não de capturas de tela ou estimativas de fãs. Como séries longas acompanham seu elenco por anos, um único personagem costuma ter mais de uma altura oficial: valores do início da série, pós-timeskip e adulto podem estar todos corretos para pontos diferentes da história. Os wikis de fãs divergem entre si principalmente porque misturam essas eras, arredondam conversões de forma diferente ou repetem edições desatualizadas de guias, então cada valor nesta página está vinculado a uma versão específica do personagem.',
    measurementNote: 'As alturas de anime são valores oficiais de databook para uma era específica da história, não estimativas a partir de quadros da animação.',
    commonHeights: [
      { label: 'Edward Elric', note: 'Fullmetal Alchemist, início da série; cresce para cerca de 165 cm até o fim da série' },
      { label: 'Levi Ackerman', note: 'Attack on Titan, guias oficiais supervisionados por Hajime Isayama' },
      { label: 'Tanjiro Kamado', note: 'Demon Slayer, aos 15 anos após entrar para o Esquadrão; 156 cm aos 13 anos' },
      { label: 'Yuji Itadori', note: 'Jujutsu Kaisen, fanbook oficial' },
      { label: 'Monkey D. Luffy', note: 'One Piece, pós-timeskip; 172 cm antes do timeskip' },
      { label: 'Ichigo Kurosaki', note: 'Bleach, anos de adolescência; 181 cm como adulto' },
      { label: 'Son Goku', note: 'Dragon Ball Z / Super, adulto' },
      { label: 'Naruto Uzumaki', note: 'Naruto, adulto como 7º Hokage; 166 cm como adolescente em Shippuden' },
      { label: 'Roronoa Zoro', note: 'One Piece, pós-timeskip; 178 cm antes do timeskip' },
      { label: 'Eren Yeager', note: 'Attack on Titan, pós-timeskip; 170 cm nas primeiras temporadas' },
      { label: 'Satoru Gojo', note: 'Jujutsu Kaisen, o fanbook o lista com mais de 190 cm' },
      { label: 'All Might (Forma de Herói)', note: 'My Hero Academia, forma de herói potencializada; muito mais baixo em sua forma enfraquecida' },
    ],
    faqs: [
      {
        question: 'As alturas dos personagens de anime são oficiais ou os fãs chutam?',
        answer: 'São oficiais. As editoras japonesas imprimem perfis de personagens com altura, peso e aniversário em databooks e fanbooks que acompanham uma série de mangá, e os estúdios de animação constroem suas fichas de modelo a partir desses mesmos números. Quando você vê duas alturas diferentes para um personagem, é quase sempre porque o personagem envelheceu entre arcos da história, e não porque o número foi inventado.',
      },
      {
        question: 'Por que um personagem tem duas alturas diferentes em sites diferentes?',
        answer: 'Animes longos fazem seu elenco envelhecer. Luffy tem 172 cm antes do timeskip de One Piece e 174 cm depois dele, Eren Yeager cresce de 170 cm para 183 cm, e Tanjiro cresce de 156 cm para 165 cm durante seu treinamento. Um site que não diz qual era está citando vai parecer errado mesmo quando seu número vem de uma fonte real, e é por isso que esta página indica a era em cada entrada.',
      },
      {
        question: 'Por que alguns personagens de anime são tão baixos em comparação com pessoas reais?',
        answer: 'Muitos protagonistas são adolescentes, e o design de personagens japonês costuma manter os heróis compactos para que eles sejam lidos com clareza na tela ao lado de vilões e criaturas muito maiores. Edward Elric, com 149 cm, e Levi Ackerman, com 160 cm, foram ambos escritos como baixos, e suas histórias fazem questão disso: o tamanho deles faz parte de sua identidade, não é um erro de desenho. Compará-los com um adulto médio na tela mostra exatamente o quanto essa escolha é deliberada.',
      },
      {
        question: 'As alturas de anime mudam entre o mangá e o anime?',
        answer: 'O valor publicado no databook é o mesmo para os dois, porque o anime adapta as fichas de design do mangá. O que muda é a altura que um personagem parece ter na tela: ângulos de câmera, perspectiva dramática e a altura de quem está ao lado dele podem fazer um personagem parecer mais alto ou mais baixo em uma cena específica. O número do databook permanece fixo, e é por isso que ele é o valor certo para comparar.',
      },
      {
        question: 'Como devo usar a ferramenta de comparação com personagens de anime?',
        answer: 'Comece com um personagem e um humano médio de 175 cm, depois adicione um segundo personagem da mesma série para ver a diferença dentro do universo, e por fim adicione um objeto do mundo real, como um batente de porta, para dar base ao resultado. Como os elencos de anime misturam adolescentes, adultos e gigantes, a ferramenta é mais reveladora quando você compara personagens da mesma era da mesma série, em vez de misturar versões do início da série com versões adultas.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que as alturas de anime valem a pena ser comparadas',
        paragraphs: [
          'O anime é um dos poucos meios em que a altura é uma ferramenta deliberada de narrativa, e não um acidente de elenco. Um diretor não pode simplesmente contratar um ator mais alto, então, quando um personagem é desenhado baixo ou alto, essa escolha foi feita em uma ficha de design e aprovada pelo criador. Levi Ackerman tem 160 cm em um elenco de soldados que se erguem acima dele, e a história nunca deixa o público esquecer isso: sua letalidade surpreende justamente porque seu corpo é pequeno. All Might, com 220 cm em sua forma de herói, é o truque oposto, um corpo desenhado para preencher um batente de porta, de modo que sua presença parece um monumento público antes mesmo de ele falar. Colocar essas figuras lado a lado sobre uma única linha de base transforma uma impressão que você percebeu pela metade enquanto assistia em uma medida que você realmente consegue ver.',
          'A amplitude dentro de uma única série costuma ser maior do que a amplitude entre populações humanas reais. One Piece vai do alívio cômico do tamanho do Chopper a gigantes de vários metros de altura, e Attack on Titan coloca um capitão de 160 cm no mesmo exército que soldados de 183 cm e Titãs de quinze metros. Uma tela de comparação lida com essa amplitude melhor do que qualquer parágrafo, porque força cada figura sobre a mesma linha de chão e a mesma escala. No momento em que você vê os 183 cm de Eren Yeager pós-timeskip ao lado dos 160 cm inalterados de Levi, o intervalo de quatro anos entre eles deixa de ser trivia e se torna algo que você consegue sentir.',
        ],
      },
      {
        heading: 'De onde vêm os números, e por que as fontes divergem',
        paragraphs: [
          'As fontes confiáveis são impressas, não colaborativas. Shueisha, Kodansha e outras editoras japonesas lançam databooks e fanbooks em que cada personagem importante recebe um bloco de perfil com altura, peso, aniversário e tipo sanguíneo. Os guias INSIDE e OUTSIDE de Attack on Titan, supervisionados por Hajime Isayama, fixam Levi em 160 cm e a altura final de Eren em 183 cm. O fanbook oficial de Jujutsu Kaisen lista Gojo com mais de 190 cm, e é por isso que tabelas cuidadosas citam 190 cm como piso, e não como uma medição exata. Os registros do Esquadrão de Demon Slayer dão Tanjiro com 165 cm aos quinze anos, com seu valor de 156 cm aos treze preservado no mesmo registro, então os dois números são oficiais e pertencem a aniversários diferentes.',
          'A divergência entre sites costuma ter uma de três causas, e nenhuma delas é um mistério quando você sabe o que procurar. A primeira é a mistura de eras: um site que cita o Ichigo adolescente com 174 cm ao lado do Naruto adulto com 180 cm está comparando duas fases de vida diferentes sem dizer isso. A segunda é o arredondamento de conversão: as fontes japonesas publicam centímetros, e converter para pés e polegadas perde uma fração de polegada que sites diferentes arredondam em direções diferentes, e é por isso que 174 cm aparece tanto como 5\'8" quanto como 5\'8.5". A terceira são dados desatualizados: traduções iniciais de fãs de guias circularam antes das edições oficiais em inglês, e alguns desses números iniciais estavam simplesmente errados e nunca foram corrigidos. A solução é exigir um rótulo de era e uma fonte nomeada para cada valor, que é o padrão que esta página segue.',
        ],
      },
      {
        heading: 'Extremos, crescimento e os equívocos que eles criam',
        paragraphs: [
          'O equívoco mais comum sobre alturas de anime é que a altura de um personagem é um fato fixo, como uma data de nascimento. Na prática, ela é um retrato instantâneo, e a data desse retrato importa mais do que a maioria dos fãs percebe. Edward Elric começa Fullmetal Alchemist com 149 cm e termina com cerca de 165 cm, e sua fúria por ser chamado de baixo é uma piada recorrente justamente porque ele ainda está crescendo. O salto de Naruto de 166 cm como adolescente em Shippuden para 180 cm como Hokage são 14 cm inteiros de crescimento adulto que uma tabela de número único esconde completamente. Até a modesta mudança de Luffy de 172 cm para 174 cm ao longo do timeskip diz algo sobre como Oda trata seu elenco: piratas envelhecem, e seus perfis oficiais envelhecem com eles.',
          'O outro equívoco é que personagens baixos são desenhados baixos por acidente ou pelos limites da animação. O oposto é verdade. A baixa estatura no anime costuma ser uma decisão de design pensada, que sinaliza juventude, status de azarão ou ameaça em um pacote pequeno. Tanjiro, com 165 cm, não chama atenção entre os Hashira de Demon Slayer, vários dos quais passam de 175 cm, e essa normalidade é exatamente o ponto: ele é um garoto comum se segurando contra demônios. Gojo, com mais de 190 cm, é o inverso, um mentor desenhado para se erguer sobre seus alunos, de modo que sua autoridade seja lida antes de ele agir. Quando você alinha um elenco inteiro, o padrão fica visível: altura no anime é elenco, feito com uma caneta em vez de um diretor de elenco.',
        ],
      },
      {
        heading: 'Como aproveitar ao máximo a ferramenta de comparação',
        paragraphs: [
          'A ferramenta é mais útil quando você a trata como uma bancada de experimentos, e não como um pôster. Comece com um único personagem ao lado da figura masculina média de 175 cm, que fica perto dos 175 cm de Goku e faz de Goku uma âncora útil: quase todos os outros personagens de anime podem ser descritos como mais altos ou mais baixos que Goku. Depois adicione um segundo personagem da mesma série e da mesma era, por exemplo Luffy pós-timeskip com 174 cm ao lado de Zoro pós-timeskip com 181 cm, e a diferença de sete centímetros entre capitão e espadachim se torna concreta. Por fim, adicione um objeto cotidiano, como um batente de porta de 245 cm ou um carro, e a escala fictícia colide com o mundo real de um jeito que nenhuma captura de tela de episódio consegue entregar.',
          'Dois hábitos tornam os resultados confiáveis. Primeiro, mantenha as eras consistentes: não coloque o Eren adolescente, com 170 cm, ao lado do Naruto adulto, com 180 cm, e conclua qualquer coisa sobre as séries deles, porque você está comparando um garoto de quinze anos com um homem adulto. Segundo, lembre-se de que formas de herói e transformações são entradas separadas: os 220 cm de All Might pertencem à sua forma potencializada, e sua forma enfraquecida ficaria muito mais abaixo na mesma tela. Usada dessa forma, a ferramenta deixa de ser uma novidade e se torna a maneira mais rápida de resolver as discussões que os fãs de anime realmente têm, que raramente são sobre quem é mais forte e muito frequentemente sobre quem está mais alto no quadro.',
        ],
      },
    ],
  },
  films: {
    measurementAnchor: 'Estatura do roteiro canônico e das plantas de adereços',
    measurementGuide: 'As alturas dos personagens de cinema vêm de bíblias de produção dos estúdios, plantas de design de adereços e tabelas de escala oficiais preparadas durante a produção, e não da medição de atores em um tapete vermelho. Três números diferentes podem ser todos verdadeiros para um personagem: a altura do próprio ator, a altura da figura fantasiada no set e a altura do personagem finalizado em CGI na tela. Armaduras, capacetes, botas de plataforma e escalonamento digital adicionam centímetros, então cada entrada nesta página declara qual desses valores está citando.',
    measurementNote: 'As alturas de cinema citam a figura finalizada na tela, com a altura de armadura e traje sinalizada separadamente do ator.',
    commonHeights: [
      { label: 'Yoda', note: 'Star Wars, Mestre Jedi; valor do Databank do StarWars.com' },
      { label: 'R2-D2', note: 'Star Wars, droide astromecânico da série R2; 1,09 m nas referências canônicas' },
      { label: 'Capitão América (Steve Rogers, MCU)', note: 'Altura pós-soro exibida na exposição do Smithsonian; o ator Chris Evans tem 6\'0"' },
      { label: 'T-800 (Exterminador)', note: 'Interpretado por Arnold Schwarzenegger, divulgação oficial de 6\'2"' },
      { label: 'Wolverine (interpretação no cinema)', note: 'Hugh Jackman na tela; o cânone dos quadrinhos é 160 cm, um valor diferente' },
      { label: 'Homem de Ferro (armadura Mark 85)', note: 'Altura da armadura em Vingadores: Ultimato; Tony Stark em si tem 185 cm' },
      { label: 'Darth Vader (armadura)', note: 'Armadura completa de suporte de vida segundo o Databank do StarWars.com; Anakin sem armadura é mais baixo' },
      { label: 'Chewbacca', note: 'Star Wars, copiloto Wookiee; valor do Databank do StarWars.com' },
      { label: 'O Hulk (MCU)', note: 'Forma gama no MCU; Bruce Banner tem 175 cm' },
      { label: 'Jake Sully (avatar)', note: 'Avatar, corpo Na\'vi adulto; o material de produção dá os adultos como 9–10 ft' },
      { label: 'Optimus Prime (Bayverse)', note: 'Tabelas de escala dos filmes live-action de Transformers de 2007–2017' },
      { label: 'King Kong (Ilha da Caveira, 2017)', note: 'Kong adolescente em Kong: A Ilha da Caveira' },
      { label: 'King Kong (Godzilla vs. Kong, 2021)', note: 'Kong totalmente crescido no MonsterVerse' },
      { label: 'Godzilla (2021)', note: 'Godzilla do MonsterVerse em Godzilla vs. Kong' },
    ],
    faqs: [
      {
        question: 'As alturas de cinema incluem armadura, capacetes e botas?',
        answer: 'Às vezes, e é exatamente por isso que a distinção importa. Os 203 cm de Darth Vader são a figura blindada completa, com capacete e traje de suporte de vida, enquanto Anakin Skywalker por baixo é um homem muito mais baixo. Os 198 cm do Homem de Ferro são a armadura Mark 85, não Tony Stark, que tem 185 cm. Esta página rotula valores de armadura como valores de armadura, para que você nunca compare um traje com um humano descalço por acidente.',
      },
      {
        question: 'Por que Wolverine tem 188 cm aqui se os quadrinhos dizem 160 cm?',
        answer: 'Porque esta é a categoria de cinema, e os filmes escalaram Hugh Jackman, que tem 188 cm, como Wolverine. Os quadrinhos listam Logan com 160 cm, e esse valor está correto para o personagem impresso. Os dois números descrevem duas versões diferentes do personagem, e a versão do cinema é a que pertence a uma página de comparação de filmes. Misturar continuidades é a fonte mais comum de alturas de cinema erradas.',
      },
      {
        question: 'Por que Godzilla e King Kong mudam de altura entre filmes?',
        answer: 'Porque a equipe de produção de cada filme define sua própria escala. Kong tem 104 ft como adolescente em Kong: A Ilha da Caveira, de 2017, e 337 ft como adulto totalmente crescido em Godzilla vs. Kong, de 2021, e o crescimento faz parte da história: ele ainda está amadurecendo no filme anterior. Godzilla também cresceu, de 108 m em 2014 para 119,8 m no filme de 2021. A altura de uma criatura só faz sentido com o título do filme anexado, e é por isso que cada entrada de criatura aqui nomeia seu filme.',
      },
      {
        question: 'As alturas de criaturas em CGI são medições reais ou chutes?',
        answer: 'São decisões de produção registradas em tabelas de escala. Antes de um único quadro ser renderizado, a equipe de efeitos visuais concorda sobre a altura de uma criatura em relação a prédios, veículos e personagens humanos, porque cada tomada depende dessa proporção. As tabelas de escala de produção de Transformers listam o Optimus Prime live-action com 28 ft, e o material de produção de Avatar define os Na\'vi adultos com 9–10 ft de altura. Esses números não são menos oficiais do que uma medição de figurino; são simplesmente decididos no papel antes de aparecerem na tela.',
      },
      {
        question: 'Posso comparar personagens de cinema com pessoas e objetos reais na ferramenta?',
        answer: 'Sim, e é aí que a ferramenta cumpre seu papel. Coloque Chewbacca, com 228 cm, ao lado de um homem médio de 175 cm e a vantagem do Wookiee deixa de ser uma impressão vaga e se torna uma diferença de 53 cm que você consegue ver. Coloque Godzilla ao lado de um arranha-céu e o motivo pelo qual os filmes de kaiju enquadram seus monstros contra horizontes urbanos fica óbvio: com 119,8 m, Godzilla é um prédio que se move.',
      },
    ],
    editorialSections: [
      {
        heading: 'As três alturas escondidas dentro de cada personagem de cinema',
        paragraphs: [
          'Pergunte a altura de um personagem de cinema e você normalmente receberá três respostas, todas defensáveis. Há a altura do ator, a altura da figura realmente fotografada no set e a altura do personagem finalizado que o público vê. Para um papel humano comum, esses três números são quase idênticos, e ninguém percebe a diferença. Para um personagem fantasiado ou digital, eles podem ficar a metros de distância, e é nessa distância que começa a maior parte da confusão sobre alturas de cinema. Darth Vader é o caso clássico: David Prowse dentro do traje era um homem muito alto, a armadura finalizada com seu capacete chega a 203 cm, e Anakin Skywalker, a pessoa por baixo, nunca foi tão alto. Citar qualquer um desses números sem dizer qual você quer dizer é como as discussões começam.',
          'A armadura é a maior fonte única de altura extra, e vale a pena entendê-la como ofício, e não como truque. Um traje de armadura motorizada, uma fantasia de Wookiee ou um traje de super-herói é construído sobre o corpo do intérprete, e capacetes, ombreiras e botas de plataforma rotineiramente adicionam de dez a vinte centímetros. A armadura Mark 85 do Homem de Ferro fica em 198 cm, enquanto Tony Stark tem 185 cm, e os treze centímetros entre eles são engenharia: blindagem, um capacete e as botas do traje. Os 228 cm de Chewbacca também são um valor de fantasia, construído a partir do intérprete por dentro, mais pelo, uma peça de cabeça e calçado. Nada disso torna os números falsos. A figura blindada é o que o público vê, o que a história trata como a altura do personagem e o que o databank oficial registra. Ela só se torna enganosa quando é comparada silenciosamente com uma medição humana descalça, como se as duas tivessem sido tomadas do mesmo jeito.',
        ],
      },
      {
        heading: 'Bíblias de produção, tabelas de escala e por que reboots zeram tudo',
        paragraphs: [
          'Para personagens humanos, a bíblia de produção costuma ser apenas a ficha de elenco: a altura divulgada do ator, ajustada pelo que o figurino adiciona. Para criaturas e robôs, o documento-chave é a tabela de escala, uma folha desenhada antes das filmagens que fixa a altura de cada personagem em relação a uma silhueta humana, um veículo e um prédio. As tabelas de escala live-action de Transformers estabelecem o Optimus Prime do Bayverse em 28 ft, e esse valor permaneceu consistente ao longo dos filmes de 2007–2017 porque cada tomada de efeitos foi construída a partir da mesma tabela. O material de produção de Avatar define os Na\'vi adultos com 9–10 ft de altura, e é por isso que o corpo avatar de Jake Sully é lido como cerca de 9 ft ao lado de soldados humanos no mesmo quadro. Esses documentos são o equivalente cinematográfico de um databook de anime, e merecem o mesmo respeito como fontes.',
          'Reboots e sequências zeram a tabela, e isso é uma característica, não um erro. Kong tem 104 ft em Kong: A Ilha da Caveira porque a história precisa de um macaco adolescente que ainda pode crescer, e tem 337 ft em Godzilla vs. Kong porque a história precisa de um adulto capaz de enfrentar um Godzilla de 393 ft. A triplicação é deliberada, e a equipe de produção publicou os dois números. A mesma lógica explica por que um Godzilla de 1954 com 50 m e um Godzilla de 2021 com 119,8 m estão ambos corretos: pertencem a produções diferentes, com horizontes diferentes para dominar. Qualquer tabela que liste uma criatura sem nomear seu filme está escondendo a informação mais importante sobre aquele valor.',
        ],
      },
      {
        heading: 'Perspectiva forçada, dublês de corpo e as ilusões que enganam o olho',
        paragraphs: [
          'Mesmo quando a tabela de produção é exata, o filme finalizado pode mentir para os seus olhos, e os cineastas têm um kit inteiro de ferramentas para isso. A perspectiva forçada coloca um ator mais baixo mais perto da câmera para que ele pareça mais alto, uma técnica que os filmes de O Senhor dos Anéis usaram constantemente para hobbits e magos. A altura da câmera também importa: filmar um personagem de baixo para cima adiciona autoridade e altura aparente, enquanto filmar de cima o diminui, e os diretores escolhem esses ângulos pelo efeito emocional, e não pela precisão documental. É por isso que dois personagens podem parecer iguais em uma cena e diferir por uma cabeça na seguinte, e por que medir alturas a partir de um fotograma é uma tarefa tola.',
          'Dublês de corpo e substitutos adicionam outra camada. O Capitão América é um exemplo limpo: Steve Rogers tem 188 cm após o Soro do Supersoldado, segundo a exposição do Smithsonian dentro do universo, enquanto Chris Evans, o ator, tem 183 cm, e a produção preencheu a lacuna com truques de câmera e enquadramento cuidadoso. O Hulk é o caso extremo, porque não existe intérprete daquele tamanho: o Hulk do MCU, com 259 cm, é uma construção totalmente digital cuja altura foi escolhida no papel e depois renderizada, com o corpo de 175 cm de Mark Ruffalo servindo apenas como referência de movimento. Quando você sabe que esses mecanismos existem, a pergunta certa deixa de ser "qual era a altura que ele parecia ter naquela cena" e passa a ser "o que a produção decidiu", que é uma pergunta com resposta documentada.',
        ],
      },
      {
        heading: 'Usando a ferramenta para resolver discussões sobre escala no cinema',
        paragraphs: [
          'A ferramenta de comparação está no seu melhor quando torna literal a linguagem visual de um filme. Coloque Yoda, com 66 cm, ao lado dos 203 cm blindados de Darth Vader e você reproduziu, em números, o contraste mais famoso de Star Wars: o menor mestre e o maior vilão, separados por 137 cm de presença de tela. Coloque R2-D2, com 109 cm, ao lado de Chewbacca, com 228 cm, e o hábito do droide de rolar pelas cenas na altura do joelho de repente ganha uma medida. Isso não é trivia; são os fatos espaciais com os quais os diretores trabalharam ao marcar cada cena, e vê-los sobre uma linha de base explica decisões de elenco e figurino que, de outro modo, pareceriam arbitrárias.',
          'A ferramenta também lida com o salto da escala humana para a escala kaiju, que é onde a altura no cinema se torna genuinamente espetacular. Uma figura humana de 175 cm ao lado de Godzilla, com 119,8 m, é quase invisível, e essa quase invisibilidade é o resultado honesto: ela diz por que os filmes de kaiju nunca enquadram seus monstros contra pessoas, mas contra horizontes, montanhas e outros monstros. Comparar o Kong de 2017, com 31,7 m, com o Kong de 2021, com 102,7 m, na mesma tela mostra o arco de crescimento do personagem de forma mais vívida do que qualquer montagem de sequência, porque a triplicação é desenhada, e não descrita. Mantenha o título do filme anexado a cada criatura, mantenha os valores de armadura rotulados como armadura, e a ferramenta fará o que nenhum fotograma consegue: mostrar a própria escala da produção, tudo de uma vez, sobre uma única linha de chão.',
        ],
      },
    ],
  },
  animals: {
    measurementAnchor: 'Altura do ombro / cernelha para quadrúpedes; topo da cabeça para bípedes',
    measurementGuide: 'Mamíferos de quatro patas são medidos do solo nivelado até a cernelha, a crista óssea entre as omoplatas, porque a cernelha permanece em uma altura fixa enquanto a cabeça se move constantemente para cima, para baixo e para os lados. Os cavalos mantêm o mesmo padrão de cernelha, mas o expressam em mãos (hands), em que uma mão equivale a 4 polegadas (10,16 cm), então um cavalo de 160 cm tem 15.3 mãos. Animais eretos, como cangurus e gorilas, são medidos, em vez disso, até o topo da cabeça, e as girafas até as pontas dos ossicones, porque esses animais não têm uma linha de cernelha significativa. A altura da cabeça nunca é usada para quadrúpedes: um cavalo pastando, um cervo alerta e um elefante atacando mantêm a cabeça em alturas completamente diferentes, então um número baseado na cabeça descreveria uma pose, e não um animal.',
    measurementNote: 'Animais de quatro patas são medidos até o ombro ou a cernelha, não até a cabeça.',
    commonHeights: [
      { label: 'Gato Doméstico', note: 'Do solo à cernelha do ombro, adulto típico' },
      { label: 'Cão Doméstico', note: 'Do solo à cernelha; varia muito conforme a raça' },
      { label: 'Lobo-Cinzento', note: 'Do solo à cernelha, adulto' },
      { label: 'Tigre', note: 'Do solo ao ombro, adulto' },
      { label: 'Leão-Africano', note: 'Do solo à cernelha do ombro, macho adulto' },
      { label: 'Urso-Pardo', note: 'Altura do ombro de quatro; fica mais alto sobre as patas traseiras' },
      { label: 'Vaca', note: 'Do solo à cernelha do ombro, adulta' },
      { label: 'Canguru-Vermelho', note: 'Altura ereta em pé até a cabeça' },
      { label: 'Gorila', note: 'Altura em pé até o topo da cabeça' },
      { label: 'Cavalo Doméstico', note: 'Medição na cernelha, 15.3 mãos' },
      { label: 'Camelo', note: 'Topo do ombro; a corcova pode subir mais' },
      { label: 'Elefante-Africano-da-Savana', note: 'Altura do ombro de um macho adulto' },
      { label: 'Girafa', note: 'Do solo às pontas dos ossicones, adulto típico' },
    ],
    faqs: [
      {
        question: 'Por que os animais são medidos no ombro ou na cernelha em vez da cabeça?',
        answer: 'A cernelha é um marco esquelético fixo, o ponto mais alto das omoplatas, e não se move quando o animal pasta, olha ao redor ou abaixa a cabeça. A altura da cabeça pode mudar dezenas de centímetros de um segundo para outro, então não pode servir como padrão repetível. Todo registro veterinário, padrão de raça e medição de zoológico para um quadrúpede usa, portanto, a cernelha, e é por isso que a ferramenta de comparação desenha os quadrúpedes até essa linha.',
      },
      {
        question: 'Como os cavalos são medidos, e o que é uma mão?',
        answer: 'Os cavalos são medidos na cernelha em mãos (hands), uma unidade tradicional igual a 4 polegadas ou 10,16 cm. Um cavalo descrito como 15.3 mãos tem 15 mãos completas mais 3 polegadas, o que resulta em 160 cm. A ferramenta mostra as duas unidades, então um cavalo listado com 160 cm e um cavalo listado com 15.3 mãos têm a mesma altura expressa de duas formas.',
      },
      {
        question: 'Por que a altura de um urso é confusa, e em qual número devo confiar?',
        answer: 'Um urso anda de quatro com cerca de 130 cm no ombro, mas o mesmo animal se ergue sobre as patas traseiras até cerca de 2,5 m, então os dois números são reais e descrevem posturas diferentes. A ferramenta de comparação usa como padrão a altura do ombro de quatro, porque é a postura normal de deslocamento do animal e a única comparável com outros quadrúpedes. Se você quer a altura erguida, compare-a com um humano em pé.',
      },
      {
        question: 'As girafas realmente devem a maior parte da altura aos pescoços?',
        answer: 'Só em parte. As pernas e o pescoço de uma girafa têm cerca de 1,8 m cada, então as pernas sozinhas já são tão altas quanto um humano adulto médio antes de o corpo e o pescoço serem adicionados. O pescoço adiciona aproximadamente outro terço da altura total do animal, e contém apenas sete vértebras, o mesmo número de um pescoço humano, com cada vértebra esticada para mais de 25 cm. É por isso que uma girafa parece tão extrema no gráfico: são duas estruturas da altura de um humano empilhadas uma sobre a outra.',
      },
      {
        question: 'Por que as alturas dos cães variam tanto entre raças?',
        answer: 'Os cães são o mamífero terrestre de tamanho mais variável porque séculos de criação seletiva esticaram uma espécie de um Chihuahua de 15 cm até um Dogue Alemão de 110 cm no ombro. Uma única "altura de cão" é, portanto, apenas um valor intermediário aproximado, e o valor de 60 cm da ferramenta é um cão de porte médio, não um padrão de raça. Para uma comparação exata, insira a altura de cernelha de uma raça específica como altura personalizada, em vez de confiar na figura genérica do cão.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que as alturas dos animais são mais difíceis de fixar do que as humanas',
        paragraphs: [
          'Um humano fica em pé, fica parado para uma fita métrica e mantém a mesma altura da manhã à noite, o que torna a medição humana quase trivial. Os animais se recusam a cooperar de todas as formas possíveis: movem-se, agacham-se, erguem-se, pastam, e seus corpos são construídos na horizontal em vez de na vertical, então a própria ideia de "altura" precisa ser definida antes de poder ser medida. É essa definição que torna a comparação de animais interessante, porque um único animal pode carregar legitimamente duas ou três alturas diferentes dependendo da postura, e cada uma conta uma história diferente sobre como o animal vive.',
          'O padrão da cernelha existe justamente para cortar essa ambiguidade. A cernelha é a crista de osso onde o pescoço encontra o dorso e, ao contrário da cabeça, não pode ser levantada ou abaixada à vontade. Um cavalo que abaixa a cabeça para beber e um cavalo que joga a cabeça para cima em alerta têm a mesma altura de cernelha, e é por isso que registros de raças, prontuários veterinários e levantamentos de vida selvagem se ancoram nela. Quando você vê um quadrúpede no gráfico de comparação, a linha do seu dorso fica na sua altura de cernelha, e sua cabeça e orelhas sobem acima dessa linha naturalmente, exatamente como na vida real.',
        ],
      },
      {
        heading: 'Como a medição funciona na prática, e onde ela dá errado',
        paragraphs: [
          'Medir um animal calmo é simples: coloque-o sobre solo nivelado, encontre o ponto mais alto das omoplatas e trace uma linha vertical até o chão. Medir um animal selvagem ou não cooperativo é outro trabalho, e os pesquisadores frequentemente estimam a partir de pegadas, fotografias com um objeto de referência conhecido ou restos esqueléticos. É por isso que as alturas publicadas para a mesma espécie frequentemente divergem em 10 cm ou mais, e por que a ferramenta usa valores típicos de adultos em vez de extremos recordistas. Um elefante recordista ou uma girafa excepcionalmente alta é uma curiosidade, não um animal representativo, e comparar-se a um valor fora da curva distorce o quadro.',
          'O erro mais comum é misturar posturas. A altura do ombro de um urso de quatro e sua altura em pé sobre as patas traseiras diferem em mais de um metro, e os dois valores circulam online sem rótulo. A mesma armadilha atinge os elefantes, em que a altura do ombro às vezes é confundida com a altura da cabeça, e os camelos, em que a corcova pode ficar 30 cm acima da linha do ombro. A ferramenta evita isso fixando uma postura por animal e declarando-a no rótulo, então uma comparação entre um urso e um humano é sempre uma comparação justa.',
        ],
      },
      {
        heading: 'Extremos que ressignificam o que é ser alto',
        paragraphs: [
          'O reino animal estica o senso humano de escala nas duas direções. Em uma ponta, um gato doméstico com 25 cm no ombro mal chega ao tornozelo de um adulto, e o animal inteiro cabe embaixo de uma mesa de centro. Na outra ponta, uma girafa com 480 cm é quase três humanos médios empilhados, e suas pernas sozinhas têm aproximadamente a altura de uma pessoa. Entre esses polos ficam os animais que as pessoas realmente encontram: cães, cavalos e vacas, cujas alturas de cernelha se agrupam entre 60 e 160 cm, bem na faixa em que um humano consegue julgá-los de relance.',
          'O que surpreende a maioria das pessoas é o quanto da altura de um animal alto é perna. As pernas de uma girafa têm cerca de 1,8 m de comprimento, o que significa que o animal já tem altura humana antes mesmo de o corpo começar, e seu pescoço adiciona outros 1,8 m por cima. Os elefantes invertem o padrão: suas pernas são comparativamente curtas e colunares, e seu volume vem de um tronco massivo posicionado alto acima do chão. Ver os dois animais ao lado de um humano sobre a mesma linha de base torna a diferença óbvia de um jeito que os números sozinhos nunca conseguem.',
        ],
      },
      {
        heading: 'Equívocos comuns, e como usar bem a ferramenta',
        paragraphs: [
          'O equívoco mais persistente é que a altura de um cavalo inclui sua cabeça. Não inclui, e um cavalo cuja cernelha mede 160 cm carregará a cabeça bem acima de 200 cm quando alerta, e é por isso que pessoas que encontram um cavalo pessoalmente frequentemente insistem que a altura publicada está errada. A mesma lógica se aplica a cervos, em que os chifres são excluídos, e a cães, em que as orelhas são excluídas. O gráfico é honesto sobre isso: ele desenha o corpo do animal até sua altura medida e deixa a cabeça se estender acima da linha.',
          'Para tirar o máximo da ferramenta, comece com uma figura humana que você conhece, adicione um animal de cada vez e observe a linha de base em vez dos topos dos desenhos. Compare um cavalo com um humano, depois adicione um leão para ver como o ombro de um grande felino fica abaixo do de um cavalo, depois adicione um elefante para ver o salto para a verdadeira escala da megafauna. Se quiser comparar um animal específico, como o seu próprio cão, meça a cernelha dele com um nível e uma parede, insira esse número exato como altura personalizada, e o gráfico mostrará com precisão onde o seu cão se posiciona em relação a todo o resto.',
        ],
      },
    ],
  },
  objects: {
    measurementAnchor: 'Do chão / piso até o plano estrutural rígido mais alto',
    measurementGuide: 'Os objetos são medidos da sua superfície de apoio nivelada, geralmente o chão ou o pavimento, em linha reta até seu ponto rígido mais alto, o que significa o topo do encosto de uma cadeira, a dobradiça superior de uma geladeira ou a linha do teto de um carro, mas não um extra macio ou ajustável, como uma antena ou um encosto de cabeça levantado. Dimensões padrão descrevem um tamanho fabricado comum, e não uma lei da natureza, então uma "porta padrão" tem 80 polegadas (203 cm) de folha de porta nos Estados Unidos, mas é comumente vendida como uma abertura de batente de 210 cm em outros lugares, e a mesma porta pode medir diferente dependendo de o batente estar incluído ou não. Sempre declare qual ponto foi medido, porque duas medições honestas do mesmo objeto podem diferir em vários centímetros quando uma inclui molduras, dobradiças ou barras de teto e a outra não.',
    measurementNote: 'Os objetos são medidos do chão até seu ponto rígido mais alto.',
    commonHeights: [
      { label: 'Mesa de Jantar', note: 'Do chão à superfície do tampo' },
      { label: 'Máquina de Lavar', note: 'Do chão ao painel superior, frontal padrão' },
      { label: 'Sofá', note: 'Do chão ao topo das almofadas do encosto' },
      { label: 'Cadeira de Jantar', note: 'Do chão ao topo do encosto' },
      { label: 'Bicicleta', note: 'Do solo ao topo do guidão' },
      { label: 'Motocicleta', note: 'Do solo ao guidão ou ao topo do para-brisa' },
      { label: 'Carro Sedan', note: 'Do pavimento ao ápice do teto' },
      { label: 'Luminária de Piso', note: 'Do chão ao topo da cúpula ou do remate' },
      { label: 'Geladeira', note: 'Do chão à dobradiça superior da porta' },
      { label: 'Estante de Livros', note: 'Do chão à prateleira superior ou à coroa' },
      { label: 'Picape', note: 'Do solo ao topo do teto da cabine' },
      { label: 'Guarda-Roupa', note: 'Do chão ao topo do armário' },
      { label: 'Porta Padrão', note: 'Do chão ao topo da abertura do batente' },
      { label: 'Tabela de Basquete', note: 'Do chão da quadra à superfície do aro, regulamentar' },
      { label: 'Ônibus Urbano', note: 'Da superfície da rua ao teto' },
    ],
    faqs: [
      {
        question: 'Por que uma "porta padrão" tem mais de uma altura?',
        answer: 'Porque o número depende do país e do que exatamente está sendo medido. Nos Estados Unidos, a folha de porta interna comum tem 80 polegadas, ou seja, 203 cm, enquanto a abertura do batente em que ela se encaixa costuma ter cerca de 210 cm, e as portas europeias são comumente vendidas com 210 cm. A ferramenta usa 210 cm para a abertura do batente porque essa é a altura pela qual uma pessoa realmente passa, mas, se a sua própria porta mede 203 cm, insira isso como altura personalizada para uma comparação exata.',
      },
      {
        question: 'A altura de um carro é medida até o teto ou até as barras de teto?',
        answer: 'Até o ponto rígido mais alto do teto, que para a maioria dos carros é o próprio painel do teto, mas barras de teto ou um baú de teto podem adicionar vários centímetros e às vezes são incluídos nos valores dos fabricantes. É por isso que uma fonte pode listar um sedan com 145 cm e outra com 148 cm: o carro é o mesmo, mas um valor inclui as barras. A ferramenta usa o ápice do teto sem acessórios, então um carro com baú de teto ficará um pouco mais alto na vida real do que no gráfico.',
      },
      {
        question: 'Por que uma tabela de basquete tem exatamente 10 pés de altura em todo lugar?',
        answer: 'A altura do aro de 10 pés, ou 305 cm, foi fixada quando o jogo foi inventado e nunca mudou, e todas as grandes ligas do mundo usam o mesmo valor. É uma das poucas alturas de objeto que é uma verdadeira constante global, e não uma convenção de fabricação, o que a torna um ponto de referência excepcionalmente confiável. Se você consegue tocar o aro, consegue alcançar 305 cm, e comparar-se a essa linha diz instantaneamente o quanto ela fica acima da sua cabeça.',
      },
      {
        question: 'Como comparo meus próprios móveis se eles não têm tamanho padrão?',
        answer: 'Meça-os do mesmo jeito que a ferramenta faz: coloque-os sobre um chão plano, segure uma fita verticalmente do chão até o ponto rígido mais alto e leia o número em centímetros. Uma cadeira é medida até o topo do encosto, não até o assento, e uma estante até sua borda superior, não até seu livro mais alto. Insira esse número como altura personalizada e o gráfico colocará sua peça exata de mobília ao lado de uma figura humana.',
      },
      {
        question: 'Por que um prédio de dois andares não equivale ao dobro de uma casa de um andar?',
        answer: 'Porque a altura de um prédio inclui lajes de piso, estrutura do telhado e platibandas, e não apenas dois blocos de altura de cômodo empilhados, e as alturas de teto variam conforme a época e a finalidade. Uma casa de um andar com 450 cm até a cumeeira e um prédio de dois andares com 600 cm até a platibanda são valores típicos, mas uma casa antiga com tetos altos pode rivalizar com um bloco moderno de dois andares. Os valores de prédios do gráfico são representativos, não desenhos arquitetônicos, então use-os para intuição de escala, e não para planejamento de construção.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que objetos cotidianos são a melhor régua que você já tem',
        paragraphs: [
          'As pessoas têm dificuldade de imaginar um número como 175 cm isoladamente, mas entendem instantaneamente uma porta pela qual passam todos os dias, um carro que dirigem e uma cadeira em que se sentam. É isso que torna os objetos a categoria mais útil em uma ferramenta de comparação de alturas: as referências já estão instaladas na memória do leitor, e o gráfico só precisa organizá-las sobre uma linha de base comum. Uma figura humana ao lado de um batente de porta de 210 cm é lida imediatamente, porque todo mundo conhece a sensação de uma porta que passa a um palmo acima da cabeça ou que obriga a se abaixar.',
          'Os objetos também ancoram o resto da escala. Quando você sabe que o teto de um sedan fica em cerca de 145 cm, aproximadamente a altura do peito de um adulto, consegue julgar qualquer veículo na rua em relação a ele. Quando você sabe que um aro de basquete é fixado em 305 cm, consegue imaginar exatamente o quanto ele fica acima da cabeça de um jogador. Isso não são medições abstratas, mas fatos físicos com os quais as pessoas esbarraram, que tentaram alcançar e sob os quais se abaixaram, e é por isso que eles são réguas mentais melhores do que qualquer número sozinho.',
        ],
      },
      {
        heading: 'Como a medição de objetos funciona, e por que dois números honestos podem divergir',
        paragraphs: [
          'Medir um objeto parece simples até você decidir qual ponto conta como topo. Uma cadeira tem um assento a cerca de 45 cm e um encosto a cerca de 90 cm, e ambos são alturas reais da mesma cadeira, mas apenas o encosto é sua altura total. O corpo de uma geladeira pode terminar em 170 cm, enquanto sua dobradiça superior chega a 175 cm. Um carro medido até o painel do teto e o mesmo carro medido até suas barras de teto diferem em alguns centímetros. Nenhuma dessas divergências significa que alguém esteja errado; significa que o ponto de medição não foi declarado.',
          'A ferramenta segue uma regra para manter as comparações honestas: do chão até o ponto rígido mais alto, excluindo extras macios, temporários ou opcionais. Uma antena não conta, um encosto de cabeça levantado não conta e um baú de teto não conta, porque esses itens podem ser adicionados, removidos ou ajustados sem mudar o objeto em si. Declarar a regra importa mais do que a regra em si, porque, uma vez conhecida a regra, qualquer pessoa pode reproduzir a medição com uma fita métrica e um chão plano, e é essa reprodutibilidade que separa uma referência útil de um palpite.',
        ],
      },
      {
        heading: 'Padrões, e por que eles variam conforme o país e a época',
        paragraphs: [
          'Algumas alturas de objetos são verdadeiras constantes globais. Um aro de basquete tem 305 cm em todas as quadras de todos os países, porque as regras do esporte o fixaram e nunca o mudaram. A maioria das outras são convenções que derivam através de fronteiras e décadas. As alturas de portas são o exemplo clássico: a familiar porta interna americana de 80 polegadas tem 203 cm de folha, enquanto muitos mercados europeus e asiáticos constroem em torno de uma abertura de 210 cm, e casas mais antigas frequentemente têm portas mais baixas do que qualquer um dos dois. Os móveis seguem o mesmo padrão, com alturas de escrivaninha se estabilizando em torno de 75 cm porque isso combina com o cotovelo sentado médio, enquanto mesas de jantar variam com o estilo e a época.',
          'Os veículos mostram a mesma deriva em outra direção. Um sedan de vinte anos atrás normalmente ficava mais baixo do que um moderno, e a ascensão dos SUVs empurrou o teto médio dos carros de cerca de 145 cm para 170 cm ou mais. É por isso que o gráfico usa valores atuais típicos, em vez de fingir que um único número cobre todos os carros já feitos. Se o seu carro é mais antigo ou mais alto do que o típico, medi-lo e inserir uma altura personalizada leva segundos e é sempre mais preciso do que confiar em um valor genérico.',
        ],
      },
      {
        heading: 'Equívocos comuns, e como usar bem a ferramenta',
        paragraphs: [
          'O erro mais comum é comparar os pontos errados: julgar uma pessoa em relação ao assento de uma cadeira em vez do seu encosto, ou em relação à linha da janela de um carro em vez do seu teto. O gráfico evita isso desenhando cada objeto até sua altura total, então o topo de cada desenho é o ponto de medição. Outra surpresa frequente é o quanto coisas comuns acabam sendo altas: uma geladeira de 175 cm tem exatamente a altura humana média, e é por isso que ela domina uma cozinha, e um ônibus urbano de 320 cm é quase o dobro de uma pessoa, e é por isso que descer de um parece descer de um pequeno penhasco.',
          'Para usar bem a ferramenta, comece com objetos da sua própria casa. Coloque uma figura humana ao lado de uma porta, depois adicione seu carro, depois sua geladeira, e observe como o mundo familiar se empilha. Depois adicione algo fora do cotidiano, como um ônibus ou um aro de basquete, para esticar a escala para cima. Se uma figura parecer errada, meça o objeto real antes de duvidar do gráfico: em nove de cada dez vezes, a surpresa é real, e o objeto é genuinamente daquela altura.',
        ],
      },
    ],
  },
  plants: {
    measurementAnchor: 'Da linha do solo ao ápice superior da copa',
    measurementGuide: 'A altura das plantas é medida como a distância vertical da linha do solo na base da planta até a ponta viva mais alta de sua copa ou caule, com a planta em sua postura natural de crescimento, e não esticada ou escorada para cima. Para árvores, os silvicultores distinguem entre a altura de um exemplar maduro crescendo a céu aberto e um competindo em um povoamento denso, e registram o ano da medição porque uma árvore viva continua crescendo, perde copa para tempestades ou fogo e, portanto, pode estar mais baixa em um levantamento posterior do que estava antes. A mesma espécie pode variar enormemente: um girassol em um jardim doméstico pode chegar a 2 metros, enquanto um exemplar recordista passa de 10 metros, e uma tamareira em um pomar seco fica muito mais baixa do que uma em um bosque profundo e irrigado. Por esse motivo, cada altura nesta página descreve um tipo específico de exemplar — um indivíduo recordista, uma planta madura típica ou uma forma comum de jardim — e a nota ao lado de cada entrada diz qual deles é.',
    measurementNote: 'Medido da linha do solo até a ponta viva mais alta da copa.',
    commonHeights: [
      { label: 'Sequóia-Costeira Hyperion', note: 'Árvore viva mais alta conhecida, medida com 115,92 m no Redwood National Park, Califórnia' },
      { label: 'Eucalipto Centurion', note: 'Planta com flor mais alta do mundo, Tasmânia; medida com 99,6 m após perder copa para um incêndio em 2019' },
      { label: 'Doerner Fir', note: 'Abeto-de-Douglas mais alto conhecido e árvore não-sequóia mais alta, medida com 99,3 m no Oregon em 2022' },
      { label: 'Sequóia-Gigante General Sherman', note: 'Maior árvore viva de tronco único conhecida em volume de tronco, Sequoia National Park, Califórnia' },
      { label: 'Bambu-Gigante', note: 'Altura madura típica de Dendrocalamus giganteus, a maior gramínea do mundo' },
      { label: 'Baobá-Africano', note: 'Grande Adansonia digitata madura, uma árvore suculenta massiva das savanas africanas' },
      { label: 'Tamareira', note: 'Phoenix dactylifera madura típica, a palmeira cultivada dos oásis do Oriente Médio e do Norte da África' },
      { label: 'Saguaro Maduro', note: 'Carnegiea gigantea madura média segundo o US National Park Service, Deserto de Sonora' },
      { label: 'Girassol Recordista', note: 'Girassol do Guinness World Record cultivado por Alex Babich, EUA, verificado em 3 de setembro de 2025' },
      { label: 'Bananeira', note: 'Bananeira cultivada madura típica, uma erva gigante com pseudocaule em vez de tronco lenhoso' },
      { label: 'Árvore Frutífera de Jardim (Maçã/Pera)', note: 'Copa de pomar semi-anã' },
      { label: 'Girassol Comum', note: 'Girassol comum de jardim em plena floração' },
    ],
    faqs: [
      {
        question: 'Por que fontes diferentes dão alturas diferentes para a mesma árvore famosa?',
        answer: 'Uma árvore viva é um alvo móvel. Ela cresce todos os anos, e pode perder metros de copa para raios, fogo ou vento, então um valor só está correto para o ano em que foi medido. A Hyperion, por exemplo, foi medida com 115,55 m em 2006 e 115,92 m em 2019, e a Centurion perdeu cerca de 4 m em um incêndio florestal em 2019. O declive também importa: os topógrafos relatam a altura acima do nível médio do solo, enquanto uma fita solta da copa até o ponto mais baixo ladeira abaixo pode marcar vários metros a mais.',
      },
      {
        question: 'Qual é a altura real de um girassol comum?',
        answer: 'A maioria dos girassóis de jardim chega a 1,5 a 3 metros, o que já é mais alto do que a maioria dos adultos. Os livros de recordes são outra história: cultivadores competitivos, usando solo rico, abrigo e escoramento, empurraram a espécie para além de 10 metros, com o recorde atual do Guinness em 10,90 m. Quando você comparar um girassol na ferramenta, verifique se a entrada é uma planta de jardim ou um exemplar recordista, porque os dois diferem por um fator de cinco.',
      },
      {
        question: 'Posso comparar uma planta de interior com móveis na ferramenta?',
        answer: 'Sim, e esse é um dos usos mais práticos desta categoria. Coloque uma figueira-lira ou uma monstera ao lado de uma mesa de jantar, uma estante ou um vão de porta para avaliar se ela caberá em um cômodo e quanta luz suas folhas superiores receberão. Meça a planta a partir da superfície do solo no vaso, não do chão, e lembre-se de que uma planta comprada pequena continuará crescendo em direção à sua altura madura.',
      },
      {
        question: 'Por que uma bananeira não é considerada uma árvore?',
        answer: 'Uma bananeira não tem tronco lenhoso. O que parece um tronco é um pseudocaule feito de bainhas de folhas fortemente enroladas, e toda a parte aérea da planta morre após a frutificação, enquanto novos brotos surgem do rizoma subterrâneo. Os botânicos, portanto, a chamam de maior planta herbácea com flor, e não de árvore, embora um exemplar maduro possa ter 5 metros de altura e sombrear um jardim como uma árvore pequena faz.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que as alturas das plantas são os números mais difíceis da natureza',
        paragraphs: [
          'Nenhuma outra categoria neste site abrange uma faixa tão ampla quanto as plantas. Em uma ponta está um girassol de jardim que uma criança consegue ver por cima; na outra, uma sequóia-costeira mais alta do que um prédio de 35 andares. Entre eles ficam palmeiras, cactos, bambus, árvores frutíferas e arbustos, cada um com seu próprio hábito de crescimento, expectativa de vida e relação com o entorno. É essa faixa que torna as alturas das plantas tão satisfatórias de comparar: colocar uma pessoa ao lado de uma sequóia transforma um número abstrato como 116 metros em algo sentido, enquanto colocar a mesma pessoa ao lado de um saguaro explica por que um deserto que parece vazio da janela de um carro está, na verdade, cheio de vida lenta e imponente.',
          'A dificuldade é que a altura de uma planta nunca é uma propriedade fixa como a altura de um vão de porta. Uma planta cresce, e seu tamanho final depende de solo, água, luz, vento e vizinhos. Duas sementes do mesmo progenitor podem terminar com metros de diferença em altura se uma cair em um jardim abrigado e irrigado e a outra em uma encosta seca e ventosa. A idade importa tanto quanto: um saguaro leva cerca de uma década para alcançar uma única polegada, mas pode viver por dois séculos e eventualmente passar de 12 metros, enquanto um broto de bambu atinge seus 30 metros completos em uma única estação de crescimento e depois nunca mais cresce. Qualquer comparação honesta de plantas, portanto, precisa dizer que tipo de exemplar está descrevendo, e esta página faz exatamente isso na nota ao lado de cada entrada.',
        ],
      },
      {
        heading: 'Como uma árvore é realmente medida',
        paragraphs: [
          'Para uma planta de jardim, a medição é simples: coloque uma fita ao lado dela e leia o topo. Para uma árvore gigante, é uma pequena expedição. O padrão-ouro é a queda de fita, em que um escalador sobe até o broto vivo mais alto e desce uma fita até o chão, um método que confirmou o recorde da Hyperion e ainda é usado porque medidores a laser podem ser enganados por troncos inclinados, folhagem densa e declives. Os topógrafos também corrigem o próprio solo: uma árvore crescendo em uma encosta íngreme é mais alta medida do seu lado ladeira abaixo do que do lado ladeira acima, então as alturas publicadas usam o nível médio do solo ao redor da base.',
          'Esses detalhes explicam por que a mesma árvore aparece com alturas diferentes em anos diferentes. Uma árvore não apenas cresce; ela também quebra. A Centurion, o eucalipto da Tasmânia, foi medida com 100,5 m em 2018 e depois perdeu cerca de 4 m de copa em um incêndio florestal no ano seguinte, então sua altura publicada atual é 99,6 m. A Doerner Fir, no Oregon, tinha 100,3 m em 1991 e 99,3 m em 2022, e perdeu mais copa para um incêndio em 2025. Nenhuma dessas revisões significa que os valores anteriores estavam errados; significa que a árvore mudou. Quando você usar a ferramenta de comparação, trate as alturas de árvores recordistas como retratos de indivíduos nomeados em uma data específica, e as alturas de plantas de jardim como faixas típicas, e não como promessas.',
        ],
      },
      {
        heading: 'Os extremos, das árvores recordistas a uma única flor',
        paragraphs: [
          'O topo do mundo vegetal pertence às coníferas e a uma árvore com flor extraordinária. A Hyperion, uma sequóia-costeira na Califórnia, é o ser vivo mais alto conhecido em terra, com cerca de 116 m, e ainda está crescendo. Logo atrás vêm a Centurion, um eucalipto na Tasmânia que é a planta com flor mais alta da Terra, e a Doerner Fir, o abeto-de-Douglas mais alto e a árvore mais alta do mundo que não é uma sequóia. A General Sherman, a sequóia-gigante, é mais baixa do que as três, com 83,8 m, mas detém um recorde diferente: em volume de tronco, é a maior árvore de tronco único viva, um lembrete de que altura e volume são conquistas diferentes.',
          'A ponta menor da escala é igualmente surpreendente. O bambu-gigante, tecnicamente uma gramínea, chega a 30 m, o que o torna mais alto do que a maioria das árvores suburbanas e o caminho mais rápido para uma cerca viva alta em um jardim. O saguaro, o maior cacto dos Estados Unidos, tem em média cerca de 12 m na maturidade e pode viver duzentos anos, crescendo tão devagar que uma planta de dez anos mal chega ao tornozelo. E o girassol mostra o quanto o cultivo pode esticar uma espécie: a mesma planta que fica com 1,8 m em um jardim típico foi cultivada até 10,90 m por um recordista em Indiana, uma altura que ultrapassaria uma casa de três andares. Comparar esses extremos lado a lado é a maneira mais rápida de entender que "altura de planta" não é um número, mas todo um espectro moldado por genética, clima e tempo.',
        ],
      },
      {
        heading: 'Como usar a ferramenta de comparação para plantas',
        paragraphs: [
          'Comece com algo que você conhece. Coloque um adulto médio ao lado de uma tamareira para ver por que as cidades-oásis parecem sombreadas e fechadas, ou ao lado de um saguaro maduro para entender por que trilheiros do deserto usam cactos como marcos de referência. Depois experimente uma comparação prática: uma bananeira ao lado de uma cerca de jardim, uma macieira semi-anã ao lado de uma casa de um andar ou uma planta de interior ao lado de uma estante antes de comprá-la. A ferramenta mantém cada planta sobre a mesma linha de base, então o olho consegue julgar a escala honestamente, em vez de chutar a partir de fotografias, em que uma lente grande-angular pode fazer um arbusto parecer uma árvore.',
          'Um hábito útil é comparar a mesma espécie em duas idades ou formas. Coloque um girassol comum ao lado do girassol recordista e a diferença mostra o que o cultivo seletivo pode fazer; coloque um saguaro jovem ao lado de um maduro e a diferença mostra por que a conservação do deserto é medida em séculos, e não em estações. Se você está planejando um jardim, compare a altura madura de uma árvore com a altura da sua linha do telhado e dos fios de energia, porque uma árvore plantada hoje para sombra pode se tornar um problema de poda em vinte anos. A ferramenta não dirá qual planta escolher, mas impedirá que você seja surpreendido pelo tamanho da que escolheu.',
        ],
      },
    ],
  },
  sports: {
    measurementAnchor: 'Estatura oficial descalço de combine e altura regulamentar do aro',
    measurementGuide: 'As alturas dos atletas vêm de medições oficiais, e não de material de divulgação. Desde a temporada de 2019, a NBA certifica alturas descalço nos acampamentos de treinamento das equipes, substituindo a prática antiga de listar os jogadores com seus tênis de jogo, o que normalmente adicionava de 2 a 5 cm. Os registros do futebol vêm da FIFA e dos registros dos clubes, os elencos de críquete das fichas de equipe do ICC e os perfis de ginástica de dados das federações nacionais, então os valores para o mesmo atleta podem diferir levemente entre fontes, dependendo de quando e como foram tomados. As alturas dos equipamentos são um tipo de número completamente diferente: são fixadas pelo livro de regras, então um aro de basquete tem 305 cm em qualquer lugar do mundo, uma trave de futebol tem 244 cm e uma rede de vôlei masculino tem 243 cm, independentemente de quem esteja jogando.',
    measurementNote: 'As alturas dos atletas são valores descalço de combine; as alturas dos equipamentos são padrões regulamentares.',
    commonHeights: [
      { label: 'Yao Ming', note: 'Ex-pivô do Houston Rockets, jogador mais alto no Hall da Fama do Basquete' },
      { label: 'Victor Wembanyama', note: 'Pivô do San Antonio Spurs, listado com 7 ft 4 in' },
      { label: 'Rede de Vôlei Masculino', note: 'Altura regulamentar da rede da FIVB para a competição masculina' },
      { label: 'Trave do Gol de Futebol', note: 'Regras do Jogo da FIFA, borda inferior da trave acima do solo' },
      { label: 'Rede de Vôlei Feminino', note: 'Altura regulamentar da rede da FIVB para a competição feminina' },
      { label: 'Shaquille O\'Neal', note: 'Ex-pivô da NBA, quatro vezes campeão da NBA' },
      { label: 'Michael Jordan', note: 'Ex-ala-armador do Chicago Bulls, seis vezes campeão da NBA' },
      { label: 'Usain Bolt', note: 'Velocista jamaicano, recordista mundial dos 100 m e 200 m' },
      { label: 'Cristiano Ronaldo', note: 'Atacante português, entre os maiores artilheiros do futebol internacional masculino' },
      { label: 'Lionel Messi', note: 'Atacante argentino, oito vezes vencedor da Bola de Ouro' },
      { label: 'Muggsy Bogues', note: 'Jogador mais baixo da história da NBA, 14 temporadas como armador' },
      { label: 'Simone Biles', note: 'Ginasta artística americana, a ginasta mais condecorada da história' },
      { label: 'Aro de Basquete Regulamentar', note: 'Altura padrão do aro da FIBA e da NBA acima da quadra' },
      { label: 'Tocos de Críquete', note: 'Leis do Críquete do MCC, topos dos tocos acima da superfície de jogo' },
    ],
    faqs: [
      {
        question: 'A NBA mede os jogadores com ou sem tênis?',
        answer: 'Sem tênis, desde 2019. Antes dessa temporada, as equipes listavam os jogadores com seus tênis de basquete, o que adicionava cerca de uma ou duas polegadas e tornava as comparações não confiáveis. A liga agora certifica a altura descalço nos acampamentos de treinamento, então um jogador listado hoje com 6 ft 6 in é genuinamente dessa altura descalço, e o número no elenco coincide com o número do draft combine. Listagens antigas, de antes da mudança, ainda podem indicar um pouco mais do que a altura descalço do jogador.',
      },
      {
        question: 'Por que o mesmo atleta às vezes aparece com alturas diferentes em lugares diferentes?',
        answer: 'Porque os números vêm de momentos e métodos diferentes. Um futebolista medido aos 17 anos pode crescer mais um ou dois centímetros, um jogador de basquete listado com tênis parece mais alto do que o mesmo jogador descalço, e algumas federações arredondam para a polegada mais próxima, enquanto outras arredondam para o centímetro mais próximo. Os elencos das equipes também são atualizados em momentos diferentes. Quando duas fontes divergem em um ou dois centímetros, ambas podem ser honestas; elas simplesmente estão medindo coisas diferentes, e o valor descalço de combine é o que deve ser usado nas comparações.',
      },
      {
        question: 'Qual é a altura de um aro de basquete em comparação com um gol de futebol?',
        answer: 'Um aro de basquete fica a 305 cm, 61 cm inteiros acima de uma trave de futebol, a 244 cm. Essa diferença é fácil de sentir na ferramenta: um jogador alto de basquete como Yao Ming, com 229 cm, ainda alcança bem abaixo do aro em que enterra, enquanto um goleiro de futebol em pé sob uma trave de 244 cm consegue alcançar a trave com um salto. A rede de vôlei masculino, com 243 cm, tem quase exatamente a mesma altura de uma trave de futebol, uma coincidência que vale a pena ver lado a lado.',
      },
      {
        question: 'Por que ginastas são baixos enquanto jogadores de basquete são altos?',
        answer: 'Cada esporte seleciona o corpo que sua física recompensa. A ginástica recompensa um corpo compacto porque um atleta mais baixo gira mais rápido no ar e tem menos distância para percorrer ao redor do aparelho, e é por isso que a maior ginasta de todos os tempos, Simone Biles, tem 142 cm. O basquete recompensa o alcance, porque o aro é fixado em 305 cm e cada centímetro extra de altura aproxima as mãos do jogador dele. Nenhum dos dois tipos de corpo é melhor em geral; cada um é uma resposta às exigências de um jogo específico.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que o esporte transformou a altura em uma estatística oficial',
        paragraphs: [
          'Poucos campos registram a altura humana com tanto cuidado quanto o esporte profissional. Todo draft combine da NBA mede os candidatos descalços com um estadiômetro, toda federação de futebol registra as alturas de seus jogadores para os programas das partidas, e toda ficha de equipe olímpica lista seus atletas no centímetro. O motivo é prático: a altura decide qual posição um jogador pode ocupar, como uma equipe defende e quais táticas fazem sentido. Um técnico de basquete precisa saber se um novato consegue marcar com credibilidade um pivô de 224 cm; um técnico de vôlei precisa saber se um bloqueador consegue passar por cima de uma rede de 243 cm; um olheiro de futebol precisa saber se o centro de gravidade baixo de um ponta o ajudará a mudar de direção em velocidade.',
          'Essa atenção oficial torna as alturas esportivas excepcionalmente confiáveis em comparação com as alturas de celebridades, que frequentemente vêm de entrevistas e palpites. Quando esta página lista Yao Ming com 229 cm ou Muggsy Bogues com 160 cm, são medições de liga, não estimativas. A diferença entre eles, 69 cm, é uma das maiores já vistas entre dois jogadores na mesma liga profissional, e é uma âncora útil para toda a categoria: coloque os dois lado a lado na ferramenta e você consegue ver imediatamente o que "alto para o basquete" e "baixo para o basquete" realmente significam, sem nenhum exagero.',
        ],
      },
      {
        heading: 'Descalço, com tênis ou no elenco',
        paragraphs: [
          'A confusão mais comum sobre alturas esportivas é a diferença entre uma medição descalço e uma altura listada. Por anos, os elencos da NBA mostravam os jogadores com seus tênis, o que adicionava alguns centímetros e fazia um jogador de 6 ft 5 in parecer ter 6 ft 7 in. A liga encerrou essa prática em 2019 e agora certifica alturas descalço nos acampamentos de treinamento, e é por isso que alguns jogadores estabelecidos há muito tempo pareceram encolher uma polegada da noite para o dia sem terem mudado nada. Se você comparar uma listagem moderna com um card antigo, o valor descalço é o honesto, e esta página o usa em tudo.',
          'Outros esportes têm suas próprias convenções. As alturas do futebol vêm de registros de federações e clubes que normalmente são tomados uma vez e raramente remedidos, então um jogador que cresceu depois de assinar como adolescente pode ficar listado um centímetro mais baixo por anos. Os elencos de críquete listam alturas a partir de registros das equipes, e não de um combine, e os perfis de ginástica vêm de federações nacionais que medem os atletas em competições. Nada disso torna os números não confiáveis, mas significa que uma diferença de um ou dois centímetros entre fontes é ruído normal, e não uma contradição. Para os equipamentos, em contraste, não há ruído algum: o livro de regras fixa o aro, a trave e a rede, e todas as quadras e campos do mundo devem corresponder.',
        ],
      },
      {
        heading: 'Os extremos: gigantes, exceções e os equipamentos contra os quais eles jogam',
        paragraphs: [
          'As comparações mais instrutivas no esporte não são entre dois atletas parecidos, mas entre um atleta e o equipamento que seu esporte fixa no lugar. Um aro de basquete a 305 cm fica 76 cm acima até da cabeça de Yao Ming, o que explica por que enterrar é um feito tanto de salto quanto de altura: os jogadores mais altos ainda precisam sair do chão. Uma trave de futebol a 244 cm fica apenas 15 cm acima da cabeça de Shaquille O\'Neal, e é por isso que os goleiros, que são altos, mas raramente altos como jogadores de basquete, ainda conseguem alcançá-la com um salto e um estiramento. A rede de vôlei masculino, com 243 cm, e a rede feminina, com 224 cm, mostram como um único esporte ajusta seu obstáculo fixo aos seus atletas, e os tocos de críquete, com 71 cm, mostram o extremo oposto: um alvo mal na altura do joelho que um lançador precisa acertar a 20 metros de distância.',
          'Os próprios atletas contam a mesma história pelo outro lado. Victor Wembanyama, com 224 cm, é a estrela ativa mais alta do basquete e ainda está 5 cm abaixo de Yao Ming, enquanto Simone Biles, com 142 cm, é 18 cm mais baixa do que Muggsy Bogues, o homem mais baixo que já jogou na NBA, e ainda assim é a ginasta mais condecorada da história. Usain Bolt, com 196 cm, quebrou a suposição de que velocistas precisam ser baixos, usando passadas longas para cobrir terreno que rivais menores precisavam de mais passos para atravessar. Lionel Messi, com 170 cm, e Cristiano Ronaldo, com 187 cm, mostram que a maior rivalidade do futebol também era uma diferença de altura de 17 cm que nunca decidiu qual dos dois era melhor. A altura no esporte é uma vantagem em algumas posições e um compromisso em outras, nunca a história inteira.',
        ],
      },
      {
        heading: 'Como usar a ferramenta de comparação para esportes',
        paragraphs: [
          'Comece com você mesmo. Adicione sua própria altura ao lado de um aro de basquete e você verá exatamente o quanto o alvo de 305 cm fica acima do seu alcance, o que torna o atletismo de uma enterrada de repente concreto. Depois adicione um jogador favorito: fique ao lado de Wembanyama para sentir o que os jornalistas querem dizer com um talento físico geracional, ou ao lado de Muggsy Bogues para ver que uma carreira na NBA é possível com 160 cm. Técnicos e torcedores usam o mesmo truque com equipes inteiras, alinhando um quinteto titular para verificar se um time é genuinamente alto ou simplesmente tem um pivô alto cercado por armadores de tamanho médio.',
          'As comparações de equipamentos são igualmente reveladoras. Coloque um gol de futebol ao lado de um aro de basquete e a diferença de 61 cm entre eles se torna visível de um jeito que ler os números nunca alcança por completo. Coloque uma rede de vôlei masculino ao lado de uma rede feminina e a diferença de 19 cm explica por que os dois jogos parecem e soam diferentes, embora a quadra tenha o mesmo tamanho. E coloque os tocos de críquete ao lado de qualquer um deles e você se lembra de que alguns esportes tornam seu objeto central deliberadamente pequeno, para que a habilidade, e não a estatura, decida a disputa. A ferramenta mantém todos e tudo sobre uma única linha de base, que é a única maneira honesta de comparar uma pessoa com uma peça de mobiliário construída segundo um livro de regras.',
        ],
      },
    ],
  },
  apparel: {
    measurementAnchor: 'Deslocamento vertical efetivo adicionado à estatura descalço',
    measurementGuide: 'A altura de vestuário é medida como o deslocamento vertical efetivo que uma peça adiciona à estatura descalço. Para calçados, isso significa a pilha do salto ou a espessura da plataforma sob o pé, medida do chão até a palmilha no calcanhar; para chapéus, significa a altura da copa acima do topo da cabeça. Um salto levanta apenas a parte de trás do pé, então o mesmo salto rotulado adiciona altura percebida diferente dependendo do ângulo do pé e de quanto a espuma se comprime sob o peso do corpo, enquanto uma plataforma completa levanta o pé inteiro por igual. É por isso que dois sapatos com a mesma altura anunciada podem deixar você em alturas visivelmente diferentes.',
    measurementNote: 'O vestuário adiciona altura acima da estatura descalço: compare o deslocamento, não o sapato em si.',
    commonHeights: [
      { label: 'Tênis de Corrida Padrão', note: 'Altura adicionada: pilha típica de calcanhar de entressola de espuma; tênis de corrida comuns medem 21–30 mm de pilha' },
      { label: 'Sapato Social Masculino (Oxford)', note: 'Altura adicionada: salto padrão de couro empilhado, cerca de 1 polegada' },
      { label: 'Salto Roper (Bota de Cowboy)', note: 'Altura adicionada: salto roper plano de 1 polegada, feito para caminhar e para o trabalho no rancho' },
      { label: 'Palmilha Elevadora de Calcanhar', note: 'Altura adicionada: uma única palmilha removível de calcanhar, na extremidade inferior da faixa de inserções de 0,5–1,5 pol.' },
      { label: 'Tênis de Corrida Maximalista', note: 'Altura adicionada: pilha de calcanhar de 41,3 mm medida em laboratório na classe maximalista' },
      { label: 'Bota de Trabalho (Sola com Travas)', note: 'Altura adicionada: pilha de sola de bota de couro pesada e costurada' },
      { label: 'Salto de Montaria de Cowboy', note: 'Altura adicionada: salto tradicional de montaria angulado de 2 polegadas, moldado para segurar um estribo' },
      { label: 'Salto Kitten', note: 'Altura adicionada: salto curto e fino, até 2 polegadas' },
      { label: 'Sapato Elevador (Cotidiano)', note: 'Altura adicionada: cunha interna escondida; modelos cotidianos dão cerca de 2,8 polegadas de elevação' },
      { label: 'Salto Agulha Clássico', note: 'Altura adicionada: salto alto formal de moda, na faixa clássica de 3–4 pol.' },
      { label: 'Cartola (Copa Moderna)', note: 'Altura adicionada acima da cabeça: a copa moderna da cartola tem em média 5 polegadas (as chaminés históricas chegavam a 8 pol.)' },
      { label: 'Bota Plataforma', note: 'Altura adicionada: plataforma elevada de passarela na classe extra-alta de 6 polegadas' },
    ],
    faqs: [
      {
        question: 'Os sapatos realmente deixam você mais alto, ou só fazem você parecer mais alto?',
        answer: 'Eles realmente elevam sua altura medida em pé, exatamente pela espessura do material sob o seu pé. Se você mede 175 cm descalço e calça tênis de corrida com uma pilha de 3 cm, você mede 178 cm nesses sapatos. O que os sapatos não mudam é a estatura do seu próprio corpo: tire-os e você volta a 175 cm. É essa distinção que faz médicos e oficiais de esporte medirem a altura descalço, enquanto fotógrafos e diretores de elenco frequentemente a medem com qualquer calçado que a pessoa esteja usando.',
      },
      {
        question: 'Por que a mesma altura de salto parece diferente em sapatos diferentes?',
        answer: 'Porque "altura do salto" descreve apenas a parte de trás do sapato. Um salto agulha de 10 cm inclina seu pé de forma acentuada, já que o antepé fica perto do chão, enquanto uma plataforma de 10 cm levanta o pé inteiro nivelado e parece muito mais estável. A firmeza da espuma também importa: espuma macia se comprime sob o peso do corpo, então parte da pilha anunciada desaparece no momento em que você fica sobre ela, enquanto uma sola firme mantém quase tudo. O comprimento do pé também desempenha um papel, já que as marcas escalam levemente a altura do salto conforme o tamanho do sapato para manter as proporções estáveis.',
      },
      {
        question: 'Quanta altura os sapatos elevadores realmente adicionam?',
        answer: 'Sapatos elevadores cotidianos normalmente adicionam de 2 a 3 polegadas por meio de uma cunha escondida dentro do sapato, com alguns designs especializados indo além. O problema é que quase todos os valores de elevação nesta categoria são a alegação do próprio fabricante, e não um número medido independentemente em laboratório, então duas marcas anunciando a mesma elevação podem entregar resultados visivelmente diferentes. O outro compromisso é o conforto: uma cunha escondida maior significa um ângulo de pé mais acentuado, e é por isso que a maioria dos modelos de uso diário fica em torno da marca de 2 a 3 polegadas.',
      },
      {
        question: 'Chapéus contam para a sua altura?',
        answer: 'Contam para a sua altura total no topo, que é o que importa para vãos de porta, fotografias e qualquer pessoa em pé ao seu lado. Uma copa moderna de cartola adiciona cerca de 5 polegadas acima da cabeça, então uma pessoa de 175 cm descalço chega a cerca de 188 cm até o topo do chapéu. Equipamentos de proteção para a cabeça funcionam da mesma forma ao contrário: um capacete de segurança adiciona folga acima do crânio em vez de estatura, mas a silhueta em uma tela de comparação ainda cresce nessa quantidade.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que o calçado muda sua altura mais do que você imagina',
        paragraphs: [
          'Quase ninguém anda descalço por aí, mas quase todo valor de altura que você ouve é um valor descalço. É nessa lacuna que o vestuário faz seu trabalho silencioso. Uma pessoa de 175 cm descalço tem 178 cm em tênis de corrida, 180 cm em botas de cowboy e 185 cm em saltos agulha clássicos, tudo sem crescer um milímetro. A mudança é grande o suficiente para importar nas situações em que a altura é realmente percebida: fotos de grupo, batentes de porta, uniformes de trabalho e a longa discussão sobre se alguém é "realmente" seis pés de altura. A maioria dessas discussões é, na verdade, discussão sobre calçado, porque uma pessoa está lembrando de uma medição descalço e a outra está lembrando de como alguém parecia de botas.',
          'A confusão é compreensível, porque a altura do sapato raramente é declarada honestamente. As páginas de produto anunciam o salto, não a altura que você mantém. A altura da pilha de um tênis de corrida é medida sem um pé dentro dele, então a espuma ainda não se comprimiu sob o seu peso. A altura rotulada de um salto agulha ignora o fato de que o antepé fica muito mais baixo do que o calcanhar, o que muda sua postura e a altura que você aparenta para alguém de frente para você. E a altura de uma plataforma às vezes é citada incluindo a sola externa e às vezes não. O resultado é que duas pessoas podem comprar sapatos com o mesmo número anunciado e acabar em alturas notavelmente diferentes, e ambas insistirão que o rótulo estava certo.',
        ],
      },
      {
        heading: 'Pilhas de salto, plataformas e cunhas: o que realmente levanta você',
        paragraphs: [
          'Existem apenas três maneiras de um sapato adicionar altura, e elas se comportam de forma muito diferente. Uma pilha de salto levanta a parte de trás do pé enquanto os dedos ficam baixos, e é por isso que saltos mudam sua postura, o ângulo da sua panturrilha e seu equilíbrio de uma só vez. Quanto mais alto o salto, mais acentuada a inclinação, e é por isso que um salto agulha de 10 cm não parece em nada com uma plataforma de 10 cm, embora os dois adicionem o mesmo número à sua altura em pé. Uma plataforma levanta o pé inteiro por igual, então seu tornozelo fica perto do seu ângulo natural e a elevação parece mais calma, embora o sapato se torne mais pesado e mais desajeitado. Uma cunha escondida, como a usada em sapatos elevadores, divide a diferença: parte da elevação fica dentro do sapato, onde ninguém consegue ver, e a sola visível permanece modesta, então o sapato passa por calçado comum enquanto adiciona polegadas silenciosamente.',
          'Os números por trás desses designs são mais regulados do que a maioria das pessoas imagina. A World Athletics limita os tênis de corrida de competição a uma altura de pilha de 40 mm, o que diz algo sobre quanta elevação a espuma moderna consegue entregar: os tênis de corrida mais altos medidos em laboratório ficam logo acima de 40 mm, e o tênis médio fica em torno de 30 mm. Isso significa que a diferença entre um tênis comum e o tênis de corrida mais alto do mercado é de apenas cerca de um centímetro, embora o marketing faça parecer dramática. Os verdadeiros saltos vêm do calçado de moda e de trabalho, em que um salto de montaria, um salto agulha ou uma bota plataforma pode adicionar de duas a seis vezes mais do que qualquer tênis.',
        ],
      },
      {
        heading: 'Os extremos: do descalço às plataformas de passarela',
        paragraphs: [
          'Na ponta modesta, um salto de sapato social de cerca de 1 polegada é tão normal que a maioria das pessoas esquece que ele existe, e um salto roper em uma bota de cowboy adiciona a mesma quantidade parecendo parte do design de trabalho da bota, e não um dispositivo de altura. Na outra ponta, botas plataforma da classe de 6 polegadas e cartolas chaminé históricas com 8 polegadas acima da cabeça são declarações deliberadas: existem para serem notadas. Entre esses polos ficam os compromissos cotidianos que a maioria das pessoas realmente usa, de saltos kitten de 2 polegadas a sapatos elevadores escondendo de 2 a 3 polegadas dentro de um sapato de aparência comum. O padrão interessante é que os maiores ganhos de altura costumam ser os mais visíveis, enquanto os ganhos mais discretos param em torno de 3 polegadas, porque além disso o ângulo do pé entrega o truque.',
          'Os chapéus merecem uma menção aqui porque quebram a lógica usual. O calçado levanta você por baixo, então seu corpo permanece o mesmo e o chão efetivamente desce. Os chapéus adicionam altura por cima, então seu corpo permanece o mesmo e sua silhueta simplesmente se estende para cima. Uma cartola não deixa você mais alto em nenhum sentido que um médico reconheceria, mas muda cada fotografia em que você aparece e cada vão de porta pelo qual você passa. É por isso que comparar vestuário em uma tela de alturas é útil: ela mostra a altura visual total que uma pessoa ocupa no mundo, e não apenas o número em sua ficha médica.',
        ],
      },
      {
        heading: 'Como usar a ferramenta de comparação nesta categoria',
        paragraphs: [
          'Comece com uma silhueta humana em uma altura descalço conhecida, depois coloque um deslocamento de vestuário ao lado dela para ver a altura vestida. A comparação mais reveladora é a mesma pessoa em calçados diferentes: uma silhueta de tênis, uma de botas, uma de saltos agulha, e as diferenças entre elas são a história honesta do que os sapatos fazem. Você também pode comparar tipos de salto diretamente, o que resolve discussões sobre se um salto de montaria ou um salto kitten adiciona mais, e se uma plataforma realmente vence um salto agulha com a mesma altura rotulada. Lembre-se de que cada entrada de vestuário aqui é um deslocamento, não um objeto independente: um salto agulha de 10 cm não tem 10 cm de altura sozinho, ele adiciona 10 cm a quem o usa, então sempre o combine com uma figura humana para ler o resultado corretamente.',
        ],
      },
    ],
  },
  fictional: {
    measurementAnchor: 'Tradição canônica das franquias e arquivos de construção de mundo',
    measurementGuide: 'As alturas fictícias vêm da fonte canônica de uma versão específica do personagem: um databank de franquia, um livro de referência licenciado ou um livro de regras de RPG de mesa, como o Monster Manual de Dungeons and Dragons, que normalmente declara uma média para um tipo de criatura em vez de um valor exato para um indivíduo. O mesmo personagem frequentemente tem alturas oficiais diferentes entre adaptações, porque os filmes reescalam criaturas para a história, os jogos as rebalanceiam e novas edições revisam números antigos. Esta página usa um valor declarado por versão e nomeia essa versão, então uma comparação sempre mostra qual Kong ou qual Godzilla você está vendo.',
    measurementNote: 'As alturas fictícias seguem a versão canônica declarada; adaptações do mesmo personagem frequentemente diferem.',
    commonHeights: [
      { label: 'Yoda', note: 'Databank de Star Wars: 0,66 m' },
      { label: 'Hobbit (média)', note: 'Prólogo de O Senhor dos Anéis, de Tolkien: altura média dos hobbits de 3 ft 6 in' },
      { label: 'Gandalf', note: 'Notas tardias de Tolkien: o mago tinha pelo menos 5 ft 6 in' },
      { label: 'Legolas', note: 'Guias de personagens de Tolkien: o elfo tem cerca de 6 ft' },
      { label: 'Aragorn', note: 'Notas de Tolkien, citadas em The Lord of the Rings: A Reader\'s Companion' },
      { label: 'Darth Vader (blindado)', note: 'Databank de Star Wars: 2,03 m em armadura completa' },
      { label: 'Chewbacca', note: 'Databank de Star Wars: 2,28 m' },
      { label: 'Gigante da Colina (D&D 5e)', note: 'O menor dos gigantes verdadeiros, com média de 16 ft' },
      { label: 'Gigante do Gelo (D&D 5e)', note: 'Com média de 21 ft no ranking de gigantes da 5e' },
      { label: 'Gigante das Nuvens (D&D 5e)', note: '24 ft no ranking de gigantes da 5e' },
      { label: 'King Kong (1933, Nova York)', note: 'Escalado para 24 ft nas cenas de Nova York (18 ft na Ilha da Caveira)' },
      { label: 'Gigante da Tempestade (D&D 5e)', note: 'O mais alto dos gigantes verdadeiros, com média de 26 ft' },
      { label: 'King Kong (Ilha da Caveira, 2017)', note: 'Kong adolescente, com 104 ft de altura' },
      { label: 'Godzilla (2014)', note: '108 m de altura no filme de 2014' },
    ],
    faqs: [
      {
        question: 'Por que o mesmo personagem tem alturas diferentes em filmes diferentes?',
        answer: 'Porque os cineastas reescalam as criaturas para se encaixar na história que estão contando, e não para corresponder à régua de um filme anterior. O King Kong original foi construído com 18 pés na Ilha da Caveira e reescalado para 24 pés quando chegou a Nova York, porque precisava parecer maior contra a cidade. Décadas depois, Kong foi definido com 104 pés em A Ilha da Caveira (2017) para que um dia pudesse enfrentar um Godzilla de mais de 100 metros. Nenhum dos valores é um erro: cada um é a altura oficial da sua própria versão, e é por isso que esta página sempre nomeia a versão ao lado do número.',
      },
      {
        question: 'As alturas dos livros de regras de RPG de mesa são medições exatas?',
        answer: 'Não, são médias para um tipo de criatura, e os livros de regras dizem isso. A tradição do Monster Manual de Dungeons and Dragons descreve um gigante da colina com cerca de 16 pés e um gigante da tempestade com cerca de 26 pés, com gigantes individuais variando acima e abaixo desses valores. Isso é uma característica, não uma falha: um mestre de jogo precisa de um gigante típico para um encontro, e não de um censo de todos os gigantes do mundo. Quando você comparar um gigante de livro de regras com um humano, leia o resultado como "um exemplar típico desse tipo", e não como um indivíduo nomeado específico.',
      },
      {
        question: 'Por que as alturas de Star Wars são tão precisas?',
        answer: 'Porque o Databank oficial da Lucasfilm publica valores métricos únicos para seus personagens, como Yoda com 0,66 m, Darth Vader com 2,03 m em armadura e Chewbacca com 2,28 m. Esses números vêm de registros de produção e continuidade, e não de descrições em prosa, então se comportam mais como medições do mundo real do que como estimativas literárias. O compromisso é que o valor descreve o personagem como oficialmente catalogado, o que pode diferir da altura do próprio ator: o intérprete dentro da fantasia nem sempre tem a mesma altura do personagem no papel.',
      },
      {
        question: 'Posso comparar um kaiju com um humano na mesma tela?',
        answer: 'Sim, e o resultado é o objetivo: Godzilla com 108 metros ao lado de um humano de 175 cm torna a diferença de escala instantaneamente óbvia de um jeito que ler "108 metros" nunca faz. A tela encaixa tudo em uma linha de base compartilhada, então o humano se torna uma linha fina na parte inferior do quadro e o kaiju se ergue sobre ele. Para criaturas muito grandes, ajuda adicionar um marco familiar como etapa intermediária, como um prédio ou um animal alto, para que o olho tenha algo por onde subir antes de chegar ao topo do monstro.',
      },
    ],
    editorialSections: [
      {
        heading: 'Por que as alturas fictícias nunca são apenas um número',
        paragraphs: [
          'Pergunte qual é a altura de King Kong e você não fez uma pergunta completa, porque não existe um único King Kong. O macaco de 1933 foi escalado para 18 pés enquanto estava na Ilha da Caveira e para 24 pés quando se soltou em Nova York, já que os cineastas queriam que ele parecesse maior contra arranha-céus do que contra as árvores da selva. O Kong de 2017 foi definido com 104 pés, em parte porque foi escrito como um adolescente ainda em crescimento e em parte porque o estúdio já sabia que ele um dia teria de lutar contra um Godzilla de mais de 100 metros. O próprio Godzilla cresceu ao longo de sua história, de 50 metros no filme original de 1954 para 108 metros no filme de 2014 e cerca de 120 metros em entradas posteriores do MonsterVerse. Cada um desses números é oficial para sua própria versão, e cada um contradiz os outros, e é exatamente por isso que a altura fictícia é um problema de catalogação, e não um problema de medição.',
          'A mesma instabilidade aparece em lugares mais discretos. Um personagem descrito em prosa como "alto" pode ser desenhado baixo por um artista de quadrinhos e imponente pelo próximo, e um jogo de mesa pode revisar o tamanho de uma criatura quando uma nova edição rebalanceia o jogo. Os fãs discutem essas diferenças sem parar, mas as discussões normalmente perdem o ponto real: a altura fictícia é uma decisão de design, não um fato físico. Um diretor torna um monstro maior quando a cena precisa de mais ameaça, um designer de jogo torna um gigante menor quando um calabouço precisa fazê-lo passar por uma porta, e um autor deixa uma altura vaga quando o mistério importa mais do que a medição. Entender isso é o primeiro passo para comparar personagens fictícios de forma sensata.',
        ],
      },
      {
        heading: 'Fontes canônicas: quem decide a altura de um personagem',
        paragraphs: [
          'A resposta depende da franquia, e as franquias se dividem em três grupos aproximados. O primeiro grupo publica valores oficiais precisos: o Databank de Star Wars lista Yoda com 0,66 m, Darth Vader com 2,03 m em armadura e Chewbacca com 2,28 m, e esses números são tratados como continuidade. Quando uma fonte assim existe, há pouco espaço para debate, embora ainda haja espaço para confusão, já que o valor blindado e o ator sem armadura são números diferentes e os fãs frequentemente os misturam. O segundo grupo dá médias para um tipo, em vez de um valor para um indivíduo: a tradição de Dungeons and Dragons descreve gigantes da colina com cerca de 16 pés, gigantes do gelo com 21, gigantes das nuvens com 24 e gigantes da tempestade com 26, com o entendimento de que qualquer gigante específico pode ser mais alto ou mais baixo. O terceiro grupo nunca declara um número, e o valor que todo mundo cita vem de uma carta do autor, uma nota tardia ou um livro complementar publicado anos depois.',
          'A obra de Tolkien atravessa os três grupos, o que a torna um bom exemplo do problema. O prólogo de O Senhor dos Anéis declara a altura média dos hobbits diretamente, com 3 pés e 6 polegadas, então esse valor é sólido. Os 6 pés e 6 polegadas de Aragorn e os 5 pés e 6 polegadas de Gandalf vêm das próprias notas posteriores de Tolkien e do Reader\'s Companion, o que é quase tão forte. Legolas, com cerca de 6 pés, é um valor de guia amplamente repetido, e não uma linha dos livros, então carrega um pouco mais de incerteza. Uma página de comparação responsável deve manter essas distinções visíveis, em vez de achatar cada valor ao mesmo nível de confiança, porque um leitor que sabe quais números são sólidos como rocha e quais são aproximados confiará mais na página, e não menos.',
        ],
      },
      {
        heading: 'Os extremos: de Yoda a Godzilla',
        paragraphs: [
          'A categoria fictícia tem a faixa de alturas mais ampla de todas as categorias deste site, e essa faixa é sua principal atração. Na ponta pequena, Yoda, com 66 cm, fica mal acima da altura de uma criança pequena, mas é uma das figuras mais poderosas do seu universo, que é exatamente a piada e o objetivo do personagem. Um hobbit, com 107 cm, não é muito mais alto, e o contraste entre a estatura dos hobbits e a coragem dos hobbits é um dos motores da história de Tolkien. Na ponta humana da escala, Aragorn, com 198 cm, e Chewbacca, com 228 cm, são ambos reconhecivelmente em forma de pessoa, o que os torna boas pontes: um leitor consegue imaginar Aragorn, depois imaginar Chewbacca ao lado dele, e a partir daí começar a entender o que um gigante significa.',
          'Então a escala se abre. Um gigante da colina, com 488 cm, já tem cerca de três vezes a altura de um humano, e a escada dos gigantes sobe de forma constante por gigantes do gelo, das nuvens e da tempestade até chegar a 792 cm, aproximadamente a altura de uma casa de dois andares. King Kong, com 104 pés em sua versão de 2017, tem cerca de quatro vezes isso de novo, e Godzilla, com 108 metros, é mais de três vezes a altura de Kong por cima disso. O interessante nessa escada é que cada degrau foi projetado por alguém pensando no degrau anterior: o gigante da tempestade é grande em comparação com um humano, Kong é grande em comparação com um gigante, e Godzilla é grande em comparação com Kong. Empilhá-los em uma única tela mostra uma cadeia de superação deliberada que nenhum número isolado consegue transmitir.',
        ],
      },
      {
        heading: 'Como usar a ferramenta de comparação nesta categoria',
        paragraphs: [
          'A comparação fictícia mais útil raramente é fictício contra fictício. Coloque um personagem fictício ao lado de um humano primeiro, porque o humano é a unidade que seu olho já entende, e a diferença entre eles é o fato que você está tentando aprender. Um gigante da tempestade ao lado de um homem médio diz mais do que um gigante da tempestade ao lado de um gigante das nuvens, porque o homem é familiar e o gigante não é. Uma vez definida essa âncora, adicione uma segunda figura fictícia para ver a relação entre as duas invenções e depois, para as criaturas muito grandes, adicione um prédio ou um veículo como degrau intermediário, para que o olho tenha um caminho para subir.',
          'Dois hábitos tornam as comparações fictícias muito mais confiáveis. Primeiro, sempre verifique qual versão você está comparando, já que Kong sozinho tem pelo menos três alturas oficiais e Godzilla tem várias, e misturar versões silenciosamente produz absurdos. Segundo, lembre-se de que um valor de livro de regras é uma média para um tipo: seu gigante da colina pode ser um pé mais alto ou mais baixo do que a média de 16 pés, e isso não é um erro da ferramenta, é como a fonte foi escrita. Usada com esses dois cuidados, a tela se torna algo que nenhum parágrafo consegue substituir: uma única imagem de como mundos inventados se comparam ao real.',
        ],
      },
    ],
  },
};

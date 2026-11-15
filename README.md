🍔 Jo's Burger | Landing Page Imersiva (New York Style)
Este repositório apresenta o código-fonte de uma Landing Page de alta performance e apelo visual, desenvolvida com foco em Pixel Perfection para replicar rigorosamente a identidade visual de uma hamburgueria temática urbana no estilo neorsequino.


O projeto foi construído do zero priorizando a fidelidade de layout, refinamento tipográfico, posicionamento absoluto de elementos e uma experiência de usuário (UX) fluida e interativa.


🎯 A Proposta & A Concepção do Projeto


A ideia central por trás do desenvolvimento foi transformar um layout estático em uma interface web funcional e elegante, onde cada elemento gráfico estivesse milimetricamente alinhado à proposta de design original.


A concepção seguiu três pilares fundamentais:


Fidelidade Visual Absoluta: Respeito rigoroso a proporções, respiros, pesos de fontes e hierarquia visual exibida no protótipo de referência.

Arquitetura de Posicionamento Estável: Em vez de fluxos de documentos convencionais que quebram facilmente em diferentes viewports, o projeto utiliza estratégias avançadas de posicionamento absoluto coordenado (position: absolute) combinadas com controle de camadas (z-index) para fixar perfeitamente o cabeçalho, a seção de destaque (hero) e o rodapé institucional sobre um fundo unificado em tela cheia.

Interatividade Imersiva: Adição de microinterações em JavaScript que respondem dinamicamente aos comandos do usuário, simulando focos de iluminação realistas ("luzes de destaque") nos elementos de navegação e conversão.

🛠️ Detalhamento Técnico & Código

1. HTML5 Semântico (A Estrutura Base)
A marcação foi construída utilizando os elementos mais modernos e semânticos do HTML5 para garantir acessibilidade e clareza estrutural:

<header class="site-header">: Contém a identidade visual corporativa (logo) e o menu de navegação estruturado em lista de hiperlinks (<nav class="nav-menu">).

<main> e <section>: Agrupam o núcleo comercial da página, abrigando a imagem do letreiro principal em alta escala (titulo-new-york.png), o parágrafo descritivo de valor e a chamada para ação principal (<button>).

<footer>: Isola a faixa de benefícios institucionais na base da tela, mantendo o layout organizado e modular.

2. CSS3 Avançado (Estilização e Geometria da Interface)
O arquivo de estilos (styles.css) foi rigorosamente planejado para sustentar o layout sem deslocamentos indesejados:

Reset Global e Box-Sizing: Padronização de margens, preenchimentos e cálculo de box model para evitar distorções de layout.

Fundo de Tela Dinâmico (.Fundo-image): Utiliza position: absolute, width: 100%, height: 100vh e object-fit: cover para forçar a imagem de fundo principal a cobrir integralmente a tela, mantendo-se perfeitamente estática e proporcional em diferentes resoluções.

Header Absoluto e Flexbox: O cabeçalho é posicionado no topo (top: 0, left: 0) com display: flex e justify-content: space-between, garantindo que a logo fique perfeitamente alinhada à esquerda e o menu de navegação à direita, com espaçamento milimétrico controlado pela propriedade gap.

Tipografia e Cores de Alto Contraste: Uso importado da tipografia Poppins combinada com pesos robustos (font-weight: 800 para o menu e font-weight: 600 para o parágrafo), conversão em caixa-alta (text-transform: uppercase) e a cor escura de alta legibilidade (#111111) para destacar o conteúdo sobre o fundo laranja vibrante.

Travejamento do Bloco Principal (section): Posicionado de forma absoluta (top: 120px, left: 125px) para garantir que o letreiro gigante, o texto e o botão "ORDER NOW" fiquem exatamente no quadrante de leitura ideal do usuário.

3. JavaScript Interativo (Efeitos de Iluminação e UX)
Para elevar a experiência do usuário, foi implementado um script dedicado (script.js) que adiciona efeitos visuais de iluminação baseados em eventos de mouse e clique:

Efeitos Dinâmicos no Menu: Utilização de seletores de eventos (mouseenter, mouseleave, click) para aplicar sombras dinâmicas de texto (text-shadow) com tons de branco difuso e transições suaves (transform: translateY), criando uma sensação táctil e luminosa quando o usuário interage com as opções About, Menu, Reviews e Social.

Flash e Brilho no Botão de Conversão (ORDER NOW): O botão principal reage à aproximação do cursor gerando sombras de caixa difusas (box-shadow) que simulam um halo de luz branca. Nos eventos de clique (mousedown/mouseup), o script dispara um efeito visual de clarão intenso, dando destaque absoluto à principal ação comercial da página.

<img width="433" height="174" alt="image" src="https://github.com/user-attachments/assets/fe71d072-071b-4151-8a78-c79e50ddd9ef" />




Prévia :  <img width="1251" height="553" alt="image" src="https://github.com/user-attachments/assets/3f74ea1b-22ee-4dd3-8419-f7023e02c924" />
